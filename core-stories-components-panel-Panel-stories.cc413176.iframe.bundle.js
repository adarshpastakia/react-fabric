(self.webpackChunkreact_fabric=self.webpackChunkreact_fabric||[]).push([[3103],{"./packages/core/stories/components/panel/Panel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PanelControls:()=>PanelControls,_Panel:()=>_Panel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@faker-js/faker/dist/esm/index.mjs"),_storybook_test__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_3__.Zk,subcomponents:{PanelGroup:_src__WEBPACK_IMPORTED_MODULE_3__.YZ},title:"@core/components/Panel",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Panel.test.tsx"]},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"w-96 p-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})]},_Panel={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.Zk,{...args,actions:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.mD,{className:"self-center",onNavigate:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.fn)()}),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.UC,{children:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.lorem.paragraphs(2)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.wi,{flex:!0,justify:"end",className:"px-2 py-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.$n,{variant:"link",children:"Cancel"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.$n,{variant:"solid",children:"OK"})]})]})}),args:{title:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.animal.cat()}},PanelControls={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.Zk,{...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.UC,{children:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.lorem.paragraphs(2)})}),args:{title:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.animal.cat(),collapsable:!0,expandable:!0,onClose:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.fn)(),onExpand:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.fn)(),onCollapse:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.fn)()}},__namedExportsOrder=["_Panel","PanelControls"];_Panel.parameters={..._Panel.parameters,docs:{..._Panel.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <Fragment>\n        <Panel {...args} actions={<Navigator className="self-center" onNavigate={fn()} />}>\n          <Content>{faker.lorem.paragraphs(2)}</Content>\n          <Footer flex justify="end" className="px-2 py-1">\n            <Button variant="link">Cancel</Button>\n            <Button variant="solid">OK</Button>\n          </Footer>\n        </Panel>\n      </Fragment>;\n  },\n  args: {\n    title: faker.animal.cat()\n  }\n}',..._Panel.parameters?.docs?.source}}},PanelControls.parameters={...PanelControls.parameters,docs:{...PanelControls.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    return <Panel {...args}>\n        <Content>{faker.lorem.paragraphs(2)}</Content>\n      </Panel>;\n  },\n  args: {\n    title: faker.animal.cat(),\n    collapsable: true,\n    expandable: true,\n    onClose: fn(),\n    onExpand: fn(),\n    onCollapse: fn()\n  }\n}",...PanelControls.parameters?.docs?.source}}}},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext}}]);