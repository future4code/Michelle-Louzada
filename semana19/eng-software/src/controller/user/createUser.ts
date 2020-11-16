
import { Request, Response } from "express";
import { signupBusiness } from "../../business/user/signUpBussines";
import { InputUser } from "../../types/types";


export async function createUser( req: Request, res: Response) {
    try {
        const input: InputUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }

       const token = await signupBusiness(input);

        res
            .status(201)
            .send({
               message:"Usuário criado!",
               token
            })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
} 