export interface PersonagensParams{
  id?: number,
  name?: string,
  status?: string,
  species?: string,
  gender?: string;
  image?: string,
  page?: number;

}

export interface RickyAndMortyData{
  info: {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null
  };
  results: PersonagensParams[]
}
