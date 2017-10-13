var CryptoJS = require('./core');
require('./sha1');
require('./hmac');

module.exports = CryptoJS.HmacSHA1;
