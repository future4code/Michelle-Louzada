import { Request, Response } from "express"
import { User } from "../types/types";
import { selectUser } from "../data/selectUser";
import { AuthenticationData, getTokenData } from "../services/authenticator";

export const getUserById = async (
    req: Request, res: Response
): Promise<void> => {
    try {
        const token: string = req.headers.authorization as string

        const tokenData: AuthenticationData = await getTokenData(token)
        
        const id: string = req.params.id;

        const user: User = (await (selectUser(id)))[0];

        if(!user) {
            throw new Error("'id' not registered");
        }

        res.status(200).send({ message: {
            name: user.name,
            email: user.email,
            id: user.id
        }});
        
    } catch (error) {
        let { message } = error
  
        if (
           message === "jwt must be provided" ||
           message === "invalid signature" ||
           message === "jwt expired"
        ) {
           res.statusCode = 401
           message = "Não autorizado"
        }
  
        res.send({
           message
        })
     }
}