webpackHotUpdate_N_E("pages/episodes/[slug]",{

/***/ "./src/pages/episodes/[slug].tsx":
/*!***************************************!*\
  !*** ./src/pages/episodes/[slug].tsx ***!
  \***************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Episode; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _episode_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./episode.module.scss */ "./src/pages/episodes/episode.module.scss");
/* harmony import */ var _episode_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_episode_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/PlayerContext */ "./src/contexts/PlayerContext.tsx");


var _jsxFileName = "C:\\Users\\gabak\\OneDrive\\WorkPlace\\WebProjects\\podcastrnext\\src\\pages\\episodes\\[slug].tsx",
    _s = $RefreshSig$();






var __N_SSG = true;
function Episode(_ref) {
  _s();

  var episode = _ref.episode;

  var _usePlayer = Object(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__["usePlayer"])(),
      play = _usePlayer.play;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _episode_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.episode,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: episode.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 8
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 6
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _episode_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.thumbnailContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/arrow-left.svg",
            alt: "Voltar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        width: 700,
        height: 160,
        src: episode.thumbnail,
        objectFit: "cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: function onClick() {
          return play(episode);
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/play.svg",
          alt: "Tocar Epis\xF3dio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 6
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: episode.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 8
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.members
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.publishedAt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.duration
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 6
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _episode_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.description,
      dangerouslySetInnerHTML: {
        __html: episode.description
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 6
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 4
  }, this);
}

_s(Episode, "nfuARMQWlWnHHyqBvirokTk6VeI=", false, function () {
  return [_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__["usePlayer"]];
});

_c = Episode;

var _c;

$RefreshReg$(_c, "Episode");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VwaXNvZGVzL1tzbHVnXS50c3giXSwibmFtZXMiOlsiRXBpc29kZSIsImVwaXNvZGUiLCJ1c2VQbGF5ZXIiLCJwbGF5Iiwic3R5bGVzIiwidGl0bGUiLCJ0aHVtYm5haWxDb250YWluZXIiLCJ0aHVtYm5haWwiLCJtZW1iZXJzIiwicHVibGlzaGVkQXQiLCJkdXJhdGlvbiIsImRlc2NyaXB0aW9uIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBa0JlLFNBQVNBLE9BQVQsT0FBMEM7QUFBQTs7QUFBQSxNQUF4QkMsT0FBd0IsUUFBeEJBLE9BQXdCOztBQUFBLG1CQUV2Q0MseUVBQVMsRUFGOEI7QUFBQSxNQUUvQ0MsSUFGK0MsY0FFL0NBLElBRitDOztBQUl2RCxzQkFDQztBQUFLLGFBQVMsRUFBRUMsMkRBQU0sQ0FBQ0gsT0FBdkI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUEsa0JBQVFBLE9BQU8sQ0FBQ0k7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUssZUFBUyxFQUFFRCwyREFBTSxDQUFDRSxrQkFBdkI7QUFBQSw4QkFDQyxxRUFBQyxnREFBRDtBQUFPLFlBQUksRUFBQyxHQUFaO0FBQUEsK0JBQ0U7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFDLGlCQUFUO0FBQTJCLGVBQUcsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQU1DLHFFQUFDLGlEQUFEO0FBQ0UsYUFBSyxFQUFJLEdBRFg7QUFFRSxjQUFNLEVBQUksR0FGWjtBQUdFLFdBQUcsRUFBSUwsT0FBTyxDQUFDTSxTQUhqQjtBQUlFLGlCQUFTLEVBQUc7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkQsZUFZQztBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBSTtBQUFBLGlCQUFNSixJQUFJLENBQUNGLE9BQUQsQ0FBVjtBQUFBLFNBQWpDO0FBQUEsK0JBQ0U7QUFBSyxhQUFHLEVBQUMsV0FBVDtBQUFxQixhQUFHLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQXFCRTtBQUFBLDhCQUNFO0FBQUEsa0JBQUtBLE9BQU8sQ0FBQ0k7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRztBQUFBLGtCQUFPSixPQUFPLENBQUNPO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZILGVBR0c7QUFBQSxrQkFBT1AsT0FBTyxDQUFDUTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISCxlQUlHO0FBQUEsa0JBQU9SLE9BQU8sQ0FBQ1M7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckJGLGVBNEJFO0FBQUssZUFBUyxFQUFJTiwyREFBTSxDQUFDTyxXQUF6QjtBQUFzQyw2QkFBdUIsRUFBSTtBQUFDQyxjQUFNLEVBQUVYLE9BQU8sQ0FBQ1U7QUFBakI7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWlDRDs7R0FyQ3VCWCxPO1VBRU5FLGlFOzs7S0FGTUYsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lcGlzb2Rlcy9bc2x1Z10uMWU5ZjdmMWUyODVmNmQ2YTQ1MjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdCwgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucyc7XHJcbmltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJztcclxuaW1wb3J0IHB0QnIgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL3B0LUJSJztcclxuaW1wb3J0IHsgY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2VwaXNvZGUubW9kdWxlLnNjc3MnXHJcbmltcG9ydCAgSW1hZ2UgIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7IFxyXG5pbXBvcnQgeyB1c2VQbGF5ZXIgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9QbGF5ZXJDb250ZXh0JztcclxuXHJcblxyXG5cclxudHlwZSBFcGlzb2RlID0ge1xyXG4gIGlkOiBzdHJpbmcsXHJcbiAgdGl0bGU6IHN0cmluZyxcclxuICB0aHVtYm5haWw6IHN0cmluZyxcclxuICBtZW1iZXJzOiBzdHJpbmcsXHJcbiAgcHVibGlzaGVkQXQ6IHN0cmluZyxcclxuICBkdXJhdGlvbjogbnVtYmVyLFxyXG4gIGR1cmF0aW9uQXNTdHJpbmc6IHN0cmluZyxcclxuICB1cmw6IHN0cmluZyxcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nLFxyXG59XHJcbnR5cGUgRXBpc29kZVByb3BzID0ge1xyXG4gIGVwaXNvZGU6RXBpc29kZTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFcGlzb2RlKHtlcGlzb2RlfSA6RXBpc29kZVByb3BzKSB7XHJcblxyXG4gIGNvbnN0IHsgcGxheX0gPSB1c2VQbGF5ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lcGlzb2RlfT5cclxuICAgICA8SGVhZD5cclxuICAgICAgIDx0aXRsZT57ZXBpc29kZS50aXRsZX08L3RpdGxlPlxyXG4gICAgIDwvSGVhZD5cclxuICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRodW1ibmFpbENvbnRhaW5lcn0+XHJcbiAgICAgIDxMaW5rICBocmVmPScvJz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2Fycm93LWxlZnQuc3ZnXCIgYWx0PVwiVm9sdGFyXCIvPiBcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8SW1hZ2UgXHJcbiAgICAgICAgd2lkdGggPSB7NzAwfVxyXG4gICAgICAgIGhlaWdodCA9IHsxNjB9XHJcbiAgICAgICAgc3JjID0ge2VwaXNvZGUudGh1bWJuYWlsfVxyXG4gICAgICAgIG9iamVjdEZpdCA9ICdjb3ZlcidcclxuICAgICAgLz5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljayA9eyAoKSA9PiBwbGF5KGVwaXNvZGUpfT5cclxuICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LnN2Z1wiIGFsdD1cIlRvY2FyIEVwaXPDs2Rpb1wiLz5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgPC9kaXY+XHJcblxyXG4gICAgIDxoZWFkZXI+XHJcbiAgICAgICA8aDE+e2VwaXNvZGUudGl0bGV9PC9oMT5cclxuICAgICAgICA8c3Bhbj57ZXBpc29kZS5tZW1iZXJzfTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj57ZXBpc29kZS5wdWJsaXNoZWRBdH08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+e2VwaXNvZGUuZHVyYXRpb259PC9zcGFuPlxyXG4gICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZXMuZGVzY3JpcHRpb259IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID0ge3tfX2h0bWw6IGVwaXNvZGUuZGVzY3JpcHRpb259fT5cclxuICAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jKCkgPT4gey8vcXVhbmRvIHVzYW1vcyBzc2cgY29tIGNyaWFjYW8gZGluYW1pY2EgZGUgcGFncyBwcmVjaXNhbW9zIHVzYXIgZXN0ZSBtZXRvZG9cclxuXHJcbiAgY29uc3Qge2RhdGF9ICA9IGF3YWl0IGFwaS5nZXQoJ2VwaXNvZGVzJyx7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgX2xpbWl0OiAxMixcclxuICAgICAgX3NvcnQ6ICdwdWJsaXNoZWRfYXQnLFxyXG4gICAgICBfb3JkZXI6ICdkZXNjJ1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwYXRocyA9IGRhdGEubWFwKGVwaXNvZGUgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgc2x1ZzplcGlzb2RlLmlkLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiAnYmxvY2tpbmcnXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnN0IHtzbHVnfSA9IGN0eC5wYXJhbXM7XHJcbiAgY29uc3Qge2RhdGF9ICA9IGF3YWl0IGFwaS5nZXQoYC9lcGlzb2Rlcy8ke3NsdWd9YCk7XHJcblxyXG4gIGNvbnN0IGVwaXNvZGUgPSB7XHJcbiAgICBpZDogZGF0YS5pZCxcclxuICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgIHRodW1ibmFpbDogZGF0YS50aHVtYm5haWwsXHJcbiAgICAgIG1lbWJlcnM6IGRhdGEubWVtYmVycyxcclxuICAgICAgcHVibGlzaGVkQXQ6IGZvcm1hdChwYXJzZUlTTyhkYXRhLnB1Ymxpc2hlZF9hdCksICdkIE1NTSB5eScsIHtsb2NhbGU6IHB0QnJ9ICksXHJcbiAgICAgIGR1cmF0aW9uOiBOdW1iZXIoZGF0YS5maWxlLmR1cmF0aW9uKSxcclxuICAgICAgZHVyYXRpb25Bc1N0cmluZzogY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKE51bWJlcihkYXRhLmZpbGUuZHVyYXRpb24pKSxcclxuICAgICAgZGVzY3JpcHRpb24gOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICB1cmw6IGRhdGEuZmlsZS51cmwsXHJcbiAgfVxyXG5cclxucmV0dXJue1xyXG4gIHByb3BzOiB7XHJcbiAgICBlcGlzb2RlXHJcbiAgfSxcclxuICByZXZhbGlkYXRlOiA2MCAqNjAgICoyNCBcclxufVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=