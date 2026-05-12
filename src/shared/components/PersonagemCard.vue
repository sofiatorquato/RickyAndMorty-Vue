<script setup lang="ts">
import type { PersonagensParams } from '../types/paramsPersonas';
import { statusPersonagem } from '../helpers/legenda';

defineProps<{ personagem: PersonagensParams }>();

</script>

<template>
  <div class="flex flex-col items-center rounded-lg pb-2 gap-2 cursor-pointer hover:scale-[1.02] transition-transform border border-terc shadow-md bg-secondary overflow-hidden">
    <img :src="personagem.image" :alt=personagem.name class="rounded-t-lg w-full">
    <div class="flex flex-col justify-center w-full items-center">
      <h3 class="text-white font-audiowide text-lg truncate w-full text-center" :title="personagem.name">{{ personagem.name }}</h3>
      <div class="flex justify-center gap-1">
        <img :src="statusPersonagem(personagem.status || '')" :alt="personagem.status" class="w-6">
        <span class="text-white font-gill text-md">{{ personagem.species }}</span>
      </div>

    </div>

  </div>
</template>

