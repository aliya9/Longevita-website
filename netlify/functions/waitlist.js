exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        // Parse the form data
        const formData = new URLSearchParams(event.body);
        const email = formData.get('email');
        const formName = formData.get('form-name');

        // Validate the form
        if (formName !== 'waitlist' || !email) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid form data' })
            };
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid email format' })
            };
        }

        // Here you can add additional processing:
        // - Save to a database
        // - Send to an email service
        // - Add to a mailing list service like Mailchimp, ConvertKit, etc.
        
        console.log('New waitlist signup:', email);

        // For now, just log the email
        // You can integrate with services like:
        // - Mailchimp API
        // - ConvertKit API
        // - Airtable API
        // - Google Sheets API
        // - SendGrid API

        return {
            statusCode: 200,
            body: JSON.stringify({ 
                message: 'Successfully added to waitlist',
                email: email 
            })
        };

    } catch (error) {
        console.error('Error processing waitlist signup:', error);
        
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal server error' })
        };
    }
};
