const notFound = (req, res) => {
  res.status(404).send(`page not found! ${req.url}`);
};

module.exports = { notFound };
