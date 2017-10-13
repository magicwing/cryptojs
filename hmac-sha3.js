var CryptoJS = require('./core');
require('./x64-core');
require('./sha3');
require('./hmac');

module.exports = CryptoJS.HmacSHA3;
