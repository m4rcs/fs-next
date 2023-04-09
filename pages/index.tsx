import Content from "@/components/Content";

export default function Home() {
  return (
    <Content name="Willkommen">
      <h2 className="px-4 text-2xl font-bold text-teal-900">Neufahrräder</h2>
      <p className="px-3 pb-4 pt-2 text-justify">
        In unserem Fahrradladen finden Sie eine große Auswahl an Fahrrädern und Zubehör. Wir beraten Sie individuell
        und professionell und gehen auf Ihre Bedürfnisse und Wünsche ein. Unser wichtigstes Anliegen ist, dass Sie ein
        Fahrrad finden, das die optimale Passform und Ergonomie für Sie bietet. Sollten Sie sich dafür entscheiden, ein
        Fahrrad zu kaufen, richten wir es Ihnen natürlich ein und passen es Ihren Wünschen an.
      </p>
      <h2 className="px-4 text-2xl font-bold text-teal-900">Gebraucht Fahrräder</h2>
      <p className="px-3 pb-4 pt-2 text-justify">
        Sollten Sie sich für ein gebrauchtes Rad interessieren oder wollen Sie ihr aktuelles Rad verkaufen, zögern Sie
        nicht, uns zu kontaktieren. Wir vermitteln gerne gebrauchte Räder und rechnen Ihnen den Preis auf ihr neues Rad
        an.
      </p>
      <h2 className="px-4 text-2xl font-bold text-teal-900">Service</h2>
      <p className="px-3 pb-4 pt-2 text-justify">
        Haben Sie einen Platten? Geht ihre Schaltung nicht mehr? Kommen Sie zu uns. Wir reparieren Ihr Fahrrad in
        unserer eigenen Werkstatt. Durch unseren großen Lagerbestand an Zubehör und Ersatzteilen wird ihr Fahrrad im
        Handumdrehen durch unser Fachpersonal repariert.
      </p>
    </Content>
  );
}
