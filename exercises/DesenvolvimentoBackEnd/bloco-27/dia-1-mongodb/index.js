const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const Author = require('./models/author')
const Book = require('./models/book')

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

app.post('/author', async(req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if(!Author.isValid(first_name, middle_name, last_name)) return res.status(400).json({message: 'Invalid author'});

  await Author.create(first_name, middle_name, last_name);
    res.status(201).json({message: 'Author created'});

})

app.get('/book', async(req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
})

app.listen(port, () => console.log(`Example app listening on ${port} port!`))