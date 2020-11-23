import { BaseDatabase } from "./BaseDatabase";
import dotenv from "dotenv";
import { NumberLiteralType } from "typescript";

dotenv.config();

class UserDatabase extends BaseDatabase {

    private static TABLE_NAME = "tests_users";
 
    public async createUser(
        id: string,
        name: string,
        balance: number
      ): Promise<void> {
        await BaseDatabase.connection
          .insert({
            id,
            balance,
            name
          })
          .into(UserDatabase.TABLE_NAME);
      }

      public async deleteUser(id: string): Promise<any> {
        await BaseDatabase.connection
          .delete()
          .from(UserDatabase.TABLE_NAME)
          .where({ id });
      }

    public async getUserById(id: string): Promise<any> {
        const result = await BaseDatabase.connection
          .select("*")
          .from(UserDatabase.TABLE_NAME)
          .where({ id });
    
        return result[0];
      }
      

      public async balance(id: string, buyItem: number, balance: number): Promise<any> {
        const result = await BaseDatabase.connection
          .select("*")
          .from(UserDatabase.TABLE_NAME)
          .where({ id })
          .update({
              balance,
          })
          .insert({
              buy_item: buyItem
          })
    
        return result[0];
      }

}

export default new UserDatabase()