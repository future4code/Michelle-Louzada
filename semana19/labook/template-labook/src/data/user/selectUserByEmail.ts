import { connection } from "../.."
import { User } from "../../model/User"

export default async function selectUserByEmail(
    email: string
 ): Promise<User> {
    try {
       const result = await connection("to_do_list_users")
          .select("*")
          .where({ email })
 
       return {
          id: result[0].id,
          name: result[0].name,
          email: result[0].email,
          password: result[0].password
       }
 
    } catch (error) {
       throw new Error(error.slqMessage || error.message)
    }
 }