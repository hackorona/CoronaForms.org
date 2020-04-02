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
  var formEl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      step = _useState[0],
      setStep = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      fullName1 = _useState2[0],
      setFullName1 = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      fullName2 = _useState3[0],
      setFullName2 = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      fullName3 = _useState4[0],
      setFullName3 = _useState4[1];

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

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      loanType = _useState11[0],
      setLoanType = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      loanNumbers = _useState12[0],
      setLoanNumbers = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      bankAccountNumber = _useState13[0],
      setBankAccountNumber = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      nearMortgageDate = _useState14[0],
      setNearMortgageDate = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      phoneNumber = _useState15[0],
      setPhoneNumber = _useState15[1];

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
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "text",
    name: "full_name",
    value: fullName1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx("input", {
    type: "text",
    name: "full_name_2",
    value: fullName2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), __jsx("input", {
    type: "text",
    name: "full_name_3",
    value: fullName3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }), __jsx("input", {
    type: "text",
    name: "id",
    value: IDNumber1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }), __jsx("input", {
    type: "text",
    name: "id_2",
    value: IDNumber2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx("input", {
    type: "text",
    name: "id_3",
    value: IDNumber3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }), loanType === "all_loans" && __jsx("input", {
    type: "text",
    name: "all_loans",
    value: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 42
    }
  }), loanType === "specific_loans" && __jsx("input", {
    type: "text",
    name: "specific_loans",
    value: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 47
    }
  }), __jsx("input", {
    type: "text",
    name: "loans_numbers",
    value: loanNumbers,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }), __jsx("input", {
    type: "text",
    name: "bank_account_number",
    value: bankAccountNumber,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }), __jsx("input", {
    type: "text",
    name: "near_mortgage_date",
    value: nearMortgageDate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }), __jsx("input", {
    type: "text",
    name: "phone_number",
    value: phoneNumber,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }), __jsx("input", {
    type: "text",
    name: "sig",
    value: signature,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }), __jsx("input", {
    type: "text",
    name: "current_date",
    value: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  })), step === 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 24
    }
  }, __jsx("h1", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Forms.Accounts.title), __jsx("h2", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Forms.Accounts.subtitle), __jsx("form", {
    onSubmit: function onSubmit() {
      return setStep(1);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    autoFocus: true,
    required: true,
    value: fullName1,
    onChange: function onChange(e) {
      return setFullName1(e.target.value);
    },
    className: "field not-round",
    placeholder: _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Common.FullName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    required: true,
    value: IDNumber1,
    onChange: function onChange(e) {
      return setIDNumber1(e.target.value);
    },
    className: "field not-round",
    placeholder: _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Common.IDNumber,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }), accountVisible1 && __jsx("div", {
    className: "mt-2 name_and_id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 37
    }
  }, __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    required: true,
    value: fullName2,
    onChange: function onChange(e) {
      return setFullName2(e.target.value);
    },
    className: "field not-round",
    placeholder: _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Common.FullName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    required: true,
    value: IDNumber2,
    onChange: function onChange(e) {
      return setIDNumber2(e.target.value);
    },
    className: "field not-round",
    placeholder: _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Common.IDNumber,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return setAccountVisible1(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Common.Next)), accountVisible2 && __jsx("div", {
    className: "mt-2 mb-2 name_and_id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 37
    }
  }, __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    required: true,
    value: fullName3,
    onChange: function onChange(e) {
      return setFullName3(e.target.value);
    },
    className: "field not-round",
    placeholder: _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Common.FullName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    required: true,
    value: IDNumber3,
    onChange: function onChange(e) {
      return setIDNumber3(e.target.value);
    },
    className: "field not-round",
    placeholder: _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Common.IDNumber,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return setAccountVisible2(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, "Remove")), __jsx("div", {
    className: "mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, (!accountVisible1 || !accountVisible2) && __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: addAccountOwner,
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 64
    }
  }, "Add Account Owner"), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    arrow: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Common.Next)))), step === 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 24
    }
  }, __jsx("h1", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Forms.MortgageTypeSelection.title), __jsx("h2", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Forms.MortgageTypeSelection.subtitle), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    arrow: true,
    onClick: function onClick() {
      return setLoanType("all_loans"), setStep(3);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Common.AllMyMortgageLoans), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return setLoanType("specific_loans"), setStep(2);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Common.ChooseMortgageLoans)), step === 2 && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 24
    }
  }, __jsx("form", {
    onSubmit: function onSubmit() {
      return setStep(3);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Forms.MortgageLoanNumbers.title), __jsx("h2", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Forms.MortgageLoanNumbers.subtitle), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    autoFocus: true,
    value: loanNumbers,
    onChange: function onChange(e) {
      return setLoanNumbers(e.target.value);
    },
    required: true,
    className: "field not-round",
    label: _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Common.LoanNumbers,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "mt-2",
    arrow: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Common.Next))), step === 3 && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 24
    }
  }, __jsx("form", {
    onSubmit: function onSubmit() {
      return setStep(4);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Forms.BankAndContactInforamtion.title), __jsx("h2", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Forms.BankAndContactInforamtion.subtitle), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    autoFocus: true,
    value: bankAccountNumber,
    onChange: function onChange(e) {
      return setBankAccountNumber(e.target.value);
    },
    required: true,
    className: "field not-round",
    placeholder: "Bank account number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: nearMortgageDate,
    onChange: function onChange(e) {
      return setNearMortgageDate(e.target.value);
    },
    label: _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Forms.BankAndContactInforamtion.NextMortgagePaymentDate,
    type: "date",
    required: true,
    className: "field not-round",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: phoneNumber,
    onChange: function onChange(e) {
      return setPhoneNumber(e.target.value);
    },
    required: true,
    className: "field not-round",
    placeholder: _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Common.PhoneNumber,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "mt-2",
    arrow: true,
    onClick: function onClick() {
      return setStep(3);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Common.Next))), step === 4 && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 24
    }
  }, __jsx("h1", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Signature.title), __jsx("h2", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Signature.subtitle), __jsx(_components_SignaturePad__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onChange: function onChange(signatureDataURL) {
      return setSignature(signatureDataURL);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: previewPdfDocument,
    className: "mt-2",
    arrow: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, _strings_json__WEBPACK_IMPORTED_MODULE_1__.english.Common.PreviewRequest)));
});

/***/ })

})
//# sourceMappingURL=_app.js.a65bef53f0ae8bab7644.hot-update.js.map