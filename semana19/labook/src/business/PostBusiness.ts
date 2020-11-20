import { dateH, InputPost, PostClass } from "../model/Post"
import { AuthenticationData } from "../model/User"
import {formatDateToDB, dateNow} from '../model/Post'
import postDatabase from "../data/PostDatabase"
import authenticator from "../services/authenticator"
import idGenerator from "../services/idGenerator";

class PostBusiness {

    public createPost = async (input: InputPost, token: string): Promise<PostClass> => {
    
        const { photo, description, type } = input
        try{
            
            const tokenData: AuthenticationData = authenticator.getTokenData(token)
    
            const author_id: string = tokenData.id
     
            const id: string = idGenerator.generateId()
    
            const createdAt = dateH()
    
            const data: PostClass = new PostClass (id, description, photo, createdAt, type, author_id)
       
            await postDatabase.createPost(data)
    
            const createdPost: PostClass = (await postDatabase.selectPost(id, author_id));
     
            return createdPost
    
        } catch (error) {
            throw new Error(error.message);
        }
    }

    public getPostById = async (id: string, token: string): Promise<PostClass> => {

        try {
    
            let message = "Success!"
    
            const tokenData: AuthenticationData = authenticator.getTokenData(token)

            const author_id = tokenData.id
    
            const post: PostClass = (await (postDatabase.selectPost(id, author_id)));
     
            if(!post) {
             throw new Error("'id' not registered");
             }
    
             return post
    
        }catch (error) {
            throw new Error(error.message);
        }
    }
}


export default new PostBusiness()