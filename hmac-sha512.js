var CryptoJS = require('./core');
require('./x64-core');
require('./sha512');
require('./hmac');

module.exports = CryptoJS.HmacSHA512;
