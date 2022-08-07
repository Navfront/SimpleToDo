import React, { FormEvent, RefObject, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/redux-hooks'
import { changeModalShow } from '../../../redux/slices/appSlice'
import { modifyOffline } from '../../../redux/slices/offlineSlice'

import { StyledBtn, StyledError, StyledForm, StyledTextWrapper } from './styled'

function TodoInput () {
  const targetTodoId = useAppSelector(state => state.app.targetTodoId)
  const isAuth = useAppSelector(state => state.auth.isAuth)
  const dispatch = useAppDispatch()
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

  const closingModalDispatch = () => { dispatch(changeModalShow({ isLoading: false, isModalShow: false, targetTodoId: '' })) }

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const text = new FormData(event.currentTarget).get('text') as string

    if (text.length < 4) {
      setErrorText('Need more then 4 symbols!')
      WrapperRef.current?.classList.add('shaking')

      setTimeout(() => {
        WrapperRef.current?.classList.remove('shaking')
      }, 1000)
    } else if (isAuth) {
      console.log('auth')
    } else {
      dispatch(modifyOffline({ todoId: targetTodoId, title: text, isDone: false }))
      closingModalDispatch()
    }
  }

  const onCancelHandler = () => {
    closingModalDispatch()
  }

  const onKeyEscHandler = (event: KeyboardEvent) => {
    if (event.key === 'Esc' || event.key === 'Escape') {
      closingModalDispatch()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyEscHandler)

    return () => {
      document.removeEventListener('keydown', onKeyEscHandler)
    }
  }, [])

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <StyledTextWrapper ref={WrapperRef}>
        <StyledError ref={errorRef}></StyledError>
        <textarea name="text" placeholder="Enter text here"></textarea>
      </StyledTextWrapper >

      <p>
        <StyledBtn type="submit">ok</StyledBtn>
        <StyledBtn type="button" onClick={onCancelHandler}>cancel</StyledBtn>
      </p>
    </StyledForm>
  )
}

export default TodoInput
