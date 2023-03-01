"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_MigrationSubScheme_js"],{

/***/ "./resources/js/components/Dashboard/MigrationSubScheme.js":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Dashboard/MigrationSubScheme.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _store_subschemes_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/subschemes-actions */ "./resources/js/components/store/subschemes-actions.js");
/* harmony import */ var _store_schemesSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/schemesSlice */ "./resources/js/components/store/schemesSlice.js");
/* harmony import */ var _store_subschemesSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/subschemesSlice */ "./resources/js/components/store/subschemesSlice.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_html_table_to_excel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-html-table-to-excel */ "./node_modules/react-html-table-to-excel/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function MigrationSubScheme() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useParams)();
  var report = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.subschemes.report;
  });
  var subschemename = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.subschemes.subschemename;
  });
  var subschemecode = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.subschemes.subschemecode;
  });
  var schemeStateName = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.schemes.schemeStateName;
  });
  var schemeCenterName = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.schemes.schemeCenterName;
  });
  var schemeCenterCode = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.schemes.schemeCenterCode;
  });
  var schemeStateCode = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.schemes.schemeStateCode;
  });
  var demand_no = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.subschemes.demand_no;
  });
  var department_name = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.subschemes.department_name;
  });
  var division_name = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.subschemes.division_name;
  });
  var sanction = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.subschemes.sanction;
  });
  var allotment = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.subschemes.allotment;
  });
  var expenditure = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.subschemes.expenditure;
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      rowofspan = _useState2[0],
      setRowofspan = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('outputindicators'),
      _useState4 = _slicedToArray(_useState3, 2),
      toDisplay = _useState4[0],
      setToDisplay = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_store_subschemes_actions__WEBPACK_IMPORTED_MODULE_1__.miggetSubSchemesReport)(params.id));
    dispatch((0,_store_subschemes_actions__WEBPACK_IMPORTED_MODULE_1__.miggetSubSchemesHeaderReport)(params.id));
    return function () {
      dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_3__.subschemesActions.setSubSchemeReport({
        report: []
      }));
      dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_3__.subschemesActions.setSubSchemeName({
        subschemename: ''
      }));
      dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_3__.subschemesActions.setSubSchemeCode({
        subschemecode: ''
      }));
      dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_3__.subschemesActions.setDemandNo({
        demand_no: ''
      }));
      dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_3__.subschemesActions.setDepartmentName({
        department_name: ''
      }));
      dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_3__.subschemesActions.setDivisionName({
        division_name: ''
      }));
      dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_2__.schemesActions.setSchemeStateName({
        schemeStateName: ''
      }));
      dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_2__.schemesActions.setSchemeCenterName({
        schemeCenterName: ''
      }));
      dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_2__.schemesActions.setSchemeCenterCode({
        schemeCenterCode: ''
      }));
      dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_2__.schemesActions.setSchemeStateCode({
        schemeStateCode: ''
      }));
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (report.status === 200) {
      var toRender = report.outputindicators.length >= report.outcomeindicators.length ? 'outputindicators' : 'outcomeindicators';

      if (toRender === 'outputindicators') {
        setRowofspan(report.outputindicators.length);
        setToDisplay('outputindicators');
      }

      if (toRender === 'outcomeindicators') {
        setRowofspan(report.outcomeindicators.length);
        setToDisplay('outcomeindicators');
      }
    }
  }, [report]); // const handleOutputLoop = (i) => {
  //    if(i === 0){
  //     setOutputLoop(report.outputs[0])
  //     setOutputLoopRow(i + outputloop.outputindicatorscount)
  //     return
  //    }
  //    if(i === outputlooprow){
  //     setOutputLoop(report.outputs[outputloopcount])
  //     setOutputLoopcount(prevState => prevState + 1)
  //     setOutputLoopRow(prevState => prevState + outputloop.outputindicatorscount)
  //     return
  //    }
  // }

  var outputloop1 = 0;
  var outputloopcount1 = 1;
  var outputlooprow1 = 1;
  var outputindicatorloop = report.status === 200 ? report.outputindicators.filter(function (indicator) {
    return indicator.output_id === report.outputs[0].id;
  }) : [];
  var outcomeloop1 = 0;
  var outcomeloopcount1 = 1;
  var outcomelooprow1 = 1;
  var outcomeindicatorloop = report.status === 200 ? report.outcomeindicators.filter(function (indicator) {
    return indicator.outcome_id === report.outcomes[0].id;
  }) : [];

  var calculatepercentexpendituresanction = function calculatepercentexpendituresanction(expenditure, sanction) {
    var percent = 0;

    if (parseFloat(expenditure) === 0) {
      return percent;
    }

    if (parseFloat(sanction) === 0) {
      return percent;
    }

    percent = parseFloat(expenditure) / parseFloat(sanction) * 100;
    return parseFloat(percent.toFixed(2));
  };

  var calculatepercentexpenditureallotment = function calculatepercentexpenditureallotment(expenditure, allotment) {
    var percent = 0;

    if (parseFloat(expenditure) === 0) {
      return percent;
    }

    if (parseFloat(allotment) === 0) {
      return percent;
    }

    percent = parseFloat(expenditure) / parseFloat(allotment) * 100;
    return parseFloat(percent.toFixed(2));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "pa4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_html_table_to_excel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "test-table-xls-button",
        className: "f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green",
        table: "table-to-xls",
        filename: "".concat(subschemecode),
        sheet: "".concat(subschemecode),
        buttonText: "Download Report"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "overflow-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table", {
          id: "table-to-xls",
          className: "table-bordered",
          style: {
            "borderWidth": "1px",
            'borderColor': "#000000",
            'borderStyle': 'solid',
            textAlign: "center"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table", {
            className: "f6 w-100 center mb3 ba",
            cellSpacing: "0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("tr", {
              style: {
                "borderWidth": "1px",
                'borderColor': "#000000",
                'borderStyle': 'solid',
                textAlign: "center"
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                colSpan: "12",
                style: {
                  "borderWidth": "1px",
                  'borderColor': "#000000",
                  'borderStyle': 'solid',
                  textAlign: "center",
                  fontWeight: 'bold'
                },
                children: "Detailed Report"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tbody", {
              className: "lh-copy",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                className: "stripe-dark table-bordered",
                style: {
                  "borderWidth": "1px",
                  'borderColor': "#000000",
                  'borderStyle': 'solid'
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  className: "pa3 tl table-bordered",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    textAlign: "left",
                    fontWeight: 'bold'
                  },
                  children: "Financial Year"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  className: "pa3 tl table-bordered",
                  colSpan: "11",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    textAlign: "left"
                  },
                  children: "2023-24"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                className: "stripe-dark ba",
                style: {
                  "borderWidth": "1px",
                  'borderColor': "#000000",
                  'borderStyle': 'solid',
                  textAlign: "left"
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  className: "pa3 tl",
                  style: {
                    fontWeight: 'bold'
                  },
                  children: "Name of secretariat department"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  className: "pa3 tl",
                  colSpan: "11",
                  children: "".concat(demand_no, "-").concat(department_name, "(").concat(division_name, ")")
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                className: "stripe-dark ba",
                style: {
                  "borderWidth": "1px",
                  'borderColor': "#000000",
                  'borderStyle': 'solid',
                  textAlign: "left"
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  className: "pa3 tl",
                  style: {
                    fontWeight: 'bold'
                  },
                  children: "Name of the state scheme"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  className: "pa3 tl",
                  colSpan: "11",
                  children: "".concat(schemeStateCode ? schemeStateCode : '0000', "-").concat(schemeStateName ? schemeStateName : '0000')
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                className: "stripe-dark ba",
                style: {
                  "borderWidth": "1px",
                  'borderColor': "#000000",
                  'borderStyle': 'solid',
                  textAlign: "left"
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  className: "pa3 tl",
                  style: {
                    fontWeight: 'bold'
                  },
                  children: "Name of the center scheme"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  className: "pa3 tl",
                  colSpan: "11",
                  children: "".concat(schemeCenterCode ? schemeCenterCode : 'NAPL', "-").concat(schemeCenterName ? schemeCenterName : 'NAPL')
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                className: "stripe-dark ba",
                style: {
                  "borderWidth": "1px",
                  'borderColor': "#000000",
                  'borderStyle': 'solid',
                  textAlign: "left"
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  className: "pa3 tl",
                  style: {
                    fontWeight: 'bold'
                  },
                  children: "Name of the sub-scheme"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  className: "pa3 tl",
                  colSpan: "11",
                  children: "".concat(subschemecode, "-").concat(subschemename)
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                className: "stripe-dark ba",
                style: {
                  "borderWidth": "1px",
                  'borderColor': "#000000",
                  'borderStyle': 'solid',
                  textAlign: "left"
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  className: "pa3 tl b",
                  style: {
                    fontWeight: 'bold'
                  },
                  children: "Budget Estimate (in Lakhs)"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  className: "pa3 tl",
                  colSpan: "11",
                  children: report.financial_outlay
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "overflow-auto",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table", {
              className: "f6 w-100 mw8 center ba",
              cellSpacing: "0",
              style: {
                "borderWidth": "1px",
                'borderColor': "#000000",
                'borderStyle': 'solid',
                'textAlign': "center",
                'verticalAlign': "center"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                  className: " b--black-80 tc pb3 pr3 b reportextcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Social Category"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                  className: " b--black-80 tc b reportextcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Gender Category"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                  className: " b--black-80 tc b reportoutputcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Output"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                  className: " b--black-80 tc b reportoutputcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Output Indicators"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                  className: " b--black-80 tc b reportoutputcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Target"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                  className: " b--black-80 tc b reportoutputcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Unit of measurement"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                  className: " b--black-80 tc b reportoutcomecolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Outcome"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                  className: " b--black-80 tc b reportoutcomecolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Outcome Indicators"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                  className: " b--black-80 tc b reportoutcomecolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Targets"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                  className: " b--black-80 tc b reportoutputcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Unit of measurement"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                  className: " b--black-80 tc reportextcolor b",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Sustainable Development Goals"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                  className: " b--black-80 tc pb3 pr3 reportextcolor b",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Risk Factors/Any Other Remarks"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tbody", {
                className: "lh-copy ba",
                children: [toDisplay === 'outputindicators' && report.status === 200 && report.outputindicators.map(function (indicator, i) {
                  var handleloop = function handleloop(i) {
                    if (i === 0) {
                      outputloop1 = report.outputs[0].outputindicatorscount;
                      outputlooprow1 = i + outputloop1;
                    }

                    if (i === outputlooprow1) {
                      outputloop1 = report.outputs[outputloopcount1].outputindicatorscount;
                      outputindicatorloop = outputindicatorloop.concat(report.outputindicators.filter(function (indicator) {
                        return indicator.output_id === report.outputs[outputloopcount1].id;
                      }));
                      outputloopcount1 = outputloopcount1 + 1;
                      outputlooprow1 = outputlooprow1 + outputloop1;
                    }
                  };

                  var handleoutcomeloop = function handleoutcomeloop(i) {
                    if (i === 0) {
                      outcomeloop1 = report.outcomes[0].outcomeindicatorscount;
                      outcomelooprow1 = i + outcomeloop1;
                    }

                    if (i === outcomelooprow1) {
                      outcomeloop1 = report.outcomes[outcomeloopcount1] ? report.outcomes[outcomeloopcount1].outcomeindicatorscount : 100;
                      outcomeindicatorloop = report.outcomes[outcomeloopcount1] ? outcomeindicatorloop.concat(report.outcomeindicators.filter(function (indicator) {
                        return indicator.outcome_id === report.outcomes[outcomeloopcount1].id;
                      })) : [];
                      outcomeloopcount1 = outcomeloopcount1 + 1;
                      outcomelooprow1 = outcomelooprow1 + outcomeloop1;
                    }
                  };

                  var handleOutputTarget = function handleOutputTarget(id) {
                    var target = '';
                    target = report.target_outputs.filter(function (target) {
                      return target.outputindicator_id === id;
                    });
                    return parseFloat(target[0].value);
                  };

                  var handleOutputAchievement = function handleOutputAchievement(id) {
                    var achievement = '';
                    achievement = report.achievement_outputs.filter(function (achievement) {
                      return achievement.outputindicator_id === id;
                    });
                    return achievement.length !== 0 ? parseFloat(achievement[0].value) : 0;
                  };

                  var handleOutputAchievementPercent = function handleOutputAchievementPercent(id) {
                    var achievement = '';
                    achievement = report.achievement_outputs.filter(function (achievement) {
                      return achievement.outputindicator_id === id;
                    });
                    var target = '';
                    target = report.target_outputs.filter(function (target) {
                      return target.outputindicator_id === id;
                    });
                    var percent = '';

                    if (achievement.length !== 0 && target.length !== 0) {
                      if (parseFloat(target[0].value) === 0) {
                        return percent = 0;
                      }

                      percent = Math.round(parseFloat(achievement[0].value) / parseFloat(target[0].value) * 100);
                    }

                    if (achievement.length === 0 && target.length !== 0) {
                      percent = 0;
                    }

                    if (achievement.length !== 0 && target.length === 0) {
                      percent = 0;
                    }

                    if (achievement.length === 0 && target.length === 0) {
                      percent = 0;
                    }

                    return percent;
                  };

                  var handleOutcomeTarget = function handleOutcomeTarget(id) {
                    var target = '';
                    target = report.target_outcomes.filter(function (target) {
                      return target.outcomeindicator_id === id;
                    });
                    return target.length !== 0 ? parseFloat(target[0].value) : null;
                  };

                  var handleOutcomeMeasurement = function handleOutcomeMeasurement(id) {
                    var target = '';
                    target = report.target_outcomes.filter(function (target) {
                      return target.outcomeindicator_id === id;
                    });
                    return target.length !== 0 ? target[0].measurement : null;
                  };

                  var handleOutcomeAchievement = function handleOutcomeAchievement(id) {
                    var achievement = '';
                    achievement = report.achievement_outcomes.filter(function (achievement) {
                      return achievement.outcomeindicator_id === id;
                    });
                    return achievement.length !== 0 ? parseFloat(achievement[0].value) : 0;
                  };

                  var handleOutcomeAchievementPercent = function handleOutcomeAchievementPercent(id) {
                    var achievement = '';
                    achievement = report.achievement_outcomes.filter(function (achievement) {
                      return achievement.outcomeindicator_id === id;
                    });
                    var target = '';
                    target = report.target_outcomes.filter(function (target) {
                      return target.outcomeindicator_id === id;
                    });
                    var percent = '';

                    if (achievement.length !== 0 && target.length !== 0) {
                      if (parseFloat(target[0].value) === 0) {
                        return percent = 0;
                      }

                      percent = Math.round(parseFloat(achievement[0].value) / parseFloat(target[0].value) * 100);
                    }

                    if (achievement.length === 0 && target.length !== 0) {
                      percent = 0;
                    }

                    if (achievement.length !== 0 && target.length === 0) {
                      percent = 0;
                    }

                    if (achievement.length === 0 && target.length === 0) {
                      percent = 0;
                    }

                    return percent;
                  };

                  var handleOutputMeasurement = function handleOutputMeasurement(id) {
                    var target = '';
                    target = report.target_outputs.filter(function (target) {
                      return target.outputindicator_id === id;
                    });
                    return target[0].measurement;
                  };

                  var socialcategory = function socialcategory() {
                    var social = report.socials.map(function (social) {
                      return social['name'];
                    });
                    return social.toString();
                  };

                  var gendercategory = function gendercategory() {
                    var gender = report.genders.map(function (gender) {
                      return gender['name'];
                    });
                    return gender.toString();
                  };

                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                    children: [i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportextcolor b--black-80",
                      rowSpan: rowofspan,
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: socialcategory()
                    }) : null, i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportextcolor b--black-80",
                      rowSpan: rowofspan,
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: gendercategory()
                    }) : null, i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportoutputcolor b--black-80",
                      rowSpan: report.outputs[0].outputindicatorscount,
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: report.outputs[0].name
                    }) : null, i === outputlooprow1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportoutputcolor b--black-80",
                      rowSpan: report.outputs[outputloopcount1].outputindicatorscount,
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: report.outputs[outputloopcount1].name
                    }) : null, handleloop(i), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportoutputcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: outputindicatorloop[i].name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportoutputcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: handleOutputTarget(outputindicatorloop[i].id)
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportoutputcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: handleOutputMeasurement(outputindicatorloop[i].id)
                    }), i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportoutcomecolor b--black-80",
                      rowSpan: report.outcomes[0].outcomeindicatorscount,
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: report.outcomes[0].name
                    }) : null, i === outcomelooprow1 && report.outcomes[outcomeloopcount1] ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportoutcomecolor b--black-80",
                      rowSpan: report.outcomes[outcomeloopcount1].outcomeindicatorscount,
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: report.outcomes[outcomeloopcount1].name
                    }) : null, handleoutcomeloop(i), outcomeindicatorloop[i] !== undefined ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3  b--black-80 reportoutcomecolor",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: outcomeindicatorloop[i].name
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3  b--black-80 reportoutcomecolor",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: ''
                    }), outcomeindicatorloop[i] !== undefined ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3  b--black-80 reportoutcomecolor",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: ''
                    }), outcomeindicatorloop[i] !== undefined ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3  b--black-80 reportoutcomecolor",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: handleOutcomeTarget(outcomeindicatorloop[i] ? outcomeindicatorloop[i].id : 10000)
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3  b--black-80 reportoutcomecolor",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: ''
                    }), outcomeindicatorloop[i] !== undefined ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3  b--black-80 reportoutcomecolor",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: handleOutcomeMeasurement(outcomeindicatorloop[i] ? outcomeindicatorloop[i].id : 10000)
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3  b--black-80 reportoutcomecolor",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: ''
                    }), i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportextcolor b--black-80",
                      rowSpan: rowofspan,
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: "Goal ".concat(report.sdg[0].goal_number, ": ").concat(report.sdg[0].goal_name)
                    }) : null, i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportextcolor b--black-80",
                      rowSpan: rowofspan,
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: report.subscheme.initial_remarks ? report.subscheme.initial_remarks.split('\n').map(function (item) {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                          children: [item, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {})]
                        });
                      }) : '-'
                    }) : null]
                  });
                }), toDisplay === 'outcomeindicators' && report.status === 200 && report.outcomeindicators.map(function (indicator, i) {
                  var handleloop = function handleloop(i) {
                    if (i === 0) {
                      outcomeloop1 = report.outcomes[0].outcomeindicatorscount;
                      outcomelooprow1 = i + outcomeloop1;
                    }

                    if (i === outcomelooprow1) {
                      outcomeloop1 = report.outcomes[outcomeloopcount1].outcomeindicatorscount;
                      outcomeindicatorloop = outcomeindicatorloop.concat(report.outcomeindicators.filter(function (indicator) {
                        return indicator.outcome_id === report.outcomes[outcomeloopcount1].id;
                      }));
                      outcomeloopcount1 = outcomeloopcount1 + 1;
                      outcomelooprow1 = outcomelooprow1 + outcomeloop1;
                    }
                  };

                  var handleoutputloop = function handleoutputloop(i) {
                    if (i === 0) {
                      outputloop1 = report.outputs[0].outputindicatorscount;
                      outputlooprow1 = i + outputloop1;
                    }

                    if (i === outputlooprow1) {
                      outputloop1 = report.outputs[outputloopcount1] ? report.outputs[outputloopcount1].outputindicatorscount : 100;
                      outputindicatorloop = report.outputs[outputloopcount1] ? outputindicatorloop.concat(report.outputindicators.filter(function (indicator) {
                        return indicator.output_id === report.outputs[outputloopcount1].id;
                      })) : [];
                      outputloopcount1 = outputloopcount1 + 1;
                      outputlooprow1 = outputlooprow1 + outputloop1;
                    }
                  };

                  var handleOutcomeTarget = function handleOutcomeTarget(id) {
                    var target = '';
                    target = report.target_outcomes.filter(function (target) {
                      return target.outcomeindicator_id === id;
                    });
                    return parseFloat(target[0].value);
                  };

                  var handleOutcomeMeasurement = function handleOutcomeMeasurement(id) {
                    var target = '';
                    target = report.target_outcomes.filter(function (target) {
                      return target.outcomeindicator_id === id;
                    });
                    return target[0].measurement;
                  };

                  var handleOutputTarget = function handleOutputTarget(id) {
                    var target = '';
                    target = report.target_outputs.filter(function (target) {
                      return target.outputindicator_id === id;
                    });
                    return target.length !== 0 ? parseFloat(target[0].value) : '';
                  };

                  var handleOutputAchievement = function handleOutputAchievement(id) {
                    var achievement = '';
                    achievement = report.achievement_outputs.filter(function (achievement) {
                      return achievement.outputindicator_id === id;
                    });
                    return achievement.length !== 0 ? parseFloat(achievement[0].value) : id === 10000 ? '' : 0;
                  };

                  var handleOutcomeAchievement = function handleOutcomeAchievement(id) {
                    var achievement = '';
                    achievement = report.achievement_outcomes.filter(function (achievement) {
                      return achievement.outcomeindicator_id === id;
                    });
                    return achievement.length !== 0 ? parseFloat(achievement[0].value) : 0;
                  };

                  var handleOutcomeAchievementPercent = function handleOutcomeAchievementPercent(id) {
                    var achievement = '';
                    achievement = report.achievement_outcomes.filter(function (achievement) {
                      return achievement.outcomeindicator_id === id;
                    });
                    var target = '';
                    target = report.target_outcomes.filter(function (target) {
                      return target.outcomeindicator_id === id;
                    });
                    var percent = '';

                    if (achievement.length !== 0 && target.length !== 0) {
                      if (parseFloat(target[0].value) === 0) {
                        return percent = 0;
                      }

                      percent = Math.round(parseFloat(achievement[0].value) / parseFloat(target[0].value) * 100);
                    }

                    if (achievement.length === 0 && target.length !== 0) {
                      percent = 0;
                    }

                    if (achievement.length !== 0 && target.length === 0) {
                      percent = 0;
                    }

                    if (achievement.length === 0 && target.length === 0) {
                      percent = 0;
                    }

                    return percent;
                  };

                  var handleOutputAchievementPercent = function handleOutputAchievementPercent(id) {
                    if (id === 10000) {
                      return '';
                    }

                    var achievement = '';
                    achievement = report.achievement_outputs.filter(function (achievement) {
                      return achievement.outputindicator_id === id;
                    });
                    var target = '';
                    target = report.target_outputs.filter(function (target) {
                      return target.outputindicator_id === id;
                    });
                    var percent = '';

                    if (achievement.length !== 0 && target.length !== 0) {
                      if (parseFloat(target[0].value) === 0) {
                        return percent = 0;
                      }

                      percent = Math.round(parseFloat(achievement[0].value) / parseFloat(target[0].value) * 100);
                    }

                    if (achievement.length === 0 && target.length !== 0) {
                      percent = 0;
                    }

                    if (achievement.length !== 0 && target.length === 0) {
                      percent = 0;
                    }

                    if (achievement.length === 0 && target.length === 0) {
                      percent = 0;
                    }

                    return percent;
                  };

                  var handleOutputMeasurement = function handleOutputMeasurement(id) {
                    var target = '';
                    target = report.target_outputs.filter(function (target) {
                      return target.outputindicator_id === id;
                    });
                    return target.length !== 0 ? target[0].measurement : '';
                  };

                  var socialcategory = function socialcategory() {
                    var social = report.socials.map(function (social) {
                      return social['name'];
                    });
                    return social.toString();
                  };

                  var gendercategory = function gendercategory() {
                    var gender = report.genders.map(function (gender) {
                      return gender['name'];
                    });
                    return gender.toString();
                  };

                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                    children: [i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportextcolor b--black-80",
                      rowSpan: rowofspan,
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: socialcategory()
                    }) : null, i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportextcolor b--black-80",
                      rowSpan: rowofspan,
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: gendercategory()
                    }) : null, i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportoutputcolor b--black-80",
                      rowSpan: report.outputs[0].outputindicatorscount,
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: report.outputs[0].name
                    }) : null, i === outputlooprow1 && report.outputs[outputloopcount1] ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportoutputcolor b--black-80",
                      rowSpan: report.outputs[outputloopcount1].outputindicatorscount,
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: report.outputs[outputloopcount1].name
                    }) : null, i >= report.outputindicators.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportoutputcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: ''
                    }) : null, handleoutputloop(i), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportoutputcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: outputindicatorloop[i] !== undefined ? outputindicatorloop[i].name : ''
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportoutputcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: handleOutputTarget(outputindicatorloop[i] ? outputindicatorloop[i].id : 10000)
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportoutputcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: handleOutputMeasurement(outputindicatorloop[i] !== undefined ? outputindicatorloop[i].id : 10000)
                    }), i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportoutcomecolor b--black-80",
                      rowSpan: report.outcomes[0].outcomeindicatorscount,
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: report.outcomes[0].name
                    }) : null, i === outcomelooprow1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportoutcomecolor b--black-80",
                      rowSpan: report.outcomes[outcomeloopcount1].outcomeindicatorscount,
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: report.outcomes[outcomeloopcount1].name
                    }) : null, handleloop(i), outcomeindicatorloop[i] !== undefined ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportoutcomecolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: outcomeindicatorloop[i].name
                    }) : null, outcomeindicatorloop[i] !== undefined ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportoutcomecolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: handleOutcomeTarget(outcomeindicatorloop[i] ? outcomeindicatorloop[i].id : 10000)
                    }) : null, outcomeindicatorloop[i] !== undefined ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportoutcomecolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: handleOutcomeMeasurement(outcomeindicatorloop[i] ? outcomeindicatorloop[i].id : 10000)
                    }) : null, i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportextcolor b--black-80",
                      rowSpan: rowofspan,
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: "Goal ".concat(report.sdg[0].goal_number, ": ").concat(report.sdg[0].goal_name)
                    }) : null, i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "pv3 pr3 reportextcolor b--black-80",
                      rowSpan: rowofspan,
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: report.subscheme.initial_remarks ? report.subscheme.initial_remarks.split('\n').map(function (item) {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                          children: [item, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {})]
                        });
                      }) : '-'
                    }) : null]
                  });
                })]
              })]
            })
          })]
        })
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MigrationSubScheme);

/***/ }),

/***/ "./resources/js/components/store/subschemes-actions.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/store/subschemes-actions.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSubSchemesData": () => (/* binding */ getSubSchemesData),
/* harmony export */   "miggetSubSchemesData": () => (/* binding */ miggetSubSchemesData),
/* harmony export */   "miggetPendingSubSchemesData": () => (/* binding */ miggetPendingSubSchemesData),
/* harmony export */   "miggetPendingSubSchemesDeptData": () => (/* binding */ miggetPendingSubSchemesDeptData),
/* harmony export */   "miggetExtraSubSchemesDeptData": () => (/* binding */ miggetExtraSubSchemesDeptData),
/* harmony export */   "getSubSchemesDataDeptUser": () => (/* binding */ getSubSchemesDataDeptUser),
/* harmony export */   "miggetSubSchemesDataDeptUser": () => (/* binding */ miggetSubSchemesDataDeptUser),
/* harmony export */   "storeSubSchemeData": () => (/* binding */ storeSubSchemeData),
/* harmony export */   "searchSubSchemesName": () => (/* binding */ searchSubSchemesName),
/* harmony export */   "searchSubSchemesCode": () => (/* binding */ searchSubSchemesCode),
/* harmony export */   "getSubSchemesReport": () => (/* binding */ getSubSchemesReport),
/* harmony export */   "getCurrentSubSchemesReport": () => (/* binding */ getCurrentSubSchemesReport),
/* harmony export */   "miggetSubSchemesReport": () => (/* binding */ miggetSubSchemesReport),
/* harmony export */   "getSubSchemesReportVerifier": () => (/* binding */ getSubSchemesReportVerifier),
/* harmony export */   "aorgetSubSchemesReportVerifier": () => (/* binding */ aorgetSubSchemesReportVerifier),
/* harmony export */   "getSubSchemesHeaderReport": () => (/* binding */ getSubSchemesHeaderReport),
/* harmony export */   "getCurrentSubSchemesHeaderReport": () => (/* binding */ getCurrentSubSchemesHeaderReport),
/* harmony export */   "miggetSubSchemesHeaderReport": () => (/* binding */ miggetSubSchemesHeaderReport),
/* harmony export */   "aorgetSubSchemesHeaderReport": () => (/* binding */ aorgetSubSchemesHeaderReport),
/* harmony export */   "getSubSchemesHeaderReportVerifier": () => (/* binding */ getSubSchemesHeaderReportVerifier),
/* harmony export */   "aorgetSubSchemesHeaderReportVerifier": () => (/* binding */ aorgetSubSchemesHeaderReportVerifier),
/* harmony export */   "updateSubSchemeData": () => (/* binding */ updateSubSchemeData),
/* harmony export */   "migupdateSubSchemeData": () => (/* binding */ migupdateSubSchemeData),
/* harmony export */   "deleteSubSchemeData": () => (/* binding */ deleteSubSchemeData),
/* harmony export */   "migdeleteSubSchemeData": () => (/* binding */ migdeleteSubSchemeData)
/* harmony export */ });
/* harmony import */ var _subschemesSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subschemesSlice */ "./resources/js/components/store/subschemesSlice.js");
/* harmony import */ var _schemesSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schemesSlice */ "./resources/js/components/store/schemesSlice.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ "./resources/js/components/configuration.js");
/* harmony import */ var _outlaySlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outlaySlice */ "./resources/js/components/store/outlaySlice.js");
/* harmony import */ var _errorSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./errorSlice */ "./resources/js/components/store/errorSlice.js");





var getSubSchemesData = function getSubSchemesData(id, finYear) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "subschemes/").concat(id, "/").concat(finYear), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.length !== 0) {
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setUpateSubScheme({
          updateSubScheme: false
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemes({
          subschemes: res
        }));
      } else {
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setUpateSubScheme({
          updateSubScheme: false
        }));
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
          error: true
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setUpateSubScheme({
        updateSubScheme: false
      }));
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
        error: true
      }));
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var miggetSubSchemesData = function miggetSubSchemesData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "mig_subschemes/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.length !== 0) {
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setUpateSubScheme({
          updateSubScheme: false
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemes({
          subschemes: res
        }));
      } else {
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setUpateSubScheme({
          updateSubScheme: false
        }));
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
          error: true
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setUpateSubScheme({
        updateSubScheme: false
      }));
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
        error: true
      }));
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var miggetPendingSubSchemesData = function miggetPendingSubSchemesData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "mig_pendingsubschemes/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setUpateSubScheme({
          updateSubScheme: false
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setPendingSubSchemes({
          pendingSubSchemes: res.pending_subschemes
        }));
      } else {
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setUpateSubScheme({
          updateSubScheme: false
        }));
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
          error: true
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setUpateSubScheme({
        updateSubScheme: false
      }));
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
        error: true
      }));
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var miggetPendingSubSchemesDeptData = function miggetPendingSubSchemesDeptData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "mig_pendingsubschemesdept/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setUpateSubScheme({
          updateSubScheme: false
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setPendingSubSchemes({
          pendingSubSchemes: res.pending_subschemes
        }));
      } else {
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setUpateSubScheme({
          updateSubScheme: false
        }));
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
          error: true
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setUpateSubScheme({
        updateSubScheme: false
      }));
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
        error: true
      }));
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var miggetExtraSubSchemesDeptData = function miggetExtraSubSchemesDeptData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "extra_subscheme/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setUpateSubScheme({
          updateSubScheme: false
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setPendingSubSchemes({
          pendingSubSchemes: res.subschemes
        }));
      } else {
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setUpateSubScheme({
          updateSubScheme: false
        }));
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
          error: true
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setUpateSubScheme({
        updateSubScheme: false
      }));
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
        error: true
      }));
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var getSubSchemesDataDeptUser = function getSubSchemesDataDeptUser(id, finYear) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "subschemesdeptuser/").concat(id, "/").concat(finYear), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.length !== 0) {
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setUpateSubScheme({
          updateSubScheme: false
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemes({
          subschemes: res
        }));
      } else {
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setUpateSubScheme({
          updateSubScheme: false
        }));
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
          error: true
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setUpateSubScheme({
        updateSubScheme: false
      }));
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
        error: true
      }));
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var miggetSubSchemesDataDeptUser = function miggetSubSchemesDataDeptUser(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "mig_subschemesdeptuser/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setUpateSubScheme({
          updateSubScheme: false
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemes({
          subschemes: res.migrated_subschemes
        }));
      } else {
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setUpateSubScheme({
          updateSubScheme: false
        }));
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
          error: true
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setUpateSubScheme({
        updateSubScheme: false
      }));
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
        error: true
      }));
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var storeSubSchemeData = function storeSubSchemeData(departmentId, divisionId, schemeId, name, code) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "subscheme"), {
      method: 'post',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token')),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        subscheme_code: code,
        scheme_id: schemeId,
        division_id: divisionId,
        department_id: departmentId
      })
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeStateName({
          schemeStateName: ''
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeCenterName({
          schemeCenterName: ''
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeCenterCode({
          schemeCenterCode: ''
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeStateCode({
          schemeStateCode: ''
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeSearch({
          schemeSearch: []
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeSearchMessage({
          searchMessage: ''
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeName({
          subschemename: ''
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeCode({
          subschemecode: ''
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
          message: 'Sub Scheme created successfully'
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
          error: true
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeStateName({
          schemeStateName: ''
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeCenterName({
          schemeCenterName: ''
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeCenterCode({
          schemeCenterCode: ''
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeStateCode({
          schemeStateCode: ''
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeSearch({
          schemeSearch: []
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeSearchMessage({
          searchMessage: ''
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeName({
          subschemename: ''
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeCode({
          subschemecode: ''
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
        error: true
      }));
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeStateName({
        schemeStateName: ''
      }));
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeCenterName({
        schemeCenterName: ''
      }));
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeCenterCode({
        schemeCenterCode: ''
      }));
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeStateCode({
        schemeStateCode: ''
      }));
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeSearch({
        schemeSearch: []
      }));
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeSearchMessage({
        searchMessage: ''
      }));
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeName({
        subschemename: ''
      }));
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeCode({
        subschemecode: ''
      }));
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var searchSubSchemesName = function searchSubSchemesName(name, id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "subscheme/searchname/").concat(name, "/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.result !== "No Data not found") {
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSearchMessage({
          searchMessage: ''
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeSearch({
          subschemeSearch: res
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
          error: true
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeSearch({
          subschemeSearch: []
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSearchMessage({
          searchMessage: 'Nothing Found'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
        error: true
      }));
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeSearch({
        subschemeSearch: []
      }));
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSearchMessage({
        searchMessage: 'Nothing Found'
      }));
    });
  };
};
var searchSubSchemesCode = function searchSubSchemesCode(code, id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "subscheme/searchcode/").concat(code, "/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.result !== "No Data not found") {
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSearchMessage({
          searchMessage: ''
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeSearch({
          subschemeSearch: res
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
          error: true
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeSearch({
          subschemeSearch: []
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSearchMessage({
          searchMessage: 'Nothing Found'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
        error: true
      }));
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeSearch({
        subschemeSearch: []
      }));
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSearchMessage({
        searchMessage: 'Nothing Found'
      }));
    });
  };
};
var getSubSchemesReport = function getSubSchemesReport(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "reportsubscheme/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeReport({
          report: res
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
          error: true
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
        error: true
      }));
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var getCurrentSubSchemesReport = function getCurrentSubSchemesReport(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "cur_reportsubscheme/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeReport({
          report: res
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
          error: true
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
        error: true
      }));
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var miggetSubSchemesReport = function miggetSubSchemesReport(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "mig_reportsubscheme/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeReport({
          report: res
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
          error: true
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
        error: true
      }));
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var getSubSchemesReportVerifier = function getSubSchemesReportVerifier(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "verification/reportsubscheme/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeReport({
          report: res
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
          error: true
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
        error: true
      }));
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var aorgetSubSchemesReportVerifier = function aorgetSubSchemesReportVerifier(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "aor_verification/reportsubscheme/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeReport({
          report: res
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
          error: true
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
        error: true
      }));
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var getSubSchemesHeaderReport = function getSubSchemesHeaderReport(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "subscheme_header/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_outlaySlice__WEBPACK_IMPORTED_MODULE_3__.outlayActions.setUpdateOutlay({
          updateOutlay: false
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeName({
          subschemename: res.sub_scheme[0].name
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeCode({
          subschemecode: res.sub_scheme[0].subscheme_code
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeStateName({
          schemeStateName: res.sub_scheme[0].state_name
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeCenterName({
          schemeCenterName: res.sub_scheme[0].center_name
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeCenterCode({
          schemeCenterCode: res.sub_scheme[0].center_code
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeStateCode({
          schemeStateCode: res.sub_scheme[0].state_code
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setDemandNo({
          demand_no: res.sub_scheme[0].demand_no
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setDepartmentName({
          department_name: res.sub_scheme[0].dept_name
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setAllotment({
          allotment: res.allotment
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setDivisionName({
          division_name: res.sub_scheme[0].div_name
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setExpenditure({
          expenditure: res.expenditure
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSanction({
          sanction: res.sanction
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setFinAddBtn({
          finAddBtn: res.sub_scheme[0].fin_add_btn_flag
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setVerifiedStatusSS({
          verified_status_ss: res.sub_scheme[0].verified_status
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubmittedStatusSS({
          submitted_status_ss: res.sub_scheme[0].submitted_status
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
          error: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
        error: true
      }));
    });
  };
};
var getCurrentSubSchemesHeaderReport = function getCurrentSubSchemesHeaderReport(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "cur_subscheme_header/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_outlaySlice__WEBPACK_IMPORTED_MODULE_3__.outlayActions.setUpdateOutlay({
          updateOutlay: false
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeName({
          subschemename: res.sub_scheme[0].name
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeCode({
          subschemecode: res.sub_scheme[0].subscheme_code
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeStateName({
          schemeStateName: res.sub_scheme[0].state_name
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeCenterName({
          schemeCenterName: res.sub_scheme[0].center_name
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeCenterCode({
          schemeCenterCode: res.sub_scheme[0].center_code
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeStateCode({
          schemeStateCode: res.sub_scheme[0].state_code
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setDemandNo({
          demand_no: res.sub_scheme[0].demand_no
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setDepartmentName({
          department_name: res.sub_scheme[0].dept_name
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setAllotment({
          allotment: res.allotment
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setDivisionName({
          division_name: res.sub_scheme[0].div_name
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setExpenditure({
          expenditure: res.expenditure
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSanction({
          sanction: res.sanction
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setFinAddBtn({
          finAddBtn: res.sub_scheme[0].fin_add_btn_flag
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setVerifiedStatusSS({
          verified_status_ss: res.sub_scheme[0].verified_status
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubmittedStatusSS({
          submitted_status_ss: res.sub_scheme[0].submitted_status
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
          error: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
        error: true
      }));
    });
  };
};
var miggetSubSchemesHeaderReport = function miggetSubSchemesHeaderReport(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "mig_subscheme_header/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_outlaySlice__WEBPACK_IMPORTED_MODULE_3__.outlayActions.setUpdateOutlay({
          updateOutlay: false
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeName({
          subschemename: res.sub_scheme[0].name
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeCode({
          subschemecode: res.sub_scheme[0].subscheme_code
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeStateName({
          schemeStateName: res.sub_scheme[0].state_name
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeCenterName({
          schemeCenterName: res.sub_scheme[0].center_name
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeCenterCode({
          schemeCenterCode: res.sub_scheme[0].center_code
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeStateCode({
          schemeStateCode: res.sub_scheme[0].state_code
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setDemandNo({
          demand_no: res.sub_scheme[0].demand_no
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setDepartmentName({
          department_name: res.sub_scheme[0].dept_name
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setAllotment({
          allotment: res.allotment
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setDivisionName({
          division_name: res.sub_scheme[0].div_name
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setExpenditure({
          expenditure: res.expenditure
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSanction({
          sanction: res.sanction
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setFinAddBtn({
          finAddBtn: res.sub_scheme[0].fin_add_btn_flag
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setVerifiedStatusSS({
          verified_status_ss: res.sub_scheme[0].verified_status
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubmittedStatusSS({
          submitted_status_ss: res.sub_scheme[0].submitted_status
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
          error: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
        error: true
      }));
    });
  };
};
var aorgetSubSchemesHeaderReport = function aorgetSubSchemesHeaderReport(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "subscheme_header/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_outlaySlice__WEBPACK_IMPORTED_MODULE_3__.outlayActions.setUpdateOutlay({
          updateOutlay: false
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeName({
          subschemename: res.sub_scheme[0].name
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeCode({
          subschemecode: res.sub_scheme[0].subscheme_code
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeStateName({
          schemeStateName: res.sub_scheme[0].state_name
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeCenterName({
          schemeCenterName: res.sub_scheme[0].center_name
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeCenterCode({
          schemeCenterCode: res.sub_scheme[0].center_code
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeStateCode({
          schemeStateCode: res.sub_scheme[0].state_code
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setDemandNo({
          demand_no: res.sub_scheme[0].demand_no
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setDepartmentName({
          department_name: res.sub_scheme[0].dept_name
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setAllotment({
          allotment: res.allotment
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setDivisionName({
          division_name: res.sub_scheme[0].div_name
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setExpenditure({
          expenditure: res.expenditure
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSanction({
          sanction: res.sanction
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setFinAddBtn({
          finAddBtn: res.sub_scheme[0].aor_fin_add_btn_flag
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setVerifiedStatusSS({
          verified_status_ss: res.sub_scheme[0].aor_verified_status
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubmittedStatusSS({
          submitted_status_ss: res.sub_scheme[0].aor_submitted_status
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
          error: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
        error: true
      }));
    });
  };
};
var getSubSchemesHeaderReportVerifier = function getSubSchemesHeaderReportVerifier(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "verification/subscheme_header/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_outlaySlice__WEBPACK_IMPORTED_MODULE_3__.outlayActions.setUpdateOutlay({
          updateOutlay: false
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeName({
          subschemename: res.sub_scheme[0].name
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeCode({
          subschemecode: res.sub_scheme[0].subscheme_code
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeStateName({
          schemeStateName: res.sub_scheme[0].state_name
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeCenterName({
          schemeCenterName: res.sub_scheme[0].center_name
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeCenterCode({
          schemeCenterCode: res.sub_scheme[0].center_code
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeStateCode({
          schemeStateCode: res.sub_scheme[0].state_code
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setDemandNo({
          demand_no: res.sub_scheme[0].demand_no
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setDepartmentName({
          department_name: res.sub_scheme[0].dept_name
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setAllotment({
          allotment: res.allotment
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setDivisionName({
          division_name: res.sub_scheme[0].div_name
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setExpenditure({
          expenditure: res.expenditure
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSanction({
          sanction: res.sanction
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setFinAddBtn({
          finAddBtn: res.sub_scheme[0].fin_add_btn_flag
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setVerifiedStatusSS({
          verified_status_ss: res.sub_scheme[0].verified_status
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubmittedStatusSS({
          submitted_status_ss: res.sub_scheme[0].submitted_status
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
          error: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
        error: true
      }));
    });
  };
};
var aorgetSubSchemesHeaderReportVerifier = function aorgetSubSchemesHeaderReportVerifier(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "aor_verification/subscheme_header/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_outlaySlice__WEBPACK_IMPORTED_MODULE_3__.outlayActions.setUpdateOutlay({
          updateOutlay: false
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeName({
          subschemename: res.sub_scheme[0].name
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeCode({
          subschemecode: res.sub_scheme[0].subscheme_code
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeStateName({
          schemeStateName: res.sub_scheme[0].state_name
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeCenterName({
          schemeCenterName: res.sub_scheme[0].center_name
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeCenterCode({
          schemeCenterCode: res.sub_scheme[0].center_code
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_1__.schemesActions.setSchemeStateCode({
          schemeStateCode: res.sub_scheme[0].state_code
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setDemandNo({
          demand_no: res.sub_scheme[0].demand_no
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setDepartmentName({
          department_name: res.sub_scheme[0].dept_name
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setAllotment({
          allotment: res.allotment
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setDivisionName({
          division_name: res.sub_scheme[0].div_name
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setExpenditure({
          expenditure: res.expenditure
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSanction({
          sanction: res.sanction
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setFinAddBtn({
          finAddBtn: res.sub_scheme[0].aor_fin_add_btn_flag
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setVerifiedStatusSS({
          verified_status_ss: res.sub_scheme[0].aor_verified_status
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubmittedStatusSS({
          submitted_status_ss: res.sub_scheme[0].aor_submitted_status
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
          error: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
        error: true
      }));
    });
  };
};
var updateSubSchemeData = function updateSubSchemeData(id, SubSchemeName, SubSchemeCode) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "subscheme/edit/").concat(id), {
      method: 'post',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token')),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: SubSchemeName,
        subscheme_code: parseInt(SubSchemeCode)
      })
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setUpateSubScheme({
          updateSubScheme: true
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setEditNotificationSuccess({
          editNotificationSuccess: true
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
          error: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
        error: true
      }));
    });
  };
};
var migupdateSubSchemeData = function migupdateSubSchemeData(id, SubSchemeName, SubSchemeCode) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "mig_subscheme/edit/").concat(id), {
      method: 'post',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token')),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: SubSchemeName,
        subscheme_code: parseInt(SubSchemeCode)
      })
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setUpateSubScheme({
          updateSubScheme: true
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setEditNotificationSuccess({
          editNotificationSuccess: true
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
          error: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
        error: true
      }));
    });
  };
};
var deleteSubSchemeData = function deleteSubSchemeData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "subscheme/delete/").concat(id), {
      method: 'DELETE',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setDeleteNotificationSuccess({
          deleteNotificationSuccess: true
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setUpateSubScheme({
          updateSubScheme: true
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
          error: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
        error: true
      }));
    });
  };
};
var migdeleteSubSchemeData = function migdeleteSubSchemeData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "mig_subscheme/delete/").concat(id), {
      method: 'DELETE',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setDeleteNotificationSuccess({
          deleteNotificationSuccess: true
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setUpateSubScheme({
          updateSubScheme: true
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
          error: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_4__.errorActions.setError({
        error: true
      }));
    });
  };
};

/***/ }),

/***/ "./node_modules/react-html-table-to-excel/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-html-table-to-excel/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global window, document, Blob */


var propTypes = {
  table: _propTypes2.default.string.isRequired,
  filename: _propTypes2.default.string.isRequired,
  sheet: _propTypes2.default.string.isRequired,
  id: _propTypes2.default.string,
  className: _propTypes2.default.string,
  buttonText: _propTypes2.default.string
};

var defaultProps = {
  id: 'button-download-as-xls',
  className: 'button-download',
  buttonText: 'Download'
};

var ReactHTMLTableToExcel = function (_Component) {
  _inherits(ReactHTMLTableToExcel, _Component);

  function ReactHTMLTableToExcel(props) {
    _classCallCheck(this, ReactHTMLTableToExcel);

    var _this = _possibleConstructorReturn(this, (ReactHTMLTableToExcel.__proto__ || Object.getPrototypeOf(ReactHTMLTableToExcel)).call(this, props));

    _this.handleDownload = _this.handleDownload.bind(_this);
    return _this;
  }

  _createClass(ReactHTMLTableToExcel, [{
    key: 'handleDownload',
    value: function handleDownload() {
      if (!document) {
        if (true) {
          console.error('Failed to access document object');
        }

        return null;
      }

      if (document.getElementById(this.props.table).nodeType !== 1 || document.getElementById(this.props.table).nodeName !== 'TABLE') {
        if (true) {
          console.error('Provided table property is not html table element');
        }

        return null;
      }

      var table = document.getElementById(this.props.table).outerHTML;
      var sheet = String(this.props.sheet);
      var filename = String(this.props.filename) + '.xls';

      var uri = 'data:application/vnd.ms-excel;base64,';
      var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-mic' + 'rosoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta cha' + 'rset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:Exce' + 'lWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/>' + '</x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></' + 'xml><![endif]--></head><body>{table}</body></html>';

      var context = {
        worksheet: sheet || 'Worksheet',
        table: table
      };

      // If IE11
      if (window.navigator.msSaveOrOpenBlob) {
        var fileData = ['' + ('<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-mic' + 'rosoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta cha' + 'rset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:Exce' + 'lWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/>' + '</x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></' + 'xml><![endif]--></head><body>') + table + '</body></html>'];
        var blobObject = new Blob(fileData);
        document.getElementById('react-html-table-to-excel').click()(function () {
          window.navigator.msSaveOrOpenBlob(blobObject, filename);
        });

        return true;
      }

      var element = window.document.createElement('a');
      element.href = uri + ReactHTMLTableToExcel.base64(ReactHTMLTableToExcel.format(template, context));
      element.download = filename;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'button',
        {
          id: this.props.id,
          className: this.props.className,
          type: 'button',
          onClick: this.handleDownload
        },
        this.props.buttonText
      );
    }
  }], [{
    key: 'base64',
    value: function base64(s) {
      return window.btoa(unescape(encodeURIComponent(s)));
    }
  }, {
    key: 'format',
    value: function format(s, c) {
      return s.replace(/{(\w+)}/g, function (m, p) {
        return c[p];
      });
    }
  }]);

  return ReactHTMLTableToExcel;
}(_react.Component);

ReactHTMLTableToExcel.propTypes = propTypes;
ReactHTMLTableToExcel.defaultProps = defaultProps;

exports["default"] = ReactHTMLTableToExcel;


/***/ })

}]);