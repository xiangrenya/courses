const router = require('koa-router')();
const postController = require('./controllers/post');
const fileController = require('./controllers/file');

router.prefix('/api');

router.get('/', (ctx, next) => {
  ctx.body = 'homepage';
});

router.get('/posts/:id', postController.get);

router.post('/upload', fileController.upload);
router.get('/download/:name', fileController.download);
router.get('/files', fileController.list);

module.exports = router;
