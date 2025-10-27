const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/react-DxvJl8kS.js","assets/mixin-D3UDm--6.js","assets/hls-Bm3F2dIq.js","assets/react-BrBFAzQp.js","assets/index-BrV1crBo.js"])))=>i.map(i=>d[i]);
(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function u(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(c){if(c.ep)return;c.ep=!0;const f=u(c);fetch(c.href,f)}})();function ar(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Oc={exports:{}},Bl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function J2(){if(em)return Bl;em=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function u(o,c,f){var p=null;if(f!==void 0&&(p=""+f),c.key!==void 0&&(p=""+c.key),"key"in c){f={};for(var y in c)y!=="key"&&(f[y]=c[y])}else f=c;return c=f.ref,{$$typeof:a,type:o,key:p,ref:c!==void 0?c:null,props:f}}return Bl.Fragment=l,Bl.jsx=u,Bl.jsxs=u,Bl}var tm;function F2(){return tm||(tm=1,Oc.exports=J2()),Oc.exports}var h=F2(),jc={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function W2(){if(nm)return pe;nm=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),p=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),w=Symbol.iterator;function A(C){return C===null||typeof C!="object"?null:(C=w&&C[w]||C["@@iterator"],typeof C=="function"?C:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,Z={};function F(C,V,ie){this.props=C,this.context=V,this.refs=Z,this.updater=ie||R}F.prototype.isReactComponent={},F.prototype.setState=function(C,V){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,V,"setState")},F.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function M(){}M.prototype=F.prototype;function H(C,V,ie){this.props=C,this.context=V,this.refs=Z,this.updater=ie||R}var G=H.prototype=new M;G.constructor=H,q(G,F.prototype),G.isPureReactComponent=!0;var L=Array.isArray;function z(){}var K={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function X(C,V,ie){var ae=ie.ref;return{$$typeof:a,type:C,key:V,ref:ae!==void 0?ae:null,props:ie}}function le(C,V){return X(C.type,V,C.props)}function P(C){return typeof C=="object"&&C!==null&&C.$$typeof===a}function N(C){var V={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(ie){return V[ie]})}var ee=/\/+/g;function ne(C,V){return typeof C=="object"&&C!==null&&C.key!=null?N(""+C.key):V.toString(36)}function T(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(z,z):(C.status="pending",C.then(function(V){C.status==="pending"&&(C.status="fulfilled",C.value=V)},function(V){C.status==="pending"&&(C.status="rejected",C.reason=V)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function j(C,V,ie,ae,se){var he=typeof C;(he==="undefined"||he==="boolean")&&(C=null);var ye=!1;if(C===null)ye=!0;else switch(he){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(C.$$typeof){case a:case l:ye=!0;break;case S:return ye=C._init,j(ye(C._payload),V,ie,ae,se)}}if(ye)return se=se(C),ye=ae===""?"."+ne(C,0):ae,L(se)?(ie="",ye!=null&&(ie=ye.replace(ee,"$&/")+"/"),j(se,V,ie,"",function(St){return St})):se!=null&&(P(se)&&(se=le(se,ie+(se.key==null||C&&C.key===se.key?"":(""+se.key).replace(ee,"$&/")+"/")+ye)),V.push(se)),1;ye=0;var Ue=ae===""?".":ae+":";if(L(C))for(var Te=0;Te<C.length;Te++)ae=C[Te],he=Ue+ne(ae,Te),ye+=j(ae,V,ie,he,se);else if(Te=A(C),typeof Te=="function")for(C=Te.call(C),Te=0;!(ae=C.next()).done;)ae=ae.value,he=Ue+ne(ae,Te++),ye+=j(ae,V,ie,he,se);else if(he==="object"){if(typeof C.then=="function")return j(T(C),V,ie,ae,se);throw V=String(C),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return ye}function $(C,V,ie){if(C==null)return C;var ae=[],se=0;return j(C,ae,"","",function(he){return V.call(ie,he,se++)}),ae}function J(C){if(C._status===-1){var V=C._result;V=V(),V.then(function(ie){(C._status===0||C._status===-1)&&(C._status=1,C._result=ie)},function(ie){(C._status===0||C._status===-1)&&(C._status=2,C._result=ie)}),C._status===-1&&(C._status=0,C._result=V)}if(C._status===1)return C._result.default;throw C._result}var re=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},ce={map:$,forEach:function(C,V,ie){$(C,function(){V.apply(this,arguments)},ie)},count:function(C){var V=0;return $(C,function(){V++}),V},toArray:function(C){return $(C,function(V){return V})||[]},only:function(C){if(!P(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return pe.Activity=x,pe.Children=ce,pe.Component=F,pe.Fragment=u,pe.Profiler=c,pe.PureComponent=H,pe.StrictMode=o,pe.Suspense=v,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,pe.__COMPILER_RUNTIME={__proto__:null,c:function(C){return K.H.useMemoCache(C)}},pe.cache=function(C){return function(){return C.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(C,V,ie){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var ae=q({},C.props),se=C.key;if(V!=null)for(he in V.key!==void 0&&(se=""+V.key),V)!k.call(V,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&V.ref===void 0||(ae[he]=V[he]);var he=arguments.length-2;if(he===1)ae.children=ie;else if(1<he){for(var ye=Array(he),Ue=0;Ue<he;Ue++)ye[Ue]=arguments[Ue+2];ae.children=ye}return X(C.type,se,ae)},pe.createContext=function(C){return C={$$typeof:p,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:f,_context:C},C},pe.createElement=function(C,V,ie){var ae,se={},he=null;if(V!=null)for(ae in V.key!==void 0&&(he=""+V.key),V)k.call(V,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(se[ae]=V[ae]);var ye=arguments.length-2;if(ye===1)se.children=ie;else if(1<ye){for(var Ue=Array(ye),Te=0;Te<ye;Te++)Ue[Te]=arguments[Te+2];se.children=Ue}if(C&&C.defaultProps)for(ae in ye=C.defaultProps,ye)se[ae]===void 0&&(se[ae]=ye[ae]);return X(C,he,se)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(C){return{$$typeof:y,render:C}},pe.isValidElement=P,pe.lazy=function(C){return{$$typeof:S,_payload:{_status:-1,_result:C},_init:J}},pe.memo=function(C,V){return{$$typeof:m,type:C,compare:V===void 0?null:V}},pe.startTransition=function(C){var V=K.T,ie={};K.T=ie;try{var ae=C(),se=K.S;se!==null&&se(ie,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(z,re)}catch(he){re(he)}finally{V!==null&&ie.types!==null&&(V.types=ie.types),K.T=V}},pe.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},pe.use=function(C){return K.H.use(C)},pe.useActionState=function(C,V,ie){return K.H.useActionState(C,V,ie)},pe.useCallback=function(C,V){return K.H.useCallback(C,V)},pe.useContext=function(C){return K.H.useContext(C)},pe.useDebugValue=function(){},pe.useDeferredValue=function(C,V){return K.H.useDeferredValue(C,V)},pe.useEffect=function(C,V){return K.H.useEffect(C,V)},pe.useEffectEvent=function(C){return K.H.useEffectEvent(C)},pe.useId=function(){return K.H.useId()},pe.useImperativeHandle=function(C,V,ie){return K.H.useImperativeHandle(C,V,ie)},pe.useInsertionEffect=function(C,V){return K.H.useInsertionEffect(C,V)},pe.useLayoutEffect=function(C,V){return K.H.useLayoutEffect(C,V)},pe.useMemo=function(C,V){return K.H.useMemo(C,V)},pe.useOptimistic=function(C,V){return K.H.useOptimistic(C,V)},pe.useReducer=function(C,V,ie){return K.H.useReducer(C,V,ie)},pe.useRef=function(C){return K.H.useRef(C)},pe.useState=function(C){return K.H.useState(C)},pe.useSyncExternalStore=function(C,V,ie){return K.H.useSyncExternalStore(C,V,ie)},pe.useTransition=function(){return K.H.useTransition()},pe.version="19.2.0",pe}var am;function va(){return am||(am=1,jc.exports=W2()),jc.exports}var b=va();const Ce=ar(b);var zc={exports:{}},Hl={},Ac={exports:{}},Mc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function I2(){return im||(im=1,(function(a){function l(j,$){var J=j.length;j.push($);e:for(;0<J;){var re=J-1>>>1,ce=j[re];if(0<c(ce,$))j[re]=$,j[J]=ce,J=re;else break e}}function u(j){return j.length===0?null:j[0]}function o(j){if(j.length===0)return null;var $=j[0],J=j.pop();if(J!==$){j[0]=J;e:for(var re=0,ce=j.length,C=ce>>>1;re<C;){var V=2*(re+1)-1,ie=j[V],ae=V+1,se=j[ae];if(0>c(ie,J))ae<ce&&0>c(se,ie)?(j[re]=se,j[ae]=J,re=ae):(j[re]=ie,j[V]=J,re=V);else if(ae<ce&&0>c(se,J))j[re]=se,j[ae]=J,re=ae;else break e}}return $}function c(j,$){var J=j.sortIndex-$.sortIndex;return J!==0?J:j.id-$.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var p=Date,y=p.now();a.unstable_now=function(){return p.now()-y}}var v=[],m=[],S=1,x=null,w=3,A=!1,R=!1,q=!1,Z=!1,F=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function G(j){for(var $=u(m);$!==null;){if($.callback===null)o(m);else if($.startTime<=j)o(m),$.sortIndex=$.expirationTime,l(v,$);else break;$=u(m)}}function L(j){if(q=!1,G(j),!R)if(u(v)!==null)R=!0,z||(z=!0,N());else{var $=u(m);$!==null&&T(L,$.startTime-j)}}var z=!1,K=-1,k=5,X=-1;function le(){return Z?!0:!(a.unstable_now()-X<k)}function P(){if(Z=!1,z){var j=a.unstable_now();X=j;var $=!0;try{e:{R=!1,q&&(q=!1,M(K),K=-1),A=!0;var J=w;try{t:{for(G(j),x=u(v);x!==null&&!(x.expirationTime>j&&le());){var re=x.callback;if(typeof re=="function"){x.callback=null,w=x.priorityLevel;var ce=re(x.expirationTime<=j);if(j=a.unstable_now(),typeof ce=="function"){x.callback=ce,G(j),$=!0;break t}x===u(v)&&o(v),G(j)}else o(v);x=u(v)}if(x!==null)$=!0;else{var C=u(m);C!==null&&T(L,C.startTime-j),$=!1}}break e}finally{x=null,w=J,A=!1}$=void 0}}finally{$?N():z=!1}}}var N;if(typeof H=="function")N=function(){H(P)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,ne=ee.port2;ee.port1.onmessage=P,N=function(){ne.postMessage(null)}}else N=function(){F(P,0)};function T(j,$){K=F(function(){j(a.unstable_now())},$)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(j){j.callback=null},a.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<j?Math.floor(1e3/j):5},a.unstable_getCurrentPriorityLevel=function(){return w},a.unstable_next=function(j){switch(w){case 1:case 2:case 3:var $=3;break;default:$=w}var J=w;w=$;try{return j()}finally{w=J}},a.unstable_requestPaint=function(){Z=!0},a.unstable_runWithPriority=function(j,$){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var J=w;w=j;try{return $()}finally{w=J}},a.unstable_scheduleCallback=function(j,$,J){var re=a.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?re+J:re):J=re,j){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=J+ce,j={id:S++,callback:$,priorityLevel:j,startTime:J,expirationTime:ce,sortIndex:-1},J>re?(j.sortIndex=J,l(m,j),u(v)===null&&j===u(m)&&(q?(M(K),K=-1):q=!0,T(L,J-re))):(j.sortIndex=ce,l(v,j),R||A||(R=!0,z||(z=!0,N()))),j},a.unstable_shouldYield=le,a.unstable_wrapCallback=function(j){var $=w;return function(){var J=w;w=$;try{return j.apply(this,arguments)}finally{w=J}}}})(Mc)),Mc}var lm;function eb(){return lm||(lm=1,Ac.exports=I2()),Ac.exports}var Dc={exports:{}},st={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function tb(){if(rm)return st;rm=1;var a=va();function l(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)m+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var o={d:{f:u,r:function(){throw Error(l(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(v,m,S){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:v,containerInfo:m,implementation:S}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return st.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,st.createPortal=function(v,m){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(l(299));return f(v,m,null,S)},st.flushSync=function(v){var m=p.T,S=o.p;try{if(p.T=null,o.p=2,v)return v()}finally{p.T=m,o.p=S,o.d.f()}},st.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(v,m))},st.prefetchDNS=function(v){typeof v=="string"&&o.d.D(v)},st.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var S=m.as,x=y(S,m.crossOrigin),w=typeof m.integrity=="string"?m.integrity:void 0,A=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;S==="style"?o.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:w,fetchPriority:A}):S==="script"&&o.d.X(v,{crossOrigin:x,integrity:w,fetchPriority:A,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},st.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var S=y(m.as,m.crossOrigin);o.d.M(v,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(v)},st.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var S=m.as,x=y(S,m.crossOrigin);o.d.L(v,S,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},st.preloadModule=function(v,m){if(typeof v=="string")if(m){var S=y(m.as,m.crossOrigin);o.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(v)},st.requestFormReset=function(v){o.d.r(v)},st.unstable_batchedUpdates=function(v,m){return v(m)},st.useFormState=function(v,m,S){return p.H.useFormState(v,m,S)},st.useFormStatus=function(){return p.H.useHostTransitionStatus()},st.version="19.2.0",st}var om;function k1(){if(om)return Dc.exports;om=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Dc.exports=tb(),Dc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function nb(){if(um)return Hl;um=1;var a=eb(),l=va(),u=k1();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(f(e)!==e)throw Error(o(188))}function m(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return v(r),e;if(s===i)return v(r),t;s=s.sibling}throw Error(o(188))}if(n.return!==i.return)n=r,i=s;else{for(var d=!1,g=r.child;g;){if(g===n){d=!0,n=r,i=s;break}if(g===i){d=!0,i=r,n=s;break}g=g.sibling}if(!d){for(g=s.child;g;){if(g===n){d=!0,n=s,i=r;break}if(g===i){d=!0,i=s,n=r;break}g=g.sibling}if(!d)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function S(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,w=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),H=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),X=Symbol.for("react.activity"),le=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function N(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Symbol.for("react.client.reference");function ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ee?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case F:return"Profiler";case Z:return"StrictMode";case L:return"Suspense";case z:return"SuspenseList";case X:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case H:return e.displayName||"Context";case M:return(e._context.displayName||"Context")+".Consumer";case G:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return t=e.displayName||null,t!==null?t:ne(e.type)||"Memo";case k:t=e._payload,e=e._init;try{return ne(e(t))}catch{}}return null}var T=Array.isArray,j=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},re=[],ce=-1;function C(e){return{current:e}}function V(e){0>ce||(e.current=re[ce],re[ce]=null,ce--)}function ie(e,t){ce++,re[ce]=e.current,e.current=t}var ae=C(null),se=C(null),he=C(null),ye=C(null);function Ue(e,t){switch(ie(he,t),ie(se,e),ie(ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?E0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=E0(t),e=C0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(ae),ie(ae,e)}function Te(){V(ae),V(se),V(he)}function St(e){e.memoizedState!==null&&ie(ye,e);var t=ae.current,n=C0(t,e.type);t!==n&&(ie(se,e),ie(ae,n))}function Kt(e){se.current===e&&(V(ae),V(se)),ye.current===e&&(V(ye),Nl._currentValue=J)}var ft,$a;function kt(e){if(ft===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ft=t&&t[1]||"",$a=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ft+e+$a}var Be=!1;function qa(e,t){if(!e||Be)return"";Be=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var te=function(){throw Error()};if(Object.defineProperty(te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(te,[])}catch(Q){var Y=Q}Reflect.construct(e,[],te)}else{try{te.call()}catch(Q){Y=Q}e.call(te.prototype)}}else{try{throw Error()}catch(Q){Y=Q}(te=e())&&typeof te.catch=="function"&&te.catch(function(){})}}catch(Q){if(Q&&Y&&typeof Q.stack=="string")return[Q.stack,Y.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),d=s[0],g=s[1];if(d&&g){var E=d.split(`
`),B=g.split(`
`);for(r=i=0;i<E.length&&!E[i].includes("DetermineComponentFrameRoot");)i++;for(;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;if(i===E.length||r===B.length)for(i=E.length-1,r=B.length-1;1<=i&&0<=r&&E[i]!==B[r];)r--;for(;1<=i&&0<=r;i--,r--)if(E[i]!==B[r]){if(i!==1||r!==1)do if(i--,r--,0>r||E[i]!==B[r]){var W=`
`+E[i].replace(" at new "," at ");return e.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",e.displayName)),W}while(1<=i&&0<=r);break}}}finally{Be=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?kt(n):""}function Vi(e,t){switch(e.tag){case 26:case 27:case 5:return kt(e.type);case 16:return kt("Lazy");case 13:return e.child!==t&&t!==null?kt("Suspense Fallback"):kt("Suspense");case 19:return kt("SuspenseList");case 0:case 15:return qa(e.type,!1);case 11:return qa(e.type.render,!1);case 1:return qa(e.type,!0);case 31:return kt("Activity");default:return""}}function ed(e){try{var t="",n=null;do t+=Vi(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var hu=Object.prototype.hasOwnProperty,pu=a.unstable_scheduleCallback,mu=a.unstable_cancelCallback,Og=a.unstable_shouldYield,jg=a.unstable_requestPaint,wt=a.unstable_now,zg=a.unstable_getCurrentPriorityLevel,td=a.unstable_ImmediatePriority,nd=a.unstable_UserBlockingPriority,ur=a.unstable_NormalPriority,Ag=a.unstable_LowPriority,ad=a.unstable_IdlePriority,Mg=a.log,Dg=a.unstable_setDisableYieldValue,Qi=null,Et=null;function qn(e){if(typeof Mg=="function"&&Dg(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Qi,e)}catch{}}var Ct=Math.clz32?Math.clz32:kg,Ng=Math.log,Lg=Math.LN2;function kg(e){return e>>>=0,e===0?32:31-(Ng(e)/Lg|0)|0}var sr=256,cr=262144,fr=4194304;function ga(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function dr(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var r=0,s=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var g=i&134217727;return g!==0?(i=g&~s,i!==0?r=ga(i):(d&=g,d!==0?r=ga(d):n||(n=g&~e,n!==0&&(r=ga(n))))):(g=i&~s,g!==0?r=ga(g):d!==0?r=ga(d):n||(n=i&~e,n!==0&&(r=ga(n)))),r===0?0:t!==0&&t!==r&&(t&s)===0&&(s=r&-r,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:r}function Zi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ug(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function id(){var e=fr;return fr<<=1,(fr&62914560)===0&&(fr=4194304),e}function vu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ki(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bg(e,t,n,i,r,s){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,E=e.expirationTimes,B=e.hiddenUpdates;for(n=d&~n;0<n;){var W=31-Ct(n),te=1<<W;g[W]=0,E[W]=-1;var Y=B[W];if(Y!==null)for(B[W]=null,W=0;W<Y.length;W++){var Q=Y[W];Q!==null&&(Q.lane&=-536870913)}n&=~te}i!==0&&ld(e,i,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(d&~t))}function ld(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Ct(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function rd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Ct(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}function od(e,t){var n=t&-t;return n=(n&42)!==0?1:gu(n),(n&(e.suspendedLanes|t))!==0?0:n}function gu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function yu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ud(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:Z0(e.type))}function sd(e,t){var n=$.p;try{return $.p=e,t()}finally{$.p=n}}var Yn=Math.random().toString(36).slice(2),it="__reactFiber$"+Yn,ht="__reactProps$"+Yn,Ya="__reactContainer$"+Yn,bu="__reactEvents$"+Yn,Hg="__reactListeners$"+Yn,$g="__reactHandles$"+Yn,cd="__reactResources$"+Yn,Pi="__reactMarker$"+Yn;function xu(e){delete e[it],delete e[ht],delete e[bu],delete e[Hg],delete e[$g]}function Ga(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ya]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=A0(e);e!==null;){if(n=e[it])return n;e=A0(e)}return t}e=n,n=e.parentNode}return null}function Xa(e){if(e=e[it]||e[Ya]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ji(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Va(e){var t=e[cd];return t||(t=e[cd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[Pi]=!0}var fd=new Set,dd={};function ya(e,t){Qa(e,t),Qa(e+"Capture",t)}function Qa(e,t){for(dd[e]=t,e=0;e<t.length;e++)fd.add(t[e])}var qg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hd={},pd={};function Yg(e){return hu.call(pd,e)?!0:hu.call(hd,e)?!1:qg.test(e)?pd[e]=!0:(hd[e]=!0,!1)}function hr(e,t,n){if(Yg(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function pr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function hn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function md(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gg(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(d){n=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Su(e){if(!e._valueTracker){var t=md(e)?"checked":"value";e._valueTracker=Gg(e,t,""+e[t])}}function vd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=md(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function mr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Xg=/[\n"\\]/g;function Bt(e){return e.replace(Xg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function wu(e,t,n,i,r,s,d,g){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ut(t)):e.value!==""+Ut(t)&&(e.value=""+Ut(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Eu(e,d,Ut(t)):n!=null?Eu(e,d,Ut(n)):i!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Ut(g):e.removeAttribute("name")}function gd(e,t,n,i,r,s,d,g){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Su(e);return}n=n!=null?""+Ut(n):"",t=t!=null?""+Ut(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=g?e.checked:!!i,e.defaultChecked=!!i,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),Su(e)}function Eu(e,t,n){t==="number"&&mr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Za(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function yd(e,t,n){if(t!=null&&(t=""+Ut(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ut(n):""}function bd(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(o(92));if(T(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Ut(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Su(e)}function Ka(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xd(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Vg.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Sd(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in t)i=t[r],t.hasOwnProperty(r)&&n[r]!==i&&xd(e,r,i)}else for(var s in t)t.hasOwnProperty(s)&&xd(e,s,t[s])}function Cu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vr(e){return Zg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function pn(){}var Tu=null;function Ru(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pa=null,Ja=null;function wd(e){var t=Xa(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;e:switch(e=t.stateNode,t.type){case"input":if(wu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Bt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=i[ht]||null;if(!r)throw Error(o(90));wu(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&vd(i)}break e;case"textarea":yd(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Za(e,!!n.multiple,t,!1)}}}var _u=!1;function Ed(e,t,n){if(_u)return e(t,n);_u=!0;try{var i=e(t);return i}finally{if(_u=!1,(Pa!==null||Ja!==null)&&(ao(),Pa&&(t=Pa,e=Ja,Ja=Pa=null,wd(t),e)))for(t=0;t<e.length;t++)wd(e[t])}}function Fi(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ht]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ou=!1;if(mn)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){Ou=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{Ou=!1}var Gn=null,ju=null,gr=null;function Cd(){if(gr)return gr;var e,t=ju,n=t.length,i,r="value"in Gn?Gn.value:Gn.textContent,s=r.length;for(e=0;e<n&&t[e]===r[e];e++);var d=n-e;for(i=1;i<=d&&t[n-i]===r[s-i];i++);return gr=r.slice(e,1<i?1-i:void 0)}function yr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function br(){return!0}function Td(){return!1}function pt(e){function t(n,i,r,s,d){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(s):s[g]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?br:Td,this.isPropagationStopped=Td,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),t}var ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xr=pt(ba),Ii=x({},ba,{view:0,detail:0}),Kg=pt(Ii),zu,Au,el,Sr=x({},Ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==el&&(el&&e.type==="mousemove"?(zu=e.screenX-el.screenX,Au=e.screenY-el.screenY):Au=zu=0,el=e),zu)},movementY:function(e){return"movementY"in e?e.movementY:Au}}),Rd=pt(Sr),Pg=x({},Sr,{dataTransfer:0}),Jg=pt(Pg),Fg=x({},Ii,{relatedTarget:0}),Mu=pt(Fg),Wg=x({},ba,{animationName:0,elapsedTime:0,pseudoElement:0}),Ig=pt(Wg),ey=x({},ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ty=pt(ey),ny=x({},ba,{data:0}),_d=pt(ny),ay={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ly={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ry(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ly[e])?!!t[e]:!1}function Du(){return ry}var oy=x({},Ii,{key:function(e){if(e.key){var t=ay[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Du,charCode:function(e){return e.type==="keypress"?yr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uy=pt(oy),sy=x({},Sr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Od=pt(sy),cy=x({},Ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Du}),fy=pt(cy),dy=x({},ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),hy=pt(dy),py=x({},Sr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),my=pt(py),vy=x({},ba,{newState:0,oldState:0}),gy=pt(vy),yy=[9,13,27,32],Nu=mn&&"CompositionEvent"in window,tl=null;mn&&"documentMode"in document&&(tl=document.documentMode);var by=mn&&"TextEvent"in window&&!tl,jd=mn&&(!Nu||tl&&8<tl&&11>=tl),zd=" ",Ad=!1;function Md(e,t){switch(e){case"keyup":return yy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fa=!1;function xy(e,t){switch(e){case"compositionend":return Dd(t);case"keypress":return t.which!==32?null:(Ad=!0,zd);case"textInput":return e=t.data,e===zd&&Ad?null:e;default:return null}}function Sy(e,t){if(Fa)return e==="compositionend"||!Nu&&Md(e,t)?(e=Cd(),gr=ju=Gn=null,Fa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jd&&t.locale!=="ko"?null:t.data;default:return null}}var wy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wy[e.type]:t==="textarea"}function Ld(e,t,n,i){Pa?Ja?Ja.push(i):Ja=[i]:Pa=i,t=co(t,"onChange"),0<t.length&&(n=new xr("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var nl=null,al=null;function Ey(e){g0(e,0)}function wr(e){var t=Ji(e);if(vd(t))return e}function kd(e,t){if(e==="change")return t}var Ud=!1;if(mn){var Lu;if(mn){var ku="oninput"in document;if(!ku){var Bd=document.createElement("div");Bd.setAttribute("oninput","return;"),ku=typeof Bd.oninput=="function"}Lu=ku}else Lu=!1;Ud=Lu&&(!document.documentMode||9<document.documentMode)}function Hd(){nl&&(nl.detachEvent("onpropertychange",$d),al=nl=null)}function $d(e){if(e.propertyName==="value"&&wr(al)){var t=[];Ld(t,al,e,Ru(e)),Ed(Ey,t)}}function Cy(e,t,n){e==="focusin"?(Hd(),nl=t,al=n,nl.attachEvent("onpropertychange",$d)):e==="focusout"&&Hd()}function Ty(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wr(al)}function Ry(e,t){if(e==="click")return wr(t)}function _y(e,t){if(e==="input"||e==="change")return wr(t)}function Oy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:Oy;function il(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!hu.call(t,r)||!Tt(e[r],t[r]))return!1}return!0}function qd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yd(e,t){var n=qd(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qd(n)}}function Gd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=mr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=mr(e.document)}return t}function Uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var jy=mn&&"documentMode"in document&&11>=document.documentMode,Wa=null,Bu=null,ll=null,Hu=!1;function Vd(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hu||Wa==null||Wa!==mr(i)||(i=Wa,"selectionStart"in i&&Uu(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ll&&il(ll,i)||(ll=i,i=co(Bu,"onSelect"),0<i.length&&(t=new xr("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Wa)))}function xa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ia={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionrun:xa("Transition","TransitionRun"),transitionstart:xa("Transition","TransitionStart"),transitioncancel:xa("Transition","TransitionCancel"),transitionend:xa("Transition","TransitionEnd")},$u={},Qd={};mn&&(Qd=document.createElement("div").style,"AnimationEvent"in window||(delete Ia.animationend.animation,delete Ia.animationiteration.animation,delete Ia.animationstart.animation),"TransitionEvent"in window||delete Ia.transitionend.transition);function Sa(e){if($u[e])return $u[e];if(!Ia[e])return e;var t=Ia[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qd)return $u[e]=t[n];return e}var Zd=Sa("animationend"),Kd=Sa("animationiteration"),Pd=Sa("animationstart"),zy=Sa("transitionrun"),Ay=Sa("transitionstart"),My=Sa("transitioncancel"),Jd=Sa("transitionend"),Fd=new Map,qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qu.push("scrollEnd");function Pt(e,t){Fd.set(e,t),ya(t,[e])}var Er=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ht=[],ei=0,Yu=0;function Cr(){for(var e=ei,t=Yu=ei=0;t<e;){var n=Ht[t];Ht[t++]=null;var i=Ht[t];Ht[t++]=null;var r=Ht[t];Ht[t++]=null;var s=Ht[t];if(Ht[t++]=null,i!==null&&r!==null){var d=i.pending;d===null?r.next=r:(r.next=d.next,d.next=r),i.pending=r}s!==0&&Wd(n,r,s)}}function Tr(e,t,n,i){Ht[ei++]=e,Ht[ei++]=t,Ht[ei++]=n,Ht[ei++]=i,Yu|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Gu(e,t,n,i){return Tr(e,t,n,i),Rr(e)}function wa(e,t){return Tr(e,null,null,t),Rr(e)}function Wd(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var r=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&t!==null&&(r=31-Ct(n),e=s.hiddenUpdates,i=e[r],i===null?e[r]=[t]:i.push(t),t.lane=n|536870912),s):null}function Rr(e){if(50<_l)throw _l=0,Ws=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ti={};function Dy(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,t,n,i){return new Dy(e,t,n,i)}function Xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vn(e,t){var n=e.alternate;return n===null?(n=Rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Id(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _r(e,t,n,i,r,s){var d=0;if(i=e,typeof e=="function")Xu(e)&&(d=1);else if(typeof e=="string")d=B2(e,n,ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case X:return e=Rt(31,n,t,r),e.elementType=X,e.lanes=s,e;case q:return Ea(n.children,r,s,t);case Z:d=8,r|=24;break;case F:return e=Rt(12,n,t,r|2),e.elementType=F,e.lanes=s,e;case L:return e=Rt(13,n,t,r),e.elementType=L,e.lanes=s,e;case z:return e=Rt(19,n,t,r),e.elementType=z,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:d=10;break e;case M:d=9;break e;case G:d=11;break e;case K:d=14;break e;case k:d=16,i=null;break e}d=29,n=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=Rt(d,n,t,r),t.elementType=e,t.type=i,t.lanes=s,t}function Ea(e,t,n,i){return e=Rt(7,e,i,t),e.lanes=n,e}function Vu(e,t,n){return e=Rt(6,e,null,t),e.lanes=n,e}function eh(e){var t=Rt(18,null,null,0);return t.stateNode=e,t}function Qu(e,t,n){return t=Rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var th=new WeakMap;function $t(e,t){if(typeof e=="object"&&e!==null){var n=th.get(e);return n!==void 0?n:(t={value:e,source:t,stack:ed(t)},th.set(e,t),t)}return{value:e,source:t,stack:ed(t)}}var ni=[],ai=0,Or=null,rl=0,qt=[],Yt=0,Xn=null,nn=1,an="";function gn(e,t){ni[ai++]=rl,ni[ai++]=Or,Or=e,rl=t}function nh(e,t,n){qt[Yt++]=nn,qt[Yt++]=an,qt[Yt++]=Xn,Xn=e;var i=nn;e=an;var r=32-Ct(i)-1;i&=~(1<<r),n+=1;var s=32-Ct(t)+r;if(30<s){var d=r-r%5;s=(i&(1<<d)-1).toString(32),i>>=d,r-=d,nn=1<<32-Ct(t)+r|n<<r|i,an=s+e}else nn=1<<s|n<<r|i,an=e}function Zu(e){e.return!==null&&(gn(e,1),nh(e,1,0))}function Ku(e){for(;e===Or;)Or=ni[--ai],ni[ai]=null,rl=ni[--ai],ni[ai]=null;for(;e===Xn;)Xn=qt[--Yt],qt[Yt]=null,an=qt[--Yt],qt[Yt]=null,nn=qt[--Yt],qt[Yt]=null}function ah(e,t){qt[Yt++]=nn,qt[Yt++]=an,qt[Yt++]=Xn,nn=t.id,an=t.overflow,Xn=e}var lt=null,He=null,Ee=!1,Vn=null,Gt=!1,Pu=Error(o(519));function Qn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ol($t(t,e)),Pu}function ih(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[it]=e,t[ht]=i,n){case"dialog":xe("cancel",t),xe("close",t);break;case"iframe":case"object":case"embed":xe("load",t);break;case"video":case"audio":for(n=0;n<jl.length;n++)xe(jl[n],t);break;case"source":xe("error",t);break;case"img":case"image":case"link":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"input":xe("invalid",t),gd(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":xe("invalid",t);break;case"textarea":xe("invalid",t),bd(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||S0(t.textContent,n)?(i.popover!=null&&(xe("beforetoggle",t),xe("toggle",t)),i.onScroll!=null&&xe("scroll",t),i.onScrollEnd!=null&&xe("scrollend",t),i.onClick!=null&&(t.onclick=pn),t=!0):t=!1,t||Qn(e,!0)}function lh(e){for(lt=e.return;lt;)switch(lt.tag){case 5:case 31:case 13:Gt=!1;return;case 27:case 3:Gt=!0;return;default:lt=lt.return}}function ii(e){if(e!==lt)return!1;if(!Ee)return lh(e),Ee=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||hc(e.type,e.memoizedProps)),n=!n),n&&He&&Qn(e),lh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));He=z0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));He=z0(e)}else t===27?(t=He,ra(e.type)?(e=yc,yc=null,He=e):He=t):He=lt?Vt(e.stateNode.nextSibling):null;return!0}function Ca(){He=lt=null,Ee=!1}function Ju(){var e=Vn;return e!==null&&(yt===null?yt=e:yt.push.apply(yt,e),Vn=null),e}function ol(e){Vn===null?Vn=[e]:Vn.push(e)}var Fu=C(null),Ta=null,yn=null;function Zn(e,t,n){ie(Fu,t._currentValue),t._currentValue=n}function bn(e){e._currentValue=Fu.current,V(Fu)}function Wu(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Iu(e,t,n,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var d=r.child;s=s.firstContext;e:for(;s!==null;){var g=s;s=r;for(var E=0;E<t.length;E++)if(g.context===t[E]){s.lanes|=n,g=s.alternate,g!==null&&(g.lanes|=n),Wu(s.return,n,e),i||(d=null);break e}s=g.next}}else if(r.tag===18){if(d=r.return,d===null)throw Error(o(341));d.lanes|=n,s=d.alternate,s!==null&&(s.lanes|=n),Wu(d,n,e),d=null}else d=r.child;if(d!==null)d.return=r;else for(d=r;d!==null;){if(d===e){d=null;break}if(r=d.sibling,r!==null){r.return=d.return,d=r;break}d=d.return}r=d}}function li(e,t,n,i){e=null;for(var r=t,s=!1;r!==null;){if(!s){if((r.flags&524288)!==0)s=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var d=r.alternate;if(d===null)throw Error(o(387));if(d=d.memoizedProps,d!==null){var g=r.type;Tt(r.pendingProps.value,d.value)||(e!==null?e.push(g):e=[g])}}else if(r===ye.current){if(d=r.alternate,d===null)throw Error(o(387));d.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Nl):e=[Nl])}r=r.return}e!==null&&Iu(t,e,n,i),t.flags|=262144}function jr(e){for(e=e.firstContext;e!==null;){if(!Tt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ra(e){Ta=e,yn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rt(e){return rh(Ta,e)}function zr(e,t){return Ta===null&&Ra(e),rh(e,t)}function rh(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},yn===null){if(e===null)throw Error(o(308));yn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else yn=yn.next=t;return n}var Ny=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Ly=a.unstable_scheduleCallback,ky=a.unstable_NormalPriority,Ke={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function es(){return{controller:new Ny,data:new Map,refCount:0}}function ul(e){e.refCount--,e.refCount===0&&Ly(ky,function(){e.controller.abort()})}var sl=null,ts=0,ri=0,oi=null;function Uy(e,t){if(sl===null){var n=sl=[];ts=0,ri=ic(),oi={status:"pending",value:void 0,then:function(i){n.push(i)}}}return ts++,t.then(oh,oh),t}function oh(){if(--ts===0&&sl!==null){oi!==null&&(oi.status="fulfilled");var e=sl;sl=null,ri=0,oi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function By(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(i.status="rejected",i.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),i}var uh=j.S;j.S=function(e,t){Vp=wt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Uy(e,t),uh!==null&&uh(e,t)};var _a=C(null);function ns(){var e=_a.current;return e!==null?e:ke.pooledCache}function Ar(e,t){t===null?ie(_a,_a.current):ie(_a,t.pool)}function sh(){var e=ns();return e===null?null:{parent:Ke._currentValue,pool:e}}var ui=Error(o(460)),as=Error(o(474)),Mr=Error(o(542)),Dr={then:function(){}};function ch(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(pn,pn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,hh(e),e;default:if(typeof t.status=="string")t.then(pn,pn);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=i}},function(i){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,hh(e),e}throw ja=t,ui}}function Oa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ja=n,ui):n}}var ja=null;function dh(){if(ja===null)throw Error(o(459));var e=ja;return ja=null,e}function hh(e){if(e===ui||e===Mr)throw Error(o(483))}var si=null,cl=0;function Nr(e){var t=cl;return cl+=1,si===null&&(si=[]),fh(si,e,t)}function fl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Lr(e,t){throw t.$$typeof===w?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ph(e){function t(D,O){if(e){var U=D.deletions;U===null?(D.deletions=[O],D.flags|=16):U.push(O)}}function n(D,O){if(!e)return null;for(;O!==null;)t(D,O),O=O.sibling;return null}function i(D){for(var O=new Map;D!==null;)D.key!==null?O.set(D.key,D):O.set(D.index,D),D=D.sibling;return O}function r(D,O){return D=vn(D,O),D.index=0,D.sibling=null,D}function s(D,O,U){return D.index=U,e?(U=D.alternate,U!==null?(U=U.index,U<O?(D.flags|=67108866,O):U):(D.flags|=67108866,O)):(D.flags|=1048576,O)}function d(D){return e&&D.alternate===null&&(D.flags|=67108866),D}function g(D,O,U,I){return O===null||O.tag!==6?(O=Vu(U,D.mode,I),O.return=D,O):(O=r(O,U),O.return=D,O)}function E(D,O,U,I){var fe=U.type;return fe===q?W(D,O,U.props.children,I,U.key):O!==null&&(O.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===k&&Oa(fe)===O.type)?(O=r(O,U.props),fl(O,U),O.return=D,O):(O=_r(U.type,U.key,U.props,null,D.mode,I),fl(O,U),O.return=D,O)}function B(D,O,U,I){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=Qu(U,D.mode,I),O.return=D,O):(O=r(O,U.children||[]),O.return=D,O)}function W(D,O,U,I,fe){return O===null||O.tag!==7?(O=Ea(U,D.mode,I,fe),O.return=D,O):(O=r(O,U),O.return=D,O)}function te(D,O,U){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Vu(""+O,D.mode,U),O.return=D,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case A:return U=_r(O.type,O.key,O.props,null,D.mode,U),fl(U,O),U.return=D,U;case R:return O=Qu(O,D.mode,U),O.return=D,O;case k:return O=Oa(O),te(D,O,U)}if(T(O)||N(O))return O=Ea(O,D.mode,U,null),O.return=D,O;if(typeof O.then=="function")return te(D,Nr(O),U);if(O.$$typeof===H)return te(D,zr(D,O),U);Lr(D,O)}return null}function Y(D,O,U,I){var fe=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return fe!==null?null:g(D,O,""+U,I);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case A:return U.key===fe?E(D,O,U,I):null;case R:return U.key===fe?B(D,O,U,I):null;case k:return U=Oa(U),Y(D,O,U,I)}if(T(U)||N(U))return fe!==null?null:W(D,O,U,I,null);if(typeof U.then=="function")return Y(D,O,Nr(U),I);if(U.$$typeof===H)return Y(D,O,zr(D,U),I);Lr(D,U)}return null}function Q(D,O,U,I,fe){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return D=D.get(U)||null,g(O,D,""+I,fe);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case A:return D=D.get(I.key===null?U:I.key)||null,E(O,D,I,fe);case R:return D=D.get(I.key===null?U:I.key)||null,B(O,D,I,fe);case k:return I=Oa(I),Q(D,O,U,I,fe)}if(T(I)||N(I))return D=D.get(U)||null,W(O,D,I,fe,null);if(typeof I.then=="function")return Q(D,O,U,Nr(I),fe);if(I.$$typeof===H)return Q(D,O,U,zr(O,I),fe);Lr(O,I)}return null}function oe(D,O,U,I){for(var fe=null,Re=null,ue=O,ve=O=0,we=null;ue!==null&&ve<U.length;ve++){ue.index>ve?(we=ue,ue=null):we=ue.sibling;var _e=Y(D,ue,U[ve],I);if(_e===null){ue===null&&(ue=we);break}e&&ue&&_e.alternate===null&&t(D,ue),O=s(_e,O,ve),Re===null?fe=_e:Re.sibling=_e,Re=_e,ue=we}if(ve===U.length)return n(D,ue),Ee&&gn(D,ve),fe;if(ue===null){for(;ve<U.length;ve++)ue=te(D,U[ve],I),ue!==null&&(O=s(ue,O,ve),Re===null?fe=ue:Re.sibling=ue,Re=ue);return Ee&&gn(D,ve),fe}for(ue=i(ue);ve<U.length;ve++)we=Q(ue,D,ve,U[ve],I),we!==null&&(e&&we.alternate!==null&&ue.delete(we.key===null?ve:we.key),O=s(we,O,ve),Re===null?fe=we:Re.sibling=we,Re=we);return e&&ue.forEach(function(fa){return t(D,fa)}),Ee&&gn(D,ve),fe}function de(D,O,U,I){if(U==null)throw Error(o(151));for(var fe=null,Re=null,ue=O,ve=O=0,we=null,_e=U.next();ue!==null&&!_e.done;ve++,_e=U.next()){ue.index>ve?(we=ue,ue=null):we=ue.sibling;var fa=Y(D,ue,_e.value,I);if(fa===null){ue===null&&(ue=we);break}e&&ue&&fa.alternate===null&&t(D,ue),O=s(fa,O,ve),Re===null?fe=fa:Re.sibling=fa,Re=fa,ue=we}if(_e.done)return n(D,ue),Ee&&gn(D,ve),fe;if(ue===null){for(;!_e.done;ve++,_e=U.next())_e=te(D,_e.value,I),_e!==null&&(O=s(_e,O,ve),Re===null?fe=_e:Re.sibling=_e,Re=_e);return Ee&&gn(D,ve),fe}for(ue=i(ue);!_e.done;ve++,_e=U.next())_e=Q(ue,D,ve,_e.value,I),_e!==null&&(e&&_e.alternate!==null&&ue.delete(_e.key===null?ve:_e.key),O=s(_e,O,ve),Re===null?fe=_e:Re.sibling=_e,Re=_e);return e&&ue.forEach(function(P2){return t(D,P2)}),Ee&&gn(D,ve),fe}function Le(D,O,U,I){if(typeof U=="object"&&U!==null&&U.type===q&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case A:e:{for(var fe=U.key;O!==null;){if(O.key===fe){if(fe=U.type,fe===q){if(O.tag===7){n(D,O.sibling),I=r(O,U.props.children),I.return=D,D=I;break e}}else if(O.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===k&&Oa(fe)===O.type){n(D,O.sibling),I=r(O,U.props),fl(I,U),I.return=D,D=I;break e}n(D,O);break}else t(D,O);O=O.sibling}U.type===q?(I=Ea(U.props.children,D.mode,I,U.key),I.return=D,D=I):(I=_r(U.type,U.key,U.props,null,D.mode,I),fl(I,U),I.return=D,D=I)}return d(D);case R:e:{for(fe=U.key;O!==null;){if(O.key===fe)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){n(D,O.sibling),I=r(O,U.children||[]),I.return=D,D=I;break e}else{n(D,O);break}else t(D,O);O=O.sibling}I=Qu(U,D.mode,I),I.return=D,D=I}return d(D);case k:return U=Oa(U),Le(D,O,U,I)}if(T(U))return oe(D,O,U,I);if(N(U)){if(fe=N(U),typeof fe!="function")throw Error(o(150));return U=fe.call(U),de(D,O,U,I)}if(typeof U.then=="function")return Le(D,O,Nr(U),I);if(U.$$typeof===H)return Le(D,O,zr(D,U),I);Lr(D,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,O!==null&&O.tag===6?(n(D,O.sibling),I=r(O,U),I.return=D,D=I):(n(D,O),I=Vu(U,D.mode,I),I.return=D,D=I),d(D)):n(D,O)}return function(D,O,U,I){try{cl=0;var fe=Le(D,O,U,I);return si=null,fe}catch(ue){if(ue===ui||ue===Mr)throw ue;var Re=Rt(29,ue,null,D.mode);return Re.lanes=I,Re.return=D,Re}finally{}}}var za=ph(!0),mh=ph(!1),Kn=!1;function is(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ls(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Jn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(je&2)!==0){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,t=Rr(e),Wd(e,null,n),t}return Tr(e,i,t,n),Rr(e)}function dl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,rd(e,n)}}function rs(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?r=s=d:s=s.next=d,n=n.next}while(n!==null);s===null?r=s=t:s=s.next=t}else r=s=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var os=!1;function hl(){if(os){var e=oi;if(e!==null)throw e}}function pl(e,t,n,i){os=!1;var r=e.updateQueue;Kn=!1;var s=r.firstBaseUpdate,d=r.lastBaseUpdate,g=r.shared.pending;if(g!==null){r.shared.pending=null;var E=g,B=E.next;E.next=null,d===null?s=B:d.next=B,d=E;var W=e.alternate;W!==null&&(W=W.updateQueue,g=W.lastBaseUpdate,g!==d&&(g===null?W.firstBaseUpdate=B:g.next=B,W.lastBaseUpdate=E))}if(s!==null){var te=r.baseState;d=0,W=B=E=null,g=s;do{var Y=g.lane&-536870913,Q=Y!==g.lane;if(Q?(Se&Y)===Y:(i&Y)===Y){Y!==0&&Y===ri&&(os=!0),W!==null&&(W=W.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var oe=e,de=g;Y=t;var Le=n;switch(de.tag){case 1:if(oe=de.payload,typeof oe=="function"){te=oe.call(Le,te,Y);break e}te=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=de.payload,Y=typeof oe=="function"?oe.call(Le,te,Y):oe,Y==null)break e;te=x({},te,Y);break e;case 2:Kn=!0}}Y=g.callback,Y!==null&&(e.flags|=64,Q&&(e.flags|=8192),Q=r.callbacks,Q===null?r.callbacks=[Y]:Q.push(Y))}else Q={lane:Y,tag:g.tag,payload:g.payload,callback:g.callback,next:null},W===null?(B=W=Q,E=te):W=W.next=Q,d|=Y;if(g=g.next,g===null){if(g=r.shared.pending,g===null)break;Q=g,g=Q.next,Q.next=null,r.lastBaseUpdate=Q,r.shared.pending=null}}while(!0);W===null&&(E=te),r.baseState=E,r.firstBaseUpdate=B,r.lastBaseUpdate=W,s===null&&(r.shared.lanes=0),ta|=d,e.lanes=d,e.memoizedState=te}}function vh(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function gh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)vh(n[e],t)}var ci=C(null),kr=C(0);function yh(e,t){e=On,ie(kr,e),ie(ci,t),On=e|t.baseLanes}function us(){ie(kr,On),ie(ci,ci.current)}function ss(){On=kr.current,V(ci),V(kr)}var _t=C(null),Xt=null;function Fn(e){var t=e.alternate;ie(Qe,Qe.current&1),ie(_t,e),Xt===null&&(t===null||ci.current!==null||t.memoizedState!==null)&&(Xt=e)}function cs(e){ie(Qe,Qe.current),ie(_t,e),Xt===null&&(Xt=e)}function bh(e){e.tag===22?(ie(Qe,Qe.current),ie(_t,e),Xt===null&&(Xt=e)):Wn()}function Wn(){ie(Qe,Qe.current),ie(_t,_t.current)}function Ot(e){V(_t),Xt===e&&(Xt=null),V(Qe)}var Qe=C(0);function Ur(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||vc(n)||gc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xn=0,me=null,De=null,Pe=null,Br=!1,fi=!1,Aa=!1,Hr=0,ml=0,di=null,Hy=0;function Xe(){throw Error(o(321))}function fs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function ds(e,t,n,i,r,s){return xn=s,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?np:_s,Aa=!1,s=n(i,r),Aa=!1,fi&&(s=Sh(t,n,i,r)),xh(e),s}function xh(e){j.H=yl;var t=De!==null&&De.next!==null;if(xn=0,Pe=De=me=null,Br=!1,ml=0,di=null,t)throw Error(o(300));e===null||Je||(e=e.dependencies,e!==null&&jr(e)&&(Je=!0))}function Sh(e,t,n,i){me=e;var r=0;do{if(fi&&(di=null),ml=0,fi=!1,25<=r)throw Error(o(301));if(r+=1,Pe=De=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}j.H=ap,s=t(n,i)}while(fi);return s}function $y(){var e=j.H,t=e.useState()[0];return t=typeof t.then=="function"?vl(t):t,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(me.flags|=1024),t}function hs(){var e=Hr!==0;return Hr=0,e}function ps(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ms(e){if(Br){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Br=!1}xn=0,Pe=De=me=null,fi=!1,ml=Hr=0,di=null}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?me.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function Ze(){if(De===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Pe===null?me.memoizedState:Pe.next;if(t!==null)Pe=t,De=e;else{if(e===null)throw me.alternate===null?Error(o(467)):Error(o(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Pe===null?me.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function $r(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vl(e){var t=ml;return ml+=1,di===null&&(di=[]),e=fh(di,e,t),t=me,(Pe===null?t.memoizedState:Pe.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?np:_s),e}function qr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vl(e);if(e.$$typeof===H)return rt(e)}throw Error(o(438,String(e)))}function vs(e){var t=null,n=me.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=me.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=$r(),me.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=le;return t.index++,n}function Sn(e,t){return typeof t=="function"?t(e):t}function Yr(e){var t=Ze();return gs(t,De,e)}function gs(e,t,n){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var r=e.baseQueue,s=i.pending;if(s!==null){if(r!==null){var d=r.next;r.next=s.next,s.next=d}t.baseQueue=r=s,i.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{t=r.next;var g=d=null,E=null,B=t,W=!1;do{var te=B.lane&-536870913;if(te!==B.lane?(Se&te)===te:(xn&te)===te){var Y=B.revertLane;if(Y===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),te===ri&&(W=!0);else if((xn&Y)===Y){B=B.next,Y===ri&&(W=!0);continue}else te={lane:0,revertLane:B.revertLane,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},E===null?(g=E=te,d=s):E=E.next=te,me.lanes|=Y,ta|=Y;te=B.action,Aa&&n(s,te),s=B.hasEagerState?B.eagerState:n(s,te)}else Y={lane:te,revertLane:B.revertLane,gesture:B.gesture,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},E===null?(g=E=Y,d=s):E=E.next=Y,me.lanes|=te,ta|=te;B=B.next}while(B!==null&&B!==t);if(E===null?d=s:E.next=g,!Tt(s,e.memoizedState)&&(Je=!0,W&&(n=oi,n!==null)))throw n;e.memoizedState=s,e.baseState=d,e.baseQueue=E,i.lastRenderedState=s}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function ys(e){var t=Ze(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,s=t.memoizedState;if(r!==null){n.pending=null;var d=r=r.next;do s=e(s,d.action),d=d.next;while(d!==r);Tt(s,t.memoizedState)||(Je=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function wh(e,t,n){var i=me,r=Ze(),s=Ee;if(s){if(n===void 0)throw Error(o(407));n=n()}else n=t();var d=!Tt((De||r).memoizedState,n);if(d&&(r.memoizedState=n,Je=!0),r=r.queue,Ss(Th.bind(null,i,r,e),[e]),r.getSnapshot!==t||d||Pe!==null&&Pe.memoizedState.tag&1){if(i.flags|=2048,hi(9,{destroy:void 0},Ch.bind(null,i,r,n,t),null),ke===null)throw Error(o(349));s||(xn&127)!==0||Eh(i,t,n)}return n}function Eh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t=$r(),me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ch(e,t,n,i){t.value=n,t.getSnapshot=i,Rh(t)&&_h(e)}function Th(e,t,n){return n(function(){Rh(t)&&_h(e)})}function Rh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function _h(e){var t=wa(e,2);t!==null&&bt(t,e,2)}function bs(e){var t=dt();if(typeof e=="function"){var n=e;if(e=n(),Aa){qn(!0);try{n()}finally{qn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:e},t}function Oh(e,t,n,i){return e.baseState=n,gs(e,De,typeof i=="function"?i:Sn)}function qy(e,t,n,i,r){if(Vr(e))throw Error(o(485));if(e=t.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){s.listeners.push(d)}};j.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,jh(t,s)):(s.next=n.next,t.pending=n.next=s)}}function jh(e,t){var n=t.action,i=t.payload,r=e.state;if(t.isTransition){var s=j.T,d={};j.T=d;try{var g=n(r,i),E=j.S;E!==null&&E(d,g),zh(e,t,g)}catch(B){xs(e,t,B)}finally{s!==null&&d.types!==null&&(s.types=d.types),j.T=s}}else try{s=n(r,i),zh(e,t,s)}catch(B){xs(e,t,B)}}function zh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Ah(e,t,i)},function(i){return xs(e,t,i)}):Ah(e,t,n)}function Ah(e,t,n){t.status="fulfilled",t.value=n,Mh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,jh(e,n)))}function xs(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Mh(t),t=t.next;while(t!==i)}e.action=null}function Mh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Dh(e,t){return t}function Nh(e,t){if(Ee){var n=ke.formState;if(n!==null){e:{var i=me;if(Ee){if(He){t:{for(var r=He,s=Gt;r.nodeType!==8;){if(!s){r=null;break t}if(r=Vt(r.nextSibling),r===null){r=null;break t}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){He=Vt(r.nextSibling),i=r.data==="F!";break e}}Qn(i)}i=!1}i&&(t=n[0])}}return n=dt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dh,lastRenderedState:t},n.queue=i,n=Ih.bind(null,me,i),i.dispatch=n,i=bs(!1),s=Rs.bind(null,me,!1,i.queue),i=dt(),r={state:t,dispatch:null,action:e,pending:null},i.queue=r,n=qy.bind(null,me,r,s,n),r.dispatch=n,i.memoizedState=e,[t,n,!1]}function Lh(e){var t=Ze();return kh(t,De,e)}function kh(e,t,n){if(t=gs(e,t,Dh)[0],e=Yr(Sn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=vl(t)}catch(d){throw d===ui?Mr:d}else i=t;t=Ze();var r=t.queue,s=r.dispatch;return n!==t.memoizedState&&(me.flags|=2048,hi(9,{destroy:void 0},Yy.bind(null,r,n),null)),[i,s,e]}function Yy(e,t){e.action=t}function Uh(e){var t=Ze(),n=De;if(n!==null)return kh(t,n,e);Ze(),t=t.memoizedState,n=Ze();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function hi(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=me.updateQueue,t===null&&(t=$r(),me.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Bh(){return Ze().memoizedState}function Gr(e,t,n,i){var r=dt();me.flags|=e,r.memoizedState=hi(1|t,{destroy:void 0},n,i===void 0?null:i)}function Xr(e,t,n,i){var r=Ze();i=i===void 0?null:i;var s=r.memoizedState.inst;De!==null&&i!==null&&fs(i,De.memoizedState.deps)?r.memoizedState=hi(t,s,n,i):(me.flags|=e,r.memoizedState=hi(1|t,s,n,i))}function Hh(e,t){Gr(8390656,8,e,t)}function Ss(e,t){Xr(2048,8,e,t)}function Gy(e){me.flags|=4;var t=me.updateQueue;if(t===null)t=$r(),me.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function $h(e){var t=Ze().memoizedState;return Gy({ref:t,nextImpl:e}),function(){if((je&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function qh(e,t){return Xr(4,2,e,t)}function Yh(e,t){return Xr(4,4,e,t)}function Gh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xh(e,t,n){n=n!=null?n.concat([e]):null,Xr(4,4,Gh.bind(null,t,e),n)}function ws(){}function Vh(e,t){var n=Ze();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&fs(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Qh(e,t){var n=Ze();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&fs(t,i[1]))return i[0];if(i=e(),Aa){qn(!0);try{e()}finally{qn(!1)}}return n.memoizedState=[i,t],i}function Es(e,t,n){return n===void 0||(xn&1073741824)!==0&&(Se&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Zp(),me.lanes|=e,ta|=e,n)}function Zh(e,t,n,i){return Tt(n,t)?n:ci.current!==null?(e=Es(e,n,i),Tt(e,t)||(Je=!0),e):(xn&42)===0||(xn&1073741824)!==0&&(Se&261930)===0?(Je=!0,e.memoizedState=n):(e=Zp(),me.lanes|=e,ta|=e,t)}function Kh(e,t,n,i,r){var s=$.p;$.p=s!==0&&8>s?s:8;var d=j.T,g={};j.T=g,Rs(e,!1,t,n);try{var E=r(),B=j.S;if(B!==null&&B(g,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var W=By(E,i);gl(e,t,W,At(e))}else gl(e,t,i,At(e))}catch(te){gl(e,t,{then:function(){},status:"rejected",reason:te},At())}finally{$.p=s,d!==null&&g.types!==null&&(d.types=g.types),j.T=d}}function Xy(){}function Cs(e,t,n,i){if(e.tag!==5)throw Error(o(476));var r=Ph(e).queue;Kh(e,r,t,J,n===null?Xy:function(){return Jh(e),n(i)})}function Ph(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:J},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Jh(e){var t=Ph(e);t.next===null&&(t=e.alternate.memoizedState),gl(e,t.next.queue,{},At())}function Ts(){return rt(Nl)}function Fh(){return Ze().memoizedState}function Wh(){return Ze().memoizedState}function Vy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=At();e=Pn(n);var i=Jn(t,e,n);i!==null&&(bt(i,t,n),dl(i,t,n)),t={cache:es()},e.payload=t;return}t=t.return}}function Qy(e,t,n){var i=At();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Vr(e)?ep(t,n):(n=Gu(e,t,n,i),n!==null&&(bt(n,e,i),tp(n,t,i)))}function Ih(e,t,n){var i=At();gl(e,t,n,i)}function gl(e,t,n,i){var r={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vr(e))ep(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,g=s(d,n);if(r.hasEagerState=!0,r.eagerState=g,Tt(g,d))return Tr(e,t,r,0),ke===null&&Cr(),!1}catch{}finally{}if(n=Gu(e,t,r,i),n!==null)return bt(n,e,i),tp(n,t,i),!0}return!1}function Rs(e,t,n,i){if(i={lane:2,revertLane:ic(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Vr(e)){if(t)throw Error(o(479))}else t=Gu(e,n,i,2),t!==null&&bt(t,e,2)}function Vr(e){var t=e.alternate;return e===me||t!==null&&t===me}function ep(e,t){fi=Br=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tp(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,rd(e,n)}}var yl={readContext:rt,use:qr,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe};yl.useEffectEvent=Xe;var np={readContext:rt,use:qr,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Hh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Gr(4194308,4,Gh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Gr(4194308,4,e,t)},useInsertionEffect:function(e,t){Gr(4,2,e,t)},useMemo:function(e,t){var n=dt();t=t===void 0?null:t;var i=e();if(Aa){qn(!0);try{e()}finally{qn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=dt();if(n!==void 0){var r=n(t);if(Aa){qn(!0);try{n(t)}finally{qn(!1)}}}else r=t;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=Qy.bind(null,me,e),[i.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:function(e){e=bs(e);var t=e.queue,n=Ih.bind(null,me,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ws,useDeferredValue:function(e,t){var n=dt();return Es(n,e,t)},useTransition:function(){var e=bs(!1);return e=Kh.bind(null,me,e.queue,!0,!1),dt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=me,r=dt();if(Ee){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),ke===null)throw Error(o(349));(Se&127)!==0||Eh(i,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,Hh(Th.bind(null,i,s,e),[e]),i.flags|=2048,hi(9,{destroy:void 0},Ch.bind(null,i,s,n,t),null),n},useId:function(){var e=dt(),t=ke.identifierPrefix;if(Ee){var n=an,i=nn;n=(i&~(1<<32-Ct(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Hr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Hy++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ts,useFormState:Nh,useActionState:Nh,useOptimistic:function(e){var t=dt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rs.bind(null,me,!0,n),n.dispatch=t,[e,t]},useMemoCache:vs,useCacheRefresh:function(){return dt().memoizedState=Vy.bind(null,me)},useEffectEvent:function(e){var t=dt(),n={impl:e};return t.memoizedState=n,function(){if((je&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},_s={readContext:rt,use:qr,useCallback:Vh,useContext:rt,useEffect:Ss,useImperativeHandle:Xh,useInsertionEffect:qh,useLayoutEffect:Yh,useMemo:Qh,useReducer:Yr,useRef:Bh,useState:function(){return Yr(Sn)},useDebugValue:ws,useDeferredValue:function(e,t){var n=Ze();return Zh(n,De.memoizedState,e,t)},useTransition:function(){var e=Yr(Sn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:vl(e),t]},useSyncExternalStore:wh,useId:Fh,useHostTransitionStatus:Ts,useFormState:Lh,useActionState:Lh,useOptimistic:function(e,t){var n=Ze();return Oh(n,De,e,t)},useMemoCache:vs,useCacheRefresh:Wh};_s.useEffectEvent=$h;var ap={readContext:rt,use:qr,useCallback:Vh,useContext:rt,useEffect:Ss,useImperativeHandle:Xh,useInsertionEffect:qh,useLayoutEffect:Yh,useMemo:Qh,useReducer:ys,useRef:Bh,useState:function(){return ys(Sn)},useDebugValue:ws,useDeferredValue:function(e,t){var n=Ze();return De===null?Es(n,e,t):Zh(n,De.memoizedState,e,t)},useTransition:function(){var e=ys(Sn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:vl(e),t]},useSyncExternalStore:wh,useId:Fh,useHostTransitionStatus:Ts,useFormState:Uh,useActionState:Uh,useOptimistic:function(e,t){var n=Ze();return De!==null?Oh(n,De,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:vs,useCacheRefresh:Wh};ap.useEffectEvent=$h;function Os(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:x({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var js={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=At(),r=Pn(i);r.payload=t,n!=null&&(r.callback=n),t=Jn(e,r,i),t!==null&&(bt(t,e,i),dl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=At(),r=Pn(i);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Jn(e,r,i),t!==null&&(bt(t,e,i),dl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=At(),i=Pn(n);i.tag=2,t!=null&&(i.callback=t),t=Jn(e,i,n),t!==null&&(bt(t,e,n),dl(t,e,n))}};function ip(e,t,n,i,r,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,d):t.prototype&&t.prototype.isPureReactComponent?!il(n,i)||!il(r,s):!0}function lp(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&js.enqueueReplaceState(t,t.state,null)}function Ma(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=x({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function rp(e){Er(e)}function op(e){console.error(e)}function up(e){Er(e)}function Qr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function sp(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function zs(e,t,n){return n=Pn(n),n.tag=3,n.payload={element:null},n.callback=function(){Qr(e,t)},n}function cp(e){return e=Pn(e),e.tag=3,e}function fp(e,t,n,i){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var s=i.value;e.payload=function(){return r(s)},e.callback=function(){sp(t,n,i)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){sp(t,n,i),typeof r!="function"&&(na===null?na=new Set([this]):na.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})})}function Zy(e,t,n,i,r){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&li(t,n,r,!0),n=_t.current,n!==null){switch(n.tag){case 31:case 13:return Xt===null?io():n.alternate===null&&Ve===0&&(Ve=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===Dr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),tc(e,i,r)),!1;case 22:return n.flags|=65536,i===Dr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),tc(e,i,r)),!1}throw Error(o(435,n.tag))}return tc(e,i,r),io(),!1}if(Ee)return t=_t.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,i!==Pu&&(e=Error(o(422),{cause:i}),ol($t(e,n)))):(i!==Pu&&(t=Error(o(423),{cause:i}),ol($t(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=$t(i,n),r=zs(e.stateNode,i,r),rs(e,r),Ve!==4&&(Ve=2)),!1;var s=Error(o(520),{cause:i});if(s=$t(s,n),Rl===null?Rl=[s]:Rl.push(s),Ve!==4&&(Ve=2),t===null)return!0;i=$t(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=zs(n.stateNode,i,e),rs(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(na===null||!na.has(s))))return n.flags|=65536,r&=-r,n.lanes|=r,r=cp(r),fp(r,e,n,i),rs(n,r),!1}n=n.return}while(n!==null);return!1}var As=Error(o(461)),Je=!1;function ot(e,t,n,i){t.child=e===null?mh(t,null,n,i):za(t,e.child,n,i)}function dp(e,t,n,i,r){n=n.render;var s=t.ref;if("ref"in i){var d={};for(var g in i)g!=="ref"&&(d[g]=i[g])}else d=i;return Ra(t),i=ds(e,t,n,d,s,r),g=hs(),e!==null&&!Je?(ps(e,t,r),wn(e,t,r)):(Ee&&g&&Zu(t),t.flags|=1,ot(e,t,i,r),t.child)}function hp(e,t,n,i,r){if(e===null){var s=n.type;return typeof s=="function"&&!Xu(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,pp(e,t,s,i,r)):(e=_r(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Hs(e,r)){var d=s.memoizedProps;if(n=n.compare,n=n!==null?n:il,n(d,i)&&e.ref===t.ref)return wn(e,t,r)}return t.flags|=1,e=vn(s,i),e.ref=t.ref,e.return=t,t.child=e}function pp(e,t,n,i,r){if(e!==null){var s=e.memoizedProps;if(il(s,i)&&e.ref===t.ref)if(Je=!1,t.pendingProps=i=s,Hs(e,r))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,wn(e,t,r)}return Ms(e,t,n,i,r)}function mp(e,t,n,i){var r=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~s}else i=0,t.child=null;return vp(e,t,s,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ar(t,s!==null?s.cachePool:null),s!==null?yh(t,s):us(),bh(t);else return i=t.lanes=536870912,vp(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(Ar(t,s.cachePool),yh(t,s),Wn(),t.memoizedState=null):(e!==null&&Ar(t,null),us(),Wn());return ot(e,t,r,n),t.child}function bl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function vp(e,t,n,i,r){var s=ns();return s=s===null?null:{parent:Ke._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&Ar(t,null),us(),bh(t),e!==null&&li(e,t,i,!0),t.childLanes=r,null}function Zr(e,t){return t=Pr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gp(e,t,n){return za(t,e.child,null,n),e=Zr(t,t.pendingProps),e.flags|=2,Ot(t),t.memoizedState=null,e}function Ky(e,t,n){var i=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ee){if(i.mode==="hidden")return e=Zr(t,i),t.lanes=536870912,bl(null,e);if(cs(t),(e=He)?(e=j0(e,Gt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xn!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=eh(e),n.return=t,t.child=n,lt=t,He=null)):e=null,e===null)throw Qn(t);return t.lanes=536870912,null}return Zr(t,i)}var s=e.memoizedState;if(s!==null){var d=s.dehydrated;if(cs(t),r)if(t.flags&256)t.flags&=-257,t=gp(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Je||li(e,t,n,!1),r=(n&e.childLanes)!==0,Je||r){if(i=ke,i!==null&&(d=od(i,n),d!==0&&d!==s.retryLane))throw s.retryLane=d,wa(e,d),bt(i,e,d),As;io(),t=gp(e,t,n)}else e=s.treeContext,He=Vt(d.nextSibling),lt=t,Ee=!0,Vn=null,Gt=!1,e!==null&&ah(t,e),t=Zr(t,i),t.flags|=4096;return t}return e=vn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Kr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ms(e,t,n,i,r){return Ra(t),n=ds(e,t,n,i,void 0,r),i=hs(),e!==null&&!Je?(ps(e,t,r),wn(e,t,r)):(Ee&&i&&Zu(t),t.flags|=1,ot(e,t,n,r),t.child)}function yp(e,t,n,i,r,s){return Ra(t),t.updateQueue=null,n=Sh(t,i,n,r),xh(e),i=hs(),e!==null&&!Je?(ps(e,t,s),wn(e,t,s)):(Ee&&i&&Zu(t),t.flags|=1,ot(e,t,n,s),t.child)}function bp(e,t,n,i,r){if(Ra(t),t.stateNode===null){var s=ti,d=n.contextType;typeof d=="object"&&d!==null&&(s=rt(d)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=js,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},is(t),d=n.contextType,s.context=typeof d=="object"&&d!==null?rt(d):ti,s.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Os(t,n,d,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(d=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),d!==s.state&&js.enqueueReplaceState(s,s.state,null),pl(t,i,s,r),hl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var g=t.memoizedProps,E=Ma(n,g);s.props=E;var B=s.context,W=n.contextType;d=ti,typeof W=="object"&&W!==null&&(d=rt(W));var te=n.getDerivedStateFromProps;W=typeof te=="function"||typeof s.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,W||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(g||B!==d)&&lp(t,s,i,d),Kn=!1;var Y=t.memoizedState;s.state=Y,pl(t,i,s,r),hl(),B=t.memoizedState,g||Y!==B||Kn?(typeof te=="function"&&(Os(t,n,te,i),B=t.memoizedState),(E=Kn||ip(t,n,E,i,Y,B,d))?(W||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=B),s.props=i,s.state=B,s.context=d,i=E):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,ls(e,t),d=t.memoizedProps,W=Ma(n,d),s.props=W,te=t.pendingProps,Y=s.context,B=n.contextType,E=ti,typeof B=="object"&&B!==null&&(E=rt(B)),g=n.getDerivedStateFromProps,(B=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==te||Y!==E)&&lp(t,s,i,E),Kn=!1,Y=t.memoizedState,s.state=Y,pl(t,i,s,r),hl();var Q=t.memoizedState;d!==te||Y!==Q||Kn||e!==null&&e.dependencies!==null&&jr(e.dependencies)?(typeof g=="function"&&(Os(t,n,g,i),Q=t.memoizedState),(W=Kn||ip(t,n,W,i,Y,Q,E)||e!==null&&e.dependencies!==null&&jr(e.dependencies))?(B||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,Q,E),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,Q,E)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&Y===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&Y===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=Q),s.props=i,s.state=Q,s.context=E,i=W):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&Y===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&Y===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Kr(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=za(t,e.child,null,r),t.child=za(t,null,n,r)):ot(e,t,n,r),t.memoizedState=s.state,e=t.child):e=wn(e,t,r),e}function xp(e,t,n,i){return Ca(),t.flags|=256,ot(e,t,n,i),t.child}var Ds={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ns(e){return{baseLanes:e,cachePool:sh()}}function Ls(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=zt),e}function Sp(e,t,n){var i=t.pendingProps,r=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),d&&(r=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ee){if(r?Fn(t):Wn(),(e=He)?(e=j0(e,Gt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xn!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=eh(e),n.return=t,t.child=n,lt=t,He=null)):e=null,e===null)throw Qn(t);return gc(e)?t.lanes=32:t.lanes=536870912,null}var g=i.children;return i=i.fallback,r?(Wn(),r=t.mode,g=Pr({mode:"hidden",children:g},r),i=Ea(i,r,n,null),g.return=t,i.return=t,g.sibling=i,t.child=g,i=t.child,i.memoizedState=Ns(n),i.childLanes=Ls(e,d,n),t.memoizedState=Ds,bl(null,i)):(Fn(t),ks(t,g))}var E=e.memoizedState;if(E!==null&&(g=E.dehydrated,g!==null)){if(s)t.flags&256?(Fn(t),t.flags&=-257,t=Us(e,t,n)):t.memoizedState!==null?(Wn(),t.child=e.child,t.flags|=128,t=null):(Wn(),g=i.fallback,r=t.mode,i=Pr({mode:"visible",children:i.children},r),g=Ea(g,r,n,null),g.flags|=2,i.return=t,g.return=t,i.sibling=g,t.child=i,za(t,e.child,null,n),i=t.child,i.memoizedState=Ns(n),i.childLanes=Ls(e,d,n),t.memoizedState=Ds,t=bl(null,i));else if(Fn(t),gc(g)){if(d=g.nextSibling&&g.nextSibling.dataset,d)var B=d.dgst;d=B,i=Error(o(419)),i.stack="",i.digest=d,ol({value:i,source:null,stack:null}),t=Us(e,t,n)}else if(Je||li(e,t,n,!1),d=(n&e.childLanes)!==0,Je||d){if(d=ke,d!==null&&(i=od(d,n),i!==0&&i!==E.retryLane))throw E.retryLane=i,wa(e,i),bt(d,e,i),As;vc(g)||io(),t=Us(e,t,n)}else vc(g)?(t.flags|=192,t.child=e.child,t=null):(e=E.treeContext,He=Vt(g.nextSibling),lt=t,Ee=!0,Vn=null,Gt=!1,e!==null&&ah(t,e),t=ks(t,i.children),t.flags|=4096);return t}return r?(Wn(),g=i.fallback,r=t.mode,E=e.child,B=E.sibling,i=vn(E,{mode:"hidden",children:i.children}),i.subtreeFlags=E.subtreeFlags&65011712,B!==null?g=vn(B,g):(g=Ea(g,r,n,null),g.flags|=2),g.return=t,i.return=t,i.sibling=g,t.child=i,bl(null,i),i=t.child,g=e.child.memoizedState,g===null?g=Ns(n):(r=g.cachePool,r!==null?(E=Ke._currentValue,r=r.parent!==E?{parent:E,pool:E}:r):r=sh(),g={baseLanes:g.baseLanes|n,cachePool:r}),i.memoizedState=g,i.childLanes=Ls(e,d,n),t.memoizedState=Ds,bl(e.child,i)):(Fn(t),n=e.child,e=n.sibling,n=vn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function ks(e,t){return t=Pr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Pr(e,t){return e=Rt(22,e,null,t),e.lanes=0,e}function Us(e,t,n){return za(t,e.child,null,n),e=ks(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wp(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Wu(e.return,t,n)}function Bs(e,t,n,i,r,s){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,treeForkCount:s}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=i,d.tail=n,d.tailMode=r,d.treeForkCount=s)}function Ep(e,t,n){var i=t.pendingProps,r=i.revealOrder,s=i.tail;i=i.children;var d=Qe.current,g=(d&2)!==0;if(g?(d=d&1|2,t.flags|=128):d&=1,ie(Qe,d),ot(e,t,i,n),i=Ee?rl:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wp(e,n,t);else if(e.tag===19)wp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Ur(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Bs(t,!1,r,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Ur(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Bs(t,!0,n,null,s,i);break;case"together":Bs(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ta|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(li(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Hs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&jr(e)))}function Py(e,t,n){switch(t.tag){case 3:Ue(t,t.stateNode.containerInfo),Zn(t,Ke,e.memoizedState.cache),Ca();break;case 27:case 5:St(t);break;case 4:Ue(t,t.stateNode.containerInfo);break;case 10:Zn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,cs(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Fn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Sp(e,t,n):(Fn(t),e=wn(e,t,n),e!==null?e.sibling:null);Fn(t);break;case 19:var r=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(li(e,t,n,!1),i=(n&t.childLanes)!==0),r){if(i)return Ep(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ie(Qe,Qe.current),i)break;return null;case 22:return t.lanes=0,mp(e,t,n,t.pendingProps);case 24:Zn(t,Ke,e.memoizedState.cache)}return wn(e,t,n)}function Cp(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!Hs(e,n)&&(t.flags&128)===0)return Je=!1,Py(e,t,n);Je=(e.flags&131072)!==0}else Je=!1,Ee&&(t.flags&1048576)!==0&&nh(t,rl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Oa(t.elementType),t.type=e,typeof e=="function")Xu(e)?(i=Ma(e,i),t.tag=1,t=bp(null,t,e,i,n)):(t.tag=0,t=Ms(null,t,e,i,n));else{if(e!=null){var r=e.$$typeof;if(r===G){t.tag=11,t=dp(null,t,e,i,n);break e}else if(r===K){t.tag=14,t=hp(null,t,e,i,n);break e}}throw t=ne(e)||e,Error(o(306,t,""))}}return t;case 0:return Ms(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,r=Ma(i,t.pendingProps),bp(e,t,i,r,n);case 3:e:{if(Ue(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var s=t.memoizedState;r=s.element,ls(e,t),pl(t,i,null,n);var d=t.memoizedState;if(i=d.cache,Zn(t,Ke,i),i!==s.cache&&Iu(t,[Ke],n,!0),hl(),i=d.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=xp(e,t,i,n);break e}else if(i!==r){r=$t(Error(o(424)),t),ol(r),t=xp(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(He=Vt(e.firstChild),lt=t,Ee=!0,Vn=null,Gt=!0,n=mh(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ca(),i===r){t=wn(e,t,n);break e}ot(e,t,i,n)}t=t.child}return t;case 26:return Kr(e,t),e===null?(n=L0(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ee||(n=t.type,e=t.pendingProps,i=fo(he.current).createElement(n),i[it]=t,i[ht]=e,ut(i,n,e),et(i),t.stateNode=i):t.memoizedState=L0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return St(t),e===null&&Ee&&(i=t.stateNode=M0(t.type,t.pendingProps,he.current),lt=t,Gt=!0,r=He,ra(t.type)?(yc=r,He=Vt(i.firstChild)):He=r),ot(e,t,t.pendingProps.children,n),Kr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ee&&((r=i=He)&&(i=T2(i,t.type,t.pendingProps,Gt),i!==null?(t.stateNode=i,lt=t,He=Vt(i.firstChild),Gt=!1,r=!0):r=!1),r||Qn(t)),St(t),r=t.type,s=t.pendingProps,d=e!==null?e.memoizedProps:null,i=s.children,hc(r,s)?i=null:d!==null&&hc(r,d)&&(t.flags|=32),t.memoizedState!==null&&(r=ds(e,t,$y,null,null,n),Nl._currentValue=r),Kr(e,t),ot(e,t,i,n),t.child;case 6:return e===null&&Ee&&((e=n=He)&&(n=R2(n,t.pendingProps,Gt),n!==null?(t.stateNode=n,lt=t,He=null,e=!0):e=!1),e||Qn(t)),null;case 13:return Sp(e,t,n);case 4:return Ue(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=za(t,null,i,n):ot(e,t,i,n),t.child;case 11:return dp(e,t,t.type,t.pendingProps,n);case 7:return ot(e,t,t.pendingProps,n),t.child;case 8:return ot(e,t,t.pendingProps.children,n),t.child;case 12:return ot(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Zn(t,t.type,i.value),ot(e,t,i.children,n),t.child;case 9:return r=t.type._context,i=t.pendingProps.children,Ra(t),r=rt(r),i=i(r),t.flags|=1,ot(e,t,i,n),t.child;case 14:return hp(e,t,t.type,t.pendingProps,n);case 15:return pp(e,t,t.type,t.pendingProps,n);case 19:return Ep(e,t,n);case 31:return Ky(e,t,n);case 22:return mp(e,t,n,t.pendingProps);case 24:return Ra(t),i=rt(Ke),e===null?(r=ns(),r===null&&(r=ke,s=es(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=n),r=s),t.memoizedState={parent:i,cache:r},is(t),Zn(t,Ke,r)):((e.lanes&n)!==0&&(ls(e,t),pl(t,null,null,n),hl()),r=e.memoizedState,s=t.memoizedState,r.parent!==i?(r={parent:i,cache:i},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Zn(t,Ke,i)):(i=s.cache,Zn(t,Ke,i),i!==r.cache&&Iu(t,[Ke],n,!0))),ot(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function En(e){e.flags|=4}function $s(e,t,n,i,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Fp())e.flags|=8192;else throw ja=Dr,as}else e.flags&=-16777217}function Tp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$0(t))if(Fp())e.flags|=8192;else throw ja=Dr,as}function Jr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?id():536870912,e.lanes|=t,gi|=t)}function xl(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Jy(e,t,n){var i=t.pendingProps;switch(Ku(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return $e(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),bn(Ke),Te(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ii(t)?En(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ju())),$e(t),null;case 26:var r=t.type,s=t.memoizedState;return e===null?(En(t),s!==null?($e(t),Tp(t,s)):($e(t),$s(t,r,null,i,n))):s?s!==e.memoizedState?(En(t),$e(t),Tp(t,s)):($e(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&En(t),$e(t),$s(t,r,e,i,n)),null;case 27:if(Kt(t),n=he.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&En(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return $e(t),null}e=ae.current,ii(t)?ih(t):(e=M0(r,i,n),t.stateNode=e,En(t))}return $e(t),null;case 5:if(Kt(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&En(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return $e(t),null}if(s=ae.current,ii(t))ih(t);else{var d=fo(he.current);switch(s){case 1:s=d.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=d.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=d.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?d.createElement("select",{is:i.is}):d.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?d.createElement(r,{is:i.is}):d.createElement(r)}}s[it]=t,s[ht]=i;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)s.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=s;e:switch(ut(s,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&En(t)}}return $e(t),$s(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&En(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=he.current,ii(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,r=lt,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[it]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||S0(e.nodeValue,n)),e||Qn(t,!0)}else e=fo(e).createTextNode(i),e[it]=t,t.stateNode=e}return $e(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=ii(t),n!==null){if(e===null){if(!i)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[it]=t}else Ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$e(t),e=!1}else n=Ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ot(t),t):(Ot(t),null);if((t.flags&128)!==0)throw Error(o(558))}return $e(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=ii(t),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(o(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));r[it]=t}else Ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$e(t),r=!1}else r=Ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Ot(t),t):(Ot(t),null)}return Ot(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==r&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Jr(t,t.updateQueue),$e(t),null);case 4:return Te(),e===null&&uc(t.stateNode.containerInfo),$e(t),null;case 10:return bn(t.type),$e(t),null;case 19:if(V(Qe),i=t.memoizedState,i===null)return $e(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)xl(i,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Ur(e),s!==null){for(t.flags|=128,xl(i,!1),e=s.updateQueue,t.updateQueue=e,Jr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Id(n,e),n=n.sibling;return ie(Qe,Qe.current&1|2),Ee&&gn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&wt()>to&&(t.flags|=128,r=!0,xl(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ur(s),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Jr(t,e),xl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Ee)return $e(t),null}else 2*wt()-i.renderingStartTime>to&&n!==536870912&&(t.flags|=128,r=!0,xl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=wt(),e.sibling=null,n=Qe.current,ie(Qe,r?n&1|2:n&1),Ee&&gn(t,i.treeForkCount),e):($e(t),null);case 22:case 23:return Ot(t),ss(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),n=t.updateQueue,n!==null&&Jr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&V(_a),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),bn(Ke),$e(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Fy(e,t){switch(Ku(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bn(Ke),Te(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Kt(t),null;case 31:if(t.memoizedState!==null){if(Ot(t),t.alternate===null)throw Error(o(340));Ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ot(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Qe),null;case 4:return Te(),null;case 10:return bn(t.type),null;case 22:case 23:return Ot(t),ss(),e!==null&&V(_a),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return bn(Ke),null;case 25:return null;default:return null}}function Rp(e,t){switch(Ku(t),t.tag){case 3:bn(Ke),Te();break;case 26:case 27:case 5:Kt(t);break;case 4:Te();break;case 31:t.memoizedState!==null&&Ot(t);break;case 13:Ot(t);break;case 19:V(Qe);break;case 10:bn(t.type);break;case 22:case 23:Ot(t),ss(),e!==null&&V(_a);break;case 24:bn(Ke)}}function Sl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){i=void 0;var s=n.create,d=n.inst;i=s(),d.destroy=i}n=n.next}while(n!==r)}}catch(g){Me(t,t.return,g)}}function In(e,t,n){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var s=r.next;i=s;do{if((i.tag&e)===e){var d=i.inst,g=d.destroy;if(g!==void 0){d.destroy=void 0,r=t;var E=n,B=g;try{B()}catch(W){Me(r,E,W)}}}i=i.next}while(i!==s)}}catch(W){Me(t,t.return,W)}}function _p(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{gh(t,n)}catch(i){Me(e,e.return,i)}}}function Op(e,t,n){n.props=Ma(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Me(e,t,i)}}function wl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(r){Me(e,t,r)}}function ln(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(r){Me(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Me(e,t,r)}else n.current=null}function jp(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){Me(e,e.return,r)}}function qs(e,t,n){try{var i=e.stateNode;b2(i,e.type,n,t),i[ht]=t}catch(r){Me(e,e.return,r)}}function zp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ra(e.type)||e.tag===4}function Ys(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gs(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pn));else if(i!==4&&(i===27&&ra(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Gs(e,t,n),e=e.sibling;e!==null;)Gs(e,t,n),e=e.sibling}function Fr(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ra(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Fr(e,t,n),e=e.sibling;e!==null;)Fr(e,t,n),e=e.sibling}function Ap(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);ut(t,i,n),t[it]=e,t[ht]=n}catch(s){Me(e,e.return,s)}}var Cn=!1,Fe=!1,Xs=!1,Mp=typeof WeakSet=="function"?WeakSet:Set,tt=null;function Wy(e,t){if(e=e.containerInfo,fc=bo,e=Xd(e),Uu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var d=0,g=-1,E=-1,B=0,W=0,te=e,Y=null;t:for(;;){for(var Q;te!==n||r!==0&&te.nodeType!==3||(g=d+r),te!==s||i!==0&&te.nodeType!==3||(E=d+i),te.nodeType===3&&(d+=te.nodeValue.length),(Q=te.firstChild)!==null;)Y=te,te=Q;for(;;){if(te===e)break t;if(Y===n&&++B===r&&(g=d),Y===s&&++W===i&&(E=d),(Q=te.nextSibling)!==null)break;te=Y,Y=te.parentNode}te=Q}n=g===-1||E===-1?null:{start:g,end:E}}else n=null}n=n||{start:0,end:0}}else n=null;for(dc={focusedElem:e,selectionRange:n},bo=!1,tt=t;tt!==null;)if(t=tt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,tt=e;else for(;tt!==null;){switch(t=tt,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,r=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var oe=Ma(n.type,r);e=i.getSnapshotBeforeUpdate(oe,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(de){Me(n,n.return,de)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)mc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":mc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,tt=e;break}tt=t.return}}function Dp(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Rn(e,n),i&4&&Sl(5,n);break;case 1:if(Rn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){Me(n,n.return,d)}else{var r=Ma(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Me(n,n.return,d)}}i&64&&_p(n),i&512&&wl(n,n.return);break;case 3:if(Rn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{gh(e,t)}catch(d){Me(n,n.return,d)}}break;case 27:t===null&&i&4&&Ap(n);case 26:case 5:Rn(e,n),t===null&&i&4&&jp(n),i&512&&wl(n,n.return);break;case 12:Rn(e,n);break;case 31:Rn(e,n),i&4&&kp(e,n);break;case 13:Rn(e,n),i&4&&Up(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=o2.bind(null,n),_2(e,n))));break;case 22:if(i=n.memoizedState!==null||Cn,!i){t=t!==null&&t.memoizedState!==null||Fe,r=Cn;var s=Fe;Cn=i,(Fe=t)&&!s?_n(e,n,(n.subtreeFlags&8772)!==0):Rn(e,n),Cn=r,Fe=s}break;case 30:break;default:Rn(e,n)}}function Np(e){var t=e.alternate;t!==null&&(e.alternate=null,Np(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,mt=!1;function Tn(e,t,n){for(n=n.child;n!==null;)Lp(e,t,n),n=n.sibling}function Lp(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Qi,n)}catch{}switch(n.tag){case 26:Fe||ln(n,t),Tn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Fe||ln(n,t);var i=Ye,r=mt;ra(n.type)&&(Ye=n.stateNode,mt=!1),Tn(e,t,n),Al(n.stateNode),Ye=i,mt=r;break;case 5:Fe||ln(n,t);case 6:if(i=Ye,r=mt,Ye=null,Tn(e,t,n),Ye=i,mt=r,Ye!==null)if(mt)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(n.stateNode)}catch(s){Me(n,t,s)}else try{Ye.removeChild(n.stateNode)}catch(s){Me(n,t,s)}break;case 18:Ye!==null&&(mt?(e=Ye,_0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ti(e)):_0(Ye,n.stateNode));break;case 4:i=Ye,r=mt,Ye=n.stateNode.containerInfo,mt=!0,Tn(e,t,n),Ye=i,mt=r;break;case 0:case 11:case 14:case 15:In(2,n,t),Fe||In(4,n,t),Tn(e,t,n);break;case 1:Fe||(ln(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Op(n,t,i)),Tn(e,t,n);break;case 21:Tn(e,t,n);break;case 22:Fe=(i=Fe)||n.memoizedState!==null,Tn(e,t,n),Fe=i;break;default:Tn(e,t,n)}}function kp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ti(e)}catch(n){Me(t,t.return,n)}}}function Up(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ti(e)}catch(n){Me(t,t.return,n)}}function Iy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Mp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Mp),t;default:throw Error(o(435,e.tag))}}function Wr(e,t){var n=Iy(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var r=u2.bind(null,e,i);i.then(r,r)}})}function vt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i],s=e,d=t,g=d;e:for(;g!==null;){switch(g.tag){case 27:if(ra(g.type)){Ye=g.stateNode,mt=!1;break e}break;case 5:Ye=g.stateNode,mt=!1;break e;case 3:case 4:Ye=g.stateNode.containerInfo,mt=!0;break e}g=g.return}if(Ye===null)throw Error(o(160));Lp(s,d,r),Ye=null,mt=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Bp(t,e),t=t.sibling}var Jt=null;function Bp(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vt(t,e),gt(e),i&4&&(In(3,e,e.return),Sl(3,e),In(5,e,e.return));break;case 1:vt(t,e),gt(e),i&512&&(Fe||n===null||ln(n,n.return)),i&64&&Cn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var r=Jt;if(vt(t,e),gt(e),i&512&&(Fe||n===null||ln(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":s=r.getElementsByTagName("title")[0],(!s||s[Pi]||s[it]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(i),r.head.insertBefore(s,r.querySelector("head > title"))),ut(s,i,n),s[it]=e,et(s),i=s;break e;case"link":var d=B0("link","href",r).get(i+(n.href||""));if(d){for(var g=0;g<d.length;g++)if(s=d[g],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(g,1);break t}}s=r.createElement(i),ut(s,i,n),r.head.appendChild(s);break;case"meta":if(d=B0("meta","content",r).get(i+(n.content||""))){for(g=0;g<d.length;g++)if(s=d[g],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(g,1);break t}}s=r.createElement(i),ut(s,i,n),r.head.appendChild(s);break;default:throw Error(o(468,i))}s[it]=e,et(s),i=s}e.stateNode=i}else H0(r,e.type,e.stateNode);else e.stateNode=U0(r,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?H0(r,e.type,e.stateNode):U0(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&qs(e,e.memoizedProps,n.memoizedProps)}break;case 27:vt(t,e),gt(e),i&512&&(Fe||n===null||ln(n,n.return)),n!==null&&i&4&&qs(e,e.memoizedProps,n.memoizedProps);break;case 5:if(vt(t,e),gt(e),i&512&&(Fe||n===null||ln(n,n.return)),e.flags&32){r=e.stateNode;try{Ka(r,"")}catch(oe){Me(e,e.return,oe)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,qs(e,r,n!==null?n.memoizedProps:r)),i&1024&&(Xs=!0);break;case 6:if(vt(t,e),gt(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(oe){Me(e,e.return,oe)}}break;case 3:if(mo=null,r=Jt,Jt=ho(t.containerInfo),vt(t,e),Jt=r,gt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ti(t.containerInfo)}catch(oe){Me(e,e.return,oe)}Xs&&(Xs=!1,Hp(e));break;case 4:i=Jt,Jt=ho(e.stateNode.containerInfo),vt(t,e),gt(e),Jt=i;break;case 12:vt(t,e),gt(e);break;case 31:vt(t,e),gt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Wr(e,i)));break;case 13:vt(t,e),gt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eo=wt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Wr(e,i)));break;case 22:r=e.memoizedState!==null;var E=n!==null&&n.memoizedState!==null,B=Cn,W=Fe;if(Cn=B||r,Fe=W||E,vt(t,e),Fe=W,Cn=B,gt(e),i&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||E||Cn||Fe||Da(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){E=n=t;try{if(s=E.stateNode,r)d=s.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{g=E.stateNode;var te=E.memoizedProps.style,Y=te!=null&&te.hasOwnProperty("display")?te.display:null;g.style.display=Y==null||typeof Y=="boolean"?"":(""+Y).trim()}}catch(oe){Me(E,E.return,oe)}}}else if(t.tag===6){if(n===null){E=t;try{E.stateNode.nodeValue=r?"":E.memoizedProps}catch(oe){Me(E,E.return,oe)}}}else if(t.tag===18){if(n===null){E=t;try{var Q=E.stateNode;r?O0(Q,!0):O0(E.stateNode,!1)}catch(oe){Me(E,E.return,oe)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Wr(e,n))));break;case 19:vt(t,e),gt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Wr(e,i)));break;case 30:break;case 21:break;default:vt(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(zp(i)){n=i;break}i=i.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var r=n.stateNode,s=Ys(e);Fr(e,s,r);break;case 5:var d=n.stateNode;n.flags&32&&(Ka(d,""),n.flags&=-33);var g=Ys(e);Fr(e,g,d);break;case 3:case 4:var E=n.stateNode.containerInfo,B=Ys(e);Gs(e,B,E);break;default:throw Error(o(161))}}catch(W){Me(e,e.return,W)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Hp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Rn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Dp(e,t.alternate,t),t=t.sibling}function Da(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:In(4,t,t.return),Da(t);break;case 1:ln(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Op(t,t.return,n),Da(t);break;case 27:Al(t.stateNode);case 26:case 5:ln(t,t.return),Da(t);break;case 22:t.memoizedState===null&&Da(t);break;case 30:Da(t);break;default:Da(t)}e=e.sibling}}function _n(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,r=e,s=t,d=s.flags;switch(s.tag){case 0:case 11:case 15:_n(r,s,n),Sl(4,s);break;case 1:if(_n(r,s,n),i=s,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(B){Me(i,i.return,B)}if(i=s,r=i.updateQueue,r!==null){var g=i.stateNode;try{var E=r.shared.hiddenCallbacks;if(E!==null)for(r.shared.hiddenCallbacks=null,r=0;r<E.length;r++)vh(E[r],g)}catch(B){Me(i,i.return,B)}}n&&d&64&&_p(s),wl(s,s.return);break;case 27:Ap(s);case 26:case 5:_n(r,s,n),n&&i===null&&d&4&&jp(s),wl(s,s.return);break;case 12:_n(r,s,n);break;case 31:_n(r,s,n),n&&d&4&&kp(r,s);break;case 13:_n(r,s,n),n&&d&4&&Up(r,s);break;case 22:s.memoizedState===null&&_n(r,s,n),wl(s,s.return);break;case 30:break;default:_n(r,s,n)}t=t.sibling}}function Vs(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ul(n))}function Qs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ul(e))}function Ft(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$p(e,t,n,i),t=t.sibling}function $p(e,t,n,i){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Ft(e,t,n,i),r&2048&&Sl(9,t);break;case 1:Ft(e,t,n,i);break;case 3:Ft(e,t,n,i),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ul(e)));break;case 12:if(r&2048){Ft(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,d=s.id,g=s.onPostCommit;typeof g=="function"&&g(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){Me(t,t.return,E)}}else Ft(e,t,n,i);break;case 31:Ft(e,t,n,i);break;case 13:Ft(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,d=t.alternate,t.memoizedState!==null?s._visibility&2?Ft(e,t,n,i):El(e,t):s._visibility&2?Ft(e,t,n,i):(s._visibility|=2,pi(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Vs(d,t);break;case 24:Ft(e,t,n,i),r&2048&&Qs(t.alternate,t);break;default:Ft(e,t,n,i)}}function pi(e,t,n,i,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,d=t,g=n,E=i,B=d.flags;switch(d.tag){case 0:case 11:case 15:pi(s,d,g,E,r),Sl(8,d);break;case 23:break;case 22:var W=d.stateNode;d.memoizedState!==null?W._visibility&2?pi(s,d,g,E,r):El(s,d):(W._visibility|=2,pi(s,d,g,E,r)),r&&B&2048&&Vs(d.alternate,d);break;case 24:pi(s,d,g,E,r),r&&B&2048&&Qs(d.alternate,d);break;default:pi(s,d,g,E,r)}t=t.sibling}}function El(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,r=i.flags;switch(i.tag){case 22:El(n,i),r&2048&&Vs(i.alternate,i);break;case 24:El(n,i),r&2048&&Qs(i.alternate,i);break;default:El(n,i)}t=t.sibling}}var Cl=8192;function mi(e,t,n){if(e.subtreeFlags&Cl)for(e=e.child;e!==null;)qp(e,t,n),e=e.sibling}function qp(e,t,n){switch(e.tag){case 26:mi(e,t,n),e.flags&Cl&&e.memoizedState!==null&&H2(n,Jt,e.memoizedState,e.memoizedProps);break;case 5:mi(e,t,n);break;case 3:case 4:var i=Jt;Jt=ho(e.stateNode.containerInfo),mi(e,t,n),Jt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Cl,Cl=16777216,mi(e,t,n),Cl=i):mi(e,t,n));break;default:mi(e,t,n)}}function Yp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Tl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];tt=i,Xp(i,e)}Yp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gp(e),e=e.sibling}function Gp(e){switch(e.tag){case 0:case 11:case 15:Tl(e),e.flags&2048&&In(9,e,e.return);break;case 3:Tl(e);break;case 12:Tl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ir(e)):Tl(e);break;default:Tl(e)}}function Ir(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];tt=i,Xp(i,e)}Yp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:In(8,t,t.return),Ir(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ir(t));break;default:Ir(t)}e=e.sibling}}function Xp(e,t){for(;tt!==null;){var n=tt;switch(n.tag){case 0:case 11:case 15:In(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ul(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,tt=i;else e:for(n=e;tt!==null;){i=tt;var r=i.sibling,s=i.return;if(Np(i),i===n){tt=null;break e}if(r!==null){r.return=s,tt=r;break e}tt=s}}}var e2={getCacheForType:function(e){var t=rt(Ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return rt(Ke).controller.signal}},t2=typeof WeakMap=="function"?WeakMap:Map,je=0,ke=null,be=null,Se=0,Ae=0,jt=null,ea=!1,vi=!1,Zs=!1,On=0,Ve=0,ta=0,Na=0,Ks=0,zt=0,gi=0,Rl=null,yt=null,Ps=!1,eo=0,Vp=0,to=1/0,no=null,na=null,Ie=0,aa=null,yi=null,jn=0,Js=0,Fs=null,Qp=null,_l=0,Ws=null;function At(){return(je&2)!==0&&Se!==0?Se&-Se:j.T!==null?ic():ud()}function Zp(){if(zt===0)if((Se&536870912)===0||Ee){var e=cr;cr<<=1,(cr&3932160)===0&&(cr=262144),zt=e}else zt=536870912;return e=_t.current,e!==null&&(e.flags|=32),zt}function bt(e,t,n){(e===ke&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(bi(e,0),ia(e,Se,zt,!1)),Ki(e,n),((je&2)===0||e!==ke)&&(e===ke&&((je&2)===0&&(Na|=n),Ve===4&&ia(e,Se,zt,!1)),rn(e))}function Kp(e,t,n){if((je&6)!==0)throw Error(o(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Zi(e,t),r=i?i2(e,t):ec(e,t,!0),s=i;do{if(r===0){vi&&!i&&ia(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!n2(n)){r=ec(e,t,!1),s=!1;continue}if(r===2){if(s=t,e.errorRecoveryDisabledLanes&s)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var g=e;r=Rl;var E=g.current.memoizedState.isDehydrated;if(E&&(bi(g,d).flags|=256),d=ec(g,d,!1),d!==2){if(Zs&&!E){g.errorRecoveryDisabledLanes|=s,Na|=s,r=4;break e}s=yt,yt=r,s!==null&&(yt===null?yt=s:yt.push.apply(yt,s))}r=d}if(s=!1,r!==2)continue}}if(r===1){bi(e,0),ia(e,t,0,!0);break}e:{switch(i=e,s=r,s){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:ia(i,t,zt,!ea);break e;case 2:yt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(r=eo+300-wt(),10<r)){if(ia(i,t,zt,!ea),dr(i,0,!0)!==0)break e;jn=t,i.timeoutHandle=T0(Pp.bind(null,i,n,yt,no,Ps,t,zt,Na,gi,ea,s,"Throttled",-0,0),r);break e}Pp(i,n,yt,no,Ps,t,zt,Na,gi,ea,s,null,-0,0)}}break}while(!0);rn(e)}function Pp(e,t,n,i,r,s,d,g,E,B,W,te,Y,Q){if(e.timeoutHandle=-1,te=t.subtreeFlags,te&8192||(te&16785408)===16785408){te={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pn},qp(t,s,te);var oe=(s&62914560)===s?eo-wt():(s&4194048)===s?Vp-wt():0;if(oe=$2(te,oe),oe!==null){jn=s,e.cancelPendingCommit=oe(a0.bind(null,e,t,s,n,i,r,d,g,E,W,te,null,Y,Q)),ia(e,s,d,!B);return}}a0(e,t,s,n,i,r,d,g,E)}function n2(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Tt(s(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ia(e,t,n,i){t&=~Ks,t&=~Na,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var r=t;0<r;){var s=31-Ct(r),d=1<<s;i[s]=-1,r&=~d}n!==0&&ld(e,n,t)}function ao(){return(je&6)===0?(Ol(0),!1):!0}function Is(){if(be!==null){if(Ae===0)var e=be.return;else e=be,yn=Ta=null,ms(e),si=null,cl=0,e=be;for(;e!==null;)Rp(e.alternate,e),e=e.return;be=null}}function bi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,w2(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),jn=0,Is(),ke=e,be=n=vn(e.current,null),Se=t,Ae=0,jt=null,ea=!1,vi=Zi(e,t),Zs=!1,gi=zt=Ks=Na=ta=Ve=0,yt=Rl=null,Ps=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-Ct(i),s=1<<r;t|=e[r],i&=~s}return On=t,Cr(),n}function Jp(e,t){me=null,j.H=yl,t===ui||t===Mr?(t=dh(),Ae=3):t===as?(t=dh(),Ae=4):Ae=t===As?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,jt=t,be===null&&(Ve=1,Qr(e,$t(t,e.current)))}function Fp(){var e=_t.current;return e===null?!0:(Se&4194048)===Se?Xt===null:(Se&62914560)===Se||(Se&536870912)!==0?e===Xt:!1}function Wp(){var e=j.H;return j.H=yl,e===null?yl:e}function Ip(){var e=j.A;return j.A=e2,e}function io(){Ve=4,ea||(Se&4194048)!==Se&&_t.current!==null||(vi=!0),(ta&134217727)===0&&(Na&134217727)===0||ke===null||ia(ke,Se,zt,!1)}function ec(e,t,n){var i=je;je|=2;var r=Wp(),s=Ip();(ke!==e||Se!==t)&&(no=null,bi(e,t)),t=!1;var d=Ve;e:do try{if(Ae!==0&&be!==null){var g=be,E=jt;switch(Ae){case 8:Is(),d=6;break e;case 3:case 2:case 9:case 6:_t.current===null&&(t=!0);var B=Ae;if(Ae=0,jt=null,xi(e,g,E,B),n&&vi){d=0;break e}break;default:B=Ae,Ae=0,jt=null,xi(e,g,E,B)}}a2(),d=Ve;break}catch(W){Jp(e,W)}while(!0);return t&&e.shellSuspendCounter++,yn=Ta=null,je=i,j.H=r,j.A=s,be===null&&(ke=null,Se=0,Cr()),d}function a2(){for(;be!==null;)e0(be)}function i2(e,t){var n=je;je|=2;var i=Wp(),r=Ip();ke!==e||Se!==t?(no=null,to=wt()+500,bi(e,t)):vi=Zi(e,t);e:do try{if(Ae!==0&&be!==null){t=be;var s=jt;t:switch(Ae){case 1:Ae=0,jt=null,xi(e,t,s,1);break;case 2:case 9:if(ch(s)){Ae=0,jt=null,t0(t);break}t=function(){Ae!==2&&Ae!==9||ke!==e||(Ae=7),rn(e)},s.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:ch(s)?(Ae=0,jt=null,t0(t)):(Ae=0,jt=null,xi(e,t,s,7));break;case 5:var d=null;switch(be.tag){case 26:d=be.memoizedState;case 5:case 27:var g=be;if(d?$0(d):g.stateNode.complete){Ae=0,jt=null;var E=g.sibling;if(E!==null)be=E;else{var B=g.return;B!==null?(be=B,lo(B)):be=null}break t}}Ae=0,jt=null,xi(e,t,s,5);break;case 6:Ae=0,jt=null,xi(e,t,s,6);break;case 8:Is(),Ve=6;break e;default:throw Error(o(462))}}l2();break}catch(W){Jp(e,W)}while(!0);return yn=Ta=null,j.H=i,j.A=r,je=n,be!==null?0:(ke=null,Se=0,Cr(),Ve)}function l2(){for(;be!==null&&!Og();)e0(be)}function e0(e){var t=Cp(e.alternate,e,On);e.memoizedProps=e.pendingProps,t===null?lo(e):be=t}function t0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yp(n,t,t.pendingProps,t.type,void 0,Se);break;case 11:t=yp(n,t,t.pendingProps,t.type.render,t.ref,Se);break;case 5:ms(t);default:Rp(n,t),t=be=Id(t,On),t=Cp(n,t,On)}e.memoizedProps=e.pendingProps,t===null?lo(e):be=t}function xi(e,t,n,i){yn=Ta=null,ms(t),si=null,cl=0;var r=t.return;try{if(Zy(e,r,t,n,Se)){Ve=1,Qr(e,$t(n,e.current)),be=null;return}}catch(s){if(r!==null)throw be=r,s;Ve=1,Qr(e,$t(n,e.current)),be=null;return}t.flags&32768?(Ee||i===1?e=!0:vi||(Se&536870912)!==0?e=!1:(ea=e=!0,(i===2||i===9||i===3||i===6)&&(i=_t.current,i!==null&&i.tag===13&&(i.flags|=16384))),n0(t,e)):lo(t)}function lo(e){var t=e;do{if((t.flags&32768)!==0){n0(t,ea);return}e=t.return;var n=Jy(t.alternate,t,On);if(n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Ve===0&&(Ve=5)}function n0(e,t){do{var n=Fy(e.alternate,e);if(n!==null){n.flags&=32767,be=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){be=e;return}be=e=n}while(e!==null);Ve=6,be=null}function a0(e,t,n,i,r,s,d,g,E){e.cancelPendingCommit=null;do ro();while(Ie!==0);if((je&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(s=t.lanes|t.childLanes,s|=Yu,Bg(e,n,s,d,g,E),e===ke&&(be=ke=null,Se=0),yi=t,aa=e,jn=n,Js=s,Fs=r,Qp=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,s2(ur,function(){return u0(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=j.T,j.T=null,r=$.p,$.p=2,d=je,je|=4;try{Wy(e,t,n)}finally{je=d,$.p=r,j.T=i}}Ie=1,i0(),l0(),r0()}}function i0(){if(Ie===1){Ie=0;var e=aa,t=yi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=j.T,j.T=null;var i=$.p;$.p=2;var r=je;je|=4;try{Bp(t,e);var s=dc,d=Xd(e.containerInfo),g=s.focusedElem,E=s.selectionRange;if(d!==g&&g&&g.ownerDocument&&Gd(g.ownerDocument.documentElement,g)){if(E!==null&&Uu(g)){var B=E.start,W=E.end;if(W===void 0&&(W=B),"selectionStart"in g)g.selectionStart=B,g.selectionEnd=Math.min(W,g.value.length);else{var te=g.ownerDocument||document,Y=te&&te.defaultView||window;if(Y.getSelection){var Q=Y.getSelection(),oe=g.textContent.length,de=Math.min(E.start,oe),Le=E.end===void 0?de:Math.min(E.end,oe);!Q.extend&&de>Le&&(d=Le,Le=de,de=d);var D=Yd(g,de),O=Yd(g,Le);if(D&&O&&(Q.rangeCount!==1||Q.anchorNode!==D.node||Q.anchorOffset!==D.offset||Q.focusNode!==O.node||Q.focusOffset!==O.offset)){var U=te.createRange();U.setStart(D.node,D.offset),Q.removeAllRanges(),de>Le?(Q.addRange(U),Q.extend(O.node,O.offset)):(U.setEnd(O.node,O.offset),Q.addRange(U))}}}}for(te=[],Q=g;Q=Q.parentNode;)Q.nodeType===1&&te.push({element:Q,left:Q.scrollLeft,top:Q.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<te.length;g++){var I=te[g];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}bo=!!fc,dc=fc=null}finally{je=r,$.p=i,j.T=n}}e.current=t,Ie=2}}function l0(){if(Ie===2){Ie=0;var e=aa,t=yi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=j.T,j.T=null;var i=$.p;$.p=2;var r=je;je|=4;try{Dp(e,t.alternate,t)}finally{je=r,$.p=i,j.T=n}}Ie=3}}function r0(){if(Ie===4||Ie===3){Ie=0,jg();var e=aa,t=yi,n=jn,i=Qp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ie=5:(Ie=0,yi=aa=null,o0(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(na=null),yu(n),t=t.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Qi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=j.T,r=$.p,$.p=2,j.T=null;try{for(var s=e.onRecoverableError,d=0;d<i.length;d++){var g=i[d];s(g.value,{componentStack:g.stack})}}finally{j.T=t,$.p=r}}(jn&3)!==0&&ro(),rn(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===Ws?_l++:(_l=0,Ws=e):_l=0,Ol(0)}}function o0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ul(t)))}function ro(){return i0(),l0(),r0(),u0()}function u0(){if(Ie!==5)return!1;var e=aa,t=Js;Js=0;var n=yu(jn),i=j.T,r=$.p;try{$.p=32>n?32:n,j.T=null,n=Fs,Fs=null;var s=aa,d=jn;if(Ie=0,yi=aa=null,jn=0,(je&6)!==0)throw Error(o(331));var g=je;if(je|=4,Gp(s.current),$p(s,s.current,d,n),je=g,Ol(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Qi,s)}catch{}return!0}finally{$.p=r,j.T=i,o0(e,t)}}function s0(e,t,n){t=$t(n,t),t=zs(e.stateNode,t,2),e=Jn(e,t,2),e!==null&&(Ki(e,2),rn(e))}function Me(e,t,n){if(e.tag===3)s0(e,e,n);else for(;t!==null;){if(t.tag===3){s0(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(na===null||!na.has(i))){e=$t(n,e),n=cp(2),i=Jn(t,n,2),i!==null&&(fp(n,i,t,e),Ki(i,2),rn(i));break}}t=t.return}}function tc(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new t2;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(Zs=!0,r.add(n),e=r2.bind(null,e,t,n),t.then(e,e))}function r2(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ke===e&&(Se&n)===n&&(Ve===4||Ve===3&&(Se&62914560)===Se&&300>wt()-eo?(je&2)===0&&bi(e,0):Ks|=n,gi===Se&&(gi=0)),rn(e)}function c0(e,t){t===0&&(t=id()),e=wa(e,t),e!==null&&(Ki(e,t),rn(e))}function o2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),c0(e,n)}function u2(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),c0(e,n)}function s2(e,t){return pu(e,t)}var oo=null,Si=null,nc=!1,uo=!1,ac=!1,la=0;function rn(e){e!==Si&&e.next===null&&(Si===null?oo=Si=e:Si=Si.next=e),uo=!0,nc||(nc=!0,f2())}function Ol(e,t){if(!ac&&uo){ac=!0;do for(var n=!1,i=oo;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var s=0;else{var d=i.suspendedLanes,g=i.pingedLanes;s=(1<<31-Ct(42|e)+1)-1,s&=r&~(d&~g),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,p0(i,s))}else s=Se,s=dr(i,i===ke?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||Zi(i,s)||(n=!0,p0(i,s));i=i.next}while(n);ac=!1}}function c2(){f0()}function f0(){uo=nc=!1;var e=0;la!==0&&S2()&&(e=la);for(var t=wt(),n=null,i=oo;i!==null;){var r=i.next,s=d0(i,t);s===0?(i.next=null,n===null?oo=r:n.next=r,r===null&&(Si=n)):(n=i,(e!==0||(s&3)!==0)&&(uo=!0)),i=r}Ie!==0&&Ie!==5||Ol(e),la!==0&&(la=0)}function d0(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var d=31-Ct(s),g=1<<d,E=r[d];E===-1?((g&n)===0||(g&i)!==0)&&(r[d]=Ug(g,t)):E<=t&&(e.expiredLanes|=g),s&=~g}if(t=ke,n=Se,n=dr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&mu(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Zi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&mu(i),yu(n)){case 2:case 8:n=nd;break;case 32:n=ur;break;case 268435456:n=ad;break;default:n=ur}return i=h0.bind(null,e),n=pu(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&mu(i),e.callbackPriority=2,e.callbackNode=null,2}function h0(e,t){if(Ie!==0&&Ie!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ro()&&e.callbackNode!==n)return null;var i=Se;return i=dr(e,e===ke?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Kp(e,i,t),d0(e,wt()),e.callbackNode!=null&&e.callbackNode===n?h0.bind(null,e):null)}function p0(e,t){if(ro())return null;Kp(e,t,!0)}function f2(){E2(function(){(je&6)!==0?pu(td,c2):f0()})}function ic(){if(la===0){var e=ri;e===0&&(e=sr,sr<<=1,(sr&261888)===0&&(sr=256)),la=e}return la}function m0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vr(""+e)}function v0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function d2(e,t,n,i,r){if(t==="submit"&&n&&n.stateNode===r){var s=m0((r[ht]||null).action),d=i.submitter;d&&(t=(t=d[ht]||null)?m0(t.formAction):d.getAttribute("formAction"),t!==null&&(s=t,d=null));var g=new xr("action","action",null,i,r);e.push({event:g,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(la!==0){var E=d?v0(r,d):new FormData(r);Cs(n,{pending:!0,data:E,method:r.method,action:s},null,E)}}else typeof s=="function"&&(g.preventDefault(),E=d?v0(r,d):new FormData(r),Cs(n,{pending:!0,data:E,method:r.method,action:s},s,E))},currentTarget:r}]})}}for(var lc=0;lc<qu.length;lc++){var rc=qu[lc],h2=rc.toLowerCase(),p2=rc[0].toUpperCase()+rc.slice(1);Pt(h2,"on"+p2)}Pt(Zd,"onAnimationEnd"),Pt(Kd,"onAnimationIteration"),Pt(Pd,"onAnimationStart"),Pt("dblclick","onDoubleClick"),Pt("focusin","onFocus"),Pt("focusout","onBlur"),Pt(zy,"onTransitionRun"),Pt(Ay,"onTransitionStart"),Pt(My,"onTransitionCancel"),Pt(Jd,"onTransitionEnd"),Qa("onMouseEnter",["mouseout","mouseover"]),Qa("onMouseLeave",["mouseout","mouseover"]),Qa("onPointerEnter",["pointerout","pointerover"]),Qa("onPointerLeave",["pointerout","pointerover"]),ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ya("onBeforeInput",["compositionend","keypress","textInput","paste"]),ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jl));function g0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var d=i.length-1;0<=d;d--){var g=i[d],E=g.instance,B=g.currentTarget;if(g=g.listener,E!==s&&r.isPropagationStopped())break e;s=g,r.currentTarget=B;try{s(r)}catch(W){Er(W)}r.currentTarget=null,s=E}else for(d=0;d<i.length;d++){if(g=i[d],E=g.instance,B=g.currentTarget,g=g.listener,E!==s&&r.isPropagationStopped())break e;s=g,r.currentTarget=B;try{s(r)}catch(W){Er(W)}r.currentTarget=null,s=E}}}}function xe(e,t){var n=t[bu];n===void 0&&(n=t[bu]=new Set);var i=e+"__bubble";n.has(i)||(y0(t,e,2,!1),n.add(i))}function oc(e,t,n){var i=0;t&&(i|=4),y0(n,e,i,t)}var so="_reactListening"+Math.random().toString(36).slice(2);function uc(e){if(!e[so]){e[so]=!0,fd.forEach(function(n){n!=="selectionchange"&&(m2.has(n)||oc(n,!1,e),oc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[so]||(t[so]=!0,oc("selectionchange",!1,t))}}function y0(e,t,n,i){switch(Z0(t)){case 2:var r=G2;break;case 8:r=X2;break;default:r=Ec}n=r.bind(null,t,n,e),r=void 0,!Ou||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function sc(e,t,n,i,r){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var g=i.stateNode.containerInfo;if(g===r)break;if(d===4)for(d=i.return;d!==null;){var E=d.tag;if((E===3||E===4)&&d.stateNode.containerInfo===r)return;d=d.return}for(;g!==null;){if(d=Ga(g),d===null)return;if(E=d.tag,E===5||E===6||E===26||E===27){i=s=d;continue e}g=g.parentNode}}i=i.return}Ed(function(){var B=s,W=Ru(n),te=[];e:{var Y=Fd.get(e);if(Y!==void 0){var Q=xr,oe=e;switch(e){case"keypress":if(yr(n)===0)break e;case"keydown":case"keyup":Q=uy;break;case"focusin":oe="focus",Q=Mu;break;case"focusout":oe="blur",Q=Mu;break;case"beforeblur":case"afterblur":Q=Mu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=Rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=Jg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=fy;break;case Zd:case Kd:case Pd:Q=Ig;break;case Jd:Q=hy;break;case"scroll":case"scrollend":Q=Kg;break;case"wheel":Q=my;break;case"copy":case"cut":case"paste":Q=ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=Od;break;case"toggle":case"beforetoggle":Q=gy}var de=(t&4)!==0,Le=!de&&(e==="scroll"||e==="scrollend"),D=de?Y!==null?Y+"Capture":null:Y;de=[];for(var O=B,U;O!==null;){var I=O;if(U=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||U===null||D===null||(I=Fi(O,D),I!=null&&de.push(zl(O,I,U))),Le)break;O=O.return}0<de.length&&(Y=new Q(Y,oe,null,n,W),te.push({event:Y,listeners:de}))}}if((t&7)===0){e:{if(Y=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",Y&&n!==Tu&&(oe=n.relatedTarget||n.fromElement)&&(Ga(oe)||oe[Ya]))break e;if((Q||Y)&&(Y=W.window===W?W:(Y=W.ownerDocument)?Y.defaultView||Y.parentWindow:window,Q?(oe=n.relatedTarget||n.toElement,Q=B,oe=oe?Ga(oe):null,oe!==null&&(Le=f(oe),de=oe.tag,oe!==Le||de!==5&&de!==27&&de!==6)&&(oe=null)):(Q=null,oe=B),Q!==oe)){if(de=Rd,I="onMouseLeave",D="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(de=Od,I="onPointerLeave",D="onPointerEnter",O="pointer"),Le=Q==null?Y:Ji(Q),U=oe==null?Y:Ji(oe),Y=new de(I,O+"leave",Q,n,W),Y.target=Le,Y.relatedTarget=U,I=null,Ga(W)===B&&(de=new de(D,O+"enter",oe,n,W),de.target=U,de.relatedTarget=Le,I=de),Le=I,Q&&oe)t:{for(de=v2,D=Q,O=oe,U=0,I=D;I;I=de(I))U++;I=0;for(var fe=O;fe;fe=de(fe))I++;for(;0<U-I;)D=de(D),U--;for(;0<I-U;)O=de(O),I--;for(;U--;){if(D===O||O!==null&&D===O.alternate){de=D;break t}D=de(D),O=de(O)}de=null}else de=null;Q!==null&&b0(te,Y,Q,de,!1),oe!==null&&Le!==null&&b0(te,Le,oe,de,!0)}}e:{if(Y=B?Ji(B):window,Q=Y.nodeName&&Y.nodeName.toLowerCase(),Q==="select"||Q==="input"&&Y.type==="file")var Re=kd;else if(Nd(Y))if(Ud)Re=_y;else{Re=Ty;var ue=Cy}else Q=Y.nodeName,!Q||Q.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?B&&Cu(B.elementType)&&(Re=kd):Re=Ry;if(Re&&(Re=Re(e,B))){Ld(te,Re,n,W);break e}ue&&ue(e,Y,B),e==="focusout"&&B&&Y.type==="number"&&B.memoizedProps.value!=null&&Eu(Y,"number",Y.value)}switch(ue=B?Ji(B):window,e){case"focusin":(Nd(ue)||ue.contentEditable==="true")&&(Wa=ue,Bu=B,ll=null);break;case"focusout":ll=Bu=Wa=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,Vd(te,n,W);break;case"selectionchange":if(jy)break;case"keydown":case"keyup":Vd(te,n,W)}var ve;if(Nu)e:{switch(e){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Fa?Md(e,n)&&(we="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(we="onCompositionStart");we&&(jd&&n.locale!=="ko"&&(Fa||we!=="onCompositionStart"?we==="onCompositionEnd"&&Fa&&(ve=Cd()):(Gn=W,ju="value"in Gn?Gn.value:Gn.textContent,Fa=!0)),ue=co(B,we),0<ue.length&&(we=new _d(we,e,null,n,W),te.push({event:we,listeners:ue}),ve?we.data=ve:(ve=Dd(n),ve!==null&&(we.data=ve)))),(ve=by?xy(e,n):Sy(e,n))&&(we=co(B,"onBeforeInput"),0<we.length&&(ue=new _d("onBeforeInput","beforeinput",null,n,W),te.push({event:ue,listeners:we}),ue.data=ve)),d2(te,e,B,n,W)}g0(te,t)})}function zl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function co(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=Fi(e,n),r!=null&&i.unshift(zl(e,r,s)),r=Fi(e,t),r!=null&&i.push(zl(e,r,s))),e.tag===3)return i;e=e.return}return[]}function v2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function b0(e,t,n,i,r){for(var s=t._reactName,d=[];n!==null&&n!==i;){var g=n,E=g.alternate,B=g.stateNode;if(g=g.tag,E!==null&&E===i)break;g!==5&&g!==26&&g!==27||B===null||(E=B,r?(B=Fi(n,s),B!=null&&d.unshift(zl(n,B,E))):r||(B=Fi(n,s),B!=null&&d.push(zl(n,B,E)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var g2=/\r\n?/g,y2=/\u0000|\uFFFD/g;function x0(e){return(typeof e=="string"?e:""+e).replace(g2,`
`).replace(y2,"")}function S0(e,t){return t=x0(t),x0(e)===t}function Ne(e,t,n,i,r,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ka(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ka(e,""+i);break;case"className":pr(e,"class",i);break;case"tabIndex":pr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":pr(e,n,i);break;case"style":Sd(e,i,s);break;case"data":if(t!=="object"){pr(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=vr(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&Ne(e,t,"name",r.name,r,null),Ne(e,t,"formEncType",r.formEncType,r,null),Ne(e,t,"formMethod",r.formMethod,r,null),Ne(e,t,"formTarget",r.formTarget,r,null)):(Ne(e,t,"encType",r.encType,r,null),Ne(e,t,"method",r.method,r,null),Ne(e,t,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=vr(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=pn);break;case"onScroll":i!=null&&xe("scroll",e);break;case"onScrollEnd":i!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=vr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":xe("beforetoggle",e),xe("toggle",e),hr(e,"popover",i);break;case"xlinkActuate":hn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":hn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":hn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":hn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":hn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":hn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":hn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":hn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":hn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":hr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Qg.get(n)||n,hr(e,n,i))}}function cc(e,t,n,i,r,s){switch(n){case"style":Sd(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Ka(e,i):(typeof i=="number"||typeof i=="bigint")&&Ka(e,""+i);break;case"onScroll":i!=null&&xe("scroll",e);break;case"onScrollEnd":i!=null&&xe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=pn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!dd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),s=e[ht]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,r),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,r);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):hr(e,n,i)}}}function ut(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var i=!1,r=!1,s;for(s in n)if(n.hasOwnProperty(s)){var d=n[s];if(d!=null)switch(s){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ne(e,t,s,d,n,null)}}r&&Ne(e,t,"srcSet",n.srcSet,n,null),i&&Ne(e,t,"src",n.src,n,null);return;case"input":xe("invalid",e);var g=s=d=r=null,E=null,B=null;for(i in n)if(n.hasOwnProperty(i)){var W=n[i];if(W!=null)switch(i){case"name":r=W;break;case"type":d=W;break;case"checked":E=W;break;case"defaultChecked":B=W;break;case"value":s=W;break;case"defaultValue":g=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(o(137,t));break;default:Ne(e,t,i,W,n,null)}}gd(e,s,g,E,B,d,r,!1);return;case"select":xe("invalid",e),i=d=s=null;for(r in n)if(n.hasOwnProperty(r)&&(g=n[r],g!=null))switch(r){case"value":s=g;break;case"defaultValue":d=g;break;case"multiple":i=g;default:Ne(e,t,r,g,n,null)}t=s,n=d,e.multiple=!!i,t!=null?Za(e,!!i,t,!1):n!=null&&Za(e,!!i,n,!0);return;case"textarea":xe("invalid",e),s=r=i=null;for(d in n)if(n.hasOwnProperty(d)&&(g=n[d],g!=null))switch(d){case"value":i=g;break;case"defaultValue":r=g;break;case"children":s=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(o(91));break;default:Ne(e,t,d,g,n,null)}bd(e,i,r,s);return;case"option":for(E in n)if(n.hasOwnProperty(E)&&(i=n[E],i!=null))switch(E){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ne(e,t,E,i,n,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(i=0;i<jl.length;i++)xe(jl[i],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in n)if(n.hasOwnProperty(B)&&(i=n[B],i!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ne(e,t,B,i,n,null)}return;default:if(Cu(t)){for(W in n)n.hasOwnProperty(W)&&(i=n[W],i!==void 0&&cc(e,t,W,i,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(i=n[g],i!=null&&Ne(e,t,g,i,n,null))}function b2(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,d=null,g=null,E=null,B=null,W=null;for(Q in n){var te=n[Q];if(n.hasOwnProperty(Q)&&te!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":E=te;default:i.hasOwnProperty(Q)||Ne(e,t,Q,null,i,te)}}for(var Y in i){var Q=i[Y];if(te=n[Y],i.hasOwnProperty(Y)&&(Q!=null||te!=null))switch(Y){case"type":s=Q;break;case"name":r=Q;break;case"checked":B=Q;break;case"defaultChecked":W=Q;break;case"value":d=Q;break;case"defaultValue":g=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(o(137,t));break;default:Q!==te&&Ne(e,t,Y,Q,i,te)}}wu(e,d,g,E,B,W,s,r);return;case"select":Q=d=g=Y=null;for(s in n)if(E=n[s],n.hasOwnProperty(s)&&E!=null)switch(s){case"value":break;case"multiple":Q=E;default:i.hasOwnProperty(s)||Ne(e,t,s,null,i,E)}for(r in i)if(s=i[r],E=n[r],i.hasOwnProperty(r)&&(s!=null||E!=null))switch(r){case"value":Y=s;break;case"defaultValue":g=s;break;case"multiple":d=s;default:s!==E&&Ne(e,t,r,s,i,E)}t=g,n=d,i=Q,Y!=null?Za(e,!!n,Y,!1):!!i!=!!n&&(t!=null?Za(e,!!n,t,!0):Za(e,!!n,n?[]:"",!1));return;case"textarea":Q=Y=null;for(g in n)if(r=n[g],n.hasOwnProperty(g)&&r!=null&&!i.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Ne(e,t,g,null,i,r)}for(d in i)if(r=i[d],s=n[d],i.hasOwnProperty(d)&&(r!=null||s!=null))switch(d){case"value":Y=r;break;case"defaultValue":Q=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));break;default:r!==s&&Ne(e,t,d,r,i,s)}yd(e,Y,Q);return;case"option":for(var oe in n)if(Y=n[oe],n.hasOwnProperty(oe)&&Y!=null&&!i.hasOwnProperty(oe))switch(oe){case"selected":e.selected=!1;break;default:Ne(e,t,oe,null,i,Y)}for(E in i)if(Y=i[E],Q=n[E],i.hasOwnProperty(E)&&Y!==Q&&(Y!=null||Q!=null))switch(E){case"selected":e.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:Ne(e,t,E,Y,i,Q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in n)Y=n[de],n.hasOwnProperty(de)&&Y!=null&&!i.hasOwnProperty(de)&&Ne(e,t,de,null,i,Y);for(B in i)if(Y=i[B],Q=n[B],i.hasOwnProperty(B)&&Y!==Q&&(Y!=null||Q!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(o(137,t));break;default:Ne(e,t,B,Y,i,Q)}return;default:if(Cu(t)){for(var Le in n)Y=n[Le],n.hasOwnProperty(Le)&&Y!==void 0&&!i.hasOwnProperty(Le)&&cc(e,t,Le,void 0,i,Y);for(W in i)Y=i[W],Q=n[W],!i.hasOwnProperty(W)||Y===Q||Y===void 0&&Q===void 0||cc(e,t,W,Y,i,Q);return}}for(var D in n)Y=n[D],n.hasOwnProperty(D)&&Y!=null&&!i.hasOwnProperty(D)&&Ne(e,t,D,null,i,Y);for(te in i)Y=i[te],Q=n[te],!i.hasOwnProperty(te)||Y===Q||Y==null&&Q==null||Ne(e,t,te,Y,i,Q)}function w0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function x2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var r=n[i],s=r.transferSize,d=r.initiatorType,g=r.duration;if(s&&g&&w0(d)){for(d=0,g=r.responseEnd,i+=1;i<n.length;i++){var E=n[i],B=E.startTime;if(B>g)break;var W=E.transferSize,te=E.initiatorType;W&&w0(te)&&(E=E.responseEnd,d+=W*(E<g?1:(g-B)/(E-B)))}if(--i,t+=8*(s+d)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var fc=null,dc=null;function fo(e){return e.nodeType===9?e:e.ownerDocument}function E0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function C0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function hc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pc=null;function S2(){var e=window.event;return e&&e.type==="popstate"?e===pc?!1:(pc=e,!0):(pc=null,!1)}var T0=typeof setTimeout=="function"?setTimeout:void 0,w2=typeof clearTimeout=="function"?clearTimeout:void 0,R0=typeof Promise=="function"?Promise:void 0,E2=typeof queueMicrotask=="function"?queueMicrotask:typeof R0<"u"?function(e){return R0.resolve(null).then(e).catch(C2)}:T0;function C2(e){setTimeout(function(){throw e})}function ra(e){return e==="head"}function _0(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(r),Ti(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Al(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Al(n);for(var s=n.firstChild;s;){var d=s.nextSibling,g=s.nodeName;s[Pi]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=d}}else n==="body"&&Al(e.ownerDocument.body);n=r}while(n);Ti(t)}function O0(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function mc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":mc(n),xu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function T2(e,t,n,i){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Pi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Vt(e.nextSibling),e===null)break}return null}function R2(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Vt(e.nextSibling),e===null))return null;return e}function j0(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Vt(e.nextSibling),e===null))return null;return e}function vc(e){return e.data==="$?"||e.data==="$~"}function gc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _2(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var yc=null;function z0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Vt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function A0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function M0(e,t,n){switch(t=fo(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Al(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xu(e)}var Qt=new Map,D0=new Set;function ho(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var zn=$.d;$.d={f:O2,r:j2,D:z2,C:A2,L:M2,m:D2,X:L2,S:N2,M:k2};function O2(){var e=zn.f(),t=ao();return e||t}function j2(e){var t=Xa(e);t!==null&&t.tag===5&&t.type==="form"?Jh(t):zn.r(e)}var wi=typeof document>"u"?null:document;function N0(e,t,n){var i=wi;if(i&&typeof t=="string"&&t){var r=Bt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),D0.has(r)||(D0.add(r),e={rel:e,crossOrigin:n,href:t},i.querySelector(r)===null&&(t=i.createElement("link"),ut(t,"link",e),et(t),i.head.appendChild(t)))}}function z2(e){zn.D(e),N0("dns-prefetch",e,null)}function A2(e,t){zn.C(e,t),N0("preconnect",e,t)}function M2(e,t,n){zn.L(e,t,n);var i=wi;if(i&&e&&t){var r='link[rel="preload"][as="'+Bt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Bt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Bt(n.imageSizes)+'"]')):r+='[href="'+Bt(e)+'"]';var s=r;switch(t){case"style":s=Ei(e);break;case"script":s=Ci(e)}Qt.has(s)||(e=x({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Qt.set(s,e),i.querySelector(r)!==null||t==="style"&&i.querySelector(Ml(s))||t==="script"&&i.querySelector(Dl(s))||(t=i.createElement("link"),ut(t,"link",e),et(t),i.head.appendChild(t)))}}function D2(e,t){zn.m(e,t);var n=wi;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Bt(i)+'"][href="'+Bt(e)+'"]',s=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Ci(e)}if(!Qt.has(s)&&(e=x({rel:"modulepreload",href:e},t),Qt.set(s,e),n.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Dl(s)))return}i=n.createElement("link"),ut(i,"link",e),et(i),n.head.appendChild(i)}}}function N2(e,t,n){zn.S(e,t,n);var i=wi;if(i&&e){var r=Va(i).hoistableStyles,s=Ei(e);t=t||"default";var d=r.get(s);if(!d){var g={loading:0,preload:null};if(d=i.querySelector(Ml(s)))g.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Qt.get(s))&&bc(e,n);var E=d=i.createElement("link");et(E),ut(E,"link",e),E._p=new Promise(function(B,W){E.onload=B,E.onerror=W}),E.addEventListener("load",function(){g.loading|=1}),E.addEventListener("error",function(){g.loading|=2}),g.loading|=4,po(d,t,i)}d={type:"stylesheet",instance:d,count:1,state:g},r.set(s,d)}}}function L2(e,t){zn.X(e,t);var n=wi;if(n&&e){var i=Va(n).hoistableScripts,r=Ci(e),s=i.get(r);s||(s=n.querySelector(Dl(r)),s||(e=x({src:e,async:!0},t),(t=Qt.get(r))&&xc(e,t),s=n.createElement("script"),et(s),ut(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function k2(e,t){zn.M(e,t);var n=wi;if(n&&e){var i=Va(n).hoistableScripts,r=Ci(e),s=i.get(r);s||(s=n.querySelector(Dl(r)),s||(e=x({src:e,async:!0,type:"module"},t),(t=Qt.get(r))&&xc(e,t),s=n.createElement("script"),et(s),ut(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function L0(e,t,n,i){var r=(r=he.current)?ho(r):null;if(!r)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ei(n.href),n=Va(r).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ei(n.href);var s=Va(r).hoistableStyles,d=s.get(e);if(d||(r=r.ownerDocument||r,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,d),(s=r.querySelector(Ml(e)))&&!s._p&&(d.instance=s,d.state.loading=5),Qt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Qt.set(e,n),s||U2(r,e,n,d.state))),t&&i===null)throw Error(o(528,""));return d}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ci(n),n=Va(r).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Ei(e){return'href="'+Bt(e)+'"'}function Ml(e){return'link[rel="stylesheet"]['+e+"]"}function k0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function U2(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ut(t,"link",n),et(t),e.head.appendChild(t))}function Ci(e){return'[src="'+Bt(e)+'"]'}function Dl(e){return"script[async]"+e}function U0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Bt(n.href)+'"]');if(i)return t.instance=i,et(i),i;var r=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),et(i),ut(i,"style",r),po(i,n.precedence,e),t.instance=i;case"stylesheet":r=Ei(n.href);var s=e.querySelector(Ml(r));if(s)return t.state.loading|=4,t.instance=s,et(s),s;i=k0(n),(r=Qt.get(r))&&bc(i,r),s=(e.ownerDocument||e).createElement("link"),et(s);var d=s;return d._p=new Promise(function(g,E){d.onload=g,d.onerror=E}),ut(s,"link",i),t.state.loading|=4,po(s,n.precedence,e),t.instance=s;case"script":return s=Ci(n.src),(r=e.querySelector(Dl(s)))?(t.instance=r,et(r),r):(i=n,(r=Qt.get(s))&&(i=x({},n),xc(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),et(r),ut(r,"link",i),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,po(i,n.precedence,e));return t.instance}function po(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,s=r,d=0;d<i.length;d++){var g=i[d];if(g.dataset.precedence===t)s=g;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function bc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function xc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var mo=null;function B0(e,t,n){if(mo===null){var i=new Map,r=mo=new Map;r.set(n,i)}else r=mo,i=r.get(n),i||(i=new Map,r.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var s=n[r];if(!(s[Pi]||s[it]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var d=s.getAttribute(t)||"";d=e+d;var g=i.get(d);g?g.push(s):i.set(d,[s])}}return i}function H0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function B2(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function H2(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=Ei(i.href),s=t.querySelector(Ml(r));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=vo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,et(s);return}s=t.ownerDocument||t,i=k0(i),(r=Qt.get(r))&&bc(i,r),s=s.createElement("link"),et(s);var d=s;d._p=new Promise(function(g,E){d.onload=g,d.onerror=E}),ut(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=vo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Sc=0;function $2(e,t){return e.stylesheets&&e.count===0&&yo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&yo(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Sc===0&&(Sc=62500*x2());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&yo(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Sc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function vo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var go=null;function yo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,go=new Map,t.forEach(q2,e),go=null,vo.call(e))}function q2(e,t){if(!(t.state.loading&4)){var n=go.get(e);if(n)var i=n.get(null);else{n=new Map,go.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var d=r[s];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),i=d)}i&&n.set(null,i)}r=t.instance,d=r.getAttribute("data-precedence"),s=n.get(d)||i,s===i&&n.set(null,r),n.set(d,r),this.count++,i=vo.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Nl={$$typeof:H,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Y2(e,t,n,i,r,s,d,g,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vu(0),this.hiddenUpdates=vu(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function q0(e,t,n,i,r,s,d,g,E,B,W,te){return e=new Y2(e,t,n,d,E,B,W,te,g),t=1,s===!0&&(t|=24),s=Rt(3,null,null,t),e.current=s,s.stateNode=e,t=es(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},is(s),e}function Y0(e){return e?(e=ti,e):ti}function G0(e,t,n,i,r,s){r=Y0(r),i.context===null?i.context=r:i.pendingContext=r,i=Pn(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Jn(e,i,t),n!==null&&(bt(n,e,t),dl(n,e,t))}function X0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wc(e,t){X0(e,t),(e=e.alternate)&&X0(e,t)}function V0(e){if(e.tag===13||e.tag===31){var t=wa(e,67108864);t!==null&&bt(t,e,67108864),wc(e,67108864)}}function Q0(e){if(e.tag===13||e.tag===31){var t=At();t=gu(t);var n=wa(e,t);n!==null&&bt(n,e,t),wc(e,t)}}var bo=!0;function G2(e,t,n,i){var r=j.T;j.T=null;var s=$.p;try{$.p=2,Ec(e,t,n,i)}finally{$.p=s,j.T=r}}function X2(e,t,n,i){var r=j.T;j.T=null;var s=$.p;try{$.p=8,Ec(e,t,n,i)}finally{$.p=s,j.T=r}}function Ec(e,t,n,i){if(bo){var r=Cc(i);if(r===null)sc(e,t,i,xo,n),K0(e,i);else if(Q2(r,e,t,n,i))i.stopPropagation();else if(K0(e,i),t&4&&-1<V2.indexOf(e)){for(;r!==null;){var s=Xa(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var d=ga(s.pendingLanes);if(d!==0){var g=s;for(g.pendingLanes|=2,g.entangledLanes|=2;d;){var E=1<<31-Ct(d);g.entanglements[1]|=E,d&=~E}rn(s),(je&6)===0&&(to=wt()+500,Ol(0))}}break;case 31:case 13:g=wa(s,2),g!==null&&bt(g,s,2),ao(),wc(s,2)}if(s=Cc(i),s===null&&sc(e,t,i,xo,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else sc(e,t,i,null,n)}}function Cc(e){return e=Ru(e),Tc(e)}var xo=null;function Tc(e){if(xo=null,e=Ga(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xo=e,null}function Z0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zg()){case td:return 2;case nd:return 8;case ur:case Ag:return 32;case ad:return 268435456;default:return 32}default:return 32}}var Rc=!1,oa=null,ua=null,sa=null,Ll=new Map,kl=new Map,ca=[],V2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function K0(e,t){switch(e){case"focusin":case"focusout":oa=null;break;case"dragenter":case"dragleave":ua=null;break;case"mouseover":case"mouseout":sa=null;break;case"pointerover":case"pointerout":Ll.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kl.delete(t.pointerId)}}function Ul(e,t,n,i,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},t!==null&&(t=Xa(t),t!==null&&V0(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Q2(e,t,n,i,r){switch(t){case"focusin":return oa=Ul(oa,e,t,n,i,r),!0;case"dragenter":return ua=Ul(ua,e,t,n,i,r),!0;case"mouseover":return sa=Ul(sa,e,t,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ll.set(s,Ul(Ll.get(s)||null,e,t,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,kl.set(s,Ul(kl.get(s)||null,e,t,n,i,r)),!0}return!1}function P0(e){var t=Ga(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,sd(e.priority,function(){Q0(n)});return}}else if(t===31){if(t=y(n),t!==null){e.blockedOn=t,sd(e.priority,function(){Q0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function So(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cc(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Tu=i,n.target.dispatchEvent(i),Tu=null}else return t=Xa(n),t!==null&&V0(t),e.blockedOn=n,!1;t.shift()}return!0}function J0(e,t,n){So(e)&&n.delete(t)}function Z2(){Rc=!1,oa!==null&&So(oa)&&(oa=null),ua!==null&&So(ua)&&(ua=null),sa!==null&&So(sa)&&(sa=null),Ll.forEach(J0),kl.forEach(J0)}function wo(e,t){e.blockedOn===t&&(e.blockedOn=null,Rc||(Rc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Z2)))}var Eo=null;function F0(e){Eo!==e&&(Eo=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Eo===e&&(Eo=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],r=e[t+2];if(typeof i!="function"){if(Tc(i||n)===null)continue;break}var s=Xa(n);s!==null&&(e.splice(t,3),t-=3,Cs(s,{pending:!0,data:r,method:n.method,action:i},i,r))}}))}function Ti(e){function t(E){return wo(E,e)}oa!==null&&wo(oa,e),ua!==null&&wo(ua,e),sa!==null&&wo(sa,e),Ll.forEach(t),kl.forEach(t);for(var n=0;n<ca.length;n++){var i=ca[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ca.length&&(n=ca[0],n.blockedOn===null);)P0(n),n.blockedOn===null&&ca.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var r=n[i],s=n[i+1],d=r[ht]||null;if(typeof s=="function")d||F0(n);else if(d){var g=null;if(s&&s.hasAttribute("formAction")){if(r=s,d=s[ht]||null)g=d.formAction;else if(Tc(r)!==null)continue}else g=d.action;typeof g=="function"?n[i+1]=g:(n.splice(i,3),i-=3),F0(n)}}}function W0(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(d){return r=d})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function _c(e){this._internalRoot=e}Co.prototype.render=_c.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,i=At();G0(n,i,e,t,null,null)},Co.prototype.unmount=_c.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;G0(e.current,2,null,e,null,null),ao(),t[Ya]=null}};function Co(e){this._internalRoot=e}Co.prototype.unstable_scheduleHydration=function(e){if(e){var t=ud();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ca.length&&t!==0&&t<ca[n].priority;n++);ca.splice(n,0,e),n===0&&P0(e)}};var I0=l.version;if(I0!=="19.2.0")throw Error(o(527,I0,"19.2.0"));$.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=m(t),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var K2={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var To=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!To.isDisabled&&To.supportsFiber)try{Qi=To.inject(K2),Et=To}catch{}}return Hl.createRoot=function(e,t){if(!c(e))throw Error(o(299));var n=!1,i="",r=rp,s=op,d=up;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=q0(e,1,!1,null,null,n,i,null,r,s,d,W0),e[Ya]=t.current,uc(e),new _c(t)},Hl.hydrateRoot=function(e,t,n){if(!c(e))throw Error(o(299));var i=!1,r="",s=rp,d=op,g=up,E=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.formState!==void 0&&(E=n.formState)),t=q0(e,1,!0,t,n??null,i,r,E,s,d,g,W0),t.context=Y0(null),n=t.current,i=At(),i=gu(i),r=Pn(i),r.callback=null,Jn(n,r,i),n=i,t.current.lanes=n,Ki(t,n),rn(t),e[Ya]=t.current,uc(e),new Co(t)},Hl.version="19.2.0",Hl}var sm;function ab(){if(sm)return zc.exports;sm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),zc.exports=nb(),zc.exports}var ib=ab();const lb=ar(ib);/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var cm="popstate";function rb(a={}){function l(o,c){let{pathname:f,search:p,hash:y}=o.location;return pf("",{pathname:f,search:p,hash:y},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function u(o,c){return typeof c=="string"?c:er(c)}return ub(l,u,null,a)}function Ge(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function cn(a,l){if(!a){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function ob(){return Math.random().toString(36).substring(2,10)}function fm(a,l){return{usr:a.state,key:a.key,idx:l}}function pf(a,l,u=null,o){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof l=="string"?Hi(l):l,state:u,key:l&&l.key||o||ob()}}function er({pathname:a="/",search:l="",hash:u=""}){return l&&l!=="?"&&(a+=l.charAt(0)==="?"?l:"?"+l),u&&u!=="#"&&(a+=u.charAt(0)==="#"?u:"#"+u),a}function Hi(a){let l={};if(a){let u=a.indexOf("#");u>=0&&(l.hash=a.substring(u),a=a.substring(0,u));let o=a.indexOf("?");o>=0&&(l.search=a.substring(o),a=a.substring(0,o)),a&&(l.pathname=a)}return l}function ub(a,l,u,o={}){let{window:c=document.defaultView,v5Compat:f=!1}=o,p=c.history,y="POP",v=null,m=S();m==null&&(m=0,p.replaceState({...p.state,idx:m},""));function S(){return(p.state||{idx:null}).idx}function x(){y="POP";let Z=S(),F=Z==null?null:Z-m;m=Z,v&&v({action:y,location:q.location,delta:F})}function w(Z,F){y="PUSH";let M=pf(q.location,Z,F);m=S()+1;let H=fm(M,m),G=q.createHref(M);try{p.pushState(H,"",G)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;c.location.assign(G)}f&&v&&v({action:y,location:q.location,delta:1})}function A(Z,F){y="REPLACE";let M=pf(q.location,Z,F);m=S();let H=fm(M,m),G=q.createHref(M);p.replaceState(H,"",G),f&&v&&v({action:y,location:q.location,delta:0})}function R(Z){return sb(Z)}let q={get action(){return y},get location(){return a(c,p)},listen(Z){if(v)throw new Error("A history only accepts one active listener");return c.addEventListener(cm,x),v=Z,()=>{c.removeEventListener(cm,x),v=null}},createHref(Z){return l(c,Z)},createURL:R,encodeLocation(Z){let F=R(Z);return{pathname:F.pathname,search:F.search,hash:F.hash}},push:w,replace:A,go(Z){return p.go(Z)}};return q}function sb(a,l=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Ge(u,"No window.location.(origin|href) available to create URL");let o=typeof a=="string"?a:er(a);return o=o.replace(/ $/,"%20"),!l&&o.startsWith("//")&&(o=u+o),new URL(o,u)}function U1(a,l,u="/"){return cb(a,l,u,!1)}function cb(a,l,u,o){let c=typeof l=="string"?Hi(l):l,f=Un(c.pathname||"/",u);if(f==null)return null;let p=B1(a);fb(p);let y=null;for(let v=0;y==null&&v<p.length;++v){let m=wb(f);y=xb(p[v],m,o)}return y}function B1(a,l=[],u=[],o="",c=!1){let f=(p,y,v=c,m)=>{let S={relativePath:m===void 0?p.path||"":m,caseSensitive:p.caseSensitive===!0,childrenIndex:y,route:p};if(S.relativePath.startsWith("/")){if(!S.relativePath.startsWith(o)&&v)return;Ge(S.relativePath.startsWith(o),`Absolute route path "${S.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),S.relativePath=S.relativePath.slice(o.length)}let x=Ln([o,S.relativePath]),w=u.concat(S);p.children&&p.children.length>0&&(Ge(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),B1(p.children,l,w,x,v)),!(p.path==null&&!p.index)&&l.push({path:x,score:yb(x,p.index),routesMeta:w})};return a.forEach((p,y)=>{if(p.path===""||!p.path?.includes("?"))f(p,y);else for(let v of H1(p.path))f(p,y,!0,v)}),l}function H1(a){let l=a.split("/");if(l.length===0)return[];let[u,...o]=l,c=u.endsWith("?"),f=u.replace(/\?$/,"");if(o.length===0)return c?[f,""]:[f];let p=H1(o.join("/")),y=[];return y.push(...p.map(v=>v===""?f:[f,v].join("/"))),c&&y.push(...p),y.map(v=>a.startsWith("/")&&v===""?"/":v)}function fb(a){a.sort((l,u)=>l.score!==u.score?u.score-l.score:bb(l.routesMeta.map(o=>o.childrenIndex),u.routesMeta.map(o=>o.childrenIndex)))}var db=/^:[\w-]+$/,hb=3,pb=2,mb=1,vb=10,gb=-2,dm=a=>a==="*";function yb(a,l){let u=a.split("/"),o=u.length;return u.some(dm)&&(o+=gb),l&&(o+=pb),u.filter(c=>!dm(c)).reduce((c,f)=>c+(db.test(f)?hb:f===""?mb:vb),o)}function bb(a,l){return a.length===l.length&&a.slice(0,-1).every((o,c)=>o===l[c])?a[a.length-1]-l[l.length-1]:0}function xb(a,l,u=!1){let{routesMeta:o}=a,c={},f="/",p=[];for(let y=0;y<o.length;++y){let v=o[y],m=y===o.length-1,S=f==="/"?l:l.slice(f.length)||"/",x=Xo({path:v.relativePath,caseSensitive:v.caseSensitive,end:m},S),w=v.route;if(!x&&m&&u&&!o[o.length-1].route.index&&(x=Xo({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},S)),!x)return null;Object.assign(c,x.params),p.push({params:c,pathname:Ln([f,x.pathname]),pathnameBase:Rb(Ln([f,x.pathnameBase])),route:w}),x.pathnameBase!=="/"&&(f=Ln([f,x.pathnameBase]))}return p}function Xo(a,l){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[u,o]=Sb(a.path,a.caseSensitive,a.end),c=l.match(u);if(!c)return null;let f=c[0],p=f.replace(/(.)\/+$/,"$1"),y=c.slice(1);return{params:o.reduce((m,{paramName:S,isOptional:x},w)=>{if(S==="*"){let R=y[w]||"";p=f.slice(0,f.length-R.length).replace(/(.)\/+$/,"$1")}const A=y[w];return x&&!A?m[S]=void 0:m[S]=(A||"").replace(/%2F/g,"/"),m},{}),pathname:f,pathnameBase:p,pattern:a}}function Sb(a,l=!1,u=!0){cn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let o=[],c="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,y,v)=>(o.push({paramName:y,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(o.push({paramName:"*"}),c+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?c+="\\/*$":a!==""&&a!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,l?void 0:"i"),o]}function wb(a){try{return a.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return cn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),a}}function Un(a,l){if(l==="/")return a;if(!a.toLowerCase().startsWith(l.toLowerCase()))return null;let u=l.endsWith("/")?l.length-1:l.length,o=a.charAt(u);return o&&o!=="/"?null:a.slice(u)||"/"}function Eb(a,l="/"){let{pathname:u,search:o="",hash:c=""}=typeof a=="string"?Hi(a):a;return{pathname:u?u.startsWith("/")?u:Cb(u,l):l,search:_b(o),hash:Ob(c)}}function Cb(a,l){let u=l.replace(/\/+$/,"").split("/");return a.split("/").forEach(c=>{c===".."?u.length>1&&u.pop():c!=="."&&u.push(c)}),u.length>1?u.join("/"):"/"}function Nc(a,l,u,o){return`Cannot include a '${a}' character in a manually specified \`to.${l}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Tb(a){return a.filter((l,u)=>u===0||l.route.path&&l.route.path.length>0)}function $1(a){let l=Tb(a);return l.map((u,o)=>o===l.length-1?u.pathname:u.pathnameBase)}function q1(a,l,u,o=!1){let c;typeof a=="string"?c=Hi(a):(c={...a},Ge(!c.pathname||!c.pathname.includes("?"),Nc("?","pathname","search",c)),Ge(!c.pathname||!c.pathname.includes("#"),Nc("#","pathname","hash",c)),Ge(!c.search||!c.search.includes("#"),Nc("#","search","hash",c)));let f=a===""||c.pathname==="",p=f?"/":c.pathname,y;if(p==null)y=u;else{let x=l.length-1;if(!o&&p.startsWith("..")){let w=p.split("/");for(;w[0]==="..";)w.shift(),x-=1;c.pathname=w.join("/")}y=x>=0?l[x]:"/"}let v=Eb(c,y),m=p&&p!=="/"&&p.endsWith("/"),S=(f||p===".")&&u.endsWith("/");return!v.pathname.endsWith("/")&&(m||S)&&(v.pathname+="/"),v}var Ln=a=>a.join("/").replace(/\/\/+/g,"/"),Rb=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),_b=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Ob=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function jb(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var Y1=["POST","PUT","PATCH","DELETE"];new Set(Y1);var zb=["GET",...Y1];new Set(zb);var $i=b.createContext(null);$i.displayName="DataRouter";var eu=b.createContext(null);eu.displayName="DataRouterState";b.createContext(!1);var G1=b.createContext({isTransitioning:!1});G1.displayName="ViewTransition";var Ab=b.createContext(new Map);Ab.displayName="Fetchers";var Mb=b.createContext(null);Mb.displayName="Await";var fn=b.createContext(null);fn.displayName="Navigation";var ir=b.createContext(null);ir.displayName="Location";var Bn=b.createContext({outlet:null,matches:[],isDataRoute:!1});Bn.displayName="Route";var zf=b.createContext(null);zf.displayName="RouteError";function Db(a,{relative:l}={}){Ge(lr(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:o}=b.useContext(fn),{hash:c,pathname:f,search:p}=rr(a,{relative:l}),y=f;return u!=="/"&&(y=f==="/"?u:Ln([u,f])),o.createHref({pathname:y,search:p,hash:c})}function lr(){return b.useContext(ir)!=null}function Hn(){return Ge(lr(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(ir).location}var X1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function V1(a){b.useContext(fn).static||b.useLayoutEffect(a)}function Af(){let{isDataRoute:a}=b.useContext(Bn);return a?Qb():Nb()}function Nb(){Ge(lr(),"useNavigate() may be used only in the context of a <Router> component.");let a=b.useContext($i),{basename:l,navigator:u}=b.useContext(fn),{matches:o}=b.useContext(Bn),{pathname:c}=Hn(),f=JSON.stringify($1(o)),p=b.useRef(!1);return V1(()=>{p.current=!0}),b.useCallback((v,m={})=>{if(cn(p.current,X1),!p.current)return;if(typeof v=="number"){u.go(v);return}let S=q1(v,JSON.parse(f),c,m.relative==="path");a==null&&l!=="/"&&(S.pathname=S.pathname==="/"?l:Ln([l,S.pathname])),(m.replace?u.replace:u.push)(S,m.state,m)},[l,u,f,c,a])}b.createContext(null);function rr(a,{relative:l}={}){let{matches:u}=b.useContext(Bn),{pathname:o}=Hn(),c=JSON.stringify($1(u));return b.useMemo(()=>q1(a,JSON.parse(c),o,l==="path"),[a,c,o,l])}function Lb(a,l){return Q1(a,l)}function Q1(a,l,u,o,c){Ge(lr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=b.useContext(fn),{matches:p}=b.useContext(Bn),y=p[p.length-1],v=y?y.params:{},m=y?y.pathname:"/",S=y?y.pathnameBase:"/",x=y&&y.route;{let M=x&&x.path||"";Z1(m,!x||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let w=Hn(),A;if(l){let M=typeof l=="string"?Hi(l):l;Ge(S==="/"||M.pathname?.startsWith(S),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${M.pathname}" was given in the \`location\` prop.`),A=M}else A=w;let R=A.pathname||"/",q=R;if(S!=="/"){let M=S.replace(/^\//,"").split("/");q="/"+R.replace(/^\//,"").split("/").slice(M.length).join("/")}let Z=U1(a,{pathname:q});cn(x||Z!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),cn(Z==null||Z[Z.length-1].route.element!==void 0||Z[Z.length-1].route.Component!==void 0||Z[Z.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let F=$b(Z&&Z.map(M=>Object.assign({},M,{params:Object.assign({},v,M.params),pathname:Ln([S,f.encodeLocation?f.encodeLocation(M.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?S:Ln([S,f.encodeLocation?f.encodeLocation(M.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathnameBase])})),p,u,o,c);return l&&F?b.createElement(ir.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},F):F}function kb(){let a=Vb(),l=jb(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),u=a instanceof Error?a.stack:null,o="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:o},f={padding:"2px 4px",backgroundColor:o},p=null;return console.error("Error handled by React Router default ErrorBoundary:",a),p=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:f},"ErrorBoundary")," or"," ",b.createElement("code",{style:f},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},l),u?b.createElement("pre",{style:c},u):null,p)}var Ub=b.createElement(kb,null),Bb=class extends b.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,l){return l.location!==a.location||l.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:l.error,location:l.location,revalidation:a.revalidation||l.revalidation}}componentDidCatch(a,l){this.props.unstable_onError?this.props.unstable_onError(a,l):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?b.createElement(Bn.Provider,{value:this.props.routeContext},b.createElement(zf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Hb({routeContext:a,match:l,children:u}){let o=b.useContext($i);return o&&o.static&&o.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=l.route.id),b.createElement(Bn.Provider,{value:a},u)}function $b(a,l=[],u=null,o=null,c=null){if(a==null){if(!u)return null;if(u.errors)a=u.matches;else if(l.length===0&&!u.initialized&&u.matches.length>0)a=u.matches;else return null}let f=a,p=u?.errors;if(p!=null){let m=f.findIndex(S=>S.route.id&&p?.[S.route.id]!==void 0);Ge(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),f=f.slice(0,Math.min(f.length,m+1))}let y=!1,v=-1;if(u)for(let m=0;m<f.length;m++){let S=f[m];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(v=m),S.route.id){let{loaderData:x,errors:w}=u,A=S.route.loader&&!x.hasOwnProperty(S.route.id)&&(!w||w[S.route.id]===void 0);if(S.route.lazy||A){y=!0,v>=0?f=f.slice(0,v+1):f=[f[0]];break}}}return f.reduceRight((m,S,x)=>{let w,A=!1,R=null,q=null;u&&(w=p&&S.route.id?p[S.route.id]:void 0,R=S.route.errorElement||Ub,y&&(v<0&&x===0?(Z1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,q=null):v===x&&(A=!0,q=S.route.hydrateFallbackElement||null)));let Z=l.concat(f.slice(0,x+1)),F=()=>{let M;return w?M=R:A?M=q:S.route.Component?M=b.createElement(S.route.Component,null):S.route.element?M=S.route.element:M=m,b.createElement(Hb,{match:S,routeContext:{outlet:m,matches:Z,isDataRoute:u!=null},children:M})};return u&&(S.route.ErrorBoundary||S.route.errorElement||x===0)?b.createElement(Bb,{location:u.location,revalidation:u.revalidation,component:R,error:w,children:F(),routeContext:{outlet:null,matches:Z,isDataRoute:!0},unstable_onError:o}):F()},null)}function Mf(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qb(a){let l=b.useContext($i);return Ge(l,Mf(a)),l}function Yb(a){let l=b.useContext(eu);return Ge(l,Mf(a)),l}function Gb(a){let l=b.useContext(Bn);return Ge(l,Mf(a)),l}function Df(a){let l=Gb(a),u=l.matches[l.matches.length-1];return Ge(u.route.id,`${a} can only be used on routes that contain a unique "id"`),u.route.id}function Xb(){return Df("useRouteId")}function Vb(){let a=b.useContext(zf),l=Yb("useRouteError"),u=Df("useRouteError");return a!==void 0?a:l.errors?.[u]}function Qb(){let{router:a}=qb("useNavigate"),l=Df("useNavigate"),u=b.useRef(!1);return V1(()=>{u.current=!0}),b.useCallback(async(c,f={})=>{cn(u.current,X1),u.current&&(typeof c=="number"?a.navigate(c):await a.navigate(c,{fromRouteId:l,...f}))},[a,l])}var hm={};function Z1(a,l,u){!l&&!hm[a]&&(hm[a]=!0,cn(!1,u))}b.memo(Zb);function Zb({routes:a,future:l,state:u,unstable_onError:o}){return Q1(a,void 0,u,o,l)}function La(a){Ge(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Kb({basename:a="/",children:l=null,location:u,navigationType:o="POP",navigator:c,static:f=!1}){Ge(!lr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=a.replace(/^\/*/,"/"),y=b.useMemo(()=>({basename:p,navigator:c,static:f,future:{}}),[p,c,f]);typeof u=="string"&&(u=Hi(u));let{pathname:v="/",search:m="",hash:S="",state:x=null,key:w="default"}=u,A=b.useMemo(()=>{let R=Un(v,p);return R==null?null:{location:{pathname:R,search:m,hash:S,state:x,key:w},navigationType:o}},[p,v,m,S,x,w,o]);return cn(A!=null,`<Router basename="${p}"> is not able to match the URL "${v}${m}${S}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:b.createElement(fn.Provider,{value:y},b.createElement(ir.Provider,{children:l,value:A}))}function Pb({children:a,location:l}){return Lb(mf(a),l)}function mf(a,l=[]){let u=[];return b.Children.forEach(a,(o,c)=>{if(!b.isValidElement(o))return;let f=[...l,c];if(o.type===b.Fragment){u.push.apply(u,mf(o.props.children,f));return}Ge(o.type===La,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ge(!o.props.index||!o.props.children,"An index route cannot have child routes.");let p={id:o.props.id||f.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(p.children=mf(o.props.children,f)),u.push(p)}),u}var Uo="get",Bo="application/x-www-form-urlencoded";function tu(a){return a!=null&&typeof a.tagName=="string"}function Jb(a){return tu(a)&&a.tagName.toLowerCase()==="button"}function Fb(a){return tu(a)&&a.tagName.toLowerCase()==="form"}function Wb(a){return tu(a)&&a.tagName.toLowerCase()==="input"}function Ib(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function ex(a,l){return a.button===0&&(!l||l==="_self")&&!Ib(a)}var Ro=null;function tx(){if(Ro===null)try{new FormData(document.createElement("form"),0),Ro=!1}catch{Ro=!0}return Ro}var nx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Lc(a){return a!=null&&!nx.has(a)?(cn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Bo}"`),null):a}function ax(a,l){let u,o,c,f,p;if(Fb(a)){let y=a.getAttribute("action");o=y?Un(y,l):null,u=a.getAttribute("method")||Uo,c=Lc(a.getAttribute("enctype"))||Bo,f=new FormData(a)}else if(Jb(a)||Wb(a)&&(a.type==="submit"||a.type==="image")){let y=a.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=a.getAttribute("formaction")||y.getAttribute("action");if(o=v?Un(v,l):null,u=a.getAttribute("formmethod")||y.getAttribute("method")||Uo,c=Lc(a.getAttribute("formenctype"))||Lc(y.getAttribute("enctype"))||Bo,f=new FormData(y,a),!tx()){let{name:m,type:S,value:x}=a;if(S==="image"){let w=m?`${m}.`:"";f.append(`${w}x`,"0"),f.append(`${w}y`,"0")}else m&&f.append(m,x)}}else{if(tu(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Uo,o=null,c=Bo,p=a}return f&&c==="text/plain"&&(p=f,f=void 0),{action:o,method:u.toLowerCase(),encType:c,formData:f,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Nf(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function ix(a,l,u){let o=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return o.pathname==="/"?o.pathname=`_root.${u}`:l&&Un(o.pathname,l)==="/"?o.pathname=`${l.replace(/\/$/,"")}/_root.${u}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${u}`,o}async function lx(a,l){if(a.id in l)return l[a.id];try{let u=await import(a.module);return l[a.id]=u,u}catch(u){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function rx(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function ox(a,l,u){let o=await Promise.all(a.map(async c=>{let f=l.routes[c.route.id];if(f){let p=await lx(f,u);return p.links?p.links():[]}return[]}));return fx(o.flat(1).filter(rx).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function pm(a,l,u,o,c,f){let p=(v,m)=>u[m]?v.route.id!==u[m].route.id:!0,y=(v,m)=>u[m].pathname!==v.pathname||u[m].route.path?.endsWith("*")&&u[m].params["*"]!==v.params["*"];return f==="assets"?l.filter((v,m)=>p(v,m)||y(v,m)):f==="data"?l.filter((v,m)=>{let S=o.routes[v.route.id];if(!S||!S.hasLoader)return!1;if(p(v,m)||y(v,m))return!0;if(v.route.shouldRevalidate){let x=v.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function ux(a,l,{includeHydrateFallback:u}={}){return sx(a.map(o=>{let c=l.routes[o.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),u&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function sx(a){return[...new Set(a)]}function cx(a){let l={},u=Object.keys(a).sort();for(let o of u)l[o]=a[o];return l}function fx(a,l){let u=new Set;return new Set(l),a.reduce((o,c)=>{let f=JSON.stringify(cx(c));return u.has(f)||(u.add(f),o.push({key:f,link:c})),o},[])}function K1(){let a=b.useContext($i);return Nf(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function dx(){let a=b.useContext(eu);return Nf(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Lf=b.createContext(void 0);Lf.displayName="FrameworkContext";function P1(){let a=b.useContext(Lf);return Nf(a,"You must render this element inside a <HydratedRouter> element"),a}function hx(a,l){let u=b.useContext(Lf),[o,c]=b.useState(!1),[f,p]=b.useState(!1),{onFocus:y,onBlur:v,onMouseEnter:m,onMouseLeave:S,onTouchStart:x}=l,w=b.useRef(null);b.useEffect(()=>{if(a==="render"&&p(!0),a==="viewport"){let q=F=>{F.forEach(M=>{p(M.isIntersecting)})},Z=new IntersectionObserver(q,{threshold:.5});return w.current&&Z.observe(w.current),()=>{Z.disconnect()}}},[a]),b.useEffect(()=>{if(o){let q=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(q)}}},[o]);let A=()=>{c(!0)},R=()=>{c(!1),p(!1)};return u?a!=="intent"?[f,w,{}]:[f,w,{onFocus:$l(y,A),onBlur:$l(v,R),onMouseEnter:$l(m,A),onMouseLeave:$l(S,R),onTouchStart:$l(x,A)}]:[!1,w,{}]}function $l(a,l){return u=>{a&&a(u),u.defaultPrevented||l(u)}}function px({page:a,...l}){let{router:u}=K1(),o=b.useMemo(()=>U1(u.routes,a,u.basename),[u.routes,a,u.basename]);return o?b.createElement(vx,{page:a,matches:o,...l}):null}function mx(a){let{manifest:l,routeModules:u}=P1(),[o,c]=b.useState([]);return b.useEffect(()=>{let f=!1;return ox(a,l,u).then(p=>{f||c(p)}),()=>{f=!0}},[a,l,u]),o}function vx({page:a,matches:l,...u}){let o=Hn(),{manifest:c,routeModules:f}=P1(),{basename:p}=K1(),{loaderData:y,matches:v}=dx(),m=b.useMemo(()=>pm(a,l,v,c,o,"data"),[a,l,v,c,o]),S=b.useMemo(()=>pm(a,l,v,c,o,"assets"),[a,l,v,c,o]),x=b.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let R=new Set,q=!1;if(l.forEach(F=>{let M=c.routes[F.route.id];!M||!M.hasLoader||(!m.some(H=>H.route.id===F.route.id)&&F.route.id in y&&f[F.route.id]?.shouldRevalidate||M.hasClientLoader?q=!0:R.add(F.route.id))}),R.size===0)return[];let Z=ix(a,p,"data");return q&&R.size>0&&Z.searchParams.set("_routes",l.filter(F=>R.has(F.route.id)).map(F=>F.route.id).join(",")),[Z.pathname+Z.search]},[p,y,o,c,m,l,a,f]),w=b.useMemo(()=>ux(S,c),[S,c]),A=mx(S);return b.createElement(b.Fragment,null,x.map(R=>b.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...u})),w.map(R=>b.createElement("link",{key:R,rel:"modulepreload",href:R,...u})),A.map(({key:R,link:q})=>b.createElement("link",{key:R,nonce:u.nonce,...q})))}function gx(...a){return l=>{a.forEach(u=>{typeof u=="function"?u(l):u!=null&&(u.current=l)})}}var J1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{J1&&(window.__reactRouterVersion="7.9.4")}catch{}function yx({basename:a,children:l,window:u}){let o=b.useRef();o.current==null&&(o.current=rb({window:u,v5Compat:!0}));let c=o.current,[f,p]=b.useState({action:c.action,location:c.location}),y=b.useCallback(v=>{b.startTransition(()=>p(v))},[p]);return b.useLayoutEffect(()=>c.listen(y),[c,y]),b.createElement(Kb,{basename:a,children:l,location:f.location,navigationType:f.action,navigator:c})}var F1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qi=b.forwardRef(function({onClick:l,discover:u="render",prefetch:o="none",relative:c,reloadDocument:f,replace:p,state:y,target:v,to:m,preventScrollReset:S,viewTransition:x,...w},A){let{basename:R}=b.useContext(fn),q=typeof m=="string"&&F1.test(m),Z,F=!1;if(typeof m=="string"&&q&&(Z=m,J1))try{let X=new URL(window.location.href),le=m.startsWith("//")?new URL(X.protocol+m):new URL(m),P=Un(le.pathname,R);le.origin===X.origin&&P!=null?m=P+le.search+le.hash:F=!0}catch{cn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=Db(m,{relative:c}),[H,G,L]=hx(o,w),z=wx(m,{replace:p,state:y,target:v,preventScrollReset:S,relative:c,viewTransition:x});function K(X){l&&l(X),X.defaultPrevented||z(X)}let k=b.createElement("a",{...w,...L,href:Z||M,onClick:F||f?l:K,ref:gx(A,G),target:v,"data-discover":!q&&u==="render"?"true":void 0});return H&&!q?b.createElement(b.Fragment,null,k,b.createElement(px,{page:M})):k});qi.displayName="Link";var bx=b.forwardRef(function({"aria-current":l="page",caseSensitive:u=!1,className:o="",end:c=!1,style:f,to:p,viewTransition:y,children:v,...m},S){let x=rr(p,{relative:m.relative}),w=Hn(),A=b.useContext(eu),{navigator:R,basename:q}=b.useContext(fn),Z=A!=null&&_x(x)&&y===!0,F=R.encodeLocation?R.encodeLocation(x).pathname:x.pathname,M=w.pathname,H=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;u||(M=M.toLowerCase(),H=H?H.toLowerCase():null,F=F.toLowerCase()),H&&q&&(H=Un(H,q)||H);const G=F!=="/"&&F.endsWith("/")?F.length-1:F.length;let L=M===F||!c&&M.startsWith(F)&&M.charAt(G)==="/",z=H!=null&&(H===F||!c&&H.startsWith(F)&&H.charAt(F.length)==="/"),K={isActive:L,isPending:z,isTransitioning:Z},k=L?l:void 0,X;typeof o=="function"?X=o(K):X=[o,L?"active":null,z?"pending":null,Z?"transitioning":null].filter(Boolean).join(" ");let le=typeof f=="function"?f(K):f;return b.createElement(qi,{...m,"aria-current":k,className:X,ref:S,style:le,to:p,viewTransition:y},typeof v=="function"?v(K):v)});bx.displayName="NavLink";var xx=b.forwardRef(({discover:a="render",fetcherKey:l,navigate:u,reloadDocument:o,replace:c,state:f,method:p=Uo,action:y,onSubmit:v,relative:m,preventScrollReset:S,viewTransition:x,...w},A)=>{let R=Tx(),q=Rx(y,{relative:m}),Z=p.toLowerCase()==="get"?"get":"post",F=typeof y=="string"&&F1.test(y),M=H=>{if(v&&v(H),H.defaultPrevented)return;H.preventDefault();let G=H.nativeEvent.submitter,L=G?.getAttribute("formmethod")||p;R(G||H.currentTarget,{fetcherKey:l,method:L,navigate:u,replace:c,state:f,relative:m,preventScrollReset:S,viewTransition:x})};return b.createElement("form",{ref:A,method:Z,action:q,onSubmit:o?v:M,...w,"data-discover":!F&&a==="render"?"true":void 0})});xx.displayName="Form";function Sx(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function W1(a){let l=b.useContext($i);return Ge(l,Sx(a)),l}function wx(a,{target:l,replace:u,state:o,preventScrollReset:c,relative:f,viewTransition:p}={}){let y=Af(),v=Hn(),m=rr(a,{relative:f});return b.useCallback(S=>{if(ex(S,l)){S.preventDefault();let x=u!==void 0?u:er(v)===er(m);y(a,{replace:x,state:o,preventScrollReset:c,relative:f,viewTransition:p})}},[v,y,m,u,o,l,a,c,f,p])}var Ex=0,Cx=()=>`__${String(++Ex)}__`;function Tx(){let{router:a}=W1("useSubmit"),{basename:l}=b.useContext(fn),u=Xb();return b.useCallback(async(o,c={})=>{let{action:f,method:p,encType:y,formData:v,body:m}=ax(o,l);if(c.navigate===!1){let S=c.fetcherKey||Cx();await a.fetch(S,u,c.action||f,{preventScrollReset:c.preventScrollReset,formData:v,body:m,formMethod:c.method||p,formEncType:c.encType||y,flushSync:c.flushSync})}else await a.navigate(c.action||f,{preventScrollReset:c.preventScrollReset,formData:v,body:m,formMethod:c.method||p,formEncType:c.encType||y,replace:c.replace,state:c.state,fromRouteId:u,flushSync:c.flushSync,viewTransition:c.viewTransition})},[a,l,u])}function Rx(a,{relative:l}={}){let{basename:u}=b.useContext(fn),o=b.useContext(Bn);Ge(o,"useFormAction must be used inside a RouteContext");let[c]=o.matches.slice(-1),f={...rr(a||".",{relative:l})},p=Hn();if(a==null){f.search=p.search;let y=new URLSearchParams(f.search),v=y.getAll("index");if(v.some(S=>S==="")){y.delete("index"),v.filter(x=>x).forEach(x=>y.append("index",x));let S=y.toString();f.search=S?`?${S}`:""}}return(!a||a===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(f.pathname=f.pathname==="/"?u:Ln([u,f.pathname])),er(f)}function _x(a,{relative:l}={}){let u=b.useContext(G1);Ge(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=W1("useViewTransitionState"),c=rr(a,{relative:l});if(!u.isTransitioning)return!1;let f=Un(u.currentLocation.pathname,o)||u.currentLocation.pathname,p=Un(u.nextLocation.pathname,o)||u.nextLocation.pathname;return Xo(c.pathname,p)!=null||Xo(c.pathname,f)!=null}var Ox=k1();const zi=ar(Ox);var ct=function(){return ct=Object.assign||function(l){for(var u,o=1,c=arguments.length;o<c;o++){u=arguments[o];for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&(l[f]=u[f])}return l},ct.apply(this,arguments)};function Di(a,l,u){if(u||arguments.length===2)for(var o=0,c=l.length,f;o<c;o++)(f||!(o in l))&&(f||(f=Array.prototype.slice.call(l,0,o)),f[o]=l[o]);return a.concat(f||Array.prototype.slice.call(l))}var qe="-ms-",Wl="-moz-",ze="-webkit-",I1="comm",nu="rule",kf="decl",jx="@import",ev="@keyframes",zx="@layer",tv=Math.abs,Uf=String.fromCharCode,vf=Object.assign;function Ax(a,l){return nt(a,0)^45?(((l<<2^nt(a,0))<<2^nt(a,1))<<2^nt(a,2))<<2^nt(a,3):0}function nv(a){return a.trim()}function Mn(a,l){return(a=l.exec(a))?a[0]:a}function ge(a,l,u){return a.replace(l,u)}function Ho(a,l,u){return a.indexOf(l,u)}function nt(a,l){return a.charCodeAt(l)|0}function Ni(a,l,u){return a.slice(l,u)}function sn(a){return a.length}function av(a){return a.length}function Jl(a,l){return l.push(a),a}function Mx(a,l){return a.map(l).join("")}function mm(a,l){return a.filter(function(u){return!Mn(u,l)})}var au=1,Li=1,iv=0,Zt=0,We=0,Yi="";function iu(a,l,u,o,c,f,p,y){return{value:a,root:l,parent:u,type:o,props:c,children:f,line:au,column:Li,length:p,return:"",siblings:y}}function da(a,l){return vf(iu("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},l)}function Ri(a){for(;a.root;)a=da(a.root,{children:[a]});Jl(a,a.siblings)}function Dx(){return We}function Nx(){return We=Zt>0?nt(Yi,--Zt):0,Li--,We===10&&(Li=1,au--),We}function tn(){return We=Zt<iv?nt(Yi,Zt++):0,Li++,We===10&&(Li=1,au++),We}function Ha(){return nt(Yi,Zt)}function $o(){return Zt}function lu(a,l){return Ni(Yi,a,l)}function gf(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Lx(a){return au=Li=1,iv=sn(Yi=a),Zt=0,[]}function kx(a){return Yi="",a}function kc(a){return nv(lu(Zt-1,yf(a===91?a+2:a===40?a+1:a)))}function Ux(a){for(;(We=Ha())&&We<33;)tn();return gf(a)>2||gf(We)>3?"":" "}function Bx(a,l){for(;--l&&tn()&&!(We<48||We>102||We>57&&We<65||We>70&&We<97););return lu(a,$o()+(l<6&&Ha()==32&&tn()==32))}function yf(a){for(;tn();)switch(We){case a:return Zt;case 34:case 39:a!==34&&a!==39&&yf(We);break;case 40:a===41&&yf(a);break;case 92:tn();break}return Zt}function Hx(a,l){for(;tn()&&a+We!==57;)if(a+We===84&&Ha()===47)break;return"/*"+lu(l,Zt-1)+"*"+Uf(a===47?a:tn())}function $x(a){for(;!gf(Ha());)tn();return lu(a,Zt)}function qx(a){return kx(qo("",null,null,null,[""],a=Lx(a),0,[0],a))}function qo(a,l,u,o,c,f,p,y,v){for(var m=0,S=0,x=p,w=0,A=0,R=0,q=1,Z=1,F=1,M=0,H="",G=c,L=f,z=o,K=H;Z;)switch(R=M,M=tn()){case 40:if(R!=108&&nt(K,x-1)==58){Ho(K+=ge(kc(M),"&","&\f"),"&\f",tv(m?y[m-1]:0))!=-1&&(F=-1);break}case 34:case 39:case 91:K+=kc(M);break;case 9:case 10:case 13:case 32:K+=Ux(R);break;case 92:K+=Bx($o()-1,7);continue;case 47:switch(Ha()){case 42:case 47:Jl(Yx(Hx(tn(),$o()),l,u,v),v);break;default:K+="/"}break;case 123*q:y[m++]=sn(K)*F;case 125*q:case 59:case 0:switch(M){case 0:case 125:Z=0;case 59+S:F==-1&&(K=ge(K,/\f/g,"")),A>0&&sn(K)-x&&Jl(A>32?gm(K+";",o,u,x-1,v):gm(ge(K," ","")+";",o,u,x-2,v),v);break;case 59:K+=";";default:if(Jl(z=vm(K,l,u,m,S,c,y,H,G=[],L=[],x,f),f),M===123)if(S===0)qo(K,l,z,z,G,f,x,y,L);else switch(w===99&&nt(K,3)===110?100:w){case 100:case 108:case 109:case 115:qo(a,z,z,o&&Jl(vm(a,z,z,0,0,c,y,H,c,G=[],x,L),L),c,L,x,y,o?G:L);break;default:qo(K,z,z,z,[""],L,0,y,L)}}m=S=A=0,q=F=1,H=K="",x=p;break;case 58:x=1+sn(K),A=R;default:if(q<1){if(M==123)--q;else if(M==125&&q++==0&&Nx()==125)continue}switch(K+=Uf(M),M*q){case 38:F=S>0?1:(K+="\f",-1);break;case 44:y[m++]=(sn(K)-1)*F,F=1;break;case 64:Ha()===45&&(K+=kc(tn())),w=Ha(),S=x=sn(H=K+=$x($o())),M++;break;case 45:R===45&&sn(K)==2&&(q=0)}}return f}function vm(a,l,u,o,c,f,p,y,v,m,S,x){for(var w=c-1,A=c===0?f:[""],R=av(A),q=0,Z=0,F=0;q<o;++q)for(var M=0,H=Ni(a,w+1,w=tv(Z=p[q])),G=a;M<R;++M)(G=nv(Z>0?A[M]+" "+H:ge(H,/&\f/g,A[M])))&&(v[F++]=G);return iu(a,l,u,c===0?nu:y,v,m,S,x)}function Yx(a,l,u,o){return iu(a,l,u,I1,Uf(Dx()),Ni(a,2,-2),0,o)}function gm(a,l,u,o,c){return iu(a,l,u,kf,Ni(a,0,o),Ni(a,o+1,-1),o,c)}function lv(a,l,u){switch(Ax(a,l)){case 5103:return ze+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ze+a+a;case 4789:return Wl+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return ze+a+Wl+a+qe+a+a;case 5936:switch(nt(a,l+11)){case 114:return ze+a+qe+ge(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return ze+a+qe+ge(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return ze+a+qe+ge(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return ze+a+qe+a+a;case 6165:return ze+a+qe+"flex-"+a+a;case 5187:return ze+a+ge(a,/(\w+).+(:[^]+)/,ze+"box-$1$2"+qe+"flex-$1$2")+a;case 5443:return ze+a+qe+"flex-item-"+ge(a,/flex-|-self/g,"")+(Mn(a,/flex-|baseline/)?"":qe+"grid-row-"+ge(a,/flex-|-self/g,""))+a;case 4675:return ze+a+qe+"flex-line-pack"+ge(a,/align-content|flex-|-self/g,"")+a;case 5548:return ze+a+qe+ge(a,"shrink","negative")+a;case 5292:return ze+a+qe+ge(a,"basis","preferred-size")+a;case 6060:return ze+"box-"+ge(a,"-grow","")+ze+a+qe+ge(a,"grow","positive")+a;case 4554:return ze+ge(a,/([^-])(transform)/g,"$1"+ze+"$2")+a;case 6187:return ge(ge(ge(a,/(zoom-|grab)/,ze+"$1"),/(image-set)/,ze+"$1"),a,"")+a;case 5495:case 3959:return ge(a,/(image-set\([^]*)/,ze+"$1$`$1");case 4968:return ge(ge(a,/(.+:)(flex-)?(.*)/,ze+"box-pack:$3"+qe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ze+a+a;case 4200:if(!Mn(a,/flex-|baseline/))return qe+"grid-column-align"+Ni(a,l)+a;break;case 2592:case 3360:return qe+ge(a,"template-","")+a;case 4384:case 3616:return u&&u.some(function(o,c){return l=c,Mn(o.props,/grid-\w+-end/)})?~Ho(a+(u=u[l].value),"span",0)?a:qe+ge(a,"-start","")+a+qe+"grid-row-span:"+(~Ho(u,"span",0)?Mn(u,/\d+/):+Mn(u,/\d+/)-+Mn(a,/\d+/))+";":qe+ge(a,"-start","")+a;case 4896:case 4128:return u&&u.some(function(o){return Mn(o.props,/grid-\w+-start/)})?a:qe+ge(ge(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return ge(a,/(.+)-inline(.+)/,ze+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(sn(a)-1-l>6)switch(nt(a,l+1)){case 109:if(nt(a,l+4)!==45)break;case 102:return ge(a,/(.+:)(.+)-([^]+)/,"$1"+ze+"$2-$3$1"+Wl+(nt(a,l+3)==108?"$3":"$2-$3"))+a;case 115:return~Ho(a,"stretch",0)?lv(ge(a,"stretch","fill-available"),l,u)+a:a}break;case 5152:case 5920:return ge(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,c,f,p,y,v,m){return qe+c+":"+f+m+(p?qe+c+"-span:"+(y?v:+v-+f)+m:"")+a});case 4949:if(nt(a,l+6)===121)return ge(a,":",":"+ze)+a;break;case 6444:switch(nt(a,nt(a,14)===45?18:11)){case 120:return ge(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ze+(nt(a,14)===45?"inline-":"")+"box$3$1"+ze+"$2$3$1"+qe+"$2box$3")+a;case 100:return ge(a,":",":"+qe)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ge(a,"scroll-","scroll-snap-")+a}return a}function Vo(a,l){for(var u="",o=0;o<a.length;o++)u+=l(a[o],o,a,l)||"";return u}function Gx(a,l,u,o){switch(a.type){case zx:if(a.children.length)break;case jx:case kf:return a.return=a.return||a.value;case I1:return"";case ev:return a.return=a.value+"{"+Vo(a.children,o)+"}";case nu:if(!sn(a.value=a.props.join(",")))return""}return sn(u=Vo(a.children,o))?a.return=a.value+"{"+u+"}":""}function Xx(a){var l=av(a);return function(u,o,c,f){for(var p="",y=0;y<l;y++)p+=a[y](u,o,c,f)||"";return p}}function Vx(a){return function(l){l.root||(l=l.return)&&a(l)}}function Qx(a,l,u,o){if(a.length>-1&&!a.return)switch(a.type){case kf:a.return=lv(a.value,a.length,u);return;case ev:return Vo([da(a,{value:ge(a.value,"@","@"+ze)})],o);case nu:if(a.length)return Mx(u=a.props,function(c){switch(Mn(c,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ri(da(a,{props:[ge(c,/:(read-\w+)/,":"+Wl+"$1")]})),Ri(da(a,{props:[c]})),vf(a,{props:mm(u,o)});break;case"::placeholder":Ri(da(a,{props:[ge(c,/:(plac\w+)/,":"+ze+"input-$1")]})),Ri(da(a,{props:[ge(c,/:(plac\w+)/,":"+Wl+"$1")]})),Ri(da(a,{props:[ge(c,/:(plac\w+)/,qe+"input-$1")]})),Ri(da(a,{props:[c]})),vf(a,{props:mm(u,o)});break}return""})}}var Zx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Nt={},ki=typeof process<"u"&&Nt!==void 0&&(Nt.REACT_APP_SC_ATTR||Nt.SC_ATTR)||"data-styled",rv="active",ov="data-styled-version",ru="6.1.19",Bf=`/*!sc*/
`,Qo=typeof window<"u"&&typeof document<"u",Kx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Nt!==void 0&&Nt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Nt.REACT_APP_SC_DISABLE_SPEEDY!==""?Nt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Nt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Nt!==void 0&&Nt.SC_DISABLE_SPEEDY!==void 0&&Nt.SC_DISABLE_SPEEDY!==""&&Nt.SC_DISABLE_SPEEDY!=="false"&&Nt.SC_DISABLE_SPEEDY),Px={},ou=Object.freeze([]),Ui=Object.freeze({});function uv(a,l,u){return u===void 0&&(u=Ui),a.theme!==u.theme&&a.theme||l||u.theme}var sv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Jx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Fx=/(^-|-$)/g;function ym(a){return a.replace(Jx,"-").replace(Fx,"")}var Wx=/(a)(d)/gi,_o=52,bm=function(a){return String.fromCharCode(a+(a>25?39:97))};function bf(a){var l,u="";for(l=Math.abs(a);l>_o;l=l/_o|0)u=bm(l%_o)+u;return(bm(l%_o)+u).replace(Wx,"$1-$2")}var Uc,cv=5381,Ai=function(a,l){for(var u=l.length;u;)a=33*a^l.charCodeAt(--u);return a},fv=function(a){return Ai(cv,a)};function Hf(a){return bf(fv(a)>>>0)}function Ix(a){return a.displayName||a.name||"Component"}function Bc(a){return typeof a=="string"&&!0}var dv=typeof Symbol=="function"&&Symbol.for,hv=dv?Symbol.for("react.memo"):60115,e5=dv?Symbol.for("react.forward_ref"):60112,t5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a5=((Uc={})[e5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Uc[hv]=pv,Uc);function xm(a){return("type"in(l=a)&&l.type.$$typeof)===hv?pv:"$$typeof"in a?a5[a.$$typeof]:t5;var l}var i5=Object.defineProperty,l5=Object.getOwnPropertyNames,Sm=Object.getOwnPropertySymbols,r5=Object.getOwnPropertyDescriptor,o5=Object.getPrototypeOf,wm=Object.prototype;function mv(a,l,u){if(typeof l!="string"){if(wm){var o=o5(l);o&&o!==wm&&mv(a,o,u)}var c=l5(l);Sm&&(c=c.concat(Sm(l)));for(var f=xm(a),p=xm(l),y=0;y<c.length;++y){var v=c[y];if(!(v in n5||u&&u[v]||p&&v in p||f&&v in f)){var m=r5(l,v);try{i5(a,v,m)}catch{}}}}return a}function Bi(a){return typeof a=="function"}function $f(a){return typeof a=="object"&&"styledComponentId"in a}function Ba(a,l){return a&&l?"".concat(a," ").concat(l):a||l||""}function Zo(a,l){if(a.length===0)return"";for(var u=a[0],o=1;o<a.length;o++)u+=a[o];return u}function tr(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function xf(a,l,u){if(u===void 0&&(u=!1),!u&&!tr(a)&&!Array.isArray(a))return l;if(Array.isArray(l))for(var o=0;o<l.length;o++)a[o]=xf(a[o],l[o]);else if(tr(l))for(var o in l)a[o]=xf(a[o],l[o]);return a}function qf(a,l){Object.defineProperty(a,"toString",{value:l})}function or(a){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(l.length>0?" Args: ".concat(l.join(", ")):""))}var u5=(function(){function a(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l}return a.prototype.indexOfGroup=function(l){for(var u=0,o=0;o<l;o++)u+=this.groupSizes[o];return u},a.prototype.insertRules=function(l,u){if(l>=this.groupSizes.length){for(var o=this.groupSizes,c=o.length,f=c;l>=f;)if((f<<=1)<0)throw or(16,"".concat(l));this.groupSizes=new Uint32Array(f),this.groupSizes.set(o),this.length=f;for(var p=c;p<f;p++)this.groupSizes[p]=0}for(var y=this.indexOfGroup(l+1),v=(p=0,u.length);p<v;p++)this.tag.insertRule(y,u[p])&&(this.groupSizes[l]++,y++)},a.prototype.clearGroup=function(l){if(l<this.length){var u=this.groupSizes[l],o=this.indexOfGroup(l),c=o+u;this.groupSizes[l]=0;for(var f=o;f<c;f++)this.tag.deleteRule(o)}},a.prototype.getGroup=function(l){var u="";if(l>=this.length||this.groupSizes[l]===0)return u;for(var o=this.groupSizes[l],c=this.indexOfGroup(l),f=c+o,p=c;p<f;p++)u+="".concat(this.tag.getRule(p)).concat(Bf);return u},a})(),Yo=new Map,Ko=new Map,Go=1,Oo=function(a){if(Yo.has(a))return Yo.get(a);for(;Ko.has(Go);)Go++;var l=Go++;return Yo.set(a,l),Ko.set(l,a),l},s5=function(a,l){Go=l+1,Yo.set(a,l),Ko.set(l,a)},c5="style[".concat(ki,"][").concat(ov,'="').concat(ru,'"]'),f5=new RegExp("^".concat(ki,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),d5=function(a,l,u){for(var o,c=u.split(","),f=0,p=c.length;f<p;f++)(o=c[f])&&a.registerName(l,o)},h5=function(a,l){for(var u,o=((u=l.textContent)!==null&&u!==void 0?u:"").split(Bf),c=[],f=0,p=o.length;f<p;f++){var y=o[f].trim();if(y){var v=y.match(f5);if(v){var m=0|parseInt(v[1],10),S=v[2];m!==0&&(s5(S,m),d5(a,S,v[3]),a.getTag().insertRules(m,c)),c.length=0}else c.push(y)}}},Em=function(a){for(var l=document.querySelectorAll(c5),u=0,o=l.length;u<o;u++){var c=l[u];c&&c.getAttribute(ki)!==rv&&(h5(a,c),c.parentNode&&c.parentNode.removeChild(c))}};function p5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var vv=function(a){var l=document.head,u=a||l,o=document.createElement("style"),c=(function(y){var v=Array.from(y.querySelectorAll("style[".concat(ki,"]")));return v[v.length-1]})(u),f=c!==void 0?c.nextSibling:null;o.setAttribute(ki,rv),o.setAttribute(ov,ru);var p=p5();return p&&o.setAttribute("nonce",p),u.insertBefore(o,f),o},m5=(function(){function a(l){this.element=vv(l),this.element.appendChild(document.createTextNode("")),this.sheet=(function(u){if(u.sheet)return u.sheet;for(var o=document.styleSheets,c=0,f=o.length;c<f;c++){var p=o[c];if(p.ownerNode===u)return p}throw or(17)})(this.element),this.length=0}return a.prototype.insertRule=function(l,u){try{return this.sheet.insertRule(u,l),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},a.prototype.getRule=function(l){var u=this.sheet.cssRules[l];return u&&u.cssText?u.cssText:""},a})(),v5=(function(){function a(l){this.element=vv(l),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(l,u){if(l<=this.length&&l>=0){var o=document.createTextNode(u);return this.element.insertBefore(o,this.nodes[l]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},a.prototype.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},a})(),g5=(function(){function a(l){this.rules=[],this.length=0}return a.prototype.insertRule=function(l,u){return l<=this.length&&(this.rules.splice(l,0,u),this.length++,!0)},a.prototype.deleteRule=function(l){this.rules.splice(l,1),this.length--},a.prototype.getRule=function(l){return l<this.length?this.rules[l]:""},a})(),Cm=Qo,y5={isServer:!Qo,useCSSOMInjection:!Kx},Po=(function(){function a(l,u,o){l===void 0&&(l=Ui),u===void 0&&(u={});var c=this;this.options=ct(ct({},y5),l),this.gs=u,this.names=new Map(o),this.server=!!l.isServer,!this.server&&Qo&&Cm&&(Cm=!1,Em(this)),qf(this,function(){return(function(f){for(var p=f.getTag(),y=p.length,v="",m=function(x){var w=(function(F){return Ko.get(F)})(x);if(w===void 0)return"continue";var A=f.names.get(w),R=p.getGroup(x);if(A===void 0||!A.size||R.length===0)return"continue";var q="".concat(ki,".g").concat(x,'[id="').concat(w,'"]'),Z="";A!==void 0&&A.forEach(function(F){F.length>0&&(Z+="".concat(F,","))}),v+="".concat(R).concat(q,'{content:"').concat(Z,'"}').concat(Bf)},S=0;S<y;S++)m(S);return v})(c)})}return a.registerId=function(l){return Oo(l)},a.prototype.rehydrate=function(){!this.server&&Qo&&Em(this)},a.prototype.reconstructWithOptions=function(l,u){return u===void 0&&(u=!0),new a(ct(ct({},this.options),l),this.gs,u&&this.names||void 0)},a.prototype.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(l=(function(u){var o=u.useCSSOMInjection,c=u.target;return u.isServer?new g5(c):o?new m5(c):new v5(c)})(this.options),new u5(l)));var l},a.prototype.hasNameForId=function(l,u){return this.names.has(l)&&this.names.get(l).has(u)},a.prototype.registerName=function(l,u){if(Oo(l),this.names.has(l))this.names.get(l).add(u);else{var o=new Set;o.add(u),this.names.set(l,o)}},a.prototype.insertRules=function(l,u,o){this.registerName(l,u),this.getTag().insertRules(Oo(l),o)},a.prototype.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},a.prototype.clearRules=function(l){this.getTag().clearGroup(Oo(l)),this.clearNames(l)},a.prototype.clearTag=function(){this.tag=void 0},a})(),b5=/&/g,x5=/^\s*\/\/.*$/gm;function gv(a,l){return a.map(function(u){return u.type==="rule"&&(u.value="".concat(l," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(l," ")),u.props=u.props.map(function(o){return"".concat(l," ").concat(o)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=gv(u.children,l)),u})}function S5(a){var l,u,o,c=Ui,f=c.options,p=f===void 0?Ui:f,y=c.plugins,v=y===void 0?ou:y,m=function(w,A,R){return R.startsWith(u)&&R.endsWith(u)&&R.replaceAll(u,"").length>0?".".concat(l):w},S=v.slice();S.push(function(w){w.type===nu&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(b5,u).replace(o,m))}),p.prefix&&S.push(Qx),S.push(Gx);var x=function(w,A,R,q){A===void 0&&(A=""),R===void 0&&(R=""),q===void 0&&(q="&"),l=q,u=A,o=new RegExp("\\".concat(u,"\\b"),"g");var Z=w.replace(x5,""),F=qx(R||A?"".concat(R," ").concat(A," { ").concat(Z," }"):Z);p.namespace&&(F=gv(F,p.namespace));var M=[];return Vo(F,Xx(S.concat(Vx(function(H){return M.push(H)})))),M};return x.hash=v.length?v.reduce(function(w,A){return A.name||or(15),Ai(w,A.name)},cv).toString():"",x}var w5=new Po,Sf=S5(),yv=Ce.createContext({shouldForwardProp:void 0,styleSheet:w5,stylis:Sf});yv.Consumer;Ce.createContext(void 0);function wf(){return b.useContext(yv)}var bv=(function(){function a(l,u){var o=this;this.inject=function(c,f){f===void 0&&(f=Sf);var p=o.name+f.hash;c.hasNameForId(o.id,p)||c.insertRules(o.id,p,f(o.rules,p,"@keyframes"))},this.name=l,this.id="sc-keyframes-".concat(l),this.rules=u,qf(this,function(){throw or(12,String(o.name))})}return a.prototype.getName=function(l){return l===void 0&&(l=Sf),this.name+l.hash},a})(),E5=function(a){return a>="A"&&a<="Z"};function Tm(a){for(var l="",u=0;u<a.length;u++){var o=a[u];if(u===1&&o==="-"&&a[0]==="-")return a;E5(o)?l+="-"+o.toLowerCase():l+=o}return l.startsWith("ms-")?"-"+l:l}var xv=function(a){return a==null||a===!1||a===""},Sv=function(a){var l,u,o=[];for(var c in a){var f=a[c];a.hasOwnProperty(c)&&!xv(f)&&(Array.isArray(f)&&f.isCss||Bi(f)?o.push("".concat(Tm(c),":"),f,";"):tr(f)?o.push.apply(o,Di(Di(["".concat(c," {")],Sv(f),!1),["}"],!1)):o.push("".concat(Tm(c),": ").concat((l=c,(u=f)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||l in Zx||l.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return o};function pa(a,l,u,o){if(xv(a))return[];if($f(a))return[".".concat(a.styledComponentId)];if(Bi(a)){if(!Bi(f=a)||f.prototype&&f.prototype.isReactComponent||!l)return[a];var c=a(l);return pa(c,l,u,o)}var f;return a instanceof bv?u?(a.inject(u,o),[a.getName(o)]):[a]:tr(a)?Sv(a):Array.isArray(a)?Array.prototype.concat.apply(ou,a.map(function(p){return pa(p,l,u,o)})):[a.toString()]}function wv(a){for(var l=0;l<a.length;l+=1){var u=a[l];if(Bi(u)&&!$f(u))return!1}return!0}var C5=fv(ru),T5=(function(){function a(l,u,o){this.rules=l,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&wv(l),this.componentId=u,this.baseHash=Ai(C5,u),this.baseStyle=o,Po.registerId(u)}return a.prototype.generateAndInjectStyles=function(l,u,o){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(l,u,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))c=Ba(c,this.staticRulesId);else{var f=Zo(pa(this.rules,l,u,o)),p=bf(Ai(this.baseHash,f)>>>0);if(!u.hasNameForId(this.componentId,p)){var y=o(f,".".concat(p),void 0,this.componentId);u.insertRules(this.componentId,p,y)}c=Ba(c,p),this.staticRulesId=p}else{for(var v=Ai(this.baseHash,o.hash),m="",S=0;S<this.rules.length;S++){var x=this.rules[S];if(typeof x=="string")m+=x;else if(x){var w=Zo(pa(x,l,u,o));v=Ai(v,w+S),m+=w}}if(m){var A=bf(v>>>0);u.hasNameForId(this.componentId,A)||u.insertRules(this.componentId,A,o(m,".".concat(A),void 0,this.componentId)),c=Ba(c,A)}}return c},a})(),Yf=Ce.createContext(void 0);Yf.Consumer;var Hc={};function R5(a,l,u){var o=$f(a),c=a,f=!Bc(a),p=l.attrs,y=p===void 0?ou:p,v=l.componentId,m=v===void 0?(function(G,L){var z=typeof G!="string"?"sc":ym(G);Hc[z]=(Hc[z]||0)+1;var K="".concat(z,"-").concat(Hf(ru+z+Hc[z]));return L?"".concat(L,"-").concat(K):K})(l.displayName,l.parentComponentId):v,S=l.displayName,x=S===void 0?(function(G){return Bc(G)?"styled.".concat(G):"Styled(".concat(Ix(G),")")})(a):S,w=l.displayName&&l.componentId?"".concat(ym(l.displayName),"-").concat(l.componentId):l.componentId||m,A=o&&c.attrs?c.attrs.concat(y).filter(Boolean):y,R=l.shouldForwardProp;if(o&&c.shouldForwardProp){var q=c.shouldForwardProp;if(l.shouldForwardProp){var Z=l.shouldForwardProp;R=function(G,L){return q(G,L)&&Z(G,L)}}else R=q}var F=new T5(u,w,o?c.componentStyle:void 0);function M(G,L){return(function(z,K,k){var X=z.attrs,le=z.componentStyle,P=z.defaultProps,N=z.foldedComponentIds,ee=z.styledComponentId,ne=z.target,T=Ce.useContext(Yf),j=wf(),$=z.shouldForwardProp||j.shouldForwardProp,J=uv(K,T,P)||Ui,re=(function(se,he,ye){for(var Ue,Te=ct(ct({},he),{className:void 0,theme:ye}),St=0;St<se.length;St+=1){var Kt=Bi(Ue=se[St])?Ue(Te):Ue;for(var ft in Kt)Te[ft]=ft==="className"?Ba(Te[ft],Kt[ft]):ft==="style"?ct(ct({},Te[ft]),Kt[ft]):Kt[ft]}return he.className&&(Te.className=Ba(Te.className,he.className)),Te})(X,K,J),ce=re.as||ne,C={};for(var V in re)re[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&re.theme===J||(V==="forwardedAs"?C.as=re.forwardedAs:$&&!$(V,ce)||(C[V]=re[V]));var ie=(function(se,he){var ye=wf(),Ue=se.generateAndInjectStyles(he,ye.styleSheet,ye.stylis);return Ue})(le,re),ae=Ba(N,ee);return ie&&(ae+=" "+ie),re.className&&(ae+=" "+re.className),C[Bc(ce)&&!sv.has(ce)?"class":"className"]=ae,k&&(C.ref=k),b.createElement(ce,C)})(H,G,L)}M.displayName=x;var H=Ce.forwardRef(M);return H.attrs=A,H.componentStyle=F,H.displayName=x,H.shouldForwardProp=R,H.foldedComponentIds=o?Ba(c.foldedComponentIds,c.styledComponentId):"",H.styledComponentId=w,H.target=o?c.target:a,Object.defineProperty(H,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(G){this._foldedDefaultProps=o?(function(L){for(var z=[],K=1;K<arguments.length;K++)z[K-1]=arguments[K];for(var k=0,X=z;k<X.length;k++)xf(L,X[k],!0);return L})({},c.defaultProps,G):G}}),qf(H,function(){return".".concat(H.styledComponentId)}),f&&mv(H,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),H}function Rm(a,l){for(var u=[a[0]],o=0,c=l.length;o<c;o+=1)u.push(l[o],a[o+1]);return u}var _m=function(a){return Object.assign(a,{isCss:!0})};function ma(a){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];if(Bi(a)||tr(a))return _m(pa(Rm(ou,Di([a],l,!0))));var o=a;return l.length===0&&o.length===1&&typeof o[0]=="string"?pa(o):_m(pa(Rm(o,l)))}function Ef(a,l,u){if(u===void 0&&(u=Ui),!l)throw or(1,l);var o=function(c){for(var f=[],p=1;p<arguments.length;p++)f[p-1]=arguments[p];return a(l,u,ma.apply(void 0,Di([c],f,!1)))};return o.attrs=function(c){return Ef(a,l,ct(ct({},u),{attrs:Array.prototype.concat(u.attrs,c).filter(Boolean)}))},o.withConfig=function(c){return Ef(a,l,ct(ct({},u),c))},o}var Ev=function(a){return Ef(R5,a)},_=Ev;sv.forEach(function(a){_[a]=Ev(a)});var _5=(function(){function a(l,u){this.rules=l,this.componentId=u,this.isStatic=wv(l),Po.registerId(this.componentId+1)}return a.prototype.createStyles=function(l,u,o,c){var f=c(Zo(pa(this.rules,u,o,c)),""),p=this.componentId+l;o.insertRules(p,p,f)},a.prototype.removeStyles=function(l,u){u.clearRules(this.componentId+l)},a.prototype.renderStyles=function(l,u,o,c){l>2&&Po.registerId(this.componentId+l),this.removeStyles(l,o),this.createStyles(l,u,o,c)},a})();function O5(a){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];var o=ma.apply(void 0,Di([a],l,!1)),c="sc-global-".concat(Hf(JSON.stringify(o))),f=new _5(o,c),p=function(v){var m=wf(),S=Ce.useContext(Yf),x=Ce.useRef(m.styleSheet.allocateGSInstance(c)).current;return m.styleSheet.server&&y(x,v,m.styleSheet,S,m.stylis),Ce.useLayoutEffect(function(){if(!m.styleSheet.server)return y(x,v,m.styleSheet,S,m.stylis),function(){return f.removeStyles(x,m.styleSheet)}},[x,v,m.styleSheet,S,m.stylis]),null};function y(v,m,S,x,w){if(f.isStatic)f.renderStyles(v,Px,S,w);else{var A=ct(ct({},m),{theme:uv(m,x,p.defaultProps)});f.renderStyles(v,A,S,w)}}return Ce.memo(p)}function dn(a){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];var o=Zo(ma.apply(void 0,Di([a],l,!1))),c=Hf(o);return new bv(c,o)}var Cv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Om=Ce.createContext&&Ce.createContext(Cv),j5=["attr","size","title"];function z5(a,l){if(a==null)return{};var u=A5(a,l),o,c;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)o=f[c],!(l.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(a,o)&&(u[o]=a[o])}return u}function A5(a,l){if(a==null)return{};var u={};for(var o in a)if(Object.prototype.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}function Jo(){return Jo=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},Jo.apply(this,arguments)}function jm(a,l){var u=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);l&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable})),u.push.apply(u,o)}return u}function Fo(a){for(var l=1;l<arguments.length;l++){var u=arguments[l]!=null?arguments[l]:{};l%2?jm(Object(u),!0).forEach(function(o){M5(a,o,u[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(u)):jm(Object(u)).forEach(function(o){Object.defineProperty(a,o,Object.getOwnPropertyDescriptor(u,o))})}return a}function M5(a,l,u){return l=D5(l),l in a?Object.defineProperty(a,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[l]=u,a}function D5(a){var l=N5(a,"string");return typeof l=="symbol"?l:l+""}function N5(a,l){if(typeof a!="object"||!a)return a;var u=a[Symbol.toPrimitive];if(u!==void 0){var o=u.call(a,l);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(a)}function Tv(a){return a&&a.map((l,u)=>Ce.createElement(l.tag,Fo({key:u},l.attr),Tv(l.child)))}function Oe(a){return l=>Ce.createElement(L5,Jo({attr:Fo({},a.attr)},l),Tv(a.child))}function L5(a){var l=u=>{var{attr:o,size:c,title:f}=a,p=z5(a,j5),y=c||u.size||"1em",v;return u.className&&(v=u.className),a.className&&(v=(v?v+" ":"")+a.className),Ce.createElement("svg",Jo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,o,p,{className:v,style:Fo(Fo({color:a.color||u.color},u.style),a.style),height:y,width:y,xmlns:"http://www.w3.org/2000/svg"}),f&&Ce.createElement("title",null,f),a.children)};return Om!==void 0?Ce.createElement(Om.Consumer,null,u=>l(u)):l(Cv)}function Rv(a){return Oe({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"},child:[]}]})(a)}function k5(a){return Oe({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311h-.3v428h472.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32z"},child:[]}]})(a)}function _v(a){return Oe({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"},child:[]}]})(a)}function U5(a){return Oe({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"},child:[]}]})(a)}function Gf(a){return Oe({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"},child:[]}]})(a)}function Xf(a){return Oe({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"},child:[]}]})(a)}function Ov(a){return Oe({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"},child:[]}]})(a)}function B5(a){return Oe({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"},child:[]}]})(a)}function H5(a){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(a)}function jv(a){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(a)}function $5(a){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(a)}function zv(a){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(a)}function q5(a){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(a)}function Av(a){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(a)}function Y5(a){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(a)}function Mv(a){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(a)}function zm(a){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}const G5="/instalearn/assets/vedioClip1-BQ1quwNm.mp4",X5="/instalearn/assets/test-BrOnAr5c.png",V5="/instalearn/assets/teacherProfilePic-DPrjIuTX.png",Q5="/instalearn/assets/Slide1-CugONfFy.png",Z5="/instalearn/assets/Slide2-D-tpOApl.png",K5="/instalearn/assets/Slide3-B6C07YuO.png",P5="/instalearn/assets/Slide4-BbthJNiF.png",J5="/instalearn/assets/Slide5-BsOulZPi.png",F5="/instalearn/assets/Slide6-8dQDHdn3.png",W5="/instalearn/assets/Slide7-C6b8m5yZ.png",I5="/instalearn/assets/Slide8-DZBpeM0l.png",e3="/instalearn/assets/Slide9-CRnJTJ7g.png",jo={},t3={videoClip1:G5},n3={test:X5},Dv={teacherProfilePic:V5},An={Slide1:Q5,Slide2:Z5,Slide3:K5,Slide4:P5,Slide5:J5,Slide6:F5,Slide7:W5,Slide8:I5,Slide9:e3},a3=_.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
`,i3=_.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,l3=_.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,r3=_.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,o3=_.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,u3=_.span`
  font-weight: 600;
  color: #0f172a;
`,s3=_.span`
  font-size: 12px;
  color: #64748b;
`,c3=_.button`
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: transparent;
  border: none;
  color: #0f172a;
  cursor: pointer;
  &:hover { background: rgba(15, 23, 42, 0.04); }
`,f3=_.div`
  position: relative;
  aspect-ratio: 1 / 1; /* Instagram-like square */
  background: linear-gradient(135deg, #eef2ff, #e0f7fa);
`,d3=_.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,h3=_.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px 6px 12px;
`,p3=_.div`
  display: flex;
  gap: 12px;
`,zo=_.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  border-radius: 10px;
  color: #0f172a;
  cursor: pointer;
  transition: transform 120ms ease, background 120ms ease;
  &:hover { background: rgba(15, 23, 42, 0.05); }
  &:active { transform: scale(0.98); }
`,m3=_.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 12px 6px 12px;
  padding: 8px 10px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: #fff;
  border-radius: 999px;
  font-size: 13px;
  color: #0f172a;
`,v3=_.div`
  display: flex;
`,g3=_.img`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
  margin-left: -6px;
  &:first-child { margin-left: 0; }
`,y3=_.div`
  padding: 2px 12px 14px 12px;
`,b3=_.p`
  margin: 6px 0 6px;
  font-size: 14px;
  line-height: 1.5;
  color: #0f172a;
`,x3=_.time`
  font-size: 12px;
  color: #64748b;
`;function S3({username:a="Siddharth Sir",userSubline:l="SST Teacher",avatarSrc:u=Dv.teacherProfilePic,title:o="Sense of Collective Identity - Overview",description:c="Understanding how shared culture, values, and history build national unity and belonging.",imgSrc:f="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",likedDefault:p=!1,savedDefault:y=!1,likeCountDefault:v=12,commenterAvatars:m=["https://i.pravatar.cc/100?img=12","https://i.pravatar.cc/100?img=32","https://i.pravatar.cc/100?img=8"],postUrl:S=typeof window<"u"?window.location.href:"",onLikeChange:x,onBookmarkChange:w,onShare:A}){const[R,q]=b.useState(p),[Z,F]=b.useState(y),[M,H]=b.useState(v),G=R?"Unlike":"Like",L=Z?"Remove bookmark":"Bookmark",z=()=>{const le=!R;q(le),H(P=>le?P+1:Math.max(0,P-1)),x&&x(le)},K=()=>{const le=!Z;F(le),w&&w(le)},k=b.useMemo(()=>({title:o,text:`${a} on Infographics — ${o}`,url:S}),[o,a,S]),X=async()=>{try{navigator.share?await navigator.share(k):navigator.clipboard&&(await navigator.clipboard.writeText(k.url),alert("Link copied to clipboard")),A&&A(k)}catch(le){console.error("Share failed:",le)}};return h.jsxs(a3,{role:"article","aria-label":`${o} instagram-style post`,children:[h.jsxs(i3,{children:[h.jsxs(l3,{children:[h.jsx(r3,{src:u,alt:`${a} avatar`}),h.jsxs(o3,{children:[h.jsx(u3,{children:a}),h.jsx(s3,{children:l})]})]}),h.jsx(c3,{"aria-label":"Post menu",title:"More",children:h.jsx(B5,{size:18})})]}),h.jsx(f3,{children:h.jsx(d3,{src:f,alt:o})}),h.jsxs(h3,{children:[h.jsxs(p3,{children:[h.jsx(zo,{onClick:z,"aria-label":G,title:G,children:R?h.jsx(Rv,{size:22}):h.jsx(_v,{size:22})}),h.jsx(zo,{"aria-label":"Comment",title:"Comment",children:h.jsx(Ov,{size:20})}),h.jsx(zo,{onClick:X,"aria-label":"Share",title:"Share",children:h.jsx(Av,{size:20})})]}),h.jsx(zo,{onClick:K,"aria-label":L,title:L,children:Z?h.jsx(Gf,{size:20}):h.jsx(Xf,{size:20})})]}),h.jsxs(m3,{"aria-label":`${M} likes`,children:[h.jsx(v3,{children:m.slice(0,3).map((le,P)=>h.jsx(g3,{src:le,alt:"reaction avatar"},P))}),h.jsxs("span",{children:[M," likes"]})]}),h.jsxs(y3,{children:[h.jsxs(b3,{children:[h.jsx("strong",{children:a})," ",c]}),h.jsx(x3,{dateTime:new Date().toISOString(),children:"Just now"})]})]})}var $c={},ql={},Ao={},Mo={},qc={exports:{}},Yc,Am;function w3(){if(Am)return Yc;Am=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Yc=a,Yc}var Gc,Mm;function E3(){if(Mm)return Gc;Mm=1;var a=w3();function l(){}function u(){}return u.resetWarningCache=l,Gc=function(){function o(p,y,v,m,S,x){if(x!==a){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}o.isRequired=o;function c(){return o}var f={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:c,element:o,elementType:o,instanceOf:c,node:o,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:u,resetWarningCache:l};return f.PropTypes=f,f},Gc}var Dm;function Nv(){return Dm||(Dm=1,qc.exports=E3()()),qc.exports}var Nm;function C3(){return Nm||(Nm=1,(function(a){(function(l,u){u(a,va(),Nv())})(Mo,function(l,u,o){Object.defineProperty(l,"__esModule",{value:!0}),l.setHasSupportToCaptureOption=R;var c=p(u),f=p(o);function p(M){return M&&M.__esModule?M:{default:M}}var y=Object.assign||function(M){for(var H=1;H<arguments.length;H++){var G=arguments[H];for(var L in G)Object.prototype.hasOwnProperty.call(G,L)&&(M[L]=G[L])}return M};function v(M,H){var G={};for(var L in M)H.indexOf(L)>=0||Object.prototype.hasOwnProperty.call(M,L)&&(G[L]=M[L]);return G}function m(M,H){if(!(M instanceof H))throw new TypeError("Cannot call a class as a function")}var S=(function(){function M(H,G){for(var L=0;L<G.length;L++){var z=G[L];z.enumerable=z.enumerable||!1,z.configurable=!0,"value"in z&&(z.writable=!0),Object.defineProperty(H,z.key,z)}}return function(H,G,L){return G&&M(H.prototype,G),L&&M(H,L),H}})();function x(M,H){if(!M)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return H&&(typeof H=="object"||typeof H=="function")?H:M}function w(M,H){if(typeof H!="function"&&H!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof H);M.prototype=Object.create(H&&H.prototype,{constructor:{value:M,enumerable:!1,writable:!0,configurable:!0}}),H&&(Object.setPrototypeOf?Object.setPrototypeOf(M,H):M.__proto__=H)}var A=!1;function R(M){A=M}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){R(!0)}}))}catch{}function q(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return A?M:M.capture}function Z(M){if("touches"in M){var H=M.touches[0],G=H.pageX,L=H.pageY;return{x:G,y:L}}var z=M.screenX,K=M.screenY;return{x:z,y:K}}var F=(function(M){w(H,M);function H(){var G;m(this,H);for(var L=arguments.length,z=Array(L),K=0;K<L;K++)z[K]=arguments[K];var k=x(this,(G=H.__proto__||Object.getPrototypeOf(H)).call.apply(G,[this].concat(z)));return k._handleSwipeStart=k._handleSwipeStart.bind(k),k._handleSwipeMove=k._handleSwipeMove.bind(k),k._handleSwipeEnd=k._handleSwipeEnd.bind(k),k._onMouseDown=k._onMouseDown.bind(k),k._onMouseMove=k._onMouseMove.bind(k),k._onMouseUp=k._onMouseUp.bind(k),k._setSwiperRef=k._setSwiperRef.bind(k),k}return S(H,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,q({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,q({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(L){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(L))}},{key:"_onMouseMove",value:function(L){this.mouseDown&&this._handleSwipeMove(L)}},{key:"_onMouseUp",value:function(L){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(L)}},{key:"_handleSwipeStart",value:function(L){var z=Z(L),K=z.x,k=z.y;this.moveStart={x:K,y:k},this.props.onSwipeStart(L)}},{key:"_handleSwipeMove",value:function(L){if(this.moveStart){var z=Z(L),K=z.x,k=z.y,X=K-this.moveStart.x,le=k-this.moveStart.y;this.moving=!0;var P=this.props.onSwipeMove({x:X,y:le},L);P&&L.cancelable&&L.preventDefault(),this.movePosition={deltaX:X,deltaY:le}}}},{key:"_handleSwipeEnd",value:function(L){this.props.onSwipeEnd(L);var z=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-z?this.props.onSwipeLeft(1,L):this.movePosition.deltaX>z&&this.props.onSwipeRight(1,L),this.movePosition.deltaY<-z?this.props.onSwipeUp(1,L):this.movePosition.deltaY>z&&this.props.onSwipeDown(1,L)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(L){this.swiper=L,this.props.innerRef(L)}},{key:"render",value:function(){var L=this.props;L.tagName;var z=L.className,K=L.style,k=L.children;L.allowMouseEvents,L.onSwipeUp,L.onSwipeDown,L.onSwipeLeft,L.onSwipeRight,L.onSwipeStart,L.onSwipeMove,L.onSwipeEnd,L.innerRef,L.tolerance;var X=v(L,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return c.default.createElement(this.props.tagName,y({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:z,style:K},X),k)}}]),H})(u.Component);F.displayName="ReactSwipe",F.propTypes={tagName:f.default.string,className:f.default.string,style:f.default.object,children:f.default.node,allowMouseEvents:f.default.bool,onSwipeUp:f.default.func,onSwipeDown:f.default.func,onSwipeLeft:f.default.func,onSwipeRight:f.default.func,onSwipeStart:f.default.func,onSwipeMove:f.default.func,onSwipeEnd:f.default.func,innerRef:f.default.func,tolerance:f.default.number.isRequired},F.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},l.default=F})})(Mo)),Mo}var Lm;function Lv(){return Lm||(Lm=1,(function(a){(function(l,u){u(a,C3())})(Ao,function(l,u){Object.defineProperty(l,"__esModule",{value:!0});var o=c(u);function c(f){return f&&f.__esModule?f:{default:f}}l.default=o.default})})(Ao)),Ao}var Yl={},Xc={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var km;function kv(){return km||(km=1,(function(a){(function(){var l={}.hasOwnProperty;function u(){for(var f="",p=0;p<arguments.length;p++){var y=arguments[p];y&&(f=c(f,o(y)))}return f}function o(f){if(typeof f=="string"||typeof f=="number")return f;if(typeof f!="object")return"";if(Array.isArray(f))return u.apply(null,f);if(f.toString!==Object.prototype.toString&&!f.toString.toString().includes("[native code]"))return f.toString();var p="";for(var y in f)l.call(f,y)&&f[y]&&(p=c(p,y));return p}function c(f,p){return p?f?f+" "+p:f+p:f}a.exports?(u.default=u,a.exports=u):window.classNames=u})()})(Xc)),Xc.exports}var Um;function Uv(){if(Um)return Yl;Um=1,Object.defineProperty(Yl,"__esModule",{value:!0}),Yl.default=void 0;var a=l(kv());function l(c){return c&&c.__esModule?c:{default:c}}function u(c,f,p){return f in c?Object.defineProperty(c,f,{value:p,enumerable:!0,configurable:!0,writable:!0}):c[f]=p,c}var o={ROOT:function(f){return(0,a.default)(u({"carousel-root":!0},f||"",!!f))},CAROUSEL:function(f){return(0,a.default)({carousel:!0,"carousel-slider":f})},WRAPPER:function(f,p){return(0,a.default)({"thumbs-wrapper":!f,"slider-wrapper":f,"axis-horizontal":p==="horizontal","axis-vertical":p!=="horizontal"})},SLIDER:function(f,p){return(0,a.default)({thumbs:!f,slider:f,animated:!p})},ITEM:function(f,p,y){return(0,a.default)({thumb:!f,slide:f,selected:p,previous:y})},ARROW_PREV:function(f){return(0,a.default)({"control-arrow control-prev":!0,"control-disabled":f})},ARROW_NEXT:function(f){return(0,a.default)({"control-arrow control-next":!0,"control-disabled":f})},DOT:function(f){return(0,a.default)({dot:!0,selected:f})}};return Yl.default=o,Yl}var Gl={},Xl={},Bm;function T3(){if(Bm)return Xl;Bm=1,Object.defineProperty(Xl,"__esModule",{value:!0}),Xl.outerWidth=void 0;var a=function(u){var o=u.offsetWidth,c=getComputedStyle(u);return o+=parseInt(c.marginLeft)+parseInt(c.marginRight),o};return Xl.outerWidth=a,Xl}var Vl={},Hm;function Vf(){if(Hm)return Vl;Hm=1,Object.defineProperty(Vl,"__esModule",{value:!0}),Vl.default=void 0;var a=function(u,o,c){var f=u===0?u:u+o,p=c==="horizontal"?[f,0,0]:[0,f,0],y="translate3d",v="("+p.join(",")+")";return y+v};return Vl.default=a,Vl}var Ql={},$m;function Bv(){if($m)return Ql;$m=1,Object.defineProperty(Ql,"__esModule",{value:!0}),Ql.default=void 0;var a=function(){return window};return Ql.default=a,Ql}var qm;function Hv(){if(qm)return Gl;qm=1,Object.defineProperty(Gl,"__esModule",{value:!0}),Gl.default=void 0;var a=v(va()),l=p(Uv()),u=T3(),o=p(Vf()),c=p(Lv()),f=p(Bv());function p(k){return k&&k.__esModule?k:{default:k}}function y(){if(typeof WeakMap!="function")return null;var k=new WeakMap;return y=function(){return k},k}function v(k){if(k&&k.__esModule)return k;if(k===null||m(k)!=="object"&&typeof k!="function")return{default:k};var X=y();if(X&&X.has(k))return X.get(k);var le={},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in k)if(Object.prototype.hasOwnProperty.call(k,N)){var ee=P?Object.getOwnPropertyDescriptor(k,N):null;ee&&(ee.get||ee.set)?Object.defineProperty(le,N,ee):le[N]=k[N]}return le.default=k,X&&X.set(k,le),le}function m(k){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?m=function(le){return typeof le}:m=function(le){return le&&typeof Symbol=="function"&&le.constructor===Symbol&&le!==Symbol.prototype?"symbol":typeof le},m(k)}function S(){return S=Object.assign||function(k){for(var X=1;X<arguments.length;X++){var le=arguments[X];for(var P in le)Object.prototype.hasOwnProperty.call(le,P)&&(k[P]=le[P])}return k},S.apply(this,arguments)}function x(k,X){if(!(k instanceof X))throw new TypeError("Cannot call a class as a function")}function w(k,X){for(var le=0;le<X.length;le++){var P=X[le];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(k,P.key,P)}}function A(k,X,le){return X&&w(k.prototype,X),k}function R(k,X){if(typeof X!="function"&&X!==null)throw new TypeError("Super expression must either be null or a function");k.prototype=Object.create(X&&X.prototype,{constructor:{value:k,writable:!0,configurable:!0}}),X&&q(k,X)}function q(k,X){return q=Object.setPrototypeOf||function(P,N){return P.__proto__=N,P},q(k,X)}function Z(k){var X=H();return function(){var P=G(k),N;if(X){var ee=G(this).constructor;N=Reflect.construct(P,arguments,ee)}else N=P.apply(this,arguments);return F(this,N)}}function F(k,X){return X&&(m(X)==="object"||typeof X=="function")?X:M(k)}function M(k){if(k===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return k}function H(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function G(k){return G=Object.setPrototypeOf?Object.getPrototypeOf:function(le){return le.__proto__||Object.getPrototypeOf(le)},G(k)}function L(k,X,le){return X in k?Object.defineProperty(k,X,{value:le,enumerable:!0,configurable:!0,writable:!0}):k[X]=le,k}var z=function(X){return X.hasOwnProperty("key")},K=(function(k){R(le,k);var X=Z(le);function le(P){var N;return x(this,le),N=X.call(this,P),L(M(N),"itemsWrapperRef",void 0),L(M(N),"itemsListRef",void 0),L(M(N),"thumbsRef",void 0),L(M(N),"setItemsWrapperRef",function(ee){N.itemsWrapperRef=ee}),L(M(N),"setItemsListRef",function(ee){N.itemsListRef=ee}),L(M(N),"setThumbsRef",function(ee,ne){N.thumbsRef||(N.thumbsRef=[]),N.thumbsRef[ne]=ee}),L(M(N),"updateSizes",function(){if(!(!N.props.children||!N.itemsWrapperRef||!N.thumbsRef)){var ee=a.Children.count(N.props.children),ne=N.itemsWrapperRef.clientWidth,T=N.props.thumbWidth?N.props.thumbWidth:(0,u.outerWidth)(N.thumbsRef[0]),j=Math.floor(ne/T),$=j<ee,J=$?ee-j:0;N.setState(function(re,ce){return{itemSize:T,visibleItems:j,firstItem:$?N.getFirstItem(ce.selectedItem):0,lastPosition:J,showArrows:$}})}}),L(M(N),"handleClickItem",function(ee,ne,T){if(!z(T)||T.key==="Enter"){var j=N.props.onSelectItem;typeof j=="function"&&j(ee,ne)}}),L(M(N),"onSwipeStart",function(){N.setState({swiping:!0})}),L(M(N),"onSwipeEnd",function(){N.setState({swiping:!1})}),L(M(N),"onSwipeMove",function(ee){var ne=ee.x;if(!N.state.itemSize||!N.itemsWrapperRef||!N.state.visibleItems)return!1;var T=0,j=a.Children.count(N.props.children),$=-(N.state.firstItem*100)/N.state.visibleItems,J=Math.max(j-N.state.visibleItems,0),re=-J*100/N.state.visibleItems;$===T&&ne>0&&(ne=0),$===re&&ne<0&&(ne=0);var ce=N.itemsWrapperRef.clientWidth,C=$+100/(ce/ne);return N.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(V){N.itemsListRef.style[V]=(0,o.default)(C,"%",N.props.axis)}),!0}),L(M(N),"slideRight",function(ee){N.moveTo(N.state.firstItem-(typeof ee=="number"?ee:1))}),L(M(N),"slideLeft",function(ee){N.moveTo(N.state.firstItem+(typeof ee=="number"?ee:1))}),L(M(N),"moveTo",function(ee){ee=ee<0?0:ee,ee=ee>=N.state.lastPosition?N.state.lastPosition:ee,N.setState({firstItem:ee})}),N.state={selectedItem:P.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},N}return A(le,[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(N){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==N.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,f.default)().addEventListener("resize",this.updateSizes),(0,f.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,f.default)().removeEventListener("resize",this.updateSizes),(0,f.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(N){var ee=N;return N>=this.state.lastPosition&&(ee=this.state.lastPosition),N<this.state.firstItem+this.state.visibleItems&&(ee=this.state.firstItem),N<this.state.firstItem&&(ee=N),ee}},{key:"renderItems",value:function(){var N=this;return this.props.children.map(function(ee,ne){var T=l.default.ITEM(!1,ne===N.state.selectedItem),j={key:ne,ref:function(J){return N.setThumbsRef(J,ne)},className:T,onClick:N.handleClickItem.bind(N,ne,N.props.children[ne]),onKeyDown:N.handleClickItem.bind(N,ne,N.props.children[ne]),"aria-label":"".concat(N.props.labels.item," ").concat(ne+1),style:{width:N.props.thumbWidth}};return a.default.createElement("li",S({},j,{role:"button",tabIndex:0}),ee)})}},{key:"render",value:function(){var N=this;if(!this.props.children)return null;var ee=a.Children.count(this.props.children)>1,ne=this.state.showArrows&&this.state.firstItem>0,T=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,j={},$=-this.state.firstItem*(this.state.itemSize||0),J=(0,o.default)($,"px",this.props.axis),re=this.props.transitionTime+"ms";return j={WebkitTransform:J,MozTransform:J,MsTransform:J,OTransform:J,transform:J,msTransform:J,WebkitTransitionDuration:re,MozTransitionDuration:re,MsTransitionDuration:re,OTransitionDuration:re,transitionDuration:re,msTransitionDuration:re},a.default.createElement("div",{className:l.default.CAROUSEL(!1)},a.default.createElement("div",{className:l.default.WRAPPER(!1),ref:this.setItemsWrapperRef},a.default.createElement("button",{type:"button",className:l.default.ARROW_PREV(!ne),onClick:function(){return N.slideRight()},"aria-label":this.props.labels.leftArrow}),ee?a.default.createElement(c.default,{tagName:"ul",className:l.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:j,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):a.default.createElement("ul",{className:l.default.SLIDER(!1,this.state.swiping),ref:function(C){return N.setItemsListRef(C)},style:j},this.renderItems()),a.default.createElement("button",{type:"button",className:l.default.ARROW_NEXT(!T),onClick:function(){return N.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}]),le})(a.Component);return Gl.default=K,L(K,"displayName","Thumbs"),L(K,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350}),Gl}var Zl={},Ym;function R3(){if(Ym)return Zl;Ym=1,Object.defineProperty(Zl,"__esModule",{value:!0}),Zl.default=void 0;var a=function(){return document};return Zl.default=a,Zl}var Mt={},Gm;function $v(){if(Gm)return Mt;Gm=1,Object.defineProperty(Mt,"__esModule",{value:!0}),Mt.setPosition=Mt.getPosition=Mt.isKeyboardEvent=Mt.defaultStatusFormatter=Mt.noop=void 0;var a=va(),l=u(Vf());function u(v){return v&&v.__esModule?v:{default:v}}var o=function(){};Mt.noop=o;var c=function(m,S){return"".concat(m," of ").concat(S)};Mt.defaultStatusFormatter=c;var f=function(m){return m?m.hasOwnProperty("key"):!1};Mt.isKeyboardEvent=f;var p=function(m,S){if(S.infiniteLoop&&++m,m===0)return 0;var x=a.Children.count(S.children);if(S.centerMode&&S.axis==="horizontal"){var w=-m*S.centerSlidePercentage,A=x-1;return m&&(m!==A||S.infiniteLoop)?w+=(100-S.centerSlidePercentage)/2:m===A&&(w+=100-S.centerSlidePercentage),w}return-m*100};Mt.getPosition=p;var y=function(m,S){var x={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(w){x[w]=(0,l.default)(m,"%",S)}),x};return Mt.setPosition=y,Mt}var Wt={},Xm;function _3(){if(Xm)return Wt;Xm=1,Object.defineProperty(Wt,"__esModule",{value:!0}),Wt.fadeAnimationHandler=Wt.slideStopSwipingHandler=Wt.slideSwipeAnimationHandler=Wt.slideAnimationHandler=void 0;var a=va(),l=o(Vf()),u=$v();function o(x){return x&&x.__esModule?x:{default:x}}function c(x,w){var A=Object.keys(x);if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(x);w&&(R=R.filter(function(q){return Object.getOwnPropertyDescriptor(x,q).enumerable})),A.push.apply(A,R)}return A}function f(x){for(var w=1;w<arguments.length;w++){var A=arguments[w]!=null?arguments[w]:{};w%2?c(Object(A),!0).forEach(function(R){p(x,R,A[R])}):Object.getOwnPropertyDescriptors?Object.defineProperties(x,Object.getOwnPropertyDescriptors(A)):c(Object(A)).forEach(function(R){Object.defineProperty(x,R,Object.getOwnPropertyDescriptor(A,R))})}return x}function p(x,w,A){return w in x?Object.defineProperty(x,w,{value:A,enumerable:!0,configurable:!0,writable:!0}):x[w]=A,x}var y=function(w,A){var R={},q=A.selectedItem,Z=q,F=a.Children.count(w.children)-1,M=w.infiniteLoop&&(q<0||q>F);if(M)return Z<0?w.centerMode&&w.centerSlidePercentage&&w.axis==="horizontal"?R.itemListStyle=(0,u.setPosition)(-(F+2)*w.centerSlidePercentage-(100-w.centerSlidePercentage)/2,w.axis):R.itemListStyle=(0,u.setPosition)(-(F+2)*100,w.axis):Z>F&&(R.itemListStyle=(0,u.setPosition)(0,w.axis)),R;var H=(0,u.getPosition)(q,w),G=(0,l.default)(H,"%",w.axis),L=w.transitionTime+"ms";return R.itemListStyle={WebkitTransform:G,msTransform:G,OTransform:G,transform:G},A.swiping||(R.itemListStyle=f(f({},R.itemListStyle),{},{WebkitTransitionDuration:L,MozTransitionDuration:L,OTransitionDuration:L,transitionDuration:L,msTransitionDuration:L})),R};Wt.slideAnimationHandler=y;var v=function(w,A,R,q){var Z={},F=A.axis==="horizontal",M=a.Children.count(A.children),H=0,G=(0,u.getPosition)(R.selectedItem,A),L=A.infiniteLoop?(0,u.getPosition)(M-1,A)-100:(0,u.getPosition)(M-1,A),z=F?w.x:w.y,K=z;G===H&&z>0&&(K=0),G===L&&z<0&&(K=0);var k=G+100/(R.itemSize/K),X=Math.abs(z)>A.swipeScrollTolerance;return A.infiniteLoop&&X&&(R.selectedItem===0&&k>-100?k-=M*100:R.selectedItem===M-1&&k<-M*100&&(k+=M*100)),(!A.preventMovementUntilSwipeScrollTolerance||X||R.swipeMovementStarted)&&(R.swipeMovementStarted||q({swipeMovementStarted:!0}),Z.itemListStyle=(0,u.setPosition)(k,A.axis)),X&&!R.cancelClick&&q({cancelClick:!0}),Z};Wt.slideSwipeAnimationHandler=v;var m=function(w,A){var R=(0,u.getPosition)(A.selectedItem,w),q=(0,u.setPosition)(R,w.axis);return{itemListStyle:q}};Wt.slideStopSwipingHandler=m;var S=function(w,A){var R=w.transitionTime+"ms",q="ease-in-out",Z={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:q,msTransitionTimingFunction:q,MozTransitionTimingFunction:q,WebkitTransitionTimingFunction:q,OTransitionTimingFunction:q};return A.swiping||(Z=f(f({},Z),{},{WebkitTransitionDuration:R,MozTransitionDuration:R,OTransitionDuration:R,transitionDuration:R,msTransitionDuration:R})),{slideStyle:Z,selectedStyle:f(f({},Z),{},{opacity:1,position:"relative"}),prevStyle:f({},Z)}};return Wt.fadeAnimationHandler=S,Wt}var Vm;function O3(){if(Vm)return ql;Vm=1,Object.defineProperty(ql,"__esModule",{value:!0}),ql.default=void 0;var a=S(va()),l=v(Lv()),u=v(Uv()),o=v(Hv()),c=v(R3()),f=v(Bv()),p=$v(),y=_3();function v(P){return P&&P.__esModule?P:{default:P}}function m(){if(typeof WeakMap!="function")return null;var P=new WeakMap;return m=function(){return P},P}function S(P){if(P&&P.__esModule)return P;if(P===null||x(P)!=="object"&&typeof P!="function")return{default:P};var N=m();if(N&&N.has(P))return N.get(P);var ee={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var T in P)if(Object.prototype.hasOwnProperty.call(P,T)){var j=ne?Object.getOwnPropertyDescriptor(P,T):null;j&&(j.get||j.set)?Object.defineProperty(ee,T,j):ee[T]=P[T]}return ee.default=P,N&&N.set(P,ee),ee}function x(P){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?x=function(ee){return typeof ee}:x=function(ee){return ee&&typeof Symbol=="function"&&ee.constructor===Symbol&&ee!==Symbol.prototype?"symbol":typeof ee},x(P)}function w(){return w=Object.assign||function(P){for(var N=1;N<arguments.length;N++){var ee=arguments[N];for(var ne in ee)Object.prototype.hasOwnProperty.call(ee,ne)&&(P[ne]=ee[ne])}return P},w.apply(this,arguments)}function A(P,N){var ee=Object.keys(P);if(Object.getOwnPropertySymbols){var ne=Object.getOwnPropertySymbols(P);N&&(ne=ne.filter(function(T){return Object.getOwnPropertyDescriptor(P,T).enumerable})),ee.push.apply(ee,ne)}return ee}function R(P){for(var N=1;N<arguments.length;N++){var ee=arguments[N]!=null?arguments[N]:{};N%2?A(Object(ee),!0).forEach(function(ne){X(P,ne,ee[ne])}):Object.getOwnPropertyDescriptors?Object.defineProperties(P,Object.getOwnPropertyDescriptors(ee)):A(Object(ee)).forEach(function(ne){Object.defineProperty(P,ne,Object.getOwnPropertyDescriptor(ee,ne))})}return P}function q(P,N){if(!(P instanceof N))throw new TypeError("Cannot call a class as a function")}function Z(P,N){for(var ee=0;ee<N.length;ee++){var ne=N[ee];ne.enumerable=ne.enumerable||!1,ne.configurable=!0,"value"in ne&&(ne.writable=!0),Object.defineProperty(P,ne.key,ne)}}function F(P,N,ee){return N&&Z(P.prototype,N),P}function M(P,N){if(typeof N!="function"&&N!==null)throw new TypeError("Super expression must either be null or a function");P.prototype=Object.create(N&&N.prototype,{constructor:{value:P,writable:!0,configurable:!0}}),N&&H(P,N)}function H(P,N){return H=Object.setPrototypeOf||function(ne,T){return ne.__proto__=T,ne},H(P,N)}function G(P){var N=K();return function(){var ne=k(P),T;if(N){var j=k(this).constructor;T=Reflect.construct(ne,arguments,j)}else T=ne.apply(this,arguments);return L(this,T)}}function L(P,N){return N&&(x(N)==="object"||typeof N=="function")?N:z(P)}function z(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}function K(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function k(P){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(ee){return ee.__proto__||Object.getPrototypeOf(ee)},k(P)}function X(P,N,ee){return N in P?Object.defineProperty(P,N,{value:ee,enumerable:!0,configurable:!0,writable:!0}):P[N]=ee,P}var le=(function(P){M(ee,P);var N=G(ee);function ee(ne){var T;q(this,ee),T=N.call(this,ne),X(z(T),"thumbsRef",void 0),X(z(T),"carouselWrapperRef",void 0),X(z(T),"listRef",void 0),X(z(T),"itemsRef",void 0),X(z(T),"timer",void 0),X(z(T),"animationHandler",void 0),X(z(T),"setThumbsRef",function($){T.thumbsRef=$}),X(z(T),"setCarouselWrapperRef",function($){T.carouselWrapperRef=$}),X(z(T),"setListRef",function($){T.listRef=$}),X(z(T),"setItemsRef",function($,J){T.itemsRef||(T.itemsRef=[]),T.itemsRef[J]=$}),X(z(T),"autoPlay",function(){a.Children.count(T.props.children)<=1||(T.clearAutoPlay(),T.props.autoPlay&&(T.timer=setTimeout(function(){T.increment()},T.props.interval)))}),X(z(T),"clearAutoPlay",function(){T.timer&&clearTimeout(T.timer)}),X(z(T),"resetAutoPlay",function(){T.clearAutoPlay(),T.autoPlay()}),X(z(T),"stopOnHover",function(){T.setState({isMouseEntered:!0},T.clearAutoPlay)}),X(z(T),"startOnLeave",function(){T.setState({isMouseEntered:!1},T.autoPlay)}),X(z(T),"isFocusWithinTheCarousel",function(){return T.carouselWrapperRef?!!((0,c.default)().activeElement===T.carouselWrapperRef||T.carouselWrapperRef.contains((0,c.default)().activeElement)):!1}),X(z(T),"navigateWithKeyboard",function($){if(T.isFocusWithinTheCarousel()){var J=T.props.axis,re=J==="horizontal",ce={ArrowUp:38,ArrowRight:39,ArrowDown:40,ArrowLeft:37},C=re?ce.ArrowRight:ce.ArrowDown,V=re?ce.ArrowLeft:ce.ArrowUp;C===$.keyCode?T.increment():V===$.keyCode&&T.decrement()}}),X(z(T),"updateSizes",function(){if(!(!T.state.initialized||!T.itemsRef||T.itemsRef.length===0)){var $=T.props.axis==="horizontal",J=T.itemsRef[0];if(J){var re=$?J.clientWidth:J.clientHeight;T.setState({itemSize:re}),T.thumbsRef&&T.thumbsRef.updateSizes()}}}),X(z(T),"setMountState",function(){T.setState({hasMount:!0}),T.updateSizes()}),X(z(T),"handleClickItem",function($,J){if(a.Children.count(T.props.children)!==0){if(T.state.cancelClick){T.setState({cancelClick:!1});return}T.props.onClickItem($,J),$!==T.state.selectedItem&&T.setState({selectedItem:$})}}),X(z(T),"handleOnChange",function($,J){a.Children.count(T.props.children)<=1||T.props.onChange($,J)}),X(z(T),"handleClickThumb",function($,J){T.props.onClickThumb($,J),T.moveTo($)}),X(z(T),"onSwipeStart",function($){T.setState({swiping:!0}),T.props.onSwipeStart($)}),X(z(T),"onSwipeEnd",function($){T.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),T.props.onSwipeEnd($),T.clearAutoPlay(),T.state.autoPlay&&T.autoPlay()}),X(z(T),"onSwipeMove",function($,J){T.props.onSwipeMove(J);var re=T.props.swipeAnimationHandler($,T.props,T.state,T.setState.bind(z(T)));return T.setState(R({},re)),!!Object.keys(re).length}),X(z(T),"decrement",function(){var $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;T.moveTo(T.state.selectedItem-(typeof $=="number"?$:1))}),X(z(T),"increment",function(){var $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;T.moveTo(T.state.selectedItem+(typeof $=="number"?$:1))}),X(z(T),"moveTo",function($){if(typeof $=="number"){var J=a.Children.count(T.props.children)-1;$<0&&($=T.props.infiniteLoop?J:0),$>J&&($=T.props.infiniteLoop?0:J),T.selectItem({selectedItem:$}),T.state.autoPlay&&T.state.isMouseEntered===!1&&T.resetAutoPlay()}}),X(z(T),"onClickNext",function(){T.increment(1)}),X(z(T),"onClickPrev",function(){T.decrement(1)}),X(z(T),"onSwipeForward",function(){T.increment(1),T.props.emulateTouch&&T.setState({cancelClick:!0})}),X(z(T),"onSwipeBackwards",function(){T.decrement(1),T.props.emulateTouch&&T.setState({cancelClick:!0})}),X(z(T),"changeItem",function($){return function(J){(!(0,p.isKeyboardEvent)(J)||J.key==="Enter")&&T.moveTo($)}}),X(z(T),"selectItem",function($){T.setState(R({previousItem:T.state.selectedItem},$),function(){T.setState(T.animationHandler(T.props,T.state))}),T.handleOnChange($.selectedItem,a.Children.toArray(T.props.children)[$.selectedItem])}),X(z(T),"getInitialImage",function(){var $=T.props.selectedItem,J=T.itemsRef&&T.itemsRef[$],re=J&&J.getElementsByTagName("img")||[];return re[0]}),X(z(T),"getVariableItemHeight",function($){var J=T.itemsRef&&T.itemsRef[$];if(T.state.hasMount&&J&&J.children.length){var re=J.children[0].getElementsByTagName("img")||[];if(re.length>0){var ce=re[0];if(!ce.complete){var C=function ae(){T.forceUpdate(),ce.removeEventListener("load",ae)};ce.addEventListener("load",C)}}var V=re[0]||J.children[0],ie=V.clientHeight;return ie>0?ie:null}return null});var j={initialized:!1,previousItem:ne.selectedItem,selectedItem:ne.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:ne.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return T.animationHandler=typeof ne.animationHandler=="function"&&ne.animationHandler||ne.animationHandler==="fade"&&y.fadeAnimationHandler||y.slideAnimationHandler,T.state=R(R({},j),T.animationHandler(ne,j)),T}return F(ee,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(T,j){!T.children&&this.props.children&&!this.state.initialized&&this.setupCarousel(),!T.autoFocus&&this.props.autoFocus&&this.forceFocus(),j.swiping&&!this.state.swiping&&this.setState(R({},this.props.stopSwipingHandler(this.props,this.state))),(T.selectedItem!==this.props.selectedItem||T.centerMode!==this.props.centerMode)&&(this.updateSizes(),this.moveTo(this.props.selectedItem)),T.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var T=this;this.bindEvents(),this.state.autoPlay&&a.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},function(){var j=T.getInitialImage();j&&!j.complete?j.addEventListener("load",T.setMountState):T.setMountState()})}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var T=this.carouselWrapperRef;this.props.stopOnHover&&T&&(T.addEventListener("mouseenter",this.stopOnHover),T.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var T=this.carouselWrapperRef;this.props.stopOnHover&&T&&(T.removeEventListener("mouseenter",this.stopOnHover),T.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,f.default)().addEventListener("resize",this.updateSizes),(0,f.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,c.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,f.default)().removeEventListener("resize",this.updateSizes),(0,f.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var T=this.getInitialImage();T&&T.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,c.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var T;(T=this.carouselWrapperRef)===null||T===void 0||T.focus()}},{key:"renderItems",value:function(T){var j=this;return this.props.children?a.Children.map(this.props.children,function($,J){var re=J===j.state.selectedItem,ce=J===j.state.previousItem,C=re&&j.state.selectedStyle||ce&&j.state.prevStyle||j.state.slideStyle||{};j.props.centerMode&&j.props.axis==="horizontal"&&(C=R(R({},C),{},{minWidth:j.props.centerSlidePercentage+"%"})),j.state.swiping&&j.state.swipeMovementStarted&&(C=R(R({},C),{},{pointerEvents:"none"}));var V={ref:function(ae){return j.setItemsRef(ae,J)},key:"itemKey"+J+(T?"clone":""),className:u.default.ITEM(!0,J===j.state.selectedItem,J===j.state.previousItem),onClick:j.handleClickItem.bind(j,J,$),style:C};return a.default.createElement("li",V,j.props.renderItem($,{isSelected:J===j.state.selectedItem,isPrevious:J===j.state.previousItem}))}):[]}},{key:"renderControls",value:function(){var T=this,j=this.props,$=j.showIndicators,J=j.labels,re=j.renderIndicator,ce=j.children;return $?a.default.createElement("ul",{className:"control-dots"},a.Children.map(ce,function(C,V){return re&&re(T.changeItem(V),V===T.state.selectedItem,V,J.item)})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?a.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,a.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return!this.props.showThumbs||!this.props.children||a.Children.count(this.props.children)===0?null:a.default.createElement(o.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children))}},{key:"render",value:function(){var T=this;if(!this.props.children||a.Children.count(this.props.children)===0)return null;var j=this.props.swipeable&&a.Children.count(this.props.children)>1,$=this.props.axis==="horizontal",J=this.props.showArrows&&a.Children.count(this.props.children)>1,re=J&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,ce=J&&(this.state.selectedItem<a.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,C=this.renderItems(!0),V=C.shift(),ie=C.pop(),ae={className:u.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},se={};if($){if(ae.onSwipeLeft=this.onSwipeForward,ae.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var he=this.getVariableItemHeight(this.state.selectedItem);se.height=he||"auto"}}else ae.onSwipeUp=this.props.verticalSwipe==="natural"?this.onSwipeBackwards:this.onSwipeForward,ae.onSwipeDown=this.props.verticalSwipe==="natural"?this.onSwipeForward:this.onSwipeBackwards,ae.style=R(R({},ae.style),{},{height:this.state.itemSize}),se.height=this.state.itemSize;return a.default.createElement("div",{"aria-label":this.props.ariaLabel,className:u.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},a.default.createElement("div",{className:u.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,re,this.props.labels.leftArrow),a.default.createElement("div",{className:u.default.WRAPPER(!0,this.props.axis),style:se},j?a.default.createElement(l.default,w({tagName:"ul",innerRef:this.setListRef},ae,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&ie,this.renderItems(),this.props.infiniteLoop&&V):a.default.createElement("ul",{className:u.default.SLIDER(!0,this.state.swiping),ref:function(Ue){return T.setListRef(Ue)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&ie,this.renderItems(),this.props.infiniteLoop&&V)),this.props.renderArrowNext(this.onClickNext,ce,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}]),ee})(a.default.Component);return ql.default=le,X(le,"displayName","Carousel"),X(le,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:p.noop,onClickThumb:p.noop,onChange:p.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(N,ee,ne){return a.default.createElement("button",{type:"button","aria-label":ne,className:u.default.ARROW_PREV(!ee),onClick:N})},renderArrowNext:function(N,ee,ne){return a.default.createElement("button",{type:"button","aria-label":ne,className:u.default.ARROW_NEXT(!ee),onClick:N})},renderIndicator:function(N,ee,ne,T){return a.default.createElement("li",{className:u.default.DOT(ee),onClick:N,onKeyDown:N,value:ne,key:ne,role:"button",tabIndex:0,"aria-label":"".concat(T," ").concat(ne+1)})},renderItem:function(N){return N},renderThumbs:function(N){var ee=a.Children.map(N,function(ne){var T=ne;if(ne.type!=="img"&&(T=a.Children.toArray(ne.props.children).find(function(j){return j.type==="img"})),!!T)return T});return ee.filter(function(ne){return ne}).length===0?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):ee},statusFormatter:p.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:y.slideSwipeAnimationHandler,stopSwipingHandler:y.slideStopSwipingHandler}),ql}var Qm={},Zm;function j3(){return Zm||(Zm=1),Qm}var Km;function z3(){return Km||(Km=1,(function(a){Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"Carousel",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(a,"CarouselProps",{enumerable:!0,get:function(){return u.CarouselProps}}),Object.defineProperty(a,"Thumbs",{enumerable:!0,get:function(){return o.default}});var l=c(O3()),u=j3(),o=c(Hv());function c(f){return f&&f.__esModule?f:{default:f}}})($c)),$c}var A3=z3();const M3=O5`
  /* Position control dots inside the image like Instagram */
  .carousel .control-dots {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 0 0 0 0;
  }
  .carousel .control-dots .dot {
    box-shadow: none;
    background: rgba(255, 255, 255, 0.85);
    opacity: 1;
  }
  .carousel .control-next.control-arrow, .carousel .control-prev.control-arrow {
    display: none; /* hide arrows for IG-like swipe-only feel */
  }
  .carousel .thumbs-wrapper { display: none; }
`,D3=_.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(2, 6, 23, 0.08);
`,N3=_.div`
  position: relative;
  aspect-ratio: 1 / 1; /* Instagram square */
  background: #f1f5f9;
`,L3=_.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,k3=_.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  color: #0f172a;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(6px);
`,U3=_.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`,B3=_.div`
  display: flex;
  gap: 12px;
`,Do=_.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background: transparent;
  color: #0f172a;
  cursor: pointer;
  transition: transform 120ms ease, background 120ms ease;
  &:hover { background: rgba(15, 23, 42, 0.06); }
  &:active { transform: scale(0.98); }
`,H3=_.div`
  padding: 0 12px 12px 12px;
`,$3=_.div`
  font-weight: 600;
  font-size: 14px;
  color: #0f172a;
`,q3=_.p`
  margin: 6px 0 4px;
  font-size: 14px;
  line-height: 1.5;
  color: #0f172a;
`,Y3=_.time`
  display: block;
  font-size: 12px;
  color: #64748b;
`;function G3({data:a,likedDefault:l=!1,savedDefault:u=!1,likeCountDefault:o=0,onLikeChange:c,onBookmarkChange:f,onShare:p}){const{title:y="Infographic Title",description:v="",carouselImgSrc:m=[]}=a||{},[S,x]=b.useState(0),[w,A]=b.useState(l),[R,q]=b.useState(u),[Z,F]=b.useState(o),M=w?"Unlike post":"Like post",H=R?"Remove bookmark":"Bookmark",G=()=>{const k=!w;A(k),F(X=>k?X+1:Math.max(0,X-1)),c&&c(k)},L=()=>{const k=!R;q(k),f&&f(k)},z=b.useMemo(()=>({title:y,text:`${y}`,url:typeof window<"u"?window.location.href:""}),[y]),K=async()=>{try{navigator.share?await navigator.share(z):navigator.clipboard&&(await navigator.clipboard.writeText(z.url),alert("Link copied to clipboard")),p&&p(z)}catch(k){console.error("Share failed:",k)}};return!m||m.length===0?null:h.jsxs(D3,{role:"article","aria-label":`${y} – Instagram multi-image post`,children:[h.jsx(M3,{}),h.jsxs(N3,{children:[h.jsx(A3.Carousel,{showThumbs:!1,showIndicators:!0,showStatus:!1,showArrows:!1,infiniteLoop:!1,autoPlay:!1,swipeable:!0,emulateTouch:!0,transitionTime:350,selectedItem:S,onChange:x,dynamicHeight:!1,children:m.map((k,X)=>h.jsx("div",{children:h.jsx(L3,{src:k,alt:`${y} — ${X+1}`})},X))}),h.jsxs(k3,{children:[S+1,"/",m.length]})]}),h.jsxs(U3,{children:[h.jsxs(B3,{children:[h.jsx(Do,{onClick:G,"aria-label":M,title:M,children:w?h.jsx(Rv,{size:22}):h.jsx(_v,{size:22})}),h.jsx(Do,{"aria-label":"Comment",title:"Comment",children:h.jsx(Ov,{size:20})}),h.jsx(Do,{onClick:K,"aria-label":"Share",title:"Share",children:h.jsx(Av,{size:20})})]}),h.jsx(Do,{onClick:L,"aria-label":H,title:H,children:R?h.jsx(Gf,{size:20}):h.jsx(Xf,{size:20})})]}),h.jsxs(H3,{children:[h.jsxs($3,{children:[Z," likes"]}),v&&h.jsxs(q3,{children:[h.jsx("strong",{children:y})," ",v]}),h.jsx(Y3,{dateTime:new Date().toISOString(),children:"Just now"})]})]})}const X3="modulepreload",V3=function(a){return"/instalearn/"+a},Pm={},un=function(l,u,o){let c=Promise.resolve();if(u&&u.length>0){let v=function(m){return Promise.all(m.map(S=>Promise.resolve(S).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const p=document.querySelector("meta[property=csp-nonce]"),y=p?.nonce||p?.getAttribute("nonce");c=v(u.map(m=>{if(m=V3(m),m in Pm)return;Pm[m]=!0;const S=m.endsWith(".css"),x=S?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${x}`))return;const w=document.createElement("link");if(w.rel=S?"stylesheet":X3,S||(w.as="script"),w.crossOrigin="",w.href=m,y&&w.setAttribute("nonce",y),document.head.appendChild(w),S)return new Promise((A,R)=>{w.addEventListener("load",A),w.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${m}`)))})}))}function f(p){const y=new Event("vite:preloadError",{cancelable:!0});if(y.payload=p,window.dispatchEvent(y),!y.defaultPrevented)throw p}return c.then(p=>{for(const y of p||[])y.status==="rejected"&&f(y.reason);return l().catch(f)})},qv=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,Jm=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,Fm=/\.(m3u8)($|\?)/i,Q3=/\.(mpd)($|\?)/i,Z3=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,K3=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,P3=/vimeo\.com\/(?!progressive_redirect).+/,J3=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,F3=/open\.spotify\.com\/(\w+)\/(\w+)/i,W3=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+|(videos?\/|\?video=)\d+)($|\?)/,I3=/tiktok\.com\/(?:player\/v1\/|share\/video\/|@[^/]+\/video\/)([0-9]+)/,Il=(a,l)=>{if(Array.isArray(a)){for(const u of a)if(typeof u=="string"&&Il(u,l)||Il(u.src,l))return!0;return!1}return l(a)},on={html:a=>Il(a,l=>qv.test(l)||Jm.test(l)),hls:a=>Il(a,l=>Fm.test(l)),dash:a=>Il(a,l=>Q3.test(l)),mux:a=>Z3.test(a),youtube:a=>K3.test(a),vimeo:a=>P3.test(a)&&!Jm.test(a)&&!Fm.test(a),wistia:a=>J3.test(a),spotify:a=>F3.test(a),twitch:a=>W3.test(a),tiktok:a=>I3.test(a)},e4=Ce.forwardRef((a,l)=>{const u=qv.test(`${a.src}`)?"audio":"video";return Ce.createElement(u,{...a,ref:l},a.children)});var t4=e4;const n4=[{key:"hls",name:"hls.js",canPlay:on.hls,canEnablePIP:()=>!0,player:b.lazy(()=>un(()=>import("./react-DxvJl8kS.js"),__vite__mapDeps([0,1,2])))},{key:"dash",name:"dash.js",canPlay:on.dash,canEnablePIP:()=>!0,player:b.lazy(()=>un(()=>import("./react-BrBFAzQp.js"),__vite__mapDeps([3,1])))},{key:"mux",name:"Mux",canPlay:on.mux,canEnablePIP:()=>!0,player:b.lazy(()=>un(()=>import("./index-BrV1crBo.js"),__vite__mapDeps([4,2,1])))},{key:"youtube",name:"YouTube",canPlay:on.youtube,player:b.lazy(()=>un(()=>import("./react-CpSUeTq3.js"),[]))},{key:"vimeo",name:"Vimeo",canPlay:on.vimeo,player:b.lazy(()=>un(()=>import("./react-DoXyaMIl.js"),[]))},{key:"wistia",name:"Wistia",canPlay:on.wistia,canEnablePIP:()=>!0,player:b.lazy(()=>un(()=>import("./react-CWLwZnbi.js"),[]))},{key:"spotify",name:"Spotify",canPlay:on.spotify,canEnablePIP:()=>!1,player:b.lazy(()=>un(()=>import("./react-BcBGjQuc.js"),[]))},{key:"twitch",name:"Twitch",canPlay:on.twitch,canEnablePIP:()=>!1,player:b.lazy(()=>un(()=>import("./react-Cu2UqPEy.js"),[]))},{key:"tiktok",name:"TikTok",canPlay:on.tiktok,canEnablePIP:()=>!1,player:b.lazy(()=>un(()=>import("./react-DQVfK0XS.js"),[]))},{key:"html",name:"html",canPlay:on.html,canEnablePIP:()=>!0,player:t4}];var Cf=n4;const a4={width:"320px",height:"180px",volume:1,playbackRate:1,previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}"},Yv=Ce.forwardRef((a,l)=>{const{playing:u,pip:o}=a,c=a.activePlayer,f=b.useRef(null),p=b.useRef(!0);b.useEffect(()=>{var x,w;f.current&&(f.current.paused&&u===!0&&f.current.play(),!f.current.paused&&u===!1&&f.current.pause(),f.current.playbackRate=(x=a.playbackRate)!=null?x:1,f.current.volume=(w=a.volume)!=null?w:1)}),b.useEffect(()=>{var x,w,A,R,q;if(!(!f.current||!globalThis.document)){if(o&&!document.pictureInPictureElement)try{(w=(x=f.current).requestPictureInPicture)==null||w.call(x)}catch{}if(!o&&document.pictureInPictureElement)try{(R=(A=f.current).exitPictureInPicture)==null||R.call(A),(q=document.exitPictureInPicture)==null||q.call(document)}catch{}}},[o]);const y=x=>{var w,A;p.current=!0,(w=a.onReady)==null||w.call(a),(A=a.onLoadStart)==null||A.call(a,x)},v=x=>{var w,A;p.current&&(p.current=!1,(w=a.onStart)==null||w.call(a,x)),(A=a.onPlay)==null||A.call(a,x)};if(!c)return null;const m={},S=["onReady","onStart"];for(const x in a)x.startsWith("on")&&!S.includes(x)&&(m[x]=a[x]);return Ce.createElement(c,{...m,style:a.style,className:a.className,slot:a.slot,ref:b.useCallback(x=>{f.current=x,typeof l=="function"?l(x):l!==null&&(l.current=x)},[l]),src:a.src,crossOrigin:a.crossOrigin,preload:a.preload,controls:a.controls,muted:a.muted,autoPlay:a.autoPlay,loop:a.loop,playsInline:a.playsInline,config:a.config,onLoadStart:y,onPlay:v},a.children)});Yv.displayName="Player";var i4=Yv;const l4=b.lazy(()=>un(()=>import("./Preview-C-PVGod3.js"),[])),Kl=[],r4=(a,l)=>{const u=c=>{for(const f of[...Kl,...a])if(c&&f.canPlay(c))return f;return l||null},o=Ce.forwardRef((c,f)=>{const p={...a4,...c},{src:y,slot:v,className:m,style:S,width:x,height:w,fallback:A,wrapper:R}=p,[q,Z]=b.useState(!!p.light);b.useEffect(()=>{p.light?Z(!0):Z(!1)},[p.light]);const F=z=>{var K;Z(!1),(K=p.onClickPreview)==null||K.call(p,z)},M=z=>{if(!z)return null;const{light:K,playIcon:k,previewTabIndex:X,oEmbedUrl:le,previewAriaLabel:P}=p;return Ce.createElement(l4,{src:z,light:K,playIcon:k,previewTabIndex:X,previewAriaLabel:P,oEmbedUrl:le,onClickPreview:F})},H=z=>{var K,k;const X=u(z);if(!X)return null;const{style:le,width:P,height:N,wrapper:ee}=p,ne=(K=p.config)==null?void 0:K[X.key];return Ce.createElement(i4,{...p,ref:f,activePlayer:(k=X.player)!=null?k:X,slot:ee?void 0:v,className:ee?void 0:m,style:ee?{display:"block",width:"100%",height:"100%"}:{display:"block",width:P,height:N,...le},config:ne})},G=R??Wm,L=A===!1?Wm:b.Suspense;return Ce.createElement(G,{slot:v,className:m,style:{width:x,height:w,...S}},Ce.createElement(L,{fallback:A},q?M(y):H(y)))});return o.displayName="ReactPlayer",o.addCustomPlayer=c=>{Kl.push(c)},o.removeCustomPlayers=()=>{Kl.length=0},o.canPlay=c=>{if(c){for(const f of[...Kl,...a])if(f.canPlay(c))return!0}return!1},o.canEnablePIP=c=>{var f;if(c){for(const p of[...Kl,...a])if(p.canPlay(c)&&((f=p.canEnablePIP)!=null&&f.call(p)))return!0}return!1},o},Wm=({children:a})=>a,o4=Cf[Cf.length-1];var u4=r4(Cf,o4);const s4=_.article`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(180deg, #dff6ff 0%, #bce0ff 100%);
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.12);
`,c4=_.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background: #000;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`,f4=_.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 18px 20px;
  color: #0f172a;
`,d4=_.div`
  flex: 1 1 auto;
`,h4=_.h3`
  margin: 0 0 6px;
  font-size: clamp(18px, 2.2vw, 22px);
  line-height: 1.2;
`,p4=_.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #334155;
`,m4=_.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,Im=_.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(6px);
  cursor: pointer;
  transition: transform 140ms ease;

  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;function v4({data:a,likedDefault:l=!1,savedDefault:u=!1,onLikeChange:o,onBookmarkChange:c}){const{title:f,description:p,vedioClipSrc:y}=a||{},[v,m]=b.useState(l),[S,x]=b.useState(u),w=()=>{const R=!v;m(R),o&&o(R)},A=()=>{const R=!S;x(R),c&&c(R)};return y?h.jsxs(s4,{children:[h.jsx(c4,{children:h.jsx(u4,{className:"react-player",url:y,width:"100%",height:"100%",controls:!0,playing:!0,muted:!0,loop:!0})}),h.jsxs(f4,{children:[h.jsxs(d4,{children:[h.jsx(h4,{children:f}),p&&h.jsx(p4,{children:p})]}),h.jsxs(m4,{children:[h.jsx(Im,{onClick:w,"aria-label":v?"Unlike video":"Like video",title:v?"Unlike":"Like",children:v?h.jsx(k5,{size:20}):h.jsx(U5,{size:20})}),h.jsx(Im,{onClick:A,"aria-label":S?"Remove bookmark":"Bookmark video",title:S?"Remove bookmark":"Bookmark",children:S?h.jsx(Gf,{size:18}):h.jsx(Xf,{size:18})})]})]})]}):null}const g4=[{id:1,name:"Sense of Collective Identity",img:jo.CollectiveIdentity||"https://images.unsplash.com/photo-1506765515384-028b60a970df?w=400&h=400&fit=crop",hasNew:!0,slides:[n3.test,"https://images.unsplash.com/photo-1554189097-ffe88e998a2b?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602524811998-8b90d1d03663?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1505066836043-7d9b15a1595d?w=800&h=1400&fit=crop"]},{id:2,name:"Understanding Diversity",img:jo.Diversity||"https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1581091226825-c6a76aa2f4c1?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&h=1400&fit=crop"]},{id:3,name:"Nationalism in India",img:jo.Nationalism||"https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1524310393100-34cb9cd27f1e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1533199829561-72f88a8f0c56?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602451126518-9b36f1b23543?w=800&h=1400&fit=crop"]},{id:4,name:"Globalisation and the Indian Economy",img:jo.Globalisation||"https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1565372918675-bacb79cdd3a5?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&h=1400&fit=crop"]}];function y4({isOpen:a,activeIndex:l,setActiveIndex:u,total:o,onClose:c,duration:f=3e3}){const p=b.useRef(Date.now()),y=b.useRef(),v=b.useRef(0),m=b.useCallback(()=>{const x=Date.now()-p.current,w=Math.min(1,x/f);v.current=w,w>=1?l<o-1?u(A=>A+1):c():y.current=requestAnimationFrame(m)},[l,o,f,c,u]);return b.useEffect(()=>{if(a)return p.current=Date.now(),y.current=requestAnimationFrame(m),()=>cancelAnimationFrame(y.current)},[a,l,m]),{resetTimer:b.useCallback(()=>{p.current=Date.now()},[]),getProgressValue:()=>v.current}}const b4=_.div``,x4=_.div`
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
`,S4=_.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 16px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,w4=_.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border: 0;
  background: transparent;
  cursor: pointer;
`,E4=_.div`
  padding: 2px;
  border-radius: 999px;
  ${a=>a.$hasNew?ma`
          background: linear-gradient(
            45deg,
            #f09433 0%,
            #e6683c 25%,
            #dc2743 50%,
            #cc2366 75%,
            #bc1888 100%
          );
        `:ma`
          background: transparent;
        `};
`,C4=_.div`
  background: #fff;
  padding: 3px;
  border-radius: 999px;
`,T4=_.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 999px;
  user-drag: none;
  -webkit-user-drag: none;
`,R4=_.span`
  font-size: 12px;
  color: #1f2937;
  max-width: 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,_4=_.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &.hidden { opacity: 0; pointer-events: none; }
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(12px) saturate(120%);
  -webkit-backdrop-filter: blur(12px) saturate(120%);
  
  @media (max-width: 768px) {
    background: rgba(0, 0, 0, 0.98);
  }
`,O4=_.div`
  --gutter: clamp(16px, 4vw, 32px);
  position: relative;
  width: 100%;
  height: 90vh;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  padding: 0 var(--gutter);
  
  @media (max-width: 768px) {
    height: 100vh;
    max-width: 100%;
    padding: 0;
    --gutter: 0px;
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    height: 85vh;
    max-width: 450px;
  }
`,j4=_.div`
  position: relative;
  flex: 1;
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  max-height: 1000%;
  aspect-ratio: 9 / 16;
  border-radius: 16px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    border-radius: 0px;
    border: none;
    box-shadow: none;
    aspect-ratio: auto;
  }
  
  @media (min-width: 769px) {
    transform: scale(1);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: scale(1.01);
    }
  }
`,z4=_.div`
  position: absolute;
  top: 12px;
  left: 0px;
  right: 0px;
  z-index: 20;
  display: flex;
  gap: 4px;
  
  @media (max-width: 768px) {
    top: 0px;
    left: 5px;
    right: 5px;
    gap: 3px;
  }
`,A4=_.div`
  height: 3px;
  flex: 1;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    height: 2.5px;
  }
`,M4=_.div`
  height: 100%;
  background: linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.95) 100%);
  transition: width 100ms linear;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
`,D4=_.div`
  position: absolute;
  top: 24px;
  left: 0px;
  right: 0px;
  z-index: 15;
  display: flex;
  align-items: center;
  gap: 12px;

  background: rgba(10, 10, 10, 0.65);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  color: #fff;
  border-radius: 14px;
  padding: 10px 12px;

  border: 1px solid rgba(255,255,255,0.18);
  box-shadow: 
    0 8px 32px rgba(0,0,0,0.4),
    0 0 0 1px rgba(255,255,255,0.05) inset;
  
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  
  @media (max-width: 768px) {
    top: 0px;
    left: 1px;
    right: 1px;
    padding: 8px 10px;
    gap: 10px;
    border-radius: 12px;
  }
  
  @media (min-width: 769px) {
    &:hover {
      background: rgba(15, 15, 15, 0.75);
      box-shadow: 
        0 12px 40px rgba(0,0,0,0.5),
        0 0 0 1px rgba(255,255,255,0.08) inset;
    }
  }
`,N4=_.img`
  width: 38px;
  height: 38px;
  border-radius: 999px;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
    border-width: 1.5px;
  }
`,L4=_.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
`,k4=_.div`
  font-weight: 700;
  font-size: clamp(13px, 2.2vw, 15px);
  line-height: 1.2;
  letter-spacing: -0.01em;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,U4=_.div`
  font-size: clamp(11px, 1.8vw, 13px);
  opacity: 0.85;
  line-height: 1.2;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,B4=_.button`
  margin-left: auto;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  color: #fff;
  font-size: 22px;
  border-radius: 999px;
  border: 0;
  background: rgba(255, 255, 255, 0.08);
  cursor: pointer;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  
  &:hover { 
    background: rgba(255, 255, 255, 0.18);
    transform: scale(1.05);
  }
  &:active { 
    transform: scale(0.95);
    background: rgba(255, 255, 255, 0.12);
  }
  
  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
    font-size: 20px;
  }
`,H4=_.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${a=>a.$active?1:0};
  transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -webkit-user-select: none;

  @media (max-width: 768px) {
    object-fit: cover;
  }
  
  @media (min-width: 769px) {
    object-fit: contain;
  }
`,e1=_.div`
  position: absolute;
  top: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 10;
  touch-action: manipulation;
  
  ${a=>a.$side==="left"?ma`
          left: 0; 
          width: 33.3333%;
        `:ma`
          right: 0; 
          width: 66.6666%;
        `};
  
  /* Visual feedback on desktop */
  @media (min-width: 769px) {
    transition: background 0.2s ease;
    
    &:active {
      background: ${a=>a.$side==="left"?"linear-gradient(90deg, rgba(255,255,255,0.05) 0%, transparent 100%)":"linear-gradient(-90deg, rgba(255,255,255,0.05) 0%, transparent 100%)"};
    }
  }
`;function $4(a){return Oe({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1.47978 1.4797C1.30227 1.65721 1.28614 1.93498 1.43137 2.13072L1.47978 2.1868L4.1695 4.87652C2.88817 5.77616 1.93052 7.11985 1.53259 8.70952C1.46554 8.97738 1.62834 9.24892 1.89621 9.31598C2.16409 9.38298 2.4356 9.22025 2.50266 8.95232C2.85564 7.54225 3.72742 6.35956 4.88944 5.59626L6.09586 6.80278C5.62419 7.28378 5.33334 7.94278 5.33334 8.66965C5.33334 10.1424 6.52724 11.3363 8 11.3363C8.72694 11.3363 9.38587 11.0454 9.86694 10.5738L13.8131 14.5201C14.0084 14.7154 14.3249 14.7154 14.5202 14.5201C14.6977 14.3426 14.7139 14.0649 14.5686 13.8691L14.5202 13.813L10.4445 9.73692L10.4453 9.73592L9.64527 8.93732L7.732 7.02445L7.73334 7.02392L5.81252 5.10513L5.81334 5.10392L5.05782 4.35024L2.18689 1.4797C1.99163 1.28444 1.67504 1.28444 1.47978 1.4797ZM6.80274 7.51025L9.15947 9.86698C8.85947 10.1575 8.4506 10.3363 8 10.3363C7.07954 10.3363 6.33334 9.59012 6.33334 8.66965C6.33334 8.21905 6.51216 7.81018 6.80274 7.51025ZM8 3.66658C7.33314 3.66658 6.68607 3.7653 6.07406 3.94992L6.89874 4.77404C7.25594 4.70346 7.62427 4.66658 8 4.66658C10.6154 4.66658 12.8733 6.45342 13.4981 8.95538C13.565 9.22325 13.8364 9.38618 14.1043 9.31932C14.3723 9.25238 14.5352 8.98098 14.4683 8.71305C13.7329 5.7684 11.077 3.66658 8 3.66658ZM8.1298 6.0061L10.664 8.53992C10.5961 7.16865 9.49814 6.07168 8.1298 6.0061Z"},child:[]}]})(a)}function q4({currentItem:a,isOpen:l,slideIndex:u,setSlideIndex:o,onClose:c,duration:f=3e3}){const p=a?.slides?.length||0,{resetTimer:y,getProgressValue:v}=y4({isOpen:l,activeIndex:u,setActiveIndex:o,total:p,onClose:c,duration:f}),m=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[,S]=b.useState(0);b.useEffect(()=>{if(!l||m)return;let R;const q=()=>{S(Z=>Z+1),R=requestAnimationFrame(q)};return R=requestAnimationFrame(q),()=>cancelAnimationFrame(R)},[l,m]);const x=b.useCallback(()=>{a&&(u<p-1?(o(R=>R+1),y()):c())},[a,u,p,y,c,o]),w=b.useCallback(()=>{a&&(u>0?(o(R=>R-1),y()):c())},[a,u,y,c,o]);b.useEffect(()=>{const R=q=>{l&&(q.key==="Escape"&&c(),q.key==="ArrowRight"&&x(),q.key==="ArrowLeft"&&w())};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[l,x,w,c]),b.useEffect(()=>(l?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[l]);const A=R=>R<u?1:R>u?0:v();return!l||!a?null:h.jsx(_4,{onClick:c,"aria-label":"Story overlay",children:h.jsx(O4,{onClick:R=>R.stopPropagation(),children:h.jsxs(j4,{children:[h.jsx(z4,{"aria-label":"Story progress",children:a.slides.map((R,q)=>h.jsx(A4,{"aria-label":`Progress track ${q+1}`,children:h.jsx(M4,{style:{width:`${A(q)*100}%`}})},q))}),h.jsxs(D4,{children:[h.jsx(N4,{src:a.img,alt:a.name}),h.jsxs(L4,{children:[h.jsx(k4,{children:a.name}),h.jsx(U4,{children:"Chapter highlight"})]}),h.jsx(B4,{"aria-label":"Close story",onClick:c,title:"Close",children:h.jsx($4,{})})]}),a.slides.map((R,q)=>h.jsx(H4,{src:R,alt:`Slide ${q+1}`,$active:q===u,draggable:!1},q)),h.jsx(e1,{$side:"left",onClick:w,"aria-label":"Previous slide"}),h.jsx(e1,{$side:"right",onClick:x,"aria-label":"Next slide"})]})})})}function Y4({items:a,duration:l=3e3,onOpen:u,onClose:o,className:c}){const f=b.useRef(null),p=b.useRef(!1),y=b.useRef(0),v=b.useRef(0),[m,S]=b.useState(a||[]),[x,w]=b.useState(null),[A,R]=b.useState(0),q=m.find(z=>z.id===x)||null,Z=!!x,F=z=>{R(0),w(z),S(K=>K.map(k=>k.id===z?{...k,hasNew:!1}:k)),u&&u(z)},M=()=>{w(null),o&&o()},H=z=>{p.current=!0,y.current=z.clientX,v.current=f.current?.scrollLeft||0,z.target.setPointerCapture?.(z.pointerId)},G=z=>{if(!p.current||!f.current)return;const K=z.clientX-y.current;f.current.scrollLeft=v.current-K},L=()=>{p.current=!1};return h.jsxs(b4,{className:c,children:[h.jsx(x4,{children:h.jsx(S4,{ref:f,onPointerDown:H,onPointerMove:G,onPointerUp:L,onPointerLeave:L,"aria-label":"Stories scroller",children:m.map(z=>h.jsxs(w4,{onClick:()=>F(z.id),"aria-label":`Open story ${z.name}`,title:z.name,children:[h.jsx(E4,{$hasNew:z.hasNew,children:h.jsx(C4,{children:h.jsx(T4,{src:z.img,alt:z.name,draggable:!1})})}),h.jsx(R4,{children:z.name})]},z.id))})}),h.jsx(q4,{currentItem:q,isOpen:Z,slideIndex:A,setSlideIndex:R,onClose:M,duration:l})]})}const G4=[{id:1,type:"infografic",title:"Sense of Collective Identity - Overview",description:"An overview of how shared history, culture, and values shape collective identity in society.",imgSrc:An.Slide1},{id:2,type:"carousel",title:"Understanding Collective Identity",description:"Exploring the roots and importance of collective identity in social cohesion.",carouselImgSrc:[An.Slide2,An.Slide3,An.Slide4,An.Slide5,An.Slide6]},{id:3,type:"carousel",title:"Symbols and Shared Culture",description:"How flags, festivals, and traditions represent unity and belonging.",carouselImgSrc:[An.Slide7,An.Slide8,An.Slide9]},{id:5,type:"vedioClip",title:"Collective Identity in Action",description:"A short video summarizing real-world examples of collective identity shaping societies.",vedioClipSrc:t3.videoClip1}],X4=_.div`
  min-height: 100vh;
  place-items: center;
  padding: 15px;
  background: radial-gradient(
      40% 60% at 20% 10%,
      rgba(99, 102, 241, 0.18) 0%,
      transparent 60%
    ),
    radial-gradient(
      40% 60% at 80% 0%,
      rgba(56, 189, 248, 0.18) 0%,
      transparent 60%
    ),
    #f8fafc;
`;function V4(){return b.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]),h.jsxs(h.Fragment,{children:[h.jsx(Y4,{items:g4,duration:3e3,onOpen:a=>console.log("opened:",a),onClose:()=>console.log("closed")}),h.jsx(X4,{children:h.jsx("div",{className:"d-flex gap-3 flex-column align-items-center mt-3",children:G4.map(a=>h.jsx("div",{style:{width:"100%"},children:a.type==="infografic"?h.jsx(S3,{title:a.title,description:a.description,imgSrc:a.imgSrc,badge:a.badge}):a.type==="carousel"?h.jsx(G3,{data:a}):a.type==="vedioClip"?h.jsx(v4,{data:a}):null},a.id))})})]})}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Z4=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,u,o)=>o?o.toUpperCase():u.toLowerCase()),t1=a=>{const l=Z4(a);return l.charAt(0).toUpperCase()+l.slice(1)},Gv=(...a)=>a.filter((l,u,o)=>!!l&&l.trim()!==""&&o.indexOf(l)===u).join(" ").trim(),K4=a=>{for(const l in a)if(l.startsWith("aria-")||l==="role"||l==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var P4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=b.forwardRef(({color:a="currentColor",size:l=24,strokeWidth:u=2,absoluteStrokeWidth:o,className:c="",children:f,iconNode:p,...y},v)=>b.createElement("svg",{ref:v,...P4,width:l,height:l,stroke:a,strokeWidth:o?Number(u)*24/Number(l):u,className:Gv("lucide",c),...!f&&!K4(y)&&{"aria-hidden":"true"},...y},[...p.map(([m,S])=>b.createElement(m,S)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=(a,l)=>{const u=b.forwardRef(({className:o,...c},f)=>b.createElement(J4,{ref:f,iconNode:l,className:Gv(`lucide-${Q4(t1(a))}`,`lucide-${a}`,o),...c}));return u.displayName=t1(a),u};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],W4=Lt("arrow-right",F4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],e6=Lt("atom",I4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Ua=Lt("book-open",t6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],a6=Lt("bookmark",n6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],l6=Lt("calculator",i6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],n1=Lt("circle-check-big",r6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],u6=Lt("code",o6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],a1=Lt("flask-conical",s6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],i1=Lt("graduation-cap",c6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],l1=Lt("globe",f6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],h6=Lt("grid-3x3",d6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],m6=Lt("languages",p6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],g6=Lt("sparkles",v6),y6=dn`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(30px, -30px) rotate(5deg); }
  50% { transform: translate(-20px, -50px) rotate(-5deg); }
  75% { transform: translate(40px, -20px) rotate(3deg); }
`,b6=dn`
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.4; }
`,x6=dn`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`,S6=_.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #8be3f5 0%, #9fefd0 50%, #b5f8b5 100%);
  font-family: "Inter", sans-serif;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 1rem;
  }
`,w6=_.span`
  &::after {
    content: "|";
    animation: ${x6} 1s infinite;
    margin-left: 4px;
  }
`,E6=_.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border-radius: 1.5rem;

  @media (min-width: 768px) {
    border-radius: 1rem;
  }
`,C6=_(E6)`
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.2);
  }
`,T6=_.div`
  text-align: center;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
    gap: 1.5rem;
  }
`,R6=_.h1`
  font-size: clamp(1.5rem, 6vw, 3rem);
  font-weight: 900;
  line-height: 1.2;
  padding: 0 1rem;
`,_6=_.span`
  background: green;
  -webkit-background-clip: text;
  color: transparent;
  font-style: italic;
  font-size: 30px;
`,Vc=_.div`
  position: absolute;
  border-radius: 50%;
  background: ${({$color:a})=>a};
  width: ${({$size:a})=>a}px;
  height: ${({$size:a})=>a}px;
  top: ${({$top:a})=>a};
  left: ${({$left:a})=>a};
  bottom: ${({$bottom:a})=>a};
  right: ${({$right:a})=>a};
  animation: ${b6} ${({$duration:a})=>a}s infinite ease-in-out;
  animation-delay: ${({$delay:a})=>a}s;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`,O6=_.div`
  position: absolute;
  opacity: 0.15;
  animation: ${y6} ${({$duration:a})=>a}s infinite ease-in-out;
  animation-delay: ${({$delay:a})=>a}s;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`,j6=_.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 100%;
`,z6=_.div`
  width: 100%;
  max-width: 600px;

  @media (min-width: 768px) {
    max-width: 800px;
  }
`,r1=_.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
  align-items: center;
`,o1=_.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 10rem;
  background: ${({$gradient:a})=>a};
  box-shadow: ${({$shadow:a})=>a};
  flex-shrink: 0;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`,u1=_.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e293b;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`,A6=_.p`
  font-size: 0.8rem;
  color: #64748b;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`,M6=_.select`
  width: 100%;
  padding: 0.875rem 2.5rem 0.875rem 0.875rem;
  border-radius: 0.75rem;
  border: 2px solid #e2e8f0;
  font-size: 1rem;
  font-weight: 500;
  color: #1e293b;
  background: white;
  appearance: none;
  transition: all 0.2s;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  @media (min-width: 768px) {
    padding: 1rem 2.5rem 1rem 1rem;
  }
`,s1=_.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,D6=_.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,N6=_.button`
  width: 100%;
  margin-top: 0.6rem;
  padding: 0.9rem 1rem;
  border: 0;
  border-radius: 0.875rem;
  font-weight: 700;
  font-size: 0.95rem;
  display: ${({$visible:a})=>a?"flex":"none"};
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;

  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  color: #fff;
  box-shadow: 0 8px 24px rgba(22, 163, 74, 0.35);

  transition: transform 120ms ease, box-shadow 200ms ease, filter 120ms ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 30px rgba(22, 163, 74, 0.45);
  }
  &:active {
    transform: translateY(0);
    box-shadow: 0 6px 18px rgba(22, 163, 74, 0.35);
    filter: saturate(0.95);
  }
  &:focus-visible {
    outline: 3px solid rgba(34, 197, 94, 0.35);
    outline-offset: 2px;
    border-radius: 1rem;
  }
`,L6=_.div`
  border-radius: 0.875rem;
  padding: 1.25rem;
  font-weight: 600;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  text-align: left;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  border: 2px solid transparent;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  ${({$selected:a})=>a?`
    background: linear-gradient(180deg, #74dec1 0%, #28A745 50%, #0E7C3F 100%);
    color: white;
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
    transform: scale(1.01);
  `:`
    background: white;
    color: #334155;
    border-color: #e2e8f0;

    &:hover {
      background: linear-gradient(180deg, #E8FBF0 0%, #CFF6DF 100%);
      color: black;
      border-color: transparent;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(240, 147, 251, 0.3);
    }
  `}

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`,k6=_.div`
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 2px solid lightgray;
  border-radius: 1rem;
  svg {
    margin-bottom: 1rem;
    opacity: 1.5;
  }

  p {
    font-size: 0.9rem;
    color: #64748b;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    padding: 3rem;
  }
`,U6=_.div`
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  width: 100%;
  font-size: 0.875rem;
  opacity: 0.95;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,c1=_.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`,f1=_.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;function B6(){const a=Af(),[l,u]=b.useState(""),[o,c]=b.useState(""),[f,p]=b.useState(""),[y,v]=b.useState(0),[m,S]=b.useState(!1),[x,w]=b.useState(0),A=["Achieve Excellence","Master Every Subject","Unlock Your Potential"];b.useEffect(()=>{const G=m?40:80,L=2e3,z=setTimeout(()=>{const K=A[y];if(!m&&x===K.length){setTimeout(()=>S(!0),L);return}if(m&&x===0){S(!1),v(k=>(k+1)%A.length);return}w(k=>k+(m?-1:1)),p(K.substring(0,x+(m?-1:1)))},G);return()=>clearTimeout(z)});const R={"Grade 9":{subjects:{English:"Ms. Priya Sharma",Mathematics:"Mr. Rajesh Kumar",Science:"Ms. Anjali Mehta","Social Studies":"Siddharth Sir",Hindi:"Ms. Kavita Reddy","Computer Science":"Mr. Arvind Nair"}},"Grade 10":{subjects:{English:"Ms. Sunita Verma",Mathematics:"Mr. Rohan Patel",Science:"Ms. Anjali Mehta","Social Studies":"Siddharth Sir",Hindi:"Ms. Kavita Reddy","Computer Science":"Mr. Arvind Nair"}},"Grade 11":{subjects:{English:"Ms. Priya Sharma",Physics:"Mr. Nitin Agarwal",Chemistry:"Ms. Sneha Kapoor",Biology:"Siddharth Sir",Mathematics:"Mr. Deepak Rao","Computer Science":"Mr. Arvind Nair"}},"Grade 12":{subjects:{English:"Ms. Sunita Verma",Physics:"Mr. Nitin Agarwal",Chemistry:"Ms. Sneha Kapoor",Biology:"Siddharth Sir",Mathematics:"Mr. Deepak Rao","Computer Science":"Mr. Arvind Nair"}}},q={English:Ua,Mathematics:l6,Science:a1,Physics:e6,Chemistry:a1,Biology:l1,"Social Studies":l1,Hindi:m6,"Computer Science":u6},Z=()=>{l&&o&&(a("/instalearn/teacher"),console.log(`Selected: ${l} - ${o}`))},F=G=>{c(G)},M=(G,L)=>{(G.key==="Enter"||G.key===" ")&&(G.preventDefault(),F(L))},H=l?Object.keys(R[l].subjects):[];return h.jsxs(S6,{children:[h.jsx(Vc,{$color:"rgba(255, 255, 255, 0.15)",$size:500,$top:"-10%",$right:"-5%",$duration:8,$delay:0}),h.jsx(Vc,{$color:"rgba(255, 255, 255, 0.1)",$size:600,$bottom:"-15%",$left:"-5%",$duration:10,$delay:3}),h.jsx(Vc,{$color:"rgba(255, 255, 255, 0.12)",$size:400,$top:"40%",$left:"50%",$duration:12,$delay:6}),[...Array(8)].map((G,L)=>h.jsx(O6,{$duration:8+L*2,$delay:L*.8,style:{left:`${10+L*12}%`,top:`${15+L*11}%`},children:L%3===0?h.jsx(Ua,{size:32,color:"rgba(255,255,255,0.4)"}):L%3===1?h.jsx(i1,{size:32,color:"rgba(255,255,255,0.4)"}):h.jsx(g6,{size:32,color:"rgba(255,255,255,0.4)"})},L)),h.jsx(j6,{children:h.jsxs(z6,{children:[h.jsx(T6,{children:h.jsx(R6,{children:h.jsx(_6,{children:h.jsx(w6,{children:f})})})}),h.jsxs(C6,{style:{padding:"1.5rem",display:"flex",flexDirection:"column",gap:"2rem"},children:[h.jsxs(s1,{children:[h.jsxs(r1,{children:[h.jsx(o1,{$gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",$shadow:"0 8px 24px rgba(102,126,234,0.3)",children:h.jsx(i1,{size:20,color:"white"})}),h.jsx("div",{children:h.jsx(u1,{children:"Select Your Grade"})})]}),h.jsxs("div",{style:{position:"relative"},children:[h.jsxs(M6,{value:l,onChange:G=>{u(G.target.value),c("")},children:[h.jsx("option",{value:"",disabled:!0,children:"Select Grade"}),Object.keys(R).map(G=>h.jsx("option",{value:G,children:G},G))]}),l&&h.jsx(n1,{size:20,style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",color:"#10b981"}})]})]}),h.jsxs(s1,{children:[h.jsxs(r1,{children:[h.jsx(o1,{$gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",$shadow:"0 8px 24px rgba(240,147,251,0.3)",children:h.jsx(Ua,{size:20,color:"white"})}),h.jsxs("div",{children:[h.jsx(u1,{children:"Choose Your Subject"}),h.jsx(A6,{children:"Click a subject to reveal the teacher name."})]})]}),H.length===0?h.jsxs(k6,{children:[h.jsx(Ua,{size:40,color:"#94a3b8"}),h.jsx("p",{children:"Please select a grade to view available subjects"})]}):h.jsx(D6,{children:H.map(G=>{const L=R[l].subjects[G],z=o===G,K=q[G]||Ua;return h.jsxs(L6,{role:"button",tabIndex:0,"aria-pressed":z,$selected:z,onClick:()=>F(G),onKeyDown:k=>M(k,G),children:[h.jsxs(c1,{children:[h.jsx("span",{children:G}),h.jsx(f1,{children:h.jsx(K,{size:18})})]}),z&&h.jsxs(c1,{children:[h.jsx(U6,{children:L}),h.jsx(f1,{children:h.jsx(n1,{className:"mt-3",size:18})})]}),h.jsxs(N6,{$visible:z,onClick:Z,children:["Continue to Profile ",h.jsx(W4,{size:18})]})]},G)})})]})]})]})})]})}function H6(a){return Oe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"},child:[]}]})(a)}function No(a){return Oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(a)}function Mi(a){return Oe({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(a)}function Xv(a){return Oe({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(a)}function d1(a){return Oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(a)}function $6(a){return Oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(a)}function q6(a){return Oe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(a)}function h1(a){return Oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(a)}function Qc(a){return Oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(a)}function p1(a){return Oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"},child:[]}]})(a)}function Lo(a){return Oe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(a)}function Y6(a){return Oe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(a)}const G6=dn`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`,X6=dn`
  from { opacity: 0; }
  to { opacity: 1; }
`,It={bg:"#F6F8FB",card:"#FFFFFF",text:"#1F2937",subtext:"#6B7280",primary:"#4F46E5",primarySoft:"#EEF2FF",accent:"#10B981",border:"#E5E7EB",shadow:"0 10px 30px rgba(31, 41, 55, 0.08)"},V6=_.div`
  --bg: ${It.bg};
  --card: ${It.card};
  --text: ${It.text};
  --subtext: ${It.subtext};
  --primary: ${It.primary};
  --primarySoft: ${It.primarySoft};
  --accent: ${It.accent};
  --border: ${It.border};
  --shadow: ${It.shadow};

  min-height: 100vh;
  padding: 24px;
  background: radial-gradient(1200px 600px at -10% -10%, #EEF2FF 0%, transparent 50%),
              radial-gradient(1200px 600px at 110% 0%, #ECFDF5 0%, transparent 50%),
              var(--bg);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,Q6=_.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  animation: ${G6} 0.6s ease-out;
`,Qf=_.div`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: var(--shadow);
`,Z6=_(Qf)`
  padding: 24px;
  margin-bottom: 16px;
`,K6=_.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,P6=_.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(180deg, var(--primary), #7C3AED);
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 28px;
  font-weight: 800;
`,J6=_.div`
  display: grid;
  gap: 6px;
`,F6=_.h1`
  font-size: 22px;
  color: var(--text);
  margin: 0;
`,W6=_.p`
  color: var(--subtext);
  margin: 0;
  font-size: 14px;
`,I6=_.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-end;

  @media (max-width: 640px) {
    justify-content: center;
  }
`,m1=_.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 12px;
  border: 1px solid var(--border);
  background: #fff;
  color: var(--text);
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  transition: all 0.2s ease;

  &:hover { 
    border-color: var(--primary);
    color: var(--primary);
    transform: translateY(-1px);
  }
`,eS=_.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 14px;
`,Zc=_.div`
  background: var(--primarySoft);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 10px;
`,Kc=_.div`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: #fff;
  border: 1px solid var(--border);
`,Pc=_.div`
  display: grid;
  line-height: 1.1;
`,Jc=_.span`
  font-weight: 800;
  color: var(--text);
`,Fc=_.span`
  font-size: 12px;
  color: var(--subtext);
`,Wc=_.div`
  color: #F59E0B;
`,tS=_.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin: 16px 0;
`,v1=_.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: ${a=>a.active?It.primary:"#fff"};
  color: ${a=>a.active?"#fff":It.subtext};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: var(--shadow);

  svg { opacity: ${a=>a.active?1:.7}; }

  &:hover { transform: translateY(-1px); }
`,g1=_(Qf)`
  padding: 16px;
  animation: ${X6} 0.35s ease-out;
`,nS=_.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: #fff;
  transition: all 0.2s ease;
  &:hover { background: #FAFAFF; transform: translateX(2px); }
  & + & { margin-top: 10px; }
`,aS=_.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: linear-gradient(180deg, var(--primary), #7C3AED);
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 20px;
`,iS=_.div`
  display: grid;
  gap: 6px;
`,lS=_.h3`
  margin: 0;
  color: var(--text);
  font-size: 16px;
`,rS=_.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: var(--subtext);
`,Ic=_.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,oS=_.div`
  width: 140px;
  height: 8px;
  background: #F3F4F6;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid var(--border);
`,uS=_.div`
  height: 100%;
  width: ${a=>Math.min(Math.max(a.value,0),100)}%;
  background: linear-gradient(90deg, var(--primary), #22C55E);
`,sS=_(Xv)`
  color: #D1D5DB;
  font-size: 18px;
`,y1=_.div`
  text-align: center;
  padding: 48px 12px;
  color: var(--subtext);
`,b1=_.div`
  font-size: 56px;
  margin-bottom: 10px;
  opacity: 0.5;
`,cS=_.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(220px, 1fr) );
  gap: 12px;
`,fS=_(Qf)`
  padding: 14px;
  display: grid;
  gap: 10px;
`,dS=_.div`
  font-weight: 700;
  color: var(--text);
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,hS=_.div`
  font-size: 12px;
  color: var(--subtext);
  display: flex;
  align-items: center;
  gap: 10px;
`,pS=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,x1=_.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: #fff;
  color: var(--text);
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  transition: all 0.2s ease;
  &:hover { border-color: var(--primary); color: var(--primary); }
`;function mS(){const[a,l]=b.useState("history");b.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]);const u={name:"Priya Sharma",email:"priya.sharma@example.com",booksRead:24,hoursSpent:156,favoriteTeacher:"Ms. Sarah"},o=[{id:1,title:"Sense of Collective Identity",teacher:"Mr. Arjun Mehta",time:"2 hours ago",progress:75,icon:h.jsx(Mi,{})},{id:2,title:"Understanding Diversity",teacher:"Ms. Nisha Rao",time:"Yesterday",progress:45,icon:h.jsx(No,{})},{id:3,title:"Nationalism in India",teacher:"Dr. Kavita Iyer",time:"2 days ago",progress:90,icon:h.jsx(Qc,{})},{id:4,title:"Democracy & Rights",teacher:"Prof. R. Menon",time:"1 week ago",progress:100,icon:h.jsx(p1,{})}],c=[{id:"f1",title:"Globalisation & Indian Economy",by:"Siddharth Sir",reads:12},{id:"f2",title:"Federalism Basics",by:"Anita Ma'am",reads:9},{id:"f3",title:"Judiciary: Structure",by:"R. Sharma",reads:14},{id:"f4",title:"Gender, Religion & Caste",by:"S. Verma",reads:7}];return h.jsx(V6,{children:h.jsxs(Q6,{children:[h.jsx(Z6,{children:h.jsxs(K6,{children:[h.jsx(P6,{"aria-label":"User avatar",children:h.jsx(Y6,{size:24})}),h.jsxs("div",{children:[h.jsxs(J6,{children:[h.jsx(F6,{children:u.name}),h.jsx(W6,{children:u.email})]}),h.jsxs(eS,{children:[h.jsxs(Zc,{children:[h.jsx(Kc,{"aria-hidden":"true",children:h.jsx(No,{})}),h.jsxs(Pc,{children:[h.jsx(Jc,{children:u.booksRead}),h.jsx(Fc,{children:"Books Read"})]}),h.jsx(Wc,{title:"Lifetime reads",children:h.jsx(p1,{})})]}),h.jsxs(Zc,{children:[h.jsx(Kc,{"aria-hidden":"true",children:h.jsx(d1,{})}),h.jsxs(Pc,{children:[h.jsx(Jc,{children:u.hoursSpent}),h.jsx(Fc,{children:"Study Hours"})]}),h.jsx(Wc,{title:"Consistent!",children:h.jsx(Lo,{})})]}),h.jsxs(Zc,{children:[h.jsx(Kc,{"aria-hidden":"true",children:h.jsx(Mi,{})}),h.jsxs(Pc,{children:[h.jsx(Jc,{children:u.favoriteTeacher}),h.jsx(Fc,{children:"Favourite Teacher"})]}),h.jsx(Wc,{children:h.jsx(h1,{})})]})]})]}),h.jsxs(I6,{children:[h.jsxs(m1,{"aria-label":"Edit profile",children:[h.jsx(q6,{})," Edit"]}),h.jsxs(m1,{"aria-label":"Settings",children:[h.jsx($6,{})," Settings"]})]})]})}),h.jsxs(tS,{children:[h.jsxs(v1,{active:a==="history",onClick:()=>l("history"),"aria-pressed":a==="history",children:[h.jsx(Qc,{})," Reading History"]}),h.jsxs(v1,{active:a==="favorites",onClick:()=>l("favorites"),"aria-pressed":a==="favorites",children:[h.jsx(Lo,{})," Favorites"]})]}),a==="history"?h.jsx(g1,{children:o.length>0?o.map(f=>h.jsxs(nS,{role:"button",tabIndex:0,children:[h.jsx(aS,{"aria-hidden":"true",children:f.icon}),h.jsxs(iS,{children:[h.jsx(lS,{children:f.title}),h.jsxs(rS,{children:[h.jsxs(Ic,{children:[h.jsx(Mi,{})," ",f.teacher]}),h.jsxs(Ic,{children:[h.jsx(d1,{})," ",f.time]}),h.jsxs(Ic,{children:[h.jsx(No,{})," ",f.progress,"% complete"]})]}),h.jsx(oS,{"aria-label":`Progress ${f.progress}%`,children:h.jsx(uS,{value:f.progress})})]}),h.jsx(sS,{})]},f.id)):h.jsxs(y1,{children:[h.jsx(b1,{children:h.jsx(H6,{})}),h.jsx("h3",{children:"No Reading History Yet"}),h.jsx("p",{children:"Start exploring SST chapters to see them here."})]})}):h.jsx(g1,{children:c.length>0?h.jsx(cS,{children:c.map(f=>h.jsxs(fS,{children:[h.jsxs(dS,{children:[h.jsx(No,{})," ",f.title]}),h.jsxs(hS,{children:[h.jsx(Mi,{})," ",f.by," • ",h.jsx(Qc,{})," ",f.reads," reads"]}),h.jsxs(pS,{children:[h.jsxs(x1,{"aria-label":"Open",children:[h.jsx(Xv,{})," Open"]}),h.jsxs(x1,{"aria-label":"Unfavorite",children:[h.jsx(h1,{})," Unfavorite"]})]})]},f.id))}):h.jsxs(y1,{children:[h.jsx(b1,{children:h.jsx(Lo,{})}),h.jsx("h3",{children:"No Favorites Yet"}),h.jsxs("p",{children:["Tap the ",h.jsx(Lo,{style:{verticalAlign:"middle"}})," on any chapter to save it here."]})]})})]})})}const vS=dn`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
`,gS=dn`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,yS=dn`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,bS=dn`
  0% {
    width: 0%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 0%;
  }
`,xS=_.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`,SS=_.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,ef=_.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: ${vS} 20s infinite ease-in-out;

  &:nth-child(1) {
    width: 300px;
    height: 300px;
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }

  &:nth-child(2) {
    width: 200px;
    height: 200px;
    top: 60%;
    right: 15%;
    animation-delay: 3s;
  }

  &:nth-child(3) {
    width: 150px;
    height: 150px;
    bottom: 20%;
    left: 20%;
    animation-delay: 6s;
  }
`,wS=_.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  animation: ${gS} 0.8s ease-out;

  @media (max-width: 600px) {
    margin: 20px;
    padding: 20px 20px;
  }
`,ES=_.div`
  margin-bottom: 0px;
  position: relative;
`,CS=_.div`
  font-size: 70px;
  animation: ${yS} 2s infinite;
`,TS=_.h1`
  font-size: 2.5em;
  color: #2d3748;
  margin-bottom: 10px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 2em;
  }
`,RS=_.p`
  font-size: 1.2em;
  color: #718096;
  margin-bottom: 25px;
  line-height: 1.6;
`,_S=_.div`
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`,OS=_.div`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  animation: ${bS} 3s ease-in-out infinite;
`,jS=_.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,tf=_.div`
  padding: 20px;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
  }
`,nf=_.div`
  font-size:30px;
  margin-bottom: 10px;
`,af=_.div`
  font-size: 14px;
  color: #4a5568;
  font-weight: 600;
`,zS=_.button`
  margin-top: 30px;
  padding: 15px 40px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: ${a=>a.$notified?"linear-gradient(135deg, #48bb78 0%, #38a169 100%)":"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
  }

  &:active {
    transform: translateY(0);
  }
`;function S1(){const[a,l]=b.useState(!1),u=()=>{l(!0),setTimeout(()=>{l(!1)},2e3)};return h.jsxs(xS,{children:[h.jsxs(SS,{children:[h.jsx(ef,{}),h.jsx(ef,{}),h.jsx(ef,{})]}),h.jsxs(wS,{children:[h.jsx(ES,{children:h.jsx(CS,{children:"🚧"})}),h.jsx(TS,{children:"Building Something Amazing"}),h.jsx(RS,{children:"We're working hard to bring you an incredible new feature. Stay tuned!"}),h.jsx(_S,{children:h.jsx(OS,{})}),h.jsxs(jS,{children:[h.jsxs(tf,{children:[h.jsx(nf,{children:"⚡"}),h.jsx(af,{children:"Lightning Fast"})]}),h.jsxs(tf,{children:[h.jsx(nf,{children:"🎨"}),h.jsx(af,{children:"Beautiful Design"})]}),h.jsxs(tf,{children:[h.jsx(nf,{children:"🔒"}),h.jsx(af,{children:"Secure & Private"})]})]}),h.jsx(zS,{onClick:u,$notified:a,children:a?"✓ You'll be notified!":"Notify Me When Ready"})]})]})}var AS=kv();const at=ar(AS);function Tf(){return Tf=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var o in u)({}).hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},Tf.apply(null,arguments)}function Vv(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)!==-1)continue;u[o]=a[o]}return u}function w1(a){return"default"+a.charAt(0).toUpperCase()+a.substr(1)}function MS(a){var l=DS(a,"string");return typeof l=="symbol"?l:String(l)}function DS(a,l){if(typeof a!="object"||a===null)return a;var u=a[Symbol.toPrimitive];if(u!==void 0){var o=u.call(a,l);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}function NS(a,l,u){var o=b.useRef(a!==void 0),c=b.useState(l),f=c[0],p=c[1],y=a!==void 0,v=o.current;return o.current=y,!y&&v&&f!==l&&p(l),[y?a:f,b.useCallback(function(m){for(var S=arguments.length,x=new Array(S>1?S-1:0),w=1;w<S;w++)x[w-1]=arguments[w];u&&u.apply(void 0,[m].concat(x)),p(m)},[u])]}function Qv(a,l){return Object.keys(l).reduce(function(u,o){var c,f=u,p=f[w1(o)],y=f[o],v=Vv(f,[w1(o),o].map(MS)),m=l[o],S=NS(y,p,a[m]),x=S[0],w=S[1];return Tf({},v,(c={},c[o]=x,c[m]=w,c))},a)}function Rf(a,l){return Rf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,o){return u.__proto__=o,u},Rf(a,l)}function LS(a,l){a.prototype=Object.create(l.prototype),a.prototype.constructor=a,Rf(a,l)}const kS=["xxl","xl","lg","md","sm","xs"],US="xs",Zv=b.createContext({prefixes:{},breakpoints:kS,minBreakpoint:US}),{Consumer:U7,Provider:B7}=Zv;function xt(a,l){const{prefixes:u}=b.useContext(Zv);return a||u[l]||l}function Zf(a){return a&&a.ownerDocument||document}function BS(a){var l=Zf(a);return l&&l.defaultView||window}function HS(a,l){return BS(a).getComputedStyle(a,l)}var $S=/([A-Z])/g;function qS(a){return a.replace($S,"-$1").toLowerCase()}var YS=/^ms-/;function ko(a){return qS(a).replace(YS,"-ms-")}var GS=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function XS(a){return!!(a&&GS.test(a))}function kn(a,l){var u="",o="";if(typeof l=="string")return a.style.getPropertyValue(ko(l))||HS(a).getPropertyValue(ko(l));Object.keys(l).forEach(function(c){var f=l[c];!f&&f!==0?a.style.removeProperty(ko(c)):XS(c)?o+=c+"("+f+") ":u+=ko(c)+": "+f+";"}),o&&(u+="transform: "+o+";"),a.style.cssText+=";"+u}var VS=Nv();const lf=ar(VS),E1={disabled:!1},Kv=Ce.createContext(null);var QS=function(l){return l.scrollTop},Fl="unmounted",ha="exited",en="entering",Dn="entered",nr="exiting",$n=(function(a){LS(l,a);function l(o,c){var f;f=a.call(this,o,c)||this;var p=c,y=p&&!p.isMounting?o.enter:o.appear,v;return f.appearStatus=null,o.in?y?(v=ha,f.appearStatus=en):v=Dn:o.unmountOnExit||o.mountOnEnter?v=Fl:v=ha,f.state={status:v},f.nextCallback=null,f}l.getDerivedStateFromProps=function(c,f){var p=c.in;return p&&f.status===Fl?{status:ha}:null};var u=l.prototype;return u.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},u.componentDidUpdate=function(c){var f=null;if(c!==this.props){var p=this.state.status;this.props.in?p!==en&&p!==Dn&&(f=en):(p===en||p===Dn)&&(f=nr)}this.updateStatus(!1,f)},u.componentWillUnmount=function(){this.cancelNextCallback()},u.getTimeouts=function(){var c=this.props.timeout,f,p,y;return f=p=y=c,c!=null&&typeof c!="number"&&(f=c.exit,p=c.enter,y=c.appear!==void 0?c.appear:p),{exit:f,enter:p,appear:y}},u.updateStatus=function(c,f){if(c===void 0&&(c=!1),f!==null)if(this.cancelNextCallback(),f===en){if(this.props.unmountOnExit||this.props.mountOnEnter){var p=this.props.nodeRef?this.props.nodeRef.current:zi.findDOMNode(this);p&&QS(p)}this.performEnter(c)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ha&&this.setState({status:Fl})},u.performEnter=function(c){var f=this,p=this.props.enter,y=this.context?this.context.isMounting:c,v=this.props.nodeRef?[y]:[zi.findDOMNode(this),y],m=v[0],S=v[1],x=this.getTimeouts(),w=y?x.appear:x.enter;if(!c&&!p||E1.disabled){this.safeSetState({status:Dn},function(){f.props.onEntered(m)});return}this.props.onEnter(m,S),this.safeSetState({status:en},function(){f.props.onEntering(m,S),f.onTransitionEnd(w,function(){f.safeSetState({status:Dn},function(){f.props.onEntered(m,S)})})})},u.performExit=function(){var c=this,f=this.props.exit,p=this.getTimeouts(),y=this.props.nodeRef?void 0:zi.findDOMNode(this);if(!f||E1.disabled){this.safeSetState({status:ha},function(){c.props.onExited(y)});return}this.props.onExit(y),this.safeSetState({status:nr},function(){c.props.onExiting(y),c.onTransitionEnd(p.exit,function(){c.safeSetState({status:ha},function(){c.props.onExited(y)})})})},u.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},u.safeSetState=function(c,f){f=this.setNextCallback(f),this.setState(c,f)},u.setNextCallback=function(c){var f=this,p=!0;return this.nextCallback=function(y){p&&(p=!1,f.nextCallback=null,c(y))},this.nextCallback.cancel=function(){p=!1},this.nextCallback},u.onTransitionEnd=function(c,f){this.setNextCallback(f);var p=this.props.nodeRef?this.props.nodeRef.current:zi.findDOMNode(this),y=c==null&&!this.props.addEndListener;if(!p||y){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var v=this.props.nodeRef?[this.nextCallback]:[p,this.nextCallback],m=v[0],S=v[1];this.props.addEndListener(m,S)}c!=null&&setTimeout(this.nextCallback,c)},u.render=function(){var c=this.state.status;if(c===Fl)return null;var f=this.props,p=f.children;f.in,f.mountOnEnter,f.unmountOnExit,f.appear,f.enter,f.exit,f.timeout,f.addEndListener,f.onEnter,f.onEntering,f.onEntered,f.onExit,f.onExiting,f.onExited,f.nodeRef;var y=Vv(f,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Ce.createElement(Kv.Provider,{value:null},typeof p=="function"?p(c,y):Ce.cloneElement(Ce.Children.only(p),y))},l})(Ce.Component);$n.contextType=Kv;$n.propTypes={};function _i(){}$n.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:_i,onEntering:_i,onEntered:_i,onExit:_i,onExiting:_i,onExited:_i};$n.UNMOUNTED=Fl;$n.EXITED=ha;$n.ENTERING=en;$n.ENTERED=Dn;$n.EXITING=nr;function ZS(a){return a.code==="Escape"||a.keyCode===27}function KS(){const a=b.version.split(".");return{major:+a[0],minor:+a[1],patch:+a[2]}}function Gi(a){if(!a||typeof a=="function")return null;const{major:l}=KS();return l>=19?a.props.ref:a.ref}const uu=!!(typeof window<"u"&&window.document&&window.document.createElement);var _f=!1,Of=!1;try{var rf={get passive(){return _f=!0},get once(){return Of=_f=!0}};uu&&(window.addEventListener("test",rf,rf),window.removeEventListener("test",rf,!0))}catch{}function PS(a,l,u,o){if(o&&typeof o!="boolean"&&!Of){var c=o.once,f=o.capture,p=u;!Of&&c&&(p=u.__once||function y(v){this.removeEventListener(l,y,f),u.call(this,v)},u.__once=p),a.addEventListener(l,p,_f?o:f)}a.addEventListener(l,u,o)}function JS(a,l,u,o){var c=o&&typeof o!="boolean"?o.capture:o;a.removeEventListener(l,u,c),u.__once&&a.removeEventListener(l,u.__once,c)}function Wo(a,l,u,o){return PS(a,l,u,o),function(){JS(a,l,u,o)}}function FS(a,l,u,o){if(o===void 0&&(o=!0),a){var c=document.createEvent("HTMLEvents");c.initEvent(l,u,o),a.dispatchEvent(c)}}function WS(a){var l=kn(a,"transitionDuration")||"",u=l.indexOf("ms")===-1?1e3:1;return parseFloat(l)*u}function IS(a,l,u){u===void 0&&(u=5);var o=!1,c=setTimeout(function(){o||FS(a,"transitionend",!0)},l+u),f=Wo(a,"transitionend",function(){o=!0},{once:!0});return function(){clearTimeout(c),f()}}function e8(a,l,u,o){u==null&&(u=WS(a)||0);var c=IS(a,u,o),f=Wo(a,"transitionend",l);return function(){c(),f()}}function C1(a,l){const u=kn(a,l)||"",o=u.indexOf("ms")===-1?1e3:1;return parseFloat(u)*o}function Kf(a,l){const u=C1(a,"transitionDuration"),o=C1(a,"transitionDelay"),c=e8(a,f=>{f.target===a&&(c(),l(f))},u+o)}function Pl(...a){return a.filter(l=>l!=null).reduce((l,u)=>{if(typeof u!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return l===null?u:function(...c){l.apply(this,c),u.apply(this,c)}},null)}function Pv(a){a.offsetHeight}const T1=a=>!a||typeof a=="function"?a:l=>{a.current=l};function t8(a,l){const u=T1(a),o=T1(l);return c=>{u&&u(c),o&&o(c)}}function n8(a,l){return b.useMemo(()=>t8(a,l),[a,l])}function a8(a){return a&&"setState"in a?zi.findDOMNode(a):a??null}const su=Ce.forwardRef(({onEnter:a,onEntering:l,onEntered:u,onExit:o,onExiting:c,onExited:f,addEndListener:p,children:y,childRef:v,...m},S)=>{const x=b.useRef(null),w=n8(x,v),A=z=>{w(a8(z))},R=z=>K=>{z&&x.current&&z(x.current,K)},q=b.useCallback(R(a),[a]),Z=b.useCallback(R(l),[l]),F=b.useCallback(R(u),[u]),M=b.useCallback(R(o),[o]),H=b.useCallback(R(c),[c]),G=b.useCallback(R(f),[f]),L=b.useCallback(R(p),[p]);return h.jsx($n,{ref:S,...m,onEnter:q,onEntered:F,onEntering:Z,onExit:M,onExited:G,onExiting:H,addEndListener:L,nodeRef:x,children:typeof y=="function"?(z,K)=>y(z,{...K,ref:A}):Ce.cloneElement(y,{ref:A})})});su.displayName="TransitionWrapper";const i8={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function l8(a,l){const u=`offset${a[0].toUpperCase()}${a.slice(1)}`,o=l[u],c=i8[a];return o+parseInt(kn(l,c[0]),10)+parseInt(kn(l,c[1]),10)}const r8={[ha]:"collapse",[nr]:"collapsing",[en]:"collapsing",[Dn]:"collapse show"},Jv=Ce.forwardRef(({onEnter:a,onEntering:l,onEntered:u,onExit:o,onExiting:c,className:f,children:p,dimension:y="height",in:v=!1,timeout:m=300,mountOnEnter:S=!1,unmountOnExit:x=!1,appear:w=!1,getDimensionValue:A=l8,...R},q)=>{const Z=typeof y=="function"?y():y,F=b.useMemo(()=>Pl(z=>{z.style[Z]="0"},a),[Z,a]),M=b.useMemo(()=>Pl(z=>{const K=`scroll${Z[0].toUpperCase()}${Z.slice(1)}`;z.style[Z]=`${z[K]}px`},l),[Z,l]),H=b.useMemo(()=>Pl(z=>{z.style[Z]=null},u),[Z,u]),G=b.useMemo(()=>Pl(z=>{z.style[Z]=`${A(Z,z)}px`,Pv(z)},o),[o,A,Z]),L=b.useMemo(()=>Pl(z=>{z.style[Z]=null},c),[Z,c]);return h.jsx(su,{ref:q,addEndListener:Kf,...R,"aria-expanded":R.role?v:null,onEnter:F,onEntering:M,onEntered:H,onExit:G,onExiting:L,childRef:Gi(p),in:v,timeout:m,mountOnEnter:S,unmountOnExit:x,appear:w,children:(z,K)=>Ce.cloneElement(p,{...K,className:at(f,p.props.className,r8[z],Z==="width"&&"collapse-horizontal")})})});Jv.displayName="Collapse";function o8(a){const l=b.useRef(a);return b.useEffect(()=>{l.current=a},[a]),l}function cu(a){const l=o8(a);return b.useCallback(function(...u){return l.current&&l.current(...u)},[l])}const u8=(a=>b.forwardRef((l,u)=>h.jsx("div",{...l,ref:u,className:at(l.className,a)})));function s8(a){const l=b.useRef(a);return b.useEffect(()=>{l.current=a},[a]),l}function Nn(a){const l=s8(a);return b.useCallback(function(...u){return l.current&&l.current(...u)},[l])}function c8(){const a=b.useRef(!0),l=b.useRef(()=>a.current);return b.useEffect(()=>(a.current=!0,()=>{a.current=!1}),[]),l.current}function f8(a){const l=b.useRef(null);return b.useEffect(()=>{l.current=a}),l.current}const d8=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",h8=typeof document<"u",R1=h8||d8?b.useLayoutEffect:b.useEffect,p8=["as","disabled"];function m8(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}function v8(a){return!a||a.trim()==="#"}function Fv({tagName:a,disabled:l,href:u,target:o,rel:c,role:f,onClick:p,tabIndex:y=0,type:v}){a||(u!=null||o!=null||c!=null?a="a":a="button");const m={tagName:a};if(a==="button")return[{type:v||"button",disabled:l},m];const S=w=>{if((l||a==="a"&&v8(u))&&w.preventDefault(),l){w.stopPropagation();return}p?.(w)},x=w=>{w.key===" "&&(w.preventDefault(),S(w))};return a==="a"&&(u||(u="#"),l&&(u=void 0)),[{role:f??"button",disabled:void 0,tabIndex:l?void 0:y,href:u,target:a==="a"?o:void 0,"aria-disabled":l||void 0,rel:a==="a"?c:void 0,onClick:S,onKeyDown:x},m]}const Wv=b.forwardRef((a,l)=>{let{as:u,disabled:o}=a,c=m8(a,p8);const[f,{tagName:p}]=Fv(Object.assign({tagName:u,disabled:o},c));return h.jsx(p,Object.assign({},c,f,{ref:l}))});Wv.displayName="Button";const g8=["onKeyDown"];function y8(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}function b8(a){return!a||a.trim()==="#"}const Iv=b.forwardRef((a,l)=>{let{onKeyDown:u}=a,o=y8(a,g8);const[c]=Fv(Object.assign({tagName:"a"},o)),f=Nn(p=>{c.onKeyDown(p),u?.(p)});return b8(o.href)||o.role==="button"?h.jsx("a",Object.assign({ref:l},o,c,{onKeyDown:f})):h.jsx("a",Object.assign({ref:l},o,{onKeyDown:u}))});Iv.displayName="Anchor";const x8={[en]:"show",[Dn]:"show"},eg=b.forwardRef(({className:a,children:l,transitionClasses:u={},onEnter:o,...c},f)=>{const p={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...c},y=b.useCallback((v,m)=>{Pv(v),o?.(v,m)},[o]);return h.jsx(su,{ref:f,addEndListener:Kf,...p,onEnter:y,childRef:Gi(l),children:(v,m)=>b.cloneElement(l,{...m,className:at("fade",a,l.props.className,x8[v],u[v])})})});eg.displayName="Fade";const S8={"aria-label":lf.string,onClick:lf.func,variant:lf.oneOf(["white"])},Pf=b.forwardRef(({className:a,variant:l,"aria-label":u="Close",...o},c)=>h.jsx("button",{ref:c,type:"button",className:at("btn-close",l&&`btn-close-${l}`,a),"aria-label":u,...o}));Pf.displayName="CloseButton";Pf.propTypes=S8;const tg=b.createContext(null);tg.displayName="CardHeaderContext";const ng=b.forwardRef(({bsPrefix:a,fluid:l=!1,as:u="div",className:o,...c},f)=>{const p=xt(a,"container"),y=typeof l=="string"?`-${l}`:"-fluid";return h.jsx(u,{ref:f,...c,className:at(o,l?`${p}${y}`:p)})});ng.displayName="Container";var w8=Function.prototype.bind.call(Function.prototype.call,[].slice);function ka(a,l){return w8(a.querySelectorAll(l))}function E8(){const[,a]=b.useReducer(l=>l+1,0);return a}function _1(a,l){if(a.contains)return a.contains(l);if(a.compareDocumentPosition)return a===l||!!(a.compareDocumentPosition(l)&16)}const Io=b.createContext(null),Jf=(a,l=null)=>a!=null?String(a):l||null,Ff=b.createContext(null);Ff.displayName="NavContext";const C8="data-rr-ui-",T8="rrUi";function fu(a){return`${C8}${a}`}function R8(a){return`${T8}${a}`}const ag=b.createContext(uu?window:void 0);ag.Provider;function Wf(){return b.useContext(ag)}const _8=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",O8=typeof document<"u",j8=O8||_8?b.useLayoutEffect:b.useEffect,Xi=b.createContext(null);Xi.displayName="NavbarContext";const O1=a=>!a||typeof a=="function"?a:l=>{a.current=l};function z8(a,l){const u=O1(a),o=O1(l);return c=>{u&&u(c),o&&o(c)}}function du(a,l){return b.useMemo(()=>z8(a,l),[a,l])}const ig=b.createContext(null),A8=["as","active","eventKey"];function M8(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}function lg({key:a,onClick:l,active:u,id:o,role:c,disabled:f}){const p=b.useContext(Io),y=b.useContext(Ff),v=b.useContext(ig);let m=u;const S={role:c};if(y){!c&&y.role==="tablist"&&(S.role="tab");const x=y.getControllerId(a??null),w=y.getControlledId(a??null);S[fu("event-key")]=a,S.id=x||o,m=u==null&&a!=null?y.activeKey===a:u,(m||!(v!=null&&v.unmountOnExit)&&!(v!=null&&v.mountOnEnter))&&(S["aria-controls"]=w)}return S.role==="tab"&&(S["aria-selected"]=m,m||(S.tabIndex=-1),f&&(S.tabIndex=-1,S["aria-disabled"]=!0)),S.onClick=Nn(x=>{f||(l?.(x),a!=null&&p&&!x.isPropagationStopped()&&p(a,x))}),[S,{isActive:m}]}const rg=b.forwardRef((a,l)=>{let{as:u=Wv,active:o,eventKey:c}=a,f=M8(a,A8);const[p,y]=lg(Object.assign({key:Jf(c,f.href),active:o},f));return p[fu("active")]=y.isActive,h.jsx(u,Object.assign({},f,p,{ref:l}))});rg.displayName="NavItem";const D8=["as","onSelect","activeKey","role","onKeyDown"];function N8(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}const j1=()=>{},z1=fu("event-key"),og=b.forwardRef((a,l)=>{let{as:u="div",onSelect:o,activeKey:c,role:f,onKeyDown:p}=a,y=N8(a,D8);const v=E8(),m=b.useRef(!1),S=b.useContext(Io),x=b.useContext(ig);let w,A;x&&(f=f||"tablist",c=x.activeKey,w=x.getControlledId,A=x.getControllerId);const R=b.useRef(null),q=H=>{const G=R.current;if(!G)return null;const L=ka(G,`[${z1}]:not([aria-disabled=true])`),z=G.querySelector("[aria-selected=true]");if(!z||z!==document.activeElement)return null;const K=L.indexOf(z);if(K===-1)return null;let k=K+H;return k>=L.length&&(k=0),k<0&&(k=L.length-1),L[k]},Z=(H,G)=>{H!=null&&(o?.(H,G),S?.(H,G))},F=H=>{if(p?.(H),!x)return;let G;switch(H.key){case"ArrowLeft":case"ArrowUp":G=q(-1);break;case"ArrowRight":case"ArrowDown":G=q(1);break;default:return}G&&(H.preventDefault(),Z(G.dataset[R8("EventKey")]||null,H),m.current=!0,v())};b.useEffect(()=>{if(R.current&&m.current){const H=R.current.querySelector(`[${z1}][aria-selected=true]`);H?.focus()}m.current=!1});const M=du(l,R);return h.jsx(Io.Provider,{value:Z,children:h.jsx(Ff.Provider,{value:{role:f,activeKey:Jf(c),getControlledId:w||j1,getControllerId:A||j1},children:h.jsx(u,Object.assign({},y,{onKeyDown:F,ref:M,role:f}))})})});og.displayName="Nav";const L8=Object.assign(og,{Item:rg});function of(a){a===void 0&&(a=Zf());try{var l=a.activeElement;return!l||!l.nodeName?null:l}catch{return a.body}}function k8(a){const l=b.useRef(a);return l.current=a,l}function U8(a){const l=k8(a);b.useEffect(()=>()=>l.current(),[])}function B8(a=document){const l=a.defaultView;return Math.abs(l.innerWidth-a.documentElement.clientWidth)}const A1=fu("modal-open");class If{constructor({ownerDocument:l,handleContainerOverflow:u=!0,isRTL:o=!1}={}){this.handleContainerOverflow=u,this.isRTL=o,this.modals=[],this.ownerDocument=l}getScrollbarWidth(){return B8(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(l){}removeModalAttributes(l){}setContainerStyle(l){const u={overflow:"hidden"},o=this.isRTL?"paddingLeft":"paddingRight",c=this.getElement();l.style={overflow:c.style.overflow,[o]:c.style[o]},l.scrollBarWidth&&(u[o]=`${parseInt(kn(c,o)||"0",10)+l.scrollBarWidth}px`),c.setAttribute(A1,""),kn(c,u)}reset(){[...this.modals].forEach(l=>this.remove(l))}removeContainerStyle(l){const u=this.getElement();u.removeAttribute(A1),Object.assign(u.style,l.style)}add(l){let u=this.modals.indexOf(l);return u!==-1||(u=this.modals.length,this.modals.push(l),this.setModalAttributes(l),u!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),u}remove(l){const u=this.modals.indexOf(l);u!==-1&&(this.modals.splice(u,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(l))}isTopModal(l){return!!this.modals.length&&this.modals[this.modals.length-1]===l}}const uf=(a,l)=>uu?a==null?(l||Zf()).body:(typeof a=="function"&&(a=a()),a&&"current"in a&&(a=a.current),a&&("nodeType"in a||a.getBoundingClientRect)?a:null):null;function H8(a,l){const u=Wf(),[o,c]=b.useState(()=>uf(a,u?.document));if(!o){const f=uf(a);f&&c(f)}return b.useEffect(()=>{},[l,o]),b.useEffect(()=>{const f=uf(a);f!==o&&c(f)},[a,o]),o}function $8({children:a,in:l,onExited:u,mountOnEnter:o,unmountOnExit:c}){const f=b.useRef(null),p=b.useRef(l),y=Nn(u);b.useEffect(()=>{l?p.current=!0:y(f.current)},[l,y]);const v=du(f,Gi(a)),m=b.cloneElement(a,{ref:v});return l?m:c||!p.current&&o?null:m}const q8=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function Y8(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}function G8(a){let{onEnter:l,onEntering:u,onEntered:o,onExit:c,onExiting:f,onExited:p,addEndListener:y,children:v}=a,m=Y8(a,q8);const S=b.useRef(null),x=du(S,Gi(v)),w=G=>L=>{G&&S.current&&G(S.current,L)},A=b.useCallback(w(l),[l]),R=b.useCallback(w(u),[u]),q=b.useCallback(w(o),[o]),Z=b.useCallback(w(c),[c]),F=b.useCallback(w(f),[f]),M=b.useCallback(w(p),[p]),H=b.useCallback(w(y),[y]);return Object.assign({},m,{nodeRef:S},l&&{onEnter:A},u&&{onEntering:R},o&&{onEntered:q},c&&{onExit:Z},f&&{onExiting:F},p&&{onExited:M},y&&{addEndListener:H},{children:typeof v=="function"?(G,L)=>v(G,Object.assign({},L,{ref:x})):b.cloneElement(v,{ref:x})})}const X8=["component"];function V8(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}const Q8=b.forwardRef((a,l)=>{let{component:u}=a,o=V8(a,X8);const c=G8(o);return h.jsx(u,Object.assign({ref:l},c))});function Z8({in:a,onTransition:l}){const u=b.useRef(null),o=b.useRef(!0),c=Nn(l);return R1(()=>{if(!u.current)return;let f=!1;return c({in:a,element:u.current,initial:o.current,isStale:()=>f}),()=>{f=!0}},[a,c]),R1(()=>(o.current=!1,()=>{o.current=!0}),[]),u}function K8({children:a,in:l,onExited:u,onEntered:o,transition:c}){const[f,p]=b.useState(!l);l&&f&&p(!1);const y=Z8({in:!!l,onTransition:m=>{const S=()=>{m.isStale()||(m.in?o?.(m.element,m.initial):(p(!0),u?.(m.element)))};Promise.resolve(c(m)).then(S,x=>{throw m.in||p(!0),x})}}),v=du(y,Gi(a));return f&&!l?null:b.cloneElement(a,{ref:v})}function M1(a,l,u){return a?h.jsx(Q8,Object.assign({},u,{component:a})):l?h.jsx(K8,Object.assign({},u,{transition:l})):h.jsx($8,Object.assign({},u))}const P8=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function J8(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}let sf;function F8(a){return sf||(sf=new If({ownerDocument:a?.document})),sf}function W8(a){const l=Wf(),u=a||F8(l),o=b.useRef({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>u.add(o.current),remove:()=>u.remove(o.current),isTopModal:()=>u.isTopModal(o.current),setDialogRef:b.useCallback(c=>{o.current.dialog=c},[]),setBackdropRef:b.useCallback(c=>{o.current.backdrop=c},[])})}const ug=b.forwardRef((a,l)=>{let{show:u=!1,role:o="dialog",className:c,style:f,children:p,backdrop:y=!0,keyboard:v=!0,onBackdropClick:m,onEscapeKeyDown:S,transition:x,runTransition:w,backdropTransition:A,runBackdropTransition:R,autoFocus:q=!0,enforceFocus:Z=!0,restoreFocus:F=!0,restoreFocusOptions:M,renderDialog:H,renderBackdrop:G=Be=>h.jsx("div",Object.assign({},Be)),manager:L,container:z,onShow:K,onHide:k=()=>{},onExit:X,onExited:le,onExiting:P,onEnter:N,onEntering:ee,onEntered:ne}=a,T=J8(a,P8);const j=Wf(),$=H8(z),J=W8(L),re=c8(),ce=f8(u),[C,V]=b.useState(!u),ie=b.useRef(null);b.useImperativeHandle(l,()=>J,[J]),uu&&!ce&&u&&(ie.current=of(j?.document)),u&&C&&V(!1);const ae=Nn(()=>{if(J.add(),St.current=Wo(document,"keydown",Ue),Te.current=Wo(document,"focus",()=>setTimeout(he),!0),K&&K(),q){var Be,qa;const Vi=of((Be=(qa=J.dialog)==null?void 0:qa.ownerDocument)!=null?Be:j?.document);J.dialog&&Vi&&!_1(J.dialog,Vi)&&(ie.current=Vi,J.dialog.focus())}}),se=Nn(()=>{if(J.remove(),St.current==null||St.current(),Te.current==null||Te.current(),F){var Be;(Be=ie.current)==null||Be.focus==null||Be.focus(M),ie.current=null}});b.useEffect(()=>{!u||!$||ae()},[u,$,ae]),b.useEffect(()=>{C&&se()},[C,se]),U8(()=>{se()});const he=Nn(()=>{if(!Z||!re()||!J.isTopModal())return;const Be=of(j?.document);J.dialog&&Be&&!_1(J.dialog,Be)&&J.dialog.focus()}),ye=Nn(Be=>{Be.target===Be.currentTarget&&(m?.(Be),y===!0&&k())}),Ue=Nn(Be=>{v&&ZS(Be)&&J.isTopModal()&&(S?.(Be),Be.defaultPrevented||k())}),Te=b.useRef(),St=b.useRef(),Kt=(...Be)=>{V(!0),le?.(...Be)};if(!$)return null;const ft=Object.assign({role:o,ref:J.setDialogRef,"aria-modal":o==="dialog"?!0:void 0},T,{style:f,className:c,tabIndex:-1});let $a=H?H(ft):h.jsx("div",Object.assign({},ft,{children:b.cloneElement(p,{role:"document"})}));$a=M1(x,w,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!u,onExit:X,onExiting:P,onExited:Kt,onEnter:N,onEntering:ee,onEntered:ne,children:$a});let kt=null;return y&&(kt=G({ref:J.setBackdropRef,onClick:ye}),kt=M1(A,R,{in:!!u,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:kt})),h.jsx(h.Fragment,{children:zi.createPortal(h.jsxs(h.Fragment,{children:[kt,$a]}),$)})});ug.displayName="Modal";const I8=Object.assign(ug,{Manager:If});function ew(a,l){return a.classList?a.classList.contains(l):(" "+(a.className.baseVal||a.className)+" ").indexOf(" "+l+" ")!==-1}function tw(a,l){a.classList?a.classList.add(l):ew(a,l)||(typeof a.className=="string"?a.className=a.className+" "+l:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+l))}function D1(a,l){return a.replace(new RegExp("(^|\\s)"+l+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function nw(a,l){a.classList?a.classList.remove(l):typeof a.className=="string"?a.className=D1(a.className,l):a.setAttribute("class",D1(a.className&&a.className.baseVal||"",l))}const Oi={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class sg extends If{adjustAndStore(l,u,o){const c=u.style[l];u.dataset[l]=c,kn(u,{[l]:`${parseFloat(kn(u,l))+o}px`})}restore(l,u){const o=u.dataset[l];o!==void 0&&(delete u.dataset[l],kn(u,{[l]:o}))}setContainerStyle(l){super.setContainerStyle(l);const u=this.getElement();if(tw(u,"modal-open"),!l.scrollBarWidth)return;const o=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";ka(u,Oi.FIXED_CONTENT).forEach(f=>this.adjustAndStore(o,f,l.scrollBarWidth)),ka(u,Oi.STICKY_CONTENT).forEach(f=>this.adjustAndStore(c,f,-l.scrollBarWidth)),ka(u,Oi.NAVBAR_TOGGLER).forEach(f=>this.adjustAndStore(c,f,l.scrollBarWidth))}removeContainerStyle(l){super.removeContainerStyle(l);const u=this.getElement();nw(u,"modal-open");const o=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";ka(u,Oi.FIXED_CONTENT).forEach(f=>this.restore(o,f)),ka(u,Oi.STICKY_CONTENT).forEach(f=>this.restore(c,f)),ka(u,Oi.NAVBAR_TOGGLER).forEach(f=>this.restore(c,f))}}let cf;function aw(a){return cf||(cf=new sg(a)),cf}const cg=b.createContext({onHide(){}}),fg=b.forwardRef(({closeLabel:a="Close",closeVariant:l,closeButton:u=!1,onHide:o,children:c,...f},p)=>{const y=b.useContext(cg),v=cu(()=>{y?.onHide(),o?.()});return h.jsxs("div",{ref:p,...f,children:[c,u&&h.jsx(Pf,{"aria-label":a,variant:l,onClick:v})]})});fg.displayName="AbstractModalHeader";const dg=b.forwardRef(({className:a,bsPrefix:l,as:u="div",...o},c)=>(l=xt(l,"nav-item"),h.jsx(u,{ref:c,className:at(a,l),...o})));dg.displayName="NavItem";const hg=b.forwardRef(({bsPrefix:a,className:l,as:u=Iv,active:o,eventKey:c,disabled:f=!1,...p},y)=>{a=xt(a,"nav-link");const[v,m]=lg({key:Jf(c,p.href),active:o,disabled:f,...p});return h.jsx(u,{...p,...v,ref:y,disabled:f,className:at(l,a,f&&"disabled",m.isActive&&"active")})});hg.displayName="NavLink";const pg=b.forwardRef((a,l)=>{const{as:u="div",bsPrefix:o,variant:c,fill:f=!1,justify:p=!1,navbar:y,navbarScroll:v,className:m,activeKey:S,...x}=Qv(a,{activeKey:"onSelect"}),w=xt(o,"nav");let A,R,q=!1;const Z=b.useContext(Xi),F=b.useContext(tg);return Z?(A=Z.bsPrefix,q=y??!0):F&&({cardHeaderBsPrefix:R}=F),h.jsx(L8,{as:u,ref:l,activeKey:S,className:at(m,{[w]:!q,[`${A}-nav`]:q,[`${A}-nav-scroll`]:q&&v,[`${R}-${c}`]:!!R,[`${w}-${c}`]:!!c,[`${w}-fill`]:f,[`${w}-justified`]:p}),...x})});pg.displayName="Nav";const iw=Object.assign(pg,{Item:dg,Link:hg}),mg=b.forwardRef(({bsPrefix:a,className:l,as:u,...o},c)=>{a=xt(a,"navbar-brand");const f=u||(o.href?"a":"span");return h.jsx(f,{...o,ref:c,className:at(l,a)})});mg.displayName="NavbarBrand";const vg=b.forwardRef(({children:a,bsPrefix:l,...u},o)=>{l=xt(l,"navbar-collapse");const c=b.useContext(Xi);return h.jsx(Jv,{in:!!(c&&c.expanded),...u,children:h.jsx("div",{ref:o,className:l,children:a})})});vg.displayName="NavbarCollapse";const gg=b.forwardRef(({bsPrefix:a,className:l,children:u,label:o="Toggle navigation",as:c="button",onClick:f,...p},y)=>{a=xt(a,"navbar-toggler");const{onToggle:v,expanded:m}=b.useContext(Xi)||{},S=cu(x=>{f&&f(x),v&&v()});return c==="button"&&(p.type="button"),h.jsx(c,{...p,ref:y,onClick:S,"aria-label":o,className:at(l,a,!m&&"collapsed"),children:u||h.jsx("span",{className:`${a}-icon`})})});gg.displayName="NavbarToggle";const jf=new WeakMap,N1=(a,l)=>{if(!a||!l)return;const u=jf.get(l)||new Map;jf.set(l,u);let o=u.get(a);return o||(o=l.matchMedia(a),o.refCount=0,u.set(o.media,o)),o};function lw(a,l=typeof window>"u"?void 0:window){const u=N1(a,l),[o,c]=b.useState(()=>u?u.matches:!1);return j8(()=>{let f=N1(a,l);if(!f)return c(!1);let p=jf.get(l);const y=()=>{c(f.matches)};return f.refCount++,f.addListener(y),y(),()=>{f.removeListener(y),f.refCount--,f.refCount<=0&&p?.delete(f.media),f=void 0}},[a]),o}function rw(a){const l=Object.keys(a);function u(y,v){return y===v?v:y?`${y} and ${v}`:v}function o(y){return l[Math.min(l.indexOf(y)+1,l.length-1)]}function c(y){const v=o(y);let m=a[v];return typeof m=="number"?m=`${m-.2}px`:m=`calc(${m} - 0.2px)`,`(max-width: ${m})`}function f(y){let v=a[y];return typeof v=="number"&&(v=`${v}px`),`(min-width: ${v})`}function p(y,v,m){let S;typeof y=="object"?(S=y,m=v,v=!0):(v=v||!0,S={[y]:v});let x=b.useMemo(()=>Object.entries(S).reduce((w,[A,R])=>((R==="up"||R===!0)&&(w=u(w,f(A))),(R==="down"||R===!0)&&(w=u(w,c(A))),w),""),[JSON.stringify(S)]);return lw(x,m)}return p}const ow=rw({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),yg=b.forwardRef(({className:a,bsPrefix:l,as:u="div",...o},c)=>(l=xt(l,"offcanvas-body"),h.jsx(u,{ref:c,className:at(a,l),...o})));yg.displayName="OffcanvasBody";const uw={[en]:"show",[Dn]:"show"},bg=b.forwardRef(({bsPrefix:a,className:l,children:u,in:o=!1,mountOnEnter:c=!1,unmountOnExit:f=!1,appear:p=!1,...y},v)=>(a=xt(a,"offcanvas"),h.jsx(su,{ref:v,addEndListener:Kf,in:o,mountOnEnter:c,unmountOnExit:f,appear:p,...y,childRef:Gi(u),children:(m,S)=>b.cloneElement(u,{...S,className:at(l,u.props.className,(m===en||m===nr)&&`${a}-toggling`,uw[m])})})));bg.displayName="OffcanvasToggling";const xg=b.forwardRef(({bsPrefix:a,className:l,closeLabel:u="Close",closeButton:o=!1,...c},f)=>(a=xt(a,"offcanvas-header"),h.jsx(fg,{ref:f,...c,className:at(l,a),closeLabel:u,closeButton:o})));xg.displayName="OffcanvasHeader";const sw=u8("h5"),Sg=b.forwardRef(({className:a,bsPrefix:l,as:u=sw,...o},c)=>(l=xt(l,"offcanvas-title"),h.jsx(u,{ref:c,className:at(a,l),...o})));Sg.displayName="OffcanvasTitle";function cw(a){return h.jsx(bg,{...a})}function fw(a){return h.jsx(eg,{...a})}const wg=b.forwardRef(({bsPrefix:a,className:l,children:u,"aria-labelledby":o,placement:c="start",responsive:f,show:p=!1,backdrop:y=!0,keyboard:v=!0,scroll:m=!1,onEscapeKeyDown:S,onShow:x,onHide:w,container:A,autoFocus:R=!0,enforceFocus:q=!0,restoreFocus:Z=!0,restoreFocusOptions:F,onEntered:M,onExit:H,onExiting:G,onEnter:L,onEntering:z,onExited:K,backdropClassName:k,manager:X,renderStaticNode:le=!1,...P},N)=>{const ee=b.useRef();a=xt(a,"offcanvas");const[ne,T]=b.useState(!1),j=cu(w),$=ow(f||"xs","up");b.useEffect(()=>{T(f?p&&!$:p)},[p,f,$]);const J=b.useMemo(()=>({onHide:j}),[j]);function re(){return X||(m?(ee.current||(ee.current=new sg({handleContainerOverflow:!1})),ee.current):aw())}const ce=(ae,...se)=>{ae&&(ae.style.visibility="visible"),L?.(ae,...se)},C=(ae,...se)=>{ae&&(ae.style.visibility=""),K?.(...se)},V=b.useCallback(ae=>h.jsx("div",{...ae,className:at(`${a}-backdrop`,k)}),[k,a]),ie=ae=>h.jsx("div",{...ae,...P,className:at(l,f?`${a}-${f}`:a,`${a}-${c}`),"aria-labelledby":o,children:u});return h.jsxs(h.Fragment,{children:[!ne&&(f||le)&&ie({}),h.jsx(cg.Provider,{value:J,children:h.jsx(I8,{show:ne,ref:N,backdrop:y,container:A,keyboard:v,autoFocus:R,enforceFocus:q&&!m,restoreFocus:Z,restoreFocusOptions:F,onEscapeKeyDown:S,onShow:x,onHide:j,onEnter:ce,onEntering:z,onEntered:M,onExit:H,onExiting:G,onExited:C,manager:re(),transition:cw,backdropTransition:fw,renderBackdrop:V,renderDialog:ie})})]})});wg.displayName="Offcanvas";const dw=Object.assign(wg,{Body:yg,Header:xg,Title:Sg}),Eg=b.forwardRef(({onHide:a,...l},u)=>{const o=b.useContext(Xi),c=cu(()=>{o==null||o.onToggle==null||o.onToggle(),a?.()});return h.jsx(dw,{ref:u,show:!!(o!=null&&o.expanded),...l,renderStaticNode:!0,onHide:c})});Eg.displayName="NavbarOffcanvas";const Cg=b.forwardRef(({className:a,bsPrefix:l,as:u="span",...o},c)=>(l=xt(l,"navbar-text"),h.jsx(u,{ref:c,className:at(a,l),...o})));Cg.displayName="NavbarText";const Tg=b.forwardRef((a,l)=>{const{bsPrefix:u,expand:o=!0,variant:c="light",bg:f,fixed:p,sticky:y,className:v,as:m="nav",expanded:S,onToggle:x,onSelect:w,collapseOnSelect:A=!1,...R}=Qv(a,{expanded:"onToggle"}),q=xt(u,"navbar"),Z=b.useCallback((...H)=>{w?.(...H),A&&S&&x?.(!1)},[w,A,S,x]);R.role===void 0&&m!=="nav"&&(R.role="navigation");let F=`${q}-expand`;typeof o=="string"&&(F=`${F}-${o}`);const M=b.useMemo(()=>({onToggle:()=>x?.(!S),bsPrefix:q,expanded:!!S,expand:o}),[q,S,o,x]);return h.jsx(Xi.Provider,{value:M,children:h.jsx(Io.Provider,{value:Z,children:h.jsx(m,{ref:l,...R,className:at(v,q,o&&F,c&&`${q}-${c}`,f&&`bg-${f}`,y&&`sticky-${y}`,p&&`fixed-${p}`)})})})});Tg.displayName="Navbar";const hw=Object.assign(Tg,{Brand:mg,Collapse:vg,Offcanvas:Eg,Text:Cg,Toggle:gg});function pw(a){return Oe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M149.688 85.625c-1.234.005-2.465.033-3.72.063-33.913.806-75.48 10.704-127.25 33.718V362.78c60.77-28.82 106.718-37.067 144.22-33.092 33.502 3.55 59.685 16.66 83.562 31.187v-242.97c-23.217-17.744-50.195-30.04-85.97-32-3.52-.192-7.142-.296-10.843-.28zm211.968 0c-3.7-.016-7.322.088-10.844.28-35.773 1.96-62.75 14.256-85.968 32v242.97c23.876-14.527 50.06-27.637 83.562-31.188 37.502-3.974 83.45 4.272 144.22 33.094V119.407c-51.77-23.014-93.337-32.912-127.25-33.72-1.255-.028-2.486-.056-3.72-.06zm5.72 261.78c-1.038-.002-2.074.017-3.095.033-4.808.075-9.43.37-13.905.843-33.932 3.597-59.603 17.976-85.53 34.44v.28c-6.554-1.99-13.02-2.37-19.408-.97-25.566-16.177-51.003-30.202-84.468-33.75-5.595-.592-11.44-.883-17.564-.842-32.04.213-71.833 9.778-124.687 35.937v42.53c60.77-28.823 106.714-37.067 144.218-33.092 18.545 1.965 34.837 6.845 49.75 13.28-4.682 6.064-9.308 13.268-13.875 21.688h117.156c-5.93-8.22-11.798-15.414-17.626-21.56 14.996-6.503 31.39-11.43 50.062-13.408 37.503-3.974 83.448 4.27 144.22 33.094v-42.53c-53.16-26.31-93.115-35.863-125.25-35.97z"},child:[]}]})(a)}function mw(a){return Oe({attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",fill:"currentColor"},child:[]}]})(a)}const vw=_(hw)`
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
  background: rgba(255, 255, 255, 0.8) !important;
  backdrop-filter: saturate(180%) blur(14px);
  padding-top: max(env(safe-area-inset-top), 6px);
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`,gw=_.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 8px;
`,yw=_.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,bw=_.div`
  justify-self: center;
`,xw=_.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`,Sw=_.button`
  border: none;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 12px;
  transition: transform 120ms ease, background 120ms ease;
  &:active {
    transform: scale(0.96);
  }
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`,ww=_(qi)`
  padding: 10px 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px; /* space between icon and text */
`,Ew=_(pw)`
  width: 28px;
  height: 28px;
  flex: 0 0 28px;
  color: #f0703c /* keep high contrast; adjust to your brand */
`,Cw=_.div`
  font-size: 28px;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue",
    Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  font-weight: 700;
  background: linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent; /* fallback */
  -webkit-text-fill-color: transparent; /* webkit */
  letter-spacing: 0.2px;
  line-height: 1;
`;function Tw(){const a=()=>{console.log("Toggled theme")};return h.jsx("div",{className:"topbar-wrapper",children:h.jsx(vw,{className:"shadow-sm d-lg-none",children:h.jsx(ng,{fluid:!0,className:"px-3",children:h.jsxs(gw,{children:[h.jsx(yw,{children:h.jsxs(ww,{to:"/instalearn/","aria-label":"Go to home",children:[h.jsx(Ew,{"aria-hidden":"true"}),h.jsx(Cw,{children:"InstaLearn"})]})}),h.jsx(bw,{}),h.jsx(xw,{children:h.jsx(Sw,{type:"button",onClick:a,"aria-label":"Toggle",children:h.jsx(mw,{size:20})})})]})})})})}const Rw=dn`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,_w=_.aside`
  width: 245px;
  height: 100vh;
  background: #ffffff;
  border-right: 1px solid #dbdbdb;
  padding: 8px 0 20px;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  transition: width 200ms ease, padding 200ms ease;
`,Ow=_(qi)`
  padding: 25px 12px 16px 12px;
  margin-bottom: 19px;
  margin-left: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: padding 200ms ease, margin 200ms ease;
`,jw=_.div`
  font-size: 28px;
  font-family: "BBH Sans Hegarty", sans-serif;
  font-weight: 700; /* bold */
  background: linear-gradient(
    45deg,
    #f58529, /* orange */
    #dd2a7b, /* pink */
    #8134af, /* purple */
    #515bd4  /* blue */
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.2px;
  line-height: 1;
`,zw=_.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
`,Aw=ma`
  color: #00dbe4;
  font-weight: 700;
  transform: translateX(2px) scale(1.02);
  svg { stroke-width: 2.5; }

  /* Glowing animated bar on the left */
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 6px;
    bottom: 6px;
    width: 3px;
    border-radius: 3px;
    background: linear-gradient(90deg, #00F5FF, #0088FF, #00F5FF);
    background-size: 200% 200%;
    animation: ${Rw} 4s linear infinite;
    box-shadow: 0 0 8px rgba(0, 245, 255, 0.8);
  }
`,ff=_(qi)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 12px 12px 16px;
  margin: 4px 8px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 16px;
  font-weight: ${a=>a.$active?"700":"400"};
  color: #262626;
  background: transparent;
  transition: background-color 150ms ease, transform 200ms ease, color 150ms ease;
  position: relative;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #fafafa;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px rgba(0, 245, 255, 0.3);
    border-radius: 10px;
  }

  svg {
    font-size: 26px;
    stroke-width: ${a=>a.$active?"2.5":"2"};
    min-width: 26px;
    margin-left: 8px;
    flex-shrink: 0;
    transition: stroke-width 150ms ease;
  }

  ${a=>a.$active&&Aw}
`,Mw=_.div`
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px solid #dbdbdb;
`,df=_.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,hf=_.span`
  white-space: nowrap;
  transition: opacity 120ms ease, width 200ms ease;
`;function Dw(){const{pathname:a}=Hn(),l=[{to:"/instalearn/",icon:h.jsx(zv,{}),label:"Home"},{to:"/instalearn/teacher",icon:h.jsx(Mi,{}),label:"Teacher"},{to:"/instalearn/library",icon:h.jsx(jv,{}),label:"Library",hasNotification:!0},{to:"/instalearn/notifications",icon:h.jsx($5,{}),label:"Notifications"},{to:"/instalearn/profile",icon:h.jsx(Mv,{}),label:"Profile"}];return h.jsxs(_w,{children:[h.jsx(Ow,{to:"/instalearn/",children:h.jsx(jw,{children:"InstaLearn"})}),h.jsxs(zw,{children:[l.slice(0,-1).map(u=>h.jsxs(ff,{to:u.to,$active:a===u.to,children:[h.jsx(df,{children:u.icon}),h.jsx(hf,{children:u.label}),u.hasNotification]},u.to)),h.jsxs(ff,{to:l[l.length-1].to,$active:a===l[l.length-1].to,children:[h.jsx(df,{children:l[l.length-1].icon}),h.jsx(hf,{children:l[l.length-1].label})]})]}),h.jsx(Mw,{children:h.jsxs(ff,{to:"/instalearn/more",$active:a==="/instalearn/more",children:[h.jsx(df,{children:h.jsx(q5,{})}),h.jsx(hf,{children:"More"})]})})]})}const Nw=_.div`
  width: 100%;
  height: 100%;
  padding: 24px 16px;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 200ms ease;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #c0c0c0;
  }
`,Lw=_.div`
  position: relative;
  margin-bottom: 32px;
  
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    border-radius: 20px;
    opacity: 0.15;
    filter: blur(8px);
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 0.25;
  }
`,Rg=_.div`
  position: relative;
  background: white;
  border-radius: 16px;
  padding: ${a=>a.$width<250?"12px":"20px"};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  gap: ${a=>a.$width<250?"8px":"16px"};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`,kw=_.div`
  position: relative;
  flex-shrink: 0;
`,Uw=_.div`
  width: ${a=>a.$width<250?"40px":a.$width<200?"36px":"56px"};
  height: ${a=>a.$width<250?"40px":a.$width<200?"36px":"56px"};
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: ${a=>a.$width<250?"16px":a.$width<200?"14px":"24px"};
  font-weight: 600;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  transition: all 0.3s ease;
  
  ${Rg}:hover & {
    transform: scale(1.05);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }
`,Bw=_.div`
  position: absolute;
  bottom: ${a=>a.$width<250?"2px":"4px"};
  right: ${a=>a.$width<250?"0":"2px"};
  width: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  height: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
`,Hw=_.div`
  flex: 1;
  min-width: 0;
  display: ${a=>a.$width<180?"none":"block"};
`,$w=_.div`
  font-size: ${a=>a.$width<250?"13px":"14px"};
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,qw=_.div`
  font-size: ${a=>a.$width<250?"11px":"13px"};
  color: #6b7280;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Yw=_.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,Gw=_.div`
  display: flex;
  align-items: center;
  gap: ${a=>a.$width<200?"4px":"8px"};
  font-size: ${a=>a.$width<250?"12px":"13px"};
  font-weight: 600;
  color: #1a1a1a;
  
  svg {
    color: ${a=>a.$iconColor||"#667eea"};
    flex-shrink: 0;
    width: ${a=>a.$width<200?"14px":"16px"};
    height: ${a=>a.$width<200?"14px":"16px"};
  }
  
  span {
    display: ${a=>a.$width<180?"none":"inline"};
  }
`,Xw=_.button`
  background: none;
  border: none;
  color: #667eea;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.2s ease;
  display: ${a=>a.$width<180?"none":"block"};
  
  &:hover {
    background: #f0f0ff;
    color: #5568d3;
  }
`,Vw=_.div`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.$width<250?"8px":"12px"};
  margin-bottom: 32px;
`,_g=_.div`
  position: relative;
  background: ${a=>a.$gradient?"linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)":"#fafafa"};
  border-radius: ${a=>a.$width<250?"10px":"14px"};
  padding: ${a=>a.$width<250?"10px":"14px"};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #f0f0f0;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: ${a=>a.$glowColor||"linear-gradient(135deg, #667eea, #764ba2)"};
    border-radius: ${a=>a.$width<250?"11px":"15px"};
    opacity: 0;
    filter: blur(10px);
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: transparent;
    
    &::before {
      opacity: 0.2;
    }
  }
`,Qw=_.div`
  width: ${a=>a.$width<200?"100%":a.$width<250?"50px":"100%"};
  height: ${a=>a.$width<200?"80px":a.$width<250?"50px":"100px"};
  border-radius: ${a=>a.$width<250?"8px":"10px"};
  background: ${a=>a.$gradient||"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${a=>a.$width>=250||a.$width<200?"12px":"0"};
  margin-right: ${a=>a.$width>=200&&a.$width<250?"12px":"0"};
  flex-shrink: 0;
  transition: transform 0.3s ease;
  
  svg {
    width: ${a=>a.$width<200?"28px":a.$width<250?"24px":"40px"};
    height: ${a=>a.$width<200?"28px":a.$width<250?"24px":"40px"};
    color: white;
  }
  
  ${_g}:hover & {
    transform: scale(1.05) rotate(5deg);
  }
`,Zw=_.div`
  display: flex;
  flex-direction: ${a=>a.$width<200?"column":a.$width<250?"row":"column"};
  align-items: ${a=>a.$width>=200&&a.$width<250?"center":"stretch"};
  flex: 1;
`,Kw=_.div`
  flex: 1;
`,Pw=_.h4`
  font-size: ${a=>a.$width<250?"12px":"13px"};
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 ${a=>a.$width<250?"2px":"4px"} 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Jw=_.p`
  font-size: ${a=>a.$width<250?"10px":"12px"};
  color: #6b7280;
  margin: 0;
  display: ${a=>a.$width<180?"none":"-webkit-box"};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
`,Fw=_.span`
  display: ${a=>a.$width<180?"none":"inline-flex"};
  align-items: center;
  gap: 4px;
  padding: ${a=>a.$width<250?"2px 6px":"4px 10px"};
  background: ${a=>a.$bg||"linear-gradient(135deg, #667eea, #764ba2)"};
  color: white;
  font-size: ${a=>a.$width<250?"9px":"10px"};
  font-weight: 600;
  border-radius: 6px;
  margin-bottom: ${a=>a.$width<250?"4px":"8px"};
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
`;_.a`
  display: ${a=>a.$width<180?"none":"inline-flex"};
  align-items: center;
  gap: 6px;
  font-size: ${a=>a.$width<250?"10px":"11px"};
  color: #667eea;
  font-weight: 600;
  margin-top: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
  
  svg {
    transition: transform 0.2s ease;
  }
  
  &:hover {
    color: #5568d3;
    
    svg {
      transform: translate(2px, -2px);
    }
  }
`;const Ww=({sidebarWidth:a=360})=>{const l={username:"demo_user",name:"Demo User",initials:"DU"},u=[{icon:zm,gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",title:"New Feature: Dark Mode",description:"Enable dark mode for a better night-time experience.",badge:"New",badgeBg:"linear-gradient(135deg, #667eea, #764ba2)"},{icon:Y5,gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",title:"Product Tip: Quick Search",description:"Use the search bar to find items faster.",badge:"Tip",badgeBg:"linear-gradient(135deg, #f093fb, #f5576c)"},{icon:H5,gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",title:"Update: Version 2.0",description:"Check out the latest improvements and bug fixes.",badge:"Update",badgeBg:"linear-gradient(135deg, #4facfe, #00f2fe)"}];return h.jsxs(Nw,{children:[h.jsx(Lw,{children:h.jsxs(Rg,{$width:a,children:[h.jsxs(kw,{children:[h.jsx(Uw,{$width:a,children:l.initials}),h.jsx(Bw,{$width:a})]}),h.jsxs(Hw,{$width:a,children:[h.jsx($w,{$width:a,children:l.username}),h.jsx(qw,{$width:a,children:l.name})]})]})}),h.jsxs(Yw,{children:[h.jsxs(Gw,{$width:a,$iconColor:"#667eea",children:[h.jsx(zm,{}),h.jsx("span",{children:"Highlights"})]}),h.jsx(Xw,{$width:a,children:"See All"})]}),h.jsx(Vw,{$width:a,children:u.map((o,c)=>{const f=o.icon;return h.jsxs(_g,{$width:a,$glowColor:o.gradient,children:[h.jsx(Fw,{$width:a,$bg:o.badgeBg,children:o.badge}),h.jsxs(Zw,{$width:a,children:[h.jsx(Qw,{$width:a,$gradient:o.gradient,children:h.jsx(f,{})}),h.jsxs(Kw,{children:[h.jsx(Pw,{$width:a,children:o.title}),h.jsx(Jw,{$width:a,children:o.description})]})]})]},c)})})]})};function Iw(){const{pathname:a}=Hn(),l=[["/instalearn/",h.jsx(zv,{})],["/instalearn/teacher",h.jsx(Mi,{})],["/instalearn/library",h.jsx(jv,{})],["/instalearn/profile",h.jsx(Mv,{})]];return h.jsxs(h.Fragment,{children:[h.jsx("style",{children:`
        @keyframes shine {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .bottom-nav {
          border-top: 1px solid rgba(255,255,255,0.1);
          background: rgba(0, 0, 0, 0.85);
          box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(8px);
        }

        .nav-link {
          position: relative;
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .nav-link.active {
          color: #00F5FF !important;
          transform: scale(1.1);
        }

        .nav-link.active::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 22px;
          height: 3px;
          border-radius: 2px;
          background-color: #00F5FF;
          box-shadow: 0 0 6px #00F5FF;
          animation: shine 4s linear infinite;
          background: linear-gradient(90deg, #00F5FF, #0088FF, #00F5FF);
          background-size: 200% 200%;
        }
      `}),h.jsx(iw,{className:"bottom-nav fixed-bottom d-flex justify-content-around py-2 d-lg-none",children:l.map(([u,o])=>h.jsx(qi,{to:u,className:`nav-link fs-4 text-white ${a===u?"active":""}`,children:o},u))})]})}const e7={name:"Siddharth Sir",subject:"SST Teacher",bio:"Exploring history, geography & civics 🌍 | Making SST engaging for Classes 6–12 | CBSE Expert",avatar:Dv.teacherProfilePic,posts:247,students:"1.2K",books:15,experience:8,bookList:[{title:"SST MARATHON"},{title:"World Geography Simplified"},{title:"Understanding Civics"},{title:"Economics Made Easy"},{title:"Political Science Basics"},{title:"Environment & Society"}]},Dt=e7,t7=_.div`
  max-width: 1120px;
  margin: 0 auto;
  background: #fff;
  min-height: 100vh;
`,n7=_.div`
  padding: 1rem 1.5rem;
  @media (min-width: 768px) {
    padding: 1.5rem 2rem;
  }
  @media (min-width: 1024px) {
    padding: 2rem 3rem;
  }
`,a7=_.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,i7=_.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,l7=_.div`
  position: relative;
`,r7=_.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e5e7eb;

  @media (min-width: 768px) {
    width: 8rem;
    height: 8rem;
  }
  @media (min-width: 1024px) {
    width: 10rem;
    height: 10rem;
  }
`,o7=_.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  text-align: center;

  @media (min-width: 768px) {
    display: none;
  }
`,u7=_.div`
  display: none;
  gap: 2rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    display: flex;
  }
`,ji=_.div`
  font-weight: 600;
  font-size: 1.125rem;
  span {
    font-weight: 400;
    margin-left: 0.25rem;
    color: #6b7280;
  }
`,s7=_.div`
  flex: 1;
`,c7=_.div`
  font-weight: 600;
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`,f7=_.div`
  font-size: 0.875rem;
  color: #6b7280;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,d7=_.div`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,h7=_.div`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  color: #6b7280;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,p7=_.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,m7=_.button`
  flex: 1;
  @media (min-width: 768px) {
    flex: initial;
    padding: 0.5rem 2rem;
  }
  background: #3b82f6;
  color: #fff;
  font-weight: 600;
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,v7=_.button`
  flex: 1;
  @media (min-width: 768px) {
    flex: initial;
    padding: 0.5rem 2rem;
  }
  border: 1px solid #d1d5db;
  font-weight: 600;
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,g7=_.button`
  border: 1px solid #d1d5db;
  padding: 0.25rem 1rem;
  border-radius: 0.5rem;
`,y7=_.div`
  margin-bottom: 1.5rem;
`,b7=_.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
`,x7=_.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: fit-content;
  cursor: pointer;
`,S7=_.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  padding: 0.125rem;
  background: linear-gradient(to top right, #a78bfa, #f472b6, #fb923c);

  @media (min-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
  @media (min-width: 1024px) {
    width: 6rem;
    height: 6rem;
  }
`,w7=_.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 0.25rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`,E7=_.div`
  font-size: 0.75rem;
  color: #374151;
  text-align: center;
  margin-top: 0.25rem;
  max-width: 4.375rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    font-size: 0.875rem;
    max-width: 5.625rem;
  }
`,C7=_.div`
  display: flex;
  border-top: 1px solid #e5e7eb;
`,L1=_.button`
  flex: 1;
  padding: 0.75rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-top: 2px solid ${({active:a})=>a?"#111827":"transparent"};
  color: ${({active:a})=>a?"#111827":"#9ca3af"};
`,T7=_.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`,R7=_.div`
  aspect-ratio: 1 / 1;
  background: #f3f4f6;
  display: flex;
  justify-content: center;
  align-items: center;
`;function _7(){b.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]);const a=Af(),l=u=>{u===0&&a("/instalearn/library")};return h.jsxs(t7,{children:[h.jsxs(n7,{children:[h.jsxs(a7,{children:[h.jsxs(i7,{children:[h.jsx(l7,{children:h.jsx(r7,{src:Dt.avatar,alt:Dt.name})}),h.jsxs(o7,{children:[h.jsxs(ji,{children:[Dt.posts," ",h.jsx("span",{children:"posts"})]}),h.jsxs(ji,{children:[Dt.students," ",h.jsx("span",{children:"students"})]}),h.jsxs(ji,{children:[Dt.books," ",h.jsx("span",{children:"books"})]})]})]}),h.jsxs(s7,{children:[h.jsxs(u7,{children:[h.jsxs(ji,{children:[Dt.posts," ",h.jsx("span",{children:"posts"})]}),h.jsxs(ji,{children:[Dt.students," ",h.jsx("span",{children:"students"})]}),h.jsxs(ji,{children:[Dt.books," ",h.jsx("span",{children:"books"})]})]}),h.jsx(c7,{children:Dt.name}),h.jsx(f7,{children:Dt.subject}),h.jsx(d7,{children:Dt.bio}),h.jsxs(h7,{children:["🎓 ",Dt.experience," years experience"]}),h.jsxs(p7,{children:[h.jsx(m7,{children:"Follow"}),h.jsx(v7,{children:"Message"}),h.jsx(g7,{children:"▼"})]})]})]}),h.jsx(y7,{children:h.jsx(b7,{children:Dt.bookList.map((u,o)=>h.jsxs(x7,{onClick:()=>l(o),children:[h.jsx(S7,{children:h.jsx(w7,{children:h.jsx(Ua,{size:24})})}),h.jsx(E7,{children:u.title})]},o))})})]}),h.jsxs(C7,{children:[h.jsx(L1,{children:h.jsx(h6,{size:20})}),h.jsx(L1,{children:h.jsx(a6,{size:20})})]}),h.jsx(T7,{children:Array(9).fill(null).map((u,o)=>h.jsx(R7,{children:h.jsx(Ua,{size:24})},o))})]})}const O7=_.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--color-light, #f5f5f5);
`,j7=_.aside`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    width: 280px; /* left sidebar true width */
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    overflow-y: auto;
  }
`,z7=_.div`
  flex: 1;
  display: flex;
  width: 100%;

  @media (min-width: 1024px) {
    /* match LeftSidebar width exactly to avoid layout jump */
    margin-left: 246px;
  }
`,A7=_.main`
  flex: 1;
  width: 100%;
  padding-bottom: 60px;
  transition: ${a=>a.$isResizing?"none":"margin-right 0.2s ease"};
  will-change: margin-right;

  @media (min-width: 1024px) {
    padding-bottom: 0;
    margin-right: ${a=>`${a.$sidebarWidth}px`};
  }
`,M7=_.aside`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    width: ${a=>a.$width}px;
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    overflow-y: auto;
    background: #fff;
    z-index: 50;
    box-shadow: -2px 0 8px rgba(0,0,0,0.08);
    /* It's always open; keep transform at 0 to avoid sliding out */
    transform: translateX(0);
    transition: ${a=>a.$isResizing?"none":"width 0.1s ease"};
    will-change: width;
    contain: layout;
  }
`,D7=_.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    position: absolute;
    left: 0;   /* sits at the inner left edge of the right sidebar */
    top: 0;
    bottom: 0;
    width: 8px;
    cursor: ew-resize;
    z-index: 52;

    &:hover::before,
    &.active::before {
      content: '';
      position: absolute;
      left: 2px;
      top: 0;
      bottom: 0;
      width: 4px;
      background: #0066cc;
      border-radius: 2px;
    }
  }
`,N7=_.div`
  display: block;
  margin-bottom: 60px;

  @media (min-width: 1024px) {
    display: none;
  }
`,L7=_.div`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (min-width: 1024px) {
    display: none;
  }
`;function k7(){const[a,l]=b.useState(360),[u,o]=b.useState(!1),c=b.useRef(null),f=350,p=600,y=v=>{v.preventDefault(),o(!0),c.current={startX:v.clientX,startWidth:a}};return b.useEffect(()=>{const v=(x,w,A)=>Math.min(Math.max(x,w),A),m=x=>{if(!u||!c.current)return;const{startX:w,startWidth:A}=c.current,R=w-x.clientX,q=v(A+R,f,p);l(q)},S=()=>{u&&(o(!1),c.current=null)};return u&&(document.addEventListener("mousemove",m),document.addEventListener("mouseup",S),document.body.style.cursor="ew-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",S),document.body.style.cursor="",document.body.style.userSelect=""}},[u]),h.jsxs(O7,{children:[h.jsx(j7,{children:h.jsx(Dw,{})}),h.jsxs(z7,{children:[h.jsxs(A7,{$sidebarWidth:a,$isResizing:u,children:[h.jsx(N7,{children:h.jsx(Tw,{})}),h.jsxs(Pb,{children:[h.jsx(La,{path:"/instalearn",element:h.jsx(B6,{})}),h.jsx(La,{path:"/instalearn/teacher",element:h.jsx(_7,{})}),h.jsx(La,{path:"/instalearn/library",element:h.jsx(V4,{})}),h.jsx(La,{path:"/instalearn/notifications",element:h.jsx(S1,{})}),h.jsx(La,{path:"/instalearn/more",element:h.jsx(S1,{})}),h.jsx(La,{path:"/instalearn/profile",element:h.jsx(mS,{})})]})]}),h.jsxs(M7,{$width:a,$isResizing:u,children:[h.jsx(D7,{className:u?"active":"",onMouseDown:y,"aria-label":"Resize sidebar"}),h.jsx(Ww,{})]})]}),h.jsx(L7,{children:h.jsx(Iw,{})})]})}lb.createRoot(document.getElementById("root")).render(h.jsx(yx,{children:h.jsx(k7,{})}));export{Ce as R,un as _,b as r};
