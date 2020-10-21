import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import {countries, country} from './countries'

const app: Express = express()

app.use(express.json())
app.use(cors())

app.get("/countries/all", (req: Request, res: Response) => {
    let errorCode: number = 400
   
    try {
        const result: {name: string, id: number}[] = countries.map(
            country => ({
                id: country.id,
                name: country.name
            })
        ) 
        if(result === undefined) {
            errorCode = 404
            throw new Error()
        }

        res.status(200).send(result)
    } catch (error) {
        res.status(errorCode).end()
    }
})

app.get("/countries/search", (req: Request, res: Response) => {
    let result: country[] = countries
    let errorCode: number = 400
    
    try {

        if (
            !req.query.name &&
            !req.query.capital &&
            !req.query.continent
         ) {
            errorCode = 406
            throw new Error("Bad parameters")
         }

        if (req.query.name) {
            result = result.filter(
                country => country.name.includes( req.query.name as string )
            )
        }
        if (req.query.capital) {
            result = result.filter(
                country => country.capital.includes( req.query.capital as string )
            )
        }
        if (req.query.continent) {
            result = result.filter(
                country => country.continent.includes( req.query.continent as string)
            )
        }
        res.status(200).send(result)

    }catch (error) {
        console.log(error)
        res.status(errorCode).end()
    }
})

app.get("/countries/:id", (req: Request, res: Response) => {
    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    )
    if(result) {
        res.status(200).send(result)
    } else {
        res.status(404).send("Not found")
    }
})

app.put("/countries/edit/:id", (req: Request, res: Response) => {
    type bodyExemple = {
        name: string
        capital: string
    }
    let errorCode: number = 400
    
    try {

        if(!req.headers.authorization) {
            errorCode = 401
            throw new Error()
        }
      
        let result: country | undefined | bodyExemple = countries.find(
            (country) => country.id === Number(req.params.id),   
            
        )
        if (!req.params.id || !req.body){
                errorCode = 404
                throw new Error()
        }

        res.status(200).send(result)
        
    } catch (error) {
        console.log(error)
        res.status(errorCode).end()
    }
})

app.listen(3003, () => {
    console.log("servidor pronto")
})