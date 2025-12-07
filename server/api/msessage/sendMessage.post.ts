import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const subject = "Portfolio – message from " + body.email;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: subject,
    text: body.message
  });

  return { success: true};
});
