/* eslint-disable prefer-destructuring */
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const { notFound } = require('./middleware/errorhandler');
const fruits = require('./routes/fruits');
require('dotenv').config();

const app = express();
app.use(helmet());
app.use(morgan('dev'));

app.use('/alive', (req, res) => {
  res.send('es lebt!');
});

app.use('/fruits', fruits);
app.use(notFound);

const PORT = process.env.PORT || 5000;
console.log(`Server is running on port ${PORT}`);
app.listen(PORT);
