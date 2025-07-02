const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Gateway forwards requests to internal services
app.use('/api/rooms', createProxyMiddleware({
  target: 'http://localhost:5000',
  changeOrigin: true
}));

app.use('/api/users', createProxyMiddleware({
  target: 'http://localhost:5000',
  changeOrigin: true
}));

const port = 5001;
app.listen(port, () => console.log(`Gateway running on port ${port}`));
