import { StyledButtonsWrapper, StyledTitle, StyledTodoCard, StyledButton } from './styled'
import loading from './loading.gif'
import { useState } from 'react'

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
  return <StyledTodoCard>
      {isLoading ? <img style={{ margin: '0 auto' }} src={loading} alt='loading image'></img> : <StyledTitle isDone={isDone}>{todoId + ' ' + title}</StyledTitle>}

      <StyledButtonsWrapper>
          <StyledButton onClick={deleteCB}>Delete</StyledButton>
          <StyledButton onClick={modifyCB}>Modify</StyledButton>
          <StyledButton onClick={doneCB}>Done</StyledButton>
      </StyledButtonsWrapper>
    </StyledTodoCard>
}

export default TodoCard
