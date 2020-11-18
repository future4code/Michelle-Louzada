import { Request, Response } from "express";
import { getPostByIdBusiness } from "../../business/post/getPostByIdBusiness";

export default async function getPostById(
   req: Request,
   res: Response
): Promise<void> {

    try {
       let message = "Success!"

       const token: string = req.headers.authorization as string

       const id: string  = req.params.id

       const result = await getPostByIdBusiness(id, token);
 
       res.status(200).send({ message, result })
 
    } catch (error) {
       let message = error.sqlMessage || error.message
       res.statusCode = 400
 
       res.send({ message })
    }
 }
 