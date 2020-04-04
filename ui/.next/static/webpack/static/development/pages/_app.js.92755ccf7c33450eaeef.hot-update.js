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
    id: "2025885668",
    __self: this
  }, "p.small.jsx-2025885668{font-size:15px;margin:0;margin-top:7.5px;text-align:left;color:#111;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb25tYXNhcy9EZXNrdG9wL2Nvcm9uYWZvcm1zLm9yZy91aS9jb21wb25lbnRzL05ld3NsZXR0ZXJGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCb0IsQUFDc0IsZUFBUSxTQUFnQixpQkFBZSxnQkFBVSxXQUFDIiwiZmlsZSI6Ii9Vc2Vycy9yb25tYXNhcy9EZXNrdG9wL2Nvcm9uYWZvcm1zLm9yZy91aS9jb21wb25lbnRzL05ld3NsZXR0ZXJGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0IGZyb20gXCIuL0lucHV0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IHN0cmluZ3MgZnJvbSBcIi4uL3N0cmluZ3MuanNvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIE5ld3NsZXR0ZXJGb3JtKHByb3BzKSB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodHlwZW9mIHByb3BzLm9uU3VibWl0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHByb3BzLm9uU3VibWl0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgIGlmIChlICYmIGUudGFyZ2V0KSB7XG4gICAgICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gPEZyYWdtZW50PlxuICAgICAgICA8c3R5bGUganN4PntgcC5zbWFsbHtmb250LXNpemU6MTVweDttYXJnaW46MDttYXJnaW4tdG9wOjcuNXB4O3RleHQtYWxpZ246bGVmdDtjb2xvcjojMTExO31gfTwvc3R5bGU+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIm5ld3NsZXR0ZXJcIj5cbiAgICAgICAgICAgIDxJbnB1dCBydGw9e3Byb3BzLnJ0bH0gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17ZSA9PiBzZXRWYWx1ZShlLnRhcmdldGUudmFsdWUpfSBsYWJlbD17c3RyaW5nc1twcm9wcy5ydGwgPyBcImhlYnJld1wiIDogXCJlbmdsaXNoXCJdLkNvbW1vbi5FbWFpbEFkZHJlc3NQbGFjZWhvbGRlcn0gLz5cbiAgICAgICAgICAgIDxCdXR0b24gcnRsPXtwcm9wcy5ydGx9IGFycm93PntzdHJpbmdzW3Byb3BzLnJ0bCA/IFwiaGVicmV3XCIgOiBcImVuZ2xpc2hcIl0uQ29tbW9uW3Byb3BzLmJ1dHRvblRleHQgfHwgXCJTaWduVXBcIl19PC9CdXR0b24+XG4gICAgICAgICAgICB7cHJvcHMuc3VidGl0bGUgJiYgPHAgY2xhc3NOYW1lPVwic21hbGxcIj57cHJvcHMuc3VidGl0bGV9PC9wPn1cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvRnJhZ21lbnQ+XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld3NsZXR0ZXJGb3JtOyJdfQ== */\n/*@ sourceURL=/Users/ronmasas/Desktop/coronaforms.org/ui/components/NewsletterForm.js */"), __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-2025885668" + " " + "newsletter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
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
    className: "jsx-2025885668" + " " + "small",
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
//# sourceMappingURL=_app.js.92755ccf7c33450eaeef.hot-update.js.map