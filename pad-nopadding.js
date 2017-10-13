var CryptoJS = require('./core');
require('./cipher-core');

/**
 * A noop padding strategy.
 */
CryptoJS.pad.NoPadding = {
  pad: function() {},

  unpad: function() {}
};

module.exports = CryptoJS.pad.NoPadding;
