import { StyledTodoList } from './styled'
import TodoCard from './../todo-card/todo-card'
import loadingIcon from '../todo-card/loading.gif'
import { useAppSelector } from '../../../redux/redux-hooks'
import { useEffect } from 'react'
import { useAppDispatch } from './../../../redux/redux-hooks'
import { Todo } from './../../../redux/slices/todosSlice'
import { sagaGetTodos } from '../../../redux/saga/saga-actions'

function TodoList () {
  const isLoading = useAppSelector((state) => state.app.isLoading)
  const onlineTodos = useAppSelector((state) => state.todos.todos)
  const offlineTodos = useAppSelector(state => state.offline.todos)
  const { isAuth } = useAppSelector(state => state.auth)
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
      return createTodos(onlineTodos)
    } else {
      return createTodos(offlineTodos)
    }
  }

  useEffect(() => {
    if (isAuth) {
      if (!onlineTodos || onlineTodos.length < 1) {
        dispatch(sagaGetTodos())
      }
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
