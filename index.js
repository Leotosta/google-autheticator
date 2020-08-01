const speakeasy = require('speakeasy')
const qrcode = require('qrcode')

var secret = speakeasy.generateSecret({
    name: 'weAreDevs'
})

console.log(secret)

qrcode.toDataURL(secret.otpauth_url, (err, data_url) => {
    console.log(data_url)
    // fs.write('<img src="' + data_url + '">')
})