const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const User = require('../models/user');
const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports = function() {
  const userIds = new Array(3).fill(0).map(o => new ObjectId());
  const postIds = new Array(3).fill(0).map(o => new ObjectId());
  const commentIds = new Array(3).fill(0).map(o => new ObjectId());
  const names = 'allen,peter,darcy'.split(',');
  const titles = 'post-by-allen,post-by-peter,post-by-darcy'.split(',');
  const contents = 'comment-by-allen,comment-by-peter,comment-by-darcy'.split(
    ','
  );

  const users = new Array(3).fill(0).map((o, i) => ({
    _id: userIds[i],
    name: names[i],
    posts: [postIds[i]]
  }));

  const posts = new Array(3).fill(0).map((o, i) => ({
    _id: postIds[i],
    title: titles[i],
    user: userIds[i],
    comments: [commentIds[i]]
  }));

  const comments = new Array(3).fill(0).map((o, i) => ({
    _id: commentIds[i],
    content: contents[i],
    user: userIds[i],
    post: postIds[i]
  }));

  User.create(users, function(err, docs) {
    Post.create(posts, function(err, docs) {
      Comment.create(comments, function(err, docs) {
        console.log('初始化数据成功！');
      });
    });
  });
};
