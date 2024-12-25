const express = require('express');
const todoRoutes = require('./routes/todoRoutes');
const app = express();
const PORT = 3000;

// Middleware สำหรับ JSON
app.use(express.json());

// เส้นทาง API
app.use('/todos', todoRoutes);

// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
