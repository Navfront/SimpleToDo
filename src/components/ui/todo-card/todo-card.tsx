
import { StyledButtonsWrapper, StyledTitle } from './styled'
import { useAppDispatch, useAppSelector } from '../../../redux/redux-hooks'

import { modifyOffline, removeOffline } from '../../../redux/slices/offlineSlice'
import { changeModalShow } from '../../../redux/slices/appSlice'
import { sagaDeleteTodo, sagaToggleDone } from '../../../redux/saga/saga-actions'
import { Button, Card } from 'antd'
import { CheckOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'

type TodoCardProps = {
  todoId: string;
  title: string;
  isDone?: boolean;
};

function TodoCard ({ todoId, title, isDone = false }: TodoCardProps) {
  const { isAuth } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  const onDeleteHandler = () => {
    if (isAuth) {
      dispatch(sagaDeleteTodo(todoId))
    } else {
      dispatch(removeOffline({ todoId }))
    }
  }

  const onModifyHandler = () => {
    if (isAuth) {
      dispatch(changeModalShow({ isLoading: false, isModalShow: true, targetTodoId: todoId }))
    } else {
      dispatch(changeModalShow({ isLoading: false, isModalShow: true, targetTodoId: todoId }))
    }
  }

  const onDoneHandler = () => {
    if (isAuth) {
      dispatch(sagaToggleDone({ todoId, title, isDone: !isDone }))
    } else {
      dispatch(modifyOffline({ todoId, title, isDone: !isDone }))
    }
  }

  return (
    <Card >
      <StyledTitle isDone={isDone}>{title}</StyledTitle>
      <StyledButtonsWrapper>
        <Button shape="round" onClick={onDeleteHandler}><DeleteOutlined /></Button>
        <Button shape="round" onClick={onModifyHandler}><EditOutlined /></Button>
        <Button shape="round" onClick={onDoneHandler}><CheckOutlined /></Button>
      </StyledButtonsWrapper>
    </Card>
  )
}

export default TodoCard
