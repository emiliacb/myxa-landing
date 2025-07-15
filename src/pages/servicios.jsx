import Head from "next/head";
import Navbar from "../components/navbar";
import { SERVICIOS } from "../utils/constants";
import Image from "next/image";
import Card from "../components/card";

export default function Servicios() {
  return (
    <>
      <Head>
        <title>MYXA - Servicios</title>
        <meta
          name="description"
          content="Servicios de instalación, capacitación, puesta en marcha, revisión y mantenimiento de sistemas contra incendio de MYXA."
        />
      </Head>
      <Navbar />
      <main className="flex flex-col items-center justify-center px-4 md:px-10 bg-white">
        <h1 className="pt-[9rem] text-4xl md:text-6xl">Servicios</h1>
        {SERVICIOS.map((servicio) => (
          <section
            key={servicio.id}
            id={servicio.id}
            className="flex w-full max-w-[1200px] flex-col items-center justify-center gap-16 py-16"
          >
            <Card>
              <div className="items-center">
                <div className="flex w-full flex-col justify-between md:gap-10 lg:flex-row lg:gap-16">
                  <div className="flex-1 p-4 md:w-2/3">
                    <h3 className="mb-4 text-2xl font-bold">
                      {servicio.title}
                    </h3>
                    <p className="text-justify text-lg">
                      {servicio.full_description}
                    </p>
                  </div>
                  <Image
                    alt={servicio.title}
                    src={servicio.image}
                    width={300}
                    height={200}
                    className="m-auto rounded-lg"
                  />
                </div>
              </div>
            </Card>
          </section>
        ))}
      </main>
      <footer className="w-full bg-white px-4 py-8 text-black">
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
