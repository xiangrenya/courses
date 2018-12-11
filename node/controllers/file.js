const fs = require('fs');
const path = require('path');
const send = require('koa-send');

exports.upload = async (ctx, next) => {
  console.log(ctx.request.files.file.path);
  ctx.body = {
    result: true,
    message: '上传成功'
  };
};

// 也可以用下面这种方式自定义路径
exports.upload_2 = async (ctx, next) => {
  const file = ctx.request.files.file;
  if (typeof file === 'string') {
    // 单个文件
    pipeStream(file);
  } else {
    // 批量上传多个文件
    file.forEach(f => {
      pipeStream(f);
    });
  }
  ctx.body = {
    result: true,
    message: '上传成功'
  };
};

exports.download = async ctx => {
  const name = ctx.params.name;
  console.log(name);
  const relativePath = `./${name}`;
  ctx.attachment(relativePath);
  await send(ctx, relativePath, {
    root: path.resolve(__dirname, '../upload')
  });
};

exports.list = async ctx => {
  const dir = fs.readdirSync(path.resolve(__dirname, '../upload'));
  ctx.body = {
    result: true,
    data: dir
  };
};

function pipeStream(file) {
  const ext = file.name.split('.').pop();
  const reader = fs.createReadStream(file.path);
  const stream = fs.createWriteStream(`upload/${Date.now()}.${ext}`);
  reader.pipe(stream);
  console.log(`上传: ${file.name} -> ${stream.path}`);
}