const notFound = (req, res) => {
  const msg = `page not found! ${req.url}`;
  console.error(msg.red);
  res.status(404).send(msg);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  console.error(err.stack.red);
  res.status(500).send(err.message);
};

module.exports = { notFound, errorHandler };
