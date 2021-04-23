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

  function setupProgressListener() {
    audioRef.current.currentTime = 0;
    audioRef.current.addEventListener('timeupdate', function () {
      setProgress(Math.floor(audioRef.current.currentTime));
    });
  }

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
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: ["Tocando agora ", episode === null || episode === void 0 ? void 0 : episode.title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
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
        lineNumber: 62,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: episode.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 12
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.members
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 12
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.emptyPlayer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Selecione um podcast para ouvir"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: !episode ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.empty : '',
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.progress,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: Object(_utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__["convertDurationToTimeString"])(progress)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 9
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
            lineNumber: 81,
            columnNumber: 13
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.emptySlider
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: Object(_utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__["convertDurationToTimeString"])((_episode$duration = episode === null || episode === void 0 ? void 0 : episode.duration) !== null && _episode$duration !== void 0 ? _episode$duration : 0)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
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
        loop: isLooping,
        onLoadedMetadata: setupProgressListener
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
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
            lineNumber: 110,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
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
            lineNumber: 113,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
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
            lineNumber: 121,
            columnNumber: 15
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/play.svg",
            alt: "Pausar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
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
            lineNumber: 127,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
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
            lineNumber: 135,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJhdWRpb1JlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInVzZVBsYXllciIsImVwaXNvZGVMaXN0IiwiY3VycmVudEVwaXNvZGVJbmRleCIsImlzUGxheWluZyIsInRvZ2dsZVBsYXkiLCJzZXRQbGF5aW5nU3RhdGUiLCJwbGF5TmV4dCIsInBsYXlQcmV2aW91cyIsImhhc1ByZXZpb3VzIiwiaGFzTmV4dCIsImlzTG9vcGluZyIsInRvZ2dsZUxvb3AiLCJpc1NodWZmbGluZyIsInRvZ2dsZVNodWZmbGUiLCJlcGlzb2RlIiwic2V0dXBQcm9ncmVzc0xpc3RlbmVyIiwiY3VycmVudCIsImN1cnJlbnRUaW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsIk1hdGgiLCJmbG9vciIsInVzZUVmZmVjdCIsInBsYXkiLCJwYXVzZSIsInN0eWxlcyIsInBsYXllckNvbnRhaW5lciIsInRpdGxlIiwiY3VycmVudEVwaXNvZGUiLCJ0aHVtYm5haWwiLCJtZW1iZXJzIiwiZW1wdHlQbGF5ZXIiLCJlbXB0eSIsImNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyIsInNsaWRlciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJlbXB0eVNsaWRlciIsImR1cmF0aW9uIiwidXJsIiwiYnV0dG9ucyIsImxlbmd0aCIsImlzQWN0aXZlIiwicGxheUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHTyxTQUFTQSxNQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBRXRCLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBbUIsSUFBbkIsQ0FBdkI7O0FBRnNCLGtCQUdVQyxzREFBUSxD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aUNBQ0U7QUFBSyxlQUFHLEVBQUMsZ0JBQVQ7QUFBMEIsZUFBRyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZCRixlQTBCRTtBQUNBLGNBQUksRUFBQyxRQURMO0FBRUEsa0JBQVEsRUFBRSxDQUFDUSxPQUZYO0FBR0EsaUJBQU8sRUFBRUgsVUFIVDtBQUlBLG1CQUFTLEVBQUlELFNBQVMsR0FBR2MsMERBQU0sQ0FBQ2tCLFFBQVYsR0FBcUIsRUFKM0M7QUFBQSxpQ0FNRTtBQUFLLGVBQUcsRUFBQyxhQUFUO0FBQXVCLGVBQUcsRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdGRDs7R0FqSWVoRCxNO1VBa0JWTSxpRTs7O0tBbEJVTixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZDhkOTRkZTcwYWRkYWE5NjVmYjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ICB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgIHVzZVBsYXllciB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9QbGF5ZXJDb250ZXh0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCAgSW1hZ2UgIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5cclxuaW1wb3J0IFNsaWRlciBmcm9tICdyYy1zbGlkZXInO1xyXG5pbXBvcnQgJ3JjLXNsaWRlci9hc3NldHMvaW5kZXguY3NzJ1xyXG5pbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBsYXllcigpe1xyXG5cclxuICBjb25zdCBhdWRpb1JlZiA9IHVzZVJlZjxIVE1MQXVkaW9FbGVtZW50PihudWxsKTtcclxuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHtcclxuICAgIGVwaXNvZGVMaXN0LFxyXG4gICAgY3VycmVudEVwaXNvZGVJbmRleCwgXHJcbiAgICBpc1BsYXlpbmcsIFxyXG4gICAgdG9nZ2xlUGxheSxcclxuICAgIHNldFBsYXlpbmdTdGF0ZSxcclxuICAgIHBsYXlOZXh0LFxyXG4gICAgcGxheVByZXZpb3VzLFxyXG4gICAgaGFzUHJldmlvdXMsXHJcbiAgICBoYXNOZXh0LFxyXG4gICAgaXNMb29waW5nLFxyXG4gICAgdG9nZ2xlTG9vcCxcclxuICAgIGlzU2h1ZmZsaW5nLFxyXG4gICAgdG9nZ2xlU2h1ZmZsZSxcclxuICB9ID0gdXNlUGxheWVyKCk7XHJcblxyXG4gIGNvbnN0IGVwaXNvZGUgPSBlcGlzb2RlTGlzdFtjdXJyZW50RXBpc29kZUluZGV4XTtcclxuXHJcbiAgZnVuY3Rpb24gc2V0dXBQcm9ncmVzc0xpc3RlbmVyKCl7XHJcbiAgICBhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGF1ZGlvUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScgLCAoKSA9PiB7XHJcbiAgICAgIHNldFByb2dyZXNzKE1hdGguZmxvb3IoYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSkpO1xyXG4gICAgfSlcclxuXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoIWF1ZGlvUmVmLmN1cnJlbnQpe1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZihpc1BsYXlpbmcpe1xyXG4gICAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTtcclxuICAgIH1lbHNle1xyXG4gICAgICBhdWRpb1JlZi5jdXJyZW50LnBhdXNlKCk7XHJcbiAgICB9XHJcbiAgfSwgW2lzUGxheWluZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5ZXJDb250YWluZXJ9PlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL3BsYXlpbmcuc3ZnXCIgYWx0PVwiVG9jYW5kbyBBZ29yYVwiLz5cclxuICAgICAgICA8c3Ryb25nPlRvY2FuZG8gYWdvcmEge2VwaXNvZGU/LnRpdGxlfTwvc3Ryb25nPlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIHtlcGlzb2RlID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVudEVwaXNvZGV9PlxyXG4gICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgIHdpZHRoPXs1OTJ9XHJcbiAgICAgICAgICAgaGVpZ2h0PXs1OTJ9IFxyXG4gICAgICAgICAgIHNyYz17ZXBpc29kZS50aHVtYm5haWx9IFxyXG4gICAgICAgICAgIG9iamVjdEZpdD0nY292ZXInLz5cclxuICAgICAgICAgICA8c3Ryb25nPntlcGlzb2RlLnRpdGxlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgIDxzcGFuPntlcGlzb2RlLm1lbWJlcnN9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHlQbGF5ZXJ9PlxyXG4gICAgICAgIDxzdHJvbmc+U2VsZWNpb25lIHVtIHBvZGNhc3QgcGFyYSBvdXZpcjwvc3Ryb25nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9eyFlcGlzb2RlPyBzdHlsZXMuZW1wdHkgOiAnJ30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc30+XHJcbiAgICAgICAgPHNwYW4+e2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyhwcm9ncmVzcyl9PC9zcGFuPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJ9PlxyXG4gICAgICAgICAge2VwaXNvZGUgPyAoXHJcbiAgICAgICAgICAgIDxTbGlkZXIgdHJhY2tTdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyMwNGQzNjEnfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgcmFpbFN0eWxlID17e2JhY2tncm91bmRDb2xvcjogJyM5Zjc1ZmYnfX1cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdHlsZSA9IHt7Ym9yZGVyQ29sb3I6ICcjMDRkMzYxJyAsIGJvcmRlcldpZHRoOjR9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eVNsaWRlcn0+PC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3Bhbj57Y29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKGVwaXNvZGU/LmR1cmF0aW9uID8/IDApfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge2VwaXNvZGUgJiYgKFxyXG4gICAgICAgICAgPGF1ZGlvIHNyYz17ZXBpc29kZS51cmx9IFxyXG4gICAgICAgICAgYXV0b1BsYXlcclxuICAgICAgICAgIHJlZj17YXVkaW9SZWZ9XHJcbiAgICAgICAgICBvblBsYXkgPSB7KCk9PiB7c2V0UGxheWluZ1N0YXRlKHRydWUpfX1cclxuICAgICAgICAgIG9uUGF1c2UgPSB7KCk9PiB7c2V0UGxheWluZ1N0YXRlKGZhbHNlKX19XHJcbiAgICAgICAgICBsb29wID0ge2lzTG9vcGluZ31cclxuICAgICAgICAgIG9uTG9hZGVkTWV0YWRhdGEgPXtzZXR1cFByb2dyZXNzTGlzdGVuZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XHJcbiAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgZGlzYWJsZWQ9eyFlcGlzb2RlIHx8IGVwaXNvZGVMaXN0Lmxlbmd0aCA9PTF9XHJcbiAgICAgICAgICBvbkNsaWNrID0ge3RvZ2dsZVNodWZmbGV9XHJcbiAgICAgICAgICBjbGFzc05hbWUgPSB7aXNTaHVmZmxpbmcgPyBzdHlsZXMuaXNBY3RpdmUgOiAnJ31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc2h1ZmZsZS5zdmdcIiBhbHQ9XCJFbWJhcmFsaGFyXCIvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17IWVwaXNvZGUgfHwgIWhhc1ByZXZpb3VzfSBvbkNsaWNrPXtwbGF5UHJldmlvdXN9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LXByZXZpb3VzLnN2Z1wiIGFsdD1cIlRvY2FyIEFudGVyaW9yXCIvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucGxheUJ1dHRvbn0gXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshZXBpc29kZX1cclxuICAgICAgICAgICAgb25DbGljayA9IHsgdG9nZ2xlUGxheX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2lzUGxheWluZyA/IChcclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wYXVzZS5zdmdcIiBhbHQ9XCJUb2NhclwiLz5cclxuICAgICAgICAgICAgKTogKFxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXkuc3ZnXCIgYWx0PVwiUGF1c2FyXCIvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17IWVwaXNvZGUgfHwgIWhhc05leHR9IG9uQ2xpY2s9e3BsYXlOZXh0fSA+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktbmV4dC5zdmdcIiBhbHQ9XCJUb2NhciBQcsOzeGltb1wiLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgIGRpc2FibGVkPXshZXBpc29kZX0gXHJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVMb29wfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSB7IGlzTG9vcGluZyA/IHN0eWxlcy5pc0FjdGl2ZSA6ICcnIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvcmVwZWF0LnN2Z1wiIGFsdD1cIlJlcGl0aXJcIi8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==