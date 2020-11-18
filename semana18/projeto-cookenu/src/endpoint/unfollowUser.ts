import { Request, Response } from "express"
import { AuthenticationData, Unfollow, User } from "../types/types";
import { selectUser } from "../data/selectUser";
import { getTokenData } from "../services/authenticator";
import { removeFollow } from "../data/removeFollow";

export const unfollowUser = async (
    req: Request, res: Response
): Promise<void> => {
    try {
        const token: string = req.headers.authorization as string

        const tokenData: AuthenticationData = await getTokenData(token)
        
        const id: string = req.body.id;
        const unfollowerId: string = tokenData.id

        if(!id ){
            throw new Error("Missing data for requested operation");
          }

        if(id === unfollowerId) {
            throw new Error("same user id, only different ids can unfollow");
        }

        const user: User = (await (selectUser(unfollowerId)))[0];

        if(!user) {
            throw new Error("'id' not registered");
        }

        const data: Unfollow = {id, unfollowerId}

        await removeFollow(data)

        res.status(200).send(
            `stopped following successfully`
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