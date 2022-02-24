const fruits = require('../model/fruitsModel');

const getAll = (req, res) => {
  res.status(200).json(fruits.getAll());
};

const deleteFruit = (req, res) => {
  const result = fruits.deleteFruit(req.params.name);
  if (result === 'ok') {
    res.status(204).end();
    return;
  }
  res.status(304).send('no fruit found');
};

module.exports = { getAll, deleteFruit };
