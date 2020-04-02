webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/SignaturePad.js":
/*!************************************!*\
  !*** ./components/SignaturePad.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! signature_pad */ "./node_modules/signature_pad/dist/signature_pad.m.js");
/* harmony import */ var _strings_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../strings.json */ "./strings.json");
var _strings_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../strings.json */ "./strings.json", 1);
var _this = undefined,
    _jsxFileName = "/Users/ronmasas/Desktop/coronaforms.org/ui/components/SignaturePad.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var el = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      pad = _useState[0],
      setPad = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var _ = new signature_pad__WEBPACK_IMPORTED_MODULE_2__["default"](el.current, {
      onEnd: function onEnd() {
        props.onChange(_.toDataURL("image/png"));
      }
    });

    setPad(_);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 12
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2057520806",
    __self: _this
  }, ".signature_wrapper.jsx-2057520806{width:275px;margin:auto;background:#eee;position:relative;border:2px solid #ccc;}.signature_wrapper.jsx-2057520806 button.jsx-2057520806{position:absolute;left:5px;bottom:5px;padding:5px 10px;border:none;outline:none;background:#F8D57E;color:#000;cursor:pointer;border-radius:3px;font-size:14px;font-weight:bold;opacity:0.7;}.signature_wrapper.jsx-2057520806 button.jsx-2057520806:hover{opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb25tYXNhcy9EZXNrdG9wL2Nvcm9uYWZvcm1zLm9yZy91aS9jb21wb25lbnRzL1NpZ25hdHVyZVBhZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQm9CLEFBRzZCLEFBT00sQUFjb0IsVUFBQyxFQXBCM0IsTUFPSCxNQU5PLEdBT0wsV0FDTSxFQVBDLGVBUU4sR0FQVSxTQVFULGFBUGpCLEFBUXVCLG1CQUNSLFdBQ0ksZUFDRyxrQkFDSCxlQUNFLGlCQUNMLFlBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9yb25tYXNhcy9EZXNrdG9wL2Nvcm9uYWZvcm1zLm9yZy91aS9jb21wb25lbnRzL1NpZ25hdHVyZVBhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTaWduYXR1cmVQYWQgZnJvbSBcInNpZ25hdHVyZV9wYWRcIjtcbmltcG9ydCBzdHJpbmdzIGZyb20gXCIuLi9zdHJpbmdzLmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gICAgY29uc3QgZWwgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgW3BhZCwgc2V0UGFkXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IF8gPSBuZXcgU2lnbmF0dXJlUGFkKGVsLmN1cnJlbnQsIHtcbiAgICAgICAgICAgIG9uRW5kOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UoXy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRQYWQoXyk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIDxGcmFnbWVudD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnNpZ25hdHVyZV93cmFwcGVye1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNzVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zaWduYXR1cmVfd3JhcHBlciBidXR0b257XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjhENTdFO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zaWduYXR1cmVfd3JhcHBlciBidXR0b246aG92ZXIge29wYWNpdHk6IDE7fVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbmF0dXJlX3dyYXBwZXJcIj5cbiAgICAgICAgICAgIDxjYW52YXMgd2lkdGg9XCIyNzVcIiBoZWlnaHQ9XCIxNTBcIiByZWY9e2VsfT48L2NhbnZhcz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcGFkLmNsZWFyKCl9IHR5cGU9XCJidXR0b25cIj57c3RyaW5nc1twcm9wcy5sYW5ndWFnZV0uQ29tbW9uLlJlc2V0fTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50Pjtcbn0iXX0= */\n/*@ sourceURL=/Users/ronmasas/Desktop/coronaforms.org/ui/components/SignaturePad.js */"), __jsx("div", {
    className: "jsx-2057520806" + " " + "signature_wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("canvas", {
    width: "275",
    height: "150",
    ref: el,
    className: "jsx-2057520806",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }), __jsx("button", {
    onClick: function onClick() {
      return pad.clear();
    },
    type: "button",
    className: "jsx-2057520806",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[props.language].Common.Reset)));
});

/***/ })

})
//# sourceMappingURL=_app.js.d0f90162fd46af240e40.hot-update.js.map