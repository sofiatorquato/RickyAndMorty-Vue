<script setup lang="ts">
import { onMounted } from 'vue';
import PersonagemCard from './PersonagemCard.vue';
import Paginacao from './Paginacao.vue';
import { usePersonagemStore } from '../stores/filtros';
import { uiStore } from '../stores/uiState';
import error from '@images/error.png';


const store = usePersonagemStore();
const ui = uiStore();

onMounted(() => {
  store.buscar();
});

</script>

<template>
  <section v-if="ui.loading" class="flex flex-col justify-items items-center p-40">
    <img src="@images/loading.png" alt="">
    <p class="text-azulrick font-audiowide text-xl">VIAJANDO ENTRE DIMENSÕES...</p>
  </section>

  <section v-else-if="!ui.isOnline" class="flex flex-col justify-items items-center p-40">
    <img :src="error" alt="">
    <p class="text-azulrick font-audiowide text-xl">UBBA LUBBA DUB DUB! SUA CONEXÃO ESTÁ PÉSSIMA!</p>
  </section>

  <section v-else-if="ui.notFound" class="flex flex-col justify-items items-center p-40">
    <img src="@images/loading.png" alt="">
    <p class="text-azulrick font-audiowide text-xl">NÃO FOI ENCONTRADO NINGUÉM EM NENHUMA DIMENSÃO!</p>
  </section>




 <section v-else class="p-8">
    <h1 class="text-terc font-audiowide text-3xl mb-6">Personagens</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      <PersonagemCard v-for="persona in store.dadosApi?.results" :key="persona.id" :personagem="persona" @clicar="$emit('selecionar', $event)"/>
      </div>
      <div>
        <Paginacao v-if="store.dadosApi" :info="store.dadosApi.info" :atual-page="store.paginaAtual" @mudar-page="store.buscar"/>
      </div>
  </section>
</template>
