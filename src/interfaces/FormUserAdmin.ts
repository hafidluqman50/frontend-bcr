export interface CreateFormUserAdmin {
  name: string
  email: string
  password: string
}

export interface UpdateFormUserAdmin {
  name: string|null
  email: string|null
  password: string|null
}