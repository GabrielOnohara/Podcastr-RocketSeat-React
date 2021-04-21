webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.module.scss */ "./src/pages/home.module.scss");
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\gabak\\OneDrive\\WorkPlace\\WebProjects\\podcastrnext\\src\\pages\\index.tsx";
//spa
//ssr 
//ssg usaremos este modo pois nossa pagina nao se altera muitas vezes num dia(1 video por dia)
 // pacote usado apra reaproveitarmos pacotes da propria pagina e melhorar peformance do site



var __N_SSG = true;
function Home(_ref) {
  var _this = this;

  var latestEpisodes = _ref.latestEpisodes,
      allEpisodes = _ref.allEpisodes;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.homepage,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.latestEpisodes,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "\xDAltimos Lan\xE7amentos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: latestEpisodes.map(function (episode) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
              width: 192,
              height: 192,
              src: episode.thumbnail,
              alt: episode.title,
              objectFit: "cover"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.episodeDetails,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                href: "/episodes/".concat(episode.id),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: episode.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: episode.members
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: episode.publishedAt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: episode.durationAsString
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/play-green.svg",
                alt: "Tocar epis\xF3dio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 17
            }, _this)]
          }, episode.id, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.allEpisodes,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Todos os epis\xF3dios"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        cellSpacing: 0,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Podcast"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Integrantes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Data"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Dura\xE7\xE3o"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: allEpisodes.map(function (episode) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                style: {
                  width: 72
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
                  width: 120,
                  height: 120,
                  src: episode.thumbnail,
                  alt: episode.title,
                  objectFit: "cover"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                  href: "/episodes/".concat(episode.id),
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: episode.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 19
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: episode.members
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                style: {
                  width: 100
                },
                children: episode.publishedAt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: episode.durationAsString
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  type: "button",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/play-green.svg",
                    alt: "Tocar Epis\xF3dio"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, _this)]
            }, episode.id, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lIiwibGF0ZXN0RXBpc29kZXMiLCJhbGxFcGlzb2RlcyIsInN0eWxlcyIsImhvbWVwYWdlIiwibWFwIiwiZXBpc29kZSIsInRodW1ibmFpbCIsInRpdGxlIiwiZXBpc29kZURldGFpbHMiLCJpZCIsIm1lbWJlcnMiLCJwdWJsaXNoZWRBdCIsImR1cmF0aW9uQXNTdHJpbmciLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFOEI7O0FBRzlCO0FBS0E7O0FBbUJlLFNBQVNBLElBQVQsT0FBd0Q7QUFBQTs7QUFBQSxNQUF6Q0MsY0FBeUMsUUFBekNBLGNBQXlDO0FBQUEsTUFBekJDLFdBQXlCLFFBQXpCQSxXQUF5QjtBQUNyRSxzQkFDRTtBQUFLLGFBQVMsRUFBSUMsd0RBQU0sQ0FBQ0MsUUFBekI7QUFBQSw0QkFDRTtBQUFTLGVBQVMsRUFBSUQsd0RBQU0sQ0FBQ0YsY0FBN0I7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxrQkFDR0EsY0FBYyxDQUFDSSxHQUFmLENBQW1CLFVBQUNDLE9BQUQsRUFBYTtBQUMvQiw4QkFDRTtBQUFBLG9DQUNFLHFFQUFDLGlEQUFEO0FBQU8sbUJBQUssRUFBRyxHQUFmO0FBQ0Esb0JBQU0sRUFBRyxHQURUO0FBRUEsaUJBQUcsRUFBRUEsT0FBTyxDQUFDQyxTQUZiO0FBR0EsaUJBQUcsRUFBRUQsT0FBTyxDQUFDRSxLQUhiO0FBSUEsdUJBQVMsRUFBRztBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFRRTtBQUFLLHVCQUFTLEVBQUVMLHdEQUFNLENBQUNNLGNBQXZCO0FBQUEsc0NBQ0UscUVBQUMsZ0RBQUQ7QUFBTyxvQkFBSSxzQkFBZUgsT0FBTyxDQUFDSSxFQUF2QixDQUFYO0FBQUEsdUNBQ0E7QUFB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbEJBO0FBQUEsZUFBU1AsT0FBTyxDQUFDSSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBeUJELFdBMUJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErRUQ7S0FoRnVCVixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYzZWExN2E5OWYzOGFjMmIwZWQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL3NwYVxuLy9zc3IgXG4vL3NzZyB1c2FyZW1vcyBlc3RlIG1vZG8gcG9pcyBub3NzYSBwYWdpbmEgbmFvIHNlIGFsdGVyYSBtdWl0YXMgdmV6ZXMgbnVtIGRpYSgxIHZpZGVvIHBvciBkaWEpXG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7IC8vIHBhY290ZSB1c2FkbyBhcHJhIHJlYXByb3ZlaXRhcm1vcyBwYWNvdGVzIGRhIHByb3ByaWEgcGFnaW5hIGUgbWVsaG9yYXIgcGVmb3JtYW5jZSBkbyBzaXRlXG5pbXBvcnQgcHRCciBmcm9tICdkYXRlLWZucy9sb2NhbGUvcHQtQlInO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCAgSW1hZ2UgIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQge0dldFN0YXRpY1Byb3BzfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCJcbmltcG9ydCB7Zm9ybWF0LCBwYXJzZUlTT30gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9ob21lLm1vZHVsZS5zY3NzJztcblxudHlwZSBFcGlzb2RlID0ge1xuICBpZDogc3RyaW5nLFxuICB0aXRsZTogc3RyaW5nLFxuICB0aHVtYm5haWw6IHN0cmluZyxcbiAgbWVtYmVyczogc3RyaW5nLFxuICBwdWJsaXNoZWRBdDogc3RyaW5nLFxuICBkdXJhdGlvbjogbnVtYmVyLFxuICBkdXJhdGlvbkFzU3RyaW5nOiBzdHJpbmcsXG4gIGRlc2NyaXB0aW9uIDogc3RyaW5nLFxuICB1cmw6IHN0cmluZyxcbn1cbnR5cGUgSG9tZVByb3BzID0ge1xuICBsYXRlc3RFcGlzb2RlczogRXBpc29kZVtdO1xuICBhbGxFcGlzb2RlczogRXBpc29kZVtdO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe2xhdGVzdEVwaXNvZGVzLCBhbGxFcGlzb2Rlc306IEhvbWVQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy5ob21lcGFnZX0+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWUgPSB7c3R5bGVzLmxhdGVzdEVwaXNvZGVzfT5cbiAgICAgICAgPGgyPsOabHRpbW9zIExhbsOnYW1lbnRvczwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7bGF0ZXN0RXBpc29kZXMubWFwKChlcGlzb2RlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2VwaXNvZGUuaWR9PiBcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugd2lkdGggPXsxOTJ9IFxuICAgICAgICAgICAgICAgIGhlaWdodCA9ezE5Mn0gXG4gICAgICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnRodW1ibmFpbH0gXG4gICAgICAgICAgICAgICAgYWx0PXtlcGlzb2RlLnRpdGxlfVxuICAgICAgICAgICAgICAgIG9iamVjdEZpdCA9ICdjb3ZlcidcbiAgICAgICAgICAgICAgICAvPlxuICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXBpc29kZURldGFpbHN9PlxuICAgICAgICAgICAgICAgICAgPExpbmsgIGhyZWY9e2AvZXBpc29kZXMvJHtlcGlzb2RlLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgPGE+e2VwaXNvZGUudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPHA+e2VwaXNvZGUubWVtYmVyc308L3A+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5wdWJsaXNoZWRBdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5kdXJhdGlvbkFzU3RyaW5nfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1ncmVlbi5zdmdcIiBhbHQ9XCJUb2NhciBlcGlzw7NkaW9cIi8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWUgPSB7c3R5bGVzLmFsbEVwaXNvZGVzfT5cbiAgICAgICAgPGgyPlRvZG9zIG9zIGVwaXPDs2Rpb3M8L2gyPlxuXG4gICAgICAgIDx0YWJsZSBjZWxsU3BhY2luZz17MH0+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgPHRoPlBvZGNhc3Q8L3RoPlxuICAgICAgICAgICAgICA8dGg+SW50ZWdyYW50ZXM8L3RoPlxuICAgICAgICAgICAgICA8dGg+RGF0YTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5EdXJhw6fDo288L3RoPlxuICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7YWxsRXBpc29kZXMubWFwKGVwaXNvZGUgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2VwaXNvZGUuaWR9PlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOjcyfX0+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7MTIwfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSB7MTIwfVxuICAgICAgICAgICAgICAgICAgICBzcmMgPSB7ZXBpc29kZS50aHVtYm5haWx9XG4gICAgICAgICAgICAgICAgICAgIGFsdCA9IHtlcGlzb2RlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQgPSAnY292ZXInXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIDxMaW5rICBocmVmPXtgL2VwaXNvZGVzLyR7ZXBpc29kZS5pZH1gfT5cbiAgICAgICAgICAgICAgICAgIDxhPntlcGlzb2RlLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57ZXBpc29kZS5tZW1iZXJzfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6MTAwfX0+e2VwaXNvZGUucHVibGlzaGVkQXR9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2VwaXNvZGUuZHVyYXRpb25Bc1N0cmluZ308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LWdyZWVuLnN2Z1wiIGFsdD1cIlRvY2FyIEVwaXPDs2Rpb1wiLz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPjwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qge2RhdGF9ICA9IGF3YWl0IGFwaS5nZXQoJ2VwaXNvZGVzJyx7XG4gICAgcGFyYW1zOiB7XG4gICAgICBfbGltaXQ6IDEyLFxuICAgICAgX3NvcnQ6ICdwdWJsaXNoZWRfYXQnLFxuICAgICAgX29yZGVyOiAnZGVzYydcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGVwaXNvZGVzID0gZGF0YS5tYXAoZXBpc29kZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBlcGlzb2RlLmlkLFxuICAgICAgdGl0bGU6IGVwaXNvZGUudGl0bGUsXG4gICAgICB0aHVtYm5haWw6IGVwaXNvZGUudGh1bWJuYWlsLFxuICAgICAgbWVtYmVyczogZXBpc29kZS5tZW1iZXJzLFxuICAgICAgcHVibGlzaGVkQXQ6IGZvcm1hdChwYXJzZUlTTyhlcGlzb2RlLnB1Ymxpc2hlZF9hdCksICdkIE1NTSB5eScsIHtsb2NhbGU6IHB0QnJ9ICksXG4gICAgICBkdXJhdGlvbjogTnVtYmVyKGVwaXNvZGUuZmlsZS5kdXJhdGlvbiksXG4gICAgICBkdXJhdGlvbkFzU3RyaW5nOiBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcoTnVtYmVyKGVwaXNvZGUuZmlsZS5kdXJhdGlvbikpLFxuICAgICAgZGVzY3JpcHRpb24gOiBlcGlzb2RlLmRlc2NyaXB0aW9uLFxuICAgICAgdXJsOiBlcGlzb2RlLmZpbGUudXJsLFxuICAgIH1cbiAgICBcbiAgfSk7XG5cbiAgY29uc3QgbGF0ZXN0RXBpc29kZXMgPSBlcGlzb2Rlcy5zbGljZSgwLCAyKTtcbiAgY29uc3QgYWxsRXBpc29kZXMgPSBlcGlzb2Rlcy5zbGljZSgyLGVwaXNvZGVzLmxlbmd0aCk7XG4gIHJldHVybntcbiAgICBwcm9wczoge1xuICAgICAgbGF0ZXN0RXBpc29kZXMsXG4gICAgICBhbGxFcGlzb2Rlc1xuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogNjAgKjYwICAqOCAvLzggaG9yYXMoYSBjYWRhIDggaG9yYXMgYSBwYWdpbmEgdmFpIHNlciByZW5kZXJpemFkYSBub3ZhbWVudGUsIFxuICAgIC8vb3Ugc2VqYSwgbmEgcmVuZGVyaXphIHRvZGEgdmV6IHF1ZSB1bWEgbm92YSBwZXNzb2EgZW50cmFyIG5hIHBhZylcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=