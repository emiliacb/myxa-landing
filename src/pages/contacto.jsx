import Head from "next/head";
import Navbar from "../components/navbar";
import { useState } from "react";
import { toast } from "sonner";

export default function Contacto() {
  const [isLoading, setIsLoading] = useState(false);

  // TODO - Adhoc solution - Refactor inputs into a single state
  const [inputName, setInputName] = useState("");
  const [inputNumber, setInputNumber] = useState("");

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
        <title>MYXA - Contacto</title>
        <meta
          name="description"
          content="Contáctenos para consultas y presupuestos sobre sistemas contra incendio."
        />
      </Head>
      <Navbar isInvert />
      <main className="flex flex-col items-center justify-center px-4 md:px-10">
        <section
          id="contacto-detalles"
          className="relative flex min-h-screen w-screen flex-col items-center justify-center bg-black py-12 pt-24 text-white"
        >
          <h1 className="text-4xl md:text-6xl">Contacto</h1>
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
                <p className="hidden md:block">
                  Para resolver sus dudas o pedir un presupuesto comuníquese con
                  nosotros por:
                </p>
                <ul className="mt-5 border-l border-gray-100 pl-4">
                  <li className="my-2">
                    <span>Whatsapp: </span>
                    <a
                      className="rounded-md px-1 text-blue-300 hover:underline hover:underline-offset-4"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://wa.me/+5491158151959"
                    >
                      +54 9 11 5815-1959
                    </a>
                  </li>
                  <li className="mb-2">
                    <span>Email: </span>
                    <a
                      className="rounded-md px-1 text-blue-300 hover:underline hover:underline-offset-4"
                      href="mailto:info@myxa.com.ar"
                    >
                      info@myxa.com.ar
                    </a>
                  </li>
                  <li className="mb-2">
                    <span>Linkedin: </span>
                    <a
                      className="rounded-md px-1 text-blue-300 hover:underline  hover:underline-offset-4"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://linkedin.com/company/myxa-incendio"
                    >
                      /myxa-incendio
                    </a>
                  </li>
                </ul>
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
                  <a href="/#tableros" className="hover:underline">
                    Tableros
                  </a>
                </li>
                <li>
                  <a href="/#instalacion" className="hover:underline">
                    Instalación
                  </a>
                </li>
                <li>
                  <a href="/#mantenimiento" className="hover:underline">
                    Mantenimiento
                  </a>
                </li>
                <li>
                  <a href="/#reparacion" className="hover:underline">
                    Reparación
                  </a>
                </li>
                <li>
                  <a href="/#contacto" className="hover:underline">
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
