import { InputPost, Post, PostData } from "../../model/Post"
import { AuthenticationData } from "../../model/User"
import { getTokenData } from "../../services/authenticator"
import { generateId } from "../../services/idGenerator"
import {formatDateToDB, dateNow} from '../../model/Post'
import {insertPost} from '../../data/post/insertPost'
import { selectPost } from "../../data/post/selectPost"

export const createPostBusiness = async (input: InputPost, token: string): Promise<Post> => {
    
    const { photo, description, type } = input
    try{
        
       const tokenData: AuthenticationData = getTokenData(token)

       const authorId: string = tokenData.id
 
       const id: string = generateId()

       const createdAt = formatDateToDB(dateNow())

       const data: PostData = {id, photo, description, type, authorId, createdAt}
   
        await insertPost(data)

        const createdPost: Post = (await selectPost(id, authorId))[0];
 
        return createdPost

    } catch (error) {
        throw new Error(error.message);
    }
}
