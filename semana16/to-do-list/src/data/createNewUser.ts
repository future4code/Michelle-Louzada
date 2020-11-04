import {connection} from "../index"

export async function createNewUser(
   id: string,
   name: string,
   nickname: string,
   email: string
): Promise<void> {
   try {
      await connection.raw(`
         INSERT INTO to_do_list_users (id, name, nickname, email) VALUES (
            "${id}",
            "${name}",
            "${nickname}",
            "${email}"
         );
      `)

      console.log("Sucesso")
   } catch (error) {
      console.log(error)
   }
}