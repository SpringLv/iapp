const express = require('express');
const userDao = require('../dao/userDao');
const router = express.Router();
router.post('/login.json', function (req, res, next) {
    userDao.check(req, res, next);
});
router.get('/users.html', function (req, res, next) {
    res.render('users.html',{title:'用户登录'});
});

module.exports = router;