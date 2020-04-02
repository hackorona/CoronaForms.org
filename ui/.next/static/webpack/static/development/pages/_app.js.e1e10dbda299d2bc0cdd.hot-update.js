webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/LeumiForm.js":
/*!*********************************!*\
  !*** ./components/LeumiForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _strings_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../strings.json */ "./strings.json");
var _strings_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../strings.json */ "./strings.json", 1);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Input */ "./components/Input.js");
/* harmony import */ var _components_SignaturePad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SignaturePad */ "./components/SignaturePad.js");
var _this = undefined,
    _jsxFileName = "/Users/ronmasas/Desktop/coronaforms.org/ui/components/LeumiForm.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      step = _useState[0],
      setStep = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      firstName1 = _useState2[0],
      setFirstName1 = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      firstName2 = _useState3[0],
      setFirstName2 = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      firstName3 = _useState4[0],
      setFirstName3 = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      IDNumber1 = _useState5[0],
      setIDNumber1 = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      IDNumber2 = _useState6[0],
      setIDNumber2 = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      IDNumber3 = _useState7[0],
      setIDNumber3 = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      accountVisible1 = _useState8[0],
      setAccountVisible1 = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      accountVisible2 = _useState9[0],
      setAccountVisible2 = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      signature = _useState10[0],
      setSignature = _useState10[1];

  function addAccountOwner() {
    if (!accountVisible1) {
      setFirstName2("");
      setIDNumber2("");
      return setAccountVisible1(true);
    }

    if (!accountVisible2) {
      setFirstName3("");
      setIDNumber3("");
      return setAccountVisible2(true);
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 12
    }
  }, step === 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 24
    }
  }, __jsx("h1", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "Is this a sole or joint account?"), __jsx("h2", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Make sure to add all the account owners."), __jsx("form", {
    onSubmit: function onSubmit() {
      return setStep(1);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    autoFocus: true,
    required: true,
    value: firstName1,
    onChange: function onChange(e) {
      return setFirstName1(e.target.value);
    },
    className: "field not-round",
    placeholder: "Full Name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    required: true,
    value: IDNumber1,
    onChange: function onChange(e) {
      return setIDNumber1(e.target.value);
    },
    className: "field not-round",
    placeholder: "ID Number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }), accountVisible1 && __jsx("div", {
    className: "mt-2 name_and_id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 37
    }
  }, __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    required: true,
    value: firstName2,
    onChange: function onChange(e) {
      return setFirstName2(e.target.value);
    },
    className: "field not-round",
    placeholder: "First Name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    required: true,
    value: IDNumber2,
    onChange: function onChange(e) {
      return setIDNumber2(e.target.value);
    },
    className: "field not-round",
    placeholder: "ID Number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return setAccountVisible1(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, "Remove")), accountVisible2 && __jsx("div", {
    className: "mt-2 mb-2 name_and_id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 37
    }
  }, __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    required: true,
    value: firstName3,
    onChange: function onChange(e) {
      return setFirstName3(e.target.value);
    },
    className: "field not-round",
    placeholder: "First Name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    required: true,
    value: IDNumber3,
    onChange: function onChange(e) {
      return setIDNumber3(e.target.value);
    },
    className: "field not-round",
    placeholder: "ID Number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return setAccountVisible2(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, "Remove")), __jsx("div", {
    className: "mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, (!accountVisible1 || !accountVisible2) && __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: addAccountOwner,
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 64
    }
  }, "Add Account Owner"), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    arrow: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, "Next")))), step === 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 24
    }
  }, __jsx("h1", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Choose Mortgage Loans"), __jsx("h2", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "If you onlu have one choose \"All My Mortgage Loans\""), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    arrow: true,
    onClick: function onClick() {
      return setStep(3);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "All My Mortgage Loans"), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return setStep(2);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "Choose Mortgage Loans")), step === 2 && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 24
    }
  }, __jsx("form", {
    onSubmit: function onSubmit() {
      return setStep(3);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, "Mortgage Loan numbers"), __jsx("h2", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, "Enter the Mortgage loan numbers"), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    required: true,
    className: "field not-round",
    placeholder: "Loan Numbers",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    arrow: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, "Next"))), step === 3 && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 24
    }
  }, __jsx("form", {
    onSubmit: function onSubmit() {
      return setStep(4);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, "Bank & Contact Information"), __jsx("h2", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, "Enter your bank account number, the near mortgage payment date and phone number."), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    required: true,
    className: "field not-round",
    placeholder: "Bank account number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Next mortgage payment date",
    type: "date",
    required: true,
    className: "field not-round",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    required: true,
    className: "field not-round",
    placeholder: "Phone number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    arrow: true,
    onClick: function onClick() {
      return setStep(3);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, "Next"))), step === 4 && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 24
    }
  }, __jsx("h1", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "We're almost done"), __jsx("h2", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, "Draw your signature and click \\\"I'm Done\\\""), __jsx(_components_SignaturePad__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onChange: function onChange(sig) {
      return setSignature(sig);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  })));
});

/***/ }),

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
      lineNumber: 17,
      columnNumber: 12
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2057520806",
    __self: _this
  }, ".signature_wrapper.jsx-2057520806{width:275px;margin:auto;background:#eee;position:relative;border:2px solid #ccc;}.signature_wrapper.jsx-2057520806 button.jsx-2057520806{position:absolute;left:5px;bottom:5px;padding:5px 10px;border:none;outline:none;background:#F8D57E;color:#000;cursor:pointer;border-radius:3px;font-size:14px;font-weight:bold;opacity:0.7;}.signature_wrapper.jsx-2057520806 button.jsx-2057520806:hover{opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb25tYXNhcy9EZXNrdG9wL2Nvcm9uYWZvcm1zLm9yZy91aS9jb21wb25lbnRzL1NpZ25hdHVyZVBhZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQm9CLEFBRzZCLEFBT00sQUFjb0IsVUFBQyxFQXBCM0IsTUFPSCxNQU5PLEdBT0wsV0FDTSxFQVBDLGVBUU4sR0FQVSxTQVFULGFBUGpCLEFBUXVCLG1CQUNSLFdBQ0ksZUFDRyxrQkFDSCxlQUNFLGlCQUNMLFlBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9yb25tYXNhcy9EZXNrdG9wL2Nvcm9uYWZvcm1zLm9yZy91aS9jb21wb25lbnRzL1NpZ25hdHVyZVBhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTaWduYXR1cmVQYWQgZnJvbSBcInNpZ25hdHVyZV9wYWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gICAgY29uc3QgZWwgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgW3BhZCwgc2V0UGFkXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IF8gPSBuZXcgU2lnbmF0dXJlUGFkKGVsLmN1cnJlbnQsIHtcbiAgICAgICAgICAgIG9uRW5kOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UoXy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRQYWQoXyk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIDxGcmFnbWVudD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnNpZ25hdHVyZV93cmFwcGVye1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNzVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zaWduYXR1cmVfd3JhcHBlciBidXR0b257XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjhENTdFO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zaWduYXR1cmVfd3JhcHBlciBidXR0b246aG92ZXIge29wYWNpdHk6IDE7fVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbmF0dXJlX3dyYXBwZXJcIj5cbiAgICAgICAgICAgIDxjYW52YXMgd2lkdGg9XCIyNzVcIiBoZWlnaHQ9XCIxMDBcIiByZWY9e2VsfT48L2NhbnZhcz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcGFkLmNsZWFyKCl9IHR5cGU9XCJidXR0b25cIj5SRVNFVDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50Pjtcbn0iXX0= */\n/*@ sourceURL=/Users/ronmasas/Desktop/coronaforms.org/ui/components/SignaturePad.js */"), __jsx("div", {
    className: "jsx-2057520806" + " " + "signature_wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("canvas", {
    width: "275",
    height: "100",
    ref: el,
    className: "jsx-2057520806",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
      lineNumber: 45,
      columnNumber: 13
    }
  }, "RESET")));
});

/***/ }),

/***/ "./node_modules/signature_pad/dist/signature_pad.m.js":
/*!************************************************************!*\
  !*** ./node_modules/signature_pad/dist/signature_pad.m.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * Signature Pad v3.0.0-beta.3 | https://github.com/szimek/signature_pad
 * (c) 2018 Szymon Nowak | Released under the MIT license
 */

class Point {
    constructor(x, y, time) {
        this.x = x;
        this.y = y;
        this.time = time || Date.now();
    }
    distanceTo(start) {
        return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
    }
    equals(other) {
        return this.x === other.x && this.y === other.y && this.time === other.time;
    }
    velocityFrom(start) {
        return (this.time !== start.time) ? this.distanceTo(start) / (this.time - start.time) : 0;
    }
}

class Bezier {
    constructor(startPoint, control2, control1, endPoint, startWidth, endWidth) {
        this.startPoint = startPoint;
        this.control2 = control2;
        this.control1 = control1;
        this.endPoint = endPoint;
        this.startWidth = startWidth;
        this.endWidth = endWidth;
    }
    static fromPoints(points, widths) {
        const c2 = this.calculateControlPoints(points[0], points[1], points[2]).c2;
        const c3 = this.calculateControlPoints(points[1], points[2], points[3]).c1;
        return new Bezier(points[1], c2, c3, points[2], widths.start, widths.end);
    }
    static calculateControlPoints(s1, s2, s3) {
        const dx1 = s1.x - s2.x;
        const dy1 = s1.y - s2.y;
        const dx2 = s2.x - s3.x;
        const dy2 = s2.y - s3.y;
        const m1 = { x: (s1.x + s2.x) / 2.0, y: (s1.y + s2.y) / 2.0 };
        const m2 = { x: (s2.x + s3.x) / 2.0, y: (s2.y + s3.y) / 2.0 };
        const l1 = Math.sqrt((dx1 * dx1) + (dy1 * dy1));
        const l2 = Math.sqrt((dx2 * dx2) + (dy2 * dy2));
        const dxm = (m1.x - m2.x);
        const dym = (m1.y - m2.y);
        const k = l2 / (l1 + l2);
        const cm = { x: m2.x + (dxm * k), y: m2.y + (dym * k) };
        const tx = s2.x - cm.x;
        const ty = s2.y - cm.y;
        return {
            c1: new Point(m1.x + tx, m1.y + ty),
            c2: new Point(m2.x + tx, m2.y + ty),
        };
    }
    length() {
        const steps = 10;
        let length = 0;
        let px;
        let py;
        for (let i = 0; i <= steps; i += 1) {
            const t = i / steps;
            const cx = this.point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
            const cy = this.point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
            if (i > 0) {
                const xdiff = cx - px;
                const ydiff = cy - py;
                length += Math.sqrt((xdiff * xdiff) + (ydiff * ydiff));
            }
            px = cx;
            py = cy;
        }
        return length;
    }
    point(t, start, c1, c2, end) {
        return (start * (1.0 - t) * (1.0 - t) * (1.0 - t))
            + (3.0 * c1 * (1.0 - t) * (1.0 - t) * t)
            + (3.0 * c2 * (1.0 - t) * t * t)
            + (end * t * t * t);
    }
}

function throttle(fn, wait = 250) {
    let previous = 0;
    let timeout = null;
    let result;
    let storedContext;
    let storedArgs;
    const later = () => {
        previous = Date.now();
        timeout = null;
        result = fn.apply(storedContext, storedArgs);
        if (!timeout) {
            storedContext = null;
            storedArgs = [];
        }
    };
    return function (...args) {
        const now = Date.now();
        const remaining = wait - (now - previous);
        storedContext = this;
        storedArgs = args;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = fn.apply(storedContext, storedArgs);
            if (!timeout) {
                storedContext = null;
                storedArgs = [];
            }
        }
        else if (!timeout) {
            timeout = window.setTimeout(later, remaining);
        }
        return result;
    };
}

class SignaturePad {
    constructor(canvas, options = {}) {
        this.canvas = canvas;
        this.options = options;
        this._handleMouseDown = (event) => {
            if (event.which === 1) {
                this._mouseButtonDown = true;
                this._strokeBegin(event);
            }
        };
        this._handleMouseMove = (event) => {
            if (this._mouseButtonDown) {
                this._strokeMoveUpdate(event);
            }
        };
        this._handleMouseUp = (event) => {
            if (event.which === 1 && this._mouseButtonDown) {
                this._mouseButtonDown = false;
                this._strokeEnd(event);
            }
        };
        this._handleTouchStart = (event) => {
            event.preventDefault();
            if (event.targetTouches.length === 1) {
                const touch = event.changedTouches[0];
                this._strokeBegin(touch);
            }
        };
        this._handleTouchMove = (event) => {
            event.preventDefault();
            const touch = event.targetTouches[0];
            this._strokeMoveUpdate(touch);
        };
        this._handleTouchEnd = (event) => {
            const wasCanvasTouched = event.target === this.canvas;
            if (wasCanvasTouched) {
                event.preventDefault();
                const touch = event.changedTouches[0];
                this._strokeEnd(touch);
            }
        };
        this.velocityFilterWeight = options.velocityFilterWeight || 0.7;
        this.minWidth = options.minWidth || 0.5;
        this.maxWidth = options.maxWidth || 2.5;
        this.throttle = ('throttle' in options ? options.throttle : 16);
        this.minDistance = ('minDistance' in options ? options.minDistance : 5);
        if (this.throttle) {
            this._strokeMoveUpdate = throttle(SignaturePad.prototype._strokeUpdate, this.throttle);
        }
        else {
            this._strokeMoveUpdate = SignaturePad.prototype._strokeUpdate;
        }
        this.dotSize = options.dotSize || function () {
            return (this.minWidth + this.maxWidth) / 2;
        };
        this.penColor = options.penColor || 'black';
        this.backgroundColor = options.backgroundColor || 'rgba(0,0,0,0)';
        this.onBegin = options.onBegin;
        this.onEnd = options.onEnd;
        this._ctx = canvas.getContext('2d');
        this.clear();
        this.on();
    }
    clear() {
        const ctx = this._ctx;
        const canvas = this.canvas;
        ctx.fillStyle = this.backgroundColor;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        this._data = [];
        this._reset();
        this._isEmpty = true;
    }
    fromDataURL(dataUrl, options = {}, callback) {
        const image = new Image();
        const ratio = options.ratio || window.devicePixelRatio || 1;
        const width = options.width || (this.canvas.width / ratio);
        const height = options.height || (this.canvas.height / ratio);
        this._reset();
        image.onload = () => {
            this._ctx.drawImage(image, 0, 0, width, height);
            if (callback) {
                callback();
            }
        };
        image.onerror = (error) => {
            if (callback) {
                callback(error);
            }
        };
        image.src = dataUrl;
        this._isEmpty = false;
    }
    toDataURL(type = 'image/png', encoderOptions) {
        switch (type) {
            case 'image/svg+xml':
                return this._toSVG();
            default:
                return this.canvas.toDataURL(type, encoderOptions);
        }
    }
    on() {
        this.canvas.style.touchAction = 'none';
        this.canvas.style.msTouchAction = 'none';
        if (window.PointerEvent) {
            this._handlePointerEvents();
        }
        else {
            this._handleMouseEvents();
            if ('ontouchstart' in window) {
                this._handleTouchEvents();
            }
        }
    }
    off() {
        this.canvas.style.touchAction = 'auto';
        this.canvas.style.msTouchAction = 'auto';
        this.canvas.removeEventListener('pointerdown', this._handleMouseDown);
        this.canvas.removeEventListener('pointermove', this._handleMouseMove);
        document.removeEventListener('pointerup', this._handleMouseUp);
        this.canvas.removeEventListener('mousedown', this._handleMouseDown);
        this.canvas.removeEventListener('mousemove', this._handleMouseMove);
        document.removeEventListener('mouseup', this._handleMouseUp);
        this.canvas.removeEventListener('touchstart', this._handleTouchStart);
        this.canvas.removeEventListener('touchmove', this._handleTouchMove);
        this.canvas.removeEventListener('touchend', this._handleTouchEnd);
    }
    isEmpty() {
        return this._isEmpty;
    }
    fromData(pointGroups) {
        this.clear();
        this._fromData(pointGroups, ({ color, curve }) => this._drawCurve({ color, curve }), ({ color, point }) => this._drawDot({ color, point }));
        this._data = pointGroups;
    }
    toData() {
        return this._data;
    }
    _strokeBegin(event) {
        const newPointGroup = {
            color: this.penColor,
            points: [],
        };
        this._data.push(newPointGroup);
        this._reset();
        this._strokeUpdate(event);
        if (typeof this.onBegin === 'function') {
            this.onBegin(event);
        }
    }
    _strokeUpdate(event) {
        const x = event.clientX;
        const y = event.clientY;
        const point = this._createPoint(x, y);
        const lastPointGroup = this._data[this._data.length - 1];
        const lastPoints = lastPointGroup.points;
        const lastPoint = lastPoints.length > 0 && lastPoints[lastPoints.length - 1];
        const isLastPointTooClose = lastPoint ? point.distanceTo(lastPoint) <= this.minDistance : false;
        const color = lastPointGroup.color;
        if (!lastPoint || !(lastPoint && isLastPointTooClose)) {
            const curve = this._addPoint(point);
            if (!lastPoint) {
                this._drawDot({ color, point });
            }
            else if (curve) {
                this._drawCurve({ color, curve });
            }
            lastPoints.push({
                time: point.time,
                x: point.x,
                y: point.y,
            });
        }
    }
    _strokeEnd(event) {
        this._strokeUpdate(event);
        if (typeof this.onEnd === 'function') {
            this.onEnd(event);
        }
    }
    _handlePointerEvents() {
        this._mouseButtonDown = false;
        this.canvas.addEventListener('pointerdown', this._handleMouseDown);
        this.canvas.addEventListener('pointermove', this._handleMouseMove);
        document.addEventListener('pointerup', this._handleMouseUp);
    }
    _handleMouseEvents() {
        this._mouseButtonDown = false;
        this.canvas.addEventListener('mousedown', this._handleMouseDown);
        this.canvas.addEventListener('mousemove', this._handleMouseMove);
        document.addEventListener('mouseup', this._handleMouseUp);
    }
    _handleTouchEvents() {
        this.canvas.addEventListener('touchstart', this._handleTouchStart);
        this.canvas.addEventListener('touchmove', this._handleTouchMove);
        this.canvas.addEventListener('touchend', this._handleTouchEnd);
    }
    _reset() {
        this._lastPoints = [];
        this._lastVelocity = 0;
        this._lastWidth = (this.minWidth + this.maxWidth) / 2;
        this._ctx.fillStyle = this.penColor;
    }
    _createPoint(x, y) {
        const rect = this.canvas.getBoundingClientRect();
        return new Point(x - rect.left, y - rect.top, new Date().getTime());
    }
    _addPoint(point) {
        const { _lastPoints } = this;
        _lastPoints.push(point);
        if (_lastPoints.length > 2) {
            if (_lastPoints.length === 3) {
                _lastPoints.unshift(_lastPoints[0]);
            }
            const widths = this._calculateCurveWidths(_lastPoints[1], _lastPoints[2]);
            const curve = Bezier.fromPoints(_lastPoints, widths);
            _lastPoints.shift();
            return curve;
        }
        return null;
    }
    _calculateCurveWidths(startPoint, endPoint) {
        const velocity = (this.velocityFilterWeight * endPoint.velocityFrom(startPoint))
            + ((1 - this.velocityFilterWeight) * this._lastVelocity);
        const newWidth = this._strokeWidth(velocity);
        const widths = {
            end: newWidth,
            start: this._lastWidth,
        };
        this._lastVelocity = velocity;
        this._lastWidth = newWidth;
        return widths;
    }
    _strokeWidth(velocity) {
        return Math.max(this.maxWidth / (velocity + 1), this.minWidth);
    }
    _drawCurveSegment(x, y, width) {
        const ctx = this._ctx;
        ctx.moveTo(x, y);
        ctx.arc(x, y, width, 0, 2 * Math.PI, false);
        this._isEmpty = false;
    }
    _drawCurve({ color, curve }) {
        const ctx = this._ctx;
        const widthDelta = curve.endWidth - curve.startWidth;
        const drawSteps = Math.floor(curve.length()) * 2;
        ctx.beginPath();
        ctx.fillStyle = color;
        for (let i = 0; i < drawSteps; i += 1) {
            const t = i / drawSteps;
            const tt = t * t;
            const ttt = tt * t;
            const u = 1 - t;
            const uu = u * u;
            const uuu = uu * u;
            let x = uuu * curve.startPoint.x;
            x += 3 * uu * t * curve.control1.x;
            x += 3 * u * tt * curve.control2.x;
            x += ttt * curve.endPoint.x;
            let y = uuu * curve.startPoint.y;
            y += 3 * uu * t * curve.control1.y;
            y += 3 * u * tt * curve.control2.y;
            y += ttt * curve.endPoint.y;
            const width = curve.startWidth + (ttt * widthDelta);
            this._drawCurveSegment(x, y, width);
        }
        ctx.closePath();
        ctx.fill();
    }
    _drawDot({ color, point }) {
        const ctx = this._ctx;
        const width = typeof this.dotSize === 'function' ? this.dotSize() : this.dotSize;
        ctx.beginPath();
        this._drawCurveSegment(point.x, point.y, width);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
    }
    _fromData(pointGroups, drawCurve, drawDot) {
        for (const group of pointGroups) {
            const { color, points } = group;
            if (points.length > 1) {
                for (let j = 0; j < points.length; j += 1) {
                    const basicPoint = points[j];
                    const point = new Point(basicPoint.x, basicPoint.y, basicPoint.time);
                    this.penColor = color;
                    if (j === 0) {
                        this._reset();
                    }
                    const curve = this._addPoint(point);
                    if (curve) {
                        drawCurve({ color, curve });
                    }
                }
            }
            else {
                this._reset();
                drawDot({
                    color,
                    point: points[0],
                });
            }
        }
    }
    _toSVG() {
        const pointGroups = this._data;
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        const minX = 0;
        const minY = 0;
        const maxX = this.canvas.width / ratio;
        const maxY = this.canvas.height / ratio;
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', this.canvas.width.toString());
        svg.setAttribute('height', this.canvas.height.toString());
        this._fromData(pointGroups, ({ color, curve }) => {
            const path = document.createElement('path');
            if (!isNaN(curve.control1.x) &&
                !isNaN(curve.control1.y) &&
                !isNaN(curve.control2.x) &&
                !isNaN(curve.control2.y)) {
                const attr = `M ${curve.startPoint.x.toFixed(3)},${curve.startPoint.y.toFixed(3)} `
                    + `C ${curve.control1.x.toFixed(3)},${curve.control1.y.toFixed(3)} `
                    + `${curve.control2.x.toFixed(3)},${curve.control2.y.toFixed(3)} `
                    + `${curve.endPoint.x.toFixed(3)},${curve.endPoint.y.toFixed(3)}`;
                path.setAttribute('d', attr);
                path.setAttribute('stroke-width', (curve.endWidth * 2.25).toFixed(3));
                path.setAttribute('stroke', color);
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke-linecap', 'round');
                svg.appendChild(path);
            }
        }, ({ color, point }) => {
            const circle = document.createElement('circle');
            const dotSize = typeof this.dotSize === 'function' ? this.dotSize() : this.dotSize;
            circle.setAttribute('r', dotSize.toString());
            circle.setAttribute('cx', point.x.toString());
            circle.setAttribute('cy', point.y.toString());
            circle.setAttribute('fill', color);
            svg.appendChild(circle);
        });
        const prefix = 'data:image/svg+xml;base64,';
        const header = '<svg'
            + ' xmlns="http://www.w3.org/2000/svg"'
            + ' xmlns:xlink="http://www.w3.org/1999/xlink"'
            + ` viewBox="${minX} ${minY} ${maxX} ${maxY}"`
            + ` width="${maxX}"`
            + ` height="${maxY}"`
            + '>';
        let body = svg.innerHTML;
        if (body === undefined) {
            const dummy = document.createElement('dummy');
            const nodes = svg.childNodes;
            dummy.innerHTML = '';
            for (let i = 0; i < nodes.length; i += 1) {
                dummy.appendChild(nodes[i].cloneNode(true));
            }
            body = dummy.innerHTML;
        }
        const footer = '</svg>';
        const data = header + body + footer;
        return prefix + btoa(data);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (SignaturePad);


/***/ })

})
//# sourceMappingURL=_app.js.e1e10dbda299d2bc0cdd.hot-update.js.map