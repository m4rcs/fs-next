import { AIRTABLE_BASE, AIRTABLE_BRANDS, AIRTABLE_OFFERS, AIRTABLE_TOKEN } from "@/const";
import * as log from "next/dist/build/output/log";

async function request(url: string, auth: string): Promise<Array<any> | undefined> {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: auth,
      },
    });

    const data = await res.json();

    if ("error" in data) {
      log.error(`${data["error.type"]}: ${data["error.message"]}`);
      return undefined;
    }

    if (!("records" in data)) {
      return undefined;
    }

    return data["records"];
  } catch (_ex) {
    const ex = _ex as TypeError;
    log.error(`${ex.name}: ${ex.message}`);
    return undefined;
  }
}

export async function getBrands(): Promise<Brand[]> {
  const records = await request(
    `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_BRANDS}`,
    `Bearer ${AIRTABLE_TOKEN}`
  );

  if (records === undefined || records.length === 0) {
    return [];
  }

  const brands: Brand[] = [];

  for (const r of records) {
    if ("id" in r && "fields" in r && "Name" in r.fields && "Logo" in r.fields && r.fields.Logo.length > 0) {
      const brand: Brand = {
        id: r.id,
        name: r.fields.Name,
        logo: r.fields.Logo[0].url,
        logoHeight: r.fields.Logo[0].height,
        logoWidth: r.fields.Logo[0].width,
      };

      if ("Link" in r.fields) {
        brand.url = r.fields.Link;
      }

      brands.push(brand);
    }
  }

  return brands;
}

export async function getOffers(): Promise<Offer[]> {
  const records = await request(
    `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_OFFERS}`,
    `Bearer ${AIRTABLE_TOKEN}`
  );

  if (records === undefined || records.length === 0) {
    return [];
  }

  const offers: Offer[] = [];

  for (const r of records) {
    if ("id" in r && "fields" in r && "Name" in r.fields && "Beschreibung" in r.fields && "Preis" in r.fields) {
      if ("Gültig bis" in r.fields) {
        const d = Date.parse(r.fields["Gültig bis"]);
        if (d < Date.now()) {
          log.warn(`Skipping offer [name=${r["fields"]["Name"]}, valid_to=${r["fields"]["Gültig bis"]}]`);
          continue;
        }
      }

      const offer: Offer = {
        id: r.id,
        description: r.fields.Beschreibung,
        name: r.fields.Name,
        price: r.fields.Preis,
      };

      if ("Bild" in r.fields && r.fields.Bild.length > 0) {
        Object.assign(offer, {
          image: r.fields.Bild[0].url,
          imageHeight: r.fields.Bild[0].height,
          imageWidth: r.fields.Bild[0].width,
        });
      }

      offers.push(offer);
    }
  }

  return offers;
}
