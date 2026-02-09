const nodemailer = require("nodemailer");

exports.sendMail = async (req, res) => {
  console.log("🚀 API HIT");
  const { name, email, subject, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "contact.hytayn@gmail.com",       // 👉 TERA EMAIL
      pass: "ohszzwmpqrlyizqy",          // 👉 Gmail App Password
    },
  });

  let mailOptions = {
    from: "contact.hytayn@gmail.com",
    to: email ,
    subject: `New Project Inquiry: ${subject}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Project Type:</b> ${subject}</p>
      <p><b>Description:</b><br>${message}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    res.json({ success: true, info: info });
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
}