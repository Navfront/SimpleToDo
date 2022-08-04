import { StyledNotificatorWrapper } from './styled'
import { useState } from 'react'

function Notificator () {
  const [message, setMessage] = useState({ text: '', color: 'lightred' })

  // eslint-disable-next-line no-unused-vars
  const handleMessageShow = (text: string, color: string) => {
    setMessage({ text, color })
    setTimeout(() => {
      setMessage({ text: '', color: 'black' })
    })
  }

  return <div>
        <StyledNotificatorWrapper color='lightgreen'>
            {message.text}
        </StyledNotificatorWrapper>
    </div>
}

export default Notificator
