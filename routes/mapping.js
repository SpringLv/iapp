var express = require('express');
var router = express.Router();

/* get index */
router.get(['/index.html','/'], function (req, res, next) {
    res.render('index.html', {title: 'index'});
});

/* get reduxer */
router.get(['/reduxer.html','/'], function (req, res, next) {
    res.render('reduxer.html', {title: 'reduxer'});
});

/* get email */
router.get('/email.html', function (req, res, next) {
    res.render('email.html', {title: 'email'});
});

/* get email */
router.get('/tree.html', function (req, res, next) {
    res.render('tree.html', {title: 'tree'});
});

/* get email */
router.get('/treeList', function (req, res, next) {
    res.json({"data":[
        {"name":"一级节点","children":[
            {"name":"二级节点","children":[
                {"name":"三级节点","children":[]},
                {"name":"三级节点","children":[]},
                {"name":"三级节点","children":[
                    {"name":"四级节点","children":[]},
                    {"name":"四级节点","children":[]},
                    {"name":"四级节点","children":[
                            {"name":"一级节点","children":[
                            {"name":"二级节点","children":[
                                {"name":"三级节点","children":[]},
                                {"name":"三级节点","children":[]},
                                {"name":"三级节点","children":[
                                    {"name":"四级节点","children":[]},
                                    {"name":"四级节点","children":[]},
                                    {"name":"四级节点","children":[]}
                                ]
                                }
                            ]
                            },
                            {"name":"二级节点","children":[
                                {"name":"三级节点","children":[]},
                                {"name":"三级节点","children":[]},
                                {"name":"三级节点","children":[]}
                                ]
                            }
                            ]
                        }
                        ]
                    }
                    ]
                }
                ]
            },
            {"name":"二级节点","children":[
                {"name":"三级节点","children":[
                    {"name":"三级节点","children":[]}
                ]},
                {"name":"三级节点","children":[]},
                {"name":"三级节点","children":[]}
                ]
            }
            ]
        }
    ]})
});

router.post('/emailList', function (req, res, next) {
    var name = req.param("name");
    var data = [];
    switch (name) {
        case "张小米":
            data = [
                {'name': '张小米', 'email': 'huahua@hotbb.com'},
                {'name': '张小米', 'email': 'huahua@hotbb.com'},
                {'name': '张小米', 'email': 'huahua@hotbb.com'},
                {'name': '张小米', 'email': 'huahua@hotbb.com'}
            ]
            break;
        case "张小明":
            data = [
                {'name': '张小米', 'email': 'huahua@hotbb.com'},
                {'name': '张小米', 'email': 'huahua@hotbb.com'},
                {'name': '张小米', 'email': 'huahua@hotbb.com'},
                {'name': '张小米', 'email': 'huahua@hotbb.com'}
            ]
            break;
        case "张小小":
            data = [
                {'name': '张小米', 'email': 'huahua@hotbb.com'},
                {'name': '张小米', 'email': 'huahua@hotbb.com'},
                {'name': '张小米', 'email': 'huahua@hotbb.com'},
                {'name': '张小米', 'email': 'huahua@hotbb.com'}
            ]
            break;
        case "小米":
            data = [
                {'name': '张小米', 'email': 'huahua@hotbb.com'},
                {'name': '张小米', 'email': 'huahua@hotbb.com'},
                {'name': '张小米', 'email': 'huahua@hotbb.com'},
                {'name': '张小米', 'email': 'huahua@hotbb.com'}
            ]
            break;
        case "张米":
            data = [
                {'name': '张米', 'email': 'huahua@hotbb.com'},
                {'name': '花花', 'email': 'huahua@hotbb.com'},
                {'name': '菜菜', 'email': 'huahua@hotbb.com'},
                {'name': '草草', 'email': 'huahua@hotbb.com'}
            ]
            break;
        default :
            data = []
    }
    res.json({'data':data});
});

/* ajax deptList*/
router.get('/deptList', function (req, res, next) {
    res.json({
        'data': [
            {'deptName': '中国', 'deptCode': '310100', 'logoUrl': ''},
            {'deptName': '美国', 'deptCode': '110100', 'logoUrl': ''},
            {'deptName': '日本', 'deptCode': '410100', 'logoUrl': ''},
            {'deptName': '俄罗斯', 'deptCode': '330100', 'logoUrl': ''},
            {'deptName': '德国', 'deptCode': '320100', 'logoUrl': ''},
            {'deptName': '英格兰', 'deptCode': '210200', 'logoUrl': ''},
            {'deptName': '英格兰', 'deptCode': '210200', 'logoUrl': ''},
            {'deptName': '加拿大', 'deptCode': '200100', 'logoUrl': ''}
        ]
    });
});

/* ajax bossList  */
router.get('/bossList', function (req, res, next) {
    res.json({
        'data': [
            {
                'bossName': '张小明',
                'bossCode': '310100',
                'logoUrl': '',
                'des': '当执行同步请求的响应时，在更新 state 前， 一定要先通过 this.isMounted() 来检测组件的状态是否还是 mounted。'
            },
            {
                'bossName': '王小二',
                'bossCode': '110100',
                'logoUrl': '',
                'des': '当执行同步请求的响应时，在更新 state 前， 一定要先通过 this.isMounted() 来检测组件的状态是否还是 mounted。'
            },
            {
                'bossName': '李小东',
                'bossCode': '410100',
                'logoUrl': '',
                'des': '当执行同步请求的响应时，在更新 state 前， 一定要先通过 this.isMounted() 来检测组件的状态是否还是 mounted。'
            },
            {
                'bossName': '周小小',
                'bossCode': '330100',
                'logoUrl': '',
                'des': '当执行同步请求的响应时，在更新 state 前， 一定要先通过 this.isMounted() 来检测组件的状态是否还是 mounted。'
            },
            {
                'bossName': '刘小慧',
                'bossCode': '320100',
                'logoUrl': '',
                'des': '当执行同步请求的响应时，在更新 state 前， 一定要先通过 this.isMounted() 来检测组件的状态是否还是 mounted。'
            },
            {
                'bossName': '郑晓晓',
                'bossCode': '210200',
                'logoUrl': '',
                'des': '当执行同步请求的响应时，在更新 state 前， 一定要先通过 this.isMounted() 来检测组件的状态是否还是 mounted。'
            },
            {
                'bossName': '金三胖',
                'bossCode': '210200',
                'logoUrl': '',
                'des': '当执行同步请求的响应时，在更新 state 前， 一定要先通过 this.isMounted() 来检测组件的状态是否还是 mounted。'
            },
            {
                'bossName': '啊大大',
                'bossCode': '200100',
                'logoUrl': '',
                'des': '当执行同步请求的响应时，在更新 state 前， 一定要先通过 this.isMounted() 来检测组件的状态是否还是 mounted。'
            }
        ]
    });
});

/* ajax cityList */
router.get('/cityList', function (req, res, next) {
    res.json({
        'data': [
            {'cityName': '上海', 'cityCode': '310100'},
            {'cityName': '北京', 'cityCode': '110100'},
            {'cityName': '广州', 'cityCode': '410100'},
            {'cityName': '杭州', 'cityCode': '330100'},
            {'cityName': '南京', 'cityCode': '320100'},
            {'cityName': '大连', 'cityCode': '210200'},
            {'cityName': '沈阳', 'cityCode': '200100'}
        ]
    });
});

/* ajax searchList */
router.get('/searchList', function (req, res, next) {
    res.json({
        "data": [
            {"name": "joke", "age": "20", "code": "001"},
            {"name": "alice", "age": "21", "code": "001"},
            {"name": "jame", "age": "22", "code": "001"},
            {"name": "baby", "age": "23", "code": "001"},
            {"name": "lily", "age": "24", "code": "001"},
            {"name": "anti", "age": "25", "code": "001"},
            {"name": "joke", "age": "20", "code": "001"},
            {"name": "joke", "age": "20", "code": "001"},
            {"name": "joke", "age": "20", "code": "001"},
            {"name": "joke", "age": "20", "code": "001"},
            {"name": "joke", "age": "20", "code": "001"},
            {"name": "joke", "age": "20", "code": "001"},
            {"name": "joke", "age": "20", "code": "001"},
            {"name": "joke", "age": "20", "code": "001"},
        ]
    });
});

module.exports = router;
