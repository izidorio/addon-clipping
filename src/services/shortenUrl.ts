import { Settings } from "../types";
import { store } from "./store";

export type ScrapeContentActivePageData = {
  id: string;
  link: string;
  long_url: string;
  created_at: string;
};

export type EncurtadorDevData = {
  urlEncurtada: string;
};

export async function shortenUrl(urlActive: string): Promise<ScrapeContentActivePageData | Error> {
  const settings = store.get<Settings>("settings");

  if (!settings) {
    return new Error(
      "Você precisa adicionar o Token da api do Bitly para consegui encurtar o url da página"
    );
  }

  const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${settings.bitlyToken}`,
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

  return new Error(
    "Erro ao encurtar a url. Verifique se o seu Token continua válido ou se há algum problema com sua conta da Bitly."
  );
}

export async function encurtadorDev(urlActive: string): Promise<EncurtadorDevData | Error> {
  const response = await fetch("https://api.encurtador.dev/encurtamentos", {
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      url: urlActive,
    }),
  });

  if (response.status == 200 || response.status == 201) {
    const jsonData = await response.json();
    return jsonData as EncurtadorDevData;
  }

  return new Error(
    "Erro ao encurtar a url. Verifique se encurtador.dev está ativo ou se há uma nova versão o addon-clipping."
  );
}
