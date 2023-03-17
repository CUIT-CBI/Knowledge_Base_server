const bcrypt = require('bcryptjs');

const {getUserInfo} = require('../server/user.server');
const {
    userFormateError,
    userAlreadyExited,
    userRegisterError,
    userDoesNotExist,
    userLoginError,
    invalidPassword,
} = require('../constant/err.type');

//验证邮箱
const userValidator = async (ctx,next) =>{
    const {user_email,password } = ctx.request.body
    //合法性
    if(!user_email || !password){
        console.error('邮箱或密码为空',ctx.request.body)
        ctx.app.emit('error',userFormateError,ctx)
        return
    }

    await next()
}

const verifyUser = async (ctx,next) =>{
    const {user_email} = ctx.request.body


        try{
            const res = await getUserInfo({user_email});

            if(res){
                console.error('用户名已经存在',{user_email});
            return    ctx.app.emit('error',userAlreadyExited,ctx)
            
            }
        }catch(err){
            console.error('获取用户信息',err);
            return ctx.app.emit('errir',userRegisterError,ctx)
        }
        await next();
    }


    const cryptPassword = async(ctx,next) =>{
        const {password} = ctx.request.body;
        let salt = bcrypt.genSaltSync(10);

        let hash = bcrypt.hashSync(password,salt)

        ctx.request.body.password = hash
        await next()
    };
    const verifyLogin = async (ctx,next) =>{
        //1.判断用户是否存在(不存在就报错)
        const {user_email,password} = ctx.request.body;

        try{
            const res = await getUserInfo({user_email});

            if(!res){
                console.error('用户名不存在',{user_email});
               return ctx.app.emit('error',userDoesNotExist,ctx)
            }
            if(!bcrypt.compareSync(password,res.password)){
                return ctx.app.emit('error',invalidPassword,ctx)
            }
        }catch(err){
            console.error(err);
            return ctx.app.emit('error',userLoginError,ctx)
        }

    }
    
module.exports = {
    userValidator,
    verifyUser,
    cryptPassword,
    verifyLogin,
  }
  