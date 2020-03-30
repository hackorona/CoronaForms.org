webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/form */ "./components/form.js");
/* harmony import */ var _components_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/styles */ "./components/styles.js");
/* harmony import */ var _components_language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/language */ "./components/language.js");
/* harmony import */ var _components_signature_pad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/signature-pad */ "./components/signature-pad.js");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-grid-system */ "./node_modules/react-grid-system/build/index.js");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "/Users/ronmasas/Desktop/coronaforms.org/frontend/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("hebrew"),
      currLang = _useState[0],
      setCurrLang = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Israel"),
      currCountry = _useState2[0],
      setCurrCountry = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      formState = _useState3[0],
      setFormState = _useState3[1];

  return __jsx("div", {
    className: currLang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 12
    }
  }, __jsx(_components_styles__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      height: 70
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 4,
    style: {
      lineHeight: "70px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/logo.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 64
    }
  })), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    className: "menu_items",
    xs: 8,
    style: {
      textAlign: currLang === "hebrew" ? "left" : "right",
      lineHeight: "70px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].header.OurMission), __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].header.Terms)))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, formState === 0 && __jsx("div", {
    style: {
      textAlign: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 37
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].title,
    subtitle: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 35
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].subtitle, ": ", __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 67
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].countries[currCountry])),
    buttons: __jsx("div", {
      className: "mt-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 34
      }
    }, __jsx("button", {
      disabled: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 29
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].forms.SmallBusinessAid, __jsx("div", {
      className: "tooltip",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "relative",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 37
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.ComingSoon, __jsx("div", {
      className: "arrow-up",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 97
      }
    })))), __jsx("button", {
      onClick: function onClick() {
        return setFormState(1);
      },
      className: "with_icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 29
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].forms.MortgageRelief, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 33
      }
    }))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  })), formState > 0 && __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 35
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions.map(function (q, index) {
    return __jsx("li", {
      onClick: function onClick() {
        return formState > index + 1 ? setFormState(index + 1) : null;
      },
      className: formState <= index ? "" : "active",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 40
      }
    }, q.id);
  }))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 9,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "center mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, formState === 1 && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[0].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[0].subtitle,
    buttons: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 46
      }
    }, __jsx("button", {
      onClick: function onClick() {
        return setFormState(2);
      },
      className: "with_icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 41
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Leumi, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 45
      }
    })), __jsx("button", {
      onClick: function onClick() {
        return setFormState(2);
      },
      className: "with_icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 41
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Discount, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 45
      }
    })), __jsx("button", {
      onClick: function onClick() {
        return setFormState(2);
      },
      className: "with_icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 41
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Jerusalem, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 45
      }
    }))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 33
    }
  })), formState === 2 && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[1].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[1].subtitle,
    buttons: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 46
      }
    }, __jsx("div", {
      style: {
        maxWidth: 700,
        margin: "auto"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 41
      }
    }, __jsx("form", {
      onSubmit: function onSubmit(e) {
        return e.preventDefault(), setFormState(3);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 45
      }
    }, __jsx("input", {
      required: true,
      autoFocus: true,
      className: "mb-2",
      placeholder: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].placeholders.FullName,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 49
      }
    }), __jsx("button", {
      className: "with_icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 49
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Next, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 53
      }
    }))))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 33
    }
  })), formState === 3 && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[2].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[2].subtitle,
    buttons: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 46
      }
    }, __jsx("div", {
      style: {
        maxWidth: 700,
        margin: "auto"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 41
      }
    }, __jsx("form", {
      onSubmit: function onSubmit(e) {
        return e.preventDefault(), setFormState(4);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 45
      }
    }, __jsx("input", {
      required: true,
      autoFocus: true,
      className: "mb-2",
      placeholder: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].placeholders.IDNumber,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 49
      }
    }), __jsx("button", {
      className: "with_icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 49
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Next, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 53
      }
    }))))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 33
    }
  })), formState === 4 && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[3].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[3].subtitle,
    buttons: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 46
      }
    }, __jsx("div", {
      style: {
        maxWidth: 700,
        margin: "auto"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 41
      }
    }, __jsx("button", {
      onClick: function onClick() {
        return setFormState(6);
      },
      className: "with_icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 45
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Yes, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 49
      }
    })), __jsx("button", {
      onClick: function onClick() {
        return setFormState(5);
      },
      className: "with_icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 45
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.No, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 49
      }
    })))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 33
    }
  })), formState === 5 && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[4].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[4].subtitle,
    buttons: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 46
      }
    }, __jsx("div", {
      style: {
        maxWidth: 700,
        margin: "auto"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 41
      }
    }, __jsx("form", {
      onSubmit: function onSubmit(e) {
        return e.preventDefault(), setFormState(6);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 45
      }
    }, __jsx("input", {
      required: true,
      autoFocus: true,
      className: "mb-2",
      placeholder: "1234, 5678",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 49
      }
    }), __jsx("button", {
      className: "with_icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 49
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Next, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 53
      }
    }))))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 33
    }
  })), formState === 6 && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[5].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[5].subtitle,
    buttons: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 46
      }
    }, __jsx("div", {
      style: {
        maxWidth: 700,
        margin: "auto"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 41
      }
    }, __jsx("form", {
      onSubmit: function onSubmit(e) {
        return e.preventDefault(), setFormState(7);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 45
      }
    }, __jsx("input", {
      required: true,
      autoFocus: true,
      className: "mb-2",
      placeholder: "000000",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 49
      }
    }), __jsx("button", {
      className: "with_icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 49
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Next, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 53
      }
    }))))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 33
    }
  })), formState === 7 && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[6].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[6].subtitle,
    buttons: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 46
      }
    }, __jsx("div", {
      style: {
        maxWidth: 700,
        margin: "auto"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 41
      }
    }, __jsx("form", {
      onSubmit: function onSubmit(e) {
        return e.preventDefault(), setFormState(8);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 45
      }
    }, __jsx("input", {
      type: "date",
      required: true,
      autoFocus: true,
      className: "mb-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 49
      }
    }), __jsx("button", {
      className: "with_icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 49
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Next, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 53
      }
    }))))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 33
    }
  })), formState === 8 && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[7].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[7].subtitle,
    buttons: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 46
      }
    }, __jsx("div", {
      style: {
        maxWidth: 700,
        margin: "auto"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 41
      }
    }, __jsx("form", {
      onSubmit: function onSubmit(e) {
        return e.preventDefault(), setFormState(9);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 45
      }
    }, __jsx("input", {
      type: "tel",
      required: true,
      autoFocus: true,
      className: "mb-2",
      placeholder: "050-1234567",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 49
      }
    }), __jsx("button", {
      className: "with_icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 49
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Next, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 53
      }
    }))))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 33
    }
  })), formState === 9 && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[8].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[8].subtitle,
    buttons: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 46
      }
    }, __jsx("div", {
      style: {
        maxWidth: 700,
        margin: "auto"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 41
      }
    }, __jsx(_components_signature_pad__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onChange: function onChange(e) {
        return console.log(e);
      },
      resetButtonText: "RESET",
      nextButton: __jsx("button", {
        className: "with_icon",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 128
        }
      }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.ImDone, __jsx("img", {
        src: "/arrow-right.svg",
        width: "10",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 49
        }
      })),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 45
      }
    }))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 33
    }
  })))))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    className: "mt-4 mission",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 17
    }
  }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].mission_section.title), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 17
    }
  }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].mission_section.p1), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 17
    }
  }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].mission_section.p2), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 20
    }
  }, "CoronaForms"), " ", _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].mission_section.p3), __jsx("div", {
    className: "mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "responsive",
    style: {
      minWidth: 270,
      maxWidth: 770
    },
    src: "/cleaning.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 21
    }
  }))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    className: "footer mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 13
    }
  }, "CoronaForms.org ", new Date().getFullYear(), " - ", _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].footer.MadeWithLoveInIsrael, __jsx("div", {
    className: "mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 17
    }
  }, currLang === "hebrew" && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 47
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return setCurrLang("english");
    },
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 25
    }
  }, "Also avaliable in English")), currLang === "english" && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 48
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return setCurrLang("english");
    },
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 25
    }
  }, "Also avaliable in English"))))));
});

/***/ })

})
//# sourceMappingURL=index.js.9cd8a793f8d0c84d0d48.hot-update.js.map