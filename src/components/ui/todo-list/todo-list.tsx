import { StyledTodoList } from './styled'
import TodoCard from './../todo-card/todo-card'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import loadingIcon from '../todo-card/loading.gif'

function TodoList () {
  const isLoading = useSelector<RootState>(state => state.app.isLoading)
  console.log('rerender')
  return isLoading
    ? <img src={loadingIcon} alt="loading icon" style={{ margin: '0 auto', display: 'block' }}/>
    : <StyledTodoList>

        <li>
            <TodoCard todoId={'123'} title={'First Todo'} isDone={false} />
        </li>
    </StyledTodoList>
}

export default TodoList
