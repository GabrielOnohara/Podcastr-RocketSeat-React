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
    audioRef.current.addEventListener('timeupdate', function (event) {
      setProgress(audioRef.current.currentTime);
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
        onLoadMetaData: setupProgressListener
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJhdWRpb1JlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInVzZVBsYXllciIsImVwaXNvZGVMaXN0IiwiY3VycmVudEVwaXNvZGVJbmRleCIsImlzUGxheWluZyIsInRvZ2dsZVBsYXkiLCJzZXRQbGF5aW5nU3RhdGUiLCJwbGF5TmV4dCIsInBsYXlQcmV2aW91cyIsImhhc1ByZXZpb3VzIiwiaGFzTmV4dCIsImlzTG9vcGluZyIsInRvZ2dsZUxvb3AiLCJpc1NodWZmbGluZyIsInRvZ2dsZVNodWZmbGUiLCJlcGlzb2RlIiwic2V0dXBQcm9ncmVzc0xpc3RlbmVyIiwiY3VycmVudCIsImN1cnJlbnRUaW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidXNlRWZmZWN0IiwicGxheSIsInBhdXNlIiwic3R5bGVzIiwicGxheWVyQ29udGFpbmVyIiwidGl0bGUiLCJjdXJyZW50RXBpc29kZSIsInRodW1ibmFpbCIsIm1lbWJlcnMiLCJlbXB0eVBsYXllciIsImVtcHR5IiwiY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIiwic2xpZGVyIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImVtcHR5U2xpZGVyIiwiZHVyYXRpb24iLCJ1cmwiLCJidXR0b25zIiwibGVuZ3RoIiwiaXNBY3RpdmUiLCJwbGF5QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdPLFNBQVNBLE1BQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFFdEIsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFtQixJQUFuQixDQUF2Qjs7QUFGc0Isa0JBR1VDLHNEQUFRLENBQUMsQ0FB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QUFBMEIsZUFBRyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZCRixlQTBCRTtBQUNBLGNBQUksRUFBQyxRQURMO0FBRUEsa0JBQVEsRUFBRSxDQUFDUSxPQUZYO0FBR0EsaUJBQU8sRUFBRUgsVUFIVDtBQUlBLG1CQUFTLEVBQUlELFNBQVMsR0FBR2EsMERBQU0sQ0FBQ2tCLFFBQVYsR0FBcUIsRUFKM0M7QUFBQSxpQ0FNRTtBQUFLLGVBQUcsRUFBQyxhQUFUO0FBQXVCLGVBQUcsRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdGRDs7R0FqSWUvQyxNO1VBa0JWTSxpRTs7O0tBbEJVTixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODM4ZDQ3N2QyYmFhNDNlNWUzMmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ICB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgIHVzZVBsYXllciB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9QbGF5ZXJDb250ZXh0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCAgSW1hZ2UgIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5cclxuaW1wb3J0IFNsaWRlciBmcm9tICdyYy1zbGlkZXInO1xyXG5pbXBvcnQgJ3JjLXNsaWRlci9hc3NldHMvaW5kZXguY3NzJ1xyXG5pbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBsYXllcigpe1xyXG5cclxuICBjb25zdCBhdWRpb1JlZiA9IHVzZVJlZjxIVE1MQXVkaW9FbGVtZW50PihudWxsKTtcclxuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHtcclxuICAgIGVwaXNvZGVMaXN0LFxyXG4gICAgY3VycmVudEVwaXNvZGVJbmRleCwgXHJcbiAgICBpc1BsYXlpbmcsIFxyXG4gICAgdG9nZ2xlUGxheSxcclxuICAgIHNldFBsYXlpbmdTdGF0ZSxcclxuICAgIHBsYXlOZXh0LFxyXG4gICAgcGxheVByZXZpb3VzLFxyXG4gICAgaGFzUHJldmlvdXMsXHJcbiAgICBoYXNOZXh0LFxyXG4gICAgaXNMb29waW5nLFxyXG4gICAgdG9nZ2xlTG9vcCxcclxuICAgIGlzU2h1ZmZsaW5nLFxyXG4gICAgdG9nZ2xlU2h1ZmZsZSxcclxuICB9ID0gdXNlUGxheWVyKCk7XHJcblxyXG4gIGNvbnN0IGVwaXNvZGUgPSBlcGlzb2RlTGlzdFtjdXJyZW50RXBpc29kZUluZGV4XTtcclxuXHJcbiAgZnVuY3Rpb24gc2V0dXBQcm9ncmVzc0xpc3RlbmVyKCl7XHJcbiAgICBhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lID0wO1xyXG4gICAgYXVkaW9SZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJyAsIGV2ZW50ID0+IHtcclxuICAgICAgc2V0UHJvZ3Jlc3MoYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSk7XHJcbiAgICB9KVxyXG5cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZighYXVkaW9SZWYuY3VycmVudCl7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmKGlzUGxheWluZyl7XHJcbiAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGF1c2UoKTtcclxuICAgIH1cclxuICB9LCBbaXNQbGF5aW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYXllckNvbnRhaW5lcn0+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvcGxheWluZy5zdmdcIiBhbHQ9XCJUb2NhbmRvIEFnb3JhXCIvPlxyXG4gICAgICAgIDxzdHJvbmc+VG9jYW5kbyBhZ29yYSB7ZXBpc29kZT8udGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAge2VwaXNvZGUgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50RXBpc29kZX0+XHJcbiAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgd2lkdGg9ezU5Mn1cclxuICAgICAgICAgICBoZWlnaHQ9ezU5Mn0gXHJcbiAgICAgICAgICAgc3JjPXtlcGlzb2RlLnRodW1ibmFpbH0gXHJcbiAgICAgICAgICAgb2JqZWN0Rml0PSdjb3ZlcicvPlxyXG4gICAgICAgICAgIDxzdHJvbmc+e2VwaXNvZGUudGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUubWVtYmVyc308L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eVBsYXllcn0+XHJcbiAgICAgICAgPHN0cm9uZz5TZWxlY2lvbmUgdW0gcG9kY2FzdCBwYXJhIG91dmlyPC9zdHJvbmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17IWVwaXNvZGU/IHN0eWxlcy5lbXB0eSA6ICcnfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzfT5cclxuICAgICAgICA8c3Bhbj57Y29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKHByb2dyZXNzKX08L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlcn0+XHJcbiAgICAgICAgICB7ZXBpc29kZSA/IChcclxuICAgICAgICAgICAgPFNsaWRlciB0cmFja1N0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzA0ZDM2MSd9fSBcclxuICAgICAgICAgICAgICAgICAgICByYWlsU3R5bGUgPXt7YmFja2dyb3VuZENvbG9yOiAnIzlmNzVmZid9fVxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVN0eWxlID0ge3tib3JkZXJDb2xvcjogJyMwNGQzNjEnICwgYm9yZGVyV2lkdGg6NH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtcHR5U2xpZGVyfT48L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzcGFuPntjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcoZXBpc29kZT8uZHVyYXRpb24gPz8gMCl9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7ZXBpc29kZSAmJiAoXHJcbiAgICAgICAgICA8YXVkaW8gc3JjPXtlcGlzb2RlLnVybH0gXHJcbiAgICAgICAgICBhdXRvUGxheVxyXG4gICAgICAgICAgcmVmPXthdWRpb1JlZn1cclxuICAgICAgICAgIG9uUGxheSA9IHsoKT0+IHtzZXRQbGF5aW5nU3RhdGUodHJ1ZSl9fVxyXG4gICAgICAgICAgb25QYXVzZSA9IHsoKT0+IHtzZXRQbGF5aW5nU3RhdGUoZmFsc2UpfX1cclxuICAgICAgICAgIGxvb3AgPSB7aXNMb29waW5nfVxyXG4gICAgICAgICAgb25Mb2FkTWV0YURhdGEgPXtzZXR1cFByb2dyZXNzTGlzdGVuZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XHJcbiAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgZGlzYWJsZWQ9eyFlcGlzb2RlIHx8IGVwaXNvZGVMaXN0Lmxlbmd0aCA9PTF9XHJcbiAgICAgICAgICBvbkNsaWNrID0ge3RvZ2dsZVNodWZmbGV9XHJcbiAgICAgICAgICBjbGFzc05hbWUgPSB7aXNTaHVmZmxpbmcgPyBzdHlsZXMuaXNBY3RpdmUgOiAnJ31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc2h1ZmZsZS5zdmdcIiBhbHQ9XCJFbWJhcmFsaGFyXCIvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17IWVwaXNvZGUgfHwgIWhhc1ByZXZpb3VzfSBvbkNsaWNrPXtwbGF5UHJldmlvdXN9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LXByZXZpb3VzLnN2Z1wiIGFsdD1cIlRvY2FyIEFudGVyaW9yXCIvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucGxheUJ1dHRvbn0gXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshZXBpc29kZX1cclxuICAgICAgICAgICAgb25DbGljayA9IHsgdG9nZ2xlUGxheX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2lzUGxheWluZyA/IChcclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wYXVzZS5zdmdcIiBhbHQ9XCJUb2NhclwiLz5cclxuICAgICAgICAgICAgKTogKFxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXkuc3ZnXCIgYWx0PVwiUGF1c2FyXCIvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17IWVwaXNvZGUgfHwgIWhhc05leHR9IG9uQ2xpY2s9e3BsYXlOZXh0fSA+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktbmV4dC5zdmdcIiBhbHQ9XCJUb2NhciBQcsOzeGltb1wiLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgIGRpc2FibGVkPXshZXBpc29kZX0gXHJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVMb29wfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSB7IGlzTG9vcGluZyA/IHN0eWxlcy5pc0FjdGl2ZSA6ICcnIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvcmVwZWF0LnN2Z1wiIGFsdD1cIlJlcGl0aXJcIi8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==