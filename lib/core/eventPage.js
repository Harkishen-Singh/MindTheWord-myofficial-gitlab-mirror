!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic('2', ['3', '4'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('3'),
      toIObject = $__require('4'),
      isEnum = $.isEnum;
  module.exports = function (isEntries) {
    return function (it) {
      var O = toIObject(it),
          keys = $.getKeys(O),
          length = keys.length,
          i = 0,
          result = [],
          key;
      while (length > i) if (isEnum.call(O, key = keys[i++])) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
      return result;
    };
  };
});
$__System.registerDynamic('5', ['6', '2'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('6'),
        $values = $__require('2')(false);
    $export($export.S, 'Object', { values: function values(it) {
            return $values(it);
        } });
});
$__System.registerDynamic('7', ['5', '8'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('5');
  module.exports = $__require('8').Object.values;
});
$__System.registerDynamic("9", ["7"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("7"), __esModule: true };
});
$__System.registerDynamic('a', ['b'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var defined = $__require('b');
  module.exports = function (it) {
    return Object(defined(it));
  };
});
$__System.registerDynamic('c', ['6', '8', 'd'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('6'),
        core = $__require('8'),
        fails = $__require('d');
    module.exports = function (KEY, exec) {
        var fn = (core.Object || {})[KEY] || Object[KEY],
            exp = {};
        exp[KEY] = exec(fn);
        $export($export.S + $export.F * fails(function () {
            fn(1);
        }), 'Object', exp);
    };
});
$__System.registerDynamic('e', ['a', 'c'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toObject = $__require('a');
  $__require('c')('keys', function ($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
});
$__System.registerDynamic('f', ['e', '8'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('e');
  module.exports = $__require('8').Object.keys;
});
$__System.registerDynamic("10", ["f"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("f"), __esModule: true };
});
$__System.register('11', ['12', '13', '14', '15'], function (_export) {
  var http, _createClass, _classCallCheck, _Promise, YandexTranslate;

  return {
    setters: [function (_4) {
      http = _4.http;
    }, function (_) {
      _createClass = _['default'];
    }, function (_2) {
      _classCallCheck = _2['default'];
    }, function (_3) {
      _Promise = _3['default'];
    }],
    execute: function () {

      /** Class for Yandex Translate */
      'use strict';

      YandexTranslate = (function () {

        /**
         * Initialize options and credentials
         * @constructor
         * @param {Object} key - Yandex key
         * @param {string} srcLang - source languages
         * @param {string} targetLang - target language
         */

        function YandexTranslate(key, srcLang, targetLang) {
          _classCallCheck(this, YandexTranslate);

          // check key
          this.key = key;
          this.srcLang = srcLang;
          this.targetLang = targetLang;
          this.url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=' + this.key;
          this.testurl = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=' + this.key + '&lang=' + this.srcLang + '-' + this.targetLang + '&text=MTW';
        }

        /**
         * Posts a request for translations and returns a promise.
         * @param {Object} - list of words
         * @returns {Promise} - On resolution gives translation map
         */

        _createClass(YandexTranslate, [{
          key: 'getTranslations',
          value: function getTranslations(words) {
            var _this = this;

            var promise = new _Promise(function (resolve, reject) {
              var promises = [],
                  translations = [];

              words = _this.toList(words);
              promises = _this.getPromises(words);

              _Promise.all(promises).then(function (responses) {
                var translations = _this.combineTranslations(responses);
                // console.log(translations);
                var tMap = _this.mapTranslations(translations, words);
                resolve(tMap);
              })['catch'](function (e) {
                reject(e);
              });
            });
            return promise;
          }

          /**
           * Convert object to list
           * @param {Object} words - words object
           * @returns {Array} wordList - array of words
           */
        }, {
          key: 'toList',
          value: function toList(words) {
            var wordList = [];
            var buff = '';
            for (var word in words) {
              try {
                buff = encodeURI(word); // checks if the word can be sent for translations
                wordList.push(word);
              } catch (e) {
                ;
              }
            }
            return wordList;
          }

          /**
           * Breaks the words list into 128 words and returns
           * a list of promises
           * Maximum characters allowed per request is 4000
           * @param {Array} words - list of source words
           * @returns {Array} promises - array of promises
           */
        }, {
          key: 'getPromises',
          value: function getPromises(words) {
            var i = 0,
                promises = [],
                url = '',
                url_len = 0,
                MAX_URL_LEN = 4000,
                buff = '';

            this.url += '&lang=' + this.srcLang + '-' + this.targetLang;
            while (i < words.length) {
              url = this.url;
              url_len = url.length;
              while (url_len < MAX_URL_LEN && i < words.length) {
                buff = encodeURI(words[i]);
                url += "&text=" + words[i];
                url_len += buff.length;
                i += 1;
              }
              url = encodeURI(url);
              promises.push(http(url).get());
            }

            return promises;
          }

          /**
           * Merge translations from all responses
           * @param {Array} responses - responses from all promises
           * @returns {Array} translations - combined responses
           */
        }, {
          key: 'combineTranslations',
          value: function combineTranslations(responses) {
            var translations = [];
            for (var i in responses) {
              translations = translations.concat(JSON.parse(responses[i]).text);
            }
            return translations;
          }

          /**
           * Map source words to translations
           * @param {Array} translations - list of translated words
           * @param {Object} words - source words list
           * @returns {Object} tMap - translation map
           */
        }, {
          key: 'mapTranslations',
          value: function mapTranslations(translations, words) {
            var tMap = {};
            for (var i in words) {
              // add a try catch block
              if (translations[i] !== undefined) {
                // prevent false translations
                tMap[words[i]] = translations[i];
              }
            }
            return tMap;
          }

          /**
           * Translate an entire input sentence
           * @param {string} text - sentence
           * @returns {Promise} promise - gives translated sentence on resolution
           */
        }, {
          key: 'translateSentence',
          value: function translateSentence(text) {
            var _this2 = this;

            var promise = new _Promise(function (resolve, reject) {
              _this2.url += '&lang=' + _this2.srcLang + '-' + _this2.targetLang;
              _this2.url += '&text=' + text;
              http(_this2.url).get().then(function (data) {
                resolve(JSON.parse(data).text[0]);
              })['catch'](function (e) {
                reject(e);
              });
            });
            return promise;
          }
        }]);

        return YandexTranslate;
      })();

      _export('YandexTranslate', YandexTranslate);
    }
  };
});

$__System.register('16', ['12', '13', '14', '15'], function (_export) {
  var http, _createClass, _classCallCheck, _Promise, GoogleTranslate;

  return {
    setters: [function (_4) {
      http = _4.http;
    }, function (_) {
      _createClass = _['default'];
    }, function (_2) {
      _classCallCheck = _2['default'];
    }, function (_3) {
      _Promise = _3['default'];
    }],
    execute: function () {

      /** Class for Google Translate */
      'use strict';

      GoogleTranslate = (function () {
        /**
         * Initialize options and credentials
         * @constructor
         * @param {Object} key - Google API key
         * @param {string} srcLang - source languages
         * @param {string} targetLang - target language
         */

        function GoogleTranslate(key, srcLang, targetLang) {
          _classCallCheck(this, GoogleTranslate);

          this.key = key;
          this.srcLang = srcLang;
          this.targetLang = targetLang;
          this.url = 'https://www.googleapis.com/language/translate/v2?key=' + this.key;
          this.testurl = 'https://www.googleapis.com/language/translate/v2?key=' + this.key + '&source=' + this.srcLang + '&target=' + this.targetLang + '&q=';
        }

        /**
         * Posts a request for translations and returns a promise.
         * @param {Object} - list of words
         * @returns {Promise} - On resolution gives translation map
         */

        _createClass(GoogleTranslate, [{
          key: 'getTranslations',
          value: function getTranslations(words) {
            var _this = this;

            var promise = new _Promise(function (resolve, reject) {
              var promises = [],
                  translations = [];

              _this.url += '&source=' + _this.srcLang + '&target=' + _this.targetLang;
              words = _this.toList(words);
              promises = _this.getPromises(words);

              _Promise.all(promises).then(function (responses) {
                var translations = _this.combineTranslations(responses);
                var tMap = _this.mapTranslations(translations, words);
                resolve(tMap);
              })['catch'](function (e) {
                reject(e);
              });
            });
            return promise;
          }

          /**
           * Convert object to list
           * @param {Object} words - words object
           * @returns {Array} wordList - array of words
           */
        }, {
          key: 'toList',
          value: function toList(words) {
            var wordList = [];
            for (var word in words) {
              wordList.push(word);
            }
            return wordList;
          }

          /**
           * Breaks the words list into 128 words and returns
           * a list of promises
           * @param {Array} words - list of source words
           * @returns {Array} promises - array of promises
           */
        }, {
          key: 'getPromises',
          value: function getPromises(words) {
            var i = 0,
                promises = [],
                url = '',
                limitedWords = [];

            while (i < words.length) {
              url = this.url;
              limitedWords = words.slice(i, i + 128);
              for (var j in limitedWords) {
                url += '&q=' + limitedWords[j];
              }
              url = encodeURI(url);
              promises.push(http(url).get());
              i += 128;
            }

            return promises;
          }

          /**
           * Merge translations from all responses
           * @param {Array} responses - responses from all promises
           * @returns {Array} translations - combined responses
           */
        }, {
          key: 'combineTranslations',
          value: function combineTranslations(responses) {
            var translations = [];
            for (var i in responses) {
              translations = translations.concat(JSON.parse(responses[i]).data.translations);
            }
            return translations;
          }

          /**
           * Map source words to translations
           * @param {Array} translations - list of translated words
           * @param {Object} words - source words list
           * @returns {Object} tMap - translation map
           */
        }, {
          key: 'mapTranslations',
          value: function mapTranslations(translations, words) {
            var tMap = {},
                i = 0,
                translatedWords = translations;

            for (var word in words) {
              // add a try catch block
              if (translatedWords[i].translatedText !== undefined) {
                // prevent false translations
                tMap[words[word]] = translatedWords[i].translatedText;
              }
              i++;
            }
            return tMap;
          }

          /**
           * Translate an entire input sentence
           * @param {string} text - sentence
           * @returns {Promise} promise - gives translated sentence on resolution
           */
        }, {
          key: 'translateSentence',
          value: function translateSentence(text) {
            var _this2 = this;

            var promise = new _Promise(function (resolve, reject) {
              _this2.url += '&source=' + _this2.srcLang + '&target=' + _this2.targetLang;
              _this2.url += '&q=' + text;
              http(_this2.url).get().then(function (data) {
                resolve(JSON.parse(data).data.translations[0].translatedText);
              })['catch'](function (e) {
                reject(e);
              });
            });
            return promise;
          }
        }]);

        return GoogleTranslate;
      })();

      _export('GoogleTranslate', GoogleTranslate);
    }
  };
});

$__System.registerDynamic('17', ['3'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('3');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
});
$__System.registerDynamic("18", ["17"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("17"), __esModule: true };
});
$__System.registerDynamic("13", ["18"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var _Object$defineProperty = $__require("18")["default"];
  exports["default"] = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  exports.__esModule = true;
});
$__System.registerDynamic("14", [], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  exports["default"] = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  exports.__esModule = true;
});
$__System.registerDynamic("19", [], true, function ($__require, exports, module) {
  /* */
  "format cjs";

  var global = this || self,
      GLOBAL = global;
});
$__System.registerDynamic('1a', ['1b', 'b'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toInteger = $__require('1b'),
      defined = $__require('b');
  module.exports = function (TO_STRING) {
    return function (that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
});
$__System.registerDynamic('1c', ['1a', '1d'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var $at = $__require('1a')(true);
  $__require('1d')(String, 'String', function (iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function () {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length) return {
      value: undefined,
      done: true
    };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
});
$__System.registerDynamic("1e", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function () {/* empty */};
});
$__System.registerDynamic("1f", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (done, value) {
    return { value: value, done: !!done };
  };
});
$__System.registerDynamic('20', ['21'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var cof = $__require('21');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
});
$__System.registerDynamic("b", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };
});
$__System.registerDynamic('4', ['20', 'b'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var IObject = $__require('20'),
      defined = $__require('b');
  module.exports = function (it) {
    return IObject(defined(it));
  };
});
$__System.registerDynamic('22', ['3', '23', '24', '25', '26'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var $ = $__require('3'),
      descriptor = $__require('23'),
      setToStringTag = $__require('24'),
      IteratorPrototype = {};
  $__require('25')(IteratorPrototype, $__require('26')('iterator'), function () {
    return this;
  });
  module.exports = function (Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, { next: descriptor(1, next) });
    setToStringTag(Constructor, NAME + ' Iterator');
  };
});
$__System.registerDynamic('1d', ['27', '6', '28', '25', '29', '2a', '22', '24', '3', '26'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var LIBRARY = $__require('27'),
      $export = $__require('6'),
      redefine = $__require('28'),
      hide = $__require('25'),
      has = $__require('29'),
      Iterators = $__require('2a'),
      $iterCreate = $__require('22'),
      setToStringTag = $__require('24'),
      getProto = $__require('3').getProto,
      ITERATOR = $__require('26')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function () {
    return this;
  };
  module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base()));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) redefine(proto, key, methods[key]);
      } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
});
$__System.registerDynamic('2b', ['1e', '1f', '2a', '4', '1d'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var addToUnscopables = $__require('1e'),
      step = $__require('1f'),
      Iterators = $__require('2a'),
      toIObject = $__require('4');
  module.exports = $__require('1d')(Array, 'Array', function (iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function () {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys') return step(0, index);
    if (kind == 'values') return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
});
$__System.registerDynamic('2c', ['2b', '2a'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('2b');
  var Iterators = $__require('2a');
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
});
$__System.registerDynamic("27", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = true;
});
$__System.registerDynamic('6', ['2d', '8', '2e'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var global = $__require('2d'),
      core = $__require('8'),
      ctx = $__require('2e'),
      PROTOTYPE = 'prototype';
  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports) continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function (C) {
        var F = function (param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
});
$__System.registerDynamic("2f", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it, Constructor, name) {
    if (!(it instanceof Constructor)) throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
});
$__System.registerDynamic('30', ['31'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var anObject = $__require('31');
  module.exports = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) anObject(ret.call(iterator));
      throw e;
    }
  };
});
$__System.registerDynamic('32', ['2a', '26'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var Iterators = $__require('2a'),
        ITERATOR = $__require('26')('iterator'),
        ArrayProto = Array.prototype;
    module.exports = function (it) {
        return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
    };
});
$__System.registerDynamic("1b", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // 7.1.4 ToInteger
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
});
$__System.registerDynamic('33', ['1b'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toInteger = $__require('1b'),
      min = Math.min;
  module.exports = function (it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
});
$__System.registerDynamic('34', ['21', '26'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var cof = $__require('21'),
        TAG = $__require('26')('toStringTag'),
        ARG = cof(function () {
        return arguments;
    }()) == 'Arguments';
    module.exports = function (it) {
        var O, T, B;
        return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
    };
});
$__System.registerDynamic("2a", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = {};
});
$__System.registerDynamic('35', ['34', '26', '2a', '8'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var classof = $__require('34'),
        ITERATOR = $__require('26')('iterator'),
        Iterators = $__require('2a');
    module.exports = $__require('8').getIteratorMethod = function (it) {
        if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
    };
});
$__System.registerDynamic('36', ['2e', '30', '32', '31', '33', '35'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var ctx = $__require('2e'),
      call = $__require('30'),
      isArrayIter = $__require('32'),
      anObject = $__require('31'),
      toLength = $__require('33'),
      getIterFn = $__require('35');
  module.exports = function (iterable, entries, fn, that) {
    var iterFn = getIterFn(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        index = 0,
        length,
        step,
        iterator;
    if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
    if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
      entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
      call(iterator, f, step.value, entries);
    }
  };
});
$__System.registerDynamic('37', ['3', '38', '31', '2e'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var getDesc = $__require('3').getDesc,
      isObject = $__require('38'),
      anObject = $__require('31');
  var check = function (O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function (test, buggy, set) {
      try {
        set = $__require('2e')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };
});
$__System.registerDynamic("39", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // 7.2.9 SameValue(x, y)
  module.exports = Object.is || function is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
});
$__System.registerDynamic('31', ['38'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('38');
  module.exports = function (it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };
});
$__System.registerDynamic('3a', ['31', '3b', '26'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var anObject = $__require('31'),
        aFunction = $__require('3b'),
        SPECIES = $__require('26')('species');
    module.exports = function (O, D) {
        var C = anObject(O).constructor,
            S;
        return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
    };
});
$__System.registerDynamic('3b', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };
});
$__System.registerDynamic('2e', ['3b'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var aFunction = $__require('3b');
  module.exports = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };
      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function () {
      return fn.apply(that, arguments);
    };
  };
});
$__System.registerDynamic("3c", [], true, function ($__require, exports, module) {
                  var global = this || self,
                      GLOBAL = global;
                  // fast apply, http://jsperf.lnkit.com/fast-apply/5
                  module.exports = function (fn, args, that) {
                                    var un = that === undefined;
                                    switch (args.length) {
                                                      case 0:
                                                                        return un ? fn() : fn.call(that);
                                                      case 1:
                                                                        return un ? fn(args[0]) : fn.call(that, args[0]);
                                                      case 2:
                                                                        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
                                                      case 3:
                                                                        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
                                                      case 4:
                                                                        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
                                    }return fn.apply(that, args);
                  };
});
$__System.registerDynamic('3d', ['2d'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('2d').document && document.documentElement;
});
$__System.registerDynamic('38', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
});
$__System.registerDynamic('3e', ['38', '2d'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var isObject = $__require('38'),
        document = $__require('2d').document,
        is = isObject(document) && isObject(document.createElement);
    module.exports = function (it) {
        return is ? document.createElement(it) : {};
    };
});
$__System.registerDynamic('3f', ['2e', '3c', '3d', '3e', '2d', '21', '40'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    var ctx = $__require('2e'),
        invoke = $__require('3c'),
        html = $__require('3d'),
        cel = $__require('3e'),
        global = $__require('2d'),
        process = global.process,
        setTask = global.setImmediate,
        clearTask = global.clearImmediate,
        MessageChannel = global.MessageChannel,
        counter = 0,
        queue = {},
        ONREADYSTATECHANGE = 'onreadystatechange',
        defer,
        channel,
        port;
    var run = function () {
      var id = +this;
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listner = function (event) {
      run.call(event.data);
    };
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [],
            i = 1;
        while (arguments.length > i) args.push(arguments[i++]);
        queue[++counter] = function () {
          invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      if ($__require('21')(process) == 'process') {
        defer = function (id) {
          process.nextTick(ctx(run, id, 1));
        };
      } else if (MessageChannel) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listner;
        defer = ctx(port.postMessage, port, 1);
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
        defer = function (id) {
          global.postMessage(id + '', '*');
        };
        global.addEventListener('message', listner, false);
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function (id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
            html.removeChild(this);
            run.call(id);
          };
        };
      } else {
        defer = function (id) {
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    };
  })($__require('40'));
});
$__System.registerDynamic("21", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toString = {}.toString;

  module.exports = function (it) {
    return toString.call(it).slice(8, -1);
  };
});
$__System.registerDynamic('41', ['2d', '3f', '21', '40'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    var global = $__require('2d'),
        macrotask = $__require('3f').set,
        Observer = global.MutationObserver || global.WebKitMutationObserver,
        process = global.process,
        Promise = global.Promise,
        isNode = $__require('21')(process) == 'process',
        head,
        last,
        notify;
    var flush = function () {
      var parent, domain, fn;
      if (isNode && (parent = process.domain)) {
        process.domain = null;
        parent.exit();
      }
      while (head) {
        domain = head.domain;
        fn = head.fn;
        if (domain) domain.enter();
        fn();
        if (domain) domain.exit();
        head = head.next;
      }
      last = undefined;
      if (parent) parent.enter();
    };
    if (isNode) {
      notify = function () {
        process.nextTick(flush);
      };
    } else if (Observer) {
      var toggle = 1,
          node = document.createTextNode('');
      new Observer(flush).observe(node, { characterData: true });
      notify = function () {
        node.data = toggle = -toggle;
      };
    } else if (Promise && Promise.resolve) {
      notify = function () {
        Promise.resolve().then(flush);
      };
    } else {
      notify = function () {
        macrotask.call(global, flush);
      };
    }
    module.exports = function asap(fn) {
      var task = {
        fn: fn,
        next: undefined,
        domain: isNode && process.domain
      };
      if (last) last.next = task;
      if (!head) {
        head = task;
        notify();
      }
      last = task;
    };
  })($__require('40'));
});
$__System.registerDynamic("23", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
});
$__System.registerDynamic('25', ['3', '23', '42'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('3'),
      createDesc = $__require('23');
  module.exports = $__require('42') ? function (object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };
});
$__System.registerDynamic('28', ['25'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('25');
});
$__System.registerDynamic('43', ['28'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var redefine = $__require('28');
  module.exports = function (target, src) {
    for (var key in src) redefine(target, key, src[key]);
    return target;
  };
});
$__System.registerDynamic("29", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function (it, key) {
    return hasOwnProperty.call(it, key);
  };
});
$__System.registerDynamic('24', ['3', '29', '26'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var def = $__require('3').setDesc,
      has = $__require('29'),
      TAG = $__require('26')('toStringTag');
  module.exports = function (it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
      configurable: true,
      value: tag
    });
  };
});
$__System.registerDynamic("3", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
});
$__System.registerDynamic("d", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
});
$__System.registerDynamic('42', ['d'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = !$__require('d')(function () {
    return Object.defineProperty({}, 'a', { get: function () {
        return 7;
      } }).a != 7;
  });
});
$__System.registerDynamic('44', ['8', '3', '42', '26'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var core = $__require('8'),
      $ = $__require('3'),
      DESCRIPTORS = $__require('42'),
      SPECIES = $__require('26')('species');
  module.exports = function (KEY) {
    var C = core[KEY];
    if (DESCRIPTORS && C && !C[SPECIES]) $.setDesc(C, SPECIES, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  };
});
$__System.registerDynamic('45', ['2d'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var global = $__require('2d'),
        SHARED = '__core-js_shared__',
        store = global[SHARED] || (global[SHARED] = {});
    module.exports = function (key) {
        return store[key] || (store[key] = {});
    };
});
$__System.registerDynamic('46', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var id = 0,
      px = Math.random();
  module.exports = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
});
$__System.registerDynamic('2d', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});
$__System.registerDynamic('26', ['45', '46', '2d'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var store = $__require('45')('wks'),
        uid = $__require('46'),
        Symbol = $__require('2d').Symbol;
    module.exports = function (name) {
        return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
    };
});
$__System.registerDynamic('47', ['26'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var ITERATOR = $__require('26')('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function () {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function () {
      throw 2;
    });
  } catch (e) {}
  module.exports = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function () {
        safe = true;
      };
      arr[ITERATOR] = function () {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
});
$__System.registerDynamic('48', [], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    // shim for using process in browser

    var process = module.exports = {};
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;

    function cleanUpNextTick() {
        if (!draining || !currentQueue) {
            return;
        }
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }

    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = setTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        clearTimeout(timeout);
    }

    process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            setTimeout(drainQueue, 0);
        }
    };

    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues
    process.versions = {};

    function noop() {}

    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;

    process.binding = function (name) {
        throw new Error('process.binding is not supported');
    };

    process.cwd = function () {
        return '/';
    };
    process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
    };
    process.umask = function () {
        return 0;
    };
});
$__System.registerDynamic("49", ["48"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("48");
});
$__System.registerDynamic('4a', ['49'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__System._nodeRequire ? process : $__require('49');
});
$__System.registerDynamic("40", ["4a"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("4a");
});
$__System.registerDynamic('4b', ['3', '27', '2d', '2e', '34', '6', '38', '31', '3b', '2f', '36', '37', '39', '26', '3a', '41', '42', '43', '24', '44', '8', '47', '40'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var $ = $__require('3'),
        LIBRARY = $__require('27'),
        global = $__require('2d'),
        ctx = $__require('2e'),
        classof = $__require('34'),
        $export = $__require('6'),
        isObject = $__require('38'),
        anObject = $__require('31'),
        aFunction = $__require('3b'),
        strictNew = $__require('2f'),
        forOf = $__require('36'),
        setProto = $__require('37').set,
        same = $__require('39'),
        SPECIES = $__require('26')('species'),
        speciesConstructor = $__require('3a'),
        asap = $__require('41'),
        PROMISE = 'Promise',
        process = global.process,
        isNode = classof(process) == 'process',
        P = global[PROMISE],
        Wrapper;
    var testResolve = function (sub) {
      var test = new P(function () {});
      if (sub) test.constructor = Object;
      return P.resolve(test) === test;
    };
    var USE_NATIVE = function () {
      var works = false;
      function P2(x) {
        var self = new P(x);
        setProto(self, P2.prototype);
        return self;
      }
      try {
        works = P && P.resolve && testResolve();
        setProto(P2, P);
        P2.prototype = $.create(P.prototype, { constructor: { value: P2 } });
        if (!(P2.resolve(5).then(function () {}) instanceof P2)) {
          works = false;
        }
        if (works && $__require('42')) {
          var thenableThenGotten = false;
          P.resolve($.setDesc({}, 'then', { get: function () {
              thenableThenGotten = true;
            } }));
          works = thenableThenGotten;
        }
      } catch (e) {
        works = false;
      }
      return works;
    }();
    var sameConstructor = function (a, b) {
      if (LIBRARY && a === P && b === Wrapper) return true;
      return same(a, b);
    };
    var getConstructor = function (C) {
      var S = anObject(C)[SPECIES];
      return S != undefined ? S : C;
    };
    var isThenable = function (it) {
      var then;
      return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
    };
    var PromiseCapability = function (C) {
      var resolve, reject;
      this.promise = new C(function ($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aFunction(resolve), this.reject = aFunction(reject);
    };
    var perform = function (exec) {
      try {
        exec();
      } catch (e) {
        return { error: e };
      }
    };
    var notify = function (record, isReject) {
      if (record.n) return;
      record.n = true;
      var chain = record.c;
      asap(function () {
        var value = record.v,
            ok = record.s == 1,
            i = 0;
        var run = function (reaction) {
          var handler = ok ? reaction.ok : reaction.fail,
              resolve = reaction.resolve,
              reject = reaction.reject,
              result,
              then;
          try {
            if (handler) {
              if (!ok) record.h = true;
              result = handler === true ? value : handler(value);
              if (result === reaction.promise) {
                reject(TypeError('Promise-chain cycle'));
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject);
              } else resolve(result);
            } else reject(value);
          } catch (e) {
            reject(e);
          }
        };
        while (chain.length > i) run(chain[i++]);
        chain.length = 0;
        record.n = false;
        if (isReject) setTimeout(function () {
          var promise = record.p,
              handler,
              console;
          if (isUnhandled(promise)) {
            if (isNode) {
              process.emit('unhandledRejection', value, promise);
            } else if (handler = global.onunhandledrejection) {
              handler({
                promise: promise,
                reason: value
              });
            } else if ((console = global.console) && console.error) {
              console.error('Unhandled promise rejection', value);
            }
          }
          record.a = undefined;
        }, 1);
      });
    };
    var isUnhandled = function (promise) {
      var record = promise._d,
          chain = record.a || record.c,
          i = 0,
          reaction;
      if (record.h) return false;
      while (chain.length > i) {
        reaction = chain[i++];
        if (reaction.fail || !isUnhandled(reaction.promise)) return false;
      }
      return true;
    };
    var $reject = function (value) {
      var record = this;
      if (record.d) return;
      record.d = true;
      record = record.r || record;
      record.v = value;
      record.s = 2;
      record.a = record.c.slice();
      notify(record, true);
    };
    var $resolve = function (value) {
      var record = this,
          then;
      if (record.d) return;
      record.d = true;
      record = record.r || record;
      try {
        if (record.p === value) throw TypeError("Promise can't be resolved itself");
        if (then = isThenable(value)) {
          asap(function () {
            var wrapper = {
              r: record,
              d: false
            };
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          record.v = value;
          record.s = 1;
          notify(record, false);
        }
      } catch (e) {
        $reject.call({
          r: record,
          d: false
        }, e);
      }
    };
    if (!USE_NATIVE) {
      P = function Promise(executor) {
        aFunction(executor);
        var record = this._d = {
          p: strictNew(this, P, PROMISE),
          c: [],
          a: undefined,
          s: 0,
          d: false,
          v: undefined,
          h: false,
          n: false
        };
        try {
          executor(ctx($resolve, record, 1), ctx($reject, record, 1));
        } catch (err) {
          $reject.call(record, err);
        }
      };
      $__require('43')(P.prototype, {
        then: function then(onFulfilled, onRejected) {
          var reaction = new PromiseCapability(speciesConstructor(this, P)),
              promise = reaction.promise,
              record = this._d;
          reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
          reaction.fail = typeof onRejected == 'function' && onRejected;
          record.c.push(reaction);
          if (record.a) record.a.push(reaction);
          if (record.s) notify(record, false);
          return promise;
        },
        'catch': function (onRejected) {
          return this.then(undefined, onRejected);
        }
      });
    }
    $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: P });
    $__require('24')(P, PROMISE);
    $__require('44')(PROMISE);
    Wrapper = $__require('8')[PROMISE];
    $export($export.S + $export.F * !USE_NATIVE, PROMISE, { reject: function reject(r) {
        var capability = new PromiseCapability(this),
            $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
      } });
    $export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, { resolve: function resolve(x) {
        if (x instanceof P && sameConstructor(x.constructor, this)) return x;
        var capability = new PromiseCapability(this),
            $$resolve = capability.resolve;
        $$resolve(x);
        return capability.promise;
      } });
    $export($export.S + $export.F * !(USE_NATIVE && $__require('47')(function (iter) {
      P.all(iter)['catch'](function () {});
    })), PROMISE, {
      all: function all(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            resolve = capability.resolve,
            reject = capability.reject,
            values = [];
        var abrupt = perform(function () {
          forOf(iterable, false, values.push, values);
          var remaining = values.length,
              results = Array(remaining);
          if (remaining) $.each.call(values, function (promise, index) {
            var alreadyCalled = false;
            C.resolve(promise).then(function (value) {
              if (alreadyCalled) return;
              alreadyCalled = true;
              results[index] = value;
              --remaining || resolve(results);
            }, reject);
          });else resolve(results);
        });
        if (abrupt) reject(abrupt.error);
        return capability.promise;
      },
      race: function race(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            reject = capability.reject;
        var abrupt = perform(function () {
          forOf(iterable, false, function (promise) {
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        if (abrupt) reject(abrupt.error);
        return capability.promise;
      }
    });
  })($__require('40'));
});
$__System.registerDynamic('8', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var core = module.exports = { version: '1.2.6' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
$__System.registerDynamic('4c', ['19', '1c', '2c', '4b', '8'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('19');
  $__require('1c');
  $__require('2c');
  $__require('4b');
  module.exports = $__require('8').Promise;
});
$__System.registerDynamic("15", ["4c"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("4c"), __esModule: true };
});
$__System.register('12', ['15'], function (_export) {
  var _Promise;

  function http(url) {

    // A small example of object
    var core = {

      // Method that performs the ajax request
      ajax: function ajax(method, url, args, headers) {

        // Creating a promise
        var promise = new _Promise(function (resolve, reject) {

          // Instantiates the XMLHttpRequest
          var client = new XMLHttpRequest();
          var uri = '';

          if (typeof args === 'string' && args.substr(0, 6) === '_bing_') {
            uri = args.substring(6);
          } else if (args && args.xml) {
            uri = args.payload;
          } else if (args && (method === 'POST' || method === 'PUT')) {
            // uri += '?';
            var argcount = 0;
            for (var key in args) {
              if (args.hasOwnProperty(key)) {
                if (argcount++) {
                  uri += '&';
                }
                uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
              }
            }
          }

          client.open(method, url);
          if (headers) {
            for (var i in headers) {
              client.setRequestHeader(i, headers[i]);
            }
          }
          client.send(uri);

          client.onload = function () {
            if (this.status >= 200 && this.status < 300) {
              // Performs the function "resolve" when this.status is equal to 2xx
              resolve(this.response);
            } else {
              // Performs the function "reject" when this.status is different than 2xx
              reject(this.statusText);
            }
          };
          client.onerror = function () {
            reject(this.statusText);
          };
        });

        // Return the promise
        return promise;
      }
    };

    // Adapter pattern
    return {
      'get': function get(args, headers) {
        return core.ajax('GET', url, args, headers);
      },
      'post': function post(args, headers) {
        return core.ajax('POST', url, args, headers);
      },
      'put': function put(args, headers) {
        return core.ajax('PUT', url, args, headers);
      },
      'delete': function _delete(args, headers) {
        return core.ajax('DELETE', url, args, headers);
      }
    };
  }

  return {
    setters: [function (_) {
      _Promise = _['default'];
    }],
    execute: function () {
      // A-> $http function is implemented in order to follow the standard Adapter pattern
      // code taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Example_using_new_XMLHttpRequest()
      'use strict';

      _export('http', http);

      ;
    }
  };
});

$__System.register('4d', ['12', '13', '14', '15'], function (_export) {
  var http, _createClass, _classCallCheck, _Promise, AzureTranslate;

  return {
    setters: [function (_4) {
      http = _4.http;
    }, function (_) {
      _createClass = _['default'];
    }, function (_2) {
      _classCallCheck = _2['default'];
    }, function (_3) {
      _Promise = _3['default'];
    }],
    execute: function () {

      /** Class for Bing translate feature */
      'use strict';

      AzureTranslate = (function () {
        /**
         * Initialize options and credentials
         * @constructor
         * @param {Object} key - client_id and client_secret
         * @param {string} srcLang - source languages
         * @param {string} targetLang - target language
         */

        function AzureTranslate(key, srcLang, targetLang) {
          _classCallCheck(this, AzureTranslate);

          this.srcLang = srcLang;
          this.targetLang = targetLang;
          this.key = key;
          this.options = {
            baseUrl: 'https://api.cognitive.microsofttranslator.com',
            headers: {
              'Ocp-Apim-Subscription-Key': key,
              'Content-type': 'application/json',
              'X-ClientTraceId': this.getUUID()
            },
            body: []
          };
          this.url = this.options.baseUrl + '/translate?api-version=3.0' + '&from=' + this.srcLang + '&to=' + this.targetLang;
          this.testurl = 'https://api.cognitive.microsofttranslator.com/languages?api-version=3.0';
        }

        /**
         * Obtains auth token, posts a request for translations
         * and returns a promise.
         * @param {Object} - list of words
         * @returns {Promise} - On resolution gives the response
         */

        _createClass(AzureTranslate, [{
          key: 'getTranslations',
          value: function getTranslations(words) {
            var _this = this;

            var promise = new _Promise(function (resolve, reject) {
              var Lists = _this.toList(words);
              if (Lists.toString().length >= 4900) {
                // limitation Azure translator text API
                reject('Azure Exception. Cannot Send more than 5000 characters.');
              } else {
                _this.detectLanguage(Lists.toString()).then(function (lang) {
                  if (lang === _this.srcLang) {
                    _this.options.body = [{ 'text': Lists.toString() }];
                    http(_this.url).post('_bing_' + JSON.stringify(_this.options.body), _this.options.headers).then(function (data) {
                      var inJSON = JSON.parse(data);
                      var translationsList = inJSON[0]['translations'][0]['text'].substring(-1).split(',');
                      var tmap = _this.mapTranslations(translationsList, words);
                      resolve(tmap);
                    })['catch'](function (e) {
                      reject(e);
                    });
                  } else {
                    resolve({});
                  }
                });
              }
            });
            return promise;
          }
        }, {
          key: 'detectLanguage',
          value: function detectLanguage(words) {
            var _this2 = this;

            return new _Promise(function (resolve, reject) {
              var url = 'https://api.cognitive.microsofttranslator.com/detect?api-version=3.0',
                  headers = {
                'Ocp-Apim-Subscription-Key': _this2.key,
                'Content-type': 'application/json',
                'X-ClientTraceId': _this2.getUUID()
              },
                  body = [{
                'Text': words
              }],
                  detectedLang = '';
              http(url).post('_bing_' + JSON.stringify(body), headers).then(function (data) {
                var inJSON = JSON.parse(data);
                detectedLang = inJSON[0]['language'];
                resolve(detectedLang);
              })['catch'](function (e) {
                reject(e);
              });
            });
          }

          /**
           * Convert object to list
           * @param {Object} words - words object
           * @returns {Array} wordList - array of words
           */
        }, {
          key: 'toList',
          value: function toList(words) {
            var wordList = [];
            var buff = '';
            for (var word in words) {
              try {
                buff = encodeURI(word); // checks if the word can be sent for translations
                wordList.push(word);
              } catch (e) {
                ;
              }
            }
            return wordList;
          }

          /**
           * Convert object to list
           * @returns {String} uuid - unique verification code; format -> uuidv4
           */
        }, {
          key: 'getUUID',
          value: function getUUID() {
            var uuid = '';
            var dec2hex = [];
            for (var i = 0; i <= 15; i++) {
              dec2hex[i] = i.toString(16);
            }
            for (var i = 1; i <= 36; i++) {
              if (i === 9 || i === 14 || i === 19 || i === 24) {
                uuid += '-';
              } else if (i === 15) {
                uuid += 4;
              } else if (i === 20) {
                uuid += dec2hex[Math.random() * 4 | 0 + 8];
              } else {
                uuid += dec2hex[Math.random() * 16 | 0];
              }
            }
            return uuid;
          }

          /**
           * Creates the XML payload for Bing
           * @param {Object} words - words list
           * @returns {Object} POST payload object
           */
        }, {
          key: 'formPayload',
          value: function formPayload(words) {
            var payload = '<TranslateArrayRequest>' + '<AppId></AppId>' + '<From>' + this.srcLang + '</From>' + '<Texts>';
            for (var word in words) {
              payload += '<string xmlns="http://schemas.microsoft.com/2003/10/Serialization/Arrays">' + word + '</string>';
            }

            payload += '</Texts>' + '<To>' + this.targetLang + '</To>' + '</TranslateArrayRequest>';

            return { 'payload': payload, 'xml': true };
          }

          /**
           * Returns an array of translations which is in order
           * with the source words
           * @param {string} res - response from Bing
           * @param {Object} words - word list
           * @returns {Array} translations - list of translated words
           */
        }, {
          key: 'filterTranslations',
          value: function filterTranslations(res, words) {
            // parse XML response to find response string and convert to lowercase
            var xmlDoc = this.parseXML(res),
                elements = xmlDoc.getElementsByTagName('TranslatedText'),
                translations = [];

            for (var i in elements) {
              translations.push(elements[i].innerHTML);
            }

            return translations;
          }

          /**
           * Parse string into XML
           * Referred: http://stackoverflow.com/questions/7949752/cross-browser-javascript-xml-parsing
           * @param {string} xmlStr - XML response
           * @returns {Object} parsed XML
           */
        }, {
          key: 'parseXML',
          value: function parseXML(xmlStr) {
            return new window.DOMParser().parseFromString(xmlStr, 'text/xml');
          }

          /**
           * Map source words to translations
           * @param {Array} translations - list of translated words
           * @param {Object} words - source words list
           * @returns {Object} tMap - translation map
           */
        }, {
          key: 'mapTranslations',
          value: function mapTranslations(translations, words) {
            var tMap = {},
                i = 0,
                translatedWords = translations;

            for (var word in words) {
              // add a try catch block
              if (translatedWords[i] !== undefined) {
                // prevent false translations
                tMap[word] = translatedWords[i];
              }
              i++;
            }

            return tMap;
          }

          /**
           * Translate an entire input sentence
           * @param {string} text - sentence
           * @returns {Promise} promise - gives translated sentence on resolution
           */
        }, {
          key: 'translateSentence',
          value: function translateSentence(text) {
            var _this3 = this;

            var promise = new _Promise(function (resolve, reject) {
              if (text.toString().length >= 4900) {
                // limitation Azure translator text API
                reject('Azure Exception. Cannot Send more than 5000 characters.');
              } else {
                _this3.detectLanguage(text.toString()).then(function (lang) {
                  if (lang === _this3.srcLang) {
                    _this3.options.body = [{ 'text': text.toString() }];
                    http(_this3.url).post('_bing_' + JSON.stringify(_this3.options.body), _this3.options.headers).then(function (res) {
                      var xml = _this3.parseXML(res);
                      var sentence = xml.getElementsByTagName('string')[0].innerHTML;
                      resolve(sentence);
                    })['catch'](function (e) {
                      reject(e);
                    });
                  } else {
                    resolve({});
                  }
                });
              }
            });
            return promise;
          }
        }]);

        return AzureTranslate;
      })();

      _export('AzureTranslate', AzureTranslate);
    }
  };
});

$__System.register("4e", [], function (_export) {
  "use strict";

  var ResponsiveVoiceLanguages;
  return {
    setters: [],
    execute: function () {
      ResponsiveVoiceLanguages = {
        "en": "UK English Female",
        "es": "Spanish Female",
        "fr": "French Female",
        "de": "Deutsch Female",
        "it": "Italian Female",
        "el": "Greek Female",
        "hu": "Hungarian Female",
        "tr": "Turkish Female",
        "ru": "Russian Female",
        "nl": "Dutch Female",
        "sv": "Swedish Female",
        "no": "Norwegian Female",
        "ja": "Japanese Female",
        "ko": "Korean Female",
        "zh": "Chinese Female",
        "hi": "Hindi Female",
        "sr": "Serbian Male",
        "hr": "Croatian Male",
        "bs": "Bosnian Male",
        "ro": "Romanian Male",
        "ca": "Catalan Male",
        "fi": "Finnish Female",
        "af": "Afrikaans Male",
        "sq": "Albanian Male",
        "ar": "Arabic Male",
        "hy": "Armenian Male",
        "cs": "Czech Female",
        "da": "Danish Female",
        "eo": "Esperanto Male",
        "ht": "Hatian Creole Female",
        "is": "Icelandic Male",
        "id": "Indonesian Female",
        "la": "Latin Female",
        "lv": "Latvian Male",
        "mk": "Macedonian Male",
        "mo": "Moldavian Male",
        "pl": "Polish Female",
        "pt": "Portuguese Female",
        "sh": "Serbo-Croatian Male",
        "sk": "Slovak Female",
        "sw": "Swahili Male",
        "ta": "Tamil Male",
        "th": "Thai Female",
        "vi": "Vietnamese Male",
        "cy": "Welsh Male"
      };

      _export("ResponsiveVoiceLanguages", ResponsiveVoiceLanguages);
    }
  };
});

$__System.register('4f', ['9', '10', '11', '13', '14', '15', '16', '4d', '4e'], function (_export) {
  var _Object$values, _Object$keys, YandexTranslate, _createClass, _classCallCheck, _Promise, GoogleTranslate, AzureTranslate, ResponsiveVoiceLanguages, ContextMenu;

  return {
    setters: [function (_4) {
      _Object$values = _4['default'];
    }, function (_5) {
      _Object$keys = _5['default'];
    }, function (_6) {
      YandexTranslate = _6.YandexTranslate;
    }, function (_) {
      _createClass = _['default'];
    }, function (_2) {
      _classCallCheck = _2['default'];
    }, function (_3) {
      _Promise = _3['default'];
    }, function (_7) {
      GoogleTranslate = _7.GoogleTranslate;
    }, function (_d) {
      AzureTranslate = _d.AzureTranslate;
    }, function (_e) {
      ResponsiveVoiceLanguages = _e.ResponsiveVoiceLanguages;
    }],
    execute: function () {
      'use strict';

      ContextMenu = (function () {
        function ContextMenu() {
          _classCallCheck(this, ContextMenu);
        }

        _createClass(ContextMenu, [{
          key: 'isWordCountNone',
          value: function isWordCountNone(inputString) {
            var s = inputString;
            s = s.replace(/(^\s*)|(\s*$)/gi, '');
            s = s.replace(/[ ]{2,}/gi, ' ');
            s = s.replace(/\n /, '\n');
            if (s.split(' ').length !== 1) {
              alert('Please select a single word only. Phrases such as: "' + inputString + '" aren\'t allowed');
              return true;
            }
            return false;
          }
        }, {
          key: 'searchForSimilarWords',
          value: function searchForSimilarWords(selectedText, searchPlatform) {
            var searchPlatformURLS = {
              'bing': 'http://www.bing.com/search?q=%s+synonyms&go=&qs=n&sk=&sc=8-9&form=QBLH',
              'google': 'http://www.google.com/#q=%s+synonyms&fp=1',
              'googleImages': 'http://www.google.com/search?num=10&hl=en&site=imghp&tbm=isch&source=hp&q=%s',
              'thesaurus': 'http://www.thesaurus.com/browse/%s?s=t'
            };
            var searchUrl = searchPlatformURLS[searchPlatform];
            selectedText = selectedText.replace(' ', '+');
            searchUrl = searchUrl.replace(/%s/g, selectedText);
            browser.tabs.create({
              'url': searchUrl
            });
          }
        }, {
          key: 'speakTheWord',
          value: function speakTheWord() {
            browser.storage.local.get(null).then(function (data, err) {
              var playbackOptions = JSON.parse(data.playbackOptions);
              var targetLanguage = data.targetLanguage;
              var utterance = data.utterance;
              var languageDifference = true;

              // chrome.tts.getVoices((voices) => {
              //   voices.forEach((voice) => {
              //     // to search for current voice name and compare if the language supported by it is similar to the target language
              //     if (voice.voiceName == playbackOptions.voiceName && voice.lang.includes(targetLanguage))
              //       languageDifference = false;
              //   });
              // });

              var options = {
                rate: parseFloat(playbackOptions.rate),
                pitch: parseFloat(playbackOptions.pitch),
                volume: parseFloat(playbackOptions.volume)
              };

              if (!languageDifference) {
                // if target language is same as the one supported by playback voice name
                options['voiceName'] = playbackOptions.voiceName;
                // chrome.tts.speak(utterance, options);
              } else {
                  var targetLanguageCode = ResponsiveVoiceLanguages[targetLanguage];
                  if (targetLanguageCode != null) {
                    browser.storage.local.set({
                      'targetLanguageCode': targetLanguageCode,
                      'options': options
                    });
                    browser.tabs.executeScript(null, {
                      file: 'assets/js/responsivevoice.js'
                    });
                  } else {
                    browser.notifications.create({
                      type: 'basic',
                      iconUrl: 'assets/img/128.png',
                      title: 'Mind The Word',
                      message: 'Pronunciation not available.'
                    });
                  }
                }
            });
          }
        }, {
          key: 'translateSentence',
          value: function translateSentence(selectedText, translatedWords) {
            var promise = new _Promise(function (resolve, reject) {
              var keys = ['translatorService', 'sourceLanguage', 'targetLanguage', 'yandexTranslatorApiKey', 'googleTranslatorApiKey', 'bingTranslatorApiKey'];
              var words = selectedText.split(' ');
              var translations = _Object$values(translatedWords);
              var sourceWords = _Object$keys(translatedWords);
              if (words.length >= 2 && words.length < 14) {
                for (var i in words) {
                  if (translations.indexOf(words[i]) > -1) {
                    words[i] = sourceWords[translations.indexOf(words[i])];
                  }
                }
                selectedText = words.join(' ');
                browser.storage.local.get(keys).then(function (data, err) {
                  var promise = {};
                  switch (data.translatorService) {
                    case 'Yandex':
                      var yandexTranslate = new YandexTranslate(data.yandexTranslatorApiKey, data.sourceLanguage, data.targetLanguage);
                      promise = yandexTranslate.translateSentence(selectedText);
                      break;
                    case 'Azure':
                      var azureTranslate = new AzureTranslate(data.bingTranslatorApiKey, data.sourceLanguage, data.targetLanguage);
                      promise = azureTranslate.translateSentence(selectedText);
                      break;
                    case 'Google':
                      var googleTranslate = new GoogleTranslate(data.googleTranslatorApiKey, data.sourceLanguage, data.targetLanguage);
                      promise = googleTranslate.translateSentence(selectedText);
                      break;
                    default:
                  }
                  promise.then(function (translatedSentence) {
                    resolve(translatedSentence);
                  })['catch'](function (e) {
                    reject(e);
                  });
                });
              } else {
                alert('Select a sentence containing at least 3 words and at most 15 words.');
              }
            });
            return promise;
          }
        }]);

        return ContextMenu;
      })();

      _export('ContextMenu', ContextMenu);
    }
  };
});

$__System.register("50", [], function (_export) {
  "use strict";

  var localData;
  return {
    setters: [],
    execute: function () {
      localData = {
        initialized: true,
        activation: true,
        blacklist: '(stackoverflow.com|github.com|code.google.com|developer.*.com|duolingo.com)',
        savedPatterns: JSON.stringify([]),
        sourceLanguage: "",
        targetLanguage: "",
        translatedWordStyle: 'font-style: inherit;\ncolor: rgba(255,153,0,1);\nbackground-color: rgba(256, 100, 50, 0);',
        userBlacklistedWords: '(this|that)',
        translationProbability: 15,
        minimumSourceWordLength: 3,
        ngramMin: 1,
        ngramMax: 1,
        userDefinedTranslations: '{"the":"the", "a":"a"}',
        translatorService: "",
        yandexTranslatorApiKey: "",
        googleTranslatorApiKey: '',
        azureTranslatorApiKey: '',
        playbackOptions: '{"volume": 1.0, "rate": 1.0, "voiceName": "Google US English", "pitch": 0.5 }',
        learntWords: '()',
        savedTranslations: '{}',
        userDefinedOnly: false,
        doNotTranslate: false,
        stats: { 'totalWordsTranslated': 0, 'translatorWiseWordCount': [{ 'J': {} }, { 'M': {} }] },
        toggleFrequency: '{}',
        activationFrequency: '{}',
        activationToggles: 3,
        wordToggles: 20,
        translatedWordsForQuiz: '{}',
        oneWordTranslation: false,
        useCommonWordsOnly: false,
        logMessages: JSON.stringify([]),
        extensionID: chrome.runtime.id,
        wordFrequencyCorpus: [],
        totalWordsperLanguage: []

      };

      _export("localData", localData);
    }
  };
});

$__System.register('1', ['50', '4f'], function (_export) {
  'use strict';

  var localData, ContextMenu, contextMenu, translatedWords, activeContextMenuIds;

  /**
   * Set up default data and store it in `browser.storage.localData`
   */
  function initializeLocalStorage() {
    browser.storage.local.set(localData);
  }

  function handler() {
    if (browser.runtime.lastError) {
      console.log("error creating item:" + browser.runtime.lastError);
    } else {
      console.log("item created successfully");
    }
  }

  /**
   * Setup local data storage and context menus
   */
  function setup() {
    initializeLocalStorage();
    browser.menus.create({
      'title': 'MindTheWord',
      'id': 'parent',
      'contexts': ['selection', 'page']
    }, handler());
    browser.menus.create({
      'title': 'Speak The Word',
      'parentId': 'parent',
      'contexts': ['selection'],
      'id': 'speakTheWord'
    }, handler());
    browser.menus.create({
      'title': 'Search For Similar Words',
      'parentId': 'parent',
      'contexts': ['selection'],
      'id': 'searchForSimilarWords'
    }, handler());
    browser.menus.create({
      'title': 'Google Search',
      'parentId': 'searchForSimilarWords',
      'contexts': ['selection'],
      'id': 'searchForSimilarWordsOnGoogle'
    }, handler());
    browser.menus.create({
      'title': 'Bing Search',
      'parentId': 'searchForSimilarWords',
      'contexts': ['selection'],
      'id': 'searchForSimilarWordsOnBing'
    }, handler());
    browser.menus.create({
      'title': 'Google Image Search',
      'parentId': 'searchForSimilarWords',
      'contexts': ['selection'],
      'id': 'searchForSimilarWordsOnGoogleImages'
    }, handler());
    browser.menus.create({
      'title': 'Thesaurus.com',
      'parentId': 'searchForSimilarWords',
      'contexts': ['selection'],
      'id': 'searchForSimilarWordsOnThesaurus'
    }, handler());
    browser.menus.create({
      'title': 'Translate Sentence',
      'parentId': 'parent',
      'contexts': ['selection'],
      'id': 'translateSentence'
    }, handler());
  }

  /**
   * Enable or disable all context menus
   * @param {boolean} value - true or false
   */
  function setContextMenus(value) {
    for (var id in activeContextMenuIds) {
      browser.menus.update(activeContextMenuIds[id], {
        enabled: value
      });
    }
  }

  /**
   * Update context menu according to page
   * @param {string} url - active tab URL
   */
  function updateContextMenu(url) {
    var status_ = browser.storage.local.get(['activation', 'blacklist']);
    status_.then(function (result, err) {
      var activation = result.activation;
      if (activation === false) {
        setContextMenus(false);
      } else {
        setContextMenus(true);
      }
    });
  }

  /**
   * Checks if URL is changed. Call `updateContextMenu` if
   * new URL is not blank or browser URL.
   * @param {Integer} tabId - tab identifier
   * @param {Object} changeInfo - change information
   * @param {Object} tab - tab information
   */
  function checkURLChange(tabId, changeInfo, tab) {
    if (changeInfo.url || changeInfo.status === 'complete') {
      if (/moz.*\:\/\//.test(changeInfo.url) === false) {
        updateContextMenu(changeInfo.url);
      } else {
        setContextMenus(false);
      }
    }
  }

  /**
   * Checks the current active tab has a valid URL and
   * calls `updateContextMenu` if true.
   * @param {Object} activeInfo - information about active tab
   */
  function checkActiveTabChange(activeInfo) {
    var tab = browser.tabs.get(activeInfo.tabId);
    if (/moz.*\:\/\//.test(tab.url) === false) {
      updateContextMenu(tab.url);
    } else {
      setContextMenus(false);
    }
  }

  /**
   * Click event handler for context menu. Calls appropriate
   * functions from ContextMenu class.
   * @param {Object} info -
   * @param {Object} tabs -
   */
  function contextMenuClickHandler(info, tab) {
    var tabQuery_ = browser.tabs.query({
      currentWindow: true,
      active: true
    });
    tabQuery_.then(function (tabs, err) {
      var tabURL = tabs[0].url;
      switch (info.menuItemId) {
        case 'searchForSimilarWordsOnThesaurus':
          contextMenu.searchForSimilarWords(info.selectionText, 'thesaurus');
          break;
        case 'searchForSimilarWordsOnGoogle':
          contextMenu.searchForSimilarWords(info.selectionText, 'google');
          break;
        case 'searchForSimilarWordsOnBing':
          contextMenu.searchForSimilarWords(info.selectionText, 'bing');
          break;
        case 'searchForSimilarWordsOnGoogleImages':
          contextMenu.searchForSimilarWords(info.selectionText, 'googleImages');
          break;
        case 'speakTheWord':
          browser.storage.local.set({ 'utterance': info.selectionText }, function () {
            contextMenu.speakTheWord();
          });
          break;
        case 'translateSentence':
          browser.tabs.query({ active: true, currentWindow: true }).then(function (tabs, err) {
            browser.tabs.sendMessage(tabs[0].id, {
              type: 'getTranslatedWords',
              action: 'storeSelection'
            }, function (response) {
              if (response) {
                contextMenu.translateSentence(info.selectionText, response.translatedWords).then(function (translationData) {
                  browser.tabs.sendMessage(tabs[0].id, {
                    type: 'showTranslatedSentence',
                    data: translationData
                  });
                })['catch'](function (e) {
                  console.error('Error in obtaining translations', e);
                });
              }
            });
          });
          break;
        default:
          console.error('Wrong context menu id');
      }
    });
  }

  //On first installation, load default Data and initialize context menu
  return {
    setters: [function (_) {
      localData = _.localData;
    }, function (_f) {
      ContextMenu = _f.ContextMenu;
    }],
    execute: function () {
      contextMenu = new ContextMenu();
      translatedWords = {};
      activeContextMenuIds = ['speakTheWord', 'blacklistWebsite', 'searchForSimilarWords', 'translateSentence', 'whitelistWebsite'];
      browser.runtime.onInstalled.addListener(setup);

      // context menu handlers
      browser.menus.onClicked.addListener(contextMenuClickHandler);

      // update context menu if URL is changed
      browser.tabs.onUpdated.addListener(checkURLChange);

      // update context menu if active tab is changed
      browser.tabs.onActivated.addListener(checkActiveTabChange);

      // message listeners
      browser.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        if (message === 'message_on') {
          var store_ = browser.storage.local.get(null);
          store_.then(function (obj, err) {
            browser.browserAction.setBadgeText({ text: String(obj.numberOfTranslatedWords) });
            browser.browserAction.setBadgeBackgroundColor({ color: [48, 63, 159, 1.0] });
          });
        }
        if (message === 'message_off') {
          browser.browserAction.setBadgeText({ text: String('') });
        }
        if (message === 'speakTheWord') {
          contextMenu.speakTheWord();
        }
      });

      browser.runtime.onInstalled.addListener(function (details) {
        if (details.reason == "install" || details.reason == "update") {
          browser.storage.local.set({
            'newInstallUpdate': true
          });
        }
      });
    }
  };
});

})
(function(factory) {
  factory();
});