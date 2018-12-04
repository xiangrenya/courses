const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: String,
  content: String,
  create_date: {
    type: Date,
    default: Date.now()
  },
  update_date: {
    type: Date,
    default: Date.now()
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
});

module.exports = mongoose.model('Post', PostSchema);
