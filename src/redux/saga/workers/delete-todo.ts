import { call, put, select } from 'typed-redux-saga'
import { deleteTodoFetch } from '../../../api'
import { toggleLoadingMode } from '../../slices/appSlice'
import { removeTodo } from '../../slices/todosSlice'

type RemoveTodoResponse = {
    data: boolean
}

export function * deleteTodoWorker (action: { type: string, payload: string }) {
  console.log(action)

  try {
    yield put(toggleLoadingMode())
    const { token, userId } = yield select(state => state.auth)
    const isRemoved: RemoveTodoResponse = yield call(deleteTodoFetch, userId, action.payload, token)
    if (isRemoved) {
      yield put(removeTodo({ todoId: action.payload }))
    }

    yield put(toggleLoadingMode())
  } catch (error: any) {
    console.log(error)
    yield put(toggleLoadingMode())
  }
}
