import { Response, Request } from 'express'
import { selectRecipes } from '../data/selectRecipes'
import { selectUser } from '../data/selectUser'
import { getTokenData } from '../services/authenticator'
import { AuthenticationData, Recipe} from '../types/types'
import {removeRecipe} from '../data/removeRecipe'

export default async function deleteRecipe(
    req: Request,
    res: Response
){
    try {

        const token: string = req.headers.authorization as string

        const tokenData: AuthenticationData = await getTokenData(token)

        const userId: string = tokenData.id

        const userRole: string = tokenData.role

        const id: string = req.params.id;

        const recipes: Recipe[] = await selectRecipes(id, userId);
        recipes.forEach(recipe => {
            if(recipe.userId !== userId || userRole !== "ADMIN" ) {
                res.statusCode = 406;
                throw new Error("'NORMAL' users can only delete their own recipes");
            }
        });


        await removeRecipe(id)

        res.status(200).send({
            messege: "recipe remove successfully!",
        })

    }catch (error) {
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