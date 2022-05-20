<template>
  <section>
    <router-link
      to="/projetos/novo"
      class="button is-primary is-outlined is-rounded mb-4"
    >
      <span class="icon is-small">
        <i class="fas fa-plus" />
      </span>
      <span>Novo Projeto</span>
    </router-link>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th class="has-text-centered">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
          <td class="has-text-centered">
            <router-link
              :to="`/projetos/${projeto.id}`"
              class="button is-link is-outlined is-rounded is-small"
            >
              <span class="icon is-small">
                <i class="fas fa-pencil-alt" /> </span
            ></router-link>
            <button
              class="button is-danger is-outlined is-rounded is-small ml-3"
            >
              <span class="icon is-small">
                <i class="fas fa-trash" @click="excluir(projeto.id)" />
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import { EXCLUIR_PROJETO } from "@/store/tipo-mutacoes";

export default defineComponent({
  name: "Projetos",
  methods: {
    excluir(id: string) {
      this.store.commit(EXCLUIR_PROJETO, id);
    },
  },
  setup() {
    const store = useStore();
    return {
      projetos: computed(() => store.state.projetos),
      store,
    };
  },
});
</script>

<style scoped>
.table,
th {
  color: var(--texto-primario) !important;
  background: var(--bg-primario) !important;
}
</style>
