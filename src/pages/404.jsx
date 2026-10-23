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
        <section className="relative flex min-h-screen w-screen flex-col items-center justify-center gap-6 bg-ink py-12 pt-24 text-center text-white">
          <div aria-hidden="true" className="hazard h-4 w-40 text-red-drtb" />
          <h1 className="heading-sign text-6xl md:text-8xl">Página no encontrada</h1>
          <p className="max-w-md text-pretty">
            La página que buscás no existe o fue movida.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              className="btn-primary"
              href="/"
            >
              Volver al inicio
            </Link>
            <Link
              className="btn-outline text-white hover:bg-white hover:text-ink"
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
