import {Request, Response} from "express"
import { createNewUser} from "../data/createNewUser";
import { getUsers } from "../data/getUsers"
export type User = {
    id: string,
    name: string,
    nickname: string,
    email: string
 }

export const createUser = async (req: Request, res: Response): Promise<void> => {
   try {

      if(!req.body.name ||
         !req.body.nickname ||
         !req.body.email
         ){
            res
               .status(400)
               .send('Preencha os campos "name", "nickname" e "email"')

               return
         }

      const id: string = Date.now() + Math.random().toString()

      const { name, nickname, email } = req.body;

      const users: User[] = await getUsers()

      const user: User | undefined = users.find(
         user => user.email === email
      )

      if (user) {
         res.statusCode = 409
         throw new Error("Usuário já possui cadastro")
      }

     await createNewUser(id, name, nickname, email)

      res.status(201).send("New User created!");
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessege)
   }
}