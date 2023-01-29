'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var classnames = require('classnames');
var reactSvg = require('react-svg');
var reactDeviceDetect = require('react-device-detect');
var icons = require('@ant-design/icons');
var EventListener = require('react-event-listener');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);
var EventListener__default = /*#__PURE__*/_interopDefaultLegacy(EventListener);

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
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
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
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
  return _extends$1.apply(this, arguments);
}
function _inherits$1(subClass, superClass) {
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
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
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
function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
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
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn$1(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$1(this, result);
  };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var EditStringSvg = function EditStringSvg() {
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "edit-wrapper__icon"
  }, /*#__PURE__*/React__default['default'].createElement("svg", {
    version: "1.2",
    baseProfile: "tiny",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 20 20",
    overflow: "visible",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React__default['default'].createElement("g", null, /*#__PURE__*/React__default['default'].createElement("rect", {
    id: "Rectangle_2880_2_",
    x: "4.1",
    y: "4.6",
    fill: "#FFFFFF",
    width: "11.9",
    height: "11"
  })), /*#__PURE__*/React__default['default'].createElement("g", {
    id: "Group_1733",
    transform: "translate(-188 -188)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    id: "Path_1546",
    "fill-rule": "evenodd",
    fill: "#0000FF",
    d: "M194.3,190.6h7.5c2,0,3.7,1.7,3.7,3.7v7.5c0,2-1.7,3.7-3.7,3.7h-7.5 c-2,0-3.7-1.7-3.7-3.7v-7.5C190.6,192.2,192.2,190.6,194.3,190.6z M194.4,202.9l-0.8,0.2l0,0c-0.1,0-0.2,0-0.3,0h0 c-0.1,0-0.2-0.1-0.2-0.1c-0.1-0.1-0.1-0.2-0.1-0.3l0,0c0-0.1,0-0.3,0-0.5l0.2-0.7c0.3,0.2,0.6,0.4,0.8,0.6 C194.1,202.4,194.3,202.6,194.4,202.9z M196.7,202.1c-0.1,0.1-0.2,0.2-0.3,0.2c-0.1,0.1-0.2,0.1-0.3,0.1l-1.2,0.3 c-0.2-0.4-0.4-0.7-0.7-1c-0.3-0.3-0.6-0.6-1-0.7l0.3-1.1c0-0.1,0.1-0.2,0.1-0.3c0.1-0.1,0.1-0.2,0.2-0.3l0,0v0l6.1-6.1 c0.2-0.2,0.5-0.3,0.8-0.3l0,0c0.3,0,0.5,0.1,0.7,0.3l1.3,1.3c0.2,0.2,0.3,0.5,0.3,0.8l0,0c0,0.3-0.1,0.5-0.3,0.7L196.7,202.1 L196.7,202.1L196.7,202.1z"
  }))));
};

var EditIconSvg = function EditIconSvg() {
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "edit-wrapper__icon"
  }, /*#__PURE__*/React__default['default'].createElement("svg", {
    version: "1.2",
    baseProfile: "tiny",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 20 20",
    overflow: "visible",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React__default['default'].createElement("g", null, /*#__PURE__*/React__default['default'].createElement("rect", {
    id: "Rectangle_2880",
    x: "3.6",
    y: "4.6",
    fill: "#FFFFFF",
    width: "13",
    height: "11"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    id: "Subtraction_28",
    fill: "#0000FF",
    d: "M13.7,17.4H6.3c-2,0-3.7-1.7-3.7-3.7V6.3c0-2,1.7-3.7,3.7-3.7h7.5c2,0,3.7,1.7,3.7,3.7 v7.5C17.4,15.8,15.8,17.4,13.7,17.4L13.7,17.4z M5.5,11.6c-0.3,0-0.5,0.2-0.5,0.5v2.1c0,0,0,0.1,0,0.1c0,0.2,0.2,0.4,0.5,0.4h8.7 c0.2,0,0.4-0.2,0.4-0.4c0,0,0-0.1,0-0.1V12c0-0.1,0-0.2-0.1-0.3c-0.2-0.2-0.5-0.2-0.6,0c-0.1,0.1-0.1,0.2-0.1,0.3v1.7H6V12 C6,11.8,5.8,11.6,5.5,11.6L5.5,11.6z M7.6,9C7.3,9,7.1,9.2,7.1,9.5c0,0.1,0.1,0.3,0.2,0.4l2.2,2.2l0,0c0.1,0.1,0.2,0.1,0.3,0.1h0h0 h0.1c0,0,0,0,0.1,0h0h0c0.1,0,0.2-0.1,0.3-0.2l0,0c0,0,0,0,0,0l2.2-2.2c0.2-0.2,0.2-0.5,0-0.8C12.4,9.1,12.3,9,12.1,9 c-0.1,0-0.3,0.1-0.4,0.2l-1.3,1.3V5.6c0-0.1-0.1-0.3-0.2-0.4C10.1,5.1,10,5.1,9.9,5.1c-0.3,0-0.5,0.2-0.5,0.5l0,0v4.9L8,9.2 C7.9,9.1,7.8,9,7.6,9z"
  }))));
};

var EditSettingsSvg = function EditSettingsSvg() {
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "edit-wrapper__icon"
  }, /*#__PURE__*/React__default['default'].createElement("svg", {
    version: "1.2",
    baseProfile: "tiny",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 90 90",
    overflow: "visible",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React__default['default'].createElement("g", {
    id: "Group_4005",
    transform: "translate(-1795 -489)"
  }, /*#__PURE__*/React__default['default'].createElement("g", {
    transform: "matrix(1, 0, 0, 1, 1795, 489)"
  }, /*#__PURE__*/React__default['default'].createElement("circle", {
    id: "Ellipse_674-2",
    fill: "#FFF9FA",
    cx: "45",
    cy: "45",
    r: "42"
  })), /*#__PURE__*/React__default['default'].createElement("path", {
    id: "Subtraction_62",
    fill: "#0000FF",
    d: "M1840,576c-23.2,0-42-18.8-42-42c0-16.9,10.1-32.1,25.6-38.7c21.4-9,46,1,55.1,22.4 c9,21.4-1,46-22.4,55C1851.2,574.9,1845.6,576,1840,576z M1831.4,552.2L1831.4,552.2c0.9,0.5,1.9,0.9,2.9,1.2v3.6 c0,0.7,0.5,1.4,1.2,1.5c3.2,0.7,6.6,0.7,9.8,0c0.7-0.1,1.2-0.8,1.2-1.5v-3.6c1-0.3,2-0.7,2.9-1.2l2.5,2.5c0.5,0.5,1.3,0.6,1.9,0.2 c2.8-1.8,5.1-4.2,6.9-6.9c0.4-0.6,0.3-1.4-0.2-1.9l-2.5-2.5c0.5-0.9,0.9-1.9,1.2-2.9h3.6c0.7,0,1.4-0.5,1.5-1.2 c0.7-3.2,0.7-6.6,0-9.8c-0.1-0.7-0.8-1.2-1.5-1.2h-3.6c-0.3-1-0.7-2-1.2-2.9l2.5-2.5c0.5-0.5,0.6-1.3,0.2-1.9 c-1.8-2.8-4.2-5.1-6.9-6.9c-0.6-0.4-1.4-0.3-1.9,0.2l-2.5,2.5c-0.9-0.5-1.9-0.9-2.9-1.2V512c0-0.7-0.5-1.4-1.2-1.5 c-3.2-0.7-6.6-0.7-9.8,0c-0.7,0.1-1.2,0.8-1.2,1.5v3.6c-1,0.3-2,0.7-2.9,1.2l-2.5-2.5c-0.5-0.5-1.3-0.6-1.9-0.2 c-2.8,1.8-5.1,4.2-6.9,6.9c-0.4,0.6-0.3,1.4,0.2,1.9l2.5,2.5c-0.5,0.9-0.9,1.9-1.2,2.9h-3.6c-0.7,0-1.4,0.5-1.5,1.2 c-0.7,3.2-0.7,6.6,0,9.8c0.1,0.7,0.8,1.2,1.5,1.2h3.6c0.3,1,0.7,2,1.2,2.9l-2.5,2.5c-0.5,0.5-0.6,1.3-0.2,1.9 c1.8,2.8,4.2,5.1,6.9,6.9c0.6,0.4,1.4,0.3,1.9-0.2L1831.4,552.2z M1840.5,555.9c-1,0-2-0.1-3.1-0.2v-3.4c0-0.7-0.5-1.3-1.1-1.5 c-1.5-0.4-3-1-4.3-1.8c-0.6-0.4-1.4-0.3-1.9,0.2l-2.4,2.4c-1.6-1.2-3.1-2.7-4.3-4.3l2.4-2.4c0.5-0.5,0.6-1.3,0.2-1.9 c-0.8-1.4-1.4-2.8-1.8-4.3c-0.2-0.7-0.8-1.2-1.5-1.1h-3.4c-0.3-2-0.3-4.1,0-6.1h3.4c0.7,0,1.3-0.5,1.5-1.1c0.4-1.5,1-3,1.8-4.3 c0.4-0.6,0.3-1.4-0.2-1.9l-2.4-2.4c1.2-1.6,2.7-3.1,4.3-4.3l2.4,2.4c0.5,0.5,1.3,0.6,1.9,0.2c1.4-0.8,2.8-1.4,4.3-1.8 c0.7-0.2,1.2-0.8,1.2-1.5v-3.4c2-0.3,4.1-0.3,6.1,0v3.4c0,0.7,0.5,1.3,1.1,1.5c1.5,0.4,3,1,4.3,1.8c0.6,0.4,1.4,0.3,1.9-0.2 l2.4-2.4c1.6,1.2,3.1,2.7,4.3,4.3l-2.4,2.4c-0.5,0.5-0.6,1.3-0.2,1.9c0.8,1.4,1.4,2.8,1.8,4.3c0.2,0.7,0.8,1.1,1.5,1.1h3.4 c0.3,2,0.3,4.1,0,6.1h-3.4c-0.7,0-1.3,0.5-1.5,1.2c-0.4,1.5-1,3-1.8,4.3c-0.4,0.6-0.3,1.4,0.2,1.9l2.4,2.4 c-1.2,1.6-2.7,3.1-4.3,4.3l-2.4-2.4c-0.5-0.5-1.3-0.6-1.9-0.2c-1.4,0.8-2.8,1.4-4.3,1.8c-0.7,0.2-1.1,0.8-1.1,1.5v3.4 C1842.5,555.9,1841.5,555.9,1840.5,555.9L1840.5,555.9z M1840.5,526.8c-4.2,0-7.7,3.4-7.7,7.7c0,4.2,3.4,7.7,7.7,7.7 s7.7-3.4,7.7-7.7l0,0C1848.1,530.3,1844.7,526.8,1840.5,526.8L1840.5,526.8z M1840.5,539.1c-2.5,0-4.6-2.1-4.6-4.6 c0-2.5,2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6l0,0C1845.1,537,1843,539.1,1840.5,539.1L1840.5,539.1z"
  }))));
};

var EditBackgroundSVG = function EditBackgroundSVG() {
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "edit-wrapper__icon"
  }, /*#__PURE__*/React__default['default'].createElement("svg", {
    version: "1.2",
    baseProfile: "tiny",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 25 25",
    overflow: "visible",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    id: "Subtraction_61",
    fill: "#0000FF",
    d: "M17.8,22.9H7.2c-2.9,0-5.2-2.3-5.2-5.2V7.2c0-2.9,2.3-5.2,5.2-5.2h10.5 c2.9,0,5.2,2.3,5.2,5.2v10.5C22.9,20.6,20.6,22.9,17.8,22.9z M6.2,14.7c-0.4,0-0.6,0.3-0.6,0.6v3c0,0,0,0.1,0,0.1 c0,0.3,0.3,0.6,0.6,0.6h12.2c0.3,0,0.6-0.2,0.6-0.5c0-0.1,0-0.1,0-0.2v-3c0-0.2-0.1-0.3-0.2-0.5c-0.1-0.1-0.3-0.2-0.5-0.2 c-0.4,0-0.6,0.3-0.6,0.6v2.4H6.8v-2.4C6.8,15,6.6,14.7,6.2,14.7z M11.7,7.1V14c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.3,0.2,0.5,0.2 c0.4,0,0.7-0.3,0.7-0.7V7.1L15.1,9c0.1,0.1,0.3,0.2,0.5,0.2c0.4,0,0.7-0.3,0.7-0.7c0-0.2-0.1-0.4-0.2-0.5L13,4.8l0,0 c-0.1-0.1-0.3-0.2-0.4-0.2h0h0h-0.1c0,0-0.1,0-0.1,0h0h0c-0.2,0-0.3,0.1-0.4,0.2l0,0c0,0,0,0,0,0L8.8,7.9C8.5,8.2,8.5,8.7,8.8,9 C9,9.1,9.1,9.2,9.3,9.2c0.2,0,0.4-0.1,0.5-0.2L11.7,7.1L11.7,7.1z"
  })));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$5 = ".edit-wrapper__container {\n  display: inline-flex !important; }\n  .edit-wrapper__container.reverse {\n    flex-direction: row-reverse !important; }\n\n.edit-wrapper__icons-container {\n  display: none !important; }\n\n.edit-wrapper__icon-wrapper {\n  display: none !important;\n  position: relative;\n  width: 19px !important;\n  height: 19px !important;\n  text-align: center;\n  border-radius: 2px;\n  cursor: pointer;\n  font-size: 10px !important;\n  text-decoration: none !important;\n  font-weight: normal !important; }\n  .edit-wrapper__icon-wrapper.large {\n    width: 50px !important;\n    height: 50px !important; }\n\n.layout-edit .edit-wrapper__icon-wrapper {\n  display: inline-block !important; }\n\n.layout-edit .edit-wrapper__icons-container {\n  display: inline-flex !important; }\n\n.edit-wrapper__icon {\n  position: relative;\n  z-index: -1;\n  height: 100% !important;\n  width: 100% !important; }\n";
styleInject(css_248z$5);

var Editable = function Editable(_ref) {
  var children = _ref.children,
    stringId = _ref.stringId,
    iconId = _ref.iconId,
    position = _ref.position,
    style = _ref.style,
    reverse = _ref.reverse,
    sectionId = _ref.sectionId,
    backgroundId = _ref.backgroundId;
  var _position = _slicedToArray(position, 2),
    _position$ = _position[0],
    x = _position$ === void 0 ? 5 : _position$,
    _position$2 = _position[1],
    y = _position$2 === void 0 ? 0 : _position$2;
  var triggerStyles = {
    transform: "translate(".concat(x, "px, ").concat(y, "px)")
  };
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: classnames__default['default']('edit-wrapper__container', {
      reverse: reverse
    }),
    style: style
  }, children, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "edit-wrapper__icons-container",
    style: triggerStyles
  }, stringId && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "edit-wrapper__icon-wrapper",
    "data-string-id": stringId
  }, /*#__PURE__*/React__default['default'].createElement(EditStringSvg, null)), iconId && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "edit-wrapper__icon-wrapper",
    "data-icon-id": iconId
  }, /*#__PURE__*/React__default['default'].createElement(EditIconSvg, null)), backgroundId && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "edit-wrapper__icon-wrapper",
    "data-icon-id": backgroundId
  }, /*#__PURE__*/React__default['default'].createElement(EditBackgroundSVG, null)), sectionId && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "edit-wrapper__icon-wrapper large",
    "data-section-id": sectionId
  }, /*#__PURE__*/React__default['default'].createElement(EditSettingsSvg, null))));
};
Editable.propTypes = {
  stringId: PropTypes.string,
  iconId: PropTypes.string,
  position: PropTypes.array,
  style: PropTypes.object,
  reverse: PropTypes.bool
};
Editable.defaultProps = {
  stringId: '',
  iconId: '',
  position: [],
  style: {},
  reverse: false
};

var css_248z$4 = "/*!\n Material Components for the web\n Copyright (c) 2017 Google Inc.\n License: Apache-2.0\n*/\n/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct css rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/** MDC Ripple keyframes are split into their own file so that _mixins.scss can rely on them. */\n@-webkit-keyframes mdc-ripple-fg-radius-in {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n            transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1); }\n  to {\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); } }\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n            transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1); }\n  to {\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); } }\n\n@-webkit-keyframes mdc-ripple-fg-opacity-in {\n  from {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes mdc-ripple-fg-opacity-out {\n  from {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n.mdc-ripple-surface--test-edge-var-bug {\n  --mdc-ripple-surface-test-edge-var: 1px solid #000;\n  visibility: hidden; }\n  .mdc-ripple-surface--test-edge-var-bug::before {\n    border: var(--mdc-ripple-surface-test-edge-var); }\n\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n.mdc-button {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 2.25rem;\n  text-decoration: none;\n  text-transform: uppercase;\n  display: inline-block;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-width: 88px;\n  height: 36px;\n  padding: 0 16px;\n  border: none;\n  outline: none;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-appearance: none;\n  overflow: hidden;\n  vertical-align: middle;\n  border-radius: 2px; }\n  .mdc-button:active {\n    outline: none; }\n  .mdc-button:hover {\n    cursor: pointer; }\n  .mdc-button::-moz-focus-inner {\n    padding: 0;\n    border: 0; }\n  .mdc-button:disabled {\n    background-color: transparent;\n    /* @alternate */\n    color: rgba(0, 0, 0, 0.38);\n    color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));\n    cursor: default;\n    pointer-events: none; }\n    .mdc-button--theme-dark .mdc-button:disabled,\n    .mdc-theme--dark .mdc-button:disabled {\n      /* @alternate */\n      color: rgba(255, 255, 255, 0.5);\n      color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5)); }\n  .mdc-button:not(:disabled) {\n    background-color: transparent; }\n  .mdc-button:not(:disabled) {\n    /* @alternate */\n    color: rgba(0, 0, 0, 0.87);\n    color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87)); }\n  .mdc-button:not(:disabled) {\n    --mdc-ripple-surface-width: 0;\n    --mdc-ripple-surface-height: 0;\n    --mdc-ripple-fg-size: 0;\n    --mdc-ripple-left: 0;\n    --mdc-ripple-top: 0;\n    --mdc-ripple-fg-scale: 1;\n    --mdc-ripple-fg-translate-end: 0;\n    --mdc-ripple-fg-translate-start: 0;\n    will-change: transform, opacity;\n    -webkit-tap-highlight-color: transparent; }\n    .mdc-button:not(:disabled):not(.mdc-ripple-upgraded):hover::before, .mdc-button:not(:disabled):not(.mdc-ripple-upgraded):focus::before, .mdc-button:not(:disabled):not(.mdc-ripple-upgraded):active::after {\n      -webkit-transition-duration: 85ms;\n              transition-duration: 85ms;\n      opacity: .6; }\n    .mdc-button:not(:disabled)::before {\n      background-color: rgba(0, 0, 0, 0.16);\n      position: absolute;\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      -webkit-transition: opacity 250ms linear;\n      transition: opacity 250ms linear;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: \"\"; }\n    .mdc-button:not(:disabled).mdc-ripple-upgraded::before {\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      /* @alternate */\n      -webkit-transform: scale(0);\n              transform: scale(0);\n      -webkit-transform: scale(var(--mdc-ripple-fg-scale, 0));\n              transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n    .mdc-button:not(:disabled).mdc-ripple-upgraded--background-focused::before {\n      opacity: .99999; }\n    .mdc-button:not(:disabled).mdc-ripple-upgraded--background-active-fill::before {\n      -webkit-transition-duration: 120ms;\n              transition-duration: 120ms;\n      opacity: 1; }\n    .mdc-button:not(:disabled).mdc-ripple-upgraded--unbounded::before {\n      /* @alternate */\n      top: calc(50% - 50%);\n      top: var(--mdc-ripple-top, calc(50% - 50%));\n      /* @alternate */\n      left: calc(50% - 50%);\n      left: var(--mdc-ripple-left, calc(50% - 50%));\n      /* @alternate */\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      -webkit-transform: scale(0);\n              transform: scale(0);\n      -webkit-transform: scale(var(--mdc-ripple-fg-scale, 0));\n              transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n    .mdc-button:not(:disabled)::after {\n      background-color: rgba(0, 0, 0, 0.16);\n      position: absolute;\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      -webkit-transition: opacity 250ms linear;\n      transition: opacity 250ms linear;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: \"\"; }\n    .mdc-button:not(:disabled).mdc-ripple-upgraded::after {\n      top: 0;\n      left: 0;\n      /* @alternate */\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      -webkit-transform: scale(0);\n              transform: scale(0);\n      -webkit-transform-origin: center center;\n              transform-origin: center center;\n      opacity: 0; }\n    .mdc-button:not(:disabled):not(.mdc-ripple-upgraded--unbounded)::after {\n      -webkit-transform-origin: center center;\n              transform-origin: center center; }\n    .mdc-button:not(:disabled).mdc-ripple-upgraded--unbounded::after {\n      /* @alternate */\n      top: 0;\n      top: var(--mdc-ripple-top, 0);\n      /* @alternate */\n      left: 0;\n      left: var(--mdc-ripple-left, 0);\n      /* @alternate */\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      -webkit-transform: scale(0);\n              transform: scale(0);\n      -webkit-transform-origin: center center;\n              transform-origin: center center; }\n    .mdc-button:not(:disabled).mdc-ripple-upgraded--foreground-activation::after {\n      -webkit-animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards;\n              animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n    .mdc-button:not(:disabled).mdc-ripple-upgraded--foreground-deactivation::after {\n      -webkit-animation: 83ms mdc-ripple-fg-opacity-out;\n              animation: 83ms mdc-ripple-fg-opacity-out;\n      -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n              transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); }\n    .mdc-button:not(:disabled):not(.mdc-ripple-upgraded) {\n      -webkit-tap-highlight-color: rgba(0, 0, 0, 0.16); }\n  .mdc-button--theme-dark .mdc-button:not(:disabled),\n  .mdc-theme--dark .mdc-button:not(:disabled) {\n    /* @alternate */\n    color: white;\n    color: var(--mdc-theme-text-primary-on-dark, white); }\n  .mdc-button--theme-dark .mdc-button:not(:disabled),\n  .mdc-theme--dark .mdc-button:not(:disabled) {\n    --mdc-ripple-surface-width: 0;\n    --mdc-ripple-surface-height: 0;\n    --mdc-ripple-fg-size: 0;\n    --mdc-ripple-left: 0;\n    --mdc-ripple-top: 0;\n    --mdc-ripple-fg-scale: 1;\n    --mdc-ripple-fg-translate-end: 0;\n    --mdc-ripple-fg-translate-start: 0;\n    will-change: transform, opacity;\n    -webkit-tap-highlight-color: transparent; }\n    .mdc-button--theme-dark .mdc-button:not(:disabled):not(.mdc-ripple-upgraded):hover::before, .mdc-button--theme-dark .mdc-button:not(:disabled):not(.mdc-ripple-upgraded):focus::before, .mdc-button--theme-dark .mdc-button:not(:disabled):not(.mdc-ripple-upgraded):active::after,\n    .mdc-theme--dark .mdc-button:not(:disabled):not(.mdc-ripple-upgraded):hover::before,\n    .mdc-theme--dark .mdc-button:not(:disabled):not(.mdc-ripple-upgraded):focus::before,\n    .mdc-theme--dark .mdc-button:not(:disabled):not(.mdc-ripple-upgraded):active::after {\n      -webkit-transition-duration: 85ms;\n              transition-duration: 85ms;\n      opacity: .6; }\n    .mdc-button--theme-dark .mdc-button:not(:disabled)::before,\n    .mdc-theme--dark .mdc-button:not(:disabled)::before {\n      background-color: rgba(255, 255, 255, 0.16);\n      position: absolute;\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      -webkit-transition: opacity 250ms linear;\n      transition: opacity 250ms linear;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: \"\"; }\n    .mdc-button--theme-dark .mdc-button:not(:disabled).mdc-ripple-upgraded::before,\n    .mdc-theme--dark .mdc-button:not(:disabled).mdc-ripple-upgraded::before {\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      /* @alternate */\n      -webkit-transform: scale(0);\n              transform: scale(0);\n      -webkit-transform: scale(var(--mdc-ripple-fg-scale, 0));\n              transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n    .mdc-button--theme-dark .mdc-button:not(:disabled).mdc-ripple-upgraded--background-focused::before,\n    .mdc-theme--dark .mdc-button:not(:disabled).mdc-ripple-upgraded--background-focused::before {\n      opacity: .99999; }\n    .mdc-button--theme-dark .mdc-button:not(:disabled).mdc-ripple-upgraded--background-active-fill::before,\n    .mdc-theme--dark .mdc-button:not(:disabled).mdc-ripple-upgraded--background-active-fill::before {\n      -webkit-transition-duration: 120ms;\n              transition-duration: 120ms;\n      opacity: 1; }\n    .mdc-button--theme-dark .mdc-button:not(:disabled).mdc-ripple-upgraded--unbounded::before,\n    .mdc-theme--dark .mdc-button:not(:disabled).mdc-ripple-upgraded--unbounded::before {\n      /* @alternate */\n      top: calc(50% - 50%);\n      top: var(--mdc-ripple-top, calc(50% - 50%));\n      /* @alternate */\n      left: calc(50% - 50%);\n      left: var(--mdc-ripple-left, calc(50% - 50%));\n      /* @alternate */\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      -webkit-transform: scale(0);\n              transform: scale(0);\n      -webkit-transform: scale(var(--mdc-ripple-fg-scale, 0));\n              transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n    .mdc-button--theme-dark .mdc-button:not(:disabled)::after,\n    .mdc-theme--dark .mdc-button:not(:disabled)::after {\n      background-color: rgba(255, 255, 255, 0.16);\n      position: absolute;\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      -webkit-transition: opacity 250ms linear;\n      transition: opacity 250ms linear;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: \"\"; }\n    .mdc-button--theme-dark .mdc-button:not(:disabled).mdc-ripple-upgraded::after,\n    .mdc-theme--dark .mdc-button:not(:disabled).mdc-ripple-upgraded::after {\n      top: 0;\n      left: 0;\n      /* @alternate */\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      -webkit-transform: scale(0);\n              transform: scale(0);\n      -webkit-transform-origin: center center;\n              transform-origin: center center;\n      opacity: 0; }\n    .mdc-button--theme-dark .mdc-button:not(:disabled):not(.mdc-ripple-upgraded--unbounded)::after,\n    .mdc-theme--dark .mdc-button:not(:disabled):not(.mdc-ripple-upgraded--unbounded)::after {\n      -webkit-transform-origin: center center;\n              transform-origin: center center; }\n    .mdc-button--theme-dark .mdc-button:not(:disabled).mdc-ripple-upgraded--unbounded::after,\n    .mdc-theme--dark .mdc-button:not(:disabled).mdc-ripple-upgraded--unbounded::after {\n      /* @alternate */\n      top: 0;\n      top: var(--mdc-ripple-top, 0);\n      /* @alternate */\n      left: 0;\n      left: var(--mdc-ripple-left, 0);\n      /* @alternate */\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      -webkit-transform: scale(0);\n              transform: scale(0);\n      -webkit-transform-origin: center center;\n              transform-origin: center center; }\n    .mdc-button--theme-dark .mdc-button:not(:disabled).mdc-ripple-upgraded--foreground-activation::after,\n    .mdc-theme--dark .mdc-button:not(:disabled).mdc-ripple-upgraded--foreground-activation::after {\n      -webkit-animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards;\n              animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n    .mdc-button--theme-dark .mdc-button:not(:disabled).mdc-ripple-upgraded--foreground-deactivation::after,\n    .mdc-theme--dark .mdc-button:not(:disabled).mdc-ripple-upgraded--foreground-deactivation::after {\n      -webkit-animation: 83ms mdc-ripple-fg-opacity-out;\n              animation: 83ms mdc-ripple-fg-opacity-out;\n      -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n              transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); }\n    .mdc-button--theme-dark .mdc-button:not(:disabled):not(.mdc-ripple-upgraded),\n    .mdc-theme--dark .mdc-button:not(:disabled):not(.mdc-ripple-upgraded) {\n      -webkit-tap-highlight-color: rgba(255, 255, 255, 0.16); }\n\n.mdc-button--raised:disabled,\n.mdc-button--unelevated:disabled {\n  background-color: rgba(0, 0, 0, 0.12);\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38)); }\n  .mdc-button--theme-dark .mdc-button--raised:disabled,\n  .mdc-theme--dark .mdc-button--raised:disabled, .mdc-button--theme-dark\n  .mdc-button--unelevated:disabled,\n  .mdc-theme--dark\n  .mdc-button--unelevated:disabled {\n    background-color: rgba(255, 255, 255, 0.12);\n    /* @alternate */\n    color: rgba(0, 0, 0, 0.38);\n    color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38)); }\n\n.mdc-button--raised:not(:disabled),\n.mdc-button--unelevated:not(:disabled) {\n  background-color: black; }\n\n.mdc-button--raised:not(:disabled),\n.mdc-button--unelevated:not(:disabled) {\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white); }\n\n.mdc-button--raised:not(:disabled),\n.mdc-button--unelevated:not(:disabled) {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent; }\n  .mdc-button--raised:not(:disabled):not(.mdc-ripple-upgraded):hover::before, .mdc-button--raised:not(:disabled):not(.mdc-ripple-upgraded):focus::before, .mdc-button--raised:not(:disabled):not(.mdc-ripple-upgraded):active::after,\n  .mdc-button--unelevated:not(:disabled):not(.mdc-ripple-upgraded):hover::before,\n  .mdc-button--unelevated:not(:disabled):not(.mdc-ripple-upgraded):focus::before,\n  .mdc-button--unelevated:not(:disabled):not(.mdc-ripple-upgraded):active::after {\n    -webkit-transition-duration: 85ms;\n            transition-duration: 85ms;\n    opacity: .6; }\n  .mdc-button--raised:not(:disabled)::before,\n  .mdc-button--unelevated:not(:disabled)::before {\n    background-color: rgba(255, 255, 255, 0.32);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    -webkit-transition: opacity 250ms linear;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-button--raised:not(:disabled).mdc-ripple-upgraded::before,\n  .mdc-button--unelevated:not(:disabled).mdc-ripple-upgraded::before {\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    /* @alternate */\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 0));\n            transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-button--raised:not(:disabled).mdc-ripple-upgraded--background-focused::before,\n  .mdc-button--unelevated:not(:disabled).mdc-ripple-upgraded--background-focused::before {\n    opacity: .99999; }\n  .mdc-button--raised:not(:disabled).mdc-ripple-upgraded--background-active-fill::before,\n  .mdc-button--unelevated:not(:disabled).mdc-ripple-upgraded--background-active-fill::before {\n    -webkit-transition-duration: 120ms;\n            transition-duration: 120ms;\n    opacity: 1; }\n  .mdc-button--raised:not(:disabled).mdc-ripple-upgraded--unbounded::before,\n  .mdc-button--unelevated:not(:disabled).mdc-ripple-upgraded--unbounded::before {\n    /* @alternate */\n    top: calc(50% - 50%);\n    top: var(--mdc-ripple-top, calc(50% - 50%));\n    /* @alternate */\n    left: calc(50% - 50%);\n    left: var(--mdc-ripple-left, calc(50% - 50%));\n    /* @alternate */\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    /* @alternate */\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    /* @alternate */\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 0));\n            transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-button--raised:not(:disabled)::after,\n  .mdc-button--unelevated:not(:disabled)::after {\n    background-color: rgba(255, 255, 255, 0.32);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    -webkit-transition: opacity 250ms linear;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-button--raised:not(:disabled).mdc-ripple-upgraded::after,\n  .mdc-button--unelevated:not(:disabled).mdc-ripple-upgraded::after {\n    top: 0;\n    left: 0;\n    /* @alternate */\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    /* @alternate */\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    -webkit-transform-origin: center center;\n            transform-origin: center center;\n    opacity: 0; }\n  .mdc-button--raised:not(:disabled):not(.mdc-ripple-upgraded--unbounded)::after,\n  .mdc-button--unelevated:not(:disabled):not(.mdc-ripple-upgraded--unbounded)::after {\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n  .mdc-button--raised:not(:disabled).mdc-ripple-upgraded--unbounded::after,\n  .mdc-button--unelevated:not(:disabled).mdc-ripple-upgraded--unbounded::after {\n    /* @alternate */\n    top: 0;\n    top: var(--mdc-ripple-top, 0);\n    /* @alternate */\n    left: 0;\n    left: var(--mdc-ripple-left, 0);\n    /* @alternate */\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    /* @alternate */\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n  .mdc-button--raised:not(:disabled).mdc-ripple-upgraded--foreground-activation::after,\n  .mdc-button--unelevated:not(:disabled).mdc-ripple-upgraded--foreground-activation::after {\n    -webkit-animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards;\n            animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n  .mdc-button--raised:not(:disabled).mdc-ripple-upgraded--foreground-deactivation::after,\n  .mdc-button--unelevated:not(:disabled).mdc-ripple-upgraded--foreground-deactivation::after {\n    -webkit-animation: 83ms mdc-ripple-fg-opacity-out;\n            animation: 83ms mdc-ripple-fg-opacity-out;\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); }\n  .mdc-button--raised:not(:disabled):not(.mdc-ripple-upgraded),\n  .mdc-button--unelevated:not(:disabled):not(.mdc-ripple-upgraded) {\n    -webkit-tap-highlight-color: rgba(255, 255, 255, 0.32); }\n\n.mdc-button--theme-dark .mdc-button--raised:not(:disabled),\n.mdc-theme--dark .mdc-button--raised:not(:disabled), .mdc-button--theme-dark\n.mdc-button--unelevated:not(:disabled),\n.mdc-theme--dark\n.mdc-button--unelevated:not(:disabled) {\n  background-color: white; }\n\n.mdc-button--theme-dark .mdc-button--raised:not(:disabled),\n.mdc-theme--dark .mdc-button--raised:not(:disabled), .mdc-button--theme-dark\n.mdc-button--unelevated:not(:disabled),\n.mdc-theme--dark\n.mdc-button--unelevated:not(:disabled) {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87)); }\n\n.mdc-button--theme-dark .mdc-button--raised:not(:disabled),\n.mdc-theme--dark .mdc-button--raised:not(:disabled), .mdc-button--theme-dark\n.mdc-button--unelevated:not(:disabled),\n.mdc-theme--dark\n.mdc-button--unelevated:not(:disabled) {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent; }\n  .mdc-button--theme-dark .mdc-button--raised:not(:disabled):not(.mdc-ripple-upgraded):hover::before, .mdc-button--theme-dark .mdc-button--raised:not(:disabled):not(.mdc-ripple-upgraded):focus::before, .mdc-button--theme-dark .mdc-button--raised:not(:disabled):not(.mdc-ripple-upgraded):active::after,\n  .mdc-theme--dark .mdc-button--raised:not(:disabled):not(.mdc-ripple-upgraded):hover::before,\n  .mdc-theme--dark .mdc-button--raised:not(:disabled):not(.mdc-ripple-upgraded):focus::before,\n  .mdc-theme--dark .mdc-button--raised:not(:disabled):not(.mdc-ripple-upgraded):active::after, .mdc-button--theme-dark\n  .mdc-button--unelevated:not(:disabled):not(.mdc-ripple-upgraded):hover::before, .mdc-button--theme-dark\n  .mdc-button--unelevated:not(:disabled):not(.mdc-ripple-upgraded):focus::before, .mdc-button--theme-dark\n  .mdc-button--unelevated:not(:disabled):not(.mdc-ripple-upgraded):active::after,\n  .mdc-theme--dark\n  .mdc-button--unelevated:not(:disabled):not(.mdc-ripple-upgraded):hover::before,\n  .mdc-theme--dark\n  .mdc-button--unelevated:not(:disabled):not(.mdc-ripple-upgraded):focus::before,\n  .mdc-theme--dark\n  .mdc-button--unelevated:not(:disabled):not(.mdc-ripple-upgraded):active::after {\n    -webkit-transition-duration: 85ms;\n            transition-duration: 85ms;\n    opacity: .6; }\n  .mdc-button--theme-dark .mdc-button--raised:not(:disabled)::before,\n  .mdc-theme--dark .mdc-button--raised:not(:disabled)::before, .mdc-button--theme-dark\n  .mdc-button--unelevated:not(:disabled)::before,\n  .mdc-theme--dark\n  .mdc-button--unelevated:not(:disabled)::before {\n    background-color: rgba(0, 0, 0, 0.32);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    -webkit-transition: opacity 250ms linear;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-button--theme-dark .mdc-button--raised:not(:disabled).mdc-ripple-upgraded::before,\n  .mdc-theme--dark .mdc-button--raised:not(:disabled).mdc-ripple-upgraded::before, .mdc-button--theme-dark\n  .mdc-button--unelevated:not(:disabled).mdc-ripple-upgraded::before,\n  .mdc-theme--dark\n  .mdc-button--unelevated:not(:disabled).mdc-ripple-upgraded::before {\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    /* @alternate */\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 0));\n            transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-button--theme-dark .mdc-button--raised:not(:disabled).mdc-ripple-upgraded--background-focused::before,\n  .mdc-theme--dark .mdc-button--raised:not(:disabled).mdc-ripple-upgraded--background-focused::before, .mdc-button--theme-dark\n  .mdc-button--unelevated:not(:disabled).mdc-ripple-upgraded--background-focused::before,\n  .mdc-theme--dark\n  .mdc-button--unelevated:not(:disabled).mdc-ripple-upgraded--background-focused::before {\n    opacity: .99999; }\n  .mdc-button--theme-dark .mdc-button--raised:not(:disabled).mdc-ripple-upgraded--background-active-fill::before,\n  .mdc-theme--dark .mdc-button--raised:not(:disabled).mdc-ripple-upgraded--background-active-fill::before, .mdc-button--theme-dark\n  .mdc-button--unelevated:not(:disabled).mdc-ripple-upgraded--background-active-fill::before,\n  .mdc-theme--dark\n  .mdc-button--unelevated:not(:disabled).mdc-ripple-upgraded--background-active-fill::before {\n    -webkit-transition-duration: 120ms;\n            transition-duration: 120ms;\n    opacity: 1; }\n  .mdc-button--theme-dark .mdc-button--raised:not(:disabled).mdc-ripple-upgraded--unbounded::before,\n  .mdc-theme--dark .mdc-button--raised:not(:disabled).mdc-ripple-upgraded--unbounded::before, .mdc-button--theme-dark\n  .mdc-button--unelevated:not(:disabled).mdc-ripple-upgraded--unbounded::before,\n  .mdc-theme--dark\n  .mdc-button--unelevated:not(:disabled).mdc-ripple-upgraded--unbounded::before {\n    /* @alternate */\n    top: calc(50% - 50%);\n    top: var(--mdc-ripple-top, calc(50% - 50%));\n    /* @alternate */\n    left: calc(50% - 50%);\n    left: var(--mdc-ripple-left, calc(50% - 50%));\n    /* @alternate */\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    /* @alternate */\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    /* @alternate */\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 0));\n            transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-button--theme-dark .mdc-button--raised:not(:disabled)::after,\n  .mdc-theme--dark .mdc-button--raised:not(:disabled)::after, .mdc-button--theme-dark\n  .mdc-button--unelevated:not(:disabled)::after,\n  .mdc-theme--dark\n  .mdc-button--unelevated:not(:disabled)::after {\n    background-color: rgba(0, 0, 0, 0.32);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    -webkit-transition: opacity 250ms linear;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-button--theme-dark .mdc-button--raised:not(:disabled).mdc-ripple-upgraded::after,\n  .mdc-theme--dark .mdc-button--raised:not(:disabled).mdc-ripple-upgraded::after, .mdc-button--theme-dark\n  .mdc-button--unelevated:not(:disabled).mdc-ripple-upgraded::after,\n  .mdc-theme--dark\n  .mdc-button--unelevated:not(:disabled).mdc-ripple-upgraded::after {\n    top: 0;\n    left: 0;\n    /* @alternate */\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    /* @alternate */\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    -webkit-transform-origin: center center;\n            transform-origin: center center;\n    opacity: 0; }\n  .mdc-button--theme-dark .mdc-button--raised:not(:disabled):not(.mdc-ripple-upgraded--unbounded)::after,\n  .mdc-theme--dark .mdc-button--raised:not(:disabled):not(.mdc-ripple-upgraded--unbounded)::after, .mdc-button--theme-dark\n  .mdc-button--unelevated:not(:disabled):not(.mdc-ripple-upgraded--unbounded)::after,\n  .mdc-theme--dark\n  .mdc-button--unelevated:not(:disabled):not(.mdc-ripple-upgraded--unbounded)::after {\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n  .mdc-button--theme-dark .mdc-button--raised:not(:disabled).mdc-ripple-upgraded--unbounded::after,\n  .mdc-theme--dark .mdc-button--raised:not(:disabled).mdc-ripple-upgraded--unbounded::after, .mdc-button--theme-dark\n  .mdc-button--unelevated:not(:disabled).mdc-ripple-upgraded--unbounded::after,\n  .mdc-theme--dark\n  .mdc-button--unelevated:not(:disabled).mdc-ripple-upgraded--unbounded::after {\n    /* @alternate */\n    top: 0;\n    top: var(--mdc-ripple-top, 0);\n    /* @alternate */\n    left: 0;\n    left: var(--mdc-ripple-left, 0);\n    /* @alternate */\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    /* @alternate */\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n  .mdc-button--theme-dark .mdc-button--raised:not(:disabled).mdc-ripple-upgraded--foreground-activation::after,\n  .mdc-theme--dark .mdc-button--raised:not(:disabled).mdc-ripple-upgraded--foreground-activation::after, .mdc-button--theme-dark\n  .mdc-button--unelevated:not(:disabled).mdc-ripple-upgraded--foreground-activation::after,\n  .mdc-theme--dark\n  .mdc-button--unelevated:not(:disabled).mdc-ripple-upgraded--foreground-activation::after {\n    -webkit-animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards;\n            animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n  .mdc-button--theme-dark .mdc-button--raised:not(:disabled).mdc-ripple-upgraded--foreground-deactivation::after,\n  .mdc-theme--dark .mdc-button--raised:not(:disabled).mdc-ripple-upgraded--foreground-deactivation::after, .mdc-button--theme-dark\n  .mdc-button--unelevated:not(:disabled).mdc-ripple-upgraded--foreground-deactivation::after,\n  .mdc-theme--dark\n  .mdc-button--unelevated:not(:disabled).mdc-ripple-upgraded--foreground-deactivation::after {\n    -webkit-animation: 83ms mdc-ripple-fg-opacity-out;\n            animation: 83ms mdc-ripple-fg-opacity-out;\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); }\n  .mdc-button--theme-dark .mdc-button--raised:not(:disabled):not(.mdc-ripple-upgraded),\n  .mdc-theme--dark .mdc-button--raised:not(:disabled):not(.mdc-ripple-upgraded), .mdc-button--theme-dark\n  .mdc-button--unelevated:not(:disabled):not(.mdc-ripple-upgraded),\n  .mdc-theme--dark\n  .mdc-button--unelevated:not(:disabled):not(.mdc-ripple-upgraded) {\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.32); }\n\n.mdc-button--raised {\n  -webkit-box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  -webkit-transition: -webkit-box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: -webkit-box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: box-shadow; }\n  .mdc-button--raised:hover, .mdc-button--raised:focus {\n    -webkit-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n  .mdc-button--raised:active {\n    -webkit-box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n  .mdc-button--raised:disabled {\n    -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.mdc-button--stroked {\n  border-style: solid;\n  border-width: 2px;\n  line-height: 32px; }\n  .mdc-button--stroked:disabled {\n    /* @alternate */\n    border-color: rgba(0, 0, 0, 0.38);\n    border-color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38)); }\n    .mdc-button--theme-dark .mdc-button--stroked:disabled,\n    .mdc-theme--dark .mdc-button--stroked:disabled {\n      /* @alternate */\n      border-color: rgba(255, 255, 255, 0.5);\n      border-color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5)); }\n  .mdc-button--stroked.mdc-button--dense {\n    line-height: 27px; }\n  .mdc-button--stroked:not(:disabled) {\n    /* @alternate */\n    border-color: rgba(0, 0, 0, 0.87);\n    border-color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87)); }\n  .mdc-button--theme-dark .mdc-button--stroked:not(:disabled),\n  .mdc-theme--dark .mdc-button--stroked:not(:disabled) {\n    /* @alternate */\n    border-color: white;\n    border-color: var(--mdc-theme-text-primary-on-dark, white); }\n\n.mdc-button--compact {\n  padding: 0 8px; }\n\n.mdc-button--dense {\n  height: 32px;\n  font-size: .8125rem;\n  line-height: 32px; }\n\n.mdc-button__icon {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  margin-right: 8px;\n  font-size: 18px;\n  line-height: inherit;\n  vertical-align: top; }\n";
styleInject(css_248z$4);

var css_248z$3 = ":root {\n  --labels_inactive-button: #535353;\n  --specials_buttons-links-and-highlights: #0066b4;\n  --specials_checks-okay-done: #008000;\n  --specials_notifications-alerts-warnings: #ed1c24;\n  --calculated_base_footer_text: #ffffff; }\n\n.holla-button {\n  width: 100%;\n  font-size: 1rem;\n  padding: 0 4px;\n  background-color: var(--specials_buttons-links-and-highlights) !important; }\n  .holla-button.button-success {\n    background-color: var(--specials_checks-okay-done) !important; }\n  .holla-button.button-fail {\n    background-color: var(--specials_notifications-alerts-warnings) !important; }\n  .holla-button.disabled {\n    background-color: var(--labels_inactive-button) !important; }\n  .holla-button:active, .holla-button:focus {\n    outline: none;\n    border: none; }\n\n.checkbutton-wrapper {\n  font-size: 1.1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .checkbutton-wrapper .checkbutton-input-wrapper {\n    width: 300px;\n    padding: 10px;\n    margin-top: 35px;\n    justify-content: center;\n    background-color: var(--specials_buttons-links-and-highlights); }\n    .checkbutton-wrapper .checkbutton-input-wrapper .checkbutton-input-wrapper--label {\n      margin: 0;\n      padding-left: 0.5rem; }\n    .checkbutton-wrapper .checkbutton-input-wrapper .checkbutton-input-wrapper--image,\n    .checkbutton-wrapper .checkbutton-input-wrapper .checkbutton-input-wrapper--loader {\n      width: 2rem; }\n    .checkbutton-wrapper .checkbutton-input-wrapper .checkbutton-input-wrapper--image svg {\n      width: 2rem;\n      height: 2rem;\n      stroke: var(--calculated_base_footer_text); }\n  .checkbutton-wrapper .checkbutton-content-wrapper {\n    margin-left: 2rem; }\n\n.buttons-row > *:not(:last-child) {\n  margin-right: 1rem; }\n\n.direction_ltr .holla-button-font {\n  font-family: \"Raleway\"; }\n\n.direction_rtl .holla-button-font {\n  font-family: inherit !important; }\n";
styleInject(css_248z$3);

var Button = function Button(_ref) {
  var label = _ref.label,
    onClick = _ref.onClick,
    type = _ref.type,
    disabled = _ref.disabled,
    className = _ref.className,
    _ref$autoFocus = _ref.autoFocus,
    autoFocus = _ref$autoFocus === void 0 ? false : _ref$autoFocus,
    _ref$stringId = _ref.stringId,
    stringId = _ref$stringId === void 0 ? '' : _ref$stringId;
  return /*#__PURE__*/React__default['default'].createElement(React.Fragment, null, stringId && /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(Editable, {
    stringId: stringId
  })), /*#__PURE__*/React__default['default'].createElement("button", {
    type: type,
    onClick: onClick,
    className: classnames__default['default']('holla-button', 'mdc-button', 'mdc-button--unelevated', 'holla-button-font', {
      disabled: disabled
    }, className),
    disabled: disabled,
    autoFocus: autoFocus
  }, label));
};
Button.propTypes = {
  label: PropTypes__default['default'].string.isRequired,
  onClick: PropTypes__default['default'].func,
  type: PropTypes__default['default'].string,
  disabled: PropTypes__default['default'].bool
};
Button.defaultProps = {
  type: 'submit',
  disabled: false,
  className: ''
};

var BACKGROUND_ICON_IDS = ['EXCHANGE_LOGO', 'EXCHANGE_LOADER'];
var isBackgroundIcon = function isBackgroundIcon(iconId) {
  return BACKGROUND_ICON_IDS.includes(iconId);
};

var Image = function Image(_ref) {
  var icon = _ref.icon,
    iconId = _ref.iconId,
    alt = _ref.alt,
    wrapperClassName = _ref.wrapperClassName,
    imageWrapperClassName = _ref.imageWrapperClassName,
    svgWrapperClassName = _ref.svgWrapperClassName,
    stringId = _ref.stringId,
    showUpload = _ref.showUpload,
    _ref$beforeInjection = _ref.beforeInjection,
    beforeInjection = _ref$beforeInjection === void 0 ? function () {} : _ref$beforeInjection;
  var useSvg = icon.indexOf('.svg') > 0;
  var isBackground = isBackgroundIcon(iconId);
  if (isBackground) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: classnames__default['default'](wrapperClassName, 'background-size-contain', 'h-100'),
      style: {
        backgroundImage: "url(".concat(icon, ")")
      }
    });
  }
  return /*#__PURE__*/React__default['default'].createElement(Editable, {
    iconId: showUpload ? iconId : '',
    stringId: stringId
  }, icon && useSvg && /*#__PURE__*/React__default['default'].createElement(reactSvg.ReactSVG, {
    src: icon,
    className: classnames__default['default'](wrapperClassName, svgWrapperClassName),
    beforeInjection: beforeInjection,
    fallback: function fallback() {
      return /*#__PURE__*/React__default['default'].createElement("img", {
        src: icon,
        alt: alt,
        className: classnames__default['default'](wrapperClassName, svgWrapperClassName)
      });
    }
  }), icon && !useSvg && /*#__PURE__*/React__default['default'].createElement("img", {
    src: icon,
    alt: alt,
    className: classnames__default['default'](wrapperClassName, imageWrapperClassName, 'object-fit-contain')
  }));
};
Image.defaultProps = {
  icon: '',
  iconId: '',
  stringId: '',
  alt: '',
  wrapperClassName: '',
  imageWrapperClassName: '',
  svgWrapperClassName: '',
  showUpload: true
};

var css_248z$2 = ":root {\n  --labels_secondary-inactive-label-text-graphics: #808080;\n  --labels_fields: #f0f1f1; }\n\n.panel-information-row {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: var(--labels_fields);\n  padding: 0.5rem;\n  margin-bottom: 0.5rem;\n  flex: 1; }\n\n.panel-information-row-disable {\n  color: var(--labels_secondary-inactive-label-text-graphics); }\n";
styleInject(css_248z$2);

var PanelInformationRow = function PanelInformationRow(_ref) {
  var stringId = _ref.stringId,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    _ref$information = _ref.information,
    information = _ref$information === void 0 ? '' : _ref$information,
    className = _ref.className,
    _ref$bold = _ref.bold,
    bold = _ref$bold === void 0 ? true : _ref$bold,
    _ref$disable = _ref.disable,
    disable = _ref$disable === void 0 ? false : _ref$disable;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: classnames__default['default']('d-flex', 'justify-content-start', 'align-items-center', 'panel-information-row', className, {
      'panel-information-row-disable': disable
    })
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    style: {
      wordBreak: 'normal'
    }
  }, bold ? /*#__PURE__*/React__default['default'].createElement("b", null, label) : label, ":", ' ', /*#__PURE__*/React__default['default'].createElement("span", null, information)), stringId && /*#__PURE__*/React__default['default'].createElement(Editable, {
    stringId: stringId
  }));
};

var css_248z$1 = ":root {\n  --labels_secondary-inactive-label-text-graphics: #808080;\n  --specials_buttons-links-and-highlights: #0066b4;\n  --specials_checks-okay-done: #008000;\n  --specials_notifications-alerts-warnings: #ed1c24; }\n\n.action_notification-wrapper {\n  position: absolute;\n  top: 0.25rem;\n  display: flex;\n  align-items: center; }\n  .action_notification-wrapper .notification-info {\n    color: var(--specials_buttons-links-and-highlights); }\n  .action_notification-wrapper .notification-warning {\n    color: var(--specials_notifications-alerts-warnings); }\n  .action_notification-wrapper .notification-success {\n    color: var(--specials_checks-okay-done); }\n  .action_notification-wrapper .notification-disabled {\n    color: var(--labels_secondary-inactive-label-text-graphics); }\n  .action_notification-wrapper .notification-loading {\n    color: var(--labels_secondary-inactive-label-text-graphics); }\n  .action_notification-wrapper.disabled {\n    opacity: 0.3 !important; }\n  .action_notification-wrapper .relative {\n    position: relative; }\n  .action_notification-wrapper .action_notification-text {\n    font-size: 1rem;\n    text-transform: uppercase; }\n  .action_notification-wrapper .action_notification-image {\n    width: 1rem;\n    height: 1rem; }\n  .action_notification-wrapper.icon_on-right {\n    flex-direction: row; }\n  .action_notification-wrapper.icon_on-left {\n    flex-direction: row-reverse; }\n  .action_notification-wrapper .action_notification-svg > div {\n    display: flex;\n    align-items: center; }\n  .action_notification-wrapper .action_notification-svg svg {\n    width: 1rem;\n    height: 1rem; }\n  .action_notification-wrapper .cancel-cross-2 {\n    fill: none;\n    stroke: var(--specials_buttons-links-and-highlights); }\n  .action_notification-wrapper .icon-clip-1,\n  .action_notification-wrapper .icon-plus-1,\n  .action_notification-wrapper .icon-edit-1,\n  .action_notification-wrapper .icon-help-1,\n  .action_notification-wrapper .icon-copy-1,\n  .action_notification-wrapper .icon-tamer-01,\n  .action_notification-wrapper .arrow-1,\n  .action_notification-wrapper .trans-history-1,\n  .action_notification-wrapper .trans-history-2,\n  .action_notification-wrapper .trans-history-3,\n  .action_notification-wrapper .cancel-cross-1 {\n    fill: var(--specials_buttons-links-and-highlights); }\n  .action_notification-wrapper .trans-history-4,\n  .action_notification-wrapper .cancel-cross-3 {\n    stroke: var(--specials_buttons-links-and-highlights); }\n\n.direction_ltr .action_notification-wrapper {\n  font-family: \"Raleway Medium\" !important; }\n  .direction_ltr .action_notification-wrapper.left {\n    left: 0; }\n  .direction_ltr .action_notification-wrapper.right {\n    right: 0; }\n  .direction_ltr .action_notification-wrapper .action_notification-image.rotate, .direction_ltr .action_notification-wrapper .action_notification-image.reverse, .direction_ltr .action_notification-wrapper .action_notification-image.rotate_ltr,\n  .direction_ltr .action_notification-wrapper .action_notification-svg svg.rotate,\n  .direction_ltr .action_notification-wrapper .action_notification-svg svg.reverse,\n  .direction_ltr .action_notification-wrapper .action_notification-svg svg.rotate_ltr {\n    transform: rotate(180deg); }\n  .direction_ltr .action_notification-wrapper.icon_on-right .action_notification-image {\n    margin-left: 0.25rem; }\n  .direction_ltr .action_notification-wrapper.icon_on-left .action_notification-image {\n    margin-right: 0.25rem; }\n  .direction_ltr .action_notification-wrapper.icon_on-left .action_notification-svg {\n    padding-right: 0.25rem; }\n  .direction_ltr .action_notification-wrapper.icon_on-right .action_notification-svg {\n    padding-left: 0.25rem; }\n\n.direction_rtl .action_notification-wrapper.left {\n  right: 0; }\n\n.direction_rtl .action_notification-wrapper.right {\n  left: 0; }\n\n.direction_rtl .action_notification-wrapper .action_notification-image.rotate, .direction_rtl .action_notification-wrapper .action_notification-image.reverse, .direction_rtl .action_notification-wrapper .action_notification-image.rotate_rtl,\n.direction_rtl .action_notification-wrapper .action_notification-svg svg.rotate,\n.direction_rtl .action_notification-wrapper .action_notification-svg svg.reverse,\n.direction_rtl .action_notification-wrapper .action_notification-svg svg.rotate_rtl {\n  transform: rotate(180deg); }\n\n.direction_rtl .action_notification-wrapper.icon_on-right .action_notification-image {\n  margin-right: 0.25rem; }\n\n.direction_rtl .action_notification-wrapper.icon_on-left .action_notification-image {\n  margin-left: 0.25rem; }\n\n.direction_rtl .action_notification-wrapper.icon_on-left .action_notification-svg {\n  padding-left: 0.25rem; }\n\n.direction_rtl .action_notification-wrapper.icon_on-right .action_notification-svg {\n  padding-right: 0.25rem; }\n\n.layout-mobile .action_notification-text {\n  color: var(--specials_buttons-links-and-highlights); }\n";
styleInject(css_248z$1);

var getClassNames = function getClassNames(status) {
  switch (status) {
    case 'success':
      return 'notification-success';
    case 'warning':
      return 'notification-warning';
    case 'information':
      return 'notification-info';
    case 'disabled':
      return 'notification-disabled';
    case 'loading':
      return 'notification-loading';
    default:
      return '';
  }
};
var ActionNotification = function ActionNotification(_ref) {
  var text = _ref.text,
    stringId = _ref.stringId,
    status = _ref.status,
    onClick = _ref.onClick,
    iconId = _ref.iconId,
    iconPath = _ref.iconPath,
    className = _ref.className,
    reverseImage = _ref.reverseImage,
    textPosition = _ref.textPosition,
    iconPosition = _ref.iconPosition,
    showPointer = _ref.showPointer,
    rotate = _ref.rotate,
    rotateIfLtr = _ref.rotateIfLtr,
    rotateIfRtl = _ref.rotateIfRtl,
    showActionText = _ref.showActionText,
    _ref$disable = _ref.disable,
    disable = _ref$disable === void 0 ? false : _ref$disable,
    icon = _ref.icon;
  // This is to prevent action when edit string or upload icons are clicked
  var onActionClick = function onActionClick(_ref2) {
    var _ref2$target$dataset = _ref2.target.dataset,
      dataset = _ref2$target$dataset === void 0 ? {} : _ref2$target$dataset;
    var stringId = dataset.stringId,
      iconId = dataset.iconId;
    if (!disable && !stringId && !iconId && onClick) {
      return onClick();
    }
  };
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: classnames__default['default']('action_notification-wrapper', {
      pointer: !disable && showPointer,
      left: textPosition === 'left',
      right: textPosition === 'right',
      'icon_on-right': iconPosition === 'right',
      'icon_on-left': iconPosition === 'left',
      disabled: disable
    }, className),
    onClick: onActionClick
  }, (showActionText || !reactDeviceDetect.isMobile) && /*#__PURE__*/React__default['default'].createElement("div", {
    className: classnames__default['default']('action_notification-text', getClassNames(status))
  }, text), iconPath && /*#__PURE__*/React__default['default'].createElement(Image, {
    iconId: iconId,
    stringId: stringId,
    icon: iconPath,
    alt: text,
    svgWrapperClassName: "action_notification-svg",
    imageWrapperClassName: classnames__default['default']('action_notification-image', {
      rotate_ltr: rotateIfLtr,
      rotate_rtl: rotateIfRtl,
      rotate: rotate,
      reverse: reverseImage
    })
  }), !iconPath && icon);
};
ActionNotification.defaultProps = {
  text: '',
  status: 'information',
  iconPath: '',
  className: '',
  reverseImage: false,
  textPosition: 'right',
  iconPosition: 'right',
  showPointer: true,
  rotate: false,
  rotateIfRtl: false,
  rotateIfLtr: false
};

var css_248z = ":root {\n  --labels_important-active-labels-text-graphics: #000000;\n  --labels_secondary-inactive-label-text-graphics: #808080;\n  --calculated_important-border: #000000b3; }\n\n.icon_title-wrapper {\n  margin-top: 2.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative; }\n  .icon_title-wrapper.underline:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background: var(--calculated_important-border);\n    position: absolute;\n    bottom: 0;\n    left: 0; }\n  .icon_title-wrapper .icon_title-image,\n  .icon_title-wrapper .icon_title-svg {\n    width: 5rem;\n    height: 5rem; }\n    .icon_title-wrapper .icon_title-image svg .risk-order-warning,\n    .icon_title-wrapper .icon_title-image svg .otp-key,\n    .icon_title-wrapper .icon_title-image svg .refer-icon,\n    .icon_title-wrapper .icon_title-image svg .send-request,\n    .icon_title-wrapper .icon_title-image svg .stake_icon,\n    .icon_title-wrapper .icon_title-image svg .otp-code,\n    .icon_title-wrapper .icon_title-image svg .st0,\n    .icon_title-wrapper .icon_title-image svg .st9,\n    .icon_title-wrapper .icon_title-image svg .st10,\n    .icon_title-wrapper .icon_title-image svg .trade-history-3,\n    .icon_title-wrapper .icon_title-image svg .contact-us-icon,\n    .icon_title-wrapper .icon_title-image svg .xht-coin-stack,\n    .icon_title-wrapper .icon_title-image svg .account-recovery-1,\n    .icon_title-wrapper .icon_title-image svg .account-recovery-success-1,\n    .icon_title-wrapper .icon_title-image svg .password-reset-1,\n    .icon_title-wrapper .icon_title-image svg .success-black-1,\n    .icon_title-wrapper .icon_title-image svg .check-st,\n    .icon_title-wrapper .icon_title-image svg .level_icon,\n    .icon_title-wrapper .icon_title-image svg .warning-icon,\n    .icon_title-wrapper .icon_title-image svg .transaction-history-2,\n    .icon_title-wrapper .icon_title-image svg .transaction-history-3,\n    .icon_title-wrapper .icon_title-image svg .resend-email-st,\n    .icon_title-wrapper .icon_title-image svg .email-confirmation,\n    .icon_title-wrapper .icon_title-svg svg .risk-order-warning,\n    .icon_title-wrapper .icon_title-svg svg .otp-key,\n    .icon_title-wrapper .icon_title-svg svg .refer-icon,\n    .icon_title-wrapper .icon_title-svg svg .send-request,\n    .icon_title-wrapper .icon_title-svg svg .stake_icon,\n    .icon_title-wrapper .icon_title-svg svg .otp-code,\n    .icon_title-wrapper .icon_title-svg svg .st0,\n    .icon_title-wrapper .icon_title-svg svg .st9,\n    .icon_title-wrapper .icon_title-svg svg .st10,\n    .icon_title-wrapper .icon_title-svg svg .trade-history-3,\n    .icon_title-wrapper .icon_title-svg svg .contact-us-icon,\n    .icon_title-wrapper .icon_title-svg svg .xht-coin-stack,\n    .icon_title-wrapper .icon_title-svg svg .account-recovery-1,\n    .icon_title-wrapper .icon_title-svg svg .account-recovery-success-1,\n    .icon_title-wrapper .icon_title-svg svg .password-reset-1,\n    .icon_title-wrapper .icon_title-svg svg .success-black-1,\n    .icon_title-wrapper .icon_title-svg svg .check-st,\n    .icon_title-wrapper .icon_title-svg svg .level_icon,\n    .icon_title-wrapper .icon_title-svg svg .warning-icon,\n    .icon_title-wrapper .icon_title-svg svg .transaction-history-2,\n    .icon_title-wrapper .icon_title-svg svg .transaction-history-3,\n    .icon_title-wrapper .icon_title-svg svg .resend-email-st,\n    .icon_title-wrapper .icon_title-svg svg .email-confirmation {\n      fill: var(--labels_important-active-labels-text-graphics); }\n    .icon_title-wrapper .icon_title-image svg .st1,\n    .icon_title-wrapper .icon_title-image svg .trade-history-1,\n    .icon_title-wrapper .icon_title-image svg .account-recovery-success-2,\n    .icon_title-wrapper .icon_title-image svg .password-reset-2,\n    .icon_title-wrapper .icon_title-image svg .transaction-history-1,\n    .icon_title-wrapper .icon_title-image svg .transaction-history-4,\n    .icon_title-wrapper .icon_title-image svg .st11,\n    .icon_title-wrapper .icon_title-image svg .wallet-coins-2,\n    .icon_title-wrapper .icon_title-svg svg .st1,\n    .icon_title-wrapper .icon_title-svg svg .trade-history-1,\n    .icon_title-wrapper .icon_title-svg svg .account-recovery-success-2,\n    .icon_title-wrapper .icon_title-svg svg .password-reset-2,\n    .icon_title-wrapper .icon_title-svg svg .transaction-history-1,\n    .icon_title-wrapper .icon_title-svg svg .transaction-history-4,\n    .icon_title-wrapper .icon_title-svg svg .st11,\n    .icon_title-wrapper .icon_title-svg svg .wallet-coins-2 {\n      fill: var(--labels_secondary-inactive-label-text-graphics); }\n    .icon_title-wrapper .icon_title-image svg .trade-history-2,\n    .icon_title-wrapper .icon_title-image svg .trade-history-4,\n    .icon_title-wrapper .icon_title-image svg .trade-history-5,\n    .icon_title-wrapper .icon_title-image svg .transaction-history-4,\n    .icon_title-wrapper .icon_title-svg svg .trade-history-2,\n    .icon_title-wrapper .icon_title-svg svg .trade-history-4,\n    .icon_title-wrapper .icon_title-svg svg .trade-history-5,\n    .icon_title-wrapper .icon_title-svg svg .transaction-history-4 {\n      stroke: none; }\n    .icon_title-wrapper .icon_title-image svg .wallet-coins-1,\n    .icon_title-wrapper .icon_title-svg svg .wallet-coins-1 {\n      stroke: var(--labels_important-active-labels-text-graphics); }\n    .icon_title-wrapper .icon_title-image svg .transaction-history-5,\n    .icon_title-wrapper .icon_title-svg svg .transaction-history-5 {\n      fill: none; }\n  .icon_title-wrapper .icon_title-svg svg {\n    width: 5rem;\n    height: 5rem; }\n  .icon_title-wrapper .icon_title-text {\n    font-size: 1.3rem;\n    margin: 1rem; }\n    .icon_title-wrapper .icon_title-text.title {\n      font-size: 3.5rem;\n      text-transform: capitalize; }\n  .icon_title-wrapper .auth_logo-wrapper {\n    height: 6rem !important;\n    width: 10rem !important;\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat; }\n\n.direction_ltr .icon_title-wrapper {\n  font-family: \"Raleway\"; }\n\n.layout-mobile .icon_title-wrapper .auth_logo-wrapper svg {\n  height: 8rem !important;\n  width: 15rem !important; }\n\n.layout-mobile .auth-container .action_notification-text,\n.layout-mobile .auth-container .font-small {\n  font-size: 1rem !important; }\n";
styleInject(css_248z);

var _excluded$5 = ["subtitle", "actionProps"];
var BasicIconTitle = function BasicIconTitle(_ref) {
  var text = _ref.text,
    stringId = _ref.stringId,
    iconPath = _ref.iconPath,
    iconId = _ref.iconId,
    textType = _ref.textType,
    underline = _ref.underline,
    className = _ref.className,
    _ref$imageWrapperClas = _ref.imageWrapperClassName,
    imageWrapperClassName = _ref$imageWrapperClas === void 0 ? '' : _ref$imageWrapperClas;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: classnames__default['default']('icon_title-wrapper', {
      underline: underline
    }, className)
  }, iconPath && /*#__PURE__*/React__default['default'].createElement(Image, {
    iconId: iconId,
    icon: iconPath,
    alt: text,
    wrapperClassName: imageWrapperClassName,
    imageWrapperClassName: "icon_title-image",
    svgWrapperClassName: "icon_title-svg",
    showUpload: false
  }), /*#__PURE__*/React__default['default'].createElement(Editable, {
    stringId: stringId,
    iconId: iconId
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: classnames__default['default']('icon_title-text', 'text-center', textType)
  }, text)));
};
var EnhancedIconTitle = function EnhancedIconTitle(_ref2) {
  var subtitle = _ref2.subtitle,
    actionProps = _ref2.actionProps,
    rest = _objectWithoutProperties$1(_ref2, _excluded$5);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: classnames__default['default']('w-100')
  }, /*#__PURE__*/React__default['default'].createElement(BasicIconTitle, rest), /*#__PURE__*/React__default['default'].createElement("div", {
    className: classnames__default['default']('d-flex', 'justify-content-between', 'p-relative')
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "font-weight-bold font-small"
  }, subtitle), /*#__PURE__*/React__default['default'].createElement("div", null, actionProps && /*#__PURE__*/React__default['default'].createElement(ActionNotification, actionProps))));
};
var IconTitle = function IconTitle(props) {
  if (props.subtitle || props.actionProps) {
    return /*#__PURE__*/React__default['default'].createElement(EnhancedIconTitle, props);
  }
  return /*#__PURE__*/React__default['default'].createElement(BasicIconTitle, props);
};
IconTitle.defaultProps = {
  iconPath: '',
  textType: '',
  underline: false
};

var FieldContent = function FieldContent(_ref) {
  var stringId = _ref.stringId,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    _ref$valid = _ref.valid,
    valid = _ref$valid === void 0 ? false : _ref$valid,
    _ref$hasValue = _ref.hasValue,
    hasValue = _ref$hasValue === void 0 ? false : _ref$hasValue,
    _ref$focused = _ref.focused,
    focused = _ref$focused === void 0 ? false : _ref$focused,
    children = _ref.children,
    _ref$hideUnderline = _ref.hideUnderline,
    hideUnderline = _ref$hideUnderline === void 0 ? false : _ref$hideUnderline,
    _ref$contentClassName = _ref.contentClassName,
    contentClassName = _ref$contentClassName === void 0 ? '' : _ref$contentClassName,
    _ref$hideCheck = _ref.hideCheck,
    hideCheck = _ref$hideCheck === void 0 ? false : _ref$hideCheck,
    _ref$outlineClassName = _ref.outlineClassName,
    outlineClassName = _ref$outlineClassName === void 0 ? '' : _ref$outlineClassName,
    displayError = _ref.displayError,
    error = _ref.error,
    _ref$ishorizontalfiel = _ref.ishorizontalfield,
    ishorizontalfield = _ref$ishorizontalfiel === void 0 ? false : _ref$ishorizontalfiel,
    dateFieldClassName = _ref.dateFieldClassName,
    warning = _ref.warning,
    preview = _ref.preview,
    getErrorLocalized = _ref.getErrorLocalized;
  return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: classnames__default['default']({
      'field-label-wrapper': ishorizontalfield
    })
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "d-flex"
  }, label && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "field-label"
  }, label, warning && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "d-flex align-items-baseline field_warning_wrapper"
  }, /*#__PURE__*/React__default['default'].createElement(icons.ExclamationCircleFilled, {
    className: "field_warning_icon"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "field_warning_text"
  }, warning))), /*#__PURE__*/React__default['default'].createElement(Editable, {
    stringId: stringId
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: classnames__default['default']('field-content')
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: classnames__default['default']('field-children', {
      valid: valid,
      custom: hideUnderline
    }, contentClassName, {
      'input-box-field': ishorizontalfield && dateFieldClassName === ''
    })
  }, children, !hideCheck && valid && hasValue && /*#__PURE__*/React__default['default'].createElement(icons.CheckOutlined, {
    className: "field-valid"
  })), !hideUnderline && /*#__PURE__*/React__default['default'].createElement("span", {
    className: classnames__default['default']('field-content-outline', outlineClassName, {
      focused: focused
    })
  }))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "field-label-wrapper"
  }, ishorizontalfield ? /*#__PURE__*/React__default['default'].createElement(React.Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "field-label"
  }), /*#__PURE__*/React__default['default'].createElement(FieldError, {
    displayError: displayError,
    error: error,
    preview: preview,
    getErrorLocalized: getErrorLocalized
  })) : null));
};
var FieldError = function FieldError(_ref2) {
  var error = _ref2.error,
    displayError = _ref2.displayError,
    className = _ref2.className,
    stringId = _ref2.stringId,
    preview = _ref2.preview,
    getErrorLocalized = _ref2.getErrorLocalized;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: classnames__default['default']('field-error-content', 'align-items-baseline', className, {
      'field-error-hidden': !displayError && !preview
    }),
    style: preview ? {
      height: 'auto'
    } : {}
  }, error && /*#__PURE__*/React__default['default'].createElement(Editable, {
    stringId: stringId
  }, /*#__PURE__*/React__default['default'].createElement(icons.ExclamationCircleFilled, {
    className: "field_warning_icon"
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "field-error-text"
  }, getErrorLocalized(error))), preview && /*#__PURE__*/React__default['default'].createElement(React.Fragment, null, preview));
};
var FieldWrapper = /*#__PURE__*/function (_Component) {
  _inherits$1(FieldWrapper, _Component);
  var _super = _createSuper(FieldWrapper);
  function FieldWrapper() {
    _classCallCheck$1(this, FieldWrapper);
    return _super.apply(this, arguments);
  }
  _createClass$1(FieldWrapper, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        label = _this$props.label,
        warning = _this$props.warning,
        stringId = _this$props.stringId,
        value = _this$props.input.value,
        _this$props$meta = _this$props.meta,
        _this$props$meta$acti = _this$props$meta.active,
        active = _this$props$meta$acti === void 0 ? false : _this$props$meta$acti,
        _this$props$meta$erro = _this$props$meta.error,
        error = _this$props$meta$erro === void 0 ? '' : _this$props$meta$erro,
        _this$props$meta$touc = _this$props$meta.touched,
        touched = _this$props$meta$touc === void 0 ? false : _this$props$meta$touc,
        _this$props$meta$inva = _this$props$meta.invalid,
        invalid = _this$props$meta$inva === void 0 ? false : _this$props$meta$inva,
        _this$props$focused = _this$props.focused,
        focused = _this$props$focused === void 0 ? false : _this$props$focused,
        _this$props$fullWidth = _this$props.fullWidth,
        fullWidth = _this$props$fullWidth === void 0 ? false : _this$props$fullWidth,
        _this$props$visited = _this$props.visited,
        visited = _this$props$visited === void 0 ? false : _this$props$visited,
        _this$props$hideUnder = _this$props.hideUnderline,
        hideUnderline = _this$props$hideUnder === void 0 ? false : _this$props$hideUnder,
        _this$props$className = _this$props.className,
        className = _this$props$className === void 0 ? '' : _this$props$className,
        _this$props$onClick = _this$props.onClick,
        onClick = _this$props$onClick === void 0 ? function () {} : _this$props$onClick,
        notification = _this$props.notification,
        _this$props$hideCheck = _this$props.hideCheck,
        hideCheck = _this$props$hideCheck === void 0 ? false : _this$props$hideCheck,
        _this$props$outlineCl = _this$props.outlineClassName,
        outlineClassName = _this$props$outlineCl === void 0 ? '' : _this$props$outlineCl,
        ishorizontalfield = _this$props.ishorizontalfield,
        preview = _this$props.preview,
        getErrorLocalized = _this$props.getErrorLocalized;
      var displayError = !(active || focused) && (visited || touched) && error;
      var hasValue = value || value === false;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: classnames__default['default']('field-wrapper', className, {
          error: displayError,
          inline: !fullWidth,
          'with-notification': !!notification,
          'field-valid': !invalid
        })
      }, /*#__PURE__*/React__default['default'].createElement(FieldContent, {
        stringId: stringId,
        label: label,
        warning: warning,
        valid: !invalid,
        hasValue: hasValue,
        focused: active || focused,
        hideUnderline: hideUnderline,
        hideCheck: hideCheck,
        outlineClassName: outlineClassName,
        onClick: onClick,
        displayError: displayError,
        error: error,
        ishorizontalfield: ishorizontalfield,
        dateFieldClassName: className,
        preview: preview,
        getErrorLocalized: getErrorLocalized
      }, children, notification && _typeof(notification) === 'object' && /*#__PURE__*/React__default['default'].createElement(ActionNotification, _extends$1({}, notification, {
        className: classnames__default['default']('pr-0 pl-0 no_bottom', {
          'with-tick-icon': fullWidth && !invalid && !hideCheck
        }),
        showActionText: true
      }))), !ishorizontalfield ? /*#__PURE__*/React__default['default'].createElement(FieldError, {
        displayError: displayError,
        error: error,
        preview: preview,
        getErrorLocalized: getErrorLocalized
      }) : null);
    }
  }]);
  return FieldWrapper;
}(React.Component);
FieldWrapper.defaultProps = {
  meta: {},
  input: {
    value: ''
  },
  getErrorLocalized: function getErrorLocalized(error) {
    return error;
  }
};

var _excluded$4 = ["input", "type", "placeholder", "meta", "onClick", "fullWidth", "information", "notification", "options", "hideCheck", "outlineClassName", "stringId"];
var renderIcon = function renderIcon(_ref) {
  var _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? '' : _ref$icon,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label;
  return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("img", {
    className: "input_icon",
    src: icon,
    alt: label
  }));
};
var InputField$1 = function InputField(props) {
  var input = props.input,
    type = props.type,
    placeholder = props.placeholder,
    _props$meta = props.meta,
    touched = _props$meta.touched,
    error = _props$meta.error,
    active = _props$meta.active;
    props.onClick;
    props.fullWidth;
    props.information;
    props.notification;
    var options = props.options;
    props.hideCheck;
    props.outlineClassName;
    props.stringId;
    var rest = _objectWithoutProperties$1(props, _excluded$4);
  var displayError = touched && error && !active;
  // const displayCheck = !fullWidth && input.value && !displayError && !active;
  return /*#__PURE__*/React__default['default'].createElement(FieldWrapper, props, /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      display: 'flex'
    }
  }, options && renderIcon(options), /*#__PURE__*/React__default['default'].createElement("input", _extends$1({
    placeholder: placeholder,
    className: classnames__default['default']('input_field-input', {
      error: displayError
    }),
    type: type
  }, input, rest))));
};

var _excluded$3 = ["input", "type", "placeholder", "meta", "onClick", "fullWidth", "information", "notification", "rows"];
var TextAreaField = function TextAreaField(props) {
  var input = props.input,
    type = props.type,
    placeholder = props.placeholder,
    _props$meta = props.meta,
    touched = _props$meta.touched,
    error = _props$meta.error,
    active = _props$meta.active;
    props.onClick;
    props.fullWidth;
    props.information;
    props.notification;
    var rows = props.rows,
    rest = _objectWithoutProperties$1(props, _excluded$3);
  var displayError = touched && error && !active;
  // const displayCheck = !fullWidth && input.value && !displayError && !active;
  return /*#__PURE__*/React__default['default'].createElement(FieldWrapper, props, /*#__PURE__*/React__default['default'].createElement("textarea", _extends$1({
    rows: rows ? rows : '1',
    placeholder: placeholder,
    className: classnames__default['default']('input_field-input', {
      error: displayError
    }),
    type: type
  }, input, rest)));
};

var FileField = /*#__PURE__*/function (_Component) {
  _inherits$1(FileField, _Component);
  var _super = _createSuper(FileField);
  function FileField() {
    var _this;
    _classCallCheck$1(this, FileField);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      filename: '',
      fileArray: []
    });
    _defineProperty(_assertThisInitialized(_this), "onClick", function (ev) {
      if (_this.fileInput) {
        _this.fileInput.click();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onChange", function (ev) {
      if (_this.props.multiple) {
        if (_this.props.length >= ev.target.files.length && _this.state.fileArray.length + ev.target.files.length <= _this.props.length) {
          var newFiles = [];
          Object.entries(ev.target.files).map(function (_ref, index) {
            var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0];
              _ref2[1];
            return newFiles.push(ev.target.files[key]);
          });
          var joined = _this.state.fileArray.concat(newFiles);
          _this.setState({
            fileArray: joined
          }, function () {
            _this.props.input.onChange(_this.state.fileArray);
          });
        }
      } else {
        var file = ev.target.files[0];
        _this.setState({
          filename: file.name
        });
        _this.props.input.onChange(file);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "setRef", function (el) {
      _this.fileInput = el;
    });
    return _this;
  }
  _createClass$1(FileField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        placeholder = _this$props.placeholder,
        multiple = _this$props.multiple,
        length = _this$props.length,
        _this$props$strings = _this$props.strings,
        STRINGS = _this$props$strings === void 0 ? {} : _this$props$strings;
      var _this$state = this.state,
        filename = _this$state.filename,
        fileArray = _this$state.fileArray;
      var input = {
        onChange: this.onChange,
        ref: this.setRef,
        multiple: multiple ? multiple : false,
        accept: 'image/*',
        style: {
          display: 'none'
        }
      };
      return /*#__PURE__*/React__default['default'].createElement(FieldWrapper, _extends$1({}, this.props, {
        onClick: this.onClick
      }), /*#__PURE__*/React__default['default'].createElement("div", {
        onClick: fileArray.length !== length ? this.onClick : '',
        className: multiple && fileArray.length > 0 ? 'pointer multiple_file_wrapper' : 'pointer file_wrapper'
      }, multiple && fileArray.length > 0 ? fileArray.map(function (file, index) {
        return /*#__PURE__*/React__default['default'].createElement("div", {
          key: index,
          className: classnames__default['default']('text_overflow', {
            placeholder: !file.name
          })
        }, file.name);
      }) : /*#__PURE__*/React__default['default'].createElement("div", {
        className: classnames__default['default']('text_overflow', {
          placeholder: !filename
        })
      }, filename ? filename : placeholder), multiple ? fileArray.length !== length && multiple && /*#__PURE__*/React__default['default'].createElement(ActionNotification, {
        stringId: "ADD_FILES",
        text: STRINGS['ADD_FILES'] || 'ADD_FILES',
        status: "information",
        icon: /*#__PURE__*/React__default['default'].createElement(icons.PaperClipOutlined, null),
        className: "no_bottom pr-0 pl-0 paper-clip-icon"
      }) : !filename && /*#__PURE__*/React__default['default'].createElement(ActionNotification, {
        stringId: "ADD_FILES",
        text: STRINGS['ADD_FILES'] || 'ADD_FILES',
        status: "information",
        icon: /*#__PURE__*/React__default['default'].createElement(icons.PaperClipOutlined, null),
        className: "no_bottom pr-0 pl-0 paper-clip-icon"
      }), /*#__PURE__*/React__default['default'].createElement("input", _extends$1({
        type: "file",
        className: "input_file"
      }, input))));
    }
  }]);
  return FileField;
}(React.Component);

var keycode$1 = {exports: {}};

(function (module, exports) {
// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */

function keyCode(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode;
    if (hasKeyCode) searchInput = hasKeyCode;
  }

  // Numbers
  if ('number' === typeof searchInput) return names[searchInput]

  // Everything else (cast to string)
  var search = String(searchInput);

  // check codes
  var foundNamedKey = codes[search.toLowerCase()];
  if (foundNamedKey) return foundNamedKey

  // check aliases
  var foundNamedKey = aliases[search.toLowerCase()];
  if (foundNamedKey) return foundNamedKey

  // weird character?
  if (search.length === 1) return search.charCodeAt(0)

  return undefined
}

/**
 * Compares a keyboard event with a given keyCode or keyName.
 *
 * @param {Event} event Keyboard event that should be tested
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Boolean}
 * @api public
 */
keyCode.isEventKey = function isEventKey(event, nameOrCode) {
  if (event && 'object' === typeof event) {
    var keyCode = event.which || event.keyCode || event.charCode;
    if (keyCode === null || keyCode === undefined) { return false; }
    if (typeof nameOrCode === 'string') {
      // check codes
      var foundNamedKey = codes[nameOrCode.toLowerCase()];
      if (foundNamedKey) { return foundNamedKey === keyCode; }
    
      // check aliases
      var foundNamedKey = aliases[nameOrCode.toLowerCase()];
      if (foundNamedKey) { return foundNamedKey === keyCode; }
    } else if (typeof nameOrCode === 'number') {
      return nameOrCode === keyCode;
    }
    return false;
  }
};

exports = module.exports = keyCode;

/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */

var codes = exports.code = exports.codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'left command': 91,
  'right command': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222
};

// Helper aliases

var aliases = exports.aliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'spacebar': 32,
  'pgup': 33,
  'pgdn': 34,
  'ins': 45,
  'del': 46,
  'cmd': 91
};

/*!
 * Programatically add the following
 */

// lower case chars
for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32;

// numbers
for (var i = 48; i < 58; i++) codes[i - 48] = i;

// function keys
for (i = 1; i < 13; i++) codes['f'+i] = i + 111;

// numpad keys
for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96;

/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */

var names = exports.names = exports.title = {}; // title for backward compat

// Create reverse mapping
for (i in codes) names[codes[i]] = i;

// Add aliases
for (var alias in aliases) {
  codes[alias] = aliases[alias];
}
}(keycode$1, keycode$1.exports));

var keycode = keycode$1.exports;

var DropdownField = /*#__PURE__*/function (_Component) {
  _inherits$1(DropdownField, _Component);
  var _super = _createSuper(DropdownField);
  function DropdownField() {
    var _this;
    _classCallCheck$1(this, DropdownField);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: false,
      visited: false,
      selectedItem: undefined,
      filter: ''
    });
    _defineProperty(_assertThisInitialized(_this), "onToogleOpen", function (event) {
      event.preventDefault();
      if (!_this.props.disabled) {
        _this.onChangeOpen(!_this.state.isOpen);
        if (_this.input && _this.props.autocomplete) {
          setTimeout(function () {
            _this.input.focus();
          }, 150);
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onChangeOpen", function () {
      var isOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      _this.setState({
        isOpen: isOpen,
        visited: true
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onSelectOption", function (option) {
      var change = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return function () {
        if (option.value === undefined) {
          _this.setState({
            isOpen: false,
            filter: ''
          });
        } else {
          _this.setState({
            selectedItem: option,
            isOpen: false,
            filter: ''
          });
          if (change) {
            _this.props.input.onChange(option.value);
          }
        }
      };
    });
    _defineProperty(_assertThisInitialized(_this), "setValue", function (value) {
      var change = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var option = _this.props.options.find(function (option) {
        return option.value === value;
      });
      if (option) {
        _this.onSelectOption(option, change)();
      } else {
        _this.onChangeOpen(false);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "setValueByLabel", function (label) {
      var option = _this.props.options.find(_this.filterOption(label));
      if (option) {
        _this.onSelectOption(option)();
      } else {
        _this.onChangeOpen(false);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "renderIcon", function (_ref) {
      var _ref$icon = _ref.icon,
        icon = _ref$icon === void 0 ? '' : _ref$icon,
        _ref$label = _ref.label,
        label = _ref$label === void 0 ? '' : _ref$label;
      if (icon && typeof icon === 'string') {
        return icon.indexOf('.svg') > 0 ? /*#__PURE__*/React__default['default'].createElement(reactSvg.ReactSVG, {
          src: icon,
          fallback: function fallback() {
            return /*#__PURE__*/React__default['default'].createElement("span", null, label);
          },
          className: classnames__default['default']('icon', 'option-icon')
        }) : /*#__PURE__*/React__default['default'].createElement("img", {
          className: "icon",
          src: icon,
          alt: label
        });
      }
      return icon;
    });
    _defineProperty(_assertThisInitialized(_this), "renderOption", function (option, index) {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        id: "".concat(_this.props.input.name, "-").concat(option.value, "-").concat(index),
        key: "".concat(_this.props.input.name, "-").concat(option.value, "-").concat(index),
        onClick: _this.onSelectOption(option),
        className: classnames__default['default']('dropdown-option', {
          pointer: !_this.props.disabled
        })
      }, _this.renderIcon(option), option.label);
    });
    _defineProperty(_assertThisInitialized(_this), "renderOptions", function (options) {
      var _this$props$strings = _this.props.strings,
        STRINGS = _this$props$strings === void 0 ? {} : _this$props$strings;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: classnames__default['default']('dropdown-options-wrapper')
      }, options.length > 0 ? options.map(_this.renderOption) : _this.renderOption({
        value: undefined,
        label: STRINGS['NO_OPTIONS'] || 'NO OPTIONS'
      }, 0));
    });
    _defineProperty(_assertThisInitialized(_this), "clickAwayListener", function (event) {
      if (_this.state.isOpen && !event.target.id && event.target.className.indexOf('dropdown') === -1) {
        _this.onChangeOpen(false);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onChangeAutocomplete", function (event) {
      var filter = event.target.value;
      _this.setState({
        filter: filter
      });
    });
    _defineProperty(_assertThisInitialized(_this), "filterOption", function (filter) {
      var filterLC = filter.toLowerCase();
      return function (option) {
        var label = option.label.toLowerCase();
        return label.indexOf(filterLC) !== -1;
      };
    });
    _defineProperty(_assertThisInitialized(_this), "setRefInput", function (el) {
      _this.input = el;
    });
    _defineProperty(_assertThisInitialized(_this), "onKeyDownHandler", function (event) {
      switch (keycode(event)) {
        case 'esc':
          _this.onChangeOpen(false);
          break;
        case 'enter':
          _this.setValueByLabel(_this.state.filter);
          break;
      }
    });
    return _this;
  }
  _createClass$1(DropdownField, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.props.input.value || this.props.input.value === false) {
        this.setValue(this.props.input.value);
      } else if (this.props.defaultValue || this.props.defaultValue === false) {
        this.setValue(this.props.defaultValue, true);
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.input.value !== this.props.input.value) {
        this.setValue(nextProps.input.value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        options = _this$props.options,
        placeholder = _this$props.placeholder,
        autocomplete = _this$props.autocomplete,
        disabled = _this$props.disabled;
      var _this$state = this.state,
        isOpen = _this$state.isOpen,
        selectedItem = _this$state.selectedItem,
        filter = _this$state.filter,
        visited = _this$state.visited;
      var filteredOptions = autocomplete ? options.filter(this.filterOption(filter)) : options;
      return /*#__PURE__*/React__default['default'].createElement(FieldWrapper, _extends$1({}, this.props, {
        focused: isOpen,
        visited: visited
      }), /*#__PURE__*/React__default['default'].createElement(EventListener__default['default'], {
        target: "document",
        onClick: this.clickAwayListener
      }), autocomplete && isOpen && /*#__PURE__*/React__default['default'].createElement(EventListener__default['default'], {
        target: "document",
        onKeyDown: this.onKeyDownHandler
      }), /*#__PURE__*/React__default['default'].createElement("div", {
        className: classnames__default['default']('dropdown-content', {
          'dropdown-triangle': !disabled,
          disabled: disabled
        }),
        onClick: this.onToogleOpen
      }, autocomplete && /*#__PURE__*/React__default['default'].createElement("input", {
        id: "input-autocomplete",
        className: classnames__default['default']('input_field-input', {
          hidden: !isOpen
        }),
        type: "text",
        onChange: this.onChangeAutocomplete,
        placeholder: placeholder,
        ref: this.setRefInput,
        value: filter
      }), selectedItem && !isOpen ? this.renderOption(selectedItem) : /*#__PURE__*/React__default['default'].createElement("div", {
        className: classnames__default['default']('dropdown-placeholder placeholder', {
          hidden: autocomplete && isOpen
        })
      }, placeholder)), isOpen && this.renderOptions(filteredOptions));
    }
  }]);
  return DropdownField;
}(React.Component);
DropdownField.defaultProps = {
  autocomplete: false
};

var _excluded$2 = ["input", "label", "type", "reverse"];
var InputField = function InputField(props) {
  var input = props.input,
    label = props.label,
    type = props.type,
    reverse = props.reverse,
    rest = _objectWithoutProperties$1(props, _excluded$2);
  return /*#__PURE__*/React__default['default'].createElement(FieldWrapper, _extends$1({
    hideUnderline: true,
    className: classnames__default['default']('checkfield-wrapper', 'd-flex', 'flex-column'),
    type: type
  }, rest), /*#__PURE__*/React__default['default'].createElement("div", {
    className: classnames__default['default']('checkfield-input-wrapper', 'd-flex', reverse ? 'flex-row-reverse' : '')
  }, /*#__PURE__*/React__default['default'].createElement("input", _extends$1({
    type: type
  }, input, {
    className: "checkfield-input"
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "checkfield-label field-label"
  }, label)));
};

var _excluded$1 = ["input", "type", "placeholder", "meta", "onClick", "fullWidth", "inputType", "information", "strings"];
var EditableInputField = /*#__PURE__*/function (_Component) {
  _inherits$1(EditableInputField, _Component);
  var _super = _createSuper(EditableInputField);
  function EditableInputField() {
    var _this;
    _classCallCheck$1(this, EditableInputField);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      isEditable: false
    });
    _defineProperty(_assertThisInitialized(_this), "toogleEditable", function () {
      _this.setState({
        isEditable: !_this.state.isEditable
      }, function () {
        _this.toogleFocus();
      });
    });
    _defineProperty(_assertThisInitialized(_this), "toogleFocus", function () {
      if (_this.inputElement) {
        if (_this.state.isEditable) {
          _this.inputElement.focus();
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "setInputRef", function (el) {
      _this.inputElement = el;
    });
    return _this;
  }
  _createClass$1(EditableInputField, [{
    key: "render",
    value: function render() {
      var isEditable = this.state.isEditable;
      var _this$props = this.props,
        input = _this$props.input;
        _this$props.type;
        var placeholder = _this$props.placeholder,
        _this$props$meta = _this$props.meta,
        touched = _this$props$meta.touched,
        error = _this$props$meta.error,
        active = _this$props$meta.active;
        _this$props.onClick;
        _this$props.fullWidth;
        var inputType = _this$props.inputType;
        _this$props.information;
        var _this$props$strings = _this$props.strings,
        STRINGS = _this$props$strings === void 0 ? {} : _this$props$strings,
        rest = _objectWithoutProperties$1(_this$props, _excluded$1);
      var displayError = touched && error && !active;
      return /*#__PURE__*/React__default['default'].createElement(FieldWrapper, _extends$1({}, this.props, {
        className: "with-notification"
      }), /*#__PURE__*/React__default['default'].createElement("input", _extends$1({
        placeholder: placeholder,
        className: classnames__default['default']('input_field-input', {
          error: displayError,
          cursor_disabled: !isEditable
        }),
        type: inputType
      }, input, rest, {
        disabled: !isEditable,
        ref: this.setInputRef
      })), /*#__PURE__*/React__default['default'].createElement(ActionNotification, {
        stringId: "EDIT_TEXT",
        text: STRINGS['EDIT_TEXT'] || 'Edit',
        status: "information",
        icon: /*#__PURE__*/React__default['default'].createElement(icons.EditFilled, null),
        className: "no_bottom pr-0 pl-0",
        onClick: this.toogleEditable,
        showActionText: true
      }));
    }
  }]);
  return EditableInputField;
}(React.Component);

var dist=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=React__default['default'];},function(e,t){e.exports=PropTypes__default['default'];},function(e,t,n){n.r(t),n.d(t,"ReCaptcha",(function(){return v})),n.d(t,"loadReCaptcha",(function(){return h}));var r=n(0),o=n.n(r);n(1);function a(e){return (a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}function u(e,t){return (u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return !1;if(Reflect.construct.sham)return !1;if("function"==typeof Proxy)return !0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return !1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o);}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return !t||"object"!==a(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return (p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d,y=function(){return "undefined"!=typeof window&&void 0!==window.grecaptcha&&void 0!==window.grecaptcha.execute},b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t);}(f,e);var t,n,a=i(f);function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),s(l(t=a.call(this,e)),"execute",(function(){var e=t.props,n=e.sitekey,r=e.verifyCallback,o=e.action;t.state.ready&&window.grecaptcha.execute(n,{action:o}).then((function(e){void 0!==r&&r(e);}));})),s(l(t),"_updateReadyState",(function(){y()&&(t.setState((function(){return {ready:!0}})),clearInterval(d));})),t.state={ready:y()},t}return t=f,(n=[{key:"componentDidMount",value:function(){this.state.ready?this.execute():d=setInterval(this._updateReadyState,1e3);}},{key:"componentDidUpdate",value:function(e,t){this.state.ready&&!t.ready&&this.execute();}},{key:"componentWillUnmount",value:function(){clearInterval(d);}},{key:"render",value:function(){return this.state.ready?o.a.createElement("div",{id:this.props.elementID,"data-verifycallbackname":this.props.verifyCallbackName}):o.a.createElement("div",{id:this.props.elementID,className:"g-recaptcha"})}}])&&c(t.prototype,n),f}(r.Component);b.defaultProps={elementID:"g-recaptcha",verifyCallbackName:"verifyCallback"};var v=b,h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=document.createElement("script");!window.onLoadCaptchaV3Callback&&t&&(window.onLoadCaptchaV3Callback=t),n.src="https://www.recaptcha.net/recaptcha/api.js?onload=onLoadCaptchaV3Callback&render=".concat(e),document.body.appendChild(n);};}]);

var DEFAULT_CAPTCHA_SITEKEY = '6LeuOKoUAAAAAGVoZcSWXJH60GHt4crvIaNXn1YA'; // default recaptcha v3; // default recaptcha v3
var CaptchaField = /*#__PURE__*/function (_Component) {
  _inherits$1(CaptchaField, _Component);
  var _super = _createSuper(CaptchaField);
  function CaptchaField() {
    var _this;
    _classCallCheck$1(this, CaptchaField);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      active: true,
      ready: false
    });
    _defineProperty(_assertThisInitialized(_this), "setRef", function (el) {
      _this.captcha = el;
    });
    _defineProperty(_assertThisInitialized(_this), "onVerifyCallback", function (data) {
      _this.props.input.onChange(data);
    });
    _defineProperty(_assertThisInitialized(_this), "onExpiredCallback", function () {
      _this.props.input.onChange('');
      _this.captcha.execute();
    });
    return _this;
  }
  _createClass$1(CaptchaField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.expiryTime = setInterval(function () {
        _this2.captcha.execute();
      }, 120000);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.input.value === '' && nextProps.input.value !== this.props.input.value) {
        this.captcha.execute();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.expiryTime) {
        clearInterval(this.expiryTime);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        language = _this$props.language,
        _this$props$constants = _this$props.constants.captcha,
        captcha = _this$props$constants === void 0 ? {} : _this$props$constants;
      var _this$state = this.state,
        ready = _this$state.ready,
        active = _this$state.active;
      return active && /*#__PURE__*/React__default['default'].createElement("div", {
        className: classnames__default['default']('field-wrapper', 'captcha-wrapper', {
          hidden: !ready
        })
      }, /*#__PURE__*/React__default['default'].createElement(dist.ReCaptcha, {
        ref: this.setRef,
        sitekey: captcha.site_key || DEFAULT_CAPTCHA_SITEKEY,
        verifyCallback: this.onVerifyCallback,
        expiredCallback: this.onExpiredCallback,
        lang: language
      }));
    }
  }]);
  return CaptchaField;
}(React.Component);

var Component = {};

var toggleSelection = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};

var deselectCurrent = toggleSelection;

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
};

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // avoid screen readers from reading out loud the text
    mark.ariaHidden = "true";
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

var copyToClipboard = copy;

Object.defineProperty(Component, "__esModule", {
  value: true
});
Component.CopyToClipboard = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = React__default['default'];

var _react2 = _interopRequireDefault(_react);

var _copyToClipboard = copyToClipboard;

var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CopyToClipboard$1 = Component.CopyToClipboard = function (_React$PureComponent) {
  _inherits(CopyToClipboard, _React$PureComponent);

  function CopyToClipboard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CopyToClipboard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CopyToClipboard.__proto__ || Object.getPrototypeOf(CopyToClipboard)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (event) {
      var _this$props = _this.props,
          text = _this$props.text,
          onCopy = _this$props.onCopy,
          children = _this$props.children,
          options = _this$props.options;


      var elem = _react2.default.Children.only(children);

      var result = (0, _copyToClipboard2.default)(text, options);

      if (onCopy) {
        onCopy(text, result);
      }

      // Bypass onClick if it was present
      if (elem && elem.props && typeof elem.props.onClick === 'function') {
        elem.props.onClick(event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CopyToClipboard, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
          _props.text;
          _props.onCopy;
          _props.options;
          var children = _props.children,
          props = _objectWithoutProperties(_props, ['text', 'onCopy', 'options', 'children']);

      var elem = _react2.default.Children.only(children);

      return _react2.default.cloneElement(elem, _extends({}, props, { onClick: this.onClick }));
    }
  }]);

  return CopyToClipboard;
}(_react2.default.PureComponent);

CopyToClipboard$1.defaultProps = {
  onCopy: undefined,
  options: undefined
};

var _require = Component,
    CopyToClipboard = _require.CopyToClipboard;

CopyToClipboard.CopyToClipboard = CopyToClipboard;
var lib = CopyToClipboard;

var _excluded = ["input", "className", "allowCopy", "onCopy", "copyOnClick"];
var DumbField = function DumbField(_ref) {
  var value = _ref.input.value,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$allowCopy = _ref.allowCopy,
    allowCopy = _ref$allowCopy === void 0 ? false : _ref$allowCopy,
    onCopy = _ref.onCopy,
    _ref$copyOnClick = _ref.copyOnClick,
    copyOnClick = _ref$copyOnClick === void 0 ? false : _ref$copyOnClick,
    rest = _objectWithoutProperties$1(_ref, _excluded);
  var renderCopy = function renderCopy(text, onCopy) {
    var _rest = _objectSpread2({}, rest),
      _rest$strings = _rest.strings,
      STRINGS = _rest$strings === void 0 ? {} : _rest$strings;
    return /*#__PURE__*/React__default['default'].createElement(lib.CopyToClipboard, {
      text: text
    }, /*#__PURE__*/React__default['default'].createElement(ActionNotification, {
      status: "information",
      stringId: "COPY_TEXT",
      text: STRINGS['COPY_TEXT'] || 'Copy',
      icon: /*#__PURE__*/React__default['default'].createElement(icons.CopyOutlined, null),
      className: "copy-wrapper",
      onClick: onCopy
    }));
  };
  return /*#__PURE__*/React__default['default'].createElement(FieldWrapper, _extends$1({
    className: classnames__default['default']('dumb-field-wrapper', className)
  }, rest), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "d-flex justify-content-between"
  }, copyOnClick ? /*#__PURE__*/React__default['default'].createElement(lib.CopyToClipboard, {
    text: value
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "pointer address-line",
    onClick: onCopy
  }, value)) : value, value && allowCopy && renderCopy(value, onCopy)));
};

var getFormFieldComponentByType = function getFormFieldComponentByType(type) {
  switch (type) {
    case 'captcha':
      return CaptchaField;
    case 'hidden':
      return function () {
        return /*#__PURE__*/React__default['default'].createElement("div", {
          className: "hidden"
        });
      };
    case 'file':
      return FileField;
    case 'dumb':
      return DumbField;
    case 'select':
    case 'autocomplete':
      return DropdownField;
    /*case 'date-dropdown':
      return DropdownDateField;
    case 'date':
      return DateField;*/
    case 'checkbox':
      return InputField;
    case 'editable':
      return EditableInputField;
    case 'textarea':
      return TextAreaField;
    /*case 'toggle':
      return ToggleField;*/
    case 'text':
    case 'password':
    case 'email':
    default:
      return InputField$1;
  }
};

exports.ActionNotification = ActionNotification;
exports.Button = Button;
exports.Editable = Editable;
exports.IconTitle = IconTitle;
exports.Image = Image;
exports.PanelInformationRow = PanelInformationRow;
exports.getFormFieldComponentByType = getFormFieldComponentByType;
//# sourceMappingURL=index.js.map
