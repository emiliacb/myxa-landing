import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { toast } from "sonner";

import Navbar from "../components/navbar";
import Card from "../components/card";
import Title from "../components/title";

import Link from "next/link";

import { useSectionInView } from "../hooks/useSectionInView";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  // TODO - Adhoc solution - Refactor inputs into a single state
  const [inputName, setInputName] = useState("");
  const [inputNumber, setInputNumber] = useState("");

  const [darkSection1Ref, navbarInvert] = useSectionInView();
  const [darkSection2Ref, navbarInvert2] = useSectionInView();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const themeColor = navbarInvert || navbarInvert2 ? "#000000" : "#ffffff";
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", themeColor);
    }
  }, [navbarInvert, navbarInvert2]);

  function handleInput(e) {
    const { value, name } = e.target;

    const contactNumber = "contact-number";
    const contactName = "contact-name";

    if (name == contactNumber && /^[0-9+-\s]*$/.test(value)) {
      setInputNumber(value);
    }

    if (name == contactName) {
      setInputName(value);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (isLoading || (!inputName && !inputNumber)) return;

    setIsLoading(true);
    const fetchPromise = fetch(
      `/api/send?name=${inputName}&phone=${inputNumber}&date=${new Date().toLocaleString()}`,
      { method: "POST" }
    );
    toast.promise(fetchPromise, {
      loading: "Enviando...",
      success: () => {
        setInputNumber("");
        setInputName("");
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
      <Navbar
        isInvert={navbarInvert || navbarInvert2}
        ctaDimished={navbarInvert2}
      />
      <main className="flex flex-col items-center justify-center px-4 md:px-10">
        <section
          id="nosotros"
          className="md:py-22 relative flex max-h-[90vh] min-h-[90vh] w-full max-w-[1200px] flex-col items-center justify-center pt-32 lg:min-h-[90vh] lg:flex-row"
        >
          <div className="left-0 z-20 flex max-w-md flex-col rounded-[30px] bg-white/70 backdrop-blur-sm lg:absolute lg:top-[30vh] lg:mb-0 lg:mr-auto lg:p-8">
            <h3 className="mb-4 text-center md:text-left lg:mb-6">
              <span className="text-xl">
                Tableros y equipos de presurización
              </span>
              <br />
              <strong className="text-2xl lg:text-2xl">
                para Sistemas Contra Incendio
              </strong>
            </h3>
            <p
              className="text-pretty text-md text-center font-light md:text-left lg:text-sm"
              style={{ textWrap: "pretty" }}
            >
              Nuestro equipo, con 20 años de experiencia en el sector, ofrece
              sistemas de <strong> alta calidad</strong> acompañados de un
              asesoramiento personalizado que aseguran su máxima operatividad.
            </p>
            <Link
              className="mx-auto mt-6 flex w-fit items-center rounded-md border border-red-drtb px-2 py-1 text-red-drtb hover:bg-red-drtb hover:text-white md:mx-0 lg:mt-8"
              href={"#contacto"}
            >
              Más información
            </Link>
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
          ref={darkSection1Ref}
          className="relative flex min-h-screen w-screen flex-col items-center justify-center bg-black pt-28 text-white "
        >
          <Title contents={"Tableros"} white />
          <div className="mt-8 flex max-w-[1200px] flex-col items-center gap-12 lg:flex-row">
            <div className="flex-1 p-4 md:w-2/3 lg:w-1/2"></div>
          </div>
          <div className="mt-24 flex max-w-[1200px] flex-col-reverse items-center gap-12 lg:flex-row">
            <img alt="Picture of the author" src="/tablero-1.png" width={600} />
            <div className="flex-1 p-4 md:w-2/3 lg:w-1/2">
              <h3 className="mb-4 text-xl font-extrabold">
                Diseño y fabricación de tableros
              </h3>
              <p className="mb-2 text-justify">
                Descubra la ingeniería de precisión detrás de nuestros tableros
                de control. Diseñados para cumplir con las normativas más
                exigentes (NFPA 20 e IRAM 3597), nuestros tableros ofrecen
                seguridad, eficiencia y un rendimiento inigualable. Para conocer
                todas las especificaciones técnicas y características
                detalladas, visite nuestra página dedicada.
              </p>
              <Link
                className="mx-auto mt-6 flex w-fit items-center rounded-md border border-white px-2 py-1 text-white hover:bg-white hover:text-black md:mx-0 lg:mt-8"
                href={"/tableros"}
              >
                Ver detalles de tableros
              </Link>
            </div>
          </div>
        </section>
        <section
          id="presurizacion"
          className="flex min-h-screen w-full max-w-[1200px] flex-col items-center justify-center gap-16 py-12 md:py-24"
        >
          <Title contents={"Presurización"} size={Title.SIZES.lg} />
          <div className="flex flex-col gap-12 lg:flex-row">
            <img
              alt="Picture of the author"
              src="/instalaciones.jpg"
              width={600}
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
                Ver detalles de presurización
              </Link>
            </div>
          </div>
        </section>
        <section
          id="servicios"
          className="flex min-h-screen w-full max-w-[1200px] flex-col items-center justify-center gap-16 py-12 md:py-24"
        >
          <Title contents={"Servicios"} size={Title.SIZES.lg} />
          <div className="flex flex-col gap-12 lg:flex-row">
            <div className="flex-1 p-4 md:w-2/3 lg:w-1/2">
              <h3 className="mb-4 text-lg font-bold">
                Instalación, capacitación y mantenimiento
              </h3>
              <p className="text-justify">
                En MYXA, no solo proveemos soluciones, sino que garantizamos su
                óptimo funcionamiento a largo plazo. Ofrecemos servicios
                expertos de instalación, capacitación detallada para su equipo y
                programas de mantenimiento preventivo para asegurar que su
                sistema contra incendios esté siempre listo.
              </p>
              <Link
                className="mx-auto mt-6 flex w-fit items-center rounded-md border border-red-drtb px-2 py-1 text-red-drtb hover:bg-red-drtb hover:text-white md:mx-0 lg:mt-8"
                href={"/servicios"}
              >
                Ver detalles de servicios
              </Link>
            </div>
            <img
              alt="Picture of the author"
              src="/instalaciones.jpg"
              width={600}
              className="m-auto rounded-lg"
            />
          </div>
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
                <Link
                  className="mx-auto mt-6 flex w-fit items-center rounded-md border border-red-drtb px-2 py-1 text-red-drtb hover:bg-red-drtb hover:text-white md:mx-0 lg:mt-8"
                  href={"/contacto"}
                >
                  Contactar
                </Link>
              </div>
              <div className="flex-1 p-4">
                <h3 className="mb-4 text-lg">...O déjenos su número</h3>

                <p className="mb-6 md:text-justify">
                  Y nos comunicamos con usted en menos de 48 horas.
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="m-auto flex flex-col items-end justify-start gap-4 md:flex-row"
                >
                  <input
                    value={inputName}
                    placeholder="Nombre"
                    name="contact-name"
                    onInput={handleInput}
                    className="w-full rounded-md px-3 py-2 text-black ring-offset-black focus-visible:ring-2 focus-visible:ring-offset-2  "
                  ></input>
                  <input
                    value={inputNumber}
                    placeholder="Teléfono"
                    name="contact-number"
                    onInput={handleInput}
                    className="w-full rounded-md px-3 py-2 text-black ring-offset-black focus-visible:ring-2 focus-visible:ring-offset-2  "
                  ></input>
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
