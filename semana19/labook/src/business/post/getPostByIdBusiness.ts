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

         return post

    }catch (error) {
        throw new Error(error.message);
    }
}
       

       