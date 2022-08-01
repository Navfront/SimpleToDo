type Todo = {
    todoId: string;
    todoTitle: string;
    isDone: boolean
}

export default class LocalStorageApi {
  storageType: boolean
  constructor (isAuth: boolean) {
    this.storageType = isAuth
  }

  static setInLocalStorage (usernamePrefix: string = 'default', value: any, key: string = 'todos') {
    localStorage.setItem(`${usernamePrefix}-${key}`, JSON.stringify(value))
  }

  static getFromLocalStorage (usernamePrefix: string = 'default', key: string = 'todos'): Array<Todo> | undefined {
    const data = localStorage.getItem(`${usernamePrefix}-${key}`)
    if (data) { return JSON.parse(data) } else return undefined
  }

  static hasKey (usernamePrefix: string = 'default', key: string = 'todos') {
    if (localStorage.getItem(`${usernamePrefix}-${key}`)) { return true } else { return undefined }
  }

  static addTodoToLocalStorage (usernamePrefix: string, todo: Todo) {
    const current = LocalStorageApi.getFromLocalStorage(usernamePrefix)
    if (current) {
      current.push(todo)
      LocalStorageApi.setInLocalStorage(usernamePrefix, JSON.stringify(current))
    } else {
      throw new Error('Can\'t add to local storage!')
    }

    return true
  }

  static removeTodoFromLocalStorage (usernamePrefix: string, todoId: string) {
    const current = LocalStorageApi.getFromLocalStorage(usernamePrefix)
    if (current) {
      const result = current.filter((todo) => todo.todoId !== todoId)
      LocalStorageApi.setInLocalStorage(usernamePrefix, JSON.stringify(result))
    } else {
      throw new Error('Can\'t remove from local storage!')
    }
    return true
  }

  static updateTodoInLocalStorage (usernamePrefix: string, todo: Todo) {
    const todos = LocalStorageApi.getFromLocalStorage(usernamePrefix)
    if (todos) {
      const index = todos.findIndex(it => it.todoId === todo.todoId)
      const sliced = todos.slice(0, index).concat({ ...todo }, todos.slice(index + 1))
      LocalStorageApi.setInLocalStorage(usernamePrefix, JSON.stringify(sliced))
    } else {
      throw new Error('Can\'t update to local storage!')
    }

    return true
  }
}
