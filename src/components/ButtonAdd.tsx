import { Button } from "./Button";
import { scrapeContentActivePage, encurtadorDev } from "../services";
import { MagicWand } from "@phosphor-icons/react";
import { useClipping } from "../store";
import { toast } from "../utils";
import { useState } from "react";

export function ButtonAdd() {
  const [isLoading, setLoading] = useState(false);
  const [updateClipping] = useClipping((s) => [s.update]);

  async function handleClipping() {
    setLoading(true);
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    const [{ result }] = await chrome.scripting.executeScript({
      target: { tabId: tab.id as number },
      func: scrapeContentActivePage,
    });

    setLoading(false);

    if (result) {
      // const shortUrl = await shortenUrl(result.urlActive);
      const shortUrl = await encurtadorDev(result.urlActive);

      if (shortUrl instanceof Error) {
        toast.error(shortUrl.message);
        return;
      }

      updateClipping({
        id: shortUrl.urlEncurtada,
        link: shortUrl.urlEncurtada,
        long_url: result.urlActive,
        description: result.description,
        title: result.title,
      });
    }
  }
  return (
    <Button width="full" onClick={handleClipping} isLoading={isLoading}>
      {!isLoading && <MagicWand size={24} weight="bold" />}
      Adicionar notícia
    </Button>
  );
}
