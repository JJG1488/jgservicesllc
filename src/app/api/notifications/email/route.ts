import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { to, subject, contractId, clientName, status, servicePackage } = await request.json();

    if (!to || !subject) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Email template based on status
    const emailBody = generateEmailBody(status, clientName, contractId, servicePackage);

    // Using Google Workspace Gmail API or similar
    // For now, this is a placeholder - you'll configure this with your Google Workspace
    const emailData = {
      to,
      from: 'info@jgservicesllc.com',
      subject,
      html: emailBody,
    };

    console.log('Email would be sent:', emailData);

    // TODO: Integrate with your Google Workspace email service
    // You can use:
    // 1. Zapier Email action (easiest)
    // 2. Google Workspace Gmail API
    // 3. SendGrid/Resend with your domain

    return NextResponse.json({
      success: true,
      message: 'Email queued for sending',
      recipient: to,
    });
  } catch (error) {
    console.error('Email notification error:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

function generateEmailBody(status: string, clientName: string, contractId: string, servicePackage: string): string {
  if (status === 'approved') {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
          .button { display: inline-block; background: #10b981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Contract Approved!</h1>
          </div>
          <div class="content">
            <p>Hello ${clientName},</p>

            <p>Great news! Your contract has been <strong>approved</strong> and we're excited to get started on your project!</p>

            <p><strong>Service Package:</strong> ${servicePackage}</p>
            <p><strong>Contract ID:</strong> ${contractId}</p>

            <h3>Next Steps:</h3>
            <ol>
              <li>You'll receive a payment request shortly</li>
              <li>Once payment is received, we'll schedule a kickoff call</li>
              <li>Project timeline will be sent within 24 hours</li>
            </ol>

            <p>If you have any questions, feel free to reply to this email or call us at (586) 276-5646.</p>

            <p>Best regards,<br>
            <strong>James Gault</strong><br>
            JGServicesLLC<br>
            info@jgservicesllc.com</p>
          </div>
          <div class="footer">
            <p>JGServicesLLC - Professional Web Development</p>
            <p>© ${new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
      </body>
      </html>
    `;
  } else {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #dc2626; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Contract Update</h1>
          </div>
          <div class="content">
            <p>Hello ${clientName},</p>

            <p>Thank you for your interest in working with JGServicesLLC. After reviewing your contract submission, we're unable to move forward at this time.</p>

            <p><strong>Contract ID:</strong> ${contractId}</p>

            <p>This could be due to various reasons such as project scope, timeline conflicts, or budget constraints. We appreciate you considering us for your project.</p>

            <p>If you'd like to discuss alternative options or have questions, please don't hesitate to contact us:</p>
            <ul>
              <li>Email: info@jgservicesllc.com</li>
              <li>Phone: (586) 276-5646</li>
            </ul>

            <p>Best regards,<br>
            <strong>James Gault</strong><br>
            JGServicesLLC</p>
          </div>
          <div class="footer">
            <p>JGServicesLLC - Professional Web Development</p>
            <p>© ${new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }
}
