<script setup lang="ts">
import Environment from '@components/config/Environment.vue';
import Header from '@components/Header.vue';
import Aside from '@components/Aside.vue';
</script>

<template>
  <div class="flex flex-col h-screen overflow-hidden">

    <header>
      <Header />
    </header>

    <div class="flex flex-1 overflow-hidden">
      <Aside />

      <main class="flex-1 overflow-y-auto bg-primary">
        <router-view></router-view>
      </main>
    </div>

    <Environment />
  </div>
</template>
