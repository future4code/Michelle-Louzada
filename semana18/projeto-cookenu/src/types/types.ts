export type User = {
    id: string,
    email: string,
    password: string,
    name: string,
    role: USER_ROLES
  }

  export type UserInput = {
    id: string,
    email: string,
    cypherPassword: string,
    name: string,
    role: USER_ROLES
  }

  export type Recipe = {
    id: string,
    title: string,
    description: string,
    createdAt: Date
  }

  export type InputRecipe = {
    id: string,
    title: string,
    description: string,
    createdAt: string,
    userId: string,
    userName: string
  }

  export type Follow = {
    id: string,
    followerId: string
  }

  export type Unfollow = {
    id: string,
    unfollowerId: string
  }
  export type AuthenticationData = {
    id: string,
    role: USER_ROLES
 }
 
 export enum USER_ROLES {
  NORMAL = 'NORMAL',
  ADMIN = 'ADMIN'
}