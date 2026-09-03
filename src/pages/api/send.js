import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_NAME_LENGTH = 100;
const MAX_PHONE_LENGTH = 30;
const PHONE_PATTERN = /^[0-9+\-\s]+$/;

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestsByIp = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (requestsByIp.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );

  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestsByIp.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  requestsByIp.set(ip, timestamps);
  return false;
}

function getClientIp(req) {
  const forwardedFor = req.headers["x-forwarded-for"];
  if (typeof forwardedFor === "string" && forwardedFor.length > 0) {
    return forwardedFor.split(",")[0].trim();
  }
  return req.socket?.remoteAddress || "unknown";
}

export default async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: "Too many requests" });
  }

  const { name, phone, website } = req.body || {};

  // Honeypot: bots fill hidden fields humans never see; pretend success.
  if (typeof website === "string" && website.length > 0) {
    return res.status(200).json({ data: null });
  }

  if (
    (typeof name !== "string" || name.trim().length === 0) &&
    (typeof phone !== "string" || phone.trim().length === 0)
  ) {
    return res.status(400).json({ error: "Faltan datos de contacto" });
  }

  const trimmedName = typeof name === "string" ? name.trim() : "";
  const trimmedPhone = typeof phone === "string" ? phone.trim() : "";

  if (trimmedName.length > MAX_NAME_LENGTH) {
    return res.status(400).json({ error: "Nombre demasiado largo" });
  }

  if (trimmedPhone.length > MAX_PHONE_LENGTH) {
    return res.status(400).json({ error: "Teléfono demasiado largo" });
  }

  if (trimmedPhone.length > 0 && !PHONE_PATTERN.test(trimmedPhone)) {
    return res.status(400).json({ error: "Teléfono inválido" });
  }

  const date = new Date().toLocaleString("es-AR", {
    timeZone: "America/Argentina/Buenos_Aires",
  });

  try {
    const { data, error } = await resend.emails.send({
      from: "info@myxa.com.ar",
      to: "cabralmarce@hotmail.com",
      cc: "info@myxa.com.ar",
      subject: `MYXA - Pedido de contacto - ${date}`,
      html: `
      <div style="display: grid; place-content: center; width: 80%; min-height: 90vh; padding: 16px; background-color: lightgray; margin: 0">
        <div style="border-radius: 6px; box-shadow: 2px 2px 5px rgba(0,0,0,0.2); padding: 32px; margin: auto; width: fit-content; height: fit-content; max-width: 500px; background-color: white; border: 1px solid rgba(0,0,0,0.2)">
          <img width="200" style="margin-left: -16px" src="https://myxa.com.ar/logo.jpeg">
          <div style="display: flex; flex-wrap: wrap">
            <div>
              <p style="font-size: 20px;">Una persona llenó el formulario para ser contactada.</p>
              <p style="font-size: 16px;">Fecha y Hora: ${date}</p>
              <p style="font-size: 16px;">Nombre: ${trimmedName}</p>
              <p style="font-size: 16px;">Número: ${trimmedPhone}</p>
            </div>
            <div style="min-width: 150px; width: 50%; max-width: 50vw; display: grid; place-content: center;">
              <img width="50" style="width: 100%; object-fit: cover;" src="https://myxa.com.ar/phone.png">
            </div>
          </div>
        </div>
      </div>
      `,
    });

    if (error) {
      console.log(error);
      return res.status(500).json({ error });
    }

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
