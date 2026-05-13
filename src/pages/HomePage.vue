<script setup lang="ts">
import ListaPersonagens from '@/shared/components/ListaPersonagens.vue';

</script>

<template>
  <main class="w-full h-full">
    <ListaPersonagens  @selecionar="$emit('selecionar', $event)"/>
  </main>
</template>
