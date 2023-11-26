import { useState, useEffect } from 'react'
import { CharactersResponse } from '../../service/characters/characters-interface'
import { Link, useParams } from 'react-router-dom'
import CharactersService from '../../service/characters/characters'
import {
  StyledCharacterDetail,
  StyledContainer,
} from './CharacterDetails.styles'
import { useTranslation } from 'react-i18next'
import LoadingButton from '../LoadingButton/LoadingButton'
import NotFoundMessage from '../NotFoundMessage/NotFoundMessage'

const charactersService = new CharactersService()

const CharacterDetails = () => {
  const { characterId } = useParams<{ characterId: string }>()
  const [character, setCharacter] = useState<CharactersResponse>()
  const [isLoading, setIsLoading] = useState(true)

  const { t } = useTranslation('translations')

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        if (!characterId) return
        const response = await charactersService.getCharacterById(characterId)

        setCharacter(response)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching character data:', error)
      }
    }

    fetchCharacter()
  }, [characterId])

  if (isLoading) {
    return (
      <StyledContainer>
        <LoadingButton />
      </StyledContainer>
    )
  }

  if (!character || character?.results.length === 0) {
    return <NotFoundMessage />
  }

  return (
    <StyledCharacterDetail>
      <div className="back-to-home">
        <Link to="/">
          <button>{t(`components.CharacterDetails.backButton.title`)}</button>
        </Link>
      </div>
      {character.results.map((item) => (
        <div
          key={item.id}
          data-testid="character-info"
          className="character-info"
        >
          <h1>{item.name}</h1>
          <div>
            <img src={item.image} />
          </div>
          <div>
            <p>
              {t(
                `components.CharacterGallery.HarryPotter.character.species.${item.species}`,
              )}
            </p>
            <p>{item.house}</p>
            <p>
              {t(
                `components.CharacterGallery.HarryPotter.character.gender.${item.gender}`,
              )}
            </p>
            <p>
              {t(
                `components.CharacterGallery.HarryPotter.character.status.${item.alive}`,
              )}
            </p>
          </div>
        </div>
      ))}
    </StyledCharacterDetail>
  )
}

export default CharacterDetails
