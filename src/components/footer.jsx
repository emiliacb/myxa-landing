import cs from "classnames";

export default function Footer({ dark = true }) {
  return (
    <footer
      className={cs("w-full px-4 py-8", {
        "bg-black text-neutral-100": dark,
        "bg-white text-black": !dark,
      })}
    >
      <div className="m-auto flex max-w-[1200px] flex-col items-center justify-between text-sm md:flex-row">
        <div className="flex w-full flex-col justify-between gap-4 md:flex-row md:items-center">
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-row flex-wrap justify-center gap-4 md:items-center md:space-x-4">
              <li>
                <a href="/#nosotros" className="hover:underline">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="/tableros" className="hover:underline">
                  Tableros
                </a>
              </li>
              <li>
                <a href="/presurizacion" className="hover:underline">
                  Presurización
                </a>
              </li>
              <li>
                <a href="/servicios" className="hover:underline">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/contacto" className="hover:underline">
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
  );
}
