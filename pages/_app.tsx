import "@/styles/globals.css";
import "@fontsource/lato/index.css";
import "@fontsource/rubik/variable.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
