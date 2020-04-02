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
    props.onChange(event);
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
    }, 1);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 12
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "804922026",
    dynamic: [props.rtl ? "right" : "left", props.rtl ? "right" : "left", props.rtl ? "rtl" : "ltr"],
    __self: _this
  }, ".input-field.__jsx-style-dynamic-selector{position:relative;}.input-field.__jsx-style-dynamic-selector label.__jsx-style-dynamic-selector{display:block;position:absolute;top:19px;".concat(props.rtl ? "right" : "left", ":20px;font-size:24px;color:#757575;-webkit-transition:.15s ease;transition:.15s ease;-webkit-transition-property:all;transition-property:all;}.input-field.focus.__jsx-style-dynamic-selector label.__jsx-style-dynamic-selector{top:8px;font-size:16px;font-weight:bold;}.input-field.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector{border:none;outline:none;width:100%;padding:20px;font-size:24px;padding-top:28px;padding-bottom:10px;padding-right:20px;-webkit-transition:.15s ease;transition:.15s ease;box-sizing:border-box;-webkit-transition-property:all;transition-property:all;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom:2px solid #ccc;text-align:").concat(props.rtl ? "right" : "left", ";direction:").concat(props.rtl ? "rtl" : "ltr", ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb25tYXNhcy9EZXNrdG9wL2Nvcm9uYWZvcm1zLm9yZy91aS9jb21wb25lbnRzL0lucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCb0IsQUFHK0IsQUFHSixBQVVOLEFBS0ksUUFKRyxJQUtGLEVBZkssSUFIdEIsS0FjcUIsRUFLTixPQWZGLElBZ0JJLElBTGpCLENBVnNDLFFBZ0JuQixlQUNFLFdBaEJGLE1BaUJLLFNBaEJOLFdBaUJLLEdBaEJFLGdCQWlCQSxrQ0FoQkcsZ0JBaUJGLHNCQUNFLGtCQWpCNUIsc0NBa0JnQyw0QkFDQyw2QkFDQSw2QkFDVyx3Q0FDRCx1Q0FDM0MiLCJmaWxlIjoiL1VzZXJzL3Jvbm1hc2FzL0Rlc2t0b3AvY29yb25hZm9ybXMub3JnL3VpL2NvbXBvbmVudHMvSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9wcyA9PiB7XG4gICAgY29uc3QgZWwgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbZm9jdXMsIHNldEZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICBzZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICBwcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQmx1cigpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0Rm9jdXMoZmFsc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUxhYmVsQ2xpY2soKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZWwuY3VycmVudC5mb2N1cygpO1xuICAgICAgICB9LCAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gPEZyYWdtZW50PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5pbnB1dC1maWVsZHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAuaW5wdXQtZmllbGQgbGFiZWx7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMTlweDtcbiAgICAgICAgICAgICR7cHJvcHMucnRsID8gXCJyaWdodFwiIDogXCJsZWZ0XCJ9OiAyMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM3NTc1NzU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuMTVzIGVhc2U7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gICAgICAgIH1cbiAgICAgICAgLmlucHV0LWZpZWxkLmZvY3VzIGxhYmVse1xuICAgICAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAuaW5wdXQtZmllbGQgaW5wdXR7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDI4cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuMTVzIGVhc2U7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiAke3Byb3BzLnJ0bCA/IFwicmlnaHRcIiA6IFwibGVmdFwifTtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJHtwcm9wcy5ydGwgPyBcInJ0bFwiIDogXCJsdHJcIn07XG4gICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W1wiaW5wdXQtZmllbGRcIiwgZm9jdXMgPyBcImZvY3VzXCIgOiBcIlwiXS5qb2luKFwiIFwiKX0+XG4gICAgICAgICAgICA8bGFiZWwgb25DbGljaz17aGFuZGxlTGFiZWxDbGlja30+e3Byb3BzLmxhYmVsIHx8IHByb3BzLnBsYWNlaG9sZGVyfTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT17KHByb3BzLnR5cGUgPT09IFwiZGF0ZVwiICYmIGZvY3VzKSA/IFwiZGF0ZVwiIDogXCJ0ZXh0XCJ9IHJlZj17ZWx9IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gb25Gb2N1cz17KCkgPT4gc2V0Rm9jdXModHJ1ZSl9IG9uQmx1cj17aGFuZGxlQmx1cn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbn0iXX0= */\n/*@ sourceURL=/Users/ronmasas/Desktop/coronaforms.org/ui/components/Input.js */")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["804922026", [props.rtl ? "right" : "left", props.rtl ? "right" : "left", props.rtl ? "rtl" : "ltr"]]]) + " " + (["input-field", focus ? "focus" : ""].join(" ") || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("label", {
    onClick: handleLabelClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["804922026", [props.rtl ? "right" : "left", props.rtl ? "right" : "left", props.rtl ? "rtl" : "ltr"]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, props.label || props.placeholder), __jsx("input", {
    type: props.type === "date" && focus ? "date" : "text",
    ref: el,
    value: value,
    onChange: handleChange,
    onFocus: function onFocus() {
      return setFocus(true);
    },
    onBlur: handleBlur,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["804922026", [props.rtl ? "right" : "left", props.rtl ? "right" : "left", props.rtl ? "rtl" : "ltr"]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  })));
});

/***/ })

})
//# sourceMappingURL=_app.js.fc9b4f7dd53089f631e6.hot-update.js.map