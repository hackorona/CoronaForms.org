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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 12
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2025885668",
    __self: this
  }, "p.small.jsx-2025885668{font-size:15px;margin:0;margin-top:7.5px;text-align:left;color:#111;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb25tYXNhcy9EZXNrdG9wL2Nvcm9uYWZvcm1zLm9yZy91aS9jb21wb25lbnRzL05ld3NsZXR0ZXJGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCb0IsQUFDc0IsZUFBUSxTQUFnQixpQkFBZSxnQkFBVSxXQUFDIiwiZmlsZSI6Ii9Vc2Vycy9yb25tYXNhcy9EZXNrdG9wL2Nvcm9uYWZvcm1zLm9yZy91aS9jb21wb25lbnRzL05ld3NsZXR0ZXJGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0IGZyb20gXCIuL0lucHV0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IHN0cmluZ3MgZnJvbSBcIi4uL3N0cmluZ3MuanNvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIE5ld3NsZXR0ZXJGb3JtKHByb3BzKSB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodHlwZW9mIHByb3BzLm9uU3VibWl0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHByb3BzLm9uU3VibWl0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiA8RnJhZ21lbnQ+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BwLnNtYWxse2ZvbnQtc2l6ZToxNXB4O21hcmdpbjowO21hcmdpbi10b3A6Ny41cHg7dGV4dC1hbGlnbjpsZWZ0O2NvbG9yOiMxMTE7fWB9PC9zdHlsZT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwibmV3c2xldHRlclwiPlxuICAgICAgICAgICAgPElucHV0IHJ0bD17cHJvcHMucnRsfSB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtlID0+IHNldFZhbHVlKGUudGFyZ2V0ZS52YWx1ZSl9IGxhYmVsPXtzdHJpbmdzW3Byb3BzLnJ0bCA/IFwiaGVicmV3XCIgOiBcImVuZ2xpc2hcIl0uQ29tbW9uLkVtYWlsQWRkcmVzc1BsYWNlaG9sZGVyfSAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBydGw9e3Byb3BzLnJ0bH0gYXJyb3c+e3N0cmluZ3NbcHJvcHMucnRsID8gXCJoZWJyZXdcIiA6IFwiZW5nbGlzaFwiXS5Db21tb24uU2lnblVwfTwvQnV0dG9uPlxuICAgICAgICAgICAge3Byb3BzLnN1YnRpdGxlICYmIDxwIGNsYXNzTmFtZT1cInNtYWxsXCI+e3Byb3BzLnN1YnRpdGxlfTwvcD59XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L0ZyYWdtZW50PlxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdzbGV0dGVyRm9ybTsiXX0= */\n/*@ sourceURL=/Users/ronmasas/Desktop/coronaforms.org/ui/components/NewsletterForm.js */"), __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-2025885668" + " " + "newsletter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    rtl: props.rtl,
    value: value,
    onChange: function onChange(e) {
      return setValue(e.targete.value);
    },
    label: _strings_json__WEBPACK_IMPORTED_MODULE_4__[props.rtl ? "hebrew" : "english"].Common.EmailAddressPlaceholder,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    rtl: props.rtl,
    arrow: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_4__[props.rtl ? "hebrew" : "english"].Common.SignUp), props.subtitle && __jsx("p", {
    className: "jsx-2025885668" + " " + "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 32
    }
  }, props.subtitle), props.children));
}

/* harmony default export */ __webpack_exports__["default"] = (NewsletterForm);

/***/ })

})
//# sourceMappingURL=_app.js.08872e32db187845e488.hot-update.js.map