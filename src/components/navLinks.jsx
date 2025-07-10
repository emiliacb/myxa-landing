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
        className="hover-rotate rounded-md px-3 py-1 text-2xl md:text-base"
        href="/"
        onClick={closeBottomSheet}
      >
        Inicio
      </Link>
      <Link
        className="hover-rotate rounded-md px-3 py-1 text-2xl md:text-base"
        href="/tableros"
        onClick={closeBottomSheet}
      >
        Tableros
      </Link>
      <Link
        className="hover-rotate rounded-md px-3 py-1 text-2xl md:text-base"
        href="/presurizacion"
        onClick={closeBottomSheet}
      >
        Presurización
      </Link>
      <Link
        className="hover-rotate rounded-md px-3 py-1 text-2xl md:text-base"
        href="/servicios"
        onClick={closeBottomSheet}
      >
        Servicios
      </Link>

      <Link
        className={`${
          !ctaDimished && "btn-primary"
        } pr-4 text-2xl md:text-base`}
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
