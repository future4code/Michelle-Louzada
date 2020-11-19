import { Request, Response } from "express";
import { createUserBusiness } from "../../business/user/createUserBusiness";
import { InputUser, User } from "../../model/User";

export const createUser = async (
    req: Request, res: Response
  ): Promise<void> => { 

    try {
       let message = "Success!"

       const { name, email, password } = req.body

       const input: InputUser = {
           name,
           email,
           password
       }

       const token = await createUserBusiness(input);
 
       res.status(201).send({ message, token })
 
    } catch (error) {
       res.statusCode = 400
       let message = error.sqlMessage || error.message
 
       res.send({ message })
 }
}