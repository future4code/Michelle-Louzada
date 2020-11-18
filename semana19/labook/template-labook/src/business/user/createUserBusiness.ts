import { connection } from "../.."
import { insertUser } from "../../data/user/insertUser"
import { InputUser, UserInsert } from "../../model/User"
import { generateToken } from "../../services/authenticator"
import { hash } from "../../services/hashManager"
import { generateId } from "../../services/idGenerator"


export const createUserBusiness = async (input: InputUser): Promise<string> => {

    try {
        let message = "Success!"

        const { name, email, password } = input

        if (!name || !email || !password) {
            message = '"name", "email" and "password" must be provided'
            throw new Error(message)
         }
   
         const id: string = generateId()
   
         const cypherPassword = await hash(input.password);

         const data: UserInsert = {id, name, email, cypherPassword}
   
         await insertUser (data)
   
         const token: string = generateToken({ id })
         return token

    }catch(error){
            throw new Error(error.message);  
    }
}
