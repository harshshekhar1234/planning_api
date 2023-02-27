"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_DivisionReportDownload_js"],{

/***/ "./resources/js/components/Dashboard/DivisionReportDownload.js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Dashboard/DivisionReportDownload.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Utilities_DivisionCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utilities/DivisionCard */ "./resources/js/components/Dashboard/Utilities/DivisionCard.js");
/* harmony import */ var _store_divisions_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/divisions-action */ "./resources/js/components/store/divisions-action.js");
/* harmony import */ var _store_divisionsSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/divisionsSlice */ "./resources/js/components/store/divisionsSlice.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/LinearProgress */ "./node_modules/@mui/material/LinearProgress/LinearProgress.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












function DivisionReportDownload(_ref) {
  var id = _ref.id,
      name = _ref.name;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  var divisions = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.divisions.divisionAll;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_store_divisions_action__WEBPACK_IMPORTED_MODULE_2__.getDivisionAll)());
    return function () {
      dispatch(_store_divisionsSlice__WEBPACK_IMPORTED_MODULE_3__.divisionsActions.setDivisionAll({
        divisionAll: []
      }));
    };
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "mh1 mh4-m mh5-ns br3",
      children: divisions.map(function (division) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("main", {
          className: "w6 center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
            to: "/dashboard/outcomebudget/".concat(division.id),
            className: "no-underline",
            style: {
              textDecoration: 'none'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("article", {
              className: "dt w-100 bb b--black-20 pb2 mt2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "dtc v-mid pl3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
                  className: "f6 f5-ns fw6 lh-title black mv0",
                  children: "Directorate of ".concat(division.name)
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "dtc v-mid",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "w-100 tr",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                    className: "f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60",
                    children: "+ Download"
                  })
                })
              })]
            })
          })
        }, division.id); //         <article key={division.id} className="center ba mv4 shadow-2 h4 w5 bg-blue">
        //     <Link to={`/dashboard/outcomebudget/${division.id}`} className='no-underline flex flex-wrap' style={{ textDecoration: 'none' }}>
        //   <h1 className="f4  white mv0 pv2 ph3">{division.name}</h1>
        //   <p className="ml2 f5 b grow no-underline white dim self-end">Download Report &rarr;</p>
        //   </Link>
        // </article>
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DivisionReportDownload);

/***/ }),

/***/ "./resources/js/components/Dashboard/Utilities/DivisionCard.js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Dashboard/Utilities/DivisionCard.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function DivisionCard(_ref) {
  var division = _ref.division;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("article", {
    className: "center mw5 mw5-ns w-100 w-25-ns ba mv4 shadow-2 br3",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: "/dashboard/division/".concat(division.id),
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DivisionCard);

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



var getDivisionsData = function getDivisionsData(id, finYear) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "div_dashboard/").concat(id, "/").concat(finYear), {
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