var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({'data':[
        {'deptName':'中国','deptCode':'310100','logoUrl':''},
        {'deptName':'美国','cityCode':'110100','logoUrl':''},
        {'deptName':'日本','cityCode':'410100','logoUrl':''},
        {'deptName':'俄罗斯','cityCode':'330100','logoUrl':''},
        {'deptName':'德国','cityCode':'320100','logoUrl':''},
        {'deptName':'英格兰','cityCode':'210200','logoUrl':''},
        {'deptName':'英格兰','cityCode':'210200','logoUrl':''},
        {'deptName':'加拿大','cityCode':'200100','logoUrl':''}
    ]});
});

module.exports = router;