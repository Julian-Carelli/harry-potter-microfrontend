import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Characters } from '../../service/characters/characters-interface';
import CharactersService from '../../service/characters/characters';

const charactersService = new CharactersService()

const CharacterGallery = () => {
  const [characters, setCharacters] = useState<Characters[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await charactersService.getAllCharacters()
        setCharacters(response.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Harry Potter Characters</h1>
      <div>
        {characters.map((character) => (
          <div key={character.id}>
            <Link to={`/characters/${character.id}`}>
              <img src={character.image} alt={character.name} />
            </Link>
            <p>{character.name}</p>
            <p>{character.house}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterGallery;
