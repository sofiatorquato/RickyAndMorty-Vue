<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { uiStore } from '../stores/uiState';
import { formatarData } from '../helpers/date';

const ui = uiStore();
const dataAtual = ref('');

function atualizarData():void {
  dataAtual.value = formatarData();
}

onMounted(() => {
  formatarData();
  setInterval(atualizarData, 1000);
});

</script>

<template>

  <div class="flex justify-between bg-secondary py-7 px-5 items-center border-b border-terc">
    <div class="flex items-center gap-4">
      <button class="text-terc lg:hidden text-2xl" @click="ui.menuHamb">&#9776;</button>
      <img src="@/assets/images/logo (2).svg" alt="Logo Ricky and Morty" class="w-40 ml-5" />
    </div>
    <span class="text-white text-sm md:text-base text-right ">{{ dataAtual }}</span>
  </div>
</template>
