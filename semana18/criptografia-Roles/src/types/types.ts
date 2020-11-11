export type User = {
    id: string,
    email: string,
    password: string,
    role: USER_ROLES
  }

  export enum USER_ROLES {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}

export type UserInput = {
  id: string,
  email: string,
  cypherPassword: string,
  role: USER_ROLES
}
