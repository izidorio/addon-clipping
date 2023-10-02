import { create } from "zustand";
import { Clipping } from "../types";
import { store } from "../services";
/** 
const data = [
  {
    id: "bit.ly/3PzL1ND",
    link: "https://bit.ly/3PzL1ND",
    long_url:
      "https://revistaoeste.com/agronegocio/empresa-do-agro-tem-fazendas-avaliadas-em-r-109-bilhoes/",
    description:
      "A empresa brasileira SLC Agrícola atingiu o valor recorde de R$ 10,9 bilhões em propriedades no agricultáveis. Clique para ver mais.",
    title: "Empresa brasileira tem fazendas avaliadas em R$ 10,9 bilhões",
  },
  {
    id: "bit.ly/3PzL1D",
    link: "https://bit.ly/3PzL1ND",
    long_url:
      "https://revistaoeste.com/agronegocio/empresa-do-agro-tem-fazendas-avaliadas-em-r-109-bilhoes/",
    description:
      "A empresa brasileira SLC Agrícola atingiu o valor recorde de R$ 10,9 bilhões em propriedades no agricultáveis. Clique para ver mais.",
    title: "Empresa brasileira tem fazendas avaliadas em R$ 10,9 bilhões",
  },
  {
    id: "bit.ly/3PzLND",
    link: "https://bit.ly/3PzL1ND",
    long_url:
      "https://revistaoeste.com/agronegocio/empresa-do-agro-tem-fazendas-avaliadas-em-r-109-bilhoes/",
    description:
      "A empresa brasileira SLC Agrícola atingiu o valor recorde de R$ 10,9 bilhões em propriedades no agricultáveis. Clique para ver mais.",
    title: "Empresa brasileira tem fazendas avaliadas em R$ 10,9 bilhões",
  },
  {
    id: "bit.ly/3PL1ND",
    link: "https://bit.ly/3PzL1ND",
    long_url:
      "https://revistaoeste.com/agronegocio/empresa-do-agro-tem-fazendas-avaliadas-em-r-109-bilhoes/",
    description:
      "A empresa brasileira SLC Agrícola atingiu o valor recorde de R$ 10,9 bilhões em propriedades no agricultáveis. Clique para ver mais.",
    title: "Empresa brasileira tem fazendas avaliadas em R$ 10,9 bilhões",
  },
];

**/
interface Props {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
  clipping: Clipping[];
  load: () => Clipping[];
  update: (payload: Clipping) => void;
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
