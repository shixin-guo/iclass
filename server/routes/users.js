const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// router.post('/register', function(req, res, next) {
//     user = req.body.user;
//     password = req.body.password;
//     // if (user= "" || password= "") {
//     //  res.send(400);
//     // }else{
//     // }
// });
module.exports = router;