import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  try {
    const { name, phone, date } = req.query;

    console.log({ name, phone, date });

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
              <p style="font-size: 16px;">Nombre: ${name}</p>
              <p style="font-size: 16px;">Número: ${phone}</p>
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
