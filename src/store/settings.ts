import { create } from "zustand";
import { Settings } from "../types";
import { store } from "../services";

interface Actions {
  load: () => Settings;
  update: (payload: Settings) => void;
}

export const useSettings = create<Settings & Actions>((set, get) => {
  return {
    bitlyToken: "",
    emoji_header: "✂️ Clipping ✂️",
    emoji_link: "🌐",
    emoji_resume: "💬",
    load: () => {
      const values = store.get<Settings | null>("settings");
      if (values) {
        set(values);
      }
      const { bitlyToken, emoji_header, emoji_link, emoji_resume } = get();
      return { bitlyToken, emoji_header, emoji_link, emoji_resume };
    },
    update: (payload: Settings) => {
      set(payload);
      store.set("settings", payload);
    },
  };
});
