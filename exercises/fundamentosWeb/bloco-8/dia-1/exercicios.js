const newEmployees = (employee) => {
  const employees = {
    id1: employee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: employee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: employee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};
const createEmployee = (name) => {
  const employee = {
    name,
    email: email(name),
  }
  return employee
}

const email = (name) => {
  const nameSplitted = name.toLowerCase().split(' ')
  let emailName = ''
  for (let i = 0; i < nameSplitted.length; i++) {
    emailName += nameSplitted[i];
  }
  return `${emailName}@trybe.com`
}
console.log(newEmployees(createEmployee));

const sort = (number, compare) => {
  const sort = Math.ceil(Math.random() * 5);
  console.log(compare(number, sort));
}

const compare = (betNumber, winnerNumber) => {
  let result = '';
  if (betNumber === winnerNumber) {
    result = 'Parabéns você ganhou!'
  } else {
    result = 'Tente novamente!'
  }
  return result
}
sort(3, compare)

const answersCheck = (correctAnwer) => (userAnswer) => correctAnwer.toLowerCase() == userAnswer.toLowerCase();
console.log(answersCheck('A resposta é a letra A')('a resposta é a letra a'));
// true

const testResult = (correctAnwer, studantAnswer, checkFunction) => {
  console.log(checkFunction(correctAnwer, studantAnswer));
}
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
testResult(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], testCheck)
