import TodoList from '../../ui/todo-list/todo-list'
import { StyledContainer } from '../container/styled'
import { StyledAddTodoBtn, StyledMain, StyledMainSection, StyledMainTitle } from './styled'

function Main () {
  return <StyledMain>
        <StyledContainer>
          <StyledMainSection>
        <StyledMainTitle>{'<'} SIMPLE TODO LIST {'>'}</StyledMainTitle>
        <StyledAddTodoBtn type='button'>Add TODO +</StyledAddTodoBtn>
      <TodoList/>
        </StyledMainSection>
        </StyledContainer>
</StyledMain>
}

export default Main
