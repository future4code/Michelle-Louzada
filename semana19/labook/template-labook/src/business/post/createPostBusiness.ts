import { InputPost } from "../../model/Post"
import { AuthenticationData } from "../../model/User"
import { getTokenData } from "../../services/authenticator"
import { generateId } from "../../services/idGenerator"

export const createPostBusiness = async (input: InputPost, token: string): Promise<void> => {
    
    const { photo, description, type } = input
    try{
        
       const tokenData: AuthenticationData = getTokenData(token)

       const authorId: string = tokenData.id
 
       const id: string = generateId()
 
       await connection("labook_posts")
          .insert({
             id,
             photo,
             description,
             type,
             author_id: tokenData.id
          })
    } catch (error) {
        throw new Error(error.message);
    }
}
