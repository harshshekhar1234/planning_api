"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_Dashboard_Dept_User_js"],{

/***/ "./resources/js/components/Dashboard/Dashboard_Dept_User.js":
/*!******************************************************************!*\
  !*** ./resources/js/components/Dashboard/Dashboard_Dept_User.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./resources/js/components/Dashboard/Navbar.js");
/* harmony import */ var _Sidenav_Dept_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidenav_Dept_User */ "./resources/js/components/Dashboard/Sidenav_Dept_User.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./resources/js/components/Dashboard/Footer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_errorSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/errorSlice */ "./resources/js/components/store/errorSlice.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var Dashboard_Dept_User = function Dashboard_Dept_User() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
  var isSignedIn = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.user.isSignedIn;
  });
  var role = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.user.role;
  });
  var error = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.error.error;
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showSide = _useState2[0],
      setShowSide = _useState2[1];

  var clickHandler = function clickHandler() {
    setShowSide(!showSide);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isSignedIn !== true) {
      return navigate("/login");
    }

    if (role !== 'user') {
      return navigate("/login");
    }
  }, [isSignedIn]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (error) {
      return navigate("/errorpage");
    }

    return function () {
      dispatch(_store_errorSlice__WEBPACK_IMPORTED_MODULE_5__.errorActions.setError({
        error: false
      }));
    };
  }, [error]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    style: {
      backgroundColor: '#fff'
    },
    className: "sb-nav-fixed ".concat(showSide && 'sb-sidenav-toggled'),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      clickHandler: clickHandler
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      id: "layoutSidenav",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        id: "layoutSidenav_nav",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Sidenav_Dept_User__WEBPACK_IMPORTED_MODULE_2__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        id: "layoutSidenav_content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Outlet, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {})]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard_Dept_User);

/***/ }),

/***/ "./resources/js/components/Dashboard/Footer.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Dashboard/Footer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function Footer() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("footer", {
    className: "py-4 bg-light mt-auto",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "container-fluid px-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "d-flex align-items-center justify-content-between small",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "text-muted",
          children: "Copyright \xA9Department of Planning and Development - Government of Jharkhand  2022"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "#",
            children: "Privacy Policy"
          }), "\xB7", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "#",
            children: "Terms & Conditions"
          })]
        })]
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./resources/js/components/Dashboard/Navbar.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Dashboard/Navbar.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _store_signin_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/signin-action */ "./resources/js/components/store/signin-action.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








function Navbar(_ref) {
  var clickHandler = _ref.clickHandler;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var handleLogout = function handleLogout() {
    dispatch((0,_store_signin_action__WEBPACK_IMPORTED_MODULE_1__.logout)());
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("nav", {
      className: "sb-topnav navbar navbar-expand navbar-dark bg-dark",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
        className: "navbar-brand ps-3",
        to: "/",
        children: "Home Page"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        className: "btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0",
        id: "sidebarToggle",
        onClick: clickHandler,
        href: "#!",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
          className: "fas fa-bars"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("form", {
        className: "d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "input-group"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
        className: "navbar-nav ms-auto ms-md-0 me-3 me-lg-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
          className: "nav-item dropdown",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
            className: "nav-link dropdown-toggle",
            id: "navbarDropdown",
            href: "#",
            role: "button",
            "data-bs-toggle": "dropdown",
            "aria-expanded": "false",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
              className: "fas fa-user fa-fw"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
            className: "dropdown-menu dropdown-menu-end",
            "aria-labelledby": "navbarDropdown",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "dropdown-item pointer",
                onClick: handleLogout,
                children: "Logout"
              })
            })
          })]
        })
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./resources/js/components/Dashboard/Sidenav_Dept_User.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/Dashboard/Sidenav_Dept_User.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ "./resources/js/components/configuration.js");
/* harmony import */ var _store_divisions_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/divisions-action */ "./resources/js/components/store/divisions-action.js");
/* harmony import */ var _store_setting_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/setting-action */ "./resources/js/components/store/setting-action.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function Sidenav_Dept_User() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var name = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.user.name;
  });
  var divisionid = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.divisions.divisionId;
  });
  var division1 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.divisions.division;
  });
  var blockSetting = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.setting.blockSetting;
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      division = _useState2[0],
      setDivision = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (divisionid) {
      dispatch((0,_store_divisions_action__WEBPACK_IMPORTED_MODULE_3__.getDivisionData)(divisionid));
      dispatch((0,_store_setting_action__WEBPACK_IMPORTED_MODULE_4__.getOutcomeEntrySetting)(divisionid));
    }
  }, [divisionid]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (division1) {
      setDivision(division1);
    }
  }, [division1]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("nav", {
    className: "sb-sidenav accordion sb-sidenav-dark",
    id: "sidenavAccordion",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "sb-sidenav-menu",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "nav",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "sb-sidenav-menu-heading",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "white",
            children: "Core"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
          className: "nav-link",
          to: "/dashboarddeptuser/main",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "sb-nav-link-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fas fa-chart-area"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "white",
            children: "Dashboard"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
          className: "nav-link",
          to: "/dashboarddeptuser/outcomebudget",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "sb-nav-link-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fas fa-chart-area"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "white",
            children: "Outcome Budget Achievment Entry"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
          className: "nav-link",
          to: "/dashboarddeptuser/updatepassword",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "sb-nav-link-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fas fa-chart-area"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "white",
            children: "Update Password"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
          className: "nav-link",
          target: "_blank",
          href: "".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.doc_url, "usermanual.pdf"),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "sb-nav-link-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fas fa-download"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "white",
            children: "User Manual"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "sb-sidenav-menu-heading",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "white",
            children: "Submission and Report"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
          className: "nav-link collapsed",
          href: "#",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#collapseSubmit",
          "aria-expanded": "false",
          "aria-controls": "collapseSubmit",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "sb-nav-link-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fas fa-columns"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "white",
            children: "Submit for verification"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "sb-sidenav-collapse-arrow",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fas fa-angle-down"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "collapse",
          id: "collapseSubmit",
          "aria-labelledby": "headingOne",
          "data-bs-parent": "#sidenavAccordion",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("nav", {
            className: "sb-sidenav-menu-nested nav",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
              className: "nav-link",
              to: "/dashboarddeptuser/submitverification",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "sb-nav-link-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: "fas fa-chart-area"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "white",
                children: "Quater Wise"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
              className: "nav-link",
              to: "/dashboarddeptuser/aorsubmitverification",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "sb-nav-link-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: "fas fa-chart-area"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "white",
                children: "On Demand Report"
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
          className: "nav-link collapsed",
          href: "#",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#collapseReport",
          "aria-expanded": "false",
          "aria-controls": "collapseReport",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "sb-nav-link-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fas fa-columns"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "white",
            children: "Reports"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "sb-sidenav-collapse-arrow",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fas fa-angle-down"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "collapse",
          id: "collapseReport",
          "aria-labelledby": "headingOne",
          "data-bs-parent": "#sidenavAccordion",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("nav", {
            className: "sb-sidenav-menu-nested nav",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
              className: "nav-link",
              to: "/dashboarddeptuser/divisionreport/".concat(divisionid),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "sb-nav-link-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: "fas fa-chart-area"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "white",
                children: "Division Report Download"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
              className: "nav-link",
              to: "/dashboarddeptuser/quaterreport",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "sb-nav-link-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: "fas fa-chart-area"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "white",
                children: "Quater Wise Report"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
              className: "nav-link",
              to: "/dashboarddeptuser/asonreportdeptuser",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "sb-nav-link-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: "fas fa-chart-area"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "white",
                children: "On Demand Report"
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "sb-sidenav-menu-heading",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "white",
            children: "Outcome Budget 2023-24"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
          className: "nav-link",
          to: "/dashboarddeptuser/migrationsummarydept/".concat(divisionid, "/").concat(division),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "sb-nav-link-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fas fa-chart-area"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "white",
            children: "Summary"
          })]
        }), blockSetting.indexOf('entry') !== -1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
          className: "nav-link",
          to: "/dashboarddeptuser/entryformdeptuserscheme",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "sb-nav-link-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fas fa-chart-area"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "white",
            children: "Outcome Budget Entry Form"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
          className: "nav-link",
          to: "/dashboarddeptuser/migrationdivisionreport/".concat(divisionid),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "sb-nav-link-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fas fa-chart-area"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "white",
            children: "Directorate Report Download"
          })]
        }), blockSetting.indexOf('pending') !== -1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
          className: "nav-link",
          to: "/dashboarddeptuser/pendingsubschemedept/".concat(divisionid),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "sb-nav-link-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fas fa-chart-area"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "white",
            children: "Pending Sub-Scheme List"
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "sb-sidenav-footer",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "small",
        children: "Logged in as:"
      }), "".concat(name, " User")]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidenav_Dept_User);

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

/***/ }),

/***/ "./resources/js/components/store/setting-action.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/store/setting-action.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "divisionOutcomeEntry": () => (/* binding */ divisionOutcomeEntry),
/* harmony export */   "getOutcomeEntrySetting": () => (/* binding */ getOutcomeEntrySetting)
/* harmony export */ });
/* harmony import */ var _settingSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settingSlice */ "./resources/js/components/store/settingSlice.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configuration */ "./resources/js/components/configuration.js");
/* harmony import */ var _errorSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorSlice */ "./resources/js/components/store/errorSlice.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var divisionOutcomeEntry = function divisionOutcomeEntry(id, entry, pending) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "budget_entry_setting/update"), {
      method: 'post',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token')),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        division_id: id,
        entry: entry,
        pending: pending
      })
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_settingSlice__WEBPACK_IMPORTED_MODULE_0__.settingActions.setDivisionId({
          divisionId: ''
        }));
        dispatch(_settingSlice__WEBPACK_IMPORTED_MODULE_0__.settingActions.setBlockSetting({
          blockSetting: []
        }));
        dispatch(_settingSlice__WEBPACK_IMPORTED_MODULE_0__.settingActions.setOpenBudgetEditSuccess({
          openBudgetEditSuccess: true
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_settingSlice__WEBPACK_IMPORTED_MODULE_0__.settingActions.setDivisionId({
          divisionId: ''
        }));
        dispatch(_settingSlice__WEBPACK_IMPORTED_MODULE_0__.settingActions.setBlockSetting({
          blockSetting: []
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_settingSlice__WEBPACK_IMPORTED_MODULE_0__.settingActions.setDivisionId({
        divisionId: ''
      }));
      dispatch(_settingSlice__WEBPACK_IMPORTED_MODULE_0__.settingActions.setBlockSetting({
        blockSetting: []
      }));
    });
  };
};
var getOutcomeEntrySetting = function getOutcomeEntrySetting(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "budget_entry_setting/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        var b = [];

        if (res.div_budget_entry_settings.entry === true) {
          b = [].concat(_toConsumableArray(b), ['entry']);
        }

        if (res.div_budget_entry_settings.pending === true) {
          b = [].concat(_toConsumableArray(b), ['pending']);
        }

        dispatch(_settingSlice__WEBPACK_IMPORTED_MODULE_0__.settingActions.setBlockSetting({
          blockSetting: b
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

/***/ "./resources/js/components/store/signin-action.js":
/*!********************************************************!*\
  !*** ./resources/js/components/store/signin-action.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendSigninData": () => (/* binding */ sendSigninData),
/* harmony export */   "logout": () => (/* binding */ logout)
/* harmony export */ });
/* harmony import */ var _signinSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signinSlice */ "./resources/js/components/store/signinSlice.js");
/* harmony import */ var _userSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userSlice */ "./resources/js/components/store/userSlice.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ "./resources/js/components/configuration.js");
/* harmony import */ var _errorSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errorSlice */ "./resources/js/components/store/errorSlice.js");




var sendSigninData = function sendSigninData(email, password) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "login"), {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        password_confirmation: password
      })
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        localStorage.setItem('access_token', res.access_token);
        dispatch(_userSlice__WEBPACK_IMPORTED_MODULE_1__.userActions.setEmail({
          email: res.user.email
        }));
        dispatch(_userSlice__WEBPACK_IMPORTED_MODULE_1__.userActions.setName({
          name: res.user.name
        }));
        dispatch(_userSlice__WEBPACK_IMPORTED_MODULE_1__.userActions.setDepartmentId({
          departmentId: res.user.departmentId
        }));
        dispatch(_userSlice__WEBPACK_IMPORTED_MODULE_1__.userActions.setDivisionId({
          divisionId: res.user.divisionId
        }));
        dispatch(_userSlice__WEBPACK_IMPORTED_MODULE_1__.userActions.setRole({
          role: res.user.role
        }));
        dispatch(_userSlice__WEBPACK_IMPORTED_MODULE_1__.userActions.setId({
          id: res.user.id
        }));
        dispatch(_userSlice__WEBPACK_IMPORTED_MODULE_1__.userActions.setSignedIn({
          isSignedIn: true
        }));
        dispatch(_signinSlice__WEBPACK_IMPORTED_MODULE_0__.signinActions.setEmail({
          email: ''
        }));
        dispatch(_signinSlice__WEBPACK_IMPORTED_MODULE_0__.signinActions.setPassword({
          password: ''
        }));
        dispatch(_signinSlice__WEBPACK_IMPORTED_MODULE_0__.signinActions.setMessage({
          message: 'You have been successfuly Signed In'
        }));
      } else {
        dispatch(_signinSlice__WEBPACK_IMPORTED_MODULE_0__.signinActions.setEmail({
          email: ''
        }));
        dispatch(_signinSlice__WEBPACK_IMPORTED_MODULE_0__.signinActions.setPassword({
          password: ''
        }));
        dispatch(_signinSlice__WEBPACK_IMPORTED_MODULE_0__.signinActions.setMessage({
          message: res.message
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_3__.errorActions.setError({
        error: true
      }));
      dispatch(_signinSlice__WEBPACK_IMPORTED_MODULE_0__.signinActions.setEmail({
        email: ''
      }));
      dispatch(_signinSlice__WEBPACK_IMPORTED_MODULE_0__.signinActions.setPassword({
        password: ''
      }));
      dispatch(_signinSlice__WEBPACK_IMPORTED_MODULE_0__.signinActions.setMessage({
        message: res.message
      }));
    });
  };
};
var logout = function logout() {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_2__.laravel_api, "signout"), {
      method: 'post',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token')),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        localStorage.setItem('access_token', '');
        dispatch(_userSlice__WEBPACK_IMPORTED_MODULE_1__.userActions.setEmail({
          email: ''
        }));
        dispatch(_userSlice__WEBPACK_IMPORTED_MODULE_1__.userActions.setName({
          name: ''
        }));
        dispatch(_userSlice__WEBPACK_IMPORTED_MODULE_1__.userActions.setDepartmentId({
          departmentId: ''
        }));
        dispatch(_userSlice__WEBPACK_IMPORTED_MODULE_1__.userActions.setDivisionId({
          divisionId: ''
        }));
        dispatch(_userSlice__WEBPACK_IMPORTED_MODULE_1__.userActions.setRole({
          role: ''
        }));
        dispatch(_userSlice__WEBPACK_IMPORTED_MODULE_1__.userActions.setId({
          id: ''
        }));
        dispatch(_userSlice__WEBPACK_IMPORTED_MODULE_1__.userActions.setSignedIn({
          isSignedIn: false
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_3__.errorActions.setError({
        error: true
      }));
      localStorage.setItem('access_token', '');
      dispatch(_userSlice__WEBPACK_IMPORTED_MODULE_1__.userActions.setEmail({
        email: ''
      }));
      dispatch(_userSlice__WEBPACK_IMPORTED_MODULE_1__.userActions.setName({
        name: ''
      }));
      dispatch(_userSlice__WEBPACK_IMPORTED_MODULE_1__.userActions.setDepartmentId({
        departmentId: ''
      }));
      dispatch(_userSlice__WEBPACK_IMPORTED_MODULE_1__.userActions.setDivisionId({
        divisionId: ''
      }));
      dispatch(_userSlice__WEBPACK_IMPORTED_MODULE_1__.userActions.setRole({
        role: ''
      }));
      dispatch(_userSlice__WEBPACK_IMPORTED_MODULE_1__.userActions.setId({
        id: ''
      }));
      dispatch(_userSlice__WEBPACK_IMPORTED_MODULE_1__.userActions.setSignedIn({
        isSignedIn: false
      }));
    });
  };
};

/***/ })

}]);