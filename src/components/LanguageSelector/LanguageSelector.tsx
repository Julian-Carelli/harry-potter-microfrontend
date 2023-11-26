import { useState } from 'react'
import {
  LanguageSelectorWrapper,
  LanguageOption,
} from './LanguageSelector.styles'
import { Language } from './LanguageSelector.types'
import { changeLanguage } from 'i18next'

const spanishIcon = '🇪🇸'
const englishIcon = '🇬🇧'

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    Language.English,
  )
  const handleLanguageChange = (language: Language) => {
    changeLanguage(language)
    setSelectedLanguage(language)
  }

  return (
    <LanguageSelectorWrapper>
      <LanguageOption
        selected={selectedLanguage === Language.Spanish}
        onClick={() => handleLanguageChange(Language.Spanish)}
      >
        {spanishIcon}
      </LanguageOption>
      <LanguageOption
        selected={selectedLanguage === Language.English}
        onClick={() => handleLanguageChange(Language.English)}
      >
        {englishIcon}
      </LanguageOption>
    </LanguageSelectorWrapper>
  )
}

export default LanguageSelector
