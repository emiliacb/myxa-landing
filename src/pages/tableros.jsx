import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import cs from "classnames";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Seo from "../components/seo";
import { useSectionInView } from "../hooks/useSectionInView";
import { useScrollDetection } from "../hooks/useScrollDetection";
import { isTouchDevice } from "../utils/device";
import {
  TABLERO_FEATURES,
  DEFAULT_IMAGE_IDX,
  DEFAULT_FEATURE,
  FEATURES_IMAGE_TRANSFORMS,
  TABLEROS_IMAGES,
} from "../utils/constants";

export function TableroFeature({
  id,
  title,
  description,
  onView,
  currentFeature,
}) {
  const [featureRef, isFeatureInView] = useSectionInView({
    offset: ["start 300px", "end 250px"],
  });

  const isSelected = currentFeature === id;

  function handleClick() {
    if (isTouchDevice()) return;
    onView(id);
  }

  useEffect(() => {
    if (isFeatureInView) onView(id);
  }, [isFeatureInView]);

  return (
    <li
      ref={featureRef}
      onClick={handleClick}
      className={cs(
        "cursor-pointer select-none rounded-lg border border-transparent px-8 py-6 text-white transition duration-[300ms] md:bg-black md:opacity-100",
        {
          "opacity-25": !!currentFeature,
          "!bg-white !text-black !opacity-100": isSelected,
        }
      )}
    >
      <p className="mb-3 text-lg font-bold">{title}:</p>
      <p className="font-light">{description}</p>
    </li>
  );
}

export default function Tableros() {
  const [startSectionRef, isStartSectionInView] = useSectionInView([
    "start 280px",
    "end 230px",
  ]);
  const [endSectionRef, isEndSectionInView] = useSectionInView([
    "start 280px",
    "end 230px",
  ]);
  const isScrolled = useScrollDetection(1000);

  const [currentFeature, setCurrentFeature] = useState(null);

  const currentImageIdx = currentFeature
    ? FEATURES_IMAGE_TRANSFORMS[currentFeature]?.image
    : DEFAULT_IMAGE_IDX;
  const imageSrc = TABLEROS_IMAGES[currentImageIdx];

  useEffect(() => {
    isStartSectionInView && setCurrentFeature(null);
    isEndSectionInView && setCurrentFeature(null);
  }, [isStartSectionInView, isEndSectionInView]);

  const imageStyles = useMemo(() => {
    if (!currentFeature) return DEFAULT_FEATURE.styles;
    return (
      FEATURES_IMAGE_TRANSFORMS[currentFeature]?.styles ||
      DEFAULT_FEATURE.styles
    );
  }, [currentFeature]);

  const imageAlt = useMemo(() => {
    if (!currentFeature) return DEFAULT_FEATURE.imageAlt;
    return (
      FEATURES_IMAGE_TRANSFORMS[currentFeature]?.imageAlt ||
      DEFAULT_FEATURE.imageAlt
    );
  }, [currentFeature]);

  return (
    <>
      <Seo
        title="Tableros de comando para bombas contra incendio · NFPA 20 e IRAM 3597 · MYXA"
        description="Tableros de comando para bombas principales y jockey: gabinete IP40, arranque directo hasta 15 HP o estrella-triángulo, comando a 24 V y planos con QR."
        path="/tableros"
      />
      <Navbar isInvert />
      <main className="flex flex-col items-center justify-center lg:px-10">
        <section
          id="tableros-detalles"
          className="relative flex min-h-screen w-screen flex-col items-center justify-center bg-black py-12 pt-32 text-white md:px-4"
        >
          <h1 className="pt-[1rem] text-center text-4xl lg:text-6xl">
            Tableros de Control
          </h1>
          <div className="mt-24 flex max-w-[1200px] flex-col items-center gap-12 lg:flex-row">
            <div className="flex-1 p-4 lg:w-1/2 lg:w-2/3">
              <h3 className="mb-4 text-lg font-bold">
                Diseño y fabricación de tableros
              </h3>
              <div ref={startSectionRef} className="h-4 w-full"></div>
              <p className="mb-2 max-w-4xl text-justify">
                En MYXA, diseñamos y fabricamos tableros de control que son el
                corazón de su sistema contra incendios. Cumpliendo rigurosamente
                con las normativas NFPA 20 e IRAM 3597, garantizamos la máxima
                seguridad y eficiencia operativa. Ofrecemos una amplia gama de
                soluciones estandarizadas, así como diseños personalizados para
                adaptarse perfectamente a las necesidades específicas de su
                proyecto, asegurando un rendimiento inigualable y una protección
                confiable.
              </p>
            </div>
          </div>
          <div className="flex max-w-[1200px] flex-col items-start lg:mt-24 lg:flex-row">
            <div
              className={cs(
                "max-w-sd left-[100%] top-[calc(50vh_-_20vh)] z-10 mr-[0.5rem] grid h-[50vh] w-[calc(100%_-_1rem)] items-center justify-items-center overflow-hidden rounded-md md:place-content-center md:bg-gray-900 lg:left-auto lg:top-24 lg:h-[550px] lg:w-[450px]",
                {
                  sticky: currentFeature || isScrolled,
                  "!top-[75dvh] !h-[calc(25dvh_-_0.5rem)] !items-end bg-gray-900 lg:!top-24 lg:!h-[550px] lg:!w-[450px]":
                    currentFeature,
                }
              )}
            >
              <Image
                alt={imageAlt}
                src={imageSrc}
                width={400}
                height={400}
                className="h-[35vh] w-[35vh] object-contain pb-6 transition duration-[300ms] md:mt-10 md:pb-0 lg:h-[500px] lg:w-[500px] lg:max-w-md"
                style={imageStyles}
              />
            </div>
            <div className="sticky max-w-md flex-1 p-4 pt-0">
              <ul className="mb-[500px] flex list-none flex-col gap-8 lg:mb-[800px]">
                {TABLERO_FEATURES.map((feature) => (
                  <TableroFeature
                    id={feature.id}
                    key={feature.id}
                    title={feature.title}
                    description={feature.description}
                    onView={setCurrentFeature}
                    currentFeature={currentFeature}
                  />
                ))}
                <div ref={endSectionRef} className="h-4 w-full"></div>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
