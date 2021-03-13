let array = [1, 6, 3, 7, 8, 3, 9, 4, 6]
for (let i = 1; i < array.length; i += 1) {
   for (let j = 0; j < array.length; j += 1) {
     if (array[i] < array[j]) {
        let aux = array[i];
        array[i] = array[j];
        array[j] = aux;
     }
     
   }
  
}
console.log(array);

for (let i = 1; i < array.length; i += 1) {
   for (let j = 0; j < array.length; j += 1) {
     if (array[i] > array[j]) {
        let aux = array[i];
        array[i] = array[j];
        array[j] = aux;
     }
     
   }
  
}
console.log(array);
let result = []
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i + 1] > 0) {
   result.push(numbers[i] * numbers[i + 1]);
  } else {
    result.push(numbers[i] * 2);
  }
}
[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
console.log(result);