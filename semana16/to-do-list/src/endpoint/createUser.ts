import {Request, Response} from "express"
import { createNewUser} from "../data/createNewUser";
import { getUsers } from "../data/getUsers"
export type User = {
    id: number,
    name: string,
    nickname: string,
    email: string
 }

export const createUser = async (req: Request, res: Response): Promise<void> => {
   try {

      const { id, name, nickname, email } = req.body;

      const users: User[] = await getUsers()

      const user: User | undefined = users.find(
         user => user.id === id
      )

      if (user) {
         res.statusCode = 409
         throw new Error("Id already exists")
      }

     await createNewUser(id, name, nickname, email)

      res.status(201).send("New User created!");
   } catch (error) {
      console.log(error)
      res.send(error.message)
   }
}