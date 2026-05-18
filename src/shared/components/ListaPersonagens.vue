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
  <section
    v-if="ui.loading || !ui.isOnline || ui.notFound"
    class="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] w-full p-6 text-center transition-all">
    <template v-if="ui.loading">
      <img src="@images/loading.png" alt="Carregando..." class="w-full max-w-[300px] lg:max-w-[500px] h-auto mb-6 animate-nave-voando">
      <p class="text-azulrick font-audiowide text-xl lg:text-3xl">VIAJANDO ENTRE DIMENSÕES...</p>
    </template>

    <template v-else-if="!ui.isOnline">
      <img :src="error" alt="Erro de conexão" class="w-full max-w-[300px] lg:max-w-[500px] h-auto mb-6">
      <p class="text-azulrick font-audiowide text-xl lg:text-3xl uppercase">Ubba Lubba Dub Dub! Sua conexão está péssima!</p>
    </template>

    <template v-else-if="ui.notFound">
      <img src="@images/loading.png" alt="Personagem não encontrado" class="w-full max-w-[300px] lg:max-w-[500px] h-auto mb-6">
      <p class="text-azulrick font-audiowide text-xl lg:text-3xl max-w-2xl uppercase">Não foi encontrado ninguém em nenhuma dimensão!</p>
    </template>
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
