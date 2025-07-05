import Head from "next/head";
import Navbar from "../components/navbar";
import Title from "../components/title";
import Image from "next/image";

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
      <main className="flex flex-col items-center justify-center px-4 md:px-10">
        <section
          id="servicios-detalles"
          className="relative flex min-h-screen w-screen flex-col items-center justify-center bg-white py-12 pt-24 text-black"
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl">Servicios</h2>
          <div className="mt-8 w-full max-w-[1200px] items-center px-4 md:px-10 lg:mt-20">
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
              <Image
                alt="Picture of the author"
                src="/instalaciones.jpg"
                width={600}
                height={400}
                className="m-auto rounded-lg"
              />
            </div>
          </div>
        </section>
        <section
          id="mantenimiento"
          className="flex min-h-screen w-full max-w-[1200px] flex-col items-center justify-center gap-16 py-16 md:py-24"
        >
          <div className="mt-8 w-full max-w-[1200px] items-center px-4 md:px-10 lg:mt-20">
            <div className="flex w-full flex-col justify-between md:gap-10 lg:flex-row lg:gap-16">
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
              <Image
                alt="Picture of the author"
                src="/tablero-3.jpg"
                width={380}
                height={250}
                className="m-auto rounded-lg brightness-110 contrast-[.9]"
              />
            </div>
          </div>
          <div className="mt-8 w-full max-w-[1200px] items-center px-4 md:px-10 lg:mt-20">
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
              <Image
                alt="Picture of the author"
                src="/instalaciones.jpg"
                width={600}
                height={400}
                className="m-auto rounded-lg"
              />
            </div>
          </div>
        </section>
        <section
          id="mantenimiento"
          className="flex min-h-screen w-full max-w-[1200px] flex-col items-center justify-center gap-16 py-16 md:py-24"
        >
          <div className="mt-8 w-full max-w-[1200px] items-center px-4 md:px-10 lg:mt-20">
            <div className="flex w-full flex-col justify-between md:gap-10 lg:flex-row lg:gap-16">
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
              <Image
                alt="Picture of the author"
                src="/tablero-3.jpg"
                width={380}
                height={250}
                className="m-auto rounded-lg brightness-110 contrast-[.9]"
              />
            </div>
          </div>
        </section>
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
