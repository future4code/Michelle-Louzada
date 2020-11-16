import { Request, Response } from "express"
import { AuthenticationData, Recipe } from "../types/types";
import { getTokenData } from "../services/authenticator";
import { selectRecipes } from "../data/selectRecipes";
import { formatDateStr } from "../functions/handleDate";

export const getRecipesById = async (
    req: Request, res: Response
): Promise<void> => {
    try {
        const token: string = req.headers.authorization as string

        const tokenData: AuthenticationData = await getTokenData(token)

        const userId: string = tokenData.id
        
        const id: string = req.params.id;

        const recipe: Recipe = (await (selectRecipes(id, userId)))[0];

        if(!recipe) {
            throw new Error("'id' not registered");
        }

        res.status(200).send({
            recipe: {
              ...recipe, 
              createdAt: formatDateStr(recipe.createdAt),
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