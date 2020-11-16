import { connection } from "..";

export const removeRecipe = async (id: string): Promise<void> => {
    await connection ("recipes_cookenu")
      .where ('id_recipe', id)
      .del()
  }