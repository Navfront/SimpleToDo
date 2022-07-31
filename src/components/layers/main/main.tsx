
import TodoCard from '../../ui/todo-card/todo-card'
import { StyledContainer } from '../container/styled'
import { StyledMain, TodoList } from './styled'
function Main () {
  return <StyledMain>
      <StyledContainer>
      <section>
      <TodoList>
              <li>
                  <TodoCard todoId={'123'} title={'First Todo'} isDone={false}/>
              </li>
        </TodoList>
        </section>
        </StyledContainer>
</StyledMain>
}

export default Main
