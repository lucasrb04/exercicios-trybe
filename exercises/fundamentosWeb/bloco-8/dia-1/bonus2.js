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
const dragonDamage = () => getRandomArbitrary(15, dragon.strength);
const warriorDamage = () => getRandomArbitrary(warrior.strength, warrior.strength * warrior.weaponDmg);
const mageDamage = () => {
  const result = { 
    dano: getRandomArbitrary( mage.intelligence, mage.intelligence * 2),
  }
  if (mage.mana < 15) {
    result.dano = 'Não possui mana suficiente';
    result.mana = 0
  } else {
    result.mana = 15
  }
  return result
}

const gameActions = {
  warriorAction: (dmg) => {
    warrior.damage = dmg;
    dragon.healthPoints -= warrior.damage;
    
  },
  mageAction: (dmg) => {
    mage.damage = dmg.dano
    dragon.healthPoints -= mage.damage;
    mage.mana -= dmg.mana
  },
  dragonAction: (dmg) => {
    dragon.damage = dmg;
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },
  newTurn: () => {
    gameActions.warriorAction(warriorDamage());
    gameActions.mageAction(mageDamage());
    gameActions.dragonAction(dragonDamage());
    console.log(battleMembers)
  }
};
gameActions.newTurn();
gameActions.newTurn();
gameActions.newTurn();
gameActions.newTurn();
gameActions.newTurn();
gameActions.newTurn();
gameActions.newTurn();
gameActions.newTurn();
gameActions.newTurn();