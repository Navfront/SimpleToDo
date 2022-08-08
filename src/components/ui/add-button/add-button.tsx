import { PropsWithChildren } from 'react'
import { useAppSelector } from '../../../redux/redux-hooks'
import { StyledAddTodoBtn } from './styled'
import { useAppDispatch } from './../../../redux/redux-hooks'
import { addOffline } from '../../../redux/slices/offlineSlice'
import { v4 as uuidv4 } from 'uuid'
import { sagaAddTodo } from '../../../redux/saga/saga-actions'

function AddButton ({ children }:PropsWithChildren) {
  const { isAuth } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  const onClickHandler = () => {
    if (isAuth) {
      dispatch(sagaAddTodo())
    } else {
      dispatch(addOffline({ todoId: uuidv4(), title: 'New ToDo', isDone: false }))
    }
  }
  return <StyledAddTodoBtn type="button" onClick={() => { onClickHandler() }}>{children}</StyledAddTodoBtn>
}

export default AddButton
