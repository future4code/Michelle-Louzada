
import userDatabase from "../../data/user/userDatabase"
import { InputUser, UserClass } from "../../model/User"
import { generateToken } from "../../services/authenticator"
import { hash } from "../../services/hashManager"
import { generateId } from "../../services/idGenerator"


export const createUserBusiness = async (input: InputUser): Promise<string> => {

    try {
        let message = "Success!"

        const { name, email } = input

        if (!name || !email || !input.password) {
            message = '"name", "email" and "password" must be provided'
            throw new Error(message)
         }
   
         const id: string = generateId()
   
         const password = await hash(input.password);

         const data: UserClass = new UserClass (id, name, email, password)
   
         await userDatabase.signup (data)
   
         const token: string = generateToken({ id })
         return token

    }catch(error){
            throw new Error(error.message);  
    }
}
