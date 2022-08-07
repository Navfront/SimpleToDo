import React, { FormEvent, RefObject } from 'react'

import { StyledError, StyledForm, StyledTextWrapper } from './styled'

function TodoInput () {
  const WrapperRef = React.createRef<HTMLDivElement>()

  const errorRef: RefObject<HTMLParagraphElement> = React.createRef()

  const setErrorText = (error: string) => {
    if (errorRef.current) {
      errorRef.current.textContent = error
      setTimeout(() => {
        if (errorRef.current) errorRef.current.textContent! = ''
      }, 3000)
    }
  }

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const text = new FormData(event.currentTarget).get('text') as string

    if (text.length < 4) {
      setErrorText('Need more then 4 symbols!')
      WrapperRef.current?.classList.add('shaking')

      setTimeout(() => {
        WrapperRef.current?.classList.remove('shaking')
      }, 1000)
    }
  }

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <StyledTextWrapper ref={WrapperRef}>
        <StyledError ref={errorRef}></StyledError>
        <textarea name="text" placeholder="Enter text here"></textarea>
      </StyledTextWrapper >

      <p>
        <button type="submit">ok</button>
        <button type="button">cancel</button>
      </p>
    </StyledForm>
  )
}

export default TodoInput
