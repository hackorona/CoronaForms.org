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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      form = _useState4[0],
      setForm = _useState4[1];

  function updateForm(key, value) {}

  function generatePDF() {}

  return __jsx("div", {
    className: currLang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 12
    }
  }, __jsx(_components_styles__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      height: 70
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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
      lineNumber: 29,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/logo.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
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
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].header.OurMission), __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].header.Terms)))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, formState === 0 && __jsx("div", {
    style: {
      textAlign: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 37
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].title,
    subtitle: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 35
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].subtitle, ": ", __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 67
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].countries[currCountry])),
    buttons: __jsx("div", {
      className: "mt-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 34
      }
    }, __jsx("button", {
      disabled: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 29
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].forms.SmallBusinessAid, __jsx("div", {
      className: "tooltip",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "relative",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 37
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.ComingSoon, __jsx("div", {
      className: "arrow-up",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
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
        lineNumber: 47,
        columnNumber: 29
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].forms.MortgageRelief, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 33
      }
    }))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  })), formState > 0 && __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 35
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
        lineNumber: 57,
        columnNumber: 40
      }
    }, q.id);
  }))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 9,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "center mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, formState === 1 && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[0].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[0].subtitle,
    buttons: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
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
        lineNumber: 67,
        columnNumber: 41
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Leumi, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
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
        lineNumber: 71,
        columnNumber: 41
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Discount, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
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
        lineNumber: 75,
        columnNumber: 41
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Jerusalem, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 45
      }
    }))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 33
    }
  })), formState === 2 && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[1].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[1].subtitle,
    buttons: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
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
        lineNumber: 85,
        columnNumber: 41
      }
    }, __jsx("form", {
      onSubmit: function onSubmit(e) {
        return e.preventDefault(), setFormState(3);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
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
        lineNumber: 87,
        columnNumber: 49
      }
    }), __jsx("button", {
      className: "with_icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 49
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Next, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 53
      }
    }))))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 33
    }
  })), formState === 3 && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[2].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[2].subtitle,
    buttons: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
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
        lineNumber: 100,
        columnNumber: 41
      }
    }, __jsx("form", {
      onSubmit: function onSubmit(e) {
        return e.preventDefault(), setFormState(4);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
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
        lineNumber: 102,
        columnNumber: 49
      }
    }), __jsx("button", {
      className: "with_icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 49
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Next, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 53
      }
    }))))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  })), formState === 4 && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[3].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[3].subtitle,
    buttons: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
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
        lineNumber: 115,
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
        lineNumber: 116,
        columnNumber: 45
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Yes, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
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
        lineNumber: 120,
        columnNumber: 45
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.No, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 49
      }
    })))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 33
    }
  })), formState === 5 && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[4].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[4].subtitle,
    buttons: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
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
        lineNumber: 131,
        columnNumber: 41
      }
    }, __jsx("form", {
      onSubmit: function onSubmit(e) {
        return e.preventDefault(), setFormState(6);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
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
        lineNumber: 133,
        columnNumber: 49
      }
    }), __jsx("button", {
      className: "with_icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 49
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Next, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 53
      }
    }))))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 33
    }
  })), formState === 6 && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[5].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[5].subtitle,
    buttons: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
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
        lineNumber: 146,
        columnNumber: 41
      }
    }, __jsx("form", {
      onSubmit: function onSubmit(e) {
        return e.preventDefault(), setFormState(7);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
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
        lineNumber: 148,
        columnNumber: 49
      }
    }), __jsx("button", {
      className: "with_icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 49
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Next, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 53
      }
    }))))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 33
    }
  })), formState === 7 && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[6].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[6].subtitle,
    buttons: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
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
        lineNumber: 161,
        columnNumber: 41
      }
    }, __jsx("form", {
      onSubmit: function onSubmit(e) {
        return e.preventDefault(), setFormState(8);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
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
        lineNumber: 163,
        columnNumber: 49
      }
    }), __jsx("button", {
      className: "with_icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 49
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Next, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 53
      }
    }))))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 33
    }
  })), formState === 8 && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[7].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[7].subtitle,
    buttons: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
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
        lineNumber: 176,
        columnNumber: 41
      }
    }, __jsx("form", {
      onSubmit: function onSubmit(e) {
        return e.preventDefault(), setFormState(9);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
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
        lineNumber: 178,
        columnNumber: 49
      }
    }), __jsx("button", {
      className: "with_icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 49
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Next, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 53
      }
    }))))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 33
    }
  })), formState === 9 && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[8].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[8].subtitle,
    buttons: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
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
        lineNumber: 191,
        columnNumber: 41
      }
    }, __jsx(_components_signature_pad__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onChange: function onChange(e) {
        return console.log(e);
      },
      resetButtonText: "RESET",
      nextButton: __jsx("button", {
        onClick: generatePDF,
        className: "with_icon",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 61
        }
      }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.ImDone, __jsx("img", {
        src: "/arrow-right.svg",
        width: "10",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 53
        }
      })),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 45
      }
    }))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 33
    }
  })))))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    className: "mt-4 mission",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 17
    }
  }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].mission_section.title), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 17
    }
  }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].mission_section.p1), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 17
    }
  }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].mission_section.p2), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 17
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 20
    }
  }, "CoronaForms"), " ", _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].mission_section.p3), __jsx("div", {
    className: "mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
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
      lineNumber: 211,
      columnNumber: 21
    }
  }))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    className: "footer mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 13
    }
  }, "CoronaForms.org ", new Date().getFullYear(), " - ", _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].footer.MadeWithLoveInIsrael, __jsx("div", {
    className: "mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 17
    }
  }, currLang === "hebrew" && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
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
      lineNumber: 218,
      columnNumber: 25
    }
  }, "Also available in English")), currLang === "english" && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 48
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return setCurrLang("hebrew");
    },
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 25
    }
  }, "\u05D6\u05DE\u05D9\u05DF \u05D2\u05DD \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA"))))));
});

/***/ })

})
//# sourceMappingURL=index.js.06562a0584d484939e3e.hot-update.js.map