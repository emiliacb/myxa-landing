import { useState } from "react";
import Head from "next/head";
import { toast } from "sonner";
import Link from "next/link";

import Navbar from "../components/navbar";
import Card from "../components/card";
import Title from "../components/title";

import ChevronRightIcon from "../icons/chevronRightIcon";

export default function Home() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    const fetchPromise = fetch(`/api/send?phone=${input}`, { method: "POST" });
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
        <title>DRTB</title>
        <meta name="description" content="DRTB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200 px-4 md:px-10">
        <section className="items-left flex min-h-screen flex-col py-32 lg:justify-center">
          <img
            alt=""
            src="/cover.png"
            className="pointer-events-none absolute top-32 h-[70vh] opacity-25 mix-blend-darken md:right-20"
          />
          <h1 className="m-auto text-6xl italic lg:hidden">DRTB</h1>
          <Title
            contents={[
              "Especialistas en tableros",
              "Instalaciones contra incendio",
            ]}
            duration={200}
            delta={15}
          />
          <Link
            className="btn-primary m-auto to-red-drtb/80 py-4 pl-10 pr-8 text-xl text-white lg:hidden"
            href="#contacto"
          >
            Contacto
            <ChevronRightIcon className="h-5 w-5" />
          </Link>
        </section>
        <section
          id="nosotros"
          className="flex min-h-screen w-full max-w-[1200px] flex-col items-center justify-center py-12 pt-28 md:py-24"
        >
          <Card title="Nosotros">
            <div className="flex flex-col gap-2 lg:flex-row">
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
          className="flex min-h-screen w-screen flex-col items-center justify-center bg-black pt-28 text-white "
        >
          <Title contents={"Tableros"} duration={90} delta={10} white />
          <div className="my-24 flex max-w-[1200px] flex-col items-center gap-12 lg:flex-row">
            <div className="flex-1 p-4 md:w-2/3 lg:w-1/2">
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
              src="/tablero-1.png"
              width={600}
              height={400}
            />
          </div>
          {/* <div className="my-24 flex max-w-[1200px] flex-col  items-center gap-12 lg:flex-row">
            <img
              alt="Picture of the author"
              src="https://placehold.co/600x400"
              width={600}
              height={400}
            />
            <div className="flex-1 p-4 md:w-2/3 lg:w-1/2">
              <h3 className="mb-4 text-lg font-bold">Texto resaltado</h3>
              <p className="text-justify">
                El mantenimiento regular garantiza que tu tablero contra
                incendios funcione óptimamente en momentos críticos. Coordina
                con especialistas, anticipa problemas y establece un calendario
                de revisión, todo antes de que se presente una emergencia real.
              </p>
            </div>
          </div>
          <div className="my-24 flex max-w-[1200px]  flex-col items-center gap-12 lg:flex-row">
            <div className="flex-1 p-4 md:w-2/3 lg:w-1/2">
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
          </div> */}
        </section>
        <section
          id="mantenimiento"
          className="flex min-h-screen w-full max-w-[1200px] flex-col items-center justify-center gap-16 py-12 pt-16 md:py-24"
        >
          <Title contents={"Mantenimiento"} duration={90} delta={10} />
          <Card>
            <div className="flex flex-col gap-12 lg:flex-row">
              <div className="flex-1 p-4 md:w-2/3 lg:w-1/2">
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
          className="flex min-h-screen w-full max-w-[1200px] flex-col items-center justify-center gap-16 py-12 pt-28 md:py-24"
        >
          <Title contents={"Instalaciones"} duration={90} delta={10} />
          <Card>
            <div className="flex flex-col gap-12 lg:flex-row">
              <img
                alt="Picture of the author"
                src="https://placehold.co/600x400"
                width={600}
                height={400}
              />
              <div className="flex-1 p-4 md:w-2/3 lg:w-1/2">
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
          className="flex min-h-screen w-screen flex-col items-center justify-center bg-black pt-16 text-white"
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl">Contacto</h2>
          <div className="mt-10 w-full max-w-[1200px] items-center px-4 md:px-10 lg:mt-20">
            <div className="flex w-full flex-col justify-between md:gap-10 lg:flex-row lg:gap-16">
              <div className="max-w-2xl flex-1 p-4">
                <h3 className="mb-4 text-xl font-extrabold">Consultas</h3>
                <p className="mb-6 md:text-justify">
                  Para resolver tus dudas o pedir un presupuesto comunicate con
                  nosotros por:
                </p>
                <ul>
                  <li className="mb-2">
                    <span>Whatsapp: </span>
                    <a
                      className="text-blue-300 hover:underline hover:underline-offset-4"
                      href="#"
                    >
                      12345678910
                    </a>
                  </li>
                  <li className="mb-2">
                    <span>Email: </span>{" "}
                    <a
                      className="text-blue-300 hover:underline hover:underline-offset-4"
                      href="#"
                    >
                      hola@drtb.com
                    </a>
                  </li>
                  <li>
                    <span>Linkedin: </span>
                    <a
                      className="text-blue-300 hover:underline hover:underline-offset-4"
                      href="#"
                    >
                      in/tururu
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-1 p-4">
                <h3 className="mb-4 text-lg">...O dejanos tu número</h3>
                <p className="mb-6 md:text-justify">
                  Y nos comunicamos con vos en menos de 48 horas.
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
                      className="w-full rounded-md px-3 py-2 text-black focus-visible:ring-2"
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
    </>
  );
}
