"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Control */ \"./components/Control.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const clickHandler = ()=>{\n        setShow(true);\n    };\n    const clickHandler2 = ()=>{\n        setShow(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen h-screen flex flex-col justify-center items-center bg-slate-900\",\n        children: [\n            show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Control__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                myfunc: clickHandler2\n            }, void 0, false, {\n                fileName: \"D:\\\\code\\\\projects\\\\racingBar\\\\myappFinal\\\\pages\\\\index.jsx\",\n                lineNumber: 16,\n                columnNumber: 16\n            }, this),\n            !show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white mb-10 flex flex-wrap\",\n                children: \" It's a bar chart racing visualisation of the total goals scored by 7 different footbal players in 2 different  \"\n            }, void 0, false, {\n                fileName: \"D:\\\\code\\\\projects\\\\racingBar\\\\myappFinal\\\\pages\\\\index.jsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this),\n            !show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"w-[120px] h-[30px] bg-white rounded-md font-bold text-blue-700 ring-4\",\n                onClick: clickHandler,\n                children: \"Start Action\"\n            }, void 0, false, {\n                fileName: \"D:\\\\code\\\\projects\\\\racingBar\\\\myappFinal\\\\pages\\\\index.jsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\code\\\\projects\\\\racingBar\\\\myappFinal\\\\pages\\\\index.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"NKb1ZOdhT+qUsWLXSgjSS2bk2C4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBQ1g7QUFFbEIsU0FBU0UsT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQSxDQUFDLEtBQUs7SUFFdEMsTUFBTUksZUFBZSxJQUFNO1FBQ3pCRCxRQUFRLElBQUk7SUFDZDtJQUNBLE1BQU1FLGdCQUFnQixJQUFNO1FBQzFCRixRQUFRLEtBQUs7SUFDZjtJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOztZQUNaTCxzQkFBUSw4REFBQ0gsMkRBQU9BO2dCQUFDUyxRQUFRSDs7Ozs7O1lBQ3pCLENBQUNILHNCQUNBLDhEQUFDSTtnQkFBSUMsV0FBVTswQkFBa0M7Ozs7OztZQUVsRCxDQUFDTCxzQkFDQSw4REFBQ087Z0JBQ0NGLFdBQVU7Z0JBQ1ZHLFNBQVNOOzBCQUNWOzs7Ozs7Ozs7Ozs7QUFNVCxDQUFDO0dBMUJ1Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRyb2wgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udHJvbFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGNsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICBzZXRTaG93KHRydWUpO1xuICB9O1xuICBjb25zdCBjbGlja0hhbmRsZXIyID0gKCkgPT4ge1xuICAgIHNldFNob3coZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLXNjcmVlbiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy1zbGF0ZS05MDBcIj5cbiAgICAgIHtzaG93ICYmIDxDb250cm9sIG15ZnVuYz17Y2xpY2tIYW5kbGVyMn0+PC9Db250cm9sPn1cbiAgICAgIHshc2hvdyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi0xMCBmbGV4IGZsZXgtd3JhcFwiPiBJdCdzIGEgYmFyIGNoYXJ0IHJhY2luZyB2aXN1YWxpc2F0aW9uIG9mIHRoZSB0b3RhbCBnb2FscyBzY29yZWQgYnkgNyBkaWZmZXJlbnQgZm9vdGJhbCBwbGF5ZXJzIGluIDIgZGlmZmVyZW50ICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7IXNob3cgJiYgKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1bMTIwcHhdIGgtWzMwcHhdIGJnLXdoaXRlIHJvdW5kZWQtbWQgZm9udC1ib2xkIHRleHQtYmx1ZS03MDAgcmluZy00XCJcbiAgICAgICAgICBvbkNsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgID5cbiAgICAgICAgICBTdGFydCBBY3Rpb25cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNvbnRyb2wiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJzaG93Iiwic2V0U2hvdyIsImNsaWNrSGFuZGxlciIsImNsaWNrSGFuZGxlcjIiLCJkaXYiLCJjbGFzc05hbWUiLCJteWZ1bmMiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});