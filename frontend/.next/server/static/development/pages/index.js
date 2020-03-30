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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/form.js":
/*!****************************!*\
  !*** ./components/form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ronmasas/Desktop/coronaforms.org/frontend/components/form.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (({
  title,
  subtitle,
  buttons
}) => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 12
    }
  }, __jsx("div", {
    style: {
      margin: "auto",
      maxWidth: 670,
      fontWeight: "bold",
      fontSize: 39,
      lineHeight: "50px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, title), __jsx("div", {
    className: "mt-2",
    style: {
      maxWidth: 670,
      margin: "auto",
      marginTop: 26
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, subtitle), __jsx("div", {
    style: {
      marginTop: 26
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, buttons));
});

/***/ }),

/***/ "./components/language.js":
/*!********************************!*\
  !*** ./components/language.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  languages: {
    hebrew: "עברית",
    english: "English"
  },
  english: {
    countries: {
      Israel: "Israel"
    },
    header: {
      OurMission: "Our mission",
      Terms: "Terms"
    },
    title: "We are here to help you find, fill and sign covid-19 related forms.",
    subtitle: "The following forms are available in your region",
    forms: {
      SmallBusinessAid: "Small Business Aid",
      MortgageRelief: "Mortgage Relief"
    },
    mission_section: {
      title: "The CoronaForms Mission",
      p1: "We have seen the significant economic impact of the coronavirus on many people, typically the least well-paid and those self-employed or working in informal environments.",
      p2: "Some governments and banks have announced economic measures to help with loans, safeguard jobs, guarantee wages and support the self-employed, but there is a lack of clarity in many countries about eligibility and the necessary paperwork behind it.",
      p3: "is here to help! we use technology to make coronavirus reliefs more accessible for everyone."
    },
    footer: {
      MadeWithLoveInIsrael: "Made with ❤️ in Israel"
    },
    placeholders: {
      FullName: "Elon Mask",
      IDNumber: "ID Number"
    },
    common: {
      ComingSoon: "Coming soon",
      Discount: "Discount Bank",
      Leumi: "Leumi Bank",
      Jerusalem: "Jerusalem Bank",
      ImDone: "I'm Done",
      Yes: "Yes",
      No: "No",
      Next: "Next"
    },
    questions: [{
      id: "Bank",
      title: "Choose your bank",
      subtitle: "A number of banks in Israel allow you to postpone the 90-day mortgage payment to check if you are eligible for this relief you must fill out a form and send it to your bank"
    }, {
      id: "Full name",
      title: "What is your full name?",
      subtitle: ""
    }, {
      id: "ID Number",
      title: "What is your ID Number?",
      subtitle: ""
    }, {
      id: "Mortgages",
      title: "Do you want to delay all mortgages in your account?",
      subtitle: "If you only have one then click Yes"
    }, {
      id: "Loan numbers",
      title: "Type the loan numbers you want to delay",
      subtitle: "If there is more than one loan number enter all comma separated numbers."
    }, {
      id: "Bank account number",
      title: 'What is your bank account number?',
      subtitle: ""
    }, {
      id: "Next billing date",
      title: 'What is the upcoming mortgage billing date?',
      subtitle: ""
    }, {
      id: "Phone number",
      title: "What is your phone number?",
      subtitle: "A bank will send you an SMS as soon as a decision is made regarding your request."
    }, {
      id: "Signature",
      title: "We're almost done",
      subtitle: "Draw your signature and click \"I'm Done\""
    }]
  },
  hebrew: {
    countries: {
      Israel: "ישראל"
    },
    header: {
      OurMission: "אודות",
      Terms: "תנאי שימוש"
    },
    title: "אנחנו פה כדי לעזור לך למצוא, למלא, ולחתום על טפסים אשר קשורים למשבר הקורונה.",
    subtitle: "הטפסים הבאים זמינים באיזור שלך",
    forms: {
      SmallBusinessAid: "עזרה לעסקים קטנים",
      MortgageRelief: "דחיית משכנתא"
    },
    mission_section: {
      title: "קצת עלינו",
      p1: "ראינו את ההשפעה הכלכלית המשמעותית של נגיף הקורונה על אנשים רבים, בדרך כלל הפחות משתלמים ועל עצמאיים או עובדים בסביבות לא פורמליות.",
      p2: "חלק מהממשלות והבנקים הודיעו על צעדים כלכליים לסיוע בהלוואות, שמירה על משרות, הבטחת שכר ותמיכה בעצמאים, אך במדינות רבות יש חוסר בהירות לגבי זכאות וניירת הנחוצה מאחוריה.",
      p3: "כאן כדי לעזור! אנחנו משתמשים בטכנולוגיה כדי להנגיש הקלות הקשורות לנגיף הקורונה."
    },
    footer: {
      MadeWithLoveInIsrael: "נבנה ב-❤️ בישראל"
    },
    placeholders: {
      FullName: "אילן מאסק",
      IDNumber: "מספר ת\"ז"
    },
    common: {
      ComingSoon: "מגיע בקרוב",
      Discount: "בנק דיסקונט",
      Leumi: "בנק לאומי",
      Jerusalem: "בנק ירושלים",
      ImDone: "סיימתי",
      Yes: "כן",
      No: "לא",
      Next: "הבא"
    },
    questions: [{
      id: "בנק",
      title: "בחרו את הבנק שלכם",
      subtitle: "מספר בנקים בישראל מאפשרים לדחות את תשלומי המשכנתא ב-90 יום, כדי לבדוק אם אתם זכאים להקלה זו עלייכם למלא טופס ולשלוח אותו לבנק שלכם"
    }, {
      id: "שם מלא",
      title: "מהוא השם המלא שלך?",
      subtitle: ""
    }, {
      id: "תעודת זהות",
      title: "מה הוא מספר תעודת הזהות שלך?",
      subtitle: ""
    }, {
      id: "בחירת הלוואות",
      title: "האם אתה רוצה לדחות את כל המשכנתאות בחשבון שלך?",
      subtitle: "אם יש לך רק אחת אז כנראה שכן"
    }, {
      id: "מספרי הלוואות",
      title: "הקלד את מספרי ההלוואות שברצונך לדחות",
      subtitle: "אם יש יותר ממספר הלוואה אחד הכנס את כל המספרים מופרדים בפסיק."
    }, {
      id: "מספר חשבון בנק",
      title: 'מהו מספר חשבון העו"ש ממנו יורדת המשכנתא?',
      subtitle: ""
    }, {
      id: "תאריך חיוב קרוב",
      title: 'מהו תאריך חיוב המשכנתא הקרוב?',
      subtitle: ""
    }, {
      id: "מספר טלפון",
      title: "מהו מספר הטלפון שלך?",
      subtitle: "בנק ישלח לך הודעת SMS ברגע שתתקבל החלטה בקשר לבקשה שלך."
    }, {
      id: "חתימה",
      title: "נשאר רק לחתום",
      subtitle: "אתה יכל לצייר את החתימה שלך עם העכבר פה למטה"
    }]
  }
});

/***/ }),

/***/ "./components/signature-pad.js":
/*!*************************************!*\
  !*** ./components/signature-pad.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! signature_pad */ "signature_pad");
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(signature_pad__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ronmasas/Desktop/coronaforms.org/frontend/components/signature-pad.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (props => {
  const el = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    0: pad,
    1: setPad
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let _ = new signature_pad__WEBPACK_IMPORTED_MODULE_1___default.a(el.current, {
      onEnd: () => {
        props.onChange(_.toDataURL("image/png"));
      }
    });

    setPad(_);
  }, []);
  return __jsx("div", {
    style: {
      width: 304,
      margin: "auto"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }
  }, __jsx("div", {
    style: {
      backgroundColor: "#eee"
    },
    className: "mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("canvas", {
    style: {
      border: "2px solid #ccc"
    },
    ref: el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  })), __jsx("button", {
    onClick: () => pad.clear(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, props.resetButtonText), props.nextButton);
});

/***/ }),

/***/ "./components/styles.js":
/*!******************************!*\
  !*** ./components/styles.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "625717669",
    __self: undefined
  }, "body{margin:0;padding:0;background:#FCF9E9;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-backface-visibility:hidden;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;}input{width:100%;border:none;background:transparent;box-sizing:border-box;padding:10px 20px;font-size:34px;text-align:center;outline:none;border-bottom:2px solid black;}.hebrew{direction:rtl;}select{background:none;border:none;outline:none;}a{color:black;}ul{list-style-type:none;padding:0;margin:0;}ul li{color:#444;padding-right:10px;padding-top:3px;padding-bottom:3px;cursor:pointer;border-right:2px solid transparent;}ul li.active{font-weight:bold;border-color:#F8D57E;}.english ul li{border-right:none;padding-left:10px;padding-right:0;border-left:2px solid transparent;}.english ul li.active{border-color:#F8D57E;}.menu_items a{margin-left:13px;}p{font-size:18px;line-height:24px;margin:0;padding:0;margin-bottom:13px;}img.responsive{width:100%;}mt-1{margin-top:13px;}.mt-2{margin-top:26px;}.mt-3{margin-top:39px;}.mt-4{margin-top:52px;}.mb-1{margin-bottom:13px;}.mb-2{margin-bottom:26px;}.mb-3{margin-bottom:39px;}.mb-4{margin-bottom:52px;}.center{text-align:center;}.footer{margin-top:52px;font-size:13px;text-align:center;}button{color:#000;font-size:18px;font-weight:bold;background-color:#F8D57E;border-radius:23px;padding:10px 20px;border:none;cursor:pointer;outline:none;margin-left:26px;-webkit-transition:.15s ease;transition:.15s ease;-webkit-transition-property:all;transition-property:all;position:relative;}button:hover{background-color:#ffd262;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}button:active{background-color:#ffd262;-webkit-transform:scale(0.99);-ms-transform:scale(0.99);transform:scale(0.99);}button:disabled{opacity:0.8;background:#e2e2e2;cursor:not-allowed;}button.with_icon{padding-right:35px;}button.with_icon img{position:absolute;right:15px;top:10px;}button:hover .tooltip{display:block;}button .tooltip{position:absolute;background:#000;color:#fff;border-radius:3px;padding:6px;font-size:13px;bottom:-35px;left:26%;display:none;}.arrow-up{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid black;position:absolute;top:-10px;left:43%;}.mission p{max-width:1000px;}.relative{position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb25tYXNhcy9EZXNrdG9wL2Nvcm9uYWZvcm1zLm9yZy9mcm9udGVuZC9jb21wb25lbnRzL3N0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDOEIsQUFHb0IsQUFTSSxBQVdHLEFBR0UsQUFLSixBQUdTLEFBS1YsQUFRTSxBQUlDLEFBTUcsQUFHSixBQUdGLEFBT0osQUFHSyxBQUdBLEFBR0EsQUFHQSxBQUlHLEFBR0EsQUFHQSxBQUdBLEFBR0QsQUFHRixBQUtMLEFBZWMsQUFJQSxBQUliLEFBS08sQUFHRCxBQUtKLEFBR0ksQUFXVixBQVVTLEFBRUssUUFYYixDQXpKRCxFQVNJLEFBMkJPLEFBK0J2QixBQW9DbUIsQ0EzRW5CLEFBa0d1QixFQTFHdkIsQUF1SEEsQ0EvRXFCLENBckNMLEFBK0NoQixBQUdBLEFBR0EsQUFHQSxBQW1CbUIsQ0F0RE0sQUFhekIsQUFpR3NDLEFBU3RDLENBbkhzQixBQStDdEIsQUF1Q2UsQUFRSyxBQXNCTyxDQW5LTixBQWtGckIsQUFHQSxBQUdBLEFBR0EsQUF1Q0EsRUFwR2MsQUF1QmQsRUE1QzJCLEVBNEdGLEFBSUMsQ0FsQkwsRUFoRkosQ0ErR0osQ0FsR08sQ0FMUixBQW1FVSxBQTRCQyxDQWxFVixFQWtGRSxFQTlGSyxFQS9DZ0IsQUEyQ3BDLEFBMkZBLEVBdkdBLENBUkEsQUFxQ2MsRUEyQ2UsRUF1Q1AsQ0FySUksQUEyQkosR0E4RHRCLENBNEJBLENBakV1QixBQTRGZ0IsQ0F6R0QsV0ErRnRCLEVBMUdHLEdBM0JHLEFBOEZDLEVBMUN2QixFQTdEcUMsR0ErSW5CLEtBMUdxQixNQTNCcEIsQUFzQ25CLEFBeUdrQyxDQWpEWixHQXdDTCxVQTVCakIsQ0F6R3NCLEVBNkd0QixBQXlCYSxFQXhDRyxFQXhHcUIsS0FpSnBCLEdBNUdqQixDQW9Ic0IsQ0FoREgsRUE5RkYsTUF1SWpCLE9BdElrQyxBQThGakIsRUFnREgsUUF6SjRILEVBMEo3SCxDQWhEUSxRQWlEckIsU0EvSUEsQUErRnlCLGtEQUNHLHdEQUNOLENBNUd0QixpQkE2R0EiLCJmaWxlIjoiL1VzZXJzL3Jvbm1hc2FzL0Rlc2t0b3AvY29yb25hZm9ybXMub3JnL2Zyb250ZW5kL2NvbXBvbmVudHMvc3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIHJldHVybiA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkNGOUU5O1xuICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbiAgICAgICAgfVxuICAgICAgICAuaGVicmV3e1xuICAgICAgICAgICAgZGlyZWN0aW9uOiBydGw7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYXtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgICAgICB1bHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgfVxuICAgICAgICB1bCBsaXtcbiAgICAgICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTozcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgICB1bCBsaS5hY3RpdmV7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI0Y4RDU3RTtcbiAgICAgICAgfVxuICAgICAgICAuZW5nbGlzaCB1bCBsaXtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIC5lbmdsaXNoIHVsIGxpLmFjdGl2ZXtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI0Y4RDU3RTtcbiAgICAgICAgfVxuICAgICAgICAubWVudV9pdGVtcyBhe1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEzcHg7XG4gICAgICAgIH1cbiAgICAgICAgcHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEzcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW1nLnJlc3BvbnNpdmV7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBtdC0xe1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICAgICAgfVxuICAgICAgICAubXQtMntcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLm10LTN7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzOXB4O1xuICAgICAgICB9XG4gICAgICAgIC5tdC00e1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTJweDtcbiAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAubWItMXtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEzcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm1iLTJ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5tYi0ze1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzlweDtcbiAgICAgICAgfVxuICAgICAgICAubWItNHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUycHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNlbnRlcntcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVye1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTJweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBidXR0b257XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RDU3RTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI2cHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuMTVzIGVhc2U7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDI2MjtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246YWN0aXZle1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDI2MjtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OSk7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmRpc2FibGVke1xuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2UyZTJlMjtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uLndpdGhfaWNvbntcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uLndpdGhfaWNvbiBpbWd7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXIgLnRvb2x0aXB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBidXR0b24gLnRvb2x0aXB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgICAgICBmb250LXNpemU6MTNweDtcbiAgICAgICAgICAgIGJvdHRvbTogLTM1cHg7XG4gICAgICAgICAgICBsZWZ0OiAyNiU7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5hcnJvdy11cCB7XG4gICAgICAgICAgICB3aWR0aDogMDsgXG4gICAgICAgICAgICBoZWlnaHQ6IDA7IFxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgICAgIGxlZnQ6IDQzJTtcbiAgICAgICAgfVxuICAgICAgICAubWlzc2lvbiBwe1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJlbGF0aXZle3Bvc2l0aW9uOnJlbGF0aXZlO31cbiAgICAgIGB9PC9zdHlsZT5cbn0iXX0= */\n/*@ sourceURL=/Users/ronmasas/Desktop/coronaforms.org/frontend/components/styles.js */");
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/form */ "./components/form.js");
/* harmony import */ var _components_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/styles */ "./components/styles.js");
/* harmony import */ var _components_language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/language */ "./components/language.js");
/* harmony import */ var _components_signature_pad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/signature-pad */ "./components/signature-pad.js");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-grid-system */ "react-grid-system");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/ronmasas/Desktop/coronaforms.org/frontend/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (() => {
  const el = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    0: currLang,
    1: setCurrLang
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("hebrew");
  const {
    0: currCountry,
    1: setCurrCountry
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Israel");
  const {
    0: formState,
    1: setFormState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: form,
    1: setForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    current_date: 1
  });

  function updateForm(key, value) {
    console.log("key", key, "value", value);
    let newForm = JSON.parse(JSON.stringify(form));
    newForm[key] = value;

    if (key === "all_loans" && value) {
      delete newForm["specific_loans"];
      delete newForm["loans_numbers"];
    }

    if (key === "loans_numbers") {
      if (value) {
        delete newForm["all_loans"];
        newForm["specific_loans"] = "1";
      } else {
        delete newForm["specific_loans"];
        newForm["all_loans"] = "1";
      }
    }

    setForm(newForm);
  }

  function handleNext(to, key, value) {
    if (typeof value !== "string") {
      value = value.value;
    }

    return () => {
      updateForm(key, value);
      setFormState(to);
    };
  }

  async function generatePDF() {
    document.querySelector("form.preview").submit();
  }

  return __jsx("div", {
    className: currLang,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 12
    }
  }, __jsx(_components_styles__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      height: 70
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    className: "mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 4,
    style: {
      lineHeight: "70px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/logo.svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 64
    }
  })), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    className: "menu_items",
    xs: 8,
    style: {
      textAlign: currLang === "hebrew" ? "left" : "right",
      lineHeight: "70px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].header.OurMission), __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].header.Terms)))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    className: "mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, formState === 0 && __jsx("div", {
    style: {
      textAlign: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 37
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].title,
    subtitle: __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 35
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].subtitle, ": ", __jsx("strong", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 67
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].countries[currCountry])),
    buttons: __jsx("div", {
      className: "mt-2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 34
      }
    }, __jsx("button", {
      disabled: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 29
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].forms.SmallBusinessAid, __jsx("div", {
      className: "tooltip",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "relative",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 37
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.ComingSoon, __jsx("div", {
      className: "arrow-up",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 97
      }
    })))), __jsx("button", {
      onClick: () => setFormState(1),
      className: "with_icon",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 29
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].forms.MortgageRelief, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 33
      }
    }))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  })), formState > 0 && __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 35
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions.map((q, index) => {
    return __jsx("li", {
      key: index,
      onClick: () => formState > index + 1 ? setFormState(index + 1) : null,
      className: formState <= index ? "" : "active",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 40
      }
    }, q.id);
  }))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 9,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "center mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }, formState === 1 && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[0].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[0].subtitle,
    buttons: __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 46
      }
    }, __jsx("button", {
      onClick: handleNext(2, "bank", "leumi"),
      className: "with_icon",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 41
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Leumi, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 45
      }
    })), __jsx("button", {
      onClick: handleNext(2, "bank", "discount"),
      className: "with_icon",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 41
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Discount, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 45
      }
    })), __jsx("button", {
      onClick: handleNext(2, "bank", "jerusalem"),
      className: "with_icon",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 41
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Jerusalem, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 45
      }
    }))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 33
    }
  })), formState === 2 && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[1].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[1].subtitle,
    buttons: __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 46
      }
    }, __jsx("div", {
      style: {
        maxWidth: 700,
        margin: "auto"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 41
      }
    }, __jsx("form", {
      onSubmit: e => (e.preventDefault(), handleNext(3, "full_name", el.current)()),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 45
      }
    }, __jsx("input", {
      required: true,
      ref: el,
      autoFocus: true,
      className: "mb-2",
      placeholder: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].placeholders.FullName,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 49
      }
    }), __jsx("button", {
      className: "with_icon",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 49
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Next, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 53
      }
    }))))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 33
    }
  })), formState === 3 && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[2].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[2].subtitle,
    buttons: __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 46
      }
    }, __jsx("div", {
      style: {
        maxWidth: 700,
        margin: "auto"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 41
      }
    }, __jsx("form", {
      onSubmit: e => (e.preventDefault(), handleNext(4, "id", el.current)()),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 45
      }
    }, __jsx("input", {
      required: true,
      ref: el,
      autoFocus: true,
      className: "mb-2",
      placeholder: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].placeholders.IDNumber,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 49
      }
    }), __jsx("button", {
      className: "with_icon",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 49
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Next, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 53
      }
    }))))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 33
    }
  })), formState === 4 && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[3].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[3].subtitle,
    buttons: __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 46
      }
    }, __jsx("div", {
      style: {
        maxWidth: 700,
        margin: "auto"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 41
      }
    }, __jsx("button", {
      onClick: handleNext(6, "all_loans", "1"),
      className: "with_icon",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 45
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Yes, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 49
      }
    })), __jsx("button", {
      onClick: handleNext(5, "all_loans", "0"),
      className: "with_icon",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 45
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.No, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 49
      }
    })))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 33
    }
  })), formState === 5 && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[4].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[4].subtitle,
    buttons: __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 46
      }
    }, __jsx("div", {
      style: {
        maxWidth: 700,
        margin: "auto"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 41
      }
    }, __jsx("form", {
      onSubmit: e => (e.preventDefault(), handleNext(6, "loans_numbers", el.current)()),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 45
      }
    }, __jsx("input", {
      required: true,
      ref: el,
      autoFocus: true,
      className: "mb-2",
      placeholder: "1234, 5678",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 49
      }
    }), __jsx("button", {
      className: "with_icon",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 49
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Next, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 53
      }
    }))))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 33
    }
  })), formState === 6 && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[5].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[5].subtitle,
    buttons: __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 46
      }
    }, __jsx("div", {
      style: {
        maxWidth: 700,
        margin: "auto"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 41
      }
    }, __jsx("form", {
      onSubmit: e => (e.preventDefault(), handleNext(7, "bank_account_number", el.current)()),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 45
      }
    }, __jsx("input", {
      required: true,
      ref: el,
      autoFocus: true,
      className: "mb-2",
      placeholder: "000000",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 49
      }
    }), __jsx("button", {
      className: "with_icon",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 49
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Next, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 53
      }
    }))))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 33
    }
  })), formState === 7 && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[6].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[6].subtitle,
    buttons: __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 46
      }
    }, __jsx("div", {
      style: {
        maxWidth: 700,
        margin: "auto"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 41
      }
    }, __jsx("form", {
      onSubmit: e => (e.preventDefault(), handleNext(8, "near_mortgage_date", el.current)()),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 45
      }
    }, __jsx("input", {
      type: "date",
      ref: el,
      required: true,
      autoFocus: true,
      className: "mb-2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 49
      }
    }), __jsx("button", {
      className: "with_icon",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 49
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Next, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 53
      }
    }))))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 33
    }
  })), formState === 8 && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[7].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[7].subtitle,
    buttons: __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 46
      }
    }, __jsx("div", {
      style: {
        maxWidth: 700,
        margin: "auto"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 41
      }
    }, __jsx("form", {
      onSubmit: e => (e.preventDefault(), handleNext(9, "phone_number", el.current)()),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 45
      }
    }, __jsx("input", {
      type: "tel",
      ref: el,
      required: true,
      autoFocus: true,
      className: "mb-2",
      placeholder: "050-1234567",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 49
      }
    }), __jsx("button", {
      className: "with_icon",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 49
      }
    }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.Next, __jsx("img", {
      src: "/arrow-right.svg",
      width: "10",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 53
      }
    }))))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 33
    }
  })), formState === 9 && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 49
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[8].title,
    subtitle: _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].questions[8].subtitle,
    buttons: __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 46
      }
    }, __jsx("div", {
      style: {
        maxWidth: 700,
        margin: "auto"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 41
      }
    }, __jsx(_components_signature_pad__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onChange: sig => updateForm("sig", sig),
      resetButtonText: "RESET",
      nextButton: __jsx("button", {
        onClick: () => generatePDF(),
        className: "with_icon",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 61
        }
      }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].common.ImDone, __jsx("img", {
        src: "/arrow-right.svg",
        width: "10",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 53
        }
      })),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 45
      }
    }))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 33
    }
  }), __jsx("form", {
    className: "preview",
    style: {
      display: "none"
    },
    method: "POST",
    action: "http://localhost:8080/api/v1/pdf/" + form.bank,
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 33
    }
  }, Object.keys(form).map((key, index) => {
    return __jsx("input", {
      key: index,
      type: "text",
      name: key,
      onChange: e => console.log(e),
      value: form[key],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 48
      }
    });
  }))))))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    className: "mt-4 mission",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 17
    }
  }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].mission_section.title), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 17
    }
  }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].mission_section.p1), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 17
    }
  }, _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].mission_section.p2), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 17
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 20
    }
  }, "CoronaForms"), " ", _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].mission_section.p3), __jsx("div", {
    className: "mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "responsive",
    style: {
      minWidth: 270,
      maxWidth: 770
    },
    src: "/cleaning.svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 21
    }
  }))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    className: "footer mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 13
    }
  }, "CoronaForms.org ", new Date().getFullYear(), " - ", _components_language__WEBPACK_IMPORTED_MODULE_3__["default"][currLang].footer.MadeWithLoveInIsrael, __jsx("div", {
    className: "mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 17
    }
  }, currLang === "hebrew" && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 47
    }
  }, __jsx("a", {
    onClick: () => setCurrLang("english"),
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 25
    }
  }, "Also available in English")), currLang === "english" && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 48
    }
  }, __jsx("a", {
    onClick: () => setCurrLang("hebrew"),
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 25
    }
  }, "\u05D6\u05DE\u05D9\u05DF \u05D2\u05DD \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA"))))));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ronmasas/Desktop/coronaforms.org/frontend/pages/index.js */"./pages/index.js");


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
//# sourceMappingURL=index.js.map