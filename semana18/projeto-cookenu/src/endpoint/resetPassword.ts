import { Request, Response } from "express"
import selectUserByEmail from "../data/selectUserByEmail";
import {hash} from "../services/hashManager";
import {updatePassword} from '../data/uptadePassword'
import {writeEmail} from "../services/mailer";
import { AuthenticationData } from "../types/types";
import { getTokenData } from "../services/authenticator";

export async function resetPassword(req: Request, res: Response){
    let errorCode = 400;
    try {
        const token: string = req.headers.authorization as string

        const tokenData: AuthenticationData = await getTokenData(token)

        const userId: string = tokenData.id

        const email = req.body.email;

        if(!email){
            throw new Error("Por favor, insira um e-mail válido.");
        }

        const user = await selectUserByEmail(email);

        if(!user){
            errorCode = 404;
            throw new Error("Usuário não encontrado");
        }

        const password = req.body;
        const hashPassword = await hash(password);

        await updatePassword(user.id, hashPassword);

        await writeEmail(
            "Michelle Louzada <michelle@gmail.com>",
            user.email,
            "olá!",
            `Oi, ${user.name}, tudo bem?`,
            `<p>Olá ${user.name}. Sua nova senha é ${password}</p>`
        );


        res.send({message: "password updated successfully"}).status(200);
        
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