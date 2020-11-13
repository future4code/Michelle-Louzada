import { Request, Response } from "express"
import { AuthenticationData, Recipe } from "../types/types";
import { getTokenData } from "../services/authenticator";
import { formatDateStr } from "../functions/handleDate";
import { selectAllRecipes } from '../data/selectAllRecipes'

export const getRecipes = async (
    req: Request, res: Response
): Promise<void> => {
    try {
        const token: string = req.headers.authorization as string

        const tokenData: AuthenticationData = await getTokenData(token)
        

        const recipe: Recipe[] = (await (selectAllRecipes()));

        if(!recipe) {
            throw new Error("there is no recipe");
        }

        res.status(200).send({
            recipe
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