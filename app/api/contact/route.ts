import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, projectType, message } = await req.json();

    await resend.emails.send({
      from: "Překreslito <noreply@prekreslito.cz>",
      to: "info@prekreslito.cz",
      subject: `Nová poptávka - ${projectType}`,
      replyTo: email,

      html: `
        <h2>Nová poptávka z Překreslito.cz</h2>

        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "Neuvedeno"}</p>
        <p><strong>Typ projektu:</strong> ${projectType}</p>

        <hr>

        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);

    return Response.json(
      { success: false },
      { status: 500 }
    );
  }
}