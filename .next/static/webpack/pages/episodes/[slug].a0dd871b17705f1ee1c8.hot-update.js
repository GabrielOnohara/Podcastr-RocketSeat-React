webpackHotUpdate_N_E("pages/episodes/[slug]",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

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
/* harmony import */ var _episode_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./episode.module.scss */ "./src/pages/episodes/episode.module.scss");
/* harmony import */ var _episode_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_episode_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/PlayerContext */ "./src/contexts/PlayerContext.tsx");
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\gabak\\OneDrive\\WorkPlace\\WebProjects\\podcastrnext\\src\\pages\\episodes\\[slug].tsx",
    _s = $RefreshSig$();





var __N_SSG = true;
function Episode(_ref) {
  _s();

  var episode = _ref.episode;

  var _usePlayer = Object(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_4__["usePlayer"])(),
      play = _usePlayer.play;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _episode_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.episode,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _episode_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.thumbnailContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/arrow-left.svg",
            alt: "Voltar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        width: 700,
        height: 160,
        src: episode.thumbnail,
        objectFit: "cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
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
          lineNumber: 44,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 6
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: episode.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 8
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.members
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.publishedAt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.duration
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 6
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _episode_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.description,
      dangerouslySetInnerHTML: {
        __html: episode.description
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 6
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 4
  }, this);
}

_s(Episode, "nfuARMQWlWnHHyqBvirokTk6VeI=", false, function () {
  return [_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_4__["usePlayer"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VwaXNvZGVzL1tzbHVnXS50c3giXSwibmFtZXMiOlsiRXBpc29kZSIsImVwaXNvZGUiLCJ1c2VQbGF5ZXIiLCJwbGF5Iiwic3R5bGVzIiwidGh1bWJuYWlsQ29udGFpbmVyIiwidGh1bWJuYWlsIiwidGl0bGUiLCJtZW1iZXJzIiwicHVibGlzaGVkQXQiLCJkdXJhdGlvbiIsImRlc2NyaXB0aW9uIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFlZSxTQUFTQSxPQUFULE9BQTBDO0FBQUE7O0FBQUEsTUFBeEJDLE9BQXdCLFFBQXhCQSxPQUF3Qjs7QUFBQSxtQkFFdkNDLHlFQUFTLEVBRjhCO0FBQUEsTUFFL0NDLElBRitDLGNBRS9DQSxJQUYrQzs7QUFJdkQsc0JBQ0M7QUFBSyxhQUFTLEVBQUVDLDJEQUFNLENBQUNILE9BQXZCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVHLDJEQUFNLENBQUNDLGtCQUF2QjtBQUFBLDhCQUNDLHFFQUFDLGdEQUFEO0FBQU8sWUFBSSxFQUFDLEdBQVo7QUFBQSwrQkFDRTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUMsaUJBQVQ7QUFBMkIsZUFBRyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBTUMscUVBQUMsaURBQUQ7QUFDRSxhQUFLLEVBQUksR0FEWDtBQUVFLGNBQU0sRUFBSSxHQUZaO0FBR0UsV0FBRyxFQUFJSixPQUFPLENBQUNLLFNBSGpCO0FBSUUsaUJBQVMsRUFBRztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORCxlQVlDO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBTyxFQUFJO0FBQUEsaUJBQU1ILElBQUksQ0FBQ0YsT0FBRCxDQUFWO0FBQUEsU0FBakM7QUFBQSwrQkFDRTtBQUFLLGFBQUcsRUFBQyxXQUFUO0FBQXFCLGFBQUcsRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBa0JFO0FBQUEsOEJBQ0U7QUFBQSxrQkFBS0EsT0FBTyxDQUFDTTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVHO0FBQUEsa0JBQU9OLE9BQU8sQ0FBQ087QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkgsZUFHRztBQUFBLGtCQUFPUCxPQUFPLENBQUNRO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhILGVBSUc7QUFBQSxrQkFBT1IsT0FBTyxDQUFDUztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkYsZUF5QkU7QUFBSyxlQUFTLEVBQUlOLDJEQUFNLENBQUNPLFdBQXpCO0FBQXNDLDZCQUF1QixFQUFJO0FBQUNDLGNBQU0sRUFBRVgsT0FBTyxDQUFDVTtBQUFqQjtBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBOEJEOztHQWxDdUJYLE87VUFFTkUsaUU7OztLQUZNRixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VwaXNvZGVzL1tzbHVnXS5hMGRkODcxYjE3NzA1ZjFlZTFjOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0LCBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknO1xyXG5pbXBvcnQgcHRCciBmcm9tICdkYXRlLWZucy9sb2NhbGUvcHQtQlInO1xyXG5pbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscy9jb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZXBpc29kZS5tb2R1bGUuc2NzcydcclxuaW1wb3J0ICBJbWFnZSAgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJzsgXHJcbmltcG9ydCB7IHVzZVBsYXllciB9IGZyb20gJy4uLy4uL2NvbnRleHRzL1BsYXllckNvbnRleHQnO1xyXG50eXBlIEVwaXNvZGUgPSB7XHJcbiAgaWQ6IHN0cmluZyxcclxuICB0aXRsZTogc3RyaW5nLFxyXG4gIHRodW1ibmFpbDogc3RyaW5nLFxyXG4gIG1lbWJlcnM6IHN0cmluZyxcclxuICBwdWJsaXNoZWRBdDogc3RyaW5nLFxyXG4gIGR1cmF0aW9uOiBudW1iZXIsXHJcbiAgZHVyYXRpb25Bc1N0cmluZzogc3RyaW5nLFxyXG4gIHVybDogc3RyaW5nLFxyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbn1cclxudHlwZSBFcGlzb2RlUHJvcHMgPSB7XHJcbiAgZXBpc29kZTpFcGlzb2RlO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVwaXNvZGUoe2VwaXNvZGV9IDpFcGlzb2RlUHJvcHMpIHtcclxuXHJcbiAgY29uc3QgeyBwbGF5fSA9IHVzZVBsYXllcigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVwaXNvZGV9PlxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGh1bWJuYWlsQ29udGFpbmVyfT5cclxuICAgICAgPExpbmsgIGhyZWY9Jy8nPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvYXJyb3ctbGVmdC5zdmdcIiBhbHQ9XCJWb2x0YXJcIi8+IFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxJbWFnZSBcclxuICAgICAgICB3aWR0aCA9IHs3MDB9XHJcbiAgICAgICAgaGVpZ2h0ID0gezE2MH1cclxuICAgICAgICBzcmMgPSB7ZXBpc29kZS50aHVtYm5haWx9XHJcbiAgICAgICAgb2JqZWN0Rml0ID0gJ2NvdmVyJ1xyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrID17ICgpID0+IHBsYXkoZXBpc29kZSl9PlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL3BsYXkuc3ZnXCIgYWx0PVwiVG9jYXIgRXBpc8OzZGlvXCIvPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICA8L2Rpdj5cclxuXHJcbiAgICAgPGhlYWRlcj5cclxuICAgICAgIDxoMT57ZXBpc29kZS50aXRsZX08L2gxPlxyXG4gICAgICAgIDxzcGFuPntlcGlzb2RlLm1lbWJlcnN9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPntlcGlzb2RlLnB1Ymxpc2hlZEF0fTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj57ZXBpc29kZS5kdXJhdGlvbn08L3NwYW4+XHJcbiAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy5kZXNjcmlwdGlvbn0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgPSB7e19faHRtbDogZXBpc29kZS5kZXNjcmlwdGlvbn19PlxyXG4gICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMoKSA9PiB7Ly9xdWFuZG8gdXNhbW9zIHNzZyBjb20gY3JpYWNhbyBkaW5hbWljYSBkZSBwYWdzIHByZWNpc2Ftb3MgdXNhciBlc3RlIG1ldG9kb1xyXG5cclxuICBjb25zdCB7ZGF0YX0gID0gYXdhaXQgYXBpLmdldCgnZXBpc29kZXMnLHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBfbGltaXQ6IDEyLFxyXG4gICAgICBfc29ydDogJ3B1Ymxpc2hlZF9hdCcsXHJcbiAgICAgIF9vcmRlcjogJ2Rlc2MnXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHBhdGhzID0gZGF0YS5tYXAoZXBpc29kZSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBzbHVnOmVwaXNvZGUuaWQsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6ICdibG9ja2luZydcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3Qge3NsdWd9ID0gY3R4LnBhcmFtcztcclxuICBjb25zdCB7ZGF0YX0gID0gYXdhaXQgYXBpLmdldChgL2VwaXNvZGVzLyR7c2x1Z31gKTtcclxuXHJcbiAgY29uc3QgZXBpc29kZSA9IHtcclxuICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgICB0aXRsZTogZGF0YS50aXRsZSxcclxuICAgICAgdGh1bWJuYWlsOiBkYXRhLnRodW1ibmFpbCxcclxuICAgICAgbWVtYmVyczogZGF0YS5tZW1iZXJzLFxyXG4gICAgICBwdWJsaXNoZWRBdDogZm9ybWF0KHBhcnNlSVNPKGRhdGEucHVibGlzaGVkX2F0KSwgJ2QgTU1NIHl5Jywge2xvY2FsZTogcHRCcn0gKSxcclxuICAgICAgZHVyYXRpb246IE51bWJlcihkYXRhLmZpbGUuZHVyYXRpb24pLFxyXG4gICAgICBkdXJhdGlvbkFzU3RyaW5nOiBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcoTnVtYmVyKGRhdGEuZmlsZS5kdXJhdGlvbikpLFxyXG4gICAgICBkZXNjcmlwdGlvbiA6IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgIHVybDogZGF0YS5maWxlLnVybCxcclxuICB9XHJcblxyXG5yZXR1cm57XHJcbiAgcHJvcHM6IHtcclxuICAgIGVwaXNvZGVcclxuICB9LFxyXG4gIHJldmFsaWRhdGU6IDYwICo2MCAgKjI0IFxyXG59XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==