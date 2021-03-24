const testingScope = escopo => {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];


console.log(`Os números ${oddsAndEvens.sort((a,b) =>  a - b )} se encontram ordenados de forma crescente` );

// const fatorial = (n === 0) ? n -= 1 

const factorial = number => number > 1 ? number * factorial(number - 1) : 1
console.log(factorial(5))
