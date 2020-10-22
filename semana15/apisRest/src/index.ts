//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';
//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());


let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]

//EXERICICIO 1

//A) método get pra pegar a lista.
//B) indicaria com "/users"

app.get("/users", (req: Request, res: Response): void =>{

    try{
        res.status(200).send(users);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});

//EXERCICIOS 2
//A)    passei por meio de path.params.type que filtra o tipo e retorna todos que tem aquele tipo
//B)    com um if que se o type não for igual ao escrito ele retorna um erro, pode ser um 
// if(req.params.type === "ADIMIN" || "NORMAL")

app.get("/users/:type", (req: Request, res: Response): void =>{

    try{
        const usersByType = users.filter((user)=>user.type === req.params.type
        )
        res.status(200).send(usersByType);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});

//EXERCICIO 3
//A)    aqui eu utilizei o query.params que pode ser o nome ou a idade
//B)    feito.

app.get("/users/query", (req: Request, res: Response): void =>{

    const name = req.query.name
    const age = Number(req.query.age)
    console.log("o nome que chegou:", name)
    console.log("o age que chegou:", age)

    try{

        const user = users.filter((u) => u.name === name || u.age === age)

        if (!user) {
            throw new Error("Nenhum usuario encontrado")
        }

        res.status(200).send(user);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});

//EXERCICIO 4
//A)    não muda nada entre o endpoint de put e post pra postar um usuario novo
//B)    não, pois o metódo post ja existe pra isso, é bom usar os metódos certinhos pra não
//ter perigo de bugar e pra padronizar o codigo.

app.post("/users", (req: Request, res: Response): void=>{
    try{
        const {id, name, email, age, type} = req.body;
        const user = {
            id,
            name,
            email,
            age,
            type
        }

        users.push(user);
        res.status(200).send({message: "User created successfully"});
    }catch(error){
        res.status(400).send({
            message: "Error inserting for users"
        });
    }
})

//EXERCICIO 5

app.put("/users", (req: Request, res: Response): void=>{
    try{
        const {id, name, email} = req.body;

        const userIndex = users.findIndex((u) => u.id = id)

        if(userIndex === -1) {
            throw new Error()
        }

        users[userIndex].name = name
        users[userIndex].email = email

        res.status(200).send({message: "User created successfully"});
    }catch(error){
        res.status(400).send({
            message: "Error inserting for users"
        });
    }
})  

//EXERCICIO 7

app.delete("/users/:id", (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        if(!req.headers.authorization){
            errorCode = 401
            throw new Error()
        }
        const userIndex: number = users.findIndex(
            (u) => u.id === Number(req.params.id)
        )
        if(userIndex === -1) {
            errorCode = 404
            throw new Error()
            
        }
        users.splice(userIndex, 1)

        res.status(200).end()
    } catch (error) {
        console.log(error)
        res.status(errorCode).end()
    }
})  


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
