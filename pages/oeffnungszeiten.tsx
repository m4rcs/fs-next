import Content from "@/components/Content";
import OpenInfo from "@/components/OpenInfo";
import { getOpenInfo } from "@/lib/airtable";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";

export const getStaticProps: GetStaticProps<{ infos: OpenInfo[] }> = async () => {
  const infos = await getOpenInfo();

  return { props: { infos: infos } };
};

export default function Opening({ infos }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo />
      <Content name="Öffnungszeiten">
        <div className="mx-3">
          {infos.length > 0 ? (
            <div className="p-5 text-center text-xl font-bold text-red-700">
              {infos.map((info) => (
                <OpenInfo key={info.id} id={info.id} info={info.info} />
              ))}
            </div>
          ) : (
            ""
          )}

          <table className="mx-auto w-full table-auto text-xl lg:w-auto">
            <tbody>
              <tr>
                <th className="w-1/5 text-left text-lime-900 lg:w-40">
                  Mo<span className="hidden md:inline-block">ntag</span>
                </th>
                <td>9:00 - 12:30</td>
                <td>14:30 - 18:00</td>
              </tr>
              <tr>
                <th className="w-1/5 text-left text-lime-900 lg:w-40">
                  Di<span className="hidden md:inline-block">enstag</span>
                </th>
                <td>9:00 - 12:30</td>
                <td>14:30 - 18:00</td>
              </tr>
              <tr>
                <th className="w-1/5 text-left text-lime-900 lg:w-40">
                  Mi<span className="hidden md:inline-block">ttwoch</span>
                </th>
                <td colSpan={2} className="text-center">
                  Geschlossen
                </td>
              </tr>
              <tr>
                <th className="w-1/5 text-left text-lime-900 lg:w-40">
                  Do<span className="hidden md:inline-block">nnerstag</span>
                </th>
                <td>9:00 - 12:30</td>
                <td>14:30 - 18:00</td>
              </tr>
              <tr>
                <th className="w-1/5 text-left text-lime-900 lg:w-40">
                  Fr<span className="hidden md:inline-block">eitag</span>
                </th>
                <td>9:00 - 12:30</td>
                <td>14:30 - 18:00</td>
              </tr>
              <tr>
                <th className="w-1/5 text-left text-lime-900 lg:w-40">
                  Sa<span className="hidden md:inline-block">mstag</span>
                </th>
                <td>9:00 - 12:30</td>
                <td className="text-center">Geschlossen</td>
              </tr>
              <tr className="border-0">
                <th className="w-1/5 text-left text-lime-900 lg:w-40">
                  So<span className="hidden md:inline-block">nntag</span>
                </th>
                <td colSpan={2} className="text-center">
                  Geschlossen
                </td>
              </tr>
            </tbody>
          </table>
          <p className="p-4 text-center">
            Wir stehen Ihnen während dieser Zeiten gerne zur Verfügung und freuen uns auf Ihren Besuch!
          </p>
        </div>
      </Content>
    </>
  );
}
