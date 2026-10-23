import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Seo from "../components/seo";
import { useState } from "react";
import { toast } from "sonner";
import { trackEvent } from "../utils/analytics";
import {
  buildGraph,
  buildBreadcrumbList,
  getOrganization,
  getWebsite,
} from "../utils/schema";

const CONTACTO_JSON_LD = buildGraph([
  getOrganization(),
  getWebsite(),
  buildBreadcrumbList([
    { name: "Inicio", path: "/" },
    { name: "Contacto", path: "/contacto" },
  ]),
]);

export default function Contacto() {
  const [isLoading, setIsLoading] = useState(false);

  // TODO - Adhoc solution - Refactor inputs into a single state
  const [inputName, setInputName] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [inputWebsite, setInputWebsite] = useState("");

  function handleInput(e) {
    const { value, name } = e.target;

    const contactNumber = "contact-number";
    const contactName = "contact-name";
    const contactWebsite = "contact-website";

    if (name == contactNumber && /^[0-9+-\s]*$/.test(value)) {
      setInputNumber(value);
    }

    if (name == contactName) {
      setInputName(value);
    }

    if (name == contactWebsite) {
      setInputWebsite(value);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (isLoading || (!inputName && !inputNumber)) return;

    setIsLoading(true);
    const fetchPromise = fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: inputName,
        phone: inputNumber,
        website: inputWebsite,
      }),
    }).then((response) => {
      if (!response.ok) throw response;
      return response;
    });
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
        image="https://www.myxa.com.ar/og/contacto.jpg"
        jsonLd={CONTACTO_JSON_LD}
      />
      <Navbar isInvert />
      <main className="flex flex-col items-center justify-center px-4 md:px-10">
        <section
          id="contacto-detalles"
          className="relative flex min-h-screen w-screen flex-col items-center justify-center bg-ink py-12 pt-36 text-white"
        >
          <p className="eyebrow">Consultas y presupuestos</p>
          <h1 className="heading-sign mt-2 text-6xl lg:text-[128px]">Contacto</h1>
          <div aria-hidden="true" className="hazard mt-8 h-4 w-40 text-red-drtb" />
          <div className="mt-8 w-full max-w-[1200px] items-center px-4 md:px-10 lg:mt-20">
            <div className="flex w-full flex-col justify-between md:gap-10 lg:flex-row lg:gap-16">
              <div className="max-w-2xl flex-1 p-4">
                <h2 className="heading-sign mb-4 text-4xl">Consultas</h2>
                <p className="text-pretty mb-6 text-lg font-light">
                  En <span className="font-semibold text-red-500">MYXA</span>, estamos
                  dedicados a proteger lo que más importa: su tranquilidad, su
                  gente y su patrimonio. Contáctenos hoy para descubrir cómo
                  podemos ayudarlo.
                </p>
                <p className="hidden md:block">
                  Para resolver sus dudas o pedir un presupuesto comuníquese con
                  nosotros por:
                </p>
                <ul className="mt-5 border-l-4 border-red-drtb pl-4">
                  <li className="my-2">
                    <span>Whatsapp: </span>
                    <a
                      className="px-1 font-semibold underline decoration-red-drtb decoration-2 underline-offset-4 hover:text-red-400"
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
                      className="px-1 font-semibold underline decoration-red-drtb decoration-2 underline-offset-4 hover:text-red-400"
                      href="mailto:info@myxa.com.ar"
                    >
                      info@myxa.com.ar
                    </a>
                  </li>
                  <li className="mb-2">
                    <span>Linkedin: </span>
                    <a
                      className="px-1 font-semibold underline decoration-red-drtb decoration-2 underline-offset-4 hover:text-red-400"
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
                <h2 className="heading-sign mb-4 text-4xl">...O déjenos su número</h2>

                <p className="text-pretty mb-6 text-lg font-light">
                  Y nos comunicamos con usted en menos de 48 horas.
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="m-auto flex flex-col items-end justify-start gap-4 md:flex-row"
                >
                  <input
                    value={inputWebsite}
                    name="contact-website"
                    onInput={handleInput}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
                  ></input>
                  <input
                    value={inputName}
                    placeholder="Nombre"
                    name="contact-name"
                    onInput={handleInput}
                    className="w-full border-b-4 border-red-drtb px-3 py-2 text-ink ring-offset-ink focus-visible:ring-2 focus-visible:ring-offset-2"
                  ></input>
                  <input
                    value={inputNumber}
                    placeholder="Teléfono"
                    name="contact-number"
                    onInput={handleInput}
                    className="w-full border-b-4 border-red-drtb px-3 py-2 text-ink ring-offset-ink focus-visible:ring-2 focus-visible:ring-offset-2"
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
