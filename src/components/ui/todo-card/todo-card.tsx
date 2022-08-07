/* eslint-disable no-unused-vars */
import { StyledButtonsWrapper, StyledTitle, StyledTodoCard, StyledButton, StyledFormModify } from './styled'
import loading from './loading.gif'
import { SyntheticEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/redux-hooks'
import { deleteTodo, updateTodo } from '../../../redux/slices/todosSlice'
import { createTodo } from './../../../redux/slices/todosSlice'

type TodoCardProps = {
    todoId: string,
    title: string,
    isDone?: boolean,
}

function TodoCard ({ todoId, title, isDone = false }: TodoCardProps) {
  const [isLoading] = useState(false)
  const [isModifying, setIsModifying] = useState(false)
  const { isAuth, userName } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  const onSubmitModify = (event: SyntheticEvent) => {
    event.preventDefault()
    console.log(event)
  }

  const getStateOfTitle = (isLoading: boolean, isModifying: boolean) => {
    if (isLoading) { return <img style={{ margin: '0 auto' }} src={loading} alt='loading image'></img> } else if (
      isModifying
    ) { return <StyledFormModify onSubmit={onSubmitModify}><input type='text'/></StyledFormModify> } else { return <StyledTitle isDone={isDone}>{title}</StyledTitle> }
  }

  const onDeleteHandler = () => {
    if (isAuth) {
      dispatch(deleteTodo({ username: userName, todoId }))
    }
  }

  const onAddHandler = () => {
    if (isAuth) {
      dispatch(createTodo({ username: userName, todo: { todoId: '', title: 'New ToDo', isDone: false } }))
    }
  }

  const onModifyHandler = () => {
    if (isAuth) {
      dispatch(updateTodo({ username: userName, todo: { todoId, title, isDone } }))
    }
  }

  const onDoneHandler = () => {
    if (isAuth) {
      dispatch(updateTodo({ username: userName, todo: { todoId, title, isDone: !isDone } }))
    }
  }

  const onEscHandler = (evt: KeyboardEvent) => {
    if (evt.key === 'Esc' || evt.key === 'Escape') { setIsModifying(false) }
  }

  useEffect(() => {
    document.addEventListener('keydown', onEscHandler)
    return () => {
      document.removeEventListener('keydown', onEscHandler)
    }
  }, [isModifying])

  return <StyledTodoCard>
      {getStateOfTitle(isLoading, isModifying)}

      <StyledButtonsWrapper>
          <StyledButton onClick={onDeleteHandler}>Delete</StyledButton>
      <StyledButton onClick={() => {
        setIsModifying(!isModifying)
      }}>{isModifying ? 'Cancel' : 'Modify'}</StyledButton>
      <StyledButton onClick={onDoneHandler}>{isDone ? 'Not Done' : 'Done'}</StyledButton>
      </StyledButtonsWrapper>
    </StyledTodoCard>
}

export default TodoCard
