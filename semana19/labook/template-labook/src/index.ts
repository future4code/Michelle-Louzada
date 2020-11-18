
import express, { Express, Request, Response } from "express"
import cors from "cors"
import { userRouter } from './routes/userRoutes'
import { postRouter } from './routes/postRoutes'

const app: Express = express()
app.use(express.json())
app.use(cors())

app.use("/user", userRouter);
app.use("/task", postRouter);

app.listen(3003, () => {
   console.log("Server running on port 3003")
})