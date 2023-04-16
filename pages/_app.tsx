import "@/styles/globals.css";
import "@fontsource/lato/index.css";
import "@fontsource/rubik/variable.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
