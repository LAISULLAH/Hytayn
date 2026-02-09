import nodemailer from "nodemailer";

export const sendMail = async ({ name, email, subject, message }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.COMPANY_EMAIL,
      pass: process.env.COMPANY_EMAIL_APP_PASSWORD
    }
  });

  const mailOptions = {
    from: `"HYTAYN Contact" <${process.env.COMPANY_EMAIL}>`,
    to: process.env.COMPANY_EMAIL,
    replyTo: email,
    subject: `[HYTAYN] ${subject}`,
    html: `
      <h3>New Contact Request</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Subject:</b> ${subject}</p>
      <p><b>Message:</b><br>${message}</p>
    `
  };

  await transporter.sendMail(mailOptions);
};
