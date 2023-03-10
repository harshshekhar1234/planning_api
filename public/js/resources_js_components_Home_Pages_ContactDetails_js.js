"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Home_Pages_ContactDetails_js"],{

/***/ "./resources/js/components/Home/Pages/ContactDetails.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/Home/Pages/ContactDetails.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configuration */ "./resources/js/components/configuration.js");
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contacts */ "./resources/js/components/contacts.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







function ContactDetails() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.scrollTo(0, 0);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
      className: "tc b",
      children: "Contact Details"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("main", {
      className: "flex flex-wrap justify-center",
      children: _contacts__WEBPACK_IMPORTED_MODULE_2__.contacts.map(function (contact) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("article", {
          className: "dt mw6 w-100 bb b--black-05 pb2 mt4 ml5",
          href: "#0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "dtc w2 w3-ns v-mid",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
              className: "".concat(contact.img, " b--black-10 db br-100 w2 w3-ns h2 h3-ns")
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "dtc v-mid pl3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
              className: "f6 f5-ns fw6 lh-title measure-narrow black mv0",
              children: contact.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              href: contact.website,
              target: "_blank",
              className: "f6 fw4 mt0 mb0 black-60",
              children: contact.website
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "dtc v-mid",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              href: contact.link,
              target: "_blank",
              className: "w-100 tr",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                className: "f6 button-reset bg-dark-green ba b--black-10 dim pointer pv1 white br4",
                type: "submit",
                children: "Contact"
              })
            })
          })]
        }, contact.id);
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactDetails);

/***/ }),

/***/ "./resources/js/components/contacts.js":
/*!*********************************************!*\
  !*** ./resources/js/components/contacts.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contacts": () => (/* binding */ contacts)
/* harmony export */ });
var contacts = [{
  id: 1,
  name: 'Department of Agriculture, Animal Husbandry & Co-operative',
  website: 'https://www.jharkhand.gov.in/agriculture',
  img: 'fa fa-leaf',
  link: 'https://www.jharkhand.gov.in/PDepartment/WebDirectory?department=d5cbf528f740b502b79241ff873ce6c5'
}, {
  id: 2,
  name: 'Department of Food, Public Distribution & Consumer Affairs',
  website: 'https://www.jharkhand.gov.in/food',
  img: 'fa fa-square',
  link: 'https://www.jharkhand.gov.in/PDepartment/WebDirectory?department=f6cce92549c349a9953bd877f4860f32'
}, {
  id: 3,
  name: 'Department of Higher and Technical Education',
  website: 'https://www.jharkhand.gov.in/hte',
  img: 'fa fa-university',
  link: 'https://www.jharkhand.gov.in/PDepartment/WebDirectoryHTE?department=e66e21ac2b0dbf5f42a77ae8373e789e'
}, {
  id: 4,
  name: 'Department of Scheduled Tribe, Scheduled Caste, Minority and Backward Class Welfare',
  website: 'https://www.jharkhand.gov.in/welfare',
  img: 'fa fa-user-secret',
  link: 'https://www.jharkhand.gov.in/PDepartment/WebDirectory?department=9b4444362f0552972f13bf5536751e75'
}, {
  id: 5,
  name: 'Department of Women, Child Development & Social Security',
  website: 'https://www.jharkhand.gov.in/wcd',
  img: 'fa fa-cogs',
  link: 'https://www.jharkhand.gov.in/PDepartment/WebDirectory?department=01f00daeed1418fb5cf6d8988d8a8fab'
}, {
  id: 6,
  name: 'Department of Forest, Environment & Climate Change',
  website: 'https://www.jharkhand.gov.in/forest',
  img: 'fa fa-tree',
  link: 'https://www.jharkhand.gov.in/PDepartment/WebDirectory?department=0f9d76428568fcad70cb130b20f4638e'
}, {
  id: 7,
  name: 'Department of Health, Medical Education & Family Welfare',
  website: 'https://www.jharkhand.gov.in/health',
  img: 'fa fa-medkit',
  link: 'https://www.jharkhand.gov.in/PDepartment/WebDirectory?department=d5e4effc166af7f050089416e7e53b57'
}, {
  id: 8,
  name: 'Department of School Education & Literacy Development',
  website: 'https://www.jharkhand.gov.in/school',
  img: 'fa fa-laptop',
  link: 'https://www.jharkhand.gov.in/PDepartment/WebDirectory?department=c2921c13fa62065c8d28c85aae51497e'
}, {
  id: 9,
  name: 'Department of Urban Development & Housing',
  website: 'https://www.jharkhand.gov.in/urban',
  img: 'fa fa-industry',
  link: 'https://www.jharkhand.gov.in/PDepartment/WebDirectory?department=299be138d615ca9d4dd0d382a642e96c'
}, {
  id: 10,
  name: 'Department of Drinking Water and Sanitation',
  website: 'https://www.jharkhand.gov.in/drinking-water',
  img: 'fa fa-tint',
  link: 'https://www.jharkhand.gov.in/PDepartment/WebDirectory?department=0d86b2d838d51e9ae5d1720054578f16'
}, {
  id: 11,
  name: 'Department of Rural Works',
  website: 'https://www.jharkhand.gov.in/rwd',
  img: 'fa fa-home',
  link: 'https://www.jharkhand.gov.in/PDepartment/WebDirectory?department=7bdf081dc5e322c3da257e565ba540e5'
}, {
  id: 13,
  name: 'Department of Panchayati Raj',
  website: 'https://www.jharkhand.gov.in/panchayatiraj',
  img: 'fa fa-bicycle',
  link: 'https://www.jharkhand.gov.in/PDepartment/WebDirectory?department=8cc054261ce69fc6f8fa34acf567ed34'
}, {
  id: 12,
  name: 'Department of Rural Development',
  website: 'https://www.jharkhand.gov.in/rdd',
  img: 'fa fa-road',
  link: 'https://www.jharkhand.gov.in/PDepartment/WebDirectory?department=cb756d3448ad467033846e84017824f3'
}];

/***/ })

}]);