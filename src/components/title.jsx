import { Fragment } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { getClonedElements } from "../utils/title";

export default function Title({ contents, white, scrollRef }) {
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
                style={{ backgroundColor: white ? "white" : "black" }}
              />
              <h2
                className="mx-4 w-max text-5xl font-bold md:text-[180px]"
                style={{ color: white ? "white" : "black" }}
              >
                {content}
              </h2>
              <div
                className="h-1 w-12 md:mt-6 md:h-4 md:w-52"
                style={{ backgroundColor: white ? "white" : "black" }}
              />
            </Fragment>
          ))}
      </motion.div>
    </div>
  );
}
