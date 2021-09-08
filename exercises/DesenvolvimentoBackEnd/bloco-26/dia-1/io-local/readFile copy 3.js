function dividirNumeros(num1, num2, num3) {
  const arrayOfNumbers = [num1, num2, num3];
  const promise = new Promise((resolve, reject) => {
    arrayOfNumbers.forEach(numero => {
      if (typeof(numero) !== "number") reject(Error("Não é um número"));
    });
    const resultado = (num1 + num2) * num3;
    if (resultado < 50) reject(Error("Menor que 50"));

    resolve(resultado);
  });
  return promise;
}

function getRandom() {
  return Math.floor(Math.random() * 10 + 1);
}

async function test(func) {
  const array = [];
  for (let i = 0 ; i < 3 ; i++){
  array.push(getRandom());
  }
  try {
    const result = await func(...array);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

test(dividirNumeros);