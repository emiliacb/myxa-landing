import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CtaBand from "../components/ctaBand";
import Seo from "../components/seo";
import Image from "next/image";
import { PRESURIZACION_TAREAS } from "../utils/constants";
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
          className="relative flex min-h-screen w-screen flex-col items-center justify-center bg-white py-12 pt-36 text-ink"
        >
          <p className="eyebrow">Diagnóstico y reparación</p>
          <h1 className="heading-sign mt-2 text-center text-6xl lg:text-[112px]">
            Equipos de Presurización
          </h1>
          <div aria-hidden="true" className="hazard mt-8 h-4 w-40 text-red-drtb" />
          <div className="mt-8 w-full max-w-[1200px] items-center px-4 md:px-10 lg:mt-20">
            <div className="flex w-full flex-col justify-between md:gap-10 lg:flex-row lg:gap-16">
              <Image
                alt="Equipo de presurización contra incendio: bombas, colector y válvulas"
                src="/instalaciones_1.webp"
                width={330}
                height={250}
                className="m-auto w-full max-w-lg shadow-plate"
              />
              <div className="flex-1 p-4 md:w-2/3 lg:w-1/2">
                <h2 className="heading-sign mb-4 text-4xl">
                  Respuesta Rápida y Efectiva
                </h2>
                <p className="text-pretty mb-4 text-lg font-light">
                  En el evento de una disfunción, nuestro equipo técnico está
                  listo para diagnosticar y resolver cualquier problema con
                  rapidez y eficacia. Coordinamos visitas técnicas para evaluar
                  el sistema, identificar la causa de la falla y, si es
                  necesario, proporcionar una cotización transparente y justa
                  para la modificación y/o reparación, realizando las siguientes
                  tareas:
                </p>
                <ul className="flex flex-col gap-2">
                  {PRESURIZACION_TAREAS.map((tarea) => (
                    <li key={tarea} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[7px] h-3 w-3 shrink-0 bg-red-drtb"
                      />
                      {tarea}
                    </li>
                  ))}
                </ul>
                <p className="text-pretty mt-6 text-lg font-light">
                  Nuestro objetivo es restablecer la operatividad de su sistema
                  contra incendios con la mínima interrupción posible.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CtaBand />
      <Footer />
    </>
  );
}
