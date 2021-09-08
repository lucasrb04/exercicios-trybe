const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const User = require('./models/user')

app.use(bodyParser.json())

app.get('/author', async(req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
})

app.get('/author/:id', async(req, res) => {
  const { id } = req.params;

  const author = await Author.getById(id);

  if(!author) {
    return res.status(404).json({message: 'Author not found'});
  }
    res.status(200).json(author);
})

app.post('/user', async(req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    if(!User.isValid(firstName, lastName, email, password)) ;
  } catch (error) {
    res.status(400).json({message: error.message});
  }

  await User.create(firstName, lastName, email, password);
    res.status(201).json({message: 'User created'});

})

app.get('/book', async(req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
})

app.listen(port, () => console.log(`Example app listening on ${port} port!`))