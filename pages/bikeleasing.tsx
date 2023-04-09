import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";

export default function Bikeleasing() {
  return (
    <>
      <Head>
        <title>Bikeleasing - Fahrrad Strutt - Rodenbach</title>
      </Head>
      <div className="min-h-full">
        <Navbar />
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="font-logo text-3xl font-bold tracking-tight text-gray-900">Bikeleasing</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <p className="px-3 pb-4 pt-2">
              <Image width={800} height={167} src="/bikeleasing.png" className="mx-auto" alt="" />
            </p>
            <p className="px-3 pb-4 pt-2 text-justify">
              Dienstradeln erlebt Boom wie nie Dienstfahrräder als Arbeitgeberleistung – an diesem Trend kommt im
              Moment kaum ein Unternehmen mehr vorbei, das mit der Zeit gehen möchte.
            </p>
            <h3 className="px-4 text-xl font-bold text-teal-900">Einfaches Handling, Vorteile für alle</h3>
            <p className="px-3 pb-4 pt-2 text-justify">
              Dienstrad-Leasing ist so einfach wie wirkungsvoll: Leasingnehmer ist der Arbeitgeber, die Leasingrate
              trägt der Arbeitnehmer durch den Einbehalt eines Teils des monatlichen Bruttogehalts in Höhe der
              Leasingrate. Die Mitarbeiter kommen zu attraktiven Raten und mit einer Einsparung von bis zu 40 Prozent
              gegenüber Kauf zu ihrem Traumfahrrad, das sie auch privat nutzen können. Die Auswahl trifft dabei jeder
              Mitarbeiter persönlich beim regionalen Fahrradhändler. Schon ab nur einem Dienstrad ist Leasing möglich,
              bei einer Preisspanne von 649,00 bis 15.000,00 Euro pro Wunsch-Bike. Die Bikeleasing-Service GmbH ist
              dafür zentraler Ansprechpartner und positioniert sich mit über 10.000 Kooperationspartnern und einem
              Full-Service inklusive Versicherung als erfahrener Anbieter in diesem Segment deutschlandweit. Mehr
              Informationen sowie einen Vorteilsrechner unter{" "}
              <a className="text-teal-900 hover:text-teal-500" target="_blank" href="http://www.bikeleasing.de">
                www.bikeleasing.de
              </a>
              .
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
