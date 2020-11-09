import { connection } from "..";
import { User } from "../types/types";


export const insertUser = async (data: User): Promise<void> => {
  const {id, email, password} = data;
  await connection ("users_exericio_autenticacao")
    .insert({id, email, password});
}