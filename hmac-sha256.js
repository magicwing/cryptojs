var CryptoJS = require('./core');
require('./sha256');
require('./hmac');

module.exports = CryptoJS.HmacSHA256;