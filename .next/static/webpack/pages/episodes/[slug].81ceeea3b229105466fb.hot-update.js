webpackHotUpdate_N_E("pages/episodes/[slug]",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/*! exports provided: PlayerContext, PlayerContextProvider, usePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerContext", function() { return PlayerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerContextProvider", function() { return PlayerContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePlayer", function() { return usePlayer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\gabak\\OneDrive\\WorkPlace\\WebProjects\\podcastrnext\\src\\contexts\\PlayerContext.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();



var PlayerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function PlayerContextProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      episodeList = _useState[0],
      setEpisodeList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentEpisodeIndex = _useState2[0],
      setCurrentEpisodeIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isPlaying = _useState3[0],
      setIsPlaying = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isLooping = _useState4[0],
      setIsLooping = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isShuffling = _useState5[0],
      setIsShuffling = _useState5[1];

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function playList(list, index) {
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function toggleLoop() {
    setIsLooping(!isLooping);
  }

  function toggleShuffle() {
    setIsShuffling(!isShuffling);
  }

  function setPlayingState(state) {
    setIsPlaying(state);
  }

  var hasPrevious = currentEpisodeIndex - 1 > 0;
  var hasNext = currentEpisodeIndex + 1 < episodeList.length;

  function playNext() {
    var nextEpisodeIndex = currentEpisodeIndex + 1;

    if (hasNext) {
      setCurrentEpisodeIndex(nextEpisodeIndex);
    } else {
      return;
    }
  }

  function playPrevious() {
    var nextEpisodeIndex = currentEpisodeIndex - 1;

    if (hasPrevious) {
      setCurrentEpisodeIndex(nextEpisodeIndex);
    } else {
      return;
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PlayerContext.Provider, {
    value: {
      episodeList: episodeList,
      currentEpisodeIndex: currentEpisodeIndex,
      play: play,
      playList: playList,
      playNext: playNext,
      isLooping: isLooping,
      isShuffling: isShuffling,
      toggleShuffle: toggleShuffle,
      toggleLoop: toggleLoop,
      playPrevious: playPrevious,
      hasNext: hasNext,
      hasPrevious: hasPrevious,
      isPlaying: isPlaying,
      togglePlay: togglePlay,
      setPlayingState: setPlayingState
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 5
  }, this);
}

_s(PlayerContextProvider, "YSXWY8OfLfVxd5To+FHcHi+GAY0=");

_c = PlayerContextProvider;
var usePlayer = function usePlayer() {
  _s2();

  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(PlayerContext);
};

_s2(usePlayer, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var _c;

$RefreshReg$(_c, "PlayerContextProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZXBpc29kZXMvW3NsdWddLnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlBsYXllckNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJlcGlzb2RlTGlzdCIsInNldEVwaXNvZGVMaXN0IiwiY3VycmVudEVwaXNvZGVJbmRleCIsInNldEN1cnJlbnRFcGlzb2RlSW5kZXgiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJpc0xvb3BpbmciLCJzZXRJc0xvb3BpbmciLCJpc1NodWZmbGluZyIsInNldElzU2h1ZmZsaW5nIiwicGxheSIsImVwaXNvZGUiLCJwbGF5TGlzdCIsImxpc3QiLCJpbmRleCIsInRvZ2dsZVBsYXkiLCJ0b2dnbGVMb29wIiwidG9nZ2xlU2h1ZmZsZSIsInNldFBsYXlpbmdTdGF0ZSIsInN0YXRlIiwiaGFzUHJldmlvdXMiLCJoYXNOZXh0IiwibGVuZ3RoIiwicGxheU5leHQiLCJuZXh0RXBpc29kZUluZGV4IiwicGxheVByZXZpb3VzIiwidXNlUGxheWVyIiwidXNlQ29udGV4dCIsIkVwaXNvZGUiLCJzdHlsZXMiLCJ0aHVtYm5haWxDb250YWluZXIiLCJ0aHVtYm5haWwiLCJ0aXRsZSIsIm1lbWJlcnMiLCJwdWJsaXNoZWRBdCIsImR1cmF0aW9uIiwiZGVzY3JpcHRpb24iLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUE0Qk8sSUFBTUEsYUFBYSxnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQW5DO0FBTUEsU0FBU0MscUJBQVQsT0FBc0U7QUFBQTs7QUFBQSxNQUF0Q0MsUUFBc0MsUUFBdENBLFFBQXNDOztBQUFBLGtCQUNyQ0Msc0RBQVEsQ0FBQyxFQUFELENBRDZCO0FBQUEs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QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQWtCRTtBQUFBLDhCQUNFO0FBQUEsa0JBQUtBLE9BQU8sQ0FBQ3FCO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUc7QUFBQSxrQkFBT3JCLE9BQU8sQ0FBQ3NCO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZILGVBR0c7QUFBQSxrQkFBT3RCLE9BQU8sQ0FBQ3VCO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhILGVBSUc7QUFBQSxrQkFBT3ZCLE9BQU8sQ0FBQ3dCO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRixlQXlCRTtBQUFLLGVBQVMsRUFBSU4sMkRBQU0sQ0FBQ08sV0FBekI7QUFBc0MsNkJBQXVCLEVBQUk7QUFBQ0MsY0FBTSxFQUFFMUIsT0FBTyxDQUFDeUI7QUFBakI7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQThCRDs7R0FsQ3VCUixPO1VBRU5GLGlFOzs7S0FGTUUsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lcGlzb2Rlcy9bc2x1Z10uODFjZWVlYTNiMjI5MTA1NDY2ZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlfSBmcm9tICBcInJlYWN0XCIgIFxyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG50eXBlIEVwaXNvZGUgPSB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBtZW1iZXJzOiBzdHJpbmc7XHJcbiAgdGh1bWJuYWlsOiBzdHJpbmc7XHJcbiAgZHVyYXRpb246IG51bWJlcjtcclxuICB1cmw6IHN0cmluZztcclxufVxyXG5cclxudHlwZSBQbGF5ZXJDb250ZXh0RGF0YSA9IHtcclxuICBlcGlzb2RlTGlzdDogRXBpc29kZVtdXHJcbiAgY3VycmVudEVwaXNvZGVJbmRleDogbnVtYmVyO1xyXG4gIHBsYXk6IChlcGlzb2RlOiBFcGlzb2RlKSA9PnZvaWQ7XHJcbiAgaXNQbGF5aW5nOiBib29sZWFuO1xyXG4gIGlzTG9vcGluZzogYm9vbGVhbjtcclxuICBpc1NodWZmbGluZzogYm9vbGVhbjtcclxuICB0b2dnbGVQbGF5OiAoKSA9PiB2b2lkO1xyXG4gIHRvZ2dsZUxvb3A6ICgpPT4gdm9pZDtcclxuICB0b2dnbGVTaHVmZmxlOiAoKSA9PiB2b2lkO1xyXG4gIHNldFBsYXlpbmdTdGF0ZTogKHN0YXRlOmJvb2xlYW4pID0+dm9pZDtcclxuICBwbGF5TGlzdDogKGxpc3Q6IEVwaXNvZGVbXSwgaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxuICBwbGF5TmV4dDogKCkgPT4gdm9pZDtcclxuICBwbGF5UHJldmlvdXM6ICgpID0+IHZvaWQ7XHJcbiAgaGFzTmV4dDogYm9vbGVhbjtcclxuICBoYXNQcmV2aW91czogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBQbGF5ZXJDb250ZXh0RGF0YSk7XHJcblxyXG50eXBlIFBsYXllckNvbnRleHRQcm92aWRlclByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXJDb250ZXh0UHJvdmlkZXIoe2NoaWxkcmVufTogUGxheWVyQ29udGV4dFByb3ZpZGVyUHJvcHMpe1xyXG4gIGNvbnN0IFtlcGlzb2RlTGlzdCwgc2V0RXBpc29kZUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjdXJyZW50RXBpc29kZUluZGV4LCBzZXRDdXJyZW50RXBpc29kZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTG9vcGluZywgc2V0SXNMb29waW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNTaHVmZmxpbmcsIHNldElzU2h1ZmZsaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG5cclxuICBmdW5jdGlvbiBwbGF5KGVwaXNvZGUgOkVwaXNvZGUpe1xyXG4gICAgc2V0RXBpc29kZUxpc3QoW2VwaXNvZGVdKTtcclxuICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoMCk7XHJcbiAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGF5TGlzdChsaXN0OkVwaXNvZGVbXSwgaW5kZXg6bnVtYmVyKXtcclxuICAgIHNldEVwaXNvZGVMaXN0KGxpc3QpO1xyXG4gICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChpbmRleClcclxuICAgIHNldElzUGxheWluZyh0cnVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZVBsYXkoKXtcclxuICAgIHNldElzUGxheWluZyghaXNQbGF5aW5nKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZUxvb3AoKXtcclxuICAgIHNldElzTG9vcGluZyghaXNMb29waW5nKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZVNodWZmbGUoKXtcclxuICAgIHNldElzU2h1ZmZsaW5nKCFpc1NodWZmbGluZyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gc2V0UGxheWluZ1N0YXRlKHN0YXRlOmJvb2xlYW4pe1xyXG4gICAgc2V0SXNQbGF5aW5nKHN0YXRlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhc1ByZXZpb3VzID0gY3VycmVudEVwaXNvZGVJbmRleCAtIDEgPiAwO1xyXG4gIGNvbnN0IGhhc05leHQgPSBjdXJyZW50RXBpc29kZUluZGV4ICsgMSA8IGVwaXNvZGVMaXN0Lmxlbmd0aDtcclxuXHJcbiAgZnVuY3Rpb24gcGxheU5leHQoKXtcclxuICAgIGNvbnN0IG5leHRFcGlzb2RlSW5kZXggPSBjdXJyZW50RXBpc29kZUluZGV4ICsgMTtcclxuICAgIGlmKGhhc05leHQpe1xyXG4gICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KG5leHRFcGlzb2RlSW5kZXgpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXlQcmV2aW91cygpe1xyXG4gICAgY29uc3QgbmV4dEVwaXNvZGVJbmRleCA9IGN1cnJlbnRFcGlzb2RlSW5kZXggLSAxO1xyXG4gICAgaWYoaGFzUHJldmlvdXMpe1xyXG4gICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KG5leHRFcGlzb2RlSW5kZXgpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGxheWVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICAgIGVwaXNvZGVMaXN0LCBcclxuICAgICAgICBjdXJyZW50RXBpc29kZUluZGV4LFxyXG4gICAgICAgIHBsYXksIFxyXG4gICAgICAgIHBsYXlMaXN0LFxyXG4gICAgICAgIHBsYXlOZXh0LFxyXG4gICAgICAgIGlzTG9vcGluZyxcclxuICAgICAgICBpc1NodWZmbGluZyxcclxuICAgICAgICB0b2dnbGVTaHVmZmxlLFxyXG4gICAgICAgIHRvZ2dsZUxvb3AsXHJcbiAgICAgICAgcGxheVByZXZpb3VzLFxyXG4gICAgICAgIGhhc05leHQsXHJcbiAgICAgICAgaGFzUHJldmlvdXMsXHJcbiAgICAgICAgaXNQbGF5aW5nLFxyXG4gICAgICAgIHRvZ2dsZVBsYXksIFxyXG4gICAgICAgIHNldFBsYXlpbmdTdGF0ZX19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1BsYXllckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVBsYXllciA9ICgpID0+IHtcclxuICByZXR1cm4gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KTtcclxufSIsImltcG9ydCB7IGZvcm1hdCwgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucyc7XHJcbmltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJztcclxuaW1wb3J0IHB0QnIgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL3B0LUJSJztcclxuaW1wb3J0IHsgY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2VwaXNvZGUubW9kdWxlLnNjc3MnXHJcbmltcG9ydCAgSW1hZ2UgIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7IFxyXG5pbXBvcnQgeyB1c2VQbGF5ZXIgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9QbGF5ZXJDb250ZXh0JztcclxudHlwZSBFcGlzb2RlID0ge1xyXG4gIGlkOiBzdHJpbmcsXHJcbiAgdGl0bGU6IHN0cmluZyxcclxuICB0aHVtYm5haWw6IHN0cmluZyxcclxuICBtZW1iZXJzOiBzdHJpbmcsXHJcbiAgcHVibGlzaGVkQXQ6IHN0cmluZyxcclxuICBkdXJhdGlvbjogbnVtYmVyLFxyXG4gIGR1cmF0aW9uQXNTdHJpbmc6IHN0cmluZyxcclxuICB1cmw6IHN0cmluZyxcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nLFxyXG59XHJcbnR5cGUgRXBpc29kZVByb3BzID0ge1xyXG4gIGVwaXNvZGU6RXBpc29kZTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFcGlzb2RlKHtlcGlzb2RlfSA6RXBpc29kZVByb3BzKSB7XHJcblxyXG4gIGNvbnN0IHsgcGxheX0gPSB1c2VQbGF5ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lcGlzb2RlfT5cclxuICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRodW1ibmFpbENvbnRhaW5lcn0+XHJcbiAgICAgIDxMaW5rICBocmVmPScvJz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2Fycm93LWxlZnQuc3ZnXCIgYWx0PVwiVm9sdGFyXCIvPiBcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8SW1hZ2UgXHJcbiAgICAgICAgd2lkdGggPSB7NzAwfVxyXG4gICAgICAgIGhlaWdodCA9IHsxNjB9XHJcbiAgICAgICAgc3JjID0ge2VwaXNvZGUudGh1bWJuYWlsfVxyXG4gICAgICAgIG9iamVjdEZpdCA9ICdjb3ZlcidcclxuICAgICAgLz5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljayA9eyAoKSA9PiBwbGF5KGVwaXNvZGUpfT5cclxuICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LnN2Z1wiIGFsdD1cIlRvY2FyIEVwaXPDs2Rpb1wiLz5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgPC9kaXY+XHJcblxyXG4gICAgIDxoZWFkZXI+XHJcbiAgICAgICA8aDE+e2VwaXNvZGUudGl0bGV9PC9oMT5cclxuICAgICAgICA8c3Bhbj57ZXBpc29kZS5tZW1iZXJzfTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj57ZXBpc29kZS5wdWJsaXNoZWRBdH08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+e2VwaXNvZGUuZHVyYXRpb259PC9zcGFuPlxyXG4gICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZXMuZGVzY3JpcHRpb259IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID0ge3tfX2h0bWw6IGVwaXNvZGUuZGVzY3JpcHRpb259fT5cclxuICAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jKCkgPT4gey8vcXVhbmRvIHVzYW1vcyBzc2cgY29tIGNyaWFjYW8gZGluYW1pY2EgZGUgcGFncyBwcmVjaXNhbW9zIHVzYXIgZXN0ZSBtZXRvZG9cclxuXHJcbiAgY29uc3Qge2RhdGF9ICA9IGF3YWl0IGFwaS5nZXQoJ2VwaXNvZGVzJyx7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgX2xpbWl0OiAxMixcclxuICAgICAgX3NvcnQ6ICdwdWJsaXNoZWRfYXQnLFxyXG4gICAgICBfb3JkZXI6ICdkZXNjJ1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwYXRocyA9IGRhdGEubWFwKGVwaXNvZGUgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgc2x1ZzplcGlzb2RlLmlkLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiAnYmxvY2tpbmcnXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnN0IHtzbHVnfSA9IGN0eC5wYXJhbXM7XHJcbiAgY29uc3Qge2RhdGF9ICA9IGF3YWl0IGFwaS5nZXQoYC9lcGlzb2Rlcy8ke3NsdWd9YCk7XHJcblxyXG4gIGNvbnN0IGVwaXNvZGUgPSB7XHJcbiAgICBpZDogZGF0YS5pZCxcclxuICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgIHRodW1ibmFpbDogZGF0YS50aHVtYm5haWwsXHJcbiAgICAgIG1lbWJlcnM6IGRhdGEubWVtYmVycyxcclxuICAgICAgcHVibGlzaGVkQXQ6IGZvcm1hdChwYXJzZUlTTyhkYXRhLnB1Ymxpc2hlZF9hdCksICdkIE1NTSB5eScsIHtsb2NhbGU6IHB0QnJ9ICksXHJcbiAgICAgIGR1cmF0aW9uOiBOdW1iZXIoZGF0YS5maWxlLmR1cmF0aW9uKSxcclxuICAgICAgZHVyYXRpb25Bc1N0cmluZzogY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKE51bWJlcihkYXRhLmZpbGUuZHVyYXRpb24pKSxcclxuICAgICAgZGVzY3JpcHRpb24gOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICB1cmw6IGRhdGEuZmlsZS51cmwsXHJcbiAgfVxyXG5cclxucmV0dXJue1xyXG4gIHByb3BzOiB7XHJcbiAgICBlcGlzb2RlXHJcbiAgfSxcclxuICByZXZhbGlkYXRlOiA2MCAqNjAgICoyNCBcclxufVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=