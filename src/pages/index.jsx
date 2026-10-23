import Image from "next/image";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Seo from "../components/seo";
import Card from "../components/card";
import Title from "../components/title";
import CtaBand from "../components/ctaBand";

import Link from "next/link";

import { useSectionInView } from "../hooks/useSectionInView";
import {
  SERVICIOS,
  TABLERO_FEATURES,
  PRESURIZACION_TAREAS,
} from "../utils/constants";
import { buildGraph, getOrganization, getWebsite } from "../utils/schema";

const HOME_JSON_LD = buildGraph([getOrganization(), getWebsite()]);


export default function Home() {
  const [tablerosRef, tablerosInView] = useSectionInView();
  const [serviciosRef, serviciosInView] = useSectionInView();

  const isNavInverted = tablerosInView || serviciosInView;

  return (
    <>
      <Seo
        title="Tableros para bombas contra incendio NFPA 20 · MYXA Argentina"
        description="Fabricamos tableros de control para bombas contra incendio con diseño basado en NFPA 20 e IRAM 3597 e instalamos equipos de presurización. Buenos Aires."
        path="/"
        jsonLd={HOME_JSON_LD}
      />
      <Navbar isInvert={isNavInverted} />
      <main className="flex flex-col items-center justify-center bg-white px-4 md:px-10">
        <section
          id="nosotros"
          className="grid w-full max-w-[1200px] items-center gap-10 pb-16 pt-32 lg:min-h-[90vh] lg:grid-cols-[1fr_1.1fr] lg:pb-20 lg:pt-36"
        >
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="mb-6">
              <span className="eyebrow block">
                Tableros y equipos de presurización
              </span>
              <strong className="heading-sign mt-2 block text-5xl text-ink md:text-7xl lg:text-[88px]">
                para Sistemas Contra Incendio
              </strong>
            </h1>
            <p className="text-pretty max-w-lg text-lg font-light md:text-xl">
              Ofrecemos sistemas de <strong>alta calidad</strong> acompañados de
              un <strong>asesoramiento personalizado</strong> que aseguran su
              máxima operatividad.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link className="btn-primary" href={"/contacto"}>
                Consultar
              </Link>
              <Link
                className="btn-outline text-red-drtb hover:bg-red-drtb hover:text-white"
                href={"/tableros"}
              >
                Ver Tableros
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <Image
              src="/hero.webp"
              alt="Tablero de control MYXA para bombas de sistema contra incendio, gabinete rojo bermellón"
              width={1200}
              height={600}
              priority
              sizes="(max-width: 1024px) 100vw, 660px"
              className="w-full max-w-[660px] object-contain"
            />
          </div>
        </section>
        <section
          id="tableros"
          ref={tablerosRef}
          className="relative flex min-h-screen w-screen flex-col items-center justify-center bg-ink px-4 pb-16 text-white md:px-10 lg:pb-24"
        >
          <Title contents={"Tableros"} size={Title.SIZES.lg} white className="py-16 md:py-24" />
          <div className="w-full max-w-[1200px]">
            <Card isInvert>
              <div className="flex flex-col-reverse items-center gap-12 lg:flex-row">
                <Image
                  alt="Tablero de comando MYXA para bomba contra incendio, vista frontal con pilotos LED"
                  src="/tableros_1.webp"
                  className="bg-neutral-800 p-4"
                  height={400}
                  width={400}
                />
                <div className="flex-1 p-4 md:w-2/3 lg:w-1/2">
                  <h3 className="heading-sign mb-4 text-3xl md:text-4xl">
                    Diseño y fabricación de tableros normalizados para sistemas
                    contra incendios.
                  </h3>
                  <p className="text-pretty mb-6 text-lg font-light">
                    Realizamos nuestros tableros personalizados según tu
                    proyecto con la seguridad, eficiencia y el rendimiento que
                    exigen las normativas vigentes. Para conocer todas las
                    especificaciones técnicas y características detalladas
                    visite nuestra página dedicada.
                  </p>
                  <ul className="mb-8 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                    {TABLERO_FEATURES.map((feature) => (
                      <li
                        key={feature.id}
                        className="flex items-center gap-3 font-display text-lg font-semibold uppercase tracking-wide"
                      >
                        <span aria-hidden="true" className="h-3 w-3 shrink-0 bg-red-drtb" />
                        {feature.title}
                      </li>
                    ))}
                  </ul>
                  <Link
                    className="btn-outline mx-auto text-white hover:bg-white hover:text-ink md:mx-0"
                    href={"/tableros"}
                  >
                    Más sobre nuestros tableros
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
        <section
          id="presurizacion"
          className="flex min-h-screen w-full max-w-[1200px] flex-col items-center justify-center pb-16 lg:pb-24"
        >
          <Title contents={"Presurización"} size={Title.SIZES.lg} className="py-16 md:py-24" />
          <Card>
            <div className="flex flex-col gap-12 lg:flex-row">
              <Image
                alt="Equipo de presurización contra incendio: bombas, colector y válvulas"
                src="/instalaciones_1.webp"
                height={400}
                width={500}
                className="m-auto"
              />
              <div className="flex-1 p-4 md:w-2/3 lg:w-1/2">
                <h3 className="heading-sign mb-4 text-3xl md:text-4xl">
                  Equipos de presurización
                </h3>
                <p className="text-pretty mb-6 text-lg font-light">
                  En MYXA, ofrecemos un servicio integral de diagnóstico y
                  reparación para sus equipos de presurización. Nuestro equipo
                  técnico altamente capacitado está listo para responder
                  rápidamente a cualquier disfunción, asegurando la continuidad
                  operativa de su sistema contra incendios.
                </p>
                <ul className="mb-8 flex flex-col gap-2">
                  {PRESURIZACION_TAREAS.map((tarea) => (
                    <li key={tarea} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-[7px] h-3 w-3 shrink-0 bg-red-drtb" />
                      {tarea}
                    </li>
                  ))}
                </ul>
                <Link
                  className="btn-outline mx-auto text-red-drtb hover:bg-red-drtb hover:text-white md:mx-0"
                  href={"/presurizacion"}
                >
                  Más sobre nuestros equipos
                </Link>
              </div>
            </div>
          </Card>
        </section>
        <section
          id="servicios"
          ref={serviciosRef}
          className="flex min-h-screen w-screen flex-col items-center justify-center bg-red-drtb pb-16 text-white lg:pb-24"
        >
          <Title contents={"Servicios"} size={Title.SIZES.lg} white className="py-16 md:py-24" />
          <div className="grid max-w-[1200px] grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-4">
            {SERVICIOS.map((servicio) => (
              <Link
                className="group flex flex-col border-2 border-white transition-colors duration-150 hover:bg-white hover:text-red-drtb"
                href={`/servicios#${servicio.id}`}
                key={servicio.id}
              >
                <Image
                  alt={servicio.imageAlt}
                  src={servicio.image}
                  width={300}
                  height={200}
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="mb-2 font-display text-2xl font-bold uppercase leading-tight">
                    {servicio.title}
                  </h3>
                  <p className="text-left text-sm md:text-base">
                    {servicio.short_description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <CtaBand />
      <Footer />
    </>
  );
}
