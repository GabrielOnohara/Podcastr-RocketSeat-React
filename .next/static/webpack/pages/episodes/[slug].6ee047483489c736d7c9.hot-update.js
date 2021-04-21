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
/* harmony import */ var _episode_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./episode.module.scss */ "./src/pages/episodes/episode.module.scss");
/* harmony import */ var _episode_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_episode_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\gabak\\OneDrive\\WorkPlace\\WebProjects\\podcastrnext\\src\\pages\\episodes\\[slug].tsx";



var __N_SSG = true;
function Episode(_ref) {
  var episode = _ref.episode;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _episode_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.episode,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _episode_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.thumbnailContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        children: [" //voltar pra home", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/arrow-left.svg",
            alt: "Voltar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        width: 700,
        height: 160,
        src: episode.thumbnail,
        objectFit: "cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/play.svg",
          alt: "Tocar Epis\xF3dio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 6
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: episode.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 8
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.members
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.publishedAt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.duration
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 6
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _episode_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.description,
      dangerouslySetInnerHTML: {
        __html: episode.description
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 6
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 4
  }, this);
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VwaXNvZGVzL1tzbHVnXS50c3giXSwibmFtZXMiOlsiRXBpc29kZSIsImVwaXNvZGUiLCJzdHlsZXMiLCJ0aHVtYm5haWxDb250YWluZXIiLCJ0aHVtYm5haWwiLCJ0aXRsZSIsIm1lbWJlcnMiLCJwdWJsaXNoZWRBdCIsImR1cmF0aW9uIiwiZGVzY3JpcHRpb24iLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBOztBQWVlLFNBQVNBLE9BQVQsT0FBMEM7QUFBQSxNQUF4QkMsT0FBd0IsUUFBeEJBLE9BQXdCO0FBRXZELHNCQUNDO0FBQUssYUFBUyxFQUFFQywyREFBTSxDQUFDRCxPQUF2QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFQywyREFBTSxDQUFDQyxrQkFBdkI7QUFBQSw4QkFDQyxxRUFBQyxnREFBRDtBQUFPLFlBQUksRUFBQyxHQUFaO0FBQUEsc0RBQ0U7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFDLGlCQUFUO0FBQTJCLGVBQUcsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQU1DLHFFQUFDLGlEQUFEO0FBQ0UsYUFBSyxFQUFJLEdBRFg7QUFFRSxjQUFNLEVBQUksR0FGWjtBQUdFLFdBQUcsRUFBSUYsT0FBTyxDQUFDRyxTQUhqQjtBQUlFLGlCQUFTLEVBQUc7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkQsZUFZQztBQUFBLCtCQUNFO0FBQUssYUFBRyxFQUFDLFdBQVQ7QUFBcUIsYUFBRyxFQUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFrQkU7QUFBQSw4QkFDRTtBQUFBLGtCQUFLSCxPQUFPLENBQUNJO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUc7QUFBQSxrQkFBT0osT0FBTyxDQUFDSztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSCxlQUdHO0FBQUEsa0JBQU9MLE9BQU8sQ0FBQ007QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEgsZUFJRztBQUFBLGtCQUFPTixPQUFPLENBQUNPO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRixlQXlCRTtBQUFLLGVBQVMsRUFBSU4sMkRBQU0sQ0FBQ08sV0FBekI7QUFBc0MsNkJBQXVCLEVBQUk7QUFBQ0MsY0FBTSxFQUFFVCxPQUFPLENBQUNRO0FBQWpCO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUE4QkQ7S0FoQ3VCVCxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VwaXNvZGVzL1tzbHVnXS42ZWUwNDc0ODM0ODljNzM2ZDdjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0LCBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknO1xyXG5pbXBvcnQgcHRCciBmcm9tICdkYXRlLWZucy9sb2NhbGUvcHQtQlInO1xyXG5pbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscy9jb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZXBpc29kZS5tb2R1bGUuc2NzcydcclxuaW1wb3J0ICBJbWFnZSAgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJzsgXHJcbnR5cGUgRXBpc29kZSA9IHtcclxuICBpZDogc3RyaW5nLFxyXG4gIHRpdGxlOiBzdHJpbmcsXHJcbiAgdGh1bWJuYWlsOiBzdHJpbmcsXHJcbiAgbWVtYmVyczogc3RyaW5nLFxyXG4gIHB1Ymxpc2hlZEF0OiBzdHJpbmcsXHJcbiAgZHVyYXRpb246IG51bWJlcixcclxuICBkdXJhdGlvbkFzU3RyaW5nOiBzdHJpbmcsXHJcbiAgdXJsOiBzdHJpbmcsXHJcbiAgZGVzY3JpcHRpb246IHN0cmluZyxcclxufVxyXG50eXBlIEVwaXNvZGVQcm9wcyA9IHtcclxuICBlcGlzb2RlOkVwaXNvZGU7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXBpc29kZSh7ZXBpc29kZX0gOkVwaXNvZGVQcm9wcykge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVwaXNvZGV9PlxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGh1bWJuYWlsQ29udGFpbmVyfT5cclxuICAgICAgPExpbmsgIGhyZWY9Jy8nPiAvL3ZvbHRhciBwcmEgaG9tZVxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvYXJyb3ctbGVmdC5zdmdcIiBhbHQ9XCJWb2x0YXJcIi8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPEltYWdlIFxyXG4gICAgICAgIHdpZHRoID0gezcwMH1cclxuICAgICAgICBoZWlnaHQgPSB7MTYwfVxyXG4gICAgICAgIHNyYyA9IHtlcGlzb2RlLnRodW1ibmFpbH1cclxuICAgICAgICBvYmplY3RGaXQgPSAnY292ZXInXHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b24+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvcGxheS5zdmdcIiBhbHQ9XCJUb2NhciBFcGlzw7NkaW9cIi8+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgIDwvZGl2PlxyXG5cclxuICAgICA8aGVhZGVyPlxyXG4gICAgICAgPGgxPntlcGlzb2RlLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgPHNwYW4+e2VwaXNvZGUubWVtYmVyc308L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+e2VwaXNvZGUucHVibGlzaGVkQXR9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPntlcGlzb2RlLmR1cmF0aW9ufTwvc3Bhbj5cclxuICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgPGRpdiBjbGFzc05hbWUgPSB7c3R5bGVzLmRlc2NyaXB0aW9ufSBkYW5nZXJvdXNseVNldElubmVySFRNTCA9IHt7X19odG1sOiBlcGlzb2RlLmRlc2NyaXB0aW9ufX0+XHJcbiAgICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzIDogR2V0U3RhdGljUGF0aHMgPSBhc3luYygpID0+IHsvL3F1YW5kbyB1c2Ftb3Mgc3NnIGNvbSBjcmlhY2FvIGRpbmFtaWNhIGRlIHBhZ3MgcHJlY2lzYW1vcyB1c2FyIGVzdGUgbWV0b2RvXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiAgW10sXHJcbiAgICBmYWxsYmFjazogJ2Jsb2NraW5nJ1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zdCB7c2x1Z30gPSBjdHgucGFyYW1zO1xyXG4gIGNvbnN0IHtkYXRhfSAgPSBhd2FpdCBhcGkuZ2V0KGAvZXBpc29kZXMvJHtzbHVnfWApO1xyXG5cclxuICBjb25zdCBlcGlzb2RlID0ge1xyXG4gICAgaWQ6IGRhdGEuaWQsXHJcbiAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxyXG4gICAgICB0aHVtYm5haWw6IGRhdGEudGh1bWJuYWlsLFxyXG4gICAgICBtZW1iZXJzOiBkYXRhLm1lbWJlcnMsXHJcbiAgICAgIHB1Ymxpc2hlZEF0OiBmb3JtYXQocGFyc2VJU08oZGF0YS5wdWJsaXNoZWRfYXQpLCAnZCBNTU0geXknLCB7bG9jYWxlOiBwdEJyfSApLFxyXG4gICAgICBkdXJhdGlvbjogTnVtYmVyKGRhdGEuZmlsZS5kdXJhdGlvbiksXHJcbiAgICAgIGR1cmF0aW9uQXNTdHJpbmc6IGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyhOdW1iZXIoZGF0YS5maWxlLmR1cmF0aW9uKSksXHJcbiAgICAgIGRlc2NyaXB0aW9uIDogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgdXJsOiBkYXRhLmZpbGUudXJsLFxyXG4gIH1cclxuXHJcbnJldHVybntcclxuICBwcm9wczoge1xyXG4gICAgZXBpc29kZVxyXG4gIH0sXHJcbiAgcmV2YWxpZGF0ZTogNjAgKjYwICAqMjQgXHJcbn1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9