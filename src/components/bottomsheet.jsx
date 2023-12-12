import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useAnimate, motion, useDragControls, useInView } from "framer-motion";

export function ContentComponent({ isOpen, onClose, children }) {
  const [scope, animate] = useAnimate();
  const isVisible = useInView(scope, { amount: 0.1 });
  const controls = useDragControls();

  const handleDragEnd = (e, info) => {
    const dragDistance = window.innerHeight - info.point.y;
    const mustClose = dragDistance < 50 || info.velocity.y > 500;

    if (mustClose) {
      onClose();
    }
  };
  
  useEffect(() => {
    if(!isVisible) onClose()
  }, [isVisible])

  useEffect(() => {
    animate(
      scope.current,
      { y: isOpen ? "0%" : "100%", opacity: isOpen ? 1 : 0 },
      { duration: 0.3 }
    );

    document.body.style.height = isOpen ? "100vh" : "auto";
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 z-50 h-screen w-screen bg-gray-900 opacity-60"
          onClick={() => onClose()}
        />
      )}
      <motion.div
        ref={scope}
        drag="y"
        dragControls={controls}
        dragConstraints={{ top: -150 }}
        onDragEnd={handleDragEnd}
        className="bg-red-30 fixed top-1/3 z-50 pb-[100vh] flex h-fit w-screen flex-col items-center justify-center gap-12 overflow-hidden rounded-t-3xl bg-gray-100 py-16"
      >
        <div className="absolute top-5 m-auto h-1 w-24 rounded-xl bg-gray-200" />
        {children}
      </motion.div>
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
