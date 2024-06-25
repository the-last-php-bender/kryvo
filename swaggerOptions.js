import swaggerJsdoc from 'swagger-jsdoc';
import dotenv from 'dotenv';

dotenv.config();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Novahive',
      version: '1.0.0',
      description: 'API documentation for Novahive',
      contact: {
        name: 'The_last_php_bender',
        email: 'nwinyinyadavid123@gmail.com',
      },
    },
    servers: [
      {
        url: process.env.BASE_URL, 
      },
    ],
  },
  apis: ['./api/docs/*.js'],
};

const specs = swaggerJsdoc(options);

export default specs;
