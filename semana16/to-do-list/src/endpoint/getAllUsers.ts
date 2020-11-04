import { Response, Request } from 'express'
import { getUsers } from '../data/getUsers'

export default async function getAllUsers(
    req: Request,
    res: Response
){
    try {
        const user = await getUsers()

        if(!user){
            res.status(404).send({
                messege: "Lista não possui nenhum usuário"
            })
        }
        res.status(200).send(user)

    }catch (error) {
        res.status(400).send({
            messege: error.messege || error.sqlMessege
        })
    }
}