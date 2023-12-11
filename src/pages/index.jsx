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
      <main className="flex flex-col items-center justify-center px-4 md:px-10">
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
          className="flex min-h-screen max-w-[1200px] w-full flex-col items-center justify-center py-16 md:py-24"
        >
          <Card title="Nosotros">
            <div className="flex flex-col md:flex-row gap-2">
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
          id="mantenimiento"
          className="flex min-h-screen max-w-[1200px] w-full flex-col items-center justify-center gap-16 py-16 md:py-24"
        >
          <Title contents={"Mantenimiento"} duration={90} delta={10} />
          <Card>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2 flex-1 p-4">
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
          className="flex min-h-screen max-w-[1200px] w-full flex-col items-center justify-center gap-16 py-16 md:py-24"
        >
          <Title contents={"Instalaciones"} duration={90} delta={10}/>
          <Card>
            <div className="flex flex-col md:flex-row gap-12">
              <img
                alt="Picture of the author"
                src="https://placehold.co/600x400"
                width={600}
                height={400}
              />
              <div className="md:w-1/2 flex-1 p-4">
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
      </main>
    </>
  );
}
