import Head from "next/head";
import Navbar from "../components/navbar";
import Title from "../components/title";
import Image from "next/image";

export default function Presurizacion() {
  return (
    <>
      <Head>
        <title>MYXA - Equipos de Presurización</title>
        <meta
          name="description"
          content="Diagnóstico y reparación de equipos de presurización para sistemas contra incendio de MYXA."
        />
      </Head>
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
                alt="Picture of the author"
                src="/instalaciones_1.jpeg"
                width={330}
                height={250}
                className="w-1/2 m-auto rounded-lg w-full max-w-lg"
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
