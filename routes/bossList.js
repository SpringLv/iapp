var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({'data':[
        {'bossName':'张小明','bossCode':'310100','logoUrl':'','des':'当执行同步请求的响应时，在更新 state 前， 一定要先通过 this.isMounted() 来检测组件的状态是否还是 mounted。'},
        {'bossName':'王小二','bossCode':'110100','logoUrl':'','des':'当执行同步请求的响应时，在更新 state 前， 一定要先通过 this.isMounted() 来检测组件的状态是否还是 mounted。'},
        {'bossName':'李小东','bossCode':'410100','logoUrl':'','des':'当执行同步请求的响应时，在更新 state 前， 一定要先通过 this.isMounted() 来检测组件的状态是否还是 mounted。'},
        {'bossName':'周小小','bossCode':'330100','logoUrl':'','des':'当执行同步请求的响应时，在更新 state 前， 一定要先通过 this.isMounted() 来检测组件的状态是否还是 mounted。'},
        {'bossName':'刘小慧','bossCode':'320100','logoUrl':'','des':'当执行同步请求的响应时，在更新 state 前， 一定要先通过 this.isMounted() 来检测组件的状态是否还是 mounted。'},
        {'bossName':'郑晓晓','bossCode':'210200','logoUrl':'','des':'当执行同步请求的响应时，在更新 state 前， 一定要先通过 this.isMounted() 来检测组件的状态是否还是 mounted。'},
        {'bossName':'金三胖','bossCode':'210200','logoUrl':'','des':'当执行同步请求的响应时，在更新 state 前， 一定要先通过 this.isMounted() 来检测组件的状态是否还是 mounted。'},
        {'bossName':'啊大大','bossCode':'200100','logoUrl':'','des':'当执行同步请求的响应时，在更新 state 前， 一定要先通过 this.isMounted() 来检测组件的状态是否还是 mounted。'}
    ]});
});

module.exports = router;