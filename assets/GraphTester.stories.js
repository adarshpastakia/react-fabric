import{a as e,n as t,t as n}from"./rolldown-runtime.js";import{t as r}from"./react.js";import{N as i,P as a,z as o}from"./useHotkeySequence.js";import{r as s}from"./esm.js";import{t as c}from"./jsx-runtime.js";import{Pt as l,t as u}from"./src2.js";import{St as d,t as f,tn as p}from"./esm3.js";var m=n(((e,t)=>{var n=typeof Reflect==`object`?Reflect:null,r=n&&typeof n.apply==`function`?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)},i=n&&typeof n.ownKeys==`function`?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};function a(e){console&&console.warn&&console.warn(e)}var o=Number.isNaN||function(e){return e!==e};function s(){s.init.call(this)}t.exports=s,t.exports.once=y,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var c=10;function l(e){if(typeof e!=`function`)throw TypeError(`The "listener" argument must be of type Function. Received type `+typeof e)}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(e){if(typeof e!=`number`||e<0||o(e))throw RangeError(`The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received `+e+`.`);c=e}}),s.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if(typeof e!=`number`||e<0||o(e))throw RangeError(`The value of "n" is out of range. It must be a non-negative number. Received `+e+`.`);return this._maxListeners=e,this};function u(e){return e._maxListeners===void 0?s.defaultMaxListeners:e._maxListeners}s.prototype.getMaxListeners=function(){return u(this)},s.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i=e===`error`,a=this._events;if(a!==void 0)i&&=a.error===void 0;else if(!i)return!1;if(i){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var s=Error(`Unhandled error.`+(o?` (`+o.message+`)`:``));throw s.context=o,s}var c=a[e];if(c===void 0)return!1;if(typeof c==`function`)r(c,this,t);else for(var l=c.length,u=g(c,l),n=0;n<l;++n)r(u[n],this,t);return!0};function d(e,t,n,r){var i,o,s;if(l(n),o=e._events,o===void 0?(o=e._events=Object.create(null),e._eventsCount=0):(o.newListener!==void 0&&(e.emit(`newListener`,t,n.listener?n.listener:n),o=e._events),s=o[t]),s===void 0)s=o[t]=n,++e._eventsCount;else if(typeof s==`function`?s=o[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),i=u(e),i>0&&s.length>i&&!s.warned){s.warned=!0;var c=Error(`Possible EventEmitter memory leak detected. `+s.length+` `+String(t)+` listeners added. Use emitter.setMaxListeners() to increase limit`);c.name=`MaxListenersExceededWarning`,c.emitter=e,c.type=t,c.count=s.length,a(c)}return e}s.prototype.addListener=function(e,t){return d(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return d(this,e,t,!0)};function f(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function p(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=f.bind(r);return i.listener=n,r.wrapFn=i,i}s.prototype.once=function(e,t){return l(t),this.on(e,p(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){return l(t),this.prependListener(e,p(this,e,t)),this},s.prototype.removeListener=function(e,t){var n,r,i,a,o;if(l(t),r=this._events,r===void 0||(n=r[e],n===void 0))return this;if(n===t||n.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit(`removeListener`,e,n.listener||t));else if(typeof n!=`function`){for(i=-1,a=n.length-1;a>=0;a--)if(n[a]===t||n[a].listener===t){o=n[a].listener,i=a;break}if(i<0)return this;i===0?n.shift():_(n,i),n.length===1&&(r[e]=n[0]),r.removeListener!==void 0&&this.emit(`removeListener`,e,o||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,n=this._events,r;if(n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var i=Object.keys(n),a;for(r=0;r<i.length;++r)a=i[r],a!==`removeListener`&&this.removeAllListeners(a);return this.removeAllListeners(`removeListener`),this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t==`function`)this.removeListener(e,t);else if(t!==void 0)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this};function m(e,t,n){var r=e._events;if(r===void 0)return[];var i=r[t];return i===void 0?[]:typeof i==`function`?n?[i.listener||i]:[i]:n?v(i):g(i,i.length)}s.prototype.listeners=function(e){return m(this,e,!0)},s.prototype.rawListeners=function(e){return m(this,e,!1)},s.listenerCount=function(e,t){return typeof e.listenerCount==`function`?e.listenerCount(t):h.call(e,t)},s.prototype.listenerCount=h;function h(e){var t=this._events;if(t!==void 0){var n=t[e];if(typeof n==`function`)return 1;if(n!==void 0)return n.length}return 0}s.prototype.eventNames=function(){return this._eventsCount>0?i(this._events):[]};function g(e,t){for(var n=Array(t),r=0;r<t;++r)n[r]=e[r];return n}function _(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function v(e){for(var t=Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}function y(e,t){return new Promise(function(n,r){function i(n){e.removeListener(t,a),r(n)}function a(){typeof e.removeListener==`function`&&e.removeListener(`error`,i),n([].slice.call(arguments))}x(e,t,a,{once:!0}),t!==`error`&&b(e,i,{once:!0})})}function b(e,t,n){typeof e.on==`function`&&x(e,`error`,t,n)}function x(e,t,n,r){if(typeof e.on==`function`)r.once?e.once(t,n):e.on(t,n);else if(typeof e.addEventListener==`function`)e.addEventListener(t,function i(a){r.once&&e.removeEventListener(t,i),n(a)});else throw TypeError(`The "emitter" argument must be of type EventEmitter. Received type `+typeof e)}}));function h(){let e=arguments[0];for(let t=1,n=arguments.length;t<n;t++)if(arguments[t])for(let n in arguments[t])e[n]=arguments[t][n];return e}function g(e,t,n,r){let i=e._nodes.get(t),a=null;return i&&(a=r===`mixed`?i.out&&i.out[n]||i.undirected&&i.undirected[n]:r===`directed`?i.out&&i.out[n]:i.undirected&&i.undirected[n]),a}function _(e){return typeof e==`object`&&!!e}function v(e){let t;for(t in e)return!1;return!0}function y(e,t,n){Object.defineProperty(e,t,{enumerable:!1,configurable:!1,writable:!0,value:n})}function b(e,t,n){let r={enumerable:!0,configurable:!0};typeof n==`function`?r.get=n:(r.value=n,r.writable=!1),Object.defineProperty(e,t,r)}function x(e){return!(!_(e)||e.attributes&&!Array.isArray(e.attributes))}function S(){let e=Math.floor(Math.random()*256)&255;return()=>e++}function C(){let e=arguments,t=null,n=-1;return{[Symbol.iterator](){return this},next(){let r=null;do{if(t===null){if(n++,n>=e.length)return{done:!0};t=e[n][Symbol.iterator]()}if(r=t.next(),r.done)t=null;else break}while(1);return r}}}function w(){return{[Symbol.iterator](){return this},next(){return{done:!0}}}}function T(e,t){this.key=e,this.attributes=t,this.clear()}function E(e,t){this.key=e,this.attributes=t,this.clear()}function D(e,t){this.key=e,this.attributes=t,this.clear()}function O(e,t,n,r,i){this.key=t,this.attributes=i,this.undirected=e,this.source=n,this.target=r}function k(e,t,n,r,i,a,o){let s,c,l,u;if(r=``+r,n===rt){if(s=e._nodes.get(r),!s)throw new z(`Graph.${t}: could not find the "${r}" node in the graph.`);l=i,u=a}else if(n===ot){if(i=``+i,c=e._edges.get(i),!c)throw new z(`Graph.${t}: could not find the "${i}" edge in the graph.`);let n=c.source.key,d=c.target.key;if(r===n)s=c.target;else if(r===d)s=c.source;else throw new z(`Graph.${t}: the "${r}" node is not attached to the "${i}" edge (${n}, ${d}).`);l=a,u=o}else{if(c=e._edges.get(r),!c)throw new z(`Graph.${t}: could not find the "${r}" edge in the graph.`);s=n===it?c.source:c.target,l=i,u=a}return[s,l,u]}function A(e,t,n){e.prototype[t]=function(e,r,i){let[a,o]=k(this,t,n,e,r,i);return a.attributes[o]}}function j(e,t,n){e.prototype[t]=function(e,r){let[i]=k(this,t,n,e,r);return i.attributes}}function M(e,t,n){e.prototype[t]=function(e,r,i){let[a,o]=k(this,t,n,e,r,i);return a.attributes.hasOwnProperty(o)}}function N(e,t,n){e.prototype[t]=function(e,r,i,a){let[o,s,c]=k(this,t,n,e,r,i,a);return o.attributes[s]=c,this.emit(`nodeAttributesUpdated`,{key:o.key,type:`set`,attributes:o.attributes,name:s}),this}}function P(e,t,n){e.prototype[t]=function(e,r,i,a){let[o,s,c]=k(this,t,n,e,r,i,a);if(typeof c!=`function`)throw new R(`Graph.${t}: updater should be a function.`);let l=o.attributes;return l[s]=c(l[s]),this.emit(`nodeAttributesUpdated`,{key:o.key,type:`set`,attributes:o.attributes,name:s}),this}}function F(e,t,n){e.prototype[t]=function(e,r,i){let[a,o]=k(this,t,n,e,r,i);return delete a.attributes[o],this.emit(`nodeAttributesUpdated`,{key:a.key,type:`remove`,attributes:a.attributes,name:o}),this}}function ee(e,t,n){e.prototype[t]=function(e,r,i){let[a,o]=k(this,t,n,e,r,i);if(!_(o))throw new R(`Graph.${t}: provided attributes are not a plain object.`);return a.attributes=o,this.emit(`nodeAttributesUpdated`,{key:a.key,type:`replace`,attributes:a.attributes}),this}}function te(e,t,n){e.prototype[t]=function(e,r,i){let[a,o]=k(this,t,n,e,r,i);if(!_(o))throw new R(`Graph.${t}: provided attributes are not a plain object.`);return L(a.attributes,o),this.emit(`nodeAttributesUpdated`,{key:a.key,type:`merge`,attributes:a.attributes,data:o}),this}}function ne(e,t,n){e.prototype[t]=function(e,r,i){let[a,o]=k(this,t,n,e,r,i);if(typeof o!=`function`)throw new R(`Graph.${t}: provided updater is not a function.`);return a.attributes=o(a.attributes),this.emit(`nodeAttributesUpdated`,{key:a.key,type:`update`,attributes:a.attributes}),this}}function I(e){st.forEach(function({name:t,attacher:n}){n(e,t(`Node`),rt),n(e,t(`Source`),it),n(e,t(`Target`),at),n(e,t(`Opposite`),ot)})}function re(e,t,n){e.prototype[t]=function(e,r){let i;if(this.type!==`mixed`&&n!==`mixed`&&n!==this.type)throw new B(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new B(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let a=``+e,o=``+r;if(r=arguments[2],i=g(this,a,o,n),!i)throw new z(`Graph.${t}: could not find an edge for the given path ("${a}" - "${o}").`)}else{if(n!==`mixed`)throw new B(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=``+e,i=this._edges.get(e),!i)throw new z(`Graph.${t}: could not find the "${e}" edge in the graph.`)}return i.attributes[r]}}function ie(e,t,n){e.prototype[t]=function(e){let r;if(this.type!==`mixed`&&n!==`mixed`&&n!==this.type)throw new B(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>1){if(this.multi)throw new B(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let i=``+e,a=``+arguments[1];if(r=g(this,i,a,n),!r)throw new z(`Graph.${t}: could not find an edge for the given path ("${i}" - "${a}").`)}else{if(n!==`mixed`)throw new B(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=``+e,r=this._edges.get(e),!r)throw new z(`Graph.${t}: could not find the "${e}" edge in the graph.`)}return r.attributes}}function ae(e,t,n){e.prototype[t]=function(e,r){let i;if(this.type!==`mixed`&&n!==`mixed`&&n!==this.type)throw new B(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new B(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let a=``+e,o=``+r;if(r=arguments[2],i=g(this,a,o,n),!i)throw new z(`Graph.${t}: could not find an edge for the given path ("${a}" - "${o}").`)}else{if(n!==`mixed`)throw new B(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=``+e,i=this._edges.get(e),!i)throw new z(`Graph.${t}: could not find the "${e}" edge in the graph.`)}return i.attributes.hasOwnProperty(r)}}function oe(e,t,n){e.prototype[t]=function(e,r,i){let a;if(this.type!==`mixed`&&n!==`mixed`&&n!==this.type)throw new B(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new B(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=``+e,s=``+r;if(r=arguments[2],i=arguments[3],a=g(this,o,s,n),!a)throw new z(`Graph.${t}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(n!==`mixed`)throw new B(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=``+e,a=this._edges.get(e),!a)throw new z(`Graph.${t}: could not find the "${e}" edge in the graph.`)}return a.attributes[r]=i,this.emit(`edgeAttributesUpdated`,{key:a.key,type:`set`,attributes:a.attributes,name:r}),this}}function se(e,t,n){e.prototype[t]=function(e,r,i){let a;if(this.type!==`mixed`&&n!==`mixed`&&n!==this.type)throw new B(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new B(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=``+e,s=``+r;if(r=arguments[2],i=arguments[3],a=g(this,o,s,n),!a)throw new z(`Graph.${t}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(n!==`mixed`)throw new B(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=``+e,a=this._edges.get(e),!a)throw new z(`Graph.${t}: could not find the "${e}" edge in the graph.`)}if(typeof i!=`function`)throw new R(`Graph.${t}: updater should be a function.`);return a.attributes[r]=i(a.attributes[r]),this.emit(`edgeAttributesUpdated`,{key:a.key,type:`set`,attributes:a.attributes,name:r}),this}}function ce(e,t,n){e.prototype[t]=function(e,r){let i;if(this.type!==`mixed`&&n!==`mixed`&&n!==this.type)throw new B(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new B(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let a=``+e,o=``+r;if(r=arguments[2],i=g(this,a,o,n),!i)throw new z(`Graph.${t}: could not find an edge for the given path ("${a}" - "${o}").`)}else{if(n!==`mixed`)throw new B(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=``+e,i=this._edges.get(e),!i)throw new z(`Graph.${t}: could not find the "${e}" edge in the graph.`)}return delete i.attributes[r],this.emit(`edgeAttributesUpdated`,{key:i.key,type:`remove`,attributes:i.attributes,name:r}),this}}function le(e,t,n){e.prototype[t]=function(e,r){let i;if(this.type!==`mixed`&&n!==`mixed`&&n!==this.type)throw new B(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new B(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let a=``+e,o=``+r;if(r=arguments[2],i=g(this,a,o,n),!i)throw new z(`Graph.${t}: could not find an edge for the given path ("${a}" - "${o}").`)}else{if(n!==`mixed`)throw new B(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=``+e,i=this._edges.get(e),!i)throw new z(`Graph.${t}: could not find the "${e}" edge in the graph.`)}if(!_(r))throw new R(`Graph.${t}: provided attributes are not a plain object.`);return i.attributes=r,this.emit(`edgeAttributesUpdated`,{key:i.key,type:`replace`,attributes:i.attributes}),this}}function ue(e,t,n){e.prototype[t]=function(e,r){let i;if(this.type!==`mixed`&&n!==`mixed`&&n!==this.type)throw new B(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new B(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let a=``+e,o=``+r;if(r=arguments[2],i=g(this,a,o,n),!i)throw new z(`Graph.${t}: could not find an edge for the given path ("${a}" - "${o}").`)}else{if(n!==`mixed`)throw new B(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=``+e,i=this._edges.get(e),!i)throw new z(`Graph.${t}: could not find the "${e}" edge in the graph.`)}if(!_(r))throw new R(`Graph.${t}: provided attributes are not a plain object.`);return L(i.attributes,r),this.emit(`edgeAttributesUpdated`,{key:i.key,type:`merge`,attributes:i.attributes,data:r}),this}}function de(e,t,n){e.prototype[t]=function(e,r){let i;if(this.type!==`mixed`&&n!==`mixed`&&n!==this.type)throw new B(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new B(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let a=``+e,o=``+r;if(r=arguments[2],i=g(this,a,o,n),!i)throw new z(`Graph.${t}: could not find an edge for the given path ("${a}" - "${o}").`)}else{if(n!==`mixed`)throw new B(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=``+e,i=this._edges.get(e),!i)throw new z(`Graph.${t}: could not find the "${e}" edge in the graph.`)}if(typeof r!=`function`)throw new R(`Graph.${t}: provided updater is not a function.`);return i.attributes=r(i.attributes),this.emit(`edgeAttributesUpdated`,{key:i.key,type:`update`,attributes:i.attributes}),this}}function fe(e){ct.forEach(function({name:t,attacher:n}){n(e,t(`Edge`),`mixed`),n(e,t(`DirectedEdge`),`directed`),n(e,t(`UndirectedEdge`),`undirected`)})}function pe(e,t,n,r){let i=!1;for(let a in t){if(a===r)continue;let o=t[a];if(i=n(o.key,o.attributes,o.source.key,o.target.key,o.source.attributes,o.target.attributes,o.undirected),e&&i)return o.key}}function me(e,t,n,r){let i,a,o,s=!1;for(let c in t)if(c!==r){i=t[c];do{if(a=i.source,o=i.target,s=n(i.key,i.attributes,a.key,o.key,a.attributes,o.attributes,i.undirected),e&&s)return i.key;i=i.next}while(i!==void 0)}}function he(e,t){let n=Object.keys(e),r=n.length,i,a=0;return{[Symbol.iterator](){return this},next(){do if(i)i=i.next;else{if(a>=r)return{done:!0};let o=n[a++];if(o===t){i=void 0;continue}i=e[o]}while(!i);return{done:!1,value:{edge:i.key,attributes:i.attributes,source:i.source.key,target:i.target.key,sourceAttributes:i.source.attributes,targetAttributes:i.target.attributes,undirected:i.undirected}}}}}function ge(e,t,n,r){let i=t[n];if(!i)return;let a=i.source,o=i.target;if(r(i.key,i.attributes,a.key,o.key,a.attributes,o.attributes,i.undirected)&&e)return i.key}function _e(e,t,n,r){let i=t[n];if(!i)return;let a=!1;do{if(a=r(i.key,i.attributes,i.source.key,i.target.key,i.source.attributes,i.target.attributes,i.undirected),e&&a)return i.key;i=i.next}while(i!==void 0)}function ve(e,t){let n=e[t];if(n.next!==void 0)return{[Symbol.iterator](){return this},next(){if(!n)return{done:!0};let e={edge:n.key,attributes:n.attributes,source:n.source.key,target:n.target.key,sourceAttributes:n.source.attributes,targetAttributes:n.target.attributes,undirected:n.undirected};return n=n.next,{done:!1,value:e}}};let r=!1;return{[Symbol.iterator](){return this},next(){return r===!0?{done:!0}:(r=!0,{done:!1,value:{edge:n.key,attributes:n.attributes,source:n.source.key,target:n.target.key,sourceAttributes:n.source.attributes,targetAttributes:n.target.attributes,undirected:n.undirected}})}}}function ye(e,t){if(e.size===0)return[];if(t===`mixed`||t===e.type)return Array.from(e._edges.keys());let n=t===`undirected`?e.undirectedSize:e.directedSize,r=Array(n),i=t===`undirected`,a=e._edges.values(),o=0,s,c;for(;s=a.next(),s.done!==!0;)c=s.value,c.undirected===i&&(r[o++]=c.key);return r}function be(e,t,n,r){if(t.size===0)return;let i=n!==`mixed`&&n!==t.type,a=n===`undirected`,o,s,c=!1,l=t._edges.values();for(;o=l.next(),o.done!==!0;){if(s=o.value,i&&s.undirected!==a)continue;let{key:t,attributes:n,source:l,target:u}=s;if(c=r(t,n,l.key,u.key,l.attributes,u.attributes,s.undirected),e&&c)return t}}function xe(e,t){if(e.size===0)return w();let n=t!==`mixed`&&t!==e.type,r=t===`undirected`,i=e._edges.values();return{[Symbol.iterator](){return this},next(){let e,t;for(;;){if(e=i.next(),e.done)return e;if(t=e.value,!(n&&t.undirected!==r))break}return{value:{edge:t.key,attributes:t.attributes,source:t.source.key,target:t.target.key,sourceAttributes:t.source.attributes,targetAttributes:t.target.attributes,undirected:t.undirected},done:!1}}}}function Se(e,t,n,r,i,a){let o=t?me:pe,s;if(n!==`undirected`&&(r!==`out`&&(s=o(e,i.in,a),e&&s)||r!==`in`&&(s=o(e,i.out,a,r?void 0:i.key),e&&s))||n!==`directed`&&(s=o(e,i.undirected,a),e&&s))return s}function Ce(e,t,n,r){let i=[];return Se(!1,e,t,n,r,function(e){i.push(e)}),i}function we(e,t,n){let r=w();return e!==`undirected`&&(t!==`out`&&n.in!==void 0&&(r=C(r,he(n.in))),t!==`in`&&n.out!==void 0&&(r=C(r,he(n.out,t?void 0:n.key)))),e!==`directed`&&n.undirected!==void 0&&(r=C(r,he(n.undirected))),r}function Te(e,t,n,r,i,a,o){let s=n?_e:ge,c;if(t!==`undirected`&&(i.in!==void 0&&r!==`out`&&(c=s(e,i.in,a,o),e&&c)||i.out!==void 0&&r!==`in`&&(r||i.key!==a)&&(c=s(e,i.out,a,o),e&&c))||t!==`directed`&&i.undirected!==void 0&&(c=s(e,i.undirected,a,o),e&&c))return c}function Ee(e,t,n,r,i){let a=[];return Te(!1,e,t,n,r,i,function(e){a.push(e)}),a}function De(e,t,n,r){let i=w();return e!==`undirected`&&(n.in!==void 0&&t!==`out`&&r in n.in&&(i=C(i,ve(n.in,r))),n.out!==void 0&&t!==`in`&&r in n.out&&(t||n.key!==r)&&(i=C(i,ve(n.out,r)))),e!==`directed`&&n.undirected!==void 0&&r in n.undirected&&(i=C(i,ve(n.undirected,r))),i}function Oe(e,t){let{name:n,type:r,direction:i}=t;e.prototype[n]=function(e,t){if(r!==`mixed`&&this.type!==`mixed`&&r!==this.type)return[];if(!arguments.length)return ye(this,r);if(arguments.length===1){e=``+e;let t=this._nodes.get(e);if(t===void 0)throw new z(`Graph.${n}: could not find the "${e}" node in the graph.`);return Ce(this.multi,r===`mixed`?this.type:r,i,t)}if(arguments.length===2){e=``+e,t=``+t;let a=this._nodes.get(e);if(!a)throw new z(`Graph.${n}:  could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new z(`Graph.${n}:  could not find the "${t}" target node in the graph.`);return Ee(r,this.multi,i,a,t)}throw new R(`Graph.${n}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function ke(e,t){let{name:n,type:r,direction:i}=t,a=`forEach`+n[0].toUpperCase()+n.slice(1,-1);e.prototype[a]=function(e,t,n){if(r===`mixed`||this.type===`mixed`||r===this.type){if(arguments.length===1)return n=e,be(!1,this,r,n);if(arguments.length===2){e=``+e,n=t;let o=this._nodes.get(e);if(o===void 0)throw new z(`Graph.${a}: could not find the "${e}" node in the graph.`);return Se(!1,this.multi,r===`mixed`?this.type:r,i,o,n)}if(arguments.length===3){e=``+e,t=``+t;let o=this._nodes.get(e);if(!o)throw new z(`Graph.${a}:  could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new z(`Graph.${a}:  could not find the "${t}" target node in the graph.`);return Te(!1,r,this.multi,i,o,t,n)}throw new R(`Graph.${a}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)}};let o=`map`+n[0].toUpperCase()+n.slice(1);e.prototype[o]=function(){let e=Array.prototype.slice.call(arguments),t=e.pop(),n;if(e.length===0){let i=0;r!==`directed`&&(i+=this.undirectedSize),r!==`undirected`&&(i+=this.directedSize),n=Array(i);let a=0;e.push((e,r,i,o,s,c,l)=>{n[a++]=t(e,r,i,o,s,c,l)})}else n=[],e.push((e,r,i,a,o,s,c)=>{n.push(t(e,r,i,a,o,s,c))});return this[a].apply(this,e),n};let s=`filter`+n[0].toUpperCase()+n.slice(1);e.prototype[s]=function(){let e=Array.prototype.slice.call(arguments),t=e.pop(),n=[];return e.push((e,r,i,a,o,s,c)=>{t(e,r,i,a,o,s,c)&&n.push(e)}),this[a].apply(this,e),n};let c=`reduce`+n[0].toUpperCase()+n.slice(1);e.prototype[c]=function(){let e=Array.prototype.slice.call(arguments);if(e.length<2||e.length>4)throw new R(`Graph.${c}: invalid number of arguments (expecting 2, 3 or 4 and got ${e.length}).`);if(typeof e[e.length-1]==`function`&&typeof e[e.length-2]!=`function`)throw new R(`Graph.${c}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let t,n;e.length===2?(t=e[0],n=e[1],e=[]):e.length===3?(t=e[1],n=e[2],e=[e[0]]):e.length===4&&(t=e[2],n=e[3],e=[e[0],e[1]]);let r=n;return e.push((e,n,i,a,o,s,c)=>{r=t(r,e,n,i,a,o,s,c)}),this[a].apply(this,e),r}}function Ae(e,t){let{name:n,type:r,direction:i}=t,a=`find`+n[0].toUpperCase()+n.slice(1,-1);e.prototype[a]=function(e,t,n){if(r!==`mixed`&&this.type!==`mixed`&&r!==this.type)return!1;if(arguments.length===1)return n=e,be(!0,this,r,n);if(arguments.length===2){e=``+e,n=t;let o=this._nodes.get(e);if(o===void 0)throw new z(`Graph.${a}: could not find the "${e}" node in the graph.`);return Se(!0,this.multi,r===`mixed`?this.type:r,i,o,n)}if(arguments.length===3){e=``+e,t=``+t;let o=this._nodes.get(e);if(!o)throw new z(`Graph.${a}:  could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new z(`Graph.${a}:  could not find the "${t}" target node in the graph.`);return Te(!0,r,this.multi,i,o,t,n)}throw new R(`Graph.${a}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)};let o=`some`+n[0].toUpperCase()+n.slice(1,-1);e.prototype[o]=function(){let e=Array.prototype.slice.call(arguments),t=e.pop();return e.push((e,n,r,i,a,o,s)=>t(e,n,r,i,a,o,s)),!!this[a].apply(this,e)};let s=`every`+n[0].toUpperCase()+n.slice(1,-1);e.prototype[s]=function(){let e=Array.prototype.slice.call(arguments),t=e.pop();return e.push((e,n,r,i,a,o,s)=>!t(e,n,r,i,a,o,s)),!this[a].apply(this,e)}}function je(e,t){let{name:n,type:r,direction:i}=t,a=n.slice(0,-1)+`Entries`;e.prototype[a]=function(e,t){if(r!==`mixed`&&this.type!==`mixed`&&r!==this.type)return w();if(!arguments.length)return xe(this,r);if(arguments.length===1){e=``+e;let t=this._nodes.get(e);if(!t)throw new z(`Graph.${a}: could not find the "${e}" node in the graph.`);return we(r,i,t)}if(arguments.length===2){e=``+e,t=``+t;let n=this._nodes.get(e);if(!n)throw new z(`Graph.${a}:  could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new z(`Graph.${a}:  could not find the "${t}" target node in the graph.`);return De(r,i,n,t)}throw new R(`Graph.${a}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function Me(e){lt.forEach(t=>{Oe(e,t),ke(e,t),Ae(e,t),je(e,t)})}function Ne(){this.A=null,this.B=null}function Pe(e,t,n,r,i){for(let a in r){let o=r[a],s=o.source,c=o.target,l=s===n?c:s;if(t&&t.has(l.key))continue;let u=i(l.key,l.attributes);if(e&&u)return l.key}}function Fe(e,t,n,r,i){if(t!==`mixed`){if(t===`undirected`)return Pe(e,null,r,r.undirected,i);if(typeof n==`string`)return Pe(e,null,r,r[n],i)}let a=new Ne,o;if(t!==`undirected`){if(n!==`out`){if(o=Pe(e,null,r,r.in,i),e&&o)return o;a.wrap(r.in)}if(n!==`in`){if(o=Pe(e,a,r,r.out,i),e&&o)return o;a.wrap(r.out)}}if(t!==`directed`&&(o=Pe(e,a,r,r.undirected,i),e&&o))return o}function Ie(e,t,n){if(e!==`mixed`){if(e===`undirected`)return Object.keys(n.undirected);if(typeof t==`string`)return Object.keys(n[t])}let r=[];return Fe(!1,e,t,n,function(e){r.push(e)}),r}function Le(e,t,n){let r=Object.keys(n),i=r.length,a=0;return{[Symbol.iterator](){return this},next(){let o=null;do{if(a>=i)return e&&e.wrap(n),{done:!0};let s=n[r[a++]],c=s.source,l=s.target;o=c===t?l:c,e&&e.has(o.key)&&(o=null)}while(o===null);return{done:!1,value:{neighbor:o.key,attributes:o.attributes}}}}}function Re(e,t,n){if(e!==`mixed`){if(e===`undirected`)return Le(null,n,n.undirected);if(typeof t==`string`)return Le(null,n,n[t])}let r=w(),i=new Ne;return e!==`undirected`&&(t!==`out`&&(r=C(r,Le(i,n,n.in))),t!==`in`&&(r=C(r,Le(i,n,n.out)))),e!==`directed`&&(r=C(r,Le(i,n,n.undirected))),r}function ze(e,t){let{name:n,type:r,direction:i}=t;e.prototype[n]=function(e){if(r!==`mixed`&&this.type!==`mixed`&&r!==this.type)return[];e=``+e;let t=this._nodes.get(e);if(t===void 0)throw new z(`Graph.${n}: could not find the "${e}" node in the graph.`);return Ie(r===`mixed`?this.type:r,i,t)}}function Be(e,t){let{name:n,type:r,direction:i}=t,a=`forEach`+n[0].toUpperCase()+n.slice(1,-1);e.prototype[a]=function(e,t){if(r!==`mixed`&&this.type!==`mixed`&&r!==this.type)return;e=``+e;let n=this._nodes.get(e);if(n===void 0)throw new z(`Graph.${a}: could not find the "${e}" node in the graph.`);Fe(!1,r===`mixed`?this.type:r,i,n,t)};let o=`map`+n[0].toUpperCase()+n.slice(1);e.prototype[o]=function(e,t){let n=[];return this[a](e,(e,r)=>{n.push(t(e,r))}),n};let s=`filter`+n[0].toUpperCase()+n.slice(1);e.prototype[s]=function(e,t){let n=[];return this[a](e,(e,r)=>{t(e,r)&&n.push(e)}),n};let c=`reduce`+n[0].toUpperCase()+n.slice(1);e.prototype[c]=function(e,t,n){if(arguments.length<3)throw new R(`Graph.${c}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let r=n;return this[a](e,(e,n)=>{r=t(r,e,n)}),r}}function Ve(e,t){let{name:n,type:r,direction:i}=t,a=n[0].toUpperCase()+n.slice(1,-1),o=`find`+a;e.prototype[o]=function(e,t){if(r!==`mixed`&&this.type!==`mixed`&&r!==this.type)return;e=``+e;let n=this._nodes.get(e);if(n===void 0)throw new z(`Graph.${o}: could not find the "${e}" node in the graph.`);return Fe(!0,r===`mixed`?this.type:r,i,n,t)};let s=`some`+a;e.prototype[s]=function(e,t){return!!this[o](e,t)};let c=`every`+a;e.prototype[c]=function(e,t){return!this[o](e,(e,n)=>!t(e,n))}}function He(e,t){let{name:n,type:r,direction:i}=t,a=n.slice(0,-1)+`Entries`;e.prototype[a]=function(e){if(r!==`mixed`&&this.type!==`mixed`&&r!==this.type)return w();e=``+e;let t=this._nodes.get(e);if(t===void 0)throw new z(`Graph.${a}: could not find the "${e}" node in the graph.`);return Re(r===`mixed`?this.type:r,i,t)}}function Ue(e){ut.forEach(t=>{ze(e,t),Be(e,t),Ve(e,t),He(e,t)})}function We(e,t,n,r,i){let a=r._nodes.values(),o=r.type,s,c,l,u,d,f,p;for(;s=a.next(),s.done!==!0;){let r=!1;if(c=s.value,o!==`undirected`)for(l in u=c.out,u){d=u[l];do{if(f=d.target,r=!0,p=i(c.key,f.key,c.attributes,f.attributes,d.key,d.attributes,d.undirected),e&&p)return d;d=d.next}while(d)}if(o!==`directed`){for(l in u=c.undirected,u)if(!(t&&c.key>l)){d=u[l];do{if(f=d.target,f.key!==l&&(f=d.source),r=!0,p=i(c.key,f.key,c.attributes,f.attributes,d.key,d.attributes,d.undirected),e&&p)return d;d=d.next}while(d)}}if(n&&!r&&(p=i(c.key,null,c.attributes,null,null,null,null),e&&p))return null}}function Ge(e,t){let n={key:e};return v(t.attributes)||(n.attributes=L({},t.attributes)),n}function Ke(e,t,n){let r={key:t,source:n.source.key,target:n.target.key};return v(n.attributes)||(r.attributes=L({},n.attributes)),e===`mixed`&&n.undirected&&(r.undirected=!0),r}function qe(e){if(!_(e))throw new R(`Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.`);if(!(`key`in e))throw new R(`Graph.import: serialized node is missing its key.`);if(`attributes`in e&&(!_(e.attributes)||e.attributes===null))throw new R(`Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.`)}function Je(e){if(!_(e))throw new R(`Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.`);if(!(`source`in e))throw new R(`Graph.import: serialized edge is missing its source.`);if(!(`target`in e))throw new R(`Graph.import: serialized edge is missing its target.`);if(`attributes`in e&&(!_(e.attributes)||e.attributes===null))throw new R(`Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.`);if(`undirected`in e&&typeof e.undirected!=`boolean`)throw new R(`Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.`)}function Ye(e,t,n){if(n&&!_(n))throw new R(`Graph.addNode: invalid attributes. Expecting an object but got "${n}"`);if(t=``+t,n||={},e._nodes.has(t))throw new B(`Graph.addNode: the "${t}" node already exist in the graph.`);let r=new e.NodeDataClass(t,n);return e._nodes.set(t,r),e.emit(`nodeAdded`,{key:t,attributes:n}),r}function Xe(e,t,n){let r=new e.NodeDataClass(t,n);return e._nodes.set(t,r),e.emit(`nodeAdded`,{key:t,attributes:n}),r}function Ze(e,t,n,r,i,a,o,s){if(!r&&e.type===`undirected`)throw new B(`Graph.${t}: you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead.`);if(r&&e.type===`directed`)throw new B(`Graph.${t}: you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead.`);if(s&&!_(s))throw new R(`Graph.${t}: invalid attributes. Expecting an object but got "${s}"`);if(a=``+a,o=``+o,s||={},!e.allowSelfLoops&&a===o)throw new B(`Graph.${t}: source & target are the same ("${a}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let c=e._nodes.get(a),l=e._nodes.get(o);if(!c)throw new z(`Graph.${t}: source node "${a}" not found.`);if(!l)throw new z(`Graph.${t}: target node "${o}" not found.`);let u={key:null,undirected:r,source:a,target:o,attributes:s};if(n)i=e._edgeKeyGenerator();else if(i=``+i,e._edges.has(i))throw new B(`Graph.${t}: the "${i}" edge already exists in the graph.`);if(!e.multi&&(r?c.undirected[o]!==void 0:c.out[o]!==void 0))throw new B(`Graph.${t}: an edge linking "${a}" to "${o}" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`);let d=new O(r,i,c,l,s);e._edges.set(i,d);let f=a===o;return r?(c.undirectedDegree++,l.undirectedDegree++,f&&(c.undirectedLoops++,e._undirectedSelfLoopCount++)):(c.outDegree++,l.inDegree++,f&&(c.directedLoops++,e._directedSelfLoopCount++)),e.multi?d.attachMulti():d.attach(),r?e._undirectedSize++:e._directedSize++,u.key=i,e.emit(`edgeAdded`,u),i}function Qe(e,t,n,r,i,a,o,s,c){if(!r&&e.type===`undirected`)throw new B(`Graph.${t}: you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead.`);if(r&&e.type===`directed`)throw new B(`Graph.${t}: you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead.`);if(s){if(c){if(typeof s!=`function`)throw new R(`Graph.${t}: invalid updater function. Expecting a function but got "${s}"`)}else if(!_(s))throw new R(`Graph.${t}: invalid attributes. Expecting an object but got "${s}"`)}a=``+a,o=``+o;let l;if(c&&(l=s,s=void 0),!e.allowSelfLoops&&a===o)throw new B(`Graph.${t}: source & target are the same ("${a}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let u=e._nodes.get(a),d=e._nodes.get(o),f,p;if(!n&&(f=e._edges.get(i),f)){if((f.source.key!==a||f.target.key!==o)&&(!r||f.source.key!==o||f.target.key!==a))throw new B(`Graph.${t}: inconsistency detected when attempting to merge the "${i}" edge with "${a}" source & "${o}" target vs. ("${f.source.key}", "${f.target.key}").`);p=f}if(!p&&!e.multi&&u&&(p=r?u.undirected[o]:u.out[o]),p){let t=[p.key,!1,!1,!1];if(c?!l:!s)return t;if(c){let t=p.attributes;p.attributes=l(t),e.emit(`edgeAttributesUpdated`,{type:`replace`,key:p.key,attributes:p.attributes})}else L(p.attributes,s),e.emit(`edgeAttributesUpdated`,{type:`merge`,key:p.key,attributes:p.attributes,data:s});return t}s||={},c&&l&&(s=l(s));let m={key:null,undirected:r,source:a,target:o,attributes:s};if(n)i=e._edgeKeyGenerator();else if(i=``+i,e._edges.has(i))throw new B(`Graph.${t}: the "${i}" edge already exists in the graph.`);let h=!1,g=!1;u||(u=Xe(e,a,{}),h=!0,a===o&&(d=u,g=!0)),d||(d=Xe(e,o,{}),g=!0),f=new O(r,i,u,d,s),e._edges.set(i,f);let v=a===o;return r?(u.undirectedDegree++,d.undirectedDegree++,v&&(u.undirectedLoops++,e._undirectedSelfLoopCount++)):(u.outDegree++,d.inDegree++,v&&(u.directedLoops++,e._directedSelfLoopCount++)),e.multi?f.attachMulti():f.attach(),r?e._undirectedSize++:e._directedSize++,m.key=i,e.emit(`edgeAdded`,m),[i,!0,h,g]}function $e(e,t){e._edges.delete(t.key);let{source:n,target:r,attributes:i}=t,a=t.undirected,o=n===r;a?(n.undirectedDegree--,r.undirectedDegree--,o&&(n.undirectedLoops--,e._undirectedSelfLoopCount--)):(n.outDegree--,r.inDegree--,o&&(n.directedLoops--,e._directedSelfLoopCount--)),e.multi?t.detachMulti():t.detach(),a?e._undirectedSize--:e._directedSize--,e.emit(`edgeDropped`,{key:t.key,attributes:i,source:n.key,target:r.key,undirected:a})}function et(e){e.from=function(t,n){let r=new e(L({},t.options,n));return r.import(t),r}}var tt,L,nt,R,z,B,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,V,gt,_t,vt,yt,bt;function xt(){return(xt=t((()=>{tt=m(),L=h,typeof Object.assign==`function`&&(L=Object.assign),nt=class extends Error{constructor(e){super(),this.name=`GraphError`,this.message=e}},R=class e extends nt{constructor(t){super(t),this.name=`InvalidArgumentsGraphError`,typeof Error.captureStackTrace==`function`&&Error.captureStackTrace(this,e.prototype.constructor)}},z=class e extends nt{constructor(t){super(t),this.name=`NotFoundGraphError`,typeof Error.captureStackTrace==`function`&&Error.captureStackTrace(this,e.prototype.constructor)}},B=class e extends nt{constructor(t){super(t),this.name=`UsageGraphError`,typeof Error.captureStackTrace==`function`&&Error.captureStackTrace(this,e.prototype.constructor)}},T.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.undirectedDegree=0,this.undirectedLoops=0,this.directedLoops=0,this.in={},this.out={},this.undirected={}},E.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.directedLoops=0,this.in={},this.out={}},D.prototype.clear=function(){this.undirectedDegree=0,this.undirectedLoops=0,this.undirected={}},O.prototype.attach=function(){let e=`out`,t=`in`;this.undirected&&(e=t=`undirected`);let n=this.source.key,r=this.target.key;this.source[e][r]=this,this.undirected&&n===r||(this.target[t][n]=this)},O.prototype.attachMulti=function(){let e=`out`,t=`in`,n=this.source.key,r=this.target.key;this.undirected&&(e=t=`undirected`);let i=this.source[e],a=i[r];a===void 0?(i[r]=this,this.undirected&&n===r||(this.target[t][n]=this)):(a.previous=this,this.next=a,i[r]=this,this.target[t][n]=this)},O.prototype.detach=function(){let e=this.source.key,t=this.target.key,n=`out`,r=`in`;this.undirected&&(n=r=`undirected`),delete this.source[n][t],delete this.target[r][e]},O.prototype.detachMulti=function(){let e=this.source.key,t=this.target.key,n=`out`,r=`in`;this.undirected&&(n=r=`undirected`),this.previous===void 0?this.next===void 0?(delete this.source[n][t],delete this.target[r][e]):(this.next.previous=void 0,this.source[n][t]=this.next,this.target[r][e]=this.next):(this.previous.next=this.next,this.next!==void 0&&(this.next.previous=this.previous))},rt=0,it=1,at=2,ot=3,st=[{name:e=>`get${e}Attribute`,attacher:A},{name:e=>`get${e}Attributes`,attacher:j},{name:e=>`has${e}Attribute`,attacher:M},{name:e=>`set${e}Attribute`,attacher:N},{name:e=>`update${e}Attribute`,attacher:P},{name:e=>`remove${e}Attribute`,attacher:F},{name:e=>`replace${e}Attributes`,attacher:ee},{name:e=>`merge${e}Attributes`,attacher:te},{name:e=>`update${e}Attributes`,attacher:ne}],ct=[{name:e=>`get${e}Attribute`,attacher:re},{name:e=>`get${e}Attributes`,attacher:ie},{name:e=>`has${e}Attribute`,attacher:ae},{name:e=>`set${e}Attribute`,attacher:oe},{name:e=>`update${e}Attribute`,attacher:se},{name:e=>`remove${e}Attribute`,attacher:ce},{name:e=>`replace${e}Attributes`,attacher:le},{name:e=>`merge${e}Attributes`,attacher:ue},{name:e=>`update${e}Attributes`,attacher:de}],lt=[{name:`edges`,type:`mixed`},{name:`inEdges`,type:`directed`,direction:`in`},{name:`outEdges`,type:`directed`,direction:`out`},{name:`inboundEdges`,type:`mixed`,direction:`in`},{name:`outboundEdges`,type:`mixed`,direction:`out`},{name:`directedEdges`,type:`directed`},{name:`undirectedEdges`,type:`undirected`}],ut=[{name:`neighbors`,type:`mixed`},{name:`inNeighbors`,type:`directed`,direction:`in`},{name:`outNeighbors`,type:`directed`,direction:`out`},{name:`inboundNeighbors`,type:`mixed`,direction:`in`},{name:`outboundNeighbors`,type:`mixed`,direction:`out`},{name:`directedNeighbors`,type:`directed`},{name:`undirectedNeighbors`,type:`undirected`}],Ne.prototype.wrap=function(e){this.A===null?this.A=e:this.B===null&&(this.B=e)},Ne.prototype.has=function(e){return this.A!==null&&e in this.A||this.B!==null&&e in this.B},dt=S(),ft=new Set([`directed`,`undirected`,`mixed`]),pt=new Set([`domain`,`_events`,`_eventsCount`,`_maxListeners`]),mt=[{name:e=>`${e}Edge`,generateKey:!0},{name:e=>`${e}DirectedEdge`,generateKey:!0,type:`directed`},{name:e=>`${e}UndirectedEdge`,generateKey:!0,type:`undirected`},{name:e=>`${e}EdgeWithKey`},{name:e=>`${e}DirectedEdgeWithKey`,type:`directed`},{name:e=>`${e}UndirectedEdgeWithKey`,type:`undirected`}],ht={allowSelfLoops:!0,multi:!1,type:`mixed`},V=class e extends tt.EventEmitter{constructor(e){if(super(),e=L({},ht,e),typeof e.multi!=`boolean`)throw new R(`Graph.constructor: invalid 'multi' option. Expecting a boolean but got "${e.multi}".`);if(!ft.has(e.type))throw new R(`Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "${e.type}".`);if(typeof e.allowSelfLoops!=`boolean`)throw new R(`Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "${e.allowSelfLoops}".`);let t=e.type===`mixed`?T:e.type===`directed`?E:D;y(this,`NodeDataClass`,t);let n=`geid_`+dt()+`_`,r=0;y(this,`_attributes`,{}),y(this,`_nodes`,new Map),y(this,`_edges`,new Map),y(this,`_directedSize`,0),y(this,`_undirectedSize`,0),y(this,`_directedSelfLoopCount`,0),y(this,`_undirectedSelfLoopCount`,0),y(this,`_edgeKeyGenerator`,()=>{let e;do e=n+r++;while(this._edges.has(e));return e}),y(this,`_options`,e),pt.forEach(e=>y(this,e,this[e])),b(this,`order`,()=>this._nodes.size),b(this,`size`,()=>this._edges.size),b(this,`directedSize`,()=>this._directedSize),b(this,`undirectedSize`,()=>this._undirectedSize),b(this,`selfLoopCount`,()=>this._directedSelfLoopCount+this._undirectedSelfLoopCount),b(this,`directedSelfLoopCount`,()=>this._directedSelfLoopCount),b(this,`undirectedSelfLoopCount`,()=>this._undirectedSelfLoopCount),b(this,`multi`,this._options.multi),b(this,`type`,this._options.type),b(this,`allowSelfLoops`,this._options.allowSelfLoops),b(this,`implementation`,()=>`graphology`)}_resetInstanceCounters(){this._directedSize=0,this._undirectedSize=0,this._directedSelfLoopCount=0,this._undirectedSelfLoopCount=0}hasNode(e){return this._nodes.has(``+e)}hasDirectedEdge(e,t){if(this.type===`undirected`)return!1;if(arguments.length===1){let t=``+e,n=this._edges.get(t);return!!n&&!n.undirected}if(arguments.length===2){e=``+e,t=``+t;let n=this._nodes.get(e);return n?n.out.hasOwnProperty(t):!1}throw new R(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasUndirectedEdge(e,t){if(this.type===`directed`)return!1;if(arguments.length===1){let t=``+e,n=this._edges.get(t);return!!n&&n.undirected}if(arguments.length===2){e=``+e,t=``+t;let n=this._nodes.get(e);return n?n.undirected.hasOwnProperty(t):!1}throw new R(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasEdge(e,t){if(arguments.length===1){let t=``+e;return this._edges.has(t)}if(arguments.length===2){e=``+e,t=``+t;let n=this._nodes.get(e);return n?n.out!==void 0&&n.out.hasOwnProperty(t)||n.undirected!==void 0&&n.undirected.hasOwnProperty(t):!1}throw new R(`Graph.hasEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}directedEdge(e,t){if(this.type===`undirected`)return;if(e=``+e,t=``+t,this.multi)throw new B(`Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.`);let n=this._nodes.get(e);if(!n)throw new z(`Graph.directedEdge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new z(`Graph.directedEdge: could not find the "${t}" target node in the graph.`);let r=n.out&&n.out[t]||void 0;if(r)return r.key}undirectedEdge(e,t){if(this.type===`directed`)return;if(e=``+e,t=``+t,this.multi)throw new B(`Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.`);let n=this._nodes.get(e);if(!n)throw new z(`Graph.undirectedEdge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new z(`Graph.undirectedEdge: could not find the "${t}" target node in the graph.`);let r=n.undirected&&n.undirected[t]||void 0;if(r)return r.key}edge(e,t){if(this.multi)throw new B(`Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.`);e=``+e,t=``+t;let n=this._nodes.get(e);if(!n)throw new z(`Graph.edge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new z(`Graph.edge: could not find the "${t}" target node in the graph.`);let r=n.out&&n.out[t]||n.undirected&&n.undirected[t]||void 0;if(r)return r.key}areDirectedNeighbors(e,t){e=``+e,t=``+t;let n=this._nodes.get(e);if(!n)throw new z(`Graph.areDirectedNeighbors: could not find the "${e}" node in the graph.`);return this.type===`undirected`?!1:t in n.in||t in n.out}areOutNeighbors(e,t){e=``+e,t=``+t;let n=this._nodes.get(e);if(!n)throw new z(`Graph.areOutNeighbors: could not find the "${e}" node in the graph.`);return this.type!==`undirected`&&t in n.out}areInNeighbors(e,t){e=``+e,t=``+t;let n=this._nodes.get(e);if(!n)throw new z(`Graph.areInNeighbors: could not find the "${e}" node in the graph.`);return this.type!==`undirected`&&t in n.in}areUndirectedNeighbors(e,t){e=``+e,t=``+t;let n=this._nodes.get(e);if(!n)throw new z(`Graph.areUndirectedNeighbors: could not find the "${e}" node in the graph.`);return this.type!==`directed`&&t in n.undirected}areNeighbors(e,t){e=``+e,t=``+t;let n=this._nodes.get(e);if(!n)throw new z(`Graph.areNeighbors: could not find the "${e}" node in the graph.`);return this.type!==`undirected`&&(t in n.in||t in n.out)||this.type!==`directed`&&t in n.undirected}areInboundNeighbors(e,t){e=``+e,t=``+t;let n=this._nodes.get(e);if(!n)throw new z(`Graph.areInboundNeighbors: could not find the "${e}" node in the graph.`);return this.type!==`undirected`&&t in n.in||this.type!==`directed`&&t in n.undirected}areOutboundNeighbors(e,t){e=``+e,t=``+t;let n=this._nodes.get(e);if(!n)throw new z(`Graph.areOutboundNeighbors: could not find the "${e}" node in the graph.`);return this.type!==`undirected`&&t in n.out||this.type!==`directed`&&t in n.undirected}inDegree(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new z(`Graph.inDegree: could not find the "${e}" node in the graph.`);return this.type===`undirected`?0:t.inDegree}outDegree(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new z(`Graph.outDegree: could not find the "${e}" node in the graph.`);return this.type===`undirected`?0:t.outDegree}directedDegree(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new z(`Graph.directedDegree: could not find the "${e}" node in the graph.`);return this.type===`undirected`?0:t.inDegree+t.outDegree}undirectedDegree(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new z(`Graph.undirectedDegree: could not find the "${e}" node in the graph.`);return this.type===`directed`?0:t.undirectedDegree}inboundDegree(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new z(`Graph.inboundDegree: could not find the "${e}" node in the graph.`);let n=0;return this.type!==`directed`&&(n+=t.undirectedDegree),this.type!==`undirected`&&(n+=t.inDegree),n}outboundDegree(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new z(`Graph.outboundDegree: could not find the "${e}" node in the graph.`);let n=0;return this.type!==`directed`&&(n+=t.undirectedDegree),this.type!==`undirected`&&(n+=t.outDegree),n}degree(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new z(`Graph.degree: could not find the "${e}" node in the graph.`);let n=0;return this.type!==`directed`&&(n+=t.undirectedDegree),this.type!==`undirected`&&(n+=t.inDegree+t.outDegree),n}inDegreeWithoutSelfLoops(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new z(`Graph.inDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type===`undirected`?0:t.inDegree-t.directedLoops}outDegreeWithoutSelfLoops(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new z(`Graph.outDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type===`undirected`?0:t.outDegree-t.directedLoops}directedDegreeWithoutSelfLoops(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new z(`Graph.directedDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type===`undirected`?0:t.inDegree+t.outDegree-t.directedLoops*2}undirectedDegreeWithoutSelfLoops(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new z(`Graph.undirectedDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type===`directed`?0:t.undirectedDegree-t.undirectedLoops*2}inboundDegreeWithoutSelfLoops(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new z(`Graph.inboundDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,r=0;return this.type!==`directed`&&(n+=t.undirectedDegree,r+=t.undirectedLoops*2),this.type!==`undirected`&&(n+=t.inDegree,r+=t.directedLoops),n-r}outboundDegreeWithoutSelfLoops(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new z(`Graph.outboundDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,r=0;return this.type!==`directed`&&(n+=t.undirectedDegree,r+=t.undirectedLoops*2),this.type!==`undirected`&&(n+=t.outDegree,r+=t.directedLoops),n-r}degreeWithoutSelfLoops(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new z(`Graph.degreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,r=0;return this.type!==`directed`&&(n+=t.undirectedDegree,r+=t.undirectedLoops*2),this.type!==`undirected`&&(n+=t.inDegree+t.outDegree,r+=t.directedLoops*2),n-r}source(e){e=``+e;let t=this._edges.get(e);if(!t)throw new z(`Graph.source: could not find the "${e}" edge in the graph.`);return t.source.key}target(e){e=``+e;let t=this._edges.get(e);if(!t)throw new z(`Graph.target: could not find the "${e}" edge in the graph.`);return t.target.key}extremities(e){e=``+e;let t=this._edges.get(e);if(!t)throw new z(`Graph.extremities: could not find the "${e}" edge in the graph.`);return[t.source.key,t.target.key]}opposite(e,t){e=``+e,t=``+t;let n=this._edges.get(t);if(!n)throw new z(`Graph.opposite: could not find the "${t}" edge in the graph.`);let r=n.source.key,i=n.target.key;if(e===r)return i;if(e===i)return r;throw new z(`Graph.opposite: the "${e}" node is not attached to the "${t}" edge (${r}, ${i}).`)}hasExtremity(e,t){e=``+e,t=``+t;let n=this._edges.get(e);if(!n)throw new z(`Graph.hasExtremity: could not find the "${e}" edge in the graph.`);return n.source.key===t||n.target.key===t}isUndirected(e){e=``+e;let t=this._edges.get(e);if(!t)throw new z(`Graph.isUndirected: could not find the "${e}" edge in the graph.`);return t.undirected}isDirected(e){e=``+e;let t=this._edges.get(e);if(!t)throw new z(`Graph.isDirected: could not find the "${e}" edge in the graph.`);return!t.undirected}isSelfLoop(e){e=``+e;let t=this._edges.get(e);if(!t)throw new z(`Graph.isSelfLoop: could not find the "${e}" edge in the graph.`);return t.source===t.target}addNode(e,t){return Ye(this,e,t).key}mergeNode(e,t){if(t&&!_(t))throw new R(`Graph.mergeNode: invalid attributes. Expecting an object but got "${t}"`);e=``+e,t||={};let n=this._nodes.get(e);return n?(t&&(L(n.attributes,t),this.emit(`nodeAttributesUpdated`,{type:`merge`,key:e,attributes:n.attributes,data:t})),[e,!1]):(n=new this.NodeDataClass(e,t),this._nodes.set(e,n),this.emit(`nodeAdded`,{key:e,attributes:t}),[e,!0])}updateNode(e,t){if(t&&typeof t!=`function`)throw new R(`Graph.updateNode: invalid updater function. Expecting a function but got "${t}"`);e=``+e;let n=this._nodes.get(e);if(n){if(t){let r=n.attributes;n.attributes=t(r),this.emit(`nodeAttributesUpdated`,{type:`replace`,key:e,attributes:n.attributes})}return[e,!1]}let r=t?t({}):{};return n=new this.NodeDataClass(e,r),this._nodes.set(e,n),this.emit(`nodeAdded`,{key:e,attributes:r}),[e,!0]}dropNode(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new z(`Graph.dropNode: could not find the "${e}" node in the graph.`);let n;if(this.type!==`undirected`){for(let e in t.out){n=t.out[e];do $e(this,n),n=n.next;while(n)}for(let e in t.in){n=t.in[e];do $e(this,n),n=n.next;while(n)}}if(this.type!==`directed`)for(let e in t.undirected){n=t.undirected[e];do $e(this,n),n=n.next;while(n)}this._nodes.delete(e),this.emit(`nodeDropped`,{key:e,attributes:t.attributes})}dropEdge(e){let t;if(arguments.length>1){let e=``+arguments[0],n=``+arguments[1];if(t=g(this,e,n,this.type),!t)throw new z(`Graph.dropEdge: could not find the "${e}" -> "${n}" edge in the graph.`)}else if(e=``+e,t=this._edges.get(e),!t)throw new z(`Graph.dropEdge: could not find the "${e}" edge in the graph.`);return $e(this,t),this}dropDirectedEdge(e,t){if(arguments.length<2)throw new B(`Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.`);if(this.multi)throw new B(`Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.`);e=``+e,t=``+t;let n=g(this,e,t,`directed`);if(!n)throw new z(`Graph.dropDirectedEdge: could not find a "${e}" -> "${t}" edge in the graph.`);return $e(this,n),this}dropUndirectedEdge(e,t){if(arguments.length<2)throw new B(`Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.`);if(this.multi)throw new B(`Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.`);let n=g(this,e,t,`undirected`);if(!n)throw new z(`Graph.dropUndirectedEdge: could not find a "${e}" -> "${t}" edge in the graph.`);return $e(this,n),this}clear(){this._edges.clear(),this._nodes.clear(),this._resetInstanceCounters(),this.emit(`cleared`)}clearEdges(){let e=this._nodes.values(),t;for(;t=e.next(),t.done!==!0;)t.value.clear();this._edges.clear(),this._resetInstanceCounters(),this.emit(`edgesCleared`)}getAttribute(e){return this._attributes[e]}getAttributes(){return this._attributes}hasAttribute(e){return this._attributes.hasOwnProperty(e)}setAttribute(e,t){return this._attributes[e]=t,this.emit(`attributesUpdated`,{type:`set`,attributes:this._attributes,name:e}),this}updateAttribute(e,t){if(typeof t!=`function`)throw new R(`Graph.updateAttribute: updater should be a function.`);let n=this._attributes[e];return this._attributes[e]=t(n),this.emit(`attributesUpdated`,{type:`set`,attributes:this._attributes,name:e}),this}removeAttribute(e){return delete this._attributes[e],this.emit(`attributesUpdated`,{type:`remove`,attributes:this._attributes,name:e}),this}replaceAttributes(e){if(!_(e))throw new R(`Graph.replaceAttributes: provided attributes are not a plain object.`);return this._attributes=e,this.emit(`attributesUpdated`,{type:`replace`,attributes:this._attributes}),this}mergeAttributes(e){if(!_(e))throw new R(`Graph.mergeAttributes: provided attributes are not a plain object.`);return L(this._attributes,e),this.emit(`attributesUpdated`,{type:`merge`,attributes:this._attributes,data:e}),this}updateAttributes(e){if(typeof e!=`function`)throw new R(`Graph.updateAttributes: provided updater is not a function.`);return this._attributes=e(this._attributes),this.emit(`attributesUpdated`,{type:`update`,attributes:this._attributes}),this}updateEachNodeAttributes(e,t){if(typeof e!=`function`)throw new R(`Graph.updateEachNodeAttributes: expecting an updater function.`);if(t&&!x(t))throw new R(`Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}`);let n=this._nodes.values(),r,i;for(;r=n.next(),r.done!==!0;)i=r.value,i.attributes=e(i.key,i.attributes);this.emit(`eachNodeAttributesUpdated`,{hints:t||null})}updateEachEdgeAttributes(e,t){if(typeof e!=`function`)throw new R(`Graph.updateEachEdgeAttributes: expecting an updater function.`);if(t&&!x(t))throw new R(`Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}`);let n=this._edges.values(),r,i,a,o;for(;r=n.next(),r.done!==!0;)i=r.value,a=i.source,o=i.target,i.attributes=e(i.key,i.attributes,a.key,o.key,a.attributes,o.attributes,i.undirected);this.emit(`eachEdgeAttributesUpdated`,{hints:t||null})}forEachAdjacencyEntry(e){if(typeof e!=`function`)throw new R(`Graph.forEachAdjacencyEntry: expecting a callback.`);We(!1,!1,!1,this,e)}forEachAdjacencyEntryWithOrphans(e){if(typeof e!=`function`)throw new R(`Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.`);We(!1,!1,!0,this,e)}forEachAssymetricAdjacencyEntry(e){if(typeof e!=`function`)throw new R(`Graph.forEachAssymetricAdjacencyEntry: expecting a callback.`);We(!1,!0,!1,this,e)}forEachAssymetricAdjacencyEntryWithOrphans(e){if(typeof e!=`function`)throw new R(`Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.`);We(!1,!0,!0,this,e)}nodes(){return Array.from(this._nodes.keys())}forEachNode(e){if(typeof e!=`function`)throw new R(`Graph.forEachNode: expecting a callback.`);let t=this._nodes.values(),n,r;for(;n=t.next(),n.done!==!0;)r=n.value,e(r.key,r.attributes)}findNode(e){if(typeof e!=`function`)throw new R(`Graph.findNode: expecting a callback.`);let t=this._nodes.values(),n,r;for(;n=t.next(),n.done!==!0;)if(r=n.value,e(r.key,r.attributes))return r.key}mapNodes(e){if(typeof e!=`function`)throw new R(`Graph.mapNode: expecting a callback.`);let t=this._nodes.values(),n,r,i=Array(this.order),a=0;for(;n=t.next(),n.done!==!0;)r=n.value,i[a++]=e(r.key,r.attributes);return i}someNode(e){if(typeof e!=`function`)throw new R(`Graph.someNode: expecting a callback.`);let t=this._nodes.values(),n,r;for(;n=t.next(),n.done!==!0;)if(r=n.value,e(r.key,r.attributes))return!0;return!1}everyNode(e){if(typeof e!=`function`)throw new R(`Graph.everyNode: expecting a callback.`);let t=this._nodes.values(),n,r;for(;n=t.next(),n.done!==!0;)if(r=n.value,!e(r.key,r.attributes))return!1;return!0}filterNodes(e){if(typeof e!=`function`)throw new R(`Graph.filterNodes: expecting a callback.`);let t=this._nodes.values(),n,r,i=[];for(;n=t.next(),n.done!==!0;)r=n.value,e(r.key,r.attributes)&&i.push(r.key);return i}reduceNodes(e,t){if(typeof e!=`function`)throw new R(`Graph.reduceNodes: expecting a callback.`);if(arguments.length<2)throw new R(`Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let n=t,r=this._nodes.values(),i,a;for(;i=r.next(),i.done!==!0;)a=i.value,n=e(n,a.key,a.attributes);return n}nodeEntries(){let e=this._nodes.values();return{[Symbol.iterator](){return this},next(){let t=e.next();if(t.done)return t;let n=t.value;return{value:{node:n.key,attributes:n.attributes},done:!1}}}}export(){let e=Array(this._nodes.size),t=0;this._nodes.forEach((n,r)=>{e[t++]=Ge(r,n)});let n=Array(this._edges.size);return t=0,this._edges.forEach((e,r)=>{n[t++]=Ke(this.type,r,e)}),{options:{type:this.type,multi:this.multi,allowSelfLoops:this.allowSelfLoops},attributes:this.getAttributes(),nodes:e,edges:n}}import(t,n=!1){if(t instanceof e)return t.forEachNode((e,t)=>{n?this.mergeNode(e,t):this.addNode(e,t)}),t.forEachEdge((e,t,r,i,a,o,s)=>{n?s?this.mergeUndirectedEdgeWithKey(e,r,i,t):this.mergeDirectedEdgeWithKey(e,r,i,t):s?this.addUndirectedEdgeWithKey(e,r,i,t):this.addDirectedEdgeWithKey(e,r,i,t)}),this;if(!_(t))throw new R(`Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.`);if(t.attributes){if(!_(t.attributes))throw new R(`Graph.import: invalid attributes. Expecting a plain object.`);n?this.mergeAttributes(t.attributes):this.replaceAttributes(t.attributes)}let r,i,a,o,s;if(t.nodes){if(a=t.nodes,!Array.isArray(a))throw new R(`Graph.import: invalid nodes. Expecting an array.`);for(r=0,i=a.length;r<i;r++){o=a[r],qe(o);let{key:e,attributes:t}=o;n?this.mergeNode(e,t):this.addNode(e,t)}}if(t.edges){let e=!1;if(this.type===`undirected`&&(e=!0),a=t.edges,!Array.isArray(a))throw new R(`Graph.import: invalid edges. Expecting an array.`);for(r=0,i=a.length;r<i;r++){s=a[r],Je(s);let{source:t,target:i,attributes:o,undirected:c=e}=s,l;`key`in s?(l=n?c?this.mergeUndirectedEdgeWithKey:this.mergeDirectedEdgeWithKey:c?this.addUndirectedEdgeWithKey:this.addDirectedEdgeWithKey,l.call(this,s.key,t,i,o)):(l=n?c?this.mergeUndirectedEdge:this.mergeDirectedEdge:c?this.addUndirectedEdge:this.addDirectedEdge,l.call(this,t,i,o))}}return this}nullCopy(t){let n=new e(L({},this._options,t));return n.replaceAttributes(L({},this.getAttributes())),n}emptyCopy(e){let t=this.nullCopy(e);return this._nodes.forEach((e,n)=>{let r=L({},e.attributes);e=new t.NodeDataClass(n,r),t._nodes.set(n,e)}),t}copy(e){if(e||={},typeof e.type==`string`&&e.type!==this.type&&e.type!==`mixed`)throw new B(`Graph.copy: cannot create an incompatible copy from "${this.type}" type to "${e.type}" because this would mean losing information about the current graph.`);if(typeof e.multi==`boolean`&&e.multi!==this.multi&&e.multi!==!0)throw new B(`Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.`);if(typeof e.allowSelfLoops==`boolean`&&e.allowSelfLoops!==this.allowSelfLoops&&e.allowSelfLoops!==!0)throw new B(`Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.`);let t=this.emptyCopy(e),n=this._edges.values(),r,i;for(;r=n.next(),r.done!==!0;)i=r.value,Ze(t,`copy`,!1,i.undirected,i.key,i.source.key,i.target.key,L({},i.attributes));return t}toJSON(){return this.export()}toString(){return`[object Graph]`}inspect(){let e={};this._nodes.forEach((t,n)=>{e[n]=t.attributes});let t={},n={};this._edges.forEach((e,r)=>{let i=e.undirected?`--`:`->`,a=``,o=e.source.key,s=e.target.key,c;e.undirected&&o>s&&(c=o,o=s,s=c);let l=`(${o})${i}(${s})`;r.startsWith(`geid_`)?this.multi&&(n[l]===void 0?n[l]=0:n[l]++,a+=`${n[l]}. `):a+=`[${r}]: `,a+=l,t[a]=e.attributes});let r={};for(let e in this)this.hasOwnProperty(e)&&!pt.has(e)&&typeof this[e]!=`function`&&typeof e!=`symbol`&&(r[e]=this[e]);return r.attributes=this._attributes,r.nodes=e,r.edges=t,y(r,`constructor`,this.constructor),r}},typeof Symbol<`u`&&(V.prototype[Symbol.for(`nodejs.util.inspect.custom`)]=V.prototype.inspect),mt.forEach(e=>{[`add`,`merge`,`update`].forEach(t=>{let n=e.name(t),r=t===`add`?Ze:Qe;e.generateKey?V.prototype[n]=function(i,a,o){return r(this,n,!0,(e.type||this.type)===`undirected`,null,i,a,o,t===`update`)}:V.prototype[n]=function(i,a,o,s){return r(this,n,!1,(e.type||this.type)===`undirected`,i,a,o,s,t===`update`)}})}),I(V),fe(V),Me(V),Ue(V),gt=class extends V{constructor(e){let t=L({type:`directed`},e);if(`multi`in t&&t.multi!==!1)throw new R(`DirectedGraph.from: inconsistent indication that the graph should be multi in given options!`);if(t.type!==`directed`)throw new R(`DirectedGraph.from: inconsistent "`+t.type+`" type in given options!`);super(t)}},_t=class extends V{constructor(e){let t=L({type:`undirected`},e);if(`multi`in t&&t.multi!==!1)throw new R(`UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!`);if(t.type!==`undirected`)throw new R(`UndirectedGraph.from: inconsistent "`+t.type+`" type in given options!`);super(t)}},vt=class extends V{constructor(e){let t=L({multi:!0},e);if(`multi`in t&&t.multi!==!0)throw new R(`MultiGraph.from: inconsistent indication that the graph should be simple in given options!`);super(t)}},yt=class extends V{constructor(e){let t=L({type:`directed`,multi:!0},e);if(`multi`in t&&t.multi!==!0)throw new R(`MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!`);if(t.type!==`directed`)throw new R(`MultiDirectedGraph.from: inconsistent "`+t.type+`" type in given options!`);super(t)}},bt=class extends V{constructor(e){let t=L({type:`undirected`,multi:!0},e);if(`multi`in t&&t.multi!==!0)throw new R(`MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!`);if(t.type!==`undirected`)throw new R(`MultiUndirectedGraph.from: inconsistent "`+t.type+`" type in given options!`);super(t)}},et(V),et(gt),et(_t),et(vt),et(yt),et(bt),V.Graph=V,V.DirectedGraph=gt,V.UndirectedGraph=_t,V.MultiGraph=vt,V.MultiDirectedGraph=yt,V.MultiUndirectedGraph=bt,V.InvalidArgumentsGraphError=R,V.NotFoundGraphError=z,V.UsageGraphError=B})))()}var St=n(((e,t)=>{function n(e){return!e||typeof e!=`object`||typeof e==`function`||Array.isArray(e)||e instanceof Set||e instanceof Map||e instanceof RegExp||e instanceof Date}function r(e,t){e||={};var i={};for(var a in t){var o=e[a],s=t[a];i[a]=n(s)?o===void 0?s:o:r(o,s)}return i}t.exports=r})),Ct=n(((e,t)=>{t.exports=function(e){return typeof e==`object`&&!!e&&typeof e.addUndirectedEdgeWithKey==`function`&&typeof e.dropNode==`function`&&typeof e.multi==`boolean`}})),wt=n(((e,t)=>{function n(e){return function(t,n){return t+Math.floor(e()*(n-t+1))}}var r=n(Math.random);r.createRandom=n,t.exports=r})),Tt=n(((e,t)=>{var n=wt().createRandom;function r(e){var t=n(e);return function(e){for(var n=e.length,r=n-1,i=-1;++i<n;){var a=t(i,r),o=e[a];e[a]=e[i],e[i]=o}}}var i=r(Math.random);i.createShuffleInPlace=r,t.exports=i})),Et=n(((e,t)=>{var n=St(),r=Ct(),i=Tt(),a={attributes:{x:`x`,y:`y`},center:0,hierarchyAttributes:[],rng:Math.random,scale:1};function o(e,t,n,r,i){this.wrappedCircle=i||null,this.children={},this.countChildren=0,this.id=e||null,this.next=null,this.previous=null,this.x=t||null,this.y=n||null,this.r=i?1010101:r||999}o.prototype.hasChildren=function(){return this.countChildren>0},o.prototype.addChild=function(e,t){this.children[e]=t,++this.countChildren},o.prototype.getChild=function(e){if(!this.children.hasOwnProperty(e)){var t=new o;this.children[e]=t,++this.countChildren}return this.children[e]},o.prototype.applyPositionToChildren=function(){if(this.hasChildren()){var e=this;for(var t in e.children){var n=e.children[t];n.x+=e.x,n.y+=e.y,n.applyPositionToChildren()}}};function s(e,t,n){for(var r in t.children){var i=t.children[r];i.hasChildren()?s(e,i,n):n[i.id]={x:i.x,y:i.y}}}function c(e,t){var n=e.r-t.r,r=t.x-e.x,i=t.y-e.y;return n<0||n*n<r*r+i*i}function l(e,t){var n=e.r-t.r+1e-6,r=t.x-e.x,i=t.y-e.y;return n>0&&n*n>r*r+i*i}function u(e,t){for(var n=0;n<t.length;++n)if(!l(e,t[n]))return!1;return!0}function d(e){return new o(null,e.x,e.y,e.r)}function f(e,t){var n=e.x,r=e.y,i=e.r,a=t.x,s=t.y,c=t.r,l=a-n,u=s-r,d=c-i,f=Math.sqrt(l*l+u*u);return new o(null,(n+a+l/f*d)/2,(r+s+u/f*d)/2,(f+i+c)/2)}function p(e,t,n){var r=e.x,i=e.y,a=e.r,s=t.x,c=t.y,l=t.r,u=n.x,d=n.y,f=n.r,p=r-s,m=r-u,h=i-c,g=i-d,_=l-a,v=f-a,y=r*r+i*i-a*a,b=y-s*s-c*c+l*l,x=y-u*u-d*d+f*f,S=m*h-p*g,C=(h*x-g*b)/(S*2)-r,w=(g*_-h*v)/S,T=(m*b-p*x)/(S*2)-i,E=(p*v-m*_)/S,D=w*w+E*E-1,O=2*(a+C*w+T*E),k=C*C+T*T-a*a,A=-(D?(O+Math.sqrt(O*O-4*D*k))/(2*D):k/O);return new o(null,r+C+w*A,i+T+E*A,A)}function m(e){switch(e.length){case 1:return d(e[0]);case 2:return f(e[0],e[1]);case 3:return p(e[0],e[1],e[2]);default:throw Error(`graphology-layout/circlepack: Invalid basis length `+e.length)}}function h(e,t){var n,r;if(u(t,e))return[t];for(n=0;n<e.length;++n)if(c(t,e[n])&&u(f(e[n],t),e))return[e[n],t];for(n=0;n<e.length-1;++n)for(r=n+1;r<e.length;++r)if(c(f(e[n],e[r]),t)&&c(f(e[n],t),e[r])&&c(f(e[r],t),e[n])&&u(p(e[n],e[r],t),e))return[e[n],e[r],t];throw Error(`graphology-layout/circlepack: extendBasis failure !`)}function g(e){var t=e.wrappedCircle,n=e.next.wrappedCircle,r=t.r+n.r,i=(t.x*n.r+n.x*t.r)/r,a=(t.y*n.r+n.y*t.r)/r;return i*i+a*a}function _(e,t){var n=0,r=e.slice(),i=e.length,a=[],o,s;for(t(r);n<i;)o=r[n],s&&l(s,o)?++n:(a=h(a,o),s=m(a),n=0);return s}function v(e,t,n){var r=e.x-t.x,i,a,o=e.y-t.y,s,c,l=r*r+o*o;l?(a=t.r+n.r,a*=a,c=e.r+n.r,c*=c,a>c?(i=(l+c-a)/(2*l),s=Math.sqrt(Math.max(0,c/l-i*i)),n.x=e.x-i*r-s*o,n.y=e.y-i*o+s*r):(i=(l+a-c)/(2*l),s=Math.sqrt(Math.max(0,a/l-i*i)),n.x=t.x+i*r-s*o,n.y=t.y+i*o+s*r)):(n.x=t.x+n.r,n.y=t.y)}function y(e,t){var n=e.r+t.r-1e-6,r=t.x-e.x,i=t.y-e.y;return n>0&&n*n>r*r+i*i}function b(e,t){var n=e.length;if(n===0)return 0;var r=e[0],i,a,s,c,l,u,d,f,p;if(r.x=0,r.y=0,n<=1)return r.r;if(i=e[1],r.x=-i.r,i.x=r.r,i.y=0,n<=2)return r.r+i.r;a=e[2],v(i,r,a),r=new o(null,null,null,null,r),i=new o(null,null,null,null,i),a=new o(null,null,null,null,a),r.next=a.previous=i,i.next=r.previous=a,a.next=i.previous=r;pack:for(l=3;l<n;++l){a=e[l],v(r.wrappedCircle,i.wrappedCircle,a),a=new o(null,null,null,null,a),u=i.next,d=r.previous,f=i.wrappedCircle.r,p=r.wrappedCircle.r;do if(f<=p){if(y(u.wrappedCircle,a.wrappedCircle)){i=u,r.next=i,i.previous=r,--l;continue pack}f+=u.wrappedCircle.r,u=u.next}else{if(y(d.wrappedCircle,a.wrappedCircle)){r=d,r.next=i,i.previous=r,--l;continue pack}p+=d.wrappedCircle.r,d=d.previous}while(u!==d.next);for(a.previous=r,a.next=i,r.next=i.previous=i=a,s=g(r);(a=a.next)!==i;)(c=g(a))<s&&(r=a,s=c);i=r.next}r=[i.wrappedCircle],a=i;for(var m=1e4;(a=a.next)!==i&&--m!==0;)r.push(a.wrappedCircle);for(a=_(r,t),l=0;l<n;++l)r=e[l],r.x-=a.x,r.y-=a.y;return a.r}function x(e,t){var n=0;if(e.hasChildren()){for(var r in e.children){var i=e.children[r];i.hasChildren()&&(i.r=x(i,t))}n=b(Object.values(e.children),t)}return n}function S(e,t){for(var n in x(e,t),e.children)e.children[n].applyPositionToChildren()}function C(e,t,c){if(!r(t))throw Error(`graphology-layout/circlepack: the given graph is not a valid graphology instance.`);c=n(c,a);var l={},u={},d=t.nodes(),f=c.center,p=c.hierarchyAttributes,m=i.createShuffleInPlace(c.rng),h=c.scale,g=new o;t.forEachNode(function(e,t){var n=new o(e,null,null,t.size?t.size:1),r=g;p.forEach(function(e){var n=t[e];r=r.getChild(n)}),r.addChild(e,n)}),S(g,m),s(t,g,l);for(var _=d.length,v,y,b=0;b<_;b++){var x=d[b];v=f+h*l[x].x,y=f+h*l[x].y,u[x]={x:v,y},e&&(t.setNodeAttribute(x,c.attributes.x,v),t.setNodeAttribute(x,c.attributes.y,y))}return u}var w=C.bind(null,!1);w.assign=C.bind(null,!0),t.exports=w})),Dt=n(((e,t)=>{var n=St(),r=Ct(),i={dimensions:[`x`,`y`],center:.5,scale:1};function a(e,t,a){if(!r(t))throw Error(`graphology-layout/random: the given graph is not a valid graphology instance.`);a=n(a,i);var o=a.dimensions;if(!Array.isArray(o)||o.length!==2)throw Error(`graphology-layout/random: given dimensions are invalid.`);var s=a.center,c=a.scale,l=Math.PI*2,u=(s-.5)*c,d=t.order,f=o[0],p=o[1];function m(e,t){return t[f]=c*Math.cos(e*l/d)+u,t[p]=c*Math.sin(e*l/d)+u,t}var h=0;if(!e){var g={};return t.forEachNode(function(e){g[e]=m(h++,{})}),g}t.updateEachNodeAttributes(function(e,t){return m(h++,t),t},{attributes:o})}var o=a.bind(null,!1);o.assign=a.bind(null,!0),t.exports=o})),Ot=n(((e,t)=>{var n=St(),r=Ct(),i={dimensions:[`x`,`y`],center:.5,rng:Math.random,scale:1};function a(e,t,a){if(!r(t))throw Error(`graphology-layout/random: the given graph is not a valid graphology instance.`);a=n(a,i);var o=a.dimensions;if(!Array.isArray(o)||o.length<1)throw Error(`graphology-layout/random: given dimensions are invalid.`);var s=o.length,c=a.center,l=a.rng,u=a.scale,d=(c-.5)*u;function f(e){for(var t=0;t<s;t++)e[o[t]]=l()*u+d;return e}if(!e){var p={};return t.forEachNode(function(e){p[e]=f({})}),p}t.updateEachNodeAttributes(function(e,t){return f(t),t},{attributes:o})}var o=a.bind(null,!1);o.assign=a.bind(null,!0),t.exports=o})),kt=n(((e,t)=>{var n=St(),r=Ct(),i=Math.PI/180,a={dimensions:[`x`,`y`],centeredOnZero:!1,degrees:!1};function o(e,t,o,s){if(!r(t))throw Error(`graphology-layout/rotation: the given graph is not a valid graphology instance.`);s=n(s,a),s.degrees&&(o*=i);var c=s.dimensions;if(!Array.isArray(c)||c.length!==2)throw Error(`graphology-layout/random: given dimensions are invalid.`);if(t.order===0)return e?void 0:{};var l=c[0],u=c[1],d=0,f=0;if(!s.centeredOnZero){var p=1/0,m=-1/0,h=1/0,g=-1/0;t.forEachNode(function(e,t){var n=t[l],r=t[u];n<p&&(p=n),n>m&&(m=n),r<h&&(h=r),r>g&&(g=r)}),d=(p+m)/2,f=(h+g)/2}var _=Math.cos(o),v=Math.sin(o);function y(e){var t=e[l],n=e[u];return e[l]=d+(t-d)*_-(n-f)*v,e[u]=f+(t-d)*v+(n-f)*_,e}if(!e){var b={};return t.forEachNode(function(e,t){var n={};n[l]=t[l],n[u]=t[u],b[e]=y(n)}),b}t.updateEachNodeAttributes(function(e,t){return y(t),t},{attributes:c})}var s=o.bind(null,!1);s.assign=o.bind(null,!0),t.exports=s})),At=n((e=>{e.circlepack=Et(),e.circular=Dt(),e.random=Ot(),e.rotation=kt()})),jt=n((e=>{function t(e){return typeof e!=`number`||isNaN(e)?1:e}function n(e,t){var n={},r=function(e){return e===void 0?t:e};typeof t==`function`&&(r=t);var i=function(t){return r(t[e])},a=function(){return r(void 0)};return typeof e==`string`?(n.fromAttributes=i,n.fromGraph=function(e,t){return i(e.getNodeAttributes(t))},n.fromEntry=function(e,t){return i(t)}):typeof e==`function`?(n.fromAttributes=function(){throw Error(`graphology-utils/getters/createNodeValueGetter: irrelevant usage.`)},n.fromGraph=function(t,n){return r(e(n,t.getNodeAttributes(n)))},n.fromEntry=function(t,n){return r(e(t,n))}):(n.fromAttributes=a,n.fromGraph=a,n.fromEntry=a),n}function r(e,t){var n={},r=function(e){return e===void 0?t:e};typeof t==`function`&&(r=t);var i=function(t){return r(t[e])},a=function(){return r(void 0)};return typeof e==`string`?(n.fromAttributes=i,n.fromGraph=function(e,t){return i(e.getEdgeAttributes(t))},n.fromEntry=function(e,t){return i(t)},n.fromPartialEntry=n.fromEntry,n.fromMinimalEntry=n.fromEntry):typeof e==`function`?(n.fromAttributes=function(){throw Error(`graphology-utils/getters/createEdgeValueGetter: irrelevant usage.`)},n.fromGraph=function(t,n){var i=t.extremities(n);return r(e(n,t.getEdgeAttributes(n),i[0],i[1],t.getNodeAttributes(i[0]),t.getNodeAttributes(i[1]),t.isUndirected(n)))},n.fromEntry=function(t,n,i,a,o,s,c){return r(e(t,n,i,a,o,s,c))},n.fromPartialEntry=function(t,n,i,a){return r(e(t,n,i,a))},n.fromMinimalEntry=function(t,n){return r(e(t,n))}):(n.fromAttributes=a,n.fromGraph=a,n.fromEntry=a,n.fromMinimalEntry=a),n}e.createNodeValueGetter=n,e.createEdgeValueGetter=r,e.createEdgeWeightGetter=function(e){return r(e,t)}})),Mt=n(((e,t)=>{t.exports=function(e,t,n){var r,i,a,o,s,c,l,u,d,f,p=t.length,m=n.length,h=e.adjustSizes,g=e.barnesHutTheta*e.barnesHutTheta,_,v,y,b,x,S,C,w=[];for(a=0;a<p;a+=10)t[a+4]=t[a+2],t[a+5]=t[a+3],t[a+2]=0,t[a+3]=0;if(e.outboundAttractionDistribution){for(_=0,a=0;a<p;a+=10)_+=t[a+6];_/=p/10}if(e.barnesHutOptimize){var T=1/0,E=-1/0,D=1/0,O=-1/0,k,A,j;for(a=0;a<p;a+=10)T=Math.min(T,t[a+0]),E=Math.max(E,t[a+0]),D=Math.min(D,t[a+1]),O=Math.max(O,t[a+1]);var M=E-T,N=O-D;for(M>N?(D-=(M-N)/2,O=D+M):(T-=(N-M)/2,E=T+N),w[0]=-1,w[1]=(T+E)/2,w[2]=(D+O)/2,w[3]=Math.max(E-T,O-D),w[4]=-1,w[5]=-1,w[6]=0,w[7]=0,w[8]=0,r=1,a=0;a<p;a+=10)for(i=0,j=3;;)if(w[i+5]>=0){k=t[a+0]<w[i+1]?t[a+1]<w[i+2]?w[i+5]:w[i+5]+9:t[a+1]<w[i+2]?w[i+5]+18:w[i+5]+27,w[i+7]=(w[i+7]*w[i+6]+t[a+0]*t[a+6])/(w[i+6]+t[a+6]),w[i+8]=(w[i+8]*w[i+6]+t[a+1]*t[a+6])/(w[i+6]+t[a+6]),w[i+6]+=t[a+6],i=k;continue}else if(w[i+0]<0){w[i+0]=a;break}else{if(w[i+5]=r*9,u=w[i+3]/2,d=w[i+5],w[d+0]=-1,w[d+1]=w[i+1]-u,w[d+2]=w[i+2]-u,w[d+3]=u,w[d+4]=d+9,w[d+5]=-1,w[d+6]=0,w[d+7]=0,w[d+8]=0,d+=9,w[d+0]=-1,w[d+1]=w[i+1]-u,w[d+2]=w[i+2]+u,w[d+3]=u,w[d+4]=d+9,w[d+5]=-1,w[d+6]=0,w[d+7]=0,w[d+8]=0,d+=9,w[d+0]=-1,w[d+1]=w[i+1]+u,w[d+2]=w[i+2]-u,w[d+3]=u,w[d+4]=d+9,w[d+5]=-1,w[d+6]=0,w[d+7]=0,w[d+8]=0,d+=9,w[d+0]=-1,w[d+1]=w[i+1]+u,w[d+2]=w[i+2]+u,w[d+3]=u,w[d+4]=w[i+4],w[d+5]=-1,w[d+6]=0,w[d+7]=0,w[d+8]=0,r+=4,k=t[w[i+0]+0]<w[i+1]?t[w[i+0]+1]<w[i+2]?w[i+5]:w[i+5]+9:t[w[i+0]+1]<w[i+2]?w[i+5]+18:w[i+5]+27,w[i+6]=t[w[i+0]+6],w[i+7]=t[w[i+0]+0],w[i+8]=t[w[i+0]+1],w[k+0]=w[i+0],w[i+0]=-1,A=t[a+0]<w[i+1]?t[a+1]<w[i+2]?w[i+5]:w[i+5]+9:t[a+1]<w[i+2]?w[i+5]+18:w[i+5]+27,k===A){if(j--){i=k;continue}j=3;break}w[A+0]=a;break}}if(e.barnesHutOptimize)for(v=e.scalingRatio,a=0;a<p;a+=10)for(i=0;;)if(w[i+5]>=0){if(S=(t[a+0]-w[i+7])**2+(t[a+1]-w[i+8])**2,f=w[i+3],4*f*f/S<g){if(y=t[a+0]-w[i+7],b=t[a+1]-w[i+8],h===!0?S>0?(C=v*t[a+6]*w[i+6]/S,t[a+2]+=y*C,t[a+3]+=b*C):S<0&&(C=-v*t[a+6]*w[i+6]/Math.sqrt(S),t[a+2]+=y*C,t[a+3]+=b*C):S>0&&(C=v*t[a+6]*w[i+6]/S,t[a+2]+=y*C,t[a+3]+=b*C),i=w[i+4],i<0)break;continue}i=w[i+5];continue}else{if(c=w[i+0],c>=0&&c!==a&&(y=t[a+0]-t[c+0],b=t[a+1]-t[c+1],S=y*y+b*b,h===!0?S>0?(C=v*t[a+6]*t[c+6]/S,t[a+2]+=y*C,t[a+3]+=b*C):S<0&&(C=-v*t[a+6]*t[c+6]/Math.sqrt(S),t[a+2]+=y*C,t[a+3]+=b*C):S>0&&(C=v*t[a+6]*t[c+6]/S,t[a+2]+=y*C,t[a+3]+=b*C)),i=w[i+4],i<0)break;continue}else for(v=e.scalingRatio,o=0;o<p;o+=10)for(s=0;s<o;s+=10)y=t[o+0]-t[s+0],b=t[o+1]-t[s+1],h===!0?(S=Math.sqrt(y*y+b*b)-t[o+8]-t[s+8],S>0?(C=v*t[o+6]*t[s+6]/S/S,t[o+2]+=y*C,t[o+3]+=b*C,t[s+2]-=y*C,t[s+3]-=b*C):S<0&&(C=100*v*t[o+6]*t[s+6],t[o+2]+=y*C,t[o+3]+=b*C,t[s+2]-=y*C,t[s+3]-=b*C)):(S=Math.sqrt(y*y+b*b),S>0&&(C=v*t[o+6]*t[s+6]/S/S,t[o+2]+=y*C,t[o+3]+=b*C,t[s+2]-=y*C,t[s+3]-=b*C));for(d=e.gravity/e.scalingRatio,v=e.scalingRatio,a=0;a<p;a+=10)C=0,y=t[a+0],b=t[a+1],S=Math.sqrt(y**2+b**2),e.strongGravityMode?S>0&&(C=v*t[a+6]*d):S>0&&(C=v*t[a+6]*d/S),t[a+2]-=y*C,t[a+3]-=b*C;for(v=1*(e.outboundAttractionDistribution?_:1),l=0;l<m;l+=3)o=n[l+0],s=n[l+1],u=n[l+2],x=u**+e.edgeWeightInfluence,y=t[o+0]-t[s+0],b=t[o+1]-t[s+1],h===!0?(S=Math.sqrt(y*y+b*b)-t[o+8]-t[s+8],e.linLogMode?e.outboundAttractionDistribution?S>0&&(C=-v*x*Math.log(1+S)/S/t[o+6]):S>0&&(C=-v*x*Math.log(1+S)/S):e.outboundAttractionDistribution?S>0&&(C=-v*x/t[o+6]):S>0&&(C=-v*x)):(S=Math.sqrt(y**2+b**2),e.linLogMode?e.outboundAttractionDistribution?S>0&&(C=-v*x*Math.log(1+S)/S/t[o+6]):S>0&&(C=-v*x*Math.log(1+S)/S):e.outboundAttractionDistribution?(S=1,C=-v*x/t[o+6]):(S=1,C=-v*x)),S>0&&(t[o+2]+=y*C,t[o+3]+=b*C,t[s+2]-=y*C,t[s+3]-=b*C);var P,F,ee,te,ne,I;if(h===!0)for(a=0;a<p;a+=10)t[a+9]!==1&&(P=Math.sqrt(t[a+2]**2+t[a+3]**2),P>10&&(t[a+2]=t[a+2]*10/P,t[a+3]=t[a+3]*10/P),F=t[a+6]*Math.sqrt((t[a+4]-t[a+2])*(t[a+4]-t[a+2])+(t[a+5]-t[a+3])*(t[a+5]-t[a+3])),ee=Math.sqrt((t[a+4]+t[a+2])*(t[a+4]+t[a+2])+(t[a+5]+t[a+3])*(t[a+5]+t[a+3]))/2,te=.1*Math.log(1+ee)/(1+Math.sqrt(F)),ne=t[a+0]+t[a+2]*(te/e.slowDown),t[a+0]=ne,I=t[a+1]+t[a+3]*(te/e.slowDown),t[a+1]=I);else for(a=0;a<p;a+=10)t[a+9]!==1&&(F=t[a+6]*Math.sqrt((t[a+4]-t[a+2])*(t[a+4]-t[a+2])+(t[a+5]-t[a+3])*(t[a+5]-t[a+3])),ee=Math.sqrt((t[a+4]+t[a+2])*(t[a+4]+t[a+2])+(t[a+5]+t[a+3])*(t[a+5]+t[a+3]))/2,te=t[a+7]*Math.log(1+ee)/(1+Math.sqrt(F)),t[a+7]=Math.min(1,Math.sqrt(te*(t[a+2]**2+t[a+3]**2)/(1+Math.sqrt(F)))),ne=t[a+0]+t[a+2]*(te/e.slowDown),t[a+0]=ne,I=t[a+1]+t[a+3]*(te/e.slowDown),t[a+1]=I);return{}}})),Nt=n((e=>{e.assign=function(e){e||={};for(var t=Array.prototype.slice.call(arguments).slice(1),n=0,r,i=t.length;n<i;n++)if(t[n])for(r in t[n])e[r]=t[n][r];return e},e.validateSettings=function(e){return`linLogMode`in e&&typeof e.linLogMode!=`boolean`?{message:"the `linLogMode` setting should be a boolean."}:`outboundAttractionDistribution`in e&&typeof e.outboundAttractionDistribution!=`boolean`?{message:"the `outboundAttractionDistribution` setting should be a boolean."}:`adjustSizes`in e&&typeof e.adjustSizes!=`boolean`?{message:"the `adjustSizes` setting should be a boolean."}:`edgeWeightInfluence`in e&&typeof e.edgeWeightInfluence!=`number`?{message:"the `edgeWeightInfluence` setting should be a number."}:`scalingRatio`in e&&!(typeof e.scalingRatio==`number`&&e.scalingRatio>=0)?{message:"the `scalingRatio` setting should be a number >= 0."}:`strongGravityMode`in e&&typeof e.strongGravityMode!=`boolean`?{message:"the `strongGravityMode` setting should be a boolean."}:`gravity`in e&&!(typeof e.gravity==`number`&&e.gravity>=0)?{message:"the `gravity` setting should be a number >= 0."}:`slowDown`in e&&!(typeof e.slowDown==`number`||e.slowDown>=0)?{message:"the `slowDown` setting should be a number >= 0."}:`barnesHutOptimize`in e&&typeof e.barnesHutOptimize!=`boolean`?{message:"the `barnesHutOptimize` setting should be a boolean."}:`barnesHutTheta`in e&&!(typeof e.barnesHutTheta==`number`&&e.barnesHutTheta>=0)?{message:"the `barnesHutTheta` setting should be a number >= 0."}:null},e.graphToByteArrays=function(e,t){var n=e.order,r=e.size,i={},a,o=new Float32Array(n*10),s=new Float32Array(r*3);return a=0,e.forEachNode(function(e,t){i[e]=a,o[a]=t.x,o[a+1]=t.y,o[a+2]=0,o[a+3]=0,o[a+4]=0,o[a+5]=0,o[a+6]=1,o[a+7]=1,o[a+8]=t.size||1,o[a+9]=+!!t.fixed,a+=10}),a=0,e.forEachEdge(function(e,n,r,c,l,u,d){var f=i[r],p=i[c],m=t(e,n,r,c,l,u,d);o[f+6]+=m,o[p+6]+=m,s[a]=f,s[a+1]=p,s[a+2]=m,a+=3}),{nodes:o,edges:s}},e.assignLayoutChanges=function(e,t,n){var r=0;e.updateEachNodeAttributes(function(e,i){return i.x=t[r],i.y=t[r+1],r+=10,n?n(e,i):i})},e.readGraphPositions=function(e,t){var n=0;e.forEachNode(function(e,r){t[n]=r.x,t[n+1]=r.y,n+=10})},e.collectLayoutChanges=function(e,t,n){for(var r=e.nodes(),i={},a=0,o=0,s=t.length;a<s;a+=10){if(n){var c=Object.assign({},e.getNodeAttributes(r[o]));c.x=t[a],c.y=t[a+1],c=n(r[o],c),i[r[o]]={x:c.x,y:c.y}}else i[r[o]]={x:t[a],y:t[a+1]};o++}return i},e.createWorker=function(e){var t=window.URL||window.webkitURL,n=e.toString(),r=t.createObjectURL(new Blob([`(`+n+`).call(this);`],{type:`text/javascript`})),i=new Worker(r);return t.revokeObjectURL(r),i}})),Pt=n(((e,t)=>{t.exports={linLogMode:!1,outboundAttractionDistribution:!1,adjustSizes:!1,edgeWeightInfluence:1,scalingRatio:1,strongGravityMode:!1,gravity:1,slowDown:1,barnesHutOptimize:!1,barnesHutTheta:.5}})),Ft=n(((e,t)=>{var n=Ct(),r=jt().createEdgeWeightGetter,i=Mt(),a=Nt(),o=Pt();function s(e,t,s){if(!n(t))throw Error(`graphology-layout-forceatlas2: the given graph is not a valid graphology instance.`);typeof s==`number`&&(s={iterations:s});var c=s.iterations;if(typeof c!=`number`)throw Error(`graphology-layout-forceatlas2: invalid number of iterations.`);if(c<=0)throw Error(`graphology-layout-forceatlas2: you should provide a positive number of iterations.`);var l=r(`getEdgeWeight`in s?s.getEdgeWeight:`weight`).fromEntry,u=typeof s.outputReducer==`function`?s.outputReducer:null,d=a.assign({},o,s.settings),f=a.validateSettings(d);if(f)throw Error(`graphology-layout-forceatlas2: `+f.message);for(var p=a.graphToByteArrays(t,l),m=0;m<c;m++)i(d,p.nodes,p.edges);if(e)a.assignLayoutChanges(t,p.nodes,u);else return a.collectLayoutChanges(t,p.nodes)}function c(e){var t=typeof e==`number`?e:e.order;return{barnesHutOptimize:t>2e3,strongGravityMode:!0,gravity:.05,scalingRatio:10,slowDown:1+Math.log(t)}}var l=s.bind(null,!1);l.assign=s.bind(null,!0),l.inferSettings=c,t.exports=l})),It,Lt,Rt;function zt(){return(zt=t((()=>{xt(),It=At(),Lt=e(Ft()),Rt=class extends V{constructor(){super({multi:!0})}importGraph(e,t=!0){return super.clear(),super.import({nodes:e.nodes.map(e=>({key:e.id,attributes:this.enrichNodeAttributes(e)})),edges:e.edges.map(e=>({key:e.id,source:e.source,target:e.target,attributes:e}))},!1),setTimeout(()=>{if(t){It.random.assign(this);let e=Lt.default.inferSettings(this);Lt.default.assign(this,{iterations:500,settings:e})}this.emit(`layoutDone`)},500),this}on(e,t){return super.on(e,t)}off(e,t){return super.off(e,t)}emit(e,...t){return super.emit(e,...t)}import(){throw Error("Graphology import is deprecated, use `importGraph` instead")}export(){throw Error("Graphology export is deprecated, use `exportGraph` instead")}enrichNodeAttributes(e){return!e.x&&!e.y&&(e.x=0,e.y=0),e}}})))()}function Bt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Vt(e,t){if(e){if(typeof e==`string`)return Bt(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Bt(e,t):void 0}}function Ht(e){if(Array.isArray(e))return e}function Ut(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Wt(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H(e,t){return Ht(e)||Ut(e,t)||Vt(e,t)||Wt()}function U(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=Vt(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function Gt(){return Float32Array.of(1,0,0,0,1,0,0,0,1)}function Kt(e,t,n){return e[0]=t,e[4]=typeof n==`number`?n:t,e}function qt(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=n,e[3]=-n,e[4]=r,e}function Jt(e,t,n){return e[6]=t,e[7]=n,e}function Yt(e,t){var n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],d=t[0],f=t[1],p=t[2],m=t[3],h=t[4],g=t[5],_=t[6],v=t[7],y=t[8];return e[0]=d*n+f*a+p*c,e[1]=d*r+f*o+p*l,e[2]=d*i+f*s+p*u,e[3]=m*n+h*a+g*c,e[4]=m*r+h*o+g*l,e[5]=m*i+h*s+g*u,e[6]=_*n+v*a+y*c,e[7]=_*r+v*o+y*l,e[8]=_*i+v*s+y*u,e}function Xt(e,t){var n=Math.cos(t),r=Math.sin(t);return{x:n*e.x+r*e.y,y:-r*e.x+n*e.y}}function Zt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,r=e[0],i=e[1],a=e[3],o=e[4],s=e[6],c=e[7],l=t.x,u=t.y;return{x:l*r+u*a+s*n,y:l*i+u*o+c*n}}function Qt(e,t){var n=e.height/e.width,r=t.height/t.width;return n<1&&r>1||n>1&&r<1?1:Math.min(Math.max(r,1/r),Math.max(1/n,n))}function $t(e,t,n,r,i){var a=e.angle,o=e.ratio,s=e.x,c=e.y,l=t.width,u=t.height,d=Gt(),f=Math.min(l,u)-2*r,p=Qt(t,n);return i?(Yt(d,Jt(Gt(),s,c)),Yt(d,Kt(Gt(),o)),Yt(d,qt(Gt(),a)),Yt(d,Kt(Gt(),l/f/2/p,u/f/2/p))):(Yt(d,Kt(Gt(),f/l*2*p,f/u*2*p)),Yt(d,qt(Gt(),-a)),Yt(d,Kt(Gt(),1/o)),Yt(d,Jt(Gt(),-s,-c))),d}function en(e,t,n){var r=Zt(e,{x:Math.cos(t.angle),y:Math.sin(t.angle)},0),i=r.x,a=r.y;return 1/Math.sqrt(i**2+a**2)/n.width}function tn(e,t,n,r,i){return[Math.floor(t/i*r),Math.floor(e.drawingBufferHeight/i-n/i*r)]}function nn(e){var t=0,n=0,r=0,i=1,a=e.toLowerCase();if(a===`transparent`)return{r:0,g:0,b:0,a:0};if(a in fn)return nn(fn[a]);if(e[0]===`#`)e.length===4?(t=parseInt(e.charAt(1)+e.charAt(1),16),n=parseInt(e.charAt(2)+e.charAt(2),16),r=parseInt(e.charAt(3)+e.charAt(3),16)):(t=parseInt(e.charAt(1)+e.charAt(2),16),n=parseInt(e.charAt(3)+e.charAt(4),16),r=parseInt(e.charAt(5)+e.charAt(6),16)),e.length===9&&(i=parseInt(e.charAt(7)+e.charAt(8),16)/255);else if(gn.test(e)){var o=e.match(_n);o&&(t=+o[1],n=+o[2],r=+o[3],o[4]&&(i=+o[4]))}return{r:t,g:n,b:r,a:i}}function rn(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=nn(e),r=n.r,i=n.g,a=n.b,o=n.a;return t?[r/255*o,i/255*o,a/255*o,o]:[r/255,i/255,a/255,o]}function an(e,t,n,r,i){return mn[0]=r<<24|n<<16|t<<8|e,i&&(mn[0]&=4278190079),hn[0]}function on(e){if(e=e.toLowerCase(),vn[e]!==void 0)return vn[e];var t=nn(e),n=t.r,r=t.g,i=t.b,a=t.a;a=a*255|0;var o=an(n,r,i,a,!0);return vn[e]=o,o}function sn(e,t){hn[0]=on(e);var n=mn[0];return t&&(n|=16777216),[n&255,n>>8&255,n>>16&255,n>>24&255]}function cn(e){var t=e>>>8&255,n=e>>>16&255,r=e>>>24&255;return((e&255)<<24|r<<16|n<<8|t)>>>0}function ln(e,t,n,r){return(n<<24|t<<16|e<<8|r)>>>0}function un(e,t,n,r,i,a){var o=H(tn(e,n,r,i,a),2),s=o[0],c=o[1],l=new Uint8Array(4);e.bindFramebuffer(e.FRAMEBUFFER,t),e.readPixels(s,c,1,1,e.RGBA,e.UNSIGNED_BYTE,l);var u=H(l,4);return[u[0],u[1],u[2],u[3]]}function dn(e){var t=nn(e),n=t.r,r=t.g,i=t.b,a=t.a;return`vec4(${(n/255).toFixed(6)}, ${(r/255).toFixed(6)}, ${(i/255).toFixed(6)}, ${a.toFixed(6)})`}var fn,pn,mn,hn,gn,_n,vn;function yn(){return(yn=t((()=>{for(var e in fn={black:`#000000`,silver:`#C0C0C0`,gray:`#808080`,grey:`#808080`,white:`#FFFFFF`,maroon:`#800000`,red:`#FF0000`,purple:`#800080`,fuchsia:`#FF00FF`,green:`#008000`,lime:`#00FF00`,olive:`#808000`,yellow:`#FFFF00`,navy:`#000080`,blue:`#0000FF`,teal:`#008080`,aqua:`#00FFFF`,darkblue:`#00008B`,mediumblue:`#0000CD`,darkgreen:`#006400`,darkcyan:`#008B8B`,deepskyblue:`#00BFFF`,darkturquoise:`#00CED1`,mediumspringgreen:`#00FA9A`,springgreen:`#00FF7F`,cyan:`#00FFFF`,midnightblue:`#191970`,dodgerblue:`#1E90FF`,lightseagreen:`#20B2AA`,forestgreen:`#228B22`,seagreen:`#2E8B57`,darkslategray:`#2F4F4F`,darkslategrey:`#2F4F4F`,limegreen:`#32CD32`,mediumseagreen:`#3CB371`,turquoise:`#40E0D0`,royalblue:`#4169E1`,steelblue:`#4682B4`,darkslateblue:`#483D8B`,mediumturquoise:`#48D1CC`,indigo:`#4B0082`,darkolivegreen:`#556B2F`,cadetblue:`#5F9EA0`,cornflowerblue:`#6495ED`,rebeccapurple:`#663399`,mediumaquamarine:`#66CDAA`,dimgray:`#696969`,dimgrey:`#696969`,slateblue:`#6A5ACD`,olivedrab:`#6B8E23`,slategray:`#708090`,slategrey:`#708090`,lightslategray:`#778899`,lightslategrey:`#778899`,mediumslateblue:`#7B68EE`,lawngreen:`#7CFC00`,chartreuse:`#7FFF00`,aquamarine:`#7FFFD4`,skyblue:`#87CEEB`,lightskyblue:`#87CEFA`,blueviolet:`#8A2BE2`,darkred:`#8B0000`,darkmagenta:`#8B008B`,saddlebrown:`#8B4513`,darkseagreen:`#8FBC8F`,lightgreen:`#90EE90`,mediumpurple:`#9370DB`,darkviolet:`#9400D3`,palegreen:`#98FB98`,darkorchid:`#9932CC`,yellowgreen:`#9ACD32`,sienna:`#A0522D`,brown:`#A52A2A`,darkgray:`#A9A9A9`,darkgrey:`#A9A9A9`,lightblue:`#ADD8E6`,greenyellow:`#ADFF2F`,paleturquoise:`#AFEEEE`,lightsteelblue:`#B0C4DE`,powderblue:`#B0E0E6`,firebrick:`#B22222`,darkgoldenrod:`#B8860B`,mediumorchid:`#BA55D3`,rosybrown:`#BC8F8F`,darkkhaki:`#BDB76B`,mediumvioletred:`#C71585`,indianred:`#CD5C5C`,peru:`#CD853F`,chocolate:`#D2691E`,tan:`#D2B48C`,lightgray:`#D3D3D3`,lightgrey:`#D3D3D3`,thistle:`#D8BFD8`,orchid:`#DA70D6`,goldenrod:`#DAA520`,palevioletred:`#DB7093`,crimson:`#DC143C`,gainsboro:`#DCDCDC`,plum:`#DDA0DD`,burlywood:`#DEB887`,lightcyan:`#E0FFFF`,lavender:`#E6E6FA`,darksalmon:`#E9967A`,violet:`#EE82EE`,palegoldenrod:`#EEE8AA`,lightcoral:`#F08080`,khaki:`#F0E68C`,aliceblue:`#F0F8FF`,honeydew:`#F0FFF0`,azure:`#F0FFFF`,sandybrown:`#F4A460`,wheat:`#F5DEB3`,beige:`#F5F5DC`,whitesmoke:`#F5F5F5`,mintcream:`#F5FFFA`,ghostwhite:`#F8F8FF`,salmon:`#FA8072`,antiquewhite:`#FAEBD7`,linen:`#FAF0E6`,lightgoldenrodyellow:`#FAFAD2`,oldlace:`#FDF5E6`,magenta:`#FF00FF`,deeppink:`#FF1493`,orangered:`#FF4500`,tomato:`#FF6347`,hotpink:`#FF69B4`,coral:`#FF7F50`,darkorange:`#FF8C00`,lightsalmon:`#FFA07A`,orange:`#FFA500`,lightpink:`#FFB6C1`,pink:`#FFC0CB`,gold:`#FFD700`,peachpuff:`#FFDAB9`,navajowhite:`#FFDEAD`,moccasin:`#FFE4B5`,bisque:`#FFE4C4`,mistyrose:`#FFE4E1`,blanchedalmond:`#FFEBCD`,papayawhip:`#FFEFD5`,lavenderblush:`#FFF0F5`,seashell:`#FFF5EE`,cornsilk:`#FFF8DC`,lemonchiffon:`#FFFACD`,floralwhite:`#FFFAF0`,snow:`#FFFAFA`,lightyellow:`#FFFFE0`,ivory:`#FFFFF0`},pn=new Int8Array(4),mn=new Int32Array(pn.buffer,0,1),hn=new Float32Array(pn.buffer,0,1),gn=/^\s*rgba?\s*\(/,_n=/^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/,vn={},fn)vn[e]=on(fn[e]),vn[fn[e]]=vn[e]})))()}function bn(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function xn(e){var t=bn(e,`string`);return typeof t==`symbol`?t:t+``}function W(e,t,n){return(t=xn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Sn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Sn(Object(n),!0).forEach(function(t){W(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function K(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Cn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,xn(r.key),r)}}function q(e,t,n){return t&&Cn(e.prototype,t),n&&Cn(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function wn(e){return wn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},wn(e)}function Tn(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Tn=function(){return!!e})()}function En(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function Dn(e,t){if(t&&(typeof t==`object`||typeof t==`function`))return t;if(t!==void 0)throw TypeError(`Derived constructors may only return object or undefined`);return En(e)}function J(e,t,n){return t=wn(t),Dn(e,Tn()?Reflect.construct(t,n||[],wn(e).constructor):t.apply(e,n))}function On(e,t){return On=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},On(e,t)}function Y(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&On(e,t)}function kn(e){if(Array.isArray(e))return Bt(e)}function An(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function jn(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(e){return kn(e)||An(e)||Vt(e)||jn()}function Z(e){"@babel/helpers - typeof";return Z=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Z(e)}function Mn(e){return Z(e)===`object`&&e!==null&&`attribute`in e}function Nn(){return{name:`circle`,glsl:`
float sdf_circle(vec2 uv, float size) {
  return length(uv) - size;
}
`,uniforms:[]}}function Pn(e){var t=WebGL2RenderingContext.UNSIGNED_BYTE,n=e?.color??{attribute:`color`};return Mn(n)?{name:`fill`,uniforms:[],attributes:[{name:`fillColor`,size:4,type:t,normalized:!0,source:n.attribute}],glsl:`
vec4 layer_fill(vec4 v_fillColor) {
  return v_fillColor;
}
`}:{name:`fill`,uniforms:[],attributes:[],glsl:`
vec4 layer_fill() {
  return ${dn(n)};
}
`}}function Fn(e,t){if(typeof e==`string`){var n=H(rn(e).map(function(e){return e.toFixed(6)}),4);return{glsl:`vec4(${n[0]}, ${n[1]}, ${n[2]}, ${n[3]})`,attributes:[],needsNodeColors:!1}}if(`node`in e&&e.node)return{glsl:e.node===`source`?`v_sourceColor`:`v_targetColor`,attributes:[],needsNodeColors:!0};var r=e;return{glsl:`v_${t}`,attributes:[{name:`a_${t}`,size:4,type:WebGL2RenderingContext.UNSIGNED_BYTE,normalized:!0,source:r.attribute,defaultValue:r.default}],needsNodeColors:!1}}function In(e){var t=e?.color;if(t===void 0)return{name:`plain`,glsl:`
// Plain solid color layer
vec4 layer_plain(EdgeContext ctx) {
  return v_color;
}
`,uniforms:[],attributes:[]};var n=Fn(t,`plainColor`);return{name:`plain`,glsl:`
// Plain solid color layer
vec4 layer_plain(EdgeContext ctx) {
  return ${n.glsl};
}
`,uniforms:[],attributes:n.attributes,needsNodeColors:n.needsNodeColors}}function Ln(){return{name:`straight`,segments:1,minBodyLengthRatio:0,linearParameterization:!0,glsl:`
// Position at parameter t ∈ [0, 1]
vec2 path_straight_position(float t, vec2 source, vec2 target) {
  return mix(source, target, t);
}

// Total length of the path (analytical - more efficient than sampling)
float path_straight_length(vec2 source, vec2 target) {
  return length(target - source);
}
`,uniforms:[],attributes:[]}}function Rn(e){var t=(e??{}).segments;return{name:`loop`,segments:t===void 0?32:t,glsl:`
const float LOOP_PI = 3.141592653589793;

float loopWorldRadius() {
  float nodeWorldRadius = v_sourceNodeSize * u_correctionRatio / u_sizeRatio;
  return max(v_loopRadius * nodeWorldRadius, 0.001);
}

// Cubic Bézier with P0 = P3 = source.
// Control points extend outward orthogonal to the node surface at exit/entry angles.
vec2 path_loop_position(float t, vec2 source, vec2 target) {
  float R = loopWorldRadius();
  float angle = v_loopAngle + (v_loopFixedOrientation > 0.5 ? u_cameraAngle : 0.0);
  float halfSpread = v_loopSpread * 0.5;

  float exitAngle = angle - halfSpread;
  float entryAngle = angle + halfSpread;

  // Control point distance: at t=0.5 the Bézier reaches 0.75 * cpDist * cos(halfSpread)
  // from source. Solve for cpDist so the loop tip reaches exactly R.
  float cpDist = R / (0.75 * cos(halfSpread));

  vec2 cp1 = source + cpDist * vec2(cos(exitAngle), sin(exitAngle));
  vec2 cp2 = source + cpDist * vec2(cos(entryAngle), sin(entryAngle));

  float u = 1.0 - t;
  vec2 d1 = cp1 - source;
  vec2 d2 = cp2 - source;
  return source + 3.0 * t * u * (u * d1 + t * d2);
}

// Approximate arc length via chord sampling
float path_loop_length(vec2 source, vec2 target) {
  float len = 0.0;
  vec2 prev = path_loop_position(0.0, source, target);
  const int STEPS = 16;
  for (int i = 1; i <= STEPS; i++) {
    float t = float(i) / float(STEPS);
    vec2 cur = path_loop_position(t, source, target);
    len += length(cur - prev);
    prev = cur;
  }
  return len;
}
`,needsNodeSize:!0,uniforms:[],attributes:[{name:`loopRadius`,size:1,type:WebGL2RenderingContext.FLOAT},{name:`loopAngle`,size:1,type:WebGL2RenderingContext.FLOAT},{name:`loopSpread`,size:1,type:WebGL2RenderingContext.FLOAT},{name:`loopFixedOrientation`,size:1,type:WebGL2RenderingContext.FLOAT}],variables:{loopRadius:{type:`number`,default:4},loopAngle:{type:`number`,default:Math.PI/4},loopSpread:{type:`number`,default:80*Math.PI/180},loopFixedOrientation:{type:`number`,default:0}},spread:{variable:`loopRadius`,compute:function(e){return e+4}}}}function zn(){return(zn=t((()=>{yn()})))()}function Bn(e){for(var t=`normal`,n=`normal`,r=e.trim(),i=r.split(/\s+/),a=0,o=0;o<i.length;o++){var s=i[o].toLowerCase();if(Un.has(s))n=s,a=o+1;else if(Wn.has(s)||/^\d{3}$/.test(s))t=s,a=o+1;else if(s===`normal`)a=o+1;else break}return{family:i.slice(a).join(` `)||r,weight:t,style:n}}function Vn(e,t,n){var r=document.createElement(e);if(t)for(var i in t)r.style[i]=t[i];if(n)for(var a in n)r.setAttribute(a,n[a]);return r}function Hn(){return window.devicePixelRatio===void 0?1:window.devicePixelRatio}var Un,Wn;function Gn(){return(Gn=t((()=>{Un=new Set([`italic`,`oblique`]),Wn=new Set([`bold`,`bolder`,`lighter`])})))()}function Kn(e){var t=e.type===WebGL2RenderingContext.FLOAT&&!e.normalized,n=e.type===WebGL2RenderingContext.UNSIGNED_BYTE&&e.size===4&&e.normalized;if(!t&&!n)throw Error(`Attribute "${e.name}" is invalid: only non-normalized FLOAT and normalized UNSIGNED_BYTE with size 4 are supported.`);return e.normalized?1:e.size}function qn(e){var t=0;return e.forEach(function(e){return t+=Kn(e)}),t}function Jn(e,t,n){var r=e===`VERTEX`?t.VERTEX_SHADER:t.FRAGMENT_SHADER,i=t.createShader(r);if(i===null)throw Error(`loadShader: error while creating the shader`);if(t.shaderSource(i,n),t.compileShader(i),!t.getShaderParameter(i,t.COMPILE_STATUS)){var a=t.getShaderInfoLog(i);throw t.deleteShader(i),Error(`loadShader: error while compiling the shader:
${a}
${n}`)}return i}function Yn(e,t){return Jn(`VERTEX`,e,t)}function Xn(e,t){return Jn(`FRAGMENT`,e,t)}function Zn(e,t){var n=e.createProgram();if(n===null)throw Error(`loadProgram: error while creating the program.`);for(var r=0,i=t.length;r<i;r++)e.attachShader(n,t[r]);if(e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS)){var a=e.getProgramInfoLog(n);throw e.deleteProgram(n),Error(`loadProgram: error while linking the program: ${a}`)}return n}function Qn(e){var t=e.gl,n=e.buffer,r=e.program,i=e.vertexShader,a=e.fragmentShader;t.deleteShader(i),t.deleteShader(a),t.deleteProgram(r),t.deleteBuffer(n)}function Q(e){return e%1==0?e.toFixed(1):e.toString()}function $n(e,t){var n,r=(n=e.variables)==null||(n=n[t.source||t.name.replace(/^a_/,``)])==null?void 0:n.default;return Q(typeof r==`number`?r:typeof t.defaultValue==`number`?t.defaultValue:0)}function er(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:function(e){return`v_${e.name.replace(/^a_/,``)}`},i=[t,n].concat(X(e.uniforms.filter(function(e){return e.type===`float`}).map(function(e){return Q(e.value??0)})),X((e.attributes??[]).map(r)));return`sdf_${e.name}(${i.join(`, `)})`}function tr(e){var t=e.name,n=e.uniforms.filter(function(e){return e.type===`float`&&e.value!==void 0&&e.value!==0}).map(function(e){return`${e.name.replace(`u_`,``)}=${e.value}`}).sort(),r=(e.attributes??[]).map(function(t){return`${t.name}@${t.source??``}=${$n(e,t)}`}),i=[].concat(X(n),X(r));return i.length>0&&(t+=`#`+i.join(`#`)),t}function nr(e){var t=tr(e);if(!Fi.has(t)){var n={},r=U(e.uniforms),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;a.type===`float`&&a.value!==void 0&&(n[a.name]=a.value)}}catch(e){r.e(e)}finally{r.f()}Fi.set(t,{shape:e,uniformValues:n,slug:t}),Ii.set(t,Li++)}return t}function rr(e){return Ii.get(e)??-1}function ir(e){var t=[],n=new Set,r=new Set,i=/mat2 rotate2D\(float angle\)\s*\{[^}]+\}/,a=U(e),o;try{for(a.s();!(o=a.n()).done;){var s=o.value;if(!r.has(s.name)){r.add(s.name);var c=s.glsl;i.test(c)&&(n.has(`rotate2D`)?c=c.replace(i,``):n.add(`rotate2D`)),t.push(c)}}}catch(e){a.e(e)}finally{a.f()}return t.join(`
`)}function ar(){return ir(Array.from(Fi.values()).map(function(e){return e.shape}))}function or(e){var t=Array.from(Fi.entries());return t.length===0?`
float querySDF(int shapeId, vec2 uv, float size) {
  return length(uv) - size;
}
`:`
float querySDF(int shapeId, vec2 uv, float size) {
  switch (shapeId) {
${t.map(function(t,n){var r=H(t,2),i=r[0],a=r[1].shape;return`    case ${n}: return ${er(a,`uv`,`size`,function(t){var n=t.name.replace(/^a_/,``);return e!=null&&e.has(n)?`g_${n}`:$n(a,t)})}; // ${i}`}).join(`
`)}
    default: return length(uv) - size;
  }
}
`}function sr(e){return ir(e)}function cr(e){return X(new Map(e.flatMap(function(e){return e.uniforms}).map(function(e){return[e.name,e]})).values())}function lr(e,t){if(e.length===0)return`
void queryNodeSDF(int shapeId, vec2 uv, float size) {
  context.sdf = length(uv) - size;
  context.inradiusFactor = 1.0;
}
`;var n=function(e){return er(e,`uv`,`size`)},r=function(e){return e.inradiusFactorGLSL??Q(e.inradiusFactor??1)};if(e.length===1){var i=e[0];return`
void queryNodeSDF(int shapeId, vec2 uv, float size) {
  context.sdf = ${n(i)};
  context.inradiusFactor = ${r(i)};
}
`}var a=e.map(function(e,t){return`    case ${t}: // ${e.name}
      context.sdf = ${n(e)};
      context.inradiusFactor = ${r(e)};
      break;`}).join(`
`),o=e[0],s=``,c=`shapeId`;return t&&t.length>1&&(s=`
int globalToLocalShapeId(int globalId) {
  switch (globalId) {
${t.map(function(t,n){return`    case ${t}: return ${n}; // ${e[n].name}`}).join(`
`)}
    default: return 0;
  }
}
`,c=`globalToLocalShapeId(shapeId)`),`${s}
void queryNodeSDF(int shapeId, vec2 uv, float size) {
  switch (${c}) {
${a}
    default:
      context.sdf = ${n(o)};
      context.inradiusFactor = ${r(o)};
  }
}
`}function ur(e,t){var n=function(e){return er(e,`uv`,`size`)};return e.length===1?{code:dr(n(e[0])),multiShape:!1}:{code:`
float queryShapeSDF(int shapeId, vec2 uv, float size) {
  switch (shapeId) {
${e.map(function(e,r){return`    case ${t?t[r]:r}: return ${n(e)};`}).join(`
`)}
    default: return ${n(e[0])};
  }
}
int g_shapeId;
${dr(`queryShapeSDF(g_shapeId, uv, size)`)}
`,multiShape:!0}}function dr(e){return`
float findEdgeDistance(vec2 direction, float size) {
  float lo = 0.0, hi = 2.0;
  for (int i = 0; i < 8; i++) {
    float mid = (lo + hi) * 0.5;
    vec2 uv = direction * mid;
    if (${e} < 0.0) lo = mid; else hi = mid;
  }
  return (lo + hi) * 0.5;
}
`}function fr(e,t){for(;!{}.hasOwnProperty.call(e,t)&&(e=wn(e))!==null;);return e}function pr(){return pr=typeof Reflect<`u`&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=fr(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},pr.apply(null,arguments)}function $(e,t,n,r){var i=pr(wn(1&r?e.prototype:e),t,n);return 2&r&&typeof i==`function`?function(e){return i.apply(n,e)}:i}function mr(e){var t={},n={},r=0,i=U(e),a;try{for(i.s();!(a=i.n()).done;){var o=a.value,s=U(o.attributes),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=l.name.replace(/^a_/,``);u in t||(t[u]=r,n[u]=l,r+=l.size)}}catch(e){s.e(e)}finally{s.f()}}}catch(e){i.e(e)}finally{i.f()}return{floatsPerItem:r,texelsPerItem:Math.max(1,Math.ceil(r/4)),offsets:t,specs:n}}function hr(e,t,n){for(var r=[],i=new Set,a=0;a<e.length;a++){var o=e[a],s=U(o.attributes),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=l.name.replace(/^a_/,``);if(!i.has(u)){i.add(u);var d=t.offsets[u];if(d!==void 0){var f=n?.get(a);r.push({sourceKey:l.source||u,packedOffset:d,size:l.size,isColor:l.size===4&&!!l.normalized,defaultNum:typeof l.defaultValue==`number`?l.defaultValue:+(l.defaultValue===!0),defaultColor:typeof l.defaultValue==`string`?l.defaultValue:``,sourceIndex:a,hasLifecycleHook:!!(f!=null&&f.getAttributeData)})}}}}catch(e){s.e(e)}finally{s.f()}}return r}function gr(e,t,n,r,i,a){n.fill(0);for(var o=0,s=e.length;o<s;o++){var c=e[o],l=c.packedOffset,u=void 0;if(c.hasLifecycleHook?(u=i.get(c.sourceIndex-a).getAttributeData(t,c.sourceKey),u===null&&(u=t[c.sourceKey])):u=t[c.sourceKey],c.isColor){var d=H(sn(typeof u==`string`?u:c.defaultColor||r),4),f=d[0],p=d[1],m=d[2],h=d[3];n[l]=f/255,n[l+1]=p/255,n[l+2]=m/255,n[l+3]=h/255}else if(c.size===1)n[l]=typeof u==`number`?u:typeof u==`boolean`?+!!u:c.defaultNum;else{var g=Array.isArray(u)?u:null;if(g)for(var _=0;_<c.size;_++)n[l+_]=g[_]??0}}}function _r(e,t){var n=e.offsets,r=e.specs,i=e.texelsPerItem,a=e.floatsPerItem,o=Object.keys(n);if(o.length===0||a===0)return{fetchCode:``,varyingAssignments:``};var s=t.varPrefix,c=t.baseTexelExpr,l=t.textureWidthUniform,u=t.textureSamplerUniform,d=t.outputPrefix,f=d===void 0?`v_`:d,p=[];p.push(`  int ${s}BaseTexel = ${c};`),p.push(``);for(var m=0;m<i;m++)p.push(`  ivec2 ${s}Coord${m} = ivec2((${s}BaseTexel + ${m}) % ${l}, (${s}BaseTexel + ${m}) / ${l});`),p.push(`  vec4 ${s}Texel${m} = texelFetch(${u}, ${s}Coord${m}, 0);`);p.push(``);for(var h=[],g=function(){var e=v[_],t=r[e],i=n[e],a=Math.floor(i/4),o=i%4,c=`${s}Texel${a}`,l=`${s}Texel${a+1}`,u=`${s}Fetched_${e}`;if(t.size===1)p.push(`  float ${u} = ${c}.${ra[o]};`);else if(t.size===4&&o===0)p.push(`  vec4 ${u} = ${c};`);else{var d=o+t.size;if(d<=4){var m=`vec${t.size}`,g=ra.slice(o,d).join(``);p.push(`  ${m} ${u} = ${c}.${g};`)}else{var y=t.size===4?`vec4`:`vec${t.size}`,b=ra.slice(o).map(function(e){return`${c}.${e}`}),x=ra.slice(0,d-4).map(function(e){return`${l}.${e}`}),S=[].concat(X(b),X(x)).join(`, `);p.push(`  ${y} ${u} = ${y}(${S});`)}}h.push(`  ${f}${e} = ${u};`)},_=0,v=o;_<v.length;_++)g();return{fetchCode:p.join(`
`),varyingAssignments:h.join(`
`)}}function vr(e,t,n){if(t&&n.type!==`sampler2D`)switch(n.type){case`float`:e.uniform1f(t,n.value);break;case`int`:case`bool`:e.uniform1i(t,n.value);break;case`vec2`:e.uniform2fv(t,n.value);break;case`vec3`:e.uniform3fv(t,n.value);break;case`vec4`:e.uniform4fv(t,n.value);break;case`mat3`:e.uniformMatrix3fv(t,!1,n.value);break;case`mat4`:e.uniformMatrix4fv(t,!1,n.value)}}function yr(e){var t=e.match(/^(#version[^\n]*\n)/);return t?t[1]+`#define PICKING_MODE
`+e.slice(t[1].length):`#define PICKING_MODE
`+e}function br(){return`#version 300 es
precision highp float;

uniform mat3 u_matrix;
uniform vec2 u_resolution;
uniform float u_labelPixelSnapping;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
uniform float u_pixelRatio;
uniform float u_labelMargin;
uniform float u_zoomLabelSizeRatio;

uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_nodeFrameTexture;
uniform int u_nodeFrameTextureWidth;

// Atlas size is fixed at 2048×2048 — matches AttachmentManager.ATLAS_SIZE.
uniform sampler2D u_atlasTexture;
const vec2 u_atlasSize = vec2(2048.0);

// Per-instance
in float a_nodeIndex;           // node-data texture index
in vec4 a_atlasRect;            // x, y, width, height in atlas pixels
in vec2 a_attachmentSize;       // attachment dimensions (CSS px)
in float a_positionMode;        // label position: 0=right 1=left 2=above 3=below 4=over
in float a_attachmentPlacement; // 0=below 1=above 2=left 3=right (relative to label)
in float a_labelWidth;          // label width (CSS px)
in float a_labelHeight;         // label height: font line box (CSS px)
in float a_textHeight;          // actual glyph height (CSS px)
in float a_labelAngle;          // label rotation angle (radians)

// Per-vertex (constant)
in vec2 a_quadCorner;           // [-1,-1], [1,-1], [-1,1], [1,1]

out vec2 v_texCoord;

${qi}
${Ji}
${Xi}
${Ki}
${Bi}

void main() {
  int nodeIdx = int(a_nodeIndex);

  // Node data: (x, y, size, shapeId).
  vec4 nodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  vec2 nodePos = nodeData.xy;
  float nodeSize = nodeData.z;

  // Normalized edge distance from the shared frame texture (the frame-pass ran
  // the SDF search once; we just read the result).
  float edgeDist = readFrameTexel(u_nodeFrameTexture, u_nodeFrameTextureWidth, nodeIdx).r;

  // Per-node label rotation alignment: 0 = viewport, 1 = label turns with camera.
  float labelRotation = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx).g;

  vec3 nodeClip = u_matrix * vec3(nodePos, 1.0);

  // Node radius in physical pixels (matches label/background).
  float matrixScaleX = length(vec2(u_matrix[0][0], u_matrix[1][0]));
  float nodeRadiusGraphSpace = nodeSize * u_correctionRatio / u_sizeRatio * 2.0;
  float nodeRadiusPixels = nodeRadiusGraphSpace * matrixScaleX * u_resolution.x / 2.0;

  // CSS-px inputs -> physical px, scaled by the zoom-dependent label ratio, so
  // the attachment stays glued to the label box exactly as the label scales.
  float zoomScale = u_zoomLabelSizeRatio;
  vec2 labelHalf = vec2(a_labelWidth, a_labelHeight) * 0.5 * zoomScale * u_pixelRatio;
  vec2 attachHalf = a_attachmentSize * 0.5 * zoomScale * u_pixelRatio;
  float gap = ${2 .toFixed(1)} * zoomScale * u_pixelRatio;
  float labelMargin = u_labelMargin * zoomScale * u_pixelRatio;

  // Graph-aligned labels add the camera angle so the attachment orbits with the box.
  mat2 labelRotMat = rotate2D(a_labelAngle - labelRotation * u_cameraAngle);

  // Label box center relative to the node center (pre-rotation). The shape-aware
  // edge distance comes from the frame texture, so placement matches the label.
  vec2 boxCenter = vec2(0.0);
  if (a_positionMode < 4.0) {
    float labelStart = nodeRadiusPixels * edgeDist + labelMargin;
    float textHalf = a_textHeight * 0.5 * zoomScale * u_pixelRatio;
    boxCenter = labelBoxCenter(a_positionMode, labelStart, labelHalf, textHalf);
  }

  // Horizontal anchor of below/above attachments tracks the label position, so
  // the attachment hangs from the label edge nearest the node (or is centered
  // when the label itself is node-centered): right->left, left->right, else center.
  float anchorX = 0.0;
  if (a_positionMode < 0.5) anchorX = -labelHalf.x + attachHalf.x;       // right label
  else if (a_positionMode < 1.5) anchorX = labelHalf.x - attachHalf.x;   // left label

  // Attachment center relative to the box (pre-rotation, Y-down). This offset
  // depends only on the box, the gap and the attachment size — never the shape.
  vec2 attachCenter;
  if (a_attachmentPlacement < 0.5) {
    // below
    attachCenter = boxCenter + vec2(anchorX, labelHalf.y + gap + attachHalf.y);
  } else if (a_attachmentPlacement < 1.5) {
    // above
    attachCenter = boxCenter + vec2(anchorX, -(labelHalf.y + gap + attachHalf.y));
  } else if (a_attachmentPlacement < 2.5) {
    // left, top-aligned
    attachCenter = boxCenter + vec2(-(labelHalf.x + gap + attachHalf.x), -labelHalf.y + attachHalf.y);
  } else {
    // right, top-aligned
    attachCenter = boxCenter + vec2(labelHalf.x + gap + attachHalf.x, -labelHalf.y + attachHalf.y);
  }

  // Rotate the whole assembly by the label angle, around the node center.
  vec2 rotatedCenter = labelRotMat * attachCenter;
  vec2 cornerOffset = labelRotMat * (a_quadCorner * attachHalf);

  // Node center in screen px (Y-down).
  vec2 nodeScreen = vec2(
    (nodeClip.x + 1.0) * u_resolution.x,
    (1.0 - nodeClip.y) * u_resolution.y
  ) * 0.5;

  // Snap node center to the pixel grid so label/backdrop/attachment move as one.
  vec2 snapDelta = (round(nodeScreen) - nodeScreen) * u_labelPixelSnapping;

  // Snap the quad's top-left to integer pixels so atlas texels map 1:1.
  vec2 centerScreen = nodeScreen + rotatedCenter + snapDelta;
  vec2 topLeft = centerScreen - attachHalf;
  topLeft = mix(topLeft, round(topLeft), u_labelPixelSnapping);
  centerScreen = topLeft + attachHalf;

  vec2 vertexScreen = centerScreen + cornerOffset;
  gl_Position = vec4(
    vertexScreen.x * 2.0 / u_resolution.x - 1.0,
    1.0 - vertexScreen.y * 2.0 / u_resolution.y,
    0.0, 1.0
  );

  vec2 texOrigin = a_atlasRect.xy / u_atlasSize;
  vec2 texSize = a_atlasRect.zw / u_atlasSize;
  vec2 uv = (a_quadCorner + 1.0) / 2.0;
  v_texCoord = texOrigin + uv * texSize;
}
`}function xr(e,t,n,r){var i=r.label,a=i===void 0?{}:i,o=a.margin??5,s=a.zoomToLabelSizeRatioFunction??function(){return 1},c=br(),l=sa,u=function(e){function t(){var e;K(this,t);var n=[...arguments];return e=J(this,t,[].concat(n)),W(e,`totalCount`,0),W(e,`bufferCapacity`,0),e}return Y(t,e),q(t,[{key:`getDefinition`,value:function(){var e=WebGL2RenderingContext,t=e.FLOAT;return{VERTICES:4,VERTEX_SHADER_SOURCE:c,FRAGMENT_SHADER_SOURCE:l,METHOD:e.TRIANGLE_STRIP,UNIFORMS:[`u_matrix`,`u_resolution`,`u_labelPixelSnapping`,`u_sizeRatio`,`u_correctionRatio`,`u_cameraAngle`,`u_pixelRatio`,`u_labelMargin`,`u_zoomLabelSizeRatio`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_nodeFrameTexture`,`u_nodeFrameTextureWidth`,`u_atlasTexture`],ATTRIBUTES:[{name:`a_nodeIndex`,size:1,type:t},{name:`a_atlasRect`,size:4,type:t},{name:`a_attachmentSize`,size:2,type:t},{name:`a_positionMode`,size:1,type:t},{name:`a_attachmentPlacement`,size:1,type:t},{name:`a_labelWidth`,size:1,type:t},{name:`a_labelHeight`,size:1,type:t},{name:`a_textHeight`,size:1,type:t},{name:`a_labelAngle`,size:1,type:t}],CONSTANT_ATTRIBUTES:[{name:`a_quadCorner`,size:2,type:t}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:`processAttachment`,value:function(e,t){var n=this.floats,r=e*this.STRIDE;n[r++]=t.nodeIndex,n[r++]=t.atlasX,n[r++]=t.atlasY,n[r++]=t.atlasW,n[r++]=t.atlasH,n[r++]=t.attachWidth,n[r++]=t.attachHeight,n[r++]=t.positionMode,n[r++]=t.attachmentPlacement,n[r++]=t.labelWidth,n[r++]=t.labelHeight,n[r++]=t.textHeight,n[r++]=t.labelAngle}},{key:`setUniforms`,value:function(e,n){var r=n.gl,i=n.uniformLocations;r.uniformMatrix3fv(i.u_matrix,!1,e.matrix),r.uniform2f(i.u_resolution,e.width*e.pixelRatio,e.height*e.pixelRatio),r.uniform1f(i.u_labelPixelSnapping,e.labelPixelSnapping),r.uniform1f(i.u_sizeRatio,e.sizeRatio),r.uniform1f(i.u_correctionRatio,e.correctionRatio),r.uniform1f(i.u_cameraAngle,e.cameraAngle),r.uniform1f(i.u_pixelRatio,e.pixelRatio),r.uniform1f(i.u_labelMargin,t.labelMargin),r.uniform1f(i.u_zoomLabelSizeRatio,1/s(e.zoomRatio)),r.uniform1i(i.u_nodeDataTexture,e.nodeDataTextureUnit),r.uniform1i(i.u_nodeDataTextureWidth,e.nodeDataTextureWidth),r.uniform1i(i.u_nodeFrameTexture,e.nodeFrameTextureUnit),r.uniform1i(i.u_nodeFrameTextureWidth,e.nodeFrameTextureWidth),r.uniform1i(i.u_atlasTexture,7)}},{key:`reallocateAttachments`,value:function(e){this.totalCount=e,e>this.bufferCapacity&&(this.bufferCapacity=Math.max(e,Math.ceil(this.bufferCapacity*1.5)||10),$(t,`reallocate`,this,3)([this.bufferCapacity]))}},{key:`hasNothingToRender`,value:function(){return this.totalCount===0}},{key:`drawWebGL`,value:function(e,t){var n=t.gl;this.totalCount!==0&&n.drawArraysInstanced(e,0,this.VERTICES,this.totalCount)}}])}(aa);return W(u,`labelMargin`,o),new u(e,t,n)}function Sr(e,t){return[].concat(X(t),X(e.map(function(e){return{attributes:e.attributes??[]}})))}function Cr(e,t){var n=mr(Sr(e,t)),r=new Set(e.flatMap(function(e){return e.attributes??[]}).map(function(e){return e.name.replace(/^a_/,``)})),i={},a={},o=U(r),s;try{for(o.s();!(s=o.n()).done;){var c=s.value;i[c]=n.offsets[c],a[c]=n.specs[c]}}catch(e){o.e(e)}finally{o.f()}return G(G({},n),{},{offsets:i,specs:a})}function wr(e,t){var n=new Set([`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_cameraAngle`,`u_pickingPadding`,`u_nodeDataTexture`,`u_layerAttributeTexture`]),r=new Set,i=e.flatMap(function(e){return e.uniforms}).filter(function(e){return n.has(e.name)||r.has(e.name)?!1:(r.add(e.name),!0)}).map(function(e){return`uniform ${e.type} ${e.name};`}).join(`
`),a=t.flatMap(function(e){return e.uniforms}).filter(function(e){return n.has(e.name)||r.has(e.name)?!1:(r.add(e.name),!0)}).map(function(e){return`uniform ${e.type} ${e.name};`}).join(`
`),o=Sr(e,t),s=new Set,c=o.flatMap(function(e){return e.attributes}).filter(function(e){var t=e.name.replace(/^a_/,``);return!s.has(t)&&(s.add(t),!0)}).map(function(e){var t=e.name.replace(/^a_/,``);return`out ${e.size===1?`float`:`vec${e.size}`} v_${t};`}).join(`
`),l=_r(mr(o),{varPrefix:`layer`,baseTexelExpr:`nodeIdx * u_layerAttributeTexelsPerNode`,textureWidthUniform:`u_layerAttributeTextureWidth`,textureSamplerUniform:`u_layerAttributeTexture`}),u=l.fetchCode,d=l.varyingAssignments;return`#version 300 es

// Standard node attributes (per instance) - minimal buffer usage
in float a_nodeIndex;  // Index into node data texture AND layer attribute texture
in vec4 a_id;          // Node ID for picking
in float a_opacity;    // Node opacity, applied once to the final fragment

// Constant attributes (per vertex, same for all instances)
in vec2 a_quadCorner;  // (-1,-1), (1,-1), (1,1), (-1,1) for quad corners

// Standard uniforms
uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
#ifdef PICKING_MODE
uniform float u_pickingPadding;
#endif
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;

// Layer attribute texture uniforms
uniform sampler2D u_layerAttributeTexture;
uniform int u_layerAttributeTextureWidth;
uniform int u_layerAttributeTexelsPerNode;

${i}
${a}

// Standard varyings
out vec2 v_uv;                    // Normalized coordinates [-1, 1]
out vec4 v_id;
out float v_opacity;
out float v_antialiasingWidth;    // Width for antialiasing in UV space
out float v_pixelSize;            // Node size in pixels (for pixel-mode borders)
out float v_pixelToUV;            // Conversion factor: multiply by this to convert screen pixels to UV units
out float v_shapeId;              // Shape ID for multi-shape programs

// Layer varyings
${c}

// Node-data fetch helpers (geometry texel + rotation-flags texel)
${qi}
${Ji}

void main() {
  // Fetch node geometry: vec4(x, y, size, shapeId).
  int nodeIdx = int(a_nodeIndex);

  // Hidden nodes are flagged with a negative row by NodeProgram.process(). Push
  // the whole quad outside the clip volume: every vertex lands at the same
  // out-of-range position, so the primitive is fully clipped and rasterizes
  // nothing — neither to the frame buffer nor to the picking buffer.
  if (nodeIdx < 0) {
    gl_Position = vec4(2.0, 0.0, 0.0, 1.0);
    v_id = vec4(0.0);
    return;
  }

  vec4 nodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  vec2 a_position = nodeData.xy;
  float a_size = nodeData.z;
  v_shapeId = nodeData.w;  // Pass shape ID to fragment shader

  // Per-node rotation alignment: 0 = viewport (screen-upright), 1 = graph.
  float nodeRotation = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx).r;

${u}

  // Calculate the actual size in pixels
  float size = a_size * u_correctionRatio / u_sizeRatio * 2.0;

  // In PICKING_MODE, inflate the quad by nodePickingPadding pixels on each side
  #ifdef PICKING_MODE
    float paddedSize = size + u_pickingPadding * u_correctionRatio;
    vec2 offset = a_quadCorner * paddedSize;
  #else
    vec2 offset = a_quadCorner * size;
  #endif
  // Counter-rotate the quad offset so viewport-aligned nodes stay upright as the
  // camera turns. Graph-aligned nodes (nodeRotation=1) skip it and turn with the
  // camera. The angle scales by (1 - nodeRotation) so both fall out of one path.
  {
    float ca = u_cameraAngle * (1.0 - nodeRotation);
    float c = cos(ca);
    float s = sin(ca);
    offset = mat2(c, s, -s, c) * offset;
  }
  vec2 position = a_position + offset;

  gl_Position = vec4(
    (u_matrix * vec3(position, 1)).xy,
    0,
    1
  );

  // In PICKING_MODE, UV is scaled beyond [-1, 1] to match the inflated quad
  #ifdef PICKING_MODE
    v_uv = a_quadCorner * (paddedSize / size);
  #else
    v_uv = a_quadCorner;
  #endif

  // Pass ID to fragment shader
  v_id = a_id;
  v_opacity = a_opacity;

  // Pass pixel size for layers that need pixel-mode calculations
  // Multiply by 2 because 'size' is half-width (offset from center), not full diameter
  v_pixelSize = size * 2.0;

  // Conversion factor from screen pixels to UV units
  // Same derivation as v_antialiasingWidth which represents ~1 pixel in UV space
  // P pixels in UV space = P * u_correctionRatio / size
  v_pixelToUV = u_correctionRatio / size;

  // We use an antialiasing width of 1px (so v_pixelToUV)
  v_antialiasingWidth = v_pixelToUV;

  // Pass layer attributes to fragment shader (fetched from texture)
${d}
}
`}function Tr(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,i=t.map(function(e,t){var n=`layer_${e.name}`,r=[].concat(X(e.attributes.map(function(e){return`v_${e.name.replace(/^a_/,``)}`})),X(e.uniforms.map(function(e){return e.name}))).join(`, `);return`  // Layer ${t+1}: ${e.name}
  color = blendOver(color, ${n}(${r}));`}).join(`

`),a=new Set([`u_correctionRatio`]),o=new Set,s=e.flatMap(function(e){return e.uniforms}).filter(function(e){return a.has(e.name)||o.has(e.name)?!1:(o.add(e.name),!0)}).map(function(e){return`uniform ${e.type} ${e.name};`}).join(`
`),c=t.flatMap(function(e){return e.uniforms}).filter(function(e){return a.has(e.name)||o.has(e.name)?!1:(o.add(e.name),!0)}).map(function(e){return`uniform ${e.type} ${e.name};`}).join(`
`),l=new Set;return`#version 300 es
precision highp float;

// Standard varyings
in vec2 v_uv;
in vec4 v_id;
in float v_opacity;
in float v_antialiasingWidth;
in float v_pixelSize;
in float v_pixelToUV;
in float v_shapeId;  // Shape ID for multi-shape programs

// Standard uniforms (needed for some layer calculations like pixel-mode borders)
uniform float u_correctionRatio;
#ifdef PICKING_MODE
uniform float u_pickingPadding;
#endif

// Shape uniforms
${s}

// Layer uniforms
${c}

// Layer varyings
${Sr(e,t).flatMap(function(e){return e.attributes}).filter(function(e){var t=e.name.replace(/^a_/,``);return!l.has(t)&&(l.add(t),!0)}).map(function(e){var t=e.name.replace(/^a_/,``);return`in ${e.size===1?`float`:`vec${e.size}`} v_${t};`}).join(`
`)}

// Fragment output (single target - picking handled via separate pass)
out vec4 fragColor;

// LayerContext struct - provides rendering context to all layers
struct LayerContext {
  float sdf;             // Signed distance from shape boundary (negative inside)
  vec2 uv;               // UV coordinates [-1, 1], center at (0,0)
  float shapeSize;       // Effective shape size (~diameter) in UV space (1.0 - aaWidth)
  float shapeHalfSize;   // Effective shape half size (~radius) in UV space
  float pixelSize;       // Node full size (~diameter) in screen pixels
  float aaWidth;         // Anti-aliasing width for smooth transitions
  float correctionRatio; // Scaling factor for consistent rendering across zoom levels
  float pixelToUV;       // Conversion factor: multiply screen pixels by this to get UV units
  float inradiusFactor;  // Ratio of inradius to circumradius (shape depth factor)
};

LayerContext context;  // Global instance, populated before layer calls

// Alpha "over" compositing for layer blending
vec4 blendOver(vec4 bg, vec4 fg) {
  float a = fg.a;
  return vec4(mix(bg.rgb, fg.rgb, a), bg.a + a * (1.0 - bg.a));
}

// SDF shape functions
${sr(e)}

// Shape selector function (sets context.sdf and context.inradiusFactor)
${lr(e,n)}

// Layer functions
${t.map(function(e){return e.glsl}).join(`

`)}

void main() {
  // 1. Setup LayerContext (available to all layer functions)
  context.shapeSize = 1.0 - v_antialiasingWidth;
  context.shapeHalfSize = context.shapeSize * 0.5;
  context.pixelSize = v_pixelSize;
  context.uv = v_uv;
  context.aaWidth = v_antialiasingWidth;
  context.correctionRatio = u_correctionRatio;
  context.pixelToUV = v_pixelToUV;

  // Query shape SDF based on shapeId (sets context.sdf and context.inradiusFactor)
  queryNodeSDF(int(v_shapeId), v_uv, context.shapeSize);

  // 2. Early discard for pixels fully outside the shape (with AA margin)
  // In PICKING_MODE, allow extra fragments up to the picking padding distance
  #ifdef PICKING_MODE
    if (context.sdf > u_pickingPadding * v_pixelToUV + context.aaWidth) discard;
  #else
    if (context.sdf > context.aaWidth) discard;
  #endif

  // 3. Apply layers sequentially with "over" compositing
  vec4 color = vec4(0.0);

${i}

  #ifdef PICKING_MODE
    // Picking pass: output node ID for pixels within the picking area.
    if (context.sdf > u_pickingPadding * v_pixelToUV) discard;
    fragColor = v_id;
  #else
${r?`    // Visual pass: apply antialiasing at shape boundary, node opacity once
    // smoothstep provides smooth transition from opaque to transparent
    float alpha = smoothstep(context.aaWidth, -context.aaWidth, context.sdf) * v_opacity;`:`    // Visual pass: hard-edged (no anti-aliasing gradient) shape boundary, node opacity applied once
    float alpha = (context.sdf < 0.0 ? 1.0 : 0.0) * v_opacity;`}
    // Mix with transparent to fade both color AND alpha together (avoids bright halo)
    fragColor = mix(vec4(0.0), color, alpha);
  #endif
}
`}function Er(e,t){var n=new Set;return n.add(`u_matrix`),n.add(`u_sizeRatio`),n.add(`u_correctionRatio`),n.add(`u_cameraAngle`),n.add(`u_pickingPadding`),n.add(`u_nodeDataTexture`),n.add(`u_nodeDataTextureWidth`),n.add(`u_layerAttributeTexture`),n.add(`u_layerAttributeTextureWidth`),n.add(`u_layerAttributeTexelsPerNode`),e.forEach(function(e){e.uniforms.forEach(function(e){return n.add(e.name)})}),t.forEach(function(e){e.uniforms.forEach(function(e){return n.add(e.name)})}),Array.from(n)}function Dr(e){var t=WebGL2RenderingContext,n=t.UNSIGNED_BYTE,r=t.FLOAT;return[{name:`a_nodeIndex`,size:1,type:r},{name:`a_id`,size:4,type:n,normalized:!0},{name:`a_opacity`,size:1,type:r}]}function Or(e){var t=e.shapes,n=e.layers,r=e.shapeGlobalIds,i=e.antialias,a=i===void 0||i;return{vertexShader:wr(t,n),fragmentShader:Tr(t,n,r,a),uniforms:Er(t,n),attributes:Dr()}}function kr(e,t,n){var r=Cr(e,t).specs;return Object.keys(r).map(function(e){return`flat ${n} ${r[e].size===1?`float`:`vec${r[e].size}`} v_${e};`}).join(`
`)}function Ar(e){var t=e.shapes,n=e.layers,r=e.shapeGlobalIds,i=_r(Cr(t,n),{varPrefix:`nodeAttr`,baseTexelExpr:`nodeIdx * u_layerAttributeTexelsPerNode`,textureWidthUniform:`u_layerAttributeTextureWidth`,textureSamplerUniform:`u_layerAttributeTexture`}),a=t.length===1?`float inradiusFactor = ${Q(t[0].inradiusFactor??1)};`:`float inradiusFactor = ${Q(t[0].inradiusFactor??1)};
  switch (int(shapeId)) {
${t.map(function(e,t){return`    case ${r?r[t]:t}: inradiusFactor = ${Q(e.inradiusFactor??1)}; break;`}).join(`
`)}
    default: break;
  }`;return`#version 300 es

in float a_nodeIndex;
in float a_labelWidth;
in float a_labelHeight;
in float a_textHeight;
in float a_positionMode;
in float a_labelAngle;
in vec4 a_backdropColor;
in vec4 a_backdropShadowColor;
in float a_backdropShadowBlur;
in float a_backdropPadding;
in vec4 a_backdropBorderColor;
in vec4 a_backdropExtra; // [borderWidth, cornerRadius, labelPadding, area]
in vec2 a_labelBoxOffset;
in vec2 a_quadCorner;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_labelMargin;
uniform float u_zoomLabelSizeRatio;
uniform float u_labelPixelSnapping;
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_nodeFrameTexture;
uniform int u_nodeFrameTextureWidth;
uniform sampler2D u_layerAttributeTexture;
uniform int u_layerAttributeTextureWidth;
uniform int u_layerAttributeTexelsPerNode;

out vec2 v_uv;
out vec2 v_nodeCenter;
out float v_nodeRadius;
out vec2 v_labelCenter;
out vec2 v_labelHalfSize;
out float v_aaWidth;
out float v_shapeId;
out float v_nodeRotation;
out float v_labelAngle;
out vec4 v_backdropColor;
out vec4 v_backdropShadowColor;
out float v_backdropShadowBlur;
out float v_backdropPadding;
out vec4 v_backdropBorderColor;
out float v_backdropBorderWidth;
out float v_backdropCornerRadius;
out float v_backdropArea;
${kr(t,n,`out`)}

${qi}
${Ji}
${Xi}

void main() {
  int nodeIdx = int(a_nodeIndex);
${i.fetchCode}
${i.varyingAssignments}

  // Node data: (x, y, size, shapeId). shapeId (global) is forwarded to the
  // fragment shader, which keeps the shape SDF for the outline.
  vec4 nodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  vec2 nodePosition = nodeData.xy;
  float nodeSize = nodeData.z;
  float shapeId = nodeData.w;

  // Per-node rotation alignment (0 = viewport, 1 = graph). nodeRotation drives
  // the fragment's shape outline; labelRotation turns the label box with camera.
  vec4 nodeFlags = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  float nodeRotation = nodeFlags.r;
  float labelRotation = nodeFlags.g;
  v_nodeRotation = nodeRotation;

  ${zi}
  // CSS pixel attributes are multiplied by u_pixelRatio to match nodeRadiusPixels,
  // which is already in physical pixels (nodeRadiusNDC * u_resolution.x / 2.0).
  float padding = a_backdropPadding * u_pixelRatio;
  float shadowBlur = a_backdropShadowBlur * u_pixelRatio;
  // Unpack a_backdropExtra: [borderWidth, cornerRadius, labelPadding, area]
  float borderWidth = a_backdropExtra.x * u_pixelRatio;
  float cornerRadius = a_backdropExtra.y * u_pixelRatio;
  float labelPad = a_backdropExtra.z * u_pixelRatio;
  float backdropArea = a_backdropExtra.w;
  // Use 2x shadowBlur so the Gaussian fully decays before the quad edge
  float totalExpansion = shadowBlur * 2.0 + borderWidth;
  float enlargedRadius = nodeRadiusPixels + padding;

  // Circumscribed radius for the quad bounds. Non-circular shapes reach past
  // their inradius out to their circumradius (= enlargedRadius / inradiusFactor),
  // in any direction once rotated. The axis-aligned quad must contain that, or
  // the fill/shadow gets clipped (square corners, triangle tip, etc.).
  ${a}
  float boundRadius = enlargedRadius / inradiusFactor;

  // Apply zoom-dependent label size scaling
  float zoomScale = u_zoomLabelSizeRatio;
  float labelW = a_labelWidth * zoomScale * u_pixelRatio;
  float labelH = a_labelHeight * zoomScale * u_pixelRatio;
  float labelMargin = u_labelMargin * zoomScale * u_pixelRatio;

  // Only apply labelPad when a label is actually present
  float effectiveLabelPad = labelW > 0.0 ? labelPad : 0.0;
  vec2 labelHalfSize = vec2(labelW * 0.5 + effectiveLabelPad, labelH * 0.5 + effectiveLabelPad);
  vec2 labelOffset = vec2(0.0);

  // Effective label angle: intrinsic angle plus the camera angle when the label
  // is graph-aligned, so the box orbits the node in lockstep with the frame-pass.
  float labelAngle = a_labelAngle - labelRotation * u_cameraAngle;
  float la_c = cos(labelAngle);
  float la_s = sin(labelAngle);
  mat2 labelRotMat = mat2(la_c, -la_s, la_s, la_c);

  vec3 nodeClip = u_matrix * vec3(nodePosition, 1.0);
  vec2 snapDelta = vec2(0.0);

  if (labelW > 0.0) {
    // labelW > 0.0 means this node's label is displayed, so the frame-pass wrote
    // its edge distance this frame.
    float edgeDistPixels = nodeRadiusPixels * readFrameTexel(u_nodeFrameTexture, u_nodeFrameTextureWidth, nodeIdx).r;
    // labelMargin matches the label shader's margin (gap from node edge to text)
    float labelStart = edgeDistPixels + labelMargin;
    // Above/below center on the actual glyph height, not the font line box, so
    // the box stays aligned with the rendered text (matches labelBoxCenter()).
    float textHalf = a_textHeight * zoomScale * u_pixelRatio * 0.5;

    // Snap node center to pixel grid so label/backdrop/attachment move as a unit
    vec2 nodeScreen = vec2(
      (nodeClip.x + 1.0) * u_resolution.x,
      (1.0 - nodeClip.y) * u_resolution.y
    ) * 0.5;
    snapDelta = (round(nodeScreen) - nodeScreen) * u_labelPixelSnapping;

    if (a_positionMode < 0.5) {
      // Right: box spans from node center to text end + padding
      float boxRightEdge = labelStart + labelW + labelPad;
      labelOffset = vec2(boxRightEdge * 0.5, 0.0);
      labelHalfSize.x = boxRightEdge * 0.5;
    } else if (a_positionMode < 1.5) {
      // Left: mirror of right
      float boxLeftEdge = labelStart + labelW + labelPad;
      labelOffset = vec2(-boxLeftEdge * 0.5, 0.0);
      labelHalfSize.x = boxLeftEdge * 0.5;
    } else if (a_positionMode < 2.5) {
      // Above: text bottom at labelStart, centered horizontally
      labelOffset = vec2(0.0, -(labelStart + textHalf));
    } else if (a_positionMode < 3.5) {
      // Below: text top at labelStart, centered horizontally
      labelOffset = vec2(0.0, labelStart + textHalf);
    }
    // over (>=4): labelOffset stays (0,0) — text centered on the node.

    // The attachment-cover shift is in label space (like the attachment itself),
    // so rotate it together with the position offset — otherwise the box drifts
    // off the attachment as the label angle grows.
    labelOffset = labelRotMat * (labelOffset + a_labelBoxOffset * zoomScale * u_pixelRatio);
  }

  // For node-only mode, zero out label dimensions
  if (backdropArea > 0.5 && backdropArea < 1.5) {
    labelHalfSize = vec2(0.0);
    labelOffset = vec2(0.0);
  }

  vec2 minBound, maxBound;

  bool hasLabelBounds = labelW > 0.0 && (backdropArea > 1.5 || backdropArea < 0.5);

  if (hasLabelBounds) {
    // Union with label bounds (area=both) or label-only bounds (area=label)
    vec2 labelMin, labelMax;

    if (a_labelAngle != 0.0) {
      vec2 corner1 = labelOffset + labelRotMat * vec2(-labelHalfSize.x, -labelHalfSize.y);
      vec2 corner2 = labelOffset + labelRotMat * vec2(labelHalfSize.x, -labelHalfSize.y);
      vec2 corner3 = labelOffset + labelRotMat * vec2(labelHalfSize.x, labelHalfSize.y);
      vec2 corner4 = labelOffset + labelRotMat * vec2(-labelHalfSize.x, labelHalfSize.y);
      labelMin = min(min(corner1, corner2), min(corner3, corner4));
      labelMax = max(max(corner1, corner2), max(corner3, corner4));
    } else {
      labelMin = labelOffset - labelHalfSize;
      labelMax = labelOffset + labelHalfSize;
    }

    if (backdropArea > 1.5) {
      // Label-only: bounds from label rect only
      minBound = labelMin - totalExpansion;
      maxBound = labelMax + totalExpansion;
    } else {
      // Both: union of node + label
      minBound = min(-vec2(boundRadius), labelMin) - totalExpansion;
      maxBound = max(vec2(boundRadius), labelMax) + totalExpansion;
    }
  } else {
    // Node-only or no visible label
    float totalRadius = boundRadius + totalExpansion;
    minBound = -vec2(totalRadius);
    maxBound = vec2(totalRadius);
  }

  vec2 quadSize = maxBound - minBound;
  vec2 quadCenter = (minBound + maxBound) * 0.5;

  vec2 localPos = quadCenter + a_quadCorner * quadSize * 0.5 + snapDelta;
  vec2 ndcOffset = localPos * 2.0 / u_resolution;
  ndcOffset.y = -ndcOffset.y;

  gl_Position = vec4(nodeClip.xy + ndcOffset, 0.0, 1.0);

  v_uv = localPos;
  v_nodeCenter = vec2(0.0);
  v_nodeRadius = nodeRadiusPixels;
  v_labelCenter = labelOffset;
  v_labelHalfSize = labelHalfSize;
  v_aaWidth = 1.0;
  v_shapeId = shapeId;
  v_labelAngle = labelAngle;
  v_backdropColor = a_backdropColor;
  v_backdropShadowColor = a_backdropShadowColor;
  v_backdropShadowBlur = a_backdropShadowBlur;
  v_backdropPadding = a_backdropPadding;
  v_backdropBorderColor = a_backdropBorderColor;
  v_backdropBorderWidth = borderWidth;
  v_backdropCornerRadius = cornerRadius;
  v_backdropArea = backdropArea;
}
`}function jr(e){var t=e.shapes,n=e.layers,r=e.shapeGlobalIds,i=sr(t),a=cr(t).map(function(e){return`uniform ${e.type} ${e.name};`}).join(`
`),o=function(e){return er(e,`nodeUV`,`1.0`)},s=t.length===1?`float nodeSdfNormalized = ${o(t[0])};`:`float nodeSdfNormalized;
  int shapeId = int(v_shapeId);
  switch (shapeId) {
${t.map(function(e,t){return`    case ${r?r[t]:t}: nodeSdfNormalized = ${o(e)}; break;`}).join(`
`)}
    default: nodeSdfNormalized = ${o(t[0])};
  }`;return`#version 300 es
precision highp float;

in vec2 v_uv;
in vec2 v_nodeCenter;
in float v_nodeRadius;
in vec2 v_labelCenter;
in vec2 v_labelHalfSize;
in float v_aaWidth;
in float v_shapeId;
in float v_nodeRotation;
in float v_labelAngle;
in vec4 v_backdropColor;
in vec4 v_backdropShadowColor;
in float v_backdropShadowBlur;
in float v_backdropPadding;
in vec4 v_backdropBorderColor;
in float v_backdropBorderWidth;
in float v_backdropCornerRadius;
in float v_backdropArea;
${kr(t,n,`in`)}

uniform float u_cameraAngle;
${a}

layout(location = 0) out vec4 fragColor;
layout(location = 1) out vec4 fragPicking;

${i}
${Hi}
${Ui}
${Wi}
${Gi}

void main() {
  vec4 backdropColor = v_backdropColor;
  vec4 shadowColor = v_backdropShadowColor;
  float shadowBlur = v_backdropShadowBlur;
  float padding = v_backdropPadding;
  vec4 borderColor = v_backdropBorderColor;
  float borderWidth = v_backdropBorderWidth;
  float cornerRadius = v_backdropCornerRadius;

  float enlargedRadius = v_nodeRadius + padding;
  vec2 screenUV = v_uv - v_nodeCenter;
  float effectiveRadius = max(enlargedRadius - cornerRadius, 0.01);
  float ca = u_cameraAngle * v_nodeRotation;
  float ca_c = cos(ca);
  float ca_s = sin(ca);
  vec2 rotatedScreenUV = mat2(ca_c, -ca_s, ca_s, ca_c) * screenUV;
  vec2 nodeUV = vec2(rotatedScreenUV.x, -rotatedScreenUV.y) / effectiveRadius;

  // Query the correct shape SDF based on shapeId
  ${s}
  float nodeSdfPixels = nodeSdfNormalized * effectiveRadius - cornerRadius;

  // Label SDF with optional corner radius and rotation
  float labelSdfPixels;
  if (v_labelHalfSize.x > 0.0) {
    vec2 labelP = v_uv - v_labelCenter;
    labelSdfPixels = sdfRoundedRotatedBox(labelP, v_labelHalfSize, v_labelAngle, cornerRadius);
  } else {
    labelSdfPixels = 10000.0;
  }

  // Select area: 0=both, 1=node, 2=label
  float combinedSdf;
  if (v_backdropArea > 1.5) {
    combinedSdf = labelSdfPixels;
  } else if (v_backdropArea > 0.5) {
    combinedSdf = nodeSdfPixels;
  } else {
    combinedSdf = min(nodeSdfPixels, labelSdfPixels);
  }

  // Fill + border composite
  float outerEdge = smoothstep(v_aaWidth, -v_aaWidth, combinedSdf);
  vec4 background;
  if (borderWidth > 0.5) {
    float innerEdge = smoothstep(v_aaWidth, -v_aaWidth, combinedSdf + borderWidth);
    float fillAlpha = innerEdge * backdropColor.a;
    vec4 fill = vec4(backdropColor.rgb * fillAlpha, fillAlpha);
    float borderAlpha = (outerEdge - innerEdge) * borderColor.a;
    vec4 border = vec4(borderColor.rgb * borderAlpha, borderAlpha);
    background = fill + border * (1.0 - fill.a);
  } else {
    float fillAlpha = outerEdge * backdropColor.a;
    background = vec4(backdropColor.rgb * fillAlpha, fillAlpha);
  }

  // Gaussian-like shadow falloff (mimics canvas shadowBlur)
  vec4 shadow = vec4(0.0);
  float sigma = shadowBlur / 2.5;
  if (sigma > 0.001) {
    float shadowDist = max(0.0, combinedSdf);
    float shadowAlpha = exp(-(shadowDist * shadowDist) / (2.0 * sigma * sigma)) * shadowColor.a;
    shadow = vec4(shadowColor.rgb * shadowAlpha, shadowAlpha);
  }

  fragColor = background + shadow * (1.0 - background.a);
  fragPicking = vec4(0.0);
}
`}function Mr(e){var t=[`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_cameraAngle`,`u_resolution`,`u_pixelRatio`,`u_labelMargin`,`u_zoomLabelSizeRatio`,`u_labelPixelSnapping`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_nodeFrameTexture`,`u_nodeFrameTextureWidth`,`u_layerAttributeTexture`,`u_layerAttributeTextureWidth`,`u_layerAttributeTexelsPerNode`],n=U(cr(e)),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;t.includes(i.name)||t.push(i.name)}}catch(e){n.e(e)}finally{n.f()}return t}function Nr(e){return{vertexShader:Ar(e),fragmentShader:jr(e),uniforms:Mr(e.shapes)}}function Pr(e,t,n,r){var i=r.label,a=i===void 0?{}:i,o=r.shapes,s=r.layers,c=r.getAttributeTexture,l=r.shapeGlobalIds;if(o.length===0)throw Error(`createBackdropProgram: at least one shape must be provided in 'shapes'`);var u=a.margin??5,d=a.zoomToLabelSizeRatioFunction??function(){return 1},f=Nr({shapes:o,layers:s,shapeGlobalIds:l}),p=function(e){function t(){var e;K(this,t);var n=[...arguments];return e=J(this,t,[].concat(n)),W(e,`totalBackdropCount`,0),W(e,`bufferCapacity`,0),e}return Y(t,e),q(t,[{key:`getDefinition`,value:function(){var e=WebGL2RenderingContext,t=e.FLOAT,n=e.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:f.vertexShader,FRAGMENT_SHADER_SOURCE:f.fragmentShader,METHOD:n,UNIFORMS:f.uniforms,ATTRIBUTES:[{name:`a_nodeIndex`,size:1,type:t},{name:`a_labelWidth`,size:1,type:t},{name:`a_labelHeight`,size:1,type:t},{name:`a_textHeight`,size:1,type:t},{name:`a_positionMode`,size:1,type:t},{name:`a_labelAngle`,size:1,type:t},{name:`a_backdropColor`,size:4,type:t},{name:`a_backdropShadowColor`,size:4,type:t},{name:`a_backdropShadowBlur`,size:1,type:t},{name:`a_backdropPadding`,size:1,type:t},{name:`a_backdropBorderColor`,size:4,type:t},{name:`a_backdropExtra`,size:4,type:t},{name:`a_labelBoxOffset`,size:2,type:t}],CONSTANT_ATTRIBUTES:[{name:`a_quadCorner`,size:2,type:t}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:`processBackdrop`,value:function(e,t){var n=this.floats,r=e*this.STRIDE;n[r++]=t.nodeIndex,n[r++]=t.labelWidth,n[r++]=t.labelHeight,n[r++]=t.textHeight,n[r++]=Ri[t.position],n[r++]=t.labelAngle,n[r++]=t.backdropColor[0],n[r++]=t.backdropColor[1],n[r++]=t.backdropColor[2],n[r++]=t.backdropColor[3],n[r++]=t.backdropShadowColor[0],n[r++]=t.backdropShadowColor[1],n[r++]=t.backdropShadowColor[2],n[r++]=t.backdropShadowColor[3],n[r++]=t.backdropShadowBlur,n[r++]=t.backdropPadding,n[r++]=t.backdropBorderColor[0],n[r++]=t.backdropBorderColor[1],n[r++]=t.backdropBorderColor[2],n[r++]=t.backdropBorderColor[3],n[r++]=t.backdropBorderWidth,n[r++]=t.backdropCornerRadius,n[r++]=t.backdropLabelPadding,n[r++]=t.backdropArea,n[r++]=t.labelBoxOffset[0],n[r++]=t.labelBoxOffset[1]}},{key:`setUniforms`,value:function(e,n){var r=n.gl,i=n.uniformLocations;r.uniformMatrix3fv(i.u_matrix,!1,e.matrix),r.uniform1f(i.u_sizeRatio,e.sizeRatio),r.uniform1f(i.u_correctionRatio,e.correctionRatio),r.uniform1f(i.u_cameraAngle,e.cameraAngle),r.uniform2f(i.u_resolution,e.width*e.pixelRatio,e.height*e.pixelRatio),r.uniform1f(i.u_pixelRatio,e.pixelRatio),r.uniform1f(i.u_labelMargin,t.labelMargin),r.uniform1f(i.u_zoomLabelSizeRatio,1/d(e.zoomRatio)),r.uniform1f(i.u_labelPixelSnapping,e.labelPixelSnapping),r.uniform1i(i.u_nodeDataTexture,e.nodeDataTextureUnit),r.uniform1i(i.u_nodeDataTextureWidth,e.nodeDataTextureWidth),r.uniform1i(i.u_nodeFrameTexture,e.nodeFrameTextureUnit),r.uniform1i(i.u_nodeFrameTextureWidth,e.nodeFrameTextureWidth);var a=c();i.u_layerAttributeTexture&&a&&(a.bind(ca),r.uniform1i(i.u_layerAttributeTexture,ca),r.uniform1i(i.u_layerAttributeTextureWidth,a.getTextureWidth()),r.uniform1i(i.u_layerAttributeTexelsPerNode,a.getTexelsPerItem()));var s=U(cr(o)),l;try{for(s.s();!(l=s.n()).done;){var u=l.value;this.setTypedUniform(u,n)}}catch(e){s.e(e)}finally{s.f()}}},{key:`hasNothingToRender`,value:function(){return this.totalBackdropCount===0}},{key:`drawWebGL`,value:function(e,t){var n=t.gl;this.totalBackdropCount!==0&&(this.isInstanced?n.drawArraysInstanced(e,0,this.VERTICES,this.totalBackdropCount):n.drawArrays(e,0,this.totalBackdropCount*this.VERTICES))}},{key:`reallocate`,value:function(e){this.totalBackdropCount=e,e>this.bufferCapacity&&(this.bufferCapacity=Math.max(e,Math.ceil(this.bufferCapacity*1.5)||10),$(t,`reallocate`,this,3)([this.bufferCapacity]))}}])}(aa);return W(p,`labelMargin`,u),new p(e,t,n)}function Fr(){return`#version 300 es

in float a_nodeIndex;
in vec4 a_id;
in vec4 a_color;
in float a_labelWidth;
in float a_labelHeight;
in float a_textHeight;
in float a_positionMode;
in float a_labelAngle;
in float a_padding;
in vec2 a_quadCorner;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_labelMargin;
uniform float u_zoomLabelSizeRatio;
uniform float u_labelPixelSnapping;
uniform float u_pickingPadding;
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_nodeFrameTexture;
uniform int u_nodeFrameTextureWidth;

out vec4 v_id;
out vec4 v_color;

${qi}
${Ji}
${Xi}
${Ki}

void main() {
  int nodeIdx = int(a_nodeIndex);

  // Node data: (x, y, size, shapeId).
  vec4 nodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  vec2 nodePosition = nodeData.xy;
  float nodeSize = nodeData.z;

  // Shape-aware edge distance, read once from the shared frame texture.
  float edgeDist = readFrameTexel(u_nodeFrameTexture, u_nodeFrameTextureWidth, nodeIdx).r;

  // Per-node label rotation alignment: 0 = viewport, 1 = label turns with camera.
  float labelRotation = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx).g;

  ${zi}

  float zoomScale = u_zoomLabelSizeRatio;
  float labelW = a_labelWidth * zoomScale * u_pixelRatio;
  float labelH = a_labelHeight * zoomScale * u_pixelRatio;
  float labelMargin = u_labelMargin * zoomScale * u_pixelRatio;
#ifdef PICKING_MODE
  float padding = u_pickingPadding * u_pixelRatio;
#else
  float padding = a_padding * u_pixelRatio;
#endif

  if (labelW <= 0.0) {
    gl_Position = vec4(2.0, 0.0, 0.0, 1.0);
    v_id = vec4(0.0);
    v_color = vec4(0.0);
    return;
  }

  vec2 labelHalfSize = vec2(labelW * 0.5 + padding, labelH * 0.5 + padding);
  vec2 labelOffset = vec2(0.0);

  // Graph-aligned labels add the camera angle so the rect orbits with the text.
  float labelAngle = a_labelAngle - labelRotation * u_cameraAngle;
  float la_c = cos(labelAngle);
  float la_s = sin(labelAngle);
  mat2 labelRotMat = mat2(la_c, -la_s, la_s, la_c);

  vec3 nodeClip = u_matrix * vec3(nodePosition, 1.0);
  vec2 nodeScreen = vec2(
    (nodeClip.x + 1.0) * u_resolution.x,
    (1.0 - nodeClip.y) * u_resolution.y
  ) * 0.5;
  vec2 snapDelta = (round(nodeScreen) - nodeScreen) * u_labelPixelSnapping;

  if (a_positionMode < 4.0) {
    float labelStart = nodeRadiusPixels * edgeDist + labelMargin;
    float textHalf = a_textHeight * zoomScale * u_pixelRatio * 0.5;
    // Box center uses the text half-size; the padding expands the quad below.
    labelOffset = labelRotMat * labelBoxCenter(a_positionMode, labelStart, vec2(labelW * 0.5, labelH * 0.5), textHalf);
  }

  // Rotate the rect with the label so it stays aligned with the (rotated) text.
  vec2 localPos = labelOffset + labelRotMat * (a_quadCorner * labelHalfSize);
  vec2 ndcOffset = (localPos + snapDelta) * 2.0 / u_resolution;
  ndcOffset.y = -ndcOffset.y;

  gl_Position = vec4(nodeClip.xy + ndcOffset, 0.0, 1.0);
  v_id = a_id;
  v_color = a_color;
}
`}function Ir(e,t,n,r){var i=r.label,a=i===void 0?{}:i,o=a.margin??5,s=a.zoomToLabelSizeRatioFunction??function(){return 1},c=Fr(),l=function(e){function t(){var e;K(this,t);var n=[...arguments];return e=J(this,t,[].concat(n)),W(e,`totalCount`,0),W(e,`bufferCapacity`,0),e}return Y(t,e),q(t,[{key:`getDefinition`,value:function(){var e=WebGL2RenderingContext,t=e.FLOAT,n=e.UNSIGNED_BYTE;return{VERTICES:4,VERTEX_SHADER_SOURCE:c,FRAGMENT_SHADER_SOURCE:ua,METHOD:e.TRIANGLE_STRIP,UNIFORMS:[`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_cameraAngle`,`u_resolution`,`u_pixelRatio`,`u_labelMargin`,`u_zoomLabelSizeRatio`,`u_labelPixelSnapping`,`u_pickingPadding`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_nodeFrameTexture`,`u_nodeFrameTextureWidth`],ATTRIBUTES:[{name:`a_nodeIndex`,size:1,type:t},{name:`a_id`,size:4,type:n,normalized:!0},{name:`a_color`,size:4,type:n,normalized:!0},{name:`a_labelWidth`,size:1,type:t},{name:`a_labelHeight`,size:1,type:t},{name:`a_textHeight`,size:1,type:t},{name:`a_positionMode`,size:1,type:t},{name:`a_labelAngle`,size:1,type:t},{name:`a_padding`,size:1,type:t}],CONSTANT_ATTRIBUTES:[{name:`a_quadCorner`,size:2,type:t}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:`processLabelBackground`,value:function(e,t){var n=this.floats,r=this.ints,i=e*this.STRIDE;n[i++]=t.nodeIndex,r[i++]=t.id,n[i++]=t.color,n[i++]=t.labelWidth,n[i++]=t.labelHeight,n[i++]=t.textHeight,n[i++]=t.positionMode,n[i++]=t.labelAngle,n[i++]=t.padding}},{key:`setUniforms`,value:function(e,n){var r=n.gl,i=n.uniformLocations;r.uniformMatrix3fv(i.u_matrix,!1,e.matrix),r.uniform1f(i.u_sizeRatio,e.sizeRatio),r.uniform1f(i.u_correctionRatio,e.correctionRatio),r.uniform1f(i.u_cameraAngle,e.cameraAngle),r.uniform2f(i.u_resolution,e.width*e.pixelRatio,e.height*e.pixelRatio),r.uniform1f(i.u_pixelRatio,e.pixelRatio),r.uniform1f(i.u_labelMargin,t.labelMargin),r.uniform1f(i.u_zoomLabelSizeRatio,1/s(e.zoomRatio)),r.uniform1f(i.u_labelPixelSnapping,e.labelPixelSnapping),r.uniform1f(i.u_pickingPadding,e.labelPickingPadding),r.uniform1i(i.u_nodeDataTexture,e.nodeDataTextureUnit),r.uniform1i(i.u_nodeDataTextureWidth,e.nodeDataTextureWidth),r.uniform1i(i.u_nodeFrameTexture,e.nodeFrameTextureUnit),r.uniform1i(i.u_nodeFrameTextureWidth,e.nodeFrameTextureWidth)}},{key:`hasNothingToRender`,value:function(){return this.totalCount===0}},{key:`drawWebGL`,value:function(e,t){var n=t.gl;this.totalCount!==0&&n.drawArraysInstanced(n.TRIANGLE_STRIP,0,this.VERTICES,this.totalCount)}},{key:`reallocate`,value:function(e){this.totalCount=e,e>this.bufferCapacity&&(this.bufferCapacity=Math.max(e,Math.ceil(this.bufferCapacity*1.5)||10),$(t,`reallocate`,this,3)([this.bufferCapacity]))}}])}(aa);return W(l,`labelMargin`,o),new l(e,t,n)}function Lr(e,t,n,r,i){var a=e+i*4,o=document.createElement(`canvas`);o.width=a,o.height=a;var s=o.getContext(`2d`,{willReadFrequently:!0});return s.font=`${r} ${n} ${e}px ${t}`,s.textBaseline=`alphabetic`,s.textAlign=`left`,s.fillStyle=`black`,{ctx:s,canvasSize:a,gridOuter:new Float64Array(a*a),gridInner:new Float64Array(a*a),f:new Float64Array(a),z:new Float64Array(a+1),v:new Uint16Array(a)}}function Rr(e,t,n,r,i){var a=e.ctx,o=e.canvasSize,s=a.measureText(t),c=s.width,l=s.actualBoundingBoxAscent,u=s.actualBoundingBoxDescent,d=s.actualBoundingBoxLeft,f=s.actualBoundingBoxRight,p=Math.ceil(l),m=Math.ceil(d),h=Math.max(0,Math.min(o-n,Math.ceil(d)+Math.ceil(f))),g=Math.min(o-n,p+Math.ceil(u)),_=h+2*n,v=g+2*n,y=Math.max(_*v,0),b=new Uint8ClampedArray(y),x={data:b,width:_,height:v,glyphWidth:h,glyphHeight:g,glyphTop:p,glyphLeft:m,glyphAdvance:c};if(h===0||g===0)return x;var S=e.gridInner,C=e.gridOuter;a.clearRect(n,n,h,g),a.fillText(t,n+m,n+p);var w=a.getImageData(n,n,h,g);C.fill(pa,0,y),S.fill(0,0,y);for(var T=0;T<g;T++)for(var E=0;E<h;E++){var D=w.data[4*(T*h+E)+3]/255;if(D!==0){var O=(T+n)*_+E+n;if(D===1)C[O]=0,S[O]=pa;else{var k=.5-D;C[O]=k>0?k*k:0,S[O]=k<0?k*k:0}}}zr(C,0,0,_,v,_,e.f,e.v,e.z),zr(S,n,n,h,g,_,e.f,e.v,e.z);for(var A=0;A<y;A++){var j=Math.sqrt(C[A])-Math.sqrt(S[A]);b[A]=Math.round(255-255*(j/r+i))}return x}function zr(e,t,n,r,i,a,o,s,c){for(var l=t;l<t+r;l++)Br(e,n*a+l,a,i,o,s,c);for(var u=n;u<n+i;u++)Br(e,u*a+t,1,r,o,s,c)}function Br(e,t,n,r,i,a,o){a[0]=0,o[0]=-pa,o[1]=pa,i[0]=e[t];for(var s=1,c=0,l=0;s<r;s++){i[s]=e[t+s*n];var u=s*s;do{var d=a[c];l=(i[s]-i[d]+u-d*d)/(s-d)/2}while(l<=o[c]&&--c>-1);c++,a[c]=s,o[c]=l,o[c+1]=pa}for(var f=0,p=0;f<r;f++){for(;o[p+1]<f;)p++;var m=a[p],h=f-m;e[t+f*n]=i[m]+h*h}}function Vr(){return`#version 300 es

// ============================================================================
// Attributes
// ============================================================================

// Per-character (instanced)
in float a_nodeIndex;        // Index into node data texture
in vec2 a_charOffset;        // Character offset from label origin (pixels)
in vec2 a_charSize;          // Character dimensions (pixels)
in vec4 a_texCoords;         // Atlas coords: (x, y, width, height) in pixels
in vec4 a_color;             // Text color (RGBA)
in float a_margin;           // Gap between node edge and label (pixels)
in float a_positionMode;     // Position: 0=right, 1=left, 2=above, 3=below, 4=over
in float a_labelWidth;       // Total label width (pixels)
in float a_labelHeight;      // Label height (pixels)
in float a_verticalCenter;   // Vertical center offset from baseline (pixels)
in float a_textHeight;       // Actual text height: maxAscent + maxDescent (pixels)
in float a_labelAngle;       // Label rotation angle (radians)

// Per-vertex (constant quad corners)
in vec2 a_quadCorner;        // Quad corner: [-1,-1], [1,-1], [-1,1], [1,1]

// ============================================================================
// Uniforms
// ============================================================================

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
uniform vec2 u_resolution;
uniform vec2 u_atlasSize;
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_nodeFrameTexture;
uniform int u_nodeFrameTextureWidth;
uniform float u_zoomLabelSizeRatio;
uniform float u_labelPixelSnapping;
uniform float u_pixelRatio;

// ============================================================================
// Varyings
// ============================================================================

out vec2 v_texCoord;
out vec4 v_color;
out float v_fontScale;

// ============================================================================
// Constants
// ============================================================================

const float bias = 255.0 / 254.0;
const float ATLAS_FONT_SIZE = ${Q(ha)};

// ============================================================================
// Helper Functions
// ============================================================================

${qi}
${Ji}
${Xi}
${Vi}

// ============================================================================
// Main
// ============================================================================

void main() {
  // -------------------------------------------------------------------------
  // Step 0: Fetch node data + shared edge distance from textures
  // -------------------------------------------------------------------------
  // Node-data texture format: vec4(x, y, size, shapeId)
  // 2D texture layout: texCoord = (index % width, index / width)
  int nodeIdx = int(a_nodeIndex);
  vec4 nodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  vec2 a_anchorPosition = nodeData.xy;
  float a_nodeSize = nodeData.z;

  // Normalized edge distance from the shared frame texture (the frame-pass ran
  // the SDF search once; the label just reads the result).
  float edgeDist = readFrameTexel(u_nodeFrameTexture, u_nodeFrameTextureWidth, nodeIdx).r;

  // Per-node label rotation alignment: 0 = viewport, 1 = label turns with camera.
  float labelRotation = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx).g;

  // Apply zoom-dependent label size scaling
  // Positional values are in CSS pixels; multiply by u_pixelRatio to convert to
  // physical pixels, which is what the NDC conversion (/ u_resolution) expects.
  float zoomScale = u_zoomLabelSizeRatio;
  float margin = a_margin * zoomScale * u_pixelRatio;
  vec2 charOffset = a_charOffset * zoomScale * u_pixelRatio;
  vec2 charSize = a_charSize * zoomScale * u_pixelRatio;
  float labelWidth = a_labelWidth * zoomScale * u_pixelRatio;
  float labelHeight = a_labelHeight * zoomScale;

  // Font scale: ratio of CSS label size to the base atlas font size.
  // Divided by u_pixelRatio because the atlas is generated at ATLAS_FONT_SIZE * pixelRatio,
  // which cancels out the u_pixelRatio in the fragment shader's gamma formula and keeps
  // the anti-aliasing band width consistent across pixel densities.
  v_fontScale = a_labelHeight * zoomScale / (ATLAS_FONT_SIZE * u_pixelRatio);

  // -------------------------------------------------------------------------
  // Step 1: Transform node position to clip space
  // -------------------------------------------------------------------------
  vec3 anchorClip = u_matrix * vec3(a_anchorPosition, 1.0);

  // -------------------------------------------------------------------------
  // Step 2: Convert node size to screen pixels
  // -------------------------------------------------------------------------
  float matrixScaleX = length(vec2(u_matrix[0][0], u_matrix[1][0]));
  float nodeRadiusGraphSpace = a_nodeSize * u_correctionRatio / u_sizeRatio * 2.0;
  float nodeRadiusNDC = nodeRadiusGraphSpace * matrixScaleX;
  float nodeRadiusPixels = nodeRadiusNDC * u_resolution.x / 2.0;

  // -------------------------------------------------------------------------
  // Step 3: Calculate position offset from the shared edge distance
  // -------------------------------------------------------------------------
  vec2 positionOffset = vec2(0.0);

  if (a_positionMode < 4.0) {
    vec2 screenDir = getLabelDirection(a_positionMode);
    float boundaryDistPixels = nodeRadiusPixels * edgeDist;
    positionOffset = screenDir * (boundaryDistPixels + margin);
  }

  // -------------------------------------------------------------------------
  // Step 4: Calculate final vertex position
  // -------------------------------------------------------------------------
  vec2 cornerOffset = (a_quadCorner + 1.0) * 0.5;
  vec2 charPixelPos = positionOffset + charOffset + cornerOffset * charSize;

  // Apply text alignment based on position mode
  float verticalCenter = a_verticalCenter * zoomScale * u_pixelRatio;
  float textHeight = a_textHeight * zoomScale * u_pixelRatio;
  float baselineToDescent = textHeight / 2.0 - verticalCenter;
  float baselineToAscent = textHeight / 2.0 + verticalCenter;

  if (a_positionMode < 0.5) {
    // Right: vertically center
    charPixelPos.y += verticalCenter;
  } else if (a_positionMode < 1.5) {
    // Left: right-align and vertically center
    charPixelPos.x -= labelWidth;
    charPixelPos.y += verticalCenter;
  } else if (a_positionMode < 2.5) {
    // Above: center horizontally, bottom of text at anchor
    charPixelPos.x -= labelWidth * 0.5;
    charPixelPos.y -= baselineToDescent;
  } else if (a_positionMode < 3.5) {
    // Below: center horizontally, top of text at anchor
    charPixelPos.x -= labelWidth * 0.5;
    charPixelPos.y += baselineToAscent;
  } else {
    // Over: center both
    charPixelPos.x -= labelWidth * 0.5;
    charPixelPos.y += verticalCenter;
  }

  // Apply label angle rotation. Graph-aligned labels add the camera angle so the
  // whole label orbits the node in lockstep with the frame-pass edge distance.
  float labelAngle = a_labelAngle - labelRotation * u_cameraAngle;
  float la_c = cos(labelAngle);
  float la_s = sin(labelAngle);
  mat2 labelRotMat = mat2(la_c, -la_s, la_s, la_c);
  charPixelPos = labelRotMat * charPixelPos;

  // Snap node center to pixel grid so label/backdrop/attachment move as a unit
  vec2 nodeScreen = vec2(
    (anchorClip.x + 1.0) * u_resolution.x,
    (1.0 - anchorClip.y) * u_resolution.y
  ) * 0.5;
  charPixelPos += (round(nodeScreen) - nodeScreen) * u_labelPixelSnapping;

  // Convert to NDC (flip Y: screen Y-down -> clip Y-up)
  vec2 ndcOffset = vec2(charPixelPos.x, -charPixelPos.y) * 2.0 / u_resolution;
  gl_Position = vec4(anchorClip.xy + ndcOffset, 0.0, 1.0);

  // -------------------------------------------------------------------------
  // Step 5: Texture coordinates
  // -------------------------------------------------------------------------
  v_texCoord = (a_texCoords.xy + cornerOffset * a_texCoords.zw) / u_atlasSize;

  // -------------------------------------------------------------------------
  // Step 6: Pass color
  // -------------------------------------------------------------------------
  v_color = a_color;
  v_color.a *= bias;
}
`}function Hr(){return`#version 300 es
precision highp float;

in vec2 v_texCoord;
in vec4 v_color;
in float v_fontScale;

uniform sampler2D u_atlas;
uniform float u_gamma;
uniform float u_sdfBuffer;
uniform float u_pixelRatio;

// Fragment output (single target - picking handled via separate pass)
out vec4 fragColor;

void main() {
  #ifdef PICKING_MODE
    // Labels are not pickable - discard all fragments in picking mode
    fragColor = vec4(0.0);
    discard;
  #else
    // Sample SDF value from atlas (high = inside glyph, low = outside)
    float sdfValue = texture(u_atlas, v_texCoord).a;

    // Edge threshold: 1.0 - cutoff = 0.75 for default cutoff=0.25
    // This is where the glyph edge is located in the SDF
    float edgeThreshold = 1.0 - u_sdfBuffer;

    // Gamma controls the anti-aliasing band width.
    // Scale inversely with font scale so small labels get a wider AA band
    // (smoother) and large labels get a tighter band (sharper).
    float gamma = u_gamma / (u_pixelRatio * v_fontScale);

    // Pure gamma-based anti-aliasing using smoothstep
    // The AA band extends from (threshold - gamma) to (threshold + gamma)
    float alpha = smoothstep(edgeThreshold - gamma, edgeThreshold + gamma, sdfValue);

    // Premultiplied alpha output for correct blending
    float finalAlpha = v_color.a * alpha;
    fragColor = vec4(v_color.rgb * finalAlpha, finalAlpha);
  #endif
}
`}function Ur(){return[`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_cameraAngle`,`u_resolution`,`u_atlasSize`,`u_atlas`,`u_gamma`,`u_sdfBuffer`,`u_pixelRatio`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_nodeFrameTexture`,`u_nodeFrameTextureWidth`,`u_zoomLabelSizeRatio`,`u_labelPixelSnapping`]}function Wr(){return{vertexShader:Vr(),fragmentShader:Hr(),uniforms:Ur()}}function Gr(e,t,n,r){var i=r.label,a=i===void 0?{}:i,o=a.margin??5,s=a.zoomToLabelSizeRatioFunction??function(){return 1},c=Wr(),l=function(e){function t(e,n,r){var i;if(K(this,t),i=J(this,t,[e,n,r]),W(i,`atlasTexture`,null),W(i,`atlasNeedsUpdate`,!1),W(i,`labelGlyphCache`,new Map),i.atlasFontSize=da.fontSize*Hn(),i.atlasManager=new ma({fontSize:i.atlasFontSize}),i.gamma=.025,i.sdfBuffer=da.cutoff,i.atlasTexture=e.createTexture(),!i.atlasTexture)throw Error(`NodeLabelProgram: failed to create atlas texture`);e.bindTexture(e.TEXTURE_2D,i.atlasTexture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),i.atlasManager.on(ma.ATLAS_UPDATED_EVENT,function(){i.atlasNeedsUpdate=!0});var o={family:a.font?.family||`sans-serif`,weight:a.font?.weight||`normal`,style:a.font?.style||`normal`};return i.defaultFontKey=i.atlasManager.registerFont(o),i}return Y(t,e),q(t,[{key:`getDefinition`,value:function(){var e=WebGL2RenderingContext,t=e.FLOAT,n=e.UNSIGNED_BYTE,r=e.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:c.vertexShader,FRAGMENT_SHADER_SOURCE:c.fragmentShader,METHOD:r,UNIFORMS:c.uniforms,ATTRIBUTES:[{name:`a_nodeIndex`,size:1,type:t},{name:`a_charOffset`,size:2,type:t},{name:`a_charSize`,size:2,type:t},{name:`a_texCoords`,size:4,type:t},{name:`a_color`,size:4,type:n,normalized:!0},{name:`a_margin`,size:1,type:t},{name:`a_positionMode`,size:1,type:t},{name:`a_labelWidth`,size:1,type:t},{name:`a_labelHeight`,size:1,type:t},{name:`a_verticalCenter`,size:1,type:t},{name:`a_textHeight`,size:1,type:t},{name:`a_labelAngle`,size:1,type:t}],CONSTANT_ATTRIBUTES:[{name:`a_quadCorner`,size:2,type:t}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:`prepareLabelGlyphs`,value:function(e,t){if(t.hidden||!t.text)this.labelGlyphCache.delete(e);else{var n=t.text,r=t.fontKey||this.defaultFontKey;this.atlasManager.ensureGlyphs(n,r);var i=[],a=[],o=0,s=0,c=0,l=U(n),u;try{for(l.s();!(u=l.n()).done;){var d=u.value.codePointAt(0);if(d===void 0)i.push(void 0),a.push(o);else{var f=this.atlasManager.getGlyph(d,r);i.push(f),a.push(o),f&&(o+=f.advance,s=Math.max(s,f.bearingY),c=Math.max(c,f.atlasHeight-f.bearingY))}}}catch(e){l.e(e)}finally{l.f()}this.labelGlyphCache.set(e,{glyphs:i,xOffsets:a,totalWidth:o,totalHeight:s+c,verticalCenterOffset:(s-c)/2})}}},{key:`processCharacter`,value:function(e,t,n,r){var i=this.floats,a=this.STRIDE,o=e*a,s=this.labelGlyphCache.get(t.parentKey);if(!s||!s.glyphs[r])for(var c=0;c<a;c++)i[o+c]=0;else{var l=s.glyphs[r],u=s.xOffsets[r],d=t.size/this.atlasFontSize,f=on(t.color),p=o;i[p++]=t.nodeIndex,i[p++]=(u+l.bearingX)*d,i[p++]=-l.bearingY*d,i[p++]=l.atlasWidth*d,i[p++]=l.atlasHeight*d,i[p++]=l.atlasX,i[p++]=l.atlasY,i[p++]=l.atlasWidth,i[p++]=l.atlasHeight,i[p++]=f,i[p++]=t.margin,i[p++]=Ri[t.position],i[p++]=s.totalWidth*d,i[p++]=t.size,i[p++]=s.verticalCenterOffset*d,i[p++]=s.totalHeight*d,i[p++]=t.labelAngle}}},{key:`processLabel`,value:function(e,n,r){return this.prepareLabelGlyphs(e,r),$(t,`processLabel`,this,3)([e,n,r])}},{key:`updateAtlasTexture`,value:function(){if(this.atlasNeedsUpdate){var e=this.normalProgram.gl,t=this.atlasManager.getTextures();if(t.length!==0){var n=t[0];e.bindTexture(e.TEXTURE_2D,this.atlasTexture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n.width,n.height,0,e.RGBA,e.UNSIGNED_BYTE,n.data),e.bindTexture(e.TEXTURE_2D,null),this.atlasNeedsUpdate=!1}}}},{key:`setUniforms`,value:function(e,n){var r=n.gl,i=n.uniformLocations;r.uniformMatrix3fv(i.u_matrix,!1,e.matrix),r.uniform1f(i.u_sizeRatio,e.sizeRatio),r.uniform1f(i.u_correctionRatio,e.correctionRatio),r.uniform1f(i.u_cameraAngle,e.cameraAngle),r.uniform2f(i.u_resolution,e.width*e.pixelRatio,e.height*e.pixelRatio);var a=this.atlasManager.getTextures();a.length>0?r.uniform2f(i.u_atlasSize,a[0].width,a[0].height):r.uniform2f(i.u_atlasSize,1,1),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,this.atlasTexture),r.uniform1i(i.u_atlas,0),i.u_nodeDataTexture!==void 0&&r.uniform1i(i.u_nodeDataTexture,e.nodeDataTextureUnit),i.u_nodeDataTextureWidth!==void 0&&r.uniform1i(i.u_nodeDataTextureWidth,e.nodeDataTextureWidth),r.uniform1i(i.u_nodeFrameTexture,e.nodeFrameTextureUnit),r.uniform1i(i.u_nodeFrameTextureWidth,e.nodeFrameTextureWidth),r.uniform1f(i.u_gamma,this.gamma),r.uniform1f(i.u_sdfBuffer,this.sdfBuffer),r.uniform1f(i.u_pixelRatio,e.pixelRatio),r.uniform1f(i.u_zoomLabelSizeRatio,1/t.zoomToLabelSizeRatioFunction(e.zoomRatio)),r.uniform1f(i.u_labelPixelSnapping,e.labelPixelSnapping)}},{key:`renderProgram`,value:function(e,n){this.updateAtlasTexture(),this.atlasManager.hasPendingGlyphs()&&(this.atlasManager.flush(),this.updateAtlasTexture()),$(t,`renderProgram`,this,3)([e,n])}},{key:`registerFont`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:`normal`,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:`normal`;return this.atlasManager.registerFont({family:e,weight:t,style:n})}},{key:`getAtlasManager`,value:function(){return this.atlasManager}},{key:`measureLabel`,value:function(e,t,n){var r=n||this.defaultFontKey;this.atlasManager.ensureGlyphs(e,r),this.atlasManager.hasPendingGlyphs()&&this.atlasManager.flush();var i=0,a=0,o=0,s=U(e),c;try{for(s.s();!(c=s.n()).done;){var l=c.value.codePointAt(0);if(l!==void 0){var u=this.atlasManager.getGlyph(l,r);u&&(i+=u.advance,a=Math.max(a,u.bearingY),o=Math.max(o,u.atlasHeight-u.bearingY))}}}catch(e){s.e(e)}finally{s.f()}var d=t/this.atlasFontSize;return{width:i*d,height:t,textHeight:(a+o)*d}}},{key:`ensureGlyphsReady`,value:function(e,t){var n=t||this.defaultFontKey,r=U(e),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;this.atlasManager.ensureGlyphs(a,n)}}catch(e){r.e(e)}finally{r.f()}this.atlasManager.flush()}},{key:`kill`,value:function(){var e=this.normalProgram.gl;this.atlasTexture&&=(e.deleteTexture(this.atlasTexture),null),this.atlasManager.destroy(),this.labelGlyphCache.clear(),$(t,`kill`,this,3)([])}}])}(la);return W(l,`labelMargin`,o),W(l,`zoomToLabelSizeRatioFunction`,s),new l(e,t,n)}function Kr(e,t,n){var r=sr(e),i=cr(e).map(function(e){return`uniform ${e.type} ${e.name};`}).join(`
`),a=ur(e,n),o=a.code,s=a.multiShape,c=Cr(e,t),l=Object.keys(c.specs).map(function(e){return`float v_${e};`}).join(`
`),u=_r(c,{varPrefix:`nodeAttr`,baseTexelExpr:`nodeIdx * u_layerAttributeTexelsPerNode`,textureWidthUniform:`u_layerAttributeTextureWidth`,textureSamplerUniform:`u_layerAttributeTexture`}),d=u.fetchCode,f=u.varyingAssignments;return`#version 300 es
precision highp float;

uniform float u_cameraAngle;
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform float u_frameTextureWidth;
uniform float u_frameTextureHeight;
uniform sampler2D u_layerAttributeTexture;
uniform int u_layerAttributeTextureWidth;
uniform int u_layerAttributeTexelsPerNode;
${i}

in float a_nodeIndex;     // node-data texture index (also the target frame texel)
in float a_positionMode;  // 0=right 1=left 2=above 3=below 4=over
in float a_labelAngle;    // intrinsic label angle (radians)

out float v_edgeDist;

// Shape attributes (plain globals: this pass is vertex-only)
${l}

${qi}
${Ji}
${r}
${o}
${Vi}

void main() {
  int nodeIdx = int(a_nodeIndex);
${d}
${f}
  ${s?`// Multi-shape: the shape id lives in the node-data texture's .w channel:
  g_shapeId = int(readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx).w);`:`// Single-shape mode, shape id not needed`}

  // Per-node rotation alignment (0 = viewport, 1 = graph).
  vec4 nodeFlags = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  float nodeRotation = nodeFlags.r;
  float labelRotation = nodeFlags.g;

  // Effective angle: intrinsic (style-given) plus the camera angle when the label
  // is graph-aligned. The companions place the box at this same angle.
  float effectiveAngle = a_labelAngle - labelRotation * u_cameraAngle;

  // The "over" mode (4) sits on the node center, so it has no edge distance.
  float edgeDist = 0.0;
  if (a_positionMode < 4.0) {
    vec2 screenDir = getLabelDirection(a_positionMode);
    // Rotate by the effective label angle. Inlined rather than via rotate2D()
    // because the shape SDFs (getShapeGLSLForShapes) already define that helper
    // for multi-shape programs, and redefining it would be a GLSL error.
    float ea_c = cos(effectiveAngle);
    float ea_s = sin(effectiveAngle);
    vec2 rotatedScreenDir = mat2(ea_c, -ea_s, ea_s, ea_c) * screenDir;
    // Screen (Y-down) -> SDF (Y-up).
    vec2 sdfDir = vec2(rotatedScreenDir.x, -rotatedScreenDir.y);
    // Counter-rotate into the shape's local frame for graph-aligned nodes, so the
    // boundary is queried against the shape's actual on-screen orientation.
    float nodeCa = -u_cameraAngle * nodeRotation;
    float nc = cos(nodeCa), ns = sin(nodeCa);
    sdfDir = mat2(nc, -ns, ns, nc) * sdfDir;
    edgeDist = findEdgeDistance(sdfDir, 1.0);
  }
  v_edgeDist = edgeDist;

  // Scatter to this node's texel center in the frame texture.
  float x = mod(a_nodeIndex, u_frameTextureWidth);
  float y = floor(a_nodeIndex / u_frameTextureWidth);
  vec2 ndc = (vec2(x, y) + 0.5) / vec2(u_frameTextureWidth, u_frameTextureHeight) * 2.0 - 1.0;
  gl_Position = vec4(ndc, 0.0, 1.0);
  gl_PointSize = 1.0;
}
`}function qr(e,t,n,r,i){var a,o=r.label,s=o===void 0?{}:o,c=r.shapes;if(c.length===0)throw Error(`createNodeProgram: at least one shape must be provided in 'shapes'`);var l={},u=[],d;c.forEach(function(e,t){var n=nr(e);t===0&&(d=n),l[e.name]=t,u[t]=rr(n)});var f=X(r.layers),p=Or({shapes:c,layers:f,shapeGlobalIds:c.length>1?u:void 0,antialias:i}),m=Gr(e,null,n,{label:s}),h=Pr(e,null,n,{shapes:c,layers:f,getAttributeTexture:function(){return S.getAttributeTexture()},label:s,shapeGlobalIds:c.length>1?u:void 0}),g=Ir(e,t,n,{label:s}),_=r.labelAttachments&&Object.keys(r.labelAttachments).length>0?xr(e,null,n,{label:s}):null,v=new _a(e,{shapes:c,layers:f,shapeGlobalIds:c.length>1?u:void 0}),y=Sr(c,f),b=mr(y),x=(a=function(e){function t(e,n,r){var i;K(this,t),i=J(this,t,[e,n,r]),W(i,`layerLifecycles`,new Map),W(i,`layersNeedingRegeneration`,new Set),W(i,`attrDescriptors`,[]),i._pickingBuffer=n;var a=x.layerTextures.get(e);a||(a=new na(e,b),x.layerTextures.set(e,a)),i.layerAttributeTexture=a;var o=x.textureRefCounts.get(e)||0;x.textureRefCounts.set(e,o+1),i.packedAttributeData=new Float32Array(b.floatsPerItem),f.forEach(function(t,n){if(t.lifecycle){var a={gl:e,renderer:{refresh:function(){return r.refresh()}},getUniformLocation:function(t){return e.getUniformLocation(i.normalProgram.program,t)},requestShaderRegeneration:function(){i.layersNeedingRegeneration.add(n)},requestRefresh:function(){r.refresh()}},o=t.lifecycle(a);i.layerLifecycles.set(n,o)}}),i.layerLifecycles.forEach(function(e){var t;(t=e.init)==null||t.call(e)});var s=new Map;return i.layerLifecycles.forEach(function(e,t){e.getAttributeData&&s.set(t,e)}),i.attrDescriptors=hr(y,b,s),i}return Y(t,e),q(t,[{key:`getDefinition`,value:function(){var e=WebGL2RenderingContext,t=e.FLOAT,n=e.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:p.vertexShader,FRAGMENT_SHADER_SOURCE:p.fragmentShader,METHOD:n,UNIFORMS:p.uniforms,ATTRIBUTES:p.attributes,CONSTANT_ATTRIBUTES:[{name:`a_quadCorner`,size:2,type:t}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:`maybeRegenerateShaders`,value:function(){var e=this;if(this.layersNeedingRegeneration.size!==0){f=f.map(function(t,n){if(e.layersNeedingRegeneration.has(n)){var r=e.layerLifecycles.get(n);if(r!=null&&r.regenerate)return G(G({},r.regenerate()),{},{lifecycle:t.lifecycle})}return t}),this.layersNeedingRegeneration.clear(),p=Or({shapes:c,layers:f,shapeGlobalIds:c.length>1?u:void 0,antialias:this.renderer.getSetting(`antialiasNodes`)});var t=this.normalProgram.gl,n=this.normalProgram,r=n.program,i=n.buffer,a=n.vertexShader,o=n.fragmentShader;t.deleteProgram(r),t.deleteBuffer(i),t.deleteShader(a),t.deleteShader(o),this.normalProgram=this.getProgramInfo(`normal`,t,p.vertexShader,p.fragmentShader,this._pickingBuffer)}}},{key:`allocateNode`,value:function(e){this.layerAttributeTexture.allocate(e)}},{key:`freeNode`,value:function(e){this.layerAttributeTexture.free(e)}},{key:`getAttributeTexture`,value:function(){return this.layerAttributeTexture}},{key:`uploadLayerTexture`,value:function(){this.layerAttributeTexture.upload()}},{key:`process`,value:function(e,t,n,r,i){var a=t*this.STRIDE;if(n.visibility===`hidden`){for(var o=a+this.STRIDE;a<o;a++)this.floats[a]=0;this.floats[t*this.STRIDE]=ea}else this.processVisibleItem(cn(e),a,n,r,i)}},{key:`processVisibleItem`,value:function(e,t,n,r,i){var a=this.floats,o=this.ints;if(a[t++]=r,o[t++]=e,a[t++]=n.opacity??1,b.floatsPerItem!==0){var s=this.packedAttributeData;gr(this.attrDescriptors,n,s,n.color,this.layerLifecycles,0),this.layerAttributeTexture.updateAllAttributes(i,s)}}},{key:`setUniforms`,value:function(e,t){var n=this,r=t.gl,i=t.uniformLocations;i.u_matrix&&r.uniformMatrix3fv(i.u_matrix,!1,e.matrix),i.u_sizeRatio&&r.uniform1f(i.u_sizeRatio,e.sizeRatio),i.u_correctionRatio&&r.uniform1f(i.u_correctionRatio,e.correctionRatio),i.u_pickingPadding&&r.uniform1f(i.u_pickingPadding,e.nodePickingPadding),i.u_cameraAngle&&r.uniform1f(i.u_cameraAngle,e.cameraAngle),i.u_nodeDataTexture&&r.uniform1i(i.u_nodeDataTexture,e.nodeDataTextureUnit),i.u_nodeDataTextureWidth&&r.uniform1i(i.u_nodeDataTextureWidth,e.nodeDataTextureWidth),i.u_layerAttributeTexture&&(this.layerAttributeTexture.bind(ca),r.uniform1i(i.u_layerAttributeTexture,ca)),i.u_layerAttributeTextureWidth&&r.uniform1i(i.u_layerAttributeTextureWidth,this.layerAttributeTexture.getTextureWidth()),i.u_layerAttributeTexelsPerNode&&r.uniform1i(i.u_layerAttributeTexelsPerNode,this.layerAttributeTexture.getTexelsPerItem()),c.forEach(function(e){e.uniforms.forEach(function(e){n.setTypedUniform(e,t)})}),f.forEach(function(e){e.uniforms.forEach(function(e){n.setTypedUniform(e,t)})})}},{key:`render`,value:function(e,n,r){this.maybeRegenerateShaders(),$(t,`render`,this,3)([e,n,r])}},{key:`renderProgram`,value:function(e,n){var r=n.gl,i=n.program;r.useProgram(i),n===this.normalProgram&&this.layerLifecycles.forEach(function(e){var t;(t=e.beforeRender)==null||t.call(e)}),$(t,`renderProgram`,this,3)([e,n])}},{key:`kill`,value:function(){this.layerLifecycles.forEach(function(e){var t;(t=e.kill)==null||t.call(e)}),this.layerLifecycles.clear();var e=this.normalProgram.gl,n=(x.textureRefCounts.get(e)||1)-1;n<=0?(this.layerAttributeTexture.kill(),x.layerTextures.delete(e),x.textureRefCounts.delete(e)):x.textureRefCounts.set(e,n),$(t,`kill`,this,3)([])}}])}(aa),W(a,`layerTextures`,new WeakMap),W(a,`textureRefCounts`,new WeakMap),a),S=new x(e,null,n);return{nodeProgram:S,labelProgram:m,backdropProgram:h,labelBackgroundProgram:g,attachmentProgram:_,framePass:v,shapeSlug:d,shapeNameToIndex:c.length>1?l:void 0,shapeGlobalIds:c.length>1?u:void 0}}function Jr(e){var t=e.offsets,n=e.specs,r=e.floatsPerItem,i=Object.keys(t);if(i.length===0||r===0)return{uniformDeclarations:``,uniformNames:[],vertexVaryingDeclarations:``,fragmentVaryingDeclarations:``,fetchCode:``,varyingAssignments:``};var a=`
uniform sampler2D u_edgeAttributeTexture;
uniform int u_edgeAttributeTextureWidth;
uniform int u_edgeAttributeTexelsPerEdge;`,o=[`u_edgeAttributeTexture`,`u_edgeAttributeTextureWidth`,`u_edgeAttributeTexelsPerEdge`],s=i.map(function(e){return`${n[e].size===1?`float`:`vec${n[e].size}`} v_${e};`}),c=s.map(function(e){return`out ${e}`}).join(`
`),l=s.map(function(e){return`in ${e}`}).join(`
`),u=_r(e,{varPrefix:`attr`,baseTexelExpr:`edgeIdx * u_edgeAttributeTexelsPerEdge`,textureWidthUniform:`u_edgeAttributeTextureWidth`,textureSamplerUniform:`u_edgeAttributeTexture`});return{uniformDeclarations:a,uniformNames:o,vertexVaryingDeclarations:c,fragmentVaryingDeclarations:l,fetchCode:u.fetchCode,varyingAssignments:u.varyingAssignments}}function Yr(e){return`
float findSourceClampT_${e}(vec2 source, float sourceSize, int sourceShapeId, float sourceRotateAlign, vec2 target, float margin) {
  float lo = 0.0, hi = 0.5;
  float nodeExtent = sourceSize * u_correctionRatio / u_sizeRatio * 2.0;
  float effectiveSize = 1.0 - u_correctionRatio / nodeExtent;

  // Counter-rotate the query point so viewport-aligned nodes (rotateAlign=0) are
  // clamped against their on-screen orientation; graph-aligned nodes skip it.
  float ca = u_cameraAngle * (1.0 - sourceRotateAlign);
  float rc = cos(ca), rs = sin(ca);
  mat2 rot = mat2(rc, -rs, rs, rc);

  for (int i = 0; i < 12; i++) {
    float mid = (lo + hi) * 0.5;
    vec2 pos = path_${e}_position(mid, source, target);
    vec2 localPos = rot * ((pos - source) / nodeExtent);
    float sdf = querySDF(sourceShapeId, localPos, effectiveSize);
    if (sdf < 0.0) lo = mid;
    else hi = mid;
  }

  float pathLen = path_${e}_length(source, target);
  float marginT = (margin * u_correctionRatio / u_sizeRatio) / pathLen;
  return (lo + hi) * 0.5 + marginT;
}
`}function Xr(e){return`
float findTargetClampT_${e}(vec2 source, vec2 target, float targetSize, int targetShapeId, float targetRotateAlign, float margin) {
  float lo = 0.5, hi = 1.0;
  float nodeExtent = targetSize * u_correctionRatio / u_sizeRatio * 2.0;
  float effectiveSize = 1.0 - u_correctionRatio / nodeExtent;

  // See findSourceClampT_ for the rotation rationale.
  float ca = u_cameraAngle * (1.0 - targetRotateAlign);
  float rc = cos(ca), rs = sin(ca);
  mat2 rot = mat2(rc, -rs, rs, rc);

  for (int i = 0; i < 12; i++) {
    float mid = (lo + hi) * 0.5;
    vec2 pos = path_${e}_position(mid, source, target);
    vec2 localPos = rot * ((pos - target) / nodeExtent);
    float sdf = querySDF(targetShapeId, localPos, effectiveSize);
    if (sdf < 0.0) hi = mid;
    else lo = mid;
  }

  float pathLen = path_${e}_length(source, target);
  float marginT = (margin * u_correctionRatio / u_sizeRatio) / pathLen;
  return (lo + hi) * 0.5 - marginT;
}
`}function Zr(e){return`
// Auto-generated numerical tangent (from position via finite differences)
vec2 path_${e}_tangent(float t, vec2 source, vec2 target) {
  float epsilon = 0.001;
  float t1 = max(0.0, t - epsilon);
  float t2 = min(1.0, t + epsilon);
  vec2 p1 = path_${e}_position(t1, source, target);
  vec2 p2 = path_${e}_position(t2, source, target);
  return normalize(p2 - p1);
}

// Auto-generated normal (perpendicular to tangent)
vec2 path_${e}_normal(float t, vec2 source, vec2 target) {
  vec2 tangent = path_${e}_tangent(t, source, target);
  return vec2(-tangent.y, tangent.x);
}
`}function Qr(e){return`
// Rotate a 2D vector by angle (counter-clockwise)
vec2 ${e}_rotate(vec2 v, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return vec2(c * v.x - s * v.y, s * v.x + c * v.y);
}
`}function $r(e){return`
// Auto-generated path length (samples position 16 times)
float path_${e}_length(vec2 source, vec2 target) {
  float len = 0.0;
  vec2 prev = path_${e}_position(0.0, source, target);
  for (int i = 1; i <= 16; i++) {
    float t = float(i) / 16.0;
    vec2 curr = path_${e}_position(t, source, target);
    len += length(curr - prev);
    prev = curr;
  }
  return len;
}
`}function ei(e){return`
// Auto-generated closest_t (coarse sample + ternary search)
float path_${e}_closest_t(vec2 p, vec2 source, vec2 target) {
  // Coarse search: find best among 10 samples
  float bestT = 0.0;
  float bestDist = 1e10;
  for (int i = 0; i <= 10; i++) {
    float t = float(i) / 10.0;
    vec2 pos = path_${e}_position(t, source, target);
    float d = length(p - pos);
    if (d < bestDist) {
      bestDist = d;
      bestT = t;
    }
  }

  // Refine with ternary search
  float lo = max(0.0, bestT - 0.1);
  float hi = min(1.0, bestT + 0.1);
  for (int i = 0; i < 10; i++) {
    float mid1 = lo + (hi - lo) / 3.0;
    float mid2 = hi - (hi - lo) / 3.0;
    float d1 = length(p - path_${e}_position(mid1, source, target));
    float d2 = length(p - path_${e}_position(mid2, source, target));
    if (d1 < d2) {
      hi = mid2;
    } else {
      lo = mid1;
    }
  }
  return (lo + hi) * 0.5;
}
`}function ti(e){return`
// Auto-generated signed distance (via closest_t + normal)
float path_${e}_distance(vec2 p, vec2 source, vec2 target) {
  float closestT = path_${e}_closest_t(p, source, target);
  vec2 closest = path_${e}_position(closestT, source, target);
  vec2 diff = p - closest;
  float dist = length(diff);
  if (dist < 0.0001) return 0.0;

  // Get normal at closest point
  vec2 normal = path_${e}_normal(closestT, source, target);
  return dist * sign(dot(diff, normal));
}
`}function ni(e){return`
// Auto-generated t_at_distance (binary search)
float path_${e}_t_at_distance(float targetDist, vec2 source, vec2 target) {
  if (targetDist <= 0.0) return 0.0;

  float totalLen = path_${e}_length(source, target);
  if (targetDist >= totalLen) return 1.0;

  // Binary search for t
  float lo = 0.0, hi = 1.0;
  for (int i = 0; i < 12; i++) {
    float mid = (lo + hi) * 0.5;

    // Compute arc length from 0 to mid
    float arcLen = 0.0;
    vec2 prev = path_${e}_position(0.0, source, target);
    for (int j = 1; j <= 8; j++) {
      float t = mid * float(j) / 8.0;
      vec2 curr = path_${e}_position(t, source, target);
      arcLen += length(curr - prev);
      prev = curr;
    }

    if (arcLen < targetDist) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return (lo + hi) * 0.5;
}
`}function ri(e,t){return RegExp(`\\b(float|vec[234]|void|int|bool)\\s+${t}\\s*\\(`).test(e)}function ii(e,t){var n=[];return ri(t,`path_${e}_length`)||n.push($r(e)),ri(t,`path_${e}_closest_t`)||n.push(ei(e)),ri(t,`path_${e}_distance`)||n.push(ti(e)),ri(t,`path_${e}_t_at_distance`)||n.push(ni(e)),n.length>0?`
// ============================================================================
// Auto-generated fallback functions (path only provided position)
// ============================================================================
${n.join(`
`)}`:``}function ai(e){var t=e.paths,n=e.layers,r=e.extremities??[];if(t.length===0)throw Error(`At least one path is required in 'paths'`);if(n.length===0)throw Error(`At least one layer is required in 'layers'`);var i=e.defaultHead??`none`,a=e.defaultTail??`none`;return{paths:t,extremities:r,layers:n,path:t[0],layer:n[0],defaultHead:i,defaultTail:a}}function oi(e,t,n){var r=new Set(new Set([`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_zoomRatio`,`u_pixelRatio`,`u_cameraAngle`,`u_minEdgeThickness`,`u_pickingPadding`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_edgeDataTexture`,`u_edgeDataTextureWidth`,`u_edgeFrameTexture`,`u_edgeFrameTextureWidth`,`u_edgeAttributeTexture`,`u_edgeAttributeTextureWidth`,`u_edgeAttributeTexelsPerEdge`]));return e.forEach(function(e){return e.uniforms.forEach(function(e){return r.add(e.name)})}),t.forEach(function(e){return e.uniforms.forEach(function(e){return r.add(e.name)})}),n.forEach(function(e){return e.uniforms.forEach(function(e){return r.add(e.name)})}),Array.from(r)}function si(e){var t=new Set,n=[],r=U(e),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;t.has(a.name)||(t.add(a.name),n.push(`// Path: ${a.name}`),n.push(a.glsl),n.push(Zr(a.name)),n.push(ii(a.name,a.glsl)))}}catch(e){r.e(e)}finally{r.f()}return n.join(`

`)}function ci(e){var t=[],n=U(e),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;t.push(`// Extremity: ${i.name}`),t.push(i.glsl)}}catch(e){n.e(e)}finally{n.f()}return t.join(`

`)}function li(e,t){var n=t.queryName,r=t.pathFunc,i=t.returnType,a=t.params,o=t.args;return e.length===1?`${i} ${n}(int pathId, ${a}) {
  return path_${e[0].name}_${r}(${o});
}`:`${i} ${n}(int pathId, ${a}) {
  switch (pathId) {
${e.map(function(e,t){return`    case ${t}: return path_${e.name}_${r}(${o});`}).join(`
`)}
    default: return path_${e[0].name}_${r}(${o});
  }
}`}function ui(e){return Sa.map(function(t){return li(e,t)}).join(`

`)}function di(e){return e.length===1?`float queryExtremitySDF(int extremityId, vec2 uv, float lengthRatio, float widthRatio) {
  return extremity_${e[0].name}(uv, lengthRatio, widthRatio);
}`:`float queryExtremitySDF(int extremityId, vec2 uv, float lengthRatio, float widthRatio) {
  switch (extremityId) {
${e.map(function(e,t){return`    case ${t}: return extremity_${e.name}(uv, lengthRatio, widthRatio);`}).join(`
`)}
    default: return extremity_${e[0].name}(uv, lengthRatio, widthRatio);
  }
}`}function fi(e){var t=[],n=U(e),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;t.push(Yr(i.name)),t.push(Xr(i.name))}}catch(e){n.e(e)}finally{n.f()}if(e.length===1)t.push(`
float queryFindSourceClampT(int pathId, vec2 source, float sourceSize, int sourceShapeId, float sourceRotateAlign, vec2 target, float margin) {
  return findSourceClampT_${e[0].name}(source, sourceSize, sourceShapeId, sourceRotateAlign, target, margin);
}

float queryFindTargetClampT(int pathId, vec2 source, vec2 target, float targetSize, int targetShapeId, float targetRotateAlign, float margin) {
  return findTargetClampT_${e[0].name}(source, target, targetSize, targetShapeId, targetRotateAlign, margin);
}`);else{var a=e.map(function(e,t){return`    case ${t}: return findSourceClampT_${e.name}(source, sourceSize, sourceShapeId, sourceRotateAlign, target, margin);`}).join(`
`),o=e.map(function(e,t){return`    case ${t}: return findTargetClampT_${e.name}(source, target, targetSize, targetShapeId, targetRotateAlign, margin);`}).join(`
`);t.push(`
float queryFindSourceClampT(int pathId, vec2 source, float sourceSize, int sourceShapeId, float sourceRotateAlign, vec2 target, float margin) {
  switch (pathId) {
${a}
    default: return findSourceClampT_${e[0].name}(source, sourceSize, sourceShapeId, sourceRotateAlign, target, margin);
  }
}

float queryFindTargetClampT(int pathId, vec2 source, vec2 target, float targetSize, int targetShapeId, float targetRotateAlign, float margin) {
  switch (pathId) {
${o}
    default: return findTargetClampT_${e[0].name}(source, target, targetSize, targetShapeId, targetRotateAlign, margin);
  }
}`)}return t.join(`

`)}function pi(e,t,n,r,i){var a=Jr(mr([].concat(X(e),X(n)))),o=Cr(r,i),s=Object.keys(o.offsets),c=function(e){var t=o.specs[e].size;return t===1?`float`:`vec${t}`},l=s.map(function(e){return`${c(e)} v_source_${e};
${c(e)} v_target_${e};`}).join(`
`),u=_r(o,{varPrefix:`srcNodeAttr`,baseTexelExpr:`srcIdx * u_layerAttributeTexelsPerNode`,textureWidthUniform:`u_layerAttributeTextureWidth`,textureSamplerUniform:`u_layerAttributeTexture`,outputPrefix:`v_source_`}),d=_r(o,{varPrefix:`tgtNodeAttr`,baseTexelExpr:`tgtIdx * u_layerAttributeTexelsPerNode`,textureWidthUniform:`u_layerAttributeTextureWidth`,textureSamplerUniform:`u_layerAttributeTexture`,outputPrefix:`v_target_`}),f=s.map(function(e){return`${c(e)} g_${e};`}).join(`
`),p=s.map(function(e){return`  g_${e} = v_source_${e};`}).join(`
`),m=s.map(function(e){return`  g_${e} = v_target_${e};`}).join(`
`),h=new Set,g=[],_=function(e){h.has(e.name)||(h.add(e.name),g.push(`uniform ${e.type} ${e.name};`))};e.forEach(function(e){return e.uniforms.forEach(_)}),t.forEach(function(e){return e.uniforms.forEach(_)});var v=t.map(function(e){return Q(e.widthFactor)}).join(`, `),y=Math.max.apply(Math,X(e.map(function(e){return e.minBodyLengthRatio||0})));return`#version 300 es

// Node and edge data textures
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_edgeDataTexture;
uniform int u_edgeDataTextureWidth;

// Edge attribute texture (for path-specific attributes like curvature)
${a.uniformDeclarations}

// Node attribute texture (for node shape attributes)
uniform sampler2D u_layerAttributeTexture;
uniform int u_layerAttributeTextureWidth;
uniform int u_layerAttributeTexelsPerNode;

// Render params needed for clamping
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
uniform float u_minEdgeThickness;

// Edge-frame texture dimensions, for scattering each point to its texel
uniform float u_frameTextureWidth;
uniform float u_frameTextureHeight;

// Custom path/extremity uniforms
${g.join(`
`)}

// Path attribute varyings — assigned so path functions can read them as globals
${a.vertexVaryingDeclarations}

// Node size varyings — read by path functions like loop
out float v_sourceNodeSize;
out float v_targetNodeSize;

// Node shape attributes per endpoint, and the ones querySDF reads
${l}
${f}

// Scattered output written to the edge-frame texel: [tStart, tEnd, straightenFactor, pathLength]
out vec4 v_clamp;

// Extremity width factor array (needed for extremityScale computation)
const float EXTREMITY_WIDTH_FACTORS[${t.length}] = float[](${v});

// Node-data fetch helpers (geometry texel + rotation-flags texel)
${qi}
${Ji}

// Shape SDFs for node boundary clamping
${ar()}
${or(new Set(s))}

// Path functions
${si(e)}
${ui(e)}
${fi(e)}

void main() {
  // One point per edge-data row; the row index is the edge-frame texel target.
  int edgeIdx = gl_VertexID;
  int texel0Idx = edgeIdx * 2;
  int texel1Idx = edgeIdx * 2 + 1;
  ivec2 edgeTexCoord0 = ivec2(texel0Idx % u_edgeDataTextureWidth, texel0Idx / u_edgeDataTextureWidth);
  ivec2 edgeTexCoord1 = ivec2(texel1Idx % u_edgeDataTextureWidth, texel1Idx / u_edgeDataTextureWidth);
  vec4 edgeData0 = texelFetch(u_edgeDataTexture, edgeTexCoord0, 0);
  vec4 edgeData1 = texelFetch(u_edgeDataTexture, edgeTexCoord1, 0);

  int srcIdx = int(edgeData0.x);
  int tgtIdx = int(edgeData0.y);
  float a_thickness = edgeData0.z;
  float a_headLengthRatio = edgeData1.x;
  float a_tailLengthRatio = edgeData1.y;
  int pathId = int(edgeData1.z);
  int extremityPacked = int(edgeData1.w);
  int headId = extremityPacked >> 4;
  int tailId = extremityPacked & 15;

  // Fetch path/layer attributes and assign to path-function globals
${a.fetchCode}
${a.varyingAssignments}

  // Fetch node shape attributes for both endpoints
${u.fetchCode}
${u.varyingAssignments}
${d.fetchCode}
${d.varyingAssignments}

  // Fetch node geometry (texel 0) and rotation flags (texel 1).
  vec4 srcNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx);
  vec4 tgtNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx);

  vec2 a_source = srcNodeData.xy;
  vec2 a_target = tgtNodeData.xy;
  float a_sourceSize = srcNodeData.z;
  float a_targetSize = tgtNodeData.z;
  float a_sourceShapeId = srcNodeData.w;
  float a_targetShapeId = tgtNodeData.w;
  // Per-node rotation alignment (0 = viewport, 1 = graph), for boundary clamping.
  float a_sourceRotateAlign = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx).r;
  float a_targetRotateAlign = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx).r;

  v_sourceNodeSize = a_sourceSize;
  v_targetNodeSize = a_targetSize;

  float headLengthRatio = a_headLengthRatio;
  float tailLengthRatio = a_tailLengthRatio;
  float headWidthFactor = EXTREMITY_WIDTH_FACTORS[headId];
  float tailWidthFactor = EXTREMITY_WIDTH_FACTORS[tailId];
  float minBodyLengthRatio = ${Q(y)};

  // Thickness in WebGL units (needed to compute clamping margin and extremity lengths)
  float pixelsThickness = max(a_thickness, u_minEdgeThickness * u_sizeRatio);
  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;

  // SDF clamping: find where the edge body meets the node boundaries. Always
  // searched (ungated) so labels get a true boundary clamp; the body re-applies
  // its extremity gating in-shader.
${p}
  float tStart = queryFindSourceClampT(pathId, a_source, a_sourceSize, int(a_sourceShapeId), a_sourceRotateAlign, a_target, 0.0);
${m}
  float tEnd = queryFindTargetClampT(pathId, a_source, a_target, a_targetSize, int(a_targetShapeId), a_targetRotateAlign, 0.0);

  // straightenFactor (frame .z) is consumed only by the body, which runs to the
  // node center when an extremity is absent. Derive the straightening math from
  // these gated clamps — not the ungated boundary ones above — so it matches the
  // geometry it drives. The ungated tStart/tEnd remain what labels read.
  float bodyTStart = tailLengthRatio > 0.0 ? tStart : 0.0;
  float bodyTEnd = headLengthRatio > 0.0 ? tEnd : 1.0;

  // Path length and zone boundaries (needed for straightening check)
  float pathLength = queryPathLength(pathId, a_source, a_target);
  float visibleLength = pathLength * (bodyTEnd - bodyTStart);

  float headLength = headLengthRatio * webGLThickness;
  float tailLength = tailLengthRatio * webGLThickness;
  float minBodyLength = minBodyLengthRatio * webGLThickness;

  float totalNeededLength = headLength + tailLength + minBodyLength;
  float extremityScale = 1.0;
  if (totalNeededLength > visibleLength && totalNeededLength > 0.0001) {
    extremityScale = visibleLength / totalNeededLength;
    headLength *= extremityScale;
    tailLength *= extremityScale;
  }

  float headLengthT = pathLength > 0.0001 ? headLength / pathLength : 0.0;
  float tailLengthT = pathLength > 0.0001 ? tailLength / pathLength : 0.0;

  float tTailEnd = bodyTStart + tailLengthT;
  float tHeadStart = bodyTEnd - headLengthT;
  if (tTailEnd > tHeadStart) {
    float mid = (bodyTStart + bodyTEnd) * 0.5;
    tTailEnd = mid;
    tHeadStart = mid;
  }

  // Straighten factor: blend toward straight line when path twists in extremity zones
  float straightenFactor = 0.0;
  {
    float maxDeviation = 0.0;
    if (tailLengthT > 0.0001) {
      vec2 tailTang = queryPathTangent(pathId, tTailEnd, a_source, a_target);
      vec2 tailChord = queryPathPosition(pathId, bodyTStart, a_source, a_target)
                     - queryPathPosition(pathId, tTailEnd, a_source, a_target);
      float tailChordLen = length(tailChord);
      if (tailChordLen > 0.0001) {
        maxDeviation = max(maxDeviation, 1.0 - dot(-tailTang, tailChord / tailChordLen));
      }
    }
    if (headLengthT > 0.0001) {
      vec2 headTang = queryPathTangent(pathId, tHeadStart, a_source, a_target);
      vec2 headChord = queryPathPosition(pathId, bodyTEnd, a_source, a_target)
                     - queryPathPosition(pathId, tHeadStart, a_source, a_target);
      float headChordLen = length(headChord);
      if (headChordLen > 0.0001) {
        maxDeviation = max(maxDeviation, 1.0 - dot(headTang, headChord / headChordLen));
      }
    }
    straightenFactor = smoothstep(0.035, 0.5, maxDeviation);
  }

  // When straightening, blend the ungated tStart/tEnd (the label-facing clamps)
  // toward straight-line clamp positions.
  if (straightenFactor > 0.001) {
    if (tailLengthRatio > 0.0) {
${p}
      float srcExtent = a_sourceSize * u_correctionRatio / u_sizeRatio * 2.0;
      float srcEffective = 1.0 - u_correctionRatio / srcExtent;
      float srcCa = u_cameraAngle * (1.0 - a_sourceRotateAlign);
      mat2 srcRot = mat2(cos(srcCa), -sin(srcCa), sin(srcCa), cos(srcCa));
      float lo = 0.0, hi = 0.5;
      for (int i = 0; i < 12; i++) {
        float mid = (lo + hi) * 0.5;
        vec2 pos = mix(a_source, a_target, mid);
        vec2 localPos = srcRot * ((pos - a_source) / srcExtent);
        float sdf = querySDF(int(a_sourceShapeId), localPos, srcEffective);
        if (sdf < 0.0) lo = mid; else hi = mid;
      }
      tStart = mix(tStart, (lo + hi) * 0.5, straightenFactor);
    }
    if (headLengthRatio > 0.0) {
${m}
      float tgtExtent = a_targetSize * u_correctionRatio / u_sizeRatio * 2.0;
      float tgtEffective = 1.0 - u_correctionRatio / tgtExtent;
      float tgtCa = u_cameraAngle * (1.0 - a_targetRotateAlign);
      mat2 tgtRot = mat2(cos(tgtCa), -sin(tgtCa), sin(tgtCa), cos(tgtCa));
      float lo = 0.5, hi = 1.0;
      for (int i = 0; i < 12; i++) {
        float mid = (lo + hi) * 0.5;
        vec2 pos = mix(a_source, a_target, mid);
        vec2 localPos = tgtRot * ((pos - a_target) / tgtExtent);
        float sdf = querySDF(int(a_targetShapeId), localPos, tgtEffective);
        if (sdf < 0.0) hi = mid; else lo = mid;
      }
      tEnd = mix(tEnd, (lo + hi) * 0.5, straightenFactor);
    }
  }

  v_clamp = vec4(tStart, tEnd, straightenFactor, pathLength);

  // Scatter this point to its edge's texel center in the frame texture.
  float x = mod(float(edgeIdx), u_frameTextureWidth);
  float y = floor(float(edgeIdx) / u_frameTextureWidth);
  vec2 ndc = (vec2(x, y) + 0.5) / vec2(u_frameTextureWidth, u_frameTextureHeight) * 2.0 - 1.0;
  gl_Position = vec4(ndc, 0.0, 1.0);
  gl_PointSize = 1.0;
}
`}function mi(e,t,n){var r=[];n&&(r.push([Ca,0,-1],[Ca,0,1]),r.push([Ca,1,-1],[Ca,1,1]));for(var i=0;i<=e;i++){var a=i/e;r.push([wa,a,-1],[wa,a,1])}return t&&(r.push([Ta,0,-1],[Ta,0,1]),r.push([Ta,1,-1],[Ta,1,1])),{data:r,attributes:[{name:`a_zone`,size:1,type:ba},{name:`a_zoneT`,size:1,type:ba},{name:`a_side`,size:1,type:ba}],verticesPerEdge:r.length}}function hi(e,t,n,r){var i=Jr(mr([].concat(X(e),X(n)))),a=new Set([`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_zoomRatio`,`u_pixelRatio`,`u_cameraAngle`,`u_minEdgeThickness`,`u_pickingPadding`,`u_nodeDataTexture`]),o=new Set,s=[],c=function(e){!a.has(e.name)&&!o.has(e.name)&&(o.add(e.name),s.push(`uniform ${e.type} ${e.name};`))};e.forEach(function(e){return e.uniforms.forEach(c)}),t.forEach(function(e){return e.uniforms.forEach(c)}),n.forEach(function(e){return e.uniforms.forEach(c)});var l=r.map(function(e){return`in ${e.size===1?`float`:`vec${e.size}`} ${e.name};`}).join(`
`),u=t.map(function(e){return Q(e.widthFactor)}).join(`, `),d=Math.max.apply(Math,X(e.map(function(e){return e.minBodyLengthRatio||0}))),f=n.some(function(e){return e.needsNodeColors}),p=e.some(function(e){return e.needsNodeSize});return`#version 300 es

// Constant attributes (per vertex)
${l}

// Per-edge attributes
// Edge data (source/target indices, thickness, extremity ratios, path/extremity IDs)
// is fetched from edge data texture via edge index
in float a_edgeIndex;   // Index into edge data texture
in vec4 a_color;        // Edge color
in vec4 a_id;           // Edge ID for picking
in float a_opacity;     // Edge opacity

// Standard uniforms
uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_zoomRatio;
uniform float u_pixelRatio;
uniform float u_cameraAngle;
uniform float u_minEdgeThickness;
#ifdef PICKING_MODE
uniform float u_pickingPadding;
#endif
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_edgeDataTexture;
uniform int u_edgeDataTextureWidth;
uniform sampler2D u_edgeFrameTexture;
uniform int u_edgeFrameTextureWidth;

// Edge path attribute texture uniforms
${i.uniformDeclarations}

// Custom uniforms
${s.join(`
`)}

// Standard varyings
out vec4 v_color;
out float v_opacity;
out vec4 v_id;
out float v_thickness;       // Edge body thickness (in consistent units)
out float v_t;
out float v_tStart;
out float v_tEnd;
out float v_side;
out float v_antialiasingWidth;  // Anti-aliasing width (normalized: u_correctionRatio / thickness)
out vec2 v_source;
out vec2 v_target;
out float v_edgeLength;
${p?`
out float v_sourceNodeSize;  // Source node size (mirrored in labels/generator.ts as plain float)
out float v_targetNodeSize;  // Target node size (mirrored in labels/generator.ts as plain float)`:``}
${f?`
out vec4 v_sourceColor;
out vec4 v_targetColor;`:``}
// Zone varyings
out float v_zone;            // 0=tail, 1=body, 2=head
out float v_zoneT;           // Position within zone [0,1]
out float v_headLengthRatio; // Head length as ratio of thickness
out float v_tailLengthRatio; // Tail length as ratio of thickness
out float v_headWidthRatio;  // Head width factor
out float v_tailWidthRatio;  // Tail width factor

// Multi-path/extremity varyings
flat out int v_pathId;
flat out int v_headId;
flat out int v_tailId;

// Path/layer attribute varyings (fetched from edge attribute texture)
${i.vertexVaryingDeclarations}

const float bias = 255.0 / 254.0;

// Width factor array for extremities (shared pool for head/tail)
const float EXTREMITY_WIDTH_FACTORS[${t.length}] = float[](${u});

// All path functions
${si(e)}

// Path selector functions
${ui(e)}

// Node-data fetch helper (geometry texel of the two-texel node stride)
${qi}
${f?Yi:``}
// Per-edge clamp from the frame-pass (tStart, tEnd, straightenFactor, pathLength)
${Xi}

void main() {
  // Fetch edge data from edge texture (2 texels per edge)
  // Texel 0: sourceNodeIndex, targetNodeIndex, thickness, reserved
  // Texel 1: headLengthRatio, tailLengthRatio, pathId, (headId << 4) | tailId
  int edgeIdx = int(a_edgeIndex);

  // Hidden edges are flagged with a negative row by EdgeProgram.process(). Push
  // the whole primitive outside the clip volume: every vertex lands at the same
  // out-of-range position, so it is fully clipped and rasterizes nothing —
  // neither to the frame buffer nor to the picking buffer.
  if (edgeIdx < 0) {
    gl_Position = vec4(2.0, 0.0, 0.0, 1.0);
    v_color = vec4(0.0);
    v_id = vec4(0.0);
    return;
  }

  int texel0Idx = edgeIdx * 2;
  int texel1Idx = edgeIdx * 2 + 1;
  ivec2 edgeTexCoord0 = ivec2(texel0Idx % u_edgeDataTextureWidth, texel0Idx / u_edgeDataTextureWidth);
  ivec2 edgeTexCoord1 = ivec2(texel1Idx % u_edgeDataTextureWidth, texel1Idx / u_edgeDataTextureWidth);
  vec4 edgeData0 = texelFetch(u_edgeDataTexture, edgeTexCoord0, 0);
  vec4 edgeData1 = texelFetch(u_edgeDataTexture, edgeTexCoord1, 0);

  // Unpack edge data
  int srcIdx = int(edgeData0.x);
  int tgtIdx = int(edgeData0.y);
  float a_thickness = edgeData0.z;
  // edgeData0.w is now reserved (curvature moved to path attribute texture)
  float a_headLengthRatio = edgeData1.x;
  float a_tailLengthRatio = edgeData1.y;
  int pathId = int(edgeData1.z);
  int extremityPacked = int(edgeData1.w);
  int headId = extremityPacked >> 4;
  int tailId = extremityPacked & 15;

  // Fetch path/layer attributes from edge attribute texture
${i.fetchCode}

  // Assign path/layer attribute varyings
${i.varyingAssignments}

  // Fetch source and target node geometry (texel 0 of the two-texel node stride)
  vec4 srcNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx);
  vec4 tgtNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx);

  vec2 a_source = srcNodeData.xy;
  vec2 a_target = tgtNodeData.xy;
${p?`
  // Assign node size varyings early (path functions like loops need them during clamping)
  v_sourceNodeSize = srcNodeData.z;
  v_targetNodeSize = tgtNodeData.z;`:``}
${f?`
  v_sourceColor = readNodeColor(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx);
  v_targetColor = readNodeColor(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx);`:``}

  // Convert thickness to WebGL units
  float minThickness = u_minEdgeThickness;
  float pixelsThickness = max(a_thickness, minThickness * u_sizeRatio);
  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;

  // Extremity parameters from ID lookups (shared pool)
  float headLengthRatio = a_headLengthRatio;
  float tailLengthRatio = a_tailLengthRatio;
  float headWidthFactor = EXTREMITY_WIDTH_FACTORS[headId];
  float tailWidthFactor = EXTREMITY_WIDTH_FACTORS[tailId];
  float minBodyLengthRatio = ${Q(d)};

  // Per-edge values from the frame-pass texture (read by edge index).
  // tStart/tEnd are the ungated boundary clamps: re-apply the body's extremity
  // gating here (no extremity → body runs to the node center, 0/1).
  vec4 frameClamp = readFrameTexel(u_edgeFrameTexture, u_edgeFrameTextureWidth, edgeIdx);
  float tStart           = a_tailLengthRatio > 0.0 ? frameClamp.x : 0.0;
  float tEnd             = a_headLengthRatio > 0.0 ? frameClamp.y : 1.0;
  float straightenFactor = frameClamp.z;
  float pathLength       = frameClamp.w;

  // Anti-aliasing width (~1 pixel, normalized by thickness)
  float antialiasingWidth = u_correctionRatio / webGLThickness;

  float visibleLength = pathLength * (tEnd - tStart);

  // Compute extremity lengths in world units
  float headLength = headLengthRatio * webGLThickness;
  float tailLength = tailLengthRatio * webGLThickness;
  float minBodyLength = minBodyLengthRatio * webGLThickness;

  // Handle short edges: scale down extremities if needed
  float totalNeededLength = headLength + tailLength + minBodyLength;
  float extremityScale = 1.0;
  if (totalNeededLength > visibleLength && totalNeededLength > 0.0001) {
    extremityScale = visibleLength / totalNeededLength;
    headLength *= extremityScale;
    tailLength *= extremityScale;
  }

  // Convert lengths to t-values
  float headLengthT = pathLength > 0.0001 ? headLength / pathLength : 0.0;
  float tailLengthT = pathLength > 0.0001 ? tailLength / pathLength : 0.0;

  // Zone boundaries in t-space
  float tTailEnd = tStart + tailLengthT;
  float tHeadStart = tEnd - headLengthT;

  // Ensure body has non-negative length
  if (tTailEnd > tHeadStart) {
    float mid = (tStart + tEnd) * 0.5;
    tTailEnd = mid;
    tHeadStart = mid;
  }

  // Convert to webGL units for geometry expansion
  float aaWidthWebGL = antialiasingWidth * webGLThickness;

  // Extra geometry width for picking padding (0 in visual mode)
  #ifdef PICKING_MODE
    float pickingPaddingWebGL = u_pickingPadding * u_correctionRatio;
  #else
    float pickingPaddingWebGL = 0.0;
  #endif

  // Straight-line direction and normal (for blending when straightenFactor > 0)
  vec2 straightDir = length(a_target - a_source) > 0.0001
    ? normalize(a_target - a_source) : vec2(1.0, 0.0);
  vec2 straightNormal = vec2(-straightDir.y, straightDir.x);

  // Zone-based vertex processing using path selectors
  vec2 position;
  vec2 normal;
  float t;
  float zone = a_zone;
  float zoneT = a_zoneT;
  float side = a_side;

  // Scaled extremity width factors (geometry must be at least as wide as body)
  float scaledTailWidth = max(tailWidthFactor * extremityScale, 1.0);
  float scaledHeadWidth = max(headWidthFactor * extremityScale, 1.0);

  if (zone < 0.5) {
    // TAIL ZONE: rectangular quad with scaled width
    vec2 tang = queryPathTangent(pathId, tTailEnd, a_source, a_target);
    normal = vec2(-tang.y, tang.x);
    vec2 centerPos = mix(queryPathPosition(pathId, tStart, a_source, a_target),
                         queryPathPosition(pathId, tTailEnd, a_source, a_target), zoneT);
    float halfWidth = webGLThickness * scaledTailWidth * 0.5 + aaWidthWebGL + pickingPaddingWebGL;
    position = centerPos + normal * side * halfWidth;
    t = mix(tStart, tTailEnd, zoneT);

  } else if (zone < 1.5) {
    // BODY ZONE: follows path curvature with width = 1.0
    t = mix(tTailEnd, tHeadStart, zoneT);
    normal = queryPathNormal(pathId, t, a_source, a_target);
    float halfWidth = webGLThickness * 0.5 + aaWidthWebGL + pickingPaddingWebGL;
    position = queryPathPosition(pathId, t, a_source, a_target) + normal * side * halfWidth;

  } else {
    // HEAD ZONE: rectangular quad with scaled width
    vec2 tang = queryPathTangent(pathId, tHeadStart, a_source, a_target);
    normal = vec2(-tang.y, tang.x);
    vec2 centerPos = mix(queryPathPosition(pathId, tHeadStart, a_source, a_target),
                         queryPathPosition(pathId, tEnd, a_source, a_target), zoneT);
    float halfWidth = webGLThickness * scaledHeadWidth * 0.5 + aaWidthWebGL + pickingPaddingWebGL;
    position = centerPos + normal * side * halfWidth;
    t = mix(tHeadStart, tEnd, zoneT);
  }

  // Blend toward straight line based on path twist in extremity zones
  if (straightenFactor > 0.001) {
    float zoneWidth = zone < 0.5 ? webGLThickness * scaledTailWidth * 0.5 + aaWidthWebGL + pickingPaddingWebGL :
                      zone < 1.5 ? webGLThickness * 0.5 + aaWidthWebGL + pickingPaddingWebGL :
                      webGLThickness * scaledHeadWidth * 0.5 + aaWidthWebGL + pickingPaddingWebGL;
    vec2 straightPos = mix(a_source, a_target, t) + straightNormal * side * zoneWidth;
    position = mix(position, straightPos, straightenFactor);
  }

  gl_Position = vec4((u_matrix * vec3(position, 1.0)).xy, 0.0, 1.0);

  // Pass varyings to fragment shader
  v_color = a_color;
  v_color.a *= bias;
  v_opacity = a_opacity;
  v_id = a_id;
  v_thickness = webGLThickness;
  v_t = t;
  v_tStart = tStart;
  v_tEnd = tEnd;
  v_side = side;
  v_antialiasingWidth = antialiasingWidth;
  v_source = a_source;
  v_target = a_target;
  v_edgeLength = pathLength;

  // Zone varyings
  v_zone = zone;
  v_zoneT = zoneT;
  v_headLengthRatio = headLengthRatio * extremityScale;
  v_tailLengthRatio = tailLengthRatio * extremityScale;
  // Scale extremity width proportionally with length when crushed
  v_headWidthRatio = headWidthFactor * extremityScale;
  v_tailWidthRatio = tailWidthFactor * extremityScale;

  // Multi-path varyings
  v_pathId = pathId;
  v_headId = headId;
  v_tailId = tailId;
}
`}function gi(e,t,n,r){var i=Jr(mr([].concat(X(e),X(n)))),a=new Set([`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_zoomRatio`,`u_pixelRatio`,`u_cameraAngle`,`u_minEdgeThickness`,`u_pickingPadding`]),o=new Set,s=[],c=function(e){!a.has(e.name)&&!o.has(e.name)&&(o.add(e.name),s.push(`uniform ${e.type} ${e.name};`))};e.forEach(function(e){return e.uniforms.forEach(c)}),t.forEach(function(e){return e.uniforms.forEach(c)}),n.forEach(function(e){return e.uniforms.forEach(c)});var l=t.map(function(e){return Q(e.baseRatio??.5)}).join(`, `),u=function(e){return t.length>1?`EXTREMITY_BASE_RATIOS[${e}]`:Q(t[0]?.baseRatio??.5)},d=t.some(function(e){return Mn(e.length)?!0:e.length>0}),f=n.some(function(e){return e.needsNodeColors}),p=e.some(function(e){return e.needsNodeSize}),m=n.map(function(e,t){return`  // Layer ${t+1}: ${e.name}
  color = blendOver(color, layer_${e.name}(context));`}).join(`

`);return`#version 300 es
precision highp float;

// Standard varyings
in vec4 v_color;
in float v_opacity;
in vec4 v_id;
in float v_thickness;       // Edge body thickness
in float v_t;
in float v_tStart;
in float v_tEnd;
in float v_side;
in float v_antialiasingWidth;  // Anti-aliasing width (normalized: u_correctionRatio / thickness)
in vec2 v_source;
in vec2 v_target;
in float v_edgeLength;
${p?`
in float v_sourceNodeSize;   // Source node size (mirrored in labels/generator.ts as plain float)
in float v_targetNodeSize;   // Target node size (mirrored in labels/generator.ts as plain float)`:``}
${f?`
in vec4 v_sourceColor;
in vec4 v_targetColor;`:``}
// Zone varyings
in float v_zone;            // 0=tail, 1=body, 2=head
in float v_zoneT;           // Position within zone [0,1]
in float v_headLengthRatio; // Head length as ratio of thickness (scaled for short edges)
in float v_tailLengthRatio; // Tail length as ratio of thickness (scaled for short edges)
in float v_headWidthRatio;  // Head width factor
in float v_tailWidthRatio;  // Tail width factor

// Multi-path/extremity varyings
flat in int v_pathId;
flat in int v_headId;
flat in int v_tailId;

// Path/layer attribute varyings (from vertex shader texture fetch)
${i.fragmentVaryingDeclarations}

// Standard uniforms (needed by some path types)
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
#ifdef PICKING_MODE
uniform float u_pickingPadding;
#endif

// Custom uniforms
${s.join(`
`)}

// Fragment output (single target - picking handled via separate pass)
out vec4 fragColor;

${t.length>1?`// Base ratio array for extremities (shared pool for head/tail)
const float EXTREMITY_BASE_RATIOS[${t.length}] = float[](${l});`:``}

// EdgeContext struct
struct EdgeContext {
  float t;                   // Position along path [0, 1]
  float sdf;                 // Signed distance from centerline
  vec2 position;             // World position
  vec2 tangent;              // Path tangent
  vec2 normal;               // Path normal
  float thickness;           // Edge thickness
  float aaWidth;             // Anti-aliasing width
  float edgeLength;          // Total path length
  float tStart;              // Clamped start t
  float tEnd;                // Clamped end t
  float distanceFromSource;  // Arc distance from source
  float distanceToTarget;    // Arc distance to target
};

EdgeContext context;

// Alpha "over" compositing for layer blending
vec4 blendOver(vec4 bg, vec4 fg) {
  float a = fg.a;
  return vec4(mix(bg.rgb, fg.rgb, a), bg.a + a * (1.0 - bg.a));
}

// All path functions
${si(e)}

// Path selector functions
${ui(e)}

// All extremity functions
${ci(t)}

// Extremity SDF selector (shared pool for head/tail)
${di(t)}

// Layer functions
${n.map(function(e){return e.glsl}).join(`

`)}

// Helper: Compute arc length using path selector
float computeArcLengthMulti(int pathId, float t0, float t1, vec2 source, vec2 target, int samples) {
  float arcLen = 0.0;
  vec2 prev = queryPathPosition(pathId, t0, source, target);
  for (int i = 1; i <= samples; i++) {
    float t = t0 + (t1 - t0) * float(i) / float(samples);
    vec2 curr = queryPathPosition(pathId, t, source, target);
    arcLen += length(curr - prev);
    prev = curr;
  }
  return arcLen;
}

void main() {
  // Compute normalized t within visible edge (0 = start, 1 = end)
  float tNorm = (v_t - v_tStart) / max(v_tEnd - v_tStart, 0.0001);

  // Edge body half-thickness
  float halfThickness = v_thickness * 0.5;

  // Convert normalized AA width to webGL units (~1 pixel)
  float aaWidthWebGL = v_antialiasingWidth * v_thickness;

  // Distance from centerline based on v_side interpolation
  float zoneWidthFactor = v_zone < 0.5 ? v_tailWidthRatio :
                          v_zone < 1.5 ? 1.0 :
                          v_headWidthRatio;
  // In PICKING_MODE, inflate halfGeometryWidth to match the inflated vertex geometry
  #ifdef PICKING_MODE
    float halfGeometryWidth = halfThickness * zoneWidthFactor + aaWidthWebGL + u_pickingPadding * aaWidthWebGL;
  #else
    float halfGeometryWidth = halfThickness * zoneWidthFactor + aaWidthWebGL;
  #endif
  float distFromCenter = abs(v_side) * halfGeometryWidth;

  // Populate EdgeContext (for layer functions)
  context.t = tNorm;
  context.sdf = distFromCenter - halfThickness;
  context.position = queryPathPosition(v_pathId, v_t, v_source, v_target);
  context.tangent = queryPathTangent(v_pathId, v_t, v_source, v_target);
  context.normal = vec2(-context.tangent.y, context.tangent.x);
  context.thickness = v_thickness;
  context.aaWidth = aaWidthWebGL;
  context.edgeLength = v_edgeLength;
  context.tStart = v_tStart;
  context.tEnd = v_tEnd;

  // Compute arc distances
  float visibleLength = v_edgeLength * (v_tEnd - v_tStart);
  float pathT = v_t;
  float pathTNorm = tNorm;
${e.every(function(e){return e.linearParameterization})?`  // All paths have linear parameterization: t maps directly to arc distance
  context.distanceFromSource = pathTNorm * visibleLength;
  context.distanceToTarget = (1.0 - pathTNorm) * visibleLength;`:e.every(function(e){return!e.linearParameterization})?`  // No paths have linear parameterization: use numerical integration
  context.distanceFromSource = computeArcLengthMulti(v_pathId, v_tStart, pathT, v_source, v_target, 16);
  context.distanceToTarget = computeArcLengthMulti(v_pathId, pathT, v_tEnd, v_source, v_target, 16);`:`  // Mixed parameterization: use analytical for linear paths, numerical for others
  if (${e.filter(function(e){return e.linearParameterization}).map(function(t){return`v_pathId == ${e.indexOf(t)}`}).join(` || `)}) {
    context.distanceFromSource = pathTNorm * visibleLength;
    context.distanceToTarget = (1.0 - pathTNorm) * visibleLength;
  } else {
    context.distanceFromSource = computeArcLengthMulti(v_pathId, v_tStart, pathT, v_source, v_target, 16);
    context.distanceToTarget = computeArcLengthMulti(v_pathId, pathT, v_tEnd, v_source, v_target, 16);
  }`}

  // Compute SDF based on zone using extremity selector (shared pool)
  float bodySDF = distFromCenter - halfThickness;
  float finalSDF;

${d?`  // Base ratios, from baseRatioLookup
  float headBaseRatio = ${u(`v_headId`)};
  float tailBaseRatio = ${u(`v_tailId`)};

  if (v_zone < 0.5) {
    // TAIL ZONE: v_zoneT goes 0 (tip) to 1 (base)
    vec2 uv = vec2((1.0 - v_zoneT) * v_tailLengthRatio, v_side * v_tailWidthRatio * 0.5);
    float tailSDF = queryExtremitySDF(v_tailId, uv, v_tailLengthRatio, v_tailWidthRatio) * v_thickness;

    // Apply union only near base (v_zoneT > 1 - baseRatio)
    if (v_zoneT > 1.0 - tailBaseRatio) {
      finalSDF = min(tailSDF, bodySDF);
    } else {
      finalSDF = tailSDF;
    }
  } else if (v_zone < 1.5) {
    // BODY ZONE: distance from centerline
    finalSDF = bodySDF;
  } else {
    // HEAD ZONE: v_zoneT goes 0 (base) to 1 (tip)
    vec2 uv = vec2(v_zoneT * v_headLengthRatio, v_side * v_headWidthRatio * 0.5);
    float headSDF = queryExtremitySDF(v_headId, uv, v_headLengthRatio, v_headWidthRatio) * v_thickness;

    // Apply union only near base (v_zoneT < baseRatio)
    if (v_zoneT < headBaseRatio) {
      finalSDF = min(headSDF, bodySDF);
    } else {
      finalSDF = headSDF;
    }
  }`:`  // No extremity draws tail/head geometry, so every vertex is body zone.
  finalSDF = bodySDF;`}

  #ifdef PICKING_MODE
    // Picking pass: output edge ID for pixels within the picking area
    if (finalSDF > u_pickingPadding * aaWidthWebGL) discard;
    fragColor = v_id;
  #else
${r?`    // Visual pass: anti-aliased edge with layers, edge opacity applied once
    float alpha = smoothstep(aaWidthWebGL, -aaWidthWebGL, finalSDF) * v_opacity;`:`    // Visual pass: hard-edged (no anti-aliasing gradient) edge with layers, edge opacity applied once
    float alpha = (finalSDF < 0.0 ? 1.0 : 0.0) * v_opacity;`}
    if (alpha < 0.01) discard;

    // Apply layers sequentially with "over" compositing
    vec4 color = vec4(0.0);

${m}

    // Mix with transparent to fade both color AND alpha (pre-multiplied alpha for correct blending)
    fragColor = mix(vec4(0.0), color, alpha);
  #endif
}
`}function _i(e,t,n){var r=Mn(t.length)?!0:t.length>0,i=Mn(n.length)?!0:n.length>0;if(e.generateConstantData){var a=e.generateConstantData();return{data:a.data,attributes:a.attributes,verticesPerEdge:a.verticesPerEdge}}return mi(e.segments,r,i)}function vi(e){var t=ai(e),n=t.paths,r=t.extremities,i=t.layers,a=e.antialias??!0,o=new Map,s=new Map,c=new Map,l=U(n),u;try{for(l.s();!(u=l.n()).done;){var d=u.value,f=U(r),p;try{for(f.s();!(p=f.n()).done;){var m=p.value,h=U(r),g;try{for(h.s();!(g=h.n()).done;){var _=g.value,v=`${d.name}:${m.name}:${_.name}`,y=_i(d,m,_);o.set(v,y.verticesPerEdge),s.set(v,y.data);var b=U(y.attributes),x;try{for(b.s();!(x=b.n()).done;){var S=x.value;c.has(S.name)||c.set(S.name,S)}}catch(e){b.e(e)}finally{b.f()}}}catch(e){h.e(e)}finally{h.f()}}}catch(e){f.e(e)}finally{f.f()}}}catch(e){l.e(e)}finally{l.f()}var C=Array.from(c.values()),w={};C.forEach(function(e,t){w[e.name]=t});var T=0,E=``,D=U(o),O;try{for(D.s();!(O=D.n()).done;){var k=H(O.value,2),A=k[0],j=k[1];j>T&&(T=j,E=A)}}catch(e){D.e(e)}finally{D.f()}var M=s.get(E)||[],N=H(E.split(`:`),1)[0],P=n.find(function(e){return e.name===N}),F=[];F=P!=null&&P.generateConstantData?P.generateConstantData().attributes:[{name:`a_zone`},{name:`a_zoneT`},{name:`a_side`}];var ee=M.map(function(e){var t=Array(C.length).fill(0);return F.forEach(function(n,r){var i=w[n.name];i!==void 0&&r<e.length&&(t[i]=e[r])}),t});return{vertexShader:hi(n,r,i,C),fragmentShader:gi(n,r,i,a),uniforms:oi(n,r,i),attributes:yi(),verticesPerEdge:T,constantData:ee,constantAttributes:C,vertexCountsPerCombination:o,constantDataPerCombination:s}}function yi(e,t,n){return[{name:`a_edgeIndex`,size:1,type:ba},{name:`a_color`,size:4,type:xa,normalized:!0},{name:`a_id`,size:4,type:xa,normalized:!0},{name:`a_opacity`,size:1,type:ba}]}function bi(e,t,n,r,i,a){return e.length===1?`${r} ${t}(int pathId, ${i}) {
  return path_${e[0].name}_${n}(${a});
}`:`${r} ${t}(int pathId, ${i}) {
  switch (pathId) {
${e.map(function(e,t){return`    case ${t}: return path_${e.name}_${n}(${a});`}).join(`
`)}
    default: return path_${e[0].name}_${n}(${a});
  }
}`}function xi(e,t){var n=Q(e),r=Q(t);return`
float computeEdgeLabelAlpha(float bodyLength, float textWidthWebGL) {
  float ratio = textWidthWebGL > 0.0001 ? min(bodyLength / textWidthWebGL, 1.0) : 1.0;
  if (ratio < ${n}) return 0.0;
  if (ratio < ${r}) return (ratio - ${n}) / (${r} - ${n});
  return 1.0;
}
`}function Si(e){var t=e.paths,n=e.minVisibilityThreshold,r=e.fullVisibilityThreshold,i=t.some(function(e){return e.hasSharpCorners}),a=t.map(function(e){return`// --- Path: ${e.name} ---
${e.glsl}

// Tangent/normal functions: analytical if provided, otherwise numerical
${e.analyticalTangentGlsl||Zr(e.name)}

// Auto-generated fallbacks for any missing path functions
${ii(e.name,e.glsl)}

// Corner skip helpers (for paths with sharp corners like step/taxi)
${e.cornerSkipGlsl||``}
`}).join(`
`),o=i?`// Corner function selectors (only some paths have sharp corners)
vec2 queryGetCornerTs(int pathId, vec2 source, vec2 target) {
  switch (pathId) {
${t.map(function(e,t){return e.hasSharpCorners?`    case ${t}: return path_${e.name}_getCornerTs(source, target);`:`    case ${t}: return vec2(-1.0, -1.0); // No corners for ${e.name}`}).join(`
`)}
    default: return vec2(-1.0, -1.0);
  }
}

vec2 queryGetCornerConcavity(int pathId, vec2 source, vec2 target, float perpOffset) {
  switch (pathId) {
${t.map(function(e,t){return e.hasSharpCorners?`    case ${t}: return path_${e.name}_getCornerConcavity(source, target, perpOffset);`:`    case ${t}: return vec2(0.0, 0.0); // No corners for ${e.name}`}).join(`
`)}
    default: return vec2(0.0, 0.0);
  }
}`:``;return`
// ============================================================================
// Node data fetch (geometry texel) and per-edge clamp fetch (edge-frame texture)
// ============================================================================

${qi}
${Xi}

// ============================================================================
// Path Functions (one block per path)
// ============================================================================

${a}

// ============================================================================
// Path Query Selectors (dispatch by pathId)
// ============================================================================

${bi(t,`queryPathPosition`,`position`,`vec2`,`float t, vec2 source, vec2 target`,`t, source, target`)}

${bi(t,`queryPathTangent`,`tangent`,`vec2`,`float t, vec2 source, vec2 target`,`t, source, target`)}

${bi(t,`queryPathNormal`,`normal`,`vec2`,`float t, vec2 source, vec2 target`,`t, source, target`)}

${bi(t,`queryPathLength`,`length`,`float`,`vec2 source, vec2 target`,`source, target`)}

${bi(t,`queryPathTAtDistance`,`t_at_distance`,`float`,`float dist, vec2 source, vec2 target`,`dist, source, target`)}

${o}

// ============================================================================
// Shared helpers (body bounds, alpha ramp, screen direction, perpendicular offset)
// ============================================================================

${Oa}
${xi(n,r)}
${ka}
${Aa}
`}function Ci(e){var t=e.paths,n=e.fontSizeMode,r=e.headLengthRatio,i=e.tailLengthRatio,a=e.minVisibilityThreshold,o=e.fullVisibilityThreshold,s=e.keepUpright,c=n===`scaled`,l=In(),u=Jr(mr([].concat(X(t),[l])));return`#version 300 es

// Per-instance attributes
in float a_edgeIndex;
in float a_edgeAttrIndex;
in float a_baseFontSize;
in float a_totalTextWidth;
in float a_positionMode;
in float a_margin;
in float a_padding;
in vec4 a_color;
in vec4 a_id;

// Per-vertex (constant) attribute: strip vertex index
in float a_vertexIndex;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_pixelRatio;
uniform float u_cameraAngle;
uniform vec2 u_resolution;
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_edgeDataTexture;
uniform int u_edgeDataTextureWidth;
uniform sampler2D u_edgeFrameTexture; // Per-edge clamp (tStart, tEnd, straightenFactor, pathLength)
uniform int u_edgeFrameTextureWidth;
${c?`uniform float u_zoomSizeRatio;`:``}

${u.uniformDeclarations}

out vec4 v_color;
out vec4 v_id;
out float v_alphaModifier;

const float ATLAS_FONT_SIZE = ${Q(ja)};
const float HEAD_RATIO = ${Q(r)};
const float TAIL_RATIO = ${Q(i)};
const int RIBBON_SEGMENTS = ${Na};

// Path attribute varyings (declared as plain locals since this shader has no FS inputs for them)
${u.vertexVaryingDeclarations.replace(/out /g,``)}

// Node size variables used by some path functions (self-loops, etc.)
float v_sourceNodeSize;
float v_targetNodeSize;

// Shared preamble: shape SDFs, path functions + selectors, clamp, helpers.
${Si({paths:t,minVisibilityThreshold:a,fullVisibilityThreshold:o})}

void main() {
  int vIdx = int(a_vertexIndex);
  int pairIdx = vIdx / 2;
  int side = vIdx - pairIdx * 2; // 0 = left/bottom, 1 = right/top

  // --- Fetch edge data (2 texels per edge) ---
  int edgeIdx = int(a_edgeIndex);
  int texel0Idx = edgeIdx * 2;
  int texel1Idx = edgeIdx * 2 + 1;
  ivec2 e0 = ivec2(texel0Idx % u_edgeDataTextureWidth, texel0Idx / u_edgeDataTextureWidth);
  ivec2 e1 = ivec2(texel1Idx % u_edgeDataTextureWidth, texel1Idx / u_edgeDataTextureWidth);
  vec4 edgeData0 = texelFetch(u_edgeDataTexture, e0, 0);
  vec4 edgeData1 = texelFetch(u_edgeDataTexture, e1, 0);

  int srcIdx = int(edgeData0.x);
  int tgtIdx = int(edgeData0.y);
  float thickness = edgeData0.z;
  int pathId = int(edgeData1.z);

  // --- Fetch path attributes (curvature, etc.) ---
  {
    int edgeIdx = int(a_edgeAttrIndex);
${u.fetchCode}
${u.varyingAssignments}
  }

  // --- Fetch node data: geometry (texel 0) + rotation flags (texel 1) ---
  vec4 srcN = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx);
  vec4 tgtN = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx);

  vec2 source = srcN.xy;
  vec2 target = tgtN.xy;
  float sourceSize = srcN.z;
  float targetSize = tgtN.z;
  v_sourceNodeSize = sourceSize;
  v_targetNodeSize = targetSize;

  // --- Pixel-to-graph conversion (fixed font mode) ---
  float matrixScaleX = length(vec2(u_matrix[0][0], u_matrix[1][0]));
  float pixelToGraph = 2.0 / (matrixScaleX * u_resolution.x);

  float webGLThickness = thickness * u_correctionRatio / u_sizeRatio;

  // --- Body bounds (shared with edge label shader) ---
  vec4 edgeClamp = readFrameTexel(u_edgeFrameTexture, u_edgeFrameTextureWidth, edgeIdx);
  vec3 bodyBounds = computeEdgeLabelBodyBounds(
    edgeClamp.x, edgeClamp.y, edgeClamp.w,
    webGLThickness, HEAD_RATIO, TAIL_RATIO
  );
  float bodyStartDist = bodyBounds.x;
  float bodyEndDist = bodyBounds.y;
  float bodyLength = bodyBounds.z;

  // --- Text dimensions ---
  float baseFontSize = a_baseFontSize;
  ${c?`float fontScale = baseFontSize / ATLAS_FONT_SIZE * u_zoomSizeRatio;
  float textWidthWebGL = a_totalTextWidth * fontScale * u_correctionRatio / u_sizeRatio;
  float halfTextHeight = baseFontSize * 0.35 * u_zoomSizeRatio * u_correctionRatio / u_sizeRatio;
  float marginWebGL = a_margin * u_zoomSizeRatio * u_correctionRatio / u_sizeRatio;`:`float fontScale = baseFontSize / ATLAS_FONT_SIZE;
  float textWidthWebGL = a_totalTextWidth * fontScale * pixelToGraph;
  float halfTextHeight = baseFontSize * 0.35 * pixelToGraph;
  float marginWebGL = a_margin * pixelToGraph;`}
  float paddingWebGL = a_padding * pixelToGraph;

  // --- Alpha modifier (shared with edge label shader) ---
  float alphaModifier = computeEdgeLabelAlpha(bodyLength, textWidthWebGL);
  if (alphaModifier <= 0.0 || textWidthWebGL <= 0.0) {
    gl_Position = vec4(2.0, 0.0, 0.0, 1.0);
    v_color = vec4(0.0);
    v_id = vec4(0.0);
    v_alphaModifier = 0.0;
    return;
  }

  // --- Perpendicular offset (shared with edge label shader) ---
  float bodyCenterDist = (bodyStartDist + bodyEndDist) * 0.5;
  float centerT = queryPathTAtDistance(pathId, bodyCenterDist, source, target);
  float screenDir = computeEdgeLabelScreenDir(pathId, centerT, source, target, u_matrix);
  float readingSign = ${s?`screenDir`:`1.0`};
  float halfThickness = webGLThickness * 0.5;
  float perpOffset = computeEdgeLabelPerpOffset(
    a_positionMode, halfThickness, marginWebGL, halfTextHeight, readingSign, screenDir
  );

  // --- Ribbon span (clipped to body) ---
  float halfTextWebGL = textWidthWebGL * 0.5;
  float labelStartDist = max(bodyCenterDist - halfTextWebGL, bodyStartDist);
  float labelEndDist = min(bodyCenterDist + halfTextWebGL, bodyEndDist);

  // Sample centerline at this pair, then apply perpendicular offset.
  // The ribbon follows the centerline path (simple & robust); for curved edges
  // this closely matches the offset path the characters sit on.
  float u = float(pairIdx) / float(RIBBON_SEGMENTS);
  float arcDist = mix(labelStartDist, labelEndDist, u);
  float t = queryPathTAtDistance(pathId, arcDist, source, target);
  vec2 pos = queryPathPosition(pathId, t, source, target);
  vec2 tan = queryPathTangent(pathId, t, source, target);
  vec2 perp = vec2(-tan.y, tan.x);

  vec2 centerPos = pos + perp * perpOffset;

  float halfRibbon = halfTextHeight + paddingWebGL;
  float sideSign = side == 0 ? -1.0 : 1.0;
  vec2 ribbonPos = centerPos + perp * (sideSign * halfRibbon);

  vec3 clipPos = u_matrix * vec3(ribbonPos, 1.0);
  gl_Position = vec4(clipPos.xy, 0.0, 1.0);

  v_color = a_color;
  v_id = a_id;
  v_alphaModifier = alphaModifier;
}
`}function wi(e,t,n,r){var i=r.shaderConfig,a=i.paths,o=i.fontSizeMode;if(a.length===0)throw Error(`createEdgeLabelBackgroundProgram: shaderConfig must declare at least one path`);var s=In(),c=mr([].concat(X(a),[s])),l=hr([].concat(X(a),[s]),c),u=Ci(i);return new(function(e){function t(e,n,r){var i;return K(this,t),i=J(this,t,[e,n,r]),W(i,`totalCount`,0),W(i,`bufferCapacity`,0),W(i,`edgeAttributeTexture`,null),i.edgeAttributeTexture=new na(e,c),i.packedAttributeData=new Float32Array(c.floatsPerItem),i}return Y(t,e),q(t,[{key:`getDefinition`,value:function(){for(var e=WebGL2RenderingContext,t=e.FLOAT,n=e.UNSIGNED_BYTE,r=e.TRIANGLE_STRIP,i=[],a=0;a<Pa;a++)i.push([a]);var s=[`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_pixelRatio`,`u_cameraAngle`,`u_resolution`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_edgeDataTexture`,`u_edgeDataTextureWidth`,`u_edgeFrameTexture`,`u_edgeFrameTextureWidth`];return o===`scaled`&&s.push(`u_zoomSizeRatio`),c.floatsPerItem>0&&s.push(`u_edgeAttributeTexture`,`u_edgeAttributeTextureWidth`,`u_edgeAttributeTexelsPerEdge`),{VERTICES:Pa,VERTEX_SHADER_SOURCE:u,FRAGMENT_SHADER_SOURCE:Fa,METHOD:r,UNIFORMS:s,ATTRIBUTES:[{name:`a_edgeIndex`,size:1,type:t},{name:`a_edgeAttrIndex`,size:1,type:t},{name:`a_baseFontSize`,size:1,type:t},{name:`a_totalTextWidth`,size:1,type:t},{name:`a_positionMode`,size:1,type:t},{name:`a_margin`,size:1,type:t},{name:`a_padding`,size:1,type:t},{name:`a_color`,size:4,type:n,normalized:!0},{name:`a_id`,size:4,type:n,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:`a_vertexIndex`,size:1,type:t}],CONSTANT_DATA:i}}},{key:`processEdgeLabelBackground`,value:function(e,t,n){var r=0;if(this.edgeAttributeTexture&&c.floatsPerItem>0){r=this.edgeAttributeTexture.allocate(t);var i=this.packedAttributeData;gr(l,n.edgeAttributes,i,``,Ma,0),this.edgeAttributeTexture.updateAllAttributes(t,i)}var a=this.floats,o=this.ints,s=e*this.STRIDE;a[s++]=n.edgeIndex,a[s++]=r,a[s++]=n.baseFontSize,a[s++]=n.totalTextWidth,a[s++]=n.positionMode,a[s++]=n.margin,a[s++]=n.padding,a[s++]=n.color,o[s++]=n.id}},{key:`setUniforms`,value:function(e,t){var n=t.gl,r=t.uniformLocations;if(n.uniformMatrix3fv(r.u_matrix,!1,e.matrix),n.uniform1f(r.u_sizeRatio,e.sizeRatio),n.uniform1f(r.u_correctionRatio,e.correctionRatio),n.uniform1f(r.u_pixelRatio,e.pixelRatio),n.uniform1f(r.u_cameraAngle,e.cameraAngle),n.uniform2f(r.u_resolution,e.width,e.height),r.u_nodeDataTexture!==void 0&&n.uniform1i(r.u_nodeDataTexture,e.nodeDataTextureUnit),r.u_nodeDataTextureWidth!==void 0&&n.uniform1i(r.u_nodeDataTextureWidth,e.nodeDataTextureWidth),r.u_edgeDataTexture!==void 0&&n.uniform1i(r.u_edgeDataTexture,e.edgeDataTextureUnit),r.u_edgeDataTextureWidth!==void 0&&n.uniform1i(r.u_edgeDataTextureWidth,e.edgeDataTextureWidth),r.u_edgeFrameTexture!==void 0&&n.uniform1i(r.u_edgeFrameTexture,e.edgeFrameTextureUnit),r.u_edgeFrameTextureWidth!==void 0&&n.uniform1i(r.u_edgeFrameTextureWidth,e.edgeFrameTextureWidth),o===`scaled`&&r.u_zoomSizeRatio!==void 0){var i=this.renderer.getSetting(`zoomToSizeRatioFunction`);n.uniform1f(r.u_zoomSizeRatio,1/i(e.zoomRatio))}this.edgeAttributeTexture&&c.floatsPerItem>0&&r.u_edgeAttributeTexture!==void 0&&(this.edgeAttributeTexture.bind(va),n.uniform1i(r.u_edgeAttributeTexture,va),n.uniform1i(r.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),n.uniform1i(r.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem()))}},{key:`renderProgram`,value:function(e,n){this.edgeAttributeTexture&&c.floatsPerItem>0&&this.edgeAttributeTexture.upload(),$(t,`renderProgram`,this,3)([e,n])}},{key:`kill`,value:function(){this.edgeAttributeTexture&&=(this.edgeAttributeTexture.kill(),null),$(t,`kill`,this,3)([])}},{key:`drawWebGL`,value:function(e,t){var n=t.gl;this.totalCount!==0&&n.drawArraysInstanced(n.TRIANGLE_STRIP,0,this.VERTICES,this.totalCount)}},{key:`reallocate`,value:function(e){this.totalCount=e,e>this.bufferCapacity&&(this.bufferCapacity=Math.max(e,Math.ceil(this.bufferCapacity*1.5)||10),$(t,`reallocate`,this,3)([this.bufferCapacity]))}}])}(aa))(e,t,n)}function Ti(e){return{paths:e.paths,headLengthRatio:e.headLengthRatio??0,tailLengthRatio:e.tailLengthRatio??0,fontSizeMode:e.fontSizeMode??`fixed`,minVisibilityThreshold:e.minVisibilityThreshold??.7,fullVisibilityThreshold:e.fullVisibilityThreshold??.8,keepUpright:e.keepUpright??!0}}function Ei(e){var t=e.paths,n=e.hasBorder,r=n!==void 0&&n,i=e.fontSizeMode,a=i===void 0?`fixed`:i,o=e.minVisibilityThreshold,s=o===void 0?.5:o,c=e.fullVisibilityThreshold,l=c===void 0?.6:c,u=e.keepUpright,d=u===void 0||u,f=a===`scaled`,p=t.some(function(e){return e.hasSharpCorners}),m=In(),h=Jr(mr([].concat(X(t),[m])));return`#version 300 es

// ============================================================================
// Attributes - Per Character (Instanced)
// ============================================================================

// Edge geometry: indices for texture lookup
// Edge data (source/target node indices, thickness, head/tail ratios) is fetched from edge data texture
// Edge path attributes (curvature, etc.) are fetched from edge attribute texture
in float a_edgeIndex;       // Index into edge data texture
in float a_edgeAttrIndex;   // Index into edge attribute texture (for curvature, etc.)
in float a_baseFontSize;    // Base font size in pixels (per-label)

// Character metrics (in glyph units = atlas font size pixels)
in vec4 a_charMetrics;      // (charTextOffset, charAdvance, totalTextWidth, positionMode)
in vec4 a_charDims;         // (charSize.x, charSize.y, charOffset.x, charOffset.y)

// Atlas texture coordinates
in vec4 a_texCoords;        // (x, y, width, height) in atlas pixels

// Label parameters
in vec2 a_labelParams;      // (margin, unused)

// Appearance
in vec4 a_color;            // Character color (RGBA, normalized)
${r?`in vec4 a_borderColor;      // Border color (RGBA, normalized)`:``}

// ============================================================================
// Attributes - Per Vertex (Constant)
// ============================================================================

in vec2 a_quadCorner;       // Quad corner: (0,0), (1,0), (0,1), (1,1)

// ============================================================================
// Uniforms
// ============================================================================

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_pixelRatio;
uniform float u_cameraAngle;    // Required by node shape SDFs
// u_sdfBufferPixels kept for ABI compatibility but unused in shader
uniform float u_sdfBufferPixels;
uniform vec2 u_resolution;
uniform vec2 u_atlasSize;
uniform sampler2D u_nodeDataTexture; // Shared texture with node position/size/shape data
uniform int u_nodeDataTextureWidth;  // Width of 2D node data texture for coordinate calculation
uniform sampler2D u_edgeDataTexture; // Shared texture with edge data
uniform int u_edgeDataTextureWidth;  // Width of 2D edge data texture for coordinate calculation
uniform sampler2D u_edgeFrameTexture; // Per-edge clamp (tStart, tEnd, straightenFactor, pathLength)
uniform int u_edgeFrameTextureWidth;
${f?`uniform float u_zoomSizeRatio;  // Zoom-based size ratio from zoomToSizeRatioFunction`:``}

// Edge path attribute texture uniforms (for curvature and other path attributes)
${h.uniformDeclarations}

// ============================================================================
// Varyings
// ============================================================================

out vec2 v_texCoord;
out vec4 v_color;
${r?`out vec4 v_borderColor;`:``}
out float v_edgeFade;  // 0 = fully visible, 1 = fully faded (outside body)
out float v_alphaModifier;  // 0-1 based on label visibility ratio
out float v_fontScale;  // Ratio of rendered font size to atlas font size
${r?`out float v_positionMode;  // Position mode for conditional border (0=over needs border)`:``}

// ============================================================================
// Constants
// ============================================================================

const float bias = 255.0 / 254.0;
const float FADE_WIDTH_PIXELS = 15.0;  // Width of fade gradient in pixels
const float ATLAS_FONT_SIZE = ${Q(Ia)};  // Base font size used in SDF atlas
const float VERTICAL_CENTER_RATIO = ${Q(La)};  // Baseline to visual center ratio

// ============================================================================
// Path Attribute Variables (set in main, used by path functions)
// ============================================================================
// Path attributes are fetched from the edge attribute texture and stored in
// variables with v_ prefix (e.g., v_curvature) for path functions to access.
${h.vertexVaryingDeclarations.replace(/out /g,``)}

// Node size variables (set in main, used by some path functions like loops).
// These mirror the v_sourceNodeSize / v_targetNodeSize varyings in generator.ts,
// but are plain floats here since the label shader is vertex-only.
float v_sourceNodeSize;
float v_targetNodeSize;

// Shared preamble: shape SDFs, path functions + selectors, clamp, helpers.
${Si({paths:t,minVisibilityThreshold:s,fullVisibilityThreshold:l})}

// ============================================================================
// Main
// ============================================================================

void main() {
  // -------------------------------------------------------------------------
  // Fetch edge data from edge texture (2 texels per edge)
  // -------------------------------------------------------------------------
  // Texel 0: sourceNodeIndex, targetNodeIndex, thickness, reserved
  // Texel 1: headLengthRatio, tailLengthRatio, pathId, extremityIds
  int edgeIdx = int(a_edgeIndex);
  int texel0Idx = edgeIdx * 2;
  int texel1Idx = edgeIdx * 2 + 1;
  ivec2 edgeTexCoord0 = ivec2(texel0Idx % u_edgeDataTextureWidth, texel0Idx / u_edgeDataTextureWidth);
  ivec2 edgeTexCoord1 = ivec2(texel1Idx % u_edgeDataTextureWidth, texel1Idx / u_edgeDataTextureWidth);
  vec4 edgeData0 = texelFetch(u_edgeDataTexture, edgeTexCoord0, 0);
  vec4 edgeData1 = texelFetch(u_edgeDataTexture, edgeTexCoord1, 0);

  // Unpack edge data
  int srcIdx = int(edgeData0.x);
  int tgtIdx = int(edgeData0.y);
  float thickness = edgeData0.z;
  // edgeData0.w is reserved
  float headLengthRatio = edgeData1.x;
  float tailLengthRatio = edgeData1.y;
  int pathId = int(edgeData1.z);  // Path type for multi-path support
  float baseFontSize = a_baseFontSize;

  // -------------------------------------------------------------------------
  // Fetch path attributes from edge attribute texture
  // -------------------------------------------------------------------------
  // Note: The fetch code uses 'edgeIdx' variable, so we set it to the attribute texture index
  {
    int edgeIdx = int(a_edgeAttrIndex);  // Use attribute texture index for path attributes
${h.fetchCode}
${h.varyingAssignments}
  }

  // -------------------------------------------------------------------------
  // Fetch node data from node texture (geometry texel + rotation-flags texel)
  // -------------------------------------------------------------------------
  vec4 srcNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx);
  vec4 tgtNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx);

  vec2 source = srcNodeData.xy;
  vec2 target = tgtNodeData.xy;
  float sourceSize = srcNodeData.z;
  float targetSize = tgtNodeData.z;
  v_sourceNodeSize = sourceSize;
  v_targetNodeSize = targetSize;
  float charTextOffset = a_charMetrics.x;
  float charAdvance = a_charMetrics.y;
  float totalTextWidth = a_charMetrics.z;
  float positionMode = a_charMetrics.w;
  vec2 charSize = a_charDims.xy;
  vec2 charOffset = a_charDims.zw;
  float margin = a_labelParams.x;

  // -------------------------------------------------------------------------
  // Compute pixel-to-graph conversion (for fixed font size mode)
  // -------------------------------------------------------------------------
  // This converts screen pixels to graph units such that N pixels on screen
  // becomes N pixels regardless of zoom level.
  // matrixScaleX is how much the matrix scales graph units to clip space
  float matrixScaleX = length(vec2(u_matrix[0][0], u_matrix[1][0]));
  float pixelToGraph = 2.0 / (matrixScaleX * u_resolution.x);

  // -------------------------------------------------------------------------
  // Step 1: Convert thickness to WebGL units
  // -------------------------------------------------------------------------
  float webGLThickness = thickness * u_correctionRatio / u_sizeRatio;

  // -------------------------------------------------------------------------
  // Step 2: Compute body bounds (truncated at node boundaries + extremities)
  // -------------------------------------------------------------------------
  vec4 edgeClamp = readFrameTexel(u_edgeFrameTexture, u_edgeFrameTextureWidth, edgeIdx);
  vec3 bodyBounds = computeEdgeLabelBodyBounds(
    edgeClamp.x, edgeClamp.y, edgeClamp.w,
    webGLThickness, headLengthRatio, tailLengthRatio
  );
  float bodyStartDist = bodyBounds.x;
  float bodyEndDist = bodyBounds.y;
  float bodyLength = bodyBounds.z;

  // -------------------------------------------------------------------------
  // Step 3: Compute font scale and text dimensions
  // -------------------------------------------------------------------------
  // Font size modes:
  // - "fixed": Constant pixel size regardless of zoom, using pixelToGraph conversion
  // - "scaled": Scales with zoom using zoomToSizeRatioFunction
  ${f?`// Scaled mode: font scales with zoom
  float fontScale = baseFontSize / ATLAS_FONT_SIZE * u_zoomSizeRatio;
  // Convert glyph-unit metrics to WebGL units (scales with zoom)
  float textWidthWebGL = totalTextWidth * fontScale * u_correctionRatio / u_sizeRatio;
  float charOffsetWebGL = charTextOffset * fontScale * u_correctionRatio / u_sizeRatio;
  float charAdvanceWebGL = charAdvance * fontScale * u_correctionRatio / u_sizeRatio;`:`// Fixed mode: font stays constant in screen pixels
  float fontScale = baseFontSize / ATLAS_FONT_SIZE;
  // Convert glyph-unit metrics to graph units using pixelToGraph (zoom-independent)
  float textWidthWebGL = totalTextWidth * fontScale * pixelToGraph;
  float charOffsetWebGL = charTextOffset * fontScale * pixelToGraph;
  float charAdvanceWebGL = charAdvance * fontScale * pixelToGraph;`}

  // Font scale varying for fragment shader gamma scaling.
  // Ratio of rendered font size to atlas font size — used to tighten the
  // anti-aliasing band for large labels so they stay sharp.
  v_fontScale = fontScale;

  // -------------------------------------------------------------------------
  // Step 4: Alpha modifier from how much of the label fits in the body
  // -------------------------------------------------------------------------
  float alphaModifier = computeEdgeLabelAlpha(bodyLength, textWidthWebGL);

  // -------------------------------------------------------------------------
  // Step 5: Compute character center offset (truncation check moved to after curvature adjustment)
  // -------------------------------------------------------------------------
  // Body center in arc distance
  float bodyCenterDist = (bodyStartDist + bodyEndDist) * 0.5;

  float centerT = queryPathTAtDistance(pathId, bodyCenterDist, source, target);
  float screenDir = computeEdgeLabelScreenDir(pathId, centerT, source, target, u_matrix);

  // Reversed labels lay their characters out from target to source
  float readingSign = ${d?`screenDir`:`1.0`};

  // Character center position relative to label center (on centerline, before curvature adjustment)
  float charCenterOffset = readingSign * (charOffsetWebGL + charAdvanceWebGL * 0.5 - textWidthWebGL * 0.5);

  // -------------------------------------------------------------------------
  // Step 6: Compute perpendicular offset based on position mode
  // -------------------------------------------------------------------------
  // Position modes: 0=over, 1=above, 2=below, 3=auto
  // Needed early for curvature-adaptive character spacing in Step 7
  float halfThickness = webGLThickness * 0.5;
  ${f?`// Scaled mode: margin and text height scale with zoom (same factor as font)
  float marginWebGL = margin * u_zoomSizeRatio * u_correctionRatio / u_sizeRatio;
  float halfTextHeight = baseFontSize * 0.35 * u_zoomSizeRatio * u_correctionRatio / u_sizeRatio;`:`// Fixed mode: margin and text height stay constant in screen pixels
  float marginWebGL = margin * pixelToGraph;
  float halfTextHeight = baseFontSize * 0.35 * pixelToGraph;`}
  float perpOffset = computeEdgeLabelPerpOffset(
    positionMode, halfThickness, marginWebGL, halfTextHeight, readingSign, screenDir
  );

  // -------------------------------------------------------------------------
  // Step 7: Position character on path using offset path traversal
  // -------------------------------------------------------------------------
  // For "over" mode (perpOffset = 0), use simple centerline placement
  // For above/below modes, walk along the offset path to find correct position
  float charT;

  if (perpOffset == 0.0) {
    // Simple case: place on centerline
    float charArcDist = bodyCenterDist + charCenterOffset;
    charT = queryPathTAtDistance(pathId, charArcDist, source, target);
  } else {
    // Offset path traversal: walk along the offset curve to find character position
    // This ensures even character spacing regardless of curvature

    ${p?`// -----------------------------------------------------------------------
    // Corner skip setup for step/taxi edges with above/below labels
    // -----------------------------------------------------------------------
    // At concave corners (inner side of the bend), characters would bunch up
    // because the offset path has near-zero arc length. We detect corner
    // crossings during the offset path traversal and add skip distance.

    // Get corner t values and concavity
    vec2 cornerTs = queryGetCornerTs(pathId, source, target);
    vec2 concavity = queryGetCornerConcavity(pathId, source, target, perpOffset);

    // Skip distance in graph units, proportional to on-screen font size
    // For fixed mode: use pixelToGraph so gap stays constant regardless of zoom
    // For scaled mode: use the same conversion as text width
    ${f?`float skipDistGraph = STEP_INNER_CORNER_SKIP_FACTOR * baseFontSize * u_zoomSizeRatio * u_correctionRatio / u_sizeRatio;`:`float skipDistGraph = STEP_INNER_CORNER_SKIP_FACTOR * baseFontSize * pixelToGraph;`}

    // Corner t values for detecting crossings during traversal
    float corner1T = cornerTs.x;
    float corner2T = cornerTs.y;
    bool corner1IsConcave = concavity.x > 0.5;
    bool corner2IsConcave = concavity.y > 0.5;`:``}

    // Target distance along offset path from center
    float targetOffsetDist = abs(charCenterOffset);

    // Handle center character (charCenterOffset ≈ 0) - no search needed
    if (targetOffsetDist < 0.0001) {
      charT = centerT;
    } else {
      vec2 centerPos = queryPathPosition(pathId, centerT, source, target);
      vec2 centerNormal = queryPathNormal(pathId, centerT, source, target);
      vec2 offsetCenter = centerPos + centerNormal * perpOffset;

      float searchDir = charCenterOffset > 0.0 ? 1.0 : -1.0;

      // Search bounds (t values for body start and end)
      float tBodyStart = queryPathTAtDistance(pathId, bodyStartDist, source, target);
      float tBodyEnd = queryPathTAtDistance(pathId, bodyEndDist, source, target);

      // Walk along offset path to find character position
      float accumDist = 0.0;
      vec2 prevOffsetPos = offsetCenter;
      float prevT = centerT;
      float foundT = centerT;

      // Search range depends on direction
      float tSearchEnd = searchDir > 0.0 ? tBodyEnd : tBodyStart;

      ${p?`// Track which concave corners we've crossed to add skip distance
      bool crossedCorner1 = false;
      bool crossedCorner2 = false;
      float effectiveTargetDist = targetOffsetDist;`:``}

      const int STEPS = 32;
      for (int i = 1; i <= STEPS; i++) {
        // Step along centerline t, from center toward target
        float stepT = centerT + searchDir * float(i) * abs(tSearchEnd - centerT) / float(STEPS);

        ${p?`// Check for concave corner crossings and add skip distance
        // Corner 1 crossing check
        if (corner1IsConcave && !crossedCorner1) {
          bool crossingCorner1 = (searchDir > 0.0)
            ? (prevT < corner1T && stepT >= corner1T)
            : (prevT > corner1T && stepT <= corner1T);
          if (crossingCorner1) {
            crossedCorner1 = true;
            effectiveTargetDist += skipDistGraph;
          }
        }

        // Corner 2 crossing check
        if (corner2IsConcave && !crossedCorner2) {
          bool crossingCorner2 = (searchDir > 0.0)
            ? (prevT < corner2T && stepT >= corner2T)
            : (prevT > corner2T && stepT <= corner2T);
          if (crossingCorner2) {
            crossedCorner2 = true;
            effectiveTargetDist += skipDistGraph;
          }
        }`:``}

        // Compute offset position at this t
        vec2 stepPos = queryPathPosition(pathId, stepT, source, target);
        vec2 stepNormal = queryPathNormal(pathId, stepT, source, target);
        vec2 offsetPos = stepPos + stepNormal * perpOffset;

        // Distance along offset path
        float segDist = length(offsetPos - prevOffsetPos);

        ${p?`if (accumDist + segDist >= effectiveTargetDist) {
          // Interpolate within segment to find exact t
          float remaining = effectiveTargetDist - accumDist;
          float segT = remaining / max(segDist, 0.0001);
          foundT = mix(prevT, stepT, segT);
          break;
        }`:`if (accumDist + segDist >= targetOffsetDist) {
          // Interpolate within segment to find exact t
          float remaining = targetOffsetDist - accumDist;
          float segT = remaining / max(segDist, 0.0001);
          foundT = mix(prevT, stepT, segT);
          break;
        }`}

        accumDist += segDist;
        prevOffsetPos = offsetPos;
        prevT = stepT;
        // Update foundT to last valid position in case loop exhausts without finding target
        foundT = stepT;
      }

      charT = foundT;
    }
  }

  // Get position and tangent at final character position
  vec2 pathPos = queryPathPosition(pathId, charT, source, target);
  vec2 tangent = queryPathTangent(pathId, charT, source, target);

  // Compute perpendicular direction (90 degrees from tangent)
  vec2 perpDir = vec2(-tangent.y, tangent.x);

  // Apply perpendicular offset to path position
  vec2 offsetPathPos = pathPos + perpDir * perpOffset;

  // -------------------------------------------------------------------------
  // Step 8: Build character quad
  // -------------------------------------------------------------------------
  // Character size in screen pixels
  vec2 charSizePixels = charSize * fontScale;

  // Character offset from origin to the atlas region's top-left corner.
  // bearingX/bearingY already include the SDF buffer.
  vec2 charOffsetPixels = charOffset * fontScale;

  // The character's local X offset from pathPos (which is at character center)
  float charLocalX = -charAdvance * 0.5 * fontScale;

  // Build quad position:
  // - Start at character origin (charLocalX on X axis, 0 on Y axis = baseline)
  // - Add bearing offset to get to atlas region corner
  // - Add quad corner * size to get vertex position
  vec2 quadPos;
  quadPos.x = charLocalX + charOffsetPixels.x + a_quadCorner.x * charSizePixels.x;
  // charOffset.y = -bearingY (negated), so -charOffsetPixels.y = bearingY * fontScale
  // (distance from baseline to atlas region top, positive = upward)
  // Quad corner (0,0) = bottom-left, (1,1) = top-right
  quadPos.y = -charOffsetPixels.y - charSizePixels.y * (1.0 - a_quadCorner.y);

  // Center vertically on the path by offsetting by half the visual text height
  // VERTICAL_CENTER_RATIO is the distance from baseline to visual center as a ratio of atlas font size
  float verticalCenterOffset = VERTICAL_CENTER_RATIO * ATLAS_FONT_SIZE * fontScale;
  quadPos.y -= verticalCenterOffset;

  // -------------------------------------------------------------------------
  // Step 9: Rotate quad to align with tangent
  // -------------------------------------------------------------------------
  // Rotation matrix from the reading direction
  // readingDir = (cos(angle), sin(angle)), so we can build rotation directly
  vec2 readingDir = tangent * readingSign;
  mat2 rotation = mat2(readingDir.x, readingDir.y, -readingDir.y, readingDir.x);

  // Convert pixel offset to WebGL units for rotation
  ${f?`vec2 quadPosWebGL = quadPos * u_correctionRatio / u_sizeRatio; // Scaled mode`:`vec2 quadPosWebGL = quadPos * pixelToGraph; // Fixed mode: use pixelToGraph for zoom-independent size`}

  // Rotate around character center on path
  vec2 rotatedOffset = rotation * quadPosWebGL;

  // Final position in graph space (using offset path position for above/below modes)
  vec2 worldPos = offsetPathPos + rotatedOffset;

  // -------------------------------------------------------------------------
  // Step 10: Transform to clip space
  // -------------------------------------------------------------------------
  vec3 clipPos = u_matrix * vec3(worldPos, 1.0);
  gl_Position = vec4(clipPos.xy, 0.0, 1.0);

  // -------------------------------------------------------------------------
  // Step 11: Texture coordinates
  // -------------------------------------------------------------------------
  // Flip Y for texture coordinates (texture Y goes down, quad Y goes up)
  vec2 texCorner = vec2(a_quadCorner.x, 1.0 - a_quadCorner.y);
  v_texCoord = (a_texCoords.xy + texCorner * a_texCoords.zw) / u_atlasSize;

  // -------------------------------------------------------------------------
  // Step 12: Pass color, border color, and alpha modifier
  // -------------------------------------------------------------------------
  v_color = a_color;
  v_color.a *= bias;
${r?`  v_borderColor = a_borderColor;
  v_borderColor.a *= bias;
  v_positionMode = positionMode;`:``}
  v_alphaModifier = alphaModifier;

  // -------------------------------------------------------------------------
  // Step 13: Compute edge fade for soft truncation
  // -------------------------------------------------------------------------
  // Convert fade width from pixels to WebGL units
  ${f?`float fadeWidthWebGL = FADE_WIDTH_PIXELS * u_correctionRatio / u_sizeRatio;`:`float fadeWidthWebGL = FADE_WIDTH_PIXELS * pixelToGraph;`}

  // Compute the arc position of THIS VERTEX (not just character center)
  // The quad extends from charCenter - advance/2 to charCenter + advance/2
  // a_quadCorner.x is 0 for left edge, 1 for right edge
  float vertexLocalOffset = readingSign * (a_quadCorner.x - 0.5) * charAdvanceWebGL;
  float vertexArcOffset = charCenterOffset + vertexLocalOffset;

  // Compute distance from body edges (positive = inside body, negative = outside)
  float halfBody = bodyLength * 0.5;
  float distFromStart = vertexArcOffset + halfBody;  // Distance from body start edge
  float distFromEnd = halfBody - vertexArcOffset;    // Distance from body end edge
  float distFromEdge = min(distFromStart, distFromEnd);

  // Compute fade: 0 = fully visible (deep inside body), 1 = fully faded (at body edge)
  // Fade goes from 0 (at 2*fadeWidth inside) to 1 (at body edge)
  // This ensures text is fully transparent before reaching extremities
  v_edgeFade = 1.0 - smoothstep(0.0, fadeWidthWebGL * 2.0, distFromEdge);
}
`}function Di(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).hasBorder,t=e!==void 0&&e;return`#version 300 es
precision highp float;

in vec2 v_texCoord;
in vec4 v_color;
${t?`in vec4 v_borderColor;`:``}
in float v_edgeFade;  // 0 = fully visible, 1 = fully faded
in float v_alphaModifier;  // 0-1 based on label visibility ratio
in float v_fontScale;  // Ratio of rendered font size to atlas font size
${t?`in float v_positionMode;  // Position mode (0=over, 1=above, 2=below, 3=auto)`:``}

uniform sampler2D u_atlas;
uniform float u_gamma;
uniform float u_sdfBuffer;
uniform float u_pixelRatio;
${t?`uniform float u_borderWidth;  // Border width in SDF units (normalized)`:``}

// Fragment output (single target - picking handled via separate pass)
out vec4 fragColor;

void main() {
  #ifdef PICKING_MODE
    // Edge labels are not pickable - discard all fragments in picking mode
    fragColor = vec4(0.0);
    discard;
  #else
  // SDF stores normalized distance: 0.5 = on edge, >0.5 = inside glyph
  float sdfValue = texture(u_atlas, v_texCoord).a;

  // Edge threshold accounting for SDF buffer padding
  float edge = 1.0 - u_sdfBuffer;

  // Scale gamma inversely with font scale so small labels get a wider AA band
  // (smoother) and large labels get a tighter band (sharper).
  float aaWidth = u_gamma / (u_pixelRatio * v_fontScale);

  // Apply edge fade for soft truncation at body boundaries
  // Also apply visibility-based alpha modifier for short edge labels
  float edgeAlpha = (1.0 - v_edgeFade) * v_alphaModifier;

${t?`  // Fill alpha: fully opaque inside the glyph
  float fillAlpha = smoothstep(edge - aaWidth, edge + aaWidth, sdfValue);

  // Only apply border for "over" position mode (v_positionMode == 0.0)
  // Labels positioned above/below/auto don't overlap the edge line and don't need borders
  if (v_positionMode < 0.5) {
    // Border rendering: compute alpha for both fill and border regions
    // Border extends from (edge - borderWidth) to edge
    float borderEdge = edge - u_borderWidth;

    // Border alpha: opaque in the border region (between borderEdge and edge)
    float borderAlpha = smoothstep(borderEdge - aaWidth, borderEdge + aaWidth, sdfValue);

    // Composite: fill on top of border
    // Border is visible where borderAlpha > 0 but fillAlpha < 1
    vec3 borderColorPremult = v_borderColor.rgb * v_borderColor.a * borderAlpha * edgeAlpha;
    vec3 fillColorPremult = v_color.rgb * v_color.a * fillAlpha * edgeAlpha;

    // Blend fill over border (fill replaces border where fill is opaque)
    float finalBorderAlpha = borderAlpha * (1.0 - fillAlpha);
    vec3 finalColor = fillColorPremult + v_borderColor.rgb * v_borderColor.a * finalBorderAlpha * edgeAlpha;
    float finalAlpha = (v_color.a * fillAlpha + v_borderColor.a * finalBorderAlpha) * edgeAlpha;

    fragColor = vec4(finalColor, finalAlpha);
  } else {
    // No border for above/below/auto positions - simple text rendering
    float finalAlpha = v_color.a * fillAlpha * edgeAlpha;
    fragColor = vec4(v_color.rgb * finalAlpha, finalAlpha);
  }`:`  // Smooth transition from transparent to opaque at glyph edge
  float alpha = smoothstep(edge - aaWidth, edge + aaWidth, sdfValue);

  // Premultiplied alpha output
  float finalAlpha = v_color.a * alpha * edgeAlpha;
  fragColor = vec4(v_color.rgb * finalAlpha, finalAlpha);`}
  #endif
}
`}function Oi(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:`fixed`,r=[`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_pixelRatio`,`u_cameraAngle`,`u_sdfBufferPixels`,`u_resolution`,`u_atlasSize`,`u_atlas`,`u_gamma`,`u_sdfBuffer`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_edgeDataTexture`,`u_edgeDataTextureWidth`,`u_edgeFrameTexture`,`u_edgeFrameTextureWidth`,`u_edgeAttributeTexture`,`u_edgeAttributeTextureWidth`,`u_edgeAttributeTexelsPerEdge`];n===`scaled`&&r.push(`u_zoomSizeRatio`),t&&r.push(`u_borderWidth`);var i=U(e),a;try{for(i.s();!(a=i.n()).done;){var o=a.value,s=U(o.uniforms),c;try{for(s.s();!(c=s.n()).done;){var l=c.value;r.includes(l.name)||r.push(l.name)}}catch(e){s.e(e)}finally{s.f()}}}catch(e){i.e(e)}finally{i.f()}return r}function ki(e){var t=e.hasBorder,n=t!==void 0&&t,r=e.fontSizeMode,i=r===void 0?`fixed`:r;return{vertexShader:Ei(e),fragmentShader:Di({hasBorder:n}),uniforms:Oi(e.paths,n,i)}}function Ai(e){switch(e){case`over`:return 0;case`above`:return 1;case`below`:return 2;case`auto`:return 3;default:return 0}}function ji(e,t,n,r){var i=r.color,a=r.margin,o=r.textBorder,s=Ti(r),c=s.paths,l=s.fontSizeMode,u=s.minVisibilityThreshold,d=s.fullVisibilityThreshold,f=s.keepUpright,p=!!o,m=ki({paths:c,hasBorder:p,fontSizeMode:l,minVisibilityThreshold:u,fullVisibilityThreshold:d,keepUpright:f}),h=function(e){function t(e,n,r){var i;K(this,t),i=J(this,t,[e,n,r]),W(i,`atlasTexture`,null),W(i,`atlasNeedsUpdate`,!1),W(i,`refreshTimeout`,null),W(i,`labelGlyphCache`,new Map),W(i,`edgeAttributeTexture`,null);var a=In();if(i.attributeLayout=mr([].concat(X(c),[a])),i.attrDescriptors=hr([].concat(X(c),[a]),i.attributeLayout),i.edgeAttributeTexture=new na(e,i.attributeLayout),i.packedAttributeData=new Float32Array(i.attributeLayout.floatsPerItem),i.atlasManager=new ma,i.gamma=.025,i.sdfBuffer=da.cutoff,i.atlasTexture=e.createTexture(),!i.atlasTexture)throw Error(`EdgeLabelProgram: failed to create atlas texture`);return e.bindTexture(e.TEXTURE_2D,i.atlasTexture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),i.atlasManager.on(ma.ATLAS_UPDATED_EVENT,function(){i.atlasNeedsUpdate=!0,i.refreshTimeout!==null&&clearTimeout(i.refreshTimeout),i.refreshTimeout=setTimeout(function(){i.refreshTimeout=null,i.renderer.refresh()},0)}),i.defaultFontKey=i.atlasManager.registerFont({family:`sans-serif`,weight:`normal`,style:`normal`}),i}return Y(t,e),q(t,[{key:`getDefinition`,value:function(){var e=WebGL2RenderingContext,t=e.FLOAT,n=e.UNSIGNED_BYTE,r=e.TRIANGLE_STRIP,i=new Set,a=[],o=U(c),s;try{for(o.s();!(s=o.n()).done;){var l=s.value,u=U(l.attributes),d;try{for(u.s();!(d=u.n()).done;){var f=d.value,h=f.name.startsWith(`a_`)?f.name:`a_${f.name}`;i.has(h)||(i.add(h),a.push({name:h,size:f.size,type:f.type}))}}catch(e){u.e(e)}finally{u.f()}}}catch(e){o.e(e)}finally{o.f()}return{VERTICES:4,VERTEX_SHADER_SOURCE:m.vertexShader,FRAGMENT_SHADER_SOURCE:m.fragmentShader,METHOD:r,UNIFORMS:m.uniforms,ATTRIBUTES:[{name:`a_edgeIndex`,size:1,type:t},{name:`a_edgeAttrIndex`,size:1,type:t},{name:`a_baseFontSize`,size:1,type:t},{name:`a_charMetrics`,size:4,type:t},{name:`a_charDims`,size:4,type:t},{name:`a_texCoords`,size:4,type:t},{name:`a_labelParams`,size:2,type:t},{name:`a_color`,size:4,type:n,normalized:!0}].concat(X(p?[{name:`a_borderColor`,size:4,type:n,normalized:!0}]:[]),X(a.filter(function(e){return![`a_curvature`,`curvature`].includes(e.name)}))),CONSTANT_ATTRIBUTES:[{name:`a_quadCorner`,size:2,type:t}],CONSTANT_DATA:[[0,0],[1,0],[0,1],[1,1]]}}},{key:`prepareLabelGlyphs`,value:function(e,t){if(t.hidden||!t.text)this.labelGlyphCache.delete(e);else{var n=t.text,r=t.fontKey||this.defaultFontKey;this.atlasManager.ensureGlyphs(n,r);var i=[],a=[],o=0,s=U(n),c;try{for(s.s();!(c=s.n()).done;){var l=c.value.codePointAt(0);if(l===void 0)i.push(void 0),a.push(o);else{var u=this.atlasManager.getGlyph(l,r);i.push(u),a.push(o),u&&(o+=u.advance)}}}catch(e){s.e(e)}finally{s.f()}this.labelGlyphCache.set(e,{glyphs:i,xOffsets:a,totalWidth:o})}}},{key:`processCharacter`,value:function(e,n,r,i){var a=this.floats,s=this.STRIDE,l=e*s,u=this.labelGlyphCache.get(n.parentKey);if(!u||!u.glyphs[i])for(var d=0;d<s;d++)a[l+d]=0;else{var f=u.glyphs[i],m=u.xOffsets[i],h=t.labelColor,g=on(h&&Z(h)===`object`&&`color`in h&&h.color?h.color:n.color),_=l;a[_++]=n.edgeIndex,a[_++]=this.edgeAttributeTexture?.getIndex(n.parentKey)??0,a[_++]=n.size,a[_++]=m,a[_++]=f.advance,a[_++]=u.totalWidth,a[_++]=Ai(n.position),a[_++]=f.atlasWidth,a[_++]=f.atlasHeight,a[_++]=f.bearingX,a[_++]=-f.bearingY,a[_++]=f.atlasX,a[_++]=f.atlasY,a[_++]=f.atlasWidth,a[_++]=f.atlasHeight;var v=t.labelMargin??n.margin;if(a[_++]=v,a[_++]=0,a[_++]=g,p&&o){var y=typeof o.color==`string`?o.color:o.color.color||`#ffffff`;a[_++]=on(y)}var b=new Set,x=U(c),S;try{for(x.s();!(S=x.n()).done;){var C=S.value,w=U(C.attributes),T;try{for(w.s();!(T=w.n()).done;){var E=T.value,D=E.name.startsWith(`a_`)?E.name.slice(2):E.name;if(D!==`curvature`&&!b.has(D)){b.add(D);for(var O=0;O<E.size;O++)a[_++]=0}}}catch(e){w.e(e)}finally{w.f()}}}catch(e){x.e(e)}finally{x.f()}}}},{key:`processEdgeLabel`,value:function(e,n,r){if(this.prepareLabelGlyphs(e,r),this.edgeAttributeTexture&&!r.hidden&&r.text){this.edgeAttributeTexture.allocate(e);var i=this.packedAttributeData;gr(this.attrDescriptors,r.edgeAttributes,i,``,Ra,0),this.edgeAttributeTexture.updateAllAttributes(e,i)}return $(t,`processLabel`,this,3)([e,n,r])}},{key:`updateAtlasTexture`,value:function(){if(this.atlasNeedsUpdate){var e=this.normalProgram.gl,t=this.atlasManager.getTextures();if(t.length!==0){var n=t[0];e.bindTexture(e.TEXTURE_2D,this.atlasTexture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n.width,n.height,0,e.RGBA,e.UNSIGNED_BYTE,n.data),e.bindTexture(e.TEXTURE_2D,null),this.atlasNeedsUpdate=!1}}}},{key:`setUniforms`,value:function(e,t){var n=t.gl,r=t.uniformLocations,i=this.atlasManager.getTextures(),a=i.length>0?[i[0].width,i[0].height]:[1,1];if(n.uniformMatrix3fv(r.u_matrix,!1,e.matrix),n.uniform1f(r.u_sizeRatio,e.sizeRatio),n.uniform1f(r.u_correctionRatio,e.correctionRatio),n.uniform1f(r.u_pixelRatio,e.pixelRatio),n.uniform1f(r.u_cameraAngle,e.cameraAngle),n.uniform1f(r.u_sdfBufferPixels,da.buffer),n.uniform2f(r.u_resolution,e.width,e.height),n.uniform2f(r.u_atlasSize,a[0],a[1]),n.uniform1f(r.u_gamma,this.gamma),n.uniform1f(r.u_sdfBuffer,this.sdfBuffer),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.atlasTexture),n.uniform1i(r.u_atlas,0),r.u_nodeDataTexture!==void 0&&n.uniform1i(r.u_nodeDataTexture,e.nodeDataTextureUnit),r.u_nodeDataTextureWidth!==void 0&&n.uniform1i(r.u_nodeDataTextureWidth,e.nodeDataTextureWidth),r.u_edgeDataTexture!==void 0&&n.uniform1i(r.u_edgeDataTexture,e.edgeDataTextureUnit),r.u_edgeDataTextureWidth!==void 0&&n.uniform1i(r.u_edgeDataTextureWidth,e.edgeDataTextureWidth),r.u_edgeFrameTexture!==void 0&&n.uniform1i(r.u_edgeFrameTexture,e.edgeFrameTextureUnit),r.u_edgeFrameTextureWidth!==void 0&&n.uniform1i(r.u_edgeFrameTextureWidth,e.edgeFrameTextureWidth),p&&o&&r.u_borderWidth!==void 0){var s=o.width/da.buffer*this.sdfBuffer;n.uniform1f(r.u_borderWidth,s)}if(this.edgeAttributeTexture&&r.u_edgeAttributeTexture!==void 0&&(this.edgeAttributeTexture.bind(va),n.uniform1i(r.u_edgeAttributeTexture,va),n.uniform1i(r.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),n.uniform1i(r.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem())),l===`scaled`&&r.u_zoomSizeRatio!==void 0){var c=1/this.renderer.getSetting(`zoomToSizeRatioFunction`)(e.zoomRatio);n.uniform1f(r.u_zoomSizeRatio,c)}}},{key:`renderProgram`,value:function(e,n){this.updateAtlasTexture(),this.atlasManager.hasPendingGlyphs()&&(this.atlasManager.flush(),this.updateAtlasTexture()),this.edgeAttributeTexture&&this.edgeAttributeTexture.upload(),$(t,`renderProgram`,this,3)([e,n])}},{key:`registerFont`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:`normal`,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:`normal`;return this.atlasManager.registerFont({family:e,weight:t,style:n})}},{key:`getAtlasManager`,value:function(){return this.atlasManager}},{key:`ensureGlyphsReady`,value:function(e,t){var n=t||this.defaultFontKey,r=U(e),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;this.atlasManager.ensureGlyphs(a,n)}}catch(e){r.e(e)}finally{r.f()}this.atlasManager.flush()}},{key:`measureLabelAtlasWidth`,value:function(e,t){var n=t||this.defaultFontKey;this.atlasManager.ensureGlyphs(e,n),this.atlasManager.hasPendingGlyphs()&&this.atlasManager.flush();var r=0,i=U(e),a;try{for(i.s();!(a=i.n()).done;){var o=a.value.codePointAt(0);if(o!==void 0){var s=this.atlasManager.getGlyph(o,n);s&&(r+=s.advance)}}}catch(e){i.e(e)}finally{i.f()}return r}},{key:`measureLabel`,value:function(e,t,n){return{width:this.measureLabelAtlasWidth(e,n)*(t/da.fontSize),height:t,textHeight:t}}},{key:`kill`,value:function(){var e=this.normalProgram.gl;this.refreshTimeout!==null&&(clearTimeout(this.refreshTimeout),this.refreshTimeout=null),this.atlasTexture&&=(e.deleteTexture(this.atlasTexture),null),this.edgeAttributeTexture&&=(this.edgeAttributeTexture.kill(),null),this.atlasManager.destroy(),this.labelGlyphCache.clear(),$(t,`kill`,this,3)([])}}])}(la);return W(h,`labelColor`,i),W(h,`labelMargin`,a),new h(e,t,n)}function Mi(){return{name:`none`,glsl:`
// No extremity - always returns positive (outside)
float extremity_none(vec2 uv, float lengthRatio, float widthRatio) {
  return 1.0;
}
`,length:0,widthFactor:1,margin:0,uniforms:[],attributes:[]}}function Ni(e,t,n,r,i,a,o){var s=ai(r),c=s.paths,l=s.layers,u=s.defaultHead,d=s.defaultTail,f=[Mi()].concat(X(s.extremities)),p={},m={};c.forEach(function(e,t){return p[e.name]=t}),f.forEach(function(e,t){return m[e.name]=t});var h=m[u]??0,g=m[d]??0,_=null,v=mr([].concat(X(c),X(l))),y=function(e){function t(e,n,r){var a;K(this,t),_||=vi({paths:c,extremities:f,layers:l,antialias:i}),a=J(this,t,[e,n,r]),W(a,`layerLifecycles`,new Map),W(a,`needsShaderRegeneration`,!1),W(a,`edgeAttributeTexture`,null),W(a,`layout`,v),W(a,`attrDescriptors`,[]),W(a,`lifecycleIndexOffset`,c.length),a._pickingBuffer=n,a.edgeAttributeTexture=new na(e,a.layout),a.packedAttributeData=new Float32Array(a.layout.floatsPerItem),l.forEach(function(t,n){if(t.lifecycle){var i={gl:e,renderer:{refresh:function(){return r.refresh()}},getUniformLocation:function(t){return e.getUniformLocation(a.normalProgram.program,t)},requestShaderRegeneration:function(){a.needsShaderRegeneration=!0},requestRefresh:function(){r.refresh()}};a.layerLifecycles.set(n,t.lifecycle(i))}}),a.layerLifecycles.forEach(function(e){return e.init?.call(e)});var o=new Map;return a.layerLifecycles.forEach(function(e,t){e.getAttributeData&&o.set(c.length+t,e)}),a.attrDescriptors=hr([].concat(X(c),X(l)),a.layout,o),a}return Y(t,e),q(t,[{key:`getAttributeTexture`,value:function(){return this.edgeAttributeTexture}},{key:`resolveEdgeIds`,value:function(e,t,n){var r=e,i=0,a=h,o=g,s=t?r.selfLoopPath:n&&r.parallelPath?r.parallelPath:r.path;s&&p[s]!==void 0&&(i=p[s]),r.head&&r.head!==`none`&&m[r.head]!==void 0&&(a=m[r.head]),r.tail&&r.tail!==`none`&&m[r.tail]!==void 0&&(o=m[r.tail]);var c=f[a],l=f[o];return{pathId:i,headId:a,tailId:o,headLengthRatio:Mn(c.length)?0:c.length,tailLengthRatio:Mn(l.length)?0:l.length}}},{key:`getDefinition`,value:function(){var e=WebGL2RenderingContext.TRIANGLE_STRIP,t=_;return{VERTICES:t.verticesPerEdge,VERTEX_SHADER_SOURCE:t.vertexShader,FRAGMENT_SHADER_SOURCE:t.fragmentShader,METHOD:e,UNIFORMS:t.uniforms,ATTRIBUTES:t.attributes,CONSTANT_ATTRIBUTES:t.constantAttributes,CONSTANT_DATA:t.constantData}}},{key:`maybeRegenerateShaders`,value:function(){var e=this;if(this.needsShaderRegeneration){this.needsShaderRegeneration=!1,_=vi({paths:c,extremities:f,layers:l.map(function(t,n){var r=e.layerLifecycles.get(n);return r!=null&&r.regenerate?r.regenerate():t}),antialias:this.renderer.getSetting(`antialiasEdges`)});var t=this.normalProgram.gl,n=this.normalProgram,r=n.program,i=n.buffer,a=n.vertexShader,o=n.fragmentShader;t.deleteProgram(r),t.deleteBuffer(i),t.deleteShader(a),t.deleteShader(o),this.normalProgram=this.getProgramInfo(`normal`,t,_.vertexShader,_.fragmentShader,this._pickingBuffer)}}},{key:`process`,value:function(e,t,n,r,i,a){var o=t*this.STRIDE;if(i.visibility===`hidden`||n.visibility===`hidden`||r.visibility===`hidden`){for(var s=o+this.STRIDE;o<s;o++)this.floats[o]=0;this.floats[t*this.STRIDE]=ea}else this.processVisibleItem(cn(e),o,n,r,i,a)}},{key:`processVisibleItem`,value:function(e,t,n,r,i,a){var o=this.floats,s=this.ints;o[t++]=a,o[t++]=on(i.color),s[t++]=e,o[t++]=i.opacity??1;var c=this.packedAttributeData;gr(this.attrDescriptors,i,c,i.color,this.layerLifecycles,this.lifecycleIndexOffset),this.edgeAttributeTexture.updateAllAttributesAtRow(a,c)}},{key:`setUniforms`,value:function(e,t){var n=this,r=t.gl,i=t.uniformLocations;i.u_matrix&&r.uniformMatrix3fv(i.u_matrix,!1,e.matrix),i.u_sizeRatio&&r.uniform1f(i.u_sizeRatio,e.sizeRatio),i.u_correctionRatio&&r.uniform1f(i.u_correctionRatio,e.correctionRatio),i.u_zoomRatio&&r.uniform1f(i.u_zoomRatio,e.zoomRatio),i.u_pixelRatio&&r.uniform1f(i.u_pixelRatio,e.pixelRatio),i.u_cameraAngle&&r.uniform1f(i.u_cameraAngle,e.cameraAngle),i.u_feather&&r.uniform1f(i.u_feather,e.antiAliasingFeather),i.u_minEdgeThickness&&r.uniform1f(i.u_minEdgeThickness,e.minEdgeThickness),i.u_pickingPadding&&r.uniform1f(i.u_pickingPadding,e.edgePickingPadding),i.u_nodeDataTexture&&r.uniform1i(i.u_nodeDataTexture,e.nodeDataTextureUnit),i.u_nodeDataTextureWidth&&r.uniform1i(i.u_nodeDataTextureWidth,e.nodeDataTextureWidth),i.u_edgeDataTexture&&r.uniform1i(i.u_edgeDataTexture,e.edgeDataTextureUnit),i.u_edgeDataTextureWidth&&r.uniform1i(i.u_edgeDataTextureWidth,e.edgeDataTextureWidth),i.u_edgeFrameTexture&&r.uniform1i(i.u_edgeFrameTexture,e.edgeFrameTextureUnit),i.u_edgeFrameTextureWidth&&r.uniform1i(i.u_edgeFrameTextureWidth,e.edgeFrameTextureWidth),this.edgeAttributeTexture&&this.layout.floatsPerItem>0&&(this.edgeAttributeTexture.bind(va),i.u_edgeAttributeTexture&&r.uniform1i(i.u_edgeAttributeTexture,va),i.u_edgeAttributeTextureWidth&&r.uniform1i(i.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),i.u_edgeAttributeTexelsPerEdge&&r.uniform1i(i.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem()));var a=new Set;c.forEach(function(e){e.uniforms.forEach(function(e){a.has(e.name)||(a.add(e.name),n.setTypedUniform(e,t))})}),f.forEach(function(e){e.uniforms.forEach(function(e){a.has(e.name)||(a.add(e.name),n.setTypedUniform(e,t))})}),l.forEach(function(e){e.uniforms.forEach(function(e){a.has(e.name)||(a.add(e.name),n.setTypedUniform(e,t))})})}},{key:`render`,value:function(e,n,r){this.maybeRegenerateShaders(),$(t,`render`,this,3)([e,n,r])}},{key:`renderProgram`,value:function(e,n){this.layerLifecycles.forEach(function(e){return e.beforeRender?.call(e)}),$(t,`renderProgram`,this,3)([e,n])}},{key:`uploadAttributeTexture`,value:function(){this.edgeAttributeTexture&&this.layout.floatsPerItem>0&&this.edgeAttributeTexture.upload()}},{key:`kill`,value:function(){this.layerLifecycles.forEach(function(e){return e.kill?.call(e)}),this.edgeAttributeTexture&&=(this.edgeAttributeTexture.kill(),null),$(t,`kill`,this,3)([])}}])}(aa),b=f[h],x=f[g],S=G({paths:c,headLengthRatio:Mn(b.length)?0:b.length,tailLengthRatio:Mn(x.length)?0:x.length},r.label),C=Ti(S),w=function(){return{labelProgram:ji(e,null,n,S),labelBackgroundProgram:wi(e,t,n,{shaderConfig:C})}},T=new Da(e,{paths:c,extremities:f,layers:l,nodeShapes:a,nodeLayers:o});return{edgeProgram:new y(e,null,n),createLabelPrograms:w,framePass:T}}var Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra;function za(){return(za=t((()=>{zn(),yn(),Gn(),Pi=m(),Fi=new Map,Ii=new Map,Li=0,Ri={right:0,left:1,above:2,below:3,over:4},zi=`
float matrixScaleX = length(vec2(u_matrix[0][0], u_matrix[1][0]));
float nodeRadiusGraphSpace = nodeSize * u_correctionRatio / u_sizeRatio * 2.0;
float nodeRadiusNDC = nodeRadiusGraphSpace * matrixScaleX;
float nodeRadiusPixels = nodeRadiusNDC * u_resolution.x / 2.0;
`,Bi=`
mat2 rotate2D(float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return mat2(c, -s, s, c);
}
`,Vi=`
vec2 getLabelDirection(float positionMode) {
  if (positionMode < 0.5) return vec2(1.0, 0.0);   // Right
  if (positionMode < 1.5) return vec2(-1.0, 0.0);  // Left
  if (positionMode < 2.5) return vec2(0.0, -1.0);  // Above
  if (positionMode < 3.5) return vec2(0.0, 1.0);   // Below
  return vec2(0.0);                                 // Over (centered)
}
`,Hi=`
float sdfBox(vec2 p, vec2 halfSize) {
  vec2 d = abs(p) - halfSize;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}
`,Ui=`
float sdfRotatedBox(vec2 p, vec2 halfSize, float angle) {
  float c = cos(-angle);
  float s = sin(-angle);
  vec2 rotatedP = mat2(c, -s, s, c) * p;
  return sdfBox(rotatedP, halfSize);
}
`,Wi=`
float sdfRoundedBox(vec2 p, vec2 halfSize, float radius) {
  vec2 d = abs(p) - halfSize + radius;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - radius;
}
`,Gi=`
float sdfRoundedRotatedBox(vec2 p, vec2 halfSize, float angle, float radius) {
  float c = cos(-angle);
  float s = sin(-angle);
  vec2 rotatedP = mat2(c, -s, s, c) * p;
  return sdfRoundedBox(rotatedP, halfSize, radius);
}
`,Ki=`
vec2 labelBoxCenter(float positionMode, float labelStart, vec2 halfSize, float textHalfY) {
  if (positionMode < 0.5) return vec2(labelStart + halfSize.x, 0.0);    // right
  if (positionMode < 1.5) return vec2(-(labelStart + halfSize.x), 0.0); // left
  if (positionMode < 2.5) return vec2(0.0, -(labelStart + textHalfY));  // above
  if (positionMode < 3.5) return vec2(0.0, labelStart + textHalfY);     // below
  return vec2(0.0);                                                     // over
}
`,qi=`
vec4 readNodeData(sampler2D nodeDataTexture, int nodeDataTextureWidth, int nodeIndex) {
  int t = nodeIndex * 2;
  ivec2 coord = ivec2(t % nodeDataTextureWidth, t / nodeDataTextureWidth);
  return texelFetch(nodeDataTexture, coord, 0);
}
`,Ji=`
vec4 readNodeFlags(sampler2D nodeDataTexture, int nodeDataTextureWidth, int nodeIndex) {
  int t = nodeIndex * 2 + 1;
  ivec2 coord = ivec2(t % nodeDataTextureWidth, t / nodeDataTextureWidth);
  return texelFetch(nodeDataTexture, coord, 0);
}
`,Yi=`
vec4 readNodeColor(sampler2D nodeDataTexture, int nodeDataTextureWidth, int nodeIndex) {
  int t = nodeIndex * 2 + 1;
  ivec2 coord = ivec2(t % nodeDataTextureWidth, t / nodeDataTextureWidth);
  vec4 texel = texelFetch(nodeDataTexture, coord, 0);
  float r = floor(texel.b / 65536.0);
  float g = floor(mod(texel.b, 65536.0) / 256.0);
  float b = mod(texel.b, 256.0);
  return vec4(r / 255.0, g / 255.0, b / 255.0, texel.a);
}
`,Xi=`
vec4 readFrameTexel(sampler2D frameTexture, int frameTextureWidth, int index) {
  ivec2 coord = ivec2(index % frameTextureWidth, index / frameTextureWidth);
  return texelFetch(frameTexture, coord, 0);
}
`,Zi=1024,Qi=1.5,$i=4096,ea=-1,ta=function(){function e(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Zi;K(this,e),W(this,`texture`,null),W(this,`dirty`,!1),W(this,`dirtyRangeStart`,1/0),W(this,`dirtyRangeEnd`,-1),W(this,`indexMap`,new Map),W(this,`freeIndices`,[]),W(this,`nextIndex`,0),this.gl=t,this.TEXELS_PER_ITEM=n,this.capacity=this.roundUpToPowerOfTwo(r);var i=this.computeTextureDimensions(this.capacity);this.textureWidth=i.width,this.textureHeight=i.height,this.data=new Float32Array(this.textureWidth*this.textureHeight*4),this.createTexture()}return q(e,[{key:`computeTextureDimensions`,value:function(e){var t=e*this.TEXELS_PER_ITEM,n=Math.min(t,$i);return{width:n,height:Math.ceil(t/n)}}},{key:`roundUpToPowerOfTwo`,value:function(e){return 2**Math.ceil(Math.log2(Math.max(1,e)))}},{key:`createTexture`,value:function(){var e=this.gl;this.texture=e.createTexture(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.textureWidth,this.textureHeight,0,e.RGBA,e.FLOAT,this.data),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null)}},{key:`resize`,value:function(e){if(!(e<=this.capacity)){var t=this.roundUpToPowerOfTwo(Math.ceil(e*Qi)),n=this.gl,r=this.computeTextureDimensions(t),i=new Float32Array(r.width*r.height*4);i.set(this.data),this.texture&&n.deleteTexture(this.texture),this.data=i,this.capacity=t,this.textureWidth=r.width,this.textureHeight=r.height,this.createTexture(),this.dirty=!0,this.dirtyRangeStart=0,this.dirtyRangeEnd=this.nextIndex}}},{key:`allocate`,value:function(e){var t=this.indexMap.get(e);if(t!==void 0)return t;var n;return this.freeIndices.length>0?n=this.freeIndices.pop():(n=this.nextIndex++,n>=this.capacity&&this.resize(n+1)),this.indexMap.set(e,n),n}},{key:`free`,value:function(e){var t=this.indexMap.get(e);if(t!==void 0){this.indexMap.delete(e),this.freeIndices.push(t);for(var n=t*this.TEXELS_PER_ITEM*4,r=0;r<this.TEXELS_PER_ITEM*4;r++)this.data[n+r]=0;this.markDirty(t)}}},{key:`getIndex`,value:function(e){return this.indexMap.get(e)??-1}},{key:`has`,value:function(e){return this.indexMap.has(e)}},{key:`markDirty`,value:function(e){this.dirty=!0,this.dirtyRangeStart=Math.min(this.dirtyRangeStart,e),this.dirtyRangeEnd=Math.max(this.dirtyRangeEnd,e+1)}},{key:`upload`,value:function(){if(this.dirty&&this.texture){var e=this.gl,t=this.textureWidth;e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.texture);var n=this.dirtyRangeStart*this.TEXELS_PER_ITEM,r=Math.min(this.dirtyRangeEnd*this.TEXELS_PER_ITEM,this.capacity*this.TEXELS_PER_ITEM);if(n<r)for(var i=Math.floor(n/t),a=Math.floor((r-1)/t),o=i;o<=a;o++){var s=o*t,c=Math.min(s+t,this.capacity*this.TEXELS_PER_ITEM),l=Math.max(n,s),u=Math.min(r,c);if(l<u){var d=l-s,f=u-l,p=this.data.subarray(l*4,u*4);e.texSubImage2D(e.TEXTURE_2D,0,d,o,f,1,e.RGBA,e.FLOAT,p)}}e.bindTexture(e.TEXTURE_2D,null),this.dirty=!1,this.dirtyRangeStart=1/0,this.dirtyRangeEnd=-1}}},{key:`bind`,value:function(e){var t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.texture)}},{key:`getTexture`,value:function(){return this.texture}},{key:`getCapacity`,value:function(){return this.capacity}},{key:`getTextureWidth`,value:function(){return this.textureWidth}},{key:`getTextureHeight`,value:function(){return this.textureHeight}},{key:`getTexelsPerItem`,value:function(){return this.TEXELS_PER_ITEM}},{key:`getCount`,value:function(){return this.indexMap.size}},{key:`getHighWaterMark`,value:function(){return this.nextIndex}},{key:`isDirty`,value:function(){return this.dirty}},{key:`clear`,value:function(){this.indexMap.clear(),this.freeIndices=[],this.nextIndex=0,this.data.fill(0),this.dirty=!0,this.dirtyRangeStart=0,this.dirtyRangeEnd=this.capacity}},{key:`restore`,value:function(){this.createTexture(),this.dirty=!1,this.dirtyRangeStart=1/0,this.dirtyRangeEnd=-1}},{key:`kill`,value:function(){this.texture&&=(this.gl.deleteTexture(this.texture),null),this.indexMap.clear(),this.freeIndices=[]}}])}(),na=function(e){function t(e,n,r){var i;return K(this,t),i=J(this,t,[e,n.texelsPerItem,r]),i.floatsPerItem=n.floatsPerItem,i}return Y(t,e),q(t,[{key:`updateAllAttributes`,value:function(e,t){var n=this.indexMap.get(e);n===void 0&&(n=this.allocate(e));for(var r=n*this.TEXELS_PER_ITEM*4,i=Math.min(t.length,this.floatsPerItem),a=0;a<i;a++)this.data[r+a]=t[a];this.markDirty(n)}},{key:`updateAllAttributesAtRow`,value:function(e,t){e>=this.capacity&&this.resize(e+1);for(var n=e*this.TEXELS_PER_ITEM*4,r=Math.min(t.length,this.floatsPerItem),i=0;i<r;i++)this.data[n+i]=t[i];this.markDirty(e)}}])}(ta),ra=[`r`,`g`,`b`,`a`],ia=W(W(W(W(W(W(W(W({},WebGL2RenderingContext.BOOL,1),WebGL2RenderingContext.BYTE,1),WebGL2RenderingContext.UNSIGNED_BYTE,1),WebGL2RenderingContext.SHORT,2),WebGL2RenderingContext.UNSIGNED_SHORT,2),WebGL2RenderingContext.INT,4),WebGL2RenderingContext.UNSIGNED_INT,4),WebGL2RenderingContext.FLOAT,4),aa=function(){function e(t,n,r){K(this,e),W(this,`floats`,new Float32Array),W(this,`ints`,new Uint32Array),W(this,`constantArray`,new Float32Array),W(this,`capacity`,0),W(this,`verticesCount`,0),W(this,`bufferGeneration`,0),W(this,`uploadedGeneration`,new Map),W(this,`constantBufferGeneration`,0),W(this,`uploadedConstantGeneration`,new Map),W(this,`renderOffset`,0),W(this,`renderCount`,-1),W(this,`debugStats`,{drawCalls:0,verticesDrawn:0,bufferUploadBytes:0}),W(this,`shadersLogged`,!1),W(this,`pickProgram`,null);var i=this.getDefinition();if(this.VERTICES=i.VERTICES,this.VERTEX_SHADER_SOURCE=i.VERTEX_SHADER_SOURCE,this.FRAGMENT_SHADER_SOURCE=i.FRAGMENT_SHADER_SOURCE,this.UNIFORMS=i.UNIFORMS,this.ATTRIBUTES=i.ATTRIBUTES,this.METHOD=i.METHOD,this.CONSTANT_ATTRIBUTES=`CONSTANT_ATTRIBUTES`in i?i.CONSTANT_ATTRIBUTES:[],this.CONSTANT_DATA=`CONSTANT_DATA`in i?i.CONSTANT_DATA:[],this.isInstanced=`CONSTANT_ATTRIBUTES`in i,this.ATTRIBUTES_ITEMS_COUNT=qn(this.ATTRIBUTES),this.STRIDE=this.VERTICES*this.ATTRIBUTES_ITEMS_COUNT,this.renderer=r,this.normalProgram=this.getProgramInfo(`normal`,t,i.VERTEX_SHADER_SOURCE,i.FRAGMENT_SHADER_SOURCE,null),this.pickProgram=this.getProgramInfo(`pick`,t,yr(i.VERTEX_SHADER_SOURCE),yr(i.FRAGMENT_SHADER_SOURCE),null),this.isInstanced){var a=qn(this.CONSTANT_ATTRIBUTES);if(this.CONSTANT_DATA.length!==this.VERTICES)throw Error(`Program: error while getting constant data (expected ${this.VERTICES} items, received ${this.CONSTANT_DATA.length} instead)`);this.constantArray=new Float32Array(this.CONSTANT_DATA.length*a);for(var o=0;o<this.CONSTANT_DATA.length;o++){var s=this.CONSTANT_DATA[o];if(s.length!==a)throw Error(`Program: error while getting constant data (one vector has ${s.length} items instead of ${a})`);for(var c=0;c<s.length;c++)this.constantArray[o*a+c]=s[c]}this.STRIDE=this.ATTRIBUTES_ITEMS_COUNT}}return q(e,[{key:`kill`,value:function(){Qn(this.normalProgram),this.pickProgram&&Qn(this.pickProgram)}},{key:`resetDebugStats`,value:function(){this.debugStats.drawCalls=0,this.debugStats.verticesDrawn=0,this.debugStats.bufferUploadBytes=0}},{key:`getProgramInfo`,value:function(e,t,n,r,i){var a=t.createBuffer();if(a===null)throw Error(`Program: error while creating the WebGL buffer.`);var o=Yn(t,n),s=Xn(t,r),c=Zn(t,[o,s]),l={};this.UNIFORMS.forEach(function(e){var n=t.getUniformLocation(c,e);n&&(l[e]=n)});var u={};this.ATTRIBUTES.forEach(function(e){u[e.name]=t.getAttribLocation(c,e.name)});var d;if(this.isInstanced&&(this.CONSTANT_ATTRIBUTES.forEach(function(e){u[e.name]=t.getAttribLocation(c,e.name)}),d=t.createBuffer(),d===null))throw Error(`Program: error while creating the WebGL constant buffer.`);return{name:e,program:c,gl:t,frameBuffer:i,buffer:a,constantBuffer:d||{},uniformLocations:l,attributeLocations:u,isPicking:e===`pick`,vertexShader:o,fragmentShader:s}}},{key:`bindProgram`,value:function(e){var t=this,n=0,r=e.gl,i=e.buffer;if(this.isInstanced){if(r.bindBuffer(r.ARRAY_BUFFER,e.constantBuffer),n=0,this.CONSTANT_ATTRIBUTES.forEach(function(r){return n+=t.bindAttribute(r,e,n,!1)}),this.uploadedConstantGeneration.get(e.constantBuffer)!==this.constantBufferGeneration){var a;r.bufferData(r.ARRAY_BUFFER,this.constantArray,r.STATIC_DRAW),this.uploadedConstantGeneration.set(e.constantBuffer,this.constantBufferGeneration),(a=this.renderer)!=null&&a.getSetting(`DEBUG_logRenderStats`)&&(this.debugStats.bufferUploadBytes+=this.constantArray.byteLength)}if(r.bindBuffer(r.ARRAY_BUFFER,e.buffer),n=this.renderOffset*this.ATTRIBUTES_ITEMS_COUNT*Float32Array.BYTES_PER_ELEMENT,this.ATTRIBUTES.forEach(function(r){return n+=t.bindAttribute(r,e,n,!0)}),this.uploadedGeneration.get(i)!==this.bufferGeneration){var o;r.bufferData(r.ARRAY_BUFFER,this.floats,r.DYNAMIC_DRAW),this.uploadedGeneration.set(i,this.bufferGeneration),(o=this.renderer)!=null&&o.getSetting(`DEBUG_logRenderStats`)&&(this.debugStats.bufferUploadBytes+=this.floats.byteLength)}}else if(r.bindBuffer(r.ARRAY_BUFFER,i),n=0,this.ATTRIBUTES.forEach(function(r){return n+=t.bindAttribute(r,e,n)}),this.uploadedGeneration.get(i)!==this.bufferGeneration){var s;r.bufferData(r.ARRAY_BUFFER,this.floats,r.DYNAMIC_DRAW),this.uploadedGeneration.set(i,this.bufferGeneration),(s=this.renderer)!=null&&s.getSetting(`DEBUG_logRenderStats`)&&(this.debugStats.bufferUploadBytes+=this.floats.byteLength)}r.bindBuffer(r.ARRAY_BUFFER,null)}},{key:`unbindProgram`,value:function(e){var t=this;this.isInstanced?(this.CONSTANT_ATTRIBUTES.forEach(function(n){return t.unbindAttribute(n,e,!1)}),this.ATTRIBUTES.forEach(function(n){return t.unbindAttribute(n,e,!0)})):this.ATTRIBUTES.forEach(function(n){return t.unbindAttribute(n,e)})}},{key:`bindAttribute`,value:function(e,t,n,r){var i=ia[e.type];if(typeof i!=`number`)throw Error(`Program.bind: yet unsupported attribute type "${e.type}"`);var a=t.attributeLocations[e.name],o=t.gl;if(a!==-1){o.enableVertexAttribArray(a);var s=this.isInstanced?(r?this.ATTRIBUTES_ITEMS_COUNT:qn(this.CONSTANT_ATTRIBUTES))*Float32Array.BYTES_PER_ELEMENT:this.ATTRIBUTES_ITEMS_COUNT*Float32Array.BYTES_PER_ELEMENT;o.vertexAttribPointer(a,e.size,e.type,e.normalized||!1,s,n),this.isInstanced&&r&&o.vertexAttribDivisor(a,1)}return e.size*i}},{key:`unbindAttribute`,value:function(e,t,n){var r=t.attributeLocations[e.name],i=t.gl;r!==-1&&(i.disableVertexAttribArray(r),this.isInstanced&&n&&i.vertexAttribDivisor(r,0))}},{key:`reallocate`,value:function(e){e!==this.capacity&&(this.capacity=e,this.verticesCount=this.VERTICES*e,this.floats=new Float32Array(this.isInstanced?this.capacity*this.ATTRIBUTES_ITEMS_COUNT:this.verticesCount*this.ATTRIBUTES_ITEMS_COUNT),this.ints=new Uint32Array(this.floats.buffer),this.invalidateBuffers())}},{key:`invalidateBuffers`,value:function(){this.bufferGeneration++,this.constantBufferGeneration++}},{key:`hasNothingToRender`,value:function(){return this.verticesCount===0}},{key:`setTypedUniform`,value:function(e,t){vr(t.gl,t.uniformLocations[e.name]??null,e)}},{key:`renderProgram`,value:function(e,t){var n=t.gl,r=t.program;t.isPicking?n.disable(n.BLEND):n.enable(n.BLEND),n.useProgram(r),this.setUniforms(e,t),this.drawWebGL(this.METHOD,t)}},{key:`render`,value:function(e,t,n){var r;if(!this.shadersLogged&&(r=this.renderer)!=null&&r.getSetting(`DEBUG_logShaders`)&&(this.shadersLogged=!0,console.log(`[sigma] DEBUG_logShaders: ${this.constructor.name}`,{normal:{vertexShaderSource:this.VERTEX_SHADER_SOURCE,fragmentShaderSource:this.FRAGMENT_SHADER_SOURCE},pick:{vertexShaderSource:yr(this.VERTEX_SHADER_SOURCE),fragmentShaderSource:yr(this.FRAGMENT_SHADER_SOURCE)}})),!this.hasNothingToRender()){this.renderOffset=t??0,this.renderCount=n??-1;var i=this.normalProgram.gl;if(i.bindFramebuffer(i.FRAMEBUFFER,null),i.viewport(0,0,e.width*e.pixelRatio,e.height*e.pixelRatio),this.bindProgram(this.normalProgram),this.renderProgram(e,this.normalProgram),this.unbindProgram(this.normalProgram),this.pickProgram&&e.pickingFrameBuffer){var a=Math.ceil(e.width*e.pixelRatio/e.downSizingRatio),o=Math.ceil(e.height*e.pixelRatio/e.downSizingRatio);i.bindFramebuffer(i.FRAMEBUFFER,e.pickingFrameBuffer),i.viewport(0,0,a,o),this.bindProgram(this.pickProgram),this.renderProgram(e,this.pickProgram),this.unbindProgram(this.pickProgram),i.bindFramebuffer(i.FRAMEBUFFER,null),i.viewport(0,0,e.width*e.pixelRatio,e.height*e.pixelRatio)}}}},{key:`drawWebGL`,value:function(e,t){var n,r=t.gl,i=this.renderCount>=0?this.renderCount:this.capacity;(n=this.renderer)!=null&&n.getSetting(`DEBUG_logRenderStats`)&&(this.debugStats.drawCalls++,this.debugStats.verticesDrawn+=i*this.VERTICES),this.isInstanced?r.drawArraysInstanced(e,0,this.VERTICES,i):r.drawArrays(e,this.renderOffset*this.VERTICES,i*this.VERTICES)}}])}(),oa={below:0,above:1,left:2,right:3},sa=`#version 300 es
precision highp float;

uniform sampler2D u_atlasTexture;

in vec2 v_texCoord;

layout(location = 0) out vec4 fragColor;
#ifdef PICKING_MODE
layout(location = 1) out vec4 pickColor;
#endif

void main() {
  // Canvas textures are premultiplied; output directly for (ONE, 1-SRC_ALPHA) blending
  vec4 color = texture(u_atlasTexture, v_texCoord);
  if (color.a < 0.01) discard;
  fragColor = color;
#ifdef PICKING_MODE
  pickColor = vec4(0.0); // Attachments are not pickable
#endif
}
`,ca=5,la=function(e){function t(){var e;K(this,t);var n=[...arguments];return e=J(this,t,[].concat(n)),W(e,`totalCharacterCount`,0),W(e,`bufferCapacity`,0),e}return Y(t,e),q(t,[{key:`processLabel`,value:function(e,t,n){if(n.hidden||!n.text)return 0;for(var r=n.text,i=r.length,a=0;a<i;a++){var o=r[a];this.processCharacter(t+a,n,o,a)}return i}},{key:`hasNothingToRender`,value:function(){return this.totalCharacterCount===0}},{key:`drawWebGL`,value:function(e,t){var n=t.gl;this.totalCharacterCount!==0&&(this.isInstanced?n.drawArraysInstanced(e,0,this.VERTICES,this.totalCharacterCount):n.drawArrays(e,0,this.totalCharacterCount*this.VERTICES))}},{key:`reallocate`,value:function(e){this.totalCharacterCount=e,e>this.bufferCapacity&&(this.bufferCapacity=Math.max(e,Math.ceil(this.bufferCapacity*1.5)||1e3),$(t,`reallocate`,this,3)([this.bufferCapacity]))}}])}(aa),ua=`#version 300 es
precision highp float;

in vec4 v_id;
in vec4 v_color;

out vec4 fragColor;

void main() {
  #ifdef PICKING_MODE
    fragColor = v_id;
  #else
    if (v_color.a <= 0.0) discard;
    // v_color is non-premultiplied RGBA (0-1); convert to premultiplied for blending
    fragColor = vec4(v_color.rgb * v_color.a, v_color.a);
  #endif
}
`,da={fontSize:64,buffer:8,radius:24,cutoff:.25,maxTextureSize:2048,debounceTimeout:100},fa=2,pa=0x56bc75e2d63100000,ma=function(e){function t(){var e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return K(this,t),e=J(this,t),W(e,`fonts`,new Map),W(e,`textures`,[]),W(e,`cursor`,{x:0,y:0,rowHeight:0,atlasIndex:0}),W(e,`pendingGlyphs`,[]),W(e,`debounceTimer`,null),e.options=G(G({},da),n),e.canvas=document.createElement(`canvas`),e.canvas.width=e.options.maxTextureSize,e.canvas.height=e.options.maxTextureSize,e.ctx=e.canvas.getContext(`2d`,{willReadFrequently:!0}),e.measureCanvas=document.createElement(`canvas`),e.measureCtx=e.measureCanvas.getContext(`2d`),e.textures.push(e.ctx.getImageData(0,0,1,1)),e}return Y(t,e),q(t,[{key:`getFontKey`,value:function(e){return`${e.family}-${e.weight}-${e.style}`}},{key:`registerFont`,value:function(e){var t=this.getFontKey(e);if(this.fonts.has(t))return t;var n=Lr(this.options.fontSize,e.family,e.weight,e.style,this.options.buffer);return this.fonts.set(t,{descriptor:e,generator:n,glyphs:new Map}),t}},{key:`ensureGlyphs`,value:function(e,t){var n=this.fonts.get(t);if(!n)throw Error(`Font "${t}" is not registered. Call registerFont() first.`);var r=!1,i=U(e),a;try{for(i.s();!(a=i.n()).done;){var o=a.value.codePointAt(0);o!==void 0&&(n.glyphs.has(o)||(this.pendingGlyphs.push({fontKey:t,charCode:o}),r=!0))}}catch(e){i.e(e)}finally{i.f()}r&&this.scheduleTextureGeneration()}},{key:`measureText`,value:function(e,t){var n=this.fonts.get(t);if(!n)throw Error(`Font "${t}" is not registered.`);var r=n.descriptor,i=r.family,a=r.weight,o=r.style;return this.measureCtx.font=`${o} ${a} ${this.options.fontSize}px ${i}`,this.measureCtx.measureText(e).width}},{key:`getGlyph`,value:function(e,t){var n=this.fonts.get(t);if(n)return n.glyphs.get(e)}},{key:`getTextures`,value:function(){return this.textures}},{key:`getFontCount`,value:function(){return this.fonts.size}},{key:`getGlyphCount`,value:function(){var e=0,t=U(this.fonts.values()),n;try{for(t.s();!(n=t.n()).done;){var r=n.value;e+=r.glyphs.size}}catch(e){t.e(e)}finally{t.f()}return e}},{key:`hasPendingGlyphs`,value:function(){return this.pendingGlyphs.length>0}},{key:`flush`,value:function(){this.debounceTimer&&=(clearTimeout(this.debounceTimer),null),this.generateTextures()}},{key:`destroy`,value:function(){this.debounceTimer&&clearTimeout(this.debounceTimer),this.fonts.clear(),this.textures=[],this.pendingGlyphs=[],this.removeAllListeners()}},{key:`scheduleTextureGeneration`,value:function(){var e=this;this.debounceTimer===null&&(this.options.debounceTimeout===null?this.generateTextures():this.debounceTimer=setTimeout(function(){e.debounceTimer=null,e.generateTextures()},this.options.debounceTimeout))}},{key:`generateTextures`,value:function(){if(this.pendingGlyphs.length!==0){var e=this.options,n=e.maxTextureSize,r=e.buffer,i=e.radius,a=e.cutoff,o=U(this.pendingGlyphs),s;try{for(o.s();!(s=o.n()).done;){var c=s.value,l=c.fontKey,u=c.charCode,d=this.fonts.get(l);if(d&&!d.glyphs.has(u)){var f=String.fromCodePoint(u),p=Rr(d.generator,f,r,i,a),m=p.width,h=p.height;this.cursor.x+m+fa>n&&(this.cursor.x=0,this.cursor.y+=this.cursor.rowHeight+fa,this.cursor.rowHeight=0),this.cursor.y+h+fa>n&&(this.finalizeCurrentTexture(),this.cursor={x:0,y:0,rowHeight:0,atlasIndex:this.cursor.atlasIndex+1},this.ctx.clearRect(0,0,n,n));for(var g=p.data,_=new Uint8ClampedArray(m*h*4),v=0;v<g.length;v++){var y=v*4;_[y]=255,_[y+1]=255,_[y+2]=255,_[y+3]=g[v]}var b=new ImageData(_,m,h);this.ctx.putImageData(b,this.cursor.x,this.cursor.y);var x={charCode:u,width:p.glyphWidth,height:p.glyphHeight,bearingX:-p.glyphLeft-r,bearingY:p.glyphTop+r,advance:p.glyphAdvance,atlasX:this.cursor.x,atlasY:this.cursor.y,atlasWidth:m,atlasHeight:h,atlasIndex:this.cursor.atlasIndex};d.glyphs.set(u,x),this.cursor.x+=m+fa,this.cursor.rowHeight=Math.max(this.cursor.rowHeight,h)}}}catch(e){o.e(e)}finally{o.f()}this.finalizeCurrentTexture(),this.pendingGlyphs=[],this.emit(t.ATLAS_UPDATED_EVENT,{textures:this.textures,glyphCount:this.getGlyphCount()})}}},{key:`finalizeCurrentTexture`,value:function(){var e=this.options.maxTextureSize,t=this.cursor.y>0||this.cursor.rowHeight>0,n=Math.min(e,Math.max(this.cursor.x,t?e:1)),r=Math.min(e,this.cursor.y+this.cursor.rowHeight+fa),i=this.ctx.getImageData(0,0,n,r);this.cursor.atlasIndex>=this.textures.length?this.textures.push(i):this.textures[this.cursor.atlasIndex]=i}}])}(Pi.EventEmitter),W(ma,`ATLAS_UPDATED_EVENT`,`atlasUpdated`),ha=da.fontSize,ga=`#version 300 es
precision highp float;

in float v_edgeDist;

// R32F target: only the .r channel is stored.
out vec4 fragColor;

void main() {
  fragColor = vec4(v_edgeDist, 0.0, 0.0, 0.0);
}
`,_a=function(){function e(t,n){K(this,e),W(this,`uniformLocations`,{});var r=n.shapes,i=n.layers,a=n.shapeGlobalIds;if(r.length===0)throw Error(`NodeLabelFramePass: at least one shape must be provided`);this.gl=t,this.shapeUniforms=cr(r),this.hasAttributeData=Object.keys(Cr(r,i).offsets).length>0,this.vertexShader=Yn(t,Kr(r,i,a)),this.fragmentShader=Xn(t,ga),this.program=Zn(t,[this.vertexShader,this.fragmentShader]);var o=U([`u_cameraAngle`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_frameTextureWidth`,`u_frameTextureHeight`,`u_layerAttributeTexture`,`u_layerAttributeTextureWidth`,`u_layerAttributeTexelsPerNode`].concat(X(this.shapeUniforms.map(function(e){return e.name})))),s;try{for(o.s();!(s=o.n()).done;){var c=s.value;this.uniformLocations[c]=t.getUniformLocation(this.program,c)}}catch(e){o.e(e)}finally{o.f()}var l=e.FLOATS_PER_POINT*4;this.vao=t.createVertexArray(),this.buffer=t.createBuffer(),t.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,this.buffer);var u=U([[`a_nodeIndex`,0],[`a_positionMode`,4],[`a_labelAngle`,8]]),d;try{for(u.s();!(d=u.n()).done;){var f=H(d.value,2),p=f[0],m=f[1],h=t.getAttribLocation(this.program,p);h>=0&&(t.enableVertexAttribArray(h),t.vertexAttribPointer(h,1,t.FLOAT,!1,l,m))}}catch(e){u.e(e)}finally{u.f()}t.bindVertexArray(null)}return q(e,[{key:`run`,value:function(t,n,r,i,a){if(n!==0){var o=this.gl;o.useProgram(this.program),o.bindVertexArray(this.vao),o.bindBuffer(o.ARRAY_BUFFER,this.buffer),o.bufferData(o.ARRAY_BUFFER,t.subarray(0,n*e.FLOATS_PER_POINT),o.DYNAMIC_DRAW);var s=this.uniformLocations;o.uniform1f(s.u_cameraAngle,i.cameraAngle),o.uniform1i(s.u_nodeDataTexture,i.nodeDataTextureUnit),o.uniform1i(s.u_nodeDataTextureWidth,i.nodeDataTextureWidth),o.uniform1f(s.u_frameTextureWidth,r.getTextureWidth()),o.uniform1f(s.u_frameTextureHeight,r.getTextureHeight()),this.hasAttributeData&&a&&(a.bind(ca),s.u_layerAttributeTexture&&o.uniform1i(s.u_layerAttributeTexture,ca),s.u_layerAttributeTextureWidth&&o.uniform1i(s.u_layerAttributeTextureWidth,a.getTextureWidth()),s.u_layerAttributeTexelsPerNode&&o.uniform1i(s.u_layerAttributeTexelsPerNode,a.getTexelsPerItem()));var c=U(this.shapeUniforms),l;try{for(c.s();!(l=c.n()).done;){var u=l.value;vr(o,this.uniformLocations[u.name],u)}}catch(e){c.e(e)}finally{c.f()}r.bindAsRenderTarget(),o.disable(o.BLEND),o.disable(o.DEPTH_TEST),o.drawArrays(o.POINTS,0,n),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindVertexArray(null)}}},{key:`kill`,value:function(){var e=this.gl;e.deleteProgram(this.program),e.deleteShader(this.vertexShader),e.deleteShader(this.fragmentShader),e.deleteBuffer(this.buffer),e.deleteVertexArray(this.vao)}}])}(),W(_a,`FLOATS_PER_POINT`,3),va=6,ya=WebGL2RenderingContext,ba=ya.FLOAT,xa=ya.UNSIGNED_BYTE,Sa=[{queryName:`queryPathPosition`,pathFunc:`position`,returnType:`vec2`,params:`float t, vec2 source, vec2 target`,args:`t, source, target`},{queryName:`queryPathTangent`,pathFunc:`tangent`,returnType:`vec2`,params:`float t, vec2 source, vec2 target`,args:`t, source, target`},{queryName:`queryPathNormal`,pathFunc:`normal`,returnType:`vec2`,params:`float t, vec2 source, vec2 target`,args:`t, source, target`},{queryName:`queryPathLength`,pathFunc:`length`,returnType:`float`,params:`vec2 source, vec2 target`,args:`source, target`},{queryName:`queryPathClosestT`,pathFunc:`closest_t`,returnType:`float`,params:`vec2 p, vec2 source, vec2 target`,args:`p, source, target`}],Ca=0,wa=1,Ta=2,Ea=`#version 300 es
precision highp float;

in vec4 v_clamp;

// RGBA32F target: stores (tStart, tEnd, straightenFactor, pathLength).
out vec4 fragColor;

void main() {
  fragColor = v_clamp;
}
`,Da=function(){function e(t,n){K(this,e),W(this,`uniformLocations`,{});var r=n.paths,i=n.extremities,a=n.layers,o=n.nodeShapes,s=n.nodeLayers;this.gl=t,this.hasAttributeData=mr([].concat(X(r),X(a))).floatsPerItem>0,this.hasNodeAttributeData=Object.keys(Cr(o,s).offsets).length>0,this.vertexShader=Yn(t,pi(r,i,a,o,s)),this.fragmentShader=Xn(t,Ea),this.program=Zn(t,[this.vertexShader,this.fragmentShader]);var c=new Set;this.customUniforms=[];for(var l=0,u=[].concat(X(r),X(i));l<u.length;l++){var d=u[l],f=U(d.uniforms),p;try{for(f.s();!(p=f.n()).done;){var m=p.value;c.has(m.name)||(c.add(m.name),this.customUniforms.push(m))}}catch(e){f.e(e)}finally{f.f()}}var h=U([`u_sizeRatio`,`u_correctionRatio`,`u_cameraAngle`,`u_minEdgeThickness`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_edgeDataTexture`,`u_edgeDataTextureWidth`,`u_edgeAttributeTexture`,`u_edgeAttributeTextureWidth`,`u_edgeAttributeTexelsPerEdge`,`u_layerAttributeTexture`,`u_layerAttributeTextureWidth`,`u_layerAttributeTexelsPerNode`,`u_frameTextureWidth`,`u_frameTextureHeight`].concat(X(this.customUniforms.map(function(e){return e.name})))),g;try{for(h.s();!(g=h.n()).done;){var _=g.value;this.uniformLocations[_]=t.getUniformLocation(this.program,_)}}catch(e){h.e(e)}finally{h.f()}this.vao=t.createVertexArray()}return q(e,[{key:`run`,value:function(e,t,n,r,i){if(n!==0){var a=this.gl,o=this.uniformLocations;a.useProgram(this.program),a.bindVertexArray(this.vao),o.u_sizeRatio&&a.uniform1f(o.u_sizeRatio,e.sizeRatio),o.u_correctionRatio&&a.uniform1f(o.u_correctionRatio,e.correctionRatio),o.u_cameraAngle&&a.uniform1f(o.u_cameraAngle,e.cameraAngle),o.u_minEdgeThickness&&a.uniform1f(o.u_minEdgeThickness,e.minEdgeThickness),o.u_nodeDataTexture&&a.uniform1i(o.u_nodeDataTexture,e.nodeDataTextureUnit),o.u_nodeDataTextureWidth&&a.uniform1i(o.u_nodeDataTextureWidth,e.nodeDataTextureWidth),o.u_edgeDataTexture&&a.uniform1i(o.u_edgeDataTexture,e.edgeDataTextureUnit),o.u_edgeDataTextureWidth&&a.uniform1i(o.u_edgeDataTextureWidth,e.edgeDataTextureWidth),o.u_frameTextureWidth&&a.uniform1f(o.u_frameTextureWidth,t.getTextureWidth()),o.u_frameTextureHeight&&a.uniform1f(o.u_frameTextureHeight,t.getTextureHeight()),this.hasAttributeData&&r&&(r.bind(va),o.u_edgeAttributeTexture&&a.uniform1i(o.u_edgeAttributeTexture,va),o.u_edgeAttributeTextureWidth&&a.uniform1i(o.u_edgeAttributeTextureWidth,r.getTextureWidth()),o.u_edgeAttributeTexelsPerEdge&&a.uniform1i(o.u_edgeAttributeTexelsPerEdge,r.getTexelsPerItem())),this.hasNodeAttributeData&&i&&(i.bind(ca),o.u_layerAttributeTexture&&a.uniform1i(o.u_layerAttributeTexture,ca),o.u_layerAttributeTextureWidth&&a.uniform1i(o.u_layerAttributeTextureWidth,i.getTextureWidth()),o.u_layerAttributeTexelsPerNode&&a.uniform1i(o.u_layerAttributeTexelsPerNode,i.getTexelsPerItem()));var s=U(this.customUniforms),c;try{for(s.s();!(c=s.n()).done;){var l=c.value;vr(a,this.uniformLocations[l.name],l)}}catch(e){s.e(e)}finally{s.f()}t.bindAsRenderTarget(),a.disable(a.BLEND),a.disable(a.DEPTH_TEST),a.drawArrays(a.POINTS,0,n),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindVertexArray(null)}}},{key:`kill`,value:function(){var e=this.gl;e.deleteProgram(this.program),e.deleteShader(this.vertexShader),e.deleteShader(this.fragmentShader),e.deleteVertexArray(this.vao)}}])}(),Oa=`
vec3 computeEdgeLabelBodyBounds(
  float tStart, float tEnd, float pathLength,
  float webGLThickness, float headLengthRatio, float tailLengthRatio
) {
  float visibleLength = pathLength * (tEnd - tStart);

  float headLength = headLengthRatio * webGLThickness;
  float tailLength = tailLengthRatio * webGLThickness;
  float totalNeededLength = headLength + tailLength;
  if (totalNeededLength > visibleLength && totalNeededLength > 0.0001) {
    float extremityScale = visibleLength / totalNeededLength;
    headLength *= extremityScale;
    tailLength *= extremityScale;
  }

  float bodyStartDist = tStart * pathLength + tailLength;
  float bodyEndDist = tEnd * pathLength - headLength;
  return vec3(bodyStartDist, bodyEndDist, max(bodyEndDist - bodyStartDist, 0.0));
}
`,ka=`
float computeEdgeLabelScreenDir(int pathId, float t, vec2 source, vec2 target, mat3 matrix) {
  vec2 tangent = queryPathTangent(pathId, t, source, target);
  return (matrix * vec3(tangent, 0.0)).x < 0.0 ? -1.0 : 1.0;
}
`,Aa=`
float computeEdgeLabelPerpOffset(
  float positionMode,
  float halfThickness, float marginWebGL, float halfTextHeight,
  float readingSign, float screenDir
) {
  float magnitude = halfThickness + marginWebGL + halfTextHeight;
  if (positionMode == 1.0) return magnitude * readingSign;
  if (positionMode == 2.0) return -magnitude * readingSign;
  if (positionMode == 3.0) return magnitude * screenDir;
  return 0.0;
}
`,ja=da.fontSize,Ma=new Map,Na=24,Pa=(Na+1)*2,Fa=`#version 300 es
precision highp float;

in vec4 v_color;
in vec4 v_id;
in float v_alphaModifier;

out vec4 fragColor;

void main() {
#ifdef PICKING_MODE
  if (v_alphaModifier <= 0.0) discard;
  fragColor = v_id;
#else
  float alpha = v_color.a * v_alphaModifier;
  if (alpha <= 0.0) discard;
  fragColor = vec4(v_color.rgb * alpha, alpha);
#endif
}
`,Ia=da.fontSize,La=17/64,Ra=new Map})))()}function Ba(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Va,i=t.canvas,a=i.width,o=i.height,s=n.x,c=n.y,l=n.rowHeight,u=n.maxRowWidth,d={},f=[],p=U(e),m;try{for(p.s();!(m=p.n()).done;){var h=m.value,g=h.width+r,_=h.height+r;g>a||_>o||s+g>a&&c+l+_>o?f.push(h):(s+g>a&&(u=Math.max(u,s),s=0,c+=l,l=_),h.draw(t,s,c),d[h.key]={x:s,y:c,width:h.width,height:h.height},s+=g,l=Math.max(l,_))}}catch(e){p.e(e)}finally{p.f()}return u=Math.max(u,s),{atlas:d,cursor:{x:s,y:c,rowHeight:l,maxRowWidth:u},remaining:f}}var Va;function Ha(){return(Ha=t((()=>{yn(),Va=2})))()}function Ua(e,t,n,r){var i=Object.defineProperty;try{i({},``,{})}catch{i=0}Ua=function(e,t,n,r){function a(t,n){Ua(e,t,function(e){return this._invoke(t,n,e)})}t?i?i(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(a(`next`,0),a(`throw`,1),a(`return`,2))},Ua(e,t,n,r)}function Wa(){var e,t,n=typeof Symbol==`function`?Symbol:{},r=n.iterator||`@@iterator`,i=n.toStringTag||`@@toStringTag`;function a(n,r,i,a){var c=r&&r.prototype instanceof s?r:s,l=Object.create(c.prototype);return Ua(l,`_invoke`,function(n,r,i){var a,s,c,l=0,u=i||[],d=!1,f={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return a=t,s=0,c=e,f.n=n,o}};function p(n,r){for(s=n,c=r,t=0;!d&&l&&!i&&t<u.length;t++){var i,a=u[t],p=f.p,m=a[2];n>3?(i=m===r)&&(c=a[(s=a[4])?5:(s=3,3)],a[4]=a[5]=e):a[0]<=p&&((i=n<2&&p<a[1])?(s=0,f.v=r,f.n=a[1]):p<m&&(i=n<3||a[0]>r||r>m)&&(a[4]=n,a[5]=r,f.n=m,s=0))}if(i||n>1)return o;throw d=!0,r}return function(i,u,m){if(l>1)throw TypeError(`Generator is already running`);for(d&&u===1&&p(u,m),s=u,c=m;(t=s<2?e:c)||!d;){a||(s?s<3?(s>1&&(f.n=-1),p(s,c)):f.n=c:f.v=c);try{if(l=2,a){if(s||(i=`next`),t=a[i]){if(!(t=t.call(a,c)))throw TypeError(`iterator result is not an object`);if(!t.done)return t;c=t.value,s<2&&(s=0)}else s===1&&(t=a.return)&&t.call(a),s<2&&(c=TypeError(`The iterator does not provide a '`+i+`' method`),s=1);a=e}else if((t=(d=f.n<0)?c:n.call(r,f))!==o)break}catch(t){a=e,s=1,c=t}finally{l=1}}return{value:t,done:d}}}(n,i,a),!0),l}var o={};function s(){}function c(){}function l(){}t=Object.getPrototypeOf;var u=[][r]?t(t([][r]())):(Ua(t={},r,function(){return this}),t),d=l.prototype=s.prototype=Object.create(u);function f(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,l):(e.__proto__=l,Ua(e,i,`GeneratorFunction`)),e.prototype=Object.create(d),e}return c.prototype=l,Ua(d,`constructor`,l),Ua(l,`constructor`,c),c.displayName=`GeneratorFunction`,Ua(l,i,`GeneratorFunction`),Ua(d),Ua(d,i,`Generator`),Ua(d,r,function(){return this}),Ua(d,`toString`,function(){return`[object Generator]`}),(Wa=function(){return{w:a,m:f}})()}function Ga(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){n(e);return}s.done?t(c):Promise.resolve(c).then(r,i)}function Ka(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){Ga(a,r,i,o,s,`next`,e)}function s(e){Ga(a,r,i,o,s,`throw`,e)}o(void 0)})}}function qa(e){return new Promise(function(t,n){var r=new FileReader;r.onload=function(){return t(r.result)},r.onerror=n,r.readAsDataURL(e)})}function Ja(e){if(!io.has(e)){var t=fetch(e).then(function(e){return e.blob()}).then(qa).catch(function(){return io.delete(e),null});io.set(e,t)}return io.get(e)}function Ya(e){return Xa.apply(this,arguments)}function Xa(){return Xa=Ka(Wa().m(function e(t){var n,r,i;return Wa().w(function(e){for(;;)switch(e.n){case 0:return n=document.createElement(`div`),n.innerHTML=t,r=Array.from(n.querySelectorAll(`img[src]`)),i=r.filter(function(e){return!e.getAttribute(`src`).startsWith(`data:`)}),e.n=1,Promise.all(i.map(function(){var e=Ka(Wa().m(function e(t){var n;return Wa().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,Ja(t.getAttribute(`src`));case 1:n=e.v,n&&t.setAttribute(`src`,n);case 2:return e.a(2)}},e)}));return function(t){return e.apply(this,arguments)}}()));case 1:return e.a(2,n.innerHTML)}},e)})),Xa.apply(this,arguments)}function Za(e){return Qa.apply(this,arguments)}function Qa(){return Qa=Ka(Wa().m(function e(t){var n,r,i,a,o,s,c,l,u,d,f,p,m,h=arguments;return Wa().w(function(e){for(;;)switch(e.n){case 0:if(n=h.length>1&&h[1]!==void 0?h[1]:1,r=t instanceof SVGElement?new XMLSerializer().serializeToString(t):t,i=new DOMParser,a=i.parseFromString(r,`image/svg+xml`),o=a.querySelector(`svg`),o){e.n=1;break}return e.a(2,null);case 1:if(s=parseFloat(o.getAttribute(`width`)||``),c=parseFloat(o.getAttribute(`height`)||``),s>0&&c>0||(l=o.getAttribute(`viewBox`),l&&(u=l.trim().split(/[\s,]+/),s=parseFloat(u[2]),c=parseFloat(u[3]))),s>0&&c>0){e.n=2;break}return console.warn(`Sigma: SVG label attachment has no parseable dimensions — skipped.`),e.a(2,null);case 2:return d=Math.ceil(s*n),f=Math.ceil(c*n),p=new Blob([r],{type:`image/svg+xml`}),m=URL.createObjectURL(p),e.a(2,new Promise(function(e){var t=new Image;t.onload=function(){var n=document.createElement(`canvas`);n.width=d,n.height=f,n.getContext(`2d`).drawImage(t,0,0,d,f),URL.revokeObjectURL(m);try{n.getContext(`2d`).getImageData(0,0,1,1)}catch(t){if(t instanceof DOMException&&t.name===`SecurityError`){ao||(ao=!0,console.warn(`Sigma: A label attachment was skipped because the rendered canvas is tainted. SVG with <foreignObject> (used by the "html" attachment type) is blocked in Chromium and Safari. Use type: "canvas" with Canvas 2D rendering instead.`)),e(null);return}throw t}e(n)},t.onerror=function(){URL.revokeObjectURL(m),e(null)},t.src=m}))}},e)})),Qa.apply(this,arguments)}function $a(e,t){var n=document.createElement(`div`);n.style.cssText=`position:fixed;left:-99999px;top:0;visibility:hidden;width:max-content;height:max-content`,n.innerHTML=(t?`<style>${t}</style>`:``)+e,document.body.appendChild(n);var r=n.getBoundingClientRect(),i=r.width,a=r.height;return document.body.removeChild(n),{width:Math.ceil(i),height:Math.ceil(a)}}function eo(e,t,n,r){return to.apply(this,arguments)}function to(){return to=Ka(Wa().m(function e(t,n,r,i){var a,o,s,c,l,u,d,f,p=arguments;return Wa().w(function(e){for(;;)switch(e.n){case 0:return a=p.length>4&&p[4]!==void 0?p[4]:1,o=t instanceof HTMLElement?t.outerHTML:t,e.n=1,Ya(o);case 1:return s=e.v,(r==null||i==null)&&(c=$a(s,n),r??=c.width,i??=c.height),l=Math.ceil(r*a),u=Math.ceil(i*a),d=n?`<style>${n}</style>`:``,f=`<svg xmlns="http://www.w3.org/2000/svg" width="${l}" height="${u}" viewBox="0 0 ${r} ${i}"><foreignObject width="${r}" height="${i}"><body xmlns="http://www.w3.org/1999/xhtml" style="margin:0;padding:0">${d}${s}</body></foreignObject></svg>`,e.a(2,Za(f,1))}},e)})),to.apply(this,arguments)}function no(e){return ro.apply(this,arguments)}function ro(){return ro=Ka(Wa().m(function e(t){var n,r=arguments,i;return Wa().w(function(e){for(;;)switch(e.n){case 0:n=r.length>1&&r[1]!==void 0?r[1]:1,i=t.type,e.n=i===`canvas`?1:i===`svg`?2:i===`html`?3:4;break;case 1:return e.a(2,t.canvas);case 2:return e.a(2,Za(t.svg,n));case 3:return e.a(2,eo(t.html,t.css,t.width,t.height,n));case 4:return e.a(2)}},e)})),ro.apply(this,arguments)}var io,ao,oo,so,co,lo,uo,fo,po,mo,ho;function go(){return(go=t((()=>{yn(),zn(),za(),Ha(),io=new Map,ao=!1,oo=2048,so=function(){function e(t,n,r){K(this,e),W(this,`cache`,new Map),W(this,`pending`,new Set),W(this,`atlas`,{}),W(this,`glTexture`,null),W(this,`dirty`,!0),this.gl=t,this.renderers=n,this.scheduleRender=r,this.packCanvas=document.createElement(`canvas`),this.packCanvas.width=oo,this.packCanvas.height=oo,this.packCtx=this.packCanvas.getContext(`2d`)}return q(e,[{key:`renderAttachment`,value:function(e,t,n){var r=this,i=`${e}:${t}`;if(!(this.cache.has(i)||this.pending.has(i))){var a=this.renderers[t];if(a){var o=a(n);if(o){this.pending.add(i);var s=n.pixelRatio;Promise.resolve(o).then(function(){var e=Ka(Wa().m(function e(t){var n;return Wa().w(function(e){for(;;)switch(e.n){case 0:if(r.pending.has(i)){e.n=1;break}return e.a(2);case 1:if(r.pending.delete(i),t){e.n=2;break}return e.a(2);case 2:return e.n=3,no(t,s);case 3:if(n=e.v,n&&n.width!==0&&n.height!==0){e.n=4;break}return e.a(2);case 4:r.cache.set(i,{image:n,width:n.width,height:n.height}),r.dirty=!0,r.scheduleRender();case 5:return e.a(2)}},e)}));return function(t){return e.apply(this,arguments)}}())}}}}},{key:`regenerateAtlas`,value:function(){if(this.dirty){this.dirty=!1;var e=[];if(this.cache.forEach(function(t,n){e.push({key:n,width:t.width,height:t.height,draw:function(e,n,r){e.drawImage(t.image,n,r)}})}),e.length===0)this.atlas={},this.deleteGLTexture();else{var t={x:0,y:0,rowHeight:0,maxRowWidth:0};this.packCtx.clearRect(0,0,oo,oo);var n=Ba(e,this.packCtx,t),r=n.atlas,i=n.remaining;this.atlas=r,i.length>0&&console.warn(`Sigma: ${i.length} label attachment(s) could not fit in the ${oo}x${oo} atlas and will not be rendered.`),this.deleteGLTexture();var a=this.gl,o=a.createTexture();a.activeTexture(a.TEXTURE0+7),a.bindTexture(a.TEXTURE_2D,o),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,this.packCanvas),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),this.glTexture=o}}}},{key:`bindTexture`,value:function(e){if(this.glTexture){var t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.glTexture)}}},{key:`getEntry`,value:function(e,t){var n=`${e}:${t}`;return this.atlas[n]||null}},{key:`invalidateNode`,value:function(e){var t=`${e}:`,n=U(this.cache.keys()),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;i.startsWith(t)&&(this.cache.delete(i),this.dirty=!0)}}catch(e){n.e(e)}finally{n.f()}var a=U(this.pending),o;try{for(a.s();!(o=a.n()).done;){var s=o.value;s.startsWith(t)&&this.pending.delete(s)}}catch(e){a.e(e)}finally{a.f()}}},{key:`restore`,value:function(){this.glTexture=null,this.dirty=!0}},{key:`clear`,value:function(){this.cache.clear(),this.pending.clear(),this.atlas={},this.dirty=!0,this.deleteGLTexture()}},{key:`kill`,value:function(){this.clear(),this.packCanvas=null,this.packCtx=null,this.gl=null}},{key:`deleteGLTexture`,value:function(){this.glTexture&&=(this.gl.deleteTexture(this.glTexture),null)}}])}(),co=function(){function e(t){K(this,e),W(this,`buckets`,new Map),W(this,`keyDepth`,new Map);var n=U(t),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;this.buckets.set(i,new Set)}}catch(e){n.e(e)}finally{n.f()}}return q(e,[{key:`has`,value:function(e){return this.keyDepth.has(e)}},{key:`getBucket`,value:function(e){return this.buckets.get(e)}},{key:`set`,value:function(e,t){var n,r=this.keyDepth.get(e);if(r!==t){var i=this.buckets.get(t);if(!i)throw Error(`Sigma: "${t}" is not a declared depth layer`);r!==void 0&&((n=this.buckets.get(r))==null||n.delete(e)),i.add(e),this.keyDepth.set(e,t)}}},{key:`remove`,value:function(e){var t=this.keyDepth.get(e);t!==void 0&&(this.buckets.get(t).delete(e),this.keyDepth.delete(e))}},{key:`clearAll`,value:function(){var e=U(this.buckets.values()),t;try{for(e.s();!(t=e.n()).done;)t.value.clear()}catch(t){e.e(t)}finally{e.f()}this.keyDepth.clear()}},{key:`getSorted`,value:function(e,t){var n=this.buckets.get(e);return!n||n.size===0?[]:X(n).sort(function(e,n){return t(e)-t(n)})}}])}(),lo=function(e){function t(e,n){return K(this,t),J(this,t,[e,2,n])}return Y(t,e),q(t,[{key:`updateNode`,value:function(e,t,n,r,i,a,o,s){var c=this.indexMap.get(e);if(c===void 0)throw Error(`Node "${e}" not allocated in NodeDataTexture`);var l=H(sn(s),4),u=l[0],d=l[1],f=l[2],p=l[3],m=c*2*4;this.data[m]=t,this.data[m+1]=n,this.data[m+2]=r,this.data[m+3]=i,this.data[m+4]=a,this.data[m+5]=o,this.data[m+6]=u*65536+d*256+f,this.data[m+7]=p/255,this.markDirty(c)}}])}(ta),uo=1024,fo=1.5,po=4096,mo=function(){function e(t,n){if(K(this,e),W(this,`texture`,null),W(this,`framebuffer`,null),!t.getExtension(`EXT_color_buffer_float`))throw Error(`sigma: EXT_color_buffer_float is required for label/edge placement but is unavailable in this WebGL2 context.`);this.gl=t,this.channels=n.channels,this.capacity=this.roundUpToPowerOfTwo(n.initialCapacity??uo);var r=this.computeDimensions(this.capacity);this.textureWidth=r.width,this.textureHeight=r.height,this.create()}return q(e,[{key:`roundUpToPowerOfTwo`,value:function(e){return 2**Math.ceil(Math.log2(Math.max(1,e)))}},{key:`computeDimensions`,value:function(e){var t=Math.min(e,po);return{width:t,height:Math.ceil(e/t)}}},{key:`create`,value:function(){var e=this.gl,t=this.channels===1?e.R32F:e.RGBA32F,n=this.channels===1?e.RED:e.RGBA;if(this.texture=e.createTexture(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.texture),e.texImage2D(e.TEXTURE_2D,0,t,this.textureWidth,this.textureHeight,0,n,e.FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),this.framebuffer=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texture,0),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)throw Error(`sigma: float framebuffer for frame-pass placement is incomplete.`);e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,null)}},{key:`ensureCapacity`,value:function(e){if(!(e<=this.capacity)){var t=this.gl;this.capacity=this.roundUpToPowerOfTwo(Math.ceil(e*fo));var n=this.computeDimensions(this.capacity);this.textureWidth=n.width,this.textureHeight=n.height,this.texture&&t.deleteTexture(this.texture),this.framebuffer&&t.deleteFramebuffer(this.framebuffer),this.create()}}},{key:`bindAsRenderTarget`,value:function(){var e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer),e.viewport(0,0,this.textureWidth,this.textureHeight)}},{key:`bind`,value:function(e){var t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.texture)}},{key:`getTexture`,value:function(){return this.texture}},{key:`getTextureWidth`,value:function(){return this.textureWidth}},{key:`getTextureHeight`,value:function(){return this.textureHeight}},{key:`restore`,value:function(){this.gl.getExtension(`EXT_color_buffer_float`),this.create()}},{key:`kill`,value:function(){var e=this.gl;this.texture&&=(e.deleteTexture(this.texture),null),this.framebuffer&&=(e.deleteFramebuffer(this.framebuffer),null)}}])}(),ho=function(e){function t(e,n){return K(this,t),J(this,t,[e,2,n])}return Y(t,e),q(t,[{key:`updateEdge`,value:function(e,t,n,r,i,a){var o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0,s=arguments.length>7&&arguments[7]!==void 0?arguments[7]:0,c=arguments.length>8&&arguments[8]!==void 0?arguments[8]:0,l=this.indexMap.get(e);if(l===void 0)throw Error(`Edge "${e}" not allocated in EdgeDataTexture`);var u=l*this.TEXELS_PER_ITEM*4;this.data[u+0]=t,this.data[u+1]=n,this.data[u+2]=r,this.data[u+3]=0,this.data[u+4]=i,this.data[u+5]=a,this.data[u+6]=o,this.data[u+7]=(s&15)<<4|c&15,this.markDirty(l)}}])}(ta)})))()}function _o(e,t){return typeof e==`number`?e:(Z(e)===`object`&&e!==null&&`attribute`in e,t)}function vo(e){var t=e??{},n=t.cornerRadius,r=t.rotation,i=_o(n,0),a=_o(r,0);return{name:`square`,glsl:`
${Bi}
float sdf_square(vec2 uv, float size, float cornerRadius, float rotation) {
  // Apply rotation if needed
  vec2 p = uv;
  if (rotation != 0.0) {
    p = rotate2D(rotation) * p;
  }

  // Distance to box with given corner radius
  // Based on Inigo Quilez's box SDF: https://iquilezles.org/articles/distfunctions2d/
  vec2 d = abs(p) - vec2(size - cornerRadius);
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - cornerRadius;
}
`,uniforms:[{name:`u_cornerRadius`,type:`float`,value:i},{name:`u_rotation`,type:`float`,value:a}],inradiusFactor:Math.SQRT1_2}}function yo(e,t){return typeof e==`number`?e:(Z(e)===`object`&&e!==null&&`attribute`in e,t)}function bo(e){var t=e??{},n=t.cornerRadius,r=t.rotation,i=yo(n,0),a=yo(r,0);return{name:`triangle`,glsl:`
${Bi}
float sdf_triangle(vec2 uv, float size, float cornerRadius, float rotation) {
  // Apply rotation if needed
  vec2 p = uv;
  if (rotation != 0.0) {
    p = rotate2D(rotation) * p;
  }

  // Equilateral triangle SDF
  // Based on Inigo Quilez's triangle SDF: https://iquilezles.org/articles/distfunctions2d/
  //
  // The IQ formula uses parameter 'r' where the triangle has width = 2r.
  // For circumradius R (distance from centroid to vertex):
  //   R = r * 2 / sqrt(3), so r = R * sqrt(3) / 2
  const float k = sqrt(3.0);
  float r = size * k / 2.0;

  p.x = abs(p.x) - r;
  p.y = p.y + r / k;
  if (p.x + k * p.y > 0.0) {
    p = vec2(p.x - k * p.y, -k * p.x - p.y) / 2.0;
  }
  p.x -= clamp(p.x, -2.0 * r, 0.0);
  float dist = -length(p) * sign(p.y);

  // Apply corner radius if specified
  if (cornerRadius > 0.0) {
    dist = dist + cornerRadius;
  }

  return dist;
}
`,uniforms:[{name:`u_cornerRadius`,type:`float`,value:i},{name:`u_rotation`,type:`float`,value:a}],inradiusFactor:.5}}function xo(e,t){return typeof e==`number`?e:(Z(e)===`object`&&e!==null&&`attribute`in e,t)}function So(e){var t=e??{},n=t.cornerRadius,r=t.rotation,i=xo(n,0),a=xo(r,0);return{name:`diamond`,glsl:`
${Bi}
float sdf_diamond(vec2 uv, float size, float cornerRadius, float rotation) {
  // Apply rotation if needed
  vec2 p = uv;
  if (rotation != 0.0) {
    p = rotate2D(rotation) * p;
  }

  // Diamond SDF - using rhombus formula from Inigo Quilez
  // https://iquilezles.org/articles/distfunctions2d/
  // For a diamond (square rotated 45°), b = (size, size)
  vec2 b = vec2(size, -size);
  p = abs(p);
  float h = clamp((dot(b, p) + b.y * b.y) / dot(b, b), 0.0, 1.0);
  p -= b * vec2(h, h - 1.0);
  float d = length(p) * sign(p.x);

  // Apply corner radius if specified
  if (cornerRadius > 0.0) {
    d = d + cornerRadius;
  }

  return d;
}
`,uniforms:[{name:`u_cornerRadius`,type:`float`,value:i},{name:`u_rotation`,type:`float`,value:a}],inradiusFactor:Math.SQRT1_2}}function Co(e){return e===void 0||e===!1?{tail:!1,head:!1}:e===!0?{tail:!0,head:!0}:e===`head`?{tail:!1,head:!0}:{tail:!0,head:!1}}function wo(e){return e===void 0?{tail:0,head:0}:typeof e==`number`?{tail:e,head:e}:{tail:e.tail??0,head:e.head??0}}function To(e){var t=e??{},n=t.dashColor??{attribute:`color`},r=t.gapColor??0,i={dashSize:t.dashSize??{value:10,mode:`pixels`},gapSize:t.gapSize??{value:10,mode:`pixels`},dashOffset:t.dashOffset??{value:0,mode:`pixels`}},a=t.align??.5,o=t.cap??jo,s=Co(t.solidExtremities),c=wo(t.solidMargin),l=Fn(n,`dashColor`),u=[{name:`u_sizeMode`,type:`vec3`,value:[i.dashSize,i.gapSize,i.dashOffset].map(function(e){return+((e.mode??Ao)===`relative`)})},{name:`u_align`,type:`float`,value:a},{name:`u_solidExtremities`,type:`vec2`,value:[+!!s.tail,+!!s.head]},{name:`u_solidMargin`,type:`vec2`,value:[c.tail,c.head]}],d=X(l.attributes),f=l.needsNodeColors,p;if(typeof r==`number`)p=`vec4(dashColor.rgb, dashColor.a * ${Q(r)})`;else{var m=Fn(r,`gapColor`);p=m.glsl,d.push.apply(d,X(m.attributes)),f||=m.needsNodeColors}var h=!(`value`in i.dashSize),g=!(`value`in i.gapSize),_=!(`value`in i.dashOffset);[`dashSize`,`gapSize`,`dashOffset`].forEach(function(e){`value`in i[e]?u.push({name:`u_${e}`,type:`float`,value:i[e].value}):(d.push({name:`a_${e}`,size:1,type:WebGL2RenderingContext.FLOAT,source:i[e].attribute}),u.push({name:`u_${e}`,type:`float`,value:i[e].default??0}))});var v=function(e,t){return t?`(v_${e} > 0.0 ? v_${e} : u_${e})`:`u_${e}`};return{name:`dashed`,glsl:`
// Dashed pattern layer with antialiased boundaries
// Uniforms:
//   u_dashSize: size of each dash (or default when using attribute)
//   u_gapSize: size of gaps between dashes (or default when using attribute)
//   u_dashOffset: offset to shift the pattern (or default when using attribute)
//   u_sizeMode: vec3 indicating if values are thickness-relative (x=dash, y=gap, z=offset)
//   u_align: pattern alignment (0=start, 0.5=center, 1=end)
//   u_solidExtremities: vec2(tail, head) - 1.0 means solid, 0.0 means dashed
//   u_solidMargin: vec2(tail, head) - extra solid margin in pixels
${h?`// Varying: v_dashSize for per-edge dash size`:``}
${g?`// Varying: v_gapSize for per-edge gap size`:``}
${_?`// Varying: v_dashOffset for per-edge dash offset`:``}

vec4 layer_dashed(EdgeContext ctx) {
  // Dash color (straight alpha, matching v_color and blendOver)
  vec4 dashColor = ${l.glsl};

  // Check for solid zones first (extremities and margins)
  // v_zone: 0=tail extremity, 1=body, 2=head extremity
  // v_tailLengthRatio and v_headLengthRatio give extremity lengths as ratio of thickness

  // Tail solid zone check
  if (u_solidExtremities.x > 0.5 && v_zone < 0.5) {
    // In tail extremity zone and solidExtremities.tail is enabled
    return dashColor;
  }
  // Head solid zone check
  if (u_solidExtremities.y > 0.5 && v_zone > 1.5) {
    // In head extremity zone and solidExtremities.head is enabled
    return dashColor;
  }

  // Compute extremity lengths in world units for margin calculation
  float tailExtremityLength = v_tailLengthRatio * ctx.thickness;
  float headExtremityLength = v_headLengthRatio * ctx.thickness;

  // Convert pixel margins to world units (same formula as thickness conversion)
  float tailMarginWorld = u_solidMargin.x * u_correctionRatio / u_sizeRatio;
  float headMarginWorld = u_solidMargin.y * u_correctionRatio / u_sizeRatio;

  // Tail margin check (margin starts after extremity zone)
  float tailSolidZone = (u_solidExtremities.x > 0.5 ? tailExtremityLength : 0.0) + tailMarginWorld;
  if (ctx.distanceFromSource < tailSolidZone) {
    return dashColor;
  }

  // Head margin check (margin starts before extremity zone)
  float headSolidZone = (u_solidExtremities.y > 0.5 ? headExtremityLength : 0.0) + headMarginWorld;
  if (ctx.distanceToTarget < headSolidZone) {
    return dashColor;
  }

  // Get dash size values (from attribute if available, otherwise uniform)
  float dashSizeValue = ${v(`dashSize`,h)};
  float gapSizeValue = ${v(`gapSize`,g)};
  float dashOffsetValue = ${v(`dashOffset`,_)};

  // Compute actual sizes (either in pixels converted to world units, or relative to thickness)
  float pixelToWorld = u_correctionRatio / u_sizeRatio;
  float dashSize = dashSizeValue * (u_sizeMode.x > 0.5 ? ctx.thickness : pixelToWorld);
  float gapSize = gapSizeValue * (u_sizeMode.y > 0.5 ? ctx.thickness : pixelToWorld);
  float dashOffset = dashOffsetValue * (u_sizeMode.z > 0.5 ? ctx.thickness : pixelToWorld);

  // Early return when no visible dash pattern:
  // - dashSize ≈ 0: no dashes to show, return transparent (let plain layer show through)
  // - gapSize ≈ 0: all dash/no gap, effectively solid, return transparent (let plain layer handle it)
  // Threshold scales with pixelToWorld so it stays ~0.1px regardless of zoom
  float dashThreshold = 0.1 * pixelToWorld;
  if (dashSize < dashThreshold || gapSize < dashThreshold) {
    return vec4(0.0);
  }

  // Pattern length is dash + gap
  float patternLength = dashSize + gapSize;

  // Adjust distances for solid zones (pattern starts after solid zones)
  float adjustedDistFromSource = ctx.distanceFromSource - tailSolidZone;
  float adjustedDistToTarget = ctx.distanceToTarget - headSolidZone;

  // Compute alignment anchor point
  // - align: 0 → anchor at start, pattern begins with a dash
  // - align: 1 → anchor at end, pattern ends with a dash
  // - align: 0.5 → anchor at center, pattern is symmetric
  float dashedLength = adjustedDistFromSource + adjustedDistToTarget;
  float anchorDist = u_align * dashedLength;

  // Position within the repeating pattern
  // By subtracting anchorDist, we ensure the anchor point maps to position 0 in the pattern
  // This avoids the unstable mod(dashedLength, patternLength) operation
  float posInPattern = mod(adjustedDistFromSource - anchorDist + dashOffset, patternLength);

  // Signed longitudinal distance to the nearest dash center, wrapping across
  // pattern repetitions so both dash edges antialias correctly
  float longFromCenter =
    mod(posInPattern - dashSize * 0.5 + patternLength * 0.5, patternLength) - patternLength * 0.5;

  // Compute signed distance field for the dash
  // Positive inside dash, negative inside gap
${o===`round`?`  // Capsule SDF: round caps carved inside the dash length, so a dash never
  // exceeds dashSize. Dashes shorter than the thickness degenerate to circles
  // (dots) of diameter dashSize.
  // ctx.sdf is 0 at the stroke boundary, so shift it back to centerline distance
  float transverse = ctx.sdf + ctx.thickness * 0.5;
  float capRadius = min(ctx.thickness, dashSize) * 0.5;
  float halfLength = dashSize * 0.5 - capRadius;
  vec2 q = vec2(max(abs(longFromCenter) - halfLength, 0.0), transverse);
  float sdf = capRadius - length(q);`:`  float sdf = dashSize * 0.5 - abs(longFromCenter);`}

  // Apply antialiasing using smoothstep
  // aaWidth is in world units, same as our distance
  float dashAlpha = smoothstep(-ctx.aaWidth, ctx.aaWidth, sdf);

  // Gap color (straight alpha, like the dash color)
  vec4 gapColor = ${p};

  // Blend between gap and dash colors
  return mix(gapColor, dashColor, dashAlpha);
}
`,uniforms:u,attributes:d,needsNodeColors:f}}function Eo(e){var t=(e??{}).segments;return{name:`curved`,segments:t===void 0?16:t,glsl:`
// Compute control point from curvature
// Control point is placed perpendicular to the midpoint of source-target line
vec2 computeControlPoint(vec2 source, vec2 target, float curvature) {
  vec2 midpoint = 0.5 * (source + target);
  vec2 delta = target - source;
  // Perpendicular direction (rotated 90 degrees)
  vec2 perp = vec2(-delta.y, delta.x);
  float len = length(perp);
  if (len < 0.0001) return midpoint;
  perp = perp / len;
  // Offset by curvature * edge length
  return midpoint + perp * curvature * len;
}

// Position at parameter t ∈ [0, 1]
vec2 path_curved_position(float t, vec2 source, vec2 target) {
  float curvature = v_curvature;
  vec2 control = computeControlPoint(source, target, curvature);
  float u = 1.0 - t;
  return u * u * source + 2.0 * u * t * control + t * t * target;
}

// Derivative of quadratic Bezier (for efficient arc length computation)
vec2 path_curved_derivative(float t, vec2 source, vec2 target) {
  float curvature = v_curvature;
  vec2 control = computeControlPoint(source, target, curvature);
  // B'(t) = 2(1-t)(P1-P0) + 2t(P2-P1)
  return 2.0 * (1.0 - t) * (control - source) + 2.0 * t * (target - control);
}

// Approximate arc length using 5-point Gauss-Legendre quadrature
float path_curved_length(vec2 source, vec2 target) {
  // Gauss-Legendre 5-point weights and abscissae
  const float x1 = 0.9061798459, x2 = 0.5384693101;
  const float w1 = 0.2369268850, w2 = 0.4786286705, w3 = 0.5688888889;

  // Transform from [-1,1] to [0,1]: t = 0.5 * (x + 1)
  float t1a = 0.5 * (-x1 + 1.0), t1b = 0.5 * (x1 + 1.0);
  float t2a = 0.5 * (-x2 + 1.0), t2b = 0.5 * (x2 + 1.0);

  // Evaluate derivative magnitudes at sample points
  float d1a = length(path_curved_derivative(t1a, source, target));
  float d1b = length(path_curved_derivative(t1b, source, target));
  float d2a = length(path_curved_derivative(t2a, source, target));
  float d2b = length(path_curved_derivative(t2b, source, target));
  float d3 = length(path_curved_derivative(0.5, source, target));

  // Sum weighted samples (factor of 0.5 for interval transformation)
  return 0.5 * (w1 * (d1a + d1b) + w2 * (d2a + d2b) + w3 * d3);
}
`,uniforms:[],attributes:[{name:`curvature`,size:1,type:WebGL2RenderingContext.FLOAT}],variables:{curvature:{type:`number`,default:0}},spread:{variable:`curvature`,compute:function(e,t,n){return(e-(t-1)/2)*n}}}}function Do(e){var t=e??{},n=t.segments,r=n===void 0?16:n,i=t.orientation,a=i===void 0?`automatic`:i,o=t.rotateWithCamera,s=o!==void 0&&o,c=t.curveOffset,l=c===void 0?.5:c,u=t.curvePosition,d=u===void 0?.5:u,f,p=0;return typeof a==`number`?(f=3,p=a):f=a===`horizontal`?1:a===`vertical`?2:0,{name:`curvedS`,segments:r,minBodyLengthRatio:0,glsl:`
// S-curve path constants (baked from options)
const int CURVEDS_ORIENTATION = ${f};
const float CURVEDS_FIXED_ANGLE = ${Q(p)};
const bool CURVEDS_ROTATE_WITH_CAMERA = ${s?`true`:`false`};
const float CURVEDS_OFFSET = ${Q(l)};
const float CURVEDS_POSITION = ${Q(d)};

// ============================================================================
// HELPER: Rotate a 2D vector by angle (counter-clockwise)
// ============================================================================
vec2 curvedS_rotate(vec2 v, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return vec2(c * v.x - s * v.y, s * v.x + c * v.y);
}

// ============================================================================
// HELPER: Get control point direction based on orientation
// ============================================================================
vec2 getCurvedSControlDirection(vec2 source, vec2 target) {
  vec2 delta = target - source;

  if (CURVEDS_ORIENTATION == 1) {
    // Horizontal: control points extend horizontally
    return vec2(sign(delta.x), 0.0);
  } else if (CURVEDS_ORIENTATION == 2) {
    // Vertical: control points extend vertically
    return vec2(0.0, sign(delta.y));
  } else if (CURVEDS_ORIENTATION == 3) {
    // Fixed angle
    return vec2(cos(CURVEDS_FIXED_ANGLE), sin(CURVEDS_FIXED_ANGLE));
  } else {
    // Automatic: choose based on which delta is larger
    if (abs(delta.x) >= abs(delta.y)) {
      return vec2(sign(delta.x), 0.0);
    } else {
      return vec2(0.0, sign(delta.y));
    }
  }
}

// ============================================================================
// HELPER: Get cubic Bézier control points
// ============================================================================
void getCurvedSControlPoints(vec2 source, vec2 target, out vec2 c1, out vec2 c2) {
  vec2 dir = getCurvedSControlDirection(source, target);
  float dist = length(target - source);

  // Control point distances based on curveOffset
  float offset1 = dist * CURVEDS_OFFSET * CURVEDS_POSITION * 2.0;
  float offset2 = dist * CURVEDS_OFFSET * (1.0 - CURVEDS_POSITION) * 2.0;

  c1 = source + dir * offset1;
  c2 = target - dir * offset2;
}

// ============================================================================
// HELPER: Evaluate cubic Bézier: B(t) = (1-t)³P₀ + 3(1-t)²tP₁ + 3(1-t)t²P₂ + t³P₃
// ============================================================================
vec2 curvedS_cubicBezier(float t, vec2 p0, vec2 p1, vec2 p2, vec2 p3) {
  float t2 = t * t;
  float t3 = t2 * t;
  float mt = 1.0 - t;
  float mt2 = mt * mt;
  float mt3 = mt2 * mt;

  return mt3 * p0 + 3.0 * mt2 * t * p1 + 3.0 * mt * t2 * p2 + t3 * p3;
}

// ============================================================================
// HELPER: Evaluate cubic Bézier derivative: B'(t)
// ============================================================================
vec2 curvedS_cubicBezierDerivative(float t, vec2 p0, vec2 p1, vec2 p2, vec2 p3) {
  float t2 = t * t;
  float mt = 1.0 - t;
  float mt2 = mt * mt;

  // B'(t) = 3(1-t)²(P₁-P₀) + 6(1-t)t(P₂-P₁) + 3t²(P₃-P₂)
  return 3.0 * mt2 * (p1 - p0) + 6.0 * mt * t * (p2 - p1) + 3.0 * t2 * (p3 - p2);
}

// ============================================================================
// POSITION - Core function for vertex placement
// ============================================================================
vec2 path_curvedS_position(float t, vec2 source, vec2 target) {
  // Apply camera rotation if not rotating with camera
  vec2 src = source;
  vec2 tgt = target;
  if (!CURVEDS_ROTATE_WITH_CAMERA) {
    src = curvedS_rotate(source, -u_cameraAngle);
    tgt = curvedS_rotate(target, -u_cameraAngle);
  }

  vec2 delta = tgt - src;

  // Handle degenerate case (very close nodes) -> straight line
  if (length(delta) < 0.0001) {
    vec2 result = mix(src, tgt, t);
    if (!CURVEDS_ROTATE_WITH_CAMERA) {
      result = curvedS_rotate(result, u_cameraAngle);
    }
    return result;
  }

  // Get control points
  vec2 c1, c2;
  getCurvedSControlPoints(src, tgt, c1, c2);

  // Evaluate Bézier
  vec2 result = curvedS_cubicBezier(t, src, c1, c2, tgt);

  // Rotate back to world space if needed
  if (!CURVEDS_ROTATE_WITH_CAMERA) {
    result = curvedS_rotate(result, u_cameraAngle);
  }

  return result;
}
`,uniforms:[],attributes:[]}}function Oo(e){var t=e??{},n=t.orientation,r=n===void 0?`automatic`:n,i=t.rotateWithCamera,a=i!==void 0&&i,o=t.offset,s=o===void 0?.5:o,c=t.cornerRadius,l=c===void 0?.4:c,u,d=0;return typeof r==`number`?(u=3,d=r):u=r===`horizontal`?1:r===`vertical`?2:0,{name:`stepCurved`,segments:32,glsl:`
// Step curved path constants (baked from options)
const float STEPC_OFFSET = ${Q(s)};
const int STEPC_ORIENTATION = ${u};
const float STEPC_FIXED_ANGLE = ${Q(d)};
const bool STEPC_ROTATE_WITH_CAMERA = ${a?`true`:`false`};
const float STEPC_CORNER_RATIO = ${Q(l)};

${Qr(`stepC`)}

// ============================================================================
// HELPER: Get taxi segment points with corner radius info
// ============================================================================
void getStepCSegmentPoints(vec2 source, vec2 target, out vec2 c1, out vec2 c2, out float cornerRadius) {
  vec2 delta = target - source;

  // Determine orientation
  bool horizontalFirst;
  if (STEPC_ORIENTATION == 1) {
    horizontalFirst = true;
  } else if (STEPC_ORIENTATION == 2) {
    horizontalFirst = false;
  } else if (STEPC_ORIENTATION == 3) {
    vec2 dir = vec2(cos(STEPC_FIXED_ANGLE), sin(STEPC_FIXED_ANGLE));
    float projLen = dot(delta, dir) * STEPC_OFFSET;
    c1 = source + dir * projLen;
    c2 = target - dir * (dot(delta, dir) * (1.0 - STEPC_OFFSET));
    float L1 = length(c1 - source);
    float L2 = length(c2 - c1);
    float L3 = length(target - c2);
    cornerRadius = min(min(L1, L2 * 0.5), L3) * STEPC_CORNER_RATIO;
    return;
  } else {
    horizontalFirst = abs(delta.x) >= abs(delta.y);
  }

  if (horizontalFirst) {
    float midX = source.x + delta.x * STEPC_OFFSET;
    c1 = vec2(midX, source.y);
    c2 = vec2(midX, target.y);
  } else {
    float midY = source.y + delta.y * STEPC_OFFSET;
    c1 = vec2(source.x, midY);
    c2 = vec2(target.x, midY);
  }

  // Compute corner radius based on shortest segment
  float L1 = length(c1 - source);
  float L2 = length(c2 - c1);
  float L3 = length(target - c2);
  cornerRadius = min(min(L1, L2 * 0.5), L3) * STEPC_CORNER_RATIO;
}

// ============================================================================
// HELPER: Quadratic bezier evaluation
// ============================================================================
vec2 stepC_bezier(vec2 p0, vec2 p1, vec2 p2, float t) {
  float mt = 1.0 - t;
  return mt * mt * p0 + 2.0 * mt * t * p1 + t * t * p2;
}

vec2 stepC_bezierTangent(vec2 p0, vec2 p1, vec2 p2, float t) {
  return normalize(2.0 * (1.0 - t) * (p1 - p0) + 2.0 * t * (p2 - p1));
}

float stepC_bezierLength(vec2 p0, vec2 p1, vec2 p2) {
  // Approximate length using 8 samples
  float len = 0.0;
  vec2 prev = p0;
  for (int i = 1; i <= 8; i++) {
    float t = float(i) / 8.0;
    vec2 curr = stepC_bezier(p0, p1, p2, t);
    len += length(curr - prev);
    prev = curr;
  }
  return len;
}

// ============================================================================
// PATH LENGTH - Total path length with rounded corners
// ============================================================================
float path_stepCurved_length(vec2 source, vec2 target) {
  vec2 src = source;
  vec2 tgt = target;
  if (!STEPC_ROTATE_WITH_CAMERA) {
    src = stepC_rotate(source, -u_cameraAngle);
    tgt = stepC_rotate(target, -u_cameraAngle);
  }

  vec2 delta = tgt - src;
  if (abs(delta.x) < 0.0001 || abs(delta.y) < 0.0001) {
    return length(delta);
  }

  vec2 c1, c2;
  float r;
  getStepCSegmentPoints(src, tgt, c1, c2, r);

  // Segment lengths (shortened by corner radius on each end)
  float L1 = max(length(c1 - src) - r, 0.0);
  float L2 = max(length(c2 - c1) - 2.0 * r, 0.0);
  float L3 = max(length(tgt - c2) - r, 0.0);

  // Corner arc lengths
  vec2 dir1 = normalize(c1 - src);
  vec2 dir2 = normalize(c2 - c1);
  vec2 dir3 = normalize(tgt - c2);

  vec2 corner1_start = c1 - dir1 * r;
  vec2 corner1_end = c1 + dir2 * r;
  vec2 corner2_start = c2 - dir2 * r;
  vec2 corner2_end = c2 + dir3 * r;

  float arc1 = stepC_bezierLength(corner1_start, c1, corner1_end);
  float arc2 = stepC_bezierLength(corner2_start, c2, corner2_end);

  return L1 + arc1 + L2 + arc2 + L3;
}

// ============================================================================
// POSITION - Position along rounded path
// ============================================================================
vec2 path_stepCurved_position(float t, vec2 source, vec2 target) {
  vec2 src = source;
  vec2 tgt = target;
  if (!STEPC_ROTATE_WITH_CAMERA) {
    src = stepC_rotate(source, -u_cameraAngle);
    tgt = stepC_rotate(target, -u_cameraAngle);
  }

  vec2 delta = tgt - src;
  if (abs(delta.x) < 0.0001 || abs(delta.y) < 0.0001) {
    vec2 result = mix(src, tgt, t);
    if (!STEPC_ROTATE_WITH_CAMERA) {
      result = stepC_rotate(result, u_cameraAngle);
    }
    return result;
  }

  vec2 c1, c2;
  float r;
  getStepCSegmentPoints(src, tgt, c1, c2, r);

  vec2 dir1 = normalize(c1 - src);
  vec2 dir2 = normalize(c2 - c1);
  vec2 dir3 = normalize(tgt - c2);

  // Key points
  vec2 seg1_end = c1 - dir1 * r;
  vec2 corner1_end = c1 + dir2 * r;
  vec2 seg2_end = c2 - dir2 * r;
  vec2 corner2_end = c2 + dir3 * r;

  // Segment lengths
  float L1 = length(seg1_end - src);
  float arc1 = stepC_bezierLength(seg1_end, c1, corner1_end);
  float L2 = length(seg2_end - corner1_end);
  float arc2 = stepC_bezierLength(seg2_end, c2, corner2_end);
  float L3 = length(tgt - corner2_end);
  float totalLen = L1 + arc1 + L2 + arc2 + L3;

  float dist = t * totalLen;
  vec2 result;

  if (dist <= L1) {
    float localT = dist / max(L1, 0.0001);
    result = mix(src, seg1_end, localT);
  } else if (dist <= L1 + arc1) {
    float localDist = dist - L1;
    float localT = localDist / max(arc1, 0.0001);
    result = stepC_bezier(seg1_end, c1, corner1_end, localT);
  } else if (dist <= L1 + arc1 + L2) {
    float localDist = dist - L1 - arc1;
    float localT = localDist / max(L2, 0.0001);
    result = mix(corner1_end, seg2_end, localT);
  } else if (dist <= L1 + arc1 + L2 + arc2) {
    float localDist = dist - L1 - arc1 - L2;
    float localT = localDist / max(arc2, 0.0001);
    result = stepC_bezier(seg2_end, c2, corner2_end, localT);
  } else {
    float localDist = dist - L1 - arc1 - L2 - arc2;
    float localT = localDist / max(L3, 0.0001);
    result = mix(corner2_end, tgt, localT);
  }

  if (!STEPC_ROTATE_WITH_CAMERA) {
    result = stepC_rotate(result, u_cameraAngle);
  }
  return result;
}
`,uniforms:[],attributes:[]}}function ko(e){var t=e??{},n=t.lengthRatio,r=n===void 0?5:n,i=t.widthRatio,a=i===void 0?4:i,o=t.margin;return{name:`arrow`,glsl:`
// Arrow SDF: triangle with base at x=0, tip at x=lengthRatio
// uv.x: 0 (base) to lengthRatio (tip), uv.y: [-halfW, +halfW]
// Returns signed distance (negative inside, positive outside)
float extremity_arrow(vec2 uv, float lengthRatio, float widthRatio) {
  float x = uv.x;
  float y = abs(uv.y);
  float halfW = widthRatio * 0.5;

  // Past the tip: euclidean distance to tip point
  if (x > lengthRatio) {
    return length(vec2(x - lengthRatio, y));
  }

  // Back edge: signed distance to x=0 line
  float backDist = -x;

  // Side edge: signed distance to sloped triangle edge
  float clampedX = max(0.0, x);
  float maxY = halfW * (1.0 - clampedX / lengthRatio);
  float sideDist = y - maxY;

  // Convex shape SDF = max of half-plane distances
  return max(backDist, sideDist);
}
`,length:r,widthFactor:a,margin:o===void 0?0:o,uniforms:[],attributes:[]}}var Ao,jo;function Mo(){return(Mo=t((()=>{za(),zn(),m(),Ao=`pixels`,jo=`butt`})))()}function No(e){return e?typeof e==`function`?e:Wo[e]:Wo.linear}var Po,Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo;function Go(){return(Go=t((()=>{Po=function(e){return e},Fo=function(e){return e*e},Io=function(e){return e*(2-e)},Lo=function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)},Ro=function(e){return e*e*e},zo=function(e){return--e*e*e+1},Bo=function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)},Vo=function(e){return e===0?0:2**(10*(e-1))},Ho=function(e){return e===1?1:1-2**(-10*e)},Uo=function(e){return e===0?0:e===1?1:e<.5?2**(10*(2*e-1))/2:(2-2**(-10*(2*e-1)))/2},Wo={linear:Po,quadraticIn:Fo,quadraticOut:Io,quadraticInOut:Lo,cubicIn:Ro,cubicOut:zo,cubicInOut:Bo,exponentialIn:Vo,exponentialOut:Ho,exponentialInOut:Uo}})))()}function Ko(e){return e.labelVisibility===`visible`&&e.visibility!==`hidden`}function qo(e){return e.backdropVisibility===`visible`&&e.visibility!==`hidden`}function Jo(e){return[+(e.rotationAlignment===`graph`),+(e.labelRotationAlignment===`graph`)]}function Yo(e,t,n){var r=e[t];if(r)for(var i=0;i<r.length;i++){var a=r[i];if(!(n<a.offset||n>=a.offset+a.count)){if(a.count===1)r.splice(i,1);else if(n===a.offset)a.offset++,a.count--;else if(n===a.offset+a.count-1)a.count--;else{var o=n+1,s=a.offset+a.count-o;a.count=n-a.offset,r.splice(i+1,0,{offset:o,count:s})}return}}}function Xo(e,t,n){if(!e[t])e[t]=[{offset:n,count:1}];else{for(var r=e[t],i=r.length,a=0;a<r.length;a++)if(n<r[a].offset){i=a;break}var o=i>0?r[i-1]:null,s=i<r.length?r[i]:null,c=o&&o.offset+o.count===n,l=s&&n+1===s.offset;c&&l?(o.count+=1+s.count,r.splice(i,1)):c?o.count++:l?(s.offset--,s.count++):r.splice(i,0,{offset:n,count:1})}}function Zo(e){if(!(0,$o.default)(e))throw Error(`Sigma: invalid graph instance.`)}function Qo(e){var t=H(e.x,2),n=t[0],r=t[1],i=H(e.y,2),a=i[0],o=i[1],s=Math.max(r-n,o-a),c=(r+n)/2,l=(o+a)/2;(s===0||Math.abs(s)===1/0||isNaN(s))&&(s=1),isNaN(c)&&(c=0),isNaN(l)&&(l=0);var u=function(e){return{x:.5+(e.x-c)/s,y:.5+(e.y-l)/s}};return u.applyTo=function(e){e.x=.5+(e.x-c)/s,e.y=.5+(e.y-l)/s},u.inverse=function(e){return{x:c+s*(e.x-.5),y:l+s*(e.y-.5)}},u.ratio=s,u}var $o,es;function ts(){return(ts=t((()=>{$o=e(Ct()),yn(),es={easing:`quadraticInOut`,duration:150}})))()}function ns(e,t){var n=t.size;if(n!==0){var r=e.length;e.length+=n;var i=0;t.forEach(function(t){e[r+i]=t,i++})}}function rs(e){e||={};for(var t=0,n=arguments.length<=1?0:arguments.length-1;t<n;t++){var r=t+1<1||arguments.length<=t+1?void 0:arguments[t+1];r&&Object.assign(e,r)}return e}function is(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&t[n]!==e[n])return!0;return!1}function as(e,t){var n=e,r=t;for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)&&n[i]!==r[i])return!1;for(var a in r)if(Object.prototype.hasOwnProperty.call(r,a)&&r[a]!==n[a])return!1;return!0}function os(e,t,n){n?e.add(t):e.delete(t)}function ss(e){return Z(e)===`object`&&`glsl`in e&&!(`attributes`in e)}function cs(e){return Z(e)===`object`&&`glsl`in e&&!(`attributes`in e)}var ls,us,ds,fs,ps,ms;function hs(){return(hs=t((()=>{zn(),ls={shapes:[Nn()],variables:{},layers:[Pn()],label:{},backdrop:{},labelAttachments:{}},us={paths:[Ln(),Rn()],extremities:[],variables:{},layers:[In()],defaultHead:`none`,defaultTail:`none`,label:{}},ds=[`nodes`,`topNodes`],fs=[`edges`,`topEdges`],ps=[].concat(fs,ds),ms={nodes:ls,edges:us,depthLayers:X(ps)}})))()}function gs(e){return Z(e)===`object`&&`uniforms`in e&&Array.isArray(e.uniforms)}function _s(e){return Z(e)===`object`&&`uniforms`in e&&`attributes`in e&&`glsl`in e}function vs(e){return Z(e)===`object`&&`uniforms`in e&&`attributes`in e&&`segments`in e}function ys(e){return Z(e)===`object`&&`uniforms`in e&&`attributes`in e&&`length`in e}function bs(e){return Z(e)===`object`&&`uniforms`in e&&`attributes`in e&&`glsl`in e}function xs(e){return Z(e)===`object`&&`glsl`in e&&`name`in e&&!(`uniforms`in e)}function Ss(e){return Z(e)===`object`&&`glsl`in e&&`name`in e&&!(`uniforms`in e)}function Cs(e){return Z(e)===`object`&&`glsl`in e&&`name`in e&&!(`uniforms`in e)}function ws(e){if(gs(e))return e;if(xs(e))return{name:e.name,glsl:e.glsl,inradiusFactor:e.inradiusFactor,uniforms:[]};throw Error(`Invalid node shape specification: ${JSON.stringify(e)}`)}function Ts(e){if(_s(e))return e;if(ss(e))return{name:e.name,glsl:e.glsl,uniforms:[],attributes:[]};throw Error(`Invalid node layer specification: ${JSON.stringify(e)}`)}function Es(e){if(vs(e))return e;if(Ss(e))return{name:e.name,glsl:e.glsl,segments:e.segments,uniforms:[],attributes:[]};throw Error(`Invalid edge path specification: ${JSON.stringify(e)}`)}function Ds(e){if(bs(e))return e;if(cs(e))return{name:e.name,glsl:e.glsl,uniforms:[],attributes:[]};throw Error(`Invalid edge layer specification: ${JSON.stringify(e)}`)}function Os(e){if(ys(e))return e;if(Cs(e))return{name:e.name,glsl:e.glsl,length:e.length,widthFactor:e.widthFactor,margin:0,uniforms:[],attributes:[]};throw Error(`Invalid edge extremity specification: ${JSON.stringify(e)}`)}function ks(e){var t=e?.shapes??ls.shapes,n=e?.layers??ls.layers,r=t.map(ws),i=n.map(Ts);if(r.length===0)throw Error(`At least one node shape must be specified.`);if(i.length===0)throw Error(`At least one node layer must be specified.`);return{shapes:r,layers:i}}function As(e){var t=e?.paths??us.paths,n=e?.extremities??us.extremities,r=e?.layers??us.layers,i=t.map(Es),a=n.map(Os).filter(function(e){return e!==null}),o=r.map(Ds);if(i.length===0)throw Error(`At least one edge path must be specified.`);if(o.length===0)throw Error(`At least one edge layer must be specified.`);return{paths:i,extremities:a,layers:o}}function js(e,t){var n={},r=U(e),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;a.variables&&Object.assign(n,a.variables)}}catch(e){r.e(e)}finally{r.f()}return Object.assign(n,t||{}),n}function Ms(e,t,n,r,i){var a=ks(r),o=a.shapes,s=a.layers,c=js(o,r?.variables);return G(G({},qr(e,t,n,{shapes:o,layers:s,label:r?.label,backdrop:r?.backdrop,labelAttachments:r?.labelAttachments},i)),{},{variables:c})}function Ns(e,t,n,r,i,a){var o=As(r),s=o.paths,c=o.extremities,l=o.layers,u=ks(a),d=u.shapes,f=u.layers,p=js(s,r?.variables);return G(G({},Ni(e,t,n,{paths:s,extremities:c,layers:l,defaultHead:r?.defaultHead,defaultTail:r?.defaultTail,label:r?.label},i,d,f)),{},{variables:p,paths:s})}function Ps(){return(Ps=t((()=>{zn(),yn(),hs(),za()})))()}function Fs(e,t){return{type:`number`,default:e,variable:t?.variable}}function Is(e,t){return{type:`color`,default:e,variable:t?.variable}}function Ls(e,t){return{type:`string`,default:e,variable:t?.variable}}function Rs(e,t){return{type:`boolean`,default:e,variable:t?.variable}}function zs(e,t){return{type:{enum:e},default:t,variable:!1}}function Bs(e,t){return{type:`array`,items:e,minItems:t?.minItems}}function Vs(){return(Vs=t((()=>{m()})))()}function Hs(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Us(e){if(Array.isArray(e))return Hs(e)}function Ws(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Gs(e,t){if(e){if(typeof e==`string`)return Hs(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Hs(e,t):void 0}}function Ks(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qs(e){return Us(e)||Ws(e)||Gs(e)||Ks()}function Js(e){"@babel/helpers - typeof";return Js=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Js(e)}function Ys(e){return Js(e)===`object`&&e!==null&&`attribute`in e}function Xs(e){return typeof e==`string`}function Zs(e){return Js(e)===`object`&&e!==null&&`attribute`in e}function Qs(e){var t=e.filter(function(e){return e.fill}).length,n=Q(t||1),r=e.flatMap(function(e,t){if(e.fill)return[];var n=e.size,r=e.mode===`pixels`,i=Zs(n)?`v_borderSize_${t+1}`:Q(typeof n==`number`?n:0);return r?[`  float borderSize_${t+1} = ${i} * context.pixelToUV;`]:[`  float borderSize_${t+1} = context.shapeHalfSize * ${i};`]}).join(`
`),i=e.flatMap(function(e,t){return e.fill?[]:[`borderSize_${t+1}`]}).join(` + `)||`0.0`,a=e.flatMap(function(e,t){return e.fill?[`  float borderSize_${t+1} = fillBorderSize;`]:[]}).join(`
`),o=e.map(function(e,t){return`  float boundary_${t+1} = boundary_${t} - borderSize_${t+1};`}).join(`
`),s=e.map(function(e,t){var n=e.color;return Ys(n)?`  vec4 borderColor_${t+1} = v_borderColor_${t+1};`:`  vec4 borderColor_${t+1} = u_borderColor_${t+1};`}).join(`
`),c=e.map(function(e,t){return`  borderColor_${t+1}.a *= bias;
  if (borderSize_${t+1} <= 2.0 * context.aaWidth) { borderColor_${t+1} = ${t===0?`borderColor_1`:`borderColor_${t}`}; }`}).join(`
`),l=e.map(function(e,t){return t===0?`if (context.sdf > boundary_1) {
    color = borderColor_1;
  } else `:`if (context.sdf > boundary_${t} - 2.0 * context.aaWidth) {
    color = mix(borderColor_${t+1}, borderColor_${t}, (context.sdf - boundary_${t} + 2.0 * context.aaWidth) / (2.0 * context.aaWidth));
  } else if (context.sdf > boundary_${t+1}) {
    color = borderColor_${t+1};
  } else `}).join(``),u=[].concat(qs(e.flatMap(function(e,t){var n=e.color;return Ys(n)?[`vec4 v_borderColor_${t+1}`]:[]})),qs(e.flatMap(function(e,t){var n=e.size;return Zs(n)?[`float v_borderSize_${t+1}`]:[]}))),d=e.flatMap(function(e,t){var n=e.color;return Xs(n)?[`vec4 u_borderColor_${t+1}`]:[]});return`
vec4 layer_border(${[].concat(qs(u),qs(d)).join(`, `)}) {
  const float bias = 255.0 / 254.0;

  // Calculate border sizes (using context.shapeSize and context.pixelSize)
${r}
${Zs(e[0].size)?`
  // Early return if first border size is effectively zero (layer disabled)
  if (borderSize_1 <= context.aaWidth) {
    return vec4(0.0);
  }
`:``}
  // Calculate fill border size (distribute remaining space)
  // Use inradiusFactor to get actual shape depth from the bounding size
  // For circle/square (inradiusFactor=1.0), this equals shapeSize
  // For triangle (inradiusFactor=0.5), this is half of shapeSize
  float shapeDepth = context.shapeSize * context.inradiusFactor;
  float fillBorderSize = (shapeDepth - (${i})) / ${n};
${a}

  // Calculate cumulative boundaries (from outside to inside in SDF space)
  float boundary_0 = 0.0;  // Shape edge at context.sdf=0
${o}

  // Set up colors
${s}
${c}

  // Select color based on SDF position with antialiasing
  // Note: outer edge AA (context.sdf > 0 transition) is handled by the composed generator's smoothstep
  vec4 color = vec4(0.0);
  ${l}{ color = borderColor_${e.length}; }

  return color;
}
`}function $s(e){var t=e?.borders??[];if(t.length===0)return{name:`border`,uniforms:[],attributes:[],glsl:`vec4 layer_border() { return vec4(0.0); }`};var n=WebGL2RenderingContext,r=n.UNSIGNED_BYTE,i=n.FLOAT;return{name:`border`,uniforms:t.flatMap(function(e,t){var n=e.color;return Xs(n)?[{name:`u_borderColor_${t+1}`,type:`vec4`,value:rn(n)}]:[]}),attributes:[].concat(qs(t.flatMap(function(e,t){var n=e.color;return Ys(n)?[{name:`borderColor_${t+1}`,size:4,type:r,normalized:!0,source:n.attribute,defaultValue:n.default}]:[]})),qs(t.flatMap(function(e,t){var n=e.size;return Zs(n)?[{name:`borderSize_${t+1}`,size:1,type:i,source:n.attribute,defaultValue:n.default}]:[]}))),glsl:Qs(t)}}function ec(){return(ec=t((()=>{Mo(),yn(),Vs(),Bs({size:Fs(.1,{variable:!0}),color:Is(`#000000`,{variable:!0}),mode:zs([`relative`,`pixels`],`relative`),fill:Rs(!1)})})))()}function tc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function nc(e,t){if(e){if(typeof e==`string`)return tc(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?tc(e,t):void 0}}function rc(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=nc(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function ic(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function ac(e,t){if(e==null)return{};var n,r,i=ic(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function oc(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function sc(e){var t=oc(e,`string`);return typeof t==`symbol`?t:t+``}function cc(e,t,n){return(t=sc(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function uc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?lc(Object(n),!0).forEach(function(t){cc(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lc(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function dc(e){if(Array.isArray(e))return tc(e)}function fc(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function pc(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mc(e){return dc(e)||fc(e)||nc(e)||pc()}function hc(e,t,n,r){var i=Object.defineProperty;try{i({},``,{})}catch{i=0}hc=function(e,t,n,r){function a(t,n){hc(e,t,function(e){return this._invoke(t,n,e)})}t?i?i(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(a(`next`,0),a(`throw`,1),a(`return`,2))},hc(e,t,n,r)}function gc(){var e,t,n=typeof Symbol==`function`?Symbol:{},r=n.iterator||`@@iterator`,i=n.toStringTag||`@@toStringTag`;function a(n,r,i,a){var c=r&&r.prototype instanceof s?r:s,l=Object.create(c.prototype);return hc(l,`_invoke`,function(n,r,i){var a,s,c,l=0,u=i||[],d=!1,f={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return a=t,s=0,c=e,f.n=n,o}};function p(n,r){for(s=n,c=r,t=0;!d&&l&&!i&&t<u.length;t++){var i,a=u[t],p=f.p,m=a[2];n>3?(i=m===r)&&(c=a[(s=a[4])?5:(s=3,3)],a[4]=a[5]=e):a[0]<=p&&((i=n<2&&p<a[1])?(s=0,f.v=r,f.n=a[1]):p<m&&(i=n<3||a[0]>r||r>m)&&(a[4]=n,a[5]=r,f.n=m,s=0))}if(i||n>1)return o;throw d=!0,r}return function(i,u,m){if(l>1)throw TypeError(`Generator is already running`);for(d&&u===1&&p(u,m),s=u,c=m;(t=s<2?e:c)||!d;){a||(s?s<3?(s>1&&(f.n=-1),p(s,c)):f.n=c:f.v=c);try{if(l=2,a){if(s||(i=`next`),t=a[i]){if(!(t=t.call(a,c)))throw TypeError(`iterator result is not an object`);if(!t.done)return t;c=t.value,s<2&&(s=0)}else s===1&&(t=a.return)&&t.call(a),s<2&&(c=TypeError(`The iterator does not provide a '`+i+`' method`),s=1);a=e}else if((t=(d=f.n<0)?c:n.call(r,f))!==o)break}catch(t){a=e,s=1,c=t}finally{l=1}}return{value:t,done:d}}}(n,i,a),!0),l}var o={};function s(){}function c(){}function l(){}t=Object.getPrototypeOf;var u=[][r]?t(t([][r]())):(hc(t={},r,function(){return this}),t),d=l.prototype=s.prototype=Object.create(u);function f(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,l):(e.__proto__=l,hc(e,i,`GeneratorFunction`)),e.prototype=Object.create(d),e}return c.prototype=l,hc(d,`constructor`,l),hc(l,`constructor`,c),c.displayName=`GeneratorFunction`,hc(l,i,`GeneratorFunction`),hc(d),hc(d,i,`Generator`),hc(d,r,function(){return this}),hc(d,`toString`,function(){return`[object Generator]`}),(gc=function(){return{w:a,m:f}})()}function _c(e){return _c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_c(e)}function vc(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(vc=function(){return!!e})()}function yc(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function bc(e,t){if(t&&(typeof t==`object`||typeof t==`function`))return t;if(t!==void 0)throw TypeError(`Derived constructors may only return object or undefined`);return yc(e)}function xc(e,t,n){return t=_c(t),bc(e,vc()?Reflect.construct(t,n||[],_c(e).constructor):t.apply(e,n))}function Sc(e,t){return Sc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Sc(e,t)}function Cc(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Sc(e,t)}function wc(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Tc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,sc(r.key),r)}}function Ec(e,t,n){return t&&Tc(e.prototype,t),n&&Tc(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Dc(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){n(e);return}s.done?t(c):Promise.resolve(c).then(r,i)}function Oc(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){Dc(a,r,i,o,s,`next`,e)}function s(e){Dc(a,r,i,o,s,`throw`,e)}o(void 0)})}}function kc(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).crossOrigin;return new Promise(function(n,r){var i=new Image;i.addEventListener(`load`,function(){n(i)},{once:!0}),i.addEventListener(`error`,function(e){r(e.error)},{once:!0}),t&&i.setAttribute(`crossOrigin`,t),i.src=e})}function Ac(e){return jc.apply(this,arguments)}function jc(){return jc=Oc(gc().m(function e(t){var n,r,i,a,o,s,c,l,u,d,f,p,m,h=arguments;return gc().w(function(e){for(;;)switch(e.n){case 0:if(n=h.length>1&&h[1]!==void 0?h[1]:{},r=n.size,i=n.crossOrigin,i!==`use-credentials`){e.n=2;break}return e.n=1,fetch(t,{credentials:`include`});case 1:a=e.v,e.n=4;break;case 2:return e.n=3,fetch(t);case 3:a=e.v;case 4:return e.n=5,a.text();case 5:if(o=e.v,s=new DOMParser().parseFromString(o,`image/svg+xml`),c=s.documentElement,l=c.getAttribute(`width`),u=c.getAttribute(`height`),l&&u){e.n=6;break}throw Error("loadSVGImage: cannot use `size` if target SVG has no definite dimensions.");case 6:return typeof r==`number`&&(c.setAttribute(`width`,``+r),c.setAttribute(`height`,``+r)),d=new XMLSerializer().serializeToString(s),f=new Blob([d],{type:`image/svg+xml`}),p=URL.createObjectURL(f),m=kc(p),m.finally(function(){return URL.revokeObjectURL(p)}),e.a(2,m)}},e)})),jc.apply(this,arguments)}function Mc(e){return Nc.apply(this,arguments)}function Nc(){return Nc=Oc(gc().m(function e(t){var n,r,i,a,o,s=arguments;return gc().w(function(e){for(;;)switch(e.p=e.n){case 0:if(n=s.length>1&&s[1]!==void 0?s[1]:{},r=n.size,i=n.crossOrigin,a=t.split(/[#?]/)[0].split(`.`).pop()?.trim().toLowerCase()===`svg`,!(a&&r)){e.n=6;break}return e.p=1,e.n=2,Ac(t,{size:r,crossOrigin:i});case 2:o=e.v,e.n=5;break;case 3:return e.p=3,e.v,e.n=4,kc(t,{crossOrigin:i});case 4:o=e.v;case 5:e.n=8;break;case 6:return e.n=7,kc(t,{crossOrigin:i});case 7:o=e.v;case 8:return e.a(2,o)}},e,null,[[1,3]])})),Nc.apply(this,arguments)}function Pc(e,t,n){var r=n.objectFit,i=n.size,a=n.correctCentering,o=r===`contain`?Math.max(e.width,e.height):Math.min(e.width,e.height),s=i.mode===`auto`?o:i.mode===`force`?i.value:Math.min(i.value,o),c=(e.width-o)/2,l=(e.height-o)/2;if(a){var u=t.getCorrectionOffset(e,o);c=u.x,l=u.y}return{sourceX:c,sourceY:l,sourceSize:o,destinationSize:s}}function Fc(e,t,n){for(var r=t.canvas,i=r.width,a=r.height,o=[],s=n.x,c=n.y,l=n.rowHeight,u=n.maxRowWidth,d={},f=0,p=e.length;f<p;f++){var m=e[f],h=m.key,g=m.image,_=m.sourceSize,v=m.sourceX,y=m.sourceY,b=m.destinationSize,x=b+Uc;c+x>a||s+x>i&&c+x+l>a||(s+x>i&&(u=Math.max(u,s),s=0,c+=l,l=x),o.push({key:h,image:g,sourceX:v,sourceY:y,sourceSize:_,destinationX:s,destinationY:c,destinationSize:b}),d[h]={x:s,y:c,size:b},s+=x,l=Math.max(l,x))}u=Math.max(u,s);for(var S=u,C=c+l,w=0,T=o.length;w<T;w++){var E=o[w],D=E.image,O=E.sourceSize,k=E.sourceX,A=E.sourceY,j=E.destinationSize,M=E.destinationX,N=E.destinationY,P=j/O,F=Math.max(k,0),ee=Math.max(A,0),te=Math.min(k+O,D.width)-F,ne=Math.min(A+O,D.height)-ee;t.drawImage(D,F,ee,te,ne,M+(F-k)*P,N+(ee-A)*P,te*P,ne*P)}return{atlas:d,texture:t.getImageData(0,0,S,C),cursor:{x:s,y:c,rowHeight:l,maxRowWidth:u}}}function Ic(e,t,n){var r=e.atlas,i=e.textures,a=e.cursor,o={atlas:uc({},r),textures:mc(i.slice(0,-1)),cursor:uc({},a)},s=[];for(var c in t){var l=t[c];l.status===`ready`&&typeof r[c]?.textureIndex!=`number`&&s.push(uc({key:c},l))}for(var u=function(){var e=Fc(s,n,o.cursor),t=e.atlas,r=e.texture;o.cursor=e.cursor;var i=[];s.forEach(function(e){t[e.key]?o.atlas[e.key]=uc(uc({},t[e.key]),{},{textureIndex:o.textures.length}):i.push(e)}),o.textures.push(r),s=i,s.length&&(o.cursor={x:0,y:0,rowHeight:0,maxRowWidth:0},n.clearRect(0,0,n.canvas.width,n.canvas.height))};s.length;)u();return o}function Lc(e){var t=6,n=6;if(e===`image`)return t;for(var r=0,i=0;i<e.length;i++)r=(r<<5)-r+e.charCodeAt(i);return t+(1+Math.abs(r)%3)*n}function Rc(e,t){var n=e.name,r=e.drawingMode,i=e.padding,a=Q(1+2*i),o=Math.max(1,t),s=`u_atlas_${n}`,c=`layer_${n}`,l=`v_texture_${n}`,u=`v_textureIndex_${n}`,d=`v_color_${n}`,f=mc(Array(o)).map(function(e,t){return`if (index == ${t}) texel = texture(${s}[${t}], (${l}.xy + coordinateInTexture * ${l}.zw), -1.0);`}).join(`
    else `),p=`else {
      texel = texture(${s}[0], (${l}.xy + coordinateInTexture * ${l}.zw), -1.0);
      noTextureFound = true;
    }`;return`
// Texture atlas uniform - declared here because generator doesn't support sampler2D arrays
uniform sampler2D ${s}[${o}];

vec4 ${c}(${r===`color`?`vec4 ${l}, float ${u}, vec4 ${d}`:`vec4 ${l}, float ${u}`}) {
  const float bias = 255.0 / 254.0;
  const float paddingRatio = ${a};

  vec4 color = vec4(0.0);

  // Calculate coordinate within the texture
  // The UV is in [-1, 1] range, convert to [0, 1] for texture sampling
  // Note: Camera rotation is handled at the program level (vertex shader)
  vec2 coordinateInTexture = context.uv * vec2(paddingRatio, -paddingRatio) * 0.5 + vec2(0.5, 0.5);
  int index = int(${u} + 0.5); // +0.5 to avoid rounding errors

  bool noTextureFound = false;
  vec4 texel = vec4(0.0);

  // No image to display - return transparent
  if (${l}.w <= 0.0) {
    // Return transparent when no image
  }
  // Image loaded into the texture
  else {
    ${f}
    ${p}

    if (!noTextureFound) {
      ${r===`color`?`// Colorize all visible image pixels with the specified color attribute
      color = mix(vec4(0.0), ${d}, texel.a);`:`// Image mode: render image pixels as-is
      color = texel;`}

      // Erase pixels "in the padding"
      // context.uv is in [-1, 1], so we check against 1.0 / paddingRatio
      float maxUV = 1.0 / paddingRatio;
      if (abs(context.uv.x) > maxUV || abs(context.uv.y) > maxUV) {
        color = vec4(0.0);
      }
    }
  }

  color.a *= bias;
  return color;
}
`}function zc(e,t){var n=e.name,r=e.drawingMode,i=e.colorAttribute,a=WebGL2RenderingContext,o=a.FLOAT,s=a.UNSIGNED_BYTE,c=Math.max(1,t),l=[],u=[{name:`texture_${n}`,size:4,type:o,source:`__texture__`},{name:`textureIndex_${n}`,size:1,type:o,source:`__textureIndex__`}];return r===`color`&&u.push({name:`color_${n}`,size:4,type:s,normalized:!0,source:i}),{name:n,uniforms:l,attributes:u,glsl:Rc(e,c)}}function Bc(e){var t=uc(uc({},Kc),e||{}),n=t.textureManager,r=t.textureManagerOptions,i=ac(t,qc),a=1,o=zc(i,a),s=n??new Gc(uc(uc({},Hc),r));return uc(uc({},o),{},{lifecycle:function(e){var t=e.gl,n=e.requestShaderRegeneration,r=e.requestRefresh,o=[],c=[],l={},u=Lc(i.name),d=function(){for(;o.length<c.length;){var e=t.createTexture();e&&o.push(e)}for(var n=0;n<c.length;n++)t.activeTexture(t.TEXTURE0+u+n),t.bindTexture(t.TEXTURE_2D,o[n]),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,c[n]),t.generateMipmap(t.TEXTURE_2D)},f=function(e){var t=e.atlas,i=e.textures,o=i.length!==c.length;l=t,c=i,o&&(a=i.length||1,n()),d(),r()};return{init:function(){s.on(Gc.NEW_TEXTURE_EVENT,f),l=s.getAtlas(),c=s.getTextures(),c.length>0&&(o=c.map(function(){return t.createTexture()}),d())},beforeRender:function(){for(var n=0;n<c.length;n++)t.activeTexture(t.TEXTURE0+u+n),t.bindTexture(t.TEXTURE_2D,o[n]);var r=e.getUniformLocation(`u_atlas_${i.name}`);r&&t.uniform1iv(r,mc(Array(c.length||1)).map(function(e,t){return u+t}))},regenerate:function(){return zc(i,a)},getAttributeData:function(e,t){var n=e[i.imageAttribute];if(t===`__texture__`){var r=n?l[n]:void 0;if(r&&typeof r.textureIndex==`number`){var a=c[r.textureIndex],o=a.width,u=a.height;return[r.x/o,r.y/u,r.size/o,r.size/u]}return[0,0,0,0]}return t===`__textureIndex__`?(typeof n==`string`&&!l[n]&&s.registerImage(n),(n?l[n]:void 0)?.textureIndex??0):null},kill:function(){s.off(Gc.NEW_TEXTURE_EVENT,f);var e=rc(o),n;try{for(e.s();!(n=e.n()).done;){var r=n.value;t.deleteTexture(r)}}catch(t){e.e(t)}finally{e.f()}o=[]}}}})}var Vc,Hc,Uc,Wc,Gc,Kc,qc;function Jc(){return(Jc=t((()=>{Mo(),Vc=m(),Vs(),Hc={size:{mode:`max`,value:512},objectFit:`cover`,correctCentering:!1,maxTextureSize:4096,debounceTimeout:500,crossOrigin:`anonymous`},Uc=1,Wc=function(){function e(){wc(this,e),this.canvas=document.createElement(`canvas`),this.context=this.canvas.getContext(`2d`,{willReadFrequently:!0})}return Ec(e,[{key:`getCorrectionOffset`,value:function(e,t){this.canvas.width=t,this.canvas.height=t,this.context.clearRect(0,0,t,t),this.context.drawImage(e,0,0,t,t);for(var n=this.context.getImageData(0,0,t,t).data,r=new Uint8ClampedArray(n.length/4),i=0;i<n.length;i++)r[i]=n[i*4+3];for(var a=0,o=0,s=0,c=0;c<t;c++)for(var l=0;l<t;l++){var u=r[c*t+l];s+=u,a+=u*l,o+=u*c}var d=a/s,f=o/s;return{x:d-t/2,y:f-t/2}}}])}(),Gc=function(e){function t(){var e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return wc(this,t),e=xc(this,t),cc(e,`canvas`,document.createElement(`canvas`)),cc(e,`ctx`,e.canvas.getContext(`2d`,{willReadFrequently:!0})),cc(e,`corrector`,new Wc),cc(e,`imageStates`,{}),cc(e,`textures`,[e.ctx.getImageData(0,0,1,1)]),cc(e,`lastTextureCursor`,{x:0,y:0,rowHeight:0,maxRowWidth:0}),cc(e,`atlas`,{}),e.options=uc(uc({},Hc),n),e.canvas.width=e.options.maxTextureSize,e.canvas.height=e.options.maxTextureSize,e}return Cc(t,e),Ec(t,[{key:`scheduleGenerateTexture`,value:function(){var e=this;typeof this.frameId!=`number`&&(typeof this.options.debounceTimeout==`number`?this.frameId=window.setTimeout(function(){e.generateTextures(),e.frameId=void 0},this.options.debounceTimeout):this.generateTextures())}},{key:`generateTextures`,value:function(){var e=Ic({atlas:this.atlas,textures:this.textures,cursor:this.lastTextureCursor},this.imageStates,this.ctx),n=e.atlas,r=e.textures,i=e.cursor;this.atlas=n,this.textures=r,this.lastTextureCursor=i,this.emit(t.NEW_TEXTURE_EVENT,{atlas:n,textures:r})}},{key:`registerImage`,value:function(){var e=Oc(gc().m(function e(t){var n,r;return gc().w(function(e){for(;;)switch(e.p=e.n){case 0:if(!this.imageStates[t]){e.n=1;break}return e.a(2);case 1:return this.imageStates[t]={status:`loading`},e.p=2,n=this.options.size,e.n=3,Mc(t,{size:n.mode===`force`?n.value:void 0,crossOrigin:this.options.crossOrigin||void 0});case 3:r=e.v,this.imageStates[t]=uc({status:`ready`,image:r},Pc(r,this.corrector,this.options)),this.scheduleGenerateTexture(),e.n=5;break;case 4:e.p=4,e.v,this.imageStates[t]={status:`error`};case 5:return e.a(2)}},e,this,[[2,4]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:`getAtlas`,value:function(){return this.atlas}},{key:`getTextures`,value:function(){return this.textures}}])}(Vc.EventEmitter),cc(Gc,`NEW_TEXTURE_EVENT`,`newTexture`),Ls(`image`),Fs(0),Ls(`color`),Ls(`image`),Kc={name:`image`,drawingMode:`image`,padding:0,colorAttribute:`color`,imageAttribute:`image`},uc(uc({},Hc),{},{drawingMode:`image`,shapeFactory:Nn,backgroundLayerFactory:Pn,padding:0,colorAttribute:`color`,imageAttribute:`image`}),qc=[`textureManager`,`textureManagerOptions`]})))()}function Yc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Xc(e){if(Array.isArray(e))return Yc(e)}function Zc(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Qc(e,t){if(e){if(typeof e==`string`)return Yc(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Yc(e,t):void 0}}function $c(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function el(e){return Xc(e)||Zc(e)||Qc(e)||$c()}function tl(e){"@babel/helpers - typeof";return tl=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},tl(e)}function nl(e){return typeof e==`string`}function rl(e){return tl(e)===`object`&&e!==null&&`attribute`in e}function il(e){return tl(e)===`object`&&e!==null&&`attribute`in e}function al(e){return typeof e==`number`}function ol(e){return tl(e)===`object`&&e!==null&&`attribute`in e}function sl(e,t){var n=[].concat(el(ol(t)?[`float v_offset`]:[]),el(e.flatMap(function(e,t){var n=e.color;return rl(n)?[`vec4 v_sliceColor_${t+1}`]:[]})),el(e.flatMap(function(e,t){var n=e.value;return il(n)?[`float v_sliceValue_${t+1}`]:[]}))),r=[].concat(el(al(t)?[`float u_offset`]:[]),[`vec4 u_defaultColor`],el(e.flatMap(function(e,t){var n=e.color;return nl(n)?[`vec4 u_sliceColor_${t+1}`]:[]}))),i=[].concat(el(n),el(r)).join(`, `),a=e.map(function(e,t){var n=e.color;return rl(n)?`  vec4 sliceColor_${t+1} = v_sliceColor_${t+1};`:`  vec4 sliceColor_${t+1} = u_sliceColor_${t+1};`}).join(`
`),o=e.map(function(e,t){return`  sliceColor_${t+1}.a *= bias;`}).join(`
`),s=e.map(function(e,t){var n=e.value,r=il(n)?`v_sliceValue_${t+1}`:Q(typeof n==`number`?n:1);return`  float sliceValue_${t+1} = ${r};`}).join(`
`),c=e.map(function(e,t){return`sliceValue_${t+1}`}).join(` + `),l=e.map(function(e,t){return`    float angle_${t+1} = angle_${t} + sliceValue_${t+1} * ${Q(ul)} / total;`}).join(`
`),u=e.slice(1).map(function(e,t){return`  color = mix(color, sliceColor_${t+2}, smoothstep(angle_${t+1} - aa, angle_${t+1} + aa, angle));`}).join(`
`);return`
vec4 layer_piechart(${i}) {
  const float bias = 255.0 / 254.0;
  float offsetValue = ${ol(t)?`v_offset`:`u_offset`};

  // Calculate angle from UV coordinates
  // atan2(y, x) gives angle in [-PI, PI], we convert to [0, 2*PI]
  // Note: Camera rotation is handled at the program level (vertex shader)
  float angle = atan(context.uv.y, context.uv.x);
  if (angle < 0.0) angle += ${Q(ul)};

  // Apply offset
  angle = angle + offsetValue;
  angle = mod(angle, ${Q(ul)});

  // Set up colors
${a}
${o}

  // Set up values
${s}

  // Normalize slice values into boundary angles
  float total = ${c};

  // Fall back to default color if all slices are zero
  if (total <= 0.0) {
    vec4 fallback = u_defaultColor;
    fallback.a *= bias;
    return fallback;
  }

  float angle_0 = 0.0;
${l}

  // ~1px expressed in angle units at this radius (arc length = radius * angle)
  float r = length(context.uv);
  float aa = context.aaWidth / max(r, context.aaWidth);

  vec4 color = sliceColor_1;
${u}

  // Blend the last/first boundary across the mod() seam at 0 / 2*PI
  color = mix(sliceColor_${e.length}, color, smoothstep(-aa, aa, angle));
  color = mix(color, sliceColor_1, smoothstep(${Q(ul)} - aa, ${Q(ul)} + aa, angle));

  return color;
}
`}function cl(e){var t=e?.slices??[],n=e?.offset??0,r=e?.defaultColor??ll;if(t.length===0)return{name:`piechart`,uniforms:[],attributes:[],glsl:`vec4 layer_piechart() { return vec4(0.0); }`};var i=WebGL2RenderingContext,a=i.UNSIGNED_BYTE,o=i.FLOAT;return{name:`piechart`,uniforms:[].concat(el(al(n)?[{name:`u_offset`,type:`float`,value:n}]:[]),[{name:`u_defaultColor`,type:`vec4`,value:rn(r)}],el(t.flatMap(function(e,t){var n=e.color;return nl(n)?[{name:`u_sliceColor_${t+1}`,type:`vec4`,value:rn(n)}]:[]}))),attributes:[].concat(el(ol(n)?[{name:`offset`,size:1,type:o,source:n.attribute,defaultValue:n.default}]:[]),el(t.flatMap(function(e,t){var n=e.color;return rl(n)?[{name:`sliceColor_${t+1}`,size:4,type:a,normalized:!0,source:n.attribute,defaultValue:n.default||`#000000`}]:[]})),el(t.flatMap(function(e,t){var n=e.value;return il(n)?[{name:`sliceValue_${t+1}`,size:1,type:o,source:n.attribute,defaultValue:n.default}]:[]}))),glsl:sl(t,n)}}var ll,ul;function dl(){return(dl=t((()=>{Mo(),yn(),Vs(),Bs({color:Is(`#000000`,{variable:!0}),value:Fs(1,{variable:!0})}),Fs(0,{variable:!0}),Is(`#000000`),ll=`#000000`,ul=2*Math.PI})))()}function fl(e,t,n,r){var i=Object.defineProperty;try{i({},``,{})}catch{i=0}fl=function(e,t,n,r){function a(t,n){fl(e,t,function(e){return this._invoke(t,n,e)})}t?i?i(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(a(`next`,0),a(`throw`,1),a(`return`,2))},fl(e,t,n,r)}function pl(){var e,t,n=typeof Symbol==`function`?Symbol:{},r=n.iterator||`@@iterator`,i=n.toStringTag||`@@toStringTag`;function a(n,r,i,a){var c=r&&r.prototype instanceof s?r:s,l=Object.create(c.prototype);return fl(l,`_invoke`,function(n,r,i){var a,s,c,l=0,u=i||[],d=!1,f={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return a=t,s=0,c=e,f.n=n,o}};function p(n,r){for(s=n,c=r,t=0;!d&&l&&!i&&t<u.length;t++){var i,a=u[t],p=f.p,m=a[2];n>3?(i=m===r)&&(c=a[(s=a[4])?5:(s=3,3)],a[4]=a[5]=e):a[0]<=p&&((i=n<2&&p<a[1])?(s=0,f.v=r,f.n=a[1]):p<m&&(i=n<3||a[0]>r||r>m)&&(a[4]=n,a[5]=r,f.n=m,s=0))}if(i||n>1)return o;throw d=!0,r}return function(i,u,m){if(l>1)throw TypeError(`Generator is already running`);for(d&&u===1&&p(u,m),s=u,c=m;(t=s<2?e:c)||!d;){a||(s?s<3?(s>1&&(f.n=-1),p(s,c)):f.n=c:f.v=c);try{if(l=2,a){if(s||(i=`next`),t=a[i]){if(!(t=t.call(a,c)))throw TypeError(`iterator result is not an object`);if(!t.done)return t;c=t.value,s<2&&(s=0)}else s===1&&(t=a.return)&&t.call(a),s<2&&(c=TypeError(`The iterator does not provide a '`+i+`' method`),s=1);a=e}else if((t=(d=f.n<0)?c:n.call(r,f))!==o)break}catch(t){a=e,s=1,c=t}finally{l=1}}return{value:t,done:d}}}(n,i,a),!0),l}var o={};function s(){}function c(){}function l(){}t=Object.getPrototypeOf;var u=[][r]?t(t([][r]())):(fl(t={},r,function(){return this}),t),d=l.prototype=s.prototype=Object.create(u);function f(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,l):(e.__proto__=l,fl(e,i,`GeneratorFunction`)),e.prototype=Object.create(d),e}return c.prototype=l,fl(d,`constructor`,l),fl(l,`constructor`,c),c.displayName=`GeneratorFunction`,fl(l,i,`GeneratorFunction`),fl(d),fl(d,i,`Generator`),fl(d,r,function(){return this}),fl(d,`toString`,function(){return`[object Generator]`}),(pl=function(){return{w:a,m:f}})()}function ml(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){n(e);return}s.done?t(c):Promise.resolve(c).then(r,i)}function hl(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){ml(a,r,i,o,s,`next`,e)}function s(e){ml(a,r,i,o,s,`throw`,e)}o(void 0)})}}function gl(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function _l(e){var t=gl(e,`string`);return typeof t==`symbol`?t:t+``}function vl(e,t,n){return(t=_l(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yl(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function bl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?yl(Object(n),!0).forEach(function(t){vl(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yl(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function xl(e,t){if(!t.length)throw Error(`getCameraStateToFitViewportToNodes: There should be at least one node.`);var n=1/0,r=-1/0,i=1/0,a=-1/0,o=1/0,s=-1/0,c=1/0,l=-1/0,u=e.getGraph();t.forEach(function(t){var d=e.getNodeDisplayData(t);if(!d)throw Error(`getCameraStateToFitViewportToNodes: Node ${t} not found in sigma's graph.`);var f=u.getNodeAttributes(t),p=f.x,m=f.y,h=d.x,g=d.y;n=Math.min(n,p),r=Math.max(r,p),i=Math.min(i,m),a=Math.max(a,m),o=Math.min(o,h),s=Math.max(s,h),c=Math.min(c,g),l=Math.max(l,g)});var d=e.getCustomBBox()||e.getBBox(),f=d.x,p=d.y,m=f[1]-f[0]||1,h=p[1]-p[0]||1,g=(o+s)/2,_=(c+l)/2,v=r-n||m,y=a-i||h,b=e.getDimensions(),x=b.width,S=b.height,C=Qt({width:x,height:S},{width:m,height:h}),w=(y/v<S/x?v:y)/Math.max(m,h)*C;return bl(bl({},e.getCamera().getState()),{},{angle:0,x:g,y:_,ratio:w})}function Sl(e,t){return Cl.apply(this,arguments)}function Cl(){return Cl=hl(pl().m(function e(t,n){var r,i,a,o,s,c=arguments;return pl().w(function(e){for(;;)switch(e.n){case 0:if(r=c.length>2&&c[2]!==void 0?c[2]:{},i=bl(bl({},wl),r),a=i.animate,o=t.getCamera(),s=xl(t,n),!a){e.n=2;break}return e.n=1,o.animate(s);case 1:e.n=3;break;case 2:o.setState(s);case 3:return e.a(2)}},e)})),Cl.apply(this,arguments)}var wl;function Tl(){return(Tl=t((()=>{yn(),wl={animate:!0}})))()}function El(e){return Z(e)===`object`&&e!==null&&`attribute`in e}function Dl(e){return typeof e==`function`}function Ol(e){return Z(e)===`object`&&e!==null&&`when`in e&&typeof e.when==`function`&&`then`in e}function kl(e){return Z(e)===`object`&&e!==null&&`whenState`in e&&`then`in e}function Al(e){return Z(e)===`object`&&e!==null&&`whenData`in e&&`then`in e}function jl(e){return G(G({},eu),e)}function Ml(e){return G(G({},tu),e)}function Nl(e){return G(G({},nu),e)}function Pl(e){return`min`in e||`max`in e||`minValue`in e||`maxValue`in e||`easing`in e}function Fl(e){return`dict`in e}function Il(e,t){return typeof e==`string`?t[e]===!0:Array.isArray(e)?e.every(function(e){return t[e]===!0}):Z(e)===`object`&&e!==null&&Object.entries(e).every(function(e){var n=H(e,2),r=n[0],i=n[1];return t[r]===i})}function Ll(e,t){var n=t[e.attribute];return n===void 0?e.defaultValue:n}function Rl(e,t,n){var r=t[e.attribute];if(r===void 0)return e.defaultValue;var i=Number(r);if(isNaN(i))return e.defaultValue;if(e.min===void 0&&e.max===void 0)return i;var a=e.minValue??i,o=e.maxValue??i;if(o===a)return e.min??i;var s=(i-a)/(o-a);s=Math.max(0,Math.min(1,s)),s=No(e.easing)(s);var c=e.min??0,l=e.max??1;return c+s*(l-c)}function zl(e,t){var n=t[e.attribute];if(n===void 0)return e.defaultValue;var r=String(n);return r in e.dict?e.dict[r]:e.defaultValue}function Bl(e,t,n){return Fl(e)?zl(e,t):Pl(e)?Rl(e,t):Ll(e,t)}function Vl(e,t){return typeof e==`string`?!!t[e]:Array.isArray(e)?e.every(function(e){return!!t[e]}):Z(e)===`object`&&e!==null&&Object.entries(e).every(function(e){var n=H(e,2),r=n[0],i=n[1];return t[r]===i})}function Hl(e,t,n,r,i,a){if(e==null)return a;if(Z(e)!==`object`&&typeof e!=`function`)return e;if(Ol(e)){var o=e.when(t,n,r,i)?e.then:e.else;return o===void 0?a:Hl(o,t,n,r,i,a)}if(kl(e)){var s=Il(e.whenState,n)?e.then:e.else;return s===void 0?a:Hl(s,t,n,r,i,a)}if(Al(e)){var c=Vl(e.whenData,t)?e.then:e.else;return c===void 0?a:Hl(c,t,n,r,i,a)}return Dl(e)?e(t,n,r,i)??a:El(e)?Bl(e,t)??a:e}function Ul(e){return e==null?`static`:Ol(e)?`graph-state`:kl(e)?Wl(`item-state`,Wl(Ul(e.then),e.else===void 0?`static`:Ul(e.else))):Al(e)?Wl(Ul(e.then),e.else===void 0?`static`:Ul(e.else)):Dl(e)?`graph-state`:(El(e),`static`)}function Wl(e,t){return e===`graph-state`||t===`graph-state`?`graph-state`:e===`item-state`||t===`item-state`?`item-state`:`static`}function Gl(e){if(!e)return{dependency:`static`,xAttribute:null,yAttribute:null};var t=Array.isArray(e)?e:[e],n=`static`,r=null,i=null,a=U(t),o;try{for(a.s();!(o=a.n()).done;){var s=o.value;if(`matchData`in s&&`cases`in s)for(var c=s.cases,l=0,u=Object.values(c);l<u.length;l++)for(var d=u[l],f=0,p=Object.values(d);f<p.length;f++){var m=p[f];n=Wl(n,Ul(m))}else if(`matchState`in s&&`cases`in s){n=Wl(n,`item-state`);for(var h=s.cases,g=0,_=Object.values(h);g<_.length;g++)for(var v=_[g],y=0,b=Object.values(v);y<b.length;y++){var x=b[y];n=Wl(n,Ul(x))}}else if(`when`in s&&`then`in s)n=`graph-state`;else if(`whenState`in s){n=Wl(n,`item-state`);var S=s.then;if(S&&Z(S)===`object`)for(var C=0,w=Object.values(S);C<w.length;C++){var T=w[C];n=Wl(n,Ul(T))}var E=s.else;if(E&&Z(E)===`object`)for(var D=0,O=Object.values(E);D<O.length;D++){var k=O[D];n=Wl(n,Ul(k))}}else if(`whenData`in s){var A=s.then;if(A&&Z(A)===`object`)for(var j=0,M=Object.values(A);j<M.length;j++){var N=M[j];n=Wl(n,Ul(N))}var P=s.else;if(P&&Z(P)===`object`)for(var F=0,ee=Object.values(P);F<ee.length;F++){var te=ee[F];n=Wl(n,Ul(te))}}else for(var ne=0,I=Object.entries(s);ne<I.length;ne++){var re=H(I[ne],2),ie=re[0],ae=re[1];if(!cu.has(ie)&&(n=Wl(n,Ul(ae)),(ie===`x`||ie===`y`)&&El(ae))){var oe=ae.attribute;ie===`x`&&!r&&(r=oe),ie===`y`&&!i&&(i=oe)}}}}catch(e){a.e(e)}finally{a.f()}return{dependency:n,xAttribute:r,yAttribute:i}}function Kl(e,t,n,r,i,a,o){for(var s in t)if(!cu.has(s)){var c=e[s]??o[s];e[s]=Hl(t[s],n,r,i,a,c)}`depth`in t&&!(`labelDepth`in t)&&(e.labelDepth=e.depth)}function ql(e,t,n,r,i,a,o){var s=U(t),c;try{for(s.s();!(c=s.n()).done;){var l=c.value;if(`matchData`in l&&`cases`in l){var u=String(n[l.matchData]??``),d=l.cases;u in d&&Kl(e,d[u],n,r,i,a,o)}else if(`matchState`in l&&`cases`in l){var f=String(r[l.matchState]??``),p=l.cases;f in p&&Kl(e,p[f],n,r,i,a,o)}else if(`when`in l&&`then`in l){var m=l.when;if(!m(n,r,i,a))continue;Kl(e,l.then,n,r,i,a,o)}else if(`whenState`in l&&`then`in l){if(!Il(l.whenState,r))continue;Kl(e,l.then,n,r,i,a,o)}else if(`whenData`in l&&`then`in l){if(!Vl(l.whenData,n))continue;Kl(e,l.then,n,r,i,a,o)}else Kl(e,l,n,r,i,a,o)}}catch(e){s.e(e)}finally{s.f()}}function Jl(e,t,n,r,i,a){for(var o=a||{},s=o,c=0,l=lu.length;c<l;c++)s[lu[c]]=uu[c];return s.x=void 0,s.y=void 0,s.labelBackgroundColor=void 0,s.labelBackgroundPadding=void 0,s.labelCursor=void 0,e?(ql(s,Array.isArray(e)?e:[e],t,n,r,i,ou),o):(s.x=t.x??0,s.y=t.y??0,o.size=t.size??10,o.color=t.color??`#666`,o.label=t.label??``,o)}function Yl(e,t,n,r,i,a){for(var o=a||{},s=o,c=0,l=du.length;c<l;c++)s[du[c]]=fu[c];return e?(ql(s,Array.isArray(e)?e:[e],t,n,r,i,su),typeof s.labelPosition==`number`&&(s.labelPosition=void 0),o):(o.size=t.size??1,o.color=t.color??`#ccc`,o.label=t.label??``,o)}function Xl(e,t,n){if(e==null)return n;if(typeof e==`function`)return e(t)??n;if(Z(e)===`object`&&`when`in e){var r=e,i=r.when(t)?r.then:r.else;return i===void 0?n:typeof i==`function`?i(t)??n:i??n}if(Z(e)===`object`&&`whenState`in e){var a=e,o=Il(a.whenState,t)?a.then:a.else;return o===void 0?n:typeof o==`function`?o(t)??n:o??n}return e??n}function Zl(e,t){var n={};if(!e)return n;var r=U(Array.isArray(e)?e:[e]),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(`when`in a&&`then`in a){var o=a.when(t)?a.then:a.else;o&&Z(o)===`object`&&Ql(n,o,t)}else if(`whenState`in a&&`then`in a){var s=Il(a.whenState,t)?a.then:a.else;s&&Z(s)===`object`&&Ql(n,s,t)}else Ql(n,a,t)}}catch(e){r.e(e)}finally{r.f()}return n}function Ql(e,t,n){for(var r=0,i=Object.entries(t);r<i.length;r++){var a=H(i[r],2),o=a[0],s=a[1];cu.has(o)||(e[o]=Xl(s,n))}}var $l,eu,tu,nu,ru,iu,au,ou,su,cu,lu,uu,du,fu,pu,mu,hu;function gu(){return(gu=t((()=>{zn(),$l=m(),hs(),yn(),Go(),eu={isHovered:!1,isLabelHovered:!1,isHidden:!1,isHighlighted:!1,isDragged:!1},tu={isHovered:!1,isLabelHovered:!1,isHidden:!1,isHighlighted:!1,parallelIndex:0,parallelCount:1},nu={isIdle:!0,isPanning:!1,isZooming:!1,isDragging:!1,hasHovered:!1,hasHighlighted:!1},ru={x:{attribute:`x`},y:{attribute:`y`},size:{whenState:`isHovered`,then:{attribute:`size`,defaultValue:12},else:{attribute:`size`,defaultValue:10}},color:{attribute:`color`,defaultValue:`#666`},label:{attribute:`label`},visibility:{whenState:`isHidden`,then:`hidden`,else:`visible`},labelVisibility:{whenState:`isHovered`,then:`visible`,else:`auto`},backdropVisibility:{whenState:`isHovered`,then:`visible`,else:`hidden`},backdropColor:`#ffffff`,backdropShadowColor:`rgba(0, 0, 0, 0.5)`,backdropShadowBlur:12,backdropPadding:6},iu={size:{attribute:`size`,defaultValue:1},color:{attribute:`color`,defaultValue:`#ccc`},label:{attribute:`label`},visibility:{whenState:`isHidden`,then:`hidden`,else:`visible`}},au={nodes:G(G({},ru),{},{depth:{whenState:`isHovered`,then:`topNodes`,else:`nodes`}}),edges:G(G({},iu),{},{depth:{whenState:[`isHighlighted`,`isHovered`],then:`topEdges`,else:`edges`}})},ou={size:10,color:`#666`,opacity:1,shape:`circle`,rotationAlignment:`viewport`,labelRotationAlignment:`viewport`,visibility:`visible`,depth:`nodes`,zIndex:0,label:``,labelColor:`#000`,labelSize:12,labelFont:`sans-serif`,labelVisibility:`auto`,labelPosition:`right`,labelAngle:0,labelDepth:`nodes`,backdropVisibility:`hidden`,backdropColor:`transparent`,backdropShadowColor:`transparent`,backdropShadowBlur:0,backdropPadding:0,backdropBorderColor:`transparent`,backdropBorderWidth:0,backdropCornerRadius:0,backdropLabelPadding:-1,backdropArea:`both`,labelAttachment:null,labelAttachmentPlacement:`below`},su={size:1,color:`#ccc`,opacity:1,path:`straight`,selfLoopPath:`loop`,parallelSpread:.25,tail:`none`,head:`none`,visibility:`visible`,depth:`edges`,zIndex:0,label:``,labelColor:`#666`,labelVisibility:`auto`,labelDepth:`edges`},cu=new Set([`when`,`whenState`,`whenData`,`then`,`else`]),lu=Object.keys(ou),uu=Object.values(ou),du=Object.keys(su),fu=Object.values(su),pu=function(e){function t(){var e;return K(this,t),e=J(this,t),e.rawEmitter=e,e}return Y(t,e),q(t)}($l.EventEmitter),mu=au,hu=ms})))()}function _u(e){if(typeof e.labelDensity!=`number`||e.labelDensity<0)throw Error("Settings: invalid `labelDensity`. Expecting a positive number.");var t=e.minCameraRatio,n=e.maxCameraRatio;if(typeof t==`number`&&typeof n==`number`&&n<t)throw Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.")}function vu(e){return rs({},yu,e)}var yu;function bu(){return(bu=t((()=>{yu={hideEdgesOnMove:!1,hideLabelsOnMove:!1,renderLabels:!0,renderEdgeLabels:!1,edgeLabelAnchors:`nodeLabels`,enableEdgeEvents:!1,nodeLabelEvents:!1,edgeLabelEvents:!1,pickingDownSizingRatio:2,nodePickingPadding:0,edgePickingPadding:4,labelPickingPadding:10,stagePadding:30,minEdgeThickness:1.7,antiAliasingFeather:1,antialiasEdges:!0,antialiasNodes:!0,dragTimeout:100,draggedEventsTolerance:3,inertiaDuration:200,inertiaRatio:3,zoomDuration:250,zoomingRatio:1.7,doubleClickTimeout:300,doubleClickZoomingRatio:2.2,doubleClickZoomingDuration:200,tapMoveTolerance:10,zoomToSizeRatioFunction:Math.sqrt,itemSizesReference:`positions`,autoRescale:!0,autoRescaleContent:`positions`,enableNodeDrag:!1,getDraggedNodes:function(e){return[e]},dragPositionToAttributes:null,labelDensity:1,labelGridCellSize:100,labelRenderedSizeThreshold:6,labelPixelSnapping:!0,minCameraRatio:null,maxCameraRatio:null,enableCameraZooming:!0,enableCameraPanning:!0,enableCameraRotation:!0,enableCameraMouseRotation:!0,cameraPanBoundaries:null,gestureTarget:`graph`,sharedGestureWheelMessage:`Use Ctrl + scroll to zoom the graph`,sharedGestureAppleWheelMessage:`Use ⌘ + scroll to zoom the graph`,sharedGestureTouchMessage:`Use two fingers to move the graph`,allowInvalidContainer:!1,DEBUG_displayPickingLayer:!1,DEBUG_logShaders:!1,DEBUG_logRenderStats:!1,DEBUG_gpuTimerQueries:!1}})))()}function xu(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Su(e,t){if(e==null)return{};var n,r,i=xu(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Cu(e,t){var n=t.getBoundingClientRect();return{x:e.clientX-n.left,y:e.clientY-n.top}}function wu(e,t){var n=G(G({},Cu(e,t)),{},{sigmaDefaultPrevented:!1,preventSigmaDefault:function(){n.sigmaDefaultPrevented=!0},original:e});return n}function Tu(e){var t=`x`in e?e:G(G({},e.touches[0]||e.previousTouches[0]),{},{original:e.original,sigmaDefaultPrevented:e.sigmaDefaultPrevented,preventSigmaDefault:function(){e.sigmaDefaultPrevented=!0,t.sigmaDefaultPrevented=!0}});return t}function Eu(e,t){var n=wu(e,t);return n.delta=ku(e),n}function Du(e){for(var t=[],n=0,r=Math.min(e.length,dd);n<r;n++)t.push(e[n]);return t}function Ou(e,t,n){var r={touches:Du(e.touches).map(function(e){return Cu(e,n)}),previousTouches:t.map(function(e){return Cu(e,n)}),sigmaDefaultPrevented:!1,preventSigmaDefault:function(){r.sigmaDefaultPrevented=!0},original:e};return r}function ku(e){if(e.deltaY!==void 0)return e.deltaY*-3/360;if(e.detail!==void 0)return e.detail/-9;throw Error(`Captor: could not extract delta from event.`)}function Au(e){return e instanceof PointerEvent&&e.pointerType===`touch`}function ju(e,t){return e<t?`${e} ${t}`:`${t} ${e}`}function Mu(e,t){if(e===!1||e===`extend`||e===`separate`)return e;var n=e[t];return n===void 0?e.default??!1:n}function Nu(e){return e===!1?!1:e===`extend`||e===`separate`||Object.values(e).some(function(e){return e===`extend`||e===`separate`})}function Pu(e){return e===`separate`?!0:e===!1||e===`extend`?!1:e.default===`separate`||Object.values(e).includes(`separate`)}function Fu(){return{lookup:[null],idsByKind:{node:new Map,edge:new Map,nodeLabel:new Map,edgeLabel:new Map},nextId:1}}function Iu(e,t,n){return e.idsByKind[t].get(n)??0}function Lu(e,t){var n=U(bd),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;if(i===t||yd[i].parent===t){var a=U(e.idsByKind[i].values()),o;try{for(a.s();!(o=a.n()).done;){var s=o.value;e.lookup[s]=null}}catch(e){a.e(e)}finally{a.f()}e.idsByKind[i]=new Map}}}catch(e){n.e(e)}finally{n.f()}var c=1,l=U(bd),u;try{for(l.s();!(u=l.n()).done;){var d=u.value;if(d===t)break;c+=e.idsByKind[d].size}}catch(e){l.e(e)}finally{l.f()}e.nextId=c}function Ru(e,t,n){var r=e.nextId++;return e.idsByKind[t].set(n,r),e.lookup[r]={kind:t,key:n},r}function zu(e,t){var n=U(bd),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;if(yd[i].parent!==null){var a=U(e.idsByKind[i].values()),o;try{for(a.s();!(o=a.n()).done;){var s=o.value;e.lookup[s]=null}}catch(e){a.e(e)}finally{a.f()}e.idsByKind[i]=new Map}}}catch(e){n.e(e)}finally{n.f()}e.nextId=1;var c=U(bd),l;try{for(c.s();!(l=c.n()).done;){var u=l.value;if(yd[u].parent===null){var d=U(e.idsByKind[u].values()),f;try{for(d.s();!(f=d.n()).done;){var p=f.value;p>=e.nextId&&(e.nextId=p+1)}}catch(e){d.e(e)}finally{d.f()}}}}catch(e){c.e(e)}finally{c.f()}var m=U(bd),h;try{for(m.s();!(h=m.n()).done;){var g=h.value,_=yd[g];if(_.parent!==null&&_.isEnabled(t)){var v=U(e.idsByKind[_.parent].keys()),y;try{for(v.s();!(y=v.n()).done;){var b=y.value;e.idsByKind[g].set(b,e.nextId),e.lookup[e.nextId]={kind:g,key:b},e.nextId++}}catch(e){v.e(e)}finally{v.f()}}}}catch(e){m.e(e)}finally{m.f()}}function Bu(e,t){var n=U(bd),r;try{for(n.s();!(r=n.n()).done;){var i=r.value,a=e[i],o=t[i];if(a!==o){if(a.size!==o.size)return!1;var s=U(a),c;try{for(s.s();!(c=s.n()).done;){var l=H(c.value,2),u=l[0],d=l[1];if(o.get(u)!==d)return!1}}catch(e){s.e(e)}finally{s.f()}}}}catch(e){n.e(e)}finally{n.f()}return!0}function Vu(e,t,n){yd[t.kind].setHover(e,t.key,n)}function Hu(e,t){return yd[t.kind].getCursor(e,t.key)}function Uu(e,t){return`${t}${yd[e].eventSuffix}`}function Wu(e,t){return G(G({},t),{},W({},yd[e.kind].payloadKey,e.key))}function Gu(e,t,n){var r=yd[t.kind].resolveForVerb;return r?r(t,n,e):t}function Ku(e,t){var n=yd[t.kind].isHitValid;return!n||n(e,t.key)}function qu(e){return bd.filter(function(t){return t===e||yd[t].parent===e})}function Ju(e,t,n){return t&&=Gu(e,t,n),t&&!Ku(e,t)&&(t=null),t}function Yu(e,t,n){return Ju(e,n===`wheel`?e.stateManager.hovered:e.getHitAtPosition(t),n)}function Xu(e,t){return!e||!t?e===t:e.kind===t.kind&&e.key===t.key}function Zu(e,t,n){var r={event:n,preventSigmaDefault:function(){return n.preventSigmaDefault()}},i=e.dragManager.session,a=i?{kind:`node`,key:i.node}:Ju(e,t,`enter`),o=e.stateManager,s=o.hovered;Xu(s,a)||(s&&(Vu(e,s,!1),e.emit(Uu(s.kind,`leave`),Wu(s,r))),o.setHovered(a),a&&(Vu(e,a,!0),e.emit(Uu(a.kind,`enter`),Wu(a,r))),e.updateContainerCursor())}function Qu(e,t,n,r){r.handleResize=function(){return e.scheduleRefresh()},window.addEventListener(`resize`,r.handleResize),r.handleMove=function(t){e.hoverResolver.pointerMoved(Tu(t))},r.handleMoveBody=function(t){var n=Tu(t),r=e.dragManager;if(r.pendingNode&&!r.session){var i=e.nodeStyleAnalysis,a=i.xAttribute,o=i.yAttribute,s=e.settings;r.start(r.pendingNode,n,s.getDraggedNodes,a||`x`,o||`y`),r.pendingNode=null}r.session&&(r.applyMove(n,e.settings.dragPositionToAttributes),e.emit(`nodeDrag`,{node:r.session.node,allDraggedNodes:r.session.allNodes,event:n}),n.preventSigmaDefault()),e.emit(`moveBody`,{event:n,preventSigmaDefault:function(){return n.preventSigmaDefault()}})},r.handleLeave=function(t){var n=Tu(t),r={event:n,preventSigmaDefault:function(){return n.preventSigmaDefault()}};e.hoverResolver.pointerLeft(),Zu(e,null,n),e.emit(`leaveStage`,r)},r.handleEnter=function(t){var n=Tu(t);e.emit(`enterStage`,{event:n,preventSigmaDefault:function(){return n.preventSigmaDefault()}})};var i=function(t){return function(n){var r=Tu(n),i={event:r,preventSigmaDefault:function(){return r.preventSigmaDefault()}},a=Yu(e,r,t);a?e.emit(Uu(a.kind,t),Wu(a,i)):e.emit(`${t}Stage`,i)}};r.handleClick=i(`click`),r.handleRightClick=i(`rightClick`),r.handleDoubleClick=i(`doubleClick`),r.handleWheel=i(`wheel`),r.handleDown=function(t){var n=Tu(t),r={event:n,preventSigmaDefault:function(){return n.preventSigmaDefault()}},i=Yu(e,n,`down`);i?(i.kind===`node`&&e.settings.enableNodeDrag&&(e.dragManager.pendingNode=i.key),e.emit(Uu(i.kind,`down`),Wu(i,r))):e.emit(`downStage`,r)},r.handleUp=function(t){var n=Tu(t),r={event:n,preventSigmaDefault:function(){return n.preventSigmaDefault()}},i=e.dragManager.end();i&&e.emit(`nodeDragEnd`,G({node:i.node,allDraggedNodes:i.allNodes},r));var a=Yu(e,n,`up`);a?e.emit(Uu(a.kind,`up`),Wu(a,r)):e.emit(`upStage`,r)},t.on(`mousemove`,r.handleMove),t.on(`mousemovebody`,r.handleMoveBody),t.on(`click`,r.handleClick),t.on(`rightClick`,r.handleRightClick),t.on(`doubleClick`,r.handleDoubleClick),t.on(`wheel`,r.handleWheel),t.on(`mousedown`,r.handleDown),t.on(`mouseup`,r.handleUp),t.on(`mouseleave`,r.handleLeave),t.on(`mouseenter`,r.handleEnter),n.on(`touchdown`,r.handleDown),n.on(`touchdown`,r.handleMove),n.on(`touchup`,r.handleUp),n.on(`touchmove`,r.handleMove),n.on(`tap`,r.handleClick),n.on(`doubletap`,r.handleDoubleClick),n.on(`touchmove`,r.handleMoveBody)}function $u(e,t){var n=e.graph,r=new Set([`x`,`y`,`zIndex`,`type`]);t.eachNodeAttributesUpdatedGraphUpdate=function(t){var i=t.hints?.attributes,a=!i||i.some(function(e){return r.has(e)});e.refresh({partialGraph:{nodes:n.nodes()},skipIndexation:!a,schedule:!0})},t.eachEdgeAttributesUpdatedGraphUpdate=function(t){var r=t.hints?.attributes,i=r&&[`zIndex`,`type`].some(function(e){return r?.includes(e)});e.refresh({partialGraph:{edges:n.edges()},skipIndexation:!i,schedule:!0})},t.addNodeGraphUpdate=function(t){e.addNode(t.key),e.refresh({partialGraph:{nodes:[t.key]},skipIndexation:!1,schedule:!0})},t.updateNodeGraphUpdate=function(t){e.refresh({partialGraph:{nodes:[t.key]},skipIndexation:!1,schedule:!0})},t.dropNodeGraphUpdate=function(t){e.removeNode(t.key),e.refresh({schedule:!0})},t.addEdgeGraphUpdate=function(t){var n=t.key;e.edgeGroups.register(n),e.addEdge(n);var r=e.edgeGroups.getSiblings(n),i=U(r),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;e.addEdge(o)}}catch(e){i.e(e)}finally{i.f()}e.refresh({partialGraph:{edges:[n].concat(X(r))},schedule:!0})},t.updateEdgeGraphUpdate=function(t){e.refresh({partialGraph:{edges:[t.key]},skipIndexation:!1,schedule:!0})},t.dropEdgeGraphUpdate=function(t){var n=t.key,r=e.edgeGroups.getSiblings(n);e.edgeGroups.unregister(n),e.removeEdge(n);var i=U(r),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;e.addEdge(o)}}catch(e){i.e(e)}finally{i.f()}e.refresh({schedule:!0})},t.clearEdgesGraphUpdate=function(){e.clearEdgeState(),e.clearEdgeIndices(),e.refresh({schedule:!0})},t.clearGraphUpdate=function(){e.clearEdgeState(),e.clearNodeState(),e.clearEdgeIndices(),e.clearNodeIndices(),e.refresh({schedule:!0})},n.on(`nodeAdded`,t.addNodeGraphUpdate),n.on(`nodeDropped`,t.dropNodeGraphUpdate),n.on(`nodeAttributesUpdated`,t.updateNodeGraphUpdate),n.on(`eachNodeAttributesUpdated`,t.eachNodeAttributesUpdatedGraphUpdate),n.on(`edgeAdded`,t.addEdgeGraphUpdate),n.on(`edgeDropped`,t.dropEdgeGraphUpdate),n.on(`edgeAttributesUpdated`,t.updateEdgeGraphUpdate),n.on(`eachEdgeAttributesUpdated`,t.eachEdgeAttributesUpdatedGraphUpdate),n.on(`edgesCleared`,t.clearEdgesGraphUpdate),n.on(`cleared`,t.clearGraphUpdate)}function ed(e,t){e.removeListener(`nodeAdded`,t.addNodeGraphUpdate),e.removeListener(`nodeDropped`,t.dropNodeGraphUpdate),e.removeListener(`nodeAttributesUpdated`,t.updateNodeGraphUpdate),e.removeListener(`eachNodeAttributesUpdated`,t.eachNodeAttributesUpdatedGraphUpdate),e.removeListener(`edgeAdded`,t.addEdgeGraphUpdate),e.removeListener(`edgeDropped`,t.dropEdgeGraphUpdate),e.removeListener(`edgeAttributesUpdated`,t.updateEdgeGraphUpdate),e.removeListener(`eachEdgeAttributesUpdated`,t.eachEdgeAttributesUpdatedGraphUpdate),e.removeListener(`edgesCleared`,t.clearEdgesGraphUpdate),e.removeListener(`cleared`,t.clearGraphUpdate)}function td(e){var t=e.coords,n=e.nodeData,r=e.dimensions,i=e.stagePadding,a=e.zoomToSizeRatioFunction,o=e.itemSizesReference,s=e.fitLabels,c=e.nodeLabelBox,l=Object.keys(t);if(!l.length)return e.extent;for(var u=a(1)||1,d=o===`positions`,f=r.width,p=r.height,m=e.extent,h=0;h<Sd;h++){for(var g=Qo(m),_={width:m.x[1]-m.x[0]||1,height:m.y[1]-m.y[0]||1},v=$t(xd,r,_,i),y=nd(v,g({x:0,y:0}),f,p),b=nd(v,g({x:1,y:0}),f,p),x=Math.hypot(b.x-y.x,b.y-y.y)||1,S=1/0,C=-1/0,w=1/0,T=-1/0,E=0,D=l.length;E<D;E++){var O=l[E],k=n[O],A=k.size/u*(d?x:1),j=-A,M=A,N=-A,P=A;if(s){var F=c(k,A);F&&(F.minX<j&&(j=F.minX),F.maxX>M&&(M=F.maxX),F.minY<N&&(N=F.minY),F.maxY>P&&(P=F.maxY))}var ee=t[O],te=ee.x,ne=ee.y;S=Math.min(S,te+j/x),C=Math.max(C,te+M/x),w=Math.min(w,ne-P/x),T=Math.max(T,ne-N/x)}var I={x:[S,C],y:[w,T]},re=Math.max(I.x[1]-I.x[0],I.y[1]-I.y[0])||1,ie=Math.max(Math.abs(I.x[0]-m.x[0]),Math.abs(I.x[1]-m.x[1]),Math.abs(I.y[0]-m.y[0]),Math.abs(I.y[1]-m.y[1]));if(m=I,ie/re<Cd)break}return m}function nd(e,t,n,r){var i=Zt(e,t);return{x:(1+i.x)*n/2,y:(1-i.y)*r/2}}function rd(e){var t=Vn(`style`);t.textContent=e,document.head.appendChild(t);var n=(t.sheet?.cssRules.length??0)>0;return t.remove(),n}function id(){return Dd===null&&(Dd=Ed,rd(`@scope {}`)&&(Dd=`@scope {
${Dd}
}`),rd(`@layer sigma-gesture-hint {}`)&&(Dd=`@layer sigma-gesture-hint {
${Dd}
}`)),Dd}function ad(e){var t=e.graph,n=e.hoveredNode,r=e.highlightedNodes,i=e.displayedNodeLabels,a=new Set,o=new Set(r);n&&o.add(n);var s=U(o),c;try{for(s.s();!(c=s.n()).done;){var l=c.value;t.hasNode(l)&&t.forEachEdge(l,function(e){a.add(e)})}}catch(e){s.e(e)}finally{s.f()}var u=U(i),d;try{var f=function(){var e=d.value;if(o.has(e))return 1;t.forEachEdge(e,function(t,n,r,o){var s=r===e?o:r;i.has(s)&&a.add(t)})};for(u.s();!(d=u.n()).done;)if(f())continue}catch(e){u.e(e)}finally{u.f()}return Array.from(a)}var od,sd,cd,ld,ud,dd,fd,pd,md,hd,gd,_d,vd,yd,bd,xd,Sd,Cd,wd,Td,Ed,Dd,Od,kd,Ad,jd,Md,Nd,Pd,Fd,Id,Ld,Rd,zd,Bd,Vd,Hd,Ud,Wd;function Gd(){return(Gd=t((()=>{zn(),gu(),ts(),Go(),bu(),yn(),za(),hs(),Gn(),Ps(),go(),m(),Ct(),od=[`factor`],sd=[`factor`],cd=1.5,ld={x:.5,y:.5,angle:0,ratio:1},ud=function(e){function t(){var e;K(this,t);var n=[...arguments];return e=J(this,t,[].concat(n)),W(e,`minRatio`,null),W(e,`maxRatio`,null),W(e,`enabled`,!0),W(e,`enabledZooming`,!0),W(e,`enabledPanning`,!0),W(e,`enabledRotation`,!0),W(e,`constrainState`,null),W(e,`state`,G({},ld)),W(e,`previousState`,G({},ld)),W(e,`nextFrame`,null),W(e,`currentAnimationFrom`,null),W(e,`currentAnimationTo`,null),W(e,`animationCallback`,null),e}return Y(t,e),q(t,[{key:`x`,get:function(){return this.state.x}},{key:`y`,get:function(){return this.state.y}},{key:`angle`,get:function(){return this.state.angle}},{key:`ratio`,get:function(){return this.state.ratio}},{key:`getState`,value:function(){return G({},this.state)}},{key:`getPreviousState`,value:function(){return G({},this.previousState)}},{key:`getBoundedRatio`,value:function(e){var t=e;return typeof this.minRatio==`number`&&(t=Math.max(t,this.minRatio)),typeof this.maxRatio==`number`&&(t=Math.min(t,this.maxRatio)),t}},{key:`validateState`,value:function(e){var t=this.getState();return this.enabledPanning&&typeof e.x==`number`&&(t.x=e.x),this.enabledPanning&&typeof e.y==`number`&&(t.y=e.y),this.enabledZooming&&typeof e.ratio==`number`&&(t.ratio=this.getBoundedRatio(e.ratio)),this.enabledRotation&&typeof e.angle==`number`&&(t.angle=e.angle),this.constrainState?this.constrainState(t):t}},{key:`isAnimating`,value:function(){return this.nextFrame!==null}},{key:`setState`,value:function(e){if(!this.enabled)return this;var t=this.validateState(e);return as(this.state,t)||(this.previousState=this.state,this.state=t,this.emit(`updated`,this.getState())),this}},{key:`updateState`,value:function(e){return this.setState(e(this.getState())),this}},{key:`animate`,value:function(e,t){var n=this;return this.enabled?new Promise(function(r){return n.runAnimation(e,G(G({},es),t),r)}):Promise.resolve()}},{key:`cancelAnimation`,value:function(){return this.nextFrame!==null&&(cancelAnimationFrame(this.nextFrame),this.nextFrame=null),this.resolveAnimation(),this.emitAnimationEnd(!1),this}},{key:`zoomIn`,value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.factor,n=t===void 0?cd:t,r=Su(e,od);return this.animate({ratio:this.ratio/n},r)}},{key:`zoomOut`,value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.factor,n=t===void 0?cd:t,r=Su(e,sd);return this.animate({ratio:this.ratio*n},r)}},{key:`reset`,value:function(e){return this.animate(ld,e)}},{key:`runAnimation`,value:function(e,t,n){var r=this,i=No(t.easing),a=Date.now(),o=this.getState(),s=this.validateState(e),c=function(){if(!r.enabled)r.cancelAnimation();else{var e=t.duration>0?(Date.now()-a)/t.duration:1;if(e>=1)r.nextFrame=null,r.setState(s),r.resolveAnimation(),r.emitAnimationEnd(!0);else{var n=i(e);r.setState({x:o.x+(s.x-o.x)*n,y:o.y+(s.y-o.y)*n,angle:o.angle+(s.angle-o.angle)*n,ratio:o.ratio+(s.ratio-o.ratio)*n}),r.nextFrame=requestAnimationFrame(c)}}};this.cancelAnimation(),this.currentAnimationFrom=o,this.currentAnimationTo=s,this.animationCallback=n,this.emit(`animationStart`,{from:o,to:s}),c()}},{key:`resolveAnimation`,value:function(){var e=this.animationCallback;this.animationCallback=null,e&&e()}},{key:`emitAnimationEnd`,value:function(e){var t=this.currentAnimationFrom,n=this.currentAnimationTo;t&&n&&(this.currentAnimationFrom=null,this.currentAnimationTo=null,this.emit(`animationEnd`,{from:t,to:n,completed:e}))}}],[{key:`from`,value:function(e){return new t().setState(e)}}])}(pu),dd=2,fd=function(e){function t(e,n){var r;return K(this,t),r=J(this,t),r.container=e,r.renderer=n,r}return Y(t,e),q(t)}(pu),pd=[`doubleClickTimeout`,`doubleClickZoomingDuration`,`doubleClickZoomingRatio`,`dragTimeout`,`draggedEventsTolerance`,`enableCameraMouseRotation`,`gestureTarget`,`inertiaDuration`,`inertiaRatio`,`zoomDuration`,`zoomingRatio`].reduce(function(e,t){return G(G({},e),{},W({},t,yu[t]))},{}),md=function(e){function t(e,n){var r;return K(this,t),r=J(this,t,[e,n]),W(r,`enabled`,!0),W(r,`draggedEvents`,0),W(r,`downStartTime`,null),W(r,`lastMouseX`,null),W(r,`lastMouseY`,null),W(r,`isMouseDown`,!1),W(r,`isMoving`,!1),W(r,`isPanningStage`,!1),W(r,`movingTimeout`,null),W(r,`startCameraState`,null),W(r,`clicks`,0),W(r,`doubleClickTimeout`,null),W(r,`isRightMouseDown`,!1),W(r,`startRotationAngle`,null),W(r,`startCameraAngle`,null),W(r,`currentWheelDirection`,0),W(r,`lastWheelAnimationId`,0),W(r,`settings`,pd),r.handleRightClick=r.handleRightClick.bind(r),r.handleDown=r.handleDown.bind(r),r.handleUp=r.handleUp.bind(r),r.handleMove=r.handleMove.bind(r),r.handleWheel=r.handleWheel.bind(r),r.handleLeave=r.handleLeave.bind(r),r.handleEnter=r.handleEnter.bind(r),e.addEventListener(`contextmenu`,r.handleRightClick,{capture:!1}),e.addEventListener(`pointerdown`,r.handleDown,{capture:!1}),e.addEventListener(`wheel`,r.handleWheel,{capture:!1,passive:!1}),e.addEventListener(`pointerleave`,r.handleLeave,{capture:!1}),e.addEventListener(`pointerenter`,r.handleEnter,{capture:!1}),document.addEventListener(`pointermove`,r.handleMove,{capture:!1}),document.addEventListener(`pointerup`,r.handleUp,{capture:!1}),r}return Y(t,e),q(t,[{key:`kill`,value:function(){var e=this.container;e.removeEventListener(`contextmenu`,this.handleRightClick),e.removeEventListener(`pointerdown`,this.handleDown),e.removeEventListener(`wheel`,this.handleWheel),e.removeEventListener(`pointerleave`,this.handleLeave),e.removeEventListener(`pointerenter`,this.handleEnter),document.removeEventListener(`pointermove`,this.handleMove),document.removeEventListener(`pointerup`,this.handleUp)}},{key:`handleClick`,value:function(e){var t=this;if(this.enabled){if(this.clicks++,this.clicks===2)return this.clicks=0,typeof this.doubleClickTimeout==`number`&&(clearTimeout(this.doubleClickTimeout),this.doubleClickTimeout=null),this.handleDoubleClick(e);setTimeout(function(){t.clicks=0,t.doubleClickTimeout=null},this.settings.doubleClickTimeout),this.draggedEvents<this.settings.draggedEventsTolerance&&this.emit(`click`,wu(e,this.container))}}},{key:`handleRightClick`,value:function(e){this.enabled&&(this.settings.enableCameraMouseRotation&&e.preventDefault(),this.emit(`rightClick`,wu(e,this.container)))}},{key:`handleDoubleClick`,value:function(e){if(this.enabled){e.preventDefault(),e.stopPropagation();var t=wu(e,this.container);if(this.emit(`doubleClick`,t),!t.sigmaDefaultPrevented){var n=this.renderer.getCamera(),r=n.getBoundedRatio(n.getState().ratio/this.settings.doubleClickZoomingRatio);n.animate(this.renderer.getViewportZoomedState(Cu(e,this.container),r),{easing:`quadraticInOut`,duration:this.settings.doubleClickZoomingDuration})}}}},{key:`handleDown`,value:function(e){if(this.enabled&&!Au(e)){if(e.button===0){this.startCameraState=this.renderer.getCamera().getState();var t=Cu(e,this.container),n=t.x,r=t.y;this.lastMouseX=n,this.lastMouseY=r,this.draggedEvents=0,this.downStartTime=Date.now(),this.isMouseDown=!0}if(e.button===2&&this.settings.enableCameraMouseRotation){var i=Cu(e,this.container),a=i.x,o=i.y,s=this.container.offsetWidth/2,c=this.container.offsetHeight/2;this.startRotationAngle=Math.atan2(o-c,a-s),this.startCameraAngle=this.renderer.getCamera().getState().angle,this.isRightMouseDown=!0}this.emit(`mousedown`,wu(e,this.container))}}},{key:`handleUp`,value:function(e){var t=this;if(this.enabled&&!Au(e)&&(this.isMouseDown||this.isRightMouseDown)){if(this.isRightMouseDown)this.isRightMouseDown=!1,this.startRotationAngle=null,this.startCameraAngle=null,this.emit(`mouseup`,wu(e,this.container));else{var n=this.renderer.getCamera();this.isMouseDown=!1,this.isPanningStage&&(this.isPanningStage=!1,this.renderer._setPanning(!1)),typeof this.movingTimeout==`number`&&(clearTimeout(this.movingTimeout),this.movingTimeout=null);var r=Cu(e,this.container),i=r.x,a=r.y,o=n.getState(),s=n.getPreviousState();this.isMoving?n.animate({x:o.x+this.settings.inertiaRatio*(o.x-s.x),y:o.y+this.settings.inertiaRatio*(o.y-s.y)},{duration:this.settings.inertiaDuration,easing:`quadraticOut`}):(this.lastMouseX!==i||this.lastMouseY!==a)&&n.setState({x:o.x,y:o.y}),this.isMoving=!1,setTimeout(function(){var e=t.draggedEvents>0;t.draggedEvents=0;var n=t.renderer.getSetting(`hideEdgesOnMove`)||t.renderer.getSetting(`hideLabelsOnMove`);e&&n&&t.renderer.refresh()},0),this.emit(`mouseup`,wu(e,this.container)),(e.target===this.container||e.composedPath()[0]===this.container)&&this.handleClick(e)}}}},{key:`handleMove`,value:function(e){var t=this;if(this.enabled&&!Au(e)){var n=wu(e,this.container);if(this.emit(`mousemovebody`,n),(e.target===this.container||e.composedPath()[0]===this.container)&&this.emit(`mousemove`,n),this.isMouseDown&&this.draggedEvents++,!n.sigmaDefaultPrevented){if(this.isMouseDown){this.isMoving=!0,typeof this.movingTimeout==`number`&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(function(){t.movingTimeout=null,t.isMoving=!1},this.settings.dragTimeout);var r=this.renderer.getCamera(),i=Cu(e,this.container),a=i.x,o=i.y,s=this.renderer.viewportToFramedGraph({x:this.lastMouseX,y:this.lastMouseY}),c=this.renderer.viewportToFramedGraph({x:a,y:o}),l=s.x-c.x,u=s.y-c.y,d=r.getState(),f=d.x+l,p=d.y+u;this.isPanningStage||(this.isPanningStage=!0,this.renderer._setPanning(!0)),r.setState({x:f,y:p}),this.lastMouseX=a,this.lastMouseY=o,e.preventDefault(),e.stopPropagation()}if(this.isRightMouseDown){var m=Cu(e,this.container),h=m.x,g=m.y,_=this.container.offsetWidth/2,v=this.container.offsetHeight/2,y=Math.atan2(g-v,h-_)-this.startRotationAngle;this.renderer.getCamera().setState({angle:this.startCameraAngle+y}),e.preventDefault(),e.stopPropagation()}}}}},{key:`handleLeave`,value:function(e){Au(e)||this.emit(`mouseleave`,wu(e,this.container))}},{key:`handleEnter`,value:function(e){Au(e)||this.emit(`mouseenter`,wu(e,this.container))}},{key:`handleWheel`,value:function(e){var t=this,n=this.renderer.getCamera();if(this.enabled&&n.enabledZooming){var r=Eu(e,this.container);if(this.emit(`wheel`,r),!r.sigmaDefaultPrevented){var i=this.settings.gestureTarget;if(i!==`page`){if(i===`shared`&&!e.ctrlKey&&!e.metaKey)this.renderer._showGestureHint(`wheel`);else{var a=ku(e);if(a){e.preventDefault(),e.stopPropagation();var o=n.getState().ratio,s=a>0?1/this.settings.zoomingRatio:this.settings.zoomingRatio,c=n.getBoundedRatio(o*s),l=a>0?1:-1,u=Date.now();if(o!==c&&!(this.currentWheelDirection===l&&this.lastWheelTriggerTime&&u-this.lastWheelTriggerTime<this.settings.zoomDuration/5)){var d=++this.lastWheelAnimationId;n.animate(this.renderer.getViewportZoomedState(Cu(e,this.container),c),{easing:`quadraticOut`,duration:this.settings.zoomDuration}).then(function(){t.lastWheelAnimationId===d&&(t.currentWheelDirection=0)}),this.currentWheelDirection=l,this.lastWheelTriggerTime=u}}}}}}}},{key:`setSettings`,value:function(e){this.settings=e}}])}(fd),hd=[`dragTimeout`,`gestureTarget`,`inertiaDuration`,`inertiaRatio`,`doubleClickTimeout`,`doubleClickZoomingRatio`,`doubleClickZoomingDuration`,`tapMoveTolerance`].reduce(function(e,t){return G(G({},e),{},W({},t,yu[t]))},{}),gd=function(e){function t(e,n){var r;return K(this,t),r=J(this,t,[e,n]),W(r,`enabled`,!0),W(r,`isMoving`,!1),W(r,`hasMoved`,!1),W(r,`isPanningStage`,!1),W(r,`isZoomingStage`,!1),W(r,`touchMode`,0),W(r,`startTouchesPositions`,[]),W(r,`lastTouches`,[]),W(r,`lastTap`,null),W(r,`settings`,hd),r.handleStart=r.handleStart.bind(r),r.handleLeave=r.handleLeave.bind(r),r.handleMove=r.handleMove.bind(r),e.addEventListener(`touchstart`,r.handleStart,{capture:!1}),e.addEventListener(`touchcancel`,r.handleLeave,{capture:!1}),document.addEventListener(`touchend`,r.handleLeave,{capture:!1,passive:!1}),document.addEventListener(`touchmove`,r.handleMove,{capture:!1,passive:!1}),r}return Y(t,e),q(t,[{key:`kill`,value:function(){var e=this.container;e.removeEventListener(`touchstart`,this.handleStart),e.removeEventListener(`touchcancel`,this.handleLeave),document.removeEventListener(`touchend`,this.handleLeave),document.removeEventListener(`touchmove`,this.handleMove)}},{key:`getDimensions`,value:function(){return{width:this.container.offsetWidth,height:this.container.offsetHeight}}},{key:`doesCapture`,value:function(e){var t=this.settings.gestureTarget;return t===`graph`||t!==`page`&&e>=2}},{key:`syncStageFlags`,value:function(){var e=this.touchMode===1&&this.hasMoved,t=this.touchMode===2;e!==this.isPanningStage&&(this.isPanningStage=e,this.renderer._setPanning(e)),t!==this.isZoomingStage&&(this.isZoomingStage=t,this.renderer._setZooming(t))}},{key:`handleStart`,value:function(e){var t=this;if(this.enabled){var n=Du(e.touches);if(this.touchMode=n.length,this.startCameraState=this.renderer.getCamera().getState(),this.startTouchesPositions=n.map(function(e){return Cu(e,t.container)}),this.touchMode===2){var r=H(this.startTouchesPositions,2),i=r[0],a=i.x,o=i.y,s=r[1],c=s.x,l=s.y;this.startTouchesAngle=Math.atan2(l-o,c-a),this.startTouchesDistance=Math.sqrt((c-a)**2+(l-o)**2)}this.syncStageFlags(),this.emit(`touchdown`,Ou(e,this.lastTouches,this.container)),this.lastTouches=n,this.lastTouchesPositions=this.startTouchesPositions,e.cancelable&&(this.doesCapture(e.touches.length)||this.renderer._hasNodeDrag())&&e.preventDefault()}}},{key:`handleLeave`,value:function(e){if(this.enabled&&this.startTouchesPositions.length){switch(e.cancelable&&this.doesCapture(this.touchMode)&&e.preventDefault(),this.movingTimeout&&(this.isMoving=!1,clearTimeout(this.movingTimeout)),this.touchMode){case 2:if(e.touches.length===1){this.handleStart(e);break}case 1:if(this.isMoving){var t=this.renderer.getCamera(),n=t.getState(),r=t.getPreviousState();t.animate({x:n.x+this.settings.inertiaRatio*(n.x-r.x),y:n.y+this.settings.inertiaRatio*(n.y-r.y)},{duration:this.settings.inertiaDuration,easing:`quadraticOut`})}this.hasMoved=!1,this.isMoving=!1,this.touchMode=0}if(this.syncStageFlags(),this.emit(`touchup`,Ou(e,this.lastTouches,this.container)),!e.touches.length){var i=Cu(this.lastTouches[0],this.container),a=this.startTouchesPositions[0],o=(i.x-a.x)**2+(i.y-a.y)**2;if(!e.touches.length&&o<this.settings.tapMoveTolerance**2){if(this.lastTap&&Date.now()-this.lastTap.time<this.settings.doubleClickTimeout){var s=Ou(e,this.lastTouches,this.container);if(this.emit(`doubletap`,s),this.lastTap=null,!s.sigmaDefaultPrevented&&this.settings.gestureTarget!==`page`){var c=this.renderer.getCamera(),l=c.getBoundedRatio(c.getState().ratio/this.settings.doubleClickZoomingRatio);c.animate(this.renderer.getViewportZoomedState(i,l),{easing:`quadraticInOut`,duration:this.settings.doubleClickZoomingDuration})}}else{var u=Ou(e,this.lastTouches,this.container);this.emit(`tap`,u),this.lastTap={time:Date.now(),position:u.touches[0]||u.previousTouches[0]}}}}this.lastTouches=Du(e.touches),this.startTouchesPositions=[]}}},{key:`handleMove`,value:function(e){var t=this;if(this.enabled&&this.startTouchesPositions.length){var n=this.doesCapture(e.touches.length);n&&e.preventDefault();var r=Du(e.touches),i=r.map(function(e){return Cu(e,t.container)}),a=this.lastTouches;this.lastTouches=r,this.lastTouchesPositions=i;var o=Ou(e,a,this.container);if(this.emit(`touchmove`,o),!o.sigmaDefaultPrevented&&(this.hasMoved||=i.some(function(e,n){var r=t.startTouchesPositions[n];return r&&(e.x!==r.x||e.y!==r.y)}),this.hasMoved)){if(!n)this.settings.gestureTarget===`shared`&&this.renderer._showGestureHint(`touch`);else{this.isMoving=!0,this.syncStageFlags(),this.movingTimeout&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(function(){t.isMoving=!1},this.settings.dragTimeout);var s=this.renderer.getCamera(),c=this.startCameraState,l=this.renderer.getSetting(`stagePadding`);switch(this.touchMode){case 1:var u=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0]),d=u.x,f=u.y,p=this.renderer.viewportToFramedGraph(i[0]),m=p.x,h=p.y;s.setState({x:c.x+d-m,y:c.y+f-h});break;case 2:var g={x:.5,y:.5,angle:0,ratio:1},_=i[0],v=_.x,y=_.y,b=i[1],x=b.x,S=b.y,C=Math.atan2(S-y,x-v)-this.startTouchesAngle,w=Math.hypot(S-y,x-v)/this.startTouchesDistance,T=s.getBoundedRatio(c.ratio/w);g.ratio=T,g.angle=c.angle+C;var E=this.getDimensions(),D=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0],{cameraState:c}),O=Math.min(E.width,E.height)-2*l,k=O/E.width,A=O/E.height,j=T/O,M=v-O/2/k,N=y-O/2/A,P=Xt({x:M,y:N},g.angle);M=P.x,N=P.y,g.x=D.x-M*j,g.y=D.y+N*j,s.setState(g)}}}}}},{key:`setSettings`,value:function(e){this.settings=e}}])}(fd),_d=function(){function e(t,n,r,i){K(this,e),W(this,`pendingNode`,null),W(this,`session`,null),this.graph=t,this.viewportToGraph=n,this.setNodesState=r,this.emit=i}return q(e,[{key:`start`,value:function(e,t,n,r,i){var a=n(e),o=!1;if(this.emit(`nodeDragStart`,{node:e,allDraggedNodes:a,event:t,preventSigmaDefault:function(){o=!0}}),o)return!1;var s=new Map,c=U(a),l;try{for(c.s();!(l=c.n()).done;){var u=l.value;s.set(u,{x:this.graph.getNodeAttribute(u,r),y:this.graph.getNodeAttribute(u,i)})}}catch(e){c.e(e)}finally{c.f()}return this.session={node:e,allNodes:a,startPosition:this.viewportToGraph(t),startNodePositions:s,xAttr:r,yAttr:i},this.setNodesState(a,{isDragged:!0}),!0}},{key:`applyMove`,value:function(e,t){var n=this.session,r=n.allNodes,i=n.startNodePositions,a=n.startPosition,o=n.xAttr,s=n.yAttr,c=this.viewportToGraph(e),l={x:c.x-a.x,y:c.y-a.y},u=U(r),d;try{for(u.s();!(d=u.n()).done;){var f=d.value,p=i.get(f);if(p&&this.graph.hasNode(f)){var m={x:p.x+l.x,y:p.y+l.y};t?this.graph.mergeNodeAttributes(f,t(m,f)):(this.graph.setNodeAttribute(f,o,m.x),this.graph.setNodeAttribute(f,s,m.y))}}}catch(e){u.e(e)}finally{u.f()}}},{key:`end`,value:function(){if(this.pendingNode=null,!this.session)return null;var e=this.session,t=e.node,n=e.allNodes;return this.setNodesState(n,{isDragged:!1}),this.session=null,{node:t,allNodes:n}}},{key:`removeNode`,value:function(e){e===this.pendingNode&&(this.pendingNode=null),this.session&&(this.session.node===e?(this.setNodesState(this.session.allNodes,{isDragged:!1}),this.session=null):this.session.allNodes.includes(e)&&(this.session.allNodes=this.session.allNodes.filter(function(t){return t!==e}),this.session.startNodePositions.delete(e)))}},{key:`clear`,value:function(){this.pendingNode=null,this.session=null}}])}(),vd=function(){function e(t,n){K(this,e),W(this,`groups`,new Map),W(this,`edgeToGroupKey`,new Map),this.graph=t,this.onGroupChanged=n}return q(e,[{key:`getGroupKey`,value:function(e){return ju(this.graph.source(e),this.graph.target(e))}},{key:`sortGroup`,value:function(e,t){var n=this,r=t.split(`\0`)[0];e.sort(function(e,t){return(n.graph.source(e)===r||!n.graph.isDirected(e)?0:1)-(n.graph.source(t)===r||!n.graph.isDirected(t)?0:1)})}},{key:`register`,value:function(e){var t=this.getGroupKey(e),n=this.groups.get(t);n||(n=[],this.groups.set(t,n)),n.includes(e)||n.push(e),this.edgeToGroupKey.set(e,t),n.length>1&&this.sortGroup(n,t),this.onGroupChanged(n,n.length)}},{key:`unregister`,value:function(e){var t=this.edgeToGroupKey.get(e);if(t){this.edgeToGroupKey.delete(e);var n=this.groups.get(t);if(n){var r=n.indexOf(e);r!==-1&&n.splice(r,1),n.length===0?this.groups.delete(t):this.onGroupChanged(n,n.length)}}}},{key:`getGroup`,value:function(e){var t=this.edgeToGroupKey.get(e);return t?this.groups.get(t)??[]:[]}},{key:`getSiblings`,value:function(e){return this.getGroup(e).filter(function(t){return t!==e})}},{key:`rebuild`,value:function(){var e=this;this.groups.clear(),this.edgeToGroupKey.clear(),this.graph.forEachEdge(function(t,n,r,i){var a=ju(r,i),o=e.groups.get(a);o||(o=[],e.groups.set(a,o)),o.push(t),e.edgeToGroupKey.set(t,a)});var t=U(this.groups),n;try{for(t.s();!(n=t.n()).done;){var r=H(n.value,2),i=r[0],a=r[1];a.length>1&&this.sortGroup(a,i),this.onGroupChanged(a,a.length)}}catch(e){t.e(e)}finally{t.f()}}},{key:`clear`,value:function(){this.groups.clear(),this.edgeToGroupKey.clear()}}])}(),yd={node:{parent:null,eventSuffix:`Node`,payloadKey:`node`,isEnabled:function(){return!0},writesPickingThisFrame:function(){return!0},setHover:function(e,t,n){return e.setNodeState(t,{isHovered:n})},getCursor:function(e,t){return e.nodeDataCache[t]?.cursor},isHitValid:function(e,t){return e.nodeDataCache[t]?.visibility!==`hidden`}},edge:{parent:null,eventSuffix:`Edge`,payloadKey:`edge`,isEnabled:function(e){return!!e.settings.enableEdgeEvents},writesPickingThisFrame:function(e){return!!e.settings.enableEdgeEvents},setHover:function(e,t,n){return e.setEdgeState(t,{isHovered:n})},getCursor:function(e,t){return e.edgeDataCache[t]?.cursor}},nodeLabel:{parent:`node`,eventSuffix:`NodeLabel`,payloadKey:`node`,isEnabled:function(e){return Pu(e.settings.nodeLabelEvents)},writesPickingThisFrame:function(e){return Nu(e.settings.nodeLabelEvents)},setHover:function(e,t,n){return e.setNodeState(t,{isLabelHovered:n})},getCursor:function(e,t){return e.nodeDataCache[t]?.labelCursor},resolveForVerb:function(e,t,n){var r=Mu(n.settings.nodeLabelEvents,t);return r===!1?null:r===`extend`?{kind:`node`,key:e.key}:e}},edgeLabel:{parent:`edge`,eventSuffix:`EdgeLabel`,payloadKey:`edge`,isEnabled:function(e){return Pu(e.settings.edgeLabelEvents)},writesPickingThisFrame:function(e){return Nu(e.settings.edgeLabelEvents)},setHover:function(e,t,n){return e.setEdgeState(t,{isLabelHovered:n})},getCursor:function(e,t){return e.edgeDataCache[t]?.labelCursor},resolveForVerb:function(e,t,n){var r=Mu(n.settings.edgeLabelEvents,t);return r===!1?null:r===`extend`?{kind:`edge`,key:e.key}:e}}},bd=[`node`,`edge`,`nodeLabel`,`edgeLabel`],xd={x:.5,y:.5,angle:0,ratio:1},Sd=8,Cd=.001,wd=typeof navigator<`u`&&/Mac|iP(hone|ad|od)/.test(navigator.platform),Td=1500,Ed=`.sigma-gesture-hint {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1em;
  background: #00000066;
  color: #ffffff;
  font-size: 1em;
  pointer-events: none;
  transition: opacity 0.1s;
}`,Dd=null,Od=function(){function e(t){K(this,e),W(this,`hideTimeout`,null),this.styleElement=Vn(`style`),this.styleElement.textContent=id(),t.appendChild(this.styleElement),this.element=Vn(`div`,{opacity:`0`},{class:`sigma-gesture-hint`}),t.appendChild(this.element)}return q(e,[{key:`show`,value:function(e,t){var n=this,r=e===`touch`?t.sharedGestureTouchMessage:wd?t.sharedGestureAppleWheelMessage:t.sharedGestureWheelMessage;r&&(this.element.textContent=r,this.element.style.opacity=`1`,typeof this.hideTimeout==`number`&&clearTimeout(this.hideTimeout),this.hideTimeout=window.setTimeout(function(){n.hideTimeout=null,n.element.style.opacity=`0`},Td))}},{key:`kill`,value:function(){typeof this.hideTimeout==`number`&&clearTimeout(this.hideTimeout),this.styleElement.remove(),this.element.remove()}}])}(),kd=function(){function e(t){K(this,e),W(this,`readBuffer`,null),W(this,`fence`,null),W(this,`result`,new Uint8Array(4)),W(this,`generation`,0),W(this,`readGeneration`,0),W(this,`lastEvent`,null),W(this,`active`,!1),W(this,`dirty`,!1),W(this,`rafId`,null),W(this,`killed`,!1),this.options=t}return q(e,[{key:`pointerMoved`,value:function(e){this.lastEvent=e,this.active=!0,this.options.isRenderPending()||this.request()}},{key:`pointerLeft`,value:function(){this.active=!1,this.dirty=!1}},{key:`frameRendered`,value:function(){this.request()}},{key:`invalidate`,value:function(){this.generation++}},{key:`request`,value:function(){!this.killed&&this.active&&this.lastEvent&&(this.fence?this.dirty=!0:this.startRead())}},{key:`startRead`,value:function(){var e=this.options,t=e.gl,n=e.getFrameBuffer,r=e.getPixelRatio,i=e.getDownSizingRatio;this.readGeneration=this.generation;var a=this.lastEvent,o=H(tn(t,a.x,a.y,r(),i()),2),s=o[0],c=o[1];this.readBuffer||=t.createBuffer(),t.bindFramebuffer(t.FRAMEBUFFER,n()),t.bindBuffer(t.PIXEL_PACK_BUFFER,this.readBuffer),t.bufferData(t.PIXEL_PACK_BUFFER,4,t.STREAM_READ),t.readPixels(s,c,1,1,t.RGBA,t.UNSIGNED_BYTE,0),t.bindBuffer(t.PIXEL_PACK_BUFFER,null),t.bindFramebuffer(t.FRAMEBUFFER,null),this.fence=t.fenceSync(t.SYNC_GPU_COMMANDS_COMPLETE,0),t.flush(),this.schedulePoll(a)}},{key:`schedulePoll`,value:function(e){var t=this;this.rafId=requestAnimationFrame(function(){t.rafId=null,t.poll(e)})}},{key:`poll`,value:function(e){var t=this.options,n=t.gl,r=t.onIndex;if(!this.killed&&this.fence){var i=n.clientWaitSync(this.fence,0,0);if(i===n.TIMEOUT_EXPIRED)this.schedulePoll(e);else{if(n.deleteSync(this.fence),this.fence=null,i!==n.WAIT_FAILED&&this.readGeneration===this.generation){n.bindBuffer(n.PIXEL_PACK_BUFFER,this.readBuffer),n.getBufferSubData(n.PIXEL_PACK_BUFFER,0,this.result),n.bindBuffer(n.PIXEL_PACK_BUFFER,null);var a=H(this.result,4),o=a[0],s=a[1],c=a[2],l=a[3];this.active&&r(ln(o,s,c,l),e)}this.dirty&&(this.dirty=!1,this.active&&this.lastEvent&&!this.options.isRenderPending()&&this.startRead())}}}},{key:`reset`,value:function(){this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=null,this.fence=null,this.readBuffer=null,this.dirty=!1}},{key:`kill`,value:function(){this.killed=!0,this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=null;var e=this.options.gl;this.fence&&e.deleteSync(this.fence),this.fence=null,this.readBuffer&&e.deleteBuffer(this.readBuffer),this.readBuffer=null}}])}(),Ad=function(){function e(t,n){K(this,e),this.key=t,this.size=n}return q(e,null,[{key:`compare`,value:function(e,t){return e.size>t.size?-1:e.size<t.size||e.key>t.key?1:-1}}])}(),jd=function(){function e(){K(this,e),W(this,`width`,0),W(this,`height`,0),W(this,`cellSize`,0),W(this,`columns`,0),W(this,`rows`,0),W(this,`cells`,{})}return q(e,[{key:`resizeAndClear`,value:function(e,t){this.width=e.width,this.height=e.height,this.cellSize=t,this.columns=Math.ceil(e.width/t),this.rows=Math.ceil(e.height/t),this.cells={}}},{key:`getIndex`,value:function(e){var t=Math.floor(e.x/this.cellSize);return Math.floor(e.y/this.cellSize)*this.columns+t}},{key:`add`,value:function(e,t,n){var r=new Ad(e,t),i=this.getIndex(n),a=this.cells[i];a||(a=[],this.cells[i]=a),a.push(r)}},{key:`organize`,value:function(){for(var e in this.cells)this.cells[e].sort(Ad.compare)}},{key:`getLabelsToDisplay`,value:function(e,t,n){var r=this.cellSize*this.cellSize,i=r/e/e*t/r,a=Math.ceil(i),o=[];if(n)for(var s=Math.max(0,Math.floor(n.x1/this.cellSize)),c=Math.min(this.columns-1,Math.floor(n.x2/this.cellSize)),l=Math.max(0,Math.floor(n.y1/this.cellSize)),u=Math.min(this.rows-1,Math.floor(n.y2/this.cellSize)),d=l;d<=u;d++)for(var f=s;f<=c;f++){var p=d*this.columns+f,m=this.cells[p];if(m)for(var h=0;h<Math.min(a,m.length);h++)o.push(m[h].key)}else for(var g in this.cells)for(var _=this.cells[g],v=0;v<Math.min(a,_.length);v++)o.push(_[v].key);return o}}])}(),Md=150,Nd=50,Pd={both:0,node:1,label:2},Fd={over:0,above:1,below:2,auto:3},Id=12,Ld=3,Rd=function(){function e(t){K(this,e),W(this,`labelGrid`,new jd),W(this,`edgeAnchorGrid`,new jd),W(this,`displayedNodeLabels`,new Set),W(this,`displayedEdgeLabels`,new Set),W(this,`edgeLabelCandidates`,[]),W(this,`renderedNodeLabels`,new Set),W(this,`labelSizeCache`,new Map),W(this,`framePassPoints`,new Float32Array),W(this,`labelsDirty`,!0),this.internals=t}return q(e,[{key:`resetFrame`,value:function(){this.displayedNodeLabels=new Set,this.renderedNodeLabels=new Set,this.labelSizeCache.clear()}},{key:`clearEdgeLabels`,value:function(){this.displayedEdgeLabels=new Set}},{key:`resetLabelGrid`,value:function(){this.labelGrid=new jd,this.edgeAnchorGrid=new jd}},{key:`processWebGLLabels`,value:function(e){for(var t,n=this.internals,r=n.labelProgram,i=n.primitives,a=n.nodeDataCache,o=(i==null||(t=i.nodes)==null||(t=t.label)==null||(t=t.font)==null?void 0:t.family)||`sans-serif`,s=new Map,c=0,l=e.length;c<l;c++){var u=a[e[c]];if(u.visibility!==`hidden`&&u.label){var d=u.labelFont||o,f=s.get(d);f?f.push(u.label):s.set(d,[u.label])}}var p=U(s),m;try{for(p.s();!(m=p.n()).done;){var h=H(m.value,2),g=h[0],_=h[1],v=Bn(g),y=v.family,b=v.weight,x=v.style,S=r.registerFont(y,b,x);r.ensureGlyphsReady(_,S)}}catch(e){p.e(e)}finally{p.f()}}},{key:`measureNodeLabel`,value:function(e){var t;if(!e.label)return{width:0,height:0,textHeight:0};var n=this.internals,r=n.labelProgram,i=n.primitives,a=e.labelSize??14,o=e.labelFont||(i==null||(t=i.nodes)==null||(t=t.label)==null||(t=t.font)==null?void 0:t.family)||`sans-serif`,s=`${e.label}|${a}|${o}`;if(this.labelSizeCache.has(s))return this.labelSizeCache.get(s);var c=Bn(o),l=c.family,u=c.weight,d=c.style,f=r.registerFont(l,u,d),p=r.measureLabel(e.label,a,f);return this.labelSizeCache.set(s,p),p}},{key:`nodeLabelBox`,value:function(e,t){var n;if(e.visibility===`hidden`||e.labelVisibility===`hidden`)return null;var r=this.measureNodeLabel(e),i=r.width,a=r.height,o=r.textHeight;if(!i)return null;var s=t+(((n=this.internals.primitives)==null||(n=n.nodes)==null||(n=n.label)==null?void 0:n.margin)??5),c=e.labelBackgroundColor?e.labelBackgroundPadding??3:0,l=i/2,u=a/2,d=l+c,f=u+c,p=o/2,m=0,h=0;switch(e.labelPosition??`right`){case`left`:m=-(s+l);break;case`above`:h=-(s+p);break;case`below`:h=s+p;break;case`over`:break;default:m=s+l}var g=e.labelAngle??0,_=Xt({x:m,y:h},g),v=_.x,y=_.y,b=Math.abs(Math.cos(g)),x=Math.abs(Math.sin(g)),S=b*d+x*f,C=x*d+b*f;return{minX:v-S,maxX:v+S,minY:y-C,maxY:y+C}}},{key:`computeDisplayedNodeLabels`,value:function(){var e=this.internals.getCameraState(),t=this.internals.getDimensions(),n=t.width,r=t.height,i=this.internals.viewportToFramedGraph({x:-Md,y:-Nd}),a=this.internals.viewportToFramedGraph({x:n+Md,y:-Nd}),o=this.internals.viewportToFramedGraph({x:-Md,y:r+Nd}),s=this.internals.viewportToFramedGraph({x:n+Md,y:r+Nd}),c=Math.min(i.x,a.x,o.x,s.x),l=Math.max(i.x,a.x,o.x,s.x),u=Math.min(i.y,a.y,o.y,s.y),d=Math.max(i.y,a.y,o.y,s.y),f=$t({x:.5,y:.5,ratio:1,angle:0},{width:n,height:r},this.internals.getGraphDimensions(),this.internals.getStagePadding()),p=function(e){var t=Zt(f,e);return{x:(1+t.x)*n/2,y:(1-t.y)*r/2}},m=p({x:c,y:u}),h=p({x:l,y:u}),g=p({x:c,y:d}),_=p({x:l,y:d}),v={x1:Math.min(m.x,h.x,g.x,_.x),y1:Math.min(m.y,h.y,g.y,_.y),x2:Math.max(m.x,h.x,g.x,_.x),y2:Math.max(m.y,h.y,g.y,_.y)},y=this.internals,b=y.settings,x=y.nodeDataCache,S=y.nodesWithForcedLabels,C=this.labelGrid.getLabelsToDisplay(e.ratio,b.labelDensity,v);ns(C,S);for(var w=0,T=C.length;w<T;w++){var E=C[w],D=x[E];if(!this.displayedNodeLabels.has(E)&&D.visibility!==`hidden`&&D.labelVisibility!==`hidden`&&D.label&&!(D.x<c||D.x>l||D.y<u||D.y>d)){var O=this.internals.framedGraphToViewport(D),k=O.x,A=O.y,j=this.internals.scaleSize(D.size);!Ko(D)&&j<b.labelRenderedSizeThreshold||k<-Md-j||k>n+Md+j||A<-Nd-j||A>r+Nd+j||this.displayedNodeLabels.add(E)}}}},{key:`buildFramePassPoints`,value:function(){var e=this.internals,t=e.nodeDataCache,n=e.nodeDataTexture;if(!n)return{data:this.framePassPoints,count:0};var r=this.displayedNodeLabels.size*3;this.framePassPoints.length<r&&(this.framePassPoints=new Float32Array(r));var i=this.framePassPoints,a=0,o=U(this.displayedNodeLabels),s;try{for(o.s();!(s=o.n()).done;){var c=s.value,l=t[c];if(l){var u=n.getIndex(c);u<0||(i[a*3]=u,i[a*3+1]=Ri[l.labelPosition||ou.labelPosition]??0,i[a*3+2]=l.labelAngle??0,a++)}}}catch(e){o.e(e)}finally{o.f()}return{data:i,count:a}}},{key:`renderWebGLLabels`,value:function(e,t){var n=this.internals,r=n.nodeDataCache,i=n.labelProgram,a=n.primitives,o=n.nodeDataTexture,s=[],c=U(this.displayedNodeLabels),l;try{for(c.s();!(l=c.n()).done;){var u=l.value;if(!this.renderedNodeLabels.has(u)){var d=r[u];t&&d.labelDepth!==t||(this.renderedNodeLabels.add(u),s.push(u))}}}catch(e){c.e(e)}finally{c.f()}if(s.length!==0){if(this.labelsDirty){for(var f,p,m=0,h=0,g=s.length;h<g;h++){var _=r[s[h]];m+=_.label.length}i.reallocate(m);for(var v=14,y=(a==null||(f=a.nodes)==null||(f=f.label)==null?void 0:f.margin)??5,b=ou.labelPosition,x=(a==null||(p=a.nodes)==null||(p=p.label)==null||(p=p.font)==null?void 0:p.family)||`sans-serif`,S=new Map,C=0,w=0,T=s.length;w<T;w++){var E=s[w],D=r[E],O=D.labelFont||x,k=S.get(O);if(k===void 0){var A=Bn(O),j=A.family,M=A.weight,N=A.style;k=i.registerFont(j,M,N),S.set(O,k)}var P={text:D.label,x:D.x,y:D.y,size:D.labelSize??v,color:D.labelColor,nodeSize:D.size,margin:y,position:D.labelPosition??b,hidden:!1,forceLabel:Ko(D),type:`default`,zIndex:D.zIndex??0,parentType:`node`,parentKey:E,fontKey:k,labelAngle:D.labelAngle??0,nodeIndex:o.getIndex(E)},F=i.processLabel(E,C,P);C+=F}i.invalidateBuffers()}i.render(e)}}},{key:`renderBackdrops`,value:function(e,t){var n=this.internals,r=n.backdropProgram,i=n.nodeDataCache,a=n.nodesWithBackdrop,o=n.attachmentManager,s=n.pixelRatio,c=n.nodeDataTexture,l=[],u=U(a),d;try{for(u.s();!(d=u.n()).done;){var f=d.value,p=i[f];if(p&&p.visibility!==`hidden`&&!(t&&p.depth!==t)){var m=c?.getIndex(f)??-1;m<0||l.push({key:f,nodeIndex:m})}}}catch(e){u.e(e)}finally{u.f()}if(l.length!==0){r.reallocate(l.length);for(var h=0;h<l.length;h++){var g=l[h],_=g.key,v=g.nodeIndex,y=i[_],b=this.displayedNodeLabels.has(_),x=b?this.measureNodeLabel(y):{width:0,height:0,textHeight:0},S=x.textHeight,C=x.width,w=x.height,T=0,E=0;if(b&&y.labelAttachment&&o){var D=o.getEntry(_,y.labelAttachment);if(D){var O=y.labelAttachmentPlacement||`below`;if(O===`below`||O===`above`){var k=D.height/s;w+=k+2,C=Math.max(C,D.width/s),E=O===`below`?(k+2)/2:-(k+2)/2}else{var A=D.width/s;C+=A+2,w=Math.max(w,D.height/s),T=O===`right`?(A+2)/2:-(A+2)/2}}}var j=y.backdropColor?sn(y.backdropColor):[255,255,255,255],M=y.backdropShadowColor?sn(y.backdropShadowColor):[0,0,0,128],N=j.map(function(e){return e/255}),P=M.map(function(e){return e/255}),F=y.backdropShadowBlur??12,ee=y.backdropPadding??6,te=(y.backdropBorderColor?sn(y.backdropBorderColor):[0,0,0,0]).map(function(e){return e/255}),ne=y.backdropBorderWidth??0,I=y.backdropCornerRadius??0,re=y.backdropLabelPadding??-1,ie=re<0?ee:re,ae=Pd[y.backdropArea??`both`]??0,oe={key:_,nodeIndex:v,label:y.label,labelWidth:C,labelHeight:w,textHeight:S,type:`default`,position:y.labelPosition||ou.labelPosition,labelAngle:y.labelAngle??0,backdropColor:N,backdropShadowColor:P,backdropShadowBlur:F,backdropPadding:ee,backdropBorderColor:te,backdropBorderWidth:ne,backdropCornerRadius:I,backdropLabelPadding:ie,backdropArea:ae,labelBoxOffset:[T,E]};r.processBackdrop(h,oe)}r.invalidateBuffers(),r.render(e)}}},{key:`renderLabelBackgrounds`,value:function(e,t){var n=this.internals,r=n.labelBackgroundProgram,i=n.nodeDataCache,a=n.nodeDataTexture,o=yd.nodeLabel.writesPickingThisFrame(this.internals),s=[],c=U(this.displayedNodeLabels),l;try{for(c.s();!(l=c.n()).done;){var u=l.value,d=i[u];d&&d.visibility!==`hidden`&&(t&&d.labelDepth!==t||(o||d.labelBackgroundColor)&&s.push(u))}}catch(e){c.e(e)}finally{c.f()}if(s.length!==0){r.reallocate(s.length);for(var f=0;f<s.length;f++){var p=s[f],m=i[p],h=a?.getIndex(p)??-1;if(!(h<0)){var g=this.measureNodeLabel(m),_=g.width,v=g.height,y=g.textHeight,b=Iu(this.internals.pickingState,`nodeLabel`,p)||Iu(this.internals.pickingState,`node`,p),x=m.labelBackgroundColor?on(m.labelBackgroundColor):on(`transparent`),S={nodeIndex:h,id:cn(b),color:x,labelWidth:_,labelHeight:v,textHeight:y,positionMode:Ri[m.labelPosition||ou.labelPosition]??0,labelAngle:m.labelAngle??0,padding:m.labelBackgroundPadding??3};r.processLabelBackground(f,S)}}r.invalidateBuffers(),r.render(e)}}},{key:`cacheAttachments`,value:function(e){var t=this.internals,n=t.attachmentManager,r=t.pixelRatio,i=t.nodeDataCache,a=t.nodesWithBackdrop,o=t.graph;if(n){var s=U(a),c;try{for(s.s();!(c=s.n()).done;){var l=c.value;if(this.displayedNodeLabels.has(l)){var u=i[l];if(u&&u.visibility!==`hidden`&&!(e&&u.depth!==e)&&u.labelAttachment){var d=o.getNodeAttributes(l),f=this.measureNodeLabel(u),p={node:l,attributes:d,pixelRatio:r,labelWidth:f.width,labelHeight:f.height};n.renderAttachment(l,u.labelAttachment,p)}}}}catch(e){s.e(e)}finally{s.f()}n.regenerateAtlas()}}},{key:`renderAttachments`,value:function(e,t){var n=this.internals,r=n.attachmentManager,i=n.attachmentProgram,a=n.nodeDataCache,o=n.nodesWithBackdrop,s=n.pixelRatio,c=n.nodeDataTexture;if(r&&i){var l=0;i.reallocateAttachments(o.size);var u=U(o),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;if(this.displayedNodeLabels.has(f)){var p=a[f];if(p&&p.visibility!==`hidden`&&!(t&&p.labelDepth!==t)&&p.labelAttachment){var m=r.getEntry(f,p.labelAttachment);if(m){var h=c?.getIndex(f)??-1;if(!(h<0)){var g=this.measureNodeLabel(p),_=g.width,v=g.height,y=g.textHeight,b=oa[p.labelAttachmentPlacement||`below`]??0;i.processAttachment(l,{nodeIndex:h,atlasX:m.x,atlasY:m.y,atlasW:m.width,atlasH:m.height,attachWidth:m.width/s,attachHeight:m.height/s,positionMode:Ri[p.labelPosition||ou.labelPosition]??0,attachmentPlacement:b,labelWidth:_,labelHeight:v,textHeight:y,labelAngle:p.labelAngle??0}),l++}}}}}}catch(e){u.e(e)}finally{u.f()}l!==0&&(i.reallocateAttachments(l),r.bindTexture(7),i.invalidateBuffers(),i.render(e))}}},{key:`computeDisplayedEdgeLabels`,value:function(){var e=this.internals,t=e.graph,n=e.stateManager,r=e.settings,i=e.edgesWithForcedLabels,a=n.getHighlightedNodes(),o=r.edgeLabelAnchors===`allNodes`?new Set(this.edgeAnchorGrid.getLabelsToDisplay(this.internals.getCameraState().ratio,r.labelDensity)):this.displayedNodeLabels,s=n.hovered,c=ad({graph:t,hoveredNode:s?.kind===`node`?s.key:null,displayedNodeLabels:o,highlightedNodes:a});ns(c,i),this.edgeLabelCandidates=c,this.displayedEdgeLabels=new Set}},{key:`filterEdgeLabelsForDepth`,value:function(e){for(var t=this.internals,n=t.graph,r=t.nodeDataCache,i=t.edgeDataCache,a=[],o=new Set,s=0,c=this.edgeLabelCandidates.length;s<c;s++){var l=this.edgeLabelCandidates[s];if(!o.has(l)){o.add(l);var u=n.extremities(l),d=r[u[0]],f=r[u[1]],p=i[l];p&&d&&f&&p.visibility!==`hidden`&&p.labelVisibility!==`hidden`&&d.visibility!==`hidden`&&f.visibility!==`hidden`&&(e&&p.labelDepth!==e||p.label&&a.push(l))}}return a}},{key:`renderEdgeLabels`,value:function(e,t){var n=this.internals,r=n.graph,i=n.nodeDataCache,a=n.edgeDataCache,o=n.primitives,s=n.edgeLabelProgram,c=n.nodeDataTexture,l=n.edgeDataTexture;if(s){var u=this.filterEdgeLabelsForDepth(t),d=U(u),f;try{for(d.s();!(f=d.n()).done;){var p=f.value;this.displayedEdgeLabels.add(p)}}catch(e){d.e(e)}finally{d.f()}if(u.length!==0){if(this.labelsDirty){var m,h=0,g=U(u),_;try{for(g.s();!(_=g.n()).done;){var v=_.value;h+=a[v].label.length}}catch(e){g.e(e)}finally{g.f()}s.reallocate(h);var y=(o==null||(m=o.edges)==null||(m=m.label)==null?void 0:m.margin)??5,b=`over`,x=0,S=U(u),C;try{for(S.s();!(C=S.n()).done;){var w=C.value,T=r.extremities(w),E=T[0],D=T[1],O=i[E],k=i[D],A=a[w],j=c.getIndex(E),M=c.getIndex(D),N=l.getIndex(w),P={text:A.label,x:(O.x+k.x)/2,y:(O.y+k.y)/2,size:Id,color:A.labelColor,nodeSize:0,nodeIndex:-1,margin:y,position:A.labelPosition??b,hidden:!1,forceLabel:Ko(A),type:`default`,zIndex:A.zIndex??0,parentType:`edge`,parentKey:w,fontKey:``,labelAngle:0,sourceX:O.x,sourceY:O.y,targetX:k.x,targetY:k.y,sourceSize:O.size,targetSize:k.size,sourceShape:O.shape||`circle`,targetShape:k.shape||`circle`,edgeSize:A.size,offset:0,edgeAttributes:A,sourceNodeIndex:j,targetNodeIndex:M,edgeIndex:N},F=s.processEdgeLabel(w,x,P);x+=F}}catch(e){S.e(e)}finally{S.f()}s.invalidateBuffers()}s.render(e)}}}},{key:`renderEdgeLabelBackgrounds`,value:function(e,t){var n,r=this.internals,i=r.edgeLabelBackgroundProgram,a=r.edgeLabelProgram,o=r.edgeDataCache,s=r.primitives,c=r.edgeDataTexture;if(c&&a&&i){var l=yd.edgeLabel.writesPickingThisFrame(this.internals),u=(s==null||(n=s.edges)==null||(n=n.label)==null?void 0:n.margin)??5,d=`over`,f=this.filterEdgeLabelsForDepth(t),p=[],m=U(f),h;try{for(m.s();!(h=m.n()).done;){var g=h.value;(l||o[g].labelBackgroundColor)&&p.push(g)}}catch(e){m.e(e)}finally{m.f()}if(p.length!==0){i.reallocate(p.length);for(var _=0;_<p.length;_++){var v=p[_],y=o[v],b=y.label,x=a.measureLabelAtlasWidth(b),S=y.labelPosition??d,C=typeof S==`string`?Fd[S]??0:0,w=Iu(this.internals.pickingState,`edgeLabel`,v)||Iu(this.internals.pickingState,`edge`,v),T=y.labelBackgroundColor?on(y.labelBackgroundColor):on(`transparent`),E={edgeIndex:c.getIndex(v),baseFontSize:Id,totalTextWidth:x,positionMode:C,margin:u,padding:y.labelBackgroundPadding??Ld,color:T,id:cn(w),edgeAttributes:y};i.processEdgeLabelBackground(_,v,E)}i.invalidateBuffers(),i.render(e)}}}}])}(),zd=function(){function e(t,n,r,i){K(this,e),W(this,`nodeStates`,new Map),W(this,`edgeStates`,new Map),W(this,`hovered`,null),W(this,`dirtyNodes`,new Set),W(this,`dirtyEdges`,new Set),W(this,`graphStateChanged`,!1),W(this,`graphStateFlagsDirty`,!1),this.scheduleRefresh=t,this.customNodeStateDefaults=n,this.customEdgeStateDefaults=r,this.customGraphStateDefaults=i,this.graphState=Nl(i)}return q(e,[{key:`getNodeState`,value:function(e){e=``+e;var t=this.nodeStates.get(e);return t||(t=jl(this.customNodeStateDefaults),this.nodeStates.set(e,t)),t}},{key:`getEdgeState`,value:function(e){e=``+e;var t=this.edgeStates.get(e);return t||(t=Ml(this.customEdgeStateDefaults),this.edgeStates.set(e,t)),t}},{key:`getGraphState`,value:function(){return this.flushGraphStateFlags(),this.graphState}},{key:`getHighlightedNodes`,value:function(){var e=new Set,t=U(this.nodeStates),n;try{for(t.s();!(n=t.n()).done;){var r=H(n.value,2),i=r[0];r[1].isHighlighted&&e.add(i)}}catch(e){t.e(e)}finally{t.f()}return e}},{key:`setNodeState`,value:function(e,t){e=``+e;var n=this.getNodeState(e);if(is(n,t)){var r=G(G({},n),t);this.nodeStates.set(e,r),this.dirtyNodes.add(e),this.updateHoveredNodeTracking(e,n,r),this.graphStateFlagsDirty=!0,this.scheduleRefresh()}}},{key:`setEdgeState`,value:function(e,t){e=``+e;var n=this.getEdgeState(e);if(is(n,t)){var r=G(G({},n),t);this.edgeStates.set(e,r),this.dirtyEdges.add(e),this.updateHoveredEdgeTracking(e,n,r),this.graphStateFlagsDirty=!0,this.scheduleRefresh()}}},{key:`setGraphState`,value:function(e){if(is(this.graphState,e)){var t=G(G({},this.graphState),e);t.isIdle=!t.isPanning&&!t.isZooming&&!t.isDragging,this.graphState=t,this.graphStateChanged=!0,this.scheduleRefresh()}}},{key:`setNodesState`,value:function(e,t){var n=!1,r=U(e),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;a=``+a;var o=this.getNodeState(a);if(is(o,t)){var s=G(G({},o),t);this.nodeStates.set(a,s),this.dirtyNodes.add(a),this.updateHoveredNodeTracking(a,o,s),n=!0}}}catch(e){r.e(e)}finally{r.f()}n&&(this.graphStateFlagsDirty=!0,this.scheduleRefresh())}},{key:`setEdgesState`,value:function(e,t){var n=!1,r=U(e),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;a=``+a;var o=this.getEdgeState(a);if(is(o,t)){var s=G(G({},o),t);this.edgeStates.set(a,s),this.dirtyEdges.add(a),this.updateHoveredEdgeTracking(a,o,s),n=!0}}}catch(e){r.e(e)}finally{r.f()}n&&(this.graphStateFlagsDirty=!0,this.scheduleRefresh())}},{key:`removeNode`,value:function(e){this.nodeStates.delete(e),this.dirtyNodes.delete(e),this.clearHoveredFor(`node`,e)}},{key:`removeEdge`,value:function(e){this.edgeStates.delete(e),this.dirtyEdges.delete(e),this.clearHoveredFor(`edge`,e)}},{key:`pruneNodes`,value:function(e){var t=U(this.nodeStates.keys()),n;try{for(t.s();!(n=t.n()).done;){var r=n.value;e(r)||this.removeNode(r)}}catch(e){t.e(e)}finally{t.f()}}},{key:`pruneEdges`,value:function(e){var t=U(this.edgeStates.keys()),n;try{for(t.s();!(n=t.n()).done;){var r=n.value;e(r)||this.removeEdge(r)}}catch(e){t.e(e)}finally{t.f()}}},{key:`clearNodes`,value:function(){this.nodeStates.clear(),this.dirtyNodes.clear(),this.clearHoveredForKinds(qu(`node`))}},{key:`clearEdges`,value:function(){this.edgeStates.clear(),this.dirtyEdges.clear(),this.clearHoveredForKinds(qu(`edge`))}},{key:`resetGraphState`,value:function(){this.graphState=Nl(this.customGraphStateDefaults),this.graphStateChanged=!1,this.graphStateFlagsDirty=!1}},{key:`clearDirtyTracking`,value:function(){this.dirtyNodes.clear(),this.dirtyEdges.clear(),this.graphStateChanged=!1}},{key:`setHovered`,value:function(e){this.hovered=e}},{key:`clearHoveredFor`,value:function(e,t){this.hovered&&this.hovered.key===t&&qu(e).includes(this.hovered.kind)&&(this.hovered=null)}},{key:`clearHoveredForKinds`,value:function(e){this.hovered&&e.includes(this.hovered.kind)&&(this.hovered=null)}},{key:`updateGraphStateFromNodes`,value:function(){var e=!1,t=!1,n=!1,r=U(this.nodeStates),i;try{for(r.s();!(i=r.n()).done;){var a=H(i.value,2)[1];if(a.isHovered&&(e=!0),a.isHighlighted&&(t=!0),a.isDragged&&(n=!0),e&&t&&n)break}}catch(e){r.e(e)}finally{r.f()}!e&&this.hovered?.kind===`edge`&&(e=!0);var o=!this.graphState.isPanning&&!this.graphState.isZooming&&!n;(this.graphState.hasHovered!==e||this.graphState.hasHighlighted!==t||this.graphState.isDragging!==n||this.graphState.isIdle!==o)&&(this.graphStateChanged=!0),this.graphState=G(G({},this.graphState),{},{hasHovered:e,hasHighlighted:t,isDragging:n,isIdle:o})}},{key:`updateGraphStateFromEdges`,value:function(){var e=this.hovered?.kind===`node`;if(!e){var t=U(this.edgeStates),n;try{for(t.s();!(n=t.n()).done;)if(H(n.value,2)[1].isHovered){e=!0;break}}catch(e){t.e(e)}finally{t.f()}}this.graphState.hasHovered!==e&&(this.graphStateChanged=!0),this.graphState=G(G({},this.graphState),{},{hasHovered:e})}},{key:`flushGraphStateFlags`,value:function(){this.graphStateFlagsDirty&&=(this.updateGraphStateFromNodes(),this.updateGraphStateFromEdges(),!1)}},{key:`updateHoveredNodeTracking`,value:function(e,t,n){if(t.isHovered!==n.isHovered){if(n.isHovered){if(this.hovered?.kind===`node`&&this.hovered.key!==e){var r=this.hovered.key,i=this.getNodeState(r);this.nodeStates.set(r,G(G({},i),{},{isHovered:!1})),this.dirtyNodes.add(r)}this.hovered={kind:`node`,key:e}}else this.hovered?.kind===`node`&&this.hovered.key===e&&(this.hovered=null)}}},{key:`updateHoveredEdgeTracking`,value:function(e,t,n){if(t.isHovered!==n.isHovered){if(n.isHovered){if(this.hovered?.kind===`edge`&&this.hovered.key!==e){var r=this.hovered.key,i=this.getEdgeState(r);this.edgeStates.set(r,G(G({},i),{},{isHovered:!1})),this.dirtyEdges.add(r)}this.hovered={kind:`edge`,key:e}}else this.hovered?.kind===`edge`&&this.hovered.key===e&&(this.hovered=null)}}}])}(),Bd=1,Vd=2,Hd=3,Ud=4,Wd=function(e){function t(e,n){var r,i,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};K(this,t),i=J(this,t),W(i,`nodeReducer`,null),W(i,`edgeReducer`,null),W(i,`stageCanvas`,null),W(i,`mouseLayer`,null),W(i,`gestureHint`,null),W(i,`extraElements`,{}),W(i,`webGLContext`,null),W(i,`pickingFrameBuffer`,null),W(i,`pickingTexture`,null),W(i,`pickingDepthBuffer`,null),W(i,`activeListeners`,{}),W(i,`nodeVariableEntries`,[]),W(i,`edgeVariableEntries`,[]),W(i,`edgePathsByName`,new Map),W(i,`nodeProgramIndex`,{}),W(i,`edgeProgramIndex`,{}),W(i,`edgeTextureIndexCache`,{}),W(i,`nodeGraphCoords`,{}),W(i,`nodeExtent`,{x:[0,1],y:[0,1]}),W(i,`matrix`,Gt()),W(i,`invMatrix`,Gt()),W(i,`correctionRatio`,1),W(i,`frameId`,0),W(i,`customBBox`,null),W(i,`gpuTimerExt`,void 0),W(i,`activeGpuTimerQuery`,null),W(i,`pendingGpuTimerQueries`,[]),W(i,`normalizationFunction`,Qo({x:[0,1],y:[0,1]})),W(i,`graphToViewportRatio`,1),W(i,`pickingState`,Fu()),W(i,`prevNodeVisibilities`,{}),W(i,`width`,0),W(i,`height`,0),W(i,`autoRescaleFrozen`,!1),W(i,`stylesDeclaration`,null),W(i,`resolvedStageStyle`,{}),W(i,`renderFrame`,null),W(i,`contextLost`,!1),W(i,`pendingProcess`,`full`),W(i,`needToRefreshState`,!1),W(i,`checkEdgesEventsFrame`,null),W(i,`edgeStyleAnalysis`,{dependency:`static`,xAttribute:null,yAttribute:null}),W(i,`depthLayers`,X(ps)),W(i,`customLayerPrograms`,new Map),W(i,`nodeShapeSlug`,null),W(i,`sdfAtlas`,null),W(i,`depthRanges`,{nodes:{},edges:{}}),W(i,`nodeBaseDepth`,{}),W(i,`edgeBaseDepth`,{});var o=a.primitives,s=a.styles,c=a.settings,l=c===void 0?{}:c,u=a.nodeReducer,d=a.edgeReducer,f=a.customNodeState,p=a.customEdgeState,m=a.customGraphState;i.stateManager=new zd(function(){return i.scheduleStateRefresh()},f,p,m);var h=o??hu;i.stylesDeclaration=s?{nodes:s.nodes??au.nodes,edges:s.edges??au.edges,stage:s.stage}:au,i.nodeReducer=u??null,i.edgeReducer=d??null;var g=Gl(i.stylesDeclaration.nodes);i.nodeReducer&&(g.dependency=`graph-state`),i.edgeStyleAnalysis=Gl(i.stylesDeclaration.edges),i.edgeReducer&&(i.edgeStyleAnalysis.dependency=`graph-state`),i.stylesDeclaration.stage&&(i.resolvedStageStyle=Zl(i.stylesDeclaration.stage,i.stateManager.graphState));var _=vu(l);if(_u(_),_.enableNodeDrag){var v=g.xAttribute,y=g.yAttribute;if((!v||!y)&&!_.dragPositionToAttributes)throw Error('Sigma: `enableNodeDrag` is true but position attribute names could not be inferred from styles. Either use attribute bindings for x/y in your node styles (e.g. `x: { attribute: "x" }`), or provide a `dragPositionToAttributes` setting.')}if(Zo(e),!(n instanceof HTMLElement))throw Error(`Sigma: container should be an html element.`);i.container=n,i.edgeGroups=new vd(e,function(e,t){for(var n=0;n<e.length;n++){var r=i.stateManager.getEdgeState(e[n]);r.parallelIndex=n,r.parallelCount=t}});var b=new _d(e,i.viewportToGraph.bind(i),i.setNodesState.bind(i),function(e,t){return i.emit(e,t)});if(i.depthLayers=h.depthLayers??X(ps),!(s!=null&&s.nodes)&&!ds.every(function(e){return i.depthLayers.includes(e)}))throw Error(`Sigma: depthLayers must include ${ds.join(`, `)} for the built-in node styles.`);if(!(s!=null&&s.edges)&&!fs.every(function(e){return i.depthLayers.includes(e)}))throw Error(`Sigma: depthLayers must include ${fs.join(`, `)} for the built-in edge styles.`);i.itemBuckets={nodes:new co(i.depthLayers),edges:new co(i.depthLayers)},i.initWebGLContext(),i.mouseLayer=Vn(`div`,{position:`absolute`,touchAction:`none`,userSelect:`none`},{class:`sigma-mouse`}),i.container.appendChild(i.mouseLayer),i.resolvedStageStyle.background&&(i.container.style.backgroundColor=i.resolvedStageStyle.background),i.resolvedStageStyle.cursor&&(i.container.style.cursor=i.resolvedStageStyle.cursor);var x=new lo(i.webGLContext),S=new mo(i.webGLContext,{channels:1}),C=new ho(i.webGLContext),w=new mo(i.webGLContext,{channels:4}),T=i.webGLContext,E=new kd({gl:T,getFrameBuffer:function(){return i.pickingFrameBuffer},getPixelRatio:function(){return i.internals.pixelRatio},getDownSizingRatio:function(){return i.internals.settings.pickingDownSizingRatio},isRenderPending:function(){return i.renderFrame!==null},onIndex:function(e,t){return Zu(i.internals,i.pickingState.lookup[e]??null,t)}}),D=i.initPrograms(h,_),O=h==null||(r=h.nodes)==null?void 0:r.labelAttachments,k=null;return O&&Object.keys(O).length>0&&(k=new so(T,O,function(){return i.scheduleRender()})),i.internals=G(G({nodeDataCache:{},edgeDataCache:{},nodesWithForcedLabels:new Set,nodesWithBackdrop:new Set,edgesWithForcedLabels:new Set,settings:_,primitives:h,pixelRatio:Hn(),graph:e,stateManager:i.stateManager,dragManager:b,hoverResolver:E,nodeStyleAnalysis:g,pickingState:i.pickingState},D),{},{attachmentManager:k,nodeDataTexture:x,nodeFrameTexture:S,edgeDataTexture:C,edgeFrameTexture:w,getDimensions:function(){return i.getDimensions()},getGraphDimensions:function(){return i.getGraphDimensions()},getStagePadding:function(){return i.getStagePadding()},getCameraState:function(){return i.camera.getState()},getHitAtPosition:function(e){return i.getHitAtPosition(e)},setNodeState:function(e,t){return i.setNodeState(e,t)},setEdgeState:function(e,t){return i.setEdgeState(e,t)},updateContainerCursor:function(){return i.updateContainerCursor()},scheduleRefresh:function(){return i.scheduleRefresh()},viewportToFramedGraph:function(e){return i.viewportToFramedGraph(e)},viewportToGraph:function(e){return i.viewportToGraph(e)},framedGraphToViewport:function(e){return i.framedGraphToViewport(e)},scaleSize:function(e){return i.scaleSize(e)},emit:function(e,t){return i.emit(e,t)}}),i.labelRenderer=new Rd(i.internals),i.resize(),i.initializeWebGLLabels(),i.camera=new ud,i.bindCameraHandlers(),i.mouseCaptor=new md(i.mouseLayer,i),i.mouseCaptor.setSettings(i.internals.settings),i.touchCaptor=new gd(i.mouseLayer,i),i.touchCaptor.setSettings(i.internals.settings),i.bindEventHandlers(),i.bindGraphHandlers(),i.handleSettingsUpdate(),i.refresh(),i}return Y(t,e),q(t,[{key:`initializeWebGLLabels`,value:function(){this.sdfAtlas=new ma,this.sdfAtlas.registerFont({family:`sans-serif`,weight:`normal`,style:`normal`})}},{key:`resetWebGLTexture`,value:function(){var e=this.webGLContext;if(!this.pickingFrameBuffer)return this;var t=Math.ceil(this.width*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio),n=Math.ceil(this.height*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio);e.bindFramebuffer(e.FRAMEBUFFER,this.pickingFrameBuffer),this.pickingTexture&&e.deleteTexture(this.pickingTexture);var r=e.createTexture();r&&(e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t,n,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),this.pickingTexture=r),this.pickingDepthBuffer&&e.deleteRenderbuffer(this.pickingDepthBuffer);var i=e.createRenderbuffer();return i&&(e.bindRenderbuffer(e.RENDERBUFFER,i),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,t,n),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,i),this.pickingDepthBuffer=i),e.bindFramebuffer(e.FRAMEBUFFER,null),this}},{key:`bindCameraHandlers`,value:function(){var e=this;return this.activeListeners.camera=function(){e.refreshMatrices(),e.labelRenderer.labelsDirty=!0,e.scheduleRender()},this.activeListeners.cameraAnimationStart=function(t){var n=t.from,r=t.to;n.ratio!==r.ratio&&e.stateManager.setGraphState({isZooming:!0})},this.activeListeners.cameraAnimationEnd=function(){e.stateManager.setGraphState({isZooming:!1})},this.camera.on(`updated`,this.activeListeners.camera),this.camera.on(`animationStart`,this.activeListeners.cameraAnimationStart),this.camera.on(`animationEnd`,this.activeListeners.cameraAnimationEnd),this}},{key:`unbindCameraHandlers`,value:function(){return this.camera.removeListener(`updated`,this.activeListeners.camera),this.camera.removeListener(`animationStart`,this.activeListeners.cameraAnimationStart),this.camera.removeListener(`animationEnd`,this.activeListeners.cameraAnimationEnd),this}},{key:`getHitAtPosition`,value:function(e){if(this.contextLost)return null;var t=this.webGLContext;t.bindFramebuffer(t.FRAMEBUFFER,this.pickingFrameBuffer);var n=un(t,this.pickingFrameBuffer,e.x,e.y,this.internals.pixelRatio,this.internals.settings.pickingDownSizingRatio),r=ln.apply(void 0,X(n));return this.pickingState.lookup[r]??null}},{key:`bindEventHandlers`,value:function(){return Qu(this.internals,this.mouseCaptor,this.touchCaptor,this.activeListeners),this}},{key:`bindGraphHandlers`,value:function(){return $u({graph:this.internals.graph,edgeGroups:this.edgeGroups,addNode:this.addNode.bind(this),updateNode:this.updateNode.bind(this),removeNode:this.removeNode.bind(this),addEdge:this.addEdge.bind(this),updateEdge:this.updateEdge.bind(this),removeEdge:this.removeEdge.bind(this),clearEdgeState:this.clearEdgeState.bind(this),clearNodeState:this.clearNodeState.bind(this),clearEdgeIndices:this.clearEdgeIndices.bind(this),clearNodeIndices:this.clearNodeIndices.bind(this),refresh:this.refresh.bind(this)},this.activeListeners),this}},{key:`unbindGraphHandlers`,value:function(){ed(this.internals.graph,this.activeListeners)}},{key:`getNodeShapeId`,value:function(e){return this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&e.shape&&e.shape in this.internals.nodeShapeMap?this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[e.shape]]:rr(e.shape||`circle`)}},{key:`processNodes`,value:function(){var e=this,t=this.internals.graph,n=this.internals.settings,r=this.getDimensions(),i=n.autoRescale,a=n.autoRescaleContent,o=this.nodeExtent;if(i===!1){var s=r.width,c=r.height;o={x:[-s/2,s/2],y:[-c/2,c/2]}}else i===`once`&&this.autoRescaleFrozen||(o=this.computeNodeExtent(),a!==`positions`&&!this.customBBox&&(o=td({extent:o,coords:this.nodeGraphCoords,nodeData:this.internals.nodeDataCache,dimensions:r,stagePadding:this.getStagePadding(),zoomToSizeRatioFunction:n.zoomToSizeRatioFunction,itemSizesReference:n.itemSizesReference,fitLabels:a===`labels`,nodeLabelBox:function(t,n){return e.labelRenderer.nodeLabelBox(t,n)}})),i===`once`&&(this.autoRescaleFrozen=!0));this.nodeExtent=o,this.normalizationFunction=Qo(this.customBBox||this.nodeExtent);var l=$t(new ud().getState(),r,this.getGraphDimensions(),this.getStagePadding());this.labelRenderer.labelGrid.resizeAndClear(r,n.labelGridCellSize),this.labelRenderer.edgeAnchorGrid.resizeAndClear(r,n.labelGridCellSize);var u=n.renderEdgeLabels&&n.edgeLabelAnchors===`allNodes`,d=!1;Lu(this.pickingState,`node`);for(var f=t.nodes(),p=0,m=f.length;p<m;p++){var h=f[p],g=this.internals.nodeDataCache[h],_=this.nodeGraphCoords[h];g.x=_.x,g.y=_.y,this.normalizationFunction.applyTo(g),g.visibility!==this.prevNodeVisibilities[h]&&(d=!0),typeof g.label==`string`&&g.visibility!==`hidden`&&g.labelVisibility!==`hidden`&&this.labelRenderer.labelGrid.add(h,g.size,this.framedGraphToViewport(g,{matrix:l})),u&&g.visibility!==`hidden`&&this.labelRenderer.edgeAnchorGrid.add(h,g.size,this.framedGraphToViewport(g,{matrix:l}))}this.labelRenderer.labelGrid.organize(),this.labelRenderer.edgeAnchorGrid.organize(),this.nodeProgram.reallocate(f.length);var v=0;this.depthRanges.nodes={},this.nodeBaseDepth={};var y=this.internals.nodeDataCache,b=U(this.depthLayers),x;try{for(b.s();!(x=b.n()).done;){var S=x.value,C=this.itemBuckets.nodes.getSorted(S,function(e){return y[e].zIndex});if(C.length!==0){this.depthRanges.nodes[S]=[{offset:v,count:C.length}];var w=U(C),T;try{for(w.s();!(T=w.n()).done;){var E=T.value;this.nodeBaseDepth[E]=S,this.nodeProgram.allocateNode(E),Ru(this.pickingState,`node`,E),this.addNodeToProgram(E,v++)}}catch(e){w.e(e)}finally{w.f()}}}}catch(e){b.e(e)}finally{b.f()}this.nodeProgram.invalidateBuffers();for(var D=0,O=f.length;D<O;D++)this.prevNodeVisibilities[f[D]]=this.internals.nodeDataCache[f[D]].visibility;this.labelRenderer.processWebGLLabels(f);var k=U(this.customLayerPrograms.values()),A;try{for(k.s();!(A=k.n()).done;){var j=A.value.program;j.cacheData&&j.cacheData()}}catch(e){k.e(e)}finally{k.f()}return d}},{key:`processEdges`,value:function(){var e=this.internals.graph.edges();this.edgeProgram.reallocate(e.length);var t=0;Lu(this.pickingState,`edge`),this.depthRanges.edges={},this.edgeBaseDepth={};var n=this.internals.edgeDataCache,r=U(this.depthLayers),i;try{for(r.s();!(i=r.n()).done;){var a=i.value,o=this.itemBuckets.edges.getSorted(a,function(e){return n[e].zIndex});if(o.length!==0){this.depthRanges.edges[a]=[{offset:t,count:o.length}];var s=U(o),c;try{for(s.s();!(c=s.n()).done;){var l=c.value;this.edgeBaseDepth[l]=a,Ru(this.pickingState,`edge`,l),this.addEdgeToProgram(l,t++)}}catch(e){s.e(e)}finally{s.f()}}}}catch(e){r.e(e)}finally{r.f()}this.edgeProgram.invalidateBuffers()}},{key:`updateNodeDepthRanges`,value:function(e,t,n){var r=this.nodeProgramIndex[e];r!==void 0&&(Yo(this.depthRanges.nodes,t,r),Xo(this.depthRanges.nodes,n,r))}},{key:`updateEdgeDepthRanges`,value:function(e,t,n){var r=this.edgeProgramIndex[e];r!==void 0&&(Yo(this.depthRanges.edges,t,r),Xo(this.depthRanges.edges,n,r))}},{key:`handleSettingsUpdate`,value:function(){var e=this,t=this.internals.settings;return this.camera.minRatio=t.minCameraRatio,this.camera.maxRatio=t.maxCameraRatio,this.camera.enabledZooming=t.enableCameraZooming,this.camera.enabledPanning=t.enableCameraPanning,this.camera.enabledRotation=t.enableCameraRotation,t.cameraPanBoundaries?this.camera.constrainState=function(n){return e.cleanCameraState(n,t.cameraPanBoundaries&&Z(t.cameraPanBoundaries)===`object`?t.cameraPanBoundaries:{})}:this.camera.constrainState=null,this.camera.setState(this.camera.getState()),this.mouseLayer.style.touchAction=t.gestureTarget===`graph`?`none`:t.gestureTarget===`shared`?`pan-x pan-y`:`auto`,t.gestureTarget!==`shared`&&this.gestureHint&&(this.gestureHint.kill(),this.gestureHint=null),this.mouseCaptor.setSettings(this.internals.settings),this.touchCaptor.setSettings(this.internals.settings),this}},{key:`cleanCameraState`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.tolerance,r=n===void 0?0:n,i=t.boundaries,a=G({},e),o=i||this.nodeExtent,s=H(o.x,2),c=s[0],l=s[1],u=H(o.y,2),d=u[0],f=u[1],p=[this.graphToViewport({x:c,y:d},{cameraState:e}),this.graphToViewport({x:l,y:d},{cameraState:e}),this.graphToViewport({x:c,y:f},{cameraState:e}),this.graphToViewport({x:l,y:f},{cameraState:e})],m=1/0,h=-1/0,g=1/0,_=-1/0;p.forEach(function(e){var t=e.x,n=e.y;m=Math.min(m,t),h=Math.max(h,t),g=Math.min(g,n),_=Math.max(_,n)});var v=h-m,y=_-g,b=this.getDimensions(),x=b.width,S=b.height,C=0,w=0;if(v>=x?h<x-r?C=h-(x-r):m>r&&(C=m-r):h>x+r?C=h-(x+r):m<-r&&(C=m+r),y>=S?_<S-r?w=_-(S-r):g>r&&(w=g-r):_>S+r?w=_-(S+r):g<-r&&(w=g+r),C||w){var T=this.viewportToFramedGraph({x:0,y:0},{cameraState:e}),E=this.viewportToFramedGraph({x:C,y:w},{cameraState:e});C=E.x-T.x,w=E.y-T.y,a.x+=C,a.y+=w}return a}},{key:`refreshMatrices`,value:function(){var e=this.camera.getState(),t=this.getDimensions(),n=this.getGraphDimensions(),r=this.getStagePadding();this.matrix=$t(e,t,n,r),this.invMatrix=$t(e,t,n,r,!0),this.correctionRatio=en(this.matrix,e,t),this.graphToViewportRatio=this.getGraphToViewportRatio()}},{key:`processData`,value:function(){var e;this.emit(`beforeProcess`),(e=this.internals.attachmentManager)==null||e.clear();var t=G({},this.pickingState.idsByKind),n=this.processNodes();(this.pendingProcess===`full`||n)&&this.processEdges(),zu(this.pickingState,this.internals),Bu(t,this.pickingState.idsByKind)||this.internals.hoverResolver.invalidate(),this.pendingProcess=`none`,this.emit(`afterProcess`)}},{key:`render`,value:function(){var e=this;if(this.contextLost)return this;this.emit(`beforeRender`);var t=function(){return e.internals.hoverResolver.frameRendered(),e.emit(`afterRender`),e};if(this.renderFrame&&=(cancelAnimationFrame(this.renderFrame),null),this.resize(),(this.pendingProcess!==`none`||this.needToRefreshState)&&(this.labelRenderer.labelsDirty=!0),this.pendingProcess!==`none`&&this.processData(),this.needToRefreshState&&this.refreshState(),this.needToRefreshState=!1,this.stateManager.clearDirtyTracking(),this.pendingProcess!==`none`&&this.processData(),this.clear(),this.resetWebGLTexture(),!this.internals.graph.order)return t();var n=this.mouseCaptor,r=this.camera.isAnimating()||n.isMoving||n.draggedEvents||n.currentWheelDirection;if(this.refreshMatrices(),this.frameId++,this.internals.settings.renderEdgeLabels&&!this.internals.edgeLabelProgram){var i=this.createEdgeLabelPrograms(),a=i.labelProgram,o=i.labelBackgroundProgram;this.internals.edgeLabelProgram=a,this.internals.edgeLabelBackgroundProgram=o}var s=this.internals.settings.DEBUG_logRenderStats?this.getDebugPrograms():null;s&&s.forEach(function(e){return e.resetDebugStats()}),this.internals.settings.DEBUG_gpuTimerQueries&&this.beginGpuTimerQuery(),this.internals.nodeFrameTexture.ensureCapacity(this.internals.nodeDataTexture.getCapacity()),this.internals.edgeFrameTexture.ensureCapacity(this.internals.edgeDataTexture.getCapacity());var c=this.getRenderParams(),l=yd.edge.writesPickingThisFrame(this.internals)?c:G(G({},c),{},{pickingFrameBuffer:null});this.labelRenderer.resetFrame();var u=this.webGLContext,d=Math.ceil(this.width*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio),f=Math.ceil(this.height*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio);if(u.bindFramebuffer(u.FRAMEBUFFER,this.pickingFrameBuffer),u.viewport(0,0,d,f),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.bindFramebuffer(u.FRAMEBUFFER,null),u.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),this.internals.nodeDataTexture.upload(),this.internals.edgeDataTexture.upload(),this.nodeProgram.uploadLayerTexture(),this.edgeProgram.uploadAttributeTexture(),this.emit(`afterTexturesUpload`),this.internals.nodeDataTexture.bind(Hd),this.internals.edgeDataTexture.bind(Ud),this.edgeFramePass.run(c,this.internals.edgeFrameTexture,this.internals.edgeDataTexture.getHighWaterMark(),this.edgeProgram.getAttributeTexture(),this.nodeProgram.getAttributeTexture()),this.internals.edgeFrameTexture.bind(Bd),this.internals.settings.renderLabels){this.labelRenderer.computeDisplayedNodeLabels();var p=this.labelRenderer.buildFramePassPoints(),m=p.data,h=p.count;this.nodeFramePass.run(m,h,this.internals.nodeFrameTexture,c,this.nodeProgram.getAttributeTexture()),this.internals.nodeFrameTexture.bind(Vd)}this.internals.settings.renderEdgeLabels&&this.labelRenderer.computeDisplayedEdgeLabels();var g=U(this.customLayerPrograms.values()),_;try{for(g.s();!(_=g.n()).done;){var v=_.value.program;v.preRender&&v.preRender(c)}}catch(e){g.e(e)}finally{g.f()}u.bindFramebuffer(u.FRAMEBUFFER,null),u.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio),u.blendFunc(u.ONE,u.ONE_MINUS_SRC_ALPHA);var y=!this.internals.settings.hideLabelsOnMove||!r,b=U(this.depthLayers),x;try{for(b.s();!(x=b.n()).done;){var S=x.value,C=U(this.customLayerPrograms.values()),w;try{for(C.s();!(w=C.n()).done;){var T=w.value;T.depth===S&&T.program.render(c)}}catch(e){C.e(e)}finally{C.f()}var E=this.depthRanges.edges[S];if(E&&(!this.internals.settings.hideEdgesOnMove||!r)){var D=U(E),O;try{for(D.s();!(O=D.n()).done;){var k=O.value,A=k.offset,j=k.count;j>0&&this.edgeProgram.render(l,A,j)}}catch(e){D.e(e)}finally{D.f()}}this.internals.settings.renderEdgeLabels&&y&&(this.labelRenderer.renderEdgeLabelBackgrounds(yd.edgeLabel.writesPickingThisFrame(this.internals)?c:G(G({},c),{},{pickingFrameBuffer:null}),S),this.labelRenderer.renderEdgeLabels(c,S)),this.labelRenderer.cacheAttachments(S),this.labelRenderer.renderBackdrops(G(G({},c),{},{pickingFrameBuffer:null}),S);var M=this.depthRanges.nodes[S];if(M){var N=U(M),P;try{for(N.s();!(P=N.n()).done;){var F=P.value,ee=F.offset,te=F.count;te>0&&this.nodeProgram.render(c,ee,te)}}catch(e){N.e(e)}finally{N.f()}}y&&(this.labelRenderer.renderAttachments(G(G({},c),{},{pickingFrameBuffer:null}),S),this.labelRenderer.renderLabelBackgrounds(yd.nodeLabel.writesPickingThisFrame(this.internals)?c:G(G({},c),{},{pickingFrameBuffer:null}),S),this.internals.settings.renderLabels&&this.labelRenderer.renderWebGLLabels(c,S))}}catch(e){b.e(e)}finally{b.f()}return this.labelRenderer.labelsDirty=!1,this.internals.settings.DEBUG_displayPickingLayer&&(u.bindFramebuffer(u.READ_FRAMEBUFFER,this.pickingFrameBuffer),u.bindFramebuffer(u.DRAW_FRAMEBUFFER,null),u.blitFramebuffer(0,0,d,f,0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio,u.COLOR_BUFFER_BIT,u.NEAREST)),this.internals.settings.DEBUG_gpuTimerQueries&&this.endGpuTimerQuery(),this.pollGpuTimerQueries(),s&&this.logRenderStats(s),t()}},{key:`getDebugPrograms`,value:function(){return[this.nodeProgram,this.edgeProgram,this.internals.labelProgram,this.internals.edgeLabelProgram,this.internals.edgeLabelBackgroundProgram,this.internals.backdropProgram,this.internals.labelBackgroundProgram,this.internals.attachmentProgram].filter(function(e){return e!==null})}},{key:`logRenderStats`,value:function(e){var t={},n=U(e),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;t[i.constructor.name]=G({},i.debugStats)}}catch(e){n.e(e)}finally{n.f()}console.log(`[sigma] DEBUG_logRenderStats: frame #${this.frameId}`),console.table(t)}},{key:`getGpuTimerExtension`,value:function(){return this.gpuTimerExt===void 0&&(this.gpuTimerExt=this.webGLContext.getExtension(`EXT_disjoint_timer_query_webgl2`),this.gpuTimerExt||console.warn(`Sigma: DEBUG_gpuTimerQueries is enabled, but this browser/driver doesn't support EXT_disjoint_timer_query_webgl2.`)),this.gpuTimerExt}},{key:`beginGpuTimerQuery`,value:function(){var e=this.getGpuTimerExtension();if(e){var t=this.webGLContext,n=t.createQuery();n&&(t.beginQuery(e.TIME_ELAPSED_EXT,n),this.activeGpuTimerQuery=n)}}},{key:`endGpuTimerQuery`,value:function(){this.gpuTimerExt&&this.activeGpuTimerQuery&&(this.webGLContext.endQuery(this.gpuTimerExt.TIME_ELAPSED_EXT),this.pendingGpuTimerQueries.push({query:this.activeGpuTimerQuery,frameId:this.frameId}),this.activeGpuTimerQuery=null)}},{key:`pollGpuTimerQueries`,value:function(){if(this.pendingGpuTimerQueries.length!==0){var e=this.webGLContext,t=this.gpuTimerExt;if(!t)this.pendingGpuTimerQueries.forEach(function(t){var n=t.query;return e.deleteQuery(n)}),this.pendingGpuTimerQueries=[];else{var n=e.getParameter(t.GPU_DISJOINT_EXT),r=[],i=U(this.pendingGpuTimerQueries),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;if(!e.getQueryParameter(o.query,e.QUERY_RESULT_AVAILABLE))r.push(o);else{if(!n){var s=e.getQueryParameter(o.query,e.QUERY_RESULT);console.log(`[sigma] DEBUG_gpuTimerQueries: frame #${o.frameId} GPU time = ${(s/1e6).toFixed(2)}ms`)}e.deleteQuery(o.query)}}}catch(e){i.e(e)}finally{i.f()}this.pendingGpuTimerQueries=r}}}},{key:`postEvaluateNode`,value:function(e,t,n){var r=e;r.x===void 0&&(r.x=t.x),r.y===void 0&&(r.y=t.y),e.highlighted=n.isHighlighted;for(var i=0,a=this.nodeVariableEntries.length;i<a;i++){var o=H(this.nodeVariableEntries[i],2),s=o[0],c=o[1];r[s]=r[s]??t[s]??c.default}}},{key:`addNode`,value:function(e){var t=this.internals.graph.getNodeAttributes(e),n=this.stateManager.getNodeState(e),r=this.internals.nodeDataCache[e]||{};if(Jl(this.stylesDeclaration.nodes,t,n,this.stateManager.graphState,this.internals.graph,r),this.postEvaluateNode(r,t,n),this.nodeReducer){var i=this.nodeReducer(e,r,t,n,this.stateManager.graphState,this.internals.graph);r=G(G({},r),i)}if(typeof r.x!=`number`||typeof r.y!=`number`)throw Error(`Sigma: could not find a valid position (x, y) for node "${e}". Provide coordinates via node attributes, styles, or a nodeReducer.`);this.internals.nodeShapeMap?r.shape&&r.shape in this.internals.nodeShapeMap||(r.shape=Object.keys(this.internals.nodeShapeMap)[0]):this.nodeShapeSlug&&(r.shape=this.nodeShapeSlug),this.internals.nodeDataCache[e]=r,this.nodeGraphCoords[e]={x:r.x,y:r.y},os(this.internals.nodesWithForcedLabels,e,Ko(r)),os(this.internals.nodesWithBackdrop,e,qo(r)),this.itemBuckets.nodes.set(e,r.depth)}},{key:`updateNode`,value:function(e){this.addNode(e);var t=this.internals.nodeDataCache[e];this.normalizationFunction.applyTo(t)}},{key:`removeNode`,value:function(e){this.itemBuckets.nodes.remove(e),delete this.internals.nodeDataCache[e],delete this.nodeGraphCoords[e],delete this.nodeProgramIndex[e],this.internals.dragManager.removeNode(e),this.stateManager.removeNode(e),this.internals.nodesWithForcedLabels.delete(e),this.internals.nodesWithBackdrop.delete(e)}},{key:`postEvaluateEdge`,value:function(e,t){for(var n=e,r=0,i=this.edgeVariableEntries.length;r<i;r++){var a=H(this.edgeVariableEntries[r],2),o=a[0],s=a[1];n[o]=n[o]??t[o]??s.default}}},{key:`applyEdgeSpread`,value:function(e,t,n){if(!(n.parallelCount<=1)){var r=this.internals.graph.source(e),i=this.internals.graph.target(e),a=r===i,o=a?t.selfLoopPath||t.path:t.parallelPath||t.path,s=o?this.edgePathsByName.get(o):void 0;if(s!=null&&s.spread){var c=t.parallelSpread??.25,l=s.spread.compute(n.parallelIndex,n.parallelCount,c);!a&&this.internals.graph.isDirected(e)&&r>i&&(l=-l),t[s.spread.variable]=l}}}},{key:`addEdge`,value:function(e){var t=this.internals.graph.getEdgeAttributes(e),n=this.stateManager.getEdgeState(e),r={};if(Yl(this.stylesDeclaration.edges,t,n,this.stateManager.graphState,this.internals.graph,r),this.postEvaluateEdge(r,t),this.edgeReducer){var i=this.edgeReducer(e,r,t,n,this.stateManager.graphState,this.internals.graph);r=G(G({},r),i)}this.applyEdgeSpread(e,r,n),this.internals.edgeDataCache[e]=r,os(this.internals.edgesWithForcedLabels,e,Ko(r)),this.itemBuckets.edges.set(e,r.depth)}},{key:`updateEdge`,value:function(e){this.addEdge(e)}},{key:`removeEdge`,value:function(e){this.itemBuckets.edges.remove(e),delete this.internals.edgeDataCache[e],delete this.edgeProgramIndex[e],delete this.edgeTextureIndexCache[e],this.internals.edgeDataTexture.free(e),this.stateManager.removeEdge(e),this.internals.edgesWithForcedLabels.delete(e)}},{key:`clearNodeIndices`,value:function(){this.labelRenderer.resetLabelGrid(),this.autoRescaleFrozen||(this.nodeExtent={x:[0,1],y:[0,1]}),this.internals.nodeDataCache={},this.nodeGraphCoords={},this.edgeProgramIndex={},this.internals.nodesWithForcedLabels.clear(),this.internals.nodesWithBackdrop.clear(),this.prevNodeVisibilities={},this.itemBuckets.nodes.clearAll(),this.depthRanges.nodes={},this.nodeBaseDepth={}}},{key:`clearEdgeIndices`,value:function(){this.internals.edgeDataCache={},this.edgeProgramIndex={},this.edgeTextureIndexCache={},this.internals.edgesWithForcedLabels.clear(),Lu(this.pickingState,`edge`),this.itemBuckets.edges.clearAll(),this.depthRanges.edges={},this.edgeBaseDepth={},this.edgeGroups.clear()}},{key:`clearIndices`,value:function(){this.clearEdgeIndices(),this.clearNodeIndices()}},{key:`clearNodeState`,value:function(){this.labelRenderer.resetFrame(),this.internals.nodesWithBackdrop.clear(),this.internals.dragManager.clear(),this.autoRescaleFrozen=!1,this.stateManager.clearNodes()}},{key:`clearEdgeState`,value:function(){this.labelRenderer.clearEdgeLabels(),this.stateManager.clearEdges()}},{key:`clearState`,value:function(){this.clearEdgeState(),this.clearNodeState(),this.stateManager.resetGraphState()}},{key:`addNodeToProgram`,value:function(e,t){var n,r=this.internals.nodeDataCache[e];this.internals.nodeDataTexture.allocate(e),(n=this.internals.nodeDataTexture).updateNode.apply(n,[e,r.x,r.y,r.size,this.getNodeShapeId(r)].concat(X(Jo(r)),[r.color]));var i=this.internals.nodeDataTexture.getIndex(e);this.nodeProgram.process(Iu(this.pickingState,`node`,e),t,r,i,e),this.nodeProgramIndex[e]=t}},{key:`addEdgeToProgram`,value:function(e,t){var n=this.internals.edgeDataCache[e],r=this.internals.graph.source(e),i=this.internals.graph.target(e),a=this.internals.edgeDataTexture.allocate(e);this.edgeTextureIndexCache[e]=a;var o=r===i,s=!o&&(this.stateManager.getEdgeState(e)?.parallelCount??1)>1,c=this.edgeProgram.resolveEdgeIds(n,o,s),l=c.pathId,u=c.headId,d=c.tailId,f=c.headLengthRatio,p=c.tailLengthRatio;this.internals.edgeDataTexture.updateEdge(e,this.internals.nodeDataTexture.getIndex(r),this.internals.nodeDataTexture.getIndex(i),n.size,f,p,l,u,d),this.edgeProgram.process(Iu(this.pickingState,`edge`,e),t,this.internals.nodeDataCache[r],this.internals.nodeDataCache[i],n,a),this.edgeProgramIndex[e]=t}},{key:`getRenderParams`,value:function(){return{frameId:this.frameId,matrix:this.matrix,invMatrix:this.invMatrix,width:this.width,height:this.height,pixelRatio:this.internals.pixelRatio,zoomRatio:this.camera.ratio,cameraAngle:this.camera.angle,sizeRatio:1/this.scaleSize(),correctionRatio:this.correctionRatio,downSizingRatio:this.internals.settings.pickingDownSizingRatio,minEdgeThickness:this.internals.settings.minEdgeThickness,antiAliasingFeather:this.internals.settings.antiAliasingFeather,nodePickingPadding:this.internals.settings.nodePickingPadding,edgePickingPadding:this.internals.settings.edgePickingPadding,labelPickingPadding:this.internals.settings.labelPickingPadding,nodeDataTextureUnit:Hd,nodeDataTextureWidth:this.internals.nodeDataTexture.getTextureWidth(),nodeFrameTextureUnit:Vd,nodeFrameTextureWidth:this.internals.nodeFrameTexture.getTextureWidth(),edgeDataTextureUnit:Ud,edgeDataTextureWidth:this.internals.edgeDataTexture.getTextureWidth(),edgeFrameTextureUnit:Bd,edgeFrameTextureWidth:this.internals.edgeFrameTexture.getTextureWidth(),pickingFrameBuffer:this.pickingFrameBuffer,labelPixelSnapping:+!!this.internals.settings.labelPixelSnapping}}},{key:`getStagePadding`,value:function(){var e=this.internals.settings,t=e.stagePadding;return e.autoRescale&&t||0}},{key:`getLayerElement`,value:function(e){if(e===`mouse`)return this.mouseLayer;var t=this.extraElements[e];if(!t)throw Error(`Sigma: layer "${e}" does not exist`);return t}},{key:`initWebGLContext`,value:function(){var e=this,t=this.createWebGLContext(`stage`);this.stageCanvas=this.extraElements.stage,this.webGLContext=t,this.stageCanvas.addEventListener(`webglcontextlost`,function(t){e.webGLContext&&(t.preventDefault(),e.contextLost=!0,e.renderFrame&&=(cancelAnimationFrame(e.renderFrame),null),e.gpuTimerExt=void 0,e.activeGpuTimerQuery=null,e.pendingGpuTimerQueries=[],e.emit(`webglContextLost`))}),this.stageCanvas.addEventListener(`webglcontextrestored`,function(){requestAnimationFrame(function(){e.webGLContext&&!e.webGLContext.isContextLost()&&e.restoreWebGLContext()})}),this.initPickingFramebuffer()}},{key:`initPickingFramebuffer`,value:function(){var e=this.webGLContext,t=e.createFramebuffer();if(!t)throw Error(`Sigma: cannot create picking frame buffer`);e.bindFramebuffer(e.FRAMEBUFFER,t);var n=e.createTexture();if(!n)throw Error(`Sigma: cannot create picking texture`);e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);var r=e.createRenderbuffer();if(!r)throw Error(`Sigma: cannot create picking depth buffer`);if(e.bindRenderbuffer(e.RENDERBUFFER,r),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,1,1),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,r),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)throw Error(`Sigma: picking framebuffer is not complete`);e.bindFramebuffer(e.FRAMEBUFFER,null),this.pickingFrameBuffer=t,this.pickingTexture=n,this.pickingDepthBuffer=r}},{key:`initPrograms`,value:function(e,t){var n=this,r=this.webGLContext,i=Ms(r,this.pickingFrameBuffer,n,e?.nodes,t.antialiasNodes),a=i.nodeProgram,o=i.labelProgram,s=i.backdropProgram,c=i.labelBackgroundProgram,l=i.attachmentProgram,u=i.framePass,d=i.shapeSlug,f=i.shapeNameToIndex,p=i.shapeGlobalIds,m=i.variables;this.nodeProgram=a,this.nodeFramePass=u,this.nodeVariableEntries=Object.entries(m),d&&(this.nodeShapeSlug=d);var h=Ns(r,this.pickingFrameBuffer,n,e?.edges,t.antialiasEdges,e?.nodes),g=h.edgeProgram,_=h.createLabelPrograms,v=h.framePass,y=h.variables,b=h.paths;return this.createEdgeLabelPrograms=_,this.edgeProgram=g,this.edgeFramePass=v,this.edgeVariableEntries=Object.entries(y),this.edgePathsByName=new Map(b.map(function(e){return[e.name,e]})),{labelProgram:o,edgeLabelProgram:null,edgeLabelBackgroundProgram:null,backdropProgram:s,labelBackgroundProgram:c,attachmentProgram:l,nodeShapeMap:f??null,nodeGlobalShapeIds:p??null}}},{key:`restoreWebGLContext`,value:function(){var e,t,n,r,i,a=this.internals;this.initPickingFramebuffer(),(e=a.nodeDataTexture)==null||e.restore(),(t=a.nodeFrameTexture)==null||t.restore(),(n=a.edgeDataTexture)==null||n.restore(),(r=a.edgeFrameTexture)==null||r.restore(),(i=a.attachmentManager)==null||i.restore(),a.hoverResolver.reset(),Object.assign(a,this.initPrograms(a.primitives,a.settings));var o=U(this.customLayerPrograms.values()),s;try{for(o.s();!(s=o.n()).done;){var c=s.value;c.program.kill(),c.program=c.factory(this.webGLContext)}}catch(e){o.e(e)}finally{o.f()}this.contextLost=!1,this.emit(`webglContextRestored`),this.refresh()}},{key:`createLayer`,value:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.extraElements[e])throw Error(`Sigma: a layer named "${e}" already exists`);var r=Vn(t,{position:`absolute`},{class:`sigma-${e}`});return n.style&&Object.assign(r.style,n.style),this.extraElements[e]=r,`beforeLayer`in n&&n.beforeLayer?this.getLayerElement(n.beforeLayer).before(r):`afterLayer`in n&&n.afterLayer?this.getLayerElement(n.afterLayer).after(r):this.container.appendChild(r),r}},{key:`createCanvas`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.createLayer(e,`canvas`,t)}},{key:`createWebGLContext`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=this.createCanvas(e,t);t.hidden&&n.remove();var r=n.getContext(`webgl2`,G({preserveDrawingBuffer:!1,antialias:!1,depth:!0},t));if(!r)throw Error(`Sigma: WebGL 2 is not supported by your browser. Please use a modern browser (Chrome 56+, Firefox 51+, Safari 15+, Edge 79+).`);return r.blendFunc(r.ONE,r.ONE_MINUS_SRC_ALPHA),r}},{key:`killLayer`,value:function(e){if(e===`stage`||e===`mouse`)throw Error(`Sigma: cannot kill built-in layer "${e}"`);var t=this.extraElements[e];if(!t)throw Error(`Sigma: cannot kill layer ${e}, which does not exist`);return t.remove(),delete this.extraElements[e],this}},{key:`getWebGLContext`,value:function(){if(!this.webGLContext)throw Error(`Sigma: WebGL context is not available`);return this.webGLContext}},{key:`getNodeDataTexture`,value:function(){if(!this.internals.nodeDataTexture)throw Error(`Sigma: node data texture is not available`);return this.internals.nodeDataTexture}},{key:`getNormalizationFunction`,value:function(){return this.normalizationFunction}},{key:`addCustomLayerProgram`,value:function(e,t,n){var r;if(!this.depthLayers.includes(t))throw Error(`Sigma: cannot add custom layer program at depth "${t}", it must be declared in primitives.depthLayers. Current layers: ${this.depthLayers.join(`, `)}`);(r=this.customLayerPrograms.get(e))==null||r.program.kill();var i=n(this.webGLContext);return this.customLayerPrograms.set(e,{depth:t,factory:n,program:i}),i.cacheData&&i.cacheData(),this.scheduleRender(),this}},{key:`removeCustomLayerProgram`,value:function(e){var t=this.customLayerPrograms.get(e);return t&&(t.program.kill(),this.customLayerPrograms.delete(e),this.scheduleRender()),this}},{key:`getCamera`,value:function(){return this.camera}},{key:`setCamera`,value:function(e){return this.camera.cancelAnimation(),this.unbindCameraHandlers(),this.camera=e,this.bindCameraHandlers(),this.scheduleRender(),this}},{key:`getContainer`,value:function(){return this.container}},{key:`getGraph`,value:function(){return this.internals.graph}},{key:`setGraph`,value:function(e){return e===this.internals.graph||(this.stateManager.pruneNodes(function(t){return e.hasNode(t)}),this.stateManager.pruneEdges(function(t){return e.hasEdge(t)}),this.unbindGraphHandlers(),this.checkEdgesEventsFrame!==null&&(cancelAnimationFrame(this.checkEdgesEventsFrame),this.checkEdgesEventsFrame=null),this.internals.graph=e,this.autoRescaleFrozen=!1,this.bindGraphHandlers(),this.refresh()),this}},{key:`getMouseCaptor`,value:function(){return this.mouseCaptor}},{key:`getTouchCaptor`,value:function(){return this.touchCaptor}},{key:`getDimensions`,value:function(){return{width:this.width,height:this.height}}},{key:`getGraphDimensions`,value:function(){var e=this.customBBox||this.nodeExtent;return{width:e.x[1]-e.x[0]||1,height:e.y[1]-e.y[0]||1}}},{key:`getNodeDisplayData`,value:function(e){var t=this.internals.nodeDataCache[e];return t?Object.assign({},t):void 0}},{key:`getEdgeDisplayData`,value:function(e){var t=this.internals.edgeDataCache[e];return t?Object.assign({},t):void 0}},{key:`getNodeState`,value:function(e){return this.stateManager.getNodeState(e)}},{key:`getEdgeState`,value:function(e){return this.stateManager.getEdgeState(e)}},{key:`getGraphState`,value:function(){return this.stateManager.getGraphState()}},{key:`setNodeState`,value:function(e,t){return this.stateManager.setNodeState(e,t),this}},{key:`setEdgeState`,value:function(e,t){return this.stateManager.setEdgeState(e,t),this}},{key:`setGraphState`,value:function(e){return this.stateManager.setGraphState(e),this}},{key:`_setPanning`,value:function(e){this.stateManager.setGraphState({isPanning:e})}},{key:`_setZooming`,value:function(e){this.stateManager.setGraphState({isZooming:e})}},{key:`_hasNodeDrag`,value:function(){var e=this.internals.dragManager;return!!(e.pendingNode||e.session)}},{key:`_showGestureHint`,value:function(e){var t=this.internals.settings;t.gestureTarget===`shared`&&(this.gestureHint=this.gestureHint||new Od(this.container),this.gestureHint.show(e,t))}},{key:`setNodesState`,value:function(e,t){return this.stateManager.setNodesState(e,t),this}},{key:`setEdgesState`,value:function(e,t){return this.stateManager.setEdgesState(e,t),this}},{key:`updateContainerCursor`,value:function(){var e=this.stateManager.hovered,t=this.resolvedStageStyle.cursor||``;this.container.style.cursor=e&&Hu(this.internals,e)||t}},{key:`refreshStageStyle`,value:function(){this.resolvedStageStyle=Zl(this.stylesDeclaration.stage,this.stateManager.graphState),this.resolvedStageStyle.background!==void 0&&(this.container.style.backgroundColor=this.resolvedStageStyle.background),this.updateContainerCursor()}},{key:`getNodeDisplayedLabels`,value:function(){return new Set(this.labelRenderer.displayedNodeLabels)}},{key:`getEdgeDisplayedLabels`,value:function(){return new Set(this.labelRenderer.displayedEdgeLabels)}},{key:`getSettings`,value:function(){return G({},this.internals.settings)}},{key:`getSetting`,value:function(e){return this.internals.settings[e]}},{key:`getStyles`,value:function(){return G({},this.stylesDeclaration)}},{key:`getPrimitives`,value:function(){return G({},this.internals.primitives)}},{key:`setSetting`,value:function(e,t){return this.internals.settings[e]=t,_u(this.internals.settings),this.handleSettingsUpdate(),this.scheduleRefresh(),this}},{key:`updateSetting`,value:function(e,t){return this.setSetting(e,t(this.internals.settings[e])),this}},{key:`setSettings`,value:function(e){return this.internals.settings=G(G({},this.internals.settings),e),_u(this.internals.settings),this.handleSettingsUpdate(),this.scheduleRefresh(),this}},{key:`resize`,value:function(e){var t=this.width,n=this.height;if(this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.internals.pixelRatio=Hn(),this.width===0){if(this.internals.settings.allowInvalidContainer)this.width=1;else throw Error(`Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.`)}if(this.height===0){if(this.internals.settings.allowInvalidContainer)this.height=1;else throw Error(`Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.`)}if(!e&&t===this.width&&n===this.height)return this;this.labelRenderer.labelsDirty=!0;for(var r=0,i=[this.mouseLayer].concat(X(Object.values(this.extraElements)));r<i.length;r++){var a=i[r];a.style.width=this.width+`px`,a.style.height=this.height+`px`}return this.webGLContext&&(this.stageCanvas.setAttribute(`width`,this.width*this.internals.pixelRatio+`px`),this.stageCanvas.setAttribute(`height`,this.height*this.internals.pixelRatio+`px`),this.webGLContext.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio)),this.emit(`resize`),this}},{key:`clear`,value:function(){return this.emit(`beforeClear`),this.webGLContext.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER,null),this.webGLContext.clear(WebGLRenderingContext.COLOR_BUFFER_BIT),this.emit(`afterClear`),this}},{key:`scheduleStateRefresh`,value:function(){this.needToRefreshState=!0,this.scheduleRender()}},{key:`refreshState`,value:function(){var e=this,t;this.stateManager.flushGraphStateFlags();var n=this.stateManager.graphStateChanged&&this.internals.nodeStyleAnalysis.dependency===`graph-state`,r=this.stateManager.graphStateChanged&&this.edgeStyleAnalysis.dependency===`graph-state`,i=!1;if(n)this.internals.graph.forEachNode(function(t){e.refreshNodeState(t)&&(i=!0)});else if(this.internals.nodeStyleAnalysis.dependency!==`static`){var a=U(this.stateManager.dirtyNodes),o;try{for(a.s();!(o=a.n()).done;){var s=o.value;this.refreshNodeState(s)&&(i=!0)}}catch(e){a.e(e)}finally{a.f()}}if(r)this.internals.graph.forEachEdge(function(t){e.refreshEdgeState(t)&&(i=!0)});else if(this.edgeStyleAnalysis.dependency!==`static`){var c=U(this.stateManager.dirtyEdges),l;try{for(c.s();!(l=c.n()).done;){var u=l.value;this.refreshEdgeState(u)&&(i=!0)}}catch(e){c.e(e)}finally{c.f()}}this.stateManager.graphStateChanged&&(t=this.stylesDeclaration)!=null&&t.stage&&this.refreshStageStyle(),this.stateManager.clearDirtyTracking(),i&&(this.pendingProcess=`full`)}},{key:`refreshNodeState`,value:function(e){var t=this.internals.nodeDataCache[e];if(!t||this.nodeReducer){var n,r=this.internals.nodeDataCache[e]?.depth,i=this.internals.nodeDataCache[e]?.zIndex,a=this.internals.nodeDataCache[e]?.labelAttachment;this.updateNode(e);var o=this.internals.nodeDataCache[e];this.internals.attachmentManager&&o.labelAttachment!==a&&this.internals.attachmentManager.invalidateNode(e);var s=this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&o.shape&&o.shape in this.internals.nodeShapeMap?this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[o.shape]]:rr(o.shape||`circle`);(n=this.internals.nodeDataTexture).updateNode.apply(n,[e,o.x,o.y,o.size,s].concat(X(Jo(o)),[o.color])),r&&o.depth!==r&&this.updateNodeDepthRanges(e,r,o.depth);var c=this.nodeProgramIndex[e];return c!==void 0&&(this.addNodeToProgram(e,c),this.nodeProgram.invalidateBuffers()),i!==void 0&&o.zIndex!==i}var l=this.internals.graph.getNodeAttributes(e),u=this.stateManager.getNodeState(e),d=t.size,f=t.shape,p=t.depth,m=t.zIndex,h=t.labelAttachment,g=t.rotationAlignment,_=t.labelRotationAlignment,v=t.color;Jl(this.stylesDeclaration.nodes,l,u,this.stateManager.graphState,this.internals.graph,t),this.postEvaluateNode(t,l,u);var y=this.nodeGraphCoords[e],b=t.x!==y.x||t.y!==y.y;if(b&&(y.x=t.x,y.y=t.y),this.normalizationFunction.applyTo(t),this.internals.nodeShapeMap?t.shape&&t.shape in this.internals.nodeShapeMap||(t.shape=Object.keys(this.internals.nodeShapeMap)[0]):this.nodeShapeSlug&&(t.shape=this.nodeShapeSlug),this.internals.attachmentManager&&t.labelAttachment!==h&&this.internals.attachmentManager.invalidateNode(e),os(this.internals.nodesWithForcedLabels,e,Ko(t)),os(this.internals.nodesWithBackdrop,e,qo(t)),b||t.size!==d||t.shape!==f||t.rotationAlignment!==g||t.labelRotationAlignment!==_||t.color!==v){var x,S=this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&t.shape&&t.shape in this.internals.nodeShapeMap?this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[t.shape]]:rr(t.shape||`circle`);(x=this.internals.nodeDataTexture).updateNode.apply(x,[e,t.x,t.y,t.size,S].concat(X(Jo(t)),[t.color]))}this.itemBuckets.nodes.set(e,t.depth),t.depth!==p&&this.updateNodeDepthRanges(e,p,t.depth);var C=this.nodeProgramIndex[e];return C!==void 0&&(this.addNodeToProgram(e,C),this.nodeProgram.invalidateBuffers()),t.zIndex!==m}},{key:`refreshEdgeState`,value:function(e){var t=this.internals.edgeDataCache[e];if(!t||this.edgeReducer){var n=t?.depth,r=t?.zIndex;this.updateEdge(e);var i=this.internals.edgeDataCache[e];n&&i.depth!==n&&this.updateEdgeDepthRanges(e,n,i.depth);var a=this.edgeProgramIndex[e];return a!==void 0&&(this.addEdgeToProgram(e,a),this.edgeProgram.invalidateBuffers()),r!==void 0&&i.zIndex!==r}var o=this.internals.graph.getEdgeAttributes(e),s=this.stateManager.getEdgeState(e),c=t.depth,l=t.zIndex,u=t.size,d=t.path,f=t.selfLoopPath,p=t.parallelPath,m=t.head,h=t.tail;Yl(this.stylesDeclaration.edges,o,s,this.stateManager.graphState,this.internals.graph,t),this.postEvaluateEdge(t,o),this.applyEdgeSpread(e,t,s),os(this.internals.edgesWithForcedLabels,e,Ko(t)),this.itemBuckets.edges.set(e,t.depth),t.depth!==c&&this.updateEdgeDepthRanges(e,c,t.depth);var g=this.edgeProgramIndex[e];if(g!==void 0){if(t.size!==u||t.path!==d||t.selfLoopPath!==f||t.parallelPath!==p||t.head!==m||t.tail!==h)this.addEdgeToProgram(e,g),this.edgeProgram.invalidateBuffers();else{var _=this.internals.graph.source(e),v=this.internals.graph.target(e),y=this.internals.nodeDataCache[_],b=this.internals.nodeDataCache[v],x=this.edgeTextureIndexCache[e];this.edgeProgram.process(Iu(this.pickingState,`edge`,e),g,y,b,t,x),this.edgeProgram.invalidateBuffers()}}return t.zIndex!==l}},{key:`refresh`,value:function(e){var t=this,n=e?.skipIndexation!==void 0&&e?.skipIndexation,r=e?.schedule!==void 0&&e.schedule;if(!e||!e.partialGraph)this.clearEdgeIndices(),this.clearNodeIndices(),this.internals.graph.forEachNode(function(e){return t.addNode(e)}),this.edgeGroups.rebuild(),this.internals.graph.forEachEdge(function(e){return t.addEdge(e)}),this.pendingProcess=`full`;else{for(var i,a=e.partialGraph?.nodes||[],o=0,s=a?.length||0;o<s;o++){var c,l=``+a[o],u=this.internals.nodeDataCache[l]?.labelAttachment;if(this.updateNode(l),this.internals.attachmentManager&&((c=this.internals.nodeDataCache[l])!=null&&c.labelAttachment||u)&&this.internals.attachmentManager.invalidateNode(l),n){var d=this.nodeProgramIndex[l];if(d===void 0)throw Error(`Sigma: node "${l}" can't be repaint`);this.addNodeToProgram(l,d)}}n&&a.length>0&&(this.nodeProgram.invalidateBuffers(),this.labelRenderer.labelsDirty=!0);for(var f=(e==null||(i=e.partialGraph)==null?void 0:i.edges)||[],p=0,m=f.length;p<m;p++){var h=``+f[p];if(this.updateEdge(h),n){var g=this.edgeProgramIndex[h];if(g===void 0)throw Error(`Sigma: edge "${h}" can't be repaint`);this.addEdgeToProgram(h,g)}}n&&f.length>0&&(this.edgeProgram.invalidateBuffers(),this.labelRenderer.labelsDirty=!0),!n&&this.pendingProcess!==`full`&&(this.pendingProcess=f.length>0?`full`:`nodes`)}return r?this.scheduleRender():this.render(),this}},{key:`scheduleRender`,value:function(){var e=this;return this.renderFrame||=requestAnimationFrame(function(){e.render()}),this}},{key:`scheduleRefresh`,value:function(e){return this.refresh(G(G({},e),{},{schedule:!0}))}},{key:`getViewportZoomedState`,value:function(e,t){var n=this.camera.getState(),r=n.ratio,i=n.angle,a=n.x,o=n.y,s=this.internals.settings,c=s.minCameraRatio,l=s.maxCameraRatio;typeof l==`number`&&(t=Math.min(t,l)),typeof c==`number`&&(t=Math.max(t,c));var u=t/r,d={x:this.width/2,y:this.height/2},f=this.viewportToFramedGraph(e),p=this.viewportToFramedGraph(d);return{angle:i,x:(f.x-p.x)*(1-u)+a,y:(f.y-p.y)*(1-u)+o,ratio:t}}},{key:`viewRectangle`,value:function(){var e=this.viewportToFramedGraph({x:0,y:0}),t=this.viewportToFramedGraph({x:this.width,y:0}),n=this.viewportToFramedGraph({x:0,y:this.height});return{x1:e.x,y1:e.y,x2:t.x,y2:t.y,height:t.y-n.y}}},{key:`framedGraphToViewport`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=!!t.cameraState||!!t.viewportDimensions||!!t.graphDimensions||!!t.padding,r=Zt(t.matrix||(n?$t(t.cameraState||this.camera.getState(),t.viewportDimensions||this.getDimensions(),t.graphDimensions||this.getGraphDimensions(),t.padding||this.getStagePadding()):this.matrix),e);return{x:(1+r.x)*this.width/2,y:(1-r.y)*this.height/2}}},{key:`viewportToFramedGraph`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=!!t.cameraState||!!t.viewportDimensions||!!t.graphDimensions||!!t.padding,r=Zt(t.matrix||(n?$t(t.cameraState||this.camera.getState(),t.viewportDimensions||this.getDimensions(),t.graphDimensions||this.getGraphDimensions(),t.padding||this.getStagePadding(),!0):this.invMatrix),{x:e.x/this.width*2-1,y:1-e.y/this.height*2});return isNaN(r.x)&&(r.x=0),isNaN(r.y)&&(r.y=0),r}},{key:`viewportToGraph`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.normalizationFunction.inverse(this.viewportToFramedGraph(e,t))}},{key:`graphToViewport`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.framedGraphToViewport(this.normalizationFunction(e),t)}},{key:`graphToFramedGraph`,value:function(e){return this.normalizationFunction(e)}},{key:`framedGraphToGraph`,value:function(e){return this.normalizationFunction.inverse(e)}},{key:`getGraphToViewportRatio`,value:function(){var e={x:0,y:0},t={x:1,y:1},n=Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2),r=this.graphToViewport(e),i=this.graphToViewport(t);return Math.sqrt((r.x-i.x)**2+(r.y-i.y)**2)/n}},{key:`computeNodeExtent`,value:function(){var e=this.nodeGraphCoords,t=Object.keys(e);if(!t.length)return{x:[0,1],y:[0,1]};for(var n=1/0,r=-1/0,i=1/0,a=-1/0,o=0,s=t.length;o<s;o++){var c=e[t[o]],l=c.x,u=c.y;l<n&&(n=l),l>r&&(r=l),u<i&&(i=u),u>a&&(a=u)}return{x:[n,r],y:[i,a]}}},{key:`getBBox`,value:function(){return this.nodeExtent}},{key:`getCustomBBox`,value:function(){return this.customBBox}},{key:`setCustomBBox`,value:function(e){return this.customBBox=e,this.scheduleRender(),this}},{key:`kill`,value:function(){var e,t,n,r,i;this.emit(`kill`),this.removeAllListeners(),this.camera.cancelAnimation(),this.unbindCameraHandlers(),window.removeEventListener(`resize`,this.activeListeners.handleResize),this.mouseCaptor.kill(),this.touchCaptor.kill(),this.internals.hoverResolver.kill(),this.unbindGraphHandlers(),this.clearIndices(),this.clearState(),this.internals.nodeDataCache={},this.internals.edgeDataCache={},this.renderFrame&&=(cancelAnimationFrame(this.renderFrame),null);for(var a=this.container;a.firstChild;)a.removeChild(a.firstChild);this.nodeProgram.kill(),this.nodeFramePass.kill(),this.edgeProgram.kill(),this.edgeFramePass.kill(),this.internals.labelProgram.kill(),(e=this.internals.edgeLabelProgram)==null||e.kill(),(t=this.internals.edgeLabelBackgroundProgram)==null||t.kill(),this.internals.backdropProgram.kill(),this.internals.labelBackgroundProgram.kill(),(n=this.internals.attachmentProgram)==null||n.kill(),(r=this.internals.attachmentManager)==null||r.kill(),this.internals.attachmentProgram=null,this.internals.attachmentManager=null;var o=U(this.customLayerPrograms.values()),s;try{for(o.s();!(s=o.n()).done;)s.value.program.kill()}catch(e){o.e(e)}finally{o.f()}if(this.customLayerPrograms.clear(),this.sdfAtlas&&=null,this.internals.nodeDataTexture&&(this.internals.nodeDataTexture.kill(),this.internals.nodeDataTexture=null),this.internals.nodeFrameTexture&&(this.internals.nodeFrameTexture.kill(),this.internals.nodeFrameTexture=null),this.internals.edgeDataTexture&&(this.internals.edgeDataTexture.kill(),this.internals.edgeDataTexture=null),this.internals.edgeFrameTexture&&(this.internals.edgeFrameTexture.kill(),this.internals.edgeFrameTexture=null),this.webGLContext){var c;(c=this.webGLContext.getExtension(`WEBGL_lose_context`))==null||c.loseContext(),this.webGLContext=null}for(var l in(i=this.gestureHint)==null||i.kill(),this.gestureHint=null,this.mouseLayer.remove(),this.extraElements)this.extraElements[l].remove();this.extraElements={}}},{key:`scaleSize`,value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.camera.ratio;return e/this.internals.settings.zoomToSizeRatioFunction(t)*(this.getSetting(`itemSizesReference`)===`positions`?t*this.graphToViewportRatio:1)}},{key:`getStageCanvas`,value:function(){return this.stageCanvas}},{key:`getMouseLayer`,value:function(){return this.mouseLayer}}])}(pu)})))()}var Kd,qd,Jd,Yd;function Xd(){return(Xd=t((()=>{Kd=r(),qd=c(),Jd=(0,Kd.createContext)({}),Yd=e=>{let t=Jd.Provider;return(0,qd.jsx)(t,{...e})},Yd.__docgenInfo={description:``,methods:[],displayName:`Provider`}})))()}function Zd(e,t,n){return n.path===`curved`&&(t.curvature=.3),n.style===`dashed`&&(t.dashSize=4,t.gapSize=8),n.style===`dotted`&&(t.dashSize=t.gapSize=t.size??2),t}function Qd(e=!1){return[mu.edges,{size:{attribute:`size`,defaultValue:1},path:{attribute:`path`,defaultValue:`straight`},color:{attribute:`color`,defaultValue:e?`#475569`:`#94a3b8`},head:{attribute:`head`},tail:{attribute:`tail`},gapSize:0,dashSize:0,parallelPath:`curved`,dashColor:e?`#181818`:`#fff`,labelColor:e?`#dedede`:`#545454`,labelVisibility:`auto`,labelPosition:`auto`}]}function $d(){return($d=t((()=>{gu()})))()}function ef(e,t,n){return a(n.segments)&&n.segments?.length&&(t.pieSize=.25,n.segments.forEach((e,r)=>{typeof e==`string`&&(t[`slice_${r}`]=1/n.segments.length,t[`color_${r}`]=e),typeof e==`number`&&(t[`slice_${r}`]=e,t[`color_${r}`]=nf[r])})),o(n.segments)&&(t.pieSize=.25,Object.entries(n.segments).forEach(([e,n],r)=>{t[`slice_${r}`]=n,t[`color_${r}`]=e})),n.group&&(t.shape=`folder`),t}function tf(e=!1){return[mu.nodes,{size:{attribute:`size`,defaultValue:8},shape:{attribute:`shape`,defaultValue:`circle`},color:{attribute:`color`,defaultValue:e?`#1e293b`:`#e2e8f0`},border:{attribute:`border`,defaultValue:0},borderColor:{attribute:`borderColor`,defaultValue:`#64748b`},image:{attribute:`image`,defaultValue:`data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==`},pieSize:0,...Object.assign({},...Array.from({length:12}).fill(0).map((e,t)=>({[`slice_${t}`]:+(t===0),[`color_${t}`]:`#888`}))),labelPosition:`below`,labelColor:e?`#fff`:`#333`,fillColor:e?`#111`:`#fff`,backdropColor:e?`#333`:`#fff`,backdropShadowColor:e?`rgba(0, 0, 0, 0.5)`:`rgba(0, 0, 0, 0.3)`}]}var nf;function rf(){return(rf=t((()=>{i(),s(),gu(),nf=[`#2ad4ac`,`#ea5353`,`#39a1e6`,`#f8a850`,`#B64E84`,`#92c652`,`#ac7dc4`,`#2c91bd`,`#f8d653`,`#D16082`,`#52c8d7`,`#475065`]})))()}function af(e,t){return typeof e==`number`?e:t}function of(e){let{cornerRadius:t,rotation:n}=e??{},r=af(t,0),i=af(n,0);return{name:`folder`,glsl:`${Bi}
float sdf_folder(vec2 uv, float size, float cornerRadius, float rotation) {
    // Apply rotation if needed
  vec2 p = uv;
  if (rotation != 0.0) {
    p = rotate2D(rotation) * p;
    }

    // A folder is the union of a wide body panel and a smaller tab flap that
    // rises above the body's top-left. Each panel is a rounded box; the union is
    // the closer of the two distances.
  float s = size;
  float cr = cornerRadius * s;

    // Body: the main panel, wide and sitting just below the origin.
  vec2 bodyD = abs(p - vec2(0.0, -0.05 * s)) - vec2(0.72 * s, 0.50 * s) + cr;
  float body = length(max(bodyD, 0.0)) + min(max(bodyD.x, bodyD.y), 0.0) - cr;

    // Tab: the top-left flap, its top edge poking above the body.
  vec2 tabD = abs(p - vec2(-0.43 * s, 0.44 * s)) - vec2(0.29 * s, 0.20 * s) + cr;
  float tab = length(max(tabD, 0.0)) + min(max(tabD.x, tabD.y), 0.0) - cr;

    // Union of the two panels.
  return min(body, tab);
}
`,uniforms:[{name:`u_cornerRadius`,type:`float`,value:r},{name:`u_rotation`,type:`float`,value:i}],inradiusFactor:Math.SQRT1_2}}function sf(){return(sf=t((()=>{Mo()})))()}function cf({data:e,children:t}){let n=(0,lf.useRef)(null),r=p(),[i,a]=(0,lf.useState)();return(0,lf.useEffect)(()=>{if(n.current){let t=new Wd(e,n.current,{settings:{autoRescale:!1,autoRescaleContent:`nodes`,stagePadding:40,enableNodeDrag:!0,enableEdgeEvents:!0,renderEdgeLabels:!0,cameraPanBoundaries:!0},edgeReducer:Zd,nodeReducer:ef,styles:{edges:Qd(r),nodes:tf(r)},primitives:{edges:{paths:[Ln(),Eo(),Oo(),Do()],extremities:[ko()],label:{fontSizeMode:`fixed`},layers:[In({color:{attribute:`color`}}),To({dashColor:{attribute:`dashColor`},dashSize:{attribute:`dashSize`},gapSize:{attribute:`gapSize`}})]},nodes:{shapes:[Nn(),vo(),bo(),So(),of()],layers:[cl({slices:Array.from({length:12}).fill(0).map((e,t)=>({color:{attribute:`color_${t}`},value:{attribute:`slice_${t}`}}))}),$s({borders:[{mode:`relative`,size:0,color:{attribute:`color`}},{size:{attribute:`border`},color:{attribute:`borderColor`}},{mode:`pixels`,size:1,color:{attribute:`fillColor`}},{size:{attribute:`pieSize`,default:0},color:`transparent`,fill:!1},{mode:`pixels`,size:4,color:{attribute:`fillColor`}},{color:{attribute:`color`},fill:!0}]}),Bc({padding:.5})]}}});return a(t),e.on(`layoutDone`,()=>{requestAnimationFrame(()=>{Sl(t,e.nodes(),{animate:!0}).then(()=>{t.getCamera().setState({ratio:t.getCamera().ratio*1.15})})})}),()=>{t&&t.kill()}}},[]),(0,lf.useLayoutEffect)(()=>{i&&(i.stylesDeclaration={edges:Qd(r),nodes:tf(r)},i.refresh())},[r]),(0,uf.jsx)(Yd,{value:{data:e,sigma:i},children:(0,uf.jsxs)(d,{children:[(0,uf.jsx)(`div`,{className:`area-content overflow-hidden`,ref:n}),t]})})}var lf,uf;function df(){return(df=t((()=>{f(),ec(),Jc(),dl(),Tl(),lf=r(),Gd(),Mo(),Xd(),$d(),rf(),sf(),uf=c(),cf.__docgenInfo={description:``,methods:[],displayName:`GraphViewer`,props:{data:{required:!0,tsType:{name:`Graph`,elements:[{name:`N`},{name:`E`}],raw:`Graph<N, E>`},description:``},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})))()}function ff(){return(ff=t((()=>{zt(),df()})))()}var pf,mf,hf;function gf(){return(gf=t((()=>{pf=[{id:`gray`,color:`#888`,label:`Gray`},{id:`blue`,color:`#26619c`,label:`Blue`},{id:`brown`,color:`#3d2b1f`,label:`Brown`},{id:`red`,color:`#990000`,label:`Red`},{id:`green`,color:`#006a4e`,label:`Green`},{id:`yellow`,color:`#ffd800`,label:`Yellow`},{id:`orange`,color:`#f28500`,label:`Orange`},{id:`purple`,color:`#800080`,label:`Purple`},{id:`pink`,color:`#c71585`,label:`Pink`},{id:`red-scarlet`,color:`#ff2400`,label:`Scarlet`},{id:`red-vermillion`,color:`#e34234`,label:`Vermillion`},{id:`red-crimson`,color:`#990000`,label:`Crimson`},{id:`red-maroon`,color:`#800000`,label:`Maroon`},{id:`red-ferrari`,color:`#ff2800`,label:`Ferrari`},{id:`red-ruby`,color:`#b31b1b`,label:`Ruby`},{id:`green-emerald`,color:`#50c878`,label:`Emerald`},{id:`green-jade`,color:`#00a86b`,label:`Jade`},{id:`green-jungle`,color:`#228b22`,label:`Jungle`},{id:`green-bottle`,color:`#006a4e`,label:`Bottle`},{id:`green-sea`,color:`#2e8b57`,label:`Sea`},{id:`orange-pumpkin`,color:`#ff7518`,label:`Pumpkin`},{id:`orange-flame`,color:`#e25822`,label:`Flame`},{id:`orange-sunset`,color:`#fd5e53`,label:`Sunset`},{id:`orange-mango`,color:`#ff8243`,label:`Mango`},{id:`orange-carrot`,color:`#ed9121`,label:`Carrot`},{id:`yellow-amber`,color:`#ffbf00`,label:`Amber`},{id:`yellow-gold`,color:`#ffd700`,label:`Gold`},{id:`yellow-lemon`,color:`#fff700`,label:`Lemon`},{id:`yellow-schoolbus`,color:`#ffd800`,label:`Schoolbus`},{id:`yellow-saffron`,color:`#f4c430`,label:`Saffron`},{id:`blue-cerulean`,color:`#007ba7`,label:`Cerulean`},{id:`blue-royal`,color:`#4169e1`,label:`Royal Blue`},{id:`blue-denim`,color:`#1560bd`,label:`Denim`},{id:`blue-persian`,color:`#1c39bb`,label:`Persian Blue`},{id:`blue-azure`,color:`#007fff`,label:`Azure Blue`},{id:`blue-sapphire`,color:`#0f52ba`,label:`Sapphire`},{id:`purple-orchid`,color:`#9932cc`,label:`Orchid`},{id:`purple-lilac`,color:`#9955bb`,label:`Lilac`},{id:`purple-ube`,color:`#8878c3`,label:`Ube`},{id:`purple-lavender`,color:`#967bb6`,label:`Lavender`},{id:`purple-amethyst`,color:`#9966cc`,label:`Amethyst`},{id:`pink-rose`,color:`#ff007f`,label:`Rose Pink`},{id:`pink-fuchsia`,color:`#ca2c92`,label:`Fuchsia`},{id:`pink-cerise`,color:`#da1d81`,label:`Cerise`},{id:`pink-hot`,color:`#ff69b4`,label:`Hot Pink`},{id:`pink-raspberry`,color:`#e25098`,label:`Raspberry`},{id:`brown-taupe`,color:`#967117`,label:`Taupe`},{id:`brown-sepia`,color:`#704214`,label:`Sepia`},{id:`brown-saddle`,color:`#8b4513`,label:`Saddle Brown`},{id:`brown-coffee`,color:`#6f4e37`,label:`Coffee`},{id:`brown-sienna`,color:`#882d17`,label:`Sienna`},{id:`brown-desert`,color:`#c19a6b`,label:`Desert`}],mf=[{id:`gray-blue`,source:`gray`,target:`blue`},{id:`gray-brown`,source:`gray`,target:`brown`},{id:`gray-red`,source:`gray`,target:`red`},{id:`gray-green`,source:`gray`,target:`green`},{id:`gray-yellow`,source:`gray`,target:`yellow`},{id:`gray-orange`,source:`gray`,target:`orange`},{id:`gray-pink`,source:`gray`,target:`pink`},{id:`gray-purple`,source:`gray`,target:`purple`},{id:`red-scarlet`,color:`#990000`,source:`red`,target:`red-scarlet`},{id:`red-vermillion`,color:`#990000`,source:`red`,target:`red-vermillion`},{id:`red-crimson`,color:`#990000`,source:`red`,target:`red-crimson`},{id:`red-maroon`,color:`#990000`,source:`red`,target:`red-maroon`},{id:`red-ferrari`,color:`#990000`,source:`red`,target:`red-ferrari`},{id:`red-ruby`,color:`#990000`,source:`red`,target:`red-ruby`},{id:`green-emerald`,color:`#006a4e`,source:`green`,target:`green-emerald`},{id:`green-jade`,color:`#006a4e`,source:`green`,target:`green-jade`},{id:`green-jungle`,color:`#006a4e`,source:`green`,target:`green-jungle`},{id:`green-bottle`,color:`#006a4e`,source:`green`,target:`green-bottle`},{id:`green-sea`,color:`#006a4e`,source:`green`,target:`green-sea`},{id:`orange-pumpkin`,color:`#f28500`,source:`orange`,target:`orange-pumpkin`},{id:`orange-flame`,color:`#f28500`,source:`orange`,target:`orange-flame`},{id:`orange-sunset`,color:`#f28500`,source:`orange`,target:`orange-sunset`},{id:`orange-mango`,color:`#f28500`,source:`orange`,target:`orange-mango`},{id:`orange-carrot`,color:`#f28500`,source:`orange`,target:`orange-carrot`},{id:`yellow-amber`,color:`#ffd800`,source:`yellow`,target:`yellow-amber`},{id:`yellow-gold`,color:`#ffd800`,source:`yellow`,target:`yellow-gold`},{id:`yellow-lemon`,color:`#ffd800`,source:`yellow`,target:`yellow-lemon`},{id:`yellow-saffron`,color:`#ffd800`,source:`yellow`,target:`yellow-saffron`},{id:`yellow-schoolbus`,color:`#ffd800`,source:`yellow`,target:`yellow-schoolbus`},{id:`blue-cerulean`,color:`#26619c`,source:`blue`,target:`blue-cerulean`},{id:`blue-royal`,color:`#26619c`,source:`blue`,target:`blue-royal`},{id:`blue-persian`,color:`#26619c`,source:`blue`,target:`blue-persian`},{id:`blue-denim`,color:`#26619c`,source:`blue`,target:`blue-denim`},{id:`blue-azure`,color:`#26619c`,source:`blue`,target:`blue-azure`},{id:`blue-sapphire`,color:`#26619c`,source:`blue`,target:`blue-sapphire`},{id:`purple-orchid`,color:`#800080`,source:`purple`,target:`purple-orchid`},{id:`purple-lilac`,color:`#800080`,source:`purple`,target:`purple-lilac`},{id:`purple-ube`,color:`#800080`,source:`purple`,target:`purple-ube`},{id:`purple-lavender`,color:`#800080`,source:`purple`,target:`purple-lavender`},{id:`purple-amethyst`,color:`#800080`,source:`purple`,target:`purple-amethyst`},{id:`pink-rose`,color:`#c71585`,source:`pink`,target:`pink-rose`},{id:`pink-cerise`,color:`#c71585`,source:`pink`,target:`pink-cerise`},{id:`pink-fuchsia`,color:`#c71585`,source:`pink`,target:`pink-fuchsia`},{id:`pink-hot`,color:`#c71585`,source:`pink`,target:`pink-hot`},{id:`pink-raspberry`,color:`#c71585`,source:`pink`,target:`pink-raspberry`},{id:`brown-taupe`,color:`#3d2b1f`,source:`brown`,target:`brown-taupe`},{id:`brown-sepia`,color:`#3d2b1f`,source:`brown`,target:`brown-sepia`},{id:`brown-saddle`,color:`#3d2b1f`,source:`brown`,target:`brown-saddle`},{id:`brown-coffee`,color:`#3d2b1f`,source:`brown`,target:`brown-coffee`},{id:`brown-sienna`,color:`#3d2b1f`,source:`brown`,target:`brown-sienna`},{id:`brown-desert`,color:`#3d2b1f`,source:`brown`,target:`brown-desert`}],hf={nodes:pf,edges:mf}})))()}var _f,vf,yf,bf,xf,Sf,Cf;function wf(){return(wf=t((()=>{u(),ff(),_f=r(),gf(),vf=c(),yf={title:`@graph/Graph`,parameters:{layout:`fullscreen`}},bf={render(){let e=(0,_f.useMemo)(()=>{let e=new Rt;return e.importGraph(hf),e},[]);return(0,vf.jsx)(l,{className:`w-screen h-screen`,children:(0,vf.jsx)(cf,{data:e})})}},xf={render(){let e=(0,_f.useMemo)(()=>{let e=new Rt;return e.importGraph({nodes:[{id:`circle1`,label:`Circle`,x:0,y:0,color:`#2846bd`},{id:`circle2`,label:`Circle Border`,x:0,y:-10,borderColor:`#2846bd`,border:.2},{id:`circle3`,label:`Circle Pie`,x:0,y:-20,color:`#2846bd`,segments:[.2,.3,.4]},{id:`square1`,shape:`square`,label:`Square`,x:10,y:0,color:`#2846bd`},{id:`square2`,shape:`square`,label:`Square Border`,x:10,y:-10,borderColor:`#2846bd`,border:.2},{id:`square3`,shape:`square`,label:`Square Pie`,x:10,y:-20,color:`#2846bd`,segments:[.2,.3,.4]},{id:`diamond1`,shape:`diamond`,label:`Diamond`,x:20,y:0,color:`#2846bd`},{id:`diamond2`,shape:`diamond`,label:`Diamond Border`,x:20,y:-10,borderColor:`#2846bd`,border:.2},{id:`diamond3`,shape:`diamond`,label:`Diamond Pie`,x:20,y:-20,color:`#2846bd`,segments:[.2,.3,.4]},{id:`triangle1`,shape:`triangle`,label:`Triangle`,x:30,y:0,color:`#2846bd`},{id:`triangle2`,shape:`triangle`,label:`Triangle Border`,x:30,y:-10,borderColor:`#2846bd`,border:.2},{id:`triangle3`,shape:`triangle`,label:`Triangle Pie`,x:30,y:-20,color:`#2846bd`,segments:[.2,.3,.4]},{id:`folder1`,group:!0,label:`Folder`,x:40,y:0,color:`#2846bd`},{id:`folder2`,group:!0,label:`Folder Border`,x:40,y:-10,borderColor:`#2846bd`,border:.2},{id:`folder3`,group:!0,label:`Folder Pie`,x:40,y:-20,color:`#2846bd`,segments:[.2,.3,.4]}],edges:[]},!1),e},[]);return(0,vf.jsx)(l,{className:`w-screen h-screen`,children:(0,vf.jsx)(cf,{data:e})})}},Sf={render(){let e=(0,_f.useMemo)(()=>{let e=new Rt;return e.importGraph({nodes:[{id:`node-1-1`,label:`Node 1`,x:0,y:0,borderColor:`#28bd57`,border:.2},{id:`node-1-2`,label:`Node 2`,x:40,y:0,borderColor:`#2846bd`,border:.2},{id:`node-1-3`,label:`Node 1`,x:80,y:0,borderColor:`#28bd57`,border:.2},{id:`node-1-4`,label:`Node 2`,x:120,y:0,borderColor:`#2846bd`,border:.2},{id:`node-2-1`,label:`Node 1`,x:0,y:-40,borderColor:`#28bd57`,border:.2},{id:`node-2-2`,label:`Node 2`,x:40,y:-20,borderColor:`#2846bd`,border:.2},{id:`node-2-3`,label:`Node 1`,x:80,y:-40,borderColor:`#28bd57`,border:.2},{id:`node-2-4`,label:`Node 2`,x:120,y:-40,borderColor:`#2846bd`,border:.2},{id:`node-3-1`,label:`Node 1`,x:0,y:-80,borderColor:`#28bd57`,border:.2},{id:`node-3-2`,label:`Node 2`,x:40,y:-60,borderColor:`#2846bd`,border:.2},{id:`node-3-3`,label:`Node 1`,x:80,y:-80,borderColor:`#28bd57`,border:.2},{id:`node-3-4`,label:`Node 2`,x:120,y:-80,borderColor:`#2846bd`,border:.2}],edges:[{id:`edge-1-0`,source:`node-1-1`,target:`node-1-2`,label:`Straight edge`,head:`arrow`},{id:`edge-1-1`,source:`node-1-3`,target:`node-1-4`,label:`Multi edge`,head:`arrow`},{id:`edge-1-2`,source:`node-1-3`,target:`node-1-4`,label:`Multi edge`,tail:`arrow`},{id:`edge-2-0`,source:`node-2-1`,target:`node-2-2`,style:`dotted`,path:`stepCurved`,color:`#b956a5`,label:`Step curve edge`},{id:`edge-2-1`,source:`node-2-3`,target:`node-2-4`,style:`dotted`,color:`#b956a5`,label:`Multi edge`},{id:`edge-2-2`,source:`node-2-3`,target:`node-2-4`,style:`dotted`,label:`Multi edge`},{id:`edge-2-3`,source:`node-2-3`,target:`node-2-4`,style:`dotted`,color:`#db7f2a`,label:`Multi edge`},{id:`edge-3-0`,source:`node-3-1`,target:`node-3-2`,style:`dashed`,path:`curvedS`,color:`#b956a5`,label:`S Curve edge`},{id:`edge-3-1`,source:`node-3-3`,target:`node-3-4`,style:`dashed`,color:`#b956a5`,label:`Multi edge`},{id:`edge-3-2`,source:`node-3-3`,target:`node-3-4`,style:`dashed`,label:`Multi edge`},{id:`edge-3-3`,source:`node-3-3`,target:`node-3-4`,style:`dashed`,color:`#db7f2a`,label:`Multi edge`}]},!1),e},[]);return(0,vf.jsx)(l,{className:`w-screen h-screen`,children:(0,vf.jsx)(cf,{data:e})})}},bf.parameters={...bf.parameters,docs:{...bf.parameters?.docs,source:{originalSource:`{
  render() {
    const graph = useMemo(() => {
      const graph = new Graph();
      graph.importGraph(colors);
      return graph;
    }, []);
    return <Layout className="w-screen h-screen">
        <GraphViewer data={graph} />
      </Layout>;
  }
}`,...bf.parameters?.docs?.source}}},xf.parameters={...xf.parameters,docs:{...xf.parameters?.docs,source:{originalSource:`{
  render() {
    const graph = useMemo(() => {
      const graph = new Graph();
      graph.importGraph({
        nodes: [{
          id: "circle1",
          label: "Circle",
          x: 0,
          y: 0,
          color: "#2846bd"
        }, {
          id: "circle2",
          label: "Circle Border",
          x: 0,
          y: -10,
          borderColor: "#2846bd",
          border: 0.2
        }, {
          id: "circle3",
          label: "Circle Pie",
          x: 0,
          y: -20,
          color: "#2846bd",
          segments: [0.2, 0.3, 0.4]
        }, {
          id: "square1",
          shape: "square",
          label: "Square",
          x: 10,
          y: 0,
          color: "#2846bd"
        }, {
          id: "square2",
          shape: "square",
          label: "Square Border",
          x: 10,
          y: -10,
          borderColor: "#2846bd",
          border: 0.2
        }, {
          id: "square3",
          shape: "square",
          label: "Square Pie",
          x: 10,
          y: -20,
          color: "#2846bd",
          segments: [0.2, 0.3, 0.4]
        }, {
          id: "diamond1",
          shape: "diamond",
          label: "Diamond",
          x: 20,
          y: 0,
          color: "#2846bd"
        }, {
          id: "diamond2",
          shape: "diamond",
          label: "Diamond Border",
          x: 20,
          y: -10,
          borderColor: "#2846bd",
          border: 0.2
        }, {
          id: "diamond3",
          shape: "diamond",
          label: "Diamond Pie",
          x: 20,
          y: -20,
          color: "#2846bd",
          segments: [0.2, 0.3, 0.4]
        }, {
          id: "triangle1",
          shape: "triangle",
          label: "Triangle",
          x: 30,
          y: 0,
          color: "#2846bd"
        }, {
          id: "triangle2",
          shape: "triangle",
          label: "Triangle Border",
          x: 30,
          y: -10,
          borderColor: "#2846bd",
          border: 0.2
        }, {
          id: "triangle3",
          shape: "triangle",
          label: "Triangle Pie",
          x: 30,
          y: -20,
          color: "#2846bd",
          segments: [0.2, 0.3, 0.4]
        }, {
          id: "folder1",
          group: true,
          label: "Folder",
          x: 40,
          y: 0,
          color: "#2846bd"
        }, {
          id: "folder2",
          group: true,
          label: "Folder Border",
          x: 40,
          y: -10,
          borderColor: "#2846bd",
          border: 0.2
        }, {
          id: "folder3",
          group: true,
          label: "Folder Pie",
          x: 40,
          y: -20,
          color: "#2846bd",
          segments: [0.2, 0.3, 0.4]
        }],
        edges: []
      }, false);
      return graph;
    }, []);
    return <Layout className="w-screen h-screen">
        <GraphViewer data={graph} />
      </Layout>;
  }
}`,...xf.parameters?.docs?.source}}},Sf.parameters={...Sf.parameters,docs:{...Sf.parameters?.docs,source:{originalSource:`{
  render() {
    const graph = useMemo(() => {
      const graph = new Graph();
      graph.importGraph({
        nodes: [{
          id: "node-1-1",
          label: "Node 1",
          x: 0,
          y: 0,
          borderColor: "#28bd57",
          border: 0.2
        }, {
          id: "node-1-2",
          label: "Node 2",
          x: 40,
          y: 0,
          borderColor: "#2846bd",
          border: 0.2
        }, {
          id: "node-1-3",
          label: "Node 1",
          x: 80,
          y: 0,
          borderColor: "#28bd57",
          border: 0.2
        }, {
          id: "node-1-4",
          label: "Node 2",
          x: 120,
          y: 0,
          borderColor: "#2846bd",
          border: 0.2
        }, {
          id: "node-2-1",
          label: "Node 1",
          x: 0,
          y: -40,
          borderColor: "#28bd57",
          border: 0.2
        }, {
          id: "node-2-2",
          label: "Node 2",
          x: 40,
          y: -20,
          borderColor: "#2846bd",
          border: 0.2
        }, {
          id: "node-2-3",
          label: "Node 1",
          x: 80,
          y: -40,
          borderColor: "#28bd57",
          border: 0.2
        }, {
          id: "node-2-4",
          label: "Node 2",
          x: 120,
          y: -40,
          borderColor: "#2846bd",
          border: 0.2
        }, {
          id: "node-3-1",
          label: "Node 1",
          x: 0,
          y: -80,
          borderColor: "#28bd57",
          border: 0.2
        }, {
          id: "node-3-2",
          label: "Node 2",
          x: 40,
          y: -60,
          borderColor: "#2846bd",
          border: 0.2
        }, {
          id: "node-3-3",
          label: "Node 1",
          x: 80,
          y: -80,
          borderColor: "#28bd57",
          border: 0.2
        }, {
          id: "node-3-4",
          label: "Node 2",
          x: 120,
          y: -80,
          borderColor: "#2846bd",
          border: 0.2
        }],
        edges: [{
          id: "edge-1-0",
          source: "node-1-1",
          target: "node-1-2",
          label: "Straight edge",
          head: "arrow"
        }, {
          id: "edge-1-1",
          source: "node-1-3",
          target: "node-1-4",
          label: "Multi edge",
          head: "arrow"
        }, {
          id: "edge-1-2",
          source: "node-1-3",
          target: "node-1-4",
          label: "Multi edge",
          tail: "arrow"
        }, {
          id: "edge-2-0",
          source: "node-2-1",
          target: "node-2-2",
          style: "dotted",
          path: "stepCurved",
          color: "#b956a5",
          label: "Step curve edge"
        }, {
          id: "edge-2-1",
          source: "node-2-3",
          target: "node-2-4",
          style: "dotted",
          color: "#b956a5",
          label: "Multi edge"
        }, {
          id: "edge-2-2",
          source: "node-2-3",
          target: "node-2-4",
          style: "dotted",
          label: "Multi edge"
        }, {
          id: "edge-2-3",
          source: "node-2-3",
          target: "node-2-4",
          style: "dotted",
          color: "#db7f2a",
          label: "Multi edge"
        }, {
          id: "edge-3-0",
          source: "node-3-1",
          target: "node-3-2",
          style: "dashed",
          path: "curvedS",
          color: "#b956a5",
          label: "S Curve edge"
        }, {
          id: "edge-3-1",
          source: "node-3-3",
          target: "node-3-4",
          style: "dashed",
          color: "#b956a5",
          label: "Multi edge"
        }, {
          id: "edge-3-2",
          source: "node-3-3",
          target: "node-3-4",
          style: "dashed",
          label: "Multi edge"
        }, {
          id: "edge-3-3",
          source: "node-3-3",
          target: "node-3-4",
          style: "dashed",
          color: "#db7f2a",
          label: "Multi edge"
        }]
      }, false);
      return graph;
    }, []);
    return <Layout className="w-screen h-screen">
        <GraphViewer data={graph} />
      </Layout>;
  }
}`,...Sf.parameters?.docs?.source}}},Cf=[`_Graph`,`Nodes`,`Edges`]})))()}wf();export{Sf as Edges,xf as Nodes,bf as _Graph,Cf as __namedExportsOrder,yf as default};