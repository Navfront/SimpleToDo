
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Todo = {
    todoId: string;
    todoTitle: string;
    isDone: boolean
}

export interface TodosState{
    todos: Todo[]
}

const initialState: TodosState = {
  todos: []
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
    },
    removeTodo: (state, action: PayloadAction<Pick<Todo, 'todoId'>>) => {
      const index = state.todos.findIndex(todo => todo.todoId === action.payload.todoId)
      if (index >= 0) {
        state.todos = [...state.todos.slice(0, index), ...state.todos.slice(index + 1)]
      }
    },
    modifyTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex(todo => todo.todoId === action.payload.todoId)
      state.todos[index].todoTitle = action.payload.todoTitle
      state.todos[index].isDone = action.payload.isDone
    }
  }
})

export const { addTodo, removeTodo, modifyTodo } = todosSlice.actions
export default todosSlice.reducer
