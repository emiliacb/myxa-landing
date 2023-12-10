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
        <section className="flex h-screen flex-col items-center justify-center">
          <Title
            contents={[
              "DRTB",
              "Especialistas en tableros",
              "Instalaciones contra incendio",
            ]}
          />
        </section>
        <section id="nosotros" className="flex flex-col h-screen items-center justify-center">
          <Card title="Nosotros" subtitle="Texto resaltado">
            <div class="flex max-w-[1000px]">
              <div class="flex-1 p-4">
                <h3 className="text-lg font-bold mb-4">Texto resaltado</h3>
                <p>
                  El mantenimiento regular garantiza que tu tablero contra
                  incendios funcione óptimamente en momentos críticos. Coordina
                  con especialistas, anticipa problemas y establece un
                  calendario de revisión, todo antes de que se presente una
                  emergencia real.
                </p>
              </div>
              <p class="flex-1 p-4">
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
      </main>
    </>
  );
}
