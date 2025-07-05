import Head from "next/head";
import Navbar from "../components/navbar";
import Title from "../components/title";
import Image from "next/image";

export default function Tableros() {
  return (
    <>
      <Head>
        <title>MYXA - Tableros de Control</title>
        <meta
          name="description"
          content="Detalles técnicos y características de los tableros de control para sistemas contra incendio de MYXA, cumpliendo con NFPA 20 e IRAM 3597."
        />
      </Head>
      <Navbar isInvert />
      <main className="flex flex-col items-center justify-center px-4 md:px-10">
        <section
          id="tableros-detalles"
          className="relative flex min-h-screen w-screen flex-col items-center justify-center bg-black py-12 pt-32 text-white"
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl">
            Tableros de Control
          </h2>
          <div className="mt-24 flex max-w-[1200px] flex-col items-center gap-12 lg:flex-row">
            <div className="flex-1 p-4 md:w-2/3 lg:w-1/2">
              <h3 className="mb-4 text-lg font-bold">
                Diseño y fabricación de tableros
              </h3>
              <p className="mb-2 text-justify">
                En MYXA, diseñamos y fabricamos tableros de control que son el
                corazón de su sistema contra incendios. Cumpliendo rigurosamente
                con las normativas NFPA 20 e IRAM 3597, garantizamos la máxima
                seguridad y eficiencia operativa. Ofrecemos una amplia gama de
                soluciones estandarizadas, así como diseños personalizados para
                adaptarse perfectamente a las necesidades específicas de su
                proyecto, asegurando un rendimiento inigualable y una protección
                confiable.
              </p>
            </div>
          </div>
          <div className="mt-24 flex max-w-[1200px] flex-col-reverse items-center gap-12 lg:flex-row">
            <Image
              alt="Picture of the author"
              src="/tablero-1.png"
              width={600}
              height={400}
              className="max-w-md"
            />
            <div className="flex-1 p-4">
              <ul className="list-disc pl-5">
                <li>
                  <strong>Arranque Optimizado:</strong> Soluciones de arranque
                  directo para bombas de hasta 15HP y arranque
                  estrella-triángulo para potencias superiores, asegurando un
                  funcionamiento eficiente y prolongando la vida útil de sus
                  equipos.
                </li>
                <li>
                  <strong>Protección Superior:</strong> Gabinete metálico IP40
                  en rojo bermellón, diseñado para resistir entornos
                  industriales exigentes y proteger los componentes internos.
                </li>
                <li>
                  <strong>Seguridad Eléctrica Avanzada:</strong> Incorpora llave
                  seccionadora y fusibles tipo NH para bombas de alta potencia,
                  además de llaves termomagnéticas para protección de bombas de
                  hasta 15HP y circuitos de comando, garantizando la integridad
                  de su instalación.
                </li>
                <li>
                  <strong>Control Versátil:</strong> Llaves selectoras para
                  arranque automático y manual por cada bomba, ofreciendo
                  flexibilidad operativa y control total sobre su sistema.
                </li>
                <li>
                  <strong>Circuito de Comando Seguro:</strong> Transformador de
                  24V para un circuito de comando de baja tensión, minimizando
                  riesgos eléctricos y aumentando la seguridad del personal.
                </li>
                <li>
                  <strong>Monitoreo Intuitivo:</strong> Pilotos LED de 220V para
                  indicación de presencia de fases, estado de marcha de bombas y
                  fallas en bomba Jockey, permitiendo una supervisión rápida y
                  eficaz.
                </li>
                <li>
                  <strong>Conectividad Simplificada:</strong> Borneras dedicadas
                  para una conexión rápida y segura de alimentación, señal
                  remota (contacto seco), presostatos y motores, facilitando la
                  instalación y el mantenimiento.
                </li>
                <li>
                  <strong>Documentación Completa:</strong> Incluye planos
                  detallados de cableado y conexionado (físico y digital),
                  asegurando una comprensión clara del sistema y agilizando
                  futuras intervenciones.
                </li>
              </ul>
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
