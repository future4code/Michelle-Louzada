import { connection } from "..";
import { InputRecipe } from "../types/types";

export const insertRecipe = async (data: InputRecipe): Promise<void> => {
  const {id, title, description, createdAt, userId, userName} = data;
  console.log(createdAt)
  await connection ("recipes_cookenu")
    .insert({
      id_recipe: id,
      title,
      description,
      createdAt,
      user_id: userId,
      user_name: userName
    });
}