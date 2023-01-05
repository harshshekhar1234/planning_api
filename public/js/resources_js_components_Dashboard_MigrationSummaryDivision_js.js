"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_MigrationSummaryDivision_js"],{

/***/ "./resources/js/components/Dashboard/MigrationSummaryDivision.js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Dashboard/MigrationSummaryDivision.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _store_migrationSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/migrationSlice */ "./resources/js/components/store/migrationSlice.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_html_table_to_excel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-html-table-to-excel */ "./node_modules/react-html-table-to-excel/index.js");
/* harmony import */ var _store_migration_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/migration-actions */ "./resources/js/components/store/migration-actions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function MigrationSummaryDivision() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams)();
  var report = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.migration.report;
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
    dispatch((0,_store_migration_actions__WEBPACK_IMPORTED_MODULE_4__.miggetSummaryDeptData)(params.id)); // dispatch(getSubSchemesHeaderReport(params.id));

    return function () {
      dispatch(_store_migrationSlice__WEBPACK_IMPORTED_MODULE_1__.migrationActions.setReport({
        report: {}
      }));
    };
  }, []); // useEffect(() => {
  //   if(report.status === 200){
  //   const toRender = ((report.outputindicators.length >= report.outcomeindicators.length) ? 'outputindicators' : 'outcomeindicators' )
  //   if(toRender === 'outputindicators'){
  //     setRowofspan(report.outputindicators.length);
  //     setToDisplay('outputindicators')
  //   }
  //   if(toRender === 'outcomeindicators'){
  //     setRowofspan(report.outcomeindicators.length);
  //     setToDisplay('outcomeindicators')
  //   }
  //   }
  //   }, [report]);
  // const handleOutputLoop = (i) => {
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
  var outputindicatorloop = report.status === 200 ? report.schemes[0].subschemes : []; //  let outcomeloop1 = 0
  //  let outcomeloopcount1 = 1
  //  let outcomelooprow1 = 1
  //  let outcomeindicatorloop = ((report.status === 200) ? report.outcomeindicators.filter(indicator => indicator.outcome_id === report.outcomes[0].id) : [])

  var loopSubscheme = [];
  var b = report.status === 200 ? report.schemes.map(function (s) {
    loopSubscheme.push.apply(loopSubscheme, _toConsumableArray(s.subschemes));
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

  var handleTotalOutputCount = function handleTotalOutputCount() {
    var total = 0;
    loopSubscheme.map(function (s) {
      total = s.outputindicators_count + total;
    });
    return total;
  };

  var handleTotalOutcomeCount = function handleTotalOutcomeCount() {
    var total = 0;
    loopSubscheme.map(function (s) {
      total = s.outcomeindicators_count + total;
    });
    return total;
  };

  var handleTotalStateShare = function handleTotalStateShare() {
    var total = 0;
    loopSubscheme.map(function (s) {
      total = s.state_share + total;
    });
    return parseFloat(total.toFixed(2));
  };

  var handleTotalCenterShare = function handleTotalCenterShare() {
    var total = 0;
    loopSubscheme.map(function (s) {
      total = s.center_share + total;
    });
    return parseFloat(total.toFixed(2));
  };

  var handleTotalOutlay = function handleTotalOutlay() {
    var total = 0;
    loopSubscheme.map(function (s) {
      total = s.center_share + total + s.state_share;
    });
    return parseFloat(total.toFixed(2));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "pa4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_html_table_to_excel__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "test-table-xls-button",
        className: "f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green",
        table: "table-to-xls",
        filename: params.division,
        sheet: "Sheet1",
        buttonText: "Download Report"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "overflow-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("table", {
          id: "table-to-xls",
          className: "table-bordered",
          style: {
            "borderWidth": "1px",
            'borderColor': "#000000",
            'borderStyle': 'solid',
            textAlign: "center"
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "overflow-auto",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("table", {
              className: "f6 w-100 mw8 center ba",
              cellSpacing: "0",
              style: {
                "borderWidth": "1px",
                'borderColor': "#000000",
                'borderStyle': 'solid',
                'textAlign': "center",
                'verticalAlign': "center"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("tr", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                  className: " b--black-80 tc b reportoutputcolor",
                  colSpan: 10,
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Scheme-wise list with outlay - 2023-24 (".concat(params.division, ")")
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                  className: " b--black-80 tc b reportoutputcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "State Scheme Name"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                  className: " b--black-80 tc b reportoutputcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Center Scheme Name"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                  className: " b--black-80 tc b reportoutputcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Sub Scheme Name"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                  className: " b--black-80 tc b reportoutputachcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Output Indicators"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                  className: " b--black-80 tc b reportoutputachcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Outcome Indicators"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                  className: " b--black-80 tc b reportoutputcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Social Category"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                  className: " b--black-80 tc b reportoutcomecolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Gender Category"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                  className: " b--black-80 tc b reportoutcomeachcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "State Share(Rs. in Lakhs)"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                  className: " b--black-80 tc b reportoutcomeachcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Center Share(Rs. in Lakhs)"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                  className: " b--black-80 tc b reportoutcomeachcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Financial Outlay(Rs. in Lakhs)"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tbody", {
                className: "lh-copy ba",
                children: [toDisplay === 'outputindicators' && report.status === 200 && loopSubscheme.map(function (indicator, i) {
                  var handleloop = function handleloop(i) {
                    if (i === 0) {
                      outputloop1 = report.schemes[0].subschemes.length;
                      outputlooprow1 = i + outputloop1;
                    }

                    if (i === outputlooprow1) {
                      outputloop1 = report.schemes[outputloopcount1].subschemes.length;
                      outputindicatorloop = outputindicatorloop.concat(report.schemes[outputloopcount1].subschemes);
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

                  var socialcategory = function socialcategory(socials) {
                    var social = socials.map(function (social) {
                      return social['name'];
                    });
                    return social.length ? social.toString() : 'NA';
                  };

                  var gendercategory = function gendercategory(genders) {
                    var gender = genders.map(function (gender) {
                      return gender['name'];
                    });
                    return gender.length ? gender.toString() : 'NA';
                  };

                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                    children: [i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                      className: "pv3 pr3 reportoutputcolor b--black-80",
                      rowSpan: report.schemes[0].subschemes.length,
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: "".concat(report.schemes[0].state_code, "-").concat(report.schemes[0].state_name)
                    }) : null, i === outputlooprow1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                      className: "pv3 pr3 reportoutputcolor b--black-80",
                      rowSpan: report.schemes[outputloopcount1].subschemes.length,
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: "".concat(report.schemes[outputloopcount1].state_code, "-").concat(report.schemes[outputloopcount1].state_name)
                    }) : null, i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                      className: "pv3 pr3 reportoutputcolor b--black-80",
                      rowSpan: report.schemes[0].subschemes.length,
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: "".concat(report.schemes[0].center_code, "-").concat(report.schemes[0].center_name)
                    }) : null, i === outputlooprow1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                      className: "pv3 pr3 reportoutputcolor b--black-80",
                      rowSpan: report.schemes[outputloopcount1].subschemes.length,
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: "".concat(report.schemes[outputloopcount1].center_code, "-").concat(report.schemes[outputloopcount1].center_name)
                    }) : null, handleloop(i), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                      className: "pv3 pr3 reportoutputcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: "".concat(outputindicatorloop[i].subscheme_code, "-").concat(outputindicatorloop[i].name)
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                      className: "pv3 pr3 reportoutputachcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: outputindicatorloop[i].outputindicators_count
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                      className: "pv3 pr3 reportoutputachcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: outputindicatorloop[i].outcomeindicators_count
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                      className: "pv3 pr3 reportoutputcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: socialcategory(outputindicatorloop[i].socials)
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                      className: "pv3 pr3 reportoutputcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: gendercategory(outputindicatorloop[i].genders)
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                      className: "pv3 pr3 reportoutputachcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: outputindicatorloop[i].state_share
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                      className: "pv3 pr3 reportoutputachcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: outputindicatorloop[i].center_share
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                      className: "pv3 pr3 reportoutputachcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: outputindicatorloop[i].center_share + outputindicatorloop[i].state_share
                    })]
                  });
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                    className: "pv3 pr3 b b--black-80",
                    colSpan: 3,
                    style: {
                      "borderWidth": "1px",
                      'borderColor': "#000000",
                      'borderStyle': 'solid',
                      'textAlign': "center",
                      'verticalAlign': "middle"
                    },
                    children: "Total - Outcome Budget Schemes"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                    className: "pv3 pr3 b b--black-80",
                    style: {
                      "borderWidth": "1px",
                      'borderColor': "#000000",
                      'borderStyle': 'solid',
                      'textAlign': "center",
                      'verticalAlign': "middle"
                    },
                    children: handleTotalOutputCount()
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                    className: "pv3 pr3 b b--black-80",
                    style: {
                      "borderWidth": "1px",
                      'borderColor': "#000000",
                      'borderStyle': 'solid',
                      'textAlign': "center",
                      'verticalAlign': "middle"
                    },
                    children: handleTotalOutcomeCount()
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                    className: "pv3 pr3 b b--black-80",
                    style: {
                      "borderWidth": "1px",
                      'borderColor': "#000000",
                      'borderStyle': 'solid',
                      'textAlign': "center",
                      'verticalAlign': "middle"
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                    className: "pv3 pr3 b b--black-80",
                    style: {
                      "borderWidth": "1px",
                      'borderColor': "#000000",
                      'borderStyle': 'solid',
                      'textAlign': "center",
                      'verticalAlign': "middle"
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                    className: "pv3 pr3 b b--black-80",
                    style: {
                      "borderWidth": "1px",
                      'borderColor': "#000000",
                      'borderStyle': 'solid',
                      'textAlign': "center",
                      'verticalAlign': "middle"
                    },
                    children: handleTotalStateShare()
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                    className: "pv3 pr3 b b--black-80",
                    style: {
                      "borderWidth": "1px",
                      'borderColor': "#000000",
                      'borderStyle': 'solid',
                      'textAlign': "center",
                      'verticalAlign': "middle"
                    },
                    children: handleTotalCenterShare()
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                    className: "pv3 pr3 b b--black-80",
                    style: {
                      "borderWidth": "1px",
                      'borderColor': "#000000",
                      'borderStyle': 'solid',
                      'textAlign': "center",
                      'verticalAlign': "middle"
                    },
                    children: handleTotalOutlay()
                  })]
                })]
              })]
            })
          })
        })
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MigrationSummaryDivision);

/***/ }),

/***/ "./resources/js/components/store/migration-actions.js":
/*!************************************************************!*\
  !*** ./resources/js/components/store/migration-actions.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createScheme": () => (/* binding */ createScheme),
/* harmony export */   "migcreateScheme": () => (/* binding */ migcreateScheme),
/* harmony export */   "createSubScheme": () => (/* binding */ createSubScheme),
/* harmony export */   "migcreateSubScheme": () => (/* binding */ migcreateSubScheme),
/* harmony export */   "miggetSummaryDeptData": () => (/* binding */ miggetSummaryDeptData)
/* harmony export */ });
/* harmony import */ var _migrationSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./migrationSlice */ "./resources/js/components/store/migrationSlice.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configuration */ "./resources/js/components/configuration.js");
/* harmony import */ var _errorSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorSlice */ "./resources/js/components/store/errorSlice.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var createScheme = function createScheme(scheme) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "scheme/create"), {
      method: 'post',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token')),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(_objectSpread({}, scheme))
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_migrationSlice__WEBPACK_IMPORTED_MODULE_0__.migrationActions.setCreateSchemeStatusSuccess({
          createSchemeStatusSuccess: true
        }));
        dispatch(_migrationSlice__WEBPACK_IMPORTED_MODULE_0__.migrationActions.setIsLoading({
          isLoading: false
        }));
      } else if (res.status === 409) {
        dispatch(_migrationSlice__WEBPACK_IMPORTED_MODULE_0__.migrationActions.setIsLoading({
          isLoading: false
        }));
        dispatch(_migrationSlice__WEBPACK_IMPORTED_MODULE_0__.migrationActions.setMessage({
          message: 'Scheme already exists'
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
    });
  };
};
var migcreateScheme = function migcreateScheme(scheme) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "mig_scheme/create"), {
      method: 'post',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token')),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(_objectSpread({}, scheme))
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_migrationSlice__WEBPACK_IMPORTED_MODULE_0__.migrationActions.setCreateSchemeStatusSuccess({
          createSchemeStatusSuccess: true
        }));
        dispatch(_migrationSlice__WEBPACK_IMPORTED_MODULE_0__.migrationActions.setIsLoading({
          isLoading: false
        }));
      } else if (res.status === 409) {
        dispatch(_migrationSlice__WEBPACK_IMPORTED_MODULE_0__.migrationActions.setIsLoading({
          isLoading: false
        }));
        dispatch(_migrationSlice__WEBPACK_IMPORTED_MODULE_0__.migrationActions.setMessage({
          message: 'Scheme already exists'
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
    });
  };
};
var createSubScheme = function createSubScheme(subscheme) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "subscheme/create"), {
      method: 'post',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token')),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(_objectSpread({}, subscheme))
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_migrationSlice__WEBPACK_IMPORTED_MODULE_0__.migrationActions.setCreateSubSchemeStatusSuccess({
          createSubSchemeStatusSuccess: true
        }));
        dispatch(_migrationSlice__WEBPACK_IMPORTED_MODULE_0__.migrationActions.setIsLoading({
          isLoading: false
        }));
      } else if (res.status === 409) {
        dispatch(_migrationSlice__WEBPACK_IMPORTED_MODULE_0__.migrationActions.setIsLoading({
          isLoading: false
        }));
        dispatch(_migrationSlice__WEBPACK_IMPORTED_MODULE_0__.migrationActions.setMessage({
          message: 'Sub-Scheme already exists'
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
    });
  };
};
var migcreateSubScheme = function migcreateSubScheme(subscheme) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "mig_subscheme/create"), {
      method: 'post',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token')),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(_objectSpread({}, subscheme))
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_migrationSlice__WEBPACK_IMPORTED_MODULE_0__.migrationActions.setCreateSubSchemeStatusSuccess({
          createSubSchemeStatusSuccess: true
        }));
        dispatch(_migrationSlice__WEBPACK_IMPORTED_MODULE_0__.migrationActions.setIsLoading({
          isLoading: false
        }));
      } else if (res.status === 409) {
        dispatch(_migrationSlice__WEBPACK_IMPORTED_MODULE_0__.migrationActions.setIsLoading({
          isLoading: false
        }));
        dispatch(_migrationSlice__WEBPACK_IMPORTED_MODULE_0__.migrationActions.setMessage({
          message: 'Sub-Scheme already exists'
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
    });
  };
};
var miggetSummaryDeptData = function miggetSummaryDeptData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "mig_division_summary/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_migrationSlice__WEBPACK_IMPORTED_MODULE_0__.migrationActions.setReport({
          report: res
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
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