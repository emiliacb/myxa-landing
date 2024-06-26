import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Element } from "./element";

const defaultElements = [
  "instalaciones.jpg",
  "/tablero-2.jpg",
  "/tablero-3.jpg",
  "/tablero-4.jpeg",
  "instalaciones.jpg",
  "/tablero-2.jpg",
  "/tablero-3.jpg",
  "/tablero-4.jpeg",
  "instalaciones.jpg",
  "/tablero-2.jpg",
  "/tablero-3.jpg",
  "/tablero-4.jpeg",
];

export function Carousel({ className, style, elements = defaultElements }) {
  const ref = useRef(null);
  const [currentWidth, setCurrentWidth] = useState();

  useEffect(() => {
    const { width } = ref.current.getBoundingClientRect();
    setCurrentWidth(width);
  }, []);

  return (
    <div className={`${className} carousel`} style={style}>
      <motion.div ref={ref} className="holder">
        {currentWidth &&
          elements.map((src, i) => (
            <Element container={ref} src={src} key={i} width={currentWidth} />
          ))}
      </motion.div>
    </div>
  );
}
