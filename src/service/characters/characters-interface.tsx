export interface CharacterServiceInterface {
    getAllCharacters: () => CharactersResponse | unknown;
    getCharacterById: (characterId: string) => CharactersResponse | unknown
}

type CharactersResponse = {
    results: Characters[]
}

export type Characters = {
    id: string;
    name: string;
    species: string;
    gender: string;
    house: string;
    image: string;
    alive: boolean;
}

export type ApiResponse = Characters[]

