import Link from "next/link";

import LogoIcon from "../icons/logoIcon";
import { CONTACT } from "../utils/constants";

const LINKS = [
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/tableros", label: "Tableros" },
  { href: "/presurizacion", label: "Presurización" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t-4 border-red-drtb bg-ink px-4 py-12 text-neutral-300 md:px-10">
      <div className="m-auto grid max-w-[1200px] gap-10 md:grid-cols-[1.4fr_1fr_1.4fr]">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex w-fit items-center gap-3">
            <LogoIcon width={36} />
            <span className="font-display text-3xl font-extrabold tracking-wide text-red-drtb">
              MYXA
            </span>
          </Link>
          <p className="max-w-xs text-sm">
            Tableros de control y equipos de presurización para sistemas contra
            incendio.
          </p>
        </div>
        <nav aria-label="Pie de página">
          <p className="mb-3 font-display text-sm font-bold uppercase tracking-widest text-white">
            Sitio
          </p>
          <ul className="flex flex-col gap-2 text-sm">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover-rotate">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="mb-3 font-display text-sm font-bold uppercase tracking-widest text-white">
            Contacto
          </p>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover-rotate">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-rotate"
              >
                {CONTACT.phone}
              </a>
            </li>
            <li>{CONTACT.address}</li>
            <li>
              <a
                href={CONTACT.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-rotate"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="m-auto mt-10 max-w-[1200px] border-t border-neutral-800 pt-6 text-xs text-neutral-500">
        © {new Date().getFullYear()} MYXA · Todos los derechos reservados.
      </p>
    </footer>
  );
}
