import { generateId } from "../../services/idGenerator";
import { hash } from "../../services/hashManager";
import { generateToken } from "../../services/authenticator";
import insertUser from "../../data/user/insertUser";
import { InputUser } from "../../types/types";

export const signupBusiness = async (input: InputUser): Promise<string> => {
    try {
        if (
            !input.name ||
            !input.email ||
            !input.password ||
            !input.role
        ) {
            throw new Error('Preencha os campos "name", "email" e "password"')
        }

        const id: string = generateId()

        const cypherPassword = await hash(input.password);

        await insertUser({
            id,
            name: input.name,
            email: input.email,
            password: cypherPassword,
            role: input.role
        })

        const token: string = generateToken({
            id,
            role: input.role
        });

        return token;

    } catch (error) {
        if (error.code === 1048) {
            throw new Error("Este usuário já existe!");
        }
    }
    
return ""
} 