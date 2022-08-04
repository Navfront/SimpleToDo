import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slices/appSlice'
import authReducer from './slices/authSlice'
import todosReducer from './slices/todosSlice'
import noteReducer from './slices/noteSlice'
import thunk from 'redux-thunk'

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    todos: todosReducer,
    note: noteReducer

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  enhancers: []
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
