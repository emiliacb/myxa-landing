import Link from "next/link";

import { CONTACT } from "../utils/constants";
import { trackEvent } from "../utils/analytics";

export default function CtaBand() {
  return (
    <section
      aria-labelledby="cta-title"
      className="w-full bg-ink px-4 pb-16 text-white md:px-10"
    >
      <div aria-hidden="true" className="hazard -mx-4 h-4 text-red-drtb md:-mx-10" />
      <div className="m-auto flex max-w-[1200px] flex-col gap-8 pt-14 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">Asesoramiento técnico</p>
          <h2
            id="cta-title"
            className="heading-sign text-5xl md:text-6xl lg:text-7xl"
          >
            ¿Tenés un proyecto contra incendio?
          </h2>
          <p className="mt-4 max-w-xl text-lg font-light text-neutral-300">
            Contanos qué necesitás y te ayudamos a definir el tablero o el
            equipo adecuado para tu instalación.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link className="btn-primary" href="/contacto">
            Consultar
          </Link>
          <a
            className="btn-outline text-white hover:bg-white hover:text-ink"
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { source: "cta_band" })}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
