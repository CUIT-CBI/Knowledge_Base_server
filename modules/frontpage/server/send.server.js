const nodemailer = require('nodemailer')

const userEmail = '3290339204@qq.com'
const transporter = nodemailer.createTransport({
  service: '163',
  secureConnection: true,
  auth: {
    user: userEmail,
    pass: 'gwqmreeedddtdaje'  //这个是开启`POP3/SMTP/IMAP`的授权码
  }
})

module.exports = {
    userEmail,transporter
}