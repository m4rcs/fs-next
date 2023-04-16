import Image from "next/image";
import "yet-another-react-lightbox/styles.css";

import { useState } from "react";
import Lightbox, { RenderSlideProps } from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

function NextJsImage({ slide }: RenderSlideProps) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-teal-500">{slide.alt}</div>
      <Image src={slide.src} width={slide.width} height={slide.height} alt={slide.alt ?? ""} />
    </div>
  );
}

// TODO: Add multiple images?

export default function Offer(offer: Offer) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="m-2 flex w-[18rem] flex-col rounded-lg bg-white p-4">
      {offer.image ? (
        <>
          <Image
            className="rounded-t-lg pb-2"
            src={offer.image}
            alt=""
            width={offer.imageWidth}
            height={offer.imageHeight}
            onClick={() => setOpen(true)}
          />
          <Lightbox
            plugins={[Zoom]}
            open={open}
            close={() => setOpen(false)}
            slides={[{ src: offer.image, height: offer.imageHeight, width: offer.imageWidth, alt: offer.name }]}
            render={{ buttonPrev: () => null, buttonNext: () => null, slide: NextJsImage }}
          />
        </>
      ) : (
        ""
      )}
      <h2 className="text-xl text-teal-900">{offer.name}</h2>
      <p className="grow text-center text-base">{offer.description}</p>
      <div className="text-right">
        <button type="button" className="rounded bg-teal-900 px-6 py-2 align-middle text-lg font-bold text-white">
          {offer.price.toLocaleString("de-DE", { minimumFractionDigits: 0 })} Euro
        </button>
      </div>
    </div>
  );
}
