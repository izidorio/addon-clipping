import { Button } from "./Button";
import { api } from "../services";
import { useSettings } from "../store";

export function ButtonAdd() {
  const token = useSettings((s) => s.token);
  async function handleClipping() {
    console.log("aqui ");

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    const response = await chrome.scripting.executeScript({
      target: { tabId: tab.id as number },
      func: api,
      args: [token],
    });

    console.log({ response });
  }
  return <Button onClick={handleClipping}>Incluir</Button>;
}
