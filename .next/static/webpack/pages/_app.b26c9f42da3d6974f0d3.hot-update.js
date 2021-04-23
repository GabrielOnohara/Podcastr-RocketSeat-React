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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJhdWRpb1JlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInVzZVBsYXllciIsImVwaXNvZGVMaXN0IiwiY3VycmVudEVwaXNvZGVJbmRleCIsImlzUGxheWluZyIsInRvZ2dsZVBsYXkiLCJzZXRQbGF5aW5nU3RhdGUiLCJwbGF5TmV4dCIsInBsYXlQcmV2aW91cyIsImhhc1ByZXZpb3VzIiwiaGFzTmV4dCIsImlzTG9vcGluZyIsInRvZ2dsZUxvb3AiLCJpc1NodWZmbGluZyIsInRvZ2dsZVNodWZmbGUiLCJlcGlzb2RlIiwic2V0dXBQcm9ncmVzc0xpc3RlbmVyIiwiY3VycmVudCIsImN1cnJlbnRUaW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVzZUVmZmVjdCIsInBsYXkiLCJwYXVzZSIsInN0eWxlcyIsInBsYXllckNvbnRhaW5lciIsInRpdGxlIiwiY3VycmVudEVwaXNvZGUiLCJ0aHVtYm5haWwiLCJtZW1iZXJzIiwiZW1wdHlQbGF5ZXIiLCJlbXB0eSIsImNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyIsInNsaWRlciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJlbXB0eVNsaWRlciIsImR1cmF0aW9uIiwidXJsIiwiYnV0dG9ucyIsImxlbmd0aCIsImlzQWN0aXZlIiwicGxheUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHTyxTQUFTQSxNQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBRXRCLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBbUIsSUFBbkIsQ0FBdkI7O0FBRnNCLGtCQUdVQyxzREFBUSxDQUFDLENBQUQsQ0FIbEI7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OUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdkJGLGVBMEJFO0FBQ0EsY0FBSSxFQUFDLFFBREw7QUFFQSxrQkFBUSxFQUFFLENBQUNRLE9BRlg7QUFHQSxpQkFBTyxFQUFFSCxVQUhUO0FBSUEsbUJBQVMsRUFBSUQsU0FBUyxHQUFHWSwwREFBTSxDQUFDa0IsUUFBVixHQUFxQixFQUozQztBQUFBLGlDQU1FO0FBQUssZUFBRyxFQUFDLGFBQVQ7QUFBdUIsZUFBRyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0ZEOztHQWpJZTlDLE07VUFrQlZNLGlFOzs7S0FsQlVOLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iMjZjOWY0MmRhM2Q2OTc0ZjBkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyAgdXNlUGxheWVyIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL1BsYXllckNvbnRleHRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0ICBJbWFnZSAgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcblxyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JjLXNsaWRlcic7XHJcbmltcG9ydCAncmMtc2xpZGVyL2Fzc2V0cy9pbmRleC5jc3MnXHJcbmltcG9ydCB7IGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyB9IGZyb20gXCIuLi8uLi91dGlscy9jb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmdcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGxheWVyKCl7XHJcblxyXG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmPEhUTUxBdWRpb0VsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3Qge1xyXG4gICAgZXBpc29kZUxpc3QsXHJcbiAgICBjdXJyZW50RXBpc29kZUluZGV4LCBcclxuICAgIGlzUGxheWluZywgXHJcbiAgICB0b2dnbGVQbGF5LFxyXG4gICAgc2V0UGxheWluZ1N0YXRlLFxyXG4gICAgcGxheU5leHQsXHJcbiAgICBwbGF5UHJldmlvdXMsXHJcbiAgICBoYXNQcmV2aW91cyxcclxuICAgIGhhc05leHQsXHJcbiAgICBpc0xvb3BpbmcsXHJcbiAgICB0b2dnbGVMb29wLFxyXG4gICAgaXNTaHVmZmxpbmcsXHJcbiAgICB0b2dnbGVTaHVmZmxlLFxyXG4gIH0gPSB1c2VQbGF5ZXIoKTtcclxuXHJcbiAgY29uc3QgZXBpc29kZSA9IGVwaXNvZGVMaXN0W2N1cnJlbnRFcGlzb2RlSW5kZXhdO1xyXG5cclxuICBmdW5jdGlvbiBzZXR1cFByb2dyZXNzTGlzdGVuZXIoKXtcclxuICAgIGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgYXVkaW9SZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJyAsICgpID0+IHtcclxuICAgICAgc2V0UHJvZ3Jlc3MoYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSk7XHJcbiAgICB9KVxyXG5cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZighYXVkaW9SZWYuY3VycmVudCl7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmKGlzUGxheWluZyl7XHJcbiAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGF1c2UoKTtcclxuICAgIH1cclxuICB9LCBbaXNQbGF5aW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYXllckNvbnRhaW5lcn0+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvcGxheWluZy5zdmdcIiBhbHQ9XCJUb2NhbmRvIEFnb3JhXCIvPlxyXG4gICAgICAgIDxzdHJvbmc+VG9jYW5kbyBhZ29yYSB7ZXBpc29kZT8udGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAge2VwaXNvZGUgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50RXBpc29kZX0+XHJcbiAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgd2lkdGg9ezU5Mn1cclxuICAgICAgICAgICBoZWlnaHQ9ezU5Mn0gXHJcbiAgICAgICAgICAgc3JjPXtlcGlzb2RlLnRodW1ibmFpbH0gXHJcbiAgICAgICAgICAgb2JqZWN0Rml0PSdjb3ZlcicvPlxyXG4gICAgICAgICAgIDxzdHJvbmc+e2VwaXNvZGUudGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUubWVtYmVyc308L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eVBsYXllcn0+XHJcbiAgICAgICAgPHN0cm9uZz5TZWxlY2lvbmUgdW0gcG9kY2FzdCBwYXJhIG91dmlyPC9zdHJvbmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17IWVwaXNvZGU/IHN0eWxlcy5lbXB0eSA6ICcnfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzfT5cclxuICAgICAgICA8c3Bhbj57Y29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKHByb2dyZXNzKX08L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlcn0+XHJcbiAgICAgICAgICB7ZXBpc29kZSA/IChcclxuICAgICAgICAgICAgPFNsaWRlciB0cmFja1N0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzA0ZDM2MSd9fSBcclxuICAgICAgICAgICAgICAgICAgICByYWlsU3R5bGUgPXt7YmFja2dyb3VuZENvbG9yOiAnIzlmNzVmZid9fVxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVN0eWxlID0ge3tib3JkZXJDb2xvcjogJyMwNGQzNjEnICwgYm9yZGVyV2lkdGg6NH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtcHR5U2xpZGVyfT48L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzcGFuPntjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcoZXBpc29kZT8uZHVyYXRpb24gPz8gMCl9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7ZXBpc29kZSAmJiAoXHJcbiAgICAgICAgICA8YXVkaW8gc3JjPXtlcGlzb2RlLnVybH0gXHJcbiAgICAgICAgICBhdXRvUGxheVxyXG4gICAgICAgICAgcmVmPXthdWRpb1JlZn1cclxuICAgICAgICAgIG9uUGxheSA9IHsoKT0+IHtzZXRQbGF5aW5nU3RhdGUodHJ1ZSl9fVxyXG4gICAgICAgICAgb25QYXVzZSA9IHsoKT0+IHtzZXRQbGF5aW5nU3RhdGUoZmFsc2UpfX1cclxuICAgICAgICAgIGxvb3AgPSB7aXNMb29waW5nfVxyXG4gICAgICAgICAgb25Mb2FkZWRNZXRhZGF0YSA9e3NldHVwUHJvZ3Jlc3NMaXN0ZW5lcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cclxuICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICBkaXNhYmxlZD17IWVwaXNvZGUgfHwgZXBpc29kZUxpc3QubGVuZ3RoID09MX1cclxuICAgICAgICAgIG9uQ2xpY2sgPSB7dG9nZ2xlU2h1ZmZsZX1cclxuICAgICAgICAgIGNsYXNzTmFtZSA9IHtpc1NodWZmbGluZyA/IHN0eWxlcy5pc0FjdGl2ZSA6ICcnfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zaHVmZmxlLnN2Z1wiIGFsdD1cIkVtYmFyYWxoYXJcIi8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPXshZXBpc29kZSB8fCAhaGFzUHJldmlvdXN9IG9uQ2xpY2s9e3BsYXlQcmV2aW91c30+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktcHJldmlvdXMuc3ZnXCIgYWx0PVwiVG9jYXIgQW50ZXJpb3JcIi8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wbGF5QnV0dG9ufSBcclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFlcGlzb2RlfVxyXG4gICAgICAgICAgICBvbkNsaWNrID0geyB0b2dnbGVQbGF5fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXNQbGF5aW5nID8gKFxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BhdXNlLnN2Z1wiIGFsdD1cIlRvY2FyXCIvPlxyXG4gICAgICAgICAgICApOiAoXHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS5zdmdcIiBhbHQ9XCJQYXVzYXJcIi8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPXshZXBpc29kZSB8fCAhaGFzTmV4dH0gb25DbGljaz17cGxheU5leHR9ID5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1uZXh0LnN2Z1wiIGFsdD1cIlRvY2FyIFByw7N4aW1vXCIvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgZGlzYWJsZWQ9eyFlcGlzb2RlfSBcclxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUxvb3B9XHJcbiAgICAgICAgICBjbGFzc05hbWU9IHsgaXNMb29waW5nID8gc3R5bGVzLmlzQWN0aXZlIDogJycgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9yZXBlYXQuc3ZnXCIgYWx0PVwiUmVwaXRpclwiLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9