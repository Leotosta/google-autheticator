const speakeasy = require('speakeasy')

var verified = speakeasy.totp.verify({
    secret : '7977236e3142777a4b6d5a63474a4034442366584b514669487d7464472f542c',
    encoding: 'hex',
    token: '598927'
})

console.log(verified)