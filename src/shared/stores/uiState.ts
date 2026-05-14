import { ref } from 'vue';
import { defineStore } from 'pinia';


export const uiStore = defineStore('ui', () => {

  const isOnline = ref(navigator.onLine);
  const loading = ref(false);
  const notFound = ref(false);

  window.addEventListener('offline', () => {
    isOnline.value = false;
  });
  window.addEventListener('online', () => {
    isOnline.value = true;
  });

  return {
    isOnline,
    loading,
    notFound
  };
});


