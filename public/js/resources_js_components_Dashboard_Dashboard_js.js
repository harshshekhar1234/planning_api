"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_Dashboard_js"],{

/***/ "./resources/js/components/Dashboard/Dashboard.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Dashboard/Dashboard.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./resources/js/components/Dashboard/Navbar.js");
/* harmony import */ var _Sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidenav */ "./resources/js/components/Dashboard/Sidenav.js");
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











var Dashboard = function Dashboard() {
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

    if (role !== 'admin') {
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
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Sidenav__WEBPACK_IMPORTED_MODULE_2__["default"], {
          clickHandler: clickHandler
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        id: "layoutSidenav_content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Outlet, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {})]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

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

/***/ "./resources/js/components/Dashboard/Sidenav.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Dashboard/Sidenav.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configuration */ "./resources/js/components/configuration.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function Sidenav(_ref) {
  var clickHandler = _ref.clickHandler;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("nav", {
    className: "sb-sidenav accordion sb-sidenav-dark",
    id: "sidenavAccordion",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "sb-sidenav-menu",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "nav",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "sb-sidenav-menu-heading",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "white",
            children: "Core"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
          className: "nav-link",
          to: "/dashboard/main",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "sb-nav-link-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: "fas fa-tachometer-alt"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "white",
            children: "Dashboard"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
          className: "nav-link",
          to: "/dashboard/register",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "sb-nav-link-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: "fas fa-tachometer-alt"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "white",
            children: "Register"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
          className: "nav-link",
          to: "/dashboard/users",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "sb-nav-link-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: "fas fa-tachometer-alt"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "white",
            children: "Users"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
          className: "nav-link",
          to: "/dashboard/setting",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "sb-nav-link-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: "fas fa-tachometer-alt"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "white",
            children: "Settings"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "sb-sidenav-menu-heading",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "white",
            children: "Outcome Budget"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
          className: "nav-link",
          to: "/dashboard/departmentsentry",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "sb-nav-link-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: "fas fa-chart-area"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "white",
            children: "Create Indicators and Targets"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
          className: "nav-link",
          target: "_blank",
          href: "".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.doc_url, "usermanual.pdf"),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "sb-nav-link-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: "fas fa-download"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "white",
            children: "User Manual"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "sb-sidenav-menu-heading",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "white",
            children: "Reports"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
          className: "nav-link collapsed",
          href: "#",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#collapseReport",
          "aria-expanded": "false",
          "aria-controls": "collapseReport",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "sb-nav-link-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: "fas fa-columns"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "white",
            children: "Reports"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "sb-sidenav-collapse-arrow",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: "fas fa-angle-down"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "collapse",
          id: "collapseReport",
          "aria-labelledby": "headingOne",
          "data-bs-parent": "#sidenavAccordion",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("nav", {
            className: "sb-sidenav-menu-nested nav",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
              className: "nav-link",
              to: "/dashboard/reportsocialcategory",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "sb-nav-link-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "fas fa-chart-area"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "white",
                children: "Financial Reports"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
              className: "nav-link",
              to: "/dashboard/departments",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "sb-nav-link-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "fas fa-chart-area"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "white",
                children: "Schemes Report"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
              className: "nav-link",
              to: "/dashboard/divisionreportdownload",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "sb-nav-link-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "fas fa-chart-area"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "white",
                children: "Directorate Report Download"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
              className: "nav-link",
              to: "/dashboard/quaterwisereport",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "sb-nav-link-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "fas fa-chart-area"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "white",
                children: "Quater Wise Report"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
              className: "nav-link",
              to: "/dashboard/aorreportdivisionlist",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "sb-nav-link-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "fas fa-chart-area"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "white",
                children: "On Demand Report"
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "sb-sidenav-menu-heading",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "white",
            children: "Outcome Budget 2023-24"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
          className: "nav-link",
          to: "/dashboard/divisionmigrationsummary",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "sb-nav-link-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: "fas fa-chart-area"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "white",
            children: "Summary"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
          className: "nav-link",
          to: "/dashboard/migrationdepartments",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "sb-nav-link-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: "fas fa-chart-area"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "white",
            children: "Schemes Report"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
          className: "nav-link",
          to: "/dashboard/migrationdivisionreportdownload",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "sb-nav-link-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: "fas fa-chart-area"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "white",
            children: "Directorate Report Download"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
          className: "nav-link",
          to: "/dashboard/divisionmigrationinternal",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "sb-nav-link-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: "fas fa-chart-area"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "white",
            children: "Directorate Internal Scheme"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
          className: "nav-link",
          to: "/dashboard/migrationdivisionextrascheme",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "sb-nav-link-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: "fas fa-chart-area"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "white",
            children: "Directorate Internal Extra Scheme"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
          className: "nav-link",
          to: "/dashboard/migrationdivisionextrasubscheme",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "sb-nav-link-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: "fas fa-chart-area"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "white",
            children: "Directorate Internal Extra Sub-Scheme"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
          className: "nav-link",
          to: "/dashboard/divisionpendingschemedept",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "sb-nav-link-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: "fas fa-chart-area"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "white",
            children: "Directorate Pending Scheme"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
          className: "nav-link",
          to: "/dashboard/divisionpendingsubschemedept",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "sb-nav-link-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: "fas fa-chart-area"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "white",
            children: "Directorate Pending Sub-Scheme"
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "sb-sidenav-footer",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "small",
        children: "Logged in as:"
      }), "Admin"]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidenav);

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