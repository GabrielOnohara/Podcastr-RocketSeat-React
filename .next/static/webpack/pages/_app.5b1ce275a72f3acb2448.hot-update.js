webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Player/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Player/index.tsx ***!
  \*****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/PlayerContext */ "./src/contexts/PlayerContext.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Player/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-slider */ "./node_modules/rc-slider/es/index.js");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-slider/assets/index.css */ "./node_modules/rc-slider/assets/index.css");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/convertDurationToTimeString */ "./src/utils/convertDurationToTimeString.ts");


var _jsxFileName = "C:\\Users\\gabak\\OneDrive\\WorkPlace\\WebProjects\\podcastrnext\\src\\components\\Player\\index.tsx",
    _s = $RefreshSig$();








function Player() {
  _s();

  var _episode$duration;

  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      progress = _useState[0],
      setProgress = _useState[1];

  var _usePlayer = Object(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_2__["usePlayer"])(),
      episodeList = _usePlayer.episodeList,
      currentEpisodeIndex = _usePlayer.currentEpisodeIndex,
      isPlaying = _usePlayer.isPlaying,
      togglePlay = _usePlayer.togglePlay,
      setPlayingState = _usePlayer.setPlayingState,
      playNext = _usePlayer.playNext,
      playPrevious = _usePlayer.playPrevious,
      hasPrevious = _usePlayer.hasPrevious,
      hasNext = _usePlayer.hasNext,
      isLooping = _usePlayer.isLooping,
      toggleLoop = _usePlayer.toggleLoop,
      isShuffling = _usePlayer.isShuffling,
      toggleShuffle = _usePlayer.toggleShuffle;

  var episode = episodeList[currentEpisodeIndex];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.playerContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/playing.svg",
        alt: "Tocando Agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: ["Tocando agora ", episode === null || episode === void 0 ? void 0 : episode.title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.currentEpisode,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
        width: 592,
        height: 592,
        src: episode.thumbnail,
        objectFit: "cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: episode.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 12
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.members
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 12
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.emptyPlayer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Selecione um podcast para ouvir"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: !episode ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.empty : '',
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.progress,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slider,
          children: episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(rc_slider__WEBPACK_IMPORTED_MODULE_5__["default"], {
            trackStyle: {
              backgroundColor: '#04d361'
            },
            railStyle: {
              backgroundColor: '#9f75ff'
            },
            handleStyle: {
              borderColor: '#04d361',
              borderWidth: 4
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.emptySlider
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: Object(_utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__["convertDurationToTimeString"])((_episode$duration = episode === null || episode === void 0 ? void 0 : episode.duration) !== null && _episode$duration !== void 0 ? _episode$duration : 0)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), episode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("audio", {
        src: episode.url,
        autoPlay: true,
        ref: audioRef,
        onPlay: function onPlay() {
          setPlayingState(true);
        },
        onPause: function onPause() {
          setPlayingState(false);
        },
        loop: isLooping
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.buttons,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          disabled: !episode || episodeList.length == 1,
          onClick: toggleShuffle,
          className: isShuffling ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.isActive : '',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/shuffle.svg",
            alt: "Embaralhar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          disabled: !episode || !hasPrevious,
          onClick: playPrevious,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/play-previous.svg",
            alt: "Tocar Anterior"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.playButton,
          disabled: !episode,
          onClick: togglePlay,
          children: isPlaying ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/pause.svg",
            alt: "Tocar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 15
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/play.svg",
            alt: "Pausar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          disabled: !episode || !hasNext,
          onClick: playNext,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/play-next.svg",
            alt: "Tocar Pr\xF3ximo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          disabled: !episode,
          onClick: toggleLoop,
          className: isLooping ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.isActive : '',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/repeat.svg",
            alt: "Repitir"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

_s(Player, "qBEknFfndo7bvVv1ChEmm8qLBIA=", false, function () {
  return [_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_2__["usePlayer"]];
});

_c = Player;

var _c;

$RefreshReg$(_c, "Player");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJhdWRpb1JlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInVzZVBsYXllciIsImVwaXNvZGVMaXN0IiwiY3VycmVudEVwaXNvZGVJbmRleCIsImlzUGxheWluZyIsInRvZ2dsZVBsYXkiLCJzZXRQbGF5aW5nU3RhdGUiLCJwbGF5TmV4dCIsInBsYXlQcmV2aW91cyIsImhhc1ByZXZpb3VzIiwiaGFzTmV4dCIsImlzTG9vcGluZyIsInRvZ2dsZUxvb3AiLCJpc1NodWZmbGluZyIsInRvZ2dsZVNodWZmbGUiLCJlcGlzb2RlIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInBsYXkiLCJwYXVzZSIsInN0eWxlcyIsInBsYXllckNvbnRhaW5lciIsInRpdGxlIiwiY3VycmVudEVwaXNvZGUiLCJ0aHVtYm5haWwiLCJtZW1iZXJzIiwiZW1wdHlQbGF5ZXIiLCJlbXB0eSIsInNsaWRlciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJlbXB0eVNsaWRlciIsImNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyIsImR1cmF0aW9uIiwidXJsIiwiYnV0dG9ucyIsImxlbmd0aCIsImlzQWN0aXZlIiwicGxheUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHTyxTQUFTQSxNQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBRXRCLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBbUIsSUFBbkIsQ0FBdkI7O0FBRnNCLGtCQUdVQyxzREFBUSxDQUFDLENBQUQsQ0FIbEI7QUFBQSxNQUdmQyxRQUhlO0FBQUEsTUFHTEMsV0FISzs7QUFBQSxtQkFrQmxCQyx5RUFBUyxFQWxC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O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1RkQ7O0dBeEhlM0MsTTtVQWtCVk0saUU7OztLQWxCVU4sTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjViMWNlMjc1YTcyZjNhY2IyNDQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyAgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ICB1c2VQbGF5ZXIgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvUGxheWVyQ29udGV4dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgIEltYWdlICBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuXHJcbmltcG9ydCBTbGlkZXIgZnJvbSAncmMtc2xpZGVyJztcclxuaW1wb3J0ICdyYy1zbGlkZXIvYXNzZXRzL2luZGV4LmNzcydcclxuaW1wb3J0IHsgY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZ1wiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXIoKXtcclxuXHJcbiAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWY8SFRNTEF1ZGlvRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCB7XHJcbiAgICBlcGlzb2RlTGlzdCxcclxuICAgIGN1cnJlbnRFcGlzb2RlSW5kZXgsIFxyXG4gICAgaXNQbGF5aW5nLCBcclxuICAgIHRvZ2dsZVBsYXksXHJcbiAgICBzZXRQbGF5aW5nU3RhdGUsXHJcbiAgICBwbGF5TmV4dCxcclxuICAgIHBsYXlQcmV2aW91cyxcclxuICAgIGhhc1ByZXZpb3VzLFxyXG4gICAgaGFzTmV4dCxcclxuICAgIGlzTG9vcGluZyxcclxuICAgIHRvZ2dsZUxvb3AsXHJcbiAgICBpc1NodWZmbGluZyxcclxuICAgIHRvZ2dsZVNodWZmbGUsXHJcbiAgfSA9IHVzZVBsYXllcigpO1xyXG5cclxuICBjb25zdCBlcGlzb2RlID0gZXBpc29kZUxpc3RbY3VycmVudEVwaXNvZGVJbmRleF07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZighYXVkaW9SZWYuY3VycmVudCl7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmKGlzUGxheWluZyl7XHJcbiAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGF1c2UoKTtcclxuICAgIH1cclxuICB9LCBbaXNQbGF5aW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYXllckNvbnRhaW5lcn0+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvcGxheWluZy5zdmdcIiBhbHQ9XCJUb2NhbmRvIEFnb3JhXCIvPlxyXG4gICAgICAgIDxzdHJvbmc+VG9jYW5kbyBhZ29yYSB7ZXBpc29kZT8udGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAge2VwaXNvZGUgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50RXBpc29kZX0+XHJcbiAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgd2lkdGg9ezU5Mn1cclxuICAgICAgICAgICBoZWlnaHQ9ezU5Mn0gXHJcbiAgICAgICAgICAgc3JjPXtlcGlzb2RlLnRodW1ibmFpbH0gXHJcbiAgICAgICAgICAgb2JqZWN0Rml0PSdjb3ZlcicvPlxyXG4gICAgICAgICAgIDxzdHJvbmc+e2VwaXNvZGUudGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUubWVtYmVyc308L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eVBsYXllcn0+XHJcbiAgICAgICAgPHN0cm9uZz5TZWxlY2lvbmUgdW0gcG9kY2FzdCBwYXJhIG91dmlyPC9zdHJvbmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17IWVwaXNvZGU/IHN0eWxlcy5lbXB0eSA6ICcnfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzfT5cclxuICAgICAgICAgIDxzcGFuPnt9PC9zcGFuPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJ9PlxyXG4gICAgICAgICAge2VwaXNvZGUgPyAoXHJcbiAgICAgICAgICAgIDxTbGlkZXIgdHJhY2tTdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyMwNGQzNjEnfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgcmFpbFN0eWxlID17e2JhY2tncm91bmRDb2xvcjogJyM5Zjc1ZmYnfX1cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdHlsZSA9IHt7Ym9yZGVyQ29sb3I6ICcjMDRkMzYxJyAsIGJvcmRlcldpZHRoOjR9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eVNsaWRlcn0+PC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3Bhbj57Y29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKGVwaXNvZGU/LmR1cmF0aW9uID8/IDApfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge2VwaXNvZGUgJiYgKFxyXG4gICAgICAgICAgPGF1ZGlvIHNyYz17ZXBpc29kZS51cmx9IFxyXG4gICAgICAgICAgYXV0b1BsYXlcclxuICAgICAgICAgIHJlZj17YXVkaW9SZWZ9XHJcbiAgICAgICAgICBvblBsYXkgPSB7KCk9PiB7c2V0UGxheWluZ1N0YXRlKHRydWUpfX1cclxuICAgICAgICAgIG9uUGF1c2UgPSB7KCk9PiB7c2V0UGxheWluZ1N0YXRlKGZhbHNlKX19XHJcbiAgICAgICAgICBsb29wID0ge2lzTG9vcGluZ31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cclxuICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICBkaXNhYmxlZD17IWVwaXNvZGUgfHwgZXBpc29kZUxpc3QubGVuZ3RoID09MX1cclxuICAgICAgICAgIG9uQ2xpY2sgPSB7dG9nZ2xlU2h1ZmZsZX1cclxuICAgICAgICAgIGNsYXNzTmFtZSA9IHtpc1NodWZmbGluZyA/IHN0eWxlcy5pc0FjdGl2ZSA6ICcnfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zaHVmZmxlLnN2Z1wiIGFsdD1cIkVtYmFyYWxoYXJcIi8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPXshZXBpc29kZSB8fCAhaGFzUHJldmlvdXN9IG9uQ2xpY2s9e3BsYXlQcmV2aW91c30+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktcHJldmlvdXMuc3ZnXCIgYWx0PVwiVG9jYXIgQW50ZXJpb3JcIi8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wbGF5QnV0dG9ufSBcclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFlcGlzb2RlfVxyXG4gICAgICAgICAgICBvbkNsaWNrID0geyB0b2dnbGVQbGF5fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXNQbGF5aW5nID8gKFxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BhdXNlLnN2Z1wiIGFsdD1cIlRvY2FyXCIvPlxyXG4gICAgICAgICAgICApOiAoXHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS5zdmdcIiBhbHQ9XCJQYXVzYXJcIi8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPXshZXBpc29kZSB8fCAhaGFzTmV4dH0gb25DbGljaz17cGxheU5leHR9ID5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1uZXh0LnN2Z1wiIGFsdD1cIlRvY2FyIFByw7N4aW1vXCIvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgZGlzYWJsZWQ9eyFlcGlzb2RlfSBcclxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUxvb3B9XHJcbiAgICAgICAgICBjbGFzc05hbWU9IHsgaXNMb29waW5nID8gc3R5bGVzLmlzQWN0aXZlIDogJycgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9yZXBlYXQuc3ZnXCIgYWx0PVwiUmVwaXRpclwiLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9