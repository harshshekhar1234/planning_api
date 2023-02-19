"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_CreateOutcomeIndicator_js"],{

/***/ "./resources/js/components/Dashboard/CreateOutcomeIndicator.js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Dashboard/CreateOutcomeIndicator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _store_departments_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/departments-action */ "./resources/js/components/store/departments-action.js");
/* harmony import */ var _store_divisions_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/divisions-action */ "./resources/js/components/store/divisions-action.js");
/* harmony import */ var _store_schemes_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/schemes-action */ "./resources/js/components/store/schemes-action.js");
/* harmony import */ var _store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/schemesSlice */ "./resources/js/components/store/schemesSlice.js");
/* harmony import */ var _store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/subschemesSlice */ "./resources/js/components/store/subschemesSlice.js");
/* harmony import */ var _store_divisionsSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/divisionsSlice */ "./resources/js/components/store/divisionsSlice.js");
/* harmony import */ var _store_outcomeSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/outcomeSlice */ "./resources/js/components/store/outcomeSlice.js");
/* harmony import */ var _store_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/outcomeindicatorSlice */ "./resources/js/components/store/outcomeindicatorSlice.js");
/* harmony import */ var _store_subschemes_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/subschemes-actions */ "./resources/js/components/store/subschemes-actions.js");
/* harmony import */ var _store_outcome_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/outcome-actions */ "./resources/js/components/store/outcome-actions.js");
/* harmony import */ var _store_outcomeindicator_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/outcomeindicator-actions */ "./resources/js/components/store/outcomeindicator-actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















function CreateOutcomeIndicator() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useDispatch)();
  var departments = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(function (state) {
    return state.departments.departments;
  });
  var divisions = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(function (state) {
    return state.divisions.divisions;
  });
  var searchScheme = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(function (state) {
    return state.schemes.schemeSearch;
  });
  var searchSubScheme = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(function (state) {
    return state.subschemes.subschemeSearch;
  });
  var outcomesearch = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(function (state) {
    return state.outcomes.searchOutcome;
  });
  var schemeStateName = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(function (state) {
    return state.schemes.schemeStateName;
  });
  var schemeCenterName = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(function (state) {
    return state.schemes.schemeCenterName;
  });
  var schemeStateCode = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(function (state) {
    return state.schemes.schemeStateCode;
  });
  var schemeCenterCode = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(function (state) {
    return state.schemes.schemeCenterCode;
  });
  var schemeSearchMessage = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(function (state) {
    return state.schemes.searchMessage;
  });
  var subschemename = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(function (state) {
    return state.subschemes.subschemename;
  });
  var subschemecode = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(function (state) {
    return state.subschemes.subschemecode;
  });
  var subschemesearchmessage = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(function (state) {
    return state.subschemes.searchMessage;
  });
  var outcomesearchmessage = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(function (state) {
    return state.outcomes.searchMessage;
  });
  var outcomeindicatorname = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(function (state) {
    return state.outcomeindicator.outcomeindicatorName;
  });
  var outcomeindicatormessage = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(function (state) {
    return state.outcomeindicator.message;
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      departmentId = _useState2[0],
      setDepartmentId = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      divisionId = _useState4[0],
      setDivisionId = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      outcomeId = _useState6[0],
      setOutcomeId = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('statename'),
      _useState8 = _slicedToArray(_useState7, 2),
      schemeSearchType = _useState8[0],
      setSchemeSearchType = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('name'),
      _useState10 = _slicedToArray(_useState9, 2),
      subschemeSearchType = _useState10[0],
      setSubSchemeSearchType = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
      _useState12 = _slicedToArray(_useState11, 2),
      schemeSearchResult = _useState12[0],
      setSchemeSearchResult = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
      _useState14 = _slicedToArray(_useState13, 2),
      subSchemeSearchResult = _useState14[0],
      setSubSchemeSearchResult = _useState14[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_store_departments_action__WEBPACK_IMPORTED_MODULE_1__.getDepartmentsData)());
    return function () {
      setDepartmentId('');
      setDivisionId('');
      setOutcomeId('');
      setSchemeSearchType('statename');
      setSchemeSearchResult({});
      setSubSchemeSearchType('name');
      setSubSchemeSearchResult({});
      dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setSearchMessage({
        searchMessage: ''
      }));
      dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setSubSchemeName({
        subschemename: ''
      }));
      dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setSubSchemeCode({
        subschemecode: ''
      }));
      dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setSubSchemeSearch({
        subschemeSearch: []
      }));
      dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeStateName({
        schemeStateName: ''
      }));
      dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeCenterName({
        schemeCenterName: ''
      }));
      dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeStateCode({
        schemeStateCode: ''
      }));
      dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeCenterCode({
        schemeCenterCode: ''
      }));
      dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeSearch({
        schemeSearch: []
      }));
      dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeSearchMessage({
        searchMessage: ''
      }));
      dispatch(_store_divisionsSlice__WEBPACK_IMPORTED_MODULE_6__.divisionsActions.setDivisions({
        divisions: []
      }));
      dispatch(_store_outcomeSlice__WEBPACK_IMPORTED_MODULE_7__.outcomesActions.setOutcomeSearchMessage({
        searchMessage: ''
      }));
      dispatch(_store_outcomeSlice__WEBPACK_IMPORTED_MODULE_7__.outcomesActions.setOutcomeSearch({
        searchOutcome: []
      }));
      dispatch(_store_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_8__.outcomeindicatorActions.setOutcomeIndicatorName({
        outcomeindicatorName: ''
      }));
      dispatch(_store_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_8__.outcomeindicatorActions.setMessage({
        message: ''
      }));
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (departmentId !== '') {
      dispatch((0,_store_divisions_action__WEBPACK_IMPORTED_MODULE_2__.getDivisionsData)(departmentId));
    }
  }, [departmentId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (Object.keys(subSchemeSearchResult).length !== 0) {
      dispatch((0,_store_outcome_actions__WEBPACK_IMPORTED_MODULE_10__.getSearchOutcomeData)(subSchemeSearchResult.id));
    }
  }, [subSchemeSearchResult]);

  var handleDepartmentChange = function handleDepartmentChange(event) {
    dispatch(_store_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_8__.outcomeindicatorActions.setMessage({
      message: ''
    }));
    setDepartmentId(event.target.value);
  };

  var handleDivisionChange = function handleDivisionChange(event) {
    dispatch(_store_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_8__.outcomeindicatorActions.setMessage({
      message: ''
    }));
    setDivisionId(event.target.value);
  };

  var handleOutcomeChange = function handleOutcomeChange(event) {
    dispatch(_store_outcomeSlice__WEBPACK_IMPORTED_MODULE_7__.outcomesActions.setOutcomeSearchMessage({
      searchMessage: ''
    }));
    dispatch(_store_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_8__.outcomeindicatorActions.setMessage({
      message: ''
    }));
    setOutcomeId(event.target.value);
  };

  var onSubmitOutcomeIndicator = function onSubmitOutcomeIndicator() {
    if (divisionId === '') {
      return dispatch(_store_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_8__.outcomeindicatorActions.setMessage({
        message: 'No Division Selected'
      }));
    }

    if (Object.keys(schemeSearchResult).length === 0) {
      return dispatch(_store_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_8__.outcomeindicatorActions.setMessage({
        message: 'No Scheme Selected'
      }));
    }

    if (Object.keys(subSchemeSearchResult).length === 0) {
      return dispatch(_store_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_8__.outcomeindicatorActions.setMessage({
        message: 'No Sub Scheme Selected'
      }));
    }

    if (outcomeId === '') {
      return dispatch(_store_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_8__.outcomeindicatorActions.setMessage({
        message: 'No Outcome Selected'
      }));
    }

    if (outcomeindicatorname === '') {
      return dispatch(_store_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_8__.outcomeindicatorActions.setMessage({
        message: 'Please Enter Outcome Indicator'
      }));
    }

    dispatch((0,_store_outcomeindicator_actions__WEBPACK_IMPORTED_MODULE_11__.storeOutcomeIndicatorData)(departmentId, divisionId, schemeSearchResult.id, subSchemeSearchResult.id, outcomeId, outcomeindicatorname));
  };

  var handleOutcomeIndicatorNameChange = function handleOutcomeIndicatorNameChange(event) {
    dispatch(_store_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_8__.outcomeindicatorActions.setMessage({
      message: ''
    }));
    dispatch(_store_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_8__.outcomeindicatorActions.setOutcomeIndicatorName({
      outcomeindicatorName: event.target.value
    }));
  };

  var handleSearchSubSchemeName = function handleSearchSubSchemeName(event) {
    if (divisionId === '') {
      dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setSearchMessage({
        searchMessage: 'Please select the division'
      }));
      return;
    }

    if (Object.keys(schemeSearchResult).length === 0) {
      return dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setSearchMessage({
        searchMessage: 'No Scheme Selected'
      }));
    }

    dispatch(_store_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_8__.outcomeindicatorActions.setMessage({
      message: ''
    }));
    dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setSearchMessage({
      searchMessage: ''
    }));
    dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setSubSchemeName({
      subschemename: event.target.value
    }));
    {
      event.target.value === '' ? dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setSubSchemeSearch({
        subschemeSearch: []
      })) : null;
    }
    {
      event.target.value !== '' ? dispatch((0,_store_subschemes_actions__WEBPACK_IMPORTED_MODULE_9__.searchSubSchemesName)(event.target.value, schemeSearchResult.id)) : null;
    }
  };

  var handleSearchSubSchemeCode = function handleSearchSubSchemeCode(event) {
    if (divisionId === '') {
      dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setSearchMessage({
        searchMessage: 'Please select the division'
      }));
      return;
    }

    if (Object.keys(schemeSearchResult).length === 0) {
      return dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setSearchMessage({
        searchMessage: 'No Scheme Selected'
      }));
    }

    dispatch(_store_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_8__.outcomeindicatorActions.setMessage({
      message: ''
    }));
    dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setSearchMessage({
      searchMessage: ''
    }));
    dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setSubSchemeCode({
      subschemecode: event.target.value
    }));
    {
      event.target.value === '' ? dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setSubSchemeSearch({
        subschemeSearch: []
      })) : null;
    }
    {
      event.target.value !== '' ? dispatch((0,_store_subschemes_actions__WEBPACK_IMPORTED_MODULE_9__.searchSubSchemesCode)(event.target.value, schemeSearchResult.id)) : null;
    }
  };

  var handleSearchSchemeStateName = function handleSearchSchemeStateName(event) {
    if (divisionId === '') {
      dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeSearchMessage({
        searchMessage: 'Please select the division'
      }));
      return;
    }

    dispatch(_store_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_8__.outcomeindicatorActions.setMessage({
      message: ''
    }));
    dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeSearchMessage({
      searchMessage: ''
    }));
    dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeStateName({
      schemeStateName: event.target.value
    }));
    {
      event.target.value === '' ? dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeSearch({
        schemeSearch: []
      })) : null;
    }
    {
      event.target.value !== '' ? dispatch((0,_store_schemes_action__WEBPACK_IMPORTED_MODULE_3__.searchSchemesStateName)(event.target.value, divisionId)) : null;
    }
  };

  var handleSearchSchemeCenterName = function handleSearchSchemeCenterName(event) {
    if (divisionId === '') {
      dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeSearchMessage({
        searchMessage: 'Please select the division'
      }));
      return;
    }

    dispatch(_store_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_8__.outcomeindicatorActions.setMessage({
      message: ''
    }));
    dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeSearchMessage({
      searchMessage: ''
    }));
    dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeCenterName({
      schemeCenterName: event.target.value
    }));
    {
      event.target.value === '' ? dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeSearch({
        schemeSearch: []
      })) : null;
    }
    {
      event.target.value !== '' ? dispatch((0,_store_schemes_action__WEBPACK_IMPORTED_MODULE_3__.searchSchemesCenterName)(event.target.value, divisionId)) : null;
    }
  };

  var handleSearchSchemeStateCode = function handleSearchSchemeStateCode(event) {
    if (divisionId === '') {
      dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeSearchMessage({
        searchMessage: 'Please select the division'
      }));
      return;
    }

    dispatch(_store_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_8__.outcomeindicatorActions.setMessage({
      message: ''
    }));
    dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeSearchMessage({
      searchMessage: ''
    }));
    dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeStateCode({
      schemeStateCode: event.target.value
    }));
    {
      event.target.value === '' ? dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeSearch({
        schemeSearch: []
      })) : null;
    }
    {
      event.target.value !== '' ? dispatch((0,_store_schemes_action__WEBPACK_IMPORTED_MODULE_3__.searchSchemesStateCode)(event.target.value, divisionId)) : null;
    }
  };

  var handleSearchSchemeCenterCode = function handleSearchSchemeCenterCode(event) {
    if (divisionId === '') {
      dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeSearchMessage({
        searchMessage: 'Please select the division'
      }));
      return;
    }

    dispatch(_store_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_8__.outcomeindicatorActions.setMessage({
      message: ''
    }));
    dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeSearchMessage({
      searchMessage: ''
    }));
    dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeCenterCode({
      schemeCenterCode: event.target.value
    }));
    {
      event.target.value === '' ? dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeSearch({
        schemeSearch: []
      })) : null;
    }
    {
      event.target.value !== '' ? dispatch((0,_store_schemes_action__WEBPACK_IMPORTED_MODULE_3__.searchSchemesCenterCode)(event.target.value, divisionId)) : null;
    }
  };

  var handleSearchSubSchemeNameClick = function handleSearchSubSchemeNameClick(subscheme) {
    setSubSchemeSearchResult(subscheme);
    dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setSubSchemeName({
      subschemename: subscheme.name
    }));
    dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setSearchMessage({
      searchMessage: ''
    }));
    dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setSubSchemeSearch({
      subschemeSearch: []
    }));
  };

  var handleSearchSubSchemeCodeClick = function handleSearchSubSchemeCodeClick(subscheme) {
    setSubSchemeSearchResult(subscheme);
    dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setSubSchemeName({
      subschemename: subscheme.name
    }));
    dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setSearchMessage({
      searchMessage: ''
    }));
    dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setSubSchemeSearch({
      subschemeSearch: []
    }));
    setSubSchemeSearchType('name');
  };

  var handleSearchSchemeStateNameClick = function handleSearchSchemeStateNameClick(scheme) {
    setSchemeSearchResult(scheme);
    dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeStateName({
      schemeStateName: scheme.state_name
    }));
    dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeSearchMessage({
      searchMessage: ''
    }));
    dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeSearch({
      schemeSearch: []
    }));
  };

  var handleSearchSchemeCenterNameClick = function handleSearchSchemeCenterNameClick(scheme) {
    setSchemeSearchResult(scheme);
    dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeCenterName({
      schemeCenterName: scheme.center_name
    }));
    dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeSearchMessage({
      searchMessage: ''
    }));
    dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeSearch({
      schemeSearch: []
    }));
  };

  var handleSearchSchemeStateCodeClick = function handleSearchSchemeStateCodeClick(scheme) {
    setSchemeSearchResult(scheme);
    dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeStateName({
      schemeStateName: scheme.state_name
    }));
    dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeSearchMessage({
      searchMessage: ''
    }));
    dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeSearch({
      schemeSearch: []
    }));
    setSchemeSearchType('statename');
  };

  var handleSearchSchemeCenterCodeClick = function handleSearchSchemeCenterCodeClick(scheme) {
    setSchemeSearchResult(scheme);
    dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeCenterName({
      schemeCenterName: scheme.center_name
    }));
    dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeSearchMessage({
      searchMessage: ''
    }));
    dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeSearch({
      schemeSearch: []
    }));
    setSchemeSearchType('centername');
  };

  var handleSearchType = function handleSearchType(type) {
    setSchemeSearchType(type);
  };

  var handleSubSchemeSearchType = function handleSubSchemeSearchType(type) {
    setSubSchemeSearchType(type);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    className: "center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("h1", {
      className: "b",
      children: "Create Outcome Indicator"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      className: "pa4 black-80",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "measure",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("label", {
          htmlFor: "department_name",
          className: "f6 b db mb2",
          children: "Select Department Name"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("select", {
          id: "department_name",
          className: "ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1",
          type: "text",
          "aria-describedby": "name-desc",
          defaultValue: 'default',
          onChange: handleDepartmentChange,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("option", {
            value: "default",
            children: "Select the department"
          }), departments.map(function (department) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("option", {
              value: department.id,
              children: department.name
            }, department.id);
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("small", {
          id: "name-desc",
          className: "f6 black-60 db mb2",
          children: "Helper text for the form control."
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      className: "pa4 black-80",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "measure",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("label", {
          htmlFor: "name",
          className: "f6 b db mb2",
          children: "Select Division Name"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("select", {
          id: "name",
          className: "ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1",
          type: "text",
          "aria-describedby": "name-desc",
          defaultValue: 'default',
          onChange: handleDivisionChange,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("option", {
            value: "default",
            children: "Select the division"
          }), divisions.map(function (division) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("option", {
              value: division.id,
              children: division.name
            }, division.id);
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("small", {
          id: "name-desc",
          className: "f6 black-60 db mb2",
          children: "Helper text for the form control."
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      className: "f6 ml4 b",
      children: "Search Scheme By:"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "pa4 lh-copy flex flex-wrap justify-around",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
        className: "f6 fw6 db black link dim pointer ba b--dark-green pa2 br2 shadow-2",
        onClick: function onClick() {
          handleSearchType('statename');
        },
        children: "State Name "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
        className: "f6 fw6 db black link dim pointer ba b--dark-green pa2 br2 shadow-2",
        onClick: function onClick() {
          handleSearchType('centername');
        },
        children: "Center Name "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
        className: "f6 fw6 db black link dim pointer ba b--dark-green pa2 br2 shadow-2",
        onClick: function onClick() {
          handleSearchType('statecode');
        },
        children: "State Code "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
        className: "f6 fw6 db black link dim pointer ba b--dark-green pa2 br2 shadow-2",
        onClick: function onClick() {
          handleSearchType('centercode');
        },
        children: "Center Code "
      })]
    }), schemeSearchType === 'statename' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "pa4 black-80",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("label", {
        htmlFor: "exampleDataList",
        className: "f6 b db mb2",
        children: "Search By State Name"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("input", {
        type: "text",
        className: "ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1",
        placeholder: "Type to search...",
        onChange: handleSearchSchemeStateName,
        value: schemeStateName
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "overflow-visible pointer bg-transparent br2 w-100",
        children: searchScheme && searchScheme.map(function (scheme) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
            className: "b mt1 bb b--black-50 b--dashed",
            onClick: function onClick() {
              return handleSearchSchemeStateNameClick(scheme);
            },
            children: scheme.state_name
          });
        })
      })]
    }) : null, schemeSearchType === 'centername' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "pa4 black-80",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("label", {
        htmlFor: "exampleDataList",
        className: "f6 b db mb2",
        children: "Search By Center Name"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("input", {
        type: "text",
        className: "ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1",
        placeholder: "Type to search...",
        onChange: handleSearchSchemeCenterName,
        value: schemeCenterName
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "overflow-visible pointer bg-transparent br2 w-100",
        children: searchScheme && searchScheme.map(function (scheme) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
            className: "b mt1 bb b--black-50 b--dashed",
            onClick: function onClick() {
              return handleSearchSchemeCenterNameClick(scheme);
            },
            children: scheme.center_name
          });
        })
      })]
    }) : null, schemeSearchType === 'statecode' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "pa4 black-80",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("label", {
        htmlFor: "exampleDataList",
        className: "f6 b db mb2",
        children: "Search By State Code"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("input", {
        type: "text",
        className: "ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1",
        placeholder: "Type to search...",
        onChange: handleSearchSchemeStateCode,
        value: schemeStateCode
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "overflow-visible pointer bg-transparent br2 w-100",
        children: searchScheme && searchScheme.map(function (scheme) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
            className: "b mt1 bb b--black-50 b--dashed",
            onClick: function onClick() {
              return handleSearchSchemeStateCodeClick(scheme);
            },
            children: scheme.state_name
          });
        })
      })]
    }) : null, schemeSearchType === 'centercode' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "pa4 black-80",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("label", {
        htmlFor: "exampleDataList",
        className: "f6 b db mb2",
        children: "Search By Center Code"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("input", {
        type: "text",
        className: "ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1",
        placeholder: "Type to search...",
        onChange: handleSearchSchemeCenterCode,
        value: schemeCenterCode
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "overflow-visible pointer bg-transparent br2 w-100",
        children: searchScheme && searchScheme.map(function (scheme) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
            className: "b mt1 bb b--black-50 b--dashed",
            onClick: function onClick() {
              return handleSearchSchemeCenterCodeClick(scheme);
            },
            children: scheme.center_name
          });
        })
      })]
    }) : null, schemeSearchMessage !== "" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "flex items-center justify-center pa2 ml4 bg-light-red w-60 navy br2 shadow-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("svg", {
        className: "w1",
        "data-icon": "info",
        viewBox: "0 0 32 32",
        style: {
          "fill": "currentcolor"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("title", {
          children: "info icon"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("path", {
          d: "M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
        className: "lh-title ml3 black",
        children: schemeSearchMessage
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      className: "f6 ml4 b",
      children: "Search Sub-Scheme By:"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "pa4 lh-copy flex flex-wrap justify-around",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
        className: "f6 fw6 db black link dim pointer ba b--dark-green pa2 br2 shadow-2",
        onClick: function onClick() {
          handleSubSchemeSearchType('name');
        },
        children: "Name "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
        className: "f6 fw6 db black link dim pointer ba b--dark-green pa2 br2 shadow-2",
        onClick: function onClick() {
          handleSubSchemeSearchType('code');
        },
        children: "Code"
      })]
    }), subschemeSearchType === 'name' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "pa4 black-80",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("label", {
        htmlFor: "exampleDataList",
        className: "f6 b db mb2",
        children: "Search By Sub-Scheme Name"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("input", {
        type: "text",
        className: "ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1",
        placeholder: "Type to search...",
        onChange: handleSearchSubSchemeName,
        value: subschemename
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "overflow-visible pointer bg-transparent br2 w-100",
        children: searchSubScheme && searchSubScheme.map(function (subscheme) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
            className: "b mt1 bb b--black-50 b--dashed",
            onClick: function onClick() {
              return handleSearchSubSchemeNameClick(subscheme);
            },
            children: subscheme.name
          });
        })
      })]
    }) : null, subschemeSearchType === 'code' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "pa4 black-80",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("label", {
        htmlFor: "exampleDataList",
        className: "f6 b db mb2",
        children: "Search By Sub-Scheme Code"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("input", {
        type: "text",
        className: "ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1",
        placeholder: "Type to search...",
        onChange: handleSearchSubSchemeCode,
        value: subschemecode
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "overflow-visible pointer bg-transparent br2 w-100",
        children: searchSubScheme && searchSubScheme.map(function (subscheme) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
            className: "b mt1 bb b--black-50 b--dashed",
            onClick: function onClick() {
              return handleSearchSubSchemeCodeClick(subscheme);
            },
            children: subscheme.name
          });
        })
      })]
    }) : null, subschemesearchmessage !== "" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "flex items-center justify-center pa2 ml4 bg-light-red w-60 navy br2 shadow-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("svg", {
        className: "w1",
        "data-icon": "info",
        viewBox: "0 0 32 32",
        style: {
          "fill": "currentcolor"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("title", {
          children: "info icon"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("path", {
          d: "M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
        className: "lh-title ml3 black",
        children: subschemesearchmessage
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "pa4 black-80",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "measure",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("label", {
          htmlFor: "department_name",
          className: "f6 b db mb2",
          children: "Select Outcome"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("select", {
          id: "department_name",
          className: "ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1",
          type: "text",
          "aria-describedby": "name-desc",
          defaultValue: 'default',
          onChange: handleOutcomeChange,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("option", {
            value: "default",
            children: "Select the outcome"
          }), outcomesearch.map(function (outcome) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("option", {
              value: outcome.id,
              children: outcome.name
            }, outcome.id);
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("small", {
          id: "name-desc",
          className: "f6 black-60 db mb2",
          children: "Helper text for the form control."
        })]
      }), outcomesearchmessage !== "" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "flex items-center justify-center pa2 ml4 bg-light-red w-60 navy br2 shadow-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("svg", {
          className: "w1",
          "data-icon": "info",
          viewBox: "0 0 32 32",
          style: {
            "fill": "currentcolor"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("title", {
            children: "info icon"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("path", {
            d: "M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
          className: "lh-title ml3 black",
          children: outcomesearchmessage
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "pa4 black-80",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("label", {
        htmlFor: "name",
        className: "f6 b db mb2",
        children: "Please Enter Outcome Indicator"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("input", {
        id: "name",
        className: "ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1",
        type: "text",
        "aria-describedby": "name-desc",
        onChange: handleOutcomeIndicatorNameChange,
        value: outcomeindicatorname
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("small", {
        id: "name-desc",
        className: "f6 black-60 db mb2",
        children: "Helper text for the form control."
      }), outcomeindicatormessage !== '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
        className: "f6 ph3 pv2 mb2 mt2 black w-100 tc pointer b ba b--black-40",
        children: outcomeindicatormessage
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
        className: "f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer shadow-3",
        onClick: onSubmitOutcomeIndicator,
        children: "Create Outcome Indicator"
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateOutcomeIndicator);

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



var getDepartmentsData = function getDepartmentsData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "dept_dashboard"), {
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

/***/ }),

/***/ "./resources/js/components/store/outcome-actions.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/store/outcome-actions.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOutcomesData": () => (/* binding */ getOutcomesData),
/* harmony export */   "getSearchOutcomeData": () => (/* binding */ getSearchOutcomeData),
/* harmony export */   "miggetSearchOutcomeData": () => (/* binding */ miggetSearchOutcomeData),
/* harmony export */   "storeOutcomeData": () => (/* binding */ storeOutcomeData),
/* harmony export */   "updateOutcomeData": () => (/* binding */ updateOutcomeData),
/* harmony export */   "migupdateOutcomeData": () => (/* binding */ migupdateOutcomeData),
/* harmony export */   "deleteOutcomeData": () => (/* binding */ deleteOutcomeData),
/* harmony export */   "migdeleteOutcomeData": () => (/* binding */ migdeleteOutcomeData)
/* harmony export */ });
/* harmony import */ var _subschemesSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subschemesSlice */ "./resources/js/components/store/subschemesSlice.js");
/* harmony import */ var _schemesSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schemesSlice */ "./resources/js/components/store/schemesSlice.js");
/* harmony import */ var _outcomeSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outcomeSlice */ "./resources/js/components/store/outcomeSlice.js");
/* harmony import */ var _errorSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errorSlice */ "./resources/js/components/store/errorSlice.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./resources/js/components/configuration.js");





var getOutcomesData = function getOutcomesData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_4__.laravel_api, "outcomes/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.length !== 0) {
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomes({
          outcomes: res
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_3__.errorActions.setError({
          error: true
        }));
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_3__.errorActions.setError({
        error: true
      }));
      dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var getSearchOutcomeData = function getSearchOutcomeData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_4__.laravel_api, "outcomes/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.length !== 0) {
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeUpdate({
          updateOutcome: false
        }));
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeSearch({
          searchOutcome: res
        }));
      } else {
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeUpdate({
          updateOutcome: false
        }));
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_3__.errorActions.setError({
          error: true
        }));
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeSearchMessage({
          searchMessage: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeUpdate({
        updateOutcome: false
      }));
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_3__.errorActions.setError({
        error: true
      }));
      dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeSearchMessage({
        searchMessage: 'Sorry something went wrong!!'
      }));
    });
  };
};
var miggetSearchOutcomeData = function miggetSearchOutcomeData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_4__.laravel_api, "mig_outcomes/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.length !== 0) {
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeUpdate({
          updateOutcome: false
        }));
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeSearch({
          searchOutcome: res
        }));
      } else {
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeUpdate({
          updateOutcome: false
        }));
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_3__.errorActions.setError({
          error: true
        }));
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeSearchMessage({
          searchMessage: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeUpdate({
        updateOutcome: false
      }));
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_3__.errorActions.setError({
        error: true
      }));
      dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeSearchMessage({
        searchMessage: 'Sorry something went wrong!!'
      }));
    });
  };
};
var storeOutcomeData = function storeOutcomeData(departmentId, divisionId, schemeId, subschemeId, name) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_4__.laravel_api, "outcome"), {
      method: 'post',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token')),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        subscheme_id: subschemeId,
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
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSearchMessage({
          searchMessage: ''
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeSearch({
          subschemeSearch: []
        }));
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setMessage({
          message: 'Outcome created successfully'
        }));
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeName({
          outcomeName: ''
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_3__.errorActions.setError({
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
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSearchMessage({
          searchMessage: ''
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeSearch({
          subschemeSearch: []
        }));
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeName({
          outcomeName: ''
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_3__.errorActions.setError({
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
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSearchMessage({
        searchMessage: ''
      }));
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeSearch({
        subschemeSearch: []
      }));
      dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeName({
        outcomeName: ''
      }));
      dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var updateOutcomeData = function updateOutcomeData(id, outcome) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_4__.laravel_api, "outcome/update/").concat(id), {
      method: 'post',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token')),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: outcome
      })
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeUpdate({
          updateOutcome: true
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_3__.errorActions.setError({
          error: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_3__.errorActions.setError({
        error: true
      }));
    });
  };
};
var migupdateOutcomeData = function migupdateOutcomeData(id, outcome) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_4__.laravel_api, "mig_outcome/update/").concat(id), {
      method: 'post',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token')),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: outcome
      })
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeUpdate({
          updateOutcome: true
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_3__.errorActions.setError({
          error: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_3__.errorActions.setError({
        error: true
      }));
    });
  };
};
var deleteOutcomeData = function deleteOutcomeData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_4__.laravel_api, "outcome/delete/").concat(id), {
      method: 'DELETE',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeDeleteSuccess({
          outcomeDeleteSuccess: true
        }));
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeUpdate({
          updateOutcome: true
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_3__.errorActions.setError({
          error: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_3__.errorActions.setError({
        error: true
      }));
    });
  };
};
var migdeleteOutcomeData = function migdeleteOutcomeData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_4__.laravel_api, "mig_outcome/delete/").concat(id), {
      method: 'DELETE',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeDeleteSuccess({
          outcomeDeleteSuccess: true
        }));
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeUpdate({
          updateOutcome: true
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_3__.errorActions.setError({
          error: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_3__.errorActions.setError({
        error: true
      }));
    });
  };
};

/***/ }),

/***/ "./resources/js/components/store/outcomeindicator-actions.js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/store/outcomeindicator-actions.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOutcomeIndicatorsData": () => (/* binding */ getOutcomeIndicatorsData),
/* harmony export */   "miggetOutcomeIndicatorsData": () => (/* binding */ miggetOutcomeIndicatorsData),
/* harmony export */   "getSearchOutcomeData": () => (/* binding */ getSearchOutcomeData),
/* harmony export */   "storeOutcomeIndicatorData": () => (/* binding */ storeOutcomeIndicatorData),
/* harmony export */   "deleteOutcomeIndicatorData": () => (/* binding */ deleteOutcomeIndicatorData),
/* harmony export */   "migdeleteOutcomeIndicatorData": () => (/* binding */ migdeleteOutcomeIndicatorData)
/* harmony export */ });
/* harmony import */ var _subschemesSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subschemesSlice */ "./resources/js/components/store/subschemesSlice.js");
/* harmony import */ var _schemesSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schemesSlice */ "./resources/js/components/store/schemesSlice.js");
/* harmony import */ var _outcomeSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outcomeSlice */ "./resources/js/components/store/outcomeSlice.js");
/* harmony import */ var _outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outcomeindicatorSlice */ "./resources/js/components/store/outcomeindicatorSlice.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./resources/js/components/configuration.js");
/* harmony import */ var _errorSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errorSlice */ "./resources/js/components/store/errorSlice.js");






var getOutcomeIndicatorsData = function getOutcomeIndicatorsData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_4__.laravel_api, "outcomeindicator/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.length !== 0) {
        dispatch(_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_3__.outcomeindicatorActions.setOutcomeIndicatorSearch({
          searchOutcomeIndicator: res
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_5__.errorActions.setError({
          error: true
        }));
        dispatch(_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_3__.outcomeindicatorActions.setOutcomeIndicatorSearchMessage({
          searchMessage: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_5__.errorActions.setError({
        error: true
      }));
      dispatch(_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_3__.outcomeindicatorActions.setOutcomeIndicatorSearchMessage({
        searchMessage: 'Sorry something went wrong!!'
      }));
    });
  };
};
var miggetOutcomeIndicatorsData = function miggetOutcomeIndicatorsData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_4__.laravel_api, "mig_outcomeindicator/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.length !== 0) {
        dispatch(_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_3__.outcomeindicatorActions.setOutcomeIndicatorSearch({
          searchOutcomeIndicator: res
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_5__.errorActions.setError({
          error: true
        }));
        dispatch(_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_3__.outcomeindicatorActions.setOutcomeIndicatorSearchMessage({
          searchMessage: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_5__.errorActions.setError({
        error: true
      }));
      dispatch(_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_3__.outcomeindicatorActions.setOutcomeIndicatorSearchMessage({
        searchMessage: 'Sorry something went wrong!!'
      }));
    });
  };
};
var getSearchOutcomeData = function getSearchOutcomeData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_4__.laravel_api, "outcomes/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.length !== 0) {
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeSearch({
          searchOutcome: res
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_5__.errorActions.setError({
          error: true
        }));
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeSearchMessage({
          searchMessage: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_5__.errorActions.setError({
        error: true
      }));
      dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeSearchMessage({
        searchMessage: 'Sorry something went wrong!!'
      }));
    });
  };
};
var storeOutcomeIndicatorData = function storeOutcomeIndicatorData(departmentId, divisionId, schemeId, subschemeId, outcomeId, name) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_4__.laravel_api, "outcomeindicator"), {
      method: 'post',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token')),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        outcome_id: outcomeId,
        subscheme_id: subschemeId,
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
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSearchMessage({
          searchMessage: ''
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeSearch({
          subschemeSearch: []
        }));
        dispatch(_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_3__.outcomeindicatorActions.setMessage({
          message: 'Outcome Indicator created successfully'
        }));
        dispatch(_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_3__.outcomeindicatorActions.setOutcomeIndicatorName({
          outcomeindicatorName: ''
        }));
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeSearch({
          searchOutcome: []
        }));
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeSearchMessage({
          searchMessage: ''
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_5__.errorActions.setError({
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
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSearchMessage({
          searchMessage: ''
        }));
        dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeSearch({
          subschemeSearch: []
        }));
        dispatch(_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_3__.outcomeindicatorActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
        dispatch(_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_3__.outcomeindicatorActions.setOutcomeIndicatorName({
          outcomeindicatorName: ''
        }));
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeSearch({
          searchOutcome: []
        }));
        dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeSearchMessage({
          searchMessage: ''
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_5__.errorActions.setError({
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
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSearchMessage({
        searchMessage: ''
      }));
      dispatch(_subschemesSlice__WEBPACK_IMPORTED_MODULE_0__.subschemesActions.setSubSchemeSearch({
        subschemeSearch: []
      }));
      dispatch(_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_3__.outcomeindicatorActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
      dispatch(_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_3__.outcomeindicatorActions.setOutcomeIndicatorName({
        outcomeindicatorName: ''
      }));
      dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeSearch({
        searchOutcome: []
      }));
      dispatch(_outcomeSlice__WEBPACK_IMPORTED_MODULE_2__.outcomesActions.setOutcomeSearchMessage({
        searchMessage: ''
      }));
    });
  };
};
var deleteOutcomeIndicatorData = function deleteOutcomeIndicatorData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_4__.laravel_api, "outcomeindicator/delete/").concat(id), {
      method: 'DELETE',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_3__.outcomeindicatorActions.setOutcomeIndicatorDeleteSuccess({
          outcomeIndicatorDeleteSuccess: true
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_5__.errorActions.setError({
          error: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_5__.errorActions.setError({
        error: true
      }));
    });
  };
};
var migdeleteOutcomeIndicatorData = function migdeleteOutcomeIndicatorData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_4__.laravel_api, "mig_outcomeindicator/delete/").concat(id), {
      method: 'DELETE',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_outcomeindicatorSlice__WEBPACK_IMPORTED_MODULE_3__.outcomeindicatorActions.setOutcomeIndicatorDeleteSuccess({
          outcomeIndicatorDeleteSuccess: true
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_5__.errorActions.setError({
          error: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_5__.errorActions.setError({
        error: true
      }));
    });
  };
};

/***/ }),

/***/ "./resources/js/components/store/schemes-action.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/store/schemes-action.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSchemesData": () => (/* binding */ getSchemesData),
/* harmony export */   "miggetSchemesData": () => (/* binding */ miggetSchemesData),
/* harmony export */   "miggetExtraSchemesData": () => (/* binding */ miggetExtraSchemesData),
/* harmony export */   "miggetPendingSchemesData": () => (/* binding */ miggetPendingSchemesData),
/* harmony export */   "getSchemesDeptData": () => (/* binding */ getSchemesDeptData),
/* harmony export */   "miggetSchemesDeptData": () => (/* binding */ miggetSchemesDeptData),
/* harmony export */   "storeSchemeData": () => (/* binding */ storeSchemeData),
/* harmony export */   "searchSchemesStateName": () => (/* binding */ searchSchemesStateName),
/* harmony export */   "searchSchemesCenterName": () => (/* binding */ searchSchemesCenterName),
/* harmony export */   "searchSchemesStateCode": () => (/* binding */ searchSchemesStateCode),
/* harmony export */   "searchSchemesCenterCode": () => (/* binding */ searchSchemesCenterCode),
/* harmony export */   "updateSchemeData": () => (/* binding */ updateSchemeData),
/* harmony export */   "migupdateSchemeData": () => (/* binding */ migupdateSchemeData),
/* harmony export */   "deleteSchemeData": () => (/* binding */ deleteSchemeData),
/* harmony export */   "migdeleteSchemeData": () => (/* binding */ migdeleteSchemeData)
/* harmony export */ });
/* harmony import */ var _schemesSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schemesSlice */ "./resources/js/components/store/schemesSlice.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configuration */ "./resources/js/components/configuration.js");
/* harmony import */ var _errorSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorSlice */ "./resources/js/components/store/errorSlice.js");



var getSchemesData = function getSchemesData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "schemes/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.length !== 0) {
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setUpateScheme({
          updateScheme: false
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemes({
          schemes: res
        }));
      } else {
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setUpateScheme({
          updateScheme: false
        }));
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setUpateScheme({
        updateScheme: false
      }));
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var miggetSchemesData = function miggetSchemesData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "mig_schemes/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.length !== 0) {
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setUpateScheme({
          updateScheme: false
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemes({
          schemes: res
        }));
      } else {
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setUpateScheme({
          updateScheme: false
        }));
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setUpateScheme({
        updateScheme: false
      }));
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var miggetExtraSchemesData = function miggetExtraSchemesData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "extra_scheme/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setUpateScheme({
          updateScheme: false
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemes({
          schemes: res.schemes
        }));
      } else {
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setUpateScheme({
          updateScheme: false
        }));
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setUpateScheme({
        updateScheme: false
      }));
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var miggetPendingSchemesData = function miggetPendingSchemesData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "mig_pendingschemes/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setUpateScheme({
          updateScheme: false
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setPendingScheme({
          pendingSchemes: res.pending_schemes
        }));
      } else {
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setUpateScheme({
          updateScheme: false
        }));
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setUpateScheme({
        updateScheme: false
      }));
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var getSchemesDeptData = function getSchemesDeptData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "schemesdept/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.length !== 0) {
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setUpateScheme({
          updateScheme: false
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemes({
          schemes: res
        }));
      } else {
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setUpateScheme({
          updateScheme: false
        }));
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setUpateScheme({
        updateScheme: false
      }));
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var miggetSchemesDeptData = function miggetSchemesDeptData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "mig_schemesdept/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setUpateScheme({
          updateScheme: false
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemes({
          schemes: res.migrated_schemes
        }));
      } else {
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setUpateScheme({
          updateScheme: false
        }));
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setUpateScheme({
        updateScheme: false
      }));
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var storeSchemeData = function storeSchemeData(departmentId, divisionId, schemeStateName, schemeCenterName, schemeStateCode, schemeCenterCode) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "scheme"), {
      method: 'post',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token')),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        state_name: schemeStateName,
        center_name: schemeCenterName,
        state_code: schemeStateCode,
        center_code: schemeCenterCode,
        division_id: divisionId,
        department_id: departmentId
      })
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeStateName({
          schemeStateName: ''
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeCenterName({
          schemeCenterName: ''
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeCenterCode({
          schemeCenterCode: ''
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeStateCode({
          schemeStateCode: ''
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setMessage({
          message: 'Scheme created successfully'
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};
var searchSchemesStateName = function searchSchemesStateName(name, id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "scheme/searchstatename/").concat(name, "/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.result !== "No Data not found") {
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeSearchMessage({
          searchMessage: ''
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeSearch({
          schemeSearch: res
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeSearch({
          schemeSearch: []
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeSearchMessage({
          searchMessage: 'Nothing Found'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeSearch({
        schemeSearch: []
      }));
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeSearchMessage({
        searchMessage: 'Nothing Found'
      }));
    });
  };
};
var searchSchemesCenterName = function searchSchemesCenterName(name, id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "scheme/searchcentername/").concat(name, "/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.result !== "No Data not found") {
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeSearchMessage({
          searchMessage: ''
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeSearch({
          schemeSearch: res
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeSearch({
          schemeSearch: []
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeSearchMessage({
          searchMessage: 'Nothing Found'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeSearch({
        schemeSearch: []
      }));
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeSearchMessage({
        searchMessage: 'Nothing Found'
      }));
    });
  };
};
var searchSchemesStateCode = function searchSchemesStateCode(name, id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "scheme/searchstatecode/").concat(name, "/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.result !== "No Data not found") {
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeSearchMessage({
          searchMessage: ''
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeSearch({
          schemeSearch: res
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeSearch({
          schemeSearch: []
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeSearchMessage({
          searchMessage: 'Nothing Found'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeSearch({
        schemeSearch: []
      }));
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeSearchMessage({
        searchMessage: 'Nothing Found'
      }));
    });
  };
};
var searchSchemesCenterCode = function searchSchemesCenterCode(name, id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "scheme/searchcentercode/").concat(name, "/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.result !== "No Data not found") {
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeSearchMessage({
          searchMessage: ''
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeSearch({
          schemeSearch: res
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeSearch({
          schemeSearch: []
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeSearchMessage({
          searchMessage: 'Nothing Found'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeSearch({
        schemeSearch: []
      }));
      dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setSchemeSearchMessage({
        searchMessage: 'Nothing Found'
      }));
    });
  };
};
var updateSchemeData = function updateSchemeData(id, schemeStateName, schemeCenterName, schemeStateCode, schemeCenterCode) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "scheme/edit/").concat(id), {
      method: 'post',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token')),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        state_name: schemeStateName,
        center_name: schemeCenterName,
        state_code: schemeStateCode,
        center_code: schemeCenterCode
      })
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setUpateScheme({
          updateScheme: true
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setEditNotificationSuccess({
          editNotificationSuccess: true
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
var migupdateSchemeData = function migupdateSchemeData(id, schemeStateName, schemeCenterName, schemeStateCode, schemeCenterCode) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "mig_scheme/edit/").concat(id), {
      method: 'post',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token')),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        state_name: schemeStateName,
        center_name: schemeCenterName,
        state_code: schemeStateCode,
        center_code: schemeCenterCode
      })
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setUpateScheme({
          updateScheme: true
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setEditNotificationSuccess({
          editNotificationSuccess: true
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
var deleteSchemeData = function deleteSchemeData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "scheme/delete/").concat(id), {
      method: 'DELETE',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setDeleteNotificationSuccess({
          deleteNotificationSuccess: true
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setUpateScheme({
          updateScheme: true
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
var migdeleteSchemeData = function migdeleteSchemeData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "mig_scheme/delete/").concat(id), {
      method: 'DELETE',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setDeleteNotificationSuccess({
          deleteNotificationSuccess: true
        }));
        dispatch(_schemesSlice__WEBPACK_IMPORTED_MODULE_0__.schemesActions.setUpateScheme({
          updateScheme: true
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





var getSubSchemesData = function getSubSchemesData(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "subschemes/").concat(id), {
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
var getSubSchemesDataDeptUser = function getSubSchemesDataDeptUser(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "subschemesdeptuser/").concat(id), {
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

/***/ })

}]);