import React, { FormEvent, RefObject, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/redux-hooks'
import { sagaModify } from '../../../redux/saga/saga-actions'
import { changeModalShow } from '../../../redux/slices/appSlice'
import { modifyOffline } from '../../../redux/slices/offlineSlice'

import { StyledError, StyledForm, StyledTextWrapper } from './styled'
import { Button } from 'antd'
import TextArea from 'antd/lib/input/TextArea'

function TodoInput () {
  const targetTodoId = useAppSelector(state => state.app.targetTodoId)
  const isAuth = useAppSelector(state => state.auth.isAuth)
  const dispatch = useAppDispatch()
  const wrapperRef = React.createRef<HTMLDivElement>()
  const submitRef = React.createRef<HTMLButtonElement>()
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
      wrapperRef.current?.classList.add('shaking')

      setTimeout(() => {
        wrapperRef.current?.classList.remove('shaking')
      }, 1000)
    } else if (isAuth) {
      dispatch(sagaModify({ todoId: targetTodoId, title: text, isDone: false }))
      closingModalDispatch()
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
      <StyledTextWrapper ref={wrapperRef}>
        <StyledError ref={errorRef}></StyledError>
        <TextArea name="text" placeholder="Enter text here"></TextArea>
      </StyledTextWrapper >

      <p>
        <Button type="primary" shape='round' onClick={() => { submitRef.current?.click() }}>Ok</Button>
        <Button type="primary" shape='round' onClick={onCancelHandler}>Cancel</Button>
        <button ref={submitRef} type='submit' hidden></button>
      </p>
    </StyledForm>
  )
}

export default TodoInput
