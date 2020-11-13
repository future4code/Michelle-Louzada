import { Request, Response } from "express"
import { Follow, User } from "../types/types";
import { selectUser } from "../data/selectUser";
import { AuthenticationData, getTokenData } from "../services/authenticator";
import { insertFollows } from "../data/insertFollow";

export const followUser = async (
    req: Request, res: Response
): Promise<void> => {
    try {
        const token: string = req.headers.authorization as string

        const tokenData: AuthenticationData = await getTokenData(token)
        
        const id: string = req.body.id;
        const followerId: string = tokenData.id

        if(!id ){
            throw new Error("Missing data for requested operation");
          }

        if(id === followerId) {
            throw new Error("same user id, only different ids can follow");
        }

        const user: User = (await (selectUser(followerId)))[0];

        if(!user) {
            throw new Error("'id' not registered");
        }

        const data: Follow = {id, followerId}

        await insertFollows(data)

        res.status(200).send(
            `user follows sucess!`
        );
        
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