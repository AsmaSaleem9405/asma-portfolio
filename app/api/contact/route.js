import nodemailer from "nodemailer";

export async function POST(req) {

  try {

    const body = await req.json();

    const transporter = nodemailer.createTransport({

      host: "smtp.gmail.com",

      port: 465,

      secure: true,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      replyTo: body.email,

      subject: body.subject,

      html: `
        <h2>New Contact Message</h2>

        <p><b>Name:</b> ${body.name}</p>

        <p><b>Email:</b> ${body.email}</p>

        <p><b>Subject:</b> ${body.subject}</p>

        <p><b>Message:</b></p>

        <p>${body.message}</p>
      `,
    });

    return Response.json({
      success: true,
    });

  } catch (error) {

    console.log(error);

    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}