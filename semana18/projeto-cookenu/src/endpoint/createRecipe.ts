import { Request, Response } from "express"
import { dateNow, formatDateStr, formatDateToDB } from "../functions/handleDate"
import { InputRecipe, Recipe, User } from "../types/types";
import { generateId } from "../services/idGenerator";
import {insertRecipe} from '../data/insertRecipe'
import {selectRecipes} from '../data/selectRecipes'
import { AuthenticationData, getTokenData } from "../services/authenticator";
import { selectUser } from "../data/selectUser";

export const createRecipe = async (
  req: Request, res: Response
): Promise<void> => {
  try {
    const token: string = req.headers.authorization as string

    const tokenData: AuthenticationData = await getTokenData(token)

    const userId: string = tokenData.id

    const user: User = (await (selectUser(userId)))[0];

    if(!user) {
        throw new Error("'id' not registered");
    }

    const userName: string = user.name

    const {title, description } = req.body;

    if(!title || !description ){
      throw new Error("Missing data for requested operation");
    }

    const createdAt = formatDateToDB(dateNow())

    const id: string = generateId()

    const recipes: Recipe[] = await selectRecipes(id, title);
    recipes.forEach(recipe => {
      if(recipe.id === id){
        res.statusCode = 406;
        throw new Error("'id' already registered");
      }
      if(recipe.title === title){
        res.statusCode = 406;
        throw new Error("'title' already registered");
      }
    });
    
    const data: InputRecipe = {id, title, description, createdAt, userId, userName}

    await insertRecipe(data);

    const createdRecipe: Recipe = (await selectRecipes(id))[0];

    res.status(201).send({
      message: "Success creating Recipe",
      recipe: {
        ...createdRecipe, 
        createdAt: formatDateStr(createdRecipe.createdAt),
      }
    });
  } catch (error) {
    let { message } = error

    if (
       message === "jwt must be provided" ||
       message === "invalid signature" ||
       message === "jwt expired"
    ) {
       res.statusCode = 401
       message = "not authorized"
    }

    res.send({
       message
    })
 }
}