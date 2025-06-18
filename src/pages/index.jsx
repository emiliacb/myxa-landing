import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { toast } from "sonner";
import { useScroll, useMotionValueEvent } from "framer-motion";

import Navbar from "../components/navbar";
import Card from "../components/card";
import Title from "../components/title";

import ChevronRightIcon from "../icons/chevronRightIcon";

export default function Home() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [navbarInvert, setNavbarInvert] = useState(false);
  const [navbarInvert2, setNavbarInvert2] = useState(false);

  const darkSection1Ref = useRef(null);
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: darkSection1Ref,
    offset: ["start 66px", "end 66px"],
  });

  useMotionValueEvent(scrollYProgress1, "change", (latest) => {
    setNavbarInvert(latest > 0 && latest < 1);
  });

  const darkSection2Ref = useRef(null);
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: darkSection2Ref,
    offset: ["start 66px", "end 66px"],
  });

  useMotionValueEvent(scrollYProgress2, "change", (latest) => {
    setNavbarInvert2(latest > 0 && latest < 1);
  });

  function handleInput(e) {
    const { value } = e.target;
    if (/^[0-9+-\s]*$/.test(value)) {
      setInput(value);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (isLoading || !input) return;

    setIsLoading(true);
    const fetchPromise = fetch(
      `/api/send?phone=${input}&date=${new Date().toLocaleString()}`,
      { method: "POST" }
    );
    toast.promise(fetchPromise, {
      loading: "Enviando...",
      success: () => {
        setInput("");
        return "Gracias!";
      },
      error: "Hubo un error!",
      description: (d) =>
        d?.ok
          ? "Nos comunicaremos en menos de 48 horas."
          : "Podés reintentar o comunicarte por otro canal.",
      finally: () => setIsLoading(false),
    });
  }

  return (
    <>
      <Head>
        <title>MYXA - Tableros de sistemas contra incendio</title>
        <meta
          name="description"
          content="MYXA: Expertos en tableros contra incendios con más de 20 años de experiencia. Ofrecemos diseño, instalación y mantenimiento de tableros de control y sistemas contra incendios conforme a normas NFPA 20 e IRAM 3597."
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
              name: "MYXA - Tableros de sistemas contra incendio",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+54-11-2575-6572",
                contactType: "customer service",
              },
            }),
          }}
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.myxa.com.ar/" />
        <meta
          property="og:title"
          content="MYXA - Tableros de sistemas contra incendio"
        />
        <meta
          property="og:description"
          content="MYXA: Expertos en tableros contra incendios con más de 20 años de experiencia. Ofrecemos diseño, instalación y mantenimiento de tableros de control y sistemas contra incendios conforme a normas NFPA 20 e IRAM 3597."
        />
        <meta property="og:image" content="https://www.myxa.com.ar/logo.jpeg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.myxa.com.ar/" />
        <meta
          property="twitter:title"
          content="MYXA - Tableros de sistemas contra incendio"
        />
        <meta
          property="twitter:description"
          content="MYXA: Expertos en tableros contra incendios con más de 20 años de experiencia. Ofrecemos diseño, instalación y mantenimiento de tableros de control y sistemas contra incendios conforme a normas NFPA 20 e IRAM 3597."
        />
        <meta
          property="twitter:image"
          content="https://www.myxa.com.ar/logo.jpeg"
        />
      </Head>
      <Navbar isInvert={navbarInvert || navbarInvert2} />
      <main className="flex flex-col items-center justify-center px-4 md:px-10">
        <section
          id="nosotros"
          className="md:py-22 relative flex max-h-[90vh] min-h-[90vh] w-full max-w-[1200px] flex-col items-center justify-center pt-32 lg:min-h-[90vh] lg:flex-row"
        >
          <div className="left-0 z-10 flex max-w-md flex-col rounded-[30px] bg-white/70 backdrop-blur-sm lg:absolute lg:top-[30vh] lg:mb-0 lg:mr-auto lg:p-8 lg:shadow-sm">
            <h3 className="mb-4 text-center lg:mb-8">
              <span className="text-xl">Liderazgo y Experiencia en</span>
              <br />
              <strong className="text-2xl lg:text-3xl">
                Sistemas Contra Incendio
              </strong>
            </h3>
            <p
              className="lg:text-md text-pretty text-small text-center"
              style={{ textWrap: "pretty" }}
            >
              Con más de 20 años de experiencia, MYXA se especializa en el
              diseño, fabricación, instalación y mantenimiento de sistemas
              contra incendio, cumpliendo con NFPA 20 e IRAM 3597.
            </p>
          </div>
          <div className="relative -mb-12 -ml-8 -mr-8 flex h-[60vh] min-w-[calc(100%+32px)] items-center justify-center overflow-hidden lg:h-[100vh] lg:justify-end">
            <Image
              src="/hero.webp"
              alt="Hero"
              width={1200}
              height={600}
              className="-mx-30 lg:max-w-auto absolute m-auto max-h-[400px] min-w-[300px] max-w-[750px] object-contain pl-[5%] md:max-h-[600px] lg:-mt-10 lg:ml-auto lg:mr-0 lg:max-h-[2000px] lg:max-w-[900px]"
            />
          </div>
          {/*
            <div className="mt-8 max-w-xl text-sm text-gray-700 dark:text-gray-300">
            <p className="mb-3 text-justify">
              Brindamos soluciones integrales que abarcan el diseño, la fabricación, instalación, mantenimiento y reparación de tableros de instalaciones contra incendios.
            </p>
            <p className="mb-3 text-justify">
              Contamos con más de veinte años de experiencia en el diseño y fabricación de tableros según norma NFPA 20 e IRAM 3597.
            </p>
            <p className="mb-3 text-justify">
              En MYXA, nos apasiona brindar el mejor servicio a cada cliente, garantizando un producto de alta calidad, acompañados de un asesoramiento personalizado, provisión eficiente, instalación precisa y un mantenimiento preventivo que asegura la máxima operatividad de los equipos.
            </p>
          </div>
          */}
        </section>
        <section
          id="tableros"
          ref={darkSection1Ref}
          className="flex min-h-screen w-screen flex-col items-center justify-center bg-black pt-28 text-white "
        >
          <Title contents={"Tableros"} duration={90} delta={10} white />
          <div className="mt-24 flex max-w-[1200px] flex-col items-center gap-12 lg:flex-row">
            <div className="flex-1 p-4 md:w-2/3 lg:w-1/2">
              <h3 className="mb-4 text-lg font-bold">
                Diseño y fabricación de tableros
              </h3>
              <p className="mb-2 text-justify">
                Nuestros tableros están diseñados para cumplir las normativas
                vigentes (NFPA 20 e IRAM 3597) y diseñados de acuerdo con las
                diversas necesidades operativas. Proporcionando una gran
                variedad de productos estandarizados más la opción del diseño
                especifico en el caso de necesitarlo
              </p>
            </div>
          </div>
          <div className="mt-24 flex max-w-[1200px] flex-col-reverse items-center gap-12 lg:flex-row">
            <img alt="Picture of the author" src="/tablero-1.png" width={600} />
            <div className="flex-1 p-4 md:w-2/3 lg:w-1/2">
              <h3 className="mb-8">
                <span className="text-md opacity-70">Tablero de comando </span>
                <br />
                <span className="text-xl">Bomba individual</span>
              </h3>
              <p className="my-4 text-justify">
                Con arranque directo para bombas de hasta 10HP
              </p>
              <p className="text-justify">
                Con arranque estrella triangulo para bombas de más de 10HP
              </p>
            </div>
          </div>
          <div className="my-24 flex max-w-[1200px]  flex-col items-center gap-12 lg:flex-row">
            <div className="flex-1 p-4 md:w-2/3 lg:w-1/2">
              <h3 className="mb-8">
                <span className="text-md opacity-70">Tablero de comando </span>
                <br />
                <span className="text-xl">Equipo de tres bombas</span>
              </h3>
              <p className="my-4 text-justify">
                Con arranque directo para bombas de hasta 10HP
              </p>
              <p className="text-justify">
                Con arranque estrella triangulo para bombas de más de 10HP
              </p>
            </div>
            <img
              alt="Picture of the author"
              src="/tablero-2.jpg"
              className="rounded-lg"
              width={600}
            />
          </div>
        </section>
        <section
          id="instalacion"
          className="flex min-h-screen w-full max-w-[1200px] flex-col items-center justify-center gap-16 py-12 md:py-24"
        >
          <Card title="Instalación, capacitación y puesta en marcha">
            <div className="flex flex-col gap-12 lg:flex-row">
              <div className="flex-1 p-4 md:w-2/3 lg:w-1/2">
                <h3 className="mb-4 text-lg font-bold">
                  Instalación, capacitación y puesta en marcha
                </h3>
                <p className="text-justify">
                  Entendemos la importancia de una instalación adecuada para el
                  éxito operativo de cualquier sistema contra incendios. Por
                  ello, aseguramos que la instalación de nuestros tableros de
                  comando se realice de manera estratégica, promoviendo un
                  acceso fácil para mantenimientos y reparaciones futuras.
                  Además, ofrecemos una capacitación detallada para que su
                  equipo esté plenamente preparado para manejar y mantener el
                  sistema eficientemente desde el día uno.
                </p>
              </div>
              <img
                alt="Picture of the author"
                src="/instalaciones.jpg"
                width={600}
                className="m-auto rounded-lg"
              />
            </div>
          </Card>
        </section>
        <section
          id="mantenimiento"
          className="flex min-h-screen w-full max-w-[1200px] flex-col items-center justify-center gap-16 py-16 md:py-24"
        >
          <Card title="Revisión y mantenimiento">
            <div className="flex flex-col gap-12 lg:flex-row">
              <div className="flex-1 p-4 md:w-2/3 lg:w-1/2">
                <h3 className="mb-4 text-lg font-bold">
                  Revisión y mantenimiento
                </h3>
                <p className="text-justify">
                  Nuestro servicio de mantenimiento está diseñado para asegurar
                  que su sistema contraincendios esté siempre en condiciones
                  óptimas de funcionamiento. A través de revisiones técnicas
                  regulares, anticipamos cualquier problema potencial,
                  extendiendo la vida útil de su inversión y garantizando que su
                  sistema se encuentre operativo ante cualquier situación que lo
                  requiera.
                </p>
              </div>
              <img
                alt="Picture of the author"
                src="/tablero-3.jpg"
                className="m-auto rounded-lg brightness-110 contrast-[.9]"
                width={380}
              />
            </div>
          </Card>
        </section>
        <section
          id="reparacion"
          className="flex min-h-screen w-full max-w-[1200px] flex-col items-center justify-center gap-16 py-12 md:py-24"
        >
          <Card title="Diagnóstico y reparación">
            <div className="flex flex-col gap-12 lg:flex-row">
              <img
                alt="Picture of the author"
                src="/tablero-4.jpeg"
                width={380}
                className="m-auto rounded-lg"
              />
              <div className="flex-1 p-4 md:w-2/3 lg:w-1/2">
                <h3 className="mb-4 text-lg font-bold">
                  Respuesta Rápida y Efectiva
                </h3>
                <p className="text-justify">
                  En el evento de una disfunción, nuestro equipo técnico está
                  listo para diagnosticar y resolver cualquier problema con
                  rapidez y eficacia. Coordinamos visitas técnicas para evaluar
                  el sistema, identificar la causa de la falla y, si es
                  necesario, proporcionar una cotización transparente y justa
                  para la reparación. Nuestro objetivo es restablecer la
                  operatividad de su sistema contra incendios con la mínima
                  interrupción posible.
                </p>
              </div>
            </div>
          </Card>
        </section>
        <section
          id="contacto"
          ref={darkSection2Ref}
          className="relative flex min-h-screen w-screen flex-col items-center justify-center bg-black py-12 pt-24 text-white"
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl">Contacto</h2>
          <div className="mt-8 w-full max-w-[1200px] items-center px-4 md:px-10 lg:mt-20">
            <div className="flex w-full flex-col justify-between md:gap-10 lg:flex-row lg:gap-16">
              <div className="max-w-2xl flex-1 p-4">
                <h3 className="mb-4 text-xl font-extrabold">Consultas</h3>
                <p className="mb-6 md:text-justify">
                  En <span className="text-red-500">MYXA</span>, estamos
                  dedicados a proteger lo que más importa: su tranquilidad, su
                  gente y su patrimonio. Contáctenos hoy para descubrir cómo
                  podemos ayudarlo.
                </p>
                <p className="hidden md:block">
                  Para resolver sus dudas o pedir un presupuesto comuníquese con
                  nosotros por:
                </p>
                <ul className="mt-5 border-l border-gray-100 pl-4">
                  <li className="my-2">
                    <span>Whatsapp: </span>
                    <a
                      className="rounded-md px-1 text-blue-300 hover:underline hover:underline-offset-4"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://wa.me/+541125756572"
                    >
                      +54 11 2575-6572
                    </a>
                  </li>
                  <li className="mb-2">
                    <span>Email: </span>
                    <a
                      className="rounded-md px-1 text-blue-300 hover:underline hover:underline-offset-4"
                      href="mailto:info@myxa.com.ar"
                    >
                      info@myxa.com.ar
                    </a>
                  </li>
                  <li className="mb-2">
                    <span>Linkedin: </span>
                    <a
                      className="rounded-md px-1 text-blue-300 hover:underline  hover:underline-offset-4"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://linkedin.com/company/myxa-incendio"
                    >
                      /myxa-incendio
                    </a>
                  </li>
                  {/* <li>
                    <span>Instagram: </span>
                    <a
                      className="rounded-md px-1 text-blue-300 hover:underline  hover:underline-offset-4"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://linkedin.com/company/myxa-incendio"
                    >
                      @myxa
                    </a>
                  </li> */}
                </ul>
              </div>
              <div className="flex-1 p-4">
                <h3 className="mb-4 text-lg">...O déjenos su número</h3>

                <p className="mb-6 md:text-justify">
                  Y nos comunicamos con usted en menos de 48 horas.
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="m-auto flex max-w-lg items-end  justify-start gap-4"
                >
                  <label className="flex w-full flex-col">
                    <span className="mb-1 text-xs font-light text-gray-400">
                      Número
                    </span>
                    <input
                      value={input}
                      placeholder="+54 112345678"
                      onInput={handleInput}
                      className="w-full rounded-md px-3 py-2 text-black ring-offset-black focus-visible:ring-2 focus-visible:ring-offset-2  "
                    ></input>
                  </label>
                  <button
                    disabled={isLoading}
                    className="btn-primary disabled:contrast-50"
                    type="submit"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-black px-4 py-8 text-neutral-100">
        <div className="m-auto flex max-w-[1200px] flex-col items-center justify-between text-sm md:flex-row">
          <div className="flex w-full flex-col justify-between gap-4 md:flex-row md:items-center  ">
            <nav className="mb-4 md:mb-0">
              <ul className="flex flex-row flex-wrap justify-center gap-4 md:items-center md:space-x-4">
                <li>
                  <a href="#nosotros" className="hover:underline">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#tableros" className="hover:underline">
                    Tableros
                  </a>
                </li>
                <li>
                  <a href="#instalacion" className="hover:underline">
                    Instalación
                  </a>
                </li>
                <li>
                  <a href="#mantenimiento" className="hover:underline">
                    Mantenimiento
                  </a>
                </li>
                <li>
                  <a href="#reparacion" className="hover:underline">
                    Reparación
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:underline">
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
