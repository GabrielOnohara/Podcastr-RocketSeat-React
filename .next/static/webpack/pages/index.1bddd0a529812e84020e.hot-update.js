webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/pages/home.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/pages/home.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".home_homepage__L3XLo {\n  padding: 0 4rem;\n  height: calc(100vh - 6.5rem);\n  overflow-y: scroll;\n}\n.home_homepage__L3XLo h2 {\n  margin-top: 3rem;\n  margin-bottom: 1.5rem;\n}\n\n.home_latestEpisodes__sprHN ul {\n  list-style: none;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 1.5rem;\n  gap: 1.5rem;\n}\n.home_latestEpisodes__sprHN ul li {\n  background: var(--white);\n  border: 1px solid var(--gray-100);\n  padding: 1.25rem;\n  border-radius: 1.5rem;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.home_latestEpisodes__sprHN ul li img {\n  width: 6rem;\n  height: 6rem;\n  border-radius: 1rem;\n}\n.home_latestEpisodes__sprHN ul li .home_episodeDetails__3Z432 {\n  flex: 1 1;\n  margin-left: 1rem;\n}\n.home_latestEpisodes__sprHN ul li .home_episodeDetails__3Z432 a {\n  display: block;\n  color: var(--gray-800);\n  font-family: Lexend, sans-serif;\n  font-weight: 600;\n  text-decoration: none;\n  line-height: 1.4rem;\n}\n.home_latestEpisodes__sprHN ul li .home_episodeDetails__3Z432 a.home_hover__2yT-U {\n  text-decoration: underline;\n}\n.home_latestEpisodes__sprHN ul li .home_episodeDetails__3Z432 p {\n  font-size: 0.875rem;\n  margin-top: 0.5rem;\n  max-width: 70%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.home_latestEpisodes__sprHN ul li .home_episodeDetails__3Z432 span {\n  display: inline-block;\n  margin-top: 0.5rem;\n  font-size: 0.875rem;\n}\n.home_latestEpisodes__sprHN ul li .home_episodeDetails__3Z432 span:first-child {\n  margin-right: 0.5rem;\n  padding-right: 0.5rem;\n  position: relative;\n}\n.home_latestEpisodes__sprHN ul li .home_episodeDetails__3Z432 span:first-child::after {\n  content: \"\";\n  width: 4px;\n  height: 4px;\n  border-radius: 2px;\n  background: #ddd;\n  position: absolute;\n  right: 0;\n  top: 50%;\n}", "",{"version":3,"sources":["webpack://home.module.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,4BAAA;EACA,kBAAA;AACF;AACE;EACE,gBAAA;EACA,qBAAA;AACJ;;AAIE;EACE,gBAAA;EACA,aAAA;EACA,qCAAA;EACA,gBAAA;EAAA,WAAA;AADJ;AAGI;EACE,wBAAA;EACA,iCAAA;EACA,gBAAA;EACA,qBAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;AADN;AAGM;EACE,WAAA;EACA,YAAA;EACA,mBAAA;AADR;AAIM;EACE,SAAA;EACA,iBAAA;AAFR;AAIQ;EACE,cAAA;EACA,sBAAA;EACA,+BAAA;EACA,gBAAA;EACA,qBAAA;EACA,mBAAA;AAFV;AAIU;EACE,0BAAA;AAFZ;AAMQ;EACE,mBAAA;EACA,kBAAA;EACA,cAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;AAJV;AAOQ;EACE,qBAAA;EACA,kBAAA;EACA,mBAAA;AALV;AAOU;EACE,oBAAA;EACA,qBAAA;EACA,kBAAA;AALZ;AAOY;EACE,WAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,QAAA;EACA,QAAA;AALd","sourcesContent":[".homepage {\r\n  padding: 0 4rem;\r\n  height: calc(100vh - 6.5rem); //deixa o header statico em cima\r\n  overflow-y: scroll; //scrool apenas dentro da div\r\n\r\n  h2 {\r\n    margin-top: 3rem;\r\n    margin-bottom: 1.5rem;\r\n  }\r\n}\r\n\r\n.latestEpisodes {\r\n  ul {\r\n    list-style: none;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 1.5rem;\r\n\r\n    li {\r\n      background: var(--white);\r\n      border: 1px solid var(--gray-100);\r\n      padding: 1.25rem;\r\n      border-radius: 1.5rem;\r\n      position: relative;\r\n      display: flex;\r\n      align-items: center;\r\n\r\n      img {\r\n        width: 6rem;\r\n        height: 6rem;\r\n        border-radius: 1rem;\r\n      }\r\n\r\n      .episodeDetails {\r\n        flex: 1;\r\n        margin-left: 1rem;\r\n\r\n        a {\r\n          display: block;\r\n          color: var(--gray-800);\r\n          font-family: Lexend, sans-serif;\r\n          font-weight: 600;\r\n          text-decoration: none;\r\n          line-height: 1.4rem;\r\n\r\n          &.hover {\r\n            text-decoration: underline;\r\n          }\r\n        }\r\n\r\n        p {\r\n          font-size: 0.875rem;\r\n          margin-top: 0.5rem;\r\n          max-width: 70%;\r\n          white-space: nowrap; //nao quebra a linha\r\n          overflow: hidden; // se passar de tamanho oculta para o usuario\r\n          text-overflow: ellipsis; //add 3 ponthinhos quando ocultar\r\n        }\r\n\r\n        span {\r\n          display: inline-block;\r\n          margin-top: 0.5rem;\r\n          font-size: 0.875rem;\r\n\r\n          &:first-child {\r\n            margin-right: 0.5rem;\r\n            padding-right: 0.5rem;\r\n            position: relative;\r\n\r\n            &::after {\r\n              content: \"\";\r\n              width: 4px;\r\n              height: 4px;\r\n              border-radius: 2px;\r\n              background: #ddd;\r\n              position: absolute;\r\n              right: 0;\r\n              top: 50%;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"homepage": "home_homepage__L3XLo",
	"latestEpisodes": "home_latestEpisodes__sprHN",
	"episodeDetails": "home_episodeDetails__3Z432",
	"hover": "home_hover__2yT-U"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDBCQUEwQixvQkFBb0IsaUNBQWlDLHVCQUF1QixHQUFHLDRCQUE0QixxQkFBcUIsMEJBQTBCLEdBQUcsb0NBQW9DLHFCQUFxQixrQkFBa0IsMENBQTBDLHFCQUFxQixnQkFBZ0IsR0FBRyxxQ0FBcUMsNkJBQTZCLHNDQUFzQyxxQkFBcUIsMEJBQTBCLHVCQUF1QixrQkFBa0Isd0JBQXdCLEdBQUcseUNBQXlDLGdCQUFnQixpQkFBaUIsd0JBQXdCLEdBQUcsaUVBQWlFLGNBQWMsc0JBQXNCLEdBQUcsbUVBQW1FLG1CQUFtQiwyQkFBMkIsb0NBQW9DLHFCQUFxQiwwQkFBMEIsd0JBQXdCLEdBQUcscUZBQXFGLCtCQUErQixHQUFHLG1FQUFtRSx3QkFBd0IsdUJBQXVCLG1CQUFtQix3QkFBd0IscUJBQXFCLDRCQUE0QixHQUFHLHNFQUFzRSwwQkFBMEIsdUJBQXVCLHdCQUF3QixHQUFHLGtGQUFrRix5QkFBeUIsMEJBQTBCLHVCQUF1QixHQUFHLHlGQUF5RixrQkFBa0IsZUFBZSxnQkFBZ0IsdUJBQXVCLHFCQUFxQix1QkFBdUIsYUFBYSxhQUFhLEdBQUcsT0FBTyxpRkFBaUYsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLG9DQUFvQyxzQkFBc0IsbUNBQW1DLDBEQUEwRCw0Q0FBNEMseUJBQXlCLDhCQUE4QixPQUFPLEtBQUsseUJBQXlCLFVBQVUseUJBQXlCLHNCQUFzQiw4Q0FBOEMsb0JBQW9CLGdCQUFnQixtQ0FBbUMsNENBQTRDLDJCQUEyQixnQ0FBZ0MsNkJBQTZCLHdCQUF3Qiw4QkFBOEIsbUJBQW1CLHdCQUF3Qix5QkFBeUIsZ0NBQWdDLFdBQVcsK0JBQStCLG9CQUFvQiw4QkFBOEIsbUJBQW1CLDZCQUE2QixxQ0FBcUMsOENBQThDLCtCQUErQixvQ0FBb0Msa0NBQWtDLDJCQUEyQiwyQ0FBMkMsZUFBZSxhQUFhLG1CQUFtQixrQ0FBa0MsaUNBQWlDLDZCQUE2QixrQ0FBa0Msb0RBQW9ELG9GQUFvRiwrQ0FBK0Msc0JBQXNCLG9DQUFvQyxpQ0FBaUMsa0NBQWtDLGlDQUFpQyxxQ0FBcUMsc0NBQXNDLG1DQUFtQyw4QkFBOEIsZ0NBQWdDLDZCQUE2Qiw4QkFBOEIscUNBQXFDLG1DQUFtQyxxQ0FBcUMsMkJBQTJCLDJCQUEyQixpQkFBaUIsZUFBZSxhQUFhLFdBQVcsU0FBUyxPQUFPLEtBQUssdUJBQXVCO0FBQ2xxSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFiZGRkMGE1Mjk4MTJlODQwMjBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaG9tZV9ob21lcGFnZV9fTDNYTG8ge1xcbiAgcGFkZGluZzogMCA0cmVtO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNi41cmVtKTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuLmhvbWVfaG9tZXBhZ2VfX0wzWExvIGgyIHtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbi5ob21lX2xhdGVzdEVwaXNvZGVzX19zcHJITiB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLWdhcDogMS41cmVtO1xcbiAgZ2FwOiAxLjVyZW07XFxufVxcbi5ob21lX2xhdGVzdEVwaXNvZGVzX19zcHJITiB1bCBsaSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5LTEwMCk7XFxuICBwYWRkaW5nOiAxLjI1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ob21lX2xhdGVzdEVwaXNvZGVzX19zcHJITiB1bCBsaSBpbWcge1xcbiAgd2lkdGg6IDZyZW07XFxuICBoZWlnaHQ6IDZyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG4uaG9tZV9sYXRlc3RFcGlzb2Rlc19fc3BySE4gdWwgbGkgLmhvbWVfZXBpc29kZURldGFpbHNfXzNaNDMyIHtcXG4gIGZsZXg6IDEgMTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG4uaG9tZV9sYXRlc3RFcGlzb2Rlc19fc3BySE4gdWwgbGkgLmhvbWVfZXBpc29kZURldGFpbHNfXzNaNDMyIGEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogdmFyKC0tZ3JheS04MDApO1xcbiAgZm9udC1mYW1pbHk6IExleGVuZCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBsaW5lLWhlaWdodDogMS40cmVtO1xcbn1cXG4uaG9tZV9sYXRlc3RFcGlzb2Rlc19fc3BySE4gdWwgbGkgLmhvbWVfZXBpc29kZURldGFpbHNfXzNaNDMyIGEuaG9tZV9ob3Zlcl9fMnlULVUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5ob21lX2xhdGVzdEVwaXNvZGVzX19zcHJITiB1bCBsaSAuaG9tZV9lcGlzb2RlRGV0YWlsc19fM1o0MzIgcCB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgbWF4LXdpZHRoOiA3MCU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4uaG9tZV9sYXRlc3RFcGlzb2Rlc19fc3BySE4gdWwgbGkgLmhvbWVfZXBpc29kZURldGFpbHNfXzNaNDMyIHNwYW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG59XFxuLmhvbWVfbGF0ZXN0RXBpc29kZXNfX3NwckhOIHVsIGxpIC5ob21lX2VwaXNvZGVEZXRhaWxzX18zWjQzMiBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaG9tZV9sYXRlc3RFcGlzb2Rlc19fc3BySE4gdWwgbGkgLmhvbWVfZXBpc29kZURldGFpbHNfXzNaNDMyIHNwYW46Zmlyc3QtY2hpbGQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDRweDtcXG4gIGhlaWdodDogNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZDogI2RkZDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiA1MCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9ob21lLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUFBLFdBQUE7QUFESjtBQUdJO0VBQ0Usd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUROO0FBR007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRFI7QUFJTTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtBQUZSO0FBSVE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUZWO0FBSVU7RUFDRSwwQkFBQTtBQUZaO0FBTVE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUpWO0FBT1E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFMVjtBQU9VO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBTFo7QUFPWTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0FBTGRcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhvbWVwYWdlIHtcXHJcXG4gIHBhZGRpbmc6IDAgNHJlbTtcXHJcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDYuNXJlbSk7IC8vZGVpeGEgbyBoZWFkZXIgc3RhdGljbyBlbSBjaW1hXFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7IC8vc2Nyb29sIGFwZW5hcyBkZW50cm8gZGEgZGl2XFxyXFxuXFxyXFxuICBoMiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmxhdGVzdEVwaXNvZGVzIHtcXHJcXG4gIHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgZ2FwOiAxLjVyZW07XFxyXFxuXFxyXFxuICAgIGxpIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheS0xMDApO1xcclxcbiAgICAgIHBhZGRpbmc6IDEuMjVyZW07XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgaW1nIHtcXHJcXG4gICAgICAgIHdpZHRoOiA2cmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiA2cmVtO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmVwaXNvZGVEZXRhaWxzIHtcXHJcXG4gICAgICAgIGZsZXg6IDE7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG5cXHJcXG4gICAgICAgIGEge1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgY29sb3I6IHZhcigtLWdyYXktODAwKTtcXHJcXG4gICAgICAgICAgZm9udC1mYW1pbHk6IExleGVuZCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40cmVtO1xcclxcblxcclxcbiAgICAgICAgICAmLmhvdmVyIHtcXHJcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgcCB7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxuICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG4gICAgICAgICAgbWF4LXdpZHRoOiA3MCU7XFxyXFxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8vbmFvIHF1ZWJyYSBhIGxpbmhhXFxyXFxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47IC8vIHNlIHBhc3NhciBkZSB0YW1hbmhvIG9jdWx0YSBwYXJhIG8gdXN1YXJpb1xcclxcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgLy9hZGQgMyBwb250aGluaG9zIHF1YW5kbyBvY3VsdGFyXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgICAgICAgICB3aWR0aDogNHB4O1xcclxcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XFxyXFxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xcclxcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICAgICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaG9tZXBhZ2VcIjogXCJob21lX2hvbWVwYWdlX19MM1hMb1wiLFxuXHRcImxhdGVzdEVwaXNvZGVzXCI6IFwiaG9tZV9sYXRlc3RFcGlzb2Rlc19fc3BySE5cIixcblx0XCJlcGlzb2RlRGV0YWlsc1wiOiBcImhvbWVfZXBpc29kZURldGFpbHNfXzNaNDMyXCIsXG5cdFwiaG92ZXJcIjogXCJob21lX2hvdmVyX18yeVQtVVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=