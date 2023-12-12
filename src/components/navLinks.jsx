import Link from "next/link";

import ChevronRightIcon from "../icons/chevronRightIcon";

export default function NavLinks({
  closeBottomSheet = null,
  vertical = false,
}) {
  return (
    <>
      <Link className="px-3 py-1" href="#nosotros" onClick={closeBottomSheet}>
        Nosotros
      </Link>
      <Link
        className=" px-3 py-1"
        href="#"
        onClick={closeBottomSheet}
      >
        Tableros
      </Link>
      <Link
        className="px-3 py-1"
        href="#mantenimiento"
        onClick={closeBottomSheet}
      >
        Mantenimiento
      </Link>
      <Link
        className="px-3 py-1"
        href="#instalaciones"
        onClick={closeBottomSheet}
      >
        Instalaciones
      </Link>
      <Link
        className="btn-primary  pr-4"
        style={{
          marginLeft: vertical ? "0" : "25px",
          marginTop: vertical ? "25px" : "0",
        }}
        href="#"
        onClick={closeBottomSheet && closeBottomSheet}
      >
        Contacto <ChevronRightIcon className="h-5 w-5" />
      </Link>
    </>
  );
}
