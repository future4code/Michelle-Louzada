import { selectPost } from "../../data/post/selectPost";
import { Post } from "../../model/Post";
import { AuthenticationData } from "../../model/User";
import { getTokenData } from "../../services/authenticator";


export const getPostByIdBusiness = async (id: string, token: string): Promise<Post> => {

    try {

        let message = "Success!"

        const tokenData: AuthenticationData = getTokenData(token)

        const post: Post = (await (selectPost(id)))[0];
 
        if(!post) {
         throw new Error("'id' not registered");
         }

         if (!post[0]) {
            message = "Post not found"
            throw new Error(message)
         }
   
         const result: Post = {
            id:post[0].id,
            photo:post[0].photo,
            description:post[0].description,
            type:post[0].type,
            createdAt:post[0].created_at,
            authorId:post[0].author_id,
         }
         return result

    }catch (error) {
        throw new Error(error.message);
    }
}
       

       