const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommentSchema = new Schema({
  content: String,
  create_date: {
    type: Date,
    default: Date.now()
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Comment', CommentSchema);
