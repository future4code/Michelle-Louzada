import { connection } from "..";
import { UserInput } from "../types/types";


export const insertUser = async (data: UserInput ): Promise<void> => {
  const {id, email, cypherPassword, name, role} = data;
  const password: string = cypherPassword
  await connection ("users_cookenu")
    .insert({id, email, password, name, role});
}