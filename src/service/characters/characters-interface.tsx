export interface CharacterServiceInterface {
  getAllCharacters: () => Promise<CharactersResponse | string>
  getCharacterById: (
    characterId: string,
  ) => Promise<CharactersResponse> | string
}

export type CharactersResponse = {
  results: Characters[]
}

export type Characters = {
  id: string
  name: string
  species: string
  gender: string
  house: string
  image: string
  alive: boolean
}

export type ApiResponse = Characters[]
