import {connection} from "../index"

export async function createNewUser(
   id: number,
   name: string,
   nickname: string,
   email: string
): Promise<void> {
   try {
      await connection.raw(`
         INSERT INTO pokemons (id, name, type) VALUES (
            ${id},
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