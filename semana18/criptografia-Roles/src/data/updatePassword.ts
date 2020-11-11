import { connection } from "..";

const TABLE_NAME = "users_exericio_autenticacao"

export async function updatePassword(id: string,
     newPassword: string){
    await connection.raw(`
        UPDATE ${TABLE_NAME}
        SET password = "${newPassword}"
        WHERE id = "${id}"
    `);
}