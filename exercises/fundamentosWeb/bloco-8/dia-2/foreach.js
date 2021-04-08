const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};
emailListInData.forEach(email => showEmailList(email));
// Use o método forEach chamando a callback showEmailList para apresentar os emails.

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];
names.forEach((name, i) => names[i] = name.toLowerCase());
console.log(names);