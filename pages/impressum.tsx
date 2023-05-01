import Content from "@/components/Content";

export default function Impress() {
  return (
    <Content name="Impressum">
      <div className="px-4 text-lg font-bold text-lime-900">Angaben gemäß § 5 TMG</div>
      <p>
        Fahrrad-Strutt GbR
        <br />
        Gartenstraße 4<br />
        63517 Rodenbach
      </p>
      <div className="px-4 font-bold text-lime-900">Vertreten durch die Gesellschafter:</div>
      <p>Rüdiger und Eberhard Strutt</p>
      <div className="px-4 text-lg font-bold text-lime-900">Kontakt</div>
      <p>
        Telefon: <a href="tel:+49618450190">06184 50190</a>
        <br />
        Telefax: <a href="fax:+4961849568420">06184 9568420</a>
        <br />
        E-Mail: <a href="mailto:kontakt@fahrrad-strutt.de">kontakt@fahrrad-strutt.de</a>
      </p>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
        teilzunehmen.
      </p>
      <p className="text-sm">
        Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
      </p>
    </Content>
  );
}
