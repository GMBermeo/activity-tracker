<template>
  <Formulario @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <Tarefa
      v-for="(tarefa, index) in tarefas.reverse()"
      :key="index"
      :tarefa="tarefa"
    />
    <Box v-if="listaEstaVazia"> Você não está muito produtivo hoje 😔 </Box>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Formulario from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
import iTarefa from "../interfaces/iTarefa";
import Box from "../components/Box.vue";

export default defineComponent({
  name: "Tarefas",
  components: {
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
    };
  },
  methods: {
    salvarTarefa(tarefa: iTarefa) {
      this.tarefas.push(tarefa);
    },
  },
});
</script>
