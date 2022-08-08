import { PropsWithChildren } from 'react'
import { useAppSelector } from '../../../redux/redux-hooks'
import { useAppDispatch } from './../../../redux/redux-hooks'
import { addOffline } from '../../../redux/slices/offlineSlice'
import { v4 as uuidv4 } from 'uuid'
import { sagaAddTodo } from '../../../redux/saga/saga-actions'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

function AddButton ({ children }:PropsWithChildren) {
  const { isAuth } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  const onClickHandler = () => {
    if (isAuth) {
      dispatch(sagaAddTodo())
    } else {
      dispatch(addOffline({ todoId: uuidv4(), title: 'New ToDo', isDone: false }))
    }
  }
  return <Button type="primary" shape='round' size='large' onClick={() => { onClickHandler() }}>Add <PlusOutlined /></Button>
}

export default AddButton
