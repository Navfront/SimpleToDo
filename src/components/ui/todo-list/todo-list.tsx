import { StyledTodoList } from './styled'
import TodoCard from './../todo-card/todo-card'
import loadingIcon from '../todo-card/loading.gif'
import { useAppSelector } from '../../../redux/redux-hooks'
import { useEffect } from 'react'
import { useAppDispatch } from './../../../redux/redux-hooks'
import { getTodos, Todo } from './../../../redux/slices/todosSlice'

function TodoList () {
  const isLoading = useAppSelector((state) => state.app.isLoading)
  const onlineTodos = useAppSelector((state) => state.todos.todos)
  const offlineTodos = useAppSelector(state => state.offline.todos)
  const { isAuth, userName } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  const renderTodos = (isOnline: boolean) => {
    const Empty = <p>Add your first TODO!</p>

    const createTodos = (todos: Todo[]) => {
      return todos && todos.length > 0
        ? todos.map((todo) => (
          <li key={todo.todoId}>
            <TodoCard todoId={todo.todoId} title={todo.title} isDone={todo.isDone} />
          </li>
        ))
        : Empty
    }

    if (isOnline) {
      console.log('online render')
      return createTodos(onlineTodos)
    } else {
      console.log('offline render')
      return createTodos(offlineTodos)
    }
  }

  useEffect(() => {
    console.log('auth is ', isAuth)

    if (isAuth) {
      dispatch(getTodos(userName))
    }
  }, [])

  return isLoading
    ? (
    <img src={loadingIcon} alt="loading icon" style={{ margin: '0 auto', display: 'block' }} />
      )
    : (
      <StyledTodoList>
        {renderTodos(isAuth)}
    </StyledTodoList>
      )
}

export default TodoList
