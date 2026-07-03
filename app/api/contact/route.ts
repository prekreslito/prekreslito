import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      projectType,
      message,
      files,
      website,
      createdAt,
    } = await req.json();

    // ==========================
    // Honeypot ochrana
    // ==========================
    if (website && website.trim() !== "") {
      console.log("Spam zablokován (honeypot).");

      return Response.json({
        success: true,
      });
    }

    // ==========================
    // Time Trap (5 sekund)
    // ==========================
    if (!createdAt || Date.now() - createdAt < 5000) {
      console.log("Spam zablokován (time trap).");

      return Response.json(
        {
          success: false,
          error: "Formulář byl odeslán příliš rychle.",
        },
        {
          status: 400,
        }
      );
    }

    const filesHtml =
      files && files.length
        ? `
          <h3>Nahrané soubory</h3>
          <ul>
            ${files
              .map(
                (file: string) =>
                  `<li><a href="${file}" target="_blank">${file}</a></li>`
              )
              .join("")}
          </ul>
        `
        : "<p><strong>Nebyly nahrány žádné soubory.</strong></p>";

    // ==========================
    // E-mail pro Překreslito
    // ==========================
    await resend.emails.send({
      from: "Překreslito.cz <info@prekreslito.cz>",
      to: "info@prekreslito.cz",
      replyTo: email,
      subject: `Nová poptávka - ${projectType}`,

      html: `
        <h2>Nová poptávka z Překreslito.cz</h2>

        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "Neuvedeno"}</p>
        <p><strong>Typ projektu:</strong> ${projectType}</p>

        <hr>

        <h3>Popis projektu</h3>
        <p>${message || "Bez popisu."}</p>

        <hr>

        ${filesHtml}
      `,
    });

    // ==========================
    // Potvrzení zákazníkovi
    // ==========================
    await resend.emails.send({
      from: "Překreslito.cz <info@prekreslito.cz>",
      to: email,
      subject: "Potvrzení přijetí poptávky | Překreslito.cz",

      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;max-width:650px;margin:auto;line-height:1.8;color:#1f2937;">

          <h2 style="color:#06b6d4;">
            Dobrý den, ${name},
          </h2>

          <p>
            děkujeme za vaši poptávku.
          </p>

          <p>
            Vaši poptávku jsme úspěšně obdrželi a co nejdříve se jí budeme věnovat.
          </p>

          <p>
            Po zpracování vám připravíme cenovou nabídku. Pokud bude potřeba doplnit další informace, budeme vás kontaktovat na tento e-mail.
          </p>

          <div style="margin:30px 0;padding:18px;background:#ecfeff;border-left:4px solid #06b6d4;border-radius:8px;">
            <strong>Co bude následovat?</strong>

            <ol style="margin-top:10px;padding-left:20px;">
              <li>Zkontrolujeme vaši poptávku.</li>
              <li>Připravíme cenovou nabídku.</li>
              <li>Po jejím schválení začneme na projektu pracovat.</li>
            </ol>

          </div>

          <hr style="margin:30px 0;border:none;border-top:1px solid #e5e7eb;">

          <p>Děkujeme za projevenou důvěru.</p>

          <p>S přáním hezkého dne</p>

          <h3 style="margin-top:0;color:#06b6d4;">
            Tým Překreslito.cz
          </h3>

          <p>
            📧 info@prekreslito.cz<br>
            🌐 https://prekreslito.cz
          </p>

        </div>
      `,
    });

    return Response.json({
      success: true,
    });

  } catch (err) {
    console.error(err);

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}