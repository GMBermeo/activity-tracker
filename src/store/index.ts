import iProjeto from "@/interfaces/iProjeto";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";

interface Estado {
  projetos: iProjeto[];
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    projetos: [],
  },
  mutations: {
    ADICIONA_PROJETO(state, nomeDoProjeto: string) {
      const projeto = {
        id: new Date().toISOString().replace(/[-:.]/g, ""),
        nome: nomeDoProjeto,
      } as iProjeto;
      state.projetos.push(projeto);
    },
  },
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}
// {
//     id: new Date().toISOString().replace(/[-:.]/g, ""),
//     nome: "Typescript",
//   },
//   { id: new Date().toISOString().replace(/[-:.]/g, ""), nome: "Vue" },
//   { id: new Date().toISOString().replace(/[-:.]/g, ""), nome: "Vuex" },
