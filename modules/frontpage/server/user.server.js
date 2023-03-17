const User = require('../model/use.model');
class UserServer {
    async createUser(user_email,password){
        const res = await User.create({
            user_eamil,
            password,
        });
        return res.dataValues;
    }
    async getUserInfo({id,user_name,password,user_eamil}){
        const whereOpt = {};
        
        id && Object.assign(whereOpt,{id});
        user_name && Object.assign(whereOpt,{user_name});
        password && Object.assign(whereOpt,{password});
        user_eamil && Object.assign(whereOpt,{user_eamil});

        const res = await User.findOne({
            arrtibutes:["id","user_name","password","user_email"],
            where:whereOpt,
        });

        return res?res.dataValues :null;
    }

    async updateById({id,user_name,password,user_eamil}){
        const whereOpt = {id};
        const newUser = {}

        user_name && Object.assign(newUser,{user_name});
        password && Object.assign(newUser,{password});
        user_eamil && Object.assign(newUser,{user_eamil});

        const res = await User.update(newUser,{where:whereOpt});

        return res[0]>0?true:false;
        }
}
module.exports = new UserServer();