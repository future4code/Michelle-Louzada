import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import knex from 'knex'
import dotenv from "dotenv"
import { createUser } from "./endpoint/createUser";

dotenv.config()


export const connection = knex({	// Estabelece conexão com o banco
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();

app.use(express.json());
app.use(cors())

// app.get("/pokemon/all", getAllPokemons);

app.post("/user", createUser);

app.listen(3003, () => {
    console.log("servidor pronto")
})
