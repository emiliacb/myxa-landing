import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Seo from "../components/seo";
import { SERVICIOS } from "../utils/constants";
import Image from "next/image";
import Card from "../components/card";

export default function Servicios() {
  return (
    <>
      <Seo
        title="Instalación y mantenimiento de sistemas contra incendio · MYXA"
        description="Instalación, puesta en marcha, capacitación y mantenimiento de sistemas contra incendio, con informe detallado de puesta en marcha. Buenos Aires."
        path="/servicios"
      />
      <Navbar />
      <main className="flex flex-col items-center justify-center px-4 md:px-10 bg-white">
        <h1 className="pt-[9rem] text-4xl md:text-6xl">Servicios</h1>
        {SERVICIOS.map((servicio) => (
          <section
            key={servicio.id}
            id={servicio.id}
            className="flex w-full max-w-[1200px] flex-col items-center justify-center gap-16 py-16"
          >
            <Card>
              <div className="items-center">
                <div className="flex w-full flex-col justify-between md:gap-10 lg:flex-row lg:gap-16">
                  <div className="flex-1 p-4 md:w-2/3">
                    <h3 className="mb-4 text-2xl font-bold">
                      {servicio.title}
                    </h3>
                    <p className="text-justify text-lg">
                      {servicio.full_description}
                    </p>
                  </div>
                  <Image
                    alt={servicio.title}
                    src={servicio.image}
                    width={300}
                    height={200}
                    className="m-auto rounded-lg"
                  />
                </div>
              </div>
            </Card>
          </section>
        ))}
      </main>
      <Footer dark={false} />
    </>
  );
}
