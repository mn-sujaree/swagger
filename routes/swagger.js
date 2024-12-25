const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// กำหนดค่า Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TODO API',
      version: '1.0.0',
      description: 'API for managing TODO tasks',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'], // ชี้ไปยังไฟล์ที่มี comment ของ API
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerSpec };
