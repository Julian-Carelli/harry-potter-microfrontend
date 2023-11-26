import { render, act, waitFor, screen } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock'
import CharacterDetails from '../../components/CharacterDetails/CharacterDetails'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { getCharacterMockResponse } from '../__mocks__/charactersMock'

fetchMock.enableMocks()

test('render component', async () => {
  fetchMock.mockResponseOnce(JSON.stringify([getCharacterMockResponse]))

  await act(async () => {
    render(
      <MemoryRouter
        initialEntries={['/characters/9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8']}
      >
        <Routes>
          <Route
            path="/characters/:characterId"
            element={<CharacterDetails />}
          />
        </Routes>
      </MemoryRouter>,
    )
  })

  await waitFor(() => {
    const characterNameElement = screen.getByText('Harry Potter')
    const characterSpeciesElement = screen.getByText('Human')
    const characterGenderElement = screen.getByText('Male')
    const characterHouseElement = screen.getByText('Gryffindor')
    const characterAliveElement = screen.getByText('Dead')

    expect(characterNameElement).toBeTruthy()
    expect(characterSpeciesElement).toBeTruthy()
    expect(characterGenderElement).toBeTruthy()
    expect(characterHouseElement).toBeTruthy()
    expect(characterAliveElement).toBeTruthy()
  })
})
