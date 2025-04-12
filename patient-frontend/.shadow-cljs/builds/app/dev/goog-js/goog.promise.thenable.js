["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/promise/thenable.js"],"~:js","goog.loadModule(function(exports) {\n  function Thenable() {\n  }\n  \"use strict\";\n  goog.module(\"goog.Thenable\");\n  goog.module.declareLegacyNamespace();\n  const GoogPromise = goog.requireType(\"goog.Promise\");\n  Thenable.prototype.then = function(opt_onFulfilled, opt_onRejected, opt_context) {\n  };\n  Thenable.IMPLEMENTED_BY_PROP = \"$goog_Thenable\";\n  Thenable.addImplementation = function(ctor) {\n    if (COMPILED) {\n      ctor.prototype[Thenable.IMPLEMENTED_BY_PROP] = true;\n    } else {\n      ctor.prototype.$goog_Thenable = true;\n    }\n  };\n  Thenable.isImplementedBy = function(object) {\n    if (!object) {\n      return false;\n    }\n    try {\n      if (COMPILED) {\n        return !!object[Thenable.IMPLEMENTED_BY_PROP];\n      }\n      return !!object.$goog_Thenable;\n    } catch (e) {\n      return false;\n    }\n  };\n  exports = Thenable;\n  return exports;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\ngoog.module('goog.Thenable');\ngoog.module.declareLegacyNamespace();\n\n/** @suppress {extraRequire} used in complex type */\nconst GoogPromise = goog.requireType('goog.Promise');  // for the type reference.\n\n/**\n * Provides a more strict interface for Thenables in terms of\n * http://promisesaplus.com for interop with {@see GoogPromise}.\n *\n * @interface\n * @extends {IThenable<TYPE>}\n * @template TYPE\n */\nfunction Thenable() {}\n\n/**\n * Adds callbacks that will operate on the result of the Thenable, returning a\n * new child Promise.\n *\n * If the Thenable is fulfilled, the `onFulfilled` callback will be\n * invoked with the fulfillment value as argument, and the child Promise will\n * be fulfilled with the return value of the callback. If the callback throws\n * an exception, the child Promise will be rejected with the thrown value\n * instead.\n *\n * If the Thenable is rejected, the `onRejected` callback will be invoked with\n * the rejection reason as argument. Similar to the fulfilled case, the child\n * Promise will then be resolved with the return value of the callback, or\n * rejected with the thrown value if the callback throws an exception.\n *\n * @param {?(function(this:THIS, TYPE): VALUE)=} opt_onFulfilled A\n *     function that will be invoked with the fulfillment value if the Promise\n *     is fulfilled.\n * @param {?(function(this:THIS, *): *)=} opt_onRejected A function that will\n *     be invoked with the rejection reason if the Promise is rejected.\n * @param {THIS=} opt_context An optional context object that will be the\n *     execution context for the callbacks. By default, functions are executed\n *     with the default this.\n *\n * @return {RESULT} A new Promise that will receive the result\n *     of the fulfillment or rejection callback.\n * @template VALUE\n * @template THIS\n *\n * When a Promise (or thenable) is returned from the fulfilled callback,\n * the result is the payload of that promise, not the promise itself.\n *\n * @template RESULT := type('goog.Promise',\n *     cond(isUnknown(VALUE), unknown(),\n *       mapunion(VALUE, (V) =>\n *         cond(isTemplatized(V) && sub(rawTypeOf(V), 'IThenable'),\n *           templateTypeOf(V, 0),\n *           cond(sub(V, 'Thenable'),\n *              unknown(),\n *              V)))))\n *  =:\n *\n */\nThenable.prototype.then = function(\n    opt_onFulfilled, opt_onRejected, opt_context) {};\n\n/**\n * An expando property to indicate that an object implements\n * `Thenable`.\n *\n * {@see addImplementation}.\n *\n * @const\n */\nThenable.IMPLEMENTED_BY_PROP = '$goog_Thenable';\n\n/**\n * Marks a given class (constructor) as an implementation of Thenable, so\n * that we can query that fact at runtime. The class must have already\n * implemented the interface.\n * Exports a 'then' method on the constructor prototype, so that the objects\n * also implement the extern {@see Thenable} interface for interop with\n * other Promise implementations.\n * @param {function(new:Thenable,...?)} ctor The class constructor. The\n *     corresponding class must have already implemented the interface.\n */\nThenable.addImplementation = function(ctor) {\n  if (COMPILED) {\n    ctor.prototype[Thenable.IMPLEMENTED_BY_PROP] = true;\n  } else {\n    // Avoids dictionary access in uncompiled mode.\n    ctor.prototype.$goog_Thenable = true;\n  }\n};\n\n/**\n * @param {?} object\n * @return {boolean} Whether a given instance implements `Thenable`.\n *     The class/superclass of the instance must call `addImplementation`.\n */\nThenable.isImplementedBy = function(object) {\n  if (!object) {\n    return false;\n  }\n  try {\n    if (COMPILED) {\n      return !!object[Thenable.IMPLEMENTED_BY_PROP];\n    }\n    return !!object.$goog_Thenable;\n  } catch (e) {\n    // Property access seems to be forbidden.\n    return false;\n  }\n};\n\nexports = Thenable;\n","~:compiled-at",1744480462758,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.promise.thenable.js\",\n\"lineCount\":34,\n\"mappings\":\"AAAA,IAAA,CAAA,UAAA,CAAA,QAAA,CAAA,OAAA,CAAA;AAmBAA,UAASA,SAAQ,EAAG;;AAnBpB,cAAA;AAKAC,MAAKC,CAAAA,MAAL,CAAY,eAAZ,CAAA;AACAD,MAAKC,CAAAA,MAAOC,CAAAA,sBAAZ,EAAA;AAGA,QAAMC,cAAcH,IAAKI,CAAAA,WAAL,CAAiB,cAAjB,CAApB;AAuDAL,UAASM,CAAAA,SAAUC,CAAAA,IAAnB,GAA0BC,QAAQ,CAC9BC,eAD8B,EACbC,cADa,EACGC,WADH,CACgB;GADlD;AAWAX,UAASY,CAAAA,mBAAT,GAA+B,gBAA/B;AAYAZ,UAASa,CAAAA,iBAAT,GAA6BC,QAAQ,CAACC,IAAD,CAAO;AAC1C,QAAIC,QAAJ;AACED,UAAKT,CAAAA,SAAL,CAAeN,QAASY,CAAAA,mBAAxB,CAAA,GAA+C,IAA/C;AADF;AAIEG,UAAKT,CAAAA,SAAUW,CAAAA,cAAf,GAAgC,IAAhC;AAJF;AAD0C,GAA5C;AAcAjB,UAASkB,CAAAA,eAAT,GAA2BC,QAAQ,CAACC,MAAD,CAAS;AAC1C,QAAI,CAACA,MAAL;AACE,aAAO,KAAP;AADF;AAGA,OAAI;AACF,UAAIJ,QAAJ;AACE,eAAO,CAAC,CAACI,MAAA,CAAOpB,QAASY,CAAAA,mBAAhB,CAAT;AADF;AAGA,aAAO,CAAC,CAACQ,MAAOH,CAAAA,cAAhB;AAJE,KAKF,QAAOI,CAAP,CAAU;AAEV,aAAO,KAAP;AAFU;AAT8B,GAA5C;AAeAC,SAAA,GAAUtB,QAAV;AApHA,SAAA,OAAA;AAAA,CAAA,CAAA;;\",\n\"sources\":[\"goog/promise/thenable.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\ngoog.module('goog.Thenable');\\ngoog.module.declareLegacyNamespace();\\n\\n/** @suppress {extraRequire} used in complex type */\\nconst GoogPromise = goog.requireType('goog.Promise');  // for the type reference.\\n\\n/**\\n * Provides a more strict interface for Thenables in terms of\\n * http://promisesaplus.com for interop with {@see GoogPromise}.\\n *\\n * @interface\\n * @extends {IThenable<TYPE>}\\n * @template TYPE\\n */\\nfunction Thenable() {}\\n\\n/**\\n * Adds callbacks that will operate on the result of the Thenable, returning a\\n * new child Promise.\\n *\\n * If the Thenable is fulfilled, the `onFulfilled` callback will be\\n * invoked with the fulfillment value as argument, and the child Promise will\\n * be fulfilled with the return value of the callback. If the callback throws\\n * an exception, the child Promise will be rejected with the thrown value\\n * instead.\\n *\\n * If the Thenable is rejected, the `onRejected` callback will be invoked with\\n * the rejection reason as argument. Similar to the fulfilled case, the child\\n * Promise will then be resolved with the return value of the callback, or\\n * rejected with the thrown value if the callback throws an exception.\\n *\\n * @param {?(function(this:THIS, TYPE): VALUE)=} opt_onFulfilled A\\n *     function that will be invoked with the fulfillment value if the Promise\\n *     is fulfilled.\\n * @param {?(function(this:THIS, *): *)=} opt_onRejected A function that will\\n *     be invoked with the rejection reason if the Promise is rejected.\\n * @param {THIS=} opt_context An optional context object that will be the\\n *     execution context for the callbacks. By default, functions are executed\\n *     with the default this.\\n *\\n * @return {RESULT} A new Promise that will receive the result\\n *     of the fulfillment or rejection callback.\\n * @template VALUE\\n * @template THIS\\n *\\n * When a Promise (or thenable) is returned from the fulfilled callback,\\n * the result is the payload of that promise, not the promise itself.\\n *\\n * @template RESULT := type('goog.Promise',\\n *     cond(isUnknown(VALUE), unknown(),\\n *       mapunion(VALUE, (V) =>\\n *         cond(isTemplatized(V) && sub(rawTypeOf(V), 'IThenable'),\\n *           templateTypeOf(V, 0),\\n *           cond(sub(V, 'Thenable'),\\n *              unknown(),\\n *              V)))))\\n *  =:\\n *\\n */\\nThenable.prototype.then = function(\\n    opt_onFulfilled, opt_onRejected, opt_context) {};\\n\\n/**\\n * An expando property to indicate that an object implements\\n * `Thenable`.\\n *\\n * {@see addImplementation}.\\n *\\n * @const\\n */\\nThenable.IMPLEMENTED_BY_PROP = '$goog_Thenable';\\n\\n/**\\n * Marks a given class (constructor) as an implementation of Thenable, so\\n * that we can query that fact at runtime. The class must have already\\n * implemented the interface.\\n * Exports a 'then' method on the constructor prototype, so that the objects\\n * also implement the extern {@see Thenable} interface for interop with\\n * other Promise implementations.\\n * @param {function(new:Thenable,...?)} ctor The class constructor. The\\n *     corresponding class must have already implemented the interface.\\n */\\nThenable.addImplementation = function(ctor) {\\n  if (COMPILED) {\\n    ctor.prototype[Thenable.IMPLEMENTED_BY_PROP] = true;\\n  } else {\\n    // Avoids dictionary access in uncompiled mode.\\n    ctor.prototype.$goog_Thenable = true;\\n  }\\n};\\n\\n/**\\n * @param {?} object\\n * @return {boolean} Whether a given instance implements `Thenable`.\\n *     The class/superclass of the instance must call `addImplementation`.\\n */\\nThenable.isImplementedBy = function(object) {\\n  if (!object) {\\n    return false;\\n  }\\n  try {\\n    if (COMPILED) {\\n      return !!object[Thenable.IMPLEMENTED_BY_PROP];\\n    }\\n    return !!object.$goog_Thenable;\\n  } catch (e) {\\n    // Property access seems to be forbidden.\\n    return false;\\n  }\\n};\\n\\nexports = Thenable;\\n\"],\n\"names\":[\"Thenable\",\"goog\",\"module\",\"declareLegacyNamespace\",\"GoogPromise\",\"requireType\",\"prototype\",\"then\",\"Thenable.prototype.then\",\"opt_onFulfilled\",\"opt_onRejected\",\"opt_context\",\"IMPLEMENTED_BY_PROP\",\"addImplementation\",\"Thenable.addImplementation\",\"ctor\",\"COMPILED\",\"$goog_Thenable\",\"isImplementedBy\",\"Thenable.isImplementedBy\",\"object\",\"e\",\"exports\"]\n}\n"]