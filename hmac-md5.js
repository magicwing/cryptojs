var CryptoJS = require('./core');
require('./md5');
require('./hmac');

module.exports = CryptoJS.HmacMD5;
