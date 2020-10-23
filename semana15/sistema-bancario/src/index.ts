import express, {Request, Response} from 'express';
import cors from 'cors';
import { users, User } from './users'

const app = express();

app.use(express.json());
app.use(cors());

app.get("/users", (req: Request, res: Response): void =>{

    try{
        res.status(200).send(users);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});

app.post("/users", (req: Request, res: Response): void=>{


    try{
        const {id, name, cpf, dateOfBirth, saldo, valuePayments, data, description} = req.body;

        const myDate: Date = new Date()

        const [day, month, year] = dateOfBirth.split("/")

        const dateBirth: Date = new Date(`${year}-${month}-${day}`)

        const age: number = 0
        


        const user: User = {
            id,
            name,
            cpf,
            dateOfBirth,
            saldo,
            extrato: [
                {
                    valuePayments,
                    data,
                    description
                }
            ]
        }

        users.push(user);
        res.status(200).send({message: "User created successfully"});
    }catch(error){
        res.status(400).send({
            message: "Error inserting for users"
        });
    }
})

app.put("/users/:id/saldo", (req: Request, res: Response): void=>{
    let errorCode: number = 400

    try{

        if(!req.headers.authorization){
            errorCode = 401
            throw new Error("Authorization invalid")
        }

        const {id, name, cpf, saldo} = req.body;

        const userIndex: number = users.findIndex(
            (u) => u.id === Number(req.params.id)
        )

        if(userIndex === -1) {
            throw new Error()
        }

        users[userIndex].name = name
        users[userIndex].cpf = cpf
        users[userIndex].saldo = saldo

        res.status(200).send({message: "User created successfully"});
    }catch(error){
        res.status(400).send({
            message: "Error inserting for users"
        });
    }
})

app.put("/users/:id/pay", (req: Request, res: Response): void=>{

    let errorCode: number = 400

    try{

        if(!req.headers.authorization){
            errorCode = 401
            throw new Error("Authorization invalid")
        }

        const {id, data, extrato, valuePayments, description } = req.body;

        const userIndex: number = users.findIndex(
            (u) => u.id === Number(req.params.id)
        )

        const saldo = users[userIndex].saldo

        if(userIndex === -1) {
            errorCode = 404
            throw new Error("id não encontrado")
        }
        if (saldo >= valuePayments) {

            users[userIndex].saldo -= valuePayments
            users[userIndex].extrato.push(
            {
                valuePayments,
                data,
                description
            }
        )
        console.log(valuePayments, saldo)
        res.status(200).send({message: "pagamento realizado com sucesso"});

        }else {
            errorCode = 402
            throw new Error("saldo insuficiente")
        }
        
    }catch(error){
        res.status(400).send({
            message: `request invalide ${errorCode}`
        })
    }
})


app.listen(3003, () => {
    console.log("servidor pronto")
})