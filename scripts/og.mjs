import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import sharp from "sharp";
import { readFile, mkdir, writeFile } from "node:fs/promises";

const bold = await readFile(
  "node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-700-normal.woff"
);
const photo = `data:image/jpeg;base64,${(
  await readFile("public/og/src/tablero.jpg")
).toString("base64")}`;

const pages = {
  home: {
    t: "Tableros para bombas contra incendio",
    s: "NFPA 20 e IRAM 3597 · José C. Paz, Buenos Aires",
  },
  tableros: {
    t: "Tableros de comando para bombas contra incendio",
    s: "Gabinete IP40 · arranque directo hasta 15 HP · comando 24 V",
  },
  presurizacion: {
    t: "Equipos de presurización contra incendio",
    s: "Diagnóstico y reparación",
  },
  servicios: {
    t: "Instalación, puesta en marcha, capacitación y mantenimiento",
    s: "Sistemas contra incendio",
  },
  contacto: {
    t: "Contacto y presupuestos",
    s: "WhatsApp +54 9 11 5815-1959 · info@myxa.com.ar",
  },
};

await mkdir("public/og", { recursive: true });
for (const [slug, { t, s }] of Object.entries(pages)) {
  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          display: "flex",
          width: 1200,
          height: 630,
          background: "#111",
          color: "#fff",
          fontFamily: "PJS",
        },
        children: [
          {
            type: "img",
            props: {
              src: photo,
              style: { width: 480, height: 630, objectFit: "cover" },
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: 720,
                padding: 56,
                gap: 20,
              },
              children: [
                {
                  type: "div",
                  props: { style: { fontSize: 30, color: "#C11711" }, children: "MYXA" },
                },
                {
                  type: "div",
                  props: { style: { fontSize: 52, lineHeight: 1.1 }, children: t },
                },
                {
                  type: "div",
                  props: { style: { fontSize: 26, color: "#bbb" }, children: s },
                },
              ],
            },
          },
        ],
      },
    },
    { width: 1200, height: 630, fonts: [{ name: "PJS", data: bold, weight: 700 }] }
  );
  const png = new Resvg(svg).render().asPng();
  await writeFile(`public/og/${slug}.jpg`, await sharp(png).jpeg({ quality: 82 }).toBuffer());
}
