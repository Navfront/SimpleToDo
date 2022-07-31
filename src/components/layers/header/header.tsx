
import { StyledContainer } from './../container/styled'
import { StyledLogo, StyledFlexWrapper, StyledHeader } from './styled'
import LoginForm from './../../ui/todo-card/login-form/login-form'

function Header () {
  return <StyledHeader>
      <StyledContainer>
          <StyledFlexWrapper>
    <nav>
        <StyledLogo href='#'>
                      <img src='./logo.png' alt='Navfront.ru logo'></img>
                      NAVFRONT.RU
        </StyledLogo>

    </nav>
                <section >
               < LoginForm></LoginForm>
                </section>
              </StyledFlexWrapper>
      </StyledContainer>
  </StyledHeader>
}

export default Header
