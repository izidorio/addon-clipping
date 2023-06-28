import { Button } from "./Button";
import { scrapeContentActivePage, shortenUrl } from "../services";
import { Scissors } from "@phosphor-icons/react";

export function ButtonAdd() {
  async function handleClipping() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    const [{ result }] = await chrome.scripting.executeScript({
      target: { tabId: tab.id as number },
      func: scrapeContentActivePage,
    });

    console.log(result);
    if (result) {
      const shortUrl = await shortenUrl(result.urlActive);
      console.log({ shortUrl });
    }
  }
  return (
    <Button onClick={handleClipping}>
      <Scissors size={24} />
      Incluir
    </Button>
  );
}
