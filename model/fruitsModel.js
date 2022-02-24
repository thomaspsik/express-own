let fruits = [
  { name: 'Avocado', color: 'green' },
  { name: 'Birne', color: 'yellow' },
  { name: 'Citrone', color: 'yellow' },
];

const getAll = () => fruits;

const deleteFruit = (name) => {
  const found = fruits.find((f) => f.name === name);
  if (found) {
    fruits = fruits.filter((f) => f.name !== name);
    return 'ok';
  }
  return 'nok';
};

module.exports = { getAll, deleteFruit };
