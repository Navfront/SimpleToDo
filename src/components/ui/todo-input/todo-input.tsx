import React from 'react'

import { StyledForm } from './styled'

function TodoInput () {
  const textAreaRef = React.createRef<HTMLTextAreaElement>()

  return (
    <StyledForm>
      <textarea ref={textAreaRef} name="text" placeholder="Enter text here"></textarea>
      <p>
        <button type="submit" onClick={(e) => {
          e.preventDefault()
          textAreaRef.current?.classList.add('shaking')
          setTimeout(() => { textAreaRef.current?.classList.remove('shaking') }, 1000)
        }}>ok</button>
        <button type="button">cancel</button>
      </p>
    </StyledForm>
  )
}

export default TodoInput
