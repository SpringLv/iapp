const mysql = require('mysql');
const conf = require('../conf/db');
const extend = require('../util/util');
const sql = require('./userSqlMapping');
const pool = mysql.createPool(extend({}, conf.mysql));

const jsonWrite = (res,ret)=>{
    if(typeof ret === 'undefined') {
        res.json({
            code:'1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};
module.exports = {
    check:(req, res, next)=>{
        let name = req.body.name;
        let password = req.body.password;
        pool.getConnection(function(err, connection) {
            connection.query(sql.loginCheck, [name,password], function(err, result) {
                if(result.length==1){
                    jsonWrite(res,{isSuccess:true});
                }else{
                    jsonWrite(res,{isSuccess:false});
                }
                connection.release();
            });
        });
    }
}