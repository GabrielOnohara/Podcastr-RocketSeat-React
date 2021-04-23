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

  function clearPlayState() {
    setEpisodeList([]);
    setCurrentEpisodeIndex(0);
  }

  function setPlayingState(state) {
    setIsPlaying(state);
  }

  var hasPrevious = currentEpisodeIndex - 1 > 0;
  var hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length;

  function playNext() {
    var nextEpisodeIndex = currentEpisodeIndex + 1;

    if (isShuffling) {
      var nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);
      setCurrentEpisodeIndex(nextRandomEpisodeIndex);
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
      setPlayingState: setPlayingState,
      clearPlayState: clearPlayState
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 105,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4Il0sIm5hbWVzIjpbIlBsYXllckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUGxheWVyQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImVwaXNvZGVMaXN0Iiwic2V0RXBpc29kZUxpc3QiLCJjdXJyZW50RXBpc29kZUluZGV4Iiwic2V0Q3VycmVudEVwaXNvZGVJbmRleCIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsImlzTG9vcGluZyIsInNldElzTG9vcGluZyIsImlzU2h1ZmZsaW5nIiwic2V0SXNTaHVmZmxpbmciLCJwbGF5IiwiZXBpc29kZSIsInBsYXlMaXN0IiwibGlzdCIsImluZGV4IiwidG9nZ2xlUGxheSIsInRvZ2dsZUxvb3AiLCJ0b2dnbGVTaHVmZmxlIiwiY2xlYXJQbGF5U3RhdGUiLCJzZXRQbGF5aW5nU3RhdGUiLCJzdGF0ZSIsImhhc1ByZXZpb3VzIiwiaGFzTmV4dCIsImxlbmd0aCIsInBsYXlOZXh0IiwibmV4dEVwaXNvZGVJbmRleCIsIm5leHRSYW5kb21FcGlzb2RlSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwbGF5UHJldmlvdXMiLCJ1c2VQbGF5ZXIiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBNkJPLElBQU1BLGFBQWEsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUFuQztBQU1BLFNBQVNDLHFCQUFULE9BQXNFO0FBQUE7O0FBQUEsTUFBdENDLFFBQXNDLFFBQXRDQSxRQUFzQzs7QUFBQSxrQkFDckNDLHNEQUFRLENBQUMsRUFBRCxDQUQ2QjtBQUFBLE1BQ3BFQyxXQURvRTtBQUFBLE1BQ3ZEQyxjQUR1RDs7QUFBQSxtQkFFckJGLHNEQUFRLENBQUMsQ0FBRCxDQUZhO0FBQUEsTUFFcEVHLG1CQUZvRTtBQUFBLE1BRS9DQyxzQkFG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U0FiMkI7QUFjM0JXLGdCQUFVLEVBQVZBLFVBZDJCO0FBZTNCSSxxQkFBZSxFQUFmQSxlQWYyQjtBQWdCM0JELG9CQUFjLEVBQWRBO0FBaEIyQixLQUEvQjtBQUFBLGNBa0JHcEI7QUFsQkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0JEOztHQXpGZUQscUI7O0tBQUFBLHFCO0FBMkZULElBQU1rQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQzdCLFNBQU9DLHdEQUFVLENBQUNyQyxhQUFELENBQWpCO0FBQ0QsQ0FGTTs7SUFBTW9DLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXBpc29kZXMvW3NsdWddLjc1YzlhMDJmYjZkYTczOTUyOWQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZX0gZnJvbSAgXCJyZWFjdFwiICBcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxudHlwZSBFcGlzb2RlID0ge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgbWVtYmVyczogc3RyaW5nO1xyXG4gIHRodW1ibmFpbDogc3RyaW5nO1xyXG4gIGR1cmF0aW9uOiBudW1iZXI7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbnR5cGUgUGxheWVyQ29udGV4dERhdGEgPSB7XHJcbiAgZXBpc29kZUxpc3Q6IEVwaXNvZGVbXVxyXG4gIGN1cnJlbnRFcGlzb2RlSW5kZXg6IG51bWJlcjtcclxuICBwbGF5OiAoZXBpc29kZTogRXBpc29kZSkgPT52b2lkO1xyXG4gIGlzUGxheWluZzogYm9vbGVhbjtcclxuICBpc0xvb3Bpbmc6IGJvb2xlYW47XHJcbiAgaXNTaHVmZmxpbmc6IGJvb2xlYW47XHJcbiAgdG9nZ2xlUGxheTogKCkgPT4gdm9pZDtcclxuICB0b2dnbGVMb29wOiAoKT0+IHZvaWQ7XHJcbiAgdG9nZ2xlU2h1ZmZsZTogKCkgPT4gdm9pZDtcclxuICBzZXRQbGF5aW5nU3RhdGU6IChzdGF0ZTpib29sZWFuKSA9PnZvaWQ7XHJcbiAgcGxheUxpc3Q6IChsaXN0OiBFcGlzb2RlW10sIGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgcGxheU5leHQ6ICgpID0+IHZvaWQ7XHJcbiAgcGxheVByZXZpb3VzOiAoKSA9PiB2b2lkO1xyXG4gIGhhc05leHQ6IGJvb2xlYW47XHJcbiAgaGFzUHJldmlvdXM6IGJvb2xlYW47XHJcbiAgY2xlYXJQbGF5U3RhdGU6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgUGxheWVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgUGxheWVyQ29udGV4dERhdGEpO1xyXG5cclxudHlwZSBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcyA9IHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGxheWVyQ29udGV4dFByb3ZpZGVyKHtjaGlsZHJlbn06IFBsYXllckNvbnRleHRQcm92aWRlclByb3BzKXtcclxuICBjb25zdCBbZXBpc29kZUxpc3QsIHNldEVwaXNvZGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY3VycmVudEVwaXNvZGVJbmRleCwgc2V0Q3VycmVudEVwaXNvZGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0xvb3BpbmcsIHNldElzTG9vcGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzU2h1ZmZsaW5nLCBzZXRJc1NodWZmbGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cclxuXHJcbiAgZnVuY3Rpb24gcGxheShlcGlzb2RlIDpFcGlzb2RlKXtcclxuICAgIHNldEVwaXNvZGVMaXN0KFtlcGlzb2RlXSk7XHJcbiAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KDApO1xyXG4gICAgc2V0SXNQbGF5aW5nKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxheUxpc3QobGlzdDpFcGlzb2RlW10sIGluZGV4Om51bWJlcil7XHJcbiAgICBzZXRFcGlzb2RlTGlzdChsaXN0KTtcclxuICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoaW5kZXgpXHJcbiAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVQbGF5KCl7XHJcbiAgICBzZXRJc1BsYXlpbmcoIWlzUGxheWluZyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVMb29wKCl7XHJcbiAgICBzZXRJc0xvb3BpbmcoIWlzTG9vcGluZyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVTaHVmZmxlKCl7XHJcbiAgICBzZXRJc1NodWZmbGluZyghaXNTaHVmZmxpbmcpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJQbGF5U3RhdGUoKXtcclxuICAgIHNldEVwaXNvZGVMaXN0KFtdKTtcclxuICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoMCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRQbGF5aW5nU3RhdGUoc3RhdGU6Ym9vbGVhbil7XHJcbiAgICBzZXRJc1BsYXlpbmcoc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFzUHJldmlvdXMgPSBjdXJyZW50RXBpc29kZUluZGV4IC0gMSA+IDA7XHJcbiAgY29uc3QgaGFzTmV4dCA9IGlzU2h1ZmZsaW5nIHx8IGN1cnJlbnRFcGlzb2RlSW5kZXggKyAxIDwgZXBpc29kZUxpc3QubGVuZ3RoO1xyXG5cclxuICBmdW5jdGlvbiBwbGF5TmV4dCgpe1xyXG4gICAgY29uc3QgbmV4dEVwaXNvZGVJbmRleCA9IGN1cnJlbnRFcGlzb2RlSW5kZXggKyAxO1xyXG4gICAgaWYoaXNTaHVmZmxpbmcpe1xyXG4gICAgICBjb25zdCBuZXh0UmFuZG9tRXBpc29kZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZXBpc29kZUxpc3QubGVuZ3RoKTtcclxuICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChuZXh0UmFuZG9tRXBpc29kZUluZGV4KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoaGFzTmV4dCl7XHJcbiAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgobmV4dEVwaXNvZGVJbmRleCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxheVByZXZpb3VzKCl7XHJcbiAgICBjb25zdCBuZXh0RXBpc29kZUluZGV4ID0gY3VycmVudEVwaXNvZGVJbmRleCAtIDE7XHJcbiAgICBpZihoYXNQcmV2aW91cyl7XHJcbiAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgobmV4dEVwaXNvZGVJbmRleCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQbGF5ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgICAgZXBpc29kZUxpc3QsIFxyXG4gICAgICAgIGN1cnJlbnRFcGlzb2RlSW5kZXgsXHJcbiAgICAgICAgcGxheSwgXHJcbiAgICAgICAgcGxheUxpc3QsXHJcbiAgICAgICAgcGxheU5leHQsXHJcbiAgICAgICAgaXNMb29waW5nLFxyXG4gICAgICAgIGlzU2h1ZmZsaW5nLFxyXG4gICAgICAgIHRvZ2dsZVNodWZmbGUsXHJcbiAgICAgICAgdG9nZ2xlTG9vcCxcclxuICAgICAgICBwbGF5UHJldmlvdXMsXHJcbiAgICAgICAgaGFzTmV4dCxcclxuICAgICAgICBoYXNQcmV2aW91cyxcclxuICAgICAgICBpc1BsYXlpbmcsXHJcbiAgICAgICAgdG9nZ2xlUGxheSwgXHJcbiAgICAgICAgc2V0UGxheWluZ1N0YXRlLFxyXG4gICAgICAgIGNsZWFyUGxheVN0YXRlLFxyXG4gICAgICAgIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1BsYXllckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVBsYXllciA9ICgpID0+IHtcclxuICByZXR1cm4gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=