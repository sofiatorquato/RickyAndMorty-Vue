<script setup lang="ts">
import { ref, onMounted } from 'vue';

const dataAtual = ref('');

function atualizarData(): void {
  const agora = new Date();
  dataAtual.value = agora
    .toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'medium' })
    .replace(',', ' • ');
}

onMounted(() => {
  atualizarData();
});

setInterval(atualizarData, 1000);
</script>

<template>
  <div class="flex justify-between bg-secondary py-7 px-10 items-center">
    <img src="@/assets/images/logo (2).svg" alt="" class="w-40" />

    <span class="text-white">{{ dataAtual }}</span>
  </div>
</template>
