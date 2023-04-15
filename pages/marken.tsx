import Content from "@/components/Content";
import { AIRTABLE_BASE, AIRTABLE_BRANDS, AIRTABLE_TOKEN } from "@/const";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";

type Brand = {
  name: string;
  url: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
};

export const getStaticProps: GetStaticProps<{ brands: Brand[] }> = async () => {
  try {
    const res = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_BRANDS}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      },
    });

    const data = await res.json();

    if ("error" in data) {
      console.error(`${data["error"]["type"]}: ${data["error"]["message"]}`);
      return { notFound: true };
    }

    let brands: Brand[] = [];

    for (const brand of data["records"]) {
      brands.push({
        name: brand["fields"]["Name"],
        url: brand["fields"]["Link"],
        logo: brand["fields"]["Logo"][0]["url"],
        logoWidth: brand["fields"]["Logo"][0]["width"],
        logoHeight: brand["fields"]["Logo"][0]["height"],
      });
    }

    return { props: { brands: brands } };
  } catch (_ex) {
    const ex = _ex as TypeError;
    console.error(`${ex.name}: ${ex.message}`);
    return { notFound: true };
  }
};

export default function Brands({ brands }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Content name="Marken">
      <div className="flex flex-wrap items-center justify-center">
        {brands.map((brand) => (
          <div key={brand.name} className="m-4">
            <a href={brand.url} target="_blank">
              <Image
                className="h-auto max-h-36 w-auto max-w-xs"
                src={brand.logo}
                alt={brand.name}
                width={brand.logoWidth}
                height={brand.logoHeight}
              />
            </a>
          </div>
        ))}
      </div>
    </Content>
  );
}
