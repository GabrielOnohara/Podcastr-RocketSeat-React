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
___CSS_LOADER_EXPORT___.push([module.i, ".home_homepage__L3XLo {\n  padding: 0 4rem;\n  height: calc(100vh - 6.5rem);\n  overflow-y: scroll;\n}\n.home_homepage__L3XLo h2 {\n  margin-top: 3rem;\n  margin-bottom: 1.5rem;\n}\n\n.home_latestEpisodes__sprHN ul {\n  list-style: none;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 1.5rem;\n  gap: 1.5rem;\n}\n.home_latestEpisodes__sprHN ul li {\n  background: var(--white);\n  border: 1px solid var(--gray-100);\n  padding: 1.25rem;\n  border-radius: 1.5rem;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.home_latestEpisodes__sprHN ul li img {\n  width: 6rem;\n  height: 6rem;\n  border-radius: 1rem;\n}\n.home_latestEpisodes__sprHN ul li .home_episodeDetails__3Z432 {\n  flex: 1 1;\n  margin-left: 1rem;\n}\n.home_latestEpisodes__sprHN ul li .home_episodeDetails__3Z432 a {\n  display: block;\n  color: var(--gray-800);\n  font-family: Lexend, sans-serif;\n  font-weight: 600;\n  text-decoration: none;\n  line-height: 1.4rem;\n}\n.home_latestEpisodes__sprHN ul li .home_episodeDetails__3Z432 a.home_hover__2yT-U {\n  text-decoration: underline;\n}\n.home_latestEpisodes__sprHN ul li .home_episodeDetails__3Z432 p {\n  font-size: 0.875rem;\n  margin-top: 0.5rem;\n  max-width: 70%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.home_latestEpisodes__sprHN ul li .home_episodeDetails__3Z432 span {\n  display: inline-block;\n  margin-top: 0.5rem;\n  font-size: 0.875rem;\n}\n.home_latestEpisodes__sprHN ul li .home_episodeDetails__3Z432 span:last-child {\n  margin-right: 0.5rem;\n  padding-right: 0.5rem;\n  position: relative;\n}\n.home_latestEpisodes__sprHN ul li .home_episodeDetails__3Z432 span:last-child::before {\n  content: \"\";\n  width: 4px;\n  height: 4px;\n  border-radius: 2px;\n  background: #ddd;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.home_latestEpisodes__sprHN ul li .home_episodeDetails__3Z432 button {\n  position: absolute;\n  right: 2rem;\n  bottom: 2rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  background: var(--white);\n}", "",{"version":3,"sources":["webpack://home.module.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,4BAAA;EACA,kBAAA;AACF;AACE;EACE,gBAAA;EACA,qBAAA;AACJ;;AAIE;EACE,gBAAA;EACA,aAAA;EACA,qCAAA;EACA,gBAAA;EAAA,WAAA;AADJ;AAGI;EACE,wBAAA;EACA,iCAAA;EACA,gBAAA;EACA,qBAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;AADN;AAGM;EACE,WAAA;EACA,YAAA;EACA,mBAAA;AADR;AAIM;EACE,SAAA;EACA,iBAAA;AAFR;AAIQ;EACE,cAAA;EACA,sBAAA;EACA,+BAAA;EACA,gBAAA;EACA,qBAAA;EACA,mBAAA;AAFV;AAIU;EACE,0BAAA;AAFZ;AAMQ;EACE,mBAAA;EACA,kBAAA;EACA,cAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;AAJV;AAOQ;EACE,qBAAA;EACA,kBAAA;EACA,mBAAA;AALV;AAOU;EAEE,oBAAA;EACA,qBAAA;EACA,kBAAA;AANZ;AAQY;EACE,WAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,OAAA;EACA,QAAA;EACA,wCAAA;UAAA,gCAAA;AANd;AAWQ;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,wBAAA;AATV","sourcesContent":[".homepage {\r\n  padding: 0 4rem;\r\n  height: calc(100vh - 6.5rem); //deixa o header statico em cima\r\n  overflow-y: scroll; //scrool apenas dentro da div\r\n\r\n  h2 {\r\n    margin-top: 3rem;\r\n    margin-bottom: 1.5rem;\r\n  }\r\n}\r\n\r\n.latestEpisodes {\r\n  ul {\r\n    list-style: none;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 1.5rem;\r\n\r\n    li {\r\n      background: var(--white);\r\n      border: 1px solid var(--gray-100);\r\n      padding: 1.25rem;\r\n      border-radius: 1.5rem;\r\n      position: relative;\r\n      display: flex;\r\n      align-items: center;\r\n\r\n      img {\r\n        width: 6rem;\r\n        height: 6rem;\r\n        border-radius: 1rem;\r\n      }\r\n\r\n      .episodeDetails {\r\n        flex: 1;\r\n        margin-left: 1rem;\r\n\r\n        a {\r\n          display: block;\r\n          color: var(--gray-800);\r\n          font-family: Lexend, sans-serif;\r\n          font-weight: 600;\r\n          text-decoration: none;\r\n          line-height: 1.4rem;\r\n\r\n          &.hover {\r\n            text-decoration: underline;\r\n          }\r\n        }\r\n\r\n        p {\r\n          font-size: 0.875rem;\r\n          margin-top: 0.5rem;\r\n          max-width: 70%;\r\n          white-space: nowrap; //nao quebra a linha\r\n          overflow: hidden; // se passar de tamanho oculta para o usuario\r\n          text-overflow: ellipsis; //add 3 ponthinhos quando ocultar\r\n        }\r\n\r\n        span {\r\n          display: inline-block;\r\n          margin-top: 0.5rem;\r\n          font-size: 0.875rem;\r\n\r\n          &:last-child {\r\n            //funcionaria com first child e fosse o priemiro item do item pai\r\n            margin-right: 0.5rem;\r\n            padding-right: 0.5rem;\r\n            position: relative;\r\n\r\n            &::before {\r\n              content: \"\";\r\n              width: 4px;\r\n              height: 4px;\r\n              border-radius: 2px;\r\n              background: #ddd;\r\n              position: absolute;\r\n              left: 0;\r\n              top: 50%;\r\n              transform: translate(-50%, -50%);\r\n            }\r\n          }\r\n        }\r\n\r\n        button {\r\n          position: absolute;\r\n          right: 2rem;\r\n          bottom: 2rem;\r\n          width: 2.5rem;\r\n          height: 2.5rem;\r\n          background: var(--white);\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDBCQUEwQixvQkFBb0IsaUNBQWlDLHVCQUF1QixHQUFHLDRCQUE0QixxQkFBcUIsMEJBQTBCLEdBQUcsb0NBQW9DLHFCQUFxQixrQkFBa0IsMENBQTBDLHFCQUFxQixnQkFBZ0IsR0FBRyxxQ0FBcUMsNkJBQTZCLHNDQUFzQyxxQkFBcUIsMEJBQTBCLHVCQUF1QixrQkFBa0Isd0JBQXdCLEdBQUcseUNBQXlDLGdCQUFnQixpQkFBaUIsd0JBQXdCLEdBQUcsaUVBQWlFLGNBQWMsc0JBQXNCLEdBQUcsbUVBQW1FLG1CQUFtQiwyQkFBMkIsb0NBQW9DLHFCQUFxQiwwQkFBMEIsd0JBQXdCLEdBQUcscUZBQXFGLCtCQUErQixHQUFHLG1FQUFtRSx3QkFBd0IsdUJBQXVCLG1CQUFtQix3QkFBd0IscUJBQXFCLDRCQUE0QixHQUFHLHNFQUFzRSwwQkFBMEIsdUJBQXVCLHdCQUF3QixHQUFHLGlGQUFpRix5QkFBeUIsMEJBQTBCLHVCQUF1QixHQUFHLHlGQUF5RixrQkFBa0IsZUFBZSxnQkFBZ0IsdUJBQXVCLHFCQUFxQix1QkFBdUIsWUFBWSxhQUFhLDZDQUE2Qyw2Q0FBNkMsR0FBRyx3RUFBd0UsdUJBQXVCLGdCQUFnQixpQkFBaUIsa0JBQWtCLG1CQUFtQiw2QkFBNkIsR0FBRyxPQUFPLGlGQUFpRixVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxvQ0FBb0Msc0JBQXNCLG1DQUFtQywwREFBMEQsNENBQTRDLHlCQUF5Qiw4QkFBOEIsT0FBTyxLQUFLLHlCQUF5QixVQUFVLHlCQUF5QixzQkFBc0IsOENBQThDLG9CQUFvQixnQkFBZ0IsbUNBQW1DLDRDQUE0QywyQkFBMkIsZ0NBQWdDLDZCQUE2Qix3QkFBd0IsOEJBQThCLG1CQUFtQix3QkFBd0IseUJBQXlCLGdDQUFnQyxXQUFXLCtCQUErQixvQkFBb0IsOEJBQThCLG1CQUFtQiw2QkFBNkIscUNBQXFDLDhDQUE4QywrQkFBK0Isb0NBQW9DLGtDQUFrQywyQkFBMkIsMkNBQTJDLGVBQWUsYUFBYSxtQkFBbUIsa0NBQWtDLGlDQUFpQyw2QkFBNkIsa0NBQWtDLG9EQUFvRCxvRkFBb0YsK0NBQStDLHNCQUFzQixvQ0FBb0MsaUNBQWlDLGtDQUFrQyxnQ0FBZ0Msc0hBQXNILHNDQUFzQyxtQ0FBbUMsK0JBQStCLGdDQUFnQyw2QkFBNkIsOEJBQThCLHFDQUFxQyxtQ0FBbUMscUNBQXFDLDBCQUEwQiwyQkFBMkIsbURBQW1ELGlCQUFpQixlQUFlLGFBQWEsd0JBQXdCLGlDQUFpQywwQkFBMEIsMkJBQTJCLDRCQUE0Qiw2QkFBNkIsdUNBQXVDLGFBQWEsV0FBVyxTQUFTLE9BQU8sS0FBSyx1QkFBdUI7QUFDMzNLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGRlMWYzNjVmMGE1ZjEzYjEzNDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ob21lX2hvbWVwYWdlX19MM1hMbyB7XFxuICBwYWRkaW5nOiAwIDRyZW07XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2LjVyZW0pO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG4uaG9tZV9ob21lcGFnZV9fTDNYTG8gaDIge1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuLmhvbWVfbGF0ZXN0RXBpc29kZXNfX3NwckhOIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtZ2FwOiAxLjVyZW07XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuLmhvbWVfbGF0ZXN0RXBpc29kZXNfX3NwckhOIHVsIGxpIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktMTAwKTtcXG4gIHBhZGRpbmc6IDEuMjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhvbWVfbGF0ZXN0RXBpc29kZXNfX3NwckhOIHVsIGxpIGltZyB7XFxuICB3aWR0aDogNnJlbTtcXG4gIGhlaWdodDogNnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcbi5ob21lX2xhdGVzdEVwaXNvZGVzX19zcHJITiB1bCBsaSAuaG9tZV9lcGlzb2RlRGV0YWlsc19fM1o0MzIge1xcbiAgZmxleDogMSAxO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcbi5ob21lX2xhdGVzdEVwaXNvZGVzX19zcHJITiB1bCBsaSAuaG9tZV9lcGlzb2RlRGV0YWlsc19fM1o0MzIgYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XFxuICBmb250LWZhbWlseTogTGV4ZW5kLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjRyZW07XFxufVxcbi5ob21lX2xhdGVzdEVwaXNvZGVzX19zcHJITiB1bCBsaSAuaG9tZV9lcGlzb2RlRGV0YWlsc19fM1o0MzIgYS5ob21lX2hvdmVyX18yeVQtVSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLmhvbWVfbGF0ZXN0RXBpc29kZXNfX3NwckhOIHVsIGxpIC5ob21lX2VwaXNvZGVEZXRhaWxzX18zWjQzMiBwIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBtYXgtd2lkdGg6IDcwJTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi5ob21lX2xhdGVzdEVwaXNvZGVzX19zcHJITiB1bCBsaSAuaG9tZV9lcGlzb2RlRGV0YWlsc19fM1o0MzIgc3BhbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbn1cXG4uaG9tZV9sYXRlc3RFcGlzb2Rlc19fc3BySE4gdWwgbGkgLmhvbWVfZXBpc29kZURldGFpbHNfXzNaNDMyIHNwYW46bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmhvbWVfbGF0ZXN0RXBpc29kZXNfX3NwckhOIHVsIGxpIC5ob21lX2VwaXNvZGVEZXRhaWxzX18zWjQzMiBzcGFuOmxhc3QtY2hpbGQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiA0cHg7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQ6ICNkZGQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuLmhvbWVfbGF0ZXN0RXBpc29kZXNfX3NwckhOIHVsIGxpIC5ob21lX2VwaXNvZGVEZXRhaWxzX18zWjQzMiBidXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDJyZW07XFxuICBib3R0b206IDJyZW07XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9ob21lLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUFBLFdBQUE7QUFESjtBQUdJO0VBQ0Usd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUROO0FBR007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRFI7QUFJTTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtBQUZSO0FBSVE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUZWO0FBSVU7RUFDRSwwQkFBQTtBQUZaO0FBTVE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUpWO0FBT1E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFMVjtBQU9VO0VBRUUsb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBTlo7QUFRWTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQU5kO0FBV1E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtBQVRWXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ob21lcGFnZSB7XFxyXFxuICBwYWRkaW5nOiAwIDRyZW07XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2LjVyZW0pOyAvL2RlaXhhIG8gaGVhZGVyIHN0YXRpY28gZW0gY2ltYVxcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsOyAvL3Njcm9vbCBhcGVuYXMgZGVudHJvIGRhIGRpdlxcclxcblxcclxcbiAgaDIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5sYXRlc3RFcGlzb2RlcyB7XFxyXFxuICB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgIGdhcDogMS41cmVtO1xcclxcblxcclxcbiAgICBsaSB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktMTAwKTtcXHJcXG4gICAgICBwYWRkaW5nOiAxLjI1cmVtO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgIGltZyB7XFxyXFxuICAgICAgICB3aWR0aDogNnJlbTtcXHJcXG4gICAgICAgIGhlaWdodDogNnJlbTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5lcGlzb2RlRGV0YWlscyB7XFxyXFxuICAgICAgICBmbGV4OiAxO1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuXFxyXFxuICAgICAgICBhIHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XFxyXFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBMZXhlbmQsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcXHJcXG5cXHJcXG4gICAgICAgICAgJi5ob3ZlciB7XFxyXFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIHAge1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICAgICAgICAgIG1heC13aWR0aDogNzAlO1xcclxcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvL25hbyBxdWVicmEgYSBsaW5oYVxcclxcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyAvLyBzZSBwYXNzYXIgZGUgdGFtYW5obyBvY3VsdGEgcGFyYSBvIHVzdWFyaW9cXHJcXG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IC8vYWRkIDMgcG9udGhpbmhvcyBxdWFuZG8gb2N1bHRhclxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcblxcclxcbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xcclxcbiAgICAgICAgICAgIC8vZnVuY2lvbmFyaWEgY29tIGZpcnN0IGNoaWxkIGUgZm9zc2UgbyBwcmllbWlybyBpdGVtIGRvIGl0ZW0gcGFpXFxyXFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgICAgICAgICB3aWR0aDogNHB4O1xcclxcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XFxyXFxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xcclxcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgICAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgIHJpZ2h0OiAycmVtO1xcclxcbiAgICAgICAgICBib3R0b206IDJyZW07XFxyXFxuICAgICAgICAgIHdpZHRoOiAyLjVyZW07XFxyXFxuICAgICAgICAgIGhlaWdodDogMi41cmVtO1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImhvbWVwYWdlXCI6IFwiaG9tZV9ob21lcGFnZV9fTDNYTG9cIixcblx0XCJsYXRlc3RFcGlzb2Rlc1wiOiBcImhvbWVfbGF0ZXN0RXBpc29kZXNfX3NwckhOXCIsXG5cdFwiZXBpc29kZURldGFpbHNcIjogXCJob21lX2VwaXNvZGVEZXRhaWxzX18zWjQzMlwiLFxuXHRcImhvdmVyXCI6IFwiaG9tZV9ob3Zlcl9fMnlULVVcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9