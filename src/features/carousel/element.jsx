import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export function Element({ width, container, src }) {
  const ref = useRef(null);
  const x = useMotionValue(null);

  const maxWidth = useTransform(x, [100, width * 0.8], ["50%", "10%"]);

  function updateWidth() {
    const { left } = ref.current.getBoundingClientRect();
    x.set(left);
  }

  function scrollToView(e) {
    e.preventDefault();
    updateWidth();
    const { left } = ref.current.getBoundingClientRect();
    container.current.scrollBy({
      left: left - 9,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    container.current.addEventListener("scroll", updateWidth);
    x.set(0);
    updateWidth();
    return () => container.current.removeEventListener("scroll", updateWidth);
  }, []);

  return (
    <motion.div
      ref={ref}
      className="element"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ maxWidth }}
      onTap={scrollToView}
    >
      <img src={src} alt="" />
    </motion.div>
  );
}
