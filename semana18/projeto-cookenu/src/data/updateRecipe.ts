import { connection } from "..";
import { UpdateRecipe } from "../types/types";

export const updateRecipe = async(data: UpdateRecipe): Promise<void> => {
    const {id, title, description} = data

    if(title) {
        await connection.raw(`
        UPDATE recipes_cookenu
        SET title = '${title}'
        WHERE id_recipe = '${id}'
        `)
    }

    if(description) {
        await connection.raw(`
        UPDATE recipes_cookenu
        SET description = '${description}'
        WHERE id_recipe = '${id}'
        `)
    }

}
  