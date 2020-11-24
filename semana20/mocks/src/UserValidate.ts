import { Character } from "./character";

class UserValidate {

  public validateCharacter = (input: Character): boolean => {
    if (
      !input.name ||
      input.life === undefined || 
      input.strength === undefined ||
      input.defense === undefined
    ) {
      return false;
    }
  
    if (input.life <=0 || input.strength <=0 || input.defense <=0) {
      return false;
    }
  
    return true;
  };

  public performAttack = (attacker: Character, defender: Character) => {
    if (!this.validateCharacter(attacker) || !this.validateCharacter(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
    }
  };

}

export default new UserValidate()