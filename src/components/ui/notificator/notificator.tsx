import { StyledNotificatorWrapper } from './styled'

import { useAppSelector } from '../../../redux/redux-hooks'

function Notificator () {
  const note = useAppSelector(state => state.note)

  return <div>
        <StyledNotificatorWrapper color={note.color}>
            {note.message}
        </StyledNotificatorWrapper>
    </div>
}

export default Notificator
