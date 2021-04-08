const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;
const dragonDamage = (random) => random(15, dragon.strength);
const warriorDamage = (random) => random(warrior.strength, warrior.strength * warrior.weaponDmg);
const mageDamage = (random) => {
  const damage = random(mage.intelligence, 2 * mage.intelligence);
  let result = {
    damage,
  }
  if (mage.mana > 15) {
    mage.mana -= 15;
    result.mana = 15;
  } else {
    console.log('Não possui mana suficiente');
    result.mana = 0
  }
  return result
}
const gameActions = {
  warriorAction: (func) => {
    warrior.damage = func(getRandomArbitrary);
    dragon.healthPoints -= warrior.damage
  },
  mageAction: (func) => {
    mage.damage = func(getRandomArbitrary).damage;
    dragon.healthPoints -= mage.damage
  },
  dragonAction: (func) => {
    dragon.damage = func(getRandomArbitrary);
    warrior.healthPoints -= dragon.damage
    mage.healthPoints -= dragon.damage
  },
  newTurn: () => {
    gameActions.warriorAction(warriorDamage);
    gameActions.mageAction(mageDamage);
    gameActions.dragonAction(dragonDamage);
    return battleMembers
  }
}
console.log(gameActions.newTurn())