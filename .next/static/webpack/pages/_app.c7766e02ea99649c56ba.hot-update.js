webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createSuper; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn.js */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(Derived) {
  var hasNativeReflectConstruct = Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return function _createSuperInternal() {
    var Super = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result);
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/get.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/get.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _get; });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = Object(_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _isNativeReflectConstruct; });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread2; });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/superPropBase.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _superPropBase; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object);
    if (object === null) break;
  }

  return object;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/dom-align/dist-web/index.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-align/dist-web/index.js ***!
  \**************************************************/
/*! exports provided: default, alignElement, alignPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignElement", function() { return alignElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignPoint", function() { return alignPoint; });
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var vendorPrefix;
var jsCssMap = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  // IE did it wrong again ...
  ms: '-ms-',
  O: '-o-'
};

function getVendorPrefix() {
  if (vendorPrefix !== undefined) {
    return vendorPrefix;
  }

  vendorPrefix = '';
  var style = document.createElement('p').style;
  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }

  return vendorPrefix;
}

function getTransitionName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "TransitionProperty") : 'transitionProperty';
}

function getTransformName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "Transform") : 'transform';
}
function setTransitionProperty(node, value) {
  var name = getTransitionName();

  if (name) {
    node.style[name] = value;

    if (name !== 'transitionProperty') {
      node.style.transitionProperty = value;
    }
  }
}

function setTransform(node, value) {
  var name = getTransformName();

  if (name) {
    node.style[name] = value;

    if (name !== 'transform') {
      node.style.transform = value;
    }
  }
}

function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName()];
}
function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());

  if (transform && transform !== 'none') {
    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
    return {
      x: parseFloat(matrix[12] || matrix[4], 0),
      y: parseFloat(matrix[13] || matrix[5], 0)
    };
  }

  return {
    x: 0,
    y: 0
  };
}
var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;
function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());

  if (transform && transform !== 'none') {
    var arr;
    var match2d = transform.match(matrix2d);

    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, "matrix(".concat(arr.join(','), ")"));
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, "matrix3d(".concat(arr.join(','), ")"));
    }
  } else {
    setTransform(node, "translateX(".concat(xy.x, "px) translateY(").concat(xy.y, "px) translateZ(0)"));
  }
}

var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
var getComputedStyleX; // https://stackoverflow.com/a/3485654/3040605

function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = 'none';
  elem.offsetHeight; // eslint-disable-line

  elem.style.display = originalStyle;
}

function css(el, name, v) {
  var value = v;

  if (_typeof(name) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }

    return undefined;
  }

  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value = "".concat(value, "px");
    }

    el.style[name] = value;
    return undefined;
  }

  return getComputedStyleX(el, name);
}

function getClientPosition(elem) {
  var box;
  var x;
  var y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement; // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式

  box = elem.getBoundingClientRect(); // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top; // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.
  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.
  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y
  };
}

function getScroll(w, top) {
  var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
  var method = "scroll".concat(top ? 'Top' : 'Left');

  if (typeof ret !== 'number') {
    var d = w.document; // ie6,7,8 standard mode

    ret = d.documentElement[method];

    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }

  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}
/**
 * A crude way of determining if an object is a window
 * @member util
 */


function isWindow(obj) {
  // must use == for ie8

  /* eslint eqeqeq:0 */
  return obj !== null && obj !== undefined && obj == obj.window;
}

function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }

  if (node.nodeType === 9) {
    return node;
  }

  return node.ownerDocument;
}

function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = '';
  var d = getDocument(elem);
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null); // https://github.com/kissyteam/kissy/issues/61

  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), 'i');

var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name]; // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity

  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT]; // prevent flashing of content

    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT]; // Put in the new values to get a computed value out

    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX; // Revert the changed values

    style[LEFT] = left;
    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }

  return ret === '' ? 'auto' : ret;
}

if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function getOffsetDirection(dir, option) {
  if (dir === 'left') {
    return option.useCssRight ? 'right' : dir;
  }

  return option.useCssBottom ? 'bottom' : dir;
}

function oppositeOffsetDirection(dir) {
  if (dir === 'left') {
    return 'right';
  } else if (dir === 'right') {
    return 'left';
  } else if (dir === 'top') {
    return 'bottom';
  } else if (dir === 'bottom') {
    return 'top';
  }
} // 设置 elem 相对 elem.ownerDocument 的坐标


function setLeftTop(elem, offset, option) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }

  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection('left', option);
  var verticalProperty = getOffsetDirection('top', option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

  if (horizontalProperty !== 'left') {
    presetH = 999;
  }

  if (verticalProperty !== 'top') {
    presetV = 999;
  }

  var originalTransition = '';
  var originalOffset = getOffset(elem);

  if ('left' in offset || 'top' in offset) {
    originalTransition = getTransitionProperty(elem) || '';
    setTransitionProperty(elem, 'none');
  }

  if ('left' in offset) {
    elem.style[oppositeHorizontalProperty] = '';
    elem.style[horizontalProperty] = "".concat(presetH, "px");
  }

  if ('top' in offset) {
    elem.style[oppositeVerticalProperty] = '';
    elem.style[verticalProperty] = "".concat(presetV, "px");
  } // force relayout


  forceRelayout(elem);
  var old = getOffset(elem);
  var originalStyle = {};

  for (var key in offset) {
    if (offset.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === 'left' ? presetH : presetV;
      var off = originalOffset[key] - old[key];

      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }

  css(elem, originalStyle); // force relayout

  forceRelayout(elem);

  if ('left' in offset || 'top' in offset) {
    setTransitionProperty(elem, originalTransition);
  }

  var ret = {};

  for (var _key in offset) {
    if (offset.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);

      var _off = offset[_key] - originalOffset[_key];

      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }

  css(elem, ret);
}

function setTransform$1(elem, offset) {
  var originalOffset = getOffset(elem);
  var originalXY = getTransformXY(elem);
  var resultXY = {
    x: originalXY.x,
    y: originalXY.y
  };

  if ('left' in offset) {
    resultXY.x = originalXY.x + offset.left - originalOffset.left;
  }

  if ('top' in offset) {
    resultXY.y = originalXY.y + offset.top - originalOffset.top;
  }

  setTransformXY(elem, resultXY);
}

function setOffset(elem, offset, option) {
  if (option.ignoreShake) {
    var oriOffset = getOffset(elem);
    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset.left.toFixed(0);
    var tTop = offset.top.toFixed(0);

    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }

  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset, option);
  } else if (option.useCssTransform && getTransformName() in document.body.style) {
    setTransform$1(elem, offset);
  } else {
    setLeftTop(elem, offset, option);
  }
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name; // Remember the old values, and insert the new ones

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem); // Revert the old values

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop;
  var j;
  var i;

  for (j = 0; j < props.length; j++) {
    prop = props[j];

    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;

        if (prop === 'border') {
          cssProp = "".concat(prop).concat(which[i], "Width");
        } else {
          cssProp = prop + which[i];
        }

        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }

  return value;
}

var domUtils = {
  getParent: function getParent(element) {
    var parent = element;

    do {
      if (parent.nodeType === 11 && parent.host) {
        parent = parent.host;
      } else {
        parent = parent.parentNode;
      }
    } while (parent && parent.nodeType !== 1 && parent.nodeType !== 9);

    return parent;
  }
};
each(['Width', 'Height'], function (name) {
  domUtils["doc".concat(name)] = function (refWin) {
    var d = refWin.document;
    return Math.max( // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement["scroll".concat(name)], // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body["scroll".concat(name)], domUtils["viewport".concat(name)](d));
  };

  domUtils["viewport".concat(name)] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = "client".concat(name);
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop]; // 标准模式取 documentElement
    // backcompat 取 body

    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});
/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */

function getWH(elem, name, ex) {
  var extra = ex;

  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem);
  var cssBoxValue = 0;

  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
    borderBoxValue = undefined; // Fall back to computed then un computed css if necessary

    cssBoxValue = getComputedStyleX(elem, name);

    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    } // Normalize '', auto, and prepare for extra


    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }

  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }

  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;

  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which);
    }

    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }

    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which) : getPBMWidth(elem, ['margin'], which));
  }

  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
}; // fix #119 : https://github.com/kissyteam/kissy/issues/119

function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var val;
  var elem = args[0]; // in case elem is window
  // elem.offsetWidth === undefined

  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }

  return val;
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);

  domUtils["outer".concat(first)] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, v) {
    var val = v;

    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);

        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which);
        }

        return css(elem, name, val);
      }

      return undefined;
    }

    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }

  return to;
}

var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }

    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  getDocument: getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== 'undefined') {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },
  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var i;
    var ret = {};

    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }

    var overflow = obj.overflow;

    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }

    return ret;
  },
  mix: mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge() {
    var ret = {};

    for (var i = 0; i < arguments.length; i++) {
      utils.mix(ret, i < 0 || arguments.length <= i ? undefined : arguments[i]);
    }

    return ret;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
mix(utils, domUtils);

/**
 * 得到会导致元素显示不全的祖先元素
 */

var getParent = utils.getParent;

function getOffsetParent(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return null;
  } // ie 这个也不是完全可行

  /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // 统一的 offsetParent 方法


  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent;
  var positionStyle = utils.css(element, 'position');
  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html' ? null : getParent(element);
  }

  for (parent = getParent(element); parent && parent !== body && parent.nodeType !== 9; parent = getParent(parent)) {
    positionStyle = utils.css(parent, 'position');

    if (positionStyle !== 'static') {
      return parent;
    }
  }

  return null;
}

var getParent$1 = utils.getParent;
function isAncestorFixed(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return false;
  }

  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent = null;

  for (parent = getParent$1(element); parent && parent !== body; parent = getParent$1(parent)) {
    var positionStyle = utils.css(parent, 'position');

    if (positionStyle === 'fixed') {
      return true;
    }
  }

  return false;
}

/**
 * 获得元素的显示部分的区域
 */

function getVisibleRectForElement(element, alwaysByViewport) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = getOffsetParent(element);
  var doc = utils.getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement; // Determine the size of the visible rect by climbing the dom accounting for
  // all scrollable containers.

  while (el) {
    // clientWidth is zero for inline block elements in ie.
    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    el !== body && el !== documentElement && utils.css(el, 'overflow') !== 'visible') {
      var pos = utils.offset(el); // add border

      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right, // consider area without scrollBar
      pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }

    el = getOffsetParent(el);
  } // Set element position to fixed
  // make sure absolute element itself don't affect it's visible area
  // https://github.com/ant-design/ant-design/issues/7601


  var originalPosition = null;

  if (!utils.isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = utils.css(element, 'position');

    if (position === 'absolute') {
      element.style.position = 'fixed';
    }
  }

  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight; // scrollXXX on html is sync with body which means overflow: hidden on body gets wrong scrollXXX.
  // We should cut this ourself.

  var bodyStyle = window.getComputedStyle(body);

  if (bodyStyle.overflowX === 'hidden') {
    documentWidth = win.innerWidth;
  }

  if (bodyStyle.overflowY === 'hidden') {
    documentHeight = win.innerHeight;
  } // Reset element position after calculate the visible area


  if (element.style) {
    element.style.position = originalPosition;
  }

  if (alwaysByViewport || isAncestorFixed(element)) {
    // Clip by viewport's size.
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    // Clip by document's size.
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }

  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}

function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = utils.clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };

  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  } // Left edge inside and right edge outside viewport, try to resize it.


  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  } // Right edge outside viewport, try to move it.


  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  } // Top edge outside viewport, try to move it.


  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  } // Top edge inside and bottom edge outside viewport, try to resize it.


  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  } // Bottom edge outside viewport, try to move it.


  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }

  return utils.mix(pos, size);
}

function getRegion(node) {
  var offset;
  var w;
  var h;

  if (!utils.isWindow(node) && node.nodeType !== 9) {
    offset = utils.offset(node);
    w = utils.outerWidth(node);
    h = utils.outerHeight(node);
  } else {
    var win = utils.getWindow(node);
    offset = {
      left: utils.getWindowScrollLeft(win),
      top: utils.getWindowScrollTop(win)
    };
    w = utils.viewportWidth(win);
    h = utils.viewportHeight(win);
  }

  offset.width = w;
  offset.height = h;
  return offset;
}

/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */
function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;
  var x = region.left;
  var y = region.top;

  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }

  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }

  return {
    left: x,
    top: y
  };
}

function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  var p1 = getAlignOffset(refNodeRegion, points[1]);
  var p2 = getAlignOffset(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];
  return {
    left: Math.round(elRegion.left - diff[0] + offset[0] - targetOffset[0]),
    top: Math.round(elRegion.top - diff[1] + offset[1] - targetOffset[1])
  };
}

/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */

function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}

function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}

function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}

function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}

function flip(points, reg, map) {
  var ret = [];
  utils.each(points, function (p) {
    ret.push(p.replace(reg, function (m) {
      return map[m];
    }));
  });
  return ret;
}

function flipOffset(offset, index) {
  offset[index] = -offset[index];
  return offset;
}

function convertOffset(str, offsetLen) {
  var n;

  if (/%$/.test(str)) {
    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n = parseInt(str, 10);
  }

  return n || 0;
}

function normalizeOffset(offset, el) {
  offset[0] = convertOffset(offset[0], el.width);
  offset[1] = convertOffset(offset[1], el.height);
}
/**
 * @param el
 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
 * @param align
 */


function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset = [].concat(offset);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  var alwaysByViewport = !!(overflow && overflow.alwaysByViewport); // 当前节点可以被放置的显示区域

  var visibleRect = getVisibleRectForElement(source, alwaysByViewport); // 当前节点所占的区域, left/top/width/height

  var elRegion = getRegion(source); // 将 offset 转换成数值，支持百分比

  normalizeOffset(offset, elRegion);
  normalizeOffset(targetOffset, tgtRegion); // 当前节点将要被放置的位置

  var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset); // 当前节点将要所处的区域

  var newElRegion = utils.merge(elRegion, elFuturePos); // 如果可视区域不能完全放置当前节点时允许调整

  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
    if (overflow.adjustX) {
      // 如果横向不能放下
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var newPoints = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l'
        }); // 偏移量也反下

        var newOffset = flipOffset(offset, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);

        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }

    if (overflow.adjustY) {
      // 如果纵向不能放下
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var _newPoints = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't'
        }); // 偏移量也反下


        var _newOffset = flipOffset(offset, 1);

        var _newTargetOffset = flipOffset(targetOffset, 1);

        var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);

        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    } // 如果失败，重新计算当前节点将要被放置的位置


    if (fail) {
      elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
      utils.mix(newElRegion, elFuturePos);
    }

    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect); // 检查反下后的位置是否可以放下了，如果仍然放不下：
    // 1. 复原修改过的定位参数

    if (isStillFailX || isStillFailY) {
      var _newPoints2 = points; // 重置对应部分的翻转逻辑

      if (isStillFailX) {
        _newPoints2 = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l'
        });
      }

      if (isStillFailY) {
        _newPoints2 = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't'
        });
      }

      points = _newPoints2;
      offset = align.offset || [0, 0];
      targetOffset = align.targetOffset || [0, 0];
    } // 2. 只有指定了可以调整当前方向才调整


    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY; // 确实要调整，甚至可能会调整高度宽度

    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  } // need judge to in case set fixed with in css on height auto element


  if (newElRegion.width !== elRegion.width) {
    utils.css(source, 'width', utils.width(source) + newElRegion.width - elRegion.width);
  }

  if (newElRegion.height !== elRegion.height) {
    utils.css(source, 'height', utils.height(source) + newElRegion.height - elRegion.height);
  } // https://github.com/kissyteam/kissy/issues/190
  // 相对于屏幕位置没变，而 left/top 变了
  // 例如 <div 'relative'><el absolute></div>


  utils.offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform,
    ignoreShake: align.ignoreShake
  });
  return {
    points: points,
    offset: offset,
    targetOffset: targetOffset,
    overflow: newOverflowCfg
  };
}
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/

function isOutOfVisibleRect(target, alwaysByViewport) {
  var visibleRect = getVisibleRectForElement(target, alwaysByViewport);
  var targetRegion = getRegion(target);
  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}

function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = getRegion(target);
  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target, align.overflow && align.overflow.alwaysByViewport);
  return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
}

alignElement.__getOffsetParent = getOffsetParent;
alignElement.__getVisibleRectForElement = getVisibleRectForElement;

/**
 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
 * If client position provided, will internal convert to page position.
 */

function alignPoint(el, tgtPoint, align) {
  var pageX;
  var pageY;
  var doc = utils.getDocument(el);
  var win = doc.defaultView || doc.parentWindow;
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);

  if ('pageX' in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }

  if ('pageY' in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }

  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0
  };
  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight; // Provide default target point

  var points = [align.points[0], 'cc'];
  return doAlign(el, tgtRegion, _objectSpread2({}, align, {
    points: points
  }), pointInView);
}

/* harmony default export */ __webpack_exports__["default"] = (alignElement);

//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/rc-align/es/Align.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-align/es/Align.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/ref */ "./node_modules/rc-util/es/ref.js");
/* harmony import */ var rc_util_es_Dom_isVisible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/Dom/isVisible */ "./node_modules/rc-util/es/Dom/isVisible.js");
/* harmony import */ var dom_align__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-align */ "./node_modules/dom-align/dist-web/index.js");
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "./node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util */ "./node_modules/rc-align/es/util.js");
/* harmony import */ var _hooks_useBuffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks/useBuffer */ "./node_modules/rc-align/es/hooks/useBuffer.js");



/**
 * Removed props:
 *  - childrenProps
 */








function getElement(func) {
  if (typeof func !== 'function') return null;
  return func();
}

function getPoint(point) {
  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(point) !== 'object' || !point) return null;
  return point;
}

var Align = function Align(_ref, ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      target = _ref.target,
      align = _ref.align,
      onAlign = _ref.onAlign,
      monitorWindowResize = _ref.monitorWindowResize,
      _ref$monitorBufferTim = _ref.monitorBufferTime,
      monitorBufferTime = _ref$monitorBufferTim === void 0 ? 0 : _ref$monitorBufferTim;
  var cacheRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef({});
  var nodeRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
  var childNode = react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(children); // ===================== Align ======================
  // We save the props here to avoid closure makes props ood

  var forceAlignPropsRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef({});
  forceAlignPropsRef.current.disabled = disabled;
  forceAlignPropsRef.current.target = target;
  forceAlignPropsRef.current.onAlign = onAlign;

  var _useBuffer = Object(_hooks_useBuffer__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
    var _forceAlignPropsRef$c = forceAlignPropsRef.current,
        latestDisabled = _forceAlignPropsRef$c.disabled,
        latestTarget = _forceAlignPropsRef$c.target,
        latestOnAlign = _forceAlignPropsRef$c.onAlign;

    if (!latestDisabled && latestTarget) {
      var source = nodeRef.current;
      var result;
      var element = getElement(latestTarget);
      var point = getPoint(latestTarget);
      cacheRef.current.element = element;
      cacheRef.current.point = point; // IE lose focus after element realign
      // We should record activeElement and restore later

      var _document = document,
          activeElement = _document.activeElement; // We only align when element is visible

      if (element && Object(rc_util_es_Dom_isVisible__WEBPACK_IMPORTED_MODULE_4__["default"])(element)) {
        result = Object(dom_align__WEBPACK_IMPORTED_MODULE_5__["alignElement"])(source, element, align);
      } else if (point) {
        result = Object(dom_align__WEBPACK_IMPORTED_MODULE_5__["alignPoint"])(source, point, align);
      }

      Object(_util__WEBPACK_IMPORTED_MODULE_7__["restoreFocus"])(activeElement, source);

      if (latestOnAlign && result) {
        latestOnAlign(source, result);
      }

      return true;
    }

    return false;
  }, monitorBufferTime),
      _useBuffer2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useBuffer, 2),
      _forceAlign = _useBuffer2[0],
      cancelForceAlign = _useBuffer2[1]; // ===================== Effect =====================
  // Listen for target updated


  var resizeMonitor = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef({
    cancel: function cancel() {}
  }); // Listen for source updated

  var sourceResizeMonitor = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef({
    cancel: function cancel() {}
  });
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    var element = getElement(target);
    var point = getPoint(target);

    if (nodeRef.current !== sourceResizeMonitor.current.element) {
      sourceResizeMonitor.current.cancel();
      sourceResizeMonitor.current.element = nodeRef.current;
      sourceResizeMonitor.current.cancel = Object(_util__WEBPACK_IMPORTED_MODULE_7__["monitorResize"])(nodeRef.current, _forceAlign);
    }

    if (cacheRef.current.element !== element || !Object(_util__WEBPACK_IMPORTED_MODULE_7__["isSamePoint"])(cacheRef.current.point, point)) {
      _forceAlign(); // Add resize observer


      if (resizeMonitor.current.element !== element) {
        resizeMonitor.current.cancel();
        resizeMonitor.current.element = element;
        resizeMonitor.current.cancel = Object(_util__WEBPACK_IMPORTED_MODULE_7__["monitorResize"])(element, _forceAlign);
      }
    }
  }); // Listen for disabled change

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (!disabled) {
      _forceAlign();
    } else {
      cancelForceAlign();
    }
  }, [disabled]); // Listen for window resize

  var winResizeRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (monitorWindowResize) {
      if (!winResizeRef.current) {
        winResizeRef.current = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_6__["default"])(window, 'resize', _forceAlign);
      }
    } else if (winResizeRef.current) {
      winResizeRef.current.remove();
      winResizeRef.current = null;
    }
  }, [monitorWindowResize]); // Clear all if unmount

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    return function () {
      resizeMonitor.current.cancel();
      sourceResizeMonitor.current.cancel();
      if (winResizeRef.current) winResizeRef.current.remove();
      cancelForceAlign();
    };
  }, []); // ====================== Ref =======================

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useImperativeHandle(ref, function () {
    return {
      forceAlign: function forceAlign() {
        return _forceAlign(true);
      }
    };
  }); // ===================== Render =====================

  if (react__WEBPACK_IMPORTED_MODULE_2___default.a.isValidElement(childNode)) {
    childNode = react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(childNode, {
      ref: Object(rc_util_es_ref__WEBPACK_IMPORTED_MODULE_3__["composeRef"])(childNode.ref, nodeRef)
    });
  }

  return childNode;
};

var RefAlign = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(Align);
RefAlign.displayName = 'Align';
/* harmony default export */ __webpack_exports__["default"] = (RefAlign);

/***/ }),

/***/ "./node_modules/rc-align/es/hooks/useBuffer.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-align/es/hooks/useBuffer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (callback, buffer) {
  var calledRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(false);
  var timeoutRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);

  function cancelTrigger() {
    window.clearTimeout(timeoutRef.current);
  }

  function trigger(force) {
    if (!calledRef.current || force === true) {
      if (callback() === false) {
        // Not delay since callback cancelled self
        return;
      }

      calledRef.current = true;
      cancelTrigger();
      timeoutRef.current = window.setTimeout(function () {
        calledRef.current = false;
      }, buffer);
    } else {
      cancelTrigger();
      timeoutRef.current = window.setTimeout(function () {
        calledRef.current = false;
        trigger();
      }, buffer);
    }
  }

  return [trigger, function () {
    calledRef.current = false;
    cancelTrigger();
  }];
});

/***/ }),

/***/ "./node_modules/rc-align/es/index.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-align/es/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Align__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Align */ "./node_modules/rc-align/es/Align.js");
// export this package's api

/* harmony default export */ __webpack_exports__["default"] = (_Align__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-align/es/util.js":
/*!******************************************!*\
  !*** ./node_modules/rc-align/es/util.js ***!
  \******************************************/
/*! exports provided: isSamePoint, restoreFocus, monitorResize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSamePoint", function() { return isSamePoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreFocus", function() { return restoreFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monitorResize", function() { return monitorResize; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
/* harmony import */ var rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/Dom/contains */ "./node_modules/rc-util/es/Dom/contains.js");



function isSamePoint(prev, next) {
  if (prev === next) return true;
  if (!prev || !next) return false;

  if ('pageX' in next && 'pageY' in next) {
    return prev.pageX === next.pageX && prev.pageY === next.pageY;
  }

  if ('clientX' in next && 'clientY' in next) {
    return prev.clientX === next.clientX && prev.clientY === next.clientY;
  }

  return false;
}
function restoreFocus(activeElement, container) {
  // Focus back if is in the container
  if (activeElement !== document.activeElement && Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_2__["default"])(container, activeElement) && typeof activeElement.focus === 'function') {
    activeElement.focus();
  }
}
function monitorResize(element, callback) {
  var prevWidth = null;
  var prevHeight = null;

  function onResize(_ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 1),
        target = _ref2[0].target;

    if (!document.documentElement.contains(target)) return;

    var _target$getBoundingCl = target.getBoundingClientRect(),
        width = _target$getBoundingCl.width,
        height = _target$getBoundingCl.height;

    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);

    if (prevWidth !== fixedWidth || prevHeight !== fixedHeight) {
      // https://webkit.org/blog/9997/resizeobserver-in-webkit/
      Promise.resolve().then(function () {
        callback({
          width: fixedWidth,
          height: fixedHeight
        });
      });
    }

    prevWidth = fixedWidth;
    prevHeight = fixedHeight;
  }

  var resizeObserver = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"](onResize);

  if (element) {
    resizeObserver.observe(element);
  }

  return function () {
    resizeObserver.disconnect();
  };
}

/***/ }),

/***/ "./node_modules/rc-motion/es/CSSMotion.js":
/*!************************************************!*\
  !*** ./node_modules/rc-motion/es/CSSMotion.js ***!
  \************************************************/
/*! exports provided: genCSSMotion, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genCSSMotion", function() { return genCSSMotion; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-util/es/Dom/findDOMNode */ "./node_modules/rc-util/es/Dom/findDOMNode.js");
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/ref */ "./node_modules/rc-util/es/ref.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/motion */ "./node_modules/rc-motion/es/util/motion.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interface */ "./node_modules/rc-motion/es/interface.js");
/* harmony import */ var _hooks_useStatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hooks/useStatus */ "./node_modules/rc-motion/es/hooks/useStatus.js");
/* harmony import */ var _DomWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DomWrapper */ "./node_modules/rc-motion/es/DomWrapper.js");
/* harmony import */ var _hooks_useStepQueue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hooks/useStepQueue */ "./node_modules/rc-motion/es/hooks/useStepQueue.js");





/* eslint-disable react/default-props-match-prop-types, react/no-multi-comp, react/prop-types */










/**
 * `transitionSupport` is used for none transition test case.
 * Default we use browser transition event support check.
 */

function genCSSMotion(config) {
  var transitionSupport = config;

  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(config) === 'object') {
    transitionSupport = config.transitionSupport;
  }

  function isSupportTransition(props) {
    return !!(props.motionName && transitionSupport);
  }

  var CSSMotion = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"](function (props, ref) {
    var _props$visible = props.visible,
        visible = _props$visible === void 0 ? true : _props$visible,
        _props$removeOnLeave = props.removeOnLeave,
        removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave,
        forceRender = props.forceRender,
        children = props.children,
        motionName = props.motionName,
        leavedClassName = props.leavedClassName,
        eventProps = props.eventProps;
    var supportMotion = isSupportTransition(props); // Ref to the react node, it may be a HTMLElement

    var nodeRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(); // Ref to the dom wrapper in case ref can not pass to HTMLElement

    var wrapperNodeRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();

    function getDomElement() {
      try {
        return Object(rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_5__["default"])(nodeRef.current || wrapperNodeRef.current);
      } catch (e) {
        // Only happen when `motionDeadline` trigger but element removed.
        return null;
      }
    }

    var _useStatus = Object(_hooks_useStatus__WEBPACK_IMPORTED_MODULE_10__["default"])(supportMotion, visible, getDomElement, props),
        _useStatus2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useStatus, 4),
        status = _useStatus2[0],
        statusStep = _useStatus2[1],
        statusStyle = _useStatus2[2],
        mergedVisible = _useStatus2[3]; // Record whether content has rended
    // Will return null for un-rendered even when `removeOnLeave={false}`


    var renderedRef = react__WEBPACK_IMPORTED_MODULE_4__["useRef"](mergedVisible);

    if (mergedVisible) {
      renderedRef.current = true;
    } // ====================== Refs ======================


    var originRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(ref);
    originRef.current = ref;
    var setNodeRef = react__WEBPACK_IMPORTED_MODULE_4__["useCallback"](function (node) {
      nodeRef.current = node;
      Object(rc_util_es_ref__WEBPACK_IMPORTED_MODULE_6__["fillRef"])(originRef.current, node);
    }, []); // ===================== Render =====================

    var motionChildren;

    var mergedProps = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, eventProps), {}, {
      visible: visible
    });

    if (!children) {
      // No children
      motionChildren = null;
    } else if (status === _interface__WEBPACK_IMPORTED_MODULE_9__["STATUS_NONE"] || !isSupportTransition(props)) {
      // Stable children
      if (mergedVisible) {
        motionChildren = children(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, mergedProps), setNodeRef);
      } else if (!removeOnLeave && renderedRef.current) {
        motionChildren = children(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, mergedProps), {}, {
          className: leavedClassName
        }), setNodeRef);
      } else if (forceRender) {
        motionChildren = children(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, mergedProps), {}, {
          style: {
            display: 'none'
          }
        }), setNodeRef);
      } else {
        motionChildren = null;
      }
    } else {
      var _classNames;

      // In motion
      var statusSuffix;

      if (statusStep === _interface__WEBPACK_IMPORTED_MODULE_9__["STEP_PREPARE"]) {
        statusSuffix = 'prepare';
      } else if (Object(_hooks_useStepQueue__WEBPACK_IMPORTED_MODULE_12__["isActive"])(statusStep)) {
        statusSuffix = 'active';
      } else if (statusStep === _interface__WEBPACK_IMPORTED_MODULE_9__["STEP_START"]) {
        statusSuffix = 'start';
      }

      motionChildren = children(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, mergedProps), {}, {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(Object(_util_motion__WEBPACK_IMPORTED_MODULE_8__["getTransitionName"])(motionName, status), (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, Object(_util_motion__WEBPACK_IMPORTED_MODULE_8__["getTransitionName"])(motionName, "".concat(status, "-").concat(statusSuffix)), statusSuffix), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, motionName, typeof motionName === 'string'), _classNames)),
        style: statusStyle
      }), setNodeRef);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_DomWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], {
      ref: wrapperNodeRef
    }, motionChildren);
  });
  CSSMotion.displayName = 'CSSMotion';
  return CSSMotion;
}
/* harmony default export */ __webpack_exports__["default"] = (genCSSMotion(_util_motion__WEBPACK_IMPORTED_MODULE_8__["supportTransition"]));

/***/ }),

/***/ "./node_modules/rc-motion/es/CSSMotionList.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-motion/es/CSSMotionList.js ***!
  \****************************************************/
/*! exports provided: genCSSMotionList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genCSSMotionList", function() { return genCSSMotionList; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CSSMotion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CSSMotion */ "./node_modules/rc-motion/es/CSSMotion.js");
/* harmony import */ var _util_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util/motion */ "./node_modules/rc-motion/es/util/motion.js");
/* harmony import */ var _util_diff__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util/diff */ "./node_modules/rc-motion/es/util/diff.js");








/* eslint react/prop-types: 0 */




var MOTION_PROP_NAMES = ['eventProps', 'visible', 'children', 'motionName', 'motionAppear', 'motionEnter', 'motionLeave', 'motionLeaveImmediately', 'motionDeadline', 'removeOnLeave', 'leavedClassName', 'onAppearStart', 'onAppearActive', 'onAppearEnd', 'onEnterStart', 'onEnterActive', 'onEnterEnd', 'onLeaveStart', 'onLeaveActive', 'onLeaveEnd'];
/**
 * Generate a CSSMotionList component with config
 * @param transitionSupport No need since CSSMotionList no longer depends on transition support
 * @param CSSMotion CSSMotion component
 */

function genCSSMotionList(transitionSupport) {
  var CSSMotion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _CSSMotion__WEBPACK_IMPORTED_MODULE_8__["default"];

  var CSSMotionList = /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CSSMotionList, _React$Component);

    var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(CSSMotionList);

    function CSSMotionList() {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, CSSMotionList);

      _this = _super.apply(this, arguments);
      _this.state = {
        keyEntities: []
      };

      _this.removeKey = function (removeKey) {
        _this.setState(function (_ref) {
          var keyEntities = _ref.keyEntities;
          return {
            keyEntities: keyEntities.map(function (entity) {
              if (entity.key !== removeKey) return entity;
              return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, entity), {}, {
                status: _util_diff__WEBPACK_IMPORTED_MODULE_10__["STATUS_REMOVED"]
              });
            })
          };
        });
      };

      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(CSSMotionList, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var keyEntities = this.state.keyEntities;

        var _this$props = this.props,
            component = _this$props.component,
            children = _this$props.children,
            _onVisibleChanged = _this$props.onVisibleChanged,
            restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["component", "children", "onVisibleChanged"]);

        var Component = component || react__WEBPACK_IMPORTED_MODULE_7__["Fragment"];
        var motionProps = {};
        MOTION_PROP_NAMES.forEach(function (prop) {
          motionProps[prop] = restProps[prop];
          delete restProps[prop];
        });
        delete restProps.keys;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createElement"](Component, restProps, keyEntities.map(function (_ref2) {
          var status = _ref2.status,
              eventProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["status"]);

          var visible = status === _util_diff__WEBPACK_IMPORTED_MODULE_10__["STATUS_ADD"] || status === _util_diff__WEBPACK_IMPORTED_MODULE_10__["STATUS_KEEP"];
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createElement"](CSSMotion, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, motionProps, {
            key: eventProps.key,
            visible: visible,
            eventProps: eventProps,
            onVisibleChanged: function onVisibleChanged(changedVisible) {
              _onVisibleChanged === null || _onVisibleChanged === void 0 ? void 0 : _onVisibleChanged(changedVisible, {
                key: eventProps.key
              });

              if (!changedVisible) {
                _this2.removeKey(eventProps.key);
              }
            }
          }), children);
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref3, _ref4) {
        var keys = _ref3.keys;
        var keyEntities = _ref4.keyEntities;
        var parsedKeyObjects = Object(_util_diff__WEBPACK_IMPORTED_MODULE_10__["parseKeys"])(keys);
        var mixedKeyEntities = Object(_util_diff__WEBPACK_IMPORTED_MODULE_10__["diffKeys"])(keyEntities, parsedKeyObjects);
        return {
          keyEntities: mixedKeyEntities.filter(function (entity) {
            var prevEntity = keyEntities.find(function (_ref5) {
              var key = _ref5.key;
              return entity.key === key;
            }); // Remove if already mark as removed

            if (prevEntity && prevEntity.status === _util_diff__WEBPACK_IMPORTED_MODULE_10__["STATUS_REMOVED"] && entity.status === _util_diff__WEBPACK_IMPORTED_MODULE_10__["STATUS_REMOVE"]) {
              return false;
            }

            return true;
          })
        };
      }
    }]);

    return CSSMotionList;
  }(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

  CSSMotionList.defaultProps = {
    component: 'div'
  };
  return CSSMotionList;
}
/* harmony default export */ __webpack_exports__["default"] = (genCSSMotionList(_util_motion__WEBPACK_IMPORTED_MODULE_9__["supportTransition"]));

/***/ }),

/***/ "./node_modules/rc-motion/es/DomWrapper.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-motion/es/DomWrapper.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






var DomWrapper = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(DomWrapper, _React$Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(DomWrapper);

  function DomWrapper() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DomWrapper);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DomWrapper, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return DomWrapper;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DomWrapper);

/***/ }),

/***/ "./node_modules/rc-motion/es/hooks/useDomMotionEvents.js":
/*!***************************************************************!*\
  !*** ./node_modules/rc-motion/es/hooks/useDomMotionEvents.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/motion */ "./node_modules/rc-motion/es/util/motion.js");



/* harmony default export */ __webpack_exports__["default"] = (function (callback) {
  var cacheElementRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); // Cache callback

  var callbackRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(callback);
  callbackRef.current = callback; // Internal motion event handler

  var onInternalMotionEnd = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (event) {
    callbackRef.current(event);
  }, []); // Remove events

  function removeMotionEvents(element) {
    if (element) {
      element.removeEventListener(_util_motion__WEBPACK_IMPORTED_MODULE_1__["transitionEndName"], onInternalMotionEnd);
      element.removeEventListener(_util_motion__WEBPACK_IMPORTED_MODULE_1__["animationEndName"], onInternalMotionEnd);
    }
  } // Patch events


  function patchMotionEvents(element) {
    if (cacheElementRef.current && cacheElementRef.current !== element) {
      removeMotionEvents(cacheElementRef.current);
    }

    if (element && element !== cacheElementRef.current) {
      element.addEventListener(_util_motion__WEBPACK_IMPORTED_MODULE_1__["transitionEndName"], onInternalMotionEnd);
      element.addEventListener(_util_motion__WEBPACK_IMPORTED_MODULE_1__["animationEndName"], onInternalMotionEnd); // Save as cache in case dom removed trigger by `motionDeadline`

      cacheElementRef.current = element;
    }
  } // Clean up when removed


  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    return function () {
      removeMotionEvents(cacheElementRef.current);
    };
  }, []);
  return [patchMotionEvents, removeMotionEvents];
});

/***/ }),

/***/ "./node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/Dom/canUseDom */ "./node_modules/rc-util/es/Dom/canUseDom.js");

 // It's safe to use `useLayoutEffect` but the warning is annoying

var useIsomorphicLayoutEffect = Object(rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__["default"])() ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];
/* harmony default export */ __webpack_exports__["default"] = (useIsomorphicLayoutEffect);

/***/ }),

/***/ "./node_modules/rc-motion/es/hooks/useNextFrame.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-motion/es/hooks/useNextFrame.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var nextFrameRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);

  function cancelNextFrame() {
    rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__["default"].cancel(nextFrameRef.current);
  }

  function nextFrame(callback) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    cancelNextFrame();
    var nextFrameId = Object(rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
      if (delay <= 1) {
        callback({
          isCanceled: function isCanceled() {
            return nextFrameId !== nextFrameRef.current;
          }
        });
      } else {
        nextFrame(callback, delay - 1);
      }
    });
    nextFrameRef.current = nextFrameId;
  }

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [nextFrame, cancelNextFrame];
});

/***/ }),

/***/ "./node_modules/rc-motion/es/hooks/useState.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-motion/es/hooks/useState.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMountStatus; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useMountStatus(defaultValue) {
  var destroyRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultValue),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      val = _useState2[0],
      setVal = _useState2[1];

  function setValue(next) {
    if (!destroyRef.current) {
      setVal(next);
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return function () {
      destroyRef.current = true;
    };
  }, []);
  return [val, setValue];
}

/***/ }),

/***/ "./node_modules/rc-motion/es/hooks/useStatus.js":
/*!******************************************************!*\
  !*** ./node_modules/rc-motion/es/hooks/useStatus.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useStatus; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interface */ "./node_modules/rc-motion/es/interface.js");
/* harmony import */ var _useState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useState */ "./node_modules/rc-motion/es/hooks/useState.js");
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js");
/* harmony import */ var _useStepQueue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useStepQueue */ "./node_modules/rc-motion/es/hooks/useStepQueue.js");
/* harmony import */ var _useDomMotionEvents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useDomMotionEvents */ "./node_modules/rc-motion/es/hooks/useDomMotionEvents.js");










function useStatus(supportMotion, visible, getElement, _ref) {
  var _ref$motionEnter = _ref.motionEnter,
      motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter,
      _ref$motionAppear = _ref.motionAppear,
      motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear,
      _ref$motionLeave = _ref.motionLeave,
      motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave,
      motionDeadline = _ref.motionDeadline,
      motionLeaveImmediately = _ref.motionLeaveImmediately,
      onAppearPrepare = _ref.onAppearPrepare,
      onEnterPrepare = _ref.onEnterPrepare,
      onLeavePrepare = _ref.onLeavePrepare,
      onAppearStart = _ref.onAppearStart,
      onEnterStart = _ref.onEnterStart,
      onLeaveStart = _ref.onLeaveStart,
      onAppearActive = _ref.onAppearActive,
      onEnterActive = _ref.onEnterActive,
      onLeaveActive = _ref.onLeaveActive,
      onAppearEnd = _ref.onAppearEnd,
      onEnterEnd = _ref.onEnterEnd,
      onLeaveEnd = _ref.onLeaveEnd,
      onVisibleChanged = _ref.onVisibleChanged;

  // Used for outer render usage to avoid `visible: false & status: none` to render nothing
  var _useState = Object(_useState__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      asyncVisible = _useState2[0],
      setAsyncVisible = _useState2[1];

  var _useState3 = Object(_useState__WEBPACK_IMPORTED_MODULE_5__["default"])(_interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_NONE"]),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      status = _useState4[0],
      setStatus = _useState4[1];

  var _useState5 = Object(_useState__WEBPACK_IMPORTED_MODULE_5__["default"])(null),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      style = _useState6[0],
      setStyle = _useState6[1];

  var mountedRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);
  var deadlineRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var destroyedRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false); // =========================== Dom Node ===========================

  var cacheElementRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  function getDomElement() {
    var element = getElement();
    return element || cacheElementRef.current;
  } // ========================== Motion End ==========================


  var activeRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);

  function onInternalMotionEnd(event) {
    var element = getDomElement();

    if (event && !event.deadline && event.target !== element) {
      // event exists
      // not initiated by deadline
      // transitionEnd not fired by inner elements
      return;
    }

    var canEnd;

    if (status === _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_APPEAR"] && activeRef.current) {
      canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
    } else if (status === _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_ENTER"] && activeRef.current) {
      canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
    } else if (status === _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_LEAVE"] && activeRef.current) {
      canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
    } // Only update status when `canEnd` and not destroyed


    if (canEnd !== false && !destroyedRef.current) {
      setStatus(_interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_NONE"]);
      setStyle(null);
    }
  }

  var _useDomMotionEvents = Object(_useDomMotionEvents__WEBPACK_IMPORTED_MODULE_8__["default"])(onInternalMotionEnd),
      _useDomMotionEvents2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useDomMotionEvents, 1),
      patchMotionEvents = _useDomMotionEvents2[0]; // ============================= Step =============================


  var eventHandlers = react__WEBPACK_IMPORTED_MODULE_3__["useMemo"](function () {
    var _ref2, _ref3, _ref4;

    switch (status) {
      case 'appear':
        return _ref2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_PREPARE"], onAppearPrepare), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_START"], onAppearStart), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_ACTIVE"], onAppearActive), _ref2;

      case 'enter':
        return _ref3 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_PREPARE"], onEnterPrepare), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_START"], onEnterStart), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_ACTIVE"], onEnterActive), _ref3;

      case 'leave':
        return _ref4 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_PREPARE"], onLeavePrepare), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_START"], onLeaveStart), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_ACTIVE"], onLeaveActive), _ref4;

      default:
        return {};
    }
  }, [status]);

  var _useStepQueue = Object(_useStepQueue__WEBPACK_IMPORTED_MODULE_7__["default"])(status, function (newStep) {
    // Only prepare step can be skip
    if (newStep === _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_PREPARE"]) {
      var onPrepare = eventHandlers[_interface__WEBPACK_IMPORTED_MODULE_4__["STEP_PREPARE"]];

      if (!onPrepare) {
        return _useStepQueue__WEBPACK_IMPORTED_MODULE_7__["SkipStep"];
      }

      return onPrepare(getDomElement());
    } // Rest step is sync update


    // Rest step is sync update
    if (step in eventHandlers) {
      var _eventHandlers$step;

      setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
    }

    if (step === _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_ACTIVE"]) {
      // Patch events when motion needed
      patchMotionEvents(getDomElement());

      if (motionDeadline > 0) {
        clearTimeout(deadlineRef.current);
        deadlineRef.current = setTimeout(function () {
          onInternalMotionEnd({
            deadline: true
          });
        }, motionDeadline);
      }
    }

    return _useStepQueue__WEBPACK_IMPORTED_MODULE_7__["DoStep"];
  }),
      _useStepQueue2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useStepQueue, 2),
      startStep = _useStepQueue2[0],
      step = _useStepQueue2[1];

  var active = Object(_useStepQueue__WEBPACK_IMPORTED_MODULE_7__["isActive"])(step);
  activeRef.current = active; // ============================ Status ============================
  // Update with new status

  Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
    setAsyncVisible(visible);
    var isMounted = mountedRef.current;
    mountedRef.current = true;

    if (!supportMotion) {
      return;
    }

    var nextStatus; // Appear

    if (!isMounted && visible && motionAppear) {
      nextStatus = _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_APPEAR"];
    } // Enter


    if (isMounted && visible && motionEnter) {
      nextStatus = _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_ENTER"];
    } // Leave


    if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
      nextStatus = _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_LEAVE"];
    } // Update to next status


    if (nextStatus) {
      setStatus(nextStatus);
      startStep();
    }
  }, [visible]); // ============================ Effect ============================
  // Reset when motion changed

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if ( // Cancel appear
    status === _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_APPEAR"] && !motionAppear || // Cancel enter
    status === _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_ENTER"] && !motionEnter || // Cancel leave
    status === _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_LEAVE"] && !motionLeave) {
      setStatus(_interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_NONE"]);
    }
  }, [motionAppear, motionEnter, motionLeave]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    return function () {
      clearTimeout(deadlineRef.current);
      destroyedRef.current = true;
    };
  }, []); // Trigger `onVisibleChanged`

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (asyncVisible !== undefined && status === _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_NONE"]) {
      onVisibleChanged === null || onVisibleChanged === void 0 ? void 0 : onVisibleChanged(asyncVisible);
    }
  }, [asyncVisible, status]); // ============================ Styles ============================

  var mergedStyle = style;

  if (eventHandlers[_interface__WEBPACK_IMPORTED_MODULE_4__["STEP_PREPARE"]] && step === _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_START"]) {
    mergedStyle = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
      transition: 'none'
    }, mergedStyle);
  }

  return [status, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
}

/***/ }),

/***/ "./node_modules/rc-motion/es/hooks/useStepQueue.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-motion/es/hooks/useStepQueue.js ***!
  \*********************************************************/
/*! exports provided: SkipStep, DoStep, isActive, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipStep", function() { return SkipStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoStep", function() { return DoStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isActive", function() { return isActive; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interface */ "./node_modules/rc-motion/es/interface.js");
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js");
/* harmony import */ var _useNextFrame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useNextFrame */ "./node_modules/rc-motion/es/hooks/useNextFrame.js");





var STEP_QUEUE = [_interface__WEBPACK_IMPORTED_MODULE_2__["STEP_PREPARE"], _interface__WEBPACK_IMPORTED_MODULE_2__["STEP_START"], _interface__WEBPACK_IMPORTED_MODULE_2__["STEP_ACTIVE"], _interface__WEBPACK_IMPORTED_MODULE_2__["STEP_ACTIVATED"]];
/** Skip current step */

var SkipStep = false;
/** Current step should be update in */

var DoStep = true;
function isActive(step) {
  return step === _interface__WEBPACK_IMPORTED_MODULE_2__["STEP_ACTIVE"] || step === _interface__WEBPACK_IMPORTED_MODULE_2__["STEP_ACTIVATED"];
}
/* harmony default export */ __webpack_exports__["default"] = (function (status, callback) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](_interface__WEBPACK_IMPORTED_MODULE_2__["STEP_NONE"]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      step = _React$useState2[0],
      setStep = _React$useState2[1];

  var _useNextFrame = Object(_useNextFrame__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      _useNextFrame2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useNextFrame, 2),
      nextFrame = _useNextFrame2[0],
      cancelNextFrame = _useNextFrame2[1];

  function startQueue() {
    setStep(_interface__WEBPACK_IMPORTED_MODULE_2__["STEP_PREPARE"]);
  }

  Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
    if (step !== _interface__WEBPACK_IMPORTED_MODULE_2__["STEP_NONE"] && step !== _interface__WEBPACK_IMPORTED_MODULE_2__["STEP_ACTIVATED"]) {
      var index = STEP_QUEUE.indexOf(step);
      var nextStep = STEP_QUEUE[index + 1];
      var result = callback(step);

      if (result === SkipStep) {
        // Skip when no needed
        setStep(nextStep);
      } else {
        // Do as frame for step update
        nextFrame(function (info) {
          function doNext() {
            // Skip since current queue is ood
            if (info.isCanceled()) return;
            setStep(nextStep);
          }

          if (result === true) {
            doNext();
          } else {
            // Only promise should be async
            Promise.resolve(result).then(doNext);
          }
        });
      }
    }
  }, [status, step]);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [startQueue, step];
});

/***/ }),

/***/ "./node_modules/rc-motion/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/rc-motion/es/index.js ***!
  \********************************************/
/*! exports provided: CSSMotionList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSSMotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSMotion */ "./node_modules/rc-motion/es/CSSMotion.js");
/* harmony import */ var _CSSMotionList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSMotionList */ "./node_modules/rc-motion/es/CSSMotionList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSMotionList", function() { return _CSSMotionList__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = (_CSSMotion__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-motion/es/interface.js":
/*!************************************************!*\
  !*** ./node_modules/rc-motion/es/interface.js ***!
  \************************************************/
/*! exports provided: STATUS_NONE, STATUS_APPEAR, STATUS_ENTER, STATUS_LEAVE, STEP_NONE, STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_NONE", function() { return STATUS_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_APPEAR", function() { return STATUS_APPEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_ENTER", function() { return STATUS_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_LEAVE", function() { return STATUS_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_NONE", function() { return STEP_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_PREPARE", function() { return STEP_PREPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_START", function() { return STEP_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_ACTIVE", function() { return STEP_ACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_ACTIVATED", function() { return STEP_ACTIVATED; });
var STATUS_NONE = 'none';
var STATUS_APPEAR = 'appear';
var STATUS_ENTER = 'enter';
var STATUS_LEAVE = 'leave';
var STEP_NONE = 'none';
var STEP_PREPARE = 'prepare';
var STEP_START = 'start';
var STEP_ACTIVE = 'active';
var STEP_ACTIVATED = 'end';

/***/ }),

/***/ "./node_modules/rc-motion/es/util/diff.js":
/*!************************************************!*\
  !*** ./node_modules/rc-motion/es/util/diff.js ***!
  \************************************************/
/*! exports provided: STATUS_ADD, STATUS_KEEP, STATUS_REMOVE, STATUS_REMOVED, wrapKeyToObject, parseKeys, diffKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_ADD", function() { return STATUS_ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_KEEP", function() { return STATUS_KEEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_REMOVE", function() { return STATUS_REMOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_REMOVED", function() { return STATUS_REMOVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapKeyToObject", function() { return wrapKeyToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseKeys", function() { return parseKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffKeys", function() { return diffKeys; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");


var STATUS_ADD = 'add';
var STATUS_KEEP = 'keep';
var STATUS_REMOVE = 'remove';
var STATUS_REMOVED = 'removed';
function wrapKeyToObject(key) {
  var keyObj;

  if (key && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(key) === 'object' && 'key' in key) {
    keyObj = key;
  } else {
    keyObj = {
      key: key
    };
  }

  return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, keyObj), {}, {
    key: String(keyObj.key)
  });
}
function parseKeys() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return keys.map(wrapKeyToObject);
}
function diffKeys() {
  var prevKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var currentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var list = [];
  var currentIndex = 0;
  var currentLen = currentKeys.length;
  var prevKeyObjects = parseKeys(prevKeys);
  var currentKeyObjects = parseKeys(currentKeys); // Check prev keys to insert or keep

  prevKeyObjects.forEach(function (keyObj) {
    var hit = false;

    for (var i = currentIndex; i < currentLen; i += 1) {
      var currentKeyObj = currentKeyObjects[i];

      if (currentKeyObj.key === keyObj.key) {
        // New added keys should add before current key
        if (currentIndex < i) {
          list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function (obj) {
            return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, obj), {}, {
              status: STATUS_ADD
            });
          }));
          currentIndex = i;
        }

        list.push(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, currentKeyObj), {}, {
          status: STATUS_KEEP
        }));
        currentIndex += 1;
        hit = true;
        break;
      }
    } // If not hit, it means key is removed


    if (!hit) {
      list.push(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, keyObj), {}, {
        status: STATUS_REMOVE
      }));
    }
  }); // Add rest to the list

  if (currentIndex < currentLen) {
    list = list.concat(currentKeyObjects.slice(currentIndex).map(function (obj) {
      return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, obj), {}, {
        status: STATUS_ADD
      });
    }));
  }
  /**
   * Merge same key when it remove and add again:
   *    [1 - add, 2 - keep, 1 - remove] -> [1 - keep, 2 - keep]
   */


  var keys = {};
  list.forEach(function (_ref) {
    var key = _ref.key;
    keys[key] = (keys[key] || 0) + 1;
  });
  var duplicatedKeys = Object.keys(keys).filter(function (key) {
    return keys[key] > 1;
  });
  duplicatedKeys.forEach(function (matchKey) {
    // Remove `STATUS_REMOVE` node.
    list = list.filter(function (_ref2) {
      var key = _ref2.key,
          status = _ref2.status;
      return key !== matchKey || status !== STATUS_REMOVE;
    }); // Update `STATUS_ADD` to `STATUS_KEEP`

    list.forEach(function (node) {
      if (node.key === matchKey) {
        // eslint-disable-next-line no-param-reassign
        node.status = STATUS_KEEP;
      }
    });
  });
  return list;
}

/***/ }),

/***/ "./node_modules/rc-motion/es/util/motion.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-motion/es/util/motion.js ***!
  \**************************************************/
/*! exports provided: getVendorPrefixes, getVendorPrefixedEventName, supportTransition, animationEndName, transitionEndName, getTransitionName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendorPrefixes", function() { return getVendorPrefixes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendorPrefixedEventName", function() { return getVendorPrefixedEventName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportTransition", function() { return supportTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationEndName", function() { return animationEndName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionEndName", function() { return transitionEndName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransitionName", function() { return getTransitionName; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/Dom/canUseDom */ "./node_modules/rc-util/es/Dom/canUseDom.js");

 // ================= Transition =================
// Event wrapper. Copy from react source code

function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
  prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
  prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
  prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
  return prefixes;
}

function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd')
  };

  if (domSupport) {
    if (!('AnimationEvent' in win)) {
      delete prefixes.animationend.animation;
    }

    if (!('TransitionEvent' in win)) {
      delete prefixes.transitionend.transition;
    }
  }

  return prefixes;
}
var vendorPrefixes = getVendorPrefixes(Object(rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__["default"])(), typeof window !== 'undefined' ? window : {});
var style = {};

if (Object(rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
  var _document$createEleme = document.createElement('div');

  style = _document$createEleme.style;
}

var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }

  var prefixMap = vendorPrefixes[eventName];

  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;

    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];

      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }

  return '';
}
var internalAnimationEndName = getVendorPrefixedEventName('animationend');
var internalTransitionEndName = getVendorPrefixedEventName('transitionend');
var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
var animationEndName = internalAnimationEndName || 'animationend';
var transitionEndName = internalTransitionEndName || 'transitionend';
function getTransitionName(transitionName, transitionType) {
  if (!transitionName) return null;

  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(transitionName) === 'object') {
    var type = transitionType.replace(/-\w/g, function (match) {
      return match[1].toUpperCase();
    });
    return transitionName[type];
  }

  return "".concat(transitionName, "-").concat(transitionType);
}

/***/ }),

/***/ "./node_modules/rc-slider/es/Handle.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-slider/es/Handle.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Handle; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "./node_modules/rc-util/es/Dom/addEventListener.js");












var Handle = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Handle, _React$Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(Handle);

  function Handle() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Handle);

    _this = _super.apply(this, arguments);
    _this.state = {
      clickFocused: false
    };

    _this.setHandleRef = function (node) {
      _this.handle = node;
    };

    _this.handleMouseUp = function () {
      if (document.activeElement === _this.handle) {
        _this.setClickFocus(true);
      }
    };

    _this.handleMouseDown = function (e) {
      // avoid selecting text during drag
      // https://github.com/ant-design/ant-design/issues/25010
      e.preventDefault(); // fix https://github.com/ant-design/ant-design/issues/15324

      _this.focus();
    };

    _this.handleBlur = function () {
      _this.setClickFocus(false);
    };

    _this.handleKeyDown = function () {
      _this.setClickFocus(false);
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Handle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // mouseup won't trigger if mouse moved out of handle,
      // so we listen on document here.
      this.onMouseUpListener = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_10__["default"])(document, 'mouseup', this.handleMouseUp);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.onMouseUpListener) {
        this.onMouseUpListener.remove();
      }
    }
  }, {
    key: "setClickFocus",
    value: function setClickFocus(focused) {
      this.setState({
        clickFocused: focused
      });
    }
  }, {
    key: "clickFocus",
    value: function clickFocus() {
      this.setClickFocus(true);
      this.focus();
    }
  }, {
    key: "focus",
    value: function focus() {
      this.handle.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.handle.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _ref, _ref2;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          vertical = _this$props.vertical,
          reverse = _this$props.reverse,
          offset = _this$props.offset,
          style = _this$props.style,
          disabled = _this$props.disabled,
          min = _this$props.min,
          max = _this$props.max,
          value = _this$props.value,
          tabIndex = _this$props.tabIndex,
          ariaLabel = _this$props.ariaLabel,
          ariaLabelledBy = _this$props.ariaLabelledBy,
          ariaValueTextFormatter = _this$props.ariaValueTextFormatter,
          restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_this$props, ["prefixCls", "vertical", "reverse", "offset", "style", "disabled", "min", "max", "value", "tabIndex", "ariaLabel", "ariaLabelledBy", "ariaValueTextFormatter"]);

      var className = classnames__WEBPACK_IMPORTED_MODULE_9___default()(this.props.className, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, "".concat(prefixCls, "-handle-click-focused"), this.state.clickFocused));
      var positionStyle = vertical ? (_ref = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, reverse ? 'top' : 'bottom', "".concat(offset, "%")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, reverse ? 'bottom' : 'top', 'auto'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, "transform", reverse ? null : "translateY(+50%)"), _ref) : (_ref2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, reverse ? 'right' : 'left', "".concat(offset, "%")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, reverse ? 'left' : 'right', 'auto'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, "transform", "translateX(".concat(reverse ? '+' : '-', "50%)")), _ref2);

      var elStyle = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, style), positionStyle);

      var mergedTabIndex = tabIndex || 0;

      if (disabled || tabIndex === null) {
        mergedTabIndex = null;
      }

      var ariaValueText;

      if (ariaValueTextFormatter) {
        ariaValueText = ariaValueTextFormatter(value);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ref: this.setHandleRef,
        tabIndex: mergedTabIndex
      }, restProps, {
        className: className,
        style: elStyle,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMouseDown // aria attribute
        ,
        role: "slider",
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-valuenow": value,
        "aria-disabled": !!disabled,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-valuetext": ariaValueText
      }));
    }
  }]);

  return Handle;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ }),

/***/ "./node_modules/rc-slider/es/Range.js":
/*!********************************************!*\
  !*** ./node_modules/rc-slider/es/Range.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_Track__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/Track */ "./node_modules/rc-slider/es/common/Track.js");
/* harmony import */ var _common_createSlider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/createSlider */ "./node_modules/rc-slider/es/common/createSlider.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-slider/es/utils.js");













var _trimAlignValue = function trimAlignValue(_ref) {
  var value = _ref.value,
      handle = _ref.handle,
      bounds = _ref.bounds,
      props = _ref.props;
  var allowCross = props.allowCross,
      pushable = props.pushable;
  var thershold = Number(pushable);
  var valInRange = _utils__WEBPACK_IMPORTED_MODULE_11__["ensureValueInRange"](value, props);
  var valNotConflict = valInRange;

  if (!allowCross && handle != null && bounds !== undefined) {
    if (handle > 0 && valInRange <= bounds[handle - 1] + thershold) {
      valNotConflict = bounds[handle - 1] + thershold;
    }

    if (handle < bounds.length - 1 && valInRange >= bounds[handle + 1] - thershold) {
      valNotConflict = bounds[handle + 1] - thershold;
    }
  }

  return _utils__WEBPACK_IMPORTED_MODULE_11__["ensureValuePrecision"](valNotConflict, props);
};

var Range = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Range, _React$Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(Range);

  function Range(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Range);

    _this = _super.call(this, props);

    _this.positionGetValue = function (position) {
      var bounds = _this.getValue();

      var value = _this.calcValueByPos(position);

      var closestBound = _this.getClosestBound(value);

      var index = _this.getBoundNeedMoving(value, closestBound);

      var prevValue = bounds[index];
      if (value === prevValue) return null;

      var nextBounds = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(bounds);

      nextBounds[index] = value;
      return nextBounds;
    };

    _this.onEnd = function (force) {
      var handle = _this.state.handle;

      _this.removeDocumentEvents();

      if (!handle) {
        _this.dragTrack = false;
      }

      if (handle !== null || force) {
        _this.props.onAfterChange(_this.getValue());
      }

      _this.setState({
        handle: null
      });
    };

    var count = props.count,
        min = props.min,
        max = props.max;
    var initialValue = Array.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Array(count + 1))).map(function () {
      return min;
    });
    var defaultValue = 'defaultValue' in props ? props.defaultValue : initialValue;
    var value = props.value !== undefined ? props.value : defaultValue;
    var bounds = value.map(function (v, i) {
      return _trimAlignValue({
        value: v,
        handle: i,
        props: props
      });
    });
    var recent = bounds[0] === max ? 0 : bounds.length - 1;
    _this.state = {
      handle: null,
      recent: recent,
      bounds: bounds
    };
    return _this;
  }
  /**
   * [Legacy] Used for inherit other component.
   * It's a bad code style which should be refactor.
   */

  /* eslint-disable @typescript-eslint/no-unused-vars, class-methods-use-this */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Range, [{
    key: "calcValueByPos",
    value: function calcValueByPos(value) {
      return 0;
    }
  }, {
    key: "getSliderLength",
    value: function getSliderLength() {
      return 0;
    }
  }, {
    key: "calcOffset",
    value: function calcOffset(value) {
      return 0;
    }
  }, {
    key: "saveHandle",
    value: function saveHandle(index, h) {}
  }, {
    key: "removeDocumentEvents",
    value: function removeDocumentEvents() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _this$props = this.props,
          onChange = _this$props.onChange,
          value = _this$props.value,
          min = _this$props.min,
          max = _this$props.max;

      if (!('min' in this.props || 'max' in this.props)) {
        return;
      }

      if (min === prevProps.min && max === prevProps.max) {
        return;
      }

      var currentValue = value || prevState.bounds;

      if (currentValue.some(function (v) {
        return _utils__WEBPACK_IMPORTED_MODULE_11__["isValueOutOfRange"](v, _this2.props);
      })) {
        var newValues = currentValue.map(function (v) {
          return _utils__WEBPACK_IMPORTED_MODULE_11__["ensureValueInRange"](v, _this2.props);
        });
        onChange(newValues);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(state) {
      var props = this.props;
      var isNotControlled = !('value' in props);

      if (isNotControlled) {
        this.setState(state);
      } else {
        var controlledState = {};
        ['handle', 'recent'].forEach(function (item) {
          if (state[item] !== undefined) {
            controlledState[item] = state[item];
          }
        });

        if (Object.keys(controlledState).length) {
          this.setState(controlledState);
        }
      }

      var data = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.state), state);

      var changedValue = data.bounds;
      props.onChange(changedValue);
    }
  }, {
    key: "onStart",
    value: function onStart(position) {
      var props = this.props,
          state = this.state;
      var bounds = this.getValue();
      props.onBeforeChange(bounds);
      var value = this.calcValueByPos(position);
      this.startValue = value;
      this.startPosition = position;
      var closestBound = this.getClosestBound(value);
      this.prevMovedHandleIndex = this.getBoundNeedMoving(value, closestBound);
      this.setState({
        handle: this.prevMovedHandleIndex,
        recent: this.prevMovedHandleIndex
      });
      var prevValue = bounds[this.prevMovedHandleIndex];
      if (value === prevValue) return;

      var nextBounds = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.bounds);

      nextBounds[this.prevMovedHandleIndex] = value;
      this.onChange({
        bounds: nextBounds
      });
    }
  }, {
    key: "onMove",
    value: function onMove(e, position, dragTrack, startBounds) {
      _utils__WEBPACK_IMPORTED_MODULE_11__["pauseEvent"](e);
      var state = this.state,
          props = this.props;
      var maxValue = props.max || 100;
      var minValue = props.min || 0;

      if (dragTrack) {
        var pos = props.vertical ? -position : position;
        pos = props.reverse ? -pos : pos;
        var max = maxValue - Math.max.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(startBounds));
        var min = minValue - Math.min.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(startBounds));
        var ratio = Math.min(Math.max(pos / (this.getSliderLength() / 100), min), max);
        var nextBounds = startBounds.map(function (v) {
          return Math.floor(Math.max(Math.min(v + ratio, maxValue), minValue));
        });

        if (state.bounds.map(function (c, i) {
          return c === nextBounds[i];
        }).some(function (c) {
          return !c;
        })) {
          this.onChange({
            bounds: nextBounds
          });
        }

        return;
      }

      var value = this.calcValueByPos(position);
      var oldValue = state.bounds[state.handle];
      if (value === oldValue) return;
      this.moveTo(value);
    }
  }, {
    key: "onKeyboard",
    value: function onKeyboard(e) {
      var _this$props2 = this.props,
          reverse = _this$props2.reverse,
          vertical = _this$props2.vertical;
      var valueMutator = _utils__WEBPACK_IMPORTED_MODULE_11__["getKeyboardValueMutator"](e, vertical, reverse);

      if (valueMutator) {
        _utils__WEBPACK_IMPORTED_MODULE_11__["pauseEvent"](e);
        var state = this.state,
            props = this.props;
        var bounds = state.bounds,
            handle = state.handle;
        var oldValue = bounds[handle === null ? state.recent : handle];
        var mutatedValue = valueMutator(oldValue, props);

        var value = _trimAlignValue({
          value: mutatedValue,
          handle: handle,
          bounds: state.bounds,
          props: props
        });

        if (value === oldValue) return;
        var isFromKeyboardEvent = true;
        this.moveTo(value, isFromKeyboardEvent);
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.state.bounds;
    }
  }, {
    key: "getClosestBound",
    value: function getClosestBound(value) {
      var bounds = this.state.bounds;
      var closestBound = 0;

      for (var i = 1; i < bounds.length - 1; i += 1) {
        if (value >= bounds[i]) {
          closestBound = i;
        }
      }

      if (Math.abs(bounds[closestBound + 1] - value) < Math.abs(bounds[closestBound] - value)) {
        closestBound += 1;
      }

      return closestBound;
    }
  }, {
    key: "getBoundNeedMoving",
    value: function getBoundNeedMoving(value, closestBound) {
      var _this$state = this.state,
          bounds = _this$state.bounds,
          recent = _this$state.recent;
      var boundNeedMoving = closestBound;
      var isAtTheSamePoint = bounds[closestBound + 1] === bounds[closestBound];

      if (isAtTheSamePoint && bounds[recent] === bounds[closestBound]) {
        boundNeedMoving = recent;
      }

      if (isAtTheSamePoint && value !== bounds[closestBound + 1]) {
        boundNeedMoving = value < bounds[closestBound + 1] ? closestBound : closestBound + 1;
      }

      return boundNeedMoving;
    }
  }, {
    key: "getLowerBound",
    value: function getLowerBound() {
      return this.state.bounds[0];
    }
  }, {
    key: "getUpperBound",
    value: function getUpperBound() {
      var bounds = this.state.bounds;
      return bounds[bounds.length - 1];
    }
    /**
     * Returns an array of possible slider points, taking into account both
     * `marks` and `step`. The result is cached.
     */

  }, {
    key: "getPoints",
    value: function getPoints() {
      var _this$props3 = this.props,
          marks = _this$props3.marks,
          step = _this$props3.step,
          min = _this$props3.min,
          max = _this$props3.max;
      var cache = this.internalPointsCache;

      if (!cache || cache.marks !== marks || cache.step !== step) {
        var pointsObject = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, marks);

        if (step !== null) {
          for (var point = min; point <= max; point += step) {
            pointsObject[point] = point;
          }
        }

        var points = Object.keys(pointsObject).map(parseFloat);
        points.sort(function (a, b) {
          return a - b;
        });
        this.internalPointsCache = {
          marks: marks,
          step: step,
          points: points
        };
      }

      return this.internalPointsCache.points;
    }
  }, {
    key: "moveTo",
    value: function moveTo(value, isFromKeyboardEvent) {
      var _this3 = this;

      var state = this.state,
          props = this.props;

      var nextBounds = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.bounds);

      var handle = state.handle === null ? state.recent : state.handle;
      nextBounds[handle] = value;
      var nextHandle = handle;

      if (props.pushable !== false) {
        this.pushSurroundingHandles(nextBounds, nextHandle);
      } else if (props.allowCross) {
        nextBounds.sort(function (a, b) {
          return a - b;
        });
        nextHandle = nextBounds.indexOf(value);
      }

      this.onChange({
        recent: nextHandle,
        handle: nextHandle,
        bounds: nextBounds
      });

      if (isFromKeyboardEvent) {
        // known problem: because setState is async,
        // so trigger focus will invoke handler's onEnd and another handler's onStart too early,
        // cause onBeforeChange and onAfterChange receive wrong value.
        // here use setState callback to hack，but not elegant
        this.props.onAfterChange(nextBounds);
        this.setState({}, function () {
          _this3.handlesRefs[nextHandle].focus();
        });
        this.onEnd();
      }
    }
  }, {
    key: "pushSurroundingHandles",
    value: function pushSurroundingHandles(bounds, handle) {
      var value = bounds[handle];
      var pushable = this.props.pushable;
      var threshold = Number(pushable);
      var direction = 0;

      if (bounds[handle + 1] - value < threshold) {
        direction = +1; // push to right
      }

      if (value - bounds[handle - 1] < threshold) {
        direction = -1; // push to left
      }

      if (direction === 0) {
        return;
      }

      var nextHandle = handle + direction;
      var diffToNext = direction * (bounds[nextHandle] - value);

      if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
        // revert to original value if pushing is impossible
        // eslint-disable-next-line no-param-reassign
        bounds[handle] = bounds[nextHandle] - direction * threshold;
      }
    }
  }, {
    key: "pushHandle",
    value: function pushHandle(bounds, handle, direction, amount) {
      var originalValue = bounds[handle];
      var currentValue = bounds[handle];

      while (direction * (currentValue - originalValue) < amount) {
        if (!this.pushHandleOnePoint(bounds, handle, direction)) {
          // can't push handle enough to create the needed `amount` gap, so we
          // revert its position to the original value
          // eslint-disable-next-line no-param-reassign
          bounds[handle] = originalValue;
          return false;
        }

        currentValue = bounds[handle];
      } // the handle was pushed enough to create the needed `amount` gap


      return true;
    }
  }, {
    key: "pushHandleOnePoint",
    value: function pushHandleOnePoint(bounds, handle, direction) {
      var points = this.getPoints();
      var pointIndex = points.indexOf(bounds[handle]);
      var nextPointIndex = pointIndex + direction;

      if (nextPointIndex >= points.length || nextPointIndex < 0) {
        // reached the minimum or maximum available point, can't push anymore
        return false;
      }

      var nextHandle = handle + direction;
      var nextValue = points[nextPointIndex];
      var pushable = this.props.pushable;
      var threshold = Number(pushable);
      var diffToNext = direction * (bounds[nextHandle] - nextValue);

      if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
        // couldn't push next handle, so we won't push this one either
        return false;
      } // push the handle
      // eslint-disable-next-line no-param-reassign


      bounds[handle] = nextValue;
      return true;
    }
  }, {
    key: "trimAlignValue",
    value: function trimAlignValue(value) {
      var _this$state2 = this.state,
          handle = _this$state2.handle,
          bounds = _this$state2.bounds;
      return _trimAlignValue({
        value: value,
        handle: handle,
        bounds: bounds,
        props: this.props
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state3 = this.state,
          handle = _this$state3.handle,
          bounds = _this$state3.bounds;
      var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          vertical = _this$props4.vertical,
          included = _this$props4.included,
          disabled = _this$props4.disabled,
          min = _this$props4.min,
          max = _this$props4.max,
          reverse = _this$props4.reverse,
          handleGenerator = _this$props4.handle,
          trackStyle = _this$props4.trackStyle,
          handleStyle = _this$props4.handleStyle,
          tabIndex = _this$props4.tabIndex,
          ariaLabelGroupForHandles = _this$props4.ariaLabelGroupForHandles,
          ariaLabelledByGroupForHandles = _this$props4.ariaLabelledByGroupForHandles,
          ariaValueTextFormatterGroupForHandles = _this$props4.ariaValueTextFormatterGroupForHandles;
      var offsets = bounds.map(function (v) {
        return _this4.calcOffset(v);
      });
      var handleClassName = "".concat(prefixCls, "-handle");
      var handles = bounds.map(function (v, i) {
        var _classNames;

        var mergedTabIndex = tabIndex[i] || 0;

        if (disabled || tabIndex[i] === null) {
          mergedTabIndex = null;
        }

        var dragging = handle === i;
        return handleGenerator({
          className: classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, handleClassName, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(handleClassName, "-").concat(i + 1), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(handleClassName, "-dragging"), dragging), _classNames)),
          prefixCls: prefixCls,
          vertical: vertical,
          dragging: dragging,
          offset: offsets[i],
          value: v,
          index: i,
          tabIndex: mergedTabIndex,
          min: min,
          max: max,
          reverse: reverse,
          disabled: disabled,
          style: handleStyle[i],
          ref: function ref(h) {
            return _this4.saveHandle(i, h);
          },
          ariaLabel: ariaLabelGroupForHandles[i],
          ariaLabelledBy: ariaLabelledByGroupForHandles[i],
          ariaValueTextFormatter: ariaValueTextFormatterGroupForHandles[i]
        });
      });
      var tracks = bounds.slice(0, -1).map(function (_, index) {
        var _classNames2;

        var i = index + 1;
        var trackClassName = classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-track"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-track-").concat(i), true), _classNames2));
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_Track__WEBPACK_IMPORTED_MODULE_9__["default"], {
          className: trackClassName,
          vertical: vertical,
          reverse: reverse,
          included: included,
          offset: offsets[i - 1],
          length: offsets[i] - offsets[i - 1],
          style: trackStyle[index],
          key: i
        });
      });
      return {
        tracks: tracks,
        handles: handles
      };
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (!('value' in props || 'min' in props || 'max' in props)) {
        return null;
      }

      var value = props.value || state.bounds;
      var nextBounds = value.map(function (v, i) {
        return _trimAlignValue({
          value: v,
          handle: i,
          bounds: state.bounds,
          props: props
        });
      });

      if (state.bounds.length === nextBounds.length) {
        if (nextBounds.every(function (v, i) {
          return v === state.bounds[i];
        })) {
          return null;
        }
      } else {
        nextBounds = value.map(function (v, i) {
          return _trimAlignValue({
            value: v,
            handle: i,
            props: props
          });
        });
      }

      return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state), {}, {
        bounds: nextBounds
      });
    }
  }]);

  return Range;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);
/* eslint-enable */


Range.displayName = 'Range';
Range.defaultProps = {
  count: 1,
  allowCross: true,
  pushable: false,
  draggableTrack: false,
  tabIndex: [],
  ariaLabelGroupForHandles: [],
  ariaLabelledByGroupForHandles: [],
  ariaValueTextFormatterGroupForHandles: []
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_common_createSlider__WEBPACK_IMPORTED_MODULE_10__["default"])(Range));

/***/ }),

/***/ "./node_modules/rc-slider/es/Slider.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-slider/es/Slider.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/warning */ "./node_modules/rc-util/es/warning.js");
/* harmony import */ var _common_Track__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/Track */ "./node_modules/rc-slider/es/common/Track.js");
/* harmony import */ var _common_createSlider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/createSlider */ "./node_modules/rc-slider/es/common/createSlider.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-slider/es/utils.js");











var Slider = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Slider, _React$Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(Slider);

  /* eslint-enable */
  function Slider(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Slider);

    _this = _super.call(this, props);

    _this.positionGetValue = function (position) {
      return [];
    };

    _this.onEnd = function (force) {
      var dragging = _this.state.dragging;

      _this.removeDocumentEvents();

      if (dragging || force) {
        _this.props.onAfterChange(_this.getValue());
      }

      _this.setState({
        dragging: false
      });
    };

    var defaultValue = props.defaultValue !== undefined ? props.defaultValue : props.min;
    var value = props.value !== undefined ? props.value : defaultValue;
    _this.state = {
      value: _this.trimAlignValue(value),
      dragging: false
    };
    Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(!('minimumTrackStyle' in props), 'minimumTrackStyle will be deprecated, please use trackStyle instead.');
    Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(!('maximumTrackStyle' in props), 'maximumTrackStyle will be deprecated, please use railStyle instead.');
    return _this;
  }
  /**
   * [Legacy] Used for inherit other component.
   * It's a bad code style which should be refactor.
   */

  /* eslint-disable @typescript-eslint/no-unused-vars, class-methods-use-this */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Slider, [{
    key: "calcValueByPos",
    value: function calcValueByPos(value) {
      return 0;
    }
  }, {
    key: "calcOffset",
    value: function calcOffset(value) {
      return 0;
    }
  }, {
    key: "saveHandle",
    value: function saveHandle(index, h) {}
  }, {
    key: "removeDocumentEvents",
    value: function removeDocumentEvents() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props = this.props,
          min = _this$props.min,
          max = _this$props.max,
          value = _this$props.value,
          onChange = _this$props.onChange;

      if (!('min' in this.props || 'max' in this.props)) {
        return;
      }

      var theValue = value !== undefined ? value : prevState.value;
      var nextValue = this.trimAlignValue(theValue, this.props);

      if (nextValue === prevState.value) {
        return;
      } // eslint-disable-next-line


      this.setState({
        value: nextValue
      });

      if (!(min === prevProps.min && max === prevProps.max) && _utils__WEBPACK_IMPORTED_MODULE_9__["isValueOutOfRange"](theValue, this.props)) {
        onChange(nextValue);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(state) {
      var props = this.props;
      var isNotControlled = !('value' in props);
      var nextState = state.value > this.props.max ? Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state), {}, {
        value: this.props.max
      }) : state;

      if (isNotControlled) {
        this.setState(nextState);
      }

      var changedValue = nextState.value;
      props.onChange(changedValue);
    }
  }, {
    key: "onStart",
    value: function onStart(position) {
      this.setState({
        dragging: true
      });
      var props = this.props;
      var prevValue = this.getValue();
      props.onBeforeChange(prevValue);
      var value = this.calcValueByPos(position);
      this.startValue = value;
      this.startPosition = position;
      if (value === prevValue) return;
      this.prevMovedHandleIndex = 0;
      this.onChange({
        value: value
      });
    }
  }, {
    key: "onMove",
    value: function onMove(e, position) {
      _utils__WEBPACK_IMPORTED_MODULE_9__["pauseEvent"](e);
      var oldValue = this.state.value;
      var value = this.calcValueByPos(position);
      if (value === oldValue) return;
      this.onChange({
        value: value
      });
    }
  }, {
    key: "onKeyboard",
    value: function onKeyboard(e) {
      var _this$props2 = this.props,
          reverse = _this$props2.reverse,
          vertical = _this$props2.vertical;
      var valueMutator = _utils__WEBPACK_IMPORTED_MODULE_9__["getKeyboardValueMutator"](e, vertical, reverse);

      if (valueMutator) {
        _utils__WEBPACK_IMPORTED_MODULE_9__["pauseEvent"](e);
        var state = this.state;
        var oldValue = state.value;
        var mutatedValue = valueMutator(oldValue, this.props);
        var value = this.trimAlignValue(mutatedValue);
        if (value === oldValue) return;
        this.onChange({
          value: value
        });
        this.props.onAfterChange(value);
        this.onEnd();
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: "getLowerBound",
    value: function getLowerBound() {
      var minPoint = this.props.startPoint || this.props.min;
      return this.state.value > minPoint ? minPoint : this.state.value;
    }
  }, {
    key: "getUpperBound",
    value: function getUpperBound() {
      if (this.state.value < this.props.startPoint) {
        return this.props.startPoint;
      }

      return this.state.value;
    }
  }, {
    key: "trimAlignValue",
    value: function trimAlignValue(v) {
      var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (v === null) {
        return null;
      }

      var mergedProps = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props), nextProps);

      var val = _utils__WEBPACK_IMPORTED_MODULE_9__["ensureValueInRange"](v, mergedProps);
      return _utils__WEBPACK_IMPORTED_MODULE_9__["ensureValuePrecision"](val, mergedProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          vertical = _this$props3.vertical,
          included = _this$props3.included,
          disabled = _this$props3.disabled,
          minimumTrackStyle = _this$props3.minimumTrackStyle,
          trackStyle = _this$props3.trackStyle,
          handleStyle = _this$props3.handleStyle,
          tabIndex = _this$props3.tabIndex,
          ariaLabelForHandle = _this$props3.ariaLabelForHandle,
          ariaLabelledByForHandle = _this$props3.ariaLabelledByForHandle,
          ariaValueTextFormatterForHandle = _this$props3.ariaValueTextFormatterForHandle,
          min = _this$props3.min,
          max = _this$props3.max,
          startPoint = _this$props3.startPoint,
          reverse = _this$props3.reverse,
          handleGenerator = _this$props3.handle;
      var _this$state = this.state,
          value = _this$state.value,
          dragging = _this$state.dragging;
      var offset = this.calcOffset(value);
      var handle = handleGenerator({
        className: "".concat(prefixCls, "-handle"),
        prefixCls: prefixCls,
        vertical: vertical,
        offset: offset,
        value: value,
        dragging: dragging,
        disabled: disabled,
        min: min,
        max: max,
        reverse: reverse,
        index: 0,
        tabIndex: tabIndex,
        ariaLabel: ariaLabelForHandle,
        ariaLabelledBy: ariaLabelledByForHandle,
        ariaValueTextFormatter: ariaValueTextFormatterForHandle,
        style: handleStyle[0] || handleStyle,
        ref: function ref(h) {
          return _this2.saveHandle(0, h);
        }
      });
      var trackOffset = startPoint !== undefined ? this.calcOffset(startPoint) : 0;
      var mergedTrackStyle = trackStyle[0] || trackStyle;
      var track = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_common_Track__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "".concat(prefixCls, "-track"),
        vertical: vertical,
        included: included,
        offset: trackOffset,
        reverse: reverse,
        length: offset - trackOffset,
        style: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, minimumTrackStyle), mergedTrackStyle)
      });
      return {
        tracks: track,
        handles: handle
      };
    }
  }]);

  return Slider;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_common_createSlider__WEBPACK_IMPORTED_MODULE_8__["default"])(Slider));

/***/ }),

/***/ "./node_modules/rc-slider/es/common/Marks.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-slider/es/common/Marks.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);






var Marks = function Marks(_ref) {
  var className = _ref.className,
      vertical = _ref.vertical,
      reverse = _ref.reverse,
      marks = _ref.marks,
      included = _ref.included,
      upperBound = _ref.upperBound,
      lowerBound = _ref.lowerBound,
      max = _ref.max,
      min = _ref.min,
      onClickLabel = _ref.onClickLabel;
  var marksKeys = Object.keys(marks);
  var range = max - min;
  var elements = marksKeys.map(parseFloat).sort(function (a, b) {
    return a - b;
  }).map(function (point) {
    var _classNames;

    var markPoint = marks[point];
    var markPointIsObject = Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(markPoint) === 'object' && ! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.isValidElement(markPoint);
    var markLabel = markPointIsObject ? markPoint.label : markPoint;

    if (!markLabel && markLabel !== 0) {
      return null;
    }

    var isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var markClassName = classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(className, "-text"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(className, "-text-active"), isActive), _classNames));

    var bottomStyle = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      marginBottom: '-50%'
    }, reverse ? 'top' : 'bottom', "".concat((point - min) / range * 100, "%"));

    var leftStyle = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      transform: "translateX(".concat(reverse ? "50%" : "-50%", ")"),
      msTransform: "translateX(".concat(reverse ? "50%" : "-50%", ")")
    }, reverse ? 'right' : 'left', "".concat((point - min) / range * 100, "%"));

    var style = vertical ? bottomStyle : leftStyle;
    var markStyle = markPointIsObject ? Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style), markPoint.style) : style;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: markClassName,
      style: markStyle,
      key: point,
      onMouseDown: function onMouseDown(e) {
        return onClickLabel(e, point);
      },
      onTouchStart: function onTouchStart(e) {
        return onClickLabel(e, point);
      }
    }, markLabel);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: className
  }, elements);
};

/* harmony default export */ __webpack_exports__["default"] = (Marks);

/***/ }),

/***/ "./node_modules/rc-slider/es/common/SliderTooltip.js":
/*!***********************************************************!*\
  !*** ./node_modules/rc-slider/es/common/SliderTooltip.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-tooltip */ "./node_modules/rc-tooltip/es/index.js");
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/ref */ "./node_modules/rc-util/es/ref.js");
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");





var SliderTooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, ref) {
  var visible = props.visible,
      overlay = props.overlay;
  var innerRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
  var tooltipRef = Object(rc_util_es_ref__WEBPACK_IMPORTED_MODULE_3__["composeRef"])(ref, innerRef);
  var rafRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);

  function cancelKeepAlign() {
    rc_util_es_raf__WEBPACK_IMPORTED_MODULE_4__["default"].cancel(rafRef.current);
  }

  function keepAlign() {
    rafRef.current = Object(rc_util_es_raf__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
      var _innerRef$current;

      (_innerRef$current = innerRef.current) === null || _innerRef$current === void 0 ? void 0 : _innerRef$current.forcePopupAlign();
    });
  }

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    if (visible) {
      keepAlign();
    } else {
      cancelKeepAlign();
    }

    return cancelKeepAlign;
  }, [visible, overlay]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](rc_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: tooltipRef
  }, props));
});
/* harmony default export */ __webpack_exports__["default"] = (SliderTooltip);

/***/ }),

/***/ "./node_modules/rc-slider/es/common/Steps.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-slider/es/common/Steps.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/warning */ "./node_modules/rc-util/es/warning.js");






var calcPoints = function calcPoints(vertical, marks, dots, step, min, max) {
  Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(dots ? step > 0 : true, '`Slider[step]` should be a positive number in order to make Slider[dots] work.');
  var points = Object.keys(marks).map(parseFloat).sort(function (a, b) {
    return a - b;
  });

  if (dots && step) {
    for (var i = min; i <= max; i += step) {
      if (points.indexOf(i) === -1) {
        points.push(i);
      }
    }
  }

  return points;
};

var Steps = function Steps(_ref) {
  var prefixCls = _ref.prefixCls,
      vertical = _ref.vertical,
      reverse = _ref.reverse,
      marks = _ref.marks,
      dots = _ref.dots,
      step = _ref.step,
      included = _ref.included,
      lowerBound = _ref.lowerBound,
      upperBound = _ref.upperBound,
      max = _ref.max,
      min = _ref.min,
      dotStyle = _ref.dotStyle,
      activeDotStyle = _ref.activeDotStyle;
  var range = max - min;
  var elements = calcPoints(vertical, marks, dots, step, min, max).map(function (point) {
    var _classNames;

    var offset = "".concat(Math.abs(point - min) / range * 100, "%");
    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var style = vertical ? Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dotStyle), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, reverse ? 'top' : 'bottom', offset)) : Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dotStyle), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, reverse ? 'right' : 'left', offset));

    if (isActived) {
      style = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, style), activeDotStyle);
    }

    var pointClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-dot"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-dot-active"), isActived), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-dot-reverse"), reverse), _classNames));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: pointClassName,
      style: style,
      key: point
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "".concat(prefixCls, "-step")
  }, elements);
};

/* harmony default export */ __webpack_exports__["default"] = (Steps);

/***/ }),

/***/ "./node_modules/rc-slider/es/common/Track.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-slider/es/common/Track.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




var Track = function Track(props) {
  var _ref, _ref2;

  var className = props.className,
      included = props.included,
      vertical = props.vertical,
      style = props.style;
  var length = props.length,
      offset = props.offset,
      reverse = props.reverse;

  if (length < 0) {
    reverse = !reverse;
    length = Math.abs(length);
    offset = 100 - offset;
  }

  var positonStyle = vertical ? (_ref = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, reverse ? 'top' : 'bottom', "".concat(offset, "%")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, reverse ? 'bottom' : 'top', 'auto'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "height", "".concat(length, "%")), _ref) : (_ref2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, reverse ? 'right' : 'left', "".concat(offset, "%")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, reverse ? 'left' : 'right', 'auto'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, "width", "".concat(length, "%")), _ref2);

  var elStyle = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style), positonStyle);

  return included ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: className,
    style: elStyle
  }) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (Track);

/***/ }),

/***/ "./node_modules/rc-slider/es/common/createSlider.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-slider/es/common/createSlider.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSlider; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "./node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rc-util/es/warning */ "./node_modules/rc-util/es/warning.js");
/* harmony import */ var _Steps__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Steps */ "./node_modules/rc-slider/es/common/Steps.js");
/* harmony import */ var _Marks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Marks */ "./node_modules/rc-slider/es/common/Marks.js");
/* harmony import */ var _Handle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Handle */ "./node_modules/rc-slider/es/Handle.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils */ "./node_modules/rc-slider/es/utils.js");



















/* eslint-disable @typescript-eslint/no-explicit-any */

function noop() {}

function createSlider(Component) {
  var _a; // eslint-disable-next-line @typescript-eslint/no-unused-vars


  return _a = /*#__PURE__*/function (_Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(ComponentEnhancer, _Component);

    var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_10__["default"])(ComponentEnhancer);

    function ComponentEnhancer(props) {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ComponentEnhancer);

      _this = _super.call(this, props);

      _this.onDown = function (e, position) {
        var p = position;
        var _this$props = _this.props,
            draggableTrack = _this$props.draggableTrack,
            isVertical = _this$props.vertical;
        var bounds = _this.state.bounds;
        var value = draggableTrack && _this.positionGetValue ? _this.positionGetValue(p) || [] : [];
        var inPoint = _utils__WEBPACK_IMPORTED_MODULE_18__["isEventFromHandle"](e, _this.handlesRefs);
        _this.dragTrack = draggableTrack && bounds.length >= 2 && !inPoint && !value.map(function (n, i) {
          var v = !i ? n >= bounds[i] : true;
          return i === value.length - 1 ? n <= bounds[i] : v;
        }).some(function (c) {
          return !c;
        });

        if (_this.dragTrack) {
          _this.dragOffset = p;
          _this.startBounds = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(bounds);
        } else {
          if (!inPoint) {
            _this.dragOffset = 0;
          } else {
            var handlePosition = _utils__WEBPACK_IMPORTED_MODULE_18__["getHandleCenterPosition"](isVertical, e.target);
            _this.dragOffset = p - handlePosition;
            p = handlePosition;
          }

          _this.onStart(p);
        }
      };

      _this.onMouseDown = function (e) {
        if (e.button !== 0) {
          return;
        }

        _this.removeDocumentEvents();

        var isVertical = _this.props.vertical;
        var position = _utils__WEBPACK_IMPORTED_MODULE_18__["getMousePosition"](isVertical, e);

        _this.onDown(e, position);

        _this.addDocumentMouseEvents();
      };

      _this.onTouchStart = function (e) {
        if (_utils__WEBPACK_IMPORTED_MODULE_18__["isNotTouchEvent"](e)) return;
        var isVertical = _this.props.vertical;
        var position = _utils__WEBPACK_IMPORTED_MODULE_18__["getTouchPosition"](isVertical, e);

        _this.onDown(e, position);

        _this.addDocumentTouchEvents();

        _utils__WEBPACK_IMPORTED_MODULE_18__["pauseEvent"](e);
      };

      _this.onFocus = function (e) {
        var _this$props2 = _this.props,
            onFocus = _this$props2.onFocus,
            vertical = _this$props2.vertical;

        if (_utils__WEBPACK_IMPORTED_MODULE_18__["isEventFromHandle"](e, _this.handlesRefs) && !_this.dragTrack) {
          var handlePosition = _utils__WEBPACK_IMPORTED_MODULE_18__["getHandleCenterPosition"](vertical, e.target);
          _this.dragOffset = 0;

          _this.onStart(handlePosition);

          _utils__WEBPACK_IMPORTED_MODULE_18__["pauseEvent"](e);

          if (onFocus) {
            onFocus(e);
          }
        }
      };

      _this.onBlur = function (e) {
        var onBlur = _this.props.onBlur;

        if (!_this.dragTrack) {
          _this.onEnd();
        }

        if (onBlur) {
          onBlur(e);
        }
      };

      _this.onMouseUp = function () {
        if (_this.handlesRefs[_this.prevMovedHandleIndex]) {
          _this.handlesRefs[_this.prevMovedHandleIndex].clickFocus();
        }
      };

      _this.onMouseMove = function (e) {
        if (!_this.sliderRef) {
          _this.onEnd();

          return;
        }

        var position = _utils__WEBPACK_IMPORTED_MODULE_18__["getMousePosition"](_this.props.vertical, e);

        _this.onMove(e, position - _this.dragOffset, _this.dragTrack, _this.startBounds);
      };

      _this.onTouchMove = function (e) {
        if (_utils__WEBPACK_IMPORTED_MODULE_18__["isNotTouchEvent"](e) || !_this.sliderRef) {
          _this.onEnd();

          return;
        }

        var position = _utils__WEBPACK_IMPORTED_MODULE_18__["getTouchPosition"](_this.props.vertical, e);

        _this.onMove(e, position - _this.dragOffset, _this.dragTrack, _this.startBounds);
      };

      _this.onKeyDown = function (e) {
        if (_this.sliderRef && _utils__WEBPACK_IMPORTED_MODULE_18__["isEventFromHandle"](e, _this.handlesRefs)) {
          _this.onKeyboard(e);
        }
      };

      _this.onClickMarkLabel = function (e, value) {
        e.stopPropagation();

        _this.onChange({
          value: value
        }); // eslint-disable-next-line react/no-unused-state


        _this.setState({
          value: value
        }, function () {
          return _this.onEnd(true);
        });
      };

      _this.saveSlider = function (slider) {
        _this.sliderRef = slider;
      };

      var step = props.step,
          max = props.max,
          min = props.min;
      var isPointDiffEven = isFinite(max - min) ? (max - min) % step === 0 : true; // eslint-disable-line

      Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_14__["default"])(step && Math.floor(step) === step ? isPointDiffEven : true, "Slider[max] - Slider[min] (".concat(max - min, ") should be a multiple of Slider[step] (").concat(step, ")"));
      _this.handlesRefs = {};
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(ComponentEnhancer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        // Snapshot testing cannot handle refs, so be sure to null-check this.
        this.document = this.sliderRef && this.sliderRef.ownerDocument;
        var _this$props3 = this.props,
            autoFocus = _this$props3.autoFocus,
            disabled = _this$props3.disabled;

        if (autoFocus && !disabled) {
          this.focus();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(ComponentEnhancer.prototype), "componentWillUnmount", this)) Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(ComponentEnhancer.prototype), "componentWillUnmount", this).call(this);
        this.removeDocumentEvents();
      }
    }, {
      key: "getSliderStart",
      value: function getSliderStart() {
        var slider = this.sliderRef;
        var _this$props4 = this.props,
            vertical = _this$props4.vertical,
            reverse = _this$props4.reverse;
        var rect = slider.getBoundingClientRect();

        if (vertical) {
          return reverse ? rect.bottom : rect.top;
        }

        return window.pageXOffset + (reverse ? rect.right : rect.left);
      }
    }, {
      key: "getSliderLength",
      value: function getSliderLength() {
        var slider = this.sliderRef;

        if (!slider) {
          return 0;
        }

        var coords = slider.getBoundingClientRect();
        return this.props.vertical ? coords.height : coords.width;
      }
    }, {
      key: "addDocumentTouchEvents",
      value: function addDocumentTouchEvents() {
        // just work for Chrome iOS Safari and Android Browser
        this.onTouchMoveListener = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_12__["default"])(this.document, 'touchmove', this.onTouchMove);
        this.onTouchUpListener = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_12__["default"])(this.document, 'touchend', this.onEnd);
      }
    }, {
      key: "addDocumentMouseEvents",
      value: function addDocumentMouseEvents() {
        this.onMouseMoveListener = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_12__["default"])(this.document, 'mousemove', this.onMouseMove);
        this.onMouseUpListener = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_12__["default"])(this.document, 'mouseup', this.onEnd);
      }
    }, {
      key: "removeDocumentEvents",
      value: function removeDocumentEvents() {
        /* eslint-disable @typescript-eslint/no-unused-expressions */
        this.onTouchMoveListener && this.onTouchMoveListener.remove();
        this.onTouchUpListener && this.onTouchUpListener.remove();
        this.onMouseMoveListener && this.onMouseMoveListener.remove();
        this.onMouseUpListener && this.onMouseUpListener.remove();
        /* eslint-enable no-unused-expressions */
      }
    }, {
      key: "focus",
      value: function focus() {
        var _this$handlesRefs$;

        if (this.props.disabled) {
          return;
        }

        (_this$handlesRefs$ = this.handlesRefs[0]) === null || _this$handlesRefs$ === void 0 ? void 0 : _this$handlesRefs$.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        var _this2 = this;

        if (this.props.disabled) {
          return;
        }

        Object.keys(this.handlesRefs).forEach(function (key) {
          var _this2$handlesRefs$ke, _this2$handlesRefs$ke2;

          (_this2$handlesRefs$ke = _this2.handlesRefs[key]) === null || _this2$handlesRefs$ke === void 0 ? void 0 : (_this2$handlesRefs$ke2 = _this2$handlesRefs$ke.blur) === null || _this2$handlesRefs$ke2 === void 0 ? void 0 : _this2$handlesRefs$ke2.call(_this2$handlesRefs$ke);
        });
      }
    }, {
      key: "calcValue",
      value: function calcValue(offset) {
        var _this$props5 = this.props,
            vertical = _this$props5.vertical,
            min = _this$props5.min,
            max = _this$props5.max;
        var ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
        var value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
        return value;
      }
    }, {
      key: "calcValueByPos",
      value: function calcValueByPos(position) {
        var sign = this.props.reverse ? -1 : +1;
        var pixelOffset = sign * (position - this.getSliderStart());
        var nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
        return nextValue;
      }
    }, {
      key: "calcOffset",
      value: function calcOffset(value) {
        var _this$props6 = this.props,
            min = _this$props6.min,
            max = _this$props6.max;
        var ratio = (value - min) / (max - min);
        return Math.max(0, ratio * 100);
      }
    }, {
      key: "saveHandle",
      value: function saveHandle(index, handle) {
        this.handlesRefs[index] = handle;
      }
    }, {
      key: "render",
      value: function render() {
        var _classNames;

        var _this$props7 = this.props,
            prefixCls = _this$props7.prefixCls,
            className = _this$props7.className,
            marks = _this$props7.marks,
            dots = _this$props7.dots,
            step = _this$props7.step,
            included = _this$props7.included,
            disabled = _this$props7.disabled,
            vertical = _this$props7.vertical,
            reverse = _this$props7.reverse,
            min = _this$props7.min,
            max = _this$props7.max,
            children = _this$props7.children,
            maximumTrackStyle = _this$props7.maximumTrackStyle,
            style = _this$props7.style,
            railStyle = _this$props7.railStyle,
            dotStyle = _this$props7.dotStyle,
            activeDotStyle = _this$props7.activeDotStyle;

        var _get$call = Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(ComponentEnhancer.prototype), "render", this).call(this),
            tracks = _get$call.tracks,
            handles = _get$call.handles;

        var sliderClassName = classnames__WEBPACK_IMPORTED_MODULE_13___default()(prefixCls, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_classNames, "".concat(prefixCls, "-with-marks"), Object.keys(marks).length), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_classNames, "".concat(prefixCls, "-disabled"), disabled), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_classNames, "".concat(prefixCls, "-vertical"), vertical), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_classNames, className, className), _classNames));
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          ref: this.saveSlider,
          className: sliderClassName,
          onTouchStart: disabled ? noop : this.onTouchStart,
          onMouseDown: disabled ? noop : this.onMouseDown,
          onMouseUp: disabled ? noop : this.onMouseUp,
          onKeyDown: disabled ? noop : this.onKeyDown,
          onFocus: disabled ? noop : this.onFocus,
          onBlur: disabled ? noop : this.onBlur,
          style: style
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          className: "".concat(prefixCls, "-rail"),
          style: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, maximumTrackStyle), railStyle)
        }), tracks, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Steps__WEBPACK_IMPORTED_MODULE_15__["default"], {
          prefixCls: prefixCls,
          vertical: vertical,
          reverse: reverse,
          marks: marks,
          dots: dots,
          step: step,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min,
          dotStyle: dotStyle,
          activeDotStyle: activeDotStyle
        }), handles, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Marks__WEBPACK_IMPORTED_MODULE_16__["default"], {
          className: "".concat(prefixCls, "-mark"),
          onClickLabel: disabled ? noop : this.onClickMarkLabel,
          vertical: vertical,
          marks: marks,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min,
          reverse: reverse
        }), children);
      }
    }]);

    return ComponentEnhancer;
  }(Component), _a.displayName = "ComponentEnhancer(".concat(Component.displayName, ")"), _a.defaultProps = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Component.defaultProps), {}, {
    prefixCls: 'rc-slider',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    marks: {},
    handle: function handle(props) {
      var index = props.index,
          restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["index"]);

      delete restProps.dragging;

      if (restProps.value === null) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Handle__WEBPACK_IMPORTED_MODULE_17__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restProps, {
        key: index
      }));
    },
    onBeforeChange: noop,
    onChange: noop,
    onAfterChange: noop,
    included: true,
    disabled: false,
    dots: false,
    vertical: false,
    reverse: false,
    trackStyle: [{}],
    handleStyle: [{}],
    railStyle: {},
    dotStyle: {},
    activeDotStyle: {}
  }), _a;
}

/***/ }),

/***/ "./node_modules/rc-slider/es/createSliderWithTooltip.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-slider/es/createSliderWithTooltip.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSliderWithTooltip; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_SliderTooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/SliderTooltip */ "./node_modules/rc-slider/es/common/SliderTooltip.js");
/* harmony import */ var _Handle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Handle */ "./node_modules/rc-slider/es/Handle.js");











function createSliderWithTooltip(Component) {
  var _a; // eslint-disable-next-line @typescript-eslint/no-unused-vars


  return _a = /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ComponentWrapper, _React$Component);

    var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(ComponentWrapper);

    function ComponentWrapper() {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ComponentWrapper);

      _this = _super.apply(this, arguments);
      _this.state = {
        visibles: {}
      };

      _this.handleTooltipVisibleChange = function (index, visible) {
        _this.setState(function (prevState) {
          return {
            visibles: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, prevState.visibles), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, index, visible))
          };
        });
      };

      _this.handleWithTooltip = function (_ref) {
        var value = _ref.value,
            dragging = _ref.dragging,
            index = _ref.index,
            disabled = _ref.disabled,
            restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["value", "dragging", "index", "disabled"]);

        var _this$props = _this.props,
            tipFormatter = _this$props.tipFormatter,
            tipProps = _this$props.tipProps,
            handleStyle = _this$props.handleStyle,
            getTooltipContainer = _this$props.getTooltipContainer;

        var _tipProps$prefixCls = tipProps.prefixCls,
            prefixCls = _tipProps$prefixCls === void 0 ? 'rc-slider-tooltip' : _tipProps$prefixCls,
            _tipProps$overlay = tipProps.overlay,
            overlay = _tipProps$overlay === void 0 ? tipFormatter(value) : _tipProps$overlay,
            _tipProps$placement = tipProps.placement,
            placement = _tipProps$placement === void 0 ? 'top' : _tipProps$placement,
            _tipProps$visible = tipProps.visible,
            visible = _tipProps$visible === void 0 ? false : _tipProps$visible,
            restTooltipProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(tipProps, ["prefixCls", "overlay", "placement", "visible"]);

        var handleStyleWithIndex;

        if (Array.isArray(handleStyle)) {
          handleStyleWithIndex = handleStyle[index] || handleStyle[0];
        } else {
          handleStyleWithIndex = handleStyle;
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_common_SliderTooltip__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restTooltipProps, {
          getTooltipContainer: getTooltipContainer,
          prefixCls: prefixCls,
          overlay: overlay,
          placement: placement,
          visible: !disabled && (_this.state.visibles[index] || dragging) || visible,
          key: index
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Handle__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restProps, {
          style: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, handleStyleWithIndex),
          value: value,
          onMouseEnter: function onMouseEnter() {
            return _this.handleTooltipVisibleChange(index, true);
          },
          onMouseLeave: function onMouseLeave() {
            return _this.handleTooltipVisibleChange(index, false);
          }
        })));
      };

      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ComponentWrapper, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
          handle: this.handleWithTooltip
        }));
      }
    }]);

    return ComponentWrapper;
  }(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component), _a.defaultProps = {
    tipFormatter: function tipFormatter(value) {
      return value;
    },
    handleStyle: [{}],
    tipProps: {},
    getTooltipContainer: function getTooltipContainer(node) {
      return node.parentNode;
    }
  }, _a;
}

/***/ }),

/***/ "./node_modules/rc-slider/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/rc-slider/es/index.js ***!
  \********************************************/
/*! exports provided: default, Range, Handle, createSliderWithTooltip, SliderTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ "./node_modules/rc-slider/es/Slider.js");
/* harmony import */ var _Range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Range */ "./node_modules/rc-slider/es/Range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return _Range__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Handle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Handle */ "./node_modules/rc-slider/es/Handle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Handle", function() { return _Handle__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _createSliderWithTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createSliderWithTooltip */ "./node_modules/rc-slider/es/createSliderWithTooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSliderWithTooltip", function() { return _createSliderWithTooltip__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _common_SliderTooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/SliderTooltip */ "./node_modules/rc-slider/es/common/SliderTooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliderTooltip", function() { return _common_SliderTooltip__WEBPACK_IMPORTED_MODULE_4__["default"]; });






var InternalSlider = _Slider__WEBPACK_IMPORTED_MODULE_0__["default"];
InternalSlider.Range = _Range__WEBPACK_IMPORTED_MODULE_1__["default"];
InternalSlider.Handle = _Handle__WEBPACK_IMPORTED_MODULE_2__["default"];
InternalSlider.createSliderWithTooltip = _createSliderWithTooltip__WEBPACK_IMPORTED_MODULE_3__["default"];
/* harmony default export */ __webpack_exports__["default"] = (InternalSlider);


/***/ }),

/***/ "./node_modules/rc-slider/es/utils.js":
/*!********************************************!*\
  !*** ./node_modules/rc-slider/es/utils.js ***!
  \********************************************/
/*! exports provided: isEventFromHandle, isValueOutOfRange, isNotTouchEvent, getClosestPoint, getPrecision, getMousePosition, getTouchPosition, getHandleCenterPosition, ensureValueInRange, ensureValuePrecision, pauseEvent, calculateNextValue, getKeyboardValueMutator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEventFromHandle", function() { return isEventFromHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValueOutOfRange", function() { return isValueOutOfRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotTouchEvent", function() { return isNotTouchEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClosestPoint", function() { return getClosestPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrecision", function() { return getPrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMousePosition", function() { return getMousePosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchPosition", function() { return getTouchPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHandleCenterPosition", function() { return getHandleCenterPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureValueInRange", function() { return ensureValueInRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureValuePrecision", function() { return ensureValuePrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pauseEvent", function() { return pauseEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateNextValue", function() { return calculateNextValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKeyboardValueMutator", function() { return getKeyboardValueMutator; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");



function isEventFromHandle(e, handles) {
  try {
    return Object.keys(handles).some(function (key) {
      return e.target === Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(handles[key]);
    });
  } catch (error) {
    return false;
  }
}
function isValueOutOfRange(value, _ref) {
  var min = _ref.min,
      max = _ref.max;
  return value < min || value > max;
}
function isNotTouchEvent(e) {
  return e.touches.length > 1 || e.type.toLowerCase() === 'touchend' && e.touches.length > 0;
}
function getClosestPoint(val, _ref2) {
  var marks = _ref2.marks,
      step = _ref2.step,
      min = _ref2.min,
      max = _ref2.max;
  var points = Object.keys(marks).map(parseFloat);

  if (step !== null) {
    var baseNum = Math.pow(10, getPrecision(step));
    var maxSteps = Math.floor((max * baseNum - min * baseNum) / (step * baseNum));
    var steps = Math.min((val - min) / step, maxSteps);
    var closestStep = Math.round(steps) * step + min;
    points.push(closestStep);
  }

  var diffs = points.map(function (point) {
    return Math.abs(val - point);
  });
  return points[diffs.indexOf(Math.min.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(diffs)))];
}
function getPrecision(step) {
  var stepString = step.toString();
  var precision = 0;

  if (stepString.indexOf('.') >= 0) {
    precision = stepString.length - stepString.indexOf('.') - 1;
  }

  return precision;
}
function getMousePosition(vertical, e) {
  return vertical ? e.clientY : e.pageX;
}
function getTouchPosition(vertical, e) {
  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}
function getHandleCenterPosition(vertical, handle) {
  var coords = handle.getBoundingClientRect();
  return vertical ? coords.top + coords.height * 0.5 : window.pageXOffset + coords.left + coords.width * 0.5;
}
function ensureValueInRange(val, _ref3) {
  var max = _ref3.max,
      min = _ref3.min;

  if (val <= min) {
    return min;
  }

  if (val >= max) {
    return max;
  }

  return val;
}
function ensureValuePrecision(val, props) {
  var step = props.step;
  var closestPoint = isFinite(getClosestPoint(val, props)) ? getClosestPoint(val, props) : 0; // eslint-disable-line

  return step === null ? closestPoint : parseFloat(closestPoint.toFixed(getPrecision(step)));
}
function pauseEvent(e) {
  e.stopPropagation();
  e.preventDefault();
}
function calculateNextValue(func, value, props) {
  var operations = {
    increase: function increase(a, b) {
      return a + b;
    },
    decrease: function decrease(a, b) {
      return a - b;
    }
  };
  var indexToGet = operations[func](Object.keys(props.marks).indexOf(JSON.stringify(value)), 1);
  var keyToGet = Object.keys(props.marks)[indexToGet];

  if (props.step) {
    return operations[func](value, props.step);
  }

  if (!!Object.keys(props.marks).length && !!props.marks[keyToGet]) {
    return props.marks[keyToGet];
  }

  return value;
}
function getKeyboardValueMutator(e, vertical, reverse) {
  var increase = 'increase';
  var decrease = 'decrease';
  var method = increase;

  switch (e.keyCode) {
    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].UP:
      method = vertical && reverse ? decrease : increase;
      break;

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].RIGHT:
      method = !vertical && reverse ? decrease : increase;
      break;

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].DOWN:
      method = vertical && reverse ? increase : decrease;
      break;

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].LEFT:
      method = !vertical && reverse ? increase : decrease;
      break;

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].END:
      return function (value, props) {
        return props.max;
      };

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].HOME:
      return function (value, props) {
        return props.min;
      };

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].PAGE_UP:
      return function (value, props) {
        return value + props.step * 2;
      };

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].PAGE_DOWN:
      return function (value, props) {
        return value - props.step * 2;
      };

    default:
      return undefined;
  }

  return function (value, props) {
    return calculateNextValue(method, value, props);
  };
}

/***/ }),

/***/ "./node_modules/rc-tooltip/es/Content.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-tooltip/es/Content.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Content = function Content(props) {
  var overlay = props.overlay,
      prefixCls = props.prefixCls,
      id = props.id,
      overlayInnerStyle = props.overlayInnerStyle;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "".concat(prefixCls, "-inner"),
    id: id,
    role: "tooltip",
    style: overlayInnerStyle
  }, typeof overlay === 'function' ? overlay() : overlay);
};

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./node_modules/rc-tooltip/es/Tooltip.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-tooltip/es/Tooltip.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_trigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-trigger */ "./node_modules/rc-trigger/es/index.js");
/* harmony import */ var _placements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./placements */ "./node_modules/rc-tooltip/es/placements.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Content */ "./node_modules/rc-tooltip/es/Content.js");










var Tooltip = function Tooltip(props, ref) {
  var overlayClassName = props.overlayClassName,
      _props$trigger = props.trigger,
      trigger = _props$trigger === void 0 ? ['hover'] : _props$trigger,
      _props$mouseEnterDela = props.mouseEnterDelay,
      mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0 : _props$mouseEnterDela,
      _props$mouseLeaveDela = props.mouseLeaveDelay,
      mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
      overlayStyle = props.overlayStyle,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-tooltip' : _props$prefixCls,
      children = props.children,
      onVisibleChange = props.onVisibleChange,
      afterVisibleChange = props.afterVisibleChange,
      transitionName = props.transitionName,
      animation = props.animation,
      motion = props.motion,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'right' : _props$placement,
      _props$align = props.align,
      align = _props$align === void 0 ? {} : _props$align,
      _props$destroyTooltip = props.destroyTooltipOnHide,
      destroyTooltipOnHide = _props$destroyTooltip === void 0 ? false : _props$destroyTooltip,
      defaultVisible = props.defaultVisible,
      getTooltipContainer = props.getTooltipContainer,
      overlayInnerStyle = props.overlayInnerStyle,
      restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle"]);

  var domRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useImperativeHandle"])(ref, function () {
    return domRef.current;
  });

  var extraProps = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, restProps);

  if ('visible' in props) {
    extraProps.popupVisible = props.visible;
  }

  var getPopupElement = function getPopupElement() {
    var _props$arrowContent = props.arrowContent,
        arrowContent = _props$arrowContent === void 0 ? null : _props$arrowContent,
        overlay = props.overlay,
        id = props.id;
    return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: "".concat(prefixCls, "-arrow"),
      key: "arrow"
    }, arrowContent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Content__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: "content",
      prefixCls: prefixCls,
      id: id,
      overlay: overlay,
      overlayInnerStyle: overlayInnerStyle
    })];
  };

  var destroyTooltip = false;
  var autoDestroy = false;

  if (typeof destroyTooltipOnHide === 'boolean') {
    destroyTooltip = destroyTooltipOnHide;
  } else if (destroyTooltipOnHide && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(destroyTooltipOnHide) === 'object') {
    var keepParent = destroyTooltipOnHide.keepParent;
    destroyTooltip = keepParent === true;
    autoDestroy = keepParent === false;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_trigger__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    popupClassName: overlayClassName,
    prefixCls: prefixCls,
    popup: getPopupElement,
    action: trigger,
    builtinPlacements: _placements__WEBPACK_IMPORTED_MODULE_6__["placements"],
    popupPlacement: placement,
    ref: domRef,
    popupAlign: align,
    getPopupContainer: getTooltipContainer,
    onPopupVisibleChange: onVisibleChange,
    afterPopupVisibleChange: afterVisibleChange,
    popupTransitionName: transitionName,
    popupAnimation: animation,
    popupMotion: motion,
    defaultPopupVisible: defaultVisible,
    destroyPopupOnHide: destroyTooltip,
    autoDestroy: autoDestroy,
    mouseLeaveDelay: mouseLeaveDelay,
    popupStyle: overlayStyle,
    mouseEnterDelay: mouseEnterDelay
  }, extraProps), children);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(Tooltip));

/***/ }),

/***/ "./node_modules/rc-tooltip/es/index.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-tooltip/es/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tooltip */ "./node_modules/rc-tooltip/es/Tooltip.js");

/* harmony default export */ __webpack_exports__["default"] = (_Tooltip__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-tooltip/es/placements.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-tooltip/es/placements.js ***!
  \**************************************************/
/*! exports provided: placements, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  }
};
/* harmony default export */ __webpack_exports__["default"] = (placements);

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup/Mask.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup/Mask.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mask; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-motion */ "./node_modules/rc-motion/es/index.js");
/* harmony import */ var _utils_legacyUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/legacyUtil */ "./node_modules/rc-trigger/es/utils/legacyUtil.js");






function Mask(props) {
  var prefixCls = props.prefixCls,
      visible = props.visible,
      zIndex = props.zIndex,
      mask = props.mask,
      maskMotion = props.maskMotion,
      maskAnimation = props.maskAnimation,
      maskTransitionName = props.maskTransitionName;

  if (!mask) {
    return null;
  }

  var motion = {};

  if (maskMotion || maskTransitionName || maskAnimation) {
    motion = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({
      motionAppear: true
    }, Object(_utils_legacyUtil__WEBPACK_IMPORTED_MODULE_5__["getMotion"])({
      motion: maskMotion,
      prefixCls: prefixCls,
      transitionName: maskTransitionName,
      animation: maskAnimation
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](rc_motion__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, motion, {
    visible: visible,
    removeOnLeave: true
  }), function (_ref) {
    var className = _ref.className;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      style: {
        zIndex: zIndex
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-mask"), className)
    });
  });
}

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup/MobilePopupInner.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup/MobilePopupInner.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-motion */ "./node_modules/rc-motion/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);





var MobilePopupInner = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function (props, ref) {
  var prefixCls = props.prefixCls,
      visible = props.visible,
      zIndex = props.zIndex,
      children = props.children,
      _props$mobile = props.mobile;
  _props$mobile = _props$mobile === void 0 ? {} : _props$mobile;
  var popupClassName = _props$mobile.popupClassName,
      popupStyle = _props$mobile.popupStyle,
      _props$mobile$popupMo = _props$mobile.popupMotion,
      popupMotion = _props$mobile$popupMo === void 0 ? {} : _props$mobile$popupMo,
      popupRender = _props$mobile.popupRender;
  var elementRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](); // ========================= Refs =========================

  react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"](ref, function () {
    return {
      forceAlign: function forceAlign() {},
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  }); // ======================== Render ========================

  var mergedStyle = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({
    zIndex: zIndex
  }, popupStyle);

  var childNode = children; // Wrapper when multiple children

  if (react__WEBPACK_IMPORTED_MODULE_2__["Children"].count(children) > 1) {
    childNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      className: "".concat(prefixCls, "-content")
    }, children);
  } // Mobile support additional render


  if (popupRender) {
    childNode = popupRender(childNode);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](rc_motion__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    visible: visible,
    ref: elementRef,
    removeOnLeave: true
  }, popupMotion), function (_ref, motionRef) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    var mergedClassName = classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls, popupClassName, motionClassName);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      ref: motionRef,
      className: mergedClassName,
      style: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, motionStyle), mergedStyle)
    }, childNode);
  });
});
MobilePopupInner.displayName = 'MobilePopupInner';
/* harmony default export */ __webpack_exports__["default"] = (MobilePopupInner);

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup/PopupInner.js":
/*!********************************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup/PopupInner.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_align__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-align */ "./node_modules/rc-align/es/index.js");
/* harmony import */ var rc_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-motion */ "./node_modules/rc-motion/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _useVisibleStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useVisibleStatus */ "./node_modules/rc-trigger/es/Popup/useVisibleStatus.js");
/* harmony import */ var _utils_legacyUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/legacyUtil */ "./node_modules/rc-trigger/es/utils/legacyUtil.js");
/* harmony import */ var _useStretchStyle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useStretchStyle */ "./node_modules/rc-trigger/es/Popup/useStretchStyle.js");











var PopupInner = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function (props, ref) {
  var visible = props.visible,
      prefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      children = props.children,
      zIndex = props.zIndex,
      stretch = props.stretch,
      destroyPopupOnHide = props.destroyPopupOnHide,
      align = props.align,
      point = props.point,
      getRootDomNode = props.getRootDomNode,
      getClassNameFromAlign = props.getClassNameFromAlign,
      onAlign = props.onAlign,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onMouseDown = props.onMouseDown,
      onTouchStart = props.onTouchStart;
  var alignRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      alignedClassName = _useState2[0],
      setAlignedClassName = _useState2[1]; // ======================= Measure ========================


  var _useStretchStyle = Object(_useStretchStyle__WEBPACK_IMPORTED_MODULE_9__["default"])(stretch),
      _useStretchStyle2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useStretchStyle, 2),
      stretchStyle = _useStretchStyle2[0],
      measureStretchStyle = _useStretchStyle2[1];

  function doMeasure() {
    if (stretch) {
      measureStretchStyle(getRootDomNode());
    }
  } // ======================== Status ========================


  var _useVisibleStatus = Object(_useVisibleStatus__WEBPACK_IMPORTED_MODULE_7__["default"])(visible, doMeasure),
      _useVisibleStatus2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useVisibleStatus, 2),
      status = _useVisibleStatus2[0],
      goNextStatus = _useVisibleStatus2[1]; // ======================== Aligns ========================


  var prepareResolveRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(); // `target` on `rc-align` can accept as a function to get the bind element or a point.
  // ref: https://www.npmjs.com/package/rc-align

  function getAlignTarget() {
    if (point) {
      return point;
    }

    return getRootDomNode;
  }

  function forceAlign() {
    var _alignRef$current;

    (_alignRef$current = alignRef.current) === null || _alignRef$current === void 0 ? void 0 : _alignRef$current.forceAlign();
  }

  function onInternalAlign(popupDomNode, matchAlign) {
    if (status === 'align') {
      var nextAlignedClassName = getClassNameFromAlign(matchAlign);
      setAlignedClassName(nextAlignedClassName); // Repeat until not more align needed

      if (alignedClassName !== nextAlignedClassName) {
        Promise.resolve().then(function () {
          forceAlign();
        });
      } else {
        goNextStatus(function () {
          var _prepareResolveRef$cu;

          (_prepareResolveRef$cu = prepareResolveRef.current) === null || _prepareResolveRef$cu === void 0 ? void 0 : _prepareResolveRef$cu.call(prepareResolveRef);
        });
      }

      onAlign === null || onAlign === void 0 ? void 0 : onAlign(popupDomNode, matchAlign);
    }
  } // ======================== Motion ========================


  var motion = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(_utils_legacyUtil__WEBPACK_IMPORTED_MODULE_8__["getMotion"])(props));

  ['onAppearEnd', 'onEnterEnd', 'onLeaveEnd'].forEach(function (eventName) {
    var originHandler = motion[eventName];

    motion[eventName] = function (element, event) {
      goNextStatus();
      return originHandler === null || originHandler === void 0 ? void 0 : originHandler(element, event);
    };
  });

  function onShowPrepare() {
    return new Promise(function (resolve) {
      prepareResolveRef.current = resolve;
    });
  } // Go to stable directly when motion not provided


  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    if (!motion.motionName && status === 'motion') {
      goNextStatus();
    }
  }, [motion.motionName, status]); // ========================= Refs =========================

  react__WEBPACK_IMPORTED_MODULE_3__["useImperativeHandle"](ref, function () {
    return {
      forceAlign: forceAlign,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  }); // ======================== Render ========================

  var mergedStyle = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, stretchStyle), {}, {
    zIndex: zIndex
  }, style), {}, {
    opacity: status === 'motion' || status === 'stable' || !visible ? undefined : 0,
    pointerEvents: status === 'stable' ? undefined : 'none'
  }); // Align status


  var alignDisabled = true;

  if ((align === null || align === void 0 ? void 0 : align.points) && (status === 'align' || status === 'stable')) {
    alignDisabled = false;
  }

  var childNode = children; // Wrapper when multiple children

  if (react__WEBPACK_IMPORTED_MODULE_3__["Children"].count(children) > 1) {
    childNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "".concat(prefixCls, "-content")
    }, children);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](rc_motion__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    visible: visible,
    ref: elementRef,
    leavedClassName: "".concat(prefixCls, "-hidden")
  }, motion, {
    onAppearPrepare: onShowPrepare,
    onEnterPrepare: onShowPrepare,
    removeOnLeave: destroyPopupOnHide
  }), function (_ref, motionRef) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    var mergedClassName = classnames__WEBPACK_IMPORTED_MODULE_6___default()(prefixCls, className, alignedClassName, motionClassName);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](rc_align__WEBPACK_IMPORTED_MODULE_4__["default"], {
      target: getAlignTarget(),
      key: "popup",
      ref: alignRef,
      monitorWindowResize: true,
      disabled: alignDisabled,
      align: align,
      onAlign: onInternalAlign
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      ref: motionRef,
      className: mergedClassName,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onMouseDownCapture: onMouseDown,
      onTouchStartCapture: onTouchStart,
      style: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, motionStyle), mergedStyle)
    }, childNode));
  });
});
PopupInner.displayName = 'PopupInner';
/* harmony default export */ __webpack_exports__["default"] = (PopupInner);

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup/index.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_util_es_isMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-util/es/isMobile */ "./node_modules/rc-util/es/isMobile.js");
/* harmony import */ var _Mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Mask */ "./node_modules/rc-trigger/es/Popup/Mask.js");
/* harmony import */ var _PopupInner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PopupInner */ "./node_modules/rc-trigger/es/Popup/PopupInner.js");
/* harmony import */ var _MobilePopupInner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MobilePopupInner */ "./node_modules/rc-trigger/es/Popup/MobilePopupInner.js");










var Popup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"](function (_ref, ref) {
  var visible = _ref.visible,
      mobile = _ref.mobile,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["visible", "mobile"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(visible),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      innerVisible = _useState2[0],
      serInnerVisible = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      inMobile = _useState4[0],
      setInMobile = _useState4[1];

  var cloneProps = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props), {}, {
    visible: innerVisible
  }); // We check mobile in visible changed here.
  // And this also delay set `innerVisible` to avoid popup component render flash


  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    serInnerVisible(visible);

    if (visible && mobile) {
      setInMobile(Object(rc_util_es_isMobile__WEBPACK_IMPORTED_MODULE_5__["default"])());
    }
  }, [visible, mobile]);
  var popupNode = inMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_MobilePopupInner__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cloneProps, {
    mobile: mobile,
    ref: ref
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_PopupInner__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cloneProps, {
    ref: ref
  })); // We can use fragment directly but this may failed some selector usage. Keep as origin logic

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Mask__WEBPACK_IMPORTED_MODULE_6__["default"], cloneProps), popupNode);
});
Popup.displayName = 'Popup';
/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup/useStretchStyle.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup/useStretchStyle.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (stretch) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({
    width: 0,
    height: 0
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      targetSize = _React$useState2[0],
      setTargetSize = _React$useState2[1];

  function measureStretch(element) {
    setTargetSize({
      width: element.offsetWidth,
      height: element.offsetHeight
    });
  } // Merge stretch style


  var style = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    var sizeStyle = {};

    if (stretch) {
      var width = targetSize.width,
          height = targetSize.height; // Stretch with target

      if (stretch.indexOf('height') !== -1 && height) {
        sizeStyle.height = height;
      } else if (stretch.indexOf('minHeight') !== -1 && height) {
        sizeStyle.minHeight = height;
      }

      if (stretch.indexOf('width') !== -1 && width) {
        sizeStyle.width = width;
      } else if (stretch.indexOf('minWidth') !== -1 && width) {
        sizeStyle.minWidth = width;
      }
    }

    return sizeStyle;
  }, [stretch, targetSize]);
  return [style, measureStretch];
});

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup/useVisibleStatus.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup/useVisibleStatus.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");





var StatusQueue = ['measure', 'align', null, 'motion'];
/* harmony default export */ __webpack_exports__["default"] = (function (visible, doMeasure) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      status = _useState2[0],
      setInternalStatus = _useState2[1];

  var rafRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var destroyRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);

  function setStatus(nextStatus) {
    if (!destroyRef.current) {
      setInternalStatus(nextStatus);
    }
  }

  function cancelRaf() {
    rc_util_es_raf__WEBPACK_IMPORTED_MODULE_4__["default"].cancel(rafRef.current);
  }

  function goNextStatus(callback) {
    cancelRaf();
    rafRef.current = Object(rc_util_es_raf__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
      // Only align should be manually trigger
      setStatus(function (prev) {
        switch (status) {
          case 'align':
            return 'motion';

          case 'motion':
            return 'stable';

          default:
        }

        return prev;
      });
      callback === null || callback === void 0 ? void 0 : callback();
    });
  } // Init status


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setStatus('measure');
  }, [visible]); // Go next status

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    switch (status) {
      case 'measure':
        doMeasure();
        break;

      default:
    }

    if (status) {
      rafRef.current = Object(rc_util_es_raf__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var index, nextStatus;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                index = StatusQueue.indexOf(status);
                nextStatus = StatusQueue[index + 1];

                if (nextStatus && index !== -1) {
                  setStatus(nextStatus);
                }

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));
    }
  }, [status]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    return function () {
      destroyRef.current = true;
      cancelRaf();
    };
  }, []);
  return [status, goNextStatus];
});

/***/ }),

/***/ "./node_modules/rc-trigger/es/context.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-trigger/es/context.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TriggerContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);
/* harmony default export */ __webpack_exports__["default"] = (TriggerContext);

/***/ }),

/***/ "./node_modules/rc-trigger/es/index.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-trigger/es/index.js ***!
  \*********************************************/
/*! exports provided: generateTrigger, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTrigger", function() { return generateTrigger; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");
/* harmony import */ var rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/Dom/contains */ "./node_modules/rc-util/es/Dom/contains.js");
/* harmony import */ var rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-util/es/Dom/findDOMNode */ "./node_modules/rc-util/es/Dom/findDOMNode.js");
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rc-util/es/ref */ "./node_modules/rc-util/es/ref.js");
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "./node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rc-util/es/Portal */ "./node_modules/rc-util/es/Portal.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils_alignUtil__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/alignUtil */ "./node_modules/rc-trigger/es/utils/alignUtil.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Popup */ "./node_modules/rc-trigger/es/Popup/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./context */ "./node_modules/rc-trigger/es/context.js");




















function noop() {}

function returnEmptyString() {
  return '';
}

function returnDocument(element) {
  if (element) {
    return element.ownerDocument;
  }

  return window.document;
}

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onContextMenu'];
/**
 * Internal usage. Do not use in your code since this will be removed.
 */

function generateTrigger(PortalComponent) {
  var Trigger = /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Trigger, _React$Component);

    var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(Trigger);

    function Trigger(props) {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Trigger);

      _this = _super.call(this, props);
      _this.popupRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createRef"]();
      _this.triggerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createRef"]();

      _this.onMouseEnter = function (e) {
        var mouseEnterDelay = _this.props.mouseEnterDelay;

        _this.fireEvents('onMouseEnter', e);

        _this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
      };

      _this.onMouseMove = function (e) {
        _this.fireEvents('onMouseMove', e);

        _this.setPoint(e);
      };

      _this.onMouseLeave = function (e) {
        _this.fireEvents('onMouseLeave', e);

        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      };

      _this.onPopupMouseEnter = function () {
        _this.clearDelayTimer();
      };

      _this.onPopupMouseLeave = function (e) {
        var _this$popupRef$curren;

        // https://github.com/react-component/trigger/pull/13
        // react bug?
        if (e.relatedTarget && !e.relatedTarget.setTimeout && Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_10__["default"])((_this$popupRef$curren = _this.popupRef.current) === null || _this$popupRef$curren === void 0 ? void 0 : _this$popupRef$curren.getElement(), e.relatedTarget)) {
          return;
        }

        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      };

      _this.onFocus = function (e) {
        _this.fireEvents('onFocus', e); // incase focusin and focusout


        _this.clearDelayTimer();

        if (_this.isFocusToShow()) {
          _this.focusTime = Date.now();

          _this.delaySetPopupVisible(true, _this.props.focusDelay);
        }
      };

      _this.onMouseDown = function (e) {
        _this.fireEvents('onMouseDown', e);

        _this.preClickTime = Date.now();
      };

      _this.onTouchStart = function (e) {
        _this.fireEvents('onTouchStart', e);

        _this.preTouchTime = Date.now();
      };

      _this.onBlur = function (e) {
        _this.fireEvents('onBlur', e);

        _this.clearDelayTimer();

        if (_this.isBlurToHide()) {
          _this.delaySetPopupVisible(false, _this.props.blurDelay);
        }
      };

      _this.onContextMenu = function (e) {
        e.preventDefault();

        _this.fireEvents('onContextMenu', e);

        _this.setPopupVisible(true, e);
      };

      _this.onContextMenuClose = function () {
        if (_this.isContextMenuToShow()) {
          _this.close();
        }
      };

      _this.onClick = function (event) {
        _this.fireEvents('onClick', event); // focus will trigger click


        if (_this.focusTime) {
          var preTime;

          if (_this.preClickTime && _this.preTouchTime) {
            preTime = Math.min(_this.preClickTime, _this.preTouchTime);
          } else if (_this.preClickTime) {
            preTime = _this.preClickTime;
          } else if (_this.preTouchTime) {
            preTime = _this.preTouchTime;
          }

          if (Math.abs(preTime - _this.focusTime) < 20) {
            return;
          }

          _this.focusTime = 0;
        }

        _this.preClickTime = 0;
        _this.preTouchTime = 0; // Only prevent default when all the action is click.
        // https://github.com/ant-design/ant-design/issues/17043
        // https://github.com/ant-design/ant-design/issues/17291

        if (_this.isClickToShow() && (_this.isClickToHide() || _this.isBlurToHide()) && event && event.preventDefault) {
          event.preventDefault();
        }

        var nextVisible = !_this.state.popupVisible;

        if (_this.isClickToHide() && !nextVisible || nextVisible && _this.isClickToShow()) {
          _this.setPopupVisible(!_this.state.popupVisible, event);
        }
      };

      _this.onPopupMouseDown = function () {
        _this.hasPopupMouseDown = true;
        clearTimeout(_this.mouseDownTimeout);
        _this.mouseDownTimeout = window.setTimeout(function () {
          _this.hasPopupMouseDown = false;
        }, 0);

        if (_this.context) {
          var _this$context;

          (_this$context = _this.context).onPopupMouseDown.apply(_this$context, arguments);
        }
      };

      _this.onDocumentClick = function (event) {
        if (_this.props.mask && !_this.props.maskClosable) {
          return;
        }

        var target = event.target;

        var root = _this.getRootDomNode();

        var popupNode = _this.getPopupDomNode();

        if (!Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_10__["default"])(root, target) && !Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_10__["default"])(popupNode, target) && !_this.hasPopupMouseDown) {
          _this.close();
        }
      };

      _this.getRootDomNode = function () {
        var getTriggerDOMNode = _this.props.getTriggerDOMNode;

        if (getTriggerDOMNode) {
          return getTriggerDOMNode(_this.triggerRef.current);
        }

        try {
          var domNode = Object(rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_11__["default"])(_this.triggerRef.current);

          if (domNode) {
            return domNode;
          }
        } catch (err) {// Do nothing
        }

        return react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.findDOMNode(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
      };

      _this.getPopupClassNameFromAlign = function (align) {
        var className = [];
        var _this$props = _this.props,
            popupPlacement = _this$props.popupPlacement,
            builtinPlacements = _this$props.builtinPlacements,
            prefixCls = _this$props.prefixCls,
            alignPoint = _this$props.alignPoint,
            getPopupClassNameFromAlign = _this$props.getPopupClassNameFromAlign;

        if (popupPlacement && builtinPlacements) {
          className.push(Object(_utils_alignUtil__WEBPACK_IMPORTED_MODULE_16__["getAlignPopupClassName"])(builtinPlacements, prefixCls, align, alignPoint));
        }

        if (getPopupClassNameFromAlign) {
          className.push(getPopupClassNameFromAlign(align));
        }

        return className.join(' ');
      };

      _this.getComponent = function () {
        var _this$props2 = _this.props,
            prefixCls = _this$props2.prefixCls,
            destroyPopupOnHide = _this$props2.destroyPopupOnHide,
            popupClassName = _this$props2.popupClassName,
            onPopupAlign = _this$props2.onPopupAlign,
            popupMotion = _this$props2.popupMotion,
            popupAnimation = _this$props2.popupAnimation,
            popupTransitionName = _this$props2.popupTransitionName,
            popupStyle = _this$props2.popupStyle,
            mask = _this$props2.mask,
            maskAnimation = _this$props2.maskAnimation,
            maskTransitionName = _this$props2.maskTransitionName,
            maskMotion = _this$props2.maskMotion,
            zIndex = _this$props2.zIndex,
            popup = _this$props2.popup,
            stretch = _this$props2.stretch,
            alignPoint = _this$props2.alignPoint,
            mobile = _this$props2.mobile;
        var _this$state = _this.state,
            popupVisible = _this$state.popupVisible,
            point = _this$state.point;

        var align = _this.getPopupAlign();

        var mouseProps = {};

        if (_this.isMouseEnterToShow()) {
          mouseProps.onMouseEnter = _this.onPopupMouseEnter;
        }

        if (_this.isMouseLeaveToHide()) {
          mouseProps.onMouseLeave = _this.onPopupMouseLeave;
        }

        mouseProps.onMouseDown = _this.onPopupMouseDown;
        mouseProps.onTouchStart = _this.onPopupMouseDown;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_Popup__WEBPACK_IMPORTED_MODULE_17__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          prefixCls: prefixCls,
          destroyPopupOnHide: destroyPopupOnHide,
          visible: popupVisible,
          point: alignPoint && point,
          className: popupClassName,
          align: align,
          onAlign: onPopupAlign,
          animation: popupAnimation,
          getClassNameFromAlign: _this.getPopupClassNameFromAlign
        }, mouseProps, {
          stretch: stretch,
          getRootDomNode: _this.getRootDomNode,
          style: popupStyle,
          mask: mask,
          zIndex: zIndex,
          transitionName: popupTransitionName,
          maskAnimation: maskAnimation,
          maskTransitionName: maskTransitionName,
          maskMotion: maskMotion,
          ref: _this.popupRef,
          motion: popupMotion,
          mobile: mobile
        }), typeof popup === 'function' ? popup() : popup);
      };

      _this.attachParent = function (popupContainer) {
        rc_util_es_raf__WEBPACK_IMPORTED_MODULE_9__["default"].cancel(_this.attachId);
        var _this$props3 = _this.props,
            getPopupContainer = _this$props3.getPopupContainer,
            getDocument = _this$props3.getDocument;

        var domNode = _this.getRootDomNode();

        var mountNode;

        if (!getPopupContainer) {
          mountNode = getDocument(_this.getRootDomNode()).body;
        } else if (domNode || getPopupContainer.length === 0) {
          // Compatible for legacy getPopupContainer with domNode argument.
          // If no need `domNode` argument, will call directly.
          // https://codesandbox.io/s/eloquent-mclean-ss93m?file=/src/App.js
          mountNode = getPopupContainer(domNode);
        }

        if (mountNode) {
          mountNode.appendChild(popupContainer);
        } else {
          // Retry after frame render in case parent not ready
          _this.attachId = Object(rc_util_es_raf__WEBPACK_IMPORTED_MODULE_9__["default"])(function () {
            _this.attachParent(popupContainer);
          });
        }
      };

      _this.getContainer = function () {
        var getDocument = _this.props.getDocument;
        var popupContainer = getDocument(_this.getRootDomNode()).createElement('div'); // Make sure default popup container will never cause scrollbar appearing
        // https://github.com/react-component/trigger/issues/41

        popupContainer.style.position = 'absolute';
        popupContainer.style.top = '0';
        popupContainer.style.left = '0';
        popupContainer.style.width = '100%';

        _this.attachParent(popupContainer);

        return popupContainer;
      };

      _this.setPoint = function (point) {
        var alignPoint = _this.props.alignPoint;
        if (!alignPoint || !point) return;

        _this.setState({
          point: {
            pageX: point.pageX,
            pageY: point.pageY
          }
        });
      };

      _this.handlePortalUpdate = function () {
        if (_this.state.prevPopupVisible !== _this.state.popupVisible) {
          _this.props.afterPopupVisibleChange(_this.state.popupVisible);
        }
      };

      var popupVisible;

      if ('popupVisible' in props) {
        popupVisible = !!props.popupVisible;
      } else {
        popupVisible = !!props.defaultPopupVisible;
      }

      _this.state = {
        prevPopupVisible: popupVisible,
        popupVisible: popupVisible
      };
      ALL_HANDLERS.forEach(function (h) {
        _this["fire".concat(h)] = function (e) {
          _this.fireEvents(h, e);
        };
      });
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Trigger, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.componentDidUpdate();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var props = this.props;
        var state = this.state; // We must listen to `mousedown` or `touchstart`, edge case:
        // https://github.com/ant-design/ant-design/issues/5804
        // https://github.com/react-component/calendar/issues/250
        // https://github.com/react-component/trigger/issues/50

        if (state.popupVisible) {
          var currentDocument;

          if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
            currentDocument = props.getDocument(this.getRootDomNode());
            this.clickOutsideHandler = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_13__["default"])(currentDocument, 'mousedown', this.onDocumentClick);
          } // always hide on mobile


          if (!this.touchOutsideHandler) {
            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
            this.touchOutsideHandler = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_13__["default"])(currentDocument, 'touchstart', this.onDocumentClick);
          } // close popup when trigger type contains 'onContextMenu' and document is scrolling.


          if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
            this.contextMenuOutsideHandler1 = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_13__["default"])(currentDocument, 'scroll', this.onContextMenuClose);
          } // close popup when trigger type contains 'onContextMenu' and window is blur.


          if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
            this.contextMenuOutsideHandler2 = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_13__["default"])(window, 'blur', this.onContextMenuClose);
          }

          return;
        }

        this.clearOutsideHandler();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.clearDelayTimer();
        this.clearOutsideHandler();
        clearTimeout(this.mouseDownTimeout);
        rc_util_es_raf__WEBPACK_IMPORTED_MODULE_9__["default"].cancel(this.attachId);
      }
    }, {
      key: "getPopupDomNode",
      value: function getPopupDomNode() {
        var _this$popupRef$curren2;

        // for test
        return ((_this$popupRef$curren2 = this.popupRef.current) === null || _this$popupRef$curren2 === void 0 ? void 0 : _this$popupRef$curren2.getElement()) || null;
      }
    }, {
      key: "getPopupAlign",
      value: function getPopupAlign() {
        var props = this.props;
        var popupPlacement = props.popupPlacement,
            popupAlign = props.popupAlign,
            builtinPlacements = props.builtinPlacements;

        if (popupPlacement && builtinPlacements) {
          return Object(_utils_alignUtil__WEBPACK_IMPORTED_MODULE_16__["getAlignFromPlacement"])(builtinPlacements, popupPlacement, popupAlign);
        }

        return popupAlign;
      }
      /**
       * @param popupVisible    Show or not the popup element
       * @param event           SyntheticEvent, used for `pointAlign`
       */

    }, {
      key: "setPopupVisible",
      value: function setPopupVisible(popupVisible, event) {
        var alignPoint = this.props.alignPoint;
        var prevPopupVisible = this.state.popupVisible;
        this.clearDelayTimer();

        if (prevPopupVisible !== popupVisible) {
          if (!('popupVisible' in this.props)) {
            this.setState({
              popupVisible: popupVisible,
              prevPopupVisible: prevPopupVisible
            });
          }

          this.props.onPopupVisibleChange(popupVisible);
        } // Always record the point position since mouseEnterDelay will delay the show


        if (alignPoint && event && popupVisible) {
          this.setPoint(event);
        }
      }
    }, {
      key: "delaySetPopupVisible",
      value: function delaySetPopupVisible(visible, delayS, event) {
        var _this2 = this;

        var delay = delayS * 1000;
        this.clearDelayTimer();

        if (delay) {
          var point = event ? {
            pageX: event.pageX,
            pageY: event.pageY
          } : null;
          this.delayTimer = window.setTimeout(function () {
            _this2.setPopupVisible(visible, point);

            _this2.clearDelayTimer();
          }, delay);
        } else {
          this.setPopupVisible(visible, event);
        }
      }
    }, {
      key: "clearDelayTimer",
      value: function clearDelayTimer() {
        if (this.delayTimer) {
          clearTimeout(this.delayTimer);
          this.delayTimer = null;
        }
      }
    }, {
      key: "clearOutsideHandler",
      value: function clearOutsideHandler() {
        if (this.clickOutsideHandler) {
          this.clickOutsideHandler.remove();
          this.clickOutsideHandler = null;
        }

        if (this.contextMenuOutsideHandler1) {
          this.contextMenuOutsideHandler1.remove();
          this.contextMenuOutsideHandler1 = null;
        }

        if (this.contextMenuOutsideHandler2) {
          this.contextMenuOutsideHandler2.remove();
          this.contextMenuOutsideHandler2 = null;
        }

        if (this.touchOutsideHandler) {
          this.touchOutsideHandler.remove();
          this.touchOutsideHandler = null;
        }
      }
    }, {
      key: "createTwoChains",
      value: function createTwoChains(event) {
        var childPros = this.props.children.props;
        var props = this.props;

        if (childPros[event] && props[event]) {
          return this["fire".concat(event)];
        }

        return childPros[event] || props[event];
      }
    }, {
      key: "isClickToShow",
      value: function isClickToShow() {
        var _this$props4 = this.props,
            action = _this$props4.action,
            showAction = _this$props4.showAction;
        return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
      }
    }, {
      key: "isContextMenuToShow",
      value: function isContextMenuToShow() {
        var _this$props5 = this.props,
            action = _this$props5.action,
            showAction = _this$props5.showAction;
        return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
      }
    }, {
      key: "isClickToHide",
      value: function isClickToHide() {
        var _this$props6 = this.props,
            action = _this$props6.action,
            hideAction = _this$props6.hideAction;
        return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
      }
    }, {
      key: "isMouseEnterToShow",
      value: function isMouseEnterToShow() {
        var _this$props7 = this.props,
            action = _this$props7.action,
            showAction = _this$props7.showAction;
        return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
      }
    }, {
      key: "isMouseLeaveToHide",
      value: function isMouseLeaveToHide() {
        var _this$props8 = this.props,
            action = _this$props8.action,
            hideAction = _this$props8.hideAction;
        return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
      }
    }, {
      key: "isFocusToShow",
      value: function isFocusToShow() {
        var _this$props9 = this.props,
            action = _this$props9.action,
            showAction = _this$props9.showAction;
        return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
      }
    }, {
      key: "isBlurToHide",
      value: function isBlurToHide() {
        var _this$props10 = this.props,
            action = _this$props10.action,
            hideAction = _this$props10.hideAction;
        return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
      }
    }, {
      key: "forcePopupAlign",
      value: function forcePopupAlign() {
        if (this.state.popupVisible) {
          var _this$popupRef$curren3;

          (_this$popupRef$curren3 = this.popupRef.current) === null || _this$popupRef$curren3 === void 0 ? void 0 : _this$popupRef$curren3.forceAlign();
        }
      }
    }, {
      key: "fireEvents",
      value: function fireEvents(type, e) {
        var childCallback = this.props.children.props[type];

        if (childCallback) {
          childCallback(e);
        }

        var callback = this.props[type];

        if (callback) {
          callback(e);
        }
      }
    }, {
      key: "close",
      value: function close() {
        this.setPopupVisible(false);
      }
    }, {
      key: "render",
      value: function render() {
        var popupVisible = this.state.popupVisible;
        var _this$props11 = this.props,
            children = _this$props11.children,
            forceRender = _this$props11.forceRender,
            alignPoint = _this$props11.alignPoint,
            className = _this$props11.className,
            autoDestroy = _this$props11.autoDestroy;
        var child = react__WEBPACK_IMPORTED_MODULE_7__["Children"].only(children);
        var newChildProps = {
          key: 'trigger'
        }; // ============================== Visible Handlers ==============================
        // >>> ContextMenu

        if (this.isContextMenuToShow()) {
          newChildProps.onContextMenu = this.onContextMenu;
        } else {
          newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
        } // >>> Click


        if (this.isClickToHide() || this.isClickToShow()) {
          newChildProps.onClick = this.onClick;
          newChildProps.onMouseDown = this.onMouseDown;
          newChildProps.onTouchStart = this.onTouchStart;
        } else {
          newChildProps.onClick = this.createTwoChains('onClick');
          newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
          newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
        } // >>> Hover(enter)


        if (this.isMouseEnterToShow()) {
          newChildProps.onMouseEnter = this.onMouseEnter; // Point align

          if (alignPoint) {
            newChildProps.onMouseMove = this.onMouseMove;
          }
        } else {
          newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
        } // >>> Hover(leave)


        if (this.isMouseLeaveToHide()) {
          newChildProps.onMouseLeave = this.onMouseLeave;
        } else {
          newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
        } // >>> Focus


        if (this.isFocusToShow() || this.isBlurToHide()) {
          newChildProps.onFocus = this.onFocus;
          newChildProps.onBlur = this.onBlur;
        } else {
          newChildProps.onFocus = this.createTwoChains('onFocus');
          newChildProps.onBlur = this.createTwoChains('onBlur');
        } // =================================== Render ===================================


        var childrenClassName = classnames__WEBPACK_IMPORTED_MODULE_15___default()(child && child.props && child.props.className, className);

        if (childrenClassName) {
          newChildProps.className = childrenClassName;
        }

        var cloneProps = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, newChildProps);

        if (Object(rc_util_es_ref__WEBPACK_IMPORTED_MODULE_12__["supportRef"])(child)) {
          cloneProps.ref = Object(rc_util_es_ref__WEBPACK_IMPORTED_MODULE_12__["composeRef"])(this.triggerRef, child.ref);
        }

        var trigger = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["cloneElement"](child, cloneProps);
        var portal; // prevent unmounting after it's rendered

        if (popupVisible || this.popupRef.current || forceRender) {
          portal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createElement"](PortalComponent, {
            key: "portal",
            getContainer: this.getContainer,
            didUpdate: this.handlePortalUpdate
          }, this.getComponent());
        }

        if (!popupVisible && autoDestroy) {
          portal = null;
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_context__WEBPACK_IMPORTED_MODULE_18__["default"].Provider, {
          value: {
            onPopupMouseDown: this.onPopupMouseDown
          }
        }, trigger, portal);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref, prevState) {
        var popupVisible = _ref.popupVisible;
        var newState = {};

        if (popupVisible !== undefined && prevState.popupVisible !== popupVisible) {
          newState.popupVisible = popupVisible;
          newState.prevPopupVisible = prevState.popupVisible;
        }

        return newState;
      }
    }]);

    return Trigger;
  }(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

  Trigger.contextType = _context__WEBPACK_IMPORTED_MODULE_18__["default"];
  Trigger.defaultProps = {
    prefixCls: 'rc-trigger-popup',
    getPopupClassNameFromAlign: returnEmptyString,
    getDocument: returnDocument,
    onPopupVisibleChange: noop,
    afterPopupVisibleChange: noop,
    onPopupAlign: noop,
    popupClassName: '',
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    focusDelay: 0,
    blurDelay: 0.15,
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: false
  };
  return Trigger;
}
/* harmony default export */ __webpack_exports__["default"] = (generateTrigger(rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_14__["default"]));

/***/ }),

/***/ "./node_modules/rc-trigger/es/utils/alignUtil.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-trigger/es/utils/alignUtil.js ***!
  \*******************************************************/
/*! exports provided: getAlignFromPlacement, getAlignPopupClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlignFromPlacement", function() { return getAlignFromPlacement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlignPopupClassName", function() { return getAlignPopupClassName; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");


function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }

  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, baseAlign), align);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  var placements = Object.keys(builtinPlacements);

  for (var i = 0; i < placements.length; i += 1) {
    var placement = placements[i];

    if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
      return "".concat(prefixCls, "-placement-").concat(placement);
    }
  }

  return '';
}

/***/ }),

/***/ "./node_modules/rc-trigger/es/utils/legacyUtil.js":
/*!********************************************************!*\
  !*** ./node_modules/rc-trigger/es/utils/legacyUtil.js ***!
  \********************************************************/
/*! exports provided: getMotion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMotion", function() { return getMotion; });
function getMotion(_ref) {
  var prefixCls = _ref.prefixCls,
      motion = _ref.motion,
      animation = _ref.animation,
      transitionName = _ref.transitionName;

  if (motion) {
    return motion;
  }

  if (animation) {
    return {
      motionName: "".concat(prefixCls, "-").concat(animation)
    };
  }

  if (transitionName) {
    return {
      motionName: transitionName
    };
  }

  return null;
}

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/addEventListener.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/addEventListener.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addEventListenerWrap; });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);

function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.unstable_batchedUpdates ? function run(e) {
    react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.unstable_batchedUpdates(cb, e);
  } : cb;

  if (target.addEventListener) {
    target.addEventListener(eventType, callback, option);
  }

  return {
    remove: function remove() {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, callback);
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/canUseDom.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/canUseDom.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return canUseDom; });
function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/contains.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/contains.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contains; });
function contains(root, n) {
  if (!root) {
    return false;
  }

  return root.contains(n);
}

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/findDOMNode.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/findDOMNode.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return findDOMNode; });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Return if a node is a DOM node. Else will return by `findDOMNode`
 */

function findDOMNode(node) {
  if (node instanceof HTMLElement) {
    return node;
  }

  return react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.findDOMNode(node);
}

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/isVisible.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/isVisible.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (element) {
  if (!element) {
    return false;
  }

  if (element.offsetParent) {
    return true;
  }

  if (element.getBBox) {
    var box = element.getBBox();

    if (box.width || box.height) {
      return true;
    }
  }

  if (element.getBoundingClientRect) {
    var _box = element.getBoundingClientRect();

    if (_box.width || _box.height) {
      return true;
    }
  }

  return false;
});

/***/ }),

/***/ "./node_modules/rc-util/es/KeyCode.js":
/*!********************************************!*\
  !*** ./node_modules/rc-util/es/KeyCode.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,

  /**
   * BACKSPACE
   */
  BACKSPACE: 8,

  /**
   * TAB
   */
  TAB: 9,

  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,

  /**
   * ENTER
   */
  ENTER: 13,

  /**
   * SHIFT
   */
  SHIFT: 16,

  /**
   * CTRL
   */
  CTRL: 17,

  /**
   * ALT
   */
  ALT: 18,

  /**
   * PAUSE
   */
  PAUSE: 19,

  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,

  /**
   * ESC
   */
  ESC: 27,

  /**
   * SPACE
   */
  SPACE: 32,

  /**
   * PAGE_UP
   */
  PAGE_UP: 33,

  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,

  /**
   * END
   */
  END: 35,

  /**
   * HOME
   */
  HOME: 36,

  /**
   * LEFT
   */
  LEFT: 37,

  /**
   * UP
   */
  UP: 38,

  /**
   * RIGHT
   */
  RIGHT: 39,

  /**
   * DOWN
   */
  DOWN: 40,

  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,

  /**
   * INSERT
   */
  INSERT: 45,

  /**
   * DELETE
   */
  DELETE: 46,

  /**
   * ZERO
   */
  ZERO: 48,

  /**
   * ONE
   */
  ONE: 49,

  /**
   * TWO
   */
  TWO: 50,

  /**
   * THREE
   */
  THREE: 51,

  /**
   * FOUR
   */
  FOUR: 52,

  /**
   * FIVE
   */
  FIVE: 53,

  /**
   * SIX
   */
  SIX: 54,

  /**
   * SEVEN
   */
  SEVEN: 55,

  /**
   * EIGHT
   */
  EIGHT: 56,

  /**
   * NINE
   */
  NINE: 57,

  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,

  /**
   * A
   */
  A: 65,

  /**
   * B
   */
  B: 66,

  /**
   * C
   */
  C: 67,

  /**
   * D
   */
  D: 68,

  /**
   * E
   */
  E: 69,

  /**
   * F
   */
  F: 70,

  /**
   * G
   */
  G: 71,

  /**
   * H
   */
  H: 72,

  /**
   * I
   */
  I: 73,

  /**
   * J
   */
  J: 74,

  /**
   * K
   */
  K: 75,

  /**
   * L
   */
  L: 76,

  /**
   * M
   */
  M: 77,

  /**
   * N
   */
  N: 78,

  /**
   * O
   */
  O: 79,

  /**
   * P
   */
  P: 80,

  /**
   * Q
   */
  Q: 81,

  /**
   * R
   */
  R: 82,

  /**
   * S
   */
  S: 83,

  /**
   * T
   */
  T: 84,

  /**
   * U
   */
  U: 85,

  /**
   * V
   */
  V: 86,

  /**
   * W
   */
  W: 87,

  /**
   * X
   */
  X: 88,

  /**
   * Y
   */
  Y: 89,

  /**
   * Z
   */
  Z: 90,

  /**
   * META
   */
  META: 91,

  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,

  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,

  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,

  /**
   * NUM_ONE
   */
  NUM_ONE: 97,

  /**
   * NUM_TWO
   */
  NUM_TWO: 98,

  /**
   * NUM_THREE
   */
  NUM_THREE: 99,

  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,

  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,

  /**
   * NUM_SIX
   */
  NUM_SIX: 102,

  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,

  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,

  /**
   * NUM_NINE
   */
  NUM_NINE: 105,

  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,

  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,

  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,

  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,

  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,

  /**
   * F1
   */
  F1: 112,

  /**
   * F2
   */
  F2: 113,

  /**
   * F3
   */
  F3: 114,

  /**
   * F4
   */
  F4: 115,

  /**
   * F5
   */
  F5: 116,

  /**
   * F6
   */
  F6: 117,

  /**
   * F7
   */
  F7: 118,

  /**
   * F8
   */
  F8: 119,

  /**
   * F9
   */
  F9: 120,

  /**
   * F10
   */
  F10: 121,

  /**
   * F11
   */
  F11: 122,

  /**
   * F12
   */
  F12: 123,

  /**
   * NUMLOCK
   */
  NUMLOCK: 144,

  /**
   * SEMICOLON
   */
  SEMICOLON: 186,

  /**
   * DASH
   */
  DASH: 189,

  /**
   * EQUALS
   */
  EQUALS: 187,

  /**
   * COMMA
   */
  COMMA: 188,

  /**
   * PERIOD
   */
  PERIOD: 190,

  /**
   * SLASH
   */
  SLASH: 191,

  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,

  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,

  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,

  /**
   * BACKSLASH
   */
  BACKSLASH: 220,

  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,

  /**
   * WIN_KEY
   */
  WIN_KEY: 224,

  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,

  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================

  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;

    if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    } // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.


    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;

      default:
        return true;
    }
  },

  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }

    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }

    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    } // Safari sends zero key code for non-latin characters.


    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }

    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;

      default:
        return false;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (KeyCode);

/***/ }),

/***/ "./node_modules/rc-util/es/Portal.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-util/es/Portal.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Dom_canUseDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dom/canUseDom */ "./node_modules/rc-util/es/Dom/canUseDom.js");



var Portal = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
  var didUpdate = props.didUpdate,
      getContainer = props.getContainer,
      children = props.children;
  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); // Ref return nothing, only for wrapper check exist

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, function () {
    return {};
  }); // Create container in client side with sync to avoid useEffect not get ref

  var initRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);

  if (!initRef.current && Object(_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_2__["default"])()) {
    containerRef.current = getContainer();
    initRef.current = true;
  } // [Legacy] Used by `rc-trigger`


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    didUpdate === null || didUpdate === void 0 ? void 0 : didUpdate(props);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      var _containerRef$current, _containerRef$current2;

      // [Legacy] This should not be handle by Portal but parent PortalWrapper instead.
      // Since some component use `Portal` directly, we have to keep the logic here.
      (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : (_containerRef$current2 = _containerRef$current.parentNode) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.removeChild(containerRef.current);
    };
  }, []);
  return containerRef.current ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(children, containerRef.current) : null;
});
/* harmony default export */ __webpack_exports__["default"] = (Portal);

/***/ }),

/***/ "./node_modules/rc-util/es/isMobile.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-util/es/isMobile.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (typeof navigator === 'undefined' || typeof window === 'undefined') {
    return false;
  }

  var agent = navigator.userAgent || navigator.vendor || window.opera;

  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent === null || agent === void 0 ? void 0 : agent.substr(0, 4))) {
    return true;
  }

  return false;
});

/***/ }),

/***/ "./node_modules/rc-util/es/raf.js":
/*!****************************************!*\
  !*** ./node_modules/rc-util/es/raf.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return wrapperRaf; });
var raf = function raf(callback) {
  return +setTimeout(callback, 16);
};

var caf = function caf(num) {
  return clearTimeout(num);
};

if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
  raf = function raf(callback) {
    return window.requestAnimationFrame(callback);
  };

  caf = function caf(handle) {
    return window.cancelAnimationFrame(handle);
  };
}

function wrapperRaf(callback) {
  return raf(callback);
}
wrapperRaf.cancel = caf;

/***/ }),

/***/ "./node_modules/rc-util/es/ref.js":
/*!****************************************!*\
  !*** ./node_modules/rc-util/es/ref.js ***!
  \****************************************/
/*! exports provided: fillRef, composeRef, supportRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillRef", function() { return fillRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composeRef", function() { return composeRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportRef", function() { return supportRef; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_1__);


function fillRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(ref) === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
}
/**
 * Merge refs into one ref function to support ref passing.
 */

function composeRef() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  return function (node) {
    refs.forEach(function (ref) {
      fillRef(ref, node);
    });
  };
}
function supportRef(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;

  var type = Object(react_is__WEBPACK_IMPORTED_MODULE_1__["isMemo"])(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type; // Function component node

  if (typeof type === 'function' && !((_type$prototype = type.prototype) === null || _type$prototype === void 0 ? void 0 : _type$prototype.render)) {
    return false;
  } // Class component


  if (typeof nodeOrComponent === 'function' && !((_nodeOrComponent$prot = nodeOrComponent.prototype) === null || _nodeOrComponent$prot === void 0 ? void 0 : _nodeOrComponent$prot.render)) {
    return false;
  }

  return true;
}
/* eslint-enable */

/***/ }),

/***/ "./node_modules/rc-util/es/warning.js":
/*!********************************************!*\
  !*** ./node_modules/rc-util/es/warning.js ***!
  \********************************************/
/*! exports provided: warning, note, resetWarned, call, warningOnce, noteOnce, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "note", function() { return note; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetWarned", function() { return resetWarned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "call", function() { return call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningOnce", function() { return warningOnce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noteOnce", function() { return noteOnce; });
/* eslint-disable no-console */
var warned = {};
function warning(valid, message) {
  // Support uglify
  if ( true && !valid && console !== undefined) {
    console.error("Warning: ".concat(message));
  }
}
function note(valid, message) {
  // Support uglify
  if ( true && !valid && console !== undefined) {
    console.warn("Note: ".concat(message));
  }
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
/* harmony default export */ __webpack_exports__["default"] = (warningOnce);
/* eslint-enable */

/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../next/dist/compiled/webpack/global.js */ "./node_modules/next/dist/compiled/webpack/global.js")))

/***/ }),

/***/ "./src/components/Player/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Player/index.tsx ***!
  \*****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/PlayerContext */ "./src/contexts/PlayerContext.ts");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Player/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-slider */ "./node_modules/rc-slider/es/index.js");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-slider/assets/index.css */ "./node_modules/rc-slider/assets/index.css");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\gabak\\OneDrive\\WorkPlace\\WebProjects\\podcastrnext\\src\\components\\Player\\index.tsx",
    _s = $RefreshSig$();







function Player() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_2__["PlayerContext"]),
      episodeList = _useContext.episodeList,
      currentEpisodeIndex = _useContext.currentEpisodeIndex;

  var episode = episodeList[currentEpisodeIndex];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.playerContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/playing.svg",
        alt: "Tocando Agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: ["Tocando agora ", episode === null || episode === void 0 ? void 0 : episode.title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.currentEpisode,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
        width: 592,
        height: 592,
        src: episode.thumbnail,
        objectFit: "cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: episode.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 12
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.members
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 12
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.emptyPlayer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Selecione um podcast para ouvir"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: !episode ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.empty : '',
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.progress,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "00.00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slider,
          children: episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(rc_slider__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.emptySlider
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "00.00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.buttons,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/shuffle.svg",
            alt: "Embaralhar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/play-previous.svg",
            alt: "Tocar Anterior"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.playButton,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/play.svg",
            alt: "Tocar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/play-next.svg",
            alt: "Tocar Pr\xF3ximo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/repeat.svg",
            alt: "Repitir"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

_s(Player, "6O9YtOUOu8vI5129FCZOLkHtw1k=");

_c = Player;

var _c;

$RefreshReg$(_c, "Player");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVTdXBlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZG9tLWFsaWduL2Rpc3Qtd2ViL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtYWxpZ24vZXMvQWxpZ24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1hbGlnbi9lcy9ob29rcy91c2VCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1hbGlnbi9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLWFsaWduL2VzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1tb3Rpb24vZXMvQ1NTTW90aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbW90aW9uL2VzL0NTU01vdGlvbkxpc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1tb3Rpb24vZXMvRG9tV3JhcHBlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW1vdGlvbi9lcy9ob29rcy91c2VEb21Nb3Rpb25FdmVudHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1tb3Rpb24vZXMvaG9va3MvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW1vdGlvbi9lcy9ob29rcy91c2VOZXh0RnJhbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1tb3Rpb24vZXMvaG9va3MvdXNlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1tb3Rpb24vZXMvaG9va3MvdXNlU3RhdHVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbW90aW9uL2VzL2hvb2tzL3VzZVN0ZXBRdWV1ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW1vdGlvbi9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW1vdGlvbi9lcy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1tb3Rpb24vZXMvdXRpbC9kaWZmLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbW90aW9uL2VzL3V0aWwvbW90aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtc2xpZGVyL2VzL0hhbmRsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9lcy9SYW5nZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9lcy9TbGlkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zbGlkZXIvZXMvY29tbW9uL01hcmtzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtc2xpZGVyL2VzL2NvbW1vbi9TbGlkZXJUb29sdGlwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtc2xpZGVyL2VzL2NvbW1vbi9TdGVwcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9lcy9jb21tb24vVHJhY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zbGlkZXIvZXMvY29tbW9uL2NyZWF0ZVNsaWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9lcy9jcmVhdGVTbGlkZXJXaXRoVG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9lcy91dGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXRvb2x0aXAvZXMvQ29udGVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXRvb2x0aXAvZXMvVG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXRvb2x0aXAvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10b29sdGlwL2VzL3BsYWNlbWVudHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL1BvcHVwL01hc2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL1BvcHVwL01vYmlsZVBvcHVwSW5uZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL1BvcHVwL1BvcHVwSW5uZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL1BvcHVwL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdHJpZ2dlci9lcy9Qb3B1cC91c2VTdHJldGNoU3R5bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL1BvcHVwL3VzZVZpc2libGVTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdHJpZ2dlci9lcy91dGlscy9hbGlnblV0aWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL3V0aWxzL2xlZ2FjeVV0aWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL0RvbS9hZGRFdmVudExpc3RlbmVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9Eb20vY2FuVXNlRG9tLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9Eb20vY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL0RvbS9maW5kRE9NTm9kZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvRG9tL2lzVmlzaWJsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvS2V5Q29kZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvUG9ydGFsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9pc01vYmlsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvcmFmLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9yZWYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwvZGlzdC9SZXNpemVPYnNlcnZlci5lcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJ1c2VDb250ZXh0IiwiUGxheWVyQ29udGV4dCIsImVwaXNvZGVMaXN0IiwiY3VycmVudEVwaXNvZGVJbmRleCIsImVwaXNvZGUiLCJzdHlsZXMiLCJwbGF5ZXJDb250YWluZXIiLCJ0aXRsZSIsImN1cnJlbnRFcGlzb2RlIiwidGh1bWJuYWlsIiwibWVtYmVycyIsImVtcHR5UGxheWVyIiwiZW1wdHkiLCJwcm9ncmVzcyIsInNsaWRlciIsImVtcHR5U2xpZGVyIiwiYnV0dG9ucyIsInBsYXlCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBcUQ7QUFDdEM7QUFDZixpQ0FBaUMsb0VBQWdCO0FBQ2pELEM7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNsQ0E7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUQ7QUFDb0I7QUFDRTtBQUN4RDtBQUNmLGtDQUFrQyw0RUFBd0I7QUFDMUQ7QUFDQSxnQkFBZ0Isa0VBQWM7QUFDOUI7O0FBRUE7QUFDQSxzQkFBc0Isa0VBQWM7QUFDcEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxXQUFXLDZFQUF5QjtBQUNwQztBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQWU7QUFDZjtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQStDO0FBQ2hDO0FBQ2Y7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGlCQUFpQixpRUFBYTtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBaUQ7QUFDbEM7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGtCQUFrQixrRUFBYztBQUNoQyxDOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnRkFBZ0Y7QUFDaEY7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwyQkFBMkIsK0JBQStCO0FBQzFEOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQWlEOztBQUVqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZTtBQUNmLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBLFFBQVEsa0VBQWM7QUFDdEIsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNsQ0E7QUFBQTtBQUFBO0FBQTZFO0FBQzlEO0FBQ2Y7QUFDQSxlQUFlLGdGQUE0QjtBQUMzQzs7QUFFQTtBQUNBOztBQUVBLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0Q7QUFDVztBQUNoRDtBQUNmLGVBQWUsb0VBQU87QUFDdEI7QUFDQTs7QUFFQSxTQUFTLHlFQUFxQjtBQUM5QixDOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpRDtBQUNZO0FBQ1k7QUFDdEI7QUFDcEM7QUFDZixTQUFTLGtFQUFjLFNBQVMsd0VBQW9CLFlBQVksOEVBQTBCLFlBQVksbUVBQWU7QUFDckgsQzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQWlEO0FBQ2xDO0FBQ2Y7QUFDQSxhQUFhLGtFQUFjO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUQ7QUFDSjtBQUNzQjtBQUNsQjtBQUN4QztBQUNmLFNBQVMscUVBQWlCLFNBQVMsbUVBQWUsU0FBUyw4RUFBMEIsU0FBUyxxRUFBaUI7QUFDL0csQzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBcUQ7QUFDdEM7QUFDZjtBQUNBLG9DQUFvQyxvRUFBZ0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLG9FQUFnQjtBQUN0RyxDOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQjs7QUFFaEI7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSyxLQUE2QjtBQUNsQztBQUNBO0FBQ0EsRUFBRSxVQUFVLElBQTRFO0FBQ3hGO0FBQ0EsRUFBRSxpQ0FBcUIsRUFBRSxtQ0FBRTtBQUMzQjtBQUNBLEdBQUc7QUFBQSxvR0FBQztBQUNKLEVBQUUsTUFBTSxFQUVOO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3pERDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjs7QUFFcEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0MscUNBQXFDO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCOztBQUV2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFOztBQUU5RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDOztBQUUzQywwREFBMEQ7O0FBRTFEO0FBQ0EsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7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QUFDcEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTs7O0FBR0E7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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhDQUFjO0FBQ2xDO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0EseURBQXlEOztBQUV6RDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVCxnQ0FBZ0Msa0RBQVU7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsd0ZBQWEsR0FBRzs7QUFFekMsWUFBWSxrRUFBVTtBQUN0QiwyQkFBMkIsa0VBQVU7QUFDckM7O0FBRUEsbUNBQW1DLGtEQUFrQjtBQUNyRCxtQkFBbUI7O0FBRW5CO0FBQ0EsZ0NBQWdDLG1EQUFtQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixtREFBbUIsQ0FBQyxpREFBYztBQUM5RDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHLENBQUMsK0NBQWU7O0FBRW5CLHdCQUF3QixpREFBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSwrRUFBZ0IsMERBQU0sQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUM3d0J0QztBQUFBO0FBQUE7QUFBQTtBQUFxRTs7QUFFckU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0EsU0FBUyx3RkFBYSxDQUFDLHdGQUFhLEdBQUc7QUFDdkM7QUFDTztBQUNQO0FBQ0E7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUFBO0FBQWlDO0FBQ2xCO0FBQ2Y7QUFDQSxpQkFBaUIsZ0RBQVE7QUFDekIsSUFBSSxnREFBUTtBQUNaLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQUE7QUFBaUM7QUFDakM7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBLFNBQVMsZ0RBQVE7QUFDakIsQzs7Ozs7Ozs7Ozs7O0FDWEE7QUFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7OztBQzFCRDtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrQkFBa0I7QUFDakMsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrQkFBa0I7QUFDakMsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELG1DQUFt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Q0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVCQUF1QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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REY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixlQU9FO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0IsbUJBQVMsRUFBRVgsMERBQU0sQ0FBQ1ksVUFBeEM7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBQyxXQUFUO0FBQXFCLGVBQUcsRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRixlQVVFO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBQyxnQkFBVDtBQUEwQixlQUFHLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkYsZUFhRTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUMsYUFBVDtBQUF1QixlQUFHLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0REOztHQTlEZWxCLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jNzc2NmUwMmVhOTk2NDljNTZiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn0iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJpbXBvcnQgZ2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vZ2V0UHJvdG90eXBlT2YuanNcIjtcbmltcG9ydCBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgZnJvbSBcIi4vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzXCI7XG5pbXBvcnQgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tIFwiLi9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkge1xuICB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpO1xuICByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7XG4gICAgdmFyIFN1cGVyID0gZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksXG4gICAgICAgIHJlc3VsdDtcblxuICAgIGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7XG4gICAgICB2YXIgTmV3VGFyZ2V0ID0gZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7XG4gICAgICByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJpbXBvcnQgc3VwZXJQcm9wQmFzZSBmcm9tIFwiLi9zdXBlclByb3BCYXNlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgfSBlbHNlIHtcbiAgICBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pO1xuXG4gIGlmIChfaSA9PSBudWxsKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuXG4gIHZhciBfcywgX2U7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGRlZmluZVByb3BlcnR5IGZyb20gXCIuL2RlZmluZVByb3BlcnR5LmpzXCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiLi9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCI7XG5pbXBvcnQgYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn0iLCJpbXBvcnQgZ2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vZ2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGlmIChhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aWYgKGFyZy50b1N0cmluZyA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZykge1xuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChhcmcudG9TdHJpbmcoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciB2ZW5kb3JQcmVmaXg7XG52YXIganNDc3NNYXAgPSB7XG4gIFdlYmtpdDogJy13ZWJraXQtJyxcbiAgTW96OiAnLW1vei0nLFxuICAvLyBJRSBkaWQgaXQgd3JvbmcgYWdhaW4gLi4uXG4gIG1zOiAnLW1zLScsXG4gIE86ICctby0nXG59O1xuXG5mdW5jdGlvbiBnZXRWZW5kb3JQcmVmaXgoKSB7XG4gIGlmICh2ZW5kb3JQcmVmaXggIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB2ZW5kb3JQcmVmaXg7XG4gIH1cblxuICB2ZW5kb3JQcmVmaXggPSAnJztcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLnN0eWxlO1xuICB2YXIgdGVzdFByb3AgPSAnVHJhbnNmb3JtJztcblxuICBmb3IgKHZhciBrZXkgaW4ganNDc3NNYXApIHtcbiAgICBpZiAoa2V5ICsgdGVzdFByb3AgaW4gc3R5bGUpIHtcbiAgICAgIHZlbmRvclByZWZpeCA9IGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmVuZG9yUHJlZml4O1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uTmFtZSgpIHtcbiAgcmV0dXJuIGdldFZlbmRvclByZWZpeCgpID8gXCJcIi5jb25jYXQoZ2V0VmVuZG9yUHJlZml4KCksIFwiVHJhbnNpdGlvblByb3BlcnR5XCIpIDogJ3RyYW5zaXRpb25Qcm9wZXJ0eSc7XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybU5hbWUoKSB7XG4gIHJldHVybiBnZXRWZW5kb3JQcmVmaXgoKSA/IFwiXCIuY29uY2F0KGdldFZlbmRvclByZWZpeCgpLCBcIlRyYW5zZm9ybVwiKSA6ICd0cmFuc2Zvcm0nO1xufVxuZnVuY3Rpb24gc2V0VHJhbnNpdGlvblByb3BlcnR5KG5vZGUsIHZhbHVlKSB7XG4gIHZhciBuYW1lID0gZ2V0VHJhbnNpdGlvbk5hbWUoKTtcblxuICBpZiAobmFtZSkge1xuICAgIG5vZGUuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcblxuICAgIGlmIChuYW1lICE9PSAndHJhbnNpdGlvblByb3BlcnR5Jykge1xuICAgICAgbm9kZS5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0VHJhbnNmb3JtKG5vZGUsIHZhbHVlKSB7XG4gIHZhciBuYW1lID0gZ2V0VHJhbnNmb3JtTmFtZSgpO1xuXG4gIGlmIChuYW1lKSB7XG4gICAgbm9kZS5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuXG4gICAgaWYgKG5hbWUgIT09ICd0cmFuc2Zvcm0nKSB7XG4gICAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uUHJvcGVydHkobm9kZSkge1xuICByZXR1cm4gbm9kZS5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgfHwgbm9kZS5zdHlsZVtnZXRUcmFuc2l0aW9uTmFtZSgpXTtcbn1cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybVhZKG5vZGUpIHtcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCk7XG4gIHZhciB0cmFuc2Zvcm0gPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKSB8fCBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKGdldFRyYW5zZm9ybU5hbWUoKSk7XG5cbiAgaWYgKHRyYW5zZm9ybSAmJiB0cmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgIHZhciBtYXRyaXggPSB0cmFuc2Zvcm0ucmVwbGFjZSgvW14wLTlcXC0uLF0vZywgJycpLnNwbGl0KCcsJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHBhcnNlRmxvYXQobWF0cml4WzEyXSB8fCBtYXRyaXhbNF0sIDApLFxuICAgICAgeTogcGFyc2VGbG9hdChtYXRyaXhbMTNdIHx8IG1hdHJpeFs1XSwgMClcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcbn1cbnZhciBtYXRyaXgyZCA9IC9tYXRyaXhcXCgoLiopXFwpLztcbnZhciBtYXRyaXgzZCA9IC9tYXRyaXgzZFxcKCguKilcXCkvO1xuZnVuY3Rpb24gc2V0VHJhbnNmb3JtWFkobm9kZSwgeHkpIHtcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCk7XG4gIHZhciB0cmFuc2Zvcm0gPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKSB8fCBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKGdldFRyYW5zZm9ybU5hbWUoKSk7XG5cbiAgaWYgKHRyYW5zZm9ybSAmJiB0cmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgIHZhciBhcnI7XG4gICAgdmFyIG1hdGNoMmQgPSB0cmFuc2Zvcm0ubWF0Y2gobWF0cml4MmQpO1xuXG4gICAgaWYgKG1hdGNoMmQpIHtcbiAgICAgIG1hdGNoMmQgPSBtYXRjaDJkWzFdO1xuICAgICAgYXJyID0gbWF0Y2gyZC5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChpdGVtLCAxMCk7XG4gICAgICB9KTtcbiAgICAgIGFycls0XSA9IHh5Lng7XG4gICAgICBhcnJbNV0gPSB4eS55O1xuICAgICAgc2V0VHJhbnNmb3JtKG5vZGUsIFwibWF0cml4KFwiLmNvbmNhdChhcnIuam9pbignLCcpLCBcIilcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbWF0Y2gzZCA9IHRyYW5zZm9ybS5tYXRjaChtYXRyaXgzZClbMV07XG4gICAgICBhcnIgPSBtYXRjaDNkLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGl0ZW0sIDEwKTtcbiAgICAgIH0pO1xuICAgICAgYXJyWzEyXSA9IHh5Lng7XG4gICAgICBhcnJbMTNdID0geHkueTtcbiAgICAgIHNldFRyYW5zZm9ybShub2RlLCBcIm1hdHJpeDNkKFwiLmNvbmNhdChhcnIuam9pbignLCcpLCBcIilcIikpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzZXRUcmFuc2Zvcm0obm9kZSwgXCJ0cmFuc2xhdGVYKFwiLmNvbmNhdCh4eS54LCBcInB4KSB0cmFuc2xhdGVZKFwiKS5jb25jYXQoeHkueSwgXCJweCkgdHJhbnNsYXRlWigwKVwiKSk7XG4gIH1cbn1cblxudmFyIFJFX05VTSA9IC9bXFwtK10/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bXFwtK10/XFxkK3wpLy5zb3VyY2U7XG52YXIgZ2V0Q29tcHV0ZWRTdHlsZVg7IC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNDg1NjU0LzMwNDA2MDVcblxuZnVuY3Rpb24gZm9yY2VSZWxheW91dChlbGVtKSB7XG4gIHZhciBvcmlnaW5hbFN0eWxlID0gZWxlbS5zdHlsZS5kaXNwbGF5O1xuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGVsZW0ub2Zmc2V0SGVpZ2h0OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gb3JpZ2luYWxTdHlsZTtcbn1cblxuZnVuY3Rpb24gY3NzKGVsLCBuYW1lLCB2KSB7XG4gIHZhciB2YWx1ZSA9IHY7XG5cbiAgaWYgKF90eXBlb2YobmFtZSkgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yICh2YXIgaSBpbiBuYW1lKSB7XG4gICAgICBpZiAobmFtZS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICBjc3MoZWwsIGksIG5hbWVbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZSA9IFwiXCIuY29uY2F0KHZhbHVlLCBcInB4XCIpO1xuICAgIH1cblxuICAgIGVsLnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlWChlbCwgbmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENsaWVudFBvc2l0aW9uKGVsZW0pIHtcbiAgdmFyIGJveDtcbiAgdmFyIHg7XG4gIHZhciB5O1xuICB2YXIgZG9jID0gZWxlbS5vd25lckRvY3VtZW50O1xuICB2YXIgYm9keSA9IGRvYy5ib2R5O1xuICB2YXIgZG9jRWxlbSA9IGRvYyAmJiBkb2MuZG9jdW1lbnRFbGVtZW50OyAvLyDmoLnmja4gR0JTIOacgOaWsOaVsOaNru+8jEEtR3JhZGUgQnJvd3NlcnMg6YO95bey5pSv5oyBIGdldEJvdW5kaW5nQ2xpZW50UmVjdCDmlrnms5XvvIzkuI3nlKjlho3ogIPomZHkvKDnu5/nmoTlrp7njrDmlrnlvI9cblxuICBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOyAvLyDms6jvvJpqUXVlcnkg6L+Y6ICD6JmR5YeP5Y67IGRvY0VsZW0uY2xpZW50TGVmdC9jbGllbnRUb3BcbiAgLy8g5L2G5rWL6K+V5Y+R546w77yM6L+Z5qC35Y+N6ICM5Lya5a+86Ie05b2TIGh0bWwg5ZKMIGJvZHkg5pyJ6L656LedL+i+ueahhuagt+W8j+aXtu+8jOiOt+WPlueahOWAvOS4jeato+ehrlxuICAvLyDmraTlpJbvvIxpZTYg5Lya5b+955WlIGh0bWwg55qEIG1hcmdpbiDlgLzvvIzlubjov5DlnLDmmK/msqHmnInosIHkvJrljrvorr7nva4gaHRtbCDnmoQgbWFyZ2luXG5cbiAgeCA9IGJveC5sZWZ0O1xuICB5ID0gYm94LnRvcDsgLy8gSW4gSUUsIG1vc3Qgb2YgdGhlIHRpbWUsIDIgZXh0cmEgcGl4ZWxzIGFyZSBhZGRlZCB0byB0aGUgdG9wIGFuZCBsZWZ0XG4gIC8vIGR1ZSB0byB0aGUgaW1wbGljaXQgMi1waXhlbCBpbnNldCBib3JkZXIuICBJbiBJRTYvNyBxdWlya3MgbW9kZSBhbmRcbiAgLy8gSUU2IHN0YW5kYXJkcyBtb2RlLCB0aGlzIGJvcmRlciBjYW4gYmUgb3ZlcnJpZGRlbiBieSBzZXR0aW5nIHRoZVxuICAvLyBkb2N1bWVudCBlbGVtZW50J3MgYm9yZGVyIHRvIHplcm8gLS0gdGh1cywgd2UgY2Fubm90IHJlbHkgb24gdGhlXG4gIC8vIG9mZnNldCBhbHdheXMgYmVpbmcgMiBwaXhlbHMuXG4gIC8vIEluIHF1aXJrcyBtb2RlLCB0aGUgb2Zmc2V0IGNhbiBiZSBkZXRlcm1pbmVkIGJ5IHF1ZXJ5aW5nIHRoZSBib2R5J3NcbiAgLy8gY2xpZW50TGVmdC9jbGllbnRUb3AsIGJ1dCBpbiBzdGFuZGFyZHMgbW9kZSwgaXQgaXMgZm91bmQgYnkgcXVlcnlpbmdcbiAgLy8gdGhlIGRvY3VtZW50IGVsZW1lbnQncyBjbGllbnRMZWZ0L2NsaWVudFRvcC4gIFNpbmNlIHdlIGFscmVhZHkgY2FsbGVkXG4gIC8vIGdldENsaWVudEJvdW5kaW5nUmVjdCB3ZSBoYXZlIGFscmVhZHkgZm9yY2VkIGEgcmVmbG93LCBzbyBpdCBpcyBub3RcbiAgLy8gdG9vIGV4cGVuc2l2ZSBqdXN0IHRvIHF1ZXJ5IHRoZW0gYWxsLlxuICAvLyBpZSDkuIvlupTor6Xlh4/ljrvnqpflj6PnmoTovrnmoYblkKfvvIzmr5Xnq5/pu5jorqQgYWJzb2x1dGUg6YO95piv55u45a+556qX5Y+j5a6a5L2N55qEXG4gIC8vIOeql+WPo+i+ueahhuagh+WHhuaYr+iuviBkb2N1bWVudEVsZW1lbnQgLHF1aXJrcyDml7borr7nva4gYm9keVxuICAvLyDmnIDlpb3npoHmraLlnKggYm9keSDlkowgaHRtbCDkuIrovrnmoYYg77yM5L2GIGllIDwgOSBodG1sIOm7mOiupOaciSAycHgg77yM5YeP5Y67XG4gIC8vIOS9huaYr+mdniBpZSDkuI3lj6/og73orr7nva7nqpflj6PovrnmoYbvvIxib2R5IGh0bWwg5Lmf5LiN5piv56qX5Y+jICxpZSDlj6/ku6XpgJrov4cgaHRtbCxib2R5IOiuvue9rlxuICAvLyDmoIflh4YgaWUg5LiLIGRvY0VsZW0uY2xpZW50VG9wIOWwseaYryBib3JkZXItdG9wXG4gIC8vIGllNyBodG1sIOWNs+eql+WPo+i+ueahhuaUueWPmOS4jeS6huOAguawuOi/nOS4uiAyXG4gIC8vIOS9huagh+WHhiBmaXJlZm94L2Nocm9tZS9pZTkg5LiLIGRvY0VsZW0uY2xpZW50VG9wIOaYr+eql+WPo+i+ueahhu+8jOWNs+S9v+iuvuS6hiBib3JkZXItdG9wIOS5n+S4uiAwXG5cbiAgeCAtPSBkb2NFbGVtLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG4gIHkgLT0gZG9jRWxlbS5jbGllbnRUb3AgfHwgYm9keS5jbGllbnRUb3AgfHwgMDtcbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiB4LFxuICAgIHRvcDogeVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGwodywgdG9wKSB7XG4gIHZhciByZXQgPSB3W1wicGFnZVwiLmNvbmNhdCh0b3AgPyAnWScgOiAnWCcsIFwiT2Zmc2V0XCIpXTtcbiAgdmFyIG1ldGhvZCA9IFwic2Nyb2xsXCIuY29uY2F0KHRvcCA/ICdUb3AnIDogJ0xlZnQnKTtcblxuICBpZiAodHlwZW9mIHJldCAhPT0gJ251bWJlcicpIHtcbiAgICB2YXIgZCA9IHcuZG9jdW1lbnQ7IC8vIGllNiw3LDggc3RhbmRhcmQgbW9kZVxuXG4gICAgcmV0ID0gZC5kb2N1bWVudEVsZW1lbnRbbWV0aG9kXTtcblxuICAgIGlmICh0eXBlb2YgcmV0ICE9PSAnbnVtYmVyJykge1xuICAgICAgLy8gcXVpcmtzIG1vZGVcbiAgICAgIHJldCA9IGQuYm9keVttZXRob2RdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbExlZnQodykge1xuICByZXR1cm4gZ2V0U2Nyb2xsKHcpO1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxUb3Aodykge1xuICByZXR1cm4gZ2V0U2Nyb2xsKHcsIHRydWUpO1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXQoZWwpIHtcbiAgdmFyIHBvcyA9IGdldENsaWVudFBvc2l0aW9uKGVsKTtcbiAgdmFyIGRvYyA9IGVsLm93bmVyRG9jdW1lbnQ7XG4gIHZhciB3ID0gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XG4gIHBvcy5sZWZ0ICs9IGdldFNjcm9sbExlZnQodyk7XG4gIHBvcy50b3AgKz0gZ2V0U2Nyb2xsVG9wKHcpO1xuICByZXR1cm4gcG9zO1xufVxuLyoqXG4gKiBBIGNydWRlIHdheSBvZiBkZXRlcm1pbmluZyBpZiBhbiBvYmplY3QgaXMgYSB3aW5kb3dcbiAqIEBtZW1iZXIgdXRpbFxuICovXG5cblxuZnVuY3Rpb24gaXNXaW5kb3cob2JqKSB7XG4gIC8vIG11c3QgdXNlID09IGZvciBpZThcblxuICAvKiBlc2xpbnQgZXFlcWVxOjAgKi9cbiAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiBvYmogIT09IHVuZGVmaW5lZCAmJiBvYmogPT0gb2JqLndpbmRvdztcbn1cblxuZnVuY3Rpb24gZ2V0RG9jdW1lbnQobm9kZSkge1xuICBpZiAoaXNXaW5kb3cobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZS5kb2N1bWVudDtcbiAgfVxuXG4gIGlmIChub2RlLm5vZGVUeXBlID09PSA5KSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50O1xufVxuXG5mdW5jdGlvbiBfZ2V0Q29tcHV0ZWRTdHlsZShlbGVtLCBuYW1lLCBjcykge1xuICB2YXIgY29tcHV0ZWRTdHlsZSA9IGNzO1xuICB2YXIgdmFsID0gJyc7XG4gIHZhciBkID0gZ2V0RG9jdW1lbnQoZWxlbSk7XG4gIGNvbXB1dGVkU3R5bGUgPSBjb21wdXRlZFN0eWxlIHx8IGQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtLCBudWxsKTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2tpc3N5dGVhbS9raXNzeS9pc3N1ZXMvNjFcblxuICBpZiAoY29tcHV0ZWRTdHlsZSkge1xuICAgIHZhbCA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKSB8fCBjb21wdXRlZFN0eWxlW25hbWVdO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxudmFyIF9SRV9OVU1fTk9fUFggPSBuZXcgUmVnRXhwKFwiXihcIi5jb25jYXQoUkVfTlVNLCBcIikoPyFweClbYS16JV0rJFwiKSwgJ2knKTtcblxudmFyIFJFX1BPUyA9IC9eKHRvcHxyaWdodHxib3R0b218bGVmdCkkLztcbnZhciBDVVJSRU5UX1NUWUxFID0gJ2N1cnJlbnRTdHlsZSc7XG52YXIgUlVOVElNRV9TVFlMRSA9ICdydW50aW1lU3R5bGUnO1xudmFyIExFRlQgPSAnbGVmdCc7XG52YXIgUFggPSAncHgnO1xuXG5mdW5jdGlvbiBfZ2V0Q29tcHV0ZWRTdHlsZUlFKGVsZW0sIG5hbWUpIHtcbiAgLy8gY3VycmVudFN0eWxlIG1heWJlIG51bGxcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTM1MjMxLmFzcHhcbiAgdmFyIHJldCA9IGVsZW1bQ1VSUkVOVF9TVFlMRV0gJiYgZWxlbVtDVVJSRU5UX1NUWUxFXVtuYW1lXTsgLy8g5b2TIHdpZHRoL2hlaWdodCDorr7nva7kuLrnmb7liIbmr5Tml7bvvIzpgJrov4cgcGl4ZWxMZWZ0IOaWueW8j+i9rOaNoueahCB3aWR0aC9oZWlnaHQg5YC8XG4gIC8vIOS4gOW8gOWni+WwseWkhOeQhuS6hiEgQ1VTVE9NX1NUWUxFLmhlaWdodCxDVVNUT01fU1RZTEUud2lkdGggLGNzc0hvb2sg6Kej5YazQDIwMTEtMDgtMTlcbiAgLy8g5ZyoIGllIOS4i+S4jeWvue+8jOmcgOimgeebtOaOpeeUqCBvZmZzZXQg5pa55byPXG4gIC8vIGJvcmRlcldpZHRoIOetieWAvOS5n+aciemXrumimO+8jOS9huiAg+iZkeWIsCBib3JkZXJXaWR0aCDorr7kuLrnmb7liIbmr5TnmoTmpoLnjoflvojlsI/vvIzov5nph4zlsLHkuI3ogIPomZHkuoZcbiAgLy8gRnJvbSB0aGUgYXdlc29tZSBoYWNrIGJ5IERlYW4gRWR3YXJkc1xuICAvLyBodHRwOi8vZXJpay5lYWUubmV0L2FyY2hpdmVzLzIwMDcvMDcvMjcvMTguNTQuMTUvI2NvbW1lbnQtMTAyMjkxXG4gIC8vIElmIHdlJ3JlIG5vdCBkZWFsaW5nIHdpdGggYSByZWd1bGFyIHBpeGVsIG51bWJlclxuICAvLyBidXQgYSBudW1iZXIgdGhhdCBoYXMgYSB3ZWlyZCBlbmRpbmcsIHdlIG5lZWQgdG8gY29udmVydCBpdCB0byBwaXhlbHNcbiAgLy8gZXhjbHVkZSBsZWZ0IHJpZ2h0IGZvciByZWxhdGl2aXR5XG5cbiAgaWYgKF9SRV9OVU1fTk9fUFgudGVzdChyZXQpICYmICFSRV9QT1MudGVzdChuYW1lKSkge1xuICAgIC8vIFJlbWVtYmVyIHRoZSBvcmlnaW5hbCB2YWx1ZXNcbiAgICB2YXIgc3R5bGUgPSBlbGVtLnN0eWxlO1xuICAgIHZhciBsZWZ0ID0gc3R5bGVbTEVGVF07XG4gICAgdmFyIHJzTGVmdCA9IGVsZW1bUlVOVElNRV9TVFlMRV1bTEVGVF07IC8vIHByZXZlbnQgZmxhc2hpbmcgb2YgY29udGVudFxuXG4gICAgZWxlbVtSVU5USU1FX1NUWUxFXVtMRUZUXSA9IGVsZW1bQ1VSUkVOVF9TVFlMRV1bTEVGVF07IC8vIFB1dCBpbiB0aGUgbmV3IHZhbHVlcyB0byBnZXQgYSBjb21wdXRlZCB2YWx1ZSBvdXRcblxuICAgIHN0eWxlW0xFRlRdID0gbmFtZSA9PT0gJ2ZvbnRTaXplJyA/ICcxZW0nIDogcmV0IHx8IDA7XG4gICAgcmV0ID0gc3R5bGUucGl4ZWxMZWZ0ICsgUFg7IC8vIFJldmVydCB0aGUgY2hhbmdlZCB2YWx1ZXNcblxuICAgIHN0eWxlW0xFRlRdID0gbGVmdDtcbiAgICBlbGVtW1JVTlRJTUVfU1RZTEVdW0xFRlRdID0gcnNMZWZ0O1xuICB9XG5cbiAgcmV0dXJuIHJldCA9PT0gJycgPyAnYXV0bycgOiByZXQ7XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBnZXRDb21wdXRlZFN0eWxlWCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlID8gX2dldENvbXB1dGVkU3R5bGUgOiBfZ2V0Q29tcHV0ZWRTdHlsZUlFO1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXREaXJlY3Rpb24oZGlyLCBvcHRpb24pIHtcbiAgaWYgKGRpciA9PT0gJ2xlZnQnKSB7XG4gICAgcmV0dXJuIG9wdGlvbi51c2VDc3NSaWdodCA/ICdyaWdodCcgOiBkaXI7XG4gIH1cblxuICByZXR1cm4gb3B0aW9uLnVzZUNzc0JvdHRvbSA/ICdib3R0b20nIDogZGlyO1xufVxuXG5mdW5jdGlvbiBvcHBvc2l0ZU9mZnNldERpcmVjdGlvbihkaXIpIHtcbiAgaWYgKGRpciA9PT0gJ2xlZnQnKSB7XG4gICAgcmV0dXJuICdyaWdodCc7XG4gIH0gZWxzZSBpZiAoZGlyID09PSAncmlnaHQnKSB7XG4gICAgcmV0dXJuICdsZWZ0JztcbiAgfSBlbHNlIGlmIChkaXIgPT09ICd0b3AnKSB7XG4gICAgcmV0dXJuICdib3R0b20nO1xuICB9IGVsc2UgaWYgKGRpciA9PT0gJ2JvdHRvbScpIHtcbiAgICByZXR1cm4gJ3RvcCc7XG4gIH1cbn0gLy8g6K6+572uIGVsZW0g55u45a+5IGVsZW0ub3duZXJEb2N1bWVudCDnmoTlnZDmoIdcblxuXG5mdW5jdGlvbiBzZXRMZWZ0VG9wKGVsZW0sIG9mZnNldCwgb3B0aW9uKSB7XG4gIC8vIHNldCBwb3NpdGlvbiBmaXJzdCwgaW4tY2FzZSB0b3AvbGVmdCBhcmUgc2V0IGV2ZW4gb24gc3RhdGljIGVsZW1cbiAgaWYgKGNzcyhlbGVtLCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICBlbGVtLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgfVxuXG4gIHZhciBwcmVzZXRIID0gLTk5OTtcbiAgdmFyIHByZXNldFYgPSAtOTk5O1xuICB2YXIgaG9yaXpvbnRhbFByb3BlcnR5ID0gZ2V0T2Zmc2V0RGlyZWN0aW9uKCdsZWZ0Jywgb3B0aW9uKTtcbiAgdmFyIHZlcnRpY2FsUHJvcGVydHkgPSBnZXRPZmZzZXREaXJlY3Rpb24oJ3RvcCcsIG9wdGlvbik7XG4gIHZhciBvcHBvc2l0ZUhvcml6b250YWxQcm9wZXJ0eSA9IG9wcG9zaXRlT2Zmc2V0RGlyZWN0aW9uKGhvcml6b250YWxQcm9wZXJ0eSk7XG4gIHZhciBvcHBvc2l0ZVZlcnRpY2FsUHJvcGVydHkgPSBvcHBvc2l0ZU9mZnNldERpcmVjdGlvbih2ZXJ0aWNhbFByb3BlcnR5KTtcblxuICBpZiAoaG9yaXpvbnRhbFByb3BlcnR5ICE9PSAnbGVmdCcpIHtcbiAgICBwcmVzZXRIID0gOTk5O1xuICB9XG5cbiAgaWYgKHZlcnRpY2FsUHJvcGVydHkgIT09ICd0b3AnKSB7XG4gICAgcHJlc2V0ViA9IDk5OTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbFRyYW5zaXRpb24gPSAnJztcbiAgdmFyIG9yaWdpbmFsT2Zmc2V0ID0gZ2V0T2Zmc2V0KGVsZW0pO1xuXG4gIGlmICgnbGVmdCcgaW4gb2Zmc2V0IHx8ICd0b3AnIGluIG9mZnNldCkge1xuICAgIG9yaWdpbmFsVHJhbnNpdGlvbiA9IGdldFRyYW5zaXRpb25Qcm9wZXJ0eShlbGVtKSB8fCAnJztcbiAgICBzZXRUcmFuc2l0aW9uUHJvcGVydHkoZWxlbSwgJ25vbmUnKTtcbiAgfVxuXG4gIGlmICgnbGVmdCcgaW4gb2Zmc2V0KSB7XG4gICAgZWxlbS5zdHlsZVtvcHBvc2l0ZUhvcml6b250YWxQcm9wZXJ0eV0gPSAnJztcbiAgICBlbGVtLnN0eWxlW2hvcml6b250YWxQcm9wZXJ0eV0gPSBcIlwiLmNvbmNhdChwcmVzZXRILCBcInB4XCIpO1xuICB9XG5cbiAgaWYgKCd0b3AnIGluIG9mZnNldCkge1xuICAgIGVsZW0uc3R5bGVbb3Bwb3NpdGVWZXJ0aWNhbFByb3BlcnR5XSA9ICcnO1xuICAgIGVsZW0uc3R5bGVbdmVydGljYWxQcm9wZXJ0eV0gPSBcIlwiLmNvbmNhdChwcmVzZXRWLCBcInB4XCIpO1xuICB9IC8vIGZvcmNlIHJlbGF5b3V0XG5cblxuICBmb3JjZVJlbGF5b3V0KGVsZW0pO1xuICB2YXIgb2xkID0gZ2V0T2Zmc2V0KGVsZW0pO1xuICB2YXIgb3JpZ2luYWxTdHlsZSA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBvZmZzZXQpIHtcbiAgICBpZiAob2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhciBkaXIgPSBnZXRPZmZzZXREaXJlY3Rpb24oa2V5LCBvcHRpb24pO1xuICAgICAgdmFyIHByZXNldCA9IGtleSA9PT0gJ2xlZnQnID8gcHJlc2V0SCA6IHByZXNldFY7XG4gICAgICB2YXIgb2ZmID0gb3JpZ2luYWxPZmZzZXRba2V5XSAtIG9sZFtrZXldO1xuXG4gICAgICBpZiAoZGlyID09PSBrZXkpIHtcbiAgICAgICAgb3JpZ2luYWxTdHlsZVtkaXJdID0gcHJlc2V0ICsgb2ZmO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3JpZ2luYWxTdHlsZVtkaXJdID0gcHJlc2V0IC0gb2ZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNzcyhlbGVtLCBvcmlnaW5hbFN0eWxlKTsgLy8gZm9yY2UgcmVsYXlvdXRcblxuICBmb3JjZVJlbGF5b3V0KGVsZW0pO1xuXG4gIGlmICgnbGVmdCcgaW4gb2Zmc2V0IHx8ICd0b3AnIGluIG9mZnNldCkge1xuICAgIHNldFRyYW5zaXRpb25Qcm9wZXJ0eShlbGVtLCBvcmlnaW5hbFRyYW5zaXRpb24pO1xuICB9XG5cbiAgdmFyIHJldCA9IHt9O1xuXG4gIGZvciAodmFyIF9rZXkgaW4gb2Zmc2V0KSB7XG4gICAgaWYgKG9mZnNldC5oYXNPd25Qcm9wZXJ0eShfa2V5KSkge1xuICAgICAgdmFyIF9kaXIgPSBnZXRPZmZzZXREaXJlY3Rpb24oX2tleSwgb3B0aW9uKTtcblxuICAgICAgdmFyIF9vZmYgPSBvZmZzZXRbX2tleV0gLSBvcmlnaW5hbE9mZnNldFtfa2V5XTtcblxuICAgICAgaWYgKF9rZXkgPT09IF9kaXIpIHtcbiAgICAgICAgcmV0W19kaXJdID0gb3JpZ2luYWxTdHlsZVtfZGlyXSArIF9vZmY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXRbX2Rpcl0gPSBvcmlnaW5hbFN0eWxlW19kaXJdIC0gX29mZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjc3MoZWxlbSwgcmV0KTtcbn1cblxuZnVuY3Rpb24gc2V0VHJhbnNmb3JtJDEoZWxlbSwgb2Zmc2V0KSB7XG4gIHZhciBvcmlnaW5hbE9mZnNldCA9IGdldE9mZnNldChlbGVtKTtcbiAgdmFyIG9yaWdpbmFsWFkgPSBnZXRUcmFuc2Zvcm1YWShlbGVtKTtcbiAgdmFyIHJlc3VsdFhZID0ge1xuICAgIHg6IG9yaWdpbmFsWFkueCxcbiAgICB5OiBvcmlnaW5hbFhZLnlcbiAgfTtcblxuICBpZiAoJ2xlZnQnIGluIG9mZnNldCkge1xuICAgIHJlc3VsdFhZLnggPSBvcmlnaW5hbFhZLnggKyBvZmZzZXQubGVmdCAtIG9yaWdpbmFsT2Zmc2V0LmxlZnQ7XG4gIH1cblxuICBpZiAoJ3RvcCcgaW4gb2Zmc2V0KSB7XG4gICAgcmVzdWx0WFkueSA9IG9yaWdpbmFsWFkueSArIG9mZnNldC50b3AgLSBvcmlnaW5hbE9mZnNldC50b3A7XG4gIH1cblxuICBzZXRUcmFuc2Zvcm1YWShlbGVtLCByZXN1bHRYWSk7XG59XG5cbmZ1bmN0aW9uIHNldE9mZnNldChlbGVtLCBvZmZzZXQsIG9wdGlvbikge1xuICBpZiAob3B0aW9uLmlnbm9yZVNoYWtlKSB7XG4gICAgdmFyIG9yaU9mZnNldCA9IGdldE9mZnNldChlbGVtKTtcbiAgICB2YXIgb0xlZnQgPSBvcmlPZmZzZXQubGVmdC50b0ZpeGVkKDApO1xuICAgIHZhciBvVG9wID0gb3JpT2Zmc2V0LnRvcC50b0ZpeGVkKDApO1xuICAgIHZhciB0TGVmdCA9IG9mZnNldC5sZWZ0LnRvRml4ZWQoMCk7XG4gICAgdmFyIHRUb3AgPSBvZmZzZXQudG9wLnRvRml4ZWQoMCk7XG5cbiAgICBpZiAob0xlZnQgPT09IHRMZWZ0ICYmIG9Ub3AgPT09IHRUb3ApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpZiAob3B0aW9uLnVzZUNzc1JpZ2h0IHx8IG9wdGlvbi51c2VDc3NCb3R0b20pIHtcbiAgICBzZXRMZWZ0VG9wKGVsZW0sIG9mZnNldCwgb3B0aW9uKTtcbiAgfSBlbHNlIGlmIChvcHRpb24udXNlQ3NzVHJhbnNmb3JtICYmIGdldFRyYW5zZm9ybU5hbWUoKSBpbiBkb2N1bWVudC5ib2R5LnN0eWxlKSB7XG4gICAgc2V0VHJhbnNmb3JtJDEoZWxlbSwgb2Zmc2V0KTtcbiAgfSBlbHNlIHtcbiAgICBzZXRMZWZ0VG9wKGVsZW0sIG9mZnNldCwgb3B0aW9uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlYWNoKGFyciwgZm4pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBmbihhcnJbaV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzQm9yZGVyQm94Rm4oZWxlbSkge1xuICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSwgJ2JveFNpemluZycpID09PSAnYm9yZGVyLWJveCc7XG59XG5cbnZhciBCT1hfTU9ERUxTID0gWydtYXJnaW4nLCAnYm9yZGVyJywgJ3BhZGRpbmcnXTtcbnZhciBDT05URU5UX0lOREVYID0gLTE7XG52YXIgUEFERElOR19JTkRFWCA9IDI7XG52YXIgQk9SREVSX0lOREVYID0gMTtcbnZhciBNQVJHSU5fSU5ERVggPSAwO1xuXG5mdW5jdGlvbiBzd2FwKGVsZW0sIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBvbGQgPSB7fTtcbiAgdmFyIHN0eWxlID0gZWxlbS5zdHlsZTtcbiAgdmFyIG5hbWU7IC8vIFJlbWVtYmVyIHRoZSBvbGQgdmFsdWVzLCBhbmQgaW5zZXJ0IHRoZSBuZXcgb25lc1xuXG4gIGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIG9sZFtuYW1lXSA9IHN0eWxlW25hbWVdO1xuICAgICAgc3R5bGVbbmFtZV0gPSBvcHRpb25zW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIGNhbGxiYWNrLmNhbGwoZWxlbSk7IC8vIFJldmVydCB0aGUgb2xkIHZhbHVlc1xuXG4gIGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHN0eWxlW25hbWVdID0gb2xkW25hbWVdO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQQk1XaWR0aChlbGVtLCBwcm9wcywgd2hpY2gpIHtcbiAgdmFyIHZhbHVlID0gMDtcbiAgdmFyIHByb3A7XG4gIHZhciBqO1xuICB2YXIgaTtcblxuICBmb3IgKGogPSAwOyBqIDwgcHJvcHMubGVuZ3RoOyBqKyspIHtcbiAgICBwcm9wID0gcHJvcHNbal07XG5cbiAgICBpZiAocHJvcCkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IHdoaWNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjc3NQcm9wID0gdm9pZCAwO1xuXG4gICAgICAgIGlmIChwcm9wID09PSAnYm9yZGVyJykge1xuICAgICAgICAgIGNzc1Byb3AgPSBcIlwiLmNvbmNhdChwcm9wKS5jb25jYXQod2hpY2hbaV0sIFwiV2lkdGhcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3NzUHJvcCA9IHByb3AgKyB3aGljaFtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlICs9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSwgY3NzUHJvcCkpIHx8IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG52YXIgZG9tVXRpbHMgPSB7XG4gIGdldFBhcmVudDogZnVuY3Rpb24gZ2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgICB2YXIgcGFyZW50ID0gZWxlbWVudDtcblxuICAgIGRvIHtcbiAgICAgIGlmIChwYXJlbnQubm9kZVR5cGUgPT09IDExICYmIHBhcmVudC5ob3N0KSB7XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5ob3N0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfSB3aGlsZSAocGFyZW50ICYmIHBhcmVudC5ub2RlVHlwZSAhPT0gMSAmJiBwYXJlbnQubm9kZVR5cGUgIT09IDkpO1xuXG4gICAgcmV0dXJuIHBhcmVudDtcbiAgfVxufTtcbmVhY2goWydXaWR0aCcsICdIZWlnaHQnXSwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgZG9tVXRpbHNbXCJkb2NcIi5jb25jYXQobmFtZSldID0gZnVuY3Rpb24gKHJlZldpbikge1xuICAgIHZhciBkID0gcmVmV2luLmRvY3VtZW50O1xuICAgIHJldHVybiBNYXRoLm1heCggLy8gZmlyZWZveCBjaHJvbWUgZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDwgYm9keS5zY3JvbGxIZWlnaHRcbiAgICAvLyBpZSBzdGFuZGFyZCBtb2RlIDogZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodD4gYm9keS5zY3JvbGxIZWlnaHRcbiAgICBkLmRvY3VtZW50RWxlbWVudFtcInNjcm9sbFwiLmNvbmNhdChuYW1lKV0sIC8vIHF1aXJrcyA6IGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQg5pyA5aSn562J5LqO5Y+v6KeG56qX5Y+j5aSa5LiA54K577yfXG4gICAgZC5ib2R5W1wic2Nyb2xsXCIuY29uY2F0KG5hbWUpXSwgZG9tVXRpbHNbXCJ2aWV3cG9ydFwiLmNvbmNhdChuYW1lKV0oZCkpO1xuICB9O1xuXG4gIGRvbVV0aWxzW1widmlld3BvcnRcIi5jb25jYXQobmFtZSldID0gZnVuY3Rpb24gKHdpbikge1xuICAgIC8vIHBjIGJyb3dzZXIgaW5jbHVkZXMgc2Nyb2xsYmFyIGluIHdpbmRvdy5pbm5lcldpZHRoXG4gICAgdmFyIHByb3AgPSBcImNsaWVudFwiLmNvbmNhdChuYW1lKTtcbiAgICB2YXIgZG9jID0gd2luLmRvY3VtZW50O1xuICAgIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gICAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgdmFyIGRvY3VtZW50RWxlbWVudFByb3AgPSBkb2N1bWVudEVsZW1lbnRbcHJvcF07IC8vIOagh+WHhuaooeW8j+WPliBkb2N1bWVudEVsZW1lbnRcbiAgICAvLyBiYWNrY29tcGF0IOWPliBib2R5XG5cbiAgICByZXR1cm4gZG9jLmNvbXBhdE1vZGUgPT09ICdDU1MxQ29tcGF0JyAmJiBkb2N1bWVudEVsZW1lbnRQcm9wIHx8IGJvZHkgJiYgYm9keVtwcm9wXSB8fCBkb2N1bWVudEVsZW1lbnRQcm9wO1xuICB9O1xufSk7XG4vKlxuIOW+l+WIsOWFg+e0oOeahOWkp+Wwj+S/oeaBr1xuIEBwYXJhbSBlbGVtXG4gQHBhcmFtIG5hbWVcbiBAcGFyYW0ge1N0cmluZ30gW2V4dHJhXSAgJ3BhZGRpbmcnIDogKGNzcyB3aWR0aCkgKyBwYWRkaW5nXG4gJ2JvcmRlcicgOiAoY3NzIHdpZHRoKSArIHBhZGRpbmcgKyBib3JkZXJcbiAnbWFyZ2luJyA6IChjc3Mgd2lkdGgpICsgcGFkZGluZyArIGJvcmRlciArIG1hcmdpblxuICovXG5cbmZ1bmN0aW9uIGdldFdIKGVsZW0sIG5hbWUsIGV4KSB7XG4gIHZhciBleHRyYSA9IGV4O1xuXG4gIGlmIChpc1dpbmRvdyhlbGVtKSkge1xuICAgIHJldHVybiBuYW1lID09PSAnd2lkdGgnID8gZG9tVXRpbHMudmlld3BvcnRXaWR0aChlbGVtKSA6IGRvbVV0aWxzLnZpZXdwb3J0SGVpZ2h0KGVsZW0pO1xuICB9IGVsc2UgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDkpIHtcbiAgICByZXR1cm4gbmFtZSA9PT0gJ3dpZHRoJyA/IGRvbVV0aWxzLmRvY1dpZHRoKGVsZW0pIDogZG9tVXRpbHMuZG9jSGVpZ2h0KGVsZW0pO1xuICB9XG5cbiAgdmFyIHdoaWNoID0gbmFtZSA9PT0gJ3dpZHRoJyA/IFsnTGVmdCcsICdSaWdodCddIDogWydUb3AnLCAnQm90dG9tJ107XG4gIHZhciBib3JkZXJCb3hWYWx1ZSA9IG5hbWUgPT09ICd3aWR0aCcgPyBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIDogZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSk7XG4gIHZhciBpc0JvcmRlckJveCA9IGlzQm9yZGVyQm94Rm4oZWxlbSk7XG4gIHZhciBjc3NCb3hWYWx1ZSA9IDA7XG5cbiAgaWYgKGJvcmRlckJveFZhbHVlID09PSBudWxsIHx8IGJvcmRlckJveFZhbHVlID09PSB1bmRlZmluZWQgfHwgYm9yZGVyQm94VmFsdWUgPD0gMCkge1xuICAgIGJvcmRlckJveFZhbHVlID0gdW5kZWZpbmVkOyAvLyBGYWxsIGJhY2sgdG8gY29tcHV0ZWQgdGhlbiB1biBjb21wdXRlZCBjc3MgaWYgbmVjZXNzYXJ5XG5cbiAgICBjc3NCb3hWYWx1ZSA9IGdldENvbXB1dGVkU3R5bGVYKGVsZW0sIG5hbWUpO1xuXG4gICAgaWYgKGNzc0JveFZhbHVlID09PSBudWxsIHx8IGNzc0JveFZhbHVlID09PSB1bmRlZmluZWQgfHwgTnVtYmVyKGNzc0JveFZhbHVlKSA8IDApIHtcbiAgICAgIGNzc0JveFZhbHVlID0gZWxlbS5zdHlsZVtuYW1lXSB8fCAwO1xuICAgIH0gLy8gTm9ybWFsaXplICcnLCBhdXRvLCBhbmQgcHJlcGFyZSBmb3IgZXh0cmFcblxuXG4gICAgY3NzQm94VmFsdWUgPSBwYXJzZUZsb2F0KGNzc0JveFZhbHVlKSB8fCAwO1xuICB9XG5cbiAgaWYgKGV4dHJhID09PSB1bmRlZmluZWQpIHtcbiAgICBleHRyYSA9IGlzQm9yZGVyQm94ID8gQk9SREVSX0lOREVYIDogQ09OVEVOVF9JTkRFWDtcbiAgfVxuXG4gIHZhciBib3JkZXJCb3hWYWx1ZU9ySXNCb3JkZXJCb3ggPSBib3JkZXJCb3hWYWx1ZSAhPT0gdW5kZWZpbmVkIHx8IGlzQm9yZGVyQm94O1xuICB2YXIgdmFsID0gYm9yZGVyQm94VmFsdWUgfHwgY3NzQm94VmFsdWU7XG5cbiAgaWYgKGV4dHJhID09PSBDT05URU5UX0lOREVYKSB7XG4gICAgaWYgKGJvcmRlckJveFZhbHVlT3JJc0JvcmRlckJveCkge1xuICAgICAgcmV0dXJuIHZhbCAtIGdldFBCTVdpZHRoKGVsZW0sIFsnYm9yZGVyJywgJ3BhZGRpbmcnXSwgd2hpY2gpO1xuICAgIH1cblxuICAgIHJldHVybiBjc3NCb3hWYWx1ZTtcbiAgfSBlbHNlIGlmIChib3JkZXJCb3hWYWx1ZU9ySXNCb3JkZXJCb3gpIHtcbiAgICBpZiAoZXh0cmEgPT09IEJPUkRFUl9JTkRFWCkge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsICsgKGV4dHJhID09PSBQQURESU5HX0lOREVYID8gLWdldFBCTVdpZHRoKGVsZW0sIFsnYm9yZGVyJ10sIHdoaWNoKSA6IGdldFBCTVdpZHRoKGVsZW0sIFsnbWFyZ2luJ10sIHdoaWNoKSk7XG4gIH1cblxuICByZXR1cm4gY3NzQm94VmFsdWUgKyBnZXRQQk1XaWR0aChlbGVtLCBCT1hfTU9ERUxTLnNsaWNlKGV4dHJhKSwgd2hpY2gpO1xufVxuXG52YXIgY3NzU2hvdyA9IHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICBkaXNwbGF5OiAnYmxvY2snXG59OyAvLyBmaXggIzExOSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9raXNzeXRlYW0va2lzc3kvaXNzdWVzLzExOVxuXG5mdW5jdGlvbiBnZXRXSElnbm9yZURpc3BsYXkoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjsgX2tleTIrKykge1xuICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHZhciB2YWw7XG4gIHZhciBlbGVtID0gYXJnc1swXTsgLy8gaW4gY2FzZSBlbGVtIGlzIHdpbmRvd1xuICAvLyBlbGVtLm9mZnNldFdpZHRoID09PSB1bmRlZmluZWRcblxuICBpZiAoZWxlbS5vZmZzZXRXaWR0aCAhPT0gMCkge1xuICAgIHZhbCA9IGdldFdILmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgc3dhcChlbGVtLCBjc3NTaG93LCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YWwgPSBnZXRXSC5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxuZWFjaChbJ3dpZHRoJywgJ2hlaWdodCddLCBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgZmlyc3QgPSBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKTtcblxuICBkb21VdGlsc1tcIm91dGVyXCIuY29uY2F0KGZpcnN0KV0gPSBmdW5jdGlvbiAoZWwsIGluY2x1ZGVNYXJnaW4pIHtcbiAgICByZXR1cm4gZWwgJiYgZ2V0V0hJZ25vcmVEaXNwbGF5KGVsLCBuYW1lLCBpbmNsdWRlTWFyZ2luID8gTUFSR0lOX0lOREVYIDogQk9SREVSX0lOREVYKTtcbiAgfTtcblxuICB2YXIgd2hpY2ggPSBuYW1lID09PSAnd2lkdGgnID8gWydMZWZ0JywgJ1JpZ2h0J10gOiBbJ1RvcCcsICdCb3R0b20nXTtcblxuICBkb21VdGlsc1tuYW1lXSA9IGZ1bmN0aW9uIChlbGVtLCB2KSB7XG4gICAgdmFyIHZhbCA9IHY7XG5cbiAgICBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgIHZhciBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSk7XG4gICAgICAgIHZhciBpc0JvcmRlckJveCA9IGlzQm9yZGVyQm94Rm4oZWxlbSk7XG5cbiAgICAgICAgaWYgKGlzQm9yZGVyQm94KSB7XG4gICAgICAgICAgdmFsICs9IGdldFBCTVdpZHRoKGVsZW0sIFsncGFkZGluZycsICdib3JkZXInXSwgd2hpY2gpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNzcyhlbGVtLCBuYW1lLCB2YWwpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtICYmIGdldFdISWdub3JlRGlzcGxheShlbGVtLCBuYW1lLCBDT05URU5UX0lOREVYKTtcbiAgfTtcbn0pO1xuXG5mdW5jdGlvbiBtaXgodG8sIGZyb20pIHtcbiAgZm9yICh2YXIgaSBpbiBmcm9tKSB7XG4gICAgaWYgKGZyb20uaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIHRvW2ldID0gZnJvbVtpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG87XG59XG5cbnZhciB1dGlscyA9IHtcbiAgZ2V0V2luZG93OiBmdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICAgIGlmIChub2RlICYmIG5vZGUuZG9jdW1lbnQgJiYgbm9kZS5zZXRUaW1lb3V0KSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICB2YXIgZG9jID0gbm9kZS5vd25lckRvY3VtZW50IHx8IG5vZGU7XG4gICAgcmV0dXJuIGRvYy5kZWZhdWx0VmlldyB8fCBkb2MucGFyZW50V2luZG93O1xuICB9LFxuICBnZXREb2N1bWVudDogZ2V0RG9jdW1lbnQsXG4gIG9mZnNldDogZnVuY3Rpb24gb2Zmc2V0KGVsLCB2YWx1ZSwgb3B0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNldE9mZnNldChlbCwgdmFsdWUsIG9wdGlvbiB8fCB7fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXRPZmZzZXQoZWwpO1xuICAgIH1cbiAgfSxcbiAgaXNXaW5kb3c6IGlzV2luZG93LFxuICBlYWNoOiBlYWNoLFxuICBjc3M6IGNzcyxcbiAgY2xvbmU6IGZ1bmN0aW9uIGNsb25lKG9iaikge1xuICAgIHZhciBpO1xuICAgIHZhciByZXQgPSB7fTtcblxuICAgIGZvciAoaSBpbiBvYmopIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgcmV0W2ldID0gb2JqW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBvdmVyZmxvdyA9IG9iai5vdmVyZmxvdztcblxuICAgIGlmIChvdmVyZmxvdykge1xuICAgICAgZm9yIChpIGluIG9iaikge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgcmV0Lm92ZXJmbG93W2ldID0gb2JqLm92ZXJmbG93W2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfSxcbiAgbWl4OiBtaXgsXG4gIGdldFdpbmRvd1Njcm9sbExlZnQ6IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbExlZnQodykge1xuICAgIHJldHVybiBnZXRTY3JvbGxMZWZ0KHcpO1xuICB9LFxuICBnZXRXaW5kb3dTY3JvbGxUb3A6IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbFRvcCh3KSB7XG4gICAgcmV0dXJuIGdldFNjcm9sbFRvcCh3KTtcbiAgfSxcbiAgbWVyZ2U6IGZ1bmN0aW9uIG1lcmdlKCkge1xuICAgIHZhciByZXQgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB1dGlscy5taXgocmV0LCBpIDwgMCB8fCBhcmd1bWVudHMubGVuZ3RoIDw9IGkgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH0sXG4gIHZpZXdwb3J0V2lkdGg6IDAsXG4gIHZpZXdwb3J0SGVpZ2h0OiAwXG59O1xubWl4KHV0aWxzLCBkb21VdGlscyk7XG5cbi8qKlxuICog5b6X5Yiw5Lya5a+86Ie05YWD57Sg5pi+56S65LiN5YWo55qE56WW5YWI5YWD57SgXG4gKi9cblxudmFyIGdldFBhcmVudCA9IHV0aWxzLmdldFBhcmVudDtcblxuZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKHV0aWxzLmlzV2luZG93KGVsZW1lbnQpIHx8IGVsZW1lbnQubm9kZVR5cGUgPT09IDkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSAvLyBpZSDov5nkuKrkuZ/kuI3mmK/lrozlhajlj6/ooYxcblxuICAvKlxuICAgPGRpdiBzdHlsZT1cIndpZHRoOiA1MHB4O2hlaWdodDogMTAwcHg7b3ZlcmZsb3c6IGhpZGRlblwiPlxuICAgPGRpdiBzdHlsZT1cIndpZHRoOiA1MHB4O2hlaWdodDogMTAwcHg7cG9zaXRpb246IHJlbGF0aXZlO1wiIGlkPVwiZDZcIj5cbiAgIOWFg+e0oCA2IOmrmCAxMDBweCDlrr0gNTBweDxici8+XG4gICA8L2Rpdj5cbiAgIDwvZGl2PlxuICAgKi9cbiAgLy8gZWxlbWVudC5vZmZzZXRQYXJlbnQgZG9lcyB0aGUgcmlnaHQgdGhpbmcgaW4gaWU3IGFuZCBiZWxvdy4gUmV0dXJuIHBhcmVudCB3aXRoIGxheW91dCFcbiAgLy8gIEluIG90aGVyIGJyb3dzZXJzIGl0IG9ubHkgaW5jbHVkZXMgZWxlbWVudHMgd2l0aCBwb3NpdGlvbiBhYnNvbHV0ZSwgcmVsYXRpdmUgb3JcbiAgLy8gZml4ZWQsIG5vdCBlbGVtZW50cyB3aXRoIG92ZXJmbG93IHNldCB0byBhdXRvIG9yIHNjcm9sbC5cbiAgLy8gICAgICAgIGlmIChVQS5pZSAmJiBpZU1vZGUgPCA4KSB7XG4gIC8vICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xuICAvLyAgICAgICAgfVxuICAvLyDnu5/kuIDnmoQgb2Zmc2V0UGFyZW50IOaWueazlVxuXG5cbiAgdmFyIGRvYyA9IHV0aWxzLmdldERvY3VtZW50KGVsZW1lbnQpO1xuICB2YXIgYm9keSA9IGRvYy5ib2R5O1xuICB2YXIgcGFyZW50O1xuICB2YXIgcG9zaXRpb25TdHlsZSA9IHV0aWxzLmNzcyhlbGVtZW50LCAncG9zaXRpb24nKTtcbiAgdmFyIHNraXBTdGF0aWMgPSBwb3NpdGlvblN0eWxlID09PSAnZml4ZWQnIHx8IHBvc2l0aW9uU3R5bGUgPT09ICdhYnNvbHV0ZSc7XG5cbiAgaWYgKCFza2lwU3RhdGljKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2h0bWwnID8gbnVsbCA6IGdldFBhcmVudChlbGVtZW50KTtcbiAgfVxuXG4gIGZvciAocGFyZW50ID0gZ2V0UGFyZW50KGVsZW1lbnQpOyBwYXJlbnQgJiYgcGFyZW50ICE9PSBib2R5ICYmIHBhcmVudC5ub2RlVHlwZSAhPT0gOTsgcGFyZW50ID0gZ2V0UGFyZW50KHBhcmVudCkpIHtcbiAgICBwb3NpdGlvblN0eWxlID0gdXRpbHMuY3NzKHBhcmVudCwgJ3Bvc2l0aW9uJyk7XG5cbiAgICBpZiAocG9zaXRpb25TdHlsZSAhPT0gJ3N0YXRpYycpIHtcbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBnZXRQYXJlbnQkMSA9IHV0aWxzLmdldFBhcmVudDtcbmZ1bmN0aW9uIGlzQW5jZXN0b3JGaXhlZChlbGVtZW50KSB7XG4gIGlmICh1dGlscy5pc1dpbmRvdyhlbGVtZW50KSB8fCBlbGVtZW50Lm5vZGVUeXBlID09PSA5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGRvYyA9IHV0aWxzLmdldERvY3VtZW50KGVsZW1lbnQpO1xuICB2YXIgYm9keSA9IGRvYy5ib2R5O1xuICB2YXIgcGFyZW50ID0gbnVsbDtcblxuICBmb3IgKHBhcmVudCA9IGdldFBhcmVudCQxKGVsZW1lbnQpOyBwYXJlbnQgJiYgcGFyZW50ICE9PSBib2R5OyBwYXJlbnQgPSBnZXRQYXJlbnQkMShwYXJlbnQpKSB7XG4gICAgdmFyIHBvc2l0aW9uU3R5bGUgPSB1dGlscy5jc3MocGFyZW50LCAncG9zaXRpb24nKTtcblxuICAgIGlmIChwb3NpdGlvblN0eWxlID09PSAnZml4ZWQnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICog6I635b6X5YWD57Sg55qE5pi+56S66YOo5YiG55qE5Yy65Z+fXG4gKi9cblxuZnVuY3Rpb24gZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50KGVsZW1lbnQsIGFsd2F5c0J5Vmlld3BvcnQpIHtcbiAgdmFyIHZpc2libGVSZWN0ID0ge1xuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IEluZmluaXR5LFxuICAgIHRvcDogMCxcbiAgICBib3R0b206IEluZmluaXR5XG4gIH07XG4gIHZhciBlbCA9IGdldE9mZnNldFBhcmVudChlbGVtZW50KTtcbiAgdmFyIGRvYyA9IHV0aWxzLmdldERvY3VtZW50KGVsZW1lbnQpO1xuICB2YXIgd2luID0gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XG4gIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gIHZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2MuZG9jdW1lbnRFbGVtZW50OyAvLyBEZXRlcm1pbmUgdGhlIHNpemUgb2YgdGhlIHZpc2libGUgcmVjdCBieSBjbGltYmluZyB0aGUgZG9tIGFjY291bnRpbmcgZm9yXG4gIC8vIGFsbCBzY3JvbGxhYmxlIGNvbnRhaW5lcnMuXG5cbiAgd2hpbGUgKGVsKSB7XG4gICAgLy8gY2xpZW50V2lkdGggaXMgemVybyBmb3IgaW5saW5lIGJsb2NrIGVsZW1lbnRzIGluIGllLlxuICAgIGlmICgobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdNU0lFJykgPT09IC0xIHx8IGVsLmNsaWVudFdpZHRoICE9PSAwKSAmJiAvLyBib2R5IG1heSBoYXZlIG92ZXJmbG93IHNldCBvbiBpdCwgeWV0IHdlIHN0aWxsIGdldCB0aGUgZW50aXJlXG4gICAgLy8gdmlld3BvcnQuIEluIHNvbWUgYnJvd3NlcnMsIGVsLm9mZnNldFBhcmVudCBtYXkgYmVcbiAgICAvLyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHNvIGNoZWNrIGZvciB0aGF0IHRvby5cbiAgICBlbCAhPT0gYm9keSAmJiBlbCAhPT0gZG9jdW1lbnRFbGVtZW50ICYmIHV0aWxzLmNzcyhlbCwgJ292ZXJmbG93JykgIT09ICd2aXNpYmxlJykge1xuICAgICAgdmFyIHBvcyA9IHV0aWxzLm9mZnNldChlbCk7IC8vIGFkZCBib3JkZXJcblxuICAgICAgcG9zLmxlZnQgKz0gZWwuY2xpZW50TGVmdDtcbiAgICAgIHBvcy50b3AgKz0gZWwuY2xpZW50VG9wO1xuICAgICAgdmlzaWJsZVJlY3QudG9wID0gTWF0aC5tYXgodmlzaWJsZVJlY3QudG9wLCBwb3MudG9wKTtcbiAgICAgIHZpc2libGVSZWN0LnJpZ2h0ID0gTWF0aC5taW4odmlzaWJsZVJlY3QucmlnaHQsIC8vIGNvbnNpZGVyIGFyZWEgd2l0aG91dCBzY3JvbGxCYXJcbiAgICAgIHBvcy5sZWZ0ICsgZWwuY2xpZW50V2lkdGgpO1xuICAgICAgdmlzaWJsZVJlY3QuYm90dG9tID0gTWF0aC5taW4odmlzaWJsZVJlY3QuYm90dG9tLCBwb3MudG9wICsgZWwuY2xpZW50SGVpZ2h0KTtcbiAgICAgIHZpc2libGVSZWN0LmxlZnQgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC5sZWZ0LCBwb3MubGVmdCk7XG4gICAgfSBlbHNlIGlmIChlbCA9PT0gYm9keSB8fCBlbCA9PT0gZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBlbCA9IGdldE9mZnNldFBhcmVudChlbCk7XG4gIH0gLy8gU2V0IGVsZW1lbnQgcG9zaXRpb24gdG8gZml4ZWRcbiAgLy8gbWFrZSBzdXJlIGFic29sdXRlIGVsZW1lbnQgaXRzZWxmIGRvbid0IGFmZmVjdCBpdCdzIHZpc2libGUgYXJlYVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy83NjAxXG5cblxuICB2YXIgb3JpZ2luYWxQb3NpdGlvbiA9IG51bGw7XG5cbiAgaWYgKCF1dGlscy5pc1dpbmRvdyhlbGVtZW50KSAmJiBlbGVtZW50Lm5vZGVUeXBlICE9PSA5KSB7XG4gICAgb3JpZ2luYWxQb3NpdGlvbiA9IGVsZW1lbnQuc3R5bGUucG9zaXRpb247XG4gICAgdmFyIHBvc2l0aW9uID0gdXRpbHMuY3NzKGVsZW1lbnQsICdwb3NpdGlvbicpO1xuXG4gICAgaWYgKHBvc2l0aW9uID09PSAnYWJzb2x1dGUnKSB7XG4gICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICB9XG4gIH1cblxuICB2YXIgc2Nyb2xsWCA9IHV0aWxzLmdldFdpbmRvd1Njcm9sbExlZnQod2luKTtcbiAgdmFyIHNjcm9sbFkgPSB1dGlscy5nZXRXaW5kb3dTY3JvbGxUb3Aod2luKTtcbiAgdmFyIHZpZXdwb3J0V2lkdGggPSB1dGlscy52aWV3cG9ydFdpZHRoKHdpbik7XG4gIHZhciB2aWV3cG9ydEhlaWdodCA9IHV0aWxzLnZpZXdwb3J0SGVpZ2h0KHdpbik7XG4gIHZhciBkb2N1bWVudFdpZHRoID0gZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoO1xuICB2YXIgZG9jdW1lbnRIZWlnaHQgPSBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0OyAvLyBzY3JvbGxYWFggb24gaHRtbCBpcyBzeW5jIHdpdGggYm9keSB3aGljaCBtZWFucyBvdmVyZmxvdzogaGlkZGVuIG9uIGJvZHkgZ2V0cyB3cm9uZyBzY3JvbGxYWFguXG4gIC8vIFdlIHNob3VsZCBjdXQgdGhpcyBvdXJzZWxmLlxuXG4gIHZhciBib2R5U3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShib2R5KTtcblxuICBpZiAoYm9keVN0eWxlLm92ZXJmbG93WCA9PT0gJ2hpZGRlbicpIHtcbiAgICBkb2N1bWVudFdpZHRoID0gd2luLmlubmVyV2lkdGg7XG4gIH1cblxuICBpZiAoYm9keVN0eWxlLm92ZXJmbG93WSA9PT0gJ2hpZGRlbicpIHtcbiAgICBkb2N1bWVudEhlaWdodCA9IHdpbi5pbm5lckhlaWdodDtcbiAgfSAvLyBSZXNldCBlbGVtZW50IHBvc2l0aW9uIGFmdGVyIGNhbGN1bGF0ZSB0aGUgdmlzaWJsZSBhcmVhXG5cblxuICBpZiAoZWxlbWVudC5zdHlsZSkge1xuICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBvcmlnaW5hbFBvc2l0aW9uO1xuICB9XG5cbiAgaWYgKGFsd2F5c0J5Vmlld3BvcnQgfHwgaXNBbmNlc3RvckZpeGVkKGVsZW1lbnQpKSB7XG4gICAgLy8gQ2xpcCBieSB2aWV3cG9ydCdzIHNpemUuXG4gICAgdmlzaWJsZVJlY3QubGVmdCA9IE1hdGgubWF4KHZpc2libGVSZWN0LmxlZnQsIHNjcm9sbFgpO1xuICAgIHZpc2libGVSZWN0LnRvcCA9IE1hdGgubWF4KHZpc2libGVSZWN0LnRvcCwgc2Nyb2xsWSk7XG4gICAgdmlzaWJsZVJlY3QucmlnaHQgPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5yaWdodCwgc2Nyb2xsWCArIHZpZXdwb3J0V2lkdGgpO1xuICAgIHZpc2libGVSZWN0LmJvdHRvbSA9IE1hdGgubWluKHZpc2libGVSZWN0LmJvdHRvbSwgc2Nyb2xsWSArIHZpZXdwb3J0SGVpZ2h0KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBDbGlwIGJ5IGRvY3VtZW50J3Mgc2l6ZS5cbiAgICB2YXIgbWF4VmlzaWJsZVdpZHRoID0gTWF0aC5tYXgoZG9jdW1lbnRXaWR0aCwgc2Nyb2xsWCArIHZpZXdwb3J0V2lkdGgpO1xuICAgIHZpc2libGVSZWN0LnJpZ2h0ID0gTWF0aC5taW4odmlzaWJsZVJlY3QucmlnaHQsIG1heFZpc2libGVXaWR0aCk7XG4gICAgdmFyIG1heFZpc2libGVIZWlnaHQgPSBNYXRoLm1heChkb2N1bWVudEhlaWdodCwgc2Nyb2xsWSArIHZpZXdwb3J0SGVpZ2h0KTtcbiAgICB2aXNpYmxlUmVjdC5ib3R0b20gPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5ib3R0b20sIG1heFZpc2libGVIZWlnaHQpO1xuICB9XG5cbiAgcmV0dXJuIHZpc2libGVSZWN0LnRvcCA+PSAwICYmIHZpc2libGVSZWN0LmxlZnQgPj0gMCAmJiB2aXNpYmxlUmVjdC5ib3R0b20gPiB2aXNpYmxlUmVjdC50b3AgJiYgdmlzaWJsZVJlY3QucmlnaHQgPiB2aXNpYmxlUmVjdC5sZWZ0ID8gdmlzaWJsZVJlY3QgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBhZGp1c3RGb3JWaWV3cG9ydChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0LCBvdmVyZmxvdykge1xuICB2YXIgcG9zID0gdXRpbHMuY2xvbmUoZWxGdXR1cmVQb3MpO1xuICB2YXIgc2l6ZSA9IHtcbiAgICB3aWR0aDogZWxSZWdpb24ud2lkdGgsXG4gICAgaGVpZ2h0OiBlbFJlZ2lvbi5oZWlnaHRcbiAgfTtcblxuICBpZiAob3ZlcmZsb3cuYWRqdXN0WCAmJiBwb3MubGVmdCA8IHZpc2libGVSZWN0LmxlZnQpIHtcbiAgICBwb3MubGVmdCA9IHZpc2libGVSZWN0LmxlZnQ7XG4gIH0gLy8gTGVmdCBlZGdlIGluc2lkZSBhbmQgcmlnaHQgZWRnZSBvdXRzaWRlIHZpZXdwb3J0LCB0cnkgdG8gcmVzaXplIGl0LlxuXG5cbiAgaWYgKG92ZXJmbG93LnJlc2l6ZVdpZHRoICYmIHBvcy5sZWZ0ID49IHZpc2libGVSZWN0LmxlZnQgJiYgcG9zLmxlZnQgKyBzaXplLndpZHRoID4gdmlzaWJsZVJlY3QucmlnaHQpIHtcbiAgICBzaXplLndpZHRoIC09IHBvcy5sZWZ0ICsgc2l6ZS53aWR0aCAtIHZpc2libGVSZWN0LnJpZ2h0O1xuICB9IC8vIFJpZ2h0IGVkZ2Ugb3V0c2lkZSB2aWV3cG9ydCwgdHJ5IHRvIG1vdmUgaXQuXG5cblxuICBpZiAob3ZlcmZsb3cuYWRqdXN0WCAmJiBwb3MubGVmdCArIHNpemUud2lkdGggPiB2aXNpYmxlUmVjdC5yaWdodCkge1xuICAgIC8vIOS/neivgeW3pui+ueeVjOWSjOWPr+inhuWMuuWfn+W3pui+ueeVjOWvuem9kFxuICAgIHBvcy5sZWZ0ID0gTWF0aC5tYXgodmlzaWJsZVJlY3QucmlnaHQgLSBzaXplLndpZHRoLCB2aXNpYmxlUmVjdC5sZWZ0KTtcbiAgfSAvLyBUb3AgZWRnZSBvdXRzaWRlIHZpZXdwb3J0LCB0cnkgdG8gbW92ZSBpdC5cblxuXG4gIGlmIChvdmVyZmxvdy5hZGp1c3RZICYmIHBvcy50b3AgPCB2aXNpYmxlUmVjdC50b3ApIHtcbiAgICBwb3MudG9wID0gdmlzaWJsZVJlY3QudG9wO1xuICB9IC8vIFRvcCBlZGdlIGluc2lkZSBhbmQgYm90dG9tIGVkZ2Ugb3V0c2lkZSB2aWV3cG9ydCwgdHJ5IHRvIHJlc2l6ZSBpdC5cblxuXG4gIGlmIChvdmVyZmxvdy5yZXNpemVIZWlnaHQgJiYgcG9zLnRvcCA+PSB2aXNpYmxlUmVjdC50b3AgJiYgcG9zLnRvcCArIHNpemUuaGVpZ2h0ID4gdmlzaWJsZVJlY3QuYm90dG9tKSB7XG4gICAgc2l6ZS5oZWlnaHQgLT0gcG9zLnRvcCArIHNpemUuaGVpZ2h0IC0gdmlzaWJsZVJlY3QuYm90dG9tO1xuICB9IC8vIEJvdHRvbSBlZGdlIG91dHNpZGUgdmlld3BvcnQsIHRyeSB0byBtb3ZlIGl0LlxuXG5cbiAgaWYgKG92ZXJmbG93LmFkanVzdFkgJiYgcG9zLnRvcCArIHNpemUuaGVpZ2h0ID4gdmlzaWJsZVJlY3QuYm90dG9tKSB7XG4gICAgLy8g5L+d6K+B5LiK6L6555WM5ZKM5Y+v6KeG5Yy65Z+f5LiK6L6555WM5a+56b2QXG4gICAgcG9zLnRvcCA9IE1hdGgubWF4KHZpc2libGVSZWN0LmJvdHRvbSAtIHNpemUuaGVpZ2h0LCB2aXNpYmxlUmVjdC50b3ApO1xuICB9XG5cbiAgcmV0dXJuIHV0aWxzLm1peChwb3MsIHNpemUpO1xufVxuXG5mdW5jdGlvbiBnZXRSZWdpb24obm9kZSkge1xuICB2YXIgb2Zmc2V0O1xuICB2YXIgdztcbiAgdmFyIGg7XG5cbiAgaWYgKCF1dGlscy5pc1dpbmRvdyhub2RlKSAmJiBub2RlLm5vZGVUeXBlICE9PSA5KSB7XG4gICAgb2Zmc2V0ID0gdXRpbHMub2Zmc2V0KG5vZGUpO1xuICAgIHcgPSB1dGlscy5vdXRlcldpZHRoKG5vZGUpO1xuICAgIGggPSB1dGlscy5vdXRlckhlaWdodChub2RlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgd2luID0gdXRpbHMuZ2V0V2luZG93KG5vZGUpO1xuICAgIG9mZnNldCA9IHtcbiAgICAgIGxlZnQ6IHV0aWxzLmdldFdpbmRvd1Njcm9sbExlZnQod2luKSxcbiAgICAgIHRvcDogdXRpbHMuZ2V0V2luZG93U2Nyb2xsVG9wKHdpbilcbiAgICB9O1xuICAgIHcgPSB1dGlscy52aWV3cG9ydFdpZHRoKHdpbik7XG4gICAgaCA9IHV0aWxzLnZpZXdwb3J0SGVpZ2h0KHdpbik7XG4gIH1cblxuICBvZmZzZXQud2lkdGggPSB3O1xuICBvZmZzZXQuaGVpZ2h0ID0gaDtcbiAgcmV0dXJuIG9mZnNldDtcbn1cblxuLyoqXG4gKiDojrflj5Ygbm9kZSDkuIrnmoQgYWxpZ24g5a+56b2Q54K5IOebuOWvueS6jumhtemdoueahOWdkOagh1xuICovXG5mdW5jdGlvbiBnZXRBbGlnbk9mZnNldChyZWdpb24sIGFsaWduKSB7XG4gIHZhciBWID0gYWxpZ24uY2hhckF0KDApO1xuICB2YXIgSCA9IGFsaWduLmNoYXJBdCgxKTtcbiAgdmFyIHcgPSByZWdpb24ud2lkdGg7XG4gIHZhciBoID0gcmVnaW9uLmhlaWdodDtcbiAgdmFyIHggPSByZWdpb24ubGVmdDtcbiAgdmFyIHkgPSByZWdpb24udG9wO1xuXG4gIGlmIChWID09PSAnYycpIHtcbiAgICB5ICs9IGggLyAyO1xuICB9IGVsc2UgaWYgKFYgPT09ICdiJykge1xuICAgIHkgKz0gaDtcbiAgfVxuXG4gIGlmIChIID09PSAnYycpIHtcbiAgICB4ICs9IHcgLyAyO1xuICB9IGVsc2UgaWYgKEggPT09ICdyJykge1xuICAgIHggKz0gdztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGVmdDogeCxcbiAgICB0b3A6IHlcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RWxGdXR1cmVQb3MoZWxSZWdpb24sIHJlZk5vZGVSZWdpb24sIHBvaW50cywgb2Zmc2V0LCB0YXJnZXRPZmZzZXQpIHtcbiAgdmFyIHAxID0gZ2V0QWxpZ25PZmZzZXQocmVmTm9kZVJlZ2lvbiwgcG9pbnRzWzFdKTtcbiAgdmFyIHAyID0gZ2V0QWxpZ25PZmZzZXQoZWxSZWdpb24sIHBvaW50c1swXSk7XG4gIHZhciBkaWZmID0gW3AyLmxlZnQgLSBwMS5sZWZ0LCBwMi50b3AgLSBwMS50b3BdO1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IE1hdGgucm91bmQoZWxSZWdpb24ubGVmdCAtIGRpZmZbMF0gKyBvZmZzZXRbMF0gLSB0YXJnZXRPZmZzZXRbMF0pLFxuICAgIHRvcDogTWF0aC5yb3VuZChlbFJlZ2lvbi50b3AgLSBkaWZmWzFdICsgb2Zmc2V0WzFdIC0gdGFyZ2V0T2Zmc2V0WzFdKVxuICB9O1xufVxuXG4vKipcbiAqIGFsaWduIGRvbSBub2RlIGZsZXhpYmx5XG4gKiBAYXV0aG9yIHlpbWluZ2hlQGdtYWlsLmNvbVxuICovXG5cbmZ1bmN0aW9uIGlzRmFpbFgoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkge1xuICByZXR1cm4gZWxGdXR1cmVQb3MubGVmdCA8IHZpc2libGVSZWN0LmxlZnQgfHwgZWxGdXR1cmVQb3MubGVmdCArIGVsUmVnaW9uLndpZHRoID4gdmlzaWJsZVJlY3QucmlnaHQ7XG59XG5cbmZ1bmN0aW9uIGlzRmFpbFkoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkge1xuICByZXR1cm4gZWxGdXR1cmVQb3MudG9wIDwgdmlzaWJsZVJlY3QudG9wIHx8IGVsRnV0dXJlUG9zLnRvcCArIGVsUmVnaW9uLmhlaWdodCA+IHZpc2libGVSZWN0LmJvdHRvbTtcbn1cblxuZnVuY3Rpb24gaXNDb21wbGV0ZUZhaWxYKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpIHtcbiAgcmV0dXJuIGVsRnV0dXJlUG9zLmxlZnQgPiB2aXNpYmxlUmVjdC5yaWdodCB8fCBlbEZ1dHVyZVBvcy5sZWZ0ICsgZWxSZWdpb24ud2lkdGggPCB2aXNpYmxlUmVjdC5sZWZ0O1xufVxuXG5mdW5jdGlvbiBpc0NvbXBsZXRlRmFpbFkoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkge1xuICByZXR1cm4gZWxGdXR1cmVQb3MudG9wID4gdmlzaWJsZVJlY3QuYm90dG9tIHx8IGVsRnV0dXJlUG9zLnRvcCArIGVsUmVnaW9uLmhlaWdodCA8IHZpc2libGVSZWN0LnRvcDtcbn1cblxuZnVuY3Rpb24gZmxpcChwb2ludHMsIHJlZywgbWFwKSB7XG4gIHZhciByZXQgPSBbXTtcbiAgdXRpbHMuZWFjaChwb2ludHMsIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0LnB1c2gocC5yZXBsYWNlKHJlZywgZnVuY3Rpb24gKG0pIHtcbiAgICAgIHJldHVybiBtYXBbbV07XG4gICAgfSkpO1xuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZmxpcE9mZnNldChvZmZzZXQsIGluZGV4KSB7XG4gIG9mZnNldFtpbmRleF0gPSAtb2Zmc2V0W2luZGV4XTtcbiAgcmV0dXJuIG9mZnNldDtcbn1cblxuZnVuY3Rpb24gY29udmVydE9mZnNldChzdHIsIG9mZnNldExlbikge1xuICB2YXIgbjtcblxuICBpZiAoLyUkLy50ZXN0KHN0cikpIHtcbiAgICBuID0gcGFyc2VJbnQoc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gMSksIDEwKSAvIDEwMCAqIG9mZnNldExlbjtcbiAgfSBlbHNlIHtcbiAgICBuID0gcGFyc2VJbnQoc3RyLCAxMCk7XG4gIH1cblxuICByZXR1cm4gbiB8fCAwO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVPZmZzZXQob2Zmc2V0LCBlbCkge1xuICBvZmZzZXRbMF0gPSBjb252ZXJ0T2Zmc2V0KG9mZnNldFswXSwgZWwud2lkdGgpO1xuICBvZmZzZXRbMV0gPSBjb252ZXJ0T2Zmc2V0KG9mZnNldFsxXSwgZWwuaGVpZ2h0KTtcbn1cbi8qKlxuICogQHBhcmFtIGVsXG4gKiBAcGFyYW0gdGd0UmVnaW9uIOWPgueFp+iKgueCueaJgOWNoOeahOWMuuWfnzogeyBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQgfVxuICogQHBhcmFtIGFsaWduXG4gKi9cblxuXG5mdW5jdGlvbiBkb0FsaWduKGVsLCB0Z3RSZWdpb24sIGFsaWduLCBpc1RndFJlZ2lvblZpc2libGUpIHtcbiAgdmFyIHBvaW50cyA9IGFsaWduLnBvaW50cztcbiAgdmFyIG9mZnNldCA9IGFsaWduLm9mZnNldCB8fCBbMCwgMF07XG4gIHZhciB0YXJnZXRPZmZzZXQgPSBhbGlnbi50YXJnZXRPZmZzZXQgfHwgWzAsIDBdO1xuICB2YXIgb3ZlcmZsb3cgPSBhbGlnbi5vdmVyZmxvdztcbiAgdmFyIHNvdXJjZSA9IGFsaWduLnNvdXJjZSB8fCBlbDtcbiAgb2Zmc2V0ID0gW10uY29uY2F0KG9mZnNldCk7XG4gIHRhcmdldE9mZnNldCA9IFtdLmNvbmNhdCh0YXJnZXRPZmZzZXQpO1xuICBvdmVyZmxvdyA9IG92ZXJmbG93IHx8IHt9O1xuICB2YXIgbmV3T3ZlcmZsb3dDZmcgPSB7fTtcbiAgdmFyIGZhaWwgPSAwO1xuICB2YXIgYWx3YXlzQnlWaWV3cG9ydCA9ICEhKG92ZXJmbG93ICYmIG92ZXJmbG93LmFsd2F5c0J5Vmlld3BvcnQpOyAvLyDlvZPliY3oioLngrnlj6/ku6XooqvmlL7nva7nmoTmmL7npLrljLrln59cblxuICB2YXIgdmlzaWJsZVJlY3QgPSBnZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQoc291cmNlLCBhbHdheXNCeVZpZXdwb3J0KTsgLy8g5b2T5YmN6IqC54K55omA5Y2g55qE5Yy65Z+fLCBsZWZ0L3RvcC93aWR0aC9oZWlnaHRcblxuICB2YXIgZWxSZWdpb24gPSBnZXRSZWdpb24oc291cmNlKTsgLy8g5bCGIG9mZnNldCDovazmjaLmiJDmlbDlgLzvvIzmlK/mjIHnmb7liIbmr5RcblxuICBub3JtYWxpemVPZmZzZXQob2Zmc2V0LCBlbFJlZ2lvbik7XG4gIG5vcm1hbGl6ZU9mZnNldCh0YXJnZXRPZmZzZXQsIHRndFJlZ2lvbik7IC8vIOW9k+WJjeiKgueCueWwhuimgeiiq+aUvue9rueahOS9jee9rlxuXG4gIHZhciBlbEZ1dHVyZVBvcyA9IGdldEVsRnV0dXJlUG9zKGVsUmVnaW9uLCB0Z3RSZWdpb24sIHBvaW50cywgb2Zmc2V0LCB0YXJnZXRPZmZzZXQpOyAvLyDlvZPliY3oioLngrnlsIbopoHmiYDlpITnmoTljLrln59cblxuICB2YXIgbmV3RWxSZWdpb24gPSB1dGlscy5tZXJnZShlbFJlZ2lvbiwgZWxGdXR1cmVQb3MpOyAvLyDlpoLmnpzlj6/op4bljLrln5/kuI3og73lrozlhajmlL7nva7lvZPliY3oioLngrnml7blhYHorrjosIPmlbRcblxuICBpZiAodmlzaWJsZVJlY3QgJiYgKG92ZXJmbG93LmFkanVzdFggfHwgb3ZlcmZsb3cuYWRqdXN0WSkgJiYgaXNUZ3RSZWdpb25WaXNpYmxlKSB7XG4gICAgaWYgKG92ZXJmbG93LmFkanVzdFgpIHtcbiAgICAgIC8vIOWmguaenOaoquWQkeS4jeiDveaUvuS4i1xuICAgICAgaWYgKGlzRmFpbFgoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkpIHtcbiAgICAgICAgLy8g5a+56b2Q5L2N572u5Y+N5LiLXG4gICAgICAgIHZhciBuZXdQb2ludHMgPSBmbGlwKHBvaW50cywgL1tscl0vZ2ksIHtcbiAgICAgICAgICBsOiAncicsXG4gICAgICAgICAgcjogJ2wnXG4gICAgICAgIH0pOyAvLyDlgY/np7vph4/kuZ/lj43kuItcblxuICAgICAgICB2YXIgbmV3T2Zmc2V0ID0gZmxpcE9mZnNldChvZmZzZXQsIDApO1xuICAgICAgICB2YXIgbmV3VGFyZ2V0T2Zmc2V0ID0gZmxpcE9mZnNldCh0YXJnZXRPZmZzZXQsIDApO1xuICAgICAgICB2YXIgbmV3RWxGdXR1cmVQb3MgPSBnZXRFbEZ1dHVyZVBvcyhlbFJlZ2lvbiwgdGd0UmVnaW9uLCBuZXdQb2ludHMsIG5ld09mZnNldCwgbmV3VGFyZ2V0T2Zmc2V0KTtcblxuICAgICAgICBpZiAoIWlzQ29tcGxldGVGYWlsWChuZXdFbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSkge1xuICAgICAgICAgIGZhaWwgPSAxO1xuICAgICAgICAgIHBvaW50cyA9IG5ld1BvaW50cztcbiAgICAgICAgICBvZmZzZXQgPSBuZXdPZmZzZXQ7XG4gICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gbmV3VGFyZ2V0T2Zmc2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG92ZXJmbG93LmFkanVzdFkpIHtcbiAgICAgIC8vIOWmguaenOe6teWQkeS4jeiDveaUvuS4i1xuICAgICAgaWYgKGlzRmFpbFkoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkpIHtcbiAgICAgICAgLy8g5a+56b2Q5L2N572u5Y+N5LiLXG4gICAgICAgIHZhciBfbmV3UG9pbnRzID0gZmxpcChwb2ludHMsIC9bdGJdL2dpLCB7XG4gICAgICAgICAgdDogJ2InLFxuICAgICAgICAgIGI6ICd0J1xuICAgICAgICB9KTsgLy8g5YGP56e76YeP5Lmf5Y+N5LiLXG5cblxuICAgICAgICB2YXIgX25ld09mZnNldCA9IGZsaXBPZmZzZXQob2Zmc2V0LCAxKTtcblxuICAgICAgICB2YXIgX25ld1RhcmdldE9mZnNldCA9IGZsaXBPZmZzZXQodGFyZ2V0T2Zmc2V0LCAxKTtcblxuICAgICAgICB2YXIgX25ld0VsRnV0dXJlUG9zID0gZ2V0RWxGdXR1cmVQb3MoZWxSZWdpb24sIHRndFJlZ2lvbiwgX25ld1BvaW50cywgX25ld09mZnNldCwgX25ld1RhcmdldE9mZnNldCk7XG5cbiAgICAgICAgaWYgKCFpc0NvbXBsZXRlRmFpbFkoX25ld0VsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpKSB7XG4gICAgICAgICAgZmFpbCA9IDE7XG4gICAgICAgICAgcG9pbnRzID0gX25ld1BvaW50cztcbiAgICAgICAgICBvZmZzZXQgPSBfbmV3T2Zmc2V0O1xuICAgICAgICAgIHRhcmdldE9mZnNldCA9IF9uZXdUYXJnZXRPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IC8vIOWmguaenOWksei0pe+8jOmHjeaWsOiuoeeul+W9k+WJjeiKgueCueWwhuimgeiiq+aUvue9rueahOS9jee9rlxuXG5cbiAgICBpZiAoZmFpbCkge1xuICAgICAgZWxGdXR1cmVQb3MgPSBnZXRFbEZ1dHVyZVBvcyhlbFJlZ2lvbiwgdGd0UmVnaW9uLCBwb2ludHMsIG9mZnNldCwgdGFyZ2V0T2Zmc2V0KTtcbiAgICAgIHV0aWxzLm1peChuZXdFbFJlZ2lvbiwgZWxGdXR1cmVQb3MpO1xuICAgIH1cblxuICAgIHZhciBpc1N0aWxsRmFpbFggPSBpc0ZhaWxYKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpO1xuICAgIHZhciBpc1N0aWxsRmFpbFkgPSBpc0ZhaWxZKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpOyAvLyDmo4Dmn6Xlj43kuIvlkI7nmoTkvY3nva7mmK/lkKblj6/ku6XmlL7kuIvkuobvvIzlpoLmnpzku43nhLbmlL7kuI3kuIvvvJpcbiAgICAvLyAxLiDlpI3ljp/kv67mlLnov4fnmoTlrprkvY3lj4LmlbBcblxuICAgIGlmIChpc1N0aWxsRmFpbFggfHwgaXNTdGlsbEZhaWxZKSB7XG4gICAgICB2YXIgX25ld1BvaW50czIgPSBwb2ludHM7IC8vIOmHjee9ruWvueW6lOmDqOWIhueahOe/u+i9rOmAu+i+kVxuXG4gICAgICBpZiAoaXNTdGlsbEZhaWxYKSB7XG4gICAgICAgIF9uZXdQb2ludHMyID0gZmxpcChwb2ludHMsIC9bbHJdL2dpLCB7XG4gICAgICAgICAgbDogJ3InLFxuICAgICAgICAgIHI6ICdsJ1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzU3RpbGxGYWlsWSkge1xuICAgICAgICBfbmV3UG9pbnRzMiA9IGZsaXAocG9pbnRzLCAvW3RiXS9naSwge1xuICAgICAgICAgIHQ6ICdiJyxcbiAgICAgICAgICBiOiAndCdcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHBvaW50cyA9IF9uZXdQb2ludHMyO1xuICAgICAgb2Zmc2V0ID0gYWxpZ24ub2Zmc2V0IHx8IFswLCAwXTtcbiAgICAgIHRhcmdldE9mZnNldCA9IGFsaWduLnRhcmdldE9mZnNldCB8fCBbMCwgMF07XG4gICAgfSAvLyAyLiDlj6rmnInmjIflrprkuoblj6/ku6XosIPmlbTlvZPliY3mlrnlkJHmiY3osIPmlbRcblxuXG4gICAgbmV3T3ZlcmZsb3dDZmcuYWRqdXN0WCA9IG92ZXJmbG93LmFkanVzdFggJiYgaXNTdGlsbEZhaWxYO1xuICAgIG5ld092ZXJmbG93Q2ZnLmFkanVzdFkgPSBvdmVyZmxvdy5hZGp1c3RZICYmIGlzU3RpbGxGYWlsWTsgLy8g56Gu5a6e6KaB6LCD5pW077yM55Sa6Iez5Y+v6IO95Lya6LCD5pW06auY5bqm5a695bqmXG5cbiAgICBpZiAobmV3T3ZlcmZsb3dDZmcuYWRqdXN0WCB8fCBuZXdPdmVyZmxvd0NmZy5hZGp1c3RZKSB7XG4gICAgICBuZXdFbFJlZ2lvbiA9IGFkanVzdEZvclZpZXdwb3J0KGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QsIG5ld092ZXJmbG93Q2ZnKTtcbiAgICB9XG4gIH0gLy8gbmVlZCBqdWRnZSB0byBpbiBjYXNlIHNldCBmaXhlZCB3aXRoIGluIGNzcyBvbiBoZWlnaHQgYXV0byBlbGVtZW50XG5cblxuICBpZiAobmV3RWxSZWdpb24ud2lkdGggIT09IGVsUmVnaW9uLndpZHRoKSB7XG4gICAgdXRpbHMuY3NzKHNvdXJjZSwgJ3dpZHRoJywgdXRpbHMud2lkdGgoc291cmNlKSArIG5ld0VsUmVnaW9uLndpZHRoIC0gZWxSZWdpb24ud2lkdGgpO1xuICB9XG5cbiAgaWYgKG5ld0VsUmVnaW9uLmhlaWdodCAhPT0gZWxSZWdpb24uaGVpZ2h0KSB7XG4gICAgdXRpbHMuY3NzKHNvdXJjZSwgJ2hlaWdodCcsIHV0aWxzLmhlaWdodChzb3VyY2UpICsgbmV3RWxSZWdpb24uaGVpZ2h0IC0gZWxSZWdpb24uaGVpZ2h0KTtcbiAgfSAvLyBodHRwczovL2dpdGh1Yi5jb20va2lzc3l0ZWFtL2tpc3N5L2lzc3Vlcy8xOTBcbiAgLy8g55u45a+55LqO5bGP5bmV5L2N572u5rKh5Y+Y77yM6ICMIGxlZnQvdG9wIOWPmOS6hlxuICAvLyDkvovlpoIgPGRpdiAncmVsYXRpdmUnPjxlbCBhYnNvbHV0ZT48L2Rpdj5cblxuXG4gIHV0aWxzLm9mZnNldChzb3VyY2UsIHtcbiAgICBsZWZ0OiBuZXdFbFJlZ2lvbi5sZWZ0LFxuICAgIHRvcDogbmV3RWxSZWdpb24udG9wXG4gIH0sIHtcbiAgICB1c2VDc3NSaWdodDogYWxpZ24udXNlQ3NzUmlnaHQsXG4gICAgdXNlQ3NzQm90dG9tOiBhbGlnbi51c2VDc3NCb3R0b20sXG4gICAgdXNlQ3NzVHJhbnNmb3JtOiBhbGlnbi51c2VDc3NUcmFuc2Zvcm0sXG4gICAgaWdub3JlU2hha2U6IGFsaWduLmlnbm9yZVNoYWtlXG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHBvaW50czogcG9pbnRzLFxuICAgIG9mZnNldDogb2Zmc2V0LFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0LFxuICAgIG92ZXJmbG93OiBuZXdPdmVyZmxvd0NmZ1xuICB9O1xufVxuLyoqXG4gKiAgMjAxMi0wNC0yNiB5aW1pbmdoZUBnbWFpbC5jb21cbiAqICAgLSDkvJjljJbmmbrog73lr7npvZDnrpfms5VcbiAqICAgLSDmhY7nlKggcmVzaXplWFhcbiAqXG4gKiAgMjAxMS0wNy0xMyB5aW1pbmdoZUBnbWFpbC5jb20gbm90ZTpcbiAqICAgLSDlop7liqDmmbrog73lr7npvZDvvIzku6Xlj4rlpKflsI/osIPmlbTpgInpoblcbiAqKi9cblxuZnVuY3Rpb24gaXNPdXRPZlZpc2libGVSZWN0KHRhcmdldCwgYWx3YXlzQnlWaWV3cG9ydCkge1xuICB2YXIgdmlzaWJsZVJlY3QgPSBnZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQodGFyZ2V0LCBhbHdheXNCeVZpZXdwb3J0KTtcbiAgdmFyIHRhcmdldFJlZ2lvbiA9IGdldFJlZ2lvbih0YXJnZXQpO1xuICByZXR1cm4gIXZpc2libGVSZWN0IHx8IHRhcmdldFJlZ2lvbi5sZWZ0ICsgdGFyZ2V0UmVnaW9uLndpZHRoIDw9IHZpc2libGVSZWN0LmxlZnQgfHwgdGFyZ2V0UmVnaW9uLnRvcCArIHRhcmdldFJlZ2lvbi5oZWlnaHQgPD0gdmlzaWJsZVJlY3QudG9wIHx8IHRhcmdldFJlZ2lvbi5sZWZ0ID49IHZpc2libGVSZWN0LnJpZ2h0IHx8IHRhcmdldFJlZ2lvbi50b3AgPj0gdmlzaWJsZVJlY3QuYm90dG9tO1xufVxuXG5mdW5jdGlvbiBhbGlnbkVsZW1lbnQoZWwsIHJlZk5vZGUsIGFsaWduKSB7XG4gIHZhciB0YXJnZXQgPSBhbGlnbi50YXJnZXQgfHwgcmVmTm9kZTtcbiAgdmFyIHJlZk5vZGVSZWdpb24gPSBnZXRSZWdpb24odGFyZ2V0KTtcbiAgdmFyIGlzVGFyZ2V0Tm90T3V0T2ZWaXNpYmxlID0gIWlzT3V0T2ZWaXNpYmxlUmVjdCh0YXJnZXQsIGFsaWduLm92ZXJmbG93ICYmIGFsaWduLm92ZXJmbG93LmFsd2F5c0J5Vmlld3BvcnQpO1xuICByZXR1cm4gZG9BbGlnbihlbCwgcmVmTm9kZVJlZ2lvbiwgYWxpZ24sIGlzVGFyZ2V0Tm90T3V0T2ZWaXNpYmxlKTtcbn1cblxuYWxpZ25FbGVtZW50Ll9fZ2V0T2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50O1xuYWxpZ25FbGVtZW50Ll9fZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50ID0gZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50O1xuXG4vKipcbiAqIGB0Z3RQb2ludGA6IHsgcGFnZVgsIHBhZ2VZIH0gb3IgeyBjbGllbnRYLCBjbGllbnRZIH0uXG4gKiBJZiBjbGllbnQgcG9zaXRpb24gcHJvdmlkZWQsIHdpbGwgaW50ZXJuYWwgY29udmVydCB0byBwYWdlIHBvc2l0aW9uLlxuICovXG5cbmZ1bmN0aW9uIGFsaWduUG9pbnQoZWwsIHRndFBvaW50LCBhbGlnbikge1xuICB2YXIgcGFnZVg7XG4gIHZhciBwYWdlWTtcbiAgdmFyIGRvYyA9IHV0aWxzLmdldERvY3VtZW50KGVsKTtcbiAgdmFyIHdpbiA9IGRvYy5kZWZhdWx0VmlldyB8fCBkb2MucGFyZW50V2luZG93O1xuICB2YXIgc2Nyb2xsWCA9IHV0aWxzLmdldFdpbmRvd1Njcm9sbExlZnQod2luKTtcbiAgdmFyIHNjcm9sbFkgPSB1dGlscy5nZXRXaW5kb3dTY3JvbGxUb3Aod2luKTtcbiAgdmFyIHZpZXdwb3J0V2lkdGggPSB1dGlscy52aWV3cG9ydFdpZHRoKHdpbik7XG4gIHZhciB2aWV3cG9ydEhlaWdodCA9IHV0aWxzLnZpZXdwb3J0SGVpZ2h0KHdpbik7XG5cbiAgaWYgKCdwYWdlWCcgaW4gdGd0UG9pbnQpIHtcbiAgICBwYWdlWCA9IHRndFBvaW50LnBhZ2VYO1xuICB9IGVsc2Uge1xuICAgIHBhZ2VYID0gc2Nyb2xsWCArIHRndFBvaW50LmNsaWVudFg7XG4gIH1cblxuICBpZiAoJ3BhZ2VZJyBpbiB0Z3RQb2ludCkge1xuICAgIHBhZ2VZID0gdGd0UG9pbnQucGFnZVk7XG4gIH0gZWxzZSB7XG4gICAgcGFnZVkgPSBzY3JvbGxZICsgdGd0UG9pbnQuY2xpZW50WTtcbiAgfVxuXG4gIHZhciB0Z3RSZWdpb24gPSB7XG4gICAgbGVmdDogcGFnZVgsXG4gICAgdG9wOiBwYWdlWSxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDBcbiAgfTtcbiAgdmFyIHBvaW50SW5WaWV3ID0gcGFnZVggPj0gMCAmJiBwYWdlWCA8PSBzY3JvbGxYICsgdmlld3BvcnRXaWR0aCAmJiBwYWdlWSA+PSAwICYmIHBhZ2VZIDw9IHNjcm9sbFkgKyB2aWV3cG9ydEhlaWdodDsgLy8gUHJvdmlkZSBkZWZhdWx0IHRhcmdldCBwb2ludFxuXG4gIHZhciBwb2ludHMgPSBbYWxpZ24ucG9pbnRzWzBdLCAnY2MnXTtcbiAgcmV0dXJuIGRvQWxpZ24oZWwsIHRndFJlZ2lvbiwgX29iamVjdFNwcmVhZDIoe30sIGFsaWduLCB7XG4gICAgcG9pbnRzOiBwb2ludHNcbiAgfSksIHBvaW50SW5WaWV3KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWxpZ25FbGVtZW50O1xuZXhwb3J0IHsgYWxpZ25FbGVtZW50LCBhbGlnblBvaW50IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuXG4vKipcbiAqIFJlbW92ZWQgcHJvcHM6XG4gKiAgLSBjaGlsZHJlblByb3BzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wb3NlUmVmIH0gZnJvbSBcInJjLXV0aWwvZXMvcmVmXCI7XG5pbXBvcnQgaXNWaXNpYmxlIGZyb20gXCJyYy11dGlsL2VzL0RvbS9pc1Zpc2libGVcIjtcbmltcG9ydCB7IGFsaWduRWxlbWVudCwgYWxpZ25Qb2ludCB9IGZyb20gJ2RvbS1hbGlnbic7XG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lciBmcm9tIFwicmMtdXRpbC9lcy9Eb20vYWRkRXZlbnRMaXN0ZW5lclwiO1xuaW1wb3J0IHsgaXNTYW1lUG9pbnQsIHJlc3RvcmVGb2N1cywgbW9uaXRvclJlc2l6ZSB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgdXNlQnVmZmVyIGZyb20gJy4vaG9va3MvdXNlQnVmZmVyJztcblxuZnVuY3Rpb24gZ2V0RWxlbWVudChmdW5jKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIG51bGw7XG4gIHJldHVybiBmdW5jKCk7XG59XG5cbmZ1bmN0aW9uIGdldFBvaW50KHBvaW50KSB7XG4gIGlmIChfdHlwZW9mKHBvaW50KSAhPT0gJ29iamVjdCcgfHwgIXBvaW50KSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHBvaW50O1xufVxuXG52YXIgQWxpZ24gPSBmdW5jdGlvbiBBbGlnbihfcmVmLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGRpc2FibGVkID0gX3JlZi5kaXNhYmxlZCxcbiAgICAgIHRhcmdldCA9IF9yZWYudGFyZ2V0LFxuICAgICAgYWxpZ24gPSBfcmVmLmFsaWduLFxuICAgICAgb25BbGlnbiA9IF9yZWYub25BbGlnbixcbiAgICAgIG1vbml0b3JXaW5kb3dSZXNpemUgPSBfcmVmLm1vbml0b3JXaW5kb3dSZXNpemUsXG4gICAgICBfcmVmJG1vbml0b3JCdWZmZXJUaW0gPSBfcmVmLm1vbml0b3JCdWZmZXJUaW1lLFxuICAgICAgbW9uaXRvckJ1ZmZlclRpbWUgPSBfcmVmJG1vbml0b3JCdWZmZXJUaW0gPT09IHZvaWQgMCA/IDAgOiBfcmVmJG1vbml0b3JCdWZmZXJUaW07XG4gIHZhciBjYWNoZVJlZiA9IFJlYWN0LnVzZVJlZih7fSk7XG4gIHZhciBub2RlUmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIHZhciBjaGlsZE5vZGUgPSBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTsgLy8gPT09PT09PT09PT09PT09PT09PT09IEFsaWduID09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gV2Ugc2F2ZSB0aGUgcHJvcHMgaGVyZSB0byBhdm9pZCBjbG9zdXJlIG1ha2VzIHByb3BzIG9vZFxuXG4gIHZhciBmb3JjZUFsaWduUHJvcHNSZWYgPSBSZWFjdC51c2VSZWYoe30pO1xuICBmb3JjZUFsaWduUHJvcHNSZWYuY3VycmVudC5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICBmb3JjZUFsaWduUHJvcHNSZWYuY3VycmVudC50YXJnZXQgPSB0YXJnZXQ7XG4gIGZvcmNlQWxpZ25Qcm9wc1JlZi5jdXJyZW50Lm9uQWxpZ24gPSBvbkFsaWduO1xuXG4gIHZhciBfdXNlQnVmZmVyID0gdXNlQnVmZmVyKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2ZvcmNlQWxpZ25Qcm9wc1JlZiRjID0gZm9yY2VBbGlnblByb3BzUmVmLmN1cnJlbnQsXG4gICAgICAgIGxhdGVzdERpc2FibGVkID0gX2ZvcmNlQWxpZ25Qcm9wc1JlZiRjLmRpc2FibGVkLFxuICAgICAgICBsYXRlc3RUYXJnZXQgPSBfZm9yY2VBbGlnblByb3BzUmVmJGMudGFyZ2V0LFxuICAgICAgICBsYXRlc3RPbkFsaWduID0gX2ZvcmNlQWxpZ25Qcm9wc1JlZiRjLm9uQWxpZ247XG5cbiAgICBpZiAoIWxhdGVzdERpc2FibGVkICYmIGxhdGVzdFRhcmdldCkge1xuICAgICAgdmFyIHNvdXJjZSA9IG5vZGVSZWYuY3VycmVudDtcbiAgICAgIHZhciByZXN1bHQ7XG4gICAgICB2YXIgZWxlbWVudCA9IGdldEVsZW1lbnQobGF0ZXN0VGFyZ2V0KTtcbiAgICAgIHZhciBwb2ludCA9IGdldFBvaW50KGxhdGVzdFRhcmdldCk7XG4gICAgICBjYWNoZVJlZi5jdXJyZW50LmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgY2FjaGVSZWYuY3VycmVudC5wb2ludCA9IHBvaW50OyAvLyBJRSBsb3NlIGZvY3VzIGFmdGVyIGVsZW1lbnQgcmVhbGlnblxuICAgICAgLy8gV2Ugc2hvdWxkIHJlY29yZCBhY3RpdmVFbGVtZW50IGFuZCByZXN0b3JlIGxhdGVyXG5cbiAgICAgIHZhciBfZG9jdW1lbnQgPSBkb2N1bWVudCxcbiAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gX2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7IC8vIFdlIG9ubHkgYWxpZ24gd2hlbiBlbGVtZW50IGlzIHZpc2libGVcblxuICAgICAgaWYgKGVsZW1lbnQgJiYgaXNWaXNpYmxlKGVsZW1lbnQpKSB7XG4gICAgICAgIHJlc3VsdCA9IGFsaWduRWxlbWVudChzb3VyY2UsIGVsZW1lbnQsIGFsaWduKTtcbiAgICAgIH0gZWxzZSBpZiAocG9pbnQpIHtcbiAgICAgICAgcmVzdWx0ID0gYWxpZ25Qb2ludChzb3VyY2UsIHBvaW50LCBhbGlnbik7XG4gICAgICB9XG5cbiAgICAgIHJlc3RvcmVGb2N1cyhhY3RpdmVFbGVtZW50LCBzb3VyY2UpO1xuXG4gICAgICBpZiAobGF0ZXN0T25BbGlnbiAmJiByZXN1bHQpIHtcbiAgICAgICAgbGF0ZXN0T25BbGlnbihzb3VyY2UsIHJlc3VsdCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSwgbW9uaXRvckJ1ZmZlclRpbWUpLFxuICAgICAgX3VzZUJ1ZmZlcjIgPSBfc2xpY2VkVG9BcnJheShfdXNlQnVmZmVyLCAyKSxcbiAgICAgIF9mb3JjZUFsaWduID0gX3VzZUJ1ZmZlcjJbMF0sXG4gICAgICBjYW5jZWxGb3JjZUFsaWduID0gX3VzZUJ1ZmZlcjJbMV07IC8vID09PT09PT09PT09PT09PT09PT09PSBFZmZlY3QgPT09PT09PT09PT09PT09PT09PT09XG4gIC8vIExpc3RlbiBmb3IgdGFyZ2V0IHVwZGF0ZWRcblxuXG4gIHZhciByZXNpemVNb25pdG9yID0gUmVhY3QudXNlUmVmKHtcbiAgICBjYW5jZWw6IGZ1bmN0aW9uIGNhbmNlbCgpIHt9XG4gIH0pOyAvLyBMaXN0ZW4gZm9yIHNvdXJjZSB1cGRhdGVkXG5cbiAgdmFyIHNvdXJjZVJlc2l6ZU1vbml0b3IgPSBSZWFjdC51c2VSZWYoe1xuICAgIGNhbmNlbDogZnVuY3Rpb24gY2FuY2VsKCkge31cbiAgfSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBnZXRFbGVtZW50KHRhcmdldCk7XG4gICAgdmFyIHBvaW50ID0gZ2V0UG9pbnQodGFyZ2V0KTtcblxuICAgIGlmIChub2RlUmVmLmN1cnJlbnQgIT09IHNvdXJjZVJlc2l6ZU1vbml0b3IuY3VycmVudC5lbGVtZW50KSB7XG4gICAgICBzb3VyY2VSZXNpemVNb25pdG9yLmN1cnJlbnQuY2FuY2VsKCk7XG4gICAgICBzb3VyY2VSZXNpemVNb25pdG9yLmN1cnJlbnQuZWxlbWVudCA9IG5vZGVSZWYuY3VycmVudDtcbiAgICAgIHNvdXJjZVJlc2l6ZU1vbml0b3IuY3VycmVudC5jYW5jZWwgPSBtb25pdG9yUmVzaXplKG5vZGVSZWYuY3VycmVudCwgX2ZvcmNlQWxpZ24pO1xuICAgIH1cblxuICAgIGlmIChjYWNoZVJlZi5jdXJyZW50LmVsZW1lbnQgIT09IGVsZW1lbnQgfHwgIWlzU2FtZVBvaW50KGNhY2hlUmVmLmN1cnJlbnQucG9pbnQsIHBvaW50KSkge1xuICAgICAgX2ZvcmNlQWxpZ24oKTsgLy8gQWRkIHJlc2l6ZSBvYnNlcnZlclxuXG5cbiAgICAgIGlmIChyZXNpemVNb25pdG9yLmN1cnJlbnQuZWxlbWVudCAhPT0gZWxlbWVudCkge1xuICAgICAgICByZXNpemVNb25pdG9yLmN1cnJlbnQuY2FuY2VsKCk7XG4gICAgICAgIHJlc2l6ZU1vbml0b3IuY3VycmVudC5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgcmVzaXplTW9uaXRvci5jdXJyZW50LmNhbmNlbCA9IG1vbml0b3JSZXNpemUoZWxlbWVudCwgX2ZvcmNlQWxpZ24pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7IC8vIExpc3RlbiBmb3IgZGlzYWJsZWQgY2hhbmdlXG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBfZm9yY2VBbGlnbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW5jZWxGb3JjZUFsaWduKCk7XG4gICAgfVxuICB9LCBbZGlzYWJsZWRdKTsgLy8gTGlzdGVuIGZvciB3aW5kb3cgcmVzaXplXG5cbiAgdmFyIHdpblJlc2l6ZVJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobW9uaXRvcldpbmRvd1Jlc2l6ZSkge1xuICAgICAgaWYgKCF3aW5SZXNpemVSZWYuY3VycmVudCkge1xuICAgICAgICB3aW5SZXNpemVSZWYuY3VycmVudCA9IGFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncmVzaXplJywgX2ZvcmNlQWxpZ24pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAod2luUmVzaXplUmVmLmN1cnJlbnQpIHtcbiAgICAgIHdpblJlc2l6ZVJlZi5jdXJyZW50LnJlbW92ZSgpO1xuICAgICAgd2luUmVzaXplUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgIH1cbiAgfSwgW21vbml0b3JXaW5kb3dSZXNpemVdKTsgLy8gQ2xlYXIgYWxsIGlmIHVubW91bnRcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXNpemVNb25pdG9yLmN1cnJlbnQuY2FuY2VsKCk7XG4gICAgICBzb3VyY2VSZXNpemVNb25pdG9yLmN1cnJlbnQuY2FuY2VsKCk7XG4gICAgICBpZiAod2luUmVzaXplUmVmLmN1cnJlbnQpIHdpblJlc2l6ZVJlZi5jdXJyZW50LnJlbW92ZSgpO1xuICAgICAgY2FuY2VsRm9yY2VBbGlnbigpO1xuICAgIH07XG4gIH0sIFtdKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PSBSZWYgPT09PT09PT09PT09PT09PT09PT09PT1cblxuICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmb3JjZUFsaWduOiBmdW5jdGlvbiBmb3JjZUFsaWduKCkge1xuICAgICAgICByZXR1cm4gX2ZvcmNlQWxpZ24odHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7IC8vID09PT09PT09PT09PT09PT09PT09PSBSZW5kZXIgPT09PT09PT09PT09PT09PT09PT09XG5cbiAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkTm9kZSkpIHtcbiAgICBjaGlsZE5vZGUgPSBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGROb2RlLCB7XG4gICAgICByZWY6IGNvbXBvc2VSZWYoY2hpbGROb2RlLnJlZiwgbm9kZVJlZilcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZE5vZGU7XG59O1xuXG52YXIgUmVmQWxpZ24gPSBSZWFjdC5mb3J3YXJkUmVmKEFsaWduKTtcblJlZkFsaWduLmRpc3BsYXlOYW1lID0gJ0FsaWduJztcbmV4cG9ydCBkZWZhdWx0IFJlZkFsaWduOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGNhbGxiYWNrLCBidWZmZXIpIHtcbiAgdmFyIGNhbGxlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gIHZhciB0aW1lb3V0UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIGZ1bmN0aW9uIGNhbmNlbFRyaWdnZXIoKSB7XG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0UmVmLmN1cnJlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJpZ2dlcihmb3JjZSkge1xuICAgIGlmICghY2FsbGVkUmVmLmN1cnJlbnQgfHwgZm9yY2UgPT09IHRydWUpIHtcbiAgICAgIGlmIChjYWxsYmFjaygpID09PSBmYWxzZSkge1xuICAgICAgICAvLyBOb3QgZGVsYXkgc2luY2UgY2FsbGJhY2sgY2FuY2VsbGVkIHNlbGZcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjYWxsZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICBjYW5jZWxUcmlnZ2VyKCk7XG4gICAgICB0aW1lb3V0UmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICB9LCBidWZmZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW5jZWxUcmlnZ2VyKCk7XG4gICAgICB0aW1lb3V0UmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIHRyaWdnZXIoKTtcbiAgICAgIH0sIGJ1ZmZlcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFt0cmlnZ2VyLCBmdW5jdGlvbiAoKSB7XG4gICAgY2FsbGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICBjYW5jZWxUcmlnZ2VyKCk7XG4gIH1dO1xufSk7IiwiLy8gZXhwb3J0IHRoaXMgcGFja2FnZSdzIGFwaVxuaW1wb3J0IEFsaWduIGZyb20gJy4vQWxpZ24nO1xuZXhwb3J0IGRlZmF1bHQgQWxpZ247IiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgUmVzaXplT2JzZXJ2ZXIgZnJvbSAncmVzaXplLW9ic2VydmVyLXBvbHlmaWxsJztcbmltcG9ydCBjb250YWlucyBmcm9tIFwicmMtdXRpbC9lcy9Eb20vY29udGFpbnNcIjtcbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVQb2ludChwcmV2LCBuZXh0KSB7XG4gIGlmIChwcmV2ID09PSBuZXh0KSByZXR1cm4gdHJ1ZTtcbiAgaWYgKCFwcmV2IHx8ICFuZXh0KSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKCdwYWdlWCcgaW4gbmV4dCAmJiAncGFnZVknIGluIG5leHQpIHtcbiAgICByZXR1cm4gcHJldi5wYWdlWCA9PT0gbmV4dC5wYWdlWCAmJiBwcmV2LnBhZ2VZID09PSBuZXh0LnBhZ2VZO1xuICB9XG5cbiAgaWYgKCdjbGllbnRYJyBpbiBuZXh0ICYmICdjbGllbnRZJyBpbiBuZXh0KSB7XG4gICAgcmV0dXJuIHByZXYuY2xpZW50WCA9PT0gbmV4dC5jbGllbnRYICYmIHByZXYuY2xpZW50WSA9PT0gbmV4dC5jbGllbnRZO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmVGb2N1cyhhY3RpdmVFbGVtZW50LCBjb250YWluZXIpIHtcbiAgLy8gRm9jdXMgYmFjayBpZiBpcyBpbiB0aGUgY29udGFpbmVyXG4gIGlmIChhY3RpdmVFbGVtZW50ICE9PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGNvbnRhaW5zKGNvbnRhaW5lciwgYWN0aXZlRWxlbWVudCkgJiYgdHlwZW9mIGFjdGl2ZUVsZW1lbnQuZm9jdXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBhY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBtb25pdG9yUmVzaXplKGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gIHZhciBwcmV2V2lkdGggPSBudWxsO1xuICB2YXIgcHJldkhlaWdodCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gb25SZXNpemUoX3JlZikge1xuICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDEpLFxuICAgICAgICB0YXJnZXQgPSBfcmVmMlswXS50YXJnZXQ7XG5cbiAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyh0YXJnZXQpKSByZXR1cm47XG5cbiAgICB2YXIgX3RhcmdldCRnZXRCb3VuZGluZ0NsID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICB3aWR0aCA9IF90YXJnZXQkZ2V0Qm91bmRpbmdDbC53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gX3RhcmdldCRnZXRCb3VuZGluZ0NsLmhlaWdodDtcblxuICAgIHZhciBmaXhlZFdpZHRoID0gTWF0aC5mbG9vcih3aWR0aCk7XG4gICAgdmFyIGZpeGVkSGVpZ2h0ID0gTWF0aC5mbG9vcihoZWlnaHQpO1xuXG4gICAgaWYgKHByZXZXaWR0aCAhPT0gZml4ZWRXaWR0aCB8fCBwcmV2SGVpZ2h0ICE9PSBmaXhlZEhlaWdodCkge1xuICAgICAgLy8gaHR0cHM6Ly93ZWJraXQub3JnL2Jsb2cvOTk5Ny9yZXNpemVvYnNlcnZlci1pbi13ZWJraXQvXG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGJhY2soe1xuICAgICAgICAgIHdpZHRoOiBmaXhlZFdpZHRoLFxuICAgICAgICAgIGhlaWdodDogZml4ZWRIZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwcmV2V2lkdGggPSBmaXhlZFdpZHRoO1xuICAgIHByZXZIZWlnaHQgPSBmaXhlZEhlaWdodDtcbiAgfVxuXG4gIHZhciByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihvblJlc2l6ZSk7XG5cbiAgaWYgKGVsZW1lbnQpIHtcbiAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH07XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcblxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGVmYXVsdC1wcm9wcy1tYXRjaC1wcm9wLXR5cGVzLCByZWFjdC9uby1tdWx0aS1jb21wLCByZWFjdC9wcm9wLXR5cGVzICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmluZERPTU5vZGUgZnJvbSBcInJjLXV0aWwvZXMvRG9tL2ZpbmRET01Ob2RlXCI7XG5pbXBvcnQgeyBmaWxsUmVmIH0gZnJvbSBcInJjLXV0aWwvZXMvcmVmXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGdldFRyYW5zaXRpb25OYW1lLCBzdXBwb3J0VHJhbnNpdGlvbiB9IGZyb20gJy4vdXRpbC9tb3Rpb24nO1xuaW1wb3J0IHsgU1RBVFVTX05PTkUsIFNURVBfUFJFUEFSRSwgU1RFUF9TVEFSVCB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB1c2VTdGF0dXMgZnJvbSAnLi9ob29rcy91c2VTdGF0dXMnO1xuaW1wb3J0IERvbVdyYXBwZXIgZnJvbSAnLi9Eb21XcmFwcGVyJztcbmltcG9ydCB7IGlzQWN0aXZlIH0gZnJvbSAnLi9ob29rcy91c2VTdGVwUXVldWUnO1xuLyoqXG4gKiBgdHJhbnNpdGlvblN1cHBvcnRgIGlzIHVzZWQgZm9yIG5vbmUgdHJhbnNpdGlvbiB0ZXN0IGNhc2UuXG4gKiBEZWZhdWx0IHdlIHVzZSBicm93c2VyIHRyYW5zaXRpb24gZXZlbnQgc3VwcG9ydCBjaGVjay5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuQ1NTTW90aW9uKGNvbmZpZykge1xuICB2YXIgdHJhbnNpdGlvblN1cHBvcnQgPSBjb25maWc7XG5cbiAgaWYgKF90eXBlb2YoY29uZmlnKSA9PT0gJ29iamVjdCcpIHtcbiAgICB0cmFuc2l0aW9uU3VwcG9ydCA9IGNvbmZpZy50cmFuc2l0aW9uU3VwcG9ydDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3VwcG9ydFRyYW5zaXRpb24ocHJvcHMpIHtcbiAgICByZXR1cm4gISEocHJvcHMubW90aW9uTmFtZSAmJiB0cmFuc2l0aW9uU3VwcG9ydCk7XG4gIH1cblxuICB2YXIgQ1NTTW90aW9uID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgICB2YXIgX3Byb3BzJHZpc2libGUgPSBwcm9wcy52aXNpYmxlLFxuICAgICAgICB2aXNpYmxlID0gX3Byb3BzJHZpc2libGUgPT09IHZvaWQgMCA/IHRydWUgOiBfcHJvcHMkdmlzaWJsZSxcbiAgICAgICAgX3Byb3BzJHJlbW92ZU9uTGVhdmUgPSBwcm9wcy5yZW1vdmVPbkxlYXZlLFxuICAgICAgICByZW1vdmVPbkxlYXZlID0gX3Byb3BzJHJlbW92ZU9uTGVhdmUgPT09IHZvaWQgMCA/IHRydWUgOiBfcHJvcHMkcmVtb3ZlT25MZWF2ZSxcbiAgICAgICAgZm9yY2VSZW5kZXIgPSBwcm9wcy5mb3JjZVJlbmRlcixcbiAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgbW90aW9uTmFtZSA9IHByb3BzLm1vdGlvbk5hbWUsXG4gICAgICAgIGxlYXZlZENsYXNzTmFtZSA9IHByb3BzLmxlYXZlZENsYXNzTmFtZSxcbiAgICAgICAgZXZlbnRQcm9wcyA9IHByb3BzLmV2ZW50UHJvcHM7XG4gICAgdmFyIHN1cHBvcnRNb3Rpb24gPSBpc1N1cHBvcnRUcmFuc2l0aW9uKHByb3BzKTsgLy8gUmVmIHRvIHRoZSByZWFjdCBub2RlLCBpdCBtYXkgYmUgYSBIVE1MRWxlbWVudFxuXG4gICAgdmFyIG5vZGVSZWYgPSB1c2VSZWYoKTsgLy8gUmVmIHRvIHRoZSBkb20gd3JhcHBlciBpbiBjYXNlIHJlZiBjYW4gbm90IHBhc3MgdG8gSFRNTEVsZW1lbnRcblxuICAgIHZhciB3cmFwcGVyTm9kZVJlZiA9IHVzZVJlZigpO1xuXG4gICAgZnVuY3Rpb24gZ2V0RG9tRWxlbWVudCgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBmaW5kRE9NTm9kZShub2RlUmVmLmN1cnJlbnQgfHwgd3JhcHBlck5vZGVSZWYuY3VycmVudCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIE9ubHkgaGFwcGVuIHdoZW4gYG1vdGlvbkRlYWRsaW5lYCB0cmlnZ2VyIGJ1dCBlbGVtZW50IHJlbW92ZWQuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfdXNlU3RhdHVzID0gdXNlU3RhdHVzKHN1cHBvcnRNb3Rpb24sIHZpc2libGUsIGdldERvbUVsZW1lbnQsIHByb3BzKSxcbiAgICAgICAgX3VzZVN0YXR1czIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdHVzLCA0KSxcbiAgICAgICAgc3RhdHVzID0gX3VzZVN0YXR1czJbMF0sXG4gICAgICAgIHN0YXR1c1N0ZXAgPSBfdXNlU3RhdHVzMlsxXSxcbiAgICAgICAgc3RhdHVzU3R5bGUgPSBfdXNlU3RhdHVzMlsyXSxcbiAgICAgICAgbWVyZ2VkVmlzaWJsZSA9IF91c2VTdGF0dXMyWzNdOyAvLyBSZWNvcmQgd2hldGhlciBjb250ZW50IGhhcyByZW5kZWRcbiAgICAvLyBXaWxsIHJldHVybiBudWxsIGZvciB1bi1yZW5kZXJlZCBldmVuIHdoZW4gYHJlbW92ZU9uTGVhdmU9e2ZhbHNlfWBcblxuXG4gICAgdmFyIHJlbmRlcmVkUmVmID0gUmVhY3QudXNlUmVmKG1lcmdlZFZpc2libGUpO1xuXG4gICAgaWYgKG1lcmdlZFZpc2libGUpIHtcbiAgICAgIHJlbmRlcmVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PSBSZWZzID09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gICAgdmFyIG9yaWdpblJlZiA9IHVzZVJlZihyZWYpO1xuICAgIG9yaWdpblJlZi5jdXJyZW50ID0gcmVmO1xuICAgIHZhciBzZXROb2RlUmVmID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIG5vZGVSZWYuY3VycmVudCA9IG5vZGU7XG4gICAgICBmaWxsUmVmKG9yaWdpblJlZi5jdXJyZW50LCBub2RlKTtcbiAgICB9LCBbXSk7IC8vID09PT09PT09PT09PT09PT09PT09PSBSZW5kZXIgPT09PT09PT09PT09PT09PT09PT09XG5cbiAgICB2YXIgbW90aW9uQ2hpbGRyZW47XG5cbiAgICB2YXIgbWVyZ2VkUHJvcHMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGV2ZW50UHJvcHMpLCB7fSwge1xuICAgICAgdmlzaWJsZTogdmlzaWJsZVxuICAgIH0pO1xuXG4gICAgaWYgKCFjaGlsZHJlbikge1xuICAgICAgLy8gTm8gY2hpbGRyZW5cbiAgICAgIG1vdGlvbkNoaWxkcmVuID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gU1RBVFVTX05PTkUgfHwgIWlzU3VwcG9ydFRyYW5zaXRpb24ocHJvcHMpKSB7XG4gICAgICAvLyBTdGFibGUgY2hpbGRyZW5cbiAgICAgIGlmIChtZXJnZWRWaXNpYmxlKSB7XG4gICAgICAgIG1vdGlvbkNoaWxkcmVuID0gY2hpbGRyZW4oX29iamVjdFNwcmVhZCh7fSwgbWVyZ2VkUHJvcHMpLCBzZXROb2RlUmVmKTtcbiAgICAgIH0gZWxzZSBpZiAoIXJlbW92ZU9uTGVhdmUgJiYgcmVuZGVyZWRSZWYuY3VycmVudCkge1xuICAgICAgICBtb3Rpb25DaGlsZHJlbiA9IGNoaWxkcmVuKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgbWVyZ2VkUHJvcHMpLCB7fSwge1xuICAgICAgICAgIGNsYXNzTmFtZTogbGVhdmVkQ2xhc3NOYW1lXG4gICAgICAgIH0pLCBzZXROb2RlUmVmKTtcbiAgICAgIH0gZWxzZSBpZiAoZm9yY2VSZW5kZXIpIHtcbiAgICAgICAgbW90aW9uQ2hpbGRyZW4gPSBjaGlsZHJlbihfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIG1lcmdlZFByb3BzKSwge30sIHtcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgICAgfVxuICAgICAgICB9KSwgc2V0Tm9kZVJlZik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb3Rpb25DaGlsZHJlbiA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgLy8gSW4gbW90aW9uXG4gICAgICB2YXIgc3RhdHVzU3VmZml4O1xuXG4gICAgICBpZiAoc3RhdHVzU3RlcCA9PT0gU1RFUF9QUkVQQVJFKSB7XG4gICAgICAgIHN0YXR1c1N1ZmZpeCA9ICdwcmVwYXJlJztcbiAgICAgIH0gZWxzZSBpZiAoaXNBY3RpdmUoc3RhdHVzU3RlcCkpIHtcbiAgICAgICAgc3RhdHVzU3VmZml4ID0gJ2FjdGl2ZSc7XG4gICAgICB9IGVsc2UgaWYgKHN0YXR1c1N0ZXAgPT09IFNURVBfU1RBUlQpIHtcbiAgICAgICAgc3RhdHVzU3VmZml4ID0gJ3N0YXJ0JztcbiAgICAgIH1cblxuICAgICAgbW90aW9uQ2hpbGRyZW4gPSBjaGlsZHJlbihfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIG1lcmdlZFByb3BzKSwge30sIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGdldFRyYW5zaXRpb25OYW1lKG1vdGlvbk5hbWUsIHN0YXR1cyksIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIGdldFRyYW5zaXRpb25OYW1lKG1vdGlvbk5hbWUsIFwiXCIuY29uY2F0KHN0YXR1cywgXCItXCIpLmNvbmNhdChzdGF0dXNTdWZmaXgpKSwgc3RhdHVzU3VmZml4KSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBtb3Rpb25OYW1lLCB0eXBlb2YgbW90aW9uTmFtZSA9PT0gJ3N0cmluZycpLCBfY2xhc3NOYW1lcykpLFxuICAgICAgICBzdHlsZTogc3RhdHVzU3R5bGVcbiAgICAgIH0pLCBzZXROb2RlUmVmKTtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRG9tV3JhcHBlciwge1xuICAgICAgcmVmOiB3cmFwcGVyTm9kZVJlZlxuICAgIH0sIG1vdGlvbkNoaWxkcmVuKTtcbiAgfSk7XG4gIENTU01vdGlvbi5kaXNwbGF5TmFtZSA9ICdDU1NNb3Rpb24nO1xuICByZXR1cm4gQ1NTTW90aW9uO1xufVxuZXhwb3J0IGRlZmF1bHQgZ2VuQ1NTTW90aW9uKHN1cHBvcnRUcmFuc2l0aW9uKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9jcmVhdGVTdXBlciBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlU3VwZXJcIjtcblxuLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBPcmlnaW5DU1NNb3Rpb24gZnJvbSAnLi9DU1NNb3Rpb24nO1xuaW1wb3J0IHsgc3VwcG9ydFRyYW5zaXRpb24gfSBmcm9tICcuL3V0aWwvbW90aW9uJztcbmltcG9ydCB7IFNUQVRVU19BREQsIFNUQVRVU19LRUVQLCBTVEFUVVNfUkVNT1ZFLCBTVEFUVVNfUkVNT1ZFRCwgZGlmZktleXMsIHBhcnNlS2V5cyB9IGZyb20gJy4vdXRpbC9kaWZmJztcbnZhciBNT1RJT05fUFJPUF9OQU1FUyA9IFsnZXZlbnRQcm9wcycsICd2aXNpYmxlJywgJ2NoaWxkcmVuJywgJ21vdGlvbk5hbWUnLCAnbW90aW9uQXBwZWFyJywgJ21vdGlvbkVudGVyJywgJ21vdGlvbkxlYXZlJywgJ21vdGlvbkxlYXZlSW1tZWRpYXRlbHknLCAnbW90aW9uRGVhZGxpbmUnLCAncmVtb3ZlT25MZWF2ZScsICdsZWF2ZWRDbGFzc05hbWUnLCAnb25BcHBlYXJTdGFydCcsICdvbkFwcGVhckFjdGl2ZScsICdvbkFwcGVhckVuZCcsICdvbkVudGVyU3RhcnQnLCAnb25FbnRlckFjdGl2ZScsICdvbkVudGVyRW5kJywgJ29uTGVhdmVTdGFydCcsICdvbkxlYXZlQWN0aXZlJywgJ29uTGVhdmVFbmQnXTtcbi8qKlxuICogR2VuZXJhdGUgYSBDU1NNb3Rpb25MaXN0IGNvbXBvbmVudCB3aXRoIGNvbmZpZ1xuICogQHBhcmFtIHRyYW5zaXRpb25TdXBwb3J0IE5vIG5lZWQgc2luY2UgQ1NTTW90aW9uTGlzdCBubyBsb25nZXIgZGVwZW5kcyBvbiB0cmFuc2l0aW9uIHN1cHBvcnRcbiAqIEBwYXJhbSBDU1NNb3Rpb24gQ1NTTW90aW9uIGNvbXBvbmVudFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5DU1NNb3Rpb25MaXN0KHRyYW5zaXRpb25TdXBwb3J0KSB7XG4gIHZhciBDU1NNb3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IE9yaWdpbkNTU01vdGlvbjtcblxuICB2YXIgQ1NTTW90aW9uTGlzdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhDU1NNb3Rpb25MaXN0LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQ1NTTW90aW9uTGlzdCk7XG5cbiAgICBmdW5jdGlvbiBDU1NNb3Rpb25MaXN0KCkge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ1NTTW90aW9uTGlzdCk7XG5cbiAgICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAga2V5RW50aXRpZXM6IFtdXG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5yZW1vdmVLZXkgPSBmdW5jdGlvbiAocmVtb3ZlS2V5KSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgdmFyIGtleUVudGl0aWVzID0gX3JlZi5rZXlFbnRpdGllcztcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2V5RW50aXRpZXM6IGtleUVudGl0aWVzLm1hcChmdW5jdGlvbiAoZW50aXR5KSB7XG4gICAgICAgICAgICAgIGlmIChlbnRpdHkua2V5ICE9PSByZW1vdmVLZXkpIHJldHVybiBlbnRpdHk7XG4gICAgICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGVudGl0eSksIHt9LCB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiBTVEFUVVNfUkVNT1ZFRFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENTU01vdGlvbkxpc3QsIFt7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIga2V5RW50aXRpZXMgPSB0aGlzLnN0YXRlLmtleUVudGl0aWVzO1xuXG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjb21wb25lbnQgPSBfdGhpcyRwcm9wcy5jb21wb25lbnQsXG4gICAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgX29uVmlzaWJsZUNoYW5nZWQgPSBfdGhpcyRwcm9wcy5vblZpc2libGVDaGFuZ2VkLFxuICAgICAgICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF90aGlzJHByb3BzLCBbXCJjb21wb25lbnRcIiwgXCJjaGlsZHJlblwiLCBcIm9uVmlzaWJsZUNoYW5nZWRcIl0pO1xuXG4gICAgICAgIHZhciBDb21wb25lbnQgPSBjb21wb25lbnQgfHwgUmVhY3QuRnJhZ21lbnQ7XG4gICAgICAgIHZhciBtb3Rpb25Qcm9wcyA9IHt9O1xuICAgICAgICBNT1RJT05fUFJPUF9OQU1FUy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgbW90aW9uUHJvcHNbcHJvcF0gPSByZXN0UHJvcHNbcHJvcF07XG4gICAgICAgICAgZGVsZXRlIHJlc3RQcm9wc1twcm9wXTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRlbGV0ZSByZXN0UHJvcHMua2V5cztcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgcmVzdFByb3BzLCBrZXlFbnRpdGllcy5tYXAoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgdmFyIHN0YXR1cyA9IF9yZWYyLnN0YXR1cyxcbiAgICAgICAgICAgICAgZXZlbnRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmMiwgW1wic3RhdHVzXCJdKTtcblxuICAgICAgICAgIHZhciB2aXNpYmxlID0gc3RhdHVzID09PSBTVEFUVVNfQUREIHx8IHN0YXR1cyA9PT0gU1RBVFVTX0tFRVA7XG4gICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENTU01vdGlvbiwgX2V4dGVuZHMoe30sIG1vdGlvblByb3BzLCB7XG4gICAgICAgICAgICBrZXk6IGV2ZW50UHJvcHMua2V5LFxuICAgICAgICAgICAgdmlzaWJsZTogdmlzaWJsZSxcbiAgICAgICAgICAgIGV2ZW50UHJvcHM6IGV2ZW50UHJvcHMsXG4gICAgICAgICAgICBvblZpc2libGVDaGFuZ2VkOiBmdW5jdGlvbiBvblZpc2libGVDaGFuZ2VkKGNoYW5nZWRWaXNpYmxlKSB7XG4gICAgICAgICAgICAgIF9vblZpc2libGVDaGFuZ2VkID09PSBudWxsIHx8IF9vblZpc2libGVDaGFuZ2VkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb25WaXNpYmxlQ2hhbmdlZChjaGFuZ2VkVmlzaWJsZSwge1xuICAgICAgICAgICAgICAgIGtleTogZXZlbnRQcm9wcy5rZXlcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgaWYgKCFjaGFuZ2VkVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIF90aGlzMi5yZW1vdmVLZXkoZXZlbnRQcm9wcy5rZXkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksIGNoaWxkcmVuKTtcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhfcmVmMywgX3JlZjQpIHtcbiAgICAgICAgdmFyIGtleXMgPSBfcmVmMy5rZXlzO1xuICAgICAgICB2YXIga2V5RW50aXRpZXMgPSBfcmVmNC5rZXlFbnRpdGllcztcbiAgICAgICAgdmFyIHBhcnNlZEtleU9iamVjdHMgPSBwYXJzZUtleXMoa2V5cyk7XG4gICAgICAgIHZhciBtaXhlZEtleUVudGl0aWVzID0gZGlmZktleXMoa2V5RW50aXRpZXMsIHBhcnNlZEtleU9iamVjdHMpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtleUVudGl0aWVzOiBtaXhlZEtleUVudGl0aWVzLmZpbHRlcihmdW5jdGlvbiAoZW50aXR5KSB7XG4gICAgICAgICAgICB2YXIgcHJldkVudGl0eSA9IGtleUVudGl0aWVzLmZpbmQoZnVuY3Rpb24gKF9yZWY1KSB7XG4gICAgICAgICAgICAgIHZhciBrZXkgPSBfcmVmNS5rZXk7XG4gICAgICAgICAgICAgIHJldHVybiBlbnRpdHkua2V5ID09PSBrZXk7XG4gICAgICAgICAgICB9KTsgLy8gUmVtb3ZlIGlmIGFscmVhZHkgbWFyayBhcyByZW1vdmVkXG5cbiAgICAgICAgICAgIGlmIChwcmV2RW50aXR5ICYmIHByZXZFbnRpdHkuc3RhdHVzID09PSBTVEFUVVNfUkVNT1ZFRCAmJiBlbnRpdHkuc3RhdHVzID09PSBTVEFUVVNfUkVNT1ZFKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ1NTTW90aW9uTGlzdDtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIENTU01vdGlvbkxpc3QuZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbXBvbmVudDogJ2RpdidcbiAgfTtcbiAgcmV0dXJuIENTU01vdGlvbkxpc3Q7XG59XG5leHBvcnQgZGVmYXVsdCBnZW5DU1NNb3Rpb25MaXN0KHN1cHBvcnRUcmFuc2l0aW9uKTsiLCJpbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX2NyZWF0ZVN1cGVyIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVTdXBlclwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG52YXIgRG9tV3JhcHBlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRG9tV3JhcHBlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihEb21XcmFwcGVyKTtcblxuICBmdW5jdGlvbiBEb21XcmFwcGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEb21XcmFwcGVyKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEb21XcmFwcGVyLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERvbVdyYXBwZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IERvbVdyYXBwZXI7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYW5pbWF0aW9uRW5kTmFtZSwgdHJhbnNpdGlvbkVuZE5hbWUgfSBmcm9tICcuLi91dGlsL21vdGlvbic7XG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHZhciBjYWNoZUVsZW1lbnRSZWYgPSB1c2VSZWYoKTsgLy8gQ2FjaGUgY2FsbGJhY2tcblxuICB2YXIgY2FsbGJhY2tSZWYgPSB1c2VSZWYoY2FsbGJhY2spO1xuICBjYWxsYmFja1JlZi5jdXJyZW50ID0gY2FsbGJhY2s7IC8vIEludGVybmFsIG1vdGlvbiBldmVudCBoYW5kbGVyXG5cbiAgdmFyIG9uSW50ZXJuYWxNb3Rpb25FbmQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjYWxsYmFja1JlZi5jdXJyZW50KGV2ZW50KTtcbiAgfSwgW10pOyAvLyBSZW1vdmUgZXZlbnRzXG5cbiAgZnVuY3Rpb24gcmVtb3ZlTW90aW9uRXZlbnRzKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRyYW5zaXRpb25FbmROYW1lLCBvbkludGVybmFsTW90aW9uRW5kKTtcbiAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmROYW1lLCBvbkludGVybmFsTW90aW9uRW5kKTtcbiAgICB9XG4gIH0gLy8gUGF0Y2ggZXZlbnRzXG5cblxuICBmdW5jdGlvbiBwYXRjaE1vdGlvbkV2ZW50cyhlbGVtZW50KSB7XG4gICAgaWYgKGNhY2hlRWxlbWVudFJlZi5jdXJyZW50ICYmIGNhY2hlRWxlbWVudFJlZi5jdXJyZW50ICE9PSBlbGVtZW50KSB7XG4gICAgICByZW1vdmVNb3Rpb25FdmVudHMoY2FjaGVFbGVtZW50UmVmLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQgIT09IGNhY2hlRWxlbWVudFJlZi5jdXJyZW50KSB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZE5hbWUsIG9uSW50ZXJuYWxNb3Rpb25FbmQpO1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZE5hbWUsIG9uSW50ZXJuYWxNb3Rpb25FbmQpOyAvLyBTYXZlIGFzIGNhY2hlIGluIGNhc2UgZG9tIHJlbW92ZWQgdHJpZ2dlciBieSBgbW90aW9uRGVhZGxpbmVgXG5cbiAgICAgIGNhY2hlRWxlbWVudFJlZi5jdXJyZW50ID0gZWxlbWVudDtcbiAgICB9XG4gIH0gLy8gQ2xlYW4gdXAgd2hlbiByZW1vdmVkXG5cblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZW1vdmVNb3Rpb25FdmVudHMoY2FjaGVFbGVtZW50UmVmLmN1cnJlbnQpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIFtwYXRjaE1vdGlvbkV2ZW50cywgcmVtb3ZlTW90aW9uRXZlbnRzXTtcbn0pOyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNhblVzZURvbSBmcm9tIFwicmMtdXRpbC9lcy9Eb20vY2FuVXNlRG9tXCI7IC8vIEl0J3Mgc2FmZSB0byB1c2UgYHVzZUxheW91dEVmZmVjdGAgYnV0IHRoZSB3YXJuaW5nIGlzIGFubm95aW5nXG5cbnZhciB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gY2FuVXNlRG9tKCkgPyB1c2VMYXlvdXRFZmZlY3QgOiB1c2VFZmZlY3Q7XG5leHBvcnQgZGVmYXVsdCB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCByYWYgZnJvbSBcInJjLXV0aWwvZXMvcmFmXCI7XG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKCkge1xuICB2YXIgbmV4dEZyYW1lUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIGZ1bmN0aW9uIGNhbmNlbE5leHRGcmFtZSgpIHtcbiAgICByYWYuY2FuY2VsKG5leHRGcmFtZVJlZi5jdXJyZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHRGcmFtZShjYWxsYmFjaykge1xuICAgIHZhciBkZWxheSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMjtcbiAgICBjYW5jZWxOZXh0RnJhbWUoKTtcbiAgICB2YXIgbmV4dEZyYW1lSWQgPSByYWYoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGRlbGF5IDw9IDEpIHtcbiAgICAgICAgY2FsbGJhY2soe1xuICAgICAgICAgIGlzQ2FuY2VsZWQ6IGZ1bmN0aW9uIGlzQ2FuY2VsZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dEZyYW1lSWQgIT09IG5leHRGcmFtZVJlZi5jdXJyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0RnJhbWUoY2FsbGJhY2ssIGRlbGF5IC0gMSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbmV4dEZyYW1lUmVmLmN1cnJlbnQgPSBuZXh0RnJhbWVJZDtcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbmNlbE5leHRGcmFtZSgpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIFtuZXh0RnJhbWUsIGNhbmNlbE5leHRGcmFtZV07XG59KTsiLCJpbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU1vdW50U3RhdHVzKGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgZGVzdHJveVJlZiA9IHVzZVJlZihmYWxzZSk7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIHZhbCA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRWYWwgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIGZ1bmN0aW9uIHNldFZhbHVlKG5leHQpIHtcbiAgICBpZiAoIWRlc3Ryb3lSZWYuY3VycmVudCkge1xuICAgICAgc2V0VmFsKG5leHQpO1xuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRlc3Ryb3lSZWYuY3VycmVudCA9IHRydWU7XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gW3ZhbCwgc2V0VmFsdWVdO1xufSIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNUQVRVU19BUFBFQVIsIFNUQVRVU19OT05FLCBTVEFUVVNfTEVBVkUsIFNUQVRVU19FTlRFUiwgU1RFUF9QUkVQQVJFLCBTVEVQX1NUQVJULCBTVEVQX0FDVElWRSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgdXNlU3RhdGUgZnJvbSAnLi91c2VTdGF0ZSc7XG5pbXBvcnQgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCBmcm9tICcuL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QnO1xuaW1wb3J0IHVzZVN0ZXBRdWV1ZSwgeyBEb1N0ZXAsIFNraXBTdGVwLCBpc0FjdGl2ZSB9IGZyb20gJy4vdXNlU3RlcFF1ZXVlJztcbmltcG9ydCB1c2VEb21Nb3Rpb25FdmVudHMgZnJvbSAnLi91c2VEb21Nb3Rpb25FdmVudHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU3RhdHVzKHN1cHBvcnRNb3Rpb24sIHZpc2libGUsIGdldEVsZW1lbnQsIF9yZWYpIHtcbiAgdmFyIF9yZWYkbW90aW9uRW50ZXIgPSBfcmVmLm1vdGlvbkVudGVyLFxuICAgICAgbW90aW9uRW50ZXIgPSBfcmVmJG1vdGlvbkVudGVyID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRtb3Rpb25FbnRlcixcbiAgICAgIF9yZWYkbW90aW9uQXBwZWFyID0gX3JlZi5tb3Rpb25BcHBlYXIsXG4gICAgICBtb3Rpb25BcHBlYXIgPSBfcmVmJG1vdGlvbkFwcGVhciA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYkbW90aW9uQXBwZWFyLFxuICAgICAgX3JlZiRtb3Rpb25MZWF2ZSA9IF9yZWYubW90aW9uTGVhdmUsXG4gICAgICBtb3Rpb25MZWF2ZSA9IF9yZWYkbW90aW9uTGVhdmUgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJG1vdGlvbkxlYXZlLFxuICAgICAgbW90aW9uRGVhZGxpbmUgPSBfcmVmLm1vdGlvbkRlYWRsaW5lLFxuICAgICAgbW90aW9uTGVhdmVJbW1lZGlhdGVseSA9IF9yZWYubW90aW9uTGVhdmVJbW1lZGlhdGVseSxcbiAgICAgIG9uQXBwZWFyUHJlcGFyZSA9IF9yZWYub25BcHBlYXJQcmVwYXJlLFxuICAgICAgb25FbnRlclByZXBhcmUgPSBfcmVmLm9uRW50ZXJQcmVwYXJlLFxuICAgICAgb25MZWF2ZVByZXBhcmUgPSBfcmVmLm9uTGVhdmVQcmVwYXJlLFxuICAgICAgb25BcHBlYXJTdGFydCA9IF9yZWYub25BcHBlYXJTdGFydCxcbiAgICAgIG9uRW50ZXJTdGFydCA9IF9yZWYub25FbnRlclN0YXJ0LFxuICAgICAgb25MZWF2ZVN0YXJ0ID0gX3JlZi5vbkxlYXZlU3RhcnQsXG4gICAgICBvbkFwcGVhckFjdGl2ZSA9IF9yZWYub25BcHBlYXJBY3RpdmUsXG4gICAgICBvbkVudGVyQWN0aXZlID0gX3JlZi5vbkVudGVyQWN0aXZlLFxuICAgICAgb25MZWF2ZUFjdGl2ZSA9IF9yZWYub25MZWF2ZUFjdGl2ZSxcbiAgICAgIG9uQXBwZWFyRW5kID0gX3JlZi5vbkFwcGVhckVuZCxcbiAgICAgIG9uRW50ZXJFbmQgPSBfcmVmLm9uRW50ZXJFbmQsXG4gICAgICBvbkxlYXZlRW5kID0gX3JlZi5vbkxlYXZlRW5kLFxuICAgICAgb25WaXNpYmxlQ2hhbmdlZCA9IF9yZWYub25WaXNpYmxlQ2hhbmdlZDtcblxuICAvLyBVc2VkIGZvciBvdXRlciByZW5kZXIgdXNhZ2UgdG8gYXZvaWQgYHZpc2libGU6IGZhbHNlICYgc3RhdHVzOiBub25lYCB0byByZW5kZXIgbm90aGluZ1xuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgYXN5bmNWaXNpYmxlID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldEFzeW5jVmlzaWJsZSA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZShTVEFUVVNfTk9ORSksXG4gICAgICBfdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMywgMiksXG4gICAgICBzdGF0dXMgPSBfdXNlU3RhdGU0WzBdLFxuICAgICAgc2V0U3RhdHVzID0gX3VzZVN0YXRlNFsxXTtcblxuICB2YXIgX3VzZVN0YXRlNSA9IHVzZVN0YXRlKG51bGwpLFxuICAgICAgX3VzZVN0YXRlNiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTUsIDIpLFxuICAgICAgc3R5bGUgPSBfdXNlU3RhdGU2WzBdLFxuICAgICAgc2V0U3R5bGUgPSBfdXNlU3RhdGU2WzFdO1xuXG4gIHZhciBtb3VudGVkUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgdmFyIGRlYWRsaW5lUmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgZGVzdHJveWVkUmVmID0gdXNlUmVmKGZhbHNlKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09IERvbSBOb2RlID09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBjYWNoZUVsZW1lbnRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgZnVuY3Rpb24gZ2V0RG9tRWxlbWVudCgpIHtcbiAgICB2YXIgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcbiAgICByZXR1cm4gZWxlbWVudCB8fCBjYWNoZUVsZW1lbnRSZWYuY3VycmVudDtcbiAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBNb3Rpb24gRW5kID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICB2YXIgYWN0aXZlUmVmID0gdXNlUmVmKGZhbHNlKTtcblxuICBmdW5jdGlvbiBvbkludGVybmFsTW90aW9uRW5kKGV2ZW50KSB7XG4gICAgdmFyIGVsZW1lbnQgPSBnZXREb21FbGVtZW50KCk7XG5cbiAgICBpZiAoZXZlbnQgJiYgIWV2ZW50LmRlYWRsaW5lICYmIGV2ZW50LnRhcmdldCAhPT0gZWxlbWVudCkge1xuICAgICAgLy8gZXZlbnQgZXhpc3RzXG4gICAgICAvLyBub3QgaW5pdGlhdGVkIGJ5IGRlYWRsaW5lXG4gICAgICAvLyB0cmFuc2l0aW9uRW5kIG5vdCBmaXJlZCBieSBpbm5lciBlbGVtZW50c1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjYW5FbmQ7XG5cbiAgICBpZiAoc3RhdHVzID09PSBTVEFUVVNfQVBQRUFSICYmIGFjdGl2ZVJlZi5jdXJyZW50KSB7XG4gICAgICBjYW5FbmQgPSBvbkFwcGVhckVuZCA9PT0gbnVsbCB8fCBvbkFwcGVhckVuZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25BcHBlYXJFbmQoZWxlbWVudCwgZXZlbnQpO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBTVEFUVVNfRU5URVIgJiYgYWN0aXZlUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNhbkVuZCA9IG9uRW50ZXJFbmQgPT09IG51bGwgfHwgb25FbnRlckVuZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25FbnRlckVuZChlbGVtZW50LCBldmVudCk7XG4gICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IFNUQVRVU19MRUFWRSAmJiBhY3RpdmVSZWYuY3VycmVudCkge1xuICAgICAgY2FuRW5kID0gb25MZWF2ZUVuZCA9PT0gbnVsbCB8fCBvbkxlYXZlRW5kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkxlYXZlRW5kKGVsZW1lbnQsIGV2ZW50KTtcbiAgICB9IC8vIE9ubHkgdXBkYXRlIHN0YXR1cyB3aGVuIGBjYW5FbmRgIGFuZCBub3QgZGVzdHJveWVkXG5cblxuICAgIGlmIChjYW5FbmQgIT09IGZhbHNlICYmICFkZXN0cm95ZWRSZWYuY3VycmVudCkge1xuICAgICAgc2V0U3RhdHVzKFNUQVRVU19OT05FKTtcbiAgICAgIHNldFN0eWxlKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBfdXNlRG9tTW90aW9uRXZlbnRzID0gdXNlRG9tTW90aW9uRXZlbnRzKG9uSW50ZXJuYWxNb3Rpb25FbmQpLFxuICAgICAgX3VzZURvbU1vdGlvbkV2ZW50czIgPSBfc2xpY2VkVG9BcnJheShfdXNlRG9tTW90aW9uRXZlbnRzLCAxKSxcbiAgICAgIHBhdGNoTW90aW9uRXZlbnRzID0gX3VzZURvbU1vdGlvbkV2ZW50czJbMF07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFN0ZXAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIHZhciBldmVudEhhbmRsZXJzID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9yZWYyLCBfcmVmMywgX3JlZjQ7XG5cbiAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgY2FzZSAnYXBwZWFyJzpcbiAgICAgICAgcmV0dXJuIF9yZWYyID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfcmVmMiwgU1RFUF9QUkVQQVJFLCBvbkFwcGVhclByZXBhcmUpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjIsIFNURVBfU1RBUlQsIG9uQXBwZWFyU3RhcnQpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjIsIFNURVBfQUNUSVZFLCBvbkFwcGVhckFjdGl2ZSksIF9yZWYyO1xuXG4gICAgICBjYXNlICdlbnRlcic6XG4gICAgICAgIHJldHVybiBfcmVmMyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX3JlZjMsIFNURVBfUFJFUEFSRSwgb25FbnRlclByZXBhcmUpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjMsIFNURVBfU1RBUlQsIG9uRW50ZXJTdGFydCksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMywgU1RFUF9BQ1RJVkUsIG9uRW50ZXJBY3RpdmUpLCBfcmVmMztcblxuICAgICAgY2FzZSAnbGVhdmUnOlxuICAgICAgICByZXR1cm4gX3JlZjQgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9yZWY0LCBTVEVQX1BSRVBBUkUsIG9uTGVhdmVQcmVwYXJlKSwgX2RlZmluZVByb3BlcnR5KF9yZWY0LCBTVEVQX1NUQVJULCBvbkxlYXZlU3RhcnQpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjQsIFNURVBfQUNUSVZFLCBvbkxlYXZlQWN0aXZlKSwgX3JlZjQ7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH0sIFtzdGF0dXNdKTtcblxuICB2YXIgX3VzZVN0ZXBRdWV1ZSA9IHVzZVN0ZXBRdWV1ZShzdGF0dXMsIGZ1bmN0aW9uIChuZXdTdGVwKSB7XG4gICAgLy8gT25seSBwcmVwYXJlIHN0ZXAgY2FuIGJlIHNraXBcbiAgICBpZiAobmV3U3RlcCA9PT0gU1RFUF9QUkVQQVJFKSB7XG4gICAgICB2YXIgb25QcmVwYXJlID0gZXZlbnRIYW5kbGVyc1tTVEVQX1BSRVBBUkVdO1xuXG4gICAgICBpZiAoIW9uUHJlcGFyZSkge1xuICAgICAgICByZXR1cm4gU2tpcFN0ZXA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvblByZXBhcmUoZ2V0RG9tRWxlbWVudCgpKTtcbiAgICB9IC8vIFJlc3Qgc3RlcCBpcyBzeW5jIHVwZGF0ZVxuXG5cbiAgICAvLyBSZXN0IHN0ZXAgaXMgc3luYyB1cGRhdGVcbiAgICBpZiAoc3RlcCBpbiBldmVudEhhbmRsZXJzKSB7XG4gICAgICB2YXIgX2V2ZW50SGFuZGxlcnMkc3RlcDtcblxuICAgICAgc2V0U3R5bGUoKChfZXZlbnRIYW5kbGVycyRzdGVwID0gZXZlbnRIYW5kbGVyc1tzdGVwXSkgPT09IG51bGwgfHwgX2V2ZW50SGFuZGxlcnMkc3RlcCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2V2ZW50SGFuZGxlcnMkc3RlcC5jYWxsKGV2ZW50SGFuZGxlcnMsIGdldERvbUVsZW1lbnQoKSwgbnVsbCkpIHx8IG51bGwpO1xuICAgIH1cblxuICAgIGlmIChzdGVwID09PSBTVEVQX0FDVElWRSkge1xuICAgICAgLy8gUGF0Y2ggZXZlbnRzIHdoZW4gbW90aW9uIG5lZWRlZFxuICAgICAgcGF0Y2hNb3Rpb25FdmVudHMoZ2V0RG9tRWxlbWVudCgpKTtcblxuICAgICAgaWYgKG1vdGlvbkRlYWRsaW5lID4gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoZGVhZGxpbmVSZWYuY3VycmVudCk7XG4gICAgICAgIGRlYWRsaW5lUmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBvbkludGVybmFsTW90aW9uRW5kKHtcbiAgICAgICAgICAgIGRlYWRsaW5lOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIG1vdGlvbkRlYWRsaW5lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gRG9TdGVwO1xuICB9KSxcbiAgICAgIF91c2VTdGVwUXVldWUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0ZXBRdWV1ZSwgMiksXG4gICAgICBzdGFydFN0ZXAgPSBfdXNlU3RlcFF1ZXVlMlswXSxcbiAgICAgIHN0ZXAgPSBfdXNlU3RlcFF1ZXVlMlsxXTtcblxuICB2YXIgYWN0aXZlID0gaXNBY3RpdmUoc3RlcCk7XG4gIGFjdGl2ZVJlZi5jdXJyZW50ID0gYWN0aXZlOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IFN0YXR1cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIFVwZGF0ZSB3aXRoIG5ldyBzdGF0dXNcblxuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBzZXRBc3luY1Zpc2libGUodmlzaWJsZSk7XG4gICAgdmFyIGlzTW91bnRlZCA9IG1vdW50ZWRSZWYuY3VycmVudDtcbiAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuXG4gICAgaWYgKCFzdXBwb3J0TW90aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRTdGF0dXM7IC8vIEFwcGVhclxuXG4gICAgaWYgKCFpc01vdW50ZWQgJiYgdmlzaWJsZSAmJiBtb3Rpb25BcHBlYXIpIHtcbiAgICAgIG5leHRTdGF0dXMgPSBTVEFUVVNfQVBQRUFSO1xuICAgIH0gLy8gRW50ZXJcblxuXG4gICAgaWYgKGlzTW91bnRlZCAmJiB2aXNpYmxlICYmIG1vdGlvbkVudGVyKSB7XG4gICAgICBuZXh0U3RhdHVzID0gU1RBVFVTX0VOVEVSO1xuICAgIH0gLy8gTGVhdmVcblxuXG4gICAgaWYgKGlzTW91bnRlZCAmJiAhdmlzaWJsZSAmJiBtb3Rpb25MZWF2ZSB8fCAhaXNNb3VudGVkICYmIG1vdGlvbkxlYXZlSW1tZWRpYXRlbHkgJiYgIXZpc2libGUgJiYgbW90aW9uTGVhdmUpIHtcbiAgICAgIG5leHRTdGF0dXMgPSBTVEFUVVNfTEVBVkU7XG4gICAgfSAvLyBVcGRhdGUgdG8gbmV4dCBzdGF0dXNcblxuXG4gICAgaWYgKG5leHRTdGF0dXMpIHtcbiAgICAgIHNldFN0YXR1cyhuZXh0U3RhdHVzKTtcbiAgICAgIHN0YXJ0U3RlcCgpO1xuICAgIH1cbiAgfSwgW3Zpc2libGVdKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBFZmZlY3QgPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBSZXNldCB3aGVuIG1vdGlvbiBjaGFuZ2VkXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIC8vIENhbmNlbCBhcHBlYXJcbiAgICBzdGF0dXMgPT09IFNUQVRVU19BUFBFQVIgJiYgIW1vdGlvbkFwcGVhciB8fCAvLyBDYW5jZWwgZW50ZXJcbiAgICBzdGF0dXMgPT09IFNUQVRVU19FTlRFUiAmJiAhbW90aW9uRW50ZXIgfHwgLy8gQ2FuY2VsIGxlYXZlXG4gICAgc3RhdHVzID09PSBTVEFUVVNfTEVBVkUgJiYgIW1vdGlvbkxlYXZlKSB7XG4gICAgICBzZXRTdGF0dXMoU1RBVFVTX05PTkUpO1xuICAgIH1cbiAgfSwgW21vdGlvbkFwcGVhciwgbW90aW9uRW50ZXIsIG1vdGlvbkxlYXZlXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNsZWFyVGltZW91dChkZWFkbGluZVJlZi5jdXJyZW50KTtcbiAgICAgIGRlc3Ryb3llZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICB9O1xuICB9LCBbXSk7IC8vIFRyaWdnZXIgYG9uVmlzaWJsZUNoYW5nZWRgXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoYXN5bmNWaXNpYmxlICE9PSB1bmRlZmluZWQgJiYgc3RhdHVzID09PSBTVEFUVVNfTk9ORSkge1xuICAgICAgb25WaXNpYmxlQ2hhbmdlZCA9PT0gbnVsbCB8fCBvblZpc2libGVDaGFuZ2VkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvblZpc2libGVDaGFuZ2VkKGFzeW5jVmlzaWJsZSk7XG4gICAgfVxuICB9LCBbYXN5bmNWaXNpYmxlLCBzdGF0dXNdKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTdHlsZXMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBtZXJnZWRTdHlsZSA9IHN0eWxlO1xuXG4gIGlmIChldmVudEhhbmRsZXJzW1NURVBfUFJFUEFSRV0gJiYgc3RlcCA9PT0gU1RFUF9TVEFSVCkge1xuICAgIG1lcmdlZFN0eWxlID0gX29iamVjdFNwcmVhZCh7XG4gICAgICB0cmFuc2l0aW9uOiAnbm9uZSdcbiAgICB9LCBtZXJnZWRTdHlsZSk7XG4gIH1cblxuICByZXR1cm4gW3N0YXR1cywgc3RlcCwgbWVyZ2VkU3R5bGUsIGFzeW5jVmlzaWJsZSAhPT0gbnVsbCAmJiBhc3luY1Zpc2libGUgIT09IHZvaWQgMCA/IGFzeW5jVmlzaWJsZSA6IHZpc2libGVdO1xufSIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU1RFUF9QUkVQQVJFLCBTVEVQX0FDVElWRSwgU1RFUF9TVEFSVCwgU1RFUF9BQ1RJVkFURUQsIFNURVBfTk9ORSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCBmcm9tICcuL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QnO1xuaW1wb3J0IHVzZU5leHRGcmFtZSBmcm9tICcuL3VzZU5leHRGcmFtZSc7XG52YXIgU1RFUF9RVUVVRSA9IFtTVEVQX1BSRVBBUkUsIFNURVBfU1RBUlQsIFNURVBfQUNUSVZFLCBTVEVQX0FDVElWQVRFRF07XG4vKiogU2tpcCBjdXJyZW50IHN0ZXAgKi9cblxuZXhwb3J0IHZhciBTa2lwU3RlcCA9IGZhbHNlO1xuLyoqIEN1cnJlbnQgc3RlcCBzaG91bGQgYmUgdXBkYXRlIGluICovXG5cbmV4cG9ydCB2YXIgRG9TdGVwID0gdHJ1ZTtcbmV4cG9ydCBmdW5jdGlvbiBpc0FjdGl2ZShzdGVwKSB7XG4gIHJldHVybiBzdGVwID09PSBTVEVQX0FDVElWRSB8fCBzdGVwID09PSBTVEVQX0FDVElWQVRFRDtcbn1cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoc3RhdHVzLCBjYWxsYmFjaykge1xuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoU1RFUF9OT05FKSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgICAgc3RlcCA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRTdGVwID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgX3VzZU5leHRGcmFtZSA9IHVzZU5leHRGcmFtZSgpLFxuICAgICAgX3VzZU5leHRGcmFtZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlTmV4dEZyYW1lLCAyKSxcbiAgICAgIG5leHRGcmFtZSA9IF91c2VOZXh0RnJhbWUyWzBdLFxuICAgICAgY2FuY2VsTmV4dEZyYW1lID0gX3VzZU5leHRGcmFtZTJbMV07XG5cbiAgZnVuY3Rpb24gc3RhcnRRdWV1ZSgpIHtcbiAgICBzZXRTdGVwKFNURVBfUFJFUEFSRSk7XG4gIH1cblxuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc3RlcCAhPT0gU1RFUF9OT05FICYmIHN0ZXAgIT09IFNURVBfQUNUSVZBVEVEKSB7XG4gICAgICB2YXIgaW5kZXggPSBTVEVQX1FVRVVFLmluZGV4T2Yoc3RlcCk7XG4gICAgICB2YXIgbmV4dFN0ZXAgPSBTVEVQX1FVRVVFW2luZGV4ICsgMV07XG4gICAgICB2YXIgcmVzdWx0ID0gY2FsbGJhY2soc3RlcCk7XG5cbiAgICAgIGlmIChyZXN1bHQgPT09IFNraXBTdGVwKSB7XG4gICAgICAgIC8vIFNraXAgd2hlbiBubyBuZWVkZWRcbiAgICAgICAgc2V0U3RlcChuZXh0U3RlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEbyBhcyBmcmFtZSBmb3Igc3RlcCB1cGRhdGVcbiAgICAgICAgbmV4dEZyYW1lKGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgICAgZnVuY3Rpb24gZG9OZXh0KCkge1xuICAgICAgICAgICAgLy8gU2tpcCBzaW5jZSBjdXJyZW50IHF1ZXVlIGlzIG9vZFxuICAgICAgICAgICAgaWYgKGluZm8uaXNDYW5jZWxlZCgpKSByZXR1cm47XG4gICAgICAgICAgICBzZXRTdGVwKG5leHRTdGVwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBkb05leHQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gT25seSBwcm9taXNlIHNob3VsZCBiZSBhc3luY1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCkudGhlbihkb05leHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbc3RhdHVzLCBzdGVwXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbmNlbE5leHRGcmFtZSgpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIFtzdGFydFF1ZXVlLCBzdGVwXTtcbn0pOyIsImltcG9ydCBDU1NNb3Rpb24gZnJvbSAnLi9DU1NNb3Rpb24nO1xuaW1wb3J0IENTU01vdGlvbkxpc3QgZnJvbSAnLi9DU1NNb3Rpb25MaXN0JztcbmV4cG9ydCB7IENTU01vdGlvbkxpc3QgfTtcbmV4cG9ydCBkZWZhdWx0IENTU01vdGlvbjsiLCJleHBvcnQgdmFyIFNUQVRVU19OT05FID0gJ25vbmUnO1xuZXhwb3J0IHZhciBTVEFUVVNfQVBQRUFSID0gJ2FwcGVhcic7XG5leHBvcnQgdmFyIFNUQVRVU19FTlRFUiA9ICdlbnRlcic7XG5leHBvcnQgdmFyIFNUQVRVU19MRUFWRSA9ICdsZWF2ZSc7XG5leHBvcnQgdmFyIFNURVBfTk9ORSA9ICdub25lJztcbmV4cG9ydCB2YXIgU1RFUF9QUkVQQVJFID0gJ3ByZXBhcmUnO1xuZXhwb3J0IHZhciBTVEVQX1NUQVJUID0gJ3N0YXJ0JztcbmV4cG9ydCB2YXIgU1RFUF9BQ1RJVkUgPSAnYWN0aXZlJztcbmV4cG9ydCB2YXIgU1RFUF9BQ1RJVkFURUQgPSAnZW5kJzsiLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuZXhwb3J0IHZhciBTVEFUVVNfQUREID0gJ2FkZCc7XG5leHBvcnQgdmFyIFNUQVRVU19LRUVQID0gJ2tlZXAnO1xuZXhwb3J0IHZhciBTVEFUVVNfUkVNT1ZFID0gJ3JlbW92ZSc7XG5leHBvcnQgdmFyIFNUQVRVU19SRU1PVkVEID0gJ3JlbW92ZWQnO1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXBLZXlUb09iamVjdChrZXkpIHtcbiAgdmFyIGtleU9iajtcblxuICBpZiAoa2V5ICYmIF90eXBlb2Yoa2V5KSA9PT0gJ29iamVjdCcgJiYgJ2tleScgaW4ga2V5KSB7XG4gICAga2V5T2JqID0ga2V5O1xuICB9IGVsc2Uge1xuICAgIGtleU9iaiA9IHtcbiAgICAgIGtleToga2V5XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGtleU9iaiksIHt9LCB7XG4gICAga2V5OiBTdHJpbmcoa2V5T2JqLmtleSlcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VLZXlzKCkge1xuICB2YXIga2V5cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG4gIHJldHVybiBrZXlzLm1hcCh3cmFwS2V5VG9PYmplY3QpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZLZXlzKCkge1xuICB2YXIgcHJldktleXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuICB2YXIgY3VycmVudEtleXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFtdO1xuICB2YXIgbGlzdCA9IFtdO1xuICB2YXIgY3VycmVudEluZGV4ID0gMDtcbiAgdmFyIGN1cnJlbnRMZW4gPSBjdXJyZW50S2V5cy5sZW5ndGg7XG4gIHZhciBwcmV2S2V5T2JqZWN0cyA9IHBhcnNlS2V5cyhwcmV2S2V5cyk7XG4gIHZhciBjdXJyZW50S2V5T2JqZWN0cyA9IHBhcnNlS2V5cyhjdXJyZW50S2V5cyk7IC8vIENoZWNrIHByZXYga2V5cyB0byBpbnNlcnQgb3Iga2VlcFxuXG4gIHByZXZLZXlPYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKGtleU9iaikge1xuICAgIHZhciBoaXQgPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGkgPSBjdXJyZW50SW5kZXg7IGkgPCBjdXJyZW50TGVuOyBpICs9IDEpIHtcbiAgICAgIHZhciBjdXJyZW50S2V5T2JqID0gY3VycmVudEtleU9iamVjdHNbaV07XG5cbiAgICAgIGlmIChjdXJyZW50S2V5T2JqLmtleSA9PT0ga2V5T2JqLmtleSkge1xuICAgICAgICAvLyBOZXcgYWRkZWQga2V5cyBzaG91bGQgYWRkIGJlZm9yZSBjdXJyZW50IGtleVxuICAgICAgICBpZiAoY3VycmVudEluZGV4IDwgaSkge1xuICAgICAgICAgIGxpc3QgPSBsaXN0LmNvbmNhdChjdXJyZW50S2V5T2JqZWN0cy5zbGljZShjdXJyZW50SW5kZXgsIGkpLm1hcChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBvYmopLCB7fSwge1xuICAgICAgICAgICAgICBzdGF0dXM6IFNUQVRVU19BRERcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgICBjdXJyZW50SW5kZXggPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgY3VycmVudEtleU9iaiksIHt9LCB7XG4gICAgICAgICAgc3RhdHVzOiBTVEFUVVNfS0VFUFxuICAgICAgICB9KSk7XG4gICAgICAgIGN1cnJlbnRJbmRleCArPSAxO1xuICAgICAgICBoaXQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IC8vIElmIG5vdCBoaXQsIGl0IG1lYW5zIGtleSBpcyByZW1vdmVkXG5cblxuICAgIGlmICghaGl0KSB7XG4gICAgICBsaXN0LnB1c2goX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBrZXlPYmopLCB7fSwge1xuICAgICAgICBzdGF0dXM6IFNUQVRVU19SRU1PVkVcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0pOyAvLyBBZGQgcmVzdCB0byB0aGUgbGlzdFxuXG4gIGlmIChjdXJyZW50SW5kZXggPCBjdXJyZW50TGVuKSB7XG4gICAgbGlzdCA9IGxpc3QuY29uY2F0KGN1cnJlbnRLZXlPYmplY3RzLnNsaWNlKGN1cnJlbnRJbmRleCkubWFwKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIG9iaiksIHt9LCB7XG4gICAgICAgIHN0YXR1czogU1RBVFVTX0FERFxuICAgICAgfSk7XG4gICAgfSkpO1xuICB9XG4gIC8qKlxuICAgKiBNZXJnZSBzYW1lIGtleSB3aGVuIGl0IHJlbW92ZSBhbmQgYWRkIGFnYWluOlxuICAgKiAgICBbMSAtIGFkZCwgMiAtIGtlZXAsIDEgLSByZW1vdmVdIC0+IFsxIC0ga2VlcCwgMiAtIGtlZXBdXG4gICAqL1xuXG5cbiAgdmFyIGtleXMgPSB7fTtcbiAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGtleSA9IF9yZWYua2V5O1xuICAgIGtleXNba2V5XSA9IChrZXlzW2tleV0gfHwgMCkgKyAxO1xuICB9KTtcbiAgdmFyIGR1cGxpY2F0ZWRLZXlzID0gT2JqZWN0LmtleXMoa2V5cykuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4ga2V5c1trZXldID4gMTtcbiAgfSk7XG4gIGR1cGxpY2F0ZWRLZXlzLmZvckVhY2goZnVuY3Rpb24gKG1hdGNoS2V5KSB7XG4gICAgLy8gUmVtb3ZlIGBTVEFUVVNfUkVNT1ZFYCBub2RlLlxuICAgIGxpc3QgPSBsaXN0LmZpbHRlcihmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgIHZhciBrZXkgPSBfcmVmMi5rZXksXG4gICAgICAgICAgc3RhdHVzID0gX3JlZjIuc3RhdHVzO1xuICAgICAgcmV0dXJuIGtleSAhPT0gbWF0Y2hLZXkgfHwgc3RhdHVzICE9PSBTVEFUVVNfUkVNT1ZFO1xuICAgIH0pOyAvLyBVcGRhdGUgYFNUQVRVU19BRERgIHRvIGBTVEFUVVNfS0VFUGBcblxuICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgaWYgKG5vZGUua2V5ID09PSBtYXRjaEtleSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgbm9kZS5zdGF0dXMgPSBTVEFUVVNfS0VFUDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBsaXN0O1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCBjYW5Vc2VET00gZnJvbSBcInJjLXV0aWwvZXMvRG9tL2NhblVzZURvbVwiOyAvLyA9PT09PT09PT09PT09PT09PSBUcmFuc2l0aW9uID09PT09PT09PT09PT09PT09XG4vLyBFdmVudCB3cmFwcGVyLiBDb3B5IGZyb20gcmVhY3Qgc291cmNlIGNvZGVcblxuZnVuY3Rpb24gbWFrZVByZWZpeE1hcChzdHlsZVByb3AsIGV2ZW50TmFtZSkge1xuICB2YXIgcHJlZml4ZXMgPSB7fTtcbiAgcHJlZml4ZXNbc3R5bGVQcm9wLnRvTG93ZXJDYXNlKCldID0gZXZlbnROYW1lLnRvTG93ZXJDYXNlKCk7XG4gIHByZWZpeGVzW1wiV2Via2l0XCIuY29uY2F0KHN0eWxlUHJvcCldID0gXCJ3ZWJraXRcIi5jb25jYXQoZXZlbnROYW1lKTtcbiAgcHJlZml4ZXNbXCJNb3pcIi5jb25jYXQoc3R5bGVQcm9wKV0gPSBcIm1velwiLmNvbmNhdChldmVudE5hbWUpO1xuICBwcmVmaXhlc1tcIm1zXCIuY29uY2F0KHN0eWxlUHJvcCldID0gXCJNU1wiLmNvbmNhdChldmVudE5hbWUpO1xuICBwcmVmaXhlc1tcIk9cIi5jb25jYXQoc3R5bGVQcm9wKV0gPSBcIm9cIi5jb25jYXQoZXZlbnROYW1lLnRvTG93ZXJDYXNlKCkpO1xuICByZXR1cm4gcHJlZml4ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWZW5kb3JQcmVmaXhlcyhkb21TdXBwb3J0LCB3aW4pIHtcbiAgdmFyIHByZWZpeGVzID0ge1xuICAgIGFuaW1hdGlvbmVuZDogbWFrZVByZWZpeE1hcCgnQW5pbWF0aW9uJywgJ0FuaW1hdGlvbkVuZCcpLFxuICAgIHRyYW5zaXRpb25lbmQ6IG1ha2VQcmVmaXhNYXAoJ1RyYW5zaXRpb24nLCAnVHJhbnNpdGlvbkVuZCcpXG4gIH07XG5cbiAgaWYgKGRvbVN1cHBvcnQpIHtcbiAgICBpZiAoISgnQW5pbWF0aW9uRXZlbnQnIGluIHdpbikpIHtcbiAgICAgIGRlbGV0ZSBwcmVmaXhlcy5hbmltYXRpb25lbmQuYW5pbWF0aW9uO1xuICAgIH1cblxuICAgIGlmICghKCdUcmFuc2l0aW9uRXZlbnQnIGluIHdpbikpIHtcbiAgICAgIGRlbGV0ZSBwcmVmaXhlcy50cmFuc2l0aW9uZW5kLnRyYW5zaXRpb247XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByZWZpeGVzO1xufVxudmFyIHZlbmRvclByZWZpeGVzID0gZ2V0VmVuZG9yUHJlZml4ZXMoY2FuVXNlRE9NKCksIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge30pO1xudmFyIHN0eWxlID0ge307XG5cbmlmIChjYW5Vc2VET00oKSkge1xuICB2YXIgX2RvY3VtZW50JGNyZWF0ZUVsZW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgc3R5bGUgPSBfZG9jdW1lbnQkY3JlYXRlRWxlbWUuc3R5bGU7XG59XG5cbnZhciBwcmVmaXhlZEV2ZW50TmFtZXMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRWZW5kb3JQcmVmaXhlZEV2ZW50TmFtZShldmVudE5hbWUpIHtcbiAgaWYgKHByZWZpeGVkRXZlbnROYW1lc1tldmVudE5hbWVdKSB7XG4gICAgcmV0dXJuIHByZWZpeGVkRXZlbnROYW1lc1tldmVudE5hbWVdO1xuICB9XG5cbiAgdmFyIHByZWZpeE1hcCA9IHZlbmRvclByZWZpeGVzW2V2ZW50TmFtZV07XG5cbiAgaWYgKHByZWZpeE1hcCkge1xuICAgIHZhciBzdHlsZVByb3BMaXN0ID0gT2JqZWN0LmtleXMocHJlZml4TWFwKTtcbiAgICB2YXIgbGVuID0gc3R5bGVQcm9wTGlzdC5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICB2YXIgc3R5bGVQcm9wID0gc3R5bGVQcm9wTGlzdFtpXTtcblxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcmVmaXhNYXAsIHN0eWxlUHJvcCkgJiYgc3R5bGVQcm9wIGluIHN0eWxlKSB7XG4gICAgICAgIHByZWZpeGVkRXZlbnROYW1lc1tldmVudE5hbWVdID0gcHJlZml4TWFwW3N0eWxlUHJvcF07XG4gICAgICAgIHJldHVybiBwcmVmaXhlZEV2ZW50TmFtZXNbZXZlbnROYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG52YXIgaW50ZXJuYWxBbmltYXRpb25FbmROYW1lID0gZ2V0VmVuZG9yUHJlZml4ZWRFdmVudE5hbWUoJ2FuaW1hdGlvbmVuZCcpO1xudmFyIGludGVybmFsVHJhbnNpdGlvbkVuZE5hbWUgPSBnZXRWZW5kb3JQcmVmaXhlZEV2ZW50TmFtZSgndHJhbnNpdGlvbmVuZCcpO1xuZXhwb3J0IHZhciBzdXBwb3J0VHJhbnNpdGlvbiA9ICEhKGludGVybmFsQW5pbWF0aW9uRW5kTmFtZSAmJiBpbnRlcm5hbFRyYW5zaXRpb25FbmROYW1lKTtcbmV4cG9ydCB2YXIgYW5pbWF0aW9uRW5kTmFtZSA9IGludGVybmFsQW5pbWF0aW9uRW5kTmFtZSB8fCAnYW5pbWF0aW9uZW5kJztcbmV4cG9ydCB2YXIgdHJhbnNpdGlvbkVuZE5hbWUgPSBpbnRlcm5hbFRyYW5zaXRpb25FbmROYW1lIHx8ICd0cmFuc2l0aW9uZW5kJztcbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2l0aW9uTmFtZSh0cmFuc2l0aW9uTmFtZSwgdHJhbnNpdGlvblR5cGUpIHtcbiAgaWYgKCF0cmFuc2l0aW9uTmFtZSkgcmV0dXJuIG51bGw7XG5cbiAgaWYgKF90eXBlb2YodHJhbnNpdGlvbk5hbWUpID09PSAnb2JqZWN0Jykge1xuICAgIHZhciB0eXBlID0gdHJhbnNpdGlvblR5cGUucmVwbGFjZSgvLVxcdy9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiBtYXRjaFsxXS50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiB0cmFuc2l0aW9uTmFtZVt0eXBlXTtcbiAgfVxuXG4gIHJldHVybiBcIlwiLmNvbmNhdCh0cmFuc2l0aW9uTmFtZSwgXCItXCIpLmNvbmNhdCh0cmFuc2l0aW9uVHlwZSk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX2NyZWF0ZVN1cGVyIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVTdXBlclwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGFkZEV2ZW50TGlzdGVuZXIgZnJvbSBcInJjLXV0aWwvZXMvRG9tL2FkZEV2ZW50TGlzdGVuZXJcIjtcblxudmFyIEhhbmRsZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoSGFuZGxlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEhhbmRsZSk7XG5cbiAgZnVuY3Rpb24gSGFuZGxlKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIYW5kbGUpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNsaWNrRm9jdXNlZDogZmFsc2VcbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0SGFuZGxlUmVmID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIF90aGlzLmhhbmRsZSA9IG5vZGU7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZU1vdXNlVXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gX3RoaXMuaGFuZGxlKSB7XG4gICAgICAgIF90aGlzLnNldENsaWNrRm9jdXModHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZU1vdXNlRG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAvLyBhdm9pZCBzZWxlY3RpbmcgdGV4dCBkdXJpbmcgZHJhZ1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMjUwMTBcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gZml4IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE1MzI0XG5cbiAgICAgIF90aGlzLmZvY3VzKCk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUJsdXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zZXRDbGlja0ZvY3VzKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldENsaWNrRm9jdXMoZmFsc2UpO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSGFuZGxlLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIC8vIG1vdXNldXAgd29uJ3QgdHJpZ2dlciBpZiBtb3VzZSBtb3ZlZCBvdXQgb2YgaGFuZGxlLFxuICAgICAgLy8gc28gd2UgbGlzdGVuIG9uIGRvY3VtZW50IGhlcmUuXG4gICAgICB0aGlzLm9uTW91c2VVcExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgJ21vdXNldXAnLCB0aGlzLmhhbmRsZU1vdXNlVXApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLm9uTW91c2VVcExpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMub25Nb3VzZVVwTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldENsaWNrRm9jdXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Q2xpY2tGb2N1cyhmb2N1c2VkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY2xpY2tGb2N1c2VkOiBmb2N1c2VkXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xpY2tGb2N1c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGlja0ZvY3VzKCkge1xuICAgICAgdGhpcy5zZXRDbGlja0ZvY3VzKHRydWUpO1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb2N1c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgIHRoaXMuaGFuZGxlLmZvY3VzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJsdXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmx1cigpIHtcbiAgICAgIHRoaXMuaGFuZGxlLmJsdXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcmVmLCBfcmVmMjtcblxuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgdmVydGljYWwgPSBfdGhpcyRwcm9wcy52ZXJ0aWNhbCxcbiAgICAgICAgICByZXZlcnNlID0gX3RoaXMkcHJvcHMucmV2ZXJzZSxcbiAgICAgICAgICBvZmZzZXQgPSBfdGhpcyRwcm9wcy5vZmZzZXQsXG4gICAgICAgICAgc3R5bGUgPSBfdGhpcyRwcm9wcy5zdHlsZSxcbiAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgIG1pbiA9IF90aGlzJHByb3BzLm1pbixcbiAgICAgICAgICBtYXggPSBfdGhpcyRwcm9wcy5tYXgsXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRwcm9wcy52YWx1ZSxcbiAgICAgICAgICB0YWJJbmRleCA9IF90aGlzJHByb3BzLnRhYkluZGV4LFxuICAgICAgICAgIGFyaWFMYWJlbCA9IF90aGlzJHByb3BzLmFyaWFMYWJlbCxcbiAgICAgICAgICBhcmlhTGFiZWxsZWRCeSA9IF90aGlzJHByb3BzLmFyaWFMYWJlbGxlZEJ5LFxuICAgICAgICAgIGFyaWFWYWx1ZVRleHRGb3JtYXR0ZXIgPSBfdGhpcyRwcm9wcy5hcmlhVmFsdWVUZXh0Rm9ybWF0dGVyLFxuICAgICAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfdGhpcyRwcm9wcywgW1wicHJlZml4Q2xzXCIsIFwidmVydGljYWxcIiwgXCJyZXZlcnNlXCIsIFwib2Zmc2V0XCIsIFwic3R5bGVcIiwgXCJkaXNhYmxlZFwiLCBcIm1pblwiLCBcIm1heFwiLCBcInZhbHVlXCIsIFwidGFiSW5kZXhcIiwgXCJhcmlhTGFiZWxcIiwgXCJhcmlhTGFiZWxsZWRCeVwiLCBcImFyaWFWYWx1ZVRleHRGb3JtYXR0ZXJcIl0pO1xuXG4gICAgICB2YXIgY2xhc3NOYW1lID0gY2xhc3NOYW1lcyh0aGlzLnByb3BzLmNsYXNzTmFtZSwgX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWhhbmRsZS1jbGljay1mb2N1c2VkXCIpLCB0aGlzLnN0YXRlLmNsaWNrRm9jdXNlZCkpO1xuICAgICAgdmFyIHBvc2l0aW9uU3R5bGUgPSB2ZXJ0aWNhbCA/IChfcmVmID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfcmVmLCByZXZlcnNlID8gJ3RvcCcgOiAnYm90dG9tJywgXCJcIi5jb25jYXQob2Zmc2V0LCBcIiVcIikpLCBfZGVmaW5lUHJvcGVydHkoX3JlZiwgcmV2ZXJzZSA/ICdib3R0b20nIDogJ3RvcCcsICdhdXRvJyksIF9kZWZpbmVQcm9wZXJ0eShfcmVmLCBcInRyYW5zZm9ybVwiLCByZXZlcnNlID8gbnVsbCA6IFwidHJhbnNsYXRlWSgrNTAlKVwiKSwgX3JlZikgOiAoX3JlZjIgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9yZWYyLCByZXZlcnNlID8gJ3JpZ2h0JyA6ICdsZWZ0JywgXCJcIi5jb25jYXQob2Zmc2V0LCBcIiVcIikpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjIsIHJldmVyc2UgPyAnbGVmdCcgOiAncmlnaHQnLCAnYXV0bycpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjIsIFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlWChcIi5jb25jYXQocmV2ZXJzZSA/ICcrJyA6ICctJywgXCI1MCUpXCIpKSwgX3JlZjIpO1xuXG4gICAgICB2YXIgZWxTdHlsZSA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3R5bGUpLCBwb3NpdGlvblN0eWxlKTtcblxuICAgICAgdmFyIG1lcmdlZFRhYkluZGV4ID0gdGFiSW5kZXggfHwgMDtcblxuICAgICAgaWYgKGRpc2FibGVkIHx8IHRhYkluZGV4ID09PSBudWxsKSB7XG4gICAgICAgIG1lcmdlZFRhYkluZGV4ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIGFyaWFWYWx1ZVRleHQ7XG5cbiAgICAgIGlmIChhcmlhVmFsdWVUZXh0Rm9ybWF0dGVyKSB7XG4gICAgICAgIGFyaWFWYWx1ZVRleHQgPSBhcmlhVmFsdWVUZXh0Rm9ybWF0dGVyKHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICAgICAgcmVmOiB0aGlzLnNldEhhbmRsZVJlZixcbiAgICAgICAgdGFiSW5kZXg6IG1lcmdlZFRhYkluZGV4XG4gICAgICB9LCByZXN0UHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlOiBlbFN0eWxlLFxuICAgICAgICBvbkJsdXI6IHRoaXMuaGFuZGxlQmx1cixcbiAgICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG4gICAgICAgIG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZU1vdXNlRG93biAvLyBhcmlhIGF0dHJpYnV0ZVxuICAgICAgICAsXG4gICAgICAgIHJvbGU6IFwic2xpZGVyXCIsXG4gICAgICAgIFwiYXJpYS12YWx1ZW1pblwiOiBtaW4sXG4gICAgICAgIFwiYXJpYS12YWx1ZW1heFwiOiBtYXgsXG4gICAgICAgIFwiYXJpYS12YWx1ZW5vd1wiOiB2YWx1ZSxcbiAgICAgICAgXCJhcmlhLWRpc2FibGVkXCI6ICEhZGlzYWJsZWQsXG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiBhcmlhTGFiZWwsXG4gICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGFyaWFMYWJlbGxlZEJ5LFxuICAgICAgICBcImFyaWEtdmFsdWV0ZXh0XCI6IGFyaWFWYWx1ZVRleHRcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSGFuZGxlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgeyBIYW5kbGUgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXlcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNcIjtcbmltcG9ydCBfY3JlYXRlU3VwZXIgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZVN1cGVyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi9jb21tb24vVHJhY2snO1xuaW1wb3J0IGNyZWF0ZVNsaWRlciBmcm9tICcuL2NvbW1vbi9jcmVhdGVTbGlkZXInO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbnZhciBfdHJpbUFsaWduVmFsdWUgPSBmdW5jdGlvbiB0cmltQWxpZ25WYWx1ZShfcmVmKSB7XG4gIHZhciB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICBoYW5kbGUgPSBfcmVmLmhhbmRsZSxcbiAgICAgIGJvdW5kcyA9IF9yZWYuYm91bmRzLFxuICAgICAgcHJvcHMgPSBfcmVmLnByb3BzO1xuICB2YXIgYWxsb3dDcm9zcyA9IHByb3BzLmFsbG93Q3Jvc3MsXG4gICAgICBwdXNoYWJsZSA9IHByb3BzLnB1c2hhYmxlO1xuICB2YXIgdGhlcnNob2xkID0gTnVtYmVyKHB1c2hhYmxlKTtcbiAgdmFyIHZhbEluUmFuZ2UgPSB1dGlscy5lbnN1cmVWYWx1ZUluUmFuZ2UodmFsdWUsIHByb3BzKTtcbiAgdmFyIHZhbE5vdENvbmZsaWN0ID0gdmFsSW5SYW5nZTtcblxuICBpZiAoIWFsbG93Q3Jvc3MgJiYgaGFuZGxlICE9IG51bGwgJiYgYm91bmRzICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoaGFuZGxlID4gMCAmJiB2YWxJblJhbmdlIDw9IGJvdW5kc1toYW5kbGUgLSAxXSArIHRoZXJzaG9sZCkge1xuICAgICAgdmFsTm90Q29uZmxpY3QgPSBib3VuZHNbaGFuZGxlIC0gMV0gKyB0aGVyc2hvbGQ7XG4gICAgfVxuXG4gICAgaWYgKGhhbmRsZSA8IGJvdW5kcy5sZW5ndGggLSAxICYmIHZhbEluUmFuZ2UgPj0gYm91bmRzW2hhbmRsZSArIDFdIC0gdGhlcnNob2xkKSB7XG4gICAgICB2YWxOb3RDb25mbGljdCA9IGJvdW5kc1toYW5kbGUgKyAxXSAtIHRoZXJzaG9sZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdXRpbHMuZW5zdXJlVmFsdWVQcmVjaXNpb24odmFsTm90Q29uZmxpY3QsIHByb3BzKTtcbn07XG5cbnZhciBSYW5nZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUmFuZ2UsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoUmFuZ2UpO1xuXG4gIGZ1bmN0aW9uIFJhbmdlKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJhbmdlKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuXG4gICAgX3RoaXMucG9zaXRpb25HZXRWYWx1ZSA9IGZ1bmN0aW9uIChwb3NpdGlvbikge1xuICAgICAgdmFyIGJvdW5kcyA9IF90aGlzLmdldFZhbHVlKCk7XG5cbiAgICAgIHZhciB2YWx1ZSA9IF90aGlzLmNhbGNWYWx1ZUJ5UG9zKHBvc2l0aW9uKTtcblxuICAgICAgdmFyIGNsb3Nlc3RCb3VuZCA9IF90aGlzLmdldENsb3Nlc3RCb3VuZCh2YWx1ZSk7XG5cbiAgICAgIHZhciBpbmRleCA9IF90aGlzLmdldEJvdW5kTmVlZE1vdmluZyh2YWx1ZSwgY2xvc2VzdEJvdW5kKTtcblxuICAgICAgdmFyIHByZXZWYWx1ZSA9IGJvdW5kc1tpbmRleF07XG4gICAgICBpZiAodmFsdWUgPT09IHByZXZWYWx1ZSkgcmV0dXJuIG51bGw7XG5cbiAgICAgIHZhciBuZXh0Qm91bmRzID0gX3RvQ29uc3VtYWJsZUFycmF5KGJvdW5kcyk7XG5cbiAgICAgIG5leHRCb3VuZHNbaW5kZXhdID0gdmFsdWU7XG4gICAgICByZXR1cm4gbmV4dEJvdW5kcztcbiAgICB9O1xuXG4gICAgX3RoaXMub25FbmQgPSBmdW5jdGlvbiAoZm9yY2UpIHtcbiAgICAgIHZhciBoYW5kbGUgPSBfdGhpcy5zdGF0ZS5oYW5kbGU7XG5cbiAgICAgIF90aGlzLnJlbW92ZURvY3VtZW50RXZlbnRzKCk7XG5cbiAgICAgIGlmICghaGFuZGxlKSB7XG4gICAgICAgIF90aGlzLmRyYWdUcmFjayA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGFuZGxlICE9PSBudWxsIHx8IGZvcmNlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQWZ0ZXJDaGFuZ2UoX3RoaXMuZ2V0VmFsdWUoKSk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaGFuZGxlOiBudWxsXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIGNvdW50ID0gcHJvcHMuY291bnQsXG4gICAgICAgIG1pbiA9IHByb3BzLm1pbixcbiAgICAgICAgbWF4ID0gcHJvcHMubWF4O1xuICAgIHZhciBpbml0aWFsVmFsdWUgPSBBcnJheS5hcHBseSh2b2lkIDAsIF90b0NvbnN1bWFibGVBcnJheShBcnJheShjb3VudCArIDEpKSkubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBtaW47XG4gICAgfSk7XG4gICAgdmFyIGRlZmF1bHRWYWx1ZSA9ICdkZWZhdWx0VmFsdWUnIGluIHByb3BzID8gcHJvcHMuZGVmYXVsdFZhbHVlIDogaW5pdGlhbFZhbHVlO1xuICAgIHZhciB2YWx1ZSA9IHByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQgPyBwcm9wcy52YWx1ZSA6IGRlZmF1bHRWYWx1ZTtcbiAgICB2YXIgYm91bmRzID0gdmFsdWUubWFwKGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgICByZXR1cm4gX3RyaW1BbGlnblZhbHVlKHtcbiAgICAgICAgdmFsdWU6IHYsXG4gICAgICAgIGhhbmRsZTogaSxcbiAgICAgICAgcHJvcHM6IHByb3BzXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB2YXIgcmVjZW50ID0gYm91bmRzWzBdID09PSBtYXggPyAwIDogYm91bmRzLmxlbmd0aCAtIDE7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBoYW5kbGU6IG51bGwsXG4gICAgICByZWNlbnQ6IHJlY2VudCxcbiAgICAgIGJvdW5kczogYm91bmRzXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXG4gICAqIFtMZWdhY3ldIFVzZWQgZm9yIGluaGVyaXQgb3RoZXIgY29tcG9uZW50LlxuICAgKiBJdCdzIGEgYmFkIGNvZGUgc3R5bGUgd2hpY2ggc2hvdWxkIGJlIHJlZmFjdG9yLlxuICAgKi9cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMsIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhSYW5nZSwgW3tcbiAgICBrZXk6IFwiY2FsY1ZhbHVlQnlQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FsY1ZhbHVlQnlQb3ModmFsdWUpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTbGlkZXJMZW5ndGhcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2xpZGVyTGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhbGNPZmZzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FsY09mZnNldCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNhdmVIYW5kbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2F2ZUhhbmRsZShpbmRleCwgaCkge31cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVEb2N1bWVudEV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVEb2N1bWVudEV2ZW50cygpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgb25DaGFuZ2UgPSBfdGhpcyRwcm9wcy5vbkNoYW5nZSxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHByb3BzLnZhbHVlLFxuICAgICAgICAgIG1pbiA9IF90aGlzJHByb3BzLm1pbixcbiAgICAgICAgICBtYXggPSBfdGhpcyRwcm9wcy5tYXg7XG5cbiAgICAgIGlmICghKCdtaW4nIGluIHRoaXMucHJvcHMgfHwgJ21heCcgaW4gdGhpcy5wcm9wcykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAobWluID09PSBwcmV2UHJvcHMubWluICYmIG1heCA9PT0gcHJldlByb3BzLm1heCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBjdXJyZW50VmFsdWUgPSB2YWx1ZSB8fCBwcmV2U3RhdGUuYm91bmRzO1xuXG4gICAgICBpZiAoY3VycmVudFZhbHVlLnNvbWUoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmlzVmFsdWVPdXRPZlJhbmdlKHYsIF90aGlzMi5wcm9wcyk7XG4gICAgICB9KSkge1xuICAgICAgICB2YXIgbmV3VmFsdWVzID0gY3VycmVudFZhbHVlLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgICAgIHJldHVybiB1dGlscy5lbnN1cmVWYWx1ZUluUmFuZ2UodiwgX3RoaXMyLnByb3BzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG9uQ2hhbmdlKG5ld1ZhbHVlcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uQ2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2hhbmdlKHN0YXRlKSB7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGlzTm90Q29udHJvbGxlZCA9ICEoJ3ZhbHVlJyBpbiBwcm9wcyk7XG5cbiAgICAgIGlmIChpc05vdENvbnRyb2xsZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY29udHJvbGxlZFN0YXRlID0ge307XG4gICAgICAgIFsnaGFuZGxlJywgJ3JlY2VudCddLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBpZiAoc3RhdGVbaXRlbV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udHJvbGxlZFN0YXRlW2l0ZW1dID0gc3RhdGVbaXRlbV07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoY29udHJvbGxlZFN0YXRlKS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKGNvbnRyb2xsZWRTdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGRhdGEgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHRoaXMuc3RhdGUpLCBzdGF0ZSk7XG5cbiAgICAgIHZhciBjaGFuZ2VkVmFsdWUgPSBkYXRhLmJvdW5kcztcbiAgICAgIHByb3BzLm9uQ2hhbmdlKGNoYW5nZWRWYWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uU3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25TdGFydChwb3NpdGlvbikge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICB2YXIgYm91bmRzID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgICAgcHJvcHMub25CZWZvcmVDaGFuZ2UoYm91bmRzKTtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuY2FsY1ZhbHVlQnlQb3MocG9zaXRpb24pO1xuICAgICAgdGhpcy5zdGFydFZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgIHZhciBjbG9zZXN0Qm91bmQgPSB0aGlzLmdldENsb3Nlc3RCb3VuZCh2YWx1ZSk7XG4gICAgICB0aGlzLnByZXZNb3ZlZEhhbmRsZUluZGV4ID0gdGhpcy5nZXRCb3VuZE5lZWRNb3ZpbmcodmFsdWUsIGNsb3Nlc3RCb3VuZCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaGFuZGxlOiB0aGlzLnByZXZNb3ZlZEhhbmRsZUluZGV4LFxuICAgICAgICByZWNlbnQ6IHRoaXMucHJldk1vdmVkSGFuZGxlSW5kZXhcbiAgICAgIH0pO1xuICAgICAgdmFyIHByZXZWYWx1ZSA9IGJvdW5kc1t0aGlzLnByZXZNb3ZlZEhhbmRsZUluZGV4XTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gcHJldlZhbHVlKSByZXR1cm47XG5cbiAgICAgIHZhciBuZXh0Qm91bmRzID0gX3RvQ29uc3VtYWJsZUFycmF5KHN0YXRlLmJvdW5kcyk7XG5cbiAgICAgIG5leHRCb3VuZHNbdGhpcy5wcmV2TW92ZWRIYW5kbGVJbmRleF0gPSB2YWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2Uoe1xuICAgICAgICBib3VuZHM6IG5leHRCb3VuZHNcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbk1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Nb3ZlKGUsIHBvc2l0aW9uLCBkcmFnVHJhY2ssIHN0YXJ0Qm91bmRzKSB7XG4gICAgICB1dGlscy5wYXVzZUV2ZW50KGUpO1xuICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgbWF4VmFsdWUgPSBwcm9wcy5tYXggfHwgMTAwO1xuICAgICAgdmFyIG1pblZhbHVlID0gcHJvcHMubWluIHx8IDA7XG5cbiAgICAgIGlmIChkcmFnVHJhY2spIHtcbiAgICAgICAgdmFyIHBvcyA9IHByb3BzLnZlcnRpY2FsID8gLXBvc2l0aW9uIDogcG9zaXRpb247XG4gICAgICAgIHBvcyA9IHByb3BzLnJldmVyc2UgPyAtcG9zIDogcG9zO1xuICAgICAgICB2YXIgbWF4ID0gbWF4VmFsdWUgLSBNYXRoLm1heC5hcHBseShNYXRoLCBfdG9Db25zdW1hYmxlQXJyYXkoc3RhcnRCb3VuZHMpKTtcbiAgICAgICAgdmFyIG1pbiA9IG1pblZhbHVlIC0gTWF0aC5taW4uYXBwbHkoTWF0aCwgX3RvQ29uc3VtYWJsZUFycmF5KHN0YXJ0Qm91bmRzKSk7XG4gICAgICAgIHZhciByYXRpbyA9IE1hdGgubWluKE1hdGgubWF4KHBvcyAvICh0aGlzLmdldFNsaWRlckxlbmd0aCgpIC8gMTAwKSwgbWluKSwgbWF4KTtcbiAgICAgICAgdmFyIG5leHRCb3VuZHMgPSBzdGFydEJvdW5kcy5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLm1heChNYXRoLm1pbih2ICsgcmF0aW8sIG1heFZhbHVlKSwgbWluVmFsdWUpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHN0YXRlLmJvdW5kcy5tYXAoZnVuY3Rpb24gKGMsIGkpIHtcbiAgICAgICAgICByZXR1cm4gYyA9PT0gbmV4dEJvdW5kc1tpXTtcbiAgICAgICAgfSkuc29tZShmdW5jdGlvbiAoYykge1xuICAgICAgICAgIHJldHVybiAhYztcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlKHtcbiAgICAgICAgICAgIGJvdW5kczogbmV4dEJvdW5kc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLmNhbGNWYWx1ZUJ5UG9zKHBvc2l0aW9uKTtcbiAgICAgIHZhciBvbGRWYWx1ZSA9IHN0YXRlLmJvdW5kc1tzdGF0ZS5oYW5kbGVdO1xuICAgICAgaWYgKHZhbHVlID09PSBvbGRWYWx1ZSkgcmV0dXJuO1xuICAgICAgdGhpcy5tb3ZlVG8odmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbktleWJvYXJkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uS2V5Ym9hcmQoZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgcmV2ZXJzZSA9IF90aGlzJHByb3BzMi5yZXZlcnNlLFxuICAgICAgICAgIHZlcnRpY2FsID0gX3RoaXMkcHJvcHMyLnZlcnRpY2FsO1xuICAgICAgdmFyIHZhbHVlTXV0YXRvciA9IHV0aWxzLmdldEtleWJvYXJkVmFsdWVNdXRhdG9yKGUsIHZlcnRpY2FsLCByZXZlcnNlKTtcblxuICAgICAgaWYgKHZhbHVlTXV0YXRvcikge1xuICAgICAgICB1dGlscy5wYXVzZUV2ZW50KGUpO1xuICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgYm91bmRzID0gc3RhdGUuYm91bmRzLFxuICAgICAgICAgICAgaGFuZGxlID0gc3RhdGUuaGFuZGxlO1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSBib3VuZHNbaGFuZGxlID09PSBudWxsID8gc3RhdGUucmVjZW50IDogaGFuZGxlXTtcbiAgICAgICAgdmFyIG11dGF0ZWRWYWx1ZSA9IHZhbHVlTXV0YXRvcihvbGRWYWx1ZSwgcHJvcHMpO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IF90cmltQWxpZ25WYWx1ZSh7XG4gICAgICAgICAgdmFsdWU6IG11dGF0ZWRWYWx1ZSxcbiAgICAgICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgICAgICBib3VuZHM6IHN0YXRlLmJvdW5kcyxcbiAgICAgICAgICBwcm9wczogcHJvcHNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSBvbGRWYWx1ZSkgcmV0dXJuO1xuICAgICAgICB2YXIgaXNGcm9tS2V5Ym9hcmRFdmVudCA9IHRydWU7XG4gICAgICAgIHRoaXMubW92ZVRvKHZhbHVlLCBpc0Zyb21LZXlib2FyZEV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0VmFsdWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5ib3VuZHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldENsb3Nlc3RCb3VuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDbG9zZXN0Qm91bmQodmFsdWUpIHtcbiAgICAgIHZhciBib3VuZHMgPSB0aGlzLnN0YXRlLmJvdW5kcztcbiAgICAgIHZhciBjbG9zZXN0Qm91bmQgPSAwO1xuXG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGJvdW5kcy5sZW5ndGggLSAxOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHZhbHVlID49IGJvdW5kc1tpXSkge1xuICAgICAgICAgIGNsb3Nlc3RCb3VuZCA9IGk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKE1hdGguYWJzKGJvdW5kc1tjbG9zZXN0Qm91bmQgKyAxXSAtIHZhbHVlKSA8IE1hdGguYWJzKGJvdW5kc1tjbG9zZXN0Qm91bmRdIC0gdmFsdWUpKSB7XG4gICAgICAgIGNsb3Nlc3RCb3VuZCArPSAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2xvc2VzdEJvdW5kO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRCb3VuZE5lZWRNb3ZpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Qm91bmROZWVkTW92aW5nKHZhbHVlLCBjbG9zZXN0Qm91bmQpIHtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgYm91bmRzID0gX3RoaXMkc3RhdGUuYm91bmRzLFxuICAgICAgICAgIHJlY2VudCA9IF90aGlzJHN0YXRlLnJlY2VudDtcbiAgICAgIHZhciBib3VuZE5lZWRNb3ZpbmcgPSBjbG9zZXN0Qm91bmQ7XG4gICAgICB2YXIgaXNBdFRoZVNhbWVQb2ludCA9IGJvdW5kc1tjbG9zZXN0Qm91bmQgKyAxXSA9PT0gYm91bmRzW2Nsb3Nlc3RCb3VuZF07XG5cbiAgICAgIGlmIChpc0F0VGhlU2FtZVBvaW50ICYmIGJvdW5kc1tyZWNlbnRdID09PSBib3VuZHNbY2xvc2VzdEJvdW5kXSkge1xuICAgICAgICBib3VuZE5lZWRNb3ZpbmcgPSByZWNlbnQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0F0VGhlU2FtZVBvaW50ICYmIHZhbHVlICE9PSBib3VuZHNbY2xvc2VzdEJvdW5kICsgMV0pIHtcbiAgICAgICAgYm91bmROZWVkTW92aW5nID0gdmFsdWUgPCBib3VuZHNbY2xvc2VzdEJvdW5kICsgMV0gPyBjbG9zZXN0Qm91bmQgOiBjbG9zZXN0Qm91bmQgKyAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYm91bmROZWVkTW92aW5nO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRMb3dlckJvdW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExvd2VyQm91bmQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5ib3VuZHNbMF07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFVwcGVyQm91bmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VXBwZXJCb3VuZCgpIHtcbiAgICAgIHZhciBib3VuZHMgPSB0aGlzLnN0YXRlLmJvdW5kcztcbiAgICAgIHJldHVybiBib3VuZHNbYm91bmRzLmxlbmd0aCAtIDFdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHBvc3NpYmxlIHNsaWRlciBwb2ludHMsIHRha2luZyBpbnRvIGFjY291bnQgYm90aFxuICAgICAqIGBtYXJrc2AgYW5kIGBzdGVwYC4gVGhlIHJlc3VsdCBpcyBjYWNoZWQuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRQb2ludHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UG9pbnRzKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbWFya3MgPSBfdGhpcyRwcm9wczMubWFya3MsXG4gICAgICAgICAgc3RlcCA9IF90aGlzJHByb3BzMy5zdGVwLFxuICAgICAgICAgIG1pbiA9IF90aGlzJHByb3BzMy5taW4sXG4gICAgICAgICAgbWF4ID0gX3RoaXMkcHJvcHMzLm1heDtcbiAgICAgIHZhciBjYWNoZSA9IHRoaXMuaW50ZXJuYWxQb2ludHNDYWNoZTtcblxuICAgICAgaWYgKCFjYWNoZSB8fCBjYWNoZS5tYXJrcyAhPT0gbWFya3MgfHwgY2FjaGUuc3RlcCAhPT0gc3RlcCkge1xuICAgICAgICB2YXIgcG9pbnRzT2JqZWN0ID0gX29iamVjdFNwcmVhZCh7fSwgbWFya3MpO1xuXG4gICAgICAgIGlmIChzdGVwICE9PSBudWxsKSB7XG4gICAgICAgICAgZm9yICh2YXIgcG9pbnQgPSBtaW47IHBvaW50IDw9IG1heDsgcG9pbnQgKz0gc3RlcCkge1xuICAgICAgICAgICAgcG9pbnRzT2JqZWN0W3BvaW50XSA9IHBvaW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwb2ludHMgPSBPYmplY3Qua2V5cyhwb2ludHNPYmplY3QpLm1hcChwYXJzZUZsb2F0KTtcbiAgICAgICAgcG9pbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmludGVybmFsUG9pbnRzQ2FjaGUgPSB7XG4gICAgICAgICAgbWFya3M6IG1hcmtzLFxuICAgICAgICAgIHN0ZXA6IHN0ZXAsXG4gICAgICAgICAgcG9pbnRzOiBwb2ludHNcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxQb2ludHNDYWNoZS5wb2ludHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1vdmVUb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtb3ZlVG8odmFsdWUsIGlzRnJvbUtleWJvYXJkRXZlbnQpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgICAgdmFyIG5leHRCb3VuZHMgPSBfdG9Db25zdW1hYmxlQXJyYXkoc3RhdGUuYm91bmRzKTtcblxuICAgICAgdmFyIGhhbmRsZSA9IHN0YXRlLmhhbmRsZSA9PT0gbnVsbCA/IHN0YXRlLnJlY2VudCA6IHN0YXRlLmhhbmRsZTtcbiAgICAgIG5leHRCb3VuZHNbaGFuZGxlXSA9IHZhbHVlO1xuICAgICAgdmFyIG5leHRIYW5kbGUgPSBoYW5kbGU7XG5cbiAgICAgIGlmIChwcm9wcy5wdXNoYWJsZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5wdXNoU3Vycm91bmRpbmdIYW5kbGVzKG5leHRCb3VuZHMsIG5leHRIYW5kbGUpO1xuICAgICAgfSBlbHNlIGlmIChwcm9wcy5hbGxvd0Nyb3NzKSB7XG4gICAgICAgIG5leHRCb3VuZHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgfSk7XG4gICAgICAgIG5leHRIYW5kbGUgPSBuZXh0Qm91bmRzLmluZGV4T2YodmFsdWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm9uQ2hhbmdlKHtcbiAgICAgICAgcmVjZW50OiBuZXh0SGFuZGxlLFxuICAgICAgICBoYW5kbGU6IG5leHRIYW5kbGUsXG4gICAgICAgIGJvdW5kczogbmV4dEJvdW5kc1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChpc0Zyb21LZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIC8vIGtub3duIHByb2JsZW06IGJlY2F1c2Ugc2V0U3RhdGUgaXMgYXN5bmMsXG4gICAgICAgIC8vIHNvIHRyaWdnZXIgZm9jdXMgd2lsbCBpbnZva2UgaGFuZGxlcidzIG9uRW5kIGFuZCBhbm90aGVyIGhhbmRsZXIncyBvblN0YXJ0IHRvbyBlYXJseSxcbiAgICAgICAgLy8gY2F1c2Ugb25CZWZvcmVDaGFuZ2UgYW5kIG9uQWZ0ZXJDaGFuZ2UgcmVjZWl2ZSB3cm9uZyB2YWx1ZS5cbiAgICAgICAgLy8gaGVyZSB1c2Ugc2V0U3RhdGUgY2FsbGJhY2sgdG8gaGFja++8jGJ1dCBub3QgZWxlZ2FudFxuICAgICAgICB0aGlzLnByb3BzLm9uQWZ0ZXJDaGFuZ2UobmV4dEJvdW5kcyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe30sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczMuaGFuZGxlc1JlZnNbbmV4dEhhbmRsZV0uZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub25FbmQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicHVzaFN1cnJvdW5kaW5nSGFuZGxlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoU3Vycm91bmRpbmdIYW5kbGVzKGJvdW5kcywgaGFuZGxlKSB7XG4gICAgICB2YXIgdmFsdWUgPSBib3VuZHNbaGFuZGxlXTtcbiAgICAgIHZhciBwdXNoYWJsZSA9IHRoaXMucHJvcHMucHVzaGFibGU7XG4gICAgICB2YXIgdGhyZXNob2xkID0gTnVtYmVyKHB1c2hhYmxlKTtcbiAgICAgIHZhciBkaXJlY3Rpb24gPSAwO1xuXG4gICAgICBpZiAoYm91bmRzW2hhbmRsZSArIDFdIC0gdmFsdWUgPCB0aHJlc2hvbGQpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gKzE7IC8vIHB1c2ggdG8gcmlnaHRcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlIC0gYm91bmRzW2hhbmRsZSAtIDFdIDwgdGhyZXNob2xkKSB7XG4gICAgICAgIGRpcmVjdGlvbiA9IC0xOyAvLyBwdXNoIHRvIGxlZnRcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXh0SGFuZGxlID0gaGFuZGxlICsgZGlyZWN0aW9uO1xuICAgICAgdmFyIGRpZmZUb05leHQgPSBkaXJlY3Rpb24gKiAoYm91bmRzW25leHRIYW5kbGVdIC0gdmFsdWUpO1xuXG4gICAgICBpZiAoIXRoaXMucHVzaEhhbmRsZShib3VuZHMsIG5leHRIYW5kbGUsIGRpcmVjdGlvbiwgdGhyZXNob2xkIC0gZGlmZlRvTmV4dCkpIHtcbiAgICAgICAgLy8gcmV2ZXJ0IHRvIG9yaWdpbmFsIHZhbHVlIGlmIHB1c2hpbmcgaXMgaW1wb3NzaWJsZVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgYm91bmRzW2hhbmRsZV0gPSBib3VuZHNbbmV4dEhhbmRsZV0gLSBkaXJlY3Rpb24gKiB0aHJlc2hvbGQ7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInB1c2hIYW5kbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaEhhbmRsZShib3VuZHMsIGhhbmRsZSwgZGlyZWN0aW9uLCBhbW91bnQpIHtcbiAgICAgIHZhciBvcmlnaW5hbFZhbHVlID0gYm91bmRzW2hhbmRsZV07XG4gICAgICB2YXIgY3VycmVudFZhbHVlID0gYm91bmRzW2hhbmRsZV07XG5cbiAgICAgIHdoaWxlIChkaXJlY3Rpb24gKiAoY3VycmVudFZhbHVlIC0gb3JpZ2luYWxWYWx1ZSkgPCBhbW91bnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnB1c2hIYW5kbGVPbmVQb2ludChib3VuZHMsIGhhbmRsZSwgZGlyZWN0aW9uKSkge1xuICAgICAgICAgIC8vIGNhbid0IHB1c2ggaGFuZGxlIGVub3VnaCB0byBjcmVhdGUgdGhlIG5lZWRlZCBgYW1vdW50YCBnYXAsIHNvIHdlXG4gICAgICAgICAgLy8gcmV2ZXJ0IGl0cyBwb3NpdGlvbiB0byB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICBib3VuZHNbaGFuZGxlXSA9IG9yaWdpbmFsVmFsdWU7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFZhbHVlID0gYm91bmRzW2hhbmRsZV07XG4gICAgICB9IC8vIHRoZSBoYW5kbGUgd2FzIHB1c2hlZCBlbm91Z2ggdG8gY3JlYXRlIHRoZSBuZWVkZWQgYGFtb3VudGAgZ2FwXG5cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInB1c2hIYW5kbGVPbmVQb2ludFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoSGFuZGxlT25lUG9pbnQoYm91bmRzLCBoYW5kbGUsIGRpcmVjdGlvbikge1xuICAgICAgdmFyIHBvaW50cyA9IHRoaXMuZ2V0UG9pbnRzKCk7XG4gICAgICB2YXIgcG9pbnRJbmRleCA9IHBvaW50cy5pbmRleE9mKGJvdW5kc1toYW5kbGVdKTtcbiAgICAgIHZhciBuZXh0UG9pbnRJbmRleCA9IHBvaW50SW5kZXggKyBkaXJlY3Rpb247XG5cbiAgICAgIGlmIChuZXh0UG9pbnRJbmRleCA+PSBwb2ludHMubGVuZ3RoIHx8IG5leHRQb2ludEluZGV4IDwgMCkge1xuICAgICAgICAvLyByZWFjaGVkIHRoZSBtaW5pbXVtIG9yIG1heGltdW0gYXZhaWxhYmxlIHBvaW50LCBjYW4ndCBwdXNoIGFueW1vcmVcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV4dEhhbmRsZSA9IGhhbmRsZSArIGRpcmVjdGlvbjtcbiAgICAgIHZhciBuZXh0VmFsdWUgPSBwb2ludHNbbmV4dFBvaW50SW5kZXhdO1xuICAgICAgdmFyIHB1c2hhYmxlID0gdGhpcy5wcm9wcy5wdXNoYWJsZTtcbiAgICAgIHZhciB0aHJlc2hvbGQgPSBOdW1iZXIocHVzaGFibGUpO1xuICAgICAgdmFyIGRpZmZUb05leHQgPSBkaXJlY3Rpb24gKiAoYm91bmRzW25leHRIYW5kbGVdIC0gbmV4dFZhbHVlKTtcblxuICAgICAgaWYgKCF0aGlzLnB1c2hIYW5kbGUoYm91bmRzLCBuZXh0SGFuZGxlLCBkaXJlY3Rpb24sIHRocmVzaG9sZCAtIGRpZmZUb05leHQpKSB7XG4gICAgICAgIC8vIGNvdWxkbid0IHB1c2ggbmV4dCBoYW5kbGUsIHNvIHdlIHdvbid0IHB1c2ggdGhpcyBvbmUgZWl0aGVyXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gLy8gcHVzaCB0aGUgaGFuZGxlXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gICAgICBib3VuZHNbaGFuZGxlXSA9IG5leHRWYWx1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0cmltQWxpZ25WYWx1ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0cmltQWxpZ25WYWx1ZSh2YWx1ZSkge1xuICAgICAgdmFyIF90aGlzJHN0YXRlMiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgaGFuZGxlID0gX3RoaXMkc3RhdGUyLmhhbmRsZSxcbiAgICAgICAgICBib3VuZHMgPSBfdGhpcyRzdGF0ZTIuYm91bmRzO1xuICAgICAgcmV0dXJuIF90cmltQWxpZ25WYWx1ZSh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgIGJvdW5kczogYm91bmRzLFxuICAgICAgICBwcm9wczogdGhpcy5wcm9wc1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIF90aGlzJHN0YXRlMyA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgaGFuZGxlID0gX3RoaXMkc3RhdGUzLmhhbmRsZSxcbiAgICAgICAgICBib3VuZHMgPSBfdGhpcyRzdGF0ZTMuYm91bmRzO1xuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHM0LnByZWZpeENscyxcbiAgICAgICAgICB2ZXJ0aWNhbCA9IF90aGlzJHByb3BzNC52ZXJ0aWNhbCxcbiAgICAgICAgICBpbmNsdWRlZCA9IF90aGlzJHByb3BzNC5pbmNsdWRlZCxcbiAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzNC5kaXNhYmxlZCxcbiAgICAgICAgICBtaW4gPSBfdGhpcyRwcm9wczQubWluLFxuICAgICAgICAgIG1heCA9IF90aGlzJHByb3BzNC5tYXgsXG4gICAgICAgICAgcmV2ZXJzZSA9IF90aGlzJHByb3BzNC5yZXZlcnNlLFxuICAgICAgICAgIGhhbmRsZUdlbmVyYXRvciA9IF90aGlzJHByb3BzNC5oYW5kbGUsXG4gICAgICAgICAgdHJhY2tTdHlsZSA9IF90aGlzJHByb3BzNC50cmFja1N0eWxlLFxuICAgICAgICAgIGhhbmRsZVN0eWxlID0gX3RoaXMkcHJvcHM0LmhhbmRsZVN0eWxlLFxuICAgICAgICAgIHRhYkluZGV4ID0gX3RoaXMkcHJvcHM0LnRhYkluZGV4LFxuICAgICAgICAgIGFyaWFMYWJlbEdyb3VwRm9ySGFuZGxlcyA9IF90aGlzJHByb3BzNC5hcmlhTGFiZWxHcm91cEZvckhhbmRsZXMsXG4gICAgICAgICAgYXJpYUxhYmVsbGVkQnlHcm91cEZvckhhbmRsZXMgPSBfdGhpcyRwcm9wczQuYXJpYUxhYmVsbGVkQnlHcm91cEZvckhhbmRsZXMsXG4gICAgICAgICAgYXJpYVZhbHVlVGV4dEZvcm1hdHRlckdyb3VwRm9ySGFuZGxlcyA9IF90aGlzJHByb3BzNC5hcmlhVmFsdWVUZXh0Rm9ybWF0dGVyR3JvdXBGb3JIYW5kbGVzO1xuICAgICAgdmFyIG9mZnNldHMgPSBib3VuZHMubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBfdGhpczQuY2FsY09mZnNldCh2KTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGhhbmRsZUNsYXNzTmFtZSA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaGFuZGxlXCIpO1xuICAgICAgdmFyIGhhbmRsZXMgPSBib3VuZHMubWFwKGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgICB2YXIgbWVyZ2VkVGFiSW5kZXggPSB0YWJJbmRleFtpXSB8fCAwO1xuXG4gICAgICAgIGlmIChkaXNhYmxlZCB8fCB0YWJJbmRleFtpXSA9PT0gbnVsbCkge1xuICAgICAgICAgIG1lcmdlZFRhYkluZGV4ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkcmFnZ2luZyA9IGhhbmRsZSA9PT0gaTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUdlbmVyYXRvcih7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIGhhbmRsZUNsYXNzTmFtZSwgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQoaGFuZGxlQ2xhc3NOYW1lLCBcIi1cIikuY29uY2F0KGkgKyAxKSwgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQoaGFuZGxlQ2xhc3NOYW1lLCBcIi1kcmFnZ2luZ1wiKSwgZHJhZ2dpbmcpLCBfY2xhc3NOYW1lcykpLFxuICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICAgIHZlcnRpY2FsOiB2ZXJ0aWNhbCxcbiAgICAgICAgICBkcmFnZ2luZzogZHJhZ2dpbmcsXG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXRzW2ldLFxuICAgICAgICAgIHZhbHVlOiB2LFxuICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgIHRhYkluZGV4OiBtZXJnZWRUYWJJbmRleCxcbiAgICAgICAgICBtaW46IG1pbixcbiAgICAgICAgICBtYXg6IG1heCxcbiAgICAgICAgICByZXZlcnNlOiByZXZlcnNlLFxuICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICBzdHlsZTogaGFuZGxlU3R5bGVbaV0sXG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoaCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5zYXZlSGFuZGxlKGksIGgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYXJpYUxhYmVsOiBhcmlhTGFiZWxHcm91cEZvckhhbmRsZXNbaV0sXG4gICAgICAgICAgYXJpYUxhYmVsbGVkQnk6IGFyaWFMYWJlbGxlZEJ5R3JvdXBGb3JIYW5kbGVzW2ldLFxuICAgICAgICAgIGFyaWFWYWx1ZVRleHRGb3JtYXR0ZXI6IGFyaWFWYWx1ZVRleHRGb3JtYXR0ZXJHcm91cEZvckhhbmRsZXNbaV1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHZhciB0cmFja3MgPSBib3VuZHMuc2xpY2UoMCwgLTEpLm1hcChmdW5jdGlvbiAoXywgaW5kZXgpIHtcbiAgICAgICAgdmFyIF9jbGFzc05hbWVzMjtcblxuICAgICAgICB2YXIgaSA9IGluZGV4ICsgMTtcbiAgICAgICAgdmFyIHRyYWNrQ2xhc3NOYW1lID0gY2xhc3NOYW1lcygoX2NsYXNzTmFtZXMyID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItdHJhY2tcIiksIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXRyYWNrLVwiKS5jb25jYXQoaSksIHRydWUpLCBfY2xhc3NOYW1lczIpKTtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYWNrLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiB0cmFja0NsYXNzTmFtZSxcbiAgICAgICAgICB2ZXJ0aWNhbDogdmVydGljYWwsXG4gICAgICAgICAgcmV2ZXJzZTogcmV2ZXJzZSxcbiAgICAgICAgICBpbmNsdWRlZDogaW5jbHVkZWQsXG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXRzW2kgLSAxXSxcbiAgICAgICAgICBsZW5ndGg6IG9mZnNldHNbaV0gLSBvZmZzZXRzW2kgLSAxXSxcbiAgICAgICAgICBzdHlsZTogdHJhY2tTdHlsZVtpbmRleF0sXG4gICAgICAgICAga2V5OiBpXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0cmFja3M6IHRyYWNrcyxcbiAgICAgICAgaGFuZGxlczogaGFuZGxlc1xuICAgICAgfTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgICAgaWYgKCEoJ3ZhbHVlJyBpbiBwcm9wcyB8fCAnbWluJyBpbiBwcm9wcyB8fCAnbWF4JyBpbiBwcm9wcykpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZSA9IHByb3BzLnZhbHVlIHx8IHN0YXRlLmJvdW5kcztcbiAgICAgIHZhciBuZXh0Qm91bmRzID0gdmFsdWUubWFwKGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgICAgIHJldHVybiBfdHJpbUFsaWduVmFsdWUoe1xuICAgICAgICAgIHZhbHVlOiB2LFxuICAgICAgICAgIGhhbmRsZTogaSxcbiAgICAgICAgICBib3VuZHM6IHN0YXRlLmJvdW5kcyxcbiAgICAgICAgICBwcm9wczogcHJvcHNcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN0YXRlLmJvdW5kcy5sZW5ndGggPT09IG5leHRCb3VuZHMubGVuZ3RoKSB7XG4gICAgICAgIGlmIChuZXh0Qm91bmRzLmV2ZXJ5KGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgICAgICAgcmV0dXJuIHYgPT09IHN0YXRlLmJvdW5kc1tpXTtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dEJvdW5kcyA9IHZhbHVlLm1hcChmdW5jdGlvbiAodiwgaSkge1xuICAgICAgICAgIHJldHVybiBfdHJpbUFsaWduVmFsdWUoe1xuICAgICAgICAgICAgdmFsdWU6IHYsXG4gICAgICAgICAgICBoYW5kbGU6IGksXG4gICAgICAgICAgICBwcm9wczogcHJvcHNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHN0YXRlKSwge30sIHtcbiAgICAgICAgYm91bmRzOiBuZXh0Qm91bmRzXG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmFuZ2U7XG59KFJlYWN0LkNvbXBvbmVudCk7XG4vKiBlc2xpbnQtZW5hYmxlICovXG5cblxuUmFuZ2UuZGlzcGxheU5hbWUgPSAnUmFuZ2UnO1xuUmFuZ2UuZGVmYXVsdFByb3BzID0ge1xuICBjb3VudDogMSxcbiAgYWxsb3dDcm9zczogdHJ1ZSxcbiAgcHVzaGFibGU6IGZhbHNlLFxuICBkcmFnZ2FibGVUcmFjazogZmFsc2UsXG4gIHRhYkluZGV4OiBbXSxcbiAgYXJpYUxhYmVsR3JvdXBGb3JIYW5kbGVzOiBbXSxcbiAgYXJpYUxhYmVsbGVkQnlHcm91cEZvckhhbmRsZXM6IFtdLFxuICBhcmlhVmFsdWVUZXh0Rm9ybWF0dGVyR3JvdXBGb3JIYW5kbGVzOiBbXVxufTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNsaWRlcihSYW5nZSk7IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNcIjtcbmltcG9ydCBfY3JlYXRlU3VwZXIgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZVN1cGVyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSBcInJjLXV0aWwvZXMvd2FybmluZ1wiO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vY29tbW9uL1RyYWNrJztcbmltcG9ydCBjcmVhdGVTbGlkZXIgZnJvbSAnLi9jb21tb24vY3JlYXRlU2xpZGVyJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG52YXIgU2xpZGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTbGlkZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoU2xpZGVyKTtcblxuICAvKiBlc2xpbnQtZW5hYmxlICovXG4gIGZ1bmN0aW9uIFNsaWRlcihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTbGlkZXIpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG5cbiAgICBfdGhpcy5wb3NpdGlvbkdldFZhbHVlID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfTtcblxuICAgIF90aGlzLm9uRW5kID0gZnVuY3Rpb24gKGZvcmNlKSB7XG4gICAgICB2YXIgZHJhZ2dpbmcgPSBfdGhpcy5zdGF0ZS5kcmFnZ2luZztcblxuICAgICAgX3RoaXMucmVtb3ZlRG9jdW1lbnRFdmVudHMoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nIHx8IGZvcmNlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQWZ0ZXJDaGFuZ2UoX3RoaXMuZ2V0VmFsdWUoKSk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZHJhZ2dpbmc6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIGRlZmF1bHRWYWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkID8gcHJvcHMuZGVmYXVsdFZhbHVlIDogcHJvcHMubWluO1xuICAgIHZhciB2YWx1ZSA9IHByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQgPyBwcm9wcy52YWx1ZSA6IGRlZmF1bHRWYWx1ZTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiBfdGhpcy50cmltQWxpZ25WYWx1ZSh2YWx1ZSksXG4gICAgICBkcmFnZ2luZzogZmFsc2VcbiAgICB9O1xuICAgIHdhcm5pbmcoISgnbWluaW11bVRyYWNrU3R5bGUnIGluIHByb3BzKSwgJ21pbmltdW1UcmFja1N0eWxlIHdpbGwgYmUgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSB0cmFja1N0eWxlIGluc3RlYWQuJyk7XG4gICAgd2FybmluZyghKCdtYXhpbXVtVHJhY2tTdHlsZScgaW4gcHJvcHMpLCAnbWF4aW11bVRyYWNrU3R5bGUgd2lsbCBiZSBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIHJhaWxTdHlsZSBpbnN0ZWFkLicpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKipcbiAgICogW0xlZ2FjeV0gVXNlZCBmb3IgaW5oZXJpdCBvdGhlciBjb21wb25lbnQuXG4gICAqIEl0J3MgYSBiYWQgY29kZSBzdHlsZSB3aGljaCBzaG91bGQgYmUgcmVmYWN0b3IuXG4gICAqL1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycywgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFNsaWRlciwgW3tcbiAgICBrZXk6IFwiY2FsY1ZhbHVlQnlQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FsY1ZhbHVlQnlQb3ModmFsdWUpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjYWxjT2Zmc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGNPZmZzZXQodmFsdWUpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzYXZlSGFuZGxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNhdmVIYW5kbGUoaW5kZXgsIGgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlRG9jdW1lbnRFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRG9jdW1lbnRFdmVudHMoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbWluID0gX3RoaXMkcHJvcHMubWluLFxuICAgICAgICAgIG1heCA9IF90aGlzJHByb3BzLm1heCxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHByb3BzLnZhbHVlLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3RoaXMkcHJvcHMub25DaGFuZ2U7XG5cbiAgICAgIGlmICghKCdtaW4nIGluIHRoaXMucHJvcHMgfHwgJ21heCcgaW4gdGhpcy5wcm9wcykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGhlVmFsdWUgPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiBwcmV2U3RhdGUudmFsdWU7XG4gICAgICB2YXIgbmV4dFZhbHVlID0gdGhpcy50cmltQWxpZ25WYWx1ZSh0aGVWYWx1ZSwgdGhpcy5wcm9wcyk7XG5cbiAgICAgIGlmIChuZXh0VmFsdWUgPT09IHByZXZTdGF0ZS52YWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2YWx1ZTogbmV4dFZhbHVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKCEobWluID09PSBwcmV2UHJvcHMubWluICYmIG1heCA9PT0gcHJldlByb3BzLm1heCkgJiYgdXRpbHMuaXNWYWx1ZU91dE9mUmFuZ2UodGhlVmFsdWUsIHRoaXMucHJvcHMpKSB7XG4gICAgICAgIG9uQ2hhbmdlKG5leHRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uQ2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2hhbmdlKHN0YXRlKSB7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGlzTm90Q29udHJvbGxlZCA9ICEoJ3ZhbHVlJyBpbiBwcm9wcyk7XG4gICAgICB2YXIgbmV4dFN0YXRlID0gc3RhdGUudmFsdWUgPiB0aGlzLnByb3BzLm1heCA/IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3RhdGUpLCB7fSwge1xuICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy5tYXhcbiAgICAgIH0pIDogc3RhdGU7XG5cbiAgICAgIGlmIChpc05vdENvbnRyb2xsZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hhbmdlZFZhbHVlID0gbmV4dFN0YXRlLnZhbHVlO1xuICAgICAgcHJvcHMub25DaGFuZ2UoY2hhbmdlZFZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25TdGFydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblN0YXJ0KHBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZHJhZ2dpbmc6IHRydWVcbiAgICAgIH0pO1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBwcmV2VmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICBwcm9wcy5vbkJlZm9yZUNoYW5nZShwcmV2VmFsdWUpO1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5jYWxjVmFsdWVCeVBvcyhwb3NpdGlvbik7XG4gICAgICB0aGlzLnN0YXJ0VmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgaWYgKHZhbHVlID09PSBwcmV2VmFsdWUpIHJldHVybjtcbiAgICAgIHRoaXMucHJldk1vdmVkSGFuZGxlSW5kZXggPSAwO1xuICAgICAgdGhpcy5vbkNoYW5nZSh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uTW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdmUoZSwgcG9zaXRpb24pIHtcbiAgICAgIHV0aWxzLnBhdXNlRXZlbnQoZSk7XG4gICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5jYWxjVmFsdWVCeVBvcyhwb3NpdGlvbik7XG4gICAgICBpZiAodmFsdWUgPT09IG9sZFZhbHVlKSByZXR1cm47XG4gICAgICB0aGlzLm9uQ2hhbmdlKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25LZXlib2FyZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbktleWJvYXJkKGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHJldmVyc2UgPSBfdGhpcyRwcm9wczIucmV2ZXJzZSxcbiAgICAgICAgICB2ZXJ0aWNhbCA9IF90aGlzJHByb3BzMi52ZXJ0aWNhbDtcbiAgICAgIHZhciB2YWx1ZU11dGF0b3IgPSB1dGlscy5nZXRLZXlib2FyZFZhbHVlTXV0YXRvcihlLCB2ZXJ0aWNhbCwgcmV2ZXJzZSk7XG5cbiAgICAgIGlmICh2YWx1ZU11dGF0b3IpIHtcbiAgICAgICAgdXRpbHMucGF1c2VFdmVudChlKTtcbiAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gc3RhdGUudmFsdWU7XG4gICAgICAgIHZhciBtdXRhdGVkVmFsdWUgPSB2YWx1ZU11dGF0b3Iob2xkVmFsdWUsIHRoaXMucHJvcHMpO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnRyaW1BbGlnblZhbHVlKG11dGF0ZWRWYWx1ZSk7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gb2xkVmFsdWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLm9uQWZ0ZXJDaGFuZ2UodmFsdWUpO1xuICAgICAgICB0aGlzLm9uRW5kKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldExvd2VyQm91bmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TG93ZXJCb3VuZCgpIHtcbiAgICAgIHZhciBtaW5Qb2ludCA9IHRoaXMucHJvcHMuc3RhcnRQb2ludCB8fCB0aGlzLnByb3BzLm1pbjtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlID4gbWluUG9pbnQgPyBtaW5Qb2ludCA6IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFVwcGVyQm91bmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VXBwZXJCb3VuZCgpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlIDwgdGhpcy5wcm9wcy5zdGFydFBvaW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnN0YXJ0UG9pbnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0cmltQWxpZ25WYWx1ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0cmltQWxpZ25WYWx1ZSh2KSB7XG4gICAgICB2YXIgbmV4dFByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgICAgaWYgKHYgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBtZXJnZWRQcm9wcyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdGhpcy5wcm9wcyksIG5leHRQcm9wcyk7XG5cbiAgICAgIHZhciB2YWwgPSB1dGlscy5lbnN1cmVWYWx1ZUluUmFuZ2UodiwgbWVyZ2VkUHJvcHMpO1xuICAgICAgcmV0dXJuIHV0aWxzLmVuc3VyZVZhbHVlUHJlY2lzaW9uKHZhbCwgbWVyZ2VkUHJvcHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzMy5wcmVmaXhDbHMsXG4gICAgICAgICAgdmVydGljYWwgPSBfdGhpcyRwcm9wczMudmVydGljYWwsXG4gICAgICAgICAgaW5jbHVkZWQgPSBfdGhpcyRwcm9wczMuaW5jbHVkZWQsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wczMuZGlzYWJsZWQsXG4gICAgICAgICAgbWluaW11bVRyYWNrU3R5bGUgPSBfdGhpcyRwcm9wczMubWluaW11bVRyYWNrU3R5bGUsXG4gICAgICAgICAgdHJhY2tTdHlsZSA9IF90aGlzJHByb3BzMy50cmFja1N0eWxlLFxuICAgICAgICAgIGhhbmRsZVN0eWxlID0gX3RoaXMkcHJvcHMzLmhhbmRsZVN0eWxlLFxuICAgICAgICAgIHRhYkluZGV4ID0gX3RoaXMkcHJvcHMzLnRhYkluZGV4LFxuICAgICAgICAgIGFyaWFMYWJlbEZvckhhbmRsZSA9IF90aGlzJHByb3BzMy5hcmlhTGFiZWxGb3JIYW5kbGUsXG4gICAgICAgICAgYXJpYUxhYmVsbGVkQnlGb3JIYW5kbGUgPSBfdGhpcyRwcm9wczMuYXJpYUxhYmVsbGVkQnlGb3JIYW5kbGUsXG4gICAgICAgICAgYXJpYVZhbHVlVGV4dEZvcm1hdHRlckZvckhhbmRsZSA9IF90aGlzJHByb3BzMy5hcmlhVmFsdWVUZXh0Rm9ybWF0dGVyRm9ySGFuZGxlLFxuICAgICAgICAgIG1pbiA9IF90aGlzJHByb3BzMy5taW4sXG4gICAgICAgICAgbWF4ID0gX3RoaXMkcHJvcHMzLm1heCxcbiAgICAgICAgICBzdGFydFBvaW50ID0gX3RoaXMkcHJvcHMzLnN0YXJ0UG9pbnQsXG4gICAgICAgICAgcmV2ZXJzZSA9IF90aGlzJHByb3BzMy5yZXZlcnNlLFxuICAgICAgICAgIGhhbmRsZUdlbmVyYXRvciA9IF90aGlzJHByb3BzMy5oYW5kbGU7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkc3RhdGUudmFsdWUsXG4gICAgICAgICAgZHJhZ2dpbmcgPSBfdGhpcyRzdGF0ZS5kcmFnZ2luZztcbiAgICAgIHZhciBvZmZzZXQgPSB0aGlzLmNhbGNPZmZzZXQodmFsdWUpO1xuICAgICAgdmFyIGhhbmRsZSA9IGhhbmRsZUdlbmVyYXRvcih7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1oYW5kbGVcIiksXG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICB2ZXJ0aWNhbDogdmVydGljYWwsXG4gICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGRyYWdnaW5nOiBkcmFnZ2luZyxcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICBtaW46IG1pbixcbiAgICAgICAgbWF4OiBtYXgsXG4gICAgICAgIHJldmVyc2U6IHJldmVyc2UsXG4gICAgICAgIGluZGV4OiAwLFxuICAgICAgICB0YWJJbmRleDogdGFiSW5kZXgsXG4gICAgICAgIGFyaWFMYWJlbDogYXJpYUxhYmVsRm9ySGFuZGxlLFxuICAgICAgICBhcmlhTGFiZWxsZWRCeTogYXJpYUxhYmVsbGVkQnlGb3JIYW5kbGUsXG4gICAgICAgIGFyaWFWYWx1ZVRleHRGb3JtYXR0ZXI6IGFyaWFWYWx1ZVRleHRGb3JtYXR0ZXJGb3JIYW5kbGUsXG4gICAgICAgIHN0eWxlOiBoYW5kbGVTdHlsZVswXSB8fCBoYW5kbGVTdHlsZSxcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoaCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuc2F2ZUhhbmRsZSgwLCBoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB2YXIgdHJhY2tPZmZzZXQgPSBzdGFydFBvaW50ICE9PSB1bmRlZmluZWQgPyB0aGlzLmNhbGNPZmZzZXQoc3RhcnRQb2ludCkgOiAwO1xuICAgICAgdmFyIG1lcmdlZFRyYWNrU3R5bGUgPSB0cmFja1N0eWxlWzBdIHx8IHRyYWNrU3R5bGU7XG4gICAgICB2YXIgdHJhY2sgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUcmFjaywge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItdHJhY2tcIiksXG4gICAgICAgIHZlcnRpY2FsOiB2ZXJ0aWNhbCxcbiAgICAgICAgaW5jbHVkZWQ6IGluY2x1ZGVkLFxuICAgICAgICBvZmZzZXQ6IHRyYWNrT2Zmc2V0LFxuICAgICAgICByZXZlcnNlOiByZXZlcnNlLFxuICAgICAgICBsZW5ndGg6IG9mZnNldCAtIHRyYWNrT2Zmc2V0LFxuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBtaW5pbXVtVHJhY2tTdHlsZSksIG1lcmdlZFRyYWNrU3R5bGUpXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRyYWNrczogdHJhY2ssXG4gICAgICAgIGhhbmRsZXM6IGhhbmRsZVxuICAgICAgfTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2xpZGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTbGlkZXIoU2xpZGVyKTsiLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxudmFyIE1hcmtzID0gZnVuY3Rpb24gTWFya3MoX3JlZikge1xuICB2YXIgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICB2ZXJ0aWNhbCA9IF9yZWYudmVydGljYWwsXG4gICAgICByZXZlcnNlID0gX3JlZi5yZXZlcnNlLFxuICAgICAgbWFya3MgPSBfcmVmLm1hcmtzLFxuICAgICAgaW5jbHVkZWQgPSBfcmVmLmluY2x1ZGVkLFxuICAgICAgdXBwZXJCb3VuZCA9IF9yZWYudXBwZXJCb3VuZCxcbiAgICAgIGxvd2VyQm91bmQgPSBfcmVmLmxvd2VyQm91bmQsXG4gICAgICBtYXggPSBfcmVmLm1heCxcbiAgICAgIG1pbiA9IF9yZWYubWluLFxuICAgICAgb25DbGlja0xhYmVsID0gX3JlZi5vbkNsaWNrTGFiZWw7XG4gIHZhciBtYXJrc0tleXMgPSBPYmplY3Qua2V5cyhtYXJrcyk7XG4gIHZhciByYW5nZSA9IG1heCAtIG1pbjtcbiAgdmFyIGVsZW1lbnRzID0gbWFya3NLZXlzLm1hcChwYXJzZUZsb2F0KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEgLSBiO1xuICB9KS5tYXAoZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgdmFyIG1hcmtQb2ludCA9IG1hcmtzW3BvaW50XTtcbiAgICB2YXIgbWFya1BvaW50SXNPYmplY3QgPSBfdHlwZW9mKG1hcmtQb2ludCkgPT09ICdvYmplY3QnICYmICEgLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KG1hcmtQb2ludCk7XG4gICAgdmFyIG1hcmtMYWJlbCA9IG1hcmtQb2ludElzT2JqZWN0ID8gbWFya1BvaW50LmxhYmVsIDogbWFya1BvaW50O1xuXG4gICAgaWYgKCFtYXJrTGFiZWwgJiYgbWFya0xhYmVsICE9PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgaXNBY3RpdmUgPSAhaW5jbHVkZWQgJiYgcG9pbnQgPT09IHVwcGVyQm91bmQgfHwgaW5jbHVkZWQgJiYgcG9pbnQgPD0gdXBwZXJCb3VuZCAmJiBwb2ludCA+PSBsb3dlckJvdW5kO1xuICAgIHZhciBtYXJrQ2xhc3NOYW1lID0gY2xhc3NOYW1lcygoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiLXRleHRcIiksIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KGNsYXNzTmFtZSwgXCItdGV4dC1hY3RpdmVcIiksIGlzQWN0aXZlKSwgX2NsYXNzTmFtZXMpKTtcblxuICAgIHZhciBib3R0b21TdHlsZSA9IF9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgICBtYXJnaW5Cb3R0b206ICctNTAlJ1xuICAgIH0sIHJldmVyc2UgPyAndG9wJyA6ICdib3R0b20nLCBcIlwiLmNvbmNhdCgocG9pbnQgLSBtaW4pIC8gcmFuZ2UgKiAxMDAsIFwiJVwiKSk7XG5cbiAgICB2YXIgbGVmdFN0eWxlID0gX2RlZmluZVByb3BlcnR5KHtcbiAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKFwiLmNvbmNhdChyZXZlcnNlID8gXCI1MCVcIiA6IFwiLTUwJVwiLCBcIilcIiksXG4gICAgICBtc1RyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKFwiLmNvbmNhdChyZXZlcnNlID8gXCI1MCVcIiA6IFwiLTUwJVwiLCBcIilcIilcbiAgICB9LCByZXZlcnNlID8gJ3JpZ2h0JyA6ICdsZWZ0JywgXCJcIi5jb25jYXQoKHBvaW50IC0gbWluKSAvIHJhbmdlICogMTAwLCBcIiVcIikpO1xuXG4gICAgdmFyIHN0eWxlID0gdmVydGljYWwgPyBib3R0b21TdHlsZSA6IGxlZnRTdHlsZTtcbiAgICB2YXIgbWFya1N0eWxlID0gbWFya1BvaW50SXNPYmplY3QgPyBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHN0eWxlKSwgbWFya1BvaW50LnN0eWxlKSA6IHN0eWxlO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBtYXJrQ2xhc3NOYW1lLFxuICAgICAgc3R5bGU6IG1hcmtTdHlsZSxcbiAgICAgIGtleTogcG9pbnQsXG4gICAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gb25Nb3VzZURvd24oZSkge1xuICAgICAgICByZXR1cm4gb25DbGlja0xhYmVsKGUsIHBvaW50KTtcbiAgICAgIH0sXG4gICAgICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uIG9uVG91Y2hTdGFydChlKSB7XG4gICAgICAgIHJldHVybiBvbkNsaWNrTGFiZWwoZSwgcG9pbnQpO1xuICAgICAgfVxuICAgIH0sIG1hcmtMYWJlbCk7XG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gIH0sIGVsZW1lbnRzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hcmtzOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAncmMtdG9vbHRpcCc7XG5pbXBvcnQgeyBjb21wb3NlUmVmIH0gZnJvbSBcInJjLXV0aWwvZXMvcmVmXCI7XG5pbXBvcnQgcmFmIGZyb20gXCJyYy11dGlsL2VzL3JhZlwiO1xudmFyIFNsaWRlclRvb2x0aXAgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgdmlzaWJsZSA9IHByb3BzLnZpc2libGUsXG4gICAgICBvdmVybGF5ID0gcHJvcHMub3ZlcmxheTtcbiAgdmFyIGlubmVyUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgdG9vbHRpcFJlZiA9IGNvbXBvc2VSZWYocmVmLCBpbm5lclJlZik7XG4gIHZhciByYWZSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgZnVuY3Rpb24gY2FuY2VsS2VlcEFsaWduKCkge1xuICAgIHJhZi5jYW5jZWwocmFmUmVmLmN1cnJlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24ga2VlcEFsaWduKCkge1xuICAgIHJhZlJlZi5jdXJyZW50ID0gcmFmKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfaW5uZXJSZWYkY3VycmVudDtcblxuICAgICAgKF9pbm5lclJlZiRjdXJyZW50ID0gaW5uZXJSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2lubmVyUmVmJGN1cnJlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9pbm5lclJlZiRjdXJyZW50LmZvcmNlUG9wdXBBbGlnbigpO1xuICAgIH0pO1xuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAga2VlcEFsaWduKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbmNlbEtlZXBBbGlnbigpO1xuICAgIH1cblxuICAgIHJldHVybiBjYW5jZWxLZWVwQWxpZ247XG4gIH0sIFt2aXNpYmxlLCBvdmVybGF5XSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiB0b29sdGlwUmVmXG4gIH0sIHByb3BzKSk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IFNsaWRlclRvb2x0aXA7IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2FybmluZyBmcm9tIFwicmMtdXRpbC9lcy93YXJuaW5nXCI7XG5cbnZhciBjYWxjUG9pbnRzID0gZnVuY3Rpb24gY2FsY1BvaW50cyh2ZXJ0aWNhbCwgbWFya3MsIGRvdHMsIHN0ZXAsIG1pbiwgbWF4KSB7XG4gIHdhcm5pbmcoZG90cyA/IHN0ZXAgPiAwIDogdHJ1ZSwgJ2BTbGlkZXJbc3RlcF1gIHNob3VsZCBiZSBhIHBvc2l0aXZlIG51bWJlciBpbiBvcmRlciB0byBtYWtlIFNsaWRlcltkb3RzXSB3b3JrLicpO1xuICB2YXIgcG9pbnRzID0gT2JqZWN0LmtleXMobWFya3MpLm1hcChwYXJzZUZsb2F0KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEgLSBiO1xuICB9KTtcblxuICBpZiAoZG90cyAmJiBzdGVwKSB7XG4gICAgZm9yICh2YXIgaSA9IG1pbjsgaSA8PSBtYXg7IGkgKz0gc3RlcCkge1xuICAgICAgaWYgKHBvaW50cy5pbmRleE9mKGkpID09PSAtMSkge1xuICAgICAgICBwb2ludHMucHVzaChpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcG9pbnRzO1xufTtcblxudmFyIFN0ZXBzID0gZnVuY3Rpb24gU3RlcHMoX3JlZikge1xuICB2YXIgcHJlZml4Q2xzID0gX3JlZi5wcmVmaXhDbHMsXG4gICAgICB2ZXJ0aWNhbCA9IF9yZWYudmVydGljYWwsXG4gICAgICByZXZlcnNlID0gX3JlZi5yZXZlcnNlLFxuICAgICAgbWFya3MgPSBfcmVmLm1hcmtzLFxuICAgICAgZG90cyA9IF9yZWYuZG90cyxcbiAgICAgIHN0ZXAgPSBfcmVmLnN0ZXAsXG4gICAgICBpbmNsdWRlZCA9IF9yZWYuaW5jbHVkZWQsXG4gICAgICBsb3dlckJvdW5kID0gX3JlZi5sb3dlckJvdW5kLFxuICAgICAgdXBwZXJCb3VuZCA9IF9yZWYudXBwZXJCb3VuZCxcbiAgICAgIG1heCA9IF9yZWYubWF4LFxuICAgICAgbWluID0gX3JlZi5taW4sXG4gICAgICBkb3RTdHlsZSA9IF9yZWYuZG90U3R5bGUsXG4gICAgICBhY3RpdmVEb3RTdHlsZSA9IF9yZWYuYWN0aXZlRG90U3R5bGU7XG4gIHZhciByYW5nZSA9IG1heCAtIG1pbjtcbiAgdmFyIGVsZW1lbnRzID0gY2FsY1BvaW50cyh2ZXJ0aWNhbCwgbWFya3MsIGRvdHMsIHN0ZXAsIG1pbiwgbWF4KS5tYXAoZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgdmFyIG9mZnNldCA9IFwiXCIuY29uY2F0KE1hdGguYWJzKHBvaW50IC0gbWluKSAvIHJhbmdlICogMTAwLCBcIiVcIik7XG4gICAgdmFyIGlzQWN0aXZlZCA9ICFpbmNsdWRlZCAmJiBwb2ludCA9PT0gdXBwZXJCb3VuZCB8fCBpbmNsdWRlZCAmJiBwb2ludCA8PSB1cHBlckJvdW5kICYmIHBvaW50ID49IGxvd2VyQm91bmQ7XG4gICAgdmFyIHN0eWxlID0gdmVydGljYWwgPyBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGRvdFN0eWxlKSwge30sIF9kZWZpbmVQcm9wZXJ0eSh7fSwgcmV2ZXJzZSA/ICd0b3AnIDogJ2JvdHRvbScsIG9mZnNldCkpIDogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBkb3RTdHlsZSksIHt9LCBfZGVmaW5lUHJvcGVydHkoe30sIHJldmVyc2UgPyAncmlnaHQnIDogJ2xlZnQnLCBvZmZzZXQpKTtcblxuICAgIGlmIChpc0FjdGl2ZWQpIHtcbiAgICAgIHN0eWxlID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzdHlsZSksIGFjdGl2ZURvdFN0eWxlKTtcbiAgICB9XG5cbiAgICB2YXIgcG9pbnRDbGFzc05hbWUgPSBjbGFzc05hbWVzKChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZG90XCIpLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRvdC1hY3RpdmVcIiksIGlzQWN0aXZlZCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kb3QtcmV2ZXJzZVwiKSwgcmV2ZXJzZSksIF9jbGFzc05hbWVzKSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IHBvaW50Q2xhc3NOYW1lLFxuICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAga2V5OiBwb2ludFxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc3RlcFwiKVxuICB9LCBlbGVtZW50cyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGVwczsiLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnZhciBUcmFjayA9IGZ1bmN0aW9uIFRyYWNrKHByb3BzKSB7XG4gIHZhciBfcmVmLCBfcmVmMjtcblxuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgaW5jbHVkZWQgPSBwcm9wcy5pbmNsdWRlZCxcbiAgICAgIHZlcnRpY2FsID0gcHJvcHMudmVydGljYWwsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlO1xuICB2YXIgbGVuZ3RoID0gcHJvcHMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gcHJvcHMub2Zmc2V0LFxuICAgICAgcmV2ZXJzZSA9IHByb3BzLnJldmVyc2U7XG5cbiAgaWYgKGxlbmd0aCA8IDApIHtcbiAgICByZXZlcnNlID0gIXJldmVyc2U7XG4gICAgbGVuZ3RoID0gTWF0aC5hYnMobGVuZ3RoKTtcbiAgICBvZmZzZXQgPSAxMDAgLSBvZmZzZXQ7XG4gIH1cblxuICB2YXIgcG9zaXRvblN0eWxlID0gdmVydGljYWwgPyAoX3JlZiA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX3JlZiwgcmV2ZXJzZSA/ICd0b3AnIDogJ2JvdHRvbScsIFwiXCIuY29uY2F0KG9mZnNldCwgXCIlXCIpKSwgX2RlZmluZVByb3BlcnR5KF9yZWYsIHJldmVyc2UgPyAnYm90dG9tJyA6ICd0b3AnLCAnYXV0bycpLCBfZGVmaW5lUHJvcGVydHkoX3JlZiwgXCJoZWlnaHRcIiwgXCJcIi5jb25jYXQobGVuZ3RoLCBcIiVcIikpLCBfcmVmKSA6IChfcmVmMiA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX3JlZjIsIHJldmVyc2UgPyAncmlnaHQnIDogJ2xlZnQnLCBcIlwiLmNvbmNhdChvZmZzZXQsIFwiJVwiKSksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMiwgcmV2ZXJzZSA/ICdsZWZ0JyA6ICdyaWdodCcsICdhdXRvJyksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMiwgXCJ3aWR0aFwiLCBcIlwiLmNvbmNhdChsZW5ndGgsIFwiJVwiKSksIF9yZWYyKTtcblxuICB2YXIgZWxTdHlsZSA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3R5bGUpLCBwb3NpdG9uU3R5bGUpO1xuXG4gIHJldHVybiBpbmNsdWRlZCA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICBzdHlsZTogZWxTdHlsZVxuICB9KSA6IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmFjazsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfZ2V0IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRcIjtcbmltcG9ydCBfZ2V0UHJvdG90eXBlT2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9jcmVhdGVTdXBlciBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlU3VwZXJcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lciBmcm9tIFwicmMtdXRpbC9lcy9Eb20vYWRkRXZlbnRMaXN0ZW5lclwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2FybmluZyBmcm9tIFwicmMtdXRpbC9lcy93YXJuaW5nXCI7XG5pbXBvcnQgU3RlcHMgZnJvbSAnLi9TdGVwcyc7XG5pbXBvcnQgTWFya3MgZnJvbSAnLi9NYXJrcyc7XG5pbXBvcnQgSGFuZGxlIGZyb20gJy4uL0hhbmRsZSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTbGlkZXIoQ29tcG9uZW50KSB7XG4gIHZhciBfYTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuXG5cbiAgcmV0dXJuIF9hID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKENvbXBvbmVudEVuaGFuY2VyLCBfQ29tcG9uZW50KTtcblxuICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQ29tcG9uZW50RW5oYW5jZXIpO1xuXG4gICAgZnVuY3Rpb24gQ29tcG9uZW50RW5oYW5jZXIocHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbXBvbmVudEVuaGFuY2VyKTtcblxuICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG5cbiAgICAgIF90aGlzLm9uRG93biA9IGZ1bmN0aW9uIChlLCBwb3NpdGlvbikge1xuICAgICAgICB2YXIgcCA9IHBvc2l0aW9uO1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGRyYWdnYWJsZVRyYWNrID0gX3RoaXMkcHJvcHMuZHJhZ2dhYmxlVHJhY2ssXG4gICAgICAgICAgICBpc1ZlcnRpY2FsID0gX3RoaXMkcHJvcHMudmVydGljYWw7XG4gICAgICAgIHZhciBib3VuZHMgPSBfdGhpcy5zdGF0ZS5ib3VuZHM7XG4gICAgICAgIHZhciB2YWx1ZSA9IGRyYWdnYWJsZVRyYWNrICYmIF90aGlzLnBvc2l0aW9uR2V0VmFsdWUgPyBfdGhpcy5wb3NpdGlvbkdldFZhbHVlKHApIHx8IFtdIDogW107XG4gICAgICAgIHZhciBpblBvaW50ID0gdXRpbHMuaXNFdmVudEZyb21IYW5kbGUoZSwgX3RoaXMuaGFuZGxlc1JlZnMpO1xuICAgICAgICBfdGhpcy5kcmFnVHJhY2sgPSBkcmFnZ2FibGVUcmFjayAmJiBib3VuZHMubGVuZ3RoID49IDIgJiYgIWluUG9pbnQgJiYgIXZhbHVlLm1hcChmdW5jdGlvbiAobiwgaSkge1xuICAgICAgICAgIHZhciB2ID0gIWkgPyBuID49IGJvdW5kc1tpXSA6IHRydWU7XG4gICAgICAgICAgcmV0dXJuIGkgPT09IHZhbHVlLmxlbmd0aCAtIDEgPyBuIDw9IGJvdW5kc1tpXSA6IHY7XG4gICAgICAgIH0pLnNvbWUoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICByZXR1cm4gIWM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChfdGhpcy5kcmFnVHJhY2spIHtcbiAgICAgICAgICBfdGhpcy5kcmFnT2Zmc2V0ID0gcDtcbiAgICAgICAgICBfdGhpcy5zdGFydEJvdW5kcyA9IF90b0NvbnN1bWFibGVBcnJheShib3VuZHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICghaW5Qb2ludCkge1xuICAgICAgICAgICAgX3RoaXMuZHJhZ09mZnNldCA9IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGVQb3NpdGlvbiA9IHV0aWxzLmdldEhhbmRsZUNlbnRlclBvc2l0aW9uKGlzVmVydGljYWwsIGUudGFyZ2V0KTtcbiAgICAgICAgICAgIF90aGlzLmRyYWdPZmZzZXQgPSBwIC0gaGFuZGxlUG9zaXRpb247XG4gICAgICAgICAgICBwID0gaGFuZGxlUG9zaXRpb247XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMub25TdGFydChwKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Nb3VzZURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5idXR0b24gIT09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5yZW1vdmVEb2N1bWVudEV2ZW50cygpO1xuXG4gICAgICAgIHZhciBpc1ZlcnRpY2FsID0gX3RoaXMucHJvcHMudmVydGljYWw7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHV0aWxzLmdldE1vdXNlUG9zaXRpb24oaXNWZXJ0aWNhbCwgZSk7XG5cbiAgICAgICAgX3RoaXMub25Eb3duKGUsIHBvc2l0aW9uKTtcblxuICAgICAgICBfdGhpcy5hZGREb2N1bWVudE1vdXNlRXZlbnRzKCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAodXRpbHMuaXNOb3RUb3VjaEV2ZW50KGUpKSByZXR1cm47XG4gICAgICAgIHZhciBpc1ZlcnRpY2FsID0gX3RoaXMucHJvcHMudmVydGljYWw7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHV0aWxzLmdldFRvdWNoUG9zaXRpb24oaXNWZXJ0aWNhbCwgZSk7XG5cbiAgICAgICAgX3RoaXMub25Eb3duKGUsIHBvc2l0aW9uKTtcblxuICAgICAgICBfdGhpcy5hZGREb2N1bWVudFRvdWNoRXZlbnRzKCk7XG5cbiAgICAgICAgdXRpbHMucGF1c2VFdmVudChlKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uRm9jdXMgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBvbkZvY3VzID0gX3RoaXMkcHJvcHMyLm9uRm9jdXMsXG4gICAgICAgICAgICB2ZXJ0aWNhbCA9IF90aGlzJHByb3BzMi52ZXJ0aWNhbDtcblxuICAgICAgICBpZiAodXRpbHMuaXNFdmVudEZyb21IYW5kbGUoZSwgX3RoaXMuaGFuZGxlc1JlZnMpICYmICFfdGhpcy5kcmFnVHJhY2spIHtcbiAgICAgICAgICB2YXIgaGFuZGxlUG9zaXRpb24gPSB1dGlscy5nZXRIYW5kbGVDZW50ZXJQb3NpdGlvbih2ZXJ0aWNhbCwgZS50YXJnZXQpO1xuICAgICAgICAgIF90aGlzLmRyYWdPZmZzZXQgPSAwO1xuXG4gICAgICAgICAgX3RoaXMub25TdGFydChoYW5kbGVQb3NpdGlvbik7XG5cbiAgICAgICAgICB1dGlscy5wYXVzZUV2ZW50KGUpO1xuXG4gICAgICAgICAgaWYgKG9uRm9jdXMpIHtcbiAgICAgICAgICAgIG9uRm9jdXMoZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkJsdXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgb25CbHVyID0gX3RoaXMucHJvcHMub25CbHVyO1xuXG4gICAgICAgIGlmICghX3RoaXMuZHJhZ1RyYWNrKSB7XG4gICAgICAgICAgX3RoaXMub25FbmQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvbkJsdXIpIHtcbiAgICAgICAgICBvbkJsdXIoZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uTW91c2VVcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzLmhhbmRsZXNSZWZzW190aGlzLnByZXZNb3ZlZEhhbmRsZUluZGV4XSkge1xuICAgICAgICAgIF90aGlzLmhhbmRsZXNSZWZzW190aGlzLnByZXZNb3ZlZEhhbmRsZUluZGV4XS5jbGlja0ZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uTW91c2VNb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCFfdGhpcy5zbGlkZXJSZWYpIHtcbiAgICAgICAgICBfdGhpcy5vbkVuZCgpO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBvc2l0aW9uID0gdXRpbHMuZ2V0TW91c2VQb3NpdGlvbihfdGhpcy5wcm9wcy52ZXJ0aWNhbCwgZSk7XG5cbiAgICAgICAgX3RoaXMub25Nb3ZlKGUsIHBvc2l0aW9uIC0gX3RoaXMuZHJhZ09mZnNldCwgX3RoaXMuZHJhZ1RyYWNrLCBfdGhpcy5zdGFydEJvdW5kcyk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblRvdWNoTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICh1dGlscy5pc05vdFRvdWNoRXZlbnQoZSkgfHwgIV90aGlzLnNsaWRlclJlZikge1xuICAgICAgICAgIF90aGlzLm9uRW5kKCk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcG9zaXRpb24gPSB1dGlscy5nZXRUb3VjaFBvc2l0aW9uKF90aGlzLnByb3BzLnZlcnRpY2FsLCBlKTtcblxuICAgICAgICBfdGhpcy5vbk1vdmUoZSwgcG9zaXRpb24gLSBfdGhpcy5kcmFnT2Zmc2V0LCBfdGhpcy5kcmFnVHJhY2ssIF90aGlzLnN0YXJ0Qm91bmRzKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChfdGhpcy5zbGlkZXJSZWYgJiYgdXRpbHMuaXNFdmVudEZyb21IYW5kbGUoZSwgX3RoaXMuaGFuZGxlc1JlZnMpKSB7XG4gICAgICAgICAgX3RoaXMub25LZXlib2FyZChlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25DbGlja01hcmtMYWJlbCA9IGZ1bmN0aW9uIChlLCB2YWx1ZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIF90aGlzLm9uQ2hhbmdlKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby11bnVzZWQtc3RhdGVcblxuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5vbkVuZCh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zYXZlU2xpZGVyID0gZnVuY3Rpb24gKHNsaWRlcikge1xuICAgICAgICBfdGhpcy5zbGlkZXJSZWYgPSBzbGlkZXI7XG4gICAgICB9O1xuXG4gICAgICB2YXIgc3RlcCA9IHByb3BzLnN0ZXAsXG4gICAgICAgICAgbWF4ID0gcHJvcHMubWF4LFxuICAgICAgICAgIG1pbiA9IHByb3BzLm1pbjtcbiAgICAgIHZhciBpc1BvaW50RGlmZkV2ZW4gPSBpc0Zpbml0ZShtYXggLSBtaW4pID8gKG1heCAtIG1pbikgJSBzdGVwID09PSAwIDogdHJ1ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgICB3YXJuaW5nKHN0ZXAgJiYgTWF0aC5mbG9vcihzdGVwKSA9PT0gc3RlcCA/IGlzUG9pbnREaWZmRXZlbiA6IHRydWUsIFwiU2xpZGVyW21heF0gLSBTbGlkZXJbbWluXSAoXCIuY29uY2F0KG1heCAtIG1pbiwgXCIpIHNob3VsZCBiZSBhIG11bHRpcGxlIG9mIFNsaWRlcltzdGVwXSAoXCIpLmNvbmNhdChzdGVwLCBcIilcIikpO1xuICAgICAgX3RoaXMuaGFuZGxlc1JlZnMgPSB7fTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ29tcG9uZW50RW5oYW5jZXIsIFt7XG4gICAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgLy8gU25hcHNob3QgdGVzdGluZyBjYW5ub3QgaGFuZGxlIHJlZnMsIHNvIGJlIHN1cmUgdG8gbnVsbC1jaGVjayB0aGlzLlxuICAgICAgICB0aGlzLmRvY3VtZW50ID0gdGhpcy5zbGlkZXJSZWYgJiYgdGhpcy5zbGlkZXJSZWYub3duZXJEb2N1bWVudDtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBhdXRvRm9jdXMgPSBfdGhpcyRwcm9wczMuYXV0b0ZvY3VzLFxuICAgICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wczMuZGlzYWJsZWQ7XG5cbiAgICAgICAgaWYgKGF1dG9Gb2N1cyAmJiAhZGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKF9nZXQoX2dldFByb3RvdHlwZU9mKENvbXBvbmVudEVuaGFuY2VyLnByb3RvdHlwZSksIFwiY29tcG9uZW50V2lsbFVubW91bnRcIiwgdGhpcykpIF9nZXQoX2dldFByb3RvdHlwZU9mKENvbXBvbmVudEVuaGFuY2VyLnByb3RvdHlwZSksIFwiY29tcG9uZW50V2lsbFVubW91bnRcIiwgdGhpcykuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVEb2N1bWVudEV2ZW50cygpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRTbGlkZXJTdGFydFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNsaWRlclN0YXJ0KCkge1xuICAgICAgICB2YXIgc2xpZGVyID0gdGhpcy5zbGlkZXJSZWY7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgdmVydGljYWwgPSBfdGhpcyRwcm9wczQudmVydGljYWwsXG4gICAgICAgICAgICByZXZlcnNlID0gX3RoaXMkcHJvcHM0LnJldmVyc2U7XG4gICAgICAgIHZhciByZWN0ID0gc2xpZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICAgIHJldHVybiByZXZlcnNlID8gcmVjdC5ib3R0b20gOiByZWN0LnRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB3aW5kb3cucGFnZVhPZmZzZXQgKyAocmV2ZXJzZSA/IHJlY3QucmlnaHQgOiByZWN0LmxlZnQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRTbGlkZXJMZW5ndGhcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTbGlkZXJMZW5ndGgoKSB7XG4gICAgICAgIHZhciBzbGlkZXIgPSB0aGlzLnNsaWRlclJlZjtcblxuICAgICAgICBpZiAoIXNsaWRlcikge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvb3JkcyA9IHNsaWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMudmVydGljYWwgPyBjb29yZHMuaGVpZ2h0IDogY29vcmRzLndpZHRoO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJhZGREb2N1bWVudFRvdWNoRXZlbnRzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRG9jdW1lbnRUb3VjaEV2ZW50cygpIHtcbiAgICAgICAgLy8ganVzdCB3b3JrIGZvciBDaHJvbWUgaU9TIFNhZmFyaSBhbmQgQW5kcm9pZCBCcm93c2VyXG4gICAgICAgIHRoaXMub25Ub3VjaE1vdmVMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXIodGhpcy5kb2N1bWVudCwgJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUpO1xuICAgICAgICB0aGlzLm9uVG91Y2hVcExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmRvY3VtZW50LCAndG91Y2hlbmQnLCB0aGlzLm9uRW5kKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYWRkRG9jdW1lbnRNb3VzZUV2ZW50c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZERvY3VtZW50TW91c2VFdmVudHMoKSB7XG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmVMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXIodGhpcy5kb2N1bWVudCwgJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICB0aGlzLm9uTW91c2VVcExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmRvY3VtZW50LCAnbW91c2V1cCcsIHRoaXMub25FbmQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW1vdmVEb2N1bWVudEV2ZW50c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZURvY3VtZW50RXZlbnRzKCkge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4gICAgICAgIHRoaXMub25Ub3VjaE1vdmVMaXN0ZW5lciAmJiB0aGlzLm9uVG91Y2hNb3ZlTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMub25Ub3VjaFVwTGlzdGVuZXIgJiYgdGhpcy5vblRvdWNoVXBMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5vbk1vdXNlTW92ZUxpc3RlbmVyICYmIHRoaXMub25Nb3VzZU1vdmVMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5vbk1vdXNlVXBMaXN0ZW5lciAmJiB0aGlzLm9uTW91c2VVcExpc3RlbmVyLnJlbW92ZSgpO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJmb2N1c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgICB2YXIgX3RoaXMkaGFuZGxlc1JlZnMkO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgKF90aGlzJGhhbmRsZXNSZWZzJCA9IHRoaXMuaGFuZGxlc1JlZnNbMF0pID09PSBudWxsIHx8IF90aGlzJGhhbmRsZXNSZWZzJCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkaGFuZGxlc1JlZnMkLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImJsdXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuaGFuZGxlc1JlZnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHZhciBfdGhpczIkaGFuZGxlc1JlZnMka2UsIF90aGlzMiRoYW5kbGVzUmVmcyRrZTI7XG5cbiAgICAgICAgICAoX3RoaXMyJGhhbmRsZXNSZWZzJGtlID0gX3RoaXMyLmhhbmRsZXNSZWZzW2tleV0pID09PSBudWxsIHx8IF90aGlzMiRoYW5kbGVzUmVmcyRrZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF90aGlzMiRoYW5kbGVzUmVmcyRrZTIgPSBfdGhpczIkaGFuZGxlc1JlZnMka2UuYmx1cikgPT09IG51bGwgfHwgX3RoaXMyJGhhbmRsZXNSZWZzJGtlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMyJGhhbmRsZXNSZWZzJGtlMi5jYWxsKF90aGlzMiRoYW5kbGVzUmVmcyRrZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjYWxjVmFsdWVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxjVmFsdWUob2Zmc2V0KSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgdmVydGljYWwgPSBfdGhpcyRwcm9wczUudmVydGljYWwsXG4gICAgICAgICAgICBtaW4gPSBfdGhpcyRwcm9wczUubWluLFxuICAgICAgICAgICAgbWF4ID0gX3RoaXMkcHJvcHM1Lm1heDtcbiAgICAgICAgdmFyIHJhdGlvID0gTWF0aC5hYnMoTWF0aC5tYXgob2Zmc2V0LCAwKSAvIHRoaXMuZ2V0U2xpZGVyTGVuZ3RoKCkpO1xuICAgICAgICB2YXIgdmFsdWUgPSB2ZXJ0aWNhbCA/ICgxIC0gcmF0aW8pICogKG1heCAtIG1pbikgKyBtaW4gOiByYXRpbyAqIChtYXggLSBtaW4pICsgbWluO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNhbGNWYWx1ZUJ5UG9zXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2FsY1ZhbHVlQnlQb3MocG9zaXRpb24pIHtcbiAgICAgICAgdmFyIHNpZ24gPSB0aGlzLnByb3BzLnJldmVyc2UgPyAtMSA6ICsxO1xuICAgICAgICB2YXIgcGl4ZWxPZmZzZXQgPSBzaWduICogKHBvc2l0aW9uIC0gdGhpcy5nZXRTbGlkZXJTdGFydCgpKTtcbiAgICAgICAgdmFyIG5leHRWYWx1ZSA9IHRoaXMudHJpbUFsaWduVmFsdWUodGhpcy5jYWxjVmFsdWUocGl4ZWxPZmZzZXQpKTtcbiAgICAgICAgcmV0dXJuIG5leHRWYWx1ZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2FsY09mZnNldFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGNPZmZzZXQodmFsdWUpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzNiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBtaW4gPSBfdGhpcyRwcm9wczYubWluLFxuICAgICAgICAgICAgbWF4ID0gX3RoaXMkcHJvcHM2Lm1heDtcbiAgICAgICAgdmFyIHJhdGlvID0gKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pO1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgcmF0aW8gKiAxMDApO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzYXZlSGFuZGxlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2F2ZUhhbmRsZShpbmRleCwgaGFuZGxlKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlc1JlZnNbaW5kZXhdID0gaGFuZGxlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgICB2YXIgX3RoaXMkcHJvcHM3ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzNy5wcmVmaXhDbHMsXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczcuY2xhc3NOYW1lLFxuICAgICAgICAgICAgbWFya3MgPSBfdGhpcyRwcm9wczcubWFya3MsXG4gICAgICAgICAgICBkb3RzID0gX3RoaXMkcHJvcHM3LmRvdHMsXG4gICAgICAgICAgICBzdGVwID0gX3RoaXMkcHJvcHM3LnN0ZXAsXG4gICAgICAgICAgICBpbmNsdWRlZCA9IF90aGlzJHByb3BzNy5pbmNsdWRlZCxcbiAgICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkcHJvcHM3LmRpc2FibGVkLFxuICAgICAgICAgICAgdmVydGljYWwgPSBfdGhpcyRwcm9wczcudmVydGljYWwsXG4gICAgICAgICAgICByZXZlcnNlID0gX3RoaXMkcHJvcHM3LnJldmVyc2UsXG4gICAgICAgICAgICBtaW4gPSBfdGhpcyRwcm9wczcubWluLFxuICAgICAgICAgICAgbWF4ID0gX3RoaXMkcHJvcHM3Lm1heCxcbiAgICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHM3LmNoaWxkcmVuLFxuICAgICAgICAgICAgbWF4aW11bVRyYWNrU3R5bGUgPSBfdGhpcyRwcm9wczcubWF4aW11bVRyYWNrU3R5bGUsXG4gICAgICAgICAgICBzdHlsZSA9IF90aGlzJHByb3BzNy5zdHlsZSxcbiAgICAgICAgICAgIHJhaWxTdHlsZSA9IF90aGlzJHByb3BzNy5yYWlsU3R5bGUsXG4gICAgICAgICAgICBkb3RTdHlsZSA9IF90aGlzJHByb3BzNy5kb3RTdHlsZSxcbiAgICAgICAgICAgIGFjdGl2ZURvdFN0eWxlID0gX3RoaXMkcHJvcHM3LmFjdGl2ZURvdFN0eWxlO1xuXG4gICAgICAgIHZhciBfZ2V0JGNhbGwgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihDb21wb25lbnRFbmhhbmNlci5wcm90b3R5cGUpLCBcInJlbmRlclwiLCB0aGlzKS5jYWxsKHRoaXMpLFxuICAgICAgICAgICAgdHJhY2tzID0gX2dldCRjYWxsLnRyYWNrcyxcbiAgICAgICAgICAgIGhhbmRsZXMgPSBfZ2V0JGNhbGwuaGFuZGxlcztcblxuICAgICAgICB2YXIgc2xpZGVyQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItd2l0aC1tYXJrc1wiKSwgT2JqZWN0LmtleXMobWFya3MpLmxlbmd0aCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kaXNhYmxlZFwiKSwgZGlzYWJsZWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItdmVydGljYWxcIiksIHZlcnRpY2FsKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBjbGFzc05hbWUsIGNsYXNzTmFtZSksIF9jbGFzc05hbWVzKSk7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgcmVmOiB0aGlzLnNhdmVTbGlkZXIsXG4gICAgICAgICAgY2xhc3NOYW1lOiBzbGlkZXJDbGFzc05hbWUsXG4gICAgICAgICAgb25Ub3VjaFN0YXJ0OiBkaXNhYmxlZCA/IG5vb3AgOiB0aGlzLm9uVG91Y2hTdGFydCxcbiAgICAgICAgICBvbk1vdXNlRG93bjogZGlzYWJsZWQgPyBub29wIDogdGhpcy5vbk1vdXNlRG93bixcbiAgICAgICAgICBvbk1vdXNlVXA6IGRpc2FibGVkID8gbm9vcCA6IHRoaXMub25Nb3VzZVVwLFxuICAgICAgICAgIG9uS2V5RG93bjogZGlzYWJsZWQgPyBub29wIDogdGhpcy5vbktleURvd24sXG4gICAgICAgICAgb25Gb2N1czogZGlzYWJsZWQgPyBub29wIDogdGhpcy5vbkZvY3VzLFxuICAgICAgICAgIG9uQmx1cjogZGlzYWJsZWQgPyBub29wIDogdGhpcy5vbkJsdXIsXG4gICAgICAgICAgc3R5bGU6IHN0eWxlXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcmFpbFwiKSxcbiAgICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBtYXhpbXVtVHJhY2tTdHlsZSksIHJhaWxTdHlsZSlcbiAgICAgICAgfSksIHRyYWNrcywgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU3RlcHMsIHtcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICB2ZXJ0aWNhbDogdmVydGljYWwsXG4gICAgICAgICAgcmV2ZXJzZTogcmV2ZXJzZSxcbiAgICAgICAgICBtYXJrczogbWFya3MsXG4gICAgICAgICAgZG90czogZG90cyxcbiAgICAgICAgICBzdGVwOiBzdGVwLFxuICAgICAgICAgIGluY2x1ZGVkOiBpbmNsdWRlZCxcbiAgICAgICAgICBsb3dlckJvdW5kOiB0aGlzLmdldExvd2VyQm91bmQoKSxcbiAgICAgICAgICB1cHBlckJvdW5kOiB0aGlzLmdldFVwcGVyQm91bmQoKSxcbiAgICAgICAgICBtYXg6IG1heCxcbiAgICAgICAgICBtaW46IG1pbixcbiAgICAgICAgICBkb3RTdHlsZTogZG90U3R5bGUsXG4gICAgICAgICAgYWN0aXZlRG90U3R5bGU6IGFjdGl2ZURvdFN0eWxlXG4gICAgICAgIH0pLCBoYW5kbGVzLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNYXJrcywge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1tYXJrXCIpLFxuICAgICAgICAgIG9uQ2xpY2tMYWJlbDogZGlzYWJsZWQgPyBub29wIDogdGhpcy5vbkNsaWNrTWFya0xhYmVsLFxuICAgICAgICAgIHZlcnRpY2FsOiB2ZXJ0aWNhbCxcbiAgICAgICAgICBtYXJrczogbWFya3MsXG4gICAgICAgICAgaW5jbHVkZWQ6IGluY2x1ZGVkLFxuICAgICAgICAgIGxvd2VyQm91bmQ6IHRoaXMuZ2V0TG93ZXJCb3VuZCgpLFxuICAgICAgICAgIHVwcGVyQm91bmQ6IHRoaXMuZ2V0VXBwZXJCb3VuZCgpLFxuICAgICAgICAgIG1heDogbWF4LFxuICAgICAgICAgIG1pbjogbWluLFxuICAgICAgICAgIHJldmVyc2U6IHJldmVyc2VcbiAgICAgICAgfSksIGNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ29tcG9uZW50RW5oYW5jZXI7XG4gIH0oQ29tcG9uZW50KSwgX2EuZGlzcGxheU5hbWUgPSBcIkNvbXBvbmVudEVuaGFuY2VyKFwiLmNvbmNhdChDb21wb25lbnQuZGlzcGxheU5hbWUsIFwiKVwiKSwgX2EuZGVmYXVsdFByb3BzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBDb21wb25lbnQuZGVmYXVsdFByb3BzKSwge30sIHtcbiAgICBwcmVmaXhDbHM6ICdyYy1zbGlkZXInLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgbWluOiAwLFxuICAgIG1heDogMTAwLFxuICAgIHN0ZXA6IDEsXG4gICAgbWFya3M6IHt9LFxuICAgIGhhbmRsZTogZnVuY3Rpb24gaGFuZGxlKHByb3BzKSB7XG4gICAgICB2YXIgaW5kZXggPSBwcm9wcy5pbmRleCxcbiAgICAgICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImluZGV4XCJdKTtcblxuICAgICAgZGVsZXRlIHJlc3RQcm9wcy5kcmFnZ2luZztcblxuICAgICAgaWYgKHJlc3RQcm9wcy52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEhhbmRsZSwgX2V4dGVuZHMoe30sIHJlc3RQcm9wcywge1xuICAgICAgICBrZXk6IGluZGV4XG4gICAgICB9KSk7XG4gICAgfSxcbiAgICBvbkJlZm9yZUNoYW5nZTogbm9vcCxcbiAgICBvbkNoYW5nZTogbm9vcCxcbiAgICBvbkFmdGVyQ2hhbmdlOiBub29wLFxuICAgIGluY2x1ZGVkOiB0cnVlLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBkb3RzOiBmYWxzZSxcbiAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgcmV2ZXJzZTogZmFsc2UsXG4gICAgdHJhY2tTdHlsZTogW3t9XSxcbiAgICBoYW5kbGVTdHlsZTogW3t9XSxcbiAgICByYWlsU3R5bGU6IHt9LFxuICAgIGRvdFN0eWxlOiB7fSxcbiAgICBhY3RpdmVEb3RTdHlsZToge31cbiAgfSksIF9hO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9jcmVhdGVTdXBlciBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlU3VwZXJcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL2NvbW1vbi9TbGlkZXJUb29sdGlwJztcbmltcG9ydCBIYW5kbGUgZnJvbSAnLi9IYW5kbGUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2xpZGVyV2l0aFRvb2x0aXAoQ29tcG9uZW50KSB7XG4gIHZhciBfYTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuXG5cbiAgcmV0dXJuIF9hID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKENvbXBvbmVudFdyYXBwZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihDb21wb25lbnRXcmFwcGVyKTtcblxuICAgIGZ1bmN0aW9uIENvbXBvbmVudFdyYXBwZXIoKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21wb25lbnRXcmFwcGVyKTtcblxuICAgICAgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICB2aXNpYmxlczoge31cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmhhbmRsZVRvb2x0aXBWaXNpYmxlQ2hhbmdlID0gZnVuY3Rpb24gKGluZGV4LCB2aXNpYmxlKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmlzaWJsZXM6IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcHJldlN0YXRlLnZpc2libGVzKSwge30sIF9kZWZpbmVQcm9wZXJ0eSh7fSwgaW5kZXgsIHZpc2libGUpKVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuaGFuZGxlV2l0aFRvb2x0aXAgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgICAgICAgZHJhZ2dpbmcgPSBfcmVmLmRyYWdnaW5nLFxuICAgICAgICAgICAgaW5kZXggPSBfcmVmLmluZGV4LFxuICAgICAgICAgICAgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkLFxuICAgICAgICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcInZhbHVlXCIsIFwiZHJhZ2dpbmdcIiwgXCJpbmRleFwiLCBcImRpc2FibGVkXCJdKTtcblxuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHRpcEZvcm1hdHRlciA9IF90aGlzJHByb3BzLnRpcEZvcm1hdHRlcixcbiAgICAgICAgICAgIHRpcFByb3BzID0gX3RoaXMkcHJvcHMudGlwUHJvcHMsXG4gICAgICAgICAgICBoYW5kbGVTdHlsZSA9IF90aGlzJHByb3BzLmhhbmRsZVN0eWxlLFxuICAgICAgICAgICAgZ2V0VG9vbHRpcENvbnRhaW5lciA9IF90aGlzJHByb3BzLmdldFRvb2x0aXBDb250YWluZXI7XG5cbiAgICAgICAgdmFyIF90aXBQcm9wcyRwcmVmaXhDbHMgPSB0aXBQcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICBwcmVmaXhDbHMgPSBfdGlwUHJvcHMkcHJlZml4Q2xzID09PSB2b2lkIDAgPyAncmMtc2xpZGVyLXRvb2x0aXAnIDogX3RpcFByb3BzJHByZWZpeENscyxcbiAgICAgICAgICAgIF90aXBQcm9wcyRvdmVybGF5ID0gdGlwUHJvcHMub3ZlcmxheSxcbiAgICAgICAgICAgIG92ZXJsYXkgPSBfdGlwUHJvcHMkb3ZlcmxheSA9PT0gdm9pZCAwID8gdGlwRm9ybWF0dGVyKHZhbHVlKSA6IF90aXBQcm9wcyRvdmVybGF5LFxuICAgICAgICAgICAgX3RpcFByb3BzJHBsYWNlbWVudCA9IHRpcFByb3BzLnBsYWNlbWVudCxcbiAgICAgICAgICAgIHBsYWNlbWVudCA9IF90aXBQcm9wcyRwbGFjZW1lbnQgPT09IHZvaWQgMCA/ICd0b3AnIDogX3RpcFByb3BzJHBsYWNlbWVudCxcbiAgICAgICAgICAgIF90aXBQcm9wcyR2aXNpYmxlID0gdGlwUHJvcHMudmlzaWJsZSxcbiAgICAgICAgICAgIHZpc2libGUgPSBfdGlwUHJvcHMkdmlzaWJsZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfdGlwUHJvcHMkdmlzaWJsZSxcbiAgICAgICAgICAgIHJlc3RUb29sdGlwUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXModGlwUHJvcHMsIFtcInByZWZpeENsc1wiLCBcIm92ZXJsYXlcIiwgXCJwbGFjZW1lbnRcIiwgXCJ2aXNpYmxlXCJdKTtcblxuICAgICAgICB2YXIgaGFuZGxlU3R5bGVXaXRoSW5kZXg7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaGFuZGxlU3R5bGUpKSB7XG4gICAgICAgICAgaGFuZGxlU3R5bGVXaXRoSW5kZXggPSBoYW5kbGVTdHlsZVtpbmRleF0gfHwgaGFuZGxlU3R5bGVbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGFuZGxlU3R5bGVXaXRoSW5kZXggPSBoYW5kbGVTdHlsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwLCBfZXh0ZW5kcyh7fSwgcmVzdFRvb2x0aXBQcm9wcywge1xuICAgICAgICAgIGdldFRvb2x0aXBDb250YWluZXI6IGdldFRvb2x0aXBDb250YWluZXIsXG4gICAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgICAgb3ZlcmxheTogb3ZlcmxheSxcbiAgICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgICAgICB2aXNpYmxlOiAhZGlzYWJsZWQgJiYgKF90aGlzLnN0YXRlLnZpc2libGVzW2luZGV4XSB8fCBkcmFnZ2luZykgfHwgdmlzaWJsZSxcbiAgICAgICAgICBrZXk6IGluZGV4XG4gICAgICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChIYW5kbGUsIF9leHRlbmRzKHt9LCByZXN0UHJvcHMsIHtcbiAgICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7fSwgaGFuZGxlU3R5bGVXaXRoSW5kZXgpLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBvbk1vdXNlRW50ZXI6IGZ1bmN0aW9uIG9uTW91c2VFbnRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVUb29sdGlwVmlzaWJsZUNoYW5nZShpbmRleCwgdHJ1ZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbk1vdXNlTGVhdmU6IGZ1bmN0aW9uIG9uTW91c2VMZWF2ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVUb29sdGlwVmlzaWJsZUNoYW5nZShpbmRleCwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ29tcG9uZW50V3JhcHBlciwgW3tcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgICAgaGFuZGxlOiB0aGlzLmhhbmRsZVdpdGhUb29sdGlwXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ29tcG9uZW50V3JhcHBlcjtcbiAgfShSZWFjdC5Db21wb25lbnQpLCBfYS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGlwRm9ybWF0dGVyOiBmdW5jdGlvbiB0aXBGb3JtYXR0ZXIodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIGhhbmRsZVN0eWxlOiBbe31dLFxuICAgIHRpcFByb3BzOiB7fSxcbiAgICBnZXRUb29sdGlwQ29udGFpbmVyOiBmdW5jdGlvbiBnZXRUb29sdGlwQ29udGFpbmVyKG5vZGUpIHtcbiAgICAgIHJldHVybiBub2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICB9LCBfYTtcbn0iLCJpbXBvcnQgU2xpZGVyIGZyb20gJy4vU2xpZGVyJztcbmltcG9ydCBSYW5nZSBmcm9tICcuL1JhbmdlJztcbmltcG9ydCBIYW5kbGUgZnJvbSAnLi9IYW5kbGUnO1xuaW1wb3J0IGNyZWF0ZVNsaWRlcldpdGhUb29sdGlwIGZyb20gJy4vY3JlYXRlU2xpZGVyV2l0aFRvb2x0aXAnO1xuaW1wb3J0IFNsaWRlclRvb2x0aXAgZnJvbSAnLi9jb21tb24vU2xpZGVyVG9vbHRpcCc7XG52YXIgSW50ZXJuYWxTbGlkZXIgPSBTbGlkZXI7XG5JbnRlcm5hbFNsaWRlci5SYW5nZSA9IFJhbmdlO1xuSW50ZXJuYWxTbGlkZXIuSGFuZGxlID0gSGFuZGxlO1xuSW50ZXJuYWxTbGlkZXIuY3JlYXRlU2xpZGVyV2l0aFRvb2x0aXAgPSBjcmVhdGVTbGlkZXJXaXRoVG9vbHRpcDtcbmV4cG9ydCBkZWZhdWx0IEludGVybmFsU2xpZGVyO1xuZXhwb3J0IHsgUmFuZ2UsIEhhbmRsZSwgY3JlYXRlU2xpZGVyV2l0aFRvb2x0aXAsIFNsaWRlclRvb2x0aXAgfTsiLCJpbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheVwiO1xuaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGtleUNvZGUgZnJvbSBcInJjLXV0aWwvZXMvS2V5Q29kZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGlzRXZlbnRGcm9tSGFuZGxlKGUsIGhhbmRsZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoaGFuZGxlcykuc29tZShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gZS50YXJnZXQgPT09IGZpbmRET01Ob2RlKGhhbmRsZXNba2V5XSk7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaXNWYWx1ZU91dE9mUmFuZ2UodmFsdWUsIF9yZWYpIHtcbiAgdmFyIG1pbiA9IF9yZWYubWluLFxuICAgICAgbWF4ID0gX3JlZi5tYXg7XG4gIHJldHVybiB2YWx1ZSA8IG1pbiB8fCB2YWx1ZSA+IG1heDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc05vdFRvdWNoRXZlbnQoZSkge1xuICByZXR1cm4gZS50b3VjaGVzLmxlbmd0aCA+IDEgfHwgZS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICd0b3VjaGVuZCcgJiYgZS50b3VjaGVzLmxlbmd0aCA+IDA7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xvc2VzdFBvaW50KHZhbCwgX3JlZjIpIHtcbiAgdmFyIG1hcmtzID0gX3JlZjIubWFya3MsXG4gICAgICBzdGVwID0gX3JlZjIuc3RlcCxcbiAgICAgIG1pbiA9IF9yZWYyLm1pbixcbiAgICAgIG1heCA9IF9yZWYyLm1heDtcbiAgdmFyIHBvaW50cyA9IE9iamVjdC5rZXlzKG1hcmtzKS5tYXAocGFyc2VGbG9hdCk7XG5cbiAgaWYgKHN0ZXAgIT09IG51bGwpIHtcbiAgICB2YXIgYmFzZU51bSA9IE1hdGgucG93KDEwLCBnZXRQcmVjaXNpb24oc3RlcCkpO1xuICAgIHZhciBtYXhTdGVwcyA9IE1hdGguZmxvb3IoKG1heCAqIGJhc2VOdW0gLSBtaW4gKiBiYXNlTnVtKSAvIChzdGVwICogYmFzZU51bSkpO1xuICAgIHZhciBzdGVwcyA9IE1hdGgubWluKCh2YWwgLSBtaW4pIC8gc3RlcCwgbWF4U3RlcHMpO1xuICAgIHZhciBjbG9zZXN0U3RlcCA9IE1hdGgucm91bmQoc3RlcHMpICogc3RlcCArIG1pbjtcbiAgICBwb2ludHMucHVzaChjbG9zZXN0U3RlcCk7XG4gIH1cblxuICB2YXIgZGlmZnMgPSBwb2ludHMubWFwKGZ1bmN0aW9uIChwb2ludCkge1xuICAgIHJldHVybiBNYXRoLmFicyh2YWwgLSBwb2ludCk7XG4gIH0pO1xuICByZXR1cm4gcG9pbnRzW2RpZmZzLmluZGV4T2YoTWF0aC5taW4uYXBwbHkoTWF0aCwgX3RvQ29uc3VtYWJsZUFycmF5KGRpZmZzKSkpXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmVjaXNpb24oc3RlcCkge1xuICB2YXIgc3RlcFN0cmluZyA9IHN0ZXAudG9TdHJpbmcoKTtcbiAgdmFyIHByZWNpc2lvbiA9IDA7XG5cbiAgaWYgKHN0ZXBTdHJpbmcuaW5kZXhPZignLicpID49IDApIHtcbiAgICBwcmVjaXNpb24gPSBzdGVwU3RyaW5nLmxlbmd0aCAtIHN0ZXBTdHJpbmcuaW5kZXhPZignLicpIC0gMTtcbiAgfVxuXG4gIHJldHVybiBwcmVjaXNpb247XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TW91c2VQb3NpdGlvbih2ZXJ0aWNhbCwgZSkge1xuICByZXR1cm4gdmVydGljYWwgPyBlLmNsaWVudFkgOiBlLnBhZ2VYO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvdWNoUG9zaXRpb24odmVydGljYWwsIGUpIHtcbiAgcmV0dXJuIHZlcnRpY2FsID8gZS50b3VjaGVzWzBdLmNsaWVudFkgOiBlLnRvdWNoZXNbMF0ucGFnZVg7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0SGFuZGxlQ2VudGVyUG9zaXRpb24odmVydGljYWwsIGhhbmRsZSkge1xuICB2YXIgY29vcmRzID0gaGFuZGxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4gdmVydGljYWwgPyBjb29yZHMudG9wICsgY29vcmRzLmhlaWdodCAqIDAuNSA6IHdpbmRvdy5wYWdlWE9mZnNldCArIGNvb3Jkcy5sZWZ0ICsgY29vcmRzLndpZHRoICogMC41O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZVZhbHVlSW5SYW5nZSh2YWwsIF9yZWYzKSB7XG4gIHZhciBtYXggPSBfcmVmMy5tYXgsXG4gICAgICBtaW4gPSBfcmVmMy5taW47XG5cbiAgaWYgKHZhbCA8PSBtaW4pIHtcbiAgICByZXR1cm4gbWluO1xuICB9XG5cbiAgaWYgKHZhbCA+PSBtYXgpIHtcbiAgICByZXR1cm4gbWF4O1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVWYWx1ZVByZWNpc2lvbih2YWwsIHByb3BzKSB7XG4gIHZhciBzdGVwID0gcHJvcHMuc3RlcDtcbiAgdmFyIGNsb3Nlc3RQb2ludCA9IGlzRmluaXRlKGdldENsb3Nlc3RQb2ludCh2YWwsIHByb3BzKSkgPyBnZXRDbG9zZXN0UG9pbnQodmFsLCBwcm9wcykgOiAwOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgcmV0dXJuIHN0ZXAgPT09IG51bGwgPyBjbG9zZXN0UG9pbnQgOiBwYXJzZUZsb2F0KGNsb3Nlc3RQb2ludC50b0ZpeGVkKGdldFByZWNpc2lvbihzdGVwKSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhdXNlRXZlbnQoZSkge1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTmV4dFZhbHVlKGZ1bmMsIHZhbHVlLCBwcm9wcykge1xuICB2YXIgb3BlcmF0aW9ucyA9IHtcbiAgICBpbmNyZWFzZTogZnVuY3Rpb24gaW5jcmVhc2UoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH0sXG4gICAgZGVjcmVhc2U6IGZ1bmN0aW9uIGRlY3JlYXNlKGEsIGIpIHtcbiAgICAgIHJldHVybiBhIC0gYjtcbiAgICB9XG4gIH07XG4gIHZhciBpbmRleFRvR2V0ID0gb3BlcmF0aW9uc1tmdW5jXShPYmplY3Qua2V5cyhwcm9wcy5tYXJrcykuaW5kZXhPZihKU09OLnN0cmluZ2lmeSh2YWx1ZSkpLCAxKTtcbiAgdmFyIGtleVRvR2V0ID0gT2JqZWN0LmtleXMocHJvcHMubWFya3MpW2luZGV4VG9HZXRdO1xuXG4gIGlmIChwcm9wcy5zdGVwKSB7XG4gICAgcmV0dXJuIG9wZXJhdGlvbnNbZnVuY10odmFsdWUsIHByb3BzLnN0ZXApO1xuICB9XG5cbiAgaWYgKCEhT2JqZWN0LmtleXMocHJvcHMubWFya3MpLmxlbmd0aCAmJiAhIXByb3BzLm1hcmtzW2tleVRvR2V0XSkge1xuICAgIHJldHVybiBwcm9wcy5tYXJrc1trZXlUb0dldF07XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5Ym9hcmRWYWx1ZU11dGF0b3IoZSwgdmVydGljYWwsIHJldmVyc2UpIHtcbiAgdmFyIGluY3JlYXNlID0gJ2luY3JlYXNlJztcbiAgdmFyIGRlY3JlYXNlID0gJ2RlY3JlYXNlJztcbiAgdmFyIG1ldGhvZCA9IGluY3JlYXNlO1xuXG4gIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgY2FzZSBrZXlDb2RlLlVQOlxuICAgICAgbWV0aG9kID0gdmVydGljYWwgJiYgcmV2ZXJzZSA/IGRlY3JlYXNlIDogaW5jcmVhc2U7XG4gICAgICBicmVhaztcblxuICAgIGNhc2Uga2V5Q29kZS5SSUdIVDpcbiAgICAgIG1ldGhvZCA9ICF2ZXJ0aWNhbCAmJiByZXZlcnNlID8gZGVjcmVhc2UgOiBpbmNyZWFzZTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBrZXlDb2RlLkRPV046XG4gICAgICBtZXRob2QgPSB2ZXJ0aWNhbCAmJiByZXZlcnNlID8gaW5jcmVhc2UgOiBkZWNyZWFzZTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBrZXlDb2RlLkxFRlQ6XG4gICAgICBtZXRob2QgPSAhdmVydGljYWwgJiYgcmV2ZXJzZSA/IGluY3JlYXNlIDogZGVjcmVhc2U7XG4gICAgICBicmVhaztcblxuICAgIGNhc2Uga2V5Q29kZS5FTkQ6XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlLCBwcm9wcykge1xuICAgICAgICByZXR1cm4gcHJvcHMubWF4O1xuICAgICAgfTtcblxuICAgIGNhc2Uga2V5Q29kZS5IT01FOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzLm1pbjtcbiAgICAgIH07XG5cbiAgICBjYXNlIGtleUNvZGUuUEFHRV9VUDpcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSArIHByb3BzLnN0ZXAgKiAyO1xuICAgICAgfTtcblxuICAgIGNhc2Uga2V5Q29kZS5QQUdFX0RPV046XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlLCBwcm9wcykge1xuICAgICAgICByZXR1cm4gdmFsdWUgLSBwcm9wcy5zdGVwICogMjtcbiAgICAgIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUsIHByb3BzKSB7XG4gICAgcmV0dXJuIGNhbGN1bGF0ZU5leHRWYWx1ZShtZXRob2QsIHZhbHVlLCBwcm9wcyk7XG4gIH07XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG52YXIgQ29udGVudCA9IGZ1bmN0aW9uIENvbnRlbnQocHJvcHMpIHtcbiAgdmFyIG92ZXJsYXkgPSBwcm9wcy5vdmVybGF5LFxuICAgICAgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgaWQgPSBwcm9wcy5pZCxcbiAgICAgIG92ZXJsYXlJbm5lclN0eWxlID0gcHJvcHMub3ZlcmxheUlubmVyU3R5bGU7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWlubmVyXCIpLFxuICAgIGlkOiBpZCxcbiAgICByb2xlOiBcInRvb2x0aXBcIixcbiAgICBzdHlsZTogb3ZlcmxheUlubmVyU3R5bGVcbiAgfSwgdHlwZW9mIG92ZXJsYXkgPT09ICdmdW5jdGlvbicgPyBvdmVybGF5KCkgOiBvdmVybGF5KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlZiwgdXNlSW1wZXJhdGl2ZUhhbmRsZSwgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmlnZ2VyIGZyb20gJ3JjLXRyaWdnZXInO1xuaW1wb3J0IHsgcGxhY2VtZW50cyB9IGZyb20gJy4vcGxhY2VtZW50cyc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnO1xuXG52YXIgVG9vbHRpcCA9IGZ1bmN0aW9uIFRvb2x0aXAocHJvcHMsIHJlZikge1xuICB2YXIgb3ZlcmxheUNsYXNzTmFtZSA9IHByb3BzLm92ZXJsYXlDbGFzc05hbWUsXG4gICAgICBfcHJvcHMkdHJpZ2dlciA9IHByb3BzLnRyaWdnZXIsXG4gICAgICB0cmlnZ2VyID0gX3Byb3BzJHRyaWdnZXIgPT09IHZvaWQgMCA/IFsnaG92ZXInXSA6IF9wcm9wcyR0cmlnZ2VyLFxuICAgICAgX3Byb3BzJG1vdXNlRW50ZXJEZWxhID0gcHJvcHMubW91c2VFbnRlckRlbGF5LFxuICAgICAgbW91c2VFbnRlckRlbGF5ID0gX3Byb3BzJG1vdXNlRW50ZXJEZWxhID09PSB2b2lkIDAgPyAwIDogX3Byb3BzJG1vdXNlRW50ZXJEZWxhLFxuICAgICAgX3Byb3BzJG1vdXNlTGVhdmVEZWxhID0gcHJvcHMubW91c2VMZWF2ZURlbGF5LFxuICAgICAgbW91c2VMZWF2ZURlbGF5ID0gX3Byb3BzJG1vdXNlTGVhdmVEZWxhID09PSB2b2lkIDAgPyAwLjEgOiBfcHJvcHMkbW91c2VMZWF2ZURlbGEsXG4gICAgICBvdmVybGF5U3R5bGUgPSBwcm9wcy5vdmVybGF5U3R5bGUsXG4gICAgICBfcHJvcHMkcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgcHJlZml4Q2xzID0gX3Byb3BzJHByZWZpeENscyA9PT0gdm9pZCAwID8gJ3JjLXRvb2x0aXAnIDogX3Byb3BzJHByZWZpeENscyxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBvblZpc2libGVDaGFuZ2UgPSBwcm9wcy5vblZpc2libGVDaGFuZ2UsXG4gICAgICBhZnRlclZpc2libGVDaGFuZ2UgPSBwcm9wcy5hZnRlclZpc2libGVDaGFuZ2UsXG4gICAgICB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnRyYW5zaXRpb25OYW1lLFxuICAgICAgYW5pbWF0aW9uID0gcHJvcHMuYW5pbWF0aW9uLFxuICAgICAgbW90aW9uID0gcHJvcHMubW90aW9uLFxuICAgICAgX3Byb3BzJHBsYWNlbWVudCA9IHByb3BzLnBsYWNlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9wcm9wcyRwbGFjZW1lbnQgPT09IHZvaWQgMCA/ICdyaWdodCcgOiBfcHJvcHMkcGxhY2VtZW50LFxuICAgICAgX3Byb3BzJGFsaWduID0gcHJvcHMuYWxpZ24sXG4gICAgICBhbGlnbiA9IF9wcm9wcyRhbGlnbiA9PT0gdm9pZCAwID8ge30gOiBfcHJvcHMkYWxpZ24sXG4gICAgICBfcHJvcHMkZGVzdHJveVRvb2x0aXAgPSBwcm9wcy5kZXN0cm95VG9vbHRpcE9uSGlkZSxcbiAgICAgIGRlc3Ryb3lUb29sdGlwT25IaWRlID0gX3Byb3BzJGRlc3Ryb3lUb29sdGlwID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkZXN0cm95VG9vbHRpcCxcbiAgICAgIGRlZmF1bHRWaXNpYmxlID0gcHJvcHMuZGVmYXVsdFZpc2libGUsXG4gICAgICBnZXRUb29sdGlwQ29udGFpbmVyID0gcHJvcHMuZ2V0VG9vbHRpcENvbnRhaW5lcixcbiAgICAgIG92ZXJsYXlJbm5lclN0eWxlID0gcHJvcHMub3ZlcmxheUlubmVyU3R5bGUsXG4gICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcIm92ZXJsYXlDbGFzc05hbWVcIiwgXCJ0cmlnZ2VyXCIsIFwibW91c2VFbnRlckRlbGF5XCIsIFwibW91c2VMZWF2ZURlbGF5XCIsIFwib3ZlcmxheVN0eWxlXCIsIFwicHJlZml4Q2xzXCIsIFwiY2hpbGRyZW5cIiwgXCJvblZpc2libGVDaGFuZ2VcIiwgXCJhZnRlclZpc2libGVDaGFuZ2VcIiwgXCJ0cmFuc2l0aW9uTmFtZVwiLCBcImFuaW1hdGlvblwiLCBcIm1vdGlvblwiLCBcInBsYWNlbWVudFwiLCBcImFsaWduXCIsIFwiZGVzdHJveVRvb2x0aXBPbkhpZGVcIiwgXCJkZWZhdWx0VmlzaWJsZVwiLCBcImdldFRvb2x0aXBDb250YWluZXJcIiwgXCJvdmVybGF5SW5uZXJTdHlsZVwiXSk7XG5cbiAgdmFyIGRvbVJlZiA9IHVzZVJlZihudWxsKTtcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZG9tUmVmLmN1cnJlbnQ7XG4gIH0pO1xuXG4gIHZhciBleHRyYVByb3BzID0gX29iamVjdFNwcmVhZCh7fSwgcmVzdFByb3BzKTtcblxuICBpZiAoJ3Zpc2libGUnIGluIHByb3BzKSB7XG4gICAgZXh0cmFQcm9wcy5wb3B1cFZpc2libGUgPSBwcm9wcy52aXNpYmxlO1xuICB9XG5cbiAgdmFyIGdldFBvcHVwRWxlbWVudCA9IGZ1bmN0aW9uIGdldFBvcHVwRWxlbWVudCgpIHtcbiAgICB2YXIgX3Byb3BzJGFycm93Q29udGVudCA9IHByb3BzLmFycm93Q29udGVudCxcbiAgICAgICAgYXJyb3dDb250ZW50ID0gX3Byb3BzJGFycm93Q29udGVudCA9PT0gdm9pZCAwID8gbnVsbCA6IF9wcm9wcyRhcnJvd0NvbnRlbnQsXG4gICAgICAgIG92ZXJsYXkgPSBwcm9wcy5vdmVybGF5LFxuICAgICAgICBpZCA9IHByb3BzLmlkO1xuICAgIHJldHVybiBbLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWFycm93XCIpLFxuICAgICAga2V5OiBcImFycm93XCJcbiAgICB9LCBhcnJvd0NvbnRlbnQpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50LCB7XG4gICAgICBrZXk6IFwiY29udGVudFwiLFxuICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICBpZDogaWQsXG4gICAgICBvdmVybGF5OiBvdmVybGF5LFxuICAgICAgb3ZlcmxheUlubmVyU3R5bGU6IG92ZXJsYXlJbm5lclN0eWxlXG4gICAgfSldO1xuICB9O1xuXG4gIHZhciBkZXN0cm95VG9vbHRpcCA9IGZhbHNlO1xuICB2YXIgYXV0b0Rlc3Ryb3kgPSBmYWxzZTtcblxuICBpZiAodHlwZW9mIGRlc3Ryb3lUb29sdGlwT25IaWRlID09PSAnYm9vbGVhbicpIHtcbiAgICBkZXN0cm95VG9vbHRpcCA9IGRlc3Ryb3lUb29sdGlwT25IaWRlO1xuICB9IGVsc2UgaWYgKGRlc3Ryb3lUb29sdGlwT25IaWRlICYmIF90eXBlb2YoZGVzdHJveVRvb2x0aXBPbkhpZGUpID09PSAnb2JqZWN0Jykge1xuICAgIHZhciBrZWVwUGFyZW50ID0gZGVzdHJveVRvb2x0aXBPbkhpZGUua2VlcFBhcmVudDtcbiAgICBkZXN0cm95VG9vbHRpcCA9IGtlZXBQYXJlbnQgPT09IHRydWU7XG4gICAgYXV0b0Rlc3Ryb3kgPSBrZWVwUGFyZW50ID09PSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUcmlnZ2VyLCBfZXh0ZW5kcyh7XG4gICAgcG9wdXBDbGFzc05hbWU6IG92ZXJsYXlDbGFzc05hbWUsXG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgcG9wdXA6IGdldFBvcHVwRWxlbWVudCxcbiAgICBhY3Rpb246IHRyaWdnZXIsXG4gICAgYnVpbHRpblBsYWNlbWVudHM6IHBsYWNlbWVudHMsXG4gICAgcG9wdXBQbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICByZWY6IGRvbVJlZixcbiAgICBwb3B1cEFsaWduOiBhbGlnbixcbiAgICBnZXRQb3B1cENvbnRhaW5lcjogZ2V0VG9vbHRpcENvbnRhaW5lcixcbiAgICBvblBvcHVwVmlzaWJsZUNoYW5nZTogb25WaXNpYmxlQ2hhbmdlLFxuICAgIGFmdGVyUG9wdXBWaXNpYmxlQ2hhbmdlOiBhZnRlclZpc2libGVDaGFuZ2UsXG4gICAgcG9wdXBUcmFuc2l0aW9uTmFtZTogdHJhbnNpdGlvbk5hbWUsXG4gICAgcG9wdXBBbmltYXRpb246IGFuaW1hdGlvbixcbiAgICBwb3B1cE1vdGlvbjogbW90aW9uLFxuICAgIGRlZmF1bHRQb3B1cFZpc2libGU6IGRlZmF1bHRWaXNpYmxlLFxuICAgIGRlc3Ryb3lQb3B1cE9uSGlkZTogZGVzdHJveVRvb2x0aXAsXG4gICAgYXV0b0Rlc3Ryb3k6IGF1dG9EZXN0cm95LFxuICAgIG1vdXNlTGVhdmVEZWxheTogbW91c2VMZWF2ZURlbGF5LFxuICAgIHBvcHVwU3R5bGU6IG92ZXJsYXlTdHlsZSxcbiAgICBtb3VzZUVudGVyRGVsYXk6IG1vdXNlRW50ZXJEZWxheVxuICB9LCBleHRyYVByb3BzKSwgY2hpbGRyZW4pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgLyojX19QVVJFX18qL2ZvcndhcmRSZWYoVG9vbHRpcCk7IiwiaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi9Ub29sdGlwJztcbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXA7IiwidmFyIGF1dG9BZGp1c3RPdmVyZmxvdyA9IHtcbiAgYWRqdXN0WDogMSxcbiAgYWRqdXN0WTogMVxufTtcbnZhciB0YXJnZXRPZmZzZXQgPSBbMCwgMF07XG5leHBvcnQgdmFyIHBsYWNlbWVudHMgPSB7XG4gIGxlZnQ6IHtcbiAgICBwb2ludHM6IFsnY3InLCAnY2wnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWy00LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICByaWdodDoge1xuICAgIHBvaW50czogWydjbCcsICdjciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgdG9wOiB7XG4gICAgcG9pbnRzOiBbJ2JjJywgJ3RjJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgYm90dG9tOiB7XG4gICAgcG9pbnRzOiBbJ3RjJywgJ2JjJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICB0b3BMZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ2JsJywgJ3RsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgbGVmdFRvcDoge1xuICAgIHBvaW50czogWyd0cicsICd0bCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbLTQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHRvcFJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ2JyJywgJ3RyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgcmlnaHRUb3A6IHtcbiAgICBwb2ludHM6IFsndGwnLCAndHInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGJvdHRvbVJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ3RyJywgJ2JyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICByaWdodEJvdHRvbToge1xuICAgIHBvaW50czogWydibCcsICdiciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgYm90dG9tTGVmdDoge1xuICAgIHBvaW50czogWyd0bCcsICdibCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgbGVmdEJvdHRvbToge1xuICAgIHBvaW50czogWydicicsICdibCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbLTQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBwbGFjZW1lbnRzOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IENTU01vdGlvbiBmcm9tICdyYy1tb3Rpb24nO1xuaW1wb3J0IHsgZ2V0TW90aW9uIH0gZnJvbSAnLi4vdXRpbHMvbGVnYWN5VXRpbCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXNrKHByb3BzKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICB2aXNpYmxlID0gcHJvcHMudmlzaWJsZSxcbiAgICAgIHpJbmRleCA9IHByb3BzLnpJbmRleCxcbiAgICAgIG1hc2sgPSBwcm9wcy5tYXNrLFxuICAgICAgbWFza01vdGlvbiA9IHByb3BzLm1hc2tNb3Rpb24sXG4gICAgICBtYXNrQW5pbWF0aW9uID0gcHJvcHMubWFza0FuaW1hdGlvbixcbiAgICAgIG1hc2tUcmFuc2l0aW9uTmFtZSA9IHByb3BzLm1hc2tUcmFuc2l0aW9uTmFtZTtcblxuICBpZiAoIW1hc2spIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtb3Rpb24gPSB7fTtcblxuICBpZiAobWFza01vdGlvbiB8fCBtYXNrVHJhbnNpdGlvbk5hbWUgfHwgbWFza0FuaW1hdGlvbikge1xuICAgIG1vdGlvbiA9IF9vYmplY3RTcHJlYWQoe1xuICAgICAgbW90aW9uQXBwZWFyOiB0cnVlXG4gICAgfSwgZ2V0TW90aW9uKHtcbiAgICAgIG1vdGlvbjogbWFza01vdGlvbixcbiAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgdHJhbnNpdGlvbk5hbWU6IG1hc2tUcmFuc2l0aW9uTmFtZSxcbiAgICAgIGFuaW1hdGlvbjogbWFza0FuaW1hdGlvblxuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDU1NNb3Rpb24sIF9leHRlbmRzKHt9LCBtb3Rpb24sIHtcbiAgICB2aXNpYmxlOiB2aXNpYmxlLFxuICAgIHJlbW92ZU9uTGVhdmU6IHRydWVcbiAgfSksIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICB6SW5kZXg6IHpJbmRleFxuICAgICAgfSxcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW1hc2tcIiksIGNsYXNzTmFtZSlcbiAgICB9KTtcbiAgfSk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENTU01vdGlvbiBmcm9tICdyYy1tb3Rpb24nO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG52YXIgTW9iaWxlUG9wdXBJbm5lciA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICB2aXNpYmxlID0gcHJvcHMudmlzaWJsZSxcbiAgICAgIHpJbmRleCA9IHByb3BzLnpJbmRleCxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBfcHJvcHMkbW9iaWxlID0gcHJvcHMubW9iaWxlO1xuICBfcHJvcHMkbW9iaWxlID0gX3Byb3BzJG1vYmlsZSA9PT0gdm9pZCAwID8ge30gOiBfcHJvcHMkbW9iaWxlO1xuICB2YXIgcG9wdXBDbGFzc05hbWUgPSBfcHJvcHMkbW9iaWxlLnBvcHVwQ2xhc3NOYW1lLFxuICAgICAgcG9wdXBTdHlsZSA9IF9wcm9wcyRtb2JpbGUucG9wdXBTdHlsZSxcbiAgICAgIF9wcm9wcyRtb2JpbGUkcG9wdXBNbyA9IF9wcm9wcyRtb2JpbGUucG9wdXBNb3Rpb24sXG4gICAgICBwb3B1cE1vdGlvbiA9IF9wcm9wcyRtb2JpbGUkcG9wdXBNbyA9PT0gdm9pZCAwID8ge30gOiBfcHJvcHMkbW9iaWxlJHBvcHVwTW8sXG4gICAgICBwb3B1cFJlbmRlciA9IF9wcm9wcyRtb2JpbGUucG9wdXBSZW5kZXI7XG4gIHZhciBlbGVtZW50UmVmID0gUmVhY3QudXNlUmVmKCk7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gUmVmcyA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9yY2VBbGlnbjogZnVuY3Rpb24gZm9yY2VBbGlnbigpIHt9LFxuICAgICAgZ2V0RWxlbWVudDogZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRSZWYuY3VycmVudDtcbiAgICAgIH1cbiAgICB9O1xuICB9KTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09IFJlbmRlciA9PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgbWVyZ2VkU3R5bGUgPSBfb2JqZWN0U3ByZWFkKHtcbiAgICB6SW5kZXg6IHpJbmRleFxuICB9LCBwb3B1cFN0eWxlKTtcblxuICB2YXIgY2hpbGROb2RlID0gY2hpbGRyZW47IC8vIFdyYXBwZXIgd2hlbiBtdWx0aXBsZSBjaGlsZHJlblxuXG4gIGlmIChSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPiAxKSB7XG4gICAgY2hpbGROb2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNvbnRlbnRcIilcbiAgICB9LCBjaGlsZHJlbik7XG4gIH0gLy8gTW9iaWxlIHN1cHBvcnQgYWRkaXRpb25hbCByZW5kZXJcblxuXG4gIGlmIChwb3B1cFJlbmRlcikge1xuICAgIGNoaWxkTm9kZSA9IHBvcHVwUmVuZGVyKGNoaWxkTm9kZSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ1NTTW90aW9uLCBfZXh0ZW5kcyh7XG4gICAgdmlzaWJsZTogdmlzaWJsZSxcbiAgICByZWY6IGVsZW1lbnRSZWYsXG4gICAgcmVtb3ZlT25MZWF2ZTogdHJ1ZVxuICB9LCBwb3B1cE1vdGlvbiksIGZ1bmN0aW9uIChfcmVmLCBtb3Rpb25SZWYpIHtcbiAgICB2YXIgbW90aW9uQ2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICAgIG1vdGlvblN0eWxlID0gX3JlZi5zdHlsZTtcbiAgICB2YXIgbWVyZ2VkQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIHBvcHVwQ2xhc3NOYW1lLCBtb3Rpb25DbGFzc05hbWUpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICByZWY6IG1vdGlvblJlZixcbiAgICAgIGNsYXNzTmFtZTogbWVyZ2VkQ2xhc3NOYW1lLFxuICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgbW90aW9uU3R5bGUpLCBtZXJnZWRTdHlsZSlcbiAgICB9LCBjaGlsZE5vZGUpO1xuICB9KTtcbn0pO1xuTW9iaWxlUG9wdXBJbm5lci5kaXNwbGF5TmFtZSA9ICdNb2JpbGVQb3B1cElubmVyJztcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZVBvcHVwSW5uZXI7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFsaWduIGZyb20gJ3JjLWFsaWduJztcbmltcG9ydCBDU1NNb3Rpb24gZnJvbSAncmMtbW90aW9uJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHVzZVZpc2libGVTdGF0dXMgZnJvbSAnLi91c2VWaXNpYmxlU3RhdHVzJztcbmltcG9ydCB7IGdldE1vdGlvbiB9IGZyb20gJy4uL3V0aWxzL2xlZ2FjeVV0aWwnO1xuaW1wb3J0IHVzZVN0cmV0Y2hTdHlsZSBmcm9tICcuL3VzZVN0cmV0Y2hTdHlsZSc7XG52YXIgUG9wdXBJbm5lciA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciB2aXNpYmxlID0gcHJvcHMudmlzaWJsZSxcbiAgICAgIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgekluZGV4ID0gcHJvcHMuekluZGV4LFxuICAgICAgc3RyZXRjaCA9IHByb3BzLnN0cmV0Y2gsXG4gICAgICBkZXN0cm95UG9wdXBPbkhpZGUgPSBwcm9wcy5kZXN0cm95UG9wdXBPbkhpZGUsXG4gICAgICBhbGlnbiA9IHByb3BzLmFsaWduLFxuICAgICAgcG9pbnQgPSBwcm9wcy5wb2ludCxcbiAgICAgIGdldFJvb3REb21Ob2RlID0gcHJvcHMuZ2V0Um9vdERvbU5vZGUsXG4gICAgICBnZXRDbGFzc05hbWVGcm9tQWxpZ24gPSBwcm9wcy5nZXRDbGFzc05hbWVGcm9tQWxpZ24sXG4gICAgICBvbkFsaWduID0gcHJvcHMub25BbGlnbixcbiAgICAgIG9uTW91c2VFbnRlciA9IHByb3BzLm9uTW91c2VFbnRlcixcbiAgICAgIG9uTW91c2VMZWF2ZSA9IHByb3BzLm9uTW91c2VMZWF2ZSxcbiAgICAgIG9uTW91c2VEb3duID0gcHJvcHMub25Nb3VzZURvd24sXG4gICAgICBvblRvdWNoU3RhcnQgPSBwcm9wcy5vblRvdWNoU3RhcnQ7XG4gIHZhciBhbGlnblJlZiA9IHVzZVJlZigpO1xuICB2YXIgZWxlbWVudFJlZiA9IHVzZVJlZigpO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSgpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBhbGlnbmVkQ2xhc3NOYW1lID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldEFsaWduZWRDbGFzc05hbWUgPSBfdXNlU3RhdGUyWzFdOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PSBNZWFzdXJlID09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgdmFyIF91c2VTdHJldGNoU3R5bGUgPSB1c2VTdHJldGNoU3R5bGUoc3RyZXRjaCksXG4gICAgICBfdXNlU3RyZXRjaFN0eWxlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdHJldGNoU3R5bGUsIDIpLFxuICAgICAgc3RyZXRjaFN0eWxlID0gX3VzZVN0cmV0Y2hTdHlsZTJbMF0sXG4gICAgICBtZWFzdXJlU3RyZXRjaFN0eWxlID0gX3VzZVN0cmV0Y2hTdHlsZTJbMV07XG5cbiAgZnVuY3Rpb24gZG9NZWFzdXJlKCkge1xuICAgIGlmIChzdHJldGNoKSB7XG4gICAgICBtZWFzdXJlU3RyZXRjaFN0eWxlKGdldFJvb3REb21Ob2RlKCkpO1xuICAgIH1cbiAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT0gU3RhdHVzID09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgdmFyIF91c2VWaXNpYmxlU3RhdHVzID0gdXNlVmlzaWJsZVN0YXR1cyh2aXNpYmxlLCBkb01lYXN1cmUpLFxuICAgICAgX3VzZVZpc2libGVTdGF0dXMyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVZpc2libGVTdGF0dXMsIDIpLFxuICAgICAgc3RhdHVzID0gX3VzZVZpc2libGVTdGF0dXMyWzBdLFxuICAgICAgZ29OZXh0U3RhdHVzID0gX3VzZVZpc2libGVTdGF0dXMyWzFdOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT0gQWxpZ25zID09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgdmFyIHByZXBhcmVSZXNvbHZlUmVmID0gdXNlUmVmKCk7IC8vIGB0YXJnZXRgIG9uIGByYy1hbGlnbmAgY2FuIGFjY2VwdCBhcyBhIGZ1bmN0aW9uIHRvIGdldCB0aGUgYmluZCBlbGVtZW50IG9yIGEgcG9pbnQuXG4gIC8vIHJlZjogaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcmMtYWxpZ25cblxuICBmdW5jdGlvbiBnZXRBbGlnblRhcmdldCgpIHtcbiAgICBpZiAocG9pbnQpIHtcbiAgICAgIHJldHVybiBwb2ludDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0Um9vdERvbU5vZGU7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JjZUFsaWduKCkge1xuICAgIHZhciBfYWxpZ25SZWYkY3VycmVudDtcblxuICAgIChfYWxpZ25SZWYkY3VycmVudCA9IGFsaWduUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9hbGlnblJlZiRjdXJyZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYWxpZ25SZWYkY3VycmVudC5mb3JjZUFsaWduKCk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkludGVybmFsQWxpZ24ocG9wdXBEb21Ob2RlLCBtYXRjaEFsaWduKSB7XG4gICAgaWYgKHN0YXR1cyA9PT0gJ2FsaWduJykge1xuICAgICAgdmFyIG5leHRBbGlnbmVkQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lRnJvbUFsaWduKG1hdGNoQWxpZ24pO1xuICAgICAgc2V0QWxpZ25lZENsYXNzTmFtZShuZXh0QWxpZ25lZENsYXNzTmFtZSk7IC8vIFJlcGVhdCB1bnRpbCBub3QgbW9yZSBhbGlnbiBuZWVkZWRcblxuICAgICAgaWYgKGFsaWduZWRDbGFzc05hbWUgIT09IG5leHRBbGlnbmVkQ2xhc3NOYW1lKSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZvcmNlQWxpZ24oKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnb05leHRTdGF0dXMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBfcHJlcGFyZVJlc29sdmVSZWYkY3U7XG5cbiAgICAgICAgICAoX3ByZXBhcmVSZXNvbHZlUmVmJGN1ID0gcHJlcGFyZVJlc29sdmVSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX3ByZXBhcmVSZXNvbHZlUmVmJGN1ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcHJlcGFyZVJlc29sdmVSZWYkY3UuY2FsbChwcmVwYXJlUmVzb2x2ZVJlZik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBvbkFsaWduID09PSBudWxsIHx8IG9uQWxpZ24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQWxpZ24ocG9wdXBEb21Ob2RlLCBtYXRjaEFsaWduKTtcbiAgICB9XG4gIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09IE1vdGlvbiA9PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIHZhciBtb3Rpb24gPSBfb2JqZWN0U3ByZWFkKHt9LCBnZXRNb3Rpb24ocHJvcHMpKTtcblxuICBbJ29uQXBwZWFyRW5kJywgJ29uRW50ZXJFbmQnLCAnb25MZWF2ZUVuZCddLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgIHZhciBvcmlnaW5IYW5kbGVyID0gbW90aW9uW2V2ZW50TmFtZV07XG5cbiAgICBtb3Rpb25bZXZlbnROYW1lXSA9IGZ1bmN0aW9uIChlbGVtZW50LCBldmVudCkge1xuICAgICAgZ29OZXh0U3RhdHVzKCk7XG4gICAgICByZXR1cm4gb3JpZ2luSGFuZGxlciA9PT0gbnVsbCB8fCBvcmlnaW5IYW5kbGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcmlnaW5IYW5kbGVyKGVsZW1lbnQsIGV2ZW50KTtcbiAgICB9O1xuICB9KTtcblxuICBmdW5jdGlvbiBvblNob3dQcmVwYXJlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgcHJlcGFyZVJlc29sdmVSZWYuY3VycmVudCA9IHJlc29sdmU7XG4gICAgfSk7XG4gIH0gLy8gR28gdG8gc3RhYmxlIGRpcmVjdGx5IHdoZW4gbW90aW9uIG5vdCBwcm92aWRlZFxuXG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIW1vdGlvbi5tb3Rpb25OYW1lICYmIHN0YXR1cyA9PT0gJ21vdGlvbicpIHtcbiAgICAgIGdvTmV4dFN0YXR1cygpO1xuICAgIH1cbiAgfSwgW21vdGlvbi5tb3Rpb25OYW1lLCBzdGF0dXNdKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PSBSZWZzID09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmb3JjZUFsaWduOiBmb3JjZUFsaWduLFxuICAgICAgZ2V0RWxlbWVudDogZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRSZWYuY3VycmVudDtcbiAgICAgIH1cbiAgICB9O1xuICB9KTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09IFJlbmRlciA9PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgbWVyZ2VkU3R5bGUgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3RyZXRjaFN0eWxlKSwge30sIHtcbiAgICB6SW5kZXg6IHpJbmRleFxuICB9LCBzdHlsZSksIHt9LCB7XG4gICAgb3BhY2l0eTogc3RhdHVzID09PSAnbW90aW9uJyB8fCBzdGF0dXMgPT09ICdzdGFibGUnIHx8ICF2aXNpYmxlID8gdW5kZWZpbmVkIDogMCxcbiAgICBwb2ludGVyRXZlbnRzOiBzdGF0dXMgPT09ICdzdGFibGUnID8gdW5kZWZpbmVkIDogJ25vbmUnXG4gIH0pOyAvLyBBbGlnbiBzdGF0dXNcblxuXG4gIHZhciBhbGlnbkRpc2FibGVkID0gdHJ1ZTtcblxuICBpZiAoKGFsaWduID09PSBudWxsIHx8IGFsaWduID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhbGlnbi5wb2ludHMpICYmIChzdGF0dXMgPT09ICdhbGlnbicgfHwgc3RhdHVzID09PSAnc3RhYmxlJykpIHtcbiAgICBhbGlnbkRpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICB2YXIgY2hpbGROb2RlID0gY2hpbGRyZW47IC8vIFdyYXBwZXIgd2hlbiBtdWx0aXBsZSBjaGlsZHJlblxuXG4gIGlmIChSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPiAxKSB7XG4gICAgY2hpbGROb2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNvbnRlbnRcIilcbiAgICB9LCBjaGlsZHJlbik7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ1NTTW90aW9uLCBfZXh0ZW5kcyh7XG4gICAgdmlzaWJsZTogdmlzaWJsZSxcbiAgICByZWY6IGVsZW1lbnRSZWYsXG4gICAgbGVhdmVkQ2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWhpZGRlblwiKVxuICB9LCBtb3Rpb24sIHtcbiAgICBvbkFwcGVhclByZXBhcmU6IG9uU2hvd1ByZXBhcmUsXG4gICAgb25FbnRlclByZXBhcmU6IG9uU2hvd1ByZXBhcmUsXG4gICAgcmVtb3ZlT25MZWF2ZTogZGVzdHJveVBvcHVwT25IaWRlXG4gIH0pLCBmdW5jdGlvbiAoX3JlZiwgbW90aW9uUmVmKSB7XG4gICAgdmFyIG1vdGlvbkNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgICBtb3Rpb25TdHlsZSA9IF9yZWYuc3R5bGU7XG4gICAgdmFyIG1lcmdlZENsYXNzTmFtZSA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBjbGFzc05hbWUsIGFsaWduZWRDbGFzc05hbWUsIG1vdGlvbkNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEFsaWduLCB7XG4gICAgICB0YXJnZXQ6IGdldEFsaWduVGFyZ2V0KCksXG4gICAgICBrZXk6IFwicG9wdXBcIixcbiAgICAgIHJlZjogYWxpZ25SZWYsXG4gICAgICBtb25pdG9yV2luZG93UmVzaXplOiB0cnVlLFxuICAgICAgZGlzYWJsZWQ6IGFsaWduRGlzYWJsZWQsXG4gICAgICBhbGlnbjogYWxpZ24sXG4gICAgICBvbkFsaWduOiBvbkludGVybmFsQWxpZ25cbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICByZWY6IG1vdGlvblJlZixcbiAgICAgIGNsYXNzTmFtZTogbWVyZ2VkQ2xhc3NOYW1lLFxuICAgICAgb25Nb3VzZUVudGVyOiBvbk1vdXNlRW50ZXIsXG4gICAgICBvbk1vdXNlTGVhdmU6IG9uTW91c2VMZWF2ZSxcbiAgICAgIG9uTW91c2VEb3duQ2FwdHVyZTogb25Nb3VzZURvd24sXG4gICAgICBvblRvdWNoU3RhcnRDYXB0dXJlOiBvblRvdWNoU3RhcnQsXG4gICAgICBzdHlsZTogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBtb3Rpb25TdHlsZSksIG1lcmdlZFN0eWxlKVxuICAgIH0sIGNoaWxkTm9kZSkpO1xuICB9KTtcbn0pO1xuUG9wdXBJbm5lci5kaXNwbGF5TmFtZSA9ICdQb3B1cElubmVyJztcbmV4cG9ydCBkZWZhdWx0IFBvcHVwSW5uZXI7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpc01vYmlsZSBmcm9tIFwicmMtdXRpbC9lcy9pc01vYmlsZVwiO1xuaW1wb3J0IE1hc2sgZnJvbSAnLi9NYXNrJztcbmltcG9ydCBQb3B1cElubmVyIGZyb20gJy4vUG9wdXBJbm5lcic7XG5pbXBvcnQgTW9iaWxlUG9wdXBJbm5lciBmcm9tICcuL01vYmlsZVBvcHVwSW5uZXInO1xudmFyIFBvcHVwID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgdmlzaWJsZSA9IF9yZWYudmlzaWJsZSxcbiAgICAgIG1vYmlsZSA9IF9yZWYubW9iaWxlLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1widmlzaWJsZVwiLCBcIm1vYmlsZVwiXSk7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKHZpc2libGUpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBpbm5lclZpc2libGUgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2VySW5uZXJWaXNpYmxlID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgX3VzZVN0YXRlMyA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIF91c2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUzLCAyKSxcbiAgICAgIGluTW9iaWxlID0gX3VzZVN0YXRlNFswXSxcbiAgICAgIHNldEluTW9iaWxlID0gX3VzZVN0YXRlNFsxXTtcblxuICB2YXIgY2xvbmVQcm9wcyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcHJvcHMpLCB7fSwge1xuICAgIHZpc2libGU6IGlubmVyVmlzaWJsZVxuICB9KTsgLy8gV2UgY2hlY2sgbW9iaWxlIGluIHZpc2libGUgY2hhbmdlZCBoZXJlLlxuICAvLyBBbmQgdGhpcyBhbHNvIGRlbGF5IHNldCBgaW5uZXJWaXNpYmxlYCB0byBhdm9pZCBwb3B1cCBjb21wb25lbnQgcmVuZGVyIGZsYXNoXG5cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHNlcklubmVyVmlzaWJsZSh2aXNpYmxlKTtcblxuICAgIGlmICh2aXNpYmxlICYmIG1vYmlsZSkge1xuICAgICAgc2V0SW5Nb2JpbGUoaXNNb2JpbGUoKSk7XG4gICAgfVxuICB9LCBbdmlzaWJsZSwgbW9iaWxlXSk7XG4gIHZhciBwb3B1cE5vZGUgPSBpbk1vYmlsZSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1vYmlsZVBvcHVwSW5uZXIsIF9leHRlbmRzKHt9LCBjbG9uZVByb3BzLCB7XG4gICAgbW9iaWxlOiBtb2JpbGUsXG4gICAgcmVmOiByZWZcbiAgfSkpIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUG9wdXBJbm5lciwgX2V4dGVuZHMoe30sIGNsb25lUHJvcHMsIHtcbiAgICByZWY6IHJlZlxuICB9KSk7IC8vIFdlIGNhbiB1c2UgZnJhZ21lbnQgZGlyZWN0bHkgYnV0IHRoaXMgbWF5IGZhaWxlZCBzb21lIHNlbGVjdG9yIHVzYWdlLiBLZWVwIGFzIG9yaWdpbiBsb2dpY1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNYXNrLCBjbG9uZVByb3BzKSwgcG9wdXBOb2RlKTtcbn0pO1xuUG9wdXAuZGlzcGxheU5hbWUgPSAnUG9wdXAnO1xuZXhwb3J0IGRlZmF1bHQgUG9wdXA7IiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKHN0cmV0Y2gpIHtcbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDBcbiAgfSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIHRhcmdldFNpemUgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0VGFyZ2V0U2l6ZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgZnVuY3Rpb24gbWVhc3VyZVN0cmV0Y2goZWxlbWVudCkge1xuICAgIHNldFRhcmdldFNpemUoe1xuICAgICAgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgfSk7XG4gIH0gLy8gTWVyZ2Ugc3RyZXRjaCBzdHlsZVxuXG5cbiAgdmFyIHN0eWxlID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNpemVTdHlsZSA9IHt9O1xuXG4gICAgaWYgKHN0cmV0Y2gpIHtcbiAgICAgIHZhciB3aWR0aCA9IHRhcmdldFNpemUud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gdGFyZ2V0U2l6ZS5oZWlnaHQ7IC8vIFN0cmV0Y2ggd2l0aCB0YXJnZXRcblxuICAgICAgaWYgKHN0cmV0Y2guaW5kZXhPZignaGVpZ2h0JykgIT09IC0xICYmIGhlaWdodCkge1xuICAgICAgICBzaXplU3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgfSBlbHNlIGlmIChzdHJldGNoLmluZGV4T2YoJ21pbkhlaWdodCcpICE9PSAtMSAmJiBoZWlnaHQpIHtcbiAgICAgICAgc2l6ZVN0eWxlLm1pbkhlaWdodCA9IGhlaWdodDtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0cmV0Y2guaW5kZXhPZignd2lkdGgnKSAhPT0gLTEgJiYgd2lkdGgpIHtcbiAgICAgICAgc2l6ZVN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICB9IGVsc2UgaWYgKHN0cmV0Y2guaW5kZXhPZignbWluV2lkdGgnKSAhPT0gLTEgJiYgd2lkdGgpIHtcbiAgICAgICAgc2l6ZVN0eWxlLm1pbldpZHRoID0gd2lkdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpemVTdHlsZTtcbiAgfSwgW3N0cmV0Y2gsIHRhcmdldFNpemVdKTtcbiAgcmV0dXJuIFtzdHlsZSwgbWVhc3VyZVN0cmV0Y2hdO1xufSk7IiwiaW1wb3J0IF9yZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSBcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCI7XG5pbXBvcnQgX2FzeW5jVG9HZW5lcmF0b3IgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3JcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJhZiBmcm9tIFwicmMtdXRpbC9lcy9yYWZcIjtcbnZhciBTdGF0dXNRdWV1ZSA9IFsnbWVhc3VyZScsICdhbGlnbicsIG51bGwsICdtb3Rpb24nXTtcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAodmlzaWJsZSwgZG9NZWFzdXJlKSB7XG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShudWxsKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgc3RhdHVzID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldEludGVybmFsU3RhdHVzID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgcmFmUmVmID0gdXNlUmVmKCk7XG4gIHZhciBkZXN0cm95UmVmID0gdXNlUmVmKGZhbHNlKTtcblxuICBmdW5jdGlvbiBzZXRTdGF0dXMobmV4dFN0YXR1cykge1xuICAgIGlmICghZGVzdHJveVJlZi5jdXJyZW50KSB7XG4gICAgICBzZXRJbnRlcm5hbFN0YXR1cyhuZXh0U3RhdHVzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxSYWYoKSB7XG4gICAgcmFmLmNhbmNlbChyYWZSZWYuY3VycmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBnb05leHRTdGF0dXMoY2FsbGJhY2spIHtcbiAgICBjYW5jZWxSYWYoKTtcbiAgICByYWZSZWYuY3VycmVudCA9IHJhZihmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBPbmx5IGFsaWduIHNob3VsZCBiZSBtYW51YWxseSB0cmlnZ2VyXG4gICAgICBzZXRTdGF0dXMoZnVuY3Rpb24gKHByZXYpIHtcbiAgICAgICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgICAgICBjYXNlICdhbGlnbic6XG4gICAgICAgICAgICByZXR1cm4gJ21vdGlvbic7XG5cbiAgICAgICAgICBjYXNlICdtb3Rpb24nOlxuICAgICAgICAgICAgcmV0dXJuICdzdGFibGUnO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgfSk7XG4gICAgICBjYWxsYmFjayA9PT0gbnVsbCB8fCBjYWxsYmFjayA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FsbGJhY2soKTtcbiAgICB9KTtcbiAgfSAvLyBJbml0IHN0YXR1c1xuXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBzZXRTdGF0dXMoJ21lYXN1cmUnKTtcbiAgfSwgW3Zpc2libGVdKTsgLy8gR28gbmV4dCBzdGF0dXNcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICBjYXNlICdtZWFzdXJlJzpcbiAgICAgICAgZG9NZWFzdXJlKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgIH1cblxuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIHJhZlJlZi5jdXJyZW50ID0gcmFmKCAvKiNfX1BVUkVfXyovX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICAgICAgdmFyIGluZGV4LCBuZXh0U3RhdHVzO1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGluZGV4ID0gU3RhdHVzUXVldWUuaW5kZXhPZihzdGF0dXMpO1xuICAgICAgICAgICAgICAgIG5leHRTdGF0dXMgPSBTdGF0dXNRdWV1ZVtpbmRleCArIDFdO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5leHRTdGF0dXMgJiYgaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICBzZXRTdGF0dXMobmV4dFN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlKTtcbiAgICAgIH0pKSk7XG4gICAgfVxuICB9LCBbc3RhdHVzXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRlc3Ryb3lSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICBjYW5jZWxSYWYoKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiBbc3RhdHVzLCBnb05leHRTdGF0dXNdO1xufSk7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xudmFyIFRyaWdnZXJDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5leHBvcnQgZGVmYXVsdCBUcmlnZ2VyQ29udGV4dDsiLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX2NyZWF0ZVN1cGVyIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVTdXBlclwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgcmFmIGZyb20gXCJyYy11dGlsL2VzL3JhZlwiO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCJyYy11dGlsL2VzL0RvbS9jb250YWluc1wiO1xuaW1wb3J0IGZpbmRET01Ob2RlIGZyb20gXCJyYy11dGlsL2VzL0RvbS9maW5kRE9NTm9kZVwiO1xuaW1wb3J0IHsgY29tcG9zZVJlZiwgc3VwcG9ydFJlZiB9IGZyb20gXCJyYy11dGlsL2VzL3JlZlwiO1xuaW1wb3J0IGFkZEV2ZW50TGlzdGVuZXIgZnJvbSBcInJjLXV0aWwvZXMvRG9tL2FkZEV2ZW50TGlzdGVuZXJcIjtcbmltcG9ydCBQb3J0YWwgZnJvbSBcInJjLXV0aWwvZXMvUG9ydGFsXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGdldEFsaWduRnJvbVBsYWNlbWVudCwgZ2V0QWxpZ25Qb3B1cENsYXNzTmFtZSB9IGZyb20gJy4vdXRpbHMvYWxpZ25VdGlsJztcbmltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwJztcbmltcG9ydCBUcmlnZ2VyQ29udGV4dCBmcm9tICcuL2NvbnRleHQnO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gcmV0dXJuRW1wdHlTdHJpbmcoKSB7XG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gcmV0dXJuRG9jdW1lbnQoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gIH1cblxuICByZXR1cm4gd2luZG93LmRvY3VtZW50O1xufVxuXG52YXIgQUxMX0hBTkRMRVJTID0gWydvbkNsaWNrJywgJ29uTW91c2VEb3duJywgJ29uVG91Y2hTdGFydCcsICdvbk1vdXNlRW50ZXInLCAnb25Nb3VzZUxlYXZlJywgJ29uRm9jdXMnLCAnb25CbHVyJywgJ29uQ29udGV4dE1lbnUnXTtcbi8qKlxuICogSW50ZXJuYWwgdXNhZ2UuIERvIG5vdCB1c2UgaW4geW91ciBjb2RlIHNpbmNlIHRoaXMgd2lsbCBiZSByZW1vdmVkLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRyaWdnZXIoUG9ydGFsQ29tcG9uZW50KSB7XG4gIHZhciBUcmlnZ2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFRyaWdnZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihUcmlnZ2VyKTtcblxuICAgIGZ1bmN0aW9uIFRyaWdnZXIocHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyaWdnZXIpO1xuXG4gICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICAgIF90aGlzLnBvcHVwUmVmID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgX3RoaXMudHJpZ2dlclJlZiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVSZWYoKTtcblxuICAgICAgX3RoaXMub25Nb3VzZUVudGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIG1vdXNlRW50ZXJEZWxheSA9IF90aGlzLnByb3BzLm1vdXNlRW50ZXJEZWxheTtcblxuICAgICAgICBfdGhpcy5maXJlRXZlbnRzKCdvbk1vdXNlRW50ZXInLCBlKTtcblxuICAgICAgICBfdGhpcy5kZWxheVNldFBvcHVwVmlzaWJsZSh0cnVlLCBtb3VzZUVudGVyRGVsYXksIG1vdXNlRW50ZXJEZWxheSA/IG51bGwgOiBlKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uTW91c2VNb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMuZmlyZUV2ZW50cygnb25Nb3VzZU1vdmUnLCBlKTtcblxuICAgICAgICBfdGhpcy5zZXRQb2ludChlKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzLmZpcmVFdmVudHMoJ29uTW91c2VMZWF2ZScsIGUpO1xuXG4gICAgICAgIF90aGlzLmRlbGF5U2V0UG9wdXBWaXNpYmxlKGZhbHNlLCBfdGhpcy5wcm9wcy5tb3VzZUxlYXZlRGVsYXkpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Qb3B1cE1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmNsZWFyRGVsYXlUaW1lcigpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Qb3B1cE1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgX3RoaXMkcG9wdXBSZWYkY3VycmVuO1xuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvdHJpZ2dlci9wdWxsLzEzXG4gICAgICAgIC8vIHJlYWN0IGJ1Zz9cbiAgICAgICAgaWYgKGUucmVsYXRlZFRhcmdldCAmJiAhZS5yZWxhdGVkVGFyZ2V0LnNldFRpbWVvdXQgJiYgY29udGFpbnMoKF90aGlzJHBvcHVwUmVmJGN1cnJlbiA9IF90aGlzLnBvcHVwUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF90aGlzJHBvcHVwUmVmJGN1cnJlbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkcG9wdXBSZWYkY3VycmVuLmdldEVsZW1lbnQoKSwgZS5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLmRlbGF5U2V0UG9wdXBWaXNpYmxlKGZhbHNlLCBfdGhpcy5wcm9wcy5tb3VzZUxlYXZlRGVsYXkpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Gb2N1cyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzLmZpcmVFdmVudHMoJ29uRm9jdXMnLCBlKTsgLy8gaW5jYXNlIGZvY3VzaW4gYW5kIGZvY3Vzb3V0XG5cblxuICAgICAgICBfdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcblxuICAgICAgICBpZiAoX3RoaXMuaXNGb2N1c1RvU2hvdygpKSB7XG4gICAgICAgICAgX3RoaXMuZm9jdXNUaW1lID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAgIF90aGlzLmRlbGF5U2V0UG9wdXBWaXNpYmxlKHRydWUsIF90aGlzLnByb3BzLmZvY3VzRGVsYXkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk1vdXNlRG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzLmZpcmVFdmVudHMoJ29uTW91c2VEb3duJywgZSk7XG5cbiAgICAgICAgX3RoaXMucHJlQ2xpY2tUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzLmZpcmVFdmVudHMoJ29uVG91Y2hTdGFydCcsIGUpO1xuXG4gICAgICAgIF90aGlzLnByZVRvdWNoVGltZSA9IERhdGUubm93KCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkJsdXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpcy5maXJlRXZlbnRzKCdvbkJsdXInLCBlKTtcblxuICAgICAgICBfdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcblxuICAgICAgICBpZiAoX3RoaXMuaXNCbHVyVG9IaWRlKCkpIHtcbiAgICAgICAgICBfdGhpcy5kZWxheVNldFBvcHVwVmlzaWJsZShmYWxzZSwgX3RoaXMucHJvcHMuYmx1ckRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Db250ZXh0TWVudSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBfdGhpcy5maXJlRXZlbnRzKCdvbkNvbnRleHRNZW51JywgZSk7XG5cbiAgICAgICAgX3RoaXMuc2V0UG9wdXBWaXNpYmxlKHRydWUsIGUpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Db250ZXh0TWVudUNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMuaXNDb250ZXh0TWVudVRvU2hvdygpKSB7XG4gICAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25DbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBfdGhpcy5maXJlRXZlbnRzKCdvbkNsaWNrJywgZXZlbnQpOyAvLyBmb2N1cyB3aWxsIHRyaWdnZXIgY2xpY2tcblxuXG4gICAgICAgIGlmIChfdGhpcy5mb2N1c1RpbWUpIHtcbiAgICAgICAgICB2YXIgcHJlVGltZTtcblxuICAgICAgICAgIGlmIChfdGhpcy5wcmVDbGlja1RpbWUgJiYgX3RoaXMucHJlVG91Y2hUaW1lKSB7XG4gICAgICAgICAgICBwcmVUaW1lID0gTWF0aC5taW4oX3RoaXMucHJlQ2xpY2tUaW1lLCBfdGhpcy5wcmVUb3VjaFRpbWUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoX3RoaXMucHJlQ2xpY2tUaW1lKSB7XG4gICAgICAgICAgICBwcmVUaW1lID0gX3RoaXMucHJlQ2xpY2tUaW1lO1xuICAgICAgICAgIH0gZWxzZSBpZiAoX3RoaXMucHJlVG91Y2hUaW1lKSB7XG4gICAgICAgICAgICBwcmVUaW1lID0gX3RoaXMucHJlVG91Y2hUaW1lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChNYXRoLmFicyhwcmVUaW1lIC0gX3RoaXMuZm9jdXNUaW1lKSA8IDIwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMuZm9jdXNUaW1lID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLnByZUNsaWNrVGltZSA9IDA7XG4gICAgICAgIF90aGlzLnByZVRvdWNoVGltZSA9IDA7IC8vIE9ubHkgcHJldmVudCBkZWZhdWx0IHdoZW4gYWxsIHRoZSBhY3Rpb24gaXMgY2xpY2suXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE3MDQzXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE3MjkxXG5cbiAgICAgICAgaWYgKF90aGlzLmlzQ2xpY2tUb1Nob3coKSAmJiAoX3RoaXMuaXNDbGlja1RvSGlkZSgpIHx8IF90aGlzLmlzQmx1clRvSGlkZSgpKSAmJiBldmVudCAmJiBldmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV4dFZpc2libGUgPSAhX3RoaXMuc3RhdGUucG9wdXBWaXNpYmxlO1xuXG4gICAgICAgIGlmIChfdGhpcy5pc0NsaWNrVG9IaWRlKCkgJiYgIW5leHRWaXNpYmxlIHx8IG5leHRWaXNpYmxlICYmIF90aGlzLmlzQ2xpY2tUb1Nob3coKSkge1xuICAgICAgICAgIF90aGlzLnNldFBvcHVwVmlzaWJsZSghX3RoaXMuc3RhdGUucG9wdXBWaXNpYmxlLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uUG9wdXBNb3VzZURvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmhhc1BvcHVwTW91c2VEb3duID0gdHJ1ZTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLm1vdXNlRG93blRpbWVvdXQpO1xuICAgICAgICBfdGhpcy5tb3VzZURvd25UaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLmhhc1BvcHVwTW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgIH0sIDApO1xuXG4gICAgICAgIGlmIChfdGhpcy5jb250ZXh0KSB7XG4gICAgICAgICAgdmFyIF90aGlzJGNvbnRleHQ7XG5cbiAgICAgICAgICAoX3RoaXMkY29udGV4dCA9IF90aGlzLmNvbnRleHQpLm9uUG9wdXBNb3VzZURvd24uYXBwbHkoX3RoaXMkY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Eb2N1bWVudENsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5tYXNrICYmICFfdGhpcy5wcm9wcy5tYXNrQ2xvc2FibGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICAgIHZhciByb290ID0gX3RoaXMuZ2V0Um9vdERvbU5vZGUoKTtcblxuICAgICAgICB2YXIgcG9wdXBOb2RlID0gX3RoaXMuZ2V0UG9wdXBEb21Ob2RlKCk7XG5cbiAgICAgICAgaWYgKCFjb250YWlucyhyb290LCB0YXJnZXQpICYmICFjb250YWlucyhwb3B1cE5vZGUsIHRhcmdldCkgJiYgIV90aGlzLmhhc1BvcHVwTW91c2VEb3duKSB7XG4gICAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuZ2V0Um9vdERvbU5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBnZXRUcmlnZ2VyRE9NTm9kZSA9IF90aGlzLnByb3BzLmdldFRyaWdnZXJET01Ob2RlO1xuXG4gICAgICAgIGlmIChnZXRUcmlnZ2VyRE9NTm9kZSkge1xuICAgICAgICAgIHJldHVybiBnZXRUcmlnZ2VyRE9NTm9kZShfdGhpcy50cmlnZ2VyUmVmLmN1cnJlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgZG9tTm9kZSA9IGZpbmRET01Ob2RlKF90aGlzLnRyaWdnZXJSZWYuY3VycmVudCk7XG5cbiAgICAgICAgICBpZiAoZG9tTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRvbU5vZGU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHsvLyBEbyBub3RoaW5nXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ24gPSBmdW5jdGlvbiAoYWxpZ24pIHtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IFtdO1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHBvcHVwUGxhY2VtZW50ID0gX3RoaXMkcHJvcHMucG9wdXBQbGFjZW1lbnQsXG4gICAgICAgICAgICBidWlsdGluUGxhY2VtZW50cyA9IF90aGlzJHByb3BzLmJ1aWx0aW5QbGFjZW1lbnRzLFxuICAgICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgICAgYWxpZ25Qb2ludCA9IF90aGlzJHByb3BzLmFsaWduUG9pbnQsXG4gICAgICAgICAgICBnZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbiA9IF90aGlzJHByb3BzLmdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduO1xuXG4gICAgICAgIGlmIChwb3B1cFBsYWNlbWVudCAmJiBidWlsdGluUGxhY2VtZW50cykge1xuICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKGdldEFsaWduUG9wdXBDbGFzc05hbWUoYnVpbHRpblBsYWNlbWVudHMsIHByZWZpeENscywgYWxpZ24sIGFsaWduUG9pbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbikge1xuICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKGdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduKGFsaWduKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lLmpvaW4oJyAnKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldENvbXBvbmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMyLnByZWZpeENscyxcbiAgICAgICAgICAgIGRlc3Ryb3lQb3B1cE9uSGlkZSA9IF90aGlzJHByb3BzMi5kZXN0cm95UG9wdXBPbkhpZGUsXG4gICAgICAgICAgICBwb3B1cENsYXNzTmFtZSA9IF90aGlzJHByb3BzMi5wb3B1cENsYXNzTmFtZSxcbiAgICAgICAgICAgIG9uUG9wdXBBbGlnbiA9IF90aGlzJHByb3BzMi5vblBvcHVwQWxpZ24sXG4gICAgICAgICAgICBwb3B1cE1vdGlvbiA9IF90aGlzJHByb3BzMi5wb3B1cE1vdGlvbixcbiAgICAgICAgICAgIHBvcHVwQW5pbWF0aW9uID0gX3RoaXMkcHJvcHMyLnBvcHVwQW5pbWF0aW9uLFxuICAgICAgICAgICAgcG9wdXBUcmFuc2l0aW9uTmFtZSA9IF90aGlzJHByb3BzMi5wb3B1cFRyYW5zaXRpb25OYW1lLFxuICAgICAgICAgICAgcG9wdXBTdHlsZSA9IF90aGlzJHByb3BzMi5wb3B1cFN0eWxlLFxuICAgICAgICAgICAgbWFzayA9IF90aGlzJHByb3BzMi5tYXNrLFxuICAgICAgICAgICAgbWFza0FuaW1hdGlvbiA9IF90aGlzJHByb3BzMi5tYXNrQW5pbWF0aW9uLFxuICAgICAgICAgICAgbWFza1RyYW5zaXRpb25OYW1lID0gX3RoaXMkcHJvcHMyLm1hc2tUcmFuc2l0aW9uTmFtZSxcbiAgICAgICAgICAgIG1hc2tNb3Rpb24gPSBfdGhpcyRwcm9wczIubWFza01vdGlvbixcbiAgICAgICAgICAgIHpJbmRleCA9IF90aGlzJHByb3BzMi56SW5kZXgsXG4gICAgICAgICAgICBwb3B1cCA9IF90aGlzJHByb3BzMi5wb3B1cCxcbiAgICAgICAgICAgIHN0cmV0Y2ggPSBfdGhpcyRwcm9wczIuc3RyZXRjaCxcbiAgICAgICAgICAgIGFsaWduUG9pbnQgPSBfdGhpcyRwcm9wczIuYWxpZ25Qb2ludCxcbiAgICAgICAgICAgIG1vYmlsZSA9IF90aGlzJHByb3BzMi5tb2JpbGU7XG4gICAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IF90aGlzLnN0YXRlLFxuICAgICAgICAgICAgcG9wdXBWaXNpYmxlID0gX3RoaXMkc3RhdGUucG9wdXBWaXNpYmxlLFxuICAgICAgICAgICAgcG9pbnQgPSBfdGhpcyRzdGF0ZS5wb2ludDtcblxuICAgICAgICB2YXIgYWxpZ24gPSBfdGhpcy5nZXRQb3B1cEFsaWduKCk7XG5cbiAgICAgICAgdmFyIG1vdXNlUHJvcHMgPSB7fTtcblxuICAgICAgICBpZiAoX3RoaXMuaXNNb3VzZUVudGVyVG9TaG93KCkpIHtcbiAgICAgICAgICBtb3VzZVByb3BzLm9uTW91c2VFbnRlciA9IF90aGlzLm9uUG9wdXBNb3VzZUVudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF90aGlzLmlzTW91c2VMZWF2ZVRvSGlkZSgpKSB7XG4gICAgICAgICAgbW91c2VQcm9wcy5vbk1vdXNlTGVhdmUgPSBfdGhpcy5vblBvcHVwTW91c2VMZWF2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vdXNlUHJvcHMub25Nb3VzZURvd24gPSBfdGhpcy5vblBvcHVwTW91c2VEb3duO1xuICAgICAgICBtb3VzZVByb3BzLm9uVG91Y2hTdGFydCA9IF90aGlzLm9uUG9wdXBNb3VzZURvd247XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQb3B1cCwgX2V4dGVuZHMoe1xuICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICAgIGRlc3Ryb3lQb3B1cE9uSGlkZTogZGVzdHJveVBvcHVwT25IaWRlLFxuICAgICAgICAgIHZpc2libGU6IHBvcHVwVmlzaWJsZSxcbiAgICAgICAgICBwb2ludDogYWxpZ25Qb2ludCAmJiBwb2ludCxcbiAgICAgICAgICBjbGFzc05hbWU6IHBvcHVwQ2xhc3NOYW1lLFxuICAgICAgICAgIGFsaWduOiBhbGlnbixcbiAgICAgICAgICBvbkFsaWduOiBvblBvcHVwQWxpZ24sXG4gICAgICAgICAgYW5pbWF0aW9uOiBwb3B1cEFuaW1hdGlvbixcbiAgICAgICAgICBnZXRDbGFzc05hbWVGcm9tQWxpZ246IF90aGlzLmdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduXG4gICAgICAgIH0sIG1vdXNlUHJvcHMsIHtcbiAgICAgICAgICBzdHJldGNoOiBzdHJldGNoLFxuICAgICAgICAgIGdldFJvb3REb21Ob2RlOiBfdGhpcy5nZXRSb290RG9tTm9kZSxcbiAgICAgICAgICBzdHlsZTogcG9wdXBTdHlsZSxcbiAgICAgICAgICBtYXNrOiBtYXNrLFxuICAgICAgICAgIHpJbmRleDogekluZGV4LFxuICAgICAgICAgIHRyYW5zaXRpb25OYW1lOiBwb3B1cFRyYW5zaXRpb25OYW1lLFxuICAgICAgICAgIG1hc2tBbmltYXRpb246IG1hc2tBbmltYXRpb24sXG4gICAgICAgICAgbWFza1RyYW5zaXRpb25OYW1lOiBtYXNrVHJhbnNpdGlvbk5hbWUsXG4gICAgICAgICAgbWFza01vdGlvbjogbWFza01vdGlvbixcbiAgICAgICAgICByZWY6IF90aGlzLnBvcHVwUmVmLFxuICAgICAgICAgIG1vdGlvbjogcG9wdXBNb3Rpb24sXG4gICAgICAgICAgbW9iaWxlOiBtb2JpbGVcbiAgICAgICAgfSksIHR5cGVvZiBwb3B1cCA9PT0gJ2Z1bmN0aW9uJyA/IHBvcHVwKCkgOiBwb3B1cCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5hdHRhY2hQYXJlbnQgPSBmdW5jdGlvbiAocG9wdXBDb250YWluZXIpIHtcbiAgICAgICAgcmFmLmNhbmNlbChfdGhpcy5hdHRhY2hJZCk7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGdldFBvcHVwQ29udGFpbmVyID0gX3RoaXMkcHJvcHMzLmdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgICAgICAgZ2V0RG9jdW1lbnQgPSBfdGhpcyRwcm9wczMuZ2V0RG9jdW1lbnQ7XG5cbiAgICAgICAgdmFyIGRvbU5vZGUgPSBfdGhpcy5nZXRSb290RG9tTm9kZSgpO1xuXG4gICAgICAgIHZhciBtb3VudE5vZGU7XG5cbiAgICAgICAgaWYgKCFnZXRQb3B1cENvbnRhaW5lcikge1xuICAgICAgICAgIG1vdW50Tm9kZSA9IGdldERvY3VtZW50KF90aGlzLmdldFJvb3REb21Ob2RlKCkpLmJvZHk7XG4gICAgICAgIH0gZWxzZSBpZiAoZG9tTm9kZSB8fCBnZXRQb3B1cENvbnRhaW5lci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAvLyBDb21wYXRpYmxlIGZvciBsZWdhY3kgZ2V0UG9wdXBDb250YWluZXIgd2l0aCBkb21Ob2RlIGFyZ3VtZW50LlxuICAgICAgICAgIC8vIElmIG5vIG5lZWQgYGRvbU5vZGVgIGFyZ3VtZW50LCB3aWxsIGNhbGwgZGlyZWN0bHkuXG4gICAgICAgICAgLy8gaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL2Vsb3F1ZW50LW1jbGVhbi1zczkzbT9maWxlPS9zcmMvQXBwLmpzXG4gICAgICAgICAgbW91bnROb2RlID0gZ2V0UG9wdXBDb250YWluZXIoZG9tTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW91bnROb2RlKSB7XG4gICAgICAgICAgbW91bnROb2RlLmFwcGVuZENoaWxkKHBvcHVwQ29udGFpbmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBSZXRyeSBhZnRlciBmcmFtZSByZW5kZXIgaW4gY2FzZSBwYXJlbnQgbm90IHJlYWR5XG4gICAgICAgICAgX3RoaXMuYXR0YWNoSWQgPSByYWYoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuYXR0YWNoUGFyZW50KHBvcHVwQ29udGFpbmVyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuZ2V0Q29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZ2V0RG9jdW1lbnQgPSBfdGhpcy5wcm9wcy5nZXREb2N1bWVudDtcbiAgICAgICAgdmFyIHBvcHVwQ29udGFpbmVyID0gZ2V0RG9jdW1lbnQoX3RoaXMuZ2V0Um9vdERvbU5vZGUoKSkuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIE1ha2Ugc3VyZSBkZWZhdWx0IHBvcHVwIGNvbnRhaW5lciB3aWxsIG5ldmVyIGNhdXNlIHNjcm9sbGJhciBhcHBlYXJpbmdcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC90cmlnZ2VyL2lzc3Vlcy80MVxuXG4gICAgICAgIHBvcHVwQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgcG9wdXBDb250YWluZXIuc3R5bGUudG9wID0gJzAnO1xuICAgICAgICBwb3B1cENvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgICBwb3B1cENvbnRhaW5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcblxuICAgICAgICBfdGhpcy5hdHRhY2hQYXJlbnQocG9wdXBDb250YWluZXIpO1xuXG4gICAgICAgIHJldHVybiBwb3B1cENvbnRhaW5lcjtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnNldFBvaW50ID0gZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICAgIHZhciBhbGlnblBvaW50ID0gX3RoaXMucHJvcHMuYWxpZ25Qb2ludDtcbiAgICAgICAgaWYgKCFhbGlnblBvaW50IHx8ICFwb2ludCkgcmV0dXJuO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBwb2ludDoge1xuICAgICAgICAgICAgcGFnZVg6IHBvaW50LnBhZ2VYLFxuICAgICAgICAgICAgcGFnZVk6IHBvaW50LnBhZ2VZXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmhhbmRsZVBvcnRhbFVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzLnN0YXRlLnByZXZQb3B1cFZpc2libGUgIT09IF90aGlzLnN0YXRlLnBvcHVwVmlzaWJsZSkge1xuICAgICAgICAgIF90aGlzLnByb3BzLmFmdGVyUG9wdXBWaXNpYmxlQ2hhbmdlKF90aGlzLnN0YXRlLnBvcHVwVmlzaWJsZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciBwb3B1cFZpc2libGU7XG5cbiAgICAgIGlmICgncG9wdXBWaXNpYmxlJyBpbiBwcm9wcykge1xuICAgICAgICBwb3B1cFZpc2libGUgPSAhIXByb3BzLnBvcHVwVmlzaWJsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvcHVwVmlzaWJsZSA9ICEhcHJvcHMuZGVmYXVsdFBvcHVwVmlzaWJsZTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgIHByZXZQb3B1cFZpc2libGU6IHBvcHVwVmlzaWJsZSxcbiAgICAgICAgcG9wdXBWaXNpYmxlOiBwb3B1cFZpc2libGVcbiAgICAgIH07XG4gICAgICBBTExfSEFORExFUlMuZm9yRWFjaChmdW5jdGlvbiAoaCkge1xuICAgICAgICBfdGhpc1tcImZpcmVcIi5jb25jYXQoaCldID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBfdGhpcy5maXJlRXZlbnRzKGgsIGUpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFRyaWdnZXIsIFt7XG4gICAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlOyAvLyBXZSBtdXN0IGxpc3RlbiB0byBgbW91c2Vkb3duYCBvciBgdG91Y2hzdGFydGAsIGVkZ2UgY2FzZTpcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvNTgwNFxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L2NhbGVuZGFyL2lzc3Vlcy8yNTBcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC90cmlnZ2VyL2lzc3Vlcy81MFxuXG4gICAgICAgIGlmIChzdGF0ZS5wb3B1cFZpc2libGUpIHtcbiAgICAgICAgICB2YXIgY3VycmVudERvY3VtZW50O1xuXG4gICAgICAgICAgaWYgKCF0aGlzLmNsaWNrT3V0c2lkZUhhbmRsZXIgJiYgKHRoaXMuaXNDbGlja1RvSGlkZSgpIHx8IHRoaXMuaXNDb250ZXh0TWVudVRvU2hvdygpKSkge1xuICAgICAgICAgICAgY3VycmVudERvY3VtZW50ID0gcHJvcHMuZ2V0RG9jdW1lbnQodGhpcy5nZXRSb290RG9tTm9kZSgpKTtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlciA9IGFkZEV2ZW50TGlzdGVuZXIoY3VycmVudERvY3VtZW50LCAnbW91c2Vkb3duJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICAgICAgICAgIH0gLy8gYWx3YXlzIGhpZGUgb24gbW9iaWxlXG5cblxuICAgICAgICAgIGlmICghdGhpcy50b3VjaE91dHNpZGVIYW5kbGVyKSB7XG4gICAgICAgICAgICBjdXJyZW50RG9jdW1lbnQgPSBjdXJyZW50RG9jdW1lbnQgfHwgcHJvcHMuZ2V0RG9jdW1lbnQodGhpcy5nZXRSb290RG9tTm9kZSgpKTtcbiAgICAgICAgICAgIHRoaXMudG91Y2hPdXRzaWRlSGFuZGxlciA9IGFkZEV2ZW50TGlzdGVuZXIoY3VycmVudERvY3VtZW50LCAndG91Y2hzdGFydCcsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICAgICAgICB9IC8vIGNsb3NlIHBvcHVwIHdoZW4gdHJpZ2dlciB0eXBlIGNvbnRhaW5zICdvbkNvbnRleHRNZW51JyBhbmQgZG9jdW1lbnQgaXMgc2Nyb2xsaW5nLlxuXG5cbiAgICAgICAgICBpZiAoIXRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjEgJiYgdGhpcy5pc0NvbnRleHRNZW51VG9TaG93KCkpIHtcbiAgICAgICAgICAgIGN1cnJlbnREb2N1bWVudCA9IGN1cnJlbnREb2N1bWVudCB8fCBwcm9wcy5nZXREb2N1bWVudCh0aGlzLmdldFJvb3REb21Ob2RlKCkpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMSA9IGFkZEV2ZW50TGlzdGVuZXIoY3VycmVudERvY3VtZW50LCAnc2Nyb2xsJywgdGhpcy5vbkNvbnRleHRNZW51Q2xvc2UpO1xuICAgICAgICAgIH0gLy8gY2xvc2UgcG9wdXAgd2hlbiB0cmlnZ2VyIHR5cGUgY29udGFpbnMgJ29uQ29udGV4dE1lbnUnIGFuZCB3aW5kb3cgaXMgYmx1ci5cblxuXG4gICAgICAgICAgaWYgKCF0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIyICYmIHRoaXMuaXNDb250ZXh0TWVudVRvU2hvdygpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIyID0gYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdibHVyJywgdGhpcy5vbkNvbnRleHRNZW51Q2xvc2UpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xlYXJPdXRzaWRlSGFuZGxlcigpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLmNsZWFyRGVsYXlUaW1lcigpO1xuICAgICAgICB0aGlzLmNsZWFyT3V0c2lkZUhhbmRsZXIoKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubW91c2VEb3duVGltZW91dCk7XG4gICAgICAgIHJhZi5jYW5jZWwodGhpcy5hdHRhY2hJZCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldFBvcHVwRG9tTm9kZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBvcHVwRG9tTm9kZSgpIHtcbiAgICAgICAgdmFyIF90aGlzJHBvcHVwUmVmJGN1cnJlbjI7XG5cbiAgICAgICAgLy8gZm9yIHRlc3RcbiAgICAgICAgcmV0dXJuICgoX3RoaXMkcG9wdXBSZWYkY3VycmVuMiA9IHRoaXMucG9wdXBSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX3RoaXMkcG9wdXBSZWYkY3VycmVuMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkcG9wdXBSZWYkY3VycmVuMi5nZXRFbGVtZW50KCkpIHx8IG51bGw7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldFBvcHVwQWxpZ25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQb3B1cEFsaWduKCkge1xuICAgICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgcG9wdXBQbGFjZW1lbnQgPSBwcm9wcy5wb3B1cFBsYWNlbWVudCxcbiAgICAgICAgICAgIHBvcHVwQWxpZ24gPSBwcm9wcy5wb3B1cEFsaWduLFxuICAgICAgICAgICAgYnVpbHRpblBsYWNlbWVudHMgPSBwcm9wcy5idWlsdGluUGxhY2VtZW50cztcblxuICAgICAgICBpZiAocG9wdXBQbGFjZW1lbnQgJiYgYnVpbHRpblBsYWNlbWVudHMpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0QWxpZ25Gcm9tUGxhY2VtZW50KGJ1aWx0aW5QbGFjZW1lbnRzLCBwb3B1cFBsYWNlbWVudCwgcG9wdXBBbGlnbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcG9wdXBBbGlnbjtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHBvcHVwVmlzaWJsZSAgICBTaG93IG9yIG5vdCB0aGUgcG9wdXAgZWxlbWVudFxuICAgICAgICogQHBhcmFtIGV2ZW50ICAgICAgICAgICBTeW50aGV0aWNFdmVudCwgdXNlZCBmb3IgYHBvaW50QWxpZ25gXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZXRQb3B1cFZpc2libGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQb3B1cFZpc2libGUocG9wdXBWaXNpYmxlLCBldmVudCkge1xuICAgICAgICB2YXIgYWxpZ25Qb2ludCA9IHRoaXMucHJvcHMuYWxpZ25Qb2ludDtcbiAgICAgICAgdmFyIHByZXZQb3B1cFZpc2libGUgPSB0aGlzLnN0YXRlLnBvcHVwVmlzaWJsZTtcbiAgICAgICAgdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcblxuICAgICAgICBpZiAocHJldlBvcHVwVmlzaWJsZSAhPT0gcG9wdXBWaXNpYmxlKSB7XG4gICAgICAgICAgaWYgKCEoJ3BvcHVwVmlzaWJsZScgaW4gdGhpcy5wcm9wcykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBwb3B1cFZpc2libGU6IHBvcHVwVmlzaWJsZSxcbiAgICAgICAgICAgICAgcHJldlBvcHVwVmlzaWJsZTogcHJldlBvcHVwVmlzaWJsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5wcm9wcy5vblBvcHVwVmlzaWJsZUNoYW5nZShwb3B1cFZpc2libGUpO1xuICAgICAgICB9IC8vIEFsd2F5cyByZWNvcmQgdGhlIHBvaW50IHBvc2l0aW9uIHNpbmNlIG1vdXNlRW50ZXJEZWxheSB3aWxsIGRlbGF5IHRoZSBzaG93XG5cblxuICAgICAgICBpZiAoYWxpZ25Qb2ludCAmJiBldmVudCAmJiBwb3B1cFZpc2libGUpIHtcbiAgICAgICAgICB0aGlzLnNldFBvaW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkZWxheVNldFBvcHVwVmlzaWJsZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlbGF5U2V0UG9wdXBWaXNpYmxlKHZpc2libGUsIGRlbGF5UywgZXZlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGRlbGF5ID0gZGVsYXlTICogMTAwMDtcbiAgICAgICAgdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcblxuICAgICAgICBpZiAoZGVsYXkpIHtcbiAgICAgICAgICB2YXIgcG9pbnQgPSBldmVudCA/IHtcbiAgICAgICAgICAgIHBhZ2VYOiBldmVudC5wYWdlWCxcbiAgICAgICAgICAgIHBhZ2VZOiBldmVudC5wYWdlWVxuICAgICAgICAgIH0gOiBudWxsO1xuICAgICAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMi5zZXRQb3B1cFZpc2libGUodmlzaWJsZSwgcG9pbnQpO1xuXG4gICAgICAgICAgICBfdGhpczIuY2xlYXJEZWxheVRpbWVyKCk7XG4gICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0UG9wdXBWaXNpYmxlKHZpc2libGUsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjbGVhckRlbGF5VGltZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhckRlbGF5VGltZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmRlbGF5VGltZXIpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheVRpbWVyKTtcbiAgICAgICAgICB0aGlzLmRlbGF5VGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsZWFyT3V0c2lkZUhhbmRsZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhck91dHNpZGVIYW5kbGVyKCkge1xuICAgICAgICBpZiAodGhpcy5jbGlja091dHNpZGVIYW5kbGVyKSB7XG4gICAgICAgICAgdGhpcy5jbGlja091dHNpZGVIYW5kbGVyLnJlbW92ZSgpO1xuICAgICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMSkge1xuICAgICAgICAgIHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjEucmVtb3ZlKCk7XG4gICAgICAgICAgdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMikge1xuICAgICAgICAgIHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjIucmVtb3ZlKCk7XG4gICAgICAgICAgdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMiA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50b3VjaE91dHNpZGVIYW5kbGVyKSB7XG4gICAgICAgICAgdGhpcy50b3VjaE91dHNpZGVIYW5kbGVyLnJlbW92ZSgpO1xuICAgICAgICAgIHRoaXMudG91Y2hPdXRzaWRlSGFuZGxlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY3JlYXRlVHdvQ2hhaW5zXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlVHdvQ2hhaW5zKGV2ZW50KSB7XG4gICAgICAgIHZhciBjaGlsZFByb3MgPSB0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzO1xuICAgICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChjaGlsZFByb3NbZXZlbnRdICYmIHByb3BzW2V2ZW50XSkge1xuICAgICAgICAgIHJldHVybiB0aGlzW1wiZmlyZVwiLmNvbmNhdChldmVudCldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkUHJvc1tldmVudF0gfHwgcHJvcHNbZXZlbnRdO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc0NsaWNrVG9TaG93XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNDbGlja1RvU2hvdygpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBhY3Rpb24gPSBfdGhpcyRwcm9wczQuYWN0aW9uLFxuICAgICAgICAgICAgc2hvd0FjdGlvbiA9IF90aGlzJHByb3BzNC5zaG93QWN0aW9uO1xuICAgICAgICByZXR1cm4gYWN0aW9uLmluZGV4T2YoJ2NsaWNrJykgIT09IC0xIHx8IHNob3dBY3Rpb24uaW5kZXhPZignY2xpY2snKSAhPT0gLTE7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImlzQ29udGV4dE1lbnVUb1Nob3dcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0NvbnRleHRNZW51VG9TaG93KCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGFjdGlvbiA9IF90aGlzJHByb3BzNS5hY3Rpb24sXG4gICAgICAgICAgICBzaG93QWN0aW9uID0gX3RoaXMkcHJvcHM1LnNob3dBY3Rpb247XG4gICAgICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignY29udGV4dE1lbnUnKSAhPT0gLTEgfHwgc2hvd0FjdGlvbi5pbmRleE9mKCdjb250ZXh0TWVudScpICE9PSAtMTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaXNDbGlja1RvSGlkZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzQ2xpY2tUb0hpZGUoKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczYgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgYWN0aW9uID0gX3RoaXMkcHJvcHM2LmFjdGlvbixcbiAgICAgICAgICAgIGhpZGVBY3Rpb24gPSBfdGhpcyRwcm9wczYuaGlkZUFjdGlvbjtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdjbGljaycpICE9PSAtMSB8fCBoaWRlQWN0aW9uLmluZGV4T2YoJ2NsaWNrJykgIT09IC0xO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc01vdXNlRW50ZXJUb1Nob3dcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc01vdXNlRW50ZXJUb1Nob3coKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczcgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgYWN0aW9uID0gX3RoaXMkcHJvcHM3LmFjdGlvbixcbiAgICAgICAgICAgIHNob3dBY3Rpb24gPSBfdGhpcyRwcm9wczcuc2hvd0FjdGlvbjtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdob3ZlcicpICE9PSAtMSB8fCBzaG93QWN0aW9uLmluZGV4T2YoJ21vdXNlRW50ZXInKSAhPT0gLTE7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImlzTW91c2VMZWF2ZVRvSGlkZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzTW91c2VMZWF2ZVRvSGlkZSgpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzOCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBhY3Rpb24gPSBfdGhpcyRwcm9wczguYWN0aW9uLFxuICAgICAgICAgICAgaGlkZUFjdGlvbiA9IF90aGlzJHByb3BzOC5oaWRlQWN0aW9uO1xuICAgICAgICByZXR1cm4gYWN0aW9uLmluZGV4T2YoJ2hvdmVyJykgIT09IC0xIHx8IGhpZGVBY3Rpb24uaW5kZXhPZignbW91c2VMZWF2ZScpICE9PSAtMTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaXNGb2N1c1RvU2hvd1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzRm9jdXNUb1Nob3coKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczkgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgYWN0aW9uID0gX3RoaXMkcHJvcHM5LmFjdGlvbixcbiAgICAgICAgICAgIHNob3dBY3Rpb24gPSBfdGhpcyRwcm9wczkuc2hvd0FjdGlvbjtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdmb2N1cycpICE9PSAtMSB8fCBzaG93QWN0aW9uLmluZGV4T2YoJ2ZvY3VzJykgIT09IC0xO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc0JsdXJUb0hpZGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0JsdXJUb0hpZGUoKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczEwID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGFjdGlvbiA9IF90aGlzJHByb3BzMTAuYWN0aW9uLFxuICAgICAgICAgICAgaGlkZUFjdGlvbiA9IF90aGlzJHByb3BzMTAuaGlkZUFjdGlvbjtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdmb2N1cycpICE9PSAtMSB8fCBoaWRlQWN0aW9uLmluZGV4T2YoJ2JsdXInKSAhPT0gLTE7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImZvcmNlUG9wdXBBbGlnblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZvcmNlUG9wdXBBbGlnbigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucG9wdXBWaXNpYmxlKSB7XG4gICAgICAgICAgdmFyIF90aGlzJHBvcHVwUmVmJGN1cnJlbjM7XG5cbiAgICAgICAgICAoX3RoaXMkcG9wdXBSZWYkY3VycmVuMyA9IHRoaXMucG9wdXBSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX3RoaXMkcG9wdXBSZWYkY3VycmVuMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkcG9wdXBSZWYkY3VycmVuMy5mb3JjZUFsaWduKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZmlyZUV2ZW50c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZpcmVFdmVudHModHlwZSwgZSkge1xuICAgICAgICB2YXIgY2hpbGRDYWxsYmFjayA9IHRoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHNbdHlwZV07XG5cbiAgICAgICAgaWYgKGNoaWxkQ2FsbGJhY2spIHtcbiAgICAgICAgICBjaGlsZENhbGxiYWNrKGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGhpcy5wcm9wc1t0eXBlXTtcblxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjbG9zZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgICB0aGlzLnNldFBvcHVwVmlzaWJsZShmYWxzZSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHBvcHVwVmlzaWJsZSA9IHRoaXMuc3RhdGUucG9wdXBWaXNpYmxlO1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMxMSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMTEuY2hpbGRyZW4sXG4gICAgICAgICAgICBmb3JjZVJlbmRlciA9IF90aGlzJHByb3BzMTEuZm9yY2VSZW5kZXIsXG4gICAgICAgICAgICBhbGlnblBvaW50ID0gX3RoaXMkcHJvcHMxMS5hbGlnblBvaW50LFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMxMS5jbGFzc05hbWUsXG4gICAgICAgICAgICBhdXRvRGVzdHJveSA9IF90aGlzJHByb3BzMTEuYXV0b0Rlc3Ryb3k7XG4gICAgICAgIHZhciBjaGlsZCA9IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICB2YXIgbmV3Q2hpbGRQcm9wcyA9IHtcbiAgICAgICAgICBrZXk6ICd0cmlnZ2VyJ1xuICAgICAgICB9OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gVmlzaWJsZSBIYW5kbGVycyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gPj4+IENvbnRleHRNZW51XG5cbiAgICAgICAgaWYgKHRoaXMuaXNDb250ZXh0TWVudVRvU2hvdygpKSB7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbkNvbnRleHRNZW51ID0gdGhpcy5vbkNvbnRleHRNZW51O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Db250ZXh0TWVudSA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvbkNvbnRleHRNZW51Jyk7XG4gICAgICAgIH0gLy8gPj4+IENsaWNrXG5cblxuICAgICAgICBpZiAodGhpcy5pc0NsaWNrVG9IaWRlKCkgfHwgdGhpcy5pc0NsaWNrVG9TaG93KCkpIHtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2s7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlRG93biA9IHRoaXMub25Nb3VzZURvd247XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vblRvdWNoU3RhcnQgPSB0aGlzLm9uVG91Y2hTdGFydDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uQ2xpY2sgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25DbGljaycpO1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZURvd24gPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25Nb3VzZURvd24nKTtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uVG91Y2hTdGFydCA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvblRvdWNoU3RhcnQnKTtcbiAgICAgICAgfSAvLyA+Pj4gSG92ZXIoZW50ZXIpXG5cblxuICAgICAgICBpZiAodGhpcy5pc01vdXNlRW50ZXJUb1Nob3coKSkge1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gdGhpcy5vbk1vdXNlRW50ZXI7IC8vIFBvaW50IGFsaWduXG5cbiAgICAgICAgICBpZiAoYWxpZ25Qb2ludCkge1xuICAgICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uTW91c2VFbnRlcicpO1xuICAgICAgICB9IC8vID4+PiBIb3ZlcihsZWF2ZSlcblxuXG4gICAgICAgIGlmICh0aGlzLmlzTW91c2VMZWF2ZVRvSGlkZSgpKSB7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlTGVhdmUgPSB0aGlzLm9uTW91c2VMZWF2ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uTW91c2VMZWF2ZSA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvbk1vdXNlTGVhdmUnKTtcbiAgICAgICAgfSAvLyA+Pj4gRm9jdXNcblxuXG4gICAgICAgIGlmICh0aGlzLmlzRm9jdXNUb1Nob3coKSB8fCB0aGlzLmlzQmx1clRvSGlkZSgpKSB7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzO1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25CbHVyID0gdGhpcy5vbkJsdXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbkZvY3VzID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uRm9jdXMnKTtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uQmx1ciA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvbkJsdXInKTtcbiAgICAgICAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBSZW5kZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gICAgICAgIHZhciBjaGlsZHJlbkNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoY2hpbGQgJiYgY2hpbGQucHJvcHMgJiYgY2hpbGQucHJvcHMuY2xhc3NOYW1lLCBjbGFzc05hbWUpO1xuXG4gICAgICAgIGlmIChjaGlsZHJlbkNsYXNzTmFtZSkge1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMuY2xhc3NOYW1lID0gY2hpbGRyZW5DbGFzc05hbWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2xvbmVQcm9wcyA9IF9vYmplY3RTcHJlYWQoe30sIG5ld0NoaWxkUHJvcHMpO1xuXG4gICAgICAgIGlmIChzdXBwb3J0UmVmKGNoaWxkKSkge1xuICAgICAgICAgIGNsb25lUHJvcHMucmVmID0gY29tcG9zZVJlZih0aGlzLnRyaWdnZXJSZWYsIGNoaWxkLnJlZik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdHJpZ2dlciA9IC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNsb25lUHJvcHMpO1xuICAgICAgICB2YXIgcG9ydGFsOyAvLyBwcmV2ZW50IHVubW91bnRpbmcgYWZ0ZXIgaXQncyByZW5kZXJlZFxuXG4gICAgICAgIGlmIChwb3B1cFZpc2libGUgfHwgdGhpcy5wb3B1cFJlZi5jdXJyZW50IHx8IGZvcmNlUmVuZGVyKSB7XG4gICAgICAgICAgcG9ydGFsID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUG9ydGFsQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBrZXk6IFwicG9ydGFsXCIsXG4gICAgICAgICAgICBnZXRDb250YWluZXI6IHRoaXMuZ2V0Q29udGFpbmVyLFxuICAgICAgICAgICAgZGlkVXBkYXRlOiB0aGlzLmhhbmRsZVBvcnRhbFVwZGF0ZVxuICAgICAgICAgIH0sIHRoaXMuZ2V0Q29tcG9uZW50KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwb3B1cFZpc2libGUgJiYgYXV0b0Rlc3Ryb3kpIHtcbiAgICAgICAgICBwb3J0YWwgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyaWdnZXJDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIG9uUG9wdXBNb3VzZURvd246IHRoaXMub25Qb3B1cE1vdXNlRG93blxuICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJpZ2dlciwgcG9ydGFsKTtcbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoX3JlZiwgcHJldlN0YXRlKSB7XG4gICAgICAgIHZhciBwb3B1cFZpc2libGUgPSBfcmVmLnBvcHVwVmlzaWJsZTtcbiAgICAgICAgdmFyIG5ld1N0YXRlID0ge307XG5cbiAgICAgICAgaWYgKHBvcHVwVmlzaWJsZSAhPT0gdW5kZWZpbmVkICYmIHByZXZTdGF0ZS5wb3B1cFZpc2libGUgIT09IHBvcHVwVmlzaWJsZSkge1xuICAgICAgICAgIG5ld1N0YXRlLnBvcHVwVmlzaWJsZSA9IHBvcHVwVmlzaWJsZTtcbiAgICAgICAgICBuZXdTdGF0ZS5wcmV2UG9wdXBWaXNpYmxlID0gcHJldlN0YXRlLnBvcHVwVmlzaWJsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVHJpZ2dlcjtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIFRyaWdnZXIuY29udGV4dFR5cGUgPSBUcmlnZ2VyQ29udGV4dDtcbiAgVHJpZ2dlci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcHJlZml4Q2xzOiAncmMtdHJpZ2dlci1wb3B1cCcsXG4gICAgZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ246IHJldHVybkVtcHR5U3RyaW5nLFxuICAgIGdldERvY3VtZW50OiByZXR1cm5Eb2N1bWVudCxcbiAgICBvblBvcHVwVmlzaWJsZUNoYW5nZTogbm9vcCxcbiAgICBhZnRlclBvcHVwVmlzaWJsZUNoYW5nZTogbm9vcCxcbiAgICBvblBvcHVwQWxpZ246IG5vb3AsXG4gICAgcG9wdXBDbGFzc05hbWU6ICcnLFxuICAgIG1vdXNlRW50ZXJEZWxheTogMCxcbiAgICBtb3VzZUxlYXZlRGVsYXk6IDAuMSxcbiAgICBmb2N1c0RlbGF5OiAwLFxuICAgIGJsdXJEZWxheTogMC4xNSxcbiAgICBwb3B1cFN0eWxlOiB7fSxcbiAgICBkZXN0cm95UG9wdXBPbkhpZGU6IGZhbHNlLFxuICAgIHBvcHVwQWxpZ246IHt9LFxuICAgIGRlZmF1bHRQb3B1cFZpc2libGU6IGZhbHNlLFxuICAgIG1hc2s6IGZhbHNlLFxuICAgIG1hc2tDbG9zYWJsZTogdHJ1ZSxcbiAgICBhY3Rpb246IFtdLFxuICAgIHNob3dBY3Rpb246IFtdLFxuICAgIGhpZGVBY3Rpb246IFtdLFxuICAgIGF1dG9EZXN0cm95OiBmYWxzZVxuICB9O1xuICByZXR1cm4gVHJpZ2dlcjtcbn1cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlVHJpZ2dlcihQb3J0YWwpOyIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5cbmZ1bmN0aW9uIGlzUG9pbnRzRXEoYTEsIGEyLCBpc0FsaWduUG9pbnQpIHtcbiAgaWYgKGlzQWxpZ25Qb2ludCkge1xuICAgIHJldHVybiBhMVswXSA9PT0gYTJbMF07XG4gIH1cblxuICByZXR1cm4gYTFbMF0gPT09IGEyWzBdICYmIGExWzFdID09PSBhMlsxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsaWduRnJvbVBsYWNlbWVudChidWlsdGluUGxhY2VtZW50cywgcGxhY2VtZW50U3RyLCBhbGlnbikge1xuICB2YXIgYmFzZUFsaWduID0gYnVpbHRpblBsYWNlbWVudHNbcGxhY2VtZW50U3RyXSB8fCB7fTtcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgYmFzZUFsaWduKSwgYWxpZ24pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsaWduUG9wdXBDbGFzc05hbWUoYnVpbHRpblBsYWNlbWVudHMsIHByZWZpeENscywgYWxpZ24sIGlzQWxpZ25Qb2ludCkge1xuICB2YXIgcG9pbnRzID0gYWxpZ24ucG9pbnRzO1xuICB2YXIgcGxhY2VtZW50cyA9IE9iamVjdC5rZXlzKGJ1aWx0aW5QbGFjZW1lbnRzKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYWNlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgcGxhY2VtZW50ID0gcGxhY2VtZW50c1tpXTtcblxuICAgIGlmIChpc1BvaW50c0VxKGJ1aWx0aW5QbGFjZW1lbnRzW3BsYWNlbWVudF0ucG9pbnRzLCBwb2ludHMsIGlzQWxpZ25Qb2ludCkpIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBsYWNlbWVudC1cIikuY29uY2F0KHBsYWNlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufSIsImV4cG9ydCBmdW5jdGlvbiBnZXRNb3Rpb24oX3JlZikge1xuICB2YXIgcHJlZml4Q2xzID0gX3JlZi5wcmVmaXhDbHMsXG4gICAgICBtb3Rpb24gPSBfcmVmLm1vdGlvbixcbiAgICAgIGFuaW1hdGlvbiA9IF9yZWYuYW5pbWF0aW9uLFxuICAgICAgdHJhbnNpdGlvbk5hbWUgPSBfcmVmLnRyYW5zaXRpb25OYW1lO1xuXG4gIGlmIChtb3Rpb24pIHtcbiAgICByZXR1cm4gbW90aW9uO1xuICB9XG5cbiAgaWYgKGFuaW1hdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICBtb3Rpb25OYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoYW5pbWF0aW9uKVxuICAgIH07XG4gIH1cblxuICBpZiAodHJhbnNpdGlvbk5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbW90aW9uTmFtZTogdHJhbnNpdGlvbk5hbWVcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59IiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyV3JhcCh0YXJnZXQsIGV2ZW50VHlwZSwgY2IsIG9wdGlvbikge1xuICAvKiBlc2xpbnQgY2FtZWxjYXNlOiAyICovXG4gIHZhciBjYWxsYmFjayA9IFJlYWN0RE9NLnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzID8gZnVuY3Rpb24gcnVuKGUpIHtcbiAgICBSZWFjdERPTS51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyhjYiwgZSk7XG4gIH0gOiBjYjtcblxuICBpZiAodGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGNhbGxiYWNrLCBvcHRpb24pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIGlmICh0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FuVXNlRG9tKCkge1xuICByZXR1cm4gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWlucyhyb290LCBuKSB7XG4gIGlmICghcm9vdCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiByb290LmNvbnRhaW5zKG4pO1xufSIsImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuLyoqXG4gKiBSZXR1cm4gaWYgYSBub2RlIGlzIGEgRE9NIG5vZGUuIEVsc2Ugd2lsbCByZXR1cm4gYnkgYGZpbmRET01Ob2RlYFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRET01Ob2RlKG5vZGUpIHtcbiAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKG5vZGUpO1xufSIsImV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoZWxlbWVudC5vZmZzZXRQYXJlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChlbGVtZW50LmdldEJCb3gpIHtcbiAgICB2YXIgYm94ID0gZWxlbWVudC5nZXRCQm94KCk7XG5cbiAgICBpZiAoYm94LndpZHRoIHx8IGJveC5oZWlnaHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgIHZhciBfYm94ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGlmIChfYm94LndpZHRoIHx8IF9ib3guaGVpZ2h0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59KTsiLCIvKipcbiAqIEBpZ25vcmVcbiAqIHNvbWUga2V5LWNvZGVzIGRlZmluaXRpb24gYW5kIHV0aWxzIGZyb20gY2xvc3VyZS1saWJyYXJ5XG4gKiBAYXV0aG9yIHlpbWluZ2hlQGdtYWlsLmNvbVxuICovXG52YXIgS2V5Q29kZSA9IHtcbiAgLyoqXG4gICAqIE1BQ19FTlRFUlxuICAgKi9cbiAgTUFDX0VOVEVSOiAzLFxuXG4gIC8qKlxuICAgKiBCQUNLU1BBQ0VcbiAgICovXG4gIEJBQ0tTUEFDRTogOCxcblxuICAvKipcbiAgICogVEFCXG4gICAqL1xuICBUQUI6IDksXG5cbiAgLyoqXG4gICAqIE5VTUxPQ0sgb24gRkYvU2FmYXJpIE1hY1xuICAgKi9cbiAgTlVNX0NFTlRFUjogMTIsXG5cbiAgLyoqXG4gICAqIEVOVEVSXG4gICAqL1xuICBFTlRFUjogMTMsXG5cbiAgLyoqXG4gICAqIFNISUZUXG4gICAqL1xuICBTSElGVDogMTYsXG5cbiAgLyoqXG4gICAqIENUUkxcbiAgICovXG4gIENUUkw6IDE3LFxuXG4gIC8qKlxuICAgKiBBTFRcbiAgICovXG4gIEFMVDogMTgsXG5cbiAgLyoqXG4gICAqIFBBVVNFXG4gICAqL1xuICBQQVVTRTogMTksXG5cbiAgLyoqXG4gICAqIENBUFNfTE9DS1xuICAgKi9cbiAgQ0FQU19MT0NLOiAyMCxcblxuICAvKipcbiAgICogRVNDXG4gICAqL1xuICBFU0M6IDI3LFxuXG4gIC8qKlxuICAgKiBTUEFDRVxuICAgKi9cbiAgU1BBQ0U6IDMyLFxuXG4gIC8qKlxuICAgKiBQQUdFX1VQXG4gICAqL1xuICBQQUdFX1VQOiAzMyxcblxuICAvKipcbiAgICogUEFHRV9ET1dOXG4gICAqL1xuICBQQUdFX0RPV046IDM0LFxuXG4gIC8qKlxuICAgKiBFTkRcbiAgICovXG4gIEVORDogMzUsXG5cbiAgLyoqXG4gICAqIEhPTUVcbiAgICovXG4gIEhPTUU6IDM2LFxuXG4gIC8qKlxuICAgKiBMRUZUXG4gICAqL1xuICBMRUZUOiAzNyxcblxuICAvKipcbiAgICogVVBcbiAgICovXG4gIFVQOiAzOCxcblxuICAvKipcbiAgICogUklHSFRcbiAgICovXG4gIFJJR0hUOiAzOSxcblxuICAvKipcbiAgICogRE9XTlxuICAgKi9cbiAgRE9XTjogNDAsXG5cbiAgLyoqXG4gICAqIFBSSU5UX1NDUkVFTlxuICAgKi9cbiAgUFJJTlRfU0NSRUVOOiA0NCxcblxuICAvKipcbiAgICogSU5TRVJUXG4gICAqL1xuICBJTlNFUlQ6IDQ1LFxuXG4gIC8qKlxuICAgKiBERUxFVEVcbiAgICovXG4gIERFTEVURTogNDYsXG5cbiAgLyoqXG4gICAqIFpFUk9cbiAgICovXG4gIFpFUk86IDQ4LFxuXG4gIC8qKlxuICAgKiBPTkVcbiAgICovXG4gIE9ORTogNDksXG5cbiAgLyoqXG4gICAqIFRXT1xuICAgKi9cbiAgVFdPOiA1MCxcblxuICAvKipcbiAgICogVEhSRUVcbiAgICovXG4gIFRIUkVFOiA1MSxcblxuICAvKipcbiAgICogRk9VUlxuICAgKi9cbiAgRk9VUjogNTIsXG5cbiAgLyoqXG4gICAqIEZJVkVcbiAgICovXG4gIEZJVkU6IDUzLFxuXG4gIC8qKlxuICAgKiBTSVhcbiAgICovXG4gIFNJWDogNTQsXG5cbiAgLyoqXG4gICAqIFNFVkVOXG4gICAqL1xuICBTRVZFTjogNTUsXG5cbiAgLyoqXG4gICAqIEVJR0hUXG4gICAqL1xuICBFSUdIVDogNTYsXG5cbiAgLyoqXG4gICAqIE5JTkVcbiAgICovXG4gIE5JTkU6IDU3LFxuXG4gIC8qKlxuICAgKiBRVUVTVElPTl9NQVJLXG4gICAqL1xuICBRVUVTVElPTl9NQVJLOiA2MyxcblxuICAvKipcbiAgICogQVxuICAgKi9cbiAgQTogNjUsXG5cbiAgLyoqXG4gICAqIEJcbiAgICovXG4gIEI6IDY2LFxuXG4gIC8qKlxuICAgKiBDXG4gICAqL1xuICBDOiA2NyxcblxuICAvKipcbiAgICogRFxuICAgKi9cbiAgRDogNjgsXG5cbiAgLyoqXG4gICAqIEVcbiAgICovXG4gIEU6IDY5LFxuXG4gIC8qKlxuICAgKiBGXG4gICAqL1xuICBGOiA3MCxcblxuICAvKipcbiAgICogR1xuICAgKi9cbiAgRzogNzEsXG5cbiAgLyoqXG4gICAqIEhcbiAgICovXG4gIEg6IDcyLFxuXG4gIC8qKlxuICAgKiBJXG4gICAqL1xuICBJOiA3MyxcblxuICAvKipcbiAgICogSlxuICAgKi9cbiAgSjogNzQsXG5cbiAgLyoqXG4gICAqIEtcbiAgICovXG4gIEs6IDc1LFxuXG4gIC8qKlxuICAgKiBMXG4gICAqL1xuICBMOiA3NixcblxuICAvKipcbiAgICogTVxuICAgKi9cbiAgTTogNzcsXG5cbiAgLyoqXG4gICAqIE5cbiAgICovXG4gIE46IDc4LFxuXG4gIC8qKlxuICAgKiBPXG4gICAqL1xuICBPOiA3OSxcblxuICAvKipcbiAgICogUFxuICAgKi9cbiAgUDogODAsXG5cbiAgLyoqXG4gICAqIFFcbiAgICovXG4gIFE6IDgxLFxuXG4gIC8qKlxuICAgKiBSXG4gICAqL1xuICBSOiA4MixcblxuICAvKipcbiAgICogU1xuICAgKi9cbiAgUzogODMsXG5cbiAgLyoqXG4gICAqIFRcbiAgICovXG4gIFQ6IDg0LFxuXG4gIC8qKlxuICAgKiBVXG4gICAqL1xuICBVOiA4NSxcblxuICAvKipcbiAgICogVlxuICAgKi9cbiAgVjogODYsXG5cbiAgLyoqXG4gICAqIFdcbiAgICovXG4gIFc6IDg3LFxuXG4gIC8qKlxuICAgKiBYXG4gICAqL1xuICBYOiA4OCxcblxuICAvKipcbiAgICogWVxuICAgKi9cbiAgWTogODksXG5cbiAgLyoqXG4gICAqIFpcbiAgICovXG4gIFo6IDkwLFxuXG4gIC8qKlxuICAgKiBNRVRBXG4gICAqL1xuICBNRVRBOiA5MSxcblxuICAvKipcbiAgICogV0lOX0tFWV9SSUdIVFxuICAgKi9cbiAgV0lOX0tFWV9SSUdIVDogOTIsXG5cbiAgLyoqXG4gICAqIENPTlRFWFRfTUVOVVxuICAgKi9cbiAgQ09OVEVYVF9NRU5VOiA5MyxcblxuICAvKipcbiAgICogTlVNX1pFUk9cbiAgICovXG4gIE5VTV9aRVJPOiA5NixcblxuICAvKipcbiAgICogTlVNX09ORVxuICAgKi9cbiAgTlVNX09ORTogOTcsXG5cbiAgLyoqXG4gICAqIE5VTV9UV09cbiAgICovXG4gIE5VTV9UV086IDk4LFxuXG4gIC8qKlxuICAgKiBOVU1fVEhSRUVcbiAgICovXG4gIE5VTV9USFJFRTogOTksXG5cbiAgLyoqXG4gICAqIE5VTV9GT1VSXG4gICAqL1xuICBOVU1fRk9VUjogMTAwLFxuXG4gIC8qKlxuICAgKiBOVU1fRklWRVxuICAgKi9cbiAgTlVNX0ZJVkU6IDEwMSxcblxuICAvKipcbiAgICogTlVNX1NJWFxuICAgKi9cbiAgTlVNX1NJWDogMTAyLFxuXG4gIC8qKlxuICAgKiBOVU1fU0VWRU5cbiAgICovXG4gIE5VTV9TRVZFTjogMTAzLFxuXG4gIC8qKlxuICAgKiBOVU1fRUlHSFRcbiAgICovXG4gIE5VTV9FSUdIVDogMTA0LFxuXG4gIC8qKlxuICAgKiBOVU1fTklORVxuICAgKi9cbiAgTlVNX05JTkU6IDEwNSxcblxuICAvKipcbiAgICogTlVNX01VTFRJUExZXG4gICAqL1xuICBOVU1fTVVMVElQTFk6IDEwNixcblxuICAvKipcbiAgICogTlVNX1BMVVNcbiAgICovXG4gIE5VTV9QTFVTOiAxMDcsXG5cbiAgLyoqXG4gICAqIE5VTV9NSU5VU1xuICAgKi9cbiAgTlVNX01JTlVTOiAxMDksXG5cbiAgLyoqXG4gICAqIE5VTV9QRVJJT0RcbiAgICovXG4gIE5VTV9QRVJJT0Q6IDExMCxcblxuICAvKipcbiAgICogTlVNX0RJVklTSU9OXG4gICAqL1xuICBOVU1fRElWSVNJT046IDExMSxcblxuICAvKipcbiAgICogRjFcbiAgICovXG4gIEYxOiAxMTIsXG5cbiAgLyoqXG4gICAqIEYyXG4gICAqL1xuICBGMjogMTEzLFxuXG4gIC8qKlxuICAgKiBGM1xuICAgKi9cbiAgRjM6IDExNCxcblxuICAvKipcbiAgICogRjRcbiAgICovXG4gIEY0OiAxMTUsXG5cbiAgLyoqXG4gICAqIEY1XG4gICAqL1xuICBGNTogMTE2LFxuXG4gIC8qKlxuICAgKiBGNlxuICAgKi9cbiAgRjY6IDExNyxcblxuICAvKipcbiAgICogRjdcbiAgICovXG4gIEY3OiAxMTgsXG5cbiAgLyoqXG4gICAqIEY4XG4gICAqL1xuICBGODogMTE5LFxuXG4gIC8qKlxuICAgKiBGOVxuICAgKi9cbiAgRjk6IDEyMCxcblxuICAvKipcbiAgICogRjEwXG4gICAqL1xuICBGMTA6IDEyMSxcblxuICAvKipcbiAgICogRjExXG4gICAqL1xuICBGMTE6IDEyMixcblxuICAvKipcbiAgICogRjEyXG4gICAqL1xuICBGMTI6IDEyMyxcblxuICAvKipcbiAgICogTlVNTE9DS1xuICAgKi9cbiAgTlVNTE9DSzogMTQ0LFxuXG4gIC8qKlxuICAgKiBTRU1JQ09MT05cbiAgICovXG4gIFNFTUlDT0xPTjogMTg2LFxuXG4gIC8qKlxuICAgKiBEQVNIXG4gICAqL1xuICBEQVNIOiAxODksXG5cbiAgLyoqXG4gICAqIEVRVUFMU1xuICAgKi9cbiAgRVFVQUxTOiAxODcsXG5cbiAgLyoqXG4gICAqIENPTU1BXG4gICAqL1xuICBDT01NQTogMTg4LFxuXG4gIC8qKlxuICAgKiBQRVJJT0RcbiAgICovXG4gIFBFUklPRDogMTkwLFxuXG4gIC8qKlxuICAgKiBTTEFTSFxuICAgKi9cbiAgU0xBU0g6IDE5MSxcblxuICAvKipcbiAgICogQVBPU1RST1BIRVxuICAgKi9cbiAgQVBPU1RST1BIRTogMTkyLFxuXG4gIC8qKlxuICAgKiBTSU5HTEVfUVVPVEVcbiAgICovXG4gIFNJTkdMRV9RVU9URTogMjIyLFxuXG4gIC8qKlxuICAgKiBPUEVOX1NRVUFSRV9CUkFDS0VUXG4gICAqL1xuICBPUEVOX1NRVUFSRV9CUkFDS0VUOiAyMTksXG5cbiAgLyoqXG4gICAqIEJBQ0tTTEFTSFxuICAgKi9cbiAgQkFDS1NMQVNIOiAyMjAsXG5cbiAgLyoqXG4gICAqIENMT1NFX1NRVUFSRV9CUkFDS0VUXG4gICAqL1xuICBDTE9TRV9TUVVBUkVfQlJBQ0tFVDogMjIxLFxuXG4gIC8qKlxuICAgKiBXSU5fS0VZXG4gICAqL1xuICBXSU5fS0VZOiAyMjQsXG5cbiAgLyoqXG4gICAqIE1BQ19GRl9NRVRBXG4gICAqL1xuICBNQUNfRkZfTUVUQTogMjI0LFxuXG4gIC8qKlxuICAgKiBXSU5fSU1FXG4gICAqL1xuICBXSU5fSU1FOiAyMjksXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PSBGdW5jdGlvbiA9PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAvKipcbiAgICogd2hldGhlciB0ZXh0IGFuZCBtb2RpZmllZCBrZXkgaXMgZW50ZXJlZCBhdCB0aGUgc2FtZSB0aW1lLlxuICAgKi9cbiAgaXNUZXh0TW9kaWZ5aW5nS2V5RXZlbnQ6IGZ1bmN0aW9uIGlzVGV4dE1vZGlmeWluZ0tleUV2ZW50KGUpIHtcbiAgICB2YXIga2V5Q29kZSA9IGUua2V5Q29kZTtcblxuICAgIGlmIChlLmFsdEtleSAmJiAhZS5jdHJsS2V5IHx8IGUubWV0YUtleSB8fCAvLyBGdW5jdGlvbiBrZXlzIGRvbid0IGdlbmVyYXRlIHRleHRcbiAgICBrZXlDb2RlID49IEtleUNvZGUuRjEgJiYga2V5Q29kZSA8PSBLZXlDb2RlLkYxMikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gVGhlIGZvbGxvd2luZyBrZXlzIGFyZSBxdWl0ZSBoYXJtbGVzcywgZXZlbiBpbiBjb21iaW5hdGlvbiB3aXRoXG4gICAgLy8gQ1RSTCwgQUxUIG9yIFNISUZULlxuXG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgS2V5Q29kZS5BTFQ6XG4gICAgICBjYXNlIEtleUNvZGUuQ0FQU19MT0NLOlxuICAgICAgY2FzZSBLZXlDb2RlLkNPTlRFWFRfTUVOVTpcbiAgICAgIGNhc2UgS2V5Q29kZS5DVFJMOlxuICAgICAgY2FzZSBLZXlDb2RlLkRPV046XG4gICAgICBjYXNlIEtleUNvZGUuRU5EOlxuICAgICAgY2FzZSBLZXlDb2RlLkVTQzpcbiAgICAgIGNhc2UgS2V5Q29kZS5IT01FOlxuICAgICAgY2FzZSBLZXlDb2RlLklOU0VSVDpcbiAgICAgIGNhc2UgS2V5Q29kZS5MRUZUOlxuICAgICAgY2FzZSBLZXlDb2RlLk1BQ19GRl9NRVRBOlxuICAgICAgY2FzZSBLZXlDb2RlLk1FVEE6XG4gICAgICBjYXNlIEtleUNvZGUuTlVNTE9DSzpcbiAgICAgIGNhc2UgS2V5Q29kZS5OVU1fQ0VOVEVSOlxuICAgICAgY2FzZSBLZXlDb2RlLlBBR0VfRE9XTjpcbiAgICAgIGNhc2UgS2V5Q29kZS5QQUdFX1VQOlxuICAgICAgY2FzZSBLZXlDb2RlLlBBVVNFOlxuICAgICAgY2FzZSBLZXlDb2RlLlBSSU5UX1NDUkVFTjpcbiAgICAgIGNhc2UgS2V5Q29kZS5SSUdIVDpcbiAgICAgIGNhc2UgS2V5Q29kZS5TSElGVDpcbiAgICAgIGNhc2UgS2V5Q29kZS5VUDpcbiAgICAgIGNhc2UgS2V5Q29kZS5XSU5fS0VZOlxuICAgICAgY2FzZSBLZXlDb2RlLldJTl9LRVlfUklHSFQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiB3aGV0aGVyIGNoYXJhY3RlciBpcyBlbnRlcmVkLlxuICAgKi9cbiAgaXNDaGFyYWN0ZXJLZXk6IGZ1bmN0aW9uIGlzQ2hhcmFjdGVyS2V5KGtleUNvZGUpIHtcbiAgICBpZiAoa2V5Q29kZSA+PSBLZXlDb2RlLlpFUk8gJiYga2V5Q29kZSA8PSBLZXlDb2RlLk5JTkUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChrZXlDb2RlID49IEtleUNvZGUuTlVNX1pFUk8gJiYga2V5Q29kZSA8PSBLZXlDb2RlLk5VTV9NVUxUSVBMWSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGtleUNvZGUgPj0gS2V5Q29kZS5BICYmIGtleUNvZGUgPD0gS2V5Q29kZS5aKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IC8vIFNhZmFyaSBzZW5kcyB6ZXJvIGtleSBjb2RlIGZvciBub24tbGF0aW4gY2hhcmFjdGVycy5cblxuXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1dlYktpdCcpICE9PSAtMSAmJiBrZXlDb2RlID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgS2V5Q29kZS5TUEFDRTpcbiAgICAgIGNhc2UgS2V5Q29kZS5RVUVTVElPTl9NQVJLOlxuICAgICAgY2FzZSBLZXlDb2RlLk5VTV9QTFVTOlxuICAgICAgY2FzZSBLZXlDb2RlLk5VTV9NSU5VUzpcbiAgICAgIGNhc2UgS2V5Q29kZS5OVU1fUEVSSU9EOlxuICAgICAgY2FzZSBLZXlDb2RlLk5VTV9ESVZJU0lPTjpcbiAgICAgIGNhc2UgS2V5Q29kZS5TRU1JQ09MT046XG4gICAgICBjYXNlIEtleUNvZGUuREFTSDpcbiAgICAgIGNhc2UgS2V5Q29kZS5FUVVBTFM6XG4gICAgICBjYXNlIEtleUNvZGUuQ09NTUE6XG4gICAgICBjYXNlIEtleUNvZGUuUEVSSU9EOlxuICAgICAgY2FzZSBLZXlDb2RlLlNMQVNIOlxuICAgICAgY2FzZSBLZXlDb2RlLkFQT1NUUk9QSEU6XG4gICAgICBjYXNlIEtleUNvZGUuU0lOR0xFX1FVT1RFOlxuICAgICAgY2FzZSBLZXlDb2RlLk9QRU5fU1FVQVJFX0JSQUNLRVQ6XG4gICAgICBjYXNlIEtleUNvZGUuQkFDS1NMQVNIOlxuICAgICAgY2FzZSBLZXlDb2RlLkNMT1NFX1NRVUFSRV9CUkFDS0VUOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEtleUNvZGU7IiwiaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QsIGZvcndhcmRSZWYsIHVzZUltcGVyYXRpdmVIYW5kbGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjYW5Vc2VEb20gZnJvbSAnLi9Eb20vY2FuVXNlRG9tJztcbnZhciBQb3J0YWwgPSBmb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBkaWRVcGRhdGUgPSBwcm9wcy5kaWRVcGRhdGUsXG4gICAgICBnZXRDb250YWluZXIgPSBwcm9wcy5nZXRDb250YWluZXIsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICB2YXIgY29udGFpbmVyUmVmID0gdXNlUmVmKCk7IC8vIFJlZiByZXR1cm4gbm90aGluZywgb25seSBmb3Igd3JhcHBlciBjaGVjayBleGlzdFxuXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9KTsgLy8gQ3JlYXRlIGNvbnRhaW5lciBpbiBjbGllbnQgc2lkZSB3aXRoIHN5bmMgdG8gYXZvaWQgdXNlRWZmZWN0IG5vdCBnZXQgcmVmXG5cbiAgdmFyIGluaXRSZWYgPSB1c2VSZWYoZmFsc2UpO1xuXG4gIGlmICghaW5pdFJlZi5jdXJyZW50ICYmIGNhblVzZURvbSgpKSB7XG4gICAgY29udGFpbmVyUmVmLmN1cnJlbnQgPSBnZXRDb250YWluZXIoKTtcbiAgICBpbml0UmVmLmN1cnJlbnQgPSB0cnVlO1xuICB9IC8vIFtMZWdhY3ldIFVzZWQgYnkgYHJjLXRyaWdnZXJgXG5cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGRpZFVwZGF0ZSA9PT0gbnVsbCB8fCBkaWRVcGRhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRpZFVwZGF0ZShwcm9wcyk7XG4gIH0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2NvbnRhaW5lclJlZiRjdXJyZW50LCBfY29udGFpbmVyUmVmJGN1cnJlbnQyO1xuXG4gICAgICAvLyBbTGVnYWN5XSBUaGlzIHNob3VsZCBub3QgYmUgaGFuZGxlIGJ5IFBvcnRhbCBidXQgcGFyZW50IFBvcnRhbFdyYXBwZXIgaW5zdGVhZC5cbiAgICAgIC8vIFNpbmNlIHNvbWUgY29tcG9uZW50IHVzZSBgUG9ydGFsYCBkaXJlY3RseSwgd2UgaGF2ZSB0byBrZWVwIHRoZSBsb2dpYyBoZXJlLlxuICAgICAgKF9jb250YWluZXJSZWYkY3VycmVudCA9IGNvbnRhaW5lclJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfY29udGFpbmVyUmVmJGN1cnJlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfY29udGFpbmVyUmVmJGN1cnJlbnQyID0gX2NvbnRhaW5lclJlZiRjdXJyZW50LnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9jb250YWluZXJSZWYkY3VycmVudDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jb250YWluZXJSZWYkY3VycmVudDIucmVtb3ZlQ2hpbGQoY29udGFpbmVyUmVmLmN1cnJlbnQpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIGNvbnRhaW5lclJlZi5jdXJyZW50ID8gUmVhY3RET00uY3JlYXRlUG9ydGFsKGNoaWxkcmVuLCBjb250YWluZXJSZWYuY3VycmVudCkgOiBudWxsO1xufSk7XG5leHBvcnQgZGVmYXVsdCBQb3J0YWw7IiwiZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yIHx8IHdpbmRvdy5vcGVyYTtcblxuICBpZiAoLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWlub3xhbmRyb2lkfGlwYWR8cGxheWJvb2t8c2lsay9pLnRlc3QoYWdlbnQpIHx8IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3LShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtLXxjZWxsfGNodG18Y2xkY3xjbWQtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8LWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseSgtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmLTV8Zy1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkLShtfHB8dCl8aGVpLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzLWN8aHQoYygtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aS0oMjB8Z298bWEpfGkyMzB8aWFjKCB8LXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHwtW2Etd10pfGxpYnd8bHlueHxtMS13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bS1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dCgtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSktfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3wtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdC1nfHFhLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8LVsyLTddfGktKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aC18b298cC0pfHNka1xcL3xzZShjKC18MHwxKXw0N3xtY3xuZHxyaSl8c2doLXxzaGFyfHNpZSgtfG0pfHNrLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aC18di18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2wtfHRkZy18dGVsKGl8bSl8dGltLXx0LW1vfHRvKHBsfHNoKXx0cyg3MHxtLXxtM3xtNSl8dHgtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118LXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhcy18eW91cnx6ZXRvfHp0ZS0vaS50ZXN0KGFnZW50ID09PSBudWxsIHx8IGFnZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhZ2VudC5zdWJzdHIoMCwgNCkpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59KTsiLCJ2YXIgcmFmID0gZnVuY3Rpb24gcmFmKGNhbGxiYWNrKSB7XG4gIHJldHVybiArc2V0VGltZW91dChjYWxsYmFjaywgMTYpO1xufTtcblxudmFyIGNhZiA9IGZ1bmN0aW9uIGNhZihudW0pIHtcbiAgcmV0dXJuIGNsZWFyVGltZW91dChudW0pO1xufTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnIGluIHdpbmRvdykge1xuICByYWYgPSBmdW5jdGlvbiByYWYoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gIH07XG5cbiAgY2FmID0gZnVuY3Rpb24gY2FmKGhhbmRsZSkge1xuICAgIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd3JhcHBlclJhZihjYWxsYmFjaykge1xuICByZXR1cm4gcmFmKGNhbGxiYWNrKTtcbn1cbndyYXBwZXJSYWYuY2FuY2VsID0gY2FmOyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCB7IGlzTWVtbyB9IGZyb20gJ3JlYWN0LWlzJztcbmV4cG9ydCBmdW5jdGlvbiBmaWxsUmVmKHJlZiwgbm9kZSkge1xuICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJlZihub2RlKTtcbiAgfSBlbHNlIGlmIChfdHlwZW9mKHJlZikgPT09ICdvYmplY3QnICYmIHJlZiAmJiAnY3VycmVudCcgaW4gcmVmKSB7XG4gICAgcmVmLmN1cnJlbnQgPSBub2RlO1xuICB9XG59XG4vKipcbiAqIE1lcmdlIHJlZnMgaW50byBvbmUgcmVmIGZ1bmN0aW9uIHRvIHN1cHBvcnQgcmVmIHBhc3NpbmcuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VSZWYoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZWZzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHJlZnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICByZWZzLmZvckVhY2goZnVuY3Rpb24gKHJlZikge1xuICAgICAgZmlsbFJlZihyZWYsIG5vZGUpO1xuICAgIH0pO1xuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRSZWYobm9kZU9yQ29tcG9uZW50KSB7XG4gIHZhciBfdHlwZSRwcm90b3R5cGUsIF9ub2RlT3JDb21wb25lbnQkcHJvdDtcblxuICB2YXIgdHlwZSA9IGlzTWVtbyhub2RlT3JDb21wb25lbnQpID8gbm9kZU9yQ29tcG9uZW50LnR5cGUudHlwZSA6IG5vZGVPckNvbXBvbmVudC50eXBlOyAvLyBGdW5jdGlvbiBjb21wb25lbnQgbm9kZVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhKChfdHlwZSRwcm90b3R5cGUgPSB0eXBlLnByb3RvdHlwZSkgPT09IG51bGwgfHwgX3R5cGUkcHJvdG90eXBlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdHlwZSRwcm90b3R5cGUucmVuZGVyKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSAvLyBDbGFzcyBjb21wb25lbnRcblxuXG4gIGlmICh0eXBlb2Ygbm9kZU9yQ29tcG9uZW50ID09PSAnZnVuY3Rpb24nICYmICEoKF9ub2RlT3JDb21wb25lbnQkcHJvdCA9IG5vZGVPckNvbXBvbmVudC5wcm90b3R5cGUpID09PSBudWxsIHx8IF9ub2RlT3JDb21wb25lbnQkcHJvdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25vZGVPckNvbXBvbmVudCRwcm90LnJlbmRlcikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbi8qIGVzbGludC1lbmFibGUgKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG52YXIgd2FybmVkID0ge307XG5leHBvcnQgZnVuY3Rpb24gd2FybmluZyh2YWxpZCwgbWVzc2FnZSkge1xuICAvLyBTdXBwb3J0IHVnbGlmeVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhdmFsaWQgJiYgY29uc29sZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS5lcnJvcihcIldhcm5pbmc6IFwiLmNvbmNhdChtZXNzYWdlKSk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBub3RlKHZhbGlkLCBtZXNzYWdlKSB7XG4gIC8vIFN1cHBvcnQgdWdsaWZ5XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICF2YWxpZCAmJiBjb25zb2xlICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zb2xlLndhcm4oXCJOb3RlOiBcIi5jb25jYXQobWVzc2FnZSkpO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcmVzZXRXYXJuZWQoKSB7XG4gIHdhcm5lZCA9IHt9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNhbGwobWV0aG9kLCB2YWxpZCwgbWVzc2FnZSkge1xuICBpZiAoIXZhbGlkICYmICF3YXJuZWRbbWVzc2FnZV0pIHtcbiAgICBtZXRob2QoZmFsc2UsIG1lc3NhZ2UpO1xuICAgIHdhcm5lZFttZXNzYWdlXSA9IHRydWU7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiB3YXJuaW5nT25jZSh2YWxpZCwgbWVzc2FnZSkge1xuICBjYWxsKHdhcm5pbmcsIHZhbGlkLCBtZXNzYWdlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBub3RlT25jZSh2YWxpZCwgbWVzc2FnZSkge1xuICBjYWxsKG5vdGUsIHZhbGlkLCBtZXNzYWdlKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHdhcm5pbmdPbmNlO1xuLyogZXNsaW50LWVuYWJsZSAqLyIsIi8qKlxyXG4gKiBBIGNvbGxlY3Rpb24gb2Ygc2hpbXMgdGhhdCBwcm92aWRlIG1pbmltYWwgZnVuY3Rpb25hbGl0eSBvZiB0aGUgRVM2IGNvbGxlY3Rpb25zLlxyXG4gKlxyXG4gKiBUaGVzZSBpbXBsZW1lbnRhdGlvbnMgYXJlIG5vdCBtZWFudCB0byBiZSB1c2VkIG91dHNpZGUgb2YgdGhlIFJlc2l6ZU9ic2VydmVyXHJcbiAqIG1vZHVsZXMgYXMgdGhleSBjb3ZlciBvbmx5IGEgbGltaXRlZCByYW5nZSBvZiB1c2UgY2FzZXMuXHJcbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWpzZG9jLCB2YWxpZC1qc2RvYyAqL1xyXG52YXIgTWFwU2hpbSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodHlwZW9mIE1hcCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gTWFwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGluZGV4IGluIHByb3ZpZGVkIGFycmF5IHRoYXQgbWF0Y2hlcyB0aGUgc3BlY2lmaWVkIGtleS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PEFycmF5Pn0gYXJyXHJcbiAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0SW5kZXgoYXJyLCBrZXkpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gLTE7XHJcbiAgICAgICAgYXJyLnNvbWUoZnVuY3Rpb24gKGVudHJ5LCBpbmRleCkge1xyXG4gICAgICAgICAgICBpZiAoZW50cnlbMF0gPT09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHJldHVybiAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gY2xhc3NfMSgpIHtcclxuICAgICAgICAgICAgdGhpcy5fX2VudHJpZXNfXyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMS5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19lbnRyaWVzX18ubGVuZ3RoO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXgodGhpcy5fX2VudHJpZXNfXywga2V5KTtcclxuICAgICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5fX2VudHJpZXNfX1tpbmRleF07XHJcbiAgICAgICAgICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeVsxXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICogQHBhcmFtIHsqfSB2YWx1ZVxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzXzEucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4KHRoaXMuX19lbnRyaWVzX18sIGtleSk7XHJcbiAgICAgICAgICAgIGlmICh+aW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX19baW5kZXhdWzFdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fZW50cmllc19fLnB1c2goW2tleSwgdmFsdWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBlbnRyaWVzID0gdGhpcy5fX2VudHJpZXNfXztcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXgoZW50cmllcywga2V5KTtcclxuICAgICAgICAgICAgaWYgKH5pbmRleCkge1xyXG4gICAgICAgICAgICAgICAgZW50cmllcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICEhfmdldEluZGV4KHRoaXMuX19lbnRyaWVzX18sIGtleSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5fX2VudHJpZXNfXy5zcGxpY2UoMCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW2N0eD1udWxsXVxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGN0eCkge1xyXG4gICAgICAgICAgICBpZiAoY3R4ID09PSB2b2lkIDApIHsgY3R4ID0gbnVsbDsgfVxyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5fX2VudHJpZXNfXzsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IF9hW19pXTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoY3R4LCBlbnRyeVsxXSwgZW50cnlbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gY2xhc3NfMTtcclxuICAgIH0oKSk7XHJcbn0pKCk7XG5cbi8qKlxyXG4gKiBEZXRlY3RzIHdoZXRoZXIgd2luZG93IGFuZCBkb2N1bWVudCBvYmplY3RzIGFyZSBhdmFpbGFibGUgaW4gY3VycmVudCBlbnZpcm9ubWVudC5cclxuICovXHJcbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCA9PT0gZG9jdW1lbnQ7XG5cbi8vIFJldHVybnMgZ2xvYmFsIG9iamVjdCBvZiBhIGN1cnJlbnQgZW52aXJvbm1lbnQuXHJcbnZhciBnbG9iYWwkMSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsLk1hdGggPT09IE1hdGgpIHtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT09IE1hdGgpIHtcclxuICAgICAgICByZXR1cm4gc2VsZjtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PT0gTWF0aCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3c7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcclxuICAgIHJldHVybiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xyXG59KSgpO1xuXG4vKipcclxuICogQSBzaGltIGZvciB0aGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHdoaWNoIGZhbGxzIGJhY2sgdG8gdGhlIHNldFRpbWVvdXQgaWZcclxuICogZmlyc3Qgb25lIGlzIG5vdCBzdXBwb3J0ZWQuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJlcXVlc3RzJyBpZGVudGlmaWVyLlxyXG4gKi9cclxudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSQxID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgLy8gSXQncyByZXF1aXJlZCB0byB1c2UgYSBib3VuZGVkIGZ1bmN0aW9uIGJlY2F1c2UgSUUgc29tZXRpbWVzIHRocm93c1xyXG4gICAgICAgIC8vIGFuIFwiSW52YWxpZCBjYWxsaW5nIG9iamVjdFwiIGVycm9yIGlmIHJBRiBpcyBpbnZva2VkIHdpdGhvdXQgdGhlIGdsb2JhbFxyXG4gICAgICAgIC8vIG9iamVjdCBvbiB0aGUgbGVmdCBoYW5kIHNpZGUuXHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKGdsb2JhbCQxKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoY2FsbGJhY2spIHsgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gY2FsbGJhY2soRGF0ZS5ub3coKSk7IH0sIDEwMDAgLyA2MCk7IH07XHJcbn0pKCk7XG5cbi8vIERlZmluZXMgbWluaW11bSB0aW1lb3V0IGJlZm9yZSBhZGRpbmcgYSB0cmFpbGluZyBjYWxsLlxyXG52YXIgdHJhaWxpbmdUaW1lb3V0ID0gMjtcclxuLyoqXHJcbiAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGVuc3VyZXMgdGhhdCBwcm92aWRlZCBjYWxsYmFjayB3aWxsIGJlXHJcbiAqIGludm9rZWQgb25seSBvbmNlIGR1cmluZyB0aGUgc3BlY2lmaWVkIGRlbGF5IHBlcmlvZC5cclxuICpcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIHRoZSBkZWxheSBwZXJpb2QuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheSAtIERlbGF5IGFmdGVyIHdoaWNoIHRvIGludm9rZSBjYWxsYmFjay5cclxuICogQHJldHVybnMge0Z1bmN0aW9ufVxyXG4gKi9cclxuZnVuY3Rpb24gdGhyb3R0bGUgKGNhbGxiYWNrLCBkZWxheSkge1xyXG4gICAgdmFyIGxlYWRpbmdDYWxsID0gZmFsc2UsIHRyYWlsaW5nQ2FsbCA9IGZhbHNlLCBsYXN0Q2FsbFRpbWUgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2VzIHRoZSBvcmlnaW5hbCBjYWxsYmFjayBmdW5jdGlvbiBhbmQgc2NoZWR1bGVzIG5ldyBpbnZvY2F0aW9uIGlmXHJcbiAgICAgKiB0aGUgXCJwcm94eVwiIHdhcyBjYWxsZWQgZHVyaW5nIGN1cnJlbnQgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVBlbmRpbmcoKSB7XHJcbiAgICAgICAgaWYgKGxlYWRpbmdDYWxsKSB7XHJcbiAgICAgICAgICAgIGxlYWRpbmdDYWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0cmFpbGluZ0NhbGwpIHtcclxuICAgICAgICAgICAgcHJveHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIGludm9rZWQgYWZ0ZXIgdGhlIHNwZWNpZmllZCBkZWxheS4gSXQgd2lsbCBmdXJ0aGVyIHBvc3Rwb25lXHJcbiAgICAgKiBpbnZvY2F0aW9uIG9mIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBkZWxlZ2F0aW5nIGl0IHRvIHRoZVxyXG4gICAgICogcmVxdWVzdEFuaW1hdGlvbkZyYW1lLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiB0aW1lb3V0Q2FsbGJhY2soKSB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lJDEocmVzb2x2ZVBlbmRpbmcpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTY2hlZHVsZXMgaW52b2NhdGlvbiBvZiB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHByb3h5KCkge1xyXG4gICAgICAgIHZhciB0aW1lU3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGlmIChsZWFkaW5nQ2FsbCkge1xyXG4gICAgICAgICAgICAvLyBSZWplY3QgaW1tZWRpYXRlbHkgZm9sbG93aW5nIGNhbGxzLlxyXG4gICAgICAgICAgICBpZiAodGltZVN0YW1wIC0gbGFzdENhbGxUaW1lIDwgdHJhaWxpbmdUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gU2NoZWR1bGUgbmV3IGNhbGwgdG8gYmUgaW4gaW52b2tlZCB3aGVuIHRoZSBwZW5kaW5nIG9uZSBpcyByZXNvbHZlZC5cclxuICAgICAgICAgICAgLy8gVGhpcyBpcyBpbXBvcnRhbnQgZm9yIFwidHJhbnNpdGlvbnNcIiB3aGljaCBuZXZlciBhY3R1YWxseSBzdGFydFxyXG4gICAgICAgICAgICAvLyBpbW1lZGlhdGVseSBzbyB0aGVyZSBpcyBhIGNoYW5jZSB0aGF0IHdlIG1pZ2h0IG1pc3Mgb25lIGlmIGNoYW5nZVxyXG4gICAgICAgICAgICAvLyBoYXBwZW5zIGFtaWRzIHRoZSBwZW5kaW5nIGludm9jYXRpb24uXHJcbiAgICAgICAgICAgIHRyYWlsaW5nQ2FsbCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZWFkaW5nQ2FsbCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRyYWlsaW5nQ2FsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRpbWVvdXRDYWxsYmFjaywgZGVsYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lU3RhbXA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJveHk7XHJcbn1cblxuLy8gTWluaW11bSBkZWxheSBiZWZvcmUgaW52b2tpbmcgdGhlIHVwZGF0ZSBvZiBvYnNlcnZlcnMuXHJcbnZhciBSRUZSRVNIX0RFTEFZID0gMjA7XHJcbi8vIEEgbGlzdCBvZiBzdWJzdHJpbmdzIG9mIENTUyBwcm9wZXJ0aWVzIHVzZWQgdG8gZmluZCB0cmFuc2l0aW9uIGV2ZW50cyB0aGF0XHJcbi8vIG1pZ2h0IGFmZmVjdCBkaW1lbnNpb25zIG9mIG9ic2VydmVkIGVsZW1lbnRzLlxyXG52YXIgdHJhbnNpdGlvbktleXMgPSBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCcsICd3aWR0aCcsICdoZWlnaHQnLCAnc2l6ZScsICd3ZWlnaHQnXTtcclxuLy8gQ2hlY2sgaWYgTXV0YXRpb25PYnNlcnZlciBpcyBhdmFpbGFibGUuXHJcbnZhciBtdXRhdGlvbk9ic2VydmVyU3VwcG9ydGVkID0gdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xyXG4vKipcclxuICogU2luZ2xldG9uIGNvbnRyb2xsZXIgY2xhc3Mgd2hpY2ggaGFuZGxlcyB1cGRhdGVzIG9mIFJlc2l6ZU9ic2VydmVyIGluc3RhbmNlcy5cclxuICovXHJcbnZhciBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlcigpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciBET00gbGlzdGVuZXJzIGhhdmUgYmVlbiBhZGRlZC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkXyA9IGZhbHNlO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRlbGxzIHRoYXQgY29udHJvbGxlciBoYXMgc3Vic2NyaWJlZCBmb3IgTXV0YXRpb24gRXZlbnRzLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGUge2Jvb2xlYW59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXyA9IGZhbHNlO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEtlZXBzIHJlZmVyZW5jZSB0byB0aGUgaW5zdGFuY2Ugb2YgTXV0YXRpb25PYnNlcnZlci5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtNdXRhdGlvbk9ic2VydmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfID0gbnVsbDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBIGxpc3Qgb2YgY29ubmVjdGVkIG9ic2VydmVycy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtBcnJheTxSZXNpemVPYnNlcnZlclNQST59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnNfID0gW107XHJcbiAgICAgICAgdGhpcy5vblRyYW5zaXRpb25FbmRfID0gdGhpcy5vblRyYW5zaXRpb25FbmRfLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoID0gdGhyb3R0bGUodGhpcy5yZWZyZXNoLmJpbmQodGhpcyksIFJFRlJFU0hfREVMQVkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIG9ic2VydmVyIHRvIG9ic2VydmVycyBsaXN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJTUEl9IG9ic2VydmVyIC0gT2JzZXJ2ZXIgdG8gYmUgYWRkZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5hZGRPYnNlcnZlciA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgIGlmICghfnRoaXMub2JzZXJ2ZXJzXy5pbmRleE9mKG9ic2VydmVyKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyc18ucHVzaChvYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZCBsaXN0ZW5lcnMgaWYgdGhleSBoYXZlbid0IGJlZW4gYWRkZWQgeWV0LlxyXG4gICAgICAgIGlmICghdGhpcy5jb25uZWN0ZWRfKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdF8oKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIG9ic2VydmVyIGZyb20gb2JzZXJ2ZXJzIGxpc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlclNQSX0gb2JzZXJ2ZXIgLSBPYnNlcnZlciB0byBiZSByZW1vdmVkLlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUucmVtb3ZlT2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gdGhpcy5vYnNlcnZlcnNfO1xyXG4gICAgICAgIHZhciBpbmRleCA9IG9ic2VydmVycy5pbmRleE9mKG9ic2VydmVyKTtcclxuICAgICAgICAvLyBSZW1vdmUgb2JzZXJ2ZXIgaWYgaXQncyBwcmVzZW50IGluIHJlZ2lzdHJ5LlxyXG4gICAgICAgIGlmICh+aW5kZXgpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbW92ZSBsaXN0ZW5lcnMgaWYgY29udHJvbGxlciBoYXMgbm8gY29ubmVjdGVkIG9ic2VydmVycy5cclxuICAgICAgICBpZiAoIW9ic2VydmVycy5sZW5ndGggJiYgdGhpcy5jb25uZWN0ZWRfKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdF8oKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2VzIHRoZSB1cGRhdGUgb2Ygb2JzZXJ2ZXJzLiBJdCB3aWxsIGNvbnRpbnVlIHJ1bm5pbmcgdXBkYXRlcyBpbnNvZmFyXHJcbiAgICAgKiBpdCBkZXRlY3RzIGNoYW5nZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY2hhbmdlc0RldGVjdGVkID0gdGhpcy51cGRhdGVPYnNlcnZlcnNfKCk7XHJcbiAgICAgICAgLy8gQ29udGludWUgcnVubmluZyB1cGRhdGVzIGlmIGNoYW5nZXMgaGF2ZSBiZWVuIGRldGVjdGVkIGFzIHRoZXJlIG1pZ2h0XHJcbiAgICAgICAgLy8gYmUgZnV0dXJlIG9uZXMgY2F1c2VkIGJ5IENTUyB0cmFuc2l0aW9ucy5cclxuICAgICAgICBpZiAoY2hhbmdlc0RldGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgZXZlcnkgb2JzZXJ2ZXIgZnJvbSBvYnNlcnZlcnMgbGlzdCBhbmQgbm90aWZpZXMgdGhlbSBvZiBxdWV1ZWRcclxuICAgICAqIGVudHJpZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIFwidHJ1ZVwiIGlmIGFueSBvYnNlcnZlciBoYXMgZGV0ZWN0ZWQgY2hhbmdlcyBpblxyXG4gICAgICogICAgICBkaW1lbnNpb25zIG9mIGl0J3MgZWxlbWVudHMuXHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUudXBkYXRlT2JzZXJ2ZXJzXyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBDb2xsZWN0IG9ic2VydmVycyB0aGF0IGhhdmUgYWN0aXZlIG9ic2VydmF0aW9ucy5cclxuICAgICAgICB2YXIgYWN0aXZlT2JzZXJ2ZXJzID0gdGhpcy5vYnNlcnZlcnNfLmZpbHRlcihmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVyLmdhdGhlckFjdGl2ZSgpLCBvYnNlcnZlci5oYXNBY3RpdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBEZWxpdmVyIG5vdGlmaWNhdGlvbnMgaW4gYSBzZXBhcmF0ZSBjeWNsZSBpbiBvcmRlciB0byBhdm9pZCBhbnlcclxuICAgICAgICAvLyBjb2xsaXNpb25zIGJldHdlZW4gb2JzZXJ2ZXJzLCBlLmcuIHdoZW4gbXVsdGlwbGUgaW5zdGFuY2VzIG9mXHJcbiAgICAgICAgLy8gUmVzaXplT2JzZXJ2ZXIgYXJlIHRyYWNraW5nIHRoZSBzYW1lIGVsZW1lbnQgYW5kIHRoZSBjYWxsYmFjayBvZiBvbmVcclxuICAgICAgICAvLyBvZiB0aGVtIGNoYW5nZXMgY29udGVudCBkaW1lbnNpb25zIG9mIHRoZSBvYnNlcnZlZCB0YXJnZXQuIFNvbWV0aW1lc1xyXG4gICAgICAgIC8vIHRoaXMgbWF5IHJlc3VsdCBpbiBub3RpZmljYXRpb25zIGJlaW5nIGJsb2NrZWQgZm9yIHRoZSByZXN0IG9mIG9ic2VydmVycy5cclxuICAgICAgICBhY3RpdmVPYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2ZXIpIHsgcmV0dXJuIG9ic2VydmVyLmJyb2FkY2FzdEFjdGl2ZSgpOyB9KTtcclxuICAgICAgICByZXR1cm4gYWN0aXZlT2JzZXJ2ZXJzLmxlbmd0aCA+IDA7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyBET00gbGlzdGVuZXJzLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5jb25uZWN0XyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIHJ1bm5pbmcgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudCBvciBpZiBsaXN0ZW5lcnNcclxuICAgICAgICAvLyBoYXZlIGJlZW4gYWxyZWFkeSBhZGRlZC5cclxuICAgICAgICBpZiAoIWlzQnJvd3NlciB8fCB0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTdWJzY3JpcHRpb24gdG8gdGhlIFwiVHJhbnNpdGlvbmVuZFwiIGV2ZW50IGlzIHVzZWQgYXMgYSB3b3JrYXJvdW5kIGZvclxyXG4gICAgICAgIC8vIGRlbGF5ZWQgdHJhbnNpdGlvbnMuIFRoaXMgd2F5IGl0J3MgcG9zc2libGUgdG8gY2FwdHVyZSBhdCBsZWFzdCB0aGVcclxuICAgICAgICAvLyBmaW5hbCBzdGF0ZSBvZiBhbiBlbGVtZW50LlxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLm9uVHJhbnNpdGlvbkVuZF8pO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgIGlmIChtdXRhdGlvbk9ic2VydmVyU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5yZWZyZXNoKTtcclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8ub2JzZXJ2ZShkb2N1bWVudCwge1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NU3VidHJlZU1vZGlmaWVkJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkXyA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIERPTSBsaXN0ZW5lcnMuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLmRpc2Nvbm5lY3RfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgcnVubmluZyBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50IG9yIGlmIGxpc3RlbmVyc1xyXG4gICAgICAgIC8vIGhhdmUgYmVlbiBhbHJlYWR5IHJlbW92ZWQuXHJcbiAgICAgICAgaWYgKCFpc0Jyb3dzZXIgfHwgIXRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLm9uVHJhbnNpdGlvbkVuZF8pO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgIGlmICh0aGlzLm11dGF0aW9uc09ic2VydmVyXykge1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXy5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm11dGF0aW9uRXZlbnRzQWRkZWRfKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTVN1YnRyZWVNb2RpZmllZCcsIHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfID0gbnVsbDtcclxuICAgICAgICB0aGlzLm11dGF0aW9uRXZlbnRzQWRkZWRfID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRfID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBcIlRyYW5zaXRpb25lbmRcIiBldmVudCBoYW5kbGVyLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcGFyYW0ge1RyYW5zaXRpb25FdmVudH0gZXZlbnRcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLm9uVHJhbnNpdGlvbkVuZF8gPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgX2IgPSBfYS5wcm9wZXJ0eU5hbWUsIHByb3BlcnR5TmFtZSA9IF9iID09PSB2b2lkIDAgPyAnJyA6IF9iO1xyXG4gICAgICAgIC8vIERldGVjdCB3aGV0aGVyIHRyYW5zaXRpb24gbWF5IGFmZmVjdCBkaW1lbnNpb25zIG9mIGFuIGVsZW1lbnQuXHJcbiAgICAgICAgdmFyIGlzUmVmbG93UHJvcGVydHkgPSB0cmFuc2l0aW9uS2V5cy5zb21lKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICEhfnByb3BlcnR5TmFtZS5pbmRleE9mKGtleSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGlzUmVmbG93UHJvcGVydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBpbnN0YW5jZSBvZiB0aGUgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtSZXNpemVPYnNlcnZlckNvbnRyb2xsZXJ9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2VfKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VfID0gbmV3IFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZV87XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBIb2xkcyByZWZlcmVuY2UgdG8gdGhlIGNvbnRyb2xsZXIncyBpbnN0YW5jZS5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZSB7UmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuaW5zdGFuY2VfID0gbnVsbDtcclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXI7XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBEZWZpbmVzIG5vbi13cml0YWJsZS9lbnVtZXJhYmxlIHByb3BlcnRpZXMgb2YgdGhlIHByb3ZpZGVkIHRhcmdldCBvYmplY3QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgLSBPYmplY3QgZm9yIHdoaWNoIHRvIGRlZmluZSBwcm9wZXJ0aWVzLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBQcm9wZXJ0aWVzIHRvIGJlIGRlZmluZWQuXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRhcmdldCBvYmplY3QuXHJcbiAqL1xyXG52YXIgZGVmaW5lQ29uZmlndXJhYmxlID0gKGZ1bmN0aW9uICh0YXJnZXQsIHByb3BzKSB7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMocHJvcHMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBrZXkgPSBfYVtfaV07XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBwcm9wc1trZXldLFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn0pO1xuXG4vKipcclxuICogUmV0dXJucyB0aGUgZ2xvYmFsIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggcHJvdmlkZWQgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4gKi9cclxudmFyIGdldFdpbmRvd09mID0gKGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgIC8vIEFzc3VtZSB0aGF0IHRoZSBlbGVtZW50IGlzIGFuIGluc3RhbmNlIG9mIE5vZGUsIHdoaWNoIG1lYW5zIHRoYXQgaXRcclxuICAgIC8vIGhhcyB0aGUgXCJvd25lckRvY3VtZW50XCIgcHJvcGVydHkgZnJvbSB3aGljaCB3ZSBjYW4gcmV0cmlldmUgYVxyXG4gICAgLy8gY29ycmVzcG9uZGluZyBnbG9iYWwgb2JqZWN0LlxyXG4gICAgdmFyIG93bmVyR2xvYmFsID0gdGFyZ2V0ICYmIHRhcmdldC5vd25lckRvY3VtZW50ICYmIHRhcmdldC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xyXG4gICAgLy8gUmV0dXJuIHRoZSBsb2NhbCBnbG9iYWwgb2JqZWN0IGlmIGl0J3Mgbm90IHBvc3NpYmxlIGV4dHJhY3Qgb25lIGZyb21cclxuICAgIC8vIHByb3ZpZGVkIGVsZW1lbnQuXHJcbiAgICByZXR1cm4gb3duZXJHbG9iYWwgfHwgZ2xvYmFsJDE7XHJcbn0pO1xuXG4vLyBQbGFjZWhvbGRlciBvZiBhbiBlbXB0eSBjb250ZW50IHJlY3RhbmdsZS5cclxudmFyIGVtcHR5UmVjdCA9IGNyZWF0ZVJlY3RJbml0KDAsIDAsIDAsIDApO1xyXG4vKipcclxuICogQ29udmVydHMgcHJvdmlkZWQgc3RyaW5nIHRvIGEgbnVtYmVyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHZhbHVlXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5mdW5jdGlvbiB0b0Zsb2F0KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSkgfHwgMDtcclxufVxyXG4vKipcclxuICogRXh0cmFjdHMgYm9yZGVycyBzaXplIGZyb20gcHJvdmlkZWQgc3R5bGVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0NTU1N0eWxlRGVjbGFyYXRpb259IHN0eWxlc1xyXG4gKiBAcGFyYW0gey4uLnN0cmluZ30gcG9zaXRpb25zIC0gQm9yZGVycyBwb3NpdGlvbnMgKHRvcCwgcmlnaHQsIC4uLilcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbmZ1bmN0aW9uIGdldEJvcmRlcnNTaXplKHN0eWxlcykge1xyXG4gICAgdmFyIHBvc2l0aW9ucyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBwb3NpdGlvbnNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcG9zaXRpb25zLnJlZHVjZShmdW5jdGlvbiAoc2l6ZSwgcG9zaXRpb24pIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSBzdHlsZXNbJ2JvcmRlci0nICsgcG9zaXRpb24gKyAnLXdpZHRoJ107XHJcbiAgICAgICAgcmV0dXJuIHNpemUgKyB0b0Zsb2F0KHZhbHVlKTtcclxuICAgIH0sIDApO1xyXG59XHJcbi8qKlxyXG4gKiBFeHRyYWN0cyBwYWRkaW5ncyBzaXplcyBmcm9tIHByb3ZpZGVkIHN0eWxlcy5cclxuICpcclxuICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZXNcclxuICogQHJldHVybnMge09iamVjdH0gUGFkZGluZ3MgYm94LlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UGFkZGluZ3Moc3R5bGVzKSB7XHJcbiAgICB2YXIgcG9zaXRpb25zID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXTtcclxuICAgIHZhciBwYWRkaW5ncyA9IHt9O1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBwb3NpdGlvbnNfMSA9IHBvc2l0aW9uczsgX2kgPCBwb3NpdGlvbnNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgcG9zaXRpb24gPSBwb3NpdGlvbnNfMVtfaV07XHJcbiAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVzWydwYWRkaW5nLScgKyBwb3NpdGlvbl07XHJcbiAgICAgICAgcGFkZGluZ3NbcG9zaXRpb25dID0gdG9GbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFkZGluZ3M7XHJcbn1cclxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgY29udGVudCByZWN0YW5nbGUgb2YgcHJvdmlkZWQgU1ZHIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U1ZHR3JhcGhpY3NFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHdoaWNoIG5lZWRzXHJcbiAqICAgICAgdG8gYmUgY2FsY3VsYXRlZC5cclxuICogQHJldHVybnMge0RPTVJlY3RJbml0fVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U1ZHQ29udGVudFJlY3QodGFyZ2V0KSB7XHJcbiAgICB2YXIgYmJveCA9IHRhcmdldC5nZXRCQm94KCk7XHJcbiAgICByZXR1cm4gY3JlYXRlUmVjdEluaXQoMCwgMCwgYmJveC53aWR0aCwgYmJveC5oZWlnaHQpO1xyXG59XHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHByb3ZpZGVkIEhUTUxFbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IGZvciB3aGljaCB0byBjYWxjdWxhdGUgdGhlIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRIVE1MRWxlbWVudENvbnRlbnRSZWN0KHRhcmdldCkge1xyXG4gICAgLy8gQ2xpZW50IHdpZHRoICYgaGVpZ2h0IHByb3BlcnRpZXMgY2FuJ3QgYmVcclxuICAgIC8vIHVzZWQgZXhjbHVzaXZlbHkgYXMgdGhleSBwcm92aWRlIHJvdW5kZWQgdmFsdWVzLlxyXG4gICAgdmFyIGNsaWVudFdpZHRoID0gdGFyZ2V0LmNsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQgPSB0YXJnZXQuY2xpZW50SGVpZ2h0O1xyXG4gICAgLy8gQnkgdGhpcyBjb25kaXRpb24gd2UgY2FuIGNhdGNoIGFsbCBub24tcmVwbGFjZWQgaW5saW5lLCBoaWRkZW4gYW5kXHJcbiAgICAvLyBkZXRhY2hlZCBlbGVtZW50cy4gVGhvdWdoIGVsZW1lbnRzIHdpdGggd2lkdGggJiBoZWlnaHQgcHJvcGVydGllcyBsZXNzXHJcbiAgICAvLyB0aGFuIDAuNSB3aWxsIGJlIGRpc2NhcmRlZCBhcyB3ZWxsLlxyXG4gICAgLy9cclxuICAgIC8vIFdpdGhvdXQgaXQgd2Ugd291bGQgbmVlZCB0byBpbXBsZW1lbnQgc2VwYXJhdGUgbWV0aG9kcyBmb3IgZWFjaCBvZlxyXG4gICAgLy8gdGhvc2UgY2FzZXMgYW5kIGl0J3Mgbm90IHBvc3NpYmxlIHRvIHBlcmZvcm0gYSBwcmVjaXNlIGFuZCBwZXJmb3JtYW5jZVxyXG4gICAgLy8gZWZmZWN0aXZlIHRlc3QgZm9yIGhpZGRlbiBlbGVtZW50cy4gRS5nLiBldmVuIGpRdWVyeSdzICc6dmlzaWJsZScgZmlsdGVyXHJcbiAgICAvLyBnaXZlcyB3cm9uZyByZXN1bHRzIGZvciBlbGVtZW50cyB3aXRoIHdpZHRoICYgaGVpZ2h0IGxlc3MgdGhhbiAwLjUuXHJcbiAgICBpZiAoIWNsaWVudFdpZHRoICYmICFjbGllbnRIZWlnaHQpIHtcclxuICAgICAgICByZXR1cm4gZW1wdHlSZWN0O1xyXG4gICAgfVxyXG4gICAgdmFyIHN0eWxlcyA9IGdldFdpbmRvd09mKHRhcmdldCkuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpO1xyXG4gICAgdmFyIHBhZGRpbmdzID0gZ2V0UGFkZGluZ3Moc3R5bGVzKTtcclxuICAgIHZhciBob3JpelBhZCA9IHBhZGRpbmdzLmxlZnQgKyBwYWRkaW5ncy5yaWdodDtcclxuICAgIHZhciB2ZXJ0UGFkID0gcGFkZGluZ3MudG9wICsgcGFkZGluZ3MuYm90dG9tO1xyXG4gICAgLy8gQ29tcHV0ZWQgc3R5bGVzIG9mIHdpZHRoICYgaGVpZ2h0IGFyZSBiZWluZyB1c2VkIGJlY2F1c2UgdGhleSBhcmUgdGhlXHJcbiAgICAvLyBvbmx5IGRpbWVuc2lvbnMgYXZhaWxhYmxlIHRvIEpTIHRoYXQgY29udGFpbiBub24tcm91bmRlZCB2YWx1ZXMuIEl0IGNvdWxkXHJcbiAgICAvLyBiZSBwb3NzaWJsZSB0byB1dGlsaXplIHRoZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgaWYgb25seSBpdCdzIGRhdGEgd2Fzbid0XHJcbiAgICAvLyBhZmZlY3RlZCBieSBDU1MgdHJhbnNmb3JtYXRpb25zIGxldCBhbG9uZSBwYWRkaW5ncywgYm9yZGVycyBhbmQgc2Nyb2xsIGJhcnMuXHJcbiAgICB2YXIgd2lkdGggPSB0b0Zsb2F0KHN0eWxlcy53aWR0aCksIGhlaWdodCA9IHRvRmxvYXQoc3R5bGVzLmhlaWdodCk7XHJcbiAgICAvLyBXaWR0aCAmIGhlaWdodCBpbmNsdWRlIHBhZGRpbmdzIGFuZCBib3JkZXJzIHdoZW4gdGhlICdib3JkZXItYm94JyBib3hcclxuICAgIC8vIG1vZGVsIGlzIGFwcGxpZWQgKGV4Y2VwdCBmb3IgSUUpLlxyXG4gICAgaWYgKHN0eWxlcy5ib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xyXG4gICAgICAgIC8vIEZvbGxvd2luZyBjb25kaXRpb25zIGFyZSByZXF1aXJlZCB0byBoYW5kbGUgSW50ZXJuZXQgRXhwbG9yZXIgd2hpY2hcclxuICAgICAgICAvLyBkb2Vzbid0IGluY2x1ZGUgcGFkZGluZ3MgYW5kIGJvcmRlcnMgdG8gY29tcHV0ZWQgQ1NTIGRpbWVuc2lvbnMuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBXZSBjYW4gc2F5IHRoYXQgaWYgQ1NTIGRpbWVuc2lvbnMgKyBwYWRkaW5ncyBhcmUgZXF1YWwgdG8gdGhlIFwiY2xpZW50XCJcclxuICAgICAgICAvLyBwcm9wZXJ0aWVzIHRoZW4gaXQncyBlaXRoZXIgSUUsIGFuZCB0aHVzIHdlIGRvbid0IG5lZWQgdG8gc3VidHJhY3RcclxuICAgICAgICAvLyBhbnl0aGluZywgb3IgYW4gZWxlbWVudCBtZXJlbHkgZG9lc24ndCBoYXZlIHBhZGRpbmdzL2JvcmRlcnMgc3R5bGVzLlxyXG4gICAgICAgIGlmIChNYXRoLnJvdW5kKHdpZHRoICsgaG9yaXpQYWQpICE9PSBjbGllbnRXaWR0aCkge1xyXG4gICAgICAgICAgICB3aWR0aCAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICdsZWZ0JywgJ3JpZ2h0JykgKyBob3JpelBhZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE1hdGgucm91bmQoaGVpZ2h0ICsgdmVydFBhZCkgIT09IGNsaWVudEhlaWdodCkge1xyXG4gICAgICAgICAgICBoZWlnaHQgLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAndG9wJywgJ2JvdHRvbScpICsgdmVydFBhZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBGb2xsb3dpbmcgc3RlcHMgY2FuJ3QgYmUgYXBwbGllZCB0byB0aGUgZG9jdW1lbnQncyByb290IGVsZW1lbnQgYXMgaXRzXHJcbiAgICAvLyBjbGllbnRbV2lkdGgvSGVpZ2h0XSBwcm9wZXJ0aWVzIHJlcHJlc2VudCB2aWV3cG9ydCBhcmVhIG9mIHRoZSB3aW5kb3cuXHJcbiAgICAvLyBCZXNpZGVzLCBpdCdzIGFzIHdlbGwgbm90IG5lY2Vzc2FyeSBhcyB0aGUgPGh0bWw+IGl0c2VsZiBuZWl0aGVyIGhhc1xyXG4gICAgLy8gcmVuZGVyZWQgc2Nyb2xsIGJhcnMgbm9yIGl0IGNhbiBiZSBjbGlwcGVkLlxyXG4gICAgaWYgKCFpc0RvY3VtZW50RWxlbWVudCh0YXJnZXQpKSB7XHJcbiAgICAgICAgLy8gSW4gc29tZSBicm93c2VycyAob25seSBpbiBGaXJlZm94LCBhY3R1YWxseSkgQ1NTIHdpZHRoICYgaGVpZ2h0XHJcbiAgICAgICAgLy8gaW5jbHVkZSBzY3JvbGwgYmFycyBzaXplIHdoaWNoIGNhbiBiZSByZW1vdmVkIGF0IHRoaXMgc3RlcCBhcyBzY3JvbGxcclxuICAgICAgICAvLyBiYXJzIGFyZSB0aGUgb25seSBkaWZmZXJlbmNlIGJldHdlZW4gcm91bmRlZCBkaW1lbnNpb25zICsgcGFkZGluZ3NcclxuICAgICAgICAvLyBhbmQgXCJjbGllbnRcIiBwcm9wZXJ0aWVzLCB0aG91Z2ggdGhhdCBpcyBub3QgYWx3YXlzIHRydWUgaW4gQ2hyb21lLlxyXG4gICAgICAgIHZhciB2ZXJ0U2Nyb2xsYmFyID0gTWF0aC5yb3VuZCh3aWR0aCArIGhvcml6UGFkKSAtIGNsaWVudFdpZHRoO1xyXG4gICAgICAgIHZhciBob3JpelNjcm9sbGJhciA9IE1hdGgucm91bmQoaGVpZ2h0ICsgdmVydFBhZCkgLSBjbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgLy8gQ2hyb21lIGhhcyBhIHJhdGhlciB3ZWlyZCByb3VuZGluZyBvZiBcImNsaWVudFwiIHByb3BlcnRpZXMuXHJcbiAgICAgICAgLy8gRS5nLiBmb3IgYW4gZWxlbWVudCB3aXRoIGNvbnRlbnQgd2lkdGggb2YgMzE0LjJweCBpdCBzb21ldGltZXMgZ2l2ZXNcclxuICAgICAgICAvLyB0aGUgY2xpZW50IHdpZHRoIG9mIDMxNXB4IGFuZCBmb3IgdGhlIHdpZHRoIG9mIDMxNC43cHggaXQgbWF5IGdpdmVcclxuICAgICAgICAvLyAzMTRweC4gQW5kIGl0IGRvZXNuJ3QgaGFwcGVuIGFsbCB0aGUgdGltZS4gU28ganVzdCBpZ25vcmUgdGhpcyBkZWx0YVxyXG4gICAgICAgIC8vIGFzIGEgbm9uLXJlbGV2YW50LlxyXG4gICAgICAgIGlmIChNYXRoLmFicyh2ZXJ0U2Nyb2xsYmFyKSAhPT0gMSkge1xyXG4gICAgICAgICAgICB3aWR0aCAtPSB2ZXJ0U2Nyb2xsYmFyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoTWF0aC5hYnMoaG9yaXpTY3JvbGxiYXIpICE9PSAxKSB7XHJcbiAgICAgICAgICAgIGhlaWdodCAtPSBob3JpelNjcm9sbGJhcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3JlYXRlUmVjdEluaXQocGFkZGluZ3MubGVmdCwgcGFkZGluZ3MudG9wLCB3aWR0aCwgaGVpZ2h0KTtcclxufVxyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgcHJvdmlkZWQgZWxlbWVudCBpcyBhbiBpbnN0YW5jZSBvZiB0aGUgU1ZHR3JhcGhpY3NFbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gYmUgY2hlY2tlZC5cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG52YXIgaXNTVkdHcmFwaGljc0VsZW1lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gU29tZSBicm93c2VycywgbmFtZWx5IElFIGFuZCBFZGdlLCBkb24ndCBoYXZlIHRoZSBTVkdHcmFwaGljc0VsZW1lbnRcclxuICAgIC8vIGludGVyZmFjZS5cclxuICAgIGlmICh0eXBlb2YgU1ZHR3JhcGhpY3NFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLlNWR0dyYXBoaWNzRWxlbWVudDsgfTtcclxuICAgIH1cclxuICAgIC8vIElmIGl0J3Mgc28sIHRoZW4gY2hlY2sgdGhhdCBlbGVtZW50IGlzIGF0IGxlYXN0IGFuIGluc3RhbmNlIG9mIHRoZVxyXG4gICAgLy8gU1ZHRWxlbWVudCBhbmQgdGhhdCBpdCBoYXMgdGhlIFwiZ2V0QkJveFwiIG1ldGhvZC5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRyYS1wYXJlbnNcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiAodGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93T2YodGFyZ2V0KS5TVkdFbGVtZW50ICYmXHJcbiAgICAgICAgdHlwZW9mIHRhcmdldC5nZXRCQm94ID09PSAnZnVuY3Rpb24nKTsgfTtcclxufSkoKTtcclxuLyoqXHJcbiAqIENoZWNrcyB3aGV0aGVyIHByb3ZpZGVkIGVsZW1lbnQgaXMgYSBkb2N1bWVudCBlbGVtZW50ICg8aHRtbD4pLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gYmUgY2hlY2tlZC5cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0RvY3VtZW50RWxlbWVudCh0YXJnZXQpIHtcclxuICAgIHJldHVybiB0YXJnZXQgPT09IGdldFdpbmRvd09mKHRhcmdldCkuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG59XHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIGFuIGFwcHJvcHJpYXRlIGNvbnRlbnQgcmVjdGFuZ2xlIGZvciBwcm92aWRlZCBodG1sIG9yIHN2ZyBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgY29udGVudCByZWN0YW5nbGUgb2Ygd2hpY2ggbmVlZHMgdG8gYmUgY2FsY3VsYXRlZC5cclxuICogQHJldHVybnMge0RPTVJlY3RJbml0fVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Q29udGVudFJlY3QodGFyZ2V0KSB7XHJcbiAgICBpZiAoIWlzQnJvd3Nlcikge1xyXG4gICAgICAgIHJldHVybiBlbXB0eVJlY3Q7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNTVkdHcmFwaGljc0VsZW1lbnQodGFyZ2V0KSkge1xyXG4gICAgICAgIHJldHVybiBnZXRTVkdDb250ZW50UmVjdCh0YXJnZXQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdldEhUTUxFbGVtZW50Q29udGVudFJlY3QodGFyZ2V0KTtcclxufVxyXG4vKipcclxuICogQ3JlYXRlcyByZWN0YW5nbGUgd2l0aCBhbiBpbnRlcmZhY2Ugb2YgdGhlIERPTVJlY3RSZWFkT25seS5cclxuICogU3BlYzogaHR0cHM6Ly9kcmFmdHMuZnh0Zi5vcmcvZ2VvbWV0cnkvI2RvbXJlY3RyZWFkb25seVxyXG4gKlxyXG4gKiBAcGFyYW0ge0RPTVJlY3RJbml0fSByZWN0SW5pdCAtIE9iamVjdCB3aXRoIHJlY3RhbmdsZSdzIHgveSBjb29yZGluYXRlcyBhbmQgZGltZW5zaW9ucy5cclxuICogQHJldHVybnMge0RPTVJlY3RSZWFkT25seX1cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlYWRPbmx5UmVjdChfYSkge1xyXG4gICAgdmFyIHggPSBfYS54LCB5ID0gX2EueSwgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xyXG4gICAgLy8gSWYgRE9NUmVjdFJlYWRPbmx5IGlzIGF2YWlsYWJsZSB1c2UgaXQgYXMgYSBwcm90b3R5cGUgZm9yIHRoZSByZWN0YW5nbGUuXHJcbiAgICB2YXIgQ29uc3RyID0gdHlwZW9mIERPTVJlY3RSZWFkT25seSAhPT0gJ3VuZGVmaW5lZCcgPyBET01SZWN0UmVhZE9ubHkgOiBPYmplY3Q7XHJcbiAgICB2YXIgcmVjdCA9IE9iamVjdC5jcmVhdGUoQ29uc3RyLnByb3RvdHlwZSk7XHJcbiAgICAvLyBSZWN0YW5nbGUncyBwcm9wZXJ0aWVzIGFyZSBub3Qgd3JpdGFibGUgYW5kIG5vbi1lbnVtZXJhYmxlLlxyXG4gICAgZGVmaW5lQ29uZmlndXJhYmxlKHJlY3QsIHtcclxuICAgICAgICB4OiB4LCB5OiB5LCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICAgIHRvcDogeSxcclxuICAgICAgICByaWdodDogeCArIHdpZHRoLFxyXG4gICAgICAgIGJvdHRvbTogaGVpZ2h0ICsgeSxcclxuICAgICAgICBsZWZ0OiB4XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZWN0O1xyXG59XHJcbi8qKlxyXG4gKiBDcmVhdGVzIERPTVJlY3RJbml0IG9iamVjdCBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgZGltZW5zaW9ucyBhbmQgdGhlIHgveSBjb29yZGluYXRlcy5cclxuICogU3BlYzogaHR0cHM6Ly9kcmFmdHMuZnh0Zi5vcmcvZ2VvbWV0cnkvI2RpY3RkZWYtZG9tcmVjdGluaXRcclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IHggLSBYIGNvb3JkaW5hdGUuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gWSBjb29yZGluYXRlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGggLSBSZWN0YW5nbGUncyB3aWR0aC5cclxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAtIFJlY3RhbmdsZSdzIGhlaWdodC5cclxuICogQHJldHVybnMge0RPTVJlY3RJbml0fVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlUmVjdEluaXQoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgcmV0dXJuIHsgeDogeCwgeTogeSwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xyXG59XG5cbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciBjb21wdXRhdGlvbnMgb2YgdGhlIGNvbnRlbnQgcmVjdGFuZ2xlIG9mXHJcbiAqIHByb3ZpZGVkIERPTSBlbGVtZW50IGFuZCBmb3Iga2VlcGluZyB0cmFjayBvZiBpdCdzIGNoYW5nZXMuXHJcbiAqL1xyXG52YXIgUmVzaXplT2JzZXJ2YXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgUmVzaXplT2JzZXJ2YXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIG9ic2VydmVkLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZhdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBCcm9hZGNhc3RlZCB3aWR0aCBvZiBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RXaWR0aCA9IDA7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQnJvYWRjYXN0ZWQgaGVpZ2h0IG9mIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmJyb2FkY2FzdEhlaWdodCA9IDA7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVmZXJlbmNlIHRvIHRoZSBsYXN0IG9ic2VydmVkIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGUge0RPTVJlY3RJbml0fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY29udGVudFJlY3RfID0gY3JlYXRlUmVjdEluaXQoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgY29udGVudCByZWN0YW5nbGUgYW5kIHRlbGxzIHdoZXRoZXIgaXQncyB3aWR0aCBvciBoZWlnaHQgcHJvcGVydGllc1xyXG4gICAgICogaGF2ZSBjaGFuZ2VkIHNpbmNlIHRoZSBsYXN0IGJyb2FkY2FzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2YXRpb24ucHJvdG90eXBlLmlzQWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZWN0ID0gZ2V0Q29udGVudFJlY3QodGhpcy50YXJnZXQpO1xyXG4gICAgICAgIHRoaXMuY29udGVudFJlY3RfID0gcmVjdDtcclxuICAgICAgICByZXR1cm4gKHJlY3Qud2lkdGggIT09IHRoaXMuYnJvYWRjYXN0V2lkdGggfHxcclxuICAgICAgICAgICAgcmVjdC5oZWlnaHQgIT09IHRoaXMuYnJvYWRjYXN0SGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgJ2Jyb2FkY2FzdFdpZHRoJyBhbmQgJ2Jyb2FkY2FzdEhlaWdodCcgcHJvcGVydGllcyB3aXRoIGEgZGF0YVxyXG4gICAgICogZnJvbSB0aGUgY29ycmVzcG9uZGluZyBwcm9wZXJ0aWVzIG9mIHRoZSBsYXN0IG9ic2VydmVkIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtET01SZWN0SW5pdH0gTGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2YXRpb24ucHJvdG90eXBlLmJyb2FkY2FzdFJlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJlY3QgPSB0aGlzLmNvbnRlbnRSZWN0XztcclxuICAgICAgICB0aGlzLmJyb2FkY2FzdFdpZHRoID0gcmVjdC53aWR0aDtcclxuICAgICAgICB0aGlzLmJyb2FkY2FzdEhlaWdodCA9IHJlY3QuaGVpZ2h0O1xyXG4gICAgICAgIHJldHVybiByZWN0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZhdGlvbjtcclxufSgpKTtcblxudmFyIFJlc2l6ZU9ic2VydmVyRW50cnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgUmVzaXplT2JzZXJ2ZXJFbnRyeS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdGhhdCBpcyBiZWluZyBvYnNlcnZlZC5cclxuICAgICAqIEBwYXJhbSB7RE9NUmVjdEluaXR9IHJlY3RJbml0IC0gRGF0YSBvZiB0aGUgZWxlbWVudCdzIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckVudHJ5KHRhcmdldCwgcmVjdEluaXQpIHtcclxuICAgICAgICB2YXIgY29udGVudFJlY3QgPSBjcmVhdGVSZWFkT25seVJlY3QocmVjdEluaXQpO1xyXG4gICAgICAgIC8vIEFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiBmb2xsb3dpbmcgcHJvcGVydGllcyBhcmUgbm90IHdyaXRhYmxlXHJcbiAgICAgICAgLy8gYW5kIGFyZSBhbHNvIG5vdCBlbnVtZXJhYmxlIGluIHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24uXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBQcm9wZXJ0eSBhY2Nlc3NvcnMgYXJlIG5vdCBiZWluZyB1c2VkIGFzIHRoZXknZCByZXF1aXJlIHRvIGRlZmluZSBhXHJcbiAgICAgICAgLy8gcHJpdmF0ZSBXZWFrTWFwIHN0b3JhZ2Ugd2hpY2ggbWF5IGNhdXNlIG1lbW9yeSBsZWFrcyBpbiBicm93c2VycyB0aGF0XHJcbiAgICAgICAgLy8gZG9uJ3Qgc3VwcG9ydCB0aGlzIHR5cGUgb2YgY29sbGVjdGlvbnMuXHJcbiAgICAgICAgZGVmaW5lQ29uZmlndXJhYmxlKHRoaXMsIHsgdGFyZ2V0OiB0YXJnZXQsIGNvbnRlbnRSZWN0OiBjb250ZW50UmVjdCB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlckVudHJ5O1xyXG59KCkpO1xuXG52YXIgUmVzaXplT2JzZXJ2ZXJTUEkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgUmVzaXplT2JzZXJ2ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlckNhbGxiYWNrfSBjYWxsYmFjayAtIENhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgaW52b2tlZFxyXG4gICAgICogICAgICB3aGVuIG9uZSBvZiB0aGUgb2JzZXJ2ZWQgZWxlbWVudHMgY2hhbmdlcyBpdCdzIGNvbnRlbnQgZGltZW5zaW9ucy5cclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyfSBjb250cm9sbGVyIC0gQ29udHJvbGxlciBpbnN0YW5jZSB3aGljaFxyXG4gICAgICogICAgICBpcyByZXNwb25zaWJsZSBmb3IgdGhlIHVwZGF0ZXMgb2Ygb2JzZXJ2ZXIuXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyfSBjYWxsYmFja0N0eCAtIFJlZmVyZW5jZSB0byB0aGUgcHVibGljXHJcbiAgICAgKiAgICAgIFJlc2l6ZU9ic2VydmVyIGluc3RhbmNlIHdoaWNoIHdpbGwgYmUgcGFzc2VkIHRvIGNhbGxiYWNrIGZ1bmN0aW9uLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlclNQSShjYWxsYmFjaywgY29udHJvbGxlciwgY2FsbGJhY2tDdHgpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb2xsZWN0aW9uIG9mIHJlc2l6ZSBvYnNlcnZhdGlvbnMgdGhhdCBoYXZlIGRldGVjdGVkIGNoYW5nZXMgaW4gZGltZW5zaW9uc1xyXG4gICAgICAgICAqIG9mIGVsZW1lbnRzLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGUge0FycmF5PFJlc2l6ZU9ic2VydmF0aW9uPn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18gPSBbXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZWdpc3RyeSBvZiB0aGUgUmVzaXplT2JzZXJ2YXRpb24gaW5zdGFuY2VzLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGUge01hcDxFbGVtZW50LCBSZXNpemVPYnNlcnZhdGlvbj59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5vYnNlcnZhdGlvbnNfID0gbmV3IE1hcFNoaW0oKTtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBjYWxsYmFjayBwcm92aWRlZCBhcyBwYXJhbWV0ZXIgMSBpcyBub3QgYSBmdW5jdGlvbi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja18gPSBjYWxsYmFjaztcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJfID0gY29udHJvbGxlcjtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrQ3R4XyA9IGNhbGxiYWNrQ3R4O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydHMgb2JzZXJ2aW5nIHByb3ZpZGVkIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIG9ic2VydmVkLlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgY3VycmVudCBlbnZpcm9ubWVudCBkb2Vzbid0IGhhdmUgdGhlIEVsZW1lbnQgaW50ZXJmYWNlLlxyXG4gICAgICAgIGlmICh0eXBlb2YgRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgIShFbGVtZW50IGluc3RhbmNlb2YgT2JqZWN0KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncGFyYW1ldGVyIDEgaXMgbm90IG9mIHR5cGUgXCJFbGVtZW50XCIuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvYnNlcnZhdGlvbnMgPSB0aGlzLm9ic2VydmF0aW9uc187XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBlbGVtZW50IGlzIGFscmVhZHkgYmVpbmcgb2JzZXJ2ZWQuXHJcbiAgICAgICAgaWYgKG9ic2VydmF0aW9ucy5oYXModGFyZ2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9ic2VydmF0aW9ucy5zZXQodGFyZ2V0LCBuZXcgUmVzaXplT2JzZXJ2YXRpb24odGFyZ2V0KSk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyXy5hZGRPYnNlcnZlcih0aGlzKTtcclxuICAgICAgICAvLyBGb3JjZSB0aGUgdXBkYXRlIG9mIG9ic2VydmF0aW9ucy5cclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLnJlZnJlc2goKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFN0b3BzIG9ic2VydmluZyBwcm92aWRlZCBlbGVtZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBzdG9wIG9ic2VydmluZy5cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUudW5vYnNlcnZlID0gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgY3VycmVudCBlbnZpcm9ubWVudCBkb2Vzbid0IGhhdmUgdGhlIEVsZW1lbnQgaW50ZXJmYWNlLlxyXG4gICAgICAgIGlmICh0eXBlb2YgRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgIShFbGVtZW50IGluc3RhbmNlb2YgT2JqZWN0KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncGFyYW1ldGVyIDEgaXMgbm90IG9mIHR5cGUgXCJFbGVtZW50XCIuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvYnNlcnZhdGlvbnMgPSB0aGlzLm9ic2VydmF0aW9uc187XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBlbGVtZW50IGlzIG5vdCBiZWluZyBvYnNlcnZlZC5cclxuICAgICAgICBpZiAoIW9ic2VydmF0aW9ucy5oYXModGFyZ2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9ic2VydmF0aW9ucy5kZWxldGUodGFyZ2V0KTtcclxuICAgICAgICBpZiAoIW9ic2VydmF0aW9ucy5zaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlcl8ucmVtb3ZlT2JzZXJ2ZXIodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcHMgb2JzZXJ2aW5nIGFsbCBlbGVtZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckFjdGl2ZSgpO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2YXRpb25zXy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlcl8ucmVtb3ZlT2JzZXJ2ZXIodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb2xsZWN0cyBvYnNlcnZhdGlvbiBpbnN0YW5jZXMgdGhlIGFzc29jaWF0ZWQgZWxlbWVudCBvZiB3aGljaCBoYXMgY2hhbmdlZFxyXG4gICAgICogaXQncyBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLmdhdGhlckFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgICAgICB0aGlzLm9ic2VydmF0aW9uc18uZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2YXRpb24pIHtcclxuICAgICAgICAgICAgaWYgKG9ic2VydmF0aW9uLmlzQWN0aXZlKCkpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18ucHVzaChvYnNlcnZhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEludm9rZXMgaW5pdGlhbCBjYWxsYmFjayBmdW5jdGlvbiB3aXRoIGEgbGlzdCBvZiBSZXNpemVPYnNlcnZlckVudHJ5XHJcbiAgICAgKiBpbnN0YW5jZXMgY29sbGVjdGVkIGZyb20gYWN0aXZlIHJlc2l6ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5icm9hZGNhc3RBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBvYnNlcnZlciBkb2Vzbid0IGhhdmUgYWN0aXZlIG9ic2VydmF0aW9ucy5cclxuICAgICAgICBpZiAoIXRoaXMuaGFzQWN0aXZlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3R4ID0gdGhpcy5jYWxsYmFja0N0eF87XHJcbiAgICAgICAgLy8gQ3JlYXRlIFJlc2l6ZU9ic2VydmVyRW50cnkgaW5zdGFuY2UgZm9yIGV2ZXJ5IGFjdGl2ZSBvYnNlcnZhdGlvbi5cclxuICAgICAgICB2YXIgZW50cmllcyA9IHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXy5tYXAoZnVuY3Rpb24gKG9ic2VydmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVzaXplT2JzZXJ2ZXJFbnRyeShvYnNlcnZhdGlvbi50YXJnZXQsIG9ic2VydmF0aW9uLmJyb2FkY2FzdFJlY3QoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja18uY2FsbChjdHgsIGVudHJpZXMsIGN0eCk7XHJcbiAgICAgICAgdGhpcy5jbGVhckFjdGl2ZSgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ2xlYXJzIHRoZSBjb2xsZWN0aW9uIG9mIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5jbGVhckFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18uc3BsaWNlKDApO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVGVsbHMgd2hldGhlciBvYnNlcnZlciBoYXMgYWN0aXZlIG9ic2VydmF0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLmhhc0FjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLmxlbmd0aCA+IDA7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyU1BJO1xyXG59KCkpO1xuXG4vLyBSZWdpc3RyeSBvZiBpbnRlcm5hbCBvYnNlcnZlcnMuIElmIFdlYWtNYXAgaXMgbm90IGF2YWlsYWJsZSB1c2UgY3VycmVudCBzaGltXHJcbi8vIGZvciB0aGUgTWFwIGNvbGxlY3Rpb24gYXMgaXQgaGFzIGFsbCByZXF1aXJlZCBtZXRob2RzIGFuZCBiZWNhdXNlIFdlYWtNYXBcclxuLy8gY2FuJ3QgYmUgZnVsbHkgcG9seWZpbGxlZCBhbnl3YXkuXHJcbnZhciBvYnNlcnZlcnMgPSB0eXBlb2YgV2Vha01hcCAhPT0gJ3VuZGVmaW5lZCcgPyBuZXcgV2Vha01hcCgpIDogbmV3IE1hcFNoaW0oKTtcclxuLyoqXHJcbiAqIFJlc2l6ZU9ic2VydmVyIEFQSS4gRW5jYXBzdWxhdGVzIHRoZSBSZXNpemVPYnNlcnZlciBTUEkgaW1wbGVtZW50YXRpb25cclxuICogZXhwb3Npbmcgb25seSB0aG9zZSBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIHRoYXQgYXJlIGRlZmluZWQgaW4gdGhlIHNwZWMuXHJcbiAqL1xyXG52YXIgUmVzaXplT2JzZXJ2ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgUmVzaXplT2JzZXJ2ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlckNhbGxiYWNrfSBjYWxsYmFjayAtIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuXHJcbiAgICAgKiAgICAgIGRpbWVuc2lvbnMgb2YgdGhlIG9ic2VydmVkIGVsZW1lbnRzIGNoYW5nZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXIoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmVzaXplT2JzZXJ2ZXIpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJzEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbnRyb2xsZXIgPSBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXJTUEkoY2FsbGJhY2ssIGNvbnRyb2xsZXIsIHRoaXMpO1xyXG4gICAgICAgIG9ic2VydmVycy5zZXQodGhpcywgb2JzZXJ2ZXIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyO1xyXG59KCkpO1xyXG4vLyBFeHBvc2UgcHVibGljIG1ldGhvZHMgb2YgUmVzaXplT2JzZXJ2ZXIuXHJcbltcclxuICAgICdvYnNlcnZlJyxcclxuICAgICd1bm9ic2VydmUnLFxyXG4gICAgJ2Rpc2Nvbm5lY3QnXHJcbl0uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XHJcbiAgICBSZXNpemVPYnNlcnZlci5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgcmV0dXJuIChfYSA9IG9ic2VydmVycy5nZXQodGhpcykpW21ldGhvZF0uYXBwbHkoX2EsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG59KTtcblxudmFyIGluZGV4ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIEV4cG9ydCBleGlzdGluZyBpbXBsZW1lbnRhdGlvbiBpZiBhdmFpbGFibGUuXHJcbiAgICBpZiAodHlwZW9mIGdsb2JhbCQxLlJlc2l6ZU9ic2VydmVyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBnbG9iYWwkMS5SZXNpemVPYnNlcnZlcjtcclxuICAgIH1cclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlcjtcclxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBsYXllckNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvUGxheWVyQ29udGV4dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgIEltYWdlICBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuXHJcbmltcG9ydCBTbGlkZXIgZnJvbSAncmMtc2xpZGVyJztcclxuaW1wb3J0ICdyYy1zbGlkZXIvYXNzZXRzL2luZGV4LmNzcydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGxheWVyKCl7XHJcblxyXG4gIGNvbnN0IHtlcGlzb2RlTGlzdCAsIGN1cnJlbnRFcGlzb2RlSW5kZXh9ID0gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgZXBpc29kZSA9IGVwaXNvZGVMaXN0W2N1cnJlbnRFcGlzb2RlSW5kZXhdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5ZXJDb250YWluZXJ9PlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL3BsYXlpbmcuc3ZnXCIgYWx0PVwiVG9jYW5kbyBBZ29yYVwiLz5cclxuICAgICAgICA8c3Ryb25nPlRvY2FuZG8gYWdvcmEge2VwaXNvZGU/LnRpdGxlfTwvc3Ryb25nPlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIHtlcGlzb2RlID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVudEVwaXNvZGV9PlxyXG4gICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgIHdpZHRoPXs1OTJ9XHJcbiAgICAgICAgICAgaGVpZ2h0PXs1OTJ9IFxyXG4gICAgICAgICAgIHNyYz17ZXBpc29kZS50aHVtYm5haWx9IFxyXG4gICAgICAgICAgIG9iamVjdEZpdD0nY292ZXInLz5cclxuICAgICAgICAgICA8c3Ryb25nPntlcGlzb2RlLnRpdGxlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgIDxzcGFuPntlcGlzb2RlLm1lbWJlcnN9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHlQbGF5ZXJ9PlxyXG4gICAgICAgIDxzdHJvbmc+U2VsZWNpb25lIHVtIHBvZGNhc3QgcGFyYSBvdXZpcjwvc3Ryb25nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9eyFlcGlzb2RlPyBzdHlsZXMuZW1wdHkgOiAnJ30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc30+XHJcbiAgICAgICAgICA8c3Bhbj4wMC4wMDwvc3Bhbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVyfT5cclxuICAgICAgICAgIHtlcGlzb2RlID8gKFxyXG4gICAgICAgICAgICA8U2xpZGVyPjwvU2xpZGVyPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eVNsaWRlcn0+PC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3Bhbj4wMC4wMDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zaHVmZmxlLnN2Z1wiIGFsdD1cIkVtYmFyYWxoYXJcIi8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LXByZXZpb3VzLnN2Z1wiIGFsdD1cIlRvY2FyIEFudGVyaW9yXCIvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5QnV0dG9ufSA+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXkuc3ZnXCIgYWx0PVwiVG9jYXJcIi8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiID5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1uZXh0LnN2Z1wiIGFsdD1cIlRvY2FyIFByw7N4aW1vXCIvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvcmVwZWF0LnN2Z1wiIGFsdD1cIlJlcGl0aXJcIi8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==