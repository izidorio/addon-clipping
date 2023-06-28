import { Settings } from "../types";
import { store } from "./store";
export async function shortenUrl(urlActive: string) {
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

  const jsonData = await response.json();

  return { jsonData };
}
