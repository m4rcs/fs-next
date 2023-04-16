import "@/styles/globals.css";
import "@fontsource/lato/index.css";
import "@fontsource/rubik/variable.css";
import { DefaultSeo, LocalBusinessJsonLd } from "next-seo";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LocalBusinessJsonLd
        id="https://www.fahrrad-strutt.de"
        type="LocalBusiness"
        name="Fahrrad Strutt"
        description="In unserem Fahrradladen mit Werkstatt bieten wir eine breite Auswahl an Fahrrädern, qualifizierte Reparatur- und Wartungsdienstleistungen sowie eine Ankaufsoption für gebrauchte Fahrräder an."
        url="https://www.fahrrad-strutt.de"
        telephone="+49 6184 50190"
        address={{
          "@type": "PostalAddress",
          streetAddress: "Gartenstraße 4",
          addressLocality: "Rodenbach",
          postalCode: "63517",
          addressCountry: "DE",
        }}
        openingHours={[
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "12:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
            opens: "14:30",
            closes: "18:00",
          },
        ]}
        paymentAccepted={["Cash", "Credit Card", "Debit Card"]}
        geo={{
          latitude: "50.144316189101914",
          longitude: "9.020686542329706",
        }}
      />
      <DefaultSeo
        titleTemplate="%s - Fahrrad Strutt - Rodenbach"
        defaultTitle="Fahrrad Strutt - Rodenbach"
        openGraph={{
          type: "website",
          locale: "de_DE",
          url: "https://www.fahrrad-strutt.de/",
          siteName: "Fahrrad Strutt",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
