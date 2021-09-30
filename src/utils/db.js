const mongoose = require('mongoose');

const uri =
  'mongodb+srv://jeanpierm:31416@cluster0.cqh7m.mongodb.net/fastifycrud?retryWrites=true&w=majority';

mongoose
  .connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));
