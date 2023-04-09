import Navbar from "@/components/Navbar";
import Head from "next/head";

export interface HeaderProps {
  name: string;
}

export default function Header(props: HeaderProps) {
  return (
    <>
      <Head>
        <title>{`${props.name} - Fahrrad Strutt - Rodenbach`}</title>
      </Head>
      <Navbar />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="font-logo text-3xl font-bold tracking-tight text-gray-900">{props.name}</h1>
        </div>
      </header>
    </>
  );
}
