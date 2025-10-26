import { NextRequest, NextResponse } from 'next/server';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';

// Check if Firebase Admin credentials are properly configured
const hasValidCredentials =
  process.env.FIREBASE_PROJECT_ID &&
  process.env.FIREBASE_CLIENT_EMAIL &&
  process.env.FIREBASE_PRIVATE_KEY &&
  process.env.FIREBASE_PRIVATE_KEY.includes('BEGIN PRIVATE KEY') &&
  process.env.FIREBASE_PRIVATE_KEY.length > 100;

let db: Firestore | null = null;

// Initialize Firebase Admin only if valid credentials exist
if (hasValidCredentials) {
  try {
    if (!getApps().length) {
      initializeApp({
        credential: cert({
          projectId: process.env.FIREBASE_PROJECT_ID!,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
          privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
        }),
      });
    }
    db = getFirestore();
  } catch (error) {
    console.warn('Firebase Admin initialization skipped:', error);
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check if Firebase Admin is configured
    if (!db) {
      return NextResponse.json(
        {
          error: 'Service temporarily unavailable',
          message: 'Firebase Admin credentials not configured. Please add FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY to environment variables.',
        },
        { status: 503 }
      );
    }

    const { contractId, action, secret } = await request.json();

    // Verify secret key to prevent unauthorized access
    if (secret !== process.env.WEBHOOK_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!contractId || !action) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!['approve', 'reject'].includes(action)) {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    // Update contract in Firebase
    const contractRef = db.collection('contracts').doc(contractId);
    const contractDoc = await contractRef.get();

    if (!contractDoc.exists) {
      return NextResponse.json({ error: 'Contract not found' }, { status: 404 });
    }

    const contractData = contractDoc.data();
    const status = action === 'approve' ? 'approved' : 'rejected';

    await contractRef.update({
      status,
      approved: action === 'approve',
      reviewedAt: new Date().toISOString(),
      reviewedBy: 'admin',
    });

    // Send email to client
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/notifications/email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: contractData?.email,
        subject: `Contract ${status === 'approved' ? 'Approved' : 'Rejected'} - JGServicesLLC`,
        contractId,
        clientName: contractData?.clientName,
        status,
        servicePackage: contractData?.servicePackage,
      }),
    });

    return NextResponse.json({
      success: true,
      message: `Contract ${status} successfully`,
      contractId,
      status,
      emailSent: response.ok,
    });
  } catch (error) {
    console.error('Contract action error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
