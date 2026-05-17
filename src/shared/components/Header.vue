<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { uiStore } from '../stores/uiState';

const dataAtual = ref('');

const ui = uiStore();

function atualizarData(): void {
  const agora = new Date();

  if (window.innerWidth < 768) {
    dataAtual.value = agora.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).replace(',', ' • ');
  }

  else {
    dataAtual.value = agora.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'medium' }).replace(',', ' • ');

  }
}

onMounted(() => {
  atualizarData();
});

setInterval(atualizarData, 1000);

</script>

<template>

  <div class="flex justify-between bg-secondary py-7 px-10 items-center border-b border-terc">
    <div class="flex items-center gap-4">
      <button class="text-terc lg:hidden text-2xl" @click="ui.menuHamb">&#9776;</button>
      <img src="@/assets/images/logo (2).svg" alt="" class="w-40" />
    </div>

    <span class="text-white text-sm md:text-base text-right ">{{ dataAtual }}</span>
  </div>
</template>
