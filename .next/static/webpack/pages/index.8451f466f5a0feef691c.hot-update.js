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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ "./src/pages/home.module.scss");
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_PalyerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/PalyerContext */ "./src/contexts/PalyerContext.ts");


var _jsxFileName = "C:\\Users\\gabak\\OneDrive\\WorkPlace\\WebProjects\\podcastrnext\\src\\pages\\index.tsx",
    _s = $RefreshSig$();

//spa
//ssr 
//ssg usaremos este modo pois nossa pagina nao se altera muitas vezes num dia(1 video por dia)
 // pacote usado apra reaproveitarmos pacotes da propria pagina e melhorar peformance do site





var __N_SSG = true;
function Home(_ref) {
  _s();

  var _this = this;

  var latestEpisodes = _ref.latestEpisodes,
      allEpisodes = _ref.allEpisodes;
  var player = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_PalyerContext__WEBPACK_IMPORTED_MODULE_5__["PlayerContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.homepage,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.latestEpisodes,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: ["\xDAltimos Lan\xE7amentos ", player]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: latestEpisodes.map(function (episode) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
              width: 192,
              height: 192,
              src: episode.thumbnail,
              alt: episode.title,
              objectFit: "cover"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.episodeDetails,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                href: "/episodes/".concat(episode.id),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: episode.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: episode.members
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: episode.publishedAt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: episode.durationAsString
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/play-green.svg",
                alt: "Tocar epis\xF3dio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 17
            }, _this)]
          }, episode.id, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.allEpisodes,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Todos os epis\xF3dios"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        cellSpacing: 0,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Podcast"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Integrantes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Data"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Dura\xE7\xE3o"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: allEpisodes.map(function (episode) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                style: {
                  width: 72
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  width: 120,
                  height: 120,
                  src: episode.thumbnail,
                  alt: episode.title,
                  objectFit: "cover"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                  href: "/episodes/".concat(episode.id),
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: episode.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 19
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: episode.members
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                style: {
                  width: 100
                },
                children: episode.publishedAt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: episode.durationAsString
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  type: "button",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/play-green.svg",
                    alt: "Tocar Epis\xF3dio"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, _this)]
            }, episode.id, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

_s(Home, "nDvtWoI6zcim4oiLqM9WdJzzEtQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lIiwibGF0ZXN0RXBpc29kZXMiLCJhbGxFcGlzb2RlcyIsInBsYXllciIsInVzZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0Iiwic3R5bGVzIiwiaG9tZXBhZ2UiLCJtYXAiLCJlcGlzb2RlIiwidGh1bWJuYWlsIiwidGl0bGUiLCJlcGlzb2RlRGV0YWlscyIsImlkIiwibWVtYmVycyIsInB1Ymxpc2hlZEF0IiwiZHVyYXRpb25Bc1N0cmluZyIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUU4Qjs7QUFFOUI7QUFDQTtBQUtBO0FBQ0E7O0FBa0JlLFNBQVNBLElBQVQsT0FBd0Q7QUFBQTs7QUFBQTs7QUFBQSxNQUF6Q0MsY0FBeUMsUUFBekNBLGNBQXlDO0FBQUEsTUFBekJDLFdBQXlCLFFBQXpCQSxXQUF5QjtBQUVyRSxNQUFNQyxNQUFNLEdBQUdDLHdEQUFVLENBQUNDLHFFQUFELENBQXpCO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUlDLHdEQUFNLENBQUNDLFFBQXpCO0FBQUEsNEJBQ0U7QUFBUyxlQUFTLEVBQUlELHdEQUFNLENBQUNMLGNBQTdCO0FBQUEsOEJBQ0U7QUFBQSxpREFBeUJFLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxrQkFDR0YsY0FBYyxDQUFDTyxHQUFmLENBQW1CLFVBQUNDLE9BQUQsRUFBYTtBQUMvQiw4QkFDRTtBQUFBLG9DQUNFLHFFQUFDLGlEQUFEO0FBQU8sbUJBQUssRUFBRyxHQUFmO0FBQ0Esb0JBQU0sRUFBRyxHQURUO0FBRUEsaUJBQUcsRUFBRUEsT0FBTyxDQUFDQyxTQUZiO0FBR0EsaUJBQUcsRUFBRUQsT0FBTyxDQUFDRSxLQUhiO0FBSUEsdUJBQVMsRUFBRztBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJB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QUE7QUFBQTtBQUFBO0FBQUEsdUJBakJBLGVBa0JBO0FBQUEsdUNBQ0U7QUFBUSxzQkFBSSxFQUFDLFFBQWI7QUFBQSx5Q0FDRTtBQUFLLHVCQUFHLEVBQUMsaUJBQVQ7QUFBMkIsdUJBQUcsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbEJBO0FBQUEsZUFBU1AsT0FBTyxDQUFDSSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBeUJELFdBMUJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErRUQ7O0dBbkZ1QmIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NDUxZjQ2NmY1YTBmZWVmNjkxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9zcGFcbi8vc3NyIFxuLy9zc2cgdXNhcmVtb3MgZXN0ZSBtb2RvIHBvaXMgbm9zc2EgcGFnaW5hIG5hbyBzZSBhbHRlcmEgbXVpdGFzIHZlemVzIG51bSBkaWEoMSB2aWRlbyBwb3IgZGlhKVxuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnOyAvLyBwYWNvdGUgdXNhZG8gYXByYSByZWFwcm92ZWl0YXJtb3MgcGFjb3RlcyBkYSBwcm9wcmlhIHBhZ2luYSBlIG1lbGhvcmFyIHBlZm9ybWFuY2UgZG8gc2l0ZVxuaW1wb3J0IHB0QnIgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL3B0LUJSJztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgIEltYWdlICBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHtHZXRTdGF0aWNQcm9wc30gZnJvbSBcIm5leHRcIlxuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiXG5pbXBvcnQge2Zvcm1hdCwgcGFyc2VJU099IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyB9IGZyb20gJy4uL3V0aWxzL2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaG9tZS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBQbGF5ZXJDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvUGFseWVyQ29udGV4dCc7XG5cbnR5cGUgRXBpc29kZSA9IHtcbiAgaWQ6IHN0cmluZyxcbiAgdGl0bGU6IHN0cmluZyxcbiAgdGh1bWJuYWlsOiBzdHJpbmcsXG4gIG1lbWJlcnM6IHN0cmluZyxcbiAgcHVibGlzaGVkQXQ6IHN0cmluZyxcbiAgZHVyYXRpb246IG51bWJlcixcbiAgZHVyYXRpb25Bc1N0cmluZzogc3RyaW5nLFxuICB1cmw6IHN0cmluZyxcbn1cbnR5cGUgSG9tZVByb3BzID0ge1xuICBsYXRlc3RFcGlzb2RlczogRXBpc29kZVtdO1xuICBhbGxFcGlzb2RlczogRXBpc29kZVtdO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe2xhdGVzdEVwaXNvZGVzLCBhbGxFcGlzb2Rlc306IEhvbWVQcm9wcykge1xuXG4gIGNvbnN0IHBsYXllciA9IHVzZUNvbnRleHQoUGxheWVyQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZXMuaG9tZXBhZ2V9PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lID0ge3N0eWxlcy5sYXRlc3RFcGlzb2Rlc30+XG4gICAgICAgIDxoMj7Dmmx0aW1vcyBMYW7Dp2FtZW50b3Mge3BsYXllcn08L2gyPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge2xhdGVzdEVwaXNvZGVzLm1hcCgoZXBpc29kZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICA8bGkga2V5PXtlcGlzb2RlLmlkfT4gXG4gICAgICAgICAgICAgICAgPEltYWdlIHdpZHRoID17MTkyfSBcbiAgICAgICAgICAgICAgICBoZWlnaHQgPXsxOTJ9IFxuICAgICAgICAgICAgICAgIHNyYz17ZXBpc29kZS50aHVtYm5haWx9IFxuICAgICAgICAgICAgICAgIGFsdD17ZXBpc29kZS50aXRsZX1cbiAgICAgICAgICAgICAgICBvYmplY3RGaXQgPSAnY292ZXInXG4gICAgICAgICAgICAgICAgLz5cbiAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVwaXNvZGVEZXRhaWxzfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rICBocmVmPXtgL2VwaXNvZGVzLyR7ZXBpc29kZS5pZH1gfT5cbiAgICAgICAgICAgICAgICAgIDxhPntlcGlzb2RlLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDxwPntlcGlzb2RlLm1lbWJlcnN9PC9wPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUucHVibGlzaGVkQXR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUuZHVyYXRpb25Bc1N0cmluZ308L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktZ3JlZW4uc3ZnXCIgYWx0PVwiVG9jYXIgZXBpc8OzZGlvXCIvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lID0ge3N0eWxlcy5hbGxFcGlzb2Rlc30+XG4gICAgICAgIDxoMj5Ub2RvcyBvcyBlcGlzw7NkaW9zPC9oMj5cblxuICAgICAgICA8dGFibGUgY2VsbFNwYWNpbmc9ezB9PlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Qb2RjYXN0PC90aD5cbiAgICAgICAgICAgICAgPHRoPkludGVncmFudGVzPC90aD5cbiAgICAgICAgICAgICAgPHRoPkRhdGE8L3RoPlxuICAgICAgICAgICAgICA8dGg+RHVyYcOnw6NvPC90aD5cbiAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge2FsbEVwaXNvZGVzLm1hcChlcGlzb2RlID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtlcGlzb2RlLmlkfT5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDo3Mn19PlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoID0gezEyMH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gezEyMH1cbiAgICAgICAgICAgICAgICAgICAgc3JjID0ge2VwaXNvZGUudGh1bWJuYWlsfVxuICAgICAgICAgICAgICAgICAgICBhbHQgPSB7ZXBpc29kZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0ID0gJ2NvdmVyJ1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8TGluayAgaHJlZj17YC9lcGlzb2Rlcy8ke2VwaXNvZGUuaWR9YH0+XG4gICAgICAgICAgICAgICAgICA8YT57ZXBpc29kZS50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2VwaXNvZGUubWVtYmVyc308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOjEwMH19PntlcGlzb2RlLnB1Ymxpc2hlZEF0fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntlcGlzb2RlLmR1cmF0aW9uQXNTdHJpbmd9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1ncmVlbi5zdmdcIiBhbHQ9XCJUb2NhciBFcGlzw7NkaW9cIi8+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj48L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHtkYXRhfSAgPSBhd2FpdCBhcGkuZ2V0KCdlcGlzb2Rlcycse1xuICAgIHBhcmFtczoge1xuICAgICAgX2xpbWl0OiAxMixcbiAgICAgIF9zb3J0OiAncHVibGlzaGVkX2F0JyxcbiAgICAgIF9vcmRlcjogJ2Rlc2MnXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBlcGlzb2RlcyA9IGRhdGEubWFwKGVwaXNvZGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZXBpc29kZS5pZCxcbiAgICAgIHRpdGxlOiBlcGlzb2RlLnRpdGxlLFxuICAgICAgdGh1bWJuYWlsOiBlcGlzb2RlLnRodW1ibmFpbCxcbiAgICAgIG1lbWJlcnM6IGVwaXNvZGUubWVtYmVycyxcbiAgICAgIHB1Ymxpc2hlZEF0OiBmb3JtYXQocGFyc2VJU08oZXBpc29kZS5wdWJsaXNoZWRfYXQpLCAnZCBNTU0geXknLCB7bG9jYWxlOiBwdEJyfSApLFxuICAgICAgZHVyYXRpb246IE51bWJlcihlcGlzb2RlLmZpbGUuZHVyYXRpb24pLFxuICAgICAgZHVyYXRpb25Bc1N0cmluZzogY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKE51bWJlcihlcGlzb2RlLmZpbGUuZHVyYXRpb24pKSxcbiAgICAgIHVybDogZXBpc29kZS5maWxlLnVybCxcbiAgICB9XG4gICAgXG4gIH0pO1xuXG4gIGNvbnN0IGxhdGVzdEVwaXNvZGVzID0gZXBpc29kZXMuc2xpY2UoMCwgMik7XG4gIGNvbnN0IGFsbEVwaXNvZGVzID0gZXBpc29kZXMuc2xpY2UoMixlcGlzb2Rlcy5sZW5ndGgpO1xuICByZXR1cm57XG4gICAgcHJvcHM6IHtcbiAgICAgIGxhdGVzdEVwaXNvZGVzLFxuICAgICAgYWxsRXBpc29kZXNcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDYwICo2MCAgKjggLy84IGhvcmFzKGEgY2FkYSA4IGhvcmFzIGEgcGFnaW5hIHZhaSBzZXIgcmVuZGVyaXphZGEgbm92YW1lbnRlLCBcbiAgICAvL291IHNlamEsIG5hIHJlbmRlcml6YSB0b2RhIHZleiBxdWUgdW1hIG5vdmEgcGVzc29hIGVudHJhciBuYSBwYWcpXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9