const fs = require('fs').promises;

const nomeDoArquivo = './simpsons.json';

async function lerArquivo() {
try {
  await fs.readFile(nomeDoArquivo, 'utf8')
    .then(data => JSON.parse(data))
      .then(simpsons => {
        simpsons.map(({id, name}) => {
          console.log(`${id} - ${name}`);
        }
      )});
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}
};

const getById = async (simpsonId) => {
    const simpsons = await fs
      .readFile(nomeDoArquivo, 'utf8')
      .then(data => JSON.parse(data))
    const simpson = simpsons.find((simpson) => simpson.id === simpsonId)

    if (!simpson) throw new Error(`Simpson com id ${simpsonId} não encontrado`)

    return simpson
    }

const delPerson = async () => {
  const simpsons = await fs
    .readFile(nomeDoArquivo, 'utf8')
    .then(data => JSON.parse(data))
  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6')
  console.log(newArray);
  await fs.writeFile(nomeDoArquivo, JSON.stringify(newArray))
  }

const modifyPerson = async () => {
  const simpsons = await fs
    .readFile(nomeDoArquivo, 'utf8')
    .then(data => JSON.parse(data))
  
  const newArray = simpsons.map((simpson) => {
    if (simpson.id === '10') {
      simpson.name = 'Matheus Simpson'
    }
    })
    await fs.writeFile(nomeDoArquivo, JSON.stringify(newArray))
}

// getById(1)
//   .then(simpson => console.log(simpson))
//   .catch(err => console.log(err.message))

// const main = async () => {
// try {
//   delPerson()
//   .then(lerArquivo())
// } catch (error) {
//   console.log(error.message);
// }};

// main();

function replaceNelson () {
  // Realizamos a leitura do arquivo
  return fs.readFile('./simpsonsFamily.json', 'utf-8')
    // Interpretamos o conteúdo como JSON
    .then((fileContent) => JSON.parse(fileContent))
    // Filtramos o array para remover o personagem Nelson
    .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '8'))
    // Criamos um novo Array contendo a personagem Maggie
    .then((simpsonsWithoutNelson) => simpsonsWithoutNelson
      .concat([{ id: '8', name: 'Maggie Simpson' }]))
    // Escrevemos o novo array no arquivo
    .then((simpsonsWithMaggie) =>
      fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie)));
}

const main = async () => {
  try {
    replaceNelson()
  } catch (error) {
    console.log(error.message);
  }};
  
  main();

async function arrayToFile() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const createFilePromises = strings.map((string, index) =>
    fs.writeFile(`./file${index + 1}.txt`, string)
  );

  await Promise.all(createFilePromises);

  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const fileContents = await Promise.all(
    fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'))
  );

const newFileContent = fileContents.join(' ');

await fs.writeFile('./fileAll.txt', newFileContent);
}
