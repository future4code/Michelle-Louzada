import { Response, Request } from 'express'
import updateUser from '../data/updateUser'

export default async function editUser(
    req: Request,
    res: Response
){
    try {
        if( 
            req.body.name === '' || 
            req.body.nickname === '' ||
             req.body.email === ''
        ){
            res.status(400).send({
                messege: "Nenhum dos campos (nome, nickname e email) pode estar em branco"
            })
        }

        if(!req.body.name && !req.body.nickname && !req.body.email){

            res.status(400).send({
                messege: "Escolha ao menos um valor para alterar"
            })
        }

        await updateUser (
            req.params.id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        res.status(200).send({
            messege: "Usuário atualizado com sucesso!"
        })

    }catch (error) {
        res.status(400).send({
            messege: error.messege || error.sqlMessege
        })
    }
}