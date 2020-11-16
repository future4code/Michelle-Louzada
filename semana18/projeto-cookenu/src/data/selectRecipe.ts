import { connection } from ".."
import { Recipe } from "../types/types";

export const selectRecipe = async (
  id: string, userId: string, title: string | null = null
): Promise<Recipe[]> => {
  return await connection("recipes_cookenu").select(
      "id_recipe as id",
      "title",
      "description",
      "createdAt",
      "user_id as userId",
      "user_name as userName"
    ).where("id_recipe", id).orWhere("user_id", userId).orWhere("user_id", title);
}