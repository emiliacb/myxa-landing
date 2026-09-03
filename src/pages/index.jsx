import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { toast } from "sonner";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Seo from "../components/seo";
import Card from "../components/card";
import Title from "../components/title";

import Link from "next/link";

import { useSectionInView } from "../hooks/useSectionInView";
import { SERVICIOS } from "../utils/constants";
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
        description="Fabricamos tableros de control para bombas contra incendio según NFPA 20 e IRAM 3597 e instalamos y mantenemos equipos de presurización. Buenos Aires."
        path="/"
        jsonLd={HOME_JSON_LD}
      />
      <Navbar isInvert={isNavInverted} />
      <main className="flex flex-col items-center justify-center bg-white px-4 md:px-10">
        <section
          id="nosotros"
          className="relative flex max-h-[90vh] min-h-[90vh] w-full max-w-[1200px] flex-col items-center justify-center pt-[7rem] lg:min-h-[90vh] lg:flex-row lg:pt-0"
        >
          <div className="left-0 z-20 flex max-w-md flex-col rounded-[30px] bg-white/70 drop-shadow-md backdrop-blur-sm lg:absolute lg:top-[26vh] lg:mb-0 lg:mr-auto lg:max-w-[40rem] lg:px-8 lg:py-12">
            <h1 className="mb-4 text-center md:text-left lg:mb-6">
              <span className="text-xl lg:text-2xl">
                Tableros y equipos de presurización
              </span>
              <br />
              <strong className="text-pretty text-[18px] font-semibold lg:text-3xl">
                para Sistemas Contra Incendio
              </strong>
            </h1>
            <p
              className="text-pretty text-center text-sm font-light md:text-left md:text-lg"
              style={{ textWrap: "pretty" }}
            >
              Ofrecemos sistemas de <strong>alta calidad</strong> acompañados de
              un <strong>asesoramiento personalizado</strong> que aseguran su
              máxima operatividad.
            </p>
            <div className="m-auto flex w-fit gap-2 md:m-0">
              <Link
                className="btn-primary mx-auto mt-6 flex w-fit items-center rounded-md border px-6 pb-[8px] pt-2 text-white hover:bg-red-drtb hover:text-white md:mx-0 lg:mt-8"
                href={"/contacto"}
              >
                Consultar
              </Link>
              <Link
                className="mx-auto mt-6 flex w-fit items-center rounded-md border border-red-drtb px-5 pb-[4px] pt-1 text-red-drtb hover:bg-red-drtb hover:text-white md:mx-0 lg:mt-8"
                href={"/tableros"}
              >
                Ver Tableros
              </Link>
            </div>
          </div>
          <div className="relative z-10 -mb-12 -ml-8 -mr-8 flex h-[60vh] min-w-[calc(100%+32px)] items-center justify-center overflow-hidden md:-ml-6 md:-mr-10 lg:h-[100vh] lg:justify-end">
            <Image
              src="/hero.webp"
              alt="Tablero de control MYXA para bombas de sistema contra incendio, gabinete rojo bermellón"
              width={1200}
              height={600}
              priority
              sizes="(max-width: 1024px) 100vw, 900px"
              className="lg:max-w-auto absolute m-auto max-h-[400px] min-w-[300px] max-w-[750px] object-contain pl-[5%] lg:-mr-8 lg:-mt-10 lg:ml-auto lg:max-h-[2000px] lg:max-w-[900px]"
            />
          </div>
        </section>
        <section
          id="tableros"
          ref={tablerosRef}
          className="relative flex min-h-screen flex-col items-center justify-center bg-black pb-16 text-white lg:pb-24"
        >
          <Title contents={"Tableros"} size={Title.SIZES.lg} white className="py-16 md:py-24" />
          <div className="w-full max-w-[1200px]">
            <Card isInvert>
              <div className="flex flex-col-reverse items-center gap-12 lg:flex-row">
                <Image
                  alt="Tablero de comando MYXA para bomba contra incendio, vista frontal con pilotos LED"
                  src="/tableros_1.webp"
                  className="rounded-md bg-[rgba(100,100,100,0.25)] p-4"
                  height={400}
                  width={400}
                />
                <div className="flex-1 p-4 md:w-2/3 lg:w-1/2">
                  <h3 className="mb-4 text-xl font-extrabold">
                    Diseño y fabricación de tableros normalizados para sistemas
                    contra incendios.
                  </h3>
                  <p className="mb-2 text-justify">
                    Realizamos nuestros tableros personalizados según tu
                    proyecto con la seguridad, eficiencia y el rendimiento que
                    exigen las normativas vigentes. Para conocer todas las
                    especificaciones técnicas y características detalladas
                    visite nuestra página dedicada.
                  </p>
                  <Link
                    className="mx-auto mt-6 flex w-fit items-center rounded-md border border-white px-2 py-1 text-white hover:bg-white hover:text-black md:mx-0 lg:mt-8"
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
                className="m-auto rounded-lg"
              />
              <div className="flex-1 p-4 md:w-2/3 lg:w-1/2">
                <h3 className="mb-4 text-2xl font-bold">
                  Equipos de presurización
                </h3>
                <p className="text-justify">
                  En MYXA, ofrecemos un servicio integral de diagnóstico y
                  reparación para sus equipos de presurización. Nuestro equipo
                  técnico altamente capacitado está listo para responder
                  rápidamente a cualquier disfunción, asegurando la continuidad
                  operativa de su sistema contra incendios.
                </p>
                <Link
                  className="mx-auto mt-6 flex w-fit items-center rounded-md border border-red-drtb px-2 py-1 text-red-drtb hover:bg-red-drtb hover:text-white md:mx-0 lg:mt-8"
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
          className="flex min-h-screen w-screen flex-col items-center justify-center bg-black pb-16 text-white lg:pb-24"
        >
          <Title contents={"Servicios"} size={Title.SIZES.lg} white className="py-16 md:py-24" />
          <div className="grid max-w-[1200px] grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-4">
            {SERVICIOS.map((servicio) => (
              <Link
                className="rounded-lg border px-2 py-3 hover:bg-gray-200 hover:text-gray-900"
                href={`/servicios#${servicio.id}`}
                key={servicio.id}
              >
                <div className="flex flex-1 flex-col p-2">
                  <h3 className="mb-2 text-lg font-bold">{servicio.title}</h3>
                  <p className="text-left text-sm font-light md:text-base">
                    {servicio.short_description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
