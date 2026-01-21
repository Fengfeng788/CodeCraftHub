const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // 解析 JSON 请求体

module.exports = app;