import { useState, useEffect } from 'react';
import { CharactersResponse } from '../../service/characters/characters-interface';
import { useParams } from 'react-router-dom';
import CharactersService from '../../service/characters/characters';

const charactersService = new CharactersService()

const CharacterDetails = () => {
  const { characterId } = useParams<{ characterId: string }>();
  const [character, setCharacter] = useState<CharactersResponse>();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        if (!characterId) return

        const response = await charactersService.getCharacterById(characterId)

        if (!response || response?.results.length === 0) return
        
        setCharacter(response);
      } catch (error) {
        console.error('Error fetching character data:', error);
      }
    };

    fetchCharacter();
  }, [characterId]);

  if (!character) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
        {character.results.map((item) => (
            <div>
                <img src={item.image}/>
                <h1>Name: {item.name}</h1>
                <p>Species: {item.species}</p>
                <p>Gender: {item.gender}</p>
                <p>House: {item.house}</p>
                <p>Alive: {item.alive}</p>
            </div>
        ))}
    </div>
  );
};

export default CharacterDetails;
