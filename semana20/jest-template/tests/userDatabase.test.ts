import userController from "../src/controller/UserController"
import { BaseDatabase } from "../src/data/BaseDatabase"
import userDatabase from "../src/data/userDatabase"

describe("Create User", () => {

   test("Success case", async () => {
      
      expect.assertions(2)

      try {
         await userDatabase.createUser(
            "12345",
            "Michelle",
            500.00
         )

         const user: any = await userDatabase.getUserById("12345")

         const buyItem: any = await userController.buyItens()


         expect(user.name).toEqual("nome")
         expect(user.balance).toBe(100.00)
         expect(buyItem).toBe(400.00)
      } catch (error) {

      }
   })

   test("Fail case", async () => {
      expect.assertions(1)

      try {
         await userDatabase.createUser(
            "12345",
            "Michelle",
            500.00
         )
      } catch (error) {
         expect(error.sqlMessage).not.toBe(undefined)
      }
   })

   afterAll(async () => {
      await userDatabase.deleteUser("12345")
      await BaseDatabase.destroyConnection()
   })
})