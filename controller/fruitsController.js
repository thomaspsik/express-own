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

// eslint-disable-next-line no-unused-vars
const createError = (req, res) => {
  throw new Error('Test error');
};

module.exports = { getAll, deleteFruit, createError };
