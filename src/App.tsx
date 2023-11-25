import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import CharacterGallery from './components/CharacterGallery/CharacterGallery.tsx'
import CharacterDetails from './components/CharacterDetails/CharacterDetails.tsx'

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
