import { StyledAuthIn, StyledAuthOut, StyledAuthSection, StyledUser } from './styled'
import { useState } from 'react'
import LoginForm, { LOGIN, REGISTER } from '../input-form/input-form'
import { useAppSelector } from '../../../redux/redux-hooks'
import { useAppDispatch } from './../../../redux/redux-hooks'
import { changeAuthState } from '../../../redux/slices/authSlice'
import { show } from '../../../redux/slices/noteSlice'
import { setTodos } from '../../../redux/slices/todosSlice'
import { Button } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'

function Auth () {
  const { isAuth, userName } = useAppSelector((state) => state.auth)
  const [isLoginFormShow, setIsLoginFormShow] = useState(false)
  const [isRegFormShow, setIsRegFormShow] = useState(false)
  const dispatch = useAppDispatch()

  const logoutHandler = () => {
    dispatch(
      changeAuthState({
        isAuth: false,
        userName: '',
        authLoading: false,
        userId: ''
      })
    )
    dispatch(setTodos([]))
    dispatch(show({ message: '', color: '' }))
  }

  return (
    <StyledAuthSection>
      {isAuth
        ? (
        <StyledAuthIn>
          <StyledUser>
            {userName}
            <img src="./user.svg" alt="UserImage" width="30" height="30" />
          </StyledUser>
          <Button
            type="ghost"
            onClick={() => {
              logoutHandler()
            }}
          >
            Logout.. <LogoutOutlined />
          </Button>
        </StyledAuthIn>
          )
        : (
        <StyledAuthOut>
          {isRegFormShow
            ? (
            <LoginForm submitType={REGISTER} />
              )
            : (
            <Button
              type="ghost"
              onClick={() => {
                setIsRegFormShow(true)
                setIsLoginFormShow(false)
              }}
            >
              Registration
            </Button>
              )}
          {isLoginFormShow
            ? (
            <LoginForm submitType={LOGIN} />
              )
            : (
            <Button
              type="ghost"
              onClick={() => {
                setIsLoginFormShow(true)
                setIsRegFormShow(false)
              }}
            >
              Login
            </Button>
              )}
        </StyledAuthOut>
          )}
    </StyledAuthSection>
  )
}

export default Auth
