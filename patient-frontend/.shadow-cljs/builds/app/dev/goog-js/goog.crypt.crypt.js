["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/crypt/crypt.js"],"~:js","goog.provide(\"goog.crypt\");\ngoog.require(\"goog.asserts\");\ngoog.require(\"goog.async.throwException\");\ngoog.crypt.ASYNC_THROW_ON_UNICODE_TO_BYTE = goog.define(\"goog.crypt.ASYNC_THROW_ON_UNICODE_TO_BYTE\", goog.DEBUG);\ngoog.crypt.TEST_ONLY = {};\ngoog.crypt.TEST_ONLY.throwException = goog.async.throwException;\ngoog.crypt.TEST_ONLY.alwaysThrowSynchronously = goog.DEBUG;\ngoog.crypt.binaryStringToByteArray = function(str) {\n  return goog.crypt.stringToByteArray(str, true);\n};\ngoog.crypt.stringToByteArray = function(str, throwSync) {\n  var output = [];\n  var p = 0;\n  var i = 0;\n  for (; i < str.length; i++) {\n    var c = str.charCodeAt(i);\n    if (c > 255) {\n      var err = new Error(\"go/unicode-to-byte-error\");\n      if (goog.crypt.TEST_ONLY.alwaysThrowSynchronously || throwSync) {\n        throw err;\n      } else if (goog.crypt.ASYNC_THROW_ON_UNICODE_TO_BYTE) {\n        goog.crypt.TEST_ONLY.throwException(err);\n      }\n      output[p++] = c & 255;\n      c = c >> 8;\n    }\n    output[p++] = c;\n  }\n  return output;\n};\ngoog.crypt.byteArrayToString = function(bytes) {\n  return goog.crypt.byteArrayToBinaryString(bytes);\n};\ngoog.crypt.byteArrayToBinaryString = function(bytes) {\n  var CHUNK_SIZE = 8192;\n  if (bytes.length <= CHUNK_SIZE) {\n    return String.fromCharCode.apply(null, bytes);\n  }\n  var str = \"\";\n  var i = 0;\n  for (; i < bytes.length; i = i + CHUNK_SIZE) {\n    var chunk = Array.prototype.slice.call(bytes, i, i + CHUNK_SIZE);\n    str = str + String.fromCharCode.apply(null, chunk);\n  }\n  return str;\n};\ngoog.crypt.byteArrayToHex = function(array, opt_separator) {\n  return Array.prototype.map.call(array, function(numByte) {\n    var hexByte = numByte.toString(16);\n    return hexByte.length > 1 ? hexByte : \"0\" + hexByte;\n  }).join(opt_separator || \"\");\n};\ngoog.crypt.hexToByteArray = function(hexString) {\n  goog.asserts.assert(hexString.length % 2 == 0, \"Key string length must be multiple of 2\");\n  var arr = [];\n  var i = 0;\n  for (; i < hexString.length; i = i + 2) {\n    arr.push(parseInt(hexString.substring(i, i + 2), 16));\n  }\n  return arr;\n};\ngoog.crypt.stringToUtf8ByteArray = function(str) {\n  return goog.crypt.textToByteArray(str);\n};\ngoog.crypt.textToByteArray = function(str) {\n  var out = [];\n  var p = 0;\n  var i = 0;\n  for (; i < str.length; i++) {\n    var c = str.charCodeAt(i);\n    if (c < 128) {\n      out[p++] = c;\n    } else if (c < 2048) {\n      out[p++] = c >> 6 | 192;\n      out[p++] = c & 63 | 128;\n    } else if ((c & 64512) == 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) == 56320) {\n      c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);\n      out[p++] = c >> 18 | 240;\n      out[p++] = c >> 12 & 63 | 128;\n      out[p++] = c >> 6 & 63 | 128;\n      out[p++] = c & 63 | 128;\n    } else {\n      out[p++] = c >> 12 | 224;\n      out[p++] = c >> 6 & 63 | 128;\n      out[p++] = c & 63 | 128;\n    }\n  }\n  return out;\n};\ngoog.crypt.utf8ByteArrayToString = function(bytes) {\n  return goog.crypt.byteArrayToText(bytes);\n};\ngoog.crypt.byteArrayToText = function(bytes) {\n  var out = [];\n  var pos = 0;\n  var c = 0;\n  for (; pos < bytes.length;) {\n    var c1 = bytes[pos++];\n    if (c1 < 128) {\n      out[c++] = String.fromCharCode(c1);\n    } else if (c1 > 191 && c1 < 224) {\n      var c2 = bytes[pos++];\n      out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);\n    } else if (c1 > 239 && c1 < 365) {\n      c2 = bytes[pos++];\n      var c3 = bytes[pos++];\n      var c4 = bytes[pos++];\n      var u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;\n      out[c++] = String.fromCharCode(55296 + (u >> 10));\n      out[c++] = String.fromCharCode(56320 + (u & 1023));\n    } else {\n      c2 = bytes[pos++];\n      c3 = bytes[pos++];\n      out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);\n    }\n  }\n  return out.join(\"\");\n};\ngoog.crypt.xorByteArray = function(bytes1, bytes2) {\n  goog.asserts.assert(bytes1.length == bytes2.length, \"XOR array lengths must match\");\n  var result = [];\n  var i = 0;\n  for (; i < bytes1.length; i++) {\n    result.push(bytes1[i] ^ bytes2[i]);\n  }\n  return result;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Namespace with crypto related helper functions.\n */\n\ngoog.provide('goog.crypt');\n\ngoog.require('goog.asserts');\ngoog.require('goog.async.throwException');\n\n\n/**\n * Whether to async-throw on unicode input to the legacy versions of\n * `goog.crypt.stringToByteArray` (i.e. when `throwSync` is false).\n * NOTE: The default will change to `true` soon, after notifying users.\n * @define {boolean}\n */\ngoog.crypt.ASYNC_THROW_ON_UNICODE_TO_BYTE =\n    goog.define('goog.crypt.ASYNC_THROW_ON_UNICODE_TO_BYTE', goog.DEBUG);\n\n\n/**\n * Test-only stub to make our use of async.throwException more testable.\n * @const\n */\ngoog.crypt.TEST_ONLY = {};\n\n\n/** Remappable alias. */\ngoog.crypt.TEST_ONLY.throwException = goog.async.throwException;\n\n\n/** Configurable so that we can test the async-throw behavior. */\ngoog.crypt.TEST_ONLY.alwaysThrowSynchronously = goog.DEBUG;\n\n\n/**\n * Turns a string into an array of bytes; a \"byte\" being a JS number in the\n * range 0-255. Multi-byte characters will throw.\n * @param {string} str String value to arrify.\n * @return {!Array<number>} Array of numbers corresponding to the\n *     UCS character codes of each character in str.\n */\ngoog.crypt.binaryStringToByteArray = function(str) {\n  return goog.crypt.stringToByteArray(str, true);\n};\n\n\n/**\n * Turns a string into an array of bytes; a \"byte\" being a JS number in the\n * range 0-255. Multi-byte characters are written as little-endian.\n * @param {string} str String value to arrify.\n * @param {boolean=} throwSync Whether to throw synchronously.\n * @return {!Array<number>} Array of numbers corresponding to the\n *     UCS character codes of each character in str.\n */\ngoog.crypt.stringToByteArray = function(str, throwSync) {\n  'use strict';\n  var output = [], p = 0;\n  for (var i = 0; i < str.length; i++) {\n    var c = str.charCodeAt(i);\n    // NOTE: c <= 0xffff since JavaScript strings are UTF-16.\n    if (c > 0xff) {\n      var err = new Error('go/unicode-to-byte-error');\n      // NOTE: fail faster in debug to catch errors reliably in tests.\n      if (goog.crypt.TEST_ONLY.alwaysThrowSynchronously || throwSync) {\n        throw err;\n      } else if (goog.crypt.ASYNC_THROW_ON_UNICODE_TO_BYTE) {\n        goog.crypt.TEST_ONLY.throwException(err);\n      }\n      output[p++] = c & 0xff;\n      c >>= 8;\n    }\n    output[p++] = c;\n  }\n  return output;\n};\n\n\n/**\n * Turns an array of numbers into the string given by the concatenation of the\n * characters to which the numbers correspond.\n * @param {!Uint8Array|!Array<number>} bytes Array of numbers representing\n *     characters.\n * @return {string} Stringification of the array.\n */\ngoog.crypt.byteArrayToString = function(bytes) {\n  return goog.crypt.byteArrayToBinaryString(bytes);\n};\n\n\n/**\n * Turns an array of numbers into the string given by the concatenation of the\n * characters to which the numbers correspond.\n * @param {!Uint8Array|!Array<number>} bytes Array of numbers representing\n *     characters.\n * @return {string} Stringification of the array.\n */\ngoog.crypt.byteArrayToBinaryString = function(bytes) {\n  'use strict';\n  var CHUNK_SIZE = 8192;\n\n  // Special-case the simple case for speed's sake.\n  if (bytes.length <= CHUNK_SIZE) {\n    return String.fromCharCode.apply(null, bytes);\n  }\n\n  // The remaining logic splits conversion by chunks since\n  // Function#apply() has a maximum parameter count.\n  // See discussion: http://goo.gl/LrWmZ9\n\n  var str = '';\n  for (var i = 0; i < bytes.length; i += CHUNK_SIZE) {\n    var chunk = Array.prototype.slice.call(bytes, i, i + CHUNK_SIZE);\n    str += String.fromCharCode.apply(null, chunk);\n  }\n  return str;\n};\n\n\n/**\n * Turns an array of numbers into the hex string given by the concatenation of\n * the hex values to which the numbers correspond.\n * @param {Uint8Array|Array<number>} array Array of numbers representing\n *     characters.\n * @param {string=} opt_separator Optional separator between values\n * @return {string} Hex string.\n */\ngoog.crypt.byteArrayToHex = function(array, opt_separator) {\n  'use strict';\n  return Array.prototype.map\n      .call(\n          array,\n          function(numByte) {\n            'use strict';\n            var hexByte = numByte.toString(16);\n            return hexByte.length > 1 ? hexByte : '0' + hexByte;\n          })\n      .join(opt_separator || '');\n};\n\n\n/**\n * Converts a hex string into an integer array.\n * @param {string} hexString Hex string of 16-bit integers (two characters\n *     per integer).\n * @return {!Array<number>} Array of {0,255} integers for the given string.\n */\ngoog.crypt.hexToByteArray = function(hexString) {\n  'use strict';\n  goog.asserts.assert(\n      hexString.length % 2 == 0, 'Key string length must be multiple of 2');\n  var arr = [];\n  for (var i = 0; i < hexString.length; i += 2) {\n    arr.push(parseInt(hexString.substring(i, i + 2), 16));\n  }\n  return arr;\n};\n\n\n/**\n * Converts a JS string to a UTF-8 \"byte\" array.\n * @param {string} str 16-bit unicode string.\n * @return {!Array<number>} UTF-8 byte array.\n */\ngoog.crypt.stringToUtf8ByteArray = function(str) {\n  return goog.crypt.textToByteArray(str);\n};\n\n\n/**\n * Converts a JS string to a UTF-8 \"byte\" array.\n * @param {string} str 16-bit unicode string.\n * @return {!Array<number>} UTF-8 byte array.\n */\ngoog.crypt.textToByteArray = function(str) {\n  'use strict';\n  // TODO(user): Use native implementations if/when available\n  var out = [], p = 0;\n  for (var i = 0; i < str.length; i++) {\n    var c = str.charCodeAt(i);\n    if (c < 128) {\n      out[p++] = c;\n    } else if (c < 2048) {\n      out[p++] = (c >> 6) | 192;\n      out[p++] = (c & 63) | 128;\n    } else if (\n        ((c & 0xFC00) == 0xD800) && (i + 1) < str.length &&\n        ((str.charCodeAt(i + 1) & 0xFC00) == 0xDC00)) {\n      // Surrogate Pair\n      c = 0x10000 + ((c & 0x03FF) << 10) + (str.charCodeAt(++i) & 0x03FF);\n      out[p++] = (c >> 18) | 240;\n      out[p++] = ((c >> 12) & 63) | 128;\n      out[p++] = ((c >> 6) & 63) | 128;\n      out[p++] = (c & 63) | 128;\n    } else {\n      out[p++] = (c >> 12) | 224;\n      out[p++] = ((c >> 6) & 63) | 128;\n      out[p++] = (c & 63) | 128;\n    }\n  }\n  return out;\n};\n\n\n/**\n * Converts a UTF-8 byte array to JavaScript's 16-bit Unicode.\n * @param {Uint8Array|Array<number>} bytes UTF-8 byte array.\n * @return {string} 16-bit Unicode string.\n */\ngoog.crypt.utf8ByteArrayToString = function(bytes) {\n  return goog.crypt.byteArrayToText(bytes);\n};\n\n\n/**\n * Converts a UTF-8 byte array to JavaScript's 16-bit Unicode.\n * @param {Uint8Array|Array<number>} bytes UTF-8 byte array.\n * @return {string} 16-bit Unicode string.\n */\ngoog.crypt.byteArrayToText = function(bytes) {\n  'use strict';\n  // TODO(user): Use native implementations if/when available\n  var out = [], pos = 0, c = 0;\n  while (pos < bytes.length) {\n    var c1 = bytes[pos++];\n    if (c1 < 128) {\n      out[c++] = String.fromCharCode(c1);\n    } else if (c1 > 191 && c1 < 224) {\n      var c2 = bytes[pos++];\n      out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);\n    } else if (c1 > 239 && c1 < 365) {\n      // Surrogate Pair\n      var c2 = bytes[pos++];\n      var c3 = bytes[pos++];\n      var c4 = bytes[pos++];\n      var u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) -\n          0x10000;\n      out[c++] = String.fromCharCode(0xD800 + (u >> 10));\n      out[c++] = String.fromCharCode(0xDC00 + (u & 1023));\n    } else {\n      var c2 = bytes[pos++];\n      var c3 = bytes[pos++];\n      out[c++] =\n          String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);\n    }\n  }\n  return out.join('');\n};\n\n\n/**\n * XOR two byte arrays.\n * @param {!Uint8Array|!Int8Array|!Array<number>} bytes1 Byte array 1.\n * @param {!Uint8Array|!Int8Array|!Array<number>} bytes2 Byte array 2.\n * @return {!Array<number>} Resulting XOR of the two byte arrays.\n */\ngoog.crypt.xorByteArray = function(bytes1, bytes2) {\n  'use strict';\n  goog.asserts.assert(\n      bytes1.length == bytes2.length, 'XOR array lengths must match');\n\n  var result = [];\n  for (var i = 0; i < bytes1.length; i++) {\n    result.push(bytes1[i] ^ bytes2[i]);\n  }\n  return result;\n};\n","~:compiled-at",1744480462797,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.crypt.crypt.js\",\n\"lineCount\":128,\n\"mappings\":\"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\",\n\"sources\":[\"goog/crypt/crypt.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Namespace with crypto related helper functions.\\n */\\n\\ngoog.provide('goog.crypt');\\n\\ngoog.require('goog.asserts');\\ngoog.require('goog.async.throwException');\\n\\n\\n/**\\n * Whether to async-throw on unicode input to the legacy versions of\\n * `goog.crypt.stringToByteArray` (i.e. when `throwSync` is false).\\n * NOTE: The default will change to `true` soon, after notifying users.\\n * @define {boolean}\\n */\\ngoog.crypt.ASYNC_THROW_ON_UNICODE_TO_BYTE =\\n    goog.define('goog.crypt.ASYNC_THROW_ON_UNICODE_TO_BYTE', goog.DEBUG);\\n\\n\\n/**\\n * Test-only stub to make our use of async.throwException more testable.\\n * @const\\n */\\ngoog.crypt.TEST_ONLY = {};\\n\\n\\n/** Remappable alias. */\\ngoog.crypt.TEST_ONLY.throwException = goog.async.throwException;\\n\\n\\n/** Configurable so that we can test the async-throw behavior. */\\ngoog.crypt.TEST_ONLY.alwaysThrowSynchronously = goog.DEBUG;\\n\\n\\n/**\\n * Turns a string into an array of bytes; a \\\"byte\\\" being a JS number in the\\n * range 0-255. Multi-byte characters will throw.\\n * @param {string} str String value to arrify.\\n * @return {!Array<number>} Array of numbers corresponding to the\\n *     UCS character codes of each character in str.\\n */\\ngoog.crypt.binaryStringToByteArray = function(str) {\\n  return goog.crypt.stringToByteArray(str, true);\\n};\\n\\n\\n/**\\n * Turns a string into an array of bytes; a \\\"byte\\\" being a JS number in the\\n * range 0-255. Multi-byte characters are written as little-endian.\\n * @param {string} str String value to arrify.\\n * @param {boolean=} throwSync Whether to throw synchronously.\\n * @return {!Array<number>} Array of numbers corresponding to the\\n *     UCS character codes of each character in str.\\n */\\ngoog.crypt.stringToByteArray = function(str, throwSync) {\\n  'use strict';\\n  var output = [], p = 0;\\n  for (var i = 0; i < str.length; i++) {\\n    var c = str.charCodeAt(i);\\n    // NOTE: c <= 0xffff since JavaScript strings are UTF-16.\\n    if (c > 0xff) {\\n      var err = new Error('go/unicode-to-byte-error');\\n      // NOTE: fail faster in debug to catch errors reliably in tests.\\n      if (goog.crypt.TEST_ONLY.alwaysThrowSynchronously || throwSync) {\\n        throw err;\\n      } else if (goog.crypt.ASYNC_THROW_ON_UNICODE_TO_BYTE) {\\n        goog.crypt.TEST_ONLY.throwException(err);\\n      }\\n      output[p++] = c & 0xff;\\n      c >>= 8;\\n    }\\n    output[p++] = c;\\n  }\\n  return output;\\n};\\n\\n\\n/**\\n * Turns an array of numbers into the string given by the concatenation of the\\n * characters to which the numbers correspond.\\n * @param {!Uint8Array|!Array<number>} bytes Array of numbers representing\\n *     characters.\\n * @return {string} Stringification of the array.\\n */\\ngoog.crypt.byteArrayToString = function(bytes) {\\n  return goog.crypt.byteArrayToBinaryString(bytes);\\n};\\n\\n\\n/**\\n * Turns an array of numbers into the string given by the concatenation of the\\n * characters to which the numbers correspond.\\n * @param {!Uint8Array|!Array<number>} bytes Array of numbers representing\\n *     characters.\\n * @return {string} Stringification of the array.\\n */\\ngoog.crypt.byteArrayToBinaryString = function(bytes) {\\n  'use strict';\\n  var CHUNK_SIZE = 8192;\\n\\n  // Special-case the simple case for speed's sake.\\n  if (bytes.length <= CHUNK_SIZE) {\\n    return String.fromCharCode.apply(null, bytes);\\n  }\\n\\n  // The remaining logic splits conversion by chunks since\\n  // Function#apply() has a maximum parameter count.\\n  // See discussion: http://goo.gl/LrWmZ9\\n\\n  var str = '';\\n  for (var i = 0; i < bytes.length; i += CHUNK_SIZE) {\\n    var chunk = Array.prototype.slice.call(bytes, i, i + CHUNK_SIZE);\\n    str += String.fromCharCode.apply(null, chunk);\\n  }\\n  return str;\\n};\\n\\n\\n/**\\n * Turns an array of numbers into the hex string given by the concatenation of\\n * the hex values to which the numbers correspond.\\n * @param {Uint8Array|Array<number>} array Array of numbers representing\\n *     characters.\\n * @param {string=} opt_separator Optional separator between values\\n * @return {string} Hex string.\\n */\\ngoog.crypt.byteArrayToHex = function(array, opt_separator) {\\n  'use strict';\\n  return Array.prototype.map\\n      .call(\\n          array,\\n          function(numByte) {\\n            'use strict';\\n            var hexByte = numByte.toString(16);\\n            return hexByte.length > 1 ? hexByte : '0' + hexByte;\\n          })\\n      .join(opt_separator || '');\\n};\\n\\n\\n/**\\n * Converts a hex string into an integer array.\\n * @param {string} hexString Hex string of 16-bit integers (two characters\\n *     per integer).\\n * @return {!Array<number>} Array of {0,255} integers for the given string.\\n */\\ngoog.crypt.hexToByteArray = function(hexString) {\\n  'use strict';\\n  goog.asserts.assert(\\n      hexString.length % 2 == 0, 'Key string length must be multiple of 2');\\n  var arr = [];\\n  for (var i = 0; i < hexString.length; i += 2) {\\n    arr.push(parseInt(hexString.substring(i, i + 2), 16));\\n  }\\n  return arr;\\n};\\n\\n\\n/**\\n * Converts a JS string to a UTF-8 \\\"byte\\\" array.\\n * @param {string} str 16-bit unicode string.\\n * @return {!Array<number>} UTF-8 byte array.\\n */\\ngoog.crypt.stringToUtf8ByteArray = function(str) {\\n  return goog.crypt.textToByteArray(str);\\n};\\n\\n\\n/**\\n * Converts a JS string to a UTF-8 \\\"byte\\\" array.\\n * @param {string} str 16-bit unicode string.\\n * @return {!Array<number>} UTF-8 byte array.\\n */\\ngoog.crypt.textToByteArray = function(str) {\\n  'use strict';\\n  // TODO(user): Use native implementations if/when available\\n  var out = [], p = 0;\\n  for (var i = 0; i < str.length; i++) {\\n    var c = str.charCodeAt(i);\\n    if (c < 128) {\\n      out[p++] = c;\\n    } else if (c < 2048) {\\n      out[p++] = (c >> 6) | 192;\\n      out[p++] = (c & 63) | 128;\\n    } else if (\\n        ((c & 0xFC00) == 0xD800) && (i + 1) < str.length &&\\n        ((str.charCodeAt(i + 1) & 0xFC00) == 0xDC00)) {\\n      // Surrogate Pair\\n      c = 0x10000 + ((c & 0x03FF) << 10) + (str.charCodeAt(++i) & 0x03FF);\\n      out[p++] = (c >> 18) | 240;\\n      out[p++] = ((c >> 12) & 63) | 128;\\n      out[p++] = ((c >> 6) & 63) | 128;\\n      out[p++] = (c & 63) | 128;\\n    } else {\\n      out[p++] = (c >> 12) | 224;\\n      out[p++] = ((c >> 6) & 63) | 128;\\n      out[p++] = (c & 63) | 128;\\n    }\\n  }\\n  return out;\\n};\\n\\n\\n/**\\n * Converts a UTF-8 byte array to JavaScript's 16-bit Unicode.\\n * @param {Uint8Array|Array<number>} bytes UTF-8 byte array.\\n * @return {string} 16-bit Unicode string.\\n */\\ngoog.crypt.utf8ByteArrayToString = function(bytes) {\\n  return goog.crypt.byteArrayToText(bytes);\\n};\\n\\n\\n/**\\n * Converts a UTF-8 byte array to JavaScript's 16-bit Unicode.\\n * @param {Uint8Array|Array<number>} bytes UTF-8 byte array.\\n * @return {string} 16-bit Unicode string.\\n */\\ngoog.crypt.byteArrayToText = function(bytes) {\\n  'use strict';\\n  // TODO(user): Use native implementations if/when available\\n  var out = [], pos = 0, c = 0;\\n  while (pos < bytes.length) {\\n    var c1 = bytes[pos++];\\n    if (c1 < 128) {\\n      out[c++] = String.fromCharCode(c1);\\n    } else if (c1 > 191 && c1 < 224) {\\n      var c2 = bytes[pos++];\\n      out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);\\n    } else if (c1 > 239 && c1 < 365) {\\n      // Surrogate Pair\\n      var c2 = bytes[pos++];\\n      var c3 = bytes[pos++];\\n      var c4 = bytes[pos++];\\n      var u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) -\\n          0x10000;\\n      out[c++] = String.fromCharCode(0xD800 + (u >> 10));\\n      out[c++] = String.fromCharCode(0xDC00 + (u & 1023));\\n    } else {\\n      var c2 = bytes[pos++];\\n      var c3 = bytes[pos++];\\n      out[c++] =\\n          String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);\\n    }\\n  }\\n  return out.join('');\\n};\\n\\n\\n/**\\n * XOR two byte arrays.\\n * @param {!Uint8Array|!Int8Array|!Array<number>} bytes1 Byte array 1.\\n * @param {!Uint8Array|!Int8Array|!Array<number>} bytes2 Byte array 2.\\n * @return {!Array<number>} Resulting XOR of the two byte arrays.\\n */\\ngoog.crypt.xorByteArray = function(bytes1, bytes2) {\\n  'use strict';\\n  goog.asserts.assert(\\n      bytes1.length == bytes2.length, 'XOR array lengths must match');\\n\\n  var result = [];\\n  for (var i = 0; i < bytes1.length; i++) {\\n    result.push(bytes1[i] ^ bytes2[i]);\\n  }\\n  return result;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"crypt\",\"ASYNC_THROW_ON_UNICODE_TO_BYTE\",\"define\",\"DEBUG\",\"TEST_ONLY\",\"throwException\",\"async\",\"alwaysThrowSynchronously\",\"binaryStringToByteArray\",\"goog.crypt.binaryStringToByteArray\",\"str\",\"stringToByteArray\",\"goog.crypt.stringToByteArray\",\"throwSync\",\"output\",\"p\",\"i\",\"length\",\"c\",\"charCodeAt\",\"err\",\"Error\",\"byteArrayToString\",\"goog.crypt.byteArrayToString\",\"bytes\",\"byteArrayToBinaryString\",\"goog.crypt.byteArrayToBinaryString\",\"CHUNK_SIZE\",\"String\",\"fromCharCode\",\"apply\",\"chunk\",\"Array\",\"prototype\",\"slice\",\"call\",\"byteArrayToHex\",\"goog.crypt.byteArrayToHex\",\"array\",\"opt_separator\",\"map\",\"numByte\",\"hexByte\",\"toString\",\"join\",\"hexToByteArray\",\"goog.crypt.hexToByteArray\",\"hexString\",\"asserts\",\"assert\",\"arr\",\"push\",\"parseInt\",\"substring\",\"stringToUtf8ByteArray\",\"goog.crypt.stringToUtf8ByteArray\",\"textToByteArray\",\"goog.crypt.textToByteArray\",\"out\",\"utf8ByteArrayToString\",\"goog.crypt.utf8ByteArrayToString\",\"byteArrayToText\",\"goog.crypt.byteArrayToText\",\"pos\",\"c1\",\"c2\",\"c3\",\"c4\",\"u\",\"xorByteArray\",\"goog.crypt.xorByteArray\",\"bytes1\",\"bytes2\",\"result\"]\n}\n"]