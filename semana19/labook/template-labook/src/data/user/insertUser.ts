import { connection } from "../connection"
import { UserInsert } from "../../model/User";

export const insertUser = async (data: UserInsert ): Promise<void> => {
  const {id, email, cypherPassword, name } = data;
  const password = cypherPassword
  await connection ("labook_users")
    .insert({id, email, password, name});
}