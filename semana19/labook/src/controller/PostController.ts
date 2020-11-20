import { Request, Response } from "express";
import PostBusiness from "../business/PostBusiness";
import { InputPost, PostClass, stringToPostRole } from "../model/Post";


class PostController {

   public async createPost(
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
  
      const result = await PostBusiness.createPost(input, token);
  
   
         res.status(201).send({ message, result})
   
      } catch (error) {
         let message = error.sqlMessage || error.message
         res.statusCode = 400
   
         res.send({ message })
      
   }}

   public async getPostById(
      req: Request,
      res: Response
   ): Promise<void> {
   
       try {
          let message = "Success!"
   
          const token: string = req.headers.authorization as string
   
          const id: string  = req.params.id
   
          const result: PostClass = await PostBusiness.getPostById(id, token);
    
          res.status(200).send({ message, result })
    
       } catch (error) {
          let message = error.sqlMessage || error.message
          res.statusCode = 400
    
          res.send({ message })
       }
    }
}

export default new PostController()