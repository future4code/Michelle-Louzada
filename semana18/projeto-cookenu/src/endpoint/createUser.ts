import { Request, Response } from "express"
import { User, UserInput } from "../types/types";
import {insertUser} from '../data/insertUser'
import { generateId } from "../services/idGenerator";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { selectUser } from "../data/selectUser";

export const createUser = async (
  req: Request, res: Response
): Promise<void> => {
  try {
    const {email, password, name} = req.body;

    if( !email || !password){
      throw new Error("Missing data for requested operation");
    }

    const id: string = generateId()

    const users: User[] = await selectUser(id, email);
    users.forEach(user => {
      if(user.id === id){
        res.statusCode = 406;
        throw new Error("'id' already registered");
      }
      if(user.email === email){
        res.statusCode = 406;
        throw new Error("'email' already registered");
      }
    });

    const cypherPassword = await hash(password);
    
    const data: UserInput = {id, email, cypherPassword, name }

    await insertUser (data)
      
    const createdUser: User = (await selectUser(id))[0];

    const token: string = generateToken({
        id,
     })

    res.status(201).send({
      message: "Success creating User",
      user: {
        id: createdUser.id,
        email: createdUser.email,
      },
      token
    });
  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage});
  }
}