enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }
 
 export type Post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: string,
    author_id: string
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

 export class PostClass {
    private id: string
    private description: string
    private photo: string
    private created_at: string
    private type: POST_TYPES
    private author_id: string
 
    constructor(
       id: string,
       description: string,
       photo: string,
       createdAt: string,
       type: POST_TYPES,
       authorId: string
 
    ) {
       this.id = id
       this.description = description
       this.photo = photo
       this.created_at = createdAt
       this.author_id = authorId
       this.type = type
    }
 
    public getId = (): string => this.id
    public getDescription = (): string => this.description
    public getPhoto = (): string => this.photo
    public getCreatedAt = (): string => this.created_at
    public getAuthorId = (): string => this.author_id
    public getType = (): POST_TYPES => this.type
 
 }

 export function stringToPostRole(type: string): POST_TYPES {
   if(type.toUpperCase() === POST_TYPES.EVENT){
       return POST_TYPES.EVENT
   }else if(type.toUpperCase() === POST_TYPES.NORMAL){
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

 export function dateH() {
const data = new Date();

// Guarda cada pedaço em uma variável
const dia     = data.getDate();           // 1-31
const mes     = data.getMonth();          // 0-11 (zero=janeiro)
const ano4    = data.getFullYear();       // 4 dígitos
const hora    = data.getHours();          // 0-23
const min     = data.getMinutes();        // 0-59
const seg     = data.getSeconds();        // 0-59

const str_data = ano4 + '-' + (mes+1) + '-' + dia;
const str_hora = hora + ':' + min + ':' + seg;

return (`${str_data}, ${str_hora}`) 


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