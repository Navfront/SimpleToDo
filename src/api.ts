import axios from 'axios'

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

export async function addTodoFetch () {
  const result = await axiosInst.post<string, any>('todos', { todoId: '', title: '', isDone: false })
  return result
}

export async function getUserDataFetch (username: string, token: string) {
  const result = await axiosInst.post<string, any>('users', { login: username }, { headers: { authorization: `Bearer ${token}` } })
  return result.data
}
