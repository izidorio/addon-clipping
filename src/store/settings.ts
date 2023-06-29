import { create } from "zustand";
import { Settings } from "../types";
import { store } from "../services";

interface Actions {
  load: () => Settings;
  update: (payload: Partial<Settings>) => void;
  updateDateClipping: (payload: string) => void;
}

export const useSettings = create<Settings & Actions>((set, get) => {
  return {
    bitlyToken: "",
    emoji_header: "✂️ Clipping ✂️",
    emoji_link: "🌐",
    emoji_resume: "💬",
    dateClipping: new Date().toLocaleDateString("pt-BR"),
    load: () => {
      const values = store.get<Settings | null>("settings");
      if (values) {
        set(values);
      }
      const { bitlyToken, emoji_header, emoji_link, emoji_resume, dateClipping } = get();
      return { bitlyToken, emoji_header, emoji_link, emoji_resume, dateClipping };
    },
    update: (payload: Partial<Settings>) => {
      set((s) => ({ ...s, ...payload }));
      store.set("settings", payload);
    },
    updateDateClipping: (payload: string) => {
      set((s) => ({ ...s, dateClipping: payload }));
    },
  };
});
