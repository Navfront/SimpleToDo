
import { StyledLoginForm } from './styled'
import { useAppDispatch, useAppSelector } from './../../../redux/redux-hooks'
import { sagaLogin, sagaRegister } from '../../../redux/saga/saga-actions'
import { Button, Input } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone, LoginOutlined } from '@ant-design/icons'

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
      <Input name='login' type='text' placeholder='Login'/>
    <Input.Password name='password' type='password' autoComplete='on' placeholder='Password' iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
    <Button type="primary">{submitType} <LoginOutlined /> <img width='16' height='16' src='./loadingButton.gif' alt='#' style={{ display: isAuthLoading ? '' : 'none' }}/></Button>
    </StyledLoginForm>
}

export default InputForm
