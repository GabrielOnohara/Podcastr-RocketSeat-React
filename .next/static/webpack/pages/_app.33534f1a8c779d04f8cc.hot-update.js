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

  function handleSeek(amount) {
    audioRef.current.currentTime = amount;
    setProgress(amount);
  }

  function handleEpisodeEnded() {
    if (hasNext) {
      playNext();
    }
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
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: ["Tocando agora ", episode === null || episode === void 0 ? void 0 : episode.title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
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
        lineNumber: 73,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: episode.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 12
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.members
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 12
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.emptyPlayer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Selecione um podcast para ouvir"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: !episode ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.empty : '',
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.progress,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: Object(_utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__["convertDurationToTimeString"])(progress)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slider,
          children: episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(rc_slider__WEBPACK_IMPORTED_MODULE_5__["default"], {
            onChange: handleSeek,
            max: episode.duration,
            value: progress,
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
            lineNumber: 92,
            columnNumber: 13
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.emptySlider
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: Object(_utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__["convertDurationToTimeString"])((_episode$duration = episode === null || episode === void 0 ? void 0 : episode.duration) !== null && _episode$duration !== void 0 ? _episode$duration : 0)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this), episode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("audio", {
        src: episode.url,
        autoPlay: true,
        onEnded: handleEpisodeEnded,
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
        lineNumber: 108,
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
            lineNumber: 126,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
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
            lineNumber: 129,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
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
            lineNumber: 137,
            columnNumber: 15
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/play.svg",
            alt: "Pausar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
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
            lineNumber: 143,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
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
            lineNumber: 151,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJhdWRpb1JlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInVzZVBsYXllciIsImVwaXNvZGVMaXN0IiwiY3VycmVudEVwaXNvZGVJbmRleCIsImlzUGxheWluZyIsInRvZ2dsZVBsYXkiLCJzZXRQbGF5aW5nU3RhdGUiLCJwbGF5TmV4dCIsInBsYXlQcmV2aW91cyIsImhhc1ByZXZpb3VzIiwiaGFzTmV4dCIsImlzTG9vcGluZyIsInRvZ2dsZUxvb3AiLCJpc1NodWZmbGluZyIsInRvZ2dsZVNodWZmbGUiLCJlcGlzb2RlIiwic2V0dXBQcm9ncmVzc0xpc3RlbmVyIiwiY3VycmVudCIsImN1cnJlbnRUaW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsIk1hdGgiLCJmbG9vciIsImhhbmRsZVNlZWsiLCJhbW91bnQiLCJoYW5kbGVFcGlzb2RlRW5kZWQiLCJ1c2VFZmZlY3QiLCJwbGF5IiwicGF1c2UiLCJzdHlsZXMiLCJwbGF5ZXJDb250YWluZXIiLCJ0aXRsZSIsImN1cnJlbnRFcGlzb2RlIiwidGh1bWJuYWlsIiwibWVtYmVycyIsImVtcHR5UGxheWVyIiwiZW1wdHkiLCJjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmciLCJzbGlkZXIiLCJkdXJhdGlvbiIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJlbXB0eVNsaWRlciIsInVybCIsImJ1dHRvbnMiLCJsZW5ndGgiLCJpc0FjdGl2ZSIsInBsYXlCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR08sU0FBU0EsTUFBVCxHQUFpQjtBQUFBOztBQUFBOztBQUV0QixNQUFNQyxRQUFRLEdBQUdDLG9E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QjtBQUVFLGtCQUFRLEVBQUUsQ0FBQ2hDLE9BRmI7QUFHRSxpQkFBTyxFQUFLVixVQUhkO0FBQUEsb0JBS0dELFNBQVMsZ0JBQ1I7QUFBSyxlQUFHLEVBQUMsWUFBVDtBQUFzQixlQUFHLEVBQUM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEUSxnQkFHUjtBQUFLLGVBQUcsRUFBQyxXQUFUO0FBQXFCLGVBQUcsRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUko7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaRixlQXVCRTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLGtCQUFRLEVBQUUsQ0FBQ1csT0FBRCxJQUFZLENBQUNMLE9BQTdDO0FBQXNELGlCQUFPLEVBQUVILFFBQS9EO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUMsZ0JBQVQ7QUFBMEIsZUFBRyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZCRixlQTBCRTtBQUNBLGNBQUksRUFBQyxRQURMO0FBRUEsa0JBQVEsRUFBRSxDQUFDUSxPQUZYO0FBR0EsaUJBQU8sRUFBRUgsVUFIVDtBQUlBLG1CQUFTLEVBQUlELFNBQVMsR0FBR2lCLDBEQUFNLENBQUNrQixRQUFWLEdBQXFCLEVBSjNDO0FBQUEsaUNBTUU7QUFBSyxlQUFHLEVBQUMsYUFBVDtBQUF1QixlQUFHLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2RkQ7O0dBakplbkQsTTtVQWtCVk0saUU7OztLQWxCVU4sTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjMzNTM0ZjFhOGM3NzlkMDRmOGNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyAgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ICB1c2VQbGF5ZXIgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvUGxheWVyQ29udGV4dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgIEltYWdlICBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuXHJcbmltcG9ydCBTbGlkZXIgZnJvbSAncmMtc2xpZGVyJztcclxuaW1wb3J0ICdyYy1zbGlkZXIvYXNzZXRzL2luZGV4LmNzcydcclxuaW1wb3J0IHsgY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZ1wiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXIoKXtcclxuXHJcbiAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWY8SFRNTEF1ZGlvRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCB7XHJcbiAgICBlcGlzb2RlTGlzdCxcclxuICAgIGN1cnJlbnRFcGlzb2RlSW5kZXgsIFxyXG4gICAgaXNQbGF5aW5nLCBcclxuICAgIHRvZ2dsZVBsYXksXHJcbiAgICBzZXRQbGF5aW5nU3RhdGUsXHJcbiAgICBwbGF5TmV4dCxcclxuICAgIHBsYXlQcmV2aW91cyxcclxuICAgIGhhc1ByZXZpb3VzLFxyXG4gICAgaGFzTmV4dCxcclxuICAgIGlzTG9vcGluZyxcclxuICAgIHRvZ2dsZUxvb3AsXHJcbiAgICBpc1NodWZmbGluZyxcclxuICAgIHRvZ2dsZVNodWZmbGUsXHJcbiAgfSA9IHVzZVBsYXllcigpO1xyXG5cclxuICBjb25zdCBlcGlzb2RlID0gZXBpc29kZUxpc3RbY3VycmVudEVwaXNvZGVJbmRleF07XHJcblxyXG4gIGZ1bmN0aW9uIHNldHVwUHJvZ3Jlc3NMaXN0ZW5lcigpe1xyXG4gICAgYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBhdWRpb1JlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnICwgKCkgPT4ge1xyXG4gICAgICBzZXRQcm9ncmVzcyhNYXRoLmZsb29yKGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUpKTtcclxuICAgIH0pXHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU2VlayhhbW91bnQ6IG51bWJlcil7XHJcbiAgICBhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lID0gYW1vdW50O1xyXG4gICAgc2V0UHJvZ3Jlc3MoYW1vdW50KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUVwaXNvZGVFbmRlZCgpe1xyXG4gICAgaWYoaGFzTmV4dCl7XHJcbiAgICAgIHBsYXlOZXh0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoIWF1ZGlvUmVmLmN1cnJlbnQpe1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZihpc1BsYXlpbmcpe1xyXG4gICAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTtcclxuICAgIH1lbHNle1xyXG4gICAgICBhdWRpb1JlZi5jdXJyZW50LnBhdXNlKCk7XHJcbiAgICB9XHJcbiAgfSwgW2lzUGxheWluZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5ZXJDb250YWluZXJ9PlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL3BsYXlpbmcuc3ZnXCIgYWx0PVwiVG9jYW5kbyBBZ29yYVwiLz5cclxuICAgICAgICA8c3Ryb25nPlRvY2FuZG8gYWdvcmEge2VwaXNvZGU/LnRpdGxlfTwvc3Ryb25nPlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIHtlcGlzb2RlID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVudEVwaXNvZGV9PlxyXG4gICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgIHdpZHRoPXs1OTJ9XHJcbiAgICAgICAgICAgaGVpZ2h0PXs1OTJ9IFxyXG4gICAgICAgICAgIHNyYz17ZXBpc29kZS50aHVtYm5haWx9IFxyXG4gICAgICAgICAgIG9iamVjdEZpdD0nY292ZXInLz5cclxuICAgICAgICAgICA8c3Ryb25nPntlcGlzb2RlLnRpdGxlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgIDxzcGFuPntlcGlzb2RlLm1lbWJlcnN9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHlQbGF5ZXJ9PlxyXG4gICAgICAgIDxzdHJvbmc+U2VsZWNpb25lIHVtIHBvZGNhc3QgcGFyYSBvdXZpcjwvc3Ryb25nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9eyFlcGlzb2RlPyBzdHlsZXMuZW1wdHkgOiAnJ30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc30+XHJcbiAgICAgICAgPHNwYW4+e2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyhwcm9ncmVzcyl9PC9zcGFuPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJ9PlxyXG4gICAgICAgICAge2VwaXNvZGUgPyAoXHJcbiAgICAgICAgICAgIDxTbGlkZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7aGFuZGxlU2Vla31cclxuICAgICAgICAgICAgICAgICAgICBtYXggPSB7ZXBpc29kZS5kdXJhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9e3Byb2dyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrU3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjMDRkMzYxJ319IFxyXG4gICAgICAgICAgICAgICAgICAgIHJhaWxTdHlsZSA9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjOWY3NWZmJ319XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3R5bGUgPSB7e2JvcmRlckNvbG9yOiAnIzA0ZDM2MScgLCBib3JkZXJXaWR0aDo0fX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHlTbGlkZXJ9PjwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4+e2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyhlcGlzb2RlPy5kdXJhdGlvbiA/PyAwKX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtlcGlzb2RlICYmIChcclxuICAgICAgICAgIDxhdWRpbyBzcmM9e2VwaXNvZGUudXJsfSBcclxuICAgICAgICAgIGF1dG9QbGF5XHJcbiAgICAgICAgICBvbkVuZGVkID0ge2hhbmRsZUVwaXNvZGVFbmRlZH1cclxuICAgICAgICAgIHJlZj17YXVkaW9SZWZ9XHJcbiAgICAgICAgICBvblBsYXkgPSB7KCk9PiB7c2V0UGxheWluZ1N0YXRlKHRydWUpfX1cclxuICAgICAgICAgIG9uUGF1c2UgPSB7KCk9PiB7c2V0UGxheWluZ1N0YXRlKGZhbHNlKX19XHJcbiAgICAgICAgICBsb29wID0ge2lzTG9vcGluZ31cclxuICAgICAgICAgIG9uTG9hZGVkTWV0YWRhdGEgPXtzZXR1cFByb2dyZXNzTGlzdGVuZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XHJcbiAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgZGlzYWJsZWQ9eyFlcGlzb2RlIHx8IGVwaXNvZGVMaXN0Lmxlbmd0aCA9PTF9XHJcbiAgICAgICAgICBvbkNsaWNrID0ge3RvZ2dsZVNodWZmbGV9XHJcbiAgICAgICAgICBjbGFzc05hbWUgPSB7aXNTaHVmZmxpbmcgPyBzdHlsZXMuaXNBY3RpdmUgOiAnJ31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc2h1ZmZsZS5zdmdcIiBhbHQ9XCJFbWJhcmFsaGFyXCIvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17IWVwaXNvZGUgfHwgIWhhc1ByZXZpb3VzfSBvbkNsaWNrPXtwbGF5UHJldmlvdXN9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LXByZXZpb3VzLnN2Z1wiIGFsdD1cIlRvY2FyIEFudGVyaW9yXCIvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucGxheUJ1dHRvbn0gXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshZXBpc29kZX1cclxuICAgICAgICAgICAgb25DbGljayA9IHsgdG9nZ2xlUGxheX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2lzUGxheWluZyA/IChcclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wYXVzZS5zdmdcIiBhbHQ9XCJUb2NhclwiLz5cclxuICAgICAgICAgICAgKTogKFxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXkuc3ZnXCIgYWx0PVwiUGF1c2FyXCIvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17IWVwaXNvZGUgfHwgIWhhc05leHR9IG9uQ2xpY2s9e3BsYXlOZXh0fSA+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktbmV4dC5zdmdcIiBhbHQ9XCJUb2NhciBQcsOzeGltb1wiLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgIGRpc2FibGVkPXshZXBpc29kZX0gXHJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVMb29wfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSB7IGlzTG9vcGluZyA/IHN0eWxlcy5pc0FjdGl2ZSA6ICcnIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvcmVwZWF0LnN2Z1wiIGFsdD1cIlJlcGl0aXJcIi8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==