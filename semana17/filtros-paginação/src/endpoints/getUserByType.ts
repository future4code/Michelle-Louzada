import { Request, Response } from "express"
import selectUserByType from '../data/selectAllUsers'
import {TYPES_USERS} from '../types/User'

export const getUserByType= async(req: Request,res: Response): Promise<void> =>{
    try {

       const type = req.params.type as string

       if(type !== "Teacher" && type !== "CX" && type !== "Operations") {
        throw new Error('Você deve inserir um valor valido para "type" ')
      }

       const users = await selectUserByType()
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No User found")
       }

 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }