const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const productRoute = require('./routes/productRoute');
const accountRoute = require('./routes/accountsRoute');
const { connectToDatabase } = require('./database/index');
const logApiHit = require('./middlewares/logger');
const YAML = require('yamljs');
const logger = require('./utils/logger');
const AuthenticatedRouter = require('./utils/authenticatedRoute');
const errorHandler = require('./middlewares/errorHandler');
const app = express();
const swaggerDocument = YAML.load('./swagger/swagger.yaml');

dotenv.config();

connectToDatabase();

app.use(express.json());
app.use(cors());

app.use(logApiHit);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/products', productRoute(AuthenticatedRouter()));
app.use('/accounts', accountRoute);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  logger.info(`Server is running on port ${process.env.PORT}`);
});

module.exports = app;
