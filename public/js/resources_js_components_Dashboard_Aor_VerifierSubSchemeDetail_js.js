"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_Aor_VerifierSubSchemeDetail_js"],{

/***/ "./node_modules/@mui/base/BackdropUnstyled/BackdropUnstyled.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@mui/base/BackdropUnstyled/BackdropUnstyled.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _composeClasses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../composeClasses */ "./node_modules/@mui/base/composeClasses/composeClasses.js");
/* harmony import */ var _utils_isHostComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/isHostComponent */ "./node_modules/@mui/base/utils/isHostComponent.js");
/* harmony import */ var _backdropUnstyledClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./backdropUnstyledClasses */ "./node_modules/@mui/base/BackdropUnstyled/backdropUnstyledClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["classes", "className", "invisible", "component", "components", "componentsProps", "theme"];








const useUtilityClasses = ownerState => {
  const {
    classes,
    invisible
  } = ownerState;
  const slots = {
    root: ['root', invisible && 'invisible']
  };
  return (0,_composeClasses__WEBPACK_IMPORTED_MODULE_5__["default"])(slots, _backdropUnstyledClasses__WEBPACK_IMPORTED_MODULE_6__.getBackdropUtilityClass, classes);
};

const BackdropUnstyled = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function BackdropUnstyled(props, ref) {
  const {
    classes: classesProp,
    className,
    invisible = false,
    component = 'div',
    components = {},
    componentsProps = {},

    /* eslint-disable react/prop-types */
    theme
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    classes: classesProp,
    invisible
  });

  const classes = useUtilityClasses(ownerState);
  const Root = components.Root || component;
  const rootProps = componentsProps.root || {};
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Root, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-hidden": true
  }, rootProps, !(0,_utils_isHostComponent__WEBPACK_IMPORTED_MODULE_7__["default"])(Root) && {
    as: component,
    ownerState: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownerState, rootProps.ownerState),
    theme
  }, {
    ref: ref
  }, other, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, rootProps.className, className)
  }));
});
 true ? BackdropUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().elementType),

  /**
   * The components used for each slot inside the Backdrop.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: prop_types__WEBPACK_IMPORTED_MODULE_8___default().shape({
    Root: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().elementType)
  }),

  /**
   * The props used for each slot inside the Backdrop.
   * @default {}
   */
  componentsProps: prop_types__WEBPACK_IMPORTED_MODULE_8___default().shape({
    root: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object)
  }),

  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackdropUnstyled);

/***/ }),

/***/ "./node_modules/@mui/base/BackdropUnstyled/backdropUnstyledClasses.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@mui/base/BackdropUnstyled/backdropUnstyledClasses.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBackdropUtilityClass": () => (/* binding */ getBackdropUtilityClass),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generateUtilityClasses */ "./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js");
/* harmony import */ var _generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generateUtilityClass */ "./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");


function getBackdropUtilityClass(slot) {
  return (0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiBackdrop', slot);
}
const backdropUnstyledClasses = (0,_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiBackdrop', ['root', 'invisible']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backdropUnstyledClasses);

/***/ }),

/***/ "./node_modules/@mui/base/ModalUnstyled/ModalManager.js":
/*!**************************************************************!*\
  !*** ./node_modules/@mui/base/ModalUnstyled/ModalManager.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ariaHidden": () => (/* binding */ ariaHidden),
/* harmony export */   "default": () => (/* binding */ ModalManager)
/* harmony export */ });
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/ownerDocument.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/ownerWindow.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/getScrollbarSize.js");


// Is a vertical scrollbar displayed?
function isOverflowing(container) {
  const doc = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_0__["default"])(container);

  if (doc.body === container) {
    return (0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__["default"])(container).innerWidth > doc.documentElement.clientWidth;
  }

  return container.scrollHeight > container.clientHeight;
}

function ariaHidden(element, show) {
  if (show) {
    element.setAttribute('aria-hidden', 'true');
  } else {
    element.removeAttribute('aria-hidden');
  }
}

function getPaddingRight(element) {
  return parseInt((0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__["default"])(element).getComputedStyle(element).paddingRight, 10) || 0;
}

function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude = [], show) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  const blacklistTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE'];
  [].forEach.call(container.children, element => {
    if (blacklist.indexOf(element) === -1 && blacklistTagNames.indexOf(element.tagName) === -1) {
      ariaHidden(element, show);
    }
  });
}

function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }

    return false;
  });
  return idx;
}

function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container = containerInfo.container;

  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      // Compute the size before applying overflow hidden to avoid any scroll jumps.
      const scrollbarSize = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_mui_utils__WEBPACK_IMPORTED_MODULE_0__["default"])(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: 'padding-right',
        el: container
      }); // Use computed style, here to get the real padding to add our scrollbar width.

      container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`; // .mui-fixed is a global helper.

      const fixedElements = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_0__["default"])(container).querySelectorAll('.mui-fixed');
      [].forEach.call(fixedElements, element => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: 'padding-right',
          el: element
        });
        element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
      });
    } // Improve Gatsby support
    // https://css-tricks.com/snippets/css/force-vertical-scrollbar/


    const parent = container.parentElement;
    const containerWindow = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__["default"])(container);
    const scrollContainer = (parent == null ? void 0 : parent.nodeName) === 'HTML' && containerWindow.getComputedStyle(parent).overflowY === 'scroll' ? parent : container; // Block the scroll even if no scrollbar is visible to account for mobile keyboard
    // screensize shrink.

    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: 'overflow',
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowX,
      property: 'overflow-x',
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowY,
      property: 'overflow-y',
      el: scrollContainer
    });
    scrollContainer.style.overflow = 'hidden';
  }

  const restore = () => {
    restoreStyle.forEach(({
      value,
      el,
      property
    }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };

  return restore;
}

function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, element => {
    if (element.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}

/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */
class ModalManager {
  constructor() {
    this.containers = void 0;
    this.modals = void 0;
    this.modals = [];
    this.containers = [];
  }

  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);

    if (modalIndex !== -1) {
      return modalIndex;
    }

    modalIndex = this.modals.length;
    this.modals.push(modal); // If the modal we are adding is already in the DOM.

    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }

    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
    const containerIndex = findIndexOf(this.containers, item => item.container === container);

    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }

    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    });
    return modalIndex;
  }

  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];

    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }

  remove(modal) {
    const modalIndex = this.modals.indexOf(modal);

    if (modalIndex === -1) {
      return modalIndex;
    }

    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1); // If that was the last modal in a container, clean up the container.

    if (containerInfo.modals.length === 0) {
      // The modal might be closed before it had the chance to be mounted in the DOM.
      if (containerInfo.restore) {
        containerInfo.restore();
      }

      if (modal.modalRef) {
        // In case the modal wasn't in the DOM yet.
        ariaHidden(modal.modalRef, true);
      }

      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      // Otherwise make sure the next top modal is visible to a screen reader.
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1]; // as soon as a modal is adding its modalRef is undefined. it can't set
      // aria-hidden because the dom element doesn't exist either
      // when modal was unmounted before modalRef gets null

      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }

    return modalIndex;
  }

  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }

}

/***/ }),

/***/ "./node_modules/@mui/base/ModalUnstyled/ModalUnstyled.js":
/*!***************************************************************!*\
  !*** ./node_modules/@mui/base/ModalUnstyled/ModalUnstyled.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/useForkRef.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/ownerDocument.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/useEventCallback.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/createChainedFunction.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/elementAcceptingRef.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/HTMLElementType.js");
/* harmony import */ var _composeClasses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../composeClasses */ "./node_modules/@mui/base/composeClasses/composeClasses.js");
/* harmony import */ var _utils_isHostComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/isHostComponent */ "./node_modules/@mui/base/utils/isHostComponent.js");
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Portal */ "./node_modules/@mui/base/Portal/Portal.js");
/* harmony import */ var _ModalManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ModalManager */ "./node_modules/@mui/base/ModalUnstyled/ModalManager.js");
/* harmony import */ var _Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Unstable_TrapFocus */ "./node_modules/@mui/base/Unstable_TrapFocus/Unstable_TrapFocus.js");
/* harmony import */ var _modalUnstyledClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modalUnstyledClasses */ "./node_modules/@mui/base/ModalUnstyled/modalUnstyledClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["BackdropComponent", "BackdropProps", "children", "classes", "className", "closeAfterTransition", "component", "components", "componentsProps", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "theme", "onTransitionEnter", "onTransitionExited"];













const useUtilityClasses = ownerState => {
  const {
    open,
    exited,
    classes
  } = ownerState;
  const slots = {
    root: ['root', !open && exited && 'hidden']
  };
  return (0,_composeClasses__WEBPACK_IMPORTED_MODULE_5__["default"])(slots, _modalUnstyledClasses__WEBPACK_IMPORTED_MODULE_6__.getModalUtilityClass, classes);
};

function getContainer(container) {
  return typeof container === 'function' ? container() : container;
}

function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty('in') : false;
} // A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.


const defaultManager = new _ModalManager__WEBPACK_IMPORTED_MODULE_7__["default"]();
/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/api/dialog/)
 * - [Drawer](/api/drawer/)
 * - [Menu](/api/menu/)
 * - [Popover](/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */

const ModalUnstyled = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function ModalUnstyled(props, ref) {
  const {
    BackdropComponent,
    BackdropProps,
    children,
    classes: classesProp,
    className,
    closeAfterTransition = false,
    component = 'div',
    components = {},
    componentsProps = {},
    container,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    // private
    // eslint-disable-next-line react/prop-types
    manager = defaultManager,
    onBackdropClick,
    onClose,
    onKeyDown,
    open,

    /* eslint-disable react/prop-types */
    theme,
    onTransitionEnter,
    onTransitionExited
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  const [exited, setExited] = react__WEBPACK_IMPORTED_MODULE_2__.useState(true);
  const modal = react__WEBPACK_IMPORTED_MODULE_2__.useRef({});
  const mountNodeRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  const modalRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  const handleRef = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_8__["default"])(modalRef, ref);
  const hasTransition = getHasTransition(props);

  const getDoc = () => (0,_mui_utils__WEBPACK_IMPORTED_MODULE_9__["default"])(mountNodeRef.current);

  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };

  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    }); // Fix a bug on Chrome where the scroll isn't initially 0.

    modalRef.current.scrollTop = 0;
  };

  const handleOpen = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_10__["default"])(() => {
    const resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer); // The element was already mounted.

    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(() => manager.isTopModal(getModal()), [manager]);
  const handlePortalRef = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_10__["default"])(node => {
    mountNodeRef.current = node;

    if (!node) {
      return;
    }

    if (open && isTopModal()) {
      handleMounted();
    } else {
      (0,_ModalManager__WEBPACK_IMPORTED_MODULE_7__.ariaHidden)(modalRef.current, true);
    }
  });
  const handleClose = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(() => {
    manager.remove(getModal());
  }, [manager]);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    classes: classesProp,
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    exited,
    hideBackdrop,
    keepMounted
  });

  const classes = useUtilityClasses(ownerState);

  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }

  const handleEnter = () => {
    setExited(false);

    if (onTransitionEnter) {
      onTransitionEnter();
    }
  };

  const handleExited = () => {
    setExited(true);

    if (onTransitionExited) {
      onTransitionExited();
    }

    if (closeAfterTransition) {
      handleClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (onClose) {
      onClose(event, 'backdropClick');
    }
  };

  const handleKeyDown = event => {
    if (onKeyDown) {
      onKeyDown(event);
    } // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviors like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.


    if (event.key !== 'Escape' || !isTopModal()) {
      return;
    }

    if (!disableEscapeKeyDown) {
      // Swallow the event, in case someone is listening for the escape key on the body.
      event.stopPropagation();

      if (onClose) {
        onClose(event, 'escapeKeyDown');
      }
    }
  };

  const childProps = {};

  if (children.props.tabIndex === undefined) {
    childProps.tabIndex = '-1';
  } // It's a Transition like component


  if (hasTransition) {
    childProps.onEnter = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_11__["default"])(handleEnter, children.props.onEnter);
    childProps.onExited = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_11__["default"])(handleExited, children.props.onExited);
  }

  const Root = components.Root || component;
  const rootProps = componentsProps.root || {};
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Portal__WEBPACK_IMPORTED_MODULE_12__["default"], {
    ref: handlePortalRef,
    container: container,
    disablePortal: disablePortal,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Root, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      role: "presentation"
    }, rootProps, !(0,_utils_isHostComponent__WEBPACK_IMPORTED_MODULE_13__["default"])(Root) && {
      as: component,
      ownerState: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownerState, rootProps.ownerState),
      theme
    }, other, {
      ref: handleRef,
      onKeyDown: handleKeyDown,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, rootProps.className, className),
      children: [!hideBackdrop && BackdropComponent ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(BackdropComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        open: open,
        onClick: handleBackdropClick
      }, BackdropProps)) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_14__["default"], {
        disableEnforceFocus: disableEnforceFocus,
        disableAutoFocus: disableAutoFocus,
        disableRestoreFocus: disableRestoreFocus,
        isEnabled: isTopModal,
        open: open,
        children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(children, childProps)
      })]
    }))
  });
});
 true ? ModalUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   */
  BackdropComponent: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().elementType),

  /**
   * Props applied to the [`BackdropUnstyled`](/api/backdrop-unstyled/) element.
   */
  BackdropProps: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object),

  /**
   * A single child content element.
   */
  children: _mui_utils__WEBPACK_IMPORTED_MODULE_16__["default"].isRequired,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().string),

  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().bool),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().elementType),

  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: prop_types__WEBPACK_IMPORTED_MODULE_15___default().shape({
    Root: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().elementType)
  }),

  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  componentsProps: prop_types__WEBPACK_IMPORTED_MODULE_15___default().shape({
    root: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object)
  }),

  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_15___default().oneOfType([_mui_utils__WEBPACK_IMPORTED_MODULE_17__["default"], (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func)]),

  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().bool),

  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().bool),

  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().bool),

  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().bool),

  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().bool),

  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().bool),

  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().bool),

  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().bool),

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),

  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),

  /**
   * @ignore
   */
  onKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),

  /**
   * If `true`, the component is shown.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().bool.isRequired)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalUnstyled);

/***/ }),

/***/ "./node_modules/@mui/base/ModalUnstyled/modalUnstyledClasses.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@mui/base/ModalUnstyled/modalUnstyledClasses.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getModalUtilityClass": () => (/* binding */ getModalUtilityClass),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generateUtilityClasses */ "./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js");
/* harmony import */ var _generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generateUtilityClass */ "./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");


function getModalUtilityClass(slot) {
  return (0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiModal', slot);
}
const modalUnstyledClasses = (0,_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiModal', ['root', 'hidden']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalUnstyledClasses);

/***/ }),

/***/ "./node_modules/@mui/base/Portal/Portal.js":
/*!*************************************************!*\
  !*** ./node_modules/@mui/base/Portal/Portal.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/useForkRef.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/useEnhancedEffect.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/setRef.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/HTMLElementType.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/exactProp.js");





function getContainer(container) {
  return typeof container === 'function' ? container() : container;
}
/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */


const Portal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Portal(props, ref) {
  const {
    children,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  const handleRef = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children) ? children.ref : null, ref);
  (0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  (0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
    if (mountNode && !disablePortal) {
      (0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(ref, mountNode);
      return () => {
        (0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(ref, null);
      };
    }

    return undefined;
  }, [ref, mountNode, disablePortal]);

  if (disablePortal) {
    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
        ref: handleRef
      });
    }

    return children;
  }

  return mountNode ? /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(children, mountNode) : mountNode;
});
 true ? Portal.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The children to render into the `container`.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node),

  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([_mui_utils__WEBPACK_IMPORTED_MODULE_6__["default"], (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)]),

  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool)
} : 0;

if (true) {
  // eslint-disable-next-line
  Portal['propTypes' + ''] = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_7__["default"])(Portal.propTypes);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portal);

/***/ }),

/***/ "./node_modules/@mui/base/Unstable_TrapFocus/Unstable_TrapFocus.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@mui/base/Unstable_TrapFocus/Unstable_TrapFocus.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/useForkRef.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/ownerDocument.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/elementAcceptingRef.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/exactProp.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* eslint-disable @typescript-eslint/naming-convention, consistent-return, jsx-a11y/no-noninteractive-tabindex */


 // Inspired by https://github.com/focus-trap/tabbable



const candidatesSelector = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'].join(',');

function getTabIndex(node) {
  const tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);

  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  } // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // https://bugs.chromium.org/p/chromium/issues/detail?id=661108&q=contenteditable%20tabindex&can=2
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
  //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
  //  yet they are still part of the regular tab order; in FF, they get a default
  //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
  //  order, consider their tab index to be 0.


  if (node.contentEditable === 'true' || (node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
    return 0;
  }

  return node.tabIndex;
}

function isNonTabbableRadio(node) {
  if (node.tagName !== 'INPUT' || node.type !== 'radio') {
    return false;
  }

  if (!node.name) {
    return false;
  }

  const getRadio = selector => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);

  let roving = getRadio(`[name="${node.name}"]:checked`);

  if (!roving) {
    roving = getRadio(`[name="${node.name}"]`);
  }

  return roving !== node;
}

function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || node.tagName === 'INPUT' && node.type === 'hidden' || isNonTabbableRadio(node)) {
    return false;
  }

  return true;
}

function defaultGetTabbable(root) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
    const nodeTabIndex = getTabIndex(node);

    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
      return;
    }

    if (nodeTabIndex === 0) {
      regularTabNodes.push(node);
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        tabIndex: nodeTabIndex,
        node
      });
    }
  });
  return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map(a => a.node).concat(regularTabNodes);
}

function defaultIsEnabled() {
  return true;
}
/**
 * Utility component that locks focus inside the component.
 */


function Unstable_TrapFocus(props) {
  const {
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open
  } = props;
  const ignoreNextEnforceFocus = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  const sentinelStart = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const sentinelEnd = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const nodeToRestore = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const reactFocusEventTarget = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null); // This variable is useful when disableAutoFocus is true.
  // It waits for the active element to move into the component to activate.

  const activated = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const rootRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const handleRef = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__["default"])(children.ref, rootRef);
  const lastKeydown = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }

    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }

    const doc = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__["default"])(rootRef.current);

    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute('tabIndex')) {
        if (true) {
          console.error(['MUI: The modal content node does not accept focus.', 'For the benefit of assistive technologies, ' + 'the tabIndex of the node is being set to "-1".'].join('\n'));
        }

        rootRef.current.setAttribute('tabIndex', -1);
      }

      if (activated.current) {
        rootRef.current.focus();
      }
    }

    return () => {
      // restoreLastFocus()
      if (!disableRestoreFocus) {
        // In IE11 it is possible for document.activeElement to be null resulting
        // in nodeToRestore.current being null.
        // Not all elements in IE11 have a focus method.
        // Once IE11 support is dropped the focus() call can be unconditional.
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }

        nodeToRestore.current = null;
      }
    }; // Missing `disableRestoreFocus` which is fine.
    // We don't support changing that prop on an open TrapFocus
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }

    const doc = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__["default"])(rootRef.current);

    const contain = nativeEvent => {
      const {
        current: rootElement
      } = rootRef; // Cleanup functions are executed lazily in React 17.
      // Contain can be called between the component being unmounted and its cleanup function being run.

      if (rootElement === null) {
        return;
      }

      if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }

      if (!rootElement.contains(doc.activeElement)) {
        // if the focus event is not coming from inside the children's react tree, reset the refs
        if (nativeEvent && reactFocusEventTarget.current !== nativeEvent.target || doc.activeElement !== reactFocusEventTarget.current) {
          reactFocusEventTarget.current = null;
        } else if (reactFocusEventTarget.current !== null) {
          return;
        }

        if (!activated.current) {
          return;
        }

        let tabbable = [];

        if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
          tabbable = getTabbable(rootRef.current);
        }

        if (tabbable.length > 0) {
          var _lastKeydown$current, _lastKeydown$current2;

          const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === 'Tab');
          const focusNext = tabbable[0];
          const focusPrevious = tabbable[tabbable.length - 1];

          if (isShiftTab) {
            focusPrevious.focus();
          } else {
            focusNext.focus();
          }
        } else {
          rootElement.focus();
        }
      }
    };

    const loopFocus = nativeEvent => {
      lastKeydown.current = nativeEvent;

      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== 'Tab') {
        return;
      } // Make sure the next tab starts from the right place.
      // doc.activeElement referes to the origin.


      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        // We need to ignore the next contain as
        // it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus.current = true;
        sentinelEnd.current.focus();
      }
    };

    doc.addEventListener('focusin', contain);
    doc.addEventListener('keydown', loopFocus, true); // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area.
    // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
    // Instead, we can look if the active element was restored on the BODY element.
    //
    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.

    const interval = setInterval(() => {
      if (doc.activeElement.tagName === 'BODY') {
        contain();
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener('focusin', contain);
      doc.removeEventListener('keydown', loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);

  const onFocus = event => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }

    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children.props.onFocus;

    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };

  const handleFocusSentinel = event => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }

    activated.current = true;
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      tabIndex: 0,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-test": "sentinelStart"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
      ref: handleRef,
      onFocus
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      tabIndex: 0,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-test": "sentinelEnd"
    })]
  });
}

 true ? Unstable_TrapFocus.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A single child content element.
   */
  children: _mui_utils__WEBPACK_IMPORTED_MODULE_4__["default"],

  /**
   * If `true`, the trap focus will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any trap focus children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the trap focus less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),

  /**
   * If `true`, the trap focus will not prevent focus from leaving the trap focus while open.
   *
   * Generally this should never be set to `true` as it makes the trap focus less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),

  /**
   * If `true`, the trap focus will not restore focus to previously focused element once
   * trap focus is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),

  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),

  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple trap focus mounted at the same time.
   * @default function defaultIsEnabled() {
   *   return true;
   * }
   */
  isEnabled: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),

  /**
   * If `true`, focus is locked.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool.isRequired)
} : 0;

if (true) {
  // eslint-disable-next-line
  Unstable_TrapFocus['propTypes' + ''] = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(Unstable_TrapFocus.propTypes);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Unstable_TrapFocus);

/***/ }),

/***/ "./node_modules/@mui/base/utils/isHostComponent.js":
/*!*********************************************************!*\
  !*** ./node_modules/@mui/base/utils/isHostComponent.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element) {
  return typeof element === 'string';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isHostComponent);

/***/ }),

/***/ "./node_modules/@mui/material/Backdrop/Backdrop.js":
/*!*********************************************************!*\
  !*** ./node_modules/@mui/material/Backdrop/Backdrop.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "backdropClasses": () => (/* binding */ backdropClasses),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/utils/isHostComponent.js");
/* harmony import */ var _mui_base_BackdropUnstyled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/base/BackdropUnstyled */ "./node_modules/@mui/base/BackdropUnstyled/backdropUnstyledClasses.js");
/* harmony import */ var _mui_base_BackdropUnstyled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/base/BackdropUnstyled */ "./node_modules/@mui/base/BackdropUnstyled/BackdropUnstyled.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Fade */ "./node_modules/@mui/material/Fade/Fade.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["children", "components", "componentsProps", "className", "invisible", "open", "transitionDuration", "TransitionComponent"];








const backdropClasses = _mui_base_BackdropUnstyled__WEBPACK_IMPORTED_MODULE_4__["default"];

const extendUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  return classes;
};

const BackdropRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_5__["default"])('div', {
  name: 'MuiBackdrop',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.invisible && styles.invisible];
  }
})(({
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  WebkitTapHighlightColor: 'transparent'
}, ownerState.invisible && {
  backgroundColor: 'transparent'
}));
const Backdrop = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Backdrop(inProps, ref) {
  var _componentsProps$root;

  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_6__["default"])({
    props: inProps,
    name: 'MuiBackdrop'
  });

  const {
    children,
    components = {},
    componentsProps = {},
    className,
    invisible = false,
    open,
    transitionDuration,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = _Fade__WEBPACK_IMPORTED_MODULE_7__["default"]
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    invisible
  });

  const classes = extendUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    in: open,
    timeout: transitionDuration
  }, other, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_base_BackdropUnstyled__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: className,
      invisible: invisible,
      components: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        Root: BackdropRoot
      }, components),
      componentsProps: {
        root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, componentsProps.root, (!components.Root || !(0,_mui_base__WEBPACK_IMPORTED_MODULE_9__["default"])(components.Root)) && {
          ownerState: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.ownerState)
        })
      },
      classes: classes,
      ref: ref,
      children: children
    })
  }));
});
 true ? Backdrop.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),

  /**
   * The components used for each slot inside the Backdrop.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: prop_types__WEBPACK_IMPORTED_MODULE_10___default().shape({
    Root: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().elementType)
  }),

  /**
   * The props used for each slot inside the Backdrop.
   * @default {}
   */
  componentsProps: prop_types__WEBPACK_IMPORTED_MODULE_10___default().shape({
    root: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object)
  }),

  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),

  /**
   * If `true`, the component is shown.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool.isRequired),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object)]),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_10___default().number), prop_types__WEBPACK_IMPORTED_MODULE_10___default().shape({
    appear: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number),
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number)
  })])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Backdrop);

/***/ }),

/***/ "./node_modules/@mui/material/Fade/Fade.js":
/*!*************************************************!*\
  !*** ./node_modules/@mui/material/Fade/Fade.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/elementAcceptingRef.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transitions/utils */ "./node_modules/@mui/material/transitions/utils.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@mui/material/utils/useForkRef.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];








const styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
/**
 * The Fade transition is used by the [Modal](/components/modal/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

const Fade = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Fade(props, ref) {
  const theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };

  const {
    addEndListener,
    appear = true,
    children,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = defaultTimeout,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = react_transition_group__WEBPACK_IMPORTED_MODULE_5__["default"]
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  const enableStrictModeCompat = true;
  const nodeRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  const foreignRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_6__["default"])(children.ref, ref);
  const handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_6__["default"])(nodeRef, foreignRef);

  const normalizedTransitionCallback = callback => maybeIsAppearing => {
    if (callback) {
      const node = nodeRef.current; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.

      if (maybeIsAppearing === undefined) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };

  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_7__.reflow)(node); // So the animation always start from the start.

    const transitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_7__.getTransitionProps)({
      style,
      timeout,
      easing
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback(node => {
    const transitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_7__.getTransitionProps)({
      style,
      timeout,
      easing
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);

    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);

  const handleAddEndListener = next => {
    if (addEndListener) {
      // Old call signature before `react-transition-group` implemented `nodeRef`
      addEndListener(nodeRef.current, next);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    appear: appear,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : undefined,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout
  }, other, {
    children: (state, childProps) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(children, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          opacity: 0,
          visibility: state === 'exited' && !inProp ? 'hidden' : undefined
        }, styles[state], style, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
 true ? Fade.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),

  /**
   * A single child content element.
   */
  children: _mui_utils__WEBPACK_IMPORTED_MODULE_9__["default"].isRequired,

  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default().shape({
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string)
  }), (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string)]),

  /**
   * If `true`, the component will transition in.
   */
  in: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),

  /**
   * @ignore
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * @ignore
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * @ignore
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * @ignore
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * @ignore
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * @ignore
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * @ignore
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_8___default().number), prop_types__WEBPACK_IMPORTED_MODULE_8___default().shape({
    appear: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number),
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number)
  })])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fade);

/***/ }),

/***/ "./node_modules/@mui/material/Modal/Modal.js":
/*!***************************************************!*\
  !*** ./node_modules/@mui/material/Modal/Modal.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modalClasses": () => (/* binding */ modalClasses),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/utils/isHostComponent.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/elementAcceptingRef.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/HTMLElementType.js");
/* harmony import */ var _mui_base_ModalUnstyled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/base/ModalUnstyled */ "./node_modules/@mui/base/ModalUnstyled/modalUnstyledClasses.js");
/* harmony import */ var _mui_base_ModalUnstyled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/base/ModalUnstyled */ "./node_modules/@mui/base/ModalUnstyled/ModalUnstyled.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Backdrop */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["BackdropComponent", "closeAfterTransition", "children", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted"];









const modalClasses = _mui_base_ModalUnstyled__WEBPACK_IMPORTED_MODULE_4__["default"];

const extendUtilityClasses = ownerState => {
  return ownerState.classes;
};

const ModalRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_5__["default"])('div', {
  name: 'MuiModal',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.open && ownerState.exited && styles.hidden];
  }
})(({
  theme,
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  position: 'fixed',
  zIndex: theme.zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !ownerState.open && ownerState.exited && {
  visibility: 'hidden'
}));
const ModalBackdrop = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_5__["default"])(_Backdrop__WEBPACK_IMPORTED_MODULE_6__["default"], {
  name: 'MuiModal',
  slot: 'Backdrop',
  overridesResolver: (props, styles) => {
    return styles.backdrop;
  }
})({
  zIndex: -1
});
/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/api/dialog/)
 * - [Drawer](/api/drawer/)
 * - [Menu](/api/menu/)
 * - [Popover](/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */

const Modal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Modal(inProps, ref) {
  var _componentsProps$root;

  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_7__["default"])({
    name: 'MuiModal',
    props: inProps
  });

  const {
    BackdropComponent = ModalBackdrop,
    closeAfterTransition = false,
    children,
    components = {},
    componentsProps = {},
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const [exited, setExited] = react__WEBPACK_IMPORTED_MODULE_2__.useState(true);
  const commonProps = {
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted
  };

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, commonProps, {
    exited
  });

  const classes = extendUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_base_ModalUnstyled__WEBPACK_IMPORTED_MODULE_8__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    components: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      Root: ModalRoot
    }, components),
    componentsProps: {
      root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, componentsProps.root, (!components.Root || !(0,_mui_base__WEBPACK_IMPORTED_MODULE_9__["default"])(components.Root)) && {
        ownerState: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.ownerState)
      })
    },
    BackdropComponent: BackdropComponent,
    onTransitionEnter: () => setExited(false),
    onTransitionExited: () => setExited(true),
    ref: ref
  }, other, {
    classes: classes
  }, commonProps, {
    children: children
  }));
});
 true ? Modal.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().elementType),

  /**
   * Props applied to the [`Backdrop`](/api/backdrop/) element.
   */
  BackdropProps: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),

  /**
   * A single child content element.
   */
  children: _mui_utils__WEBPACK_IMPORTED_MODULE_11__["default"].isRequired,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),

  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),

  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: prop_types__WEBPACK_IMPORTED_MODULE_10___default().shape({
    Root: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().elementType)
  }),

  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  componentsProps: prop_types__WEBPACK_IMPORTED_MODULE_10___default().shape({
    root: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object)
  }),

  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([_mui_utils__WEBPACK_IMPORTED_MODULE_12__["default"], (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func)]),

  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),

  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),

  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),

  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),

  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),

  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),

  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),

  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),

  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),

  /**
   * If `true`, the component is shown.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool.isRequired),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./node_modules/@mui/material/Typography/Typography.js":
/*!*************************************************************!*\
  !*** ./node_modules/@mui/material/Typography/Typography.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypographyRoot": () => (/* binding */ TypographyRoot),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/composeClasses/composeClasses.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@mui/material/utils/capitalize.js");
/* harmony import */ var _typographyClasses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./typographyClasses */ "./node_modules/@mui/material/Typography/typographyClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];











const useUtilityClasses = ownerState => {
  const {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, ownerState.align !== 'inherit' && `align${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(align)}`, gutterBottom && 'gutterBottom', noWrap && 'noWrap', paragraph && 'paragraph']
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_6__["default"])(slots, _typographyClasses__WEBPACK_IMPORTED_MODULE_7__.getTypographyUtilityClass, classes);
};

const TypographyRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_8__["default"])('span', {
  name: 'MuiTypography',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== 'inherit' && styles[`align${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
  }
})(({
  theme,
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  margin: 0
}, ownerState.variant && theme.typography[ownerState.variant], ownerState.align !== 'inherit' && {
  textAlign: ownerState.align
}, ownerState.noWrap && {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}, ownerState.gutterBottom && {
  marginBottom: '0.35em'
}, ownerState.paragraph && {
  marginBottom: 16
}));
const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  inherit: 'p'
}; // TODO v6: deprecate these color values in v5.x and remove the transformation in v6

const colorTransformations = {
  primary: 'primary.main',
  textPrimary: 'text.primary',
  secondary: 'secondary.main',
  textSecondary: 'text.secondary',
  error: 'error.main'
};

const transformDeprecatedColors = color => {
  return colorTransformations[color] || color;
};

const Typography = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Typography(inProps, ref) {
  const themeProps = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__["default"])({
    props: inProps,
    name: 'MuiTypography'
  });
  const color = transformDeprecatedColors(themeProps.color);
  const props = (0,_mui_system__WEBPACK_IMPORTED_MODULE_10__["default"])((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, themeProps, {
    color
  }));

  const {
    align = 'inherit',
    className,
    component,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = 'body1',
    variantMapping = defaultVariantMapping
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    align,
    color,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  });

  const Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TypographyRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    as: Component,
    ref: ref,
    ownerState: ownerState,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className)
  }, other));
});
 true ? Typography.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf(['center', 'inherit', 'justify', 'left', 'right']),

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().elementType),

  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_11___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object)]),

  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf(['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2']), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string)]),

  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typography);

/***/ }),

/***/ "./node_modules/@mui/material/Typography/typographyClasses.js":
/*!********************************************************************!*\
  !*** ./node_modules/@mui/material/Typography/typographyClasses.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTypographyUtilityClass": () => (/* binding */ getTypographyUtilityClass),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js");

function getTypographyUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiTypography', slot);
}
const typographyClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'inherit', 'button', 'caption', 'overline', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify', 'noWrap', 'gutterBottom', 'paragraph']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typographyClasses);

/***/ }),

/***/ "./node_modules/@mui/material/transitions/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/@mui/material/transitions/utils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reflow": () => (/* binding */ reflow),
/* harmony export */   "getTransitionProps": () => (/* binding */ getTransitionProps)
/* harmony export */ });
const reflow = node => node.scrollTop;
function getTransitionProps(props, options) {
  var _style$transitionDura, _style$transitionTimi;

  const {
    timeout,
    easing,
    style = {}
  } = props;
  return {
    duration: (_style$transitionDura = style.transitionDuration) != null ? _style$transitionDura : typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
    easing: (_style$transitionTimi = style.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing === 'object' ? easing[options.mode] : easing,
    delay: style.transitionDelay
  };
}

/***/ }),

/***/ "./node_modules/@mui/material/utils/useForkRef.js":
/*!********************************************************!*\
  !*** ./node_modules/@mui/material/utils/useForkRef.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/useForkRef.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mui_utils__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/@mui/utils/esm/HTMLElementType.js":
/*!********************************************************!*\
  !*** ./node_modules/@mui/utils/esm/HTMLElementType.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTMLElementType)
/* harmony export */ });
function HTMLElementType(props, propName, componentName, location, propFullName) {
  if (false) {}

  const propValue = props[propName];
  const safePropName = propFullName || propName;

  if (propValue == null) {
    return null;
  }

  if (propValue && propValue.nodeType !== 1) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an HTMLElement.`);
  }

  return null;
}

/***/ }),

/***/ "./node_modules/@mui/utils/esm/chainPropTypes.js":
/*!*******************************************************!*\
  !*** ./node_modules/@mui/utils/esm/chainPropTypes.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ chainPropTypes)
/* harmony export */ });
function chainPropTypes(propType1, propType2) {
  if (false) {}

  return function validate(...args) {
    return propType1(...args) || propType2(...args);
  };
}

/***/ }),

/***/ "./node_modules/@mui/utils/esm/createChainedFunction.js":
/*!**************************************************************!*\
  !*** ./node_modules/@mui/utils/esm/createChainedFunction.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createChainedFunction)
/* harmony export */ });
/**
 * Safe chained function.
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 */
function createChainedFunction(...funcs) {
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }

    return function chainedFunction(...args) {
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {});
}

/***/ }),

/***/ "./node_modules/@mui/utils/esm/elementAcceptingRef.js":
/*!************************************************************!*\
  !*** ./node_modules/@mui/utils/esm/elementAcceptingRef.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chainPropTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chainPropTypes */ "./node_modules/@mui/utils/esm/chainPropTypes.js");



function isClassComponent(elementType) {
  // elementType.prototype?.isReactComponent
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}

function acceptingRef(props, propName, componentName, location, propFullName) {
  const element = props[propName];
  const safePropName = propFullName || propName;

  if (element == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window === 'undefined') {
    return null;
  }

  let warningHint;
  const elementType = element.type;
  /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */

  if (typeof elementType === 'function' && !isClassComponent(elementType)) {
    warningHint = 'Did you accidentally use a plain function component for an element instead?';
  }

  if (warningHint !== undefined) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an element that can hold a ref. ${warningHint} ` + 'For more information see https://mui.com/r/caveat-with-refs-guide');
  }

  return null;
}

const elementAcceptingRef = (0,_chainPropTypes__WEBPACK_IMPORTED_MODULE_0__["default"])((prop_types__WEBPACK_IMPORTED_MODULE_1___default().element), acceptingRef);
elementAcceptingRef.isRequired = (0,_chainPropTypes__WEBPACK_IMPORTED_MODULE_0__["default"])((prop_types__WEBPACK_IMPORTED_MODULE_1___default().element.isRequired), acceptingRef);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elementAcceptingRef);

/***/ }),

/***/ "./node_modules/@mui/utils/esm/exactProp.js":
/*!**************************************************!*\
  !*** ./node_modules/@mui/utils/esm/exactProp.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ exactProp)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");

// This module is based on https://github.com/airbnb/prop-types-exact repository.
// However, in order to reduce the number of dependencies and to remove some extra safe checks
// the module was forked.
const specialProperty = 'exact-prop: \u200b';
function exactProp(propTypes) {
  if (false) {}

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, propTypes, {
    [specialProperty]: props => {
      const unsupportedProps = Object.keys(props).filter(prop => !propTypes.hasOwnProperty(prop));

      if (unsupportedProps.length > 0) {
        return new Error(`The following props are not supported: ${unsupportedProps.map(prop => `\`${prop}\``).join(', ')}. Please remove them.`);
      }

      return null;
    }
  });
}

/***/ }),

/***/ "./node_modules/@mui/utils/esm/getScrollbarSize.js":
/*!*********************************************************!*\
  !*** ./node_modules/@mui/utils/esm/getScrollbarSize.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getScrollbarSize)
/* harmony export */ });
// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
function getScrollbarSize(doc) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
  const documentWidth = doc.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}

/***/ }),

/***/ "./node_modules/@mui/utils/esm/ownerDocument.js":
/*!******************************************************!*\
  !*** ./node_modules/@mui/utils/esm/ownerDocument.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ownerDocument)
/* harmony export */ });
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/***/ }),

/***/ "./node_modules/@mui/utils/esm/ownerWindow.js":
/*!****************************************************!*\
  !*** ./node_modules/@mui/utils/esm/ownerWindow.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ownerWindow)
/* harmony export */ });
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ownerDocument */ "./node_modules/@mui/utils/esm/ownerDocument.js");

function ownerWindow(node) {
  const doc = (0,_ownerDocument__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  return doc.defaultView || window;
}

/***/ }),

/***/ "./node_modules/@mui/utils/esm/setRef.js":
/*!***********************************************!*\
  !*** ./node_modules/@mui/utils/esm/setRef.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setRef)
/* harmony export */ });
/**
 * TODO v5: consider making it private
 *
 * passes {value} to {ref}
 *
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
 * https://github.com/mui/material-ui/issues/13539
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 */
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

/***/ }),

/***/ "./node_modules/@mui/utils/esm/useEnhancedEffect.js":
/*!**********************************************************!*\
  !*** ./node_modules/@mui/utils/esm/useEnhancedEffect.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEnhancedEffect);

/***/ }),

/***/ "./node_modules/@mui/utils/esm/useEventCallback.js":
/*!*********************************************************!*\
  !*** ./node_modules/@mui/utils/esm/useEventCallback.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useEventCallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEnhancedEffect */ "./node_modules/@mui/utils/esm/useEnhancedEffect.js");


/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */

function useEventCallback(fn) {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(fn);
  (0,_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(() => {
    ref.current = fn;
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...args) => // @ts-expect-error hide `this`
  // tslint:disable-next-line:ban-comma-operator
  (0, ref.current)(...args), []);
}

/***/ }),

/***/ "./node_modules/@mui/utils/esm/useForkRef.js":
/*!***************************************************!*\
  !*** ./node_modules/@mui/utils/esm/useForkRef.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useForkRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _setRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setRef */ "./node_modules/@mui/utils/esm/setRef.js");


function useForkRef(refA, refB) {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior.
   */
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }

    return refValue => {
      (0,_setRef__WEBPACK_IMPORTED_MODULE_1__["default"])(refA, refValue);
      (0,_setRef__WEBPACK_IMPORTED_MODULE_1__["default"])(refB, refValue);
    };
  }, [refA, refB]);
}

/***/ }),

/***/ "./resources/js/components/Dashboard/Aor_VerifierSubSchemeDetail.js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Aor_VerifierSubSchemeDetail.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _store_subschemes_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/subschemes-actions */ "./resources/js/components/store/subschemes-actions.js");
/* harmony import */ var _store_departmentVerifier_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/departmentVerifier-actions */ "./resources/js/components/store/departmentVerifier-actions.js");
/* harmony import */ var _store_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/departmentVerifierSlice */ "./resources/js/components/store/departmentVerifierSlice.js");
/* harmony import */ var _store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/schemesSlice */ "./resources/js/components/store/schemesSlice.js");
/* harmony import */ var _store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/subschemesSlice */ "./resources/js/components/store/subschemesSlice.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Modal */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

function AorVerifierSubSchemeDetail() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useParams)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  var report = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.subschemes.report;
  });
  var subschemename = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.subschemes.subschemename;
  });
  var subschemecode = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.subschemes.subschemecode;
  });
  var schemeStateName = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.schemes.schemeStateName;
  });
  var schemeCenterName = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.schemes.schemeCenterName;
  });
  var schemeCenterCode = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.schemes.schemeCenterCode;
  });
  var schemeStateCode = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.schemes.schemeStateCode;
  });
  var demand_no = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.subschemes.demand_no;
  });
  var department_name = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.subschemes.department_name;
  });
  var division_name = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.subschemes.division_name;
  });
  var sanction = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.subschemes.sanction;
  });
  var allotment = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.subschemes.allotment;
  });
  var expenditure = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.subschemes.expenditure;
  });
  var updateApprove = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.verifier.updateApprove;
  });
  var updateReview = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.verifier.updateReview;
  });
  var comment = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.verifier.comment;
  });
  var fromDate = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.verifier.fromDate;
  });
  var toDate = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.verifier.toDate;
  });
  var entrymessagecomment = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.verifier.entrymessagecomment;
  });
  var divisionid = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.divisions.divisionId;
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      rowofspan = _useState2[0],
      setRowofspan = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('outputindicators'),
      _useState4 = _slicedToArray(_useState3, 2),
      toDisplay = _useState4[0],
      setToDisplay = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      toDisplayButton = _useState6[0],
      setToDisplayButton = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      quaterTD = _useState8[0],
      setquaterTD = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('2022-23'),
      _useState10 = _slicedToArray(_useState9, 2),
      yearTD = _useState10[0],
      setyearTD = _useState10[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_store_subschemes_actions__WEBPACK_IMPORTED_MODULE_1__.aorgetSubSchemesReportVerifier)(params.id));
    dispatch((0,_store_subschemes_actions__WEBPACK_IMPORTED_MODULE_1__.aorgetSubSchemesHeaderReportVerifier)(params.id));
    dispatch((0,_store_departmentVerifier_actions__WEBPACK_IMPORTED_MODULE_2__.aorgetLatestQuater)(divisionid));
    return function () {
      dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setSubSchemeReport({
        report: []
      }));
      dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setSubSchemeName({
        subschemename: ''
      }));
      dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setSubSchemeCode({
        subschemecode: ''
      }));
      dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setDemandNo({
        demand_no: ''
      }));
      dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setDepartmentName({
        department_name: ''
      }));
      dispatch(_store_subschemesSlice__WEBPACK_IMPORTED_MODULE_5__.subschemesActions.setDivisionName({
        division_name: ''
      }));
      dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeStateName({
        schemeStateName: ''
      }));
      dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeCenterName({
        schemeCenterName: ''
      }));
      dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeCenterCode({
        schemeCenterCode: ''
      }));
      dispatch(_store_schemesSlice__WEBPACK_IMPORTED_MODULE_4__.schemesActions.setSchemeStateCode({
        schemeStateCode: ''
      }));
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (updateApprove) {
      navigate("/dashboardverifier/aorverifierpage");
    }
  }, [updateApprove]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (updateReview) {
      navigate("/dashboardverifier/aorverifierpage");
    }
  }, [updateReview]);
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

      if (report.subscheme.aor_verified_status === 'N' || report.subscheme.aor_verified_status === 'T') {
        setToDisplayButton(true);
      }
    }
  }, [report]);

  var handleApprove = function handleApprove() {
    dispatch((0,_store_departmentVerifier_actions__WEBPACK_IMPORTED_MODULE_2__.aorapproveSubscheme)(params.id));
  };

  var handleReview = function handleReview() {
    handleOpen1();
  };

  var handleCommentsChange = function handleCommentsChange(event) {
    dispatch(_store_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_3__.departmentVerifierActions.setEntryMessageComment({
      entrymessagecomment: ''
    }));
    dispatch(_store_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_3__.departmentVerifierActions.setComment({
      comment: event.target.value
    }));
  };

  var onSubmitComments = function onSubmitComments() {
    if (comment.length < 10) {
      dispatch(_store_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_3__.departmentVerifierActions.setEntryMessageComment({
        entrymessagecomment: 'Please enter atleast 10 characters'
      }));
      return;
    }

    if (comment.length > 2000) {
      dispatch(_store_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_3__.departmentVerifierActions.setEntryMessageComment({
        entrymessagecomment: 'Maximum allowed characters is 2000'
      }));
      return;
    }

    dispatch((0,_store_departmentVerifier_actions__WEBPACK_IMPORTED_MODULE_2__.aorreviewSubscheme)(params.id, comment));
    handleClose1();
  };

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open1 = _React$useState2[0],
      setOpen1 = _React$useState2[1];

  var handleOpen1 = function handleOpen1() {
    setOpen1(true);
  };

  var handleClose1 = function handleClose1() {
    dispatch(_store_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_3__.departmentVerifierActions.setEntryMessageComment({
      entrymessagecomment: ''
    }));
    dispatch(_store_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_3__.departmentVerifierActions.setComment({
      comment: ''
    }));
    setOpen1(false);
  }; // const handleOutputLoop = (i) => {
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
      open: open1,
      onClose: handleClose1,
      "aria-labelledby": "modal-modal-title",
      "aria-describedby": "modal-modal-description",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
        sx: style,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
          id: "modal-modal-title",
          variant: "h6",
          component: "h2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "b nunito",
            children: "Comment"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
          id: "modal-modal-description",
          sx: {
            mt: 2
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "center tc",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("textarea", {
              id: "comments",
              className: "ba b--black",
              name: "comments",
              rows: "7",
              cols: "75",
              value: comment,
              onChange: handleCommentsChange
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "f6 ph3 pv2 mb2 mt2 black w-40 tc pointer b nunito",
              children: "Characters Remaining: ".concat(2000 - comment.length > 0 ? 2000 - comment.length : '2000 characters count exceeded')
            }), entrymessagecomment !== '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "f6 ph3 pv2 mb2 mt2 red w-100 tc pointer b ba b--dark-red nunito",
              children: entrymessagecomment
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "f6 link dim br3 ph3 pv2 mb2 mt2 white bg-dark-green w5 tc pointer center",
              onClick: onSubmitComments,
              children: "Save"
            })]
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "pa4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "overflow-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("table", {
          id: "table-to-xls",
          className: "table-bordered",
          style: {
            "borderWidth": "1px",
            'borderColor': "#000000",
            'borderStyle': 'solid',
            textAlign: "center"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("table", {
            className: "f6 w-100 center mb3 ba",
            cellSpacing: "0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tr", {
              style: {
                "borderWidth": "1px",
                'borderColor': "#000000",
                'borderStyle': 'solid',
                textAlign: "center"
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                colSpan: "15",
                style: {
                  "borderWidth": "1px",
                  'borderColor': "#000000",
                  'borderStyle': 'solid',
                  textAlign: "center",
                  fontWeight: 'bold'
                },
                children: "Detailed On Demand Report ( From ".concat(fromDate, " To- ").concat(toDate, ")")
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tbody", {
              className: "lh-copy",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                className: "stripe-dark table-bordered",
                style: {
                  "borderWidth": "1px",
                  'borderColor': "#000000",
                  'borderStyle': 'solid'
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  className: "pa3 tl table-bordered",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    textAlign: "left",
                    fontWeight: 'bold'
                  },
                  children: "Financial Year"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  className: "pa3 tl table-bordered",
                  colSpan: "14",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    textAlign: "left"
                  },
                  children: "2022-23"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                className: "stripe-dark ba",
                style: {
                  "borderWidth": "1px",
                  'borderColor': "#000000",
                  'borderStyle': 'solid',
                  textAlign: "left"
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  className: "pa3 tl",
                  style: {
                    fontWeight: 'bold'
                  },
                  children: "Name of secretariat department"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  className: "pa3 tl",
                  colSpan: "14",
                  children: "".concat(demand_no, "-").concat(department_name, "(").concat(division_name, ")")
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                className: "stripe-dark ba",
                style: {
                  "borderWidth": "1px",
                  'borderColor': "#000000",
                  'borderStyle': 'solid',
                  textAlign: "left"
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  className: "pa3 tl",
                  style: {
                    fontWeight: 'bold'
                  },
                  children: "Name of the state scheme"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  className: "pa3 tl",
                  colSpan: "14",
                  children: "".concat(schemeStateCode ? schemeStateCode : '0000', "-").concat(schemeStateName ? schemeStateName : '0000')
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                className: "stripe-dark ba",
                style: {
                  "borderWidth": "1px",
                  'borderColor': "#000000",
                  'borderStyle': 'solid',
                  textAlign: "left"
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  className: "pa3 tl",
                  style: {
                    fontWeight: 'bold'
                  },
                  children: "Name of the center scheme"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  className: "pa3 tl",
                  colSpan: "14",
                  children: "".concat(schemeCenterCode ? schemeCenterCode : 'NAPL', "-").concat(schemeCenterName ? schemeCenterName : 'NAPL')
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                className: "stripe-dark ba",
                style: {
                  "borderWidth": "1px",
                  'borderColor': "#000000",
                  'borderStyle': 'solid',
                  textAlign: "left"
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  className: "pa3 tl",
                  style: {
                    fontWeight: 'bold'
                  },
                  children: "Name of the sub-scheme"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  className: "pa3 tl",
                  colSpan: "14",
                  children: "".concat(subschemecode, "-").concat(subschemename)
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("table", {
            className: "f6 w-100 center mb3 ba",
            cellspacing: "0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tbody", {
              claclassNamess: "lh-copy",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                className: "bg-light-yellow",
                style: {
                  "borderWidth": "1px",
                  'borderColor': "#000000",
                  'borderStyle': 'solid',
                  textAlign: "left"
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  className: "pa3 tl b",
                  style: {
                    fontWeight: 'bold'
                  },
                  children: "Budget Estimate (in Lakhs)"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  className: "pa3 tl",
                  colSpan: "14",
                  children: report.financial_outlay
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                className: "bg-lightest-blue",
                style: {
                  "borderWidth": "1px",
                  'borderColor': "#000000",
                  'borderStyle': 'solid',
                  textAlign: "left"
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  className: "pa3 tl b",
                  style: {
                    fontWeight: 'bold'
                  },
                  children: "Sanction"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  className: "pa3 tl",
                  colSpan: "14",
                  children: parseFloat(sanction)
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                className: "bg-light-yellow",
                style: {
                  "borderWidth": "1px",
                  'borderColor': "#000000",
                  'borderStyle': 'solid',
                  textAlign: "left"
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  className: "pa3 tl b",
                  style: {
                    fontWeight: 'bold'
                  },
                  children: "Allotment"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  className: "pa3 tl",
                  colSpan: "14",
                  children: parseFloat(allotment)
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                className: "bg-lightest-blue",
                style: {
                  "borderWidth": "1px",
                  'borderColor': "#000000",
                  'borderStyle': 'solid',
                  textAlign: "left"
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  className: "pa3 tl b",
                  style: {
                    fontWeight: 'bold'
                  },
                  children: "Expenditure"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  className: "pa3 tl",
                  colSpan: "14",
                  children: parseFloat(expenditure)
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                className: "bg-light-yellow",
                style: {
                  "borderWidth": "1px",
                  'borderColor': "#000000",
                  'borderStyle': 'solid',
                  textAlign: "left"
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  className: "pa3 tl b",
                  style: {
                    fontWeight: 'bold'
                  },
                  children: "% Expenditure against Sanction"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  className: "pa3 tl",
                  colSpan: "14",
                  children: calculatepercentexpendituresanction(expenditure, sanction)
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                className: "bg-lightest-blue",
                style: {
                  "borderWidth": "1px",
                  'borderColor': "#000000",
                  'borderStyle': 'solid',
                  textAlign: "left"
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  className: "pa3 tl b",
                  style: {
                    fontWeight: 'bold'
                  },
                  children: "% Expenditure against Allotment"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  className: "pa3 tl",
                  colSpan: "14",
                  children: calculatepercentexpenditureallotment(expenditure, allotment)
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "overflow-auto",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("table", {
              className: "f6 w-100 mw8 center ba",
              cellSpacing: "0",
              style: {
                "borderWidth": "1px",
                'borderColor': "#000000",
                'borderStyle': 'solid',
                'textAlign': "center",
                'verticalAlign': "center"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  className: " b--black-80 tc pb3 pr3 b reportextcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Social Category"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  className: " b--black-80 tc b reportextcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Gender Category"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  className: " b--black-80 tc b reportoutputcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Output"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  className: " b--black-80 tc b reportoutputcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Output Indicators"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  className: " b--black-80 tc b reportoutputcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Target"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  className: " b--black-80 tc b reportoutputcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Unit of measurement"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  className: " b--black-80 tc b reportoutputachcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Achievement"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  className: " b--black-80 tc b reportoutputachcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "% Achievement"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  className: " b--black-80 tc b reportoutcomecolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Outcome"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  className: " b--black-80 tc b reportoutcomecolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Outcome Indicators"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  className: " b--black-80 tc b reportoutcomecolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Targets"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  className: " b--black-80 tc b reportoutcomeachcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Achievement"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  className: " b--black-80 tc b reportoutcomeachcolor",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "% Achievement"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  className: " b--black-80 tc reportextcolor b",
                  style: {
                    "borderWidth": "1px",
                    'borderColor': "#000000",
                    'borderStyle': 'solid',
                    'textAlign': "center",
                    'verticalAlign': "middle"
                  },
                  children: "Sustainable Development Goals"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
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
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tbody", {
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

                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                    children: [i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
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
                    }) : null, i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
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
                    }) : null, i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
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
                    }) : null, i === outputlooprow1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
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
                    }) : null, handleloop(i), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3 reportoutputcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: outputindicatorloop[i].name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3 reportoutputcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: handleOutputTarget(outputindicatorloop[i].id)
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3 reportoutputcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: handleOutputMeasurement(outputindicatorloop[i].id)
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3 reportoutputachcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: handleOutputAchievement(outputindicatorloop[i].id)
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3 reportoutputachcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: handleOutputAchievementPercent(outputindicatorloop[i].id)
                    }), i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
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
                    }) : null, i === outcomelooprow1 && report.outcomes[outcomeloopcount1] ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
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
                    }) : null, handleoutcomeloop(i), outcomeindicatorloop[i] !== undefined ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3  b--black-80 reportoutcomecolor",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: outcomeindicatorloop[i].name
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3  b--black-80 reportoutcomecolor",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: ''
                    }), outcomeindicatorloop[i] !== undefined ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3  b--black-80 reportoutcomecolor",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: ''
                    }), outcomeindicatorloop[i] !== undefined ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3  b--black-80 reportoutcomecolor",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: handleOutcomeTarget(outcomeindicatorloop[i] ? outcomeindicatorloop[i].id : 10000)
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3  b--black-80 reportoutcomecolor",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: ''
                    }), outcomeindicatorloop[i] !== undefined ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3  b--black-80 reportoutcomeachcolor",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: handleOutcomeAchievement(outcomeindicatorloop[i] ? outcomeindicatorloop[i].id : 10000)
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3  b--black-80 reportoutcomeachcolor",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: ''
                    }), outcomeindicatorloop[i] !== undefined ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3  b--black-80 reportoutcomeachcolor",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: handleOutcomeAchievementPercent(outcomeindicatorloop[i] ? outcomeindicatorloop[i].id : 10000)
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3  b--black-80 reportoutcomeachcolor",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: ''
                    }), i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
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
                    }) : null, i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3 reportextcolor b--black-80",
                      rowSpan: rowofspan,
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: report.subscheme.aor_risk_remarks ? report.subscheme.aor_risk_remarks.split('\n').map(function (item) {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                          children: [item, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("br", {})]
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

                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                    children: [i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
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
                    }) : null, i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
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
                    }) : null, i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
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
                    }) : null, i === outputlooprow1 && report.outputs[outputloopcount1] ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
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
                    }) : null, i >= report.outputindicators.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3 reportoutputcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: ''
                    }) : null, handleoutputloop(i), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3 reportoutputcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: outputindicatorloop[i] !== undefined ? outputindicatorloop[i].name : ''
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3 reportoutputcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: handleOutputTarget(outputindicatorloop[i] ? outputindicatorloop[i].id : 10000)
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3 reportoutputcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: handleOutputMeasurement(outputindicatorloop[i] !== undefined ? outputindicatorloop[i].id : 10000)
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3 reportoutputachcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: handleOutputAchievement(outputindicatorloop[i] !== undefined ? outputindicatorloop[i].id : 10000)
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3 reportoutputachcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: handleOutputAchievementPercent(outputindicatorloop[i] !== undefined ? outputindicatorloop[i].id : 10000)
                    }), i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
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
                    }) : null, i === outcomelooprow1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
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
                    }) : null, handleloop(i), outcomeindicatorloop[i] !== undefined ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3 reportoutcomecolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: outcomeindicatorloop[i].name
                    }) : null, outcomeindicatorloop[i] !== undefined ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3 reportoutcomecolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: handleOutcomeTarget(outcomeindicatorloop[i] ? outcomeindicatorloop[i].id : 10000)
                    }) : null, outcomeindicatorloop[i] !== undefined ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3 reportoutcomeachcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: handleOutcomeAchievement(outcomeindicatorloop[i] ? outcomeindicatorloop[i].id : 10000)
                    }) : null, outcomeindicatorloop[i] !== undefined ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3 reportoutcomeachcolor b--black-80",
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: handleOutcomeAchievementPercent(outcomeindicatorloop[i] ? outcomeindicatorloop[i].id : 10000)
                    }) : null, i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
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
                    }) : null, i === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: "pv3 pr3 reportextcolor b--black-80",
                      rowSpan: rowofspan,
                      style: {
                        "borderWidth": "1px",
                        'borderColor': "#000000",
                        'borderStyle': 'solid',
                        'textAlign': "center",
                        'verticalAlign': "middle"
                      },
                      children: report.subscheme.aor_risk_remarks ? report.subscheme.aor_risk_remarks.split('\n').map(function (item) {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                          children: [item, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("br", {})]
                        });
                      }) : '-'
                    }) : null]
                  });
                })]
              })]
            })
          })]
        }), toDisplayButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "flex justify-around mt3 mw8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer",
            onClick: handleApprove,
            children: "Approve"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-red w5 tc pointer",
            onClick: handleReview,
            children: "Review"
          })]
        })]
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AorVerifierSubSchemeDetail);

/***/ }),

/***/ "./resources/js/components/store/departmentVerifier-actions.js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/store/departmentVerifier-actions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSubschemeData": () => (/* binding */ getSubschemeData),
/* harmony export */   "aorgetSubschemeData": () => (/* binding */ aorgetSubschemeData),
/* harmony export */   "approveSubscheme": () => (/* binding */ approveSubscheme),
/* harmony export */   "aorapproveSubscheme": () => (/* binding */ aorapproveSubscheme),
/* harmony export */   "reviewSubscheme": () => (/* binding */ reviewSubscheme),
/* harmony export */   "aorreviewSubscheme": () => (/* binding */ aorreviewSubscheme),
/* harmony export */   "getComment": () => (/* binding */ getComment),
/* harmony export */   "aorgetComment": () => (/* binding */ aorgetComment),
/* harmony export */   "approveDivisionSubschemes": () => (/* binding */ approveDivisionSubschemes),
/* harmony export */   "aorapproveDivisionSubschemes": () => (/* binding */ aorapproveDivisionSubschemes),
/* harmony export */   "sendApprovalMail": () => (/* binding */ sendApprovalMail),
/* harmony export */   "aorsendApprovalMail": () => (/* binding */ aorsendApprovalMail),
/* harmony export */   "getLatestQuater": () => (/* binding */ getLatestQuater),
/* harmony export */   "aorgetLatestQuater": () => (/* binding */ aorgetLatestQuater)
/* harmony export */ });
/* harmony import */ var _departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./departmentVerifierSlice */ "./resources/js/components/store/departmentVerifierSlice.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configuration */ "./resources/js/components/configuration.js");
/* harmony import */ var _errorSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorSlice */ "./resources/js/components/store/errorSlice.js");



var getSubschemeData = function getSubschemeData(id, finYear) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "verification/pending/").concat(id, "/").concat(finYear), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdate({
          update: false
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdateApprove({
          updateApprove: false
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdateReview({
          updateReview: false
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setSubschemes({
          subschemes: res.result
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdate({
          update: false
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setSubschemes({
          subschemes: []
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdateApprove({
          updateApprove: false
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdateReview({
          updateReview: false
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdate({
        update: false
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setSubschemes({
        subschemes: []
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdateApprove({
        updateApprove: false
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdateReview({
        updateReview: false
      }));
    });
  };
};
var aorgetSubschemeData = function aorgetSubschemeData(id, finYear) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "aor_verification/pending/").concat(id, "/").concat(finYear), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdate({
          update: false
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdateApprove({
          updateApprove: false
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdateReview({
          updateReview: false
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setSubschemes({
          subschemes: res.result
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdate({
          update: false
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setSubschemes({
          subschemes: []
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdateApprove({
          updateApprove: false
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdateReview({
          updateReview: false
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdate({
        update: false
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setSubschemes({
        subschemes: []
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdateApprove({
        updateApprove: false
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdateReview({
        updateReview: false
      }));
    });
  };
};
var approveSubscheme = function approveSubscheme(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "verification/approve/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setApproveNotificationSuccess({
          approveNotificationSuccess: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdateApprove({
          updateApprove: true
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setApproveNotificationFailure({
          approveNotificationFailure: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdateApprove({
          updateApprove: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setApproveNotificationFailure({
        approveNotificationFailure: true
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdateApprove({
        updateApprove: true
      }));
    });
  };
};
var aorapproveSubscheme = function aorapproveSubscheme(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "aor_verification/approve/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setApproveNotificationSuccess({
          approveNotificationSuccess: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdateApprove({
          updateApprove: true
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setApproveNotificationFailure({
          approveNotificationFailure: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdateApprove({
          updateApprove: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setApproveNotificationFailure({
        approveNotificationFailure: true
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdateApprove({
        updateApprove: true
      }));
    });
  };
};
var reviewSubscheme = function reviewSubscheme(id, comment) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "verification/review/").concat(id), {
      method: 'post',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token')),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        comment: comment
      })
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setReviewNotificationSuccess({
          reviewNotificationSuccess: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdateReview({
          updateReview: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setSendEmailApprovalDetail({
          sendemailapprovaldetail: res.details
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setReviewNotificationFailure({
          reviewNotificationFailure: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdateReview({
          updateReview: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setReviewNotificationFailure({
        reviewNotificationFailure: true
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdateReview({
        updateReview: true
      }));
    });
  };
};
var aorreviewSubscheme = function aorreviewSubscheme(id, comment) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "aor_verification/review/").concat(id), {
      method: 'post',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token')),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        comment: comment
      })
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setReviewNotificationSuccess({
          reviewNotificationSuccess: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdateReview({
          updateReview: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setSendEmailApprovalDetail({
          sendemailapprovaldetail: res.details
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setReviewNotificationFailure({
          reviewNotificationFailure: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdateReview({
          updateReview: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setReviewNotificationFailure({
        reviewNotificationFailure: true
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdateReview({
        updateReview: true
      }));
    });
  };
};
var getComment = function getComment(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "verification/remarks/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setCommentDisplay({
          commentDisplay: res.reviewRemarks.remarks
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setCommentDisplay({
          commentDisplay: 'Sorry something went wrong'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setCommentDisplay({
        commentDisplay: 'Sorry something went wrong'
      }));
    });
  };
};
var aorgetComment = function aorgetComment(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "aor_verification/remarks/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setCommentDisplay({
          commentDisplay: res.reviewRemarks.remarks
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setCommentDisplay({
          commentDisplay: 'Sorry something went wrong'
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setCommentDisplay({
        commentDisplay: 'Sorry something went wrong'
      }));
    });
  };
};
var approveDivisionSubschemes = function approveDivisionSubschemes(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "verification/verify/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setFinalApproveNotificationSuccess({
          finalApproveNotificationSuccess: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdate({
          update: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setSendEmailApprovalDetail({
          sendemailapprovaldetail: res.details
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setFinalApproveNotificationFailure({
          finalApproveNotificationFailure: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdate({
          update: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setFinalApproveNotificationFailure({
        finalApproveNotificationFailure: true
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdate({
        update: true
      }));
    });
  };
};
var aorapproveDivisionSubschemes = function aorapproveDivisionSubschemes(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "aor_verification/verify/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setFinalApproveNotificationSuccess({
          finalApproveNotificationSuccess: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdate({
          update: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setSendEmailApprovalDetail({
          sendemailapprovaldetail: res.details
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setFinalApproveNotificationFailure({
          finalApproveNotificationFailure: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdate({
          update: true
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setFinalApproveNotificationFailure({
        finalApproveNotificationFailure: true
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setUpdate({
        update: true
      }));
    });
  };
};
var sendApprovalMail = function sendApprovalMail(details) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "email/submit_notification"), {
      method: 'post',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token')),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        details: details
      })
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setSendEmailApprovalDetail({
          sendemailapprovaldetail: ''
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setSendEmailApprovalDetail({
          sendemailapprovaldetail: ''
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setSendEmailApprovalDetail({
        sendemailapprovaldetail: ''
      }));
    });
  };
};
var aorsendApprovalMail = function aorsendApprovalMail(details) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "aor_email/submit_notification"), {
      method: 'post',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token')),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        details: details
      })
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setSendEmailApprovalDetail({
          sendemailapprovaldetail: ''
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setSendEmailApprovalDetail({
          sendemailapprovaldetail: ''
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setSendEmailApprovalDetail({
        sendemailapprovaldetail: ''
      }));
    });
  };
};
var getLatestQuater = function getLatestQuater(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "latestquater/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setQuaterTs({
          quaterTs: res.quater
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setQuaterTs({
          quaterTs: ''
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setQuaterTs({
        quaterTs: ''
      }));
    });
  };
};
var aorgetLatestQuater = function aorgetLatestQuater(id) {
  return function (dispatch) {
    fetch("".concat(_configuration__WEBPACK_IMPORTED_MODULE_1__.laravel_api, "aor_latestquater/").concat(id), {
      method: 'GET',
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('access_token'))
      }
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (res.status === 200) {
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setFromDate({
          fromDate: res.from_date
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setToDate({
          toDate: res.to_date
        }));
      } else {
        dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
          error: true
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setFromDate({
          fromDate: ''
        }));
        dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setToDate({
          toDate: ''
        }));
      }
    })["catch"](function (err) {
      dispatch(_errorSlice__WEBPACK_IMPORTED_MODULE_2__.errorActions.setError({
        error: true
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setFromDate({
        fromDate: ''
      }));
      dispatch(_departmentVerifierSlice__WEBPACK_IMPORTED_MODULE_0__.departmentVerifierActions.setToDate({
        toDate: ''
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

/***/ "./node_modules/react-transition-group/esm/Transition.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/Transition.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UNMOUNTED": () => (/* binding */ UNMOUNTED),
/* harmony export */   "EXITED": () => (/* binding */ EXITED),
/* harmony export */   "ENTERING": () => (/* binding */ ENTERING),
/* harmony export */   "ENTERED": () => (/* binding */ ENTERED),
/* harmony export */   "EXITING": () => (/* binding */ EXITING),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom__WEBPACK_IMPORTED_MODULE_3__.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_4__["default"].disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_3__.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_4__["default"].disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_3__.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_2__.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(react__WEBPACK_IMPORTED_MODULE_2__.Children.only(children), childProps))
    );
  };

  return Transition;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_5__["default"];
Transition.propTypes =  true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
    current: typeof Element === 'undefined' ? (prop_types__WEBPACK_IMPORTED_MODULE_6___default().any) : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return prop_types__WEBPACK_IMPORTED_MODULE_6___default().instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().func.isRequired), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().element.isRequired)]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * Enable or disable enter transitions.
   */
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * Enable or disable exit transitions.
   */
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_7__.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)
} : 0; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0__.createContext(null));

/***/ }),

/***/ "./node_modules/react-transition-group/esm/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/config.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  disabled: false
});

/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/PropTypes.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeoutsShape": () => (/* binding */ timeoutsShape),
/* harmony export */   "classNamesShape": () => (/* binding */ classNamesShape)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
}).isRequired]) : 0;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  active: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  enterDone: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  enterActive: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exitDone: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exitActive: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
})]) : 0;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ })

}]);