import { Fragment } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { getClonedElements } from "../utils/title";
import cl from "classnames";

const _SIZES = {
  xl: "text-6xl md:text-[160px]",
  lg: "text-5xl md:text-7xl lg:text-[128px]",
  md: "text-4xl md:text-5xl lg:text-7xl",
  sm: "text-3xl md:text-4xl lg:text-5xl",
};

function Title({ contents, white, scrollRef, size = _SIZES.xl, className }) {
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-100%"]);

  let contentsElements = getClonedElements(contents);
  const headingText = Array.isArray(contents) ? contents.join(" ") : contents;

  return (
    <div className={cl("w-screen overflow-hidden", className)}>
      <h2 className="sr-only">{headingText}</h2>
      <motion.div
        aria-hidden="true"
        className={cl(
          "flex w-fit items-center justify-start",
          white ? "text-white" : "text-ink"
        )}
        style={{ x }}
      >
        {contentsElements &&
          contentsElements.map((content, index) => (
            <Fragment key={index}>
              <div
                className={cl(
                  "hazard h-3 w-16 md:h-5 md:w-56",
                  white ? "text-white" : "text-red-drtb"
                )}
              />
              <span
                className={`mx-5 w-max font-display font-extrabold uppercase leading-none ${size}`}
              >
                {content}
              </span>
              <div
                className={cl(
                  "hazard h-3 w-16 md:h-5 md:w-56",
                  white ? "text-white" : "text-red-drtb"
                )}
              />
            </Fragment>
          ))}
      </motion.div>
    </div>
  );
}

Title.SIZES = _SIZES;

export default Title;
