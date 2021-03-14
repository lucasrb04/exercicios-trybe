let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log(`Bem-vindo(a) ${info.personagem}`)

info.recorrente = 'Sim'

console.log(info);

for (const key in info) {
  console.log(key);
}

for (const key in info) {
  console.log(info[key]);
}

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};
