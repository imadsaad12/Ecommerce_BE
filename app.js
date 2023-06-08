const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const productRoute = require('./routes/productRoute');
const {connectToDatabase} = require('./database/index');
const logApiHit = require('./middlewares/logger');
const app = express();
dotenv.config();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use(logApiHit);

app.use('/products', productRoute);
app.listen(process.env.PORT, () => {});
