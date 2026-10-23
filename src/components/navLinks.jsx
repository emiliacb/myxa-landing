import Link from "next/link";

import ChevronRightIcon from "../icons/chevronRightIcon";

export default function NavLinks({
  closeBottomSheet = null,
  vertical = false,
  ctaDimished = false,
}) {
  return (
    <>
      <Link
        className="hover-rotate px-3 py-1 font-display text-3xl font-bold uppercase tracking-wider md:text-lg"
        href="/"
        onClick={closeBottomSheet}
      >
        Inicio
      </Link>
      <Link
        className="hover-rotate px-3 py-1 font-display text-3xl font-bold uppercase tracking-wider md:text-lg"
        href="/tableros"
        onClick={closeBottomSheet}
      >
        Tableros
      </Link>
      <Link
        className="hover-rotate px-3 py-1 font-display text-3xl font-bold uppercase tracking-wider md:text-lg"
        href="/presurizacion"
        onClick={closeBottomSheet}
      >
        Presurización
      </Link>
      <Link
        className="hover-rotate px-3 py-1 font-display text-3xl font-bold uppercase tracking-wider md:text-lg"
        href="/servicios"
        onClick={closeBottomSheet}
      >
        Servicios
      </Link>

      <Link
        className={`${
          !ctaDimished && "btn-primary"
        } pr-4 text-3xl md:text-lg`}
        style={{
          marginLeft: vertical ? "0" : "25px",
          marginTop: vertical ? "25px" : "0",
        }}
        href="/contacto"
        onClick={closeBottomSheet}
      >
        Contacto {!ctaDimished && <ChevronRightIcon className="h-5 w-5" />}
      </Link>
    </>
  );
}
