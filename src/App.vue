<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'modo-escuro': modoEscuroAtivo }"
  >
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <Formulario @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
        <Tarefa
          v-for="(tarefa, index) in tarefas.reverse()"
          :key="index"
          :tarefa="tarefa"
        />
        <Box v-if="listaEstaVazia"> Você não está muito produtivo hoje 😔 </Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import Formulario from "./components/Formulario.vue";
import Tarefa from "./components/Tarefa.vue";
import iTarefa from "./interfaces/iTarefa";
import Box from "./components/Box.vue";
import { mixedTypeAnnotation } from "@babel/types";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    Formulario,
    Tarefa,
    Box,
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },
  data() {
    return {
      tarefas: [] as iTarefa[],
      modoEscuroAtivo: true,
    };
  },
  methods: {
    salvarTarefa(tarefa: iTarefa) {
      this.tarefas.push(tarefa);
    },
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo;
    },
  },
});
</script>

<style>
main {
  --bg-primario: #fff;
  --text-primario: #333;
}

main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}

.lista {
  padding: 1.25rem;
}

.conteudo {
  background-color: var(--bg-primario);
}
</style>
