export async function api(token: string) {
  console.log("lá", { token });

  const urlActive = window.location.href;
  const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      domain: "bit.ly",
      long_url: urlActive,
    }),
  });

  const jsonData = await response.json();

  const title = document.title;
  let description: string | undefined = "";

  if (document.head.querySelector('meta[name="description"]')) {
    description = document.head.querySelector<HTMLMetaElement>('meta[name="description"]')?.content;
  }
  if (
    document.body.querySelector(".post-body") &&
    !document.head.querySelector('meta[name="description"]')
  ) {
    description = document.body.querySelector<HTMLDivElement>(".post-body")?.innerText;
  }

  return { urlActive, jsonData, title, description };

  console.log({ urlActive, jsonData, title, description });
}
