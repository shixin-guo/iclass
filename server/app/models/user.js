/* eslint no-console: ["error", { allow: ["warn", "error","log"] }] */
const mongoose = require('mongoose');
// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

// plugin bluebird promise in mongoose
mongoose.Promise = Promise;

const Schema = mongoose.Schema;


const userSchema = new Schema({
  userName: { type: String, required: true },
  userPassword: { type: String, required: true },
  userRepassword: { type: Boolean },
  // school: String,
});

const userModel = mongoose.model('userModel', userSchema);
//   应该单独出来
mongoose.connect('mongodb://127.0.0.1/iclass');
const db = mongoose.connection;
db.on('error', () => { console.log('db connect error error is ${error}'); });
db.once('open', () => { console.log('database connect success'); });
module.exports = userModel;
