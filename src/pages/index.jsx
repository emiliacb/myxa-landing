import Head from "next/head";

import Navbar from "../components/navbar";
import Card from "../components/card";
import Title from "../components/title";

export default function Home() {
  return (
    <>
      <Head>
        <title>DRTB</title>
        <meta name="description" content="DRTB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex flex-col items-center justify-center px-4 pb-12 md:px-10 md:pb-24">
        <section className="flex min-h-screen flex-col items-center justify-center">
          <Title
            contents={[
              "DRTB",
              "Especialistas en tableros",
              "Instalaciones contra incendio",
            ]}
            duration={200}
            delta={5}
          />
        </section>
        <section
          id="nosotros"
          className="flex min-h-screen w-full max-w-[1200px] flex-col items-center justify-center pt-28 md:py-24"
        >
          <Card title="Nosotros">
            <div className="flex flex-col gap-2 md:flex-row">
              <div className="flex-1 p-4">
                <h3 className="mb-4 text-lg font-bold">Texto resaltado</h3>
                <p className="text-justify">
                  El mantenimiento regular garantiza que tu tablero contra
                  incendios funcione óptimamente en momentos críticos. Coordina
                  con especialistas, anticipa problemas y establece un
                  calendario de revisión, todo antes de que se presente una
                  emergencia real.
                </p>
              </div>
              <p className="flex-1 p-4 text-justify">
                El mantenimiento regular garantiza que tu tablero contra
                incendios funcione óptimamente en momentos críticos. Coordina
                con especialistas, anticipa problemas y establece un calendario
                de revisión, todo antes de que se presente una emergencia real.
                El mantenimiento regular garantiza que tu tablero contra
                incendios funcione óptimamente en momentos críticos. Coordina
                con especialistas, anticipa problemas y establece un calendario
                de revisión, todo antes de que se presente una emergencia real.
              </p>
            </div>
          </Card>
        </section>
        <section
          id="tableros"
          className="flex min-h-screen w-screen flex-col items-center justify-center bg-black pt-28 text-white"
        >
          <Title contents={"Tableros"} duration={90} delta={10} white />
          <div className="my-24 flex max-w-[1076px] flex-col gap-12 md:flex-row">
            <div className="flex-1 p-4 md:w-1/2">
              <h3 className="mb-4 text-lg font-bold">Texto resaltado</h3>
              <p className="text-justify">
                El mantenimiento regular garantiza que tu tablero contra
                incendios funcione óptimamente en momentos críticos. Coordina
                con especialistas, anticipa problemas y establece un calendario
                de revisión, todo antes de que se presente una emergencia real.
              </p>
            </div>
            <img
              alt="Picture of the author"
              src="https://placehold.co/600x400"
              width={600}
              height={400}
            />
          </div>
          <div className="my-24 flex max-w-[1076px] flex-col gap-12 md:flex-row">
            <img
              alt="Picture of the author"
              src="https://placehold.co/600x400"
              width={600}
              height={400}
            />
            <div className="flex-1 p-4 md:w-1/2">
              <h3 className="mb-4 text-lg font-bold">Texto resaltado</h3>
              <p className="text-justify">
                El mantenimiento regular garantiza que tu tablero contra
                incendios funcione óptimamente en momentos críticos. Coordina
                con especialistas, anticipa problemas y establece un calendario
                de revisión, todo antes de que se presente una emergencia real.
              </p>
            </div>
          </div>
          <div className="my-24 flex max-w-[1076px] flex-col gap-12 md:flex-row">
            <div className="flex-1 p-4 md:w-1/2">
              <h3 className="mb-4 text-lg font-bold">Texto resaltado</h3>
              <p className="text-justify">
                El mantenimiento regular garantiza que tu tablero contra
                incendios funcione óptimamente en momentos críticos. Coordina
                con especialistas, anticipa problemas y establece un calendario
                de revisión, todo antes de que se presente una emergencia real.
              </p>
            </div>
            <img
              alt="Picture of the author"
              src="https://placehold.co/600x400"
              width={600}
              height={400}
            />
          </div>
        </section>
        <section
          id="mantenimiento"
          className="flex min-h-screen w-full max-w-[1200px] flex-col items-center justify-center gap-16 pt-28 md:py-24"
        >
          <Title contents={"Mantenimiento"} duration={90} delta={10} />
          <Card>
            <div className="flex flex-col gap-12 md:flex-row">
              <div className="flex-1 p-4 md:w-1/2">
                <h3 className="mb-4 text-lg font-bold">Texto resaltado</h3>
                <p className="text-justify">
                  El mantenimiento regular garantiza que tu tablero contra
                  incendios funcione óptimamente en momentos críticos. Coordina
                  con especialistas, anticipa problemas y establece un
                  calendario de revisión, todo antes de que se presente una
                  emergencia real.
                </p>
              </div>
              <img
                alt="Picture of the author"
                src="https://placehold.co/600x400"
                width={600}
                height={400}
              />
            </div>
          </Card>
        </section>

        <section
          id="instalaciones"
          className="flex min-h-screen w-full max-w-[1200px] flex-col items-center justify-center gap-16 pt-28 md:py-24"
        >
          <Title contents={"Instalaciones"} duration={90} delta={10} />
          <Card>
            <div className="flex flex-col gap-12 md:flex-row">
              <img
                alt="Picture of the author"
                src="https://placehold.co/600x400"
                width={600}
                height={400}
              />
              <div className="flex-1 p-4 md:w-1/2">
                <h3 className="mb-4 text-lg font-bold">Texto resaltado</h3>
                <p className="text-justify">
                  El mantenimiento regular garantiza que tu tablero contra
                  incendios funcione óptimamente en momentos críticos. Coordina
                  con especialistas, anticipa problemas y establece un
                  calendario de revisión, todo antes de que se presente una
                  emergencia real.
                </p>
              </div>
            </div>
          </Card>
        </section>
        <section
          id="contacto"
          className="flex min-h-screen w-screen flex-col items-center justify-center bg-black pt-28 text-white"
        >
          <h2 className="text-8xl">Contacto</h2>
          
        </section>
      </main>
    </>
  );
}
