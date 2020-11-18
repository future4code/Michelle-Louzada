import { connection } from ".."
import { User } from "../types/types"

export default async function selectUserByEmail(
   email: string
): Promise<User> {
   try {
      const result = await connection("users_cookenu")
         .select("*")
         .where({ email })

      return {
         id: result[0].id,
         email: result[0].email,
         password: result[0].password,
         name: result[0].name,
         role: result[0].role
      }

   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}