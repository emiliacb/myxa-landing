import { useState } from "react";
import Link from "next/link";
import { useScroll, useMotionValueEvent } from "framer-motion";

import NavLinks from "./navLinks";
import Bottomsheet from "./bottomsheet";

import LogoIcon from "../icons/logoIcon";
import HamburguerIcon from "../icons/hamburguerIcon";

export default function Navbar() {
  const [isOpen, toggleIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100 && !isScrolled) setIsScrolled(true);
    if (latest < 100) setIsScrolled(false);
  });

  return (
    <nav className="fixed top-0 z-40 w-full bg-white px-4 py-3 shadow md:px-10">
      <div className="m-auto flex w-full max-w-[1200px] justify-between gap-6">
        <Link className="flex items-center gap-2 rounded-md p-1" href="/" >
          <div className="hover:animate-spin">
            <LogoIcon width={50} className={`${!isScrolled ? 'scale-150 py-2 md:py-8' : 'scale-100'} transition-all duration-150`} />
          </div>
          <span className={`${!isScrolled ? 'md:scale-150 md:translate-x-8' : 'scale-100'} text-2xl font-black text-red-drtb transition-all duration-150 hidden md:block`}>DRTB</span>
        </Link>
        <button className="lg:hidden" onClick={() => toggleIsOpen(true)}>
          <HamburguerIcon className={` text-gray-600 lg:hidden ${!isScrolled ? 'h-12 w-12' : 'h-10 w-10'}`} />
          <span className={`text-xs block opacity-70 ${!isScrolled ? '' : 'hidden'}`}>Menú</span>
        </button>
        <div className="hidden w-full max-w-[700px] items-center justify-between gap-2 lg:flex">
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
