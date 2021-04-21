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
___CSS_LOADER_EXPORT___.push([module.i, ".home_homepage__L3XLo {\n  padding: 0 4rem;\n  height: calc(100vh - 6.5rem);\n  overflow-y: scroll;\n}\n.home_homepage__L3XLo h2 {\n  margin-top: 3rem;\n  margin-bottom: 1.5rem;\n}\n\n.home_latestEpisodes__sprHN ul {\n  list-style: none;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 1.5rem;\n  gap: 1.5rem;\n}\n.home_latestEpisodes__sprHN ul li {\n  background: var(--white);\n  border: 1px solid var(--gray-100);\n  padding: 1.25rem;\n  border-radius: 1.5rem;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.home_latestEpisodes__sprHN ul li img {\n  width: 6rem;\n  height: 6rem;\n  border-radius: 1rem;\n}\n.home_latestEpisodes__sprHN ul li .home_episodeDetails__3Z432 {\n  flex: 1 1;\n  margin-left: 1rem;\n}\n.home_latestEpisodes__sprHN ul li .home_episodeDetails__3Z432 a {\n  display: block;\n  color: var(--gray-800);\n  font-family: Lexend, sans-serif;\n  font-weight: 600;\n  text-decoration: none;\n  line-height: 1.4rem;\n}\n.home_latestEpisodes__sprHN ul li .home_episodeDetails__3Z432 a.home_hover__2yT-U {\n  text-decoration: underline;\n}\n.home_latestEpisodes__sprHN ul li .home_episodeDetails__3Z432 p {\n  font-size: 0.875rem;\n  margin-top: 0.5rem;\n  max-width: 70%;\n  white-space: nowrap;\n  overflow: hidden;\n}", "",{"version":3,"sources":["webpack://home.module.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,4BAAA;EACA,kBAAA;AACF;AACE;EACE,gBAAA;EACA,qBAAA;AACJ;;AAIE;EACE,gBAAA;EACA,aAAA;EACA,qCAAA;EACA,gBAAA;EAAA,WAAA;AADJ;AAGI;EACE,wBAAA;EACA,iCAAA;EACA,gBAAA;EACA,qBAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;AADN;AAGM;EACE,WAAA;EACA,YAAA;EACA,mBAAA;AADR;AAIM;EACE,SAAA;EACA,iBAAA;AAFR;AAIQ;EACE,cAAA;EACA,sBAAA;EACA,+BAAA;EACA,gBAAA;EACA,qBAAA;EACA,mBAAA;AAFV;AAIU;EACE,0BAAA;AAFZ;AAMQ;EACE,mBAAA;EACA,kBAAA;EACA,cAAA;EACA,mBAAA;EACA,gBAAA;AAJV","sourcesContent":[".homepage {\r\n  padding: 0 4rem;\r\n  height: calc(100vh - 6.5rem); //deixa o header statico em cima\r\n  overflow-y: scroll; //scrool apenas dentro da div\r\n\r\n  h2 {\r\n    margin-top: 3rem;\r\n    margin-bottom: 1.5rem;\r\n  }\r\n}\r\n\r\n.latestEpisodes {\r\n  ul {\r\n    list-style: none;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 1.5rem;\r\n\r\n    li {\r\n      background: var(--white);\r\n      border: 1px solid var(--gray-100);\r\n      padding: 1.25rem;\r\n      border-radius: 1.5rem;\r\n      position: relative;\r\n      display: flex;\r\n      align-items: center;\r\n\r\n      img {\r\n        width: 6rem;\r\n        height: 6rem;\r\n        border-radius: 1rem;\r\n      }\r\n\r\n      .episodeDetails {\r\n        flex: 1;\r\n        margin-left: 1rem;\r\n\r\n        a {\r\n          display: block;\r\n          color: var(--gray-800);\r\n          font-family: Lexend, sans-serif;\r\n          font-weight: 600;\r\n          text-decoration: none;\r\n          line-height: 1.4rem;\r\n\r\n          &.hover {\r\n            text-decoration: underline;\r\n          }\r\n        }\r\n\r\n        p {\r\n          font-size: 0.875rem;\r\n          margin-top: 0.5rem;\r\n          max-width: 70%;\r\n          white-space: nowrap; //nao quebra a linha\r\n          overflow: hidden; // se passar de tamanh oculta para o usuario\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDBCQUEwQixvQkFBb0IsaUNBQWlDLHVCQUF1QixHQUFHLDRCQUE0QixxQkFBcUIsMEJBQTBCLEdBQUcsb0NBQW9DLHFCQUFxQixrQkFBa0IsMENBQTBDLHFCQUFxQixnQkFBZ0IsR0FBRyxxQ0FBcUMsNkJBQTZCLHNDQUFzQyxxQkFBcUIsMEJBQTBCLHVCQUF1QixrQkFBa0Isd0JBQXdCLEdBQUcseUNBQXlDLGdCQUFnQixpQkFBaUIsd0JBQXdCLEdBQUcsaUVBQWlFLGNBQWMsc0JBQXNCLEdBQUcsbUVBQW1FLG1CQUFtQiwyQkFBMkIsb0NBQW9DLHFCQUFxQiwwQkFBMEIsd0JBQXdCLEdBQUcscUZBQXFGLCtCQUErQixHQUFHLG1FQUFtRSx3QkFBd0IsdUJBQXVCLG1CQUFtQix3QkFBd0IscUJBQXFCLEdBQUcsT0FBTyxpRkFBaUYsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLG9DQUFvQyxzQkFBc0IsbUNBQW1DLDBEQUEwRCw0Q0FBNEMseUJBQXlCLDhCQUE4QixPQUFPLEtBQUsseUJBQXlCLFVBQVUseUJBQXlCLHNCQUFzQiw4Q0FBOEMsb0JBQW9CLGdCQUFnQixtQ0FBbUMsNENBQTRDLDJCQUEyQixnQ0FBZ0MsNkJBQTZCLHdCQUF3Qiw4QkFBOEIsbUJBQW1CLHdCQUF3Qix5QkFBeUIsZ0NBQWdDLFdBQVcsK0JBQStCLG9CQUFvQiw4QkFBOEIsbUJBQW1CLDZCQUE2QixxQ0FBcUMsOENBQThDLCtCQUErQixvQ0FBb0Msa0NBQWtDLDJCQUEyQiwyQ0FBMkMsZUFBZSxhQUFhLG1CQUFtQixrQ0FBa0MsaUNBQWlDLDZCQUE2QixrQ0FBa0Msb0RBQW9ELDBEQUEwRCxXQUFXLFNBQVMsT0FBTyxLQUFLLHVCQUF1QjtBQUMvd0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xN2QxYTBlMzY1Y2E0ODc0M2IwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmhvbWVfaG9tZXBhZ2VfX0wzWExvIHtcXG4gIHBhZGRpbmc6IDAgNHJlbTtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDYuNXJlbSk7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcbi5ob21lX2hvbWVwYWdlX19MM1hMbyBoMiB7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4uaG9tZV9sYXRlc3RFcGlzb2Rlc19fc3BySE4gdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC1nYXA6IDEuNXJlbTtcXG4gIGdhcDogMS41cmVtO1xcbn1cXG4uaG9tZV9sYXRlc3RFcGlzb2Rlc19fc3BySE4gdWwgbGkge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheS0xMDApO1xcbiAgcGFkZGluZzogMS4yNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaG9tZV9sYXRlc3RFcGlzb2Rlc19fc3BySE4gdWwgbGkgaW1nIHtcXG4gIHdpZHRoOiA2cmVtO1xcbiAgaGVpZ2h0OiA2cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuLmhvbWVfbGF0ZXN0RXBpc29kZXNfX3NwckhOIHVsIGxpIC5ob21lX2VwaXNvZGVEZXRhaWxzX18zWjQzMiB7XFxuICBmbGV4OiAxIDE7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuLmhvbWVfbGF0ZXN0RXBpc29kZXNfX3NwckhOIHVsIGxpIC5ob21lX2VwaXNvZGVEZXRhaWxzX18zWjQzMiBhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IHZhcigtLWdyYXktODAwKTtcXG4gIGZvbnQtZmFtaWx5OiBMZXhlbmQsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcXG59XFxuLmhvbWVfbGF0ZXN0RXBpc29kZXNfX3NwckhOIHVsIGxpIC5ob21lX2VwaXNvZGVEZXRhaWxzX18zWjQzMiBhLmhvbWVfaG92ZXJfXzJ5VC1VIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uaG9tZV9sYXRlc3RFcGlzb2Rlc19fc3BySE4gdWwgbGkgLmhvbWVfZXBpc29kZURldGFpbHNfXzNaNDMyIHAge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIG1heC13aWR0aDogNzAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9ob21lLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUFBLFdBQUE7QUFESjtBQUdJO0VBQ0Usd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUROO0FBR007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRFI7QUFJTTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtBQUZSO0FBSVE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUZWO0FBSVU7RUFDRSwwQkFBQTtBQUZaO0FBTVE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFKVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaG9tZXBhZ2Uge1xcclxcbiAgcGFkZGluZzogMCA0cmVtO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNi41cmVtKTsgLy9kZWl4YSBvIGhlYWRlciBzdGF0aWNvIGVtIGNpbWFcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDsgLy9zY3Jvb2wgYXBlbmFzIGRlbnRybyBkYSBkaXZcXHJcXG5cXHJcXG4gIGgyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubGF0ZXN0RXBpc29kZXMge1xcclxcbiAgdWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBnYXA6IDEuNXJlbTtcXHJcXG5cXHJcXG4gICAgbGkge1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5LTEwMCk7XFxyXFxuICAgICAgcGFkZGluZzogMS4yNXJlbTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICBpbWcge1xcclxcbiAgICAgICAgd2lkdGg6IDZyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDZyZW07XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuZXBpc29kZURldGFpbHMge1xcclxcbiAgICAgICAgZmxleDogMTtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcblxcclxcbiAgICAgICAgYSB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS04MDApO1xcclxcbiAgICAgICAgICBmb250LWZhbWlseTogTGV4ZW5kLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICYuaG92ZXIge1xcclxcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBwIHtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgICAgICAgICBtYXgtd2lkdGg6IDcwJTtcXHJcXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgLy9uYW8gcXVlYnJhIGEgbGluaGFcXHJcXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgLy8gc2UgcGFzc2FyIGRlIHRhbWFuaCBvY3VsdGEgcGFyYSBvIHVzdWFyaW9cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaG9tZXBhZ2VcIjogXCJob21lX2hvbWVwYWdlX19MM1hMb1wiLFxuXHRcImxhdGVzdEVwaXNvZGVzXCI6IFwiaG9tZV9sYXRlc3RFcGlzb2Rlc19fc3BySE5cIixcblx0XCJlcGlzb2RlRGV0YWlsc1wiOiBcImhvbWVfZXBpc29kZURldGFpbHNfXzNaNDMyXCIsXG5cdFwiaG92ZXJcIjogXCJob21lX2hvdmVyX18yeVQtVVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=