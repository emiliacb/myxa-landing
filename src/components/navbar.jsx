import Link from "next/link";

import Logo from "./logo";
import ChevronRight from "./chevronRight";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-40 w-full bg-white px-10 py-3 shadow">
      <div className="flex w-full m-auto justify-between gap-6 max-w-[1200px]">
        <Link href="/">
          <Logo width={50} />
        </Link>
        <div className="flex w-full max-w-[700px] items-center justify-between gap-2">
          <Link className="px-3 py-1" href="#nosotros">
            Nosotros
          </Link>
          <Link
            className="pointer-events-none px-3 py-1 text-gray-300"
            href="#"
          >
            Tableros
          </Link>
          <Link
            className="pointer-events-none px-3 py-1 text-gray-300"
            href="#"
          >
            Mantenimiento
          </Link>
          <Link
            className="pointer-events-none px-3 py-1 text-gray-300"
            href="#"
          >
            Instalaciones
          </Link>
          <Link className="btn-primary ml-10 pr-4" href="#">
            Contacto <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
