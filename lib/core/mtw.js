!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic('2', ['3'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var defined = $__require('3');
  module.exports = function (it) {
    return Object(defined(it));
  };
});
$__System.registerDynamic('4', ['5', '6', '7'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('5'),
        core = $__require('6'),
        fails = $__require('7');
    module.exports = function (KEY, exec) {
        var fn = (core.Object || {})[KEY] || Object[KEY],
            exp = {};
        exp[KEY] = exec(fn);
        $export($export.S + $export.F * fails(function () {
            fn(1);
        }), 'Object', exp);
    };
});
$__System.registerDynamic('8', ['2', '4'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toObject = $__require('2');
  $__require('4')('keys', function ($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
});
$__System.registerDynamic('9', ['8', '6'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('8');
  module.exports = $__require('6').Object.keys;
});
$__System.registerDynamic("a", ["9"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("9"), __esModule: true };
});
$__System.register('b', ['d', 'e', 'f', 'c'], function (_export) {
  var _createClass, _classCallCheck, _Promise, http, YandexTranslate;

  return {
    setters: [function (_d) {
      _createClass = _d['default'];
    }, function (_e) {
      _classCallCheck = _e['default'];
    }, function (_f) {
      _Promise = _f['default'];
    }, function (_c) {
      http = _c.http;
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

$__System.register('10', ['d', 'e', 'f', 'c'], function (_export) {
  var _createClass, _classCallCheck, _Promise, http, AzureTranslate;

  return {
    setters: [function (_d) {
      _createClass = _d['default'];
    }, function (_e) {
      _classCallCheck = _e['default'];
    }, function (_f) {
      _Promise = _f['default'];
    }, function (_c) {
      http = _c.http;
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

$__System.registerDynamic('11', ['12'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('12');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
});
$__System.registerDynamic("13", ["11"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("11"), __esModule: true };
});
$__System.registerDynamic("d", ["13"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var _Object$defineProperty = $__require("13")["default"];
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
$__System.registerDynamic("e", [], true, function ($__require, exports, module) {
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
$__System.registerDynamic("14", [], true, function ($__require, exports, module) {
  /* */
  "format cjs";

  var global = this || self,
      GLOBAL = global;
});
$__System.registerDynamic('15', ['16', '3'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toInteger = $__require('16'),
      defined = $__require('3');
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
$__System.registerDynamic('17', ['15', '18'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var $at = $__require('15')(true);
  $__require('18')(String, 'String', function (iterated) {
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
$__System.registerDynamic("19", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function () {/* empty */};
});
$__System.registerDynamic("1a", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (done, value) {
    return { value: value, done: !!done };
  };
});
$__System.registerDynamic('1b', ['1c'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var cof = $__require('1c');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
});
$__System.registerDynamic("3", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };
});
$__System.registerDynamic('1d', ['1b', '3'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var IObject = $__require('1b'),
      defined = $__require('3');
  module.exports = function (it) {
    return IObject(defined(it));
  };
});
$__System.registerDynamic('1e', ['12', '1f', '20', '21', '22'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var $ = $__require('12'),
      descriptor = $__require('1f'),
      setToStringTag = $__require('20'),
      IteratorPrototype = {};
  $__require('21')(IteratorPrototype, $__require('22')('iterator'), function () {
    return this;
  });
  module.exports = function (Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, { next: descriptor(1, next) });
    setToStringTag(Constructor, NAME + ' Iterator');
  };
});
$__System.registerDynamic('18', ['23', '5', '24', '21', '25', '26', '1e', '20', '12', '22'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var LIBRARY = $__require('23'),
      $export = $__require('5'),
      redefine = $__require('24'),
      hide = $__require('21'),
      has = $__require('25'),
      Iterators = $__require('26'),
      $iterCreate = $__require('1e'),
      setToStringTag = $__require('20'),
      getProto = $__require('12').getProto,
      ITERATOR = $__require('22')('iterator'),
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
$__System.registerDynamic('27', ['19', '1a', '26', '1d', '18'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var addToUnscopables = $__require('19'),
      step = $__require('1a'),
      Iterators = $__require('26'),
      toIObject = $__require('1d');
  module.exports = $__require('18')(Array, 'Array', function (iterated, kind) {
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
$__System.registerDynamic('28', ['27', '26'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('27');
  var Iterators = $__require('26');
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
});
$__System.registerDynamic("23", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = true;
});
$__System.registerDynamic('5', ['29', '6', '2a'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var global = $__require('29'),
      core = $__require('6'),
      ctx = $__require('2a'),
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
$__System.registerDynamic("2b", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it, Constructor, name) {
    if (!(it instanceof Constructor)) throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
});
$__System.registerDynamic('2c', ['2d'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var anObject = $__require('2d');
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
$__System.registerDynamic('2e', ['26', '22'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var Iterators = $__require('26'),
        ITERATOR = $__require('22')('iterator'),
        ArrayProto = Array.prototype;
    module.exports = function (it) {
        return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
    };
});
$__System.registerDynamic("16", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // 7.1.4 ToInteger
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
});
$__System.registerDynamic('2f', ['16'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toInteger = $__require('16'),
      min = Math.min;
  module.exports = function (it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
});
$__System.registerDynamic('30', ['1c', '22'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var cof = $__require('1c'),
        TAG = $__require('22')('toStringTag'),
        ARG = cof(function () {
        return arguments;
    }()) == 'Arguments';
    module.exports = function (it) {
        var O, T, B;
        return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
    };
});
$__System.registerDynamic("26", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = {};
});
$__System.registerDynamic('31', ['30', '22', '26', '6'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var classof = $__require('30'),
        ITERATOR = $__require('22')('iterator'),
        Iterators = $__require('26');
    module.exports = $__require('6').getIteratorMethod = function (it) {
        if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
    };
});
$__System.registerDynamic('32', ['2a', '2c', '2e', '2d', '2f', '31'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var ctx = $__require('2a'),
      call = $__require('2c'),
      isArrayIter = $__require('2e'),
      anObject = $__require('2d'),
      toLength = $__require('2f'),
      getIterFn = $__require('31');
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
$__System.registerDynamic('33', ['12', '34', '2d', '2a'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var getDesc = $__require('12').getDesc,
      isObject = $__require('34'),
      anObject = $__require('2d');
  var check = function (O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function (test, buggy, set) {
      try {
        set = $__require('2a')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
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
$__System.registerDynamic("35", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // 7.2.9 SameValue(x, y)
  module.exports = Object.is || function is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
});
$__System.registerDynamic('2d', ['34'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('34');
  module.exports = function (it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };
});
$__System.registerDynamic('36', ['2d', '37', '22'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var anObject = $__require('2d'),
        aFunction = $__require('37'),
        SPECIES = $__require('22')('species');
    module.exports = function (O, D) {
        var C = anObject(O).constructor,
            S;
        return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
    };
});
$__System.registerDynamic('37', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };
});
$__System.registerDynamic('2a', ['37'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var aFunction = $__require('37');
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
$__System.registerDynamic("38", [], true, function ($__require, exports, module) {
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
$__System.registerDynamic('39', ['29'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('29').document && document.documentElement;
});
$__System.registerDynamic('34', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
});
$__System.registerDynamic('3a', ['34', '29'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var isObject = $__require('34'),
        document = $__require('29').document,
        is = isObject(document) && isObject(document.createElement);
    module.exports = function (it) {
        return is ? document.createElement(it) : {};
    };
});
$__System.registerDynamic('3b', ['2a', '38', '39', '3a', '29', '1c', '3c'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    var ctx = $__require('2a'),
        invoke = $__require('38'),
        html = $__require('39'),
        cel = $__require('3a'),
        global = $__require('29'),
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
      if ($__require('1c')(process) == 'process') {
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
  })($__require('3c'));
});
$__System.registerDynamic("1c", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toString = {}.toString;

  module.exports = function (it) {
    return toString.call(it).slice(8, -1);
  };
});
$__System.registerDynamic('3d', ['29', '3b', '1c', '3c'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    var global = $__require('29'),
        macrotask = $__require('3b').set,
        Observer = global.MutationObserver || global.WebKitMutationObserver,
        process = global.process,
        Promise = global.Promise,
        isNode = $__require('1c')(process) == 'process',
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
  })($__require('3c'));
});
$__System.registerDynamic("1f", [], true, function ($__require, exports, module) {
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
$__System.registerDynamic('21', ['12', '1f', '3e'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('12'),
      createDesc = $__require('1f');
  module.exports = $__require('3e') ? function (object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };
});
$__System.registerDynamic('24', ['21'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('21');
});
$__System.registerDynamic('3f', ['24'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var redefine = $__require('24');
  module.exports = function (target, src) {
    for (var key in src) redefine(target, key, src[key]);
    return target;
  };
});
$__System.registerDynamic("25", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function (it, key) {
    return hasOwnProperty.call(it, key);
  };
});
$__System.registerDynamic('20', ['12', '25', '22'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var def = $__require('12').setDesc,
      has = $__require('25'),
      TAG = $__require('22')('toStringTag');
  module.exports = function (it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
      configurable: true,
      value: tag
    });
  };
});
$__System.registerDynamic("12", [], true, function ($__require, exports, module) {
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
$__System.registerDynamic("7", [], true, function ($__require, exports, module) {
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
$__System.registerDynamic('3e', ['7'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = !$__require('7')(function () {
    return Object.defineProperty({}, 'a', { get: function () {
        return 7;
      } }).a != 7;
  });
});
$__System.registerDynamic('40', ['6', '12', '3e', '22'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var core = $__require('6'),
      $ = $__require('12'),
      DESCRIPTORS = $__require('3e'),
      SPECIES = $__require('22')('species');
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
$__System.registerDynamic('41', ['29'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var global = $__require('29'),
        SHARED = '__core-js_shared__',
        store = global[SHARED] || (global[SHARED] = {});
    module.exports = function (key) {
        return store[key] || (store[key] = {});
    };
});
$__System.registerDynamic('42', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var id = 0,
      px = Math.random();
  module.exports = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
});
$__System.registerDynamic('29', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});
$__System.registerDynamic('22', ['41', '42', '29'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var store = $__require('41')('wks'),
        uid = $__require('42'),
        Symbol = $__require('29').Symbol;
    module.exports = function (name) {
        return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
    };
});
$__System.registerDynamic('43', ['22'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var ITERATOR = $__require('22')('iterator'),
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
$__System.registerDynamic('44', [], true, function ($__require, exports, module) {
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
$__System.registerDynamic("45", ["44"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("44");
});
$__System.registerDynamic('46', ['45'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__System._nodeRequire ? process : $__require('45');
});
$__System.registerDynamic("3c", ["46"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("46");
});
$__System.registerDynamic('47', ['12', '23', '29', '2a', '30', '5', '34', '2d', '37', '2b', '32', '33', '35', '22', '36', '3d', '3e', '3f', '20', '40', '6', '43', '3c'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var $ = $__require('12'),
        LIBRARY = $__require('23'),
        global = $__require('29'),
        ctx = $__require('2a'),
        classof = $__require('30'),
        $export = $__require('5'),
        isObject = $__require('34'),
        anObject = $__require('2d'),
        aFunction = $__require('37'),
        strictNew = $__require('2b'),
        forOf = $__require('32'),
        setProto = $__require('33').set,
        same = $__require('35'),
        SPECIES = $__require('22')('species'),
        speciesConstructor = $__require('36'),
        asap = $__require('3d'),
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
        if (works && $__require('3e')) {
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
      $__require('3f')(P.prototype, {
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
    $__require('20')(P, PROMISE);
    $__require('40')(PROMISE);
    Wrapper = $__require('6')[PROMISE];
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
    $export($export.S + $export.F * !(USE_NATIVE && $__require('43')(function (iter) {
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
  })($__require('3c'));
});
$__System.registerDynamic('6', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var core = module.exports = { version: '1.2.6' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
$__System.registerDynamic('48', ['14', '17', '28', '47', '6'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('14');
  $__require('17');
  $__require('28');
  $__require('47');
  module.exports = $__require('6').Promise;
});
$__System.registerDynamic("f", ["48"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("48"), __esModule: true };
});
$__System.register('c', ['f'], function (_export) {
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
    setters: [function (_f) {
      _Promise = _f['default'];
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

$__System.register('49', ['d', 'e', 'f', 'c'], function (_export) {
  var _createClass, _classCallCheck, _Promise, http, GoogleTranslate;

  return {
    setters: [function (_d) {
      _createClass = _d['default'];
    }, function (_e) {
      _classCallCheck = _e['default'];
    }, function (_f) {
      _Promise = _f['default'];
    }, function (_c) {
      http = _c.http;
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

$__System.register('4a', [], function (_export) {
  'use strict';

  _export('getCurrentMonth', getCurrentMonth);

  _export('getCurrentDay', getCurrentDay);

  function getCurrentMonth() {
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var d = new Date();
    return month[d.getMonth()];
  }

  function getCurrentDay() {
    var month = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var d = new Date();
    return month[d.getDay() - 1];
  }

  return {
    setters: [],
    execute: function () {}
  };
});

$__System.register('4b', [], function (_export) {
  'use strict';

  var azureLanguages, yandexLanguages, googleLanguages;
  return {
    setters: [],
    execute: function () {
      azureLanguages = {
        'Afrikaans': 'af',
        'Arabic': 'ar',
        'Bulgarian': 'bg',
        'Bangla': 'bn',
        'Bosnian': 'bs',
        'Catalan': 'ca',
        'Czech': 'cs',
        'Welsh': 'cy',
        'Danish': 'da',
        'German': 'de',
        'Greek': 'el',
        'English': 'en',
        'Spanish': 'es',
        'Estonian': 'et',
        'Persian': 'fa',
        'Finnish': 'fi',
        'Filipino': 'fil',
        'Fijian': 'fj',
        'French': 'fr',
        'Hebrew': 'he',
        'Hindi': 'hi',
        'Croatian': 'hr',
        'Haitian Creole': 'ht',
        'Hungarian': 'hu',
        'Indonesian': 'id',
        'Icelandic': 'is',
        'Italian': 'it',
        'Japanese': 'ja',
        'Korean': 'ko',
        'Lithuanian': 'lt',
        'Latvian': 'lv',
        'Malagasy': 'mg',
        'Malay': 'ms',
        'Maltese': 'mt',
        'Hmong Daw': 'mww',
        'Norwegian': 'nb',
        'Dutch': 'nl',
        'Querétaro Otomi': 'otq',
        'Polish': 'pl',
        'Portuguese': 'pt',
        'Romanian': 'ro',
        'Russian': 'ru',
        'Slovak': 'sk',
        'Slovenian': 'sl',
        'Samoan': 'sm',
        'Serbian (Cyrillic)': 'sr-Cyrl',
        'Serbian (Latin)': 'sr-Latn',
        'Swedish': 'sv',
        'Kiswahili': 'sw',
        'Tamil': 'ta',
        'Telugu': 'te',
        'Thai': 'th',
        'Klingon': 'tlh',
        'Tongan': 'to',
        'Turkish': 'tr',
        'Tahitian': 'ty',
        'Ukrainian': 'uk',
        'Urdu': 'ur',
        'Vietnamese': 'vi',
        'Yucatec Maya': 'yua',
        'Cantonese (Traditional)': 'yue',
        'Chinese Simplified': 'zh-Hans',
        'Chinese Traditional': 'zh-Hant'
      };

      _export('azureLanguages', azureLanguages);

      yandexLanguages = {
        Albanian: 'sq',
        Arabic: 'ar',
        Armenian: 'hy',
        Azeri: 'az',
        Belarusian: 'be',
        Bosnian: 'bs',
        Bulgarian: 'bg',
        Catalan: 'ca',
        Croatian: 'hr',
        Czech: 'cs',
        Chinese: 'zh',
        Danish: 'da',
        Dutch: 'nl',
        English: 'en',
        Esperanto: 'eo',
        Estonian: 'et',
        Finnish: 'fi',
        French: 'fr',
        Georgian: 'ka',
        German: 'de',
        Greek: 'el',
        Hindi: 'hi',
        Hebrew: 'he',
        Hungarian: 'hu',
        Icelandic: 'is',
        Indonesian: 'id',
        Italian: 'it',
        Japanese: 'ja',
        Korean: 'ko',
        Latvian: 'lv',
        Lithuanian: 'lt',
        Macedonian: 'mk',
        Malay: 'ms',
        Maltese: 'mt',
        Norwegian: 'no',
        Polish: 'pl',
        Portuguese: 'pt',
        Romanian: 'ro',
        Russian: 'ru',
        Spanish: 'es',
        Serbian: 'sr',
        Slovak: 'sk',
        Slovenian: 'sl',
        Swedish: 'sv',
        Thai: 'th',
        Turkish: 'tr',
        Ukrainian: 'uk',
        Vietnamese: 'vi'
      };

      _export('yandexLanguages', yandexLanguages);

      googleLanguages = {
        'Afrikaans': 'af',
        'Albanian': 'sq',
        'Arabic': 'ar',
        'Armenian': 'hy',
        'Azerbaijani': 'az',
        'Basque': 'eu',
        'Belarusian': 'be',
        'Bengali': 'bn',
        'Bosnian': 'bs',
        'Bulgarian': 'bg',
        'Catalan': 'ca',
        'Cebuano': 'ceb',
        'Chichewa': 'ny',
        'Chinese Simplified': 'zh-CN',
        'Chinese Traditional': 'zh-TW',
        'Croatian': 'hr',
        'Czech': 'cs',
        'Danish': 'da',
        'Dutch': 'nl',
        'English': 'en',
        'Esperanto': 'eo',
        'Estonian': 'et',
        'Filipino': 'tl',
        'Finnish': 'fi',
        'French': 'fr',
        'Galician': 'gl',
        'Georgian': 'ka',
        'German': 'de',
        'Greek': 'el',
        'Gujarati': 'gu',
        'Haitian Creole': 'ht',
        'Hausa': 'ha',
        'Hebrew': 'iw',
        'Hindi': 'hi',
        'Hmong': 'hmn',
        'Hungarian': 'hu',
        'Icelandic': 'is',
        'Igbo': 'ig',
        'Indonesian': 'id',
        'Irish': 'ga',
        'Italian': 'it',
        'Japanese': 'ja',
        'Javanese': 'jw',
        'Kannada': 'kn',
        'Kazakh': 'kk',
        'Khmer': 'km',
        'Korean': 'ko',
        'Lao': 'lo',
        'Latin': 'la',
        'Latvian': 'lv',
        'Lithuanian': 'lt',
        'Macedonian': 'mk',
        'Malagasy': 'mg',
        'Malay': 'ms',
        'Malayalam': 'ml',
        'Maltese': 'mt',
        'Maori': 'mi',
        'Marathi': 'mr',
        'Mongolian': 'mn',
        'Myanmar (Burmese)': 'my',
        'Nepali': 'ne',
        'Norwegian': 'no',
        'Persian': 'fa',
        'Polish': 'pl',
        'Portuguese': 'pt',
        'Punjabi': 'ma',
        'Romanian': 'ro',
        'Russian': 'ru',
        'Serbian': 'sr',
        'Sesotho': 'st',
        'Sinhala': 'si',
        'Slovak': 'sk',
        'Slovenian': 'sl',
        'Somali': 'so',
        'Spanish': 'es',
        'Sudanese': 'su',
        'Swahili': 'sw',
        'Swedish': 'sv',
        'Tajik': 'tg',
        'Tamil': 'ta',
        'Telugu': 'te',
        'Thai': 'th',
        'Turkish': 'tr',
        'Ukrainian': 'uk',
        'Urdu': 'ur',
        'Uzbek': 'uz',
        'Vietnamese': 'vi',
        'Welsh': 'cy',
        'Yiddish': 'yi',
        'Yoruba': 'yo',
        'Zulu': 'zu'
      };

      _export('googleLanguages', googleLanguages);
    }
  };
});

$__System.registerDynamic('4c', ['@empty'], true, function ($__require, exports, module) {
  /* */
  "format cjs";

  var global = this || self,
      GLOBAL = global;
  (function (Buffer, process) {
    ;
    (function () {
      var undefined;
      var VERSION = '4.14.0';
      var LARGE_ARRAY_SIZE = 200;
      var FUNC_ERROR_TEXT = 'Expected a function';
      var HASH_UNDEFINED = '__lodash_hash_undefined__';
      var PLACEHOLDER = '__lodash_placeholder__';
      var BIND_FLAG = 1,
          BIND_KEY_FLAG = 2,
          CURRY_BOUND_FLAG = 4,
          CURRY_FLAG = 8,
          CURRY_RIGHT_FLAG = 16,
          PARTIAL_FLAG = 32,
          PARTIAL_RIGHT_FLAG = 64,
          ARY_FLAG = 128,
          REARG_FLAG = 256,
          FLIP_FLAG = 512;
      var UNORDERED_COMPARE_FLAG = 1,
          PARTIAL_COMPARE_FLAG = 2;
      var DEFAULT_TRUNC_LENGTH = 30,
          DEFAULT_TRUNC_OMISSION = '...';
      var HOT_COUNT = 150,
          HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1,
          LAZY_MAP_FLAG = 2,
          LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0,
          MAX_SAFE_INTEGER = 9007199254740991,
          MAX_INTEGER = 1.7976931348623157e+308,
          NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295,
          MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
          HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [['ary', ARY_FLAG], ['bind', BIND_FLAG], ['bindKey', BIND_KEY_FLAG], ['curry', CURRY_FLAG], ['curryRight', CURRY_RIGHT_FLAG], ['flip', FLIP_FLAG], ['partial', PARTIAL_FLAG], ['partialRight', PARTIAL_RIGHT_FLAG], ['rearg', REARG_FLAG]];
      var argsTag = '[object Arguments]',
          arrayTag = '[object Array]',
          boolTag = '[object Boolean]',
          dateTag = '[object Date]',
          errorTag = '[object Error]',
          funcTag = '[object Function]',
          genTag = '[object GeneratorFunction]',
          mapTag = '[object Map]',
          numberTag = '[object Number]',
          objectTag = '[object Object]',
          promiseTag = '[object Promise]',
          regexpTag = '[object RegExp]',
          setTag = '[object Set]',
          stringTag = '[object String]',
          symbolTag = '[object Symbol]',
          weakMapTag = '[object WeakMap]',
          weakSetTag = '[object WeakSet]';
      var arrayBufferTag = '[object ArrayBuffer]',
          dataViewTag = '[object DataView]',
          float32Tag = '[object Float32Array]',
          float64Tag = '[object Float64Array]',
          int8Tag = '[object Int8Array]',
          int16Tag = '[object Int16Array]',
          int32Tag = '[object Int32Array]',
          uint8Tag = '[object Uint8Array]',
          uint8ClampedTag = '[object Uint8ClampedArray]',
          uint16Tag = '[object Uint16Array]',
          uint32Tag = '[object Uint32Array]';
      var reEmptyStringLeading = /\b__p \+= '';/g,
          reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
          reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
          reUnescapedHtml = /[&<>"'`]/g,
          reHasEscapedHtml = RegExp(reEscapedHtml.source),
          reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g,
          reEvaluate = /<%([\s\S]+?)%>/g,
          reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          reIsPlainProp = /^\w*$/,
          rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(\.|\[\])(?:\4|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
          reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrim = /^\s+|\s+$/g,
          reTrimStart = /^\s+/,
          reTrimEnd = /\s+$/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
          reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
          reSplitDetails = /,? & /;
      var reBasicWord = /[a-zA-Z0-9]+/g;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reHasHexPrefix = /^0x/i;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = '\\ud800-\\udfff',
          rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
          rsComboSymbolsRange = '\\u20d0-\\u20f0',
          rsDingbatRange = '\\u2700-\\u27bf',
          rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
          rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
          rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
          rsPunctuationRange = '\\u2000-\\u206f',
          rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
          rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
          rsVarRange = '\\ufe0e\\ufe0f',
          rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]",
          rsAstral = '[' + rsAstralRange + ']',
          rsBreak = '[' + rsBreakRange + ']',
          rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
          rsDigits = '\\d+',
          rsDingbat = '[' + rsDingbatRange + ']',
          rsLower = '[' + rsLowerRange + ']',
          rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
          rsFitz = '\\ud83c[\\udffb-\\udfff]',
          rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
          rsNonAstral = '[^' + rsAstralRange + ']',
          rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
          rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
          rsUpper = '[' + rsUpperRange + ']',
          rsZWJ = '\\u200d';
      var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')',
          rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')',
          rsOptLowerContr = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
          rsOptUpperContr = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
          reOptMod = rsModifier + '?',
          rsOptVar = '[' + rsVarRange + ']?',
          rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
          rsSeq = rsOptVar + reOptMod + rsOptJoin,
          rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
          rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
      var reApos = RegExp(rsApos, 'g');
      var reComboMark = RegExp(rsCombo, 'g');
      var reComplexSymbol = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
      var reComplexWord = RegExp([rsUpper + '?' + rsLower + '+' + rsOptLowerContr + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')', rsUpperMisc + '+' + rsOptUpperContr + '(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')', rsUpper + '?' + rsLowerMisc + '+' + rsOptLowerContr, rsUpper + '+' + rsOptUpperContr, rsDigits, rsEmoji].join('|'), 'g');
      var reHasComplexSymbol = RegExp('[' + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');
      var reHasComplexWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = ['Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array', 'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object', 'Promise', 'Reflect', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap', '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        '\xc0': 'A',
        '\xc1': 'A',
        '\xc2': 'A',
        '\xc3': 'A',
        '\xc4': 'A',
        '\xc5': 'A',
        '\xe0': 'a',
        '\xe1': 'a',
        '\xe2': 'a',
        '\xe3': 'a',
        '\xe4': 'a',
        '\xe5': 'a',
        '\xc7': 'C',
        '\xe7': 'c',
        '\xd0': 'D',
        '\xf0': 'd',
        '\xc8': 'E',
        '\xc9': 'E',
        '\xca': 'E',
        '\xcb': 'E',
        '\xe8': 'e',
        '\xe9': 'e',
        '\xea': 'e',
        '\xeb': 'e',
        '\xcC': 'I',
        '\xcd': 'I',
        '\xce': 'I',
        '\xcf': 'I',
        '\xeC': 'i',
        '\xed': 'i',
        '\xee': 'i',
        '\xef': 'i',
        '\xd1': 'N',
        '\xf1': 'n',
        '\xd2': 'O',
        '\xd3': 'O',
        '\xd4': 'O',
        '\xd5': 'O',
        '\xd6': 'O',
        '\xd8': 'O',
        '\xf2': 'o',
        '\xf3': 'o',
        '\xf4': 'o',
        '\xf5': 'o',
        '\xf6': 'o',
        '\xf8': 'o',
        '\xd9': 'U',
        '\xda': 'U',
        '\xdb': 'U',
        '\xdc': 'U',
        '\xf9': 'u',
        '\xfa': 'u',
        '\xfb': 'u',
        '\xfc': 'u',
        '\xdd': 'Y',
        '\xfd': 'y',
        '\xff': 'y',
        '\xc6': 'Ae',
        '\xe6': 'ae',
        '\xde': 'Th',
        '\xfe': 'th',
        '\xdf': 'ss'
      };
      var htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '`': '&#96;'
      };
      var htmlUnescapes = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
        '&#96;': '`'
      };
      var stringEscapes = {
        '\\': '\\',
        "'": "'",
        '\n': 'n',
        '\r': 'r',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
      };
      var freeParseFloat = parseFloat,
          freeParseInt = parseInt;
      var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
      var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function('return this')();
      var freeExports = freeGlobal && typeof exports == 'object' && exports;
      var freeModule = freeExports && typeof module == 'object' && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function () {
        try {
          return freeProcess && freeProcess.binding('util');
        } catch (e) {}
      }();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
          nodeIsDate = nodeUtil && nodeUtil.isDate,
          nodeIsMap = nodeUtil && nodeUtil.isMap,
          nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
          nodeIsSet = nodeUtil && nodeUtil.isSet,
          nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function addMapEntry(map, pair) {
        map.set(pair[0], pair[1]);
        return map;
      }
      function addSetEntry(set, value) {
        set.add(value);
        return set;
      }
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1,
            length = array ? array.length : 0;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1,
            length = array ? array.length : 0;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array ? array.length : 0;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1,
            length = array ? array.length : 0;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1,
            length = array ? array.length : 0,
            resIndex = 0,
            result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array ? array.length : 0;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1,
            length = array ? array.length : 0;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1,
            length = array ? array.length : 0,
            result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1,
            length = values.length,
            offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1,
            length = array ? array.length : 0;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array ? array.length : 0;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1,
            length = array ? array.length : 0;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function (value, key, collection) {
          if (predicate(value, key, collection)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length,
            index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        if (value !== value) {
          return baseFindIndex(array, baseIsNaN, fromIndex);
        }
        var index = fromIndex - 1,
            length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1,
            length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array ? array.length : 0;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function (object) {
          return object == null ? undefined : object[key];
        };
      }
      function basePropertyOf(object) {
        return function (key) {
          return object == null ? undefined : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function (value, index, collection) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result,
            index = -1,
            length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined) {
            result = result === undefined ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1,
            result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function (key) {
          return [key, object[key]];
        });
      }
      function baseUnary(func) {
        return function (value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function (key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1,
            length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length,
            result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            result++;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return '\\' + stringEscapes[chr];
      }
      function getValue(object, key) {
        return object == null ? undefined : object[key];
      }
      function isHostObject(value) {
        var result = false;
        if (value != null && typeof value.toString != 'function') {
          try {
            result = !!(value + '');
          } catch (e) {}
        }
        return result;
      }
      function iteratorToArray(iterator) {
        var data,
            result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index = -1,
            result = Array(map.size);
        map.forEach(function (value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function (arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1,
            length = array.length,
            resIndex = 0,
            result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1,
            result = Array(set.size);
        set.forEach(function (value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1,
            result = Array(set.size);
        set.forEach(function (value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function stringSize(string) {
        if (!(string && reHasComplexSymbol.test(string))) {
          return string.length;
        }
        var result = reComplexSymbol.lastIndex = 0;
        while (reComplexSymbol.test(string)) {
          result++;
        }
        return result;
      }
      function stringToArray(string) {
        return string.match(reComplexSymbol);
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function runInContext(context) {
        context = context ? _.defaults({}, context, _.pick(root, contextProps)) : root;
        var Array = context.Array,
            Date = context.Date,
            Error = context.Error,
            Math = context.Math,
            RegExp = context.RegExp,
            TypeError = context.TypeError;
        var arrayProto = context.Array.prototype,
            objectProto = context.Object.prototype,
            stringProto = context.String.prototype;
        var coreJsData = context['__core-js_shared__'];
        var maskSrcKey = function () {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
          return uid ? 'Symbol(src)_1.' + uid : '';
        }();
        var funcToString = context.Function.prototype.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var objectCtorString = funcToString.call(Object);
        var objectToString = objectProto.toString;
        var oldDash = root._;
        var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
        var Buffer = moduleExports ? context.Buffer : undefined,
            Reflect = context.Reflect,
            Symbol = context.Symbol,
            Uint8Array = context.Uint8Array,
            enumerate = Reflect ? Reflect.enumerate : undefined,
            iteratorSymbol = Symbol ? Symbol.iterator : undefined,
            objectCreate = context.Object.create,
            propertyIsEnumerable = objectProto.propertyIsEnumerable,
            splice = arrayProto.splice,
            spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;
        var clearTimeout = function (id) {
          return context.clearTimeout.call(root, id);
        },
            setTimeout = function (func, wait) {
          return context.setTimeout.call(root, func, wait);
        };
        var nativeCeil = Math.ceil,
            nativeFloor = Math.floor,
            nativeGetPrototype = Object.getPrototypeOf,
            nativeGetSymbols = Object.getOwnPropertySymbols,
            nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
            nativeIsFinite = context.isFinite,
            nativeJoin = arrayProto.join,
            nativeKeys = Object.keys,
            nativeMax = Math.max,
            nativeMin = Math.min,
            nativeParseInt = context.parseInt,
            nativeRandom = Math.random,
            nativeReplace = stringProto.replace,
            nativeReverse = arrayProto.reverse,
            nativeSplit = stringProto.split;
        var DataView = getNative(context, 'DataView'),
            Map = getNative(context, 'Map'),
            Promise = getNative(context, 'Promise'),
            Set = getNative(context, 'Set'),
            WeakMap = getNative(context, 'WeakMap'),
            nativeCreate = getNative(context.Object, 'create');
        var defineProperty = function () {
          var func = getNative(context.Object, 'defineProperty'),
              name = getNative.name;
          return name && name.length > 2 ? func : undefined;
        }();
        var metaMap = WeakMap && new WeakMap();
        var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');
        var realNames = {};
        var dataViewCtorString = toSource(DataView),
            mapCtorString = toSource(Map),
            promiseCtorString = toSource(Promise),
            setCtorString = toSource(Set),
            weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol ? Symbol.prototype : undefined,
            symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
            symbolToString = symbolProto ? symbolProto.toString : undefined;
        function lodash(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, '__wrapped__')) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        function baseLodash() {}
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined;
        }
        lodash.templateSettings = {
          'escape': reEscape,
          'evaluate': reEvaluate,
          'interpolate': reInterpolate,
          'variable': '',
          'imports': { '_': lodash }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result = new LazyWrapper(this.__wrapped__);
          result.__actions__ = copyArray(this.__actions__);
          result.__dir__ = this.__dir__;
          result.__filtered__ = this.__filtered__;
          result.__iteratees__ = copyArray(this.__iteratees__);
          result.__takeCount__ = this.__takeCount__;
          result.__views__ = copyArray(this.__views__);
          return result;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result = new LazyWrapper(this);
            result.__dir__ = -1;
            result.__filtered__ = true;
          } else {
            result = this.clone();
            result.__dir__ *= -1;
          }
          return result;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(),
              dir = this.__dir__,
              isArr = isArray(array),
              isRight = dir < 0,
              arrLength = isArr ? array.length : 0,
              view = getView(0, arrLength, this.__views__),
              start = view.start,
              end = view.end,
              length = end - start,
              index = isRight ? end : start - 1,
              iteratees = this.__iteratees__,
              iterLength = iteratees.length,
              resIndex = 0,
              takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || arrLength < LARGE_ARRAY_SIZE || arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result = [];
          outer: while (length-- && resIndex < takeCount) {
            index += dir;
            var iterIndex = -1,
                value = array[index];
            while (++iterIndex < iterLength) {
              var data = iteratees[iterIndex],
                  iteratee = data.iteratee,
                  type = data.type,
                  computed = iteratee(value);
              if (type == LAZY_MAP_FLAG) {
                value = computed;
              } else if (!computed) {
                if (type == LAZY_FILTER_FLAG) {
                  continue outer;
                } else {
                  break outer;
                }
              }
            }
            result[resIndex++] = value;
          }
          return result;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1,
              length = entries ? entries.length : 0;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
        }
        function hashDelete(key) {
          return this.has(key) && delete this.__data__[key];
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result = data[key];
            return result === HASH_UNDEFINED ? undefined : result;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype['delete'] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1,
              length = entries ? entries.length : 0;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
        }
        function listCacheDelete(key) {
          var data = this.__data__,
              index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__,
              index = assocIndexOf(data, key);
          return index < 0 ? undefined : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__,
              index = assocIndexOf(data, key);
          if (index < 0) {
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype['delete'] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1,
              length = entries ? entries.length : 0;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.__data__ = {
            'hash': new Hash(),
            'map': new (Map || ListCache)(),
            'string': new Hash()
          };
        }
        function mapCacheDelete(key) {
          return getMapData(this, key)['delete'](key);
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          getMapData(this, key).set(key, value);
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype['delete'] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values) {
          var index = -1,
              length = values ? values.length : 0;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          this.__data__ = new ListCache(entries);
        }
        function stackClear() {
          this.__data__ = new ListCache();
        }
        function stackDelete(key) {
          return this.__data__['delete'](key);
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var cache = this.__data__;
          if (cache instanceof ListCache) {
            var pairs = cache.__data__;
            if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              return this;
            }
            cache = this.__data__ = new MapCache(pairs);
          }
          cache.set(key, value);
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype['delete'] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function assignInDefaults(objValue, srcValue, key, object) {
          if (objValue === undefined || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined && !eq(object[key], value) || typeof key == 'number' && value === undefined && !(key in object)) {
            object[key] = value;
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
            object[key] = value;
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee, accumulator) {
          baseEach(collection, function (value, key, collection) {
            setter(accumulator, value, iteratee(value), collection);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAt(object, paths) {
          var index = -1,
              isNil = object == null,
              length = paths.length,
              result = Array(length);
          while (++index < length) {
            result[index] = isNil ? undefined : get(object, paths[index]);
          }
          return result;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
          var result;
          if (customizer) {
            result = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result !== undefined) {
            return result;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result);
            }
          } else {
            var tag = getTag(value),
                isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              if (isHostObject(value)) {
                return object ? value : {};
              }
              result = initCloneObject(isFunc ? {} : value);
              if (!isDeep) {
                return copySymbols(value, baseAssign(result, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result = initCloneByTag(value, tag, baseClone, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result);
          if (!isArr) {
            var props = isFull ? getAllKeys(value) : keys(value);
          }
          arrayEach(props || value, function (subValue, key) {
            if (props) {
              key = subValue;
              subValue = value[key];
            }
            assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
          });
          if (!isFull) {
            stack['delete'](value);
          }
          return result;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function (object) {
            return baseConformsTo(object, source, props);
          };
        }
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          var index = length;
          while (index--) {
            var key = props[index],
                predicate = source[key],
                value = object[key];
            if (value === undefined && !(key in Object(object)) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseCreate(proto) {
          return isObject(proto) ? objectCreate(proto) : {};
        }
        function baseDelay(func, wait, args) {
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return setTimeout(function () {
            func.apply(undefined, args);
          }, wait);
        }
        function baseDifference(array, values, iteratee, comparator) {
          var index = -1,
              includes = arrayIncludes,
              isCommon = true,
              length = array.length,
              result = [],
              valuesLength = values.length;
          if (!length) {
            return result;
          }
          if (iteratee) {
            values = arrayMap(values, baseUnary(iteratee));
          }
          if (comparator) {
            includes = arrayIncludesWith;
            isCommon = false;
          } else if (values.length >= LARGE_ARRAY_SIZE) {
            includes = cacheHas;
            isCommon = false;
            values = new SetCache(values);
          }
          outer: while (++index < length) {
            var value = array[index],
                computed = iteratee ? iteratee(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed === computed) {
              var valuesIndex = valuesLength;
              while (valuesIndex--) {
                if (values[valuesIndex] === computed) {
                  continue outer;
                }
              }
              result.push(value);
            } else if (!includes(values, computed, comparator)) {
              result.push(value);
            }
          }
          return result;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result = true;
          baseEach(collection, function (value, index, collection) {
            result = !!predicate(value, index, collection);
            return result;
          });
          return result;
        }
        function baseExtremum(array, iteratee, comparator) {
          var index = -1,
              length = array.length;
          while (++index < length) {
            var value = array[index],
                current = iteratee(value);
            if (current != null && (computed === undefined ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current,
                  result = value;
            }
          }
          return result;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result = [];
          baseEach(collection, function (value, index, collection) {
            if (predicate(value, index, collection)) {
              result.push(value);
            }
          });
          return result;
        }
        function baseFlatten(array, depth, predicate, isStrict, result) {
          var index = -1,
              length = array.length;
          predicate || (predicate = isFlattenable);
          result || (result = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result);
              } else {
                arrayPush(result, value);
              }
            } else if (!isStrict) {
              result[result.length] = value;
            }
          }
          return result;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee) {
          return object && baseFor(object, iteratee, keys);
        }
        function baseForOwnRight(object, iteratee) {
          return object && baseForRight(object, iteratee, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function (key) {
            return isFunction(object[key]);
          });
        }
        function baseGet(object, path) {
          path = isKey(path, object) ? [path] : castPath(path);
          var index = 0,
              length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : undefined;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result = keysFunc(object);
          return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
        }
        function baseGetTag(value) {
          return objectToString.call(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && (hasOwnProperty.call(object, key) || typeof object == 'object' && key in object && getPrototype(object) === null);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee, comparator) {
          var includes = comparator ? arrayIncludesWith : arrayIncludes,
              length = arrays[0].length,
              othLength = arrays.length,
              othIndex = othLength,
              caches = Array(othLength),
              maxLength = Infinity,
              result = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee) {
              array = arrayMap(array, baseUnary(iteratee));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined;
          }
          array = arrays[0];
          var index = -1,
              seen = caches[0];
          outer: while (++index < length && result.length < maxLength) {
            var value = array[index],
                computed = iteratee ? iteratee(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (!(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
              othIndex = othLength;
              while (--othIndex) {
                var cache = caches[othIndex];
                if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator))) {
                  continue outer;
                }
              }
              if (seen) {
                seen.push(computed);
              }
              result.push(value);
            }
          }
          return result;
        }
        function baseInverter(object, setter, iteratee, accumulator) {
          baseForOwn(object, function (value, key, object) {
            setter(accumulator, iteratee(value), key, object);
          });
          return accumulator;
        }
        function baseInvoke(object, path, args) {
          if (!isKey(path, object)) {
            path = castPath(path);
            object = parent(object, path);
            path = last(path);
          }
          var func = object == null ? object : object[toKey(path)];
          return func == null ? undefined : apply(func, object, args);
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && objectToString.call(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && objectToString.call(value) == dateTag;
        }
        function baseIsEqual(value, other, customizer, bitmask, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
        }
        function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
          var objIsArr = isArray(object),
              othIsArr = isArray(other),
              objTag = arrayTag,
              othTag = arrayTag;
          if (!objIsArr) {
            objTag = getTag(object);
            objTag = objTag == argsTag ? objectTag : objTag;
          }
          if (!othIsArr) {
            othTag = getTag(other);
            othTag = othTag == argsTag ? objectTag : othTag;
          }
          var objIsObj = objTag == objectTag && !isHostObject(object),
              othIsObj = othTag == objectTag && !isHostObject(other),
              isSameTag = objTag == othTag;
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, equalFunc, customizer, bitmask, stack) : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
          }
          if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
                othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object,
                  othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length,
              length = index,
              noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0],
                objValue = object[key],
                srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObject(value) && objectToString.call(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
        }
        function baseIteratee(value) {
          if (typeof value == 'function') {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == 'object') {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        var baseKeys = overArg(nativeKeys, Object);
        function baseKeysIn(object) {
          object = object == null ? object : Object(object);
          var result = [];
          for (var key in object) {
            result.push(key);
          }
          return result;
        }
        if (enumerate && !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf')) {
          baseKeysIn = function (object) {
            return iteratorToArray(enumerate(object));
          };
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee) {
          var index = -1,
              result = isArrayLike(collection) ? Array(collection.length) : [];
          baseEach(collection, function (value, key, collection) {
            result[++index] = iteratee(value, key, collection);
          });
          return result;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function (object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function (object) {
            var objValue = get(object, path);
            return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          if (!(isArray(source) || isTypedArray(source))) {
            var props = keysIn(source);
          }
          arrayEach(props || source, function (srcValue, key) {
            if (props) {
              key = srcValue;
              srcValue = source[key];
            }
            if (isObject(srcValue)) {
              stack || (stack = new Stack());
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(object[key], srcValue, key + '', object, source, stack) : undefined;
              if (newValue === undefined) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          });
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = object[key],
              srcValue = source[key],
              stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
          var isCommon = newValue === undefined;
          if (isCommon) {
            newValue = srcValue;
            if (isArray(srcValue) || isTypedArray(srcValue)) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else {
                isCommon = false;
                newValue = baseClone(srcValue, true);
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || srcIndex && isFunction(objValue)) {
                isCommon = false;
                newValue = baseClone(srcValue, true);
              } else {
                newValue = objValue;
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack['delete'](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n) {
          var length = array.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array[n] : undefined;
        }
        function baseOrderBy(collection, iteratees, orders) {
          var index = -1;
          iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));
          var result = baseMap(collection, function (value, key, collection) {
            var criteria = arrayMap(iteratees, function (iteratee) {
              return iteratee(value);
            });
            return {
              'criteria': criteria,
              'index': ++index,
              'value': value
            };
          });
          return baseSortBy(result, function (object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, props) {
          object = Object(object);
          return basePickBy(object, props, function (value, key) {
            return key in object;
          });
        }
        function basePickBy(object, props, predicate) {
          var index = -1,
              length = props.length,
              result = {};
          while (++index < length) {
            var key = props[index],
                value = object[key];
            if (predicate(value, key)) {
              result[key] = value;
            }
          }
          return result;
        }
        function basePropertyDeep(path) {
          return function (object) {
            return baseGet(object, path);
          };
        }
        function basePullAll(array, values, iteratee, comparator) {
          var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
              index = -1,
              length = values.length,
              seen = array;
          if (array === values) {
            values = copyArray(values);
          }
          if (iteratee) {
            seen = arrayMap(array, baseUnary(iteratee));
          }
          while (++index < length) {
            var fromIndex = 0,
                value = values[index],
                computed = iteratee ? iteratee(value) : value;
            while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0,
              lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else if (!isKey(index, array)) {
                var path = castPath(index),
                    object = parent(array, path);
                if (object != null) {
                  delete object[toKey(last(path))];
                }
              } else {
                delete array[toKey(index)];
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1,
              length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
              result = Array(length);
          while (length--) {
            result[fromRight ? length : ++index] = start;
            start += step;
          }
          return result;
        }
        function baseRepeat(string, n) {
          var result = '';
          if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result;
          }
          do {
            if (n % 2) {
              result += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string += string;
            }
          } while (n);
          return result;
        }
        function baseRest(func, start) {
          start = nativeMax(start === undefined ? func.length - 1 : start, 0);
          return function () {
            var args = arguments,
                index = -1,
                length = nativeMax(args.length - start, 0),
                array = Array(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = array;
            return apply(func, this, otherArgs);
          };
        }
        function baseSet(object, path, value, customizer) {
          path = isKey(path, object) ? [path] : castPath(path);
          var index = -1,
              length = path.length,
              lastIndex = length - 1,
              nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]);
            if (isObject(nested)) {
              var newValue = value;
              if (index != lastIndex) {
                var objValue = nested[key];
                newValue = customizer ? customizer(objValue, key, nested) : undefined;
                if (newValue === undefined) {
                  newValue = objValue == null ? isIndex(path[index + 1]) ? [] : {} : objValue;
                }
              }
              assignValue(nested, key, newValue);
            }
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function (func, data) {
          metaMap.set(func, data);
          return func;
        };
        function baseSlice(array, start, end) {
          var index = -1,
              length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result = Array(length);
          while (++index < length) {
            result[index] = array[index + start];
          }
          return result;
        }
        function baseSome(collection, predicate) {
          var result;
          baseEach(collection, function (value, index, collection) {
            result = predicate(value, index, collection);
            return !result;
          });
          return !!result;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0,
              high = array ? array.length : low;
          if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1,
                  computed = array[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee, retHighest) {
          value = iteratee(value);
          var low = 0,
              high = array ? array.length : 0,
              valIsNaN = value !== value,
              valIsNull = value === null,
              valIsSymbol = isSymbol(value),
              valIsUndefined = value === undefined;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2),
                computed = iteratee(array[mid]),
                othIsDefined = computed !== undefined,
                othIsNull = computed === null,
                othIsReflexive = computed === computed,
                othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee) {
          var index = -1,
              length = array.length,
              resIndex = 0,
              result = [];
          while (++index < length) {
            var value = array[index],
                computed = iteratee ? iteratee(value) : value;
            if (!index || !eq(computed, seen)) {
              var seen = computed;
              result[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result;
        }
        function baseToNumber(value) {
          if (typeof value == 'number') {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == 'string') {
            return value;
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : '';
          }
          var result = value + '';
          return result == '0' && 1 / value == -INFINITY ? '-0' : result;
        }
        function baseUniq(array, iteratee, comparator) {
          var index = -1,
              includes = arrayIncludes,
              length = array.length,
              isCommon = true,
              result = [],
              seen = result;
          if (comparator) {
            isCommon = false;
            includes = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set = iteratee ? null : createSet(array);
            if (set) {
              return setToArray(set);
            }
            isCommon = false;
            includes = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee ? [] : result;
          }
          outer: while (++index < length) {
            var value = array[index],
                computed = iteratee ? iteratee(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed === computed) {
              var seenIndex = seen.length;
              while (seenIndex--) {
                if (seen[seenIndex] === computed) {
                  continue outer;
                }
              }
              if (iteratee) {
                seen.push(computed);
              }
              result.push(value);
            } else if (!includes(seen, computed, comparator)) {
              if (seen !== result) {
                seen.push(computed);
              }
              result.push(value);
            }
          }
          return result;
        }
        function baseUnset(object, path) {
          path = isKey(path, object) ? [path] : castPath(path);
          object = parent(object, path);
          var key = toKey(last(path));
          return !(object != null && baseHas(object, key)) || delete object[key];
        }
        function baseUpdate(object, path, updater, customizer) {
          return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length,
              index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result = value;
          if (result instanceof LazyWrapper) {
            result = result.value();
          }
          return arrayReduce(actions, function (result, action) {
            return action.func.apply(action.thisArg, arrayPush([result], action.args));
          }, result);
        }
        function baseXor(arrays, iteratee, comparator) {
          var index = -1,
              length = arrays.length;
          while (++index < length) {
            var result = result ? arrayPush(baseDifference(result, arrays[index], iteratee, comparator), baseDifference(arrays[index], result, iteratee, comparator)) : arrays[index];
          }
          return result && result.length ? baseUniq(result, iteratee, comparator) : [];
        }
        function baseZipObject(props, values, assignFunc) {
          var index = -1,
              length = props.length,
              valsLength = values.length,
              result = {};
          while (++index < length) {
            var value = index < valsLength ? values[index] : undefined;
            assignFunc(result, props[index], value);
          }
          return result;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == 'function' ? value : identity;
        }
        function castPath(value) {
          return isArray(value) ? value : stringToPath(value);
        }
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var result = new buffer.constructor(buffer.length);
          buffer.copy(result);
          return result;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array(result).set(new Uint8Array(arrayBuffer));
          return result;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneMap(map, isDeep, cloneFunc) {
          var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
          return arrayReduce(array, addMapEntry, new map.constructor());
        }
        function cloneRegExp(regexp) {
          var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result.lastIndex = regexp.lastIndex;
          return result;
        }
        function cloneSet(set, isDeep, cloneFunc) {
          var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
          return arrayReduce(array, addSetEntry, new set.constructor());
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined,
                valIsNull = value === null,
                valIsReflexive = value === value,
                valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined,
                othIsNull = other === null,
                othIsReflexive = other === other,
                othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index = -1,
              objCriteria = object.criteria,
              othCriteria = other.criteria,
              length = objCriteria.length,
              ordersLength = orders.length;
          while (++index < length) {
            var result = compareAscending(objCriteria[index], othCriteria[index]);
            if (result) {
              if (index >= ordersLength) {
                return result;
              }
              var order = orders[index];
              return result * (order == 'desc' ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1,
              argsLength = args.length,
              holdersLength = holders.length,
              leftIndex = -1,
              leftLength = partials.length,
              rangeLength = nativeMax(argsLength - holdersLength, 0),
              result = Array(leftLength + rangeLength),
              isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result[leftIndex++] = args[argsIndex++];
          }
          return result;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1,
              argsLength = args.length,
              holdersIndex = -1,
              holdersLength = holders.length,
              rightIndex = -1,
              rightLength = partials.length,
              rangeLength = nativeMax(argsLength - holdersLength, 0),
              result = Array(rangeLength + rightLength),
              isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result;
        }
        function copyArray(source, array) {
          var index = -1,
              length = source.length;
          array || (array = Array(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          object || (object = {});
          var index = -1,
              length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
            assignValue(object, key, newValue === undefined ? source[key] : newValue);
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function createAggregator(setter, initializer) {
          return function (collection, iteratee) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator,
                accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function (object, sources) {
            var index = -1,
                length = sources.length,
                customizer = length > 1 ? sources[length - 1] : undefined,
                guard = length > 2 ? sources[2] : undefined;
            customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined : customizer;
              length = 1;
            }
            object = Object(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function (collection, iteratee) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee);
            }
            var length = collection.length,
                index = fromRight ? length : -1,
                iterable = Object(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function (object, iteratee, keysFunc) {
            var index = -1,
                iterable = Object(object),
                props = keysFunc(object),
                length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & BIND_FLAG,
              Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function (string) {
            string = toString(string);
            var strSymbols = reHasComplexSymbol.test(string) ? stringToArray(string) : undefined;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join('') : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function (string) {
            return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
          };
        }
        function createCtor(Ctor) {
          return function () {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype),
                result = Ctor.apply(thisBinding, args);
            return isObject(result) ? result : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length,
                args = Array(length),
                index = length,
                placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function (collection, predicate, fromIndex) {
            var iterable = Object(collection);
            if (!isArrayLike(collection)) {
              var iteratee = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function (key) {
                return iteratee(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
          };
        }
        function createFlow(fromRight) {
          return baseRest(function (funcs) {
            funcs = baseFlatten(funcs, 1);
            var length = funcs.length,
                index = length,
                prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func),
                  data = funcName == 'wrapper' ? getData(func) : undefined;
              if (data && isLaziable(data[0]) && data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function () {
              var args = arguments,
                  value = args[0];
              if (wrapper && args.length == 1 && isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
                return wrapper.plant(value).value();
              }
              var index = 0,
                  result = length ? funcs[index].apply(this, args) : value;
              while (++index < length) {
                result = funcs[index].call(this, result);
              }
              return result;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
          var isAry = bitmask & ARY_FLAG,
              isBind = bitmask & BIND_FLAG,
              isBindKey = bitmask & BIND_KEY_FLAG,
              isCurried = bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG),
              isFlip = bitmask & FLIP_FLAG,
              Ctor = isBindKey ? undefined : createCtor(func);
          function wrapper() {
            var length = arguments.length,
                args = Array(length),
                index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper),
                  holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
            }
            var thisBinding = isBind ? thisArg : this,
                fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary < length) {
              args.length = ary;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function (object, iteratee) {
            return baseInverter(object, setter, toIteratee(iteratee), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function (value, other) {
            var result;
            if (value === undefined && other === undefined) {
              return defaultValue;
            }
            if (value !== undefined) {
              result = value;
            }
            if (other !== undefined) {
              if (result === undefined) {
                return other;
              }
              if (typeof value == 'string' || typeof other == 'string') {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result = operator(value, other);
            }
            return result;
          };
        }
        function createOver(arrayFunc) {
          return baseRest(function (iteratees) {
            iteratees = iteratees.length == 1 && isArray(iteratees[0]) ? arrayMap(iteratees[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(iteratees, 1), baseUnary(getIteratee()));
            return baseRest(function (args) {
              var thisArg = this;
              return arrayFunc(iteratees, function (iteratee) {
                return apply(iteratee, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined ? ' ' : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return reHasComplexSymbol.test(chars) ? castSlice(stringToArray(result), 0, length).join('') : result.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & BIND_FLAG,
              Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1,
                argsLength = arguments.length,
                leftIndex = -1,
                leftLength = partials.length,
                args = Array(leftLength + argsLength),
                fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function (start, end, step) {
            if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
              end = step = undefined;
            }
            start = toNumber(start);
            start = start === start ? start : 0;
            if (end === undefined) {
              end = start;
              start = 0;
            } else {
              end = toNumber(end) || 0;
            }
            step = step === undefined ? start < end ? 1 : -1 : toNumber(step) || 0;
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function (value, other) {
            if (!(typeof value == 'string' && typeof other == 'string')) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
          var isCurry = bitmask & CURRY_FLAG,
              newHolders = isCurry ? holders : undefined,
              newHoldersRight = isCurry ? undefined : holders,
              newPartials = isCurry ? partials : undefined,
              newPartialsRight = isCurry ? undefined : partials;
          bitmask |= isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);
          if (!(bitmask & CURRY_BOUND_FLAG)) {
            bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
          }
          var newData = [func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity];
          var result = wrapFunc.apply(undefined, newData);
          if (isLaziable(func)) {
            setData(result, newData);
          }
          result.placeholder = placeholder;
          return setWrapToString(result, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math[methodName];
          return function (number, precision) {
            number = toNumber(number);
            precision = nativeMin(toInteger(precision), 292);
            if (precision) {
              var pair = (toString(number) + 'e').split('e'),
                  value = func(pair[0] + 'e' + (+pair[1] + precision));
              pair = (toString(value) + 'e').split('e');
              return +(pair[0] + 'e' + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function (values) {
          return new Set(values);
        };
        function createToPairs(keysFunc) {
          return function (object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
          var isBindKey = bitmask & BIND_KEY_FLAG;
          if (!isBindKey && typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
            partials = holders = undefined;
          }
          ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
          arity = arity === undefined ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials,
                holdersRight = holders;
            partials = holders = undefined;
          }
          var data = isBindKey ? undefined : getData(func);
          var newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] == null ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG)) {
            bitmask &= ~(CURRY_FLAG | CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == BIND_FLAG) {
            var result = createBind(func, bitmask, thisArg);
          } else if (bitmask == CURRY_FLAG || bitmask == CURRY_RIGHT_FLAG) {
            result = createCurry(func, bitmask, arity);
          } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !holders.length) {
            result = createPartial(func, bitmask, thisArg, partials);
          } else {
            result = createHybrid.apply(undefined, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result, newData), func, bitmask);
        }
        function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
          var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
              arrLength = array.length,
              othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var stacked = stack.get(array);
          if (stacked && stack.get(other)) {
            return stacked == other;
          }
          var index = -1,
              result = true,
              seen = bitmask & UNORDERED_COMPARE_FLAG ? new SetCache() : undefined;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index],
                othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined) {
              if (compared) {
                continue;
              }
              result = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function (othValue, othIndex) {
                if (!seen.has(othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
                  return seen.add(othIndex);
                }
              })) {
                result = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              result = false;
              break;
            }
          }
          stack['delete'](array);
          return result;
        }
        function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + '';
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= UNORDERED_COMPARE_FLAG;
              stack.set(object, other);
              var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
              stack['delete'](object);
              return result;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
          var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
              objProps = keys(object),
              objLength = objProps.length,
              othProps = keys(other),
              othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : baseHas(other, key))) {
              return false;
            }
          }
          var stacked = stack.get(object);
          if (stacked && stack.get(other)) {
            return stacked == other;
          }
          var result = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key],
                othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack) : compared)) {
              result = false;
              break;
            }
            skipCtor || (skipCtor = key == 'constructor');
          }
          if (result && !skipCtor) {
            var objCtor = object.constructor,
                othCtor = other.constructor;
            if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
              result = false;
            }
          }
          stack['delete'](object);
          return result;
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function (func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result = func.name + '',
              array = realNames[result],
              length = hasOwnProperty.call(realNames, result) ? array.length : 0;
          while (length--) {
            var data = array[length],
                otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result = lodash.iteratee || iteratee;
          result = result === iteratee ? baseIteratee : result;
          return arguments.length ? result(arguments[0], arguments[1]) : result;
        }
        var getLength = baseProperty('length');
        function getMapData(map, key) {
          var data = map.__data__;
          return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
        }
        function getMatchData(object) {
          var result = keys(object),
              length = result.length;
          while (length--) {
            var key = result[length],
                value = object[key];
            result[length] = [key, value, isStrictComparable(value)];
          }
          return result;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined;
        }
        var getPrototype = overArg(nativeGetPrototype, Object);
        var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
        var getSymbolsIn = !nativeGetSymbols ? getSymbols : function (object) {
          var result = [];
          while (object) {
            arrayPush(result, getSymbols(object));
            object = getPrototype(object);
          }
          return result;
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function (value) {
            var result = objectToString.call(value),
                Ctor = result == objectTag ? value.constructor : undefined,
                ctorString = Ctor ? toSource(Ctor) : undefined;
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result;
          };
        }
        function getView(start, end, transforms) {
          var index = -1,
              length = transforms.length;
          while (++index < length) {
            var data = transforms[index],
                size = data.size;
            switch (data.type) {
              case 'drop':
                start += size;
                break;
              case 'dropRight':
                end -= size;
                break;
              case 'take':
                end = nativeMin(end, start + size);
                break;
              case 'takeRight':
                start = nativeMax(start, end - size);
                break;
            }
          }
          return {
            'start': start,
            'end': end
          };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path, hasFunc) {
          path = isKey(path, object) ? [path] : castPath(path);
          var result,
              index = -1,
              length = path.length;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result) {
            return result;
          }
          var length = object ? object.length : 0;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isString(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length,
              result = array.constructor(length);
          if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
            result.index = array.index;
            result.input = array.input;
          }
          return result;
        }
        function initCloneObject(object) {
          return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, cloneFunc, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return cloneMap(object, isDeep, cloneFunc);
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return cloneSet(object, isDeep, cloneFunc);
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function indexKeys(object) {
          var length = object ? object.length : undefined;
          if (isLength(length) && (isArray(object) || isString(object) || isArguments(object))) {
            return baseTimes(length, String);
          }
          return null;
        }
        function insertWrapDetails(source, details) {
          var length = details.length,
              lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
          details = details.join(length > 2 ? ', ' : ' ');
          return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
        }
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func),
              other = lodash[funcName];
          if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor,
              proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function (object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
          };
        }
        function mergeData(data, source) {
          var bitmask = data[1],
              srcBitmask = source[1],
              newBitmask = bitmask | srcBitmask,
              isCommon = newBitmask < (BIND_FLAG | BIND_KEY_FLAG | ARY_FLAG);
          var isCombo = srcBitmask == ARY_FLAG && bitmask == CURRY_FLAG || srcBitmask == ARY_FLAG && bitmask == REARG_FLAG && data[7].length <= source[8] || srcBitmask == (ARY_FLAG | REARG_FLAG) && source[7].length <= source[8] && bitmask == CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & BIND_FLAG ? 0 : CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function mergeDefaults(objValue, srcValue, key, object, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined, mergeDefaults, stack);
            stack['delete'](srcValue);
          }
          return objValue;
        }
        function parent(object, path) {
          return path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length,
              length = nativeMin(indexes.length, arrLength),
              oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
          }
          return array;
        }
        var setData = function () {
          var count = 0,
              lastCalled = 0;
          return function (key, value) {
            var stamp = now(),
                remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return key;
              }
            } else {
              count = 0;
            }
            return baseSetData(key, value);
          };
        }();
        var setWrapToString = !defineProperty ? identity : function (wrapper, reference, bitmask) {
          var source = reference + '';
          return defineProperty(wrapper, 'toString', {
            'configurable': true,
            'enumerable': false,
            'value': constant(insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)))
          });
        };
        var stringToPath = memoize(function (string) {
          var result = [];
          toString(string).replace(rePropName, function (match, number, quote, string) {
            result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
          });
          return result;
        });
        function toKey(value) {
          if (typeof value == 'string' || isSymbol(value)) {
            return value;
          }
          var result = value + '';
          return result == '0' && 1 / value == -INFINITY ? '-0' : result;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {}
            try {
              return func + '';
            } catch (e) {}
          }
          return '';
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function (pair) {
            var value = '_.' + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result.__actions__ = copyArray(wrapper.__actions__);
          result.__index__ = wrapper.__index__;
          result.__values__ = wrapper.__values__;
          return result;
        }
        function chunk(array, size, guard) {
          if (guard ? isIterateeCall(array, size, guard) : size === undefined) {
            size = 1;
          } else {
            size = nativeMax(toInteger(size), 0);
          }
          var length = array ? array.length : 0;
          if (!length || size < 1) {
            return [];
          }
          var index = 0,
              resIndex = 0,
              result = Array(nativeCeil(length / size));
          while (index < length) {
            result[resIndex++] = baseSlice(array, index, index += size);
          }
          return result;
        }
        function compact(array) {
          var index = -1,
              length = array ? array.length : 0,
              resIndex = 0,
              result = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result[resIndex++] = value;
            }
          }
          return result;
        }
        function concat() {
          var length = arguments.length,
              args = Array(length ? length - 1 : 0),
              array = arguments[0],
              index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return length ? arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1)) : [];
        }
        var difference = baseRest(function (array, values) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function (array, values) {
          var iteratee = last(values);
          if (isArrayLikeObject(iteratee)) {
            iteratee = undefined;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2)) : [];
        });
        var differenceWith = baseRest(function (array, values) {
          var comparator = last(values);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          n = guard || n === undefined ? 1 : toInteger(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          n = guard || n === undefined ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array ? array.length : 0;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array ? array.length : 0;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array ? array.length : 0;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array ? array.length : 0;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          depth = depth === undefined ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1,
              length = pairs ? pairs.length : 0,
              result = {};
          while (++index < length) {
            var pair = pairs[index];
            result[pair[0]] = pair[1];
          }
          return result;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined;
        }
        function indexOf(array, value, fromIndex) {
          var length = array ? array.length : 0;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          return dropRight(array, 1);
        }
        var intersection = baseRest(function (arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function (arrays) {
          var iteratee = last(arrays),
              mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee === last(mapped)) {
            iteratee = undefined;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee, 2)) : [];
        });
        var intersectionWith = baseRest(function (arrays) {
          var comparator = last(arrays),
              mapped = arrayMap(arrays, castArrayLikeObject);
          if (comparator === last(mapped)) {
            comparator = undefined;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined, comparator) : [];
        });
        function join(array, separator) {
          return array ? nativeJoin.call(array, separator) : '';
        }
        function last(array) {
          var length = array ? array.length : 0;
          return length ? array[length - 1] : undefined;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array ? array.length : 0;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined) {
            index = toInteger(fromIndex);
            index = (index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1)) + 1;
          }
          if (value !== value) {
            return baseFindIndex(array, baseIsNaN, index - 1, true);
          }
          while (index--) {
            if (array[index] === value) {
              return index;
            }
          }
          return -1;
        }
        function nth(array, n) {
          return array && array.length ? baseNth(array, toInteger(n)) : undefined;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values) {
          return array && array.length && values && values.length ? basePullAll(array, values) : array;
        }
        function pullAllBy(array, values, iteratee) {
          return array && array.length && values && values.length ? basePullAll(array, values, getIteratee(iteratee, 2)) : array;
        }
        function pullAllWith(array, values, comparator) {
          return array && array.length && values && values.length ? basePullAll(array, values, undefined, comparator) : array;
        }
        var pullAt = baseRest(function (array, indexes) {
          indexes = baseFlatten(indexes, 1);
          var length = array ? array.length : 0,
              result = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function (index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result;
        });
        function remove(array, predicate) {
          var result = [];
          if (!(array && array.length)) {
            return result;
          }
          var index = -1,
              indexes = [],
              length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result;
        }
        function reverse(array) {
          return array ? nativeReverse.call(array) : array;
        }
        function slice(array, start, end) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array ? array.length : 0;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array ? array.length : 0;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee, 2)) : [];
        }
        function tail(array) {
          return drop(array, 1);
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = guard || n === undefined ? 1 : toInteger(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          n = guard || n === undefined ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function (arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function (arrays) {
          var iteratee = last(arrays);
          if (isArrayLikeObject(iteratee)) {
            iteratee = undefined;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
        });
        var unionWith = baseRest(function (arrays) {
          var comparator = last(arrays);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee, 2)) : [];
        }
        function uniqWith(array, comparator) {
          return array && array.length ? baseUniq(array, undefined, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function (group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function (index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee) {
          if (!(array && array.length)) {
            return [];
          }
          var result = unzip(array);
          if (iteratee == null) {
            return result;
          }
          return arrayMap(result, function (group) {
            return apply(iteratee, undefined, group);
          });
        }
        var without = baseRest(function (array, values) {
          return isArrayLikeObject(array) ? baseDifference(array, values) : [];
        });
        var xor = baseRest(function (arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function (arrays) {
          var iteratee = last(arrays);
          if (isArrayLikeObject(iteratee)) {
            iteratee = undefined;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
        });
        var xorWith = baseRest(function (arrays) {
          var comparator = last(arrays);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values) {
          return baseZipObject(props || [], values || [], assignValue);
        }
        function zipObjectDeep(props, values) {
          return baseZipObject(props || [], values || [], baseSet);
        }
        var zipWith = baseRest(function (arrays) {
          var length = arrays.length,
              iteratee = length > 1 ? arrays[length - 1] : undefined;
          iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
          return unzipWith(arrays, iteratee);
        });
        function chain(value) {
          var result = lodash(value);
          result.__chain__ = true;
          return result;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = baseRest(function (paths) {
          paths = baseFlatten(paths, 1);
          var length = paths.length,
              start = length ? paths[0] : 0,
              value = this.__wrapped__,
              interceptor = function (object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            'func': thru,
            'args': [interceptor],
            'thisArg': undefined
          });
          return new LodashWrapper(value, this.__chain__).thru(function (array) {
            if (length && !array.length) {
              array.push(undefined);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length,
              value = done ? undefined : this.__values__[this.__index__++];
          return {
            'done': done,
            'value': value
          };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result,
              parent = this;
          while (parent instanceof baseLodash) {
            var clone = wrapperClone(parent);
            clone.__index__ = 0;
            clone.__values__ = undefined;
            if (result) {
              previous.__wrapped__ = clone;
            } else {
              result = clone;
            }
            var previous = clone;
            parent = parent.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              'func': thru,
              'args': [reverse],
              'thisArg': undefined
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function (result, value, key) {
          hasOwnProperty.call(result, key) ? ++result[key] : result[key] = 1;
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee) {
          return baseFlatten(map(collection, iteratee), 1);
        }
        function flatMapDeep(collection, iteratee) {
          return baseFlatten(map(collection, iteratee), INFINITY);
        }
        function flatMapDepth(collection, iteratee, depth) {
          depth = depth === undefined ? 1 : toInteger(depth);
          return baseFlatten(map(collection, iteratee), depth);
        }
        function forEach(collection, iteratee) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee, 3));
        }
        function forEachRight(collection, iteratee) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee, 3));
        }
        var groupBy = createAggregator(function (result, value, key) {
          if (hasOwnProperty.call(result, key)) {
            result[key].push(value);
          } else {
            result[key] = [value];
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function (collection, path, args) {
          var index = -1,
              isFunc = typeof path == 'function',
              isProp = isKey(path),
              result = isArrayLike(collection) ? Array(collection.length) : [];
          baseEach(collection, function (value) {
            var func = isFunc ? path : isProp && value != null ? value[path] : undefined;
            result[++index] = func ? apply(func, value, args) : baseInvoke(value, path, args);
          });
          return result;
        });
        var keyBy = createAggregator(function (result, value, key) {
          result[key] = value;
        });
        function map(collection, iteratee) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function (result, value, key) {
          result[key ? 0 : 1].push(value);
        }, function () {
          return [[], []];
        });
        function reduce(collection, iteratee, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce,
              initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce,
              initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var array = isArrayLike(collection) ? collection : values(collection),
              length = array.length;
          return length > 0 ? array[baseRandom(0, length - 1)] : undefined;
        }
        function sampleSize(collection, n, guard) {
          var index = -1,
              result = toArray(collection),
              length = result.length,
              lastIndex = length - 1;
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined) {
            n = 1;
          } else {
            n = baseClamp(toInteger(n), 0, length);
          }
          while (++index < n) {
            var rand = baseRandom(index, lastIndex),
                value = result[rand];
            result[rand] = result[index];
            result[index] = value;
          }
          result.length = n;
          return result;
        }
        function shuffle(collection) {
          return sampleSize(collection, MAX_ARRAY_LENGTH);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            var result = collection.length;
            return result && isString(collection) ? stringSize(collection) : result;
          }
          if (isObjectLike(collection)) {
            var tag = getTag(collection);
            if (tag == mapTag || tag == setTag) {
              return collection.size;
            }
          }
          return keys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function (collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        function now() {
          return Date.now();
        }
        function after(n, func) {
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function () {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
        }
        function before(n, func) {
          var result;
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function () {
            if (--n > 0) {
              result = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined;
            }
            return result;
          };
        }
        var bind = baseRest(function (func, thisArg, partials) {
          var bitmask = BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function (object, key, partials) {
          var bitmask = BIND_FLAG | BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined : arity;
          var result = createWrap(func, CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
          result.placeholder = curry.placeholder;
          return result;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined : arity;
          var result = createWrap(func, CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
          result.placeholder = curryRight.placeholder;
          return result;
        }
        function debounce(func, wait, options) {
          var lastArgs,
              lastThis,
              maxWait,
              result,
              timerId,
              lastCallTime,
              lastInvokeTime = 0,
              leading = false,
              maxing = false,
              trailing = true;
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = 'maxWait' in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = 'trailing' in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs,
                thisArg = lastThis;
            lastArgs = lastThis = undefined;
            lastInvokeTime = time;
            result = func.apply(thisArg, args);
            return result;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout(timerExpired, wait);
            return leading ? invokeFunc(time) : result;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime,
                timeSinceLastInvoke = time - lastInvokeTime,
                result = wait - timeSinceLastCall;
            return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime,
                timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined;
            return result;
          }
          function cancel() {
            if (timerId !== undefined) {
              clearTimeout(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined;
          }
          function flush() {
            return timerId === undefined ? result : trailingEdge(now());
          }
          function debounced() {
            var time = now(),
                isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined) {
              timerId = setTimeout(timerExpired, wait);
            }
            return result;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function (func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function (func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != 'function' || resolver && typeof resolver != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var memoized = function () {
            var args = arguments,
                key = resolver ? resolver.apply(this, args) : args[0],
                cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result = func.apply(this, args);
            memoized.cache = cache.set(key, result);
            return result;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return function () {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = baseRest(function (func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function (args) {
            var index = -1,
                length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function (func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, PARTIAL_FLAG, undefined, partials, holders);
        });
        var partialRight = baseRest(function (func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, PARTIAL_RIGHT_FLAG, undefined, partials, holders);
        });
        var rearg = baseRest(function (func, indexes) {
          return createWrap(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes, 1));
        });
        function rest(func, start) {
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = start === undefined ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = start === undefined ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function (args) {
            var array = args[start],
                otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true,
              trailing = true;
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = 'leading' in options ? !!options.leading : leading;
            trailing = 'trailing' in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            'leading': leading,
            'maxWait': wait,
            'trailing': trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          wrapper = wrapper == null ? identity : wrapper;
          return partial(wrapper, value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, false, true);
        }
        function cloneWith(value, customizer) {
          return baseClone(value, false, true, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, true, true);
        }
        function cloneDeepWith(value, customizer) {
          return baseClone(value, true, true, customizer);
        }
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function (value, other) {
          return value >= other;
        });
        function isArguments(value) {
          return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
        }
        var isArray = Array.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(getLength(value)) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && objectToString.call(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (isArrayLike(value) && (isArray(value) || isString(value) || isFunction(value.splice) || isArguments(value) || isBuffer(value))) {
            return !value.length;
          }
          if (isObjectLike(value)) {
            var tag = getTag(value);
            if (tag == mapTag || tag == setTag) {
              return !value.size;
            }
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return !(nonEnumShadows && keys(value).length);
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == 'function' ? customizer : undefined;
          var result = customizer ? customizer(value, other) : undefined;
          return result === undefined ? baseIsEqual(value, other, customizer) : !!result;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          return objectToString.call(value) == errorTag || typeof value.message == 'string' && typeof value.name == 'string';
        }
        function isFinite(value) {
          return typeof value == 'number' && nativeIsFinite(value);
        }
        function isFunction(value) {
          var tag = isObject(value) ? objectToString.call(value) : '';
          return tag == funcTag || tag == genTag;
        }
        function isInteger(value) {
          return typeof value == 'number' && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
          var type = typeof value;
          return !!value && (type == 'object' || type == 'function');
        }
        function isObjectLike(value) {
          return !!value && typeof value == 'object';
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == 'function' ? customizer : undefined;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error('This method is not supported with core-js. Try https://github.com/es-shims.');
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == 'number' || isObjectLike(value) && objectToString.call(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
          return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == 'string' || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && objectToString.call(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function (value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (iteratorSymbol && value[iteratorSymbol]) {
            return iteratorToArray(value[iteratorSymbol]());
          }
          var tag = getTag(value),
              func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result = toFinite(value),
              remainder = result % 1;
          return result === result ? remainder ? result - remainder : result : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == 'number') {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = isFunction(value.valueOf) ? value.valueOf() : value;
            value = isObject(other) ? other + '' : other;
          }
          if (typeof value != 'string') {
            return value === 0 ? value : +value;
          }
          value = value.replace(reTrim, '');
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
        }
        function toString(value) {
          return value == null ? '' : baseToString(value);
        }
        var assign = createAssigner(function (object, source) {
          if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function (object, source) {
          if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keysIn(source), object);
            return;
          }
          for (var key in source) {
            assignValue(object, key, source[key]);
          }
        });
        var assignInWith = createAssigner(function (object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function (object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = baseRest(function (object, paths) {
          return baseAt(object, baseFlatten(paths, 1));
        });
        function create(prototype, properties) {
          var result = baseCreate(prototype);
          return properties ? baseAssign(result, properties) : result;
        }
        var defaults = baseRest(function (args) {
          args.push(undefined, assignInDefaults);
          return apply(assignInWith, undefined, args);
        });
        var defaultsDeep = baseRest(function (args) {
          args.push(undefined, mergeDefaults);
          return apply(mergeWith, undefined, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee) {
          return object == null ? object : baseFor(object, getIteratee(iteratee, 3), keysIn);
        }
        function forInRight(object, iteratee) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee, 3), keysIn);
        }
        function forOwn(object, iteratee) {
          return object && baseForOwn(object, getIteratee(iteratee, 3));
        }
        function forOwnRight(object, iteratee) {
          return object && baseForOwnRight(object, getIteratee(iteratee, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
          var result = object == null ? undefined : baseGet(object, path);
          return result === undefined ? defaultValue : result;
        }
        function has(object, path) {
          return object != null && hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        var invert = createInverter(function (result, value, key) {
          result[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function (result, value, key) {
          if (hasOwnProperty.call(result, value)) {
            result[value].push(key);
          } else {
            result[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          var isProto = isPrototype(object);
          if (!(isProto || isArrayLike(object))) {
            return baseKeys(object);
          }
          var indexes = indexKeys(object),
              skipIndexes = !!indexes,
              result = indexes || [],
              length = result.length;
          for (var key in object) {
            if (baseHas(object, key) && !(skipIndexes && (key == 'length' || isIndex(key, length))) && !(isProto && key == 'constructor')) {
              result.push(key);
            }
          }
          return result;
        }
        function keysIn(object) {
          var index = -1,
              isProto = isPrototype(object),
              props = baseKeysIn(object),
              propsLength = props.length,
              indexes = indexKeys(object),
              skipIndexes = !!indexes,
              result = indexes || [],
              length = result.length;
          while (++index < propsLength) {
            var key = props[index];
            if (!(skipIndexes && (key == 'length' || isIndex(key, length))) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
              result.push(key);
            }
          }
          return result;
        }
        function mapKeys(object, iteratee) {
          var result = {};
          iteratee = getIteratee(iteratee, 3);
          baseForOwn(object, function (value, key, object) {
            result[iteratee(value, key, object)] = value;
          });
          return result;
        }
        function mapValues(object, iteratee) {
          var result = {};
          iteratee = getIteratee(iteratee, 3);
          baseForOwn(object, function (value, key, object) {
            result[key] = iteratee(value, key, object);
          });
          return result;
        }
        var merge = createAssigner(function (object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function (object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = baseRest(function (object, props) {
          if (object == null) {
            return {};
          }
          props = arrayMap(baseFlatten(props, 1), toKey);
          return basePick(object, baseDifference(getAllKeysIn(object), props));
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick = baseRest(function (object, props) {
          return object == null ? {} : basePick(object, arrayMap(baseFlatten(props, 1), toKey));
        });
        function pickBy(object, predicate) {
          return object == null ? {} : basePickBy(object, getAllKeysIn(object), getIteratee(predicate));
        }
        function result(object, path, defaultValue) {
          path = isKey(path, object) ? [path] : castPath(path);
          var index = -1,
              length = path.length;
          if (!length) {
            object = undefined;
            length = 1;
          }
          while (++index < length) {
            var value = object == null ? undefined : object[toKey(path[index])];
            if (value === undefined) {
              index = length;
              value = defaultValue;
            }
            object = isFunction(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == 'function' ? customizer : undefined;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee, accumulator) {
          var isArr = isArray(object) || isTypedArray(object);
          iteratee = getIteratee(iteratee, 4);
          if (accumulator == null) {
            if (isArr || isObject(object)) {
              var Ctor = object.constructor;
              if (isArr) {
                accumulator = isArray(object) ? new Ctor() : [];
              } else {
                accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
              }
            } else {
              accumulator = {};
            }
          }
          (isArr ? arrayEach : baseForOwn)(object, function (value, index, object) {
            return iteratee(accumulator, value, index, object);
          });
          return accumulator;
        }
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        function update(object, path, updater) {
          return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        function updateWith(object, path, updater, customizer) {
          customizer = typeof customizer == 'function' ? customizer : undefined;
          return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        function values(object) {
          return object ? baseValues(object, keys(object)) : [];
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined) {
            upper = lower;
            lower = undefined;
          }
          if (upper !== undefined) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toNumber(start) || 0;
          if (end === undefined) {
            end = start;
            start = 0;
          } else {
            end = toNumber(end) || 0;
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined;
          }
          if (floating === undefined) {
            if (typeof upper == 'boolean') {
              floating = upper;
              upper = undefined;
            } else if (typeof lower == 'boolean') {
              floating = lower;
              lower = undefined;
            }
          }
          if (lower === undefined && upper === undefined) {
            lower = 0;
            upper = 1;
          } else {
            lower = toNumber(lower) || 0;
            if (upper === undefined) {
              upper = lower;
              lower = 0;
            } else {
              upper = toNumber(upper) || 0;
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function (result, word, index) {
          word = word.toLowerCase();
          return result + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, '\\$&') : string;
        }
        var kebabCase = createCompounder(function (result, word, index) {
          return result + (index ? '-' : '') + word.toLowerCase();
        });
        var lowerCase = createCompounder(function (result, word, index) {
          return result + (index ? ' ' : '') + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst('toLowerCase');
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          string = toString(string).replace(reTrim, '');
          return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
        }
        function repeat(string, n, guard) {
          if (guard ? isIterateeCall(string, n, guard) : n === undefined) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString(string), n);
        }
        function replace() {
          var args = arguments,
              string = toString(args[0]);
          return args.length < 3 ? string : nativeReplace.call(string, args[1], args[2]);
        }
        var snakeCase = createCompounder(function (result, word, index) {
          return result + (index ? '_' : '') + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined;
          }
          limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == 'string' || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (separator == '' && reHasComplexSymbol.test(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return nativeSplit.call(string, separator, limit);
        }
        var startCase = createCompounder(function (result, word, index) {
          return result + (index ? ' ' : '') + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options, guard) {
          var settings = lodash.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined;
          }
          string = toString(string);
          options = assignInWith({}, options, settings, assignInDefaults);
          var imports = assignInWith({}, options.imports, settings.imports, assignInDefaults),
              importsKeys = keys(imports),
              importsValues = baseValues(imports, importsKeys);
          var isEscaping,
              isEvaluating,
              index = 0,
              interpolate = options.interpolate || reNoMatch,
              source = "__p += '";
          var reDelimiters = RegExp((options.escape || reNoMatch).source + '|' + interpolate.source + '|' + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' + (options.evaluate || reNoMatch).source + '|$', 'g');
          var sourceURL = '//# sourceURL=' + ('sourceURL' in options ? options.sourceURL : 'lodash.templateSources[' + ++templateCounter + ']') + '\n';
          string.replace(reDelimiters, function (match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = options.variable;
          if (!variable) {
            source = 'with (obj) {\n' + source + '\n}\n';
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source).replace(reEmptyStringMiddle, '$1').replace(reEmptyStringTrailing, '$1;');
          source = 'function(' + (variable || 'obj') + ') {\n' + (variable ? '' : 'obj || (obj = {});\n') + "var __t, __p = ''" + (isEscaping ? ', __e = _.escape' : '') + (isEvaluating ? ', __j = Array.prototype.join;\n' + "function print() { __p += __j.call(arguments, '') }\n" : ';\n') + source + 'return __p\n}';
          var result = attempt(function () {
            return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
          });
          result.source = source;
          if (isError(result)) {
            throw result;
          }
          return result;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined)) {
            return string.replace(reTrim, '');
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string),
              chrSymbols = stringToArray(chars),
              start = charsStartIndex(strSymbols, chrSymbols),
              end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join('');
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined)) {
            return string.replace(reTrimEnd, '');
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string),
              end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join('');
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined)) {
            return string.replace(reTrimStart, '');
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string),
              start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join('');
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH,
              omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options)) {
            var separator = 'separator' in options ? options.separator : separator;
            length = 'length' in options ? toInteger(options.length) : length;
            omission = 'omission' in options ? baseToString(options.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (reHasComplexSymbol.test(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result = strSymbols ? castSlice(strSymbols, 0, end).join('') : string.slice(0, end);
          if (separator === undefined) {
            return result + omission;
          }
          if (strSymbols) {
            end += result.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match,
                  substring = result;
              if (!separator.global) {
                separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result = result.slice(0, newEnd === undefined ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result.lastIndexOf(separator);
            if (index > -1) {
              result = result.slice(0, index);
            }
          }
          return result + omission;
        }
        function unescape(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function (result, word, index) {
          return result + (index ? ' ' : '') + word.toUpperCase();
        });
        var upperFirst = createCaseFirst('toUpperCase');
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined : pattern;
          if (pattern === undefined) {
            pattern = reHasComplexWord.test(string) ? reComplexWord : reBasicWord;
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function (func, args) {
          try {
            return apply(func, undefined, args);
          } catch (e) {
            return isError(e) ? e : new Error(e);
          }
        });
        var bindAll = baseRest(function (object, methodNames) {
          arrayEach(baseFlatten(methodNames, 1), function (key) {
            key = toKey(key);
            object[key] = bind(object[key], object);
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs ? pairs.length : 0,
              toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function (pair) {
            if (typeof pair[1] != 'function') {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function (args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, true));
        }
        function constant(value) {
          return function () {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == 'function' ? func : baseClone(func, true));
        }
        function matches(source) {
          return baseMatches(baseClone(source, true));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, true));
        }
        var method = baseRest(function (path, args) {
          return function (object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = baseRest(function (object, args) {
          return function (path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options) {
          var props = keys(source),
              methodNames = baseFunctions(source, props);
          if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
              isFunc = isFunction(object);
          arrayEach(methodNames, function (methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function () {
                var chainAll = this.__chain__;
                if (chain || chainAll) {
                  var result = object(this.__wrapped__),
                      actions = result.__actions__ = copyArray(this.__actions__);
                  actions.push({
                    'func': func,
                    'args': arguments,
                    'thisArg': object
                  });
                  result.__chain__ = chainAll;
                  return result;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {}
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function (args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function (path) {
            return object == null ? undefined : baseGet(object, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return '';
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH,
              length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee = getIteratee(iteratee);
          n -= MAX_ARRAY_LENGTH;
          var result = baseTimes(length, iteratee);
          while (++index < n) {
            iteratee(index);
          }
          return result;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(value));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        var add = createMathOperation(function (augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound('ceil');
        var divide = createMathOperation(function (dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound('floor');
        function max(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined;
        }
        function maxBy(array, iteratee) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseGt) : undefined;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee) {
          return baseMean(array, getIteratee(iteratee, 2));
        }
        function min(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined;
        }
        function minBy(array, iteratee) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseLt) : undefined;
        }
        var multiply = createMathOperation(function (multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound('round');
        var subtract = createMathOperation(function (minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee) {
          return array && array.length ? baseSum(array, getIteratee(iteratee, 2)) : 0;
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, function () {
          var source = {};
          baseForOwn(lodash, function (func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }(), { 'chain': false });
        lodash.VERSION = VERSION;
        arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function (methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(['drop', 'take'], function (methodName, index) {
          LazyWrapper.prototype[methodName] = function (n) {
            var filtered = this.__filtered__;
            if (filtered && !index) {
              return new LazyWrapper(this);
            }
            n = n === undefined ? 1 : nativeMax(toInteger(n), 0);
            var result = this.clone();
            if (filtered) {
              result.__takeCount__ = nativeMin(n, result.__takeCount__);
            } else {
              result.__views__.push({
                'size': nativeMin(n, MAX_ARRAY_LENGTH),
                'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
              });
            }
            return result;
          };
          LazyWrapper.prototype[methodName + 'Right'] = function (n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(['filter', 'map', 'takeWhile'], function (methodName, index) {
          var type = index + 1,
              isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function (iteratee) {
            var result = this.clone();
            result.__iteratees__.push({
              'iteratee': getIteratee(iteratee, 3),
              'type': type
            });
            result.__filtered__ = result.__filtered__ || isFilter;
            return result;
          };
        });
        arrayEach(['head', 'last'], function (methodName, index) {
          var takeName = 'take' + (index ? 'Right' : '');
          LazyWrapper.prototype[methodName] = function () {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(['initial', 'tail'], function (methodName, index) {
          var dropName = 'drop' + (index ? '' : 'Right');
          LazyWrapper.prototype[methodName] = function () {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function () {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function (predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function (predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function (path, args) {
          if (typeof path == 'function') {
            return new LazyWrapper(this);
          }
          return this.map(function (value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function (predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function (start, end) {
          start = toInteger(start);
          var result = this;
          if (result.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result);
          }
          if (start < 0) {
            result = result.takeRight(-start);
          } else if (start) {
            result = result.drop(start);
          }
          if (end !== undefined) {
            end = toInteger(end);
            result = end < 0 ? result.dropRight(-end) : result.take(end - start);
          }
          return result;
        };
        LazyWrapper.prototype.takeRightWhile = function (predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function () {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function (func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
              isTaker = /^(?:head|last)$/.test(methodName),
              lodashFunc = lodash[isTaker ? 'take' + (methodName == 'last' ? 'Right' : '') : methodName],
              retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function () {
            var value = this.__wrapped__,
                args = isTaker ? [1] : arguments,
                isLazy = value instanceof LazyWrapper,
                iteratee = args[0],
                useLazy = isLazy || isArray(value);
            var interceptor = function (value) {
              var result = lodashFunc.apply(lodash, arrayPush([value], args));
              return isTaker && chainAll ? result[0] : result;
            };
            if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__,
                isHybrid = !!this.__actions__.length,
                isUnwrapped = retUnwrapped && !chainAll,
                onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result = func.apply(value, args);
              result.__actions__.push({
                'func': thru,
                'args': [interceptor],
                'thisArg': undefined
              });
              return new LodashWrapper(result, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result.value()[0] : result.value() : result;
          };
        });
        arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function (methodName) {
          var func = arrayProto[methodName],
              chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
              retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function () {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function (value) {
              return func.apply(isArray(value) ? value : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function (func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + '',
                names = realNames[key] || (realNames[key] = []);
            names.push({
              'name': methodName,
              'func': lodashFunc
            });
          }
        });
        realNames[createHybrid(undefined, BIND_KEY_FLAG).name] = [{
          'name': 'wrapper',
          'func': undefined
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (iteratorSymbol) {
          lodash.prototype[iteratorSymbol] = wrapperToIterator;
        }
        return lodash;
      }
      var _ = runInContext();
      if (typeof undefined == 'function' && typeof define.amd == 'object' && define.amd) {
        root._ = _;
        define(function () {
          return _;
        });
      } else if (freeModule) {
        (freeModule.exports = _)._ = _;
        freeExports._ = _;
      } else {
        root._ = _;
      }
    }).call(this);
  })($__require('@empty').Buffer, $__require('@empty'));
});
$__System.registerDynamic("4d", ["4c"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("4c");
});
$__System.register('1', ['10', '49', 'd', 'e', 'a', 'f', 'b', '4a', '4b', '4d'], function (_export) {
  var AzureTranslate, GoogleTranslate, _createClass, _classCallCheck, _Object$keys, _Promise, YandexTranslate, getCurrentMonth, getCurrentDay, yandexLanguages, azureLanguages, _, ContentScript, MTWTranslator, attempts, time, timer;

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;
      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function notify(message, url) {

    var extensionID = window.localStorage.getItem('extensionID');
    var baseUrl = 'moz-extension://' + extensionID;

    var notification = new Notification('Mind The Word', {
      icon: baseUrl + '/assets/img/48.png',
      body: message
    });

    notification.onclick = function () {
      window.open(url);
      this.close();
    };

    setTimeout(function () {
      notification.close();
    }, 10000);
  }

  /**
   * Generate the time interval
   */
  function generateInteval() {
    return (Math.pow(2, attempts) - 1) * 1000;
  }

  /**
   * Test the connection
   * @param {url} string - url of the translator service to connect to
   */
  function testConnection(url) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.statusText != '' || xhr.status == 200) {
          connection('success', url);
          return;
        } else {
          time = generateInteval(attempts);
          attempts++;
          reset = true;
          connection('fail', url, time);
          return;
        }
      }
    };

    xhr.open('GET', url);
    xhr.send();
  }

  /**
   * Handle the connection status
   * @param {status} string - status of connection
   * @param {url} string - url of the translator service to connect to
   * @param {time} string - time interval for next connection
   */
  function connection(status) {
    var url = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
    var time = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

    var tempTime = parseInt(time / 1000);
    var mtwReconnectTime = document.getElementById('mtw-reconnect-time');
    var mtwConnectionHead = document.getElementById('mtw-connection-head');
    var mtwReconnect = document.getElementById('mtw-reconnect-now');

    if (status == 'success') {
      if (mtwConnectionHead) {
        mtwConnectionHead.parentNode.removeChild(mtwConnectionHead);
      }
    } else if (mtwConnectionHead) {
      clearInterval(timer);
      if (status == 'fail') {

        timer = setInterval(function () {
          if (tempTime == 0) {
            mtwReconnectTime.innerHTML = 'Connecting';
            mtwReconnect.style.display = 'none';
            testConnection(url);
            clearInterval(timer);
            return;
          }
          mtwReconnectTime.innerHTML = 'Could not connect to Translator Service Reconnecting in ' + tempTime + 's  &nbsp;....&nbsp;';
          mtwReconnect.style.display = 'inline';
          tempTime--;
        }, 1000);
      } else {
        mtwReconnectTime.innerHTML = 'Connection Successful';
        mtwReconnect.style.display = 'none';
        mtwConnectionHead.style.background = 'green';

        setTimeout(function () {
          mtwConnectionHead.parentNode.removeChild(mtwConnectionHead);
        }, 500);
      }
    } else {
      mtwConnectionHead = document.createElement('div');
      var styleConnectionHead = 'position: fixed; top:0;width: 100%; display: flex; justify-content: center; align-items: center; background: red; padding: 0.5em 0; color: white !important; font-size: 0.9em; z-index: 1000;';
      mtwConnectionHead.setAttribute('id', 'mtw-connection-head');
      mtwConnectionHead.setAttribute('style', styleConnectionHead);
      mtwConnectionHead.innerHTML = '<div><strong>MTW:</strong>  <span id="mtw-reconnect-time">Could not connect to Translator Service Reconnecting in ' + tempTime + 's  &nbsp;....&nbsp;</span><span id="mtw-reconnect-now"  style="cursor:pointer;"><strong>Reconnect Now</strong></span> </div> <span id="mtw-connection-cross" style="position: absolute; right: 1em; font-size: 1.2em;cursor:pointer;">✕</span> </div>';
      if (status == 'fail') document.querySelector('body').appendChild(mtwConnectionHead);

      mtwReconnectTime = document.getElementById('mtw-reconnect-time');
      mtwReconnect = document.getElementById('mtw-reconnect-now');
      mtwConnectCross = document.getElementById('mtw-connection-cross');

      try {
        mtwReconnect.addEventListener('click', function () {
          attempts = 1;
          mtwReconnectTime.innerHTML = 'Connecting';
          mtwReconnect.style.display = 'none';
          testConnection(url);
        });

        mtwConnectCross.addEventListener('click', function () {
          attempts = 1;
          mtwConnectionHead.parentNode.removeChild(mtwConnectionHead);
        });
      } catch (e) {
        console.log(e);
      }
      testConnection(url);
    }
  }
  return {
    setters: [function (_2) {
      AzureTranslate = _2.AzureTranslate;
    }, function (_3) {
      GoogleTranslate = _3.GoogleTranslate;
    }, function (_d) {
      _createClass = _d['default'];
    }, function (_e) {
      _classCallCheck = _e['default'];
    }, function (_a) {
      _Object$keys = _a['default'];
    }, function (_f) {
      _Promise = _f['default'];
    }, function (_b) {
      YandexTranslate = _b.YandexTranslate;
    }, function (_a2) {
      getCurrentMonth = _a2.getCurrentMonth;
      getCurrentDay = _a2.getCurrentDay;
    }, function (_b2) {
      yandexLanguages = _b2.yandexLanguages;
      azureLanguages = _b2.azureLanguages;
    }, function (_d2) {
      _ = _d2['default'];
    }],
    execute: function () {

      /** Class for content scriptcontroller */
      'use strict';

      ContentScript = (function () {
        /**
           * Initialize ContentScript object
           * @constructor
           */

        function ContentScript() {
          _classCallCheck(this, ContentScript);

          this.srcLang = '';
          this.targetLang = '';
          this.ngramMin = 1;
          this.ngramMax = 1;
          this.tMap = {};
          this.filteredTMap = {};
          this.selectedRegion = {};
          this.countedWords = {};
          this.totalWordsLanguage = 0;
          this.finishTranslation = false;
          this.pageFirstLoad = true;
        }

        /**
           * Filter pre-processed DOMs
           */

        _createClass(ContentScript, [{
          key: 'filterDoms',
          value: function filterDoms() {
            var dom = this.allparagraphs,
                filteredDoms = [],
                safePermit = 3000,
                // higher than this would cause performance issues
            domLength = dom.length;
            var loopStart = domLength > safePermit ? domLength - safePermit : 0;
            for (var i = loopStart; i < domLength; i++) {
              // execute last 3000 DOMs only.
              var e = dom[i].classList;
              if (!e.contains('mtwProcessed')) if (!e.contains('hc-preview') && !e.contains('hc-details')) {
                filteredDoms.push(dom[i]);
              }
            }
            this.allparagraphsFiltered = filteredDoms;
          }

          /**
             * Initializes parameters
             */
        }, {
          key: 'initialize',
          value: function initialize(res) {
            this.ngramMin = res.ngramMin;
            this.ngramMax = res.ngramMax;
            this.srcLang = res.sourceLanguage;
            this.cwAvailable = res.cwAvailable;
            this.cwMap = res.cwMap;
            this.targetLanguage = res.targetLanguage;
            this.userDefinedTranslations = JSON.parse(res.userDefinedTranslations);
            this.translationProbability = res.translationProbability;
            this.userBlacklistedWords = res.userBlacklistedWords;
            this.translator = res.translatorService;
            this.yandexTranslatorApiKey = res.yandexTranslatorApiKey;
            this.azureTranslatorApiKey = res.azureTranslatorApiKey;
            this.googleTranslatorApiKey = res.googleTranslatorApiKey;
            this.translated = true;
            this.learntWords = res.learntWords;
            this.userDefinedOnly = res.userDefinedOnly;
            this.useCommonWordsOnly = res.useCommonWordsOnly;
            this.stats = res.stats;
            //this.nOfWordsTransEveryDay = res.nOfWordsTransEveryDay;
            this.wordToggles = res.wordToggles;
            this.oneWordTranslation = res.oneWordTranslation;
            this.allparagraphs = document.querySelectorAll('p,div,a');
            if (this.finishTranslation && !this.pageFirstLoad) {
              this.filterDoms();
            } else if (this.pageFirstLoad) {
              // prevent DOMFiltering on first load, to avoid content skips for non-lazy loading pages
              this.pageFirstLoad = false;
              this.allparagraphsFiltered = this.allparagraphs;
            }
            this.numberOfTranslatedWordsOnPage = 0;
            var check_array = [];
            for (var i = 0; i < this.allparagraphsFiltered.length; i++) {
              check_array.push(1);
            }
            this.check_array = check_array; // For checking if element has been processed
            this.custom_icon = []; // For storing image link for Hover-Card
            this.custom_icon.push(chrome.extension.getURL('assets/img/speak.png'));
            this.custom_icon.push(chrome.extension.getURL('assets/img/learnt.png'));
            this.custom_icon.push(chrome.extension.getURL('assets/img/visual.png'));
            this.custom_icon.push(chrome.extension.getURL('assets/img/info.png'));
            this.custom_icon.push(chrome.extension.getURL('assets/img/save.png'));
            this.custom_icon.push(chrome.extension.getURL('assets/img/blacklist.png'));
            // images for hover cards
            this.custom_icon.push(chrome.extension.getURL('assets/img/rare.png'));
            this.custom_icon.push(chrome.extension.getURL('assets/img/occasionally.png'));
            this.custom_icon.push(chrome.extension.getURL('assets/img/common.png'));
            this.custom_icon.push(chrome.extension.getURL('assets/img/tick_green.png'));
            this.custom_icon.push(chrome.extension.getURL('assets/img/cross_red.png'));
          }

          /**
             * Loads data from storage and calls appropriate
             * functions as per the settings.
             */
        }, {
          key: 'translate',
          value: function translate() {
            var _this = this;

            var countedWords = this.getAllWords(this.ngramMin, this.ngramMax);
            this.countedWords = countedWords;
            var filteredWords;
            if (this.userDefinedOnly === true) {
              filteredWords = this.filterToUserDefined(countedWords, this.translationProbability, this.userDefinedTranslations, this.userBlacklistedWords);
              var tMap = {};
              for (var word in filteredWords) {
                tMap[word] = this.userDefinedTranslations[word];
              }
              this.processTranslations(tMap, this.userDefinedTranslations);
            } else {
              if (this.cwAvailable === true && this.useCommonWordsOnly === true) {
                var filteredWords = this.filter(countedWords, this.translationProbability, this.userDefinedTranslations, this.userBlacklistedWords);
                var cwMatch = {};
                for (var i in filteredWords) {
                  if (this.cwMap[i]) {
                    cwMatch[i] = this.cwMap[i];
                  }
                }
                this.processTranslations({}, this.userDefinedTranslations, cwMatch);
              } else if (this.cwAvailable === true) {
                this.fetchTranslations(countedWords);
              } else {
                this.getCommonWords().then(function (cwList) {
                  if (cwList) {
                    var translator = _this.getTranslator();
                    testConnection(translator.testurl);
                    translator.getTranslations(cwList).then(function (tMap) {
                      _this.cwMap = tMap;
                      chrome.storage.local.set({ cwAvailable: true, cwMap: _this.cwMap });
                      _this.cwAvailable = true;
                      _this.fetchTranslations(countedWords);
                    })['catch'](function (e) {
                      console.error('[MTW]', e);
                      _this.fetchTranslations(countedWords);
                    });
                  } else {
                    _this.fetchTranslations(countedWords);
                  }
                })['catch'](function (error) {
                  _this.fetchTranslations(countedWords);
                });
              }
            }
          }

          /**
             * @param {Object} countedWords - all the words on the page
             */
        }, {
          key: 'fetchTranslations',
          value: function fetchTranslations(countedWords) {
            var _this2 = this;

            var filteredWords = this.filter(countedWords, this.translationProbability, this.userDefinedTranslations, this.userBlacklistedWords);
            var cwMatch = {};
            var cwNotMatch = {};
            for (var i in filteredWords) {
              if (this.cwMap[i]) {
                cwMatch[i] = this.cwMap[i];
              } else {
                cwNotMatch[i] = 1;
              }
            }
            var translator = this.getTranslator();
            testConnection(translator.testurl);
            translator.getTranslations(cwNotMatch).then(function (tMap) {
              _this2.processTranslations(tMap, _this2.userDefinedTranslations, cwMatch);
            })['catch'](function (e) {
              console.error('[MTW]', e);
            });
          }

          /**
             * Returns the current translator object.
             * @returns {Object} translatorObject corresponding to active translator
             */
        }, {
          key: 'getTranslator',
          value: function getTranslator() {
            var translatorObject = {};
            switch (this.translator) {
              case 'Yandex':
                translatorObject = new YandexTranslate(this.yandexTranslatorApiKey, this.srcLang, this.targetLanguage);
                break;
              case 'Azure':
                translatorObject = new AzureTranslate(this.azureTranslatorApiKey, this.srcLang, this.targetLanguage);
                break;
              case 'Google':
                translatorObject = new GoogleTranslate(this.googleTranslatorApiKey, this.srcLang, this.targetLanguage);
                break;
              default:
                console.error('No such translator supported');
            }
            return translatorObject;
          }

          /**
             * Inject CSS file containing MTW styles into the page.
             * @param {string} cssStyle - stringified CSS style
             */
        }, {
          key: 'injectCSS',
          value: function injectCSS(cssStyle) {
            try {
              // insert MTW styles
              var style = document.createElement('link');
              style.rel = 'stylesheet';
              style.type = 'text/css';
              style.href = chrome.extension.getURL('/assets/css/MTWStyles.css');
              document.getElementsByTagName('head')[0].appendChild(style);

              // insert main mtwTranslatedWord stylesheet
              var mtwStyle = document.createElement('style');
              document.head.appendChild(mtwStyle);
              mtwStyle.sheet.insertRule('span.mtwTranslatedWord {' + cssStyle + '}', 0);
            } catch (e) {
              console.debug(e);
            }
          }
        }, {
          key: 'getCommonWords',
          value: function getCommonWords() {
            var commonWordsURI = chrome.extension.getURL('./common/' + this.srcLang + '.json');
            return fetch(commonWordsURI).then(function (result) {
              return result.json();
            }).then(function (result) {
              var cwList = {};
              for (var i in result.words) {
                cwList[result.words[i]] = 1;
              }
              return cwList;
            });
          }

          /**
             * Retrieve all the words from current page
             * @param {number} ngramMin - minimum ngram for translation
             * @param {number} ngramMax - maximum ngram for translation
             * @returns {Object} countedWords - object with word counts
             */
        }, {
          key: 'getAllWords',
          value: function getAllWords(ngramMin, ngramMax) {
            var countedWords = {};
            var j = 0;
            var paragraphs = [];
            for (var i = 0; i < this.allparagraphsFiltered.length; i++) {
              if (this.isInViewport(this.allparagraphsFiltered[i]) && this.check_array[i] && !this.allparagraphsFiltered[i].classList.contains('mtwProcessed')) {
                this.allparagraphsFiltered[i].className += ' mtwProcessed';
                paragraphs.push(this.allparagraphsFiltered[i]);
                this.check_array[i] = 0;
              }
            }
            this.paragraphs = paragraphs;
            for (var i = 0; i < paragraphs.length; i++) {
              var words = paragraphs[i].innerText;
              if (this.clkTest(words)) {
                words = words.replace(/\d|\s|[()]/g, '').split('').filter(function (v) {
                  return v != '';
                });
              } else {
                words = words.split(/\s|,|[.()]|\d/g);
              }
              for (var j = 0; j < words.length; j++) {
                for (var b = ngramMin; b <= ngramMax; b++) {
                  var word = words.slice(j, j + b).join(' ');
                  if (!(word in countedWords)) {
                    countedWords[word] = 0;
                  }
                  countedWords[word] += 1;
                }
              }
            }
            return countedWords;
          }
        }, {
          key: 'isInViewport',
          value: function isInViewport(elem) {
            var bounding = elem.getBoundingClientRect();
            return bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) && bounding.right <= (window.innerWidth || document.documentElement.clientWidth);
          }
        }, {
          key: 'filterToUserDefined',
          value: function filterToUserDefined(countedWords, translationProbability, userDefinedTranslations, userBlacklistedWords) {
            var blackListReg = new RegExp(userBlacklistedWords);
            var a = this.toList(userDefinedTranslations, function (word, count) {
              return 1;
            });
            var b = this.toList(countedWords, function (word, count) {
              return 1;
            });
            var countedWordsList = this.intersect(a, b);
            return this.toMap(countedWordsList);
          }
        }, {
          key: 'filter',
          value: function filter(countedWords, translationProbability, userDefinedTranslations, userBlacklistedWords) {
            var _this3 = this;

            var blackListReg = new RegExp(userBlacklistedWords);
            var punctuationReg = new RegExp(/[\.,\/#\!\$%\^&\*;:{}=\\\_`~()\?@\d\+\-]/g);
            var countedWordsList = this.shuffle(this.toList(countedWords, function (word, count) {
              if (_this3.clkTest(word)) return !!word && word !== '' && !/\d/.test(word) && // no empty words
              !blackListReg.test(word.toLowerCase()) && // no blacklisted words
              !punctuationReg.test(word.toLowerCase()); // no punctuation marksreturn !!word && word.length >= 2 && // no words that are too short
              else return word !== '' && !/\d/.test(word) && // no empty words
                !blackListReg.test(word.toLowerCase()) && // no blacklisted words
                !punctuationReg.test(word.toLowerCase()); // no punctuation marks
            }));
            var targetLength = Math.floor(_Object$keys(countedWordsList).length * translationProbability / 100);
            return this.toMap(countedWordsList.slice(0, targetLength - 1));
          }
        }, {
          key: 'containsIllegalCharacters',
          value: function containsIllegalCharacters(s) {
            return (/[0-9{}.,;:]/.test(s)
            );
          }

          /**
             * Perform various functions on translations
             * @param {Object} translationMap - word wise translation object
             */
        }, {
          key: 'processTranslations',
          value: function processTranslations(translationMap, userDefinedTMap, cwMatch) {
            var _this4 = this;

            var filteredTMap = {};
            for (var w in translationMap) {
              if (w !== translationMap[w] && translationMap[w] !== '' && !userDefinedTMap[w] && !this.containsIllegalCharacters(translationMap[w])) {
                filteredTMap[w] = translationMap[w];
              }
            }

            // Matching from Common Words
            for (w in cwMatch) {
              if (w !== cwMatch[w] && cwMatch[w] !== '' && !userDefinedTMap[w] && !this.containsIllegalCharacters(cwMatch[w])) {
                filteredTMap[w] = cwMatch[w];
              }
            }

            // Matching from User Defined Words
            for (w in userDefinedTMap) {
              if (w !== userDefinedTMap[w]) {
                filteredTMap[w] = userDefinedTMap[w];
              }
            }

            //filter out learnt words
            if (this.learntWords.length > 2) {
              (function () {
                var learntWordsReg = new RegExp(_this4.learntWords);
                _Object$keys(filteredTMap).forEach(function (key) {
                  if (learntWordsReg.test(filteredTMap[key].toLowerCase())) {
                    delete filteredTMap[key];
                  }
                });
              })();
            }

            //for difficulty buckets feature
            this.filteredTMap = filteredTMap;

            //for quiz feature
            chrome.storage.local.set({ 'translatedWordsForQuiz': JSON.stringify(this.filteredTMap) });

            var numberOfTranslatedWords = _Object$keys(filteredTMap).length;
            this.numberOfTranslatedWordsOnPage += numberOfTranslatedWords;

            var numberOfTranslatedCharacters = 0;
            _Object$keys(filteredTMap).forEach(function (e, i) {
              numberOfTranslatedCharacters += e.length;
            });

            this.stats['totalWordsTranslated'] += numberOfTranslatedWords;

            //number of words characters translated by each service in the current month
            var currentMonth = getCurrentMonth();
            var currentDay = getCurrentDay();
            var date = new Date();
            var date = new Date();

            var year = date.getFullYear();
            var month = date.getMonth();
            var nowDate = date.getDate();
            var dateForm = month + '-' + nowDate + '-' + year;

            var wordsEveryDay = [];
            browser.storage.local.get('nOfWordsTransEveryDay').then(function (result, err) {
              if (result.nOfWordsTransEveryDay == undefined) {
                browser.storage.local.set({ 'nOfWordsTransEveryDay': [] });
              } else {
                wordsEveryDay = result.nOfWordsTransEveryDay;
              }
              var toCheck = true;
              for (var i = 0; i < wordsEveryDay.length; i++) {
                if (wordsEveryDay[i][0] == dateForm) {

                  wordsEveryDay[i][1] += numberOfTranslatedWords;
                  toCheck = false;
                }
              }
              if (toCheck) {
                var wordsToday = [dateForm, numberOfTranslatedWords];
                wordsEveryDay.push(wordsToday);
              }

              browser.storage.local.set({ 'nOfWordsTransEveryDay': wordsEveryDay });
            });

            // [0] => number of words, [1] => number of characters
            if (!(currentMonth in this.stats['translatorWiseWordCount'][0])) {
              this.stats['translatorWiseWordCount'][0] = {};
              this.stats['translatorWiseWordCount'][0][currentMonth] = {
                'Yandex': [0, 0, 0],
                'Google': [0, 0, 0],
                'Azure': [0, 0, 0]
              };
            }

            if (!(currentDay in this.stats['translatorWiseWordCount'][1])) {
              this.stats['translatorWiseWordCount'][1] = {};
              this.stats['translatorWiseWordCount'][1][currentDay] = {
                'Yandex': [0, 0, 0],
                'Google': [0, 0, 0],
                'Azure': [0, 0, 0]
              };
            }

            if (!this.userDefinedOnly) {
              this.stats['translatorWiseWordCount'][0][currentMonth][this.translator][0] += numberOfTranslatedWords;
              this.stats['translatorWiseWordCount'][0][currentMonth][this.translator][1] += numberOfTranslatedCharacters;
              this.stats['translatorWiseWordCount'][0][currentMonth][this.translator][2] += numberOfTranslatedCharacters;
              this.stats['translatorWiseWordCount'][1][currentDay][this.translator][0] += numberOfTranslatedWords;
              this.stats['translatorWiseWordCount'][1][currentDay][this.translator][1] += numberOfTranslatedCharacters;
              this.stats['translatorWiseWordCount'][1][currentDay][this.translator][2] += numberOfTranslatedCharacters;
              chrome.storage.local.set({ 'stats': this.stats });
              chrome.storage.local.set({ 'numberOfTranslatedWords': JSON.stringify(this.numberOfTranslatedWordsOnPage) });
            }

            //number of words translated for active pattern
            browser.storage.local.get('savedPatterns').then(function (result, err) {
              var savedPatterns = JSON.parse(result.savedPatterns);
              for (var i = 0; i < savedPatterns.length; i++) {
                if (savedPatterns[i][3]) {
                  savedPatterns[i][5] += numberOfTranslatedWords;
                  browser.storage.local.set({ 'savedPatterns': JSON.stringify(savedPatterns) });
                  browser.runtime.sendMessage('message_on');
                  break;
                }
              }
            });
            if (_Object$keys(filteredTMap).length !== 0) {
              var paragraphs = this.paragraphs;
              if (this.oneWordTranslation) {
                for (var i = 0; i < paragraphs.length; i++) {
                  this.translateOneWord(paragraphs[i], filteredTMap, this.invertMap(filteredTMap));
                }
              } else {
                for (var i = 0; i < paragraphs.length; i++) {
                  this.translateDeep(paragraphs[i], filteredTMap, this.invertMap(filteredTMap));
                }
              }
            }

            // adding word frequency counters
            var wordFrequencyPromise = new _Promise(function (resolve, reject) {
              var allTranslated = document.querySelectorAll('.mtwTranslatedWord, .mtwTranslatedWorde, .mtwTranslatedWordn, .mtwTranslatedWordh'),
                  nativeWords = [],
                  // storing language specific words
              totalWordsLanguage; // language specific counter for calculating rarity ratio
              browser.storage.local.get(['wordFrequencyCorpus', 'totalWordsperLanguage']).then(function (wordObjectList, err) {
                nativeWords = wordObjectList.wordFrequencyCorpus;
                totalWordsLanguage = wordObjectList.totalWordsperLanguage;

                for (var i = 0; i < allTranslated.length; i++) {
                  var spanNode = allTranslated[i],
                      found = false;
                  for (var j = 0; j < nativeWords.length; j++) {

                    if (spanNode.innerText === nativeWords[j].word) {
                      found = true; // for check if the language selected is present in the list
                      nativeWords[j].count = parseInt(nativeWords[j].count) + 1;
                      break;
                    }
                  }

                  if (found === false) {
                    var word = spanNode.innerText,
                        wordObject = {
                      targetLang: '',
                      word: '',
                      count: 1
                    };
                    wordObject.targetLang = _this4.targetLanguage;
                    wordObject.word = word;
                    nativeWords.push(wordObject); // create first node for new target language
                  }
                }

                if (totalWordsLanguage.length === 0) {
                  totalWordsLanguage.push({ targetLang: _this4.targetLanguage, count: allTranslated.length });
                  _this4.totalWordsLanguage = allTranslated.length;
                }
                for (var x = 0; x < totalWordsLanguage.length; x++) {
                  if (totalWordsLanguage[x].targetLang === _this4.targetLanguage) {
                    totalWordsLanguage[x].count += allTranslated.length;
                    _this4.totalWordsLanguage = totalWordsLanguage[x].count;
                    break;
                  } else if (totalWordsLanguage[x].targetLang !== _this4.targetLanguage && x === totalWordsLanguage.length - 1) {
                    totalWordsLanguage.push({ targetLang: _this4.targetLanguage, count: allTranslated.length });
                    _this4.totalWordsLanguage = allTranslated.length;
                  }
                }
                browser.storage.local.set({ wordFrequencyCorpus: nativeWords });
                browser.storage.local.set({ totalWordsperLanguage: totalWordsLanguage });
                resolve(nativeWords);
                reject('[MTW] translated words not found');
              });
            });
            wordFrequencyPromise.then(function (nativeWords) {
              // Adding buttons and frequency counters to Hover-Card
              browser.storage.local.get(['learntWords', 'translatedWordsForQuiz']).then(function (wordsListObj, err) {
                var wordsList = wordsListObj.learntWords,
                    wordsArray = wordsList.replace('(', '').replace(')', '').split('|'),
                    s = _this4.hoverTranslations,
                    hoverBackground = '',
                    // background color code depending on rarity
                onPageQuizID = 0;
                var paragraphs = _this4.paragraphs;

                for (var a = 0; a < paragraphs.length; a++) {
                  var translatedWords = paragraphs[a].querySelectorAll('.mtwTranslatedWord, .mtwTranslatedWorde, .mtwTranslatedWordn, .mtwTranslatedWordh');
                  for (var _i = 0; _i < translatedWords.length; _i++) {
                    var word = translatedWords[_i].getAttribute('data-original');
                    if (!wordsArray.includes(word)) {
                      // if word is not learnt
                      var hoverHTML = '<p>' + translatedWords[_i].getAttribute('data-original') + '</p>';
                      for (var k = 0; k < nativeWords.length; k++) {
                        if (nativeWords[k].word === translatedWords[_i].getAttribute('data-translated')) {
                          if (Math.round(nativeWords[k].count / _this4.totalWordsLanguage * 1000) <= 1) {
                            // in 1000 words change this to 1000 from 100
                            hoverHTML += '<img src="' + _this4.custom_icon[6] + '" class="tags-rare">';
                            hoverBackground = '#FFEBEE';
                          } else if (Math.round(nativeWords[k].count / _this4.totalWordsLanguage * 100) >= 4) {
                            hoverHTML += '<img src="' + _this4.custom_icon[8] + '" class="tags-common">';
                            hoverBackground = '#F1F8E9';
                          } else {
                            hoverHTML += '<img src="' + _this4.custom_icon[7] + '" class="tags-occasional">';
                            hoverBackground = '#FFFDE7';
                          }
                        }
                      }
                      hoverHTML += '<img style="cursor:pointer;" class="mtwSpeak" data-translated="' + translatedWords[_i].getAttribute('data-translated') + '" src="' + _this4.custom_icon[0] + '">';
                      hoverHTML += '<img style="cursor:pointer;" class="mtwMarkAsLearnt mtwHovercardBelow" data-original="' + translatedWords[_i].getAttribute('data-original') + '" src="' + _this4.custom_icon[1] + '">';
                      hoverHTML += '<img style="cursor:pointer;" class="mtwSaveTranslation mtwHovercardBelow" data-translated="' + translatedWords[_i].getAttribute('data-translated') + '" data-original="' + translatedWords[_i].getAttribute('data-original') + '" src="' + _this4.custom_icon[4] + '">';
                      hoverHTML += '<img style="cursor:pointer;" class="mtwBlacklistWord mtwHovercardBelow" data-original="' + translatedWords[_i].getAttribute('data-original') + '" src="' + _this4.custom_icon[5] + '">';
                      hoverHTML += '<img style="cursor:pointer;" class="mtwWordInfo mtwHovercardBelow" data-translated="' + translatedWords[_i].getAttribute('data-translated') + '" src="' + _this4.custom_icon[3] + '">';
                      hoverHTML += '<img style="cursor:pointer;" class="mtwVisualHint mtwHovercardBelow" data-translated="' + translatedWords[_i].getAttribute('data-translated') + '" src="' + _this4.custom_icon[2] + '">';
                      $(translatedWords[_i]).hovercard({
                        detailsHTML: hoverHTML,
                        width: 250,
                        background: hoverBackground
                      });
                    } else {
                      var getPosition = function getPosition(length) {
                        // get the index of adding wrong translations
                        return Math.floor(Math.random() * length);
                      };

                      var filterKeys = function filterKeys(obj) {
                        var filteredList = {};
                        for (var x in obj) {
                          if (obj.hasOwnProperty(x)) {
                            if (obj[x].length >= 4) {
                              filteredList[x] = obj[x];
                            }
                          }
                        }
                        return filteredList;
                      };

                      var _word = translatedWords[_i].getAttribute('data-translated'),
                          wordNativeLang = translatedWords[_i].getAttribute('data-original'),
                          wordsLearnt = JSON.parse(wordsListObj.translatedWordsForQuiz);

                      var filteredlist = filterKeys(wordsLearnt),
                          options = new Array(4),
                          correctAnsOption = Math.round(Math.random() * 4);
                      options[correctAnsOption] = _word;
                      // assign options to the array
                      for (var u = 0; u < 4; u++) {
                        if (u !== correctAnsOption) {
                          options[u] = getPosition(_Object$keys(filteredlist).length);
                        }
                      }
                      var opt = 0,
                          count = 0;
                      for (var keys in filteredlist) {
                        if (filteredlist.hasOwnProperty(keys)) {
                          switch (count) {
                            case options[0]:
                              options[0] = filteredlist[keys];
                              opt++;
                              break;
                            case options[1]:
                              options[1] = filteredlist[keys];
                              opt++;
                              break;
                            case options[2]:
                              options[2] = filteredlist[keys];
                              opt++;
                              break;
                            case options[3]:
                              options[3] = filteredlist[keys];
                              opt++;
                              break;
                            default:
                              if (opt === correctAnsOption) opt++;
                          }
                          if (opt === 4) break;
                          count++;
                        }
                      }
                      var hoverHTML = '<p>Choose <strong>correct</strong> Translations:</p><div>';
                      for (var j = 0; j < options.length; j++) {
                        if (j === correctAnsOption) {
                          hoverHTML += '<b class="onPageQuiz-default">' + (j + 1) + '.</b> <span class="answer_correct_' + onPageQuizID + ' onPageQuiz-default">\n                    <span id="correct-' + j.toString() + '" name="quiz" value="' + options[j] + '">' + options[j] + '</span>' + ' <img id="answer_sym_" src="' + _this4.custom_icon[9] + '" style="height:25px;display: none;position:absolute;right:18px;margin-top:-23px;"/></span><br/>';
                        } else {
                          hoverHTML += '<b class="onPageQuiz-default">' + (j + 1) + '.</b> <span class="answer_wrong_' + onPageQuizID + ' onPageQuiz-default"><span id="wrong-' + j.toString() + '" name="quiz" value="' + options[j] + '">' + options[j] + '</span>' + ' <img id="answer_sym_" src="' + _this4.custom_icon[10] + '" style="height:20px;margin-top:-20px;display: none;position:absolute;right:20px;"/></span><br/>';
                        }
                      }
                      onPageQuizID++;
                      hoverHTML += '<span class="tag-learnt-marked">Learnt</span>';
                      hoverHTML += '</div>';
                      translatedWords[_i].innerHTML = '<span style="color:blue;font-weight:bold;">' + translatedWords[_i].getAttribute('data-original') + ' </span>';
                      $(translatedWords[_i]).hovercard({
                        detailsHTML: hoverHTML,
                        width: 300
                      });
                    }
                  }
                }
                _this4.postProcessing();
              });
            })['catch'](function (e) {
              console.warn(e);
            });
          }

          /**
           * Adds event listeners to the buttons inthe hovercards
           */
        }, {
          key: 'postProcessing',
          value: function postProcessing() {
            var paragraphs = this.paragraphs; //getting paragraphs in the current viewport

            for (var i = 0; i < paragraphs.length; i++) {

              //Event Listener for Speak
              var buttonList = paragraphs[i].querySelectorAll('.mtwSpeak');
              if (buttonList.length) {
                for (var _i2 = 0; _i2 < buttonList.length; _i2++) {
                  if (!buttonList[_i2].classList.contains('done')) {
                    buttonList[_i2].addEventListener('click', function () {
                      var utterance = this.getAttribute('data-translated');
                      browser.storage.local.set({ 'utterance': utterance }, function () {
                        browser.runtime.sendMessage('speakTheWord');
                      });
                    });
                    buttonList[_i2].className += ' done';
                  }
                }
              }

              //Event Listener for MarkAsLearnt
              buttonList = paragraphs[i].querySelectorAll('.mtwMarkAsLearnt');
              if (buttonList.length) {
                for (var _i3 = 0; _i3 < buttonList.length; _i3++) {
                  if (!buttonList[_i3].classList.contains('done')) {
                    buttonList[_i3].addEventListener('click', function () {

                      var wordLearnt = this.getAttribute('data-original');
                      browser.storage.local.get(['learntWords']).then(function (result, err) {

                        var learntWords = result.learntWords;
                        var learntWordsArr = learntWords.slice(1, -1).split('|');
                        var updatedLearntWords = learntWords;

                        var exist = false;
                        for (var q = 0; q < learntWordsArr.length; q++) {
                          if (learntWordsArr[q] == wordLearnt) {
                            exist = true;
                          }
                        }
                        if (!exist) {
                          if (learntWords.length === 2) {
                            updatedLearntWords = '(' + wordLearnt + ')';
                          } else {
                            updatedLearntWords = updatedLearntWords.split(')')[0] + '|' + wordLearnt + ')';
                          }

                          var snackBar = document.createElement("div");
                          snackBar.setAttribute("style", "left: 0px;right: 0px;margin-left:auto;margin-right:auto;max-width:40%;background-color:#4ea03b;z-index:10000;border-radius:7.5px;color:white;bottom: 5%;position:fixed;padding:15px;text-align:center;box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);");
                          var snackContent = document.createElement("p");
                          snackContent.setAttribute("style", "margin-top:0px;margin-bottom:0px;");
                          snackContent.innerText = "'" + wordLearnt + "' learnt";

                          var undo = document.createElement("p");
                          undo.setAttribute("style", "font-weight:bold;cursor: pointer;margin-top:0px;margin-bottom:0px;");
                          undo.setAttribute("snack_original", wordLearnt);
                          undo.innerText = "Undo";

                          undo.addEventListener('click', function () {
                            //Undo the change
                            var toUndo = undo.getAttribute("snack_original");
                            var learntWordsStore_ = browser.storage.local.get('learntWords');
                            learntWordsStore_.then(function (re) {
                              var arrChange = re.learntWords;
                              if (arrChange.indexOf("|") == -1) {
                                arrChange = arrChange.replace(toUndo, "");
                              } else {
                                arrChange = arrChange.replace("|" + toUndo, "");
                              }

                              browser.storage.local.set({ 'learntWords': arrChange });
                            });
                          });
                          browser.storage.local.set({
                            'learntWords': updatedLearntWords
                          });
                          snackBar.appendChild(snackContent);
                          snackBar.appendChild(undo);
                          document.getElementsByTagName("body")[0].appendChild(snackBar);

                          setTimeout(function () {
                            snackBar.parentNode.removeChild(snackBar);
                          }, 3000);
                        }
                      });
                    });
                  }
                  buttonList[_i3].className += ' done';
                }
              }

              //Event Listener for SaveTranslation
              buttonList = paragraphs[i].querySelectorAll('.mtwSaveTranslation');
              if (buttonList.length) {
                for (var _i4 = 0; _i4 < buttonList.length; _i4++) {
                  if (!buttonList[_i4].classList.contains('done')) {
                    buttonList[_i4].addEventListener('click', function () {
                      var originalText = this.getAttribute('data-original');
                      var translatedText = this.getAttribute('data-translated');
                      browser.storage.local.get('savedTranslations').then(function (result, err) {
                        var updatedSavedTranslations = JSON.parse(result.savedTranslations);

                        var exist = false;
                        for (var key in updatedSavedTranslations) {
                          if (key == originalText) {
                            exist = true;
                          }
                        }
                        if (!exist) {
                          updatedSavedTranslations[originalText] = translatedText;

                          var snackBar = document.createElement("div");
                          snackBar.setAttribute("style", "left: 0px;right: 0px;margin-left:auto;margin-right:auto;max-width:40%;background-color:#f19b42;z-index:10000;border-radius:7.5px;color:white;bottom: 5%;position:fixed;padding:15px;text-align:center;box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);");
                          var snackContent = document.createElement("p");
                          snackContent.setAttribute("style", "margin-top:0px;margin-bottom:0px;");
                          snackContent.innerText = "'" + originalText + "' saved";

                          var undo = document.createElement("p");
                          undo.setAttribute("style", "font-weight:bold;cursor: pointer;margin-top:0px;margin-bottom:0px;");
                          undo.setAttribute("snack_original", originalText);
                          undo.innerText = "Undo";

                          undo.addEventListener('click', function () {
                            //Undo the change
                            var toUndo = undo.getAttribute("snack_original");
                            var savedTranslations__ = browser.storage.local.get('savedTranslations');
                            savedTranslations__.then(function (re) {
                              var arrChange = JSON.parse(re.savedTranslations);
                              if (arrChange[originalText] != undefined) {
                                delete arrChange[originalText];
                              }
                              browser.storage.local.set({ 'savedTranslations': JSON.stringify(arrChange) });
                            });
                          });
                          browser.storage.local.set({ 'savedTranslations': JSON.stringify(updatedSavedTranslations) });
                          snackBar.appendChild(snackContent);
                          snackBar.appendChild(undo);
                          document.getElementsByTagName("body")[0].appendChild(snackBar);

                          setTimeout(function () {
                            snackBar.parentNode.removeChild(snackBar);
                          }, 3000);
                        }
                      });
                    });
                    buttonList[_i4].className += ' done';
                  }
                }
              }

              //Event Listener for BlacklistWord
              buttonList = paragraphs[i].querySelectorAll('.mtwBlacklistWord');
              if (buttonList.length) {
                for (var _i5 = 0; _i5 < buttonList.length; _i5++) {
                  if (!buttonList[_i5].classList.contains('done')) {
                    buttonList[_i5].addEventListener('click', function () {
                      var wordToBeBlacklisted = this.getAttribute('data-original');
                      browser.storage.local.get('userBlacklistedWords').then(function (result, err) {
                        var currentUserBlacklistedWords = result.userBlacklistedWords;
                        var blacklistedWords = [];
                        blacklistedWords = currentUserBlacklistedWords.slice(1, -1).split('|');
                        var updatedBlacklistedWords = '';
                        // to avoid duplication
                        if (blacklistedWords.indexOf(wordToBeBlacklisted) === -1) {
                          // incase of empty current black list
                          if (!currentUserBlacklistedWords) {
                            updatedBlacklistedWords = '(' + wordToBeBlacklisted + ')';
                          } else {
                            updatedBlacklistedWords = currentUserBlacklistedWords.split(')')[0] + '|' + wordToBeBlacklisted + ')';
                          }
                        }

                        var snackBar = document.createElement("div");
                        snackBar.setAttribute("style", "left: 0px;right: 0px;margin-left:auto;margin-right:auto;max-width:40%;background-color:#d5446a;z-index:10000;border-radius:7.5px;color:white;bottom: 5%;position:fixed;padding:15px;text-align:center;box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);");
                        var snackContent = document.createElement("p");
                        snackContent.setAttribute("style", "margin-top:0px;margin-bottom:0px;");
                        snackContent.innerText = "'" + wordToBeBlacklisted + "' blacklisted";

                        var undo = document.createElement("p");
                        undo.setAttribute("style", "font-weight:bold;cursor: pointer;margin-top:0px;margin-bottom:0px;");
                        undo.setAttribute("snack_original", wordToBeBlacklisted);
                        undo.innerText = "Undo";

                        undo.addEventListener('click', function () {
                          //Undo the change
                          var toUndo = undo.getAttribute("snack_original");
                          browser.storage.local.get('userBlacklistedWords').then(function (re) {
                            var arrChange = re.userBlacklistedWords;
                            if (arrChange.indexOf("|") == -1) {
                              arrChange = arrChange.replace(toUndo, "");
                            } else {
                              arrChange = arrChange.replace("|" + toUndo, "");
                            }

                            browser.storage.local.set({ 'userBlacklistedWords': arrChange });
                          });
                        });
                        browser.storage.local.set({
                          'userBlacklistedWords': updatedBlacklistedWords
                        });
                        snackBar.appendChild(snackContent);
                        snackBar.appendChild(undo);
                        document.getElementsByTagName("body")[0].appendChild(snackBar);

                        setTimeout(function () {
                          snackBar.parentNode.removeChild(snackBar);
                        }, 3000);
                      });
                    });
                    buttonList[_i5].className += ' done';
                  }
                }
              }

              //Event Listener for WordInfo
              buttonList = paragraphs[i].querySelectorAll('.mtwWordInfo');
              if (buttonList.length) {
                var targetLanguage = this.targetLanguage;
                for (var _i6 = 0; _i6 < buttonList.length; _i6++) {
                  if (!buttonList[_i6].classList.contains('done')) {
                    buttonList[_i6].addEventListener('click', function () {
                      var word = this.getAttribute('data-translated');
                      var searchUrl = 'http://' + targetLanguage + '.wiktionary.org/wiki/' + word;
                      window.open(searchUrl);
                    });
                    buttonList[_i6].className += ' done';
                  }
                }
              }

              //Event Listener for VisualHint
              buttonList = paragraphs[i].querySelectorAll('.mtwVisualHint');
              if (buttonList.length) {
                var targetLanguage = this.targetLanguage;
                for (var _i7 = 0; _i7 < buttonList.length; _i7++) {
                  if (!buttonList[_i7].classList.contains('done')) {
                    buttonList[_i7].addEventListener('click', function () {
                      var word = this.getAttribute('data-translated');
                      var searchUrl = 'http://www.google.com/search?lr=lang_' + targetLanguage + '&q=' + word + '&tbm=isch';
                      window.open(searchUrl);
                    });
                    buttonList[_i7].className += ' done';
                  }
                }
              }

              //Events on the hovercards actions
              buttonList = paragraphs[i].querySelectorAll("[class^=answer_correct]");
              if (buttonList.length) {
                for (var j = 0; j < buttonList.length; j++) {
                  if (!buttonList[j].classList.contains('done')) {
                    buttonList[j].addEventListener('click', function () {
                      this.innerHTML = this.innerHTML.replace('display: none;', 'display: block;');
                      this.style = "background-color: #55BB38; color: white; border-radius: 2px; padding: 2px 4px 2px 4px; font-weight: bold";
                    });
                    buttonList[j].className += ' done';
                  }
                }
              }

              buttonList = paragraphs[i].querySelectorAll("[class^=answer_wrong]");
              if (buttonList.length) {
                for (var j = 0; j < buttonList.length; j++) {
                  if (!buttonList[j].classList.contains('done')) {
                    buttonList[j].addEventListener('click', function () {
                      this.innerHTML = this.innerHTML.replace('display: none;', 'display: block;');
                      this.style = "background-color: #D20026; color: white; border-radius: 2px; padding: 2px 4px 2px 4px; font-weight: bold";
                    });
                    buttonList[j].className += ' done';
                  }
                }
              }
            }
            this.finishTranslation = true;
          }

          /**
             * Translate one word in each sentence for a  paragraph.
             * NOTE: The words are split by sentences and not by spaces
             * to prevent inconsistent reforming of paragraphs due to
             * rogue spaces.
             * @param {Object} paragraph - Paragraph nodeType
             * @param {Object} filteredTMap - filtered translation map
             * @param {Object} iMap - HTML element for each translated word
             */
        }, {
          key: 'translateOneWord',
          value: function translateOneWord(paragraph, filteredTMap, iMap) {
            for (var i in paragraph.childNodes) {
              if (paragraph.childNodes[i].nodeType === 3) {
                if (!/^\s*$/.test(paragraph.childNodes[i].textContent)) {
                  if (this.srcLang == yandexLanguages.Chinese || this.srcLang == azureLanguages['Chinese Simplified'] || this.srcLang == azureLanguages['Chinese Traditional'] || this.srcLang == yandexLanguages.Japanese) {
                    var _sentences = paragraph.childNodes[i].textContent.split('。');
                    for (var j in _sentences) {
                      var words = _sentences[j].split('');
                      words = _.shuffle(words);
                      for (var k in words) {
                        // loop interrupted after one word is found
                        if (filteredTMap[words[k]]) {
                          var x = _sentences[j].replace(words[k], ' ' + iMap[filteredTMap[words[k]]] + '<sup class="countPage">(' + this.countedWords[words[k]] + ')</sup>' + ' ');
                          _sentences[j] = x;
                          break;
                        }
                      }
                    }
                    var newNode = document.createElement('span');
                    newNode.className = 'mtwProcessed';
                    newNode.innerHTML = _sentences.join('。');
                    paragraph.replaceChild(newNode, paragraph.childNodes[i]);
                  } else {
                    var sentences;
                    if (this.srcLang == yandexLanguages.Hindi) {
                      sentences = paragraph.childNodes[i].textContent.split('।');
                    } else if (this.srcLang == yandexLanguages.Armenian) {
                      sentences = paragraph.childNodes[i].textContent.split(':');
                    } else {
                      sentences = paragraph.childNodes[i].textContent.split('.');
                    }
                    for (var j in sentences) {
                      var words = sentences[j].split(' ');
                      var shuffleIndices = _.shuffle(Array.apply(null, { length: words.length }).map(Function.call, Number));
                      for (var k in words) {
                        // loop interrupted after one word is found
                        if (filteredTMap[words[shuffleIndices[k]]]) {
                          words[shuffleIndices[k]] = iMap[filteredTMap[words[shuffleIndices[k]]]] + '<sup class="countPage">(' + this.countedWords[words[shuffleIndices[k]]] + ')</sup>';
                          break;
                        }
                      }
                      sentences[j] = words.join(' ');
                    }
                    var newNode = document.createElement('span');
                    newNode.className = 'mtwProcessed';
                    if (this.srcLang == yandexLanguages.Hindi) {
                      newNode.innerHTML = sentences.join('।');
                    } else if (this.srcLang == yandexLanguages.Armenian) {
                      newNode.innerHTML = sentences.join(':');
                    } else {
                      newNode.innerHTML = sentences.join('.');
                    }
                    paragraph.replaceChild(newNode, paragraph.childNodes[i]);
                  }
                }
              }
            }
          }

          /**
             * Replaces source words with translated words
             * @param {Object} node - paragraph HTML node
             * @param {Object} tMap - translationMap
             * @param {Object} iTMap - HTML element for each translated word
             */
        }, {
          key: 'translateDeep',
          value: function translateDeep(paragraph, filteredTMap, iMap) {
            for (var i in paragraph.childNodes) {
              if (paragraph.childNodes[i].nodeType === 3) {
                if (!/^\s*$/.test(paragraph.childNodes[i].textContent)) {
                  if (this.srcLang == yandexLanguages.Chinese || this.srcLang == azureLanguages['Chinese Simplified'] || this.srcLang == azureLanguages['Chinese Traditional'] || this.srcLang == yandexLanguages.Japanese) {
                    var words = paragraph.childNodes[i].textContent.split('');
                    var toBeTranslated = Math.floor(words.length * this.translationProbability / 100);
                    var actualCount = 0;
                    for (var k in words) {
                      // loop interrupted after one wordlimit is crossed
                      if (filteredTMap[words[k]]) {
                        words[k] = ' ' + iMap[filteredTMap[words[k]]] + '<sup class="countPage">(' + this.countedWords[words[k]] + ')</sup>' + ' ';
                        actualCount += 1;
                      }
                      if (actualCount >= toBeTranslated) {
                        break;
                      }
                    }
                    var newNode = document.createElement('span');
                    newNode.className = 'mtwProcessed';
                    newNode.innerHTML = words.join(' ');
                    paragraph.replaceChild(newNode, paragraph.childNodes[i]);
                  } else {
                    var words = paragraph.childNodes[i].textContent.split(' ');
                    var toBeTranslated = Math.floor(words.length * this.translationProbability / 100);
                    var actualCount = 0;
                    for (var k in words) {
                      // loop interrupted after one wordlimit is crossed
                      if (filteredTMap[words[k]]) {
                        words[k] = iMap[filteredTMap[words[k]]] + '<sup class="countPage">(' + this.countedWords[words[k]] + ')</sup>';
                        actualCount += 1;
                      }
                      if (actualCount >= toBeTranslated) {
                        break;
                      }
                    }
                    var newNode = document.createElement('span');
                    newNode.className = 'mtwProcessed';
                    newNode.innerHTML = words.join(' ');
                    paragraph.replaceChild(newNode, paragraph.childNodes[i]);
                  }
                }
              }
            }
          }

          /**
             * Forms HTML element for each translated word
             * @param {Object} map - translation map
             * @returns {Object} iMap - HTML node for each translation
             */
        }, {
          key: 'invertMap',
          value: function invertMap(map) {
            var iMap = {};
            for (var e in map) {
              iMap[map[e]] = '<span data-sl="' + this.srcLang + '" data-tl="' + this.targetLanguage + '" data-query="' + e + '" data-original="' + e + '" data-translated="' + map[e];

              iMap[map[e]] = iMap[map[e]] + '" class="mtwTranslatedWord"';
              iMap[map[e]] = iMap[map[e]] + '>' + map[e] + '</span>';
            }

            return iMap;
          }

          /**
             * Toggles all the translated words in the active page.
             * To be called from `popup.js`
             */
        }, {
          key: 'toggleAllElements',
          value: function toggleAllElements() {
            this.translated = !this.translated;
            var words = document.querySelectorAll('.mtwTranslatedWord, .mtwTranslatedWorde, .mtwTranslatedWordn, .mtwTranslatedWordh');
            for (var i = 0; i < words.length; i++) {
              var word = words[i];
              if (isNaN(word.innerText)) {
                //isNaN returns true if parameter does NOT contain a number
                word.innerText = this.translated ? word.dataset.translated : word.dataset.original;
              }
            }
          }

          /**********************utils*******************************/

          /**
             * Remove special characters
             * @param {string} str - source string
             * @returns {string} str - escaped string
             */
        }, {
          key: 'escapeRegExp',
          value: function escapeRegExp(str) {
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
          }

          /**
             * Convert object to list
             * @param {Object} map - translation map
             * @param {function} filter
             */
        }, {
          key: 'toList',
          value: function toList(map, filter) {
            var list = [];
            for (var item in map) {
              if (filter(item, map[item])) {
                list.push(item);
              }
            }
            return list;
          }
        }, {
          key: 'shuffle',
          value: function shuffle(o) {
            for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
          }

          /**
             * Convert array to object
             * @param {Array} list
             * @returns {Object} map
             */
        }, {
          key: 'toMap',
          value: function toMap(list) {
            var map = {};
            for (var i = 0; i < list.length; i++) {
              map[list[i]] = 1;
            }
            return map;
          }
        }, {
          key: 'intersect',
          value: function intersect() {
            var i,
                all,
                shortest,
                nShortest,
                n,
                len,
                ret = [],
                obj = {},
                nOthers;
            nOthers = arguments.length - 1;
            nShortest = arguments[0].length;
            shortest = 0;
            for (i = 0; i <= nOthers; i++) {
              n = arguments[i].length;
              if (n < nShortest) {
                shortest = i;
                nShortest = n;
              }
            }
            for (i = 0; i <= nOthers; i++) {
              n = i === shortest ? 0 : i || shortest; //Read the shortest array first. Read the first array instead of the shortest
              len = arguments[n].length;
              for (var j = 0; j < len; j++) {
                var elem = arguments[n][j];
                if (obj[elem] === i - 1) {
                  if (i === nOthers) {
                    ret.push(elem);
                    obj[elem] = 0;
                  } else {
                    obj[elem] = i;
                  }
                } else if (i === 0) {
                  obj[elem] = 0;
                }
              }
            }
            return ret;
          }
        }, {
          key: 'sendError',
          value: function sendError(message) {
            if (message == '') message = 'Could not connect to ' + this.translator + ' Service .\nIt may be temporarily unavailable  or you may be experiencing  internet connection problems ';

            var date = new Date();

            var data = {
              message: message,
              date: date.toLocaleDateString(),
              time: date.toLocaleTimeString(),
              url: window.location.href
            };

            browser.runtime.sendMessage(data, function (response) {
              if (Notification.permission !== 'granted') {
                Notification.requestPermission(function (permission) {
                  // If the user accepts, resend notification
                  if (permission === 'granted') {
                    notify(message, '/views/options.html');
                  }
                });
              }

              notify(message, '/views/options.html');
            });
          }
        }, {
          key: 'clkTest',
          value: function clkTest(str) {
            var clk_main = new RegExp('[一-鿿]');
            var clk_extension = new RegExp('[㐀-䶿]');
            var clk_strokes = new RegExp('[㇀-㇯]');
            var clk_symbols_punctuation = new RegExp('[　-〿]');
            return clk_main.test(str) || clk_extension.test(str) || clk_strokes.test(str) || clk_symbols_punctuation.test(str);
          }
        }, {
          key: 'findWordsToday',
          value: function findWordsToday(toBeChecked, arr) {
            var returnVal = -1;
            for (var i = 1; i < arr.length; i++) {
              if (arr[i][0].toLowerCase() == toBeChecked.toLowerCase()) {
                returnVal = i;
              }
            }
            return returnVal;
          }
        }, {
          key: 'checkWordsTransToday',
          value: function checkWordsTransToday(arr) {
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDate();
            var dateForm = day + "--" + month + "--" + year;

            if (dateForm != arr[0]) {
              arr = [dateForm];
            }

            return arr;
          }
        }]);

        return ContentScript;
      })();

      _export('ContentScript', ContentScript);

      MTWTranslator = new ContentScript();

      browser.storage.local.get(null).then(function (res) {
        window.localStorage.setItem('extensionID', res.extensionID);
        if (res.activation === true) {
          var blacklistWebsiteReg = new RegExp(res.blacklist);
          if (blacklistWebsiteReg.test(document.URL) && res.blacklist !== '()') {
            console.log('[MTW] Blacklisted website');
          } else if (res.doNotTranslate === true) {
            console.log('[MTW] Do Not Translate selected.');
          } else if ((res.srcLang === '' || res.targetLanguage === '') && res.userDefinedOnly === false) {
            console.log('[MTW] No active pattern. Please select a pattern in the options page.');
          } else {
            if (res.useCommonWordsOnly === true) {
              console.log('[MTW] Using Common Words for Translation Only.');
            }
            MTWTranslator.initialize(res);
            window.onload = function () {
              function sleep(ms) {
                return new _Promise(function (resolve) {
                  return setTimeout(resolve, ms);
                });
              }
              if (MTWTranslator.finishTranslation) {
                var targetNode, scanCount, allow;
                var config;

                (function () {
                  var previousParagraphs = MTWTranslator.allparagraphs;
                  targetNode = document.body;
                  scanCount = 0;
                  allow = true;
                  config = { attributes: true, childList: true, subtree: true };

                  var observeChanges = new MutationObserver(function (List, obs) {
                    List.forEach(function (node) {
                      try {
                        var e = node.addedNodes[0].classList,
                            // each event emits only a single node
                        len = node.addedNodes.length;
                        if (node.type === 'childList' && len && allow && MTWTranslator.finishTranslation && !e.contains('mtwProcessed')) {
                          scanCount++;
                          if (scanCount >= previousParagraphs.length / 20) {
                            allow = false;
                            obs.disconnect();
                            if (MTWTranslator.finishTranslation) {
                              // check if existing translation is in process
                              scanCount = 0;
                              sleep(1000).then(function () {
                                MTWTranslator.initialize(res);
                                scanCount = 0;
                                obs.observe(targetNode, config);
                                allow = true;
                                return;
                              });
                            } else if (!MTWTranslator.finishTranslation || scanCount >= previousParagraphs.length / 20) {
                              scanCount = 0;
                            }
                          }
                        } else if (node.type === 'subtree' && len) {
                          scanCount++;
                        } else if (node.type === 'characterData' && len) {
                          scanCount++;
                        }
                      } catch (e) {
                        return;
                      }
                    });
                  });
                  observeChanges.observe(targetNode, config);
                })();
              }
            };

            MTWTranslator.injectCSS(res.translatedWordStyle);
            MTWTranslator.translate();
            var scrollingFn = debounce(function () {
              if (MTWTranslator.finishTranslation) {
                MTWTranslator.translate();
                MTWTranslator.finishTranslation = false;
              }
            }, 250, false);
            window.addEventListener('scroll', scrollingFn);
          }
        } else {
          console.log('[MTW] Switched off');
        }
      });

      browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.type === 'toggleAllElements') {
          MTWTranslator.toggleAllElements();
        } else if (request.type === 'getTranslatedWords') {
          if (request.action === 'storeSelection') {
            MTWTranslator.selectedRegion = window.getSelection().getRangeAt(0);
          }
          sendResponse({ translatedWords: MTWTranslator.filteredTMap });
        } else if (request.type = 'showTranslatedSentence') {
          (function () {
            var handler = function handler(e) {
              this.removeEventListener('click', handler);
              anchor.parentNode.removeChild(anchor);
            };

            var anchor = document.createElement('span');
            var dummy = document.createElement('span');
            dummy.innerText = request.data;
            dummy.classList.add('popover');
            dummy.classList.add('noselect');
            anchor.appendChild(dummy);
            anchor.classList.add('anchor');
            MTWTranslator.selectedRegion.insertNode(anchor);

            window.addEventListener('click', handler);
          })();
        }
      });attempts = 1;
    }
  };
});

})
(function(factory) {
  factory();
});