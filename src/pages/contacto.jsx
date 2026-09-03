import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Seo from "../components/seo";
import { useState } from "react";
import { toast } from "sonner";
import { trackEvent } from "../utils/analytics";

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
        trackEvent("contacto_enviado");
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
      <Seo
        title="Contacto y presupuestos · MYXA, Buenos Aires"
        description="Consultas y presupuestos de tableros y equipos contra incendio. WhatsApp +54 9 11 5815-1959, info@myxa.com.ar. Nos comunicamos en menos de 48 horas."
        path="/contacto"
      />
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
                      onClick={() =>
                        trackEvent("whatsapp_click", { source: "contacto" })
                      }
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
      <Footer />
    </>
  );
}
