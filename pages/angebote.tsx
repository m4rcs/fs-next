import Content from "@/components/Content";
import Offer from "@/components/Offer";
import { getOffers } from "@/lib/airtable";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps: GetStaticProps<{ offers: Offer[] }> = async () => {
  const offers = await getOffers();

  return { props: { offers: offers } };
};

export default function Offers({ offers }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Content name="Angebote">
      <div className="flex flex-row flex-wrap justify-center">
        {offers.length > 0 ? (
          offers.map((offer) => (
            <Offer
              key={offer.id}
              id={offer.id}
              description={offer.description}
              name={offer.name}
              price={offer.price}
              image={offer.image}
              imageHeight={offer.imageHeight}
              imageWidth={offer.imageWidth}
            />
          ))
        ) : (
          <h2 className="text-2xl">Keine Angebote</h2>
        )}
      </div>
    </Content>
  );
}
