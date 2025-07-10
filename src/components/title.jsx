import { Fragment } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { getClonedElements } from "../utils/title";

const _SIZES = {
  xl: "text-5xl md:text-[180px]",
  lg: "text-4xl md:text-6xl lg:text-8xl",
  md: "text-3xl md:text-4xl lg:text-6xl",
  sm: "text-2xl md:text-3xl lg:text-4xl",
};

function Title({ contents, white, scrollRef, size = _SIZES.xl }) {
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-100%"]);

  let contentsElements = getClonedElements(contents);

  return (
    <div className="w-screen overflow-hidden">
      <motion.div
        className="flex w-fit items-center justify-start"
        style={{ x }}
      >
        {contentsElements &&
          contentsElements.map((content, index) => (
            <Fragment key={index}>
              <div
                className="h-1 w-12 md:mt-6 md:h-4 md:w-52"
                style={{ backgroundColor: white ? "#EEE" : "#222" }}
              />
              <h2
                className={`mx-4 w-max text-5xl font-bold md:text-[180px] ${size}`}
                style={{ color: white ? "#EEE" : "#222" }}
              >
                {content}
              </h2>
              <div
                className="h-1 w-12 md:mt-6 md:h-4 md:w-52"
                style={{ backgroundColor: white ? "#EEE" : "#222" }}
              />
            </Fragment>
          ))}
      </motion.div>
    </div>
  );
}

Title.SIZES = _SIZES;

export default Title;
