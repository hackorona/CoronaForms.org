webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./pages/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.js");
/* harmony import */ var _strings_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../strings.json */ "./strings.json");
var _strings_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../strings.json */ "./strings.json", 1);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");
/* harmony import */ var _components_LeumiForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/LeumiForm */ "./components/LeumiForm.js");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-grid-system */ "./node_modules/react-grid-system/build/index.js");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_7__);


var _this = undefined,
    _jsxFileName = "/Users/ronmasas/Desktop/coronaforms.org/ui/pages/_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("main"),
      step = _useState2[0],
      setStep = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("hebrew"),
      language = _useState3[0],
      setLanguage = _useState3[1];

  function handleUpdate(key, value) {
    var next = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var newData = _objectSpread({}, data);

    newData[key] = value;
    setData(newData);

    if (next) {
      setStep(next);
    }
  }

  return __jsx("div", {
    className: language,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    className: "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    xs: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/logo.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  })), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    xs: 8,
    className: "menuItems",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#mission",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_4__[language].Header.OurMission), __jsx("a", {
    href: "#terms-of-use",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_4__[language].Header.Terms))), __jsx("div", {
    className: "text-center mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, step === "main" && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 41
    }
  }, __jsx("h1", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_4__[language].Hero.title), __jsx("h2", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_4__[language].Hero.subtitle), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    disabled: true,
    tooltip: _strings_json__WEBPACK_IMPORTED_MODULE_4__[language].Common.ComingSoon,
    arrow: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_4__[language].Hero.SmallBusinessAid), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    arrow: true,
    onClick: function onClick() {
      return setStep("choose_bank");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_4__[language].Hero.MortgageSuspension)), step === "choose_bank" && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 48
    }
  }, __jsx("h1", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_4__[language].Forms.ChooseBank.title), __jsx("h2", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_4__[language].Forms.ChooseBank.subtitle), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: function onClick() {
      return handleUpdate("bank", "leumi", "bank_form");
    },
    arrow: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, "Leumi Bank"), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    disabled: true,
    onClick: function onClick() {
      return handleUpdate("bank", "discount", "bank_form");
    },
    arrow: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }, "Discount Bank"), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    disabled: true,
    onClick: function onClick() {
      return handleUpdate("bank", "jerusalem", "bank_form");
    },
    arrow: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, "Jerusalem Bank")), step === "bank_form" && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 46
    }
  }, data.bank === "leumi" && __jsx(_components_LeumiForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: data,
    handleUpdate: handleUpdate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 51
    }
  })))), __jsx("div", {
    id: "mission",
    className: "mission",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_4__[language].OurMission.title), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_4__[language].OurMission.p1), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_4__[language].OurMission.p2), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 20
    }
  }, "CoronaForms"), " ", _strings_json__WEBPACK_IMPORTED_MODULE_4__[language].OurMission.p3), __jsx("div", {
    className: "text-right mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/coronaforms.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  })))), __jsx("div", {
    className: "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "floor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "mb-1 pt-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, "CoronaForms.org ", new Date().getFullYear()), __jsx("div", {
    className: "mb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_4__[language].Footer.MadeWithLoveInIsrael)), __jsx("div", {
    style: {
      background: "#000",
      height: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  })));
});

/***/ })

})
//# sourceMappingURL=_app.js.783f2bed40182a72507d.hot-update.js.map