import {connection} from "../index"
import { User } from "../endpoint/createUser";

export async function getUsers():Promise<User[]> {
   try {
      const result = await connection.raw("SELECT * FROM to_do_list_users")

      console.log(result[0])

      return result[0]
   } catch (error) {
      console.log(error)
      return []
   }
}