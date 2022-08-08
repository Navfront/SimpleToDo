import { useAppSelector } from '../../../redux/redux-hooks'
import { StyledStatusIcon, StyledStatusWrapper } from './styled'

function AuthStatus () {
  const isAuth = useAppSelector(state => state.auth.isAuth)
  return <StyledStatusWrapper>
      <StyledStatusIcon color={isAuth ? 'lightgreen' : '#ff5252'} />
      <span> {isAuth ? 'Online' : 'Offline'}</span>
  </StyledStatusWrapper>
}

export default AuthStatus
