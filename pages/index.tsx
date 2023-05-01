import Content from "@/components/Content";
import { NextSeo } from "next-seo";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NextSeo description="In unserem Fahrradladen mit Werkstatt bieten wir eine breite Auswahl an Fahrrädern, qualifizierte Reparatur- und Wartungsdienstleistungen an." />
      <Content name="Willkommen">
        <p>
          Herzlich willkommen auf unserer Webseite! Wir sind ein Fahrradladen mit{" "}
          <span className="font-bold text-lime-900">Werkstatt</span> und freuen uns, dass Sie den Weg zu uns gefunden
          haben.
        </p>

        <p>
          Unser Ziel ist es, Ihnen das beste Fahrraderlebnis zu bieten. Wir möchten Sie auf Ihrem Weg unterstützen, ob
          Sie ein neues Fahrrad kaufen möchten oder eine Reparatur benötigen. Unsere Mitarbeiterinnen und Mitarbeiter
          helfen Ihnen gerne weiter.
        </p>
        <p>
          In unserem Fahrradladen finden Sie eine breite Auswahl an Fahrrädern, von{" "}
          <span className="font-bold text-lime-900">Mountainbikes</span> bis hin zu{" "}
          <span className="font-bold text-lime-900">Rennrädern</span>,{" "}
          <span className="font-bold text-lime-900">E-Bikes</span> und{" "}
          <span className="font-bold text-lime-900">Kinderrädern</span>. Wir arbeiten ausschließlich mit renommierten
          Marken und Zulieferern zusammen, um Ihnen Qualität und Langlebigkeit zu garantieren. Unser Team von
          Fachleuten steht Ihnen zur Verfügung, um alle Arten von Reparaturen und Wartungsarbeiten durchzuführen.
        </p>
        <p>
          Als Fahrradladen mit dem Ziel, Ihnen das beste Fahrraderlebnis zu bieten, haben wir auch die Möglichkeit des{" "}
          <Link href="./jobrad" className="font-bold text-lime-900">
            JobRads
          </Link>{" "}
          und{" "}
          <Link href="./bikeleasing" className="font-bold text-lime-900">
            Bikeleasings
          </Link>{" "}
          im Angebot. Mit{" "}
          <Link href="./jobrad" className="font-bold text-lime-900">
            JobRad
          </Link>{" "}
          haben Sie die Möglichkeit, ein hochwertiges Fahrrad zu attraktiven Konditionen zu leasen und es für den
          täglichen Arbeitsweg, Freizeitaktivitäten oder Einkäufe zu nutzen. Das Beste daran ist, dass Sie dabei auch
          noch Steuern sparen können. Unternehmen haben mit dem{" "}
          <Link href="./bikeleasing" className="font-bold text-lime-900">
            Bikeleasing
          </Link>{" "}
          eine attraktive Möglichkeit, ihre Mitarbeiterinnen und Mitarbeiter zu motivieren und für eine gesündere
          Arbeitsumgebung zu sorgen. Dabei können Leasingraten als Betriebsausgaben absetzbar sein. Gerne beraten wir
          Sie ausführlich und begleiten Sie bei der Beantragung und Auswahl des passenden Fahrrads.
        </p>
      </Content>
    </>
  );
}
