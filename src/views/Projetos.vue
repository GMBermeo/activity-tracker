<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label"> Nome do Projeto </label>
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjeto"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import iProjeto from "@/interfaces/iProjeto";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Projetos",
  data() {
    return {
      nomeDoProjeto: "",
      projetos: [] as iProjeto[],
    };
  },
  methods: {
    salvar() {
      const projeto: iProjeto = {
        nome: this.nomeDoProjeto,
        id: new Date().toISOString().replace(/[-:.]/g, ""),
      };
      this.projetos.push(projeto);
      this.nomeDoProjeto = "";
    },
  },
});
</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>
