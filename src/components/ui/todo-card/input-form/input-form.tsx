import { StyledInput, StyledLoginBtn, StyledLoginForm } from './styled'

type LoginFormProps = {
  submitType: 'Register' | 'Login'
}

export const REGISTER = 'Register'
export const LOGIN = 'Login'

function InputForm ({ submitType }: LoginFormProps) {
  return <StyledLoginForm>
      <StyledInput type='text' placeholder='Login'/>
    <StyledInput type='password' placeholder='Password' />
    <StyledLoginBtn type="submit">{submitType}</StyledLoginBtn>
    </StyledLoginForm>
}

export default InputForm
