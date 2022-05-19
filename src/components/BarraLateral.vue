<template>
  <header class="is-flex is-flex-direction-column">
    <h1>
      <img src="../assets/logo.png" alt="" />
    </h1>
    <nav class="mt-2 mb-2 is-size-5">
      <ul>
        <li>
          <router-link to="/" class="link">
            <i class="fas fa-tasks is-size-6" />
            Tarefas
          </router-link>
        </li>
        <li>
          <router-link to="/projetos" class="link">
            <i class="fas fa-project-diagram is-size-7" />
            Projetos
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="has-text-centered mt-auto">
      <button class="button" @click="alterarTema">
        {{ textoBotao }}
      </button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BarraLateral",
  emits: ["aoTemaAlterado"],
  data() {
    return {
      modoEscuroAtivo: true,
    };
  },
  computed: {
    textoBotao() {
      if (this.modoEscuroAtivo) {
        return "Desativar modo escuro";
      } else {
        return "Ativar modo escuro";
      }
    },
  },
  methods: {
    alterarTema() {
      this.modoEscuroAtivo = !this.modoEscuroAtivo;
      this.$emit("aoTemaAlterado", this.modoEscuroAtivo);
    },
  },
});
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem 2.5rem 1rem 2.5rem;
    height: auto;
  }
  nav {
    justify-content: space-between !important;
  }
  nav ul li {
    display: inline;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

.mt-5 li {
  margin: 8px 0;
}
.link {
  color: #fff;
}
.link:hover {
  color: #faf0ca;
}
.link.router-link-active {
  color: #faf0ca;
}
.button {
  color: white;
  background-color: transparent;
  border: 1px solid white;
  transition: background-color 0.2s ease-in-out;
}
.button:hover {
  color: #2b2d42;
  background-color: white;
  border: 1px solid white;
  transition: background-color 0.1s ease-in-out;
}
</style>
