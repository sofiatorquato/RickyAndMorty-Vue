<script setup lang="ts">
import type { PersonagemCompleto } from '../types/paramsPersonas';

defineProps<{
  exibir: boolean;
  persona: PersonagemCompleto;
}>();

defineEmits(['fecharModal']);

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
                    <span class="rounded px-2 py-0.5 text-xs font-bold uppercase" >
                        {{persona.status}}
                    </span>
                    <span class="text-sm text-gray-300">{{persona.species}} · {{persona.gender}}</span>
                </div>
            </div>
        </div>
        <!--criar uma const computada puxando a descrição e os vlores de cada persona (que nem feito na legenda)
        aplicar v-for nas li e ul-->
        <ul class="space-y-0 p-5">
            <li class="flex justify-between border-b border-gray-800 py-3 text-sm">
                <span class="text-gray-400">Origem</span>
                <strong class="font-medium">{{persona.origin.name}}</strong>
            </li>
            <li class="flex justify-between border-b border-gray-800 py-3 text-sm">
                <span class="text-gray-400">Última localização</span>
                <strong class="font-medium">{{persona.location.name}}</strong>
            </li>
            <li class="flex justify-between border-b border-gray-800 py-3 text-sm">
                <span class="text-gray-400">Espécie</span>
                <strong class="font-medium">{{persona.species}}</strong>
            </li>
            <li class="flex justify-between border-b border-gray-800 py-3 text-sm">
                <span class="text-gray-400">Gênero</span>
                <strong class="font-medium">{{persona.gender}}</strong>
            </li>
            <li class="flex justify-between py-3 text-sm">
                <span class="text-gray-400">Aparece em</span>
                <strong class="font-medium">{{persona.episode.length}} {{ persona.episode.length>1? 'episódios': 'episódio' }}</strong>
            </li>
        </ul>
    </section>
       </div>
  </Teleport>
</template>
