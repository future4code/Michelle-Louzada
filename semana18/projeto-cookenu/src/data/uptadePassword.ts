import { connection } from "..";

const TABLE_NAME = "users_cookenu"

export async function updatePassword(id: string,
     newPassword: string){
    await connection.raw(`
        UPDATE ${TABLE_NAME}
        SET password = "${newPassword}"
        WHERE id = "${id}"
    `);
}