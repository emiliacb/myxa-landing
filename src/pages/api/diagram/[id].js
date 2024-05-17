import fetch from "node-fetch";

const DIAGRAMS_CSV_URL = process?.env?.DIAGRAMS_CSV_URL || "";

export default async (req, res) => {
  try {
    const { id } = req.query;

    const response = await fetch(DIAGRAMS_CSV_URL);
    const data = await response.text();

    const rows = data.split("\r");
    rows.shift();

    const diagrams = rows.map((r) => {
      const cells = r.split("\t");
      return {
        title: cells[0].trim(),
        version: cells[1].trim(),
        fileUrl: cells[4].trim(),
        id: cells[2].trim(),
        publicUrl: cells[3].trim(),
      };
    });

    const selectedDiagram = diagrams.find((d) => d.id === id);

    if (!selectedDiagram) {
      return res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Error</title>
        </head>
        <body style="display: flex; flex-direction: column; width: 100%; padding: 3rem; justify-items: center; align-items: center;">
          <div>
            <h1>🚨 Error al encontrar el unifilar</h1>
            <p>No encontramos el unifilar que está buscando, comuníquese con nosotros en nuestra página.</p>
            <a href="https://www.myxa.com.ar">www.myxa.com.ar</a>
          </div>
        </body>
        </html>
      `);
    }

    return res.redirect(selectedDiagram?.fileUrl);
  } catch (error) {
    console.error({ error });
    return res.status(500).json({ error });
  }
};
