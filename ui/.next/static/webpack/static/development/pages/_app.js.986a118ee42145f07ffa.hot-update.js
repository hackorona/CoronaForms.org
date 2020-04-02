webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Input.js":
/*!*****************************!*\
  !*** ./components/Input.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/ronmasas/Desktop/coronaforms.org/ui/components/Input.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var el = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      focus = _useState2[0],
      setFocus = _useState2[1];

  function handleChange(event) {
    setValue(event.target.value);

    if (props.onChange) {
      props.onChange(event);
    }
  }

  function handleBlur() {
    if (value !== "") {
      return;
    }

    setFocus(false);
  }

  function handleLabelClick() {
    setTimeout(function () {
      el.current.focus();
    }, 50);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 12
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "933849060",
    dynamic: [props.rtl ? "right" : "left", props.rtl ? "right" : "left", props.rtl ? "rtl" : "ltr"],
    __self: _this
  }, ".input-field.__jsx-style-dynamic-selector{position:relative;}.input-field.__jsx-style-dynamic-selector label.__jsx-style-dynamic-selector{display:block;position:absolute;top:19px;".concat(props.rtl ? "right" : "left", ":20px;font-size:24px;color:#757575;-webkit-transition:.15s ease;transition:.15s ease;-webkit-transition-property:all;transition-property:all;}.input-field.focus.__jsx-style-dynamic-selector label.__jsx-style-dynamic-selector{top:8px;font-size:16px;font-weight:bold;color:#000;}.input-field.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector{border:none;outline:none;width:100%;padding:20px;font-size:24px;padding-top:28px;padding-right:20px;padding-bottom:10px;-webkit-transition:.15s ease;transition:.15s ease;box-sizing:border-box;-webkit-appearance:none;-webkit-transition-property:all;transition-property:all;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom:2px solid #ccc;text-align:").concat(props.rtl ? "right" : "left", ";direction:").concat(props.rtl ? "rtl" : "ltr", ";}.input-field.focus.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector{border-color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb25tYXNhcy9EZXNrdG9wL2Nvcm9uYWZvcm1zLm9yZy91aS9jb21wb25lbnRzL0lucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCb0IsQUFHK0IsQUFHSixBQVVOLEFBTUksQUFtQk0sUUF4QkgsSUFNRixFQWhCSyxJQUh0QixBQXNDQSxLQXhCcUIsRUFNTixPQWhCRixJQWlCSSxJQU5GLENBVnVCLFFBaUJuQixFQU5uQixhQU9xQixXQWpCRixNQWtCSSxTQWpCTCxVQWtCTSxJQWpCQyxnQkFrQkEsa0NBakJHLGdCQWtCRixzQkFDRSxrQkFsQjVCLE1BbUI0Qix3REFDSSw0QkFDQyw2QkFDQSw2QkFDVyx3Q0FDRCx1Q0FDM0MiLCJmaWxlIjoiL1VzZXJzL3Jvbm1hc2FzL0Rlc2t0b3AvY29yb25hZm9ybXMub3JnL3VpL2NvbXBvbmVudHMvSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9wcyA9PiB7XG4gICAgY29uc3QgZWwgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbZm9jdXMsIHNldEZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICBzZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICBpZiAocHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUJsdXIoKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldEZvY3VzKGZhbHNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVMYWJlbENsaWNrKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGVsLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgfSwgNTApO1xuICAgIH1cblxuICAgIHJldHVybiA8RnJhZ21lbnQ+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmlucHV0LWZpZWxke1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC5pbnB1dC1maWVsZCBsYWJlbHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAxOXB4O1xuICAgICAgICAgICAgJHtwcm9wcy5ydGwgPyBcInJpZ2h0XCIgOiBcImxlZnRcIn06IDIwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzc1NzU3NTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC4xNXMgZWFzZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgICAgICAgfVxuICAgICAgICAuaW5wdXQtZmllbGQuZm9jdXMgbGFiZWx7XG4gICAgICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICAgICAgLmlucHV0LWZpZWxkIGlucHV0e1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyOHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjE1cyBlYXNlO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogJHtwcm9wcy5ydGwgPyBcInJpZ2h0XCIgOiBcImxlZnRcIn07XG4gICAgICAgICAgICBkaXJlY3Rpb246ICR7cHJvcHMucnRsID8gXCJydGxcIiA6IFwibHRyXCJ9O1xuICAgICAgICB9XG4gICAgICAgIC5pbnB1dC1maWVsZC5mb2N1cyBpbnB1dHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbXCJpbnB1dC1maWVsZFwiLCBmb2N1cyA/IFwiZm9jdXNcIiA6IFwiXCJdLmpvaW4oXCIgXCIpfT5cbiAgICAgICAgICAgIDxsYWJlbCBvbkNsaWNrPXtoYW5kbGVMYWJlbENsaWNrfT57cHJvcHMubGFiZWwgfHwgcHJvcHMucGxhY2Vob2xkZXJ9PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBhdXRvRm9jdXM9e3Byb3BzLmF1dG9Gb2N1c30gcmVxdWlyZWQgdHlwZT17KHByb3BzLnR5cGUgPT09IFwiZGF0ZVwiICYmIGZvY3VzKSA/IFwiZGF0ZVwiIDogXCJ0ZXh0XCJ9IHJlZj17ZWx9IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gb25Gb2N1cz17KCkgPT4gc2V0Rm9jdXModHJ1ZSl9IG9uQmx1cj17aGFuZGxlQmx1cn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbn0iXX0= */\n/*@ sourceURL=/Users/ronmasas/Desktop/coronaforms.org/ui/components/Input.js */")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["933849060", [props.rtl ? "right" : "left", props.rtl ? "right" : "left", props.rtl ? "rtl" : "ltr"]]]) + " " + (["input-field", focus ? "focus" : ""].join(" ") || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("label", {
    onClick: handleLabelClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["933849060", [props.rtl ? "right" : "left", props.rtl ? "right" : "left", props.rtl ? "rtl" : "ltr"]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, props.label || props.placeholder), __jsx("input", {
    autoFocus: props.autoFocus,
    required: true,
    type: props.type === "date" && focus ? "date" : "text",
    ref: el,
    value: value,
    onChange: handleChange,
    onFocus: function onFocus() {
      return setFocus(true);
    },
    onBlur: handleBlur,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["933849060", [props.rtl ? "right" : "left", props.rtl ? "right" : "left", props.rtl ? "rtl" : "ltr"]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  })));
});

/***/ })

})
//# sourceMappingURL=_app.js.986a118ee42145f07ffa.hot-update.js.map