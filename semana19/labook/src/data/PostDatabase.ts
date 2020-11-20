import { PostClass } from "../model/Post";
import { connection } from "./connection";

class PostDatabase {

    private tableName: string = "labook_posts"
 
    public getTableName = (): string => this.tableName
 
    public async createPost(
       post: PostClass
    ) {

        try {
            await connection.insert({
                id: post.getId(),
                description: post.getDescription(),
                photo: post.getPhoto(),
                author_id: post.getAuthorId(),
                type: post.getType(),
                created_at: post.getCreatedAt()
             }).into(this.tableName)
          } catch (error) {
             throw new Error("Erro de banco de dados: " + error.sqlMessage);
          }
        }
        public async selectPost(
            id: string,
            authorId: string
         ): Promise<PostClass> {
            try {
               const result = await connection(this.tableName)
                  .select("*")
                  .where({ id }).orWhere("author_id", authorId);
    
               return new PostClass(
                  result[0].id,
                  result[0].description,
                  result[0].photo,
                  result[0].createAt,
                  result[0].author_id,
                  result[0].type,
               )
      
            } catch (error) {
               throw new Error(error.slqMessage || error.message)
            }
       }

}

export default new PostDatabase()