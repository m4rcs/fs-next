import Content from "@/components/Content";
import { faContactBook, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextSeo } from "next-seo";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <NextSeo />
      <Content name="Kontakt">
        <div className="text-center">
          <div className="my-5">
            <p>
              Wir sind jederzeit gerne für Sie da! Auf unserer Kontaktseite finden Sie alle Informationen, die Sie
              benötigen, um mit uns in Verbindung zu treten. Ob per Telefon, E-Mail oder persönlich in unserem{" "}
              <Link href="/anfahrt">Laden</Link> - wir stehen Ihnen gerne zur Verfügung. Zögern Sie nicht, uns bei
              Fragen, Anregungen oder Anliegen zu kontaktieren. Wir freuen uns auf Ihre Nachricht!
            </p>
            <a target="_blank" href="tel:+49618450190">
              <button
                type="button"
                className="rounded-lg bg-teal-500 px-6 py-3 align-middle text-lg font-bold text-white"
              >
                <FontAwesomeIcon icon={faPhone} /> 06184/50190
              </button>
            </a>
          </div>
          <div className="my-5">
            <a target="_blank" href="mailto:kontakt@fahrrad-strutt.de">
              <button
                type="button"
                className="rounded-lg bg-teal-700 px-6 py-3 align-middle text-lg font-bold text-white"
              >
                <FontAwesomeIcon icon={faEnvelope} /> kontakt@fahrrad-strutt.de
              </button>
            </a>
          </div>
          <div className="my-5">
            <h2 className="text-2xl text-teal-900">
              <FontAwesomeIcon icon={faContactBook} /> Adresse
            </h2>
            <p className="inline-block text-lg">
              Gartenstraße 4<br />
              63517 Rodenbach
            </p>
          </div>
        </div>
      </Content>
    </>
  );
}
