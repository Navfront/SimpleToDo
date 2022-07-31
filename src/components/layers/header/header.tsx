import { StyledContainer } from './../container/styled'
import { StyledLogo, StyledFlexWrapper, StyledHeader } from './styled'
import Auth from './../../ui/auth/auth'

function Header () {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledFlexWrapper>
          <nav>
            <StyledLogo href="#">
              <img src="./logo.png" alt="Navfront.ru logo"></img>
              NAVFRONT.RU
            </StyledLogo>
          </nav>
          <Auth/>
        </StyledFlexWrapper>
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header
