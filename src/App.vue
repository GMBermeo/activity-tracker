<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'modo-escuro': modoEscuroAtivo }"
  >
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <!-- Aqui vai a view correspondente -->
      <router-view />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
  },
  data() {
    return {
      modoEscuroAtivo: true,
    };
  },
  methods: {
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
  min-height: 100vh;
}

main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
  background-color: var(--bg-primario);
}

.lista {
  padding: 1.25rem;
}

.title,
.label {
  color: var(--texto-primario);
}
</style>
