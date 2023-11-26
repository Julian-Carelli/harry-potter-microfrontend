import { useTranslation } from 'react-i18next'
import { NotFoundText, NotFoundWrapper } from './NotFoundMessage.styles'
import { Language } from '../LanguageSelector/LanguageSelector.types'

const NotFoundMessage = () => {
  const {
    i18n: { language },
  } = useTranslation()

  const text =
    language === Language.English
      ? 'Character not found!'
      : 'Personaje no encontrado!'

  return (
    <NotFoundWrapper>
      <NotFoundText>{text}</NotFoundText>
    </NotFoundWrapper>
  )
}

export default NotFoundMessage
