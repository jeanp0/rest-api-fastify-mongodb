const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));
