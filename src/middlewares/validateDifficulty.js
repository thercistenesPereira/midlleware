module.exports = (req, res, next) => {
  const { difficulty } = req.body.description;
  const listDisfficulity = ['Fácil', 'Médio', 'Difícil'];
  
  if (!listDisfficulity.includes(difficulty)) {
    return res.status(400)
    .json({ message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' });
  }

  next();
};