import { connection } from ".."
import { Recipe } from "../types/types";

export const selectRecipes = async (
  id: string, title: string | null = null
): Promise<Recipe[]> => {
  return await connection("recipes_cookenu").select(
      "id_recipe as id",
      "title",
      "description",
      "createdAt"
    ).where("id_recipe", id).orWhere("title", title);
}