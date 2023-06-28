export function scrapeContentActivePage() {
  function scrapeDescription() {
    if (document.head.querySelector<HTMLMetaElement>('meta[name="description"]')?.content) {
      return document.head.querySelector<HTMLMetaElement>('meta[name="description"]')?.content;
    }
    if (document.body.querySelector<HTMLDivElement>(".post-body")?.innerText) {
      return document.body.querySelector<HTMLDivElement>(".post-body")?.innerText;
    }
    return "";
  }

  return {
    urlActive: window.location.href,
    title: document.title,
    description: scrapeDescription(),
  };
}
