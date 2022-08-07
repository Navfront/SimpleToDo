
import { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'
import { useAppSelector } from '../../../redux/redux-hooks'
import { StyledModal } from './styled'

function Modal ({ children }: PropsWithChildren) {
  const isModalShow = useAppSelector(state => state.app.isModalShow)
  return isModalShow ? createPortal(<StyledModal>{children}</StyledModal>, document.getElementById('modal')!) : <></>
}

export default Modal
