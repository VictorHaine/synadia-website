webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Team.js":
/*!****************************!*\
  !*** ./components/Team.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Team; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TeamMember__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeamMember */ "./components/TeamMember.js");
var _jsxFileName = "/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/Team.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Team =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Team, _React$Component);

  function Team(props) {
    var _this;

    _classCallCheck(this, Team);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Team).call(this, props));
    _this.state = {
      team: [{
        name: 'Derek Collison',
        position: 'Founder & CEO',
        bio: 'Entrepreneur, Investor, and Technologist. Creator of @nats_io and @cloudfoundry',
        links: {
          twitter: 'derekcollison',
          linkedin: 'derekcollison',
          github: 'derekcollison'
        }
      }, {
        name: 'Colin Sullivan',
        position: 'Product Management',
        bio: 'Product Manager',
        links: {
          twitter: 'ColinSullivan01',
          linkedin: 'colinsullivan',
          github: 'ColinSullivan1'
        }
      }, {
        name: 'Ginger Collison',
        position: 'Community',
        bio: 'Developer Advocate & Community Manager',
        links: {
          twitter: 'crashgingerly',
          linkedin: 'ginger-collison',
          github: 'gcolliso'
        }
      }, {
        name: 'Ivan Kozlovic',
        position: 'Engineering',
        bio: 'Software Engineer',
        links: {
          twitter: 'ivankozlovic',
          linkedin: 'ivankozlovic',
          github: 'kozlovic'
        }
      }, {
        name: 'Waldemar Quevedo',
        position: 'Engineering',
        bio: 'Software Engineer',
        links: {
          twitter: 'wallyqs',
          linkedin: 'waldemarquevedo',
          github: 'wallyqs'
        }
      }, {
        name: 'Alberto Ricart',
        position: 'Engineering',
        bio: 'Software Engineer',
        links: {
          twitter: 'albertoricart',
          linkedin: 'albertoricart',
          github: 'aricart'
        }
      }, {
        name: 'Stephen Asbury',
        position: 'Engineering',
        bio: 'Software Engineer',
        links: {
          twitter: 'thesasbury',
          linkedin: 'stasbury',
          github: 'sasbury'
        }
      }, {
        name: 'David Kemper',
        position: 'Engineering',
        bio: 'Software Engineer',
        links: {
          linkedin: 'david-kemper-531bb038',
          github: 'davidkemper'
        }
      }],
      vpWidth: null
    };
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Team, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: "updateWindowDimensions",
    value: function updateWindowDimensions() {
      this.setState({
        vpWidth: window.innerWidth
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.state.vpWidth;
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: "renderTeam",
    value: function renderTeam() {}
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3324263279" + " " + "outer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3324263279" + " " + "inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, this.state.team.map(function (teamMember, i) {
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TeamMember__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: i,
          name: teamMember.name,
          position: teamMember.position,
          bio: teamMember.bio,
          links: teamMember.links,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3324263279",
        css: ".outer.jsx-3324263279{position:relative;width:100vw;overflow:hidden;-webkit-scroll-snap-type:x mandatory;-moz-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;-webkit-scroll-snap-points-x:repeat(80vw);-moz-scroll-snap-points-x:repeat(80vw);-ms-scroll-snap-points-x:repeat(80vw);scroll-snap-points-x:repeat(80vw);background-image:url('/static/images/bg.png');background-repeat:no-repeat;background-size:contain;background-position:50% 10%;}.outer.jsx-3324263279:before{content:'';display:block;position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient( transparent 10%, var(--color-quaternary), var(--color-quaternary), var(--color-quaternary) );}.inner.jsx-3324263279{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-scroll-snap-align:start;-moz-scroll-snap-align:start;-ms-scroll-snap-align:start;scroll-snap-align:start;overflow-x:auto;-webkit-overflow-scrolling:touch;margin-top:5rem;margin-bottom:-50px;padding-bottom:50px;padding-left:10vw;overflow-y:hidden;overflow-x:scroll;}@media (min-width:768px){.inner.jsx-3324263279{max-width:1400px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-left:0;margin-left:auto;margin-right:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0RvY3VtZW50cy9Qcm9qZWN0cy9iYXNlbWVudC9TeW5hZGlhL3N5bmFkaWEtd2Vic2l0ZS9jb21wb25lbnRzL1RlYW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEhvQixBQUcrQixBQVlQLEFBZ0JFLEFBZU0sV0E5QkwsTUErQkcsQ0EzQ0wsT0FhTSxLQVpGLGFBYVQsR0Fac0IsSUFhdkIsTUFDSyxXQUNDLE9BV0ssQUFnQlEsS0FyQnhCLDBEQU11QixvQ0FnQlAsTUExQ2lCLFNBMkNmLFlBdEJyQixLQXVCc0Isa0JBQ3BCLDJCQWxCZ0IsZ0JBQ2lCLGlDQUNqQixnQkFDSSxpQkE3QjBCLEdBOEIxQixvQkFDRixrQkFDQSxLQS9CVSxhQWdDVixlQS9CTSxHQWdDMUIscUJBL0I4Qiw0QkFDOUIiLCJmaWxlIjoiL1VzZXJzL2ZyYW4vRG9jdW1lbnRzL1Byb2plY3RzL2Jhc2VtZW50L1N5bmFkaWEvc3luYWRpYS13ZWJzaXRlL2NvbXBvbmVudHMvVGVhbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGVhbU1lbWJlciBmcm9tICcuL1RlYW1NZW1iZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWFtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGVhbTogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0RlcmVrIENvbGxpc29uJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ0ZvdW5kZXIgJiBDRU8nLFxuICAgICAgICAgIGJpbzpcbiAgICAgICAgICAgICdFbnRyZXByZW5ldXIsIEludmVzdG9yLCBhbmQgVGVjaG5vbG9naXN0LiBDcmVhdG9yIG9mIEBuYXRzX2lvIGFuZCBAY2xvdWRmb3VuZHJ5JyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ2RlcmVrY29sbGlzb24nLFxuICAgICAgICAgICAgbGlua2VkaW46ICdkZXJla2NvbGxpc29uJyxcbiAgICAgICAgICAgIGdpdGh1YjogJ2RlcmVrY29sbGlzb24nXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0NvbGluIFN1bGxpdmFuJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ1Byb2R1Y3QgTWFuYWdlbWVudCcsXG4gICAgICAgICAgYmlvOiAnUHJvZHVjdCBNYW5hZ2VyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ0NvbGluU3VsbGl2YW4wMScsXG4gICAgICAgICAgICBsaW5rZWRpbjogJ2NvbGluc3VsbGl2YW4nLFxuICAgICAgICAgICAgZ2l0aHViOiAnQ29saW5TdWxsaXZhbjEnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0dpbmdlciBDb2xsaXNvbicsXG4gICAgICAgICAgcG9zaXRpb246ICdDb21tdW5pdHknLFxuICAgICAgICAgIGJpbzogJ0RldmVsb3BlciBBZHZvY2F0ZSAmIENvbW11bml0eSBNYW5hZ2VyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ2NyYXNoZ2luZ2VybHknLFxuICAgICAgICAgICAgbGlua2VkaW46ICdnaW5nZXItY29sbGlzb24nLFxuICAgICAgICAgICAgZ2l0aHViOiAnZ2NvbGxpc28nXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0l2YW4gS296bG92aWMnLFxuICAgICAgICAgIHBvc2l0aW9uOiAnRW5naW5lZXJpbmcnLFxuICAgICAgICAgIGJpbzogJ1NvZnR3YXJlIEVuZ2luZWVyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ2l2YW5rb3psb3ZpYycsXG4gICAgICAgICAgICBsaW5rZWRpbjogJ2l2YW5rb3psb3ZpYycsXG4gICAgICAgICAgICBnaXRodWI6ICdrb3psb3ZpYydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnV2FsZGVtYXIgUXVldmVkbycsXG4gICAgICAgICAgcG9zaXRpb246ICdFbmdpbmVlcmluZycsXG4gICAgICAgICAgYmlvOiAnU29mdHdhcmUgRW5naW5lZXInLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICB0d2l0dGVyOiAnd2FsbHlxcycsXG4gICAgICAgICAgICBsaW5rZWRpbjogJ3dhbGRlbWFycXVldmVkbycsXG4gICAgICAgICAgICBnaXRodWI6ICd3YWxseXFzJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdBbGJlcnRvIFJpY2FydCcsXG4gICAgICAgICAgcG9zaXRpb246ICdFbmdpbmVlcmluZycsXG4gICAgICAgICAgYmlvOiAnU29mdHdhcmUgRW5naW5lZXInLFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICB0d2l0dGVyOiAnYWxiZXJ0b3JpY2FydCcsXG4gICAgICAgICAgICBsaW5rZWRpbjogJ2FsYmVydG9yaWNhcnQnLFxuICAgICAgICAgICAgZ2l0aHViOiAnYXJpY2FydCdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnU3RlcGhlbiBBc2J1cnknLFxuICAgICAgICAgIHBvc2l0aW9uOiAnRW5naW5lZXJpbmcnLFxuICAgICAgICAgIGJpbzogJ1NvZnR3YXJlIEVuZ2luZWVyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgdHdpdHRlcjogJ3RoZXNhc2J1cnknLFxuICAgICAgICAgICAgbGlua2VkaW46ICdzdGFzYnVyeScsXG4gICAgICAgICAgICBnaXRodWI6ICdzYXNidXJ5J1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdEYXZpZCBLZW1wZXInLFxuICAgICAgICAgIHBvc2l0aW9uOiAnRW5naW5lZXJpbmcnLFxuICAgICAgICAgIGJpbzogJ1NvZnR3YXJlIEVuZ2luZWVyJyxcbiAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgbGlua2VkaW46ICdkYXZpZC1rZW1wZXItNTMxYmIwMzgnLFxuICAgICAgICAgICAgZ2l0aHViOiAnZGF2aWRrZW1wZXInXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgdnBXaWR0aDogbnVsbFxuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMgPSB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xuICB9XG5cbiAgdXBkYXRlV2luZG93RGltZW5zaW9ucygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdnBXaWR0aDogd2luZG93LmlubmVyV2lkdGggfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnN0YXRlLnZwV2lkdGg7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XG4gIH1cblxuICByZW5kZXJUZWFtKCkge31cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnRlYW0ubWFwKCh0ZWFtTWVtYmVyLCBpKSA9PiB7XG4gICAgICAgICAgICA8VGVhbU1lbWJlclxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIG5hbWU9e3RlYW1NZW1iZXIubmFtZX1cbiAgICAgICAgICAgICAgcG9zaXRpb249e3RlYW1NZW1iZXIucG9zaXRpb259XG4gICAgICAgICAgICAgIGJpbz17dGVhbU1lbWJlci5iaW99XG4gICAgICAgICAgICAgIGxpbmtzPXt0ZWFtTWVtYmVyLmxpbmtzfVxuICAgICAgICAgICAgLz47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm91dGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbiAgICAgICAgICAgIHNjcm9sbC1zbmFwLXBvaW50cy14OiByZXBlYXQoODB2dyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2JnLnBuZycpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSAxMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm91dGVyOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCAxMCUsXG4gICAgICAgICAgICAgIHZhcigtLWNvbG9yLXF1YXRlcm5hcnkpLFxuICAgICAgICAgICAgICB2YXIoLS1jb2xvci1xdWF0ZXJuYXJ5KSxcbiAgICAgICAgICAgICAgdmFyKC0tY29sb3ItcXVhdGVybmFyeSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmlubmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTUwcHg7IC8qIG1heGltdW0gd2lkdGggb2Ygc2Nyb2xsYmFyICovXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDsgLyogbWF4aW11bSB3aWR0aCBvZiBzY3JvbGxiYXIgKi9cbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTB2dztcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIC5pbm5lciB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/fran/Documents/Projects/basement/Synadia/synadia-website/components/Team.js */",
        __self: this
      }));
    }
  }]);

  return Team;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.7eee24e9922b3138a136.hot-update.js.map