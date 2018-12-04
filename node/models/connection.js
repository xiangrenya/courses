const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://xiangry:xiang.123@ds013951.mlab.com:13951/xiangry',
  { useNewUrlParser: true },
  err => {
    if (err) throw err;
    console.log('已成功连接至mongodb数据库！');
    // require('../bin/initData')()
  }
);
