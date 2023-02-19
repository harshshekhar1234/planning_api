"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_DepartmentDataEntry_js"],{

/***/ "./resources/js/components/Dashboard/DepartmentDataEntry.js":
/*!******************************************************************!*\
  !*** ./resources/js/components/Dashboard/DepartmentDataEntry.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _store_department_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/department-action */ "./resources/js/components/store/department-action.js");
/* harmony import */ var _store_departmentSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/departmentSlice */ "./resources/js/components/store/departmentSlice.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _DepartmentEntry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DepartmentEntry */ "./resources/js/components/Dashboard/DepartmentEntry.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









function DepartmentDataEntry() {
  var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var departmentName = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.department.name;
  });
  var departmentMessage = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.department.message;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_store_department_action__WEBPACK_IMPORTED_MODULE_1__.getDepartmentData)(params.id));
    dispatch(_store_departmentSlice__WEBPACK_IMPORTED_MODULE_2__.departmentActions.setDepartmentId({
      departmentId: params.id
    }));
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_DepartmentEntry__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: params.id,
      name: departmentName
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DepartmentDataEntry);

/***/ }),

/***/ "./resources/js/components/Dashboard/DepartmentEntry.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/Dashboard/DepartmentEntry.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Utilities_DivisionCardEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utilities/DivisionCardEntry */ "./resources/js/components/Dashboard/Utilities/DivisionCardEntry.js");
/* harmony import */ var _store_divisions_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/divisions-action */ "./resources/js/components/store/divisions-action.js");
/* harmony import */ var _store_divisionsSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/divisionsSlice */ "./resources/js/components/store/divisionsSlice.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/LinearProgress */ "./node_modules/@mui/material/LinearProgress/LinearProgress.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











function DepartmentEntry(_ref) {
  var id = _ref.id,
      name = _ref.name;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  var divisions = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.divisions.divisions;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_store_divisions_action__WEBPACK_IMPORTED_MODULE_2__.getDivisionsData)(id));
  }, []);

  if (divisions.length === 0) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
        sx: {
          width: '100%'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
        className: "tc mt2 b",
        children: "Loading..."
      })]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
      children: name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "flex flex-wrap mh1 mh4-m mh5-ns br3",
      children: divisions.map(function (division) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Utilities_DivisionCardEntry__WEBPACK_IMPORTED_MODULE_1__["default"], {
          division: division
        }, division.id);
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DepartmentEntry);

/***/ }),

/***/ "./resources/js/components/Dashboard/Utilities/DivisionCardEntry.js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Utilities/DivisionCardEntry.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function DivisionCardEntry(_ref) {
  var division = _ref.division;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("article", {
    className: "center mw5 mw5-ns w-100 w-25-ns ba mv4 shadow-2 br3",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: "/dashboard/divisionentry/".concat(division.id),
      className: "no-underline",
      style: {
        textDecoration: 'none'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
        className: "f4 bg-blue white mv0 pv2 ph3 customBorder",
        children: division.name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "pa3 bt",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
          className: "f6 b lh-copy measure mv0 black",
          children: ["Budget Estimate: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "f5",
            children: "".concat(division.outlay.toFixed(2), "(Cr)")
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
          className: "f6 b lh-copy measure mv0 black",
          children: ["Schemes: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "f5",
            children: "".concat(division.scheme)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
          className: "f6 b lh-copy measure mv0 black",
          children: ["Sub Schemes: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "f5",
            children: "".concat(division.subscheme)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
          className: "f6 b lh-copy measure mv0 black",
          children: ["Outputs: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "f5",
            children: "".concat(division.output)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
          className: "f6 b lh-copy measure mv0 black",
          children: ["Outcomes: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "f5",
            children: "".concat(division.outcome)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
          className: "f6 b lh-copy measure mv0 black",
          children: ["Output Indicators: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "f5",
            children: "".concat(division.output_indicator)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
          className: "f6 b lh-copy measure mv0 black",
          children: ["Outcome Indicators: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "f5",
            children: "".concat(division.outcome_indicator)
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "f5 b grow no-underline ph3 pv2 mb2 dib black ml2 dim",
        children: "View Details \u2192"
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DivisionCardEntry);

/***/ }),

/***/ "./resources/js/components/store/department-action.js":
/*!************************************************************!*\
  !*** ./resources/js/components/store/department-action.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDepartmentData": () => (/* binding */ getDepartmentData),
/* harmony export */   "miggetDepartmentData": () => (/* binding */ miggetDepartmentData)
/* harmony export */ });
/* harmony import */ var _departmentSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./departmentSlice */ "./resources/js/components/store/departmentSlice.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configuration */ "./resources/js/components/configuration.js");
/* harmony import */ var _errorSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorSlice */ "./resources/js/components/store/errorSlice.js");



var getDepartmentData = function getDepartmentData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "department/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.name.length !== 0) {
        dispatch(_departmentSlice__WEBPACK_IMPORTED_MODULE_0__.departmentActions.setName({
          name: res.name
        }));
        dispatch(_departmentSlice__WEBPACK_IMPORTED_MODULE_0__.departmentActions.setId({
          id: res.id
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_departmentSlice__WEBPACK_IMPORTED_MODULE_0__.departmentActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_departmentSlice__WEBPACK_IMPORTED_MODULE_0__.departmentActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var miggetDepartmentData = function miggetDepartmentData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "mig_department/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.name.length !== 0) {
        dispatch(_departmentSlice__WEBPACK_IMPORTED_MODULE_0__.departmentActions.setName({
          name: res.name
        }));
        dispatch(_departmentSlice__WEBPACK_IMPORTED_MODULE_0__.departmentActions.setId({
          id: res.id
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_departmentSlice__WEBPACK_IMPORTED_MODULE_0__.departmentActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_departmentSlice__WEBPACK_IMPORTED_MODULE_0__.departmentActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};

/***/ }),

/***/ "./resources/js/components/store/divisions-action.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/store/divisions-action.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDivisionsData": () => (/* binding */ getDivisionsData),
/* harmony export */   "miggetDivisionsData": () => (/* binding */ miggetDivisionsData),
/* harmony export */   "getDivisionData": () => (/* binding */ getDivisionData),
/* harmony export */   "getSubSchemesDivisionReport": () => (/* binding */ getSubSchemesDivisionReport),
/* harmony export */   "getCurrentSubSchemesDivisionReport": () => (/* binding */ getCurrentSubSchemesDivisionReport),
/* harmony export */   "miggetSubSchemesDivisionReport": () => (/* binding */ miggetSubSchemesDivisionReport),
/* harmony export */   "miggetSubSchemesDivisionReportAdmin": () => (/* binding */ miggetSubSchemesDivisionReportAdmin),
/* harmony export */   "getDivisionAll": () => (/* binding */ getDivisionAll)
/* harmony export */ });
/* harmony import */ var _divisionsSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./divisionsSlice */ "./resources/js/components/store/divisionsSlice.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configuration */ "./resources/js/components/configuration.js");
/* harmony import */ var _errorSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorSlice */ "./resources/js/components/store/errorSlice.js");



var getDivisionsData = function getDivisionsData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "div_dashboard/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.length !== 0) {
        dispatch(_divisionsSlice__WEBPACK_IMPORTED_MODULE_0__.divisionsActions.setDivisions({
          divisions: res
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_divisionsSlice__WEBPACK_IMPORTED_MODULE_0__.divisionsActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_divisionsSlice__WEBPACK_IMPORTED_MODULE_0__.divisionsActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var miggetDivisionsData = function miggetDivisionsData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "mig_div_dashboard/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.length !== 0) {
        dispatch(_divisionsSlice__WEBPACK_IMPORTED_MODULE_0__.divisionsActions.setDivisions({
          divisions: res
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_divisionsSlice__WEBPACK_IMPORTED_MODULE_0__.divisionsActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_divisionsSlice__WEBPACK_IMPORTED_MODULE_0__.divisionsActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var getDivisionData = function getDivisionData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "division/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.length !== 0) {
        dispatch(_divisionsSlice__WEBPACK_IMPORTED_MODULE_0__.divisionsActions.setDivision({
          division: res.name
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_divisionsSlice__WEBPACK_IMPORTED_MODULE_0__.divisionsActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_divisionsSlice__WEBPACK_IMPORTED_MODULE_0__.divisionsActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var getSubSchemesDivisionReport = function getSubSchemesDivisionReport(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "reportsubschemedivision/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_divisionsSlice__WEBPACK_IMPORTED_MODULE_0__.divisionsActions.setDivisionReport({
          divisionReport: res
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_divisionsSlice__WEBPACK_IMPORTED_MODULE_0__.divisionsActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_divisionsSlice__WEBPACK_IMPORTED_MODULE_0__.divisionsActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var getCurrentSubSchemesDivisionReport = function getCurrentSubSchemesDivisionReport(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "cur_reportsubschemedivision/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_divisionsSlice__WEBPACK_IMPORTED_MODULE_0__.divisionsActions.setDivisionReport({
          divisionReport: res
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_divisionsSlice__WEBPACK_IMPORTED_MODULE_0__.divisionsActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_divisionsSlice__WEBPACK_IMPORTED_MODULE_0__.divisionsActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var miggetSubSchemesDivisionReport = function miggetSubSchemesDivisionReport(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "mig_reportsubschemedivision/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_divisionsSlice__WEBPACK_IMPORTED_MODULE_0__.divisionsActions.setDivisionReport({
          divisionReport: res
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_divisionsSlice__WEBPACK_IMPORTED_MODULE_0__.divisionsActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_divisionsSlice__WEBPACK_IMPORTED_MODULE_0__.divisionsActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var miggetSubSchemesDivisionReportAdmin = function miggetSubSchemesDivisionReportAdmin(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "mig_reportsubschemedivision_admin/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_divisionsSlice__WEBPACK_IMPORTED_MODULE_0__.divisionsActions.setDivisionReport({
          divisionReport: res
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_divisionsSlice__WEBPACK_IMPORTED_MODULE_0__.divisionsActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_divisionsSlice__WEBPACK_IMPORTED_MODULE_0__.divisionsActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var getDivisionAll = function getDivisionAll() {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "divisionall"), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_divisionsSlice__WEBPACK_IMPORTED_MODULE_0__.divisionsActions.setDivisionAll({
          divisionAll: res.divisions
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_divisionsSlice__WEBPACK_IMPORTED_MODULE_0__.divisionsActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_divisionsSlice__WEBPACK_IMPORTED_MODULE_0__.divisionsActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};

/***/ })

}]);