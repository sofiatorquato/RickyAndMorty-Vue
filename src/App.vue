<script setup lang="ts">
import Environment from '@components/config/Environment.vue';
import Header from '@components/Header.vue';
</script>

<template>

<header>
<Header/>
</header>


  <Environment />
  <router-view> </router-view>
</template>
