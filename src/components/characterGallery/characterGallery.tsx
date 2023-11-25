import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Characters,
  Paginate,
} from '../../service/characters/characters-interface'
import CharactersService from '../../service/characters/characters'
import ReactPaginate from 'react-paginate'

const charactersService = new CharactersService()

const CharacterGallery = ({ path = 'characters' }: { path?: string }) => {
  const [characters, setCharacters] = useState<Characters[]>([])
  const [paginate, setPaginate] = useState<Paginate>()
  const [currentPage, setCurrentPage] = useState(1)

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
      {paginate && (
        <ReactPaginate
          pageCount={paginate.totalPages}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      )}
    </div>
  )
}

export default CharacterGallery
