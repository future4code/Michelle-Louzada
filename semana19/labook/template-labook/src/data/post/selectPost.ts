import { connection } from "../connection"
import { Post } from "../../model/Post";


export const selectPost = async (
  id: string, authorId: string | null = null
): Promise<Post[]> => {
  return await connection("labook_posts").select(
      "id",
      "type",
      "description",
      "createdAt",
      "photo",
      "author_id as authorId"
    ).where("id", id).orWhere("author_id", authorId);
}