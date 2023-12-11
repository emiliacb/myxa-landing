import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useAnimate } from "framer-motion";

export function ContentComponent({ isOpen, onClose, children }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      scope.current,
      { y: isOpen ? "0%" : "100%", opacity: isOpen ? 1 : 0 },
      { duration: 0.2 }
    );

    document.body.style.height = isOpen ? "100vh" : "auto";
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="op absolute top-0 z-50 h-screen w-screen bg-gray-900 opacity-30"
          onClick={() => onClose()}
        />
      )}
      <div
        ref={scope}
        className="bg-red-30 fixed top-1/3 z-50  flex h-2/3 w-screen flex-col items-center justify-center gap-12 overflow-hidden rounded-t-3xl bg-gray-100 py-16"
      >
        <div className="absolute top-5 m-auto h-1 w-24 rounded-xl bg-gray-200" />
        {children}
      </div>
    </>
  );
}

export default function Bottomsheet({ isOpen, onClose, children }) {
  const [isMounted, toggleIsMounted] = useState(false);

  useEffect(() => {
    toggleIsMounted(true);
  }, []);

  return isMounted
    ? createPortal(
        <ContentComponent isOpen={isOpen} onClose={onClose}>
          {children}
        </ContentComponent>,
        document.getElementById("__next")
      )
    : null;
}
