import { Response, Request } from 'express'
import getUserId from '../data/getUserId'

export default async function getUserById(
    req: Request,
    res: Response
){
    try {
        const user = await getUserId(req.params.id)

        if(!user){
            res.status(404).send({
                messege: "Usuário não encontrado"
            })
        }
        res.status(200).send({
            id: user.id,
            nickname: user.nickname
        })

    }catch (error) {
        res.status(400).send({
            messege: error.messege || error.sqlMessege
        })
    }
}