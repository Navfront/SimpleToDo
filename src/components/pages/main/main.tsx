
import TodoCard from './../../ui/todo-card/todo-card'
import { StyledContainer } from './../../layers/container/styled'
function Main () {
  return <main>
      <StyledContainer>
      <section>
          <ul>
              <li>
                  <TodoCard todoId={'123'} title={'First Todo'} isDone={false}/>
              </li>
        </ul>
        </section>
        </StyledContainer>
</main>
}

export default Main
