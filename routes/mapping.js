var express = require('express');
var router = express.Router();


/* get index */
router.get(['/index.html','/'], function (req, res, next) {
    res.render('index.html', {title: 'index'});
});
/* get reduxer */
router.get(['/paper.html','/'], function (req, res, next) {
    res.render('paper.html', {title: 'paper'});
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

router.get('/emailList', function (req, res, next) {
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
            {'cityName': '广州广州', 'cityCode': '410100'},
            {'cityName': '杭州', 'cityCode': '330100'},
            {'cityName': '南京南京南京', 'cityCode': '320100'},
            {'cityName': '大连大连大连', 'cityCode': '210200'},
            {'cityName': '沈阳', 'cityCode': '200100'}
        ]
    });
});

router.get('/blogScanner.json', function (req, res, next) {
    res.json({
        "chapterList": [
            {
                "name": "Java",
                "id": 11,
                "sort": 1,
                "userId": 1,
                "count": 5,
                "sectionList": [
                    {
                        "name": "三闾大夫",
                        "id": 14,
                        "sort": 1,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "我多",
                        "id": 16,
                        "sort": 2,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "sdf",
                        "id": 13,
                        "sort": 3,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "aaa",
                        "id": 12,
                        "sort": 4,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "多线程",
                        "id": 2,
                        "sort": 5,
                        "chapterId": 11,
                        "createTime": 1480262400000,
                        "modifiedTime": 1480262400000
                    },
                    {
                        "name": "三闾大夫",
                        "id": 14,
                        "sort": 1,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "我多",
                        "id": 16,
                        "sort": 2,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "sdf",
                        "id": 13,
                        "sort": 3,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "aaa",
                        "id": 12,
                        "sort": 4,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "多线程",
                        "id": 2,
                        "sort": 5,
                        "chapterId": 11,
                        "createTime": 1480262400000,
                        "modifiedTime": 1480262400000
                    },
                    {
                        "name": "三闾大夫",
                        "id": 14,
                        "sort": 1,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "我多",
                        "id": 16,
                        "sort": 2,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "sdf",
                        "id": 13,
                        "sort": 3,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "aaa",
                        "id": 12,
                        "sort": 4,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "多线程",
                        "id": 2,
                        "sort": 5,
                        "chapterId": 11,
                        "createTime": 1480262400000,
                        "modifiedTime": 1480262400000
                    },
                    {
                        "name": "三闾大夫",
                        "id": 14,
                        "sort": 1,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "我多",
                        "id": 16,
                        "sort": 2,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "sdf",
                        "id": 13,
                        "sort": 3,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "aaa",
                        "id": 12,
                        "sort": 4,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "多线程",
                        "id": 2,
                        "sort": 5,
                        "chapterId": 11,
                        "createTime": 1480262400000,
                        "modifiedTime": 1480262400000
                    },
                    {
                        "name": "三闾大夫",
                        "id": 14,
                        "sort": 1,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "我多",
                        "id": 16,
                        "sort": 2,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "sdf",
                        "id": 13,
                        "sort": 3,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "aaa",
                        "id": 12,
                        "sort": 4,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "多线程",
                        "id": 2,
                        "sort": 5,
                        "chapterId": 11,
                        "createTime": 1480262400000,
                        "modifiedTime": 1480262400000
                    },
                    {
                        "name": "三闾大夫",
                        "id": 14,
                        "sort": 1,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "我多",
                        "id": 16,
                        "sort": 2,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "sdf",
                        "id": 13,
                        "sort": 3,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "aaa",
                        "id": 12,
                        "sort": 4,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "多线程",
                        "id": 2,
                        "sort": 5,
                        "chapterId": 11,
                        "createTime": 1480262400000,
                        "modifiedTime": 1480262400000
                    },
                    {
                        "name": "三闾大夫",
                        "id": 14,
                        "sort": 1,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "我多",
                        "id": 16,
                        "sort": 2,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "sdf",
                        "id": 13,
                        "sort": 3,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "aaa",
                        "id": 12,
                        "sort": 4,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "多线程",
                        "id": 2,
                        "sort": 5,
                        "chapterId": 11,
                        "createTime": 1480262400000,
                        "modifiedTime": 1480262400000
                    },
                    {
                        "name": "三闾大夫",
                        "id": 14,
                        "sort": 1,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "我多",
                        "id": 16,
                        "sort": 2,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "sdf",
                        "id": 13,
                        "sort": 3,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "aaa",
                        "id": 12,
                        "sort": 4,
                        "chapterId": 11,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "多线程",
                        "id": 2,
                        "sort": 5,
                        "chapterId": 11,
                        "createTime": 1480262400000,
                        "modifiedTime": 1480262400000
                    }
                ],
                "createTime": 1480521600000,
                "modifiedTime": 1480521600000
            },
            {
                "name": "Tomcat",
                "id": 24,
                "sort": 2,
                "userId": 1,
                "count": 0,
                "sectionList": [],
                "createTime": 1480521600000,
                "modifiedTime": 1480521600000
            },
            {
                "name": "Oracle",
                "id": 28,
                "sort": 3,
                "userId": 1,
                "count": 0,
                "sectionList": [],
                "createTime": 1480521600000,
                "modifiedTime": 1480521600000
            },
            {
                "name": "Mysql",
                "id": 29,
                "sort": 4,
                "userId": 1,
                "count": 0,
                "sectionList": [],
                "createTime": 1480521600000,
                "modifiedTime": 1480521600000
            },
            {
                "name": "Shell",
                "id": 27,
                "sort": 5,
                "userId": 1,
                "count": 0,
                "sectionList": [],
                "createTime": 1480521600000,
                "modifiedTime": 1480521600000
            },
            {
                "name": "Spring",
                "id": 13,
                "sort": 6,
                "userId": 1,
                "count": 2,
                "sectionList": [
                    {
                        "name": "Tomcat源码",
                        "id": 3,
                        "sort": 1,
                        "chapterId": 13,
                        "createTime": 1480262400000,
                        "modifiedTime": 1480262400000
                    },
                    {
                        "name": "Tomcat进阶",
                        "id": 4,
                        "sort": 2,
                        "chapterId": 13,
                        "createTime": 1480262400000,
                        "modifiedTime": 1480262400000
                    }
                ],
                "createTime": 1480521600000,
                "modifiedTime": 1480521600000
            },
            {
                "name": "Ibatis",
                "id": 26,
                "sort": 7,
                "userId": 1,
                "count": 0,
                "sectionList": [],
                "createTime": 1480521600000,
                "modifiedTime": 1480521600000
            },
            {
                "name": "Hibernate",
                "id": 23,
                "sort": 8,
                "userId": 1,
                "count": 0,
                "sectionList": [],
                "createTime": 1480521600000,
                "modifiedTime": 1480521600000
            },
            {
                "name": "Maven",
                "id": 33,
                "sort": 9,
                "userId": 1,
                "count": 0,
                "sectionList": [],
                "createTime": 1480608000000,
                "modifiedTime": 1480608000000
            },
            {
                "name": "Ant",
                "id": 35,
                "sort": 10,
                "userId": 1,
                "count": 0,
                "sectionList": [],
                "createTime": 1480608000000,
                "modifiedTime": 1480608000000
            },
            {
                "name": "Log4J",
                "id": 37,
                "sort": 11,
                "userId": 1,
                "count": 0,
                "sectionList": [],
                "createTime": 1480608000000,
                "modifiedTime": 1480608000000
            },
            {
                "name": "OSGI",
                "id": 25,
                "sort": 12,
                "userId": 1,
                "count": 0,
                "sectionList": [],
                "createTime": 1480521600000,
                "modifiedTime": 1480521600000
            },
            {
                "name": "Docker",
                "id": 14,
                "sort": 13,
                "userId": 1,
                "count": 2,
                "sectionList": [
                    {
                        "name": "Spring事务",
                        "id": 5,
                        "sort": 1,
                        "chapterId": 14,
                        "createTime": 1480262400000,
                        "modifiedTime": 1480262400000
                    },
                    {
                        "name": "Spring源码",
                        "id": 6,
                        "sort": 2,
                        "chapterId": 14,
                        "createTime": 1480262400000,
                        "modifiedTime": 1480262400000
                    }
                ],
                "createTime": 1480521600000,
                "modifiedTime": 1480521600000
            },
            {
                "name": "学习计划",
                "id": 38,
                "sort": 14,
                "userId": 1,
                "count": 0,
                "sectionList": [],
                "createTime": 1480608000000,
                "modifiedTime": 1480608000000
            },
            {
                "name": "软件使用",
                "id": 34,
                "sort": 15,
                "userId": 1,
                "count": 3,
                "sectionList": [
                    {
                        "name": "SVN",
                        "id": 9,
                        "sort": 1,
                        "chapterId": 34,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "Eclipse",
                        "id": 10,
                        "sort": 2,
                        "chapterId": 34,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    },
                    {
                        "name": "sdfssssss",
                        "id": 11,
                        "sort": 3,
                        "chapterId": 34,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    }
                ],
                "createTime": 1480608000000,
                "modifiedTime": 1480608000000
            },
            {
                "name": "Shiro",
                "id": 36,
                "sort": 16,
                "userId": 1,
                "count": 0,
                "sectionList": [],
                "createTime": 1480608000000,
                "modifiedTime": 1480608000000
            },
            {
                "name": "JBPM",
                "id": 21,
                "sort": 17,
                "userId": 1,
                "count": 0,
                "sectionList": [],
                "createTime": 1480521600000,
                "modifiedTime": 1480521600000
            },
            {
                "name": "问道",
                "id": 32,
                "sort": 18,
                "userId": 1,
                "count": 1,
                "sectionList": [
                    {
                        "name": "a",
                        "id": 7,
                        "sort": 1,
                        "chapterId": 32,
                        "createTime": 1480608000000,
                        "modifiedTime": 1480608000000
                    }
                ],
                "createTime": 1480608000000,
                "modifiedTime": 1480608000000
            }
        ],
        "isSuccess": true
    });
});
router.get('/blogArticleList.json', function(req, res, next){
    res.json({
        "articleList": [
            {
                "id": 1,
                "type": 1,
                "content": "<blog-text-normal>我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人</blog-text-normal><blog-text-normal>我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人</blog-text-normal><bolog-img-normal>image/baidulogo.jpg</bolog-img-normal><bolog-img-br>image/googlelogo.jpg</bolog-img-br><bolog-img-normal>image/tencentlogo.jpg</bolog-img-normal><bolog-img-normal>image/alibabalogo.jpg</bolog-img-normal><blog-text-normal>我深深的爱着我的祖国</blog-text-normal><blog-text-normal>邓小平</blog-text-normal>",
                "contentHtml": "<font>我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人</font><br /><br /><font>我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人</font><br /><br />< img src=\"image/baidulogo.jpg\" />< img src=\"image/googlelogo.jpg\" /><br /><br />< img src=\"image/tencentlogo.jpg\" />< img src=\"image/alibabalogo.jpg\" /><br /><br /><font>我深深的爱着我的祖国</font><br /><br /><font>邓小平</font>",
                "title": "NullPointException",
                "sectionId": 14,
                "sort": 1,
                "createTime": 1480262400000,
                "modifiedTime": 1480262400000
            },
            {
                "id": 2,
                "type": 1,
                "content": "<blog-text-normal>我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人</blog-text-normal><blog-text-normal>我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人</blog-text-normal><bolog-img-normal>image/baidulogo.jpg</bolog-img-normal><bolog-img-br>image/googlelogo.jpg</bolog-img-br><bolog-img-normal>image/tencentlogo.jpg</bolog-img-normal><bolog-img-normal>image/alibabalogo.jpg</bolog-img-normal><blog-text-normal>我深深的爱着我的祖国</blog-text-normal><blog-text-normal>邓小平</blog-text-normal>",
                "contentHtml": "<font>我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人</font><br /><br /><font>我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人</font><br /><br />< img src=\"image/baidulogo.jpg\" />< img src=\"image/googlelogo.jpg\" /><br /><br />< img src=\"image/tencentlogo.jpg\" />< img src=\"image/alibabalogo.jpg\" /><br /><br /><font>我深深的爱着我的祖国</font><br /><br /><font>邓小平</font>",
                "title": "String解析",
                "sectionId": 14,
                "sort": 1,
                "createTime": 1480262400000,
                "modifiedTime": 1480262400000
            },
            {
                "id": 3,
                "type": 1,
                "content": "<blog-text-normal>我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人</blog-text-normal><blog-text-normal>我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人</blog-text-normal><bolog-img-normal>image/baidulogo.jpg</bolog-img-normal><bolog-img-br>image/googlelogo.jpg</bolog-img-br><bolog-img-normal>image/tencentlogo.jpg</bolog-img-normal><bolog-img-normal>image/alibabalogo.jpg</bolog-img-normal><blog-text-normal>我深深的爱着我的祖国</blog-text-normal><blog-text-normal>邓小平</blog-text-normal>",
                "contentHtml":"<img src='http://reactchina.sxlcdn.com/images/emoji/emoji_one/heartbeat.png?v=3'/>",
                "title": "HashMap源码分析",
                "sectionId": 14,
                "sort": 1,
                "createTime": 1480262400000,
                "modifiedTime": 1480262400000
            }
        ],
        "isSuccess": true
    })
})
router.get('/blogArticleDetail.json', function(req, res, next){
    res.json(
        {
            "article": {
                "id": 1,
                "type": 1,
                "content": "<blog-text-normal>我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人</blog-text-normal><blog-text-normal>我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人</blog-text-normal><bolog-img-normal>image/baidulogo.jpg</bolog-img-normal><bolog-img-br>image/googlelogo.jpg</bolog-img-br><bolog-img-normal>image/tencentlogo.jpg</bolog-img-normal><bolog-img-normal>image/alibabalogo.jpg</bolog-img-normal><blog-text-normal>我深深的爱着我的祖国</blog-text-normal><blog-text-normal>邓小平</blog-text-normal>",
                "sectionId": 14,
                "title": "NullPointException",
                "contentHtml": "<font>我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人</font><br /><br /><font>我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人我是中国人</font><br /><br /><img src=\"image/baidulogo.jpg\" /><img src=\"image/googlelogo.jpg\" /><br /><br />< img src=\"image/tencentlogo.jpg\" />< img src=\"image/alibabalogo.jpg\" /><br /><br /><font>我深深的爱着我的祖国</font><br /><br /><font>邓小平</font>",
                "sort": 1,
                "createTime": 1480262400000,
                "modifiedTime": 1480262400000
            },
            "isSuccess": true
        }
    )
})
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
