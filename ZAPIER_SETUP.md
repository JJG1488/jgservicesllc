# Zapier Integration Setup Guide

This guide will help you set up automated notifications and workflows using Zapier, Notion, Google Workspace, and your Firebase database.

## 🎯 What This System Does

### Automatic Notifications
- **SMS to your phone** when someone submits a form
- **Email notifications** with action buttons
- **Notion database** updates for tracking
- **Google Sheets** logs for backup
- **Slack messages** (optional)

### Contract Approval Workflow
1. Client signs contract → Saved to Firebase
2. You get SMS + Email with Approve/Reject buttons
3. Click button → Contract status updates automatically
4. Client gets email notification
5. If approved → Payment request email sent

---

## 📋 Prerequisites

1. **Zapier Account** (Free tier works, Pro recommended)
2. **Google Workspace** (Gmail, Sheets, etc.)
3. **Notion Account** (for tracking)
4. **Twilio Account** (for SMS) OR use Zapier's SMS feature
5. **Environment Variables** set up in your `.env.local`

---

## 🔐 Environment Variables Setup

Add these to your `.env.local` file:

```env
# Existing Firebase variables (already set up)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# NEW: Webhook Security
WEBHOOK_SECRET=your_random_secret_key_here  # Generate a random string

# NEW: Base URL
NEXT_PUBLIC_BASE_URL=https://jgservicesllc.com  # Your production domain

# NEW: Firebase Admin SDK (for server-side operations)
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_service_account_email@your-project.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

### How to Get Firebase Admin Credentials:
1. Go to Firebase Console → Project Settings → Service Accounts
2. Click "Generate New Private Key"
3. Download the JSON file
4. Copy the values to your environment variables

---

## 🔔 Zapier Automation #1: New Contact Form Notification

### Trigger: Webhooks by Zapier
- **Webhook URL**: `https://jgservicesllc.com/api/webhooks/zapier`
- **Method**: POST
- **Test Data**: Submit a test contact form

### Actions:

#### Action 1: SMS to Your Phone
- **App**: SMS by Zapier (or Twilio)
- **To**: Your phone number
- **Message**:
  ```
  🔔 New Contact Form!

  Name: {{name}}
  Email: {{email}}
  Message: {{message}}

  View in admin: {{actionUrl}}
  ```

#### Action 2: Add to Notion
- **App**: Notion
- **Database**: Create a "Contacts" database first
- **Fields**:
  - Name: `{{name}}`
  - Email: `{{email}}`
  - Message: `{{message}}`
  - Date: `{{submittedAt}}`
  - Status: "Unread"

#### Action 3: Log to Google Sheets
- **App**: Google Sheets
- **Spreadsheet**: Create "JG Services - Contacts" sheet
- **Row Data**:
  - Column A: `{{submittedAt}}`
  - Column B: `{{name}}`
  - Column C: `{{email}}`
  - Column D: `{{message}}`
  - Column E: `{{actionUrl}}`

---

## 📄 Zapier Automation #2: New Contract Submission

### Trigger: Webhooks by Zapier
- **Webhook URL**: `https://jgservicesllc.com/api/webhooks/zapier`
- **Method**: POST
- **Filter**: Only continue if `type` = "contract"

### Actions:

#### Action 1: SMS with Action Buttons
- **App**: SMS by Zapier
- **To**: Your phone number
- **Message**:
  ```
  🎉 New Contract Signed!

  Client: {{clientName}}
  Package: {{servicePackage}}
  Budget: {{budget}}

  Approve: {{approveUrl}}
  Reject: {{rejectUrl}}
  View: {{viewUrl}}
  ```

#### Action 2: Gmail - Send Rich Email
- **App**: Gmail
- **To**: Your email
- **Subject**: `🔔 New Contract: {{clientName}} - {{servicePackage}}`
- **Body** (HTML):
  ```html
  <h2>New Contract Submission</h2>
  <p><strong>Client:</strong> {{clientName}}<br>
  <strong>Company:</strong> {{companyName}}<br>
  <strong>Email:</strong> {{email}}<br>
  <strong>Phone:</strong> {{phone}}</p>

  <p><strong>Service Package:</strong> {{servicePackage}}<br>
  <strong>Budget:</strong> {{budget}}<br>
  <strong>Project Type:</strong> {{projectType}}</p>

  <p><strong>Description:</strong><br>{{projectDescription}}</p>

  <p>
    <a href="{{approveUrl}}" style="background:#10b981;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;">✅ Approve</a>
    <a href="{{rejectUrl}}" style="background:#ef4444;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;">❌ Reject</a>
  </p>

  <p><a href="{{viewUrl}}">View in Admin Dashboard</a></p>
  ```

#### Action 3: Add to Notion Contracts Database
- **App**: Notion
- **Database**: Create "Contracts" database
- **Fields**:
  - Client Name: `{{clientName}}`
  - Email: `{{email}}`
  - Phone: `{{phone}}`
  - Service Package: `{{servicePackage}}`
  - Budget: `{{budget}}`
  - Status: "Pending Review"
  - Submitted Date: `{{submittedAt}}`
  - Contract ID: `{{contractId}}`

#### Action 4: Log to Google Sheets
- **App**: Google Sheets
- **Spreadsheet**: "JG Services - Contracts"
- **Row Data**: All contract fields

---

## 💰 Payment Request System

### Option 1: Stripe Integration (Recommended)

1. **Create Stripe Account**
2. **Generate Payment Links** in Stripe Dashboard
3. **Create Zap**: When Contract Approved → Send Payment Link

### Stripe Zap Flow:
- **Trigger**: Webhook (contract approved)
- **Action 1**: Create Stripe Payment Link
  - Amount: Based on service package
  - Description: "{{servicePackage}} - {{clientName}}"
- **Action 2**: Gmail - Send Email
  - To: `{{email}}`
  - Subject: "Invoice Ready - JGServicesLLC"
  - Body:
    ```html
    <h2>Your Project is Approved!</h2>
    <p>Hi {{clientName}},</p>
    <p>Your project has been approved and we're ready to get started!</p>
    <p><strong>Service Package:</strong> {{servicePackage}}<br>
    <strong>Total Amount:</strong> ${{amount}}</p>
    <p><a href="{{paymentLink}}" style="background:#2563eb;color:white;padding:15px 30px;text-decoration:none;border-radius:8px;font-size:18px;">Pay Invoice →</a></p>
    <p>Payment terms: 50% deposit to start, 50% upon completion.</p>
    ```

### Option 2: PayPal Integration

Similar setup but using PayPal's payment request system.

---

## 🎨 Notion Database Setup

### Contacts Database
Create a database with these properties:
- **Name** (Title)
- **Email** (Email)
- **Message** (Text)
- **Status** (Select): Unread, Read, Replied
- **Date** (Date)
- **View Link** (URL)

### Contracts Database
- **Client Name** (Title)
- **Company** (Text)
- **Email** (Email)
- **Phone** (Phone)
- **Service Package** (Select)
- **Budget** (Number)
- **Status** (Select): Pending, Approved, Rejected, Paid, In Progress, Completed
- **Submitted Date** (Date)
- **Reviewed Date** (Date)
- **Contract ID** (Text)
- **Payment Status** (Select): Unpaid, 50% Paid, Fully Paid
- **Project Start** (Date)
- **Project End** (Date)

---

## 🔄 Complete Workflow Example

### Client Submits Contract:
1. ✅ Saved to Firebase
2. 📱 SMS sent to your phone
3. 📧 Email with Approve/Reject buttons
4. 📊 Added to Notion database
5. 📈 Logged in Google Sheet

### You Click "Approve":
1. ✅ Contract status updated in Firebase
2. 📧 Client receives approval email
3. 💰 Payment request created in Stripe
4. 📧 Payment link emailed to client
5. 📊 Notion status updated to "Approved - Awaiting Payment"

### Client Pays Invoice:
1. ✅ Stripe webhook triggers Zap
2. 📊 Notion status updated to "Paid"
3. 📧 You get notification: "Payment received - Start project!"
4. 📧 Client gets receipt + welcome email
5. 📅 Google Calendar event created for kickoff call

---

## 🧪 Testing Your Setup

1. **Test Contact Form**:
   ```
   Go to: https://jgservicesllc.com/contact
   Submit a test message
   Check: SMS received? Email received? Notion updated?
   ```

2. **Test Contract Submission**:
   ```
   Go to: https://jgservicesllc.com/contract
   Fill out and submit
   Check all notifications
   Click approve button
   Verify client email sent
   ```

3. **Test Payment Flow**:
   ```
   Use Stripe test mode
   Create test payment link
   Complete test payment
   Verify all updates
   ```

---

## 🎯 Quick Start Checklist

- [ ] Set up environment variables
- [ ] Create Zapier account
- [ ] Set up Zap #1: Contact Form Notifications
- [ ] Set up Zap #2: Contract Notifications
- [ ] Create Notion databases
- [ ] Set up Google Sheets
- [ ] Configure Stripe account
- [ ] Set up Zap #3: Payment Requests
- [ ] Test contact form flow
- [ ] Test contract approval flow
- [ ] Test payment flow
- [ ] Update phone number/email in Zaps

---

## 🚨 Troubleshooting

### Webhook not triggering?
- Check `WEBHOOK_SECRET` matches in both `.env.local` and Zapier
- Verify `NEXT_PUBLIC_BASE_URL` is correct
- Check Zapier webhook history for errors

### SMS not sending?
- Verify phone number format: +1234567890
- Check Zapier SMS limits (5/month on free plan)
- Consider upgrading to Twilio for unlimited SMS

### Email not sending?
- Check Gmail integration in Zapier
- Verify Google Workspace permissions
- Check spam folder

---

## 💡 Pro Tips

1. **Use Zapier Filters** to route different service packages to different workflows
2. **Set up Slack** for team notifications
3. **Create custom fields** in Notion for project tracking
4. **Use Zapier Scheduler** for follow-up reminders
5. **Connect to Calendly** for automatic meeting scheduling

---

## 📞 Support

If you need help setting this up:
- Zapier Support: https://zapier.com/help
- Firebase Support: https://firebase.google.com/support
- Stripe Support: https://support.stripe.com

---

**Created**: 2025-01-25
**Last Updated**: 2025-01-25
**Version**: 1.0
