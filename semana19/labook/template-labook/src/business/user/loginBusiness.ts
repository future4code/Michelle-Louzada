import { compare } from "../../services/hashManager";
import selectUserByEmail from "../../data/user/selectUserByEmail";
import { InputLogin, User } from "../../model/User";
import { generateToken } from "../../services/authenticator";


export const loginBusiness = async (input: InputLogin): Promise<string> => {

    let message = "Success!"

    const { email, password } = input

    try {
        if (!email || !password) {
            message = '"email" and "password" must be provided'
            throw new Error(message)
         }
   
         const user: User = await selectUserByEmail(email)

         if (!user) {
            message = "Usuário não encontrado ou senha incorreta"
            throw new Error(message)
         }
   
         const passwordIsCorrect: boolean = await compare(password, user.password)
   
         if (!passwordIsCorrect) {
            message = "Invalid credentials"
            throw new Error(message)
         }
   
         const token: string = generateToken({
            id: user.id
         })

         return token

    }catch(error){
        throw new Error(error.message);
    }
}
