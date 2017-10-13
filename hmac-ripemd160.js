var CryptoJS = require('./core');
require('./ripemd160');
require('./hmac');

module.exports = CryptoJS.HmacRIPEMD160;
