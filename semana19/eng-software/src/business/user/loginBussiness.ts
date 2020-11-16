import { compare } from "../../services/hashManager";
import { generateToken } from "../../services/authenticator";
import selectUserByEmail from "../../data/user/selectUserByEmail";
import { User } from "../../types/types";

export const loginBusiness = async (input: any): Promise<string> => {
    try {
        if (!input.email || !input.password) {
            throw new Error("'email' e 'senha' são obrigatórios")
        }

        const user: User = await selectUserByEmail(input.email)

        if (!user) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const passwordIsCorrect: boolean = await compare(input.password, user.password)

        if (!passwordIsCorrect) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const token: string = generateToken({
            id: user.id,
            role: user.role
        })

        return (token)

    } catch (error) {
        if (error.code === 1048) {
            throw new Error("Usuário não encontrado!");
        }
    }
    return "";
} 