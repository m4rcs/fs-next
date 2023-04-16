import Content from "@/components/Content";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import Image from "next/image";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function Jobrad() {
  return (
    <>
      <NextSeo description="JobRad ist Marktführer im Dienstradleasing und bringt seit mehr als zehn Jahren Menschen aufs Rad. Als Mobilitätsdienstleister organisiert JobRad mit einer digitalen Portallösung unkompliziert und kostenneutral die Dienstradüberlassung zwischen Arbeitgebern, Mitarbeitern und Fahrrad-Fachhändlern." />
      <Content name="JobRad" showHeader={false}>
        <h1 className="hidden">JobRad</h1>
        <p>
          <Image width={500} height={149} src="/jobrad.png" className="mx-auto" alt="" />
        </p>
        <p>
          JobRad ist Marktführer im Dienstradleasing und bringt seit mehr als zehn Jahren Menschen aufs Rad. Als
          Mobilitätsdienstleister organisiert JobRad mit einer digitalen Portallösung unkompliziert und kostenneutral
          die Dienstradüberlassung zwischen Arbeitgebern, Mitarbeitern und Fahrrad-Fachhändlern.
        </p>
        <span className="mx-3 mb-4 mt-2 block">
          <ReactPlayer url="https://player.vimeo.com/video/385250211" controls className="mx-auto" width="100%" />
        </span>
      </Content>
    </>
  );
}
