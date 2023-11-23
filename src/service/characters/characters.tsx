import { ApiResponse, CharacterServiceInterface, Characters } from "./characters-interface";

class CharactersService implements CharacterServiceInterface {
    async getAllCharacters(){
        try {
            const response = await fetch(`${"https://hp-api.onrender.com/api/characters"}`);
            const data = await response.json();
            return buildResponse(data);
        } catch (error) {
            console.error("Error fetching all characters", error);
            return error
        }
    }

    async getCharacterById(characterId: string) {
        try {
            const response = await fetch(`"https://hp-api.onrender.com/api/character/${characterId}"`);
            const data = await response.json();
            return buildResponse(data)
        } catch (error) {
            console.error(`Error fetching character with ID ${characterId}:`, error);
            return error;
        }
    }
}

const buildResponse = (data: ApiResponse) => {
    const results = buildResults(data)
    return {
        results
    } 
}

const buildResults = (data: Characters[]) => {
    return data.map((character) => mapToCharacter(character));
};

const mapToCharacter = (character: Characters) => {
    return { 
        id: character.id,
        name: character.name,
        image: character.image,
        species: character.species,
        gender: character.gender,
        house: character.house,
    }
}

export default CharactersService