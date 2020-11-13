export type User = {
    id: string,
    email: string,
    password: string,
    name: string
  }

  export type UserInput = {
    id: string,
    email: string,
    cypherPassword: string,
    name: string
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