webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ScrollTo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ScrollTo */ "./components/ScrollTo.js");
var _jsxFileName = "/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/Nav.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Nav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav(props) {
    var _this;

    _classCallCheck(this, Nav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Nav).call(this, props));
    _this.state = {
      menuOpen: false
    };
    return _this;
  }

  _createClass(Nav, [{
    key: "handleStateChange",
    value: function handleStateChange(state) {
      this.setState({
        menuOpen: state.isOpen
      });
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      this.setState({
        menuOpen: !this.state.menuOpen
      });
    }
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      this.setState({
        menuOpen: false
      });
    }
  }, {
    key: "renderDesktopMenu",
    value: function renderDesktopMenu() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: function onClick() {
          return _this2.closeMenu();
        },
        href: "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "About"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: function onClick() {
          return _this2.closeMenu();
        },
        href: "team",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Team"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: function onClick() {
          return _this2.closeMenu();
        },
        href: "join-us",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Join us"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "social-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "linkedin")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "twitter")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "github")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "NATSio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "NATSio"))));
    }
  }, {
    key: "renderMobileMenu",
    value: function renderMobileMenu() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__["slide"], {
        right: true,
        isOpen: this.state.menuOpen,
        onStateChange: function onStateChange(state) {
          return _this3.handleStateChange(state);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: function onClick() {
          return _this3.closeMenu();
        },
        href: "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "About"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: function onClick() {
          return _this3.closeMenu();
        },
        href: "team",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Team"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: function onClick() {
          return _this3.closeMenu();
        },
        href: "join-us",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Join us"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "65746978",
        css: ".menu-item{display:block;color:var(--color-tertiary);text-transform:uppercase;font-size:0.8rem;-webkit-text-decoration:none;text-decoration:none;font-family:var(--font-primary);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin-bottom:2rem;}.bm-burger-button{position:relative;width:1.4rem;height:14px;}.bm-burger-bars{position:absolute;height:2px !important;border-radius:4px;left:0;right:0;background-color:var(--color-font);}.bm-burger-bars:nth-child(1){top:0 !important;}.bm-burger-bars:nth-child(2){top:50% !important;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.bm-burger-bars:nth-child(3){top:100% !important;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);}.bm-cross-button{right:4vw !important;top:4vw !important;}.bm-cross{cursor:pointer;background:var(--color-font);height:20px !important;}.bm-menu{background:var(--color-quinary) !important;padding:4em 1.5em 0;font-size:1.15em;-webkit-transition:all 400ms ease;transition:all 400ms ease;}.bm-menu button{width:80%;margin:1rem 0;}.bm-menu button:first-of-type{margin-top:30%;}.bm-menu-wrap{top:0;}.bm-item-list{padding:0.8em;}.bm-overlay{top:0;left:0;width:100vw !important;height:100vh !important;z-index:1001 !important;background:var(--color-quinary) !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL05hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RTJCLEFBRzJCLEFBWUksQUFPQSxBQVNELEFBR0UsQUFJQyxBQUtDLEFBTU4sQUFPNEIsQUFPakMsQUFLSyxBQUlULEFBS1EsQUFLUixNQVRSLEFBVVMsSUFuQk8sR0FvQlMsQ0FoRkssQUEwRTlCLENBNUIrQixBQW1CL0IsRUFyQ0EsQ0FoQmUsQUFPUyxDQVlLLENBSUMsQ0FLVCxHQXFCckIsT0FoRGMsS0FvRVksSUE3RE4sQUFxQnBCLEVBeEMyQixDQWEzQixBQXVDc0IsQ0FORyxjQTFCaEIsRUE2RGlCLEdBNUJQLEVBaENULEVBcEJTLEFBOENuQixNQXpCcUMsT0FnQ1QsSUFwREwsQUFnRnNCLHdCQTNEN0MsSUFRQSxJQUlBLFdBZ0RBLE9BaEZrQyxNQW9EbEMsMEJBbkRxQiw2RkFDQSxtQkFDckIiLCJmaWxlIjoiL1VzZXJzL2ZyYW4vRG9jdW1lbnRzL1Byb2plY3RzL2Jhc2VtZW50L1N5bmFkaWEvc3luYWRpYS13ZWJzaXRlL2NvbXBvbmVudHMvTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNsaWRlIGFzIE1lbnUgfSBmcm9tICdyZWFjdC1idXJnZXItbWVudSc7XG5pbXBvcnQgU2Nyb2xsVG8gZnJvbSAnLi4vY29tcG9uZW50cy9TY3JvbGxUbyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lbnVPcGVuOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBoYW5kbGVTdGF0ZUNoYW5nZShzdGF0ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtZW51T3Blbjogc3RhdGUuaXNPcGVuIH0pO1xuICB9XG5cbiAgdG9nZ2xlTWVudSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbWVudU9wZW46ICF0aGlzLnN0YXRlLm1lbnVPcGVuIH0pO1xuICB9XG5cbiAgY2xvc2VNZW51KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtZW51T3BlbjogZmFsc2UgfSk7XG4gIH1cblxuICByZW5kZXJEZXNrdG9wTWVudSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8U2Nyb2xsVG8gb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1lbnUoKX0gaHJlZj1cImFib3V0XCI+XG4gICAgICAgICAgQWJvdXRcbiAgICAgICAgPC9TY3JvbGxUbz5cbiAgICAgICAgPFNjcm9sbFRvIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2VNZW51KCl9IGhyZWY9XCJ0ZWFtXCI+XG4gICAgICAgICAgVGVhbVxuICAgICAgICA8L1Njcm9sbFRvPlxuICAgICAgICA8U2Nyb2xsVG8gb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1lbnUoKX0gaHJlZj1cImpvaW4tdXNcIj5cbiAgICAgICAgICBKb2luIHVzXG4gICAgICAgIDwvU2Nyb2xsVG8+XG5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNvY2lhbC1saW5rc1wiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJsaW5rZWRpblwiPmxpbmtlZGluPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj1cInR3aXR0ZXJcIj50d2l0dGVyPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj1cImdpdGh1YlwiPmdpdGh1YjwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJOQVRTaW9cIj5OQVRTaW88L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlck1vYmlsZU1lbnUoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNZW51XG4gICAgICAgIHJpZ2h0XG4gICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5tZW51T3Blbn1cbiAgICAgICAgb25TdGF0ZUNoYW5nZT17c3RhdGUgPT4gdGhpcy5oYW5kbGVTdGF0ZUNoYW5nZShzdGF0ZSl9XG4gICAgICA+XG4gICAgICAgIDxTY3JvbGxUbyBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlTWVudSgpfSBocmVmPVwiYWJvdXRcIj5cbiAgICAgICAgICBBYm91dFxuICAgICAgICA8L1Njcm9sbFRvPlxuICAgICAgICA8U2Nyb2xsVG8gb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1lbnUoKX0gaHJlZj1cInRlYW1cIj5cbiAgICAgICAgICBUZWFtXG4gICAgICAgIDwvU2Nyb2xsVG8+XG4gICAgICAgIDxTY3JvbGxUbyBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlTWVudSgpfSBocmVmPVwiam9pbi11c1wiPlxuICAgICAgICAgIEpvaW4gdXNcbiAgICAgICAgPC9TY3JvbGxUbz5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAubWVudS1pdGVtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRlcnRpYXJ5KTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXByaW1hcnkpO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogUG9zaXRpb24gYW5kIHNpemluZyBvZiBidXJnZXIgYnV0dG9uICovXG4gICAgICAgICAgLmJtLWJ1cmdlci1idXR0b24ge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDEuNHJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBDb2xvci9zaGFwZSBvZiBidXJnZXIgaWNvbiBiYXJzICovXG4gICAgICAgICAgLmJtLWJ1cmdlci1iYXJzIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGhlaWdodDogMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mb250KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYm0tYnVyZ2VyLWJhcnM6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYm0tYnVyZ2VyLWJhcnM6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIHRvcDogNTAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ibS1idXJnZXItYmFyczpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgdG9wOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ibS1jcm9zcy1idXR0b24ge1xuICAgICAgICAgICAgcmlnaHQ6IDR2dyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdG9wOiA0dncgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBDb2xvci9zaGFwZSBvZiBjbG9zZSBidXR0b24gY3Jvc3MgKi9cbiAgICAgICAgICAuYm0tY3Jvc3Mge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZm9udCk7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBHZW5lcmFsIHNpZGViYXIgc3R5bGVzICovXG4gICAgICAgICAgLmJtLW1lbnUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcXVpbmFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRlbSAxLjVlbSAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjE1ZW07XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNDAwbXMgZWFzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYm0tbWVudSBidXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ibS1tZW51IGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYm0tbWVudS13cmFwIHtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBXcmFwcGVyIGZvciBpdGVtIGxpc3QgKi9cbiAgICAgICAgICAuYm0taXRlbS1saXN0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuOGVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIFN0eWxpbmcgb2Ygb3ZlcmxheSAqL1xuICAgICAgICAgIC5ibS1vdmVybGF5IHtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDEgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXF1aW5hcnkpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L01lbnU+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG5hdj5cbiAgICAgICAge3RoaXMucmVuZGVyTW9iaWxlTWVudSgpfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnNvY2lhbC1saW5rcyB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgZGlzcGxheVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9uYXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/Nav.js */",
        __self: this
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "jsx-644237636",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, this.renderMobileMenu(), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "644237636",
        css: ".social-links.jsx-644237636{list-style:none;display;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL05hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5S29CLEFBRzZCLGdCQUVuQixRQUFDIiwiZmlsZSI6Ii9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL05hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzbGlkZSBhcyBNZW51IH0gZnJvbSAncmVhY3QtYnVyZ2VyLW1lbnUnO1xuaW1wb3J0IFNjcm9sbFRvIGZyb20gJy4uL2NvbXBvbmVudHMvU2Nyb2xsVG8nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXYgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZW51T3BlbjogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlU3RhdGVDaGFuZ2Uoc3RhdGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbWVudU9wZW46IHN0YXRlLmlzT3BlbiB9KTtcbiAgfVxuXG4gIHRvZ2dsZU1lbnUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lbnVPcGVuOiAhdGhpcy5zdGF0ZS5tZW51T3BlbiB9KTtcbiAgfVxuXG4gIGNsb3NlTWVudSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbWVudU9wZW46IGZhbHNlIH0pO1xuICB9XG5cbiAgcmVuZGVyRGVza3RvcE1lbnUoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPFNjcm9sbFRvIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2VNZW51KCl9IGhyZWY9XCJhYm91dFwiPlxuICAgICAgICAgIEFib3V0XG4gICAgICAgIDwvU2Nyb2xsVG8+XG4gICAgICAgIDxTY3JvbGxUbyBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlTWVudSgpfSBocmVmPVwidGVhbVwiPlxuICAgICAgICAgIFRlYW1cbiAgICAgICAgPC9TY3JvbGxUbz5cbiAgICAgICAgPFNjcm9sbFRvIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2VNZW51KCl9IGhyZWY9XCJqb2luLXVzXCI+XG4gICAgICAgICAgSm9pbiB1c1xuICAgICAgICA8L1Njcm9sbFRvPlxuXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJzb2NpYWwtbGlua3NcIj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBocmVmPVwibGlua2VkaW5cIj5saW5rZWRpbjwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJ0d2l0dGVyXCI+dHdpdHRlcjwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJnaXRodWJcIj5naXRodWI8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBocmVmPVwiTkFUU2lvXCI+TkFUU2lvPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJNb2JpbGVNZW51KCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TWVudVxuICAgICAgICByaWdodFxuICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUubWVudU9wZW59XG4gICAgICAgIG9uU3RhdGVDaGFuZ2U9e3N0YXRlID0+IHRoaXMuaGFuZGxlU3RhdGVDaGFuZ2Uoc3RhdGUpfVxuICAgICAgPlxuICAgICAgICA8U2Nyb2xsVG8gb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1lbnUoKX0gaHJlZj1cImFib3V0XCI+XG4gICAgICAgICAgQWJvdXRcbiAgICAgICAgPC9TY3JvbGxUbz5cbiAgICAgICAgPFNjcm9sbFRvIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2VNZW51KCl9IGhyZWY9XCJ0ZWFtXCI+XG4gICAgICAgICAgVGVhbVxuICAgICAgICA8L1Njcm9sbFRvPlxuICAgICAgICA8U2Nyb2xsVG8gb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1lbnUoKX0gaHJlZj1cImpvaW4tdXNcIj5cbiAgICAgICAgICBKb2luIHVzXG4gICAgICAgIDwvU2Nyb2xsVG8+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLm1lbnUtaXRlbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1wcmltYXJ5KTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIFBvc2l0aW9uIGFuZCBzaXppbmcgb2YgYnVyZ2VyIGJ1dHRvbiAqL1xuICAgICAgICAgIC5ibS1idXJnZXItYnV0dG9uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxLjRyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogQ29sb3Ivc2hhcGUgb2YgYnVyZ2VyIGljb24gYmFycyAqL1xuICAgICAgICAgIC5ibS1idXJnZXItYmFycyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBoZWlnaHQ6IDJweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZm9udCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJtLWJ1cmdlci1iYXJzOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJtLWJ1cmdlci1iYXJzOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICB0b3A6IDUwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYm0tYnVyZ2VyLWJhcnM6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICAgIHRvcDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYm0tY3Jvc3MtYnV0dG9uIHtcbiAgICAgICAgICAgIHJpZ2h0OiA0dncgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRvcDogNHZ3ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogQ29sb3Ivc2hhcGUgb2YgY2xvc2UgYnV0dG9uIGNyb3NzICovXG4gICAgICAgICAgLmJtLWNyb3NzIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWZvbnQpO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogR2VuZXJhbCBzaWRlYmFyIHN0eWxlcyAqL1xuICAgICAgICAgIC5ibS1tZW51IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXF1aW5hcnkpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiA0ZW0gMS41ZW0gMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDQwMG1zIGVhc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJtLW1lbnUgYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYm0tbWVudSBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJtLW1lbnUtd3JhcCB7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogV3JhcHBlciBmb3IgaXRlbSBsaXN0ICovXG4gICAgICAgICAgLmJtLWl0ZW0tbGlzdCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjhlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBTdHlsaW5nIG9mIG92ZXJsYXkgKi9cbiAgICAgICAgICAuYm0tb3ZlcmxheSB7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAxICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1xdWluYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9NZW51PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXY+XG4gICAgICAgIHt0aGlzLnJlbmRlck1vYmlsZU1lbnUoKX1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5zb2NpYWwtbGlua3Mge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXlcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvbmF2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/Nav.js */",
        __self: this
      }));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.137b61f106b1ee155784.hot-update.js.map