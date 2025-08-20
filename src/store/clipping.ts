import { create } from "zustand";
import { Clipping } from "../types";
import { store } from "../services";

interface Props {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
  clipping: Clipping[];
  load: () => Clipping[];
  update: (payload: Clipping) => void;
  edit: (id: string, payload: Partial<Clipping>) => void;
  delete: (id: string) => void;
  clearAll: () => void;
}

export const useClipping = create<Props>((set, get) => {
  return {
    isLoading: false,
    setLoading: (value: boolean) => set(() => ({ isLoading: value })),
    clipping: [],
    load: () => {
      const storeClipping = store.get<Clipping[] | null>("clipping");

      if (storeClipping) {
        set(() => ({ clipping: [...storeClipping] }));
        return [...storeClipping];
      }

      return [];
    },
    update: (payload: Clipping) => {
      const { clipping } = get();
      set(() => ({ clipping: [payload, ...clipping] }));
      store.set("clipping", [payload, ...clipping]);
    },
    edit: (id: string, payload: Partial<Clipping>) => {
      const { clipping } = get();
      const clippingUpdated = clipping.map((item) => 
        item.id === id ? { ...item, ...payload } : item
      );
      set(() => ({ clipping: [...clippingUpdated] }));
      store.set("clipping", [...clippingUpdated]);
    },
    delete: (id: string) => {
      const { clipping } = get();
      const clippingFiltered = clipping.filter((clipping) => clipping.id != id);
      set(() => ({ clipping: [...clippingFiltered] }));
      store.set("clipping", [...clippingFiltered]);
    },
    clearAll: () => {
      set(() => ({ clipping: [] }));
      store.delete("clipping");
    },
  };
});
