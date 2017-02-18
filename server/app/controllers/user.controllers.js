const userModel = require('../models/user');

function signUp(res, req) {
  const { name, password } = req.body;
  userModel.findOne({ name, password }, function (err, doc) {
    if (!err) {
      const user = new userModel(req.body);
      user.save();
      res.send('注册成功');
    }
  });
}
function logIn(res, req) {
  userModel.findOne({ name, password } = req.body)
    .then('登录成功')
    .catch(err => console.error(err));
}
function userCtrl(res, req, next) {
  if (req) {
    // signUp();
    // console.log(req.body);
    res.send('nimei');
  } else {
    logIn();
  }
}

module.exports = userCtrl;
