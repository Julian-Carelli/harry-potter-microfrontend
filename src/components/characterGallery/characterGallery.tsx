import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Characters } from '../../service/characters/characters-interface'
import CharactersService from '../../service/characters/characters'

const charactersService = new CharactersService()

const CharacterGallery = ({ path = 'characters' }: { path?: string }) => {
  const [characters, setCharacters] = useState<Characters[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await charactersService.getAllCharacters()
        setCharacters(response.results)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Harry Potter Characters</h1>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {characters.map((character) => (
          <div key={character.id} style={{ margin: 8 }}>
            <Link to={`${path}/${character.id}`}>
              <img
                src={character.image}
                alt={character.name}
                style={{ width: 300, height: 300, objectFit: 'fill' }}
              />
            </Link>
            <p>{character.name}</p>
            <p>{character.house}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CharacterGallery
