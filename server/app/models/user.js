/* eslint no-console: ["error", { allow: ["warn", "error","log"] }] */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  // school: String,
});

const userModel = mongoose.model('userModel', userSchema);
//   应该单独出来
mongoose.connect('mongodb://127.0.0.1/iclass');
const db = mongoose.connection;
db.on('error', () => { console.log('db connect error error is ${error}'); });
db.once('open', () => { console.log('database connect success'); });
module.exports = userModel;
