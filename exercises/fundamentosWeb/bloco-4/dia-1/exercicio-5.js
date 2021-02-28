let nota = 80;
let processStatus;
if (nota >= 80) {
  processStatus = "aprovada"
} else if (nota < 80 && nota >= 60) {
  processStatus = "lista"
} else {
  processStatus = "aprovada"
}
switch (processStatus) {
  case "aprovada":
    console.log("Parabéns, você foi aprovado(a)!");
    break;
  case "lista":
    console.log("Você está na nossa lista de espera");
    break;
  case "reprovada":
    console.log("Você foi reprovado(a)");
    break;
}