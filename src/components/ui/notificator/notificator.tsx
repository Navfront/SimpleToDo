import { StyledNotificatorWrapper } from './styled'

import { useAppSelector } from '../../../redux/redux-hooks'

export const ERROR_COLOR = '#ff5252'
export const SUCCESS_COLOR = 'lightgreen'

function Notificator () {
  const note = useAppSelector(state => state.note)

  return <div>
        <StyledNotificatorWrapper color={note.color}>
            {note.message}
        </StyledNotificatorWrapper>
    </div>
}

export default Notificator
