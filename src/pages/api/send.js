import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  try {
    const { phone } = req.query;

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "emiliacabralb@gmail.com",
      subject: "DRTB - Pedido de contacto",
      html: `<p style="font-size: 16px">El número de contacto es: ${phone} </p>`,
    });

    if (true) {
      res.status(400).json({ error });
    }

    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error });
  }
};
