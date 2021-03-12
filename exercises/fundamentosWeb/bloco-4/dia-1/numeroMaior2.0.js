let numero1 = 1;
let numero2 = 2;
let numero3 = 0;
if (numero1 > numero2 && numero1 > numero3) {
  console.log(numero1)
} else if (numero2 > numero1 && numero2 > numero3) {
  console.log(numero2)
} else if (numero3 > numero1 && numero3 > numero2) {
  console.log(numero3)
} else {
  console.log("Os números são iguais.")
}