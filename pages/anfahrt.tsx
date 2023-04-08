import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Directions() {
  return (
    <>
      <Head>
        <title>Anfahrt - Fahrrad Strutt - Rodenbach</title>
      </Head>
      <div className="min-h-full">
        <Navbar />
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 font-logo">Anfahrt</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </div>
    </>
  );
}
