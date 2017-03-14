const userModel = require('../models/user');

function signUp(req, res, next) {
  // const { name, password } = req.body;
  const name = req.body.name;
  const password = req.body.password;
  userModel.findOne({ 'userName': name, 'userPassword': password }, function (err, docs) {
    if (!err) {
      const user = new userModel({ 'userName': name, 'userPassword': password });
      user.save(user, function (err) {
        if (!err) {
          res.send('注册成功' + docs);
        } else {
          console.log(err);
        }
      });
    }
  });
}
function logIn(req, res) {
  const name = req.body.name;
  const password = req.body.password;
  userModel.findOne({ 'userName': name })
    .then((docs) => {
      if (docs) {
        userModel.findOne({ 'userName': name, 'userPassword': password })
          .then((docs) => {
            if (docs) {
              res.send(docs.userName);
            } else {
              res.send('密码错误，请重新输入');
            }
          })
          .catch(err => console.error(err));
      } else {
        res.send('用户不存在');
      }
    });
}
function userCtrl(req, res, next) {
  if (req.body.repassword == true) {
    signUp(req, res);
  } else {
    logIn(req, res);
  }
}

module.exports = userCtrl;
