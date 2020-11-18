import { connection } from ".."
import { User } from "../types/types";

export const selectUser = async (
  id: string, email: string | null = null
): Promise<User[]> => {
  return await connection("users_cookenu")
    .select("id", "email", "password", "name")
    .where("id", id)
    .orWhere("email", email);
}