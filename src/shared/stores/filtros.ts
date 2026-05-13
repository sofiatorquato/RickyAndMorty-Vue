import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { buscarPersonagens } from '../services/api';
import type { RickyAndMortyData, PersonagensParams } from '../types/paramsPersonas';

export const usePersonagemStore = defineStore('personagem', () => {
  const pesquisa = ref('');
  const statusSelecionado = ref('Todos os status');
  const especieSelecionada = ref('Todas as espécies');
  const generoSelecionado = ref('Todos os gêneros');
  const paginaAtual = ref(1);

  const dadosApi = ref<RickyAndMortyData | null>(null);

  const buscar = async (pagina: number = 1): Promise <void> => {
    paginaAtual.value = pagina;

    const filtros: PersonagensParams = {
      page: paginaAtual.value,
      name: pesquisa.value || undefined,
      status: statusSelecionado.value !== 'Todos os status' ? statusSelecionado.value : undefined,
      species: especieSelecionada.value !== 'Todas as espécies' ? especieSelecionada.value : undefined,
      gender: generoSelecionado.value !== 'Todos os gêneros' ? generoSelecionado.value : undefined,

    };

    const res = await buscarPersonagens(filtros); //
    if (res) dadosApi.value = res;
  };

  const limparFiltros = (): void => {
    pesquisa.value = '';
    statusSelecionado.value = 'Todos os status';
    especieSelecionada.value = 'Todas as espécies';
    generoSelecionado.value = 'Todos os gêneros';
    paginaAtual.value = 1;
    buscar();
  };

  let timer: ReturnType<typeof setTimeout>;

  watch([pesquisa, statusSelecionado, especieSelecionada, generoSelecionado], () => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      buscar(1);
    }, 500);
  });

  return {
    pesquisa,
    statusSelecionado,
    especieSelecionada,
    generoSelecionado,
    paginaAtual,
    dadosApi,
    buscar,
    limparFiltros

  };
});
