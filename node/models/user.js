const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: Number,
    validate: {
      validator(v) {
        // 0: 暂未设置 1: 男 2: 女
        return [0, 1, 2].includes(v);
      },
      message: props => `${props.value} 不在0，1，2当中`
    }
  },
  mobile: {
    type: String,
    validate: {
      validator(v) {
        return /^1\d{1-10}$/.test(v);
      },
      message: props => `${props.value} 不是正确的手机号码格式`
    }
  },
  email: {
    type: String
  },
  birthday: Date,
  intro: String,
  create_date: {
    type: Date,
    default: Date.now()
  },
  update_date: {
    type: Date,
    default: Date.now()
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
});

module.exports = mongoose.model('User', UserSchema);
