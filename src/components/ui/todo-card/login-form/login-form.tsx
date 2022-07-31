import { StyledInput, StyledLoginForm } from './styled'

function LoginForm () {
  return <StyledLoginForm>
      <StyledInput type='text' placeholder='Login'/>
      <StyledInput type='password' placeholder='Password'/>
    </StyledLoginForm>
}

export default LoginForm
