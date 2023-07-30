import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Montec</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-6 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Mon<span className="text-[hsl(280,100%,70%)]">Tec</span>
          </h1>
          <span className="text-xl font-light tracking-tight text-white">
            Montaje técnico
          </span>
        </div>
      </main>
    </>
  );
}
