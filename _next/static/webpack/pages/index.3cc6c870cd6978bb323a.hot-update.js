/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/payment-methods/payment-methods.constants.js":
/*!***********************************************************************!*\
  !*** ./pages/components/payment-methods/payment-methods.constants.js ***!
  \***********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PaymentMethods\": function() { return /* binding */ PaymentMethods; },\n/* harmony export */   \"PaymentMethodsLabels\": function() { return /* binding */ PaymentMethodsLabels; },\n/* harmony export */   \"CardTypes\": function() { return /* binding */ CardTypes; },\n/* harmony export */   \"CardTypesLabels\": function() { return /* binding */ CardTypesLabels; },\n/* harmony export */   \"CardTypesImages\": function() { return /* binding */ CardTypesImages; }\n/* harmony export */ });\n/* harmony import */ var _home_flavio_projetos_clients_feirinha_delivery_pedido_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _PaymentMethodsLabels, _CardTypesLabels, _CardTypesImages;\n\nvar PaymentMethods = {\n  pix: 'pix',\n  money: 'money',\n  debit: 'debit',\n  credit: 'credit'\n};\nvar PaymentMethodsLabels = (_PaymentMethodsLabels = {}, (0,_home_flavio_projetos_clients_feirinha_delivery_pedido_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_PaymentMethodsLabels, PaymentMethods.pix, 'PIX'), (0,_home_flavio_projetos_clients_feirinha_delivery_pedido_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_PaymentMethodsLabels, PaymentMethods.money, 'À vista'), (0,_home_flavio_projetos_clients_feirinha_delivery_pedido_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_PaymentMethodsLabels, PaymentMethods.debit, 'Débito'), (0,_home_flavio_projetos_clients_feirinha_delivery_pedido_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_PaymentMethodsLabels, PaymentMethods.credit, 'Crédito'), _PaymentMethodsLabels);\nvar CardTypes = {\n  visa: 'visa',\n  masterCard: 'masterCard',\n  elo: 'elo',\n  amex: 'amex',\n  hipercard: 'hipercard'\n};\nvar CardTypesLabels = (_CardTypesLabels = {}, (0,_home_flavio_projetos_clients_feirinha_delivery_pedido_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_CardTypesLabels, CardTypes.visa, 'VISA'), (0,_home_flavio_projetos_clients_feirinha_delivery_pedido_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_CardTypesLabels, CardTypes.masterCard, 'MasterCard'), (0,_home_flavio_projetos_clients_feirinha_delivery_pedido_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_CardTypesLabels, CardTypes.elo, 'Elo'), (0,_home_flavio_projetos_clients_feirinha_delivery_pedido_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_CardTypesLabels, CardTypes.amex, 'AMEX'), (0,_home_flavio_projetos_clients_feirinha_delivery_pedido_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_CardTypesLabels, CardTypes.hipercard, 'HiperCard'), _CardTypesLabels);\nvar CardTypesImages = (_CardTypesImages = {}, (0,_home_flavio_projetos_clients_feirinha_delivery_pedido_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_CardTypesImages, CardTypes.visa, '/visa.png'), (0,_home_flavio_projetos_clients_feirinha_delivery_pedido_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_CardTypesImages, CardTypes.masterCard, '/mastercard.png'), (0,_home_flavio_projetos_clients_feirinha_delivery_pedido_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_CardTypesImages, CardTypes.elo, '/elo.png'), (0,_home_flavio_projetos_clients_feirinha_delivery_pedido_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_CardTypesImages, CardTypes.amex, '/amex.png'), (0,_home_flavio_projetos_clients_feirinha_delivery_pedido_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_CardTypesImages, CardTypes.hipercard, '/hipercard.png'), _CardTypesImages);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9wYXltZW50LW1ldGhvZHMvcGF5bWVudC1tZXRob2RzLmNvbnN0YW50cy5qcz84ODM3Il0sIm5hbWVzIjpbIlBheW1lbnRNZXRob2RzIiwicGl4IiwibW9uZXkiLCJkZWJpdCIsImNyZWRpdCIsIlBheW1lbnRNZXRob2RzTGFiZWxzIiwiQ2FyZFR5cGVzIiwidmlzYSIsIm1hc3RlckNhcmQiLCJlbG8iLCJhbWV4IiwiaGlwZXJjYXJkIiwiQ2FyZFR5cGVzTGFiZWxzIiwiQ2FyZFR5cGVzSW1hZ2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLGNBQWMsR0FBRztBQUMxQkMsS0FBRyxFQUFFLEtBRHFCO0FBRTFCQyxPQUFLLEVBQUUsT0FGbUI7QUFHMUJDLE9BQUssRUFBRSxPQUhtQjtBQUkxQkMsUUFBTSxFQUFFO0FBSmtCLENBQXZCO0FBT0EsSUFBTUMsb0JBQW9CLDZNQUM1QkwsY0FBYyxDQUFDQyxHQURhLEVBQ1AsS0FETyxnTEFFNUJELGNBQWMsQ0FBQ0UsS0FGYSxFQUVMLFNBRkssZ0xBRzVCRixjQUFjLENBQUNHLEtBSGEsRUFHTCxRQUhLLGdMQUk1QkgsY0FBYyxDQUFDSSxNQUphLEVBSUosU0FKSSx5QkFBMUI7QUFPQSxJQUFNRSxTQUFTLEdBQUc7QUFDckJDLE1BQUksRUFBRSxNQURlO0FBRXJCQyxZQUFVLEVBQUUsWUFGUztBQUdyQkMsS0FBRyxFQUFFLEtBSGdCO0FBSXJCQyxNQUFJLEVBQUUsTUFKZTtBQUtyQkMsV0FBUyxFQUFFO0FBTFUsQ0FBbEI7QUFRQSxJQUFNQyxlQUFlLG1NQUN2Qk4sU0FBUyxDQUFDQyxJQURhLEVBQ04sTUFETSwyS0FFdkJELFNBQVMsQ0FBQ0UsVUFGYSxFQUVBLFlBRkEsMktBR3ZCRixTQUFTLENBQUNHLEdBSGEsRUFHUCxLQUhPLDJLQUl2QkgsU0FBUyxDQUFDSSxJQUphLEVBSU4sTUFKTSwyS0FLdkJKLFNBQVMsQ0FBQ0ssU0FMYSxFQUtELFdBTEMsb0JBQXJCO0FBUUEsSUFBTUUsZUFBZSxtTUFDdkJQLFNBQVMsQ0FBQ0MsSUFEYSxFQUNOLFdBRE0sMktBRXZCRCxTQUFTLENBQUNFLFVBRmEsRUFFQSxpQkFGQSwyS0FHdkJGLFNBQVMsQ0FBQ0csR0FIYSxFQUdQLFVBSE8sMktBSXZCSCxTQUFTLENBQUNJLElBSmEsRUFJTixXQUpNLDJLQUt2QkosU0FBUyxDQUFDSyxTQUxhLEVBS0QsZ0JBTEMsb0JBQXJCIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9wYXltZW50LW1ldGhvZHMvcGF5bWVudC1tZXRob2RzLmNvbnN0YW50cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBQYXltZW50TWV0aG9kcyA9IHtcbiAgICBwaXg6ICdwaXgnLFxuICAgIG1vbmV5OiAnbW9uZXknLFxuICAgIGRlYml0OiAnZGViaXQnLFxuICAgIGNyZWRpdDogJ2NyZWRpdCdcbn07XG5cbmV4cG9ydCBjb25zdCBQYXltZW50TWV0aG9kc0xhYmVscyA9IHtcbiAgICBbUGF5bWVudE1ldGhvZHMucGl4XTogJ1BJWCcsXG4gICAgW1BheW1lbnRNZXRob2RzLm1vbmV5XTogJ8OAIHZpc3RhJyxcbiAgICBbUGF5bWVudE1ldGhvZHMuZGViaXRdOiAnRMOpYml0bycsXG4gICAgW1BheW1lbnRNZXRob2RzLmNyZWRpdF06ICdDcsOpZGl0bycsXG59O1xuXG5leHBvcnQgY29uc3QgQ2FyZFR5cGVzID0ge1xuICAgIHZpc2E6ICd2aXNhJyxcbiAgICBtYXN0ZXJDYXJkOiAnbWFzdGVyQ2FyZCcsXG4gICAgZWxvOiAnZWxvJyxcbiAgICBhbWV4OiAnYW1leCcsXG4gICAgaGlwZXJjYXJkOiAnaGlwZXJjYXJkJ1xufTtcblxuZXhwb3J0IGNvbnN0IENhcmRUeXBlc0xhYmVscyA9IHtcbiAgICBbQ2FyZFR5cGVzLnZpc2FdOiAnVklTQScsXG4gICAgW0NhcmRUeXBlcy5tYXN0ZXJDYXJkXTogJ01hc3RlckNhcmQnLFxuICAgIFtDYXJkVHlwZXMuZWxvXTogJ0VsbycsXG4gICAgW0NhcmRUeXBlcy5hbWV4XTogJ0FNRVgnLFxuICAgIFtDYXJkVHlwZXMuaGlwZXJjYXJkXTogJ0hpcGVyQ2FyZCcsXG59O1xuXG5leHBvcnQgY29uc3QgQ2FyZFR5cGVzSW1hZ2VzID0ge1xuICAgIFtDYXJkVHlwZXMudmlzYV06ICcvdmlzYS5wbmcnLFxuICAgIFtDYXJkVHlwZXMubWFzdGVyQ2FyZF06ICcvbWFzdGVyY2FyZC5wbmcnLFxuICAgIFtDYXJkVHlwZXMuZWxvXTogJy9lbG8ucG5nJyxcbiAgICBbQ2FyZFR5cGVzLmFtZXhdOiAnL2FtZXgucG5nJyxcbiAgICBbQ2FyZFR5cGVzLmhpcGVyY2FyZF06ICcvaGlwZXJjYXJkLnBuZycsXG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/payment-methods/payment-methods.constants.js\n");

/***/ })

});