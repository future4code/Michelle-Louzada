import { connection } from ".."

export const selectAllRecipes = async (): Promise<any[]> => {
  return await connection("recipes_cookenu").select("*");
}