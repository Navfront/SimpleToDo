import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appReducer from './slices/appSlice'
import authReducer from './slices/authSlice'
import todosReducer from './slices/todosSlice'
import noteReducer from './slices/noteSlice'
import thunk from 'redux-thunk'
import offlineReducer from './slices/offlineSlice'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import createSagaMiddleware from 'redux-saga'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import rootSaga from './saga/auth'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['app', 'auth', 'note']
}

const rootReducer = combineReducers({
  offline: offlineReducer,
  app: appReducer,
  auth: authReducer,
  todos: todosReducer,
  note: noteReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }).concat(thunk).concat(sagaMiddleware),
  enhancers: []
})

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
