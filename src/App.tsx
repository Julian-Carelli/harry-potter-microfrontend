import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import '../i18n.js'

import CharacterGallery from './components/CharacterGallery/CharacterGallery'
import CharacterDetails from './components/CharacterDetails/CharacterDetails'
import Header from './components/Header/Header.js'
import NotFoundMessage from './components/NotFoundMessage/NotFoundMessage.js'
import { useTranslation } from 'react-i18next'

export default function App() {
  const { t } = useTranslation('translations')
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CharacterGallery />} />
        <Route path="/characters/:characterId" element={<CharacterDetails />} />
        <Route
          path="*"
          element={
            <NotFoundMessage text={t('components.pageError.pageNotFound')} />
          }
        />
      </Routes>
    </Router>
  )
}
