const user = {
    loginCheck:'select * from user where name=? and password=PASSWORD(?)'
}
module.exports = user;