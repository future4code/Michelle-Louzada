import { Request, Response } from "express";
import { createPostBusiness } from "../../business/post/createPostBusiness";
import { InputPost, stringToPostRole } from "../../model/Post";

export default async function createPost(
    req: Request,
    res: Response
 ): Promise<void> {

    try {
       let message = "Success!"

       const token: string = req.headers.authorization as string
 
       const { photo, description, type } = req.body
 
       
       const input: InputPost = {
        photo,
        description,
        type: stringToPostRole(type)
    }

    const result = await createPostBusiness(input, token);
 
       res.status(201).send({ message })
 
    } catch (error) {
       let message = error.sqlMessage || error.message
       res.statusCode = 400
 
       res.send({ message })
    
 }}