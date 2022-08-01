
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'

export type Todo = {
    todoId: string;
    todoTitle: string;
    isDone: boolean
}

export interface TodosState{
    todos: Todo[]
}

const initialState: TodosState = {
  todos: [{ todoId: '0', todoTitle: 'New ToDo', isDone: false }]
}

export const getTodos = createAsyncThunk('todos/getTodos', async (_, { rejectWithValue, dispatch }) => {
  const token = Cookies.get('jwt')
  if (token) {
    axios.get('http://localhost:5500/todos', { headers: { Authorization: `Bearer ${token}` } }).then(res => {
      dispatch(setTodos(res.data))
    })
  }
})

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
    },
    removeTodo: (state, action: PayloadAction<Pick<Todo, 'todoId'>>) => {
      state.todos = state.todos.filter(todo => todo.todoId !== action.payload.todoId)
    },
    modifyTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex(todo => todo.todoId === action.payload.todoId)
      state.todos[index].todoTitle = action.payload.todoTitle
      state.todos[index].isDone = action.payload.isDone
    },
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = [...action.payload]
    }
  }
})

export const { addTodo, removeTodo, modifyTodo, setTodos } = todosSlice.actions
export default todosSlice.reducer
