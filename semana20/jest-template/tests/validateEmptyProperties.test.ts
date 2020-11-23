import { validateEmptyProperties, ValidateEmptyPropertiesOutput } from "../src/validateEmptyProperties"

describe("Validate empty properties", () => {
   test("Success case", () => {
      const result: ValidateEmptyPropertiesOutput = validateEmptyProperties({
         name: "Mateus",
         balance: 500.00
      })

      expect(result.isValid).toEqual(true)
      expect(result.errors).toEqual([])
   })

   test("Fail case", () => {

      const result = validateEmptyProperties({
         name: "",
         balance: 0
      })

      expect(result.isValid).not.toBe(true)
      expect(result.errors.length).toBeGreaterThan(0)
      expect(result.errors).toHaveLength(2)
      expect(result.errors).toContainEqual({
         key: "name",
         value: ""
      })
   })
})