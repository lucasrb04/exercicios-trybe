const promise = new Promise((resolve, reject) => {

  const numberList = [];
  for (let index = 0; index < 10; index++) {
    const number = Math.ceil(Math.random()* 50);
    numberList.push(number * number)
  }
  const result = numberList.reduce((acc, curr) => acc + curr)
  console.log(result);
  if (result >= 8000) {
    return reject();
  }
  resolve();
})
.then(() => console.log(`Promisse resolvida`))
.catch(() => console.log(`Promisse rejeitada`));