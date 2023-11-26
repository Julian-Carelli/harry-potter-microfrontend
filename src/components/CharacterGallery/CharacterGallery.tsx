import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Characters,
  Paginate,
} from '../../service/characters/characters-interface'
import CharactersService from '../../service/characters/characters'
import ReactPaginate from 'react-paginate'
import { StyledCharacterList } from './CharacterGallery.styles'
import { useTranslation } from 'react-i18next'

const charactersService = new CharactersService()

const CharacterGallery = ({ path = 'characters' }: { path?: string }) => {
  const [characters, setCharacters] = useState<Characters[]>([])
  const [paginate, setPaginate] = useState<Paginate>()
  const [currentPage, setCurrentPage] = useState(1)

  const { t } = useTranslation('translations')

  useEffect(() => {
    const fetchData = async (currentPage: number) => {
      try {
        const response = await charactersService.getAllCharacters({
          page: currentPage,
          pageSize: 20,
        })
        setCharacters(response.results)
        setPaginate(response.paginate)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData(currentPage)
  }, [currentPage])

  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected + 1)
  }

  return (
    <StyledCharacterList>
      <h1>{t('components.CharacterGallery.HarryPotter.title')}</h1>
      <div className="character-container">
        {characters.map((character) => (
          <div key={character.id} className="character-card">
            <Link to={`${path}/${character.id}`}>
              <img src={character.image} alt={character.name} />
            </Link>
            <p>{character.name}</p>
            <p>{character.house}</p>
          </div>
        ))}
      </div>
      {paginate && (
        <ReactPaginate
          pageCount={paginate.totalPages}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
          previousLabel={t('components.CharacterGallery.paginate.previous')}
          nextLabel={t('components.CharacterGallery.paginate.next')}
        />
      )}
    </StyledCharacterList>
  )
}

export default CharacterGallery
