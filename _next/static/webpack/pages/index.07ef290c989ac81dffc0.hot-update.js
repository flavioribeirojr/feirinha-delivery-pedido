/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/order-resume/order-resume.js":
/*!*******************************************************!*\
  !*** ./pages/components/order-resume/order-resume.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OrderResume\": function() { return /* binding */ OrderResume; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _order_resume_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-resume.module.css */ \"./pages/components/order-resume/order-resume.module.css\");\n/* harmony import */ var _order_resume_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_order_resume_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/home/flavio/projetos/clients/feirinha-delivery-pedido/pages/components/order-resume/order-resume.js\";\n\n\nfunction OrderResume(_ref) {\n  var subTotal = _ref.subTotal,\n      shippingPrice = _ref.shippingPrice,\n      children = _ref.children;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_order_resume_module_css__WEBPACK_IMPORTED_MODULE_2___default().orderResume),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_order_resume_module_css__WEBPACK_IMPORTED_MODULE_2___default().orderPriceInfo),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: (_order_resume_module_css__WEBPACK_IMPORTED_MODULE_2___default().orderPriceLabel),\n        children: \"Subtotal\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: (_order_resume_module_css__WEBPACK_IMPORTED_MODULE_2___default().orderPriceValue),\n        children: Intl.NumberFormat('pt-BR', {\n          style: 'currency',\n          currency: 'BRL'\n        }).format(subTotal)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_order_resume_module_css__WEBPACK_IMPORTED_MODULE_2___default().orderPriceInfo),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: (_order_resume_module_css__WEBPACK_IMPORTED_MODULE_2___default().orderPriceLabel),\n        children: \"Frete\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: (_order_resume_module_css__WEBPACK_IMPORTED_MODULE_2___default().orderPriceValue),\n        children: Intl.NumberFormat('pt-BR', {\n          style: 'currency',\n          currency: 'BRL'\n        }).format(shippingPrice)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_order_resume_module_css__WEBPACK_IMPORTED_MODULE_2___default().orderPriceInfo),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: (_order_resume_module_css__WEBPACK_IMPORTED_MODULE_2___default().orderPriceLabel),\n        children: \"Total\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: (_order_resume_module_css__WEBPACK_IMPORTED_MODULE_2___default().orderPriceValue),\n        children: Intl.NumberFormat('pt-BR', {\n          style: 'currency',\n          currency: 'BRL'\n        }).format(subTotal + shippingPrice)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this), children]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, this);\n}\n_c = OrderResume;\n\nvar _c;\n\n$RefreshReg$(_c, \"OrderResume\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9vcmRlci1yZXN1bWUvb3JkZXItcmVzdW1lLmpzPzkwYWEiXSwibmFtZXMiOlsiT3JkZXJSZXN1bWUiLCJzdWJUb3RhbCIsInNoaXBwaW5nUHJpY2UiLCJjaGlsZHJlbiIsInN0eWxlcyIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLFNBQVNBLFdBQVQsT0FBNEQ7QUFBQSxNQUFyQ0MsUUFBcUMsUUFBckNBLFFBQXFDO0FBQUEsTUFBM0JDLGFBQTJCLFFBQTNCQSxhQUEyQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUMvRCxzQkFDSTtBQUFLLGFBQVMsRUFBRUMsNkVBQWhCO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVBLGdGQUFoQjtBQUFBLDhCQUNJO0FBQUcsaUJBQVMsRUFBRUEsaUZBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJO0FBQUcsaUJBQVMsRUFBRUEsaUZBQWQ7QUFBQSxrQkFDTUMsSUFBSSxDQUFDQyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCO0FBQUVDLGVBQUssRUFBRSxVQUFUO0FBQXFCQyxrQkFBUSxFQUFFO0FBQS9CLFNBQTNCLEVBQW1FQyxNQUFuRSxDQUEyRVIsUUFBM0U7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFTSTtBQUFLLGVBQVMsRUFBRUcsZ0ZBQWhCO0FBQUEsOEJBQ0k7QUFBRyxpQkFBUyxFQUFFQSxpRkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUk7QUFBRyxpQkFBUyxFQUFFQSxpRkFBZDtBQUFBLGtCQUNNQyxJQUFJLENBQUNDLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkI7QUFBRUMsZUFBSyxFQUFFLFVBQVQ7QUFBcUJDLGtCQUFRLEVBQUU7QUFBL0IsU0FBM0IsRUFBbUVDLE1BQW5FLENBQTJFUCxhQUEzRTtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUSixlQWlCSTtBQUFLLGVBQVMsRUFBRUUsZ0ZBQWhCO0FBQUEsOEJBQ0k7QUFBRyxpQkFBUyxFQUFFQSxpRkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUk7QUFBRyxpQkFBUyxFQUFFQSxpRkFBZDtBQUFBLGtCQUNNQyxJQUFJLENBQUNDLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkI7QUFBRUMsZUFBSyxFQUFFLFVBQVQ7QUFBcUJDLGtCQUFRLEVBQUU7QUFBL0IsU0FBM0IsRUFBbUVDLE1BQW5FLENBQTJFUixRQUFRLEdBQUdDLGFBQXRGO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCSixFQTBCTUMsUUExQk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE4Qkg7S0EvQmVILFciLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL29yZGVyLXJlc3VtZS9vcmRlci1yZXN1bWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL29yZGVyLXJlc3VtZS5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIE9yZGVyUmVzdW1lKHsgc3ViVG90YWwsIHNoaXBwaW5nUHJpY2UsIGNoaWxkcmVuIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyUmVzdW1lfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3JkZXJQcmljZUluZm99PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyUHJpY2VMYWJlbH0+XG4gICAgICAgICAgICAgICAgICAgIFN1YnRvdGFsXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyUHJpY2VWYWx1ZX0+XG4gICAgICAgICAgICAgICAgICAgIHsgSW50bC5OdW1iZXJGb3JtYXQoJ3B0LUJSJywgeyBzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3k6ICdCUkwnIH0pLmZvcm1hdCggc3ViVG90YWwgKSB9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyUHJpY2VJbmZvfT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5vcmRlclByaWNlTGFiZWx9PlxuICAgICAgICAgICAgICAgICAgICBGcmV0ZVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5vcmRlclByaWNlVmFsdWV9PlxuICAgICAgICAgICAgICAgICAgICB7IEludGwuTnVtYmVyRm9ybWF0KCdwdC1CUicsIHsgc3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnQlJMJyB9KS5mb3JtYXQoIHNoaXBwaW5nUHJpY2UgKSB9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyUHJpY2VJbmZvfT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5vcmRlclByaWNlTGFiZWx9PlxuICAgICAgICAgICAgICAgICAgICBUb3RhbFxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5vcmRlclByaWNlVmFsdWV9PlxuICAgICAgICAgICAgICAgICAgICB7IEludGwuTnVtYmVyRm9ybWF0KCdwdC1CUicsIHsgc3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnQlJMJyB9KS5mb3JtYXQoIHN1YlRvdGFsICsgc2hpcHBpbmdQcmljZSApIH1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/order-resume/order-resume.js\n");

/***/ })

});