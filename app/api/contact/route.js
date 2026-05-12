import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,

      subject: body.subject,

      html: `
        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${body.name}</p>

        <p><strong>Email:</strong> ${body.email}</p>

        <p><strong>Subject:</strong> ${body.subject}</p>

        <p><strong>Message:</strong></p>

        <p>${body.message}</p>
      `,
    });

    return Response.json({
      success: true,
    });

  } catch (error) {

    return Response.json(
      { success: false },
      { status: 500 }
    );
  }
}