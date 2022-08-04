
import { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'
import { StyledModal } from './styled'

function Modal ({ children }: PropsWithChildren) {
  return createPortal(<StyledModal>{children}</StyledModal>, document.getElementById('modal')!)
}

export default Modal
