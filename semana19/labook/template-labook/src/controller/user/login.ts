import { Request, Response } from "express"
import { loginBusiness } from "../../business/user/loginBusiness";
import { InputLogin } from "../../model/User";

export default async function login(
    req: Request,
    res: Response
 ): Promise<void> {

    try {
       let message = "Success!"
 
       const { email, password } = req.body
 
       const input: InputLogin = {
        email,
        password
    }

    const token = await loginBusiness(input);
 
       res.status(200).send({ message, token })
 
    } catch (error) {
       let message = error.sqlMessage || error.message
       res.statusCode = 400
 
       res.send({ message })
    }
 }