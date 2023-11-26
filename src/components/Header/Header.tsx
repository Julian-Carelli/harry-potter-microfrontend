import { Link } from 'react-router-dom'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import { HeaderWrapper, Logo } from './Header.styles'

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo className="header__logo">HARRY-POTTER-MICROFRONTEND</Logo>
      </Link>
      <div className="header__language-selector">
        <LanguageSelector />
      </div>
    </HeaderWrapper>
  )
}

export default Header
