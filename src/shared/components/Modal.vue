<script setup lang="ts">
import type { PersonagemCompleto } from '../types/paramsPersonas';
import { ref, computed } from 'vue';

const props = defineProps<{
  exibir: boolean;
  persona: PersonagemCompleto;
}>();

defineEmits(['fecharModal']);

const infosPersonas = computed(()=>[
  { label: 'Origem', valor: props.persona.origin.name },
  { label: 'Última localização', valor: props.persona.location.name },
  { label: 'Espécie', valor: props.persona.species },
  { label: 'Gênero', valor: props.persona.gender },
  { label: 'Aparece em', valor: `${props.persona.episode.length} ${props.persona.episode.length > 1 ? 'episódios': 'episódio'}` },

]);

const coresStatus: Record<string, string> = {
  'Alive': 'text-white bg-green-700',
  'Dead': 'text-white bg-red-700',
  'Unknown': 'text-white bg-text-gray-500',
};

const classStatus = computed((): string => {
  return coresStatus[props.persona.status as keyof typeof coresStatus] || 'bg-gray-400';
});


</script>

<template>
  <Teleport to="body">
    <div v-if="exibir" class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-lg" @click.self="$emit('fecharModal')">
      <section class="relative w-full max-w-md overflow-hidden rounded-xl bg-[#1a1a1a] text-white shadow-2xl">

        <div class="relative h-72">
            <button class="btn-fechar-modal absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors" @click="$emit('fecharModal')"> &times;
            </button>

            <img :src="persona.image" :alt="persona.name" class="h-full w-full object-cover">
            <div class="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#1a1a1a] to-transparent p-5 pt-20">
                <h2 class="text-3xl font-bold">{{persona.name}}</h2>
                <div class="mt-2 flex items-center gap-3">
                    <span class="rounded px-2 py-0.5 text-xs font-bold uppercase" :class="[classStatus]">
                        {{persona.status}}
                    </span>
                    <span class="text-sm text-gray-300">{{persona.species}} · {{persona.gender}}</span>
                </div>
            </div>
        </div>

        <ul class="space-y-0 p-5">
            <li v-for="(info, index) in infosPersonas" :key="info.label" class="flex justify-between border-b border-gray-800 py-3 text-sm"  :class="['flex justify-between py-3 text-sm', index !==infosPersonas.length-1? 'border-b border-gray-800' : '']">
              <span> {{ info.label }}</span>
              <strong>{{ info.valor }}</strong>
            </li>
        </ul>
    </section>
       </div>
  </Teleport>
</template>
