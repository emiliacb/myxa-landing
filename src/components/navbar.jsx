import { useEffect, useState } from "react";

import Link from "next/link";

import NavLinks from "./navLinks";
import Bottomsheet from "./bottomsheet";

import LogoIcon from "../icons/logoIcon";
import HamburguerIcon from "../icons/hamburguerIcon";

export default function Navbar() {
  const [isOpen, toggleIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-40 w-full bg-white px-4 py-3 shadow md:px-10">
      <div className="m-auto flex w-full max-w-[1200px] justify-between gap-6">
        <Link className="flex items-center gap-3" href="/">
          <LogoIcon width={50} />
          {/* <span className="text-2xl font-black text-red-drtb md:hidden">
            DRTB
          </span> */}
        </Link>
        <button onClick={() => toggleIsOpen(true)}>
          <HamburguerIcon className="h-10 w-10 text-gray-600 md:hidden" />
        </button>
        <div className="hidden w-full max-w-[700px] items-center justify-between gap-2 md:flex">
          <NavLinks />
        </div>
        <Bottomsheet isOpen={isOpen} onClose={() => toggleIsOpen(false)}>
          <div className="flex flex-col items-center justify-center gap-6">
            <NavLinks closeBottomSheet={() => toggleIsOpen(false)} vertical />
          </div>
        </Bottomsheet>
      </div>
    </nav>
  );
}
