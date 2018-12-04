const postService = require('../services/post');

exports.get = async (ctx, next) => {
  const postId = ctx.params.id;
  ctx.body = await postService.get(postId);
};
