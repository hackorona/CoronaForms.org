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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./pages/style.css
var style = __webpack_require__("vfuC");

// EXTERNAL MODULE: ./strings.json
var strings = __webpack_require__("BVkj");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var external_styled_jsx_style_default = /*#__PURE__*/__webpack_require__.n(style_);

// CONCATENATED MODULE: ./components/Button.js


var __jsx = external_react_default.a.createElement;


function Button(props) {
  return __jsx(external_react_["Fragment"], null, __jsx(external_styled_jsx_style_default.a, {
    id: "2848608327",
    dynamic: [props.arrow && props.rtl ? "padding-left: 30px;" : "", props.arrow && !props.rtl ? "padding-right: 30px;" : ""]
  }, [`button.__jsx-style-dynamic-selector{color:#000;border:none;outline:none;cursor:pointer;font-size:18px;font-weight:bold;padding:10px 20px;position:relative;border-radius:23px;-webkit-transition:.15s ease;transition:.15s ease;-webkit-transition-property:all;transition-property:all;background-color:#F8D57E;margin-right:26px;${props.arrow && props.rtl ? "padding-left: 30px;" : ""} ${props.arrow && !props.rtl ? "padding-right: 30px;" : ""};}`, "button.__jsx-style-dynamic-selector:disabled{opacity:0.8;background:#e2e2e2;cursor:not-allowed;}", "button.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}", "button.__jsx-style-dynamic-selector:active{-webkit-transform:scale(0.98);-ms-transform:scale(0.98);transform:scale(0.98);}", "button.__jsx-style-dynamic-selector .tooltip.__jsx-style-dynamic-selector{left:28%;color:#fff;padding:6px;bottom:40px;display:none;font-size:13px;background:#000;position:absolute;border-radius:3px;}", "button.__jsx-style-dynamic-selector:hover .tooltip.__jsx-style-dynamic-selector{display:block;}", "button.__jsx-style-dynamic-selector div.arrow-up.__jsx-style-dynamic-selector{width:0;height:0;left:43%;bottom:-10px;position:absolute;border-top:5px solid black;border-left:5px solid transparent;border-right:5px solid transparent;}", "@media only screen and (max-width:400px){button.__jsx-style-dynamic-selector{width:100%;margin-bottom:13px;margin-right:none;}button.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}button.__jsx-style-dynamic-selector .tooltip.__jsx-style-dynamic-selector{left:36%;}}"]), __jsx("button", {
    type: props.type,
    onClick: props.onClick,
    disabled: props.disabled,
    className: external_styled_jsx_style_default.a.dynamic([["2848608327", [props.arrow && props.rtl ? "padding-left: 30px;" : "", props.arrow && !props.rtl ? "padding-right: 30px;" : ""]]]) + " " + (props.className || "")
  }, props.children, props.arrow && !props.rtl && __jsx("div", {
    className: external_styled_jsx_style_default.a.dynamic([["2848608327", [props.arrow && props.rtl ? "padding-left: 30px;" : "", props.arrow && !props.rtl ? "padding-right: 30px;" : ""]]]) + " " + "arrow-right"
  }), props.arrow && props.rtl && __jsx("div", {
    className: external_styled_jsx_style_default.a.dynamic([["2848608327", [props.arrow && props.rtl ? "padding-left: 30px;" : "", props.arrow && !props.rtl ? "padding-right: 30px;" : ""]]]) + " " + "arrow-left"
  }), props.tooltip && __jsx("div", {
    className: external_styled_jsx_style_default.a.dynamic([["2848608327", [props.arrow && props.rtl ? "padding-left: 30px;" : "", props.arrow && !props.rtl ? "padding-right: 30px;" : ""]]]) + " " + "tooltip"
  }, props.tooltip, __jsx("div", {
    style: {
      position: "relative"
    },
    className: external_styled_jsx_style_default.a.dynamic([["2848608327", [props.arrow && props.rtl ? "padding-left: 30px;" : "", props.arrow && !props.rtl ? "padding-right: 30px;" : ""]]])
  }, __jsx("div", {
    className: external_styled_jsx_style_default.a.dynamic([["2848608327", [props.arrow && props.rtl ? "padding-left: 30px;" : "", props.arrow && !props.rtl ? "padding-right: 30px;" : ""]]]) + " " + "arrow-up"
  })))));
}

/* harmony default export */ var components_Button = (Button);
// CONCATENATED MODULE: ./components/NewsletterForm.js


var NewsletterForm_jsx = external_react_default.a.createElement;




function NewsletterForm(props) {
  const el = Object(external_react_["useRef"])(null);

  function handleSubmit(event) {
    event.preventDefault();

    if (typeof props.onSubmit === "function") {
      props.onSubmit(el.current.value);
    }
  }

  return NewsletterForm_jsx(external_react_["Fragment"], null, NewsletterForm_jsx(external_styled_jsx_style_default.a, {
    id: "2025885668"
  }, ["p.small.jsx-2025885668{font-size:15px;margin:0;margin-top:7.5px;text-align:left;color:#111;}"]), NewsletterForm_jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-2025885668" + " " + "newsletter"
  }, NewsletterForm_jsx("input", {
    ref: el,
    placeholder: strings.english.Common.EmailAddressPlaceholder,
    className: "jsx-2025885668" + " " + "field"
  }), NewsletterForm_jsx(components_Button, {
    arrow: true
  }, strings.english.Common.SignUp), props.subtitle && NewsletterForm_jsx("p", {
    className: "jsx-2025885668" + " " + "small"
  }, props.subtitle), props.children));
}

/* harmony default export */ var components_NewsletterForm = (NewsletterForm);
// CONCATENATED MODULE: ./components/Hero.js

var Hero_jsx = external_react_default.a.createElement;





function Hero(props) {
  const {
    0: country,
    1: setCountry
  } = Object(external_react_["useState"])(null);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(true);
  Object(external_react_["useEffect"])(() => {
    async function fetchData() {
      const response = await fetch("https://api.coronaforms.org/api/v1/geo");
      const jsonData = await response.json();
      setCountry(jsonData.countryName);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }

    fetchData();
  }, []);
  return Hero_jsx("div", {
    className: "auto hero"
  }, loading && Hero_jsx("div", {
    className: "loading"
  }, Hero_jsx("img", {
    width: "50",
    src: "/puff.svg"
  })), !loading && country === "Israel" && Hero_jsx(external_react_["Fragment"], null, props.children), !loading && country !== "Israel" && Hero_jsx(external_react_["Fragment"], null, Hero_jsx("h1", {
    className: "mb-2"
  }, strings.english.Hero.title), Hero_jsx("h2", {
    className: "mb-2 text-left"
  }, strings.english.Hero.NoFormsFound), Hero_jsx(components_NewsletterForm, {
    subtitle: strings.english.Common.PrivacyPolicy
  })));
}

/* harmony default export */ var components_Hero = (Hero);
// CONCATENATED MODULE: ./components/Input.js


var Input_jsx = external_react_default.a.createElement;

/* harmony default export */ var Input = (props => {
  const el = Object(external_react_["useRef"])(null);
  const {
    0: value,
    1: setValue
  } = Object(external_react_["useState"])("");
  const {
    0: focus,
    1: setFocus
  } = Object(external_react_["useState"])(false);

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

  return Input_jsx(external_react_["Fragment"], null, Input_jsx(external_styled_jsx_style_default.a, {
    id: "933849060",
    dynamic: [props.rtl ? "right" : "left", props.rtl ? "right" : "left", props.rtl ? "rtl" : "ltr"]
  }, [".input-field.__jsx-style-dynamic-selector{position:relative;}", `.input-field.__jsx-style-dynamic-selector label.__jsx-style-dynamic-selector{display:block;position:absolute;top:19px;${props.rtl ? "right" : "left"}:20px;font-size:24px;color:#757575;-webkit-transition:.15s ease;transition:.15s ease;-webkit-transition-property:all;transition-property:all;}`, ".input-field.focus.__jsx-style-dynamic-selector label.__jsx-style-dynamic-selector{top:8px;font-size:16px;font-weight:bold;color:#000;}", `.input-field.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector{border:none;outline:none;width:100%;padding:20px;font-size:24px;padding-top:28px;padding-right:20px;padding-bottom:10px;-webkit-transition:.15s ease;transition:.15s ease;box-sizing:border-box;-webkit-appearance:none;-webkit-transition-property:all;transition-property:all;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom:2px solid #ccc;text-align:${props.rtl ? "right" : "left"};direction:${props.rtl ? "rtl" : "ltr"};}`, ".input-field.focus.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector{border-color:#000;}"]), Input_jsx("div", {
    className: external_styled_jsx_style_default.a.dynamic([["933849060", [props.rtl ? "right" : "left", props.rtl ? "right" : "left", props.rtl ? "rtl" : "ltr"]]]) + " " + (["input-field", focus ? "focus" : ""].join(" ") || "")
  }, Input_jsx("label", {
    onClick: handleLabelClick,
    className: external_styled_jsx_style_default.a.dynamic([["933849060", [props.rtl ? "right" : "left", props.rtl ? "right" : "left", props.rtl ? "rtl" : "ltr"]]])
  }, props.label || props.placeholder), Input_jsx("input", {
    autoFocus: props.autoFocus,
    required: true,
    type: props.type === "date" && focus ? "date" : "text",
    ref: el,
    value: value,
    onChange: handleChange,
    onFocus: () => setFocus(true),
    onBlur: handleBlur,
    className: external_styled_jsx_style_default.a.dynamic([["933849060", [props.rtl ? "right" : "left", props.rtl ? "right" : "left", props.rtl ? "rtl" : "ltr"]]])
  })));
});
// EXTERNAL MODULE: external "signature_pad"
var external_signature_pad_ = __webpack_require__("G/YQ");
var external_signature_pad_default = /*#__PURE__*/__webpack_require__.n(external_signature_pad_);

// CONCATENATED MODULE: ./components/SignaturePad.js


var SignaturePad_jsx = external_react_default.a.createElement;


/* harmony default export */ var SignaturePad = (props => {
  const el = Object(external_react_["useRef"])(null);
  const {
    0: pad,
    1: setPad
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    let _ = new external_signature_pad_default.a(el.current, {
      onEnd: () => {
        props.onChange(_.toDataURL("image/png"));
      }
    });

    setPad(_);
  }, []);
  return SignaturePad_jsx(external_react_["Fragment"], null, SignaturePad_jsx(external_styled_jsx_style_default.a, {
    id: "2057520806"
  }, [".signature_wrapper.jsx-2057520806{width:275px;margin:auto;background:#eee;position:relative;border:2px solid #ccc;}", ".signature_wrapper.jsx-2057520806 button.jsx-2057520806{position:absolute;left:5px;bottom:5px;padding:5px 10px;border:none;outline:none;background:#F8D57E;color:#000;cursor:pointer;border-radius:3px;font-size:14px;font-weight:bold;opacity:0.7;}", ".signature_wrapper.jsx-2057520806 button.jsx-2057520806:hover{opacity:1;}"]), SignaturePad_jsx("div", {
    className: "jsx-2057520806" + " " + "signature_wrapper"
  }, SignaturePad_jsx("canvas", {
    width: "275",
    height: "100",
    ref: el,
    className: "jsx-2057520806"
  }), SignaturePad_jsx("button", {
    onClick: () => pad.clear(),
    type: "button",
    className: "jsx-2057520806"
  }, "RESET")));
});
// CONCATENATED MODULE: ./components/LeumiForm.js

var LeumiForm_jsx = external_react_default.a.createElement;





/* harmony default export */ var LeumiForm = (props => {
  const formEl = Object(external_react_["useRef"])(null);
  const {
    0: step,
    1: setStep
  } = Object(external_react_["useState"])(0);
  const {
    0: download,
    1: setDownload
  } = Object(external_react_["useState"])(false);
  const {
    0: fullName1,
    1: setFullName1
  } = Object(external_react_["useState"])("");
  const {
    0: fullName2,
    1: setFullName2
  } = Object(external_react_["useState"])("");
  const {
    0: fullName3,
    1: setFullName3
  } = Object(external_react_["useState"])("");
  const {
    0: IDNumber1,
    1: setIDNumber1
  } = Object(external_react_["useState"])("");
  const {
    0: IDNumber2,
    1: setIDNumber2
  } = Object(external_react_["useState"])("");
  const {
    0: IDNumber3,
    1: setIDNumber3
  } = Object(external_react_["useState"])("");
  const {
    0: accountVisible1,
    1: setAccountVisible1
  } = Object(external_react_["useState"])(false);
  const {
    0: accountVisible2,
    1: setAccountVisible2
  } = Object(external_react_["useState"])(false);
  const {
    0: signature,
    1: setSignature
  } = Object(external_react_["useState"])("");
  const {
    0: loanType,
    1: setLoanType
  } = Object(external_react_["useState"])("");
  const {
    0: loanNumbers,
    1: setLoanNumbers
  } = Object(external_react_["useState"])("");
  const {
    0: bankAccountNumber,
    1: setBankAccountNumber
  } = Object(external_react_["useState"])("");
  const {
    0: nearMortgageDate,
    1: setNearMortgageDate
  } = Object(external_react_["useState"])("");
  const {
    0: phoneNumber,
    1: setPhoneNumber
  } = Object(external_react_["useState"])("");

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

  function processPdfDocument(_download) {
    setDownload(_download ? true : false);
    formEl.current.submit();
  }

  return LeumiForm_jsx(external_react_["Fragment"], null, LeumiForm_jsx("form", {
    style: {
      display: "none"
    },
    ref: formEl,
    method: "POST",
    target: "_blank",
    action: `https://api.coronaforms.org/api/v1/pdf/leumi${download ? "?download=1" : ""}`
  }, LeumiForm_jsx("input", {
    type: "text",
    name: "full_name",
    value: fullName1
  }), LeumiForm_jsx("input", {
    type: "text",
    name: "full_name_2",
    value: fullName2
  }), LeumiForm_jsx("input", {
    type: "text",
    name: "full_name_3",
    value: fullName3
  }), LeumiForm_jsx("input", {
    type: "text",
    name: "id",
    value: IDNumber1
  }), LeumiForm_jsx("input", {
    type: "text",
    name: "id_2",
    value: IDNumber2
  }), LeumiForm_jsx("input", {
    type: "text",
    name: "id_3",
    value: IDNumber3
  }), loanType === "all_loans" && LeumiForm_jsx("input", {
    type: "text",
    name: "all_loans",
    value: "1"
  }), loanType === "specific_loans" && LeumiForm_jsx("input", {
    type: "text",
    name: "specific_loans",
    value: "1"
  }), LeumiForm_jsx("input", {
    type: "text",
    name: "loans_numbers",
    value: loanNumbers
  }), LeumiForm_jsx("input", {
    type: "text",
    name: "bank_account_number",
    value: bankAccountNumber
  }), LeumiForm_jsx("input", {
    type: "text",
    name: "near_mortgage_date",
    value: nearMortgageDate
  }), LeumiForm_jsx("input", {
    type: "text",
    name: "phone_number",
    value: phoneNumber
  }), LeumiForm_jsx("input", {
    type: "text",
    name: "sig",
    value: signature
  }), LeumiForm_jsx("input", {
    type: "text",
    name: "current_date",
    value: "1"
  })), step === 0 && LeumiForm_jsx(external_react_["Fragment"], null, LeumiForm_jsx("h1", {
    className: "mb-2"
  }, strings[props.language].Forms.Accounts.title), LeumiForm_jsx("h2", {
    className: "mb-2"
  }, strings[props.language].Forms.Accounts.subtitle), LeumiForm_jsx("form", {
    onSubmit: () => setStep(1)
  }, LeumiForm_jsx(Input, {
    rtl: props.language === "hebrew" ? true : false,
    autoFocus: true,
    required: true,
    value: fullName1,
    onChange: e => setFullName1(e.target.value),
    className: "field not-round",
    placeholder: strings[props.language].Common.FullName
  }), LeumiForm_jsx(Input, {
    rtl: props.language === "hebrew" ? true : false,
    required: true,
    value: IDNumber1,
    onChange: e => setIDNumber1(e.target.value),
    className: "field not-round",
    placeholder: strings[props.language].Common.IDNumber
  }), accountVisible1 && LeumiForm_jsx("div", {
    className: "mt-2 name_and_id"
  }, LeumiForm_jsx(Input, {
    rtl: props.language === "hebrew" ? true : false,
    required: true,
    value: fullName2,
    onChange: e => setFullName2(e.target.value),
    className: "field not-round",
    placeholder: strings[props.language].Common.FullName
  }), LeumiForm_jsx(Input, {
    rtl: props.language === "hebrew" ? true : false,
    required: true,
    value: IDNumber2,
    onChange: e => setIDNumber2(e.target.value),
    className: "field not-round",
    placeholder: strings[props.language].Common.IDNumber
  }), LeumiForm_jsx(components_Button, {
    rtl: props.language === "hebrew" ? true : false,
    onClick: () => setAccountVisible1(false)
  }, strings[props.language].Common.Remove)), accountVisible2 && LeumiForm_jsx("div", {
    className: "mt-2 mb-2 name_and_id"
  }, LeumiForm_jsx(Input, {
    rtl: props.language === "hebrew" ? true : false,
    required: true,
    value: fullName3,
    onChange: e => setFullName3(e.target.value),
    className: "field not-round",
    placeholder: strings[props.language].Common.FullName
  }), LeumiForm_jsx(Input, {
    rtl: props.language === "hebrew" ? true : false,
    required: true,
    value: IDNumber3,
    onChange: e => setIDNumber3(e.target.value),
    className: "field not-round",
    placeholder: strings[props.language].Common.IDNumber
  }), LeumiForm_jsx(components_Button, {
    rtl: props.language === "hebrew" ? true : false,
    onClick: () => setAccountVisible2(false)
  }, strings[props.language].Common.Remove)), LeumiForm_jsx("div", {
    className: "mt-2"
  }, (!accountVisible1 || !accountVisible2) && LeumiForm_jsx(components_Button, {
    rtl: props.language === "hebrew" ? true : false,
    onClick: addAccountOwner,
    type: "button"
  }, strings[props.language].Common.AddAccountOwner), LeumiForm_jsx(components_Button, {
    rtl: props.language === "hebrew" ? true : false,
    arrow: true
  }, strings[props.language].Common.Next)))), step === 1 && LeumiForm_jsx(external_react_["Fragment"], null, LeumiForm_jsx("h1", {
    className: "mb-2"
  }, strings[props.language].Forms.MortgageTypeSelection.title), LeumiForm_jsx("h2", {
    className: "mb-2"
  }, strings[props.language].Forms.MortgageTypeSelection.subtitle), LeumiForm_jsx(components_Button, {
    rtl: props.language === "hebrew" ? true : false,
    arrow: true,
    onClick: () => (setLoanType("all_loans"), setStep(3))
  }, strings[props.language].Common.AllMyMortgageLoans), LeumiForm_jsx(components_Button, {
    rtl: props.language === "hebrew" ? true : false,
    onClick: () => (setLoanType("specific_loans"), setStep(2))
  }, strings[props.language].Common.ChooseMortgageLoans)), step === 2 && LeumiForm_jsx(external_react_["Fragment"], null, LeumiForm_jsx("form", {
    onSubmit: () => setStep(3)
  }, LeumiForm_jsx("h1", {
    className: "mb-2"
  }, strings[props.language].Forms.MortgageLoanNumbers.title), LeumiForm_jsx("h2", {
    className: "mb-2"
  }, strings[props.language].Forms.MortgageLoanNumbers.subtitle), LeumiForm_jsx(Input, {
    rtl: props.language === "hebrew" ? true : false,
    autoFocus: true,
    value: loanNumbers,
    onChange: e => setLoanNumbers(e.target.value),
    required: true,
    className: "field not-round",
    label: strings[props.language].Common.LoanNumbers
  }), LeumiForm_jsx(components_Button, {
    rtl: props.language === "hebrew" ? true : false,
    className: "mt-2",
    arrow: true
  }, strings[props.language].Common.Next))), step === 3 && LeumiForm_jsx(external_react_["Fragment"], null, LeumiForm_jsx("form", {
    onSubmit: () => setStep(4)
  }, LeumiForm_jsx("h1", {
    className: "mb-2"
  }, strings[props.language].Forms.BankAndContactInforamtion.title), LeumiForm_jsx("h2", {
    className: "mb-2"
  }, strings[props.language].Forms.BankAndContactInforamtion.subtitle), LeumiForm_jsx(Input, {
    rtl: props.language === "hebrew" ? true : false,
    autoFocus: true,
    value: bankAccountNumber,
    onChange: e => setBankAccountNumber(e.target.value),
    required: true,
    className: "field not-round",
    placeholder: strings[props.language].Common.BankAccountNumber
  }), LeumiForm_jsx(Input, {
    rtl: props.language === "hebrew" ? true : false,
    value: nearMortgageDate,
    onChange: e => setNearMortgageDate(e.target.value),
    label: strings[props.language].Forms.BankAndContactInforamtion.NextMortgagePaymentDate,
    type: "date",
    required: true,
    className: "field not-round"
  }), LeumiForm_jsx(Input, {
    rtl: props.language === "hebrew" ? true : false,
    value: phoneNumber,
    onChange: e => setPhoneNumber(e.target.value),
    required: true,
    className: "field not-round",
    placeholder: strings[props.language].Common.PhoneNumber
  }), LeumiForm_jsx(components_Button, {
    rtl: props.language === "hebrew" ? true : false,
    className: "mt-2",
    arrow: true,
    onClick: () => setStep(3)
  }, strings[props.language].Common.Next))), step === 4 && LeumiForm_jsx(external_react_["Fragment"], null, LeumiForm_jsx("h1", {
    className: "mb-2"
  }, strings[props.language].Forms.Signature.title), LeumiForm_jsx("h2", {
    className: "mb-2"
  }, strings[props.language].Forms.Signature.subtitle), LeumiForm_jsx(SignaturePad, {
    onChange: signatureDataURL => setSignature(signatureDataURL)
  }), LeumiForm_jsx(components_Button, {
    rtl: props.language === "hebrew" ? true : false,
    onClick: () => processPdfDocument(false),
    className: "mt-2",
    arrow: true
  }, strings[props.language].Common.PreviewRequest), LeumiForm_jsx(components_Button, {
    rtl: props.language === "hebrew" ? true : false,
    onClick: () => processPdfDocument(true),
    className: "mt-2",
    arrow: true
  }, strings[props.language].Common.Download)));
});
// EXTERNAL MODULE: external "react-grid-system"
var external_react_grid_system_ = __webpack_require__("HABd");

// CONCATENATED MODULE: ./pages/_app.js

var _app_jsx = external_react_default.a.createElement;







/* harmony default export */ var _app = __webpack_exports__["default"] = (() => {
  const {
    0: step,
    1: setStep
  } = Object(external_react_["useState"])("main");
  const {
    0: language,
    1: setLanguage
  } = Object(external_react_["useState"])(null);
  const {
    0: bank,
    1: setBank
  } = Object(external_react_["useState"])(null);

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

  Object(external_react_["useEffect"])(() => {
    setLanguage(get("lang", navigator.language.indexOf("he") === 0 ? "hebrew" : "english"));
  }, []);
  return language && _app_jsx("div", {
    className: language
  }, _app_jsx(external_react_grid_system_["Container"], null, _app_jsx(external_react_grid_system_["Row"], {
    className: "header"
  }, _app_jsx(external_react_grid_system_["Col"], {
    xs: 4
  }, _app_jsx("img", {
    onClick: () => setStep("main"),
    src: "/logo.svg"
  })), _app_jsx(external_react_grid_system_["Col"], {
    xs: 8,
    className: "menuItems"
  }, _app_jsx("a", {
    href: "#mission"
  }, strings[language].Header.OurMission), _app_jsx("a", {
    href: "#terms-of-use"
  }, strings[language].Header.Terms))), _app_jsx("div", {
    className: "text-center mt-2"
  }, _app_jsx(components_Hero, null, step === "main" && _app_jsx(external_react_["Fragment"], null, _app_jsx("h1", {
    className: "mb-2"
  }, strings[language].Hero.title), _app_jsx("h2", {
    className: "mb-2"
  }, strings[language].Hero.subtitle), _app_jsx(components_Button, {
    rtl: language == "hebrew",
    disabled: true,
    tooltip: strings[language].Common.ComingSoon,
    arrow: true
  }, strings[language].Hero.SmallBusinessAid), _app_jsx(components_Button, {
    rtl: language == "hebrew",
    arrow: true,
    onClick: () => setStep("choose_bank")
  }, strings[language].Hero.MortgageSuspension)), step === "choose_bank" && _app_jsx(external_react_["Fragment"], null, _app_jsx("h1", {
    className: "mb-2"
  }, strings[language].Forms.ChooseBank.title), _app_jsx("h2", {
    className: "mb-2"
  }, strings[language].Forms.ChooseBank.subtitle), _app_jsx(components_Button, {
    rtl: language == "hebrew",
    onClick: () => (setBank("leumi"), setStep("bank_form")),
    arrow: true
  }, strings[language].Common.Leumi), _app_jsx(components_Button, {
    rtl: language == "hebrew",
    disabled: true,
    onClick: () => (setBank("discount"), setStep("bank_form")),
    arrow: true
  }, strings[language].Common.Discount), _app_jsx(components_Button, {
    rtl: language == "hebrew",
    disabled: true,
    onClick: () => (setBank("jerusalem"), setStep("bank_form")),
    arrow: true
  }, strings[language].Common.Jerusalem)), step === "bank_form" && _app_jsx(external_react_["Fragment"], null, bank === "leumi" && _app_jsx(LeumiForm, {
    language: language
  })))), _app_jsx("div", {
    id: "mission",
    className: "mission"
  }, _app_jsx("h3", null, strings[language].OurMission.title), _app_jsx("p", null, strings[language].OurMission.p1), _app_jsx("p", null, strings[language].OurMission.p2), _app_jsx("p", null, _app_jsx("strong", null, "CoronaForms"), " ", strings[language].OurMission.p3), _app_jsx("div", {
    className: "text-right mt-3"
  }, _app_jsx("img", {
    src: "/coronaforms.svg"
  })))), _app_jsx("div", {
    className: "footer"
  }, _app_jsx("div", {
    className: "floor"
  }), _app_jsx(external_react_grid_system_["Container"], null, _app_jsx(external_react_grid_system_["Row"], null, _app_jsx(external_react_grid_system_["Col"], {
    md: 6
  }, _app_jsx("div", {
    className: "mb-1 pt-1"
  }, "CoronaForms.org ", new Date().getFullYear()), _app_jsx("div", {
    className: "mb-1"
  }, strings[language].Footer.MadeWithLoveInIsrael)), _app_jsx(external_react_grid_system_["Col"], {
    md: 6,
    className: "language-links"
  }, language === "hebrew" && _app_jsx("a", {
    href: "#",
    onClick: () => changeLangauge("english")
  }, "Also available in English"), language === "english" && _app_jsx("a", {
    href: "#",
    onClick: () => changeLangauge("hebrew")
  }, "\u05D6\u05DE\u05D9\u05DF \u05D2\u05DD \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA")))), _app_jsx("div", {
    style: {
      background: "#000",
      height: 20
    }
  })));
});

/***/ }),

/***/ "BVkj":
/***/ (function(module) {

module.exports = JSON.parse("{\"english\":{\"Common\":{\"BankAccountNumber\":\"Bank Account Number\",\"AddAccountOwner\":\"Add Account Owner\",\"Leumi\":\"Leumi Bank\",\"Discount\":\"Discount Bank\",\"Jerusalem\":\"Jerusalem Bank\",\"AllMyMortgageLoans\":\"All My Mortgage Loans\",\"ChooseMortgageLoans\":\"Choose Mortgage Loans\",\"LoanNumbers\":\"Loan Numbers\",\"PhoneNumber\":\"Phone Number\",\"PreviewRequest\":\"Preview Request\",\"Remove\":\"Remove\",\"Next\":\"Next\",\"FullName\":\"Full Name\",\"IDNumber\":\"ID Number\",\"EmailAddressPlaceholder\":\"Email address\",\"SignUp\":\"Sign Up\",\"ComingSoon\":\"Coming soon\",\"PrivacyPolicy\":\"We respect your privacy and do not tolerate spam and will never sell your information.\"},\"Forms\":{\"ChooseBank\":{\"title\":\"Choose your bank\",\"subtitle\":\"We need to know what is your bank to get the right form.\"},\"Accounts\":{\"title\":\"Is this a sole or joint account?\",\"subtitle\":\"Make sure to add all the account owners.\"},\"MortgageTypeSelection\":{\"title\":\"Choose Mortgage Loans\",\"subtitle\":\"If you only have one choose \\\"All My Mortgage Loans\\\"\"},\"MortgageLoanNumbers\":{\"title\":\"Mortgage Loan numbers\",\"subtitle\":\"Enter the Mortgage loan numbers\"},\"BankAndContactInforamtion\":{\"title\":\"Bank & Contact Information\",\"subtitle\":\"Enter your bank account number, the near mortgage payment date and phone number.\",\"NextMortgagePaymentDate\":\"Next mortgage payment date\"},\"Signature\":{\"title\":\"We're almost done\",\"subtitle\":\"Draw your signature below.\"}},\"Header\":{\"OurMission\":\"Our mission\",\"Terms\":\"Terms\"},\"Hero\":{\"title\":\"The easiest way to find, fill and submit coronavirus related forms.\",\"subtitle\":\"The following forms are available in your region\",\"SmallBusinessAid\":\"Small Business Aid\",\"MortgageSuspension\":\"Mortgage Suspension\",\"NoFormsFound\":\"No forms were found in the current region, leave your email to get notified when new forms are available.\"},\"Countries\":{\"Israel\":\"Israel\"},\"OurMission\":{\"title\":\"The CoronaForms Mission\",\"p1\":\"We have seen the significant economic impact of the coronavirus on many people, typically the least well-paid and those self-employed or working in informal environments.\",\"p2\":\"Some governments and banks have announced economic measures to help with loans, safeguard jobs, guarantee wages and support the self-employed, but there is a lack of clarity in many countries about eligibility and the necessary paperwork behind it.\",\"p3\":\"is here to help! we use technology to make coronavirus relief more accessible for everyone.\"},\"Footer\":{\"MadeWithLoveInIsrael\":\"Made with ❤️ in Israel\"}},\"hebrew\":{\"Common\":{\"BankAccountNumber\":\"מספר חשבון בנק\",\"AddAccountOwner\":\"הוסף בעל חשבון\",\"Leumi\":\"בנק לאומי\",\"Discount\":\"בנק דיסקונט\",\"Jerusalem\":\"בנק ירושלים\",\"AllMyMortgageLoans\":\"כל המשכנתאות שלי\",\"ChooseMortgageLoans\":\"בחר הלוואות ספציפיות\",\"LoanNumbers\":\"מספרי הלוואות\",\"PhoneNumber\":\"מספר טלפון\",\"PreviewRequest\":\"תצוגה מקדימה\",\"Remove\":\"הסר\",\"Next\":\"הבא\",\"FullName\":\"שם מלא\",\"IDNumber\":\"מספר תעודת זהות\",\"EmailAddressPlaceholder\":\"כתובת מייל\",\"SignUp\":\"הירשם\",\"ComingSoon\":\"מגיע בקרוב\",\"PrivacyPolicy\":\"אנו מכבדים את פרטיותך ולעולם לא נמכור את המידע שלך.\"},\"Header\":{\"OurMission\":\"אודות\",\"Terms\":\"תנאי שימוש\"},\"Forms\":{\"ChooseBank\":{\"title\":\"בחר בנק\",\"subtitle\":\"בחר את הבנק ממנו לקחת משכנתא\"},\"Accounts\":{\"title\":\"בעלי החשבון\",\"subtitle\":\"האם זה חשבון יחיד או משותף? הוסף את כל בעלי החשבון\"},\"MortgageTypeSelection\":{\"title\":\"בחירת הלוואות\",\"subtitle\":\"אם יש לך רק משכנתא אחת בחר ״כל המשכנתאות שלי״\"},\"MortgageLoanNumbers\":{\"title\":\"מספרי הלוואות\",\"subtitle\":\"הכנס את מספרי הללואות\"},\"BankAndContactInforamtion\":{\"title\":\"מידע בנקאי ויצירת קשר\",\"subtitle\":\"הכנס את מספר חשבון הבנק שלך, תאריך חיוב המשכנתא הקרוב, ומספר הטלפון שלך.\",\"NextMortgagePaymentDate\":\"תאריך תשלום המשכנתא הבא\"},\"Signature\":{\"title\":\"כמעט סיימנו\",\"subtitle\":\"צייר את החתימה שלך למטה\"}},\"Hero\":{\"title\":\"הדרך הקלה ביותר למצוא, למלא ולשלוח טפסים בקשורים למשבר הקורונה.\",\"subtitle\":\"הטפסים הבאים זמינים במדינה שלך\",\"SmallBusinessAid\":\"עזרה לעסקים קטנים\",\"MortgageSuspension\":\"הקפאת משכנתא\",\"NoFormsFound\":\"לא נמצאו טפסים זמינים במדינה שלך, השאר את המייל שלך כדי לקבל עדכונים על טפסים חדשים.\"},\"Countries\":{\"Israel\":\"ישראל\"},\"OurMission\":{\"title\":\"המשימה שלנו\",\"p1\":\"ראינו את ההשפעה הכלכלית המשמעותית של נגיף הקורונה על אנשים רבים,אוכלוסיות מוחלשות, עצמאיים וכאלו שעובדים בעבודות לא רשמיות.\",\"p2\":\"חלק מהממשלות והבנקים הודיעו על צעדים כלכליים לסיוע בהלוואות, שמירה על משרות, הבטחת שכר ותמיכה בעצמאים, אך במדינות רבות יש חוסר בהירות לגבי הזכאות והניירת הנחוצה מאחוריה.\",\"p3\":\"כאן כדי לעזור! אנחנו משתמשים בטכנולוגיה כדי להנגיש את אותם בקלות לכולם.\"},\"Footer\":{\"MadeWithLoveInIsrael\":\"נבנה ב-❤️ בישראל\"}}}");

/***/ }),

/***/ "G/YQ":
/***/ (function(module, exports) {

module.exports = require("signature_pad");

/***/ }),

/***/ "HABd":
/***/ (function(module, exports) {

module.exports = require("react-grid-system");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "vfuC":
/***/ (function(module, exports) {



/***/ })

/******/ });