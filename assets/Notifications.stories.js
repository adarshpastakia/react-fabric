import{n as e}from"./rolldown-runtime.js";import{r as t}from"./EmptyContent.js";import{Jt as n,t as r}from"./src2.js";import{t as i}from"./jsx-runtime.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{r(),a=i(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={tags:[`autodocs`],title:`@core/components/Notifications`,parameters:{layout:`centered`,jest:[`core/tests/components/Notifications.test.tsx`]},decorators:[e=>(0,a.jsx)(`div`,{className:`flex gap-2 items-center p-4`,children:(0,a.jsx)(e,{})})]},c={render(){let{toast:e,promise:r}=n();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{color:`primary`,onClick:()=>e({message:`This is a simple toast`}),children:`Simple Toast`}),(0,a.jsx)(t,{onClick:()=>e({message:`This is a toast with actions`,actions:[{label:`Retry`,onClick(){}},{label:`Cancel`,onClick(){}}]}),children:`Action Toast`}),(0,a.jsx)(t,{color:`success`,onClick:()=>e({type:`success`,message:`This is a success toast`}),children:`Success Toast`}),(0,a.jsx)(t,{color:`danger`,onClick:()=>e({type:`error`,message:`This is a error toast`,link:{label:`View logs`,onClick(){}}}),children:`Error Toast`}),(0,a.jsx)(t,{onClick:()=>r(new Promise(e=>setTimeout(()=>{e(`Awaited promise successfull`)},5e3)),{loading:`Loading some request`,onCancel(){}}),children:`Promise Toast`})]})}},l={render(){let{message:e}=n();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{color:`primary`,onClick:()=>e({message:`This is a simple toast`}),children:`Simple Message`}),(0,a.jsx)(t,{color:`success`,onClick:()=>e({type:`success`,message:`This is a success toast`}),children:`Success Message`}),(0,a.jsx)(t,{color:`danger`,onClick:()=>e({type:`error`,message:`This is a error message`}),children:`Error Message`})]})}},u={render(e){let{alert:r}=n();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{color:`primary`,onClick:()=>r({title:`Tester`,message:`This is a simple alert`}).then(e.cb),children:`Simple Alert`}),(0,a.jsx)(t,{color:`success`,onClick:()=>r({type:`confirm`,color:`success`,message:`This is a confirmation alert`}).then(e.cb),children:`Alert Confirmation`}),(0,a.jsx)(t,{color:`danger`,onClick:()=>r({type:`prompt`,color:`danger`,message:`This is an alert with input prompt, and it has a very long text`}).then(e.cb),children:`Alert Prompt`})]})},args:{cb:o()}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render() {
    const {
      toast,
      promise
    } = useNotificationService();
    return <>
        <Button color="primary" onClick={() => toast({
        message: "This is a simple toast"
      })}>
          Simple Toast
        </Button>
        <Button onClick={() => toast({
        message: "This is a toast with actions",
        actions: [{
          label: "Retry",
          onClick() {
            //
          }
        }, {
          label: "Cancel",
          onClick() {
            //
          }
        }]
      })}>
          Action Toast
        </Button>
        <Button color="success" onClick={() => toast({
        type: "success",
        message: "This is a success toast"
      })}>
          Success Toast
        </Button>
        <Button color="danger" onClick={() => toast({
        type: "error",
        message: "This is a error toast",
        link: {
          label: "View logs",
          onClick() {
            //
          }
        }
      })}>
          Error Toast
        </Button>
        <Button onClick={() => promise(new Promise(r => setTimeout(() => {
        r("Awaited promise successfull");
      }, 5000)), {
        loading: "Loading some request",
        onCancel() {
          //
        }
      })}>
          Promise Toast
        </Button>
      </>;
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render() {
    const {
      message
    } = useNotificationService();
    return <>
        <Button color="primary" onClick={() => message({
        message: "This is a simple toast"
      })}>
          Simple Message
        </Button>
        <Button color="success" onClick={() => message({
        type: "success",
        message: "This is a success toast"
      })}>
          Success Message
        </Button>
        <Button color="danger" onClick={() => message({
        type: "error",
        message: "This is a error message"
      })}>
          Error Message
        </Button>
      </>;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render(args: KeyValue) {
    const {
      alert
    } = useNotificationService();
    return <>
        <Button color="primary" onClick={() => alert({
        title: "Tester",
        message: "This is a simple alert"
      }).then(args.cb)}>
          Simple Alert
        </Button>
        <Button color="success" onClick={() => alert({
        type: "confirm",
        color: "success",
        message: "This is a confirmation alert"
      }).then(args.cb)}>
          Alert Confirmation
        </Button>
        <Button color="danger" onClick={() => alert({
        type: "prompt",
        color: "danger",
        message: "This is an alert with input prompt, and it has a very long text"
      }).then(args.cb)}>
          Alert Prompt
        </Button>
      </>;
  },
  args: {
    cb: fn()
  }
}`,...u.parameters?.docs?.source}}},d=[`Toasts`,`Messages`,`Alerts`]})))()}f();export{u as Alerts,l as Messages,c as Toasts,d as __namedExportsOrder,s as default};