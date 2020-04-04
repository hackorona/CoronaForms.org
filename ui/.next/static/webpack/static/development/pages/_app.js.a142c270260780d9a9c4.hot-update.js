webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strings_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../strings.json */ "./strings.json");
var _strings_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../strings.json */ "./strings.json", 1);
/* harmony import */ var _components_NewsletterForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NewsletterForm */ "./components/NewsletterForm.js");

var _jsxFileName = "/Users/ronmasas/Desktop/coronaforms.org/ui/components/Hero.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Hero(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      country = _useState[0],
      setCountry = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  function handleSubmitRequest(emailAddress) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmitRequest$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("https://api.coronaforms.org/api/v1/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                email: emailAddress
              })
            }));

          case 2:
            response = _context.sent;

            if (response.status === 200) {
              alert(_strings_json__WEBPACK_IMPORTED_MODULE_2__[props.language].Common.ThankYou);
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function fetchData() {
      var response, jsonData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("https://api.coronaforms.org/api/v1/geo"));

            case 2:
              response = _context2.sent;
              _context2.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

            case 5:
              jsonData = _context2.sent;
              setCountry(jsonData.countryName);
              setTimeout(function () {
                setLoading(false);
              }, 1000);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    }

    fetchData();
  }, []);
  return __jsx("div", {
    className: "auto hero",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 12
    }
  }, loading && __jsx("div", {
    className: "loading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx("img", {
    width: "50",
    src: "/puff.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 46
    }
  })), !loading && country === "Israel" && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 46
    }
  }, props.children), !loading && country !== "Israel" && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 46
    }
  }, __jsx("h1", {
    className: "mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_2__.english.Hero.title), __jsx("h2", {
    className: "mb-2 text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_2__.english.Hero.NoFormsFound), __jsx(_components_NewsletterForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onSubmit: handleSubmitRequest,
    subtitle: _strings_json__WEBPACK_IMPORTED_MODULE_2__.english.Common.PrivacyPolicy,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ })

})
//# sourceMappingURL=_app.js.a142c270260780d9a9c4.hot-update.js.map