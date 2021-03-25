const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addValue = (object, key, value) => {
  object[key] = value
  // console.log(object);
}
addValue(lesson2, 'turno', 'manhã')

const listKey = object => {
  console.log(Object.keys(object));
}
listKey(lesson1)

const objectLenght = object => {
  console.log(Object.keys(object).length);
}
objectLenght(lesson1)

const objectValues = object => {
  console.log(Object.values(object));
}
objectValues(lesson1);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);
const totalStudents = (obj) => {
  let total1 = 0;
  for (let i = 0; i < Object.keys(obj).length; i++) {
    total1 += Object.values(Object.values(obj)[i])[1];
  }
  console.log(total1);
}
totalStudents(allLessons)

const getValueByNumber = (obj, position) => Object.values(obj)[position];
console.log(getValueByNumber(lesson2, 2));

const verifyPair = (obj, key, value) => (obj[key] === value) ? true : false;
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

