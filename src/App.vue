<script setup lang="ts">
import Environment from '@components/config/Environment.vue';
import Header from '@components/Header.vue';
import Aside from '@components/Aside.vue';
import { ref } from 'vue';
import type { PersonagemCompleto } from './shared/types/paramsPersonas';
import Modal from './shared/components/Modal.vue';

const personaSelecionado = ref<PersonagemCompleto | null>(null);
const modal = ref(false);

const abrirModal = (persona: PersonagemCompleto):void => {
  personaSelecionado.value = persona; //resolveeeerrrr
  modal.value = true;
};

</script>

<template>
  <div class="flex flex-col h-screen overflow-hidden">

    <header>
      <Header />
    </header>

    <div class="flex flex-1 overflow-hidden">
      <Aside />

      <main class="flex-1 overflow-y-auto bg-primary">
        <router-view @selecionar="abrirModal"></router-view>
      </main>
    </div>
    <Modal v-if="personaSelecionado" :exibir="modal" :persona="personaSelecionado" @fechar-modal="modal=false">

    </Modal>
    <Environment />
  </div>
</template>
