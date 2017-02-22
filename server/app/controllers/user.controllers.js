const userModel = require('../models/user');

function signUp(req, res, next) {
  // const { name, password } = req.body;
  const name = req.body.name;
  const password = req.body.password;
  userModel.findOne({ 'userName': name, 'userPassword': password }, function (err, docs) {
    if (!err ) {
      const user = new userModel({ 'userName': name, 'userPassword': password });
      user.save(user, function(err) {
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
  userModel.findOne({ 'userName': name, 'userPassword': password })
    .then( () => {console.log("登录成功")})
    .catch(err => console.error(err));
}
function userCtrl(req, res, next) {
  if (req.body.repassword == true){
    signUp(req, res);
  } else {
    logIn(req, res);
  }
}

module.exports = userCtrl;
