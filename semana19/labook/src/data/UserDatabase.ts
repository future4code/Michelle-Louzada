import { UserClass } from "../model/User"
import { connection } from "./connection";

class UserDatabase {

    private tableName: string = "labook_users"
 
    public getTableName = (): string => this.tableName
 
    public async signup(
       user: UserClass
    ) {

        try {
            await connection.insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
             }).into(this.tableName)
          } catch (error) {
             throw new Error("Erro de banco de dados: " + error.sqlMessage);
          }
        }
        public async getUserByEmail(
            email: string
         ): Promise<UserClass> {
            try {
               const result = await connection(this.tableName)
                  .select("*")
                  .where({ email })
      
               return new UserClass(
                  result[0].id,
                  result[0].name,
                  result[0].email,
                  result[0].password
               )
      
            } catch (error) {
               throw new Error(error.slqMessage || error.message)
            }
       }

}

export default new UserDatabase()