var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({'data':[
        {'deptName':'中国','deptCode':'310100','logoUrl':''},
        {'deptName':'美国','deptCode':'110100','logoUrl':''},
        {'deptName':'日本','deptCode':'410100','logoUrl':''},
        {'deptName':'俄罗斯','deptCode':'330100','logoUrl':''},
        {'deptName':'德国','deptCode':'320100','logoUrl':''},
        {'deptName':'英格兰','deptCode':'210200','logoUrl':''},
        {'deptName':'英格兰','deptCode':'210200','logoUrl':''},
        {'deptName':'加拿大','deptCode':'200100','logoUrl':''}
    ]});
});

module.exports = router;