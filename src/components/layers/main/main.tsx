import TodoList from '../../ui/todo-list/todo-list'
import { StyledContainer } from '../container/styled'
import { StyledMain, StyledMainSection, StyledMainTitle } from './styled'
import AddButton from './../../ui/add-button/add-button'
import Notificator from './../../ui/notificator/notificator'

function Main () {
  return (
    <StyledMain>
      <StyledContainer>
        <Notificator/>
        <StyledMainSection>
          <StyledMainTitle>
            {'<'} SIMPLE TODO LIST {'>'}
          </StyledMainTitle>

          <AddButton>Add TODO +</AddButton>
          <TodoList />
        </StyledMainSection>
      </StyledContainer>
    </StyledMain>
  )
}

export default Main
