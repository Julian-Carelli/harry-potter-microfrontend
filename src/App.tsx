import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import CharacterGallery from '../src/components/CharacterGallery/CharacterGallery'
import CharacterDetails from '../src/components/CharacterDetails/CharacterDetails'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/characters" element={<CharacterGallery />} />
        <Route path="/characters/:characterId" element={<CharacterDetails />} />
      </Routes>
    </Router>
  )
}
