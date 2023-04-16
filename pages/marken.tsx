import Brand from "@/components/Brand";
import Content from "@/components/Content";
import { getBrands } from "@/lib/airtable";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";

export const getStaticProps: GetStaticProps<{ brands: Brand[] }> = async () => {
  const brands = await getBrands();

  if (brands.length === 0) return { notFound: true };
  return { props: { brands: brands } };
};

export default function Brands({ brands }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo description="Entdecken Sie die große Auswahl an renommierten Fahrradmarken in unserem Fahrradladen mit Werkstatt. Unsere Expertinnen und Experten beraten Sie gerne und helfen Ihnen bei der Auswahl des richtigen Fahrrads für Ihre individuellen Bedürfnisse und Vorlieben." />
      <Content name="Marken">
        <p>
          Wir bieten eine große Auswahl an renommierten und bewährten Fahrradmarken an, die sich durch Qualität,
          Innovation und Design auszeichnen. Wir führen eine Vielzahl von Marken, die jedem Budget und jedem Fahrradtyp
          gerecht werden. Unsere Expertinnen und Experten beraten Sie gerne und helfen Ihnen bei der Auswahl des
          richtigen Fahrrads für Ihre individuellen Bedürfnisse und Vorlieben. <Link href="/anfahrt">Besuchen</Link>{" "}
          Sie uns und entdecken Sie die verschiedenen Marken, die wir anbieten. Wir freuen uns darauf, Ihnen zu helfen,
          das perfekte Fahrrad zu finden!
        </p>
        <div className="flex flex-wrap items-center justify-center">
          {brands.map((brand) => (
            <Brand
              id={brand.id}
              key={brand.id}
              logo={brand.logo}
              logoHeight={brand.logoHeight}
              logoWidth={brand.logoWidth}
              name={brand.name}
              url={brand.url}
            />
          ))}
        </div>
      </Content>
    </>
  );
}
