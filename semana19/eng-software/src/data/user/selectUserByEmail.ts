import { User } from "../../types/types";
import { connection } from "../connection";


export default async function selectUserByEmail(
    email: string
): Promise<User> {
    try {
        const result = await connection('User_Arq')
            .select("*")
            .where({ email })

        return {
            id: result[0].id,
            name: result[0].name,
            email: result[0].email,
            password: result[0].password,
            role: result[0].role
        }

    } catch (error) {
        throw new Error(error.slqMessage || error.message)
    }
} 