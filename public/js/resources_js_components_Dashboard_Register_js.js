"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_Register_js"],{

/***/ "./resources/js/components/Dashboard/Register.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Dashboard/Register.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_registerSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/registerSlice */ "./resources/js/components/store/registerSlice.js");
/* harmony import */ var _store_register_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/register-action */ "./resources/js/components/store/register-action.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _store_divisionsSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/divisionsSlice */ "./resources/js/components/store/divisionsSlice.js");
/* harmony import */ var _store_departments_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/departments-action */ "./resources/js/components/store/departments-action.js");
/* harmony import */ var _store_divisions_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/divisions-action */ "./resources/js/components/store/divisions-action.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











var Register = function Register() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var name = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.register.name;
  });
  var email = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.register.email;
  });
  var password = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.register.password;
  });
  var message = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.register.message;
  });
  var departmentId = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.register.departmentId;
  });
  var divisionId = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.register.divisionId;
  });
  var role = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.register.role;
  });
  var departments = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.departments.departments;
  });
  var divisions = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.divisions.divisions;
  }); // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_store_departments_action__WEBPACK_IMPORTED_MODULE_5__.getDepartmentsData)());
    return function () {
      dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setName({
        name: ''
      }));
      dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setEmail({
        email: ''
      }));
      dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setPassword({
        password: ''
      }));
      dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setDepartmentId({
        departmentId: ''
      }));
      dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setDivisionId({
        divisionId: ''
      }));
      dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setRole({
        role: 'user'
      }));
      dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setMessage({
        message: ''
      }));
      dispatch(_store_divisionsSlice__WEBPACK_IMPORTED_MODULE_4__.divisionsActions.setDivisions({
        divisions: []
      }));
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (departmentId !== '') {
      dispatch((0,_store_divisions_action__WEBPACK_IMPORTED_MODULE_6__.getDivisionsData)(departmentId));
    }
  }, [departmentId]);

  var handleDepartmentChange = function handleDepartmentChange(event) {
    dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setDepartmentId({
      departmentId: event.target.value
    }));
    dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setMessage({
      message: ''
    }));
  };

  var handleRoleChange = function handleRoleChange(event) {
    dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setRole({
      role: event.target.value
    }));
    dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setMessage({
      message: ''
    }));
  };

  var handleDivisionChange = function handleDivisionChange(event) {
    dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setDivisionId({
      divisionId: event.target.value
    }));
    dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setMessage({
      message: ''
    }));
  };

  var onEmailChangeHandler = function onEmailChangeHandler(event) {
    dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setEmail({
      email: event.target.value
    }));
    dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setMessage({
      message: ''
    }));
  };

  var onNameChangeHandler = function onNameChangeHandler(event) {
    dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setName({
      name: event.target.value
    }));
    dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setMessage({
      message: ''
    }));
  };

  var onPasswordChangeHandler = function onPasswordChangeHandler(event) {
    dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setPassword({
      password: event.target.value
    }));
    dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setMessage({
      message: ''
    }));
  };

  var onSubmitHandler = function onSubmitHandler() {
    if (email === '') {
      return dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setMessage({
        message: 'Please enter Email'
      }));
    }

    if (name === '') {
      return dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setMessage({
        message: 'Please Enter Name'
      }));
    }

    if (password === '') {
      return dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setMessage({
        message: 'Please Enter Password'
      }));
    }

    if (password.length < 6) {
      return dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setMessage({
        message: 'Password must be greater than 6 characters'
      }));
    }

    if (divisionId === '') {
      return dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setMessage({
        message: 'No Division Selected'
      }));
    }

    if (departmentId === '') {
      return dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setMessage({
        message: 'No Department Selected'
      }));
    }

    if (role === '') {
      return dispatch(_store_registerSlice__WEBPACK_IMPORTED_MODULE_2__.registerActions.setMessage({
        message: 'No Role Selected'
      }));
    }

    dispatch((0,_store_register_action__WEBPACK_IMPORTED_MODULE_3__.sendRegisterData)(email, password, name, departmentId, divisionId, role));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1", {
      className: "b",
      children: "Create New User"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "pa4 black-80",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
        htmlFor: "name",
        className: "f6 b db mb2",
        children: "Name"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
        id: "name",
        className: "ba b--black-20 pa2 mb2 db w-100",
        type: "text",
        "aria-describedby": "name-desc",
        onChange: onNameChangeHandler,
        value: name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("small", {
        id: "name-desc",
        className: "f6 black-60 db mb2",
        children: "Helper text for the form control."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "pa4 black-80",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
        htmlFor: "email",
        className: "f6 b db mb2",
        children: "Email address"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
        id: "email",
        className: "ba b--black-20 pa2 mb2 db w-100",
        type: "email",
        "aria-describedby": "name-desc",
        onChange: onEmailChangeHandler,
        value: email
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("small", {
        id: "name-desc",
        className: "f6 black-60 db mb2",
        children: "Helper text for the form control."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "pa4 black-80",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
        htmlFor: "password",
        className: "f6 b db mb2",
        children: "Password"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
        id: "password",
        className: "ba b--black-20 pa2 mb2 db w-100",
        type: "password",
        "aria-describedby": "name-desc",
        onChange: onPasswordChangeHandler,
        value: password
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("small", {
        id: "name-desc",
        className: "f6 black-60 db mb2",
        children: "Helper text for the form control."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "pa4 black-80",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "measure",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
          htmlFor: "department_name",
          className: "f6 b db mb2",
          children: "Select Department Name"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("select", {
          id: "department_name",
          className: "ba b--black-20 pa2 mb2 db w-100",
          type: "text",
          "aria-describedby": "name-desc",
          defaultValue: 'default',
          onChange: handleDepartmentChange,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option", {
            value: "default",
            children: "Select the department"
          }), departments && departments.map(function (department) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option", {
              value: department.id,
              children: department.name
            }, department.id);
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("small", {
          id: "name-desc",
          className: "f6 black-60 db mb2",
          children: "Helper text for the form control."
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "pa4 black-80",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "measure",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
          htmlFor: "name",
          className: "f6 b db mb2",
          children: "Select Division Name"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("select", {
          id: "name",
          className: "ba b--black-20 pa2 mb2 db w-100",
          type: "text",
          "aria-describedby": "name-desc",
          defaultValue: 'default',
          onChange: handleDivisionChange,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option", {
            value: "default",
            children: "Select the division"
          }), divisions && divisions.map(function (division) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option", {
              value: division.id,
              children: division.name
            }, division.id);
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("small", {
          id: "name-desc",
          className: "f6 black-60 db mb2",
          children: "Helper text for the form control."
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "pa4 black-80",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "measure",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
          htmlFor: "name",
          className: "f6 b db mb2",
          children: "Select Role"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("select", {
          id: "name",
          className: "ba b--black-20 pa2 mb2 db w-100",
          type: "text",
          "aria-describedby": "name-desc",
          defaultValue: 'default',
          onChange: handleRoleChange,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option", {
            value: "user",
            children: "User"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option", {
            value: "verifier",
            children: "Verifier"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("small", {
          id: "name-desc",
          className: "f6 black-60 db mb2",
          children: "Helper text for the form control."
        })]
      })
    }), message !== '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
      className: "f6 ph3 pv2 mb2 mt2 black w-100 tc pointer b ba b--black-40",
      children: message
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
      className: "f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer",
      onClick: onSubmitHandler,
      children: "Create New User"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);

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

/***/ "./resources/js/components/store/register-action.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/store/register-action.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendRegisterData": () => (/* binding */ sendRegisterData)
/* harmony export */ });
/* harmony import */ var _registerSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registerSlice */ "./resources/js/components/store/registerSlice.js");
/* harmony import */ var _divisionsSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./divisionsSlice */ "./resources/js/components/store/divisionsSlice.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ "./resources/js/components/configuration.js");
/* harmony import */ var _errorSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errorSlice */ "./resources/js/components/store/errorSlice.js");




var sendRegisterData = function sendRegisterData(email, password, name, departmentId, divisionId, role) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "register"), {
      method: 'post',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token')),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        department_id: departmentId,
        division_id: divisionId,
        role: role,
        password_confirmation: password
      })
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_registerSlice__WEBPACK_IMPORTED_MODULE_0__.registerActions.setName({
          name: ''
        }));
        dispatch(_registerSlice__WEBPACK_IMPORTED_MODULE_0__.registerActions.setEmail({
          email: ''
        }));
        dispatch(_registerSlice__WEBPACK_IMPORTED_MODULE_0__.registerActions.setPassword({
          password: ''
        }));
        dispatch(_registerSlice__WEBPACK_IMPORTED_MODULE_0__.registerActions.setRole({
          role: 'user'
        }));
        dispatch(_registerSlice__WEBPACK_IMPORTED_MODULE_0__.registerActions.setMessage({
          message: 'You have successfuly registered'
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_3__.errorActions.setError({
          error: true
        }));
        dispatch(_registerSlice__WEBPACK_IMPORTED_MODULE_0__.registerActions.setName({
          name: ''
        }));
        dispatch(_registerSlice__WEBPACK_IMPORTED_MODULE_0__.registerActions.setEmail({
          email: ''
        }));
        dispatch(_registerSlice__WEBPACK_IMPORTED_MODULE_0__.registerActions.setPassword({
          password: ''
        }));
        dispatch(_registerSlice__WEBPACK_IMPORTED_MODULE_0__.registerActions.setRole({
          role: 'user'
        }));
        dispatch(_registerSlice__WEBPACK_IMPORTED_MODULE_0__.registerActions.setMessage({
          message: 'Sorry something went wrong!!'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_3__.errorActions.setError({
        error: true
      }));
      dispatch(_registerSlice__WEBPACK_IMPORTED_MODULE_0__.registerActions.setName({
        name: ''
      }));
      dispatch(_registerSlice__WEBPACK_IMPORTED_MODULE_0__.registerActions.setEmail({
        email: ''
      }));
      dispatch(_registerSlice__WEBPACK_IMPORTED_MODULE_0__.registerActions.setPassword({
        password: ''
      }));
      dispatch(_registerSlice__WEBPACK_IMPORTED_MODULE_0__.registerActions.setRole({
        role: 'user'
      }));
      dispatch(_registerSlice__WEBPACK_IMPORTED_MODULE_0__.registerActions.setMessage({
        message: 'Sorry something went wrong!!'
      }));
    });
  };
};

/***/ })

}]);