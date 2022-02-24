const express = require('express');
const { getAll, deleteFruit } = require('../controller/fruitsController');

const router = express.Router();

/** get all fruits route */
router.get('/', getAll);
router.delete('/:name', deleteFruit);

module.exports = router;
