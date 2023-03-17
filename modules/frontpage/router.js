
let Router = require('koa-router');

let frontpage = require('./controller/frontpage');

let {sendcode,valideemail,register,login} = require('./controller/user.controller');
let { userVlidator,
    verifyUser,
    cryptPassword,
    userValidator,
    verifyLogin,} = require('./middleware/user.middleware');



let router = module.exports = new Router();

router.get('/', frontpage.get);

 router.get('/search',frontpage.search);
//注册接口
//1.验证输入的密码和邮箱是否为空，是否存在
//2.验证注册的邮箱是否存在
//3.对密码进行哈希的处理
//4.存入数据库
//5.register将数据存入数据库
 router.get('/register',userValidator,sendcode,valideemail,cryptPassword,register);
 //登录接口
 router.get('/login',userValidator,verifyLogin,login)
