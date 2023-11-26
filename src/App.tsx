import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import '../i18n.js'

import CharacterGallery from './components/CharacterGallery/CharacterGallery'
import CharacterDetails from './components/CharacterDetails/CharacterDetails'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterGallery />} />
        <Route path="/characters/:characterId" element={<CharacterDetails />} />
      </Routes>
    </Router>
  )
}
