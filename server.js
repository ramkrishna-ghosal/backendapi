const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

//calling route file
const planCalculator = require('./routes/calculators/plan_calculator');

//load env
dotenv.config({ path: './config/config.env' });

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Mount routers
app.use('/api/v1/calculators/', planCalculator);

PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);