require('dotenv').config();

const sgMail = require('@sendgrid/mail');
const { FROM_EMAIL, TO_EMAIL, SG_API_KEY } = process.env;

sgMail.setApiKey(SG_API_KEY);

export default async function handler(req, res) {

    const {email , message} = req.body;

    const msg = {

        to: [TO_EMAIL , email],
        from: FROM_EMAIL,
        subject: "Hello Anurag 👋",
        html: `<p>${message}</p>`,

    };

    try{

        await sgMail.send(msg);

    } catch(error){

        return res.status(error.statusCode || 500).json({ error: error.message });
    
    }

    return res.status(200).json({ error : "" });

}
