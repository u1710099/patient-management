["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/json/hybrid.js"],"~:js","goog.provide(\"goog.json.hybrid\");\ngoog.require(\"goog.asserts\");\ngoog.require(\"goog.json\");\ngoog.json.hybrid.stringify = goog.json.USE_NATIVE_JSON ? goog.global[\"JSON\"][\"stringify\"] : function(obj) {\n  if (goog.global.JSON) {\n    try {\n      return goog.global.JSON.stringify(obj);\n    } catch (e) {\n    }\n  }\n  return goog.json.serialize(obj);\n};\ngoog.json.hybrid.parse_ = function(jsonString, fallbackParser) {\n  if (goog.global.JSON) {\n    try {\n      var obj = goog.global.JSON.parse(jsonString);\n      goog.asserts.assert(typeof obj == \"object\");\n      return obj;\n    } catch (e) {\n    }\n  }\n  return fallbackParser(jsonString);\n};\ngoog.json.hybrid.parse = goog.json.USE_NATIVE_JSON ? goog.global[\"JSON\"][\"parse\"] : function(jsonString) {\n  return goog.json.hybrid.parse_(jsonString, goog.json.parse);\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n\n/**\n * @fileoverview Utility to attempt native JSON processing, falling back to\n *     goog.json if not available.\n *\n *     This is intended as a drop-in for current users of goog.json who want\n *     to take advantage of native JSON if present.\n */\n\ngoog.provide('goog.json.hybrid');\n\ngoog.require('goog.asserts');\ngoog.require('goog.json');\n\n\n/**\n * Attempts to serialize the JSON string natively, falling back to\n * `goog.json.serialize` if unsuccessful.\n * @param {!Object} obj JavaScript object to serialize to JSON.\n * @return {string} Resulting JSON string.\n */\ngoog.json.hybrid.stringify = goog.json.USE_NATIVE_JSON ?\n    goog.global['JSON']['stringify'] :\n    function(obj) {\n      'use strict';\n      if (goog.global.JSON) {\n        try {\n          return goog.global.JSON.stringify(obj);\n        } catch (e) {\n          // Native serialization failed.  Fall through to retry with\n          // goog.json.serialize.\n        }\n      }\n\n      return goog.json.serialize(obj);\n    };\n\n\n/**\n * Attempts to parse the JSON string natively, falling back to\n * the supplied `fallbackParser` if unsuccessful.\n * @param {string} jsonString JSON string to parse.\n * @param {function(string):Object} fallbackParser Fallback JSON parser used\n *     if native\n * @return {?Object} Resulting JSON object.\n * @private\n */\ngoog.json.hybrid.parse_ = function(jsonString, fallbackParser) {\n  'use strict';\n  if (goog.global.JSON) {\n    try {\n      var obj = goog.global.JSON.parse(jsonString);\n      goog.asserts.assert(typeof obj == 'object');\n      return /** @type {?Object} */ (obj);\n    } catch (e) {\n      // Native parse failed.  Fall through to retry with goog.json.parse.\n    }\n  }\n\n  return fallbackParser(jsonString);\n};\n\n\n/**\n * Attempts to parse the JSON string natively, falling back to\n * `goog.json.parse` if unsuccessful.\n * @param {string} jsonString JSON string to parse.\n * @return {?Object} Resulting JSON object.\n */\ngoog.json.hybrid.parse = goog.json.USE_NATIVE_JSON ?\n    goog.global['JSON']['parse'] :\n    function(jsonString) {\n      'use strict';\n      return goog.json.hybrid.parse_(jsonString, goog.json.parse);\n    };\n","~:compiled-at",1744480462780,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.json.hybrid.js\",\n\"lineCount\":27,\n\"mappings\":\"AAeAA,IAAKC,CAAAA,OAAL,CAAa,kBAAb,CAAA;AAEAD,IAAKE,CAAAA,OAAL,CAAa,cAAb,CAAA;AACAF,IAAKE,CAAAA,OAAL,CAAa,WAAb,CAAA;AASAF,IAAKG,CAAAA,IAAKC,CAAAA,MAAOC,CAAAA,SAAjB,GAA6BL,IAAKG,CAAAA,IAAKG,CAAAA,eAAV,GACzBN,IAAKO,CAAAA,MAAL,CAAY,MAAZ,CAAA,CAAoB,WAApB,CADyB,GAEzB,QAAQ,CAACC,GAAD,CAAM;AAEZ,MAAIR,IAAKO,CAAAA,MAAOE,CAAAA,IAAhB;AACE,OAAI;AACF,aAAOT,IAAKO,CAAAA,MAAOE,CAAAA,IAAKJ,CAAAA,SAAjB,CAA2BG,GAA3B,CAAP;AADE,KAEF,QAAOE,CAAP,CAAU;;AAHd;AASA,SAAOV,IAAKG,CAAAA,IAAKQ,CAAAA,SAAV,CAAoBH,GAApB,CAAP;AAXY,CAFlB;AA0BAR,IAAKG,CAAAA,IAAKC,CAAAA,MAAOQ,CAAAA,MAAjB,GAA0BC,QAAQ,CAACC,UAAD,EAAaC,cAAb,CAA6B;AAE7D,MAAIf,IAAKO,CAAAA,MAAOE,CAAAA,IAAhB;AACE,OAAI;AACF,UAAID,MAAMR,IAAKO,CAAAA,MAAOE,CAAAA,IAAKO,CAAAA,KAAjB,CAAuBF,UAAvB,CAAV;AACAd,UAAKiB,CAAAA,OAAQC,CAAAA,MAAb,CAAoB,MAAOV,IAA3B,IAAkC,QAAlC,CAAA;AACA,aAA+BA,GAA/B;AAHE,KAIF,QAAOE,CAAP,CAAU;;AALd;AAUA,SAAOK,cAAA,CAAeD,UAAf,CAAP;AAZ6D,CAA/D;AAsBAd,IAAKG,CAAAA,IAAKC,CAAAA,MAAOY,CAAAA,KAAjB,GAAyBhB,IAAKG,CAAAA,IAAKG,CAAAA,eAAV,GACrBN,IAAKO,CAAAA,MAAL,CAAY,MAAZ,CAAA,CAAoB,OAApB,CADqB,GAErB,QAAQ,CAACO,UAAD,CAAa;AAEnB,SAAOd,IAAKG,CAAAA,IAAKC,CAAAA,MAAOQ,CAAAA,MAAjB,CAAwBE,UAAxB,EAAoCd,IAAKG,CAAAA,IAAKa,CAAAA,KAA9C,CAAP;AAFmB,CAFzB;;\",\n\"sources\":[\"goog/json/hybrid.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n\\n/**\\n * @fileoverview Utility to attempt native JSON processing, falling back to\\n *     goog.json if not available.\\n *\\n *     This is intended as a drop-in for current users of goog.json who want\\n *     to take advantage of native JSON if present.\\n */\\n\\ngoog.provide('goog.json.hybrid');\\n\\ngoog.require('goog.asserts');\\ngoog.require('goog.json');\\n\\n\\n/**\\n * Attempts to serialize the JSON string natively, falling back to\\n * `goog.json.serialize` if unsuccessful.\\n * @param {!Object} obj JavaScript object to serialize to JSON.\\n * @return {string} Resulting JSON string.\\n */\\ngoog.json.hybrid.stringify = goog.json.USE_NATIVE_JSON ?\\n    goog.global['JSON']['stringify'] :\\n    function(obj) {\\n      'use strict';\\n      if (goog.global.JSON) {\\n        try {\\n          return goog.global.JSON.stringify(obj);\\n        } catch (e) {\\n          // Native serialization failed.  Fall through to retry with\\n          // goog.json.serialize.\\n        }\\n      }\\n\\n      return goog.json.serialize(obj);\\n    };\\n\\n\\n/**\\n * Attempts to parse the JSON string natively, falling back to\\n * the supplied `fallbackParser` if unsuccessful.\\n * @param {string} jsonString JSON string to parse.\\n * @param {function(string):Object} fallbackParser Fallback JSON parser used\\n *     if native\\n * @return {?Object} Resulting JSON object.\\n * @private\\n */\\ngoog.json.hybrid.parse_ = function(jsonString, fallbackParser) {\\n  'use strict';\\n  if (goog.global.JSON) {\\n    try {\\n      var obj = goog.global.JSON.parse(jsonString);\\n      goog.asserts.assert(typeof obj == 'object');\\n      return /** @type {?Object} */ (obj);\\n    } catch (e) {\\n      // Native parse failed.  Fall through to retry with goog.json.parse.\\n    }\\n  }\\n\\n  return fallbackParser(jsonString);\\n};\\n\\n\\n/**\\n * Attempts to parse the JSON string natively, falling back to\\n * `goog.json.parse` if unsuccessful.\\n * @param {string} jsonString JSON string to parse.\\n * @return {?Object} Resulting JSON object.\\n */\\ngoog.json.hybrid.parse = goog.json.USE_NATIVE_JSON ?\\n    goog.global['JSON']['parse'] :\\n    function(jsonString) {\\n      'use strict';\\n      return goog.json.hybrid.parse_(jsonString, goog.json.parse);\\n    };\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"json\",\"hybrid\",\"stringify\",\"USE_NATIVE_JSON\",\"global\",\"obj\",\"JSON\",\"e\",\"serialize\",\"parse_\",\"goog.json.hybrid.parse_\",\"jsonString\",\"fallbackParser\",\"parse\",\"asserts\",\"assert\"]\n}\n"]