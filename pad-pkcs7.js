var CryptoJS = require('./core');
require('./cipher-core');

module.exports = CryptoJS.pad.Pkcs7;
