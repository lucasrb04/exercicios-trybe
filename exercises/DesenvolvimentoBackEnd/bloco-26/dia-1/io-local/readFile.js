// function dividirNumeros(num1, num2, num3) {
//   const promise = new Promise((resolve, reject) => {
//     if (typeof(num1 || num2 || num3) !== "number") reject(Error("Não é um número"));

//     const resultado = num1 / num2;
//     resolve(resultado)
//   });

//   return promise;
// }

// dividirNumeros(1, "b", 3)
//   .then(resultado => console.log(resultado))
//   .catch(err => console.log(err.message));


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

  
dividirNumeros(1, 30, 3)
  .then(resultado => console.log(resultado))
  .catch(err => console.log(err.message))

