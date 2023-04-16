import Navbar from "@/components/Navbar";
import { NextSeo } from "next-seo";

export interface HeaderProps {
  name: string;
  showHeader?: boolean;
}

export default function Header(props: HeaderProps) {
  const showHeader = props.showHeader ?? true;
  return (
    <>
      <NextSeo title={props.name} openGraph={{ title: props.name }} />
      <Navbar />
      {showHeader && (
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="font-logo text-3xl tracking-tight text-gray-900">{props.name}</h1>
          </div>
        </header>
      )}
    </>
  );
}
