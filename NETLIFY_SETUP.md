# Netlify Waitlist Setup Instructions

## What I've Done

1. **Updated the waitlist form** to use Netlify Forms
2. **Added proper form attributes** for Netlify to detect and process
3. **Created JavaScript** to handle form submission with loading states
4. **Added a Netlify function** for additional processing
5. **Created redirects file** for proper routing

## How to Deploy

1. **Upload all files** to your Netlify site
2. **Make sure these files are included:**
   - `index.html` (updated with Netlify form)
   - `script.js` (updated with form handling)
   - `_redirects` (for proper routing)
   - `netlify/functions/waitlist.js` (serverless function)

## How to View Submissions

### Method 1: Netlify Dashboard (Recommended)
1. Go to your Netlify dashboard
2. Click on your site
3. Go to "Forms" tab
4. You'll see all form submissions there
5. You can export them as CSV

### Method 2: Admin Panel (Local Only)
- Add `?admin=true` to your URL to see the admin panel
- This shows emails stored in browser's localStorage
- Only works for the current browser session

## Next Steps (Optional)

### Connect to Email Service
You can modify `netlify/functions/waitlist.js` to integrate with:
- **Mailchimp**: Add subscribers to your list
- **ConvertKit**: Add to your email sequence
- **Airtable**: Save to a database
- **Google Sheets**: Add to a spreadsheet
- **SendGrid**: Send confirmation emails

### Example Mailchimp Integration
```javascript
// In netlify/functions/waitlist.js
const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: 'your-api-key',
  server: 'your-server-prefix'
});

// Add subscriber
await mailchimp.lists.addListMember('your-list-id', {
  email_address: email,
  status: 'subscribed'
});
```

## Testing

1. Deploy to Netlify
2. Test the waitlist form
3. Check Netlify dashboard for submissions
4. Verify emails are being captured

## Troubleshooting

- **Form not working?** Check browser console for errors
- **Not seeing submissions?** Make sure `data-netlify="true"` is in the form
- **Function errors?** Check Netlify function logs in dashboard
