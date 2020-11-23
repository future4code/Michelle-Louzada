import { Request, Response } from "express";
import userDatabase from "../data/userDatabase";
import { Buy, User } from '../model/Usuario'

class UserController {

    public buyItens = async (
        buy: number,
        idUser: string
    ): Promise<void> => { 

      try {
         let message = "Success!"
  
         const  buyItem: number = buy

         const id: string  = idUser

         const user: User = await userDatabase.getUserById(id)
    
         if (!user) {
            message = "Usuário não encontrado"
            throw new Error(message)
         }
         if (user.balance > buyItem) {
            message = "Saldo menor que o valor comprado"
            throw new Error(message)
         }
         const result: number = user.balance - buyItem

         await userDatabase.balance (id, buyItem, result)
   
        console.log(result)
   
      } catch (error) {
        console.log("deu ruim")
        }
     }
  }

  
export default new UserController()