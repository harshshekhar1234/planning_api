"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_Departments_js"],{

/***/ "./resources/js/components/Dashboard/Departments.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/Dashboard/Departments.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _store_departments_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/departments-action */ "./resources/js/components/store/departments-action.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Utilities_DepartmentCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utilities/DepartmentCard */ "./resources/js/components/Dashboard/Utilities/DepartmentCard.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/LinearProgress */ "./node_modules/@mui/material/LinearProgress/LinearProgress.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










function Departments() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var departments = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.departments.departments;
  });
  var message = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.departments.message;
  });
  var finYear = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.finYear.finYear;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_store_departments_action__WEBPACK_IMPORTED_MODULE_1__.getDepartmentsData)(finYear));
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: departments.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
        sx: {
          width: '100%'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_6__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
        className: "tc mt2 b",
        children: "Loading..."
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "flex flex-wrap mh1 mh4-m mh5-ns br3",
      children: departments.map(function (department) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Utilities_DepartmentCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
          department: department
        }, department.id);
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Departments);

/***/ }),

/***/ "./resources/js/components/Dashboard/Utilities/DepartmentCard.js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Dashboard/Utilities/DepartmentCard.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function DepartmentCard(_ref) {
  var department = _ref.department;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("article", {
    className: "center mw5 w-100 w-25-ns ba mv4 shadow-2 br3",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: "/dashboard/departmentdata/".concat(department.id),
      className: "no-underline",
      style: {
        textDecoration: 'none'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
        className: "f4 bg-blue white mv0 pv2 ph3 customBorder",
        children: department.name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "pa3 bt",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
          className: "f6 b lh-copy measure mv0 black",
          children: ["Budget Estimate: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "f5",
            children: "".concat(department.outlay.toFixed(2), "(Cr)")
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
          className: "f6 b lh-copy measure mv0 black",
          children: ["Schemes: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "f5",
            children: "".concat(department.scheme)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
          className: "f6 b lh-copy measure mv0 black",
          children: ["Sub Schemes: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "f5",
            children: "".concat(department.subscheme)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
          className: "f6 b lh-copy measure mv0 black",
          children: ["Outputs: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "f5",
            children: "".concat(department.output)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
          className: "f6 b lh-copy measure mv0 black",
          children: ["Outcomes: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "f5",
            children: "".concat(department.outcome)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
          className: "f6 b lh-copy measure mv0 black",
          children: ["Output Indicators: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "f5",
            children: "".concat(department.output_indicator)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
          className: "f6 b lh-copy measure mv0 black",
          children: ["Outcome Indicators: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "f5",
            children: "".concat(department.outcome_indicator)
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "f5 b grow no-underline ph3 pv2 mb2 dib black ml2 dim",
        children: "View Details \u2192"
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DepartmentCard);

/***/ }),

/***/ "./resources/js/components/store/departments-action.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/store/departments-action.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDepartmentsData": () => (/* binding */ getDepartmentsData),
/* harmony export */   "miggetDepartmentsData": () => (/* binding */ miggetDepartmentsData)
/* harmony export */ });
/* harmony import */ var _departmentsSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./departmentsSlice */ "./resources/js/components/store/departmentsSlice.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configuration */ "./resources/js/components/configuration.js");
/* harmony import */ var _errorSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorSlice */ "./resources/js/components/store/errorSlice.js");



var getDepartmentsData = function getDepartmentsData(finYear) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "dept_dashboard/").concat(finYear), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.length !== 0) {
        dispatch(_departmentsSlice__WEBPACK_IMPORTED_MODULE_0__.departmentsActions.setDepartments({
          departments: res
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_departmentsSlice__WEBPACK_IMPORTED_MODULE_0__.departmentsActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_departmentsSlice__WEBPACK_IMPORTED_MODULE_0__.departmentsActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var miggetDepartmentsData = function miggetDepartmentsData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "mig_dept_dashboard"), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.length !== 0) {
        dispatch(_departmentsSlice__WEBPACK_IMPORTED_MODULE_0__.departmentsActions.setDepartments({
          departments: res
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_departmentsSlice__WEBPACK_IMPORTED_MODULE_0__.departmentsActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_departmentsSlice__WEBPACK_IMPORTED_MODULE_0__.departmentsActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};

/***/ })

}]);