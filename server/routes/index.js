const express = require('express');
const userCtrl = require('../app/controllers/user.controllers.js');

const router = express.Router();


router.route('/')
    .get();
router.route('/api/user')
    .post(userCtrl);
module.exports = router;
