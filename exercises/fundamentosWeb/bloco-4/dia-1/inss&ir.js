let aliquotaInss;
let aliquotaIr;
let salarioBase;
let salarioLiquido;
let salarioBruto = 2000;
if (salarioBruto > 5189.82) {
  aliquotaInss = 570.88;
} else if (salarioBruto >= 2594.93) {
  aliquotaInss = 0.11 * salarioBruto;
} else if (salarioBruto >= 1556.95) {
  aliquotaInss = 0.09 * salarioBruto;
} else {
  aliquotaInss = 0.08 * salarioBruto;
}
salarioBase = salarioBruto - aliquotaInss;
if (salarioBase > 4664.68) {
  aliquotaIr = (salarioBase * 0.275) - 869.36;
} else if (salarioBase > 3751.06) {
  aliquotaIr = (salarioBase * 0.225) - 636.13;
} else if (salarioBase > 2826.66) {
  aliquotaIr = (salarioBase * 0.15) - 354.80;
} else if (salarioBase > 1903.99) {
  aliquotaIr = (salarioBase * 0.075) - 142.80;
} else {
  aliquotaIr = 0;
}
salarioLiquido = salarioBase - aliquotaIr;
console.log(salarioLiquido);