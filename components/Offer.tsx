import Image from "next/image";

export default function Offer(offer: Offer) {
  return (
    <div className="m-2 flex w-[18rem] flex-col rounded-lg bg-white p-4">
      {offer.image ? (
        <Image className="rounded-t-lg pb-2" src={offer.image} alt="" width={offer.imageWidth} height={offer.imageHeight} />
      ) : (
        ""
      )}
      <h2 className="text-xl text-teal-900">{offer.name}</h2>
      <p className="text-center text-base grow">{offer.description}</p>
      <div className="text-right">
        <button type="button" className="rounded bg-teal-900 px-6 py-2 align-middle text-lg font-bold text-white">
          {offer.price.toLocaleString("de-DE", { minimumFractionDigits: 0 })} Euro
        </button>
      </div>
    </div>
  );
}
