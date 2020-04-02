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
    id: "3852284183",
    dynamic: [props.rtl ? "right" : "left", props.rtl ? "right" : "left", props.rtl ? "right" : "left", props.rtl ? "rtl" : "ltr"],
    __self: _this
  }, ".input-field.__jsx-style-dynamic-selector{position:relative;}.input-field.__jsx-style-dynamic-selector label.__jsx-style-dynamic-selector{display:block;position:absolute;top:19px;".concat(props.rtl ? "right" : "left", ":20px;font-size:24px;color:#757575;-webkit-transition:.15s ease;transition:.15s ease;-webkit-transition-property:all;transition-property:all;}.input-field.focus.__jsx-style-dynamic-selector label.__jsx-style-dynamic-selector{top:8px;font-size:16px;font-weight:bold;}.input-field.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector{border:none;outline:none;width:100%;padding:20px;font-size:24px;padding-top:28px;padding-").concat(props.rtl ? "right" : "left", ":50px;padding-bottom:10px;-webkit-transition:.15s ease;transition:.15s ease;box-sizing:border-box;-webkit-transition-property:all;transition-property:all;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom:2px solid #ccc;text-align:").concat(props.rtl ? "right" : "left", ";direction:").concat(props.rtl ? "rtl" : "ltr", ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb25tYXNhcy9EZXNrdG9wL2Nvcm9uYWZvcm1zLm9yZy91aS9jb21wb25lbnRzL0lucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Cb0IsQUFHK0IsQUFHSixBQVVOLEFBS0ksUUFKRyxJQUtGLEVBZkssSUFIdEIsS0FjcUIsRUFLTixPQWZGLElBZ0JJLElBTGpCLENBVnNDLFFBZ0JuQixlQUNFLFdBaEJGLE1BaUIyQixTQWhCNUIsY0FDTyxtQkFnQkQsb0JBQ0MsV0FoQkcsdUNBaUJGLGlCQWhCMUIsS0FpQjRCLHdEQUNJLDRCQUNDLDZCQUNBLDZCQUNXLHdDQUNELHVDQUMzQyIsImZpbGUiOiIvVXNlcnMvcm9ubWFzYXMvRGVza3RvcC9jb3JvbmFmb3Jtcy5vcmcvdWkvY29tcG9uZW50cy9JbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IHtcbiAgICBjb25zdCBlbCA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtmb2N1cywgc2V0Rm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHByb3BzLm9uQ2hhbmdlKGV2ZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVCbHVyKCkge1xuICAgICAgICBpZiAodmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRGb2N1cyhmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDxGcmFnbWVudD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaW5wdXQtZmllbGR7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLmlucHV0LWZpZWxkIGxhYmVse1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDE5cHg7XG4gICAgICAgICAgICAke3Byb3BzLnJ0bCA/IFwicmlnaHRcIiA6IFwibGVmdFwifTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjE1cyBlYXNlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAgICAgICB9XG4gICAgICAgIC5pbnB1dC1maWVsZC5mb2N1cyBsYWJlbHtcbiAgICAgICAgICAgIHRvcDogOHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLmlucHV0LWZpZWxkIGlucHV0e1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyOHB4O1xuICAgICAgICAgICAgcGFkZGluZy0ke3Byb3BzLnJ0bCA/IFwicmlnaHRcIiA6IFwibGVmdFwifTogNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjE1cyBlYXNlO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogJHtwcm9wcy5ydGwgPyBcInJpZ2h0XCIgOiBcImxlZnRcIn07XG4gICAgICAgICAgICBkaXJlY3Rpb246ICR7cHJvcHMucnRsID8gXCJydGxcIiA6IFwibHRyXCJ9O1xuICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tcImlucHV0LWZpZWxkXCIsIGZvY3VzID8gXCJmb2N1c1wiIDogXCJcIl0uam9pbihcIiBcIil9PlxuICAgICAgICAgICAgPGxhYmVsIG9uQ2xpY2s9eygpID0+IGVsLmN1cnJlbnQuZm9jdXMoKX0+e3Byb3BzLmxhYmVsIHx8IHByb3BzLnBsYWNlaG9sZGVyfTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT17cHJvcHMudHlwZSB8fCBcInRleHRcIn0gcmVmPXtlbH0gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBvbkZvY3VzPXsoKSA9PiBzZXRGb2N1cyh0cnVlKX0gb25CbHVyPXtoYW5kbGVCbHVyfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxufSJdfQ== */\n/*@ sourceURL=/Users/ronmasas/Desktop/coronaforms.org/ui/components/Input.js */")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3852284183", [props.rtl ? "right" : "left", props.rtl ? "right" : "left", props.rtl ? "right" : "left", props.rtl ? "rtl" : "ltr"]]]) + " " + (["input-field", focus ? "focus" : ""].join(" ") || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("label", {
    onClick: function onClick() {
      return el.current.focus();
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3852284183", [props.rtl ? "right" : "left", props.rtl ? "right" : "left", props.rtl ? "right" : "left", props.rtl ? "rtl" : "ltr"]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3852284183", [props.rtl ? "right" : "left", props.rtl ? "right" : "left", props.rtl ? "right" : "left", props.rtl ? "rtl" : "ltr"]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  })));
});

/***/ })

})
//# sourceMappingURL=_app.js.34aa84a29be9e273e295.hot-update.js.map