import { Response, Request } from 'express'
import moment from 'moment'
import insertTask from '../data/insertTask'

export default async function createTask(
    req: Request,
    res: Response
){
    try {
        if(
            !req.body.title ||
            !req.body.description ||
            !req.body.deadline ||
            !req.body.authorId
        ){
            res.status(400).send({
                messege: '"title", "description", "deadline" e "authorId" são obrigatórios'
            })

            return
        }

        const date: number = moment(req.body.deadline, 'DD/MM/YYYY').unix() - moment().unix()

        if(date <= 0){
            res.status(400).send({
                messege: '"deadline" tem que ser uma data futura!'
            })
        }

        const id: string = Date.now() + Math.random().toString()

        await insertTask(
            id,
            req.body.title, 
            req.body.description,
            moment(req.body.deadline, 'DD/MM/YYYY').format('YYYY-MM-DD'), 
            req.body.authorId
        )

        res.status(200).send({
            messege: "Tarefa criada com sucesso!",
            id,
        })

    }catch (error) {
        res.status(400).send({
            messege: error.messege || error.sqlMessege
        })
    }
}