const express = require('express');
const validateName = require('./middlewares/validateName');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;

// não remova e nem modifique esse endpoint
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.post('/activities', validateName, (_req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = app;