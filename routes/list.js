var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({'data':[
        {'cityName':'上海','cityCode':'310100'},
        {'cityName':'北京','cityCode':'110100'},
        {'cityName':'广州','cityCode':'410100'},
        {'cityName':'杭州','cityCode':'330100'},
        {'cityName':'南京','cityCode':'320100'},
        {'cityName':'大连','cityCode':'210200'},
        {'cityName':'沈阳','cityCode':'200100'}
    ]});
});

module.exports = router;