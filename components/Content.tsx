import { PropsWithChildren } from "react";

import Footer from "@/components/Footer";
import Header, { HeaderProps } from "@/components/Header";

export default function Content(props: PropsWithChildren<HeaderProps>) {
  return (
    <div className="flex h-full flex-col">
      <Header name={props.name} showHeader={props.showHeader} />
      <main className="grow">
        <div className="mx-auto h-full max-w-7xl py-6 sm:px-6 lg:px-8">{props.children}</div>
      </main>
      <Footer />
    </div>
  );
}
