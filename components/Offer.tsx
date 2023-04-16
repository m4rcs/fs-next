import Image from "next/image";

export default function Offer(offer: Offer) {
  return (
    <div className="m-2 inline-block max-w-[18rem] rounded-lg bg-white">
      {offer.image ? (
        <Image
          className="rounded-t-lg p-4"
          src={offer.image}
          alt=""
          width={offer.imageWidth}
          height={offer.imageHeight}
        />
      ) : (
        ""
      )}
      <div className="px-3 pb-3">
        <h2 className="text-xl text-teal-900">{offer.name}</h2>
        <p className="text-center  text-base">{offer.description}</p>
        <button
          type="button"
          className="float-right mb-3 inline-block rounded bg-teal-900 px-6 py-2 align-middle text-lg font-bold leading-tight text-white"
        >
          {offer.price.toLocaleString("de-DE", { minimumFractionDigits: 0 })} Euro
        </button>
      </div>
    </div>
  );
}
