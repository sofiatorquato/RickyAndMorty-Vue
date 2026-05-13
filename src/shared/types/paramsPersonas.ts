export interface PersonagensParams{
  id?: number,
  name?: string,
  status?: string,
  species?: string,
  gender?: string;
  image?: string,
  page?: number;
  episode? :string[] | number[],

}

export interface PersonagemCompleto extends PersonagensParams {
  id: number
  image: string
  episode: string[] | number[]
  origin: {
    name: string
    url?: string
  }
  location: {
    name: string
    url?: string
  }
}

export interface RickyAndMortyData{
  info: {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null
  };
  results: PersonagemCompleto[]
}
