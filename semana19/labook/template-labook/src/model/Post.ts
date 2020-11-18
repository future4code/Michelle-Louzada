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

 export type PostData = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: string,
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

export function dateNow(){
    var data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    return diaF+"/"+mesF+"/"+anoF;
 }
 
 export const formatDateToDB = (dateStr: string): string => {
    const [day, month, year] = dateStr.split("/");
    return `${year}-${month}-${day}`;
  }
  
  export const formatDateStr = (date: Date): string => {
    const day: string = String(date.getDate()).padStart(2, '0');
    const month: string = String(date.getMonth() + 1).padStart(2, '0');
    const year: string = String(date.getFullYear()).padStart(2, '0');
    return `${day}/${month}/${year}`
  }