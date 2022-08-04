import { StyledTodoList } from './styled'
import TodoCard from './../todo-card/todo-card'
import loadingIcon from '../todo-card/loading.gif'
import { useAppSelector } from '../../../redux/redux-hooks'
import { useEffect } from 'react'
import { useAppDispatch } from './../../../redux/redux-hooks'
import { getTodos, setTodos } from './../../../redux/slices/todosSlice'
import LocalStorageApi from '../../../local-storage/local-storage-api'

function TodoList () {
  const isLoading = useAppSelector((state) => state.app.isLoading)
  const todos = useAppSelector((state) => state.todos.todos)
  const { isAuth, userName } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log('auth is ', isAuth)

    if (isAuth) {
      dispatch(getTodos(userName))
    } else {
      const localTodos = LocalStorageApi.getFromLocalStorage()
      if (!localTodos) {
        dispatch(setTodos([]))
      } else { dispatch(setTodos(localTodos)) }
    }
  }, [isAuth])

  return isLoading
    ? (
    <img src={loadingIcon} alt="loading icon" style={{ margin: '0 auto', display: 'block' }} />
      )
    : (
    <StyledTodoList>
      {todos && todos.length > 0
        ? todos.map((todo) => (
            <li key={todo.todoId}>
              <TodoCard todoId={todo.todoId} title={todo.title} isDone={todo.isDone} />
            </li>
        ))
        : <p>List is empty...</p> }
    </StyledTodoList>
      )
}

export default TodoList
