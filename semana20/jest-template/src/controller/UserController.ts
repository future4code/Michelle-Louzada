import { Request, Response } from "express";
import userDatabase from "../data/userDatabase";
import { Buy, User } from '../model/Usuario'

class UserController {

    public buyItens = async (
    ): Promise<void> => { 

      try {
         let message = "Success!"
  
         const  buyItem: number = 400.00

         const id: string  = "12345"

         if (!buyItem) {
            message = 'um valor de item precisa ser adicionado'
            throw new Error(message)
         }

         const user: User = await userDatabase.getUserById(id)
    
         if (!user) {
            message = "Usuário não encontrado"
            throw new Error(message)
         }
         if (Number(user.balance < buyItem)) {
            message = "Saldo menor que o valor comprado"
            throw new Error(message)
         }
         const result: number = Number(user.balance - buyItem)

         await userDatabase.balance (id, buyItem, result)
   
        console.log("deu bom")
   
      } catch (error) {
        console.log("deu ruim")
        }
     }
  }

  
export default new UserController()