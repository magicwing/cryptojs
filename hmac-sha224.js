var CryptoJS = require('./core');
require('./sha256');
require('./sha224');
require('./hmac');

module.exports = CryptoJS.HmacSHA224;
