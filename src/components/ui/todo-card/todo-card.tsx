import { StyledButtonsWrapper, StyledTitle, StyledTodoCard, StyledButton, StyledFormModify } from './styled'
import loading from './loading.gif'
import { SyntheticEvent, useEffect, useState } from 'react'

type TodoCardProps = {
    todoId: string,
    title: string,
    isDone?: boolean,
    deleteCB?: () => void,
    modifyCB?: () => void,
    doneCB?: () => void
}

const defCB = () => {
  console.log('click')
}

function TodoCard ({ todoId, title, isDone = false, deleteCB = defCB, modifyCB = defCB, doneCB = defCB }: TodoCardProps) {
  const [isLoading] = useState(false)
  const [isModifying, setIsModifying] = useState(false)

  const onSubmitModify = (event: SyntheticEvent) => {
    event.preventDefault()
    console.log(event)
  }

  const getStateOfTitle = (isLoading: boolean, isModifying: boolean) => {
    if (isLoading) { return <img style={{ margin: '0 auto' }} src={loading} alt='loading image'></img> } else if (
      isModifying
    ) { return <StyledFormModify onSubmit={onSubmitModify}><input type='text'/></StyledFormModify> } else { return <StyledTitle isDone={isDone}>{title}</StyledTitle> }
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
          <StyledButton onClick={deleteCB}>Delete</StyledButton>
      <StyledButton onClick={() => {
        setIsModifying(true)
      }}>Modify</StyledButton>
          <StyledButton onClick={doneCB}>Done</StyledButton>
      </StyledButtonsWrapper>
    </StyledTodoCard>
}

export default TodoCard
