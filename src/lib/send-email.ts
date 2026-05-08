export async function sendContactEmail(data: {
  name: string;
  company: string;
  email: string;
  service: string;
  message: string;
}) {
  const { RESEND_API_KEY, RESEND_FROM, CONTACT_TO_EMAIL } = process.env;

  if (!RESEND_API_KEY) {
    console.log('[send-email] No RESEND_API_KEY, logging to console:', data);
    return { ok: true };
  }

  const { Resend } = await import('resend');
  const resend = new Resend(RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: RESEND_FROM ?? 'BR Safety <noreply@brsafety.com>',
    to: CONTACT_TO_EMAIL ?? 'contact@brsafety.com',
    replyTo: data.email,
    subject: `[BR Safety] Solicitud de auditoría — ${data.company}`,
    html: `
      <h2>Nueva solicitud de auditoría</h2>
      <p><strong>Nombre:</strong> ${data.name}</p>
      <p><strong>Empresa:</strong> ${data.company}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Servicio:</strong> ${data.service}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `,
  });
  if (error) throw new Error(error.message);
  return { ok: true };
}
