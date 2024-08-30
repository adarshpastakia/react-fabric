"use strict";(self.webpackChunkreact_fabric=self.webpackChunkreact_fabric||[]).push([[5339],{"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}__webpack_require__.d(__webpack_exports__,{A:()=>_classCallCheck})},"./node_modules/@babel/runtime/helpers/esm/createClass.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_createClass});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.A)(o.key),o)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}},"./node_modules/@babel/runtime/helpers/esm/inherits.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_inherits});var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&(0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(t,e)}},"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_possibleConstructorReturn});var _typeof_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");function _possibleConstructorReturn(t,e){if(e&&("object"==(0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__.A)(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__.A)(t)}},"./node_modules/@babel/runtime/helpers/esm/toArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_toArray});var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js"),_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/iterableToArray.js"),_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"),_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");function _toArray(r){return(0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__.A)(r)||(0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__.A)(r)||(0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.A)(r)||(0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__.A)()}},"./packages/data/stories/histogram/Histogram.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_Histogram:()=>_Histogram,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@faker-js/faker/dist/esm/index.mjs"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/data/src/index.ts");const meta={component:_src__WEBPACK_IMPORTED_MODULE_2__.dq,title:"@data/Histogram",parameters:{controls:{exclude:/^(children|as)/}},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"w-96 p-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})]},items=new Array(18).fill(0).map((()=>({id:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.number.hex(2048),label:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.animal.cat(),count:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.number.int({min:0,max:999})}))),__WEBPACK_DEFAULT_EXPORT__=meta,_Histogram={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.dq,{...args,items}),args:{}},__namedExportsOrder=["_Histogram"];_Histogram.parameters={..._Histogram.parameters,docs:{..._Histogram.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    return <Histogram {...args} items={items} />;\n  },\n  args: {}\n}",..._Histogram.parameters?.docs?.source}}}}}]);