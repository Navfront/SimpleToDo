import TodoList from '../../ui/todo-list/todo-list'
import { StyledContainer } from '../container/styled'
import { StyledMain, StyledMainSection, StyledMainTitle } from './styled'
import AddButton from './../../ui/add-button/add-button'

function Main () {
  return (
    <StyledMain>
      <StyledContainer>
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
