import { PropsWithChildren } from 'react'
import { useAppSelector } from '../../../redux/redux-hooks'
import { StyledAddTodoBtn } from './styled'
import { useAppDispatch } from './../../../redux/redux-hooks'
import { createTodo } from './../../../redux/slices/todosSlice'

function AddButton ({ children }:PropsWithChildren) {
  const { isAuth, userName } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  const onClickHandler = () => {
    if (isAuth) {
      dispatch(createTodo({ username: userName, todo: { todoId: '0', title: 'New ToDo', isDone: false } }))
    }
  }
  return <StyledAddTodoBtn type="button" onClick={() => { onClickHandler() }}>{children}</StyledAddTodoBtn>
}

export default AddButton
