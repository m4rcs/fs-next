import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";

export default function Jobrad() {
  return (
    <>
      <Head>
        <title>JobRad - Fahrrad Strutt - Rodenbach</title>
      </Head>
      <div className="min-h-full">
        <Navbar />
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 font-logo">JobRad</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <p className="pt-2 pb-4 px-3">
              <Image width={500} height={145} src="/jobrad.png" className="mx-auto" alt="" />
            </p>
            <p className="pt-2 pb-4 px-3 text-justify">
              JobRad ist Marktführer im Dienstradleasing und bringt seit mehr als zehn Jahren Menschen aufs Rad. Als
              Mobilitätsdienstleister organisiert JobRad mit einer digitalen Portallösung unkompliziert und
              kostenneutral die Dienstradüberlassung zwischen Arbeitgebern, Mitarbeitern und Fahrrad-Fachhändlern.
            </p>
            <p className="pt-2 pb-4 px-3 text-justify">
              <iframe
                src="https://player.vimeo.com/video/385250211"
                allowFullScreen
                className="mx-auto w-96"
              ></iframe>
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
