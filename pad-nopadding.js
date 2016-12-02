import CryptoJS from './core';
import './cipher-core';

/**
 * A noop padding strategy.
 */
CryptoJS.pad.NoPadding = {
  pad: function() {},

  unpad: function() {}
};

export default CryptoJS.pad.NoPadding;
