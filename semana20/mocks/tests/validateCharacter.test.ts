import { Character } from '../src/character'
import  userValidate  from '../src/UserValidate'

describe("Validate empty properties", () => {
   test("Success case", () => {
      const result: boolean = userValidate.validateCharacter ({
         name: "Sam",
         life: 30,
         strength: 50,
         defense: 40
      })

      expect(result).toEqual(true)
   })

   test("Fail case", () => {

    const result: boolean = userValidate.validateCharacter({
        name: "",
        life: 30,
        strength: 50,
        defense: 40
    })

    expect(result).toBe(false)
    })

    test("life as 0", () => {

        const result: boolean = userValidate.validateCharacter({
            name: "Sam",
            life: 0,
            strength: 50,
            defense: 40
        })
    
        expect(result).toBe(false)
        })

    test("strength as 0", () => {

        const result: boolean = userValidate.validateCharacter({
            name: "Sam",
            life: 30,
            strength: 0,
            defense: 40
        })
        
        expect(result).toBe(false)
        })

    test("defense as 0", () => {

        const result: boolean = userValidate.validateCharacter({
            name: "Sam",
            life: 30,
            strength: 50,
            defense: 0
        })
            
        expect(result).toBe(false)
        })

    test("life is negative", () => {

        const result: boolean = userValidate.validateCharacter({
            name: "Sam",
            life: -30,
            strength: 50,
            defense: 40
        })
                
        expect(result).toBe(false)
        })

        test("life is negative", () => {

            const result: boolean = userValidate.validateCharacter({
                name: "Sam",
                life: -30,
                strength: 50,
                defense: 40
            })
                    
            expect(result).toBe(false)
            })
 })
