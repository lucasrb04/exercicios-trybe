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


function aleatorio() {
  const arrayOfNumbers = [];
  const promise = new Promise((resolve, reject) => {
    let n = 0
    while (n < 3) {
      n++;
      arrayOfNumbers.push(Math.floor(Math.random() * 7 + 1));
    }
    dividirNumeros(...arrayOfNumbers)
    .then(resultado => resolve(resultado))
    .catch(err => reject(err.message))
  });
  return promise;
}

aleatorio()
.then(resultado => console.log(resultado))
.catch(err => console.log(err));