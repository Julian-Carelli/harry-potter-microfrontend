import { validateImage } from '../../commons/validation'
import {
  ApiResponse,
  CharacterServiceInterface,
  Characters,
  PaginateOptions,
} from './characters-interface'

class CharactersService implements CharacterServiceInterface {
  public async getAllCharacters(paginateOptions: PaginateOptions) {
    try {
      const response = await fetch(`https://hp-api.onrender.com/api/characters`)
      const data = await response.json()
      return buildResponse(data, paginateOptions)
    } catch (error) {
      console.error('Error fetching all characters', error)
      return Promise.reject('Error fetching all characters')
    }
  }

  public async getCharacterById(characterId: string) {
    try {
      const response = await fetch(
        `https://hp-api.onrender.com/api/character/${characterId}`,
      )
      const data = await response.json()
      return buildResponse(data)
    } catch (error) {
      console.error(`Error fetching character with ID ${characterId}:`, error)
      return Promise.reject(`Error fetching character with ID ${characterId}`)
    }
  }
}

const buildResponse = (
  data: ApiResponse,
  paginateOptions?: PaginateOptions,
) => {
  const results = buildResults(data, paginateOptions)
  return {
    results,
    paginate: paginateOptions
      ? buildPaginate(data, paginateOptions)
      : undefined,
  }
}

const buildResults = (
  data: Characters[],
  paginationOptions?: PaginateOptions,
) => {
  let currentData = data

  if (paginationOptions) {
    const { page, pageSize = 20 } = paginationOptions
    const startIndex = (page - 1) * pageSize
    currentData = data.slice(startIndex, startIndex + pageSize)
  }

  return currentData.map((character) => mapToCharacter(character))
}

const buildPaginate = (
  data: Characters[],
  paginateOptions: PaginateOptions,
) => {
  const { page, pageSize } = paginateOptions

  return {
    total: data.length,
    totalPages: Math.ceil(data.length / pageSize),
    page: Number(page),
    pageSize: Number(pageSize),
  }
}

const mapToCharacter = (character: Characters) => {
  return {
    id: character.id,
    name: character.name,
    image: validateImage(character.image),
    species: character.species,
    gender: character.gender,
    house: character.house,
    alive: character.alive,
  }
}

export default CharactersService
