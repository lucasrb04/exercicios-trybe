const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', preco: 40.0, tempoDePreparo: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', preco: 35.0, tempoDePreparo: 25 },
  { id: 3, name: 'Macarrão com molho branco', preco: 35.0, tempoDePreparo: 25 },
];

app.get('/recipes', function (req, res) {
  res.status(200).json(recipes);
});

app.get('/recipes/pesquisar', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.preco < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

function validateName(req, res, next) {
  const { name } = req.body;
  console.log(name);
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'});

  next(); 
};

function validatePrice(req, res, next) {
  const { preco } = req.body;
  if (!preco || typeof preco === "number" || preco > 0 ) return res.status(400).json({ message: 'Invalid data"!'});
  
  next(); 
}

app.post('/recipes', validateName, function (req, res) {
  const { id, name, price } = req.body;
  console.log(id, name, price);
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.put('/recipes/:id', validateName, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipesIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipesIndex === -1)
    return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipesIndex] = { ...recipes[recipesIndex], name, price };

  res.status(204).end();
});

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.all('*', function (req, res) {
    return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});