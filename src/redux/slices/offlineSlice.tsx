import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo, TodosState } from './todosSlice'

const initialState: TodosState = {
  todos: [{ todoId: '0', title: 'New ToDo', isDone: false }]
}

export const todosSlice = createSlice({
  name: 'offline',
  initialState,
  reducers: {
    addOffline: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
    },
    removeOffline: (state, action: PayloadAction<Pick<Todo, 'todoId'>>) => {
      state.todos = state.todos.filter(todo => todo.todoId !== action.payload.todoId)
    },
    modifyOffline: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex(todo => todo.todoId === action.payload.todoId)
      state.todos[index].title = action.payload.title
      state.todos[index].isDone = action.payload.isDone
    },
    setOffline: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload
    }
  }
})

export const { addOffline, removeOffline, modifyOffline, setOffline } = todosSlice.actions
export default todosSlice.reducer
