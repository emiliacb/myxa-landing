import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Image from "next/image";
import { toast } from "sonner";

import Navbar from "../components/navbar";
import Card from "../components/card";
import Title from "../components/title";

import Link from "next/link";

import { useSectionInView } from "../hooks/useSectionInView";
import { SERVICIOS } from "../utils/constants";

export default function Home() {
  const [tablerosRef, tablerosInView] = useSectionInView();
  const [serviciosRef, serviciosInView] = useSectionInView();

  const isNavInverted = tablerosInView || serviciosInView;

  return (
    <>
      <Head>
        <title>MYXA - Sistemas contra incendio</title>
        <meta
          name="description"
          content="MYXA: Expertos en sistemas contra incendio con más de 20 años de experiencia. Ofrecemos diseño, instalación y mantenimiento de sistemas y tableros de control contra incendios conforme a normas NFPA 20 e IRAM 3597."
        />
        <meta
          name="description"
          content="MYXA: Expertos en sistemas contra incendio con más de 20 años de experiencia. Ofrecemos diseño, instalación y mantenimiento de sistemas y tableros de control contra incendios conforme a normas NFPA 20 e IRAM 3597."
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="canonical" href="https://www.myxa.com.ar" />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "http://www.myxa.com.ar",
              name: "MYXA - Sistemas contra incendio",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+54-9-11-5815-1959",
                contactType: "customer service",
              },
            }),
          }}
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.myxa.com.ar/" />
        <meta
          property="og:description"
          content="MYXA: Expertos en sistemas contra incendio con más de 20 años de experiencia. Ofrecemos diseño, instalación y mantenimiento de sistemas y tableros de control contra incendios conforme a normas NFPA 20 e IRAM 3597."
        />
        <meta
          name="description"
          content="MYXA: Expertos en sistemas contra incendio con más de 20 años de experiencia. Ofrecemos diseño, instalación y mantenimiento de sistemas y tableros de control contra incendios conforme a normas NFPA 20 e IRAM 3597."
        />
        <meta property="og:image" content="https://www.myxa.com.ar/logo.jpeg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.myxa.com.ar/" />
        <meta
          property="twitter:title"
          content="MYXA - Sistemas contra incendio"
        />
        <meta
          property="twitter:description"
          content="MYXA: Expertos en sistemas contra incendio con más de 20 años de experiencia. Ofrecemos diseño, instalación y mantenimiento de sistemas y tableros de control contra incendios conforme a normas NFPA 20 e IRAM 3597."
        />
        <meta
          property="twitter:image"
          content="https://www.myxa.com.ar/logo.jpeg"
        />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Navbar isInvert={isNavInverted} />
      <main className="flex flex-col items-center justify-center px-4 md:px-10 bg-white">
        <section
          id="nosotros"
          className="md:py-22 relative flex max-h-[90vh] min-h-[90vh] w-full max-w-[1200px] flex-col items-center justify-center pt-32 lg:min-h-[90vh] lg:flex-row"
        >
          <div className="left-0 z-20 flex max-w-md flex-col rounded-[30px] bg-white/70 backdrop-blur-sm lg:absolute lg:top-[26vh] lg:mb-0 lg:mr-auto lg:max-w-[40rem] lg:p-8 drop-shadow-md">
            <h1 className="mb-4 text-center md:text-left lg:mb-6">
              <span className="text-xl lg:text-2xl">
                Tableros y equipos de presurización
              </span>
              <br />
              <strong className="text-[22px] lg:text-4xl text-pretty font-semibold">
                para Sistemas Contra Incendio
              </strong>
            </h1>
            <p
              className="text-pretty text-sm md:text-lg text-center font-light md:text-left"
              style={{ textWrap: "pretty" }}
            >
              Ofrecemos sistemas de <strong>alta calidad</strong> acompañados de un {" "}
              <strong>asesoramiento personalizado</strong> que aseguran su máxima operatividad.
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
              alt="Hero"
              width={1200}
              height={600}
              className="lg:max-w-auto absolute m-auto max-h-[400px] min-w-[300px] max-w-[750px] object-contain pl-[5%] lg:-mr-8 lg:-mt-10 lg:ml-auto lg:max-h-[2000px] lg:max-w-[900px]"
            />
          </div>
        </section>
        <section
          id="tableros"
          ref={tablerosRef}
          className="relative flex min-h-screen flex-col items-center justify-center bg-black pt-28 text-white lg:mb-24"
        >
          <Title contents={"Tableros"} size={Title.SIZES.lg} white />
          <div className="min-h-screen w-full max-w-[1200px] pt-12 pb-24 md:pt-24 lg:pb-0 lg:-mb-32">
            <Card isInvert>
              <div className="flex flex-col-reverse items-center gap-12 lg:flex-row">
                <Image
                  alt="Picture of the author"
                  src="/tableros_1.png"
                  className="rounded-md bg-[rgba(100,100,100,0.25)] p-4"
                  height={400}
                  width={400}
                />
                <div className="flex-1 p-4 md:w-2/3 lg:w-1/2">
                  <h3 className="mb-4 text-xl font-extrabold">
                    Diseño y fabricación de tableros
                  </h3>
                  <p className="mb-2 text-justify">
                    Descubra la ingeniería de precisión detrás de nuestros
                    tableros de control. Diseñados para cumplir con las
                    normativas más exigentes (NFPA 20 e IRAM 3597), nuestros
                    tableros ofrecen seguridad, eficiencia y un rendimiento
                    inigualable. Para conocer todas las especificaciones
                    técnicas y características detalladas, visite nuestra página
                    dedicada.
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
          className="flex min-h-screen w-full max-w-[1200px] flex-col items-center justify-center gap-16 py-12 md:py-24"
        >
          <Title contents={"Presurización"} size={Title.SIZES.md} />
          <div className="mt-5" />
          <Card>
            <div className="flex flex-col gap-12 lg:flex-row">
              <Image
                alt="Picture of the author"
                src="/instalaciones_1.jpg"
                height={400}
                width={400}
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
          className="flex min-h-screen w-screen flex-col items-center justify-center gap-16 bg-black pt-12 text-white md:pt-24"
        >
          <Title contents={"Servicios"} size={Title.SIZES.lg} white />
          <div className="mb-12 grid max-w-[1200px] grid-cols-1 gap-6 px-4 md:my-12 md:grid-cols-2 lg:grid-cols-4">
            {SERVICIOS.map((servicio) => (
              <Link
                className="rounded-lg border px-2 py-3 hover:bg-gray-200 hover:text-gray-900"
                href={`/servicios#${servicio.id}`}
                key={servicio.id}
              >
                <div className="flex flex-1 flex-col p-2">
                  <h3 className="mb-2 text-lg font-bold">{servicio.title}</h3>
                  <p className="text-left font-light text-sm md:text-base">
                    {servicio.short_description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <footer className="w-full bg-black px-4 py-8 text-neutral-100">
        <div className="m-auto flex max-w-[1200px] flex-col items-center justify-between text-sm md:flex-row">
          <div className="flex w-full flex-col justify-between gap-4 md:flex-row md:items-center  ">
            <nav className="mb-4 md:mb-0">
              <ul className="flex flex-row flex-wrap justify-center gap-4 md:items-center md:space-x-4">
                <li>
                  <a href="/#nosotros" className="hover:underline">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="/tableros" className="hover:underline">
                    Tableros
                  </a>
                </li>
                <li>
                  <a href="/presurizacion" className="hover:underline">
                    Presurización
                  </a>
                </li>
                <li>
                  <a href="/servicios" className="hover:underline">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="/contacto" className="hover:underline">
                    Contacto
                  </a>
                </li>
              </ul>
            </nav>
            <div className="mb-4 text-center text-xs md:mb-0 md:ml-8 md:text-left">
              <p>
                © {new Date().getFullYear()} MYXA - Todos los derechos
                reservados.
              </p>
              <p className="mt-2">
                Dr. Enrique Finochietto 5345, José C. Paz, Buenos Aires
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
