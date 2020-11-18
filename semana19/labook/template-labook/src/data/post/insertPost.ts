import { connection } from "../connection"
import { PostData } from "../../model/Post";

export const insertPost = async (data: PostData): Promise<void> => {
  const {id, photo, description, authorId, createdAt, type} = data;
  await connection ("labook_posts")
    .insert({
      id,
      photo,
      description,
      createdAt,
      type,
      author_id: authorId
    });
}