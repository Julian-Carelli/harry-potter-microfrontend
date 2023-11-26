import { render, act, waitFor, screen } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock'
import CharacterGallery from '../../components/CharacterGallery/CharacterGallery'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { getAllCharactersMockResponse } from '../__mocks__/charactersMock'

fetchMock.enableMocks()

test('render component', async () => {
  fetchMock.mockResponseOnce(JSON.stringify(getAllCharactersMockResponse))

  await act(async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<CharacterGallery />} />
        </Routes>
      </MemoryRouter>,
    )
  })

  await waitFor(() => {
    const CharacterGalleryTitle = screen.getByText('Harry Potter Characters')
    const characterNameElement = screen.getByText('Harry Potter')
    const characterName2Element = screen.getByText('Hermione Granger')
    const characterName3Element = screen.getByText('Ron Weasley')
    const characterName4Element = screen.getByText('Draco Malfoy')

    expect(CharacterGalleryTitle).toBeTruthy()
    expect(characterNameElement).toBeTruthy()
    expect(characterName2Element).toBeTruthy()
    expect(characterName3Element).toBeTruthy()
    expect(characterName4Element).toBeTruthy()
  })
})
