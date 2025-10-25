import { NextRequest, NextResponse } from 'next/server';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Initialize Firebase Admin (server-side only)
if (!getApps().length) {
  // In production, use environment variables for credentials
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

const db = getFirestore();

export async function POST(request: NextRequest) {
  try {
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
