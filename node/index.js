const Koa = require('koa');
const koaBody = require('koa-body');
const logger = require('koa-logger');
const router = require('./routers');

// 连接 MongoDB 数据库
require('./models/connection');

const app = new Koa();

app.use(logger());
app.use(koaBody());
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, err => {
  if (err) throw err;
  console.log('后端接口服务已经启动，端口：3000 ！');
});
