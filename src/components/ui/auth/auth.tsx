/* eslint-disable no-unused-vars */
import { StyledAuthButton, StyledAuthIn, StyledAuthOut, StyledAuthSection, StyledUser } from './styled'
import { useState } from 'react'
import LoginForm, { LOGIN, REGISTER } from '../input-form/input-form'
import { useAppSelector } from '../../../redux/redux-hooks'
import { useAppDispatch } from './../../../redux/redux-hooks'
import { changeAuthState } from '../../../redux/slices/authSlice'

function Auth () {
  const { isAuth, userName } = useAppSelector(state => state.auth)
  const [isLoginFormShow, setIsLoginFormShow] = useState(false)
  const [isRegFormShow, setIsRegFormShow] = useState(false)
  const dispatch = useAppDispatch()

  const logoutHandler = () => {
    dispatch(changeAuthState({
      isAuth: false,
      userName: '',
      token: '',
      authLoading: false
    }))
  }

  return (

        <StyledAuthSection>
            {isAuth
              ? <StyledAuthIn><StyledUser>{userName}<img src="./user.svg" alt="UserImage" width='30' height='30' /></StyledUser>
              <StyledAuthButton type="button" onClick={() => { logoutHandler() }}>Logout..</StyledAuthButton></StyledAuthIn>
              : <StyledAuthOut>
                  {isRegFormShow ? <LoginForm submitType={REGISTER} /> : <StyledAuthButton type="button" onClick={() => { setIsRegFormShow(true); setIsLoginFormShow(false) }}>Registration</StyledAuthButton>}
                  {isLoginFormShow
                    ? <LoginForm submitType={LOGIN} />
                    : <StyledAuthButton type="button" onClick={() => {
                      setIsLoginFormShow(true)
                      setIsRegFormShow(false)
                      console.log('click')
                    }}>Login</StyledAuthButton>}

                </StyledAuthOut>}
    </StyledAuthSection>
  )
}

export default Auth
