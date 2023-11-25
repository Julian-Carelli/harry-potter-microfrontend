export interface CharacterServiceInterface {
  getAllCharacters: (
    paginateOptions: PaginateOptions,
  ) => Promise<CharactersResponse | string>
  getCharacterById: (
    characterId: string,
  ) => Promise<CharactersResponse> | string
}

export type CharactersResponse = {
  results: Characters[]
  paginate?: Paginate
}

export type Characters = {
  id: string
  name: string
  species: string
  gender: string
  house: string
  image: string
  alive: string
}

export type Paginate = {
  total: number
  totalPages: number
  page: number
  pageSize: number
}

export type PaginateOptions = {
  page: number
  pageSize: number
}

export type ApiResponse = Characters[]
