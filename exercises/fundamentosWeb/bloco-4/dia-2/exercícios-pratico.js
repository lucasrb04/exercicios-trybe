let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i< numbers.length; i += 1) {
  console.log(numbers[i]);
}

let soma = 0;
for (let i = 0; i< numbers.length; i += 1) {
  soma = (soma + numbers[i]);
}
console.log("A soma é:" + soma + '.');

let media = (soma / numbers.length);

console.log("A média é:" + media + '.');
if (media <= 20) {
  console.log("valor menor ou igual a 20");
} else {
  console.log("valor maior que 20");
}
let max = 0;
for (let i = 0; i< numbers.length; i += 1) {
  if (max < numbers[i]) {
    max = numbers[i]
  } 
}
console.log(max);
let odd = 0;
for (let i = 0; i< numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    odd += 1;
  } 
}
console.log(odd);

let min = max;
for (let i = 0; i< numbers.length; i += 1) {
  if (min > numbers[i]) {
    min = numbers[i]
  } 
}
console.log(min);
