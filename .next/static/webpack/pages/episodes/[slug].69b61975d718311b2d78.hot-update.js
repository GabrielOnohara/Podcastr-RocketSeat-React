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
    setIsLooping(!isShuffling);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4Il0sIm5hbWVzIjpbIlBsYXllckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUGxheWVyQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImVwaXNvZGVMaXN0Iiwic2V0RXBpc29kZUxpc3QiLCJjdXJyZW50RXBpc29kZUluZGV4Iiwic2V0Q3VycmVudEVwaXNvZGVJbmRleCIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsImlzTG9vcGluZyIsInNldElzTG9vcGluZyIsImlzU2h1ZmZsaW5nIiwic2V0SXNTaHVmZmxpbmciLCJwbGF5IiwiZXBpc29kZSIsInBsYXlMaXN0IiwibGlzdCIsImluZGV4IiwidG9nZ2xlUGxheSIsInRvZ2dsZUxvb3AiLCJ0b2dnbGVTaHVmZmxlIiwic2V0UGxheWluZ1N0YXRlIiwic3RhdGUiLCJoYXNQcmV2aW91cyIsImhhc05leHQiLCJsZW5ndGgiLCJwbGF5TmV4dCIsIm5leHRFcGlzb2RlSW5kZXgiLCJwbGF5UHJldmlvdXMiLCJ1c2VQbGF5ZXIiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBNEJPLElBQU1BLGFBQWEsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUFuQztBQU1BLFNBQVNDLHFCQUFULE9BQXNFO0FBQUE7O0FBQUEsTUFBdENDLFFBQXNDLFFBQXRDQSxRQUFzQzs7QUFBQSxrQkFDckNDLHNEQUFRLENBQUMsRUFBRCxDQUQ2QjtBQUFBLE1BQ3BFQyxXQURvRTtBQUFBLE1BQ3ZEQyxjQUR1RDs7QUFBQSxtQkFFckJGLHNEQUFRLENBQUMsQ0FBRCxDQUZhO0FBQUEsTUFFcEVHLG1CQUZvRTtBQUFBLE1BRS9DQyxzQkFGK0M7O0FBQUEsbUJBR3pDSixzREFBUSxDQUFDLEtBQUQsQ0FIaUM7QUFBQSxNQUdwRUssU0FIb0U7QUFBQSxNQUd6REMsWUFIeUQ7O0FBQUEsbUJBSXpDTixzREFBUSxDQUFDLEtBQUQsQ0FKaUM7QUFBQSxNQUlwRU8sU0FKb0U7QUFBQSxNQUl6REMsWUFKeUQ7O0FBQUEsbUJBS3JDUixzREFBUSxDQUFDLEtBQUQsQ0FMNkI7QUFBQSxNQUtwRVMsV0FMb0U7QUFBQSxNQUt2REMsY0FMdUQ7O0FBUzNFLFdBQVNDLElBQVQsQ0FBY0MsT0FBZCxFQUErQjtBQUM3QlYsa0JBQWMsQ0FBQyxDQUFDVSxPQUFELENBQUQsQ0FBZDtBQUNBUiwwQkFBc0IsQ0FBQyxDQUFELENBQXRCO0FBQ0FFLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0Q7O0FBRUQsV0FBU08sUUFBVCxDQUFrQkMsSUFBbEIsRUFBa0NDLEtBQWxDLEVBQStDO0FBQzdDYixrQkFBYyxDQUFDWSxJQUFELENBQWQ7QUFDQVYsMEJBQXNCLENBQUNXLEtBQUQsQ0FBdEI7QUFDQVQsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRDs7QUFFRCxXQUFTVSxVQUFULEdBQXFCO0FBQ25CVixnQkFBWSxDQUFDLENBQUNELFNBQUYsQ0FBWjtBQUNEOztBQUVELFdBQVNZLFVBQVQsR0FBcUI7QUFDbkJULGdCQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0Q7O0FBRUQsV0FBU1csYUFBVCxHQUF3QjtBQUN0QlYsZ0JBQVksQ0FBQyxDQUFDQyxXQUFGLENBQVo7QUFDRDs7QUFHRCxXQUFTVSxlQUFULENBQXlCQyxLQUF6QixFQUF1QztBQUNyQ2QsZ0JBQVksQ0FBQ2MsS0FBRCxDQUFaO0FBQ0Q7O0FBRUQsTUFBTUMsV0FBVyxHQUFHbEIsbUJBQW1CLEdBQUcsQ0FBdEIsR0FBMEIsQ0FBOUM7QUFDQSxNQUFNbUIsT0FBTyxHQUFHbkIsbUJBQW1CLEdBQUcsQ0FBdEIsR0FBMEJGLFdBQVcsQ0FBQ3NCLE1BQXREOztBQUVBLFdBQVNDLFFBQVQsR0FBbUI7QUFDakIsUUFBTUMsZ0JBQWdCLEdBQUd0QixtQkFBbUIsR0FBRyxDQUEvQzs7QUFDQSxRQUFHbUIsT0FBSCxFQUFXO0FBQ1RsQiw0QkFBc0IsQ0FBQ3FCLGdCQUFELENBQXRCO0FBQ0QsS0FGRCxNQUVLO0FBQ0g7QUFDRDtBQUNGOztBQUVELFdBQVNDLFlBQVQsR0FBdUI7QUFDckIsUUFBTUQsZ0JBQWdCLEdBQUd0QixtQkFBbUIsR0FBRyxDQUEvQzs7QUFDQSxRQUFHa0IsV0FBSCxFQUFlO0FBQ2JqQiw0QkFBc0IsQ0FBQ3FCLGdCQUFELENBQXRCO0FBQ0QsS0FGRCxNQUVLO0FBQ0g7QUFDRDtBQUNGOztBQUVELHNCQUNFLHFFQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQXdCLFNBQUssRUFBRTtBQUMzQnhCLGlCQUFXLEVBQVhBLFdBRDJCO0FBRTNCRSx5QkFBbUIsRUFBbkJBLG1CQUYyQjtBQUczQlEsVUFBSSxFQUFKQSxJQUgyQjtBQUkzQkUsY0FBUSxFQUFSQSxRQUoyQjtBQUszQlcsY0FBUSxFQUFSQSxRQUwyQjtBQU0zQmpCLGVBQVMsRUFBVEEsU0FOMkI7QUFPM0JVLGdCQUFVLEVBQVZBLFVBUDJCO0FBUTNCUyxrQkFBWSxFQUFaQSxZQVIyQjtBQVMzQkosYUFBTyxFQUFQQSxPQVQyQjtBQVUzQkQsaUJBQVcsRUFBWEEsV0FWMkI7QUFXM0JoQixlQUFTLEVBQVRBLFNBWDJCO0FBWTNCVyxnQkFBVSxFQUFWQSxVQVoyQjtBQWEzQkcscUJBQWUsRUFBZkE7QUFiMkIsS0FBL0I7QUFBQSxjQWNHcEI7QUFkSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQkQ7O0dBN0VlRCxxQjs7S0FBQUEscUI7QUErRVQsSUFBTTZCLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDN0IsU0FBT0Msd0RBQVUsQ0FBQ2hDLGFBQUQsQ0FBakI7QUFDRCxDQUZNOztJQUFNK0IsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lcGlzb2Rlcy9bc2x1Z10uNjliNjE5NzVkNzE4MzExYjJkNzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlfSBmcm9tICBcInJlYWN0XCIgIFxyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG50eXBlIEVwaXNvZGUgPSB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBtZW1iZXJzOiBzdHJpbmc7XHJcbiAgdGh1bWJuYWlsOiBzdHJpbmc7XHJcbiAgZHVyYXRpb246IG51bWJlcjtcclxuICB1cmw6IHN0cmluZztcclxufVxyXG5cclxudHlwZSBQbGF5ZXJDb250ZXh0RGF0YSA9IHtcclxuICBlcGlzb2RlTGlzdDogRXBpc29kZVtdXHJcbiAgY3VycmVudEVwaXNvZGVJbmRleDogbnVtYmVyO1xyXG4gIHBsYXk6IChlcGlzb2RlOiBFcGlzb2RlKSA9PnZvaWQ7XHJcbiAgaXNQbGF5aW5nOiBib29sZWFuO1xyXG4gIGlzTG9vcGluZzogYm9vbGVhbjtcclxuICBpc1NodWZmbGluZzogYm9vbGVhbjtcclxuICB0b2dnbGVQbGF5OiAoKSA9PiB2b2lkO1xyXG4gIHRvZ2dsZUxvb3A6ICgpPT4gdm9pZDtcclxuICB0b2dnbGVTaHVmZmxlOiAoKSA9PiB2b2lkO1xyXG4gIHNldFBsYXlpbmdTdGF0ZTogKHN0YXRlOmJvb2xlYW4pID0+dm9pZDtcclxuICBwbGF5TGlzdDogKGxpc3Q6IEVwaXNvZGVbXSwgaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxuICBwbGF5TmV4dDogKCkgPT4gdm9pZDtcclxuICBwbGF5UHJldmlvdXM6ICgpID0+IHZvaWQ7XHJcbiAgaGFzTmV4dDogYm9vbGVhbjtcclxuICBoYXNQcmV2aW91czogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBQbGF5ZXJDb250ZXh0RGF0YSk7XHJcblxyXG50eXBlIFBsYXllckNvbnRleHRQcm92aWRlclByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXJDb250ZXh0UHJvdmlkZXIoe2NoaWxkcmVufTogUGxheWVyQ29udGV4dFByb3ZpZGVyUHJvcHMpe1xyXG4gIGNvbnN0IFtlcGlzb2RlTGlzdCwgc2V0RXBpc29kZUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjdXJyZW50RXBpc29kZUluZGV4LCBzZXRDdXJyZW50RXBpc29kZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTG9vcGluZywgc2V0SXNMb29waW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNTaHVmZmxpbmcsIHNldElzU2h1ZmZsaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG5cclxuICBmdW5jdGlvbiBwbGF5KGVwaXNvZGUgOkVwaXNvZGUpe1xyXG4gICAgc2V0RXBpc29kZUxpc3QoW2VwaXNvZGVdKTtcclxuICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoMCk7XHJcbiAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGF5TGlzdChsaXN0OkVwaXNvZGVbXSwgaW5kZXg6bnVtYmVyKXtcclxuICAgIHNldEVwaXNvZGVMaXN0KGxpc3QpO1xyXG4gICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChpbmRleClcclxuICAgIHNldElzUGxheWluZyh0cnVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZVBsYXkoKXtcclxuICAgIHNldElzUGxheWluZyghaXNQbGF5aW5nKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZUxvb3AoKXtcclxuICAgIHNldElzTG9vcGluZyghaXNMb29waW5nKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZVNodWZmbGUoKXtcclxuICAgIHNldElzTG9vcGluZyghaXNTaHVmZmxpbmcpO1xyXG4gIH1cclxuXHJcblxyXG4gIGZ1bmN0aW9uIHNldFBsYXlpbmdTdGF0ZShzdGF0ZTpib29sZWFuKXtcclxuICAgIHNldElzUGxheWluZyhzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYXNQcmV2aW91cyA9IGN1cnJlbnRFcGlzb2RlSW5kZXggLSAxID4gMDtcclxuICBjb25zdCBoYXNOZXh0ID0gY3VycmVudEVwaXNvZGVJbmRleCArIDEgPCBlcGlzb2RlTGlzdC5sZW5ndGg7XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXlOZXh0KCl7XHJcbiAgICBjb25zdCBuZXh0RXBpc29kZUluZGV4ID0gY3VycmVudEVwaXNvZGVJbmRleCArIDE7XHJcbiAgICBpZihoYXNOZXh0KXtcclxuICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChuZXh0RXBpc29kZUluZGV4KTtcclxuICAgIH1lbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGF5UHJldmlvdXMoKXtcclxuICAgIGNvbnN0IG5leHRFcGlzb2RlSW5kZXggPSBjdXJyZW50RXBpc29kZUluZGV4IC0gMTtcclxuICAgIGlmKGhhc1ByZXZpb3VzKXtcclxuICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChuZXh0RXBpc29kZUluZGV4KTtcclxuICAgIH1lbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBsYXllckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuICAgICAgICBlcGlzb2RlTGlzdCwgXHJcbiAgICAgICAgY3VycmVudEVwaXNvZGVJbmRleCxcclxuICAgICAgICBwbGF5LCBcclxuICAgICAgICBwbGF5TGlzdCxcclxuICAgICAgICBwbGF5TmV4dCxcclxuICAgICAgICBpc0xvb3BpbmcsXHJcbiAgICAgICAgdG9nZ2xlTG9vcCxcclxuICAgICAgICBwbGF5UHJldmlvdXMsXHJcbiAgICAgICAgaGFzTmV4dCxcclxuICAgICAgICBoYXNQcmV2aW91cyxcclxuICAgICAgICBpc1BsYXlpbmcsXHJcbiAgICAgICAgdG9nZ2xlUGxheSwgXHJcbiAgICAgICAgc2V0UGxheWluZ1N0YXRlfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvUGxheWVyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUGxheWVyID0gKCkgPT4ge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KFBsYXllckNvbnRleHQpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==