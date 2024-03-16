import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  try {
    const { phone, date } = req.query;

    const { data, error } = await resend.emails.send({
      from: "info@drtb.com.ar",
      to: "cabralmarce@hotmail.com",
      cc: "info@drtb.com.ar",
      subject: `DRTB - Pedido de contacto - ${date}`,
      html: `
        <div>
            <img width="200" src="https://drtb.com.ar/logo.png">
            <div style="display: flex;">
                <div>
                    <p style="font-size: 20px;">Una persona llenó el formulario para ser contactada.</p>
                    <p style="font-size: 16px;">Hora: ${date}</p>
                    <p style="font-size: 16px;">Número: ${phone}</p>
                </div>
                <img width="100" src="https://drtb.com.ar/phone.png">
            </div>
        </div>
      `,
    });

    if (error) {
      console.log(error);
      return res.status(400).json({ error });
    }

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
