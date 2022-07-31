
import TodoCard from '../../ui/todo-card/todo-card'
import { StyledContainer } from '../container/styled'
import { StyledMain, StyledMainTitle, StyledTodoList } from './styled'
function Main () {
  return <StyledMain>
        <StyledContainer>
          <section>
              <StyledMainTitle>{'<'} SIMPLE TODO LIST {'>'}</StyledMainTitle>
      <StyledTodoList>
              <li>
                  <TodoCard todoId={'123'} title={'First Todo'} isDone={false}/>
              </li>
        </StyledTodoList>
        </section>
        </StyledContainer>
</StyledMain>
}

export default Main
