import { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import cs from "classnames";

import Navbar from "../components/navbar";
import { useSectionInView } from "../hooks/useSectionInView";
import { isTouchDevice } from "../utils/device";
import {
  TABLERO_FEATURES,
  DEFAULT_IMAGE_IDX,
  DEFAULT_FEATURE,
  FEATURES_IMAGE_TRANSFORMS,
  TABLEROS_IMAGES,
} from "../utils/constants";

export function TableroFeature({ id, title, description, onView, currentFeature }) {
  const [featureRef, isFeatureInView] = useSectionInView({
    offset: ["start 280px", "end 230px"],
  });

  const isSelected = currentFeature === id;
  
  function handleClick() {
    if (isTouchDevice()) return;
    onView(id)
  }

  useEffect(() => {
    if (isFeatureInView) onView(id);
  }, [isFeatureInView]);

  return (
    <li
      ref={featureRef}
      onClick={handleClick}
      className={cs(
        "cursor-pointer rounded-lg px-8 py-6 text-white opacity-25 md:opacity-100 transition duration-[300ms] md:bg-black select-none border border-transparent md:hover:border-white",
        {
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
  const [startSectionRef, isStartSectionInView] = useSectionInView();
  const [currentFeature, setCurrentFeature] = useState(null);

  const currentImageIdx = currentFeature
    ? FEATURES_IMAGE_TRANSFORMS[currentFeature]?.image
    : DEFAULT_IMAGE_IDX;
  const imageSrc = TABLEROS_IMAGES[currentImageIdx];

  useEffect(() => {
    isStartSectionInView && setCurrentFeature(null);
  }, [isStartSectionInView]);

  const imageStyles = useMemo(() => {
    if (!currentFeature) return DEFAULT_FEATURE.styles;
    return (
      FEATURES_IMAGE_TRANSFORMS[currentFeature]?.styles ||
      DEFAULT_FEATURE.styles
    );
  }, [currentFeature]);

  return (
    <>
      <Head>
        <title>MYXA - Tableros de Control</title>
        <meta
          name="description"
          content="Detalles técnicos y características de los tableros de control para sistemas contra incendio de MYXA, cumpliendo con NFPA 20 e IRAM 3597."
        />
      </Head>
      <Navbar isInvert />
      <main className="flex flex-col items-center justify-center lg:px-10">
        <section
          id="tableros-detalles"
          className="relative flex min-h-screen w-screen flex-col items-center justify-center bg-black py-12 pt-32 text-white md:px-4"
        >
          <h1
            className="pt-[1rem] text-center text-4xl lg:text-6xl"
            ref={startSectionRef}
          >
            Tableros de Control
          </h1>
          <div className="mt-24 flex max-w-[1200px] flex-col items-center gap-12 lg:flex-row">
            <div className="flex-1 p-4 lg:w-1/2 lg:w-2/3">
              <h3 className="mb-4 text-lg font-bold">
                Diseño y fabricación de tableros
              </h3>
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
                "z-10 max-w-sd sticky left-[100%] top-[calc(50vh_-_20vh)] grid h-[40vh] w-full items-center justify-items-center overflow-hidden rounded-md md:place-content-center md:bg-gray-900 lg:left-auto lg:top-24 lg:h-[550px] lg:w-[450px]",
                {
                  "bg-gray-900 !items-end !top-[75svh] !h-[25svh] transition-all duration-200": currentFeature,
                }
              )}
            >
              <Image
                alt="Picture of the author"
                src={imageSrc}
                width={400}
                height={400}
                className="h-[35vh] w-[35vh] pb-6 md:pb-0 md:mt-10 object-contain transition duration-[300ms] lg:h-[500px] lg:w-[500px] lg:max-w-md"
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
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-black bg-black px-4 py-8 text-neutral-100">
        <div className="m-auto flex w-full flex-col items-center justify-between text-sm lg:flex-row">
          <div className="flex w-full flex-col justify-between gap-4 lg:flex-row lg:items-center  ">
            <nav className="mb-4 lg:mb-0">
              <ul className="flex flex-row flex-wrap justify-center gap-4 lg:items-center lg:space-x-4">
                <li>
                  <a href="/#nosotros" className="hover:underline">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="/tableros" className="hover:underline">
                    Tableros
                  </a>
                </li>
                <li>
                  <a href="/presurizacion" className="hover:underline">
                    Presurización
                  </a>
                </li>
                <li>
                  <a href="/servicios" className="hover:underline">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="/contacto" className="hover:underline">
                    Contacto
                  </a>
                </li>
              </ul>
            </nav>
            <div className="mb-4 w-fit text-center text-xs lg:mb-0 lg:ml-8 lg:text-left">
              <p>
                © {new Date().getFullYear()} MYXA - Todos los derechos
                reservados.
              </p>
              <p className="mt-2">
                Dr. Enrique Finochietto 5345, José C. Paz, Buenos Aires
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
