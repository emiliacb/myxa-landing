import Link from "next/link";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Seo from "../components/seo";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Página no encontrada · MYXA"
        description="La página que buscás no existe o fue movida. Volvé al inicio o contactanos para ayudarte."
        path="/404"
      />
      <Navbar isInvert />
      <main className="flex flex-col items-center justify-center px-4 md:px-10">
        <section className="relative flex min-h-screen w-screen flex-col items-center justify-center gap-6 bg-black py-12 pt-24 text-center text-white">
          <h1 className="text-4xl md:text-6xl">Página no encontrada</h1>
          <p className="max-w-md text-pretty">
            La página que buscás no existe o fue movida.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              className="btn-primary flex w-fit items-center rounded-md border px-6 pb-[8px] pt-2 text-white hover:bg-red-drtb hover:text-white"
              href="/"
            >
              Volver al inicio
            </Link>
            <Link
              className="flex w-fit items-center rounded-md border border-white px-5 pb-[4px] pt-1 text-white hover:bg-white hover:text-black"
              href="/contacto"
            >
              Contactanos
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
