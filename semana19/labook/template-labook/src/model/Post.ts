enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }
 
 export type Post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
 }

 export interface InputPost {
    photo: string,
    description: string,
    type: POST_TYPES
 }

 export function stringToPostRole(role: string): POST_TYPES {
   if(role.toUpperCase() === POST_TYPES.EVENT){
       return POST_TYPES.EVENT
   }else if(role.toUpperCase() === POST_TYPES.NORMAL){
       return POST_TYPES.NORMAL
   }else{
       throw new Error("Envie um User Role válido. Os valores válidos são ADMIN ou NORMAL")
   }
}