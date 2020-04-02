module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ronmasas/Desktop/coronaforms.org/ui/components/Button.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Button(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 12
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2848608327",
    dynamic: [props.arrow && props.rtl ? "padding-left: 30px;" : "", props.arrow && !props.rtl ? "padding-right: 30px;" : ""],
    __self: this
  }, `button.__jsx-style-dynamic-selector{color:#000;border:none;outline:none;cursor:pointer;font-size:18px;font-weight:bold;padding:10px 20px;position:relative;border-radius:23px;-webkit-transition:.15s ease;transition:.15s ease;-webkit-transition-property:all;transition-property:all;background-color:#F8D57E;margin-right:26px;${props.arrow && props.rtl ? "padding-left: 30px;" : ""} ${props.arrow && !props.rtl ? "padding-right: 30px;" : ""};}button.__jsx-style-dynamic-selector:disabled{opacity:0.8;background:#e2e2e2;cursor:not-allowed;}button.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}button.__jsx-style-dynamic-selector:active{-webkit-transform:scale(0.98);-ms-transform:scale(0.98);transform:scale(0.98);}button.__jsx-style-dynamic-selector .tooltip.__jsx-style-dynamic-selector{left:28%;color:#fff;padding:6px;bottom:40px;display:none;font-size:13px;background:#000;position:absolute;border-radius:3px;}button.__jsx-style-dynamic-selector:hover .tooltip.__jsx-style-dynamic-selector{display:block;}button.__jsx-style-dynamic-selector div.arrow-up.__jsx-style-dynamic-selector{width:0;height:0;left:43%;bottom:-10px;position:absolute;border-top:5px solid black;border-left:5px solid transparent;border-right:5px solid transparent;}@media only screen and (max-width:400px){button.__jsx-style-dynamic-selector{width:100%;margin-bottom:13px;margin-right:none;}button.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}button.__jsx-style-dynamic-selector .tooltip.__jsx-style-dynamic-selector{left:36%;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb25tYXNhcy9EZXNrdG9wL2Nvcm9uYWZvcm1zLm9yZy91aS9jb21wb25lbnRzL0J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJb0IsQUFHd0IsQUFpQkMsQUFJa0IsQUFDRSxBQUV2QixBQVV1QixBQUV4QixBQVdPLEFBSWdCLEFBRWxCLFFBaEJKLENBWkUsQUE2QlgsRUFyRFksQUErQ1csQ0E5QkosRUFnQmMsR0FJeEIsR0FaRyxHQXhCQyxHQXFDQSxJQVVTLENBOUJILENBUVAsSUF4QkcsR0FxQ0csS0FaTCxJQXNCYixFQTlCSixDQWhCbUIsTUF5QkQsQUFZYSxTQXBDVixHQThDZSxHQXJCaEIsR0FUZSxHQUNFLEtBaEJmLENBb0NnQixJQVhoQixhQXhCQSxLQXlCQSxZQVdpQixDQW5DaEIsS0F5QnZCLGNBeEJ5QixlQW1DekIsbUNBbEM0Qix3REFDQyx5QkFDUCxrQkFHdkIsMERBQUMiLCJmaWxlIjoiL1VzZXJzL3Jvbm1hc2FzL0Rlc2t0b3AvY29yb25hZm9ybXMub3JnL3VpL2NvbXBvbmVudHMvQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gQnV0dG9uKHByb3BzKSB7XG4gICAgcmV0dXJuIDxGcmFnbWVudD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBidXR0b257XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuMTVzIGVhc2U7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhENTdFO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgJHtwcm9wcy5hcnJvdyAmJiBwcm9wcy5ydGwgPyBcInBhZGRpbmctbGVmdDogMzBweDtcIiA6IFwiXCJ9XG4gICAgICAgICAgICAke3Byb3BzLmFycm93ICYmICFwcm9wcy5ydGwgPyBcInBhZGRpbmctcmlnaHQ6IDMwcHg7XCIgOiBcIlwifVxuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpkaXNhYmxlZHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlMmUyZTI7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlcnsgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XG4gICAgICAgIGJ1dHRvbjphY3RpdmV7IHRyYW5zZm9ybTogc2NhbGUoMC45OCk7IH1cbiAgICAgICAgYnV0dG9uIC50b29sdGlwe1xuICAgICAgICAgICAgbGVmdDogMjglO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgZm9udC1zaXplOjEzcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlciAudG9vbHRpcHsgZGlzcGxheTogYmxvY2s7IH1cbiAgICAgICAgYnV0dG9uIGRpdi5hcnJvdy11cCB7XG4gICAgICAgICAgICB3aWR0aDogMDsgXG4gICAgICAgICAgICBoZWlnaHQ6IDA7IFxuICAgICAgICAgICAgbGVmdDogNDMlO1xuICAgICAgICAgICAgYm90dG9tOiAtMTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgICAgICAgICBidXR0b257XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTNweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b246aG92ZXJ7dHJhbnNmb3JtOiBzY2FsZSgxKTt9XG4gICAgICAgICAgICBidXR0b24gLnRvb2x0aXB7XG4gICAgICAgICAgICAgICAgbGVmdDogMzYlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPXtwcm9wcy50eXBlfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfSBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0gZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfT5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIHtwcm9wcy5hcnJvdyAmJiAhcHJvcHMucnRsICYmIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48L2Rpdj59XG4gICAgICAgICAgICB7cHJvcHMuYXJyb3cgJiYgcHJvcHMucnRsICYmIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3ctbGVmdFwiPjwvZGl2Pn1cbiAgICAgICAgICAgIHtwcm9wcy50b29sdGlwICYmIDxkaXYgY2xhc3NOYW1lPVwidG9vbHRpcFwiPlxuICAgICAgICAgICAgICAgIHtwcm9wcy50b29sdGlwfVxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdy11cFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L0ZyYWdtZW50PlxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247Il19 */
/*@ sourceURL=/Users/ronmasas/Desktop/coronaforms.org/ui/components/Button.js */`), __jsx("button", {
    type: props.type,
    onClick: props.onClick,
    disabled: props.disabled,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2848608327", [props.arrow && props.rtl ? "padding-left: 30px;" : "", props.arrow && !props.rtl ? "padding-right: 30px;" : ""]]]) + " " + (props.className || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, props.children, props.arrow && !props.rtl && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2848608327", [props.arrow && props.rtl ? "padding-left: 30px;" : "", props.arrow && !props.rtl ? "padding-right: 30px;" : ""]]]) + " " + "arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 43
    }
  }), props.arrow && props.rtl && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2848608327", [props.arrow && props.rtl ? "padding-left: 30px;" : "", props.arrow && !props.rtl ? "padding-right: 30px;" : ""]]]) + " " + "arrow-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 42
    }
  }), props.tooltip && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2848608327", [props.arrow && props.rtl ? "padding-left: 30px;" : "", props.arrow && !props.rtl ? "padding-right: 30px;" : ""]]]) + " " + "tooltip",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 31
    }
  }, props.tooltip, __jsx("div", {
    style: {
      position: "relative"
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2848608327", [props.arrow && props.rtl ? "padding-left: 30px;" : "", props.arrow && !props.rtl ? "padding-right: 30px;" : ""]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2848608327", [props.arrow && props.rtl ? "padding-left: 30px;" : "", props.arrow && !props.rtl ? "padding-right: 30px;" : ""]]]) + " " + "arrow-up",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _strings_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../strings.json */ "./strings.json");
var _strings_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../strings.json */ "./strings.json", 1);
/* harmony import */ var _components_NewsletterForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NewsletterForm */ "./components/NewsletterForm.js");
var _jsxFileName = "/Users/ronmasas/Desktop/coronaforms.org/ui/components/Hero.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Hero(props) {
  const {
    0: country,
    1: setCountry
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/api/v1/geo");
      const jsonData = await response.json();
      setCountry(jsonData.countryName);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }

    fetchData();
  }, []);
  return __jsx("div", {
    className: "auto hero",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
    }
  }, loading && __jsx("div", {
    className: "loading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx("img", {
    width: "50",
    src: "/puff.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 46
    }
  })), !loading && country === "Israel" && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 46
    }
  }, props.children), !loading && country !== "Israel" && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 46
    }
  }, __jsx("h1", {
    className: "mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Hero.title), __jsx("h2", {
    className: "mb-2 text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Hero.NoFormsFound), __jsx(_components_NewsletterForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Common.PrivacyPolicy,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/Input.js":
/*!*****************************!*\
  !*** ./components/Input.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ronmasas/Desktop/coronaforms.org/ui/components/Input.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (props => {
  const el = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: focus,
    1: setFocus
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

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
    setTimeout(() => {
      el.current.focus();
    }, 1);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 12
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1611414408",
    dynamic: [props.rtl ? "right" : "left", props.rtl ? "right" : "left", props.rtl ? "rtl" : "ltr"],
    __self: undefined
  }, `.input-field.__jsx-style-dynamic-selector{position:relative;}.input-field.__jsx-style-dynamic-selector label.__jsx-style-dynamic-selector{display:block;position:absolute;top:19px;${props.rtl ? "right" : "left"}:20px;font-size:24px;color:#757575;-webkit-transition:.15s ease;transition:.15s ease;-webkit-transition-property:all;transition-property:all;}.input-field.focus.__jsx-style-dynamic-selector label.__jsx-style-dynamic-selector{top:8px;font-size:16px;font-weight:bold;color:#000;}.input-field.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector{border:none;outline:none;width:100%;padding:20px;font-size:24px;padding-top:28px;padding-bottom:10px;padding-right:20px;-webkit-transition:.15s ease;transition:.15s ease;box-sizing:border-box;-webkit-transition-property:all;transition-property:all;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom:2px solid #ccc;text-align:${props.rtl ? "right" : "left"};direction:${props.rtl ? "rtl" : "ltr"};}.input-field.focus.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector{border-color:#000;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb25tYXNhcy9EZXNrdG9wL2Nvcm9uYWZvcm1zLm9yZy91aS9jb21wb25lbnRzL0lucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCb0IsQUFHK0IsQUFHSixBQVVOLEFBTUksQUFrQk0sUUF2QkgsSUFNRixFQWhCSyxJQUh0QixBQXFDQSxLQXZCcUIsRUFNTixPQWhCRixJQWlCSSxJQU5GLENBVnVCLFFBaUJuQixFQU5uQixhQU9xQixXQWpCRixNQWtCSyxTQWpCTixXQWtCSyxHQWpCRSxnQkFrQkEsa0NBakJHLGdCQWtCRixzQkFDRSxrQkFsQjVCLHNDQW1CZ0MsNEJBQ0MsNkJBQ0EsNkJBQ1csd0NBQ0QsdUNBQzNDIiwiZmlsZSI6Ii9Vc2Vycy9yb25tYXNhcy9EZXNrdG9wL2Nvcm9uYWZvcm1zLm9yZy91aS9jb21wb25lbnRzL0lucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4ge1xuICAgIGNvbnN0IGVsID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2ZvY3VzLCBzZXRGb2N1c10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgc2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgaWYgKHByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVCbHVyKCkge1xuICAgICAgICBpZiAodmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRGb2N1cyhmYWxzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTGFiZWxDbGljaygpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBlbC5jdXJyZW50LmZvY3VzKCk7XG4gICAgICAgIH0sIDEpO1xuICAgIH1cblxuICAgIHJldHVybiA8RnJhZ21lbnQ+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmlucHV0LWZpZWxke1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC5pbnB1dC1maWVsZCBsYWJlbHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAxOXB4O1xuICAgICAgICAgICAgJHtwcm9wcy5ydGwgPyBcInJpZ2h0XCIgOiBcImxlZnRcIn06IDIwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzc1NzU3NTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC4xNXMgZWFzZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgICAgICAgfVxuICAgICAgICAuaW5wdXQtZmllbGQuZm9jdXMgbGFiZWx7XG4gICAgICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICAgICAgLmlucHV0LWZpZWxkIGlucHV0e1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyOHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjE1cyBlYXNlO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogJHtwcm9wcy5ydGwgPyBcInJpZ2h0XCIgOiBcImxlZnRcIn07XG4gICAgICAgICAgICBkaXJlY3Rpb246ICR7cHJvcHMucnRsID8gXCJydGxcIiA6IFwibHRyXCJ9O1xuICAgICAgICB9XG4gICAgICAgIC5pbnB1dC1maWVsZC5mb2N1cyBpbnB1dHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbXCJpbnB1dC1maWVsZFwiLCBmb2N1cyA/IFwiZm9jdXNcIiA6IFwiXCJdLmpvaW4oXCIgXCIpfT5cbiAgICAgICAgICAgIDxsYWJlbCBvbkNsaWNrPXtoYW5kbGVMYWJlbENsaWNrfT57cHJvcHMubGFiZWwgfHwgcHJvcHMucGxhY2Vob2xkZXJ9PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBhdXRvRm9jdXM9e3Byb3BzLmF1dG9Gb2N1c30gcmVxdWlyZWQgdHlwZT17KHByb3BzLnR5cGUgPT09IFwiZGF0ZVwiICYmIGZvY3VzKSA/IFwiZGF0ZVwiIDogXCJ0ZXh0XCJ9IHJlZj17ZWx9IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gb25Gb2N1cz17KCkgPT4gc2V0Rm9jdXModHJ1ZSl9IG9uQmx1cj17aGFuZGxlQmx1cn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbn0iXX0= */
/*@ sourceURL=/Users/ronmasas/Desktop/coronaforms.org/ui/components/Input.js */`), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1611414408", [props.rtl ? "right" : "left", props.rtl ? "right" : "left", props.rtl ? "rtl" : "ltr"]]]) + " " + (["input-field", focus ? "focus" : ""].join(" ") || ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("label", {
    onClick: handleLabelClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1611414408", [props.rtl ? "right" : "left", props.rtl ? "right" : "left", props.rtl ? "rtl" : "ltr"]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, props.label || props.placeholder), __jsx("input", {
    autoFocus: props.autoFocus,
    required: true,
    type: props.type === "date" && focus ? "date" : "text",
    ref: el,
    value: value,
    onChange: handleChange,
    onFocus: () => setFocus(true),
    onBlur: handleBlur,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1611414408", [props.rtl ? "right" : "left", props.rtl ? "right" : "left", props.rtl ? "rtl" : "ltr"]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  })));
});

/***/ }),

/***/ "./components/LeumiForm.js":
/*!*********************************!*\
  !*** ./components/LeumiForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _strings_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../strings.json */ "./strings.json");
var _strings_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../strings.json */ "./strings.json", 1);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Input */ "./components/Input.js");
/* harmony import */ var _components_SignaturePad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SignaturePad */ "./components/SignaturePad.js");
var _jsxFileName = "/Users/ronmasas/Desktop/coronaforms.org/ui/components/LeumiForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (props => {
  const formEl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    0: step,
    1: setStep
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: fullName1,
    1: setFullName1
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: fullName2,
    1: setFullName2
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: fullName3,
    1: setFullName3
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: IDNumber1,
    1: setIDNumber1
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: IDNumber2,
    1: setIDNumber2
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: IDNumber3,
    1: setIDNumber3
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: accountVisible1,
    1: setAccountVisible1
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: accountVisible2,
    1: setAccountVisible2
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: signature,
    1: setSignature
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: loanType,
    1: setLoanType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: loanNumbers,
    1: setLoanNumbers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: bankAccountNumber,
    1: setBankAccountNumber
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: nearMortgageDate,
    1: setNearMortgageDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: phoneNumber,
    1: setPhoneNumber
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  function addAccountOwner() {
    if (!accountVisible1) {
      setFullName2("");
      setIDNumber2("");
      return setAccountVisible1(true);
    }

    if (!accountVisible2) {
      setFullName3("");
      setIDNumber3("");
      return setAccountVisible2(true);
    }
  }

  function previewPdfDocument() {
    formEl.current.submit();
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 12
    }
  }, __jsx("form", {
    style: {
      display: "none"
    },
    ref: formEl,
    method: "POST",
    target: "_blank",
    action: "http://localhost:8080/api/v1/pdf/leumi",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "text",
    name: "full_name",
    value: fullName1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx("input", {
    type: "text",
    name: "full_name_2",
    value: fullName2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), __jsx("input", {
    type: "text",
    name: "full_name_3",
    value: fullName3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }), __jsx("input", {
    type: "text",
    name: "id",
    value: IDNumber1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }), __jsx("input", {
    type: "text",
    name: "id_2",
    value: IDNumber2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx("input", {
    type: "text",
    name: "id_3",
    value: IDNumber3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }), loanType === "all_loans" && __jsx("input", {
    type: "text",
    name: "all_loans",
    value: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 42
    }
  }), loanType === "specific_loans" && __jsx("input", {
    type: "text",
    name: "specific_loans",
    value: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 47
    }
  }), __jsx("input", {
    type: "text",
    name: "loans_numbers",
    value: loanNumbers,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }), __jsx("input", {
    type: "text",
    name: "bank_account_number",
    value: bankAccountNumber,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }), __jsx("input", {
    type: "text",
    name: "near_mortgage_date",
    value: nearMortgageDate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }), __jsx("input", {
    type: "text",
    name: "phone_number",
    value: phoneNumber,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }), __jsx("input", {
    type: "text",
    name: "sig",
    value: signature,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }), __jsx("input", {
    type: "text",
    name: "current_date",
    value: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  })), step === 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 24
    }
  }, __jsx("h1", {
    className: "mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Forms.Accounts.title), __jsx("h2", {
    className: "mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Forms.Accounts.subtitle), __jsx("form", {
    onSubmit: () => setStep(1),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    rtl: props.language === "hebrew" ? true : false,
    autoFocus: true,
    required: true,
    value: fullName1,
    onChange: e => setFullName1(e.target.value),
    className: "field not-round",
    placeholder: _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Common.FullName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    rtl: props.language === "hebrew" ? true : false,
    required: true,
    value: IDNumber1,
    onChange: e => setIDNumber1(e.target.value),
    className: "field not-round",
    placeholder: _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Common.IDNumber,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }), accountVisible1 && __jsx("div", {
    className: "mt-2 name_and_id",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 37
    }
  }, __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    rtl: props.language === "hebrew" ? true : false,
    required: true,
    value: fullName2,
    onChange: e => setFullName2(e.target.value),
    className: "field not-round",
    placeholder: _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Common.FullName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    rtl: props.language === "hebrew" ? true : false,
    required: true,
    value: IDNumber2,
    onChange: e => setIDNumber2(e.target.value),
    className: "field not-round",
    placeholder: _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Common.IDNumber,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    rtl: props.language === "hebrew" ? true : false,
    onClick: () => setAccountVisible1(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Common.Remove)), accountVisible2 && __jsx("div", {
    className: "mt-2 mb-2 name_and_id",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 37
    }
  }, __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    rtl: props.language === "hebrew" ? true : false,
    required: true,
    value: fullName3,
    onChange: e => setFullName3(e.target.value),
    className: "field not-round",
    placeholder: _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Common.FullName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    rtl: props.language === "hebrew" ? true : false,
    required: true,
    value: IDNumber3,
    onChange: e => setIDNumber3(e.target.value),
    className: "field not-round",
    placeholder: _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Common.IDNumber,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    rtl: props.language === "hebrew" ? true : false,
    onClick: () => setAccountVisible2(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Common.Remove)), __jsx("div", {
    className: "mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, (!accountVisible1 || !accountVisible2) && __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    rtl: props.language === "hebrew" ? true : false,
    onClick: addAccountOwner,
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 64
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Common.AddAccountOwner), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    rtl: props.language === "hebrew" ? true : false,
    arrow: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Common.Next)))), step === 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 24
    }
  }, __jsx("h1", {
    className: "mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Forms.MortgageTypeSelection.title), __jsx("h2", {
    className: "mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Forms.MortgageTypeSelection.subtitle), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    rtl: props.language === "hebrew" ? true : false,
    arrow: true,
    onClick: () => (setLoanType("all_loans"), setStep(3)),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Common.AllMyMortgageLoans), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    rtl: props.language === "hebrew" ? true : false,
    onClick: () => (setLoanType("specific_loans"), setStep(2)),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Common.ChooseMortgageLoans)), step === 2 && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 24
    }
  }, __jsx("form", {
    onSubmit: () => setStep(3),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Forms.MortgageLoanNumbers.title), __jsx("h2", {
    className: "mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Forms.MortgageLoanNumbers.subtitle), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    rtl: props.language === "hebrew" ? true : false,
    autoFocus: true,
    value: loanNumbers,
    onChange: e => setLoanNumbers(e.target.value),
    required: true,
    className: "field not-round",
    label: _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Common.LoanNumbers,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    rtl: props.language === "hebrew" ? true : false,
    className: "mt-2",
    arrow: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Common.Next))), step === 3 && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 24
    }
  }, __jsx("form", {
    onSubmit: () => setStep(4),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Forms.BankAndContactInforamtion.title), __jsx("h2", {
    className: "mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Forms.BankAndContactInforamtion.subtitle), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    rtl: props.language === "hebrew" ? true : false,
    autoFocus: true,
    value: bankAccountNumber,
    onChange: e => setBankAccountNumber(e.target.value),
    required: true,
    className: "field not-round",
    placeholder: _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Common.BankAccountNumber,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    rtl: props.language === "hebrew" ? true : false,
    value: nearMortgageDate,
    onChange: e => setNearMortgageDate(e.target.value),
    label: _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Forms.BankAndContactInforamtion.NextMortgagePaymentDate,
    type: "date",
    required: true,
    className: "field not-round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    rtl: props.language === "hebrew" ? true : false,
    value: phoneNumber,
    onChange: e => setPhoneNumber(e.target.value),
    required: true,
    className: "field not-round",
    placeholder: _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Common.PhoneNumber,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    rtl: props.language === "hebrew" ? true : false,
    className: "mt-2",
    arrow: true,
    onClick: () => setStep(3),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Common.Next))), step === 4 && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 24
    }
  }, __jsx("h1", {
    className: "mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Forms.Signature.title), __jsx("h2", {
    className: "mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Forms.Signature.subtitle), __jsx(_components_SignaturePad__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onChange: signatureDataURL => setSignature(signatureDataURL),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    rtl: props.language === "hebrew" ? true : false,
    onClick: previewPdfDocument,
    className: "mt-2",
    arrow: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__[props.language].Common.PreviewRequest)));
});

/***/ }),

/***/ "./components/NewsletterForm.js":
/*!**************************************!*\
  !*** ./components/NewsletterForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
/* harmony import */ var _strings_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../strings.json */ "./strings.json");
var _strings_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../strings.json */ "./strings.json", 1);
var _jsxFileName = "/Users/ronmasas/Desktop/coronaforms.org/ui/components/NewsletterForm.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function NewsletterForm(props) {
  const el = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  function handleSubmit(event) {
    event.preventDefault();

    if (typeof props.onSubmit === "function") {
      props.onSubmit(el.current.value);
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 12
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2025885668",
    __self: this
  }, "p.small.jsx-2025885668{font-size:15px;margin:0;margin-top:7.5px;text-align:left;color:#111;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb25tYXNhcy9EZXNrdG9wL2Nvcm9uYWZvcm1zLm9yZy91aS9jb21wb25lbnRzL05ld3NsZXR0ZXJGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVvQixBQUNzQixlQUFRLFNBQWdCLGlCQUFlLGdCQUFVLFdBQUMiLCJmaWxlIjoiL1VzZXJzL3Jvbm1hc2FzL0Rlc2t0b3AvY29yb25hZm9ybXMub3JnL3VpL2NvbXBvbmVudHMvTmV3c2xldHRlckZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IHN0cmluZ3MgZnJvbSBcIi4uL3N0cmluZ3MuanNvblwiO1xuaW1wb3J0IHsgdXNlUmVmLCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBOZXdzbGV0dGVyRm9ybShwcm9wcykge1xuICAgIGNvbnN0IGVsID0gdXNlUmVmKG51bGwpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcHMub25TdWJtaXQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcHJvcHMub25TdWJtaXQoZWwuY3VycmVudC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gPEZyYWdtZW50PlxuICAgICAgICA8c3R5bGUganN4PntgcC5zbWFsbHtmb250LXNpemU6MTVweDttYXJnaW46MDttYXJnaW4tdG9wOjcuNXB4O3RleHQtYWxpZ246bGVmdDtjb2xvcjojMTExO31gfTwvc3R5bGU+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIm5ld3NsZXR0ZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmaWVsZFwiIHJlZj17ZWx9IHBsYWNlaG9sZGVyPXtzdHJpbmdzLmVuZ2xpc2guQ29tbW9uLkVtYWlsQWRkcmVzc1BsYWNlaG9sZGVyfSAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBhcnJvdz57c3RyaW5ncy5lbmdsaXNoLkNvbW1vbi5TaWduVXB9PC9CdXR0b24+XG4gICAgICAgICAgICB7cHJvcHMuc3VidGl0bGUgJiYgPHAgY2xhc3NOYW1lPVwic21hbGxcIj57cHJvcHMuc3VidGl0bGV9PC9wPn1cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvRnJhZ21lbnQ+XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld3NsZXR0ZXJGb3JtOyJdfQ== */\n/*@ sourceURL=/Users/ronmasas/Desktop/coronaforms.org/ui/components/NewsletterForm.js */"), __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-2025885668" + " " + "newsletter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("input", {
    ref: el,
    placeholder: _strings_json__WEBPACK_IMPORTED_MODULE_3__.english.Common.EmailAddressPlaceholder,
    className: "jsx-2025885668" + " " + "field",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    arrow: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__.english.Common.SignUp), props.subtitle && __jsx("p", {
    className: "jsx-2025885668" + " " + "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 32
    }
  }, props.subtitle), props.children));
}

/* harmony default export */ __webpack_exports__["default"] = (NewsletterForm);

/***/ }),

/***/ "./components/SignaturePad.js":
/*!************************************!*\
  !*** ./components/SignaturePad.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! signature_pad */ "signature_pad");
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(signature_pad__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ronmasas/Desktop/coronaforms.org/ui/components/SignaturePad.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (props => {
  const el = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const {
    0: pad,
    1: setPad
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let _ = new signature_pad__WEBPACK_IMPORTED_MODULE_2___default.a(el.current, {
      onEnd: () => {
        props.onChange(_.toDataURL("image/png"));
      }
    });

    setPad(_);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2057520806",
    __self: undefined
  }, ".signature_wrapper.jsx-2057520806{width:275px;margin:auto;background:#eee;position:relative;border:2px solid #ccc;}.signature_wrapper.jsx-2057520806 button.jsx-2057520806{position:absolute;left:5px;bottom:5px;padding:5px 10px;border:none;outline:none;background:#F8D57E;color:#000;cursor:pointer;border-radius:3px;font-size:14px;font-weight:bold;opacity:0.7;}.signature_wrapper.jsx-2057520806 button.jsx-2057520806:hover{opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb25tYXNhcy9EZXNrdG9wL2Nvcm9uYWZvcm1zLm9yZy91aS9jb21wb25lbnRzL1NpZ25hdHVyZVBhZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQm9CLEFBRzZCLEFBT00sQUFjb0IsVUFBQyxFQXBCM0IsTUFPSCxNQU5PLEdBT0wsV0FDTSxFQVBDLGVBUU4sR0FQVSxTQVFULGFBUGpCLEFBUXVCLG1CQUNSLFdBQ0ksZUFDRyxrQkFDSCxlQUNFLGlCQUNMLFlBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9yb25tYXNhcy9EZXNrdG9wL2Nvcm9uYWZvcm1zLm9yZy91aS9jb21wb25lbnRzL1NpZ25hdHVyZVBhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTaWduYXR1cmVQYWQgZnJvbSBcInNpZ25hdHVyZV9wYWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gICAgY29uc3QgZWwgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgW3BhZCwgc2V0UGFkXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IF8gPSBuZXcgU2lnbmF0dXJlUGFkKGVsLmN1cnJlbnQsIHtcbiAgICAgICAgICAgIG9uRW5kOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UoXy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRQYWQoXyk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIDxGcmFnbWVudD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnNpZ25hdHVyZV93cmFwcGVye1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNzVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zaWduYXR1cmVfd3JhcHBlciBidXR0b257XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjhENTdFO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zaWduYXR1cmVfd3JhcHBlciBidXR0b246aG92ZXIge29wYWNpdHk6IDE7fVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbmF0dXJlX3dyYXBwZXJcIj5cbiAgICAgICAgICAgIDxjYW52YXMgd2lkdGg9XCIyNzVcIiBoZWlnaHQ9XCIxMDBcIiByZWY9e2VsfT48L2NhbnZhcz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcGFkLmNsZWFyKCl9IHR5cGU9XCJidXR0b25cIj5SRVNFVDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50Pjtcbn0iXX0= */\n/*@ sourceURL=/Users/ronmasas/Desktop/coronaforms.org/ui/components/SignaturePad.js */"), __jsx("div", {
    className: "jsx-2057520806" + " " + "signature_wrapper",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }), __jsx("button", {
    onClick: () => pad.clear(),
    type: "button",
    className: "jsx-2057520806",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "RESET")));
});

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./pages/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.js");
/* harmony import */ var _strings_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../strings.json */ "./strings.json");
var _strings_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../strings.json */ "./strings.json", 1);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");
/* harmony import */ var _components_LeumiForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LeumiForm */ "./components/LeumiForm.js");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-grid-system */ "react-grid-system");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/ronmasas/Desktop/coronaforms.org/ui/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: step,
    1: setStep
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("main");
  const {
    0: language,
    1: setLanguage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("hebrew");

  function handleUpdate(key, value, next = null) {
    let newData = _objectSpread({}, data);

    newData[key] = value;
    setData(newData);

    if (next) {
      setStep(next);
    }
  }

  return __jsx("div", {
    className: language,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("img", {
    onClick: () => setStep("main"),
    src: "/logo.svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  })), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 8,
    className: "menuItems",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#mission",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Header.OurMission), __jsx("a", {
    href: "#terms-of-use",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Header.Terms))), __jsx("div", {
    className: "text-center mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, step === "main" && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 41
    }
  }, __jsx("h1", {
    className: "mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Hero.title), __jsx("h2", {
    className: "mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Hero.subtitle), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rtl: language == "hebrew",
    disabled: true,
    tooltip: _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Common.ComingSoon,
    arrow: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Hero.SmallBusinessAid), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rtl: language == "hebrew",
    arrow: true,
    onClick: () => setStep("choose_bank"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Hero.MortgageSuspension)), step === "choose_bank" && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 48
    }
  }, __jsx("h1", {
    className: "mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Forms.ChooseBank.title), __jsx("h2", {
    className: "mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Forms.ChooseBank.subtitle), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rtl: language == "hebrew",
    onClick: () => handleUpdate("bank", "leumi", "bank_form"),
    arrow: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Common.Leumi), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rtl: language == "hebrew",
    disabled: true,
    onClick: () => handleUpdate("bank", "discount", "bank_form"),
    arrow: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Common.Discount), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rtl: language == "hebrew",
    disabled: true,
    onClick: () => handleUpdate("bank", "jerusalem", "bank_form"),
    arrow: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Common.Jerusalem)), step === "bank_form" && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 46
    }
  }, data.bank === "leumi" && __jsx(_components_LeumiForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    language: language,
    data: data,
    handleUpdate: handleUpdate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 51
    }
  })))), __jsx("div", {
    id: "mission",
    className: "mission",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].OurMission.title), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].OurMission.p1), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].OurMission.p2), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 20
    }
  }, "CoronaForms"), " ", _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].OurMission.p3), __jsx("div", {
    className: "text-right mt-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/coronaforms.svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  })))), __jsx("div", {
    className: "footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "floor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "mb-1 pt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, "CoronaForms.org ", new Date().getFullYear()), __jsx("div", {
    className: "mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_3__[language].Footer.MadeWithLoveInIsrael)), __jsx("div", {
    style: {
      background: "#000",
      height: 20
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  })));
});

/***/ }),

/***/ "./pages/style.css":
/*!*************************!*\
  !*** ./pages/style.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./strings.json":
/*!**********************!*\
  !*** ./strings.json ***!
  \**********************/
/*! exports provided: english, hebrew, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"english\":{\"Common\":{\"BankAccountNumber\":\"Bank Account Number\",\"AddAccountOwner\":\"Add Account Owner\",\"Leumi\":\"Leumi Bank\",\"Discount\":\"Discount Bank\",\"Jerusalem\":\"Jerusalem Bank\",\"AllMyMortgageLoans\":\"All My Mortgage Loans\",\"ChooseMortgageLoans\":\"Choose Mortgage Loans\",\"LoanNumbers\":\"Loan Numbers\",\"PhoneNumber\":\"Phone Number\",\"PreviewRequest\":\"Preview Request\",\"Remove\":\"Remove\",\"Next\":\"Next\",\"FullName\":\"Full Name\",\"IDNumber\":\"ID Number\",\"EmailAddressPlaceholder\":\"Email address\",\"SignUp\":\"Sign Up\",\"ComingSoon\":\"Coming soon\",\"PrivacyPolicy\":\"We respect your privacy and do not tolerate spam and will never sell your information.\"},\"Forms\":{\"ChooseBank\":{\"title\":\"Choose your bank\",\"subtitle\":\"We need to know what is your bank to get the right form.\"},\"Accounts\":{\"title\":\"Is this a sole or joint account?\",\"subtitle\":\"Make sure to add all the account owners.\"},\"MortgageTypeSelection\":{\"title\":\"Choose Mortgage Loans\",\"subtitle\":\"If you only have one choose \\\"All My Mortgage Loans\\\"\"},\"MortgageLoanNumbers\":{\"title\":\"Mortgage Loan numbers\",\"subtitle\":\"Enter the Mortgage loan numbers\"},\"BankAndContactInforamtion\":{\"title\":\"Bank & Contact Information\",\"subtitle\":\"Enter your bank account number, the near mortgage payment date and phone number.\",\"NextMortgagePaymentDate\":\"Next mortgage payment date\"},\"Signature\":{\"title\":\"We're almost done\",\"subtitle\":\"Draw your signature below.\"}},\"Header\":{\"OurMission\":\"Our mission\",\"Terms\":\"Terms\"},\"Hero\":{\"title\":\"The easiest way to find, fill and submit coronavirus related forms.\",\"subtitle\":\"The following forms are available in your region\",\"SmallBusinessAid\":\"Small Business Aid\",\"MortgageSuspension\":\"Mortgage Suspension\",\"NoFormsFound\":\"No forms were found in the current region, leave your email to get notified when new forms are available.\"},\"Countries\":{\"Israel\":\"Israel\"},\"OurMission\":{\"title\":\"The CoronaForms Mission\",\"p1\":\"We have seen the significant economic impact of the coronavirus on many people, typically the least well-paid and those self-employed or working in informal environments.\",\"p2\":\"Some governments and banks have announced economic measures to help with loans, safeguard jobs, guarantee wages and support the self-employed, but there is a lack of clarity in many countries about eligibility and the necessary paperwork behind it.\",\"p3\":\"is here to help! we use technology to make coronavirus relief more accessible for everyone.\"},\"Footer\":{\"MadeWithLoveInIsrael\":\"Made with ❤️ in Israel\"}},\"hebrew\":{\"Common\":{\"BankAccountNumber\":\"מספר חשבון בנק\",\"AddAccountOwner\":\"הוסף בעל חשבון\",\"Leumi\":\"בנק לאומי\",\"Discount\":\"בנק דיסקונט\",\"Jerusalem\":\"בנק ירושלים\",\"AllMyMortgageLoans\":\"כל המשכנתאות שלי\",\"ChooseMortgageLoans\":\"בחר הלוואות ספציפיות\",\"LoanNumbers\":\"מספרי הלוואות\",\"PhoneNumber\":\"מספר טלפון\",\"PreviewRequest\":\"תצוגה מקדימה\",\"Remove\":\"הסר\",\"Next\":\"הבא\",\"FullName\":\"שם מלא\",\"IDNumber\":\"מספר תעודת זהות\",\"EmailAddressPlaceholder\":\"כתובת מייל\",\"SignUp\":\"הירשם\",\"ComingSoon\":\"מגיע בקרוב\",\"PrivacyPolicy\":\"אנו מכבדים את פרטיותך ולעולם לא נמכור את המידע שלך.\"},\"Header\":{\"OurMission\":\"אודות\",\"Terms\":\"תנאי שימוש\"},\"Forms\":{\"ChooseBank\":{\"title\":\"בחר בנק\",\"subtitle\":\"בחר את הבנק ממנו לקחת משכנתא\"},\"Accounts\":{\"title\":\"בעלי החשבון\",\"subtitle\":\"האם זה חשבון יחיד או משותף? הוסף את כל בעלי החשבון\"},\"MortgageTypeSelection\":{\"title\":\"בחירת הלוואות\",\"subtitle\":\"אם יש לך רק משכנתא אחת בחר ״כל המשכנתאות שלי״\"},\"MortgageLoanNumbers\":{\"title\":\"מספרי הלוואות\",\"subtitle\":\"הכנס את מספרי הללואות\"},\"BankAndContactInforamtion\":{\"title\":\"מידע בנקאי ויצירת קשר\",\"subtitle\":\"הכנס את מספר חשבון הבנק שלך, תאריך חיוב המשכנתא הקרוב, ומספר הטלפון שלך.\",\"NextMortgagePaymentDate\":\"תאריך תשלום המשכנתא הבא\"},\"Signature\":{\"title\":\"כמעט סיימנו\",\"subtitle\":\"צייר את החתימה שלך למטה\"}},\"Hero\":{\"title\":\"הדרך הקלה ביותר למצוא, למלא ולשלוח טפסים בקשורים למשבר הקורונה.\",\"subtitle\":\"הטפסים הבאים זמינים במדינה שלך\",\"SmallBusinessAid\":\"עזרה לעסקים קטנים\",\"MortgageSuspension\":\"הקפאת משכנתא\",\"NoFormsFound\":\"לא נמצאו טפסים זמינים במדינה שלך, השאר את המייל שלך כדי לקבל עדכונים על טפסים חדשים.\"},\"Countries\":{\"Israel\":\"ישראל\"},\"OurMission\":{\"title\":\"המשימה שלנו\",\"p1\":\"ראינו את ההשפעה הכלכלית המשמעותית של נגיף הקורונה על אנשים רבים,אוכלוסיות מוחלשות, עצמאיים וכאלו שעובדים בעבודות לא רשמיות.\",\"p2\":\"חלק מהממשלות והבנקים הודיעו על צעדים כלכליים לסיוע בהלוואות, שמירה על משרות, הבטחת שכר ותמיכה בעצמאים, אך במדינות רבות יש חוסר בהירות לגבי הזכאות והניירת הנחוצה מאחוריה.\",\"p3\":\"כאן כדי לעזור! אנחנו משתמשים בטכנולוגיה כדי להנגיש את אותם בקלות לכולם.\"},\"Footer\":{\"MadeWithLoveInIsrael\":\"נבנה ב-❤️ בישראל\"}}}");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-grid-system":
/*!************************************!*\
  !*** external "react-grid-system" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-grid-system");

/***/ }),

/***/ "signature_pad":
/*!********************************!*\
  !*** external "signature_pad" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("signature_pad");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map