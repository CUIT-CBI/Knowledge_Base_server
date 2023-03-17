const { Sequelize } = require('sequelize')

// const {
// //   MYSQL_HOST,
// //   MYSQL_PORT,
// //   MYSQL_USER,
// //   MYSQL_PWD,
// //   MYSQL_DB,

// } = require('../config/config.default')
const MYSQL_HOST = 'localhost';
const MYSQL_USER = 'test';
const MYSQL_PWD = "666666";
const MYSQL_DB = 'test';


const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  dialect: 'mysql',
})

seq
  .authenticate()
  .then(() => {
    console.log('数据库连接成功')
  })
  .catch(err => {
    console.log('数据库连接失败', err)
  })

module.exports = seq
