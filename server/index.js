const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const apiRoutes = require('./routes');
const app = express();

mongoose
  .connect(process.env.CONNECTION_STRING, {})
  .then(() => console.log('DB connected'))
  .catch((err) => console.log('DB Error => ', err));

// Express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
// app.use(cors()); // allow origins to make requests to this server
if (process.env.NODE_ENV == 'development') {
  app.use(cors({ origin: 'http://localhost:3001' }));
}

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server started at http://127.0.0.1:${PORT}`);
});
