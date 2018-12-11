const Koa = require('koa');
const serve = require('koa-static');
const koaBody = require('koa-body');
const logger = require('koa-logger');
const path = require('path');
const router = require('./routers');

// 连接 MongoDB 数据库
require('./models/connection');

const app = new Koa();
app.use(serve(path.join(__dirname, '/public')));
app.use(logger());

// error handler
app.use(async function(ctx, next) {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = {
      result: false,
      message: '服务器发生了错误, 请联系管理员邮箱: xiangrenya@gmail.com'
    };
    ctx.app.emit('error', err, ctx);
  }
});

app.use(
  koaBody({
    multipart: true,
    formidable: {
      maxFileSize: 20 * 1024 * 1024, // 设置上传文件大小最大限制，默认2M
      uploadDir: 'upload/',
      onFileBegin: (name, file) => {
        // 可以通过 input 属性 name，来区分文件存放路径，如 images,docs 等等
        // 文件存储之前对文件进行重命名处理
        const ext = file.name.split('.').pop();
        file.name = `${Date.now()}.${ext}`;
        file.path = `upload/${file.name}`;
      }
    }
  })
);

app.use(router.routes()).use(router.allowedMethods());

app.use(async function(ctx, next) {
  ctx.status = 404;
  ctx.body = {
    result: false,
    message: '接口地址未找到'
  };
});

app.on('error', function(err) {
  if (process.env.NODE_ENV != 'test') {
    console.log('sent error %s to the cloud', err.message);
    console.log(err);
  }
});

app.listen(3000, err => {
  if (err) throw err;
  console.log('后端接口服务已经启动，端口：3000 ！');
});
