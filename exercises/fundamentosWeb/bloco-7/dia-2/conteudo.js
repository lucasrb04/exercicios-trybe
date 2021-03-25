const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};
const listSkills = student => {
  for (let i = 0; i < Object.keys(student).length; i += 1) {
    console.log(`${Object.keys(student)[i]}, Nível: ${Object.values(student)[i]}`)
  }
}
console.log('Estudante 1:');
listSkills(student1)
console.log('');
console.log('Estudante 2:');
listSkills(student2)

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
customer.lastName = 'Faria'
console.log(customer);

const addValue = (object, key, value) => {
  object[key] = value
  console.log(object);
}
// addValue(customer, 'fullname', 'Roberto Faria')

const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsWithFor(student));

// Com Object.values
console.log(listSkillsWithValues(student));

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(index in pairKeyValue) {
  console.log('--------');
  console.log('Pais:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};