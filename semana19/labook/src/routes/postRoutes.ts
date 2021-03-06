import express from "express";
import postController from "../controller/PostController";

export const postRouter = express.Router();

postRouter.post("/create", postController.createPost);
postRouter.get("/:id", postController.getPostById);
