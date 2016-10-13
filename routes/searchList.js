var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({
        "data":[
            {"name":"joke","age":"20","code":"001"},
            {"name":"alice","age":"21","code":"001"},
            {"name":"jame","age":"22","code":"001"},
            {"name":"baby","age":"23","code":"001"},
            {"name":"lily","age":"24","code":"001"},
            {"name":"anti","age":"25","code":"001"},
            {"name":"joke","age":"20","code":"001"},
            {"name":"joke","age":"20","code":"001"},
            {"name":"joke","age":"20","code":"001"},
            {"name":"joke","age":"20","code":"001"},
            {"name":"joke","age":"20","code":"001"},
            {"name":"joke","age":"20","code":"001"},
            {"name":"joke","age":"20","code":"001"},
            {"name":"joke","age":"20","code":"001"},
        ]
    });
});

module.exports = router;