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
app.use(
  koaBody({
    multipart: true,
    formidable: {
      maxFileSize: 2 * 1024 * 1024, // 设置上传文件大小最大限制，默认2M
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
  ctx.redirect('/404.html');
});

app.listen(3000, err => {
  if (err) throw err;
  console.log('后端接口服务已经启动，端口：3000 ！');
});
