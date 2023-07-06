const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://bustime.mta.info',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/api',
    },
  })
);

app.listen(3000, () => {
  console.log('Proxy server is running on http://localhost:3000');
});
