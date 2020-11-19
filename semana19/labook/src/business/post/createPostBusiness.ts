import { InputPost, Post, PostClass } from "../../model/Post"
import { AuthenticationData } from "../../model/User"
import { getTokenData } from "../../services/authenticator"
import { generateId } from "../../services/idGenerator"
import {formatDateToDB, dateNow} from '../../model/Post'
import { selectPost } from "../../data/post/selectPost"
import postDatabase from "../../data/post/postDatabase"

export const createPostBusiness = async (input: InputPost, token: string): Promise<Post> => {
    
    const { photo, description, type } = input
    try{
        
       const tokenData: AuthenticationData = getTokenData(token)

       const author_id: string = tokenData.id
 
       const id: string = generateId()

       const createdAt = formatDateToDB(dateNow())

       const data: PostClass = {id, photo, description, type, author_id, createdAt}
   
        const result: PostClass = await postDatabase.createPost(data)

        const createdPost: PostClass = (await selectPost(id, author_id))[0];
 
        return createdPost

    } catch (error) {
        throw new Error(error.message);
    }
}
