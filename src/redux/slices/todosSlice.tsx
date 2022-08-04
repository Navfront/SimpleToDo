
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'

export type Todo = {
    todoId: string;
    title: string;
    isDone: boolean
}

export interface TodosState{
    todos: Todo[]
}

const initialState: TodosState = {
  todos: [{ todoId: '0', title: 'New ToDo', isDone: false }]
}

export const getTodos = createAsyncThunk('todos/getTodos', async (username: string, { rejectWithValue, dispatch }) => {
  const token = Cookies.get('jwt')
  console.log('gettoken', token)

  if (token) {
    axios.get('http://localhost:5500/todos', { headers: { Authorization: `Bearer ${token}` } }).then(res => {
      dispatch(setTodos(res.data))
    })
  }
})

type ThunkDataDelete = {
  username: string,
  todoId: string
}

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (data: ThunkDataDelete, { rejectWithValue, dispatch }) => {
  const token = Cookies.get('jwt')
  axios.delete('http://localhost:5500/todos', { headers: { Authorization: `Bearer ${token}` }, data }).then(() => {
    dispatch(removeTodo({ todoId: data.todoId }))
  })
})

type ThunkDataTodo = {
  username: string,
  todo: Todo;
}

type CreateTodoResponse = {
  todo: Todo;
}
export const createTodo = createAsyncThunk('todos/createTodo', async (data: ThunkDataTodo, { rejectWithValue, dispatch }) => {
  const token = Cookies.get('jwt')
  console.log('posttoken', token)
  axios.post<Promise<any>, CreateTodoResponse>('http://localhost:5500/todos', { data: data.todo }, { headers: { Authorization: `Bearer ${token}` } }).then(() => {
    dispatch(addTodo(data.todo))
  })
})

export const updateTodo = createAsyncThunk('todos/updateTodo', async (data: ThunkDataTodo, { rejectWithValue, dispatch }) => {
  const token = Cookies.get('jwt')
  axios.put('http://localhost:5500/todos', data.todo, { headers: { Authorization: `Bearer ${token}` } }).then(() => {
    dispatch(modifyTodo(data.todo))
  })
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
      state.todos[index].title = action.payload.title
      state.todos[index].isDone = action.payload.isDone
    },
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload
    }
  }
})

export const { addTodo, removeTodo, modifyTodo, setTodos } = todosSlice.actions
export default todosSlice.reducer
