import { User } from "../../types/types";
import { connection } from "../connection";

export default async function insertUser(
    user: User
) {
    const {id, name, email, password, role} = user

    try{
        await connection('User_Arq')
            .insert({
                id,
                name,
                email,
                password,
                role
            })
    }catch(error){
        throw new Error("Erro de banco de dados: " + error.sqlMessage);
    }
}
