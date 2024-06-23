import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './api/config/database.js';
import urlRoutes from './api/routes/routes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpecs from './swaggerOptions.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use('/api', urlRoutes);



sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});
