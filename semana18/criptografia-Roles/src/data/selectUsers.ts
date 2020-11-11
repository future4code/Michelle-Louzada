import { connection } from ".."
import { User } from "../types/types";

export const selectUsers = async (
  id: string, email: string | null = null
): Promise<User[]> => {
  return await connection("users_exericio_autenticacao")
    .select("id", "email", "password")
    .where("id", id)
    .orWhere("email", email);
}