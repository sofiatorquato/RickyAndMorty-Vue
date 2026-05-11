<script setup lang="ts">
import { ref,onMounted } from 'vue';
import { buscarPersonagens } from '@/shared/services/api';
import type { PersonagensParams } from '@/shared/types/paramsPersonas';


const listaDePersonagens = ref<PersonagensParams[]>([]);

async function renderizarPersonas():Promise<void> {
  const resposta = await buscarPersonagens();

  if (resposta && resposta.results) {
    listaDePersonagens.value = resposta.results;
  }
}

onMounted(() => {
  renderizarPersonas();
});

</script>

<template>
 <div class="p-8">
    <h1 class="text-terc font-audiowide text-3xl mb-6">Personagens</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="persona in listaDePersonagens" :key="persona.id" class="bg-secondary rounded-xl p-4 border border-terc/20">
        <img :src="persona.image" class="w-full rounded-lg mb-4" />
        <p class="text-white font-bold">{{ persona.name }}</p>
      </div>
    </div>
  </div>
</template>
