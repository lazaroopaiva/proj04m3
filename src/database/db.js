const mongoose = require('mongoose');
const connectToDatabase = () => {
  mongoose
    .connect(
      'mongodb+srv://lazopaiva:01012000lazaros@apirickandmortyptdois.wr6ldgc.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(() => {
      console.log('MongoDB has been connected');
    })
    .catch((error) => {
      return console.log(`Connection to database ERROR: ${error}`);
    });
};

module.exports = connectToDatabase;
