webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/signature-pad.js":
/*!*************************************!*\
  !*** ./components/signature-pad.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! signature_pad */ "./node_modules/signature_pad/dist/signature_pad.m.js");
var _this = undefined,
    _jsxFileName = "/Users/ronmasas/Desktop/coronaforms.org/frontend/components/signature-pad.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var el = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      pad = _useState[0],
      setPad = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _ = new signature_pad__WEBPACK_IMPORTED_MODULE_1__["default"](el.current);

    _.on("end", props.onChange(_.toDataURL("image/svg+xml")));

    setPad(_);
  }, []);
  return __jsx("div", {
    style: {
      width: 304,
      margin: "auto"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 12
    }
  }, __jsx("div", {
    style: {
      backgroundColor: "#eee"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("canvas", {
    style: {
      border: "2px solid #ccc"
    },
    ref: el,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  })), __jsx("button", {
    onClick: function onClick() {
      return pad.clear();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "clear"));
});

/***/ })

})
//# sourceMappingURL=index.js.7da1d1f0c13184e87de8.hot-update.js.map