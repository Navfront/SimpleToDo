import axios from 'axios'
import { Todo } from './redux/slices/todosSlice'

const axiosInst = axios.create({
  baseURL: 'http://localhost:5500/'
})

type TokenResponse = { data: { token: string } }

export async function registerUser (login: string, password: string) {
  const result = await axiosInst.post<string, TokenResponse>('auth/registration', { login, password })
  return result
}

export async function loginUser (login: string, password: string) {
  const result = await axiosInst.post<string, TokenResponse>('auth/login', { login, password })
  return result
}

export async function getTodosFetch (user: string = 'admin', token: string = '') {
  const result = await axiosInst.get<string, any>(`todos/${user}`, { headers: { authorization: `Bearer ${token}` } })
  return result.data
}

export async function addTodoFetch (userId: string, token: string) {
  const result = await axiosInst.post<string, any>('todos', { userId, title: 'New ToDo' }, { headers: { authorization: `Bearer ${token}` } })
  console.log(result)

  return result
}
// {
//   "todoId": "4",
//   "title": "new added todo!",
//   "isDone": false
// }

export async function deleteTodoFetch (userId: string, todoId: string, token: string) {
  const result = await axiosInst.delete<string, any>('todos', { data: { userId, todoId }, headers: { authorization: `Bearer ${token}` } })
  return result.data
}

// true false

export async function modifyTodoFetch (userId: string, todo: Todo, token: string) {
  const result = await axiosInst.put<string, any>('todos', { userId, todo }, { headers: { authorization: `Bearer ${token}` } })
  return result.data
}

export async function getUserDataFetch (username: string, token: string) {
  const result = await axiosInst.post<string, any>('users', { login: username }, { headers: { authorization: `Bearer ${token}` } })
  return result.data
}
