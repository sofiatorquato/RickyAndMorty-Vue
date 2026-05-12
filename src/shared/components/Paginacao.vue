<script setup lang="ts">
import { computed } from 'vue';
import type { RickyAndMortyData } from '../types/paramsPersonas';

const props = defineProps<{
  info: RickyAndMortyData['info'];
  atualPage: number;
}>();

const emit = defineEmits<{
  (e: 'mudarPage', page: number): void
}>();

const pagesMostrar = computed(() => {
  const r = 1;
  const lista: (number | string)[] = [];
  const totalPages = props.info.pages;
  const atual = props.atualPage;

  const inicio = Math.max(1, atual - r);
  const fim = Math.min(totalPages, atual + r);

  for (let i = inicio; i <= fim; i++) lista.push(i);

  if (inicio > 1) {
    if (inicio > 2) lista.unshift('...');
    lista.unshift(1);
  }

  if (fim < totalPages) {
    if (fim < totalPages - 1) lista.push('...');
    lista.push(totalPages);
  }

  return lista;

});

</script>

<template>
  <nav class="flex items-center justify-center gap-2 mt-8 mb-4">
    <button class="p-2 disabled:opacity-20 text-terc hover:text-white transition-all" :disabled = "!info.prev"  @click="emit('mudarPage', atualPage - 1)"> &lt; Anterior
    </button>

    <div class="flex gap-2 items-center">
      <template v-for="(p, index) in pagesMostrar" :key="index">
        <span v-if="p === '...'" class="px-2 text-terc">...</span>
        <button v-else :class="['px-4 py-2 rounded-md font-audiowide transition-all border', p === atualPage ? 'bg-terc text-secondary border-terc' : 'border-terc/30 text-terc hover:border-terc']" @click="emit('mudarPage', p as number)" > {{ p }}
        </button>
      </template>
    </div>

    <button :disabled="!info.next" class="p-2 disabled:opacity-20 text-terc hover:text-white transition-all" @click="emit('mudarPage', atualPage + 1)"> Próximo &gt;
    </button>
  </nav>
</template>

