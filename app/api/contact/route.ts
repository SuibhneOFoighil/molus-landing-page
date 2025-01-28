import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false // Helps with some Gmail authentication issues
  }
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, description } = body

    console.log('Attempting to send email with data:', { name, email, company })

    // Email content
    const mailOptions = {
      from: {
        name: 'Molus Website Contact',  // Use a consistent sender name
        address: process.env.EMAIL_USER as string
      },
      to: process.env.EMAIL_USER, // Send to server email
      cc: email,
      replyTo: email,
      subject: `[Molus Contact] ${name} from ${company}`,
      text: `
New contact form submission from the Molus website:

Name: ${name}
Email: ${email}
Company: ${company}

Description:
${description}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p>New inquiry from the Molus website:</p>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Company:</strong> ${company}</p>
<br/>
<p><strong>Description:</strong></p>
<p>${description}</p>
      `,
      headers: {
        'X-Priority': '1', // Set high priority
        'X-MSMail-Priority': 'High',
        'Importance': 'high'
      }
    }

    console.log('Sending email with configuration:', {
      to: mailOptions.to,
      cc: mailOptions.cc,
      from: mailOptions.from,
      subject: mailOptions.subject
    })

    const result = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', result)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error: unknown) {
    console.error('Detailed error:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    })

    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Error sending email' },
      { status: 500 }
    )
  }
}