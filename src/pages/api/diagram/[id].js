export default async (req, res) => {
  try {
    const { id } = req.query;

    const response = await fetch(process.env.DIAGRAMS_CSV_URL)
    const data = await response.text()

    const rows = data.split("\r");
    rows.shift();
    const diagrams = rows.map((r) => {
      const cells = r.split("\t");
      return {
        title: cells[0].trim(),
        version: cells[1].trim(),
        date: cells[2].trim(),
        id: cells[3].trim(),
        publicUrl: cells[4].trim(),
        fileUrl: cells[5].trim(),
      };
    });

    const selectedDiagram = diagrams.find(d => d.id === id);

    if (!selectedDiagram) {
      return res.status(404).json({ error: 'No encontramos el unifilar, por favor contactanos en www.myxa.com.ar' });
    }

    if (error) {
      console.log(error);
      return res.status(500).json({ error });
    }

    return res.redirect(selectedDiagram.publicUrl);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
