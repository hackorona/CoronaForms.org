webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./pages/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.js");
/* harmony import */ var _strings_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../strings.json */ "./strings.json");
var _strings_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../strings.json */ "./strings.json", 1);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");
/* harmony import */ var _components_LeumiForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LeumiForm */ "./components/LeumiForm.js");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-grid-system */ "./node_modules/react-grid-system/build/index.js");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
    _jsxFileName = "/Users/ronmasas/Desktop/coronaforms.org/ui/pages/_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("main"),
      step = _useState[0],
      setStep = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      language = _useState2[0],
      setLanguage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      bank = _useState3[0],
      setBank = _useState3[1];

  function changeLangauge(lang) {
    setLanguage(lang);
    set("lang", lang);
  }

  function get(key, defaultValue) {
    if (localStorage) {
      return localStorage.getItem(key) || defaultValue;
    }

    return defaultValue;
  }

  function set(key, value) {
    if (localStorage) {
      localStorage.setItem(key, value);
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setLanguage(get("lang", navigator.language.indexOf("he") === 0 ? "hebrew" : "english"));
  }, []);
  return language && __jsx("div", {
    className: language,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 24
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("img", {
    onClick: function onClick() {
      return setStep("main");
    },
    src: "/logo.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  })), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 8,
    className: "menuItems",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#mission",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Header.OurMission), __jsx("a", {
    href: "#terms-of-use",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Header.Terms))), __jsx("div", {
    className: "text-center mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, step === "main" && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 41
    }
  }, __jsx("h1", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Hero.title), __jsx("h2", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Hero.subtitle), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rtl: language == "hebrew",
    disabled: true,
    tooltip: _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Common.ComingSoon,
    arrow: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Hero.SmallBusinessAid), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rtl: language == "hebrew",
    arrow: true,
    onClick: function onClick() {
      return setStep("choose_bank");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Hero.MortgageSuspension)), step === "choose_bank" && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 48
    }
  }, __jsx("h1", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Forms.ChooseBank.title), __jsx("h2", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Forms.ChooseBank.subtitle), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rtl: language == "hebrew",
    onClick: function onClick() {
      return setBank("leumi");
    },
    arrow: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Common.Leumi), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rtl: language == "hebrew",
    disabled: true,
    onClick: function onClick() {
      return setBank("discount");
    },
    arrow: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Common.Discount), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rtl: language == "hebrew",
    disabled: true,
    onClick: function onClick() {
      return setBank("jerusalem");
    },
    arrow: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Common.Jerusalem)), step === "bank_form" && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 46
    }
  }, bank === "leumi" && __jsx(_components_LeumiForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    language: language,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 46
    }
  })))), __jsx("div", {
    id: "mission",
    className: "mission",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].OurMission.title), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].OurMission.p1), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].OurMission.p2), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 20
    }
  }, "CoronaForms"), " ", _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].OurMission.p3), __jsx("div", {
    className: "text-right mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/coronaforms.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  })))), __jsx("div", {
    className: "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "floor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "mb-1 pt-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }, "CoronaForms.org ", new Date().getFullYear()), __jsx("div", {
    className: "mb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Footer.MadeWithLoveInIsrael)), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 6,
    className: "language-links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, language === "hebrew" && __jsx("a", {
    href: "#",
    onClick: function onClick() {
      return changeLangauge("english");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 51
    }
  }, "Also available in English"), language === "english" && __jsx("a", {
    href: "#",
    onClick: function onClick() {
      return changeLangauge("hebrew");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 52
    }
  }, "\u05D6\u05DE\u05D9\u05DF \u05D2\u05DD \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA")))), __jsx("div", {
    style: {
      background: "#000",
      height: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  })));
});

/***/ })

})
//# sourceMappingURL=_app.js.3d6f1f3f3a8b944f58cb.hot-update.js.map