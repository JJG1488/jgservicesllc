import { NextRequest, NextResponse } from 'next/server';

/**
 * Zapier Webhook Endpoint
 *
 * This endpoint receives data from your website and formats it for Zapier automations.
 *
 * Use this webhook URL in Zapier to trigger automations when:
 * - New contact form submissions
 * - New contract submissions
 * - New resource downloads
 *
 * Zapier can then:
 * - Send SMS to your phone
 * - Create Notion database entries
 * - Add rows to Google Sheets
 * - Send Slack notifications
 * - Send emails
 */

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { type, secret, ...payload } = data;

    // Verify secret key
    if (secret !== process.env.WEBHOOK_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Format data based on submission type
    let formattedData;

    switch (type) {
      case 'contact':
        formattedData = {
          type: '📧 New Contact Form',
          name: payload.name,
          email: payload.email,
          message: payload.message,
          submittedAt: new Date().toLocaleString(),
          actionUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/admin`,
        };
        break;

      case 'contract':
        formattedData = {
          type: '📄 New Contract Signed',
          clientName: payload.clientName,
          companyName: payload.companyName || 'N/A',
          email: payload.email,
          phone: payload.phone,
          servicePackage: payload.servicePackage,
          budget: payload.budget || 'N/A',
          projectType: payload.projectType,
          projectDescription: payload.projectDescription,
          submittedAt: new Date().toLocaleString(),
          contractId: payload.id,
          approveUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/webhooks/contract-action?action=approve&id=${payload.id}`,
          rejectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/webhooks/contract-action?action=reject&id=${payload.id}`,
          viewUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/admin`,
        };
        break;

      case 'lead':
        formattedData = {
          type: '📥 New Resource Download',
          email: payload.email,
          guide: payload.guide,
          newsletterSubscribed: payload.newsletter ? 'Yes' : 'No',
          submittedAt: new Date().toLocaleString(),
          viewUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/admin`,
        };
        break;

      default:
        return NextResponse.json({ error: 'Invalid submission type' }, { status: 400 });
    }

    // Return formatted data for Zapier
    return NextResponse.json({
      success: true,
      data: formattedData,
    });
  } catch (error) {
    console.error('Zapier webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// GET endpoint for Zapier to test the webhook
export async function GET() {
  return NextResponse.json({
    message: 'Zapier webhook endpoint is active',
    endpoints: {
      contact: 'POST /api/webhooks/zapier with type: "contact"',
      contract: 'POST /api/webhooks/zapier with type: "contract"',
      lead: 'POST /api/webhooks/zapier with type: "lead"',
    },
    requiredFields: {
      secret: 'Your WEBHOOK_SECRET from environment variables',
      type: 'contact | contract | lead',
    },
  });
}
