"use strict";(self.webpackChunkreact_fabric=self.webpackChunkreact_fabric||[]).push([[9640,8506],{"./packages/chart/stories/TimeSeries.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_react_fabric_react_fabric_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_react_fabric_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/esm/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/chart/src/index.ts"),_TimeSeries_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/chart/stories/TimeSeries.stories.tsx");function _createMdxContent(props){const _components={code:"code",pre:"pre",...(0,_home_runner_work_react_fabric_react_fabric_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_6__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.W8,{of:_TimeSeries_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.hE,{children:"Time Series"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.Mz,{storyId:"animations",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"hidden-anchor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.R2,{children:"Time Series"})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.VY,{of:_src__WEBPACK_IMPORTED_MODULE_4__.ZO}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.Tn,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_react_fabric_core__WEBPACK_IMPORTED_MODULE_2__.pJ,{className:"control-panel",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Controls"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.H2,{of:_TimeSeries_stories__WEBPACK_IMPORTED_MODULE_5__.Example})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.Mz,{storyId:"props",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.R2,{children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.ov,{sort:"requiredFirst"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.Mz,{storyId:"data",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.R2,{children:"Data Format"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-ts",children:"// List of data series\n[{ id, label, values: [[ date, count ], ...] },...];\n"})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_react_fabric_react_fabric_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_6__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./packages/chart/stories/TimeSeries.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@faker-js/faker/dist/esm/index.mjs"),_react_fabric_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/esm/index.js"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/chart/src/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_4__.ZO,title:"@charts/TimeSeries",parameters:{layout:"centered",controls:{exclude:"children"}}},Example={render:args=>{const[data,setData]=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}),loadData=(0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((()=>{const categories=Array.from(Array(24),((_,i)=>new Date(2021,i,1)));setData({categoryAxisName:"Months",valueAxisName:"Items",categories,data:[{id:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.string.alphanumeric(5),label:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.animal.bear(),values:categories.map((c=>[c,_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.number.int({min:100,max:500})]))},{id:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.string.alphanumeric(5),label:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.animal.cat(),values:categories.map((c=>[c,_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.number.int({min:100,max:500})]))},{id:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.string.alphanumeric(5),label:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.animal.bird(),values:categories.map((c=>[c,_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.number.int({min:100,max:500})]))}]})}),[]);return(0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)((()=>{loadData()}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_react_fabric_core__WEBPACK_IMPORTED_MODULE_2__.Zk,{width:"48rem",height:"24rem",title:"Time Series chart",expandable:!0,actions:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_react_fabric_core__WEBPACK_IMPORTED_MODULE_2__.$n,{"aria-label":"loadData",variant:"link",icon:"mdi mdi-refresh",onClick:loadData}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.ZO,{...args,...data})})},args:{}},__namedExportsOrder=["Example"];Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const [data, setData] = useState<AnyObject>({});\n    const loadData = useCallback(() => {\n      const categories = Array.from(Array(24), (_, i) => new Date(2021, i, 1));\n      setData({\n        categoryAxisName: "Months",\n        valueAxisName: "Items",\n        categories,\n        data: [{\n          id: faker.string.alphanumeric(5),\n          label: faker.animal.bear(),\n          values: categories.map(c => [c, faker.number.int({\n            min: 100,\n            max: 500\n          })])\n        }, {\n          id: faker.string.alphanumeric(5),\n          label: faker.animal.cat(),\n          values: categories.map(c => [c, faker.number.int({\n            min: 100,\n            max: 500\n          })])\n        }, {\n          id: faker.string.alphanumeric(5),\n          label: faker.animal.bird(),\n          values: categories.map(c => [c, faker.number.int({\n            min: 100,\n            max: 500\n          })])\n        }]\n      });\n    }, []);\n    useEffect(() => {\n      loadData();\n    }, []);\n    return <Panel width="48rem" height="24rem" title="Time Series chart" expandable actions={<Button aria-label="loadData" variant="link" icon="mdi mdi-refresh" onClick={loadData} />}>\n        <TimeSeries {...args} {...data} />\n      </Panel>;\n  },\n  args: {}\n}',...Example.parameters?.docs?.source}}}}}]);