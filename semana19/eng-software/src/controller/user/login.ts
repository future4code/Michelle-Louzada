import { Request, Response } from "express"
import { loginBusiness } from "../../business/user/loginBussiness"

export default async function login(req: Request, res: Response): Promise<void> {
    try {

        const input = {
            email: req.body.email,
            password: req.body.password
        }

        const token = await loginBusiness(input)

        res.send({
            message:"Usuário logado!",
            token
        })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
} 