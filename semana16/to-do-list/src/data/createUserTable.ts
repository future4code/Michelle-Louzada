import {connection} from "../index"

export async function createUserTable():Promise<void>{
   try {
      await connection.raw(`
         CREATE TABLE users (
            id INT PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            nickname VARCHAR(255) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL
         );
      `)

      console.log("Sucesso!")
   } catch (error) {
      console.log(error)
   }
}

// createUserTable()