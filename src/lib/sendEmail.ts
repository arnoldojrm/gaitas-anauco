import nodemailer from "nodemailer";

interface SendRegistrationEmailParams {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  comentario?: string;
}

export async function sendRegistrationNotification({
  nombre,
  apellidos,
  email,
  telefono,
  comentario,
}: SendRegistrationEmailParams) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const emailTo = process.env.EMAIL_TO || "info@gaitasanauco.com";
  const emailFrom = process.env.EMAIL_FROM || '"Gaitas Anauco" <info@gaitasanauco.com>';

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gaitasanauco.com";
  const adminUrl = `${siteUrl}/admin/dashboard`;

  // Si no hay configuración SMTP en .env.local, registramos en consola (modo de prueba)
  if (!smtpHost || !smtpUser || !smtpPass) {
    console.log(`[Simulación Email] Nuevo registro para ${emailTo}:`);
    console.log(`- Nombre: ${nombre} ${apellidos}`);
    console.log(`- Email: ${email}`);
    console.log(`- Teléfono: ${telefono}`);
    console.log(`- Comentario: ${comentario || "Sin comentario"}`);
    return { success: true, simulated: true };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true para puerto 465
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const fecha = new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #0A0A2A; padding: 24px; text-align: center; color: #ffffff;">
          <h2 style="margin: 0; font-size: 22px; color: #FF7F50;">¡Nuevo Registro en Gaitas Anauco!</h2>
        </div>
        <div style="padding: 24px; color: #333333; line-height: 1.6;">
          <p style="font-size: 16px; margin-top: 0;">Se ha recibido una nueva solicitud de registro desde el sitio web:</p>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 10px; font-weight: bold; width: 35%; color: #555555;">Nombre completo:</td>
              <td style="padding: 10px; color: #111111;">${nombre} ${apellidos}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 10px; font-weight: bold; color: #555555;">Email:</td>
              <td style="padding: 10px; color: #111111;"><a href="mailto:${email}" style="color: #FF7F50; text-decoration: none;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 10px; font-weight: bold; color: #555555;">Teléfono:</td>
              <td style="padding: 10px; color: #111111;">${telefono}</td>
            </tr>
            ${
              comentario
                ? `
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 10px; font-weight: bold; color: #555555; vertical-align: top;">¿En qué podemos ayudar?:</td>
              <td style="padding: 10px; color: #111111; white-space: pre-wrap;">${comentario}</td>
            </tr>`
                : ""
            }
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555555;">Fecha de registro:</td>
              <td style="padding: 10px; color: #111111;">${fecha}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background-color: #f9f9f9; border-left: 4px solid #FF7F50; border-radius: 4px; font-size: 14px; color: #444444;">
            <p style="margin: 0 0 10px 0;">Puedes consultar y gestionar todas las solicitudes desde el panel:</p>
            <a href="${adminUrl}" style="display: inline-block; padding: 10px 20px; background-color: #FF7F50; color: #ffffff; text-decoration: none; font-weight: bold; border-radius: 6px;">Ir al Panel de Administración</a>
          </div>
        </div>
        <div style="background-color: #f4f4f4; padding: 12px; text-align: center; font-size: 12px; color: #888888;">
          Gaitas Anauco - Notificación automática del sitio web
        </div>
      </div>
    `;

    // Sanitización preventiva contra Header Injection en el asunto del correo
    const safeNombre = nombre.replace(/[\r\n]/g, " ").trim();
    const safeApellidos = apellidos.replace(/[\r\n]/g, " ").trim();

    await transporter.sendMail({
      from: emailFrom,
      to: emailTo,
      subject: `[Nuevo Registro] ${safeNombre} ${safeApellidos}`,
      html: htmlContent,
    });

    console.log(`[Email Notificación] Correo enviado exitosamente a ${emailTo}`);
    return { success: true };
  } catch (error) {
    console.error("[Email Notificación Error]:", error);
    return { success: false, error };
  }
}
