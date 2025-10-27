(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function o(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(c){if(c.ep)return;c.ep=!0;const f=o(c);fetch(c.href,f)}})();function Il(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Cc={exports:{}},kl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function H2(){if(J0)return kl;J0=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function o(u,c,f){var p=null;if(f!==void 0&&(p=""+f),c.key!==void 0&&(p=""+c.key),"key"in c){f={};for(var y in c)y!=="key"&&(f[y]=c[y])}else f=c;return c=f.ref,{$$typeof:a,type:u,key:p,ref:c!==void 0?c:null,props:f}}return kl.Fragment=l,kl.jsx=o,kl.jsxs=o,kl}var F0;function $2(){return F0||(F0=1,Cc.exports=H2()),Cc.exports}var h=$2(),Tc={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0;function q2(){if(W0)return pe;W0=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),p=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),w=Symbol.iterator;function D(C){return C===null||typeof C!="object"?null:(C=w&&C[w]||C["@@iterator"],typeof C=="function"?C:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,X={};function P(C,V,ie){this.props=C,this.context=V,this.refs=X,this.updater=ie||O}P.prototype.isReactComponent={},P.prototype.setState=function(C,V){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,V,"setState")},P.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function M(){}M.prototype=P.prototype;function $(C,V,ie){this.props=C,this.context=V,this.refs=X,this.updater=ie||O}var G=$.prototype=new M;G.constructor=$,Y(G,P.prototype),G.isPureReactComponent=!0;var L=Array.isArray;function _(){}var J={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function Z(C,V,ie){var ae=ie.ref;return{$$typeof:a,type:C,key:V,ref:ae!==void 0?ae:null,props:ie}}function le(C,V){return Z(C.type,V,C.props)}function K(C){return typeof C=="object"&&C!==null&&C.$$typeof===a}function N(C){var V={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(ie){return V[ie]})}var te=/\/+/g;function ne(C,V){return typeof C=="object"&&C!==null&&C.key!=null?N(""+C.key):V.toString(36)}function T(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(_,_):(C.status="pending",C.then(function(V){C.status==="pending"&&(C.status="fulfilled",C.value=V)},function(V){C.status==="pending"&&(C.status="rejected",C.reason=V)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function z(C,V,ie,ae,se){var he=typeof C;(he==="undefined"||he==="boolean")&&(C=null);var ye=!1;if(C===null)ye=!0;else switch(he){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(C.$$typeof){case a:case l:ye=!0;break;case x:return ye=C._init,z(ye(C._payload),V,ie,ae,se)}}if(ye)return se=se(C),ye=ae===""?"."+ne(C,0):ae,L(se)?(ie="",ye!=null&&(ie=ye.replace(te,"$&/")+"/"),z(se,V,ie,"",function(St){return St})):se!=null&&(K(se)&&(se=le(se,ie+(se.key==null||C&&C.key===se.key?"":(""+se.key).replace(te,"$&/")+"/")+ye)),V.push(se)),1;ye=0;var ke=ae===""?".":ae+":";if(L(C))for(var Ce=0;Ce<C.length;Ce++)ae=C[Ce],he=ke+ne(ae,Ce),ye+=z(ae,V,ie,he,se);else if(Ce=D(C),typeof Ce=="function")for(C=Ce.call(C),Ce=0;!(ae=C.next()).done;)ae=ae.value,he=ke+ne(ae,Ce++),ye+=z(ae,V,ie,he,se);else if(he==="object"){if(typeof C.then=="function")return z(T(C),V,ie,ae,se);throw V=String(C),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return ye}function H(C,V,ie){if(C==null)return C;var ae=[],se=0;return z(C,ae,"","",function(he){return V.call(ie,he,se++)}),ae}function F(C){if(C._status===-1){var V=C._result;V=V(),V.then(function(ie){(C._status===0||C._status===-1)&&(C._status=1,C._result=ie)},function(ie){(C._status===0||C._status===-1)&&(C._status=2,C._result=ie)}),C._status===-1&&(C._status=0,C._result=V)}if(C._status===1)return C._result.default;throw C._result}var re=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},ce={map:H,forEach:function(C,V,ie){H(C,function(){V.apply(this,arguments)},ie)},count:function(C){var V=0;return H(C,function(){V++}),V},toArray:function(C){return H(C,function(V){return V})||[]},only:function(C){if(!K(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return pe.Activity=S,pe.Children=ce,pe.Component=P,pe.Fragment=o,pe.Profiler=c,pe.PureComponent=$,pe.StrictMode=u,pe.Suspense=g,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,pe.__COMPILER_RUNTIME={__proto__:null,c:function(C){return J.H.useMemoCache(C)}},pe.cache=function(C){return function(){return C.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(C,V,ie){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var ae=Y({},C.props),se=C.key;if(V!=null)for(he in V.key!==void 0&&(se=""+V.key),V)!k.call(V,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&V.ref===void 0||(ae[he]=V[he]);var he=arguments.length-2;if(he===1)ae.children=ie;else if(1<he){for(var ye=Array(he),ke=0;ke<he;ke++)ye[ke]=arguments[ke+2];ae.children=ye}return Z(C.type,se,ae)},pe.createContext=function(C){return C={$$typeof:p,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:f,_context:C},C},pe.createElement=function(C,V,ie){var ae,se={},he=null;if(V!=null)for(ae in V.key!==void 0&&(he=""+V.key),V)k.call(V,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(se[ae]=V[ae]);var ye=arguments.length-2;if(ye===1)se.children=ie;else if(1<ye){for(var ke=Array(ye),Ce=0;Ce<ye;Ce++)ke[Ce]=arguments[Ce+2];se.children=ke}if(C&&C.defaultProps)for(ae in ye=C.defaultProps,ye)se[ae]===void 0&&(se[ae]=ye[ae]);return Z(C,he,se)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(C){return{$$typeof:y,render:C}},pe.isValidElement=K,pe.lazy=function(C){return{$$typeof:x,_payload:{_status:-1,_result:C},_init:F}},pe.memo=function(C,V){return{$$typeof:m,type:C,compare:V===void 0?null:V}},pe.startTransition=function(C){var V=J.T,ie={};J.T=ie;try{var ae=C(),se=J.S;se!==null&&se(ie,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(_,re)}catch(he){re(he)}finally{V!==null&&ie.types!==null&&(V.types=ie.types),J.T=V}},pe.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},pe.use=function(C){return J.H.use(C)},pe.useActionState=function(C,V,ie){return J.H.useActionState(C,V,ie)},pe.useCallback=function(C,V){return J.H.useCallback(C,V)},pe.useContext=function(C){return J.H.useContext(C)},pe.useDebugValue=function(){},pe.useDeferredValue=function(C,V){return J.H.useDeferredValue(C,V)},pe.useEffect=function(C,V){return J.H.useEffect(C,V)},pe.useEffectEvent=function(C){return J.H.useEffectEvent(C)},pe.useId=function(){return J.H.useId()},pe.useImperativeHandle=function(C,V,ie){return J.H.useImperativeHandle(C,V,ie)},pe.useInsertionEffect=function(C,V){return J.H.useInsertionEffect(C,V)},pe.useLayoutEffect=function(C,V){return J.H.useLayoutEffect(C,V)},pe.useMemo=function(C,V){return J.H.useMemo(C,V)},pe.useOptimistic=function(C,V){return J.H.useOptimistic(C,V)},pe.useReducer=function(C,V,ie){return J.H.useReducer(C,V,ie)},pe.useRef=function(C){return J.H.useRef(C)},pe.useState=function(C){return J.H.useState(C)},pe.useSyncExternalStore=function(C,V,ie){return J.H.useSyncExternalStore(C,V,ie)},pe.useTransition=function(){return J.H.useTransition()},pe.version="19.2.0",pe}var P0;function pa(){return P0||(P0=1,Tc.exports=q2()),Tc.exports}var b=pa();const qe=Il(b);var Rc={exports:{}},Bl={},jc={exports:{}},Oc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0;function Y2(){return I0||(I0=1,(function(a){function l(z,H){var F=z.length;z.push(H);e:for(;0<F;){var re=F-1>>>1,ce=z[re];if(0<c(ce,H))z[re]=H,z[F]=ce,F=re;else break e}}function o(z){return z.length===0?null:z[0]}function u(z){if(z.length===0)return null;var H=z[0],F=z.pop();if(F!==H){z[0]=F;e:for(var re=0,ce=z.length,C=ce>>>1;re<C;){var V=2*(re+1)-1,ie=z[V],ae=V+1,se=z[ae];if(0>c(ie,F))ae<ce&&0>c(se,ie)?(z[re]=se,z[ae]=F,re=ae):(z[re]=ie,z[V]=F,re=V);else if(ae<ce&&0>c(se,F))z[re]=se,z[ae]=F,re=ae;else break e}}return H}function c(z,H){var F=z.sortIndex-H.sortIndex;return F!==0?F:z.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var p=Date,y=p.now();a.unstable_now=function(){return p.now()-y}}var g=[],m=[],x=1,S=null,w=3,D=!1,O=!1,Y=!1,X=!1,P=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;function G(z){for(var H=o(m);H!==null;){if(H.callback===null)u(m);else if(H.startTime<=z)u(m),H.sortIndex=H.expirationTime,l(g,H);else break;H=o(m)}}function L(z){if(Y=!1,G(z),!O)if(o(g)!==null)O=!0,_||(_=!0,N());else{var H=o(m);H!==null&&T(L,H.startTime-z)}}var _=!1,J=-1,k=5,Z=-1;function le(){return X?!0:!(a.unstable_now()-Z<k)}function K(){if(X=!1,_){var z=a.unstable_now();Z=z;var H=!0;try{e:{O=!1,Y&&(Y=!1,M(J),J=-1),D=!0;var F=w;try{t:{for(G(z),S=o(g);S!==null&&!(S.expirationTime>z&&le());){var re=S.callback;if(typeof re=="function"){S.callback=null,w=S.priorityLevel;var ce=re(S.expirationTime<=z);if(z=a.unstable_now(),typeof ce=="function"){S.callback=ce,G(z),H=!0;break t}S===o(g)&&u(g),G(z)}else u(g);S=o(g)}if(S!==null)H=!0;else{var C=o(m);C!==null&&T(L,C.startTime-z),H=!1}}break e}finally{S=null,w=F,D=!1}H=void 0}}finally{H?N():_=!1}}}var N;if(typeof $=="function")N=function(){$(K)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=K,N=function(){ne.postMessage(null)}}else N=function(){P(K,0)};function T(z,H){J=P(function(){z(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return w},a.unstable_next=function(z){switch(w){case 1:case 2:case 3:var H=3;break;default:H=w}var F=w;w=H;try{return z()}finally{w=F}},a.unstable_requestPaint=function(){X=!0},a.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var F=w;w=z;try{return H()}finally{w=F}},a.unstable_scheduleCallback=function(z,H,F){var re=a.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?re+F:re):F=re,z){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=F+ce,z={id:x++,callback:H,priorityLevel:z,startTime:F,expirationTime:ce,sortIndex:-1},F>re?(z.sortIndex=F,l(m,z),o(g)===null&&z===o(m)&&(Y?(M(J),J=-1):Y=!0,T(L,F-re))):(z.sortIndex=ce,l(g,z),O||D||(O=!0,_||(_=!0,N()))),z},a.unstable_shouldYield=le,a.unstable_wrapCallback=function(z){var H=w;return function(){var F=w;w=H;try{return z.apply(this,arguments)}finally{w=F}}}})(Oc)),Oc}var e1;function G2(){return e1||(e1=1,jc.exports=Y2()),jc.exports}var zc={exports:{}},st={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t1;function X2(){if(t1)return st;t1=1;var a=pa();function l(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)m+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var u={d:{f:o,r:function(){throw Error(l(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(g,m,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:S==null?null:""+S,children:g,containerInfo:m,implementation:x}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return st.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,st.createPortal=function(g,m){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(l(299));return f(g,m,null,x)},st.flushSync=function(g){var m=p.T,x=u.p;try{if(p.T=null,u.p=2,g)return g()}finally{p.T=m,u.p=x,u.d.f()}},st.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,u.d.C(g,m))},st.prefetchDNS=function(g){typeof g=="string"&&u.d.D(g)},st.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var x=m.as,S=y(x,m.crossOrigin),w=typeof m.integrity=="string"?m.integrity:void 0,D=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;x==="style"?u.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:w,fetchPriority:D}):x==="script"&&u.d.X(g,{crossOrigin:S,integrity:w,fetchPriority:D,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},st.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var x=y(m.as,m.crossOrigin);u.d.M(g,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&u.d.M(g)},st.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var x=m.as,S=y(x,m.crossOrigin);u.d.L(g,x,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},st.preloadModule=function(g,m){if(typeof g=="string")if(m){var x=y(m.as,m.crossOrigin);u.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else u.d.m(g)},st.requestFormReset=function(g){u.d.r(g)},st.unstable_batchedUpdates=function(g,m){return g(m)},st.useFormState=function(g,m,x){return p.H.useFormState(g,m,x)},st.useFormStatus=function(){return p.H.useHostTransitionStatus()},st.version="19.2.0",st}var n1;function jm(){if(n1)return zc.exports;n1=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),zc.exports=X2(),zc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a1;function V2(){if(a1)return Bl;a1=1;var a=G2(),l=pa(),o=jm();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(u(188))}function m(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return g(r),e;if(s===i)return g(r),t;s=s.sibling}throw Error(u(188))}if(n.return!==i.return)n=r,i=s;else{for(var d=!1,v=r.child;v;){if(v===n){d=!0,n=r,i=s;break}if(v===i){d=!0,i=r,n=s;break}v=v.sibling}if(!d){for(v=s.child;v;){if(v===n){d=!0,n=s,i=r;break}if(v===i){d=!0,i=s,n=r;break}v=v.sibling}if(!d)throw Error(u(189))}}if(n.alternate!==i)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,w=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),$=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),le=Symbol.for("react.memo_cache_sentinel"),K=Symbol.iterator;function N(e){return e===null||typeof e!="object"?null:(e=K&&e[K]||e["@@iterator"],typeof e=="function"?e:null)}var te=Symbol.for("react.client.reference");function ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case P:return"Profiler";case X:return"StrictMode";case L:return"Suspense";case _:return"SuspenseList";case Z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case O:return"Portal";case $:return e.displayName||"Context";case M:return(e._context.displayName||"Context")+".Consumer";case G:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:ne(e.type)||"Memo";case k:t=e._payload,e=e._init;try{return ne(e(t))}catch{}}return null}var T=Array.isArray,z=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},re=[],ce=-1;function C(e){return{current:e}}function V(e){0>ce||(e.current=re[ce],re[ce]=null,ce--)}function ie(e,t){ce++,re[ce]=e.current,e.current=t}var ae=C(null),se=C(null),he=C(null),ye=C(null);function ke(e,t){switch(ie(he,t),ie(se,e),ie(ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?y0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=y0(t),e=b0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(ae),ie(ae,e)}function Ce(){V(ae),V(se),V(he)}function St(e){e.memoizedState!==null&&ie(ye,e);var t=ae.current,n=b0(t,e.type);t!==n&&(ie(se,e),ie(ae,n))}function Kt(e){se.current===e&&(V(ae),V(se)),ye.current===e&&(V(ye),Al._currentValue=F)}var ft,Ua;function kt(e){if(ft===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ft=t&&t[1]||"",Ua=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ft+e+Ua}var Be=!1;function Ha(e,t){if(!e||Be)return"";Be=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(Q){var q=Q}Reflect.construct(e,[],ee)}else{try{ee.call()}catch(Q){q=Q}e.call(ee.prototype)}}else{try{throw Error()}catch(Q){q=Q}(ee=e())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(Q){if(Q&&q&&typeof Q.stack=="string")return[Q.stack,q.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),d=s[0],v=s[1];if(d&&v){var E=d.split(`
`),U=v.split(`
`);for(r=i=0;i<E.length&&!E[i].includes("DetermineComponentFrameRoot");)i++;for(;r<U.length&&!U[r].includes("DetermineComponentFrameRoot");)r++;if(i===E.length||r===U.length)for(i=E.length-1,r=U.length-1;1<=i&&0<=r&&E[i]!==U[r];)r--;for(;1<=i&&0<=r;i--,r--)if(E[i]!==U[r]){if(i!==1||r!==1)do if(i--,r--,0>r||E[i]!==U[r]){var W=`
`+E[i].replace(" at new "," at ");return e.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",e.displayName)),W}while(1<=i&&0<=r);break}}}finally{Be=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?kt(n):""}function Gi(e,t){switch(e.tag){case 26:case 27:case 5:return kt(e.type);case 16:return kt("Lazy");case 13:return e.child!==t&&t!==null?kt("Suspense Fallback"):kt("Suspense");case 19:return kt("SuspenseList");case 0:case 15:return Ha(e.type,!1);case 11:return Ha(e.type.render,!1);case 1:return Ha(e.type,!0);case 31:return kt("Activity");default:return""}}function Jf(e){try{var t="",n=null;do t+=Gi(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var oo=Object.prototype.hasOwnProperty,so=a.unstable_scheduleCallback,co=a.unstable_cancelCallback,gg=a.unstable_shouldYield,yg=a.unstable_requestPaint,wt=a.unstable_now,bg=a.unstable_getCurrentPriorityLevel,Ff=a.unstable_ImmediatePriority,Wf=a.unstable_UserBlockingPriority,ir=a.unstable_NormalPriority,xg=a.unstable_LowPriority,Pf=a.unstable_IdlePriority,Sg=a.log,wg=a.unstable_setDisableYieldValue,Xi=null,Et=null;function Hn(e){if(typeof Sg=="function"&&wg(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Xi,e)}catch{}}var Ct=Math.clz32?Math.clz32:Tg,Eg=Math.log,Cg=Math.LN2;function Tg(e){return e>>>=0,e===0?32:31-(Eg(e)/Cg|0)|0}var lr=256,rr=262144,ur=4194304;function ma(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function or(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var r=0,s=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var v=i&134217727;return v!==0?(i=v&~s,i!==0?r=ma(i):(d&=v,d!==0?r=ma(d):n||(n=v&~e,n!==0&&(r=ma(n))))):(v=i&~s,v!==0?r=ma(v):d!==0?r=ma(d):n||(n=i&~e,n!==0&&(r=ma(n)))),r===0?0:t!==0&&t!==r&&(t&s)===0&&(s=r&-r,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:r}function Vi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Rg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function If(){var e=ur;return ur<<=1,(ur&62914560)===0&&(ur=4194304),e}function fo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function jg(e,t,n,i,r,s){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var v=e.entanglements,E=e.expirationTimes,U=e.hiddenUpdates;for(n=d&~n;0<n;){var W=31-Ct(n),ee=1<<W;v[W]=0,E[W]=-1;var q=U[W];if(q!==null)for(U[W]=null,W=0;W<q.length;W++){var Q=q[W];Q!==null&&(Q.lane&=-536870913)}n&=~ee}i!==0&&ed(e,i,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(d&~t))}function ed(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Ct(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function td(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Ct(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}function nd(e,t){var n=t&-t;return n=(n&42)!==0?1:ho(n),(n&(e.suspendedLanes|t))!==0?0:n}function ho(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function po(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ad(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Y0(e.type))}function id(e,t){var n=H.p;try{return H.p=e,t()}finally{H.p=n}}var $n=Math.random().toString(36).slice(2),it="__reactFiber$"+$n,ht="__reactProps$"+$n,$a="__reactContainer$"+$n,mo="__reactEvents$"+$n,Og="__reactListeners$"+$n,zg="__reactHandles$"+$n,ld="__reactResources$"+$n,Zi="__reactMarker$"+$n;function vo(e){delete e[it],delete e[ht],delete e[mo],delete e[Og],delete e[zg]}function qa(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$a]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=R0(e);e!==null;){if(n=e[it])return n;e=R0(e)}return t}e=n,n=e.parentNode}return null}function Ya(e){if(e=e[it]||e[$a]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ki(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Ga(e){var t=e[ld];return t||(t=e[ld]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[Zi]=!0}var rd=new Set,ud={};function va(e,t){Xa(e,t),Xa(e+"Capture",t)}function Xa(e,t){for(ud[e]=t,e=0;e<t.length;e++)rd.add(t[e])}var _g=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),od={},sd={};function Mg(e){return oo.call(sd,e)?!0:oo.call(od,e)?!1:_g.test(e)?sd[e]=!0:(od[e]=!0,!1)}function sr(e,t,n){if(Mg(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function cr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function fn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ag(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(d){n=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function go(e){if(!e._valueTracker){var t=cd(e)?"checked":"value";e._valueTracker=Ag(e,t,""+e[t])}}function fd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=cd(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function fr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dg=/[\n"\\]/g;function Ut(e){return e.replace(Dg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function yo(e,t,n,i,r,s,d,v){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Bt(t)):e.value!==""+Bt(t)&&(e.value=""+Bt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?bo(e,d,Bt(t)):n!=null?bo(e,d,Bt(n)):i!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+Bt(v):e.removeAttribute("name")}function dd(e,t,n,i,r,s,d,v){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){go(e);return}n=n!=null?""+Bt(n):"",t=t!=null?""+Bt(t):n,v||t===e.value||(e.value=t),e.defaultValue=t}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=v?e.checked:!!i,e.defaultChecked=!!i,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),go(e)}function bo(e,t,n){t==="number"&&fr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Va(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function hd(e,t,n){if(t!=null&&(t=""+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Bt(n):""}function pd(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(u(92));if(T(i)){if(1<i.length)throw Error(u(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Bt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),go(e)}function Qa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ng=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function md(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Ng.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function vd(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in t)i=t[r],t.hasOwnProperty(r)&&n[r]!==i&&md(e,r,i)}else for(var s in t)t.hasOwnProperty(s)&&md(e,s,t[s])}function xo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dr(e){return kg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function dn(){}var So=null;function wo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Za=null,Ka=null;function gd(e){var t=Ya(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;e:switch(e=t.stateNode,t.type){case"input":if(yo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ut(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=i[ht]||null;if(!r)throw Error(u(90));yo(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&fd(i)}break e;case"textarea":hd(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Va(e,!!n.multiple,t,!1)}}}var Eo=!1;function yd(e,t,n){if(Eo)return e(t,n);Eo=!0;try{var i=e(t);return i}finally{if(Eo=!1,(Za!==null||Ka!==null)&&(Ir(),Za&&(t=Za,e=Ka,Ka=Za=null,gd(t),e)))for(t=0;t<e.length;t++)gd(e[t])}}function Ji(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ht]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Co=!1;if(hn)try{var Fi={};Object.defineProperty(Fi,"passive",{get:function(){Co=!0}}),window.addEventListener("test",Fi,Fi),window.removeEventListener("test",Fi,Fi)}catch{Co=!1}var qn=null,To=null,hr=null;function bd(){if(hr)return hr;var e,t=To,n=t.length,i,r="value"in qn?qn.value:qn.textContent,s=r.length;for(e=0;e<n&&t[e]===r[e];e++);var d=n-e;for(i=1;i<=d&&t[n-i]===r[s-i];i++);return hr=r.slice(e,1<i?1-i:void 0)}function pr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mr(){return!0}function xd(){return!1}function pt(e){function t(n,i,r,s,d){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(n=e[v],this[v]=n?n(s):s[v]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?mr:xd,this.isPropagationStopped=xd,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mr)},persist:function(){},isPersistent:mr}),t}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vr=pt(ga),Wi=S({},ga,{view:0,detail:0}),Bg=pt(Wi),Ro,jo,Pi,gr=S({},Wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pi&&(Pi&&e.type==="mousemove"?(Ro=e.screenX-Pi.screenX,jo=e.screenY-Pi.screenY):jo=Ro=0,Pi=e),Ro)},movementY:function(e){return"movementY"in e?e.movementY:jo}}),Sd=pt(gr),Ug=S({},gr,{dataTransfer:0}),Hg=pt(Ug),$g=S({},Wi,{relatedTarget:0}),Oo=pt($g),qg=S({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Yg=pt(qg),Gg=S({},ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xg=pt(Gg),Vg=S({},ga,{data:0}),wd=pt(Vg),Qg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kg[e])?!!t[e]:!1}function zo(){return Jg}var Fg=S({},Wi,{key:function(e){if(e.key){var t=Qg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=pr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zo,charCode:function(e){return e.type==="keypress"?pr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wg=pt(Fg),Pg=S({},gr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ed=pt(Pg),Ig=S({},Wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zo}),ey=pt(Ig),ty=S({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),ny=pt(ty),ay=S({},gr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),iy=pt(ay),ly=S({},ga,{newState:0,oldState:0}),ry=pt(ly),uy=[9,13,27,32],_o=hn&&"CompositionEvent"in window,Ii=null;hn&&"documentMode"in document&&(Ii=document.documentMode);var oy=hn&&"TextEvent"in window&&!Ii,Cd=hn&&(!_o||Ii&&8<Ii&&11>=Ii),Td=" ",Rd=!1;function jd(e,t){switch(e){case"keyup":return uy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Od(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ja=!1;function sy(e,t){switch(e){case"compositionend":return Od(t);case"keypress":return t.which!==32?null:(Rd=!0,Td);case"textInput":return e=t.data,e===Td&&Rd?null:e;default:return null}}function cy(e,t){if(Ja)return e==="compositionend"||!_o&&jd(e,t)?(e=bd(),hr=To=qn=null,Ja=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cd&&t.locale!=="ko"?null:t.data;default:return null}}var fy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fy[e.type]:t==="textarea"}function _d(e,t,n,i){Za?Ka?Ka.push(i):Ka=[i]:Za=i,t=ru(t,"onChange"),0<t.length&&(n=new vr("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var el=null,tl=null;function dy(e){d0(e,0)}function yr(e){var t=Ki(e);if(fd(t))return e}function Md(e,t){if(e==="change")return t}var Ad=!1;if(hn){var Mo;if(hn){var Ao="oninput"in document;if(!Ao){var Dd=document.createElement("div");Dd.setAttribute("oninput","return;"),Ao=typeof Dd.oninput=="function"}Mo=Ao}else Mo=!1;Ad=Mo&&(!document.documentMode||9<document.documentMode)}function Nd(){el&&(el.detachEvent("onpropertychange",Ld),tl=el=null)}function Ld(e){if(e.propertyName==="value"&&yr(tl)){var t=[];_d(t,tl,e,wo(e)),yd(dy,t)}}function hy(e,t,n){e==="focusin"?(Nd(),el=t,tl=n,el.attachEvent("onpropertychange",Ld)):e==="focusout"&&Nd()}function py(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yr(tl)}function my(e,t){if(e==="click")return yr(t)}function vy(e,t){if(e==="input"||e==="change")return yr(t)}function gy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:gy;function nl(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!oo.call(t,r)||!Tt(e[r],t[r]))return!1}return!0}function kd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bd(e,t){var n=kd(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kd(n)}}function Ud(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ud(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=fr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fr(e.document)}return t}function Do(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var yy=hn&&"documentMode"in document&&11>=document.documentMode,Fa=null,No=null,al=null,Lo=!1;function $d(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lo||Fa==null||Fa!==fr(i)||(i=Fa,"selectionStart"in i&&Do(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),al&&nl(al,i)||(al=i,i=ru(No,"onSelect"),0<i.length&&(t=new vr("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Fa)))}function ya(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wa={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionrun:ya("Transition","TransitionRun"),transitionstart:ya("Transition","TransitionStart"),transitioncancel:ya("Transition","TransitionCancel"),transitionend:ya("Transition","TransitionEnd")},ko={},qd={};hn&&(qd=document.createElement("div").style,"AnimationEvent"in window||(delete Wa.animationend.animation,delete Wa.animationiteration.animation,delete Wa.animationstart.animation),"TransitionEvent"in window||delete Wa.transitionend.transition);function ba(e){if(ko[e])return ko[e];if(!Wa[e])return e;var t=Wa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qd)return ko[e]=t[n];return e}var Yd=ba("animationend"),Gd=ba("animationiteration"),Xd=ba("animationstart"),by=ba("transitionrun"),xy=ba("transitionstart"),Sy=ba("transitioncancel"),Vd=ba("transitionend"),Qd=new Map,Bo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bo.push("scrollEnd");function Jt(e,t){Qd.set(e,t),va(t,[e])}var br=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ht=[],Pa=0,Uo=0;function xr(){for(var e=Pa,t=Uo=Pa=0;t<e;){var n=Ht[t];Ht[t++]=null;var i=Ht[t];Ht[t++]=null;var r=Ht[t];Ht[t++]=null;var s=Ht[t];if(Ht[t++]=null,i!==null&&r!==null){var d=i.pending;d===null?r.next=r:(r.next=d.next,d.next=r),i.pending=r}s!==0&&Zd(n,r,s)}}function Sr(e,t,n,i){Ht[Pa++]=e,Ht[Pa++]=t,Ht[Pa++]=n,Ht[Pa++]=i,Uo|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Ho(e,t,n,i){return Sr(e,t,n,i),wr(e)}function xa(e,t){return Sr(e,null,null,t),wr(e)}function Zd(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var r=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&t!==null&&(r=31-Ct(n),e=s.hiddenUpdates,i=e[r],i===null?e[r]=[t]:i.push(t),t.lane=n|536870912),s):null}function wr(e){if(50<Tl)throw Tl=0,Ks=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ia={};function wy(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,t,n,i){return new wy(e,t,n,i)}function $o(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pn(e,t){var n=e.alternate;return n===null?(n=Rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Kd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Er(e,t,n,i,r,s){var d=0;if(i=e,typeof e=="function")$o(e)&&(d=1);else if(typeof e=="string")d=j2(e,n,ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Z:return e=Rt(31,n,t,r),e.elementType=Z,e.lanes=s,e;case Y:return Sa(n.children,r,s,t);case X:d=8,r|=24;break;case P:return e=Rt(12,n,t,r|2),e.elementType=P,e.lanes=s,e;case L:return e=Rt(13,n,t,r),e.elementType=L,e.lanes=s,e;case _:return e=Rt(19,n,t,r),e.elementType=_,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $:d=10;break e;case M:d=9;break e;case G:d=11;break e;case J:d=14;break e;case k:d=16,i=null;break e}d=29,n=Error(u(130,e===null?"null":typeof e,"")),i=null}return t=Rt(d,n,t,r),t.elementType=e,t.type=i,t.lanes=s,t}function Sa(e,t,n,i){return e=Rt(7,e,i,t),e.lanes=n,e}function qo(e,t,n){return e=Rt(6,e,null,t),e.lanes=n,e}function Jd(e){var t=Rt(18,null,null,0);return t.stateNode=e,t}function Yo(e,t,n){return t=Rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Fd=new WeakMap;function $t(e,t){if(typeof e=="object"&&e!==null){var n=Fd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Jf(t)},Fd.set(e,t),t)}return{value:e,source:t,stack:Jf(t)}}var ei=[],ti=0,Cr=null,il=0,qt=[],Yt=0,Yn=null,nn=1,an="";function mn(e,t){ei[ti++]=il,ei[ti++]=Cr,Cr=e,il=t}function Wd(e,t,n){qt[Yt++]=nn,qt[Yt++]=an,qt[Yt++]=Yn,Yn=e;var i=nn;e=an;var r=32-Ct(i)-1;i&=~(1<<r),n+=1;var s=32-Ct(t)+r;if(30<s){var d=r-r%5;s=(i&(1<<d)-1).toString(32),i>>=d,r-=d,nn=1<<32-Ct(t)+r|n<<r|i,an=s+e}else nn=1<<s|n<<r|i,an=e}function Go(e){e.return!==null&&(mn(e,1),Wd(e,1,0))}function Xo(e){for(;e===Cr;)Cr=ei[--ti],ei[ti]=null,il=ei[--ti],ei[ti]=null;for(;e===Yn;)Yn=qt[--Yt],qt[Yt]=null,an=qt[--Yt],qt[Yt]=null,nn=qt[--Yt],qt[Yt]=null}function Pd(e,t){qt[Yt++]=nn,qt[Yt++]=an,qt[Yt++]=Yn,nn=t.id,an=t.overflow,Yn=e}var lt=null,Ue=null,Ee=!1,Gn=null,Gt=!1,Vo=Error(u(519));function Xn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ll($t(t,e)),Vo}function Id(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[it]=e,t[ht]=i,n){case"dialog":xe("cancel",t),xe("close",t);break;case"iframe":case"object":case"embed":xe("load",t);break;case"video":case"audio":for(n=0;n<jl.length;n++)xe(jl[n],t);break;case"source":xe("error",t);break;case"img":case"image":case"link":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"input":xe("invalid",t),dd(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":xe("invalid",t);break;case"textarea":xe("invalid",t),pd(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||v0(t.textContent,n)?(i.popover!=null&&(xe("beforetoggle",t),xe("toggle",t)),i.onScroll!=null&&xe("scroll",t),i.onScrollEnd!=null&&xe("scrollend",t),i.onClick!=null&&(t.onclick=dn),t=!0):t=!1,t||Xn(e,!0)}function eh(e){for(lt=e.return;lt;)switch(lt.tag){case 5:case 31:case 13:Gt=!1;return;case 27:case 3:Gt=!0;return;default:lt=lt.return}}function ni(e){if(e!==lt)return!1;if(!Ee)return eh(e),Ee=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||sc(e.type,e.memoizedProps)),n=!n),n&&Ue&&Xn(e),eh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ue=T0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ue=T0(e)}else t===27?(t=Ue,ia(e.type)?(e=pc,pc=null,Ue=e):Ue=t):Ue=lt?Vt(e.stateNode.nextSibling):null;return!0}function wa(){Ue=lt=null,Ee=!1}function Qo(){var e=Gn;return e!==null&&(yt===null?yt=e:yt.push.apply(yt,e),Gn=null),e}function ll(e){Gn===null?Gn=[e]:Gn.push(e)}var Zo=C(null),Ea=null,vn=null;function Vn(e,t,n){ie(Zo,t._currentValue),t._currentValue=n}function gn(e){e._currentValue=Zo.current,V(Zo)}function Ko(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Jo(e,t,n,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var d=r.child;s=s.firstContext;e:for(;s!==null;){var v=s;s=r;for(var E=0;E<t.length;E++)if(v.context===t[E]){s.lanes|=n,v=s.alternate,v!==null&&(v.lanes|=n),Ko(s.return,n,e),i||(d=null);break e}s=v.next}}else if(r.tag===18){if(d=r.return,d===null)throw Error(u(341));d.lanes|=n,s=d.alternate,s!==null&&(s.lanes|=n),Ko(d,n,e),d=null}else d=r.child;if(d!==null)d.return=r;else for(d=r;d!==null;){if(d===e){d=null;break}if(r=d.sibling,r!==null){r.return=d.return,d=r;break}d=d.return}r=d}}function ai(e,t,n,i){e=null;for(var r=t,s=!1;r!==null;){if(!s){if((r.flags&524288)!==0)s=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var d=r.alternate;if(d===null)throw Error(u(387));if(d=d.memoizedProps,d!==null){var v=r.type;Tt(r.pendingProps.value,d.value)||(e!==null?e.push(v):e=[v])}}else if(r===ye.current){if(d=r.alternate,d===null)throw Error(u(387));d.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Al):e=[Al])}r=r.return}e!==null&&Jo(t,e,n,i),t.flags|=262144}function Tr(e){for(e=e.firstContext;e!==null;){if(!Tt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ca(e){Ea=e,vn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rt(e){return th(Ea,e)}function Rr(e,t){return Ea===null&&Ca(e),th(e,t)}function th(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},vn===null){if(e===null)throw Error(u(308));vn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else vn=vn.next=t;return n}var Ey=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Cy=a.unstable_scheduleCallback,Ty=a.unstable_NormalPriority,Ke={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fo(){return{controller:new Ey,data:new Map,refCount:0}}function rl(e){e.refCount--,e.refCount===0&&Cy(Ty,function(){e.controller.abort()})}var ul=null,Wo=0,ii=0,li=null;function Ry(e,t){if(ul===null){var n=ul=[];Wo=0,ii=ec(),li={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Wo++,t.then(nh,nh),t}function nh(){if(--Wo===0&&ul!==null){li!==null&&(li.status="fulfilled");var e=ul;ul=null,ii=0,li=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function jy(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(i.status="rejected",i.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),i}var ah=z.S;z.S=function(e,t){$p=wt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ry(e,t),ah!==null&&ah(e,t)};var Ta=C(null);function Po(){var e=Ta.current;return e!==null?e:Le.pooledCache}function jr(e,t){t===null?ie(Ta,Ta.current):ie(Ta,t.pool)}function ih(){var e=Po();return e===null?null:{parent:Ke._currentValue,pool:e}}var ri=Error(u(460)),Io=Error(u(474)),Or=Error(u(542)),zr={then:function(){}};function lh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function rh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(dn,dn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,oh(e),e;default:if(typeof t.status=="string")t.then(dn,dn);else{if(e=Le,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=i}},function(i){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,oh(e),e}throw ja=t,ri}}function Ra(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ja=n,ri):n}}var ja=null;function uh(){if(ja===null)throw Error(u(459));var e=ja;return ja=null,e}function oh(e){if(e===ri||e===Or)throw Error(u(483))}var ui=null,ol=0;function _r(e){var t=ol;return ol+=1,ui===null&&(ui=[]),rh(ui,e,t)}function sl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Mr(e,t){throw t.$$typeof===w?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function sh(e){function t(A,j){if(e){var B=A.deletions;B===null?(A.deletions=[j],A.flags|=16):B.push(j)}}function n(A,j){if(!e)return null;for(;j!==null;)t(A,j),j=j.sibling;return null}function i(A){for(var j=new Map;A!==null;)A.key!==null?j.set(A.key,A):j.set(A.index,A),A=A.sibling;return j}function r(A,j){return A=pn(A,j),A.index=0,A.sibling=null,A}function s(A,j,B){return A.index=B,e?(B=A.alternate,B!==null?(B=B.index,B<j?(A.flags|=67108866,j):B):(A.flags|=67108866,j)):(A.flags|=1048576,j)}function d(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function v(A,j,B,I){return j===null||j.tag!==6?(j=qo(B,A.mode,I),j.return=A,j):(j=r(j,B),j.return=A,j)}function E(A,j,B,I){var fe=B.type;return fe===Y?W(A,j,B.props.children,I,B.key):j!==null&&(j.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===k&&Ra(fe)===j.type)?(j=r(j,B.props),sl(j,B),j.return=A,j):(j=Er(B.type,B.key,B.props,null,A.mode,I),sl(j,B),j.return=A,j)}function U(A,j,B,I){return j===null||j.tag!==4||j.stateNode.containerInfo!==B.containerInfo||j.stateNode.implementation!==B.implementation?(j=Yo(B,A.mode,I),j.return=A,j):(j=r(j,B.children||[]),j.return=A,j)}function W(A,j,B,I,fe){return j===null||j.tag!==7?(j=Sa(B,A.mode,I,fe),j.return=A,j):(j=r(j,B),j.return=A,j)}function ee(A,j,B){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=qo(""+j,A.mode,B),j.return=A,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case D:return B=Er(j.type,j.key,j.props,null,A.mode,B),sl(B,j),B.return=A,B;case O:return j=Yo(j,A.mode,B),j.return=A,j;case k:return j=Ra(j),ee(A,j,B)}if(T(j)||N(j))return j=Sa(j,A.mode,B,null),j.return=A,j;if(typeof j.then=="function")return ee(A,_r(j),B);if(j.$$typeof===$)return ee(A,Rr(A,j),B);Mr(A,j)}return null}function q(A,j,B,I){var fe=j!==null?j.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return fe!==null?null:v(A,j,""+B,I);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case D:return B.key===fe?E(A,j,B,I):null;case O:return B.key===fe?U(A,j,B,I):null;case k:return B=Ra(B),q(A,j,B,I)}if(T(B)||N(B))return fe!==null?null:W(A,j,B,I,null);if(typeof B.then=="function")return q(A,j,_r(B),I);if(B.$$typeof===$)return q(A,j,Rr(A,B),I);Mr(A,B)}return null}function Q(A,j,B,I,fe){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return A=A.get(B)||null,v(j,A,""+I,fe);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case D:return A=A.get(I.key===null?B:I.key)||null,E(j,A,I,fe);case O:return A=A.get(I.key===null?B:I.key)||null,U(j,A,I,fe);case k:return I=Ra(I),Q(A,j,B,I,fe)}if(T(I)||N(I))return A=A.get(B)||null,W(j,A,I,fe,null);if(typeof I.then=="function")return Q(A,j,B,_r(I),fe);if(I.$$typeof===$)return Q(A,j,B,Rr(j,I),fe);Mr(j,I)}return null}function ue(A,j,B,I){for(var fe=null,Te=null,oe=j,ve=j=0,we=null;oe!==null&&ve<B.length;ve++){oe.index>ve?(we=oe,oe=null):we=oe.sibling;var Re=q(A,oe,B[ve],I);if(Re===null){oe===null&&(oe=we);break}e&&oe&&Re.alternate===null&&t(A,oe),j=s(Re,j,ve),Te===null?fe=Re:Te.sibling=Re,Te=Re,oe=we}if(ve===B.length)return n(A,oe),Ee&&mn(A,ve),fe;if(oe===null){for(;ve<B.length;ve++)oe=ee(A,B[ve],I),oe!==null&&(j=s(oe,j,ve),Te===null?fe=oe:Te.sibling=oe,Te=oe);return Ee&&mn(A,ve),fe}for(oe=i(oe);ve<B.length;ve++)we=Q(oe,A,ve,B[ve],I),we!==null&&(e&&we.alternate!==null&&oe.delete(we.key===null?ve:we.key),j=s(we,j,ve),Te===null?fe=we:Te.sibling=we,Te=we);return e&&oe.forEach(function(sa){return t(A,sa)}),Ee&&mn(A,ve),fe}function de(A,j,B,I){if(B==null)throw Error(u(151));for(var fe=null,Te=null,oe=j,ve=j=0,we=null,Re=B.next();oe!==null&&!Re.done;ve++,Re=B.next()){oe.index>ve?(we=oe,oe=null):we=oe.sibling;var sa=q(A,oe,Re.value,I);if(sa===null){oe===null&&(oe=we);break}e&&oe&&sa.alternate===null&&t(A,oe),j=s(sa,j,ve),Te===null?fe=sa:Te.sibling=sa,Te=sa,oe=we}if(Re.done)return n(A,oe),Ee&&mn(A,ve),fe;if(oe===null){for(;!Re.done;ve++,Re=B.next())Re=ee(A,Re.value,I),Re!==null&&(j=s(Re,j,ve),Te===null?fe=Re:Te.sibling=Re,Te=Re);return Ee&&mn(A,ve),fe}for(oe=i(oe);!Re.done;ve++,Re=B.next())Re=Q(oe,A,ve,Re.value,I),Re!==null&&(e&&Re.alternate!==null&&oe.delete(Re.key===null?ve:Re.key),j=s(Re,j,ve),Te===null?fe=Re:Te.sibling=Re,Te=Re);return e&&oe.forEach(function(U2){return t(A,U2)}),Ee&&mn(A,ve),fe}function Ne(A,j,B,I){if(typeof B=="object"&&B!==null&&B.type===Y&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case D:e:{for(var fe=B.key;j!==null;){if(j.key===fe){if(fe=B.type,fe===Y){if(j.tag===7){n(A,j.sibling),I=r(j,B.props.children),I.return=A,A=I;break e}}else if(j.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===k&&Ra(fe)===j.type){n(A,j.sibling),I=r(j,B.props),sl(I,B),I.return=A,A=I;break e}n(A,j);break}else t(A,j);j=j.sibling}B.type===Y?(I=Sa(B.props.children,A.mode,I,B.key),I.return=A,A=I):(I=Er(B.type,B.key,B.props,null,A.mode,I),sl(I,B),I.return=A,A=I)}return d(A);case O:e:{for(fe=B.key;j!==null;){if(j.key===fe)if(j.tag===4&&j.stateNode.containerInfo===B.containerInfo&&j.stateNode.implementation===B.implementation){n(A,j.sibling),I=r(j,B.children||[]),I.return=A,A=I;break e}else{n(A,j);break}else t(A,j);j=j.sibling}I=Yo(B,A.mode,I),I.return=A,A=I}return d(A);case k:return B=Ra(B),Ne(A,j,B,I)}if(T(B))return ue(A,j,B,I);if(N(B)){if(fe=N(B),typeof fe!="function")throw Error(u(150));return B=fe.call(B),de(A,j,B,I)}if(typeof B.then=="function")return Ne(A,j,_r(B),I);if(B.$$typeof===$)return Ne(A,j,Rr(A,B),I);Mr(A,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,j!==null&&j.tag===6?(n(A,j.sibling),I=r(j,B),I.return=A,A=I):(n(A,j),I=qo(B,A.mode,I),I.return=A,A=I),d(A)):n(A,j)}return function(A,j,B,I){try{ol=0;var fe=Ne(A,j,B,I);return ui=null,fe}catch(oe){if(oe===ri||oe===Or)throw oe;var Te=Rt(29,oe,null,A.mode);return Te.lanes=I,Te.return=A,Te}finally{}}}var Oa=sh(!0),ch=sh(!1),Qn=!1;function es(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ts(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Zn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Kn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Oe&2)!==0){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,t=wr(e),Zd(e,null,n),t}return Sr(e,i,t,n),wr(e)}function cl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,td(e,n)}}function ns(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?r=s=d:s=s.next=d,n=n.next}while(n!==null);s===null?r=s=t:s=s.next=t}else r=s=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var as=!1;function fl(){if(as){var e=li;if(e!==null)throw e}}function dl(e,t,n,i){as=!1;var r=e.updateQueue;Qn=!1;var s=r.firstBaseUpdate,d=r.lastBaseUpdate,v=r.shared.pending;if(v!==null){r.shared.pending=null;var E=v,U=E.next;E.next=null,d===null?s=U:d.next=U,d=E;var W=e.alternate;W!==null&&(W=W.updateQueue,v=W.lastBaseUpdate,v!==d&&(v===null?W.firstBaseUpdate=U:v.next=U,W.lastBaseUpdate=E))}if(s!==null){var ee=r.baseState;d=0,W=U=E=null,v=s;do{var q=v.lane&-536870913,Q=q!==v.lane;if(Q?(Se&q)===q:(i&q)===q){q!==0&&q===ii&&(as=!0),W!==null&&(W=W.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var ue=e,de=v;q=t;var Ne=n;switch(de.tag){case 1:if(ue=de.payload,typeof ue=="function"){ee=ue.call(Ne,ee,q);break e}ee=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=de.payload,q=typeof ue=="function"?ue.call(Ne,ee,q):ue,q==null)break e;ee=S({},ee,q);break e;case 2:Qn=!0}}q=v.callback,q!==null&&(e.flags|=64,Q&&(e.flags|=8192),Q=r.callbacks,Q===null?r.callbacks=[q]:Q.push(q))}else Q={lane:q,tag:v.tag,payload:v.payload,callback:v.callback,next:null},W===null?(U=W=Q,E=ee):W=W.next=Q,d|=q;if(v=v.next,v===null){if(v=r.shared.pending,v===null)break;Q=v,v=Q.next,Q.next=null,r.lastBaseUpdate=Q,r.shared.pending=null}}while(!0);W===null&&(E=ee),r.baseState=E,r.firstBaseUpdate=U,r.lastBaseUpdate=W,s===null&&(r.shared.lanes=0),In|=d,e.lanes=d,e.memoizedState=ee}}function fh(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function dh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)fh(n[e],t)}var oi=C(null),Ar=C(0);function hh(e,t){e=Rn,ie(Ar,e),ie(oi,t),Rn=e|t.baseLanes}function is(){ie(Ar,Rn),ie(oi,oi.current)}function ls(){Rn=Ar.current,V(oi),V(Ar)}var jt=C(null),Xt=null;function Jn(e){var t=e.alternate;ie(Qe,Qe.current&1),ie(jt,e),Xt===null&&(t===null||oi.current!==null||t.memoizedState!==null)&&(Xt=e)}function rs(e){ie(Qe,Qe.current),ie(jt,e),Xt===null&&(Xt=e)}function ph(e){e.tag===22?(ie(Qe,Qe.current),ie(jt,e),Xt===null&&(Xt=e)):Fn()}function Fn(){ie(Qe,Qe.current),ie(jt,jt.current)}function Ot(e){V(jt),Xt===e&&(Xt=null),V(Qe)}var Qe=C(0);function Dr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||dc(n)||hc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yn=0,me=null,Ae=null,Je=null,Nr=!1,si=!1,za=!1,Lr=0,hl=0,ci=null,Oy=0;function Xe(){throw Error(u(321))}function us(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function os(e,t,n,i,r,s){return yn=s,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=e===null||e.memoizedState===null?Wh:Es,za=!1,s=n(i,r),za=!1,si&&(s=vh(t,n,i,r)),mh(e),s}function mh(e){z.H=vl;var t=Ae!==null&&Ae.next!==null;if(yn=0,Je=Ae=me=null,Nr=!1,hl=0,ci=null,t)throw Error(u(300));e===null||Fe||(e=e.dependencies,e!==null&&Tr(e)&&(Fe=!0))}function vh(e,t,n,i){me=e;var r=0;do{if(si&&(ci=null),hl=0,si=!1,25<=r)throw Error(u(301));if(r+=1,Je=Ae=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}z.H=Ph,s=t(n,i)}while(si);return s}function zy(){var e=z.H,t=e.useState()[0];return t=typeof t.then=="function"?pl(t):t,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(me.flags|=1024),t}function ss(){var e=Lr!==0;return Lr=0,e}function cs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function fs(e){if(Nr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Nr=!1}yn=0,Je=Ae=me=null,si=!1,hl=Lr=0,ci=null}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?me.memoizedState=Je=e:Je=Je.next=e,Je}function Ze(){if(Ae===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Je===null?me.memoizedState:Je.next;if(t!==null)Je=t,Ae=e;else{if(e===null)throw me.alternate===null?Error(u(467)):Error(u(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Je===null?me.memoizedState=Je=e:Je=Je.next=e}return Je}function kr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pl(e){var t=hl;return hl+=1,ci===null&&(ci=[]),e=rh(ci,e,t),t=me,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?Wh:Es),e}function Br(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return pl(e);if(e.$$typeof===$)return rt(e)}throw Error(u(438,String(e)))}function ds(e){var t=null,n=me.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=me.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=kr(),me.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=le;return t.index++,n}function bn(e,t){return typeof t=="function"?t(e):t}function Ur(e){var t=Ze();return hs(t,Ae,e)}function hs(e,t,n){var i=e.queue;if(i===null)throw Error(u(311));i.lastRenderedReducer=n;var r=e.baseQueue,s=i.pending;if(s!==null){if(r!==null){var d=r.next;r.next=s.next,s.next=d}t.baseQueue=r=s,i.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{t=r.next;var v=d=null,E=null,U=t,W=!1;do{var ee=U.lane&-536870913;if(ee!==U.lane?(Se&ee)===ee:(yn&ee)===ee){var q=U.revertLane;if(q===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),ee===ii&&(W=!0);else if((yn&q)===q){U=U.next,q===ii&&(W=!0);continue}else ee={lane:0,revertLane:U.revertLane,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},E===null?(v=E=ee,d=s):E=E.next=ee,me.lanes|=q,In|=q;ee=U.action,za&&n(s,ee),s=U.hasEagerState?U.eagerState:n(s,ee)}else q={lane:ee,revertLane:U.revertLane,gesture:U.gesture,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},E===null?(v=E=q,d=s):E=E.next=q,me.lanes|=ee,In|=ee;U=U.next}while(U!==null&&U!==t);if(E===null?d=s:E.next=v,!Tt(s,e.memoizedState)&&(Fe=!0,W&&(n=li,n!==null)))throw n;e.memoizedState=s,e.baseState=d,e.baseQueue=E,i.lastRenderedState=s}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function ps(e){var t=Ze(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,s=t.memoizedState;if(r!==null){n.pending=null;var d=r=r.next;do s=e(s,d.action),d=d.next;while(d!==r);Tt(s,t.memoizedState)||(Fe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function gh(e,t,n){var i=me,r=Ze(),s=Ee;if(s){if(n===void 0)throw Error(u(407));n=n()}else n=t();var d=!Tt((Ae||r).memoizedState,n);if(d&&(r.memoizedState=n,Fe=!0),r=r.queue,gs(xh.bind(null,i,r,e),[e]),r.getSnapshot!==t||d||Je!==null&&Je.memoizedState.tag&1){if(i.flags|=2048,fi(9,{destroy:void 0},bh.bind(null,i,r,n,t),null),Le===null)throw Error(u(349));s||(yn&127)!==0||yh(i,t,n)}return n}function yh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t=kr(),me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bh(e,t,n,i){t.value=n,t.getSnapshot=i,Sh(t)&&wh(e)}function xh(e,t,n){return n(function(){Sh(t)&&wh(e)})}function Sh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function wh(e){var t=xa(e,2);t!==null&&bt(t,e,2)}function ms(e){var t=dt();if(typeof e=="function"){var n=e;if(e=n(),za){Hn(!0);try{n()}finally{Hn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:e},t}function Eh(e,t,n,i){return e.baseState=n,hs(e,Ae,typeof i=="function"?i:bn)}function _y(e,t,n,i,r){if(qr(e))throw Error(u(485));if(e=t.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){s.listeners.push(d)}};z.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,Ch(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Ch(e,t){var n=t.action,i=t.payload,r=e.state;if(t.isTransition){var s=z.T,d={};z.T=d;try{var v=n(r,i),E=z.S;E!==null&&E(d,v),Th(e,t,v)}catch(U){vs(e,t,U)}finally{s!==null&&d.types!==null&&(s.types=d.types),z.T=s}}else try{s=n(r,i),Th(e,t,s)}catch(U){vs(e,t,U)}}function Th(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Rh(e,t,i)},function(i){return vs(e,t,i)}):Rh(e,t,n)}function Rh(e,t,n){t.status="fulfilled",t.value=n,jh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ch(e,n)))}function vs(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,jh(t),t=t.next;while(t!==i)}e.action=null}function jh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Oh(e,t){return t}function zh(e,t){if(Ee){var n=Le.formState;if(n!==null){e:{var i=me;if(Ee){if(Ue){t:{for(var r=Ue,s=Gt;r.nodeType!==8;){if(!s){r=null;break t}if(r=Vt(r.nextSibling),r===null){r=null;break t}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){Ue=Vt(r.nextSibling),i=r.data==="F!";break e}}Xn(i)}i=!1}i&&(t=n[0])}}return n=dt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oh,lastRenderedState:t},n.queue=i,n=Kh.bind(null,me,i),i.dispatch=n,i=ms(!1),s=ws.bind(null,me,!1,i.queue),i=dt(),r={state:t,dispatch:null,action:e,pending:null},i.queue=r,n=_y.bind(null,me,r,s,n),r.dispatch=n,i.memoizedState=e,[t,n,!1]}function _h(e){var t=Ze();return Mh(t,Ae,e)}function Mh(e,t,n){if(t=hs(e,t,Oh)[0],e=Ur(bn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=pl(t)}catch(d){throw d===ri?Or:d}else i=t;t=Ze();var r=t.queue,s=r.dispatch;return n!==t.memoizedState&&(me.flags|=2048,fi(9,{destroy:void 0},My.bind(null,r,n),null)),[i,s,e]}function My(e,t){e.action=t}function Ah(e){var t=Ze(),n=Ae;if(n!==null)return Mh(t,n,e);Ze(),t=t.memoizedState,n=Ze();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function fi(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=me.updateQueue,t===null&&(t=kr(),me.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Dh(){return Ze().memoizedState}function Hr(e,t,n,i){var r=dt();me.flags|=e,r.memoizedState=fi(1|t,{destroy:void 0},n,i===void 0?null:i)}function $r(e,t,n,i){var r=Ze();i=i===void 0?null:i;var s=r.memoizedState.inst;Ae!==null&&i!==null&&us(i,Ae.memoizedState.deps)?r.memoizedState=fi(t,s,n,i):(me.flags|=e,r.memoizedState=fi(1|t,s,n,i))}function Nh(e,t){Hr(8390656,8,e,t)}function gs(e,t){$r(2048,8,e,t)}function Ay(e){me.flags|=4;var t=me.updateQueue;if(t===null)t=kr(),me.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Lh(e){var t=Ze().memoizedState;return Ay({ref:t,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function kh(e,t){return $r(4,2,e,t)}function Bh(e,t){return $r(4,4,e,t)}function Uh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hh(e,t,n){n=n!=null?n.concat([e]):null,$r(4,4,Uh.bind(null,t,e),n)}function ys(){}function $h(e,t){var n=Ze();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&us(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function qh(e,t){var n=Ze();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&us(t,i[1]))return i[0];if(i=e(),za){Hn(!0);try{e()}finally{Hn(!1)}}return n.memoizedState=[i,t],i}function bs(e,t,n){return n===void 0||(yn&1073741824)!==0&&(Se&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Yp(),me.lanes|=e,In|=e,n)}function Yh(e,t,n,i){return Tt(n,t)?n:oi.current!==null?(e=bs(e,n,i),Tt(e,t)||(Fe=!0),e):(yn&42)===0||(yn&1073741824)!==0&&(Se&261930)===0?(Fe=!0,e.memoizedState=n):(e=Yp(),me.lanes|=e,In|=e,t)}function Gh(e,t,n,i,r){var s=H.p;H.p=s!==0&&8>s?s:8;var d=z.T,v={};z.T=v,ws(e,!1,t,n);try{var E=r(),U=z.S;if(U!==null&&U(v,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var W=jy(E,i);ml(e,t,W,Mt(e))}else ml(e,t,i,Mt(e))}catch(ee){ml(e,t,{then:function(){},status:"rejected",reason:ee},Mt())}finally{H.p=s,d!==null&&v.types!==null&&(d.types=v.types),z.T=d}}function Dy(){}function xs(e,t,n,i){if(e.tag!==5)throw Error(u(476));var r=Xh(e).queue;Gh(e,r,t,F,n===null?Dy:function(){return Vh(e),n(i)})}function Xh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:F},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Vh(e){var t=Xh(e);t.next===null&&(t=e.alternate.memoizedState),ml(e,t.next.queue,{},Mt())}function Ss(){return rt(Al)}function Qh(){return Ze().memoizedState}function Zh(){return Ze().memoizedState}function Ny(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Mt();e=Zn(n);var i=Kn(t,e,n);i!==null&&(bt(i,t,n),cl(i,t,n)),t={cache:Fo()},e.payload=t;return}t=t.return}}function Ly(e,t,n){var i=Mt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},qr(e)?Jh(t,n):(n=Ho(e,t,n,i),n!==null&&(bt(n,e,i),Fh(n,t,i)))}function Kh(e,t,n){var i=Mt();ml(e,t,n,i)}function ml(e,t,n,i){var r={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(qr(e))Jh(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,v=s(d,n);if(r.hasEagerState=!0,r.eagerState=v,Tt(v,d))return Sr(e,t,r,0),Le===null&&xr(),!1}catch{}finally{}if(n=Ho(e,t,r,i),n!==null)return bt(n,e,i),Fh(n,t,i),!0}return!1}function ws(e,t,n,i){if(i={lane:2,revertLane:ec(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},qr(e)){if(t)throw Error(u(479))}else t=Ho(e,n,i,2),t!==null&&bt(t,e,2)}function qr(e){var t=e.alternate;return e===me||t!==null&&t===me}function Jh(e,t){si=Nr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fh(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,td(e,n)}}var vl={readContext:rt,use:Br,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe};vl.useEffectEvent=Xe;var Wh={readContext:rt,use:Br,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Nh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Hr(4194308,4,Uh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hr(4194308,4,e,t)},useInsertionEffect:function(e,t){Hr(4,2,e,t)},useMemo:function(e,t){var n=dt();t=t===void 0?null:t;var i=e();if(za){Hn(!0);try{e()}finally{Hn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=dt();if(n!==void 0){var r=n(t);if(za){Hn(!0);try{n(t)}finally{Hn(!1)}}}else r=t;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=Ly.bind(null,me,e),[i.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:function(e){e=ms(e);var t=e.queue,n=Kh.bind(null,me,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ys,useDeferredValue:function(e,t){var n=dt();return bs(n,e,t)},useTransition:function(){var e=ms(!1);return e=Gh.bind(null,me,e.queue,!0,!1),dt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=me,r=dt();if(Ee){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Le===null)throw Error(u(349));(Se&127)!==0||yh(i,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,Nh(xh.bind(null,i,s,e),[e]),i.flags|=2048,fi(9,{destroy:void 0},bh.bind(null,i,s,n,t),null),n},useId:function(){var e=dt(),t=Le.identifierPrefix;if(Ee){var n=an,i=nn;n=(i&~(1<<32-Ct(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Lr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Oy++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ss,useFormState:zh,useActionState:zh,useOptimistic:function(e){var t=dt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ws.bind(null,me,!0,n),n.dispatch=t,[e,t]},useMemoCache:ds,useCacheRefresh:function(){return dt().memoizedState=Ny.bind(null,me)},useEffectEvent:function(e){var t=dt(),n={impl:e};return t.memoizedState=n,function(){if((Oe&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},Es={readContext:rt,use:Br,useCallback:$h,useContext:rt,useEffect:gs,useImperativeHandle:Hh,useInsertionEffect:kh,useLayoutEffect:Bh,useMemo:qh,useReducer:Ur,useRef:Dh,useState:function(){return Ur(bn)},useDebugValue:ys,useDeferredValue:function(e,t){var n=Ze();return Yh(n,Ae.memoizedState,e,t)},useTransition:function(){var e=Ur(bn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:pl(e),t]},useSyncExternalStore:gh,useId:Qh,useHostTransitionStatus:Ss,useFormState:_h,useActionState:_h,useOptimistic:function(e,t){var n=Ze();return Eh(n,Ae,e,t)},useMemoCache:ds,useCacheRefresh:Zh};Es.useEffectEvent=Lh;var Ph={readContext:rt,use:Br,useCallback:$h,useContext:rt,useEffect:gs,useImperativeHandle:Hh,useInsertionEffect:kh,useLayoutEffect:Bh,useMemo:qh,useReducer:ps,useRef:Dh,useState:function(){return ps(bn)},useDebugValue:ys,useDeferredValue:function(e,t){var n=Ze();return Ae===null?bs(n,e,t):Yh(n,Ae.memoizedState,e,t)},useTransition:function(){var e=ps(bn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:pl(e),t]},useSyncExternalStore:gh,useId:Qh,useHostTransitionStatus:Ss,useFormState:Ah,useActionState:Ah,useOptimistic:function(e,t){var n=Ze();return Ae!==null?Eh(n,Ae,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ds,useCacheRefresh:Zh};Ph.useEffectEvent=Lh;function Cs(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:S({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ts={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Mt(),r=Zn(i);r.payload=t,n!=null&&(r.callback=n),t=Kn(e,r,i),t!==null&&(bt(t,e,i),cl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Mt(),r=Zn(i);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Kn(e,r,i),t!==null&&(bt(t,e,i),cl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Mt(),i=Zn(n);i.tag=2,t!=null&&(i.callback=t),t=Kn(e,i,n),t!==null&&(bt(t,e,n),cl(t,e,n))}};function Ih(e,t,n,i,r,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,d):t.prototype&&t.prototype.isPureReactComponent?!nl(n,i)||!nl(r,s):!0}function ep(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Ts.enqueueReplaceState(t,t.state,null)}function _a(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=S({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function tp(e){br(e)}function np(e){console.error(e)}function ap(e){br(e)}function Yr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function ip(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Rs(e,t,n){return n=Zn(n),n.tag=3,n.payload={element:null},n.callback=function(){Yr(e,t)},n}function lp(e){return e=Zn(e),e.tag=3,e}function rp(e,t,n,i){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var s=i.value;e.payload=function(){return r(s)},e.callback=function(){ip(t,n,i)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){ip(t,n,i),typeof r!="function"&&(ea===null?ea=new Set([this]):ea.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})})}function ky(e,t,n,i,r){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ai(t,n,r,!0),n=jt.current,n!==null){switch(n.tag){case 31:case 13:return Xt===null?eu():n.alternate===null&&Ve===0&&(Ve=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===zr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Ws(e,i,r)),!1;case 22:return n.flags|=65536,i===zr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Ws(e,i,r)),!1}throw Error(u(435,n.tag))}return Ws(e,i,r),eu(),!1}if(Ee)return t=jt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,i!==Vo&&(e=Error(u(422),{cause:i}),ll($t(e,n)))):(i!==Vo&&(t=Error(u(423),{cause:i}),ll($t(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=$t(i,n),r=Rs(e.stateNode,i,r),ns(e,r),Ve!==4&&(Ve=2)),!1;var s=Error(u(520),{cause:i});if(s=$t(s,n),Cl===null?Cl=[s]:Cl.push(s),Ve!==4&&(Ve=2),t===null)return!0;i=$t(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=Rs(n.stateNode,i,e),ns(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ea===null||!ea.has(s))))return n.flags|=65536,r&=-r,n.lanes|=r,r=lp(r),rp(r,e,n,i),ns(n,r),!1}n=n.return}while(n!==null);return!1}var js=Error(u(461)),Fe=!1;function ut(e,t,n,i){t.child=e===null?ch(t,null,n,i):Oa(t,e.child,n,i)}function up(e,t,n,i,r){n=n.render;var s=t.ref;if("ref"in i){var d={};for(var v in i)v!=="ref"&&(d[v]=i[v])}else d=i;return Ca(t),i=os(e,t,n,d,s,r),v=ss(),e!==null&&!Fe?(cs(e,t,r),xn(e,t,r)):(Ee&&v&&Go(t),t.flags|=1,ut(e,t,i,r),t.child)}function op(e,t,n,i,r){if(e===null){var s=n.type;return typeof s=="function"&&!$o(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,sp(e,t,s,i,r)):(e=Er(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Ls(e,r)){var d=s.memoizedProps;if(n=n.compare,n=n!==null?n:nl,n(d,i)&&e.ref===t.ref)return xn(e,t,r)}return t.flags|=1,e=pn(s,i),e.ref=t.ref,e.return=t,t.child=e}function sp(e,t,n,i,r){if(e!==null){var s=e.memoizedProps;if(nl(s,i)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=i=s,Ls(e,r))(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,xn(e,t,r)}return Os(e,t,n,i,r)}function cp(e,t,n,i){var r=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~s}else i=0,t.child=null;return fp(e,t,s,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&jr(t,s!==null?s.cachePool:null),s!==null?hh(t,s):is(),ph(t);else return i=t.lanes=536870912,fp(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(jr(t,s.cachePool),hh(t,s),Fn(),t.memoizedState=null):(e!==null&&jr(t,null),is(),Fn());return ut(e,t,r,n),t.child}function gl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fp(e,t,n,i,r){var s=Po();return s=s===null?null:{parent:Ke._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&jr(t,null),is(),ph(t),e!==null&&ai(e,t,i,!0),t.childLanes=r,null}function Gr(e,t){return t=Vr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function dp(e,t,n){return Oa(t,e.child,null,n),e=Gr(t,t.pendingProps),e.flags|=2,Ot(t),t.memoizedState=null,e}function By(e,t,n){var i=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ee){if(i.mode==="hidden")return e=Gr(t,i),t.lanes=536870912,gl(null,e);if(rs(t),(e=Ue)?(e=C0(e,Gt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yn!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=Jd(e),n.return=t,t.child=n,lt=t,Ue=null)):e=null,e===null)throw Xn(t);return t.lanes=536870912,null}return Gr(t,i)}var s=e.memoizedState;if(s!==null){var d=s.dehydrated;if(rs(t),r)if(t.flags&256)t.flags&=-257,t=dp(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Fe||ai(e,t,n,!1),r=(n&e.childLanes)!==0,Fe||r){if(i=Le,i!==null&&(d=nd(i,n),d!==0&&d!==s.retryLane))throw s.retryLane=d,xa(e,d),bt(i,e,d),js;eu(),t=dp(e,t,n)}else e=s.treeContext,Ue=Vt(d.nextSibling),lt=t,Ee=!0,Gn=null,Gt=!1,e!==null&&Pd(t,e),t=Gr(t,i),t.flags|=4096;return t}return e=pn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Xr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Os(e,t,n,i,r){return Ca(t),n=os(e,t,n,i,void 0,r),i=ss(),e!==null&&!Fe?(cs(e,t,r),xn(e,t,r)):(Ee&&i&&Go(t),t.flags|=1,ut(e,t,n,r),t.child)}function hp(e,t,n,i,r,s){return Ca(t),t.updateQueue=null,n=vh(t,i,n,r),mh(e),i=ss(),e!==null&&!Fe?(cs(e,t,s),xn(e,t,s)):(Ee&&i&&Go(t),t.flags|=1,ut(e,t,n,s),t.child)}function pp(e,t,n,i,r){if(Ca(t),t.stateNode===null){var s=Ia,d=n.contextType;typeof d=="object"&&d!==null&&(s=rt(d)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ts,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},es(t),d=n.contextType,s.context=typeof d=="object"&&d!==null?rt(d):Ia,s.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Cs(t,n,d,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(d=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),d!==s.state&&Ts.enqueueReplaceState(s,s.state,null),dl(t,i,s,r),fl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var v=t.memoizedProps,E=_a(n,v);s.props=E;var U=s.context,W=n.contextType;d=Ia,typeof W=="object"&&W!==null&&(d=rt(W));var ee=n.getDerivedStateFromProps;W=typeof ee=="function"||typeof s.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,W||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(v||U!==d)&&ep(t,s,i,d),Qn=!1;var q=t.memoizedState;s.state=q,dl(t,i,s,r),fl(),U=t.memoizedState,v||q!==U||Qn?(typeof ee=="function"&&(Cs(t,n,ee,i),U=t.memoizedState),(E=Qn||Ih(t,n,E,i,q,U,d))?(W||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=U),s.props=i,s.state=U,s.context=d,i=E):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,ts(e,t),d=t.memoizedProps,W=_a(n,d),s.props=W,ee=t.pendingProps,q=s.context,U=n.contextType,E=Ia,typeof U=="object"&&U!==null&&(E=rt(U)),v=n.getDerivedStateFromProps,(U=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==ee||q!==E)&&ep(t,s,i,E),Qn=!1,q=t.memoizedState,s.state=q,dl(t,i,s,r),fl();var Q=t.memoizedState;d!==ee||q!==Q||Qn||e!==null&&e.dependencies!==null&&Tr(e.dependencies)?(typeof v=="function"&&(Cs(t,n,v,i),Q=t.memoizedState),(W=Qn||Ih(t,n,W,i,q,Q,E)||e!==null&&e.dependencies!==null&&Tr(e.dependencies))?(U||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,Q,E),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,Q,E)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=Q),s.props=i,s.state=Q,s.context=E,i=W):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Xr(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=Oa(t,e.child,null,r),t.child=Oa(t,null,n,r)):ut(e,t,n,r),t.memoizedState=s.state,e=t.child):e=xn(e,t,r),e}function mp(e,t,n,i){return wa(),t.flags|=256,ut(e,t,n,i),t.child}var zs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _s(e){return{baseLanes:e,cachePool:ih()}}function Ms(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=_t),e}function vp(e,t,n){var i=t.pendingProps,r=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),d&&(r=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ee){if(r?Jn(t):Fn(),(e=Ue)?(e=C0(e,Gt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yn!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=Jd(e),n.return=t,t.child=n,lt=t,Ue=null)):e=null,e===null)throw Xn(t);return hc(e)?t.lanes=32:t.lanes=536870912,null}var v=i.children;return i=i.fallback,r?(Fn(),r=t.mode,v=Vr({mode:"hidden",children:v},r),i=Sa(i,r,n,null),v.return=t,i.return=t,v.sibling=i,t.child=v,i=t.child,i.memoizedState=_s(n),i.childLanes=Ms(e,d,n),t.memoizedState=zs,gl(null,i)):(Jn(t),As(t,v))}var E=e.memoizedState;if(E!==null&&(v=E.dehydrated,v!==null)){if(s)t.flags&256?(Jn(t),t.flags&=-257,t=Ds(e,t,n)):t.memoizedState!==null?(Fn(),t.child=e.child,t.flags|=128,t=null):(Fn(),v=i.fallback,r=t.mode,i=Vr({mode:"visible",children:i.children},r),v=Sa(v,r,n,null),v.flags|=2,i.return=t,v.return=t,i.sibling=v,t.child=i,Oa(t,e.child,null,n),i=t.child,i.memoizedState=_s(n),i.childLanes=Ms(e,d,n),t.memoizedState=zs,t=gl(null,i));else if(Jn(t),hc(v)){if(d=v.nextSibling&&v.nextSibling.dataset,d)var U=d.dgst;d=U,i=Error(u(419)),i.stack="",i.digest=d,ll({value:i,source:null,stack:null}),t=Ds(e,t,n)}else if(Fe||ai(e,t,n,!1),d=(n&e.childLanes)!==0,Fe||d){if(d=Le,d!==null&&(i=nd(d,n),i!==0&&i!==E.retryLane))throw E.retryLane=i,xa(e,i),bt(d,e,i),js;dc(v)||eu(),t=Ds(e,t,n)}else dc(v)?(t.flags|=192,t.child=e.child,t=null):(e=E.treeContext,Ue=Vt(v.nextSibling),lt=t,Ee=!0,Gn=null,Gt=!1,e!==null&&Pd(t,e),t=As(t,i.children),t.flags|=4096);return t}return r?(Fn(),v=i.fallback,r=t.mode,E=e.child,U=E.sibling,i=pn(E,{mode:"hidden",children:i.children}),i.subtreeFlags=E.subtreeFlags&65011712,U!==null?v=pn(U,v):(v=Sa(v,r,n,null),v.flags|=2),v.return=t,i.return=t,i.sibling=v,t.child=i,gl(null,i),i=t.child,v=e.child.memoizedState,v===null?v=_s(n):(r=v.cachePool,r!==null?(E=Ke._currentValue,r=r.parent!==E?{parent:E,pool:E}:r):r=ih(),v={baseLanes:v.baseLanes|n,cachePool:r}),i.memoizedState=v,i.childLanes=Ms(e,d,n),t.memoizedState=zs,gl(e.child,i)):(Jn(t),n=e.child,e=n.sibling,n=pn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function As(e,t){return t=Vr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Vr(e,t){return e=Rt(22,e,null,t),e.lanes=0,e}function Ds(e,t,n){return Oa(t,e.child,null,n),e=As(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gp(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ko(e.return,t,n)}function Ns(e,t,n,i,r,s){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,treeForkCount:s}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=i,d.tail=n,d.tailMode=r,d.treeForkCount=s)}function yp(e,t,n){var i=t.pendingProps,r=i.revealOrder,s=i.tail;i=i.children;var d=Qe.current,v=(d&2)!==0;if(v?(d=d&1|2,t.flags|=128):d&=1,ie(Qe,d),ut(e,t,i,n),i=Ee?il:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gp(e,n,t);else if(e.tag===19)gp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Dr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Ns(t,!1,r,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Dr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Ns(t,!0,n,null,s,i);break;case"together":Ns(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ai(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ls(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Tr(e)))}function Uy(e,t,n){switch(t.tag){case 3:ke(t,t.stateNode.containerInfo),Vn(t,Ke,e.memoizedState.cache),wa();break;case 27:case 5:St(t);break;case 4:ke(t,t.stateNode.containerInfo);break;case 10:Vn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,rs(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Jn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?vp(e,t,n):(Jn(t),e=xn(e,t,n),e!==null?e.sibling:null);Jn(t);break;case 19:var r=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(ai(e,t,n,!1),i=(n&t.childLanes)!==0),r){if(i)return yp(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ie(Qe,Qe.current),i)break;return null;case 22:return t.lanes=0,cp(e,t,n,t.pendingProps);case 24:Vn(t,Ke,e.memoizedState.cache)}return xn(e,t,n)}function bp(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Fe=!0;else{if(!Ls(e,n)&&(t.flags&128)===0)return Fe=!1,Uy(e,t,n);Fe=(e.flags&131072)!==0}else Fe=!1,Ee&&(t.flags&1048576)!==0&&Wd(t,il,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Ra(t.elementType),t.type=e,typeof e=="function")$o(e)?(i=_a(e,i),t.tag=1,t=pp(null,t,e,i,n)):(t.tag=0,t=Os(null,t,e,i,n));else{if(e!=null){var r=e.$$typeof;if(r===G){t.tag=11,t=up(null,t,e,i,n);break e}else if(r===J){t.tag=14,t=op(null,t,e,i,n);break e}}throw t=ne(e)||e,Error(u(306,t,""))}}return t;case 0:return Os(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,r=_a(i,t.pendingProps),pp(e,t,i,r,n);case 3:e:{if(ke(t,t.stateNode.containerInfo),e===null)throw Error(u(387));i=t.pendingProps;var s=t.memoizedState;r=s.element,ts(e,t),dl(t,i,null,n);var d=t.memoizedState;if(i=d.cache,Vn(t,Ke,i),i!==s.cache&&Jo(t,[Ke],n,!0),fl(),i=d.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=mp(e,t,i,n);break e}else if(i!==r){r=$t(Error(u(424)),t),ll(r),t=mp(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ue=Vt(e.firstChild),lt=t,Ee=!0,Gn=null,Gt=!0,n=ch(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(wa(),i===r){t=xn(e,t,n);break e}ut(e,t,i,n)}t=t.child}return t;case 26:return Xr(e,t),e===null?(n=_0(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ee||(n=t.type,e=t.pendingProps,i=uu(he.current).createElement(n),i[it]=t,i[ht]=e,ot(i,n,e),et(i),t.stateNode=i):t.memoizedState=_0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return St(t),e===null&&Ee&&(i=t.stateNode=j0(t.type,t.pendingProps,he.current),lt=t,Gt=!0,r=Ue,ia(t.type)?(pc=r,Ue=Vt(i.firstChild)):Ue=r),ut(e,t,t.pendingProps.children,n),Xr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ee&&((r=i=Ue)&&(i=p2(i,t.type,t.pendingProps,Gt),i!==null?(t.stateNode=i,lt=t,Ue=Vt(i.firstChild),Gt=!1,r=!0):r=!1),r||Xn(t)),St(t),r=t.type,s=t.pendingProps,d=e!==null?e.memoizedProps:null,i=s.children,sc(r,s)?i=null:d!==null&&sc(r,d)&&(t.flags|=32),t.memoizedState!==null&&(r=os(e,t,zy,null,null,n),Al._currentValue=r),Xr(e,t),ut(e,t,i,n),t.child;case 6:return e===null&&Ee&&((e=n=Ue)&&(n=m2(n,t.pendingProps,Gt),n!==null?(t.stateNode=n,lt=t,Ue=null,e=!0):e=!1),e||Xn(t)),null;case 13:return vp(e,t,n);case 4:return ke(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Oa(t,null,i,n):ut(e,t,i,n),t.child;case 11:return up(e,t,t.type,t.pendingProps,n);case 7:return ut(e,t,t.pendingProps,n),t.child;case 8:return ut(e,t,t.pendingProps.children,n),t.child;case 12:return ut(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Vn(t,t.type,i.value),ut(e,t,i.children,n),t.child;case 9:return r=t.type._context,i=t.pendingProps.children,Ca(t),r=rt(r),i=i(r),t.flags|=1,ut(e,t,i,n),t.child;case 14:return op(e,t,t.type,t.pendingProps,n);case 15:return sp(e,t,t.type,t.pendingProps,n);case 19:return yp(e,t,n);case 31:return By(e,t,n);case 22:return cp(e,t,n,t.pendingProps);case 24:return Ca(t),i=rt(Ke),e===null?(r=Po(),r===null&&(r=Le,s=Fo(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=n),r=s),t.memoizedState={parent:i,cache:r},es(t),Vn(t,Ke,r)):((e.lanes&n)!==0&&(ts(e,t),dl(t,null,null,n),fl()),r=e.memoizedState,s=t.memoizedState,r.parent!==i?(r={parent:i,cache:i},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Vn(t,Ke,i)):(i=s.cache,Vn(t,Ke,i),i!==r.cache&&Jo(t,[Ke],n,!0))),ut(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Sn(e){e.flags|=4}function ks(e,t,n,i,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Qp())e.flags|=8192;else throw ja=zr,Io}else e.flags&=-16777217}function xp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!L0(t))if(Qp())e.flags|=8192;else throw ja=zr,Io}function Qr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?If():536870912,e.lanes|=t,mi|=t)}function yl(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Hy(e,t,n){var i=t.pendingProps;switch(Xo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return He(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),gn(Ke),Ce(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ni(t)?Sn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Qo())),He(t),null;case 26:var r=t.type,s=t.memoizedState;return e===null?(Sn(t),s!==null?(He(t),xp(t,s)):(He(t),ks(t,r,null,i,n))):s?s!==e.memoizedState?(Sn(t),He(t),xp(t,s)):(He(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Sn(t),He(t),ks(t,r,e,i,n)),null;case 27:if(Kt(t),n=he.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Sn(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return He(t),null}e=ae.current,ni(t)?Id(t):(e=j0(r,i,n),t.stateNode=e,Sn(t))}return He(t),null;case 5:if(Kt(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Sn(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return He(t),null}if(s=ae.current,ni(t))Id(t);else{var d=uu(he.current);switch(s){case 1:s=d.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=d.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=d.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?d.createElement("select",{is:i.is}):d.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?d.createElement(r,{is:i.is}):d.createElement(r)}}s[it]=t,s[ht]=i;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)s.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=s;e:switch(ot(s,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Sn(t)}}return He(t),ks(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Sn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(u(166));if(e=he.current,ni(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,r=lt,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[it]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||v0(e.nodeValue,n)),e||Xn(t,!0)}else e=uu(e).createTextNode(i),e[it]=t,t.stateNode=e}return He(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=ni(t),n!==null){if(e===null){if(!i)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[it]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),e=!1}else n=Qo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ot(t),t):(Ot(t),null);if((t.flags&128)!==0)throw Error(u(558))}return He(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=ni(t),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(u(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(u(317));r[it]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),r=!1}else r=Qo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Ot(t),t):(Ot(t),null)}return Ot(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==r&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Qr(t,t.updateQueue),He(t),null);case 4:return Ce(),e===null&&ic(t.stateNode.containerInfo),He(t),null;case 10:return gn(t.type),He(t),null;case 19:if(V(Qe),i=t.memoizedState,i===null)return He(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)yl(i,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Dr(e),s!==null){for(t.flags|=128,yl(i,!1),e=s.updateQueue,t.updateQueue=e,Qr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Kd(n,e),n=n.sibling;return ie(Qe,Qe.current&1|2),Ee&&mn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&wt()>Wr&&(t.flags|=128,r=!0,yl(i,!1),t.lanes=4194304)}else{if(!r)if(e=Dr(s),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Qr(t,e),yl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Ee)return He(t),null}else 2*wt()-i.renderingStartTime>Wr&&n!==536870912&&(t.flags|=128,r=!0,yl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=wt(),e.sibling=null,n=Qe.current,ie(Qe,r?n&1|2:n&1),Ee&&mn(t,i.treeForkCount),e):(He(t),null);case 22:case 23:return Ot(t),ls(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),n=t.updateQueue,n!==null&&Qr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&V(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),gn(Ke),He(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function $y(e,t){switch(Xo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(Ke),Ce(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Kt(t),null;case 31:if(t.memoizedState!==null){if(Ot(t),t.alternate===null)throw Error(u(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ot(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Qe),null;case 4:return Ce(),null;case 10:return gn(t.type),null;case 22:case 23:return Ot(t),ls(),e!==null&&V(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return gn(Ke),null;case 25:return null;default:return null}}function Sp(e,t){switch(Xo(t),t.tag){case 3:gn(Ke),Ce();break;case 26:case 27:case 5:Kt(t);break;case 4:Ce();break;case 31:t.memoizedState!==null&&Ot(t);break;case 13:Ot(t);break;case 19:V(Qe);break;case 10:gn(t.type);break;case 22:case 23:Ot(t),ls(),e!==null&&V(Ta);break;case 24:gn(Ke)}}function bl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){i=void 0;var s=n.create,d=n.inst;i=s(),d.destroy=i}n=n.next}while(n!==r)}}catch(v){Me(t,t.return,v)}}function Wn(e,t,n){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var s=r.next;i=s;do{if((i.tag&e)===e){var d=i.inst,v=d.destroy;if(v!==void 0){d.destroy=void 0,r=t;var E=n,U=v;try{U()}catch(W){Me(r,E,W)}}}i=i.next}while(i!==s)}}catch(W){Me(t,t.return,W)}}function wp(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{dh(t,n)}catch(i){Me(e,e.return,i)}}}function Ep(e,t,n){n.props=_a(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Me(e,t,i)}}function xl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(r){Me(e,t,r)}}function ln(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(r){Me(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Me(e,t,r)}else n.current=null}function Cp(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){Me(e,e.return,r)}}function Bs(e,t,n){try{var i=e.stateNode;o2(i,e.type,n,t),i[ht]=t}catch(r){Me(e,e.return,r)}}function Tp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ia(e.type)||e.tag===4}function Us(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hs(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dn));else if(i!==4&&(i===27&&ia(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Hs(e,t,n),e=e.sibling;e!==null;)Hs(e,t,n),e=e.sibling}function Zr(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ia(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zr(e,t,n),e=e.sibling;e!==null;)Zr(e,t,n),e=e.sibling}function Rp(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);ot(t,i,n),t[it]=e,t[ht]=n}catch(s){Me(e,e.return,s)}}var wn=!1,We=!1,$s=!1,jp=typeof WeakSet=="function"?WeakSet:Set,tt=null;function qy(e,t){if(e=e.containerInfo,uc=pu,e=Hd(e),Do(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var d=0,v=-1,E=-1,U=0,W=0,ee=e,q=null;t:for(;;){for(var Q;ee!==n||r!==0&&ee.nodeType!==3||(v=d+r),ee!==s||i!==0&&ee.nodeType!==3||(E=d+i),ee.nodeType===3&&(d+=ee.nodeValue.length),(Q=ee.firstChild)!==null;)q=ee,ee=Q;for(;;){if(ee===e)break t;if(q===n&&++U===r&&(v=d),q===s&&++W===i&&(E=d),(Q=ee.nextSibling)!==null)break;ee=q,q=ee.parentNode}ee=Q}n=v===-1||E===-1?null:{start:v,end:E}}else n=null}n=n||{start:0,end:0}}else n=null;for(oc={focusedElem:e,selectionRange:n},pu=!1,tt=t;tt!==null;)if(t=tt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,tt=e;else for(;tt!==null;){switch(t=tt,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,r=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var ue=_a(n.type,r);e=i.getSnapshotBeforeUpdate(ue,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(de){Me(n,n.return,de)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)fc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":fc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,tt=e;break}tt=t.return}}function Op(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Cn(e,n),i&4&&bl(5,n);break;case 1:if(Cn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){Me(n,n.return,d)}else{var r=_a(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Me(n,n.return,d)}}i&64&&wp(n),i&512&&xl(n,n.return);break;case 3:if(Cn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{dh(e,t)}catch(d){Me(n,n.return,d)}}break;case 27:t===null&&i&4&&Rp(n);case 26:case 5:Cn(e,n),t===null&&i&4&&Cp(n),i&512&&xl(n,n.return);break;case 12:Cn(e,n);break;case 31:Cn(e,n),i&4&&Mp(e,n);break;case 13:Cn(e,n),i&4&&Ap(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Fy.bind(null,n),v2(e,n))));break;case 22:if(i=n.memoizedState!==null||wn,!i){t=t!==null&&t.memoizedState!==null||We,r=wn;var s=We;wn=i,(We=t)&&!s?Tn(e,n,(n.subtreeFlags&8772)!==0):Cn(e,n),wn=r,We=s}break;case 30:break;default:Cn(e,n)}}function zp(e){var t=e.alternate;t!==null&&(e.alternate=null,zp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&vo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,mt=!1;function En(e,t,n){for(n=n.child;n!==null;)_p(e,t,n),n=n.sibling}function _p(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Xi,n)}catch{}switch(n.tag){case 26:We||ln(n,t),En(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:We||ln(n,t);var i=Ye,r=mt;ia(n.type)&&(Ye=n.stateNode,mt=!1),En(e,t,n),zl(n.stateNode),Ye=i,mt=r;break;case 5:We||ln(n,t);case 6:if(i=Ye,r=mt,Ye=null,En(e,t,n),Ye=i,mt=r,Ye!==null)if(mt)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(n.stateNode)}catch(s){Me(n,t,s)}else try{Ye.removeChild(n.stateNode)}catch(s){Me(n,t,s)}break;case 18:Ye!==null&&(mt?(e=Ye,w0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ei(e)):w0(Ye,n.stateNode));break;case 4:i=Ye,r=mt,Ye=n.stateNode.containerInfo,mt=!0,En(e,t,n),Ye=i,mt=r;break;case 0:case 11:case 14:case 15:Wn(2,n,t),We||Wn(4,n,t),En(e,t,n);break;case 1:We||(ln(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Ep(n,t,i)),En(e,t,n);break;case 21:En(e,t,n);break;case 22:We=(i=We)||n.memoizedState!==null,En(e,t,n),We=i;break;default:En(e,t,n)}}function Mp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ei(e)}catch(n){Me(t,t.return,n)}}}function Ap(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ei(e)}catch(n){Me(t,t.return,n)}}function Yy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new jp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new jp),t;default:throw Error(u(435,e.tag))}}function Kr(e,t){var n=Yy(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var r=Wy.bind(null,e,i);i.then(r,r)}})}function vt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i],s=e,d=t,v=d;e:for(;v!==null;){switch(v.tag){case 27:if(ia(v.type)){Ye=v.stateNode,mt=!1;break e}break;case 5:Ye=v.stateNode,mt=!1;break e;case 3:case 4:Ye=v.stateNode.containerInfo,mt=!0;break e}v=v.return}if(Ye===null)throw Error(u(160));_p(s,d,r),Ye=null,mt=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Dp(t,e),t=t.sibling}var Ft=null;function Dp(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vt(t,e),gt(e),i&4&&(Wn(3,e,e.return),bl(3,e),Wn(5,e,e.return));break;case 1:vt(t,e),gt(e),i&512&&(We||n===null||ln(n,n.return)),i&64&&wn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var r=Ft;if(vt(t,e),gt(e),i&512&&(We||n===null||ln(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":s=r.getElementsByTagName("title")[0],(!s||s[Zi]||s[it]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(i),r.head.insertBefore(s,r.querySelector("head > title"))),ot(s,i,n),s[it]=e,et(s),i=s;break e;case"link":var d=D0("link","href",r).get(i+(n.href||""));if(d){for(var v=0;v<d.length;v++)if(s=d[v],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(v,1);break t}}s=r.createElement(i),ot(s,i,n),r.head.appendChild(s);break;case"meta":if(d=D0("meta","content",r).get(i+(n.content||""))){for(v=0;v<d.length;v++)if(s=d[v],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(v,1);break t}}s=r.createElement(i),ot(s,i,n),r.head.appendChild(s);break;default:throw Error(u(468,i))}s[it]=e,et(s),i=s}e.stateNode=i}else N0(r,e.type,e.stateNode);else e.stateNode=A0(r,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?N0(r,e.type,e.stateNode):A0(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Bs(e,e.memoizedProps,n.memoizedProps)}break;case 27:vt(t,e),gt(e),i&512&&(We||n===null||ln(n,n.return)),n!==null&&i&4&&Bs(e,e.memoizedProps,n.memoizedProps);break;case 5:if(vt(t,e),gt(e),i&512&&(We||n===null||ln(n,n.return)),e.flags&32){r=e.stateNode;try{Qa(r,"")}catch(ue){Me(e,e.return,ue)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,Bs(e,r,n!==null?n.memoizedProps:r)),i&1024&&($s=!0);break;case 6:if(vt(t,e),gt(e),i&4){if(e.stateNode===null)throw Error(u(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(ue){Me(e,e.return,ue)}}break;case 3:if(cu=null,r=Ft,Ft=ou(t.containerInfo),vt(t,e),Ft=r,gt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ei(t.containerInfo)}catch(ue){Me(e,e.return,ue)}$s&&($s=!1,Np(e));break;case 4:i=Ft,Ft=ou(e.stateNode.containerInfo),vt(t,e),gt(e),Ft=i;break;case 12:vt(t,e),gt(e);break;case 31:vt(t,e),gt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Kr(e,i)));break;case 13:vt(t,e),gt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Fr=wt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Kr(e,i)));break;case 22:r=e.memoizedState!==null;var E=n!==null&&n.memoizedState!==null,U=wn,W=We;if(wn=U||r,We=W||E,vt(t,e),We=W,wn=U,gt(e),i&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||E||wn||We||Ma(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){E=n=t;try{if(s=E.stateNode,r)d=s.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{v=E.stateNode;var ee=E.memoizedProps.style,q=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;v.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(ue){Me(E,E.return,ue)}}}else if(t.tag===6){if(n===null){E=t;try{E.stateNode.nodeValue=r?"":E.memoizedProps}catch(ue){Me(E,E.return,ue)}}}else if(t.tag===18){if(n===null){E=t;try{var Q=E.stateNode;r?E0(Q,!0):E0(E.stateNode,!1)}catch(ue){Me(E,E.return,ue)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Kr(e,n))));break;case 19:vt(t,e),gt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Kr(e,i)));break;case 30:break;case 21:break;default:vt(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Tp(i)){n=i;break}i=i.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var r=n.stateNode,s=Us(e);Zr(e,s,r);break;case 5:var d=n.stateNode;n.flags&32&&(Qa(d,""),n.flags&=-33);var v=Us(e);Zr(e,v,d);break;case 3:case 4:var E=n.stateNode.containerInfo,U=Us(e);Hs(e,U,E);break;default:throw Error(u(161))}}catch(W){Me(e,e.return,W)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Np(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Np(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Cn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Op(e,t.alternate,t),t=t.sibling}function Ma(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wn(4,t,t.return),Ma(t);break;case 1:ln(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Ep(t,t.return,n),Ma(t);break;case 27:zl(t.stateNode);case 26:case 5:ln(t,t.return),Ma(t);break;case 22:t.memoizedState===null&&Ma(t);break;case 30:Ma(t);break;default:Ma(t)}e=e.sibling}}function Tn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,r=e,s=t,d=s.flags;switch(s.tag){case 0:case 11:case 15:Tn(r,s,n),bl(4,s);break;case 1:if(Tn(r,s,n),i=s,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(U){Me(i,i.return,U)}if(i=s,r=i.updateQueue,r!==null){var v=i.stateNode;try{var E=r.shared.hiddenCallbacks;if(E!==null)for(r.shared.hiddenCallbacks=null,r=0;r<E.length;r++)fh(E[r],v)}catch(U){Me(i,i.return,U)}}n&&d&64&&wp(s),xl(s,s.return);break;case 27:Rp(s);case 26:case 5:Tn(r,s,n),n&&i===null&&d&4&&Cp(s),xl(s,s.return);break;case 12:Tn(r,s,n);break;case 31:Tn(r,s,n),n&&d&4&&Mp(r,s);break;case 13:Tn(r,s,n),n&&d&4&&Ap(r,s);break;case 22:s.memoizedState===null&&Tn(r,s,n),xl(s,s.return);break;case 30:break;default:Tn(r,s,n)}t=t.sibling}}function qs(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&rl(n))}function Ys(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&rl(e))}function Wt(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Lp(e,t,n,i),t=t.sibling}function Lp(e,t,n,i){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Wt(e,t,n,i),r&2048&&bl(9,t);break;case 1:Wt(e,t,n,i);break;case 3:Wt(e,t,n,i),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&rl(e)));break;case 12:if(r&2048){Wt(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,d=s.id,v=s.onPostCommit;typeof v=="function"&&v(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){Me(t,t.return,E)}}else Wt(e,t,n,i);break;case 31:Wt(e,t,n,i);break;case 13:Wt(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,d=t.alternate,t.memoizedState!==null?s._visibility&2?Wt(e,t,n,i):Sl(e,t):s._visibility&2?Wt(e,t,n,i):(s._visibility|=2,di(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),r&2048&&qs(d,t);break;case 24:Wt(e,t,n,i),r&2048&&Ys(t.alternate,t);break;default:Wt(e,t,n,i)}}function di(e,t,n,i,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,d=t,v=n,E=i,U=d.flags;switch(d.tag){case 0:case 11:case 15:di(s,d,v,E,r),bl(8,d);break;case 23:break;case 22:var W=d.stateNode;d.memoizedState!==null?W._visibility&2?di(s,d,v,E,r):Sl(s,d):(W._visibility|=2,di(s,d,v,E,r)),r&&U&2048&&qs(d.alternate,d);break;case 24:di(s,d,v,E,r),r&&U&2048&&Ys(d.alternate,d);break;default:di(s,d,v,E,r)}t=t.sibling}}function Sl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,r=i.flags;switch(i.tag){case 22:Sl(n,i),r&2048&&qs(i.alternate,i);break;case 24:Sl(n,i),r&2048&&Ys(i.alternate,i);break;default:Sl(n,i)}t=t.sibling}}var wl=8192;function hi(e,t,n){if(e.subtreeFlags&wl)for(e=e.child;e!==null;)kp(e,t,n),e=e.sibling}function kp(e,t,n){switch(e.tag){case 26:hi(e,t,n),e.flags&wl&&e.memoizedState!==null&&O2(n,Ft,e.memoizedState,e.memoizedProps);break;case 5:hi(e,t,n);break;case 3:case 4:var i=Ft;Ft=ou(e.stateNode.containerInfo),hi(e,t,n),Ft=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=wl,wl=16777216,hi(e,t,n),wl=i):hi(e,t,n));break;default:hi(e,t,n)}}function Bp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function El(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];tt=i,Hp(i,e)}Bp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Up(e),e=e.sibling}function Up(e){switch(e.tag){case 0:case 11:case 15:El(e),e.flags&2048&&Wn(9,e,e.return);break;case 3:El(e);break;case 12:El(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Jr(e)):El(e);break;default:El(e)}}function Jr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];tt=i,Hp(i,e)}Bp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wn(8,t,t.return),Jr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Jr(t));break;default:Jr(t)}e=e.sibling}}function Hp(e,t){for(;tt!==null;){var n=tt;switch(n.tag){case 0:case 11:case 15:Wn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:rl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,tt=i;else e:for(n=e;tt!==null;){i=tt;var r=i.sibling,s=i.return;if(zp(i),i===n){tt=null;break e}if(r!==null){r.return=s,tt=r;break e}tt=s}}}var Gy={getCacheForType:function(e){var t=rt(Ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return rt(Ke).controller.signal}},Xy=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Le=null,be=null,Se=0,_e=0,zt=null,Pn=!1,pi=!1,Gs=!1,Rn=0,Ve=0,In=0,Aa=0,Xs=0,_t=0,mi=0,Cl=null,yt=null,Vs=!1,Fr=0,$p=0,Wr=1/0,Pr=null,ea=null,Ie=0,ta=null,vi=null,jn=0,Qs=0,Zs=null,qp=null,Tl=0,Ks=null;function Mt(){return(Oe&2)!==0&&Se!==0?Se&-Se:z.T!==null?ec():ad()}function Yp(){if(_t===0)if((Se&536870912)===0||Ee){var e=rr;rr<<=1,(rr&3932160)===0&&(rr=262144),_t=e}else _t=536870912;return e=jt.current,e!==null&&(e.flags|=32),_t}function bt(e,t,n){(e===Le&&(_e===2||_e===9)||e.cancelPendingCommit!==null)&&(gi(e,0),na(e,Se,_t,!1)),Qi(e,n),((Oe&2)===0||e!==Le)&&(e===Le&&((Oe&2)===0&&(Aa|=n),Ve===4&&na(e,Se,_t,!1)),rn(e))}function Gp(e,t,n){if((Oe&6)!==0)throw Error(u(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Vi(e,t),r=i?Zy(e,t):Fs(e,t,!0),s=i;do{if(r===0){pi&&!i&&na(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!Vy(n)){r=Fs(e,t,!1),s=!1;continue}if(r===2){if(s=t,e.errorRecoveryDisabledLanes&s)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var v=e;r=Cl;var E=v.current.memoizedState.isDehydrated;if(E&&(gi(v,d).flags|=256),d=Fs(v,d,!1),d!==2){if(Gs&&!E){v.errorRecoveryDisabledLanes|=s,Aa|=s,r=4;break e}s=yt,yt=r,s!==null&&(yt===null?yt=s:yt.push.apply(yt,s))}r=d}if(s=!1,r!==2)continue}}if(r===1){gi(e,0),na(e,t,0,!0);break}e:{switch(i=e,s=r,s){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:na(i,t,_t,!Pn);break e;case 2:yt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(r=Fr+300-wt(),10<r)){if(na(i,t,_t,!Pn),or(i,0,!0)!==0)break e;jn=t,i.timeoutHandle=x0(Xp.bind(null,i,n,yt,Pr,Vs,t,_t,Aa,mi,Pn,s,"Throttled",-0,0),r);break e}Xp(i,n,yt,Pr,Vs,t,_t,Aa,mi,Pn,s,null,-0,0)}}break}while(!0);rn(e)}function Xp(e,t,n,i,r,s,d,v,E,U,W,ee,q,Q){if(e.timeoutHandle=-1,ee=t.subtreeFlags,ee&8192||(ee&16785408)===16785408){ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dn},kp(t,s,ee);var ue=(s&62914560)===s?Fr-wt():(s&4194048)===s?$p-wt():0;if(ue=z2(ee,ue),ue!==null){jn=s,e.cancelPendingCommit=ue(Pp.bind(null,e,t,s,n,i,r,d,v,E,W,ee,null,q,Q)),na(e,s,d,!U);return}}Pp(e,t,s,n,i,r,d,v,E)}function Vy(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Tt(s(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function na(e,t,n,i){t&=~Xs,t&=~Aa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var r=t;0<r;){var s=31-Ct(r),d=1<<s;i[s]=-1,r&=~d}n!==0&&ed(e,n,t)}function Ir(){return(Oe&6)===0?(Rl(0),!1):!0}function Js(){if(be!==null){if(_e===0)var e=be.return;else e=be,vn=Ea=null,fs(e),ui=null,ol=0,e=be;for(;e!==null;)Sp(e.alternate,e),e=e.return;be=null}}function gi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,f2(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),jn=0,Js(),Le=e,be=n=pn(e.current,null),Se=t,_e=0,zt=null,Pn=!1,pi=Vi(e,t),Gs=!1,mi=_t=Xs=Aa=In=Ve=0,yt=Cl=null,Vs=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-Ct(i),s=1<<r;t|=e[r],i&=~s}return Rn=t,xr(),n}function Vp(e,t){me=null,z.H=vl,t===ri||t===Or?(t=uh(),_e=3):t===Io?(t=uh(),_e=4):_e=t===js?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,zt=t,be===null&&(Ve=1,Yr(e,$t(t,e.current)))}function Qp(){var e=jt.current;return e===null?!0:(Se&4194048)===Se?Xt===null:(Se&62914560)===Se||(Se&536870912)!==0?e===Xt:!1}function Zp(){var e=z.H;return z.H=vl,e===null?vl:e}function Kp(){var e=z.A;return z.A=Gy,e}function eu(){Ve=4,Pn||(Se&4194048)!==Se&&jt.current!==null||(pi=!0),(In&134217727)===0&&(Aa&134217727)===0||Le===null||na(Le,Se,_t,!1)}function Fs(e,t,n){var i=Oe;Oe|=2;var r=Zp(),s=Kp();(Le!==e||Se!==t)&&(Pr=null,gi(e,t)),t=!1;var d=Ve;e:do try{if(_e!==0&&be!==null){var v=be,E=zt;switch(_e){case 8:Js(),d=6;break e;case 3:case 2:case 9:case 6:jt.current===null&&(t=!0);var U=_e;if(_e=0,zt=null,yi(e,v,E,U),n&&pi){d=0;break e}break;default:U=_e,_e=0,zt=null,yi(e,v,E,U)}}Qy(),d=Ve;break}catch(W){Vp(e,W)}while(!0);return t&&e.shellSuspendCounter++,vn=Ea=null,Oe=i,z.H=r,z.A=s,be===null&&(Le=null,Se=0,xr()),d}function Qy(){for(;be!==null;)Jp(be)}function Zy(e,t){var n=Oe;Oe|=2;var i=Zp(),r=Kp();Le!==e||Se!==t?(Pr=null,Wr=wt()+500,gi(e,t)):pi=Vi(e,t);e:do try{if(_e!==0&&be!==null){t=be;var s=zt;t:switch(_e){case 1:_e=0,zt=null,yi(e,t,s,1);break;case 2:case 9:if(lh(s)){_e=0,zt=null,Fp(t);break}t=function(){_e!==2&&_e!==9||Le!==e||(_e=7),rn(e)},s.then(t,t);break e;case 3:_e=7;break e;case 4:_e=5;break e;case 7:lh(s)?(_e=0,zt=null,Fp(t)):(_e=0,zt=null,yi(e,t,s,7));break;case 5:var d=null;switch(be.tag){case 26:d=be.memoizedState;case 5:case 27:var v=be;if(d?L0(d):v.stateNode.complete){_e=0,zt=null;var E=v.sibling;if(E!==null)be=E;else{var U=v.return;U!==null?(be=U,tu(U)):be=null}break t}}_e=0,zt=null,yi(e,t,s,5);break;case 6:_e=0,zt=null,yi(e,t,s,6);break;case 8:Js(),Ve=6;break e;default:throw Error(u(462))}}Ky();break}catch(W){Vp(e,W)}while(!0);return vn=Ea=null,z.H=i,z.A=r,Oe=n,be!==null?0:(Le=null,Se=0,xr(),Ve)}function Ky(){for(;be!==null&&!gg();)Jp(be)}function Jp(e){var t=bp(e.alternate,e,Rn);e.memoizedProps=e.pendingProps,t===null?tu(e):be=t}function Fp(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=hp(n,t,t.pendingProps,t.type,void 0,Se);break;case 11:t=hp(n,t,t.pendingProps,t.type.render,t.ref,Se);break;case 5:fs(t);default:Sp(n,t),t=be=Kd(t,Rn),t=bp(n,t,Rn)}e.memoizedProps=e.pendingProps,t===null?tu(e):be=t}function yi(e,t,n,i){vn=Ea=null,fs(t),ui=null,ol=0;var r=t.return;try{if(ky(e,r,t,n,Se)){Ve=1,Yr(e,$t(n,e.current)),be=null;return}}catch(s){if(r!==null)throw be=r,s;Ve=1,Yr(e,$t(n,e.current)),be=null;return}t.flags&32768?(Ee||i===1?e=!0:pi||(Se&536870912)!==0?e=!1:(Pn=e=!0,(i===2||i===9||i===3||i===6)&&(i=jt.current,i!==null&&i.tag===13&&(i.flags|=16384))),Wp(t,e)):tu(t)}function tu(e){var t=e;do{if((t.flags&32768)!==0){Wp(t,Pn);return}e=t.return;var n=Hy(t.alternate,t,Rn);if(n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Ve===0&&(Ve=5)}function Wp(e,t){do{var n=$y(e.alternate,e);if(n!==null){n.flags&=32767,be=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){be=e;return}be=e=n}while(e!==null);Ve=6,be=null}function Pp(e,t,n,i,r,s,d,v,E){e.cancelPendingCommit=null;do nu();while(Ie!==0);if((Oe&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(s=t.lanes|t.childLanes,s|=Uo,jg(e,n,s,d,v,E),e===Le&&(be=Le=null,Se=0),vi=t,ta=e,jn=n,Qs=s,Zs=r,qp=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Py(ir,function(){return a0(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=z.T,z.T=null,r=H.p,H.p=2,d=Oe,Oe|=4;try{qy(e,t,n)}finally{Oe=d,H.p=r,z.T=i}}Ie=1,Ip(),e0(),t0()}}function Ip(){if(Ie===1){Ie=0;var e=ta,t=vi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=z.T,z.T=null;var i=H.p;H.p=2;var r=Oe;Oe|=4;try{Dp(t,e);var s=oc,d=Hd(e.containerInfo),v=s.focusedElem,E=s.selectionRange;if(d!==v&&v&&v.ownerDocument&&Ud(v.ownerDocument.documentElement,v)){if(E!==null&&Do(v)){var U=E.start,W=E.end;if(W===void 0&&(W=U),"selectionStart"in v)v.selectionStart=U,v.selectionEnd=Math.min(W,v.value.length);else{var ee=v.ownerDocument||document,q=ee&&ee.defaultView||window;if(q.getSelection){var Q=q.getSelection(),ue=v.textContent.length,de=Math.min(E.start,ue),Ne=E.end===void 0?de:Math.min(E.end,ue);!Q.extend&&de>Ne&&(d=Ne,Ne=de,de=d);var A=Bd(v,de),j=Bd(v,Ne);if(A&&j&&(Q.rangeCount!==1||Q.anchorNode!==A.node||Q.anchorOffset!==A.offset||Q.focusNode!==j.node||Q.focusOffset!==j.offset)){var B=ee.createRange();B.setStart(A.node,A.offset),Q.removeAllRanges(),de>Ne?(Q.addRange(B),Q.extend(j.node,j.offset)):(B.setEnd(j.node,j.offset),Q.addRange(B))}}}}for(ee=[],Q=v;Q=Q.parentNode;)Q.nodeType===1&&ee.push({element:Q,left:Q.scrollLeft,top:Q.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<ee.length;v++){var I=ee[v];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}pu=!!uc,oc=uc=null}finally{Oe=r,H.p=i,z.T=n}}e.current=t,Ie=2}}function e0(){if(Ie===2){Ie=0;var e=ta,t=vi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=z.T,z.T=null;var i=H.p;H.p=2;var r=Oe;Oe|=4;try{Op(e,t.alternate,t)}finally{Oe=r,H.p=i,z.T=n}}Ie=3}}function t0(){if(Ie===4||Ie===3){Ie=0,yg();var e=ta,t=vi,n=jn,i=qp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ie=5:(Ie=0,vi=ta=null,n0(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(ea=null),po(n),t=t.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Xi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=z.T,r=H.p,H.p=2,z.T=null;try{for(var s=e.onRecoverableError,d=0;d<i.length;d++){var v=i[d];s(v.value,{componentStack:v.stack})}}finally{z.T=t,H.p=r}}(jn&3)!==0&&nu(),rn(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===Ks?Tl++:(Tl=0,Ks=e):Tl=0,Rl(0)}}function n0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,rl(t)))}function nu(){return Ip(),e0(),t0(),a0()}function a0(){if(Ie!==5)return!1;var e=ta,t=Qs;Qs=0;var n=po(jn),i=z.T,r=H.p;try{H.p=32>n?32:n,z.T=null,n=Zs,Zs=null;var s=ta,d=jn;if(Ie=0,vi=ta=null,jn=0,(Oe&6)!==0)throw Error(u(331));var v=Oe;if(Oe|=4,Up(s.current),Lp(s,s.current,d,n),Oe=v,Rl(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Xi,s)}catch{}return!0}finally{H.p=r,z.T=i,n0(e,t)}}function i0(e,t,n){t=$t(n,t),t=Rs(e.stateNode,t,2),e=Kn(e,t,2),e!==null&&(Qi(e,2),rn(e))}function Me(e,t,n){if(e.tag===3)i0(e,e,n);else for(;t!==null;){if(t.tag===3){i0(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ea===null||!ea.has(i))){e=$t(n,e),n=lp(2),i=Kn(t,n,2),i!==null&&(rp(n,i,t,e),Qi(i,2),rn(i));break}}t=t.return}}function Ws(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Xy;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(Gs=!0,r.add(n),e=Jy.bind(null,e,t,n),t.then(e,e))}function Jy(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Le===e&&(Se&n)===n&&(Ve===4||Ve===3&&(Se&62914560)===Se&&300>wt()-Fr?(Oe&2)===0&&gi(e,0):Xs|=n,mi===Se&&(mi=0)),rn(e)}function l0(e,t){t===0&&(t=If()),e=xa(e,t),e!==null&&(Qi(e,t),rn(e))}function Fy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),l0(e,n)}function Wy(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(u(314))}i!==null&&i.delete(t),l0(e,n)}function Py(e,t){return so(e,t)}var au=null,bi=null,Ps=!1,iu=!1,Is=!1,aa=0;function rn(e){e!==bi&&e.next===null&&(bi===null?au=bi=e:bi=bi.next=e),iu=!0,Ps||(Ps=!0,e2())}function Rl(e,t){if(!Is&&iu){Is=!0;do for(var n=!1,i=au;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var s=0;else{var d=i.suspendedLanes,v=i.pingedLanes;s=(1<<31-Ct(42|e)+1)-1,s&=r&~(d&~v),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,s0(i,s))}else s=Se,s=or(i,i===Le?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||Vi(i,s)||(n=!0,s0(i,s));i=i.next}while(n);Is=!1}}function Iy(){r0()}function r0(){iu=Ps=!1;var e=0;aa!==0&&c2()&&(e=aa);for(var t=wt(),n=null,i=au;i!==null;){var r=i.next,s=u0(i,t);s===0?(i.next=null,n===null?au=r:n.next=r,r===null&&(bi=n)):(n=i,(e!==0||(s&3)!==0)&&(iu=!0)),i=r}Ie!==0&&Ie!==5||Rl(e),aa!==0&&(aa=0)}function u0(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var d=31-Ct(s),v=1<<d,E=r[d];E===-1?((v&n)===0||(v&i)!==0)&&(r[d]=Rg(v,t)):E<=t&&(e.expiredLanes|=v),s&=~v}if(t=Le,n=Se,n=or(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(_e===2||_e===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&co(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Vi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&co(i),po(n)){case 2:case 8:n=Wf;break;case 32:n=ir;break;case 268435456:n=Pf;break;default:n=ir}return i=o0.bind(null,e),n=so(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&co(i),e.callbackPriority=2,e.callbackNode=null,2}function o0(e,t){if(Ie!==0&&Ie!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(nu()&&e.callbackNode!==n)return null;var i=Se;return i=or(e,e===Le?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Gp(e,i,t),u0(e,wt()),e.callbackNode!=null&&e.callbackNode===n?o0.bind(null,e):null)}function s0(e,t){if(nu())return null;Gp(e,t,!0)}function e2(){d2(function(){(Oe&6)!==0?so(Ff,Iy):r0()})}function ec(){if(aa===0){var e=ii;e===0&&(e=lr,lr<<=1,(lr&261888)===0&&(lr=256)),aa=e}return aa}function c0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:dr(""+e)}function f0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function t2(e,t,n,i,r){if(t==="submit"&&n&&n.stateNode===r){var s=c0((r[ht]||null).action),d=i.submitter;d&&(t=(t=d[ht]||null)?c0(t.formAction):d.getAttribute("formAction"),t!==null&&(s=t,d=null));var v=new vr("action","action",null,i,r);e.push({event:v,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(aa!==0){var E=d?f0(r,d):new FormData(r);xs(n,{pending:!0,data:E,method:r.method,action:s},null,E)}}else typeof s=="function"&&(v.preventDefault(),E=d?f0(r,d):new FormData(r),xs(n,{pending:!0,data:E,method:r.method,action:s},s,E))},currentTarget:r}]})}}for(var tc=0;tc<Bo.length;tc++){var nc=Bo[tc],n2=nc.toLowerCase(),a2=nc[0].toUpperCase()+nc.slice(1);Jt(n2,"on"+a2)}Jt(Yd,"onAnimationEnd"),Jt(Gd,"onAnimationIteration"),Jt(Xd,"onAnimationStart"),Jt("dblclick","onDoubleClick"),Jt("focusin","onFocus"),Jt("focusout","onBlur"),Jt(by,"onTransitionRun"),Jt(xy,"onTransitionStart"),Jt(Sy,"onTransitionCancel"),Jt(Vd,"onTransitionEnd"),Xa("onMouseEnter",["mouseout","mouseover"]),Xa("onMouseLeave",["mouseout","mouseover"]),Xa("onPointerEnter",["pointerout","pointerover"]),Xa("onPointerLeave",["pointerout","pointerover"]),va("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),va("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),va("onBeforeInput",["compositionend","keypress","textInput","paste"]),va("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),va("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),va("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jl));function d0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var d=i.length-1;0<=d;d--){var v=i[d],E=v.instance,U=v.currentTarget;if(v=v.listener,E!==s&&r.isPropagationStopped())break e;s=v,r.currentTarget=U;try{s(r)}catch(W){br(W)}r.currentTarget=null,s=E}else for(d=0;d<i.length;d++){if(v=i[d],E=v.instance,U=v.currentTarget,v=v.listener,E!==s&&r.isPropagationStopped())break e;s=v,r.currentTarget=U;try{s(r)}catch(W){br(W)}r.currentTarget=null,s=E}}}}function xe(e,t){var n=t[mo];n===void 0&&(n=t[mo]=new Set);var i=e+"__bubble";n.has(i)||(h0(t,e,2,!1),n.add(i))}function ac(e,t,n){var i=0;t&&(i|=4),h0(n,e,i,t)}var lu="_reactListening"+Math.random().toString(36).slice(2);function ic(e){if(!e[lu]){e[lu]=!0,rd.forEach(function(n){n!=="selectionchange"&&(i2.has(n)||ac(n,!1,e),ac(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[lu]||(t[lu]=!0,ac("selectionchange",!1,t))}}function h0(e,t,n,i){switch(Y0(t)){case 2:var r=A2;break;case 8:r=D2;break;default:r=bc}n=r.bind(null,t,n,e),r=void 0,!Co||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function lc(e,t,n,i,r){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var v=i.stateNode.containerInfo;if(v===r)break;if(d===4)for(d=i.return;d!==null;){var E=d.tag;if((E===3||E===4)&&d.stateNode.containerInfo===r)return;d=d.return}for(;v!==null;){if(d=qa(v),d===null)return;if(E=d.tag,E===5||E===6||E===26||E===27){i=s=d;continue e}v=v.parentNode}}i=i.return}yd(function(){var U=s,W=wo(n),ee=[];e:{var q=Qd.get(e);if(q!==void 0){var Q=vr,ue=e;switch(e){case"keypress":if(pr(n)===0)break e;case"keydown":case"keyup":Q=Wg;break;case"focusin":ue="focus",Q=Oo;break;case"focusout":ue="blur",Q=Oo;break;case"beforeblur":case"afterblur":Q=Oo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=Sd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=Hg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=ey;break;case Yd:case Gd:case Xd:Q=Yg;break;case Vd:Q=ny;break;case"scroll":case"scrollend":Q=Bg;break;case"wheel":Q=iy;break;case"copy":case"cut":case"paste":Q=Xg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=Ed;break;case"toggle":case"beforetoggle":Q=ry}var de=(t&4)!==0,Ne=!de&&(e==="scroll"||e==="scrollend"),A=de?q!==null?q+"Capture":null:q;de=[];for(var j=U,B;j!==null;){var I=j;if(B=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||B===null||A===null||(I=Ji(j,A),I!=null&&de.push(Ol(j,I,B))),Ne)break;j=j.return}0<de.length&&(q=new Q(q,ue,null,n,W),ee.push({event:q,listeners:de}))}}if((t&7)===0){e:{if(q=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",q&&n!==So&&(ue=n.relatedTarget||n.fromElement)&&(qa(ue)||ue[$a]))break e;if((Q||q)&&(q=W.window===W?W:(q=W.ownerDocument)?q.defaultView||q.parentWindow:window,Q?(ue=n.relatedTarget||n.toElement,Q=U,ue=ue?qa(ue):null,ue!==null&&(Ne=f(ue),de=ue.tag,ue!==Ne||de!==5&&de!==27&&de!==6)&&(ue=null)):(Q=null,ue=U),Q!==ue)){if(de=Sd,I="onMouseLeave",A="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(de=Ed,I="onPointerLeave",A="onPointerEnter",j="pointer"),Ne=Q==null?q:Ki(Q),B=ue==null?q:Ki(ue),q=new de(I,j+"leave",Q,n,W),q.target=Ne,q.relatedTarget=B,I=null,qa(W)===U&&(de=new de(A,j+"enter",ue,n,W),de.target=B,de.relatedTarget=Ne,I=de),Ne=I,Q&&ue)t:{for(de=l2,A=Q,j=ue,B=0,I=A;I;I=de(I))B++;I=0;for(var fe=j;fe;fe=de(fe))I++;for(;0<B-I;)A=de(A),B--;for(;0<I-B;)j=de(j),I--;for(;B--;){if(A===j||j!==null&&A===j.alternate){de=A;break t}A=de(A),j=de(j)}de=null}else de=null;Q!==null&&p0(ee,q,Q,de,!1),ue!==null&&Ne!==null&&p0(ee,Ne,ue,de,!0)}}e:{if(q=U?Ki(U):window,Q=q.nodeName&&q.nodeName.toLowerCase(),Q==="select"||Q==="input"&&q.type==="file")var Te=Md;else if(zd(q))if(Ad)Te=vy;else{Te=py;var oe=hy}else Q=q.nodeName,!Q||Q.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?U&&xo(U.elementType)&&(Te=Md):Te=my;if(Te&&(Te=Te(e,U))){_d(ee,Te,n,W);break e}oe&&oe(e,q,U),e==="focusout"&&U&&q.type==="number"&&U.memoizedProps.value!=null&&bo(q,"number",q.value)}switch(oe=U?Ki(U):window,e){case"focusin":(zd(oe)||oe.contentEditable==="true")&&(Fa=oe,No=U,al=null);break;case"focusout":al=No=Fa=null;break;case"mousedown":Lo=!0;break;case"contextmenu":case"mouseup":case"dragend":Lo=!1,$d(ee,n,W);break;case"selectionchange":if(yy)break;case"keydown":case"keyup":$d(ee,n,W)}var ve;if(_o)e:{switch(e){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Ja?jd(e,n)&&(we="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(we="onCompositionStart");we&&(Cd&&n.locale!=="ko"&&(Ja||we!=="onCompositionStart"?we==="onCompositionEnd"&&Ja&&(ve=bd()):(qn=W,To="value"in qn?qn.value:qn.textContent,Ja=!0)),oe=ru(U,we),0<oe.length&&(we=new wd(we,e,null,n,W),ee.push({event:we,listeners:oe}),ve?we.data=ve:(ve=Od(n),ve!==null&&(we.data=ve)))),(ve=oy?sy(e,n):cy(e,n))&&(we=ru(U,"onBeforeInput"),0<we.length&&(oe=new wd("onBeforeInput","beforeinput",null,n,W),ee.push({event:oe,listeners:we}),oe.data=ve)),t2(ee,e,U,n,W)}d0(ee,t)})}function Ol(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ru(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=Ji(e,n),r!=null&&i.unshift(Ol(e,r,s)),r=Ji(e,t),r!=null&&i.push(Ol(e,r,s))),e.tag===3)return i;e=e.return}return[]}function l2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function p0(e,t,n,i,r){for(var s=t._reactName,d=[];n!==null&&n!==i;){var v=n,E=v.alternate,U=v.stateNode;if(v=v.tag,E!==null&&E===i)break;v!==5&&v!==26&&v!==27||U===null||(E=U,r?(U=Ji(n,s),U!=null&&d.unshift(Ol(n,U,E))):r||(U=Ji(n,s),U!=null&&d.push(Ol(n,U,E)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var r2=/\r\n?/g,u2=/\u0000|\uFFFD/g;function m0(e){return(typeof e=="string"?e:""+e).replace(r2,`
`).replace(u2,"")}function v0(e,t){return t=m0(t),m0(e)===t}function De(e,t,n,i,r,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Qa(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Qa(e,""+i);break;case"className":cr(e,"class",i);break;case"tabIndex":cr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":cr(e,n,i);break;case"style":vd(e,i,s);break;case"data":if(t!=="object"){cr(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=dr(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&De(e,t,"name",r.name,r,null),De(e,t,"formEncType",r.formEncType,r,null),De(e,t,"formMethod",r.formMethod,r,null),De(e,t,"formTarget",r.formTarget,r,null)):(De(e,t,"encType",r.encType,r,null),De(e,t,"method",r.method,r,null),De(e,t,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=dr(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=dn);break;case"onScroll":i!=null&&xe("scroll",e);break;case"onScrollEnd":i!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=dr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":xe("beforetoggle",e),xe("toggle",e),sr(e,"popover",i);break;case"xlinkActuate":fn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":fn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":fn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":fn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":fn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":fn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":fn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":fn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":fn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":sr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Lg.get(n)||n,sr(e,n,i))}}function rc(e,t,n,i,r,s){switch(n){case"style":vd(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Qa(e,i):(typeof i=="number"||typeof i=="bigint")&&Qa(e,""+i);break;case"onScroll":i!=null&&xe("scroll",e);break;case"onScrollEnd":i!=null&&xe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=dn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ud.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),s=e[ht]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,r),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,r);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):sr(e,n,i)}}}function ot(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var i=!1,r=!1,s;for(s in n)if(n.hasOwnProperty(s)){var d=n[s];if(d!=null)switch(s){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:De(e,t,s,d,n,null)}}r&&De(e,t,"srcSet",n.srcSet,n,null),i&&De(e,t,"src",n.src,n,null);return;case"input":xe("invalid",e);var v=s=d=r=null,E=null,U=null;for(i in n)if(n.hasOwnProperty(i)){var W=n[i];if(W!=null)switch(i){case"name":r=W;break;case"type":d=W;break;case"checked":E=W;break;case"defaultChecked":U=W;break;case"value":s=W;break;case"defaultValue":v=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(u(137,t));break;default:De(e,t,i,W,n,null)}}dd(e,s,v,E,U,d,r,!1);return;case"select":xe("invalid",e),i=d=s=null;for(r in n)if(n.hasOwnProperty(r)&&(v=n[r],v!=null))switch(r){case"value":s=v;break;case"defaultValue":d=v;break;case"multiple":i=v;default:De(e,t,r,v,n,null)}t=s,n=d,e.multiple=!!i,t!=null?Va(e,!!i,t,!1):n!=null&&Va(e,!!i,n,!0);return;case"textarea":xe("invalid",e),s=r=i=null;for(d in n)if(n.hasOwnProperty(d)&&(v=n[d],v!=null))switch(d){case"value":i=v;break;case"defaultValue":r=v;break;case"children":s=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(u(91));break;default:De(e,t,d,v,n,null)}pd(e,i,r,s);return;case"option":for(E in n)if(n.hasOwnProperty(E)&&(i=n[E],i!=null))switch(E){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:De(e,t,E,i,n,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(i=0;i<jl.length;i++)xe(jl[i],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in n)if(n.hasOwnProperty(U)&&(i=n[U],i!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:De(e,t,U,i,n,null)}return;default:if(xo(t)){for(W in n)n.hasOwnProperty(W)&&(i=n[W],i!==void 0&&rc(e,t,W,i,n,void 0));return}}for(v in n)n.hasOwnProperty(v)&&(i=n[v],i!=null&&De(e,t,v,i,n,null))}function o2(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,d=null,v=null,E=null,U=null,W=null;for(Q in n){var ee=n[Q];if(n.hasOwnProperty(Q)&&ee!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":E=ee;default:i.hasOwnProperty(Q)||De(e,t,Q,null,i,ee)}}for(var q in i){var Q=i[q];if(ee=n[q],i.hasOwnProperty(q)&&(Q!=null||ee!=null))switch(q){case"type":s=Q;break;case"name":r=Q;break;case"checked":U=Q;break;case"defaultChecked":W=Q;break;case"value":d=Q;break;case"defaultValue":v=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(u(137,t));break;default:Q!==ee&&De(e,t,q,Q,i,ee)}}yo(e,d,v,E,U,W,s,r);return;case"select":Q=d=v=q=null;for(s in n)if(E=n[s],n.hasOwnProperty(s)&&E!=null)switch(s){case"value":break;case"multiple":Q=E;default:i.hasOwnProperty(s)||De(e,t,s,null,i,E)}for(r in i)if(s=i[r],E=n[r],i.hasOwnProperty(r)&&(s!=null||E!=null))switch(r){case"value":q=s;break;case"defaultValue":v=s;break;case"multiple":d=s;default:s!==E&&De(e,t,r,s,i,E)}t=v,n=d,i=Q,q!=null?Va(e,!!n,q,!1):!!i!=!!n&&(t!=null?Va(e,!!n,t,!0):Va(e,!!n,n?[]:"",!1));return;case"textarea":Q=q=null;for(v in n)if(r=n[v],n.hasOwnProperty(v)&&r!=null&&!i.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:De(e,t,v,null,i,r)}for(d in i)if(r=i[d],s=n[d],i.hasOwnProperty(d)&&(r!=null||s!=null))switch(d){case"value":q=r;break;case"defaultValue":Q=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(u(91));break;default:r!==s&&De(e,t,d,r,i,s)}hd(e,q,Q);return;case"option":for(var ue in n)if(q=n[ue],n.hasOwnProperty(ue)&&q!=null&&!i.hasOwnProperty(ue))switch(ue){case"selected":e.selected=!1;break;default:De(e,t,ue,null,i,q)}for(E in i)if(q=i[E],Q=n[E],i.hasOwnProperty(E)&&q!==Q&&(q!=null||Q!=null))switch(E){case"selected":e.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:De(e,t,E,q,i,Q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in n)q=n[de],n.hasOwnProperty(de)&&q!=null&&!i.hasOwnProperty(de)&&De(e,t,de,null,i,q);for(U in i)if(q=i[U],Q=n[U],i.hasOwnProperty(U)&&q!==Q&&(q!=null||Q!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(u(137,t));break;default:De(e,t,U,q,i,Q)}return;default:if(xo(t)){for(var Ne in n)q=n[Ne],n.hasOwnProperty(Ne)&&q!==void 0&&!i.hasOwnProperty(Ne)&&rc(e,t,Ne,void 0,i,q);for(W in i)q=i[W],Q=n[W],!i.hasOwnProperty(W)||q===Q||q===void 0&&Q===void 0||rc(e,t,W,q,i,Q);return}}for(var A in n)q=n[A],n.hasOwnProperty(A)&&q!=null&&!i.hasOwnProperty(A)&&De(e,t,A,null,i,q);for(ee in i)q=i[ee],Q=n[ee],!i.hasOwnProperty(ee)||q===Q||q==null&&Q==null||De(e,t,ee,q,i,Q)}function g0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function s2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var r=n[i],s=r.transferSize,d=r.initiatorType,v=r.duration;if(s&&v&&g0(d)){for(d=0,v=r.responseEnd,i+=1;i<n.length;i++){var E=n[i],U=E.startTime;if(U>v)break;var W=E.transferSize,ee=E.initiatorType;W&&g0(ee)&&(E=E.responseEnd,d+=W*(E<v?1:(v-U)/(E-U)))}if(--i,t+=8*(s+d)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var uc=null,oc=null;function uu(e){return e.nodeType===9?e:e.ownerDocument}function y0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function b0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function sc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cc=null;function c2(){var e=window.event;return e&&e.type==="popstate"?e===cc?!1:(cc=e,!0):(cc=null,!1)}var x0=typeof setTimeout=="function"?setTimeout:void 0,f2=typeof clearTimeout=="function"?clearTimeout:void 0,S0=typeof Promise=="function"?Promise:void 0,d2=typeof queueMicrotask=="function"?queueMicrotask:typeof S0<"u"?function(e){return S0.resolve(null).then(e).catch(h2)}:x0;function h2(e){setTimeout(function(){throw e})}function ia(e){return e==="head"}function w0(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(r),Ei(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")zl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,zl(n);for(var s=n.firstChild;s;){var d=s.nextSibling,v=s.nodeName;s[Zi]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=d}}else n==="body"&&zl(e.ownerDocument.body);n=r}while(n);Ei(t)}function E0(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function fc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":fc(n),vo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function p2(e,t,n,i){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Zi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Vt(e.nextSibling),e===null)break}return null}function m2(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Vt(e.nextSibling),e===null))return null;return e}function C0(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Vt(e.nextSibling),e===null))return null;return e}function dc(e){return e.data==="$?"||e.data==="$~"}function hc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function v2(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var pc=null;function T0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Vt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function R0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function j0(e,t,n){switch(t=uu(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function zl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);vo(e)}var Qt=new Map,O0=new Set;function ou(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var On=H.d;H.d={f:g2,r:y2,D:b2,C:x2,L:S2,m:w2,X:C2,S:E2,M:T2};function g2(){var e=On.f(),t=Ir();return e||t}function y2(e){var t=Ya(e);t!==null&&t.tag===5&&t.type==="form"?Vh(t):On.r(e)}var xi=typeof document>"u"?null:document;function z0(e,t,n){var i=xi;if(i&&typeof t=="string"&&t){var r=Ut(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),O0.has(r)||(O0.add(r),e={rel:e,crossOrigin:n,href:t},i.querySelector(r)===null&&(t=i.createElement("link"),ot(t,"link",e),et(t),i.head.appendChild(t)))}}function b2(e){On.D(e),z0("dns-prefetch",e,null)}function x2(e,t){On.C(e,t),z0("preconnect",e,t)}function S2(e,t,n){On.L(e,t,n);var i=xi;if(i&&e&&t){var r='link[rel="preload"][as="'+Ut(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Ut(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Ut(n.imageSizes)+'"]')):r+='[href="'+Ut(e)+'"]';var s=r;switch(t){case"style":s=Si(e);break;case"script":s=wi(e)}Qt.has(s)||(e=S({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Qt.set(s,e),i.querySelector(r)!==null||t==="style"&&i.querySelector(_l(s))||t==="script"&&i.querySelector(Ml(s))||(t=i.createElement("link"),ot(t,"link",e),et(t),i.head.appendChild(t)))}}function w2(e,t){On.m(e,t);var n=xi;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Ut(i)+'"][href="'+Ut(e)+'"]',s=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=wi(e)}if(!Qt.has(s)&&(e=S({rel:"modulepreload",href:e},t),Qt.set(s,e),n.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ml(s)))return}i=n.createElement("link"),ot(i,"link",e),et(i),n.head.appendChild(i)}}}function E2(e,t,n){On.S(e,t,n);var i=xi;if(i&&e){var r=Ga(i).hoistableStyles,s=Si(e);t=t||"default";var d=r.get(s);if(!d){var v={loading:0,preload:null};if(d=i.querySelector(_l(s)))v.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Qt.get(s))&&mc(e,n);var E=d=i.createElement("link");et(E),ot(E,"link",e),E._p=new Promise(function(U,W){E.onload=U,E.onerror=W}),E.addEventListener("load",function(){v.loading|=1}),E.addEventListener("error",function(){v.loading|=2}),v.loading|=4,su(d,t,i)}d={type:"stylesheet",instance:d,count:1,state:v},r.set(s,d)}}}function C2(e,t){On.X(e,t);var n=xi;if(n&&e){var i=Ga(n).hoistableScripts,r=wi(e),s=i.get(r);s||(s=n.querySelector(Ml(r)),s||(e=S({src:e,async:!0},t),(t=Qt.get(r))&&vc(e,t),s=n.createElement("script"),et(s),ot(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function T2(e,t){On.M(e,t);var n=xi;if(n&&e){var i=Ga(n).hoistableScripts,r=wi(e),s=i.get(r);s||(s=n.querySelector(Ml(r)),s||(e=S({src:e,async:!0,type:"module"},t),(t=Qt.get(r))&&vc(e,t),s=n.createElement("script"),et(s),ot(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function _0(e,t,n,i){var r=(r=he.current)?ou(r):null;if(!r)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Si(n.href),n=Ga(r).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Si(n.href);var s=Ga(r).hoistableStyles,d=s.get(e);if(d||(r=r.ownerDocument||r,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,d),(s=r.querySelector(_l(e)))&&!s._p&&(d.instance=s,d.state.loading=5),Qt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Qt.set(e,n),s||R2(r,e,n,d.state))),t&&i===null)throw Error(u(528,""));return d}if(t&&i!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=wi(n),n=Ga(r).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Si(e){return'href="'+Ut(e)+'"'}function _l(e){return'link[rel="stylesheet"]['+e+"]"}function M0(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function R2(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ot(t,"link",n),et(t),e.head.appendChild(t))}function wi(e){return'[src="'+Ut(e)+'"]'}function Ml(e){return"script[async]"+e}function A0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ut(n.href)+'"]');if(i)return t.instance=i,et(i),i;var r=S({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),et(i),ot(i,"style",r),su(i,n.precedence,e),t.instance=i;case"stylesheet":r=Si(n.href);var s=e.querySelector(_l(r));if(s)return t.state.loading|=4,t.instance=s,et(s),s;i=M0(n),(r=Qt.get(r))&&mc(i,r),s=(e.ownerDocument||e).createElement("link"),et(s);var d=s;return d._p=new Promise(function(v,E){d.onload=v,d.onerror=E}),ot(s,"link",i),t.state.loading|=4,su(s,n.precedence,e),t.instance=s;case"script":return s=wi(n.src),(r=e.querySelector(Ml(s)))?(t.instance=r,et(r),r):(i=n,(r=Qt.get(s))&&(i=S({},n),vc(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),et(r),ot(r,"link",i),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,su(i,n.precedence,e));return t.instance}function su(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,s=r,d=0;d<i.length;d++){var v=i[d];if(v.dataset.precedence===t)s=v;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function mc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function vc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var cu=null;function D0(e,t,n){if(cu===null){var i=new Map,r=cu=new Map;r.set(n,i)}else r=cu,i=r.get(n),i||(i=new Map,r.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var s=n[r];if(!(s[Zi]||s[it]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var d=s.getAttribute(t)||"";d=e+d;var v=i.get(d);v?v.push(s):i.set(d,[s])}}return i}function N0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function j2(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function L0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function O2(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=Si(i.href),s=t.querySelector(_l(r));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=fu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,et(s);return}s=t.ownerDocument||t,i=M0(i),(r=Qt.get(r))&&mc(i,r),s=s.createElement("link"),et(s);var d=s;d._p=new Promise(function(v,E){d.onload=v,d.onerror=E}),ot(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=fu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var gc=0;function z2(e,t){return e.stylesheets&&e.count===0&&hu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&hu(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&gc===0&&(gc=62500*s2());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hu(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>gc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function fu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var du=null;function hu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,du=new Map,t.forEach(_2,e),du=null,fu.call(e))}function _2(e,t){if(!(t.state.loading&4)){var n=du.get(e);if(n)var i=n.get(null);else{n=new Map,du.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var d=r[s];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),i=d)}i&&n.set(null,i)}r=t.instance,d=r.getAttribute("data-precedence"),s=n.get(d)||i,s===i&&n.set(null,r),n.set(d,r),this.count++,i=fu.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Al={$$typeof:$,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function M2(e,t,n,i,r,s,d,v,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fo(0),this.hiddenUpdates=fo(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function k0(e,t,n,i,r,s,d,v,E,U,W,ee){return e=new M2(e,t,n,d,E,U,W,ee,v),t=1,s===!0&&(t|=24),s=Rt(3,null,null,t),e.current=s,s.stateNode=e,t=Fo(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},es(s),e}function B0(e){return e?(e=Ia,e):Ia}function U0(e,t,n,i,r,s){r=B0(r),i.context===null?i.context=r:i.pendingContext=r,i=Zn(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Kn(e,i,t),n!==null&&(bt(n,e,t),cl(n,e,t))}function H0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yc(e,t){H0(e,t),(e=e.alternate)&&H0(e,t)}function $0(e){if(e.tag===13||e.tag===31){var t=xa(e,67108864);t!==null&&bt(t,e,67108864),yc(e,67108864)}}function q0(e){if(e.tag===13||e.tag===31){var t=Mt();t=ho(t);var n=xa(e,t);n!==null&&bt(n,e,t),yc(e,t)}}var pu=!0;function A2(e,t,n,i){var r=z.T;z.T=null;var s=H.p;try{H.p=2,bc(e,t,n,i)}finally{H.p=s,z.T=r}}function D2(e,t,n,i){var r=z.T;z.T=null;var s=H.p;try{H.p=8,bc(e,t,n,i)}finally{H.p=s,z.T=r}}function bc(e,t,n,i){if(pu){var r=xc(i);if(r===null)lc(e,t,i,mu,n),G0(e,i);else if(L2(r,e,t,n,i))i.stopPropagation();else if(G0(e,i),t&4&&-1<N2.indexOf(e)){for(;r!==null;){var s=Ya(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var d=ma(s.pendingLanes);if(d!==0){var v=s;for(v.pendingLanes|=2,v.entangledLanes|=2;d;){var E=1<<31-Ct(d);v.entanglements[1]|=E,d&=~E}rn(s),(Oe&6)===0&&(Wr=wt()+500,Rl(0))}}break;case 31:case 13:v=xa(s,2),v!==null&&bt(v,s,2),Ir(),yc(s,2)}if(s=xc(i),s===null&&lc(e,t,i,mu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else lc(e,t,i,null,n)}}function xc(e){return e=wo(e),Sc(e)}var mu=null;function Sc(e){if(mu=null,e=qa(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return mu=e,null}function Y0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bg()){case Ff:return 2;case Wf:return 8;case ir:case xg:return 32;case Pf:return 268435456;default:return 32}default:return 32}}var wc=!1,la=null,ra=null,ua=null,Dl=new Map,Nl=new Map,oa=[],N2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function G0(e,t){switch(e){case"focusin":case"focusout":la=null;break;case"dragenter":case"dragleave":ra=null;break;case"mouseover":case"mouseout":ua=null;break;case"pointerover":case"pointerout":Dl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nl.delete(t.pointerId)}}function Ll(e,t,n,i,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},t!==null&&(t=Ya(t),t!==null&&$0(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function L2(e,t,n,i,r){switch(t){case"focusin":return la=Ll(la,e,t,n,i,r),!0;case"dragenter":return ra=Ll(ra,e,t,n,i,r),!0;case"mouseover":return ua=Ll(ua,e,t,n,i,r),!0;case"pointerover":var s=r.pointerId;return Dl.set(s,Ll(Dl.get(s)||null,e,t,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Nl.set(s,Ll(Nl.get(s)||null,e,t,n,i,r)),!0}return!1}function X0(e){var t=qa(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,id(e.priority,function(){q0(n)});return}}else if(t===31){if(t=y(n),t!==null){e.blockedOn=t,id(e.priority,function(){q0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xc(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);So=i,n.target.dispatchEvent(i),So=null}else return t=Ya(n),t!==null&&$0(t),e.blockedOn=n,!1;t.shift()}return!0}function V0(e,t,n){vu(e)&&n.delete(t)}function k2(){wc=!1,la!==null&&vu(la)&&(la=null),ra!==null&&vu(ra)&&(ra=null),ua!==null&&vu(ua)&&(ua=null),Dl.forEach(V0),Nl.forEach(V0)}function gu(e,t){e.blockedOn===t&&(e.blockedOn=null,wc||(wc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,k2)))}var yu=null;function Q0(e){yu!==e&&(yu=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){yu===e&&(yu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],r=e[t+2];if(typeof i!="function"){if(Sc(i||n)===null)continue;break}var s=Ya(n);s!==null&&(e.splice(t,3),t-=3,xs(s,{pending:!0,data:r,method:n.method,action:i},i,r))}}))}function Ei(e){function t(E){return gu(E,e)}la!==null&&gu(la,e),ra!==null&&gu(ra,e),ua!==null&&gu(ua,e),Dl.forEach(t),Nl.forEach(t);for(var n=0;n<oa.length;n++){var i=oa[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<oa.length&&(n=oa[0],n.blockedOn===null);)X0(n),n.blockedOn===null&&oa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var r=n[i],s=n[i+1],d=r[ht]||null;if(typeof s=="function")d||Q0(n);else if(d){var v=null;if(s&&s.hasAttribute("formAction")){if(r=s,d=s[ht]||null)v=d.formAction;else if(Sc(r)!==null)continue}else v=d.action;typeof v=="function"?n[i+1]=v:(n.splice(i,3),i-=3),Q0(n)}}}function Z0(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(d){return r=d})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Ec(e){this._internalRoot=e}bu.prototype.render=Ec.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,i=Mt();U0(n,i,e,t,null,null)},bu.prototype.unmount=Ec.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;U0(e.current,2,null,e,null,null),Ir(),t[$a]=null}};function bu(e){this._internalRoot=e}bu.prototype.unstable_scheduleHydration=function(e){if(e){var t=ad();e={blockedOn:null,target:e,priority:t};for(var n=0;n<oa.length&&t!==0&&t<oa[n].priority;n++);oa.splice(n,0,e),n===0&&X0(e)}};var K0=l.version;if(K0!=="19.2.0")throw Error(u(527,K0,"19.2.0"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=m(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var B2={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xu.isDisabled&&xu.supportsFiber)try{Xi=xu.inject(B2),Et=xu}catch{}}return Bl.createRoot=function(e,t){if(!c(e))throw Error(u(299));var n=!1,i="",r=tp,s=np,d=ap;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=k0(e,1,!1,null,null,n,i,null,r,s,d,Z0),e[$a]=t.current,ic(e),new Ec(t)},Bl.hydrateRoot=function(e,t,n){if(!c(e))throw Error(u(299));var i=!1,r="",s=tp,d=np,v=ap,E=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.formState!==void 0&&(E=n.formState)),t=k0(e,1,!0,t,n??null,i,r,E,s,d,v,Z0),t.context=B0(null),n=t.current,i=Mt(),i=ho(i),r=Zn(i),r.callback=null,Kn(n,r,i),n=i,t.current.lanes=n,Qi(t,n),rn(t),e[$a]=t.current,ic(e),new bu(t)},Bl.version="19.2.0",Bl}var i1;function Q2(){if(i1)return Rc.exports;i1=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Rc.exports=V2(),Rc.exports}var Z2=Q2();const K2=Il(Z2);/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var l1="popstate";function J2(a={}){function l(u,c){let{pathname:f,search:p,hash:y}=u.location;return cf("",{pathname:f,search:p,hash:y},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function o(u,c){return typeof c=="string"?c:Fl(c)}return W2(l,o,null,a)}function Ge(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function on(a,l){if(!a){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function F2(){return Math.random().toString(36).substring(2,10)}function r1(a,l){return{usr:a.state,key:a.key,idx:l}}function cf(a,l,o=null,u){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof l=="string"?Bi(l):l,state:o,key:l&&l.key||u||F2()}}function Fl({pathname:a="/",search:l="",hash:o=""}){return l&&l!=="?"&&(a+=l.charAt(0)==="?"?l:"?"+l),o&&o!=="#"&&(a+=o.charAt(0)==="#"?o:"#"+o),a}function Bi(a){let l={};if(a){let o=a.indexOf("#");o>=0&&(l.hash=a.substring(o),a=a.substring(0,o));let u=a.indexOf("?");u>=0&&(l.search=a.substring(u),a=a.substring(0,u)),a&&(l.pathname=a)}return l}function W2(a,l,o,u={}){let{window:c=document.defaultView,v5Compat:f=!1}=u,p=c.history,y="POP",g=null,m=x();m==null&&(m=0,p.replaceState({...p.state,idx:m},""));function x(){return(p.state||{idx:null}).idx}function S(){y="POP";let X=x(),P=X==null?null:X-m;m=X,g&&g({action:y,location:Y.location,delta:P})}function w(X,P){y="PUSH";let M=cf(Y.location,X,P);m=x()+1;let $=r1(M,m),G=Y.createHref(M);try{p.pushState($,"",G)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;c.location.assign(G)}f&&g&&g({action:y,location:Y.location,delta:1})}function D(X,P){y="REPLACE";let M=cf(Y.location,X,P);m=x();let $=r1(M,m),G=Y.createHref(M);p.replaceState($,"",G),f&&g&&g({action:y,location:Y.location,delta:0})}function O(X){return P2(X)}let Y={get action(){return y},get location(){return a(c,p)},listen(X){if(g)throw new Error("A history only accepts one active listener");return c.addEventListener(l1,S),g=X,()=>{c.removeEventListener(l1,S),g=null}},createHref(X){return l(c,X)},createURL:O,encodeLocation(X){let P=O(X);return{pathname:P.pathname,search:P.search,hash:P.hash}},push:w,replace:D,go(X){return p.go(X)}};return Y}function P2(a,l=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Ge(o,"No window.location.(origin|href) available to create URL");let u=typeof a=="string"?a:Fl(a);return u=u.replace(/ $/,"%20"),!l&&u.startsWith("//")&&(u=o+u),new URL(u,o)}function Om(a,l,o="/"){return I2(a,l,o,!1)}function I2(a,l,o,u){let c=typeof l=="string"?Bi(l):l,f=Ln(c.pathname||"/",o);if(f==null)return null;let p=zm(a);eb(p);let y=null;for(let g=0;y==null&&g<p.length;++g){let m=fb(f);y=sb(p[g],m,u)}return y}function zm(a,l=[],o=[],u="",c=!1){let f=(p,y,g=c,m)=>{let x={relativePath:m===void 0?p.path||"":m,caseSensitive:p.caseSensitive===!0,childrenIndex:y,route:p};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(u)&&g)return;Ge(x.relativePath.startsWith(u),`Absolute route path "${x.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(u.length)}let S=Dn([u,x.relativePath]),w=o.concat(x);p.children&&p.children.length>0&&(Ge(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),zm(p.children,l,w,S,g)),!(p.path==null&&!p.index)&&l.push({path:S,score:ub(S,p.index),routesMeta:w})};return a.forEach((p,y)=>{if(p.path===""||!p.path?.includes("?"))f(p,y);else for(let g of _m(p.path))f(p,y,!0,g)}),l}function _m(a){let l=a.split("/");if(l.length===0)return[];let[o,...u]=l,c=o.endsWith("?"),f=o.replace(/\?$/,"");if(u.length===0)return c?[f,""]:[f];let p=_m(u.join("/")),y=[];return y.push(...p.map(g=>g===""?f:[f,g].join("/"))),c&&y.push(...p),y.map(g=>a.startsWith("/")&&g===""?"/":g)}function eb(a){a.sort((l,o)=>l.score!==o.score?o.score-l.score:ob(l.routesMeta.map(u=>u.childrenIndex),o.routesMeta.map(u=>u.childrenIndex)))}var tb=/^:[\w-]+$/,nb=3,ab=2,ib=1,lb=10,rb=-2,u1=a=>a==="*";function ub(a,l){let o=a.split("/"),u=o.length;return o.some(u1)&&(u+=rb),l&&(u+=ab),o.filter(c=>!u1(c)).reduce((c,f)=>c+(tb.test(f)?nb:f===""?ib:lb),u)}function ob(a,l){return a.length===l.length&&a.slice(0,-1).every((u,c)=>u===l[c])?a[a.length-1]-l[l.length-1]:0}function sb(a,l,o=!1){let{routesMeta:u}=a,c={},f="/",p=[];for(let y=0;y<u.length;++y){let g=u[y],m=y===u.length-1,x=f==="/"?l:l.slice(f.length)||"/",S=Hu({path:g.relativePath,caseSensitive:g.caseSensitive,end:m},x),w=g.route;if(!S&&m&&o&&!u[u.length-1].route.index&&(S=Hu({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},x)),!S)return null;Object.assign(c,S.params),p.push({params:c,pathname:Dn([f,S.pathname]),pathnameBase:mb(Dn([f,S.pathnameBase])),route:w}),S.pathnameBase!=="/"&&(f=Dn([f,S.pathnameBase]))}return p}function Hu(a,l){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[o,u]=cb(a.path,a.caseSensitive,a.end),c=l.match(o);if(!c)return null;let f=c[0],p=f.replace(/(.)\/+$/,"$1"),y=c.slice(1);return{params:u.reduce((m,{paramName:x,isOptional:S},w)=>{if(x==="*"){let O=y[w]||"";p=f.slice(0,f.length-O.length).replace(/(.)\/+$/,"$1")}const D=y[w];return S&&!D?m[x]=void 0:m[x]=(D||"").replace(/%2F/g,"/"),m},{}),pathname:f,pathnameBase:p,pattern:a}}function cb(a,l=!1,o=!0){on(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let u=[],c="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,y,g)=>(u.push({paramName:y,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(u.push({paramName:"*"}),c+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?c+="\\/*$":a!==""&&a!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,l?void 0:"i"),u]}function fb(a){try{return a.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return on(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),a}}function Ln(a,l){if(l==="/")return a;if(!a.toLowerCase().startsWith(l.toLowerCase()))return null;let o=l.endsWith("/")?l.length-1:l.length,u=a.charAt(o);return u&&u!=="/"?null:a.slice(o)||"/"}function db(a,l="/"){let{pathname:o,search:u="",hash:c=""}=typeof a=="string"?Bi(a):a;return{pathname:o?o.startsWith("/")?o:hb(o,l):l,search:vb(u),hash:gb(c)}}function hb(a,l){let o=l.replace(/\/+$/,"").split("/");return a.split("/").forEach(c=>{c===".."?o.length>1&&o.pop():c!=="."&&o.push(c)}),o.length>1?o.join("/"):"/"}function _c(a,l,o,u){return`Cannot include a '${a}' character in a manually specified \`to.${l}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function pb(a){return a.filter((l,o)=>o===0||l.route.path&&l.route.path.length>0)}function Mm(a){let l=pb(a);return l.map((o,u)=>u===l.length-1?o.pathname:o.pathnameBase)}function Am(a,l,o,u=!1){let c;typeof a=="string"?c=Bi(a):(c={...a},Ge(!c.pathname||!c.pathname.includes("?"),_c("?","pathname","search",c)),Ge(!c.pathname||!c.pathname.includes("#"),_c("#","pathname","hash",c)),Ge(!c.search||!c.search.includes("#"),_c("#","search","hash",c)));let f=a===""||c.pathname==="",p=f?"/":c.pathname,y;if(p==null)y=o;else{let S=l.length-1;if(!u&&p.startsWith("..")){let w=p.split("/");for(;w[0]==="..";)w.shift(),S-=1;c.pathname=w.join("/")}y=S>=0?l[S]:"/"}let g=db(c,y),m=p&&p!=="/"&&p.endsWith("/"),x=(f||p===".")&&o.endsWith("/");return!g.pathname.endsWith("/")&&(m||x)&&(g.pathname+="/"),g}var Dn=a=>a.join("/").replace(/\/\/+/g,"/"),mb=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),vb=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,gb=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function yb(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var Dm=["POST","PUT","PATCH","DELETE"];new Set(Dm);var bb=["GET",...Dm];new Set(bb);var Ui=b.createContext(null);Ui.displayName="DataRouter";var Ju=b.createContext(null);Ju.displayName="DataRouterState";b.createContext(!1);var Nm=b.createContext({isTransitioning:!1});Nm.displayName="ViewTransition";var xb=b.createContext(new Map);xb.displayName="Fetchers";var Sb=b.createContext(null);Sb.displayName="Await";var sn=b.createContext(null);sn.displayName="Navigation";var er=b.createContext(null);er.displayName="Location";var kn=b.createContext({outlet:null,matches:[],isDataRoute:!1});kn.displayName="Route";var Tf=b.createContext(null);Tf.displayName="RouteError";function wb(a,{relative:l}={}){Ge(tr(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:u}=b.useContext(sn),{hash:c,pathname:f,search:p}=nr(a,{relative:l}),y=f;return o!=="/"&&(y=f==="/"?o:Dn([o,f])),u.createHref({pathname:y,search:p,hash:c})}function tr(){return b.useContext(er)!=null}function Bn(){return Ge(tr(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(er).location}var Lm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function km(a){b.useContext(sn).static||b.useLayoutEffect(a)}function Rf(){let{isDataRoute:a}=b.useContext(kn);return a?Lb():Eb()}function Eb(){Ge(tr(),"useNavigate() may be used only in the context of a <Router> component.");let a=b.useContext(Ui),{basename:l,navigator:o}=b.useContext(sn),{matches:u}=b.useContext(kn),{pathname:c}=Bn(),f=JSON.stringify(Mm(u)),p=b.useRef(!1);return km(()=>{p.current=!0}),b.useCallback((g,m={})=>{if(on(p.current,Lm),!p.current)return;if(typeof g=="number"){o.go(g);return}let x=Am(g,JSON.parse(f),c,m.relative==="path");a==null&&l!=="/"&&(x.pathname=x.pathname==="/"?l:Dn([l,x.pathname])),(m.replace?o.replace:o.push)(x,m.state,m)},[l,o,f,c,a])}b.createContext(null);function nr(a,{relative:l}={}){let{matches:o}=b.useContext(kn),{pathname:u}=Bn(),c=JSON.stringify(Mm(o));return b.useMemo(()=>Am(a,JSON.parse(c),u,l==="path"),[a,c,u,l])}function Cb(a,l){return Bm(a,l)}function Bm(a,l,o,u,c){Ge(tr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=b.useContext(sn),{matches:p}=b.useContext(kn),y=p[p.length-1],g=y?y.params:{},m=y?y.pathname:"/",x=y?y.pathnameBase:"/",S=y&&y.route;{let M=S&&S.path||"";Um(m,!S||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let w=Bn(),D;if(l){let M=typeof l=="string"?Bi(l):l;Ge(x==="/"||M.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${M.pathname}" was given in the \`location\` prop.`),D=M}else D=w;let O=D.pathname||"/",Y=O;if(x!=="/"){let M=x.replace(/^\//,"").split("/");Y="/"+O.replace(/^\//,"").split("/").slice(M.length).join("/")}let X=Om(a,{pathname:Y});on(S||X!=null,`No routes matched location "${D.pathname}${D.search}${D.hash}" `),on(X==null||X[X.length-1].route.element!==void 0||X[X.length-1].route.Component!==void 0||X[X.length-1].route.lazy!==void 0,`Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let P=zb(X&&X.map(M=>Object.assign({},M,{params:Object.assign({},g,M.params),pathname:Dn([x,f.encodeLocation?f.encodeLocation(M.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?x:Dn([x,f.encodeLocation?f.encodeLocation(M.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathnameBase])})),p,o,u,c);return l&&P?b.createElement(er.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...D},navigationType:"POP"}},P):P}function Tb(){let a=Nb(),l=yb(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),o=a instanceof Error?a.stack:null,u="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:u},f={padding:"2px 4px",backgroundColor:u},p=null;return console.error("Error handled by React Router default ErrorBoundary:",a),p=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:f},"ErrorBoundary")," or"," ",b.createElement("code",{style:f},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},l),o?b.createElement("pre",{style:c},o):null,p)}var Rb=b.createElement(Tb,null),jb=class extends b.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,l){return l.location!==a.location||l.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:l.error,location:l.location,revalidation:a.revalidation||l.revalidation}}componentDidCatch(a,l){this.props.unstable_onError?this.props.unstable_onError(a,l):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?b.createElement(kn.Provider,{value:this.props.routeContext},b.createElement(Tf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Ob({routeContext:a,match:l,children:o}){let u=b.useContext(Ui);return u&&u.static&&u.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=l.route.id),b.createElement(kn.Provider,{value:a},o)}function zb(a,l=[],o=null,u=null,c=null){if(a==null){if(!o)return null;if(o.errors)a=o.matches;else if(l.length===0&&!o.initialized&&o.matches.length>0)a=o.matches;else return null}let f=a,p=o?.errors;if(p!=null){let m=f.findIndex(x=>x.route.id&&p?.[x.route.id]!==void 0);Ge(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),f=f.slice(0,Math.min(f.length,m+1))}let y=!1,g=-1;if(o)for(let m=0;m<f.length;m++){let x=f[m];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(g=m),x.route.id){let{loaderData:S,errors:w}=o,D=x.route.loader&&!S.hasOwnProperty(x.route.id)&&(!w||w[x.route.id]===void 0);if(x.route.lazy||D){y=!0,g>=0?f=f.slice(0,g+1):f=[f[0]];break}}}return f.reduceRight((m,x,S)=>{let w,D=!1,O=null,Y=null;o&&(w=p&&x.route.id?p[x.route.id]:void 0,O=x.route.errorElement||Rb,y&&(g<0&&S===0?(Um("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),D=!0,Y=null):g===S&&(D=!0,Y=x.route.hydrateFallbackElement||null)));let X=l.concat(f.slice(0,S+1)),P=()=>{let M;return w?M=O:D?M=Y:x.route.Component?M=b.createElement(x.route.Component,null):x.route.element?M=x.route.element:M=m,b.createElement(Ob,{match:x,routeContext:{outlet:m,matches:X,isDataRoute:o!=null},children:M})};return o&&(x.route.ErrorBoundary||x.route.errorElement||S===0)?b.createElement(jb,{location:o.location,revalidation:o.revalidation,component:O,error:w,children:P(),routeContext:{outlet:null,matches:X,isDataRoute:!0},unstable_onError:u}):P()},null)}function jf(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _b(a){let l=b.useContext(Ui);return Ge(l,jf(a)),l}function Mb(a){let l=b.useContext(Ju);return Ge(l,jf(a)),l}function Ab(a){let l=b.useContext(kn);return Ge(l,jf(a)),l}function Of(a){let l=Ab(a),o=l.matches[l.matches.length-1];return Ge(o.route.id,`${a} can only be used on routes that contain a unique "id"`),o.route.id}function Db(){return Of("useRouteId")}function Nb(){let a=b.useContext(Tf),l=Mb("useRouteError"),o=Of("useRouteError");return a!==void 0?a:l.errors?.[o]}function Lb(){let{router:a}=_b("useNavigate"),l=Of("useNavigate"),o=b.useRef(!1);return km(()=>{o.current=!0}),b.useCallback(async(c,f={})=>{on(o.current,Lm),o.current&&(typeof c=="number"?a.navigate(c):await a.navigate(c,{fromRouteId:l,...f}))},[a,l])}var o1={};function Um(a,l,o){!l&&!o1[a]&&(o1[a]=!0,on(!1,o))}b.memo(kb);function kb({routes:a,future:l,state:o,unstable_onError:u}){return Bm(a,void 0,o,u,l)}function Da(a){Ge(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Bb({basename:a="/",children:l=null,location:o,navigationType:u="POP",navigator:c,static:f=!1}){Ge(!tr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=a.replace(/^\/*/,"/"),y=b.useMemo(()=>({basename:p,navigator:c,static:f,future:{}}),[p,c,f]);typeof o=="string"&&(o=Bi(o));let{pathname:g="/",search:m="",hash:x="",state:S=null,key:w="default"}=o,D=b.useMemo(()=>{let O=Ln(g,p);return O==null?null:{location:{pathname:O,search:m,hash:x,state:S,key:w},navigationType:u}},[p,g,m,x,S,w,u]);return on(D!=null,`<Router basename="${p}"> is not able to match the URL "${g}${m}${x}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:b.createElement(sn.Provider,{value:y},b.createElement(er.Provider,{children:l,value:D}))}function Ub({children:a,location:l}){return Cb(ff(a),l)}function ff(a,l=[]){let o=[];return b.Children.forEach(a,(u,c)=>{if(!b.isValidElement(u))return;let f=[...l,c];if(u.type===b.Fragment){o.push.apply(o,ff(u.props.children,f));return}Ge(u.type===Da,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ge(!u.props.index||!u.props.children,"An index route cannot have child routes.");let p={id:u.props.id||f.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(p.children=ff(u.props.children,f)),o.push(p)}),o}var Au="get",Du="application/x-www-form-urlencoded";function Fu(a){return a!=null&&typeof a.tagName=="string"}function Hb(a){return Fu(a)&&a.tagName.toLowerCase()==="button"}function $b(a){return Fu(a)&&a.tagName.toLowerCase()==="form"}function qb(a){return Fu(a)&&a.tagName.toLowerCase()==="input"}function Yb(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function Gb(a,l){return a.button===0&&(!l||l==="_self")&&!Yb(a)}var Su=null;function Xb(){if(Su===null)try{new FormData(document.createElement("form"),0),Su=!1}catch{Su=!0}return Su}var Vb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Mc(a){return a!=null&&!Vb.has(a)?(on(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Du}"`),null):a}function Qb(a,l){let o,u,c,f,p;if($b(a)){let y=a.getAttribute("action");u=y?Ln(y,l):null,o=a.getAttribute("method")||Au,c=Mc(a.getAttribute("enctype"))||Du,f=new FormData(a)}else if(Hb(a)||qb(a)&&(a.type==="submit"||a.type==="image")){let y=a.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=a.getAttribute("formaction")||y.getAttribute("action");if(u=g?Ln(g,l):null,o=a.getAttribute("formmethod")||y.getAttribute("method")||Au,c=Mc(a.getAttribute("formenctype"))||Mc(y.getAttribute("enctype"))||Du,f=new FormData(y,a),!Xb()){let{name:m,type:x,value:S}=a;if(x==="image"){let w=m?`${m}.`:"";f.append(`${w}x`,"0"),f.append(`${w}y`,"0")}else m&&f.append(m,S)}}else{if(Fu(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Au,u=null,c=Du,p=a}return f&&c==="text/plain"&&(p=f,f=void 0),{action:u,method:o.toLowerCase(),encType:c,formData:f,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function zf(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function Zb(a,l,o){let u=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return u.pathname==="/"?u.pathname=`_root.${o}`:l&&Ln(u.pathname,l)==="/"?u.pathname=`${l.replace(/\/$/,"")}/_root.${o}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${o}`,u}async function Kb(a,l){if(a.id in l)return l[a.id];try{let o=await import(a.module);return l[a.id]=o,o}catch(o){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Jb(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Fb(a,l,o){let u=await Promise.all(a.map(async c=>{let f=l.routes[c.route.id];if(f){let p=await Kb(f,o);return p.links?p.links():[]}return[]}));return ex(u.flat(1).filter(Jb).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function s1(a,l,o,u,c,f){let p=(g,m)=>o[m]?g.route.id!==o[m].route.id:!0,y=(g,m)=>o[m].pathname!==g.pathname||o[m].route.path?.endsWith("*")&&o[m].params["*"]!==g.params["*"];return f==="assets"?l.filter((g,m)=>p(g,m)||y(g,m)):f==="data"?l.filter((g,m)=>{let x=u.routes[g.route.id];if(!x||!x.hasLoader)return!1;if(p(g,m)||y(g,m))return!0;if(g.route.shouldRevalidate){let S=g.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function Wb(a,l,{includeHydrateFallback:o}={}){return Pb(a.map(u=>{let c=l.routes[u.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),o&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function Pb(a){return[...new Set(a)]}function Ib(a){let l={},o=Object.keys(a).sort();for(let u of o)l[u]=a[u];return l}function ex(a,l){let o=new Set;return new Set(l),a.reduce((u,c)=>{let f=JSON.stringify(Ib(c));return o.has(f)||(o.add(f),u.push({key:f,link:c})),u},[])}function Hm(){let a=b.useContext(Ui);return zf(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function tx(){let a=b.useContext(Ju);return zf(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var _f=b.createContext(void 0);_f.displayName="FrameworkContext";function $m(){let a=b.useContext(_f);return zf(a,"You must render this element inside a <HydratedRouter> element"),a}function nx(a,l){let o=b.useContext(_f),[u,c]=b.useState(!1),[f,p]=b.useState(!1),{onFocus:y,onBlur:g,onMouseEnter:m,onMouseLeave:x,onTouchStart:S}=l,w=b.useRef(null);b.useEffect(()=>{if(a==="render"&&p(!0),a==="viewport"){let Y=P=>{P.forEach(M=>{p(M.isIntersecting)})},X=new IntersectionObserver(Y,{threshold:.5});return w.current&&X.observe(w.current),()=>{X.disconnect()}}},[a]),b.useEffect(()=>{if(u){let Y=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(Y)}}},[u]);let D=()=>{c(!0)},O=()=>{c(!1),p(!1)};return o?a!=="intent"?[f,w,{}]:[f,w,{onFocus:Ul(y,D),onBlur:Ul(g,O),onMouseEnter:Ul(m,D),onMouseLeave:Ul(x,O),onTouchStart:Ul(S,D)}]:[!1,w,{}]}function Ul(a,l){return o=>{a&&a(o),o.defaultPrevented||l(o)}}function ax({page:a,...l}){let{router:o}=Hm(),u=b.useMemo(()=>Om(o.routes,a,o.basename),[o.routes,a,o.basename]);return u?b.createElement(lx,{page:a,matches:u,...l}):null}function ix(a){let{manifest:l,routeModules:o}=$m(),[u,c]=b.useState([]);return b.useEffect(()=>{let f=!1;return Fb(a,l,o).then(p=>{f||c(p)}),()=>{f=!0}},[a,l,o]),u}function lx({page:a,matches:l,...o}){let u=Bn(),{manifest:c,routeModules:f}=$m(),{basename:p}=Hm(),{loaderData:y,matches:g}=tx(),m=b.useMemo(()=>s1(a,l,g,c,u,"data"),[a,l,g,c,u]),x=b.useMemo(()=>s1(a,l,g,c,u,"assets"),[a,l,g,c,u]),S=b.useMemo(()=>{if(a===u.pathname+u.search+u.hash)return[];let O=new Set,Y=!1;if(l.forEach(P=>{let M=c.routes[P.route.id];!M||!M.hasLoader||(!m.some($=>$.route.id===P.route.id)&&P.route.id in y&&f[P.route.id]?.shouldRevalidate||M.hasClientLoader?Y=!0:O.add(P.route.id))}),O.size===0)return[];let X=Zb(a,p,"data");return Y&&O.size>0&&X.searchParams.set("_routes",l.filter(P=>O.has(P.route.id)).map(P=>P.route.id).join(",")),[X.pathname+X.search]},[p,y,u,c,m,l,a,f]),w=b.useMemo(()=>Wb(x,c),[x,c]),D=ix(x);return b.createElement(b.Fragment,null,S.map(O=>b.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...o})),w.map(O=>b.createElement("link",{key:O,rel:"modulepreload",href:O,...o})),D.map(({key:O,link:Y})=>b.createElement("link",{key:O,nonce:o.nonce,...Y})))}function rx(...a){return l=>{a.forEach(o=>{typeof o=="function"?o(l):o!=null&&(o.current=l)})}}var qm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{qm&&(window.__reactRouterVersion="7.9.4")}catch{}function ux({basename:a,children:l,window:o}){let u=b.useRef();u.current==null&&(u.current=J2({window:o,v5Compat:!0}));let c=u.current,[f,p]=b.useState({action:c.action,location:c.location}),y=b.useCallback(g=>{b.startTransition(()=>p(g))},[p]);return b.useLayoutEffect(()=>c.listen(y),[c,y]),b.createElement(Bb,{basename:a,children:l,location:f.location,navigationType:f.action,navigator:c})}var Ym=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hi=b.forwardRef(function({onClick:l,discover:o="render",prefetch:u="none",relative:c,reloadDocument:f,replace:p,state:y,target:g,to:m,preventScrollReset:x,viewTransition:S,...w},D){let{basename:O}=b.useContext(sn),Y=typeof m=="string"&&Ym.test(m),X,P=!1;if(typeof m=="string"&&Y&&(X=m,qm))try{let Z=new URL(window.location.href),le=m.startsWith("//")?new URL(Z.protocol+m):new URL(m),K=Ln(le.pathname,O);le.origin===Z.origin&&K!=null?m=K+le.search+le.hash:P=!0}catch{on(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=wb(m,{relative:c}),[$,G,L]=nx(u,w),_=fx(m,{replace:p,state:y,target:g,preventScrollReset:x,relative:c,viewTransition:S});function J(Z){l&&l(Z),Z.defaultPrevented||_(Z)}let k=b.createElement("a",{...w,...L,href:X||M,onClick:P||f?l:J,ref:rx(D,G),target:g,"data-discover":!Y&&o==="render"?"true":void 0});return $&&!Y?b.createElement(b.Fragment,null,k,b.createElement(ax,{page:M})):k});Hi.displayName="Link";var ox=b.forwardRef(function({"aria-current":l="page",caseSensitive:o=!1,className:u="",end:c=!1,style:f,to:p,viewTransition:y,children:g,...m},x){let S=nr(p,{relative:m.relative}),w=Bn(),D=b.useContext(Ju),{navigator:O,basename:Y}=b.useContext(sn),X=D!=null&&vx(S)&&y===!0,P=O.encodeLocation?O.encodeLocation(S).pathname:S.pathname,M=w.pathname,$=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;o||(M=M.toLowerCase(),$=$?$.toLowerCase():null,P=P.toLowerCase()),$&&Y&&($=Ln($,Y)||$);const G=P!=="/"&&P.endsWith("/")?P.length-1:P.length;let L=M===P||!c&&M.startsWith(P)&&M.charAt(G)==="/",_=$!=null&&($===P||!c&&$.startsWith(P)&&$.charAt(P.length)==="/"),J={isActive:L,isPending:_,isTransitioning:X},k=L?l:void 0,Z;typeof u=="function"?Z=u(J):Z=[u,L?"active":null,_?"pending":null,X?"transitioning":null].filter(Boolean).join(" ");let le=typeof f=="function"?f(J):f;return b.createElement(Hi,{...m,"aria-current":k,className:Z,ref:x,style:le,to:p,viewTransition:y},typeof g=="function"?g(J):g)});ox.displayName="NavLink";var sx=b.forwardRef(({discover:a="render",fetcherKey:l,navigate:o,reloadDocument:u,replace:c,state:f,method:p=Au,action:y,onSubmit:g,relative:m,preventScrollReset:x,viewTransition:S,...w},D)=>{let O=px(),Y=mx(y,{relative:m}),X=p.toLowerCase()==="get"?"get":"post",P=typeof y=="string"&&Ym.test(y),M=$=>{if(g&&g($),$.defaultPrevented)return;$.preventDefault();let G=$.nativeEvent.submitter,L=G?.getAttribute("formmethod")||p;O(G||$.currentTarget,{fetcherKey:l,method:L,navigate:o,replace:c,state:f,relative:m,preventScrollReset:x,viewTransition:S})};return b.createElement("form",{ref:D,method:X,action:Y,onSubmit:u?g:M,...w,"data-discover":!P&&a==="render"?"true":void 0})});sx.displayName="Form";function cx(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gm(a){let l=b.useContext(Ui);return Ge(l,cx(a)),l}function fx(a,{target:l,replace:o,state:u,preventScrollReset:c,relative:f,viewTransition:p}={}){let y=Rf(),g=Bn(),m=nr(a,{relative:f});return b.useCallback(x=>{if(Gb(x,l)){x.preventDefault();let S=o!==void 0?o:Fl(g)===Fl(m);y(a,{replace:S,state:u,preventScrollReset:c,relative:f,viewTransition:p})}},[g,y,m,o,u,l,a,c,f,p])}var dx=0,hx=()=>`__${String(++dx)}__`;function px(){let{router:a}=Gm("useSubmit"),{basename:l}=b.useContext(sn),o=Db();return b.useCallback(async(u,c={})=>{let{action:f,method:p,encType:y,formData:g,body:m}=Qb(u,l);if(c.navigate===!1){let x=c.fetcherKey||hx();await a.fetch(x,o,c.action||f,{preventScrollReset:c.preventScrollReset,formData:g,body:m,formMethod:c.method||p,formEncType:c.encType||y,flushSync:c.flushSync})}else await a.navigate(c.action||f,{preventScrollReset:c.preventScrollReset,formData:g,body:m,formMethod:c.method||p,formEncType:c.encType||y,replace:c.replace,state:c.state,fromRouteId:o,flushSync:c.flushSync,viewTransition:c.viewTransition})},[a,l,o])}function mx(a,{relative:l}={}){let{basename:o}=b.useContext(sn),u=b.useContext(kn);Ge(u,"useFormAction must be used inside a RouteContext");let[c]=u.matches.slice(-1),f={...nr(a||".",{relative:l})},p=Bn();if(a==null){f.search=p.search;let y=new URLSearchParams(f.search),g=y.getAll("index");if(g.some(x=>x==="")){y.delete("index"),g.filter(S=>S).forEach(S=>y.append("index",S));let x=y.toString();f.search=x?`?${x}`:""}}return(!a||a===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(f.pathname=f.pathname==="/"?o:Dn([o,f.pathname])),Fl(f)}function vx(a,{relative:l}={}){let o=b.useContext(Nm);Ge(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Gm("useViewTransitionState"),c=nr(a,{relative:l});if(!o.isTransitioning)return!1;let f=Ln(o.currentLocation.pathname,u)||o.currentLocation.pathname,p=Ln(o.nextLocation.pathname,u)||o.nextLocation.pathname;return Hu(c.pathname,p)!=null||Hu(c.pathname,f)!=null}var gx=jm();const Oi=Il(gx);var ct=function(){return ct=Object.assign||function(l){for(var o,u=1,c=arguments.length;u<c;u++){o=arguments[u];for(var f in o)Object.prototype.hasOwnProperty.call(o,f)&&(l[f]=o[f])}return l},ct.apply(this,arguments)};function Mi(a,l,o){if(o||arguments.length===2)for(var u=0,c=l.length,f;u<c;u++)(f||!(u in l))&&(f||(f=Array.prototype.slice.call(l,0,u)),f[u]=l[u]);return a.concat(f||Array.prototype.slice.call(l))}var $e="-ms-",Jl="-moz-",ze="-webkit-",Xm="comm",Wu="rule",Mf="decl",yx="@import",Vm="@keyframes",bx="@layer",Qm=Math.abs,Af=String.fromCharCode,df=Object.assign;function xx(a,l){return nt(a,0)^45?(((l<<2^nt(a,0))<<2^nt(a,1))<<2^nt(a,2))<<2^nt(a,3):0}function Zm(a){return a.trim()}function _n(a,l){return(a=l.exec(a))?a[0]:a}function ge(a,l,o){return a.replace(l,o)}function Nu(a,l,o){return a.indexOf(l,o)}function nt(a,l){return a.charCodeAt(l)|0}function Ai(a,l,o){return a.slice(l,o)}function un(a){return a.length}function Km(a){return a.length}function Zl(a,l){return l.push(a),a}function Sx(a,l){return a.map(l).join("")}function c1(a,l){return a.filter(function(o){return!_n(o,l)})}var Pu=1,Di=1,Jm=0,Zt=0,Pe=0,$i="";function Iu(a,l,o,u,c,f,p,y){return{value:a,root:l,parent:o,type:u,props:c,children:f,line:Pu,column:Di,length:p,return:"",siblings:y}}function ca(a,l){return df(Iu("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},l)}function Ci(a){for(;a.root;)a=ca(a.root,{children:[a]});Zl(a,a.siblings)}function wx(){return Pe}function Ex(){return Pe=Zt>0?nt($i,--Zt):0,Di--,Pe===10&&(Di=1,Pu--),Pe}function tn(){return Pe=Zt<Jm?nt($i,Zt++):0,Di++,Pe===10&&(Di=1,Pu++),Pe}function Ba(){return nt($i,Zt)}function Lu(){return Zt}function eo(a,l){return Ai($i,a,l)}function hf(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Cx(a){return Pu=Di=1,Jm=un($i=a),Zt=0,[]}function Tx(a){return $i="",a}function Ac(a){return Zm(eo(Zt-1,pf(a===91?a+2:a===40?a+1:a)))}function Rx(a){for(;(Pe=Ba())&&Pe<33;)tn();return hf(a)>2||hf(Pe)>3?"":" "}function jx(a,l){for(;--l&&tn()&&!(Pe<48||Pe>102||Pe>57&&Pe<65||Pe>70&&Pe<97););return eo(a,Lu()+(l<6&&Ba()==32&&tn()==32))}function pf(a){for(;tn();)switch(Pe){case a:return Zt;case 34:case 39:a!==34&&a!==39&&pf(Pe);break;case 40:a===41&&pf(a);break;case 92:tn();break}return Zt}function Ox(a,l){for(;tn()&&a+Pe!==57;)if(a+Pe===84&&Ba()===47)break;return"/*"+eo(l,Zt-1)+"*"+Af(a===47?a:tn())}function zx(a){for(;!hf(Ba());)tn();return eo(a,Zt)}function _x(a){return Tx(ku("",null,null,null,[""],a=Cx(a),0,[0],a))}function ku(a,l,o,u,c,f,p,y,g){for(var m=0,x=0,S=p,w=0,D=0,O=0,Y=1,X=1,P=1,M=0,$="",G=c,L=f,_=u,J=$;X;)switch(O=M,M=tn()){case 40:if(O!=108&&nt(J,S-1)==58){Nu(J+=ge(Ac(M),"&","&\f"),"&\f",Qm(m?y[m-1]:0))!=-1&&(P=-1);break}case 34:case 39:case 91:J+=Ac(M);break;case 9:case 10:case 13:case 32:J+=Rx(O);break;case 92:J+=jx(Lu()-1,7);continue;case 47:switch(Ba()){case 42:case 47:Zl(Mx(Ox(tn(),Lu()),l,o,g),g);break;default:J+="/"}break;case 123*Y:y[m++]=un(J)*P;case 125*Y:case 59:case 0:switch(M){case 0:case 125:X=0;case 59+x:P==-1&&(J=ge(J,/\f/g,"")),D>0&&un(J)-S&&Zl(D>32?d1(J+";",u,o,S-1,g):d1(ge(J," ","")+";",u,o,S-2,g),g);break;case 59:J+=";";default:if(Zl(_=f1(J,l,o,m,x,c,y,$,G=[],L=[],S,f),f),M===123)if(x===0)ku(J,l,_,_,G,f,S,y,L);else switch(w===99&&nt(J,3)===110?100:w){case 100:case 108:case 109:case 115:ku(a,_,_,u&&Zl(f1(a,_,_,0,0,c,y,$,c,G=[],S,L),L),c,L,S,y,u?G:L);break;default:ku(J,_,_,_,[""],L,0,y,L)}}m=x=D=0,Y=P=1,$=J="",S=p;break;case 58:S=1+un(J),D=O;default:if(Y<1){if(M==123)--Y;else if(M==125&&Y++==0&&Ex()==125)continue}switch(J+=Af(M),M*Y){case 38:P=x>0?1:(J+="\f",-1);break;case 44:y[m++]=(un(J)-1)*P,P=1;break;case 64:Ba()===45&&(J+=Ac(tn())),w=Ba(),x=S=un($=J+=zx(Lu())),M++;break;case 45:O===45&&un(J)==2&&(Y=0)}}return f}function f1(a,l,o,u,c,f,p,y,g,m,x,S){for(var w=c-1,D=c===0?f:[""],O=Km(D),Y=0,X=0,P=0;Y<u;++Y)for(var M=0,$=Ai(a,w+1,w=Qm(X=p[Y])),G=a;M<O;++M)(G=Zm(X>0?D[M]+" "+$:ge($,/&\f/g,D[M])))&&(g[P++]=G);return Iu(a,l,o,c===0?Wu:y,g,m,x,S)}function Mx(a,l,o,u){return Iu(a,l,o,Xm,Af(wx()),Ai(a,2,-2),0,u)}function d1(a,l,o,u,c){return Iu(a,l,o,Mf,Ai(a,0,u),Ai(a,u+1,-1),u,c)}function Fm(a,l,o){switch(xx(a,l)){case 5103:return ze+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ze+a+a;case 4789:return Jl+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return ze+a+Jl+a+$e+a+a;case 5936:switch(nt(a,l+11)){case 114:return ze+a+$e+ge(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return ze+a+$e+ge(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return ze+a+$e+ge(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return ze+a+$e+a+a;case 6165:return ze+a+$e+"flex-"+a+a;case 5187:return ze+a+ge(a,/(\w+).+(:[^]+)/,ze+"box-$1$2"+$e+"flex-$1$2")+a;case 5443:return ze+a+$e+"flex-item-"+ge(a,/flex-|-self/g,"")+(_n(a,/flex-|baseline/)?"":$e+"grid-row-"+ge(a,/flex-|-self/g,""))+a;case 4675:return ze+a+$e+"flex-line-pack"+ge(a,/align-content|flex-|-self/g,"")+a;case 5548:return ze+a+$e+ge(a,"shrink","negative")+a;case 5292:return ze+a+$e+ge(a,"basis","preferred-size")+a;case 6060:return ze+"box-"+ge(a,"-grow","")+ze+a+$e+ge(a,"grow","positive")+a;case 4554:return ze+ge(a,/([^-])(transform)/g,"$1"+ze+"$2")+a;case 6187:return ge(ge(ge(a,/(zoom-|grab)/,ze+"$1"),/(image-set)/,ze+"$1"),a,"")+a;case 5495:case 3959:return ge(a,/(image-set\([^]*)/,ze+"$1$`$1");case 4968:return ge(ge(a,/(.+:)(flex-)?(.*)/,ze+"box-pack:$3"+$e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ze+a+a;case 4200:if(!_n(a,/flex-|baseline/))return $e+"grid-column-align"+Ai(a,l)+a;break;case 2592:case 3360:return $e+ge(a,"template-","")+a;case 4384:case 3616:return o&&o.some(function(u,c){return l=c,_n(u.props,/grid-\w+-end/)})?~Nu(a+(o=o[l].value),"span",0)?a:$e+ge(a,"-start","")+a+$e+"grid-row-span:"+(~Nu(o,"span",0)?_n(o,/\d+/):+_n(o,/\d+/)-+_n(a,/\d+/))+";":$e+ge(a,"-start","")+a;case 4896:case 4128:return o&&o.some(function(u){return _n(u.props,/grid-\w+-start/)})?a:$e+ge(ge(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return ge(a,/(.+)-inline(.+)/,ze+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(un(a)-1-l>6)switch(nt(a,l+1)){case 109:if(nt(a,l+4)!==45)break;case 102:return ge(a,/(.+:)(.+)-([^]+)/,"$1"+ze+"$2-$3$1"+Jl+(nt(a,l+3)==108?"$3":"$2-$3"))+a;case 115:return~Nu(a,"stretch",0)?Fm(ge(a,"stretch","fill-available"),l,o)+a:a}break;case 5152:case 5920:return ge(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,c,f,p,y,g,m){return $e+c+":"+f+m+(p?$e+c+"-span:"+(y?g:+g-+f)+m:"")+a});case 4949:if(nt(a,l+6)===121)return ge(a,":",":"+ze)+a;break;case 6444:switch(nt(a,nt(a,14)===45?18:11)){case 120:return ge(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ze+(nt(a,14)===45?"inline-":"")+"box$3$1"+ze+"$2$3$1"+$e+"$2box$3")+a;case 100:return ge(a,":",":"+$e)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ge(a,"scroll-","scroll-snap-")+a}return a}function $u(a,l){for(var o="",u=0;u<a.length;u++)o+=l(a[u],u,a,l)||"";return o}function Ax(a,l,o,u){switch(a.type){case bx:if(a.children.length)break;case yx:case Mf:return a.return=a.return||a.value;case Xm:return"";case Vm:return a.return=a.value+"{"+$u(a.children,u)+"}";case Wu:if(!un(a.value=a.props.join(",")))return""}return un(o=$u(a.children,u))?a.return=a.value+"{"+o+"}":""}function Dx(a){var l=Km(a);return function(o,u,c,f){for(var p="",y=0;y<l;y++)p+=a[y](o,u,c,f)||"";return p}}function Nx(a){return function(l){l.root||(l=l.return)&&a(l)}}function Lx(a,l,o,u){if(a.length>-1&&!a.return)switch(a.type){case Mf:a.return=Fm(a.value,a.length,o);return;case Vm:return $u([ca(a,{value:ge(a.value,"@","@"+ze)})],u);case Wu:if(a.length)return Sx(o=a.props,function(c){switch(_n(c,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ci(ca(a,{props:[ge(c,/:(read-\w+)/,":"+Jl+"$1")]})),Ci(ca(a,{props:[c]})),df(a,{props:c1(o,u)});break;case"::placeholder":Ci(ca(a,{props:[ge(c,/:(plac\w+)/,":"+ze+"input-$1")]})),Ci(ca(a,{props:[ge(c,/:(plac\w+)/,":"+Jl+"$1")]})),Ci(ca(a,{props:[ge(c,/:(plac\w+)/,$e+"input-$1")]})),Ci(ca(a,{props:[c]})),df(a,{props:c1(o,u)});break}return""})}}var kx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Nt={},Ni=typeof process<"u"&&Nt!==void 0&&(Nt.REACT_APP_SC_ATTR||Nt.SC_ATTR)||"data-styled",Wm="active",Pm="data-styled-version",to="6.1.19",Df=`/*!sc*/
`,qu=typeof window<"u"&&typeof document<"u",Bx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Nt!==void 0&&Nt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Nt.REACT_APP_SC_DISABLE_SPEEDY!==""?Nt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Nt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Nt!==void 0&&Nt.SC_DISABLE_SPEEDY!==void 0&&Nt.SC_DISABLE_SPEEDY!==""&&Nt.SC_DISABLE_SPEEDY!=="false"&&Nt.SC_DISABLE_SPEEDY),Ux={},no=Object.freeze([]),Li=Object.freeze({});function Im(a,l,o){return o===void 0&&(o=Li),a.theme!==o.theme&&a.theme||l||o.theme}var ev=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Hx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$x=/(^-|-$)/g;function h1(a){return a.replace(Hx,"-").replace($x,"")}var qx=/(a)(d)/gi,wu=52,p1=function(a){return String.fromCharCode(a+(a>25?39:97))};function mf(a){var l,o="";for(l=Math.abs(a);l>wu;l=l/wu|0)o=p1(l%wu)+o;return(p1(l%wu)+o).replace(qx,"$1-$2")}var Dc,tv=5381,zi=function(a,l){for(var o=l.length;o;)a=33*a^l.charCodeAt(--o);return a},nv=function(a){return zi(tv,a)};function Nf(a){return mf(nv(a)>>>0)}function Yx(a){return a.displayName||a.name||"Component"}function Nc(a){return typeof a=="string"&&!0}var av=typeof Symbol=="function"&&Symbol.for,iv=av?Symbol.for("react.memo"):60115,Gx=av?Symbol.for("react.forward_ref"):60112,Xx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Vx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},lv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Qx=((Dc={})[Gx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Dc[iv]=lv,Dc);function m1(a){return("type"in(l=a)&&l.type.$$typeof)===iv?lv:"$$typeof"in a?Qx[a.$$typeof]:Xx;var l}var Zx=Object.defineProperty,Kx=Object.getOwnPropertyNames,v1=Object.getOwnPropertySymbols,Jx=Object.getOwnPropertyDescriptor,Fx=Object.getPrototypeOf,g1=Object.prototype;function rv(a,l,o){if(typeof l!="string"){if(g1){var u=Fx(l);u&&u!==g1&&rv(a,u,o)}var c=Kx(l);v1&&(c=c.concat(v1(l)));for(var f=m1(a),p=m1(l),y=0;y<c.length;++y){var g=c[y];if(!(g in Vx||o&&o[g]||p&&g in p||f&&g in f)){var m=Jx(l,g);try{Zx(a,g,m)}catch{}}}}return a}function ki(a){return typeof a=="function"}function Lf(a){return typeof a=="object"&&"styledComponentId"in a}function ka(a,l){return a&&l?"".concat(a," ").concat(l):a||l||""}function Yu(a,l){if(a.length===0)return"";for(var o=a[0],u=1;u<a.length;u++)o+=a[u];return o}function Wl(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function vf(a,l,o){if(o===void 0&&(o=!1),!o&&!Wl(a)&&!Array.isArray(a))return l;if(Array.isArray(l))for(var u=0;u<l.length;u++)a[u]=vf(a[u],l[u]);else if(Wl(l))for(var u in l)a[u]=vf(a[u],l[u]);return a}function kf(a,l){Object.defineProperty(a,"toString",{value:l})}function ar(a){for(var l=[],o=1;o<arguments.length;o++)l[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(l.length>0?" Args: ".concat(l.join(", ")):""))}var Wx=(function(){function a(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l}return a.prototype.indexOfGroup=function(l){for(var o=0,u=0;u<l;u++)o+=this.groupSizes[u];return o},a.prototype.insertRules=function(l,o){if(l>=this.groupSizes.length){for(var u=this.groupSizes,c=u.length,f=c;l>=f;)if((f<<=1)<0)throw ar(16,"".concat(l));this.groupSizes=new Uint32Array(f),this.groupSizes.set(u),this.length=f;for(var p=c;p<f;p++)this.groupSizes[p]=0}for(var y=this.indexOfGroup(l+1),g=(p=0,o.length);p<g;p++)this.tag.insertRule(y,o[p])&&(this.groupSizes[l]++,y++)},a.prototype.clearGroup=function(l){if(l<this.length){var o=this.groupSizes[l],u=this.indexOfGroup(l),c=u+o;this.groupSizes[l]=0;for(var f=u;f<c;f++)this.tag.deleteRule(u)}},a.prototype.getGroup=function(l){var o="";if(l>=this.length||this.groupSizes[l]===0)return o;for(var u=this.groupSizes[l],c=this.indexOfGroup(l),f=c+u,p=c;p<f;p++)o+="".concat(this.tag.getRule(p)).concat(Df);return o},a})(),Bu=new Map,Gu=new Map,Uu=1,Eu=function(a){if(Bu.has(a))return Bu.get(a);for(;Gu.has(Uu);)Uu++;var l=Uu++;return Bu.set(a,l),Gu.set(l,a),l},Px=function(a,l){Uu=l+1,Bu.set(a,l),Gu.set(l,a)},Ix="style[".concat(Ni,"][").concat(Pm,'="').concat(to,'"]'),e5=new RegExp("^".concat(Ni,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),t5=function(a,l,o){for(var u,c=o.split(","),f=0,p=c.length;f<p;f++)(u=c[f])&&a.registerName(l,u)},n5=function(a,l){for(var o,u=((o=l.textContent)!==null&&o!==void 0?o:"").split(Df),c=[],f=0,p=u.length;f<p;f++){var y=u[f].trim();if(y){var g=y.match(e5);if(g){var m=0|parseInt(g[1],10),x=g[2];m!==0&&(Px(x,m),t5(a,x,g[3]),a.getTag().insertRules(m,c)),c.length=0}else c.push(y)}}},y1=function(a){for(var l=document.querySelectorAll(Ix),o=0,u=l.length;o<u;o++){var c=l[o];c&&c.getAttribute(Ni)!==Wm&&(n5(a,c),c.parentNode&&c.parentNode.removeChild(c))}};function a5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var uv=function(a){var l=document.head,o=a||l,u=document.createElement("style"),c=(function(y){var g=Array.from(y.querySelectorAll("style[".concat(Ni,"]")));return g[g.length-1]})(o),f=c!==void 0?c.nextSibling:null;u.setAttribute(Ni,Wm),u.setAttribute(Pm,to);var p=a5();return p&&u.setAttribute("nonce",p),o.insertBefore(u,f),u},i5=(function(){function a(l){this.element=uv(l),this.element.appendChild(document.createTextNode("")),this.sheet=(function(o){if(o.sheet)return o.sheet;for(var u=document.styleSheets,c=0,f=u.length;c<f;c++){var p=u[c];if(p.ownerNode===o)return p}throw ar(17)})(this.element),this.length=0}return a.prototype.insertRule=function(l,o){try{return this.sheet.insertRule(o,l),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},a.prototype.getRule=function(l){var o=this.sheet.cssRules[l];return o&&o.cssText?o.cssText:""},a})(),l5=(function(){function a(l){this.element=uv(l),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(l,o){if(l<=this.length&&l>=0){var u=document.createTextNode(o);return this.element.insertBefore(u,this.nodes[l]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},a.prototype.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},a})(),r5=(function(){function a(l){this.rules=[],this.length=0}return a.prototype.insertRule=function(l,o){return l<=this.length&&(this.rules.splice(l,0,o),this.length++,!0)},a.prototype.deleteRule=function(l){this.rules.splice(l,1),this.length--},a.prototype.getRule=function(l){return l<this.length?this.rules[l]:""},a})(),b1=qu,u5={isServer:!qu,useCSSOMInjection:!Bx},Xu=(function(){function a(l,o,u){l===void 0&&(l=Li),o===void 0&&(o={});var c=this;this.options=ct(ct({},u5),l),this.gs=o,this.names=new Map(u),this.server=!!l.isServer,!this.server&&qu&&b1&&(b1=!1,y1(this)),kf(this,function(){return(function(f){for(var p=f.getTag(),y=p.length,g="",m=function(S){var w=(function(P){return Gu.get(P)})(S);if(w===void 0)return"continue";var D=f.names.get(w),O=p.getGroup(S);if(D===void 0||!D.size||O.length===0)return"continue";var Y="".concat(Ni,".g").concat(S,'[id="').concat(w,'"]'),X="";D!==void 0&&D.forEach(function(P){P.length>0&&(X+="".concat(P,","))}),g+="".concat(O).concat(Y,'{content:"').concat(X,'"}').concat(Df)},x=0;x<y;x++)m(x);return g})(c)})}return a.registerId=function(l){return Eu(l)},a.prototype.rehydrate=function(){!this.server&&qu&&y1(this)},a.prototype.reconstructWithOptions=function(l,o){return o===void 0&&(o=!0),new a(ct(ct({},this.options),l),this.gs,o&&this.names||void 0)},a.prototype.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(l=(function(o){var u=o.useCSSOMInjection,c=o.target;return o.isServer?new r5(c):u?new i5(c):new l5(c)})(this.options),new Wx(l)));var l},a.prototype.hasNameForId=function(l,o){return this.names.has(l)&&this.names.get(l).has(o)},a.prototype.registerName=function(l,o){if(Eu(l),this.names.has(l))this.names.get(l).add(o);else{var u=new Set;u.add(o),this.names.set(l,u)}},a.prototype.insertRules=function(l,o,u){this.registerName(l,o),this.getTag().insertRules(Eu(l),u)},a.prototype.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},a.prototype.clearRules=function(l){this.getTag().clearGroup(Eu(l)),this.clearNames(l)},a.prototype.clearTag=function(){this.tag=void 0},a})(),o5=/&/g,s5=/^\s*\/\/.*$/gm;function ov(a,l){return a.map(function(o){return o.type==="rule"&&(o.value="".concat(l," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(l," ")),o.props=o.props.map(function(u){return"".concat(l," ").concat(u)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=ov(o.children,l)),o})}function c5(a){var l,o,u,c=Li,f=c.options,p=f===void 0?Li:f,y=c.plugins,g=y===void 0?no:y,m=function(w,D,O){return O.startsWith(o)&&O.endsWith(o)&&O.replaceAll(o,"").length>0?".".concat(l):w},x=g.slice();x.push(function(w){w.type===Wu&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(o5,o).replace(u,m))}),p.prefix&&x.push(Lx),x.push(Ax);var S=function(w,D,O,Y){D===void 0&&(D=""),O===void 0&&(O=""),Y===void 0&&(Y="&"),l=Y,o=D,u=new RegExp("\\".concat(o,"\\b"),"g");var X=w.replace(s5,""),P=_x(O||D?"".concat(O," ").concat(D," { ").concat(X," }"):X);p.namespace&&(P=ov(P,p.namespace));var M=[];return $u(P,Dx(x.concat(Nx(function($){return M.push($)})))),M};return S.hash=g.length?g.reduce(function(w,D){return D.name||ar(15),zi(w,D.name)},tv).toString():"",S}var f5=new Xu,gf=c5(),sv=qe.createContext({shouldForwardProp:void 0,styleSheet:f5,stylis:gf});sv.Consumer;qe.createContext(void 0);function yf(){return b.useContext(sv)}var cv=(function(){function a(l,o){var u=this;this.inject=function(c,f){f===void 0&&(f=gf);var p=u.name+f.hash;c.hasNameForId(u.id,p)||c.insertRules(u.id,p,f(u.rules,p,"@keyframes"))},this.name=l,this.id="sc-keyframes-".concat(l),this.rules=o,kf(this,function(){throw ar(12,String(u.name))})}return a.prototype.getName=function(l){return l===void 0&&(l=gf),this.name+l.hash},a})(),d5=function(a){return a>="A"&&a<="Z"};function x1(a){for(var l="",o=0;o<a.length;o++){var u=a[o];if(o===1&&u==="-"&&a[0]==="-")return a;d5(u)?l+="-"+u.toLowerCase():l+=u}return l.startsWith("ms-")?"-"+l:l}var fv=function(a){return a==null||a===!1||a===""},dv=function(a){var l,o,u=[];for(var c in a){var f=a[c];a.hasOwnProperty(c)&&!fv(f)&&(Array.isArray(f)&&f.isCss||ki(f)?u.push("".concat(x1(c),":"),f,";"):Wl(f)?u.push.apply(u,Mi(Mi(["".concat(c," {")],dv(f),!1),["}"],!1)):u.push("".concat(x1(c),": ").concat((l=c,(o=f)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||l in kx||l.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return u};function da(a,l,o,u){if(fv(a))return[];if(Lf(a))return[".".concat(a.styledComponentId)];if(ki(a)){if(!ki(f=a)||f.prototype&&f.prototype.isReactComponent||!l)return[a];var c=a(l);return da(c,l,o,u)}var f;return a instanceof cv?o?(a.inject(o,u),[a.getName(u)]):[a]:Wl(a)?dv(a):Array.isArray(a)?Array.prototype.concat.apply(no,a.map(function(p){return da(p,l,o,u)})):[a.toString()]}function hv(a){for(var l=0;l<a.length;l+=1){var o=a[l];if(ki(o)&&!Lf(o))return!1}return!0}var h5=nv(to),p5=(function(){function a(l,o,u){this.rules=l,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&hv(l),this.componentId=o,this.baseHash=zi(h5,o),this.baseStyle=u,Xu.registerId(o)}return a.prototype.generateAndInjectStyles=function(l,o,u){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(l,o,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))c=ka(c,this.staticRulesId);else{var f=Yu(da(this.rules,l,o,u)),p=mf(zi(this.baseHash,f)>>>0);if(!o.hasNameForId(this.componentId,p)){var y=u(f,".".concat(p),void 0,this.componentId);o.insertRules(this.componentId,p,y)}c=ka(c,p),this.staticRulesId=p}else{for(var g=zi(this.baseHash,u.hash),m="",x=0;x<this.rules.length;x++){var S=this.rules[x];if(typeof S=="string")m+=S;else if(S){var w=Yu(da(S,l,o,u));g=zi(g,w+x),m+=w}}if(m){var D=mf(g>>>0);o.hasNameForId(this.componentId,D)||o.insertRules(this.componentId,D,u(m,".".concat(D),void 0,this.componentId)),c=ka(c,D)}}return c},a})(),Bf=qe.createContext(void 0);Bf.Consumer;var Lc={};function m5(a,l,o){var u=Lf(a),c=a,f=!Nc(a),p=l.attrs,y=p===void 0?no:p,g=l.componentId,m=g===void 0?(function(G,L){var _=typeof G!="string"?"sc":h1(G);Lc[_]=(Lc[_]||0)+1;var J="".concat(_,"-").concat(Nf(to+_+Lc[_]));return L?"".concat(L,"-").concat(J):J})(l.displayName,l.parentComponentId):g,x=l.displayName,S=x===void 0?(function(G){return Nc(G)?"styled.".concat(G):"Styled(".concat(Yx(G),")")})(a):x,w=l.displayName&&l.componentId?"".concat(h1(l.displayName),"-").concat(l.componentId):l.componentId||m,D=u&&c.attrs?c.attrs.concat(y).filter(Boolean):y,O=l.shouldForwardProp;if(u&&c.shouldForwardProp){var Y=c.shouldForwardProp;if(l.shouldForwardProp){var X=l.shouldForwardProp;O=function(G,L){return Y(G,L)&&X(G,L)}}else O=Y}var P=new p5(o,w,u?c.componentStyle:void 0);function M(G,L){return(function(_,J,k){var Z=_.attrs,le=_.componentStyle,K=_.defaultProps,N=_.foldedComponentIds,te=_.styledComponentId,ne=_.target,T=qe.useContext(Bf),z=yf(),H=_.shouldForwardProp||z.shouldForwardProp,F=Im(J,T,K)||Li,re=(function(se,he,ye){for(var ke,Ce=ct(ct({},he),{className:void 0,theme:ye}),St=0;St<se.length;St+=1){var Kt=ki(ke=se[St])?ke(Ce):ke;for(var ft in Kt)Ce[ft]=ft==="className"?ka(Ce[ft],Kt[ft]):ft==="style"?ct(ct({},Ce[ft]),Kt[ft]):Kt[ft]}return he.className&&(Ce.className=ka(Ce.className,he.className)),Ce})(Z,J,F),ce=re.as||ne,C={};for(var V in re)re[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&re.theme===F||(V==="forwardedAs"?C.as=re.forwardedAs:H&&!H(V,ce)||(C[V]=re[V]));var ie=(function(se,he){var ye=yf(),ke=se.generateAndInjectStyles(he,ye.styleSheet,ye.stylis);return ke})(le,re),ae=ka(N,te);return ie&&(ae+=" "+ie),re.className&&(ae+=" "+re.className),C[Nc(ce)&&!ev.has(ce)?"class":"className"]=ae,k&&(C.ref=k),b.createElement(ce,C)})($,G,L)}M.displayName=S;var $=qe.forwardRef(M);return $.attrs=D,$.componentStyle=P,$.displayName=S,$.shouldForwardProp=O,$.foldedComponentIds=u?ka(c.foldedComponentIds,c.styledComponentId):"",$.styledComponentId=w,$.target=u?c.target:a,Object.defineProperty($,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(G){this._foldedDefaultProps=u?(function(L){for(var _=[],J=1;J<arguments.length;J++)_[J-1]=arguments[J];for(var k=0,Z=_;k<Z.length;k++)vf(L,Z[k],!0);return L})({},c.defaultProps,G):G}}),kf($,function(){return".".concat($.styledComponentId)}),f&&rv($,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),$}function S1(a,l){for(var o=[a[0]],u=0,c=l.length;u<c;u+=1)o.push(l[u],a[u+1]);return o}var w1=function(a){return Object.assign(a,{isCss:!0})};function ha(a){for(var l=[],o=1;o<arguments.length;o++)l[o-1]=arguments[o];if(ki(a)||Wl(a))return w1(da(S1(no,Mi([a],l,!0))));var u=a;return l.length===0&&u.length===1&&typeof u[0]=="string"?da(u):w1(da(S1(u,l)))}function bf(a,l,o){if(o===void 0&&(o=Li),!l)throw ar(1,l);var u=function(c){for(var f=[],p=1;p<arguments.length;p++)f[p-1]=arguments[p];return a(l,o,ha.apply(void 0,Mi([c],f,!1)))};return u.attrs=function(c){return bf(a,l,ct(ct({},o),{attrs:Array.prototype.concat(o.attrs,c).filter(Boolean)}))},u.withConfig=function(c){return bf(a,l,ct(ct({},o),c))},u}var pv=function(a){return bf(m5,a)},R=pv;ev.forEach(function(a){R[a]=pv(a)});var v5=(function(){function a(l,o){this.rules=l,this.componentId=o,this.isStatic=hv(l),Xu.registerId(this.componentId+1)}return a.prototype.createStyles=function(l,o,u,c){var f=c(Yu(da(this.rules,o,u,c)),""),p=this.componentId+l;u.insertRules(p,p,f)},a.prototype.removeStyles=function(l,o){o.clearRules(this.componentId+l)},a.prototype.renderStyles=function(l,o,u,c){l>2&&Xu.registerId(this.componentId+l),this.removeStyles(l,u),this.createStyles(l,o,u,c)},a})();function g5(a){for(var l=[],o=1;o<arguments.length;o++)l[o-1]=arguments[o];var u=ha.apply(void 0,Mi([a],l,!1)),c="sc-global-".concat(Nf(JSON.stringify(u))),f=new v5(u,c),p=function(g){var m=yf(),x=qe.useContext(Bf),S=qe.useRef(m.styleSheet.allocateGSInstance(c)).current;return m.styleSheet.server&&y(S,g,m.styleSheet,x,m.stylis),qe.useLayoutEffect(function(){if(!m.styleSheet.server)return y(S,g,m.styleSheet,x,m.stylis),function(){return f.removeStyles(S,m.styleSheet)}},[S,g,m.styleSheet,x,m.stylis]),null};function y(g,m,x,S,w){if(f.isStatic)f.renderStyles(g,Ux,x,w);else{var D=ct(ct({},m),{theme:Im(m,S,p.defaultProps)});f.renderStyles(g,D,x,w)}}return qe.memo(p)}function cn(a){for(var l=[],o=1;o<arguments.length;o++)l[o-1]=arguments[o];var u=Yu(ha.apply(void 0,Mi([a],l,!1))),c=Nf(u);return new cv(c,u)}var mv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},E1=qe.createContext&&qe.createContext(mv),y5=["attr","size","title"];function b5(a,l){if(a==null)return{};var o=x5(a,l),u,c;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)u=f[c],!(l.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(a,u)&&(o[u]=a[u])}return o}function x5(a,l){if(a==null)return{};var o={};for(var u in a)if(Object.prototype.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}function Vu(){return Vu=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(a[u]=o[u])}return a},Vu.apply(this,arguments)}function C1(a,l){var o=Object.keys(a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(a);l&&(u=u.filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable})),o.push.apply(o,u)}return o}function Qu(a){for(var l=1;l<arguments.length;l++){var o=arguments[l]!=null?arguments[l]:{};l%2?C1(Object(o),!0).forEach(function(u){S5(a,u,o[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(o)):C1(Object(o)).forEach(function(u){Object.defineProperty(a,u,Object.getOwnPropertyDescriptor(o,u))})}return a}function S5(a,l,o){return l=w5(l),l in a?Object.defineProperty(a,l,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[l]=o,a}function w5(a){var l=E5(a,"string");return typeof l=="symbol"?l:l+""}function E5(a,l){if(typeof a!="object"||!a)return a;var o=a[Symbol.toPrimitive];if(o!==void 0){var u=o.call(a,l);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(a)}function vv(a){return a&&a.map((l,o)=>qe.createElement(l.tag,Qu({key:o},l.attr),vv(l.child)))}function je(a){return l=>qe.createElement(C5,Vu({attr:Qu({},a.attr)},l),vv(a.child))}function C5(a){var l=o=>{var{attr:u,size:c,title:f}=a,p=b5(a,y5),y=c||o.size||"1em",g;return o.className&&(g=o.className),a.className&&(g=(g?g+" ":"")+a.className),qe.createElement("svg",Vu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,u,p,{className:g,style:Qu(Qu({color:a.color||o.color},o.style),a.style),height:y,width:y,xmlns:"http://www.w3.org/2000/svg"}),f&&qe.createElement("title",null,f),a.children)};return E1!==void 0?qe.createElement(E1.Consumer,null,o=>l(o)):l(mv)}function gv(a){return je({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"},child:[]}]})(a)}function T5(a){return je({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311h-.3v428h472.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32z"},child:[]}]})(a)}function yv(a){return je({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"},child:[]}]})(a)}function R5(a){return je({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"},child:[]}]})(a)}function Uf(a){return je({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"},child:[]}]})(a)}function Hf(a){return je({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"},child:[]}]})(a)}function bv(a){return je({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"},child:[]}]})(a)}function j5(a){return je({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"},child:[]}]})(a)}function O5(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(a)}function xv(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(a)}function z5(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(a)}function Sv(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(a)}function _5(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(a)}function wv(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(a)}function M5(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(a)}function Ev(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(a)}function T1(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}const A5="/instalearn/assets/vedioClip1-BQ1quwNm.mp4",D5="/instalearn/assets/test-BrOnAr5c.png",N5="/instalearn/assets/teacherProfilePic-DPrjIuTX.png",L5="/instalearn/assets/Slide1-CugONfFy.png",k5="/instalearn/assets/Slide2-D-tpOApl.png",B5="/instalearn/assets/Slide3-B6C07YuO.png",U5="/instalearn/assets/Slide4-BbthJNiF.png",H5="/instalearn/assets/Slide5-BsOulZPi.png",$5="/instalearn/assets/Slide6-8dQDHdn3.png",q5="/instalearn/assets/Slide7-C6b8m5yZ.png",Y5="/instalearn/assets/Slide8-DZBpeM0l.png",G5="/instalearn/assets/Slide9-CRnJTJ7g.png",Cu={},X5={videoClip1:A5},V5={test:D5},Cv={teacherProfilePic:N5},zn={Slide1:L5,Slide2:k5,Slide3:B5,Slide4:U5,Slide5:H5,Slide6:$5,Slide7:q5,Slide8:Y5,Slide9:G5},Q5=R.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
`,Z5=R.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,K5=R.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,J5=R.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,F5=R.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,W5=R.span`
  font-weight: 600;
  color: #0f172a;
`,P5=R.span`
  font-size: 12px;
  color: #64748b;
`,I5=R.button`
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
`,e3=R.div`
  position: relative;
  aspect-ratio: 1 / 1; /* Instagram-like square */
  background: linear-gradient(135deg, #eef2ff, #e0f7fa);
`,t3=R.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,n3=R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px 6px 12px;
`,a3=R.div`
  display: flex;
  gap: 12px;
`,Tu=R.button`
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
`,i3=R.div`
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
`,l3=R.div`
  display: flex;
`,r3=R.img`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
  margin-left: -6px;
  &:first-child { margin-left: 0; }
`,u3=R.div`
  padding: 2px 12px 14px 12px;
`,o3=R.p`
  margin: 6px 0 6px;
  font-size: 14px;
  line-height: 1.5;
  color: #0f172a;
`,s3=R.time`
  font-size: 12px;
  color: #64748b;
`;function c3({username:a="Siddharth Sir",userSubline:l="SST Teacher",avatarSrc:o=Cv.teacherProfilePic,title:u="Sense of Collective Identity - Overview",description:c="Understanding how shared culture, values, and history build national unity and belonging.",imgSrc:f="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",likedDefault:p=!1,savedDefault:y=!1,likeCountDefault:g=12,commenterAvatars:m=["https://i.pravatar.cc/100?img=12","https://i.pravatar.cc/100?img=32","https://i.pravatar.cc/100?img=8"],postUrl:x=typeof window<"u"?window.location.href:"",onLikeChange:S,onBookmarkChange:w,onShare:D}){const[O,Y]=b.useState(p),[X,P]=b.useState(y),[M,$]=b.useState(g),G=O?"Unlike":"Like",L=X?"Remove bookmark":"Bookmark",_=()=>{const le=!O;Y(le),$(K=>le?K+1:Math.max(0,K-1)),S&&S(le)},J=()=>{const le=!X;P(le),w&&w(le)},k=b.useMemo(()=>({title:u,text:`${a} on Infographics — ${u}`,url:x}),[u,a,x]),Z=async()=>{try{navigator.share?await navigator.share(k):navigator.clipboard&&(await navigator.clipboard.writeText(k.url),alert("Link copied to clipboard")),D&&D(k)}catch(le){console.error("Share failed:",le)}};return h.jsxs(Q5,{role:"article","aria-label":`${u} instagram-style post`,children:[h.jsxs(Z5,{children:[h.jsxs(K5,{children:[h.jsx(J5,{src:o,alt:`${a} avatar`}),h.jsxs(F5,{children:[h.jsx(W5,{children:a}),h.jsx(P5,{children:l})]})]}),h.jsx(I5,{"aria-label":"Post menu",title:"More",children:h.jsx(j5,{size:18})})]}),h.jsx(e3,{children:h.jsx(t3,{src:f,alt:u})}),h.jsxs(n3,{children:[h.jsxs(a3,{children:[h.jsx(Tu,{onClick:_,"aria-label":G,title:G,children:O?h.jsx(gv,{size:22}):h.jsx(yv,{size:22})}),h.jsx(Tu,{"aria-label":"Comment",title:"Comment",children:h.jsx(bv,{size:20})}),h.jsx(Tu,{onClick:Z,"aria-label":"Share",title:"Share",children:h.jsx(wv,{size:20})})]}),h.jsx(Tu,{onClick:J,"aria-label":L,title:L,children:X?h.jsx(Uf,{size:20}):h.jsx(Hf,{size:20})})]}),h.jsxs(i3,{"aria-label":`${M} likes`,children:[h.jsx(l3,{children:m.slice(0,3).map((le,K)=>h.jsx(r3,{src:le,alt:"reaction avatar"},K))}),h.jsxs("span",{children:[M," likes"]})]}),h.jsxs(u3,{children:[h.jsxs(o3,{children:[h.jsx("strong",{children:a})," ",c]}),h.jsx(s3,{dateTime:new Date().toISOString(),children:"Just now"})]})]})}var kc={},Hl={},Ru={},ju={},Bc={exports:{}},Uc,R1;function f3(){if(R1)return Uc;R1=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Uc=a,Uc}var Hc,j1;function d3(){if(j1)return Hc;j1=1;var a=f3();function l(){}function o(){}return o.resetWarningCache=l,Hc=function(){function u(p,y,g,m,x,S){if(S!==a){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}u.isRequired=u;function c(){return u}var f={array:u,bigint:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:c,element:u,elementType:u,instanceOf:c,node:u,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:o,resetWarningCache:l};return f.PropTypes=f,f},Hc}var O1;function Tv(){return O1||(O1=1,Bc.exports=d3()()),Bc.exports}var z1;function h3(){return z1||(z1=1,(function(a){(function(l,o){o(a,pa(),Tv())})(ju,function(l,o,u){Object.defineProperty(l,"__esModule",{value:!0}),l.setHasSupportToCaptureOption=O;var c=p(o),f=p(u);function p(M){return M&&M.__esModule?M:{default:M}}var y=Object.assign||function(M){for(var $=1;$<arguments.length;$++){var G=arguments[$];for(var L in G)Object.prototype.hasOwnProperty.call(G,L)&&(M[L]=G[L])}return M};function g(M,$){var G={};for(var L in M)$.indexOf(L)>=0||Object.prototype.hasOwnProperty.call(M,L)&&(G[L]=M[L]);return G}function m(M,$){if(!(M instanceof $))throw new TypeError("Cannot call a class as a function")}var x=(function(){function M($,G){for(var L=0;L<G.length;L++){var _=G[L];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty($,_.key,_)}}return function($,G,L){return G&&M($.prototype,G),L&&M($,L),$}})();function S(M,$){if(!M)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return $&&(typeof $=="object"||typeof $=="function")?$:M}function w(M,$){if(typeof $!="function"&&$!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof $);M.prototype=Object.create($&&$.prototype,{constructor:{value:M,enumerable:!1,writable:!0,configurable:!0}}),$&&(Object.setPrototypeOf?Object.setPrototypeOf(M,$):M.__proto__=$)}var D=!1;function O(M){D=M}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){O(!0)}}))}catch{}function Y(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return D?M:M.capture}function X(M){if("touches"in M){var $=M.touches[0],G=$.pageX,L=$.pageY;return{x:G,y:L}}var _=M.screenX,J=M.screenY;return{x:_,y:J}}var P=(function(M){w($,M);function $(){var G;m(this,$);for(var L=arguments.length,_=Array(L),J=0;J<L;J++)_[J]=arguments[J];var k=S(this,(G=$.__proto__||Object.getPrototypeOf($)).call.apply(G,[this].concat(_)));return k._handleSwipeStart=k._handleSwipeStart.bind(k),k._handleSwipeMove=k._handleSwipeMove.bind(k),k._handleSwipeEnd=k._handleSwipeEnd.bind(k),k._onMouseDown=k._onMouseDown.bind(k),k._onMouseMove=k._onMouseMove.bind(k),k._onMouseUp=k._onMouseUp.bind(k),k._setSwiperRef=k._setSwiperRef.bind(k),k}return x($,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,Y({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,Y({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(L){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(L))}},{key:"_onMouseMove",value:function(L){this.mouseDown&&this._handleSwipeMove(L)}},{key:"_onMouseUp",value:function(L){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(L)}},{key:"_handleSwipeStart",value:function(L){var _=X(L),J=_.x,k=_.y;this.moveStart={x:J,y:k},this.props.onSwipeStart(L)}},{key:"_handleSwipeMove",value:function(L){if(this.moveStart){var _=X(L),J=_.x,k=_.y,Z=J-this.moveStart.x,le=k-this.moveStart.y;this.moving=!0;var K=this.props.onSwipeMove({x:Z,y:le},L);K&&L.cancelable&&L.preventDefault(),this.movePosition={deltaX:Z,deltaY:le}}}},{key:"_handleSwipeEnd",value:function(L){this.props.onSwipeEnd(L);var _=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-_?this.props.onSwipeLeft(1,L):this.movePosition.deltaX>_&&this.props.onSwipeRight(1,L),this.movePosition.deltaY<-_?this.props.onSwipeUp(1,L):this.movePosition.deltaY>_&&this.props.onSwipeDown(1,L)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(L){this.swiper=L,this.props.innerRef(L)}},{key:"render",value:function(){var L=this.props;L.tagName;var _=L.className,J=L.style,k=L.children;L.allowMouseEvents,L.onSwipeUp,L.onSwipeDown,L.onSwipeLeft,L.onSwipeRight,L.onSwipeStart,L.onSwipeMove,L.onSwipeEnd,L.innerRef,L.tolerance;var Z=g(L,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return c.default.createElement(this.props.tagName,y({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:_,style:J},Z),k)}}]),$})(o.Component);P.displayName="ReactSwipe",P.propTypes={tagName:f.default.string,className:f.default.string,style:f.default.object,children:f.default.node,allowMouseEvents:f.default.bool,onSwipeUp:f.default.func,onSwipeDown:f.default.func,onSwipeLeft:f.default.func,onSwipeRight:f.default.func,onSwipeStart:f.default.func,onSwipeMove:f.default.func,onSwipeEnd:f.default.func,innerRef:f.default.func,tolerance:f.default.number.isRequired},P.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},l.default=P})})(ju)),ju}var _1;function Rv(){return _1||(_1=1,(function(a){(function(l,o){o(a,h3())})(Ru,function(l,o){Object.defineProperty(l,"__esModule",{value:!0});var u=c(o);function c(f){return f&&f.__esModule?f:{default:f}}l.default=u.default})})(Ru)),Ru}var $l={},$c={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var M1;function jv(){return M1||(M1=1,(function(a){(function(){var l={}.hasOwnProperty;function o(){for(var f="",p=0;p<arguments.length;p++){var y=arguments[p];y&&(f=c(f,u(y)))}return f}function u(f){if(typeof f=="string"||typeof f=="number")return f;if(typeof f!="object")return"";if(Array.isArray(f))return o.apply(null,f);if(f.toString!==Object.prototype.toString&&!f.toString.toString().includes("[native code]"))return f.toString();var p="";for(var y in f)l.call(f,y)&&f[y]&&(p=c(p,y));return p}function c(f,p){return p?f?f+" "+p:f+p:f}a.exports?(o.default=o,a.exports=o):window.classNames=o})()})($c)),$c.exports}var A1;function Ov(){if(A1)return $l;A1=1,Object.defineProperty($l,"__esModule",{value:!0}),$l.default=void 0;var a=l(jv());function l(c){return c&&c.__esModule?c:{default:c}}function o(c,f,p){return f in c?Object.defineProperty(c,f,{value:p,enumerable:!0,configurable:!0,writable:!0}):c[f]=p,c}var u={ROOT:function(f){return(0,a.default)(o({"carousel-root":!0},f||"",!!f))},CAROUSEL:function(f){return(0,a.default)({carousel:!0,"carousel-slider":f})},WRAPPER:function(f,p){return(0,a.default)({"thumbs-wrapper":!f,"slider-wrapper":f,"axis-horizontal":p==="horizontal","axis-vertical":p!=="horizontal"})},SLIDER:function(f,p){return(0,a.default)({thumbs:!f,slider:f,animated:!p})},ITEM:function(f,p,y){return(0,a.default)({thumb:!f,slide:f,selected:p,previous:y})},ARROW_PREV:function(f){return(0,a.default)({"control-arrow control-prev":!0,"control-disabled":f})},ARROW_NEXT:function(f){return(0,a.default)({"control-arrow control-next":!0,"control-disabled":f})},DOT:function(f){return(0,a.default)({dot:!0,selected:f})}};return $l.default=u,$l}var ql={},Yl={},D1;function p3(){if(D1)return Yl;D1=1,Object.defineProperty(Yl,"__esModule",{value:!0}),Yl.outerWidth=void 0;var a=function(o){var u=o.offsetWidth,c=getComputedStyle(o);return u+=parseInt(c.marginLeft)+parseInt(c.marginRight),u};return Yl.outerWidth=a,Yl}var Gl={},N1;function $f(){if(N1)return Gl;N1=1,Object.defineProperty(Gl,"__esModule",{value:!0}),Gl.default=void 0;var a=function(o,u,c){var f=o===0?o:o+u,p=c==="horizontal"?[f,0,0]:[0,f,0],y="translate3d",g="("+p.join(",")+")";return y+g};return Gl.default=a,Gl}var Xl={},L1;function zv(){if(L1)return Xl;L1=1,Object.defineProperty(Xl,"__esModule",{value:!0}),Xl.default=void 0;var a=function(){return window};return Xl.default=a,Xl}var k1;function _v(){if(k1)return ql;k1=1,Object.defineProperty(ql,"__esModule",{value:!0}),ql.default=void 0;var a=g(pa()),l=p(Ov()),o=p3(),u=p($f()),c=p(Rv()),f=p(zv());function p(k){return k&&k.__esModule?k:{default:k}}function y(){if(typeof WeakMap!="function")return null;var k=new WeakMap;return y=function(){return k},k}function g(k){if(k&&k.__esModule)return k;if(k===null||m(k)!=="object"&&typeof k!="function")return{default:k};var Z=y();if(Z&&Z.has(k))return Z.get(k);var le={},K=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in k)if(Object.prototype.hasOwnProperty.call(k,N)){var te=K?Object.getOwnPropertyDescriptor(k,N):null;te&&(te.get||te.set)?Object.defineProperty(le,N,te):le[N]=k[N]}return le.default=k,Z&&Z.set(k,le),le}function m(k){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?m=function(le){return typeof le}:m=function(le){return le&&typeof Symbol=="function"&&le.constructor===Symbol&&le!==Symbol.prototype?"symbol":typeof le},m(k)}function x(){return x=Object.assign||function(k){for(var Z=1;Z<arguments.length;Z++){var le=arguments[Z];for(var K in le)Object.prototype.hasOwnProperty.call(le,K)&&(k[K]=le[K])}return k},x.apply(this,arguments)}function S(k,Z){if(!(k instanceof Z))throw new TypeError("Cannot call a class as a function")}function w(k,Z){for(var le=0;le<Z.length;le++){var K=Z[le];K.enumerable=K.enumerable||!1,K.configurable=!0,"value"in K&&(K.writable=!0),Object.defineProperty(k,K.key,K)}}function D(k,Z,le){return Z&&w(k.prototype,Z),k}function O(k,Z){if(typeof Z!="function"&&Z!==null)throw new TypeError("Super expression must either be null or a function");k.prototype=Object.create(Z&&Z.prototype,{constructor:{value:k,writable:!0,configurable:!0}}),Z&&Y(k,Z)}function Y(k,Z){return Y=Object.setPrototypeOf||function(K,N){return K.__proto__=N,K},Y(k,Z)}function X(k){var Z=$();return function(){var K=G(k),N;if(Z){var te=G(this).constructor;N=Reflect.construct(K,arguments,te)}else N=K.apply(this,arguments);return P(this,N)}}function P(k,Z){return Z&&(m(Z)==="object"||typeof Z=="function")?Z:M(k)}function M(k){if(k===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return k}function $(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function G(k){return G=Object.setPrototypeOf?Object.getPrototypeOf:function(le){return le.__proto__||Object.getPrototypeOf(le)},G(k)}function L(k,Z,le){return Z in k?Object.defineProperty(k,Z,{value:le,enumerable:!0,configurable:!0,writable:!0}):k[Z]=le,k}var _=function(Z){return Z.hasOwnProperty("key")},J=(function(k){O(le,k);var Z=X(le);function le(K){var N;return S(this,le),N=Z.call(this,K),L(M(N),"itemsWrapperRef",void 0),L(M(N),"itemsListRef",void 0),L(M(N),"thumbsRef",void 0),L(M(N),"setItemsWrapperRef",function(te){N.itemsWrapperRef=te}),L(M(N),"setItemsListRef",function(te){N.itemsListRef=te}),L(M(N),"setThumbsRef",function(te,ne){N.thumbsRef||(N.thumbsRef=[]),N.thumbsRef[ne]=te}),L(M(N),"updateSizes",function(){if(!(!N.props.children||!N.itemsWrapperRef||!N.thumbsRef)){var te=a.Children.count(N.props.children),ne=N.itemsWrapperRef.clientWidth,T=N.props.thumbWidth?N.props.thumbWidth:(0,o.outerWidth)(N.thumbsRef[0]),z=Math.floor(ne/T),H=z<te,F=H?te-z:0;N.setState(function(re,ce){return{itemSize:T,visibleItems:z,firstItem:H?N.getFirstItem(ce.selectedItem):0,lastPosition:F,showArrows:H}})}}),L(M(N),"handleClickItem",function(te,ne,T){if(!_(T)||T.key==="Enter"){var z=N.props.onSelectItem;typeof z=="function"&&z(te,ne)}}),L(M(N),"onSwipeStart",function(){N.setState({swiping:!0})}),L(M(N),"onSwipeEnd",function(){N.setState({swiping:!1})}),L(M(N),"onSwipeMove",function(te){var ne=te.x;if(!N.state.itemSize||!N.itemsWrapperRef||!N.state.visibleItems)return!1;var T=0,z=a.Children.count(N.props.children),H=-(N.state.firstItem*100)/N.state.visibleItems,F=Math.max(z-N.state.visibleItems,0),re=-F*100/N.state.visibleItems;H===T&&ne>0&&(ne=0),H===re&&ne<0&&(ne=0);var ce=N.itemsWrapperRef.clientWidth,C=H+100/(ce/ne);return N.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(V){N.itemsListRef.style[V]=(0,u.default)(C,"%",N.props.axis)}),!0}),L(M(N),"slideRight",function(te){N.moveTo(N.state.firstItem-(typeof te=="number"?te:1))}),L(M(N),"slideLeft",function(te){N.moveTo(N.state.firstItem+(typeof te=="number"?te:1))}),L(M(N),"moveTo",function(te){te=te<0?0:te,te=te>=N.state.lastPosition?N.state.lastPosition:te,N.setState({firstItem:te})}),N.state={selectedItem:K.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},N}return D(le,[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(N){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==N.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,f.default)().addEventListener("resize",this.updateSizes),(0,f.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,f.default)().removeEventListener("resize",this.updateSizes),(0,f.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(N){var te=N;return N>=this.state.lastPosition&&(te=this.state.lastPosition),N<this.state.firstItem+this.state.visibleItems&&(te=this.state.firstItem),N<this.state.firstItem&&(te=N),te}},{key:"renderItems",value:function(){var N=this;return this.props.children.map(function(te,ne){var T=l.default.ITEM(!1,ne===N.state.selectedItem),z={key:ne,ref:function(F){return N.setThumbsRef(F,ne)},className:T,onClick:N.handleClickItem.bind(N,ne,N.props.children[ne]),onKeyDown:N.handleClickItem.bind(N,ne,N.props.children[ne]),"aria-label":"".concat(N.props.labels.item," ").concat(ne+1),style:{width:N.props.thumbWidth}};return a.default.createElement("li",x({},z,{role:"button",tabIndex:0}),te)})}},{key:"render",value:function(){var N=this;if(!this.props.children)return null;var te=a.Children.count(this.props.children)>1,ne=this.state.showArrows&&this.state.firstItem>0,T=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,z={},H=-this.state.firstItem*(this.state.itemSize||0),F=(0,u.default)(H,"px",this.props.axis),re=this.props.transitionTime+"ms";return z={WebkitTransform:F,MozTransform:F,MsTransform:F,OTransform:F,transform:F,msTransform:F,WebkitTransitionDuration:re,MozTransitionDuration:re,MsTransitionDuration:re,OTransitionDuration:re,transitionDuration:re,msTransitionDuration:re},a.default.createElement("div",{className:l.default.CAROUSEL(!1)},a.default.createElement("div",{className:l.default.WRAPPER(!1),ref:this.setItemsWrapperRef},a.default.createElement("button",{type:"button",className:l.default.ARROW_PREV(!ne),onClick:function(){return N.slideRight()},"aria-label":this.props.labels.leftArrow}),te?a.default.createElement(c.default,{tagName:"ul",className:l.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:z,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):a.default.createElement("ul",{className:l.default.SLIDER(!1,this.state.swiping),ref:function(C){return N.setItemsListRef(C)},style:z},this.renderItems()),a.default.createElement("button",{type:"button",className:l.default.ARROW_NEXT(!T),onClick:function(){return N.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}]),le})(a.Component);return ql.default=J,L(J,"displayName","Thumbs"),L(J,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350}),ql}var Vl={},B1;function m3(){if(B1)return Vl;B1=1,Object.defineProperty(Vl,"__esModule",{value:!0}),Vl.default=void 0;var a=function(){return document};return Vl.default=a,Vl}var At={},U1;function Mv(){if(U1)return At;U1=1,Object.defineProperty(At,"__esModule",{value:!0}),At.setPosition=At.getPosition=At.isKeyboardEvent=At.defaultStatusFormatter=At.noop=void 0;var a=pa(),l=o($f());function o(g){return g&&g.__esModule?g:{default:g}}var u=function(){};At.noop=u;var c=function(m,x){return"".concat(m," of ").concat(x)};At.defaultStatusFormatter=c;var f=function(m){return m?m.hasOwnProperty("key"):!1};At.isKeyboardEvent=f;var p=function(m,x){if(x.infiniteLoop&&++m,m===0)return 0;var S=a.Children.count(x.children);if(x.centerMode&&x.axis==="horizontal"){var w=-m*x.centerSlidePercentage,D=S-1;return m&&(m!==D||x.infiniteLoop)?w+=(100-x.centerSlidePercentage)/2:m===D&&(w+=100-x.centerSlidePercentage),w}return-m*100};At.getPosition=p;var y=function(m,x){var S={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(w){S[w]=(0,l.default)(m,"%",x)}),S};return At.setPosition=y,At}var Pt={},H1;function v3(){if(H1)return Pt;H1=1,Object.defineProperty(Pt,"__esModule",{value:!0}),Pt.fadeAnimationHandler=Pt.slideStopSwipingHandler=Pt.slideSwipeAnimationHandler=Pt.slideAnimationHandler=void 0;var a=pa(),l=u($f()),o=Mv();function u(S){return S&&S.__esModule?S:{default:S}}function c(S,w){var D=Object.keys(S);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(S);w&&(O=O.filter(function(Y){return Object.getOwnPropertyDescriptor(S,Y).enumerable})),D.push.apply(D,O)}return D}function f(S){for(var w=1;w<arguments.length;w++){var D=arguments[w]!=null?arguments[w]:{};w%2?c(Object(D),!0).forEach(function(O){p(S,O,D[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(S,Object.getOwnPropertyDescriptors(D)):c(Object(D)).forEach(function(O){Object.defineProperty(S,O,Object.getOwnPropertyDescriptor(D,O))})}return S}function p(S,w,D){return w in S?Object.defineProperty(S,w,{value:D,enumerable:!0,configurable:!0,writable:!0}):S[w]=D,S}var y=function(w,D){var O={},Y=D.selectedItem,X=Y,P=a.Children.count(w.children)-1,M=w.infiniteLoop&&(Y<0||Y>P);if(M)return X<0?w.centerMode&&w.centerSlidePercentage&&w.axis==="horizontal"?O.itemListStyle=(0,o.setPosition)(-(P+2)*w.centerSlidePercentage-(100-w.centerSlidePercentage)/2,w.axis):O.itemListStyle=(0,o.setPosition)(-(P+2)*100,w.axis):X>P&&(O.itemListStyle=(0,o.setPosition)(0,w.axis)),O;var $=(0,o.getPosition)(Y,w),G=(0,l.default)($,"%",w.axis),L=w.transitionTime+"ms";return O.itemListStyle={WebkitTransform:G,msTransform:G,OTransform:G,transform:G},D.swiping||(O.itemListStyle=f(f({},O.itemListStyle),{},{WebkitTransitionDuration:L,MozTransitionDuration:L,OTransitionDuration:L,transitionDuration:L,msTransitionDuration:L})),O};Pt.slideAnimationHandler=y;var g=function(w,D,O,Y){var X={},P=D.axis==="horizontal",M=a.Children.count(D.children),$=0,G=(0,o.getPosition)(O.selectedItem,D),L=D.infiniteLoop?(0,o.getPosition)(M-1,D)-100:(0,o.getPosition)(M-1,D),_=P?w.x:w.y,J=_;G===$&&_>0&&(J=0),G===L&&_<0&&(J=0);var k=G+100/(O.itemSize/J),Z=Math.abs(_)>D.swipeScrollTolerance;return D.infiniteLoop&&Z&&(O.selectedItem===0&&k>-100?k-=M*100:O.selectedItem===M-1&&k<-M*100&&(k+=M*100)),(!D.preventMovementUntilSwipeScrollTolerance||Z||O.swipeMovementStarted)&&(O.swipeMovementStarted||Y({swipeMovementStarted:!0}),X.itemListStyle=(0,o.setPosition)(k,D.axis)),Z&&!O.cancelClick&&Y({cancelClick:!0}),X};Pt.slideSwipeAnimationHandler=g;var m=function(w,D){var O=(0,o.getPosition)(D.selectedItem,w),Y=(0,o.setPosition)(O,w.axis);return{itemListStyle:Y}};Pt.slideStopSwipingHandler=m;var x=function(w,D){var O=w.transitionTime+"ms",Y="ease-in-out",X={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:Y,msTransitionTimingFunction:Y,MozTransitionTimingFunction:Y,WebkitTransitionTimingFunction:Y,OTransitionTimingFunction:Y};return D.swiping||(X=f(f({},X),{},{WebkitTransitionDuration:O,MozTransitionDuration:O,OTransitionDuration:O,transitionDuration:O,msTransitionDuration:O})),{slideStyle:X,selectedStyle:f(f({},X),{},{opacity:1,position:"relative"}),prevStyle:f({},X)}};return Pt.fadeAnimationHandler=x,Pt}var $1;function g3(){if($1)return Hl;$1=1,Object.defineProperty(Hl,"__esModule",{value:!0}),Hl.default=void 0;var a=x(pa()),l=g(Rv()),o=g(Ov()),u=g(_v()),c=g(m3()),f=g(zv()),p=Mv(),y=v3();function g(K){return K&&K.__esModule?K:{default:K}}function m(){if(typeof WeakMap!="function")return null;var K=new WeakMap;return m=function(){return K},K}function x(K){if(K&&K.__esModule)return K;if(K===null||S(K)!=="object"&&typeof K!="function")return{default:K};var N=m();if(N&&N.has(K))return N.get(K);var te={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var T in K)if(Object.prototype.hasOwnProperty.call(K,T)){var z=ne?Object.getOwnPropertyDescriptor(K,T):null;z&&(z.get||z.set)?Object.defineProperty(te,T,z):te[T]=K[T]}return te.default=K,N&&N.set(K,te),te}function S(K){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?S=function(te){return typeof te}:S=function(te){return te&&typeof Symbol=="function"&&te.constructor===Symbol&&te!==Symbol.prototype?"symbol":typeof te},S(K)}function w(){return w=Object.assign||function(K){for(var N=1;N<arguments.length;N++){var te=arguments[N];for(var ne in te)Object.prototype.hasOwnProperty.call(te,ne)&&(K[ne]=te[ne])}return K},w.apply(this,arguments)}function D(K,N){var te=Object.keys(K);if(Object.getOwnPropertySymbols){var ne=Object.getOwnPropertySymbols(K);N&&(ne=ne.filter(function(T){return Object.getOwnPropertyDescriptor(K,T).enumerable})),te.push.apply(te,ne)}return te}function O(K){for(var N=1;N<arguments.length;N++){var te=arguments[N]!=null?arguments[N]:{};N%2?D(Object(te),!0).forEach(function(ne){Z(K,ne,te[ne])}):Object.getOwnPropertyDescriptors?Object.defineProperties(K,Object.getOwnPropertyDescriptors(te)):D(Object(te)).forEach(function(ne){Object.defineProperty(K,ne,Object.getOwnPropertyDescriptor(te,ne))})}return K}function Y(K,N){if(!(K instanceof N))throw new TypeError("Cannot call a class as a function")}function X(K,N){for(var te=0;te<N.length;te++){var ne=N[te];ne.enumerable=ne.enumerable||!1,ne.configurable=!0,"value"in ne&&(ne.writable=!0),Object.defineProperty(K,ne.key,ne)}}function P(K,N,te){return N&&X(K.prototype,N),K}function M(K,N){if(typeof N!="function"&&N!==null)throw new TypeError("Super expression must either be null or a function");K.prototype=Object.create(N&&N.prototype,{constructor:{value:K,writable:!0,configurable:!0}}),N&&$(K,N)}function $(K,N){return $=Object.setPrototypeOf||function(ne,T){return ne.__proto__=T,ne},$(K,N)}function G(K){var N=J();return function(){var ne=k(K),T;if(N){var z=k(this).constructor;T=Reflect.construct(ne,arguments,z)}else T=ne.apply(this,arguments);return L(this,T)}}function L(K,N){return N&&(S(N)==="object"||typeof N=="function")?N:_(K)}function _(K){if(K===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return K}function J(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function k(K){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(te){return te.__proto__||Object.getPrototypeOf(te)},k(K)}function Z(K,N,te){return N in K?Object.defineProperty(K,N,{value:te,enumerable:!0,configurable:!0,writable:!0}):K[N]=te,K}var le=(function(K){M(te,K);var N=G(te);function te(ne){var T;Y(this,te),T=N.call(this,ne),Z(_(T),"thumbsRef",void 0),Z(_(T),"carouselWrapperRef",void 0),Z(_(T),"listRef",void 0),Z(_(T),"itemsRef",void 0),Z(_(T),"timer",void 0),Z(_(T),"animationHandler",void 0),Z(_(T),"setThumbsRef",function(H){T.thumbsRef=H}),Z(_(T),"setCarouselWrapperRef",function(H){T.carouselWrapperRef=H}),Z(_(T),"setListRef",function(H){T.listRef=H}),Z(_(T),"setItemsRef",function(H,F){T.itemsRef||(T.itemsRef=[]),T.itemsRef[F]=H}),Z(_(T),"autoPlay",function(){a.Children.count(T.props.children)<=1||(T.clearAutoPlay(),T.props.autoPlay&&(T.timer=setTimeout(function(){T.increment()},T.props.interval)))}),Z(_(T),"clearAutoPlay",function(){T.timer&&clearTimeout(T.timer)}),Z(_(T),"resetAutoPlay",function(){T.clearAutoPlay(),T.autoPlay()}),Z(_(T),"stopOnHover",function(){T.setState({isMouseEntered:!0},T.clearAutoPlay)}),Z(_(T),"startOnLeave",function(){T.setState({isMouseEntered:!1},T.autoPlay)}),Z(_(T),"isFocusWithinTheCarousel",function(){return T.carouselWrapperRef?!!((0,c.default)().activeElement===T.carouselWrapperRef||T.carouselWrapperRef.contains((0,c.default)().activeElement)):!1}),Z(_(T),"navigateWithKeyboard",function(H){if(T.isFocusWithinTheCarousel()){var F=T.props.axis,re=F==="horizontal",ce={ArrowUp:38,ArrowRight:39,ArrowDown:40,ArrowLeft:37},C=re?ce.ArrowRight:ce.ArrowDown,V=re?ce.ArrowLeft:ce.ArrowUp;C===H.keyCode?T.increment():V===H.keyCode&&T.decrement()}}),Z(_(T),"updateSizes",function(){if(!(!T.state.initialized||!T.itemsRef||T.itemsRef.length===0)){var H=T.props.axis==="horizontal",F=T.itemsRef[0];if(F){var re=H?F.clientWidth:F.clientHeight;T.setState({itemSize:re}),T.thumbsRef&&T.thumbsRef.updateSizes()}}}),Z(_(T),"setMountState",function(){T.setState({hasMount:!0}),T.updateSizes()}),Z(_(T),"handleClickItem",function(H,F){if(a.Children.count(T.props.children)!==0){if(T.state.cancelClick){T.setState({cancelClick:!1});return}T.props.onClickItem(H,F),H!==T.state.selectedItem&&T.setState({selectedItem:H})}}),Z(_(T),"handleOnChange",function(H,F){a.Children.count(T.props.children)<=1||T.props.onChange(H,F)}),Z(_(T),"handleClickThumb",function(H,F){T.props.onClickThumb(H,F),T.moveTo(H)}),Z(_(T),"onSwipeStart",function(H){T.setState({swiping:!0}),T.props.onSwipeStart(H)}),Z(_(T),"onSwipeEnd",function(H){T.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),T.props.onSwipeEnd(H),T.clearAutoPlay(),T.state.autoPlay&&T.autoPlay()}),Z(_(T),"onSwipeMove",function(H,F){T.props.onSwipeMove(F);var re=T.props.swipeAnimationHandler(H,T.props,T.state,T.setState.bind(_(T)));return T.setState(O({},re)),!!Object.keys(re).length}),Z(_(T),"decrement",function(){var H=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;T.moveTo(T.state.selectedItem-(typeof H=="number"?H:1))}),Z(_(T),"increment",function(){var H=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;T.moveTo(T.state.selectedItem+(typeof H=="number"?H:1))}),Z(_(T),"moveTo",function(H){if(typeof H=="number"){var F=a.Children.count(T.props.children)-1;H<0&&(H=T.props.infiniteLoop?F:0),H>F&&(H=T.props.infiniteLoop?0:F),T.selectItem({selectedItem:H}),T.state.autoPlay&&T.state.isMouseEntered===!1&&T.resetAutoPlay()}}),Z(_(T),"onClickNext",function(){T.increment(1)}),Z(_(T),"onClickPrev",function(){T.decrement(1)}),Z(_(T),"onSwipeForward",function(){T.increment(1),T.props.emulateTouch&&T.setState({cancelClick:!0})}),Z(_(T),"onSwipeBackwards",function(){T.decrement(1),T.props.emulateTouch&&T.setState({cancelClick:!0})}),Z(_(T),"changeItem",function(H){return function(F){(!(0,p.isKeyboardEvent)(F)||F.key==="Enter")&&T.moveTo(H)}}),Z(_(T),"selectItem",function(H){T.setState(O({previousItem:T.state.selectedItem},H),function(){T.setState(T.animationHandler(T.props,T.state))}),T.handleOnChange(H.selectedItem,a.Children.toArray(T.props.children)[H.selectedItem])}),Z(_(T),"getInitialImage",function(){var H=T.props.selectedItem,F=T.itemsRef&&T.itemsRef[H],re=F&&F.getElementsByTagName("img")||[];return re[0]}),Z(_(T),"getVariableItemHeight",function(H){var F=T.itemsRef&&T.itemsRef[H];if(T.state.hasMount&&F&&F.children.length){var re=F.children[0].getElementsByTagName("img")||[];if(re.length>0){var ce=re[0];if(!ce.complete){var C=function ae(){T.forceUpdate(),ce.removeEventListener("load",ae)};ce.addEventListener("load",C)}}var V=re[0]||F.children[0],ie=V.clientHeight;return ie>0?ie:null}return null});var z={initialized:!1,previousItem:ne.selectedItem,selectedItem:ne.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:ne.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return T.animationHandler=typeof ne.animationHandler=="function"&&ne.animationHandler||ne.animationHandler==="fade"&&y.fadeAnimationHandler||y.slideAnimationHandler,T.state=O(O({},z),T.animationHandler(ne,z)),T}return P(te,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(T,z){!T.children&&this.props.children&&!this.state.initialized&&this.setupCarousel(),!T.autoFocus&&this.props.autoFocus&&this.forceFocus(),z.swiping&&!this.state.swiping&&this.setState(O({},this.props.stopSwipingHandler(this.props,this.state))),(T.selectedItem!==this.props.selectedItem||T.centerMode!==this.props.centerMode)&&(this.updateSizes(),this.moveTo(this.props.selectedItem)),T.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var T=this;this.bindEvents(),this.state.autoPlay&&a.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},function(){var z=T.getInitialImage();z&&!z.complete?z.addEventListener("load",T.setMountState):T.setMountState()})}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var T=this.carouselWrapperRef;this.props.stopOnHover&&T&&(T.addEventListener("mouseenter",this.stopOnHover),T.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var T=this.carouselWrapperRef;this.props.stopOnHover&&T&&(T.removeEventListener("mouseenter",this.stopOnHover),T.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,f.default)().addEventListener("resize",this.updateSizes),(0,f.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,c.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,f.default)().removeEventListener("resize",this.updateSizes),(0,f.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var T=this.getInitialImage();T&&T.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,c.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var T;(T=this.carouselWrapperRef)===null||T===void 0||T.focus()}},{key:"renderItems",value:function(T){var z=this;return this.props.children?a.Children.map(this.props.children,function(H,F){var re=F===z.state.selectedItem,ce=F===z.state.previousItem,C=re&&z.state.selectedStyle||ce&&z.state.prevStyle||z.state.slideStyle||{};z.props.centerMode&&z.props.axis==="horizontal"&&(C=O(O({},C),{},{minWidth:z.props.centerSlidePercentage+"%"})),z.state.swiping&&z.state.swipeMovementStarted&&(C=O(O({},C),{},{pointerEvents:"none"}));var V={ref:function(ae){return z.setItemsRef(ae,F)},key:"itemKey"+F+(T?"clone":""),className:o.default.ITEM(!0,F===z.state.selectedItem,F===z.state.previousItem),onClick:z.handleClickItem.bind(z,F,H),style:C};return a.default.createElement("li",V,z.props.renderItem(H,{isSelected:F===z.state.selectedItem,isPrevious:F===z.state.previousItem}))}):[]}},{key:"renderControls",value:function(){var T=this,z=this.props,H=z.showIndicators,F=z.labels,re=z.renderIndicator,ce=z.children;return H?a.default.createElement("ul",{className:"control-dots"},a.Children.map(ce,function(C,V){return re&&re(T.changeItem(V),V===T.state.selectedItem,V,F.item)})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?a.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,a.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return!this.props.showThumbs||!this.props.children||a.Children.count(this.props.children)===0?null:a.default.createElement(u.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children))}},{key:"render",value:function(){var T=this;if(!this.props.children||a.Children.count(this.props.children)===0)return null;var z=this.props.swipeable&&a.Children.count(this.props.children)>1,H=this.props.axis==="horizontal",F=this.props.showArrows&&a.Children.count(this.props.children)>1,re=F&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,ce=F&&(this.state.selectedItem<a.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,C=this.renderItems(!0),V=C.shift(),ie=C.pop(),ae={className:o.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},se={};if(H){if(ae.onSwipeLeft=this.onSwipeForward,ae.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var he=this.getVariableItemHeight(this.state.selectedItem);se.height=he||"auto"}}else ae.onSwipeUp=this.props.verticalSwipe==="natural"?this.onSwipeBackwards:this.onSwipeForward,ae.onSwipeDown=this.props.verticalSwipe==="natural"?this.onSwipeForward:this.onSwipeBackwards,ae.style=O(O({},ae.style),{},{height:this.state.itemSize}),se.height=this.state.itemSize;return a.default.createElement("div",{"aria-label":this.props.ariaLabel,className:o.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},a.default.createElement("div",{className:o.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,re,this.props.labels.leftArrow),a.default.createElement("div",{className:o.default.WRAPPER(!0,this.props.axis),style:se},z?a.default.createElement(l.default,w({tagName:"ul",innerRef:this.setListRef},ae,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&ie,this.renderItems(),this.props.infiniteLoop&&V):a.default.createElement("ul",{className:o.default.SLIDER(!0,this.state.swiping),ref:function(ke){return T.setListRef(ke)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&ie,this.renderItems(),this.props.infiniteLoop&&V)),this.props.renderArrowNext(this.onClickNext,ce,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}]),te})(a.default.Component);return Hl.default=le,Z(le,"displayName","Carousel"),Z(le,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:p.noop,onClickThumb:p.noop,onChange:p.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(N,te,ne){return a.default.createElement("button",{type:"button","aria-label":ne,className:o.default.ARROW_PREV(!te),onClick:N})},renderArrowNext:function(N,te,ne){return a.default.createElement("button",{type:"button","aria-label":ne,className:o.default.ARROW_NEXT(!te),onClick:N})},renderIndicator:function(N,te,ne,T){return a.default.createElement("li",{className:o.default.DOT(te),onClick:N,onKeyDown:N,value:ne,key:ne,role:"button",tabIndex:0,"aria-label":"".concat(T," ").concat(ne+1)})},renderItem:function(N){return N},renderThumbs:function(N){var te=a.Children.map(N,function(ne){var T=ne;if(ne.type!=="img"&&(T=a.Children.toArray(ne.props.children).find(function(z){return z.type==="img"})),!!T)return T});return te.filter(function(ne){return ne}).length===0?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):te},statusFormatter:p.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:y.slideSwipeAnimationHandler,stopSwipingHandler:y.slideStopSwipingHandler}),Hl}var q1={},Y1;function y3(){return Y1||(Y1=1),q1}var G1;function b3(){return G1||(G1=1,(function(a){Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"Carousel",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(a,"CarouselProps",{enumerable:!0,get:function(){return o.CarouselProps}}),Object.defineProperty(a,"Thumbs",{enumerable:!0,get:function(){return u.default}});var l=c(g3()),o=y3(),u=c(_v());function c(f){return f&&f.__esModule?f:{default:f}}})(kc)),kc}var x3=b3();const S3=g5`
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
`,w3=R.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(2, 6, 23, 0.08);
`,E3=R.div`
  position: relative;
  aspect-ratio: 1 / 1; /* Instagram square */
  background: #f1f5f9;
`,C3=R.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,T3=R.div`
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
`,R3=R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`,j3=R.div`
  display: flex;
  gap: 12px;
`,Ou=R.button`
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
`,O3=R.div`
  padding: 0 12px 12px 12px;
`,z3=R.div`
  font-weight: 600;
  font-size: 14px;
  color: #0f172a;
`,_3=R.p`
  margin: 6px 0 4px;
  font-size: 14px;
  line-height: 1.5;
  color: #0f172a;
`,M3=R.time`
  display: block;
  font-size: 12px;
  color: #64748b;
`;function A3({data:a,likedDefault:l=!1,savedDefault:o=!1,likeCountDefault:u=0,onLikeChange:c,onBookmarkChange:f,onShare:p}){const{title:y="Infographic Title",description:g="",carouselImgSrc:m=[]}=a||{},[x,S]=b.useState(0),[w,D]=b.useState(l),[O,Y]=b.useState(o),[X,P]=b.useState(u),M=w?"Unlike post":"Like post",$=O?"Remove bookmark":"Bookmark",G=()=>{const k=!w;D(k),P(Z=>k?Z+1:Math.max(0,Z-1)),c&&c(k)},L=()=>{const k=!O;Y(k),f&&f(k)},_=b.useMemo(()=>({title:y,text:`${y}`,url:typeof window<"u"?window.location.href:""}),[y]),J=async()=>{try{navigator.share?await navigator.share(_):navigator.clipboard&&(await navigator.clipboard.writeText(_.url),alert("Link copied to clipboard")),p&&p(_)}catch(k){console.error("Share failed:",k)}};return!m||m.length===0?null:h.jsxs(w3,{role:"article","aria-label":`${y} – Instagram multi-image post`,children:[h.jsx(S3,{}),h.jsxs(E3,{children:[h.jsx(x3.Carousel,{showThumbs:!1,showIndicators:!0,showStatus:!1,showArrows:!1,infiniteLoop:!1,autoPlay:!1,swipeable:!0,emulateTouch:!0,transitionTime:350,selectedItem:x,onChange:S,dynamicHeight:!1,children:m.map((k,Z)=>h.jsx("div",{children:h.jsx(C3,{src:k,alt:`${y} — ${Z+1}`})},Z))}),h.jsxs(T3,{children:[x+1,"/",m.length]})]}),h.jsxs(R3,{children:[h.jsxs(j3,{children:[h.jsx(Ou,{onClick:G,"aria-label":M,title:M,children:w?h.jsx(gv,{size:22}):h.jsx(yv,{size:22})}),h.jsx(Ou,{"aria-label":"Comment",title:"Comment",children:h.jsx(bv,{size:20})}),h.jsx(Ou,{onClick:J,"aria-label":"Share",title:"Share",children:h.jsx(wv,{size:20})})]}),h.jsx(Ou,{onClick:L,"aria-label":$,title:$,children:O?h.jsx(Uf,{size:20}):h.jsx(Hf,{size:20})})]}),h.jsxs(O3,{children:[h.jsxs(z3,{children:[X," likes"]}),g&&h.jsxs(_3,{children:[h.jsx("strong",{children:y})," ",g]}),h.jsx(M3,{dateTime:new Date().toISOString(),children:"Just now"})]})]})}const D3=R.article`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(180deg, #dff6ff 0%, #bce0ff 100%);
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.12);
`,N3=R.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background: #000;

  video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* fill the frame nicely */
    display: block;
  }
`,L3=R.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 18px 20px;
  color: #0f172a;
`,k3=R.div`
  flex: 1 1 auto;
`,B3=R.h3`
  margin: 0 0 6px;
  font-size: clamp(18px, 2.2vw, 22px);
  line-height: 1.2;
`,U3=R.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #334155;
`,H3=R.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,X1=R.button`
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
`;function $3({data:a,likedDefault:l=!1,savedDefault:o=!1,onLikeChange:u,onBookmarkChange:c}){const f=a?.videoClipSrc||a?.vedioClipSrc,{title:p,description:y,poster:g}=a||{},[m,x]=b.useState(l),[S,w]=b.useState(o),D=b.useRef(null),O=()=>{const X=!m;x(X),u&&u(X)},Y=()=>{const X=!S;w(X),c&&c(X)};return b.useEffect(()=>{const X=D.current;if(!X)return;(async()=>{try{await X.play()}catch{}})()},[f]),f?h.jsxs(D3,{children:[h.jsx(N3,{children:h.jsx("video",{ref:D,src:f,controls:!0,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",poster:g,"aria-label":p||"Video clip"})}),h.jsxs(L3,{children:[h.jsxs(k3,{children:[h.jsx(B3,{children:p}),y&&h.jsx(U3,{children:y})]}),h.jsxs(H3,{children:[h.jsx(X1,{onClick:O,"aria-label":m?"Unlike video":"Like video",title:m?"Unlike":"Like",children:m?h.jsx(T5,{size:20}):h.jsx(R5,{size:20})}),h.jsx(X1,{onClick:Y,"aria-label":S?"Remove bookmark":"Bookmark video",title:S?"Remove bookmark":"Bookmark",children:S?h.jsx(Uf,{size:18}):h.jsx(Hf,{size:18})})]})]})]}):null}const q3=[{id:1,name:"Sense of Collective Identity",img:Cu.CollectiveIdentity||"https://images.unsplash.com/photo-1506765515384-028b60a970df?w=400&h=400&fit=crop",hasNew:!0,slides:[V5.test,"https://images.unsplash.com/photo-1554189097-ffe88e998a2b?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602524811998-8b90d1d03663?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1505066836043-7d9b15a1595d?w=800&h=1400&fit=crop"]},{id:2,name:"Understanding Diversity",img:Cu.Diversity||"https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1581091226825-c6a76aa2f4c1?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&h=1400&fit=crop"]},{id:3,name:"Nationalism in India",img:Cu.Nationalism||"https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1524310393100-34cb9cd27f1e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1533199829561-72f88a8f0c56?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602451126518-9b36f1b23543?w=800&h=1400&fit=crop"]},{id:4,name:"Globalisation and the Indian Economy",img:Cu.Globalisation||"https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1565372918675-bacb79cdd3a5?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&h=1400&fit=crop"]}];function Y3({isOpen:a,activeIndex:l,setActiveIndex:o,total:u,onClose:c,duration:f=3e3}){const p=b.useRef(Date.now()),y=b.useRef(),g=b.useRef(0),m=b.useCallback(()=>{const S=Date.now()-p.current,w=Math.min(1,S/f);g.current=w,w>=1?l<u-1?o(D=>D+1):c():y.current=requestAnimationFrame(m)},[l,u,f,c,o]);return b.useEffect(()=>{if(a)return p.current=Date.now(),y.current=requestAnimationFrame(m),()=>cancelAnimationFrame(y.current)},[a,l,m]),{resetTimer:b.useCallback(()=>{p.current=Date.now()},[]),getProgressValue:()=>g.current}}const G3=R.div``,X3=R.div`
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
`,V3=R.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 16px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,Q3=R.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border: 0;
  background: transparent;
  cursor: pointer;
`,Z3=R.div`
  padding: 2px;
  border-radius: 999px;
  ${a=>a.$hasNew?ha`
          background: linear-gradient(
            45deg,
            #f09433 0%,
            #e6683c 25%,
            #dc2743 50%,
            #cc2366 75%,
            #bc1888 100%
          );
        `:ha`
          background: transparent;
        `};
`,K3=R.div`
  background: #fff;
  padding: 3px;
  border-radius: 999px;
`,J3=R.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 999px;
  user-drag: none;
  -webkit-user-drag: none;
`,F3=R.span`
  font-size: 12px;
  color: #1f2937;
  max-width: 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,W3=R.div`
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
`,P3=R.div`
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
`,I3=R.div`
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
`,e4=R.div`
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
`,t4=R.div`
  height: 3px;
  flex: 1;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    height: 2.5px;
  }
`,n4=R.div`
  height: 100%;
  background: linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.95) 100%);
  transition: width 100ms linear;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
`,a4=R.div`
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
`,i4=R.img`
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
`,l4=R.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
`,r4=R.div`
  font-weight: 700;
  font-size: clamp(13px, 2.2vw, 15px);
  line-height: 1.2;
  letter-spacing: -0.01em;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,u4=R.div`
  font-size: clamp(11px, 1.8vw, 13px);
  opacity: 0.85;
  line-height: 1.2;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,o4=R.button`
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
`,s4=R.img`
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
`,V1=R.div`
  position: absolute;
  top: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 10;
  touch-action: manipulation;
  
  ${a=>a.$side==="left"?ha`
          left: 0; 
          width: 33.3333%;
        `:ha`
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
`;function c4(a){return je({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1.47978 1.4797C1.30227 1.65721 1.28614 1.93498 1.43137 2.13072L1.47978 2.1868L4.1695 4.87652C2.88817 5.77616 1.93052 7.11985 1.53259 8.70952C1.46554 8.97738 1.62834 9.24892 1.89621 9.31598C2.16409 9.38298 2.4356 9.22025 2.50266 8.95232C2.85564 7.54225 3.72742 6.35956 4.88944 5.59626L6.09586 6.80278C5.62419 7.28378 5.33334 7.94278 5.33334 8.66965C5.33334 10.1424 6.52724 11.3363 8 11.3363C8.72694 11.3363 9.38587 11.0454 9.86694 10.5738L13.8131 14.5201C14.0084 14.7154 14.3249 14.7154 14.5202 14.5201C14.6977 14.3426 14.7139 14.0649 14.5686 13.8691L14.5202 13.813L10.4445 9.73692L10.4453 9.73592L9.64527 8.93732L7.732 7.02445L7.73334 7.02392L5.81252 5.10513L5.81334 5.10392L5.05782 4.35024L2.18689 1.4797C1.99163 1.28444 1.67504 1.28444 1.47978 1.4797ZM6.80274 7.51025L9.15947 9.86698C8.85947 10.1575 8.4506 10.3363 8 10.3363C7.07954 10.3363 6.33334 9.59012 6.33334 8.66965C6.33334 8.21905 6.51216 7.81018 6.80274 7.51025ZM8 3.66658C7.33314 3.66658 6.68607 3.7653 6.07406 3.94992L6.89874 4.77404C7.25594 4.70346 7.62427 4.66658 8 4.66658C10.6154 4.66658 12.8733 6.45342 13.4981 8.95538C13.565 9.22325 13.8364 9.38618 14.1043 9.31932C14.3723 9.25238 14.5352 8.98098 14.4683 8.71305C13.7329 5.7684 11.077 3.66658 8 3.66658ZM8.1298 6.0061L10.664 8.53992C10.5961 7.16865 9.49814 6.07168 8.1298 6.0061Z"},child:[]}]})(a)}function f4({currentItem:a,isOpen:l,slideIndex:o,setSlideIndex:u,onClose:c,duration:f=3e3}){const p=a?.slides?.length||0,{resetTimer:y,getProgressValue:g}=Y3({isOpen:l,activeIndex:o,setActiveIndex:u,total:p,onClose:c,duration:f}),m=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[,x]=b.useState(0);b.useEffect(()=>{if(!l||m)return;let O;const Y=()=>{x(X=>X+1),O=requestAnimationFrame(Y)};return O=requestAnimationFrame(Y),()=>cancelAnimationFrame(O)},[l,m]);const S=b.useCallback(()=>{a&&(o<p-1?(u(O=>O+1),y()):c())},[a,o,p,y,c,u]),w=b.useCallback(()=>{a&&(o>0?(u(O=>O-1),y()):c())},[a,o,y,c,u]);b.useEffect(()=>{const O=Y=>{l&&(Y.key==="Escape"&&c(),Y.key==="ArrowRight"&&S(),Y.key==="ArrowLeft"&&w())};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[l,S,w,c]),b.useEffect(()=>(l?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[l]);const D=O=>O<o?1:O>o?0:g();return!l||!a?null:h.jsx(W3,{onClick:c,"aria-label":"Story overlay",children:h.jsx(P3,{onClick:O=>O.stopPropagation(),children:h.jsxs(I3,{children:[h.jsx(e4,{"aria-label":"Story progress",children:a.slides.map((O,Y)=>h.jsx(t4,{"aria-label":`Progress track ${Y+1}`,children:h.jsx(n4,{style:{width:`${D(Y)*100}%`}})},Y))}),h.jsxs(a4,{children:[h.jsx(i4,{src:a.img,alt:a.name}),h.jsxs(l4,{children:[h.jsx(r4,{children:a.name}),h.jsx(u4,{children:"Chapter highlight"})]}),h.jsx(o4,{"aria-label":"Close story",onClick:c,title:"Close",children:h.jsx(c4,{})})]}),a.slides.map((O,Y)=>h.jsx(s4,{src:O,alt:`Slide ${Y+1}`,$active:Y===o,draggable:!1},Y)),h.jsx(V1,{$side:"left",onClick:w,"aria-label":"Previous slide"}),h.jsx(V1,{$side:"right",onClick:S,"aria-label":"Next slide"})]})})})}function d4({items:a,duration:l=3e3,onOpen:o,onClose:u,className:c}){const f=b.useRef(null),p=b.useRef(!1),y=b.useRef(0),g=b.useRef(0),[m,x]=b.useState(a||[]),[S,w]=b.useState(null),[D,O]=b.useState(0),Y=m.find(_=>_.id===S)||null,X=!!S,P=_=>{O(0),w(_),x(J=>J.map(k=>k.id===_?{...k,hasNew:!1}:k)),o&&o(_)},M=()=>{w(null),u&&u()},$=_=>{p.current=!0,y.current=_.clientX,g.current=f.current?.scrollLeft||0,_.target.setPointerCapture?.(_.pointerId)},G=_=>{if(!p.current||!f.current)return;const J=_.clientX-y.current;f.current.scrollLeft=g.current-J},L=()=>{p.current=!1};return h.jsxs(G3,{className:c,children:[h.jsx(X3,{children:h.jsx(V3,{ref:f,onPointerDown:$,onPointerMove:G,onPointerUp:L,onPointerLeave:L,"aria-label":"Stories scroller",children:m.map(_=>h.jsxs(Q3,{onClick:()=>P(_.id),"aria-label":`Open story ${_.name}`,title:_.name,children:[h.jsx(Z3,{$hasNew:_.hasNew,children:h.jsx(K3,{children:h.jsx(J3,{src:_.img,alt:_.name,draggable:!1})})}),h.jsx(F3,{children:_.name})]},_.id))})}),h.jsx(f4,{currentItem:Y,isOpen:X,slideIndex:D,setSlideIndex:O,onClose:M,duration:l})]})}const h4=[{id:1,type:"infografic",title:"Sense of Collective Identity - Overview",description:"An overview of how shared history, culture, and values shape collective identity in society.",imgSrc:zn.Slide1},{id:2,type:"carousel",title:"Understanding Collective Identity",description:"Exploring the roots and importance of collective identity in social cohesion.",carouselImgSrc:[zn.Slide2,zn.Slide3,zn.Slide4,zn.Slide5,zn.Slide6]},{id:3,type:"carousel",title:"Symbols and Shared Culture",description:"How flags, festivals, and traditions represent unity and belonging.",carouselImgSrc:[zn.Slide7,zn.Slide8,zn.Slide9]},{id:5,type:"vedioClip",title:"Collective Identity in Action",description:"A short video summarizing real-world examples of collective identity shaping societies.",vedioClipSrc:X5.videoClip1}],p4=R.div`
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
`;function m4(){return b.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]),h.jsxs(h.Fragment,{children:[h.jsx(d4,{items:q3,duration:3e3,onOpen:a=>console.log("opened:",a),onClose:()=>console.log("closed")}),h.jsx(p4,{children:h.jsx("div",{className:"d-flex gap-3 flex-column align-items-center mt-3",children:h4.map(a=>h.jsx("div",{style:{width:"100%"},children:a.type==="infografic"?h.jsx(c3,{title:a.title,description:a.description,imgSrc:a.imgSrc,badge:a.badge}):a.type==="carousel"?h.jsx(A3,{data:a}):a.type==="vedioClip"?h.jsx($3,{data:a}):null},a.id))})})]})}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),g4=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,o,u)=>u?u.toUpperCase():o.toLowerCase()),Q1=a=>{const l=g4(a);return l.charAt(0).toUpperCase()+l.slice(1)},Av=(...a)=>a.filter((l,o,u)=>!!l&&l.trim()!==""&&u.indexOf(l)===o).join(" ").trim(),y4=a=>{for(const l in a)if(l.startsWith("aria-")||l==="role"||l==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=b.forwardRef(({color:a="currentColor",size:l=24,strokeWidth:o=2,absoluteStrokeWidth:u,className:c="",children:f,iconNode:p,...y},g)=>b.createElement("svg",{ref:g,...b4,width:l,height:l,stroke:a,strokeWidth:u?Number(o)*24/Number(l):o,className:Av("lucide",c),...!f&&!y4(y)&&{"aria-hidden":"true"},...y},[...p.map(([m,x])=>b.createElement(m,x)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=(a,l)=>{const o=b.forwardRef(({className:u,...c},f)=>b.createElement(x4,{ref:f,iconNode:l,className:Av(`lucide-${v4(Q1(a))}`,`lucide-${a}`,u),...c}));return o.displayName=Q1(a),o};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],w4=Lt("arrow-right",S4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],C4=Lt("atom",E4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],La=Lt("book-open",T4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],j4=Lt("bookmark",R4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],z4=Lt("calculator",O4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Z1=Lt("circle-check-big",_4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],A4=Lt("code",M4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],K1=Lt("flask-conical",D4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],J1=Lt("graduation-cap",N4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],F1=Lt("globe",L4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],B4=Lt("grid-3x3",k4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],H4=Lt("languages",U4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],q4=Lt("sparkles",$4),Y4=cn`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(30px, -30px) rotate(5deg); }
  50% { transform: translate(-20px, -50px) rotate(-5deg); }
  75% { transform: translate(40px, -20px) rotate(3deg); }
`,G4=cn`
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.4; }
`,X4=cn`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`,V4=R.div`
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
`,Q4=R.span`
  &::after {
    content: "|";
    animation: ${X4} 1s infinite;
    margin-left: 4px;
  }
`,Z4=R.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border-radius: 1.5rem;

  @media (min-width: 768px) {
    border-radius: 1rem;
  }
`,K4=R(Z4)`
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.2);
  }
`,J4=R.div`
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
`,F4=R.h1`
  font-size: clamp(1.5rem, 6vw, 3rem);
  font-weight: 900;
  line-height: 1.2;
  padding: 0 1rem;
`,W4=R.span`
  background: green;
  -webkit-background-clip: text;
  color: transparent;
  font-style: italic;
  font-size: 30px;
`,qc=R.div`
  position: absolute;
  border-radius: 50%;
  background: ${({$color:a})=>a};
  width: ${({$size:a})=>a}px;
  height: ${({$size:a})=>a}px;
  top: ${({$top:a})=>a};
  left: ${({$left:a})=>a};
  bottom: ${({$bottom:a})=>a};
  right: ${({$right:a})=>a};
  animation: ${G4} ${({$duration:a})=>a}s infinite ease-in-out;
  animation-delay: ${({$delay:a})=>a}s;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`,P4=R.div`
  position: absolute;
  opacity: 0.15;
  animation: ${Y4} ${({$duration:a})=>a}s infinite ease-in-out;
  animation-delay: ${({$delay:a})=>a}s;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`,I4=R.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 100%;
`,e6=R.div`
  width: 100%;
  max-width: 600px;

  @media (min-width: 768px) {
    max-width: 800px;
  }
`,W1=R.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
  align-items: center;
`,P1=R.div`
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
`,I1=R.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e293b;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`,t6=R.p`
  font-size: 0.8rem;
  color: #64748b;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`,n6=R.select`
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
`,em=R.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,a6=R.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,i6=R.button`
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
`,l6=R.div`
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
`,r6=R.div`
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
`,u6=R.div`
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  width: 100%;
  font-size: 0.875rem;
  opacity: 0.95;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,tm=R.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`,nm=R.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;function o6(){const a=Rf(),[l,o]=b.useState(""),[u,c]=b.useState(""),[f,p]=b.useState(""),[y,g]=b.useState(0),[m,x]=b.useState(!1),[S,w]=b.useState(0),D=["Achieve Excellence","Master Every Subject","Unlock Your Potential"];b.useEffect(()=>{const G=m?40:80,L=2e3,_=setTimeout(()=>{const J=D[y];if(!m&&S===J.length){setTimeout(()=>x(!0),L);return}if(m&&S===0){x(!1),g(k=>(k+1)%D.length);return}w(k=>k+(m?-1:1)),p(J.substring(0,S+(m?-1:1)))},G);return()=>clearTimeout(_)});const O={"Grade 9":{subjects:{English:"Ms. Priya Sharma",Mathematics:"Mr. Rajesh Kumar",Science:"Ms. Anjali Mehta","Social Studies":"Siddharth Sir",Hindi:"Ms. Kavita Reddy","Computer Science":"Mr. Arvind Nair"}},"Grade 10":{subjects:{English:"Ms. Sunita Verma",Mathematics:"Mr. Rohan Patel",Science:"Ms. Anjali Mehta","Social Studies":"Siddharth Sir",Hindi:"Ms. Kavita Reddy","Computer Science":"Mr. Arvind Nair"}},"Grade 11":{subjects:{English:"Ms. Priya Sharma",Physics:"Mr. Nitin Agarwal",Chemistry:"Ms. Sneha Kapoor",Biology:"Siddharth Sir",Mathematics:"Mr. Deepak Rao","Computer Science":"Mr. Arvind Nair"}},"Grade 12":{subjects:{English:"Ms. Sunita Verma",Physics:"Mr. Nitin Agarwal",Chemistry:"Ms. Sneha Kapoor",Biology:"Siddharth Sir",Mathematics:"Mr. Deepak Rao","Computer Science":"Mr. Arvind Nair"}}},Y={English:La,Mathematics:z4,Science:K1,Physics:C4,Chemistry:K1,Biology:F1,"Social Studies":F1,Hindi:H4,"Computer Science":A4},X=()=>{l&&u&&(a("/instalearn/teacher"),console.log(`Selected: ${l} - ${u}`))},P=G=>{c(G)},M=(G,L)=>{(G.key==="Enter"||G.key===" ")&&(G.preventDefault(),P(L))},$=l?Object.keys(O[l].subjects):[];return h.jsxs(V4,{children:[h.jsx(qc,{$color:"rgba(255, 255, 255, 0.15)",$size:500,$top:"-10%",$right:"-5%",$duration:8,$delay:0}),h.jsx(qc,{$color:"rgba(255, 255, 255, 0.1)",$size:600,$bottom:"-15%",$left:"-5%",$duration:10,$delay:3}),h.jsx(qc,{$color:"rgba(255, 255, 255, 0.12)",$size:400,$top:"40%",$left:"50%",$duration:12,$delay:6}),[...Array(8)].map((G,L)=>h.jsx(P4,{$duration:8+L*2,$delay:L*.8,style:{left:`${10+L*12}%`,top:`${15+L*11}%`},children:L%3===0?h.jsx(La,{size:32,color:"rgba(255,255,255,0.4)"}):L%3===1?h.jsx(J1,{size:32,color:"rgba(255,255,255,0.4)"}):h.jsx(q4,{size:32,color:"rgba(255,255,255,0.4)"})},L)),h.jsx(I4,{children:h.jsxs(e6,{children:[h.jsx(J4,{children:h.jsx(F4,{children:h.jsx(W4,{children:h.jsx(Q4,{children:f})})})}),h.jsxs(K4,{style:{padding:"1.5rem",display:"flex",flexDirection:"column",gap:"2rem"},children:[h.jsxs(em,{children:[h.jsxs(W1,{children:[h.jsx(P1,{$gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",$shadow:"0 8px 24px rgba(102,126,234,0.3)",children:h.jsx(J1,{size:20,color:"white"})}),h.jsx("div",{children:h.jsx(I1,{children:"Select Your Grade"})})]}),h.jsxs("div",{style:{position:"relative"},children:[h.jsxs(n6,{value:l,onChange:G=>{o(G.target.value),c("")},children:[h.jsx("option",{value:"",disabled:!0,children:"Select Grade"}),Object.keys(O).map(G=>h.jsx("option",{value:G,children:G},G))]}),l&&h.jsx(Z1,{size:20,style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",color:"#10b981"}})]})]}),h.jsxs(em,{children:[h.jsxs(W1,{children:[h.jsx(P1,{$gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",$shadow:"0 8px 24px rgba(240,147,251,0.3)",children:h.jsx(La,{size:20,color:"white"})}),h.jsxs("div",{children:[h.jsx(I1,{children:"Choose Your Subject"}),h.jsx(t6,{children:"Click a subject to reveal the teacher name."})]})]}),$.length===0?h.jsxs(r6,{children:[h.jsx(La,{size:40,color:"#94a3b8"}),h.jsx("p",{children:"Please select a grade to view available subjects"})]}):h.jsx(a6,{children:$.map(G=>{const L=O[l].subjects[G],_=u===G,J=Y[G]||La;return h.jsxs(l6,{role:"button",tabIndex:0,"aria-pressed":_,$selected:_,onClick:()=>P(G),onKeyDown:k=>M(k,G),children:[h.jsxs(tm,{children:[h.jsx("span",{children:G}),h.jsx(nm,{children:h.jsx(J,{size:18})})]}),_&&h.jsxs(tm,{children:[h.jsx(u6,{children:L}),h.jsx(nm,{children:h.jsx(Z1,{className:"mt-3",size:18})})]}),h.jsxs(i6,{$visible:_,onClick:X,children:["Continue to Profile ",h.jsx(w4,{size:18})]})]},G)})})]})]})]})})]})}function s6(a){return je({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"},child:[]}]})(a)}function zu(a){return je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(a)}function _i(a){return je({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(a)}function Dv(a){return je({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(a)}function am(a){return je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(a)}function c6(a){return je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(a)}function f6(a){return je({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(a)}function im(a){return je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(a)}function Yc(a){return je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(a)}function lm(a){return je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"},child:[]}]})(a)}function _u(a){return je({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(a)}function d6(a){return je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(a)}const h6=cn`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`,p6=cn`
  from { opacity: 0; }
  to { opacity: 1; }
`,It={bg:"#F6F8FB",card:"#FFFFFF",text:"#1F2937",subtext:"#6B7280",primary:"#4F46E5",primarySoft:"#EEF2FF",accent:"#10B981",border:"#E5E7EB",shadow:"0 10px 30px rgba(31, 41, 55, 0.08)"},m6=R.div`
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
`,v6=R.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  animation: ${h6} 0.6s ease-out;
`,qf=R.div`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: var(--shadow);
`,g6=R(qf)`
  padding: 24px;
  margin-bottom: 16px;
`,y6=R.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,b6=R.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(180deg, var(--primary), #7C3AED);
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 28px;
  font-weight: 800;
`,x6=R.div`
  display: grid;
  gap: 6px;
`,S6=R.h1`
  font-size: 22px;
  color: var(--text);
  margin: 0;
`,w6=R.p`
  color: var(--subtext);
  margin: 0;
  font-size: 14px;
`,E6=R.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-end;

  @media (max-width: 640px) {
    justify-content: center;
  }
`,rm=R.button`
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
`,C6=R.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 14px;
`,Gc=R.div`
  background: var(--primarySoft);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 10px;
`,Xc=R.div`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: #fff;
  border: 1px solid var(--border);
`,Vc=R.div`
  display: grid;
  line-height: 1.1;
`,Qc=R.span`
  font-weight: 800;
  color: var(--text);
`,Zc=R.span`
  font-size: 12px;
  color: var(--subtext);
`,Kc=R.div`
  color: #F59E0B;
`,T6=R.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin: 16px 0;
`,um=R.button`
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
`,om=R(qf)`
  padding: 16px;
  animation: ${p6} 0.35s ease-out;
`,R6=R.div`
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
`,j6=R.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: linear-gradient(180deg, var(--primary), #7C3AED);
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 20px;
`,O6=R.div`
  display: grid;
  gap: 6px;
`,z6=R.h3`
  margin: 0;
  color: var(--text);
  font-size: 16px;
`,_6=R.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: var(--subtext);
`,Jc=R.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,M6=R.div`
  width: 140px;
  height: 8px;
  background: #F3F4F6;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid var(--border);
`,A6=R.div`
  height: 100%;
  width: ${a=>Math.min(Math.max(a.value,0),100)}%;
  background: linear-gradient(90deg, var(--primary), #22C55E);
`,D6=R(Dv)`
  color: #D1D5DB;
  font-size: 18px;
`,sm=R.div`
  text-align: center;
  padding: 48px 12px;
  color: var(--subtext);
`,cm=R.div`
  font-size: 56px;
  margin-bottom: 10px;
  opacity: 0.5;
`,N6=R.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(220px, 1fr) );
  gap: 12px;
`,L6=R(qf)`
  padding: 14px;
  display: grid;
  gap: 10px;
`,k6=R.div`
  font-weight: 700;
  color: var(--text);
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,B6=R.div`
  font-size: 12px;
  color: var(--subtext);
  display: flex;
  align-items: center;
  gap: 10px;
`,U6=R.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,fm=R.button`
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
`;function H6(){const[a,l]=b.useState("history");b.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]);const o={name:"Priya Sharma",email:"priya.sharma@example.com",booksRead:24,hoursSpent:156,favoriteTeacher:"Ms. Sarah"},u=[{id:1,title:"Sense of Collective Identity",teacher:"Mr. Arjun Mehta",time:"2 hours ago",progress:75,icon:h.jsx(_i,{})},{id:2,title:"Understanding Diversity",teacher:"Ms. Nisha Rao",time:"Yesterday",progress:45,icon:h.jsx(zu,{})},{id:3,title:"Nationalism in India",teacher:"Dr. Kavita Iyer",time:"2 days ago",progress:90,icon:h.jsx(Yc,{})},{id:4,title:"Democracy & Rights",teacher:"Prof. R. Menon",time:"1 week ago",progress:100,icon:h.jsx(lm,{})}],c=[{id:"f1",title:"Globalisation & Indian Economy",by:"Siddharth Sir",reads:12},{id:"f2",title:"Federalism Basics",by:"Anita Ma'am",reads:9},{id:"f3",title:"Judiciary: Structure",by:"R. Sharma",reads:14},{id:"f4",title:"Gender, Religion & Caste",by:"S. Verma",reads:7}];return h.jsx(m6,{children:h.jsxs(v6,{children:[h.jsx(g6,{children:h.jsxs(y6,{children:[h.jsx(b6,{"aria-label":"User avatar",children:h.jsx(d6,{size:24})}),h.jsxs("div",{children:[h.jsxs(x6,{children:[h.jsx(S6,{children:o.name}),h.jsx(w6,{children:o.email})]}),h.jsxs(C6,{children:[h.jsxs(Gc,{children:[h.jsx(Xc,{"aria-hidden":"true",children:h.jsx(zu,{})}),h.jsxs(Vc,{children:[h.jsx(Qc,{children:o.booksRead}),h.jsx(Zc,{children:"Books Read"})]}),h.jsx(Kc,{title:"Lifetime reads",children:h.jsx(lm,{})})]}),h.jsxs(Gc,{children:[h.jsx(Xc,{"aria-hidden":"true",children:h.jsx(am,{})}),h.jsxs(Vc,{children:[h.jsx(Qc,{children:o.hoursSpent}),h.jsx(Zc,{children:"Study Hours"})]}),h.jsx(Kc,{title:"Consistent!",children:h.jsx(_u,{})})]}),h.jsxs(Gc,{children:[h.jsx(Xc,{"aria-hidden":"true",children:h.jsx(_i,{})}),h.jsxs(Vc,{children:[h.jsx(Qc,{children:o.favoriteTeacher}),h.jsx(Zc,{children:"Favourite Teacher"})]}),h.jsx(Kc,{children:h.jsx(im,{})})]})]})]}),h.jsxs(E6,{children:[h.jsxs(rm,{"aria-label":"Edit profile",children:[h.jsx(f6,{})," Edit"]}),h.jsxs(rm,{"aria-label":"Settings",children:[h.jsx(c6,{})," Settings"]})]})]})}),h.jsxs(T6,{children:[h.jsxs(um,{active:a==="history",onClick:()=>l("history"),"aria-pressed":a==="history",children:[h.jsx(Yc,{})," Reading History"]}),h.jsxs(um,{active:a==="favorites",onClick:()=>l("favorites"),"aria-pressed":a==="favorites",children:[h.jsx(_u,{})," Favorites"]})]}),a==="history"?h.jsx(om,{children:u.length>0?u.map(f=>h.jsxs(R6,{role:"button",tabIndex:0,children:[h.jsx(j6,{"aria-hidden":"true",children:f.icon}),h.jsxs(O6,{children:[h.jsx(z6,{children:f.title}),h.jsxs(_6,{children:[h.jsxs(Jc,{children:[h.jsx(_i,{})," ",f.teacher]}),h.jsxs(Jc,{children:[h.jsx(am,{})," ",f.time]}),h.jsxs(Jc,{children:[h.jsx(zu,{})," ",f.progress,"% complete"]})]}),h.jsx(M6,{"aria-label":`Progress ${f.progress}%`,children:h.jsx(A6,{value:f.progress})})]}),h.jsx(D6,{})]},f.id)):h.jsxs(sm,{children:[h.jsx(cm,{children:h.jsx(s6,{})}),h.jsx("h3",{children:"No Reading History Yet"}),h.jsx("p",{children:"Start exploring SST chapters to see them here."})]})}):h.jsx(om,{children:c.length>0?h.jsx(N6,{children:c.map(f=>h.jsxs(L6,{children:[h.jsxs(k6,{children:[h.jsx(zu,{})," ",f.title]}),h.jsxs(B6,{children:[h.jsx(_i,{})," ",f.by," • ",h.jsx(Yc,{})," ",f.reads," reads"]}),h.jsxs(U6,{children:[h.jsxs(fm,{"aria-label":"Open",children:[h.jsx(Dv,{})," Open"]}),h.jsxs(fm,{"aria-label":"Unfavorite",children:[h.jsx(im,{})," Unfavorite"]})]})]},f.id))}):h.jsxs(sm,{children:[h.jsx(cm,{children:h.jsx(_u,{})}),h.jsx("h3",{children:"No Favorites Yet"}),h.jsxs("p",{children:["Tap the ",h.jsx(_u,{style:{verticalAlign:"middle"}})," on any chapter to save it here."]})]})})]})})}const $6=cn`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
`,q6=cn`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Y6=cn`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,G6=cn`
  0% {
    width: 0%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 0%;
  }
`,X6=R.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`,V6=R.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,Fc=R.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: ${$6} 20s infinite ease-in-out;

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
`,Q6=R.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  animation: ${q6} 0.8s ease-out;

  @media (max-width: 600px) {
    margin: 20px;
    padding: 20px 20px;
  }
`,Z6=R.div`
  margin-bottom: 0px;
  position: relative;
`,K6=R.div`
  font-size: 70px;
  animation: ${Y6} 2s infinite;
`,J6=R.h1`
  font-size: 2.5em;
  color: #2d3748;
  margin-bottom: 10px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 2em;
  }
`,F6=R.p`
  font-size: 1.2em;
  color: #718096;
  margin-bottom: 25px;
  line-height: 1.6;
`,W6=R.div`
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`,P6=R.div`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  animation: ${G6} 3s ease-in-out infinite;
`,I6=R.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Wc=R.div`
  padding: 20px;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
  }
`,Pc=R.div`
  font-size:30px;
  margin-bottom: 10px;
`,Ic=R.div`
  font-size: 14px;
  color: #4a5568;
  font-weight: 600;
`,eS=R.button`
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
`;function dm(){const[a,l]=b.useState(!1),o=()=>{l(!0),setTimeout(()=>{l(!1)},2e3)};return h.jsxs(X6,{children:[h.jsxs(V6,{children:[h.jsx(Fc,{}),h.jsx(Fc,{}),h.jsx(Fc,{})]}),h.jsxs(Q6,{children:[h.jsx(Z6,{children:h.jsx(K6,{children:"🚧"})}),h.jsx(J6,{children:"Building Something Amazing"}),h.jsx(F6,{children:"We're working hard to bring you an incredible new feature. Stay tuned!"}),h.jsx(W6,{children:h.jsx(P6,{})}),h.jsxs(I6,{children:[h.jsxs(Wc,{children:[h.jsx(Pc,{children:"⚡"}),h.jsx(Ic,{children:"Lightning Fast"})]}),h.jsxs(Wc,{children:[h.jsx(Pc,{children:"🎨"}),h.jsx(Ic,{children:"Beautiful Design"})]}),h.jsxs(Wc,{children:[h.jsx(Pc,{children:"🔒"}),h.jsx(Ic,{children:"Secure & Private"})]})]}),h.jsx(eS,{onClick:o,$notified:a,children:a?"✓ You'll be notified!":"Notify Me When Ready"})]})]})}var tS=jv();const at=Il(tS);function xf(){return xf=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var u in o)({}).hasOwnProperty.call(o,u)&&(a[u]=o[u])}return a},xf.apply(null,arguments)}function Nv(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)!==-1)continue;o[u]=a[u]}return o}function hm(a){return"default"+a.charAt(0).toUpperCase()+a.substr(1)}function nS(a){var l=aS(a,"string");return typeof l=="symbol"?l:String(l)}function aS(a,l){if(typeof a!="object"||a===null)return a;var o=a[Symbol.toPrimitive];if(o!==void 0){var u=o.call(a,l);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}function iS(a,l,o){var u=b.useRef(a!==void 0),c=b.useState(l),f=c[0],p=c[1],y=a!==void 0,g=u.current;return u.current=y,!y&&g&&f!==l&&p(l),[y?a:f,b.useCallback(function(m){for(var x=arguments.length,S=new Array(x>1?x-1:0),w=1;w<x;w++)S[w-1]=arguments[w];o&&o.apply(void 0,[m].concat(S)),p(m)},[o])]}function Lv(a,l){return Object.keys(l).reduce(function(o,u){var c,f=o,p=f[hm(u)],y=f[u],g=Nv(f,[hm(u),u].map(nS)),m=l[u],x=iS(y,p,a[m]),S=x[0],w=x[1];return xf({},g,(c={},c[u]=S,c[m]=w,c))},a)}function Sf(a,l){return Sf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,u){return o.__proto__=u,o},Sf(a,l)}function lS(a,l){a.prototype=Object.create(l.prototype),a.prototype.constructor=a,Sf(a,l)}const rS=["xxl","xl","lg","md","sm","xs"],uS="xs",kv=b.createContext({prefixes:{},breakpoints:rS,minBreakpoint:uS}),{Consumer:uw,Provider:ow}=kv;function xt(a,l){const{prefixes:o}=b.useContext(kv);return a||o[l]||l}function Yf(a){return a&&a.ownerDocument||document}function oS(a){var l=Yf(a);return l&&l.defaultView||window}function sS(a,l){return oS(a).getComputedStyle(a,l)}var cS=/([A-Z])/g;function fS(a){return a.replace(cS,"-$1").toLowerCase()}var dS=/^ms-/;function Mu(a){return fS(a).replace(dS,"-ms-")}var hS=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function pS(a){return!!(a&&hS.test(a))}function Nn(a,l){var o="",u="";if(typeof l=="string")return a.style.getPropertyValue(Mu(l))||sS(a).getPropertyValue(Mu(l));Object.keys(l).forEach(function(c){var f=l[c];!f&&f!==0?a.style.removeProperty(Mu(c)):pS(c)?u+=c+"("+f+") ":o+=Mu(c)+": "+f+";"}),u&&(o+="transform: "+u+";"),a.style.cssText+=";"+o}var mS=Tv();const ef=Il(mS),pm={disabled:!1},Bv=qe.createContext(null);var vS=function(l){return l.scrollTop},Kl="unmounted",fa="exited",en="entering",Mn="entered",Pl="exiting",Un=(function(a){lS(l,a);function l(u,c){var f;f=a.call(this,u,c)||this;var p=c,y=p&&!p.isMounting?u.enter:u.appear,g;return f.appearStatus=null,u.in?y?(g=fa,f.appearStatus=en):g=Mn:u.unmountOnExit||u.mountOnEnter?g=Kl:g=fa,f.state={status:g},f.nextCallback=null,f}l.getDerivedStateFromProps=function(c,f){var p=c.in;return p&&f.status===Kl?{status:fa}:null};var o=l.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(c){var f=null;if(c!==this.props){var p=this.state.status;this.props.in?p!==en&&p!==Mn&&(f=en):(p===en||p===Mn)&&(f=Pl)}this.updateStatus(!1,f)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var c=this.props.timeout,f,p,y;return f=p=y=c,c!=null&&typeof c!="number"&&(f=c.exit,p=c.enter,y=c.appear!==void 0?c.appear:p),{exit:f,enter:p,appear:y}},o.updateStatus=function(c,f){if(c===void 0&&(c=!1),f!==null)if(this.cancelNextCallback(),f===en){if(this.props.unmountOnExit||this.props.mountOnEnter){var p=this.props.nodeRef?this.props.nodeRef.current:Oi.findDOMNode(this);p&&vS(p)}this.performEnter(c)}else this.performExit();else this.props.unmountOnExit&&this.state.status===fa&&this.setState({status:Kl})},o.performEnter=function(c){var f=this,p=this.props.enter,y=this.context?this.context.isMounting:c,g=this.props.nodeRef?[y]:[Oi.findDOMNode(this),y],m=g[0],x=g[1],S=this.getTimeouts(),w=y?S.appear:S.enter;if(!c&&!p||pm.disabled){this.safeSetState({status:Mn},function(){f.props.onEntered(m)});return}this.props.onEnter(m,x),this.safeSetState({status:en},function(){f.props.onEntering(m,x),f.onTransitionEnd(w,function(){f.safeSetState({status:Mn},function(){f.props.onEntered(m,x)})})})},o.performExit=function(){var c=this,f=this.props.exit,p=this.getTimeouts(),y=this.props.nodeRef?void 0:Oi.findDOMNode(this);if(!f||pm.disabled){this.safeSetState({status:fa},function(){c.props.onExited(y)});return}this.props.onExit(y),this.safeSetState({status:Pl},function(){c.props.onExiting(y),c.onTransitionEnd(p.exit,function(){c.safeSetState({status:fa},function(){c.props.onExited(y)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(c,f){f=this.setNextCallback(f),this.setState(c,f)},o.setNextCallback=function(c){var f=this,p=!0;return this.nextCallback=function(y){p&&(p=!1,f.nextCallback=null,c(y))},this.nextCallback.cancel=function(){p=!1},this.nextCallback},o.onTransitionEnd=function(c,f){this.setNextCallback(f);var p=this.props.nodeRef?this.props.nodeRef.current:Oi.findDOMNode(this),y=c==null&&!this.props.addEndListener;if(!p||y){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var g=this.props.nodeRef?[this.nextCallback]:[p,this.nextCallback],m=g[0],x=g[1];this.props.addEndListener(m,x)}c!=null&&setTimeout(this.nextCallback,c)},o.render=function(){var c=this.state.status;if(c===Kl)return null;var f=this.props,p=f.children;f.in,f.mountOnEnter,f.unmountOnExit,f.appear,f.enter,f.exit,f.timeout,f.addEndListener,f.onEnter,f.onEntering,f.onEntered,f.onExit,f.onExiting,f.onExited,f.nodeRef;var y=Nv(f,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return qe.createElement(Bv.Provider,{value:null},typeof p=="function"?p(c,y):qe.cloneElement(qe.Children.only(p),y))},l})(qe.Component);Un.contextType=Bv;Un.propTypes={};function Ti(){}Un.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ti,onEntering:Ti,onEntered:Ti,onExit:Ti,onExiting:Ti,onExited:Ti};Un.UNMOUNTED=Kl;Un.EXITED=fa;Un.ENTERING=en;Un.ENTERED=Mn;Un.EXITING=Pl;function gS(a){return a.code==="Escape"||a.keyCode===27}function yS(){const a=b.version.split(".");return{major:+a[0],minor:+a[1],patch:+a[2]}}function qi(a){if(!a||typeof a=="function")return null;const{major:l}=yS();return l>=19?a.props.ref:a.ref}const ao=!!(typeof window<"u"&&window.document&&window.document.createElement);var wf=!1,Ef=!1;try{var tf={get passive(){return wf=!0},get once(){return Ef=wf=!0}};ao&&(window.addEventListener("test",tf,tf),window.removeEventListener("test",tf,!0))}catch{}function bS(a,l,o,u){if(u&&typeof u!="boolean"&&!Ef){var c=u.once,f=u.capture,p=o;!Ef&&c&&(p=o.__once||function y(g){this.removeEventListener(l,y,f),o.call(this,g)},o.__once=p),a.addEventListener(l,p,wf?u:f)}a.addEventListener(l,o,u)}function xS(a,l,o,u){var c=u&&typeof u!="boolean"?u.capture:u;a.removeEventListener(l,o,c),o.__once&&a.removeEventListener(l,o.__once,c)}function Zu(a,l,o,u){return bS(a,l,o,u),function(){xS(a,l,o,u)}}function SS(a,l,o,u){if(u===void 0&&(u=!0),a){var c=document.createEvent("HTMLEvents");c.initEvent(l,o,u),a.dispatchEvent(c)}}function wS(a){var l=Nn(a,"transitionDuration")||"",o=l.indexOf("ms")===-1?1e3:1;return parseFloat(l)*o}function ES(a,l,o){o===void 0&&(o=5);var u=!1,c=setTimeout(function(){u||SS(a,"transitionend",!0)},l+o),f=Zu(a,"transitionend",function(){u=!0},{once:!0});return function(){clearTimeout(c),f()}}function CS(a,l,o,u){o==null&&(o=wS(a)||0);var c=ES(a,o,u),f=Zu(a,"transitionend",l);return function(){c(),f()}}function mm(a,l){const o=Nn(a,l)||"",u=o.indexOf("ms")===-1?1e3:1;return parseFloat(o)*u}function Gf(a,l){const o=mm(a,"transitionDuration"),u=mm(a,"transitionDelay"),c=CS(a,f=>{f.target===a&&(c(),l(f))},o+u)}function Ql(...a){return a.filter(l=>l!=null).reduce((l,o)=>{if(typeof o!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return l===null?o:function(...c){l.apply(this,c),o.apply(this,c)}},null)}function Uv(a){a.offsetHeight}const vm=a=>!a||typeof a=="function"?a:l=>{a.current=l};function TS(a,l){const o=vm(a),u=vm(l);return c=>{o&&o(c),u&&u(c)}}function RS(a,l){return b.useMemo(()=>TS(a,l),[a,l])}function jS(a){return a&&"setState"in a?Oi.findDOMNode(a):a??null}const io=qe.forwardRef(({onEnter:a,onEntering:l,onEntered:o,onExit:u,onExiting:c,onExited:f,addEndListener:p,children:y,childRef:g,...m},x)=>{const S=b.useRef(null),w=RS(S,g),D=_=>{w(jS(_))},O=_=>J=>{_&&S.current&&_(S.current,J)},Y=b.useCallback(O(a),[a]),X=b.useCallback(O(l),[l]),P=b.useCallback(O(o),[o]),M=b.useCallback(O(u),[u]),$=b.useCallback(O(c),[c]),G=b.useCallback(O(f),[f]),L=b.useCallback(O(p),[p]);return h.jsx(Un,{ref:x,...m,onEnter:Y,onEntered:P,onEntering:X,onExit:M,onExited:G,onExiting:$,addEndListener:L,nodeRef:S,children:typeof y=="function"?(_,J)=>y(_,{...J,ref:D}):qe.cloneElement(y,{ref:D})})});io.displayName="TransitionWrapper";const OS={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function zS(a,l){const o=`offset${a[0].toUpperCase()}${a.slice(1)}`,u=l[o],c=OS[a];return u+parseInt(Nn(l,c[0]),10)+parseInt(Nn(l,c[1]),10)}const _S={[fa]:"collapse",[Pl]:"collapsing",[en]:"collapsing",[Mn]:"collapse show"},Hv=qe.forwardRef(({onEnter:a,onEntering:l,onEntered:o,onExit:u,onExiting:c,className:f,children:p,dimension:y="height",in:g=!1,timeout:m=300,mountOnEnter:x=!1,unmountOnExit:S=!1,appear:w=!1,getDimensionValue:D=zS,...O},Y)=>{const X=typeof y=="function"?y():y,P=b.useMemo(()=>Ql(_=>{_.style[X]="0"},a),[X,a]),M=b.useMemo(()=>Ql(_=>{const J=`scroll${X[0].toUpperCase()}${X.slice(1)}`;_.style[X]=`${_[J]}px`},l),[X,l]),$=b.useMemo(()=>Ql(_=>{_.style[X]=null},o),[X,o]),G=b.useMemo(()=>Ql(_=>{_.style[X]=`${D(X,_)}px`,Uv(_)},u),[u,D,X]),L=b.useMemo(()=>Ql(_=>{_.style[X]=null},c),[X,c]);return h.jsx(io,{ref:Y,addEndListener:Gf,...O,"aria-expanded":O.role?g:null,onEnter:P,onEntering:M,onEntered:$,onExit:G,onExiting:L,childRef:qi(p),in:g,timeout:m,mountOnEnter:x,unmountOnExit:S,appear:w,children:(_,J)=>qe.cloneElement(p,{...J,className:at(f,p.props.className,_S[_],X==="width"&&"collapse-horizontal")})})});Hv.displayName="Collapse";function MS(a){const l=b.useRef(a);return b.useEffect(()=>{l.current=a},[a]),l}function lo(a){const l=MS(a);return b.useCallback(function(...o){return l.current&&l.current(...o)},[l])}const AS=(a=>b.forwardRef((l,o)=>h.jsx("div",{...l,ref:o,className:at(l.className,a)})));function DS(a){const l=b.useRef(a);return b.useEffect(()=>{l.current=a},[a]),l}function An(a){const l=DS(a);return b.useCallback(function(...o){return l.current&&l.current(...o)},[l])}function NS(){const a=b.useRef(!0),l=b.useRef(()=>a.current);return b.useEffect(()=>(a.current=!0,()=>{a.current=!1}),[]),l.current}function LS(a){const l=b.useRef(null);return b.useEffect(()=>{l.current=a}),l.current}const kS=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",BS=typeof document<"u",gm=BS||kS?b.useLayoutEffect:b.useEffect,US=["as","disabled"];function HS(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}function $S(a){return!a||a.trim()==="#"}function $v({tagName:a,disabled:l,href:o,target:u,rel:c,role:f,onClick:p,tabIndex:y=0,type:g}){a||(o!=null||u!=null||c!=null?a="a":a="button");const m={tagName:a};if(a==="button")return[{type:g||"button",disabled:l},m];const x=w=>{if((l||a==="a"&&$S(o))&&w.preventDefault(),l){w.stopPropagation();return}p?.(w)},S=w=>{w.key===" "&&(w.preventDefault(),x(w))};return a==="a"&&(o||(o="#"),l&&(o=void 0)),[{role:f??"button",disabled:void 0,tabIndex:l?void 0:y,href:o,target:a==="a"?u:void 0,"aria-disabled":l||void 0,rel:a==="a"?c:void 0,onClick:x,onKeyDown:S},m]}const qv=b.forwardRef((a,l)=>{let{as:o,disabled:u}=a,c=HS(a,US);const[f,{tagName:p}]=$v(Object.assign({tagName:o,disabled:u},c));return h.jsx(p,Object.assign({},c,f,{ref:l}))});qv.displayName="Button";const qS=["onKeyDown"];function YS(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}function GS(a){return!a||a.trim()==="#"}const Yv=b.forwardRef((a,l)=>{let{onKeyDown:o}=a,u=YS(a,qS);const[c]=$v(Object.assign({tagName:"a"},u)),f=An(p=>{c.onKeyDown(p),o?.(p)});return GS(u.href)||u.role==="button"?h.jsx("a",Object.assign({ref:l},u,c,{onKeyDown:f})):h.jsx("a",Object.assign({ref:l},u,{onKeyDown:o}))});Yv.displayName="Anchor";const XS={[en]:"show",[Mn]:"show"},Gv=b.forwardRef(({className:a,children:l,transitionClasses:o={},onEnter:u,...c},f)=>{const p={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...c},y=b.useCallback((g,m)=>{Uv(g),u?.(g,m)},[u]);return h.jsx(io,{ref:f,addEndListener:Gf,...p,onEnter:y,childRef:qi(l),children:(g,m)=>b.cloneElement(l,{...m,className:at("fade",a,l.props.className,XS[g],o[g])})})});Gv.displayName="Fade";const VS={"aria-label":ef.string,onClick:ef.func,variant:ef.oneOf(["white"])},Xf=b.forwardRef(({className:a,variant:l,"aria-label":o="Close",...u},c)=>h.jsx("button",{ref:c,type:"button",className:at("btn-close",l&&`btn-close-${l}`,a),"aria-label":o,...u}));Xf.displayName="CloseButton";Xf.propTypes=VS;const Xv=b.createContext(null);Xv.displayName="CardHeaderContext";const Vv=b.forwardRef(({bsPrefix:a,fluid:l=!1,as:o="div",className:u,...c},f)=>{const p=xt(a,"container"),y=typeof l=="string"?`-${l}`:"-fluid";return h.jsx(o,{ref:f,...c,className:at(u,l?`${p}${y}`:p)})});Vv.displayName="Container";var QS=Function.prototype.bind.call(Function.prototype.call,[].slice);function Na(a,l){return QS(a.querySelectorAll(l))}function ZS(){const[,a]=b.useReducer(l=>l+1,0);return a}function ym(a,l){if(a.contains)return a.contains(l);if(a.compareDocumentPosition)return a===l||!!(a.compareDocumentPosition(l)&16)}const Ku=b.createContext(null),Vf=(a,l=null)=>a!=null?String(a):l||null,Qf=b.createContext(null);Qf.displayName="NavContext";const KS="data-rr-ui-",JS="rrUi";function ro(a){return`${KS}${a}`}function FS(a){return`${JS}${a}`}const Qv=b.createContext(ao?window:void 0);Qv.Provider;function Zf(){return b.useContext(Qv)}const WS=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",PS=typeof document<"u",IS=PS||WS?b.useLayoutEffect:b.useEffect,Yi=b.createContext(null);Yi.displayName="NavbarContext";const bm=a=>!a||typeof a=="function"?a:l=>{a.current=l};function e8(a,l){const o=bm(a),u=bm(l);return c=>{o&&o(c),u&&u(c)}}function uo(a,l){return b.useMemo(()=>e8(a,l),[a,l])}const Zv=b.createContext(null),t8=["as","active","eventKey"];function n8(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}function Kv({key:a,onClick:l,active:o,id:u,role:c,disabled:f}){const p=b.useContext(Ku),y=b.useContext(Qf),g=b.useContext(Zv);let m=o;const x={role:c};if(y){!c&&y.role==="tablist"&&(x.role="tab");const S=y.getControllerId(a??null),w=y.getControlledId(a??null);x[ro("event-key")]=a,x.id=S||u,m=o==null&&a!=null?y.activeKey===a:o,(m||!(g!=null&&g.unmountOnExit)&&!(g!=null&&g.mountOnEnter))&&(x["aria-controls"]=w)}return x.role==="tab"&&(x["aria-selected"]=m,m||(x.tabIndex=-1),f&&(x.tabIndex=-1,x["aria-disabled"]=!0)),x.onClick=An(S=>{f||(l?.(S),a!=null&&p&&!S.isPropagationStopped()&&p(a,S))}),[x,{isActive:m}]}const Jv=b.forwardRef((a,l)=>{let{as:o=qv,active:u,eventKey:c}=a,f=n8(a,t8);const[p,y]=Kv(Object.assign({key:Vf(c,f.href),active:u},f));return p[ro("active")]=y.isActive,h.jsx(o,Object.assign({},f,p,{ref:l}))});Jv.displayName="NavItem";const a8=["as","onSelect","activeKey","role","onKeyDown"];function i8(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}const xm=()=>{},Sm=ro("event-key"),Fv=b.forwardRef((a,l)=>{let{as:o="div",onSelect:u,activeKey:c,role:f,onKeyDown:p}=a,y=i8(a,a8);const g=ZS(),m=b.useRef(!1),x=b.useContext(Ku),S=b.useContext(Zv);let w,D;S&&(f=f||"tablist",c=S.activeKey,w=S.getControlledId,D=S.getControllerId);const O=b.useRef(null),Y=$=>{const G=O.current;if(!G)return null;const L=Na(G,`[${Sm}]:not([aria-disabled=true])`),_=G.querySelector("[aria-selected=true]");if(!_||_!==document.activeElement)return null;const J=L.indexOf(_);if(J===-1)return null;let k=J+$;return k>=L.length&&(k=0),k<0&&(k=L.length-1),L[k]},X=($,G)=>{$!=null&&(u?.($,G),x?.($,G))},P=$=>{if(p?.($),!S)return;let G;switch($.key){case"ArrowLeft":case"ArrowUp":G=Y(-1);break;case"ArrowRight":case"ArrowDown":G=Y(1);break;default:return}G&&($.preventDefault(),X(G.dataset[FS("EventKey")]||null,$),m.current=!0,g())};b.useEffect(()=>{if(O.current&&m.current){const $=O.current.querySelector(`[${Sm}][aria-selected=true]`);$?.focus()}m.current=!1});const M=uo(l,O);return h.jsx(Ku.Provider,{value:X,children:h.jsx(Qf.Provider,{value:{role:f,activeKey:Vf(c),getControlledId:w||xm,getControllerId:D||xm},children:h.jsx(o,Object.assign({},y,{onKeyDown:P,ref:M,role:f}))})})});Fv.displayName="Nav";const l8=Object.assign(Fv,{Item:Jv});function nf(a){a===void 0&&(a=Yf());try{var l=a.activeElement;return!l||!l.nodeName?null:l}catch{return a.body}}function r8(a){const l=b.useRef(a);return l.current=a,l}function u8(a){const l=r8(a);b.useEffect(()=>()=>l.current(),[])}function o8(a=document){const l=a.defaultView;return Math.abs(l.innerWidth-a.documentElement.clientWidth)}const wm=ro("modal-open");class Kf{constructor({ownerDocument:l,handleContainerOverflow:o=!0,isRTL:u=!1}={}){this.handleContainerOverflow=o,this.isRTL=u,this.modals=[],this.ownerDocument=l}getScrollbarWidth(){return o8(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(l){}removeModalAttributes(l){}setContainerStyle(l){const o={overflow:"hidden"},u=this.isRTL?"paddingLeft":"paddingRight",c=this.getElement();l.style={overflow:c.style.overflow,[u]:c.style[u]},l.scrollBarWidth&&(o[u]=`${parseInt(Nn(c,u)||"0",10)+l.scrollBarWidth}px`),c.setAttribute(wm,""),Nn(c,o)}reset(){[...this.modals].forEach(l=>this.remove(l))}removeContainerStyle(l){const o=this.getElement();o.removeAttribute(wm),Object.assign(o.style,l.style)}add(l){let o=this.modals.indexOf(l);return o!==-1||(o=this.modals.length,this.modals.push(l),this.setModalAttributes(l),o!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),o}remove(l){const o=this.modals.indexOf(l);o!==-1&&(this.modals.splice(o,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(l))}isTopModal(l){return!!this.modals.length&&this.modals[this.modals.length-1]===l}}const af=(a,l)=>ao?a==null?(l||Yf()).body:(typeof a=="function"&&(a=a()),a&&"current"in a&&(a=a.current),a&&("nodeType"in a||a.getBoundingClientRect)?a:null):null;function s8(a,l){const o=Zf(),[u,c]=b.useState(()=>af(a,o?.document));if(!u){const f=af(a);f&&c(f)}return b.useEffect(()=>{},[l,u]),b.useEffect(()=>{const f=af(a);f!==u&&c(f)},[a,u]),u}function c8({children:a,in:l,onExited:o,mountOnEnter:u,unmountOnExit:c}){const f=b.useRef(null),p=b.useRef(l),y=An(o);b.useEffect(()=>{l?p.current=!0:y(f.current)},[l,y]);const g=uo(f,qi(a)),m=b.cloneElement(a,{ref:g});return l?m:c||!p.current&&u?null:m}const f8=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function d8(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}function h8(a){let{onEnter:l,onEntering:o,onEntered:u,onExit:c,onExiting:f,onExited:p,addEndListener:y,children:g}=a,m=d8(a,f8);const x=b.useRef(null),S=uo(x,qi(g)),w=G=>L=>{G&&x.current&&G(x.current,L)},D=b.useCallback(w(l),[l]),O=b.useCallback(w(o),[o]),Y=b.useCallback(w(u),[u]),X=b.useCallback(w(c),[c]),P=b.useCallback(w(f),[f]),M=b.useCallback(w(p),[p]),$=b.useCallback(w(y),[y]);return Object.assign({},m,{nodeRef:x},l&&{onEnter:D},o&&{onEntering:O},u&&{onEntered:Y},c&&{onExit:X},f&&{onExiting:P},p&&{onExited:M},y&&{addEndListener:$},{children:typeof g=="function"?(G,L)=>g(G,Object.assign({},L,{ref:S})):b.cloneElement(g,{ref:S})})}const p8=["component"];function m8(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}const v8=b.forwardRef((a,l)=>{let{component:o}=a,u=m8(a,p8);const c=h8(u);return h.jsx(o,Object.assign({ref:l},c))});function g8({in:a,onTransition:l}){const o=b.useRef(null),u=b.useRef(!0),c=An(l);return gm(()=>{if(!o.current)return;let f=!1;return c({in:a,element:o.current,initial:u.current,isStale:()=>f}),()=>{f=!0}},[a,c]),gm(()=>(u.current=!1,()=>{u.current=!0}),[]),o}function y8({children:a,in:l,onExited:o,onEntered:u,transition:c}){const[f,p]=b.useState(!l);l&&f&&p(!1);const y=g8({in:!!l,onTransition:m=>{const x=()=>{m.isStale()||(m.in?u?.(m.element,m.initial):(p(!0),o?.(m.element)))};Promise.resolve(c(m)).then(x,S=>{throw m.in||p(!0),S})}}),g=uo(y,qi(a));return f&&!l?null:b.cloneElement(a,{ref:g})}function Em(a,l,o){return a?h.jsx(v8,Object.assign({},o,{component:a})):l?h.jsx(y8,Object.assign({},o,{transition:l})):h.jsx(c8,Object.assign({},o))}const b8=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function x8(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}let lf;function S8(a){return lf||(lf=new Kf({ownerDocument:a?.document})),lf}function w8(a){const l=Zf(),o=a||S8(l),u=b.useRef({dialog:null,backdrop:null});return Object.assign(u.current,{add:()=>o.add(u.current),remove:()=>o.remove(u.current),isTopModal:()=>o.isTopModal(u.current),setDialogRef:b.useCallback(c=>{u.current.dialog=c},[]),setBackdropRef:b.useCallback(c=>{u.current.backdrop=c},[])})}const Wv=b.forwardRef((a,l)=>{let{show:o=!1,role:u="dialog",className:c,style:f,children:p,backdrop:y=!0,keyboard:g=!0,onBackdropClick:m,onEscapeKeyDown:x,transition:S,runTransition:w,backdropTransition:D,runBackdropTransition:O,autoFocus:Y=!0,enforceFocus:X=!0,restoreFocus:P=!0,restoreFocusOptions:M,renderDialog:$,renderBackdrop:G=Be=>h.jsx("div",Object.assign({},Be)),manager:L,container:_,onShow:J,onHide:k=()=>{},onExit:Z,onExited:le,onExiting:K,onEnter:N,onEntering:te,onEntered:ne}=a,T=x8(a,b8);const z=Zf(),H=s8(_),F=w8(L),re=NS(),ce=LS(o),[C,V]=b.useState(!o),ie=b.useRef(null);b.useImperativeHandle(l,()=>F,[F]),ao&&!ce&&o&&(ie.current=nf(z?.document)),o&&C&&V(!1);const ae=An(()=>{if(F.add(),St.current=Zu(document,"keydown",ke),Ce.current=Zu(document,"focus",()=>setTimeout(he),!0),J&&J(),Y){var Be,Ha;const Gi=nf((Be=(Ha=F.dialog)==null?void 0:Ha.ownerDocument)!=null?Be:z?.document);F.dialog&&Gi&&!ym(F.dialog,Gi)&&(ie.current=Gi,F.dialog.focus())}}),se=An(()=>{if(F.remove(),St.current==null||St.current(),Ce.current==null||Ce.current(),P){var Be;(Be=ie.current)==null||Be.focus==null||Be.focus(M),ie.current=null}});b.useEffect(()=>{!o||!H||ae()},[o,H,ae]),b.useEffect(()=>{C&&se()},[C,se]),u8(()=>{se()});const he=An(()=>{if(!X||!re()||!F.isTopModal())return;const Be=nf(z?.document);F.dialog&&Be&&!ym(F.dialog,Be)&&F.dialog.focus()}),ye=An(Be=>{Be.target===Be.currentTarget&&(m?.(Be),y===!0&&k())}),ke=An(Be=>{g&&gS(Be)&&F.isTopModal()&&(x?.(Be),Be.defaultPrevented||k())}),Ce=b.useRef(),St=b.useRef(),Kt=(...Be)=>{V(!0),le?.(...Be)};if(!H)return null;const ft=Object.assign({role:u,ref:F.setDialogRef,"aria-modal":u==="dialog"?!0:void 0},T,{style:f,className:c,tabIndex:-1});let Ua=$?$(ft):h.jsx("div",Object.assign({},ft,{children:b.cloneElement(p,{role:"document"})}));Ua=Em(S,w,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!o,onExit:Z,onExiting:K,onExited:Kt,onEnter:N,onEntering:te,onEntered:ne,children:Ua});let kt=null;return y&&(kt=G({ref:F.setBackdropRef,onClick:ye}),kt=Em(D,O,{in:!!o,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:kt})),h.jsx(h.Fragment,{children:Oi.createPortal(h.jsxs(h.Fragment,{children:[kt,Ua]}),H)})});Wv.displayName="Modal";const E8=Object.assign(Wv,{Manager:Kf});function C8(a,l){return a.classList?a.classList.contains(l):(" "+(a.className.baseVal||a.className)+" ").indexOf(" "+l+" ")!==-1}function T8(a,l){a.classList?a.classList.add(l):C8(a,l)||(typeof a.className=="string"?a.className=a.className+" "+l:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+l))}function Cm(a,l){return a.replace(new RegExp("(^|\\s)"+l+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function R8(a,l){a.classList?a.classList.remove(l):typeof a.className=="string"?a.className=Cm(a.className,l):a.setAttribute("class",Cm(a.className&&a.className.baseVal||"",l))}const Ri={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Pv extends Kf{adjustAndStore(l,o,u){const c=o.style[l];o.dataset[l]=c,Nn(o,{[l]:`${parseFloat(Nn(o,l))+u}px`})}restore(l,o){const u=o.dataset[l];u!==void 0&&(delete o.dataset[l],Nn(o,{[l]:u}))}setContainerStyle(l){super.setContainerStyle(l);const o=this.getElement();if(T8(o,"modal-open"),!l.scrollBarWidth)return;const u=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";Na(o,Ri.FIXED_CONTENT).forEach(f=>this.adjustAndStore(u,f,l.scrollBarWidth)),Na(o,Ri.STICKY_CONTENT).forEach(f=>this.adjustAndStore(c,f,-l.scrollBarWidth)),Na(o,Ri.NAVBAR_TOGGLER).forEach(f=>this.adjustAndStore(c,f,l.scrollBarWidth))}removeContainerStyle(l){super.removeContainerStyle(l);const o=this.getElement();R8(o,"modal-open");const u=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";Na(o,Ri.FIXED_CONTENT).forEach(f=>this.restore(u,f)),Na(o,Ri.STICKY_CONTENT).forEach(f=>this.restore(c,f)),Na(o,Ri.NAVBAR_TOGGLER).forEach(f=>this.restore(c,f))}}let rf;function j8(a){return rf||(rf=new Pv(a)),rf}const Iv=b.createContext({onHide(){}}),eg=b.forwardRef(({closeLabel:a="Close",closeVariant:l,closeButton:o=!1,onHide:u,children:c,...f},p)=>{const y=b.useContext(Iv),g=lo(()=>{y?.onHide(),u?.()});return h.jsxs("div",{ref:p,...f,children:[c,o&&h.jsx(Xf,{"aria-label":a,variant:l,onClick:g})]})});eg.displayName="AbstractModalHeader";const tg=b.forwardRef(({className:a,bsPrefix:l,as:o="div",...u},c)=>(l=xt(l,"nav-item"),h.jsx(o,{ref:c,className:at(a,l),...u})));tg.displayName="NavItem";const ng=b.forwardRef(({bsPrefix:a,className:l,as:o=Yv,active:u,eventKey:c,disabled:f=!1,...p},y)=>{a=xt(a,"nav-link");const[g,m]=Kv({key:Vf(c,p.href),active:u,disabled:f,...p});return h.jsx(o,{...p,...g,ref:y,disabled:f,className:at(l,a,f&&"disabled",m.isActive&&"active")})});ng.displayName="NavLink";const ag=b.forwardRef((a,l)=>{const{as:o="div",bsPrefix:u,variant:c,fill:f=!1,justify:p=!1,navbar:y,navbarScroll:g,className:m,activeKey:x,...S}=Lv(a,{activeKey:"onSelect"}),w=xt(u,"nav");let D,O,Y=!1;const X=b.useContext(Yi),P=b.useContext(Xv);return X?(D=X.bsPrefix,Y=y??!0):P&&({cardHeaderBsPrefix:O}=P),h.jsx(l8,{as:o,ref:l,activeKey:x,className:at(m,{[w]:!Y,[`${D}-nav`]:Y,[`${D}-nav-scroll`]:Y&&g,[`${O}-${c}`]:!!O,[`${w}-${c}`]:!!c,[`${w}-fill`]:f,[`${w}-justified`]:p}),...S})});ag.displayName="Nav";const O8=Object.assign(ag,{Item:tg,Link:ng}),ig=b.forwardRef(({bsPrefix:a,className:l,as:o,...u},c)=>{a=xt(a,"navbar-brand");const f=o||(u.href?"a":"span");return h.jsx(f,{...u,ref:c,className:at(l,a)})});ig.displayName="NavbarBrand";const lg=b.forwardRef(({children:a,bsPrefix:l,...o},u)=>{l=xt(l,"navbar-collapse");const c=b.useContext(Yi);return h.jsx(Hv,{in:!!(c&&c.expanded),...o,children:h.jsx("div",{ref:u,className:l,children:a})})});lg.displayName="NavbarCollapse";const rg=b.forwardRef(({bsPrefix:a,className:l,children:o,label:u="Toggle navigation",as:c="button",onClick:f,...p},y)=>{a=xt(a,"navbar-toggler");const{onToggle:g,expanded:m}=b.useContext(Yi)||{},x=lo(S=>{f&&f(S),g&&g()});return c==="button"&&(p.type="button"),h.jsx(c,{...p,ref:y,onClick:x,"aria-label":u,className:at(l,a,!m&&"collapsed"),children:o||h.jsx("span",{className:`${a}-icon`})})});rg.displayName="NavbarToggle";const Cf=new WeakMap,Tm=(a,l)=>{if(!a||!l)return;const o=Cf.get(l)||new Map;Cf.set(l,o);let u=o.get(a);return u||(u=l.matchMedia(a),u.refCount=0,o.set(u.media,u)),u};function z8(a,l=typeof window>"u"?void 0:window){const o=Tm(a,l),[u,c]=b.useState(()=>o?o.matches:!1);return IS(()=>{let f=Tm(a,l);if(!f)return c(!1);let p=Cf.get(l);const y=()=>{c(f.matches)};return f.refCount++,f.addListener(y),y(),()=>{f.removeListener(y),f.refCount--,f.refCount<=0&&p?.delete(f.media),f=void 0}},[a]),u}function _8(a){const l=Object.keys(a);function o(y,g){return y===g?g:y?`${y} and ${g}`:g}function u(y){return l[Math.min(l.indexOf(y)+1,l.length-1)]}function c(y){const g=u(y);let m=a[g];return typeof m=="number"?m=`${m-.2}px`:m=`calc(${m} - 0.2px)`,`(max-width: ${m})`}function f(y){let g=a[y];return typeof g=="number"&&(g=`${g}px`),`(min-width: ${g})`}function p(y,g,m){let x;typeof y=="object"?(x=y,m=g,g=!0):(g=g||!0,x={[y]:g});let S=b.useMemo(()=>Object.entries(x).reduce((w,[D,O])=>((O==="up"||O===!0)&&(w=o(w,f(D))),(O==="down"||O===!0)&&(w=o(w,c(D))),w),""),[JSON.stringify(x)]);return z8(S,m)}return p}const M8=_8({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),ug=b.forwardRef(({className:a,bsPrefix:l,as:o="div",...u},c)=>(l=xt(l,"offcanvas-body"),h.jsx(o,{ref:c,className:at(a,l),...u})));ug.displayName="OffcanvasBody";const A8={[en]:"show",[Mn]:"show"},og=b.forwardRef(({bsPrefix:a,className:l,children:o,in:u=!1,mountOnEnter:c=!1,unmountOnExit:f=!1,appear:p=!1,...y},g)=>(a=xt(a,"offcanvas"),h.jsx(io,{ref:g,addEndListener:Gf,in:u,mountOnEnter:c,unmountOnExit:f,appear:p,...y,childRef:qi(o),children:(m,x)=>b.cloneElement(o,{...x,className:at(l,o.props.className,(m===en||m===Pl)&&`${a}-toggling`,A8[m])})})));og.displayName="OffcanvasToggling";const sg=b.forwardRef(({bsPrefix:a,className:l,closeLabel:o="Close",closeButton:u=!1,...c},f)=>(a=xt(a,"offcanvas-header"),h.jsx(eg,{ref:f,...c,className:at(l,a),closeLabel:o,closeButton:u})));sg.displayName="OffcanvasHeader";const D8=AS("h5"),cg=b.forwardRef(({className:a,bsPrefix:l,as:o=D8,...u},c)=>(l=xt(l,"offcanvas-title"),h.jsx(o,{ref:c,className:at(a,l),...u})));cg.displayName="OffcanvasTitle";function N8(a){return h.jsx(og,{...a})}function L8(a){return h.jsx(Gv,{...a})}const fg=b.forwardRef(({bsPrefix:a,className:l,children:o,"aria-labelledby":u,placement:c="start",responsive:f,show:p=!1,backdrop:y=!0,keyboard:g=!0,scroll:m=!1,onEscapeKeyDown:x,onShow:S,onHide:w,container:D,autoFocus:O=!0,enforceFocus:Y=!0,restoreFocus:X=!0,restoreFocusOptions:P,onEntered:M,onExit:$,onExiting:G,onEnter:L,onEntering:_,onExited:J,backdropClassName:k,manager:Z,renderStaticNode:le=!1,...K},N)=>{const te=b.useRef();a=xt(a,"offcanvas");const[ne,T]=b.useState(!1),z=lo(w),H=M8(f||"xs","up");b.useEffect(()=>{T(f?p&&!H:p)},[p,f,H]);const F=b.useMemo(()=>({onHide:z}),[z]);function re(){return Z||(m?(te.current||(te.current=new Pv({handleContainerOverflow:!1})),te.current):j8())}const ce=(ae,...se)=>{ae&&(ae.style.visibility="visible"),L?.(ae,...se)},C=(ae,...se)=>{ae&&(ae.style.visibility=""),J?.(...se)},V=b.useCallback(ae=>h.jsx("div",{...ae,className:at(`${a}-backdrop`,k)}),[k,a]),ie=ae=>h.jsx("div",{...ae,...K,className:at(l,f?`${a}-${f}`:a,`${a}-${c}`),"aria-labelledby":u,children:o});return h.jsxs(h.Fragment,{children:[!ne&&(f||le)&&ie({}),h.jsx(Iv.Provider,{value:F,children:h.jsx(E8,{show:ne,ref:N,backdrop:y,container:D,keyboard:g,autoFocus:O,enforceFocus:Y&&!m,restoreFocus:X,restoreFocusOptions:P,onEscapeKeyDown:x,onShow:S,onHide:z,onEnter:ce,onEntering:_,onEntered:M,onExit:$,onExiting:G,onExited:C,manager:re(),transition:N8,backdropTransition:L8,renderBackdrop:V,renderDialog:ie})})]})});fg.displayName="Offcanvas";const k8=Object.assign(fg,{Body:ug,Header:sg,Title:cg}),dg=b.forwardRef(({onHide:a,...l},o)=>{const u=b.useContext(Yi),c=lo(()=>{u==null||u.onToggle==null||u.onToggle(),a?.()});return h.jsx(k8,{ref:o,show:!!(u!=null&&u.expanded),...l,renderStaticNode:!0,onHide:c})});dg.displayName="NavbarOffcanvas";const hg=b.forwardRef(({className:a,bsPrefix:l,as:o="span",...u},c)=>(l=xt(l,"navbar-text"),h.jsx(o,{ref:c,className:at(a,l),...u})));hg.displayName="NavbarText";const pg=b.forwardRef((a,l)=>{const{bsPrefix:o,expand:u=!0,variant:c="light",bg:f,fixed:p,sticky:y,className:g,as:m="nav",expanded:x,onToggle:S,onSelect:w,collapseOnSelect:D=!1,...O}=Lv(a,{expanded:"onToggle"}),Y=xt(o,"navbar"),X=b.useCallback((...$)=>{w?.(...$),D&&x&&S?.(!1)},[w,D,x,S]);O.role===void 0&&m!=="nav"&&(O.role="navigation");let P=`${Y}-expand`;typeof u=="string"&&(P=`${P}-${u}`);const M=b.useMemo(()=>({onToggle:()=>S?.(!x),bsPrefix:Y,expanded:!!x,expand:u}),[Y,x,u,S]);return h.jsx(Yi.Provider,{value:M,children:h.jsx(Ku.Provider,{value:X,children:h.jsx(m,{ref:l,...O,className:at(g,Y,u&&P,c&&`${Y}-${c}`,f&&`bg-${f}`,y&&`sticky-${y}`,p&&`fixed-${p}`)})})})});pg.displayName="Navbar";const B8=Object.assign(pg,{Brand:ig,Collapse:lg,Offcanvas:dg,Text:hg,Toggle:rg});function U8(a){return je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M149.688 85.625c-1.234.005-2.465.033-3.72.063-33.913.806-75.48 10.704-127.25 33.718V362.78c60.77-28.82 106.718-37.067 144.22-33.092 33.502 3.55 59.685 16.66 83.562 31.187v-242.97c-23.217-17.744-50.195-30.04-85.97-32-3.52-.192-7.142-.296-10.843-.28zm211.968 0c-3.7-.016-7.322.088-10.844.28-35.773 1.96-62.75 14.256-85.968 32v242.97c23.876-14.527 50.06-27.637 83.562-31.188 37.502-3.974 83.45 4.272 144.22 33.094V119.407c-51.77-23.014-93.337-32.912-127.25-33.72-1.255-.028-2.486-.056-3.72-.06zm5.72 261.78c-1.038-.002-2.074.017-3.095.033-4.808.075-9.43.37-13.905.843-33.932 3.597-59.603 17.976-85.53 34.44v.28c-6.554-1.99-13.02-2.37-19.408-.97-25.566-16.177-51.003-30.202-84.468-33.75-5.595-.592-11.44-.883-17.564-.842-32.04.213-71.833 9.778-124.687 35.937v42.53c60.77-28.823 106.714-37.067 144.218-33.092 18.545 1.965 34.837 6.845 49.75 13.28-4.682 6.064-9.308 13.268-13.875 21.688h117.156c-5.93-8.22-11.798-15.414-17.626-21.56 14.996-6.503 31.39-11.43 50.062-13.408 37.503-3.974 83.448 4.27 144.22 33.094v-42.53c-53.16-26.31-93.115-35.863-125.25-35.97z"},child:[]}]})(a)}function H8(a){return je({attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",fill:"currentColor"},child:[]}]})(a)}const $8=R(B8)`
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
`,q8=R.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 8px;
`,Y8=R.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,G8=R.div`
  justify-self: center;
`,X8=R.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`,V8=R.button`
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
`,Q8=R(Hi)`
  padding: 10px 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px; /* space between icon and text */
`,Z8=R(U8)`
  width: 28px;
  height: 28px;
  flex: 0 0 28px;
  color: #f0703c /* keep high contrast; adjust to your brand */
`,K8=R.div`
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
`;function J8(){const a=()=>{console.log("Toggled theme")};return h.jsx("div",{className:"topbar-wrapper",children:h.jsx($8,{className:"shadow-sm d-lg-none",children:h.jsx(Vv,{fluid:!0,className:"px-3",children:h.jsxs(q8,{children:[h.jsx(Y8,{children:h.jsxs(Q8,{to:"/instalearn/","aria-label":"Go to home",children:[h.jsx(Z8,{"aria-hidden":"true"}),h.jsx(K8,{children:"InstaLearn"})]})}),h.jsx(G8,{}),h.jsx(X8,{children:h.jsx(V8,{type:"button",onClick:a,"aria-label":"Toggle",children:h.jsx(H8,{size:20})})})]})})})})}const F8=cn`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,W8=R.aside`
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
`,P8=R(Hi)`
  padding: 25px 12px 16px 12px;
  margin-bottom: 19px;
  margin-left: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: padding 200ms ease, margin 200ms ease;
`,I8=R.div`
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
`,e7=R.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
`,t7=ha`
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
    animation: ${F8} 4s linear infinite;
    box-shadow: 0 0 8px rgba(0, 245, 255, 0.8);
  }
`,uf=R(Hi)`
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

  ${a=>a.$active&&t7}
`,n7=R.div`
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px solid #dbdbdb;
`,of=R.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,sf=R.span`
  white-space: nowrap;
  transition: opacity 120ms ease, width 200ms ease;
`;function a7(){const{pathname:a}=Bn(),l=[{to:"/instalearn/",icon:h.jsx(Sv,{}),label:"Home"},{to:"/instalearn/teacher",icon:h.jsx(_i,{}),label:"Teacher"},{to:"/instalearn/library",icon:h.jsx(xv,{}),label:"Library",hasNotification:!0},{to:"/instalearn/notifications",icon:h.jsx(z5,{}),label:"Notifications"},{to:"/instalearn/profile",icon:h.jsx(Ev,{}),label:"Profile"}];return h.jsxs(W8,{children:[h.jsx(P8,{to:"/instalearn/",children:h.jsx(I8,{children:"InstaLearn"})}),h.jsxs(e7,{children:[l.slice(0,-1).map(o=>h.jsxs(uf,{to:o.to,$active:a===o.to,children:[h.jsx(of,{children:o.icon}),h.jsx(sf,{children:o.label}),o.hasNotification]},o.to)),h.jsxs(uf,{to:l[l.length-1].to,$active:a===l[l.length-1].to,children:[h.jsx(of,{children:l[l.length-1].icon}),h.jsx(sf,{children:l[l.length-1].label})]})]}),h.jsx(n7,{children:h.jsxs(uf,{to:"/instalearn/more",$active:a==="/instalearn/more",children:[h.jsx(of,{children:h.jsx(_5,{})}),h.jsx(sf,{children:"More"})]})})]})}const i7=R.div`
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
`,l7=R.div`
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
`,mg=R.div`
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
`,r7=R.div`
  position: relative;
  flex-shrink: 0;
`,u7=R.div`
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
  
  ${mg}:hover & {
    transform: scale(1.05);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }
`,o7=R.div`
  position: absolute;
  bottom: ${a=>a.$width<250?"2px":"4px"};
  right: ${a=>a.$width<250?"0":"2px"};
  width: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  height: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
`,s7=R.div`
  flex: 1;
  min-width: 0;
  display: ${a=>a.$width<180?"none":"block"};
`,c7=R.div`
  font-size: ${a=>a.$width<250?"13px":"14px"};
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,f7=R.div`
  font-size: ${a=>a.$width<250?"11px":"13px"};
  color: #6b7280;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,d7=R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,h7=R.div`
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
`,p7=R.button`
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
`,m7=R.div`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.$width<250?"8px":"12px"};
  margin-bottom: 32px;
`,vg=R.div`
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
`,v7=R.div`
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
  
  ${vg}:hover & {
    transform: scale(1.05) rotate(5deg);
  }
`,g7=R.div`
  display: flex;
  flex-direction: ${a=>a.$width<200?"column":a.$width<250?"row":"column"};
  align-items: ${a=>a.$width>=200&&a.$width<250?"center":"stretch"};
  flex: 1;
`,y7=R.div`
  flex: 1;
`,b7=R.h4`
  font-size: ${a=>a.$width<250?"12px":"13px"};
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 ${a=>a.$width<250?"2px":"4px"} 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,x7=R.p`
  font-size: ${a=>a.$width<250?"10px":"12px"};
  color: #6b7280;
  margin: 0;
  display: ${a=>a.$width<180?"none":"-webkit-box"};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
`,S7=R.span`
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
`;R.a`
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
`;const w7=({sidebarWidth:a=360})=>{const l={username:"demo_user",name:"Demo User",initials:"DU"},o=[{icon:T1,gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",title:"New Feature: Dark Mode",description:"Enable dark mode for a better night-time experience.",badge:"New",badgeBg:"linear-gradient(135deg, #667eea, #764ba2)"},{icon:M5,gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",title:"Product Tip: Quick Search",description:"Use the search bar to find items faster.",badge:"Tip",badgeBg:"linear-gradient(135deg, #f093fb, #f5576c)"},{icon:O5,gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",title:"Update: Version 2.0",description:"Check out the latest improvements and bug fixes.",badge:"Update",badgeBg:"linear-gradient(135deg, #4facfe, #00f2fe)"}];return h.jsxs(i7,{children:[h.jsx(l7,{children:h.jsxs(mg,{$width:a,children:[h.jsxs(r7,{children:[h.jsx(u7,{$width:a,children:l.initials}),h.jsx(o7,{$width:a})]}),h.jsxs(s7,{$width:a,children:[h.jsx(c7,{$width:a,children:l.username}),h.jsx(f7,{$width:a,children:l.name})]})]})}),h.jsxs(d7,{children:[h.jsxs(h7,{$width:a,$iconColor:"#667eea",children:[h.jsx(T1,{}),h.jsx("span",{children:"Highlights"})]}),h.jsx(p7,{$width:a,children:"See All"})]}),h.jsx(m7,{$width:a,children:o.map((u,c)=>{const f=u.icon;return h.jsxs(vg,{$width:a,$glowColor:u.gradient,children:[h.jsx(S7,{$width:a,$bg:u.badgeBg,children:u.badge}),h.jsxs(g7,{$width:a,children:[h.jsx(v7,{$width:a,$gradient:u.gradient,children:h.jsx(f,{})}),h.jsxs(y7,{children:[h.jsx(b7,{$width:a,children:u.title}),h.jsx(x7,{$width:a,children:u.description})]})]})]},c)})})]})};function E7(){const{pathname:a}=Bn(),l=[["/instalearn/",h.jsx(Sv,{})],["/instalearn/teacher",h.jsx(_i,{})],["/instalearn/library",h.jsx(xv,{})],["/instalearn/profile",h.jsx(Ev,{})]];return h.jsxs(h.Fragment,{children:[h.jsx("style",{children:`
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
      `}),h.jsx(O8,{className:"bottom-nav fixed-bottom d-flex justify-content-around py-2 d-lg-none",children:l.map(([o,u])=>h.jsx(Hi,{to:o,className:`nav-link fs-4 text-white ${a===o?"active":""}`,children:u},o))})]})}const C7={name:"Siddharth Sir",subject:"SST Teacher",bio:"Exploring history, geography & civics 🌍 | Making SST engaging for Classes 6–12 | CBSE Expert",avatar:Cv.teacherProfilePic,posts:247,students:"1.2K",books:15,experience:8,bookList:[{title:"SST MARATHON"},{title:"World Geography Simplified"},{title:"Understanding Civics"},{title:"Economics Made Easy"},{title:"Political Science Basics"},{title:"Environment & Society"}]},Dt=C7,T7=R.div`
  max-width: 1120px;
  margin: 0 auto;
  background: #fff;
  min-height: 100vh;
`,R7=R.div`
  padding: 1rem 1.5rem;
  @media (min-width: 768px) {
    padding: 1.5rem 2rem;
  }
  @media (min-width: 1024px) {
    padding: 2rem 3rem;
  }
`,j7=R.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,O7=R.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,z7=R.div`
  position: relative;
`,_7=R.img`
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
`,M7=R.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  text-align: center;

  @media (min-width: 768px) {
    display: none;
  }
`,A7=R.div`
  display: none;
  gap: 2rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    display: flex;
  }
`,ji=R.div`
  font-weight: 600;
  font-size: 1.125rem;
  span {
    font-weight: 400;
    margin-left: 0.25rem;
    color: #6b7280;
  }
`,D7=R.div`
  flex: 1;
`,N7=R.div`
  font-weight: 600;
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`,L7=R.div`
  font-size: 0.875rem;
  color: #6b7280;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,k7=R.div`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,B7=R.div`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  color: #6b7280;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,U7=R.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,H7=R.button`
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
`,$7=R.button`
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
`,q7=R.button`
  border: 1px solid #d1d5db;
  padding: 0.25rem 1rem;
  border-radius: 0.5rem;
`,Y7=R.div`
  margin-bottom: 1.5rem;
`,G7=R.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
`,X7=R.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: fit-content;
  cursor: pointer;
`,V7=R.div`
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
`,Q7=R.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 0.25rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`,Z7=R.div`
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
`,K7=R.div`
  display: flex;
  border-top: 1px solid #e5e7eb;
`,Rm=R.button`
  flex: 1;
  padding: 0.75rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-top: 2px solid ${({active:a})=>a?"#111827":"transparent"};
  color: ${({active:a})=>a?"#111827":"#9ca3af"};
`,J7=R.div`
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
`,F7=R.div`
  aspect-ratio: 1 / 1;
  background: #f3f4f6;
  display: flex;
  justify-content: center;
  align-items: center;
`;function W7(){b.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]);const a=Rf(),l=o=>{o===0&&a("/instalearn/library")};return h.jsxs(T7,{children:[h.jsxs(R7,{children:[h.jsxs(j7,{children:[h.jsxs(O7,{children:[h.jsx(z7,{children:h.jsx(_7,{src:Dt.avatar,alt:Dt.name})}),h.jsxs(M7,{children:[h.jsxs(ji,{children:[Dt.posts," ",h.jsx("span",{children:"posts"})]}),h.jsxs(ji,{children:[Dt.students," ",h.jsx("span",{children:"students"})]}),h.jsxs(ji,{children:[Dt.books," ",h.jsx("span",{children:"books"})]})]})]}),h.jsxs(D7,{children:[h.jsxs(A7,{children:[h.jsxs(ji,{children:[Dt.posts," ",h.jsx("span",{children:"posts"})]}),h.jsxs(ji,{children:[Dt.students," ",h.jsx("span",{children:"students"})]}),h.jsxs(ji,{children:[Dt.books," ",h.jsx("span",{children:"books"})]})]}),h.jsx(N7,{children:Dt.name}),h.jsx(L7,{children:Dt.subject}),h.jsx(k7,{children:Dt.bio}),h.jsxs(B7,{children:["🎓 ",Dt.experience," years experience"]}),h.jsxs(U7,{children:[h.jsx(H7,{children:"Follow"}),h.jsx($7,{children:"Message"}),h.jsx(q7,{children:"▼"})]})]})]}),h.jsx(Y7,{children:h.jsx(G7,{children:Dt.bookList.map((o,u)=>h.jsxs(X7,{onClick:()=>l(u),children:[h.jsx(V7,{children:h.jsx(Q7,{children:h.jsx(La,{size:24})})}),h.jsx(Z7,{children:o.title})]},u))})})]}),h.jsxs(K7,{children:[h.jsx(Rm,{children:h.jsx(B4,{size:20})}),h.jsx(Rm,{children:h.jsx(j4,{size:20})})]}),h.jsx(J7,{children:Array(9).fill(null).map((o,u)=>h.jsx(F7,{children:h.jsx(La,{size:24})},u))})]})}const P7=R.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--color-light, #f5f5f5);
`,I7=R.aside`
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
`,ew=R.div`
  flex: 1;
  display: flex;
  width: 100%;

  @media (min-width: 1024px) {
    /* match LeftSidebar width exactly to avoid layout jump */
    margin-left: 246px;
  }
`,tw=R.main`
  flex: 1;
  width: 100%;
  padding-bottom: 60px;
  transition: ${a=>a.$isResizing?"none":"margin-right 0.2s ease"};
  will-change: margin-right;

  @media (min-width: 1024px) {
    padding-bottom: 0;
    margin-right: ${a=>`${a.$sidebarWidth}px`};
  }
`,nw=R.aside`
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
`,aw=R.div`
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
`,iw=R.div`
  display: block;
  margin-bottom: 60px;

  @media (min-width: 1024px) {
    display: none;
  }
`,lw=R.div`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (min-width: 1024px) {
    display: none;
  }
`;function rw(){const[a,l]=b.useState(360),[o,u]=b.useState(!1),c=b.useRef(null),f=350,p=600,y=g=>{g.preventDefault(),u(!0),c.current={startX:g.clientX,startWidth:a}};return b.useEffect(()=>{const g=(S,w,D)=>Math.min(Math.max(S,w),D),m=S=>{if(!o||!c.current)return;const{startX:w,startWidth:D}=c.current,O=w-S.clientX,Y=g(D+O,f,p);l(Y)},x=()=>{o&&(u(!1),c.current=null)};return o&&(document.addEventListener("mousemove",m),document.addEventListener("mouseup",x),document.body.style.cursor="ew-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",x),document.body.style.cursor="",document.body.style.userSelect=""}},[o]),h.jsxs(P7,{children:[h.jsx(I7,{children:h.jsx(a7,{})}),h.jsxs(ew,{children:[h.jsxs(tw,{$sidebarWidth:a,$isResizing:o,children:[h.jsx(iw,{children:h.jsx(J8,{})}),h.jsxs(Ub,{children:[h.jsx(Da,{path:"/instalearn",element:h.jsx(o6,{})}),h.jsx(Da,{path:"/instalearn/teacher",element:h.jsx(W7,{})}),h.jsx(Da,{path:"/instalearn/library",element:h.jsx(m4,{})}),h.jsx(Da,{path:"/instalearn/notifications",element:h.jsx(dm,{})}),h.jsx(Da,{path:"/instalearn/more",element:h.jsx(dm,{})}),h.jsx(Da,{path:"/instalearn/profile",element:h.jsx(H6,{})})]})]}),h.jsxs(nw,{$width:a,$isResizing:o,children:[h.jsx(aw,{className:o?"active":"",onMouseDown:y,"aria-label":"Resize sidebar"}),h.jsx(w7,{})]})]}),h.jsx(lw,{children:h.jsx(E7,{})})]})}K2.createRoot(document.getElementById("root")).render(h.jsx(ux,{children:h.jsx(rw,{})}));
