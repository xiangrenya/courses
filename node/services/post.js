const User = require('../models/user');
const Comment = require('../models/comment');
const Post = require('../models/post');

exports.get = postId => {
  return new Promise((resolve, reject) => {
    Post.findById(postId)
      .populate({
        path: 'user',
        select: 'name'
      })
      .populate({
        path: 'comments',
        select: 'content create_date'
      })
      .exec((err, doc) => {
        if (err) reject(err);
        resolve(doc);
      });
  });
};
