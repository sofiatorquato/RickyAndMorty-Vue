<script setup lang="ts">
import { ref } from 'vue';

const pesquisa = ref<string>('');
const filterStatus = ref<string[]>(['Todos os status', 'Alive', 'Dead', 'Unknown']);
const filterSpecies = ref<string[]>(['Todas as espécies','Animal','Human','Alien','Robot','Mythological Creature','Poopybutthole','Cronenberg']);
const filterGenre = ref<string[]>(['Todos os gêneros', 'Feminino', 'Masculino']);

const statusPadrao = ref<string>('Todos os status');
const speciePadrao = ref<string>('Todas as espécies');
const genrePadrao = ref<string>('Todos os gêneros');

const clearFilters = ():void => {
  pesquisa.value = '';
  statusPadrao.value = 'Todos os status';
  speciePadrao.value = 'Todas as espécies';
  genrePadrao.value = 'Todos os gêneros';

};

const legend = ref([
  { label: 'Vivo', icon: '❤️' },
  { label: 'Morto', icon: '💀' },
  { label: 'Desconhecido', icon: '❓' }
]);

</script>

<template>
  <aside class="flex flex-col w-80 h-full bg-secondary p-6 gap-6 border-r border-terc shadow-lg overflow-y-auto">

    <section class="flex flex-col gap-2">
      <label for="busca" class="text-terc font-audiowide text-xl tracking-wider">
        Busca
      </label>
      <input id ="busca" v-model="pesquisa"  type="text" placeholder="Busca por nome..." class="bg-[#2a2d2e] text-text-selects p-3 rounded-lg border border-transparent focus:border-terc outline-none transition-all font-gill placeholder:opacity-30" >
    </section>

    <section class="flex flex-col gap-3">
      <label class="text-terc font-audiowide text-xl tracking-wider mb-1">
        Filtros
      </label>

      <div class="relative flex flex-col">
        <select v-model="statusPadrao" class="bg-[#2a2d2e] text-text-selects p-3 rounded-lg border border-transparent focus:border-terc outline-none appearance-none cursor-pointer font-gill" >
          <option v-for="status in filterStatus" :key="status" :value="status" class="bg-secondary text-terc">
            {{ status }}
          </option>
        </select>
        <span class="absolute right-3 top-4 text-text-selects pointer-events-none text-xs">&or;</span>
      </div>

      <div class="relative flex flex-col">
        <select v-model="speciePadrao" class="bg-[#2a2d2e] text-text-selects p-3 rounded-lg border border-transparent focus:border-terc outline-none appearance-none cursor-pointer font-gill">
          <option v-for="specie in filterSpecies" :key="specie" :value="specie" class="bg-secondary text-terc">
            {{ specie }}
          </option>
        </select>
        <span class="absolute right-3 top-4 text-text-selects pointer-events-none text-xs">&or;</span>
      </div>

      <div class="relative flex flex-col">
        <select v-model="genrePadrao" class="bg-[#2a2d2e] text-text-selects p-3 rounded-lg border border-transparent focus:border-terc outline-none appearance-none cursor-pointer font-gill">
          <option v-for="genre in filterGenre" :key="genre" :value="genre" class="bg-secondary text-terc">
            {{ genre }}
          </option>
        </select>
        <span class="absolute right-3 top-4 text-text-selects pointer-events-none text-xs">&or;</span>
      </div>
    </section>

    <button class="w-full py-2 border border-red-900  rounded-lg text-red-600 font-audiowide hover:bg-red-700 hover:text-white transition-all active:scale-95" @click="clearFilters">
      Limpar Filtros
    </button>

    <section class="flex flex-col gap-4 pt-4">
      <h2 class="text-terc font-audiowide text-xl tracking-wider">
        Legenda
      </h2>

      <div class="flex flex-col gap-4 font-gill">
        <div v-for="legenda in legend" :key="legenda.label"  class="flex items-center gap-3 text-white">
          <span>{{ legenda.icon }}</span>
          <span>{{ legenda.label }}</span>
        </div>

        </div>
    </section>

  </aside>
</template>
