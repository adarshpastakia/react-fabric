import{n as e,r as t}from"./rolldown-runtime.js";import{t as n}from"./react.js";import{St as r,bt as i,dt as a,ft as o,xt as s,yt as c}from"./zh-CN.js";import{S as l,t as u,w as d}from"./src2.js";import{t as f}from"./jsx-runtime.js";import{c as p,t as m,u as h}from"./src7.js";import{i as g,n as _,r as v,t as y}from"./src8.js";var b=t({Playground:()=>E,_Superdate:()=>T,__namedExportsOrder:()=>D,default:()=>w}),x,S,C,w,T,E,D;function O(){return(O=e((()=>{u(),m(),y(),g(),r(),i(),o(),x=n(),S=f(),{action:C}=__STORYBOOK_MODULE_ACTIONS__,w={component:_,title:`@superdate/Superdate`,parameters:{layout:`centered`,controls:{exclude:`children`}}},T={render:e=>(0,S.jsx)(_,{...e}),args:{value:`$year-2|$now`,recurringEvents:[{label:`National Day`,start:`2000-11-30`,end:`2000-12-03`}],presets:[{value:`$year-2|$now`,label:`Last 2 years`},{value:`$year-5|$now`,label:`Last 5 years`},{value:`$year-10|$now`,label:`Last 10 years`}]}},E={render:e=>{let[t,n]=(0,x.useState)(e.value),[r,i]=(0,x.useMemo)(()=>t?h.parseRange(t):[],[t]);return(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`div`,{className:`inline-block`,children:(0,S.jsx)(v,{...e,value:t,onChange:(...e)=>{n(e[0]),C(`onChange`)(...e)}})}),(0,S.jsxs)(`div`,{className:`mt-8`,children:[(0,S.jsx)(`span`,{className:`text-muted`,children:`Relative value: `}),(0,S.jsx)(`span`,{className:`font-medium`,children:t})]}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`span`,{className:`text-muted`,children:`Actual value: `}),(0,S.jsx)(p,{date:r,showAlternateDate:!0}),(0,S.jsx)(`span`,{children:` ⇾ `}),(0,S.jsx)(p,{date:i,showAlternateDate:!0,children:(0,S.jsxs)(l,{children:[(0,S.jsx)(d,{label:`± 1 Day`,onClick:()=>i&&n(`${s(i,-1).toISOString()}|${s(i,1).toISOString()}`)}),(0,S.jsx)(d,{label:`± 1 Week`,onClick:()=>i&&n(`${a(i,-1).toISOString()}|${a(i,1).toISOString()}`)}),(0,S.jsx)(d,{label:`± 1 Month`,onClick:()=>i&&n(`${c(i,-1).toISOString()}|${c(i,1).toISOString()}`)})]})})]})]})},args:{value:`$year-2|$now`}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <SuperDate {...args} />;
  },
  args: {
    value: "$year-2|$now",
    recurringEvents: [{
      label: "National Day",
      start: "2000-11-30",
      end: "2000-12-03"
    }],
    presets: [{
      value: "$year-2|$now",
      label: "Last 2 years"
    }, {
      value: "$year-5|$now",
      label: "Last 5 years"
    }, {
      value: "$year-10|$now",
      label: "Last 10 years"
    }]
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value);
    const [start, end] = useMemo(() => value ? DateUtil.parseRange(value) : [], [value]);
    return <div>
        <div className="inline-block">
          <SuperDateTabs {...args} value={value} onChange={(...args) => {
          setValue(args[0]);
          action("onChange")(...args);
        }} />
        </div>
        <div className="mt-8">
          <span className="text-muted">Relative value: </span>
          <span className="font-medium">{value}</span>
        </div>
        <div>
          <span className="text-muted">Actual value: </span>
          <DateDisplay date={start} showAlternateDate />
          <span> ⇾ </span>
          <DateDisplay date={end} showAlternateDate>
            <Menu>
              <MenuItem label="± 1 Day" onClick={() => end && setValue(\`\${addDays(end, -1).toISOString()}|\${addDays(end, 1).toISOString()}\`)} />
              <MenuItem label="± 1 Week" onClick={() => end && setValue(\`\${addWeeks(end, -1).toISOString()}|\${addWeeks(end, 1).toISOString()}\`)} />
              <MenuItem label="± 1 Month" onClick={() => end && setValue(\`\${addMonths(end, -1).toISOString()}|\${addMonths(end, 1).toISOString()}\`)} />
            </Menu>
          </DateDisplay>
        </div>
      </div>;
  },
  args: {
    value: "$year-2|$now"
  }
}`,...E.parameters?.docs?.source}}},D=[`_Superdate`,`Playground`]})))()}export{O as i,b as n,T as r,E as t};