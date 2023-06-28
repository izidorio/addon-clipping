import { Button } from "./Button";
import { scrapeContentActivePage, shortenUrl } from "../services";
import { MagicWand } from "@phosphor-icons/react";
import { useClipping } from "../store";

export function ButtonAdd() {
  const updateClipping = useClipping((s) => s.update);
  async function handleClipping() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    const [{ result }] = await chrome.scripting.executeScript({
      target: { tabId: tab.id as number },
      func: scrapeContentActivePage,
    });

    if (result) {
      const shortUrl = await shortenUrl(result.urlActive);

      if (shortUrl instanceof Error) {
        //TODO tratar o error
        return;
      }

      //TODO salva o dado o store
      updateClipping({
        id: shortUrl.id,
        link: shortUrl.link,
        long_url: shortUrl.long_url,
        description: result.description,
        title: result.title,
      });
    }
  }
  return (
    <Button width="full" onClick={handleClipping}>
      <MagicWand size={24} weight="bold" />
      Adicionar notícia
    </Button>
  );
}
