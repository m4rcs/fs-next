import Content from "@/components/Content";
import Image from "next/image";

export default function Jobrad() {
  return (
    <Content name="Jobrad">
      <p className="px-3 pb-4 pt-2">
        <Image width={500} height={145} src="/jobrad.png" className="mx-auto" alt="" />
      </p>
      <p className="px-3 pb-4 pt-2 text-justify">
        JobRad ist Marktführer im Dienstradleasing und bringt seit mehr als zehn Jahren Menschen aufs Rad. Als
        Mobilitätsdienstleister organisiert JobRad mit einer digitalen Portallösung unkompliziert und kostenneutral die
        Dienstradüberlassung zwischen Arbeitgebern, Mitarbeitern und Fahrrad-Fachhändlern.
      </p>
      <p className="px-3 pb-4 pt-2 text-justify">
        <iframe src="https://player.vimeo.com/video/385250211" allowFullScreen className="mx-auto w-96"></iframe>
      </p>
    </Content>
  );
}
