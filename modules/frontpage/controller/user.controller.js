const jwt = require('jsonwebtoken');

const {
    createUser,
    getUserInfo,
    updateById,
} = require('../server/user.server')

const {userEmail,transporter} = require('../server/send.server')

const {userRegisterError,emailexsistError} = require('../constant/err.type');
const User = require('../model/use.model');

const JWT_SECRET = 798661926;

class UserController {
    //注册
    async register(ctx,next){
    const {user_email,password,user_name} = ctx.request.body
     try{
        const res = await createUser(user_email,password,user_name)
        //console.log(res)
        //3.返回结果
        ctx.body ={
            code:0,
            message:"用户注册成功",
            result:{
                id:res.id,
                user_email:res.user_email,
            },
        }
     }catch(err){
        console.log(err)
        ctx.app.emit('error',userRegisterError,ctx)
     }
    }

//登录
    async login(ctx,next){
        const {user_email} = ctx.request.body
        try{
            const {password, ...re} = await getUserInfo({user_name})
            
            ctx.body = {
                code:0,
                message:'用户登录成功',
                result:{
                    token:jwt.sign(res,JWT_SECRET,{expiresIn:'1d'}),
                },
            }

        } catch(err){
            console.error('用户登录失败',err)
        }
    }
    
    //注册时发送邮箱验证码
    async sendcode(ctx,next){
        const email = ctx.query.email
        //检测该邮箱是否被注册
        const user = await User.findOne({email})
        if(user){
            return ctx.app.emit('error',emailexsistError,ctx)
        }
        const code = Math.random().toString.slice(2,6)
        ctx.session.emailcode = code
        const mailOptions = {
            from:userEmail,
            cc:userEmail,
            to:email,
            subject:'验证码',
            text:'说明内容',
            html:'<h2>[cbi_知识库]</h2>验证码:<span>${code}</span>'
        }
        try{
            await transporter.sendMail(mailOptions)
            ctx.body ={
                code:0,
                message:'邮箱验证发送成功'
            }
        }catch(err){
            ctx.body = {
                code:-1,
                message:'邮箱验证码发送失败!',
            }
        }
        await next();
        }
        //验证验证码是否合格
    async valideemail(ctx,next){
        const {email,emailcode} = ctx.request.body
        if(emailcode !== ctx.session.emailcode){
            ctx.body = {
                code:-1,
                message:'邮箱验证码错误!',
            }
            return
        }
        await next();
    }
    async changePassword(ctx,next){
        const id  = ctx.state.user.id;
        const password = ctx.request.body.password;
        //2.操作数据库
        if (await updateById({ id, password })) {
            ctx.body = {
              code: 0,
              message: '修改密码成功',
              result: '',
            }
          } else {
            ctx.body = {
              code: '10007',
              message: '修改密码失败',
              result: '',
            }
          }
          // 3. 返回结果
    }

        
    }

    module.exports = new UserController()
