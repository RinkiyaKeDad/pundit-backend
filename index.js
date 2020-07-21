const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.POST || 5000;
app.listen(PORT, () => console.log('Server up'));

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  err => {
    if (err) throw err;
    console.log('MongoDB connection established');
  }
);

app.use('/users', require('./routes/userRoutes'));
app.use('/puns', require('./routes/punRoutes'));
