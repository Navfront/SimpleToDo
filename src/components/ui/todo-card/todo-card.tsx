/* eslint-disable no-unused-vars */
import { StyledButtonsWrapper, StyledTodoCard, StyledButton, StyledTitle } from './styled'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/redux-hooks'
import { deleteTodo, updateTodo } from '../../../redux/slices/todosSlice'

import { modifyOffline, removeOffline } from '../../../redux/slices/offlineSlice'
import { changeModalShow } from '../../../redux/slices/appSlice'

type TodoCardProps = {
  todoId: string;
  title: string;
  isDone?: boolean;
};

function TodoCard ({ todoId, title, isDone = false }: TodoCardProps) {
  const [isLoading] = useState(false)
  const { isAuth, userName } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  const onDeleteHandler = () => {
    if (isAuth) {
      dispatch(deleteTodo({ username: userName, todoId }))
    } else {
      dispatch(removeOffline({ todoId }))
    }
  }

  const onModifyHandler = () => {
    if (isAuth) {
      dispatch(updateTodo({ username: userName, todo: { todoId, title, isDone } }))
    } else {
      dispatch(changeModalShow({ isLoading: false, isModalShow: true, targetTodoId: todoId }))
    }
  }

  const onDoneHandler = () => {
    if (isAuth) {
      dispatch(updateTodo({ username: userName, todo: { todoId, title, isDone: !isDone } }))
    } else {
      dispatch(modifyOffline({ todoId, title, isDone: !isDone }))
    }
  }

  return (
    <StyledTodoCard>
      <StyledTitle isDone={isDone}>{title}</StyledTitle>
      <StyledButtonsWrapper>
        <StyledButton onClick={onDeleteHandler}>Delete</StyledButton>
        <StyledButton onClick={onModifyHandler}>Modify</StyledButton>
        <StyledButton onClick={onDoneHandler}>{isDone ? 'Not Done' : 'Done'}</StyledButton>
      </StyledButtonsWrapper>
    </StyledTodoCard>
  )
}

export default TodoCard
