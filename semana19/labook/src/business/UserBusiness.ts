
import userDatabase from "../data/UserDatabase"
import { InputLogin, InputUser, User, UserClass } from "../model/User"
import idGenerator from "../services/idGenerator";
import hashManager from "../services/hashManager";
import authenticator from "../services/authenticator";


class UserBusiness {

    public async createUser(input: InputUser): Promise<string> {

        try {
            let message = "Success!"
    
            const { name, email } = input
    
            if (!name || !email || !input.password) {
                message = '"name", "email" and "password" must be provided'
                throw new Error(message)
             }
       
             const id: string = idGenerator.generateId()
       
             const password = await hashManager.hash(input.password);
    
             const data: UserClass = new UserClass (id, name, email, password)
       
             await userDatabase.signup (data)
       
             const token = authenticator.generateToken({ id })

             return token
    
        }catch (error) {

            if (error.sqlMessage.includes("Duplicate entry")) {
               throw new Error("Este usuário já existe!");
            }
            throw new Error(error.sqlMessage || error.message);
         }
    }

    public login = async (input: InputLogin): Promise<string> => {

        let message = "Success!"
    
        const { email, password } = input
    
        try {
            if (!email || !password) {
                message = '"email" and "password" must be provided'
                throw new Error(message)
             }
       
             const user: UserClass = await userDatabase.getUserByEmail(email)
    
             if (!user) {
                message = "Usuário não encontrado ou senha incorreta"
                throw new Error(message)
             }
       
             const passwordIsCorrect: boolean = await hashManager.compare(password, user.getPassword())
       
             if (!passwordIsCorrect) {
                message = "Invalid credentials"
                throw new Error(message)
             }
       
             const id: string = user.getId()

             const token = authenticator.generateToken({id})
    
             return token
    
        }catch(error){
            throw new Error(error.message);
        }
    }
}

export default new UserBusiness()