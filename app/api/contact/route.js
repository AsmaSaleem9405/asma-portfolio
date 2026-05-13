// app/api/contact/route.js

import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Get data from frontend
    const body = await req.json();

    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return Response.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      replyTo: email,

      subject: `Contact Form: ${subject}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          
          <h2>New Contact Message</h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Subject:</strong> ${subject}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <div style="background:#f4f4f4;padding:15px;border-radius:8px;">
            ${message}
          </div>

        </div>
      `,
    });

    console.log("EMAIL SENT:", info.response);

    return Response.json(
      {
        success: true,
        message: "Email sent successfully",
      },
      { status: 200 }
    );

  } catch (error) {

    console.log("EMAIL ERROR:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to send email",
        error: error.message,
      },
      { status: 500 }
    );
  }
}