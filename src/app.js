const express = require('express');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const vaidateDescription = require('./middlewares/validateDescription');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const generateToken = require('./utils/generateToken');
// const validateRating = require('./middlewares/validateRating');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;

// não remova e nem modifique esse endpoint
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.post('/activities',
  validateName, validatePrice, vaidateDescription, validateCreatedAt, (_req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    res.status(401).json({ message: 'Campos ausentes!' });
  }

  const token = generateToken();

  return res.status(201).json({ token });
});

module.exports = app;