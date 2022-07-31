import { StyledTodoList } from './styled'
import TodoCard from './../todo-card/todo-card'
import loadingIcon from '../todo-card/loading.gif'
import { useAppSelector } from '../../../redux/redux-hooks'

function TodoList () {
  const isLoading = useAppSelector((state) => state.app.isLoading)
  const todos = useAppSelector((state) => state.todos.todos)

  return isLoading
    ? (
    <img src={loadingIcon} alt="loading icon" style={{ margin: '0 auto', display: 'block' }} />
      )
    : (
    <StyledTodoList>
      {todos && todos.length > 0
        ? todos.map((todo) => (
            <li key={todo.todoId}>
              <TodoCard todoId={todo.todoId} title={todo.todoTitle} isDone={todo.isDone} />
            </li>
        ))
        : <p>List is empty...</p> }
    </StyledTodoList>
      )
}

export default TodoList
