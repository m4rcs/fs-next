import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { NextSeo } from "next-seo";

export default function FourOhFour() {
  return (
    <div className="flex h-full flex-col">
      <NextSeo title="Seite nicht gefunden" noindex={true} nofollow={true} />
      <Navbar />
      <main className="grid grow place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-teal-600">404</p>
          <h1 className="mt-4 text-3xl tracking-tight text-gray-900 sm:text-5xl">Seite nicht gefunden</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Leider konnten wir die von Ihnen gesuchte Seite nicht finden.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Zurück
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
