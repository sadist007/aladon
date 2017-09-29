webpackJsonp([1],{

/***/ "./node_modules/ansi-html/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ansiHTML

// Reference to https://github.com/sindresorhus/ansi-regex
var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/

var _defColors = {
  reset: ['fff', '000'], // [FOREGROUD_COLOR, BACKGROUND_COLOR]
  black: '000',
  red: 'ff0000',
  green: '209805',
  yellow: 'e8bf03',
  blue: '0000ff',
  magenta: 'ff00ff',
  cyan: '00ffee',
  lightgrey: 'f0f0f0',
  darkgrey: '888'
}
var _styles = {
  30: 'black',
  31: 'red',
  32: 'green',
  33: 'yellow',
  34: 'blue',
  35: 'magenta',
  36: 'cyan',
  37: 'lightgrey'
}
var _openTags = {
  '1': 'font-weight:bold', // bold
  '2': 'opacity:0.5', // dim
  '3': '<i>', // italic
  '4': '<u>', // underscore
  '8': 'display:none', // hidden
  '9': '<del>' // delete
}
var _closeTags = {
  '23': '</i>', // reset italic
  '24': '</u>', // reset underscore
  '29': '</del>' // reset delete
}

;[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
  _closeTags[n] = '</span>'
})

/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */
function ansiHTML (text) {
  // Returns the text if the string has no ANSI escape code.
  if (!_regANSI.test(text)) {
    return text
  }

  // Cache opened sequence.
  var ansiCodes = []
  // Replace with markup.
  var ret = text.replace(/\033\[(\d+)*m/g, function (match, seq) {
    var ot = _openTags[seq]
    if (ot) {
      // If current sequence has been opened, close it.
      if (!!~ansiCodes.indexOf(seq)) { // eslint-disable-line no-extra-boolean-cast
        ansiCodes.pop()
        return '</span>'
      }
      // Open tag.
      ansiCodes.push(seq)
      return ot[0] === '<' ? ot : '<span style="' + ot + ';">'
    }

    var ct = _closeTags[seq]
    if (ct) {
      // Pop sequence
      ansiCodes.pop()
      return ct
    }
    return ''
  })

  // Make sure tags are closed.
  var l = ansiCodes.length
  ;(l > 0) && (ret += Array(l + 1).join('</span>'))

  return ret
}

/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */
ansiHTML.setColors = function (colors) {
  if (typeof colors !== 'object') {
    throw new Error('`colors` parameter must be an Object.')
  }

  var _finalColors = {}
  for (var key in _defColors) {
    var hex = colors.hasOwnProperty(key) ? colors[key] : null
    if (!hex) {
      _finalColors[key] = _defColors[key]
      continue
    }
    if ('reset' === key) {
      if (typeof hex === 'string') {
        hex = [hex]
      }
      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
        return typeof h !== 'string'
      })) {
        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000')
      }
      var defHexColor = _defColors[key]
      if (!hex[0]) {
        hex[0] = defHexColor[0]
      }
      if (hex.length === 1 || !hex[1]) {
        hex = [hex[0]]
        hex.push(defHexColor[1])
      }

      hex = hex.slice(0, 2)
    } else if (typeof hex !== 'string') {
      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000')
    }
    _finalColors[key] = hex
  }
  _setTags(_finalColors)
}

/**
 * Reset colors.
 */
ansiHTML.reset = function () {
  _setTags(_defColors)
}

/**
 * Expose tags, including open and close.
 * @type {Object}
 */
ansiHTML.tags = {}

if (Object.defineProperty) {
  Object.defineProperty(ansiHTML.tags, 'open', {
    get: function () { return _openTags }
  })
  Object.defineProperty(ansiHTML.tags, 'close', {
    get: function () { return _closeTags }
  })
} else {
  ansiHTML.tags.open = _openTags
  ansiHTML.tags.close = _closeTags
}

function _setTags (colors) {
  // reset all
  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]
  // inverse
  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]
  // dark grey
  _openTags['90'] = 'color:#' + colors.darkgrey

  for (var code in _styles) {
    var color = _styles[code]
    var oriColor = colors[color] || '000'
    _openTags[code] = 'color:#' + oriColor
    code = parseInt(code)
    _openTags[(code + 10).toString()] = 'background:#' + oriColor
  }
}

ansiHTML.reset()


/***/ }),

/***/ "./node_modules/ansi-regex/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function () {
	return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
};


/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.eot":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/glyphicons-halflings-regular.eot";

/***/ }),

/***/ "./node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/glyphicons-halflings-regular.svg";

/***/ }),

/***/ "./node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/glyphicons-halflings-regular.ttf";

/***/ }),

/***/ "./node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/glyphicons-halflings-regular.woff";

/***/ }),

/***/ "./node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/glyphicons-halflings-regular.woff2";

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__("./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__("./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__("./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__("./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__("./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__("./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__("./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__("./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__("./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__("./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__("./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__("./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__("./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__("./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__("./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__("./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__("./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__("./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__("./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__("./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("./node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__("./node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__("./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__("./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__("./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__("./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__("./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__("./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__("./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__("./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__("./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__("./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__("./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__("./node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__("./node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/home/sadist/nodejs/aladon/src/styles\"]}!./src/App.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".wpng-intro-container{background-color:#1876d3;color:#fff;padding:1rem}.wpng-media-assets-counters-container{border:1px solid #818181;padding:1rem;margin-top:3rem;margin-bottom:3rem}.wpng-epub-container{color:#fff;background-color:#9250d8;padding:1rem}.wpng-summary-container{background-color:#eaf4ff;border:#1876d3;padding:1rem;margin-top:3rem}@media only screen and (min-width:768px){.wpng-summary-container{margin-top:0}}", "", {"version":3,"sources":["/home/sadist/nodejs/aladon/src/src/App.scss"],"names":[],"mappings":"AAAA,sBACI,yBAAyB,AACzB,WAAc,AACd,YAAa,CAChB,AAED,sCACI,yBAAyB,AACzB,aAAa,AACb,gBAAgB,AAChB,kBAAmB,CACtB,AAED,qBACI,WAAc,AACd,yBAAyB,AACzB,YAAa,CAChB,AAED,wBACI,yBAAyB,AACzB,eAAe,AACf,aAAa,AACb,eAAgB,CACnB,AAED,yCACI,wBACI,YAAgB,CACnB,CAAA","file":"App.scss","sourcesContent":[".wpng-intro-container {\n    background-color: #1876D3;\n    color: #FFFFFF;\n    padding: 1rem;\n}\n\n.wpng-media-assets-counters-container {\n    border: 1px solid #818181;\n    padding: 1rem;\n    margin-top: 3rem;\n    margin-bottom: 3rem;\n}\n\n.wpng-epub-container {\n    color: #FFFFFF;\n    background-color: #9250D8;\n    padding: 1rem;\n}\n\n.wpng-summary-container {\n    background-color: #EAF4FF;\n    border: #1876D3;\n    padding: 1rem;\n    margin-top: 3rem;\n}\n\n@media only screen and (min-width : 768px) {\n    .wpng-summary-container {\n        margin-top: 0rem;\n    }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/home/sadist/nodejs/aladon/src/styles\"]}!./src/index.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}@media print{*,:after,:before{background:transparent!important;color:#000!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"#\"]:after,a[href^=\"javascript:\"]:after{content:\"\"}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}.navbar{display:none}.btn>.caret,.dropup>.btn>.caret{border-top-color:#000!important}.label{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #ddd!important}}@font-face{font-family:Glyphicons Halflings;src:url(" + __webpack_require__("./node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.eot") + ");src:url(" + __webpack_require__("./node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.eot") + "?#iefix) format(\"embedded-opentype\"),url(" + __webpack_require__("./node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff2") + ") format(\"woff2\"),url(" + __webpack_require__("./node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff") + ") format(\"woff\"),url(" + __webpack_require__("./node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.ttf") + ") format(\"truetype\"),url(" + __webpack_require__("./node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.svg") + "#glyphicons_halflingsregular) format(\"svg\")}.glyphicon{position:relative;top:1px;display:inline-block;font-family:Glyphicons Halflings;font-style:normal;font-weight:400;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.glyphicon-asterisk:before{content:\"*\"}.glyphicon-plus:before{content:\"+\"}.glyphicon-eur:before,.glyphicon-euro:before{content:\"\\20AC\"}.glyphicon-minus:before{content:\"\\2212\"}.glyphicon-cloud:before{content:\"\\2601\"}.glyphicon-envelope:before{content:\"\\2709\"}.glyphicon-pencil:before{content:\"\\270F\"}.glyphicon-glass:before{content:\"\\E001\"}.glyphicon-music:before{content:\"\\E002\"}.glyphicon-search:before{content:\"\\E003\"}.glyphicon-heart:before{content:\"\\E005\"}.glyphicon-star:before{content:\"\\E006\"}.glyphicon-star-empty:before{content:\"\\E007\"}.glyphicon-user:before{content:\"\\E008\"}.glyphicon-film:before{content:\"\\E009\"}.glyphicon-th-large:before{content:\"\\E010\"}.glyphicon-th:before{content:\"\\E011\"}.glyphicon-th-list:before{content:\"\\E012\"}.glyphicon-ok:before{content:\"\\E013\"}.glyphicon-remove:before{content:\"\\E014\"}.glyphicon-zoom-in:before{content:\"\\E015\"}.glyphicon-zoom-out:before{content:\"\\E016\"}.glyphicon-off:before{content:\"\\E017\"}.glyphicon-signal:before{content:\"\\E018\"}.glyphicon-cog:before{content:\"\\E019\"}.glyphicon-trash:before{content:\"\\E020\"}.glyphicon-home:before{content:\"\\E021\"}.glyphicon-file:before{content:\"\\E022\"}.glyphicon-time:before{content:\"\\E023\"}.glyphicon-road:before{content:\"\\E024\"}.glyphicon-download-alt:before{content:\"\\E025\"}.glyphicon-download:before{content:\"\\E026\"}.glyphicon-upload:before{content:\"\\E027\"}.glyphicon-inbox:before{content:\"\\E028\"}.glyphicon-play-circle:before{content:\"\\E029\"}.glyphicon-repeat:before{content:\"\\E030\"}.glyphicon-refresh:before{content:\"\\E031\"}.glyphicon-list-alt:before{content:\"\\E032\"}.glyphicon-lock:before{content:\"\\E033\"}.glyphicon-flag:before{content:\"\\E034\"}.glyphicon-headphones:before{content:\"\\E035\"}.glyphicon-volume-off:before{content:\"\\E036\"}.glyphicon-volume-down:before{content:\"\\E037\"}.glyphicon-volume-up:before{content:\"\\E038\"}.glyphicon-qrcode:before{content:\"\\E039\"}.glyphicon-barcode:before{content:\"\\E040\"}.glyphicon-tag:before{content:\"\\E041\"}.glyphicon-tags:before{content:\"\\E042\"}.glyphicon-book:before{content:\"\\E043\"}.glyphicon-bookmark:before{content:\"\\E044\"}.glyphicon-print:before{content:\"\\E045\"}.glyphicon-camera:before{content:\"\\E046\"}.glyphicon-font:before{content:\"\\E047\"}.glyphicon-bold:before{content:\"\\E048\"}.glyphicon-italic:before{content:\"\\E049\"}.glyphicon-text-height:before{content:\"\\E050\"}.glyphicon-text-width:before{content:\"\\E051\"}.glyphicon-align-left:before{content:\"\\E052\"}.glyphicon-align-center:before{content:\"\\E053\"}.glyphicon-align-right:before{content:\"\\E054\"}.glyphicon-align-justify:before{content:\"\\E055\"}.glyphicon-list:before{content:\"\\E056\"}.glyphicon-indent-left:before{content:\"\\E057\"}.glyphicon-indent-right:before{content:\"\\E058\"}.glyphicon-facetime-video:before{content:\"\\E059\"}.glyphicon-picture:before{content:\"\\E060\"}.glyphicon-map-marker:before{content:\"\\E062\"}.glyphicon-adjust:before{content:\"\\E063\"}.glyphicon-tint:before{content:\"\\E064\"}.glyphicon-edit:before{content:\"\\E065\"}.glyphicon-share:before{content:\"\\E066\"}.glyphicon-check:before{content:\"\\E067\"}.glyphicon-move:before{content:\"\\E068\"}.glyphicon-step-backward:before{content:\"\\E069\"}.glyphicon-fast-backward:before{content:\"\\E070\"}.glyphicon-backward:before{content:\"\\E071\"}.glyphicon-play:before{content:\"\\E072\"}.glyphicon-pause:before{content:\"\\E073\"}.glyphicon-stop:before{content:\"\\E074\"}.glyphicon-forward:before{content:\"\\E075\"}.glyphicon-fast-forward:before{content:\"\\E076\"}.glyphicon-step-forward:before{content:\"\\E077\"}.glyphicon-eject:before{content:\"\\E078\"}.glyphicon-chevron-left:before{content:\"\\E079\"}.glyphicon-chevron-right:before{content:\"\\E080\"}.glyphicon-plus-sign:before{content:\"\\E081\"}.glyphicon-minus-sign:before{content:\"\\E082\"}.glyphicon-remove-sign:before{content:\"\\E083\"}.glyphicon-ok-sign:before{content:\"\\E084\"}.glyphicon-question-sign:before{content:\"\\E085\"}.glyphicon-info-sign:before{content:\"\\E086\"}.glyphicon-screenshot:before{content:\"\\E087\"}.glyphicon-remove-circle:before{content:\"\\E088\"}.glyphicon-ok-circle:before{content:\"\\E089\"}.glyphicon-ban-circle:before{content:\"\\E090\"}.glyphicon-arrow-left:before{content:\"\\E091\"}.glyphicon-arrow-right:before{content:\"\\E092\"}.glyphicon-arrow-up:before{content:\"\\E093\"}.glyphicon-arrow-down:before{content:\"\\E094\"}.glyphicon-share-alt:before{content:\"\\E095\"}.glyphicon-resize-full:before{content:\"\\E096\"}.glyphicon-resize-small:before{content:\"\\E097\"}.glyphicon-exclamation-sign:before{content:\"\\E101\"}.glyphicon-gift:before{content:\"\\E102\"}.glyphicon-leaf:before{content:\"\\E103\"}.glyphicon-fire:before{content:\"\\E104\"}.glyphicon-eye-open:before{content:\"\\E105\"}.glyphicon-eye-close:before{content:\"\\E106\"}.glyphicon-warning-sign:before{content:\"\\E107\"}.glyphicon-plane:before{content:\"\\E108\"}.glyphicon-calendar:before{content:\"\\E109\"}.glyphicon-random:before{content:\"\\E110\"}.glyphicon-comment:before{content:\"\\E111\"}.glyphicon-magnet:before{content:\"\\E112\"}.glyphicon-chevron-up:before{content:\"\\E113\"}.glyphicon-chevron-down:before{content:\"\\E114\"}.glyphicon-retweet:before{content:\"\\E115\"}.glyphicon-shopping-cart:before{content:\"\\E116\"}.glyphicon-folder-close:before{content:\"\\E117\"}.glyphicon-folder-open:before{content:\"\\E118\"}.glyphicon-resize-vertical:before{content:\"\\E119\"}.glyphicon-resize-horizontal:before{content:\"\\E120\"}.glyphicon-hdd:before{content:\"\\E121\"}.glyphicon-bullhorn:before{content:\"\\E122\"}.glyphicon-bell:before{content:\"\\E123\"}.glyphicon-certificate:before{content:\"\\E124\"}.glyphicon-thumbs-up:before{content:\"\\E125\"}.glyphicon-thumbs-down:before{content:\"\\E126\"}.glyphicon-hand-right:before{content:\"\\E127\"}.glyphicon-hand-left:before{content:\"\\E128\"}.glyphicon-hand-up:before{content:\"\\E129\"}.glyphicon-hand-down:before{content:\"\\E130\"}.glyphicon-circle-arrow-right:before{content:\"\\E131\"}.glyphicon-circle-arrow-left:before{content:\"\\E132\"}.glyphicon-circle-arrow-up:before{content:\"\\E133\"}.glyphicon-circle-arrow-down:before{content:\"\\E134\"}.glyphicon-globe:before{content:\"\\E135\"}.glyphicon-wrench:before{content:\"\\E136\"}.glyphicon-tasks:before{content:\"\\E137\"}.glyphicon-filter:before{content:\"\\E138\"}.glyphicon-briefcase:before{content:\"\\E139\"}.glyphicon-fullscreen:before{content:\"\\E140\"}.glyphicon-dashboard:before{content:\"\\E141\"}.glyphicon-paperclip:before{content:\"\\E142\"}.glyphicon-heart-empty:before{content:\"\\E143\"}.glyphicon-link:before{content:\"\\E144\"}.glyphicon-phone:before{content:\"\\E145\"}.glyphicon-pushpin:before{content:\"\\E146\"}.glyphicon-usd:before{content:\"\\E148\"}.glyphicon-gbp:before{content:\"\\E149\"}.glyphicon-sort:before{content:\"\\E150\"}.glyphicon-sort-by-alphabet:before{content:\"\\E151\"}.glyphicon-sort-by-alphabet-alt:before{content:\"\\E152\"}.glyphicon-sort-by-order:before{content:\"\\E153\"}.glyphicon-sort-by-order-alt:before{content:\"\\E154\"}.glyphicon-sort-by-attributes:before{content:\"\\E155\"}.glyphicon-sort-by-attributes-alt:before{content:\"\\E156\"}.glyphicon-unchecked:before{content:\"\\E157\"}.glyphicon-expand:before{content:\"\\E158\"}.glyphicon-collapse-down:before{content:\"\\E159\"}.glyphicon-collapse-up:before{content:\"\\E160\"}.glyphicon-log-in:before{content:\"\\E161\"}.glyphicon-flash:before{content:\"\\E162\"}.glyphicon-log-out:before{content:\"\\E163\"}.glyphicon-new-window:before{content:\"\\E164\"}.glyphicon-record:before{content:\"\\E165\"}.glyphicon-save:before{content:\"\\E166\"}.glyphicon-open:before{content:\"\\E167\"}.glyphicon-saved:before{content:\"\\E168\"}.glyphicon-import:before{content:\"\\E169\"}.glyphicon-export:before{content:\"\\E170\"}.glyphicon-send:before{content:\"\\E171\"}.glyphicon-floppy-disk:before{content:\"\\E172\"}.glyphicon-floppy-saved:before{content:\"\\E173\"}.glyphicon-floppy-remove:before{content:\"\\E174\"}.glyphicon-floppy-save:before{content:\"\\E175\"}.glyphicon-floppy-open:before{content:\"\\E176\"}.glyphicon-credit-card:before{content:\"\\E177\"}.glyphicon-transfer:before{content:\"\\E178\"}.glyphicon-cutlery:before{content:\"\\E179\"}.glyphicon-header:before{content:\"\\E180\"}.glyphicon-compressed:before{content:\"\\E181\"}.glyphicon-earphone:before{content:\"\\E182\"}.glyphicon-phone-alt:before{content:\"\\E183\"}.glyphicon-tower:before{content:\"\\E184\"}.glyphicon-stats:before{content:\"\\E185\"}.glyphicon-sd-video:before{content:\"\\E186\"}.glyphicon-hd-video:before{content:\"\\E187\"}.glyphicon-subtitles:before{content:\"\\E188\"}.glyphicon-sound-stereo:before{content:\"\\E189\"}.glyphicon-sound-dolby:before{content:\"\\E190\"}.glyphicon-sound-5-1:before{content:\"\\E191\"}.glyphicon-sound-6-1:before{content:\"\\E192\"}.glyphicon-sound-7-1:before{content:\"\\E193\"}.glyphicon-copyright-mark:before{content:\"\\E194\"}.glyphicon-registration-mark:before{content:\"\\E195\"}.glyphicon-cloud-download:before{content:\"\\E197\"}.glyphicon-cloud-upload:before{content:\"\\E198\"}.glyphicon-tree-conifer:before{content:\"\\E199\"}.glyphicon-tree-deciduous:before{content:\"\\E200\"}.glyphicon-cd:before{content:\"\\E201\"}.glyphicon-save-file:before{content:\"\\E202\"}.glyphicon-open-file:before{content:\"\\E203\"}.glyphicon-level-up:before{content:\"\\E204\"}.glyphicon-copy:before{content:\"\\E205\"}.glyphicon-paste:before{content:\"\\E206\"}.glyphicon-alert:before{content:\"\\E209\"}.glyphicon-equalizer:before{content:\"\\E210\"}.glyphicon-king:before{content:\"\\E211\"}.glyphicon-queen:before{content:\"\\E212\"}.glyphicon-pawn:before{content:\"\\E213\"}.glyphicon-bishop:before{content:\"\\E214\"}.glyphicon-knight:before{content:\"\\E215\"}.glyphicon-baby-formula:before{content:\"\\E216\"}.glyphicon-tent:before{content:\"\\26FA\"}.glyphicon-blackboard:before{content:\"\\E218\"}.glyphicon-bed:before{content:\"\\E219\"}.glyphicon-apple:before{content:\"\\F8FF\"}.glyphicon-erase:before{content:\"\\E221\"}.glyphicon-hourglass:before{content:\"\\231B\"}.glyphicon-lamp:before{content:\"\\E223\"}.glyphicon-duplicate:before{content:\"\\E224\"}.glyphicon-piggy-bank:before{content:\"\\E225\"}.glyphicon-scissors:before{content:\"\\E226\"}.glyphicon-bitcoin:before,.glyphicon-btc:before,.glyphicon-xbt:before{content:\"\\E227\"}.glyphicon-jpy:before,.glyphicon-yen:before{content:\"\\A5\"}.glyphicon-rub:before,.glyphicon-ruble:before{content:\"\\20BD\"}.glyphicon-scale:before{content:\"\\E230\"}.glyphicon-ice-lolly:before{content:\"\\E231\"}.glyphicon-ice-lolly-tasted:before{content:\"\\E232\"}.glyphicon-education:before{content:\"\\E233\"}.glyphicon-option-horizontal:before{content:\"\\E234\"}.glyphicon-option-vertical:before{content:\"\\E235\"}.glyphicon-menu-hamburger:before{content:\"\\E236\"}.glyphicon-modal-window:before{content:\"\\E237\"}.glyphicon-oil:before{content:\"\\E238\"}.glyphicon-grain:before{content:\"\\E239\"}.glyphicon-sunglasses:before{content:\"\\E240\"}.glyphicon-text-size:before{content:\"\\E241\"}.glyphicon-text-color:before{content:\"\\E242\"}.glyphicon-text-background:before{content:\"\\E243\"}.glyphicon-object-align-top:before{content:\"\\E244\"}.glyphicon-object-align-bottom:before{content:\"\\E245\"}.glyphicon-object-align-horizontal:before{content:\"\\E246\"}.glyphicon-object-align-left:before{content:\"\\E247\"}.glyphicon-object-align-vertical:before{content:\"\\E248\"}.glyphicon-object-align-right:before{content:\"\\E249\"}.glyphicon-triangle-right:before{content:\"\\E250\"}.glyphicon-triangle-left:before{content:\"\\E251\"}.glyphicon-triangle-bottom:before{content:\"\\E252\"}.glyphicon-triangle-top:before{content:\"\\E253\"}.glyphicon-console:before{content:\"\\E254\"}.glyphicon-superscript:before{content:\"\\E255\"}.glyphicon-subscript:before{content:\"\\E256\"}.glyphicon-menu-left:before{content:\"\\E257\"}.glyphicon-menu-right:before{content:\"\\E258\"}.glyphicon-menu-down:before{content:\"\\E259\"}.glyphicon-menu-up:before{content:\"\\E260\"}*,:after,:before{box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:transparent}body{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857;color:#333;background-color:#fff}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#337ab7;text-decoration:none}a:focus,a:hover{color:#23527c;text-decoration:underline}a:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.img-responsive{display:block;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{padding:4px;line-height:1.42857;background-color:#fff;border:1px solid #ddd;border-radius:4px;transition:all .2s ease-in-out;display:inline-block;max-width:100%;height:auto}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}[role=button]{cursor:pointer}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{font-family:inherit;font-weight:500;line-height:1.1;color:inherit}.h1 .small,.h1 small,.h2 .small,.h2 small,.h3 .small,.h3 small,.h4 .small,.h4 small,.h5 .small,.h5 small,.h6 .small,.h6 small,h1 .small,h1 small,h2 .small,h2 small,h3 .small,h3 small,h4 .small,h4 small,h5 .small,h5 small,h6 .small,h6 small{font-weight:400;line-height:1;color:#777}.h1,.h2,.h3,h1,h2,h3{margin-top:20px;margin-bottom:10px}.h1 .small,.h1 small,.h2 .small,.h2 small,.h3 .small,.h3 small,h1 .small,h1 small,h2 .small,h2 small,h3 .small,h3 small{font-size:65%}.h4,.h5,.h6,h4,h5,h6{margin-top:10px;margin-bottom:10px}.h4 .small,.h4 small,.h5 .small,.h5 small,.h6 .small,.h6 small,h4 .small,h4 small,h5 .small,h5 small,h6 .small,h6 small{font-size:75%}.h1,h1{font-size:36px}.h2,h2{font-size:30px}.h3,h3{font-size:24px}.h4,h4{font-size:18px}.h5,h5{font-size:14px}.h6,h6{font-size:12px}p{margin:0 0 10px}.lead{margin-bottom:20px;font-size:16px;font-weight:300;line-height:1.4}@media (min-width:768px){.lead{font-size:21px}}.small,small{font-size:85%}.mark,mark{background-color:#fcf8e3;padding:.2em}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-justify{text-align:justify}.text-nowrap{white-space:nowrap}.text-lowercase{text-transform:lowercase}.initialism,.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.text-muted{color:#777}.text-primary{color:#337ab7}a.text-primary:focus,a.text-primary:hover{color:#286090}.text-success{color:#3c763d}a.text-success:focus,a.text-success:hover{color:#2b542c}.text-info{color:#31708f}a.text-info:focus,a.text-info:hover{color:#245269}.text-warning{color:#8a6d3b}a.text-warning:focus,a.text-warning:hover{color:#66512c}.text-danger{color:#a94442}a.text-danger:focus,a.text-danger:hover{color:#843534}.bg-primary{color:#fff;background-color:#337ab7}a.bg-primary:focus,a.bg-primary:hover{background-color:#286090}.bg-success{background-color:#dff0d8}a.bg-success:focus,a.bg-success:hover{background-color:#c1e2b3}.bg-info{background-color:#d9edf7}a.bg-info:focus,a.bg-info:hover{background-color:#afd9ee}.bg-warning{background-color:#fcf8e3}a.bg-warning:focus,a.bg-warning:hover{background-color:#f7ecb5}.bg-danger{background-color:#f2dede}a.bg-danger:focus,a.bg-danger:hover{background-color:#e4b9b9}.page-header{padding-bottom:9px;margin:40px 0 20px;border-bottom:1px solid #eee}ol,ul{margin-top:0;margin-bottom:10px}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}.list-inline,.list-unstyled{padding-left:0;list-style:none}.list-inline{margin-left:-5px}.list-inline>li{display:inline-block;padding-left:5px;padding-right:5px}dl{margin-top:0;margin-bottom:20px}dd,dt{line-height:1.42857}dt{font-weight:700}dd{margin-left:0}.dl-horizontal dd:after,.dl-horizontal dd:before{content:\" \";display:table}.dl-horizontal dd:after{clear:both}@media (min-width:768px){.dl-horizontal dt{float:left;width:160px;clear:left;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dl-horizontal dd{margin-left:180px}}abbr[data-original-title],abbr[title]{cursor:help;border-bottom:1px dotted #777}.initialism{font-size:90%}blockquote{padding:10px 20px;margin:0 0 20px;font-size:17.5px;border-left:5px solid #eee}blockquote ol:last-child,blockquote p:last-child,blockquote ul:last-child{margin-bottom:0}blockquote .small,blockquote footer,blockquote small{display:block;font-size:80%;line-height:1.42857;color:#777}blockquote .small:before,blockquote footer:before,blockquote small:before{content:\"\\2014   \\A0\"}.blockquote-reverse,blockquote.pull-right{padding-right:15px;padding-left:0;border-right:5px solid #eee;border-left:0;text-align:right}.blockquote-reverse .small:before,.blockquote-reverse footer:before,.blockquote-reverse small:before,blockquote.pull-right .small:before,blockquote.pull-right footer:before,blockquote.pull-right small:before{content:\"\"}.blockquote-reverse .small:after,.blockquote-reverse footer:after,.blockquote-reverse small:after,blockquote.pull-right .small:after,blockquote.pull-right footer:after,blockquote.pull-right small:after{content:\"\\A0   \\2014\"}address{margin-bottom:20px;font-style:normal;line-height:1.42857}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,Courier New,monospace}code{color:#c7254e;background-color:#f9f2f4;border-radius:4px}code,kbd{padding:2px 4px;font-size:90%}kbd{color:#fff;background-color:#333;border-radius:3px;box-shadow:inset 0 -1px 0 rgba(0,0,0,.25)}kbd kbd{padding:0;font-size:100%;font-weight:700;box-shadow:none}pre{display:block;padding:9.5px;margin:0 0 10px;font-size:13px;line-height:1.42857;word-break:break-all;word-wrap:break-word;color:#333;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;background-color:transparent;border-radius:0}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}.container:after,.container:before{content:\" \";display:table}.container:after{clear:both}@media (min-width:768px){.container{width:750px}}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.container-fluid{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}.container-fluid:after,.container-fluid:before{content:\" \";display:table}.container-fluid:after{clear:both}.row{margin-left:-15px;margin-right:-15px}.row:after,.row:before{content:\" \";display:table}.row:after{clear:both}.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12{position:relative;min-height:1px;padding-left:15px;padding-right:15px}.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12{float:left}.col-xs-1{width:8.33333%}.col-xs-2{width:16.66667%}.col-xs-3{width:25%}.col-xs-4{width:33.33333%}.col-xs-5{width:41.66667%}.col-xs-6{width:50%}.col-xs-7{width:58.33333%}.col-xs-8{width:66.66667%}.col-xs-9{width:75%}.col-xs-10{width:83.33333%}.col-xs-11{width:91.66667%}.col-xs-12{width:100%}.col-xs-pull-0{right:auto}.col-xs-pull-1{right:8.33333%}.col-xs-pull-2{right:16.66667%}.col-xs-pull-3{right:25%}.col-xs-pull-4{right:33.33333%}.col-xs-pull-5{right:41.66667%}.col-xs-pull-6{right:50%}.col-xs-pull-7{right:58.33333%}.col-xs-pull-8{right:66.66667%}.col-xs-pull-9{right:75%}.col-xs-pull-10{right:83.33333%}.col-xs-pull-11{right:91.66667%}.col-xs-pull-12{right:100%}.col-xs-push-0{left:auto}.col-xs-push-1{left:8.33333%}.col-xs-push-2{left:16.66667%}.col-xs-push-3{left:25%}.col-xs-push-4{left:33.33333%}.col-xs-push-5{left:41.66667%}.col-xs-push-6{left:50%}.col-xs-push-7{left:58.33333%}.col-xs-push-8{left:66.66667%}.col-xs-push-9{left:75%}.col-xs-push-10{left:83.33333%}.col-xs-push-11{left:91.66667%}.col-xs-push-12{left:100%}.col-xs-offset-0{margin-left:0}.col-xs-offset-1{margin-left:8.33333%}.col-xs-offset-2{margin-left:16.66667%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-4{margin-left:33.33333%}.col-xs-offset-5{margin-left:41.66667%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-7{margin-left:58.33333%}.col-xs-offset-8{margin-left:66.66667%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-10{margin-left:83.33333%}.col-xs-offset-11{margin-left:91.66667%}.col-xs-offset-12{margin-left:100%}@media (min-width:768px){.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12{float:left}.col-sm-1{width:8.33333%}.col-sm-2{width:16.66667%}.col-sm-3{width:25%}.col-sm-4{width:33.33333%}.col-sm-5{width:41.66667%}.col-sm-6{width:50%}.col-sm-7{width:58.33333%}.col-sm-8{width:66.66667%}.col-sm-9{width:75%}.col-sm-10{width:83.33333%}.col-sm-11{width:91.66667%}.col-sm-12{width:100%}.col-sm-pull-0{right:auto}.col-sm-pull-1{right:8.33333%}.col-sm-pull-2{right:16.66667%}.col-sm-pull-3{right:25%}.col-sm-pull-4{right:33.33333%}.col-sm-pull-5{right:41.66667%}.col-sm-pull-6{right:50%}.col-sm-pull-7{right:58.33333%}.col-sm-pull-8{right:66.66667%}.col-sm-pull-9{right:75%}.col-sm-pull-10{right:83.33333%}.col-sm-pull-11{right:91.66667%}.col-sm-pull-12{right:100%}.col-sm-push-0{left:auto}.col-sm-push-1{left:8.33333%}.col-sm-push-2{left:16.66667%}.col-sm-push-3{left:25%}.col-sm-push-4{left:33.33333%}.col-sm-push-5{left:41.66667%}.col-sm-push-6{left:50%}.col-sm-push-7{left:58.33333%}.col-sm-push-8{left:66.66667%}.col-sm-push-9{left:75%}.col-sm-push-10{left:83.33333%}.col-sm-push-11{left:91.66667%}.col-sm-push-12{left:100%}.col-sm-offset-0{margin-left:0}.col-sm-offset-1{margin-left:8.33333%}.col-sm-offset-2{margin-left:16.66667%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-4{margin-left:33.33333%}.col-sm-offset-5{margin-left:41.66667%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-7{margin-left:58.33333%}.col-sm-offset-8{margin-left:66.66667%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-10{margin-left:83.33333%}.col-sm-offset-11{margin-left:91.66667%}.col-sm-offset-12{margin-left:100%}}@media (min-width:992px){.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12{float:left}.col-md-1{width:8.33333%}.col-md-2{width:16.66667%}.col-md-3{width:25%}.col-md-4{width:33.33333%}.col-md-5{width:41.66667%}.col-md-6{width:50%}.col-md-7{width:58.33333%}.col-md-8{width:66.66667%}.col-md-9{width:75%}.col-md-10{width:83.33333%}.col-md-11{width:91.66667%}.col-md-12{width:100%}.col-md-pull-0{right:auto}.col-md-pull-1{right:8.33333%}.col-md-pull-2{right:16.66667%}.col-md-pull-3{right:25%}.col-md-pull-4{right:33.33333%}.col-md-pull-5{right:41.66667%}.col-md-pull-6{right:50%}.col-md-pull-7{right:58.33333%}.col-md-pull-8{right:66.66667%}.col-md-pull-9{right:75%}.col-md-pull-10{right:83.33333%}.col-md-pull-11{right:91.66667%}.col-md-pull-12{right:100%}.col-md-push-0{left:auto}.col-md-push-1{left:8.33333%}.col-md-push-2{left:16.66667%}.col-md-push-3{left:25%}.col-md-push-4{left:33.33333%}.col-md-push-5{left:41.66667%}.col-md-push-6{left:50%}.col-md-push-7{left:58.33333%}.col-md-push-8{left:66.66667%}.col-md-push-9{left:75%}.col-md-push-10{left:83.33333%}.col-md-push-11{left:91.66667%}.col-md-push-12{left:100%}.col-md-offset-0{margin-left:0}.col-md-offset-1{margin-left:8.33333%}.col-md-offset-2{margin-left:16.66667%}.col-md-offset-3{margin-left:25%}.col-md-offset-4{margin-left:33.33333%}.col-md-offset-5{margin-left:41.66667%}.col-md-offset-6{margin-left:50%}.col-md-offset-7{margin-left:58.33333%}.col-md-offset-8{margin-left:66.66667%}.col-md-offset-9{margin-left:75%}.col-md-offset-10{margin-left:83.33333%}.col-md-offset-11{margin-left:91.66667%}.col-md-offset-12{margin-left:100%}}@media (min-width:1200px){.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12{float:left}.col-lg-1{width:8.33333%}.col-lg-2{width:16.66667%}.col-lg-3{width:25%}.col-lg-4{width:33.33333%}.col-lg-5{width:41.66667%}.col-lg-6{width:50%}.col-lg-7{width:58.33333%}.col-lg-8{width:66.66667%}.col-lg-9{width:75%}.col-lg-10{width:83.33333%}.col-lg-11{width:91.66667%}.col-lg-12{width:100%}.col-lg-pull-0{right:auto}.col-lg-pull-1{right:8.33333%}.col-lg-pull-2{right:16.66667%}.col-lg-pull-3{right:25%}.col-lg-pull-4{right:33.33333%}.col-lg-pull-5{right:41.66667%}.col-lg-pull-6{right:50%}.col-lg-pull-7{right:58.33333%}.col-lg-pull-8{right:66.66667%}.col-lg-pull-9{right:75%}.col-lg-pull-10{right:83.33333%}.col-lg-pull-11{right:91.66667%}.col-lg-pull-12{right:100%}.col-lg-push-0{left:auto}.col-lg-push-1{left:8.33333%}.col-lg-push-2{left:16.66667%}.col-lg-push-3{left:25%}.col-lg-push-4{left:33.33333%}.col-lg-push-5{left:41.66667%}.col-lg-push-6{left:50%}.col-lg-push-7{left:58.33333%}.col-lg-push-8{left:66.66667%}.col-lg-push-9{left:75%}.col-lg-push-10{left:83.33333%}.col-lg-push-11{left:91.66667%}.col-lg-push-12{left:100%}.col-lg-offset-0{margin-left:0}.col-lg-offset-1{margin-left:8.33333%}.col-lg-offset-2{margin-left:16.66667%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-4{margin-left:33.33333%}.col-lg-offset-5{margin-left:41.66667%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-7{margin-left:58.33333%}.col-lg-offset-8{margin-left:66.66667%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-10{margin-left:83.33333%}.col-lg-offset-11{margin-left:91.66667%}.col-lg-offset-12{margin-left:100%}}table{background-color:transparent}caption{padding-top:8px;padding-bottom:8px;color:#777}caption,th{text-align:left}.table{width:100%;max-width:100%;margin-bottom:20px}.table>tbody>tr>td,.table>tbody>tr>th,.table>tfoot>tr>td,.table>tfoot>tr>th,.table>thead>tr>td,.table>thead>tr>th{padding:8px;line-height:1.42857;vertical-align:top;border-top:1px solid #ddd}.table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.table>caption+thead>tr:first-child>td,.table>caption+thead>tr:first-child>th,.table>colgroup+thead>tr:first-child>td,.table>colgroup+thead>tr:first-child>th,.table>thead:first-child>tr:first-child>td,.table>thead:first-child>tr:first-child>th{border-top:0}.table>tbody+tbody{border-top:2px solid #ddd}.table .table{background-color:#fff}.table-condensed>tbody>tr>td,.table-condensed>tbody>tr>th,.table-condensed>tfoot>tr>td,.table-condensed>tfoot>tr>th,.table-condensed>thead>tr>td,.table-condensed>thead>tr>th{padding:5px}.table-bordered,.table-bordered>tbody>tr>td,.table-bordered>tbody>tr>th,.table-bordered>tfoot>tr>td,.table-bordered>tfoot>tr>th,.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border:1px solid #ddd}.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border-bottom-width:2px}.table-striped>tbody>tr:nth-of-type(odd){background-color:#f9f9f9}.table-hover>tbody>tr:hover{background-color:#f5f5f5}table col[class*=col-]{position:static;float:none;display:table-column}table td[class*=col-],table th[class*=col-]{position:static;float:none;display:table-cell}.table>tbody>tr.active>td,.table>tbody>tr.active>th,.table>tbody>tr>td.active,.table>tbody>tr>th.active,.table>tfoot>tr.active>td,.table>tfoot>tr.active>th,.table>tfoot>tr>td.active,.table>tfoot>tr>th.active,.table>thead>tr.active>td,.table>thead>tr.active>th,.table>thead>tr>td.active,.table>thead>tr>th.active{background-color:#f5f5f5}.table-hover>tbody>tr.active:hover>td,.table-hover>tbody>tr.active:hover>th,.table-hover>tbody>tr:hover>.active,.table-hover>tbody>tr>td.active:hover,.table-hover>tbody>tr>th.active:hover{background-color:#e8e8e8}.table>tbody>tr.success>td,.table>tbody>tr.success>th,.table>tbody>tr>td.success,.table>tbody>tr>th.success,.table>tfoot>tr.success>td,.table>tfoot>tr.success>th,.table>tfoot>tr>td.success,.table>tfoot>tr>th.success,.table>thead>tr.success>td,.table>thead>tr.success>th,.table>thead>tr>td.success,.table>thead>tr>th.success{background-color:#dff0d8}.table-hover>tbody>tr.success:hover>td,.table-hover>tbody>tr.success:hover>th,.table-hover>tbody>tr:hover>.success,.table-hover>tbody>tr>td.success:hover,.table-hover>tbody>tr>th.success:hover{background-color:#d0e9c6}.table>tbody>tr.info>td,.table>tbody>tr.info>th,.table>tbody>tr>td.info,.table>tbody>tr>th.info,.table>tfoot>tr.info>td,.table>tfoot>tr.info>th,.table>tfoot>tr>td.info,.table>tfoot>tr>th.info,.table>thead>tr.info>td,.table>thead>tr.info>th,.table>thead>tr>td.info,.table>thead>tr>th.info{background-color:#d9edf7}.table-hover>tbody>tr.info:hover>td,.table-hover>tbody>tr.info:hover>th,.table-hover>tbody>tr:hover>.info,.table-hover>tbody>tr>td.info:hover,.table-hover>tbody>tr>th.info:hover{background-color:#c4e3f3}.table>tbody>tr.warning>td,.table>tbody>tr.warning>th,.table>tbody>tr>td.warning,.table>tbody>tr>th.warning,.table>tfoot>tr.warning>td,.table>tfoot>tr.warning>th,.table>tfoot>tr>td.warning,.table>tfoot>tr>th.warning,.table>thead>tr.warning>td,.table>thead>tr.warning>th,.table>thead>tr>td.warning,.table>thead>tr>th.warning{background-color:#fcf8e3}.table-hover>tbody>tr.warning:hover>td,.table-hover>tbody>tr.warning:hover>th,.table-hover>tbody>tr:hover>.warning,.table-hover>tbody>tr>td.warning:hover,.table-hover>tbody>tr>th.warning:hover{background-color:#faf2cc}.table>tbody>tr.danger>td,.table>tbody>tr.danger>th,.table>tbody>tr>td.danger,.table>tbody>tr>th.danger,.table>tfoot>tr.danger>td,.table>tfoot>tr.danger>th,.table>tfoot>tr>td.danger,.table>tfoot>tr>th.danger,.table>thead>tr.danger>td,.table>thead>tr.danger>th,.table>thead>tr>td.danger,.table>thead>tr>th.danger{background-color:#f2dede}.table-hover>tbody>tr.danger:hover>td,.table-hover>tbody>tr.danger:hover>th,.table-hover>tbody>tr:hover>.danger,.table-hover>tbody>tr>td.danger:hover,.table-hover>tbody>tr>th.danger:hover{background-color:#ebcccc}.table-responsive{overflow-x:auto;min-height:.01%}@media screen and (max-width:767px){.table-responsive{width:100%;margin-bottom:15px;overflow-y:hidden;-ms-overflow-style:-ms-autohiding-scrollbar;border:1px solid #ddd}.table-responsive>.table{margin-bottom:0}.table-responsive>.table>tbody>tr>td,.table-responsive>.table>tbody>tr>th,.table-responsive>.table>tfoot>tr>td,.table-responsive>.table>tfoot>tr>th,.table-responsive>.table>thead>tr>td,.table-responsive>.table>thead>tr>th{white-space:nowrap}.table-responsive>.table-bordered{border:0}.table-responsive>.table-bordered>tbody>tr>td:first-child,.table-responsive>.table-bordered>tbody>tr>th:first-child,.table-responsive>.table-bordered>tfoot>tr>td:first-child,.table-responsive>.table-bordered>tfoot>tr>th:first-child,.table-responsive>.table-bordered>thead>tr>td:first-child,.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.table-responsive>.table-bordered>tbody>tr>td:last-child,.table-responsive>.table-bordered>tbody>tr>th:last-child,.table-responsive>.table-bordered>tfoot>tr>td:last-child,.table-responsive>.table-bordered>tfoot>tr>th:last-child,.table-responsive>.table-bordered>thead>tr>td:last-child,.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.table-responsive>.table-bordered>tbody>tr:last-child>td,.table-responsive>.table-bordered>tbody>tr:last-child>th,.table-responsive>.table-bordered>tfoot>tr:last-child>td,.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}}fieldset{margin:0;min-width:0}fieldset,legend{padding:0;border:0}legend{display:block;width:100%;margin-bottom:20px;font-size:21px;line-height:inherit;color:#333;border-bottom:1px solid #e5e5e5}label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700}input[type=search]{box-sizing:border-box}input[type=checkbox],input[type=radio]{margin:4px 0 0;margin-top:1px\\9;line-height:normal}input[type=file]{display:block}input[type=range]{display:block;width:100%}select[multiple],select[size]{height:auto}input[type=checkbox]:focus,input[type=file]:focus,input[type=radio]:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}output{padding-top:7px}.form-control,output{display:block;font-size:14px;line-height:1.42857;color:#555}.form-control{width:100%;height:34px;padding:6px 12px;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.form-control:focus{border-color:#66afe9;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.form-control::-moz-placeholder{color:#999;opacity:1}.form-control:-ms-input-placeholder{color:#999}.form-control::-webkit-input-placeholder{color:#999}.form-control::-ms-expand{border:0;background-color:transparent}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{background-color:#eee;opacity:1}.form-control[disabled],fieldset[disabled] .form-control{cursor:not-allowed}textarea.form-control{height:auto}input[type=search]{-webkit-appearance:none}@media screen and (-webkit-min-device-pixel-ratio:0){input[type=date].form-control,input[type=datetime-local].form-control,input[type=month].form-control,input[type=time].form-control{line-height:34px}.input-group-sm>.input-group-btn>input[type=date].btn,.input-group-sm>.input-group-btn>input[type=datetime-local].btn,.input-group-sm>.input-group-btn>input[type=month].btn,.input-group-sm>.input-group-btn>input[type=time].btn,.input-group-sm>input[type=date].form-control,.input-group-sm>input[type=date].input-group-addon,.input-group-sm>input[type=datetime-local].form-control,.input-group-sm>input[type=datetime-local].input-group-addon,.input-group-sm>input[type=month].form-control,.input-group-sm>input[type=month].input-group-addon,.input-group-sm>input[type=time].form-control,.input-group-sm>input[type=time].input-group-addon,.input-group-sm input[type=date],.input-group-sm input[type=datetime-local],.input-group-sm input[type=month],.input-group-sm input[type=time],input[type=date].input-sm,input[type=datetime-local].input-sm,input[type=month].input-sm,input[type=time].input-sm{line-height:30px}.input-group-lg>.input-group-btn>input[type=date].btn,.input-group-lg>.input-group-btn>input[type=datetime-local].btn,.input-group-lg>.input-group-btn>input[type=month].btn,.input-group-lg>.input-group-btn>input[type=time].btn,.input-group-lg>input[type=date].form-control,.input-group-lg>input[type=date].input-group-addon,.input-group-lg>input[type=datetime-local].form-control,.input-group-lg>input[type=datetime-local].input-group-addon,.input-group-lg>input[type=month].form-control,.input-group-lg>input[type=month].input-group-addon,.input-group-lg>input[type=time].form-control,.input-group-lg>input[type=time].input-group-addon,.input-group-lg input[type=date],.input-group-lg input[type=datetime-local],.input-group-lg input[type=month],.input-group-lg input[type=time],input[type=date].input-lg,input[type=datetime-local].input-lg,input[type=month].input-lg,input[type=time].input-lg{line-height:46px}}.form-group{margin-bottom:15px}.checkbox,.radio{position:relative;display:block;margin-top:10px;margin-bottom:10px}.checkbox label,.radio label{min-height:20px;padding-left:20px;margin-bottom:0;font-weight:400;cursor:pointer}.checkbox-inline input[type=checkbox],.checkbox input[type=checkbox],.radio-inline input[type=radio],.radio input[type=radio]{position:absolute;margin-left:-20px;margin-top:4px\\9}.checkbox+.checkbox,.radio+.radio{margin-top:-5px}.checkbox-inline,.radio-inline{position:relative;display:inline-block;padding-left:20px;margin-bottom:0;vertical-align:middle;font-weight:400;cursor:pointer}.checkbox-inline+.checkbox-inline,.radio-inline+.radio-inline{margin-top:0;margin-left:10px}.checkbox-inline.disabled,.checkbox.disabled label,.radio-inline.disabled,.radio.disabled label,fieldset[disabled] .checkbox-inline,fieldset[disabled] .checkbox label,fieldset[disabled] .radio-inline,fieldset[disabled] .radio label,fieldset[disabled] input[type=checkbox],fieldset[disabled] input[type=radio],input[type=checkbox].disabled,input[type=checkbox][disabled],input[type=radio].disabled,input[type=radio][disabled]{cursor:not-allowed}.form-control-static{padding-top:7px;padding-bottom:7px;margin-bottom:0;min-height:34px}.form-control-static.input-lg,.form-control-static.input-sm,.input-group-lg>.form-control-static.form-control,.input-group-lg>.form-control-static.input-group-addon,.input-group-lg>.input-group-btn>.form-control-static.btn,.input-group-sm>.form-control-static.form-control,.input-group-sm>.form-control-static.input-group-addon,.input-group-sm>.input-group-btn>.form-control-static.btn{padding-left:0;padding-right:0}.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn,.input-sm{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.input-group-sm>.input-group-btn>select.btn,.input-group-sm>select.form-control,.input-group-sm>select.input-group-addon,select.input-sm{height:30px;line-height:30px}.input-group-sm>.input-group-btn>select[multiple].btn,.input-group-sm>.input-group-btn>textarea.btn,.input-group-sm>select[multiple].form-control,.input-group-sm>select[multiple].input-group-addon,.input-group-sm>textarea.form-control,.input-group-sm>textarea.input-group-addon,select[multiple].input-sm,textarea.input-sm{height:auto}.form-group-sm .form-control{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.form-group-sm select.form-control{height:30px;line-height:30px}.form-group-sm select[multiple].form-control,.form-group-sm textarea.form-control{height:auto}.form-group-sm .form-control-static{height:30px;min-height:32px;padding:6px 10px;font-size:12px;line-height:1.5}.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn,.input-lg{height:46px;padding:10px 16px;font-size:18px;line-height:1.33333;border-radius:6px}.input-group-lg>.input-group-btn>select.btn,.input-group-lg>select.form-control,.input-group-lg>select.input-group-addon,select.input-lg{height:46px;line-height:46px}.input-group-lg>.input-group-btn>select[multiple].btn,.input-group-lg>.input-group-btn>textarea.btn,.input-group-lg>select[multiple].form-control,.input-group-lg>select[multiple].input-group-addon,.input-group-lg>textarea.form-control,.input-group-lg>textarea.input-group-addon,select[multiple].input-lg,textarea.input-lg{height:auto}.form-group-lg .form-control{height:46px;padding:10px 16px;font-size:18px;line-height:1.33333;border-radius:6px}.form-group-lg select.form-control{height:46px;line-height:46px}.form-group-lg select[multiple].form-control,.form-group-lg textarea.form-control{height:auto}.form-group-lg .form-control-static{height:46px;min-height:38px;padding:11px 16px;font-size:18px;line-height:1.33333}.has-feedback{position:relative}.has-feedback .form-control{padding-right:42.5px}.form-control-feedback{position:absolute;top:0;right:0;z-index:2;display:block;width:34px;height:34px;line-height:34px;text-align:center;pointer-events:none}.form-group-lg .form-control+.form-control-feedback,.input-group-lg+.form-control-feedback,.input-group-lg>.form-control+.form-control-feedback,.input-group-lg>.input-group-addon+.form-control-feedback,.input-group-lg>.input-group-btn>.btn+.form-control-feedback,.input-lg+.form-control-feedback{width:46px;height:46px;line-height:46px}.form-group-sm .form-control+.form-control-feedback,.input-group-sm+.form-control-feedback,.input-group-sm>.form-control+.form-control-feedback,.input-group-sm>.input-group-addon+.form-control-feedback,.input-group-sm>.input-group-btn>.btn+.form-control-feedback,.input-sm+.form-control-feedback{width:30px;height:30px;line-height:30px}.has-success .checkbox,.has-success .checkbox-inline,.has-success.checkbox-inline label,.has-success.checkbox label,.has-success .control-label,.has-success .help-block,.has-success .radio,.has-success .radio-inline,.has-success.radio-inline label,.has-success.radio label{color:#3c763d}.has-success .form-control{border-color:#3c763d;box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-success .form-control:focus{border-color:#2b542c;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168}.has-success .input-group-addon{color:#3c763d;border-color:#3c763d;background-color:#dff0d8}.has-success .form-control-feedback{color:#3c763d}.has-warning .checkbox,.has-warning .checkbox-inline,.has-warning.checkbox-inline label,.has-warning.checkbox label,.has-warning .control-label,.has-warning .help-block,.has-warning .radio,.has-warning .radio-inline,.has-warning.radio-inline label,.has-warning.radio label{color:#8a6d3b}.has-warning .form-control{border-color:#8a6d3b;box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-warning .form-control:focus{border-color:#66512c;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b}.has-warning .input-group-addon{color:#8a6d3b;border-color:#8a6d3b;background-color:#fcf8e3}.has-warning .form-control-feedback{color:#8a6d3b}.has-error .checkbox,.has-error .checkbox-inline,.has-error.checkbox-inline label,.has-error.checkbox label,.has-error .control-label,.has-error .help-block,.has-error .radio,.has-error .radio-inline,.has-error.radio-inline label,.has-error.radio label{color:#a94442}.has-error .form-control{border-color:#a94442;box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-error .form-control:focus{border-color:#843534;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483}.has-error .input-group-addon{color:#a94442;border-color:#a94442;background-color:#f2dede}.has-error .form-control-feedback{color:#a94442}.has-feedback label~.form-control-feedback{top:25px}.has-feedback label.sr-only~.form-control-feedback{top:0}.help-block{display:block;margin-top:5px;margin-bottom:10px;color:#737373}@media (min-width:768px){.form-inline .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-static{display:inline-block}.form-inline .input-group{display:inline-table;vertical-align:middle}.form-inline .input-group .form-control,.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn{width:auto}.form-inline .input-group>.form-control{width:100%}.form-inline .control-label{margin-bottom:0;vertical-align:middle}.form-inline .checkbox,.form-inline .radio{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.form-inline .checkbox label,.form-inline .radio label{padding-left:0}.form-inline .checkbox input[type=checkbox],.form-inline .radio input[type=radio]{position:relative;margin-left:0}.form-inline .has-feedback .form-control-feedback{top:0}}.form-horizontal .checkbox,.form-horizontal .checkbox-inline,.form-horizontal .radio,.form-horizontal .radio-inline{margin-top:0;margin-bottom:0;padding-top:7px}.form-horizontal .checkbox,.form-horizontal .radio{min-height:27px}.form-horizontal .form-group{margin-left:-15px;margin-right:-15px}.form-horizontal .form-group:after,.form-horizontal .form-group:before{content:\" \";display:table}.form-horizontal .form-group:after{clear:both}@media (min-width:768px){.form-horizontal .control-label{text-align:right;margin-bottom:0;padding-top:7px}}.form-horizontal .has-feedback .form-control-feedback{right:15px}@media (min-width:768px){.form-horizontal .form-group-lg .control-label{padding-top:11px;font-size:18px}}@media (min-width:768px){.form-horizontal .form-group-sm .control-label{padding-top:6px;font-size:12px}}.btn{display:inline-block;margin-bottom:0;font-weight:400;text-align:center;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;padding:6px 12px;font-size:14px;line-height:1.42857;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn.active.focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn:active:focus,.btn:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.btn.focus,.btn:focus,.btn:hover{color:#333;text-decoration:none}.btn.active,.btn:active{outline:0;background-image:none;box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn.disabled,.btn[disabled],fieldset[disabled] .btn{cursor:not-allowed;opacity:.65;filter:alpha(opacity=65);box-shadow:none}a.btn.disabled,fieldset[disabled] a.btn{pointer-events:none}.btn-default{color:#333;background-color:#fff;border-color:#ccc}.btn-default.focus,.btn-default:focus{color:#333;background-color:#e6e6e6;border-color:#8c8c8c}.btn-default.active,.btn-default:active,.btn-default:hover,.open>.btn-default.dropdown-toggle{color:#333;background-color:#e6e6e6;border-color:#adadad}.btn-default.active.focus,.btn-default.active:focus,.btn-default.active:hover,.btn-default:active.focus,.btn-default:active:focus,.btn-default:active:hover,.open>.btn-default.dropdown-toggle.focus,.open>.btn-default.dropdown-toggle:focus,.open>.btn-default.dropdown-toggle:hover{color:#333;background-color:#d4d4d4;border-color:#8c8c8c}.btn-default.active,.btn-default:active,.open>.btn-default.dropdown-toggle{background-image:none}.btn-default.disabled.focus,.btn-default.disabled:focus,.btn-default.disabled:hover,.btn-default[disabled].focus,.btn-default[disabled]:focus,.btn-default[disabled]:hover,fieldset[disabled] .btn-default.focus,fieldset[disabled] .btn-default:focus,fieldset[disabled] .btn-default:hover{background-color:#fff;border-color:#ccc}.btn-default .badge{color:#fff;background-color:#333}.btn-primary{color:#fff;background-color:#337ab7;border-color:#2e6da4}.btn-primary.focus,.btn-primary:focus{color:#fff;background-color:#286090;border-color:#122b40}.btn-primary.active,.btn-primary:active,.btn-primary:hover,.open>.btn-primary.dropdown-toggle{color:#fff;background-color:#286090;border-color:#204d74}.btn-primary.active.focus,.btn-primary.active:focus,.btn-primary.active:hover,.btn-primary:active.focus,.btn-primary:active:focus,.btn-primary:active:hover,.open>.btn-primary.dropdown-toggle.focus,.open>.btn-primary.dropdown-toggle:focus,.open>.btn-primary.dropdown-toggle:hover{color:#fff;background-color:#204d74;border-color:#122b40}.btn-primary.active,.btn-primary:active,.open>.btn-primary.dropdown-toggle{background-image:none}.btn-primary.disabled.focus,.btn-primary.disabled:focus,.btn-primary.disabled:hover,.btn-primary[disabled].focus,.btn-primary[disabled]:focus,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary.focus,fieldset[disabled] .btn-primary:focus,fieldset[disabled] .btn-primary:hover{background-color:#337ab7;border-color:#2e6da4}.btn-primary .badge{color:#337ab7;background-color:#fff}.btn-success{color:#fff;background-color:#5cb85c;border-color:#4cae4c}.btn-success.focus,.btn-success:focus{color:#fff;background-color:#449d44;border-color:#255625}.btn-success.active,.btn-success:active,.btn-success:hover,.open>.btn-success.dropdown-toggle{color:#fff;background-color:#449d44;border-color:#398439}.btn-success.active.focus,.btn-success.active:focus,.btn-success.active:hover,.btn-success:active.focus,.btn-success:active:focus,.btn-success:active:hover,.open>.btn-success.dropdown-toggle.focus,.open>.btn-success.dropdown-toggle:focus,.open>.btn-success.dropdown-toggle:hover{color:#fff;background-color:#398439;border-color:#255625}.btn-success.active,.btn-success:active,.open>.btn-success.dropdown-toggle{background-image:none}.btn-success.disabled.focus,.btn-success.disabled:focus,.btn-success.disabled:hover,.btn-success[disabled].focus,.btn-success[disabled]:focus,.btn-success[disabled]:hover,fieldset[disabled] .btn-success.focus,fieldset[disabled] .btn-success:focus,fieldset[disabled] .btn-success:hover{background-color:#5cb85c;border-color:#4cae4c}.btn-success .badge{color:#5cb85c;background-color:#fff}.btn-info{color:#fff;background-color:#5bc0de;border-color:#46b8da}.btn-info.focus,.btn-info:focus{color:#fff;background-color:#31b0d5;border-color:#1b6d85}.btn-info.active,.btn-info:active,.btn-info:hover,.open>.btn-info.dropdown-toggle{color:#fff;background-color:#31b0d5;border-color:#269abc}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.btn-info.dropdown-toggle.focus,.open>.btn-info.dropdown-toggle:focus,.open>.btn-info.dropdown-toggle:hover{color:#fff;background-color:#269abc;border-color:#1b6d85}.btn-info.active,.btn-info:active,.open>.btn-info.dropdown-toggle{background-image:none}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{background-color:#5bc0de;border-color:#46b8da}.btn-info .badge{color:#5bc0de;background-color:#fff}.btn-warning{color:#fff;background-color:#f0ad4e;border-color:#eea236}.btn-warning.focus,.btn-warning:focus{color:#fff;background-color:#ec971f;border-color:#985f0d}.btn-warning.active,.btn-warning:active,.btn-warning:hover,.open>.btn-warning.dropdown-toggle{color:#fff;background-color:#ec971f;border-color:#d58512}.btn-warning.active.focus,.btn-warning.active:focus,.btn-warning.active:hover,.btn-warning:active.focus,.btn-warning:active:focus,.btn-warning:active:hover,.open>.btn-warning.dropdown-toggle.focus,.open>.btn-warning.dropdown-toggle:focus,.open>.btn-warning.dropdown-toggle:hover{color:#fff;background-color:#d58512;border-color:#985f0d}.btn-warning.active,.btn-warning:active,.open>.btn-warning.dropdown-toggle{background-image:none}.btn-warning.disabled.focus,.btn-warning.disabled:focus,.btn-warning.disabled:hover,.btn-warning[disabled].focus,.btn-warning[disabled]:focus,.btn-warning[disabled]:hover,fieldset[disabled] .btn-warning.focus,fieldset[disabled] .btn-warning:focus,fieldset[disabled] .btn-warning:hover{background-color:#f0ad4e;border-color:#eea236}.btn-warning .badge{color:#f0ad4e;background-color:#fff}.btn-danger{color:#fff;background-color:#d9534f;border-color:#d43f3a}.btn-danger.focus,.btn-danger:focus{color:#fff;background-color:#c9302c;border-color:#761c19}.btn-danger.active,.btn-danger:active,.btn-danger:hover,.open>.btn-danger.dropdown-toggle{color:#fff;background-color:#c9302c;border-color:#ac2925}.btn-danger.active.focus,.btn-danger.active:focus,.btn-danger.active:hover,.btn-danger:active.focus,.btn-danger:active:focus,.btn-danger:active:hover,.open>.btn-danger.dropdown-toggle.focus,.open>.btn-danger.dropdown-toggle:focus,.open>.btn-danger.dropdown-toggle:hover{color:#fff;background-color:#ac2925;border-color:#761c19}.btn-danger.active,.btn-danger:active,.open>.btn-danger.dropdown-toggle{background-image:none}.btn-danger.disabled.focus,.btn-danger.disabled:focus,.btn-danger.disabled:hover,.btn-danger[disabled].focus,.btn-danger[disabled]:focus,.btn-danger[disabled]:hover,fieldset[disabled] .btn-danger.focus,fieldset[disabled] .btn-danger:focus,fieldset[disabled] .btn-danger:hover{background-color:#d9534f;border-color:#d43f3a}.btn-danger .badge{color:#d9534f;background-color:#fff}.btn-link{color:#337ab7;font-weight:400;border-radius:0}.btn-link,.btn-link.active,.btn-link:active,.btn-link[disabled],fieldset[disabled] .btn-link{background-color:transparent;box-shadow:none}.btn-link,.btn-link:active,.btn-link:focus,.btn-link:hover{border-color:transparent}.btn-link:focus,.btn-link:hover{color:#23527c;text-decoration:underline;background-color:transparent}.btn-link[disabled]:focus,.btn-link[disabled]:hover,fieldset[disabled] .btn-link:focus,fieldset[disabled] .btn-link:hover{color:#777;text-decoration:none}.btn-group-lg>.btn,.btn-lg{padding:10px 16px;font-size:18px;line-height:1.33333;border-radius:6px}.btn-group-sm>.btn,.btn-sm{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.btn-group-xs>.btn,.btn-xs{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:5px}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{opacity:0;transition:opacity .15s linear}.fade.in{opacity:1}.collapse{display:none}.collapse.in{display:block}tr.collapse.in{display:table-row}tbody.collapse.in{display:table-row-group}.collapsing{position:relative;height:0;overflow:hidden;transition-property:height,visibility;transition-duration:.35s;transition-timing-function:ease}.caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-top:4px solid\\9;border-right:4px solid transparent;border-left:4px solid transparent}.dropdown,.dropup{position:relative}.dropdown-toggle:focus{outline:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;list-style:none;font-size:14px;text-align:left;background-color:#fff;border:1px solid #ccc;border:1px solid rgba(0,0,0,.15);border-radius:4px;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box}.dropdown-menu.pull-right{right:0;left:auto}.dropdown-menu .divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.dropdown-menu>li>a{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857;color:#333;white-space:nowrap}.dropdown-menu>li>a:focus,.dropdown-menu>li>a:hover{text-decoration:none;color:#262626;background-color:#f5f5f5}.dropdown-menu>.active>a,.dropdown-menu>.active>a:focus,.dropdown-menu>.active>a:hover{color:#fff;text-decoration:none;outline:0;background-color:#337ab7}.dropdown-menu>.disabled>a,.dropdown-menu>.disabled>a:focus,.dropdown-menu>.disabled>a:hover{color:#777}.dropdown-menu>.disabled>a:focus,.dropdown-menu>.disabled>a:hover{text-decoration:none;background-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled = false);cursor:not-allowed}.open>.dropdown-menu{display:block}.open>a{outline:0}.dropdown-menu-right{left:auto;right:0}.dropdown-menu-left{left:0;right:auto}.dropdown-header{display:block;padding:3px 20px;font-size:12px;line-height:1.42857;color:#777;white-space:nowrap}.dropdown-backdrop{position:fixed;left:0;right:0;bottom:0;top:0;z-index:990}.pull-right>.dropdown-menu{right:0;left:auto}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{border-top:0;border-bottom:4px dashed;border-bottom:4px solid\\9;content:\"\"}.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:2px}@media (min-width:768px){.navbar-right .dropdown-menu{right:0;left:auto}.navbar-right .dropdown-menu-left{left:0;right:auto}}.btn-group,.btn-group-vertical{position:relative;display:inline-block;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;float:left}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:2}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{margin-left:-5px}.btn-toolbar:after,.btn-toolbar:before{content:\" \";display:table}.btn-toolbar:after{clear:both}.btn-toolbar .btn,.btn-toolbar .btn-group,.btn-toolbar .input-group{float:left}.btn-toolbar>.btn,.btn-toolbar>.btn-group,.btn-toolbar>.input-group{margin-left:5px}.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.btn-group>.btn-group{float:left}.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn-group>.btn+.dropdown-toggle{padding-left:8px;padding-right:8px}.btn-group-lg.btn-group>.btn+.dropdown-toggle,.btn-group>.btn-lg+.dropdown-toggle{padding-left:12px;padding-right:12px}.btn-group.open .dropdown-toggle{box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn-group.open .dropdown-toggle.btn-link{box-shadow:none}.btn .caret{margin-left:0}.btn-group-lg>.btn .caret,.btn-lg .caret{border-width:5px 5px 0;border-bottom-width:0}.dropup .btn-group-lg>.btn .caret,.dropup .btn-lg .caret{border-width:0 5px 5px}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group,.btn-group-vertical>.btn-group>.btn{display:block;float:none;width:100%;max-width:100%}.btn-group-vertical>.btn-group:after,.btn-group-vertical>.btn-group:before{content:\" \";display:table}.btn-group-vertical>.btn-group:after{clear:both}.btn-group-vertical>.btn-group>.btn{float:none}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-vertical>.btn:first-child:not(:last-child){border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:last-child:not(:first-child){border-top-right-radius:0;border-top-left-radius:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-right-radius:0;border-top-left-radius:0}.btn-group-justified{display:table;width:100%;table-layout:fixed;border-collapse:separate}.btn-group-justified>.btn,.btn-group-justified>.btn-group{float:none;display:table-cell;width:1%}.btn-group-justified>.btn-group .btn{width:100%}.btn-group-justified>.btn-group .dropdown-menu{left:auto}[data-toggle=buttons]>.btn-group>.btn input[type=checkbox],[data-toggle=buttons]>.btn-group>.btn input[type=radio],[data-toggle=buttons]>.btn input[type=checkbox],[data-toggle=buttons]>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:table;border-collapse:separate}.input-group[class*=col-]{float:none;padding-left:0;padding-right:0}.input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.input-group .form-control:focus{z-index:3}.input-group-addon,.input-group-btn,.input-group .form-control{display:table-cell}.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child),.input-group .form-control:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{width:1%;white-space:nowrap;vertical-align:middle}.input-group-addon{padding:6px 12px;font-size:14px;font-weight:400;line-height:1;color:#555;text-align:center;background-color:#eee;border:1px solid #ccc;border-radius:4px}.input-group-addon.input-sm,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.input-group-addon.btn{padding:5px 10px;font-size:12px;border-radius:3px}.input-group-addon.input-lg,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.input-group-addon.btn{padding:10px 16px;font-size:18px;border-radius:6px}.input-group-addon input[type=checkbox],.input-group-addon input[type=radio]{margin-top:0}.input-group-addon:first-child,.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group>.btn,.input-group-btn:first-child>.dropdown-toggle,.input-group-btn:last-child>.btn-group:not(:last-child)>.btn,.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group .form-control:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.input-group-addon:first-child{border-right:0}.input-group-addon:last-child,.input-group-btn:first-child>.btn-group:not(:first-child)>.btn,.input-group-btn:first-child>.btn:not(:first-child),.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group>.btn,.input-group-btn:last-child>.dropdown-toggle,.input-group .form-control:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.input-group-addon:last-child{border-left:0}.input-group-btn{font-size:0;white-space:nowrap}.input-group-btn,.input-group-btn>.btn{position:relative}.input-group-btn>.btn+.btn{margin-left:-1px}.input-group-btn>.btn:active,.input-group-btn>.btn:focus,.input-group-btn>.btn:hover{z-index:2}.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group{margin-right:-1px}.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group{z-index:2;margin-left:-1px}.nav{margin-bottom:0;padding-left:0;list-style:none}.nav:after,.nav:before{content:\" \";display:table}.nav:after{clear:both}.nav>li,.nav>li>a{position:relative;display:block}.nav>li>a{padding:10px 15px}.nav>li>a:focus,.nav>li>a:hover{text-decoration:none;background-color:#eee}.nav>li.disabled>a{color:#777}.nav>li.disabled>a:focus,.nav>li.disabled>a:hover{color:#777;text-decoration:none;background-color:transparent;cursor:not-allowed}.nav .open>a,.nav .open>a:focus,.nav .open>a:hover{background-color:#eee;border-color:#337ab7}.nav .nav-divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.nav>li>a>img{max-width:none}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li{float:left;margin-bottom:-1px}.nav-tabs>li>a{margin-right:2px;line-height:1.42857;border:1px solid transparent;border-radius:4px 4px 0 0}.nav-tabs>li>a:hover{border-color:#eee #eee #ddd}.nav-tabs>li.active>a,.nav-tabs>li.active>a:focus,.nav-tabs>li.active>a:hover{color:#555;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent;cursor:default}.nav-pills>li{float:left}.nav-pills>li>a{border-radius:4px}.nav-pills>li+li{margin-left:2px}.nav-pills>li.active>a,.nav-pills>li.active>a:focus,.nav-pills>li.active>a:hover{color:#fff;background-color:#337ab7}.nav-stacked>li{float:none}.nav-stacked>li+li{margin-top:2px;margin-left:0}.nav-justified,.nav-tabs.nav-justified{width:100%}.nav-justified>li,.nav-tabs.nav-justified>li{float:none}.nav-justified>li>a,.nav-tabs.nav-justified>li>a{text-align:center;margin-bottom:5px}.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-justified>li,.nav-tabs.nav-justified>li{display:table-cell;width:1%}.nav-justified>li>a,.nav-tabs.nav-justified>li>a{margin-bottom:0}}.nav-tabs-justified,.nav-tabs.nav-justified{border-bottom:0}.nav-tabs-justified>li>a,.nav-tabs.nav-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover,.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-tabs-justified>li>a,.nav-tabs.nav-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover,.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border-bottom-color:#fff}}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-right-radius:0;border-top-left-radius:0}.navbar{position:relative;min-height:50px;margin-bottom:20px;border:1px solid transparent}.navbar:after,.navbar:before{content:\" \";display:table}.navbar:after{clear:both}@media (min-width:768px){.navbar{border-radius:4px}}.navbar-header:after,.navbar-header:before{content:\" \";display:table}.navbar-header:after{clear:both}@media (min-width:768px){.navbar-header{float:left}}.navbar-collapse{overflow-x:visible;padding-right:15px;padding-left:15px;border-top:1px solid transparent;box-shadow:inset 0 1px 0 hsla(0,0%,100%,.1);-webkit-overflow-scrolling:touch}.navbar-collapse:after,.navbar-collapse:before{content:\" \";display:table}.navbar-collapse:after{clear:both}.navbar-collapse.in{overflow-y:auto}@media (min-width:768px){.navbar-collapse{width:auto;border-top:0;box-shadow:none}.navbar-collapse.collapse{display:block!important;height:auto!important;padding-bottom:0;overflow:visible!important}.navbar-collapse.in{overflow-y:visible}.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse,.navbar-static-top .navbar-collapse{padding-left:0;padding-right:0}}.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse{max-height:340px}@media (max-device-width:480px) and (orientation:landscape){.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse{max-height:200px}}.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:-15px;margin-left:-15px}@media (min-width:768px){.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:0;margin-left:0}}.navbar-static-top{z-index:1000;border-width:0 0 1px}@media (min-width:768px){.navbar-static-top{border-radius:0}}.navbar-fixed-bottom,.navbar-fixed-top{position:fixed;right:0;left:0;z-index:1030}@media (min-width:768px){.navbar-fixed-bottom,.navbar-fixed-top{border-radius:0}}.navbar-fixed-top{top:0;border-width:0 0 1px}.navbar-fixed-bottom{bottom:0;margin-bottom:0;border-width:1px 0 0}.navbar-brand{float:left;padding:15px;font-size:18px;line-height:20px;height:50px}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-brand>img{display:block}@media (min-width:768px){.navbar>.container-fluid .navbar-brand,.navbar>.container .navbar-brand{margin-left:-15px}}.navbar-toggle{position:relative;float:right;margin-right:15px;padding:9px 10px;margin-top:8px;margin-bottom:8px;background-color:transparent;background-image:none;border:1px solid transparent;border-radius:4px}.navbar-toggle:focus{outline:0}.navbar-toggle .icon-bar{display:block;width:22px;height:2px;border-radius:1px}.navbar-toggle .icon-bar+.icon-bar{margin-top:4px}@media (min-width:768px){.navbar-toggle{display:none}}.navbar-nav{margin:7.5px -15px}.navbar-nav>li>a{padding-top:10px;padding-bottom:10px;line-height:20px}@media (max-width:767px){.navbar-nav .open .dropdown-menu{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;box-shadow:none}.navbar-nav .open .dropdown-menu .dropdown-header,.navbar-nav .open .dropdown-menu>li>a{padding:5px 15px 5px 25px}.navbar-nav .open .dropdown-menu>li>a{line-height:20px}.navbar-nav .open .dropdown-menu>li>a:focus,.navbar-nav .open .dropdown-menu>li>a:hover{background-image:none}}@media (min-width:768px){.navbar-nav{float:left;margin:0}.navbar-nav>li{float:left}.navbar-nav>li>a{padding-top:15px;padding-bottom:15px}}.navbar-form{margin:8px -15px;padding:10px 15px;border-top:1px solid transparent;border-bottom:1px solid transparent;box-shadow:inset 0 1px 0 hsla(0,0%,100%,.1),0 1px 0 hsla(0,0%,100%,.1)}@media (min-width:768px){.navbar-form .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.navbar-form .form-control{display:inline-block;width:auto;vertical-align:middle}.navbar-form .form-control-static{display:inline-block}.navbar-form .input-group{display:inline-table;vertical-align:middle}.navbar-form .input-group .form-control,.navbar-form .input-group .input-group-addon,.navbar-form .input-group .input-group-btn{width:auto}.navbar-form .input-group>.form-control{width:100%}.navbar-form .control-label{margin-bottom:0;vertical-align:middle}.navbar-form .checkbox,.navbar-form .radio{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.navbar-form .checkbox label,.navbar-form .radio label{padding-left:0}.navbar-form .checkbox input[type=checkbox],.navbar-form .radio input[type=radio]{position:relative;margin-left:0}.navbar-form .has-feedback .form-control-feedback{top:0}}@media (max-width:767px){.navbar-form .form-group{margin-bottom:5px}.navbar-form .form-group:last-child{margin-bottom:0}}@media (min-width:768px){.navbar-form{width:auto;border:0;margin-left:0;margin-right:0;padding-top:0;padding-bottom:0;box-shadow:none}}.navbar-nav>li>.dropdown-menu{margin-top:0;border-top-right-radius:0;border-top-left-radius:0}.navbar-fixed-bottom .navbar-nav>li>.dropdown-menu{margin-bottom:0;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.navbar-btn{margin-top:8px;margin-bottom:8px}.btn-group-sm>.navbar-btn.btn,.navbar-btn.btn-sm{margin-top:10px;margin-bottom:10px}.btn-group-xs>.navbar-btn.btn,.navbar-btn.btn-xs{margin-top:14px;margin-bottom:14px}.navbar-text{margin-top:15px;margin-bottom:15px}@media (min-width:768px){.navbar-text{float:left;margin-left:15px;margin-right:15px}}@media (min-width:768px){.navbar-left{float:left!important}.navbar-right{float:right!important;margin-right:-15px}.navbar-right~.navbar-right{margin-right:0}}.navbar-default{background-color:#f8f8f8;border-color:#e7e7e7}.navbar-default .navbar-brand{color:#777}.navbar-default .navbar-brand:focus,.navbar-default .navbar-brand:hover{color:#5e5e5e;background-color:transparent}.navbar-default .navbar-nav>li>a,.navbar-default .navbar-text{color:#777}.navbar-default .navbar-nav>li>a:focus,.navbar-default .navbar-nav>li>a:hover{color:#333;background-color:transparent}.navbar-default .navbar-nav>.active>a,.navbar-default .navbar-nav>.active>a:focus,.navbar-default .navbar-nav>.active>a:hover{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav>.disabled>a,.navbar-default .navbar-nav>.disabled>a:focus,.navbar-default .navbar-nav>.disabled>a:hover{color:#ccc;background-color:transparent}.navbar-default .navbar-toggle{border-color:#ddd}.navbar-default .navbar-toggle:focus,.navbar-default .navbar-toggle:hover{background-color:#ddd}.navbar-default .navbar-toggle .icon-bar{background-color:#888}.navbar-default .navbar-collapse,.navbar-default .navbar-form{border-color:#e7e7e7}.navbar-default .navbar-nav>.open>a,.navbar-default .navbar-nav>.open>a:focus,.navbar-default .navbar-nav>.open>a:hover{background-color:#e7e7e7;color:#555}@media (max-width:767px){.navbar-default .navbar-nav .open .dropdown-menu>li>a{color:#777}.navbar-default .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover{color:#333;background-color:transparent}.navbar-default .navbar-nav .open .dropdown-menu>.active>a,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#ccc;background-color:transparent}}.navbar-default .navbar-link{color:#777}.navbar-default .navbar-link:hover{color:#333}.navbar-default .btn-link{color:#777}.navbar-default .btn-link:focus,.navbar-default .btn-link:hover{color:#333}.navbar-default .btn-link[disabled]:focus,.navbar-default .btn-link[disabled]:hover,fieldset[disabled] .navbar-default .btn-link:focus,fieldset[disabled] .navbar-default .btn-link:hover{color:#ccc}.navbar-inverse{background-color:#222;border-color:#090909}.navbar-inverse .navbar-brand{color:#9d9d9d}.navbar-inverse .navbar-brand:focus,.navbar-inverse .navbar-brand:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav>li>a,.navbar-inverse .navbar-text{color:#9d9d9d}.navbar-inverse .navbar-nav>li>a:focus,.navbar-inverse .navbar-nav>li>a:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav>.active>a,.navbar-inverse .navbar-nav>.active>a:focus,.navbar-inverse .navbar-nav>.active>a:hover{color:#fff;background-color:#090909}.navbar-inverse .navbar-nav>.disabled>a,.navbar-inverse .navbar-nav>.disabled>a:focus,.navbar-inverse .navbar-nav>.disabled>a:hover{color:#444;background-color:transparent}.navbar-inverse .navbar-toggle{border-color:#333}.navbar-inverse .navbar-toggle:focus,.navbar-inverse .navbar-toggle:hover{background-color:#333}.navbar-inverse .navbar-toggle .icon-bar{background-color:#fff}.navbar-inverse .navbar-collapse,.navbar-inverse .navbar-form{border-color:#101010}.navbar-inverse .navbar-nav>.open>a,.navbar-inverse .navbar-nav>.open>a:focus,.navbar-inverse .navbar-nav>.open>a:hover{background-color:#090909;color:#fff}@media (max-width:767px){.navbar-inverse .navbar-nav .open .dropdown-menu>.dropdown-header{border-color:#090909}.navbar-inverse .navbar-nav .open .dropdown-menu .divider{background-color:#090909}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a{color:#9d9d9d}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:hover{color:#fff;background-color:#090909}.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#444;background-color:transparent}}.navbar-inverse .navbar-link{color:#9d9d9d}.navbar-inverse .navbar-link:hover{color:#fff}.navbar-inverse .btn-link{color:#9d9d9d}.navbar-inverse .btn-link:focus,.navbar-inverse .btn-link:hover{color:#fff}.navbar-inverse .btn-link[disabled]:focus,.navbar-inverse .btn-link[disabled]:hover,fieldset[disabled] .navbar-inverse .btn-link:focus,fieldset[disabled] .navbar-inverse .btn-link:hover{color:#444}.breadcrumb{padding:8px 15px;margin-bottom:20px;list-style:none;background-color:#f5f5f5;border-radius:4px}.breadcrumb>li{display:inline-block}.breadcrumb>li+li:before{content:\"/\\A0\";padding:0 5px;color:#ccc}.breadcrumb>.active{color:#777}.pagination{display:inline-block;padding-left:0;margin:20px 0;border-radius:4px}.pagination>li{display:inline}.pagination>li>a,.pagination>li>span{position:relative;float:left;padding:6px 12px;line-height:1.42857;text-decoration:none;color:#337ab7;background-color:#fff;border:1px solid #ddd;margin-left:-1px}.pagination>li:first-child>a,.pagination>li:first-child>span{margin-left:0;border-bottom-left-radius:4px;border-top-left-radius:4px}.pagination>li:last-child>a,.pagination>li:last-child>span{border-bottom-right-radius:4px;border-top-right-radius:4px}.pagination>li>a:focus,.pagination>li>a:hover,.pagination>li>span:focus,.pagination>li>span:hover{z-index:2;color:#23527c;background-color:#eee;border-color:#ddd}.pagination>.active>a,.pagination>.active>a:focus,.pagination>.active>a:hover,.pagination>.active>span,.pagination>.active>span:focus,.pagination>.active>span:hover{z-index:3;color:#fff;background-color:#337ab7;border-color:#337ab7;cursor:default}.pagination>.disabled>a,.pagination>.disabled>a:focus,.pagination>.disabled>a:hover,.pagination>.disabled>span,.pagination>.disabled>span:focus,.pagination>.disabled>span:hover{color:#777;background-color:#fff;border-color:#ddd;cursor:not-allowed}.pagination-lg>li>a,.pagination-lg>li>span{padding:10px 16px;font-size:18px;line-height:1.33333}.pagination-lg>li:first-child>a,.pagination-lg>li:first-child>span{border-bottom-left-radius:6px;border-top-left-radius:6px}.pagination-lg>li:last-child>a,.pagination-lg>li:last-child>span{border-bottom-right-radius:6px;border-top-right-radius:6px}.pagination-sm>li>a,.pagination-sm>li>span{padding:5px 10px;font-size:12px;line-height:1.5}.pagination-sm>li:first-child>a,.pagination-sm>li:first-child>span{border-bottom-left-radius:3px;border-top-left-radius:3px}.pagination-sm>li:last-child>a,.pagination-sm>li:last-child>span{border-bottom-right-radius:3px;border-top-right-radius:3px}.pager{padding-left:0;margin:20px 0;list-style:none;text-align:center}.pager:after,.pager:before{content:\" \";display:table}.pager:after{clear:both}.pager li{display:inline}.pager li>a,.pager li>span{display:inline-block;padding:5px 14px;background-color:#fff;border:1px solid #ddd;border-radius:15px}.pager li>a:focus,.pager li>a:hover{text-decoration:none;background-color:#eee}.pager .next>a,.pager .next>span{float:right}.pager .previous>a,.pager .previous>span{float:left}.pager .disabled>a,.pager .disabled>a:focus,.pager .disabled>a:hover,.pager .disabled>span{color:#777;background-color:#fff;cursor:not-allowed}.label{display:inline;padding:.2em .6em .3em;font-size:75%;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25em}.label:empty{display:none}.btn .label{position:relative;top:-1px}a.label:focus,a.label:hover{color:#fff;text-decoration:none;cursor:pointer}.label-default{background-color:#777}.label-default[href]:focus,.label-default[href]:hover{background-color:#5e5e5e}.label-primary{background-color:#337ab7}.label-primary[href]:focus,.label-primary[href]:hover{background-color:#286090}.label-success{background-color:#5cb85c}.label-success[href]:focus,.label-success[href]:hover{background-color:#449d44}.label-info{background-color:#5bc0de}.label-info[href]:focus,.label-info[href]:hover{background-color:#31b0d5}.label-warning{background-color:#f0ad4e}.label-warning[href]:focus,.label-warning[href]:hover{background-color:#ec971f}.label-danger{background-color:#d9534f}.label-danger[href]:focus,.label-danger[href]:hover{background-color:#c9302c}.badge{display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;font-weight:700;color:#fff;line-height:1;vertical-align:middle;white-space:nowrap;text-align:center;background-color:#777;border-radius:10px}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.btn-group-xs>.btn .badge,.btn-xs .badge{top:0;padding:1px 5px}.list-group-item.active>.badge,.nav-pills>.active>a>.badge{color:#337ab7;background-color:#fff}.list-group-item>.badge{float:right}.list-group-item>.badge+.badge{margin-right:5px}.nav-pills>li>a>.badge{margin-left:3px}a.badge:focus,a.badge:hover{color:#fff;text-decoration:none;cursor:pointer}.jumbotron{padding-top:30px;padding-bottom:30px;margin-bottom:30px;background-color:#eee}.jumbotron,.jumbotron .h1,.jumbotron h1{color:inherit}.jumbotron p{margin-bottom:15px;font-size:21px;font-weight:200}.jumbotron>hr{border-top-color:#d5d5d5}.container-fluid .jumbotron,.container .jumbotron{border-radius:6px;padding-left:15px;padding-right:15px}.jumbotron .container{max-width:100%}@media screen and (min-width:768px){.jumbotron{padding-top:48px;padding-bottom:48px}.container-fluid .jumbotron,.container .jumbotron{padding-left:60px;padding-right:60px}.jumbotron .h1,.jumbotron h1{font-size:63px}}.thumbnail{display:block;padding:4px;margin-bottom:20px;line-height:1.42857;background-color:#fff;border:1px solid #ddd;border-radius:4px;transition:border .2s ease-in-out}.thumbnail>img,.thumbnail a>img{display:block;max-width:100%;height:auto;margin-left:auto;margin-right:auto}.thumbnail .caption{padding:9px;color:#333}a.thumbnail.active,a.thumbnail:focus,a.thumbnail:hover{border-color:#337ab7}.alert{padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:4px}.alert h4{margin-top:0;color:inherit}.alert .alert-link{font-weight:700}.alert>p,.alert>ul{margin-bottom:0}.alert>p+p{margin-top:5px}.alert-dismissable,.alert-dismissible{padding-right:35px}.alert-dismissable .close,.alert-dismissible .close{position:relative;top:-2px;right:-21px;color:inherit}.alert-success{background-color:#dff0d8;border-color:#d6e9c6;color:#3c763d}.alert-success hr{border-top-color:#c9e2b3}.alert-success .alert-link{color:#2b542c}.alert-info{background-color:#d9edf7;border-color:#bce8f1;color:#31708f}.alert-info hr{border-top-color:#a6e1ec}.alert-info .alert-link{color:#245269}.alert-warning{background-color:#fcf8e3;border-color:#faebcc;color:#8a6d3b}.alert-warning hr{border-top-color:#f7e1b5}.alert-warning .alert-link{color:#66512c}.alert-danger{background-color:#f2dede;border-color:#ebccd1;color:#a94442}.alert-danger hr{border-top-color:#e4b9c0}.alert-danger .alert-link{color:#843534}@keyframes progress-bar-stripes{0%{background-position:40px 0}to{background-position:0 0}}.progress{overflow:hidden;height:20px;margin-bottom:20px;background-color:#f5f5f5;border-radius:4px;box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}.progress-bar{float:left;width:0;height:100%;font-size:12px;line-height:20px;color:#fff;text-align:center;background-color:#337ab7;box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);transition:width .6s ease}.progress-bar-striped,.progress-striped .progress-bar{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:40px 40px}.progress-bar.active,.progress.active .progress-bar{animation:progress-bar-stripes 2s linear infinite}.progress-bar-success{background-color:#5cb85c}.progress-striped .progress-bar-success{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)}.progress-bar-info{background-color:#5bc0de}.progress-striped .progress-bar-info{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)}.progress-bar-warning{background-color:#f0ad4e}.progress-striped .progress-bar-warning{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)}.progress-bar-danger{background-color:#d9534f}.progress-striped .progress-bar-danger{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)}.media{margin-top:15px}.media:first-child{margin-top:0}.media,.media-body{zoom:1;overflow:hidden}.media-body{width:10000px}.media-object{display:block}.media-object.img-thumbnail{max-width:none}.media-right,.media>.pull-right{padding-left:10px}.media-left,.media>.pull-left{padding-right:10px}.media-body,.media-left,.media-right{display:table-cell;vertical-align:top}.media-middle{vertical-align:middle}.media-bottom{vertical-align:bottom}.media-heading{margin-top:0;margin-bottom:5px}.media-list{padding-left:0;list-style:none}.list-group{margin-bottom:20px;padding-left:0}.list-group-item{position:relative;display:block;padding:10px 15px;margin-bottom:-1px;background-color:#fff;border:1px solid #ddd}.list-group-item:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}a.list-group-item,button.list-group-item{color:#555}a.list-group-item .list-group-item-heading,button.list-group-item .list-group-item-heading{color:#333}a.list-group-item:focus,a.list-group-item:hover,button.list-group-item:focus,button.list-group-item:hover{text-decoration:none;color:#555;background-color:#f5f5f5}button.list-group-item{width:100%;text-align:left}.list-group-item.disabled,.list-group-item.disabled:focus,.list-group-item.disabled:hover{background-color:#eee;color:#777;cursor:not-allowed}.list-group-item.disabled .list-group-item-heading,.list-group-item.disabled:focus .list-group-item-heading,.list-group-item.disabled:hover .list-group-item-heading{color:inherit}.list-group-item.disabled .list-group-item-text,.list-group-item.disabled:focus .list-group-item-text,.list-group-item.disabled:hover .list-group-item-text{color:#777}.list-group-item.active,.list-group-item.active:focus,.list-group-item.active:hover{z-index:2;color:#fff;background-color:#337ab7;border-color:#337ab7}.list-group-item.active .list-group-item-heading,.list-group-item.active .list-group-item-heading>.small,.list-group-item.active .list-group-item-heading>small,.list-group-item.active:focus .list-group-item-heading,.list-group-item.active:focus .list-group-item-heading>.small,.list-group-item.active:focus .list-group-item-heading>small,.list-group-item.active:hover .list-group-item-heading,.list-group-item.active:hover .list-group-item-heading>.small,.list-group-item.active:hover .list-group-item-heading>small{color:inherit}.list-group-item.active .list-group-item-text,.list-group-item.active:focus .list-group-item-text,.list-group-item.active:hover .list-group-item-text{color:#c7ddef}.list-group-item-success{color:#3c763d;background-color:#dff0d8}a.list-group-item-success,button.list-group-item-success{color:#3c763d}a.list-group-item-success .list-group-item-heading,button.list-group-item-success .list-group-item-heading{color:inherit}a.list-group-item-success:focus,a.list-group-item-success:hover,button.list-group-item-success:focus,button.list-group-item-success:hover{color:#3c763d;background-color:#d0e9c6}a.list-group-item-success.active,a.list-group-item-success.active:focus,a.list-group-item-success.active:hover,button.list-group-item-success.active,button.list-group-item-success.active:focus,button.list-group-item-success.active:hover{color:#fff;background-color:#3c763d;border-color:#3c763d}.list-group-item-info{color:#31708f;background-color:#d9edf7}a.list-group-item-info,button.list-group-item-info{color:#31708f}a.list-group-item-info .list-group-item-heading,button.list-group-item-info .list-group-item-heading{color:inherit}a.list-group-item-info:focus,a.list-group-item-info:hover,button.list-group-item-info:focus,button.list-group-item-info:hover{color:#31708f;background-color:#c4e3f3}a.list-group-item-info.active,a.list-group-item-info.active:focus,a.list-group-item-info.active:hover,button.list-group-item-info.active,button.list-group-item-info.active:focus,button.list-group-item-info.active:hover{color:#fff;background-color:#31708f;border-color:#31708f}.list-group-item-warning{color:#8a6d3b;background-color:#fcf8e3}a.list-group-item-warning,button.list-group-item-warning{color:#8a6d3b}a.list-group-item-warning .list-group-item-heading,button.list-group-item-warning .list-group-item-heading{color:inherit}a.list-group-item-warning:focus,a.list-group-item-warning:hover,button.list-group-item-warning:focus,button.list-group-item-warning:hover{color:#8a6d3b;background-color:#faf2cc}a.list-group-item-warning.active,a.list-group-item-warning.active:focus,a.list-group-item-warning.active:hover,button.list-group-item-warning.active,button.list-group-item-warning.active:focus,button.list-group-item-warning.active:hover{color:#fff;background-color:#8a6d3b;border-color:#8a6d3b}.list-group-item-danger{color:#a94442;background-color:#f2dede}a.list-group-item-danger,button.list-group-item-danger{color:#a94442}a.list-group-item-danger .list-group-item-heading,button.list-group-item-danger .list-group-item-heading{color:inherit}a.list-group-item-danger:focus,a.list-group-item-danger:hover,button.list-group-item-danger:focus,button.list-group-item-danger:hover{color:#a94442;background-color:#ebcccc}a.list-group-item-danger.active,a.list-group-item-danger.active:focus,a.list-group-item-danger.active:hover,button.list-group-item-danger.active,button.list-group-item-danger.active:focus,button.list-group-item-danger.active:hover{color:#fff;background-color:#a94442;border-color:#a94442}.list-group-item-heading{margin-top:0;margin-bottom:5px}.list-group-item-text{margin-bottom:0;line-height:1.3}.panel{margin-bottom:20px;background-color:#fff;border:1px solid transparent;border-radius:4px;box-shadow:0 1px 1px rgba(0,0,0,.05)}.panel-body{padding:15px}.panel-body:after,.panel-body:before{content:\" \";display:table}.panel-body:after{clear:both}.panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-right-radius:3px;border-top-left-radius:3px}.panel-heading>.dropdown .dropdown-toggle,.panel-title{color:inherit}.panel-title{margin-top:0;margin-bottom:0;font-size:16px}.panel-title>.small,.panel-title>.small>a,.panel-title>a,.panel-title>small,.panel-title>small>a{color:inherit}.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.list-group,.panel>.panel-collapse>.list-group{margin-bottom:0}.panel>.list-group .list-group-item,.panel>.panel-collapse>.list-group .list-group-item{border-width:1px 0;border-radius:0}.panel>.list-group:first-child .list-group-item:first-child,.panel>.panel-collapse>.list-group:first-child .list-group-item:first-child{border-top:0;border-top-right-radius:3px;border-top-left-radius:3px}.panel>.list-group:last-child .list-group-item:last-child,.panel>.panel-collapse>.list-group:last-child .list-group-item:last-child{border-bottom:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.panel-heading+.panel-collapse>.list-group .list-group-item:first-child{border-top-right-radius:0;border-top-left-radius:0}.list-group+.panel-footer,.panel-heading+.list-group .list-group-item:first-child{border-top-width:0}.panel>.panel-collapse>.table,.panel>.table,.panel>.table-responsive>.table{margin-bottom:0}.panel>.panel-collapse>.table caption,.panel>.table-responsive>.table caption,.panel>.table caption{padding-left:15px;padding-right:15px}.panel>.table-responsive:first-child>.table:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child,.panel>.table:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child,.panel>.table:first-child>thead:first-child>tr:first-child{border-top-right-radius:3px;border-top-left-radius:3px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table:first-child>thead:first-child>tr:first-child th:first-child{border-top-left-radius:3px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table:first-child>thead:first-child>tr:first-child th:last-child{border-top-right-radius:3px}.panel>.table-responsive:last-child>.table:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child,.panel>.table:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:first-child{border-bottom-left-radius:3px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:last-child{border-bottom-right-radius:3px}.panel>.panel-body+.table,.panel>.panel-body+.table-responsive,.panel>.table+.panel-body,.panel>.table-responsive+.panel-body{border-top:1px solid #ddd}.panel>.table>tbody:first-child>tr:first-child td,.panel>.table>tbody:first-child>tr:first-child th{border-top:0}.panel>.table-bordered,.panel>.table-responsive>.table-bordered{border:0}.panel>.table-bordered>tbody>tr>td:first-child,.panel>.table-bordered>tbody>tr>th:first-child,.panel>.table-bordered>tfoot>tr>td:first-child,.panel>.table-bordered>tfoot>tr>th:first-child,.panel>.table-bordered>thead>tr>td:first-child,.panel>.table-bordered>thead>tr>th:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:first-child,.panel>.table-responsive>.table-bordered>thead>tr>td:first-child,.panel>.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.panel>.table-bordered>tbody>tr>td:last-child,.panel>.table-bordered>tbody>tr>th:last-child,.panel>.table-bordered>tfoot>tr>td:last-child,.panel>.table-bordered>tfoot>tr>th:last-child,.panel>.table-bordered>thead>tr>td:last-child,.panel>.table-bordered>thead>tr>th:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:last-child,.panel>.table-responsive>.table-bordered>thead>tr>td:last-child,.panel>.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.panel>.table-bordered>tbody>tr:first-child>td,.panel>.table-bordered>tbody>tr:first-child>th,.panel>.table-bordered>tbody>tr:last-child>td,.panel>.table-bordered>tbody>tr:last-child>th,.panel>.table-bordered>tfoot>tr:last-child>td,.panel>.table-bordered>tfoot>tr:last-child>th,.panel>.table-bordered>thead>tr:first-child>td,.panel>.table-bordered>thead>tr:first-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>th,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>td,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>th,.panel>.table-responsive>.table-bordered>thead>tr:first-child>td,.panel>.table-responsive>.table-bordered>thead>tr:first-child>th{border-bottom:0}.panel>.table-responsive{border:0;margin-bottom:0}.panel-group{margin-bottom:20px}.panel-group .panel{margin-bottom:0;border-radius:4px}.panel-group .panel+.panel{margin-top:5px}.panel-group .panel-heading{border-bottom:0}.panel-group .panel-heading+.panel-collapse>.list-group,.panel-group .panel-heading+.panel-collapse>.panel-body{border-top:1px solid #ddd}.panel-group .panel-footer{border-top:0}.panel-group .panel-footer+.panel-collapse .panel-body{border-bottom:1px solid #ddd}.panel-default{border-color:#ddd}.panel-default>.panel-heading{color:#333;background-color:#f5f5f5;border-color:#ddd}.panel-default>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ddd}.panel-default>.panel-heading .badge{color:#f5f5f5;background-color:#333}.panel-default>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ddd}.panel-primary{border-color:#337ab7}.panel-primary>.panel-heading{color:#fff;background-color:#337ab7;border-color:#337ab7}.panel-primary>.panel-heading+.panel-collapse>.panel-body{border-top-color:#337ab7}.panel-primary>.panel-heading .badge{color:#337ab7;background-color:#fff}.panel-primary>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#337ab7}.panel-success{border-color:#d6e9c6}.panel-success>.panel-heading{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.panel-success>.panel-heading+.panel-collapse>.panel-body{border-top-color:#d6e9c6}.panel-success>.panel-heading .badge{color:#dff0d8;background-color:#3c763d}.panel-success>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#d6e9c6}.panel-info{border-color:#bce8f1}.panel-info>.panel-heading{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.panel-info>.panel-heading+.panel-collapse>.panel-body{border-top-color:#bce8f1}.panel-info>.panel-heading .badge{color:#d9edf7;background-color:#31708f}.panel-info>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#bce8f1}.panel-warning{border-color:#faebcc}.panel-warning>.panel-heading{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.panel-warning>.panel-heading+.panel-collapse>.panel-body{border-top-color:#faebcc}.panel-warning>.panel-heading .badge{color:#fcf8e3;background-color:#8a6d3b}.panel-warning>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#faebcc}.panel-danger{border-color:#ebccd1}.panel-danger>.panel-heading{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.panel-danger>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ebccd1}.panel-danger>.panel-heading .badge{color:#f2dede;background-color:#a94442}.panel-danger>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ebccd1}.embed-responsive{position:relative;display:block;height:0;padding:0;overflow:hidden}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;left:0;bottom:0;height:100%;width:100%;border:0}.embed-responsive-16by9{padding-bottom:56.25%}.embed-responsive-4by3{padding-bottom:75%}.well{min-height:20px;padding:19px;margin-bottom:20px;background-color:#f5f5f5;border:1px solid #e3e3e3;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,.05)}.well blockquote{border-color:#ddd;border-color:rgba(0,0,0,.15)}.well-lg{padding:24px;border-radius:6px}.well-sm{padding:9px;border-radius:3px}.close{float:right;font-size:21px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.2;filter:alpha(opacity=20)}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.5;filter:alpha(opacity=50)}button.close{padding:0;cursor:pointer;background:transparent;border:0;-webkit-appearance:none}.modal,.modal-open{overflow:hidden}.modal{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0}.modal.fade .modal-dialog{transform:translateY(-25%);transition:transform .3s ease-out}.modal.in .modal-dialog{transform:translate(0)}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;box-shadow:0 3px 9px rgba(0,0,0,.5);background-clip:padding-box;outline:0}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{opacity:0;filter:alpha(opacity=0)}.modal-backdrop.in{opacity:.5;filter:alpha(opacity=50)}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5}.modal-header:after,.modal-header:before{content:\" \";display:table}.modal-header:after{clear:both}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}.modal-footer:after,.modal-footer:before{content:\" \";display:table}.modal-footer:after{clear:both}.modal-footer .btn+.btn{margin-left:5px;margin-bottom:0}.modal-footer .btn-group .btn+.btn{margin-left:-1px}.modal-footer .btn-block+.btn-block{margin-left:0}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{box-shadow:0 5px 15px rgba(0,0,0,.5)}.modal-sm{width:300px}}@media (min-width:992px){.modal-lg{width:900px}}.tooltip{position:absolute;z-index:1070;display:block;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.42857;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;word-wrap:normal;font-size:12px;opacity:0;filter:alpha(opacity=0)}.tooltip.in{opacity:.9;filter:alpha(opacity=90)}.tooltip.top{margin-top:-3px;padding:5px 0}.tooltip.right{margin-left:3px;padding:0 5px}.tooltip.bottom{margin-top:3px;padding:5px 0}.tooltip.left{margin-left:-3px;padding:0 5px}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;background-color:#000;border-radius:4px}.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-left .tooltip-arrow{right:5px}.tooltip.top-left .tooltip-arrow,.tooltip.top-right .tooltip-arrow{bottom:0;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-right .tooltip-arrow{left:5px}.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000}.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000}.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-left .tooltip-arrow{top:0;right:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-right .tooltip-arrow{top:0;left:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.popover{position:absolute;top:0;left:0;z-index:1060;display:none;max-width:276px;padding:1px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.42857;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;word-wrap:normal;font-size:14px;background-color:#fff;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.2);border-radius:6px;box-shadow:0 5px 10px rgba(0,0,0,.2)}.popover.top{margin-top:-10px}.popover.right{margin-left:10px}.popover.bottom{margin-top:10px}.popover.left{margin-left:-10px}.popover-title{margin:0;padding:8px 14px;font-size:14px;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-radius:5px 5px 0 0}.popover-content{padding:9px 14px}.popover>.arrow,.popover>.arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover>.arrow{border-width:11px}.popover>.arrow:after{border-width:10px;content:\"\"}.popover.top>.arrow{left:50%;margin-left:-11px;border-bottom-width:0;border-top-color:#999;border-top-color:rgba(0,0,0,.25);bottom:-11px}.popover.top>.arrow:after{content:\" \";bottom:1px;margin-left:-10px;border-bottom-width:0;border-top-color:#fff}.popover.right>.arrow{top:50%;left:-11px;margin-top:-11px;border-left-width:0;border-right-color:#999;border-right-color:rgba(0,0,0,.25)}.popover.right>.arrow:after{content:\" \";left:1px;bottom:-10px;border-left-width:0;border-right-color:#fff}.popover.bottom>.arrow{left:50%;margin-left:-11px;border-top-width:0;border-bottom-color:#999;border-bottom-color:rgba(0,0,0,.25);top:-11px}.popover.bottom>.arrow:after{content:\" \";top:1px;margin-left:-10px;border-top-width:0;border-bottom-color:#fff}.popover.left>.arrow{top:50%;right:-11px;margin-top:-11px;border-right-width:0;border-left-color:#999;border-left-color:rgba(0,0,0,.25)}.popover.left>.arrow:after{content:\" \";right:1px;border-right-width:0;border-left-color:#fff;bottom:-10px}.carousel,.carousel-inner{position:relative}.carousel-inner{overflow:hidden;width:100%}.carousel-inner>.item{display:none;position:relative;transition:left .6s ease-in-out}.carousel-inner>.item>a>img,.carousel-inner>.item>img{display:block;max-width:100%;height:auto;line-height:1}@media (-webkit-transform-3d),(transform-3d){.carousel-inner>.item{transition:transform .6s ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;perspective:1000px}.carousel-inner>.item.active.right,.carousel-inner>.item.next{transform:translate3d(100%,0,0);left:0}.carousel-inner>.item.active.left,.carousel-inner>.item.prev{transform:translate3d(-100%,0,0);left:0}.carousel-inner>.item.active,.carousel-inner>.item.next.left,.carousel-inner>.item.prev.right{transform:translateZ(0);left:0}}.carousel-inner>.active,.carousel-inner>.next,.carousel-inner>.prev{display:block}.carousel-inner>.active{left:0}.carousel-inner>.next,.carousel-inner>.prev{position:absolute;top:0;width:100%}.carousel-inner>.next{left:100%}.carousel-inner>.prev{left:-100%}.carousel-inner>.next.left,.carousel-inner>.prev.right{left:0}.carousel-inner>.active.left{left:-100%}.carousel-inner>.active.right{left:100%}.carousel-control{position:absolute;top:0;left:0;bottom:0;width:15%;opacity:.5;filter:alpha(opacity=50);font-size:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6);background-color:transparent}.carousel-control.left{background-image:linear-gradient(90deg,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001));background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#80000000\",endColorstr=\"#00000000\",GradientType=1)}.carousel-control.right{left:auto;right:0;background-image:linear-gradient(90deg,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5));background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#00000000\",endColorstr=\"#80000000\",GradientType=1)}.carousel-control:focus,.carousel-control:hover{outline:0;color:#fff;text-decoration:none;opacity:.9;filter:alpha(opacity=90)}.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next,.carousel-control .icon-prev{position:absolute;top:50%;margin-top:-10px;z-index:5;display:inline-block}.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev{left:50%;margin-left:-10px}.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next{right:50%;margin-right:-10px}.carousel-control .icon-next,.carousel-control .icon-prev{width:20px;height:20px;line-height:1;font-family:serif}.carousel-control .icon-prev:before{content:\"\\2039\"}.carousel-control .icon-next:before{content:\"\\203A\"}.carousel-indicators{position:absolute;bottom:10px;left:50%;z-index:15;width:60%;margin-left:-30%;padding-left:0;list-style:none;text-align:center}.carousel-indicators li{display:inline-block;width:10px;height:10px;margin:1px;text-indent:-999px;border:1px solid #fff;border-radius:10px;cursor:pointer;background-color:#000\\9;background-color:transparent}.carousel-indicators .active{margin:0;width:12px;height:12px;background-color:#fff}.carousel-caption{position:absolute;left:15%;right:15%;bottom:20px;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6)}.carousel-caption .btn{text-shadow:none}@media screen and (min-width:768px){.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next,.carousel-control .icon-prev{width:30px;height:30px;margin-top:-10px;font-size:30px}.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev{margin-left:-10px}.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next{margin-right:-10px}.carousel-caption{left:20%;right:20%;padding-bottom:30px}.carousel-indicators{bottom:20px}}.clearfix:after,.clearfix:before{content:\" \";display:table}.clearfix:after{clear:both}.center-block{display:block;margin-left:auto;margin-right:auto}.pull-right{float:right!important}.pull-left{float:left!important}.hide{display:none!important}.show{display:block!important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none!important}.affix{position:fixed}@-ms-viewport{width:device-width}.visible-lg,.visible-lg-block,.visible-lg-inline,.visible-lg-inline-block,.visible-md,.visible-md-block,.visible-md-inline,.visible-md-inline-block,.visible-sm,.visible-sm-block,.visible-sm-inline,.visible-sm-inline-block,.visible-xs,.visible-xs-block,.visible-xs-inline,.visible-xs-inline-block{display:none!important}@media (max-width:767px){.visible-xs{display:block!important}table.visible-xs{display:table!important}tr.visible-xs{display:table-row!important}td.visible-xs,th.visible-xs{display:table-cell!important}}@media (max-width:767px){.visible-xs-block{display:block!important}}@media (max-width:767px){.visible-xs-inline{display:inline!important}}@media (max-width:767px){.visible-xs-inline-block{display:inline-block!important}}@media (min-width:768px) and (max-width:991px){.visible-sm{display:block!important}table.visible-sm{display:table!important}tr.visible-sm{display:table-row!important}td.visible-sm,th.visible-sm{display:table-cell!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-block{display:block!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline{display:inline!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline-block{display:inline-block!important}}@media (min-width:992px) and (max-width:1199px){.visible-md{display:block!important}table.visible-md{display:table!important}tr.visible-md{display:table-row!important}td.visible-md,th.visible-md{display:table-cell!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-block{display:block!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline{display:inline!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline-block{display:inline-block!important}}@media (min-width:1200px){.visible-lg{display:block!important}table.visible-lg{display:table!important}tr.visible-lg{display:table-row!important}td.visible-lg,th.visible-lg{display:table-cell!important}}@media (min-width:1200px){.visible-lg-block{display:block!important}}@media (min-width:1200px){.visible-lg-inline{display:inline!important}}@media (min-width:1200px){.visible-lg-inline-block{display:inline-block!important}}@media (max-width:767px){.hidden-xs{display:none!important}}@media (min-width:768px) and (max-width:991px){.hidden-sm{display:none!important}}@media (min-width:992px) and (max-width:1199px){.hidden-md{display:none!important}}@media (min-width:1200px){.hidden-lg{display:none!important}}.visible-print{display:none!important}@media print{.visible-print{display:block!important}table.visible-print{display:table!important}tr.visible-print{display:table-row!important}td.visible-print,th.visible-print{display:table-cell!important}}.visible-print-block{display:none!important}@media print{.visible-print-block{display:block!important}}.visible-print-inline{display:none!important}@media print{.visible-print-inline{display:inline!important}}.visible-print-inline-block{display:none!important}@media print{.visible-print-inline-block{display:inline-block!important}}@media print{.hidden-print{display:none!important}}.wpng-resource-list{margin:0;padding:0;width:100%}.wpng-resource-list li{list-style-type:none;width:33%;display:inline-block}.wpng-resource-list li a{font-size:1.1em;font-weight:700;display:block}.wpng-resource-list-body{padding:0}.wpng-resource-list-placeholder{margin:.7em}.wpng-resource-list-info{color:#999;font-size:.9em}.wpng-resource-list-info span{font-style:italic}@media only screen and (min-width:1600px){.wpng-resource-list li{width:25%}}@media only screen and (max-width:900px){.wpng-resource-list li{width:50%}}@media only screen and (max-width:700px){.wpng-resource-list li{width:100%}.wpng-resource-list-placeholder{margin:.7em .2em}}", "", {"version":3,"sources":["/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_normalize.scss","/home/sadist/nodejs/aladon/src/index.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_print.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_glyphicons.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_scaffolding.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_vendor-prefixes.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_tab-focus.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_image.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_type.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_text-emphasis.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_background-variant.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_clearfix.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_text-overflow.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_code.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_grid.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_grid.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_grid-framework.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_tables.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_table-row.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_forms.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_forms.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_buttons.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_buttons.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_opacity.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_component-animations.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_dropdowns.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_nav-divider.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_reset-filter.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_button-groups.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_border-radius.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_input-groups.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_navs.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_navbar.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_nav-vertical-align.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_breadcrumbs.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_pagination.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_pagination.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_pager.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_labels.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_labels.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_badges.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_jumbotron.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_thumbnails.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_alerts.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_alerts.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_progress-bars.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_gradients.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_progress-bar.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_media.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_list-group.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_list-group.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_panels.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_panels.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_responsive-embed.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_wells.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_close.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_modals.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_tooltip.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_reset-text.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_popovers.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_carousel.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_utilities.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_center-block.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_hide-text.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_responsive-utilities.scss","/home/sadist/nodejs/aladon/src/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_responsive-visibility.scss","/home/sadist/nodejs/aladon/src/src/index.scss"],"names":[],"mappings":"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bD,kYAUI,eAAe,AACf,eAAgB,CACjB,ACxPD,iHACE,YfkJ+G,AejJ/G,iBf6B4B,Ae5B5B,efpBoD,AeqBpD,gBfiC2B,AehC3B,iBfoC2B,CenC5B,AAED,yIACE,Yf0I+G,AezI/G,gBfyI+G,CexIhH,AAED,kUAEE,WAAY,CACb,ADqPH,6BAEI,YdpH+G,AcqH/G,iBdzO4B,Ac0O5B,ed1RoD,Ac2RpD,gBdrO2B,AcsO3B,iBdlO2B,CcmO5B,AAPH,mCASI,Yd3H+G,Ac4H/G,gBd5H+G,Cc6HhH,AAXH,kFAcI,WAAY,CACb,AAfH,oCAiBI,YdnI+G,AcoI/G,gBAAsD,AACtD,iBdzP4B,Ac0P5B,ed1SoD,Ac2SpD,edrP2B,CcsP5B,AC3RD,iHACE,YfgJ8G,Ae/I9G,kBf0B4B,AezB5B,efrBoD,AesBpD,oBfgCiC,Ae/BjC,iBfmC2B,CelC5B,AAED,yIACE,YfwI8G,AevI9G,gBfuI8G,CetI/G,AAED,kUAEE,WAAY,CACb,AD+QH,6BAEI,YdhJ8G,AciJ9G,kBdtQ4B,AcuQ5B,edrToD,AcsTpD,oBdhQiC,AciQjC,iBd7P2B,Cc8P5B,AAPH,mCASI,YdvJ8G,AcwJ9G,gBdxJ8G,CcyJ/G,AAXH,kFAcI,WAAY,CACb,AAfH,oCAiBI,Yd/J8G,AcgK9G,gBAAsD,AACtD,kBdtR4B,AcuR5B,edrUoD,AcsUpD,mBdhRiC,CciRlC,AAQH,cAEE,iBAAkB,CAMnB,AARD,4BAMI,oBAA0C,CAC3C,AAGH,uBACE,kBAAkB,AAClB,MAAM,AACN,QAAQ,AACR,UAAU,AACV,cAAc,AACd,Wd9LyF,Ac+LzF,Yd/LyF,AcgMzF,iBdhMyF,AciMzF,kBAAkB,AAClB,mBAAoB,CACrB,AACD,wSAGE,WdrMgH,AcsMhH,YdtMgH,AcuMhH,gBdvMgH,CcwMjH,AACD,wSAGE,Wd1MiH,Ac2MjH,Yd3MiH,Ac4MjH,gBd5MiH,Cc6MlH,AC/ZC,iRAUE,afseoC,CererC,AAED,2BACE,qBfkeoC,ADlb9B,2CgB/C8C,CAMrD,AARD,iCAII,qBAAwC,AhB6CpC,2DgB5C0E,CAE/E,AAGH,gCACE,cfwdoC,AevdpC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B+BnC,oBjB6GkD,CiB5GvD,AAGH,oBACE,cjBpCyC,AiBqCzC,qBjBqGiC,CiBpGlC,ADmBH,aCpEE,WjByJmC,AiBxJnC,yBjBW6B,AiBV7B,oBjByJ0D,CgBrF3D,AClEC,sCAEE,WjBmJiC,AiBlJjC,yBAA0C,AACtC,oBAAkC,CACvC,AAMD,8FAGE,WjBuIiC,AiBtIjC,yBAA0C,AACtC,oBAAkC,CASvC,AAPC,uRAGE,WjBgI+B,AiB/H/B,yBAA0C,AACtC,oBAAkC,CACvC,AAEH,2EAGE,qBAAsB,CACvB,AAIC,6RAGE,yBjB7ByB,AiB8BrB,oBjBiHkD,CiBhHvD,AAGH,oBACE,cjBnC2B,AiBoC3B,qBjByGiC,CiBxGlC,ADuBH,UCxEE,WjB6JmC,AiB5JnC,yBjBY6B,AiBX7B,oBjB6JuD,CgBrFxD,ACtEC,gCAEE,WjBuJiC,AiBtJjC,yBAA0C,AACtC,oBAAkC,CACvC,AAMD,kFAGE,WjB2IiC,AiB1IjC,yBAA0C,AACtC,oBAAkC,CASvC,AAPC,4PAGE,WjBoI+B,AiBnI/B,yBAA0C,AACtC,oBAAkC,CACvC,AAEH,kEAGE,qBAAsB,CACvB,AAIC,kQAGE,yBjB5ByB,AiB6BrB,oBjBqH+C,CiBpHpD,AAGH,iBACE,cjBlC2B,AiBmC3B,qBjB6GiC,CiB5GlC,AD2BH,aC5EE,WjBiKmC,AiBhKnC,yBjBa6B,AiBZ7B,oBjBiK0D,CgBrF3D,AC1EC,sCAEE,WjB2JiC,AiB1JjC,yBAA0C,AACtC,oBAAkC,CACvC,AAMD,8FAGE,WjB+IiC,AiB9IjC,yBAA0C,AACtC,oBAAkC,CASvC,AAPC,uRAGE,WjBwI+B,AiBvI/B,yBAA0C,AACtC,oBAAkC,CACvC,AAEH,2EAGE,qBAAsB,CACvB,AAIC,6RAGE,yBjB3ByB,AiB4BrB,oBjByHkD,CiBxHvD,AAGH,oBACE,cjBjC2B,AiBkC3B,qBjBiHiC,CiBhHlC,AD+BH,YChFE,WjBqKmC,AiBpKnC,yBjBc6B,AiBb7B,oBjBqKyD,CgBrF1D,AC9EC,oCAEE,WjB+JiC,AiB9JjC,yBAA0C,AACtC,oBAAkC,CACvC,AAMD,0FAGE,WjBmJiC,A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2BxByG4B,AwBlG7B,6BGmU+B,AHlU9B,2BGkU8B,CAChC,AAOD,YChVE,eAAoD,AACpD,iBAAuD,CDwVxD,AATD,iDChVE,gBAAoD,AACpD,kBAAuD,CDoVtD,AALH,iDChVE,gBAAoD,AACpD,kBAAuD,CDuVtD,AAQH,aChWE,gBAAoD,AACpD,kBAAuD,CDuWxD,AALC,yBAHF,aAII,WAAW,AACX,iB3BI8D,A2BH9D,iB3BG8D,C2BDjE,CAAA,AAWD,yBACE,aACE,oBAAsB,CACvB,AACD,cACE,sBAAuB,AACzB,kB3BhBgE,C2BqB/D,AAPD,4BAKI,cAAe,CAChB,CAAA,AASL,gBACE,yB3BzBwC,A2B0BxC,oB3BzBiE,C2ByJlE,AAlID,8BAKI,U3BzB2C,C2B+B5C,AAXH,wEAQM,c3BlB6E,A2BmB7E,4B3BlBgD,C2BmBjD,AAVL,8DAmBM,U3BvCyC,C2B8C1C,AA1BL,8EAuBQ,W3B1CuC,A2B2CvC,4B3B1C8C,C2B2C/C,AAzBP,8HA+BQ,W3BhDuC,A2BiDvC,wB3BhDmE,C2BiDpE,AAjCP,oIAuCQ,W3BtDuC,A2BuDvC,4B3BtD8C,C2BuD/C,AAzCP,+BA8CI,iB3BlD2C,C2B0D5C,AAtDH,0EAiDM,qB3BvDyC,C2BwD1C,AAlDL,yCAoDM,qB3BzDyC,C2B0D1C,AArDL,8DA0DI,oB3BjF+D,C2BkFhE,AA3DH,wHAoEQ,yB3BpFmE,A2BqFnE,U3BtFuC,C2BuFxC,AAGH,yBAzEJ,sDA6EU,U3BjGqC,C2BuGtC,AAnFT,wHAgFY,W3BnGmC,A2BoGnC,4B3BnG0C,C2BoG3C,AAlFX,6LAwFY,W3BzGmC,A2B0GnC,wB3BzG+D,C2B0GhE,AA1FX,mMAgGY,W3B/GmC,A2BgHnC,4B3B/G0C,C2BgH3C,CAAA,AAlGX,6BA8GI,U3BlI2C,C2BsI5C,AAlHH,mCAgHM,U3BnIyC,C2BoI1C,AAjHL,0BAqHI,U3BzI2C,C2BqJ5C,AAjIH,gEAwHM,U3B3IyC,C2B4I1C,AAzHL,0LA8HQ,U3B7IuC,C2B8IxC,AAOP,gBACE,sB3BrI8C,A2BsI9C,oB3BrIyE,C2BsQ1E,AAnID,8BAKI,a3BrIiE,C2B2IlE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C/rB/B,AAPqB,0DAClB,qB/CqsB4B,C+CpsB7B,AACD,qCACE,c/CmsB+B,A+ClsB/B,qB/CH2C,C+CI5C,AAGmB,yDAClB,wB/C4rB4B,C+C3rB7B,AD2OL,eC7PE,oB/Cc2C,C8CiP5C,AC7PK,8BACF,W/C6sB8B,A+C5sB9B,yB/CUyC,A+CTzC,oB/CSyC,C+CA1C,AAPqB,0DAClB,wB/CMuC,C+CLxC,AACD,qCACE,c/CGuC,A+CFvC,qB/CosB4B,C+CnsB7B,AAGmB,yDAClB,2B/CHuC,C+CIxC,AD8OL,eChQE,oB/Csf6E,C8CpP9E,AChQK,8BACF,c/CifoC,A+ChfpC,yB/CifoC,A+ChfpC,oB/Cif2E,C+Cxe5E,AAPqB,0DAClB,wB/C8eyE,C+C7e1E,AACD,qCACE,c/C0ekC,A+CzelC,wB/CwekC,C+CvenC,AAGmB,yDAClB,2B/CqeyE,C+Cpe1E,ADiPL,YCnQE,oB/C0f0E,C8CrP3E,ACnQK,2BACF,c/CqfoC,A+CpfpC,yB/CqfoC,A+CpfpC,oB/CqfwE,C+C5ezE,AAPqB,uDAClB,wB/CkfsE,C+CjfvE,AACD,kCACE,c/C8ekC,A+C7elC,wB/C4ekC,C+C3enC,AAGmB,sDAClB,2B/CyesE,C+CxevE,ADoPL,eCtQE,oB/C8f6E,C8CtP9E,ACtQK,8BACF,c/CyfoC,A+CxfpC,yB/CyfoC,A+CxfpC,oB/Cyf2E,C+Chf5E,AAPqB,0DAClB,wB/CsfyE,C+Crf1E,AACD,qCACE,c/CkfkC,A+CjflC,wB/CgfkC,C+C/enC,AAGmB,yDAClB,2B/C6eyE,C+C5e1E,ADuPL,cCzQE,oB/CkgB4E,C8CvP7E,ACzQK,6BACF,c/C6foC,A+C5fpC,yB/C6foC,A+C5fpC,oB/C6f0E,C+Cpf3E,AAPqB,yDAClB,wB/C0fwE,C+CzfzE,AACD,oCACE,c/CsfkC,A+CrflC,wB/CofkC,C+CnfnC,AAGmB,wDAClB,2B/CifwE,C+ChfzE,ACjBL,kBACE,kBAAkB,AAClB,cAAc,AACd,SAAS,AACT,UAAU,AACV,eAAgB,CAejB,AApBD,2IAYI,kBAAkB,AAClB,MAAM,AACN,OAAO,AACP,SAAS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","file":"index.scss","sourcesContent":["/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n//\n// 1. Set default font family to sans-serif.\n// 2. Prevent iOS and IE text size adjust after device orientation change,\n//    without disabling user zoom.\n//\n\nhtml {\n  font-family: sans-serif; // 1\n  -ms-text-size-adjust: 100%; // 2\n  -webkit-text-size-adjust: 100%; // 2\n}\n\n//\n// Remove default margin.\n//\n\nbody {\n  margin: 0;\n}\n\n// HTML5 display definitions\n// ==========================================================================\n\n//\n// Correct `block` display not defined for any HTML5 element in IE 8/9.\n// Correct `block` display not defined for `details` or `summary` in IE 10/11\n// and Firefox.\n// Correct `block` display not defined for `main` in IE 11.\n//\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n//\n// 1. Correct `inline-block` display not defined in IE 8/9.\n// 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n//\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; // 1\n  vertical-align: baseline; // 2\n}\n\n//\n// Prevent modern browsers from displaying `audio` without controls.\n// Remove excess height in iOS 5 devices.\n//\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n//\n// Address `[hidden]` styling not present in IE 8/9/10.\n// Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n//\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n// Links\n// ==========================================================================\n\n//\n// Remove the gray background color from active links in IE 10.\n//\n\na {\n  background-color: transparent;\n}\n\n//\n// Improve readability of focused elements when they are also in an\n// active/hover state.\n//\n\na:active,\na:hover {\n  outline: 0;\n}\n\n// Text-level semantics\n// ==========================================================================\n\n//\n// Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n//\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n//\n// Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n//\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n//\n// Address styling not present in Safari and Chrome.\n//\n\ndfn {\n  font-style: italic;\n}\n\n//\n// Address variable `h1` font-size and margin within `section` and `article`\n// contexts in Firefox 4+, Safari, and Chrome.\n//\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n//\n// Address styling not present in IE 8/9.\n//\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n//\n// Address inconsistent and variable font size in all browsers.\n//\n\nsmall {\n  font-size: 80%;\n}\n\n//\n// Prevent `sub` and `sup` affecting `line-height` in all browsers.\n//\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n// Embedded content\n// ==========================================================================\n\n//\n// Remove border when inside `a` element in IE 8/9/10.\n//\n\nimg {\n  border: 0;\n}\n\n//\n// Correct overflow not hidden in IE 9/10/11.\n//\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n// Grouping content\n// ==========================================================================\n\n//\n// Address margin not present in IE 8/9 and Safari.\n//\n\nfigure {\n  margin: 1em 40px;\n}\n\n//\n// Address differences between Firefox and other browsers.\n//\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n//\n// Contain overflow in all browsers.\n//\n\npre {\n  overflow: auto;\n}\n\n//\n// Address odd `em`-unit font size rendering in all browsers.\n//\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n// Forms\n// ==========================================================================\n\n//\n// Known limitation: by default, Chrome and Safari on OS X allow very limited\n// styling of `select`, unless a `border` property is set.\n//\n\n//\n// 1. Correct color not being inherited.\n//    Known issue: affects color of disabled elements.\n// 2. Correct font properties not being inherited.\n// 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n//\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; // 1\n  font: inherit; // 2\n  margin: 0; // 3\n}\n\n//\n// Address `overflow` set to `hidden` in IE 8/9/10/11.\n//\n\nbutton {\n  overflow: visible;\n}\n\n//\n// Address inconsistent `text-transform` inheritance for `button` and `select`.\n// All other form control elements do not inherit `text-transform` values.\n// Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n// Correct `select` style inheritance in Firefox.\n//\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n//\n// 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n//    and `video` controls.\n// 2. Correct inability to style clickable `input` types in iOS.\n// 3. Improve usability and consistency of cursor style between image-type\n//    `input` and others.\n//\n\nbutton,\nhtml input[type=\"button\"], // 1\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; // 2\n  cursor: pointer; // 3\n}\n\n//\n// Re-set default cursor for disabled elements.\n//\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n//\n// Remove inner padding and border in Firefox 4+.\n//\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n//\n// Address Firefox 4+ setting `line-height` on `input` using `!important` in\n// the UA stylesheet.\n//\n\ninput {\n  line-height: normal;\n}\n\n//\n// It's recommended that you don't attempt to style these elements.\n// Firefox's implementation doesn't respect box-sizing, padding, or width.\n//\n// 1. Address box sizing set to `content-box` in IE 8/9/10.\n// 2. Remove excess padding in IE 8/9/10.\n//\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; // 1\n  padding: 0; // 2\n}\n\n//\n// Fix the cursor style for Chrome's increment/decrement buttons. For certain\n// `font-size` values of the `input`, it causes the cursor style of the\n// decrement button to change from `default` to `text`.\n//\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n//\n// 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n// 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n//\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; // 1\n  box-sizing: content-box; //2\n}\n\n//\n// Remove inner padding and search cancel button in Safari and Chrome on OS X.\n// Safari (but not Chrome) clips the cancel button when the search input has\n// padding (and `textfield` appearance).\n//\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n//\n// Define consistent border, margin, and padding.\n//\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n//\n// 1. Correct `color` not being inherited in IE 8/9/10/11.\n// 2. Remove padding so people aren't caught out if they zero out fieldsets.\n//\n\nlegend {\n  border: 0; // 1\n  padding: 0; // 2\n}\n\n//\n// Remove default vertical scrollbar in IE 8/9/10/11.\n//\n\ntextarea {\n  overflow: auto;\n}\n\n//\n// Don't inherit the `font-weight` (applied by a rule above).\n// NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n//\n\noptgroup {\n  font-weight: bold;\n}\n\n// Tables\n// ==========================================================================\n\n//\n// Remove most spacing between table cells.\n//\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n","@charset \"UTF-8\";\n/*!\n * Bootstrap v3.3.7 (http://getbootstrap.com)\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden],\ntemplate {\n  display: none; }\n\na {\n  background-color: transparent; }\n\na:active,\na:hover {\n  outline: 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\npre {\n  overflow: auto; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\n\nbutton {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput {\n  line-height: normal; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto; }\n\noptgroup {\n  font-weight: bold; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important;\n    box-shadow: none !important;\n    text-shadow: none !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  a[href]:after {\n    content: \" (\" attr(href) \")\"; }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\"; }\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\"; }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  img {\n    max-width: 100% !important; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  .navbar {\n    display: none; }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important; }\n  .label {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important; } }\n\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url(\"~bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.eot\");\n  src: url(\"~bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"~bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff2\") format(\"woff2\"), url(\"~bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff\") format(\"woff\"), url(\"~bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.ttf\") format(\"truetype\"), url(\"~bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.svg#glyphicons_halflingsregular\") format(\"svg\"); }\n\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.glyphicon-asterisk:before {\n  content: \"\\002a\"; }\n\n.glyphicon-plus:before {\n  content: \"\\002b\"; }\n\n.glyphicon-euro:before,\n.glyphicon-eur:before {\n  content: \"\\20ac\"; }\n\n.glyphicon-minus:before {\n  content: \"\\2212\"; }\n\n.glyphicon-cloud:before {\n  content: \"\\2601\"; }\n\n.glyphicon-envelope:before {\n  content: \"\\2709\"; }\n\n.glyphicon-pencil:before {\n  content: \"\\270f\"; }\n\n.glyphicon-glass:before {\n  content: \"\\e001\"; }\n\n.glyphicon-music:before {\n  content: \"\\e002\"; }\n\n.glyphicon-search:before {\n  content: \"\\e003\"; }\n\n.glyphicon-heart:before {\n  content: \"\\e005\"; }\n\n.glyphicon-star:before {\n  content: \"\\e006\"; }\n\n.glyphicon-star-empty:before {\n  content: \"\\e007\"; }\n\n.glyphicon-user:before {\n  content: \"\\e008\"; }\n\n.glyphicon-film:before {\n  content: \"\\e009\"; }\n\n.glyphicon-th-large:before {\n  content: \"\\e010\"; }\n\n.glyphicon-th:before {\n  content: \"\\e011\"; }\n\n.glyphicon-th-list:before {\n  content: \"\\e012\"; }\n\n.glyphicon-ok:before {\n  content: \"\\e013\"; }\n\n.glyphicon-remove:before {\n  content: \"\\e014\"; }\n\n.glyphicon-zoom-in:before {\n  content: \"\\e015\"; }\n\n.glyphicon-zoom-out:before {\n  content: \"\\e016\"; }\n\n.glyphicon-off:before {\n  content: \"\\e017\"; }\n\n.glyphicon-signal:before {\n  content: \"\\e018\"; }\n\n.glyphicon-cog:before {\n  content: \"\\e019\"; }\n\n.glyphicon-trash:before {\n  content: \"\\e020\"; }\n\n.glyphicon-home:before {\n  content: \"\\e021\"; }\n\n.glyphicon-file:before {\n  content: \"\\e022\"; }\n\n.glyphicon-time:before {\n  content: \"\\e023\"; }\n\n.glyphicon-road:before {\n  content: \"\\e024\"; }\n\n.glyphicon-download-alt:before {\n  content: \"\\e025\"; }\n\n.glyphicon-download:before {\n  content: \"\\e026\"; }\n\n.glyphicon-upload:before {\n  content: \"\\e027\"; }\n\n.glyphicon-inbox:before {\n  content: \"\\e028\"; }\n\n.glyphicon-play-circle:before {\n  content: \"\\e029\"; }\n\n.glyphicon-repeat:before {\n  content: \"\\e030\"; }\n\n.glyphicon-refresh:before {\n  content: \"\\e031\"; }\n\n.glyphicon-list-alt:before {\n  content: \"\\e032\"; }\n\n.glyphicon-lock:before {\n  content: \"\\e033\"; }\n\n.glyphicon-flag:before {\n  content: \"\\e034\"; }\n\n.glyphicon-headphones:before {\n  content: \"\\e035\"; }\n\n.glyphicon-volume-off:before {\n  content: \"\\e036\"; }\n\n.glyphicon-volume-down:before {\n  content: \"\\e037\"; }\n\n.glyphicon-volume-up:before {\n  content: \"\\e038\"; }\n\n.glyphicon-qrcode:before {\n  content: \"\\e039\"; }\n\n.glyphicon-barcode:before {\n  content: \"\\e040\"; }\n\n.glyphicon-tag:before {\n  content: \"\\e041\"; }\n\n.glyphicon-tags:before {\n  content: \"\\e042\"; }\n\n.glyphicon-book:before {\n  content: \"\\e043\"; }\n\n.glyphicon-bookmark:before {\n  content: \"\\e044\"; }\n\n.glyphicon-print:before {\n  content: \"\\e045\"; }\n\n.glyphicon-camera:before {\n  content: \"\\e046\"; }\n\n.glyphicon-font:before {\n  content: \"\\e047\"; }\n\n.glyphicon-bold:before {\n  content: \"\\e048\"; }\n\n.glyphicon-italic:before {\n  content: \"\\e049\"; }\n\n.glyphicon-text-height:before {\n  content: \"\\e050\"; }\n\n.glyphicon-text-width:before {\n  content: \"\\e051\"; }\n\n.glyphicon-align-left:before {\n  content: \"\\e052\"; }\n\n.glyphicon-align-center:before {\n  content: \"\\e053\"; }\n\n.glyphicon-align-right:before {\n  content: \"\\e054\"; }\n\n.glyphicon-align-justify:before {\n  content: \"\\e055\"; }\n\n.glyphicon-list:before {\n  content: \"\\e056\"; }\n\n.glyphicon-indent-left:before {\n  content: \"\\e057\"; }\n\n.glyphicon-indent-right:before {\n  content: \"\\e058\"; }\n\n.glyphicon-facetime-video:before {\n  content: \"\\e059\"; }\n\n.glyphicon-picture:before {\n  content: \"\\e060\"; }\n\n.glyphicon-map-marker:before {\n  content: \"\\e062\"; }\n\n.glyphicon-adjust:before {\n  content: \"\\e063\"; }\n\n.glyphicon-tint:before {\n  content: \"\\e064\"; }\n\n.glyphicon-edit:before {\n  content: \"\\e065\"; }\n\n.glyphicon-share:before {\n  content: \"\\e066\"; }\n\n.glyphicon-check:before {\n  content: \"\\e067\"; }\n\n.glyphicon-move:before {\n  content: \"\\e068\"; }\n\n.glyphicon-step-backward:before {\n  content: \"\\e069\"; }\n\n.glyphicon-fast-backward:before {\n  content: \"\\e070\"; }\n\n.glyphicon-backward:before {\n  content: \"\\e071\"; }\n\n.glyphicon-play:before {\n  content: \"\\e072\"; }\n\n.glyphicon-pause:before {\n  content: \"\\e073\"; }\n\n.glyphicon-stop:before {\n  content: \"\\e074\"; }\n\n.glyphicon-forward:before {\n  content: \"\\e075\"; }\n\n.glyphicon-fast-forward:before {\n  content: \"\\e076\"; }\n\n.glyphicon-step-forward:before {\n  content: \"\\e077\"; }\n\n.glyphicon-eject:before {\n  content: \"\\e078\"; }\n\n.glyphicon-chevron-left:before {\n  content: \"\\e079\"; }\n\n.glyphicon-chevron-right:before {\n  content: \"\\e080\"; }\n\n.glyphicon-plus-sign:before {\n  content: \"\\e081\"; }\n\n.glyphicon-minus-sign:before {\n  content: \"\\e082\"; }\n\n.glyphicon-remove-sign:before {\n  content: \"\\e083\"; }\n\n.glyphicon-ok-sign:before {\n  content: \"\\e084\"; }\n\n.glyphicon-question-sign:before {\n  content: \"\\e085\"; }\n\n.glyphicon-info-sign:before {\n  content: \"\\e086\"; }\n\n.glyphicon-screenshot:before {\n  content: \"\\e087\"; }\n\n.glyphicon-remove-circle:before {\n  content: \"\\e088\"; }\n\n.glyphicon-ok-circle:before {\n  content: \"\\e089\"; }\n\n.glyphicon-ban-circle:before {\n  content: \"\\e090\"; }\n\n.glyphicon-arrow-left:before {\n  content: \"\\e091\"; }\n\n.glyphicon-arrow-right:before {\n  content: \"\\e092\"; }\n\n.glyphicon-arrow-up:before {\n  content: \"\\e093\"; }\n\n.glyphicon-arrow-down:before {\n  content: \"\\e094\"; }\n\n.glyphicon-share-alt:before {\n  content: \"\\e095\"; }\n\n.glyphicon-resize-full:before {\n  content: \"\\e096\"; }\n\n.glyphicon-resize-small:before {\n  content: \"\\e097\"; }\n\n.glyphicon-exclamation-sign:before {\n  content: \"\\e101\"; }\n\n.glyphicon-gift:before {\n  content: \"\\e102\"; }\n\n.glyphicon-leaf:before {\n  content: \"\\e103\"; }\n\n.glyphicon-fire:before {\n  content: \"\\e104\"; }\n\n.glyphicon-eye-open:before {\n  content: \"\\e105\"; }\n\n.glyphicon-eye-close:before {\n  content: \"\\e106\"; }\n\n.glyphicon-warning-sign:before {\n  content: \"\\e107\"; }\n\n.glyphicon-plane:before {\n  content: \"\\e108\"; }\n\n.glyphicon-calendar:before {\n  content: \"\\e109\"; }\n\n.glyphicon-random:before {\n  content: \"\\e110\"; }\n\n.glyphicon-comment:before {\n  content: \"\\e111\"; }\n\n.glyphicon-magnet:before {\n  content: \"\\e112\"; }\n\n.glyphicon-chevron-up:before {\n  content: \"\\e113\"; }\n\n.glyphicon-chevron-down:before {\n  content: \"\\e114\"; }\n\n.glyphicon-retweet:before {\n  content: \"\\e115\"; }\n\n.glyphicon-shopping-cart:before {\n  content: \"\\e116\"; }\n\n.glyphicon-folder-close:before {\n  content: \"\\e117\"; }\n\n.glyphicon-folder-open:before {\n  content: \"\\e118\"; }\n\n.glyphicon-resize-vertical:before {\n  content: \"\\e119\"; }\n\n.glyphicon-resize-horizontal:before {\n  content: \"\\e120\"; }\n\n.glyphicon-hdd:before {\n  content: \"\\e121\"; }\n\n.glyphicon-bullhorn:before {\n  content: \"\\e122\"; }\n\n.glyphicon-bell:before {\n  content: \"\\e123\"; }\n\n.glyphicon-certificate:before {\n  content: \"\\e124\"; }\n\n.glyphicon-thumbs-up:before {\n  content: \"\\e125\"; }\n\n.glyphicon-thumbs-down:before {\n  content: \"\\e126\"; }\n\n.glyphicon-hand-right:before {\n  content: \"\\e127\"; }\n\n.glyphicon-hand-left:before {\n  content: \"\\e128\"; }\n\n.glyphicon-hand-up:before {\n  content: \"\\e129\"; }\n\n.glyphicon-hand-down:before {\n  content: \"\\e130\"; }\n\n.glyphicon-circle-arrow-right:before {\n  content: \"\\e131\"; }\n\n.glyphicon-circle-arrow-left:before {\n  content: \"\\e132\"; }\n\n.glyphicon-circle-arrow-up:before {\n  content: \"\\e133\"; }\n\n.glyphicon-circle-arrow-down:before {\n  content: \"\\e134\"; }\n\n.glyphicon-globe:before {\n  content: \"\\e135\"; }\n\n.glyphicon-wrench:before {\n  content: \"\\e136\"; }\n\n.glyphicon-tasks:before {\n  content: \"\\e137\"; }\n\n.glyphicon-filter:before {\n  content: \"\\e138\"; }\n\n.glyphicon-briefcase:before {\n  content: \"\\e139\"; }\n\n.glyphicon-fullscreen:before {\n  content: \"\\e140\"; }\n\n.glyphicon-dashboard:before {\n  content: \"\\e141\"; }\n\n.glyphicon-paperclip:before {\n  content: \"\\e142\"; }\n\n.glyphicon-heart-empty:before {\n  content: \"\\e143\"; }\n\n.glyphicon-link:before {\n  content: \"\\e144\"; }\n\n.glyphicon-phone:before {\n  content: \"\\e145\"; }\n\n.glyphicon-pushpin:before {\n  content: \"\\e146\"; }\n\n.glyphicon-usd:before {\n  content: \"\\e148\"; }\n\n.glyphicon-gbp:before {\n  content: \"\\e149\"; }\n\n.glyphicon-sort:before {\n  content: \"\\e150\"; }\n\n.glyphicon-sort-by-alphabet:before {\n  content: \"\\e151\"; }\n\n.glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\e152\"; }\n\n.glyphicon-sort-by-order:before {\n  content: \"\\e153\"; }\n\n.glyphicon-sort-by-order-alt:before {\n  content: \"\\e154\"; }\n\n.glyphicon-sort-by-attributes:before {\n  content: \"\\e155\"; }\n\n.glyphicon-sort-by-attributes-alt:before {\n  content: \"\\e156\"; }\n\n.glyphicon-unchecked:before {\n  content: \"\\e157\"; }\n\n.glyphicon-expand:before {\n  content: \"\\e158\"; }\n\n.glyphicon-collapse-down:before {\n  content: \"\\e159\"; }\n\n.glyphicon-collapse-up:before {\n  content: \"\\e160\"; }\n\n.glyphicon-log-in:before {\n  content: \"\\e161\"; }\n\n.glyphicon-flash:before {\n  content: \"\\e162\"; }\n\n.glyphicon-log-out:before {\n  content: \"\\e163\"; }\n\n.glyphicon-new-window:before {\n  content: \"\\e164\"; }\n\n.glyphicon-record:before {\n  content: \"\\e165\"; }\n\n.glyphicon-save:before {\n  content: \"\\e166\"; }\n\n.glyphicon-open:before {\n  content: \"\\e167\"; }\n\n.glyphicon-saved:before {\n  content: \"\\e168\"; }\n\n.glyphicon-import:before {\n  content: \"\\e169\"; }\n\n.glyphicon-export:before {\n  content: \"\\e170\"; }\n\n.glyphicon-send:before {\n  content: \"\\e171\"; }\n\n.glyphicon-floppy-disk:before {\n  content: \"\\e172\"; }\n\n.glyphicon-floppy-saved:before {\n  content: \"\\e173\"; }\n\n.glyphicon-floppy-remove:before {\n  content: \"\\e174\"; }\n\n.glyphicon-floppy-save:before {\n  content: \"\\e175\"; }\n\n.glyphicon-floppy-open:before {\n  content: \"\\e176\"; }\n\n.glyphicon-credit-card:before {\n  content: \"\\e177\"; }\n\n.glyphicon-transfer:before {\n  content: \"\\e178\"; }\n\n.glyphicon-cutlery:before {\n  content: \"\\e179\"; }\n\n.glyphicon-header:before {\n  content: \"\\e180\"; }\n\n.glyphicon-compressed:before {\n  content: \"\\e181\"; }\n\n.glyphicon-earphone:before {\n  content: \"\\e182\"; }\n\n.glyphicon-phone-alt:before {\n  content: \"\\e183\"; }\n\n.glyphicon-tower:before {\n  content: \"\\e184\"; }\n\n.glyphicon-stats:before {\n  content: \"\\e185\"; }\n\n.glyphicon-sd-video:before {\n  content: \"\\e186\"; }\n\n.glyphicon-hd-video:before {\n  content: \"\\e187\"; }\n\n.glyphicon-subtitles:before {\n  content: \"\\e188\"; }\n\n.glyphicon-sound-stereo:before {\n  content: \"\\e189\"; }\n\n.glyphicon-sound-dolby:before {\n  content: \"\\e190\"; }\n\n.glyphicon-sound-5-1:before {\n  content: \"\\e191\"; }\n\n.glyphicon-sound-6-1:before {\n  content: \"\\e192\"; }\n\n.glyphicon-sound-7-1:before {\n  content: \"\\e193\"; }\n\n.glyphicon-copyright-mark:before {\n  content: \"\\e194\"; }\n\n.glyphicon-registration-mark:before {\n  content: \"\\e195\"; }\n\n.glyphicon-cloud-download:before {\n  content: \"\\e197\"; }\n\n.glyphicon-cloud-upload:before {\n  content: \"\\e198\"; }\n\n.glyphicon-tree-conifer:before {\n  content: \"\\e199\"; }\n\n.glyphicon-tree-deciduous:before {\n  content: \"\\e200\"; }\n\n.glyphicon-cd:before {\n  content: \"\\e201\"; }\n\n.glyphicon-save-file:before {\n  content: \"\\e202\"; }\n\n.glyphicon-open-file:before {\n  content: \"\\e203\"; }\n\n.glyphicon-level-up:before {\n  content: \"\\e204\"; }\n\n.glyphicon-copy:before {\n  content: \"\\e205\"; }\n\n.glyphicon-paste:before {\n  content: \"\\e206\"; }\n\n.glyphicon-alert:before {\n  content: \"\\e209\"; }\n\n.glyphicon-equalizer:before {\n  content: \"\\e210\"; }\n\n.glyphicon-king:before {\n  content: \"\\e211\"; }\n\n.glyphicon-queen:before {\n  content: \"\\e212\"; }\n\n.glyphicon-pawn:before {\n  content: \"\\e213\"; }\n\n.glyphicon-bishop:before {\n  content: \"\\e214\"; }\n\n.glyphicon-knight:before {\n  content: \"\\e215\"; }\n\n.glyphicon-baby-formula:before {\n  content: \"\\e216\"; }\n\n.glyphicon-tent:before {\n  content: \"\\26fa\"; }\n\n.glyphicon-blackboard:before {\n  content: \"\\e218\"; }\n\n.glyphicon-bed:before {\n  content: \"\\e219\"; }\n\n.glyphicon-apple:before {\n  content: \"\\f8ff\"; }\n\n.glyphicon-erase:before {\n  content: \"\\e221\"; }\n\n.glyphicon-hourglass:before {\n  content: \"\\231b\"; }\n\n.glyphicon-lamp:before {\n  content: \"\\e223\"; }\n\n.glyphicon-duplicate:before {\n  content: \"\\e224\"; }\n\n.glyphicon-piggy-bank:before {\n  content: \"\\e225\"; }\n\n.glyphicon-scissors:before {\n  content: \"\\e226\"; }\n\n.glyphicon-bitcoin:before {\n  content: \"\\e227\"; }\n\n.glyphicon-btc:before {\n  content: \"\\e227\"; }\n\n.glyphicon-xbt:before {\n  content: \"\\e227\"; }\n\n.glyphicon-yen:before {\n  content: \"\\00a5\"; }\n\n.glyphicon-jpy:before {\n  content: \"\\00a5\"; }\n\n.glyphicon-ruble:before {\n  content: \"\\20bd\"; }\n\n.glyphicon-rub:before {\n  content: \"\\20bd\"; }\n\n.glyphicon-scale:before {\n  content: \"\\e230\"; }\n\n.glyphicon-ice-lolly:before {\n  content: \"\\e231\"; }\n\n.glyphicon-ice-lolly-tasted:before {\n  content: \"\\e232\"; }\n\n.glyphicon-education:before {\n  content: \"\\e233\"; }\n\n.glyphicon-option-horizontal:before {\n  content: \"\\e234\"; }\n\n.glyphicon-option-vertical:before {\n  content: \"\\e235\"; }\n\n.glyphicon-menu-hamburger:before {\n  content: \"\\e236\"; }\n\n.glyphicon-modal-window:before {\n  content: \"\\e237\"; }\n\n.glyphicon-oil:before {\n  content: \"\\e238\"; }\n\n.glyphicon-grain:before {\n  content: \"\\e239\"; }\n\n.glyphicon-sunglasses:before {\n  content: \"\\e240\"; }\n\n.glyphicon-text-size:before {\n  content: \"\\e241\"; }\n\n.glyphicon-text-color:before {\n  content: \"\\e242\"; }\n\n.glyphicon-text-background:before {\n  content: \"\\e243\"; }\n\n.glyphicon-object-align-top:before {\n  content: \"\\e244\"; }\n\n.glyphicon-object-align-bottom:before {\n  content: \"\\e245\"; }\n\n.glyphicon-object-align-horizontal:before {\n  content: \"\\e246\"; }\n\n.glyphicon-object-align-left:before {\n  content: \"\\e247\"; }\n\n.glyphicon-object-align-vertical:before {\n  content: \"\\e248\"; }\n\n.glyphicon-object-align-right:before {\n  content: \"\\e249\"; }\n\n.glyphicon-triangle-right:before {\n  content: \"\\e250\"; }\n\n.glyphicon-triangle-left:before {\n  content: \"\\e251\"; }\n\n.glyphicon-triangle-bottom:before {\n  content: \"\\e252\"; }\n\n.glyphicon-triangle-top:before {\n  content: \"\\e253\"; }\n\n.glyphicon-console:before {\n  content: \"\\e254\"; }\n\n.glyphicon-superscript:before {\n  content: \"\\e255\"; }\n\n.glyphicon-subscript:before {\n  content: \"\\e256\"; }\n\n.glyphicon-menu-left:before {\n  content: \"\\e257\"; }\n\n.glyphicon-menu-right:before {\n  content: \"\\e258\"; }\n\n.glyphicon-menu-down:before {\n  content: \"\\e259\"; }\n\n.glyphicon-menu-up:before {\n  content: \"\\e260\"; }\n\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: transparent; }\n\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #333333;\n  background-color: #fff; }\n\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\na {\n  color: #337ab7;\n  text-decoration: none; }\n  a:hover, a:focus {\n    color: #23527c;\n    text-decoration: underline; }\n  a:focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n\nfigure {\n  margin: 0; }\n\nimg {\n  vertical-align: middle; }\n\n.img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto; }\n\n.img-rounded {\n  border-radius: 6px; }\n\n.img-thumbnail {\n  padding: 4px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto; }\n\n.img-circle {\n  border-radius: 50%; }\n\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eeeeee; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto; }\n\n[role=\"button\"] {\n  cursor: pointer; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit; }\n  h1 small,\n  h1 .small, h2 small,\n  h2 .small, h3 small,\n  h3 .small, h4 small,\n  h4 .small, h5 small,\n  h5 .small, h6 small,\n  h6 .small,\n  .h1 small,\n  .h1 .small, .h2 small,\n  .h2 .small, .h3 small,\n  .h3 .small, .h4 small,\n  .h4 .small, .h5 small,\n  .h5 .small, .h6 small,\n  .h6 .small {\n    font-weight: normal;\n    line-height: 1;\n    color: #777777; }\n\nh1, .h1,\nh2, .h2,\nh3, .h3 {\n  margin-top: 20px;\n  margin-bottom: 10px; }\n  h1 small,\n  h1 .small, .h1 small,\n  .h1 .small,\n  h2 small,\n  h2 .small, .h2 small,\n  .h2 .small,\n  h3 small,\n  h3 .small, .h3 small,\n  .h3 .small {\n    font-size: 65%; }\n\nh4, .h4,\nh5, .h5,\nh6, .h6 {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  h4 small,\n  h4 .small, .h4 small,\n  .h4 .small,\n  h5 small,\n  h5 .small, .h5 small,\n  .h5 .small,\n  h6 small,\n  h6 .small, .h6 small,\n  .h6 .small {\n    font-size: 75%; }\n\nh1, .h1 {\n  font-size: 36px; }\n\nh2, .h2 {\n  font-size: 30px; }\n\nh3, .h3 {\n  font-size: 24px; }\n\nh4, .h4 {\n  font-size: 18px; }\n\nh5, .h5 {\n  font-size: 14px; }\n\nh6, .h6 {\n  font-size: 12px; }\n\np {\n  margin: 0 0 10px; }\n\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4; }\n  @media (min-width: 768px) {\n    .lead {\n      font-size: 21px; } }\n\nsmall,\n.small {\n  font-size: 85%; }\n\nmark,\n.mark {\n  background-color: #fcf8e3;\n  padding: .2em; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-justify {\n  text-align: justify; }\n\n.text-nowrap {\n  white-space: nowrap; }\n\n.text-lowercase {\n  text-transform: lowercase; }\n\n.text-uppercase, .initialism {\n  text-transform: uppercase; }\n\n.text-capitalize {\n  text-transform: capitalize; }\n\n.text-muted {\n  color: #777777; }\n\n.text-primary {\n  color: #337ab7; }\n\na.text-primary:hover,\na.text-primary:focus {\n  color: #286090; }\n\n.text-success {\n  color: #3c763d; }\n\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c; }\n\n.text-info {\n  color: #31708f; }\n\na.text-info:hover,\na.text-info:focus {\n  color: #245269; }\n\n.text-warning {\n  color: #8a6d3b; }\n\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c; }\n\n.text-danger {\n  color: #a94442; }\n\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534; }\n\n.bg-primary {\n  color: #fff; }\n\n.bg-primary {\n  background-color: #337ab7; }\n\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #286090; }\n\n.bg-success {\n  background-color: #dff0d8; }\n\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3; }\n\n.bg-info {\n  background-color: #d9edf7; }\n\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee; }\n\n.bg-warning {\n  background-color: #fcf8e3; }\n\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5; }\n\n.bg-danger {\n  background-color: #f2dede; }\n\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9; }\n\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eeeeee; }\n\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px; }\n  ul ul,\n  ul ol,\n  ol ul,\n  ol ol {\n    margin-bottom: 0; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px; }\n  .list-inline > li {\n    display: inline-block;\n    padding-left: 5px;\n    padding-right: 5px; }\n\ndl {\n  margin-top: 0;\n  margin-bottom: 20px; }\n\ndt,\ndd {\n  line-height: 1.42857; }\n\ndt {\n  font-weight: bold; }\n\ndd {\n  margin-left: 0; }\n\n.dl-horizontal dd:before, .dl-horizontal dd:after {\n  content: \" \";\n  display: table; }\n\n.dl-horizontal dd:after {\n  clear: both; }\n\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    clear: left;\n    text-align: right;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .dl-horizontal dd {\n    margin-left: 180px; } }\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777777; }\n\n.initialism {\n  font-size: 90%; }\n\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eeeeee; }\n  blockquote p:last-child,\n  blockquote ul:last-child,\n  blockquote ol:last-child {\n    margin-bottom: 0; }\n  blockquote footer,\n  blockquote small,\n  blockquote .small {\n    display: block;\n    font-size: 80%;\n    line-height: 1.42857;\n    color: #777777; }\n    blockquote footer:before,\n    blockquote small:before,\n    blockquote .small:before {\n      content: '\\2014 \\00A0'; }\n\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #eeeeee;\n  border-left: 0;\n  text-align: right; }\n  .blockquote-reverse footer:before,\n  .blockquote-reverse small:before,\n  .blockquote-reverse .small:before,\n  blockquote.pull-right footer:before,\n  blockquote.pull-right small:before,\n  blockquote.pull-right .small:before {\n    content: ''; }\n  .blockquote-reverse footer:after,\n  .blockquote-reverse small:after,\n  .blockquote-reverse .small:after,\n  blockquote.pull-right footer:after,\n  blockquote.pull-right small:after,\n  blockquote.pull-right .small:after {\n    content: '\\00A0 \\2014'; }\n\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace; }\n\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px; }\n\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25); }\n  kbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: bold;\n    box-shadow: none; }\n\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #333333;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px; }\n  pre code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    white-space: pre-wrap;\n    background-color: transparent;\n    border-radius: 0; }\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n  .container:before, .container:after {\n    content: \" \";\n    display: table; }\n  .container:after {\n    clear: both; }\n  @media (min-width: 768px) {\n    .container {\n      width: 750px; } }\n  @media (min-width: 992px) {\n    .container {\n      width: 970px; } }\n  @media (min-width: 1200px) {\n    .container {\n      width: 1170px; } }\n\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n  .container-fluid:before, .container-fluid:after {\n    content: \" \";\n    display: table; }\n  .container-fluid:after {\n    clear: both; }\n\n.row {\n  margin-left: -15px;\n  margin-right: -15px; }\n  .row:before, .row:after {\n    content: \" \";\n    display: table; }\n  .row:after {\n    clear: both; }\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left; }\n\n.col-xs-1 {\n  width: 8.33333%; }\n\n.col-xs-2 {\n  width: 16.66667%; }\n\n.col-xs-3 {\n  width: 25%; }\n\n.col-xs-4 {\n  width: 33.33333%; }\n\n.col-xs-5 {\n  width: 41.66667%; }\n\n.col-xs-6 {\n  width: 50%; }\n\n.col-xs-7 {\n  width: 58.33333%; }\n\n.col-xs-8 {\n  width: 66.66667%; }\n\n.col-xs-9 {\n  width: 75%; }\n\n.col-xs-10 {\n  width: 83.33333%; }\n\n.col-xs-11 {\n  width: 91.66667%; }\n\n.col-xs-12 {\n  width: 100%; }\n\n.col-xs-pull-0 {\n  right: auto; }\n\n.col-xs-pull-1 {\n  right: 8.33333%; }\n\n.col-xs-pull-2 {\n  right: 16.66667%; }\n\n.col-xs-pull-3 {\n  right: 25%; }\n\n.col-xs-pull-4 {\n  right: 33.33333%; }\n\n.col-xs-pull-5 {\n  right: 41.66667%; }\n\n.col-xs-pull-6 {\n  right: 50%; }\n\n.col-xs-pull-7 {\n  right: 58.33333%; }\n\n.col-xs-pull-8 {\n  right: 66.66667%; }\n\n.col-xs-pull-9 {\n  right: 75%; }\n\n.col-xs-pull-10 {\n  right: 83.33333%; }\n\n.col-xs-pull-11 {\n  right: 91.66667%; }\n\n.col-xs-pull-12 {\n  right: 100%; }\n\n.col-xs-push-0 {\n  left: auto; }\n\n.col-xs-push-1 {\n  left: 8.33333%; }\n\n.col-xs-push-2 {\n  left: 16.66667%; }\n\n.col-xs-push-3 {\n  left: 25%; }\n\n.col-xs-push-4 {\n  left: 33.33333%; }\n\n.col-xs-push-5 {\n  left: 41.66667%; }\n\n.col-xs-push-6 {\n  left: 50%; }\n\n.col-xs-push-7 {\n  left: 58.33333%; }\n\n.col-xs-push-8 {\n  left: 66.66667%; }\n\n.col-xs-push-9 {\n  left: 75%; }\n\n.col-xs-push-10 {\n  left: 83.33333%; }\n\n.col-xs-push-11 {\n  left: 91.66667%; }\n\n.col-xs-push-12 {\n  left: 100%; }\n\n.col-xs-offset-0 {\n  margin-left: 0%; }\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%; }\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%; }\n\n.col-xs-offset-3 {\n  margin-left: 25%; }\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%; }\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%; }\n\n.col-xs-offset-6 {\n  margin-left: 50%; }\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%; }\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%; }\n\n.col-xs-offset-9 {\n  margin-left: 75%; }\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%; }\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%; }\n\n.col-xs-offset-12 {\n  margin-left: 100%; }\n\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left; }\n  .col-sm-1 {\n    width: 8.33333%; }\n  .col-sm-2 {\n    width: 16.66667%; }\n  .col-sm-3 {\n    width: 25%; }\n  .col-sm-4 {\n    width: 33.33333%; }\n  .col-sm-5 {\n    width: 41.66667%; }\n  .col-sm-6 {\n    width: 50%; }\n  .col-sm-7 {\n    width: 58.33333%; }\n  .col-sm-8 {\n    width: 66.66667%; }\n  .col-sm-9 {\n    width: 75%; }\n  .col-sm-10 {\n    width: 83.33333%; }\n  .col-sm-11 {\n    width: 91.66667%; }\n  .col-sm-12 {\n    width: 100%; }\n  .col-sm-pull-0 {\n    right: auto; }\n  .col-sm-pull-1 {\n    right: 8.33333%; }\n  .col-sm-pull-2 {\n    right: 16.66667%; }\n  .col-sm-pull-3 {\n    right: 25%; }\n  .col-sm-pull-4 {\n    right: 33.33333%; }\n  .col-sm-pull-5 {\n    right: 41.66667%; }\n  .col-sm-pull-6 {\n    right: 50%; }\n  .col-sm-pull-7 {\n    right: 58.33333%; }\n  .col-sm-pull-8 {\n    right: 66.66667%; }\n  .col-sm-pull-9 {\n    right: 75%; }\n  .col-sm-pull-10 {\n    right: 83.33333%; }\n  .col-sm-pull-11 {\n    right: 91.66667%; }\n  .col-sm-pull-12 {\n    right: 100%; }\n  .col-sm-push-0 {\n    left: auto; }\n  .col-sm-push-1 {\n    left: 8.33333%; }\n  .col-sm-push-2 {\n    left: 16.66667%; }\n  .col-sm-push-3 {\n    left: 25%; }\n  .col-sm-push-4 {\n    left: 33.33333%; }\n  .col-sm-push-5 {\n    left: 41.66667%; }\n  .col-sm-push-6 {\n    left: 50%; }\n  .col-sm-push-7 {\n    left: 58.33333%; }\n  .col-sm-push-8 {\n    left: 66.66667%; }\n  .col-sm-push-9 {\n    left: 75%; }\n  .col-sm-push-10 {\n    left: 83.33333%; }\n  .col-sm-push-11 {\n    left: 91.66667%; }\n  .col-sm-push-12 {\n    left: 100%; }\n  .col-sm-offset-0 {\n    margin-left: 0%; }\n  .col-sm-offset-1 {\n    margin-left: 8.33333%; }\n  .col-sm-offset-2 {\n    margin-left: 16.66667%; }\n  .col-sm-offset-3 {\n    margin-left: 25%; }\n  .col-sm-offset-4 {\n    margin-left: 33.33333%; }\n  .col-sm-offset-5 {\n    margin-left: 41.66667%; }\n  .col-sm-offset-6 {\n    margin-left: 50%; }\n  .col-sm-offset-7 {\n    margin-left: 58.33333%; }\n  .col-sm-offset-8 {\n    margin-left: 66.66667%; }\n  .col-sm-offset-9 {\n    margin-left: 75%; }\n  .col-sm-offset-10 {\n    margin-left: 83.33333%; }\n  .col-sm-offset-11 {\n    margin-left: 91.66667%; }\n  .col-sm-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left; }\n  .col-md-1 {\n    width: 8.33333%; }\n  .col-md-2 {\n    width: 16.66667%; }\n  .col-md-3 {\n    width: 25%; }\n  .col-md-4 {\n    width: 33.33333%; }\n  .col-md-5 {\n    width: 41.66667%; }\n  .col-md-6 {\n    width: 50%; }\n  .col-md-7 {\n    width: 58.33333%; }\n  .col-md-8 {\n    width: 66.66667%; }\n  .col-md-9 {\n    width: 75%; }\n  .col-md-10 {\n    width: 83.33333%; }\n  .col-md-11 {\n    width: 91.66667%; }\n  .col-md-12 {\n    width: 100%; }\n  .col-md-pull-0 {\n    right: auto; }\n  .col-md-pull-1 {\n    right: 8.33333%; }\n  .col-md-pull-2 {\n    right: 16.66667%; }\n  .col-md-pull-3 {\n    right: 25%; }\n  .col-md-pull-4 {\n    right: 33.33333%; }\n  .col-md-pull-5 {\n    right: 41.66667%; }\n  .col-md-pull-6 {\n    right: 50%; }\n  .col-md-pull-7 {\n    right: 58.33333%; }\n  .col-md-pull-8 {\n    right: 66.66667%; }\n  .col-md-pull-9 {\n    right: 75%; }\n  .col-md-pull-10 {\n    right: 83.33333%; }\n  .col-md-pull-11 {\n    right: 91.66667%; }\n  .col-md-pull-12 {\n    right: 100%; }\n  .col-md-push-0 {\n    left: auto; }\n  .col-md-push-1 {\n    left: 8.33333%; }\n  .col-md-push-2 {\n    left: 16.66667%; }\n  .col-md-push-3 {\n    left: 25%; }\n  .col-md-push-4 {\n    left: 33.33333%; }\n  .col-md-push-5 {\n    left: 41.66667%; }\n  .col-md-push-6 {\n    left: 50%; }\n  .col-md-push-7 {\n    left: 58.33333%; }\n  .col-md-push-8 {\n    left: 66.66667%; }\n  .col-md-push-9 {\n    left: 75%; }\n  .col-md-push-10 {\n    left: 83.33333%; }\n  .col-md-push-11 {\n    left: 91.66667%; }\n  .col-md-push-12 {\n    left: 100%; }\n  .col-md-offset-0 {\n    margin-left: 0%; }\n  .col-md-offset-1 {\n    margin-left: 8.33333%; }\n  .col-md-offset-2 {\n    margin-left: 16.66667%; }\n  .col-md-offset-3 {\n    margin-left: 25%; }\n  .col-md-offset-4 {\n    margin-left: 33.33333%; }\n  .col-md-offset-5 {\n    margin-left: 41.66667%; }\n  .col-md-offset-6 {\n    margin-left: 50%; }\n  .col-md-offset-7 {\n    margin-left: 58.33333%; }\n  .col-md-offset-8 {\n    margin-left: 66.66667%; }\n  .col-md-offset-9 {\n    margin-left: 75%; }\n  .col-md-offset-10 {\n    margin-left: 83.33333%; }\n  .col-md-offset-11 {\n    margin-left: 91.66667%; }\n  .col-md-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left; }\n  .col-lg-1 {\n    width: 8.33333%; }\n  .col-lg-2 {\n    width: 16.66667%; }\n  .col-lg-3 {\n    width: 25%; }\n  .col-lg-4 {\n    width: 33.33333%; }\n  .col-lg-5 {\n    width: 41.66667%; }\n  .col-lg-6 {\n    width: 50%; }\n  .col-lg-7 {\n    width: 58.33333%; }\n  .col-lg-8 {\n    width: 66.66667%; }\n  .col-lg-9 {\n    width: 75%; }\n  .col-lg-10 {\n    width: 83.33333%; }\n  .col-lg-11 {\n    width: 91.66667%; }\n  .col-lg-12 {\n    width: 100%; }\n  .col-lg-pull-0 {\n    right: auto; }\n  .col-lg-pull-1 {\n    right: 8.33333%; }\n  .col-lg-pull-2 {\n    right: 16.66667%; }\n  .col-lg-pull-3 {\n    right: 25%; }\n  .col-lg-pull-4 {\n    right: 33.33333%; }\n  .col-lg-pull-5 {\n    right: 41.66667%; }\n  .col-lg-pull-6 {\n    right: 50%; }\n  .col-lg-pull-7 {\n    right: 58.33333%; }\n  .col-lg-pull-8 {\n    right: 66.66667%; }\n  .col-lg-pull-9 {\n    right: 75%; }\n  .col-lg-pull-10 {\n    right: 83.33333%; }\n  .col-lg-pull-11 {\n    right: 91.66667%; }\n  .col-lg-pull-12 {\n    right: 100%; }\n  .col-lg-push-0 {\n    left: auto; }\n  .col-lg-push-1 {\n    left: 8.33333%; }\n  .col-lg-push-2 {\n    left: 16.66667%; }\n  .col-lg-push-3 {\n    left: 25%; }\n  .col-lg-push-4 {\n    left: 33.33333%; }\n  .col-lg-push-5 {\n    left: 41.66667%; }\n  .col-lg-push-6 {\n    left: 50%; }\n  .col-lg-push-7 {\n    left: 58.33333%; }\n  .col-lg-push-8 {\n    left: 66.66667%; }\n  .col-lg-push-9 {\n    left: 75%; }\n  .col-lg-push-10 {\n    left: 83.33333%; }\n  .col-lg-push-11 {\n    left: 91.66667%; }\n  .col-lg-push-12 {\n    left: 100%; }\n  .col-lg-offset-0 {\n    margin-left: 0%; }\n  .col-lg-offset-1 {\n    margin-left: 8.33333%; }\n  .col-lg-offset-2 {\n    margin-left: 16.66667%; }\n  .col-lg-offset-3 {\n    margin-left: 25%; }\n  .col-lg-offset-4 {\n    margin-left: 33.33333%; }\n  .col-lg-offset-5 {\n    margin-left: 41.66667%; }\n  .col-lg-offset-6 {\n    margin-left: 50%; }\n  .col-lg-offset-7 {\n    margin-left: 58.33333%; }\n  .col-lg-offset-8 {\n    margin-left: 66.66667%; }\n  .col-lg-offset-9 {\n    margin-left: 75%; }\n  .col-lg-offset-10 {\n    margin-left: 83.33333%; }\n  .col-lg-offset-11 {\n    margin-left: 91.66667%; }\n  .col-lg-offset-12 {\n    margin-left: 100%; } }\n\ntable {\n  background-color: transparent; }\n\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777777;\n  text-align: left; }\n\nth {\n  text-align: left; }\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px; }\n  .table > thead > tr > th,\n  .table > thead > tr > td,\n  .table > tbody > tr > th,\n  .table > tbody > tr > td,\n  .table > tfoot > tr > th,\n  .table > tfoot > tr > td {\n    padding: 8px;\n    line-height: 1.42857;\n    vertical-align: top;\n    border-top: 1px solid #ddd; }\n  .table > thead > tr > th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #ddd; }\n  .table > caption + thead > tr:first-child > th,\n  .table > caption + thead > tr:first-child > td,\n  .table > colgroup + thead > tr:first-child > th,\n  .table > colgroup + thead > tr:first-child > td,\n  .table > thead:first-child > tr:first-child > th,\n  .table > thead:first-child > tr:first-child > td {\n    border-top: 0; }\n  .table > tbody + tbody {\n    border-top: 2px solid #ddd; }\n  .table .table {\n    background-color: #fff; }\n\n.table-condensed > thead > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > th,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > th,\n.table-condensed > tfoot > tr > td {\n  padding: 5px; }\n\n.table-bordered {\n  border: 1px solid #ddd; }\n  .table-bordered > thead > tr > th,\n  .table-bordered > thead > tr > td,\n  .table-bordered > tbody > tr > th,\n  .table-bordered > tbody > tr > td,\n  .table-bordered > tfoot > tr > th,\n  .table-bordered > tfoot > tr > td {\n    border: 1px solid #ddd; }\n  .table-bordered > thead > tr > th,\n  .table-bordered > thead > tr > td {\n    border-bottom-width: 2px; }\n\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9; }\n\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5; }\n\ntable col[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-column; }\n\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-cell; }\n\n.table > thead > tr > td.active,\n.table > thead > tr > th.active,\n.table > thead > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr > td.active,\n.table > tbody > tr > th.active,\n.table > tbody > tr.active > td,\n.table > tbody > tr.active > th,\n.table > tfoot > tr > td.active,\n.table > tfoot > tr > th.active,\n.table > tfoot > tr.active > td,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5; }\n\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8; }\n\n.table > thead > tr > td.success,\n.table > thead > tr > th.success,\n.table > thead > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr > td.success,\n.table > tbody > tr > th.success,\n.table > tbody > tr.success > td,\n.table > tbody > tr.success > th,\n.table > tfoot > tr > td.success,\n.table > tfoot > tr > th.success,\n.table > tfoot > tr.success > td,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8; }\n\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6; }\n\n.table > thead > tr > td.info,\n.table > thead > tr > th.info,\n.table > thead > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr > td.info,\n.table > tbody > tr > th.info,\n.table > tbody > tr.info > td,\n.table > tbody > tr.info > th,\n.table > tfoot > tr > td.info,\n.table > tfoot > tr > th.info,\n.table > tfoot > tr.info > td,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7; }\n\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3; }\n\n.table > thead > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr > td.warning,\n.table > tbody > tr > th.warning,\n.table > tbody > tr.warning > td,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr > td.warning,\n.table > tfoot > tr > th.warning,\n.table > tfoot > tr.warning > td,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3; }\n\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc; }\n\n.table > thead > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr > td.danger,\n.table > tbody > tr > th.danger,\n.table > tbody > tr.danger > td,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr > td.danger,\n.table > tfoot > tr > th.danger,\n.table > tfoot > tr.danger > td,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede; }\n\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc; }\n\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%; }\n  @media screen and (max-width: 767px) {\n    .table-responsive {\n      width: 100%;\n      margin-bottom: 15px;\n      overflow-y: hidden;\n      -ms-overflow-style: -ms-autohiding-scrollbar;\n      border: 1px solid #ddd; }\n      .table-responsive > .table {\n        margin-bottom: 0; }\n        .table-responsive > .table > thead > tr > th,\n        .table-responsive > .table > thead > tr > td,\n        .table-responsive > .table > tbody > tr > th,\n        .table-responsive > .table > tbody > tr > td,\n        .table-responsive > .table > tfoot > tr > th,\n        .table-responsive > .table > tfoot > tr > td {\n          white-space: nowrap; }\n      .table-responsive > .table-bordered {\n        border: 0; }\n        .table-responsive > .table-bordered > thead > tr > th:first-child,\n        .table-responsive > .table-bordered > thead > tr > td:first-child,\n        .table-responsive > .table-bordered > tbody > tr > th:first-child,\n        .table-responsive > .table-bordered > tbody > tr > td:first-child,\n        .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n        .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n          border-left: 0; }\n        .table-responsive > .table-bordered > thead > tr > th:last-child,\n        .table-responsive > .table-bordered > thead > tr > td:last-child,\n        .table-responsive > .table-bordered > tbody > tr > th:last-child,\n        .table-responsive > .table-bordered > tbody > tr > td:last-child,\n        .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n        .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n          border-right: 0; }\n        .table-responsive > .table-bordered > tbody > tr:last-child > th,\n        .table-responsive > .table-bordered > tbody > tr:last-child > td,\n        .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n        .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n          border-bottom: 0; } }\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5; }\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold; }\n\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal; }\n\ninput[type=\"file\"] {\n  display: block; }\n\ninput[type=\"range\"] {\n  display: block;\n  width: 100%; }\n\nselect[multiple],\nselect[size] {\n  height: auto; }\n\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px; }\n\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555; }\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s; }\n  .form-control:focus {\n    border-color: #66afe9;\n    outline: 0;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); }\n  .form-control::-moz-placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control:-ms-input-placeholder {\n    color: #999; }\n  .form-control::-webkit-input-placeholder {\n    color: #999; }\n  .form-control::-ms-expand {\n    border: 0;\n    background-color: transparent; }\n  .form-control[disabled], .form-control[readonly],\n  fieldset[disabled] .form-control {\n    background-color: #eeeeee;\n    opacity: 1; }\n  .form-control[disabled],\n  fieldset[disabled] .form-control {\n    cursor: not-allowed; }\n\ntextarea.form-control {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: none; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px; }\n  input[type=\"date\"].input-sm, .input-group-sm > input[type=\"date\"].form-control,\n  .input-group-sm > input[type=\"date\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-sm input[type=\"date\"],\n  input[type=\"time\"].input-sm,\n  .input-group-sm > input[type=\"time\"].form-control,\n  .input-group-sm > input[type=\"time\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-sm\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-sm,\n  .input-group-sm > input[type=\"datetime-local\"].form-control,\n  .input-group-sm > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-sm\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-sm,\n  .input-group-sm > input[type=\"month\"].form-control,\n  .input-group-sm > input[type=\"month\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-sm\n  input[type=\"month\"] {\n    line-height: 30px; }\n  input[type=\"date\"].input-lg, .input-group-lg > input[type=\"date\"].form-control,\n  .input-group-lg > input[type=\"date\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-lg input[type=\"date\"],\n  input[type=\"time\"].input-lg,\n  .input-group-lg > input[type=\"time\"].form-control,\n  .input-group-lg > input[type=\"time\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-lg\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-lg,\n  .input-group-lg > input[type=\"datetime-local\"].form-control,\n  .input-group-lg > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-lg\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-lg,\n  .input-group-lg > input[type=\"month\"].form-control,\n  .input-group-lg > input[type=\"month\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-lg\n  input[type=\"month\"] {\n    line-height: 46px; } }\n\n.form-group {\n  margin-bottom: 15px; }\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  .radio label,\n  .checkbox label {\n    min-height: 20px;\n    padding-left: 20px;\n    margin-bottom: 0;\n    font-weight: normal;\n    cursor: pointer; }\n\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9; }\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px; }\n\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer; }\n\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px; }\n\ninput[type=\"radio\"][disabled], input[type=\"radio\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled]\ninput[type=\"checkbox\"] {\n  cursor: not-allowed; }\n\n.radio-inline.disabled,\nfieldset[disabled] .radio-inline,\n.checkbox-inline.disabled,\nfieldset[disabled]\n.checkbox-inline {\n  cursor: not-allowed; }\n\n.radio.disabled label,\nfieldset[disabled] .radio label,\n.checkbox.disabled label,\nfieldset[disabled]\n.checkbox label {\n  cursor: not-allowed; }\n\n.form-control-static {\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n  min-height: 34px; }\n  .form-control-static.input-lg, .input-group-lg > .form-control-static.form-control,\n  .input-group-lg > .form-control-static.input-group-addon,\n  .input-group-lg > .input-group-btn > .form-control-static.btn, .form-control-static.input-sm, .input-group-sm > .form-control-static.form-control,\n  .input-group-sm > .form-control-static.input-group-addon,\n  .input-group-sm > .input-group-btn > .form-control-static.btn {\n    padding-left: 0;\n    padding-right: 0; }\n\n.input-sm, .input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\nselect.input-sm, .input-group-sm > select.form-control,\n.input-group-sm > select.input-group-addon,\n.input-group-sm > .input-group-btn > select.btn {\n  height: 30px;\n  line-height: 30px; }\n\ntextarea.input-sm, .input-group-sm > textarea.form-control,\n.input-group-sm > textarea.input-group-addon,\n.input-group-sm > .input-group-btn > textarea.btn,\nselect[multiple].input-sm,\n.input-group-sm > select[multiple].form-control,\n.input-group-sm > select[multiple].input-group-addon,\n.input-group-sm > .input-group-btn > select[multiple].btn {\n  height: auto; }\n\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px; }\n\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto; }\n\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.input-lg, .input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\nselect.input-lg, .input-group-lg > select.form-control,\n.input-group-lg > select.input-group-addon,\n.input-group-lg > .input-group-btn > select.btn {\n  height: 46px;\n  line-height: 46px; }\n\ntextarea.input-lg, .input-group-lg > textarea.form-control,\n.input-group-lg > textarea.input-group-addon,\n.input-group-lg > .input-group-btn > textarea.btn,\nselect[multiple].input-lg,\n.input-group-lg > select[multiple].form-control,\n.input-group-lg > select[multiple].input-group-addon,\n.input-group-lg > .input-group-btn > select[multiple].btn {\n  height: auto; }\n\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px; }\n\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto; }\n\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.33333; }\n\n.has-feedback {\n  position: relative; }\n  .has-feedback .form-control {\n    padding-right: 42.5px; }\n\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none; }\n\n.input-lg + .form-control-feedback, .input-group-lg > .form-control + .form-control-feedback,\n.input-group-lg > .input-group-addon + .form-control-feedback,\n.input-group-lg > .input-group-btn > .btn + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px; }\n\n.input-sm + .form-control-feedback, .input-group-sm > .form-control + .form-control-feedback,\n.input-group-sm > .input-group-addon + .form-control-feedback,\n.input-group-sm > .input-group-btn > .btn + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px; }\n\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d; }\n\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-success .form-control:focus {\n    border-color: #2b542c;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168; }\n\n.has-success .input-group-addon {\n  color: #3c763d;\n  border-color: #3c763d;\n  background-color: #dff0d8; }\n\n.has-success .form-control-feedback {\n  color: #3c763d; }\n\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b; }\n\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-warning .form-control:focus {\n    border-color: #66512c;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b; }\n\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  border-color: #8a6d3b;\n  background-color: #fcf8e3; }\n\n.has-warning .form-control-feedback {\n  color: #8a6d3b; }\n\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442; }\n\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-error .form-control:focus {\n    border-color: #843534;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483; }\n\n.has-error .input-group-addon {\n  color: #a94442;\n  border-color: #a94442;\n  background-color: #f2dede; }\n\n.has-error .form-control-feedback {\n  color: #a94442; }\n\n.has-feedback label ~ .form-control-feedback {\n  top: 25px; }\n\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0; }\n\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373; }\n\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle; }\n  .form-inline .form-control-static {\n    display: inline-block; }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle; }\n    .form-inline .input-group .input-group-addon,\n    .form-inline .input-group .input-group-btn,\n    .form-inline .input-group .form-control {\n      width: auto; }\n  .form-inline .input-group > .form-control {\n    width: 100%; }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle; }\n    .form-inline .radio label,\n    .form-inline .checkbox label {\n      padding-left: 0; }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0; }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0; } }\n\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 7px; }\n\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px; }\n\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px; }\n  .form-horizontal .form-group:before, .form-horizontal .form-group:after {\n    content: \" \";\n    display: table; }\n  .form-horizontal .form-group:after {\n    clear: both; }\n\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: right;\n    margin-bottom: 0;\n    padding-top: 7px; } }\n\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px; }\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px; } }\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px; } }\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .btn:focus, .btn.focus, .btn:active:focus, .btn:active.focus, .btn.active:focus, .btn.active.focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n  .btn:hover, .btn:focus, .btn.focus {\n    color: #333;\n    text-decoration: none; }\n  .btn:active, .btn.active {\n    outline: 0;\n    background-image: none;\n    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn.disabled, .btn[disabled],\n  fieldset[disabled] .btn {\n    cursor: not-allowed;\n    opacity: 0.65;\n    filter: alpha(opacity=65);\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none; }\n\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc; }\n  .btn-default:focus, .btn-default.focus {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #8c8c8c; }\n  .btn-default:hover {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n  .btn-default:active, .btn-default.active,\n  .open > .btn-default.dropdown-toggle {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n    .btn-default:active:hover, .btn-default:active:focus, .btn-default:active.focus, .btn-default.active:hover, .btn-default.active:focus, .btn-default.active.focus,\n    .open > .btn-default.dropdown-toggle:hover,\n    .open > .btn-default.dropdown-toggle:focus,\n    .open > .btn-default.dropdown-toggle.focus {\n      color: #333;\n      background-color: #d4d4d4;\n      border-color: #8c8c8c; }\n  .btn-default:active, .btn-default.active,\n  .open > .btn-default.dropdown-toggle {\n    background-image: none; }\n  .btn-default.disabled:hover, .btn-default.disabled:focus, .btn-default.disabled.focus, .btn-default[disabled]:hover, .btn-default[disabled]:focus, .btn-default[disabled].focus,\n  fieldset[disabled] .btn-default:hover,\n  fieldset[disabled] .btn-default:focus,\n  fieldset[disabled] .btn-default.focus {\n    background-color: #fff;\n    border-color: #ccc; }\n  .btn-default .badge {\n    color: #fff;\n    background-color: #333; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4; }\n  .btn-primary:focus, .btn-primary.focus {\n    color: #fff;\n    background-color: #286090;\n    border-color: #122b40; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74; }\n  .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74; }\n    .btn-primary:active:hover, .btn-primary:active:focus, .btn-primary:active.focus, .btn-primary.active:hover, .btn-primary.active:focus, .btn-primary.active.focus,\n    .open > .btn-primary.dropdown-toggle:hover,\n    .open > .btn-primary.dropdown-toggle:focus,\n    .open > .btn-primary.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #204d74;\n      border-color: #122b40; }\n  .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    background-image: none; }\n  .btn-primary.disabled:hover, .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary[disabled]:hover, .btn-primary[disabled]:focus, .btn-primary[disabled].focus,\n  fieldset[disabled] .btn-primary:hover,\n  fieldset[disabled] .btn-primary:focus,\n  fieldset[disabled] .btn-primary.focus {\n    background-color: #337ab7;\n    border-color: #2e6da4; }\n  .btn-primary .badge {\n    color: #337ab7;\n    background-color: #fff; }\n\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c; }\n  .btn-success:focus, .btn-success.focus {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #255625; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439; }\n  .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439; }\n    .btn-success:active:hover, .btn-success:active:focus, .btn-success:active.focus, .btn-success.active:hover, .btn-success.active:focus, .btn-success.active.focus,\n    .open > .btn-success.dropdown-toggle:hover,\n    .open > .btn-success.dropdown-toggle:focus,\n    .open > .btn-success.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #398439;\n      border-color: #255625; }\n  .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    background-image: none; }\n  .btn-success.disabled:hover, .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success[disabled]:hover, .btn-success[disabled]:focus, .btn-success[disabled].focus,\n  fieldset[disabled] .btn-success:hover,\n  fieldset[disabled] .btn-success:focus,\n  fieldset[disabled] .btn-success.focus {\n    background-color: #5cb85c;\n    border-color: #4cae4c; }\n  .btn-success .badge {\n    color: #5cb85c;\n    background-color: #fff; }\n\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da; }\n  .btn-info:focus, .btn-info.focus {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #1b6d85; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #269abc; }\n  .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #269abc; }\n    .btn-info:active:hover, .btn-info:active:focus, .btn-info:active.focus, .btn-info.active:hover, .btn-info.active:focus, .btn-info.active.focus,\n    .open > .btn-info.dropdown-toggle:hover,\n    .open > .btn-info.dropdown-toggle:focus,\n    .open > .btn-info.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #269abc;\n      border-color: #1b6d85; }\n  .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    background-image: none; }\n  .btn-info.disabled:hover, .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info[disabled]:hover, .btn-info[disabled]:focus, .btn-info[disabled].focus,\n  fieldset[disabled] .btn-info:hover,\n  fieldset[disabled] .btn-info:focus,\n  fieldset[disabled] .btn-info.focus {\n    background-color: #5bc0de;\n    border-color: #46b8da; }\n  .btn-info .badge {\n    color: #5bc0de;\n    background-color: #fff; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236; }\n  .btn-warning:focus, .btn-warning.focus {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #985f0d; }\n  .btn-warning:hover {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #d58512; }\n  .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #d58512; }\n    .btn-warning:active:hover, .btn-warning:active:focus, .btn-warning:active.focus, .btn-warning.active:hover, .btn-warning.active:focus, .btn-warning.active.focus,\n    .open > .btn-warning.dropdown-toggle:hover,\n    .open > .btn-warning.dropdown-toggle:focus,\n    .open > .btn-warning.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #d58512;\n      border-color: #985f0d; }\n  .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    background-image: none; }\n  .btn-warning.disabled:hover, .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning[disabled]:hover, .btn-warning[disabled]:focus, .btn-warning[disabled].focus,\n  fieldset[disabled] .btn-warning:hover,\n  fieldset[disabled] .btn-warning:focus,\n  fieldset[disabled] .btn-warning.focus {\n    background-color: #f0ad4e;\n    border-color: #eea236; }\n  .btn-warning .badge {\n    color: #f0ad4e;\n    background-color: #fff; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a; }\n  .btn-danger:focus, .btn-danger.focus {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #761c19; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #ac2925; }\n  .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #ac2925; }\n    .btn-danger:active:hover, .btn-danger:active:focus, .btn-danger:active.focus, .btn-danger.active:hover, .btn-danger.active:focus, .btn-danger.active.focus,\n    .open > .btn-danger.dropdown-toggle:hover,\n    .open > .btn-danger.dropdown-toggle:focus,\n    .open > .btn-danger.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #ac2925;\n      border-color: #761c19; }\n  .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    background-image: none; }\n  .btn-danger.disabled:hover, .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger[disabled]:hover, .btn-danger[disabled]:focus, .btn-danger[disabled].focus,\n  fieldset[disabled] .btn-danger:hover,\n  fieldset[disabled] .btn-danger:focus,\n  fieldset[disabled] .btn-danger.focus {\n    background-color: #d9534f;\n    border-color: #d43f3a; }\n  .btn-danger .badge {\n    color: #d9534f;\n    background-color: #fff; }\n\n.btn-link {\n  color: #337ab7;\n  font-weight: normal;\n  border-radius: 0; }\n  .btn-link, .btn-link:active, .btn-link.active, .btn-link[disabled],\n  fieldset[disabled] .btn-link {\n    background-color: transparent;\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n  .btn-link, .btn-link:hover, .btn-link:focus, .btn-link:active {\n    border-color: transparent; }\n  .btn-link:hover, .btn-link:focus {\n    color: #23527c;\n    text-decoration: underline;\n    background-color: transparent; }\n  .btn-link[disabled]:hover, .btn-link[disabled]:focus,\n  fieldset[disabled] .btn-link:hover,\n  fieldset[disabled] .btn-link:focus {\n    color: #777777;\n    text-decoration: none; }\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.btn-xs, .btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n\n.btn-block + .btn-block {\n  margin-top: 5px; }\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  -o-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear; }\n  .fade.in {\n    opacity: 1; }\n\n.collapse {\n  display: none; }\n  .collapse.in {\n    display: block; }\n\ntr.collapse.in {\n  display: table-row; }\n\ntbody.collapse.in {\n  display: table-row-group; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-property: height, visibility;\n  transition-property: height, visibility;\n  -webkit-transition-duration: 0.35s;\n  transition-duration: 0.35s;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease; }\n\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent; }\n\n.dropup,\n.dropdown {\n  position: relative; }\n\n.dropdown-toggle:focus {\n  outline: 0; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box; }\n  .dropdown-menu.pull-right {\n    right: 0;\n    left: auto; }\n  .dropdown-menu .divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n  .dropdown-menu > li > a {\n    display: block;\n    padding: 3px 20px;\n    clear: both;\n    font-weight: normal;\n    line-height: 1.42857;\n    color: #333333;\n    white-space: nowrap; }\n\n.dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {\n  text-decoration: none;\n  color: #262626;\n  background-color: #f5f5f5; }\n\n.dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #337ab7; }\n\n.dropdown-menu > .disabled > a, .dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  color: #777777; }\n\n.dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n  cursor: not-allowed; }\n\n.open > .dropdown-menu {\n  display: block; }\n\n.open > a {\n  outline: 0; }\n\n.dropdown-menu-right {\n  left: auto;\n  right: 0; }\n\n.dropdown-menu-left {\n  left: 0;\n  right: auto; }\n\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857;\n  color: #777777;\n  white-space: nowrap; }\n\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 990; }\n\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto; }\n\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n  content: \"\"; }\n\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px; }\n\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto; }\n  .navbar-right .dropdown-menu-left {\n    left: 0;\n    right: auto; } }\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; }\n  .btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    float: left; }\n    .btn-group > .btn:hover, .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:hover,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 2; }\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px; }\n\n.btn-toolbar {\n  margin-left: -5px; }\n  .btn-toolbar:before, .btn-toolbar:after {\n    content: \" \";\n    display: table; }\n  .btn-toolbar:after {\n    clear: both; }\n  .btn-toolbar .btn,\n  .btn-toolbar .btn-group,\n  .btn-toolbar .input-group {\n    float: left; }\n  .btn-toolbar > .btn,\n  .btn-toolbar > .btn-group,\n  .btn-toolbar > .input-group {\n    margin-left: 5px; }\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0; }\n\n.btn-group > .btn:first-child {\n  margin-left: 0; }\n  .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0; }\n\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group > .btn-group {\n  float: left; }\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0; }\n\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px; }\n\n.btn-group > .btn-lg + .dropdown-toggle, .btn-group-lg.btn-group > .btn + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px; }\n\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn-group.open .dropdown-toggle.btn-link {\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\n.btn .caret {\n  margin-left: 0; }\n\n.btn-lg .caret, .btn-group-lg > .btn .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0; }\n\n.dropup .btn-lg .caret, .dropup .btn-group-lg > .btn .caret {\n  border-width: 0 5px 5px; }\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%; }\n\n.btn-group-vertical > .btn-group:before, .btn-group-vertical > .btn-group:after {\n  content: \" \";\n  display: table; }\n\n.btn-group-vertical > .btn-group:after {\n  clear: both; }\n\n.btn-group-vertical > .btn-group > .btn {\n  float: none; }\n\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0; }\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px; }\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate; }\n  .btn-group-justified > .btn,\n  .btn-group-justified > .btn-group {\n    float: none;\n    display: table-cell;\n    width: 1%; }\n  .btn-group-justified > .btn-group .btn {\n    width: 100%; }\n  .btn-group-justified > .btn-group .dropdown-menu {\n    left: auto; }\n\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none; }\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate; }\n  .input-group[class*=\"col-\"] {\n    float: none;\n    padding-left: 0;\n    padding-right: 0; }\n  .input-group .form-control {\n    position: relative;\n    z-index: 2;\n    float: left;\n    width: 100%;\n    margin-bottom: 0; }\n    .input-group .form-control:focus {\n      z-index: 3; }\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell; }\n  .input-group-addon:not(:first-child):not(:last-child),\n  .input-group-btn:not(:first-child):not(:last-child),\n  .input-group .form-control:not(:first-child):not(:last-child) {\n    border-radius: 0; }\n\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle; }\n\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555555;\n  text-align: center;\n  background-color: #eeeeee;\n  border: 1px solid #ccc;\n  border-radius: 4px; }\n  .input-group-addon.input-sm,\n  .input-group-sm > .input-group-addon,\n  .input-group-sm > .input-group-btn > .input-group-addon.btn {\n    padding: 5px 10px;\n    font-size: 12px;\n    border-radius: 3px; }\n  .input-group-addon.input-lg,\n  .input-group-lg > .input-group-addon,\n  .input-group-lg > .input-group-btn > .input-group-addon.btn {\n    padding: 10px 16px;\n    font-size: 18px;\n    border-radius: 6px; }\n  .input-group-addon input[type=\"radio\"],\n  .input-group-addon input[type=\"checkbox\"] {\n    margin-top: 0; }\n\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.input-group-addon:first-child {\n  border-right: 0; }\n\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.input-group-addon:last-child {\n  border-left: 0; }\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap; }\n  .input-group-btn > .btn {\n    position: relative; }\n    .input-group-btn > .btn + .btn {\n      margin-left: -1px; }\n    .input-group-btn > .btn:hover, .input-group-btn > .btn:focus, .input-group-btn > .btn:active {\n      z-index: 2; }\n  .input-group-btn:first-child > .btn,\n  .input-group-btn:first-child > .btn-group {\n    margin-right: -1px; }\n  .input-group-btn:last-child > .btn,\n  .input-group-btn:last-child > .btn-group {\n    z-index: 2;\n    margin-left: -1px; }\n\n.nav {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none; }\n  .nav:before, .nav:after {\n    content: \" \";\n    display: table; }\n  .nav:after {\n    clear: both; }\n  .nav > li {\n    position: relative;\n    display: block; }\n    .nav > li > a {\n      position: relative;\n      display: block;\n      padding: 10px 15px; }\n      .nav > li > a:hover, .nav > li > a:focus {\n        text-decoration: none;\n        background-color: #eeeeee; }\n    .nav > li.disabled > a {\n      color: #777777; }\n      .nav > li.disabled > a:hover, .nav > li.disabled > a:focus {\n        color: #777777;\n        text-decoration: none;\n        background-color: transparent;\n        cursor: not-allowed; }\n  .nav .open > a, .nav .open > a:hover, .nav .open > a:focus {\n    background-color: #eeeeee;\n    border-color: #337ab7; }\n  .nav .nav-divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n  .nav > li > a > img {\n    max-width: none; }\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd; }\n  .nav-tabs > li {\n    float: left;\n    margin-bottom: -1px; }\n    .nav-tabs > li > a {\n      margin-right: 2px;\n      line-height: 1.42857;\n      border: 1px solid transparent;\n      border-radius: 4px 4px 0 0; }\n      .nav-tabs > li > a:hover {\n        border-color: #eeeeee #eeeeee #ddd; }\n    .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n      color: #555555;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-bottom-color: transparent;\n      cursor: default; }\n\n.nav-pills > li {\n  float: left; }\n  .nav-pills > li > a {\n    border-radius: 4px; }\n  .nav-pills > li + li {\n    margin-left: 2px; }\n  .nav-pills > li.active > a, .nav-pills > li.active > a:hover, .nav-pills > li.active > a:focus {\n    color: #fff;\n    background-color: #337ab7; }\n\n.nav-stacked > li {\n  float: none; }\n  .nav-stacked > li + li {\n    margin-top: 2px;\n    margin-left: 0; }\n\n.nav-justified, .nav-tabs.nav-justified {\n  width: 100%; }\n  .nav-justified > li, .nav-tabs.nav-justified > li {\n    float: none; }\n    .nav-justified > li > a, .nav-tabs.nav-justified > li > a {\n      text-align: center;\n      margin-bottom: 5px; }\n  .nav-justified > .dropdown .dropdown-menu {\n    top: auto;\n    left: auto; }\n  @media (min-width: 768px) {\n    .nav-justified > li, .nav-tabs.nav-justified > li {\n      display: table-cell;\n      width: 1%; }\n      .nav-justified > li > a, .nav-tabs.nav-justified > li > a {\n        margin-bottom: 0; } }\n\n.nav-tabs-justified, .nav-tabs.nav-justified {\n  border-bottom: 0; }\n  .nav-tabs-justified > li > a, .nav-tabs.nav-justified > li > a {\n    margin-right: 0;\n    border-radius: 4px; }\n  .nav-tabs-justified > .active > a, .nav-tabs.nav-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:focus {\n    border: 1px solid #ddd; }\n  @media (min-width: 768px) {\n    .nav-tabs-justified > li > a, .nav-tabs.nav-justified > li > a {\n      border-bottom: 1px solid #ddd;\n      border-radius: 4px 4px 0 0; }\n    .nav-tabs-justified > .active > a, .nav-tabs.nav-justified > .active > a,\n    .nav-tabs-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:hover,\n    .nav-tabs-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:focus {\n      border-bottom-color: #fff; } }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent; }\n  .navbar:before, .navbar:after {\n    content: \" \";\n    display: table; }\n  .navbar:after {\n    clear: both; }\n  @media (min-width: 768px) {\n    .navbar {\n      border-radius: 4px; } }\n\n.navbar-header:before, .navbar-header:after {\n  content: \" \";\n  display: table; }\n\n.navbar-header:after {\n  clear: both; }\n\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left; } }\n\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  -webkit-overflow-scrolling: touch; }\n  .navbar-collapse:before, .navbar-collapse:after {\n    content: \" \";\n    display: table; }\n  .navbar-collapse:after {\n    clear: both; }\n  .navbar-collapse.in {\n    overflow-y: auto; }\n  @media (min-width: 768px) {\n    .navbar-collapse {\n      width: auto;\n      border-top: 0;\n      box-shadow: none; }\n      .navbar-collapse.collapse {\n        display: block !important;\n        height: auto !important;\n        padding-bottom: 0;\n        overflow: visible !important; }\n      .navbar-collapse.in {\n        overflow-y: visible; }\n      .navbar-fixed-top .navbar-collapse,\n      .navbar-static-top .navbar-collapse,\n      .navbar-fixed-bottom .navbar-collapse {\n        padding-left: 0;\n        padding-right: 0; } }\n\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px; }\n  @media (max-device-width: 480px) and (orientation: landscape) {\n    .navbar-fixed-top .navbar-collapse,\n    .navbar-fixed-bottom .navbar-collapse {\n      max-height: 200px; } }\n\n.container > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-header,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px; }\n  @media (min-width: 768px) {\n    .container > .navbar-header,\n    .container > .navbar-collapse,\n    .container-fluid > .navbar-header,\n    .container-fluid > .navbar-collapse {\n      margin-right: 0;\n      margin-left: 0; } }\n\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px; }\n  @media (min-width: 768px) {\n    .navbar-static-top {\n      border-radius: 0; } }\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n  @media (min-width: 768px) {\n    .navbar-fixed-top,\n    .navbar-fixed-bottom {\n      border-radius: 0; } }\n\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px; }\n\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0; }\n\n.navbar-brand {\n  float: left;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n  height: 50px; }\n  .navbar-brand:hover, .navbar-brand:focus {\n    text-decoration: none; }\n  .navbar-brand > img {\n    display: block; }\n  @media (min-width: 768px) {\n    .navbar > .container .navbar-brand,\n    .navbar > .container-fluid .navbar-brand {\n      margin-left: -15px; } }\n\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 15px;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n  .navbar-toggle:focus {\n    outline: 0; }\n  .navbar-toggle .icon-bar {\n    display: block;\n    width: 22px;\n    height: 2px;\n    border-radius: 1px; }\n  .navbar-toggle .icon-bar + .icon-bar {\n    margin-top: 4px; }\n  @media (min-width: 768px) {\n    .navbar-toggle {\n      display: none; } }\n\n.navbar-nav {\n  margin: 7.5px -15px; }\n  .navbar-nav > li > a {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    line-height: 20px; }\n  @media (max-width: 767px) {\n    .navbar-nav .open .dropdown-menu {\n      position: static;\n      float: none;\n      width: auto;\n      margin-top: 0;\n      background-color: transparent;\n      border: 0;\n      box-shadow: none; }\n      .navbar-nav .open .dropdown-menu > li > a,\n      .navbar-nav .open .dropdown-menu .dropdown-header {\n        padding: 5px 15px 5px 25px; }\n      .navbar-nav .open .dropdown-menu > li > a {\n        line-height: 20px; }\n        .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-nav .open .dropdown-menu > li > a:focus {\n          background-image: none; } }\n  @media (min-width: 768px) {\n    .navbar-nav {\n      float: left;\n      margin: 0; }\n      .navbar-nav > li {\n        float: left; }\n        .navbar-nav > li > a {\n          padding-top: 15px;\n          padding-bottom: 15px; } }\n\n.navbar-form {\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 10px 15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  margin-top: 8px;\n  margin-bottom: 8px; }\n  @media (min-width: 768px) {\n    .navbar-form .form-group {\n      display: inline-block;\n      margin-bottom: 0;\n      vertical-align: middle; }\n    .navbar-form .form-control {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle; }\n    .navbar-form .form-control-static {\n      display: inline-block; }\n    .navbar-form .input-group {\n      display: inline-table;\n      vertical-align: middle; }\n      .navbar-form .input-group .input-group-addon,\n      .navbar-form .input-group .input-group-btn,\n      .navbar-form .input-group .form-control {\n        width: auto; }\n    .navbar-form .input-group > .form-control {\n      width: 100%; }\n    .navbar-form .control-label {\n      margin-bottom: 0;\n      vertical-align: middle; }\n    .navbar-form .radio,\n    .navbar-form .checkbox {\n      display: inline-block;\n      margin-top: 0;\n      margin-bottom: 0;\n      vertical-align: middle; }\n      .navbar-form .radio label,\n      .navbar-form .checkbox label {\n        padding-left: 0; }\n    .navbar-form .radio input[type=\"radio\"],\n    .navbar-form .checkbox input[type=\"checkbox\"] {\n      position: relative;\n      margin-left: 0; }\n    .navbar-form .has-feedback .form-control-feedback {\n      top: 0; } }\n  @media (max-width: 767px) {\n    .navbar-form .form-group {\n      margin-bottom: 5px; }\n      .navbar-form .form-group:last-child {\n        margin-bottom: 0; } }\n  @media (min-width: 768px) {\n    .navbar-form {\n      width: auto;\n      border: 0;\n      margin-left: 0;\n      margin-right: 0;\n      padding-top: 0;\n      padding-bottom: 0;\n      -webkit-box-shadow: none;\n      box-shadow: none; } }\n\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px; }\n  .navbar-btn.btn-sm, .btn-group-sm > .navbar-btn.btn {\n    margin-top: 10px;\n    margin-bottom: 10px; }\n  .navbar-btn.btn-xs, .btn-group-xs > .navbar-btn.btn {\n    margin-top: 14px;\n    margin-bottom: 14px; }\n\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n  @media (min-width: 768px) {\n    .navbar-text {\n      float: left;\n      margin-left: 15px;\n      margin-right: 15px; } }\n\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important; }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px; }\n    .navbar-right ~ .navbar-right {\n      margin-right: 0; } }\n\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7; }\n  .navbar-default .navbar-brand {\n    color: #777; }\n    .navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus {\n      color: #5e5e5e;\n      background-color: transparent; }\n  .navbar-default .navbar-text {\n    color: #777; }\n  .navbar-default .navbar-nav > li > a {\n    color: #777; }\n    .navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\n      color: #333;\n      background-color: transparent; }\n  .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7; }\n  .navbar-default .navbar-nav > .disabled > a, .navbar-default .navbar-nav > .disabled > a:hover, .navbar-default .navbar-nav > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent; }\n  .navbar-default .navbar-toggle {\n    border-color: #ddd; }\n    .navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\n      background-color: #ddd; }\n    .navbar-default .navbar-toggle .icon-bar {\n      background-color: #888; }\n  .navbar-default .navbar-collapse,\n  .navbar-default .navbar-form {\n    border-color: #e7e7e7; }\n  .navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {\n    background-color: #e7e7e7;\n    color: #555; }\n  @media (max-width: 767px) {\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n      color: #777; }\n      .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #333;\n        background-color: transparent; }\n    .navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n      color: #555;\n      background-color: #e7e7e7; }\n    .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n      color: #ccc;\n      background-color: transparent; } }\n  .navbar-default .navbar-link {\n    color: #777; }\n    .navbar-default .navbar-link:hover {\n      color: #333; }\n  .navbar-default .btn-link {\n    color: #777; }\n    .navbar-default .btn-link:hover, .navbar-default .btn-link:focus {\n      color: #333; }\n    .navbar-default .btn-link[disabled]:hover, .navbar-default .btn-link[disabled]:focus,\n    fieldset[disabled] .navbar-default .btn-link:hover,\n    fieldset[disabled] .navbar-default .btn-link:focus {\n      color: #ccc; }\n\n.navbar-inverse {\n  background-color: #222;\n  border-color: #090909; }\n  .navbar-inverse .navbar-brand {\n    color: #9d9d9d; }\n    .navbar-inverse .navbar-brand:hover, .navbar-inverse .navbar-brand:focus {\n      color: #fff;\n      background-color: transparent; }\n  .navbar-inverse .navbar-text {\n    color: #9d9d9d; }\n  .navbar-inverse .navbar-nav > li > a {\n    color: #9d9d9d; }\n    .navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus {\n      color: #fff;\n      background-color: transparent; }\n  .navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus {\n    color: #fff;\n    background-color: #090909; }\n  .navbar-inverse .navbar-nav > .disabled > a, .navbar-inverse .navbar-nav > .disabled > a:hover, .navbar-inverse .navbar-nav > .disabled > a:focus {\n    color: #444;\n    background-color: transparent; }\n  .navbar-inverse .navbar-toggle {\n    border-color: #333; }\n    .navbar-inverse .navbar-toggle:hover, .navbar-inverse .navbar-toggle:focus {\n      background-color: #333; }\n    .navbar-inverse .navbar-toggle .icon-bar {\n      background-color: #fff; }\n  .navbar-inverse .navbar-collapse,\n  .navbar-inverse .navbar-form {\n    border-color: #101010; }\n  .navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:hover, .navbar-inverse .navbar-nav > .open > a:focus {\n    background-color: #090909;\n    color: #fff; }\n  @media (max-width: 767px) {\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n      border-color: #090909; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n      background-color: #090909; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n      color: #9d9d9d; }\n      .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #fff;\n        background-color: transparent; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n      color: #fff;\n      background-color: #090909; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n      color: #444;\n      background-color: transparent; } }\n  .navbar-inverse .navbar-link {\n    color: #9d9d9d; }\n    .navbar-inverse .navbar-link:hover {\n      color: #fff; }\n  .navbar-inverse .btn-link {\n    color: #9d9d9d; }\n    .navbar-inverse .btn-link:hover, .navbar-inverse .btn-link:focus {\n      color: #fff; }\n    .navbar-inverse .btn-link[disabled]:hover, .navbar-inverse .btn-link[disabled]:focus,\n    fieldset[disabled] .navbar-inverse .btn-link:hover,\n    fieldset[disabled] .navbar-inverse .btn-link:focus {\n      color: #444; }\n\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px; }\n  .breadcrumb > li {\n    display: inline-block; }\n    .breadcrumb > li + li:before {\n      content: \"/ \";\n      padding: 0 5px;\n      color: #ccc; }\n  .breadcrumb > .active {\n    color: #777777; }\n\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px; }\n  .pagination > li {\n    display: inline; }\n    .pagination > li > a,\n    .pagination > li > span {\n      position: relative;\n      float: left;\n      padding: 6px 12px;\n      line-height: 1.42857;\n      text-decoration: none;\n      color: #337ab7;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      margin-left: -1px; }\n    .pagination > li:first-child > a,\n    .pagination > li:first-child > span {\n      margin-left: 0;\n      border-bottom-left-radius: 4px;\n      border-top-left-radius: 4px; }\n    .pagination > li:last-child > a,\n    .pagination > li:last-child > span {\n      border-bottom-right-radius: 4px;\n      border-top-right-radius: 4px; }\n  .pagination > li > a:hover, .pagination > li > a:focus,\n  .pagination > li > span:hover,\n  .pagination > li > span:focus {\n    z-index: 2;\n    color: #23527c;\n    background-color: #eeeeee;\n    border-color: #ddd; }\n  .pagination > .active > a, .pagination > .active > a:hover, .pagination > .active > a:focus,\n  .pagination > .active > span,\n  .pagination > .active > span:hover,\n  .pagination > .active > span:focus {\n    z-index: 3;\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #337ab7;\n    cursor: default; }\n  .pagination > .disabled > span,\n  .pagination > .disabled > span:hover,\n  .pagination > .disabled > span:focus,\n  .pagination > .disabled > a,\n  .pagination > .disabled > a:hover,\n  .pagination > .disabled > a:focus {\n    color: #777777;\n    background-color: #fff;\n    border-color: #ddd;\n    cursor: not-allowed; }\n\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333; }\n\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px; }\n\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px; }\n\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px; }\n\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px; }\n\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  list-style: none;\n  text-align: center; }\n  .pager:before, .pager:after {\n    content: \" \";\n    display: table; }\n  .pager:after {\n    clear: both; }\n  .pager li {\n    display: inline; }\n    .pager li > a,\n    .pager li > span {\n      display: inline-block;\n      padding: 5px 14px;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-radius: 15px; }\n    .pager li > a:hover,\n    .pager li > a:focus {\n      text-decoration: none;\n      background-color: #eeeeee; }\n  .pager .next > a,\n  .pager .next > span {\n    float: right; }\n  .pager .previous > a,\n  .pager .previous > span {\n    float: left; }\n  .pager .disabled > a,\n  .pager .disabled > a:hover,\n  .pager .disabled > a:focus,\n  .pager .disabled > span {\n    color: #777777;\n    background-color: #fff;\n    cursor: not-allowed; }\n\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em; }\n  .label:empty {\n    display: none; }\n  .btn .label {\n    position: relative;\n    top: -1px; }\n\na.label:hover, a.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.label-default {\n  background-color: #777777; }\n  .label-default[href]:hover, .label-default[href]:focus {\n    background-color: #5e5e5e; }\n\n.label-primary {\n  background-color: #337ab7; }\n  .label-primary[href]:hover, .label-primary[href]:focus {\n    background-color: #286090; }\n\n.label-success {\n  background-color: #5cb85c; }\n  .label-success[href]:hover, .label-success[href]:focus {\n    background-color: #449d44; }\n\n.label-info {\n  background-color: #5bc0de; }\n  .label-info[href]:hover, .label-info[href]:focus {\n    background-color: #31b0d5; }\n\n.label-warning {\n  background-color: #f0ad4e; }\n  .label-warning[href]:hover, .label-warning[href]:focus {\n    background-color: #ec971f; }\n\n.label-danger {\n  background-color: #d9534f; }\n  .label-danger[href]:hover, .label-danger[href]:focus {\n    background-color: #c9302c; }\n\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #fff;\n  line-height: 1;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #777777;\n  border-radius: 10px; }\n  .badge:empty {\n    display: none; }\n  .btn .badge {\n    position: relative;\n    top: -1px; }\n  .btn-xs .badge, .btn-group-xs > .btn .badge,\n  .btn-group-xs > .btn .badge {\n    top: 0;\n    padding: 1px 5px; }\n  .list-group-item.active > .badge,\n  .nav-pills > .active > a > .badge {\n    color: #337ab7;\n    background-color: #fff; }\n  .list-group-item > .badge {\n    float: right; }\n  .list-group-item > .badge + .badge {\n    margin-right: 5px; }\n  .nav-pills > li > a > .badge {\n    margin-left: 3px; }\n\na.badge:hover, a.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eeeeee; }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    color: inherit; }\n  .jumbotron p {\n    margin-bottom: 15px;\n    font-size: 21px;\n    font-weight: 200; }\n  .jumbotron > hr {\n    border-top-color: #d5d5d5; }\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    border-radius: 6px;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .jumbotron .container {\n    max-width: 100%; }\n  @media screen and (min-width: 768px) {\n    .jumbotron {\n      padding-top: 48px;\n      padding-bottom: 48px; }\n      .container .jumbotron,\n      .container-fluid .jumbotron {\n        padding-left: 60px;\n        padding-right: 60px; }\n      .jumbotron h1,\n      .jumbotron .h1 {\n        font-size: 63px; } }\n\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: border 0.2s ease-in-out;\n  -o-transition: border 0.2s ease-in-out;\n  transition: border 0.2s ease-in-out; }\n  .thumbnail > img,\n  .thumbnail a > img {\n    display: block;\n    max-width: 100%;\n    height: auto;\n    margin-left: auto;\n    margin-right: auto; }\n  .thumbnail .caption {\n    padding: 9px;\n    color: #333333; }\n\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7; }\n\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n  .alert h4 {\n    margin-top: 0;\n    color: inherit; }\n  .alert .alert-link {\n    font-weight: bold; }\n  .alert > p,\n  .alert > ul {\n    margin-bottom: 0; }\n  .alert > p + p {\n    margin-top: 5px; }\n\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px; }\n  .alert-dismissable .close,\n  .alert-dismissible .close {\n    position: relative;\n    top: -2px;\n    right: -21px;\n    color: inherit; }\n\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n  color: #3c763d; }\n  .alert-success hr {\n    border-top-color: #c9e2b3; }\n  .alert-success .alert-link {\n    color: #2b542c; }\n\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  color: #31708f; }\n  .alert-info hr {\n    border-top-color: #a6e1ec; }\n  .alert-info .alert-link {\n    color: #245269; }\n\n.alert-warning {\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n  color: #8a6d3b; }\n  .alert-warning hr {\n    border-top-color: #f7e1b5; }\n  .alert-warning .alert-link {\n    color: #66512c; }\n\n.alert-danger {\n  background-color: #f2dede;\n  border-color: #ebccd1;\n  color: #a94442; }\n  .alert-danger hr {\n    border-top-color: #e4b9c0; }\n  .alert-danger .alert-link {\n    color: #843534; }\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0; }\n  to {\n    background-position: 0 0; } }\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0; }\n  to {\n    background-position: 0 0; } }\n\n.progress {\n  overflow: hidden;\n  height: 20px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); }\n\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  -webkit-transition: width 0.6s ease;\n  -o-transition: width 0.6s ease;\n  transition: width 0.6s ease; }\n\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px; }\n\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n  -o-animation: progress-bar-stripes 2s linear infinite;\n  animation: progress-bar-stripes 2s linear infinite; }\n\n.progress-bar-success {\n  background-color: #5cb85c; }\n  .progress-striped .progress-bar-success {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-info {\n  background-color: #5bc0de; }\n  .progress-striped .progress-bar-info {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-warning {\n  background-color: #f0ad4e; }\n  .progress-striped .progress-bar-warning {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-danger {\n  background-color: #d9534f; }\n  .progress-striped .progress-bar-danger {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.media {\n  margin-top: 15px; }\n  .media:first-child {\n    margin-top: 0; }\n\n.media,\n.media-body {\n  zoom: 1;\n  overflow: hidden; }\n\n.media-body {\n  width: 10000px; }\n\n.media-object {\n  display: block; }\n  .media-object.img-thumbnail {\n    max-width: none; }\n\n.media-right,\n.media > .pull-right {\n  padding-left: 10px; }\n\n.media-left,\n.media > .pull-left {\n  padding-right: 10px; }\n\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top; }\n\n.media-middle {\n  vertical-align: middle; }\n\n.media-bottom {\n  vertical-align: bottom; }\n\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.media-list {\n  padding-left: 0;\n  list-style: none; }\n\n.list-group {\n  margin-bottom: 20px;\n  padding-left: 0; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n  .list-group-item:first-child {\n    border-top-right-radius: 4px;\n    border-top-left-radius: 4px; }\n  .list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px; }\n\na.list-group-item,\nbutton.list-group-item {\n  color: #555; }\n  a.list-group-item .list-group-item-heading,\n  button.list-group-item .list-group-item-heading {\n    color: #333; }\n  a.list-group-item:hover, a.list-group-item:focus,\n  button.list-group-item:hover,\n  button.list-group-item:focus {\n    text-decoration: none;\n    color: #555;\n    background-color: #f5f5f5; }\n\nbutton.list-group-item {\n  width: 100%;\n  text-align: left; }\n\n.list-group-item.disabled, .list-group-item.disabled:hover, .list-group-item.disabled:focus {\n  background-color: #eeeeee;\n  color: #777777;\n  cursor: not-allowed; }\n  .list-group-item.disabled .list-group-item-heading, .list-group-item.disabled:hover .list-group-item-heading, .list-group-item.disabled:focus .list-group-item-heading {\n    color: inherit; }\n  .list-group-item.disabled .list-group-item-text, .list-group-item.disabled:hover .list-group-item-text, .list-group-item.disabled:focus .list-group-item-text {\n    color: #777777; }\n\n.list-group-item.active, .list-group-item.active:hover, .list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7; }\n  .list-group-item.active .list-group-item-heading,\n  .list-group-item.active .list-group-item-heading > small,\n  .list-group-item.active .list-group-item-heading > .small, .list-group-item.active:hover .list-group-item-heading,\n  .list-group-item.active:hover .list-group-item-heading > small,\n  .list-group-item.active:hover .list-group-item-heading > .small, .list-group-item.active:focus .list-group-item-heading,\n  .list-group-item.active:focus .list-group-item-heading > small,\n  .list-group-item.active:focus .list-group-item-heading > .small {\n    color: inherit; }\n  .list-group-item.active .list-group-item-text, .list-group-item.active:hover .list-group-item-text, .list-group-item.active:focus .list-group-item-text {\n    color: #c7ddef; }\n\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8; }\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d; }\n  a.list-group-item-success .list-group-item-heading,\n  button.list-group-item-success .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-success:hover, a.list-group-item-success:focus,\n  button.list-group-item-success:hover,\n  button.list-group-item-success:focus {\n    color: #3c763d;\n    background-color: #d0e9c6; }\n  a.list-group-item-success.active, a.list-group-item-success.active:hover, a.list-group-item-success.active:focus,\n  button.list-group-item-success.active,\n  button.list-group-item-success.active:hover,\n  button.list-group-item-success.active:focus {\n    color: #fff;\n    background-color: #3c763d;\n    border-color: #3c763d; }\n\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7; }\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f; }\n  a.list-group-item-info .list-group-item-heading,\n  button.list-group-item-info .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-info:hover, a.list-group-item-info:focus,\n  button.list-group-item-info:hover,\n  button.list-group-item-info:focus {\n    color: #31708f;\n    background-color: #c4e3f3; }\n  a.list-group-item-info.active, a.list-group-item-info.active:hover, a.list-group-item-info.active:focus,\n  button.list-group-item-info.active,\n  button.list-group-item-info.active:hover,\n  button.list-group-item-info.active:focus {\n    color: #fff;\n    background-color: #31708f;\n    border-color: #31708f; }\n\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3; }\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b; }\n  a.list-group-item-warning .list-group-item-heading,\n  button.list-group-item-warning .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-warning:hover, a.list-group-item-warning:focus,\n  button.list-group-item-warning:hover,\n  button.list-group-item-warning:focus {\n    color: #8a6d3b;\n    background-color: #faf2cc; }\n  a.list-group-item-warning.active, a.list-group-item-warning.active:hover, a.list-group-item-warning.active:focus,\n  button.list-group-item-warning.active,\n  button.list-group-item-warning.active:hover,\n  button.list-group-item-warning.active:focus {\n    color: #fff;\n    background-color: #8a6d3b;\n    border-color: #8a6d3b; }\n\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede; }\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442; }\n  a.list-group-item-danger .list-group-item-heading,\n  button.list-group-item-danger .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-danger:hover, a.list-group-item-danger:focus,\n  button.list-group-item-danger:hover,\n  button.list-group-item-danger:focus {\n    color: #a94442;\n    background-color: #ebcccc; }\n  a.list-group-item-danger.active, a.list-group-item-danger.active:hover, a.list-group-item-danger.active:focus,\n  button.list-group-item-danger.active,\n  button.list-group-item-danger.active:hover,\n  button.list-group-item-danger.active:focus {\n    color: #fff;\n    background-color: #a94442;\n    border-color: #a94442; }\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3; }\n\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); }\n\n.panel-body {\n  padding: 15px; }\n  .panel-body:before, .panel-body:after {\n    content: \" \";\n    display: table; }\n  .panel-body:after {\n    clear: both; }\n\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px; }\n  .panel-heading > .dropdown .dropdown-toggle {\n    color: inherit; }\n\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit; }\n  .panel-title > a,\n  .panel-title > small,\n  .panel-title > .small,\n  .panel-title > small > a,\n  .panel-title > .small > a {\n    color: inherit; }\n\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0; }\n  .panel > .list-group .list-group-item,\n  .panel > .panel-collapse > .list-group .list-group-item {\n    border-width: 1px 0;\n    border-radius: 0; }\n  .panel > .list-group:first-child .list-group-item:first-child,\n  .panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n    border-top: 0;\n    border-top-right-radius: 3px;\n    border-top-left-radius: 3px; }\n  .panel > .list-group:last-child .list-group-item:last-child,\n  .panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n    border-bottom: 0;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px; }\n\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0; }\n\n.list-group + .panel-footer {\n  border-top-width: 0; }\n\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0; }\n  .panel > .table caption,\n  .panel > .table-responsive > .table caption,\n  .panel > .panel-collapse > .table caption {\n    padding-left: 15px;\n    padding-right: 15px; }\n\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px; }\n  .panel > .table:first-child > thead:first-child > tr:first-child,\n  .panel > .table:first-child > tbody:first-child > tr:first-child,\n  .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n  .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px; }\n    .panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n    .panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n      border-top-left-radius: 3px; }\n    .panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n    .panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n      border-top-right-radius: 3px; }\n\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n  .panel > .table:last-child > tbody:last-child > tr:last-child,\n  .panel > .table:last-child > tfoot:last-child > tr:last-child,\n  .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n  .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px; }\n    .panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n    .panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n      border-bottom-left-radius: 3px; }\n    .panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n    .panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n      border-bottom-right-radius: 3px; }\n\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd; }\n\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0; }\n\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0; }\n  .panel > .table-bordered > thead > tr > th:first-child,\n  .panel > .table-bordered > thead > tr > td:first-child,\n  .panel > .table-bordered > tbody > tr > th:first-child,\n  .panel > .table-bordered > tbody > tr > td:first-child,\n  .panel > .table-bordered > tfoot > tr > th:first-child,\n  .panel > .table-bordered > tfoot > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0; }\n  .panel > .table-bordered > thead > tr > th:last-child,\n  .panel > .table-bordered > thead > tr > td:last-child,\n  .panel > .table-bordered > tbody > tr > th:last-child,\n  .panel > .table-bordered > tbody > tr > td:last-child,\n  .panel > .table-bordered > tfoot > tr > th:last-child,\n  .panel > .table-bordered > tfoot > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0; }\n  .panel > .table-bordered > thead > tr:first-child > td,\n  .panel > .table-bordered > thead > tr:first-child > th,\n  .panel > .table-bordered > tbody > tr:first-child > td,\n  .panel > .table-bordered > tbody > tr:first-child > th,\n  .panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n  .panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n  .panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n  .panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n    border-bottom: 0; }\n  .panel > .table-bordered > tbody > tr:last-child > td,\n  .panel > .table-bordered > tbody > tr:last-child > th,\n  .panel > .table-bordered > tfoot > tr:last-child > td,\n  .panel > .table-bordered > tfoot > tr:last-child > th,\n  .panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n  .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n    border-bottom: 0; }\n\n.panel > .table-responsive {\n  border: 0;\n  margin-bottom: 0; }\n\n.panel-group {\n  margin-bottom: 20px; }\n  .panel-group .panel {\n    margin-bottom: 0;\n    border-radius: 4px; }\n    .panel-group .panel + .panel {\n      margin-top: 5px; }\n  .panel-group .panel-heading {\n    border-bottom: 0; }\n    .panel-group .panel-heading + .panel-collapse > .panel-body,\n    .panel-group .panel-heading + .panel-collapse > .list-group {\n      border-top: 1px solid #ddd; }\n  .panel-group .panel-footer {\n    border-top: 0; }\n    .panel-group .panel-footer + .panel-collapse .panel-body {\n      border-bottom: 1px solid #ddd; }\n\n.panel-default {\n  border-color: #ddd; }\n  .panel-default > .panel-heading {\n    color: #333333;\n    background-color: #f5f5f5;\n    border-color: #ddd; }\n    .panel-default > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #ddd; }\n    .panel-default > .panel-heading .badge {\n      color: #f5f5f5;\n      background-color: #333333; }\n  .panel-default > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ddd; }\n\n.panel-primary {\n  border-color: #337ab7; }\n  .panel-primary > .panel-heading {\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #337ab7; }\n    .panel-primary > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #337ab7; }\n    .panel-primary > .panel-heading .badge {\n      color: #337ab7;\n      background-color: #fff; }\n  .panel-primary > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #337ab7; }\n\n.panel-success {\n  border-color: #d6e9c6; }\n  .panel-success > .panel-heading {\n    color: #3c763d;\n    background-color: #dff0d8;\n    border-color: #d6e9c6; }\n    .panel-success > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #d6e9c6; }\n    .panel-success > .panel-heading .badge {\n      color: #dff0d8;\n      background-color: #3c763d; }\n  .panel-success > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #d6e9c6; }\n\n.panel-info {\n  border-color: #bce8f1; }\n  .panel-info > .panel-heading {\n    color: #31708f;\n    background-color: #d9edf7;\n    border-color: #bce8f1; }\n    .panel-info > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #bce8f1; }\n    .panel-info > .panel-heading .badge {\n      color: #d9edf7;\n      background-color: #31708f; }\n  .panel-info > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #bce8f1; }\n\n.panel-warning {\n  border-color: #faebcc; }\n  .panel-warning > .panel-heading {\n    color: #8a6d3b;\n    background-color: #fcf8e3;\n    border-color: #faebcc; }\n    .panel-warning > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #faebcc; }\n    .panel-warning > .panel-heading .badge {\n      color: #fcf8e3;\n      background-color: #8a6d3b; }\n  .panel-warning > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #faebcc; }\n\n.panel-danger {\n  border-color: #ebccd1; }\n  .panel-danger > .panel-heading {\n    color: #a94442;\n    background-color: #f2dede;\n    border-color: #ebccd1; }\n    .panel-danger > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #ebccd1; }\n    .panel-danger > .panel-heading .badge {\n      color: #f2dede;\n      background-color: #a94442; }\n  .panel-danger > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ebccd1; }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden; }\n  .embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    border: 0; }\n\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%; }\n\n.embed-responsive-4by3 {\n  padding-bottom: 75%; }\n\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05); }\n  .well blockquote {\n    border-color: #ddd;\n    border-color: rgba(0, 0, 0, 0.15); }\n\n.well-lg {\n  padding: 24px;\n  border-radius: 6px; }\n\n.well-sm {\n  padding: 9px;\n  border-radius: 3px; }\n\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.2;\n  filter: alpha(opacity=20); }\n  .close:hover, .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n    opacity: 0.5;\n    filter: alpha(opacity=50); }\n\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n\n.modal-open {\n  overflow: hidden; }\n\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0; }\n  .modal.fade .modal-dialog {\n    -webkit-transform: translate(0, -25%);\n    -ms-transform: translate(0, -25%);\n    -o-transform: translate(0, -25%);\n    transform: translate(0, -25%);\n    -webkit-transition: -webkit-transform 0.3s ease-out;\n    -moz-transition: -moz-transform 0.3s ease-out;\n    -o-transition: -o-transform 0.3s ease-out;\n    transition: transform 0.3s ease-out; }\n  .modal.in .modal-dialog {\n    -webkit-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0); }\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px; }\n\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000; }\n  .modal-backdrop.fade {\n    opacity: 0;\n    filter: alpha(opacity=0); }\n  .modal-backdrop.in {\n    opacity: 0.5;\n    filter: alpha(opacity=50); }\n\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5; }\n  .modal-header:before, .modal-header:after {\n    content: \" \";\n    display: table; }\n  .modal-header:after {\n    clear: both; }\n\n.modal-header .close {\n  margin-top: -2px; }\n\n.modal-title {\n  margin: 0;\n  line-height: 1.42857; }\n\n.modal-body {\n  position: relative;\n  padding: 15px; }\n\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5; }\n  .modal-footer:before, .modal-footer:after {\n    content: \" \";\n    display: table; }\n  .modal-footer:after {\n    clear: both; }\n  .modal-footer .btn + .btn {\n    margin-left: 5px;\n    margin-bottom: 0; }\n  .modal-footer .btn-group .btn + .btn {\n    margin-left: -1px; }\n  .modal-footer .btn-block + .btn-block {\n    margin-left: 0; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto; }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); }\n  .modal-sm {\n    width: 300px; } }\n\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px; } }\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 12px;\n  opacity: 0;\n  filter: alpha(opacity=0); }\n  .tooltip.in {\n    opacity: 0.9;\n    filter: alpha(opacity=90); }\n  .tooltip.top {\n    margin-top: -3px;\n    padding: 5px 0; }\n  .tooltip.right {\n    margin-left: 3px;\n    padding: 0 5px; }\n  .tooltip.bottom {\n    margin-top: 3px;\n    padding: 5px 0; }\n  .tooltip.left {\n    margin-left: -3px;\n    padding: 0 5px; }\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px; }\n\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.top-left .tooltip-arrow {\n  bottom: 0;\n  right: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 14px;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); }\n  .popover.top {\n    margin-top: -10px; }\n  .popover.right {\n    margin-left: 10px; }\n  .popover.bottom {\n    margin-top: 10px; }\n  .popover.left {\n    margin-left: -10px; }\n\n.popover-title {\n  margin: 0;\n  padding: 8px 14px;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0; }\n\n.popover-content {\n  padding: 9px 14px; }\n\n.popover > .arrow, .popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.popover > .arrow {\n  border-width: 11px; }\n\n.popover > .arrow:after {\n  border-width: 10px;\n  content: \"\"; }\n\n.popover.top > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-bottom-width: 0;\n  border-top-color: #999999;\n  border-top-color: rgba(0, 0, 0, 0.25);\n  bottom: -11px; }\n  .popover.top > .arrow:after {\n    content: \" \";\n    bottom: 1px;\n    margin-left: -10px;\n    border-bottom-width: 0;\n    border-top-color: #fff; }\n\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999999;\n  border-right-color: rgba(0, 0, 0, 0.25); }\n  .popover.right > .arrow:after {\n    content: \" \";\n    left: 1px;\n    bottom: -10px;\n    border-left-width: 0;\n    border-right-color: #fff; }\n\n.popover.bottom > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999999;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n  top: -11px; }\n  .popover.bottom > .arrow:after {\n    content: \" \";\n    top: 1px;\n    margin-left: -10px;\n    border-top-width: 0;\n    border-bottom-color: #fff; }\n\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999999;\n  border-left-color: rgba(0, 0, 0, 0.25); }\n  .popover.left > .arrow:after {\n    content: \" \";\n    right: 1px;\n    border-right-width: 0;\n    border-left-color: #fff;\n    bottom: -10px; }\n\n.carousel {\n  position: relative; }\n\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%; }\n  .carousel-inner > .item {\n    display: none;\n    position: relative;\n    -webkit-transition: 0.6s ease-in-out left;\n    -o-transition: 0.6s ease-in-out left;\n    transition: 0.6s ease-in-out left; }\n    .carousel-inner > .item > img,\n    .carousel-inner > .item > a > img {\n      display: block;\n      max-width: 100%;\n      height: auto;\n      line-height: 1; }\n    @media all and (transform-3d), (-webkit-transform-3d) {\n      .carousel-inner > .item {\n        -webkit-transition: -webkit-transform 0.6s ease-in-out;\n        -moz-transition: -moz-transform 0.6s ease-in-out;\n        -o-transition: -o-transform 0.6s ease-in-out;\n        transition: transform 0.6s ease-in-out;\n        -webkit-backface-visibility: hidden;\n        -moz-backface-visibility: hidden;\n        backface-visibility: hidden;\n        -webkit-perspective: 1000px;\n        -moz-perspective: 1000px;\n        perspective: 1000px; }\n        .carousel-inner > .item.next, .carousel-inner > .item.active.right {\n          -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n          left: 0; }\n        .carousel-inner > .item.prev, .carousel-inner > .item.active.left {\n          -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n          left: 0; }\n        .carousel-inner > .item.next.left, .carousel-inner > .item.prev.right, .carousel-inner > .item.active {\n          -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n          left: 0; } }\n  .carousel-inner > .active,\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    display: block; }\n  .carousel-inner > .active {\n    left: 0; }\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    position: absolute;\n    top: 0;\n    width: 100%; }\n  .carousel-inner > .next {\n    left: 100%; }\n  .carousel-inner > .prev {\n    left: -100%; }\n  .carousel-inner > .next.left,\n  .carousel-inner > .prev.right {\n    left: 0; }\n  .carousel-inner > .active.left {\n    left: -100%; }\n  .carousel-inner > .active.right {\n    left: 100%; }\n\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 15%;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  background-color: transparent; }\n  .carousel-control.left {\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1); }\n  .carousel-control.right {\n    left: auto;\n    right: 0;\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1); }\n  .carousel-control:hover, .carousel-control:focus {\n    outline: 0;\n    color: #fff;\n    text-decoration: none;\n    opacity: 0.9;\n    filter: alpha(opacity=90); }\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next,\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right {\n    position: absolute;\n    top: 50%;\n    margin-top: -10px;\n    z-index: 5;\n    display: inline-block; }\n  .carousel-control .icon-prev,\n  .carousel-control .glyphicon-chevron-left {\n    left: 50%;\n    margin-left: -10px; }\n  .carousel-control .icon-next,\n  .carousel-control .glyphicon-chevron-right {\n    right: 50%;\n    margin-right: -10px; }\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 20px;\n    height: 20px;\n    line-height: 1;\n    font-family: serif; }\n  .carousel-control .icon-prev:before {\n    content: '\\2039'; }\n  .carousel-control .icon-next:before {\n    content: '\\203a'; }\n\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center; }\n  .carousel-indicators li {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    margin: 1px;\n    text-indent: -999px;\n    border: 1px solid #fff;\n    border-radius: 10px;\n    cursor: pointer;\n    background-color: #000 \\9;\n    background-color: transparent; }\n  .carousel-indicators .active {\n    margin: 0;\n    width: 12px;\n    height: 12px;\n    background-color: #fff; }\n\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6); }\n  .carousel-caption .btn {\n    text-shadow: none; }\n\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px; }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px; }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px; }\n  .carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px; }\n  .carousel-indicators {\n    bottom: 20px; } }\n\n.clearfix:before, .clearfix:after {\n  content: \" \";\n  display: table; }\n\n.clearfix:after {\n  clear: both; }\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.pull-right {\n  float: right !important; }\n\n.pull-left {\n  float: left !important; }\n\n.hide {\n  display: none !important; }\n\n.show {\n  display: block !important; }\n\n.invisible {\n  visibility: hidden; }\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.hidden {\n  display: none !important; }\n\n.affix {\n  position: fixed; }\n\n@-ms-viewport {\n  width: device-width; }\n\n.visible-xs {\n  display: none !important; }\n\n.visible-sm {\n  display: none !important; }\n\n.visible-md {\n  display: none !important; }\n\n.visible-lg {\n  display: none !important; }\n\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important; }\n\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important; }\n  table.visible-xs {\n    display: table !important; }\n  tr.visible-xs {\n    display: table-row !important; }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important; }\n  table.visible-sm {\n    display: table !important; }\n  tr.visible-sm {\n    display: table-row !important; }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important; }\n  table.visible-md {\n    display: table !important; }\n  tr.visible-md {\n    display: table-row !important; }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important; }\n  table.visible-lg {\n    display: table !important; }\n  tr.visible-lg {\n    display: table-row !important; }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important; } }\n\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important; } }\n\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important; } }\n\n.visible-print {\n  display: none !important; }\n\n@media print {\n  .visible-print {\n    display: block !important; }\n  table.visible-print {\n    display: table !important; }\n  tr.visible-print {\n    display: table-row !important; }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important; } }\n\n.visible-print-block {\n  display: none !important; }\n  @media print {\n    .visible-print-block {\n      display: block !important; } }\n\n.visible-print-inline {\n  display: none !important; }\n  @media print {\n    .visible-print-inline {\n      display: inline !important; } }\n\n.visible-print-inline-block {\n  display: none !important; }\n  @media print {\n    .visible-print-inline-block {\n      display: inline-block !important; } }\n\n@media print {\n  .hidden-print {\n    display: none !important; } }\n\n.wpng-resource-list {\n  margin: 0;\n  padding: 0;\n  width: 100%; }\n  .wpng-resource-list li {\n    list-style-type: none;\n    width: 33%;\n    display: inline-block; }\n    .wpng-resource-list li a {\n      font-size: 1.1em;\n      font-weight: bold;\n      display: block; }\n\n.wpng-resource-list-body {\n  padding: 0; }\n\n.wpng-resource-list-placeholder {\n  margin: .7em; }\n\n.wpng-resource-list-info {\n  color: #999999;\n  font-size: 0.9em; }\n  .wpng-resource-list-info span {\n    font-style: italic; }\n\n@media only screen and (min-width: 1600px) {\n  .wpng-resource-list li {\n    width: 25%; } }\n\n@media only screen and (max-width: 900px) {\n  .wpng-resource-list li {\n    width: 50%; } }\n\n@media only screen and (max-width: 700px) {\n  .wpng-resource-list li {\n    width: 100%; }\n  .wpng-resource-list-placeholder {\n    margin: .7em .2em; } }\n","/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n\n// ==========================================================================\n// Print styles.\n// Inlined to avoid the additional HTTP request: h5bp.com/r\n// ==========================================================================\n\n@media print {\n    *,\n    *:before,\n    *:after {\n        background: transparent !important;\n        color: #000 !important; // Black prints faster: h5bp.com/s\n        box-shadow: none !important;\n        text-shadow: none !important;\n    }\n\n    a,\n    a:visited {\n        text-decoration: underline;\n    }\n\n    a[href]:after {\n        content: \" (\" attr(href) \")\";\n    }\n\n    abbr[title]:after {\n        content: \" (\" attr(title) \")\";\n    }\n\n    // Don't show links that are fragment identifiers,\n    // or use the `javascript:` pseudo protocol\n    a[href^=\"#\"]:after,\n    a[href^=\"javascript:\"]:after {\n        content: \"\";\n    }\n\n    pre,\n    blockquote {\n        border: 1px solid #999;\n        page-break-inside: avoid;\n    }\n\n    thead {\n        display: table-header-group; // h5bp.com/t\n    }\n\n    tr,\n    img {\n        page-break-inside: avoid;\n    }\n\n    img {\n        max-width: 100% !important;\n    }\n\n    p,\n    h2,\n    h3 {\n        orphans: 3;\n        widows: 3;\n    }\n\n    h2,\n    h3 {\n        page-break-after: avoid;\n    }\n\n    // Bootstrap specific changes start\n\n    // Bootstrap components\n    .navbar {\n        display: none;\n    }\n    .btn,\n    .dropup > .btn {\n        > .caret {\n            border-top-color: #000 !important;\n        }\n    }\n    .label {\n        border: 1px solid #000;\n    }\n\n    .table {\n        border-collapse: collapse !important;\n\n        td,\n        th {\n            background-color: #fff !important;\n        }\n    }\n    .table-bordered {\n        th,\n        td {\n            border: 1px solid #ddd !important;\n        }\n    }\n\n    // Bootstrap specific changes end\n}\n","//\n// Glyphicons for Bootstrap\n//\n// Since icons are fonts, they can be placed anywhere text is placed and are\n// thus automatically sized to match the surrounding child. To use, create an\n// inline element with the appropriate classes, like so:\n//\n// <a href=\"#\"><span class=\"glyphicon glyphicon-star\"></span> Star</a>\n\n@at-root {\n  // Import the fonts\n  @font-face {\n    font-family: 'Glyphicons Halflings';\n    src: url(if($bootstrap-sass-asset-helper, twbs-font-path('#{$icon-font-path}#{$icon-font-name}.eot'), '#{$icon-font-path}#{$icon-font-name}.eot'));\n    src: url(if($bootstrap-sass-asset-helper, twbs-font-path('#{$icon-font-path}#{$icon-font-name}.eot?#iefix'), '#{$icon-font-path}#{$icon-font-name}.eot?#iefix')) format('embedded-opentype'),\n         url(if($bootstrap-sass-asset-helper, twbs-font-path('#{$icon-font-path}#{$icon-font-name}.woff2'), '#{$icon-font-path}#{$icon-font-name}.woff2')) format('woff2'),\n         url(if($bootstrap-sass-asset-helper, twbs-font-path('#{$icon-font-path}#{$icon-font-name}.woff'), '#{$icon-font-path}#{$icon-font-name}.woff')) format('woff'),\n         url(if($bootstrap-sass-asset-helper, twbs-font-path('#{$icon-font-path}#{$icon-font-name}.ttf'), '#{$icon-font-path}#{$icon-font-name}.ttf')) format('truetype'),\n         url(if($bootstrap-sass-asset-helper, twbs-font-path('#{$icon-font-path}#{$icon-font-name}.svg##{$icon-font-svg-id}'), '#{$icon-font-path}#{$icon-font-name}.svg##{$icon-font-svg-id}')) format('svg');\n  }\n}\n\n// Catchall baseclass\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n// Individual icons\n.glyphicon-asterisk               { &:before { content: \"\\002a\"; } }\n.glyphicon-plus                   { &:before { content: \"\\002b\"; } }\n.glyphicon-euro,\n.glyphicon-eur                    { &:before { content: \"\\20ac\"; } }\n.glyphicon-minus                  { &:before { content: \"\\2212\"; } }\n.glyphicon-cloud                  { &:before { content: \"\\2601\"; } }\n.glyphicon-envelope               { &:before { content: \"\\2709\"; } }\n.glyphicon-pencil                 { &:before { content: \"\\270f\"; } }\n.glyphicon-glass                  { &:before { content: \"\\e001\"; } }\n.glyphicon-music                  { &:before { content: \"\\e002\"; } }\n.glyphicon-search                 { &:before { content: \"\\e003\"; } }\n.glyphicon-heart                  { &:before { content: \"\\e005\"; } }\n.glyphicon-star                   { &:before { content: \"\\e006\"; } }\n.glyphicon-star-empty             { &:before { content: \"\\e007\"; } }\n.glyphicon-user                   { &:before { content: \"\\e008\"; } }\n.glyphicon-film                   { &:before { content: \"\\e009\"; } }\n.glyphicon-th-large               { &:before { content: \"\\e010\"; } }\n.glyphicon-th                     { &:before { content: \"\\e011\"; } }\n.glyphicon-th-list                { &:before { content: \"\\e012\"; } }\n.glyphicon-ok                     { &:before { content: \"\\e013\"; } }\n.glyphicon-remove                 { &:before { content: \"\\e014\"; } }\n.glyphicon-zoom-in                { &:before { content: \"\\e015\"; } }\n.glyphicon-zoom-out               { &:before { content: \"\\e016\"; } }\n.glyphicon-off                    { &:before { content: \"\\e017\"; } }\n.glyphicon-signal                 { &:before { content: \"\\e018\"; } }\n.glyphicon-cog                    { &:before { content: \"\\e019\"; } }\n.glyphicon-trash                  { &:before { content: \"\\e020\"; } }\n.glyphicon-home                   { &:before { content: \"\\e021\"; } }\n.glyphicon-file                   { &:before { content: \"\\e022\"; } }\n.glyphicon-time                   { &:before { content: \"\\e023\"; } }\n.glyphicon-road                   { &:before { content: \"\\e024\"; } }\n.glyphicon-download-alt           { &:before { content: \"\\e025\"; } }\n.glyphicon-download               { &:before { content: \"\\e026\"; } }\n.glyphicon-upload                 { &:before { content: \"\\e027\"; } }\n.glyphicon-inbox                  { &:before { content: \"\\e028\"; } }\n.glyphicon-play-circle            { &:before { content: \"\\e029\"; } }\n.glyphicon-repeat                 { &:before { content: \"\\e030\"; } }\n.glyphicon-refresh                { &:before { content: \"\\e031\"; } }\n.glyphicon-list-alt               { &:before { content: \"\\e032\"; } }\n.glyphicon-lock                   { &:before { content: \"\\e033\"; } }\n.glyphicon-flag                   { &:before { content: \"\\e034\"; } }\n.glyphicon-headphones             { &:before { content: \"\\e035\"; } }\n.glyphicon-volume-off             { &:before { content: \"\\e036\"; } }\n.glyphicon-volume-down            { &:before { content: \"\\e037\"; } }\n.glyphicon-volume-up              { &:before { content: \"\\e038\"; } }\n.glyphicon-qrcode                 { &:before { content: \"\\e039\"; } }\n.glyphicon-barcode                { &:before { content: \"\\e040\"; } }\n.glyphicon-tag                    { &:before { content: \"\\e041\"; } }\n.glyphicon-tags                   { &:before { content: \"\\e042\"; } }\n.glyphicon-book                   { &:before { content: \"\\e043\"; } }\n.glyphicon-bookmark               { &:before { content: \"\\e044\"; } }\n.glyphicon-print                  { &:before { content: \"\\e045\"; } }\n.glyphicon-camera                 { &:before { content: \"\\e046\"; } }\n.glyphicon-font                   { &:before { content: \"\\e047\"; } }\n.glyphicon-bold                   { &:before { content: \"\\e048\"; } }\n.glyphicon-italic                 { &:before { content: \"\\e049\"; } }\n.glyphicon-text-height            { &:before { content: \"\\e050\"; } }\n.glyphicon-text-width             { &:before { content: \"\\e051\"; } }\n.glyphicon-align-left             { &:before { content: \"\\e052\"; } }\n.glyphicon-align-center           { &:before { content: \"\\e053\"; } }\n.glyphicon-align-right            { &:before { content: \"\\e054\"; } }\n.glyphicon-align-justify          { &:before { content: \"\\e055\"; } }\n.glyphicon-list                   { &:before { content: \"\\e056\"; } }\n.glyphicon-indent-left            { &:before { content: \"\\e057\"; } }\n.glyphicon-indent-right           { &:before { content: \"\\e058\"; } }\n.glyphicon-facetime-video         { &:before { content: \"\\e059\"; } }\n.glyphicon-picture                { &:before { content: \"\\e060\"; } }\n.glyphicon-map-marker             { &:before { content: \"\\e062\"; } }\n.glyphicon-adjust                 { &:before { content: \"\\e063\"; } }\n.glyphicon-tint                   { &:before { content: \"\\e064\"; } }\n.glyphicon-edit                   { &:before { content: \"\\e065\"; } }\n.glyphicon-share                  { &:before { content: \"\\e066\"; } }\n.glyphicon-check                  { &:before { content: \"\\e067\"; } }\n.glyphicon-move                   { &:before { content: \"\\e068\"; } }\n.glyphicon-step-backward          { &:before { content: \"\\e069\"; } }\n.glyphicon-fast-backward          { &:before { content: \"\\e070\"; } }\n.glyphicon-backward               { &:before { content: \"\\e071\"; } }\n.glyphicon-play                   { &:before { content: \"\\e072\"; } }\n.glyphicon-pause                  { &:before { content: \"\\e073\"; } }\n.glyphicon-stop                   { &:before { content: \"\\e074\"; } }\n.glyphicon-forward                { &:before { content: \"\\e075\"; } }\n.glyphicon-fast-forward           { &:before { content: \"\\e076\"; } }\n.glyphicon-step-forward           { &:before { content: \"\\e077\"; } }\n.glyphicon-eject                  { &:before { content: \"\\e078\"; } }\n.glyphicon-chevron-left           { &:before { content: \"\\e079\"; } }\n.glyphicon-chevron-right          { &:before { content: \"\\e080\"; } }\n.glyphicon-plus-sign              { &:before { content: \"\\e081\"; } }\n.glyphicon-minus-sign             { &:before { content: \"\\e082\"; } }\n.glyphicon-remove-sign            { &:before { content: \"\\e083\"; } }\n.glyphicon-ok-sign                { &:before { content: \"\\e084\"; } }\n.glyphicon-question-sign          { &:before { content: \"\\e085\"; } }\n.glyphicon-info-sign              { &:before { content: \"\\e086\"; } }\n.glyphicon-screenshot             { &:before { content: \"\\e087\"; } }\n.glyphicon-remove-circle          { &:before { content: \"\\e088\"; } }\n.glyphicon-ok-circle              { &:before { content: \"\\e089\"; } }\n.glyphicon-ban-circle             { &:before { content: \"\\e090\"; } }\n.glyphicon-arrow-left             { &:before { content: \"\\e091\"; } }\n.glyphicon-arrow-right            { &:before { content: \"\\e092\"; } }\n.glyphicon-arrow-up               { &:before { content: \"\\e093\"; } }\n.glyphicon-arrow-down             { &:before { content: \"\\e094\"; } }\n.glyphicon-share-alt              { &:before { content: \"\\e095\"; } }\n.glyphicon-resize-full            { &:before { content: \"\\e096\"; } }\n.glyphicon-resize-small           { &:before { content: \"\\e097\"; } }\n.glyphicon-exclamation-sign       { &:before { content: \"\\e101\"; } }\n.glyphicon-gift                   { &:before { content: \"\\e102\"; } }\n.glyphicon-leaf                   { &:before { content: \"\\e103\"; } }\n.glyphicon-fire                   { &:before { content: \"\\e104\"; } }\n.glyphicon-eye-open               { &:before { content: \"\\e105\"; } }\n.glyphicon-eye-close              { &:before { content: \"\\e106\"; } }\n.glyphicon-warning-sign           { &:before { content: \"\\e107\"; } }\n.glyphicon-plane                  { &:before { content: \"\\e108\"; } }\n.glyphicon-calendar               { &:before { content: \"\\e109\"; } }\n.glyphicon-random                 { &:before { content: \"\\e110\"; } }\n.glyphicon-comment                { &:before { content: \"\\e111\"; } }\n.glyphicon-magnet                 { &:before { content: \"\\e112\"; } }\n.glyphicon-chevron-up             { &:before { content: \"\\e113\"; } }\n.glyphicon-chevron-down           { &:before { content: \"\\e114\"; } }\n.glyphicon-retweet                { &:before { content: \"\\e115\"; } }\n.glyphicon-shopping-cart          { &:before { content: \"\\e116\"; } }\n.glyphicon-folder-close           { &:before { content: \"\\e117\"; } }\n.glyphicon-folder-open            { &:before { content: \"\\e118\"; } }\n.glyphicon-resize-vertical        { &:before { content: \"\\e119\"; } }\n.glyphicon-resize-horizontal      { &:before { content: \"\\e120\"; } }\n.glyphicon-hdd                    { &:before { content: \"\\e121\"; } }\n.glyphicon-bullhorn               { &:before { content: \"\\e122\"; } }\n.glyphicon-bell                   { &:before { content: \"\\e123\"; } }\n.glyphicon-certificate            { &:before { content: \"\\e124\"; } }\n.glyphicon-thumbs-up              { &:before { content: \"\\e125\"; } }\n.glyphicon-thumbs-down            { &:before { content: \"\\e126\"; } }\n.glyphicon-hand-right             { &:before { content: \"\\e127\"; } }\n.glyphicon-hand-left              { &:before { content: \"\\e128\"; } }\n.glyphicon-hand-up                { &:before { content: \"\\e129\"; } }\n.glyphicon-hand-down              { &:before { content: \"\\e130\"; } }\n.glyphicon-circle-arrow-right     { &:before { content: \"\\e131\"; } }\n.glyphicon-circle-arrow-left      { &:before { content: \"\\e132\"; } }\n.glyphicon-circle-arrow-up        { &:before { content: \"\\e133\"; } }\n.glyphicon-circle-arrow-down      { &:before { content: \"\\e134\"; } }\n.glyphicon-globe                  { &:before { content: \"\\e135\"; } }\n.glyphicon-wrench                 { &:before { content: \"\\e136\"; } }\n.glyphicon-tasks                  { &:before { content: \"\\e137\"; } }\n.glyphicon-filter                 { &:before { content: \"\\e138\"; } }\n.glyphicon-briefcase              { &:before { content: \"\\e139\"; } }\n.glyphicon-fullscreen             { &:before { content: \"\\e140\"; } }\n.glyphicon-dashboard              { &:before { content: \"\\e141\"; } }\n.glyphicon-paperclip              { &:before { content: \"\\e142\"; } }\n.glyphicon-heart-empty            { &:before { content: \"\\e143\"; } }\n.glyphicon-link                   { &:before { content: \"\\e144\"; } }\n.glyphicon-phone                  { &:before { content: \"\\e145\"; } }\n.glyphicon-pushpin                { &:before { content: \"\\e146\"; } }\n.glyphicon-usd                    { &:before { content: \"\\e148\"; } }\n.glyphicon-gbp                    { &:before { content: \"\\e149\"; } }\n.glyphicon-sort                   { &:before { content: \"\\e150\"; } }\n.glyphicon-sort-by-alphabet       { &:before { content: \"\\e151\"; } }\n.glyphicon-sort-by-alphabet-alt   { &:before { content: \"\\e152\"; } }\n.glyphicon-sort-by-order          { &:before { content: \"\\e153\"; } }\n.glyphicon-sort-by-order-alt      { &:before { content: \"\\e154\"; } }\n.glyphicon-sort-by-attributes     { &:before { content: \"\\e155\"; } }\n.glyphicon-sort-by-attributes-alt { &:before { content: \"\\e156\"; } }\n.glyphicon-unchecked              { &:before { content: \"\\e157\"; } }\n.glyphicon-expand                 { &:before { content: \"\\e158\"; } }\n.glyphicon-collapse-down          { &:before { content: \"\\e159\"; } }\n.glyphicon-collapse-up            { &:before { content: \"\\e160\"; } }\n.glyphicon-log-in                 { &:before { content: \"\\e161\"; } }\n.glyphicon-flash                  { &:before { content: \"\\e162\"; } }\n.glyphicon-log-out                { &:before { content: \"\\e163\"; } }\n.glyphicon-new-window             { &:before { content: \"\\e164\"; } }\n.glyphicon-record                 { &:before { content: \"\\e165\"; } }\n.glyphicon-save                   { &:before { content: \"\\e166\"; } }\n.glyphicon-open                   { &:before { content: \"\\e167\"; } }\n.glyphicon-saved                  { &:before { content: \"\\e168\"; } }\n.glyphicon-import                 { &:before { content: \"\\e169\"; } }\n.glyphicon-export                 { &:before { content: \"\\e170\"; } }\n.glyphicon-send                   { &:before { content: \"\\e171\"; } }\n.glyphicon-floppy-disk            { &:before { content: \"\\e172\"; } }\n.glyphicon-floppy-saved           { &:before { content: \"\\e173\"; } }\n.glyphicon-floppy-remove          { &:before { content: \"\\e174\"; } }\n.glyphicon-floppy-save            { &:before { content: \"\\e175\"; } }\n.glyphicon-floppy-open            { &:before { content: \"\\e176\"; } }\n.glyphicon-credit-card            { &:before { content: \"\\e177\"; } }\n.glyphicon-transfer               { &:before { content: \"\\e178\"; } }\n.glyphicon-cutlery                { &:before { content: \"\\e179\"; } }\n.glyphicon-header                 { &:before { content: \"\\e180\"; } }\n.glyphicon-compressed             { &:before { content: \"\\e181\"; } }\n.glyphicon-earphone               { &:before { content: \"\\e182\"; } }\n.glyphicon-phone-alt              { &:before { content: \"\\e183\"; } }\n.glyphicon-tower                  { &:before { content: \"\\e184\"; } }\n.glyphicon-stats                  { &:before { content: \"\\e185\"; } }\n.glyphicon-sd-video               { &:before { content: \"\\e186\"; } }\n.glyphicon-hd-video               { &:before { content: \"\\e187\"; } }\n.glyphicon-subtitles              { &:before { content: \"\\e188\"; } }\n.glyphicon-sound-stereo           { &:before { content: \"\\e189\"; } }\n.glyphicon-sound-dolby            { &:before { content: \"\\e190\"; } }\n.glyphicon-sound-5-1              { &:before { content: \"\\e191\"; } }\n.glyphicon-sound-6-1              { &:before { content: \"\\e192\"; } }\n.glyphicon-sound-7-1              { &:before { content: \"\\e193\"; } }\n.glyphicon-copyright-mark         { &:before { content: \"\\e194\"; } }\n.glyphicon-registration-mark      { &:before { content: \"\\e195\"; } }\n.glyphicon-cloud-download         { &:before { content: \"\\e197\"; } }\n.glyphicon-cloud-upload           { &:before { content: \"\\e198\"; } }\n.glyphicon-tree-conifer           { &:before { content: \"\\e199\"; } }\n.glyphicon-tree-deciduous         { &:before { content: \"\\e200\"; } }\n.glyphicon-cd                     { &:before { content: \"\\e201\"; } }\n.glyphicon-save-file              { &:before { content: \"\\e202\"; } }\n.glyphicon-open-file              { &:before { content: \"\\e203\"; } }\n.glyphicon-level-up               { &:before { content: \"\\e204\"; } }\n.glyphicon-copy                   { &:before { content: \"\\e205\"; } }\n.glyphicon-paste                  { &:before { content: \"\\e206\"; } }\n// The following 2 Glyphicons are omitted for the time being because\n// they currently use Unicode codepoints that are outside the\n// Basic Multilingual Plane (BMP). Older buggy versions of WebKit can't handle\n// non-BMP codepoints in CSS string escapes, and thus can't display these two icons.\n// Notably, the bug affects some older versions of the Android Browser.\n// More info: https://github.com/twbs/bootstrap/issues/10106\n// .glyphicon-door                   { &:before { content: \"\\1f6aa\"; } }\n// .glyphicon-key                    { &:before { content: \"\\1f511\"; } }\n.glyphicon-alert                  { &:before { content: \"\\e209\"; } }\n.glyphicon-equalizer              { &:before { content: \"\\e210\"; } }\n.glyphicon-king                   { &:before { content: \"\\e211\"; } }\n.glyphicon-queen                  { &:before { content: \"\\e212\"; } }\n.glyphicon-pawn                   { &:before { content: \"\\e213\"; } }\n.glyphicon-bishop                 { &:before { content: \"\\e214\"; } }\n.glyphicon-knight                 { &:before { content: \"\\e215\"; } }\n.glyphicon-baby-formula           { &:before { content: \"\\e216\"; } }\n.glyphicon-tent                   { &:before { content: \"\\26fa\"; } }\n.glyphicon-blackboard             { &:before { content: \"\\e218\"; } }\n.glyphicon-bed                    { &:before { content: \"\\e219\"; } }\n.glyphicon-apple                  { &:before { content: \"\\f8ff\"; } }\n.glyphicon-erase                  { &:before { content: \"\\e221\"; } }\n.glyphicon-hourglass              { &:before { content: \"\\231b\"; } }\n.glyphicon-lamp                   { &:before { content: \"\\e223\"; } }\n.glyphicon-duplicate              { &:before { content: \"\\e224\"; } }\n.glyphicon-piggy-bank             { &:before { content: \"\\e225\"; } }\n.glyphicon-scissors               { &:before { content: \"\\e226\"; } }\n.glyphicon-bitcoin                { &:before { content: \"\\e227\"; } }\n.glyphicon-btc                    { &:before { content: \"\\e227\"; } }\n.glyphicon-xbt                    { &:before { content: \"\\e227\"; } }\n.glyphicon-yen                    { &:before { content: \"\\00a5\"; } }\n.glyphicon-jpy                    { &:before { content: \"\\00a5\"; } }\n.glyphicon-ruble                  { &:before { content: \"\\20bd\"; } }\n.glyphicon-rub                    { &:before { content: \"\\20bd\"; } }\n.glyphicon-scale                  { &:before { content: \"\\e230\"; } }\n.glyphicon-ice-lolly              { &:before { content: \"\\e231\"; } }\n.glyphicon-ice-lolly-tasted       { &:before { content: \"\\e232\"; } }\n.glyphicon-education              { &:before { content: \"\\e233\"; } }\n.glyphicon-option-horizontal      { &:before { content: \"\\e234\"; } }\n.glyphicon-option-vertical        { &:before { content: \"\\e235\"; } }\n.glyphicon-menu-hamburger         { &:before { content: \"\\e236\"; } }\n.glyphicon-modal-window           { &:before { content: \"\\e237\"; } }\n.glyphicon-oil                    { &:before { content: \"\\e238\"; } }\n.glyphicon-grain                  { &:before { content: \"\\e239\"; } }\n.glyphicon-sunglasses             { &:before { content: \"\\e240\"; } }\n.glyphicon-text-size              { &:before { content: \"\\e241\"; } }\n.glyphicon-text-color             { &:before { content: \"\\e242\"; } }\n.glyphicon-text-background        { &:before { content: \"\\e243\"; } }\n.glyphicon-object-align-top       { &:before { content: \"\\e244\"; } }\n.glyphicon-object-align-bottom    { &:before { content: \"\\e245\"; } }\n.glyphicon-object-align-horizontal{ &:before { content: \"\\e246\"; } }\n.glyphicon-object-align-left      { &:before { content: \"\\e247\"; } }\n.glyphicon-object-align-vertical  { &:before { content: \"\\e248\"; } }\n.glyphicon-object-align-right     { &:before { content: \"\\e249\"; } }\n.glyphicon-triangle-right         { &:before { content: \"\\e250\"; } }\n.glyphicon-triangle-left          { &:before { content: \"\\e251\"; } }\n.glyphicon-triangle-bottom        { &:before { content: \"\\e252\"; } }\n.glyphicon-triangle-top           { &:before { content: \"\\e253\"; } }\n.glyphicon-console                { &:before { content: \"\\e254\"; } }\n.glyphicon-superscript            { &:before { content: \"\\e255\"; } }\n.glyphicon-subscript              { &:before { content: \"\\e256\"; } }\n.glyphicon-menu-left              { &:before { content: \"\\e257\"; } }\n.glyphicon-menu-right             { &:before { content: \"\\e258\"; } }\n.glyphicon-menu-down              { &:before { content: \"\\e259\"; } }\n.glyphicon-menu-up                { &:before { content: \"\\e260\"; } }\n","//\n// Scaffolding\n// --------------------------------------------------\n\n\n// Reset the box-sizing\n//\n// Heads up! This reset may cause conflicts with some third-party widgets.\n// For recommendations on resolving such conflicts, see\n// http://getbootstrap.com/getting-started/#third-box-sizing\n* {\n  @include box-sizing(border-box);\n}\n*:before,\n*:after {\n  @include box-sizing(border-box);\n}\n\n\n// Body reset\n\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n\nbody {\n  font-family: $font-family-base;\n  font-size: $font-size-base;\n  line-height: $line-height-base;\n  color: $text-color;\n  background-color: $body-bg;\n}\n\n// Reset fonts for relevant elements\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n\n// Links\n\na {\n  color: $link-color;\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    color: $link-hover-color;\n    text-decoration: $link-hover-decoration;\n  }\n\n  &:focus {\n    @include tab-focus;\n  }\n}\n\n\n// Figures\n//\n// We reset this here because previously Normalize had no `figure` margins. This\n// ensures we don't break anyone's use of the element.\n\nfigure {\n  margin: 0;\n}\n\n\n// Images\n\nimg {\n  vertical-align: middle;\n}\n\n// Responsive images (ensure images don't scale beyond their parents)\n.img-responsive {\n  @include img-responsive;\n}\n\n// Rounded corners\n.img-rounded {\n  border-radius: $border-radius-large;\n}\n\n// Image thumbnails\n//\n// Heads up! This is mixin-ed into thumbnails.less for `.thumbnail`.\n.img-thumbnail {\n  padding: $thumbnail-padding;\n  line-height: $line-height-base;\n  background-color: $thumbnail-bg;\n  border: 1px solid $thumbnail-border;\n  border-radius: $thumbnail-border-radius;\n  @include transition(all .2s ease-in-out);\n\n  // Keep them at most 100% wide\n  @include img-responsive(inline-block);\n}\n\n// Perfect circle\n.img-circle {\n  border-radius: 50%; // set radius in percents\n}\n\n\n// Horizontal rules\n\nhr {\n  margin-top:    $line-height-computed;\n  margin-bottom: $line-height-computed;\n  border: 0;\n  border-top: 1px solid $hr-border;\n}\n\n\n// Only display content to screen readers\n//\n// See: http://a11yproject.com/posts/how-to-hide-content\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0,0,0,0);\n  border: 0;\n}\n\n// Use in conjunction with .sr-only to only display content when it's focused.\n// Useful for \"Skip to main content\" links; see http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G1\n// Credit: HTML5 Boilerplate\n\n.sr-only-focusable {\n  &:active,\n  &:focus {\n    position: static;\n    width: auto;\n    height: auto;\n    margin: 0;\n    overflow: visible;\n    clip: auto;\n  }\n}\n\n\n// iOS \"clickable elements\" fix for role=\"button\"\n//\n// Fixes \"clickability\" issue (and more generally, the firing of events such as focus as well)\n// for traditionally non-focusable elements with role=\"button\"\n// see https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile\n\n[role=\"button\"] {\n  cursor: pointer;\n}\n","// Vendor Prefixes\n//\n// All vendor mixins are deprecated as of v3.2.0 due to the introduction of\n// Autoprefixer in our Gruntfile. They have been removed in v4.\n\n// - Animations\n// - Backface visibility\n// - Box shadow\n// - Box sizing\n// - Content columns\n// - Hyphens\n// - Placeholder text\n// - Transformations\n// - Transitions\n// - User Select\n\n\n// Animations\n@mixin animation($animation) {\n  -webkit-animation: $animation;\n       -o-animation: $animation;\n          animation: $animation;\n}\n@mixin animation-name($name) {\n  -webkit-animation-name: $name;\n          animation-name: $name;\n}\n@mixin animation-duration($duration) {\n  -webkit-animation-duration: $duration;\n          animation-duration: $duration;\n}\n@mixin animation-timing-function($timing-function) {\n  -webkit-animation-timing-function: $timing-function;\n          animation-timing-function: $timing-function;\n}\n@mixin animation-delay($delay) {\n  -webkit-animation-delay: $delay;\n          animation-delay: $delay;\n}\n@mixin animation-iteration-count($iteration-count) {\n  -webkit-animation-iteration-count: $iteration-count;\n          animation-iteration-count: $iteration-count;\n}\n@mixin animation-direction($direction) {\n  -webkit-animation-direction: $direction;\n          animation-direction: $direction;\n}\n@mixin animation-fill-mode($fill-mode) {\n  -webkit-animation-fill-mode: $fill-mode;\n          animation-fill-mode: $fill-mode;\n}\n\n// Backface visibility\n// Prevent browsers from flickering when using CSS 3D transforms.\n// Default value is `visible`, but can be changed to `hidden`\n\n@mixin backface-visibility($visibility) {\n  -webkit-backface-visibility: $visibility;\n     -moz-backface-visibility: $visibility;\n          backface-visibility: $visibility;\n}\n\n// Drop shadows\n//\n// Note: Deprecated `.box-shadow()` as of v3.1.0 since all of Bootstrap's\n// supported browsers that have box shadow capabilities now support it.\n\n@mixin box-shadow($shadow...) {\n  -webkit-box-shadow: $shadow; // iOS <4.3 & Android <4.1\n          box-shadow: $shadow;\n}\n\n// Box sizing\n@mixin box-sizing($boxmodel) {\n  -webkit-box-sizing: $boxmodel;\n     -moz-box-sizing: $boxmodel;\n          box-sizing: $boxmodel;\n}\n\n// CSS3 Content Columns\n@mixin content-columns($column-count, $column-gap: $grid-gutter-width) {\n  -webkit-column-count: $column-count;\n     -moz-column-count: $column-count;\n          column-count: $column-count;\n  -webkit-column-gap: $column-gap;\n     -moz-column-gap: $column-gap;\n          column-gap: $column-gap;\n}\n\n// Optional hyphenation\n@mixin hyphens($mode: auto) {\n  word-wrap: break-word;\n  -webkit-hyphens: $mode;\n     -moz-hyphens: $mode;\n      -ms-hyphens: $mode; // IE10+\n       -o-hyphens: $mode;\n          hyphens: $mode;\n}\n\n// Placeholder text\n@mixin placeholder($color: $input-color-placeholder) {\n  // Firefox\n  &::-moz-placeholder {\n    color: $color;\n    opacity: 1; // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526\n  }\n  &:-ms-input-placeholder { color: $color; } // Internet Explorer 10+\n  &::-webkit-input-placeholder  { color: $color; } // Safari and Chrome\n}\n\n// Transformations\n@mixin scale($ratio...) {\n  -webkit-transform: scale($ratio);\n      -ms-transform: scale($ratio); // IE9 only\n       -o-transform: scale($ratio);\n          transform: scale($ratio);\n}\n\n@mixin scaleX($ratio) {\n  -webkit-transform: scaleX($ratio);\n      -ms-transform: scaleX($ratio); // IE9 only\n       -o-transform: scaleX($ratio);\n          transform: scaleX($ratio);\n}\n@mixin scaleY($ratio) {\n  -webkit-transform: scaleY($ratio);\n      -ms-transform: scaleY($ratio); // IE9 only\n       -o-transform: scaleY($ratio);\n          transform: scaleY($ratio);\n}\n@mixin skew($x, $y) {\n  -webkit-transform: skewX($x) skewY($y);\n      -ms-transform: skewX($x) skewY($y); // See https://github.com/twbs/bootstrap/issues/4885; IE9+\n       -o-transform: skewX($x) skewY($y);\n          transform: skewX($x) skewY($y);\n}\n@mixin translate($x, $y) {\n  -webkit-transform: translate($x, $y);\n      -ms-transform: translate($x, $y); // IE9 only\n       -o-transform: translate($x, $y);\n          transform: translate($x, $y);\n}\n@mixin translate3d($x, $y, $z) {\n  -webkit-transform: translate3d($x, $y, $z);\n          transform: translate3d($x, $y, $z);\n}\n@mixin rotate($degrees) {\n  -webkit-transform: rotate($degrees);\n      -ms-transform: rotate($degrees); // IE9 only\n       -o-transform: rotate($degrees);\n          transform: rotate($degrees);\n}\n@mixin rotateX($degrees) {\n  -webkit-transform: rotateX($degrees);\n      -ms-transform: rotateX($degrees); // IE9 only\n       -o-transform: rotateX($degrees);\n          transform: rotateX($degrees);\n}\n@mixin rotateY($degrees) {\n  -webkit-transform: rotateY($degrees);\n      -ms-transform: rotateY($degrees); // IE9 only\n       -o-transform: rotateY($degrees);\n          transform: rotateY($degrees);\n}\n@mixin perspective($perspective) {\n  -webkit-perspective: $perspective;\n     -moz-perspective: $perspective;\n          perspective: $perspective;\n}\n@mixin perspective-origin($perspective) {\n  -webkit-perspective-origin: $perspective;\n     -moz-perspective-origin: $perspective;\n          perspective-origin: $perspective;\n}\n@mixin transform-origin($origin) {\n  -webkit-transform-origin: $origin;\n     -moz-transform-origin: $origin;\n      -ms-transform-origin: $origin; // IE9 only\n          transform-origin: $origin;\n}\n\n\n// Transitions\n\n@mixin transition($transition...) {\n  -webkit-transition: $transition;\n       -o-transition: $transition;\n          transition: $transition;\n}\n@mixin transition-property($transition-property...) {\n  -webkit-transition-property: $transition-property;\n          transition-property: $transition-property;\n}\n@mixin transition-delay($transition-delay) {\n  -webkit-transition-delay: $transition-delay;\n          transition-delay: $transition-delay;\n}\n@mixin transition-duration($transition-duration...) {\n  -webkit-transition-duration: $transition-duration;\n          transition-duration: $transition-duration;\n}\n@mixin transition-timing-function($timing-function) {\n  -webkit-transition-timing-function: $timing-function;\n          transition-timing-function: $timing-function;\n}\n@mixin transition-transform($transition...) {\n  -webkit-transition: -webkit-transform $transition;\n     -moz-transition: -moz-transform $transition;\n       -o-transition: -o-transform $transition;\n          transition: transform $transition;\n}\n\n\n// User select\n// For selecting text on the page\n\n@mixin user-select($select) {\n  -webkit-user-select: $select;\n     -moz-user-select: $select;\n      -ms-user-select: $select; // IE10+\n          user-select: $select;\n}\n","$bootstrap-sass-asset-helper: false !default;\n//\n// Variables\n// --------------------------------------------------\n\n\n//== Colors\n//\n//## Gray and brand colors for use across Bootstrap.\n\n$gray-base:              #000 !default;\n$gray-darker:            lighten($gray-base, 13.5%) !default; // #222\n$gray-dark:              lighten($gray-base, 20%) !default;   // #333\n$gray:                   lighten($gray-base, 33.5%) !default; // #555\n$gray-light:             lighten($gray-base, 46.7%) !default; // #777\n$gray-lighter:           lighten($gray-base, 93.5%) !default; // #eee\n\n$brand-primary:         darken(#428bca, 6.5%) !default; // #337ab7\n$brand-success:         #5cb85c !default;\n$brand-info:            #5bc0de !default;\n$brand-warning:         #f0ad4e !default;\n$brand-danger:          #d9534f !default;\n\n\n//== Scaffolding\n//\n//## Settings for some of the most global styles.\n\n//** Background color for `<body>`.\n$body-bg:               #fff !default;\n//** Global text color on `<body>`.\n$text-color:            $gray-dark !default;\n\n//** Global textual link color.\n$link-color:            $brand-primary !default;\n//** Link hover color set via `darken()` function.\n$link-hover-color:      darken($link-color, 15%) !default;\n//** Link hover decoration.\n$link-hover-decoration: underline !default;\n\n\n//== Typography\n//\n//## Font, line-height, and color for body text, headings, and more.\n\n$font-family-sans-serif:  \"Helvetica Neue\", Helvetica, Arial, sans-serif !default;\n$font-family-serif:       Georgia, \"Times New Roman\", Times, serif !default;\n//** Default monospace fonts for `<code>`, `<kbd>`, and `<pre>`.\n$font-family-monospace:   Menlo, Monaco, Consolas, \"Courier New\", monospace !default;\n$font-family-base:        $font-family-sans-serif !default;\n\n$font-size-base:          14px !default;\n$font-size-large:         ceil(($font-size-base * 1.25)) !default; // ~18px\n$font-size-small:         ceil(($font-size-base * 0.85)) !default; // ~12px\n\n$font-size-h1:            floor(($font-size-base * 2.6)) !default; // ~36px\n$font-size-h2:            floor(($font-size-base * 2.15)) !default; // ~30px\n$font-size-h3:            ceil(($font-size-base * 1.7)) !default; // ~24px\n$font-size-h4:            ceil(($font-size-base * 1.25)) !default; // ~18px\n$font-size-h5:            $font-size-base !default;\n$font-size-h6:            ceil(($font-size-base * 0.85)) !default; // ~12px\n\n//** Unit-less `line-height` for use in components like buttons.\n$line-height-base:        1.428571429 !default; // 20/14\n//** Computed \"line-height\" (`font-size` * `line-height`) for use with `margin`, `padding`, etc.\n$line-height-computed:    floor(($font-size-base * $line-height-base)) !default; // ~20px\n\n//** By default, this inherits from the `<body>`.\n$headings-font-family:    inherit !default;\n$headings-font-weight:    500 !default;\n$headings-line-height:    1.1 !default;\n$headings-color:          inherit !default;\n\n\n//== Iconography\n//\n//## Specify custom location and filename of the included Glyphicons icon font. Useful for those including Bootstrap via Bower.\n\n//** Load fonts from this directory.\n\n// [converter] If $bootstrap-sass-asset-helper if used, provide path relative to the assets load path.\n// [converter] This is because some asset helpers, such as Sprockets, do not work with file-relative paths.\n$icon-font-path: if($bootstrap-sass-asset-helper, \"bootstrap/\", \"../fonts/bootstrap/\") !default;\n\n//** File name for all font files.\n$icon-font-name:          \"glyphicons-halflings-regular\" !default;\n//** Element ID within SVG icon file.\n$icon-font-svg-id:        \"glyphicons_halflingsregular\" !default;\n\n\n//== Components\n//\n//## Define common padding and border radius sizes and more. Values based on 14px text and 1.428 line-height (~20px to start).\n\n$padding-base-vertical:     6px !default;\n$padding-base-horizontal:   12px !default;\n\n$padding-large-vertical:    10px !default;\n$padding-large-horizontal:  16px !default;\n\n$padding-small-vertical:    5px !default;\n$padding-small-horizontal:  10px !default;\n\n$padding-xs-vertical:       1px !default;\n$padding-xs-horizontal:     5px !default;\n\n$line-height-large:         1.3333333 !default; // extra decimals for Win 8.1 Chrome\n$line-height-small:         1.5 !default;\n\n$border-radius-base:        4px !default;\n$border-radius-large:       6px !default;\n$border-radius-small:       3px !default;\n\n//** Global color for active items (e.g., navs or dropdowns).\n$component-active-color:    #fff !default;\n//** Global background color for active items (e.g., navs or dropdowns).\n$component-active-bg:       $brand-primary !default;\n\n//** Width of the `border` for generating carets that indicate dropdowns.\n$caret-width-base:          4px !default;\n//** Carets increase slightly in size for larger components.\n$caret-width-large:         5px !default;\n\n\n//== Tables\n//\n//## Customizes the `.table` component with basic values, each used across all table variations.\n\n//** Padding for `<th>`s and `<td>`s.\n$table-cell-padding:            8px !default;\n//** Padding for cells in `.table-condensed`.\n$table-condensed-cell-padding:  5px !default;\n\n//** Default background color used for all tables.\n$table-bg:                      transparent !default;\n//** Background color used for `.table-striped`.\n$table-bg-accent:               #f9f9f9 !default;\n//** Background color used for `.table-hover`.\n$table-bg-hover:                #f5f5f5 !default;\n$table-bg-active:               $table-bg-hover !default;\n\n//** Border color for table and cell borders.\n$table-border-color:            #ddd !default;\n\n\n//== Buttons\n//\n//## For each of Bootstrap's buttons, define text, background and border color.\n\n$btn-font-weight:                normal !default;\n\n$btn-default-color:              #333 !default;\n$btn-default-bg:                 #fff !default;\n$btn-default-border:             #ccc !default;\n\n$btn-primary-color:              #fff !default;\n$btn-primary-bg:                 $brand-primary !default;\n$btn-primary-border:             darken($btn-primary-bg, 5%) !default;\n\n$btn-success-color:              #fff !default;\n$btn-success-bg:                 $brand-success !default;\n$btn-success-border:             darken($btn-success-bg, 5%) !default;\n\n$btn-info-color:                 #fff !default;\n$btn-info-bg:                    $brand-info !default;\n$btn-info-border:                darken($btn-info-bg, 5%) !default;\n\n$btn-warning-color:              #fff !default;\n$btn-warning-bg:                 $brand-warning !default;\n$btn-warning-border:             darken($btn-warning-bg, 5%) !default;\n\n$btn-danger-color:               #fff !default;\n$btn-danger-bg:                  $brand-danger !default;\n$btn-danger-border:              darken($btn-danger-bg, 5%) !default;\n\n$btn-link-disabled-color:        $gray-light !default;\n\n// Allows for customizing button radius independently from global border radius\n$btn-border-radius-base:         $border-radius-base !default;\n$btn-border-radius-large:        $border-radius-large !default;\n$btn-border-radius-small:        $border-radius-small !default;\n\n\n//== Forms\n//\n//##\n\n//** `<input>` background color\n$input-bg:                       #fff !default;\n//** `<input disabled>` background color\n$input-bg-disabled:              $gray-lighter !default;\n\n//** Text color for `<input>`s\n$input-color:                    $gray !default;\n//** `<input>` border color\n$input-border:                   #ccc !default;\n\n// TODO: Rename `$input-border-radius` to `$input-border-radius-base` in v4\n//** Default `.form-control` border radius\n// This has no effect on `<select>`s in some browsers, due to the limited stylability of `<select>`s in CSS.\n$input-border-radius:            $border-radius-base !default;\n//** Large `.form-control` border radius\n$input-border-radius-large:      $border-radius-large !default;\n//** Small `.form-control` border radius\n$input-border-radius-small:      $border-radius-small !default;\n\n//** Border color for inputs on focus\n$input-border-focus:             #66afe9 !default;\n\n//** Placeholder text color\n$input-color-placeholder:        #999 !default;\n\n//** Default `.form-control` height\n$input-height-base:              ($line-height-computed + ($padding-base-vertical * 2) + 2) !default;\n//** Large `.form-control` height\n$input-height-large:             (ceil($font-size-large * $line-height-large) + ($padding-large-vertical * 2) + 2) !default;\n//** Small `.form-control` height\n$input-height-small:             (floor($font-size-small * $line-height-small) + ($padding-small-vertical * 2) + 2) !default;\n\n//** `.form-group` margin\n$form-group-margin-bottom:       15px !default;\n\n$legend-color:                   $gray-dark !default;\n$legend-border-color:            #e5e5e5 !default;\n\n//** Background color for textual input addons\n$input-group-addon-bg:           $gray-lighter !default;\n//** Border color for textual input addons\n$input-group-addon-border-color: $input-border !default;\n\n//** Disabled cursor for form controls and buttons.\n$cursor-disabled:                not-allowed !default;\n\n\n//== Dropdowns\n//\n//## Dropdown menu container and contents.\n\n//** Background for the dropdown menu.\n$dropdown-bg:                    #fff !default;\n//** Dropdown menu `border-color`.\n$dropdown-border:                rgba(0,0,0,.15) !default;\n//** Dropdown menu `border-color` **for IE8**.\n$dropdown-fallback-border:       #ccc !default;\n//** Divider color for between dropdown items.\n$dropdown-divider-bg:            #e5e5e5 !default;\n\n//** Dropdown link text color.\n$dropdown-link-color:            $gray-dark !default;\n//** Hover color for dropdown links.\n$dropdown-link-hover-color:      darken($gray-dark, 5%) !default;\n//** Hover background for dropdown links.\n$dropdown-link-hover-bg:         #f5f5f5 !default;\n\n//** Active dropdown menu item text color.\n$dropdown-link-active-color:     $component-active-color !default;\n//** Active dropdown menu item background color.\n$dropdown-link-active-bg:        $component-active-bg !default;\n\n//** Disabled dropdown menu item background color.\n$dropdown-link-disabled-color:   $gray-light !default;\n\n//** Text color for headers within dropdown menus.\n$dropdown-header-color:          $gray-light !default;\n\n//** Deprecated `$dropdown-caret-color` as of v3.1.0\n$dropdown-caret-color:           #000 !default;\n\n\n//-- Z-index master list\n//\n// Warning: Avoid customizing these values. They're used for a bird's eye view\n// of components dependent on the z-axis and are designed to all work together.\n//\n// Note: These variables are not generated into the Customizer.\n\n$zindex-navbar:            1000 !default;\n$zindex-dropdown:          1000 !default;\n$zindex-popover:           1060 !default;\n$zindex-tooltip:           1070 !default;\n$zindex-navbar-fixed:      1030 !default;\n$zindex-modal-background:  1040 !default;\n$zindex-modal:             1050 !default;\n\n\n//== Media queries breakpoints\n//\n//## Define the breakpoints at which your layout will change, adapting to different screen sizes.\n\n// Extra small screen / phone\n//** Deprecated `$screen-xs` as of v3.0.1\n$screen-xs:                  480px !default;\n//** Deprecated `$screen-xs-min` as of v3.2.0\n$screen-xs-min:              $screen-xs !default;\n//** Deprecated `$screen-phone` as of v3.0.1\n$screen-phone:               $screen-xs-min !default;\n\n// Small screen / tablet\n//** Deprecated `$screen-sm` as of v3.0.1\n$screen-sm:                  768px !default;\n$screen-sm-min:              $screen-sm !default;\n//** Deprecated `$screen-tablet` as of v3.0.1\n$screen-tablet:              $screen-sm-min !default;\n\n// Medium screen / desktop\n//** Deprecated `$screen-md` as of v3.0.1\n$screen-md:                  992px !default;\n$screen-md-min:              $screen-md !default;\n//** Deprecated `$screen-desktop` as of v3.0.1\n$screen-desktop:             $screen-md-min !default;\n\n// Large screen / wide desktop\n//** Deprecated `$screen-lg` as of v3.0.1\n$screen-lg:                  1200px !default;\n$screen-lg-min:              $screen-lg !default;\n//** Deprecated `$screen-lg-desktop` as of v3.0.1\n$screen-lg-desktop:          $screen-lg-min !default;\n\n// So media queries don't overlap when required, provide a maximum\n$screen-xs-max:              ($screen-sm-min - 1) !default;\n$screen-sm-max:              ($screen-md-min - 1) !default;\n$screen-md-max:              ($screen-lg-min - 1) !default;\n\n\n//== Grid system\n//\n//## Define your custom responsive grid.\n\n//** Number of columns in the grid.\n$grid-columns:              12 !default;\n//** Padding between columns. Gets divided in half for the left and right.\n$grid-gutter-width:         30px !default;\n// Navbar collapse\n//** Point at which the navbar becomes uncollapsed.\n$grid-float-breakpoint:     $screen-sm-min !default;\n//** Point at which the navbar begins collapsing.\n$grid-float-breakpoint-max: ($grid-float-breakpoint - 1) !default;\n\n\n//== Container sizes\n//\n//## Define the maximum width of `.container` for different screen sizes.\n\n// Small screen / tablet\n$container-tablet:             (720px + $grid-gutter-width) !default;\n//** For `$screen-sm-min` and up.\n$container-sm:                 $container-tablet !default;\n\n// Medium screen / desktop\n$container-desktop:            (940px + $grid-gutter-width) !default;\n//** For `$screen-md-min` and up.\n$container-md:                 $container-desktop !default;\n\n// Large screen / wide desktop\n$container-large-desktop:      (1140px + $grid-gutter-width) !default;\n//** For `$screen-lg-min` and up.\n$container-lg:                 $container-large-desktop !default;\n\n\n//== Navbar\n//\n//##\n\n// Basics of a navbar\n$navbar-height:                    50px !default;\n$navbar-margin-bottom:             $line-height-computed !default;\n$navbar-border-radius:             $border-radius-base !default;\n$navbar-padding-horizontal:        floor(($grid-gutter-width / 2)) !default;\n$navbar-padding-vertical:          (($navbar-height - $line-height-computed) / 2) !default;\n$navbar-collapse-max-height:       340px !default;\n\n$navbar-default-color:             #777 !default;\n$navbar-default-bg:                #f8f8f8 !default;\n$navbar-default-border:            darken($navbar-default-bg, 6.5%) !default;\n\n// Navbar links\n$navbar-default-link-color:                #777 !default;\n$navbar-default-link-hover-color:          #333 !default;\n$navbar-default-link-hover-bg:             transparent !default;\n$navbar-default-link-active-color:         #555 !default;\n$navbar-default-link-active-bg:            darken($navbar-default-bg, 6.5%) !default;\n$navbar-default-link-disabled-color:       #ccc !default;\n$navbar-default-link-disabled-bg:          transparent !default;\n\n// Navbar brand label\n$navbar-default-brand-color:               $navbar-default-link-color !default;\n$navbar-default-brand-hover-color:         darken($navbar-default-brand-color, 10%) !default;\n$navbar-default-brand-hover-bg:            transparent !default;\n\n// Navbar toggle\n$navbar-default-toggle-hover-bg:           #ddd !default;\n$navbar-default-toggle-icon-bar-bg:        #888 !default;\n$navbar-default-toggle-border-color:       #ddd !default;\n\n\n//=== Inverted navbar\n// Reset inverted navbar basics\n$navbar-inverse-color:                      lighten($gray-light, 15%) !default;\n$navbar-inverse-bg:                         #222 !default;\n$navbar-inverse-border:                     darken($navbar-inverse-bg, 10%) !default;\n\n// Inverted navbar links\n$navbar-inverse-link-color:                 lighten($gray-light, 15%) !default;\n$navbar-inverse-link-hover-color:           #fff !default;\n$navbar-inverse-link-hover-bg:              transparent !default;\n$navbar-inverse-link-active-color:          $navbar-inverse-link-hover-color !default;\n$navbar-inverse-link-active-bg:             darken($navbar-inverse-bg, 10%) !default;\n$navbar-inverse-link-disabled-color:        #444 !default;\n$navbar-inverse-link-disabled-bg:           transparent !default;\n\n// Inverted navbar brand label\n$navbar-inverse-brand-color:                $navbar-inverse-link-color !default;\n$navbar-inverse-brand-hover-color:          #fff !default;\n$navbar-inverse-brand-hover-bg:             transparent !default;\n\n// Inverted navbar toggle\n$navbar-inverse-toggle-hover-bg:            #333 !default;\n$navbar-inverse-toggle-icon-bar-bg:         #fff !default;\n$navbar-inverse-toggle-border-color:        #333 !default;\n\n\n//== Navs\n//\n//##\n\n//=== Shared nav styles\n$nav-link-padding:                          10px 15px !default;\n$nav-link-hover-bg:                         $gray-lighter !default;\n\n$nav-disabled-link-color:                   $gray-light !default;\n$nav-disabled-link-hover-color:             $gray-light !default;\n\n//== Tabs\n$nav-tabs-border-color:                     #ddd !default;\n\n$nav-tabs-link-hover-border-color:          $gray-lighter !default;\n\n$nav-tabs-active-link-hover-bg:             $body-bg !default;\n$nav-tabs-active-link-hover-color:          $gray !default;\n$nav-tabs-active-link-hover-border-color:   #ddd !default;\n\n$nav-tabs-justified-link-border-color:            #ddd !default;\n$nav-tabs-justified-active-link-border-color:     $body-bg !default;\n\n//== Pills\n$nav-pills-border-radius:                   $border-radius-base !default;\n$nav-pills-active-link-hover-bg:            $component-active-bg !default;\n$nav-pills-active-link-hover-color:         $component-active-color !default;\n\n\n//== Pagination\n//\n//##\n\n$pagination-color:                     $link-color !default;\n$pagination-bg:                        #fff !default;\n$pagination-border:                    #ddd !default;\n\n$pagination-hover-color:               $link-hover-color !default;\n$pagination-hover-bg:                  $gray-lighter !default;\n$pagination-hover-border:              #ddd !default;\n\n$pagination-active-color:              #fff !default;\n$pagination-active-bg:                 $brand-primary !default;\n$pagination-active-border:             $brand-primary !default;\n\n$pagination-disabled-color:            $gray-light !default;\n$pagination-disabled-bg:               #fff !default;\n$pagination-disabled-border:           #ddd !default;\n\n\n//== Pager\n//\n//##\n\n$pager-bg:                             $pagination-bg !default;\n$pager-border:                         $pagination-border !default;\n$pager-border-radius:                  15px !default;\n\n$pager-hover-bg:                       $pagination-hover-bg !default;\n\n$pager-active-bg:                      $pagination-active-bg !default;\n$pager-active-color:                   $pagination-active-color !default;\n\n$pager-disabled-color:                 $pagination-disabled-color !default;\n\n\n//== Jumbotron\n//\n//##\n\n$jumbotron-padding:              30px !default;\n$jumbotron-color:                inherit !default;\n$jumbotron-bg:                   $gray-lighter !default;\n$jumbotron-heading-color:        inherit !default;\n$jumbotron-font-size:            ceil(($font-size-base * 1.5)) !default;\n$jumbotron-heading-font-size:    ceil(($font-size-base * 4.5)) !default;\n\n\n//== Form states and alerts\n//\n//## Define colors for form feedback states and, by default, alerts.\n\n$state-success-text:             #3c763d !default;\n$state-success-bg:               #dff0d8 !default;\n$state-success-border:           darken(adjust-hue($state-success-bg, -10), 5%) !default;\n\n$state-info-text:                #31708f !default;\n$state-info-bg:                  #d9edf7 !default;\n$state-info-border:              darken(adjust-hue($state-info-bg, -10), 7%) !default;\n\n$state-warning-text:             #8a6d3b !default;\n$state-warning-bg:               #fcf8e3 !default;\n$state-warning-border:           darken(adjust-hue($state-warning-bg, -10), 5%) !default;\n\n$state-danger-text:              #a94442 !default;\n$state-danger-bg:                #f2dede !default;\n$state-danger-border:            darken(adjust-hue($state-danger-bg, -10), 5%) !default;\n\n\n//== Tooltips\n//\n//##\n\n//** Tooltip max width\n$tooltip-max-width:           200px !default;\n//** Tooltip text color\n$tooltip-color:               #fff !default;\n//** Tooltip background color\n$tooltip-bg:                  #000 !default;\n$tooltip-opacity:             .9 !default;\n\n//** Tooltip arrow width\n$tooltip-arrow-width:         5px !default;\n//** Tooltip arrow color\n$tooltip-arrow-color:         $tooltip-bg !default;\n\n\n//== Popovers\n//\n//##\n\n//** Popover body background color\n$popover-bg:                          #fff !default;\n//** Popover maximum width\n$popover-max-width:                   276px !default;\n//** Popover border color\n$popover-border-color:                rgba(0,0,0,.2) !default;\n//** Popover fallback border color\n$popover-fallback-border-color:       #ccc !default;\n\n//** Popover title background color\n$popover-title-bg:                    darken($popover-bg, 3%) !default;\n\n//** Popover arrow width\n$popover-arrow-width:                 10px !default;\n//** Popover arrow color\n$popover-arrow-color:                 $popover-bg !default;\n\n//** Popover outer arrow width\n$popover-arrow-outer-width:           ($popover-arrow-width + 1) !default;\n//** Popover outer arrow color\n$popover-arrow-outer-color:           fade_in($popover-border-color, 0.05) !default;\n//** Popover outer arrow fallback color\n$popover-arrow-outer-fallback-color:  darken($popover-fallback-border-color, 20%) !default;\n\n\n//== Labels\n//\n//##\n\n//** Default label background color\n$label-default-bg:            $gray-light !default;\n//** Primary label background color\n$label-primary-bg:            $brand-primary !default;\n//** Success label background color\n$label-success-bg:            $brand-success !default;\n//** Info label background color\n$label-info-bg:               $brand-info !default;\n//** Warning label background color\n$label-warning-bg:            $brand-warning !default;\n//** Danger label background color\n$label-danger-bg:             $brand-danger !default;\n\n//** Default label text color\n$label-color:                 #fff !default;\n//** Default text color of a linked label\n$label-link-hover-color:      #fff !default;\n\n\n//== Modals\n//\n//##\n\n//** Padding applied to the modal body\n$modal-inner-padding:         15px !default;\n\n//** Padding applied to the modal title\n$modal-title-padding:         15px !default;\n//** Modal title line-height\n$modal-title-line-height:     $line-height-base !default;\n\n//** Background color of modal content area\n$modal-content-bg:                             #fff !default;\n//** Modal content border color\n$modal-content-border-color:                   rgba(0,0,0,.2) !default;\n//** Modal content border color **for IE8**\n$modal-content-fallback-border-color:          #999 !default;\n\n//** Modal backdrop background color\n$modal-backdrop-bg:           #000 !default;\n//** Modal backdrop opacity\n$modal-backdrop-opacity:      .5 !default;\n//** Modal header border color\n$modal-header-border-color:   #e5e5e5 !default;\n//** Modal footer border color\n$modal-footer-border-color:   $modal-header-border-color !default;\n\n$modal-lg:                    900px !default;\n$modal-md:                    600px !default;\n$modal-sm:                    300px !default;\n\n\n//== Alerts\n//\n//## Define alert colors, border radius, and padding.\n\n$alert-padding:               15px !default;\n$alert-border-radius:         $border-radius-base !default;\n$alert-link-font-weight:      bold !default;\n\n$alert-success-bg:            $state-success-bg !default;\n$alert-success-text:          $state-success-text !default;\n$alert-success-border:        $state-success-border !default;\n\n$alert-info-bg:               $state-info-bg !default;\n$alert-info-text:             $state-info-text !default;\n$alert-info-border:           $state-info-border !default;\n\n$alert-warning-bg:            $state-warning-bg !default;\n$alert-warning-text:          $state-warning-text !default;\n$alert-warning-border:        $state-warning-border !default;\n\n$alert-danger-bg:             $state-danger-bg !default;\n$alert-danger-text:           $state-danger-text !default;\n$alert-danger-border:         $state-danger-border !default;\n\n\n//== Progress bars\n//\n//##\n\n//** Background color of the whole progress component\n$progress-bg:                 #f5f5f5 !default;\n//** Progress bar text color\n$progress-bar-color:          #fff !default;\n//** Variable for setting rounded corners on progress bar.\n$progress-border-radius:      $border-radius-base !default;\n\n//** Default progress bar color\n$progress-bar-bg:             $brand-primary !default;\n//** Success progress bar color\n$progress-bar-success-bg:     $brand-success !default;\n//** Warning progress bar color\n$progress-bar-warning-bg:     $brand-warning !default;\n//** Danger progress bar color\n$progress-bar-danger-bg:      $brand-danger !default;\n//** Info progress bar color\n$progress-bar-info-bg:        $brand-info !default;\n\n\n//== List group\n//\n//##\n\n//** Background color on `.list-group-item`\n$list-group-bg:                 #fff !default;\n//** `.list-group-item` border color\n$list-group-border:             #ddd !default;\n//** List group border radius\n$list-group-border-radius:      $border-radius-base !default;\n\n//** Background color of single list items on hover\n$list-group-hover-bg:           #f5f5f5 !default;\n//** Text color of active list items\n$list-group-active-color:       $component-active-color !default;\n//** Background color of active list items\n$list-group-active-bg:          $component-active-bg !default;\n//** Border color of active list elements\n$list-group-active-border:      $list-group-active-bg !default;\n//** Text color for content within active list items\n$list-group-active-text-color:  lighten($list-group-active-bg, 40%) !default;\n\n//** Text color of disabled list items\n$list-group-disabled-color:      $gray-light !default;\n//** Background color of disabled list items\n$list-group-disabled-bg:         $gray-lighter !default;\n//** Text color for content within disabled list items\n$list-group-disabled-text-color: $list-group-disabled-color !default;\n\n$list-group-link-color:         #555 !default;\n$list-group-link-hover-color:   $list-group-link-color !default;\n$list-group-link-heading-color: #333 !default;\n\n\n//== Panels\n//\n//##\n\n$panel-bg:                    #fff !default;\n$panel-body-padding:          15px !default;\n$panel-heading-padding:       10px 15px !default;\n$panel-footer-padding:        $panel-heading-padding !default;\n$panel-border-radius:         $border-radius-base !default;\n\n//** Border color for elements within panels\n$panel-inner-border:          #ddd !default;\n$panel-footer-bg:             #f5f5f5 !default;\n\n$panel-default-text:          $gray-dark !default;\n$panel-default-border:        #ddd !default;\n$panel-default-heading-bg:    #f5f5f5 !default;\n\n$panel-primary-text:          #fff !default;\n$panel-primary-border:        $brand-primary !default;\n$panel-primary-heading-bg:    $brand-primary !default;\n\n$panel-success-text:          $state-success-text !default;\n$panel-success-border:        $state-success-border !default;\n$panel-success-heading-bg:    $state-success-bg !default;\n\n$panel-info-text:             $state-info-text !default;\n$panel-info-border:           $state-info-border !default;\n$panel-info-heading-bg:       $state-info-bg !default;\n\n$panel-warning-text:          $state-warning-text !default;\n$panel-warning-border:        $state-warning-border !default;\n$panel-warning-heading-bg:    $state-warning-bg !default;\n\n$panel-danger-text:           $state-danger-text !default;\n$panel-danger-border:         $state-danger-border !default;\n$panel-danger-heading-bg:     $state-danger-bg !default;\n\n\n//== Thumbnails\n//\n//##\n\n//** Padding around the thumbnail image\n$thumbnail-padding:           4px !default;\n//** Thumbnail background color\n$thumbnail-bg:                $body-bg !default;\n//** Thumbnail border color\n$thumbnail-border:            #ddd !default;\n//** Thumbnail border radius\n$thumbnail-border-radius:     $border-radius-base !default;\n\n//** Custom text color for thumbnail captions\n$thumbnail-caption-color:     $text-color !default;\n//** Padding around the thumbnail caption\n$thumbnail-caption-padding:   9px !default;\n\n\n//== Wells\n//\n//##\n\n$well-bg:                     #f5f5f5 !default;\n$well-border:                 darken($well-bg, 7%) !default;\n\n\n//== Badges\n//\n//##\n\n$badge-color:                 #fff !default;\n//** Linked badge text color on hover\n$badge-link-hover-color:      #fff !default;\n$badge-bg:                    $gray-light !default;\n\n//** Badge text color in active nav link\n$badge-active-color:          $link-color !default;\n//** Badge background color in active nav link\n$badge-active-bg:             #fff !default;\n\n$badge-font-weight:           bold !default;\n$badge-line-height:           1 !default;\n$badge-border-radius:         10px !default;\n\n\n//== Breadcrumbs\n//\n//##\n\n$breadcrumb-padding-vertical:   8px !default;\n$breadcrumb-padding-horizontal: 15px !default;\n//** Breadcrumb background color\n$breadcrumb-bg:                 #f5f5f5 !default;\n//** Breadcrumb text color\n$breadcrumb-color:              #ccc !default;\n//** Text color of current page in the breadcrumb\n$breadcrumb-active-color:       $gray-light !default;\n//** Textual separator for between breadcrumb elements\n$breadcrumb-separator:          \"/\" !default;\n\n\n//== Carousel\n//\n//##\n\n$carousel-text-shadow:                        0 1px 2px rgba(0,0,0,.6) !default;\n\n$carousel-control-color:                      #fff !default;\n$carousel-control-width:                      15% !default;\n$carousel-control-opacity:                    .5 !default;\n$carousel-control-font-size:                  20px !default;\n\n$carousel-indicator-active-bg:                #fff !default;\n$carousel-indicator-border-color:             #fff !default;\n\n$carousel-caption-color:                      #fff !default;\n\n\n//== Close\n//\n//##\n\n$close-font-weight:           bold !default;\n$close-color:                 #000 !default;\n$close-text-shadow:           0 1px 0 #fff !default;\n\n\n//== Code\n//\n//##\n\n$code-color:                  #c7254e !default;\n$code-bg:                     #f9f2f4 !default;\n\n$kbd-color:                   #fff !default;\n$kbd-bg:                      #333 !default;\n\n$pre-bg:                      #f5f5f5 !default;\n$pre-color:                   $gray-dark !default;\n$pre-border-color:            #ccc !default;\n$pre-scrollable-max-height:   340px !default;\n\n\n//== Type\n//\n//##\n\n//** Horizontal offset for forms and lists.\n$component-offset-horizontal: 180px !default;\n//** Text muted color\n$text-muted:                  $gray-light !default;\n//** Abbreviations and acronyms border color\n$abbr-border-color:           $gray-light !default;\n//** Headings small color\n$headings-small-color:        $gray-light !default;\n//** Blockquote small color\n$blockquote-small-color:      $gray-light !default;\n//** Blockquote font size\n$blockquote-font-size:        ($font-size-base * 1.25) !default;\n//** Blockquote border color\n$blockquote-border-color:     $gray-lighter !default;\n//** Page header border color\n$page-header-border-color:    $gray-lighter !default;\n//** Width of horizontal description list titles\n$dl-horizontal-offset:        $component-offset-horizontal !default;\n//** Point at which .dl-horizontal becomes horizontal\n$dl-horizontal-breakpoint:    $grid-float-breakpoint !default;\n//** Horizontal line color.\n$hr-border:                   $gray-lighter !default;\n","// WebKit-style focus\n\n@mixin tab-focus() {\n  // WebKit-specific. Other browsers will keep their default outline style.\n  // (Initially tried to also force default via `outline: initial`,\n  // but that seems to erroneously remove the outline in Firefox altogether.)\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n","// Image Mixins\n// - Responsive image\n// - Retina image\n\n\n// Responsive image\n//\n// Keep images from scaling beyond the width of their parents.\n@mixin img-responsive($display: block) {\n  display: $display;\n  max-width: 100%; // Part 1: Set a maximum relative to the parent\n  height: auto; // Part 2: Scale the height according to the width, otherwise you get stretching\n}\n\n\n// Retina image\n//\n// Short retina mixin for setting background-image and -size. Note that the\n// spelling of `min--moz-device-pixel-ratio` is intentional.\n@mixin img-retina($file-1x, $file-2x, $width-1x, $height-1x) {\n  background-image: url(if($bootstrap-sass-asset-helper, twbs-image-path(\"#{$file-1x}\"), \"#{$file-1x}\"));\n\n  @media\n  only screen and (-webkit-min-device-pixel-ratio: 2),\n  only screen and (   min--moz-device-pixel-ratio: 2),\n  only screen and (     -o-min-device-pixel-ratio: 2/1),\n  only screen and (        min-device-pixel-ratio: 2),\n  only screen and (                min-resolution: 192dpi),\n  only screen and (                min-resolution: 2dppx) {\n    background-image: url(if($bootstrap-sass-asset-helper, twbs-image-path(\"#{$file-2x}\"), \"#{$file-2x}\"));\n    background-size: $width-1x $height-1x;\n  }\n}\n","//\n// Typography\n// --------------------------------------------------\n\n\n// Headings\n// -------------------------\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  font-family: $headings-font-family;\n  font-weight: $headings-font-weight;\n  line-height: $headings-line-height;\n  color: $headings-color;\n\n  small,\n  .small {\n    font-weight: normal;\n    line-height: 1;\n    color: $headings-small-color;\n  }\n}\n\nh1, .h1,\nh2, .h2,\nh3, .h3 {\n  margin-top: $line-height-computed;\n  margin-bottom: ($line-height-computed / 2);\n\n  small,\n  .small {\n    font-size: 65%;\n  }\n}\nh4, .h4,\nh5, .h5,\nh6, .h6 {\n  margin-top: ($line-height-computed / 2);\n  margin-bottom: ($line-height-computed / 2);\n\n  small,\n  .small {\n    font-size: 75%;\n  }\n}\n\nh1, .h1 { font-size: $font-size-h1; }\nh2, .h2 { font-size: $font-size-h2; }\nh3, .h3 { font-size: $font-size-h3; }\nh4, .h4 { font-size: $font-size-h4; }\nh5, .h5 { font-size: $font-size-h5; }\nh6, .h6 { font-size: $font-size-h6; }\n\n\n// Body text\n// -------------------------\n\np {\n  margin: 0 0 ($line-height-computed / 2);\n}\n\n.lead {\n  margin-bottom: $line-height-computed;\n  font-size: floor(($font-size-base * 1.15));\n  font-weight: 300;\n  line-height: 1.4;\n\n  @media (min-width: $screen-sm-min) {\n    font-size: ($font-size-base * 1.5);\n  }\n}\n\n\n// Emphasis & misc\n// -------------------------\n\n// Ex: (12px small font / 14px base font) * 100% = about 85%\nsmall,\n.small {\n  font-size: floor((100% * $font-size-small / $font-size-base));\n}\n\nmark,\n.mark {\n  background-color: $state-warning-bg;\n  padding: .2em;\n}\n\n// Alignment\n.text-left           { text-align: left; }\n.text-right          { text-align: right; }\n.text-center         { text-align: center; }\n.text-justify        { text-align: justify; }\n.text-nowrap         { white-space: nowrap; }\n\n// Transformation\n.text-lowercase      { text-transform: lowercase; }\n.text-uppercase      { text-transform: uppercase; }\n.text-capitalize     { text-transform: capitalize; }\n\n// Contextual colors\n.text-muted {\n  color: $text-muted;\n}\n\n@include text-emphasis-variant('.text-primary', $brand-primary);\n\n@include text-emphasis-variant('.text-success', $state-success-text);\n\n@include text-emphasis-variant('.text-info', $state-info-text);\n\n@include text-emphasis-variant('.text-warning', $state-warning-text);\n\n@include text-emphasis-variant('.text-danger', $state-danger-text);\n\n// Contextual backgrounds\n// For now we'll leave these alongside the text classes until v4 when we can\n// safely shift things around (per SemVer rules).\n.bg-primary {\n  // Given the contrast here, this is the only class to have its color inverted\n  // automatically.\n  color: #fff;\n}\n@include bg-variant('.bg-primary', $brand-primary);\n\n@include bg-variant('.bg-success', $state-success-bg);\n\n@include bg-variant('.bg-info', $state-info-bg);\n\n@include bg-variant('.bg-warning', $state-warning-bg);\n\n@include bg-variant('.bg-danger', $state-danger-bg);\n\n\n// Page header\n// -------------------------\n\n.page-header {\n  padding-bottom: (($line-height-computed / 2) - 1);\n  margin: ($line-height-computed * 2) 0 $line-height-computed;\n  border-bottom: 1px solid $page-header-border-color;\n}\n\n\n// Lists\n// -------------------------\n\n// Unordered and Ordered lists\nul,\nol {\n  margin-top: 0;\n  margin-bottom: ($line-height-computed / 2);\n  ul,\n  ol {\n    margin-bottom: 0;\n  }\n}\n\n// List options\n\n// [converter] extracted from `.list-unstyled` for libsass compatibility\n@mixin list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n// [converter] extracted as `@mixin list-unstyled` for libsass compatibility\n.list-unstyled {\n  @include list-unstyled;\n}\n\n\n// Inline turns list items into inline-block\n.list-inline {\n  @include list-unstyled;\n  margin-left: -5px;\n\n  > li {\n    display: inline-block;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n}\n\n// Description Lists\ndl {\n  margin-top: 0; // Remove browser default\n  margin-bottom: $line-height-computed;\n}\ndt,\ndd {\n  line-height: $line-height-base;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0; // Undo browser default\n}\n\n// Horizontal description lists\n//\n// Defaults to being stacked without any of the below styles applied, until the\n// grid breakpoint is reached (default of ~768px).\n\n.dl-horizontal {\n  dd {\n    @include clearfix; // Clear the floated `dt` if an empty `dd` is present\n  }\n\n  @media (min-width: $dl-horizontal-breakpoint) {\n    dt {\n      float: left;\n      width: ($dl-horizontal-offset - 20);\n      clear: left;\n      text-align: right;\n      @include text-overflow;\n    }\n    dd {\n      margin-left: $dl-horizontal-offset;\n    }\n  }\n}\n\n\n// Misc\n// -------------------------\n\n// Abbreviations and acronyms\nabbr[title],\n// Add data-* attribute to help out our tooltip plugin, per https://github.com/twbs/bootstrap/issues/5257\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted $abbr-border-color;\n}\n.initialism {\n  font-size: 90%;\n  @extend .text-uppercase;\n}\n\n// Blockquotes\nblockquote {\n  padding: ($line-height-computed / 2) $line-height-computed;\n  margin: 0 0 $line-height-computed;\n  font-size: $blockquote-font-size;\n  border-left: 5px solid $blockquote-border-color;\n\n  p,\n  ul,\n  ol {\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  // Note: Deprecated small and .small as of v3.1.0\n  // Context: https://github.com/twbs/bootstrap/issues/11660\n  footer,\n  small,\n  .small {\n    display: block;\n    font-size: 80%; // back to default font-size\n    line-height: $line-height-base;\n    color: $blockquote-small-color;\n\n    &:before {\n      content: '\\2014 \\00A0'; // em dash, nbsp\n    }\n  }\n}\n\n// Opposite alignment of blockquote\n//\n// Heads up: `blockquote.pull-right` has been deprecated as of v3.1.0.\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid $blockquote-border-color;\n  border-left: 0;\n  text-align: right;\n\n  // Account for citation\n  footer,\n  small,\n  .small {\n    &:before { content: ''; }\n    &:after {\n      content: '\\00A0 \\2014'; // nbsp, em dash\n    }\n  }\n}\n\n// Addresses\naddress {\n  margin-bottom: $line-height-computed;\n  font-style: normal;\n  line-height: $line-height-base;\n}\n","// Typography\n\n// [converter] $parent hack\n@mixin text-emphasis-variant($parent, $color) {\n  #{$parent} {\n    color: $color;\n  }\n  a#{$parent}:hover,\n  a#{$parent}:focus {\n    color: darken($color, 10%);\n  }\n}\n","// Contextual backgrounds\n\n// [converter] $parent hack\n@mixin bg-variant($parent, $color) {\n  #{$parent} {\n    background-color: $color;\n  }\n  a#{$parent}:hover,\n  a#{$parent}:focus {\n    background-color: darken($color, 10%);\n  }\n}\n","// Clearfix\n//\n// For modern browsers\n// 1. The space content is one way to avoid an Opera bug when the\n//    contenteditable attribute is included anywhere else in the document.\n//    Otherwise it causes space to appear at the top and bottom of elements\n//    that are clearfixed.\n// 2. The use of `table` rather than `block` is only necessary if using\n//    `:before` to contain the top-margins of child elements.\n//\n// Source: http://nicolasgallagher.com/micro-clearfix-hack/\n\n@mixin clearfix() {\n  &:before,\n  &:after {\n    content: \" \"; // 1\n    display: table; // 2\n  }\n  &:after {\n    clear: both;\n  }\n}\n","// Text overflow\n// Requires inline-block or block for proper styling\n\n@mixin text-overflow() {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n","//\n// Code (inline and block)\n// --------------------------------------------------\n\n\n// Inline and block code styles\ncode,\nkbd,\npre,\nsamp {\n  font-family: $font-family-monospace;\n}\n\n// Inline code\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: $code-color;\n  background-color: $code-bg;\n  border-radius: $border-radius-base;\n}\n\n// User input typically entered via keyboard\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: $kbd-color;\n  background-color: $kbd-bg;\n  border-radius: $border-radius-small;\n  box-shadow: inset 0 -1px 0 rgba(0,0,0,.25);\n\n  kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: bold;\n    box-shadow: none;\n  }\n}\n\n// Blocks of code\npre {\n  display: block;\n  padding: (($line-height-computed - 1) / 2);\n  margin: 0 0 ($line-height-computed / 2);\n  font-size: ($font-size-base - 1); // 14px to 13px\n  line-height: $line-height-base;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: $pre-color;\n  background-color: $pre-bg;\n  border: 1px solid $pre-border-color;\n  border-radius: $border-radius-base;\n\n  // Account for some code outputs that place code tags in pre tags\n  code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    white-space: pre-wrap;\n    background-color: transparent;\n    border-radius: 0;\n  }\n}\n\n// Enable scrollable blocks of code\n.pre-scrollable {\n  max-height: $pre-scrollable-max-height;\n  overflow-y: scroll;\n}\n","//\n// Grid system\n// --------------------------------------------------\n\n\n// Container widths\n//\n// Set the container width, and override it for fixed navbars in media queries.\n\n.container {\n  @include container-fixed;\n\n  @media (min-width: $screen-sm-min) {\n    width: $container-sm;\n  }\n  @media (min-width: $screen-md-min) {\n    width: $container-md;\n  }\n  @media (min-width: $screen-lg-min) {\n    width: $container-lg;\n  }\n}\n\n\n// Fluid container\n//\n// Utilizes the mixin meant for fixed width containers, but without any defined\n// width for fluid, full width layouts.\n\n.container-fluid {\n  @include container-fixed;\n}\n\n\n// Row\n//\n// Rows contain and clear the floats of your columns.\n\n.row {\n  @include make-row;\n}\n\n\n// Columns\n//\n// Common styles for small and large grid columns\n\n@include make-grid-columns;\n\n\n// Extra small grid\n//\n// Columns, offsets, pushes, and pulls for extra small devices like\n// smartphones.\n\n@include make-grid(xs);\n\n\n// Small grid\n//\n// Columns, offsets, pushes, and pulls for the small device range, from phones\n// to tablets.\n\n@media (min-width: $screen-sm-min) {\n  @include make-grid(sm);\n}\n\n\n// Medium grid\n//\n// Columns, offsets, pushes, and pulls for the desktop device range.\n\n@media (min-width: $screen-md-min) {\n  @include make-grid(md);\n}\n\n\n// Large grid\n//\n// Columns, offsets, pushes, and pulls for the large desktop device range.\n\n@media (min-width: $screen-lg-min) {\n  @include make-grid(lg);\n}\n","// Grid system\n//\n// Generate semantic grid columns with these mixins.\n\n// Centered container element\n@mixin container-fixed($gutter: $grid-gutter-width) {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left:  floor(($gutter / 2));\n  padding-right: ceil(($gutter / 2));\n  @include clearfix;\n}\n\n// Creates a wrapper for a series of columns\n@mixin make-row($gutter: $grid-gutter-width) {\n  margin-left:  ceil(($gutter / -2));\n  margin-right: floor(($gutter / -2));\n  @include clearfix;\n}\n\n// Generate the extra small columns\n@mixin make-xs-column($columns, $gutter: $grid-gutter-width) {\n  position: relative;\n  float: left;\n  width: percentage(($columns / $grid-columns));\n  min-height: 1px;\n  padding-left:  ($gutter / 2);\n  padding-right: ($gutter / 2);\n}\n@mixin make-xs-column-offset($columns) {\n  margin-left: percentage(($columns / $grid-columns));\n}\n@mixin make-xs-column-push($columns) {\n  left: percentage(($columns / $grid-columns));\n}\n@mixin make-xs-column-pull($columns) {\n  right: percentage(($columns / $grid-columns));\n}\n\n// Generate the small columns\n@mixin make-sm-column($columns, $gutter: $grid-gutter-width) {\n  position: relative;\n  min-height: 1px;\n  padding-left:  ($gutter / 2);\n  padding-right: ($gutter / 2);\n\n  @media (min-width: $screen-sm-min) {\n    float: left;\n    width: percentage(($columns / $grid-columns));\n  }\n}\n@mixin make-sm-column-offset($columns) {\n  @media (min-width: $screen-sm-min) {\n    margin-left: percentage(($columns / $grid-columns));\n  }\n}\n@mixin make-sm-column-push($columns) {\n  @media (min-width: $screen-sm-min) {\n    left: percentage(($columns / $grid-columns));\n  }\n}\n@mixin make-sm-column-pull($columns) {\n  @media (min-width: $screen-sm-min) {\n    right: percentage(($columns / $grid-columns));\n  }\n}\n\n// Generate the medium columns\n@mixin make-md-column($columns, $gutter: $grid-gutter-width) {\n  position: relative;\n  min-height: 1px;\n  padding-left:  ($gutter / 2);\n  padding-right: ($gutter / 2);\n\n  @media (min-width: $screen-md-min) {\n    float: left;\n    width: percentage(($columns / $grid-columns));\n  }\n}\n@mixin make-md-column-offset($columns) {\n  @media (min-width: $screen-md-min) {\n    margin-left: percentage(($columns / $grid-columns));\n  }\n}\n@mixin make-md-column-push($columns) {\n  @media (min-width: $screen-md-min) {\n    left: percentage(($columns / $grid-columns));\n  }\n}\n@mixin make-md-column-pull($columns) {\n  @media (min-width: $screen-md-min) {\n    right: percentage(($columns / $grid-columns));\n  }\n}\n\n// Generate the large columns\n@mixin make-lg-column($columns, $gutter: $grid-gutter-width) {\n  position: relative;\n  min-height: 1px;\n  padding-left:  ($gutter / 2);\n  padding-right: ($gutter / 2);\n\n  @media (min-width: $screen-lg-min) {\n    float: left;\n    width: percentage(($columns / $grid-columns));\n  }\n}\n@mixin make-lg-column-offset($columns) {\n  @media (min-width: $screen-lg-min) {\n    margin-left: percentage(($columns / $grid-columns));\n  }\n}\n@mixin make-lg-column-push($columns) {\n  @media (min-width: $screen-lg-min) {\n    left: percentage(($columns / $grid-columns));\n  }\n}\n@mixin make-lg-column-pull($columns) {\n  @media (min-width: $screen-lg-min) {\n    right: percentage(($columns / $grid-columns));\n  }\n}\n","// Framework grid generation\n//\n// Used only by Bootstrap to generate the correct number of grid classes given\n// any value of `$grid-columns`.\n\n// [converter] This is defined recursively in LESS, but Sass supports real loops\n@mixin make-grid-columns($i: 1, $list: \".col-xs-#{$i}, .col-sm-#{$i}, .col-md-#{$i}, .col-lg-#{$i}\") {\n  @for $i from (1 + 1) through $grid-columns {\n    $list: \"#{$list}, .col-xs-#{$i}, .col-sm-#{$i}, .col-md-#{$i}, .col-lg-#{$i}\";\n  }\n  #{$list} {\n    position: relative;\n    // Prevent columns from collapsing when empty\n    min-height: 1px;\n    // Inner gutter via padding\n    padding-left:  ceil(($grid-gutter-width / 2));\n    padding-right: floor(($grid-gutter-width / 2));\n  }\n}\n\n\n// [converter] This is defined recursively in LESS, but Sass supports real loops\n@mixin float-grid-columns($class, $i: 1, $list: \".col-#{$class}-#{$i}\") {\n  @for $i from (1 + 1) through $grid-columns {\n    $list: \"#{$list}, .col-#{$class}-#{$i}\";\n  }\n  #{$list} {\n    float: left;\n  }\n}\n\n\n@mixin calc-grid-column($index, $class, $type) {\n  @if ($type == width) and ($index > 0) {\n    .col-#{$class}-#{$index} {\n      width: percentage(($index / $grid-columns));\n    }\n  }\n  @if ($type == push) and ($index > 0) {\n    .col-#{$class}-push-#{$index} {\n      left: percentage(($index / $grid-columns));\n    }\n  }\n  @if ($type == push) and ($index == 0) {\n    .col-#{$class}-push-0 {\n      left: auto;\n    }\n  }\n  @if ($type == pull) and ($index > 0) {\n    .col-#{$class}-pull-#{$index} {\n      right: percentage(($index / $grid-columns));\n    }\n  }\n  @if ($type == pull) and ($index == 0) {\n    .col-#{$class}-pull-0 {\n      right: auto;\n    }\n  }\n  @if ($type == offset) {\n    .col-#{$class}-offset-#{$index} {\n      margin-left: percentage(($index / $grid-columns));\n    }\n  }\n}\n\n// [converter] This is defined recursively in LESS, but Sass supports real loops\n@mixin loop-grid-columns($columns, $class, $type) {\n  @for $i from 0 through $columns {\n    @include calc-grid-column($i, $class, $type);\n  }\n}\n\n\n// Create grid for specific class\n@mixin make-grid($class) {\n  @include float-grid-columns($class);\n  @include loop-grid-columns($grid-columns, $class, width);\n  @include loop-grid-columns($grid-columns, $class, pull);\n  @include loop-grid-columns($grid-columns, $class, push);\n  @include loop-grid-columns($grid-columns, $class, offset);\n}\n","//\n// Tables\n// --------------------------------------------------\n\n\ntable {\n  background-color: $table-bg;\n}\ncaption {\n  padding-top: $table-cell-padding;\n  padding-bottom: $table-cell-padding;\n  color: $text-muted;\n  text-align: left;\n}\nth {\n  text-align: left;\n}\n\n\n// Baseline styles\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: $line-height-computed;\n  // Cells\n  > thead,\n  > tbody,\n  > tfoot {\n    > tr {\n      > th,\n      > td {\n        padding: $table-cell-padding;\n        line-height: $line-height-base;\n        vertical-align: top;\n        border-top: 1px solid $table-border-color;\n      }\n    }\n  }\n  // Bottom align for column headings\n  > thead > tr > th {\n    vertical-align: bottom;\n    border-bottom: 2px solid $table-border-color;\n  }\n  // Remove top border from thead by default\n  > caption + thead,\n  > colgroup + thead,\n  > thead:first-child {\n    > tr:first-child {\n      > th,\n      > td {\n        border-top: 0;\n      }\n    }\n  }\n  // Account for multiple tbody instances\n  > tbody + tbody {\n    border-top: 2px solid $table-border-color;\n  }\n\n  // Nesting\n  .table {\n    background-color: $body-bg;\n  }\n}\n\n\n// Condensed table w/ half padding\n\n.table-condensed {\n  > thead,\n  > tbody,\n  > tfoot {\n    > tr {\n      > th,\n      > td {\n        padding: $table-condensed-cell-padding;\n      }\n    }\n  }\n}\n\n\n// Bordered version\n//\n// Add borders all around the table and between all the columns.\n\n.table-bordered {\n  border: 1px solid $table-border-color;\n  > thead,\n  > tbody,\n  > tfoot {\n    > tr {\n      > th,\n      > td {\n        border: 1px solid $table-border-color;\n      }\n    }\n  }\n  > thead > tr {\n    > th,\n    > td {\n      border-bottom-width: 2px;\n    }\n  }\n}\n\n\n// Zebra-striping\n//\n// Default zebra-stripe styles (alternating gray and transparent backgrounds)\n\n.table-striped {\n  > tbody > tr:nth-of-type(odd) {\n    background-color: $table-bg-accent;\n  }\n}\n\n\n// Hover effect\n//\n// Placed here since it has to come after the potential zebra striping\n\n.table-hover {\n  > tbody > tr:hover {\n    background-color: $table-bg-hover;\n  }\n}\n\n\n// Table cell sizing\n//\n// Reset default table behavior\n\ntable col[class*=\"col-\"] {\n  position: static; // Prevent border hiding in Firefox and IE9-11 (see https://github.com/twbs/bootstrap/issues/11623)\n  float: none;\n  display: table-column;\n}\ntable {\n  td,\n  th {\n    &[class*=\"col-\"] {\n      position: static; // Prevent border hiding in Firefox and IE9-11 (see https://github.com/twbs/bootstrap/issues/11623)\n      float: none;\n      display: table-cell;\n    }\n  }\n}\n\n\n// Table backgrounds\n//\n// Exact selectors below required to override `.table-striped` and prevent\n// inheritance to nested tables.\n\n// Generate the contextual variants\n@include table-row-variant('active', $table-bg-active);\n@include table-row-variant('success', $state-success-bg);\n@include table-row-variant('info', $state-info-bg);\n@include table-row-variant('warning', $state-warning-bg);\n@include table-row-variant('danger', $state-danger-bg);\n\n\n// Responsive tables\n//\n// Wrap your tables in `.table-responsive` and we'll make them mobile friendly\n// by enabling horizontal scrolling. Only applies <768px. Everything above that\n// will display normally.\n\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%; // Workaround for IE9 bug (see https://github.com/twbs/bootstrap/issues/14837)\n\n  @media screen and (max-width: $screen-xs-max) {\n    width: 100%;\n    margin-bottom: ($line-height-computed * 0.75);\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid $table-border-color;\n\n    // Tighten up spacing\n    > .table {\n      margin-bottom: 0;\n\n      // Ensure the content doesn't wrap\n      > thead,\n      > tbody,\n      > tfoot {\n        > tr {\n          > th,\n          > td {\n            white-space: nowrap;\n          }\n        }\n      }\n    }\n\n    // Special overrides for the bordered tables\n    > .table-bordered {\n      border: 0;\n\n      // Nuke the appropriate borders so that the parent can handle them\n      > thead,\n      > tbody,\n      > tfoot {\n        > tr {\n          > th:first-child,\n          > td:first-child {\n            border-left: 0;\n          }\n          > th:last-child,\n          > td:last-child {\n            border-right: 0;\n          }\n        }\n      }\n\n      // Only nuke the last row's bottom-border in `tbody` and `tfoot` since\n      // chances are there will be only one `tr` in a `thead` and that would\n      // remove the border altogether.\n      > tbody,\n      > tfoot {\n        > tr:last-child {\n          > th,\n          > td {\n            border-bottom: 0;\n          }\n        }\n      }\n\n    }\n  }\n}\n","// Tables\n\n@mixin table-row-variant($state, $background) {\n  // Exact selectors below required to override `.table-striped` and prevent\n  // inheritance to nested tables.\n  .table > thead > tr,\n  .table > tbody > tr,\n  .table > tfoot > tr {\n    > td.#{$state},\n    > th.#{$state},\n    &.#{$state} > td,\n    &.#{$state} > th {\n      background-color: $background;\n    }\n  }\n\n  // Hover states for `.table-hover`\n  // Note: this is not available for cells or rows within `thead` or `tfoot`.\n  .table-hover > tbody > tr {\n    > td.#{$state}:hover,\n    > th.#{$state}:hover,\n    &.#{$state}:hover > td,\n    &:hover > .#{$state},\n    &.#{$state}:hover > th {\n      background-color: darken($background, 5%);\n    }\n  }\n}\n","//\n// Forms\n// --------------------------------------------------\n\n\n// Normalize non-controls\n//\n// Restyle and baseline non-control form elements.\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  // Chrome and Firefox set a `min-width: min-content;` on fieldsets,\n  // so we reset that to ensure it behaves more like a standard block element.\n  // See https://github.com/twbs/bootstrap/issues/12359.\n  min-width: 0;\n}\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: $line-height-computed;\n  font-size: ($font-size-base * 1.5);\n  line-height: inherit;\n  color: $legend-color;\n  border: 0;\n  border-bottom: 1px solid $legend-border-color;\n}\n\nlabel {\n  display: inline-block;\n  max-width: 100%; // Force IE8 to wrap long content (see https://github.com/twbs/bootstrap/issues/13141)\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\n\n// Normalize form controls\n//\n// While most of our form styles require extra classes, some basic normalization\n// is required to ensure optimum display with or without those classes to better\n// address browser inconsistencies.\n\n// Override content-box in Normalize (* isn't specific enough)\ninput[type=\"search\"] {\n  @include box-sizing(border-box);\n}\n\n// Position radios and checkboxes better\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9; // IE8-9\n  line-height: normal;\n}\n\ninput[type=\"file\"] {\n  display: block;\n}\n\n// Make range inputs behave like textual form controls\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\n\n// Make multiple select elements height not fixed\nselect[multiple],\nselect[size] {\n  height: auto;\n}\n\n// Focus for file, radio, and checkbox\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  @include tab-focus;\n}\n\n// Adjust output element\noutput {\n  display: block;\n  padding-top: ($padding-base-vertical + 1);\n  font-size: $font-size-base;\n  line-height: $line-height-base;\n  color: $input-color;\n}\n\n\n// Common form controls\n//\n// Shared size and type resets for form controls. Apply `.form-control` to any\n// of the following form controls:\n//\n// select\n// textarea\n// input[type=\"text\"]\n// input[type=\"password\"]\n// input[type=\"datetime\"]\n// input[type=\"datetime-local\"]\n// input[type=\"date\"]\n// input[type=\"month\"]\n// input[type=\"time\"]\n// input[type=\"week\"]\n// input[type=\"number\"]\n// input[type=\"email\"]\n// input[type=\"url\"]\n// input[type=\"search\"]\n// input[type=\"tel\"]\n// input[type=\"color\"]\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: $input-height-base; // Make inputs at least the height of their button counterpart (base line-height + padding + border)\n  padding: $padding-base-vertical $padding-base-horizontal;\n  font-size: $font-size-base;\n  line-height: $line-height-base;\n  color: $input-color;\n  background-color: $input-bg;\n  background-image: none; // Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214\n  border: 1px solid $input-border;\n  border-radius: $input-border-radius; // Note: This has no effect on <select>s in some browsers, due to the limited stylability of <select>s in CSS.\n  @include box-shadow(inset 0 1px 1px rgba(0,0,0,.075));\n  @include transition(border-color ease-in-out .15s, box-shadow ease-in-out .15s);\n\n  // Customize the `:focus` state to imitate native WebKit styles.\n  @include form-control-focus;\n\n  // Placeholder\n  @include placeholder;\n\n  // Unstyle the caret on `<select>`s in IE10+.\n  &::-ms-expand {\n    border: 0;\n    background-color: transparent;\n  }\n\n  // Disabled and read-only inputs\n  //\n  // HTML5 says that controls under a fieldset > legend:first-child won't be\n  // disabled if the fieldset is disabled. Due to implementation difficulty, we\n  // don't honor that edge case; we style them as disabled anyway.\n  &[disabled],\n  &[readonly],\n  fieldset[disabled] & {\n    background-color: $input-bg-disabled;\n    opacity: 1; // iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655\n  }\n\n  &[disabled],\n  fieldset[disabled] & {\n    cursor: $cursor-disabled;\n  }\n\n  // [converter] extracted textarea& to textarea.form-control\n}\n\n// Reset height for `textarea`s\ntextarea.form-control {\n  height: auto;\n}\n\n\n// Search inputs in iOS\n//\n// This overrides the extra rounded corners on search inputs in iOS so that our\n// `.form-control` class can properly style them. Note that this cannot simply\n// be added to `.form-control` as it's not specific enough. For details, see\n// https://github.com/twbs/bootstrap/issues/11586.\n\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n\n\n// Special styles for iOS temporal inputs\n//\n// In Mobile Safari, setting `display: block` on temporal inputs causes the\n// text within the input to become vertically misaligned. As a workaround, we\n// set a pixel line-height that matches the given height of the input, but only\n// for Safari. See https://bugs.webkit.org/show_bug.cgi?id=139848\n//\n// Note that as of 9.3, iOS doesn't support `week`.\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"],\n  input[type=\"time\"],\n  input[type=\"datetime-local\"],\n  input[type=\"month\"] {\n    &.form-control {\n      line-height: $input-height-base;\n    }\n\n    &.input-sm,\n    .input-group-sm & {\n      line-height: $input-height-small;\n    }\n\n    &.input-lg,\n    .input-group-lg & {\n      line-height: $input-height-large;\n    }\n  }\n}\n\n\n// Form groups\n//\n// Designed to help with the organization and spacing of vertical forms. For\n// horizontal forms, use the predefined grid classes.\n\n.form-group {\n  margin-bottom: $form-group-margin-bottom;\n}\n\n\n// Checkboxes and radios\n//\n// Indent the labels to position radios/checkboxes as hanging controls.\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n\n  label {\n    min-height: $line-height-computed; // Ensure the input doesn't jump when there is no text\n    padding-left: 20px;\n    margin-bottom: 0;\n    font-weight: normal;\n    cursor: pointer;\n  }\n}\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9;\n}\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px; // Move up sibling radios or checkboxes for tighter spacing\n}\n\n// Radios and checkboxes on same line\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer;\n}\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px; // space out consecutive inline controls\n}\n\n// Apply same disabled cursor tweak as for inputs\n// Some special care is needed because <label>s don't inherit their parent's `cursor`.\n//\n// Note: Neither radios nor checkboxes can be readonly.\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  &[disabled],\n  &.disabled,\n  fieldset[disabled] & {\n    cursor: $cursor-disabled;\n  }\n}\n// These classes are used directly on <label>s\n.radio-inline,\n.checkbox-inline {\n  &.disabled,\n  fieldset[disabled] & {\n    cursor: $cursor-disabled;\n  }\n}\n// These classes are used on elements with <label> descendants\n.radio,\n.checkbox {\n  &.disabled,\n  fieldset[disabled] & {\n    label {\n      cursor: $cursor-disabled;\n    }\n  }\n}\n\n\n// Static form control text\n//\n// Apply class to a `p` element to make any string of text align with labels in\n// a horizontal form layout.\n\n.form-control-static {\n  // Size it appropriately next to real form controls\n  padding-top: ($padding-base-vertical + 1);\n  padding-bottom: ($padding-base-vertical + 1);\n  // Remove default margin from `p`\n  margin-bottom: 0;\n  min-height: ($line-height-computed + $font-size-base);\n\n  &.input-lg,\n  &.input-sm {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n\n\n// Form control sizing\n//\n// Build on `.form-control` with modifier classes to decrease or increase the\n// height and font-size of form controls.\n//\n// The `.form-group-* form-control` variations are sadly duplicated to avoid the\n// issue documented in https://github.com/twbs/bootstrap/issues/15074.\n\n@include input-size('.input-sm', $input-height-small, $padding-small-vertical, $padding-small-horizontal, $font-size-small, $line-height-small, $input-border-radius-small);\n.form-group-sm {\n  .form-control {\n    height: $input-height-small;\n    padding: $padding-small-vertical $padding-small-horizontal;\n    font-size: $font-size-small;\n    line-height: $line-height-small;\n    border-radius: $input-border-radius-small;\n  }\n  select.form-control {\n    height: $input-height-small;\n    line-height: $input-height-small;\n  }\n  textarea.form-control,\n  select[multiple].form-control {\n    height: auto;\n  }\n  .form-control-static {\n    height: $input-height-small;\n    min-height: ($line-height-computed + $font-size-small);\n    padding: ($padding-small-vertical + 1) $padding-small-horizontal;\n    font-size: $font-size-small;\n    line-height: $line-height-small;\n  }\n}\n\n@include input-size('.input-lg', $input-height-large, $padding-large-vertical, $padding-large-horizontal, $font-size-large, $line-height-large, $input-border-radius-large);\n.form-group-lg {\n  .form-control {\n    height: $input-height-large;\n    padding: $padding-large-vertical $padding-large-horizontal;\n    font-size: $font-size-large;\n    line-height: $line-height-large;\n    border-radius: $input-border-radius-large;\n  }\n  select.form-control {\n    height: $input-height-large;\n    line-height: $input-height-large;\n  }\n  textarea.form-control,\n  select[multiple].form-control {\n    height: auto;\n  }\n  .form-control-static {\n    height: $input-height-large;\n    min-height: ($line-height-computed + $font-size-large);\n    padding: ($padding-large-vertical + 1) $padding-large-horizontal;\n    font-size: $font-size-large;\n    line-height: $line-height-large;\n  }\n}\n\n\n// Form control feedback states\n//\n// Apply contextual and semantic states to individual form controls.\n\n.has-feedback {\n  // Enable absolute positioning\n  position: relative;\n\n  // Ensure icons don't overlap text\n  .form-control {\n    padding-right: ($input-height-base * 1.25);\n  }\n}\n// Feedback icon (requires .glyphicon classes)\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2; // Ensure icon is above input groups\n  display: block;\n  width: $input-height-base;\n  height: $input-height-base;\n  line-height: $input-height-base;\n  text-align: center;\n  pointer-events: none;\n}\n.input-lg + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: $input-height-large;\n  height: $input-height-large;\n  line-height: $input-height-large;\n}\n.input-sm + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: $input-height-small;\n  height: $input-height-small;\n  line-height: $input-height-small;\n}\n\n// Feedback states\n.has-success {\n  @include form-control-validation($state-success-text, $state-success-text, $state-success-bg);\n}\n.has-warning {\n  @include form-control-validation($state-warning-text, $state-warning-text, $state-warning-bg);\n}\n.has-error {\n  @include form-control-validation($state-danger-text, $state-danger-text, $state-danger-bg);\n}\n\n// Reposition feedback icon if input has visible label above\n.has-feedback label {\n\n  & ~ .form-control-feedback {\n    top: ($line-height-computed + 5); // Height of the `label` and its margin\n  }\n  &.sr-only ~ .form-control-feedback {\n    top: 0;\n  }\n}\n\n\n// Help text\n//\n// Apply to any element you wish to create light text for placement immediately\n// below a form control. Use for general help, formatting, or instructional text.\n\n.help-block {\n  display: block; // account for any element using help-block\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: lighten($text-color, 25%); // lighten the text some for contrast\n}\n\n\n// Inline forms\n//\n// Make forms appear inline(-block) by adding the `.form-inline` class. Inline\n// forms begin stacked on extra small (mobile) devices and then go inline when\n// viewports reach <768px.\n//\n// Requires wrapping inputs and labels with `.form-group` for proper display of\n// default HTML form controls and our custom form controls (e.g., input groups).\n//\n// Heads up! This is mixin-ed into `.navbar-form` in navbars.less.\n\n// [converter] extracted from `.form-inline` for libsass compatibility\n@mixin form-inline {\n\n  // Kick in the inline\n  @media (min-width: $screen-sm-min) {\n    // Inline-block all the things for \"inline\"\n    .form-group {\n      display: inline-block;\n      margin-bottom: 0;\n      vertical-align: middle;\n    }\n\n    // In navbar-form, allow folks to *not* use `.form-group`\n    .form-control {\n      display: inline-block;\n      width: auto; // Prevent labels from stacking above inputs in `.form-group`\n      vertical-align: middle;\n    }\n\n    // Make static controls behave like regular ones\n    .form-control-static {\n      display: inline-block;\n    }\n\n    .input-group {\n      display: inline-table;\n      vertical-align: middle;\n\n      .input-group-addon,\n      .input-group-btn,\n      .form-control {\n        width: auto;\n      }\n    }\n\n    // Input groups need that 100% width though\n    .input-group > .form-control {\n      width: 100%;\n    }\n\n    .control-label {\n      margin-bottom: 0;\n      vertical-align: middle;\n    }\n\n    // Remove default margin on radios/checkboxes that were used for stacking, and\n    // then undo the floating of radios and checkboxes to match.\n    .radio,\n    .checkbox {\n      display: inline-block;\n      margin-top: 0;\n      margin-bottom: 0;\n      vertical-align: middle;\n\n      label {\n        padding-left: 0;\n      }\n    }\n    .radio input[type=\"radio\"],\n    .checkbox input[type=\"checkbox\"] {\n      position: relative;\n      margin-left: 0;\n    }\n\n    // Re-override the feedback icon.\n    .has-feedback .form-control-feedback {\n      top: 0;\n    }\n  }\n}\n// [converter] extracted as `@mixin form-inline` for libsass compatibility\n.form-inline {\n  @include form-inline;\n}\n\n\n\n// Horizontal forms\n//\n// Horizontal forms are built on grid classes and allow you to create forms with\n// labels on the left and inputs on the right.\n\n.form-horizontal {\n\n  // Consistent vertical alignment of radios and checkboxes\n  //\n  // Labels also get some reset styles, but that is scoped to a media query below.\n  .radio,\n  .checkbox,\n  .radio-inline,\n  .checkbox-inline {\n    margin-top: 0;\n    margin-bottom: 0;\n    padding-top: ($padding-base-vertical + 1); // Default padding plus a border\n  }\n  // Account for padding we're adding to ensure the alignment and of help text\n  // and other content below items\n  .radio,\n  .checkbox {\n    min-height: ($line-height-computed + ($padding-base-vertical + 1));\n  }\n\n  // Make form groups behave like rows\n  .form-group {\n    @include make-row;\n  }\n\n  // Reset spacing and right align labels, but scope to media queries so that\n  // labels on narrow viewports stack the same as a default form example.\n  @media (min-width: $screen-sm-min) {\n    .control-label {\n      text-align: right;\n      margin-bottom: 0;\n      padding-top: ($padding-base-vertical + 1); // Default padding plus a border\n    }\n  }\n\n  // Validation states\n  //\n  // Reposition the icon because it's now within a grid column and columns have\n  // `position: relative;` on them. Also accounts for the grid gutter padding.\n  .has-feedback .form-control-feedback {\n    right: floor(($grid-gutter-width / 2));\n  }\n\n  // Form group sizes\n  //\n  // Quick utility class for applying `.input-lg` and `.input-sm` styles to the\n  // inputs and labels within a `.form-group`.\n  .form-group-lg {\n    @media (min-width: $screen-sm-min) {\n      .control-label {\n        padding-top: ($padding-large-vertical + 1);\n        font-size: $font-size-large;\n      }\n    }\n  }\n  .form-group-sm {\n    @media (min-width: $screen-sm-min) {\n      .control-label {\n        padding-top: ($padding-small-vertical + 1);\n        font-size: $font-size-small;\n      }\n    }\n  }\n}\n","// Form validation states\n//\n// Used in forms.less to generate the form validation CSS for warnings, errors,\n// and successes.\n\n@mixin form-control-validation($text-color: #555, $border-color: #ccc, $background-color: #f5f5f5) {\n  // Color the label and help text\n  .help-block,\n  .control-label,\n  .radio,\n  .checkbox,\n  .radio-inline,\n  .checkbox-inline,\n  &.radio label,\n  &.checkbox label,\n  &.radio-inline label,\n  &.checkbox-inline label  {\n    color: $text-color;\n  }\n  // Set the border and box shadow on specific inputs to match\n  .form-control {\n    border-color: $border-color;\n    @include box-shadow(inset 0 1px 1px rgba(0,0,0,.075)); // Redeclare so transitions work\n    &:focus {\n      border-color: darken($border-color, 10%);\n      $shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 6px lighten($border-color, 20%);\n      @include box-shadow($shadow);\n    }\n  }\n  // Set validation states also for addons\n  .input-group-addon {\n    color: $text-color;\n    border-color: $border-color;\n    background-color: $background-color;\n  }\n  // Optional feedback icon\n  .form-control-feedback {\n    color: $text-color;\n  }\n}\n\n\n// Form control focus state\n//\n// Generate a customized focus state and for any input with the specified color,\n// which defaults to the `$input-border-focus` variable.\n//\n// We highly encourage you to not customize the default value, but instead use\n// this to tweak colors on an as-needed basis. This aesthetic change is based on\n// WebKit's default styles, but applicable to a wider range of browsers. Its\n// usability and accessibility should be taken into account with any change.\n//\n// Example usage: change the default blue border and shadow to white for better\n// contrast against a dark gray background.\n@mixin form-control-focus($color: $input-border-focus) {\n  $color-rgba: rgba(red($color), green($color), blue($color), .6);\n  &:focus {\n    border-color: $color;\n    outline: 0;\n    @include box-shadow(inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px $color-rgba);\n  }\n}\n\n// Form control sizing\n//\n// Relative text size, padding, and border-radii changes for form controls. For\n// horizontal sizing, wrap controls in the predefined grid classes. `<select>`\n// element gets special love because it's special, and that's a fact!\n// [converter] $parent hack\n@mixin input-size($parent, $input-height, $padding-vertical, $padding-horizontal, $font-size, $line-height, $border-radius) {\n  #{$parent} {\n    height: $input-height;\n    padding: $padding-vertical $padding-horizontal;\n    font-size: $font-size;\n    line-height: $line-height;\n    border-radius: $border-radius;\n  }\n\n  select#{$parent} {\n    height: $input-height;\n    line-height: $input-height;\n  }\n\n  textarea#{$parent},\n  select[multiple]#{$parent} {\n    height: auto;\n  }\n}\n","//\n// Buttons\n// --------------------------------------------------\n\n\n// Base styles\n// --------------------------------------------------\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0; // For input.btn\n  font-weight: $btn-font-weight;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none; // Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214\n  border: 1px solid transparent;\n  white-space: nowrap;\n  @include button-size($padding-base-vertical, $padding-base-horizontal, $font-size-base, $line-height-base, $btn-border-radius-base);\n  @include user-select(none);\n\n  &,\n  &:active,\n  &.active {\n    &:focus,\n    &.focus {\n      @include tab-focus;\n    }\n  }\n\n  &:hover,\n  &:focus,\n  &.focus {\n    color: $btn-default-color;\n    text-decoration: none;\n  }\n\n  &:active,\n  &.active {\n    outline: 0;\n    background-image: none;\n    @include box-shadow(inset 0 3px 5px rgba(0,0,0,.125));\n  }\n\n  &.disabled,\n  &[disabled],\n  fieldset[disabled] & {\n    cursor: $cursor-disabled;\n    @include opacity(.65);\n    @include box-shadow(none);\n  }\n\n  // [converter] extracted a& to a.btn\n}\n\na.btn {\n  &.disabled,\n  fieldset[disabled] & {\n    pointer-events: none; // Future-proof disabling of clicks on `<a>` elements\n  }\n}\n\n\n// Alternate buttons\n// --------------------------------------------------\n\n.btn-default {\n  @include button-variant($btn-default-color, $btn-default-bg, $btn-default-border);\n}\n.btn-primary {\n  @include button-variant($btn-primary-color, $btn-primary-bg, $btn-primary-border);\n}\n// Success appears as green\n.btn-success {\n  @include button-variant($btn-success-color, $btn-success-bg, $btn-success-border);\n}\n// Info appears as blue-green\n.btn-info {\n  @include button-variant($btn-info-color, $btn-info-bg, $btn-info-border);\n}\n// Warning appears as orange\n.btn-warning {\n  @include button-variant($btn-warning-color, $btn-warning-bg, $btn-warning-border);\n}\n// Danger and error appear as red\n.btn-danger {\n  @include button-variant($btn-danger-color, $btn-danger-bg, $btn-danger-border);\n}\n\n\n// Link buttons\n// -------------------------\n\n// Make a button look and behave like a link\n.btn-link {\n  color: $link-color;\n  font-weight: normal;\n  border-radius: 0;\n\n  &,\n  &:active,\n  &.active,\n  &[disabled],\n  fieldset[disabled] & {\n    background-color: transparent;\n    @include box-shadow(none);\n  }\n  &,\n  &:hover,\n  &:focus,\n  &:active {\n    border-color: transparent;\n  }\n  &:hover,\n  &:focus {\n    color: $link-hover-color;\n    text-decoration: $link-hover-decoration;\n    background-color: transparent;\n  }\n  &[disabled],\n  fieldset[disabled] & {\n    &:hover,\n    &:focus {\n      color: $btn-link-disabled-color;\n      text-decoration: none;\n    }\n  }\n}\n\n\n// Button Sizes\n// --------------------------------------------------\n\n.btn-lg {\n  // line-height: ensure even-numbered height of button next to large input\n  @include button-size($padding-large-vertical, $padding-large-horizontal, $font-size-large, $line-height-large, $btn-border-radius-large);\n}\n.btn-sm {\n  // line-height: ensure proper height of button next to small input\n  @include button-size($padding-small-vertical, $padding-small-horizontal, $font-size-small, $line-height-small, $btn-border-radius-small);\n}\n.btn-xs {\n  @include button-size($padding-xs-vertical, $padding-xs-horizontal, $font-size-small, $line-height-small, $btn-border-radius-small);\n}\n\n\n// Block button\n// --------------------------------------------------\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n\n// Vertically space out multiple block buttons\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\n\n// Specificity overrides\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  &.btn-block {\n    width: 100%;\n  }\n}\n","// Button variants\n//\n// Easily pump out default styles, as well as :hover, :focus, :active,\n// and disabled options for all buttons\n\n@mixin button-variant($color, $background, $border) {\n  color: $color;\n  background-color: $background;\n  border-color: $border;\n\n  &:focus,\n  &.focus {\n    color: $color;\n    background-color: darken($background, 10%);\n        border-color: darken($border, 25%);\n  }\n  &:hover {\n    color: $color;\n    background-color: darken($background, 10%);\n        border-color: darken($border, 12%);\n  }\n  &:active,\n  &.active,\n  .open > &.dropdown-toggle {\n    color: $color;\n    background-color: darken($background, 10%);\n        border-color: darken($border, 12%);\n\n    &:hover,\n    &:focus,\n    &.focus {\n      color: $color;\n      background-color: darken($background, 17%);\n          border-color: darken($border, 25%);\n    }\n  }\n  &:active,\n  &.active,\n  .open > &.dropdown-toggle {\n    background-image: none;\n  }\n  &.disabled,\n  &[disabled],\n  fieldset[disabled] & {\n    &:hover,\n    &:focus,\n    &.focus {\n      background-color: $background;\n          border-color: $border;\n    }\n  }\n\n  .badge {\n    color: $background;\n    background-color: $color;\n  }\n}\n\n// Button sizes\n@mixin button-size($padding-vertical, $padding-horizontal, $font-size, $line-height, $border-radius) {\n  padding: $padding-vertical $padding-horizontal;\n  font-size: $font-size;\n  line-height: $line-height;\n  border-radius: $border-radius;\n}\n","// Opacity\n\n@mixin opacity($opacity) {\n  opacity: $opacity;\n  // IE8 filter\n  $opacity-ie: ($opacity * 100);\n  filter: alpha(opacity=$opacity-ie);\n}\n","//\n// Component animations\n// --------------------------------------------------\n\n// Heads up!\n//\n// We don't use the `.opacity()` mixin here since it causes a bug with text\n// fields in IE7-8. Source: https://github.com/twbs/bootstrap/pull/3552.\n\n.fade {\n  opacity: 0;\n  @include transition(opacity .15s linear);\n  &.in {\n    opacity: 1;\n  }\n}\n\n.collapse {\n  display: none;\n\n  &.in      { display: block; }\n  // [converter] extracted tr&.in to tr.collapse.in\n  // [converter] extracted tbody&.in to tbody.collapse.in\n}\n\ntr.collapse.in    { display: table-row; }\n\ntbody.collapse.in { display: table-row-group; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  @include transition-property(height, visibility);\n  @include transition-duration(.35s);\n  @include transition-timing-function(ease);\n}\n","//\n// Dropdown menus\n// --------------------------------------------------\n\n\n// Dropdown arrow/caret\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top:   $caret-width-base dashed;\n  border-top:   $caret-width-base solid \\9; // IE8\n  border-right: $caret-width-base solid transparent;\n  border-left:  $caret-width-base solid transparent;\n}\n\n// The dropdown wrapper (div)\n.dropup,\n.dropdown {\n  position: relative;\n}\n\n// Prevent the focus on the dropdown toggle when closing dropdowns\n.dropdown-toggle:focus {\n  outline: 0;\n}\n\n// The dropdown menu (ul)\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: $zindex-dropdown;\n  display: none; // none by default, but block on \"open\" of the menu\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0; // override default ul\n  list-style: none;\n  font-size: $font-size-base;\n  text-align: left; // Ensures proper alignment if parent has it changed (e.g., modal footer)\n  background-color: $dropdown-bg;\n  border: 1px solid $dropdown-fallback-border; // IE8 fallback\n  border: 1px solid $dropdown-border;\n  border-radius: $border-radius-base;\n  @include box-shadow(0 6px 12px rgba(0,0,0,.175));\n  background-clip: padding-box;\n\n  // Aligns the dropdown menu to right\n  //\n  // Deprecated as of 3.1.0 in favor of `.dropdown-menu-[dir]`\n  &.pull-right {\n    right: 0;\n    left: auto;\n  }\n\n  // Dividers (basically an hr) within the dropdown\n  .divider {\n    @include nav-divider($dropdown-divider-bg);\n  }\n\n  // Links within the dropdown menu\n  > li > a {\n    display: block;\n    padding: 3px 20px;\n    clear: both;\n    font-weight: normal;\n    line-height: $line-height-base;\n    color: $dropdown-link-color;\n    white-space: nowrap; // prevent links from randomly breaking onto new lines\n  }\n}\n\n// Hover/Focus state\n.dropdown-menu > li > a {\n  &:hover,\n  &:focus {\n    text-decoration: none;\n    color: $dropdown-link-hover-color;\n    background-color: $dropdown-link-hover-bg;\n  }\n}\n\n// Active state\n.dropdown-menu > .active > a {\n  &,\n  &:hover,\n  &:focus {\n    color: $dropdown-link-active-color;\n    text-decoration: none;\n    outline: 0;\n    background-color: $dropdown-link-active-bg;\n  }\n}\n\n// Disabled state\n//\n// Gray out text and ensure the hover/focus state remains gray\n\n.dropdown-menu > .disabled > a {\n  &,\n  &:hover,\n  &:focus {\n    color: $dropdown-link-disabled-color;\n  }\n\n  // Nuke hover/focus effects\n  &:hover,\n  &:focus {\n    text-decoration: none;\n    background-color: transparent;\n    background-image: none; // Remove CSS gradient\n    @include reset-filter;\n    cursor: $cursor-disabled;\n  }\n}\n\n// Open state for the dropdown\n.open {\n  // Show the menu\n  > .dropdown-menu {\n    display: block;\n  }\n\n  // Remove the outline when :focus is triggered\n  > a {\n    outline: 0;\n  }\n}\n\n// Menu positioning\n//\n// Add extra class to `.dropdown-menu` to flip the alignment of the dropdown\n// menu with the parent.\n.dropdown-menu-right {\n  left: auto; // Reset the default from `.dropdown-menu`\n  right: 0;\n}\n// With v3, we enabled auto-flipping if you have a dropdown within a right\n// aligned nav component. To enable the undoing of that, we provide an override\n// to restore the default dropdown menu alignment.\n//\n// This is only for left-aligning a dropdown menu within a `.navbar-right` or\n// `.pull-right` nav component.\n.dropdown-menu-left {\n  left: 0;\n  right: auto;\n}\n\n// Dropdown section headers\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: $font-size-small;\n  line-height: $line-height-base;\n  color: $dropdown-header-color;\n  white-space: nowrap; // as with > li > a\n}\n\n// Backdrop to catch body clicks on mobile, etc.\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: ($zindex-dropdown - 10);\n}\n\n// Right aligned dropdowns\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n\n// Allow for dropdowns to go bottom up (aka, dropup-menu)\n//\n// Just add .dropup after the standard .dropdown class and you're set, bro.\n// TODO: abstract this so that the navbar fixed styles are not placed here?\n\n.dropup,\n.navbar-fixed-bottom .dropdown {\n  // Reverse the caret\n  .caret {\n    border-top: 0;\n    border-bottom: $caret-width-base dashed;\n    border-bottom: $caret-width-base solid \\9; // IE8\n    content: \"\";\n  }\n  // Different positioning for bottom up menu\n  .dropdown-menu {\n    top: auto;\n    bottom: 100%;\n    margin-bottom: 2px;\n  }\n}\n\n\n// Component alignment\n//\n// Reiterate per navbar.less and the modified component alignment there.\n\n@media (min-width: $grid-float-breakpoint) {\n  .navbar-right {\n    .dropdown-menu {\n      right: 0; left: auto;\n    }\n    // Necessary for overrides of the default right aligned menu.\n    // Will remove come v4 in all likelihood.\n    .dropdown-menu-left {\n      left: 0; right: auto;\n    }\n  }\n}\n","// Horizontal dividers\n//\n// Dividers (basically an hr) within dropdowns and nav lists\n\n@mixin nav-divider($color: #e5e5e5) {\n  height: 1px;\n  margin: (($line-height-computed / 2) - 1) 0;\n  overflow: hidden;\n  background-color: $color;\n}\n","// Reset filters for IE\n//\n// When you need to remove a gradient background, do not forget to use this to reset\n// the IE filter for IE9 and below.\n\n@mixin reset-filter() {\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n}\n","//\n// Button groups\n// --------------------------------------------------\n\n// Make the div behave like a button\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; // match .btn alignment given font-size hack above\n  > .btn {\n    position: relative;\n    float: left;\n    // Bring the \"active\" button to the front\n    &:hover,\n    &:focus,\n    &:active,\n    &.active {\n      z-index: 2;\n    }\n  }\n}\n\n// Prevent double borders when buttons are next to each other\n.btn-group {\n  .btn + .btn,\n  .btn + .btn-group,\n  .btn-group + .btn,\n  .btn-group + .btn-group {\n    margin-left: -1px;\n  }\n}\n\n// Optional: Group multiple button groups together for a toolbar\n.btn-toolbar {\n  margin-left: -5px; // Offset the first child's margin\n  @include clearfix;\n\n  .btn,\n  .btn-group,\n  .input-group {\n    float: left;\n  }\n  > .btn,\n  > .btn-group,\n  > .input-group {\n    margin-left: 5px;\n  }\n}\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n\n// Set corners individual because sometimes a single button can be in a .btn-group and we need :first-child and :last-child to both match\n.btn-group > .btn:first-child {\n  margin-left: 0;\n  &:not(:last-child):not(.dropdown-toggle) {\n    @include border-right-radius(0);\n  }\n}\n// Need .dropdown-toggle since :last-child doesn't apply, given that a .dropdown-menu is used immediately after it\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  @include border-left-radius(0);\n}\n\n// Custom edits for including btn-groups within btn-groups (useful for including dropdown buttons within a btn-group)\n.btn-group > .btn-group {\n  float: left;\n}\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group > .btn-group:first-child:not(:last-child) {\n  > .btn:last-child,\n  > .dropdown-toggle {\n    @include border-right-radius(0);\n  }\n}\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  @include border-left-radius(0);\n}\n\n// On active and open, don't show outline\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n\n\n// Sizing\n//\n// Remix the default button sizing classes into new ones for easier manipulation.\n\n.btn-group-xs > .btn { @extend .btn-xs; }\n.btn-group-sm > .btn { @extend .btn-sm; }\n.btn-group-lg > .btn { @extend .btn-lg; }\n\n\n// Split button dropdowns\n// ----------------------\n\n// Give the line between buttons some depth\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.btn-group > .btn-lg + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n// The clickable button for toggling the menu\n// Remove the gradient and set the same inset shadow as the :active state\n.btn-group.open .dropdown-toggle {\n  @include box-shadow(inset 0 3px 5px rgba(0,0,0,.125));\n\n  // Show no shadow for `.btn-link` since it has no other button styles.\n  &.btn-link {\n    @include box-shadow(none);\n  }\n}\n\n\n// Reposition the caret\n.btn .caret {\n  margin-left: 0;\n}\n// Carets in other button sizes\n.btn-lg .caret {\n  border-width: $caret-width-large $caret-width-large 0;\n  border-bottom-width: 0;\n}\n// Upside down carets for .dropup\n.dropup .btn-lg .caret {\n  border-width: 0 $caret-width-large $caret-width-large;\n}\n\n\n// Vertical button groups\n// ----------------------\n\n.btn-group-vertical {\n  > .btn,\n  > .btn-group,\n  > .btn-group > .btn {\n    display: block;\n    float: none;\n    width: 100%;\n    max-width: 100%;\n  }\n\n  // Clear floats so dropdown menus can be properly placed\n  > .btn-group {\n    @include clearfix;\n    > .btn {\n      float: none;\n    }\n  }\n\n  > .btn + .btn,\n  > .btn + .btn-group,\n  > .btn-group + .btn,\n  > .btn-group + .btn-group {\n    margin-top: -1px;\n    margin-left: 0;\n  }\n}\n\n.btn-group-vertical > .btn {\n  &:not(:first-child):not(:last-child) {\n    border-radius: 0;\n  }\n  &:first-child:not(:last-child) {\n    @include border-top-radius($btn-border-radius-base);\n    @include border-bottom-radius(0);\n  }\n  &:last-child:not(:first-child) {\n    @include border-top-radius(0);\n    @include border-bottom-radius($btn-border-radius-base);\n  }\n}\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn-group:first-child:not(:last-child) {\n  > .btn:last-child,\n  > .dropdown-toggle {\n    @include border-bottom-radius(0);\n  }\n}\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  @include border-top-radius(0);\n}\n\n\n// Justified button groups\n// ----------------------\n\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n  > .btn,\n  > .btn-group {\n    float: none;\n    display: table-cell;\n    width: 1%;\n  }\n  > .btn-group .btn {\n    width: 100%;\n  }\n\n  > .btn-group .dropdown-menu {\n    left: auto;\n  }\n}\n\n\n// Checkbox and radio options\n//\n// In order to support the browser's form validation feedback, powered by the\n// `required` attribute, we have to \"hide\" the inputs via `clip`. We cannot use\n// `display: none;` or `visibility: hidden;` as that also hides the popover.\n// Simply visually hiding the inputs via `opacity` would leave them clickable in\n// certain cases which is prevented by using `clip` and `pointer-events`.\n// This way, we ensure a DOM element is visible to position the popover from.\n//\n// See https://github.com/twbs/bootstrap/pull/12794 and\n// https://github.com/twbs/bootstrap/pull/14559 for more information.\n\n[data-toggle=\"buttons\"] {\n  > .btn,\n  > .btn-group > .btn {\n    input[type=\"radio\"],\n    input[type=\"checkbox\"] {\n      position: absolute;\n      clip: rect(0,0,0,0);\n      pointer-events: none;\n    }\n  }\n}\n","// Single side border-radius\n\n@mixin border-top-radius($radius) {\n  border-top-right-radius: $radius;\n   border-top-left-radius: $radius;\n}\n@mixin border-right-radius($radius) {\n  border-bottom-right-radius: $radius;\n     border-top-right-radius: $radius;\n}\n@mixin border-bottom-radius($radius) {\n  border-bottom-right-radius: $radius;\n   border-bottom-left-radius: $radius;\n}\n@mixin border-left-radius($radius) {\n  border-bottom-left-radius: $radius;\n     border-top-left-radius: $radius;\n}\n","//\n// Input groups\n// --------------------------------------------------\n\n// Base styles\n// -------------------------\n.input-group {\n  position: relative; // For dropdowns\n  display: table;\n  border-collapse: separate; // prevent input groups from inheriting border styles from table cells when placed within a table\n\n  // Undo padding and float of grid classes\n  &[class*=\"col-\"] {\n    float: none;\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .form-control {\n    // Ensure that the input is always above the *appended* addon button for\n    // proper border colors.\n    position: relative;\n    z-index: 2;\n\n    // IE9 fubars the placeholder attribute in text inputs and the arrows on\n    // select elements in input groups. To fix it, we float the input. Details:\n    // https://github.com/twbs/bootstrap/issues/11561#issuecomment-28936855\n    float: left;\n\n    width: 100%;\n    margin-bottom: 0;\n\n    &:focus {\n      z-index: 3;\n    }\n  }\n}\n\n// Sizing options\n//\n// Remix the default form control sizing classes into new ones for easier\n// manipulation.\n\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  @extend .input-lg;\n}\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  @extend .input-sm;\n}\n\n\n// Display as table-cell\n// -------------------------\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n\n  &:not(:first-child):not(:last-child) {\n    border-radius: 0;\n  }\n}\n// Addon and addon wrapper for buttons\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle; // Match the inputs\n}\n\n// Text input groups\n// -------------------------\n.input-group-addon {\n  padding: $padding-base-vertical $padding-base-horizontal;\n  font-size: $font-size-base;\n  font-weight: normal;\n  line-height: 1;\n  color: $input-color;\n  text-align: center;\n  background-color: $input-group-addon-bg;\n  border: 1px solid $input-group-addon-border-color;\n  border-radius: $input-border-radius;\n\n  // Sizing\n  &.input-sm {\n    padding: $padding-small-vertical $padding-small-horizontal;\n    font-size: $font-size-small;\n    border-radius: $input-border-radius-small;\n  }\n  &.input-lg {\n    padding: $padding-large-vertical $padding-large-horizontal;\n    font-size: $font-size-large;\n    border-radius: $input-border-radius-large;\n  }\n\n  // Nuke default margins from checkboxes and radios to vertically center within.\n  input[type=\"radio\"],\n  input[type=\"checkbox\"] {\n    margin-top: 0;\n  }\n}\n\n// Reset rounded corners\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  @include border-right-radius(0);\n}\n.input-group-addon:first-child {\n  border-right: 0;\n}\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  @include border-left-radius(0);\n}\n.input-group-addon:last-child {\n  border-left: 0;\n}\n\n// Button input groups\n// -------------------------\n.input-group-btn {\n  position: relative;\n  // Jankily prevent input button groups from wrapping with `white-space` and\n  // `font-size` in combination with `inline-block` on buttons.\n  font-size: 0;\n  white-space: nowrap;\n\n  // Negative margin for spacing, position for bringing hovered/focused/actived\n  // element above the siblings.\n  > .btn {\n    position: relative;\n    + .btn {\n      margin-left: -1px;\n    }\n    // Bring the \"active\" button to the front\n    &:hover,\n    &:focus,\n    &:active {\n      z-index: 2;\n    }\n  }\n\n  // Negative margin to only have a 1px border between the two\n  &:first-child {\n    > .btn,\n    > .btn-group {\n      margin-right: -1px;\n    }\n  }\n  &:last-child {\n    > .btn,\n    > .btn-group {\n      z-index: 2;\n      margin-left: -1px;\n    }\n  }\n}\n","//\n// Navs\n// --------------------------------------------------\n\n\n// Base class\n// --------------------------------------------------\n\n.nav {\n  margin-bottom: 0;\n  padding-left: 0; // Override default ul/ol\n  list-style: none;\n  @include clearfix;\n\n  > li {\n    position: relative;\n    display: block;\n\n    > a {\n      position: relative;\n      display: block;\n      padding: $nav-link-padding;\n      &:hover,\n      &:focus {\n        text-decoration: none;\n        background-color: $nav-link-hover-bg;\n      }\n    }\n\n    // Disabled state sets text to gray and nukes hover/tab effects\n    &.disabled > a {\n      color: $nav-disabled-link-color;\n\n      &:hover,\n      &:focus {\n        color: $nav-disabled-link-hover-color;\n        text-decoration: none;\n        background-color: transparent;\n        cursor: $cursor-disabled;\n      }\n    }\n  }\n\n  // Open dropdowns\n  .open > a {\n    &,\n    &:hover,\n    &:focus {\n      background-color: $nav-link-hover-bg;\n      border-color: $link-color;\n    }\n  }\n\n  // Nav dividers (deprecated with v3.0.1)\n  //\n  // This should have been removed in v3 with the dropping of `.nav-list`, but\n  // we missed it. We don't currently support this anywhere, but in the interest\n  // of maintaining backward compatibility in case you use it, it's deprecated.\n  .nav-divider {\n    @include nav-divider;\n  }\n\n  // Prevent IE8 from misplacing imgs\n  //\n  // See https://github.com/h5bp/html5-boilerplate/issues/984#issuecomment-3985989\n  > li > a > img {\n    max-width: none;\n  }\n}\n\n\n// Tabs\n// -------------------------\n\n// Give the tabs something to sit on\n.nav-tabs {\n  border-bottom: 1px solid $nav-tabs-border-color;\n  > li {\n    float: left;\n    // Make the list-items overlay the bottom border\n    margin-bottom: -1px;\n\n    // Actual tabs (as links)\n    > a {\n      margin-right: 2px;\n      line-height: $line-height-base;\n      border: 1px solid transparent;\n      border-radius: $border-radius-base $border-radius-base 0 0;\n      &:hover {\n        border-color: $nav-tabs-link-hover-border-color $nav-tabs-link-hover-border-color $nav-tabs-border-color;\n      }\n    }\n\n    // Active state, and its :hover to override normal :hover\n    &.active > a {\n      &,\n      &:hover,\n      &:focus {\n        color: $nav-tabs-active-link-hover-color;\n        background-color: $nav-tabs-active-link-hover-bg;\n        border: 1px solid $nav-tabs-active-link-hover-border-color;\n        border-bottom-color: transparent;\n        cursor: default;\n      }\n    }\n  }\n  // pulling this in mainly for less shorthand\n  &.nav-justified {\n    @extend .nav-justified;\n    @extend .nav-tabs-justified;\n  }\n}\n\n\n// Pills\n// -------------------------\n.nav-pills {\n  > li {\n    float: left;\n\n    // Links rendered as pills\n    > a {\n      border-radius: $nav-pills-border-radius;\n    }\n    + li {\n      margin-left: 2px;\n    }\n\n    // Active state\n    &.active > a {\n      &,\n      &:hover,\n      &:focus {\n        color: $nav-pills-active-link-hover-color;\n        background-color: $nav-pills-active-link-hover-bg;\n      }\n    }\n  }\n}\n\n\n// Stacked pills\n.nav-stacked {\n  > li {\n    float: none;\n    + li {\n      margin-top: 2px;\n      margin-left: 0; // no need for this gap between nav items\n    }\n  }\n}\n\n\n// Nav variations\n// --------------------------------------------------\n\n// Justified nav links\n// -------------------------\n\n.nav-justified {\n  width: 100%;\n\n  > li {\n    float: none;\n    > a {\n      text-align: center;\n      margin-bottom: 5px;\n    }\n  }\n\n  > .dropdown .dropdown-menu {\n    top: auto;\n    left: auto;\n  }\n\n  @media (min-width: $screen-sm-min) {\n    > li {\n      display: table-cell;\n      width: 1%;\n      > a {\n        margin-bottom: 0;\n      }\n    }\n  }\n}\n\n// Move borders to anchors instead of bottom of list\n//\n// Mixin for adding on top the shared `.nav-justified` styles for our tabs\n.nav-tabs-justified {\n  border-bottom: 0;\n\n  > li > a {\n    // Override margin from .nav-tabs\n    margin-right: 0;\n    border-radius: $border-radius-base;\n  }\n\n  > .active > a,\n  > .active > a:hover,\n  > .active > a:focus {\n    border: 1px solid $nav-tabs-justified-link-border-color;\n  }\n\n  @media (min-width: $screen-sm-min) {\n    > li > a {\n      border-bottom: 1px solid $nav-tabs-justified-link-border-color;\n      border-radius: $border-radius-base $border-radius-base 0 0;\n    }\n    > .active > a,\n    > .active > a:hover,\n    > .active > a:focus {\n      border-bottom-color: $nav-tabs-justified-active-link-border-color;\n    }\n  }\n}\n\n\n// Tabbable tabs\n// -------------------------\n\n// Hide tabbable panes to start, show them when `.active`\n.tab-content {\n  > .tab-pane {\n    display: none;\n  }\n  > .active {\n    display: block;\n  }\n}\n\n\n// Dropdowns\n// -------------------------\n\n// Specific dropdowns\n.nav-tabs .dropdown-menu {\n  // make dropdown border overlap tab border\n  margin-top: -1px;\n  // Remove the top rounded corners here since there is a hard edge above the menu\n  @include border-top-radius(0);\n}\n","//\n// Navbars\n// --------------------------------------------------\n\n\n// Wrapper and base class\n//\n// Provide a static navbar from which we expand to create full-width, fixed, and\n// other navbar variations.\n\n.navbar {\n  position: relative;\n  min-height: $navbar-height; // Ensure a navbar always shows (e.g., without a .navbar-brand in collapsed mode)\n  margin-bottom: $navbar-margin-bottom;\n  border: 1px solid transparent;\n\n  // Prevent floats from breaking the navbar\n  @include clearfix;\n\n  @media (min-width: $grid-float-breakpoint) {\n    border-radius: $navbar-border-radius;\n  }\n}\n\n\n// Navbar heading\n//\n// Groups `.navbar-brand` and `.navbar-toggle` into a single component for easy\n// styling of responsive aspects.\n\n.navbar-header {\n  @include clearfix;\n\n  @media (min-width: $grid-float-breakpoint) {\n    float: left;\n  }\n}\n\n\n// Navbar collapse (body)\n//\n// Group your navbar content into this for easy collapsing and expanding across\n// various device sizes. By default, this content is collapsed when <768px, but\n// will expand past that for a horizontal display.\n//\n// To start (on mobile devices) the navbar links, forms, and buttons are stacked\n// vertically and include a `max-height` to overflow in case you have too much\n// content for the user's viewport.\n\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: $navbar-padding-horizontal;\n  padding-left:  $navbar-padding-horizontal;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255,255,255,.1);\n  @include clearfix;\n  -webkit-overflow-scrolling: touch;\n\n  &.in {\n    overflow-y: auto;\n  }\n\n  @media (min-width: $grid-float-breakpoint) {\n    width: auto;\n    border-top: 0;\n    box-shadow: none;\n\n    &.collapse {\n      display: block !important;\n      height: auto !important;\n      padding-bottom: 0; // Override default setting\n      overflow: visible !important;\n    }\n\n    &.in {\n      overflow-y: visible;\n    }\n\n    // Undo the collapse side padding for navbars with containers to ensure\n    // alignment of right-aligned contents.\n    .navbar-fixed-top &,\n    .navbar-static-top &,\n    .navbar-fixed-bottom & {\n      padding-left: 0;\n      padding-right: 0;\n    }\n  }\n}\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  .navbar-collapse {\n    max-height: $navbar-collapse-max-height;\n\n    @media (max-device-width: $screen-xs-min) and (orientation: landscape) {\n      max-height: 200px;\n    }\n  }\n}\n\n\n// Both navbar header and collapse\n//\n// When a container is present, change the behavior of the header and collapse.\n\n.container,\n.container-fluid {\n  > .navbar-header,\n  > .navbar-collapse {\n    margin-right: -$navbar-padding-horizontal;\n    margin-left:  -$navbar-padding-horizontal;\n\n    @media (min-width: $grid-float-breakpoint) {\n      margin-right: 0;\n      margin-left:  0;\n    }\n  }\n}\n\n\n//\n// Navbar alignment options\n//\n// Display the navbar across the entirety of the page or fixed it to the top or\n// bottom of the page.\n\n// Static top (unfixed, but 100% wide) navbar\n.navbar-static-top {\n  z-index: $zindex-navbar;\n  border-width: 0 0 1px;\n\n  @media (min-width: $grid-float-breakpoint) {\n    border-radius: 0;\n  }\n}\n\n// Fix the top/bottom navbars when screen real estate supports it\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: $zindex-navbar-fixed;\n\n  // Undo the rounded corners\n  @media (min-width: $grid-float-breakpoint) {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0; // override .navbar defaults\n  border-width: 1px 0 0;\n}\n\n\n// Brand/project name\n\n.navbar-brand {\n  float: left;\n  padding: $navbar-padding-vertical $navbar-padding-horizontal;\n  font-size: $font-size-large;\n  line-height: $line-height-computed;\n  height: $navbar-height;\n\n  &:hover,\n  &:focus {\n    text-decoration: none;\n  }\n\n  > img {\n    display: block;\n  }\n\n  @media (min-width: $grid-float-breakpoint) {\n    .navbar > .container &,\n    .navbar > .container-fluid & {\n      margin-left: -$navbar-padding-horizontal;\n    }\n  }\n}\n\n\n// Navbar toggle\n//\n// Custom button for toggling the `.navbar-collapse`, powered by the collapse\n// JavaScript plugin.\n\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: $navbar-padding-horizontal;\n  padding: 9px 10px;\n  @include navbar-vertical-align(34px);\n  background-color: transparent;\n  background-image: none; // Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214\n  border: 1px solid transparent;\n  border-radius: $border-radius-base;\n\n  // We remove the `outline` here, but later compensate by attaching `:hover`\n  // styles to `:focus`.\n  &:focus {\n    outline: 0;\n  }\n\n  // Bars\n  .icon-bar {\n    display: block;\n    width: 22px;\n    height: 2px;\n    border-radius: 1px;\n  }\n  .icon-bar + .icon-bar {\n    margin-top: 4px;\n  }\n\n  @media (min-width: $grid-float-breakpoint) {\n    display: none;\n  }\n}\n\n\n// Navbar nav links\n//\n// Builds on top of the `.nav` components with its own modifier class to make\n// the nav the full height of the horizontal nav (above 768px).\n\n.navbar-nav {\n  margin: ($navbar-padding-vertical / 2) (-$navbar-padding-horizontal);\n\n  > li > a {\n    padding-top:    10px;\n    padding-bottom: 10px;\n    line-height: $line-height-computed;\n  }\n\n  @media (max-width: $grid-float-breakpoint-max) {\n    // Dropdowns get custom display when collapsed\n    .open .dropdown-menu {\n      position: static;\n      float: none;\n      width: auto;\n      margin-top: 0;\n      background-color: transparent;\n      border: 0;\n      box-shadow: none;\n      > li > a,\n      .dropdown-header {\n        padding: 5px 15px 5px 25px;\n      }\n      > li > a {\n        line-height: $line-height-computed;\n        &:hover,\n        &:focus {\n          background-image: none;\n        }\n      }\n    }\n  }\n\n  // Uncollapse the nav\n  @media (min-width: $grid-float-breakpoint) {\n    float: left;\n    margin: 0;\n\n    > li {\n      float: left;\n      > a {\n        padding-top:    $navbar-padding-vertical;\n        padding-bottom: $navbar-padding-vertical;\n      }\n    }\n  }\n}\n\n\n// Navbar form\n//\n// Extension of the `.form-inline` with some extra flavor for optimum display in\n// our navbars.\n\n.navbar-form {\n  margin-left: -$navbar-padding-horizontal;\n  margin-right: -$navbar-padding-horizontal;\n  padding: 10px $navbar-padding-horizontal;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  $shadow: inset 0 1px 0 rgba(255,255,255,.1), 0 1px 0 rgba(255,255,255,.1);\n  @include box-shadow($shadow);\n\n  // Mixin behavior for optimum display\n  @include form-inline;\n\n  .form-group {\n    @media (max-width: $grid-float-breakpoint-max) {\n      margin-bottom: 5px;\n\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n  }\n\n  // Vertically center in expanded, horizontal navbar\n  @include navbar-vertical-align($input-height-base);\n\n  // Undo 100% width for pull classes\n  @media (min-width: $grid-float-breakpoint) {\n    width: auto;\n    border: 0;\n    margin-left: 0;\n    margin-right: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    @include box-shadow(none);\n  }\n}\n\n\n// Dropdown menus\n\n// Menu position and menu carets\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  @include border-top-radius(0);\n}\n// Menu position and menu caret support for dropups via extra dropup class\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  @include border-top-radius($navbar-border-radius);\n  @include border-bottom-radius(0);\n}\n\n\n// Buttons in navbars\n//\n// Vertically center a button within a navbar (when *not* in a form).\n\n.navbar-btn {\n  @include navbar-vertical-align($input-height-base);\n\n  &.btn-sm {\n    @include navbar-vertical-align($input-height-small);\n  }\n  &.btn-xs {\n    @include navbar-vertical-align(22);\n  }\n}\n\n\n// Text in navbars\n//\n// Add a class to make any element properly align itself vertically within the navbars.\n\n.navbar-text {\n  @include navbar-vertical-align($line-height-computed);\n\n  @media (min-width: $grid-float-breakpoint) {\n    float: left;\n    margin-left: $navbar-padding-horizontal;\n    margin-right: $navbar-padding-horizontal;\n  }\n}\n\n\n// Component alignment\n//\n// Repurpose the pull utilities as their own navbar utilities to avoid specificity\n// issues with parents and chaining. Only do this when the navbar is uncollapsed\n// though so that navbar contents properly stack and align in mobile.\n//\n// Declared after the navbar components to ensure more specificity on the margins.\n\n@media (min-width: $grid-float-breakpoint) {\n  .navbar-left {\n    float: left !important;\n  }\n  .navbar-right {\n    float: right !important;\n  margin-right: -$navbar-padding-horizontal;\n\n    ~ .navbar-right {\n      margin-right: 0;\n    }\n  }\n}\n\n\n// Alternate navbars\n// --------------------------------------------------\n\n// Default navbar\n.navbar-default {\n  background-color: $navbar-default-bg;\n  border-color: $navbar-default-border;\n\n  .navbar-brand {\n    color: $navbar-default-brand-color;\n    &:hover,\n    &:focus {\n      color: $navbar-default-brand-hover-color;\n      background-color: $navbar-default-brand-hover-bg;\n    }\n  }\n\n  .navbar-text {\n    color: $navbar-default-color;\n  }\n\n  .navbar-nav {\n    > li > a {\n      color: $navbar-default-link-color;\n\n      &:hover,\n      &:focus {\n        color: $navbar-default-link-hover-color;\n        background-color: $navbar-default-link-hover-bg;\n      }\n    }\n    > .active > a {\n      &,\n      &:hover,\n      &:focus {\n        color: $navbar-default-link-active-color;\n        background-color: $navbar-default-link-active-bg;\n      }\n    }\n    > .disabled > a {\n      &,\n      &:hover,\n      &:focus {\n        color: $navbar-default-link-disabled-color;\n        background-color: $navbar-default-link-disabled-bg;\n      }\n    }\n  }\n\n  .navbar-toggle {\n    border-color: $navbar-default-toggle-border-color;\n    &:hover,\n    &:focus {\n      background-color: $navbar-default-toggle-hover-bg;\n    }\n    .icon-bar {\n      background-color: $navbar-default-toggle-icon-bar-bg;\n    }\n  }\n\n  .navbar-collapse,\n  .navbar-form {\n    border-color: $navbar-default-border;\n  }\n\n  // Dropdown menu items\n  .navbar-nav {\n    // Remove background color from open dropdown\n    > .open > a {\n      &,\n      &:hover,\n      &:focus {\n        background-color: $navbar-default-link-active-bg;\n        color: $navbar-default-link-active-color;\n      }\n    }\n\n    @media (max-width: $grid-float-breakpoint-max) {\n      // Dropdowns get custom display when collapsed\n      .open .dropdown-menu {\n        > li > a {\n          color: $navbar-default-link-color;\n          &:hover,\n          &:focus {\n            color: $navbar-default-link-hover-color;\n            background-color: $navbar-default-link-hover-bg;\n          }\n        }\n        > .active > a {\n          &,\n          &:hover,\n          &:focus {\n            color: $navbar-default-link-active-color;\n            background-color: $navbar-default-link-active-bg;\n          }\n        }\n        > .disabled > a {\n          &,\n          &:hover,\n          &:focus {\n            color: $navbar-default-link-disabled-color;\n            background-color: $navbar-default-link-disabled-bg;\n          }\n        }\n      }\n    }\n  }\n\n\n  // Links in navbars\n  //\n  // Add a class to ensure links outside the navbar nav are colored correctly.\n\n  .navbar-link {\n    color: $navbar-default-link-color;\n    &:hover {\n      color: $navbar-default-link-hover-color;\n    }\n  }\n\n  .btn-link {\n    color: $navbar-default-link-color;\n    &:hover,\n    &:focus {\n      color: $navbar-default-link-hover-color;\n    }\n    &[disabled],\n    fieldset[disabled] & {\n      &:hover,\n      &:focus {\n        color: $navbar-default-link-disabled-color;\n      }\n    }\n  }\n}\n\n// Inverse navbar\n\n.navbar-inverse {\n  background-color: $navbar-inverse-bg;\n  border-color: $navbar-inverse-border;\n\n  .navbar-brand {\n    color: $navbar-inverse-brand-color;\n    &:hover,\n    &:focus {\n      color: $navbar-inverse-brand-hover-color;\n      background-color: $navbar-inverse-brand-hover-bg;\n    }\n  }\n\n  .navbar-text {\n    color: $navbar-inverse-color;\n  }\n\n  .navbar-nav {\n    > li > a {\n      color: $navbar-inverse-link-color;\n\n      &:hover,\n      &:focus {\n        color: $navbar-inverse-link-hover-color;\n        background-color: $navbar-inverse-link-hover-bg;\n      }\n    }\n    > .active > a {\n      &,\n      &:hover,\n      &:focus {\n        color: $navbar-inverse-link-active-color;\n        background-color: $navbar-inverse-link-active-bg;\n      }\n    }\n    > .disabled > a {\n      &,\n      &:hover,\n      &:focus {\n        color: $navbar-inverse-link-disabled-color;\n        background-color: $navbar-inverse-link-disabled-bg;\n      }\n    }\n  }\n\n  // Darken the responsive nav toggle\n  .navbar-toggle {\n    border-color: $navbar-inverse-toggle-border-color;\n    &:hover,\n    &:focus {\n      background-color: $navbar-inverse-toggle-hover-bg;\n    }\n    .icon-bar {\n      background-color: $navbar-inverse-toggle-icon-bar-bg;\n    }\n  }\n\n  .navbar-collapse,\n  .navbar-form {\n    border-color: darken($navbar-inverse-bg, 7%);\n  }\n\n  // Dropdowns\n  .navbar-nav {\n    > .open > a {\n      &,\n      &:hover,\n      &:focus {\n        background-color: $navbar-inverse-link-active-bg;\n        color: $navbar-inverse-link-active-color;\n      }\n    }\n\n    @media (max-width: $grid-float-breakpoint-max) {\n      // Dropdowns get custom display\n      .open .dropdown-menu {\n        > .dropdown-header {\n          border-color: $navbar-inverse-border;\n        }\n        .divider {\n          background-color: $navbar-inverse-border;\n        }\n        > li > a {\n          color: $navbar-inverse-link-color;\n          &:hover,\n          &:focus {\n            color: $navbar-inverse-link-hover-color;\n            background-color: $navbar-inverse-link-hover-bg;\n          }\n        }\n        > .active > a {\n          &,\n          &:hover,\n          &:focus {\n            color: $navbar-inverse-link-active-color;\n            background-color: $navbar-inverse-link-active-bg;\n          }\n        }\n        > .disabled > a {\n          &,\n          &:hover,\n          &:focus {\n            color: $navbar-inverse-link-disabled-color;\n            background-color: $navbar-inverse-link-disabled-bg;\n          }\n        }\n      }\n    }\n  }\n\n  .navbar-link {\n    color: $navbar-inverse-link-color;\n    &:hover {\n      color: $navbar-inverse-link-hover-color;\n    }\n  }\n\n  .btn-link {\n    color: $navbar-inverse-link-color;\n    &:hover,\n    &:focus {\n      color: $navbar-inverse-link-hover-color;\n    }\n    &[disabled],\n    fieldset[disabled] & {\n      &:hover,\n      &:focus {\n        color: $navbar-inverse-link-disabled-color;\n      }\n    }\n  }\n}\n","// Navbar vertical align\n//\n// Vertically center elements in the navbar.\n// Example: an element has a height of 30px, so write out `.navbar-vertical-align(30px);` to calculate the appropriate top margin.\n\n@mixin navbar-vertical-align($element-height) {\n  margin-top: (($navbar-height - $element-height) / 2);\n  margin-bottom: (($navbar-height - $element-height) / 2);\n}\n","//\n// Breadcrumbs\n// --------------------------------------------------\n\n\n.breadcrumb {\n  padding: $breadcrumb-padding-vertical $breadcrumb-padding-horizontal;\n  margin-bottom: $line-height-computed;\n  list-style: none;\n  background-color: $breadcrumb-bg;\n  border-radius: $border-radius-base;\n\n  > li {\n    display: inline-block;\n\n    + li:before {\n      // [converter] Workaround for https://github.com/sass/libsass/issues/1115\n      $nbsp: \"\\00a0\";\n      content: \"#{$breadcrumb-separator}#{$nbsp}\"; // Unicode space added since inline-block means non-collapsing white-space\n      padding: 0 5px;\n      color: $breadcrumb-color;\n    }\n  }\n\n  > .active {\n    color: $breadcrumb-active-color;\n  }\n}\n","//\n// Pagination (multiple pages)\n// --------------------------------------------------\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: $line-height-computed 0;\n  border-radius: $border-radius-base;\n\n  > li {\n    display: inline; // Remove list-style and block-level defaults\n    > a,\n    > span {\n      position: relative;\n      float: left; // Collapse white-space\n      padding: $padding-base-vertical $padding-base-horizontal;\n      line-height: $line-height-base;\n      text-decoration: none;\n      color: $pagination-color;\n      background-color: $pagination-bg;\n      border: 1px solid $pagination-border;\n      margin-left: -1px;\n    }\n    &:first-child {\n      > a,\n      > span {\n        margin-left: 0;\n        @include border-left-radius($border-radius-base);\n      }\n    }\n    &:last-child {\n      > a,\n      > span {\n        @include border-right-radius($border-radius-base);\n      }\n    }\n  }\n\n  > li > a,\n  > li > span {\n    &:hover,\n    &:focus {\n      z-index: 2;\n      color: $pagination-hover-color;\n      background-color: $pagination-hover-bg;\n      border-color: $pagination-hover-border;\n    }\n  }\n\n  > .active > a,\n  > .active > span {\n    &,\n    &:hover,\n    &:focus {\n      z-index: 3;\n      color: $pagination-active-color;\n      background-color: $pagination-active-bg;\n      border-color: $pagination-active-border;\n      cursor: default;\n    }\n  }\n\n  > .disabled {\n    > span,\n    > span:hover,\n    > span:focus,\n    > a,\n    > a:hover,\n    > a:focus {\n      color: $pagination-disabled-color;\n      background-color: $pagination-disabled-bg;\n      border-color: $pagination-disabled-border;\n      cursor: $cursor-disabled;\n    }\n  }\n}\n\n// Sizing\n// --------------------------------------------------\n\n// Large\n.pagination-lg {\n  @include pagination-size($padding-large-vertical, $padding-large-horizontal, $font-size-large, $line-height-large, $border-radius-large);\n}\n\n// Small\n.pagination-sm {\n  @include pagination-size($padding-small-vertical, $padding-small-horizontal, $font-size-small, $line-height-small, $border-radius-small);\n}\n","// Pagination\n\n@mixin pagination-size($padding-vertical, $padding-horizontal, $font-size, $line-height, $border-radius) {\n  > li {\n    > a,\n    > span {\n      padding: $padding-vertical $padding-horizontal;\n      font-size: $font-size;\n      line-height: $line-height;\n    }\n    &:first-child {\n      > a,\n      > span {\n        @include border-left-radius($border-radius);\n      }\n    }\n    &:last-child {\n      > a,\n      > span {\n        @include border-right-radius($border-radius);\n      }\n    }\n  }\n}\n","//\n// Pager pagination\n// --------------------------------------------------\n\n\n.pager {\n  padding-left: 0;\n  margin: $line-height-computed 0;\n  list-style: none;\n  text-align: center;\n  @include clearfix;\n  li {\n    display: inline;\n    > a,\n    > span {\n      display: inline-block;\n      padding: 5px 14px;\n      background-color: $pager-bg;\n      border: 1px solid $pager-border;\n      border-radius: $pager-border-radius;\n    }\n\n    > a:hover,\n    > a:focus {\n      text-decoration: none;\n      background-color: $pager-hover-bg;\n    }\n  }\n\n  .next {\n    > a,\n    > span {\n      float: right;\n    }\n  }\n\n  .previous {\n    > a,\n    > span {\n      float: left;\n    }\n  }\n\n  .disabled {\n    > a,\n    > a:hover,\n    > a:focus,\n    > span {\n      color: $pager-disabled-color;\n      background-color: $pager-bg;\n      cursor: $cursor-disabled;\n    }\n  }\n}\n","//\n// Labels\n// --------------------------------------------------\n\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: $label-color;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n\n  // [converter] extracted a& to a.label\n\n  // Empty labels collapse automatically (not available in IE8)\n  &:empty {\n    display: none;\n  }\n\n  // Quick fix for labels in buttons\n  .btn & {\n    position: relative;\n    top: -1px;\n  }\n}\n\n// Add hover effects, but only for links\na.label {\n  &:hover,\n  &:focus {\n    color: $label-link-hover-color;\n    text-decoration: none;\n    cursor: pointer;\n  }\n}\n\n// Colors\n// Contextual variations (linked labels get darker on :hover)\n\n.label-default {\n  @include label-variant($label-default-bg);\n}\n\n.label-primary {\n  @include label-variant($label-primary-bg);\n}\n\n.label-success {\n  @include label-variant($label-success-bg);\n}\n\n.label-info {\n  @include label-variant($label-info-bg);\n}\n\n.label-warning {\n  @include label-variant($label-warning-bg);\n}\n\n.label-danger {\n  @include label-variant($label-danger-bg);\n}\n","// Labels\n\n@mixin label-variant($color) {\n  background-color: $color;\n\n  &[href] {\n    &:hover,\n    &:focus {\n      background-color: darken($color, 10%);\n    }\n  }\n}\n","//\n// Badges\n// --------------------------------------------------\n\n\n// Base class\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: $font-size-small;\n  font-weight: $badge-font-weight;\n  color: $badge-color;\n  line-height: $badge-line-height;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: center;\n  background-color: $badge-bg;\n  border-radius: $badge-border-radius;\n\n  // Empty badges collapse automatically (not available in IE8)\n  &:empty {\n    display: none;\n  }\n\n  // Quick fix for badges in buttons\n  .btn & {\n    position: relative;\n    top: -1px;\n  }\n\n  .btn-xs &,\n  .btn-group-xs > .btn & {\n    top: 0;\n    padding: 1px 5px;\n  }\n\n  // [converter] extracted a& to a.badge\n\n  // Account for badges in navs\n  .list-group-item.active > &,\n  .nav-pills > .active > a > & {\n    color: $badge-active-color;\n    background-color: $badge-active-bg;\n  }\n\n  .list-group-item > & {\n    float: right;\n  }\n\n  .list-group-item > & + & {\n    margin-right: 5px;\n  }\n\n  .nav-pills > li > a > & {\n    margin-left: 3px;\n  }\n}\n\n// Hover state, but only for links\na.badge {\n  &:hover,\n  &:focus {\n    color: $badge-link-hover-color;\n    text-decoration: none;\n    cursor: pointer;\n  }\n}\n","//\n// Jumbotron\n// --------------------------------------------------\n\n\n.jumbotron {\n  padding-top:    $jumbotron-padding;\n  padding-bottom: $jumbotron-padding;\n  margin-bottom: $jumbotron-padding;\n  color: $jumbotron-color;\n  background-color: $jumbotron-bg;\n\n  h1,\n  .h1 {\n    color: $jumbotron-heading-color;\n  }\n\n  p {\n    margin-bottom: ($jumbotron-padding / 2);\n    font-size: $jumbotron-font-size;\n    font-weight: 200;\n  }\n\n  > hr {\n    border-top-color: darken($jumbotron-bg, 10%);\n  }\n\n  .container &,\n  .container-fluid & {\n    border-radius: $border-radius-large; // Only round corners at higher resolutions if contained in a container\n    padding-left:  ($grid-gutter-width / 2);\n    padding-right: ($grid-gutter-width / 2);\n  }\n\n  .container {\n    max-width: 100%;\n  }\n\n  @media screen and (min-width: $screen-sm-min) {\n    padding-top:    ($jumbotron-padding * 1.6);\n    padding-bottom: ($jumbotron-padding * 1.6);\n\n    .container &,\n    .container-fluid & {\n      padding-left:  ($jumbotron-padding * 2);\n      padding-right: ($jumbotron-padding * 2);\n    }\n\n    h1,\n    .h1 {\n      font-size: $jumbotron-heading-font-size;\n    }\n  }\n}\n","//\n// Thumbnails\n// --------------------------------------------------\n\n\n// Mixin and adjust the regular image class\n.thumbnail {\n  display: block;\n  padding: $thumbnail-padding;\n  margin-bottom: $line-height-computed;\n  line-height: $line-height-base;\n  background-color: $thumbnail-bg;\n  border: 1px solid $thumbnail-border;\n  border-radius: $thumbnail-border-radius;\n  @include transition(border .2s ease-in-out);\n\n  > img,\n  a > img {\n    @include img-responsive;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  // [converter] extracted a&:hover, a&:focus, a&.active to a.thumbnail:hover, a.thumbnail:focus, a.thumbnail.active\n\n  // Image captions\n  .caption {\n    padding: $thumbnail-caption-padding;\n    color: $thumbnail-caption-color;\n  }\n}\n\n// Add a hover state for linked versions only\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: $link-color;\n}\n","//\n// Alerts\n// --------------------------------------------------\n\n\n// Base styles\n// -------------------------\n\n.alert {\n  padding: $alert-padding;\n  margin-bottom: $line-height-computed;\n  border: 1px solid transparent;\n  border-radius: $alert-border-radius;\n\n  // Headings for larger alerts\n  h4 {\n    margin-top: 0;\n    // Specified for the h4 to prevent conflicts of changing $headings-color\n    color: inherit;\n  }\n\n  // Provide class for links that match alerts\n  .alert-link {\n    font-weight: $alert-link-font-weight;\n  }\n\n  // Improve alignment and spacing of inner content\n  > p,\n  > ul {\n    margin-bottom: 0;\n  }\n\n  > p + p {\n    margin-top: 5px;\n  }\n}\n\n// Dismissible alerts\n//\n// Expand the right padding and account for the close button's positioning.\n\n.alert-dismissable, // The misspelled .alert-dismissable was deprecated in 3.2.0.\n.alert-dismissible {\n  padding-right: ($alert-padding + 20);\n\n  // Adjust close link position\n  .close {\n    position: relative;\n    top: -2px;\n    right: -21px;\n    color: inherit;\n  }\n}\n\n// Alternate styles\n//\n// Generate contextual modifier classes for colorizing the alert.\n\n.alert-success {\n  @include alert-variant($alert-success-bg, $alert-success-border, $alert-success-text);\n}\n\n.alert-info {\n  @include alert-variant($alert-info-bg, $alert-info-border, $alert-info-text);\n}\n\n.alert-warning {\n  @include alert-variant($alert-warning-bg, $alert-warning-border, $alert-warning-text);\n}\n\n.alert-danger {\n  @include alert-variant($alert-danger-bg, $alert-danger-border, $alert-danger-text);\n}\n","// Alerts\n\n@mixin alert-variant($background, $border, $text-color) {\n  background-color: $background;\n  border-color: $border;\n  color: $text-color;\n\n  hr {\n    border-top-color: darken($border, 5%);\n  }\n  .alert-link {\n    color: darken($text-color, 10%);\n  }\n}\n","//\n// Progress bars\n// --------------------------------------------------\n\n\n// Bar animations\n// -------------------------\n\n// WebKit\n@-webkit-keyframes progress-bar-stripes {\n  from  { background-position: 40px 0; }\n  to    { background-position: 0 0; }\n}\n\n// Spec and IE10+\n@keyframes progress-bar-stripes {\n  from  { background-position: 40px 0; }\n  to    { background-position: 0 0; }\n}\n\n\n// Bar itself\n// -------------------------\n\n// Outer container\n.progress {\n  overflow: hidden;\n  height: $line-height-computed;\n  margin-bottom: $line-height-computed;\n  background-color: $progress-bg;\n  border-radius: $progress-border-radius;\n  @include box-shadow(inset 0 1px 2px rgba(0,0,0,.1));\n}\n\n// Bar of progress\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: $font-size-small;\n  line-height: $line-height-computed;\n  color: $progress-bar-color;\n  text-align: center;\n  background-color: $progress-bar-bg;\n  @include box-shadow(inset 0 -1px 0 rgba(0,0,0,.15));\n  @include transition(width .6s ease);\n}\n\n// Striped bars\n//\n// `.progress-striped .progress-bar` is deprecated as of v3.2.0 in favor of the\n// `.progress-bar-striped` class, which you just add to an existing\n// `.progress-bar`.\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  @include gradient-striped;\n  background-size: 40px 40px;\n}\n\n// Call animation for the active one\n//\n// `.progress.active .progress-bar` is deprecated as of v3.2.0 in favor of the\n// `.progress-bar.active` approach.\n.progress.active .progress-bar,\n.progress-bar.active {\n  @include animation(progress-bar-stripes 2s linear infinite);\n}\n\n\n// Variations\n// -------------------------\n\n.progress-bar-success {\n  @include progress-bar-variant($progress-bar-success-bg);\n}\n\n.progress-bar-info {\n  @include progress-bar-variant($progress-bar-info-bg);\n}\n\n.progress-bar-warning {\n  @include progress-bar-variant($progress-bar-warning-bg);\n}\n\n.progress-bar-danger {\n  @include progress-bar-variant($progress-bar-danger-bg);\n}\n","// Gradients\n\n\n\n// Horizontal gradient, from left to right\n//\n// Creates two color stops, start and end, by specifying a color and position for each color stop.\n// Color stops are not available in IE9 and below.\n@mixin gradient-horizontal($start-color: #555, $end-color: #333, $start-percent: 0%, $end-percent: 100%) {\n  background-image: -webkit-linear-gradient(left, $start-color $start-percent, $end-color $end-percent); // Safari 5.1-6, Chrome 10+\n  background-image: -o-linear-gradient(left, $start-color $start-percent, $end-color $end-percent); // Opera 12\n  background-image: linear-gradient(to right, $start-color $start-percent, $end-color $end-percent); // Standard, IE10, Firefox 16+, Opera 12.10+, Safari 7+, Chrome 26+\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#{ie-hex-str($start-color)}', endColorstr='#{ie-hex-str($end-color)}', GradientType=1); // IE9 and down\n}\n\n// Vertical gradient, from top to bottom\n//\n// Creates two color stops, start and end, by specifying a color and position for each color stop.\n// Color stops are not available in IE9 and below.\n@mixin gradient-vertical($start-color: #555, $end-color: #333, $start-percent: 0%, $end-percent: 100%) {\n  background-image: -webkit-linear-gradient(top, $start-color $start-percent, $end-color $end-percent);  // Safari 5.1-6, Chrome 10+\n  background-image: -o-linear-gradient(top, $start-color $start-percent, $end-color $end-percent);  // Opera 12\n  background-image: linear-gradient(to bottom, $start-color $start-percent, $end-color $end-percent); // Standard, IE10, Firefox 16+, Opera 12.10+, Safari 7+, Chrome 26+\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#{ie-hex-str($start-color)}', endColorstr='#{ie-hex-str($end-color)}', GradientType=0); // IE9 and down\n}\n\n@mixin gradient-directional($start-color: #555, $end-color: #333, $deg: 45deg) {\n  background-repeat: repeat-x;\n  background-image: -webkit-linear-gradient($deg, $start-color, $end-color); // Safari 5.1-6, Chrome 10+\n  background-image: -o-linear-gradient($deg, $start-color, $end-color); // Opera 12\n  background-image: linear-gradient($deg, $start-color, $end-color); // Standard, IE10, Firefox 16+, Opera 12.10+, Safari 7+, Chrome 26+\n}\n@mixin gradient-horizontal-three-colors($start-color: #00b3ee, $mid-color: #7a43b6, $color-stop: 50%, $end-color: #c3325f) {\n  background-image: -webkit-linear-gradient(left, $start-color, $mid-color $color-stop, $end-color);\n  background-image: -o-linear-gradient(left, $start-color, $mid-color $color-stop, $end-color);\n  background-image: linear-gradient(to right, $start-color, $mid-color $color-stop, $end-color);\n  background-repeat: no-repeat;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#{ie-hex-str($start-color)}', endColorstr='#{ie-hex-str($end-color)}', GradientType=1); // IE9 and down, gets no color-stop at all for proper fallback\n}\n@mixin gradient-vertical-three-colors($start-color: #00b3ee, $mid-color: #7a43b6, $color-stop: 50%, $end-color: #c3325f) {\n  background-image: -webkit-linear-gradient($start-color, $mid-color $color-stop, $end-color);\n  background-image: -o-linear-gradient($start-color, $mid-color $color-stop, $end-color);\n  background-image: linear-gradient($start-color, $mid-color $color-stop, $end-color);\n  background-repeat: no-repeat;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#{ie-hex-str($start-color)}', endColorstr='#{ie-hex-str($end-color)}', GradientType=0); // IE9 and down, gets no color-stop at all for proper fallback\n}\n@mixin gradient-radial($inner-color: #555, $outer-color: #333) {\n  background-image: -webkit-radial-gradient(circle, $inner-color, $outer-color);\n  background-image: radial-gradient(circle, $inner-color, $outer-color);\n  background-repeat: no-repeat;\n}\n@mixin gradient-striped($color: rgba(255,255,255,.15), $angle: 45deg) {\n  background-image: -webkit-linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);\n  background-image: linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);\n}\n","// Progress bars\n\n@mixin progress-bar-variant($color) {\n  background-color: $color;\n\n  // Deprecated parent class requirement as of v3.2.0\n  .progress-striped & {\n    @include gradient-striped;\n  }\n}\n",".media {\n  // Proper spacing between instances of .media\n  margin-top: 15px;\n\n  &:first-child {\n    margin-top: 0;\n  }\n}\n\n.media,\n.media-body {\n  zoom: 1;\n  overflow: hidden;\n}\n\n.media-body {\n  width: 10000px;\n}\n\n.media-object {\n  display: block;\n\n  // Fix collapse in webkit from max-width: 100% and display: table-cell.\n  &.img-thumbnail {\n    max-width: none;\n  }\n}\n\n.media-right,\n.media > .pull-right {\n  padding-left: 10px;\n}\n\n.media-left,\n.media > .pull-left {\n  padding-right: 10px;\n}\n\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n\n.media-middle {\n  vertical-align: middle;\n}\n\n.media-bottom {\n  vertical-align: bottom;\n}\n\n// Reset margins on headings for tighter default spacing\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n// Media list variation\n//\n// Undo default ul/ol styles\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n","//\n// List groups\n// --------------------------------------------------\n\n\n// Base class\n//\n// Easily usable on <ul>, <ol>, or <div>.\n\n.list-group {\n  // No need to set list-style: none; since .list-group-item is block level\n  margin-bottom: 20px;\n  padding-left: 0; // reset padding because ul and ol\n}\n\n\n// Individual list items\n//\n// Use on `li`s or `div`s within the `.list-group` parent.\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  // Place the border on the list items and negative margin up for better styling\n  margin-bottom: -1px;\n  background-color: $list-group-bg;\n  border: 1px solid $list-group-border;\n\n  // Round the first and last items\n  &:first-child {\n    @include border-top-radius($list-group-border-radius);\n  }\n  &:last-child {\n    margin-bottom: 0;\n    @include border-bottom-radius($list-group-border-radius);\n  }\n}\n\n\n// Interactive list items\n//\n// Use anchor or button elements instead of `li`s or `div`s to create interactive items.\n// Includes an extra `.active` modifier class for showing selected items.\n\na.list-group-item,\nbutton.list-group-item {\n  color: $list-group-link-color;\n\n  .list-group-item-heading {\n    color: $list-group-link-heading-color;\n  }\n\n  // Hover state\n  &:hover,\n  &:focus {\n    text-decoration: none;\n    color: $list-group-link-hover-color;\n    background-color: $list-group-hover-bg;\n  }\n}\n\nbutton.list-group-item {\n  width: 100%;\n  text-align: left;\n}\n\n.list-group-item {\n  // Disabled state\n  &.disabled,\n  &.disabled:hover,\n  &.disabled:focus {\n    background-color: $list-group-disabled-bg;\n    color: $list-group-disabled-color;\n    cursor: $cursor-disabled;\n\n    // Force color to inherit for custom content\n    .list-group-item-heading {\n      color: inherit;\n    }\n    .list-group-item-text {\n      color: $list-group-disabled-text-color;\n    }\n  }\n\n  // Active class on item itself, not parent\n  &.active,\n  &.active:hover,\n  &.active:focus {\n    z-index: 2; // Place active items above their siblings for proper border styling\n    color: $list-group-active-color;\n    background-color: $list-group-active-bg;\n    border-color: $list-group-active-border;\n\n    // Force color to inherit for custom content\n    .list-group-item-heading,\n    .list-group-item-heading > small,\n    .list-group-item-heading > .small {\n      color: inherit;\n    }\n    .list-group-item-text {\n      color: $list-group-active-text-color;\n    }\n  }\n}\n\n\n// Contextual variants\n//\n// Add modifier classes to change text and background color on individual items.\n// Organizationally, this must come after the `:hover` states.\n\n@include list-group-item-variant(success, $state-success-bg, $state-success-text);\n@include list-group-item-variant(info, $state-info-bg, $state-info-text);\n@include list-group-item-variant(warning, $state-warning-bg, $state-warning-text);\n@include list-group-item-variant(danger, $state-danger-bg, $state-danger-text);\n\n\n// Custom content options\n//\n// Extra classes for creating well-formatted content within `.list-group-item`s.\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n","// List Groups\n\n@mixin list-group-item-variant($state, $background, $color) {\n  .list-group-item-#{$state} {\n    color: $color;\n    background-color: $background;\n\n    // [converter] extracted a&, button& to a.list-group-item-#{$state}, button.list-group-item-#{$state}\n  }\n\n  a.list-group-item-#{$state},\n  button.list-group-item-#{$state} {\n    color: $color;\n\n    .list-group-item-heading {\n      color: inherit;\n    }\n\n    &:hover,\n    &:focus {\n      color: $color;\n      background-color: darken($background, 5%);\n    }\n    &.active,\n    &.active:hover,\n    &.active:focus {\n      color: #fff;\n      background-color: $color;\n      border-color: $color;\n    }\n  }\n}\n","//\n// Panels\n// --------------------------------------------------\n\n\n// Base class\n.panel {\n  margin-bottom: $line-height-computed;\n  background-color: $panel-bg;\n  border: 1px solid transparent;\n  border-radius: $panel-border-radius;\n  @include box-shadow(0 1px 1px rgba(0,0,0,.05));\n}\n\n// Panel contents\n.panel-body {\n  padding: $panel-body-padding;\n  @include clearfix;\n}\n\n// Optional heading\n.panel-heading {\n  padding: $panel-heading-padding;\n  border-bottom: 1px solid transparent;\n  @include border-top-radius(($panel-border-radius - 1));\n\n  > .dropdown .dropdown-toggle {\n    color: inherit;\n  }\n}\n\n// Within heading, strip any `h*` tag of its default margins for spacing.\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: ceil(($font-size-base * 1.125));\n  color: inherit;\n\n  > a,\n  > small,\n  > .small,\n  > small > a,\n  > .small > a {\n    color: inherit;\n  }\n}\n\n// Optional footer (stays gray in every modifier class)\n.panel-footer {\n  padding: $panel-footer-padding;\n  background-color: $panel-footer-bg;\n  border-top: 1px solid $panel-inner-border;\n  @include border-bottom-radius(($panel-border-radius - 1));\n}\n\n\n// List groups in panels\n//\n// By default, space out list group content from panel headings to account for\n// any kind of custom content between the two.\n\n.panel {\n  > .list-group,\n  > .panel-collapse > .list-group {\n    margin-bottom: 0;\n\n    .list-group-item {\n      border-width: 1px 0;\n      border-radius: 0;\n    }\n\n    // Add border top radius for first one\n    &:first-child {\n      .list-group-item:first-child {\n        border-top: 0;\n        @include border-top-radius(($panel-border-radius - 1));\n      }\n    }\n\n    // Add border bottom radius for last one\n    &:last-child {\n      .list-group-item:last-child {\n        border-bottom: 0;\n        @include border-bottom-radius(($panel-border-radius - 1));\n      }\n    }\n  }\n  > .panel-heading + .panel-collapse > .list-group {\n    .list-group-item:first-child {\n      @include border-top-radius(0);\n    }\n  }\n}\n// Collapse space between when there's no additional content.\n.panel-heading + .list-group {\n  .list-group-item:first-child {\n    border-top-width: 0;\n  }\n}\n.list-group + .panel-footer {\n  border-top-width: 0;\n}\n\n// Tables in panels\n//\n// Place a non-bordered `.table` within a panel (not within a `.panel-body`) and\n// watch it go full width.\n\n.panel {\n  > .table,\n  > .table-responsive > .table,\n  > .panel-collapse > .table {\n    margin-bottom: 0;\n\n    caption {\n      padding-left: $panel-body-padding;\n      padding-right: $panel-body-padding;\n    }\n  }\n  // Add border top radius for first one\n  > .table:first-child,\n  > .table-responsive:first-child > .table:first-child {\n    @include border-top-radius(($panel-border-radius - 1));\n\n    > thead:first-child,\n    > tbody:first-child {\n      > tr:first-child {\n        border-top-left-radius: ($panel-border-radius - 1);\n        border-top-right-radius: ($panel-border-radius - 1);\n\n        td:first-child,\n        th:first-child {\n          border-top-left-radius: ($panel-border-radius - 1);\n        }\n        td:last-child,\n        th:last-child {\n          border-top-right-radius: ($panel-border-radius - 1);\n        }\n      }\n    }\n  }\n  // Add border bottom radius for last one\n  > .table:last-child,\n  > .table-responsive:last-child > .table:last-child {\n    @include border-bottom-radius(($panel-border-radius - 1));\n\n    > tbody:last-child,\n    > tfoot:last-child {\n      > tr:last-child {\n        border-bottom-left-radius: ($panel-border-radius - 1);\n        border-bottom-right-radius: ($panel-border-radius - 1);\n\n        td:first-child,\n        th:first-child {\n          border-bottom-left-radius: ($panel-border-radius - 1);\n        }\n        td:last-child,\n        th:last-child {\n          border-bottom-right-radius: ($panel-border-radius - 1);\n        }\n      }\n    }\n  }\n  > .panel-body + .table,\n  > .panel-body + .table-responsive,\n  > .table + .panel-body,\n  > .table-responsive + .panel-body {\n    border-top: 1px solid $table-border-color;\n  }\n  > .table > tbody:first-child > tr:first-child th,\n  > .table > tbody:first-child > tr:first-child td {\n    border-top: 0;\n  }\n  > .table-bordered,\n  > .table-responsive > .table-bordered {\n    border: 0;\n    > thead,\n    > tbody,\n    > tfoot {\n      > tr {\n        > th:first-child,\n        > td:first-child {\n          border-left: 0;\n        }\n        > th:last-child,\n        > td:last-child {\n          border-right: 0;\n        }\n      }\n    }\n    > thead,\n    > tbody {\n      > tr:first-child {\n        > td,\n        > th {\n          border-bottom: 0;\n        }\n      }\n    }\n    > tbody,\n    > tfoot {\n      > tr:last-child {\n        > td,\n        > th {\n          border-bottom: 0;\n        }\n      }\n    }\n  }\n  > .table-responsive {\n    border: 0;\n    margin-bottom: 0;\n  }\n}\n\n\n// Collapsible panels (aka, accordion)\n//\n// Wrap a series of panels in `.panel-group` to turn them into an accordion with\n// the help of our collapse JavaScript plugin.\n\n.panel-group {\n  margin-bottom: $line-height-computed;\n\n  // Tighten up margin so it's only between panels\n  .panel {\n    margin-bottom: 0;\n    border-radius: $panel-border-radius;\n\n    + .panel {\n      margin-top: 5px;\n    }\n  }\n\n  .panel-heading {\n    border-bottom: 0;\n\n    + .panel-collapse > .panel-body,\n    + .panel-collapse > .list-group {\n      border-top: 1px solid $panel-inner-border;\n    }\n  }\n\n  .panel-footer {\n    border-top: 0;\n    + .panel-collapse .panel-body {\n      border-bottom: 1px solid $panel-inner-border;\n    }\n  }\n}\n\n\n// Contextual variations\n.panel-default {\n  @include panel-variant($panel-default-border, $panel-default-text, $panel-default-heading-bg, $panel-default-border);\n}\n.panel-primary {\n  @include panel-variant($panel-primary-border, $panel-primary-text, $panel-primary-heading-bg, $panel-primary-border);\n}\n.panel-success {\n  @include panel-variant($panel-success-border, $panel-success-text, $panel-success-heading-bg, $panel-success-border);\n}\n.panel-info {\n  @include panel-variant($panel-info-border, $panel-info-text, $panel-info-heading-bg, $panel-info-border);\n}\n.panel-warning {\n  @include panel-variant($panel-warning-border, $panel-warning-text, $panel-warning-heading-bg, $panel-warning-border);\n}\n.panel-danger {\n  @include panel-variant($panel-danger-border, $panel-danger-text, $panel-danger-heading-bg, $panel-danger-border);\n}\n","// Panels\n\n@mixin panel-variant($border, $heading-text-color, $heading-bg-color, $heading-border) {\n  border-color: $border;\n\n  & > .panel-heading {\n    color: $heading-text-color;\n    background-color: $heading-bg-color;\n    border-color: $heading-border;\n\n    + .panel-collapse > .panel-body {\n      border-top-color: $border;\n    }\n    .badge {\n      color: $heading-bg-color;\n      background-color: $heading-text-color;\n    }\n  }\n  & > .panel-footer {\n    + .panel-collapse > .panel-body {\n      border-bottom-color: $border;\n    }\n  }\n}\n","// Embeds responsive\n//\n// Credit: Nicolas Gallagher and SUIT CSS.\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n\n  .embed-responsive-item,\n  iframe,\n  embed,\n  object,\n  video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    border: 0;\n  }\n}\n\n// Modifier class for 16:9 aspect ratio\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n\n// Modifier class for 4:3 aspect ratio\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n","//\n// Wells\n// --------------------------------------------------\n\n\n// Base class\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: $well-bg;\n  border: 1px solid $well-border;\n  border-radius: $border-radius-base;\n  @include box-shadow(inset 0 1px 1px rgba(0,0,0,.05));\n  blockquote {\n    border-color: #ddd;\n    border-color: rgba(0,0,0,.15);\n  }\n}\n\n// Sizes\n.well-lg {\n  padding: 24px;\n  border-radius: $border-radius-large;\n}\n.well-sm {\n  padding: 9px;\n  border-radius: $border-radius-small;\n}\n","//\n// Close icons\n// --------------------------------------------------\n\n\n.close {\n  float: right;\n  font-size: ($font-size-base * 1.5);\n  font-weight: $close-font-weight;\n  line-height: 1;\n  color: $close-color;\n  text-shadow: $close-text-shadow;\n  @include opacity(.2);\n\n  &:hover,\n  &:focus {\n    color: $close-color;\n    text-decoration: none;\n    cursor: pointer;\n    @include opacity(.5);\n  }\n\n  // [converter] extracted button& to button.close\n}\n\n// Additional properties for button version\n// iOS requires the button element instead of an anchor tag.\n// If you want the anchor version, it requires `href=\"#\"`.\n// See https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}\n","//\n// Modals\n// --------------------------------------------------\n\n// .modal-open      - body class for killing the scroll\n// .modal           - container to scroll within\n// .modal-dialog    - positioning shell for the actual modal\n// .modal-content   - actual modal w/ bg and corners and shit\n\n// Kill the scroll on the body\n.modal-open {\n  overflow: hidden;\n}\n\n// Container that the modal scrolls within\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: $zindex-modal;\n  -webkit-overflow-scrolling: touch;\n\n  // Prevent Chrome on Windows from adding a focus outline. For details, see\n  // https://github.com/twbs/bootstrap/pull/10951.\n  outline: 0;\n\n  // When fading in the modal, animate it to slide down\n  &.fade .modal-dialog {\n    @include translate(0, -25%);\n    @include transition-transform(0.3s ease-out);\n  }\n  &.in .modal-dialog { @include translate(0, 0) }\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n// Shell div to position the modal with bottom padding\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n\n// Actual modal\n.modal-content {\n  position: relative;\n  background-color: $modal-content-bg;\n  border: 1px solid $modal-content-fallback-border-color; //old browsers fallback (ie8 etc)\n  border: 1px solid $modal-content-border-color;\n  border-radius: $border-radius-large;\n  @include box-shadow(0 3px 9px rgba(0,0,0,.5));\n  background-clip: padding-box;\n  // Remove focus outline from opened modal\n  outline: 0;\n}\n\n// Modal background\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: $zindex-modal-background;\n  background-color: $modal-backdrop-bg;\n  // Fade for backdrop\n  &.fade { @include opacity(0); }\n  &.in { @include opacity($modal-backdrop-opacity); }\n}\n\n// Modal header\n// Top section of the modal w/ title and dismiss\n.modal-header {\n  padding: $modal-title-padding;\n  border-bottom: 1px solid $modal-header-border-color;\n  @include clearfix;\n}\n// Close icon\n.modal-header .close {\n  margin-top: -2px;\n}\n\n// Title text within header\n.modal-title {\n  margin: 0;\n  line-height: $modal-title-line-height;\n}\n\n// Modal body\n// Where all modal content resides (sibling of .modal-header and .modal-footer)\n.modal-body {\n  position: relative;\n  padding: $modal-inner-padding;\n}\n\n// Footer (for actions)\n.modal-footer {\n  padding: $modal-inner-padding;\n  text-align: right; // right align buttons\n  border-top: 1px solid $modal-footer-border-color;\n  @include clearfix; // clear it in case folks use .pull-* classes on buttons\n\n  // Properly space out buttons\n  .btn + .btn {\n    margin-left: 5px;\n    margin-bottom: 0; // account for input[type=\"submit\"] which gets the bottom margin like all other inputs\n  }\n  // but override that for button groups\n  .btn-group .btn + .btn {\n    margin-left: -1px;\n  }\n  // and override it for block buttons as well\n  .btn-block + .btn-block {\n    margin-left: 0;\n  }\n}\n\n// Measure scrollbar width for padding body during modal show/hide\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n\n// Scale up the modal\n@media (min-width: $screen-sm-min) {\n  // Automatically set modal's width for larger viewports\n  .modal-dialog {\n    width: $modal-md;\n    margin: 30px auto;\n  }\n  .modal-content {\n    @include box-shadow(0 5px 15px rgba(0,0,0,.5));\n  }\n\n  // Modal sizes\n  .modal-sm { width: $modal-sm; }\n}\n\n@media (min-width: $screen-md-min) {\n  .modal-lg { width: $modal-lg; }\n}\n","//\n// Tooltips\n// --------------------------------------------------\n\n\n// Base class\n.tooltip {\n  position: absolute;\n  z-index: $zindex-tooltip;\n  display: block;\n  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.\n  // So reset our font and text properties to avoid inheriting weird values.\n  @include reset-text;\n  font-size: $font-size-small;\n\n  @include opacity(0);\n\n  &.in     { @include opacity($tooltip-opacity); }\n  &.top    { margin-top:  -3px; padding: $tooltip-arrow-width 0; }\n  &.right  { margin-left:  3px; padding: 0 $tooltip-arrow-width; }\n  &.bottom { margin-top:   3px; padding: $tooltip-arrow-width 0; }\n  &.left   { margin-left: -3px; padding: 0 $tooltip-arrow-width; }\n}\n\n// Wrapper for the tooltip content\n.tooltip-inner {\n  max-width: $tooltip-max-width;\n  padding: 3px 8px;\n  color: $tooltip-color;\n  text-align: center;\n  background-color: $tooltip-bg;\n  border-radius: $border-radius-base;\n}\n\n// Arrows\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n// Note: Deprecated .top-left, .top-right, .bottom-left, and .bottom-right as of v3.3.1\n.tooltip {\n  &.top .tooltip-arrow {\n    bottom: 0;\n    left: 50%;\n    margin-left: -$tooltip-arrow-width;\n    border-width: $tooltip-arrow-width $tooltip-arrow-width 0;\n    border-top-color: $tooltip-arrow-color;\n  }\n  &.top-left .tooltip-arrow {\n    bottom: 0;\n    right: $tooltip-arrow-width;\n    margin-bottom: -$tooltip-arrow-width;\n    border-width: $tooltip-arrow-width $tooltip-arrow-width 0;\n    border-top-color: $tooltip-arrow-color;\n  }\n  &.top-right .tooltip-arrow {\n    bottom: 0;\n    left: $tooltip-arrow-width;\n    margin-bottom: -$tooltip-arrow-width;\n    border-width: $tooltip-arrow-width $tooltip-arrow-width 0;\n    border-top-color: $tooltip-arrow-color;\n  }\n  &.right .tooltip-arrow {\n    top: 50%;\n    left: 0;\n    margin-top: -$tooltip-arrow-width;\n    border-width: $tooltip-arrow-width $tooltip-arrow-width $tooltip-arrow-width 0;\n    border-right-color: $tooltip-arrow-color;\n  }\n  &.left .tooltip-arrow {\n    top: 50%;\n    right: 0;\n    margin-top: -$tooltip-arrow-width;\n    border-width: $tooltip-arrow-width 0 $tooltip-arrow-width $tooltip-arrow-width;\n    border-left-color: $tooltip-arrow-color;\n  }\n  &.bottom .tooltip-arrow {\n    top: 0;\n    left: 50%;\n    margin-left: -$tooltip-arrow-width;\n    border-width: 0 $tooltip-arrow-width $tooltip-arrow-width;\n    border-bottom-color: $tooltip-arrow-color;\n  }\n  &.bottom-left .tooltip-arrow {\n    top: 0;\n    right: $tooltip-arrow-width;\n    margin-top: -$tooltip-arrow-width;\n    border-width: 0 $tooltip-arrow-width $tooltip-arrow-width;\n    border-bottom-color: $tooltip-arrow-color;\n  }\n  &.bottom-right .tooltip-arrow {\n    top: 0;\n    left: $tooltip-arrow-width;\n    margin-top: -$tooltip-arrow-width;\n    border-width: 0 $tooltip-arrow-width $tooltip-arrow-width;\n    border-bottom-color: $tooltip-arrow-color;\n  }\n}\n","@mixin reset-text() {\n  font-family: $font-family-base;\n  // We deliberately do NOT reset font-size.\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: $line-height-base;\n  text-align: left; // Fallback for where `start` is not supported\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n}\n","//\n// Popovers\n// --------------------------------------------------\n\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: $zindex-popover;\n  display: none;\n  max-width: $popover-max-width;\n  padding: 1px;\n  // Our parent element can be arbitrary since popovers are by default inserted as a sibling of their target element.\n  // So reset our font and text properties to avoid inheriting weird values.\n  @include reset-text;\n  font-size: $font-size-base;\n\n  background-color: $popover-bg;\n  background-clip: padding-box;\n  border: 1px solid $popover-fallback-border-color;\n  border: 1px solid $popover-border-color;\n  border-radius: $border-radius-large;\n  @include box-shadow(0 5px 10px rgba(0,0,0,.2));\n\n  // Offset the popover to account for the popover arrow\n  &.top     { margin-top: -$popover-arrow-width; }\n  &.right   { margin-left: $popover-arrow-width; }\n  &.bottom  { margin-top: $popover-arrow-width; }\n  &.left    { margin-left: -$popover-arrow-width; }\n}\n\n.popover-title {\n  margin: 0; // reset heading margin\n  padding: 8px 14px;\n  font-size: $font-size-base;\n  background-color: $popover-title-bg;\n  border-bottom: 1px solid darken($popover-title-bg, 5%);\n  border-radius: ($border-radius-large - 1) ($border-radius-large - 1) 0 0;\n}\n\n.popover-content {\n  padding: 9px 14px;\n}\n\n// Arrows\n//\n// .arrow is outer, .arrow:after is inner\n\n.popover > .arrow {\n  &,\n  &:after {\n    position: absolute;\n    display: block;\n    width: 0;\n    height: 0;\n    border-color: transparent;\n    border-style: solid;\n  }\n}\n.popover > .arrow {\n  border-width: $popover-arrow-outer-width;\n}\n.popover > .arrow:after {\n  border-width: $popover-arrow-width;\n  content: \"\";\n}\n\n.popover {\n  &.top > .arrow {\n    left: 50%;\n    margin-left: -$popover-arrow-outer-width;\n    border-bottom-width: 0;\n    border-top-color: $popover-arrow-outer-fallback-color; // IE8 fallback\n    border-top-color: $popover-arrow-outer-color;\n    bottom: -$popover-arrow-outer-width;\n    &:after {\n      content: \" \";\n      bottom: 1px;\n      margin-left: -$popover-arrow-width;\n      border-bottom-width: 0;\n      border-top-color: $popover-arrow-color;\n    }\n  }\n  &.right > .arrow {\n    top: 50%;\n    left: -$popover-arrow-outer-width;\n    margin-top: -$popover-arrow-outer-width;\n    border-left-width: 0;\n    border-right-color: $popover-arrow-outer-fallback-color; // IE8 fallback\n    border-right-color: $popover-arrow-outer-color;\n    &:after {\n      content: \" \";\n      left: 1px;\n      bottom: -$popover-arrow-width;\n      border-left-width: 0;\n      border-right-color: $popover-arrow-color;\n    }\n  }\n  &.bottom > .arrow {\n    left: 50%;\n    margin-left: -$popover-arrow-outer-width;\n    border-top-width: 0;\n    border-bottom-color: $popover-arrow-outer-fallback-color; // IE8 fallback\n    border-bottom-color: $popover-arrow-outer-color;\n    top: -$popover-arrow-outer-width;\n    &:after {\n      content: \" \";\n      top: 1px;\n      margin-left: -$popover-arrow-width;\n      border-top-width: 0;\n      border-bottom-color: $popover-arrow-color;\n    }\n  }\n\n  &.left > .arrow {\n    top: 50%;\n    right: -$popover-arrow-outer-width;\n    margin-top: -$popover-arrow-outer-width;\n    border-right-width: 0;\n    border-left-color: $popover-arrow-outer-fallback-color; // IE8 fallback\n    border-left-color: $popover-arrow-outer-color;\n    &:after {\n      content: \" \";\n      right: 1px;\n      border-right-width: 0;\n      border-left-color: $popover-arrow-color;\n      bottom: -$popover-arrow-width;\n    }\n  }\n}\n","//\n// Carousel\n// --------------------------------------------------\n\n\n// Wrapper for the slide container and indicators\n.carousel {\n  position: relative;\n}\n\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n\n  > .item {\n    display: none;\n    position: relative;\n    @include transition(.6s ease-in-out left);\n\n    // Account for jankitude on images\n    > img,\n    > a > img {\n      @include img-responsive;\n      line-height: 1;\n    }\n\n    // WebKit CSS3 transforms for supported devices\n    @media all and (transform-3d), (-webkit-transform-3d) {\n      @include transition-transform(0.6s ease-in-out);\n      @include backface-visibility(hidden);\n      @include perspective(1000px);\n\n      &.next,\n      &.active.right {\n        @include translate3d(100%, 0, 0);\n        left: 0;\n      }\n      &.prev,\n      &.active.left {\n        @include translate3d(-100%, 0, 0);\n        left: 0;\n      }\n      &.next.left,\n      &.prev.right,\n      &.active {\n        @include translate3d(0, 0, 0);\n        left: 0;\n      }\n    }\n  }\n\n  > .active,\n  > .next,\n  > .prev {\n    display: block;\n  }\n\n  > .active {\n    left: 0;\n  }\n\n  > .next,\n  > .prev {\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  > .next {\n    left: 100%;\n  }\n  > .prev {\n    left: -100%;\n  }\n  > .next.left,\n  > .prev.right {\n    left: 0;\n  }\n\n  > .active.left {\n    left: -100%;\n  }\n  > .active.right {\n    left: 100%;\n  }\n\n}\n\n// Left/right controls for nav\n// ---------------------------\n\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: $carousel-control-width;\n  @include opacity($carousel-control-opacity);\n  font-size: $carousel-control-font-size;\n  color: $carousel-control-color;\n  text-align: center;\n  text-shadow: $carousel-text-shadow;\n  background-color: rgba(0, 0, 0, 0); // Fix IE9 click-thru bug\n  // We can't have this transition here because WebKit cancels the carousel\n  // animation if you trip this while in the middle of another animation.\n\n  // Set gradients for backgrounds\n  &.left {\n    @include gradient-horizontal($start-color: rgba(0,0,0,.5), $end-color: rgba(0,0,0,.0001));\n  }\n  &.right {\n    left: auto;\n    right: 0;\n    @include gradient-horizontal($start-color: rgba(0,0,0,.0001), $end-color: rgba(0,0,0,.5));\n  }\n\n  // Hover/focus state\n  &:hover,\n  &:focus {\n    outline: 0;\n    color: $carousel-control-color;\n    text-decoration: none;\n    @include opacity(.9);\n  }\n\n  // Toggles\n  .icon-prev,\n  .icon-next,\n  .glyphicon-chevron-left,\n  .glyphicon-chevron-right {\n    position: absolute;\n    top: 50%;\n    margin-top: -10px;\n    z-index: 5;\n    display: inline-block;\n  }\n  .icon-prev,\n  .glyphicon-chevron-left {\n    left: 50%;\n    margin-left: -10px;\n  }\n  .icon-next,\n  .glyphicon-chevron-right {\n    right: 50%;\n    margin-right: -10px;\n  }\n  .icon-prev,\n  .icon-next {\n    width:  20px;\n    height: 20px;\n    line-height: 1;\n    font-family: serif;\n  }\n\n\n  .icon-prev {\n    &:before {\n      content: '\\2039';// SINGLE LEFT-POINTING ANGLE QUOTATION MARK (U+2039)\n    }\n  }\n  .icon-next {\n    &:before {\n      content: '\\203a';// SINGLE RIGHT-POINTING ANGLE QUOTATION MARK (U+203A)\n    }\n  }\n}\n\n// Optional indicator pips\n//\n// Add an unordered list with the following class and add a list item for each\n// slide your carousel holds.\n\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center;\n\n  li {\n    display: inline-block;\n    width:  10px;\n    height: 10px;\n    margin: 1px;\n    text-indent: -999px;\n    border: 1px solid $carousel-indicator-border-color;\n    border-radius: 10px;\n    cursor: pointer;\n\n    // IE8-9 hack for event handling\n    //\n    // Internet Explorer 8-9 does not support clicks on elements without a set\n    // `background-color`. We cannot use `filter` since that's not viewed as a\n    // background color by the browser. Thus, a hack is needed.\n    // See https://developer.mozilla.org/en-US/docs/Web/Events/click#Internet_Explorer\n    //\n    // For IE8, we set solid black as it doesn't support `rgba()`. For IE9, we\n    // set alpha transparency for the best results possible.\n    background-color: #000 \\9; // IE8\n    background-color: rgba(0,0,0,0); // IE9\n  }\n  .active {\n    margin: 0;\n    width:  12px;\n    height: 12px;\n    background-color: $carousel-indicator-active-bg;\n  }\n}\n\n// Optional captions\n// -----------------------------\n// Hidden by default for smaller viewports\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: $carousel-caption-color;\n  text-align: center;\n  text-shadow: $carousel-text-shadow;\n  & .btn {\n    text-shadow: none; // No shadow for button elements in carousel-caption\n  }\n}\n\n\n// Scale up controls for tablets and up\n@media screen and (min-width: $screen-sm-min) {\n\n  // Scale up the controls a smidge\n  .carousel-control {\n    .glyphicon-chevron-left,\n    .glyphicon-chevron-right,\n    .icon-prev,\n    .icon-next {\n      width: ($carousel-control-font-size * 1.5);\n      height: ($carousel-control-font-size * 1.5);\n      margin-top: ($carousel-control-font-size / -2);\n      font-size: ($carousel-control-font-size * 1.5);\n    }\n    .glyphicon-chevron-left,\n    .icon-prev {\n      margin-left: ($carousel-control-font-size / -2);\n    }\n    .glyphicon-chevron-right,\n    .icon-next {\n      margin-right: ($carousel-control-font-size / -2);\n    }\n  }\n\n  // Show and left align the captions\n  .carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px;\n  }\n\n  // Move up the indicators\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n","//\n// Utility classes\n// --------------------------------------------------\n\n\n// Floats\n// -------------------------\n\n.clearfix {\n  @include clearfix;\n}\n.center-block {\n  @include center-block;\n}\n.pull-right {\n  float: right !important;\n}\n.pull-left {\n  float: left !important;\n}\n\n\n// Toggling content\n// -------------------------\n\n// Note: Deprecated .hide in favor of .hidden or .sr-only (as appropriate) in v3.0.1\n.hide {\n  display: none !important;\n}\n.show {\n  display: block !important;\n}\n.invisible {\n  visibility: hidden;\n}\n.text-hide {\n  @include text-hide;\n}\n\n\n// Hide from screenreaders and browsers\n//\n// Credit: HTML5 Boilerplate\n\n.hidden {\n  display: none !important;\n}\n\n\n// For Affix plugin\n// -------------------------\n\n.affix {\n  position: fixed;\n}\n","// Center-align a block level element\n\n@mixin center-block() {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n","// CSS image replacement\n//\n// Heads up! v3 launched with only `.hide-text()`, but per our pattern for\n// mixins being reused as classes with the same name, this doesn't hold up. As\n// of v3.0.1 we have added `.text-hide()` and deprecated `.hide-text()`.\n//\n// Source: https://github.com/h5bp/html5-boilerplate/commit/aa0396eae757\n\n// Deprecated as of v3.0.1 (has been removed in v4)\n@mixin hide-text() {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n\n// New mixin to use as of v3.0.1\n@mixin text-hide() {\n  @include hide-text;\n}\n","//\n// Responsive: Utility classes\n// --------------------------------------------------\n\n\n// IE10 in Windows (Phone) 8\n//\n// Support for responsive views via media queries is kind of borked in IE10, for\n// Surface/desktop in split view and for Windows Phone 8. This particular fix\n// must be accompanied by a snippet of JavaScript to sniff the user agent and\n// apply some conditional CSS to *only* the Surface/desktop Windows 8. Look at\n// our Getting Started page for more information on this bug.\n//\n// For more information, see the following:\n//\n// Issue: https://github.com/twbs/bootstrap/issues/10497\n// Docs: http://getbootstrap.com/getting-started/#support-ie10-width\n// Source: http://timkadlec.com/2013/01/windows-phone-8-and-device-width/\n// Source: http://timkadlec.com/2012/10/ie10-snap-mode-and-responsive-design/\n\n@at-root {\n  @-ms-viewport {\n    width: device-width;\n  }\n}\n\n\n// Visibility utilities\n// Note: Deprecated .visible-xs, .visible-sm, .visible-md, and .visible-lg as of v3.2.0\n\n@include responsive-invisibility('.visible-xs');\n@include responsive-invisibility('.visible-sm');\n@include responsive-invisibility('.visible-md');\n@include responsive-invisibility('.visible-lg');\n\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n\n@media (max-width: $screen-xs-max) {\n  @include responsive-visibility('.visible-xs');\n}\n.visible-xs-block {\n  @media (max-width: $screen-xs-max) {\n    display: block !important;\n  }\n}\n.visible-xs-inline {\n  @media (max-width: $screen-xs-max) {\n    display: inline !important;\n  }\n}\n.visible-xs-inline-block {\n  @media (max-width: $screen-xs-max) {\n    display: inline-block !important;\n  }\n}\n\n@media (min-width: $screen-sm-min) and (max-width: $screen-sm-max) {\n  @include responsive-visibility('.visible-sm');\n}\n.visible-sm-block {\n  @media (min-width: $screen-sm-min) and (max-width: $screen-sm-max) {\n    display: block !important;\n  }\n}\n.visible-sm-inline {\n  @media (min-width: $screen-sm-min) and (max-width: $screen-sm-max) {\n    display: inline !important;\n  }\n}\n.visible-sm-inline-block {\n  @media (min-width: $screen-sm-min) and (max-width: $screen-sm-max) {\n    display: inline-block !important;\n  }\n}\n\n@media (min-width: $screen-md-min) and (max-width: $screen-md-max) {\n  @include responsive-visibility('.visible-md');\n}\n.visible-md-block {\n  @media (min-width: $screen-md-min) and (max-width: $screen-md-max) {\n    display: block !important;\n  }\n}\n.visible-md-inline {\n  @media (min-width: $screen-md-min) and (max-width: $screen-md-max) {\n    display: inline !important;\n  }\n}\n.visible-md-inline-block {\n  @media (min-width: $screen-md-min) and (max-width: $screen-md-max) {\n    display: inline-block !important;\n  }\n}\n\n@media (min-width: $screen-lg-min) {\n  @include responsive-visibility('.visible-lg');\n}\n.visible-lg-block {\n  @media (min-width: $screen-lg-min) {\n    display: block !important;\n  }\n}\n.visible-lg-inline {\n  @media (min-width: $screen-lg-min) {\n    display: inline !important;\n  }\n}\n.visible-lg-inline-block {\n  @media (min-width: $screen-lg-min) {\n    display: inline-block !important;\n  }\n}\n\n@media (max-width: $screen-xs-max) {\n  @include responsive-invisibility('.hidden-xs');\n}\n\n@media (min-width: $screen-sm-min) and (max-width: $screen-sm-max) {\n  @include responsive-invisibility('.hidden-sm');\n}\n\n@media (min-width: $screen-md-min) and (max-width: $screen-md-max) {\n  @include responsive-invisibility('.hidden-md');\n}\n\n@media (min-width: $screen-lg-min) {\n  @include responsive-invisibility('.hidden-lg');\n}\n\n\n// Print utilities\n//\n// Media queries are placed on the inside to be mixin-friendly.\n\n// Note: Deprecated .visible-print as of v3.2.0\n\n@include responsive-invisibility('.visible-print');\n\n@media print {\n  @include responsive-visibility('.visible-print');\n}\n.visible-print-block {\n  display: none !important;\n\n  @media print {\n    display: block !important;\n  }\n}\n.visible-print-inline {\n  display: none !important;\n\n  @media print {\n    display: inline !important;\n  }\n}\n.visible-print-inline-block {\n  display: none !important;\n\n  @media print {\n    display: inline-block !important;\n  }\n}\n\n@media print {\n  @include responsive-invisibility('.hidden-print');\n}\n","// Responsive utilities\n\n//\n// More easily include all the states for responsive-utilities.less.\n// [converter] $parent hack\n@mixin responsive-visibility($parent) {\n  #{$parent} {\n    display: block !important;\n  }\n  table#{$parent}  { display: table !important; }\n  tr#{$parent}     { display: table-row !important; }\n  th#{$parent},\n  td#{$parent}     { display: table-cell !important; }\n}\n\n// [converter] $parent hack\n@mixin responsive-invisibility($parent) {\n  #{$parent} {\n    display: none !important;\n  }\n}\n","$icon-font-path: \"~bootstrap-sass/assets/fonts/bootstrap/\";\n@import '~bootstrap-sass/assets/stylesheets/_bootstrap.scss';\n\n.wpng-resource-list {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\n\tli {\n\t\tlist-style-type: none;\n\t\twidth: 33%;\n\t\tdisplay: inline-block;\n\n\t\ta {\n\t\t\tfont-size: 1.1em;\n\t\t\tfont-weight: bold;\n\t\t\tdisplay: block;\n\t\t}\n\t}\n}\n\n.wpng-resource-list-body {\n\tpadding: 0;\n}\n\n.wpng-resource-list-placeholder {\n\tmargin: .7em;\n}\n\n.wpng-resource-list-info {\n\tcolor: #999999;\n\tfont-size: 0.9em;\n\n\tspan {\n\t\tfont-style: italic;\n\t}\n}\n\n@media only screen and (min-width : 1600px){\n\t.wpng-resource-list {\n\t\tli {\n\t\t\twidth: 25%;\n\t\t}\n\t}\n}\n\n@media only screen and (max-width : 900px){\n\t.wpng-resource-list {\n\t\tli {\n\t\t\twidth: 50%;\n\t\t}\n\t}\n}\n\n@media only screen and (max-width : 700px){\n\t.wpng-resource-list {\n\t\tli {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n\n\t.wpng-resource-list-placeholder {\n\t\tmargin: .7em .2em;\n\t}\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/html-entities/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  XmlEntities: __webpack_require__("./node_modules/html-entities/lib/xml-entities.js"),
  Html4Entities: __webpack_require__("./node_modules/html-entities/lib/html4-entities.js"),
  Html5Entities: __webpack_require__("./node_modules/html-entities/lib/html5-entities.js"),
  AllHtmlEntities: __webpack_require__("./node_modules/html-entities/lib/html5-entities.js")
};


/***/ }),

/***/ "./node_modules/html-entities/lib/html4-entities.js":
/***/ (function(module, exports) {

var HTML_ALPHA = ['apos', 'nbsp', 'iexcl', 'cent', 'pound', 'curren', 'yen', 'brvbar', 'sect', 'uml', 'copy', 'ordf', 'laquo', 'not', 'shy', 'reg', 'macr', 'deg', 'plusmn', 'sup2', 'sup3', 'acute', 'micro', 'para', 'middot', 'cedil', 'sup1', 'ordm', 'raquo', 'frac14', 'frac12', 'frac34', 'iquest', 'Agrave', 'Aacute', 'Acirc', 'Atilde', 'Auml', 'Aring', 'Aelig', 'Ccedil', 'Egrave', 'Eacute', 'Ecirc', 'Euml', 'Igrave', 'Iacute', 'Icirc', 'Iuml', 'ETH', 'Ntilde', 'Ograve', 'Oacute', 'Ocirc', 'Otilde', 'Ouml', 'times', 'Oslash', 'Ugrave', 'Uacute', 'Ucirc', 'Uuml', 'Yacute', 'THORN', 'szlig', 'agrave', 'aacute', 'acirc', 'atilde', 'auml', 'aring', 'aelig', 'ccedil', 'egrave', 'eacute', 'ecirc', 'euml', 'igrave', 'iacute', 'icirc', 'iuml', 'eth', 'ntilde', 'ograve', 'oacute', 'ocirc', 'otilde', 'ouml', 'divide', 'oslash', 'ugrave', 'uacute', 'ucirc', 'uuml', 'yacute', 'thorn', 'yuml', 'quot', 'amp', 'lt', 'gt', 'OElig', 'oelig', 'Scaron', 'scaron', 'Yuml', 'circ', 'tilde', 'ensp', 'emsp', 'thinsp', 'zwnj', 'zwj', 'lrm', 'rlm', 'ndash', 'mdash', 'lsquo', 'rsquo', 'sbquo', 'ldquo', 'rdquo', 'bdquo', 'dagger', 'Dagger', 'permil', 'lsaquo', 'rsaquo', 'euro', 'fnof', 'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa', 'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma', 'Tau', 'Upsilon', 'Phi', 'Chi', 'Psi', 'Omega', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigmaf', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega', 'thetasym', 'upsih', 'piv', 'bull', 'hellip', 'prime', 'Prime', 'oline', 'frasl', 'weierp', 'image', 'real', 'trade', 'alefsym', 'larr', 'uarr', 'rarr', 'darr', 'harr', 'crarr', 'lArr', 'uArr', 'rArr', 'dArr', 'hArr', 'forall', 'part', 'exist', 'empty', 'nabla', 'isin', 'notin', 'ni', 'prod', 'sum', 'minus', 'lowast', 'radic', 'prop', 'infin', 'ang', 'and', 'or', 'cap', 'cup', 'int', 'there4', 'sim', 'cong', 'asymp', 'ne', 'equiv', 'le', 'ge', 'sub', 'sup', 'nsub', 'sube', 'supe', 'oplus', 'otimes', 'perp', 'sdot', 'lceil', 'rceil', 'lfloor', 'rfloor', 'lang', 'rang', 'loz', 'spades', 'clubs', 'hearts', 'diams'];
var HTML_CODES = [39, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 34, 38, 60, 62, 338, 339, 352, 353, 376, 710, 732, 8194, 8195, 8201, 8204, 8205, 8206, 8207, 8211, 8212, 8216, 8217, 8218, 8220, 8221, 8222, 8224, 8225, 8240, 8249, 8250, 8364, 402, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 931, 932, 933, 934, 935, 936, 937, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 977, 978, 982, 8226, 8230, 8242, 8243, 8254, 8260, 8472, 8465, 8476, 8482, 8501, 8592, 8593, 8594, 8595, 8596, 8629, 8656, 8657, 8658, 8659, 8660, 8704, 8706, 8707, 8709, 8711, 8712, 8713, 8715, 8719, 8721, 8722, 8727, 8730, 8733, 8734, 8736, 8743, 8744, 8745, 8746, 8747, 8756, 8764, 8773, 8776, 8800, 8801, 8804, 8805, 8834, 8835, 8836, 8838, 8839, 8853, 8855, 8869, 8901, 8968, 8969, 8970, 8971, 9001, 9002, 9674, 9824, 9827, 9829, 9830];

var alphaIndex = {};
var numIndex = {};

var i = 0;
var length = HTML_ALPHA.length;
while (i < length) {
    var a = HTML_ALPHA[i];
    var c = HTML_CODES[i];
    alphaIndex[a] = String.fromCharCode(c);
    numIndex[c] = a;
    i++;
}

/**
 * @constructor
 */
function Html4Entities() {}

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.prototype.decode = function(str) {
    if (!str || !str.length) {
        return '';
    }
    return str.replace(/&(#?[\w\d]+);?/g, function(s, entity) {
        var chr;
        if (entity.charAt(0) === "#") {
            var code = entity.charAt(1).toLowerCase() === 'x' ?
                parseInt(entity.substr(2), 16) :
                parseInt(entity.substr(1));

            if (!(isNaN(code) || code < -32768 || code > 65535)) {
                chr = String.fromCharCode(code);
            }
        } else {
            chr = alphaIndex[entity];
        }
        return chr || s;
    });
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.decode = function(str) {
    return new Html4Entities().decode(str);
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.prototype.encode = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var alpha = numIndex[str.charCodeAt(i)];
        result += alpha ? "&" + alpha + ";" : str.charAt(i);
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.encode = function(str) {
    return new Html4Entities().encode(str);
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.prototype.encodeNonUTF = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var cc = str.charCodeAt(i);
        var alpha = numIndex[cc];
        if (alpha) {
            result += "&" + alpha + ";";
        } else if (cc < 32 || cc > 126) {
            result += "&#" + cc + ";";
        } else {
            result += str.charAt(i);
        }
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.encodeNonUTF = function(str) {
    return new Html4Entities().encodeNonUTF(str);
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.prototype.encodeNonASCII = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var c = str.charCodeAt(i);
        if (c <= 255) {
            result += str[i++];
            continue;
        }
        result += '&#' + c + ';';
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.encodeNonASCII = function(str) {
    return new Html4Entities().encodeNonASCII(str);
};

module.exports = Html4Entities;


/***/ }),

/***/ "./node_modules/html-entities/lib/html5-entities.js":
/***/ (function(module, exports) {

var ENTITIES = [['Aacute', [193]], ['aacute', [225]], ['Abreve', [258]], ['abreve', [259]], ['ac', [8766]], ['acd', [8767]], ['acE', [8766, 819]], ['Acirc', [194]], ['acirc', [226]], ['acute', [180]], ['Acy', [1040]], ['acy', [1072]], ['AElig', [198]], ['aelig', [230]], ['af', [8289]], ['Afr', [120068]], ['afr', [120094]], ['Agrave', [192]], ['agrave', [224]], ['alefsym', [8501]], ['aleph', [8501]], ['Alpha', [913]], ['alpha', [945]], ['Amacr', [256]], ['amacr', [257]], ['amalg', [10815]], ['amp', [38]], ['AMP', [38]], ['andand', [10837]], ['And', [10835]], ['and', [8743]], ['andd', [10844]], ['andslope', [10840]], ['andv', [10842]], ['ang', [8736]], ['ange', [10660]], ['angle', [8736]], ['angmsdaa', [10664]], ['angmsdab', [10665]], ['angmsdac', [10666]], ['angmsdad', [10667]], ['angmsdae', [10668]], ['angmsdaf', [10669]], ['angmsdag', [10670]], ['angmsdah', [10671]], ['angmsd', [8737]], ['angrt', [8735]], ['angrtvb', [8894]], ['angrtvbd', [10653]], ['angsph', [8738]], ['angst', [197]], ['angzarr', [9084]], ['Aogon', [260]], ['aogon', [261]], ['Aopf', [120120]], ['aopf', [120146]], ['apacir', [10863]], ['ap', [8776]], ['apE', [10864]], ['ape', [8778]], ['apid', [8779]], ['apos', [39]], ['ApplyFunction', [8289]], ['approx', [8776]], ['approxeq', [8778]], ['Aring', [197]], ['aring', [229]], ['Ascr', [119964]], ['ascr', [119990]], ['Assign', [8788]], ['ast', [42]], ['asymp', [8776]], ['asympeq', [8781]], ['Atilde', [195]], ['atilde', [227]], ['Auml', [196]], ['auml', [228]], ['awconint', [8755]], ['awint', [10769]], ['backcong', [8780]], ['backepsilon', [1014]], ['backprime', [8245]], ['backsim', [8765]], ['backsimeq', [8909]], ['Backslash', [8726]], ['Barv', [10983]], ['barvee', [8893]], ['barwed', [8965]], ['Barwed', [8966]], ['barwedge', [8965]], ['bbrk', [9141]], ['bbrktbrk', [9142]], ['bcong', [8780]], ['Bcy', [1041]], ['bcy', [1073]], ['bdquo', [8222]], ['becaus', [8757]], ['because', [8757]], ['Because', [8757]], ['bemptyv', [10672]], ['bepsi', [1014]], ['bernou', [8492]], ['Bernoullis', [8492]], ['Beta', [914]], ['beta', [946]], ['beth', [8502]], ['between', [8812]], ['Bfr', [120069]], ['bfr', [120095]], ['bigcap', [8898]], ['bigcirc', [9711]], ['bigcup', [8899]], ['bigodot', [10752]], ['bigoplus', [10753]], ['bigotimes', [10754]], ['bigsqcup', [10758]], ['bigstar', [9733]], ['bigtriangledown', [9661]], ['bigtriangleup', [9651]], ['biguplus', [10756]], ['bigvee', [8897]], ['bigwedge', [8896]], ['bkarow', [10509]], ['blacklozenge', [10731]], ['blacksquare', [9642]], ['blacktriangle', [9652]], ['blacktriangledown', [9662]], ['blacktriangleleft', [9666]], ['blacktriangleright', [9656]], ['blank', [9251]], ['blk12', [9618]], ['blk14', [9617]], ['blk34', [9619]], ['block', [9608]], ['bne', [61, 8421]], ['bnequiv', [8801, 8421]], ['bNot', [10989]], ['bnot', [8976]], ['Bopf', [120121]], ['bopf', [120147]], ['bot', [8869]], ['bottom', [8869]], ['bowtie', [8904]], ['boxbox', [10697]], ['boxdl', [9488]], ['boxdL', [9557]], ['boxDl', [9558]], ['boxDL', [9559]], ['boxdr', [9484]], ['boxdR', [9554]], ['boxDr', [9555]], ['boxDR', [9556]], ['boxh', [9472]], ['boxH', [9552]], ['boxhd', [9516]], ['boxHd', [9572]], ['boxhD', [9573]], ['boxHD', [9574]], ['boxhu', [9524]], ['boxHu', [9575]], ['boxhU', [9576]], ['boxHU', [9577]], ['boxminus', [8863]], ['boxplus', [8862]], ['boxtimes', [8864]], ['boxul', [9496]], ['boxuL', [9563]], ['boxUl', [9564]], ['boxUL', [9565]], ['boxur', [9492]], ['boxuR', [9560]], ['boxUr', [9561]], ['boxUR', [9562]], ['boxv', [9474]], ['boxV', [9553]], ['boxvh', [9532]], ['boxvH', [9578]], ['boxVh', [9579]], ['boxVH', [9580]], ['boxvl', [9508]], ['boxvL', [9569]], ['boxVl', [9570]], ['boxVL', [9571]], ['boxvr', [9500]], ['boxvR', [9566]], ['boxVr', [9567]], ['boxVR', [9568]], ['bprime', [8245]], ['breve', [728]], ['Breve', [728]], ['brvbar', [166]], ['bscr', [119991]], ['Bscr', [8492]], ['bsemi', [8271]], ['bsim', [8765]], ['bsime', [8909]], ['bsolb', [10693]], ['bsol', [92]], ['bsolhsub', [10184]], ['bull', [8226]], ['bullet', [8226]], ['bump', [8782]], ['bumpE', [10926]], ['bumpe', [8783]], ['Bumpeq', [8782]], ['bumpeq', [8783]], ['Cacute', [262]], ['cacute', [263]], ['capand', [10820]], ['capbrcup', [10825]], ['capcap', [10827]], ['cap', [8745]], ['Cap', [8914]], ['capcup', [10823]], ['capdot', [10816]], ['CapitalDifferentialD', [8517]], ['caps', [8745, 65024]], ['caret', [8257]], ['caron', [711]], ['Cayleys', [8493]], ['ccaps', [10829]], ['Ccaron', [268]], ['ccaron', [269]], ['Ccedil', [199]], ['ccedil', [231]], ['Ccirc', [264]], ['ccirc', [265]], ['Cconint', [8752]], ['ccups', [10828]], ['ccupssm', [10832]], ['Cdot', [266]], ['cdot', [267]], ['cedil', [184]], ['Cedilla', [184]], ['cemptyv', [10674]], ['cent', [162]], ['centerdot', [183]], ['CenterDot', [183]], ['cfr', [120096]], ['Cfr', [8493]], ['CHcy', [1063]], ['chcy', [1095]], ['check', [10003]], ['checkmark', [10003]], ['Chi', [935]], ['chi', [967]], ['circ', [710]], ['circeq', [8791]], ['circlearrowleft', [8634]], ['circlearrowright', [8635]], ['circledast', [8859]], ['circledcirc', [8858]], ['circleddash', [8861]], ['CircleDot', [8857]], ['circledR', [174]], ['circledS', [9416]], ['CircleMinus', [8854]], ['CirclePlus', [8853]], ['CircleTimes', [8855]], ['cir', [9675]], ['cirE', [10691]], ['cire', [8791]], ['cirfnint', [10768]], ['cirmid', [10991]], ['cirscir', [10690]], ['ClockwiseContourIntegral', [8754]], ['clubs', [9827]], ['clubsuit', [9827]], ['colon', [58]], ['Colon', [8759]], ['Colone', [10868]], ['colone', [8788]], ['coloneq', [8788]], ['comma', [44]], ['commat', [64]], ['comp', [8705]], ['compfn', [8728]], ['complement', [8705]], ['complexes', [8450]], ['cong', [8773]], ['congdot', [10861]], ['Congruent', [8801]], ['conint', [8750]], ['Conint', [8751]], ['ContourIntegral', [8750]], ['copf', [120148]], ['Copf', [8450]], ['coprod', [8720]], ['Coproduct', [8720]], ['copy', [169]], ['COPY', [169]], ['copysr', [8471]], ['CounterClockwiseContourIntegral', [8755]], ['crarr', [8629]], ['cross', [10007]], ['Cross', [10799]], ['Cscr', [119966]], ['cscr', [119992]], ['csub', [10959]], ['csube', [10961]], ['csup', [10960]], ['csupe', [10962]], ['ctdot', [8943]], ['cudarrl', [10552]], ['cudarrr', [10549]], ['cuepr', [8926]], ['cuesc', [8927]], ['cularr', [8630]], ['cularrp', [10557]], ['cupbrcap', [10824]], ['cupcap', [10822]], ['CupCap', [8781]], ['cup', [8746]], ['Cup', [8915]], ['cupcup', [10826]], ['cupdot', [8845]], ['cupor', [10821]], ['cups', [8746, 65024]], ['curarr', [8631]], ['curarrm', [10556]], ['curlyeqprec', [8926]], ['curlyeqsucc', [8927]], ['curlyvee', [8910]], ['curlywedge', [8911]], ['curren', [164]], ['curvearrowleft', [8630]], ['curvearrowright', [8631]], ['cuvee', [8910]], ['cuwed', [8911]], ['cwconint', [8754]], ['cwint', [8753]], ['cylcty', [9005]], ['dagger', [8224]], ['Dagger', [8225]], ['daleth', [8504]], ['darr', [8595]], ['Darr', [8609]], ['dArr', [8659]], ['dash', [8208]], ['Dashv', [10980]], ['dashv', [8867]], ['dbkarow', [10511]], ['dblac', [733]], ['Dcaron', [270]], ['dcaron', [271]], ['Dcy', [1044]], ['dcy', [1076]], ['ddagger', [8225]], ['ddarr', [8650]], ['DD', [8517]], ['dd', [8518]], ['DDotrahd', [10513]], ['ddotseq', [10871]], ['deg', [176]], ['Del', [8711]], ['Delta', [916]], ['delta', [948]], ['demptyv', [10673]], ['dfisht', [10623]], ['Dfr', [120071]], ['dfr', [120097]], ['dHar', [10597]], ['dharl', [8643]], ['dharr', [8642]], ['DiacriticalAcute', [180]], ['DiacriticalDot', [729]], ['DiacriticalDoubleAcute', [733]], ['DiacriticalGrave', [96]], ['DiacriticalTilde', [732]], ['diam', [8900]], ['diamond', [8900]], ['Diamond', [8900]], ['diamondsuit', [9830]], ['diams', [9830]], ['die', [168]], ['DifferentialD', [8518]], ['digamma', [989]], ['disin', [8946]], ['div', [247]], ['divide', [247]], ['divideontimes', [8903]], ['divonx', [8903]], ['DJcy', [1026]], ['djcy', [1106]], ['dlcorn', [8990]], ['dlcrop', [8973]], ['dollar', [36]], ['Dopf', [120123]], ['dopf', [120149]], ['Dot', [168]], ['dot', [729]], ['DotDot', [8412]], ['doteq', [8784]], ['doteqdot', [8785]], ['DotEqual', [8784]], ['dotminus', [8760]], ['dotplus', [8724]], ['dotsquare', [8865]], ['doublebarwedge', [8966]], ['DoubleContourIntegral', [8751]], ['DoubleDot', [168]], ['DoubleDownArrow', [8659]], ['DoubleLeftArrow', [8656]], ['DoubleLeftRightArrow', [8660]], ['DoubleLeftTee', [10980]], ['DoubleLongLeftArrow', [10232]], ['DoubleLongLeftRightArrow', [10234]], ['DoubleLongRightArrow', [10233]], ['DoubleRightArrow', [8658]], ['DoubleRightTee', [8872]], ['DoubleUpArrow', [8657]], ['DoubleUpDownArrow', [8661]], ['DoubleVerticalBar', [8741]], ['DownArrowBar', [10515]], ['downarrow', [8595]], ['DownArrow', [8595]], ['Downarrow', [8659]], ['DownArrowUpArrow', [8693]], ['DownBreve', [785]], ['downdownarrows', [8650]], ['downharpoonleft', [8643]], ['downharpoonright', [8642]], ['DownLeftRightVector', [10576]], ['DownLeftTeeVector', [10590]], ['DownLeftVectorBar', [10582]], ['DownLeftVector', [8637]], ['DownRightTeeVector', [10591]], ['DownRightVectorBar', [10583]], ['DownRightVector', [8641]], ['DownTeeArrow', [8615]], ['DownTee', [8868]], ['drbkarow', [10512]], ['drcorn', [8991]], ['drcrop', [8972]], ['Dscr', [119967]], ['dscr', [119993]], ['DScy', [1029]], ['dscy', [1109]], ['dsol', [10742]], ['Dstrok', [272]], ['dstrok', [273]], ['dtdot', [8945]], ['dtri', [9663]], ['dtrif', [9662]], ['duarr', [8693]], ['duhar', [10607]], ['dwangle', [10662]], ['DZcy', [1039]], ['dzcy', [1119]], ['dzigrarr', [10239]], ['Eacute', [201]], ['eacute', [233]], ['easter', [10862]], ['Ecaron', [282]], ['ecaron', [283]], ['Ecirc', [202]], ['ecirc', [234]], ['ecir', [8790]], ['ecolon', [8789]], ['Ecy', [1069]], ['ecy', [1101]], ['eDDot', [10871]], ['Edot', [278]], ['edot', [279]], ['eDot', [8785]], ['ee', [8519]], ['efDot', [8786]], ['Efr', [120072]], ['efr', [120098]], ['eg', [10906]], ['Egrave', [200]], ['egrave', [232]], ['egs', [10902]], ['egsdot', [10904]], ['el', [10905]], ['Element', [8712]], ['elinters', [9191]], ['ell', [8467]], ['els', [10901]], ['elsdot', [10903]], ['Emacr', [274]], ['emacr', [275]], ['empty', [8709]], ['emptyset', [8709]], ['EmptySmallSquare', [9723]], ['emptyv', [8709]], ['EmptyVerySmallSquare', [9643]], ['emsp13', [8196]], ['emsp14', [8197]], ['emsp', [8195]], ['ENG', [330]], ['eng', [331]], ['ensp', [8194]], ['Eogon', [280]], ['eogon', [281]], ['Eopf', [120124]], ['eopf', [120150]], ['epar', [8917]], ['eparsl', [10723]], ['eplus', [10865]], ['epsi', [949]], ['Epsilon', [917]], ['epsilon', [949]], ['epsiv', [1013]], ['eqcirc', [8790]], ['eqcolon', [8789]], ['eqsim', [8770]], ['eqslantgtr', [10902]], ['eqslantless', [10901]], ['Equal', [10869]], ['equals', [61]], ['EqualTilde', [8770]], ['equest', [8799]], ['Equilibrium', [8652]], ['equiv', [8801]], ['equivDD', [10872]], ['eqvparsl', [10725]], ['erarr', [10609]], ['erDot', [8787]], ['escr', [8495]], ['Escr', [8496]], ['esdot', [8784]], ['Esim', [10867]], ['esim', [8770]], ['Eta', [919]], ['eta', [951]], ['ETH', [208]], ['eth', [240]], ['Euml', [203]], ['euml', [235]], ['euro', [8364]], ['excl', [33]], ['exist', [8707]], ['Exists', [8707]], ['expectation', [8496]], ['exponentiale', [8519]], ['ExponentialE', [8519]], ['fallingdotseq', [8786]], ['Fcy', [1060]], ['fcy', [1092]], ['female', [9792]], ['ffilig', [64259]], ['fflig', [64256]], ['ffllig', [64260]], ['Ffr', [120073]], ['ffr', [120099]], ['filig', [64257]], ['FilledSmallSquare', [9724]], ['FilledVerySmallSquare', [9642]], ['fjlig', [102, 106]], ['flat', [9837]], ['fllig', [64258]], ['fltns', [9649]], ['fnof', [402]], ['Fopf', [120125]], ['fopf', [120151]], ['forall', [8704]], ['ForAll', [8704]], ['fork', [8916]], ['forkv', [10969]], ['Fouriertrf', [8497]], ['fpartint', [10765]], ['frac12', [189]], ['frac13', [8531]], ['frac14', [188]], ['frac15', [8533]], ['frac16', [8537]], ['frac18', [8539]], ['frac23', [8532]], ['frac25', [8534]], ['frac34', [190]], ['frac35', [8535]], ['frac38', [8540]], ['frac45', [8536]], ['frac56', [8538]], ['frac58', [8541]], ['frac78', [8542]], ['frasl', [8260]], ['frown', [8994]], ['fscr', [119995]], ['Fscr', [8497]], ['gacute', [501]], ['Gamma', [915]], ['gamma', [947]], ['Gammad', [988]], ['gammad', [989]], ['gap', [10886]], ['Gbreve', [286]], ['gbreve', [287]], ['Gcedil', [290]], ['Gcirc', [284]], ['gcirc', [285]], ['Gcy', [1043]], ['gcy', [1075]], ['Gdot', [288]], ['gdot', [289]], ['ge', [8805]], ['gE', [8807]], ['gEl', [10892]], ['gel', [8923]], ['geq', [8805]], ['geqq', [8807]], ['geqslant', [10878]], ['gescc', [10921]], ['ges', [10878]], ['gesdot', [10880]], ['gesdoto', [10882]], ['gesdotol', [10884]], ['gesl', [8923, 65024]], ['gesles', [10900]], ['Gfr', [120074]], ['gfr', [120100]], ['gg', [8811]], ['Gg', [8921]], ['ggg', [8921]], ['gimel', [8503]], ['GJcy', [1027]], ['gjcy', [1107]], ['gla', [10917]], ['gl', [8823]], ['glE', [10898]], ['glj', [10916]], ['gnap', [10890]], ['gnapprox', [10890]], ['gne', [10888]], ['gnE', [8809]], ['gneq', [10888]], ['gneqq', [8809]], ['gnsim', [8935]], ['Gopf', [120126]], ['gopf', [120152]], ['grave', [96]], ['GreaterEqual', [8805]], ['GreaterEqualLess', [8923]], ['GreaterFullEqual', [8807]], ['GreaterGreater', [10914]], ['GreaterLess', [8823]], ['GreaterSlantEqual', [10878]], ['GreaterTilde', [8819]], ['Gscr', [119970]], ['gscr', [8458]], ['gsim', [8819]], ['gsime', [10894]], ['gsiml', [10896]], ['gtcc', [10919]], ['gtcir', [10874]], ['gt', [62]], ['GT', [62]], ['Gt', [8811]], ['gtdot', [8919]], ['gtlPar', [10645]], ['gtquest', [10876]], ['gtrapprox', [10886]], ['gtrarr', [10616]], ['gtrdot', [8919]], ['gtreqless', [8923]], ['gtreqqless', [10892]], ['gtrless', [8823]], ['gtrsim', [8819]], ['gvertneqq', [8809, 65024]], ['gvnE', [8809, 65024]], ['Hacek', [711]], ['hairsp', [8202]], ['half', [189]], ['hamilt', [8459]], ['HARDcy', [1066]], ['hardcy', [1098]], ['harrcir', [10568]], ['harr', [8596]], ['hArr', [8660]], ['harrw', [8621]], ['Hat', [94]], ['hbar', [8463]], ['Hcirc', [292]], ['hcirc', [293]], ['hearts', [9829]], ['heartsuit', [9829]], ['hellip', [8230]], ['hercon', [8889]], ['hfr', [120101]], ['Hfr', [8460]], ['HilbertSpace', [8459]], ['hksearow', [10533]], ['hkswarow', [10534]], ['hoarr', [8703]], ['homtht', [8763]], ['hookleftarrow', [8617]], ['hookrightarrow', [8618]], ['hopf', [120153]], ['Hopf', [8461]], ['horbar', [8213]], ['HorizontalLine', [9472]], ['hscr', [119997]], ['Hscr', [8459]], ['hslash', [8463]], ['Hstrok', [294]], ['hstrok', [295]], ['HumpDownHump', [8782]], ['HumpEqual', [8783]], ['hybull', [8259]], ['hyphen', [8208]], ['Iacute', [205]], ['iacute', [237]], ['ic', [8291]], ['Icirc', [206]], ['icirc', [238]], ['Icy', [1048]], ['icy', [1080]], ['Idot', [304]], ['IEcy', [1045]], ['iecy', [1077]], ['iexcl', [161]], ['iff', [8660]], ['ifr', [120102]], ['Ifr', [8465]], ['Igrave', [204]], ['igrave', [236]], ['ii', [8520]], ['iiiint', [10764]], ['iiint', [8749]], ['iinfin', [10716]], ['iiota', [8489]], ['IJlig', [306]], ['ijlig', [307]], ['Imacr', [298]], ['imacr', [299]], ['image', [8465]], ['ImaginaryI', [8520]], ['imagline', [8464]], ['imagpart', [8465]], ['imath', [305]], ['Im', [8465]], ['imof', [8887]], ['imped', [437]], ['Implies', [8658]], ['incare', [8453]], ['in', [8712]], ['infin', [8734]], ['infintie', [10717]], ['inodot', [305]], ['intcal', [8890]], ['int', [8747]], ['Int', [8748]], ['integers', [8484]], ['Integral', [8747]], ['intercal', [8890]], ['Intersection', [8898]], ['intlarhk', [10775]], ['intprod', [10812]], ['InvisibleComma', [8291]], ['InvisibleTimes', [8290]], ['IOcy', [1025]], ['iocy', [1105]], ['Iogon', [302]], ['iogon', [303]], ['Iopf', [120128]], ['iopf', [120154]], ['Iota', [921]], ['iota', [953]], ['iprod', [10812]], ['iquest', [191]], ['iscr', [119998]], ['Iscr', [8464]], ['isin', [8712]], ['isindot', [8949]], ['isinE', [8953]], ['isins', [8948]], ['isinsv', [8947]], ['isinv', [8712]], ['it', [8290]], ['Itilde', [296]], ['itilde', [297]], ['Iukcy', [1030]], ['iukcy', [1110]], ['Iuml', [207]], ['iuml', [239]], ['Jcirc', [308]], ['jcirc', [309]], ['Jcy', [1049]], ['jcy', [1081]], ['Jfr', [120077]], ['jfr', [120103]], ['jmath', [567]], ['Jopf', [120129]], ['jopf', [120155]], ['Jscr', [119973]], ['jscr', [119999]], ['Jsercy', [1032]], ['jsercy', [1112]], ['Jukcy', [1028]], ['jukcy', [1108]], ['Kappa', [922]], ['kappa', [954]], ['kappav', [1008]], ['Kcedil', [310]], ['kcedil', [311]], ['Kcy', [1050]], ['kcy', [1082]], ['Kfr', [120078]], ['kfr', [120104]], ['kgreen', [312]], ['KHcy', [1061]], ['khcy', [1093]], ['KJcy', [1036]], ['kjcy', [1116]], ['Kopf', [120130]], ['kopf', [120156]], ['Kscr', [119974]], ['kscr', [120000]], ['lAarr', [8666]], ['Lacute', [313]], ['lacute', [314]], ['laemptyv', [10676]], ['lagran', [8466]], ['Lambda', [923]], ['lambda', [955]], ['lang', [10216]], ['Lang', [10218]], ['langd', [10641]], ['langle', [10216]], ['lap', [10885]], ['Laplacetrf', [8466]], ['laquo', [171]], ['larrb', [8676]], ['larrbfs', [10527]], ['larr', [8592]], ['Larr', [8606]], ['lArr', [8656]], ['larrfs', [10525]], ['larrhk', [8617]], ['larrlp', [8619]], ['larrpl', [10553]], ['larrsim', [10611]], ['larrtl', [8610]], ['latail', [10521]], ['lAtail', [10523]], ['lat', [10923]], ['late', [10925]], ['lates', [10925, 65024]], ['lbarr', [10508]], ['lBarr', [10510]], ['lbbrk', [10098]], ['lbrace', [123]], ['lbrack', [91]], ['lbrke', [10635]], ['lbrksld', [10639]], ['lbrkslu', [10637]], ['Lcaron', [317]], ['lcaron', [318]], ['Lcedil', [315]], ['lcedil', [316]], ['lceil', [8968]], ['lcub', [123]], ['Lcy', [1051]], ['lcy', [1083]], ['ldca', [10550]], ['ldquo', [8220]], ['ldquor', [8222]], ['ldrdhar', [10599]], ['ldrushar', [10571]], ['ldsh', [8626]], ['le', [8804]], ['lE', [8806]], ['LeftAngleBracket', [10216]], ['LeftArrowBar', [8676]], ['leftarrow', [8592]], ['LeftArrow', [8592]], ['Leftarrow', [8656]], ['LeftArrowRightArrow', [8646]], ['leftarrowtail', [8610]], ['LeftCeiling', [8968]], ['LeftDoubleBracket', [10214]], ['LeftDownTeeVector', [10593]], ['LeftDownVectorBar', [10585]], ['LeftDownVector', [8643]], ['LeftFloor', [8970]], ['leftharpoondown', [8637]], ['leftharpoonup', [8636]], ['leftleftarrows', [8647]], ['leftrightarrow', [8596]], ['LeftRightArrow', [8596]], ['Leftrightarrow', [8660]], ['leftrightarrows', [8646]], ['leftrightharpoons', [8651]], ['leftrightsquigarrow', [8621]], ['LeftRightVector', [10574]], ['LeftTeeArrow', [8612]], ['LeftTee', [8867]], ['LeftTeeVector', [10586]], ['leftthreetimes', [8907]], ['LeftTriangleBar', [10703]], ['LeftTriangle', [8882]], ['LeftTriangleEqual', [8884]], ['LeftUpDownVector', [10577]], ['LeftUpTeeVector', [10592]], ['LeftUpVectorBar', [10584]], ['LeftUpVector', [8639]], ['LeftVectorBar', [10578]], ['LeftVector', [8636]], ['lEg', [10891]], ['leg', [8922]], ['leq', [8804]], ['leqq', [8806]], ['leqslant', [10877]], ['lescc', [10920]], ['les', [10877]], ['lesdot', [10879]], ['lesdoto', [10881]], ['lesdotor', [10883]], ['lesg', [8922, 65024]], ['lesges', [10899]], ['lessapprox', [10885]], ['lessdot', [8918]], ['lesseqgtr', [8922]], ['lesseqqgtr', [10891]], ['LessEqualGreater', [8922]], ['LessFullEqual', [8806]], ['LessGreater', [8822]], ['lessgtr', [8822]], ['LessLess', [10913]], ['lesssim', [8818]], ['LessSlantEqual', [10877]], ['LessTilde', [8818]], ['lfisht', [10620]], ['lfloor', [8970]], ['Lfr', [120079]], ['lfr', [120105]], ['lg', [8822]], ['lgE', [10897]], ['lHar', [10594]], ['lhard', [8637]], ['lharu', [8636]], ['lharul', [10602]], ['lhblk', [9604]], ['LJcy', [1033]], ['ljcy', [1113]], ['llarr', [8647]], ['ll', [8810]], ['Ll', [8920]], ['llcorner', [8990]], ['Lleftarrow', [8666]], ['llhard', [10603]], ['lltri', [9722]], ['Lmidot', [319]], ['lmidot', [320]], ['lmoustache', [9136]], ['lmoust', [9136]], ['lnap', [10889]], ['lnapprox', [10889]], ['lne', [10887]], ['lnE', [8808]], ['lneq', [10887]], ['lneqq', [8808]], ['lnsim', [8934]], ['loang', [10220]], ['loarr', [8701]], ['lobrk', [10214]], ['longleftarrow', [10229]], ['LongLeftArrow', [10229]], ['Longleftarrow', [10232]], ['longleftrightarrow', [10231]], ['LongLeftRightArrow', [10231]], ['Longleftrightarrow', [10234]], ['longmapsto', [10236]], ['longrightarrow', [10230]], ['LongRightArrow', [10230]], ['Longrightarrow', [10233]], ['looparrowleft', [8619]], ['looparrowright', [8620]], ['lopar', [10629]], ['Lopf', [120131]], ['lopf', [120157]], ['loplus', [10797]], ['lotimes', [10804]], ['lowast', [8727]], ['lowbar', [95]], ['LowerLeftArrow', [8601]], ['LowerRightArrow', [8600]], ['loz', [9674]], ['lozenge', [9674]], ['lozf', [10731]], ['lpar', [40]], ['lparlt', [10643]], ['lrarr', [8646]], ['lrcorner', [8991]], ['lrhar', [8651]], ['lrhard', [10605]], ['lrm', [8206]], ['lrtri', [8895]], ['lsaquo', [8249]], ['lscr', [120001]], ['Lscr', [8466]], ['lsh', [8624]], ['Lsh', [8624]], ['lsim', [8818]], ['lsime', [10893]], ['lsimg', [10895]], ['lsqb', [91]], ['lsquo', [8216]], ['lsquor', [8218]], ['Lstrok', [321]], ['lstrok', [322]], ['ltcc', [10918]], ['ltcir', [10873]], ['lt', [60]], ['LT', [60]], ['Lt', [8810]], ['ltdot', [8918]], ['lthree', [8907]], ['ltimes', [8905]], ['ltlarr', [10614]], ['ltquest', [10875]], ['ltri', [9667]], ['ltrie', [8884]], ['ltrif', [9666]], ['ltrPar', [10646]], ['lurdshar', [10570]], ['luruhar', [10598]], ['lvertneqq', [8808, 65024]], ['lvnE', [8808, 65024]], ['macr', [175]], ['male', [9794]], ['malt', [10016]], ['maltese', [10016]], ['Map', [10501]], ['map', [8614]], ['mapsto', [8614]], ['mapstodown', [8615]], ['mapstoleft', [8612]], ['mapstoup', [8613]], ['marker', [9646]], ['mcomma', [10793]], ['Mcy', [1052]], ['mcy', [1084]], ['mdash', [8212]], ['mDDot', [8762]], ['measuredangle', [8737]], ['MediumSpace', [8287]], ['Mellintrf', [8499]], ['Mfr', [120080]], ['mfr', [120106]], ['mho', [8487]], ['micro', [181]], ['midast', [42]], ['midcir', [10992]], ['mid', [8739]], ['middot', [183]], ['minusb', [8863]], ['minus', [8722]], ['minusd', [8760]], ['minusdu', [10794]], ['MinusPlus', [8723]], ['mlcp', [10971]], ['mldr', [8230]], ['mnplus', [8723]], ['models', [8871]], ['Mopf', [120132]], ['mopf', [120158]], ['mp', [8723]], ['mscr', [120002]], ['Mscr', [8499]], ['mstpos', [8766]], ['Mu', [924]], ['mu', [956]], ['multimap', [8888]], ['mumap', [8888]], ['nabla', [8711]], ['Nacute', [323]], ['nacute', [324]], ['nang', [8736, 8402]], ['nap', [8777]], ['napE', [10864, 824]], ['napid', [8779, 824]], ['napos', [329]], ['napprox', [8777]], ['natural', [9838]], ['naturals', [8469]], ['natur', [9838]], ['nbsp', [160]], ['nbump', [8782, 824]], ['nbumpe', [8783, 824]], ['ncap', [10819]], ['Ncaron', [327]], ['ncaron', [328]], ['Ncedil', [325]], ['ncedil', [326]], ['ncong', [8775]], ['ncongdot', [10861, 824]], ['ncup', [10818]], ['Ncy', [1053]], ['ncy', [1085]], ['ndash', [8211]], ['nearhk', [10532]], ['nearr', [8599]], ['neArr', [8663]], ['nearrow', [8599]], ['ne', [8800]], ['nedot', [8784, 824]], ['NegativeMediumSpace', [8203]], ['NegativeThickSpace', [8203]], ['NegativeThinSpace', [8203]], ['NegativeVeryThinSpace', [8203]], ['nequiv', [8802]], ['nesear', [10536]], ['nesim', [8770, 824]], ['NestedGreaterGreater', [8811]], ['NestedLessLess', [8810]], ['nexist', [8708]], ['nexists', [8708]], ['Nfr', [120081]], ['nfr', [120107]], ['ngE', [8807, 824]], ['nge', [8817]], ['ngeq', [8817]], ['ngeqq', [8807, 824]], ['ngeqslant', [10878, 824]], ['nges', [10878, 824]], ['nGg', [8921, 824]], ['ngsim', [8821]], ['nGt', [8811, 8402]], ['ngt', [8815]], ['ngtr', [8815]], ['nGtv', [8811, 824]], ['nharr', [8622]], ['nhArr', [8654]], ['nhpar', [10994]], ['ni', [8715]], ['nis', [8956]], ['nisd', [8954]], ['niv', [8715]], ['NJcy', [1034]], ['njcy', [1114]], ['nlarr', [8602]], ['nlArr', [8653]], ['nldr', [8229]], ['nlE', [8806, 824]], ['nle', [8816]], ['nleftarrow', [8602]], ['nLeftarrow', [8653]], ['nleftrightarrow', [8622]], ['nLeftrightarrow', [8654]], ['nleq', [8816]], ['nleqq', [8806, 824]], ['nleqslant', [10877, 824]], ['nles', [10877, 824]], ['nless', [8814]], ['nLl', [8920, 824]], ['nlsim', [8820]], ['nLt', [8810, 8402]], ['nlt', [8814]], ['nltri', [8938]], ['nltrie', [8940]], ['nLtv', [8810, 824]], ['nmid', [8740]], ['NoBreak', [8288]], ['NonBreakingSpace', [160]], ['nopf', [120159]], ['Nopf', [8469]], ['Not', [10988]], ['not', [172]], ['NotCongruent', [8802]], ['NotCupCap', [8813]], ['NotDoubleVerticalBar', [8742]], ['NotElement', [8713]], ['NotEqual', [8800]], ['NotEqualTilde', [8770, 824]], ['NotExists', [8708]], ['NotGreater', [8815]], ['NotGreaterEqual', [8817]], ['NotGreaterFullEqual', [8807, 824]], ['NotGreaterGreater', [8811, 824]], ['NotGreaterLess', [8825]], ['NotGreaterSlantEqual', [10878, 824]], ['NotGreaterTilde', [8821]], ['NotHumpDownHump', [8782, 824]], ['NotHumpEqual', [8783, 824]], ['notin', [8713]], ['notindot', [8949, 824]], ['notinE', [8953, 824]], ['notinva', [8713]], ['notinvb', [8951]], ['notinvc', [8950]], ['NotLeftTriangleBar', [10703, 824]], ['NotLeftTriangle', [8938]], ['NotLeftTriangleEqual', [8940]], ['NotLess', [8814]], ['NotLessEqual', [8816]], ['NotLessGreater', [8824]], ['NotLessLess', [8810, 824]], ['NotLessSlantEqual', [10877, 824]], ['NotLessTilde', [8820]], ['NotNestedGreaterGreater', [10914, 824]], ['NotNestedLessLess', [10913, 824]], ['notni', [8716]], ['notniva', [8716]], ['notnivb', [8958]], ['notnivc', [8957]], ['NotPrecedes', [8832]], ['NotPrecedesEqual', [10927, 824]], ['NotPrecedesSlantEqual', [8928]], ['NotReverseElement', [8716]], ['NotRightTriangleBar', [10704, 824]], ['NotRightTriangle', [8939]], ['NotRightTriangleEqual', [8941]], ['NotSquareSubset', [8847, 824]], ['NotSquareSubsetEqual', [8930]], ['NotSquareSuperset', [8848, 824]], ['NotSquareSupersetEqual', [8931]], ['NotSubset', [8834, 8402]], ['NotSubsetEqual', [8840]], ['NotSucceeds', [8833]], ['NotSucceedsEqual', [10928, 824]], ['NotSucceedsSlantEqual', [8929]], ['NotSucceedsTilde', [8831, 824]], ['NotSuperset', [8835, 8402]], ['NotSupersetEqual', [8841]], ['NotTilde', [8769]], ['NotTildeEqual', [8772]], ['NotTildeFullEqual', [8775]], ['NotTildeTilde', [8777]], ['NotVerticalBar', [8740]], ['nparallel', [8742]], ['npar', [8742]], ['nparsl', [11005, 8421]], ['npart', [8706, 824]], ['npolint', [10772]], ['npr', [8832]], ['nprcue', [8928]], ['nprec', [8832]], ['npreceq', [10927, 824]], ['npre', [10927, 824]], ['nrarrc', [10547, 824]], ['nrarr', [8603]], ['nrArr', [8655]], ['nrarrw', [8605, 824]], ['nrightarrow', [8603]], ['nRightarrow', [8655]], ['nrtri', [8939]], ['nrtrie', [8941]], ['nsc', [8833]], ['nsccue', [8929]], ['nsce', [10928, 824]], ['Nscr', [119977]], ['nscr', [120003]], ['nshortmid', [8740]], ['nshortparallel', [8742]], ['nsim', [8769]], ['nsime', [8772]], ['nsimeq', [8772]], ['nsmid', [8740]], ['nspar', [8742]], ['nsqsube', [8930]], ['nsqsupe', [8931]], ['nsub', [8836]], ['nsubE', [10949, 824]], ['nsube', [8840]], ['nsubset', [8834, 8402]], ['nsubseteq', [8840]], ['nsubseteqq', [10949, 824]], ['nsucc', [8833]], ['nsucceq', [10928, 824]], ['nsup', [8837]], ['nsupE', [10950, 824]], ['nsupe', [8841]], ['nsupset', [8835, 8402]], ['nsupseteq', [8841]], ['nsupseteqq', [10950, 824]], ['ntgl', [8825]], ['Ntilde', [209]], ['ntilde', [241]], ['ntlg', [8824]], ['ntriangleleft', [8938]], ['ntrianglelefteq', [8940]], ['ntriangleright', [8939]], ['ntrianglerighteq', [8941]], ['Nu', [925]], ['nu', [957]], ['num', [35]], ['numero', [8470]], ['numsp', [8199]], ['nvap', [8781, 8402]], ['nvdash', [8876]], ['nvDash', [8877]], ['nVdash', [8878]], ['nVDash', [8879]], ['nvge', [8805, 8402]], ['nvgt', [62, 8402]], ['nvHarr', [10500]], ['nvinfin', [10718]], ['nvlArr', [10498]], ['nvle', [8804, 8402]], ['nvlt', [60, 8402]], ['nvltrie', [8884, 8402]], ['nvrArr', [10499]], ['nvrtrie', [8885, 8402]], ['nvsim', [8764, 8402]], ['nwarhk', [10531]], ['nwarr', [8598]], ['nwArr', [8662]], ['nwarrow', [8598]], ['nwnear', [10535]], ['Oacute', [211]], ['oacute', [243]], ['oast', [8859]], ['Ocirc', [212]], ['ocirc', [244]], ['ocir', [8858]], ['Ocy', [1054]], ['ocy', [1086]], ['odash', [8861]], ['Odblac', [336]], ['odblac', [337]], ['odiv', [10808]], ['odot', [8857]], ['odsold', [10684]], ['OElig', [338]], ['oelig', [339]], ['ofcir', [10687]], ['Ofr', [120082]], ['ofr', [120108]], ['ogon', [731]], ['Ograve', [210]], ['ograve', [242]], ['ogt', [10689]], ['ohbar', [10677]], ['ohm', [937]], ['oint', [8750]], ['olarr', [8634]], ['olcir', [10686]], ['olcross', [10683]], ['oline', [8254]], ['olt', [10688]], ['Omacr', [332]], ['omacr', [333]], ['Omega', [937]], ['omega', [969]], ['Omicron', [927]], ['omicron', [959]], ['omid', [10678]], ['ominus', [8854]], ['Oopf', [120134]], ['oopf', [120160]], ['opar', [10679]], ['OpenCurlyDoubleQuote', [8220]], ['OpenCurlyQuote', [8216]], ['operp', [10681]], ['oplus', [8853]], ['orarr', [8635]], ['Or', [10836]], ['or', [8744]], ['ord', [10845]], ['order', [8500]], ['orderof', [8500]], ['ordf', [170]], ['ordm', [186]], ['origof', [8886]], ['oror', [10838]], ['orslope', [10839]], ['orv', [10843]], ['oS', [9416]], ['Oscr', [119978]], ['oscr', [8500]], ['Oslash', [216]], ['oslash', [248]], ['osol', [8856]], ['Otilde', [213]], ['otilde', [245]], ['otimesas', [10806]], ['Otimes', [10807]], ['otimes', [8855]], ['Ouml', [214]], ['ouml', [246]], ['ovbar', [9021]], ['OverBar', [8254]], ['OverBrace', [9182]], ['OverBracket', [9140]], ['OverParenthesis', [9180]], ['para', [182]], ['parallel', [8741]], ['par', [8741]], ['parsim', [10995]], ['parsl', [11005]], ['part', [8706]], ['PartialD', [8706]], ['Pcy', [1055]], ['pcy', [1087]], ['percnt', [37]], ['period', [46]], ['permil', [8240]], ['perp', [8869]], ['pertenk', [8241]], ['Pfr', [120083]], ['pfr', [120109]], ['Phi', [934]], ['phi', [966]], ['phiv', [981]], ['phmmat', [8499]], ['phone', [9742]], ['Pi', [928]], ['pi', [960]], ['pitchfork', [8916]], ['piv', [982]], ['planck', [8463]], ['planckh', [8462]], ['plankv', [8463]], ['plusacir', [10787]], ['plusb', [8862]], ['pluscir', [10786]], ['plus', [43]], ['plusdo', [8724]], ['plusdu', [10789]], ['pluse', [10866]], ['PlusMinus', [177]], ['plusmn', [177]], ['plussim', [10790]], ['plustwo', [10791]], ['pm', [177]], ['Poincareplane', [8460]], ['pointint', [10773]], ['popf', [120161]], ['Popf', [8473]], ['pound', [163]], ['prap', [10935]], ['Pr', [10939]], ['pr', [8826]], ['prcue', [8828]], ['precapprox', [10935]], ['prec', [8826]], ['preccurlyeq', [8828]], ['Precedes', [8826]], ['PrecedesEqual', [10927]], ['PrecedesSlantEqual', [8828]], ['PrecedesTilde', [8830]], ['preceq', [10927]], ['precnapprox', [10937]], ['precneqq', [10933]], ['precnsim', [8936]], ['pre', [10927]], ['prE', [10931]], ['precsim', [8830]], ['prime', [8242]], ['Prime', [8243]], ['primes', [8473]], ['prnap', [10937]], ['prnE', [10933]], ['prnsim', [8936]], ['prod', [8719]], ['Product', [8719]], ['profalar', [9006]], ['profline', [8978]], ['profsurf', [8979]], ['prop', [8733]], ['Proportional', [8733]], ['Proportion', [8759]], ['propto', [8733]], ['prsim', [8830]], ['prurel', [8880]], ['Pscr', [119979]], ['pscr', [120005]], ['Psi', [936]], ['psi', [968]], ['puncsp', [8200]], ['Qfr', [120084]], ['qfr', [120110]], ['qint', [10764]], ['qopf', [120162]], ['Qopf', [8474]], ['qprime', [8279]], ['Qscr', [119980]], ['qscr', [120006]], ['quaternions', [8461]], ['quatint', [10774]], ['quest', [63]], ['questeq', [8799]], ['quot', [34]], ['QUOT', [34]], ['rAarr', [8667]], ['race', [8765, 817]], ['Racute', [340]], ['racute', [341]], ['radic', [8730]], ['raemptyv', [10675]], ['rang', [10217]], ['Rang', [10219]], ['rangd', [10642]], ['range', [10661]], ['rangle', [10217]], ['raquo', [187]], ['rarrap', [10613]], ['rarrb', [8677]], ['rarrbfs', [10528]], ['rarrc', [10547]], ['rarr', [8594]], ['Rarr', [8608]], ['rArr', [8658]], ['rarrfs', [10526]], ['rarrhk', [8618]], ['rarrlp', [8620]], ['rarrpl', [10565]], ['rarrsim', [10612]], ['Rarrtl', [10518]], ['rarrtl', [8611]], ['rarrw', [8605]], ['ratail', [10522]], ['rAtail', [10524]], ['ratio', [8758]], ['rationals', [8474]], ['rbarr', [10509]], ['rBarr', [10511]], ['RBarr', [10512]], ['rbbrk', [10099]], ['rbrace', [125]], ['rbrack', [93]], ['rbrke', [10636]], ['rbrksld', [10638]], ['rbrkslu', [10640]], ['Rcaron', [344]], ['rcaron', [345]], ['Rcedil', [342]], ['rcedil', [343]], ['rceil', [8969]], ['rcub', [125]], ['Rcy', [1056]], ['rcy', [1088]], ['rdca', [10551]], ['rdldhar', [10601]], ['rdquo', [8221]], ['rdquor', [8221]], ['CloseCurlyDoubleQuote', [8221]], ['rdsh', [8627]], ['real', [8476]], ['realine', [8475]], ['realpart', [8476]], ['reals', [8477]], ['Re', [8476]], ['rect', [9645]], ['reg', [174]], ['REG', [174]], ['ReverseElement', [8715]], ['ReverseEquilibrium', [8651]], ['ReverseUpEquilibrium', [10607]], ['rfisht', [10621]], ['rfloor', [8971]], ['rfr', [120111]], ['Rfr', [8476]], ['rHar', [10596]], ['rhard', [8641]], ['rharu', [8640]], ['rharul', [10604]], ['Rho', [929]], ['rho', [961]], ['rhov', [1009]], ['RightAngleBracket', [10217]], ['RightArrowBar', [8677]], ['rightarrow', [8594]], ['RightArrow', [8594]], ['Rightarrow', [8658]], ['RightArrowLeftArrow', [8644]], ['rightarrowtail', [8611]], ['RightCeiling', [8969]], ['RightDoubleBracket', [10215]], ['RightDownTeeVector', [10589]], ['RightDownVectorBar', [10581]], ['RightDownVector', [8642]], ['RightFloor', [8971]], ['rightharpoondown', [8641]], ['rightharpoonup', [8640]], ['rightleftarrows', [8644]], ['rightleftharpoons', [8652]], ['rightrightarrows', [8649]], ['rightsquigarrow', [8605]], ['RightTeeArrow', [8614]], ['RightTee', [8866]], ['RightTeeVector', [10587]], ['rightthreetimes', [8908]], ['RightTriangleBar', [10704]], ['RightTriangle', [8883]], ['RightTriangleEqual', [8885]], ['RightUpDownVector', [10575]], ['RightUpTeeVector', [10588]], ['RightUpVectorBar', [10580]], ['RightUpVector', [8638]], ['RightVectorBar', [10579]], ['RightVector', [8640]], ['ring', [730]], ['risingdotseq', [8787]], ['rlarr', [8644]], ['rlhar', [8652]], ['rlm', [8207]], ['rmoustache', [9137]], ['rmoust', [9137]], ['rnmid', [10990]], ['roang', [10221]], ['roarr', [8702]], ['robrk', [10215]], ['ropar', [10630]], ['ropf', [120163]], ['Ropf', [8477]], ['roplus', [10798]], ['rotimes', [10805]], ['RoundImplies', [10608]], ['rpar', [41]], ['rpargt', [10644]], ['rppolint', [10770]], ['rrarr', [8649]], ['Rrightarrow', [8667]], ['rsaquo', [8250]], ['rscr', [120007]], ['Rscr', [8475]], ['rsh', [8625]], ['Rsh', [8625]], ['rsqb', [93]], ['rsquo', [8217]], ['rsquor', [8217]], ['CloseCurlyQuote', [8217]], ['rthree', [8908]], ['rtimes', [8906]], ['rtri', [9657]], ['rtrie', [8885]], ['rtrif', [9656]], ['rtriltri', [10702]], ['RuleDelayed', [10740]], ['ruluhar', [10600]], ['rx', [8478]], ['Sacute', [346]], ['sacute', [347]], ['sbquo', [8218]], ['scap', [10936]], ['Scaron', [352]], ['scaron', [353]], ['Sc', [10940]], ['sc', [8827]], ['sccue', [8829]], ['sce', [10928]], ['scE', [10932]], ['Scedil', [350]], ['scedil', [351]], ['Scirc', [348]], ['scirc', [349]], ['scnap', [10938]], ['scnE', [10934]], ['scnsim', [8937]], ['scpolint', [10771]], ['scsim', [8831]], ['Scy', [1057]], ['scy', [1089]], ['sdotb', [8865]], ['sdot', [8901]], ['sdote', [10854]], ['searhk', [10533]], ['searr', [8600]], ['seArr', [8664]], ['searrow', [8600]], ['sect', [167]], ['semi', [59]], ['seswar', [10537]], ['setminus', [8726]], ['setmn', [8726]], ['sext', [10038]], ['Sfr', [120086]], ['sfr', [120112]], ['sfrown', [8994]], ['sharp', [9839]], ['SHCHcy', [1065]], ['shchcy', [1097]], ['SHcy', [1064]], ['shcy', [1096]], ['ShortDownArrow', [8595]], ['ShortLeftArrow', [8592]], ['shortmid', [8739]], ['shortparallel', [8741]], ['ShortRightArrow', [8594]], ['ShortUpArrow', [8593]], ['shy', [173]], ['Sigma', [931]], ['sigma', [963]], ['sigmaf', [962]], ['sigmav', [962]], ['sim', [8764]], ['simdot', [10858]], ['sime', [8771]], ['simeq', [8771]], ['simg', [10910]], ['simgE', [10912]], ['siml', [10909]], ['simlE', [10911]], ['simne', [8774]], ['simplus', [10788]], ['simrarr', [10610]], ['slarr', [8592]], ['SmallCircle', [8728]], ['smallsetminus', [8726]], ['smashp', [10803]], ['smeparsl', [10724]], ['smid', [8739]], ['smile', [8995]], ['smt', [10922]], ['smte', [10924]], ['smtes', [10924, 65024]], ['SOFTcy', [1068]], ['softcy', [1100]], ['solbar', [9023]], ['solb', [10692]], ['sol', [47]], ['Sopf', [120138]], ['sopf', [120164]], ['spades', [9824]], ['spadesuit', [9824]], ['spar', [8741]], ['sqcap', [8851]], ['sqcaps', [8851, 65024]], ['sqcup', [8852]], ['sqcups', [8852, 65024]], ['Sqrt', [8730]], ['sqsub', [8847]], ['sqsube', [8849]], ['sqsubset', [8847]], ['sqsubseteq', [8849]], ['sqsup', [8848]], ['sqsupe', [8850]], ['sqsupset', [8848]], ['sqsupseteq', [8850]], ['square', [9633]], ['Square', [9633]], ['SquareIntersection', [8851]], ['SquareSubset', [8847]], ['SquareSubsetEqual', [8849]], ['SquareSuperset', [8848]], ['SquareSupersetEqual', [8850]], ['SquareUnion', [8852]], ['squarf', [9642]], ['squ', [9633]], ['squf', [9642]], ['srarr', [8594]], ['Sscr', [119982]], ['sscr', [120008]], ['ssetmn', [8726]], ['ssmile', [8995]], ['sstarf', [8902]], ['Star', [8902]], ['star', [9734]], ['starf', [9733]], ['straightepsilon', [1013]], ['straightphi', [981]], ['strns', [175]], ['sub', [8834]], ['Sub', [8912]], ['subdot', [10941]], ['subE', [10949]], ['sube', [8838]], ['subedot', [10947]], ['submult', [10945]], ['subnE', [10955]], ['subne', [8842]], ['subplus', [10943]], ['subrarr', [10617]], ['subset', [8834]], ['Subset', [8912]], ['subseteq', [8838]], ['subseteqq', [10949]], ['SubsetEqual', [8838]], ['subsetneq', [8842]], ['subsetneqq', [10955]], ['subsim', [10951]], ['subsub', [10965]], ['subsup', [10963]], ['succapprox', [10936]], ['succ', [8827]], ['succcurlyeq', [8829]], ['Succeeds', [8827]], ['SucceedsEqual', [10928]], ['SucceedsSlantEqual', [8829]], ['SucceedsTilde', [8831]], ['succeq', [10928]], ['succnapprox', [10938]], ['succneqq', [10934]], ['succnsim', [8937]], ['succsim', [8831]], ['SuchThat', [8715]], ['sum', [8721]], ['Sum', [8721]], ['sung', [9834]], ['sup1', [185]], ['sup2', [178]], ['sup3', [179]], ['sup', [8835]], ['Sup', [8913]], ['supdot', [10942]], ['supdsub', [10968]], ['supE', [10950]], ['supe', [8839]], ['supedot', [10948]], ['Superset', [8835]], ['SupersetEqual', [8839]], ['suphsol', [10185]], ['suphsub', [10967]], ['suplarr', [10619]], ['supmult', [10946]], ['supnE', [10956]], ['supne', [8843]], ['supplus', [10944]], ['supset', [8835]], ['Supset', [8913]], ['supseteq', [8839]], ['supseteqq', [10950]], ['supsetneq', [8843]], ['supsetneqq', [10956]], ['supsim', [10952]], ['supsub', [10964]], ['supsup', [10966]], ['swarhk', [10534]], ['swarr', [8601]], ['swArr', [8665]], ['swarrow', [8601]], ['swnwar', [10538]], ['szlig', [223]], ['Tab', [9]], ['target', [8982]], ['Tau', [932]], ['tau', [964]], ['tbrk', [9140]], ['Tcaron', [356]], ['tcaron', [357]], ['Tcedil', [354]], ['tcedil', [355]], ['Tcy', [1058]], ['tcy', [1090]], ['tdot', [8411]], ['telrec', [8981]], ['Tfr', [120087]], ['tfr', [120113]], ['there4', [8756]], ['therefore', [8756]], ['Therefore', [8756]], ['Theta', [920]], ['theta', [952]], ['thetasym', [977]], ['thetav', [977]], ['thickapprox', [8776]], ['thicksim', [8764]], ['ThickSpace', [8287, 8202]], ['ThinSpace', [8201]], ['thinsp', [8201]], ['thkap', [8776]], ['thksim', [8764]], ['THORN', [222]], ['thorn', [254]], ['tilde', [732]], ['Tilde', [8764]], ['TildeEqual', [8771]], ['TildeFullEqual', [8773]], ['TildeTilde', [8776]], ['timesbar', [10801]], ['timesb', [8864]], ['times', [215]], ['timesd', [10800]], ['tint', [8749]], ['toea', [10536]], ['topbot', [9014]], ['topcir', [10993]], ['top', [8868]], ['Topf', [120139]], ['topf', [120165]], ['topfork', [10970]], ['tosa', [10537]], ['tprime', [8244]], ['trade', [8482]], ['TRADE', [8482]], ['triangle', [9653]], ['triangledown', [9663]], ['triangleleft', [9667]], ['trianglelefteq', [8884]], ['triangleq', [8796]], ['triangleright', [9657]], ['trianglerighteq', [8885]], ['tridot', [9708]], ['trie', [8796]], ['triminus', [10810]], ['TripleDot', [8411]], ['triplus', [10809]], ['trisb', [10701]], ['tritime', [10811]], ['trpezium', [9186]], ['Tscr', [119983]], ['tscr', [120009]], ['TScy', [1062]], ['tscy', [1094]], ['TSHcy', [1035]], ['tshcy', [1115]], ['Tstrok', [358]], ['tstrok', [359]], ['twixt', [8812]], ['twoheadleftarrow', [8606]], ['twoheadrightarrow', [8608]], ['Uacute', [218]], ['uacute', [250]], ['uarr', [8593]], ['Uarr', [8607]], ['uArr', [8657]], ['Uarrocir', [10569]], ['Ubrcy', [1038]], ['ubrcy', [1118]], ['Ubreve', [364]], ['ubreve', [365]], ['Ucirc', [219]], ['ucirc', [251]], ['Ucy', [1059]], ['ucy', [1091]], ['udarr', [8645]], ['Udblac', [368]], ['udblac', [369]], ['udhar', [10606]], ['ufisht', [10622]], ['Ufr', [120088]], ['ufr', [120114]], ['Ugrave', [217]], ['ugrave', [249]], ['uHar', [10595]], ['uharl', [8639]], ['uharr', [8638]], ['uhblk', [9600]], ['ulcorn', [8988]], ['ulcorner', [8988]], ['ulcrop', [8975]], ['ultri', [9720]], ['Umacr', [362]], ['umacr', [363]], ['uml', [168]], ['UnderBar', [95]], ['UnderBrace', [9183]], ['UnderBracket', [9141]], ['UnderParenthesis', [9181]], ['Union', [8899]], ['UnionPlus', [8846]], ['Uogon', [370]], ['uogon', [371]], ['Uopf', [120140]], ['uopf', [120166]], ['UpArrowBar', [10514]], ['uparrow', [8593]], ['UpArrow', [8593]], ['Uparrow', [8657]], ['UpArrowDownArrow', [8645]], ['updownarrow', [8597]], ['UpDownArrow', [8597]], ['Updownarrow', [8661]], ['UpEquilibrium', [10606]], ['upharpoonleft', [8639]], ['upharpoonright', [8638]], ['uplus', [8846]], ['UpperLeftArrow', [8598]], ['UpperRightArrow', [8599]], ['upsi', [965]], ['Upsi', [978]], ['upsih', [978]], ['Upsilon', [933]], ['upsilon', [965]], ['UpTeeArrow', [8613]], ['UpTee', [8869]], ['upuparrows', [8648]], ['urcorn', [8989]], ['urcorner', [8989]], ['urcrop', [8974]], ['Uring', [366]], ['uring', [367]], ['urtri', [9721]], ['Uscr', [119984]], ['uscr', [120010]], ['utdot', [8944]], ['Utilde', [360]], ['utilde', [361]], ['utri', [9653]], ['utrif', [9652]], ['uuarr', [8648]], ['Uuml', [220]], ['uuml', [252]], ['uwangle', [10663]], ['vangrt', [10652]], ['varepsilon', [1013]], ['varkappa', [1008]], ['varnothing', [8709]], ['varphi', [981]], ['varpi', [982]], ['varpropto', [8733]], ['varr', [8597]], ['vArr', [8661]], ['varrho', [1009]], ['varsigma', [962]], ['varsubsetneq', [8842, 65024]], ['varsubsetneqq', [10955, 65024]], ['varsupsetneq', [8843, 65024]], ['varsupsetneqq', [10956, 65024]], ['vartheta', [977]], ['vartriangleleft', [8882]], ['vartriangleright', [8883]], ['vBar', [10984]], ['Vbar', [10987]], ['vBarv', [10985]], ['Vcy', [1042]], ['vcy', [1074]], ['vdash', [8866]], ['vDash', [8872]], ['Vdash', [8873]], ['VDash', [8875]], ['Vdashl', [10982]], ['veebar', [8891]], ['vee', [8744]], ['Vee', [8897]], ['veeeq', [8794]], ['vellip', [8942]], ['verbar', [124]], ['Verbar', [8214]], ['vert', [124]], ['Vert', [8214]], ['VerticalBar', [8739]], ['VerticalLine', [124]], ['VerticalSeparator', [10072]], ['VerticalTilde', [8768]], ['VeryThinSpace', [8202]], ['Vfr', [120089]], ['vfr', [120115]], ['vltri', [8882]], ['vnsub', [8834, 8402]], ['vnsup', [8835, 8402]], ['Vopf', [120141]], ['vopf', [120167]], ['vprop', [8733]], ['vrtri', [8883]], ['Vscr', [119985]], ['vscr', [120011]], ['vsubnE', [10955, 65024]], ['vsubne', [8842, 65024]], ['vsupnE', [10956, 65024]], ['vsupne', [8843, 65024]], ['Vvdash', [8874]], ['vzigzag', [10650]], ['Wcirc', [372]], ['wcirc', [373]], ['wedbar', [10847]], ['wedge', [8743]], ['Wedge', [8896]], ['wedgeq', [8793]], ['weierp', [8472]], ['Wfr', [120090]], ['wfr', [120116]], ['Wopf', [120142]], ['wopf', [120168]], ['wp', [8472]], ['wr', [8768]], ['wreath', [8768]], ['Wscr', [119986]], ['wscr', [120012]], ['xcap', [8898]], ['xcirc', [9711]], ['xcup', [8899]], ['xdtri', [9661]], ['Xfr', [120091]], ['xfr', [120117]], ['xharr', [10231]], ['xhArr', [10234]], ['Xi', [926]], ['xi', [958]], ['xlarr', [10229]], ['xlArr', [10232]], ['xmap', [10236]], ['xnis', [8955]], ['xodot', [10752]], ['Xopf', [120143]], ['xopf', [120169]], ['xoplus', [10753]], ['xotime', [10754]], ['xrarr', [10230]], ['xrArr', [10233]], ['Xscr', [119987]], ['xscr', [120013]], ['xsqcup', [10758]], ['xuplus', [10756]], ['xutri', [9651]], ['xvee', [8897]], ['xwedge', [8896]], ['Yacute', [221]], ['yacute', [253]], ['YAcy', [1071]], ['yacy', [1103]], ['Ycirc', [374]], ['ycirc', [375]], ['Ycy', [1067]], ['ycy', [1099]], ['yen', [165]], ['Yfr', [120092]], ['yfr', [120118]], ['YIcy', [1031]], ['yicy', [1111]], ['Yopf', [120144]], ['yopf', [120170]], ['Yscr', [119988]], ['yscr', [120014]], ['YUcy', [1070]], ['yucy', [1102]], ['yuml', [255]], ['Yuml', [376]], ['Zacute', [377]], ['zacute', [378]], ['Zcaron', [381]], ['zcaron', [382]], ['Zcy', [1047]], ['zcy', [1079]], ['Zdot', [379]], ['zdot', [380]], ['zeetrf', [8488]], ['ZeroWidthSpace', [8203]], ['Zeta', [918]], ['zeta', [950]], ['zfr', [120119]], ['Zfr', [8488]], ['ZHcy', [1046]], ['zhcy', [1078]], ['zigrarr', [8669]], ['zopf', [120171]], ['Zopf', [8484]], ['Zscr', [119989]], ['zscr', [120015]], ['zwj', [8205]], ['zwnj', [8204]]];

var alphaIndex = {};
var charIndex = {};

createIndexes(alphaIndex, charIndex);

/**
 * @constructor
 */
function Html5Entities() {}

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.prototype.decode = function(str) {
    if (!str || !str.length) {
        return '';
    }
    return str.replace(/&(#?[\w\d]+);?/g, function(s, entity) {
        var chr;
        if (entity.charAt(0) === "#") {
            var code = entity.charAt(1) === 'x' ?
                parseInt(entity.substr(2).toLowerCase(), 16) :
                parseInt(entity.substr(1));

            if (!(isNaN(code) || code < -32768 || code > 65535)) {
                chr = String.fromCharCode(code);
            }
        } else {
            chr = alphaIndex[entity];
        }
        return chr || s;
    });
};

/**
 * @param {String} str
 * @returns {String}
 */
 Html5Entities.decode = function(str) {
    return new Html5Entities().decode(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.prototype.encode = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var charInfo = charIndex[str.charCodeAt(i)];
        if (charInfo) {
            var alpha = charInfo[str.charCodeAt(i + 1)];
            if (alpha) {
                i++;
            } else {
                alpha = charInfo[''];
            }
            if (alpha) {
                result += "&" + alpha + ";";
                i++;
                continue;
            }
        }
        result += str.charAt(i);
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
 Html5Entities.encode = function(str) {
    return new Html5Entities().encode(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.prototype.encodeNonUTF = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var c = str.charCodeAt(i);
        var charInfo = charIndex[c];
        if (charInfo) {
            var alpha = charInfo[str.charCodeAt(i + 1)];
            if (alpha) {
                i++;
            } else {
                alpha = charInfo[''];
            }
            if (alpha) {
                result += "&" + alpha + ";";
                i++;
                continue;
            }
        }
        if (c < 32 || c > 126) {
            result += '&#' + c + ';';
        } else {
            result += str.charAt(i);
        }
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
 Html5Entities.encodeNonUTF = function(str) {
    return new Html5Entities().encodeNonUTF(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.prototype.encodeNonASCII = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var c = str.charCodeAt(i);
        if (c <= 255) {
            result += str[i++];
            continue;
        }
        result += '&#' + c + ';';
        i++
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
 Html5Entities.encodeNonASCII = function(str) {
    return new Html5Entities().encodeNonASCII(str);
 };

/**
 * @param {Object} alphaIndex Passed by reference.
 * @param {Object} charIndex Passed by reference.
 */
function createIndexes(alphaIndex, charIndex) {
    var i = ENTITIES.length;
    var _results = [];
    while (i--) {
        var e = ENTITIES[i];
        var alpha = e[0];
        var chars = e[1];
        var chr = chars[0];
        var addChar = (chr < 32 || chr > 126) || chr === 62 || chr === 60 || chr === 38 || chr === 34 || chr === 39;
        var charInfo;
        if (addChar) {
            charInfo = charIndex[chr] = charIndex[chr] || {};
        }
        if (chars[1]) {
            var chr2 = chars[1];
            alphaIndex[alpha] = String.fromCharCode(chr) + String.fromCharCode(chr2);
            _results.push(addChar && (charInfo[chr2] = alpha));
        } else {
            alphaIndex[alpha] = String.fromCharCode(chr);
            _results.push(addChar && (charInfo[''] = alpha));
        }
    }
}

module.exports = Html5Entities;


/***/ }),

/***/ "./node_modules/html-entities/lib/xml-entities.js":
/***/ (function(module, exports) {

var ALPHA_INDEX = {
    '&lt': '<',
    '&gt': '>',
    '&quot': '"',
    '&apos': '\'',
    '&amp': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&apos;': '\'',
    '&amp;': '&'
};

var CHAR_INDEX = {
    60: 'lt',
    62: 'gt',
    34: 'quot',
    39: 'apos',
    38: 'amp'
};

var CHAR_S_INDEX = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;',
    '&': '&amp;'
};

/**
 * @constructor
 */
function XmlEntities() {}

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.prototype.encode = function(str) {
    if (!str || !str.length) {
        return '';
    }
    return str.replace(/<|>|"|'|&/g, function(s) {
        return CHAR_S_INDEX[s];
    });
};

/**
 * @param {String} str
 * @returns {String}
 */
 XmlEntities.encode = function(str) {
    return new XmlEntities().encode(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.prototype.decode = function(str) {
    if (!str || !str.length) {
        return '';
    }
    return str.replace(/&#?[0-9a-zA-Z]+;?/g, function(s) {
        if (s.charAt(1) === '#') {
            var code = s.charAt(2).toLowerCase() === 'x' ?
                parseInt(s.substr(3), 16) :
                parseInt(s.substr(2));

            if (isNaN(code) || code < -32768 || code > 65535) {
                return '';
            }
            return String.fromCharCode(code);
        }
        return ALPHA_INDEX[s] || s;
    });
};

/**
 * @param {String} str
 * @returns {String}
 */
 XmlEntities.decode = function(str) {
    return new XmlEntities().decode(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.prototype.encodeNonUTF = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var c = str.charCodeAt(i);
        var alpha = CHAR_INDEX[c];
        if (alpha) {
            result += "&" + alpha + ";";
            i++;
            continue;
        }
        if (c < 32 || c > 126) {
            result += '&#' + c + ';';
        } else {
            result += str.charAt(i);
        }
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
 XmlEntities.encodeNonUTF = function(str) {
    return new XmlEntities().encodeNonUTF(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.prototype.encodeNonASCII = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLenght = str.length;
    var result = '';
    var i = 0;
    while (i < strLenght) {
        var c = str.charCodeAt(i);
        if (c <= 255) {
            result += str[i++];
            continue;
        }
        result += '&#' + c + ';';
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
 XmlEntities.encodeNonASCII = function(str) {
    return new XmlEntities().encodeNonASCII(str);
 };

module.exports = XmlEntities;


/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__("./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__("./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/strip-ansi/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ansiRegex = __webpack_require__("./node_modules/ansi-regex/index.js")();

module.exports = function (str) {
	return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
};


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack-hot-middleware/client-overlay.js":
/***/ (function(module, exports, __webpack_require__) {

/*eslint-env browser*/

var clientOverlay = document.createElement('div');
clientOverlay.id = 'webpack-hot-middleware-clientOverlay';
var styles = {
  background: 'rgba(0,0,0,0.85)',
  color: '#E8E8E8',
  lineHeight: '1.2',
  whiteSpace: 'pre',
  fontFamily: 'Menlo, Consolas, monospace',
  fontSize: '13px',
  position: 'fixed',
  zIndex: 9999,
  padding: '10px',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  overflow: 'auto',
  dir: 'ltr',
  textAlign: 'left'
};
for (var key in styles) {
  clientOverlay.style[key] = styles[key];
}

var ansiHTML = __webpack_require__("./node_modules/ansi-html/index.js");
var colors = {
  reset: ['transparent', 'transparent'],
  black: '181818',
  red: 'E36049',
  green: 'B3CB74',
  yellow: 'FFD080',
  blue: '7CAFC2',
  magenta: '7FACCA',
  cyan: 'C3C2EF',
  lightgrey: 'EBE7E3',
  darkgrey: '6D7891'
};
ansiHTML.setColors(colors);

var Entities = __webpack_require__("./node_modules/html-entities/index.js").AllHtmlEntities;
var entities = new Entities();

exports.showProblems =
function showProblems(type, lines) {
  clientOverlay.innerHTML = '';
  lines.forEach(function(msg) {
    msg = ansiHTML(entities.encode(msg));
    var div = document.createElement('div');
    div.style.marginBottom = '26px';
    div.innerHTML = problemType(type) + ' in ' + msg;
    clientOverlay.appendChild(div);
  });
  if (document.body) {
    document.body.appendChild(clientOverlay);
  }
};

exports.clear =
function clear() {
  if (document.body && clientOverlay.parentNode) {
    document.body.removeChild(clientOverlay);
  }
};

var problemColors = {
  errors: colors.red,
  warnings: colors.yellow
};

function problemType (type) {
  var color = problemColors[type] || colors.red;
  return (
    '<span style="background-color:#' + color + '; color:#fff; padding:2px 4px; border-radius: 2px">' +
      type.slice(0, -1).toUpperCase() +
    '</span>'
  );
}


/***/ }),

/***/ "./node_modules/webpack-hot-middleware/client.js?path=./public__webpack_hmr":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__resourceQuery, module) {/*eslint-env browser*/
/*global __resourceQuery __webpack_public_path__*/

var options = {
  path: "/__webpack_hmr",
  timeout: 20 * 1000,
  overlay: true,
  reload: false,
  log: true,
  warn: true,
  name: '',
  autoConnect: true
};
if (true) {
  var querystring = __webpack_require__("./node_modules/querystring-es3/index.js");
  var overrides = querystring.parse(__resourceQuery.slice(1));
  setOverrides(overrides);
}

if (typeof window === 'undefined') {
  // do nothing
} else if (typeof window.EventSource === 'undefined') {
  console.warn(
    "webpack-hot-middleware's client requires EventSource to work. " +
    "You should include a polyfill if you want to support this browser: " +
    "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools"
  );
} else {
  if (options.autoConnect) {
    connect();
  }
}

/* istanbul ignore next */
function setOptionsAndConnect(overrides) {
  setOverrides(overrides);
  connect();
}

function setOverrides(overrides) {
  if (overrides.autoConnect) options.autoConnect = overrides.autoConnect == 'true';
  if (overrides.path) options.path = overrides.path;
  if (overrides.timeout) options.timeout = overrides.timeout;
  if (overrides.overlay) options.overlay = overrides.overlay !== 'false';
  if (overrides.reload) options.reload = overrides.reload !== 'false';
  if (overrides.noInfo && overrides.noInfo !== 'false') {
    options.log = false;
  }
  if (overrides.name) {
    options.name = overrides.name;
  }
  if (overrides.quiet && overrides.quiet !== 'false') {
    options.log = false;
    options.warn = false;
  }

  if (overrides.dynamicPublicPath) {
    options.path = __webpack_require__.p + options.path;
  }
}

function EventSourceWrapper() {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  init();
  var timer = setInterval(function() {
    if ((new Date() - lastActivity) > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log("[HMR] connected");
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();
    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    addMessageListener: function(fn) {
      listeners.push(fn);
    }
  };
}

function getEventSourceWrapper() {
  if (!window.__whmEventSourceWrapper) {
    window.__whmEventSourceWrapper = {};
  }
  if (!window.__whmEventSourceWrapper[options.path]) {
    // cache the wrapper for other entries loaded on
    // the same page with the same options.path
    window.__whmEventSourceWrapper[options.path] = EventSourceWrapper();
  }
  return window.__whmEventSourceWrapper[options.path];
}

function connect() {
  getEventSourceWrapper().addMessageListener(handleMessage);

  function handleMessage(event) {
    if (event.data == "\uD83D\uDC93") {
      return;
    }
    try {
      processMessage(JSON.parse(event.data));
    } catch (ex) {
      if (options.warn) {
        console.warn("Invalid HMR message: " + event.data + "\n" + ex);
      }
    }
  }
}

// the reporter needs to be a singleton on the page
// in case the client is being used by multiple bundles
// we only want to report once.
// all the errors will go to all clients
var singletonKey = '__webpack_hot_middleware_reporter__';
var reporter;
if (typeof window !== 'undefined') {
  if (!window[singletonKey]) {
    window[singletonKey] = createReporter();
  }
  reporter = window[singletonKey];
}

function createReporter() {
  var strip = __webpack_require__("./node_modules/strip-ansi/index.js");

  var overlay;
  if (typeof document !== 'undefined' && options.overlay) {
    overlay = __webpack_require__("./node_modules/webpack-hot-middleware/client-overlay.js");
  }

  var styles = {
    errors: "color: #ff0000;",
    warnings: "color: #999933;"
  };
  var previousProblems = null;
  function log(type, obj) {
    var newProblems = obj[type].map(function(msg) { return strip(msg); }).join('\n');
    if (previousProblems == newProblems) {
      return;
    } else {
      previousProblems = newProblems;
    }

    var style = styles[type];
    var name = obj.name ? "'" + obj.name + "' " : "";
    var title = "[HMR] bundle " + name + "has " + obj[type].length + " " + type;
    // NOTE: console.warn or console.error will print the stack trace
    // which isn't helpful here, so using console.log to escape it.
    if (console.group && console.groupEnd) {
      console.group("%c" + title, style);
      console.log("%c" + newProblems, style);
      console.groupEnd();
    } else {
      console.log(
        "%c" + title + "\n\t%c" + newProblems.replace(/\n/g, "\n\t"),
        style + "font-weight: bold;",
        style + "font-weight: normal;"
      );
    }
  }

  return {
    cleanProblemsCache: function () {
      previousProblems = null;
    },
    problems: function(type, obj) {
      if (options.warn) {
        log(type, obj);
      }
      if (overlay && type !== 'warnings') overlay.showProblems(type, obj[type]);
    },
    success: function() {
      if (overlay) overlay.clear();
    },
    useCustomOverlay: function(customOverlay) {
      overlay = customOverlay;
    }
  };
}

var processUpdate = __webpack_require__("./node_modules/webpack-hot-middleware/process-update.js");

var customHandler;
var subscribeAllHandler;
function processMessage(obj) {
  switch(obj.action) {
    case "building":
      if (options.log) {
        console.log(
          "[HMR] bundle " + (obj.name ? "'" + obj.name + "' " : "") +
          "rebuilding"
        );
      }
      break;
    case "built":
      if (options.log) {
        console.log(
          "[HMR] bundle " + (obj.name ? "'" + obj.name + "' " : "") +
          "rebuilt in " + obj.time + "ms"
        );
      }
      // fall through
    case "sync":
      if (obj.name && options.name && obj.name !== options.name) {
        return;
      }
      if (obj.errors.length > 0) {
        if (reporter) reporter.problems('errors', obj);
      } else {
        if (reporter) {
          if (obj.warnings.length > 0) {
            reporter.problems('warnings', obj);
          } else {
            reporter.cleanProblemsCache();
          }
          reporter.success();
        }
        processUpdate(obj.hash, obj.modules, options);
      }
      break;
    default:
      if (customHandler) {
        customHandler(obj);
      }
  }

  if (subscribeAllHandler) {
    subscribeAllHandler(obj);
  }
}

if (module) {
  module.exports = {
    subscribeAll: function subscribeAll(handler) {
      subscribeAllHandler = handler;
    },
    subscribe: function subscribe(handler) {
      customHandler = handler;
    },
    useCustomOverlay: function useCustomOverlay(customOverlay) {
      if (reporter) reporter.useCustomOverlay(customOverlay);
    },
    setOptionsAndConnect: setOptionsAndConnect
  };
}

/* WEBPACK VAR INJECTION */}.call(exports, "?path=./public__webpack_hmr", __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack-hot-middleware/process-update.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Based heavily on https://github.com/webpack/webpack/blob/
 *  c0afdf9c6abc1dd70707c594e473802a566f7b6e/hot/only-dev-server.js
 * Original copyright Tobias Koppers @sokra (MIT license)
 */

/* global window __webpack_hash__ */

if (false) {
  throw new Error("[HMR] Hot Module Replacement is disabled.");
}

var hmrDocsUrl = "https://webpack.js.org/concepts/hot-module-replacement/"; // eslint-disable-line max-len

var lastHash;
var failureStatuses = { abort: 1, fail: 1 };
var applyOptions = { ignoreUnaccepted: true };

function upToDate(hash) {
  if (hash) lastHash = hash;
  return lastHash == __webpack_require__.h();
}

module.exports = function(hash, moduleMap, options) {
  var reload = options.reload;
  if (!upToDate(hash) && module.hot.status() == "idle") {
    if (options.log) console.log("[HMR] Checking for updates on the server...");
    check();
  }

  function check() {
    var cb = function(err, updatedModules) {
      if (err) return handleError(err);

      if(!updatedModules) {
        if (options.warn) {
          console.warn("[HMR] Cannot find update (Full reload needed)");
          console.warn("[HMR] (Probably because of restarting the server)");
        }
        performReload();
        return null;
      }

      var applyCallback = function(applyErr, renewedModules) {
        if (applyErr) return handleError(applyErr);

        if (!upToDate()) check();

        logUpdates(updatedModules, renewedModules);
      };

      var applyResult = module.hot.apply(applyOptions, applyCallback);
      // webpack 2 promise
      if (applyResult && applyResult.then) {
        // HotModuleReplacement.runtime.js refers to the result as `outdatedModules`
        applyResult.then(function(outdatedModules) {
          applyCallback(null, outdatedModules);
        });
        applyResult.catch(applyCallback);
      }

    };

    var result = module.hot.check(false, cb);
    // webpack 2 promise
    if (result && result.then) {
        result.then(function(updatedModules) {
            cb(null, updatedModules);
        });
        result.catch(cb);
    }
  }

  function logUpdates(updatedModules, renewedModules) {
    var unacceptedModules = updatedModules.filter(function(moduleId) {
      return renewedModules && renewedModules.indexOf(moduleId) < 0;
    });

    if(unacceptedModules.length > 0) {
      if (options.warn) {
        console.warn(
          "[HMR] The following modules couldn't be hot updated: " +
          "(Full reload needed)\n" +
          "This is usually because the modules which have changed " +
          "(and their parents) do not know how to hot reload themselves. " +
          "See " + hmrDocsUrl + " for more details."
        );
        unacceptedModules.forEach(function(moduleId) {
          console.warn("[HMR]  - " + moduleMap[moduleId]);
        });
      }
      performReload();
      return;
    }

    if (options.log) {
      if(!renewedModules || renewedModules.length === 0) {
        console.log("[HMR] Nothing hot updated.");
      } else {
        console.log("[HMR] Updated modules:");
        renewedModules.forEach(function(moduleId) {
          console.log("[HMR]  - " + moduleMap[moduleId]);
        });
      }

      if (upToDate()) {
        console.log("[HMR] App is up to date.");
      }
    }
  }

  function handleError(err) {
    if (module.hot.status() in failureStatuses) {
      if (options.warn) {
        console.warn("[HMR] Cannot check for update (Full reload needed)");
        console.warn("[HMR] " + err.stack || err.message);
      }
      performReload();
      return;
    }
    if (options.warn) {
      console.warn("[HMR] Update check failed: " + err.stack || err.message);
    }
  }

  function performReload() {
    if (reload) {
      if (options.warn) console.warn("[HMR] Reloading page");
      window.location.reload();
    }
  }
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__App_scss__ = __webpack_require__("./src/App.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__App_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__App_scss__);







var App = function (_Component) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(App, _Component);

    function App(props) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, App);

        var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = _this.getInitialState();
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(App, [{
        key: 'getInitialState',
        value: function getInitialState() {
            return {};
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                'div',
                { className: 'container-fluid' },
                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                    'h4',
                    { 'data-selenium-id': 'wpng-header-prefix' },
                    '6-2'
                ),
                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                    'h2',
                    { 'data-selenium-id': 'wpng-header-title' },
                    'Apply Inventory Cost Flow Methods and Discuss Their Financial Effects'
                )
            );
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./src/App.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/home/sadist/nodejs/aladon/src/styles\"]}!./src/App.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/home/sadist/nodejs/aladon/src/styles\"]}!./src/App.scss", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/home/sadist/nodejs/aladon/src/styles\"]}!./src/App.scss");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss__ = __webpack_require__("./src/index.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__("./src/App.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registerServiceWorker__ = __webpack_require__("./src/registerServiceWorker.js");






__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__App__["a" /* default */], null), document.getElementById('root'));
Object(__WEBPACK_IMPORTED_MODULE_4__registerServiceWorker__["a" /* default */])();

/***/ }),

/***/ "./src/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/home/sadist/nodejs/aladon/src/styles\"]}!./src/index.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/home/sadist/nodejs/aladon/src/styles\"]}!./src/index.scss", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/home/sadist/nodejs/aladon/src/styles\"]}!./src/index.scss");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/registerServiceWorker.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = register;
/* unused harmony export unregister */
// In production, we register a service worker to serve assets from local cache.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.

// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.

var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
// [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' ||
// 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

function register() {
  if (false) {
    // The URL constructor is available in all browsers that support SW.
    var publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', function () {
      var swUrl = process.env.PUBLIC_URL + '/service-worker.js';

      if (!isLocalhost) {
        // Is not local host. Just register service worker
        registerValidSW(swUrl);
      } else {
        // This is running on localhost. Lets check if a service worker still exists or not.
        checkValidServiceWorker(swUrl);
      }
    });
  }
}

function registerValidSW(swUrl) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;
      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the old content will have been purged and
            // the fresh content will have been added to the cache.
            // It's the perfect time to display a "New content is
            // available; please refresh." message in your web app.
            console.log('New content is available; please refresh.');
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.');
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/index.js");
module.exports = __webpack_require__("./node_modules/webpack-hot-middleware/client.js?path=./public__webpack_hmr");


/***/ })

},[1]);
//# sourceMappingURL=main.js.map