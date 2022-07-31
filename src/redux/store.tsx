import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slices/appSlice'
import authReducer from './slices/authSlice'
import todosReducer from './slices/todosSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    todos: todosReducer

  },
  middleware: [],
  enhancers: []
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
