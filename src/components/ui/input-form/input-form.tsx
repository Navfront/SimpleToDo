
import { StyledInput, StyledLoginBtn, StyledLoginForm } from './styled'
import { useAppDispatch, useAppSelector } from './../../../redux/redux-hooks'
import { sagaLogin, sagaRegister } from '../../../redux/saga/saga-actions'

type LoginFormProps = {
  submitType: 'Register' | 'Login'
}

export const REGISTER = 'Register'
export const LOGIN = 'Login'

function InputForm ({ submitType }: LoginFormProps) {
  const dispatch = useAppDispatch()
  const isAuthLoading = useAppSelector(state => state.auth.authLoading)

  const submitHandler = (evt: any) => {
    evt.preventDefault()
    const fields = new FormData(evt.target)
    const login = fields.get('login')! as string
    const password = fields.get('password')! as string
    switch (submitType) {
      case LOGIN:
        dispatch(sagaLogin(login, password))
        break
      case REGISTER:
        dispatch(sagaRegister(login, password))
        break
    }
  }

  return <StyledLoginForm onSubmit={submitHandler}>
      <StyledInput name='login' type='text' placeholder='Login'/>
    <StyledInput name='password' type='password' autoComplete='on' placeholder='Password' />
    <StyledLoginBtn type="submit">{submitType} <img width='16' height='16' src='./loadingButton.gif' alt='#' style={{ display: isAuthLoading ? '' : 'none' }}/></StyledLoginBtn>
    </StyledLoginForm>
}

export default InputForm