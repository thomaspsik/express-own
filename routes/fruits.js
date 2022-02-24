const express = require('express');
const { getAll, deleteFruit, createError } = require('../controller/fruitsController');

const router = express.Router();

/** get all fruits route */
router.get('/', getAll);
router.delete('/:name', deleteFruit);
router.get('/error', createError);

router.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).send('ok');
});

module.exports = router;
