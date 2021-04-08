const newEmployees = (employee) => {
  const employees = {
    id1: employee('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: employee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: employee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

const createEmployee = (nomeCompleto) => {
   return {
    nomeCompleto,
    email: `${nomeCompleto.toLowerCase().split(' ').join('_')}@trybe.com`,
  }
}
console.log(newEmployees(createEmployee));

const sort = (number, testFunction) => {
  const sort = Math.ceil(Math.random() * 5);
  return testFunction(number, sort) ? "Parabéns você ganhou" : "Tente novamente";
}
const compare = (number, sort) => number === sort;
console.log(sort(3, compare));

const checkTest = (gabarito) => (teste) => gabarito.toLowerCase === teste.toLowerCase;
console.log(checkTest('higher order function')('HIGHER ORDER FUNCTION'));

const checkTest2 = (gabarito, respostas, check) => check(gabarito, respostas);
const testCheck = (correctAnwer, studantAnswer) => {
  let count = 0;
  for (let index = 0; index < correctAnwer.length; index++) {
    if (correctAnwer[index] === studantAnswer[index]) {
      count += 1;
    } else if (studantAnswer[index] !== 'N.A') {
      count -= 0.5;
    }     
  }
  return count
}
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(checkTest2(rightAnswers, studentAnswers, testCheck));



