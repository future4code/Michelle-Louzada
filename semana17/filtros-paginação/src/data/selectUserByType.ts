import { connection } from "..";
import { TYPES_USERS, User } from "../types/User";

export const selectUserByType = async (type: string): Promise<User[]> => {
    const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE type LIKE "%${type}%"
    `)

    return result[0]
}