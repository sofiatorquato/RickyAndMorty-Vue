import { ref } from 'vue';
import { defineStore } from 'pinia';


export const uiStore = defineStore('ui', () => {

  const isOnline = ref(navigator.onLine);
  const loading = ref(false);
  const notFound = ref(false);
  const menuOpen = ref(false);

  const menuHamb = (): void => {
    menuOpen.value = !menuOpen.value;
  };

  window.addEventListener('offline', () => {
    isOnline.value = false;
  });
  window.addEventListener('online', () => {
    isOnline.value = true;
  });

  return {
    isOnline,
    loading,
    notFound,
    menuHamb,
    menuOpen

  };
});


