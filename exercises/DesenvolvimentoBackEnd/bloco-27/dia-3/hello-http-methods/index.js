// hello-msc/index.js

const express = require('express');
const bodyParser = require('body-parser');

const authorController = require('./controllers/authorController');
const errorMiddleware = require('./middlewares/error');


const app = express();

app.use(bodyParser.json());

app.get('/authors', authorController.getAll);
app.get('/authors/:id', authorController.findById);
app.post('/authors', authorController.create);

app.use(errorMiddleware);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});