import Content from "@/components/Content";
import Image from "next/image";

export default function Bikeleasing() {
  return (
    <Content name="Bikeleasing" showHeader={false}>
      <h1 className="hidden">Bikeleasing</h1>
      <p>
        <Image width={800} height={167} src="/bikeleasing.png" className="mx-auto" alt="" />
      </p>
      <p>
        Dienstradeln erlebt Boom wie nie Dienstfahrräder als Arbeitgeberleistung – an diesem Trend kommt im Moment kaum
        ein Unternehmen mehr vorbei, das mit der Zeit gehen möchte.
      </p>
      <div className="px-4 text-xl font-bold text-teal-900">Einfaches Handling, Vorteile für alle</div>
      <p>
        Dienstrad-Leasing ist so einfach wie wirkungsvoll: Leasingnehmer ist der Arbeitgeber, die Leasingrate trägt der
        Arbeitnehmer durch den Einbehalt eines Teils des monatlichen Bruttogehalts in Höhe der Leasingrate. Die
        Mitarbeiter kommen zu attraktiven Raten und mit einer Einsparung von bis zu 40 Prozent gegenüber Kauf zu ihrem
        Traumfahrrad, das sie auch privat nutzen können. Die Auswahl trifft dabei jeder Mitarbeiter persönlich beim
        regionalen Fahrradhändler. Schon ab nur einem Dienstrad ist Leasing möglich, bei einer Preisspanne von 649,00
        bis 15.000,00 Euro pro Wunsch-Bike. Die Bikeleasing-Service GmbH ist dafür zentraler Ansprechpartner und
        positioniert sich mit über 10.000 Kooperationspartnern und einem Full-Service inklusive Versicherung als
        erfahrener Anbieter in diesem Segment deutschlandweit. Mehr Informationen sowie einen Vorteilsrechner unter{" "}
        <a target="_blank" href="http://www.bikeleasing.de">
          www.bikeleasing.de
        </a>
        .
      </p>
    </Content>
  );
}
