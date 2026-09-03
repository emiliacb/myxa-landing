import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Seo from "../components/seo";
import Title from "../components/title";
import Image from "next/image";
import {
  buildGraph,
  buildBreadcrumbList,
  getOrganization,
  getWebsite,
  getPresurizacionService,
} from "../utils/schema";

const PRESURIZACION_JSON_LD = buildGraph([
  getOrganization(),
  getWebsite(),
  buildBreadcrumbList([
    { name: "Inicio", path: "/" },
    { name: "Presurización", path: "/presurizacion" },
  ]),
  getPresurizacionService(),
]);

export default function Presurizacion() {
  return (
    <>
      <Seo
        title="Reparación de equipos de presurización contra incendio · MYXA"
        description="Diagnóstico y reparación de equipos de presurización contra incendio: colectores, cañerías, válvulas y bombas. Visita técnica y cotización transparente."
        path="/presurizacion"
        image="https://www.myxa.com.ar/og/presurizacion.jpg"
        jsonLd={PRESURIZACION_JSON_LD}
      />
      <Navbar />
      <main className="flex flex-col items-center justify-center px-4 md:px-10">
        <section
          id="presurizacion-detalles"
          className="relative flex min-h-screen w-screen flex-col items-center justify-center bg-white py-12 pt-32 text-black"
        >
          <h1 className="text-center text-4xl md:text-6xl">
            Equipos de Presurización
          </h1>
          <div className="mt-8 w-full max-w-[1200px] items-center px-4 md:px-10 lg:mt-20">
            <div className="flex w-full flex-col justify-between md:gap-10 lg:flex-row lg:gap-16">
              <Image
                alt="Equipo de presurización contra incendio: bombas, colector y válvulas"
                src="/instalaciones_1.webp"
                width={330}
                height={250}
                className="w-1/2 m-auto rounded-lg w-full max-w-lg"
              />
              <div className="flex-1 p-4 md:w-2/3 lg:w-1/2">
                <h2 className="mb-4 text-lg font-bold">
                  Respuesta Rápida y Efectiva
                </h2>
                <p className="text-justify">
                  En el evento de una disfunción, nuestro equipo técnico está
                  listo para diagnosticar y resolver cualquier problema con
                  rapidez y eficacia. Coordinamos visitas técnicas para evaluar
                  el sistema, identificar la causa de la falla y, si es
                  necesario, proporcionar una cotización transparente y justa
                  para la modificación y/o reparación, realizando las siguientes
                  tareas:
                </p>
                <ul className="list-disc pl-5 text-justify">
                  <li>
                    Modificación y armado de colectores de aspiración e
                    impulsión
                  </li>
                  <li>Reparación de pérdidas en cañerías</li>
                  <li>Cambio de válvulas e instrumentos de medición</li>
                  <li>Cambio y reparación de bombas</li>
                </ul>
                <p className="mt-4 text-justify">
                  Nuestro objetivo es restablecer la operatividad de su sistema
                  contra incendios con la mínima interrupción posible.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
