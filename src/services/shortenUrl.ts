import { Settings } from "../types";
import { store } from "./store";

export type ScrapeContentActivePageData = {
  id: string;
  link: string;
  long_url: string;
  created_at: string;
};

export async function shortenUrl(urlActive: string): Promise<ScrapeContentActivePageData | Error> {
  const { bitlyToken } = store.get<Settings>("settings");

  const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${bitlyToken}`,
    },
    body: JSON.stringify({
      domain: "bit.ly",
      long_url: urlActive,
    }),
  });

  if (response.status == 200 || response.status == 201) {
    const jsonData = await response.json();
    return jsonData as ScrapeContentActivePageData;
  }

  throw new Error("Erro ao encurtar a url");
}
