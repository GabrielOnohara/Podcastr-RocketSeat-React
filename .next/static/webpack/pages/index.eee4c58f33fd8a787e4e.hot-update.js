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
/* harmony import */ var C_Users_gabak_OneDrive_WorkPlace_WebProjects_podcastrnext_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.module.scss */ "./src/pages/home.module.scss");
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/PlayerContext */ "./src/contexts/PlayerContext.tsx");



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

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_6__["PlayerContext"]),
      playList = _useContext.playList;

  var episodeList = [].concat(Object(C_Users_gabak_OneDrive_WorkPlace_WebProjects_podcastrnext_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(latestEpisodes), Object(C_Users_gabak_OneDrive_WorkPlace_WebProjects_podcastrnext_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(allEpisodes));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.homepage,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.latestEpisodes,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "\xDAltimos Lan\xE7amentos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: latestEpisodes.map(function (episode, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
              width: 192,
              height: 192,
              src: episode.thumbnail,
              alt: episode.title,
              objectFit: "cover"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.episodeDetails,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/episodes/".concat(episode.id),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: episode.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: episode.members
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: episode.publishedAt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: episode.durationAsString
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              onClick: function onClick() {
                return playList(episodeList, index);
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/play-green.svg",
                alt: "Tocar epis\xF3dio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 17
            }, _this)]
          }, episode.id, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.allEpisodes,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Todos os epis\xF3dios"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        cellSpacing: 0,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Podcast"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Integrantes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Data"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Dura\xE7\xE3o"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: allEpisodes.map(function (episode) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                style: {
                  width: 72
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  width: 120,
                  height: 120,
                  src: episode.thumbnail,
                  alt: episode.title,
                  objectFit: "cover"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                  href: "/episodes/".concat(episode.id),
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: episode.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 19
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: episode.members
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                style: {
                  width: 100
                },
                children: episode.publishedAt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: episode.durationAsString
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  type: "button",
                  onClick: function onClick() {
                    return play(episode);
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/play-green.svg",
                    alt: "Tocar Epis\xF3dio"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 17
              }, _this)]
            }, episode.id, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

_s(Home, "G/K7qb//Ni2+F7PMMLi/DUr8PBM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lIiwibGF0ZXN0RXBpc29kZXMiLCJhbGxFcGlzb2RlcyIsInVzZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0IiwicGxheUxpc3QiLCJlcGlzb2RlTGlzdCIsInN0eWxlcyIsImhvbWVwYWdlIiwibWFwIiwiZXBpc29kZSIsImluZGV4IiwidGh1bWJuYWlsIiwidGl0bGUiLCJlcGlzb2RlRGV0YWlscyIsImlkIiwibWVtYmVycyIsInB1Ymxpc2hlZEF0IiwiZHVyYXRpb25Bc1N0cmluZyIsIndpZHRoIiwicGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUU4Qjs7QUFFOUI7QUFDQTtBQUtBO0FBQ0E7O0FBa0JlLFNBQVNBLElBQVQsT0FBd0Q7QUFBQTs7QUFBQTs7QUFBQSxNQUF6Q0MsY0FBeUMsUUFBekNBLGNBQXlDO0FBQUEsTUFBekJDLFdBQXlCLFFBQXpCQSxXQUF5Qjs7QUFBQSxvQkFFbERDLHdEQUFVLENBQUNDLHFFQUFELENBRndDO0FBQUEsTUFFOURDLFFBRjhELGVBRTlEQSxRQUY4RDs7QUFHckUsTUFBTUMsV0FBVyxrTUFBUUwsY0FBUix3TEFBMkJDLFdBQTNCLEVBQWpCO0FBR0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUlLLHdEQUFNLENBQUNDLFFBQXpCO0FBQUEsNEJBQ0U7QUFBUyxlQUFTLEVBQUlELHdEQUFNLENBQUNOLGNBQTdCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsa0JBQ0dBLGNBQWMsQ0FBQ1EsR0FBZixDQUFtQixVQUFDQyxPQUFELEVBQVVDLEtBQVYsRUFBb0I7QUFDdEMsOEJBQ0U7QUFBQSxvQ0FDRSxxRUFBQyxpREFBRDtBQUFPLG1CQUFLLEVBQUcsR0FBZjtBQUNBLG9CQUFNLEVBQUcsR0FEVDtBQUVBLGlC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O0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFmQSxlQWdCQTtBQUFJLHFCQUFLLEVBQUU7QUFBQ0csdUJBQUssRUFBQztBQUFQLGlCQUFYO0FBQUEsMEJBQXlCVCxPQUFPLENBQUNPO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBaEJBLGVBaUJBO0FBQUEsMEJBQUtQLE9BQU8sQ0FBQ1E7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWpCQSxlQWtCQTtBQUFBLHVDQUNFO0FBQVEsc0JBQUksRUFBQyxRQUFiO0FBQXNCLHlCQUFPLEVBQUU7QUFBQSwyQkFBTUUsSUFBSSxDQUFDVixPQUFELENBQVY7QUFBQSxtQkFBL0I7QUFBQSx5Q0FDRTtBQUFLLHVCQUFHLEVBQUMsaUJBQVQ7QUFBMkIsdUJBQUcsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbEJBO0FBQUEsZUFBU0EsT0FBTyxDQUFDSyxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBeUJELFdBMUJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErRUQ7O0dBckZ1QmYsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lZWU0YzU4ZjMzZmQ4YTc4N2U0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9zcGFcbi8vc3NyIFxuLy9zc2cgdXNhcmVtb3MgZXN0ZSBtb2RvIHBvaXMgbm9zc2EgcGFnaW5hIG5hbyBzZSBhbHRlcmEgbXVpdGFzIHZlemVzIG51bSBkaWEoMSB2aWRlbyBwb3IgZGlhKVxuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnOyAvLyBwYWNvdGUgdXNhZG8gYXByYSByZWFwcm92ZWl0YXJtb3MgcGFjb3RlcyBkYSBwcm9wcmlhIHBhZ2luYSBlIG1lbGhvcmFyIHBlZm9ybWFuY2UgZG8gc2l0ZVxuaW1wb3J0IHB0QnIgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL3B0LUJSJztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgIEltYWdlICBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHtHZXRTdGF0aWNQcm9wc30gZnJvbSBcIm5leHRcIlxuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiXG5pbXBvcnQge2Zvcm1hdCwgcGFyc2VJU099IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyB9IGZyb20gJy4uL3V0aWxzL2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaG9tZS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBQbGF5ZXJDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvUGxheWVyQ29udGV4dCc7XG5cbnR5cGUgRXBpc29kZSA9IHtcbiAgaWQ6IHN0cmluZyxcbiAgdGl0bGU6IHN0cmluZyxcbiAgdGh1bWJuYWlsOiBzdHJpbmcsXG4gIG1lbWJlcnM6IHN0cmluZyxcbiAgcHVibGlzaGVkQXQ6IHN0cmluZyxcbiAgZHVyYXRpb246IG51bWJlcixcbiAgZHVyYXRpb25Bc1N0cmluZzogc3RyaW5nLFxuICB1cmw6IHN0cmluZyxcbn1cbnR5cGUgSG9tZVByb3BzID0ge1xuICBsYXRlc3RFcGlzb2RlczogRXBpc29kZVtdO1xuICBhbGxFcGlzb2RlczogRXBpc29kZVtdO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe2xhdGVzdEVwaXNvZGVzLCBhbGxFcGlzb2Rlc306IEhvbWVQcm9wcykge1xuXG4gIGNvbnN0IHtwbGF5TGlzdH0gPSB1c2VDb250ZXh0KFBsYXllckNvbnRleHQpO1xuICBjb25zdCBlcGlzb2RlTGlzdCAgPSBbLi4ubGF0ZXN0RXBpc29kZXMsIC4uLmFsbEVwaXNvZGVzXTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWUgPSB7c3R5bGVzLmhvbWVwYWdlfT5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZSA9IHtzdHlsZXMubGF0ZXN0RXBpc29kZXN9PlxuICAgICAgICA8aDI+w5psdGltb3MgTGFuw6dhbWVudG9zPC9oMj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtsYXRlc3RFcGlzb2Rlcy5tYXAoKGVwaXNvZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2VwaXNvZGUuaWR9PiBcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugd2lkdGggPXsxOTJ9IFxuICAgICAgICAgICAgICAgIGhlaWdodCA9ezE5Mn0gXG4gICAgICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnRodW1ibmFpbH0gXG4gICAgICAgICAgICAgICAgYWx0PXtlcGlzb2RlLnRpdGxlfVxuICAgICAgICAgICAgICAgIG9iamVjdEZpdCA9ICdjb3ZlcidcbiAgICAgICAgICAgICAgICAvPlxuICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXBpc29kZURldGFpbHN9PlxuICAgICAgICAgICAgICAgICAgPExpbmsgIGhyZWY9e2AvZXBpc29kZXMvJHtlcGlzb2RlLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgPGE+e2VwaXNvZGUudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPHA+e2VwaXNvZGUubWVtYmVyc308L3A+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5wdWJsaXNoZWRBdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5kdXJhdGlvbkFzU3RyaW5nfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHBsYXlMaXN0KGVwaXNvZGVMaXN0LCBpbmRleCl9PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1ncmVlbi5zdmdcIiBhbHQ9XCJUb2NhciBlcGlzw7NkaW9cIi8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWUgPSB7c3R5bGVzLmFsbEVwaXNvZGVzfT5cbiAgICAgICAgPGgyPlRvZG9zIG9zIGVwaXPDs2Rpb3M8L2gyPlxuXG4gICAgICAgIDx0YWJsZSBjZWxsU3BhY2luZz17MH0+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgPHRoPlBvZGNhc3Q8L3RoPlxuICAgICAgICAgICAgICA8dGg+SW50ZWdyYW50ZXM8L3RoPlxuICAgICAgICAgICAgICA8dGg+RGF0YTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5EdXJhw6fDo288L3RoPlxuICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7YWxsRXBpc29kZXMubWFwKGVwaXNvZGUgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2VwaXNvZGUuaWR9PlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOjcyfX0+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7MTIwfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSB7MTIwfVxuICAgICAgICAgICAgICAgICAgICBzcmMgPSB7ZXBpc29kZS50aHVtYm5haWx9XG4gICAgICAgICAgICAgICAgICAgIGFsdCA9IHtlcGlzb2RlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQgPSAnY292ZXInXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIDxMaW5rICBocmVmPXtgL2VwaXNvZGVzLyR7ZXBpc29kZS5pZH1gfT5cbiAgICAgICAgICAgICAgICAgIDxhPntlcGlzb2RlLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57ZXBpc29kZS5tZW1iZXJzfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6MTAwfX0+e2VwaXNvZGUucHVibGlzaGVkQXR9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2VwaXNvZGUuZHVyYXRpb25Bc1N0cmluZ308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHBsYXkoZXBpc29kZSl9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LWdyZWVuLnN2Z1wiIGFsdD1cIlRvY2FyIEVwaXPDs2Rpb1wiLz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPjwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qge2RhdGF9ICA9IGF3YWl0IGFwaS5nZXQoJ2VwaXNvZGVzJyx7XG4gICAgcGFyYW1zOiB7XG4gICAgICBfbGltaXQ6IDEyLFxuICAgICAgX3NvcnQ6ICdwdWJsaXNoZWRfYXQnLFxuICAgICAgX29yZGVyOiAnZGVzYydcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGVwaXNvZGVzID0gZGF0YS5tYXAoZXBpc29kZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBlcGlzb2RlLmlkLFxuICAgICAgdGl0bGU6IGVwaXNvZGUudGl0bGUsXG4gICAgICB0aHVtYm5haWw6IGVwaXNvZGUudGh1bWJuYWlsLFxuICAgICAgbWVtYmVyczogZXBpc29kZS5tZW1iZXJzLFxuICAgICAgcHVibGlzaGVkQXQ6IGZvcm1hdChwYXJzZUlTTyhlcGlzb2RlLnB1Ymxpc2hlZF9hdCksICdkIE1NTSB5eScsIHtsb2NhbGU6IHB0QnJ9ICksXG4gICAgICBkdXJhdGlvbjogTnVtYmVyKGVwaXNvZGUuZmlsZS5kdXJhdGlvbiksXG4gICAgICBkdXJhdGlvbkFzU3RyaW5nOiBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcoTnVtYmVyKGVwaXNvZGUuZmlsZS5kdXJhdGlvbikpLFxuICAgICAgdXJsOiBlcGlzb2RlLmZpbGUudXJsLFxuICAgIH1cbiAgICBcbiAgfSk7XG5cbiAgY29uc3QgbGF0ZXN0RXBpc29kZXMgPSBlcGlzb2Rlcy5zbGljZSgwLCAyKTtcbiAgY29uc3QgYWxsRXBpc29kZXMgPSBlcGlzb2Rlcy5zbGljZSgyLGVwaXNvZGVzLmxlbmd0aCk7XG4gIHJldHVybntcbiAgICBwcm9wczoge1xuICAgICAgbGF0ZXN0RXBpc29kZXMsXG4gICAgICBhbGxFcGlzb2Rlc1xuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogNjAgKjYwICAqOCAvLzggaG9yYXMoYSBjYWRhIDggaG9yYXMgYSBwYWdpbmEgdmFpIHNlciByZW5kZXJpemFkYSBub3ZhbWVudGUsIFxuICAgIC8vb3Ugc2VqYSwgbmEgcmVuZGVyaXphIHRvZGEgdmV6IHF1ZSB1bWEgbm92YSBwZXNzb2EgZW50cmFyIG5hIHBhZylcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=