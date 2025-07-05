import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export function useScrollDetection(threshold = 100) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > threshold && !isScrolled) {
      setIsScrolled(true);
    } else if (latest < threshold && isScrolled) {
      setIsScrolled(false);
    }
  });

  return isScrolled;
}
