webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/NewsletterForm.js":
/*!**************************************!*\
  !*** ./components/NewsletterForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./components/Input.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
/* harmony import */ var _strings_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../strings.json */ "./strings.json");
var _strings_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../strings.json */ "./strings.json", 1);
var _jsxFileName = "/Users/ronmasas/Desktop/coronaforms.org/ui/components/NewsletterForm.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function NewsletterForm(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      value = _useState[0],
      setValue = _useState[1];

  function handleSubmit(event) {
    event.preventDefault();

    if (typeof props.onSubmit === "function") {
      props.onSubmit(value);
    }
  }

  function handleChange(e) {
    if (e && e.target) {
      setValue(e.target.value);
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2804353344",
    dynamic: [props.rtl ? "right" : "left"],
    __self: this
  }, "p.small.__jsx-style-dynamic-selector{font-size:15px;margin:0;margin-top:7.5px;text-align:".concat(props.rtl ? "right" : "left", ";color:#111;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb25tYXNhcy9EZXNrdG9wL2Nvcm9uYWZvcm1zLm9yZy91aS9jb21wb25lbnRzL05ld3NsZXR0ZXJGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCb0IsQUFDc0IsZUFBUSxTQUFnQixpQkFBdUMsd0NBQVUsV0FBQyIsImZpbGUiOiIvVXNlcnMvcm9ubWFzYXMvRGVza3RvcC9jb3JvbmFmb3Jtcy5vcmcvdWkvY29tcG9uZW50cy9OZXdzbGV0dGVyRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dCBmcm9tIFwiLi9JbnB1dFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCBzdHJpbmdzIGZyb20gXCIuLi9zdHJpbmdzLmpzb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBOZXdzbGV0dGVyRm9ybShwcm9wcykge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wcy5vblN1Ym1pdCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBwcm9wcy5vblN1Ym1pdCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBpZiAoZSAmJiBlLnRhcmdldCkge1xuICAgICAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIDxGcmFnbWVudD5cbiAgICAgICAgPHN0eWxlIGpzeD57YHAuc21hbGx7Zm9udC1zaXplOjE1cHg7bWFyZ2luOjA7bWFyZ2luLXRvcDo3LjVweDt0ZXh0LWFsaWduOiR7cHJvcHMucnRsID8gXCJyaWdodFwiIDogXCJsZWZ0XCJ9O2NvbG9yOiMxMTE7fWB9PC9zdHlsZT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwibmV3c2xldHRlclwiPlxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIHJ0bD17cHJvcHMucnRsfSB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGxhYmVsPXtzdHJpbmdzW3Byb3BzLnJ0bCA/IFwiaGVicmV3XCIgOiBcImVuZ2xpc2hcIl0uQ29tbW9uLkVtYWlsQWRkcmVzc1BsYWNlaG9sZGVyfSAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBydGw9e3Byb3BzLnJ0bH0gYXJyb3c+e3N0cmluZ3NbcHJvcHMucnRsID8gXCJoZWJyZXdcIiA6IFwiZW5nbGlzaFwiXS5Db21tb25bcHJvcHMuYnV0dG9uVGV4dCB8fCBcIlNpZ25VcFwiXX08L0J1dHRvbj5cbiAgICAgICAgICAgIHtwcm9wcy5zdWJ0aXRsZSAmJiA8cCBjbGFzc05hbWU9XCJzbWFsbFwiPntwcm9wcy5zdWJ0aXRsZX08L3A+fVxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9GcmFnbWVudD5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3c2xldHRlckZvcm07Il19 */\n/*@ sourceURL=/Users/ronmasas/Desktop/coronaforms.org/ui/components/NewsletterForm.js */")), __jsx("form", {
    onSubmit: handleSubmit,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2804353344", [props.rtl ? "right" : "left"]]]) + " " + "newsletter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "email",
    rtl: props.rtl,
    value: value,
    onChange: handleChange,
    label: _strings_json__WEBPACK_IMPORTED_MODULE_4__[props.rtl ? "hebrew" : "english"].Common.EmailAddressPlaceholder,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    rtl: props.rtl,
    arrow: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_4__[props.rtl ? "hebrew" : "english"].Common[props.buttonText || "SignUp"]), props.subtitle && __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2804353344", [props.rtl ? "right" : "left"]]]) + " " + "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 32
    }
  }, props.subtitle), props.children));
}

/* harmony default export */ __webpack_exports__["default"] = (NewsletterForm);

/***/ })

})
//# sourceMappingURL=_app.js.8c96032bc5112517ce73.hot-update.js.map