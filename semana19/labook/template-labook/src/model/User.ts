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