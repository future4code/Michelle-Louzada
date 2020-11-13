import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { createUser } from "./endpoint/createUser";
import login from "./endpoint/login";
import { getProfile } from "./endpoint/getProfile";
import { getUserById } from "./endpoint/getUserById";
import { createRecipe } from "./endpoint/createRecipe";
import { getRecipesById } from "./endpoint/getRecipesById";
import { followUser } from "./endpoint/followUser";
import { unfollowUser } from "./endpoint/unFollowUser";
import {getRecipes} from './endpoint/getRecipes'

dotenv.config();

export const connection = knex({
    client: "mysql",
    connection: {
       host: process.env.DB_HOST,
       port: Number(process.env.DB_PORT || "3306"),
       user: process.env.DB_USER,
       password: process.env.DB_PASSWORD,
       database: process.env.DB_NAME
    }
  });

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/signup", createUser);

app.post("/login", login);

app.get("/user/feed", getRecipes);

app.get("/user/profile", getProfile);

app.get("/user/:id", getUserById);

app.post("/recipe", createRecipe);

app.get("/recipe/:id", getRecipesById);

app.post("/user/follow", followUser);

app.post("/user/unfollow", unfollowUser);



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });