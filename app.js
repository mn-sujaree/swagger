const express = require('express');
const todoRoutes = require('./routes/todoRoutes');
const { swaggerUi, swaggerSpec } = require('./routes/swagger');
const app = express();
const PORT = 3000;

// Middleware สำหรับ JSON
app.use(express.json());

// เส้นทาง API
app.use('/todos', todoRoutes);

// เส้นทางเอกสาร Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
