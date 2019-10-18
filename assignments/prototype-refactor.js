/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    constructor(attribute){
    this.createdAt = attribute.createdAt,
    this.dimensions = attribute.dimensions
    }
    destroy(){
        return `${this.name} has been eliminated.`;
    }
  }


class CharacterStats extends GameObject {
    constructor(charAtt) {
    super(charAtt)
    this.healthPoints = charAtt.healthPoints,
    this.name = charAtt.name,
    this.damage = charAtt.damage,
    this.secondaryDamage = charAtt.secondaryDamage,
    this.buffedAttack = charAtt.buffedAttack
    }
    takeDamage(){
        return `${this.name} has been damaged`;
    }
  }

 

class Humanoid extends CharacterStats {
    constructor(humanAtt) {
    super(humanAtt)
    this.team = humanAtt.team,
    this.weapons = humanAtt.weapons,
    this.language = humanAtt.language,
    this.potions = humanAtt.potions,
    this.healthGain = humanAtt.healthGain,
    this.secondary = humanAtt.secondary
    }
    greet(){
        return `${this.name} approaches you speaking in ${this.language}`;
    }
    attack(){
        return `${this.name} attacks with ${this.weapons} dealing ${this.damage} damage`;
    }
    heal(){
        return `${this.name} heals for ${this.healthGain} health with ${this.potions}`;
    }
    buff(){
        return `${this.name} drank ${this.potions} and recieved +10 in all stats`;
    }
    finisher(){
        return `${this.name} quickly attacks again with ${this.weapons} and follows up with ${this.secondary} into the chest dealing ${this.buffedAttack + this.secondaryDamage} damage`;
    }
    finished(){
        return `${this.name} and his demon have been conquered`;
    }
  }



  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const villian = new Humanoid({
    createdAt: new Date(),
    dimension: {
      length: 2,
      height: 5,
      width: 3,
    },
    healthPoints: 45,
    name: 'Dr. Piffens',
    team: "Evil Doers",
    weapons: [
      'Giant Hand Saw',
    ],
    damage: [
      25,
    ],
    potions: [
      'Medicine',
    ],
    healthGain: 20,
    language: 'Common Tongue',
  });

  const hero = new Humanoid({
    createdAt: new Date(),
    dimension: {
      length: 2,
      height: 6,
      width: 3,
    },
    healthPoints: 30,
    name: 'Jarvis',
    team: 'Dark Elimination Forces',
    weapons: [
      'Demon Slayer',
    ],
    damage: 20,
    secondary: [
      'Blessed Dagger',
    ],
    secondaryDamage: 15,
    potions: [
      'Champions Brew',
    ],
    buffedAttack: 30,
    language: 'Common Tongue',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  console.log(villian.attack());
  console.log(archer.takeDamage());
  console.log(archer.destroy());
  console.log(hero.attack());
  console.log(villian.takeDamage());
  console.log(villian.heal());
  console.log(hero.buff());
  console.log(villian.attack());
  console.log(hero.finisher());
  console.log(villian.finished());