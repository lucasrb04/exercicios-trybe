function grow(x){
  const getSum = (result, number) => result * number;
  x.reduce(getSum)
}
console.log(grow([1, 2, 3]))
const numbers = [32, 15, 3, 2, -5, 56, 10];


function sumNumbers(x) {
  const getSum = (result, number) => result + number;
  console.log(x.reduce(getSum)); // 113
}
sumNumbers([32, 15, 3, 2, -5, 56, 10]);