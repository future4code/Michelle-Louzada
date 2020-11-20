import { Request, Response } from "express";
import { InputLogin, InputUser, User } from "../model/User";
import userBusiness from "../business/UserBusiness"

class UserController {

  public createUser = async (
    req: Request, res: Response
  ): Promise<void> => { 

    try {
       let message = "Success!"

       const { name, email, password } = req.body

       const input: InputUser = {
           name,
           email,
           password
       }

       const token = await userBusiness.createUser(input);
 
       res.status(201).send({ message, token })
 
    } catch (error) {
      res.statusCode = 400

      if (error.message === "Usuário já existe") res.statusCode = 409

      res.send({
         message: error.message || error.sqlMessage
      })
   }
}

   public async login(
      req: Request,
      res: Response
   ): Promise<void> {

      try {
         let message = "Success!"

         const { email, password } = req.body

         const input: InputLogin = {
         email,
         password
      }

      const token = await userBusiness.login(input);

         res.status(200).send({ message, token })

      }catch (error) {
         let { message } = error
   
         if(message === "Cannot read property 'id' of undefined"){
            message = "Usuário não encontrado ou senha incorreta"
            res.statusCode = 404
         }
         
         if(message === "Field 'name' doesn't have a default value"){
            message = "Insira um nome para seu usuário"
            res.statusCode = 406
         }
         res.send({message})
      }   
   }
}

export default new UserController()