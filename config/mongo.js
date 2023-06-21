const mongoose = require('mongoose');

const dbConnect = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('**** CONEXION CORRECTA 2023 ****');
    })
    .catch((error) => {
      console.error('***** ERROR DE CONEXION *****', error);
    });
};

module.exports = dbConnect;
