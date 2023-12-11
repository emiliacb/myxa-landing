import { Fragment, useEffect, useRef } from "react";
import { useAnimate, useInView } from "framer-motion";
import { getClonedElements } from "../utils/title";

export default function Title({ contents, duration, delta }) {
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
              <div className="md:mt-6 h-1 md:h-4 w-12 md:w-52 bg-black" />
              <h2
                className="mx-4 w-max text-5xl md:text-[180px] font-bold"
                ref={index === contentsElements.length - 1 ? lastRef : null}
              >
                {content}
              </h2>
              <div className="md:mt-6 h-1 md:h-4 w-12 md:w-52 bg-black" />
            </Fragment>
          ))}
      </div>
    </div>
  );
}
