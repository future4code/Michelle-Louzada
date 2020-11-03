import { Request, Response } from 'express';
import  { filterUser } from '../data/filterUser'

export const searchUsers = async (req: Request, res: Response) => {
    try {

        const name = req.query.name as string

        if(!name) {
            throw new Error('Você deve inserir um valor para "name" ')
          }

          const result = await filterUser(name)

        if(!result.length) {
        res.statusCode = 404;
        throw new Error('Nenhuma usuario encontrado')
    }

        res.status(200).send(result)
    
    }catch (error) {
        res.status(400).send(
            {
              message: error.message || error.sqlMessege
            }
          )
    }
}