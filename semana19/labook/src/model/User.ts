export type AuthenticationData = {
    id: string
 }
 
 export type User = {
    id: string,
    name: string,
    email: string,
    password: string
 }

 export interface InputUser {
    name: string,
    email: string,
    password: string
 }

 export type UserInsert = {
   id: string,
   name: string,
   email: string,
   cypherPassword: string
}

export interface InputLogin{
   email: string,
   password: string
}


export class UserClass {
   private id: string
   private name: string
   private email: string
   private password: string

   constructor(
      id: string,
      name: string,
      email: string,
      password: string,

   ) {
      this.id = id
      this.name = name
      this.email = email
      this.password = password

   }

   public getId = (): string => this.id
   public getName = (): string => this.name
   public getEmail = (): string => this.email
   public getPassword = (): string => this.password

}