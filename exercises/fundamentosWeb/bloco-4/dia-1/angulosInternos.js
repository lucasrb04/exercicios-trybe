let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 60;
let somaAngulos = angulo1 + angulo2 + angulo3;
//testando se algum dos 3 ângulos são negativos.
if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
  console.log("Erro: 'foram digitados ângulos negativos!!'");
} else if (somaAngulos == 180) {
  console.log(true);
} else { 
  console.log(false);
}