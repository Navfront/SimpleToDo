
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Todo = {
    todoId: string;
    title: string;
    isDone: boolean
}

export interface TodosState{
    todos: Todo[]
}

const initialState: TodosState = {
  todos: []
}

export type CreateTodoResponse = {
  todo: Todo;
}

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
