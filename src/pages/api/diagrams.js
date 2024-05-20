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
        fileUrl: cells[2].trim(),
        id: cells[3].trim(),
        publicUrl: cells[4].trim(),
      };
    });

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
          <div style="display: flex; flex-direction: column;">
              ${
                diagrams.reduce((a, d) => {
                  return `
                  ${a}
                  <a href="${d.publicUrl}">${d.title}</a>
                  `
                }, '')
              }
          </div>
        </body>
        </html>
      `);

  } catch (error) {
    console.error({ error });
    return res.status(500).json({ error });
  }
};
