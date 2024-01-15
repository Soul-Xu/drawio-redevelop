const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// 启用 CORS
app.use(cors());
app.use(express.static(path.join(__dirname, 'src/main/webapp')));

// 其他 drawio-redevelop 项目配置...
// 处理根路径的 GET 请求
app.get('/', (req, res) => {
  // 发送 drawio-redevelop 项目的入口文件
  res.sendFile(path.join(__dirname, 'src/main/webapp/index.html'));
});

// 启动服务器
const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
