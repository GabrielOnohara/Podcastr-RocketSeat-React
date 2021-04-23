webpackHotUpdate_N_E("pages/index",{

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

    if (isShuffling) {
      var nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);
      setCurrentEpisodeIndex(nextEpisodeIndex);
    } else if (hasNext) {
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
    lineNumber: 100,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4Il0sIm5hbWVzIjpbIlBsYXllckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUGxheWVyQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImVwaXNvZGVMaXN0Iiwic2V0RXBpc29kZUxpc3QiLCJjdXJyZW50RXBpc29kZUluZGV4Iiwic2V0Q3VycmVudEVwaXNvZGVJbmRleCIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsImlzTG9vcGluZyIsInNldElzTG9vcGluZyIsImlzU2h1ZmZsaW5nIiwic2V0SXNTaHVmZmxpbmciLCJwbGF5IiwiZXBpc29kZSIsInBsYXlMaXN0IiwibGlzdCIsImluZGV4IiwidG9nZ2xlUGxheSIsInRvZ2dsZUxvb3AiLCJ0b2dnbGVTaHVmZmxlIiwic2V0UGxheWluZ1N0YXRlIiwic3RhdGUiLCJoYXNQcmV2aW91cyIsImhhc05leHQiLCJsZW5ndGgiLCJwbGF5TmV4dCIsIm5leHRFcGlzb2RlSW5kZXgiLCJuZXh0UmFuZG9tRXBpc29kZUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicGxheVByZXZpb3VzIiwidXNlUGxheWVyIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQTRCTyxJQUFNQSxhQUFhLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBbkM7QUFNQSxTQUFTQyxxQkFBVCxPQUFzRTtBQUFBOztBQUFBLE1BQXRDQyxRQUFzQyxRQUF0Q0EsUUFBc0M7O0FBQUEsa0JBQ3JDQyxzREFBUSxDQUFDLEVBQUQsQ0FENkI7QUFBQSxNQUNwRUMsV0FEb0U7QUFBQSxNQUN2REMsY0FEdUQ7O0FBQUEsbUJBRXJCRixzREFBUSxDQUFDLENBQUQsQ0FGYTtBQUFBLE1BRXBFRyxtQkFGb0U7QUFBQSxNQUUvQ0Msc0JBRitDOztBQUFBLG1CQUd6Q0os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QW5GZUQscUI7O0tBQUFBLHFCO0FBcUZULElBQU1pQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQzdCLFNBQU9DLHdEQUFVLENBQUNwQyxhQUFELENBQWpCO0FBQ0QsQ0FGTTs7SUFBTW1DLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTg4NTMyMDAyYmRiN2ZjZjNhNGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlfSBmcm9tICBcInJlYWN0XCIgIFxyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG50eXBlIEVwaXNvZGUgPSB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBtZW1iZXJzOiBzdHJpbmc7XHJcbiAgdGh1bWJuYWlsOiBzdHJpbmc7XHJcbiAgZHVyYXRpb246IG51bWJlcjtcclxuICB1cmw6IHN0cmluZztcclxufVxyXG5cclxudHlwZSBQbGF5ZXJDb250ZXh0RGF0YSA9IHtcclxuICBlcGlzb2RlTGlzdDogRXBpc29kZVtdXHJcbiAgY3VycmVudEVwaXNvZGVJbmRleDogbnVtYmVyO1xyXG4gIHBsYXk6IChlcGlzb2RlOiBFcGlzb2RlKSA9PnZvaWQ7XHJcbiAgaXNQbGF5aW5nOiBib29sZWFuO1xyXG4gIGlzTG9vcGluZzogYm9vbGVhbjtcclxuICBpc1NodWZmbGluZzogYm9vbGVhbjtcclxuICB0b2dnbGVQbGF5OiAoKSA9PiB2b2lkO1xyXG4gIHRvZ2dsZUxvb3A6ICgpPT4gdm9pZDtcclxuICB0b2dnbGVTaHVmZmxlOiAoKSA9PiB2b2lkO1xyXG4gIHNldFBsYXlpbmdTdGF0ZTogKHN0YXRlOmJvb2xlYW4pID0+dm9pZDtcclxuICBwbGF5TGlzdDogKGxpc3Q6IEVwaXNvZGVbXSwgaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxuICBwbGF5TmV4dDogKCkgPT4gdm9pZDtcclxuICBwbGF5UHJldmlvdXM6ICgpID0+IHZvaWQ7XHJcbiAgaGFzTmV4dDogYm9vbGVhbjtcclxuICBoYXNQcmV2aW91czogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBQbGF5ZXJDb250ZXh0RGF0YSk7XHJcblxyXG50eXBlIFBsYXllckNvbnRleHRQcm92aWRlclByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXJDb250ZXh0UHJvdmlkZXIoe2NoaWxkcmVufTogUGxheWVyQ29udGV4dFByb3ZpZGVyUHJvcHMpe1xyXG4gIGNvbnN0IFtlcGlzb2RlTGlzdCwgc2V0RXBpc29kZUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjdXJyZW50RXBpc29kZUluZGV4LCBzZXRDdXJyZW50RXBpc29kZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTG9vcGluZywgc2V0SXNMb29waW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNTaHVmZmxpbmcsIHNldElzU2h1ZmZsaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG5cclxuICBmdW5jdGlvbiBwbGF5KGVwaXNvZGUgOkVwaXNvZGUpe1xyXG4gICAgc2V0RXBpc29kZUxpc3QoW2VwaXNvZGVdKTtcclxuICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoMCk7XHJcbiAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGF5TGlzdChsaXN0OkVwaXNvZGVbXSwgaW5kZXg6bnVtYmVyKXtcclxuICAgIHNldEVwaXNvZGVMaXN0KGxpc3QpO1xyXG4gICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChpbmRleClcclxuICAgIHNldElzUGxheWluZyh0cnVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZVBsYXkoKXtcclxuICAgIHNldElzUGxheWluZyghaXNQbGF5aW5nKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZUxvb3AoKXtcclxuICAgIHNldElzTG9vcGluZyghaXNMb29waW5nKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZVNodWZmbGUoKXtcclxuICAgIHNldElzU2h1ZmZsaW5nKCFpc1NodWZmbGluZyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gc2V0UGxheWluZ1N0YXRlKHN0YXRlOmJvb2xlYW4pe1xyXG4gICAgc2V0SXNQbGF5aW5nKHN0YXRlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhc1ByZXZpb3VzID0gY3VycmVudEVwaXNvZGVJbmRleCAtIDEgPiAwO1xyXG4gIGNvbnN0IGhhc05leHQgPSBjdXJyZW50RXBpc29kZUluZGV4ICsgMSA8IGVwaXNvZGVMaXN0Lmxlbmd0aDtcclxuXHJcbiAgZnVuY3Rpb24gcGxheU5leHQoKXtcclxuICAgIGNvbnN0IG5leHRFcGlzb2RlSW5kZXggPSBjdXJyZW50RXBpc29kZUluZGV4ICsgMTtcclxuICAgIGlmKGlzU2h1ZmZsaW5nKXtcclxuICAgICAgY29uc3QgbmV4dFJhbmRvbUVwaXNvZGVJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVwaXNvZGVMaXN0Lmxlbmd0aCk7XHJcbiAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgobmV4dEVwaXNvZGVJbmRleCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGhhc05leHQpe1xyXG4gICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KG5leHRFcGlzb2RlSW5kZXgpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXlQcmV2aW91cygpe1xyXG4gICAgY29uc3QgbmV4dEVwaXNvZGVJbmRleCA9IGN1cnJlbnRFcGlzb2RlSW5kZXggLSAxO1xyXG4gICAgaWYoaGFzUHJldmlvdXMpe1xyXG4gICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KG5leHRFcGlzb2RlSW5kZXgpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGxheWVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICAgIGVwaXNvZGVMaXN0LCBcclxuICAgICAgICBjdXJyZW50RXBpc29kZUluZGV4LFxyXG4gICAgICAgIHBsYXksIFxyXG4gICAgICAgIHBsYXlMaXN0LFxyXG4gICAgICAgIHBsYXlOZXh0LFxyXG4gICAgICAgIGlzTG9vcGluZyxcclxuICAgICAgICBpc1NodWZmbGluZyxcclxuICAgICAgICB0b2dnbGVTaHVmZmxlLFxyXG4gICAgICAgIHRvZ2dsZUxvb3AsXHJcbiAgICAgICAgcGxheVByZXZpb3VzLFxyXG4gICAgICAgIGhhc05leHQsXHJcbiAgICAgICAgaGFzUHJldmlvdXMsXHJcbiAgICAgICAgaXNQbGF5aW5nLFxyXG4gICAgICAgIHRvZ2dsZVBsYXksIFxyXG4gICAgICAgIHNldFBsYXlpbmdTdGF0ZX19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1BsYXllckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVBsYXllciA9ICgpID0+IHtcclxuICByZXR1cm4gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=