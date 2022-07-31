/* eslint-disable no-unused-vars */
import { StyledAuthButton, StyledAuthIn, StyledAuthOut, StyledAuthSection, StyledUser } from './styled'
import { useState } from 'react'
import LoginForm from './../todo-card/input-form/input-form'
import { LOGIN, REGISTER } from '../todo-card/input-form/input-form'

function Auth () {
  const [isAuth, setIsAuth] = useState(false) // store
  const [isLoginFormShow, setIsLoginFormShow] = useState(false)
  const [isRegFormShow, setIsRegFormShow] = useState(false)

  return (

        <StyledAuthSection>
            {isAuth
              ? <StyledAuthIn><StyledUser>UserName<img src="./user.svg" alt="UserImage" width='30' height='30' /></StyledUser>
              <StyledAuthButton type="button">Logout..</StyledAuthButton></StyledAuthIn>
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
