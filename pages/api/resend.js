import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (req, res) => {

  const { email, message } = req.body;
  try {
    const data = await resend.emails.send({
      from: "Anurag Singh <anuragsingh260805@gmail.com>",
      to: [email],
      cc: ["anuragsingh260805@gmail.com"],
      subject: `Thank you for reaching out to Anurag`,
      react: EmailTemplate({ email: email, message: message }),
    });

    console.log("Data from email response : ", data);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

export default sendEmail;
