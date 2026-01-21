const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');
const app = require('./config/server');

connectDB(); // 连接到 MongoDB

// 路由中间件
app.use('/api/users', userRoutes);

// 错误处理中间件
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});