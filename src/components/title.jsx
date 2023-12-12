import { Fragment, useEffect, useRef } from "react";
import { useAnimate, useInView } from "framer-motion";
import { getClonedElements } from "../utils/title";

export default function Title({ contents, duration, delta, white }) {
  const [scope, animate] = useAnimate();
  const lastRef = useRef(null);
  const isLastInView = useInView(lastRef);

  let contentsElements = getClonedElements(contents, delta);

  useEffect(() => {
    animate(
      scope.current,
      { x: "-100%" },
      { duration, ease: "linear", repeat: Infinity, delay: 0.2 }
    );
  }, []);

  useEffect(() => {
    if (isLastInView)
      animate(
        scope.current,
        { x: "0%" },
        { duration, ease: "linear", repeat: Infinity }
      );
  }, [isLastInView]);

  return (
    <div className="w-screen overflow-hidden">
      <div
        className="flex w-fit items-center justify-start"
        style={{ x: "0%" }}
        ref={scope}
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
                ref={index === contentsElements.length - 1 ? lastRef : null}
              >
                {content}
              </h2>
              <div
                className="h-1 w-12 md:mt-6 md:h-4 md:w-52"
                style={{ backgroundColor: white ? "white" : "black" }}
              />
            </Fragment>
          ))}
      </div>
    </div>
  );
}
