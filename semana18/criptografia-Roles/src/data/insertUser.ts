import { connection } from "..";
import { User, UserInput } from "../types/types";


export const insertUser = async (data: UserInput): Promise<void> => {
  const {id, email, cypherPassword, role} = data;
  const password = cypherPassword
  console.log(password)
  await connection ("users_exericio_autenticacao")
    .insert({id, email, password, role});
}