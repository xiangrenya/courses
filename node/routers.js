const router = require('koa-router')();
const postController = require('./controllers/post');

router.prefix('/api');

router.get('/', (ctx, next) => {
  ctx.body = 'homepage';
});

router.get('/posts/:id', postController.get);

module.exports = router;
