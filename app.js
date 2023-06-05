const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRoute = require('./routes/productRoute');

const app = express();
dotenv.config();
app.use(express.json());
mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((result) => {
      app.listen(process.env.PORT, () => {
      });
    })
    .catch((err) => {
    });

app.use('/product', productRoute);
