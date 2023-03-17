const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

// 创建模型(Model zd_user -> 表 zd_users)
const User = seq.define('cbi_users', {
  // id 会被sequelize自动创建, 管理
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '用户名, 唯一',
  },
  password: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: '密码',
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment: '是否为管理员, 0: 不是管理员(默认); 1: 是管理员',
  },
  user_email:{
    type:DataTypes.CHAR(50),
    allowNull:true,
    unique:true,
    comment:'用户邮箱',
  },
  create_date:{
    type:DataTypes.DATE,
    allowNull:false,
    comment:'创建时间',
  },


  
})

// 强制同步数据库(创建数据表)
//  User.sync({ force: true })

// seq.sync().then(() =>{
//     console.log('Table created successfully.');
// }).catch((err) =>{
//     console.error('Unable to create the table',error)
// })

 module.exports = User
