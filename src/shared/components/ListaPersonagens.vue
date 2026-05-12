<script setup lang="ts">
import { onMounted } from 'vue';
import PersonagemCard from './PersonagemCard.vue';
import Paginacao from './Paginacao.vue';
import { usePersonagemStore } from '../stores/filtros';

const store = usePersonagemStore();


onMounted(() => {
  store.buscar();
});

</script>

<template>
 <section class="p-8">
    <h1 class="text-terc font-audiowide text-3xl mb-6">Personagens</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      <PersonagemCard v-for="persona in store.dadosApi?.results" :key="persona.id" :personagem="persona"/>
      </div>
      <div>
        <Paginacao v-if="store.dadosApi" :info="store.dadosApi.info" :atual-page="store.paginaAtual" @mudar-page="store.buscar"/>
      </div>
  </section>
</template>
