import TodoList from '../../ui/todo-list/todo-list'
import { StyledContainer } from '../container/styled'
import { StyledFlexContainer, StyledMain, StyledMainSection, StyledMainTitle } from './styled'
import AddButton from './../../ui/add-button/add-button'
import Notificator from './../../ui/notificator/notificator'
import Modal from '../../ui/modal/modal'
import TodoInput from './../../ui/todo-input/todo-input'
import AuthStatus from '../../ui/auth-status/auth-status'

function Main () {
  return (
    <StyledMain>
      <StyledContainer>
        <Notificator/>
        <StyledMainSection>
          <StyledMainTitle>
            {'<'} SIMPLE TODO LIST {'>'}
          </StyledMainTitle>
          <StyledFlexContainer><AuthStatus/><AddButton>Add TODO +</AddButton></StyledFlexContainer>

          <Modal><TodoInput/></Modal>
          <TodoList />
        </StyledMainSection>
      </StyledContainer>
    </StyledMain>
  )
}

export default Main
