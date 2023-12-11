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
      <main className="flex flex-col items-center justify-center px-10">
        <section className="flex min-h-screen flex-col items-center justify-center">
          <Title
            contents={[
              "DRTB",
              "Especialistas en tableros",
              "Instalaciones contra incendio",
            ]}
          />
        </section>
        <section
          id="nosotros"
          className="flex min-h-screen py-24 max-w-[1200px] flex-col items-center justify-center"
        >
          <Card title="Nosotros">
            <div className="flex gap-2">
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
          className="flex min-h-screen py-24 max-w-[1200px] gap-16 flex-col items-center justify-center"
        >
          <Title
            contents={["Mantenimiento", "Informes", "Presupuestos"]}
          />
          <Card>
            <div className="flex gap-12">
              <div className="w-1/2 flex-1 p-4">
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
          className="flex min-h-screen py-24 max-w-[1200px] gap-16 flex-col items-center justify-center"
        >
          <Title
            contents={["Instalaciones contra incendio", "Obras", "Tanques"]}
          />
          <Card>
            <div className="flex gap-12">
              <img
                alt="Picture of the author"
                src="https://placehold.co/600x400"
                width={600}
                height={400}
              />
              <div className="w-1/2 flex-1 p-4">
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
