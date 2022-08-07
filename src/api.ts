import axios from 'axios'

const axiosInst = axios.create({
  baseURL: 'http://localhost:5500/'
})

type TokenResponse = { data: {token: string} }

export async function registerUser (login: string, password: string) {
  const result = await axiosInst.post<string, TokenResponse>('auth/registration', { login, password })
  console.log(result.data)
  return result
}

export async function loginUser (login: string, password: string) {
  const result = await axiosInst.post<string, TokenResponse>('auth/login', { login, password })
  console.log(result.data)
  return result
}
