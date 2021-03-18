// 1 - palindromos
function palindromo(texto) {
  let reverso = texto.split('').reverse().join('');
  if (reverso === texto) {
    return true;
  } else {
    return false
  }
}
console.log(palindromo('ogaloamaolago'));

// 2

function indiceMaiorValor(array) {
  let max = array[0];
  let indice = 0;
  for (let index = 0; index < array.length; index++) {
    if (max < array[index]) {
      max = array[index]
      indice = index
    }

  }
  return indice;
}
console.log(indiceMaiorValor([1, 2, 3, 101, 5, 6, 100, 2]));

// 3

function menorValor(array) {
  let min = array[0];
  let indice = 0;
  for (let index = 0; index < array.length; index++) {
    if (min > array[index]) {
      min = array[index]
      indice = index
    }

  }
  return indice;
}
console.log(menorValor([-10, 2, 3, 101, -5, 6, -100, 2]));

// 4

function biggerName(arrayOfNames) {
  let biggerName = arrayOfNames[0];
  for (let index = 0; index < arrayOfNames.length; index++) {
    if (biggerName.length < arrayOfNames[index].length) {
      biggerName = arrayOfNames[index]
    }

  }
  return biggerName;
}
console.log(biggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
// 5
function moreRepeatedNumber(arrayNumbers) {
  let arrayLength = [];
  for (let index in arrayNumbers) {
    let count = 0;
    for (let index2 in arrayNumbers) {
      if (arrayNumbers[index] === arrayNumbers[index2]) {
        count += 1;
      }
    }
    arrayLength.push(count)
  }
  return arrayNumbers[indiceMaiorValor(arrayLength)]
}
console.log(moreRepeatedNumber([1, 2, 3, 4, 5, 6, 45, 3]));
// 6
function sumNumber(number) {
  let sum = 0;
  while (number > 0) {
    sum = sum + number;
    number -= 1;
  }
  return sum
}
console.log(sumNumber(6));

// 6

function verificaFimPalabra(stringWord, stringEnding) {
  if (stringWord.slice(-stringEnding.length) === stringEnding) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaFimPalabra("Hello world!", "world!"));

// desafio code wars
function sum(number1, number2) {
  number1 = number1.toString().split('').reverse().join('');
  number2 = number2.toString().split('').reverse().join('');
  let result = '';
  if (number1.length < number2.length) {
    [number1, number2] = [number2, number1]
  }
    for (let index = 0; index < number1.length; index++) {
      let int1 = parseInt(number1[index]);
      let int2 = parseInt(number2[index] || 0);
      result = (int1 + int2).toString() + result
    }

    return (parseInt(result))
  }

console.log(sum(123, 2188));
    // for(let i = number1.length; i > 0; i -= 1) {
    //   soma = parseInt(number1[i - 1]) + parseInt(number2[i - 1]);
    //   console.log(soma);
    //   resultArray.unshift(soma.toString());
    // }
    // for(key in resultArray) {
    //   result = result + resultArray[key]
    // }
        // }
    // while (number2.length < number1.length) {
    //   number2.unshift(0);
    // }