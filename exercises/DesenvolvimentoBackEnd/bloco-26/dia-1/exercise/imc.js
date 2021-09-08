const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const altura = readline.questionFloat('Qual sua altura? ');
const peso = readline.questionInt('Qual seu peso? ');

// console.log(`Hello, ${name}! You are ${age} years old!`);

const IMC = (peso, altura) => {
    const imc = peso / (altura * altura);
    return imc;
}

console.log(`Hello, ${name}! Your IMC is ${IMC(peso, altura)}`);
