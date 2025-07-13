import { useState, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export function useSectionInView({ offset } = {}) {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: offset || ["start 66px", "end 66px"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsInView(latest > 0 && latest < 1);
  });

  return [sectionRef, isInView];
}
