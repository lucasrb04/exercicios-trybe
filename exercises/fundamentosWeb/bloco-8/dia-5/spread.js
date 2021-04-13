const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'abacaxi', 'laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['aveia', 'açucar', 'granola'];

const fruitSalad = (...args) => {
  return {...args}
};

console.log(fruitSalad(...specialFruit, ...additionalItens));