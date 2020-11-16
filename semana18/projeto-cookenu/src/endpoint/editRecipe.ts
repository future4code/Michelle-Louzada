import { Response, Request } from 'express'
import { selectRecipes } from '../data/selectRecipes'
import {updateRecipe}  from '../data/updateRecipe'
import { dateNow, formatDateStr, formatDateToDB } from '../functions/handleDate'
import { getTokenData } from '../services/authenticator'
import { AuthenticationData, Recipe, UpdateRecipe } from '../types/types'

export default async function editRecipe(
    req: Request,
    res: Response
){
    try {

        const token: string = req.headers.authorization as string

        const tokenData: AuthenticationData = await getTokenData(token)

        const userId: string = tokenData.id

        const {title, description } = req.body;

        const createdAt = formatDateToDB(dateNow())

        if(!title && !description ){

            res.status(400).send({
                messege: "choose at least one value to change between 'title' and 'description'"
            })
        }

        const id: string = req.params.id;

        const recipes: Recipe[] = await selectRecipes(id, userId);
        recipes.forEach(recipe => {
            if(recipe.userId !== userId) {
                res.statusCode = 406;
                throw new Error("the user can only update his own posted recipes");
            }
            if(recipe.id !== id) {
                res.statusCode = 406;
                throw new Error("id not registred");
            }
        });

        const data: UpdateRecipe = {id, title, description, createdAt, userId}

        await updateRecipe(data)

        const updateRec: Recipe = (await selectRecipes(id, title))[0];

        res.status(200).send({
            messege: "recipe updated successfully!",
            recipe: {
                ...updateRec, 
                createdAt: formatDateStr(updateRec.createdAt),
              }

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