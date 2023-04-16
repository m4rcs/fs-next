import Brand from "@/components/Brand";
import Content from "@/components/Content";
import { getBrands } from "@/lib/airtable";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps: GetStaticProps<{ brands: Brand[] }> = async () => {
  const brands = await getBrands();

  if (brands.length === 0) return { notFound: true };
  return { props: { brands: brands } };
};

export default function Brands({ brands }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Content name="Marken">
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
  );
}
