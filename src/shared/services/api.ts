import { api } from './config/api.config';
import type { PersonagensParams } from '../types/paramsPersonas';
import type { RickyAndMortyData } from '../types/paramsPersonas';

export async function buscarPersonagens(filtros:PersonagensParams={}):Promise<RickyAndMortyData | null> {

  try {
    const { data } = await api.get('/character', { params: filtros });
    return data;

  } catch (error) {
    console.error('Erro ao buscar personagens:', error);
    return null;
  }
}
