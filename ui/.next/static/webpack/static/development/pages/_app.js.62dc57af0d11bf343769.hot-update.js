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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 12
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1169699716",
    __self: _this
  }, ".input-field.jsx-1169699716{position:relative;}.input-field.jsx-1169699716 label.jsx-1169699716{display:block;position:absolute;top:19px;left:20px;font-size:24px;color:#757575;-webkit-transition:.15s ease;transition:.15s ease;-webkit-transition-property:all;transition-property:all;}.input-field.focus.jsx-1169699716 label.jsx-1169699716{top:8px;font-size:16px;font-weight:bold;}.input-field.jsx-1169699716 input.jsx-1169699716{border:none;outline:none;width:100%;padding:20px;padding-top:28px;padding-bottom:10px;font-size:24px;padding-right:50px;-webkit-transition:.15s ease;transition:.15s ease;box-sizing:border-box;-webkit-transition-property:all;transition-property:all;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom:2px solid #ccc;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb25tYXNhcy9EZXNrdG9wL2Nvcm9uYWZvcm1zLm9yZy91aS9jb21wb25lbnRzL0lucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Cb0IsQUFHK0IsQUFHSixBQVVOLEFBS0ksUUFKRyxJQUtGLEVBZkssSUFIdEIsS0FjcUIsRUFLTixPQWZGLElBZ0JJLElBTGpCLENBVmMsUUFnQk8sRUFmRixlQUNELEFBZU0sY0FkQyxNQWVOLGVBQ0ksbUJBQ0UsVUFoQkcsd0NBaUJGLGdCQWhCMUIsTUFpQjRCLHdEQUNJLDRCQUNDLDZCQUNBLDZCQUNqQyIsImZpbGUiOiIvVXNlcnMvcm9ubWFzYXMvRGVza3RvcC9jb3JvbmFmb3Jtcy5vcmcvdWkvY29tcG9uZW50cy9JbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IHtcbiAgICBjb25zdCBlbCA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtmb2N1cywgc2V0Rm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHByb3BzLm9uQ2hhbmdlKGV2ZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVCbHVyKCkge1xuICAgICAgICBpZiAodmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRGb2N1cyhmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDxGcmFnbWVudD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaW5wdXQtZmllbGR7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLmlucHV0LWZpZWxkIGxhYmVse1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDE5cHg7XG4gICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM3NTc1NzU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuMTVzIGVhc2U7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gICAgICAgIH1cbiAgICAgICAgLmlucHV0LWZpZWxkLmZvY3VzIGxhYmVse1xuICAgICAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAuaW5wdXQtZmllbGQgaW5wdXR7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDI4cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuMTVzIGVhc2U7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjY2M7XG4gICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W1wiaW5wdXQtZmllbGRcIiwgZm9jdXMgPyBcImZvY3VzXCIgOiBcIlwiXS5qb2luKFwiIFwiKX0+XG4gICAgICAgICAgICA8bGFiZWwgb25DbGljaz17KCkgPT4gZWwuY3VycmVudC5mb2N1cygpfT57cHJvcHMubGFiZWwgfHwgcHJvcHMucGxhY2Vob2xkZXJ9PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtwcm9wcy50eXBlIHx8IFwidGV4dFwifSByZWY9e2VsfSB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IG9uRm9jdXM9eygpID0+IHNldEZvY3VzKHRydWUpfSBvbkJsdXI9e2hhbmRsZUJsdXJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG59Il19 */\n/*@ sourceURL=/Users/ronmasas/Desktop/coronaforms.org/ui/components/Input.js */"), __jsx("div", {
    className: "jsx-1169699716" + " " + (["input-field", focus ? "focus" : ""].join(" ") || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("label", {
    onClick: function onClick() {
      return el.current.focus();
    },
    className: "jsx-1169699716",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, props.label || props.placeholder), __jsx("input", {
    type: props.type || "text",
    ref: el,
    value: value,
    onChange: handleChange,
    onFocus: function onFocus() {
      return setFocus(true);
    },
    onBlur: handleBlur,
    className: "jsx-1169699716",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  })));
});

/***/ })

})
//# sourceMappingURL=_app.js.62dc57af0d11bf343769.hot-update.js.map