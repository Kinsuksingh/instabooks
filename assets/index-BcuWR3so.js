const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/react-ThbvgvLD.js","assets/mixin-D3UDm--6.js","assets/hls-Bm3F2dIq.js","assets/react-B4VtdS1X.js","assets/index-C1sa0vQz.js"])))=>i.map(i=>d[i]);
(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function o(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(c){if(c.ep)return;c.ep=!0;const f=o(c);fetch(c.href,f)}})();function tr(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var xc={exports:{}},Ll={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0;function _2(){if($0)return Ll;$0=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function o(u,c,f){var h=null;if(f!==void 0&&(h=""+f),c.key!==void 0&&(h=""+c.key),"key"in c){f={};for(var y in c)y!=="key"&&(f[y]=c[y])}else f=c;return c=f.ref,{$$typeof:a,type:u,key:h,ref:c!==void 0?c:null,props:f}}return Ll.Fragment=l,Ll.jsx=o,Ll.jsxs=o,Ll}var q0;function O2(){return q0||(q0=1,xc.exports=_2()),xc.exports}var p=O2(),Sc={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0;function z2(){if(Y0)return pe;Y0=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),w=Symbol.iterator;function j(T){return T===null||typeof T!="object"?null:(T=w&&T[w]||T["@@iterator"],typeof T=="function"?T:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,Y={};function X(T,V,ie){this.props=T,this.context=V,this.refs=Y,this.updater=ie||R}X.prototype.isReactComponent={},X.prototype.setState=function(T,V){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,V,"setState")},X.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function z(){}z.prototype=X.prototype;function B(T,V,ie){this.props=T,this.context=V,this.refs=Y,this.updater=ie||R}var F=B.prototype=new z;F.constructor=B,q(F,X.prototype),F.isPureReactComponent=!0;var k=Array.isArray;function N(){}var J={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function K(T,V,ie){var ae=ie.ref;return{$$typeof:a,type:T,key:V,ref:ae!==void 0?ae:null,props:ie}}function re(T,V){return K(T.type,V,T.props)}function Z(T){return typeof T=="object"&&T!==null&&T.$$typeof===a}function D(T){var V={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(ie){return V[ie]})}var ee=/\/+/g;function ne(T,V){return typeof T=="object"&&T!==null&&T.key!=null?D(""+T.key):V.toString(36)}function C(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(N,N):(T.status="pending",T.then(function(V){T.status==="pending"&&(T.status="fulfilled",T.value=V)},function(V){T.status==="pending"&&(T.status="rejected",T.reason=V)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function A(T,V,ie,ae,se){var he=typeof T;(he==="undefined"||he==="boolean")&&(T=null);var ye=!1;if(T===null)ye=!0;else switch(he){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(T.$$typeof){case a:case l:ye=!0;break;case S:return ye=T._init,A(ye(T._payload),V,ie,ae,se)}}if(ye)return se=se(T),ye=ae===""?"."+ne(T,0):ae,k(se)?(ie="",ye!=null&&(ie=ye.replace(ee,"$&/")+"/"),A(se,V,ie,"",function(Et){return Et})):se!=null&&(Z(se)&&(se=re(se,ie+(se.key==null||T&&T.key===se.key?"":(""+se.key).replace(ee,"$&/")+"/")+ye)),V.push(se)),1;ye=0;var Ue=ae===""?".":ae+":";if(k(T))for(var Te=0;Te<T.length;Te++)ae=T[Te],he=Ue+ne(ae,Te),ye+=A(ae,V,ie,he,se);else if(Te=j(T),typeof Te=="function")for(T=Te.call(T),Te=0;!(ae=T.next()).done;)ae=ae.value,he=Ue+ne(ae,Te++),ye+=A(ae,V,ie,he,se);else if(he==="object"){if(typeof T.then=="function")return A(C(T),V,ie,ae,se);throw V=String(T),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return ye}function H(T,V,ie){if(T==null)return T;var ae=[],se=0;return A(T,ae,"","",function(he){return V.call(ie,he,se++)}),ae}function P(T){if(T._status===-1){var V=T._result;V=V(),V.then(function(ie){(T._status===0||T._status===-1)&&(T._status=1,T._result=ie)},function(ie){(T._status===0||T._status===-1)&&(T._status=2,T._result=ie)}),T._status===-1&&(T._status=0,T._result=V)}if(T._status===1)return T._result.default;throw T._result}var le=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},ce={map:H,forEach:function(T,V,ie){H(T,function(){V.apply(this,arguments)},ie)},count:function(T){var V=0;return H(T,function(){V++}),V},toArray:function(T){return H(T,function(V){return V})||[]},only:function(T){if(!Z(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return pe.Activity=x,pe.Children=ce,pe.Component=X,pe.Fragment=o,pe.Profiler=c,pe.PureComponent=B,pe.StrictMode=u,pe.Suspense=g,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,pe.__COMPILER_RUNTIME={__proto__:null,c:function(T){return J.H.useMemoCache(T)}},pe.cache=function(T){return function(){return T.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(T,V,ie){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var ae=q({},T.props),se=T.key;if(V!=null)for(he in V.key!==void 0&&(se=""+V.key),V)!G.call(V,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&V.ref===void 0||(ae[he]=V[he]);var he=arguments.length-2;if(he===1)ae.children=ie;else if(1<he){for(var ye=Array(he),Ue=0;Ue<he;Ue++)ye[Ue]=arguments[Ue+2];ae.children=ye}return K(T.type,se,ae)},pe.createContext=function(T){return T={$$typeof:h,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:f,_context:T},T},pe.createElement=function(T,V,ie){var ae,se={},he=null;if(V!=null)for(ae in V.key!==void 0&&(he=""+V.key),V)G.call(V,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(se[ae]=V[ae]);var ye=arguments.length-2;if(ye===1)se.children=ie;else if(1<ye){for(var Ue=Array(ye),Te=0;Te<ye;Te++)Ue[Te]=arguments[Te+2];se.children=Ue}if(T&&T.defaultProps)for(ae in ye=T.defaultProps,ye)se[ae]===void 0&&(se[ae]=ye[ae]);return K(T,he,se)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(T){return{$$typeof:y,render:T}},pe.isValidElement=Z,pe.lazy=function(T){return{$$typeof:S,_payload:{_status:-1,_result:T},_init:P}},pe.memo=function(T,V){return{$$typeof:m,type:T,compare:V===void 0?null:V}},pe.startTransition=function(T){var V=J.T,ie={};J.T=ie;try{var ae=T(),se=J.S;se!==null&&se(ie,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(N,le)}catch(he){le(he)}finally{V!==null&&ie.types!==null&&(V.types=ie.types),J.T=V}},pe.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},pe.use=function(T){return J.H.use(T)},pe.useActionState=function(T,V,ie){return J.H.useActionState(T,V,ie)},pe.useCallback=function(T,V){return J.H.useCallback(T,V)},pe.useContext=function(T){return J.H.useContext(T)},pe.useDebugValue=function(){},pe.useDeferredValue=function(T,V){return J.H.useDeferredValue(T,V)},pe.useEffect=function(T,V){return J.H.useEffect(T,V)},pe.useEffectEvent=function(T){return J.H.useEffectEvent(T)},pe.useId=function(){return J.H.useId()},pe.useImperativeHandle=function(T,V,ie){return J.H.useImperativeHandle(T,V,ie)},pe.useInsertionEffect=function(T,V){return J.H.useInsertionEffect(T,V)},pe.useLayoutEffect=function(T,V){return J.H.useLayoutEffect(T,V)},pe.useMemo=function(T,V){return J.H.useMemo(T,V)},pe.useOptimistic=function(T,V){return J.H.useOptimistic(T,V)},pe.useReducer=function(T,V,ie){return J.H.useReducer(T,V,ie)},pe.useRef=function(T){return J.H.useRef(T)},pe.useState=function(T){return J.H.useState(T)},pe.useSyncExternalStore=function(T,V,ie){return J.H.useSyncExternalStore(T,V,ie)},pe.useTransition=function(){return J.H.useTransition()},pe.version="19.2.0",pe}var G0;function da(){return G0||(G0=1,Sc.exports=z2()),Sc.exports}var b=da();const ze=tr(b);var wc={exports:{}},Ul={},Ec={exports:{}},Tc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0;function A2(){return X0||(X0=1,(function(a){function l(A,H){var P=A.length;A.push(H);e:for(;0<P;){var le=P-1>>>1,ce=A[le];if(0<c(ce,H))A[le]=H,A[P]=ce,P=le;else break e}}function o(A){return A.length===0?null:A[0]}function u(A){if(A.length===0)return null;var H=A[0],P=A.pop();if(P!==H){A[0]=P;e:for(var le=0,ce=A.length,T=ce>>>1;le<T;){var V=2*(le+1)-1,ie=A[V],ae=V+1,se=A[ae];if(0>c(ie,P))ae<ce&&0>c(se,ie)?(A[le]=se,A[ae]=P,le=ae):(A[le]=ie,A[V]=P,le=V);else if(ae<ce&&0>c(se,P))A[le]=se,A[ae]=P,le=ae;else break e}}return H}function c(A,H){var P=A.sortIndex-H.sortIndex;return P!==0?P:A.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var h=Date,y=h.now();a.unstable_now=function(){return h.now()-y}}var g=[],m=[],S=1,x=null,w=3,j=!1,R=!1,q=!1,Y=!1,X=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function F(A){for(var H=o(m);H!==null;){if(H.callback===null)u(m);else if(H.startTime<=A)u(m),H.sortIndex=H.expirationTime,l(g,H);else break;H=o(m)}}function k(A){if(q=!1,F(A),!R)if(o(g)!==null)R=!0,N||(N=!0,D());else{var H=o(m);H!==null&&C(k,H.startTime-A)}}var N=!1,J=-1,G=5,K=-1;function re(){return Y?!0:!(a.unstable_now()-K<G)}function Z(){if(Y=!1,N){var A=a.unstable_now();K=A;var H=!0;try{e:{R=!1,q&&(q=!1,z(J),J=-1),j=!0;var P=w;try{t:{for(F(A),x=o(g);x!==null&&!(x.expirationTime>A&&re());){var le=x.callback;if(typeof le=="function"){x.callback=null,w=x.priorityLevel;var ce=le(x.expirationTime<=A);if(A=a.unstable_now(),typeof ce=="function"){x.callback=ce,F(A),H=!0;break t}x===o(g)&&u(g),F(A)}else u(g);x=o(g)}if(x!==null)H=!0;else{var T=o(m);T!==null&&C(k,T.startTime-A),H=!1}}break e}finally{x=null,w=P,j=!1}H=void 0}}finally{H?D():N=!1}}}var D;if(typeof B=="function")D=function(){B(Z)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,ne=ee.port2;ee.port1.onmessage=Z,D=function(){ne.postMessage(null)}}else D=function(){X(Z,0)};function C(A,H){J=X(function(){A(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(A){A.callback=null},a.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<A?Math.floor(1e3/A):5},a.unstable_getCurrentPriorityLevel=function(){return w},a.unstable_next=function(A){switch(w){case 1:case 2:case 3:var H=3;break;default:H=w}var P=w;w=H;try{return A()}finally{w=P}},a.unstable_requestPaint=function(){Y=!0},a.unstable_runWithPriority=function(A,H){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var P=w;w=A;try{return H()}finally{w=P}},a.unstable_scheduleCallback=function(A,H,P){var le=a.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?le+P:le):P=le,A){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=P+ce,A={id:S++,callback:H,priorityLevel:A,startTime:P,expirationTime:ce,sortIndex:-1},P>le?(A.sortIndex=P,l(m,A),o(g)===null&&A===o(m)&&(q?(z(J),J=-1):q=!0,C(k,P-le))):(A.sortIndex=ce,l(g,A),R||j||(R=!0,N||(N=!0,D()))),A},a.unstable_shouldYield=re,a.unstable_wrapCallback=function(A){var H=w;return function(){var P=w;w=H;try{return A.apply(this,arguments)}finally{w=P}}}})(Tc)),Tc}var V0;function j2(){return V0||(V0=1,Ec.exports=A2()),Ec.exports}var Cc={exports:{}},ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function M2(){if(Q0)return ct;Q0=1;var a=da();function l(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)m+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var u={d:{f:o,r:function(){throw Error(l(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(g,m,S){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:g,containerInfo:m,implementation:S}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,ct.createPortal=function(g,m){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(l(299));return f(g,m,null,S)},ct.flushSync=function(g){var m=h.T,S=u.p;try{if(h.T=null,u.p=2,g)return g()}finally{h.T=m,u.p=S,u.d.f()}},ct.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,u.d.C(g,m))},ct.prefetchDNS=function(g){typeof g=="string"&&u.d.D(g)},ct.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var S=m.as,x=y(S,m.crossOrigin),w=typeof m.integrity=="string"?m.integrity:void 0,j=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;S==="style"?u.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:w,fetchPriority:j}):S==="script"&&u.d.X(g,{crossOrigin:x,integrity:w,fetchPriority:j,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ct.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var S=y(m.as,m.crossOrigin);u.d.M(g,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&u.d.M(g)},ct.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var S=m.as,x=y(S,m.crossOrigin);u.d.L(g,S,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ct.preloadModule=function(g,m){if(typeof g=="string")if(m){var S=y(m.as,m.crossOrigin);u.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else u.d.m(g)},ct.requestFormReset=function(g){u.d.r(g)},ct.unstable_batchedUpdates=function(g,m){return g(m)},ct.useFormState=function(g,m,S){return h.H.useFormState(g,m,S)},ct.useFormStatus=function(){return h.H.useHostTransitionStatus()},ct.version="19.2.0",ct}var K0;function m1(){if(K0)return Cc.exports;K0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Cc.exports=M2(),Cc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function N2(){if(Z0)return Ul;Z0=1;var a=j2(),l=da(),o=m1();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(u(188))}function m(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return g(r),e;if(s===i)return g(r),t;s=s.sibling}throw Error(u(188))}if(n.return!==i.return)n=r,i=s;else{for(var d=!1,v=r.child;v;){if(v===n){d=!0,n=r,i=s;break}if(v===i){d=!0,i=r,n=s;break}v=v.sibling}if(!d){for(v=s.child;v;){if(v===n){d=!0,n=s,i=r;break}if(v===i){d=!0,i=s,n=r;break}v=v.sibling}if(!d)throw Error(u(189))}}if(n.alternate!==i)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function S(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,w=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),B=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),K=Symbol.for("react.activity"),re=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function D(e){return e===null||typeof e!="object"?null:(e=Z&&e[Z]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Symbol.for("react.client.reference");function ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ee?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case X:return"Profiler";case Y:return"StrictMode";case k:return"Suspense";case N:return"SuspenseList";case K:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case B:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case F:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:ne(e.type)||"Memo";case G:t=e._payload,e=e._init;try{return ne(e(t))}catch{}}return null}var C=Array.isArray,A=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},le=[],ce=-1;function T(e){return{current:e}}function V(e){0>ce||(e.current=le[ce],le[ce]=null,ce--)}function ie(e,t){ce++,le[ce]=e.current,e.current=t}var ae=T(null),se=T(null),he=T(null),ye=T(null);function Ue(e,t){switch(ie(he,t),ie(se,e),ie(ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?s0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=s0(t),e=c0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(ae),ie(ae,e)}function Te(){V(ae),V(se),V(he)}function Et(e){e.memoizedState!==null&&ie(ye,e);var t=ae.current,n=c0(t,e.type);t!==n&&(ie(se,e),ie(ae,n))}function Zt(e){se.current===e&&(V(ae),V(se)),ye.current===e&&(V(ye),jl._currentValue=P)}var ft,Ha;function Ut(e){if(ft===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ft=t&&t[1]||"",Ha=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ft+e+Ha}var ke=!1;function Ba(e,t){if(!e||ke)return"";ke=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var te=function(){throw Error()};if(Object.defineProperty(te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(te,[])}catch(Q){var $=Q}Reflect.construct(e,[],te)}else{try{te.call()}catch(Q){$=Q}e.call(te.prototype)}}else{try{throw Error()}catch(Q){$=Q}(te=e())&&typeof te.catch=="function"&&te.catch(function(){})}}catch(Q){if(Q&&$&&typeof Q.stack=="string")return[Q.stack,$.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),d=s[0],v=s[1];if(d&&v){var E=d.split(`
`),U=v.split(`
`);for(r=i=0;i<E.length&&!E[i].includes("DetermineComponentFrameRoot");)i++;for(;r<U.length&&!U[r].includes("DetermineComponentFrameRoot");)r++;if(i===E.length||r===U.length)for(i=E.length-1,r=U.length-1;1<=i&&0<=r&&E[i]!==U[r];)r--;for(;1<=i&&0<=r;i--,r--)if(E[i]!==U[r]){if(i!==1||r!==1)do if(i--,r--,0>r||E[i]!==U[r]){var W=`
`+E[i].replace(" at new "," at ");return e.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",e.displayName)),W}while(1<=i&&0<=r);break}}}finally{ke=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ut(n):""}function Yi(e,t){switch(e.tag){case 26:case 27:case 5:return Ut(e.type);case 16:return Ut("Lazy");case 13:return e.child!==t&&t!==null?Ut("Suspense Fallback"):Ut("Suspense");case 19:return Ut("SuspenseList");case 0:case 15:return Ba(e.type,!1);case 11:return Ba(e.type.render,!1);case 1:return Ba(e.type,!0);case 31:return Ut("Activity");default:return""}}function $f(e){try{var t="",n=null;do t+=Yi(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var io=Object.prototype.hasOwnProperty,lo=a.unstable_scheduleCallback,ro=a.unstable_cancelCallback,lg=a.unstable_shouldYield,rg=a.unstable_requestPaint,Tt=a.unstable_now,ug=a.unstable_getCurrentPriorityLevel,qf=a.unstable_ImmediatePriority,Yf=a.unstable_UserBlockingPriority,rr=a.unstable_NormalPriority,og=a.unstable_LowPriority,Gf=a.unstable_IdlePriority,sg=a.log,cg=a.unstable_setDisableYieldValue,Gi=null,Ct=null;function Bn(e){if(typeof sg=="function"&&cg(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(Gi,e)}catch{}}var Rt=Math.clz32?Math.clz32:hg,fg=Math.log,dg=Math.LN2;function hg(e){return e>>>=0,e===0?32:31-(fg(e)/dg|0)|0}var ur=256,or=262144,sr=4194304;function ha(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function cr(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var r=0,s=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var v=i&134217727;return v!==0?(i=v&~s,i!==0?r=ha(i):(d&=v,d!==0?r=ha(d):n||(n=v&~e,n!==0&&(r=ha(n))))):(v=i&~s,v!==0?r=ha(v):d!==0?r=ha(d):n||(n=i&~e,n!==0&&(r=ha(n)))),r===0?0:t!==0&&t!==r&&(t&s)===0&&(s=r&-r,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:r}function Xi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function pg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xf(){var e=sr;return sr<<=1,(sr&62914560)===0&&(sr=4194304),e}function uo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mg(e,t,n,i,r,s){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var v=e.entanglements,E=e.expirationTimes,U=e.hiddenUpdates;for(n=d&~n;0<n;){var W=31-Rt(n),te=1<<W;v[W]=0,E[W]=-1;var $=U[W];if($!==null)for(U[W]=null,W=0;W<$.length;W++){var Q=$[W];Q!==null&&(Q.lane&=-536870913)}n&=~te}i!==0&&Vf(e,i,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(d&~t))}function Vf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Rt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Qf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Rt(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}function Kf(e,t){var n=t&-t;return n=(n&42)!==0?1:oo(n),(n&(e.suspendedLanes|t))!==0?0:n}function oo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function so(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zf(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:N0(e.type))}function Jf(e,t){var n=H.p;try{return H.p=e,t()}finally{H.p=n}}var $n=Math.random().toString(36).slice(2),it="__reactFiber$"+$n,ht="__reactProps$"+$n,$a="__reactContainer$"+$n,co="__reactEvents$"+$n,vg="__reactListeners$"+$n,gg="__reactHandles$"+$n,Pf="__reactResources$"+$n,Qi="__reactMarker$"+$n;function fo(e){delete e[it],delete e[ht],delete e[co],delete e[vg],delete e[gg]}function qa(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$a]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=g0(e);e!==null;){if(n=e[it])return n;e=g0(e)}return t}e=n,n=e.parentNode}return null}function Ya(e){if(e=e[it]||e[$a]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ki(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Ga(e){var t=e[Pf];return t||(t=e[Pf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[Qi]=!0}var Wf=new Set,Ff={};function pa(e,t){Xa(e,t),Xa(e+"Capture",t)}function Xa(e,t){for(Ff[e]=t,e=0;e<t.length;e++)Wf.add(t[e])}var yg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),If={},ed={};function bg(e){return io.call(ed,e)?!0:io.call(If,e)?!1:yg.test(e)?ed[e]=!0:(If[e]=!0,!1)}function fr(e,t,n){if(bg(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function dr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function dn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function kt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function td(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xg(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(d){n=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ho(e){if(!e._valueTracker){var t=td(e)?"checked":"value";e._valueTracker=xg(e,t,""+e[t])}}function nd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=td(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function hr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Sg=/[\n"\\]/g;function Ht(e){return e.replace(Sg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function po(e,t,n,i,r,s,d,v){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+kt(t)):e.value!==""+kt(t)&&(e.value=""+kt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?mo(e,d,kt(t)):n!=null?mo(e,d,kt(n)):i!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+kt(v):e.removeAttribute("name")}function ad(e,t,n,i,r,s,d,v){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){ho(e);return}n=n!=null?""+kt(n):"",t=t!=null?""+kt(t):n,v||t===e.value||(e.value=t),e.defaultValue=t}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=v?e.checked:!!i,e.defaultChecked=!!i,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),ho(e)}function mo(e,t,n){t==="number"&&hr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Va(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+kt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function id(e,t,n){if(t!=null&&(t=""+kt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+kt(n):""}function ld(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(u(92));if(C(i)){if(1<i.length)throw Error(u(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=kt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),ho(e)}function Qa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rd(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||wg.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ud(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in t)i=t[r],t.hasOwnProperty(r)&&n[r]!==i&&rd(e,r,i)}else for(var s in t)t.hasOwnProperty(s)&&rd(e,s,t[s])}function vo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pr(e){return Tg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function hn(){}var go=null;function yo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ka=null,Za=null;function od(e){var t=Ya(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;e:switch(e=t.stateNode,t.type){case"input":if(po(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ht(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=i[ht]||null;if(!r)throw Error(u(90));po(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&nd(i)}break e;case"textarea":id(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Va(e,!!n.multiple,t,!1)}}}var bo=!1;function sd(e,t,n){if(bo)return e(t,n);bo=!0;try{var i=e(t);return i}finally{if(bo=!1,(Ka!==null||Za!==null)&&(tu(),Ka&&(t=Ka,e=Za,Za=Ka=null,od(t),e)))for(t=0;t<e.length;t++)od(e[t])}}function Zi(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ht]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xo=!1;if(pn)try{var Ji={};Object.defineProperty(Ji,"passive",{get:function(){xo=!0}}),window.addEventListener("test",Ji,Ji),window.removeEventListener("test",Ji,Ji)}catch{xo=!1}var qn=null,So=null,mr=null;function cd(){if(mr)return mr;var e,t=So,n=t.length,i,r="value"in qn?qn.value:qn.textContent,s=r.length;for(e=0;e<n&&t[e]===r[e];e++);var d=n-e;for(i=1;i<=d&&t[n-i]===r[s-i];i++);return mr=r.slice(e,1<i?1-i:void 0)}function vr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gr(){return!0}function fd(){return!1}function pt(e){function t(n,i,r,s,d){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(n=e[v],this[v]=n?n(s):s[v]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?gr:fd,this.isPropagationStopped=fd,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gr)},persist:function(){},isPersistent:gr}),t}var ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yr=pt(ma),Pi=x({},ma,{view:0,detail:0}),Cg=pt(Pi),wo,Eo,Wi,br=x({},Pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Co,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wi&&(Wi&&e.type==="mousemove"?(wo=e.screenX-Wi.screenX,Eo=e.screenY-Wi.screenY):Eo=wo=0,Wi=e),wo)},movementY:function(e){return"movementY"in e?e.movementY:Eo}}),dd=pt(br),Rg=x({},br,{dataTransfer:0}),_g=pt(Rg),Og=x({},Pi,{relatedTarget:0}),To=pt(Og),zg=x({},ma,{animationName:0,elapsedTime:0,pseudoElement:0}),Ag=pt(zg),jg=x({},ma,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mg=pt(jg),Ng=x({},ma,{data:0}),hd=pt(Ng),Dg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ug[e])?!!t[e]:!1}function Co(){return kg}var Hg=x({},Pi,{key:function(e){if(e.key){var t=Dg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Co,charCode:function(e){return e.type==="keypress"?vr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bg=pt(Hg),$g=x({},br,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pd=pt($g),qg=x({},Pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Co}),Yg=pt(qg),Gg=x({},ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xg=pt(Gg),Vg=x({},br,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qg=pt(Vg),Kg=x({},ma,{newState:0,oldState:0}),Zg=pt(Kg),Jg=[9,13,27,32],Ro=pn&&"CompositionEvent"in window,Fi=null;pn&&"documentMode"in document&&(Fi=document.documentMode);var Pg=pn&&"TextEvent"in window&&!Fi,md=pn&&(!Ro||Fi&&8<Fi&&11>=Fi),vd=" ",gd=!1;function yd(e,t){switch(e){case"keyup":return Jg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ja=!1;function Wg(e,t){switch(e){case"compositionend":return bd(t);case"keypress":return t.which!==32?null:(gd=!0,vd);case"textInput":return e=t.data,e===vd&&gd?null:e;default:return null}}function Fg(e,t){if(Ja)return e==="compositionend"||!Ro&&yd(e,t)?(e=cd(),mr=So=qn=null,Ja=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return md&&t.locale!=="ko"?null:t.data;default:return null}}var Ig={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ig[e.type]:t==="textarea"}function Sd(e,t,n,i){Ka?Za?Za.push(i):Za=[i]:Ka=i,t=ou(t,"onChange"),0<t.length&&(n=new yr("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Ii=null,el=null;function ey(e){a0(e,0)}function xr(e){var t=Ki(e);if(nd(t))return e}function wd(e,t){if(e==="change")return t}var Ed=!1;if(pn){var _o;if(pn){var Oo="oninput"in document;if(!Oo){var Td=document.createElement("div");Td.setAttribute("oninput","return;"),Oo=typeof Td.oninput=="function"}_o=Oo}else _o=!1;Ed=_o&&(!document.documentMode||9<document.documentMode)}function Cd(){Ii&&(Ii.detachEvent("onpropertychange",Rd),el=Ii=null)}function Rd(e){if(e.propertyName==="value"&&xr(el)){var t=[];Sd(t,el,e,yo(e)),sd(ey,t)}}function ty(e,t,n){e==="focusin"?(Cd(),Ii=t,el=n,Ii.attachEvent("onpropertychange",Rd)):e==="focusout"&&Cd()}function ny(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xr(el)}function ay(e,t){if(e==="click")return xr(t)}function iy(e,t){if(e==="input"||e==="change")return xr(t)}function ly(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:ly;function tl(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!io.call(t,r)||!_t(e[r],t[r]))return!1}return!0}function _d(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Od(e,t){var n=_d(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_d(n)}}function zd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ad(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=hr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=hr(e.document)}return t}function zo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ry=pn&&"documentMode"in document&&11>=document.documentMode,Pa=null,Ao=null,nl=null,jo=!1;function jd(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jo||Pa==null||Pa!==hr(i)||(i=Pa,"selectionStart"in i&&zo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),nl&&tl(nl,i)||(nl=i,i=ou(Ao,"onSelect"),0<i.length&&(t=new yr("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Pa)))}function va(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wa={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionrun:va("Transition","TransitionRun"),transitionstart:va("Transition","TransitionStart"),transitioncancel:va("Transition","TransitionCancel"),transitionend:va("Transition","TransitionEnd")},Mo={},Md={};pn&&(Md=document.createElement("div").style,"AnimationEvent"in window||(delete Wa.animationend.animation,delete Wa.animationiteration.animation,delete Wa.animationstart.animation),"TransitionEvent"in window||delete Wa.transitionend.transition);function ga(e){if(Mo[e])return Mo[e];if(!Wa[e])return e;var t=Wa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Md)return Mo[e]=t[n];return e}var Nd=ga("animationend"),Dd=ga("animationiteration"),Ld=ga("animationstart"),uy=ga("transitionrun"),oy=ga("transitionstart"),sy=ga("transitioncancel"),Ud=ga("transitionend"),kd=new Map,No="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");No.push("scrollEnd");function Jt(e,t){kd.set(e,t),pa(t,[e])}var Sr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Bt=[],Fa=0,Do=0;function wr(){for(var e=Fa,t=Do=Fa=0;t<e;){var n=Bt[t];Bt[t++]=null;var i=Bt[t];Bt[t++]=null;var r=Bt[t];Bt[t++]=null;var s=Bt[t];if(Bt[t++]=null,i!==null&&r!==null){var d=i.pending;d===null?r.next=r:(r.next=d.next,d.next=r),i.pending=r}s!==0&&Hd(n,r,s)}}function Er(e,t,n,i){Bt[Fa++]=e,Bt[Fa++]=t,Bt[Fa++]=n,Bt[Fa++]=i,Do|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Lo(e,t,n,i){return Er(e,t,n,i),Tr(e)}function ya(e,t){return Er(e,null,null,t),Tr(e)}function Hd(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var r=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&t!==null&&(r=31-Rt(n),e=s.hiddenUpdates,i=e[r],i===null?e[r]=[t]:i.push(t),t.lane=n|536870912),s):null}function Tr(e){if(50<Tl)throw Tl=0,Xs=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ia={};function cy(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,i){return new cy(e,t,n,i)}function Uo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mn(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Bd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Cr(e,t,n,i,r,s){var d=0;if(i=e,typeof e=="function")Uo(e)&&(d=1);else if(typeof e=="string")d=m2(e,n,ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case K:return e=Ot(31,n,t,r),e.elementType=K,e.lanes=s,e;case q:return ba(n.children,r,s,t);case Y:d=8,r|=24;break;case X:return e=Ot(12,n,t,r|2),e.elementType=X,e.lanes=s,e;case k:return e=Ot(13,n,t,r),e.elementType=k,e.lanes=s,e;case N:return e=Ot(19,n,t,r),e.elementType=N,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:d=10;break e;case z:d=9;break e;case F:d=11;break e;case J:d=14;break e;case G:d=16,i=null;break e}d=29,n=Error(u(130,e===null?"null":typeof e,"")),i=null}return t=Ot(d,n,t,r),t.elementType=e,t.type=i,t.lanes=s,t}function ba(e,t,n,i){return e=Ot(7,e,i,t),e.lanes=n,e}function ko(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function $d(e){var t=Ot(18,null,null,0);return t.stateNode=e,t}function Ho(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var qd=new WeakMap;function $t(e,t){if(typeof e=="object"&&e!==null){var n=qd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:$f(t)},qd.set(e,t),t)}return{value:e,source:t,stack:$f(t)}}var ei=[],ti=0,Rr=null,al=0,qt=[],Yt=0,Yn=null,tn=1,nn="";function vn(e,t){ei[ti++]=al,ei[ti++]=Rr,Rr=e,al=t}function Yd(e,t,n){qt[Yt++]=tn,qt[Yt++]=nn,qt[Yt++]=Yn,Yn=e;var i=tn;e=nn;var r=32-Rt(i)-1;i&=~(1<<r),n+=1;var s=32-Rt(t)+r;if(30<s){var d=r-r%5;s=(i&(1<<d)-1).toString(32),i>>=d,r-=d,tn=1<<32-Rt(t)+r|n<<r|i,nn=s+e}else tn=1<<s|n<<r|i,nn=e}function Bo(e){e.return!==null&&(vn(e,1),Yd(e,1,0))}function $o(e){for(;e===Rr;)Rr=ei[--ti],ei[ti]=null,al=ei[--ti],ei[ti]=null;for(;e===Yn;)Yn=qt[--Yt],qt[Yt]=null,nn=qt[--Yt],qt[Yt]=null,tn=qt[--Yt],qt[Yt]=null}function Gd(e,t){qt[Yt++]=tn,qt[Yt++]=nn,qt[Yt++]=Yn,tn=t.id,nn=t.overflow,Yn=e}var lt=null,He=null,Ee=!1,Gn=null,Gt=!1,qo=Error(u(519));function Xn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw il($t(t,e)),qo}function Xd(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[it]=e,t[ht]=i,n){case"dialog":xe("cancel",t),xe("close",t);break;case"iframe":case"object":case"embed":xe("load",t);break;case"video":case"audio":for(n=0;n<Rl.length;n++)xe(Rl[n],t);break;case"source":xe("error",t);break;case"img":case"image":case"link":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"input":xe("invalid",t),ad(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":xe("invalid",t);break;case"textarea":xe("invalid",t),ld(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||u0(t.textContent,n)?(i.popover!=null&&(xe("beforetoggle",t),xe("toggle",t)),i.onScroll!=null&&xe("scroll",t),i.onScrollEnd!=null&&xe("scrollend",t),i.onClick!=null&&(t.onclick=hn),t=!0):t=!1,t||Xn(e,!0)}function Vd(e){for(lt=e.return;lt;)switch(lt.tag){case 5:case 31:case 13:Gt=!1;return;case 27:case 3:Gt=!0;return;default:lt=lt.return}}function ni(e){if(e!==lt)return!1;if(!Ee)return Vd(e),Ee=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||lc(e.type,e.memoizedProps)),n=!n),n&&He&&Xn(e),Vd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));He=v0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));He=v0(e)}else t===27?(t=He,ia(e.type)?(e=cc,cc=null,He=e):He=t):He=lt?Vt(e.stateNode.nextSibling):null;return!0}function xa(){He=lt=null,Ee=!1}function Yo(){var e=Gn;return e!==null&&(yt===null?yt=e:yt.push.apply(yt,e),Gn=null),e}function il(e){Gn===null?Gn=[e]:Gn.push(e)}var Go=T(null),Sa=null,gn=null;function Vn(e,t,n){ie(Go,t._currentValue),t._currentValue=n}function yn(e){e._currentValue=Go.current,V(Go)}function Xo(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Vo(e,t,n,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var d=r.child;s=s.firstContext;e:for(;s!==null;){var v=s;s=r;for(var E=0;E<t.length;E++)if(v.context===t[E]){s.lanes|=n,v=s.alternate,v!==null&&(v.lanes|=n),Xo(s.return,n,e),i||(d=null);break e}s=v.next}}else if(r.tag===18){if(d=r.return,d===null)throw Error(u(341));d.lanes|=n,s=d.alternate,s!==null&&(s.lanes|=n),Xo(d,n,e),d=null}else d=r.child;if(d!==null)d.return=r;else for(d=r;d!==null;){if(d===e){d=null;break}if(r=d.sibling,r!==null){r.return=d.return,d=r;break}d=d.return}r=d}}function ai(e,t,n,i){e=null;for(var r=t,s=!1;r!==null;){if(!s){if((r.flags&524288)!==0)s=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var d=r.alternate;if(d===null)throw Error(u(387));if(d=d.memoizedProps,d!==null){var v=r.type;_t(r.pendingProps.value,d.value)||(e!==null?e.push(v):e=[v])}}else if(r===ye.current){if(d=r.alternate,d===null)throw Error(u(387));d.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(jl):e=[jl])}r=r.return}e!==null&&Vo(t,e,n,i),t.flags|=262144}function _r(e){for(e=e.firstContext;e!==null;){if(!_t(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wa(e){Sa=e,gn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rt(e){return Qd(Sa,e)}function Or(e,t){return Sa===null&&wa(e),Qd(e,t)}function Qd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},gn===null){if(e===null)throw Error(u(308));gn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else gn=gn.next=t;return n}var fy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},dy=a.unstable_scheduleCallback,hy=a.unstable_NormalPriority,Ze={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qo(){return{controller:new fy,data:new Map,refCount:0}}function ll(e){e.refCount--,e.refCount===0&&dy(hy,function(){e.controller.abort()})}var rl=null,Ko=0,ii=0,li=null;function py(e,t){if(rl===null){var n=rl=[];Ko=0,ii=Ps(),li={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Ko++,t.then(Kd,Kd),t}function Kd(){if(--Ko===0&&rl!==null){li!==null&&(li.status="fulfilled");var e=rl;rl=null,ii=0,li=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function my(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(i.status="rejected",i.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),i}var Zd=A.S;A.S=function(e,t){jp=Tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&py(e,t),Zd!==null&&Zd(e,t)};var Ea=T(null);function Zo(){var e=Ea.current;return e!==null?e:Le.pooledCache}function zr(e,t){t===null?ie(Ea,Ea.current):ie(Ea,t.pool)}function Jd(){var e=Zo();return e===null?null:{parent:Ze._currentValue,pool:e}}var ri=Error(u(460)),Jo=Error(u(474)),Ar=Error(u(542)),jr={then:function(){}};function Pd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Wd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(hn,hn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Id(e),e;default:if(typeof t.status=="string")t.then(hn,hn);else{if(e=Le,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=i}},function(i){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Id(e),e}throw Ca=t,ri}}function Ta(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ca=n,ri):n}}var Ca=null;function Fd(){if(Ca===null)throw Error(u(459));var e=Ca;return Ca=null,e}function Id(e){if(e===ri||e===Ar)throw Error(u(483))}var ui=null,ul=0;function Mr(e){var t=ul;return ul+=1,ui===null&&(ui=[]),Wd(ui,e,t)}function ol(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Nr(e,t){throw t.$$typeof===w?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function eh(e){function t(M,_){if(e){var L=M.deletions;L===null?(M.deletions=[_],M.flags|=16):L.push(_)}}function n(M,_){if(!e)return null;for(;_!==null;)t(M,_),_=_.sibling;return null}function i(M){for(var _=new Map;M!==null;)M.key!==null?_.set(M.key,M):_.set(M.index,M),M=M.sibling;return _}function r(M,_){return M=mn(M,_),M.index=0,M.sibling=null,M}function s(M,_,L){return M.index=L,e?(L=M.alternate,L!==null?(L=L.index,L<_?(M.flags|=67108866,_):L):(M.flags|=67108866,_)):(M.flags|=1048576,_)}function d(M){return e&&M.alternate===null&&(M.flags|=67108866),M}function v(M,_,L,I){return _===null||_.tag!==6?(_=ko(L,M.mode,I),_.return=M,_):(_=r(_,L),_.return=M,_)}function E(M,_,L,I){var fe=L.type;return fe===q?W(M,_,L.props.children,I,L.key):_!==null&&(_.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===G&&Ta(fe)===_.type)?(_=r(_,L.props),ol(_,L),_.return=M,_):(_=Cr(L.type,L.key,L.props,null,M.mode,I),ol(_,L),_.return=M,_)}function U(M,_,L,I){return _===null||_.tag!==4||_.stateNode.containerInfo!==L.containerInfo||_.stateNode.implementation!==L.implementation?(_=Ho(L,M.mode,I),_.return=M,_):(_=r(_,L.children||[]),_.return=M,_)}function W(M,_,L,I,fe){return _===null||_.tag!==7?(_=ba(L,M.mode,I,fe),_.return=M,_):(_=r(_,L),_.return=M,_)}function te(M,_,L){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=ko(""+_,M.mode,L),_.return=M,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case j:return L=Cr(_.type,_.key,_.props,null,M.mode,L),ol(L,_),L.return=M,L;case R:return _=Ho(_,M.mode,L),_.return=M,_;case G:return _=Ta(_),te(M,_,L)}if(C(_)||D(_))return _=ba(_,M.mode,L,null),_.return=M,_;if(typeof _.then=="function")return te(M,Mr(_),L);if(_.$$typeof===B)return te(M,Or(M,_),L);Nr(M,_)}return null}function $(M,_,L,I){var fe=_!==null?_.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return fe!==null?null:v(M,_,""+L,I);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case j:return L.key===fe?E(M,_,L,I):null;case R:return L.key===fe?U(M,_,L,I):null;case G:return L=Ta(L),$(M,_,L,I)}if(C(L)||D(L))return fe!==null?null:W(M,_,L,I,null);if(typeof L.then=="function")return $(M,_,Mr(L),I);if(L.$$typeof===B)return $(M,_,Or(M,L),I);Nr(M,L)}return null}function Q(M,_,L,I,fe){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return M=M.get(L)||null,v(_,M,""+I,fe);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case j:return M=M.get(I.key===null?L:I.key)||null,E(_,M,I,fe);case R:return M=M.get(I.key===null?L:I.key)||null,U(_,M,I,fe);case G:return I=Ta(I),Q(M,_,L,I,fe)}if(C(I)||D(I))return M=M.get(L)||null,W(_,M,I,fe,null);if(typeof I.then=="function")return Q(M,_,L,Mr(I),fe);if(I.$$typeof===B)return Q(M,_,L,Or(_,I),fe);Nr(_,I)}return null}function ue(M,_,L,I){for(var fe=null,Ce=null,oe=_,ve=_=0,we=null;oe!==null&&ve<L.length;ve++){oe.index>ve?(we=oe,oe=null):we=oe.sibling;var Re=$(M,oe,L[ve],I);if(Re===null){oe===null&&(oe=we);break}e&&oe&&Re.alternate===null&&t(M,oe),_=s(Re,_,ve),Ce===null?fe=Re:Ce.sibling=Re,Ce=Re,oe=we}if(ve===L.length)return n(M,oe),Ee&&vn(M,ve),fe;if(oe===null){for(;ve<L.length;ve++)oe=te(M,L[ve],I),oe!==null&&(_=s(oe,_,ve),Ce===null?fe=oe:Ce.sibling=oe,Ce=oe);return Ee&&vn(M,ve),fe}for(oe=i(oe);ve<L.length;ve++)we=Q(oe,M,ve,L[ve],I),we!==null&&(e&&we.alternate!==null&&oe.delete(we.key===null?ve:we.key),_=s(we,_,ve),Ce===null?fe=we:Ce.sibling=we,Ce=we);return e&&oe.forEach(function(sa){return t(M,sa)}),Ee&&vn(M,ve),fe}function de(M,_,L,I){if(L==null)throw Error(u(151));for(var fe=null,Ce=null,oe=_,ve=_=0,we=null,Re=L.next();oe!==null&&!Re.done;ve++,Re=L.next()){oe.index>ve?(we=oe,oe=null):we=oe.sibling;var sa=$(M,oe,Re.value,I);if(sa===null){oe===null&&(oe=we);break}e&&oe&&sa.alternate===null&&t(M,oe),_=s(sa,_,ve),Ce===null?fe=sa:Ce.sibling=sa,Ce=sa,oe=we}if(Re.done)return n(M,oe),Ee&&vn(M,ve),fe;if(oe===null){for(;!Re.done;ve++,Re=L.next())Re=te(M,Re.value,I),Re!==null&&(_=s(Re,_,ve),Ce===null?fe=Re:Ce.sibling=Re,Ce=Re);return Ee&&vn(M,ve),fe}for(oe=i(oe);!Re.done;ve++,Re=L.next())Re=Q(oe,M,ve,Re.value,I),Re!==null&&(e&&Re.alternate!==null&&oe.delete(Re.key===null?ve:Re.key),_=s(Re,_,ve),Ce===null?fe=Re:Ce.sibling=Re,Ce=Re);return e&&oe.forEach(function(R2){return t(M,R2)}),Ee&&vn(M,ve),fe}function De(M,_,L,I){if(typeof L=="object"&&L!==null&&L.type===q&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case j:e:{for(var fe=L.key;_!==null;){if(_.key===fe){if(fe=L.type,fe===q){if(_.tag===7){n(M,_.sibling),I=r(_,L.props.children),I.return=M,M=I;break e}}else if(_.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===G&&Ta(fe)===_.type){n(M,_.sibling),I=r(_,L.props),ol(I,L),I.return=M,M=I;break e}n(M,_);break}else t(M,_);_=_.sibling}L.type===q?(I=ba(L.props.children,M.mode,I,L.key),I.return=M,M=I):(I=Cr(L.type,L.key,L.props,null,M.mode,I),ol(I,L),I.return=M,M=I)}return d(M);case R:e:{for(fe=L.key;_!==null;){if(_.key===fe)if(_.tag===4&&_.stateNode.containerInfo===L.containerInfo&&_.stateNode.implementation===L.implementation){n(M,_.sibling),I=r(_,L.children||[]),I.return=M,M=I;break e}else{n(M,_);break}else t(M,_);_=_.sibling}I=Ho(L,M.mode,I),I.return=M,M=I}return d(M);case G:return L=Ta(L),De(M,_,L,I)}if(C(L))return ue(M,_,L,I);if(D(L)){if(fe=D(L),typeof fe!="function")throw Error(u(150));return L=fe.call(L),de(M,_,L,I)}if(typeof L.then=="function")return De(M,_,Mr(L),I);if(L.$$typeof===B)return De(M,_,Or(M,L),I);Nr(M,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,_!==null&&_.tag===6?(n(M,_.sibling),I=r(_,L),I.return=M,M=I):(n(M,_),I=ko(L,M.mode,I),I.return=M,M=I),d(M)):n(M,_)}return function(M,_,L,I){try{ul=0;var fe=De(M,_,L,I);return ui=null,fe}catch(oe){if(oe===ri||oe===Ar)throw oe;var Ce=Ot(29,oe,null,M.mode);return Ce.lanes=I,Ce.return=M,Ce}finally{}}}var Ra=eh(!0),th=eh(!1),Qn=!1;function Po(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Kn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Zn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(_e&2)!==0){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,t=Tr(e),Hd(e,null,n),t}return Er(e,i,t,n),Tr(e)}function sl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Qf(e,n)}}function Fo(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?r=s=d:s=s.next=d,n=n.next}while(n!==null);s===null?r=s=t:s=s.next=t}else r=s=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Io=!1;function cl(){if(Io){var e=li;if(e!==null)throw e}}function fl(e,t,n,i){Io=!1;var r=e.updateQueue;Qn=!1;var s=r.firstBaseUpdate,d=r.lastBaseUpdate,v=r.shared.pending;if(v!==null){r.shared.pending=null;var E=v,U=E.next;E.next=null,d===null?s=U:d.next=U,d=E;var W=e.alternate;W!==null&&(W=W.updateQueue,v=W.lastBaseUpdate,v!==d&&(v===null?W.firstBaseUpdate=U:v.next=U,W.lastBaseUpdate=E))}if(s!==null){var te=r.baseState;d=0,W=U=E=null,v=s;do{var $=v.lane&-536870913,Q=$!==v.lane;if(Q?(Se&$)===$:(i&$)===$){$!==0&&$===ii&&(Io=!0),W!==null&&(W=W.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var ue=e,de=v;$=t;var De=n;switch(de.tag){case 1:if(ue=de.payload,typeof ue=="function"){te=ue.call(De,te,$);break e}te=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=de.payload,$=typeof ue=="function"?ue.call(De,te,$):ue,$==null)break e;te=x({},te,$);break e;case 2:Qn=!0}}$=v.callback,$!==null&&(e.flags|=64,Q&&(e.flags|=8192),Q=r.callbacks,Q===null?r.callbacks=[$]:Q.push($))}else Q={lane:$,tag:v.tag,payload:v.payload,callback:v.callback,next:null},W===null?(U=W=Q,E=te):W=W.next=Q,d|=$;if(v=v.next,v===null){if(v=r.shared.pending,v===null)break;Q=v,v=Q.next,Q.next=null,r.lastBaseUpdate=Q,r.shared.pending=null}}while(!0);W===null&&(E=te),r.baseState=E,r.firstBaseUpdate=U,r.lastBaseUpdate=W,s===null&&(r.shared.lanes=0),In|=d,e.lanes=d,e.memoizedState=te}}function nh(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function ah(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)nh(n[e],t)}var oi=T(null),Dr=T(0);function ih(e,t){e=_n,ie(Dr,e),ie(oi,t),_n=e|t.baseLanes}function es(){ie(Dr,_n),ie(oi,oi.current)}function ts(){_n=Dr.current,V(oi),V(Dr)}var zt=T(null),Xt=null;function Jn(e){var t=e.alternate;ie(Qe,Qe.current&1),ie(zt,e),Xt===null&&(t===null||oi.current!==null||t.memoizedState!==null)&&(Xt=e)}function ns(e){ie(Qe,Qe.current),ie(zt,e),Xt===null&&(Xt=e)}function lh(e){e.tag===22?(ie(Qe,Qe.current),ie(zt,e),Xt===null&&(Xt=e)):Pn()}function Pn(){ie(Qe,Qe.current),ie(zt,zt.current)}function At(e){V(zt),Xt===e&&(Xt=null),V(Qe)}var Qe=T(0);function Lr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||oc(n)||sc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bn=0,me=null,Me=null,Je=null,Ur=!1,si=!1,_a=!1,kr=0,dl=0,ci=null,vy=0;function Ge(){throw Error(u(321))}function as(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_t(e[n],t[n]))return!1;return!0}function is(e,t,n,i,r,s){return bn=s,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=e===null||e.memoizedState===null?Yh:bs,_a=!1,s=n(i,r),_a=!1,si&&(s=uh(t,n,i,r)),rh(e),s}function rh(e){A.H=ml;var t=Me!==null&&Me.next!==null;if(bn=0,Je=Me=me=null,Ur=!1,dl=0,ci=null,t)throw Error(u(300));e===null||Pe||(e=e.dependencies,e!==null&&_r(e)&&(Pe=!0))}function uh(e,t,n,i){me=e;var r=0;do{if(si&&(ci=null),dl=0,si=!1,25<=r)throw Error(u(301));if(r+=1,Je=Me=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}A.H=Gh,s=t(n,i)}while(si);return s}function gy(){var e=A.H,t=e.useState()[0];return t=typeof t.then=="function"?hl(t):t,e=e.useState()[0],(Me!==null?Me.memoizedState:null)!==e&&(me.flags|=1024),t}function ls(){var e=kr!==0;return kr=0,e}function rs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function us(e){if(Ur){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ur=!1}bn=0,Je=Me=me=null,si=!1,dl=kr=0,ci=null}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?me.memoizedState=Je=e:Je=Je.next=e,Je}function Ke(){if(Me===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Je===null?me.memoizedState:Je.next;if(t!==null)Je=t,Me=e;else{if(e===null)throw me.alternate===null?Error(u(467)):Error(u(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Je===null?me.memoizedState=Je=e:Je=Je.next=e}return Je}function Hr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hl(e){var t=dl;return dl+=1,ci===null&&(ci=[]),e=Wd(ci,e,t),t=me,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,A.H=t===null||t.memoizedState===null?Yh:bs),e}function Br(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return hl(e);if(e.$$typeof===B)return rt(e)}throw Error(u(438,String(e)))}function os(e){var t=null,n=me.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=me.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Hr(),me.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=re;return t.index++,n}function xn(e,t){return typeof t=="function"?t(e):t}function $r(e){var t=Ke();return ss(t,Me,e)}function ss(e,t,n){var i=e.queue;if(i===null)throw Error(u(311));i.lastRenderedReducer=n;var r=e.baseQueue,s=i.pending;if(s!==null){if(r!==null){var d=r.next;r.next=s.next,s.next=d}t.baseQueue=r=s,i.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{t=r.next;var v=d=null,E=null,U=t,W=!1;do{var te=U.lane&-536870913;if(te!==U.lane?(Se&te)===te:(bn&te)===te){var $=U.revertLane;if($===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),te===ii&&(W=!0);else if((bn&$)===$){U=U.next,$===ii&&(W=!0);continue}else te={lane:0,revertLane:U.revertLane,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},E===null?(v=E=te,d=s):E=E.next=te,me.lanes|=$,In|=$;te=U.action,_a&&n(s,te),s=U.hasEagerState?U.eagerState:n(s,te)}else $={lane:te,revertLane:U.revertLane,gesture:U.gesture,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},E===null?(v=E=$,d=s):E=E.next=$,me.lanes|=te,In|=te;U=U.next}while(U!==null&&U!==t);if(E===null?d=s:E.next=v,!_t(s,e.memoizedState)&&(Pe=!0,W&&(n=li,n!==null)))throw n;e.memoizedState=s,e.baseState=d,e.baseQueue=E,i.lastRenderedState=s}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function cs(e){var t=Ke(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,s=t.memoizedState;if(r!==null){n.pending=null;var d=r=r.next;do s=e(s,d.action),d=d.next;while(d!==r);_t(s,t.memoizedState)||(Pe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function oh(e,t,n){var i=me,r=Ke(),s=Ee;if(s){if(n===void 0)throw Error(u(407));n=n()}else n=t();var d=!_t((Me||r).memoizedState,n);if(d&&(r.memoizedState=n,Pe=!0),r=r.queue,hs(fh.bind(null,i,r,e),[e]),r.getSnapshot!==t||d||Je!==null&&Je.memoizedState.tag&1){if(i.flags|=2048,fi(9,{destroy:void 0},ch.bind(null,i,r,n,t),null),Le===null)throw Error(u(349));s||(bn&127)!==0||sh(i,t,n)}return n}function sh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t=Hr(),me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ch(e,t,n,i){t.value=n,t.getSnapshot=i,dh(t)&&hh(e)}function fh(e,t,n){return n(function(){dh(t)&&hh(e)})}function dh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_t(e,n)}catch{return!0}}function hh(e){var t=ya(e,2);t!==null&&bt(t,e,2)}function fs(e){var t=dt();if(typeof e=="function"){var n=e;if(e=n(),_a){Bn(!0);try{n()}finally{Bn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:e},t}function ph(e,t,n,i){return e.baseState=n,ss(e,Me,typeof i=="function"?i:xn)}function yy(e,t,n,i,r){if(Gr(e))throw Error(u(485));if(e=t.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){s.listeners.push(d)}};A.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,mh(t,s)):(s.next=n.next,t.pending=n.next=s)}}function mh(e,t){var n=t.action,i=t.payload,r=e.state;if(t.isTransition){var s=A.T,d={};A.T=d;try{var v=n(r,i),E=A.S;E!==null&&E(d,v),vh(e,t,v)}catch(U){ds(e,t,U)}finally{s!==null&&d.types!==null&&(s.types=d.types),A.T=s}}else try{s=n(r,i),vh(e,t,s)}catch(U){ds(e,t,U)}}function vh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){gh(e,t,i)},function(i){return ds(e,t,i)}):gh(e,t,n)}function gh(e,t,n){t.status="fulfilled",t.value=n,yh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,mh(e,n)))}function ds(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,yh(t),t=t.next;while(t!==i)}e.action=null}function yh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function bh(e,t){return t}function xh(e,t){if(Ee){var n=Le.formState;if(n!==null){e:{var i=me;if(Ee){if(He){t:{for(var r=He,s=Gt;r.nodeType!==8;){if(!s){r=null;break t}if(r=Vt(r.nextSibling),r===null){r=null;break t}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){He=Vt(r.nextSibling),i=r.data==="F!";break e}}Xn(i)}i=!1}i&&(t=n[0])}}return n=dt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bh,lastRenderedState:t},n.queue=i,n=Bh.bind(null,me,i),i.dispatch=n,i=fs(!1),s=ys.bind(null,me,!1,i.queue),i=dt(),r={state:t,dispatch:null,action:e,pending:null},i.queue=r,n=yy.bind(null,me,r,s,n),r.dispatch=n,i.memoizedState=e,[t,n,!1]}function Sh(e){var t=Ke();return wh(t,Me,e)}function wh(e,t,n){if(t=ss(e,t,bh)[0],e=$r(xn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=hl(t)}catch(d){throw d===ri?Ar:d}else i=t;t=Ke();var r=t.queue,s=r.dispatch;return n!==t.memoizedState&&(me.flags|=2048,fi(9,{destroy:void 0},by.bind(null,r,n),null)),[i,s,e]}function by(e,t){e.action=t}function Eh(e){var t=Ke(),n=Me;if(n!==null)return wh(t,n,e);Ke(),t=t.memoizedState,n=Ke();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function fi(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=me.updateQueue,t===null&&(t=Hr(),me.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Th(){return Ke().memoizedState}function qr(e,t,n,i){var r=dt();me.flags|=e,r.memoizedState=fi(1|t,{destroy:void 0},n,i===void 0?null:i)}function Yr(e,t,n,i){var r=Ke();i=i===void 0?null:i;var s=r.memoizedState.inst;Me!==null&&i!==null&&as(i,Me.memoizedState.deps)?r.memoizedState=fi(t,s,n,i):(me.flags|=e,r.memoizedState=fi(1|t,s,n,i))}function Ch(e,t){qr(8390656,8,e,t)}function hs(e,t){Yr(2048,8,e,t)}function xy(e){me.flags|=4;var t=me.updateQueue;if(t===null)t=Hr(),me.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Rh(e){var t=Ke().memoizedState;return xy({ref:t,nextImpl:e}),function(){if((_e&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function _h(e,t){return Yr(4,2,e,t)}function Oh(e,t){return Yr(4,4,e,t)}function zh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ah(e,t,n){n=n!=null?n.concat([e]):null,Yr(4,4,zh.bind(null,t,e),n)}function ps(){}function jh(e,t){var n=Ke();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&as(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Mh(e,t){var n=Ke();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&as(t,i[1]))return i[0];if(i=e(),_a){Bn(!0);try{e()}finally{Bn(!1)}}return n.memoizedState=[i,t],i}function ms(e,t,n){return n===void 0||(bn&1073741824)!==0&&(Se&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Np(),me.lanes|=e,In|=e,n)}function Nh(e,t,n,i){return _t(n,t)?n:oi.current!==null?(e=ms(e,n,i),_t(e,t)||(Pe=!0),e):(bn&42)===0||(bn&1073741824)!==0&&(Se&261930)===0?(Pe=!0,e.memoizedState=n):(e=Np(),me.lanes|=e,In|=e,t)}function Dh(e,t,n,i,r){var s=H.p;H.p=s!==0&&8>s?s:8;var d=A.T,v={};A.T=v,ys(e,!1,t,n);try{var E=r(),U=A.S;if(U!==null&&U(v,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var W=my(E,i);pl(e,t,W,Nt(e))}else pl(e,t,i,Nt(e))}catch(te){pl(e,t,{then:function(){},status:"rejected",reason:te},Nt())}finally{H.p=s,d!==null&&v.types!==null&&(d.types=v.types),A.T=d}}function Sy(){}function vs(e,t,n,i){if(e.tag!==5)throw Error(u(476));var r=Lh(e).queue;Dh(e,r,t,P,n===null?Sy:function(){return Uh(e),n(i)})}function Lh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Uh(e){var t=Lh(e);t.next===null&&(t=e.alternate.memoizedState),pl(e,t.next.queue,{},Nt())}function gs(){return rt(jl)}function kh(){return Ke().memoizedState}function Hh(){return Ke().memoizedState}function wy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Nt();e=Kn(n);var i=Zn(t,e,n);i!==null&&(bt(i,t,n),sl(i,t,n)),t={cache:Qo()},e.payload=t;return}t=t.return}}function Ey(e,t,n){var i=Nt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Gr(e)?$h(t,n):(n=Lo(e,t,n,i),n!==null&&(bt(n,e,i),qh(n,t,i)))}function Bh(e,t,n){var i=Nt();pl(e,t,n,i)}function pl(e,t,n,i){var r={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gr(e))$h(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,v=s(d,n);if(r.hasEagerState=!0,r.eagerState=v,_t(v,d))return Er(e,t,r,0),Le===null&&wr(),!1}catch{}finally{}if(n=Lo(e,t,r,i),n!==null)return bt(n,e,i),qh(n,t,i),!0}return!1}function ys(e,t,n,i){if(i={lane:2,revertLane:Ps(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Gr(e)){if(t)throw Error(u(479))}else t=Lo(e,n,i,2),t!==null&&bt(t,e,2)}function Gr(e){var t=e.alternate;return e===me||t!==null&&t===me}function $h(e,t){si=Ur=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qh(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Qf(e,n)}}var ml={readContext:rt,use:Br,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useLayoutEffect:Ge,useInsertionEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useSyncExternalStore:Ge,useId:Ge,useHostTransitionStatus:Ge,useFormState:Ge,useActionState:Ge,useOptimistic:Ge,useMemoCache:Ge,useCacheRefresh:Ge};ml.useEffectEvent=Ge;var Yh={readContext:rt,use:Br,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Ch,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,qr(4194308,4,zh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qr(4194308,4,e,t)},useInsertionEffect:function(e,t){qr(4,2,e,t)},useMemo:function(e,t){var n=dt();t=t===void 0?null:t;var i=e();if(_a){Bn(!0);try{e()}finally{Bn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=dt();if(n!==void 0){var r=n(t);if(_a){Bn(!0);try{n(t)}finally{Bn(!1)}}}else r=t;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=Ey.bind(null,me,e),[i.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:function(e){e=fs(e);var t=e.queue,n=Bh.bind(null,me,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ps,useDeferredValue:function(e,t){var n=dt();return ms(n,e,t)},useTransition:function(){var e=fs(!1);return e=Dh.bind(null,me,e.queue,!0,!1),dt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=me,r=dt();if(Ee){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Le===null)throw Error(u(349));(Se&127)!==0||sh(i,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,Ch(fh.bind(null,i,s,e),[e]),i.flags|=2048,fi(9,{destroy:void 0},ch.bind(null,i,s,n,t),null),n},useId:function(){var e=dt(),t=Le.identifierPrefix;if(Ee){var n=nn,i=tn;n=(i&~(1<<32-Rt(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=kr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=vy++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:gs,useFormState:xh,useActionState:xh,useOptimistic:function(e){var t=dt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ys.bind(null,me,!0,n),n.dispatch=t,[e,t]},useMemoCache:os,useCacheRefresh:function(){return dt().memoizedState=wy.bind(null,me)},useEffectEvent:function(e){var t=dt(),n={impl:e};return t.memoizedState=n,function(){if((_e&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},bs={readContext:rt,use:Br,useCallback:jh,useContext:rt,useEffect:hs,useImperativeHandle:Ah,useInsertionEffect:_h,useLayoutEffect:Oh,useMemo:Mh,useReducer:$r,useRef:Th,useState:function(){return $r(xn)},useDebugValue:ps,useDeferredValue:function(e,t){var n=Ke();return Nh(n,Me.memoizedState,e,t)},useTransition:function(){var e=$r(xn)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:hl(e),t]},useSyncExternalStore:oh,useId:kh,useHostTransitionStatus:gs,useFormState:Sh,useActionState:Sh,useOptimistic:function(e,t){var n=Ke();return ph(n,Me,e,t)},useMemoCache:os,useCacheRefresh:Hh};bs.useEffectEvent=Rh;var Gh={readContext:rt,use:Br,useCallback:jh,useContext:rt,useEffect:hs,useImperativeHandle:Ah,useInsertionEffect:_h,useLayoutEffect:Oh,useMemo:Mh,useReducer:cs,useRef:Th,useState:function(){return cs(xn)},useDebugValue:ps,useDeferredValue:function(e,t){var n=Ke();return Me===null?ms(n,e,t):Nh(n,Me.memoizedState,e,t)},useTransition:function(){var e=cs(xn)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:hl(e),t]},useSyncExternalStore:oh,useId:kh,useHostTransitionStatus:gs,useFormState:Eh,useActionState:Eh,useOptimistic:function(e,t){var n=Ke();return Me!==null?ph(n,Me,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:os,useCacheRefresh:Hh};Gh.useEffectEvent=Rh;function xs(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:x({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ss={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Nt(),r=Kn(i);r.payload=t,n!=null&&(r.callback=n),t=Zn(e,r,i),t!==null&&(bt(t,e,i),sl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Nt(),r=Kn(i);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Zn(e,r,i),t!==null&&(bt(t,e,i),sl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Nt(),i=Kn(n);i.tag=2,t!=null&&(i.callback=t),t=Zn(e,i,n),t!==null&&(bt(t,e,n),sl(t,e,n))}};function Xh(e,t,n,i,r,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,d):t.prototype&&t.prototype.isPureReactComponent?!tl(n,i)||!tl(r,s):!0}function Vh(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Ss.enqueueReplaceState(t,t.state,null)}function Oa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=x({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function Qh(e){Sr(e)}function Kh(e){console.error(e)}function Zh(e){Sr(e)}function Xr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Jh(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function ws(e,t,n){return n=Kn(n),n.tag=3,n.payload={element:null},n.callback=function(){Xr(e,t)},n}function Ph(e){return e=Kn(e),e.tag=3,e}function Wh(e,t,n,i){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var s=i.value;e.payload=function(){return r(s)},e.callback=function(){Jh(t,n,i)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Jh(t,n,i),typeof r!="function"&&(ea===null?ea=new Set([this]):ea.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})})}function Ty(e,t,n,i,r){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ai(t,n,r,!0),n=zt.current,n!==null){switch(n.tag){case 31:case 13:return Xt===null?nu():n.alternate===null&&Xe===0&&(Xe=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===jr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Ks(e,i,r)),!1;case 22:return n.flags|=65536,i===jr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Ks(e,i,r)),!1}throw Error(u(435,n.tag))}return Ks(e,i,r),nu(),!1}if(Ee)return t=zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,i!==qo&&(e=Error(u(422),{cause:i}),il($t(e,n)))):(i!==qo&&(t=Error(u(423),{cause:i}),il($t(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=$t(i,n),r=ws(e.stateNode,i,r),Fo(e,r),Xe!==4&&(Xe=2)),!1;var s=Error(u(520),{cause:i});if(s=$t(s,n),El===null?El=[s]:El.push(s),Xe!==4&&(Xe=2),t===null)return!0;i=$t(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=ws(n.stateNode,i,e),Fo(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ea===null||!ea.has(s))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Ph(r),Wh(r,e,n,i),Fo(n,r),!1}n=n.return}while(n!==null);return!1}var Es=Error(u(461)),Pe=!1;function ut(e,t,n,i){t.child=e===null?th(t,null,n,i):Ra(t,e.child,n,i)}function Fh(e,t,n,i,r){n=n.render;var s=t.ref;if("ref"in i){var d={};for(var v in i)v!=="ref"&&(d[v]=i[v])}else d=i;return wa(t),i=is(e,t,n,d,s,r),v=ls(),e!==null&&!Pe?(rs(e,t,r),Sn(e,t,r)):(Ee&&v&&Bo(t),t.flags|=1,ut(e,t,i,r),t.child)}function Ih(e,t,n,i,r){if(e===null){var s=n.type;return typeof s=="function"&&!Uo(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,ep(e,t,s,i,r)):(e=Cr(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!js(e,r)){var d=s.memoizedProps;if(n=n.compare,n=n!==null?n:tl,n(d,i)&&e.ref===t.ref)return Sn(e,t,r)}return t.flags|=1,e=mn(s,i),e.ref=t.ref,e.return=t,t.child=e}function ep(e,t,n,i,r){if(e!==null){var s=e.memoizedProps;if(tl(s,i)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=i=s,js(e,r))(e.flags&131072)!==0&&(Pe=!0);else return t.lanes=e.lanes,Sn(e,t,r)}return Ts(e,t,n,i,r)}function tp(e,t,n,i){var r=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~s}else i=0,t.child=null;return np(e,t,s,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&zr(t,s!==null?s.cachePool:null),s!==null?ih(t,s):es(),lh(t);else return i=t.lanes=536870912,np(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(zr(t,s.cachePool),ih(t,s),Pn(),t.memoizedState=null):(e!==null&&zr(t,null),es(),Pn());return ut(e,t,r,n),t.child}function vl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function np(e,t,n,i,r){var s=Zo();return s=s===null?null:{parent:Ze._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&zr(t,null),es(),lh(t),e!==null&&ai(e,t,i,!0),t.childLanes=r,null}function Vr(e,t){return t=Kr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ap(e,t,n){return Ra(t,e.child,null,n),e=Vr(t,t.pendingProps),e.flags|=2,At(t),t.memoizedState=null,e}function Cy(e,t,n){var i=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ee){if(i.mode==="hidden")return e=Vr(t,i),t.lanes=536870912,vl(null,e);if(ns(t),(e=He)?(e=m0(e,Gt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yn!==null?{id:tn,overflow:nn}:null,retryLane:536870912,hydrationErrors:null},n=$d(e),n.return=t,t.child=n,lt=t,He=null)):e=null,e===null)throw Xn(t);return t.lanes=536870912,null}return Vr(t,i)}var s=e.memoizedState;if(s!==null){var d=s.dehydrated;if(ns(t),r)if(t.flags&256)t.flags&=-257,t=ap(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Pe||ai(e,t,n,!1),r=(n&e.childLanes)!==0,Pe||r){if(i=Le,i!==null&&(d=Kf(i,n),d!==0&&d!==s.retryLane))throw s.retryLane=d,ya(e,d),bt(i,e,d),Es;nu(),t=ap(e,t,n)}else e=s.treeContext,He=Vt(d.nextSibling),lt=t,Ee=!0,Gn=null,Gt=!1,e!==null&&Gd(t,e),t=Vr(t,i),t.flags|=4096;return t}return e=mn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Qr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ts(e,t,n,i,r){return wa(t),n=is(e,t,n,i,void 0,r),i=ls(),e!==null&&!Pe?(rs(e,t,r),Sn(e,t,r)):(Ee&&i&&Bo(t),t.flags|=1,ut(e,t,n,r),t.child)}function ip(e,t,n,i,r,s){return wa(t),t.updateQueue=null,n=uh(t,i,n,r),rh(e),i=ls(),e!==null&&!Pe?(rs(e,t,s),Sn(e,t,s)):(Ee&&i&&Bo(t),t.flags|=1,ut(e,t,n,s),t.child)}function lp(e,t,n,i,r){if(wa(t),t.stateNode===null){var s=Ia,d=n.contextType;typeof d=="object"&&d!==null&&(s=rt(d)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ss,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},Po(t),d=n.contextType,s.context=typeof d=="object"&&d!==null?rt(d):Ia,s.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(xs(t,n,d,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(d=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),d!==s.state&&Ss.enqueueReplaceState(s,s.state,null),fl(t,i,s,r),cl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var v=t.memoizedProps,E=Oa(n,v);s.props=E;var U=s.context,W=n.contextType;d=Ia,typeof W=="object"&&W!==null&&(d=rt(W));var te=n.getDerivedStateFromProps;W=typeof te=="function"||typeof s.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,W||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(v||U!==d)&&Vh(t,s,i,d),Qn=!1;var $=t.memoizedState;s.state=$,fl(t,i,s,r),cl(),U=t.memoizedState,v||$!==U||Qn?(typeof te=="function"&&(xs(t,n,te,i),U=t.memoizedState),(E=Qn||Xh(t,n,E,i,$,U,d))?(W||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=U),s.props=i,s.state=U,s.context=d,i=E):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Wo(e,t),d=t.memoizedProps,W=Oa(n,d),s.props=W,te=t.pendingProps,$=s.context,U=n.contextType,E=Ia,typeof U=="object"&&U!==null&&(E=rt(U)),v=n.getDerivedStateFromProps,(U=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==te||$!==E)&&Vh(t,s,i,E),Qn=!1,$=t.memoizedState,s.state=$,fl(t,i,s,r),cl();var Q=t.memoizedState;d!==te||$!==Q||Qn||e!==null&&e.dependencies!==null&&_r(e.dependencies)?(typeof v=="function"&&(xs(t,n,v,i),Q=t.memoizedState),(W=Qn||Xh(t,n,W,i,$,Q,E)||e!==null&&e.dependencies!==null&&_r(e.dependencies))?(U||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,Q,E),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,Q,E)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&$===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&$===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=Q),s.props=i,s.state=Q,s.context=E,i=W):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&$===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&$===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Qr(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=Ra(t,e.child,null,r),t.child=Ra(t,null,n,r)):ut(e,t,n,r),t.memoizedState=s.state,e=t.child):e=Sn(e,t,r),e}function rp(e,t,n,i){return xa(),t.flags|=256,ut(e,t,n,i),t.child}var Cs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rs(e){return{baseLanes:e,cachePool:Jd()}}function _s(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Mt),e}function up(e,t,n){var i=t.pendingProps,r=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),d&&(r=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ee){if(r?Jn(t):Pn(),(e=He)?(e=m0(e,Gt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yn!==null?{id:tn,overflow:nn}:null,retryLane:536870912,hydrationErrors:null},n=$d(e),n.return=t,t.child=n,lt=t,He=null)):e=null,e===null)throw Xn(t);return sc(e)?t.lanes=32:t.lanes=536870912,null}var v=i.children;return i=i.fallback,r?(Pn(),r=t.mode,v=Kr({mode:"hidden",children:v},r),i=ba(i,r,n,null),v.return=t,i.return=t,v.sibling=i,t.child=v,i=t.child,i.memoizedState=Rs(n),i.childLanes=_s(e,d,n),t.memoizedState=Cs,vl(null,i)):(Jn(t),Os(t,v))}var E=e.memoizedState;if(E!==null&&(v=E.dehydrated,v!==null)){if(s)t.flags&256?(Jn(t),t.flags&=-257,t=zs(e,t,n)):t.memoizedState!==null?(Pn(),t.child=e.child,t.flags|=128,t=null):(Pn(),v=i.fallback,r=t.mode,i=Kr({mode:"visible",children:i.children},r),v=ba(v,r,n,null),v.flags|=2,i.return=t,v.return=t,i.sibling=v,t.child=i,Ra(t,e.child,null,n),i=t.child,i.memoizedState=Rs(n),i.childLanes=_s(e,d,n),t.memoizedState=Cs,t=vl(null,i));else if(Jn(t),sc(v)){if(d=v.nextSibling&&v.nextSibling.dataset,d)var U=d.dgst;d=U,i=Error(u(419)),i.stack="",i.digest=d,il({value:i,source:null,stack:null}),t=zs(e,t,n)}else if(Pe||ai(e,t,n,!1),d=(n&e.childLanes)!==0,Pe||d){if(d=Le,d!==null&&(i=Kf(d,n),i!==0&&i!==E.retryLane))throw E.retryLane=i,ya(e,i),bt(d,e,i),Es;oc(v)||nu(),t=zs(e,t,n)}else oc(v)?(t.flags|=192,t.child=e.child,t=null):(e=E.treeContext,He=Vt(v.nextSibling),lt=t,Ee=!0,Gn=null,Gt=!1,e!==null&&Gd(t,e),t=Os(t,i.children),t.flags|=4096);return t}return r?(Pn(),v=i.fallback,r=t.mode,E=e.child,U=E.sibling,i=mn(E,{mode:"hidden",children:i.children}),i.subtreeFlags=E.subtreeFlags&65011712,U!==null?v=mn(U,v):(v=ba(v,r,n,null),v.flags|=2),v.return=t,i.return=t,i.sibling=v,t.child=i,vl(null,i),i=t.child,v=e.child.memoizedState,v===null?v=Rs(n):(r=v.cachePool,r!==null?(E=Ze._currentValue,r=r.parent!==E?{parent:E,pool:E}:r):r=Jd(),v={baseLanes:v.baseLanes|n,cachePool:r}),i.memoizedState=v,i.childLanes=_s(e,d,n),t.memoizedState=Cs,vl(e.child,i)):(Jn(t),n=e.child,e=n.sibling,n=mn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function Os(e,t){return t=Kr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Kr(e,t){return e=Ot(22,e,null,t),e.lanes=0,e}function zs(e,t,n){return Ra(t,e.child,null,n),e=Os(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function op(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Xo(e.return,t,n)}function As(e,t,n,i,r,s){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,treeForkCount:s}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=i,d.tail=n,d.tailMode=r,d.treeForkCount=s)}function sp(e,t,n){var i=t.pendingProps,r=i.revealOrder,s=i.tail;i=i.children;var d=Qe.current,v=(d&2)!==0;if(v?(d=d&1|2,t.flags|=128):d&=1,ie(Qe,d),ut(e,t,i,n),i=Ee?al:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&op(e,n,t);else if(e.tag===19)op(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Lr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),As(t,!1,r,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Lr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}As(t,!0,n,null,s,i);break;case"together":As(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Sn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ai(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function js(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&_r(e)))}function Ry(e,t,n){switch(t.tag){case 3:Ue(t,t.stateNode.containerInfo),Vn(t,Ze,e.memoizedState.cache),xa();break;case 27:case 5:Et(t);break;case 4:Ue(t,t.stateNode.containerInfo);break;case 10:Vn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ns(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Jn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?up(e,t,n):(Jn(t),e=Sn(e,t,n),e!==null?e.sibling:null);Jn(t);break;case 19:var r=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(ai(e,t,n,!1),i=(n&t.childLanes)!==0),r){if(i)return sp(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ie(Qe,Qe.current),i)break;return null;case 22:return t.lanes=0,tp(e,t,n,t.pendingProps);case 24:Vn(t,Ze,e.memoizedState.cache)}return Sn(e,t,n)}function cp(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Pe=!0;else{if(!js(e,n)&&(t.flags&128)===0)return Pe=!1,Ry(e,t,n);Pe=(e.flags&131072)!==0}else Pe=!1,Ee&&(t.flags&1048576)!==0&&Yd(t,al,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Ta(t.elementType),t.type=e,typeof e=="function")Uo(e)?(i=Oa(e,i),t.tag=1,t=lp(null,t,e,i,n)):(t.tag=0,t=Ts(null,t,e,i,n));else{if(e!=null){var r=e.$$typeof;if(r===F){t.tag=11,t=Fh(null,t,e,i,n);break e}else if(r===J){t.tag=14,t=Ih(null,t,e,i,n);break e}}throw t=ne(e)||e,Error(u(306,t,""))}}return t;case 0:return Ts(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,r=Oa(i,t.pendingProps),lp(e,t,i,r,n);case 3:e:{if(Ue(t,t.stateNode.containerInfo),e===null)throw Error(u(387));i=t.pendingProps;var s=t.memoizedState;r=s.element,Wo(e,t),fl(t,i,null,n);var d=t.memoizedState;if(i=d.cache,Vn(t,Ze,i),i!==s.cache&&Vo(t,[Ze],n,!0),cl(),i=d.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=rp(e,t,i,n);break e}else if(i!==r){r=$t(Error(u(424)),t),il(r),t=rp(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(He=Vt(e.firstChild),lt=t,Ee=!0,Gn=null,Gt=!0,n=th(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(xa(),i===r){t=Sn(e,t,n);break e}ut(e,t,i,n)}t=t.child}return t;case 26:return Qr(e,t),e===null?(n=S0(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ee||(n=t.type,e=t.pendingProps,i=su(he.current).createElement(n),i[it]=t,i[ht]=e,ot(i,n,e),et(i),t.stateNode=i):t.memoizedState=S0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Et(t),e===null&&Ee&&(i=t.stateNode=y0(t.type,t.pendingProps,he.current),lt=t,Gt=!0,r=He,ia(t.type)?(cc=r,He=Vt(i.firstChild)):He=r),ut(e,t,t.pendingProps.children,n),Qr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ee&&((r=i=He)&&(i=n2(i,t.type,t.pendingProps,Gt),i!==null?(t.stateNode=i,lt=t,He=Vt(i.firstChild),Gt=!1,r=!0):r=!1),r||Xn(t)),Et(t),r=t.type,s=t.pendingProps,d=e!==null?e.memoizedProps:null,i=s.children,lc(r,s)?i=null:d!==null&&lc(r,d)&&(t.flags|=32),t.memoizedState!==null&&(r=is(e,t,gy,null,null,n),jl._currentValue=r),Qr(e,t),ut(e,t,i,n),t.child;case 6:return e===null&&Ee&&((e=n=He)&&(n=a2(n,t.pendingProps,Gt),n!==null?(t.stateNode=n,lt=t,He=null,e=!0):e=!1),e||Xn(t)),null;case 13:return up(e,t,n);case 4:return Ue(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ra(t,null,i,n):ut(e,t,i,n),t.child;case 11:return Fh(e,t,t.type,t.pendingProps,n);case 7:return ut(e,t,t.pendingProps,n),t.child;case 8:return ut(e,t,t.pendingProps.children,n),t.child;case 12:return ut(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Vn(t,t.type,i.value),ut(e,t,i.children,n),t.child;case 9:return r=t.type._context,i=t.pendingProps.children,wa(t),r=rt(r),i=i(r),t.flags|=1,ut(e,t,i,n),t.child;case 14:return Ih(e,t,t.type,t.pendingProps,n);case 15:return ep(e,t,t.type,t.pendingProps,n);case 19:return sp(e,t,n);case 31:return Cy(e,t,n);case 22:return tp(e,t,n,t.pendingProps);case 24:return wa(t),i=rt(Ze),e===null?(r=Zo(),r===null&&(r=Le,s=Qo(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=n),r=s),t.memoizedState={parent:i,cache:r},Po(t),Vn(t,Ze,r)):((e.lanes&n)!==0&&(Wo(e,t),fl(t,null,null,n),cl()),r=e.memoizedState,s=t.memoizedState,r.parent!==i?(r={parent:i,cache:i},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Vn(t,Ze,i)):(i=s.cache,Vn(t,Ze,i),i!==r.cache&&Vo(t,[Ze],n,!0))),ut(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function wn(e){e.flags|=4}function Ms(e,t,n,i,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(kp())e.flags|=8192;else throw Ca=jr,Jo}else e.flags&=-16777217}function fp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!R0(t))if(kp())e.flags|=8192;else throw Ca=jr,Jo}function Zr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Xf():536870912,e.lanes|=t,mi|=t)}function gl(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function _y(e,t,n){var i=t.pendingProps;switch($o(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Be(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),yn(Ze),Te(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ni(t)?wn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Yo())),Be(t),null;case 26:var r=t.type,s=t.memoizedState;return e===null?(wn(t),s!==null?(Be(t),fp(t,s)):(Be(t),Ms(t,r,null,i,n))):s?s!==e.memoizedState?(wn(t),Be(t),fp(t,s)):(Be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&wn(t),Be(t),Ms(t,r,e,i,n)),null;case 27:if(Zt(t),n=he.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&wn(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return Be(t),null}e=ae.current,ni(t)?Xd(t):(e=y0(r,i,n),t.stateNode=e,wn(t))}return Be(t),null;case 5:if(Zt(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&wn(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return Be(t),null}if(s=ae.current,ni(t))Xd(t);else{var d=su(he.current);switch(s){case 1:s=d.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=d.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=d.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?d.createElement("select",{is:i.is}):d.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?d.createElement(r,{is:i.is}):d.createElement(r)}}s[it]=t,s[ht]=i;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)s.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=s;e:switch(ot(s,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&wn(t)}}return Be(t),Ms(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&wn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(u(166));if(e=he.current,ni(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,r=lt,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[it]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||u0(e.nodeValue,n)),e||Xn(t,!0)}else e=su(e).createTextNode(i),e[it]=t,t.stateNode=e}return Be(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=ni(t),n!==null){if(e===null){if(!i)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[it]=t}else xa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),e=!1}else n=Yo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(At(t),t):(At(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Be(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=ni(t),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(u(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(u(317));r[it]=t}else xa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),r=!1}else r=Yo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(At(t),t):(At(t),null)}return At(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==r&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Zr(t,t.updateQueue),Be(t),null);case 4:return Te(),e===null&&ec(t.stateNode.containerInfo),Be(t),null;case 10:return yn(t.type),Be(t),null;case 19:if(V(Qe),i=t.memoizedState,i===null)return Be(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)gl(i,!1);else{if(Xe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Lr(e),s!==null){for(t.flags|=128,gl(i,!1),e=s.updateQueue,t.updateQueue=e,Zr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Bd(n,e),n=n.sibling;return ie(Qe,Qe.current&1|2),Ee&&vn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Tt()>Ir&&(t.flags|=128,r=!0,gl(i,!1),t.lanes=4194304)}else{if(!r)if(e=Lr(s),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Zr(t,e),gl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Ee)return Be(t),null}else 2*Tt()-i.renderingStartTime>Ir&&n!==536870912&&(t.flags|=128,r=!0,gl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Tt(),e.sibling=null,n=Qe.current,ie(Qe,r?n&1|2:n&1),Ee&&vn(t,i.treeForkCount),e):(Be(t),null);case 22:case 23:return At(t),ts(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),n=t.updateQueue,n!==null&&Zr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&V(Ea),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),yn(Ze),Be(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Oy(e,t){switch($o(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yn(Ze),Te(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Zt(t),null;case 31:if(t.memoizedState!==null){if(At(t),t.alternate===null)throw Error(u(340));xa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(At(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));xa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Qe),null;case 4:return Te(),null;case 10:return yn(t.type),null;case 22:case 23:return At(t),ts(),e!==null&&V(Ea),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return yn(Ze),null;case 25:return null;default:return null}}function dp(e,t){switch($o(t),t.tag){case 3:yn(Ze),Te();break;case 26:case 27:case 5:Zt(t);break;case 4:Te();break;case 31:t.memoizedState!==null&&At(t);break;case 13:At(t);break;case 19:V(Qe);break;case 10:yn(t.type);break;case 22:case 23:At(t),ts(),e!==null&&V(Ea);break;case 24:yn(Ze)}}function yl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){i=void 0;var s=n.create,d=n.inst;i=s(),d.destroy=i}n=n.next}while(n!==r)}}catch(v){je(t,t.return,v)}}function Wn(e,t,n){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var s=r.next;i=s;do{if((i.tag&e)===e){var d=i.inst,v=d.destroy;if(v!==void 0){d.destroy=void 0,r=t;var E=n,U=v;try{U()}catch(W){je(r,E,W)}}}i=i.next}while(i!==s)}}catch(W){je(t,t.return,W)}}function hp(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ah(t,n)}catch(i){je(e,e.return,i)}}}function pp(e,t,n){n.props=Oa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){je(e,t,i)}}function bl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(r){je(e,t,r)}}function an(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(r){je(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){je(e,t,r)}else n.current=null}function mp(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){je(e,e.return,r)}}function Ns(e,t,n){try{var i=e.stateNode;Py(i,e.type,n,t),i[ht]=t}catch(r){je(e,e.return,r)}}function vp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ia(e.type)||e.tag===4}function Ds(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ls(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hn));else if(i!==4&&(i===27&&ia(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Ls(e,t,n),e=e.sibling;e!==null;)Ls(e,t,n),e=e.sibling}function Jr(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ia(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Jr(e,t,n),e=e.sibling;e!==null;)Jr(e,t,n),e=e.sibling}function gp(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);ot(t,i,n),t[it]=e,t[ht]=n}catch(s){je(e,e.return,s)}}var En=!1,We=!1,Us=!1,yp=typeof WeakSet=="function"?WeakSet:Set,tt=null;function zy(e,t){if(e=e.containerInfo,ac=vu,e=Ad(e),zo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var d=0,v=-1,E=-1,U=0,W=0,te=e,$=null;t:for(;;){for(var Q;te!==n||r!==0&&te.nodeType!==3||(v=d+r),te!==s||i!==0&&te.nodeType!==3||(E=d+i),te.nodeType===3&&(d+=te.nodeValue.length),(Q=te.firstChild)!==null;)$=te,te=Q;for(;;){if(te===e)break t;if($===n&&++U===r&&(v=d),$===s&&++W===i&&(E=d),(Q=te.nextSibling)!==null)break;te=$,$=te.parentNode}te=Q}n=v===-1||E===-1?null:{start:v,end:E}}else n=null}n=n||{start:0,end:0}}else n=null;for(ic={focusedElem:e,selectionRange:n},vu=!1,tt=t;tt!==null;)if(t=tt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,tt=e;else for(;tt!==null;){switch(t=tt,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,r=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var ue=Oa(n.type,r);e=i.getSnapshotBeforeUpdate(ue,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(de){je(n,n.return,de)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)uc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":uc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,tt=e;break}tt=t.return}}function bp(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Cn(e,n),i&4&&yl(5,n);break;case 1:if(Cn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){je(n,n.return,d)}else{var r=Oa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){je(n,n.return,d)}}i&64&&hp(n),i&512&&bl(n,n.return);break;case 3:if(Cn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ah(e,t)}catch(d){je(n,n.return,d)}}break;case 27:t===null&&i&4&&gp(n);case 26:case 5:Cn(e,n),t===null&&i&4&&mp(n),i&512&&bl(n,n.return);break;case 12:Cn(e,n);break;case 31:Cn(e,n),i&4&&wp(e,n);break;case 13:Cn(e,n),i&4&&Ep(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Hy.bind(null,n),i2(e,n))));break;case 22:if(i=n.memoizedState!==null||En,!i){t=t!==null&&t.memoizedState!==null||We,r=En;var s=We;En=i,(We=t)&&!s?Rn(e,n,(n.subtreeFlags&8772)!==0):Cn(e,n),En=r,We=s}break;case 30:break;default:Cn(e,n)}}function xp(e){var t=e.alternate;t!==null&&(e.alternate=null,xp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&fo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,mt=!1;function Tn(e,t,n){for(n=n.child;n!==null;)Sp(e,t,n),n=n.sibling}function Sp(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Gi,n)}catch{}switch(n.tag){case 26:We||an(n,t),Tn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:We||an(n,t);var i=qe,r=mt;ia(n.type)&&(qe=n.stateNode,mt=!1),Tn(e,t,n),Ol(n.stateNode),qe=i,mt=r;break;case 5:We||an(n,t);case 6:if(i=qe,r=mt,qe=null,Tn(e,t,n),qe=i,mt=r,qe!==null)if(mt)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(n.stateNode)}catch(s){je(n,t,s)}else try{qe.removeChild(n.stateNode)}catch(s){je(n,t,s)}break;case 18:qe!==null&&(mt?(e=qe,h0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ei(e)):h0(qe,n.stateNode));break;case 4:i=qe,r=mt,qe=n.stateNode.containerInfo,mt=!0,Tn(e,t,n),qe=i,mt=r;break;case 0:case 11:case 14:case 15:Wn(2,n,t),We||Wn(4,n,t),Tn(e,t,n);break;case 1:We||(an(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&pp(n,t,i)),Tn(e,t,n);break;case 21:Tn(e,t,n);break;case 22:We=(i=We)||n.memoizedState!==null,Tn(e,t,n),We=i;break;default:Tn(e,t,n)}}function wp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ei(e)}catch(n){je(t,t.return,n)}}}function Ep(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ei(e)}catch(n){je(t,t.return,n)}}function Ay(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new yp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new yp),t;default:throw Error(u(435,e.tag))}}function Pr(e,t){var n=Ay(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var r=By.bind(null,e,i);i.then(r,r)}})}function vt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i],s=e,d=t,v=d;e:for(;v!==null;){switch(v.tag){case 27:if(ia(v.type)){qe=v.stateNode,mt=!1;break e}break;case 5:qe=v.stateNode,mt=!1;break e;case 3:case 4:qe=v.stateNode.containerInfo,mt=!0;break e}v=v.return}if(qe===null)throw Error(u(160));Sp(s,d,r),qe=null,mt=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Tp(t,e),t=t.sibling}var Pt=null;function Tp(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vt(t,e),gt(e),i&4&&(Wn(3,e,e.return),yl(3,e),Wn(5,e,e.return));break;case 1:vt(t,e),gt(e),i&512&&(We||n===null||an(n,n.return)),i&64&&En&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var r=Pt;if(vt(t,e),gt(e),i&512&&(We||n===null||an(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":s=r.getElementsByTagName("title")[0],(!s||s[Qi]||s[it]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(i),r.head.insertBefore(s,r.querySelector("head > title"))),ot(s,i,n),s[it]=e,et(s),i=s;break e;case"link":var d=T0("link","href",r).get(i+(n.href||""));if(d){for(var v=0;v<d.length;v++)if(s=d[v],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(v,1);break t}}s=r.createElement(i),ot(s,i,n),r.head.appendChild(s);break;case"meta":if(d=T0("meta","content",r).get(i+(n.content||""))){for(v=0;v<d.length;v++)if(s=d[v],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(v,1);break t}}s=r.createElement(i),ot(s,i,n),r.head.appendChild(s);break;default:throw Error(u(468,i))}s[it]=e,et(s),i=s}e.stateNode=i}else C0(r,e.type,e.stateNode);else e.stateNode=E0(r,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?C0(r,e.type,e.stateNode):E0(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Ns(e,e.memoizedProps,n.memoizedProps)}break;case 27:vt(t,e),gt(e),i&512&&(We||n===null||an(n,n.return)),n!==null&&i&4&&Ns(e,e.memoizedProps,n.memoizedProps);break;case 5:if(vt(t,e),gt(e),i&512&&(We||n===null||an(n,n.return)),e.flags&32){r=e.stateNode;try{Qa(r,"")}catch(ue){je(e,e.return,ue)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,Ns(e,r,n!==null?n.memoizedProps:r)),i&1024&&(Us=!0);break;case 6:if(vt(t,e),gt(e),i&4){if(e.stateNode===null)throw Error(u(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(ue){je(e,e.return,ue)}}break;case 3:if(du=null,r=Pt,Pt=cu(t.containerInfo),vt(t,e),Pt=r,gt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ei(t.containerInfo)}catch(ue){je(e,e.return,ue)}Us&&(Us=!1,Cp(e));break;case 4:i=Pt,Pt=cu(e.stateNode.containerInfo),vt(t,e),gt(e),Pt=i;break;case 12:vt(t,e),gt(e);break;case 31:vt(t,e),gt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Pr(e,i)));break;case 13:vt(t,e),gt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Fr=Tt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Pr(e,i)));break;case 22:r=e.memoizedState!==null;var E=n!==null&&n.memoizedState!==null,U=En,W=We;if(En=U||r,We=W||E,vt(t,e),We=W,En=U,gt(e),i&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||E||En||We||za(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){E=n=t;try{if(s=E.stateNode,r)d=s.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{v=E.stateNode;var te=E.memoizedProps.style,$=te!=null&&te.hasOwnProperty("display")?te.display:null;v.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(ue){je(E,E.return,ue)}}}else if(t.tag===6){if(n===null){E=t;try{E.stateNode.nodeValue=r?"":E.memoizedProps}catch(ue){je(E,E.return,ue)}}}else if(t.tag===18){if(n===null){E=t;try{var Q=E.stateNode;r?p0(Q,!0):p0(E.stateNode,!1)}catch(ue){je(E,E.return,ue)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Pr(e,n))));break;case 19:vt(t,e),gt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Pr(e,i)));break;case 30:break;case 21:break;default:vt(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(vp(i)){n=i;break}i=i.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var r=n.stateNode,s=Ds(e);Jr(e,s,r);break;case 5:var d=n.stateNode;n.flags&32&&(Qa(d,""),n.flags&=-33);var v=Ds(e);Jr(e,v,d);break;case 3:case 4:var E=n.stateNode.containerInfo,U=Ds(e);Ls(e,U,E);break;default:throw Error(u(161))}}catch(W){je(e,e.return,W)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Cp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Cn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)bp(e,t.alternate,t),t=t.sibling}function za(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wn(4,t,t.return),za(t);break;case 1:an(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&pp(t,t.return,n),za(t);break;case 27:Ol(t.stateNode);case 26:case 5:an(t,t.return),za(t);break;case 22:t.memoizedState===null&&za(t);break;case 30:za(t);break;default:za(t)}e=e.sibling}}function Rn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,r=e,s=t,d=s.flags;switch(s.tag){case 0:case 11:case 15:Rn(r,s,n),yl(4,s);break;case 1:if(Rn(r,s,n),i=s,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(U){je(i,i.return,U)}if(i=s,r=i.updateQueue,r!==null){var v=i.stateNode;try{var E=r.shared.hiddenCallbacks;if(E!==null)for(r.shared.hiddenCallbacks=null,r=0;r<E.length;r++)nh(E[r],v)}catch(U){je(i,i.return,U)}}n&&d&64&&hp(s),bl(s,s.return);break;case 27:gp(s);case 26:case 5:Rn(r,s,n),n&&i===null&&d&4&&mp(s),bl(s,s.return);break;case 12:Rn(r,s,n);break;case 31:Rn(r,s,n),n&&d&4&&wp(r,s);break;case 13:Rn(r,s,n),n&&d&4&&Ep(r,s);break;case 22:s.memoizedState===null&&Rn(r,s,n),bl(s,s.return);break;case 30:break;default:Rn(r,s,n)}t=t.sibling}}function ks(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ll(n))}function Hs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ll(e))}function Wt(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Rp(e,t,n,i),t=t.sibling}function Rp(e,t,n,i){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Wt(e,t,n,i),r&2048&&yl(9,t);break;case 1:Wt(e,t,n,i);break;case 3:Wt(e,t,n,i),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ll(e)));break;case 12:if(r&2048){Wt(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,d=s.id,v=s.onPostCommit;typeof v=="function"&&v(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){je(t,t.return,E)}}else Wt(e,t,n,i);break;case 31:Wt(e,t,n,i);break;case 13:Wt(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,d=t.alternate,t.memoizedState!==null?s._visibility&2?Wt(e,t,n,i):xl(e,t):s._visibility&2?Wt(e,t,n,i):(s._visibility|=2,di(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),r&2048&&ks(d,t);break;case 24:Wt(e,t,n,i),r&2048&&Hs(t.alternate,t);break;default:Wt(e,t,n,i)}}function di(e,t,n,i,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,d=t,v=n,E=i,U=d.flags;switch(d.tag){case 0:case 11:case 15:di(s,d,v,E,r),yl(8,d);break;case 23:break;case 22:var W=d.stateNode;d.memoizedState!==null?W._visibility&2?di(s,d,v,E,r):xl(s,d):(W._visibility|=2,di(s,d,v,E,r)),r&&U&2048&&ks(d.alternate,d);break;case 24:di(s,d,v,E,r),r&&U&2048&&Hs(d.alternate,d);break;default:di(s,d,v,E,r)}t=t.sibling}}function xl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,r=i.flags;switch(i.tag){case 22:xl(n,i),r&2048&&ks(i.alternate,i);break;case 24:xl(n,i),r&2048&&Hs(i.alternate,i);break;default:xl(n,i)}t=t.sibling}}var Sl=8192;function hi(e,t,n){if(e.subtreeFlags&Sl)for(e=e.child;e!==null;)_p(e,t,n),e=e.sibling}function _p(e,t,n){switch(e.tag){case 26:hi(e,t,n),e.flags&Sl&&e.memoizedState!==null&&v2(n,Pt,e.memoizedState,e.memoizedProps);break;case 5:hi(e,t,n);break;case 3:case 4:var i=Pt;Pt=cu(e.stateNode.containerInfo),hi(e,t,n),Pt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Sl,Sl=16777216,hi(e,t,n),Sl=i):hi(e,t,n));break;default:hi(e,t,n)}}function Op(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function wl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];tt=i,Ap(i,e)}Op(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zp(e),e=e.sibling}function zp(e){switch(e.tag){case 0:case 11:case 15:wl(e),e.flags&2048&&Wn(9,e,e.return);break;case 3:wl(e);break;case 12:wl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Wr(e)):wl(e);break;default:wl(e)}}function Wr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];tt=i,Ap(i,e)}Op(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wn(8,t,t.return),Wr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Wr(t));break;default:Wr(t)}e=e.sibling}}function Ap(e,t){for(;tt!==null;){var n=tt;switch(n.tag){case 0:case 11:case 15:Wn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ll(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,tt=i;else e:for(n=e;tt!==null;){i=tt;var r=i.sibling,s=i.return;if(xp(i),i===n){tt=null;break e}if(r!==null){r.return=s,tt=r;break e}tt=s}}}var jy={getCacheForType:function(e){var t=rt(Ze),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return rt(Ze).controller.signal}},My=typeof WeakMap=="function"?WeakMap:Map,_e=0,Le=null,be=null,Se=0,Ae=0,jt=null,Fn=!1,pi=!1,Bs=!1,_n=0,Xe=0,In=0,Aa=0,$s=0,Mt=0,mi=0,El=null,yt=null,qs=!1,Fr=0,jp=0,Ir=1/0,eu=null,ea=null,Ie=0,ta=null,vi=null,On=0,Ys=0,Gs=null,Mp=null,Tl=0,Xs=null;function Nt(){return(_e&2)!==0&&Se!==0?Se&-Se:A.T!==null?Ps():Zf()}function Np(){if(Mt===0)if((Se&536870912)===0||Ee){var e=or;or<<=1,(or&3932160)===0&&(or=262144),Mt=e}else Mt=536870912;return e=zt.current,e!==null&&(e.flags|=32),Mt}function bt(e,t,n){(e===Le&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(gi(e,0),na(e,Se,Mt,!1)),Vi(e,n),((_e&2)===0||e!==Le)&&(e===Le&&((_e&2)===0&&(Aa|=n),Xe===4&&na(e,Se,Mt,!1)),ln(e))}function Dp(e,t,n){if((_e&6)!==0)throw Error(u(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Xi(e,t),r=i?Ly(e,t):Qs(e,t,!0),s=i;do{if(r===0){pi&&!i&&na(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!Ny(n)){r=Qs(e,t,!1),s=!1;continue}if(r===2){if(s=t,e.errorRecoveryDisabledLanes&s)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var v=e;r=El;var E=v.current.memoizedState.isDehydrated;if(E&&(gi(v,d).flags|=256),d=Qs(v,d,!1),d!==2){if(Bs&&!E){v.errorRecoveryDisabledLanes|=s,Aa|=s,r=4;break e}s=yt,yt=r,s!==null&&(yt===null?yt=s:yt.push.apply(yt,s))}r=d}if(s=!1,r!==2)continue}}if(r===1){gi(e,0),na(e,t,0,!0);break}e:{switch(i=e,s=r,s){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:na(i,t,Mt,!Fn);break e;case 2:yt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(r=Fr+300-Tt(),10<r)){if(na(i,t,Mt,!Fn),cr(i,0,!0)!==0)break e;On=t,i.timeoutHandle=f0(Lp.bind(null,i,n,yt,eu,qs,t,Mt,Aa,mi,Fn,s,"Throttled",-0,0),r);break e}Lp(i,n,yt,eu,qs,t,Mt,Aa,mi,Fn,s,null,-0,0)}}break}while(!0);ln(e)}function Lp(e,t,n,i,r,s,d,v,E,U,W,te,$,Q){if(e.timeoutHandle=-1,te=t.subtreeFlags,te&8192||(te&16785408)===16785408){te={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:hn},_p(t,s,te);var ue=(s&62914560)===s?Fr-Tt():(s&4194048)===s?jp-Tt():0;if(ue=g2(te,ue),ue!==null){On=s,e.cancelPendingCommit=ue(Gp.bind(null,e,t,s,n,i,r,d,v,E,W,te,null,$,Q)),na(e,s,d,!U);return}}Gp(e,t,s,n,i,r,d,v,E)}function Ny(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!_t(s(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function na(e,t,n,i){t&=~$s,t&=~Aa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var r=t;0<r;){var s=31-Rt(r),d=1<<s;i[s]=-1,r&=~d}n!==0&&Vf(e,n,t)}function tu(){return(_e&6)===0?(Cl(0),!1):!0}function Vs(){if(be!==null){if(Ae===0)var e=be.return;else e=be,gn=Sa=null,us(e),ui=null,ul=0,e=be;for(;e!==null;)dp(e.alternate,e),e=e.return;be=null}}function gi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Iy(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),On=0,Vs(),Le=e,be=n=mn(e.current,null),Se=t,Ae=0,jt=null,Fn=!1,pi=Xi(e,t),Bs=!1,mi=Mt=$s=Aa=In=Xe=0,yt=El=null,qs=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-Rt(i),s=1<<r;t|=e[r],i&=~s}return _n=t,wr(),n}function Up(e,t){me=null,A.H=ml,t===ri||t===Ar?(t=Fd(),Ae=3):t===Jo?(t=Fd(),Ae=4):Ae=t===Es?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,jt=t,be===null&&(Xe=1,Xr(e,$t(t,e.current)))}function kp(){var e=zt.current;return e===null?!0:(Se&4194048)===Se?Xt===null:(Se&62914560)===Se||(Se&536870912)!==0?e===Xt:!1}function Hp(){var e=A.H;return A.H=ml,e===null?ml:e}function Bp(){var e=A.A;return A.A=jy,e}function nu(){Xe=4,Fn||(Se&4194048)!==Se&&zt.current!==null||(pi=!0),(In&134217727)===0&&(Aa&134217727)===0||Le===null||na(Le,Se,Mt,!1)}function Qs(e,t,n){var i=_e;_e|=2;var r=Hp(),s=Bp();(Le!==e||Se!==t)&&(eu=null,gi(e,t)),t=!1;var d=Xe;e:do try{if(Ae!==0&&be!==null){var v=be,E=jt;switch(Ae){case 8:Vs(),d=6;break e;case 3:case 2:case 9:case 6:zt.current===null&&(t=!0);var U=Ae;if(Ae=0,jt=null,yi(e,v,E,U),n&&pi){d=0;break e}break;default:U=Ae,Ae=0,jt=null,yi(e,v,E,U)}}Dy(),d=Xe;break}catch(W){Up(e,W)}while(!0);return t&&e.shellSuspendCounter++,gn=Sa=null,_e=i,A.H=r,A.A=s,be===null&&(Le=null,Se=0,wr()),d}function Dy(){for(;be!==null;)$p(be)}function Ly(e,t){var n=_e;_e|=2;var i=Hp(),r=Bp();Le!==e||Se!==t?(eu=null,Ir=Tt()+500,gi(e,t)):pi=Xi(e,t);e:do try{if(Ae!==0&&be!==null){t=be;var s=jt;t:switch(Ae){case 1:Ae=0,jt=null,yi(e,t,s,1);break;case 2:case 9:if(Pd(s)){Ae=0,jt=null,qp(t);break}t=function(){Ae!==2&&Ae!==9||Le!==e||(Ae=7),ln(e)},s.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:Pd(s)?(Ae=0,jt=null,qp(t)):(Ae=0,jt=null,yi(e,t,s,7));break;case 5:var d=null;switch(be.tag){case 26:d=be.memoizedState;case 5:case 27:var v=be;if(d?R0(d):v.stateNode.complete){Ae=0,jt=null;var E=v.sibling;if(E!==null)be=E;else{var U=v.return;U!==null?(be=U,au(U)):be=null}break t}}Ae=0,jt=null,yi(e,t,s,5);break;case 6:Ae=0,jt=null,yi(e,t,s,6);break;case 8:Vs(),Xe=6;break e;default:throw Error(u(462))}}Uy();break}catch(W){Up(e,W)}while(!0);return gn=Sa=null,A.H=i,A.A=r,_e=n,be!==null?0:(Le=null,Se=0,wr(),Xe)}function Uy(){for(;be!==null&&!lg();)$p(be)}function $p(e){var t=cp(e.alternate,e,_n);e.memoizedProps=e.pendingProps,t===null?au(e):be=t}function qp(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ip(n,t,t.pendingProps,t.type,void 0,Se);break;case 11:t=ip(n,t,t.pendingProps,t.type.render,t.ref,Se);break;case 5:us(t);default:dp(n,t),t=be=Bd(t,_n),t=cp(n,t,_n)}e.memoizedProps=e.pendingProps,t===null?au(e):be=t}function yi(e,t,n,i){gn=Sa=null,us(t),ui=null,ul=0;var r=t.return;try{if(Ty(e,r,t,n,Se)){Xe=1,Xr(e,$t(n,e.current)),be=null;return}}catch(s){if(r!==null)throw be=r,s;Xe=1,Xr(e,$t(n,e.current)),be=null;return}t.flags&32768?(Ee||i===1?e=!0:pi||(Se&536870912)!==0?e=!1:(Fn=e=!0,(i===2||i===9||i===3||i===6)&&(i=zt.current,i!==null&&i.tag===13&&(i.flags|=16384))),Yp(t,e)):au(t)}function au(e){var t=e;do{if((t.flags&32768)!==0){Yp(t,Fn);return}e=t.return;var n=_y(t.alternate,t,_n);if(n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Xe===0&&(Xe=5)}function Yp(e,t){do{var n=Oy(e.alternate,e);if(n!==null){n.flags&=32767,be=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){be=e;return}be=e=n}while(e!==null);Xe=6,be=null}function Gp(e,t,n,i,r,s,d,v,E){e.cancelPendingCommit=null;do iu();while(Ie!==0);if((_e&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(s=t.lanes|t.childLanes,s|=Do,mg(e,n,s,d,v,E),e===Le&&(be=Le=null,Se=0),vi=t,ta=e,On=n,Ys=s,Gs=r,Mp=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$y(rr,function(){return Zp(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=A.T,A.T=null,r=H.p,H.p=2,d=_e,_e|=4;try{zy(e,t,n)}finally{_e=d,H.p=r,A.T=i}}Ie=1,Xp(),Vp(),Qp()}}function Xp(){if(Ie===1){Ie=0;var e=ta,t=vi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=A.T,A.T=null;var i=H.p;H.p=2;var r=_e;_e|=4;try{Tp(t,e);var s=ic,d=Ad(e.containerInfo),v=s.focusedElem,E=s.selectionRange;if(d!==v&&v&&v.ownerDocument&&zd(v.ownerDocument.documentElement,v)){if(E!==null&&zo(v)){var U=E.start,W=E.end;if(W===void 0&&(W=U),"selectionStart"in v)v.selectionStart=U,v.selectionEnd=Math.min(W,v.value.length);else{var te=v.ownerDocument||document,$=te&&te.defaultView||window;if($.getSelection){var Q=$.getSelection(),ue=v.textContent.length,de=Math.min(E.start,ue),De=E.end===void 0?de:Math.min(E.end,ue);!Q.extend&&de>De&&(d=De,De=de,de=d);var M=Od(v,de),_=Od(v,De);if(M&&_&&(Q.rangeCount!==1||Q.anchorNode!==M.node||Q.anchorOffset!==M.offset||Q.focusNode!==_.node||Q.focusOffset!==_.offset)){var L=te.createRange();L.setStart(M.node,M.offset),Q.removeAllRanges(),de>De?(Q.addRange(L),Q.extend(_.node,_.offset)):(L.setEnd(_.node,_.offset),Q.addRange(L))}}}}for(te=[],Q=v;Q=Q.parentNode;)Q.nodeType===1&&te.push({element:Q,left:Q.scrollLeft,top:Q.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<te.length;v++){var I=te[v];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}vu=!!ac,ic=ac=null}finally{_e=r,H.p=i,A.T=n}}e.current=t,Ie=2}}function Vp(){if(Ie===2){Ie=0;var e=ta,t=vi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=A.T,A.T=null;var i=H.p;H.p=2;var r=_e;_e|=4;try{bp(e,t.alternate,t)}finally{_e=r,H.p=i,A.T=n}}Ie=3}}function Qp(){if(Ie===4||Ie===3){Ie=0,rg();var e=ta,t=vi,n=On,i=Mp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ie=5:(Ie=0,vi=ta=null,Kp(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(ea=null),so(n),t=t.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Gi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=A.T,r=H.p,H.p=2,A.T=null;try{for(var s=e.onRecoverableError,d=0;d<i.length;d++){var v=i[d];s(v.value,{componentStack:v.stack})}}finally{A.T=t,H.p=r}}(On&3)!==0&&iu(),ln(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===Xs?Tl++:(Tl=0,Xs=e):Tl=0,Cl(0)}}function Kp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ll(t)))}function iu(){return Xp(),Vp(),Qp(),Zp()}function Zp(){if(Ie!==5)return!1;var e=ta,t=Ys;Ys=0;var n=so(On),i=A.T,r=H.p;try{H.p=32>n?32:n,A.T=null,n=Gs,Gs=null;var s=ta,d=On;if(Ie=0,vi=ta=null,On=0,(_e&6)!==0)throw Error(u(331));var v=_e;if(_e|=4,zp(s.current),Rp(s,s.current,d,n),_e=v,Cl(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Gi,s)}catch{}return!0}finally{H.p=r,A.T=i,Kp(e,t)}}function Jp(e,t,n){t=$t(n,t),t=ws(e.stateNode,t,2),e=Zn(e,t,2),e!==null&&(Vi(e,2),ln(e))}function je(e,t,n){if(e.tag===3)Jp(e,e,n);else for(;t!==null;){if(t.tag===3){Jp(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ea===null||!ea.has(i))){e=$t(n,e),n=Ph(2),i=Zn(t,n,2),i!==null&&(Wh(n,i,t,e),Vi(i,2),ln(i));break}}t=t.return}}function Ks(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new My;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(Bs=!0,r.add(n),e=ky.bind(null,e,t,n),t.then(e,e))}function ky(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Le===e&&(Se&n)===n&&(Xe===4||Xe===3&&(Se&62914560)===Se&&300>Tt()-Fr?(_e&2)===0&&gi(e,0):$s|=n,mi===Se&&(mi=0)),ln(e)}function Pp(e,t){t===0&&(t=Xf()),e=ya(e,t),e!==null&&(Vi(e,t),ln(e))}function Hy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Pp(e,n)}function By(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(u(314))}i!==null&&i.delete(t),Pp(e,n)}function $y(e,t){return lo(e,t)}var lu=null,bi=null,Zs=!1,ru=!1,Js=!1,aa=0;function ln(e){e!==bi&&e.next===null&&(bi===null?lu=bi=e:bi=bi.next=e),ru=!0,Zs||(Zs=!0,Yy())}function Cl(e,t){if(!Js&&ru){Js=!0;do for(var n=!1,i=lu;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var s=0;else{var d=i.suspendedLanes,v=i.pingedLanes;s=(1<<31-Rt(42|e)+1)-1,s&=r&~(d&~v),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,e0(i,s))}else s=Se,s=cr(i,i===Le?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||Xi(i,s)||(n=!0,e0(i,s));i=i.next}while(n);Js=!1}}function qy(){Wp()}function Wp(){ru=Zs=!1;var e=0;aa!==0&&Fy()&&(e=aa);for(var t=Tt(),n=null,i=lu;i!==null;){var r=i.next,s=Fp(i,t);s===0?(i.next=null,n===null?lu=r:n.next=r,r===null&&(bi=n)):(n=i,(e!==0||(s&3)!==0)&&(ru=!0)),i=r}Ie!==0&&Ie!==5||Cl(e),aa!==0&&(aa=0)}function Fp(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var d=31-Rt(s),v=1<<d,E=r[d];E===-1?((v&n)===0||(v&i)!==0)&&(r[d]=pg(v,t)):E<=t&&(e.expiredLanes|=v),s&=~v}if(t=Le,n=Se,n=cr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&ro(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Xi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&ro(i),so(n)){case 2:case 8:n=Yf;break;case 32:n=rr;break;case 268435456:n=Gf;break;default:n=rr}return i=Ip.bind(null,e),n=lo(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&ro(i),e.callbackPriority=2,e.callbackNode=null,2}function Ip(e,t){if(Ie!==0&&Ie!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(iu()&&e.callbackNode!==n)return null;var i=Se;return i=cr(e,e===Le?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Dp(e,i,t),Fp(e,Tt()),e.callbackNode!=null&&e.callbackNode===n?Ip.bind(null,e):null)}function e0(e,t){if(iu())return null;Dp(e,t,!0)}function Yy(){e2(function(){(_e&6)!==0?lo(qf,qy):Wp()})}function Ps(){if(aa===0){var e=ii;e===0&&(e=ur,ur<<=1,(ur&261888)===0&&(ur=256)),aa=e}return aa}function t0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pr(""+e)}function n0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Gy(e,t,n,i,r){if(t==="submit"&&n&&n.stateNode===r){var s=t0((r[ht]||null).action),d=i.submitter;d&&(t=(t=d[ht]||null)?t0(t.formAction):d.getAttribute("formAction"),t!==null&&(s=t,d=null));var v=new yr("action","action",null,i,r);e.push({event:v,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(aa!==0){var E=d?n0(r,d):new FormData(r);vs(n,{pending:!0,data:E,method:r.method,action:s},null,E)}}else typeof s=="function"&&(v.preventDefault(),E=d?n0(r,d):new FormData(r),vs(n,{pending:!0,data:E,method:r.method,action:s},s,E))},currentTarget:r}]})}}for(var Ws=0;Ws<No.length;Ws++){var Fs=No[Ws],Xy=Fs.toLowerCase(),Vy=Fs[0].toUpperCase()+Fs.slice(1);Jt(Xy,"on"+Vy)}Jt(Nd,"onAnimationEnd"),Jt(Dd,"onAnimationIteration"),Jt(Ld,"onAnimationStart"),Jt("dblclick","onDoubleClick"),Jt("focusin","onFocus"),Jt("focusout","onBlur"),Jt(uy,"onTransitionRun"),Jt(oy,"onTransitionStart"),Jt(sy,"onTransitionCancel"),Jt(Ud,"onTransitionEnd"),Xa("onMouseEnter",["mouseout","mouseover"]),Xa("onMouseLeave",["mouseout","mouseover"]),Xa("onPointerEnter",["pointerout","pointerover"]),Xa("onPointerLeave",["pointerout","pointerover"]),pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pa("onBeforeInput",["compositionend","keypress","textInput","paste"]),pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rl));function a0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var d=i.length-1;0<=d;d--){var v=i[d],E=v.instance,U=v.currentTarget;if(v=v.listener,E!==s&&r.isPropagationStopped())break e;s=v,r.currentTarget=U;try{s(r)}catch(W){Sr(W)}r.currentTarget=null,s=E}else for(d=0;d<i.length;d++){if(v=i[d],E=v.instance,U=v.currentTarget,v=v.listener,E!==s&&r.isPropagationStopped())break e;s=v,r.currentTarget=U;try{s(r)}catch(W){Sr(W)}r.currentTarget=null,s=E}}}}function xe(e,t){var n=t[co];n===void 0&&(n=t[co]=new Set);var i=e+"__bubble";n.has(i)||(i0(t,e,2,!1),n.add(i))}function Is(e,t,n){var i=0;t&&(i|=4),i0(n,e,i,t)}var uu="_reactListening"+Math.random().toString(36).slice(2);function ec(e){if(!e[uu]){e[uu]=!0,Wf.forEach(function(n){n!=="selectionchange"&&(Qy.has(n)||Is(n,!1,e),Is(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[uu]||(t[uu]=!0,Is("selectionchange",!1,t))}}function i0(e,t,n,i){switch(N0(t)){case 2:var r=x2;break;case 8:r=S2;break;default:r=mc}n=r.bind(null,t,n,e),r=void 0,!xo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function tc(e,t,n,i,r){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var v=i.stateNode.containerInfo;if(v===r)break;if(d===4)for(d=i.return;d!==null;){var E=d.tag;if((E===3||E===4)&&d.stateNode.containerInfo===r)return;d=d.return}for(;v!==null;){if(d=qa(v),d===null)return;if(E=d.tag,E===5||E===6||E===26||E===27){i=s=d;continue e}v=v.parentNode}}i=i.return}sd(function(){var U=s,W=yo(n),te=[];e:{var $=kd.get(e);if($!==void 0){var Q=yr,ue=e;switch(e){case"keypress":if(vr(n)===0)break e;case"keydown":case"keyup":Q=Bg;break;case"focusin":ue="focus",Q=To;break;case"focusout":ue="blur",Q=To;break;case"beforeblur":case"afterblur":Q=To;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=_g;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=Yg;break;case Nd:case Dd:case Ld:Q=Ag;break;case Ud:Q=Xg;break;case"scroll":case"scrollend":Q=Cg;break;case"wheel":Q=Qg;break;case"copy":case"cut":case"paste":Q=Mg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=pd;break;case"toggle":case"beforetoggle":Q=Zg}var de=(t&4)!==0,De=!de&&(e==="scroll"||e==="scrollend"),M=de?$!==null?$+"Capture":null:$;de=[];for(var _=U,L;_!==null;){var I=_;if(L=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||L===null||M===null||(I=Zi(_,M),I!=null&&de.push(_l(_,I,L))),De)break;_=_.return}0<de.length&&($=new Q($,ue,null,n,W),te.push({event:$,listeners:de}))}}if((t&7)===0){e:{if($=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",$&&n!==go&&(ue=n.relatedTarget||n.fromElement)&&(qa(ue)||ue[$a]))break e;if((Q||$)&&($=W.window===W?W:($=W.ownerDocument)?$.defaultView||$.parentWindow:window,Q?(ue=n.relatedTarget||n.toElement,Q=U,ue=ue?qa(ue):null,ue!==null&&(De=f(ue),de=ue.tag,ue!==De||de!==5&&de!==27&&de!==6)&&(ue=null)):(Q=null,ue=U),Q!==ue)){if(de=dd,I="onMouseLeave",M="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(de=pd,I="onPointerLeave",M="onPointerEnter",_="pointer"),De=Q==null?$:Ki(Q),L=ue==null?$:Ki(ue),$=new de(I,_+"leave",Q,n,W),$.target=De,$.relatedTarget=L,I=null,qa(W)===U&&(de=new de(M,_+"enter",ue,n,W),de.target=L,de.relatedTarget=De,I=de),De=I,Q&&ue)t:{for(de=Ky,M=Q,_=ue,L=0,I=M;I;I=de(I))L++;I=0;for(var fe=_;fe;fe=de(fe))I++;for(;0<L-I;)M=de(M),L--;for(;0<I-L;)_=de(_),I--;for(;L--;){if(M===_||_!==null&&M===_.alternate){de=M;break t}M=de(M),_=de(_)}de=null}else de=null;Q!==null&&l0(te,$,Q,de,!1),ue!==null&&De!==null&&l0(te,De,ue,de,!0)}}e:{if($=U?Ki(U):window,Q=$.nodeName&&$.nodeName.toLowerCase(),Q==="select"||Q==="input"&&$.type==="file")var Ce=wd;else if(xd($))if(Ed)Ce=iy;else{Ce=ny;var oe=ty}else Q=$.nodeName,!Q||Q.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?U&&vo(U.elementType)&&(Ce=wd):Ce=ay;if(Ce&&(Ce=Ce(e,U))){Sd(te,Ce,n,W);break e}oe&&oe(e,$,U),e==="focusout"&&U&&$.type==="number"&&U.memoizedProps.value!=null&&mo($,"number",$.value)}switch(oe=U?Ki(U):window,e){case"focusin":(xd(oe)||oe.contentEditable==="true")&&(Pa=oe,Ao=U,nl=null);break;case"focusout":nl=Ao=Pa=null;break;case"mousedown":jo=!0;break;case"contextmenu":case"mouseup":case"dragend":jo=!1,jd(te,n,W);break;case"selectionchange":if(ry)break;case"keydown":case"keyup":jd(te,n,W)}var ve;if(Ro)e:{switch(e){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Ja?yd(e,n)&&(we="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(we="onCompositionStart");we&&(md&&n.locale!=="ko"&&(Ja||we!=="onCompositionStart"?we==="onCompositionEnd"&&Ja&&(ve=cd()):(qn=W,So="value"in qn?qn.value:qn.textContent,Ja=!0)),oe=ou(U,we),0<oe.length&&(we=new hd(we,e,null,n,W),te.push({event:we,listeners:oe}),ve?we.data=ve:(ve=bd(n),ve!==null&&(we.data=ve)))),(ve=Pg?Wg(e,n):Fg(e,n))&&(we=ou(U,"onBeforeInput"),0<we.length&&(oe=new hd("onBeforeInput","beforeinput",null,n,W),te.push({event:oe,listeners:we}),oe.data=ve)),Gy(te,e,U,n,W)}a0(te,t)})}function _l(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ou(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=Zi(e,n),r!=null&&i.unshift(_l(e,r,s)),r=Zi(e,t),r!=null&&i.push(_l(e,r,s))),e.tag===3)return i;e=e.return}return[]}function Ky(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function l0(e,t,n,i,r){for(var s=t._reactName,d=[];n!==null&&n!==i;){var v=n,E=v.alternate,U=v.stateNode;if(v=v.tag,E!==null&&E===i)break;v!==5&&v!==26&&v!==27||U===null||(E=U,r?(U=Zi(n,s),U!=null&&d.unshift(_l(n,U,E))):r||(U=Zi(n,s),U!=null&&d.push(_l(n,U,E)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var Zy=/\r\n?/g,Jy=/\u0000|\uFFFD/g;function r0(e){return(typeof e=="string"?e:""+e).replace(Zy,`
`).replace(Jy,"")}function u0(e,t){return t=r0(t),r0(e)===t}function Ne(e,t,n,i,r,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Qa(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Qa(e,""+i);break;case"className":dr(e,"class",i);break;case"tabIndex":dr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":dr(e,n,i);break;case"style":ud(e,i,s);break;case"data":if(t!=="object"){dr(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=pr(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&Ne(e,t,"name",r.name,r,null),Ne(e,t,"formEncType",r.formEncType,r,null),Ne(e,t,"formMethod",r.formMethod,r,null),Ne(e,t,"formTarget",r.formTarget,r,null)):(Ne(e,t,"encType",r.encType,r,null),Ne(e,t,"method",r.method,r,null),Ne(e,t,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=pr(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=hn);break;case"onScroll":i!=null&&xe("scroll",e);break;case"onScrollEnd":i!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=pr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":xe("beforetoggle",e),xe("toggle",e),fr(e,"popover",i);break;case"xlinkActuate":dn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":dn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":dn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":dn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":dn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":dn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":dn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":dn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":dn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":fr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Eg.get(n)||n,fr(e,n,i))}}function nc(e,t,n,i,r,s){switch(n){case"style":ud(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Qa(e,i):(typeof i=="number"||typeof i=="bigint")&&Qa(e,""+i);break;case"onScroll":i!=null&&xe("scroll",e);break;case"onScrollEnd":i!=null&&xe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=hn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ff.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),s=e[ht]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,r),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,r);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):fr(e,n,i)}}}function ot(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var i=!1,r=!1,s;for(s in n)if(n.hasOwnProperty(s)){var d=n[s];if(d!=null)switch(s){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ne(e,t,s,d,n,null)}}r&&Ne(e,t,"srcSet",n.srcSet,n,null),i&&Ne(e,t,"src",n.src,n,null);return;case"input":xe("invalid",e);var v=s=d=r=null,E=null,U=null;for(i in n)if(n.hasOwnProperty(i)){var W=n[i];if(W!=null)switch(i){case"name":r=W;break;case"type":d=W;break;case"checked":E=W;break;case"defaultChecked":U=W;break;case"value":s=W;break;case"defaultValue":v=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(u(137,t));break;default:Ne(e,t,i,W,n,null)}}ad(e,s,v,E,U,d,r,!1);return;case"select":xe("invalid",e),i=d=s=null;for(r in n)if(n.hasOwnProperty(r)&&(v=n[r],v!=null))switch(r){case"value":s=v;break;case"defaultValue":d=v;break;case"multiple":i=v;default:Ne(e,t,r,v,n,null)}t=s,n=d,e.multiple=!!i,t!=null?Va(e,!!i,t,!1):n!=null&&Va(e,!!i,n,!0);return;case"textarea":xe("invalid",e),s=r=i=null;for(d in n)if(n.hasOwnProperty(d)&&(v=n[d],v!=null))switch(d){case"value":i=v;break;case"defaultValue":r=v;break;case"children":s=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(u(91));break;default:Ne(e,t,d,v,n,null)}ld(e,i,r,s);return;case"option":for(E in n)if(n.hasOwnProperty(E)&&(i=n[E],i!=null))switch(E){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ne(e,t,E,i,n,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(i=0;i<Rl.length;i++)xe(Rl[i],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in n)if(n.hasOwnProperty(U)&&(i=n[U],i!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ne(e,t,U,i,n,null)}return;default:if(vo(t)){for(W in n)n.hasOwnProperty(W)&&(i=n[W],i!==void 0&&nc(e,t,W,i,n,void 0));return}}for(v in n)n.hasOwnProperty(v)&&(i=n[v],i!=null&&Ne(e,t,v,i,n,null))}function Py(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,d=null,v=null,E=null,U=null,W=null;for(Q in n){var te=n[Q];if(n.hasOwnProperty(Q)&&te!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":E=te;default:i.hasOwnProperty(Q)||Ne(e,t,Q,null,i,te)}}for(var $ in i){var Q=i[$];if(te=n[$],i.hasOwnProperty($)&&(Q!=null||te!=null))switch($){case"type":s=Q;break;case"name":r=Q;break;case"checked":U=Q;break;case"defaultChecked":W=Q;break;case"value":d=Q;break;case"defaultValue":v=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(u(137,t));break;default:Q!==te&&Ne(e,t,$,Q,i,te)}}po(e,d,v,E,U,W,s,r);return;case"select":Q=d=v=$=null;for(s in n)if(E=n[s],n.hasOwnProperty(s)&&E!=null)switch(s){case"value":break;case"multiple":Q=E;default:i.hasOwnProperty(s)||Ne(e,t,s,null,i,E)}for(r in i)if(s=i[r],E=n[r],i.hasOwnProperty(r)&&(s!=null||E!=null))switch(r){case"value":$=s;break;case"defaultValue":v=s;break;case"multiple":d=s;default:s!==E&&Ne(e,t,r,s,i,E)}t=v,n=d,i=Q,$!=null?Va(e,!!n,$,!1):!!i!=!!n&&(t!=null?Va(e,!!n,t,!0):Va(e,!!n,n?[]:"",!1));return;case"textarea":Q=$=null;for(v in n)if(r=n[v],n.hasOwnProperty(v)&&r!=null&&!i.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Ne(e,t,v,null,i,r)}for(d in i)if(r=i[d],s=n[d],i.hasOwnProperty(d)&&(r!=null||s!=null))switch(d){case"value":$=r;break;case"defaultValue":Q=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(u(91));break;default:r!==s&&Ne(e,t,d,r,i,s)}id(e,$,Q);return;case"option":for(var ue in n)if($=n[ue],n.hasOwnProperty(ue)&&$!=null&&!i.hasOwnProperty(ue))switch(ue){case"selected":e.selected=!1;break;default:Ne(e,t,ue,null,i,$)}for(E in i)if($=i[E],Q=n[E],i.hasOwnProperty(E)&&$!==Q&&($!=null||Q!=null))switch(E){case"selected":e.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:Ne(e,t,E,$,i,Q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in n)$=n[de],n.hasOwnProperty(de)&&$!=null&&!i.hasOwnProperty(de)&&Ne(e,t,de,null,i,$);for(U in i)if($=i[U],Q=n[U],i.hasOwnProperty(U)&&$!==Q&&($!=null||Q!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(u(137,t));break;default:Ne(e,t,U,$,i,Q)}return;default:if(vo(t)){for(var De in n)$=n[De],n.hasOwnProperty(De)&&$!==void 0&&!i.hasOwnProperty(De)&&nc(e,t,De,void 0,i,$);for(W in i)$=i[W],Q=n[W],!i.hasOwnProperty(W)||$===Q||$===void 0&&Q===void 0||nc(e,t,W,$,i,Q);return}}for(var M in n)$=n[M],n.hasOwnProperty(M)&&$!=null&&!i.hasOwnProperty(M)&&Ne(e,t,M,null,i,$);for(te in i)$=i[te],Q=n[te],!i.hasOwnProperty(te)||$===Q||$==null&&Q==null||Ne(e,t,te,$,i,Q)}function o0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Wy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var r=n[i],s=r.transferSize,d=r.initiatorType,v=r.duration;if(s&&v&&o0(d)){for(d=0,v=r.responseEnd,i+=1;i<n.length;i++){var E=n[i],U=E.startTime;if(U>v)break;var W=E.transferSize,te=E.initiatorType;W&&o0(te)&&(E=E.responseEnd,d+=W*(E<v?1:(v-U)/(E-U)))}if(--i,t+=8*(s+d)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ac=null,ic=null;function su(e){return e.nodeType===9?e:e.ownerDocument}function s0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function c0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function lc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var rc=null;function Fy(){var e=window.event;return e&&e.type==="popstate"?e===rc?!1:(rc=e,!0):(rc=null,!1)}var f0=typeof setTimeout=="function"?setTimeout:void 0,Iy=typeof clearTimeout=="function"?clearTimeout:void 0,d0=typeof Promise=="function"?Promise:void 0,e2=typeof queueMicrotask=="function"?queueMicrotask:typeof d0<"u"?function(e){return d0.resolve(null).then(e).catch(t2)}:f0;function t2(e){setTimeout(function(){throw e})}function ia(e){return e==="head"}function h0(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(r),Ei(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Ol(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ol(n);for(var s=n.firstChild;s;){var d=s.nextSibling,v=s.nodeName;s[Qi]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=d}}else n==="body"&&Ol(e.ownerDocument.body);n=r}while(n);Ei(t)}function p0(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function uc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":uc(n),fo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function n2(e,t,n,i){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Qi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Vt(e.nextSibling),e===null)break}return null}function a2(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Vt(e.nextSibling),e===null))return null;return e}function m0(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Vt(e.nextSibling),e===null))return null;return e}function oc(e){return e.data==="$?"||e.data==="$~"}function sc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function i2(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var cc=null;function v0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Vt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function g0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function y0(e,t,n){switch(t=su(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Ol(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);fo(e)}var Qt=new Map,b0=new Set;function cu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var zn=H.d;H.d={f:l2,r:r2,D:u2,C:o2,L:s2,m:c2,X:d2,S:f2,M:h2};function l2(){var e=zn.f(),t=tu();return e||t}function r2(e){var t=Ya(e);t!==null&&t.tag===5&&t.type==="form"?Uh(t):zn.r(e)}var xi=typeof document>"u"?null:document;function x0(e,t,n){var i=xi;if(i&&typeof t=="string"&&t){var r=Ht(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),b0.has(r)||(b0.add(r),e={rel:e,crossOrigin:n,href:t},i.querySelector(r)===null&&(t=i.createElement("link"),ot(t,"link",e),et(t),i.head.appendChild(t)))}}function u2(e){zn.D(e),x0("dns-prefetch",e,null)}function o2(e,t){zn.C(e,t),x0("preconnect",e,t)}function s2(e,t,n){zn.L(e,t,n);var i=xi;if(i&&e&&t){var r='link[rel="preload"][as="'+Ht(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Ht(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Ht(n.imageSizes)+'"]')):r+='[href="'+Ht(e)+'"]';var s=r;switch(t){case"style":s=Si(e);break;case"script":s=wi(e)}Qt.has(s)||(e=x({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Qt.set(s,e),i.querySelector(r)!==null||t==="style"&&i.querySelector(zl(s))||t==="script"&&i.querySelector(Al(s))||(t=i.createElement("link"),ot(t,"link",e),et(t),i.head.appendChild(t)))}}function c2(e,t){zn.m(e,t);var n=xi;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Ht(i)+'"][href="'+Ht(e)+'"]',s=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=wi(e)}if(!Qt.has(s)&&(e=x({rel:"modulepreload",href:e},t),Qt.set(s,e),n.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Al(s)))return}i=n.createElement("link"),ot(i,"link",e),et(i),n.head.appendChild(i)}}}function f2(e,t,n){zn.S(e,t,n);var i=xi;if(i&&e){var r=Ga(i).hoistableStyles,s=Si(e);t=t||"default";var d=r.get(s);if(!d){var v={loading:0,preload:null};if(d=i.querySelector(zl(s)))v.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Qt.get(s))&&fc(e,n);var E=d=i.createElement("link");et(E),ot(E,"link",e),E._p=new Promise(function(U,W){E.onload=U,E.onerror=W}),E.addEventListener("load",function(){v.loading|=1}),E.addEventListener("error",function(){v.loading|=2}),v.loading|=4,fu(d,t,i)}d={type:"stylesheet",instance:d,count:1,state:v},r.set(s,d)}}}function d2(e,t){zn.X(e,t);var n=xi;if(n&&e){var i=Ga(n).hoistableScripts,r=wi(e),s=i.get(r);s||(s=n.querySelector(Al(r)),s||(e=x({src:e,async:!0},t),(t=Qt.get(r))&&dc(e,t),s=n.createElement("script"),et(s),ot(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function h2(e,t){zn.M(e,t);var n=xi;if(n&&e){var i=Ga(n).hoistableScripts,r=wi(e),s=i.get(r);s||(s=n.querySelector(Al(r)),s||(e=x({src:e,async:!0,type:"module"},t),(t=Qt.get(r))&&dc(e,t),s=n.createElement("script"),et(s),ot(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function S0(e,t,n,i){var r=(r=he.current)?cu(r):null;if(!r)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Si(n.href),n=Ga(r).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Si(n.href);var s=Ga(r).hoistableStyles,d=s.get(e);if(d||(r=r.ownerDocument||r,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,d),(s=r.querySelector(zl(e)))&&!s._p&&(d.instance=s,d.state.loading=5),Qt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Qt.set(e,n),s||p2(r,e,n,d.state))),t&&i===null)throw Error(u(528,""));return d}if(t&&i!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=wi(n),n=Ga(r).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Si(e){return'href="'+Ht(e)+'"'}function zl(e){return'link[rel="stylesheet"]['+e+"]"}function w0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function p2(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ot(t,"link",n),et(t),e.head.appendChild(t))}function wi(e){return'[src="'+Ht(e)+'"]'}function Al(e){return"script[async]"+e}function E0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ht(n.href)+'"]');if(i)return t.instance=i,et(i),i;var r=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),et(i),ot(i,"style",r),fu(i,n.precedence,e),t.instance=i;case"stylesheet":r=Si(n.href);var s=e.querySelector(zl(r));if(s)return t.state.loading|=4,t.instance=s,et(s),s;i=w0(n),(r=Qt.get(r))&&fc(i,r),s=(e.ownerDocument||e).createElement("link"),et(s);var d=s;return d._p=new Promise(function(v,E){d.onload=v,d.onerror=E}),ot(s,"link",i),t.state.loading|=4,fu(s,n.precedence,e),t.instance=s;case"script":return s=wi(n.src),(r=e.querySelector(Al(s)))?(t.instance=r,et(r),r):(i=n,(r=Qt.get(s))&&(i=x({},n),dc(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),et(r),ot(r,"link",i),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,fu(i,n.precedence,e));return t.instance}function fu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,s=r,d=0;d<i.length;d++){var v=i[d];if(v.dataset.precedence===t)s=v;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function fc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function dc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var du=null;function T0(e,t,n){if(du===null){var i=new Map,r=du=new Map;r.set(n,i)}else r=du,i=r.get(n),i||(i=new Map,r.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var s=n[r];if(!(s[Qi]||s[it]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var d=s.getAttribute(t)||"";d=e+d;var v=i.get(d);v?v.push(s):i.set(d,[s])}}return i}function C0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function m2(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function R0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function v2(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=Si(i.href),s=t.querySelector(zl(r));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=hu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,et(s);return}s=t.ownerDocument||t,i=w0(i),(r=Qt.get(r))&&fc(i,r),s=s.createElement("link"),et(s);var d=s;d._p=new Promise(function(v,E){d.onload=v,d.onerror=E}),ot(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=hu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var hc=0;function g2(e,t){return e.stylesheets&&e.count===0&&mu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&mu(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&hc===0&&(hc=62500*Wy());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&mu(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>hc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function hu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)mu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var pu=null;function mu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,pu=new Map,t.forEach(y2,e),pu=null,hu.call(e))}function y2(e,t){if(!(t.state.loading&4)){var n=pu.get(e);if(n)var i=n.get(null);else{n=new Map,pu.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var d=r[s];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),i=d)}i&&n.set(null,i)}r=t.instance,d=r.getAttribute("data-precedence"),s=n.get(d)||i,s===i&&n.set(null,r),n.set(d,r),this.count++,i=hu.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var jl={$$typeof:B,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function b2(e,t,n,i,r,s,d,v,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=uo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uo(0),this.hiddenUpdates=uo(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function _0(e,t,n,i,r,s,d,v,E,U,W,te){return e=new b2(e,t,n,d,E,U,W,te,v),t=1,s===!0&&(t|=24),s=Ot(3,null,null,t),e.current=s,s.stateNode=e,t=Qo(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},Po(s),e}function O0(e){return e?(e=Ia,e):Ia}function z0(e,t,n,i,r,s){r=O0(r),i.context===null?i.context=r:i.pendingContext=r,i=Kn(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Zn(e,i,t),n!==null&&(bt(n,e,t),sl(n,e,t))}function A0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function pc(e,t){A0(e,t),(e=e.alternate)&&A0(e,t)}function j0(e){if(e.tag===13||e.tag===31){var t=ya(e,67108864);t!==null&&bt(t,e,67108864),pc(e,67108864)}}function M0(e){if(e.tag===13||e.tag===31){var t=Nt();t=oo(t);var n=ya(e,t);n!==null&&bt(n,e,t),pc(e,t)}}var vu=!0;function x2(e,t,n,i){var r=A.T;A.T=null;var s=H.p;try{H.p=2,mc(e,t,n,i)}finally{H.p=s,A.T=r}}function S2(e,t,n,i){var r=A.T;A.T=null;var s=H.p;try{H.p=8,mc(e,t,n,i)}finally{H.p=s,A.T=r}}function mc(e,t,n,i){if(vu){var r=vc(i);if(r===null)tc(e,t,i,gu,n),D0(e,i);else if(E2(r,e,t,n,i))i.stopPropagation();else if(D0(e,i),t&4&&-1<w2.indexOf(e)){for(;r!==null;){var s=Ya(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var d=ha(s.pendingLanes);if(d!==0){var v=s;for(v.pendingLanes|=2,v.entangledLanes|=2;d;){var E=1<<31-Rt(d);v.entanglements[1]|=E,d&=~E}ln(s),(_e&6)===0&&(Ir=Tt()+500,Cl(0))}}break;case 31:case 13:v=ya(s,2),v!==null&&bt(v,s,2),tu(),pc(s,2)}if(s=vc(i),s===null&&tc(e,t,i,gu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else tc(e,t,i,null,n)}}function vc(e){return e=yo(e),gc(e)}var gu=null;function gc(e){if(gu=null,e=qa(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return gu=e,null}function N0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ug()){case qf:return 2;case Yf:return 8;case rr:case og:return 32;case Gf:return 268435456;default:return 32}default:return 32}}var yc=!1,la=null,ra=null,ua=null,Ml=new Map,Nl=new Map,oa=[],w2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function D0(e,t){switch(e){case"focusin":case"focusout":la=null;break;case"dragenter":case"dragleave":ra=null;break;case"mouseover":case"mouseout":ua=null;break;case"pointerover":case"pointerout":Ml.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nl.delete(t.pointerId)}}function Dl(e,t,n,i,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},t!==null&&(t=Ya(t),t!==null&&j0(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function E2(e,t,n,i,r){switch(t){case"focusin":return la=Dl(la,e,t,n,i,r),!0;case"dragenter":return ra=Dl(ra,e,t,n,i,r),!0;case"mouseover":return ua=Dl(ua,e,t,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ml.set(s,Dl(Ml.get(s)||null,e,t,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Nl.set(s,Dl(Nl.get(s)||null,e,t,n,i,r)),!0}return!1}function L0(e){var t=qa(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,Jf(e.priority,function(){M0(n)});return}}else if(t===31){if(t=y(n),t!==null){e.blockedOn=t,Jf(e.priority,function(){M0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vc(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);go=i,n.target.dispatchEvent(i),go=null}else return t=Ya(n),t!==null&&j0(t),e.blockedOn=n,!1;t.shift()}return!0}function U0(e,t,n){yu(e)&&n.delete(t)}function T2(){yc=!1,la!==null&&yu(la)&&(la=null),ra!==null&&yu(ra)&&(ra=null),ua!==null&&yu(ua)&&(ua=null),Ml.forEach(U0),Nl.forEach(U0)}function bu(e,t){e.blockedOn===t&&(e.blockedOn=null,yc||(yc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,T2)))}var xu=null;function k0(e){xu!==e&&(xu=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){xu===e&&(xu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],r=e[t+2];if(typeof i!="function"){if(gc(i||n)===null)continue;break}var s=Ya(n);s!==null&&(e.splice(t,3),t-=3,vs(s,{pending:!0,data:r,method:n.method,action:i},i,r))}}))}function Ei(e){function t(E){return bu(E,e)}la!==null&&bu(la,e),ra!==null&&bu(ra,e),ua!==null&&bu(ua,e),Ml.forEach(t),Nl.forEach(t);for(var n=0;n<oa.length;n++){var i=oa[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<oa.length&&(n=oa[0],n.blockedOn===null);)L0(n),n.blockedOn===null&&oa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var r=n[i],s=n[i+1],d=r[ht]||null;if(typeof s=="function")d||k0(n);else if(d){var v=null;if(s&&s.hasAttribute("formAction")){if(r=s,d=s[ht]||null)v=d.formAction;else if(gc(r)!==null)continue}else v=d.action;typeof v=="function"?n[i+1]=v:(n.splice(i,3),i-=3),k0(n)}}}function H0(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(d){return r=d})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function bc(e){this._internalRoot=e}Su.prototype.render=bc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,i=Nt();z0(n,i,e,t,null,null)},Su.prototype.unmount=bc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;z0(e.current,2,null,e,null,null),tu(),t[$a]=null}};function Su(e){this._internalRoot=e}Su.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<oa.length&&t!==0&&t<oa[n].priority;n++);oa.splice(n,0,e),n===0&&L0(e)}};var B0=l.version;if(B0!=="19.2.0")throw Error(u(527,B0,"19.2.0"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=m(t),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var C2={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wu.isDisabled&&wu.supportsFiber)try{Gi=wu.inject(C2),Ct=wu}catch{}}return Ul.createRoot=function(e,t){if(!c(e))throw Error(u(299));var n=!1,i="",r=Qh,s=Kh,d=Zh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=_0(e,1,!1,null,null,n,i,null,r,s,d,H0),e[$a]=t.current,ec(e),new bc(t)},Ul.hydrateRoot=function(e,t,n){if(!c(e))throw Error(u(299));var i=!1,r="",s=Qh,d=Kh,v=Zh,E=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.formState!==void 0&&(E=n.formState)),t=_0(e,1,!0,t,n??null,i,r,E,s,d,v,H0),t.context=O0(null),n=t.current,i=Nt(),i=oo(i),r=Kn(i),r.callback=null,Zn(n,r,i),n=i,t.current.lanes=n,Vi(t,n),ln(t),e[$a]=t.current,ec(e),new Su(t)},Ul.version="19.2.0",Ul}var J0;function D2(){if(J0)return wc.exports;J0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),wc.exports=N2(),wc.exports}var L2=D2();const U2=tr(L2);/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var P0="popstate";function k2(a={}){function l(u,c){let{pathname:f,search:h,hash:y}=u.location;return ef("",{pathname:f,search:h,hash:y},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function o(u,c){return typeof c=="string"?c:Wl(c)}return B2(l,o,null,a)}function Ye(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function sn(a,l){if(!a){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function H2(){return Math.random().toString(36).substring(2,10)}function W0(a,l){return{usr:a.state,key:a.key,idx:l}}function ef(a,l,o=null,u){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof l=="string"?Ui(l):l,state:o,key:l&&l.key||u||H2()}}function Wl({pathname:a="/",search:l="",hash:o=""}){return l&&l!=="?"&&(a+=l.charAt(0)==="?"?l:"?"+l),o&&o!=="#"&&(a+=o.charAt(0)==="#"?o:"#"+o),a}function Ui(a){let l={};if(a){let o=a.indexOf("#");o>=0&&(l.hash=a.substring(o),a=a.substring(0,o));let u=a.indexOf("?");u>=0&&(l.search=a.substring(u),a=a.substring(0,u)),a&&(l.pathname=a)}return l}function B2(a,l,o,u={}){let{window:c=document.defaultView,v5Compat:f=!1}=u,h=c.history,y="POP",g=null,m=S();m==null&&(m=0,h.replaceState({...h.state,idx:m},""));function S(){return(h.state||{idx:null}).idx}function x(){y="POP";let Y=S(),X=Y==null?null:Y-m;m=Y,g&&g({action:y,location:q.location,delta:X})}function w(Y,X){y="PUSH";let z=ef(q.location,Y,X);m=S()+1;let B=W0(z,m),F=q.createHref(z);try{h.pushState(B,"",F)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;c.location.assign(F)}f&&g&&g({action:y,location:q.location,delta:1})}function j(Y,X){y="REPLACE";let z=ef(q.location,Y,X);m=S();let B=W0(z,m),F=q.createHref(z);h.replaceState(B,"",F),f&&g&&g({action:y,location:q.location,delta:0})}function R(Y){return $2(Y)}let q={get action(){return y},get location(){return a(c,h)},listen(Y){if(g)throw new Error("A history only accepts one active listener");return c.addEventListener(P0,x),g=Y,()=>{c.removeEventListener(P0,x),g=null}},createHref(Y){return l(c,Y)},createURL:R,encodeLocation(Y){let X=R(Y);return{pathname:X.pathname,search:X.search,hash:X.hash}},push:w,replace:j,go(Y){return h.go(Y)}};return q}function $2(a,l=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Ye(o,"No window.location.(origin|href) available to create URL");let u=typeof a=="string"?a:Wl(a);return u=u.replace(/ $/,"%20"),!l&&u.startsWith("//")&&(u=o+u),new URL(u,o)}function v1(a,l,o="/"){return q2(a,l,o,!1)}function q2(a,l,o,u){let c=typeof l=="string"?Ui(l):l,f=Ln(c.pathname||"/",o);if(f==null)return null;let h=g1(a);Y2(h);let y=null;for(let g=0;y==null&&g<h.length;++g){let m=I2(f);y=W2(h[g],m,u)}return y}function g1(a,l=[],o=[],u="",c=!1){let f=(h,y,g=c,m)=>{let S={relativePath:m===void 0?h.path||"":m,caseSensitive:h.caseSensitive===!0,childrenIndex:y,route:h};if(S.relativePath.startsWith("/")){if(!S.relativePath.startsWith(u)&&g)return;Ye(S.relativePath.startsWith(u),`Absolute route path "${S.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),S.relativePath=S.relativePath.slice(u.length)}let x=Nn([u,S.relativePath]),w=o.concat(S);h.children&&h.children.length>0&&(Ye(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),g1(h.children,l,w,x,g)),!(h.path==null&&!h.index)&&l.push({path:x,score:J2(x,h.index),routesMeta:w})};return a.forEach((h,y)=>{if(h.path===""||!h.path?.includes("?"))f(h,y);else for(let g of y1(h.path))f(h,y,!0,g)}),l}function y1(a){let l=a.split("/");if(l.length===0)return[];let[o,...u]=l,c=o.endsWith("?"),f=o.replace(/\?$/,"");if(u.length===0)return c?[f,""]:[f];let h=y1(u.join("/")),y=[];return y.push(...h.map(g=>g===""?f:[f,g].join("/"))),c&&y.push(...h),y.map(g=>a.startsWith("/")&&g===""?"/":g)}function Y2(a){a.sort((l,o)=>l.score!==o.score?o.score-l.score:P2(l.routesMeta.map(u=>u.childrenIndex),o.routesMeta.map(u=>u.childrenIndex)))}var G2=/^:[\w-]+$/,X2=3,V2=2,Q2=1,K2=10,Z2=-2,F0=a=>a==="*";function J2(a,l){let o=a.split("/"),u=o.length;return o.some(F0)&&(u+=Z2),l&&(u+=V2),o.filter(c=>!F0(c)).reduce((c,f)=>c+(G2.test(f)?X2:f===""?Q2:K2),u)}function P2(a,l){return a.length===l.length&&a.slice(0,-1).every((u,c)=>u===l[c])?a[a.length-1]-l[l.length-1]:0}function W2(a,l,o=!1){let{routesMeta:u}=a,c={},f="/",h=[];for(let y=0;y<u.length;++y){let g=u[y],m=y===u.length-1,S=f==="/"?l:l.slice(f.length)||"/",x=ku({path:g.relativePath,caseSensitive:g.caseSensitive,end:m},S),w=g.route;if(!x&&m&&o&&!u[u.length-1].route.index&&(x=ku({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},S)),!x)return null;Object.assign(c,x.params),h.push({params:c,pathname:Nn([f,x.pathname]),pathnameBase:ab(Nn([f,x.pathnameBase])),route:w}),x.pathnameBase!=="/"&&(f=Nn([f,x.pathnameBase]))}return h}function ku(a,l){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[o,u]=F2(a.path,a.caseSensitive,a.end),c=l.match(o);if(!c)return null;let f=c[0],h=f.replace(/(.)\/+$/,"$1"),y=c.slice(1);return{params:u.reduce((m,{paramName:S,isOptional:x},w)=>{if(S==="*"){let R=y[w]||"";h=f.slice(0,f.length-R.length).replace(/(.)\/+$/,"$1")}const j=y[w];return x&&!j?m[S]=void 0:m[S]=(j||"").replace(/%2F/g,"/"),m},{}),pathname:f,pathnameBase:h,pattern:a}}function F2(a,l=!1,o=!0){sn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let u=[],c="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,y,g)=>(u.push({paramName:y,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(u.push({paramName:"*"}),c+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?c+="\\/*$":a!==""&&a!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,l?void 0:"i"),u]}function I2(a){try{return a.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return sn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),a}}function Ln(a,l){if(l==="/")return a;if(!a.toLowerCase().startsWith(l.toLowerCase()))return null;let o=l.endsWith("/")?l.length-1:l.length,u=a.charAt(o);return u&&u!=="/"?null:a.slice(o)||"/"}function eb(a,l="/"){let{pathname:o,search:u="",hash:c=""}=typeof a=="string"?Ui(a):a;return{pathname:o?o.startsWith("/")?o:tb(o,l):l,search:ib(u),hash:lb(c)}}function tb(a,l){let o=l.replace(/\/+$/,"").split("/");return a.split("/").forEach(c=>{c===".."?o.length>1&&o.pop():c!=="."&&o.push(c)}),o.length>1?o.join("/"):"/"}function Rc(a,l,o,u){return`Cannot include a '${a}' character in a manually specified \`to.${l}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function nb(a){return a.filter((l,o)=>o===0||l.route.path&&l.route.path.length>0)}function b1(a){let l=nb(a);return l.map((o,u)=>u===l.length-1?o.pathname:o.pathnameBase)}function x1(a,l,o,u=!1){let c;typeof a=="string"?c=Ui(a):(c={...a},Ye(!c.pathname||!c.pathname.includes("?"),Rc("?","pathname","search",c)),Ye(!c.pathname||!c.pathname.includes("#"),Rc("#","pathname","hash",c)),Ye(!c.search||!c.search.includes("#"),Rc("#","search","hash",c)));let f=a===""||c.pathname==="",h=f?"/":c.pathname,y;if(h==null)y=o;else{let x=l.length-1;if(!u&&h.startsWith("..")){let w=h.split("/");for(;w[0]==="..";)w.shift(),x-=1;c.pathname=w.join("/")}y=x>=0?l[x]:"/"}let g=eb(c,y),m=h&&h!=="/"&&h.endsWith("/"),S=(f||h===".")&&o.endsWith("/");return!g.pathname.endsWith("/")&&(m||S)&&(g.pathname+="/"),g}var Nn=a=>a.join("/").replace(/\/\/+/g,"/"),ab=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),ib=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,lb=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function rb(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var S1=["POST","PUT","PATCH","DELETE"];new Set(S1);var ub=["GET",...S1];new Set(ub);var ki=b.createContext(null);ki.displayName="DataRouter";var Vu=b.createContext(null);Vu.displayName="DataRouterState";b.createContext(!1);var w1=b.createContext({isTransitioning:!1});w1.displayName="ViewTransition";var ob=b.createContext(new Map);ob.displayName="Fetchers";var sb=b.createContext(null);sb.displayName="Await";var cn=b.createContext(null);cn.displayName="Navigation";var nr=b.createContext(null);nr.displayName="Location";var Un=b.createContext({outlet:null,matches:[],isDataRoute:!1});Un.displayName="Route";var gf=b.createContext(null);gf.displayName="RouteError";function cb(a,{relative:l}={}){Ye(ar(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:u}=b.useContext(cn),{hash:c,pathname:f,search:h}=ir(a,{relative:l}),y=f;return o!=="/"&&(y=f==="/"?o:Nn([o,f])),u.createHref({pathname:y,search:h,hash:c})}function ar(){return b.useContext(nr)!=null}function kn(){return Ye(ar(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(nr).location}var E1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function T1(a){b.useContext(cn).static||b.useLayoutEffect(a)}function yf(){let{isDataRoute:a}=b.useContext(Un);return a?Eb():fb()}function fb(){Ye(ar(),"useNavigate() may be used only in the context of a <Router> component.");let a=b.useContext(ki),{basename:l,navigator:o}=b.useContext(cn),{matches:u}=b.useContext(Un),{pathname:c}=kn(),f=JSON.stringify(b1(u)),h=b.useRef(!1);return T1(()=>{h.current=!0}),b.useCallback((g,m={})=>{if(sn(h.current,E1),!h.current)return;if(typeof g=="number"){o.go(g);return}let S=x1(g,JSON.parse(f),c,m.relative==="path");a==null&&l!=="/"&&(S.pathname=S.pathname==="/"?l:Nn([l,S.pathname])),(m.replace?o.replace:o.push)(S,m.state,m)},[l,o,f,c,a])}b.createContext(null);function ir(a,{relative:l}={}){let{matches:o}=b.useContext(Un),{pathname:u}=kn(),c=JSON.stringify(b1(o));return b.useMemo(()=>x1(a,JSON.parse(c),u,l==="path"),[a,c,u,l])}function db(a,l){return C1(a,l)}function C1(a,l,o,u,c){Ye(ar(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=b.useContext(cn),{matches:h}=b.useContext(Un),y=h[h.length-1],g=y?y.params:{},m=y?y.pathname:"/",S=y?y.pathnameBase:"/",x=y&&y.route;{let z=x&&x.path||"";R1(m,!x||z.endsWith("*")||z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)}let w=kn(),j;if(l){let z=typeof l=="string"?Ui(l):l;Ye(S==="/"||z.pathname?.startsWith(S),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${z.pathname}" was given in the \`location\` prop.`),j=z}else j=w;let R=j.pathname||"/",q=R;if(S!=="/"){let z=S.replace(/^\//,"").split("/");q="/"+R.replace(/^\//,"").split("/").slice(z.length).join("/")}let Y=v1(a,{pathname:q});sn(x||Y!=null,`No routes matched location "${j.pathname}${j.search}${j.hash}" `),sn(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${j.pathname}${j.search}${j.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=gb(Y&&Y.map(z=>Object.assign({},z,{params:Object.assign({},g,z.params),pathname:Nn([S,f.encodeLocation?f.encodeLocation(z.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?S:Nn([S,f.encodeLocation?f.encodeLocation(z.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:z.pathnameBase])})),h,o,u,c);return l&&X?b.createElement(nr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...j},navigationType:"POP"}},X):X}function hb(){let a=wb(),l=rb(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),o=a instanceof Error?a.stack:null,u="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:u},f={padding:"2px 4px",backgroundColor:u},h=null;return console.error("Error handled by React Router default ErrorBoundary:",a),h=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:f},"ErrorBoundary")," or"," ",b.createElement("code",{style:f},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},l),o?b.createElement("pre",{style:c},o):null,h)}var pb=b.createElement(hb,null),mb=class extends b.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,l){return l.location!==a.location||l.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:l.error,location:l.location,revalidation:a.revalidation||l.revalidation}}componentDidCatch(a,l){this.props.unstable_onError?this.props.unstable_onError(a,l):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?b.createElement(Un.Provider,{value:this.props.routeContext},b.createElement(gf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function vb({routeContext:a,match:l,children:o}){let u=b.useContext(ki);return u&&u.static&&u.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=l.route.id),b.createElement(Un.Provider,{value:a},o)}function gb(a,l=[],o=null,u=null,c=null){if(a==null){if(!o)return null;if(o.errors)a=o.matches;else if(l.length===0&&!o.initialized&&o.matches.length>0)a=o.matches;else return null}let f=a,h=o?.errors;if(h!=null){let m=f.findIndex(S=>S.route.id&&h?.[S.route.id]!==void 0);Ye(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),f=f.slice(0,Math.min(f.length,m+1))}let y=!1,g=-1;if(o)for(let m=0;m<f.length;m++){let S=f[m];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(g=m),S.route.id){let{loaderData:x,errors:w}=o,j=S.route.loader&&!x.hasOwnProperty(S.route.id)&&(!w||w[S.route.id]===void 0);if(S.route.lazy||j){y=!0,g>=0?f=f.slice(0,g+1):f=[f[0]];break}}}return f.reduceRight((m,S,x)=>{let w,j=!1,R=null,q=null;o&&(w=h&&S.route.id?h[S.route.id]:void 0,R=S.route.errorElement||pb,y&&(g<0&&x===0?(R1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),j=!0,q=null):g===x&&(j=!0,q=S.route.hydrateFallbackElement||null)));let Y=l.concat(f.slice(0,x+1)),X=()=>{let z;return w?z=R:j?z=q:S.route.Component?z=b.createElement(S.route.Component,null):S.route.element?z=S.route.element:z=m,b.createElement(vb,{match:S,routeContext:{outlet:m,matches:Y,isDataRoute:o!=null},children:z})};return o&&(S.route.ErrorBoundary||S.route.errorElement||x===0)?b.createElement(mb,{location:o.location,revalidation:o.revalidation,component:R,error:w,children:X(),routeContext:{outlet:null,matches:Y,isDataRoute:!0},unstable_onError:u}):X()},null)}function bf(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yb(a){let l=b.useContext(ki);return Ye(l,bf(a)),l}function bb(a){let l=b.useContext(Vu);return Ye(l,bf(a)),l}function xb(a){let l=b.useContext(Un);return Ye(l,bf(a)),l}function xf(a){let l=xb(a),o=l.matches[l.matches.length-1];return Ye(o.route.id,`${a} can only be used on routes that contain a unique "id"`),o.route.id}function Sb(){return xf("useRouteId")}function wb(){let a=b.useContext(gf),l=bb("useRouteError"),o=xf("useRouteError");return a!==void 0?a:l.errors?.[o]}function Eb(){let{router:a}=yb("useNavigate"),l=xf("useNavigate"),o=b.useRef(!1);return T1(()=>{o.current=!0}),b.useCallback(async(c,f={})=>{sn(o.current,E1),o.current&&(typeof c=="number"?a.navigate(c):await a.navigate(c,{fromRouteId:l,...f}))},[a,l])}var I0={};function R1(a,l,o){!l&&!I0[a]&&(I0[a]=!0,sn(!1,o))}b.memo(Tb);function Tb({routes:a,future:l,state:o,unstable_onError:u}){return C1(a,void 0,o,u,l)}function ja(a){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Cb({basename:a="/",children:l=null,location:o,navigationType:u="POP",navigator:c,static:f=!1}){Ye(!ar(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=a.replace(/^\/*/,"/"),y=b.useMemo(()=>({basename:h,navigator:c,static:f,future:{}}),[h,c,f]);typeof o=="string"&&(o=Ui(o));let{pathname:g="/",search:m="",hash:S="",state:x=null,key:w="default"}=o,j=b.useMemo(()=>{let R=Ln(g,h);return R==null?null:{location:{pathname:R,search:m,hash:S,state:x,key:w},navigationType:u}},[h,g,m,S,x,w,u]);return sn(j!=null,`<Router basename="${h}"> is not able to match the URL "${g}${m}${S}" because it does not start with the basename, so the <Router> won't render anything.`),j==null?null:b.createElement(cn.Provider,{value:y},b.createElement(nr.Provider,{children:l,value:j}))}function Rb({children:a,location:l}){return db(tf(a),l)}function tf(a,l=[]){let o=[];return b.Children.forEach(a,(u,c)=>{if(!b.isValidElement(u))return;let f=[...l,c];if(u.type===b.Fragment){o.push.apply(o,tf(u.props.children,f));return}Ye(u.type===ja,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!u.props.index||!u.props.children,"An index route cannot have child routes.");let h={id:u.props.id||f.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(h.children=tf(u.props.children,f)),o.push(h)}),o}var Au="get",ju="application/x-www-form-urlencoded";function Qu(a){return a!=null&&typeof a.tagName=="string"}function _b(a){return Qu(a)&&a.tagName.toLowerCase()==="button"}function Ob(a){return Qu(a)&&a.tagName.toLowerCase()==="form"}function zb(a){return Qu(a)&&a.tagName.toLowerCase()==="input"}function Ab(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function jb(a,l){return a.button===0&&(!l||l==="_self")&&!Ab(a)}var Eu=null;function Mb(){if(Eu===null)try{new FormData(document.createElement("form"),0),Eu=!1}catch{Eu=!0}return Eu}var Nb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _c(a){return a!=null&&!Nb.has(a)?(sn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ju}"`),null):a}function Db(a,l){let o,u,c,f,h;if(Ob(a)){let y=a.getAttribute("action");u=y?Ln(y,l):null,o=a.getAttribute("method")||Au,c=_c(a.getAttribute("enctype"))||ju,f=new FormData(a)}else if(_b(a)||zb(a)&&(a.type==="submit"||a.type==="image")){let y=a.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=a.getAttribute("formaction")||y.getAttribute("action");if(u=g?Ln(g,l):null,o=a.getAttribute("formmethod")||y.getAttribute("method")||Au,c=_c(a.getAttribute("formenctype"))||_c(y.getAttribute("enctype"))||ju,f=new FormData(y,a),!Mb()){let{name:m,type:S,value:x}=a;if(S==="image"){let w=m?`${m}.`:"";f.append(`${w}x`,"0"),f.append(`${w}y`,"0")}else m&&f.append(m,x)}}else{if(Qu(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Au,u=null,c=ju,h=a}return f&&c==="text/plain"&&(h=f,f=void 0),{action:u,method:o.toLowerCase(),encType:c,formData:f,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Sf(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function Lb(a,l,o){let u=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return u.pathname==="/"?u.pathname=`_root.${o}`:l&&Ln(u.pathname,l)==="/"?u.pathname=`${l.replace(/\/$/,"")}/_root.${o}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${o}`,u}async function Ub(a,l){if(a.id in l)return l[a.id];try{let o=await import(a.module);return l[a.id]=o,o}catch(o){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function kb(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Hb(a,l,o){let u=await Promise.all(a.map(async c=>{let f=l.routes[c.route.id];if(f){let h=await Ub(f,o);return h.links?h.links():[]}return[]}));return Yb(u.flat(1).filter(kb).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function em(a,l,o,u,c,f){let h=(g,m)=>o[m]?g.route.id!==o[m].route.id:!0,y=(g,m)=>o[m].pathname!==g.pathname||o[m].route.path?.endsWith("*")&&o[m].params["*"]!==g.params["*"];return f==="assets"?l.filter((g,m)=>h(g,m)||y(g,m)):f==="data"?l.filter((g,m)=>{let S=u.routes[g.route.id];if(!S||!S.hasLoader)return!1;if(h(g,m)||y(g,m))return!0;if(g.route.shouldRevalidate){let x=g.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function Bb(a,l,{includeHydrateFallback:o}={}){return $b(a.map(u=>{let c=l.routes[u.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),o&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function $b(a){return[...new Set(a)]}function qb(a){let l={},o=Object.keys(a).sort();for(let u of o)l[u]=a[u];return l}function Yb(a,l){let o=new Set;return new Set(l),a.reduce((u,c)=>{let f=JSON.stringify(qb(c));return o.has(f)||(o.add(f),u.push({key:f,link:c})),u},[])}function _1(){let a=b.useContext(ki);return Sf(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function Gb(){let a=b.useContext(Vu);return Sf(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var wf=b.createContext(void 0);wf.displayName="FrameworkContext";function O1(){let a=b.useContext(wf);return Sf(a,"You must render this element inside a <HydratedRouter> element"),a}function Xb(a,l){let o=b.useContext(wf),[u,c]=b.useState(!1),[f,h]=b.useState(!1),{onFocus:y,onBlur:g,onMouseEnter:m,onMouseLeave:S,onTouchStart:x}=l,w=b.useRef(null);b.useEffect(()=>{if(a==="render"&&h(!0),a==="viewport"){let q=X=>{X.forEach(z=>{h(z.isIntersecting)})},Y=new IntersectionObserver(q,{threshold:.5});return w.current&&Y.observe(w.current),()=>{Y.disconnect()}}},[a]),b.useEffect(()=>{if(u){let q=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(q)}}},[u]);let j=()=>{c(!0)},R=()=>{c(!1),h(!1)};return o?a!=="intent"?[f,w,{}]:[f,w,{onFocus:kl(y,j),onBlur:kl(g,R),onMouseEnter:kl(m,j),onMouseLeave:kl(S,R),onTouchStart:kl(x,j)}]:[!1,w,{}]}function kl(a,l){return o=>{a&&a(o),o.defaultPrevented||l(o)}}function Vb({page:a,...l}){let{router:o}=_1(),u=b.useMemo(()=>v1(o.routes,a,o.basename),[o.routes,a,o.basename]);return u?b.createElement(Kb,{page:a,matches:u,...l}):null}function Qb(a){let{manifest:l,routeModules:o}=O1(),[u,c]=b.useState([]);return b.useEffect(()=>{let f=!1;return Hb(a,l,o).then(h=>{f||c(h)}),()=>{f=!0}},[a,l,o]),u}function Kb({page:a,matches:l,...o}){let u=kn(),{manifest:c,routeModules:f}=O1(),{basename:h}=_1(),{loaderData:y,matches:g}=Gb(),m=b.useMemo(()=>em(a,l,g,c,u,"data"),[a,l,g,c,u]),S=b.useMemo(()=>em(a,l,g,c,u,"assets"),[a,l,g,c,u]),x=b.useMemo(()=>{if(a===u.pathname+u.search+u.hash)return[];let R=new Set,q=!1;if(l.forEach(X=>{let z=c.routes[X.route.id];!z||!z.hasLoader||(!m.some(B=>B.route.id===X.route.id)&&X.route.id in y&&f[X.route.id]?.shouldRevalidate||z.hasClientLoader?q=!0:R.add(X.route.id))}),R.size===0)return[];let Y=Lb(a,h,"data");return q&&R.size>0&&Y.searchParams.set("_routes",l.filter(X=>R.has(X.route.id)).map(X=>X.route.id).join(",")),[Y.pathname+Y.search]},[h,y,u,c,m,l,a,f]),w=b.useMemo(()=>Bb(S,c),[S,c]),j=Qb(S);return b.createElement(b.Fragment,null,x.map(R=>b.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...o})),w.map(R=>b.createElement("link",{key:R,rel:"modulepreload",href:R,...o})),j.map(({key:R,link:q})=>b.createElement("link",{key:R,nonce:o.nonce,...q})))}function Zb(...a){return l=>{a.forEach(o=>{typeof o=="function"?o(l):o!=null&&(o.current=l)})}}var z1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{z1&&(window.__reactRouterVersion="7.9.4")}catch{}function Jb({basename:a,children:l,window:o}){let u=b.useRef();u.current==null&&(u.current=k2({window:o,v5Compat:!0}));let c=u.current,[f,h]=b.useState({action:c.action,location:c.location}),y=b.useCallback(g=>{b.startTransition(()=>h(g))},[h]);return b.useLayoutEffect(()=>c.listen(y),[c,y]),b.createElement(Cb,{basename:a,children:l,location:f.location,navigationType:f.action,navigator:c})}var A1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hi=b.forwardRef(function({onClick:l,discover:o="render",prefetch:u="none",relative:c,reloadDocument:f,replace:h,state:y,target:g,to:m,preventScrollReset:S,viewTransition:x,...w},j){let{basename:R}=b.useContext(cn),q=typeof m=="string"&&A1.test(m),Y,X=!1;if(typeof m=="string"&&q&&(Y=m,z1))try{let K=new URL(window.location.href),re=m.startsWith("//")?new URL(K.protocol+m):new URL(m),Z=Ln(re.pathname,R);re.origin===K.origin&&Z!=null?m=Z+re.search+re.hash:X=!0}catch{sn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let z=cb(m,{relative:c}),[B,F,k]=Xb(u,w),N=Ib(m,{replace:h,state:y,target:g,preventScrollReset:S,relative:c,viewTransition:x});function J(K){l&&l(K),K.defaultPrevented||N(K)}let G=b.createElement("a",{...w,...k,href:Y||z,onClick:X||f?l:J,ref:Zb(j,F),target:g,"data-discover":!q&&o==="render"?"true":void 0});return B&&!q?b.createElement(b.Fragment,null,G,b.createElement(Vb,{page:z})):G});Hi.displayName="Link";var Pb=b.forwardRef(function({"aria-current":l="page",caseSensitive:o=!1,className:u="",end:c=!1,style:f,to:h,viewTransition:y,children:g,...m},S){let x=ir(h,{relative:m.relative}),w=kn(),j=b.useContext(Vu),{navigator:R,basename:q}=b.useContext(cn),Y=j!=null&&ix(x)&&y===!0,X=R.encodeLocation?R.encodeLocation(x).pathname:x.pathname,z=w.pathname,B=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;o||(z=z.toLowerCase(),B=B?B.toLowerCase():null,X=X.toLowerCase()),B&&q&&(B=Ln(B,q)||B);const F=X!=="/"&&X.endsWith("/")?X.length-1:X.length;let k=z===X||!c&&z.startsWith(X)&&z.charAt(F)==="/",N=B!=null&&(B===X||!c&&B.startsWith(X)&&B.charAt(X.length)==="/"),J={isActive:k,isPending:N,isTransitioning:Y},G=k?l:void 0,K;typeof u=="function"?K=u(J):K=[u,k?"active":null,N?"pending":null,Y?"transitioning":null].filter(Boolean).join(" ");let re=typeof f=="function"?f(J):f;return b.createElement(Hi,{...m,"aria-current":G,className:K,ref:S,style:re,to:h,viewTransition:y},typeof g=="function"?g(J):g)});Pb.displayName="NavLink";var Wb=b.forwardRef(({discover:a="render",fetcherKey:l,navigate:o,reloadDocument:u,replace:c,state:f,method:h=Au,action:y,onSubmit:g,relative:m,preventScrollReset:S,viewTransition:x,...w},j)=>{let R=nx(),q=ax(y,{relative:m}),Y=h.toLowerCase()==="get"?"get":"post",X=typeof y=="string"&&A1.test(y),z=B=>{if(g&&g(B),B.defaultPrevented)return;B.preventDefault();let F=B.nativeEvent.submitter,k=F?.getAttribute("formmethod")||h;R(F||B.currentTarget,{fetcherKey:l,method:k,navigate:o,replace:c,state:f,relative:m,preventScrollReset:S,viewTransition:x})};return b.createElement("form",{ref:j,method:Y,action:q,onSubmit:u?g:z,...w,"data-discover":!X&&a==="render"?"true":void 0})});Wb.displayName="Form";function Fb(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function j1(a){let l=b.useContext(ki);return Ye(l,Fb(a)),l}function Ib(a,{target:l,replace:o,state:u,preventScrollReset:c,relative:f,viewTransition:h}={}){let y=yf(),g=kn(),m=ir(a,{relative:f});return b.useCallback(S=>{if(jb(S,l)){S.preventDefault();let x=o!==void 0?o:Wl(g)===Wl(m);y(a,{replace:x,state:u,preventScrollReset:c,relative:f,viewTransition:h})}},[g,y,m,o,u,l,a,c,f,h])}var ex=0,tx=()=>`__${String(++ex)}__`;function nx(){let{router:a}=j1("useSubmit"),{basename:l}=b.useContext(cn),o=Sb();return b.useCallback(async(u,c={})=>{let{action:f,method:h,encType:y,formData:g,body:m}=Db(u,l);if(c.navigate===!1){let S=c.fetcherKey||tx();await a.fetch(S,o,c.action||f,{preventScrollReset:c.preventScrollReset,formData:g,body:m,formMethod:c.method||h,formEncType:c.encType||y,flushSync:c.flushSync})}else await a.navigate(c.action||f,{preventScrollReset:c.preventScrollReset,formData:g,body:m,formMethod:c.method||h,formEncType:c.encType||y,replace:c.replace,state:c.state,fromRouteId:o,flushSync:c.flushSync,viewTransition:c.viewTransition})},[a,l,o])}function ax(a,{relative:l}={}){let{basename:o}=b.useContext(cn),u=b.useContext(Un);Ye(u,"useFormAction must be used inside a RouteContext");let[c]=u.matches.slice(-1),f={...ir(a||".",{relative:l})},h=kn();if(a==null){f.search=h.search;let y=new URLSearchParams(f.search),g=y.getAll("index");if(g.some(S=>S==="")){y.delete("index"),g.filter(x=>x).forEach(x=>y.append("index",x));let S=y.toString();f.search=S?`?${S}`:""}}return(!a||a===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(f.pathname=f.pathname==="/"?o:Nn([o,f.pathname])),Wl(f)}function ix(a,{relative:l}={}){let o=b.useContext(w1);Ye(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=j1("useViewTransitionState"),c=ir(a,{relative:l});if(!o.isTransitioning)return!1;let f=Ln(o.currentLocation.pathname,u)||o.currentLocation.pathname,h=Ln(o.nextLocation.pathname,u)||o.nextLocation.pathname;return ku(c.pathname,h)!=null||ku(c.pathname,f)!=null}var lx=m1();const Oi=tr(lx);var St=function(){return St=Object.assign||function(l){for(var o,u=1,c=arguments.length;u<c;u++){o=arguments[u];for(var f in o)Object.prototype.hasOwnProperty.call(o,f)&&(l[f]=o[f])}return l},St.apply(this,arguments)};function Fl(a,l,o){if(o||arguments.length===2)for(var u=0,c=l.length,f;u<c;u++)(f||!(u in l))&&(f||(f=Array.prototype.slice.call(l,0,u)),f[u]=l[u]);return a.concat(f||Array.prototype.slice.call(l))}var $e="-ms-",Jl="-moz-",Oe="-webkit-",M1="comm",Ku="rule",Ef="decl",rx="@import",N1="@keyframes",ux="@layer",D1=Math.abs,Tf=String.fromCharCode,nf=Object.assign;function ox(a,l){return nt(a,0)^45?(((l<<2^nt(a,0))<<2^nt(a,1))<<2^nt(a,2))<<2^nt(a,3):0}function L1(a){return a.trim()}function An(a,l){return(a=l.exec(a))?a[0]:a}function ge(a,l,o){return a.replace(l,o)}function Mu(a,l,o){return a.indexOf(l,o)}function nt(a,l){return a.charCodeAt(l)|0}function ji(a,l,o){return a.slice(l,o)}function on(a){return a.length}function U1(a){return a.length}function Kl(a,l){return l.push(a),a}function sx(a,l){return a.map(l).join("")}function tm(a,l){return a.filter(function(o){return!An(o,l)})}var Zu=1,Mi=1,k1=0,Kt=0,Fe=0,Bi="";function Ju(a,l,o,u,c,f,h,y){return{value:a,root:l,parent:o,type:u,props:c,children:f,line:Zu,column:Mi,length:h,return:"",siblings:y}}function ca(a,l){return nf(Ju("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},l)}function Ti(a){for(;a.root;)a=ca(a.root,{children:[a]});Kl(a,a.siblings)}function cx(){return Fe}function fx(){return Fe=Kt>0?nt(Bi,--Kt):0,Mi--,Fe===10&&(Mi=1,Zu--),Fe}function en(){return Fe=Kt<k1?nt(Bi,Kt++):0,Mi++,Fe===10&&(Mi=1,Zu++),Fe}function Da(){return nt(Bi,Kt)}function Nu(){return Kt}function Pu(a,l){return ji(Bi,a,l)}function af(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function dx(a){return Zu=Mi=1,k1=on(Bi=a),Kt=0,[]}function hx(a){return Bi="",a}function Oc(a){return L1(Pu(Kt-1,lf(a===91?a+2:a===40?a+1:a)))}function px(a){for(;(Fe=Da())&&Fe<33;)en();return af(a)>2||af(Fe)>3?"":" "}function mx(a,l){for(;--l&&en()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return Pu(a,Nu()+(l<6&&Da()==32&&en()==32))}function lf(a){for(;en();)switch(Fe){case a:return Kt;case 34:case 39:a!==34&&a!==39&&lf(Fe);break;case 40:a===41&&lf(a);break;case 92:en();break}return Kt}function vx(a,l){for(;en()&&a+Fe!==57;)if(a+Fe===84&&Da()===47)break;return"/*"+Pu(l,Kt-1)+"*"+Tf(a===47?a:en())}function gx(a){for(;!af(Da());)en();return Pu(a,Kt)}function yx(a){return hx(Du("",null,null,null,[""],a=dx(a),0,[0],a))}function Du(a,l,o,u,c,f,h,y,g){for(var m=0,S=0,x=h,w=0,j=0,R=0,q=1,Y=1,X=1,z=0,B="",F=c,k=f,N=u,J=B;Y;)switch(R=z,z=en()){case 40:if(R!=108&&nt(J,x-1)==58){Mu(J+=ge(Oc(z),"&","&\f"),"&\f",D1(m?y[m-1]:0))!=-1&&(X=-1);break}case 34:case 39:case 91:J+=Oc(z);break;case 9:case 10:case 13:case 32:J+=px(R);break;case 92:J+=mx(Nu()-1,7);continue;case 47:switch(Da()){case 42:case 47:Kl(bx(vx(en(),Nu()),l,o,g),g);break;default:J+="/"}break;case 123*q:y[m++]=on(J)*X;case 125*q:case 59:case 0:switch(z){case 0:case 125:Y=0;case 59+S:X==-1&&(J=ge(J,/\f/g,"")),j>0&&on(J)-x&&Kl(j>32?am(J+";",u,o,x-1,g):am(ge(J," ","")+";",u,o,x-2,g),g);break;case 59:J+=";";default:if(Kl(N=nm(J,l,o,m,S,c,y,B,F=[],k=[],x,f),f),z===123)if(S===0)Du(J,l,N,N,F,f,x,y,k);else switch(w===99&&nt(J,3)===110?100:w){case 100:case 108:case 109:case 115:Du(a,N,N,u&&Kl(nm(a,N,N,0,0,c,y,B,c,F=[],x,k),k),c,k,x,y,u?F:k);break;default:Du(J,N,N,N,[""],k,0,y,k)}}m=S=j=0,q=X=1,B=J="",x=h;break;case 58:x=1+on(J),j=R;default:if(q<1){if(z==123)--q;else if(z==125&&q++==0&&fx()==125)continue}switch(J+=Tf(z),z*q){case 38:X=S>0?1:(J+="\f",-1);break;case 44:y[m++]=(on(J)-1)*X,X=1;break;case 64:Da()===45&&(J+=Oc(en())),w=Da(),S=x=on(B=J+=gx(Nu())),z++;break;case 45:R===45&&on(J)==2&&(q=0)}}return f}function nm(a,l,o,u,c,f,h,y,g,m,S,x){for(var w=c-1,j=c===0?f:[""],R=U1(j),q=0,Y=0,X=0;q<u;++q)for(var z=0,B=ji(a,w+1,w=D1(Y=h[q])),F=a;z<R;++z)(F=L1(Y>0?j[z]+" "+B:ge(B,/&\f/g,j[z])))&&(g[X++]=F);return Ju(a,l,o,c===0?Ku:y,g,m,S,x)}function bx(a,l,o,u){return Ju(a,l,o,M1,Tf(cx()),ji(a,2,-2),0,u)}function am(a,l,o,u,c){return Ju(a,l,o,Ef,ji(a,0,u),ji(a,u+1,-1),u,c)}function H1(a,l,o){switch(ox(a,l)){case 5103:return Oe+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Oe+a+a;case 4789:return Jl+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Oe+a+Jl+a+$e+a+a;case 5936:switch(nt(a,l+11)){case 114:return Oe+a+$e+ge(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Oe+a+$e+ge(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Oe+a+$e+ge(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Oe+a+$e+a+a;case 6165:return Oe+a+$e+"flex-"+a+a;case 5187:return Oe+a+ge(a,/(\w+).+(:[^]+)/,Oe+"box-$1$2"+$e+"flex-$1$2")+a;case 5443:return Oe+a+$e+"flex-item-"+ge(a,/flex-|-self/g,"")+(An(a,/flex-|baseline/)?"":$e+"grid-row-"+ge(a,/flex-|-self/g,""))+a;case 4675:return Oe+a+$e+"flex-line-pack"+ge(a,/align-content|flex-|-self/g,"")+a;case 5548:return Oe+a+$e+ge(a,"shrink","negative")+a;case 5292:return Oe+a+$e+ge(a,"basis","preferred-size")+a;case 6060:return Oe+"box-"+ge(a,"-grow","")+Oe+a+$e+ge(a,"grow","positive")+a;case 4554:return Oe+ge(a,/([^-])(transform)/g,"$1"+Oe+"$2")+a;case 6187:return ge(ge(ge(a,/(zoom-|grab)/,Oe+"$1"),/(image-set)/,Oe+"$1"),a,"")+a;case 5495:case 3959:return ge(a,/(image-set\([^]*)/,Oe+"$1$`$1");case 4968:return ge(ge(a,/(.+:)(flex-)?(.*)/,Oe+"box-pack:$3"+$e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Oe+a+a;case 4200:if(!An(a,/flex-|baseline/))return $e+"grid-column-align"+ji(a,l)+a;break;case 2592:case 3360:return $e+ge(a,"template-","")+a;case 4384:case 3616:return o&&o.some(function(u,c){return l=c,An(u.props,/grid-\w+-end/)})?~Mu(a+(o=o[l].value),"span",0)?a:$e+ge(a,"-start","")+a+$e+"grid-row-span:"+(~Mu(o,"span",0)?An(o,/\d+/):+An(o,/\d+/)-+An(a,/\d+/))+";":$e+ge(a,"-start","")+a;case 4896:case 4128:return o&&o.some(function(u){return An(u.props,/grid-\w+-start/)})?a:$e+ge(ge(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return ge(a,/(.+)-inline(.+)/,Oe+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(on(a)-1-l>6)switch(nt(a,l+1)){case 109:if(nt(a,l+4)!==45)break;case 102:return ge(a,/(.+:)(.+)-([^]+)/,"$1"+Oe+"$2-$3$1"+Jl+(nt(a,l+3)==108?"$3":"$2-$3"))+a;case 115:return~Mu(a,"stretch",0)?H1(ge(a,"stretch","fill-available"),l,o)+a:a}break;case 5152:case 5920:return ge(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,c,f,h,y,g,m){return $e+c+":"+f+m+(h?$e+c+"-span:"+(y?g:+g-+f)+m:"")+a});case 4949:if(nt(a,l+6)===121)return ge(a,":",":"+Oe)+a;break;case 6444:switch(nt(a,nt(a,14)===45?18:11)){case 120:return ge(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Oe+(nt(a,14)===45?"inline-":"")+"box$3$1"+Oe+"$2$3$1"+$e+"$2box$3")+a;case 100:return ge(a,":",":"+$e)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ge(a,"scroll-","scroll-snap-")+a}return a}function Hu(a,l){for(var o="",u=0;u<a.length;u++)o+=l(a[u],u,a,l)||"";return o}function xx(a,l,o,u){switch(a.type){case ux:if(a.children.length)break;case rx:case Ef:return a.return=a.return||a.value;case M1:return"";case N1:return a.return=a.value+"{"+Hu(a.children,u)+"}";case Ku:if(!on(a.value=a.props.join(",")))return""}return on(o=Hu(a.children,u))?a.return=a.value+"{"+o+"}":""}function Sx(a){var l=U1(a);return function(o,u,c,f){for(var h="",y=0;y<l;y++)h+=a[y](o,u,c,f)||"";return h}}function wx(a){return function(l){l.root||(l=l.return)&&a(l)}}function Ex(a,l,o,u){if(a.length>-1&&!a.return)switch(a.type){case Ef:a.return=H1(a.value,a.length,o);return;case N1:return Hu([ca(a,{value:ge(a.value,"@","@"+Oe)})],u);case Ku:if(a.length)return sx(o=a.props,function(c){switch(An(c,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ti(ca(a,{props:[ge(c,/:(read-\w+)/,":"+Jl+"$1")]})),Ti(ca(a,{props:[c]})),nf(a,{props:tm(o,u)});break;case"::placeholder":Ti(ca(a,{props:[ge(c,/:(plac\w+)/,":"+Oe+"input-$1")]})),Ti(ca(a,{props:[ge(c,/:(plac\w+)/,":"+Jl+"$1")]})),Ti(ca(a,{props:[ge(c,/:(plac\w+)/,$e+"input-$1")]})),Ti(ca(a,{props:[c]})),nf(a,{props:tm(o,u)});break}return""})}}var Tx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Lt={},Ni=typeof process<"u"&&Lt!==void 0&&(Lt.REACT_APP_SC_ATTR||Lt.SC_ATTR)||"data-styled",B1="active",$1="data-styled-version",Wu="6.1.19",Cf=`/*!sc*/
`,Bu=typeof window<"u"&&typeof document<"u",Cx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==""?Lt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Lt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.SC_DISABLE_SPEEDY!==void 0&&Lt.SC_DISABLE_SPEEDY!==""&&Lt.SC_DISABLE_SPEEDY!=="false"&&Lt.SC_DISABLE_SPEEDY),Fu=Object.freeze([]),Di=Object.freeze({});function Rx(a,l,o){return o===void 0&&(o=Di),a.theme!==o.theme&&a.theme||l||o.theme}var q1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),_x=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ox=/(^-|-$)/g;function im(a){return a.replace(_x,"-").replace(Ox,"")}var zx=/(a)(d)/gi,Tu=52,lm=function(a){return String.fromCharCode(a+(a>25?39:97))};function rf(a){var l,o="";for(l=Math.abs(a);l>Tu;l=l/Tu|0)o=lm(l%Tu)+o;return(lm(l%Tu)+o).replace(zx,"$1-$2")}var zc,Y1=5381,zi=function(a,l){for(var o=l.length;o;)a=33*a^l.charCodeAt(--o);return a},G1=function(a){return zi(Y1,a)};function X1(a){return rf(G1(a)>>>0)}function Ax(a){return a.displayName||a.name||"Component"}function Ac(a){return typeof a=="string"&&!0}var V1=typeof Symbol=="function"&&Symbol.for,Q1=V1?Symbol.for("react.memo"):60115,jx=V1?Symbol.for("react.forward_ref"):60112,Mx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Nx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},K1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Dx=((zc={})[jx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},zc[Q1]=K1,zc);function rm(a){return("type"in(l=a)&&l.type.$$typeof)===Q1?K1:"$$typeof"in a?Dx[a.$$typeof]:Mx;var l}var Lx=Object.defineProperty,Ux=Object.getOwnPropertyNames,um=Object.getOwnPropertySymbols,kx=Object.getOwnPropertyDescriptor,Hx=Object.getPrototypeOf,om=Object.prototype;function Z1(a,l,o){if(typeof l!="string"){if(om){var u=Hx(l);u&&u!==om&&Z1(a,u,o)}var c=Ux(l);um&&(c=c.concat(um(l)));for(var f=rm(a),h=rm(l),y=0;y<c.length;++y){var g=c[y];if(!(g in Nx||o&&o[g]||h&&g in h||f&&g in f)){var m=kx(l,g);try{Lx(a,g,m)}catch{}}}}return a}function Li(a){return typeof a=="function"}function Rf(a){return typeof a=="object"&&"styledComponentId"in a}function Na(a,l){return a&&l?"".concat(a," ").concat(l):a||l||""}function uf(a,l){if(a.length===0)return"";for(var o=a[0],u=1;u<a.length;u++)o+=a[u];return o}function Il(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function of(a,l,o){if(o===void 0&&(o=!1),!o&&!Il(a)&&!Array.isArray(a))return l;if(Array.isArray(l))for(var u=0;u<l.length;u++)a[u]=of(a[u],l[u]);else if(Il(l))for(var u in l)a[u]=of(a[u],l[u]);return a}function _f(a,l){Object.defineProperty(a,"toString",{value:l})}function lr(a){for(var l=[],o=1;o<arguments.length;o++)l[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(l.length>0?" Args: ".concat(l.join(", ")):""))}var Bx=(function(){function a(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l}return a.prototype.indexOfGroup=function(l){for(var o=0,u=0;u<l;u++)o+=this.groupSizes[u];return o},a.prototype.insertRules=function(l,o){if(l>=this.groupSizes.length){for(var u=this.groupSizes,c=u.length,f=c;l>=f;)if((f<<=1)<0)throw lr(16,"".concat(l));this.groupSizes=new Uint32Array(f),this.groupSizes.set(u),this.length=f;for(var h=c;h<f;h++)this.groupSizes[h]=0}for(var y=this.indexOfGroup(l+1),g=(h=0,o.length);h<g;h++)this.tag.insertRule(y,o[h])&&(this.groupSizes[l]++,y++)},a.prototype.clearGroup=function(l){if(l<this.length){var o=this.groupSizes[l],u=this.indexOfGroup(l),c=u+o;this.groupSizes[l]=0;for(var f=u;f<c;f++)this.tag.deleteRule(u)}},a.prototype.getGroup=function(l){var o="";if(l>=this.length||this.groupSizes[l]===0)return o;for(var u=this.groupSizes[l],c=this.indexOfGroup(l),f=c+u,h=c;h<f;h++)o+="".concat(this.tag.getRule(h)).concat(Cf);return o},a})(),Lu=new Map,$u=new Map,Uu=1,Cu=function(a){if(Lu.has(a))return Lu.get(a);for(;$u.has(Uu);)Uu++;var l=Uu++;return Lu.set(a,l),$u.set(l,a),l},$x=function(a,l){Uu=l+1,Lu.set(a,l),$u.set(l,a)},qx="style[".concat(Ni,"][").concat($1,'="').concat(Wu,'"]'),Yx=new RegExp("^".concat(Ni,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Gx=function(a,l,o){for(var u,c=o.split(","),f=0,h=c.length;f<h;f++)(u=c[f])&&a.registerName(l,u)},Xx=function(a,l){for(var o,u=((o=l.textContent)!==null&&o!==void 0?o:"").split(Cf),c=[],f=0,h=u.length;f<h;f++){var y=u[f].trim();if(y){var g=y.match(Yx);if(g){var m=0|parseInt(g[1],10),S=g[2];m!==0&&($x(S,m),Gx(a,S,g[3]),a.getTag().insertRules(m,c)),c.length=0}else c.push(y)}}},sm=function(a){for(var l=document.querySelectorAll(qx),o=0,u=l.length;o<u;o++){var c=l[o];c&&c.getAttribute(Ni)!==B1&&(Xx(a,c),c.parentNode&&c.parentNode.removeChild(c))}};function Vx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var J1=function(a){var l=document.head,o=a||l,u=document.createElement("style"),c=(function(y){var g=Array.from(y.querySelectorAll("style[".concat(Ni,"]")));return g[g.length-1]})(o),f=c!==void 0?c.nextSibling:null;u.setAttribute(Ni,B1),u.setAttribute($1,Wu);var h=Vx();return h&&u.setAttribute("nonce",h),o.insertBefore(u,f),u},Qx=(function(){function a(l){this.element=J1(l),this.element.appendChild(document.createTextNode("")),this.sheet=(function(o){if(o.sheet)return o.sheet;for(var u=document.styleSheets,c=0,f=u.length;c<f;c++){var h=u[c];if(h.ownerNode===o)return h}throw lr(17)})(this.element),this.length=0}return a.prototype.insertRule=function(l,o){try{return this.sheet.insertRule(o,l),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},a.prototype.getRule=function(l){var o=this.sheet.cssRules[l];return o&&o.cssText?o.cssText:""},a})(),Kx=(function(){function a(l){this.element=J1(l),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(l,o){if(l<=this.length&&l>=0){var u=document.createTextNode(o);return this.element.insertBefore(u,this.nodes[l]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},a.prototype.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},a})(),Zx=(function(){function a(l){this.rules=[],this.length=0}return a.prototype.insertRule=function(l,o){return l<=this.length&&(this.rules.splice(l,0,o),this.length++,!0)},a.prototype.deleteRule=function(l){this.rules.splice(l,1),this.length--},a.prototype.getRule=function(l){return l<this.length?this.rules[l]:""},a})(),cm=Bu,Jx={isServer:!Bu,useCSSOMInjection:!Cx},P1=(function(){function a(l,o,u){l===void 0&&(l=Di),o===void 0&&(o={});var c=this;this.options=St(St({},Jx),l),this.gs=o,this.names=new Map(u),this.server=!!l.isServer,!this.server&&Bu&&cm&&(cm=!1,sm(this)),_f(this,function(){return(function(f){for(var h=f.getTag(),y=h.length,g="",m=function(x){var w=(function(X){return $u.get(X)})(x);if(w===void 0)return"continue";var j=f.names.get(w),R=h.getGroup(x);if(j===void 0||!j.size||R.length===0)return"continue";var q="".concat(Ni,".g").concat(x,'[id="').concat(w,'"]'),Y="";j!==void 0&&j.forEach(function(X){X.length>0&&(Y+="".concat(X,","))}),g+="".concat(R).concat(q,'{content:"').concat(Y,'"}').concat(Cf)},S=0;S<y;S++)m(S);return g})(c)})}return a.registerId=function(l){return Cu(l)},a.prototype.rehydrate=function(){!this.server&&Bu&&sm(this)},a.prototype.reconstructWithOptions=function(l,o){return o===void 0&&(o=!0),new a(St(St({},this.options),l),this.gs,o&&this.names||void 0)},a.prototype.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(l=(function(o){var u=o.useCSSOMInjection,c=o.target;return o.isServer?new Zx(c):u?new Qx(c):new Kx(c)})(this.options),new Bx(l)));var l},a.prototype.hasNameForId=function(l,o){return this.names.has(l)&&this.names.get(l).has(o)},a.prototype.registerName=function(l,o){if(Cu(l),this.names.has(l))this.names.get(l).add(o);else{var u=new Set;u.add(o),this.names.set(l,u)}},a.prototype.insertRules=function(l,o,u){this.registerName(l,o),this.getTag().insertRules(Cu(l),u)},a.prototype.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},a.prototype.clearRules=function(l){this.getTag().clearGroup(Cu(l)),this.clearNames(l)},a.prototype.clearTag=function(){this.tag=void 0},a})(),Px=/&/g,Wx=/^\s*\/\/.*$/gm;function W1(a,l){return a.map(function(o){return o.type==="rule"&&(o.value="".concat(l," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(l," ")),o.props=o.props.map(function(u){return"".concat(l," ").concat(u)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=W1(o.children,l)),o})}function Fx(a){var l,o,u,c=Di,f=c.options,h=f===void 0?Di:f,y=c.plugins,g=y===void 0?Fu:y,m=function(w,j,R){return R.startsWith(o)&&R.endsWith(o)&&R.replaceAll(o,"").length>0?".".concat(l):w},S=g.slice();S.push(function(w){w.type===Ku&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(Px,o).replace(u,m))}),h.prefix&&S.push(Ex),S.push(xx);var x=function(w,j,R,q){j===void 0&&(j=""),R===void 0&&(R=""),q===void 0&&(q="&"),l=q,o=j,u=new RegExp("\\".concat(o,"\\b"),"g");var Y=w.replace(Wx,""),X=yx(R||j?"".concat(R," ").concat(j," { ").concat(Y," }"):Y);h.namespace&&(X=W1(X,h.namespace));var z=[];return Hu(X,Sx(S.concat(wx(function(B){return z.push(B)})))),z};return x.hash=g.length?g.reduce(function(w,j){return j.name||lr(15),zi(w,j.name)},Y1).toString():"",x}var Ix=new P1,sf=Fx(),F1=ze.createContext({shouldForwardProp:void 0,styleSheet:Ix,stylis:sf});F1.Consumer;ze.createContext(void 0);function fm(){return b.useContext(F1)}var I1=(function(){function a(l,o){var u=this;this.inject=function(c,f){f===void 0&&(f=sf);var h=u.name+f.hash;c.hasNameForId(u.id,h)||c.insertRules(u.id,h,f(u.rules,h,"@keyframes"))},this.name=l,this.id="sc-keyframes-".concat(l),this.rules=o,_f(this,function(){throw lr(12,String(u.name))})}return a.prototype.getName=function(l){return l===void 0&&(l=sf),this.name+l.hash},a})(),e5=function(a){return a>="A"&&a<="Z"};function dm(a){for(var l="",o=0;o<a.length;o++){var u=a[o];if(o===1&&u==="-"&&a[0]==="-")return a;e5(u)?l+="-"+u.toLowerCase():l+=u}return l.startsWith("ms-")?"-"+l:l}var ev=function(a){return a==null||a===!1||a===""},tv=function(a){var l,o,u=[];for(var c in a){var f=a[c];a.hasOwnProperty(c)&&!ev(f)&&(Array.isArray(f)&&f.isCss||Li(f)?u.push("".concat(dm(c),":"),f,";"):Il(f)?u.push.apply(u,Fl(Fl(["".concat(c," {")],tv(f),!1),["}"],!1)):u.push("".concat(dm(c),": ").concat((l=c,(o=f)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||l in Tx||l.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return u};function La(a,l,o,u){if(ev(a))return[];if(Rf(a))return[".".concat(a.styledComponentId)];if(Li(a)){if(!Li(f=a)||f.prototype&&f.prototype.isReactComponent||!l)return[a];var c=a(l);return La(c,l,o,u)}var f;return a instanceof I1?o?(a.inject(o,u),[a.getName(u)]):[a]:Il(a)?tv(a):Array.isArray(a)?Array.prototype.concat.apply(Fu,a.map(function(h){return La(h,l,o,u)})):[a.toString()]}function t5(a){for(var l=0;l<a.length;l+=1){var o=a[l];if(Li(o)&&!Rf(o))return!1}return!0}var n5=G1(Wu),a5=(function(){function a(l,o,u){this.rules=l,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&t5(l),this.componentId=o,this.baseHash=zi(n5,o),this.baseStyle=u,P1.registerId(o)}return a.prototype.generateAndInjectStyles=function(l,o,u){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(l,o,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))c=Na(c,this.staticRulesId);else{var f=uf(La(this.rules,l,o,u)),h=rf(zi(this.baseHash,f)>>>0);if(!o.hasNameForId(this.componentId,h)){var y=u(f,".".concat(h),void 0,this.componentId);o.insertRules(this.componentId,h,y)}c=Na(c,h),this.staticRulesId=h}else{for(var g=zi(this.baseHash,u.hash),m="",S=0;S<this.rules.length;S++){var x=this.rules[S];if(typeof x=="string")m+=x;else if(x){var w=uf(La(x,l,o,u));g=zi(g,w+S),m+=w}}if(m){var j=rf(g>>>0);o.hasNameForId(this.componentId,j)||o.insertRules(this.componentId,j,u(m,".".concat(j),void 0,this.componentId)),c=Na(c,j)}}return c},a})(),nv=ze.createContext(void 0);nv.Consumer;var jc={};function i5(a,l,o){var u=Rf(a),c=a,f=!Ac(a),h=l.attrs,y=h===void 0?Fu:h,g=l.componentId,m=g===void 0?(function(F,k){var N=typeof F!="string"?"sc":im(F);jc[N]=(jc[N]||0)+1;var J="".concat(N,"-").concat(X1(Wu+N+jc[N]));return k?"".concat(k,"-").concat(J):J})(l.displayName,l.parentComponentId):g,S=l.displayName,x=S===void 0?(function(F){return Ac(F)?"styled.".concat(F):"Styled(".concat(Ax(F),")")})(a):S,w=l.displayName&&l.componentId?"".concat(im(l.displayName),"-").concat(l.componentId):l.componentId||m,j=u&&c.attrs?c.attrs.concat(y).filter(Boolean):y,R=l.shouldForwardProp;if(u&&c.shouldForwardProp){var q=c.shouldForwardProp;if(l.shouldForwardProp){var Y=l.shouldForwardProp;R=function(F,k){return q(F,k)&&Y(F,k)}}else R=q}var X=new a5(o,w,u?c.componentStyle:void 0);function z(F,k){return(function(N,J,G){var K=N.attrs,re=N.componentStyle,Z=N.defaultProps,D=N.foldedComponentIds,ee=N.styledComponentId,ne=N.target,C=ze.useContext(nv),A=fm(),H=N.shouldForwardProp||A.shouldForwardProp,P=Rx(J,C,Z)||Di,le=(function(se,he,ye){for(var Ue,Te=St(St({},he),{className:void 0,theme:ye}),Et=0;Et<se.length;Et+=1){var Zt=Li(Ue=se[Et])?Ue(Te):Ue;for(var ft in Zt)Te[ft]=ft==="className"?Na(Te[ft],Zt[ft]):ft==="style"?St(St({},Te[ft]),Zt[ft]):Zt[ft]}return he.className&&(Te.className=Na(Te.className,he.className)),Te})(K,J,P),ce=le.as||ne,T={};for(var V in le)le[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&le.theme===P||(V==="forwardedAs"?T.as=le.forwardedAs:H&&!H(V,ce)||(T[V]=le[V]));var ie=(function(se,he){var ye=fm(),Ue=se.generateAndInjectStyles(he,ye.styleSheet,ye.stylis);return Ue})(re,le),ae=Na(D,ee);return ie&&(ae+=" "+ie),le.className&&(ae+=" "+le.className),T[Ac(ce)&&!q1.has(ce)?"class":"className"]=ae,G&&(T.ref=G),b.createElement(ce,T)})(B,F,k)}z.displayName=x;var B=ze.forwardRef(z);return B.attrs=j,B.componentStyle=X,B.displayName=x,B.shouldForwardProp=R,B.foldedComponentIds=u?Na(c.foldedComponentIds,c.styledComponentId):"",B.styledComponentId=w,B.target=u?c.target:a,Object.defineProperty(B,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(F){this._foldedDefaultProps=u?(function(k){for(var N=[],J=1;J<arguments.length;J++)N[J-1]=arguments[J];for(var G=0,K=N;G<K.length;G++)of(k,K[G],!0);return k})({},c.defaultProps,F):F}}),_f(B,function(){return".".concat(B.styledComponentId)}),f&&Z1(B,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),B}function hm(a,l){for(var o=[a[0]],u=0,c=l.length;u<c;u+=1)o.push(l[u],a[u+1]);return o}var pm=function(a){return Object.assign(a,{isCss:!0})};function Ua(a){for(var l=[],o=1;o<arguments.length;o++)l[o-1]=arguments[o];if(Li(a)||Il(a))return pm(La(hm(Fu,Fl([a],l,!0))));var u=a;return l.length===0&&u.length===1&&typeof u[0]=="string"?La(u):pm(La(hm(u,l)))}function cf(a,l,o){if(o===void 0&&(o=Di),!l)throw lr(1,l);var u=function(c){for(var f=[],h=1;h<arguments.length;h++)f[h-1]=arguments[h];return a(l,o,Ua.apply(void 0,Fl([c],f,!1)))};return u.attrs=function(c){return cf(a,l,St(St({},o),{attrs:Array.prototype.concat(o.attrs,c).filter(Boolean)}))},u.withConfig=function(c){return cf(a,l,St(St({},o),c))},u}var av=function(a){return cf(i5,a)},O=av;q1.forEach(function(a){O[a]=av(a)});function fn(a){for(var l=[],o=1;o<arguments.length;o++)l[o-1]=arguments[o];var u=uf(Ua.apply(void 0,Fl([a],l,!1))),c=X1(u);return new I1(c,u)}var iv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},mm=ze.createContext&&ze.createContext(iv),l5=["attr","size","title"];function r5(a,l){if(a==null)return{};var o=u5(a,l),u,c;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)u=f[c],!(l.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(a,u)&&(o[u]=a[u])}return o}function u5(a,l){if(a==null)return{};var o={};for(var u in a)if(Object.prototype.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}function qu(){return qu=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(a[u]=o[u])}return a},qu.apply(this,arguments)}function vm(a,l){var o=Object.keys(a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(a);l&&(u=u.filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable})),o.push.apply(o,u)}return o}function Yu(a){for(var l=1;l<arguments.length;l++){var o=arguments[l]!=null?arguments[l]:{};l%2?vm(Object(o),!0).forEach(function(u){o5(a,u,o[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(o)):vm(Object(o)).forEach(function(u){Object.defineProperty(a,u,Object.getOwnPropertyDescriptor(o,u))})}return a}function o5(a,l,o){return l=s5(l),l in a?Object.defineProperty(a,l,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[l]=o,a}function s5(a){var l=c5(a,"string");return typeof l=="symbol"?l:l+""}function c5(a,l){if(typeof a!="object"||!a)return a;var o=a[Symbol.toPrimitive];if(o!==void 0){var u=o.call(a,l);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(a)}function lv(a){return a&&a.map((l,o)=>ze.createElement(l.tag,Yu({key:o},l.attr),lv(l.child)))}function Ve(a){return l=>ze.createElement(f5,qu({attr:Yu({},a.attr)},l),lv(a.child))}function f5(a){var l=o=>{var{attr:u,size:c,title:f}=a,h=r5(a,l5),y=c||o.size||"1em",g;return o.className&&(g=o.className),a.className&&(g=(g?g+" ":"")+a.className),ze.createElement("svg",qu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,u,h,{className:g,style:Yu(Yu({color:a.color||o.color},o.style),a.style),height:y,width:y,xmlns:"http://www.w3.org/2000/svg"}),f&&ze.createElement("title",null,f),a.children)};return mm!==void 0?ze.createElement(mm.Consumer,null,o=>l(o)):l(iv)}function Of(a){return Ve({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311h-.3v428h472.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32z"},child:[]}]})(a)}function zf(a){return Ve({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"},child:[]}]})(a)}function Af(a){return Ve({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"},child:[]}]})(a)}function jf(a){return Ve({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"},child:[]}]})(a)}const d5=O.article`
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  max-width: 1000px;
  border-radius: 10px;
  overflow: hidden;
`,h5=O.div`
  position: relative;
  aspect-ratio: 1 / 1;
  background: linear-gradient(135deg, #eef2ff, #e0f7fa);
`,p5=O.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,gm=O.button`
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(6px);
  cursor: pointer;
  transition: transform 160ms ease, background 160ms ease, box-shadow 160ms ease;

  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`,m5=O.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
  padding: 18px 18px 20px 18px;
  color: #0f172a;
`,v5=O.h3`
  margin: 0;
  font-size: clamp(18px, 2.2vw, 22px);
  line-height: 1.25;
  letter-spacing: -0.2px;
`,g5=O.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.55;
  color: #334155;
`,y5=O.div`
  display: flex;
  gap: 10px;
`;function b5({title:a="Infographic Title",description:l="A short, crisp line describing what this infographic is about.",imgSrc:o="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",likedDefault:u=!1,savedDefault:c=!1,onLikeChange:f,onBookmarkChange:h}){const[y,g]=b.useState(u),[m,S]=b.useState(c),x=()=>{const j=!y;g(j),f&&f(j)},w=()=>{const j=!m;S(j),h&&h(j)};return p.jsxs(d5,{role:"article","aria-label":`${a} infographic card`,children:[p.jsx(h5,{children:p.jsx(p5,{src:o,alt:a})}),p.jsxs(m5,{children:[p.jsxs("div",{children:[p.jsx(v5,{children:a}),p.jsx(g5,{children:l})]}),p.jsxs(y5,{children:[p.jsx(gm,{onClick:x,"aria-label":y?"Unlike":"Like",title:y?"Unlike":"Like",children:y?p.jsx(Of,{size:20}):p.jsx(zf,{size:20})}),p.jsx(gm,{onClick:w,"aria-label":m?"Remove bookmark":"Bookmark",title:m?"Remove bookmark":"Bookmark",children:m?p.jsx(Af,{size:18}):p.jsx(jf,{size:18})})]})]})]})}var Mc={},Hl={},Ru={},_u={},Nc={exports:{}},Dc,ym;function x5(){if(ym)return Dc;ym=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Dc=a,Dc}var Lc,bm;function S5(){if(bm)return Lc;bm=1;var a=x5();function l(){}function o(){}return o.resetWarningCache=l,Lc=function(){function u(h,y,g,m,S,x){if(x!==a){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}u.isRequired=u;function c(){return u}var f={array:u,bigint:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:c,element:u,elementType:u,instanceOf:c,node:u,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:o,resetWarningCache:l};return f.PropTypes=f,f},Lc}var xm;function rv(){return xm||(xm=1,Nc.exports=S5()()),Nc.exports}var Sm;function w5(){return Sm||(Sm=1,(function(a){(function(l,o){o(a,da(),rv())})(_u,function(l,o,u){Object.defineProperty(l,"__esModule",{value:!0}),l.setHasSupportToCaptureOption=R;var c=h(o),f=h(u);function h(z){return z&&z.__esModule?z:{default:z}}var y=Object.assign||function(z){for(var B=1;B<arguments.length;B++){var F=arguments[B];for(var k in F)Object.prototype.hasOwnProperty.call(F,k)&&(z[k]=F[k])}return z};function g(z,B){var F={};for(var k in z)B.indexOf(k)>=0||Object.prototype.hasOwnProperty.call(z,k)&&(F[k]=z[k]);return F}function m(z,B){if(!(z instanceof B))throw new TypeError("Cannot call a class as a function")}var S=(function(){function z(B,F){for(var k=0;k<F.length;k++){var N=F[k];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(B,N.key,N)}}return function(B,F,k){return F&&z(B.prototype,F),k&&z(B,k),B}})();function x(z,B){if(!z)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return B&&(typeof B=="object"||typeof B=="function")?B:z}function w(z,B){if(typeof B!="function"&&B!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof B);z.prototype=Object.create(B&&B.prototype,{constructor:{value:z,enumerable:!1,writable:!0,configurable:!0}}),B&&(Object.setPrototypeOf?Object.setPrototypeOf(z,B):z.__proto__=B)}var j=!1;function R(z){j=z}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){R(!0)}}))}catch{}function q(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return j?z:z.capture}function Y(z){if("touches"in z){var B=z.touches[0],F=B.pageX,k=B.pageY;return{x:F,y:k}}var N=z.screenX,J=z.screenY;return{x:N,y:J}}var X=(function(z){w(B,z);function B(){var F;m(this,B);for(var k=arguments.length,N=Array(k),J=0;J<k;J++)N[J]=arguments[J];var G=x(this,(F=B.__proto__||Object.getPrototypeOf(B)).call.apply(F,[this].concat(N)));return G._handleSwipeStart=G._handleSwipeStart.bind(G),G._handleSwipeMove=G._handleSwipeMove.bind(G),G._handleSwipeEnd=G._handleSwipeEnd.bind(G),G._onMouseDown=G._onMouseDown.bind(G),G._onMouseMove=G._onMouseMove.bind(G),G._onMouseUp=G._onMouseUp.bind(G),G._setSwiperRef=G._setSwiperRef.bind(G),G}return S(B,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,q({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,q({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(k){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(k))}},{key:"_onMouseMove",value:function(k){this.mouseDown&&this._handleSwipeMove(k)}},{key:"_onMouseUp",value:function(k){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(k)}},{key:"_handleSwipeStart",value:function(k){var N=Y(k),J=N.x,G=N.y;this.moveStart={x:J,y:G},this.props.onSwipeStart(k)}},{key:"_handleSwipeMove",value:function(k){if(this.moveStart){var N=Y(k),J=N.x,G=N.y,K=J-this.moveStart.x,re=G-this.moveStart.y;this.moving=!0;var Z=this.props.onSwipeMove({x:K,y:re},k);Z&&k.cancelable&&k.preventDefault(),this.movePosition={deltaX:K,deltaY:re}}}},{key:"_handleSwipeEnd",value:function(k){this.props.onSwipeEnd(k);var N=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-N?this.props.onSwipeLeft(1,k):this.movePosition.deltaX>N&&this.props.onSwipeRight(1,k),this.movePosition.deltaY<-N?this.props.onSwipeUp(1,k):this.movePosition.deltaY>N&&this.props.onSwipeDown(1,k)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(k){this.swiper=k,this.props.innerRef(k)}},{key:"render",value:function(){var k=this.props;k.tagName;var N=k.className,J=k.style,G=k.children;k.allowMouseEvents,k.onSwipeUp,k.onSwipeDown,k.onSwipeLeft,k.onSwipeRight,k.onSwipeStart,k.onSwipeMove,k.onSwipeEnd,k.innerRef,k.tolerance;var K=g(k,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return c.default.createElement(this.props.tagName,y({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:N,style:J},K),G)}}]),B})(o.Component);X.displayName="ReactSwipe",X.propTypes={tagName:f.default.string,className:f.default.string,style:f.default.object,children:f.default.node,allowMouseEvents:f.default.bool,onSwipeUp:f.default.func,onSwipeDown:f.default.func,onSwipeLeft:f.default.func,onSwipeRight:f.default.func,onSwipeStart:f.default.func,onSwipeMove:f.default.func,onSwipeEnd:f.default.func,innerRef:f.default.func,tolerance:f.default.number.isRequired},X.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},l.default=X})})(_u)),_u}var wm;function uv(){return wm||(wm=1,(function(a){(function(l,o){o(a,w5())})(Ru,function(l,o){Object.defineProperty(l,"__esModule",{value:!0});var u=c(o);function c(f){return f&&f.__esModule?f:{default:f}}l.default=u.default})})(Ru)),Ru}var Bl={},Uc={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Em;function ov(){return Em||(Em=1,(function(a){(function(){var l={}.hasOwnProperty;function o(){for(var f="",h=0;h<arguments.length;h++){var y=arguments[h];y&&(f=c(f,u(y)))}return f}function u(f){if(typeof f=="string"||typeof f=="number")return f;if(typeof f!="object")return"";if(Array.isArray(f))return o.apply(null,f);if(f.toString!==Object.prototype.toString&&!f.toString.toString().includes("[native code]"))return f.toString();var h="";for(var y in f)l.call(f,y)&&f[y]&&(h=c(h,y));return h}function c(f,h){return h?f?f+" "+h:f+h:f}a.exports?(o.default=o,a.exports=o):window.classNames=o})()})(Uc)),Uc.exports}var Tm;function sv(){if(Tm)return Bl;Tm=1,Object.defineProperty(Bl,"__esModule",{value:!0}),Bl.default=void 0;var a=l(ov());function l(c){return c&&c.__esModule?c:{default:c}}function o(c,f,h){return f in c?Object.defineProperty(c,f,{value:h,enumerable:!0,configurable:!0,writable:!0}):c[f]=h,c}var u={ROOT:function(f){return(0,a.default)(o({"carousel-root":!0},f||"",!!f))},CAROUSEL:function(f){return(0,a.default)({carousel:!0,"carousel-slider":f})},WRAPPER:function(f,h){return(0,a.default)({"thumbs-wrapper":!f,"slider-wrapper":f,"axis-horizontal":h==="horizontal","axis-vertical":h!=="horizontal"})},SLIDER:function(f,h){return(0,a.default)({thumbs:!f,slider:f,animated:!h})},ITEM:function(f,h,y){return(0,a.default)({thumb:!f,slide:f,selected:h,previous:y})},ARROW_PREV:function(f){return(0,a.default)({"control-arrow control-prev":!0,"control-disabled":f})},ARROW_NEXT:function(f){return(0,a.default)({"control-arrow control-next":!0,"control-disabled":f})},DOT:function(f){return(0,a.default)({dot:!0,selected:f})}};return Bl.default=u,Bl}var $l={},ql={},Cm;function E5(){if(Cm)return ql;Cm=1,Object.defineProperty(ql,"__esModule",{value:!0}),ql.outerWidth=void 0;var a=function(o){var u=o.offsetWidth,c=getComputedStyle(o);return u+=parseInt(c.marginLeft)+parseInt(c.marginRight),u};return ql.outerWidth=a,ql}var Yl={},Rm;function Mf(){if(Rm)return Yl;Rm=1,Object.defineProperty(Yl,"__esModule",{value:!0}),Yl.default=void 0;var a=function(o,u,c){var f=o===0?o:o+u,h=c==="horizontal"?[f,0,0]:[0,f,0],y="translate3d",g="("+h.join(",")+")";return y+g};return Yl.default=a,Yl}var Gl={},_m;function cv(){if(_m)return Gl;_m=1,Object.defineProperty(Gl,"__esModule",{value:!0}),Gl.default=void 0;var a=function(){return window};return Gl.default=a,Gl}var Om;function fv(){if(Om)return $l;Om=1,Object.defineProperty($l,"__esModule",{value:!0}),$l.default=void 0;var a=g(da()),l=h(sv()),o=E5(),u=h(Mf()),c=h(uv()),f=h(cv());function h(G){return G&&G.__esModule?G:{default:G}}function y(){if(typeof WeakMap!="function")return null;var G=new WeakMap;return y=function(){return G},G}function g(G){if(G&&G.__esModule)return G;if(G===null||m(G)!=="object"&&typeof G!="function")return{default:G};var K=y();if(K&&K.has(G))return K.get(G);var re={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in G)if(Object.prototype.hasOwnProperty.call(G,D)){var ee=Z?Object.getOwnPropertyDescriptor(G,D):null;ee&&(ee.get||ee.set)?Object.defineProperty(re,D,ee):re[D]=G[D]}return re.default=G,K&&K.set(G,re),re}function m(G){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?m=function(re){return typeof re}:m=function(re){return re&&typeof Symbol=="function"&&re.constructor===Symbol&&re!==Symbol.prototype?"symbol":typeof re},m(G)}function S(){return S=Object.assign||function(G){for(var K=1;K<arguments.length;K++){var re=arguments[K];for(var Z in re)Object.prototype.hasOwnProperty.call(re,Z)&&(G[Z]=re[Z])}return G},S.apply(this,arguments)}function x(G,K){if(!(G instanceof K))throw new TypeError("Cannot call a class as a function")}function w(G,K){for(var re=0;re<K.length;re++){var Z=K[re];Z.enumerable=Z.enumerable||!1,Z.configurable=!0,"value"in Z&&(Z.writable=!0),Object.defineProperty(G,Z.key,Z)}}function j(G,K,re){return K&&w(G.prototype,K),G}function R(G,K){if(typeof K!="function"&&K!==null)throw new TypeError("Super expression must either be null or a function");G.prototype=Object.create(K&&K.prototype,{constructor:{value:G,writable:!0,configurable:!0}}),K&&q(G,K)}function q(G,K){return q=Object.setPrototypeOf||function(Z,D){return Z.__proto__=D,Z},q(G,K)}function Y(G){var K=B();return function(){var Z=F(G),D;if(K){var ee=F(this).constructor;D=Reflect.construct(Z,arguments,ee)}else D=Z.apply(this,arguments);return X(this,D)}}function X(G,K){return K&&(m(K)==="object"||typeof K=="function")?K:z(G)}function z(G){if(G===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return G}function B(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function F(G){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(re){return re.__proto__||Object.getPrototypeOf(re)},F(G)}function k(G,K,re){return K in G?Object.defineProperty(G,K,{value:re,enumerable:!0,configurable:!0,writable:!0}):G[K]=re,G}var N=function(K){return K.hasOwnProperty("key")},J=(function(G){R(re,G);var K=Y(re);function re(Z){var D;return x(this,re),D=K.call(this,Z),k(z(D),"itemsWrapperRef",void 0),k(z(D),"itemsListRef",void 0),k(z(D),"thumbsRef",void 0),k(z(D),"setItemsWrapperRef",function(ee){D.itemsWrapperRef=ee}),k(z(D),"setItemsListRef",function(ee){D.itemsListRef=ee}),k(z(D),"setThumbsRef",function(ee,ne){D.thumbsRef||(D.thumbsRef=[]),D.thumbsRef[ne]=ee}),k(z(D),"updateSizes",function(){if(!(!D.props.children||!D.itemsWrapperRef||!D.thumbsRef)){var ee=a.Children.count(D.props.children),ne=D.itemsWrapperRef.clientWidth,C=D.props.thumbWidth?D.props.thumbWidth:(0,o.outerWidth)(D.thumbsRef[0]),A=Math.floor(ne/C),H=A<ee,P=H?ee-A:0;D.setState(function(le,ce){return{itemSize:C,visibleItems:A,firstItem:H?D.getFirstItem(ce.selectedItem):0,lastPosition:P,showArrows:H}})}}),k(z(D),"handleClickItem",function(ee,ne,C){if(!N(C)||C.key==="Enter"){var A=D.props.onSelectItem;typeof A=="function"&&A(ee,ne)}}),k(z(D),"onSwipeStart",function(){D.setState({swiping:!0})}),k(z(D),"onSwipeEnd",function(){D.setState({swiping:!1})}),k(z(D),"onSwipeMove",function(ee){var ne=ee.x;if(!D.state.itemSize||!D.itemsWrapperRef||!D.state.visibleItems)return!1;var C=0,A=a.Children.count(D.props.children),H=-(D.state.firstItem*100)/D.state.visibleItems,P=Math.max(A-D.state.visibleItems,0),le=-P*100/D.state.visibleItems;H===C&&ne>0&&(ne=0),H===le&&ne<0&&(ne=0);var ce=D.itemsWrapperRef.clientWidth,T=H+100/(ce/ne);return D.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(V){D.itemsListRef.style[V]=(0,u.default)(T,"%",D.props.axis)}),!0}),k(z(D),"slideRight",function(ee){D.moveTo(D.state.firstItem-(typeof ee=="number"?ee:1))}),k(z(D),"slideLeft",function(ee){D.moveTo(D.state.firstItem+(typeof ee=="number"?ee:1))}),k(z(D),"moveTo",function(ee){ee=ee<0?0:ee,ee=ee>=D.state.lastPosition?D.state.lastPosition:ee,D.setState({firstItem:ee})}),D.state={selectedItem:Z.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},D}return j(re,[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(D){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==D.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,f.default)().addEventListener("resize",this.updateSizes),(0,f.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,f.default)().removeEventListener("resize",this.updateSizes),(0,f.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(D){var ee=D;return D>=this.state.lastPosition&&(ee=this.state.lastPosition),D<this.state.firstItem+this.state.visibleItems&&(ee=this.state.firstItem),D<this.state.firstItem&&(ee=D),ee}},{key:"renderItems",value:function(){var D=this;return this.props.children.map(function(ee,ne){var C=l.default.ITEM(!1,ne===D.state.selectedItem),A={key:ne,ref:function(P){return D.setThumbsRef(P,ne)},className:C,onClick:D.handleClickItem.bind(D,ne,D.props.children[ne]),onKeyDown:D.handleClickItem.bind(D,ne,D.props.children[ne]),"aria-label":"".concat(D.props.labels.item," ").concat(ne+1),style:{width:D.props.thumbWidth}};return a.default.createElement("li",S({},A,{role:"button",tabIndex:0}),ee)})}},{key:"render",value:function(){var D=this;if(!this.props.children)return null;var ee=a.Children.count(this.props.children)>1,ne=this.state.showArrows&&this.state.firstItem>0,C=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,A={},H=-this.state.firstItem*(this.state.itemSize||0),P=(0,u.default)(H,"px",this.props.axis),le=this.props.transitionTime+"ms";return A={WebkitTransform:P,MozTransform:P,MsTransform:P,OTransform:P,transform:P,msTransform:P,WebkitTransitionDuration:le,MozTransitionDuration:le,MsTransitionDuration:le,OTransitionDuration:le,transitionDuration:le,msTransitionDuration:le},a.default.createElement("div",{className:l.default.CAROUSEL(!1)},a.default.createElement("div",{className:l.default.WRAPPER(!1),ref:this.setItemsWrapperRef},a.default.createElement("button",{type:"button",className:l.default.ARROW_PREV(!ne),onClick:function(){return D.slideRight()},"aria-label":this.props.labels.leftArrow}),ee?a.default.createElement(c.default,{tagName:"ul",className:l.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:A,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):a.default.createElement("ul",{className:l.default.SLIDER(!1,this.state.swiping),ref:function(T){return D.setItemsListRef(T)},style:A},this.renderItems()),a.default.createElement("button",{type:"button",className:l.default.ARROW_NEXT(!C),onClick:function(){return D.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}]),re})(a.Component);return $l.default=J,k(J,"displayName","Thumbs"),k(J,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350}),$l}var Xl={},zm;function T5(){if(zm)return Xl;zm=1,Object.defineProperty(Xl,"__esModule",{value:!0}),Xl.default=void 0;var a=function(){return document};return Xl.default=a,Xl}var Dt={},Am;function dv(){if(Am)return Dt;Am=1,Object.defineProperty(Dt,"__esModule",{value:!0}),Dt.setPosition=Dt.getPosition=Dt.isKeyboardEvent=Dt.defaultStatusFormatter=Dt.noop=void 0;var a=da(),l=o(Mf());function o(g){return g&&g.__esModule?g:{default:g}}var u=function(){};Dt.noop=u;var c=function(m,S){return"".concat(m," of ").concat(S)};Dt.defaultStatusFormatter=c;var f=function(m){return m?m.hasOwnProperty("key"):!1};Dt.isKeyboardEvent=f;var h=function(m,S){if(S.infiniteLoop&&++m,m===0)return 0;var x=a.Children.count(S.children);if(S.centerMode&&S.axis==="horizontal"){var w=-m*S.centerSlidePercentage,j=x-1;return m&&(m!==j||S.infiniteLoop)?w+=(100-S.centerSlidePercentage)/2:m===j&&(w+=100-S.centerSlidePercentage),w}return-m*100};Dt.getPosition=h;var y=function(m,S){var x={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(w){x[w]=(0,l.default)(m,"%",S)}),x};return Dt.setPosition=y,Dt}var Ft={},jm;function C5(){if(jm)return Ft;jm=1,Object.defineProperty(Ft,"__esModule",{value:!0}),Ft.fadeAnimationHandler=Ft.slideStopSwipingHandler=Ft.slideSwipeAnimationHandler=Ft.slideAnimationHandler=void 0;var a=da(),l=u(Mf()),o=dv();function u(x){return x&&x.__esModule?x:{default:x}}function c(x,w){var j=Object.keys(x);if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(x);w&&(R=R.filter(function(q){return Object.getOwnPropertyDescriptor(x,q).enumerable})),j.push.apply(j,R)}return j}function f(x){for(var w=1;w<arguments.length;w++){var j=arguments[w]!=null?arguments[w]:{};w%2?c(Object(j),!0).forEach(function(R){h(x,R,j[R])}):Object.getOwnPropertyDescriptors?Object.defineProperties(x,Object.getOwnPropertyDescriptors(j)):c(Object(j)).forEach(function(R){Object.defineProperty(x,R,Object.getOwnPropertyDescriptor(j,R))})}return x}function h(x,w,j){return w in x?Object.defineProperty(x,w,{value:j,enumerable:!0,configurable:!0,writable:!0}):x[w]=j,x}var y=function(w,j){var R={},q=j.selectedItem,Y=q,X=a.Children.count(w.children)-1,z=w.infiniteLoop&&(q<0||q>X);if(z)return Y<0?w.centerMode&&w.centerSlidePercentage&&w.axis==="horizontal"?R.itemListStyle=(0,o.setPosition)(-(X+2)*w.centerSlidePercentage-(100-w.centerSlidePercentage)/2,w.axis):R.itemListStyle=(0,o.setPosition)(-(X+2)*100,w.axis):Y>X&&(R.itemListStyle=(0,o.setPosition)(0,w.axis)),R;var B=(0,o.getPosition)(q,w),F=(0,l.default)(B,"%",w.axis),k=w.transitionTime+"ms";return R.itemListStyle={WebkitTransform:F,msTransform:F,OTransform:F,transform:F},j.swiping||(R.itemListStyle=f(f({},R.itemListStyle),{},{WebkitTransitionDuration:k,MozTransitionDuration:k,OTransitionDuration:k,transitionDuration:k,msTransitionDuration:k})),R};Ft.slideAnimationHandler=y;var g=function(w,j,R,q){var Y={},X=j.axis==="horizontal",z=a.Children.count(j.children),B=0,F=(0,o.getPosition)(R.selectedItem,j),k=j.infiniteLoop?(0,o.getPosition)(z-1,j)-100:(0,o.getPosition)(z-1,j),N=X?w.x:w.y,J=N;F===B&&N>0&&(J=0),F===k&&N<0&&(J=0);var G=F+100/(R.itemSize/J),K=Math.abs(N)>j.swipeScrollTolerance;return j.infiniteLoop&&K&&(R.selectedItem===0&&G>-100?G-=z*100:R.selectedItem===z-1&&G<-z*100&&(G+=z*100)),(!j.preventMovementUntilSwipeScrollTolerance||K||R.swipeMovementStarted)&&(R.swipeMovementStarted||q({swipeMovementStarted:!0}),Y.itemListStyle=(0,o.setPosition)(G,j.axis)),K&&!R.cancelClick&&q({cancelClick:!0}),Y};Ft.slideSwipeAnimationHandler=g;var m=function(w,j){var R=(0,o.getPosition)(j.selectedItem,w),q=(0,o.setPosition)(R,w.axis);return{itemListStyle:q}};Ft.slideStopSwipingHandler=m;var S=function(w,j){var R=w.transitionTime+"ms",q="ease-in-out",Y={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:q,msTransitionTimingFunction:q,MozTransitionTimingFunction:q,WebkitTransitionTimingFunction:q,OTransitionTimingFunction:q};return j.swiping||(Y=f(f({},Y),{},{WebkitTransitionDuration:R,MozTransitionDuration:R,OTransitionDuration:R,transitionDuration:R,msTransitionDuration:R})),{slideStyle:Y,selectedStyle:f(f({},Y),{},{opacity:1,position:"relative"}),prevStyle:f({},Y)}};return Ft.fadeAnimationHandler=S,Ft}var Mm;function R5(){if(Mm)return Hl;Mm=1,Object.defineProperty(Hl,"__esModule",{value:!0}),Hl.default=void 0;var a=S(da()),l=g(uv()),o=g(sv()),u=g(fv()),c=g(T5()),f=g(cv()),h=dv(),y=C5();function g(Z){return Z&&Z.__esModule?Z:{default:Z}}function m(){if(typeof WeakMap!="function")return null;var Z=new WeakMap;return m=function(){return Z},Z}function S(Z){if(Z&&Z.__esModule)return Z;if(Z===null||x(Z)!=="object"&&typeof Z!="function")return{default:Z};var D=m();if(D&&D.has(Z))return D.get(Z);var ee={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in Z)if(Object.prototype.hasOwnProperty.call(Z,C)){var A=ne?Object.getOwnPropertyDescriptor(Z,C):null;A&&(A.get||A.set)?Object.defineProperty(ee,C,A):ee[C]=Z[C]}return ee.default=Z,D&&D.set(Z,ee),ee}function x(Z){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?x=function(ee){return typeof ee}:x=function(ee){return ee&&typeof Symbol=="function"&&ee.constructor===Symbol&&ee!==Symbol.prototype?"symbol":typeof ee},x(Z)}function w(){return w=Object.assign||function(Z){for(var D=1;D<arguments.length;D++){var ee=arguments[D];for(var ne in ee)Object.prototype.hasOwnProperty.call(ee,ne)&&(Z[ne]=ee[ne])}return Z},w.apply(this,arguments)}function j(Z,D){var ee=Object.keys(Z);if(Object.getOwnPropertySymbols){var ne=Object.getOwnPropertySymbols(Z);D&&(ne=ne.filter(function(C){return Object.getOwnPropertyDescriptor(Z,C).enumerable})),ee.push.apply(ee,ne)}return ee}function R(Z){for(var D=1;D<arguments.length;D++){var ee=arguments[D]!=null?arguments[D]:{};D%2?j(Object(ee),!0).forEach(function(ne){K(Z,ne,ee[ne])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Z,Object.getOwnPropertyDescriptors(ee)):j(Object(ee)).forEach(function(ne){Object.defineProperty(Z,ne,Object.getOwnPropertyDescriptor(ee,ne))})}return Z}function q(Z,D){if(!(Z instanceof D))throw new TypeError("Cannot call a class as a function")}function Y(Z,D){for(var ee=0;ee<D.length;ee++){var ne=D[ee];ne.enumerable=ne.enumerable||!1,ne.configurable=!0,"value"in ne&&(ne.writable=!0),Object.defineProperty(Z,ne.key,ne)}}function X(Z,D,ee){return D&&Y(Z.prototype,D),Z}function z(Z,D){if(typeof D!="function"&&D!==null)throw new TypeError("Super expression must either be null or a function");Z.prototype=Object.create(D&&D.prototype,{constructor:{value:Z,writable:!0,configurable:!0}}),D&&B(Z,D)}function B(Z,D){return B=Object.setPrototypeOf||function(ne,C){return ne.__proto__=C,ne},B(Z,D)}function F(Z){var D=J();return function(){var ne=G(Z),C;if(D){var A=G(this).constructor;C=Reflect.construct(ne,arguments,A)}else C=ne.apply(this,arguments);return k(this,C)}}function k(Z,D){return D&&(x(D)==="object"||typeof D=="function")?D:N(Z)}function N(Z){if(Z===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Z}function J(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function G(Z){return G=Object.setPrototypeOf?Object.getPrototypeOf:function(ee){return ee.__proto__||Object.getPrototypeOf(ee)},G(Z)}function K(Z,D,ee){return D in Z?Object.defineProperty(Z,D,{value:ee,enumerable:!0,configurable:!0,writable:!0}):Z[D]=ee,Z}var re=(function(Z){z(ee,Z);var D=F(ee);function ee(ne){var C;q(this,ee),C=D.call(this,ne),K(N(C),"thumbsRef",void 0),K(N(C),"carouselWrapperRef",void 0),K(N(C),"listRef",void 0),K(N(C),"itemsRef",void 0),K(N(C),"timer",void 0),K(N(C),"animationHandler",void 0),K(N(C),"setThumbsRef",function(H){C.thumbsRef=H}),K(N(C),"setCarouselWrapperRef",function(H){C.carouselWrapperRef=H}),K(N(C),"setListRef",function(H){C.listRef=H}),K(N(C),"setItemsRef",function(H,P){C.itemsRef||(C.itemsRef=[]),C.itemsRef[P]=H}),K(N(C),"autoPlay",function(){a.Children.count(C.props.children)<=1||(C.clearAutoPlay(),C.props.autoPlay&&(C.timer=setTimeout(function(){C.increment()},C.props.interval)))}),K(N(C),"clearAutoPlay",function(){C.timer&&clearTimeout(C.timer)}),K(N(C),"resetAutoPlay",function(){C.clearAutoPlay(),C.autoPlay()}),K(N(C),"stopOnHover",function(){C.setState({isMouseEntered:!0},C.clearAutoPlay)}),K(N(C),"startOnLeave",function(){C.setState({isMouseEntered:!1},C.autoPlay)}),K(N(C),"isFocusWithinTheCarousel",function(){return C.carouselWrapperRef?!!((0,c.default)().activeElement===C.carouselWrapperRef||C.carouselWrapperRef.contains((0,c.default)().activeElement)):!1}),K(N(C),"navigateWithKeyboard",function(H){if(C.isFocusWithinTheCarousel()){var P=C.props.axis,le=P==="horizontal",ce={ArrowUp:38,ArrowRight:39,ArrowDown:40,ArrowLeft:37},T=le?ce.ArrowRight:ce.ArrowDown,V=le?ce.ArrowLeft:ce.ArrowUp;T===H.keyCode?C.increment():V===H.keyCode&&C.decrement()}}),K(N(C),"updateSizes",function(){if(!(!C.state.initialized||!C.itemsRef||C.itemsRef.length===0)){var H=C.props.axis==="horizontal",P=C.itemsRef[0];if(P){var le=H?P.clientWidth:P.clientHeight;C.setState({itemSize:le}),C.thumbsRef&&C.thumbsRef.updateSizes()}}}),K(N(C),"setMountState",function(){C.setState({hasMount:!0}),C.updateSizes()}),K(N(C),"handleClickItem",function(H,P){if(a.Children.count(C.props.children)!==0){if(C.state.cancelClick){C.setState({cancelClick:!1});return}C.props.onClickItem(H,P),H!==C.state.selectedItem&&C.setState({selectedItem:H})}}),K(N(C),"handleOnChange",function(H,P){a.Children.count(C.props.children)<=1||C.props.onChange(H,P)}),K(N(C),"handleClickThumb",function(H,P){C.props.onClickThumb(H,P),C.moveTo(H)}),K(N(C),"onSwipeStart",function(H){C.setState({swiping:!0}),C.props.onSwipeStart(H)}),K(N(C),"onSwipeEnd",function(H){C.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),C.props.onSwipeEnd(H),C.clearAutoPlay(),C.state.autoPlay&&C.autoPlay()}),K(N(C),"onSwipeMove",function(H,P){C.props.onSwipeMove(P);var le=C.props.swipeAnimationHandler(H,C.props,C.state,C.setState.bind(N(C)));return C.setState(R({},le)),!!Object.keys(le).length}),K(N(C),"decrement",function(){var H=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;C.moveTo(C.state.selectedItem-(typeof H=="number"?H:1))}),K(N(C),"increment",function(){var H=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;C.moveTo(C.state.selectedItem+(typeof H=="number"?H:1))}),K(N(C),"moveTo",function(H){if(typeof H=="number"){var P=a.Children.count(C.props.children)-1;H<0&&(H=C.props.infiniteLoop?P:0),H>P&&(H=C.props.infiniteLoop?0:P),C.selectItem({selectedItem:H}),C.state.autoPlay&&C.state.isMouseEntered===!1&&C.resetAutoPlay()}}),K(N(C),"onClickNext",function(){C.increment(1)}),K(N(C),"onClickPrev",function(){C.decrement(1)}),K(N(C),"onSwipeForward",function(){C.increment(1),C.props.emulateTouch&&C.setState({cancelClick:!0})}),K(N(C),"onSwipeBackwards",function(){C.decrement(1),C.props.emulateTouch&&C.setState({cancelClick:!0})}),K(N(C),"changeItem",function(H){return function(P){(!(0,h.isKeyboardEvent)(P)||P.key==="Enter")&&C.moveTo(H)}}),K(N(C),"selectItem",function(H){C.setState(R({previousItem:C.state.selectedItem},H),function(){C.setState(C.animationHandler(C.props,C.state))}),C.handleOnChange(H.selectedItem,a.Children.toArray(C.props.children)[H.selectedItem])}),K(N(C),"getInitialImage",function(){var H=C.props.selectedItem,P=C.itemsRef&&C.itemsRef[H],le=P&&P.getElementsByTagName("img")||[];return le[0]}),K(N(C),"getVariableItemHeight",function(H){var P=C.itemsRef&&C.itemsRef[H];if(C.state.hasMount&&P&&P.children.length){var le=P.children[0].getElementsByTagName("img")||[];if(le.length>0){var ce=le[0];if(!ce.complete){var T=function ae(){C.forceUpdate(),ce.removeEventListener("load",ae)};ce.addEventListener("load",T)}}var V=le[0]||P.children[0],ie=V.clientHeight;return ie>0?ie:null}return null});var A={initialized:!1,previousItem:ne.selectedItem,selectedItem:ne.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:ne.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return C.animationHandler=typeof ne.animationHandler=="function"&&ne.animationHandler||ne.animationHandler==="fade"&&y.fadeAnimationHandler||y.slideAnimationHandler,C.state=R(R({},A),C.animationHandler(ne,A)),C}return X(ee,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(C,A){!C.children&&this.props.children&&!this.state.initialized&&this.setupCarousel(),!C.autoFocus&&this.props.autoFocus&&this.forceFocus(),A.swiping&&!this.state.swiping&&this.setState(R({},this.props.stopSwipingHandler(this.props,this.state))),(C.selectedItem!==this.props.selectedItem||C.centerMode!==this.props.centerMode)&&(this.updateSizes(),this.moveTo(this.props.selectedItem)),C.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var C=this;this.bindEvents(),this.state.autoPlay&&a.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},function(){var A=C.getInitialImage();A&&!A.complete?A.addEventListener("load",C.setMountState):C.setMountState()})}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var C=this.carouselWrapperRef;this.props.stopOnHover&&C&&(C.addEventListener("mouseenter",this.stopOnHover),C.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var C=this.carouselWrapperRef;this.props.stopOnHover&&C&&(C.removeEventListener("mouseenter",this.stopOnHover),C.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,f.default)().addEventListener("resize",this.updateSizes),(0,f.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,c.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,f.default)().removeEventListener("resize",this.updateSizes),(0,f.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var C=this.getInitialImage();C&&C.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,c.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var C;(C=this.carouselWrapperRef)===null||C===void 0||C.focus()}},{key:"renderItems",value:function(C){var A=this;return this.props.children?a.Children.map(this.props.children,function(H,P){var le=P===A.state.selectedItem,ce=P===A.state.previousItem,T=le&&A.state.selectedStyle||ce&&A.state.prevStyle||A.state.slideStyle||{};A.props.centerMode&&A.props.axis==="horizontal"&&(T=R(R({},T),{},{minWidth:A.props.centerSlidePercentage+"%"})),A.state.swiping&&A.state.swipeMovementStarted&&(T=R(R({},T),{},{pointerEvents:"none"}));var V={ref:function(ae){return A.setItemsRef(ae,P)},key:"itemKey"+P+(C?"clone":""),className:o.default.ITEM(!0,P===A.state.selectedItem,P===A.state.previousItem),onClick:A.handleClickItem.bind(A,P,H),style:T};return a.default.createElement("li",V,A.props.renderItem(H,{isSelected:P===A.state.selectedItem,isPrevious:P===A.state.previousItem}))}):[]}},{key:"renderControls",value:function(){var C=this,A=this.props,H=A.showIndicators,P=A.labels,le=A.renderIndicator,ce=A.children;return H?a.default.createElement("ul",{className:"control-dots"},a.Children.map(ce,function(T,V){return le&&le(C.changeItem(V),V===C.state.selectedItem,V,P.item)})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?a.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,a.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return!this.props.showThumbs||!this.props.children||a.Children.count(this.props.children)===0?null:a.default.createElement(u.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children))}},{key:"render",value:function(){var C=this;if(!this.props.children||a.Children.count(this.props.children)===0)return null;var A=this.props.swipeable&&a.Children.count(this.props.children)>1,H=this.props.axis==="horizontal",P=this.props.showArrows&&a.Children.count(this.props.children)>1,le=P&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,ce=P&&(this.state.selectedItem<a.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,T=this.renderItems(!0),V=T.shift(),ie=T.pop(),ae={className:o.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},se={};if(H){if(ae.onSwipeLeft=this.onSwipeForward,ae.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var he=this.getVariableItemHeight(this.state.selectedItem);se.height=he||"auto"}}else ae.onSwipeUp=this.props.verticalSwipe==="natural"?this.onSwipeBackwards:this.onSwipeForward,ae.onSwipeDown=this.props.verticalSwipe==="natural"?this.onSwipeForward:this.onSwipeBackwards,ae.style=R(R({},ae.style),{},{height:this.state.itemSize}),se.height=this.state.itemSize;return a.default.createElement("div",{"aria-label":this.props.ariaLabel,className:o.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},a.default.createElement("div",{className:o.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,le,this.props.labels.leftArrow),a.default.createElement("div",{className:o.default.WRAPPER(!0,this.props.axis),style:se},A?a.default.createElement(l.default,w({tagName:"ul",innerRef:this.setListRef},ae,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&ie,this.renderItems(),this.props.infiniteLoop&&V):a.default.createElement("ul",{className:o.default.SLIDER(!0,this.state.swiping),ref:function(Ue){return C.setListRef(Ue)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&ie,this.renderItems(),this.props.infiniteLoop&&V)),this.props.renderArrowNext(this.onClickNext,ce,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}]),ee})(a.default.Component);return Hl.default=re,K(re,"displayName","Carousel"),K(re,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:h.noop,onClickThumb:h.noop,onChange:h.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(D,ee,ne){return a.default.createElement("button",{type:"button","aria-label":ne,className:o.default.ARROW_PREV(!ee),onClick:D})},renderArrowNext:function(D,ee,ne){return a.default.createElement("button",{type:"button","aria-label":ne,className:o.default.ARROW_NEXT(!ee),onClick:D})},renderIndicator:function(D,ee,ne,C){return a.default.createElement("li",{className:o.default.DOT(ee),onClick:D,onKeyDown:D,value:ne,key:ne,role:"button",tabIndex:0,"aria-label":"".concat(C," ").concat(ne+1)})},renderItem:function(D){return D},renderThumbs:function(D){var ee=a.Children.map(D,function(ne){var C=ne;if(ne.type!=="img"&&(C=a.Children.toArray(ne.props.children).find(function(A){return A.type==="img"})),!!C)return C});return ee.filter(function(ne){return ne}).length===0?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):ee},statusFormatter:h.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:y.slideSwipeAnimationHandler,stopSwipingHandler:y.slideStopSwipingHandler}),Hl}var Nm={},Dm;function _5(){return Dm||(Dm=1),Nm}var Lm;function O5(){return Lm||(Lm=1,(function(a){Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"Carousel",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(a,"CarouselProps",{enumerable:!0,get:function(){return o.CarouselProps}}),Object.defineProperty(a,"Thumbs",{enumerable:!0,get:function(){return u.default}});var l=c(R5()),o=_5(),u=c(fv());function c(f){return f&&f.__esModule?f:{default:f}}})(Mc)),Mc}var z5=O5();const A5=O.article`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(180deg, #ffe6e6 0%, #ffcccc 100%);
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.12);
`,j5=O.div`
  position: relative;
  background: linear-gradient(135deg, #eef2ff, #e0f7fa);
`,M5=O.img`
  display: block;
  width: 100%;
  max-height: 520px;
  object-fit: cover;
`,N5=O.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px 18px 20px;
  color: #0f172a;
`,D5=O.div`
  flex: 1 1 auto;
`,L5=O.h3`
  margin: 0 0 6px;
  font-size: clamp(18px, 2.2vw, 22px);
  line-height: 1.2;
`,U5=O.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #334155;
`,k5=O.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,Um=O.button`
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
  &:hover { transform: translateY(-2px); }
  &:active { transform: translateY(0); }
`,H5=O.div`
  position: absolute;
  right: 12px;
  top: 12px;
  background: rgba(15, 23, 42, 0.06);
  padding: 6px 8px;
  border-radius: 999px;
  font-size: 12px;
  color: #0f172a;
  backdrop-filter: blur(4px);
`;function B5({data:a,likedDefault:l=!1,savedDefault:o=!1,onLikeChange:u,onBookmarkChange:c}){const{title:f="Infographic Title",description:h="",carouselImgSrc:y=[]}=a||{},[g,m]=b.useState(()=>y.map(()=>l)),[S,x]=b.useState(()=>y.map(()=>o)),[w,j]=b.useState(0),R=Y=>{m(X=>{const z=[...X];return z[Y]=!z[Y],u&&u(Y,z[Y]),z})},q=Y=>{x(X=>{const z=[...X];return z[Y]=!z[Y],c&&c(Y,z[Y]),z})};return!y||y.length===0?null:p.jsxs(A5,{children:[p.jsxs(j5,{children:[p.jsx(z5.Carousel,{showThumbs:!1,showIndicators:!0,showStatus:!1,infiniteLoop:!0,autoPlay:!0,interval:2500,transitionTime:800,stopOnHover:!0,swipeable:!0,emulateTouch:!0,showArrows:!0,onChange:Y=>j(Y),children:y.map((Y,X)=>p.jsx("div",{children:p.jsx(M5,{src:Y,alt:`${f} — slide ${X+1}`})},X))}),p.jsxs(H5,{children:[w+1,"/",y.length]})]}),p.jsxs(N5,{children:[p.jsxs(D5,{children:[p.jsx(L5,{children:f}),h&&p.jsx(U5,{children:h})]}),p.jsxs(k5,{children:[p.jsx(Um,{onClick:()=>R(w),"aria-label":g[w]?"Unlike slide":"Like slide",title:g[w]?"Unlike":"Like",children:g[w]?p.jsx(Of,{size:20}):p.jsx(zf,{size:20})}),p.jsx(Um,{onClick:()=>q(w),"aria-label":S[w]?"Remove bookmark from slide":"Bookmark slide",title:S[w]?"Remove bookmark":"Bookmark",children:S[w]?p.jsx(Af,{size:18}):p.jsx(jf,{size:18})})]})]})]})}const $5="modulepreload",q5=function(a){return"/instalearn/"+a},km={},un=function(l,o,u){let c=Promise.resolve();if(o&&o.length>0){let g=function(m){return Promise.all(m.map(S=>Promise.resolve(S).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),y=h?.nonce||h?.getAttribute("nonce");c=g(o.map(m=>{if(m=q5(m),m in km)return;km[m]=!0;const S=m.endsWith(".css"),x=S?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${x}`))return;const w=document.createElement("link");if(w.rel=S?"stylesheet":$5,S||(w.as="script"),w.crossOrigin="",w.href=m,y&&w.setAttribute("nonce",y),document.head.appendChild(w),S)return new Promise((j,R)=>{w.addEventListener("load",j),w.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${m}`)))})}))}function f(h){const y=new Event("vite:preloadError",{cancelable:!0});if(y.payload=h,window.dispatchEvent(y),!y.defaultPrevented)throw h}return c.then(h=>{for(const y of h||[])y.status==="rejected"&&f(y.reason);return l().catch(f)})},hv=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,Hm=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,Bm=/\.(m3u8)($|\?)/i,Y5=/\.(mpd)($|\?)/i,G5=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,X5=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,V5=/vimeo\.com\/(?!progressive_redirect).+/,Q5=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,K5=/open\.spotify\.com\/(\w+)\/(\w+)/i,Z5=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+|(videos?\/|\?video=)\d+)($|\?)/,J5=/tiktok\.com\/(?:player\/v1\/|share\/video\/|@[^/]+\/video\/)([0-9]+)/,Pl=(a,l)=>{if(Array.isArray(a)){for(const o of a)if(typeof o=="string"&&Pl(o,l)||Pl(o.src,l))return!0;return!1}return l(a)},rn={html:a=>Pl(a,l=>hv.test(l)||Hm.test(l)),hls:a=>Pl(a,l=>Bm.test(l)),dash:a=>Pl(a,l=>Y5.test(l)),mux:a=>G5.test(a),youtube:a=>X5.test(a),vimeo:a=>V5.test(a)&&!Hm.test(a)&&!Bm.test(a),wistia:a=>Q5.test(a),spotify:a=>K5.test(a),twitch:a=>Z5.test(a),tiktok:a=>J5.test(a)},P5=ze.forwardRef((a,l)=>{const o=hv.test(`${a.src}`)?"audio":"video";return ze.createElement(o,{...a,ref:l},a.children)});var W5=P5;const F5=[{key:"hls",name:"hls.js",canPlay:rn.hls,canEnablePIP:()=>!0,player:b.lazy(()=>un(()=>import("./react-ThbvgvLD.js"),__vite__mapDeps([0,1,2])))},{key:"dash",name:"dash.js",canPlay:rn.dash,canEnablePIP:()=>!0,player:b.lazy(()=>un(()=>import("./react-B4VtdS1X.js"),__vite__mapDeps([3,1])))},{key:"mux",name:"Mux",canPlay:rn.mux,canEnablePIP:()=>!0,player:b.lazy(()=>un(()=>import("./index-C1sa0vQz.js"),__vite__mapDeps([4,2,1])))},{key:"youtube",name:"YouTube",canPlay:rn.youtube,player:b.lazy(()=>un(()=>import("./react-evIkPi0Y.js"),[]))},{key:"vimeo",name:"Vimeo",canPlay:rn.vimeo,player:b.lazy(()=>un(()=>import("./react-D4S7gHsi.js"),[]))},{key:"wistia",name:"Wistia",canPlay:rn.wistia,canEnablePIP:()=>!0,player:b.lazy(()=>un(()=>import("./react-CR4CACdb.js"),[]))},{key:"spotify",name:"Spotify",canPlay:rn.spotify,canEnablePIP:()=>!1,player:b.lazy(()=>un(()=>import("./react-BEdRxwVm.js"),[]))},{key:"twitch",name:"Twitch",canPlay:rn.twitch,canEnablePIP:()=>!1,player:b.lazy(()=>un(()=>import("./react-CHf5H2Rk.js"),[]))},{key:"tiktok",name:"TikTok",canPlay:rn.tiktok,canEnablePIP:()=>!1,player:b.lazy(()=>un(()=>import("./react-Dsq1ndVo.js"),[]))},{key:"html",name:"html",canPlay:rn.html,canEnablePIP:()=>!0,player:W5}];var ff=F5;const I5={width:"320px",height:"180px",volume:1,playbackRate:1,previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}"},pv=ze.forwardRef((a,l)=>{const{playing:o,pip:u}=a,c=a.activePlayer,f=b.useRef(null),h=b.useRef(!0);b.useEffect(()=>{var x,w;f.current&&(f.current.paused&&o===!0&&f.current.play(),!f.current.paused&&o===!1&&f.current.pause(),f.current.playbackRate=(x=a.playbackRate)!=null?x:1,f.current.volume=(w=a.volume)!=null?w:1)}),b.useEffect(()=>{var x,w,j,R,q;if(!(!f.current||!globalThis.document)){if(u&&!document.pictureInPictureElement)try{(w=(x=f.current).requestPictureInPicture)==null||w.call(x)}catch{}if(!u&&document.pictureInPictureElement)try{(R=(j=f.current).exitPictureInPicture)==null||R.call(j),(q=document.exitPictureInPicture)==null||q.call(document)}catch{}}},[u]);const y=x=>{var w,j;h.current=!0,(w=a.onReady)==null||w.call(a),(j=a.onLoadStart)==null||j.call(a,x)},g=x=>{var w,j;h.current&&(h.current=!1,(w=a.onStart)==null||w.call(a,x)),(j=a.onPlay)==null||j.call(a,x)};if(!c)return null;const m={},S=["onReady","onStart"];for(const x in a)x.startsWith("on")&&!S.includes(x)&&(m[x]=a[x]);return ze.createElement(c,{...m,style:a.style,className:a.className,slot:a.slot,ref:b.useCallback(x=>{f.current=x,typeof l=="function"?l(x):l!==null&&(l.current=x)},[l]),src:a.src,crossOrigin:a.crossOrigin,preload:a.preload,controls:a.controls,muted:a.muted,autoPlay:a.autoPlay,loop:a.loop,playsInline:a.playsInline,config:a.config,onLoadStart:y,onPlay:g},a.children)});pv.displayName="Player";var eS=pv;const tS=b.lazy(()=>un(()=>import("./Preview-CxL5rF95.js"),[])),Vl=[],nS=(a,l)=>{const o=c=>{for(const f of[...Vl,...a])if(c&&f.canPlay(c))return f;return l||null},u=ze.forwardRef((c,f)=>{const h={...I5,...c},{src:y,slot:g,className:m,style:S,width:x,height:w,fallback:j,wrapper:R}=h,[q,Y]=b.useState(!!h.light);b.useEffect(()=>{h.light?Y(!0):Y(!1)},[h.light]);const X=N=>{var J;Y(!1),(J=h.onClickPreview)==null||J.call(h,N)},z=N=>{if(!N)return null;const{light:J,playIcon:G,previewTabIndex:K,oEmbedUrl:re,previewAriaLabel:Z}=h;return ze.createElement(tS,{src:N,light:J,playIcon:G,previewTabIndex:K,previewAriaLabel:Z,oEmbedUrl:re,onClickPreview:X})},B=N=>{var J,G;const K=o(N);if(!K)return null;const{style:re,width:Z,height:D,wrapper:ee}=h,ne=(J=h.config)==null?void 0:J[K.key];return ze.createElement(eS,{...h,ref:f,activePlayer:(G=K.player)!=null?G:K,slot:ee?void 0:g,className:ee?void 0:m,style:ee?{display:"block",width:"100%",height:"100%"}:{display:"block",width:Z,height:D,...re},config:ne})},F=R??$m,k=j===!1?$m:b.Suspense;return ze.createElement(F,{slot:g,className:m,style:{width:x,height:w,...S}},ze.createElement(k,{fallback:j},q?z(y):B(y)))});return u.displayName="ReactPlayer",u.addCustomPlayer=c=>{Vl.push(c)},u.removeCustomPlayers=()=>{Vl.length=0},u.canPlay=c=>{if(c){for(const f of[...Vl,...a])if(f.canPlay(c))return!0}return!1},u.canEnablePIP=c=>{var f;if(c){for(const h of[...Vl,...a])if(h.canPlay(c)&&((f=h.canEnablePIP)!=null&&f.call(h)))return!0}return!1},u},$m=({children:a})=>a,aS=ff[ff.length-1];var iS=nS(ff,aS);const lS=O.article`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(180deg, #dff6ff 0%, #bce0ff 100%);
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.12);
`,rS=O.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background: #000;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`,uS=O.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 18px 20px;
  color: #0f172a;
`,oS=O.div`
  flex: 1 1 auto;
`,sS=O.h3`
  margin: 0 0 6px;
  font-size: clamp(18px, 2.2vw, 22px);
  line-height: 1.2;
`,cS=O.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #334155;
`,fS=O.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,qm=O.button`
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
`;function dS({data:a,likedDefault:l=!1,savedDefault:o=!1,onLikeChange:u,onBookmarkChange:c}){const{title:f,description:h,vedioClipSrc:y}=a||{},[g,m]=b.useState(l),[S,x]=b.useState(o),w=()=>{const R=!g;m(R),u&&u(R)},j=()=>{const R=!S;x(R),c&&c(R)};return y?p.jsxs(lS,{children:[p.jsx(rS,{children:p.jsx(iS,{className:"react-player",url:y,width:"100%",height:"100%",controls:!0,playing:!0,muted:!0,loop:!0})}),p.jsxs(uS,{children:[p.jsxs(oS,{children:[p.jsx(sS,{children:f}),h&&p.jsx(cS,{children:h})]}),p.jsxs(fS,{children:[p.jsx(qm,{onClick:w,"aria-label":g?"Unlike video":"Like video",title:g?"Unlike":"Like",children:g?p.jsx(Of,{size:20}):p.jsx(zf,{size:20})}),p.jsx(qm,{onClick:j,"aria-label":S?"Remove bookmark":"Bookmark video",title:S?"Remove bookmark":"Bookmark",children:S?p.jsx(Af,{size:18}):p.jsx(jf,{size:18})})]})]})]}):null}const mv=O.article`
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  max-width: 1000px;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(180deg, #f5f5f5 0%, #e0e0e0 100%);
  backdrop-filter: blur(8px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-3px) scale(1.005);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`,hS=O.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${mv}:hover & {
    transform: scale(1.05);
  }
`,pS=O.div`
  padding: 20px 24px;
`,mS=O.h2`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: #1f2937;
`,vS=O.p`
  font-size: 1rem;
  margin-bottom: 16px;
  color: #374151;
  line-height: 1.5;
`,gS=O.button.withConfig({shouldForwardProp:a=>a!=="selected"&&a!=="correct"})`
  display: block;
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 10px;
  border-radius: 12px;
  border: 1px solid #ddd;
  background: ${({selected:a,correct:l})=>a?l?"linear-gradient(90deg, #a3e635, #4ade80)":"linear-gradient(90deg, #f87171, #ef4444)":"#f3f4f6"};
  color: ${({selected:a})=>a?"#fff":"#111827"};
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
  box-shadow: ${({selected:a})=>a?"0 4px 12px rgba(0,0,0,0.15)":"none"};

  &:hover {
    background: ${({selected:a})=>a?"":"linear-gradient(90deg, #e5e7eb, #d1d5db)"};
  }
`,yS=({mcq:a})=>{const[l,o]=b.useState(null),u=c=>{l||o(c)};return p.jsxs(mv,{children:[p.jsx(hS,{src:a.imgSrc,alt:a.title}),p.jsxs(pS,{children:[p.jsx(mS,{children:a.title}),p.jsx(vS,{children:a.description}),a.options.map((c,f)=>p.jsx(gS,{selected:l===c,correct:c===a.correctAnswer,onClick:()=>u(c),children:c},f))]})]})},bS="/instalearn/assets/Nutrition-BfBrn9tn.png",xS="/instalearn/assets/Respiration-B5Csk1VR.png",SS="/instalearn/assets/Transportation-BxGtnbrT.png",wS="/instalearn/assets/Excreation-C95doeHw.png",ES="/instalearn/assets/Slide1-D2afjhkb.png",TS="/instalearn/assets/Slide2-DIwEjNVQ.png",CS="/instalearn/assets/Slide3-C5ID8kCw.png",RS="/instalearn/assets/Slide4-ulaEiMHb.png",_S="/instalearn/assets/Slide5-CzICeeJV.png",OS="/instalearn/assets/Slide6-BsK1hLVc.png",zS="/instalearn/assets/Slide7-DNPKyHLa.png",AS="/instalearn/assets/Slide8-Bzon4H9P.png",jS="/instalearn/assets/Slide9-CbcZeZ2g.png",MS="/instalearn/assets/Slide10-Ss8450kM.png",NS="/instalearn/assets/vedioClip1-BQ1quwNm.mp4",DS="/instalearn/assets/test-BrOnAr5c.png",Ou={Nutrition:bS,Respiration:xS,Transportation:SS,Excreation:wS},st={Slide1:ES,Slide2:TS,Slide3:CS,Slide4:RS,Slide5:_S,Slide6:OS,Slide7:zS,Slide8:AS,Slide9:jS,Slide10:MS},LS={videoClip1:NS},US={test:DS},kS=[{id:1,name:"Nutrition",img:Ou.Nutrition,hasNew:!0,slides:[US.test,"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=1400&fit=crop"]},{id:2,name:"Respiration",img:Ou.Respiration,hasNew:!0,slides:["https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=1400&fit=crop"]},{id:3,name:"Transportation",img:Ou.Transportation,hasNew:!0,slides:["https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=1400&fit=crop"]},{id:4,name:"Excretion",img:Ou.Excreation,hasNew:!0,slides:["https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1525268771113-32d9e9021a97?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=1400&fit=crop"]},{id:5,name:"Growth",img:"https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=800&h=1400&fit=crop"]}];function HS({isOpen:a,activeIndex:l,setActiveIndex:o,total:u,onClose:c,duration:f=3e3}){const h=b.useRef(Date.now()),y=b.useRef(),g=b.useRef(0),m=b.useCallback(()=>{const x=Date.now()-h.current,w=Math.min(1,x/f);g.current=w,w>=1?l<u-1?o(j=>j+1):c():y.current=requestAnimationFrame(m)},[l,u,f,c,o]);return b.useEffect(()=>{if(a)return h.current=Date.now(),y.current=requestAnimationFrame(m),()=>cancelAnimationFrame(y.current)},[a,l,m]),{resetTimer:b.useCallback(()=>{h.current=Date.now()},[]),getProgressValue:()=>g.current}}const BS=O.div``,$S=O.div`
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
`,qS=O.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 16px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,YS=O.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border: 0;
  background: transparent;
  cursor: pointer;
`,GS=O.div`
  padding: 2px;
  border-radius: 999px;
  ${a=>a.$hasNew?Ua`
          background: linear-gradient(
            45deg,
            #f09433 0%,
            #e6683c 25%,
            #dc2743 50%,
            #cc2366 75%,
            #bc1888 100%
          );
        `:Ua`
          background: transparent;
        `};
`,XS=O.div`
  background: #fff;
  padding: 3px;
  border-radius: 999px;
`,VS=O.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 999px;
  user-drag: none;
  -webkit-user-drag: none;
`,QS=O.span`
  font-size: 12px;
  color: #1f2937;
  max-width: 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,KS=O.div`
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
`,ZS=O.div`
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
`,JS=O.div`
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
`,PS=O.div`
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
`,WS=O.div`
  height: 3px;
  flex: 1;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    height: 2.5px;
  }
`,FS=O.div`
  height: 100%;
  background: linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.95) 100%);
  transition: width 100ms linear;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
`,IS=O.div`
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
`,e3=O.img`
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
`,t3=O.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
`,n3=O.div`
  font-weight: 700;
  font-size: clamp(13px, 2.2vw, 15px);
  line-height: 1.2;
  letter-spacing: -0.01em;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,a3=O.div`
  font-size: clamp(11px, 1.8vw, 13px);
  opacity: 0.85;
  line-height: 1.2;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,i3=O.button`
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
`,l3=O.img`
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
`,Ym=O.div`
  position: absolute;
  top: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 10;
  touch-action: manipulation;
  
  ${a=>a.$side==="left"?Ua`
          left: 0; 
          width: 33.3333%;
        `:Ua`
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
`;function r3(a){return Ve({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1.47978 1.4797C1.30227 1.65721 1.28614 1.93498 1.43137 2.13072L1.47978 2.1868L4.1695 4.87652C2.88817 5.77616 1.93052 7.11985 1.53259 8.70952C1.46554 8.97738 1.62834 9.24892 1.89621 9.31598C2.16409 9.38298 2.4356 9.22025 2.50266 8.95232C2.85564 7.54225 3.72742 6.35956 4.88944 5.59626L6.09586 6.80278C5.62419 7.28378 5.33334 7.94278 5.33334 8.66965C5.33334 10.1424 6.52724 11.3363 8 11.3363C8.72694 11.3363 9.38587 11.0454 9.86694 10.5738L13.8131 14.5201C14.0084 14.7154 14.3249 14.7154 14.5202 14.5201C14.6977 14.3426 14.7139 14.0649 14.5686 13.8691L14.5202 13.813L10.4445 9.73692L10.4453 9.73592L9.64527 8.93732L7.732 7.02445L7.73334 7.02392L5.81252 5.10513L5.81334 5.10392L5.05782 4.35024L2.18689 1.4797C1.99163 1.28444 1.67504 1.28444 1.47978 1.4797ZM6.80274 7.51025L9.15947 9.86698C8.85947 10.1575 8.4506 10.3363 8 10.3363C7.07954 10.3363 6.33334 9.59012 6.33334 8.66965C6.33334 8.21905 6.51216 7.81018 6.80274 7.51025ZM8 3.66658C7.33314 3.66658 6.68607 3.7653 6.07406 3.94992L6.89874 4.77404C7.25594 4.70346 7.62427 4.66658 8 4.66658C10.6154 4.66658 12.8733 6.45342 13.4981 8.95538C13.565 9.22325 13.8364 9.38618 14.1043 9.31932C14.3723 9.25238 14.5352 8.98098 14.4683 8.71305C13.7329 5.7684 11.077 3.66658 8 3.66658ZM8.1298 6.0061L10.664 8.53992C10.5961 7.16865 9.49814 6.07168 8.1298 6.0061Z"},child:[]}]})(a)}function u3({currentItem:a,isOpen:l,slideIndex:o,setSlideIndex:u,onClose:c,duration:f=3e3}){const h=a?.slides?.length||0,{resetTimer:y,getProgressValue:g}=HS({isOpen:l,activeIndex:o,setActiveIndex:u,total:h,onClose:c,duration:f}),m=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[,S]=b.useState(0);b.useEffect(()=>{if(!l||m)return;let R;const q=()=>{S(Y=>Y+1),R=requestAnimationFrame(q)};return R=requestAnimationFrame(q),()=>cancelAnimationFrame(R)},[l,m]);const x=b.useCallback(()=>{a&&(o<h-1?(u(R=>R+1),y()):c())},[a,o,h,y,c,u]),w=b.useCallback(()=>{a&&(o>0?(u(R=>R-1),y()):c())},[a,o,y,c,u]);b.useEffect(()=>{const R=q=>{l&&(q.key==="Escape"&&c(),q.key==="ArrowRight"&&x(),q.key==="ArrowLeft"&&w())};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[l,x,w,c]),b.useEffect(()=>(l?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[l]);const j=R=>R<o?1:R>o?0:g();return!l||!a?null:p.jsx(KS,{onClick:c,"aria-label":"Story overlay",children:p.jsx(ZS,{onClick:R=>R.stopPropagation(),children:p.jsxs(JS,{children:[p.jsx(PS,{"aria-label":"Story progress",children:a.slides.map((R,q)=>p.jsx(WS,{"aria-label":`Progress track ${q+1}`,children:p.jsx(FS,{style:{width:`${j(q)*100}%`}})},q))}),p.jsxs(IS,{children:[p.jsx(e3,{src:a.img,alt:a.name}),p.jsxs(t3,{children:[p.jsx(n3,{children:a.name}),p.jsx(a3,{children:"Chapter highlight"})]}),p.jsx(i3,{"aria-label":"Close story",onClick:c,title:"Close",children:p.jsx(r3,{})})]}),a.slides.map((R,q)=>p.jsx(l3,{src:R,alt:`Slide ${q+1}`,$active:q===o,draggable:!1},q)),p.jsx(Ym,{$side:"left",onClick:w,"aria-label":"Previous slide"}),p.jsx(Ym,{$side:"right",onClick:x,"aria-label":"Next slide"})]})})})}function o3({items:a,duration:l=3e3,onOpen:o,onClose:u,className:c}){const f=b.useRef(null),h=b.useRef(!1),y=b.useRef(0),g=b.useRef(0),[m,S]=b.useState(a||[]),[x,w]=b.useState(null),[j,R]=b.useState(0),q=m.find(N=>N.id===x)||null,Y=!!x,X=N=>{R(0),w(N),S(J=>J.map(G=>G.id===N?{...G,hasNew:!1}:G)),o&&o(N)},z=()=>{w(null),u&&u()},B=N=>{h.current=!0,y.current=N.clientX,g.current=f.current?.scrollLeft||0,N.target.setPointerCapture?.(N.pointerId)},F=N=>{if(!h.current||!f.current)return;const J=N.clientX-y.current;f.current.scrollLeft=g.current-J},k=()=>{h.current=!1};return p.jsxs(BS,{className:c,children:[p.jsx($S,{children:p.jsx(qS,{ref:f,onPointerDown:B,onPointerMove:F,onPointerUp:k,onPointerLeave:k,"aria-label":"Stories scroller",children:m.map(N=>p.jsxs(YS,{onClick:()=>X(N.id),"aria-label":`Open story ${N.name}`,title:N.name,children:[p.jsx(GS,{$hasNew:N.hasNew,children:p.jsx(XS,{children:p.jsx(VS,{src:N.img,alt:N.name,draggable:!1})})}),p.jsx(QS,{children:N.name})]},N.id))})}),p.jsx(u3,{currentItem:q,isOpen:Y,slideIndex:j,setSlideIndex:R,onClose:z,duration:l})]})}const s3=[{id:1,type:"carousel",title:"Nutrition - Summary",description:"Summary of the Nutrition chapter",carouselImgSrc:[st.Slide10,st.Slide9,st.Slide8]},{id:2,type:"infografic",title:"Introduction to Nutrition",description:"Basics of nutrition and its importance",imgSrc:st.Slide1},{id:3,type:"infografic",title:"Autotrophic Nutrition process",description:"Steps involved in autotrophic nutrition",imgSrc:st.Slide2},{id:4,type:"infografic",title:"Photosynthesis Overview",description:"Photosynthesis and its steps",imgSrc:st.Slide3},{id:5,type:"infografic",title:"Heterotrophic Nutrition",description:"Heterotrophic mode of nutrition",imgSrc:st.Slide4},{id:6,type:"infografic",title:"Human Digestive System",description:"Human digestive system overview",imgSrc:st.Slide5},{id:7,type:"infografic",title:"Digestive Organs Functions",description:"Functions of digestive organs",imgSrc:st.Slide6},{id:8,type:"infografic",title:"Enzymes in Digestion",description:"Role of enzymes in digestion",imgSrc:st.Slide7},{id:9,type:"infografic",title:"Absorption and Assimilation",description:"Absorption and assimilation",imgSrc:st.Slide8},{id:10,type:"infografic",title:"Egestion process",description:"Egestion process",imgSrc:st.Slide9},{id:11,type:"infografic",title:"Nutrition - Summary",description:"Summary of the Nutrition chapter",imgSrc:st.Slide10},{id:12,type:"question",title:"Nutrition Basics",description:"Which of the following is an example of heterotrophic nutrition?",options:["Photosynthesis in plants","Eating a fruit salad","Making food from sunlight","Autotrophic bacteria producing their own food"],correctAnswer:"Eating a fruit salad",imgSrc:st.Slide1},{id:13,type:"carousel",title:"Nutrition - Summary",description:"Summary of the Nutrition chapter",carouselImgSrc:[st.Slide10,st.Slide9,st.Slide8]},{id:14,type:"vedioClip",title:"Nutrition - Summary",description:"Summary of the Nutrition chapter",vedioClipSrc:LS.videoClip1}],c3=O.div`
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
`;function f3(){return b.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]),p.jsxs(p.Fragment,{children:[p.jsx(o3,{items:kS,duration:3e3,onOpen:a=>console.log("opened:",a),onClose:()=>console.log("closed")}),p.jsx(c3,{children:p.jsx("div",{className:"d-flex gap-3 flex-column align-items-center mt-3",children:s3.map(a=>p.jsx("div",{style:{width:"100%"},children:a.type==="infografic"?p.jsx(b5,{title:a.title,description:a.description,imgSrc:a.imgSrc,badge:a.badge}):a.type==="question"?p.jsx(yS,{mcq:a}):a.type==="carousel"?p.jsx(B5,{data:a}):a.type==="vedioClip"?p.jsx(dS,{data:a}):null},a.id))})})]})}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),h3=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,o,u)=>u?u.toUpperCase():o.toLowerCase()),Gm=a=>{const l=h3(a);return l.charAt(0).toUpperCase()+l.slice(1)},vv=(...a)=>a.filter((l,o,u)=>!!l&&l.trim()!==""&&u.indexOf(l)===o).join(" ").trim(),p3=a=>{for(const l in a)if(l.startsWith("aria-")||l==="role"||l==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var m3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=b.forwardRef(({color:a="currentColor",size:l=24,strokeWidth:o=2,absoluteStrokeWidth:u,className:c="",children:f,iconNode:h,...y},g)=>b.createElement("svg",{ref:g,...m3,width:l,height:l,stroke:a,strokeWidth:u?Number(o)*24/Number(l):o,className:vv("lucide",c),...!f&&!p3(y)&&{"aria-hidden":"true"},...y},[...h.map(([m,S])=>b.createElement(m,S)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=(a,l)=>{const o=b.forwardRef(({className:u,...c},f)=>b.createElement(v3,{ref:f,iconNode:l,className:vv(`lucide-${d3(Gm(a))}`,`lucide-${a}`,u),...c}));return o.displayName=Gm(a),o};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],y3=ka("arrow-right",g3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Ai=ka("book-open",b3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],S3=ka("bookmark",x3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Xm=ka("circle-check-big",w3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Vm=ka("graduation-cap",E3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],C3=ka("grid-3x3",T3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],_3=ka("sparkles",R3),O3=fn`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(30px, -30px) rotate(5deg); }
  50% { transform: translate(-20px, -50px) rotate(-5deg); }
  75% { transform: translate(40px, -20px) rotate(3deg); }
`,z3=fn`
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.4; }
`,A3=fn`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`,j3=O.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  font-family: 'Inter', sans-serif;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 1rem;
  }
`,M3=O.span`
  &::after {
    content: '|';
    animation: ${A3} 1s infinite;
    margin-left: 4px;
  }
`,gv=O.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border-radius: 1.5rem;

  @media (min-width: 768px) {
    border-radius: 1rem;
  }
`,N3=O(gv)`
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.2);
  }
`,D3=O.div`
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
`,L3=O.h1`
  font-size: clamp(1.5rem, 6vw, 3rem);
  font-weight: 900;
  line-height: 1.2;
  padding: 0 1rem;
`,U3=O.span`
  background: linear-gradient(to bottom, #ff6b6b 20%, #4ecdc4 50%, #BFA4FF 100%);
  -webkit-background-clip: text;
  color: transparent;
  font-style: italic;
  font-size: 30px;
`,kc=O.div`
  position: absolute;
  border-radius: 50%;
  background: ${({color:a})=>a};
  width: ${({size:a})=>a}px;
  height: ${({size:a})=>a}px;
  top: ${({top:a})=>a};
  left: ${({left:a})=>a};
  bottom: ${({bottom:a})=>a};
  right: ${({right:a})=>a};
  animation: ${z3} ${({duration:a})=>a}s infinite ease-in-out;
  animation-delay: ${({delay:a})=>a}s;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`,k3=O.div`
  position: absolute;
  opacity: 0.15;
  animation: ${O3} ${({duration:a})=>a}s infinite ease-in-out;
  animation-delay: ${({delay:a})=>a}s;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`,H3=O.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 100%;
`,B3=O.div`
  width: 100%;
  max-width: 600px;

  @media (min-width: 768px) {
    max-width: 800px;
  }
`,Qm=O.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
  align-items: center;
`,Km=O.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 10rem;
  background: ${({gradient:a})=>a};
  box-shadow: ${({shadow:a})=>a};
  flex-shrink: 0;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`,Zm=O.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e293b;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`,Jm=O.p`
  font-size: 0.8rem;
  color: #64748b;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`,$3=O.select`
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
`,Pm=O.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,q3=O.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Y3=O.button`
  width: 100%;
  padding: 1.25rem;
  border-radius: 1rem;
  font-weight: 700;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  cursor: ${({disabled:a})=>a?"not-allowed":"pointer"};
  background: ${({disabled:a})=>a?"#e2e8f0":"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  color: ${({disabled:a})=>a?"#94a3b8":"#fff"};
  border: none;
  box-shadow: ${({disabled:a})=>a?"none":"0 10px 30px rgba(102, 126, 234, 0.4)"};
  transition: all 0.3s ease;
  
  &:hover {
    transform: ${({disabled:a})=>a?"none":"translateY(-2px)"};
    box-shadow: ${({disabled:a})=>a?"none":"0 15px 40px rgba(102, 126, 234, 0.5)"};
  }

  &:active {
    transform: ${({disabled:a})=>a?"none":"translateY(0)"};
  }

  @media (min-width: 768px) {
    padding: 1.5rem;
    font-size: 1.25rem;
  }
`,G3=O.button`
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

  ${({selected:a})=>a?`
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
    transform: scale(1.02);
  `:`
    background: white;
    color: #334155;
    border-color: #e2e8f0;
    
    &:hover {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      color: white;
      border-color: transparent;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(240, 147, 251, 0.3);
    }
  `}

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`,X3=O(gv)`
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: white;
  
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
`,V3=O.div`
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  width: 100%;
  font-size: 0.875rem;
  opacity: 0.95;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  &::before {
    content: '👨‍🏫';
    font-size: 1rem;
  }
`;function Q3(){const a=yf(),[l,o]=b.useState(""),[u,c]=b.useState(""),[f,h]=b.useState(""),[y,g]=b.useState(0),[m,S]=b.useState(!1),[x,w]=b.useState(0),j=["Achieve Excellence","Master Every Subject","Unlock Your Potential"];b.useEffect(()=>{const X=m?40:80,z=2e3,B=setTimeout(()=>{const F=j[y];if(!m&&x===F.length){setTimeout(()=>S(!0),z);return}if(m&&x===0){S(!1),g(k=>(k+1)%j.length);return}w(k=>k+(m?-1:1)),h(F.substring(0,x+(m?-1:1)))},X);return()=>clearTimeout(B)});const R={"Grade 9":{subjects:{English:"Ms. Priya Sharma",Mathematics:"Mr. Rajesh Kumar",Science:"Ms. Anjali Mehta","Social Studies":"Mr. Suresh Iyer",Hindi:"Ms. Kavita Reddy","Computer Science":"Mr. Arvind Nair"}},"Grade 10":{subjects:{English:"Ms. Sunita Verma",Mathematics:"Mr. Rohan Patel",Science:"Ms. Anjali Mehta","Social Studies":"Mr. Suresh Iyer",Hindi:"Ms. Kavita Reddy","Computer Science":"Mr. Arvind Nair"}},"Grade 11":{subjects:{English:"Ms. Priya Sharma",Physics:"Mr. Nitin Agarwal",Chemistry:"Ms. Sneha Kapoor",Biology:"Ms. Meena Joshi",Mathematics:"Mr. Deepak Rao","Computer Science":"Mr. Arvind Nair"}},"Grade 12":{subjects:{English:"Ms. Sunita Verma",Physics:"Mr. Nitin Agarwal",Chemistry:"Ms. Sneha Kapoor",Biology:"Ms. Meena Joshi",Mathematics:"Mr. Deepak Rao","Computer Science":"Mr. Arvind Nair"}}},q=()=>{l&&u&&(a("/instalearn/teacher"),console.log(`Selected: ${l} - ${u}`))},Y=l?Object.keys(R[l].subjects):[];return p.jsxs(j3,{children:[p.jsx(kc,{color:"rgba(255, 255, 255, 0.15)",size:500,top:"-10%",right:"-5%",duration:8,delay:0}),p.jsx(kc,{color:"rgba(255, 255, 255, 0.1)",size:600,bottom:"-15%",left:"-5%",duration:10,delay:3}),p.jsx(kc,{color:"rgba(255, 255, 255, 0.12)",size:400,top:"40%",left:"50%",duration:12,delay:6}),[...Array(8)].map((X,z)=>p.jsx(k3,{duration:8+z*2,delay:z*.8,style:{left:`${10+z*12}%`,top:`${15+z*11}%`},children:z%3===0?p.jsx(Ai,{size:32,color:"rgba(255,255,255,0.4)"}):z%3===1?p.jsx(Vm,{size:32,color:"rgba(255,255,255,0.4)"}):p.jsx(_3,{size:32,color:"rgba(255,255,255,0.4)"})},z)),p.jsx(H3,{children:p.jsxs(B3,{children:[p.jsx(D3,{children:p.jsx(L3,{children:p.jsx(U3,{children:p.jsx(M3,{children:f})})})}),p.jsxs(N3,{style:{padding:"1.5rem",display:"flex",flexDirection:"column",gap:"2rem"},children:[p.jsxs(Pm,{children:[p.jsxs(Qm,{children:[p.jsx(Km,{gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",shadow:"0 8px 24px rgba(102,126,234,0.3)",children:p.jsx(Vm,{size:20,color:"white"})}),p.jsxs("div",{children:[p.jsx(Zm,{children:"Select Your Grade"}),p.jsx(Jm,{children:"Choose your current academic level"})]})]}),p.jsxs("div",{style:{position:"relative"},children:[p.jsxs($3,{value:l,onChange:X=>{o(X.target.value),c("")},children:[p.jsx("option",{value:"",disabled:!0,children:"Select Grade"}),Object.keys(R).map(X=>p.jsx("option",{value:X,children:X},X))]}),l&&p.jsx(Xm,{size:20,style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",color:"#10b981"}})]})]}),p.jsxs(Pm,{children:[p.jsxs(Qm,{children:[p.jsx(Km,{gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",shadow:"0 8px 24px rgba(240,147,251,0.3)",children:p.jsx(Ai,{size:20,color:"white"})}),p.jsxs("div",{children:[p.jsx(Zm,{children:"Choose Your Subject"}),p.jsx(Jm,{children:"Pick the subject you want to focus on"})]})]}),Y.length===0?p.jsxs(X3,{children:[p.jsx(Ai,{size:40,color:"#94a3b8"}),p.jsx("p",{children:"Please select a grade to view available subjects"})]}):p.jsx(q3,{children:Y.map(X=>{const z=R[l].subjects[X],B=u===X;return p.jsxs(G3,{selected:B,onClick:()=>c(X),children:[p.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsx("span",{children:X}),B&&p.jsx(Xm,{size:18})]}),B&&p.jsx(V3,{children:z})]},X)})})]}),p.jsxs(Y3,{disabled:!l||!u,onClick:q,children:["Continue to Profile ",p.jsx(y3,{size:20})]})]})]})})]})}function K3(a){return Ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z"},child:[]}]})(a)}function Z3(a){return Ve({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(a)}function yv(a){return Ve({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(a)}function J3(a){return Ve({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(a)}function P3(a){return Ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(a)}function W3(a){return Ve({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(a)}function F3(a){return Ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(a)}function Wm(a){return Ve({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(a)}const I3=fn`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`,e4=fn`
  from { opacity: 0; }
  to { opacity: 1; }
`,t4=O.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100%;
  padding: 20px;
`,n4=O.div`
  width: 100%;
  margin: 0 auto;
  animation: ${I3} 0.8s ease-out;
`,a4=O.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`,i4=O.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;

  @media(max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`,l4=O.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
  font-weight: bold;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
`,r4=O.div`
  flex: 1;
`,u4=O.h1`
  font-size: 2em;
  color: #2d3748;
  margin: 0 0 5px 0;
  font-weight: 700;
`,o4=O.p`
  color: #718096;
  margin: 0 0 10px 0;
`,s4=O.div`
  display: flex;
  gap: 30px;
  margin-top: 15px;

  @media(max-width: 600px) {
    justify-content: center;
  }
`,Hc=O.div`
  text-align: center;
`,Bc=O.div`
  font-size: 24px;
  font-weight: bold;
  color: #667eea;
`,$c=O.div`
  font-size: 14px;
  color: #718096;
`,c4=O.button`
  padding: 10px 20px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
  }
`,f4=O.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Fm=O.button`
  flex: 1;
  padding: 12px;
  background: ${a=>a.active?"linear-gradient(135deg, #667eea, #764ba2)":"rgba(255, 255, 255, 0.95)"};
  color: ${a=>a.active?"white":"#718096"};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
  }
`,d4=O.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: ${e4} 0.5s ease-out;
`,h4=O.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: #f7fafc;
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #e6f2ff;
    transform: translateX(5px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`,p4=O.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
`,m4=O.div`
  flex: 1;
`,v4=O.h3`
  margin: 0 0 5px 0;
  color: #2d3748;
  font-size: 16px;
`,g4=O.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 12px;
  color: #718096;
`,y4=O.span`
  display: flex;
  align-items: center;
  gap: 5px;
`,b4=O.span`
  display: flex;
  align-items: center;
  gap: 5px;
`,x4=O(J3)`
  color: #cbd5e0;
  font-size: 18px;
`,S4=O.div`
  text-align: center;
  padding: 40px;
  color: #718096;
`,w4=O.div`
  font-size: 60px;
  margin-bottom: 15px;
  opacity: 0.5;
`;function E4(){const[a,l]=b.useState("history");b.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]);const o={name:"Priya Sharma",email:"priya.sharma@example.com",avatar:"PS",booksRead:24,hoursSpent:156,favoriteTeacher:"Ms. Sarah"},u=[{id:1,title:"Advanced Mathematics",teacher:"Prof. Michael Chen",time:"2 hours ago",progress:75,icon:"📐"},{id:2,title:"Introduction to Physics",teacher:"Dr. Sarah Johnson",time:"Yesterday",progress:45,icon:"⚡"},{id:3,title:"Chemistry Fundamentals",teacher:"Mr. David Kumar",time:"2 days ago",progress:90,icon:"🧪"},{id:4,title:"Biology Basics",teacher:"Dr. Emily Brown",time:"1 week ago",progress:100,icon:"🧬"}];return p.jsx(t4,{children:p.jsxs(n4,{children:[p.jsx(a4,{children:p.jsxs(i4,{children:[p.jsx(l4,{children:o.avatar}),p.jsxs(r4,{children:[p.jsx(u4,{children:o.name}),p.jsx(o4,{children:o.email}),p.jsxs(s4,{children:[p.jsxs(Hc,{children:[p.jsx(Bc,{children:o.booksRead}),p.jsx($c,{children:"Books Read"})]}),p.jsxs(Hc,{children:[p.jsx(Bc,{children:o.hoursSpent}),p.jsx($c,{children:"Hours"})]}),p.jsxs(Hc,{children:[p.jsx(Bc,{children:p.jsx(Wm,{style:{color:"#fbbf24"}})}),p.jsx($c,{children:o.favoriteTeacher})]})]})]}),p.jsxs(c4,{children:[p.jsx(W3,{})," Edit Profile"]})]})}),p.jsxs(f4,{children:[p.jsxs(Fm,{active:a==="history",onClick:()=>l("history"),children:[p.jsx(F3,{})," Reading History"]}),p.jsxs(Fm,{active:a==="favorites",onClick:()=>l("favorites"),children:[p.jsx(Wm,{})," Favorites"]})]}),p.jsx(d4,{children:a==="history"&&u.length>0?u.map(c=>p.jsxs(h4,{children:[p.jsx(p4,{children:c.icon}),p.jsxs(m4,{children:[p.jsx(v4,{children:c.title}),p.jsxs(g4,{children:[p.jsxs(y4,{children:[p.jsx(P3,{})," ",c.time]}),p.jsxs(b4,{children:[p.jsx(Z3,{})," ",c.progress,"% complete"]})]})]}),p.jsx(x4,{})]},c.id)):p.jsxs(S4,{children:[p.jsx(w4,{children:"📚"}),p.jsx("h3",{children:"No Reading History Yet"}),p.jsx("p",{children:"Start reading books to see them here!"})]})})]})})}const T4=fn`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
`,C4=fn`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,R4=fn`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,_4=fn`
  0% {
    width: 0%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 0%;
  }
`,O4=O.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`,z4=O.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,qc=O.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: ${T4} 20s infinite ease-in-out;

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
`,A4=O.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  animation: ${C4} 0.8s ease-out;

  @media (max-width: 600px) {
    margin: 20px;
    padding: 20px 20px;
  }
`,j4=O.div`
  margin-bottom: 0px;
  position: relative;
`,M4=O.div`
  font-size: 70px;
  animation: ${R4} 2s infinite;
`,N4=O.h1`
  font-size: 2.5em;
  color: #2d3748;
  margin-bottom: 10px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 2em;
  }
`,D4=O.p`
  font-size: 1.2em;
  color: #718096;
  margin-bottom: 25px;
  line-height: 1.6;
`,L4=O.div`
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`,U4=O.div`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  animation: ${_4} 3s ease-in-out infinite;
`,k4=O.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Yc=O.div`
  padding: 20px;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
  }
`,Gc=O.div`
  font-size:30px;
  margin-bottom: 10px;
`,Xc=O.div`
  font-size: 14px;
  color: #4a5568;
  font-weight: 600;
`,H4=O.button`
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
`;function Im(){const[a,l]=b.useState(!1),o=()=>{l(!0),setTimeout(()=>{l(!1)},2e3)};return p.jsxs(O4,{children:[p.jsxs(z4,{children:[p.jsx(qc,{}),p.jsx(qc,{}),p.jsx(qc,{})]}),p.jsxs(A4,{children:[p.jsx(j4,{children:p.jsx(M4,{children:"🚧"})}),p.jsx(N4,{children:"Building Something Amazing"}),p.jsx(D4,{children:"We're working hard to bring you an incredible new feature. Stay tuned!"}),p.jsx(L4,{children:p.jsx(U4,{})}),p.jsxs(k4,{children:[p.jsxs(Yc,{children:[p.jsx(Gc,{children:"⚡"}),p.jsx(Xc,{children:"Lightning Fast"})]}),p.jsxs(Yc,{children:[p.jsx(Gc,{children:"🎨"}),p.jsx(Xc,{children:"Beautiful Design"})]}),p.jsxs(Yc,{children:[p.jsx(Gc,{children:"🔒"}),p.jsx(Xc,{children:"Secure & Private"})]})]}),p.jsx(H4,{onClick:o,$notified:a,children:a?"✓ You'll be notified!":"Notify Me When Ready"})]})]})}var B4=ov();const at=tr(B4);function df(){return df=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var u in o)({}).hasOwnProperty.call(o,u)&&(a[u]=o[u])}return a},df.apply(null,arguments)}function bv(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)!==-1)continue;o[u]=a[u]}return o}function e1(a){return"default"+a.charAt(0).toUpperCase()+a.substr(1)}function $4(a){var l=q4(a,"string");return typeof l=="symbol"?l:String(l)}function q4(a,l){if(typeof a!="object"||a===null)return a;var o=a[Symbol.toPrimitive];if(o!==void 0){var u=o.call(a,l);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}function Y4(a,l,o){var u=b.useRef(a!==void 0),c=b.useState(l),f=c[0],h=c[1],y=a!==void 0,g=u.current;return u.current=y,!y&&g&&f!==l&&h(l),[y?a:f,b.useCallback(function(m){for(var S=arguments.length,x=new Array(S>1?S-1:0),w=1;w<S;w++)x[w-1]=arguments[w];o&&o.apply(void 0,[m].concat(x)),h(m)},[o])]}function xv(a,l){return Object.keys(l).reduce(function(o,u){var c,f=o,h=f[e1(u)],y=f[u],g=bv(f,[e1(u),u].map($4)),m=l[u],S=Y4(y,h,a[m]),x=S[0],w=S[1];return df({},g,(c={},c[u]=x,c[m]=w,c))},a)}function hf(a,l){return hf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,u){return o.__proto__=u,o},hf(a,l)}function G4(a,l){a.prototype=Object.create(l.prototype),a.prototype.constructor=a,hf(a,l)}const X4=["xxl","xl","lg","md","sm","xs"],V4="xs",Sv=b.createContext({prefixes:{},breakpoints:X4,minBreakpoint:V4}),{Consumer:F8,Provider:I8}=Sv;function wt(a,l){const{prefixes:o}=b.useContext(Sv);return a||o[l]||l}function Nf(a){return a&&a.ownerDocument||document}function Q4(a){var l=Nf(a);return l&&l.defaultView||window}function K4(a,l){return Q4(a).getComputedStyle(a,l)}var Z4=/([A-Z])/g;function J4(a){return a.replace(Z4,"-$1").toLowerCase()}var P4=/^ms-/;function zu(a){return J4(a).replace(P4,"-ms-")}var W4=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function F4(a){return!!(a&&W4.test(a))}function Dn(a,l){var o="",u="";if(typeof l=="string")return a.style.getPropertyValue(zu(l))||K4(a).getPropertyValue(zu(l));Object.keys(l).forEach(function(c){var f=l[c];!f&&f!==0?a.style.removeProperty(zu(c)):F4(c)?u+=c+"("+f+") ":o+=zu(c)+": "+f+";"}),u&&(o+="transform: "+u+";"),a.style.cssText+=";"+o}var I4=rv();const Vc=tr(I4),t1={disabled:!1},wv=ze.createContext(null);var e6=function(l){return l.scrollTop},Zl="unmounted",fa="exited",It="entering",jn="entered",er="exiting",Hn=(function(a){G4(l,a);function l(u,c){var f;f=a.call(this,u,c)||this;var h=c,y=h&&!h.isMounting?u.enter:u.appear,g;return f.appearStatus=null,u.in?y?(g=fa,f.appearStatus=It):g=jn:u.unmountOnExit||u.mountOnEnter?g=Zl:g=fa,f.state={status:g},f.nextCallback=null,f}l.getDerivedStateFromProps=function(c,f){var h=c.in;return h&&f.status===Zl?{status:fa}:null};var o=l.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(c){var f=null;if(c!==this.props){var h=this.state.status;this.props.in?h!==It&&h!==jn&&(f=It):(h===It||h===jn)&&(f=er)}this.updateStatus(!1,f)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var c=this.props.timeout,f,h,y;return f=h=y=c,c!=null&&typeof c!="number"&&(f=c.exit,h=c.enter,y=c.appear!==void 0?c.appear:h),{exit:f,enter:h,appear:y}},o.updateStatus=function(c,f){if(c===void 0&&(c=!1),f!==null)if(this.cancelNextCallback(),f===It){if(this.props.unmountOnExit||this.props.mountOnEnter){var h=this.props.nodeRef?this.props.nodeRef.current:Oi.findDOMNode(this);h&&e6(h)}this.performEnter(c)}else this.performExit();else this.props.unmountOnExit&&this.state.status===fa&&this.setState({status:Zl})},o.performEnter=function(c){var f=this,h=this.props.enter,y=this.context?this.context.isMounting:c,g=this.props.nodeRef?[y]:[Oi.findDOMNode(this),y],m=g[0],S=g[1],x=this.getTimeouts(),w=y?x.appear:x.enter;if(!c&&!h||t1.disabled){this.safeSetState({status:jn},function(){f.props.onEntered(m)});return}this.props.onEnter(m,S),this.safeSetState({status:It},function(){f.props.onEntering(m,S),f.onTransitionEnd(w,function(){f.safeSetState({status:jn},function(){f.props.onEntered(m,S)})})})},o.performExit=function(){var c=this,f=this.props.exit,h=this.getTimeouts(),y=this.props.nodeRef?void 0:Oi.findDOMNode(this);if(!f||t1.disabled){this.safeSetState({status:fa},function(){c.props.onExited(y)});return}this.props.onExit(y),this.safeSetState({status:er},function(){c.props.onExiting(y),c.onTransitionEnd(h.exit,function(){c.safeSetState({status:fa},function(){c.props.onExited(y)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(c,f){f=this.setNextCallback(f),this.setState(c,f)},o.setNextCallback=function(c){var f=this,h=!0;return this.nextCallback=function(y){h&&(h=!1,f.nextCallback=null,c(y))},this.nextCallback.cancel=function(){h=!1},this.nextCallback},o.onTransitionEnd=function(c,f){this.setNextCallback(f);var h=this.props.nodeRef?this.props.nodeRef.current:Oi.findDOMNode(this),y=c==null&&!this.props.addEndListener;if(!h||y){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var g=this.props.nodeRef?[this.nextCallback]:[h,this.nextCallback],m=g[0],S=g[1];this.props.addEndListener(m,S)}c!=null&&setTimeout(this.nextCallback,c)},o.render=function(){var c=this.state.status;if(c===Zl)return null;var f=this.props,h=f.children;f.in,f.mountOnEnter,f.unmountOnExit,f.appear,f.enter,f.exit,f.timeout,f.addEndListener,f.onEnter,f.onEntering,f.onEntered,f.onExit,f.onExiting,f.onExited,f.nodeRef;var y=bv(f,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ze.createElement(wv.Provider,{value:null},typeof h=="function"?h(c,y):ze.cloneElement(ze.Children.only(h),y))},l})(ze.Component);Hn.contextType=wv;Hn.propTypes={};function Ci(){}Hn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ci,onEntering:Ci,onEntered:Ci,onExit:Ci,onExiting:Ci,onExited:Ci};Hn.UNMOUNTED=Zl;Hn.EXITED=fa;Hn.ENTERING=It;Hn.ENTERED=jn;Hn.EXITING=er;function t6(a){return a.code==="Escape"||a.keyCode===27}function n6(){const a=b.version.split(".");return{major:+a[0],minor:+a[1],patch:+a[2]}}function $i(a){if(!a||typeof a=="function")return null;const{major:l}=n6();return l>=19?a.props.ref:a.ref}const Iu=!!(typeof window<"u"&&window.document&&window.document.createElement);var pf=!1,mf=!1;try{var Qc={get passive(){return pf=!0},get once(){return mf=pf=!0}};Iu&&(window.addEventListener("test",Qc,Qc),window.removeEventListener("test",Qc,!0))}catch{}function a6(a,l,o,u){if(u&&typeof u!="boolean"&&!mf){var c=u.once,f=u.capture,h=o;!mf&&c&&(h=o.__once||function y(g){this.removeEventListener(l,y,f),o.call(this,g)},o.__once=h),a.addEventListener(l,h,pf?u:f)}a.addEventListener(l,o,u)}function i6(a,l,o,u){var c=u&&typeof u!="boolean"?u.capture:u;a.removeEventListener(l,o,c),o.__once&&a.removeEventListener(l,o.__once,c)}function Gu(a,l,o,u){return a6(a,l,o,u),function(){i6(a,l,o,u)}}function l6(a,l,o,u){if(u===void 0&&(u=!0),a){var c=document.createEvent("HTMLEvents");c.initEvent(l,o,u),a.dispatchEvent(c)}}function r6(a){var l=Dn(a,"transitionDuration")||"",o=l.indexOf("ms")===-1?1e3:1;return parseFloat(l)*o}function u6(a,l,o){o===void 0&&(o=5);var u=!1,c=setTimeout(function(){u||l6(a,"transitionend",!0)},l+o),f=Gu(a,"transitionend",function(){u=!0},{once:!0});return function(){clearTimeout(c),f()}}function o6(a,l,o,u){o==null&&(o=r6(a)||0);var c=u6(a,o,u),f=Gu(a,"transitionend",l);return function(){c(),f()}}function n1(a,l){const o=Dn(a,l)||"",u=o.indexOf("ms")===-1?1e3:1;return parseFloat(o)*u}function Df(a,l){const o=n1(a,"transitionDuration"),u=n1(a,"transitionDelay"),c=o6(a,f=>{f.target===a&&(c(),l(f))},o+u)}function Ql(...a){return a.filter(l=>l!=null).reduce((l,o)=>{if(typeof o!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return l===null?o:function(...c){l.apply(this,c),o.apply(this,c)}},null)}function Ev(a){a.offsetHeight}const a1=a=>!a||typeof a=="function"?a:l=>{a.current=l};function s6(a,l){const o=a1(a),u=a1(l);return c=>{o&&o(c),u&&u(c)}}function c6(a,l){return b.useMemo(()=>s6(a,l),[a,l])}function f6(a){return a&&"setState"in a?Oi.findDOMNode(a):a??null}const eo=ze.forwardRef(({onEnter:a,onEntering:l,onEntered:o,onExit:u,onExiting:c,onExited:f,addEndListener:h,children:y,childRef:g,...m},S)=>{const x=b.useRef(null),w=c6(x,g),j=N=>{w(f6(N))},R=N=>J=>{N&&x.current&&N(x.current,J)},q=b.useCallback(R(a),[a]),Y=b.useCallback(R(l),[l]),X=b.useCallback(R(o),[o]),z=b.useCallback(R(u),[u]),B=b.useCallback(R(c),[c]),F=b.useCallback(R(f),[f]),k=b.useCallback(R(h),[h]);return p.jsx(Hn,{ref:S,...m,onEnter:q,onEntered:X,onEntering:Y,onExit:z,onExited:F,onExiting:B,addEndListener:k,nodeRef:x,children:typeof y=="function"?(N,J)=>y(N,{...J,ref:j}):ze.cloneElement(y,{ref:j})})});eo.displayName="TransitionWrapper";const d6={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function h6(a,l){const o=`offset${a[0].toUpperCase()}${a.slice(1)}`,u=l[o],c=d6[a];return u+parseInt(Dn(l,c[0]),10)+parseInt(Dn(l,c[1]),10)}const p6={[fa]:"collapse",[er]:"collapsing",[It]:"collapsing",[jn]:"collapse show"},Tv=ze.forwardRef(({onEnter:a,onEntering:l,onEntered:o,onExit:u,onExiting:c,className:f,children:h,dimension:y="height",in:g=!1,timeout:m=300,mountOnEnter:S=!1,unmountOnExit:x=!1,appear:w=!1,getDimensionValue:j=h6,...R},q)=>{const Y=typeof y=="function"?y():y,X=b.useMemo(()=>Ql(N=>{N.style[Y]="0"},a),[Y,a]),z=b.useMemo(()=>Ql(N=>{const J=`scroll${Y[0].toUpperCase()}${Y.slice(1)}`;N.style[Y]=`${N[J]}px`},l),[Y,l]),B=b.useMemo(()=>Ql(N=>{N.style[Y]=null},o),[Y,o]),F=b.useMemo(()=>Ql(N=>{N.style[Y]=`${j(Y,N)}px`,Ev(N)},u),[u,j,Y]),k=b.useMemo(()=>Ql(N=>{N.style[Y]=null},c),[Y,c]);return p.jsx(eo,{ref:q,addEndListener:Df,...R,"aria-expanded":R.role?g:null,onEnter:X,onEntering:z,onEntered:B,onExit:F,onExiting:k,childRef:$i(h),in:g,timeout:m,mountOnEnter:S,unmountOnExit:x,appear:w,children:(N,J)=>ze.cloneElement(h,{...J,className:at(f,h.props.className,p6[N],Y==="width"&&"collapse-horizontal")})})});Tv.displayName="Collapse";function m6(a){const l=b.useRef(a);return b.useEffect(()=>{l.current=a},[a]),l}function to(a){const l=m6(a);return b.useCallback(function(...o){return l.current&&l.current(...o)},[l])}const v6=(a=>b.forwardRef((l,o)=>p.jsx("div",{...l,ref:o,className:at(l.className,a)})));function g6(a){const l=b.useRef(a);return b.useEffect(()=>{l.current=a},[a]),l}function Mn(a){const l=g6(a);return b.useCallback(function(...o){return l.current&&l.current(...o)},[l])}function y6(){const a=b.useRef(!0),l=b.useRef(()=>a.current);return b.useEffect(()=>(a.current=!0,()=>{a.current=!1}),[]),l.current}function b6(a){const l=b.useRef(null);return b.useEffect(()=>{l.current=a}),l.current}const x6=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",S6=typeof document<"u",i1=S6||x6?b.useLayoutEffect:b.useEffect,w6=["as","disabled"];function E6(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}function T6(a){return!a||a.trim()==="#"}function Cv({tagName:a,disabled:l,href:o,target:u,rel:c,role:f,onClick:h,tabIndex:y=0,type:g}){a||(o!=null||u!=null||c!=null?a="a":a="button");const m={tagName:a};if(a==="button")return[{type:g||"button",disabled:l},m];const S=w=>{if((l||a==="a"&&T6(o))&&w.preventDefault(),l){w.stopPropagation();return}h?.(w)},x=w=>{w.key===" "&&(w.preventDefault(),S(w))};return a==="a"&&(o||(o="#"),l&&(o=void 0)),[{role:f??"button",disabled:void 0,tabIndex:l?void 0:y,href:o,target:a==="a"?u:void 0,"aria-disabled":l||void 0,rel:a==="a"?c:void 0,onClick:S,onKeyDown:x},m]}const Rv=b.forwardRef((a,l)=>{let{as:o,disabled:u}=a,c=E6(a,w6);const[f,{tagName:h}]=Cv(Object.assign({tagName:o,disabled:u},c));return p.jsx(h,Object.assign({},c,f,{ref:l}))});Rv.displayName="Button";const C6=["onKeyDown"];function R6(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}function _6(a){return!a||a.trim()==="#"}const _v=b.forwardRef((a,l)=>{let{onKeyDown:o}=a,u=R6(a,C6);const[c]=Cv(Object.assign({tagName:"a"},u)),f=Mn(h=>{c.onKeyDown(h),o?.(h)});return _6(u.href)||u.role==="button"?p.jsx("a",Object.assign({ref:l},u,c,{onKeyDown:f})):p.jsx("a",Object.assign({ref:l},u,{onKeyDown:o}))});_v.displayName="Anchor";const O6={[It]:"show",[jn]:"show"},Ov=b.forwardRef(({className:a,children:l,transitionClasses:o={},onEnter:u,...c},f)=>{const h={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...c},y=b.useCallback((g,m)=>{Ev(g),u?.(g,m)},[u]);return p.jsx(eo,{ref:f,addEndListener:Df,...h,onEnter:y,childRef:$i(l),children:(g,m)=>b.cloneElement(l,{...m,className:at("fade",a,l.props.className,O6[g],o[g])})})});Ov.displayName="Fade";const z6={"aria-label":Vc.string,onClick:Vc.func,variant:Vc.oneOf(["white"])},Lf=b.forwardRef(({className:a,variant:l,"aria-label":o="Close",...u},c)=>p.jsx("button",{ref:c,type:"button",className:at("btn-close",l&&`btn-close-${l}`,a),"aria-label":o,...u}));Lf.displayName="CloseButton";Lf.propTypes=z6;const zv=b.createContext(null);zv.displayName="CardHeaderContext";const Av=b.forwardRef(({bsPrefix:a,fluid:l=!1,as:o="div",className:u,...c},f)=>{const h=wt(a,"container"),y=typeof l=="string"?`-${l}`:"-fluid";return p.jsx(o,{ref:f,...c,className:at(u,l?`${h}${y}`:h)})});Av.displayName="Container";var A6=Function.prototype.bind.call(Function.prototype.call,[].slice);function Ma(a,l){return A6(a.querySelectorAll(l))}function j6(){const[,a]=b.useReducer(l=>l+1,0);return a}function l1(a,l){if(a.contains)return a.contains(l);if(a.compareDocumentPosition)return a===l||!!(a.compareDocumentPosition(l)&16)}const Xu=b.createContext(null),Uf=(a,l=null)=>a!=null?String(a):l||null,kf=b.createContext(null);kf.displayName="NavContext";const M6="data-rr-ui-",N6="rrUi";function no(a){return`${M6}${a}`}function D6(a){return`${N6}${a}`}const jv=b.createContext(Iu?window:void 0);jv.Provider;function Hf(){return b.useContext(jv)}const L6=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",U6=typeof document<"u",k6=U6||L6?b.useLayoutEffect:b.useEffect,qi=b.createContext(null);qi.displayName="NavbarContext";const r1=a=>!a||typeof a=="function"?a:l=>{a.current=l};function H6(a,l){const o=r1(a),u=r1(l);return c=>{o&&o(c),u&&u(c)}}function ao(a,l){return b.useMemo(()=>H6(a,l),[a,l])}const Mv=b.createContext(null),B6=["as","active","eventKey"];function $6(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}function Nv({key:a,onClick:l,active:o,id:u,role:c,disabled:f}){const h=b.useContext(Xu),y=b.useContext(kf),g=b.useContext(Mv);let m=o;const S={role:c};if(y){!c&&y.role==="tablist"&&(S.role="tab");const x=y.getControllerId(a??null),w=y.getControlledId(a??null);S[no("event-key")]=a,S.id=x||u,m=o==null&&a!=null?y.activeKey===a:o,(m||!(g!=null&&g.unmountOnExit)&&!(g!=null&&g.mountOnEnter))&&(S["aria-controls"]=w)}return S.role==="tab"&&(S["aria-selected"]=m,m||(S.tabIndex=-1),f&&(S.tabIndex=-1,S["aria-disabled"]=!0)),S.onClick=Mn(x=>{f||(l?.(x),a!=null&&h&&!x.isPropagationStopped()&&h(a,x))}),[S,{isActive:m}]}const Dv=b.forwardRef((a,l)=>{let{as:o=Rv,active:u,eventKey:c}=a,f=$6(a,B6);const[h,y]=Nv(Object.assign({key:Uf(c,f.href),active:u},f));return h[no("active")]=y.isActive,p.jsx(o,Object.assign({},f,h,{ref:l}))});Dv.displayName="NavItem";const q6=["as","onSelect","activeKey","role","onKeyDown"];function Y6(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}const u1=()=>{},o1=no("event-key"),Lv=b.forwardRef((a,l)=>{let{as:o="div",onSelect:u,activeKey:c,role:f,onKeyDown:h}=a,y=Y6(a,q6);const g=j6(),m=b.useRef(!1),S=b.useContext(Xu),x=b.useContext(Mv);let w,j;x&&(f=f||"tablist",c=x.activeKey,w=x.getControlledId,j=x.getControllerId);const R=b.useRef(null),q=B=>{const F=R.current;if(!F)return null;const k=Ma(F,`[${o1}]:not([aria-disabled=true])`),N=F.querySelector("[aria-selected=true]");if(!N||N!==document.activeElement)return null;const J=k.indexOf(N);if(J===-1)return null;let G=J+B;return G>=k.length&&(G=0),G<0&&(G=k.length-1),k[G]},Y=(B,F)=>{B!=null&&(u?.(B,F),S?.(B,F))},X=B=>{if(h?.(B),!x)return;let F;switch(B.key){case"ArrowLeft":case"ArrowUp":F=q(-1);break;case"ArrowRight":case"ArrowDown":F=q(1);break;default:return}F&&(B.preventDefault(),Y(F.dataset[D6("EventKey")]||null,B),m.current=!0,g())};b.useEffect(()=>{if(R.current&&m.current){const B=R.current.querySelector(`[${o1}][aria-selected=true]`);B?.focus()}m.current=!1});const z=ao(l,R);return p.jsx(Xu.Provider,{value:Y,children:p.jsx(kf.Provider,{value:{role:f,activeKey:Uf(c),getControlledId:w||u1,getControllerId:j||u1},children:p.jsx(o,Object.assign({},y,{onKeyDown:X,ref:z,role:f}))})})});Lv.displayName="Nav";const G6=Object.assign(Lv,{Item:Dv});function Kc(a){a===void 0&&(a=Nf());try{var l=a.activeElement;return!l||!l.nodeName?null:l}catch{return a.body}}function X6(a){const l=b.useRef(a);return l.current=a,l}function V6(a){const l=X6(a);b.useEffect(()=>()=>l.current(),[])}function Q6(a=document){const l=a.defaultView;return Math.abs(l.innerWidth-a.documentElement.clientWidth)}const s1=no("modal-open");class Bf{constructor({ownerDocument:l,handleContainerOverflow:o=!0,isRTL:u=!1}={}){this.handleContainerOverflow=o,this.isRTL=u,this.modals=[],this.ownerDocument=l}getScrollbarWidth(){return Q6(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(l){}removeModalAttributes(l){}setContainerStyle(l){const o={overflow:"hidden"},u=this.isRTL?"paddingLeft":"paddingRight",c=this.getElement();l.style={overflow:c.style.overflow,[u]:c.style[u]},l.scrollBarWidth&&(o[u]=`${parseInt(Dn(c,u)||"0",10)+l.scrollBarWidth}px`),c.setAttribute(s1,""),Dn(c,o)}reset(){[...this.modals].forEach(l=>this.remove(l))}removeContainerStyle(l){const o=this.getElement();o.removeAttribute(s1),Object.assign(o.style,l.style)}add(l){let o=this.modals.indexOf(l);return o!==-1||(o=this.modals.length,this.modals.push(l),this.setModalAttributes(l),o!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),o}remove(l){const o=this.modals.indexOf(l);o!==-1&&(this.modals.splice(o,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(l))}isTopModal(l){return!!this.modals.length&&this.modals[this.modals.length-1]===l}}const Zc=(a,l)=>Iu?a==null?(l||Nf()).body:(typeof a=="function"&&(a=a()),a&&"current"in a&&(a=a.current),a&&("nodeType"in a||a.getBoundingClientRect)?a:null):null;function K6(a,l){const o=Hf(),[u,c]=b.useState(()=>Zc(a,o?.document));if(!u){const f=Zc(a);f&&c(f)}return b.useEffect(()=>{},[l,u]),b.useEffect(()=>{const f=Zc(a);f!==u&&c(f)},[a,u]),u}function Z6({children:a,in:l,onExited:o,mountOnEnter:u,unmountOnExit:c}){const f=b.useRef(null),h=b.useRef(l),y=Mn(o);b.useEffect(()=>{l?h.current=!0:y(f.current)},[l,y]);const g=ao(f,$i(a)),m=b.cloneElement(a,{ref:g});return l?m:c||!h.current&&u?null:m}const J6=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function P6(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}function W6(a){let{onEnter:l,onEntering:o,onEntered:u,onExit:c,onExiting:f,onExited:h,addEndListener:y,children:g}=a,m=P6(a,J6);const S=b.useRef(null),x=ao(S,$i(g)),w=F=>k=>{F&&S.current&&F(S.current,k)},j=b.useCallback(w(l),[l]),R=b.useCallback(w(o),[o]),q=b.useCallback(w(u),[u]),Y=b.useCallback(w(c),[c]),X=b.useCallback(w(f),[f]),z=b.useCallback(w(h),[h]),B=b.useCallback(w(y),[y]);return Object.assign({},m,{nodeRef:S},l&&{onEnter:j},o&&{onEntering:R},u&&{onEntered:q},c&&{onExit:Y},f&&{onExiting:X},h&&{onExited:z},y&&{addEndListener:B},{children:typeof g=="function"?(F,k)=>g(F,Object.assign({},k,{ref:x})):b.cloneElement(g,{ref:x})})}const F6=["component"];function I6(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}const ew=b.forwardRef((a,l)=>{let{component:o}=a,u=I6(a,F6);const c=W6(u);return p.jsx(o,Object.assign({ref:l},c))});function tw({in:a,onTransition:l}){const o=b.useRef(null),u=b.useRef(!0),c=Mn(l);return i1(()=>{if(!o.current)return;let f=!1;return c({in:a,element:o.current,initial:u.current,isStale:()=>f}),()=>{f=!0}},[a,c]),i1(()=>(u.current=!1,()=>{u.current=!0}),[]),o}function nw({children:a,in:l,onExited:o,onEntered:u,transition:c}){const[f,h]=b.useState(!l);l&&f&&h(!1);const y=tw({in:!!l,onTransition:m=>{const S=()=>{m.isStale()||(m.in?u?.(m.element,m.initial):(h(!0),o?.(m.element)))};Promise.resolve(c(m)).then(S,x=>{throw m.in||h(!0),x})}}),g=ao(y,$i(a));return f&&!l?null:b.cloneElement(a,{ref:g})}function c1(a,l,o){return a?p.jsx(ew,Object.assign({},o,{component:a})):l?p.jsx(nw,Object.assign({},o,{transition:l})):p.jsx(Z6,Object.assign({},o))}const aw=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function iw(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}let Jc;function lw(a){return Jc||(Jc=new Bf({ownerDocument:a?.document})),Jc}function rw(a){const l=Hf(),o=a||lw(l),u=b.useRef({dialog:null,backdrop:null});return Object.assign(u.current,{add:()=>o.add(u.current),remove:()=>o.remove(u.current),isTopModal:()=>o.isTopModal(u.current),setDialogRef:b.useCallback(c=>{u.current.dialog=c},[]),setBackdropRef:b.useCallback(c=>{u.current.backdrop=c},[])})}const Uv=b.forwardRef((a,l)=>{let{show:o=!1,role:u="dialog",className:c,style:f,children:h,backdrop:y=!0,keyboard:g=!0,onBackdropClick:m,onEscapeKeyDown:S,transition:x,runTransition:w,backdropTransition:j,runBackdropTransition:R,autoFocus:q=!0,enforceFocus:Y=!0,restoreFocus:X=!0,restoreFocusOptions:z,renderDialog:B,renderBackdrop:F=ke=>p.jsx("div",Object.assign({},ke)),manager:k,container:N,onShow:J,onHide:G=()=>{},onExit:K,onExited:re,onExiting:Z,onEnter:D,onEntering:ee,onEntered:ne}=a,C=iw(a,aw);const A=Hf(),H=K6(N),P=rw(k),le=y6(),ce=b6(o),[T,V]=b.useState(!o),ie=b.useRef(null);b.useImperativeHandle(l,()=>P,[P]),Iu&&!ce&&o&&(ie.current=Kc(A?.document)),o&&T&&V(!1);const ae=Mn(()=>{if(P.add(),Et.current=Gu(document,"keydown",Ue),Te.current=Gu(document,"focus",()=>setTimeout(he),!0),J&&J(),q){var ke,Ba;const Yi=Kc((ke=(Ba=P.dialog)==null?void 0:Ba.ownerDocument)!=null?ke:A?.document);P.dialog&&Yi&&!l1(P.dialog,Yi)&&(ie.current=Yi,P.dialog.focus())}}),se=Mn(()=>{if(P.remove(),Et.current==null||Et.current(),Te.current==null||Te.current(),X){var ke;(ke=ie.current)==null||ke.focus==null||ke.focus(z),ie.current=null}});b.useEffect(()=>{!o||!H||ae()},[o,H,ae]),b.useEffect(()=>{T&&se()},[T,se]),V6(()=>{se()});const he=Mn(()=>{if(!Y||!le()||!P.isTopModal())return;const ke=Kc(A?.document);P.dialog&&ke&&!l1(P.dialog,ke)&&P.dialog.focus()}),ye=Mn(ke=>{ke.target===ke.currentTarget&&(m?.(ke),y===!0&&G())}),Ue=Mn(ke=>{g&&t6(ke)&&P.isTopModal()&&(S?.(ke),ke.defaultPrevented||G())}),Te=b.useRef(),Et=b.useRef(),Zt=(...ke)=>{V(!0),re?.(...ke)};if(!H)return null;const ft=Object.assign({role:u,ref:P.setDialogRef,"aria-modal":u==="dialog"?!0:void 0},C,{style:f,className:c,tabIndex:-1});let Ha=B?B(ft):p.jsx("div",Object.assign({},ft,{children:b.cloneElement(h,{role:"document"})}));Ha=c1(x,w,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!o,onExit:K,onExiting:Z,onExited:Zt,onEnter:D,onEntering:ee,onEntered:ne,children:Ha});let Ut=null;return y&&(Ut=F({ref:P.setBackdropRef,onClick:ye}),Ut=c1(j,R,{in:!!o,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Ut})),p.jsx(p.Fragment,{children:Oi.createPortal(p.jsxs(p.Fragment,{children:[Ut,Ha]}),H)})});Uv.displayName="Modal";const uw=Object.assign(Uv,{Manager:Bf});function ow(a,l){return a.classList?a.classList.contains(l):(" "+(a.className.baseVal||a.className)+" ").indexOf(" "+l+" ")!==-1}function sw(a,l){a.classList?a.classList.add(l):ow(a,l)||(typeof a.className=="string"?a.className=a.className+" "+l:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+l))}function f1(a,l){return a.replace(new RegExp("(^|\\s)"+l+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function cw(a,l){a.classList?a.classList.remove(l):typeof a.className=="string"?a.className=f1(a.className,l):a.setAttribute("class",f1(a.className&&a.className.baseVal||"",l))}const Ri={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class kv extends Bf{adjustAndStore(l,o,u){const c=o.style[l];o.dataset[l]=c,Dn(o,{[l]:`${parseFloat(Dn(o,l))+u}px`})}restore(l,o){const u=o.dataset[l];u!==void 0&&(delete o.dataset[l],Dn(o,{[l]:u}))}setContainerStyle(l){super.setContainerStyle(l);const o=this.getElement();if(sw(o,"modal-open"),!l.scrollBarWidth)return;const u=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";Ma(o,Ri.FIXED_CONTENT).forEach(f=>this.adjustAndStore(u,f,l.scrollBarWidth)),Ma(o,Ri.STICKY_CONTENT).forEach(f=>this.adjustAndStore(c,f,-l.scrollBarWidth)),Ma(o,Ri.NAVBAR_TOGGLER).forEach(f=>this.adjustAndStore(c,f,l.scrollBarWidth))}removeContainerStyle(l){super.removeContainerStyle(l);const o=this.getElement();cw(o,"modal-open");const u=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";Ma(o,Ri.FIXED_CONTENT).forEach(f=>this.restore(u,f)),Ma(o,Ri.STICKY_CONTENT).forEach(f=>this.restore(c,f)),Ma(o,Ri.NAVBAR_TOGGLER).forEach(f=>this.restore(c,f))}}let Pc;function fw(a){return Pc||(Pc=new kv(a)),Pc}const Hv=b.createContext({onHide(){}}),Bv=b.forwardRef(({closeLabel:a="Close",closeVariant:l,closeButton:o=!1,onHide:u,children:c,...f},h)=>{const y=b.useContext(Hv),g=to(()=>{y?.onHide(),u?.()});return p.jsxs("div",{ref:h,...f,children:[c,o&&p.jsx(Lf,{"aria-label":a,variant:l,onClick:g})]})});Bv.displayName="AbstractModalHeader";const $v=b.forwardRef(({className:a,bsPrefix:l,as:o="div",...u},c)=>(l=wt(l,"nav-item"),p.jsx(o,{ref:c,className:at(a,l),...u})));$v.displayName="NavItem";const qv=b.forwardRef(({bsPrefix:a,className:l,as:o=_v,active:u,eventKey:c,disabled:f=!1,...h},y)=>{a=wt(a,"nav-link");const[g,m]=Nv({key:Uf(c,h.href),active:u,disabled:f,...h});return p.jsx(o,{...h,...g,ref:y,disabled:f,className:at(l,a,f&&"disabled",m.isActive&&"active")})});qv.displayName="NavLink";const Yv=b.forwardRef((a,l)=>{const{as:o="div",bsPrefix:u,variant:c,fill:f=!1,justify:h=!1,navbar:y,navbarScroll:g,className:m,activeKey:S,...x}=xv(a,{activeKey:"onSelect"}),w=wt(u,"nav");let j,R,q=!1;const Y=b.useContext(qi),X=b.useContext(zv);return Y?(j=Y.bsPrefix,q=y??!0):X&&({cardHeaderBsPrefix:R}=X),p.jsx(G6,{as:o,ref:l,activeKey:S,className:at(m,{[w]:!q,[`${j}-nav`]:q,[`${j}-nav-scroll`]:q&&g,[`${R}-${c}`]:!!R,[`${w}-${c}`]:!!c,[`${w}-fill`]:f,[`${w}-justified`]:h}),...x})});Yv.displayName="Nav";const dw=Object.assign(Yv,{Item:$v,Link:qv}),Gv=b.forwardRef(({bsPrefix:a,className:l,as:o,...u},c)=>{a=wt(a,"navbar-brand");const f=o||(u.href?"a":"span");return p.jsx(f,{...u,ref:c,className:at(l,a)})});Gv.displayName="NavbarBrand";const Xv=b.forwardRef(({children:a,bsPrefix:l,...o},u)=>{l=wt(l,"navbar-collapse");const c=b.useContext(qi);return p.jsx(Tv,{in:!!(c&&c.expanded),...o,children:p.jsx("div",{ref:u,className:l,children:a})})});Xv.displayName="NavbarCollapse";const Vv=b.forwardRef(({bsPrefix:a,className:l,children:o,label:u="Toggle navigation",as:c="button",onClick:f,...h},y)=>{a=wt(a,"navbar-toggler");const{onToggle:g,expanded:m}=b.useContext(qi)||{},S=to(x=>{f&&f(x),g&&g()});return c==="button"&&(h.type="button"),p.jsx(c,{...h,ref:y,onClick:S,"aria-label":u,className:at(l,a,!m&&"collapsed"),children:o||p.jsx("span",{className:`${a}-icon`})})});Vv.displayName="NavbarToggle";const vf=new WeakMap,d1=(a,l)=>{if(!a||!l)return;const o=vf.get(l)||new Map;vf.set(l,o);let u=o.get(a);return u||(u=l.matchMedia(a),u.refCount=0,o.set(u.media,u)),u};function hw(a,l=typeof window>"u"?void 0:window){const o=d1(a,l),[u,c]=b.useState(()=>o?o.matches:!1);return k6(()=>{let f=d1(a,l);if(!f)return c(!1);let h=vf.get(l);const y=()=>{c(f.matches)};return f.refCount++,f.addListener(y),y(),()=>{f.removeListener(y),f.refCount--,f.refCount<=0&&h?.delete(f.media),f=void 0}},[a]),u}function pw(a){const l=Object.keys(a);function o(y,g){return y===g?g:y?`${y} and ${g}`:g}function u(y){return l[Math.min(l.indexOf(y)+1,l.length-1)]}function c(y){const g=u(y);let m=a[g];return typeof m=="number"?m=`${m-.2}px`:m=`calc(${m} - 0.2px)`,`(max-width: ${m})`}function f(y){let g=a[y];return typeof g=="number"&&(g=`${g}px`),`(min-width: ${g})`}function h(y,g,m){let S;typeof y=="object"?(S=y,m=g,g=!0):(g=g||!0,S={[y]:g});let x=b.useMemo(()=>Object.entries(S).reduce((w,[j,R])=>((R==="up"||R===!0)&&(w=o(w,f(j))),(R==="down"||R===!0)&&(w=o(w,c(j))),w),""),[JSON.stringify(S)]);return hw(x,m)}return h}const mw=pw({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),Qv=b.forwardRef(({className:a,bsPrefix:l,as:o="div",...u},c)=>(l=wt(l,"offcanvas-body"),p.jsx(o,{ref:c,className:at(a,l),...u})));Qv.displayName="OffcanvasBody";const vw={[It]:"show",[jn]:"show"},Kv=b.forwardRef(({bsPrefix:a,className:l,children:o,in:u=!1,mountOnEnter:c=!1,unmountOnExit:f=!1,appear:h=!1,...y},g)=>(a=wt(a,"offcanvas"),p.jsx(eo,{ref:g,addEndListener:Df,in:u,mountOnEnter:c,unmountOnExit:f,appear:h,...y,childRef:$i(o),children:(m,S)=>b.cloneElement(o,{...S,className:at(l,o.props.className,(m===It||m===er)&&`${a}-toggling`,vw[m])})})));Kv.displayName="OffcanvasToggling";const Zv=b.forwardRef(({bsPrefix:a,className:l,closeLabel:o="Close",closeButton:u=!1,...c},f)=>(a=wt(a,"offcanvas-header"),p.jsx(Bv,{ref:f,...c,className:at(l,a),closeLabel:o,closeButton:u})));Zv.displayName="OffcanvasHeader";const gw=v6("h5"),Jv=b.forwardRef(({className:a,bsPrefix:l,as:o=gw,...u},c)=>(l=wt(l,"offcanvas-title"),p.jsx(o,{ref:c,className:at(a,l),...u})));Jv.displayName="OffcanvasTitle";function yw(a){return p.jsx(Kv,{...a})}function bw(a){return p.jsx(Ov,{...a})}const Pv=b.forwardRef(({bsPrefix:a,className:l,children:o,"aria-labelledby":u,placement:c="start",responsive:f,show:h=!1,backdrop:y=!0,keyboard:g=!0,scroll:m=!1,onEscapeKeyDown:S,onShow:x,onHide:w,container:j,autoFocus:R=!0,enforceFocus:q=!0,restoreFocus:Y=!0,restoreFocusOptions:X,onEntered:z,onExit:B,onExiting:F,onEnter:k,onEntering:N,onExited:J,backdropClassName:G,manager:K,renderStaticNode:re=!1,...Z},D)=>{const ee=b.useRef();a=wt(a,"offcanvas");const[ne,C]=b.useState(!1),A=to(w),H=mw(f||"xs","up");b.useEffect(()=>{C(f?h&&!H:h)},[h,f,H]);const P=b.useMemo(()=>({onHide:A}),[A]);function le(){return K||(m?(ee.current||(ee.current=new kv({handleContainerOverflow:!1})),ee.current):fw())}const ce=(ae,...se)=>{ae&&(ae.style.visibility="visible"),k?.(ae,...se)},T=(ae,...se)=>{ae&&(ae.style.visibility=""),J?.(...se)},V=b.useCallback(ae=>p.jsx("div",{...ae,className:at(`${a}-backdrop`,G)}),[G,a]),ie=ae=>p.jsx("div",{...ae,...Z,className:at(l,f?`${a}-${f}`:a,`${a}-${c}`),"aria-labelledby":u,children:o});return p.jsxs(p.Fragment,{children:[!ne&&(f||re)&&ie({}),p.jsx(Hv.Provider,{value:P,children:p.jsx(uw,{show:ne,ref:D,backdrop:y,container:j,keyboard:g,autoFocus:R,enforceFocus:q&&!m,restoreFocus:Y,restoreFocusOptions:X,onEscapeKeyDown:S,onShow:x,onHide:A,onEnter:ce,onEntering:N,onEntered:z,onExit:B,onExiting:F,onExited:T,manager:le(),transition:yw,backdropTransition:bw,renderBackdrop:V,renderDialog:ie})})]})});Pv.displayName="Offcanvas";const xw=Object.assign(Pv,{Body:Qv,Header:Zv,Title:Jv}),Wv=b.forwardRef(({onHide:a,...l},o)=>{const u=b.useContext(qi),c=to(()=>{u==null||u.onToggle==null||u.onToggle(),a?.()});return p.jsx(xw,{ref:o,show:!!(u!=null&&u.expanded),...l,renderStaticNode:!0,onHide:c})});Wv.displayName="NavbarOffcanvas";const Fv=b.forwardRef(({className:a,bsPrefix:l,as:o="span",...u},c)=>(l=wt(l,"navbar-text"),p.jsx(o,{ref:c,className:at(a,l),...u})));Fv.displayName="NavbarText";const Iv=b.forwardRef((a,l)=>{const{bsPrefix:o,expand:u=!0,variant:c="light",bg:f,fixed:h,sticky:y,className:g,as:m="nav",expanded:S,onToggle:x,onSelect:w,collapseOnSelect:j=!1,...R}=xv(a,{expanded:"onToggle"}),q=wt(o,"navbar"),Y=b.useCallback((...B)=>{w?.(...B),j&&S&&x?.(!1)},[w,j,S,x]);R.role===void 0&&m!=="nav"&&(R.role="navigation");let X=`${q}-expand`;typeof u=="string"&&(X=`${X}-${u}`);const z=b.useMemo(()=>({onToggle:()=>x?.(!S),bsPrefix:q,expanded:!!S,expand:u}),[q,S,u,x]);return p.jsx(qi.Provider,{value:z,children:p.jsx(Xu.Provider,{value:Y,children:p.jsx(m,{ref:l,...R,className:at(g,q,u&&X,c&&`${q}-${c}`,f&&`bg-${f}`,y&&`sticky-${y}`,h&&`fixed-${h}`)})})})});Iv.displayName="Navbar";const Sw=Object.assign(Iv,{Brand:Gv,Collapse:Xv,Offcanvas:Wv,Text:Fv,Toggle:Vv});function ww(a){return Ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M149.688 85.625c-1.234.005-2.465.033-3.72.063-33.913.806-75.48 10.704-127.25 33.718V362.78c60.77-28.82 106.718-37.067 144.22-33.092 33.502 3.55 59.685 16.66 83.562 31.187v-242.97c-23.217-17.744-50.195-30.04-85.97-32-3.52-.192-7.142-.296-10.843-.28zm211.968 0c-3.7-.016-7.322.088-10.844.28-35.773 1.96-62.75 14.256-85.968 32v242.97c23.876-14.527 50.06-27.637 83.562-31.188 37.502-3.974 83.45 4.272 144.22 33.094V119.407c-51.77-23.014-93.337-32.912-127.25-33.72-1.255-.028-2.486-.056-3.72-.06zm5.72 261.78c-1.038-.002-2.074.017-3.095.033-4.808.075-9.43.37-13.905.843-33.932 3.597-59.603 17.976-85.53 34.44v.28c-6.554-1.99-13.02-2.37-19.408-.97-25.566-16.177-51.003-30.202-84.468-33.75-5.595-.592-11.44-.883-17.564-.842-32.04.213-71.833 9.778-124.687 35.937v42.53c60.77-28.823 106.714-37.067 144.218-33.092 18.545 1.965 34.837 6.845 49.75 13.28-4.682 6.064-9.308 13.268-13.875 21.688h117.156c-5.93-8.22-11.798-15.414-17.626-21.56 14.996-6.503 31.39-11.43 50.062-13.408 37.503-3.974 83.448 4.27 144.22 33.094v-42.53c-53.16-26.31-93.115-35.863-125.25-35.97z"},child:[]}]})(a)}const Ew=O(Sw)`
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
`,Tw=O.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 8px;
`,Cw=O.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Rw=O.div`
  justify-self: center;
`,_w=O.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`,Ow=O.button`
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
`,zw=O(Hi)`
  padding: 10px 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px; /* space between icon and text */
`,Aw=O(ww)`
  width: 28px;
  height: 28px;
  flex: 0 0 28px;
  color: #111; /* keep high contrast; adjust to your brand */
`,jw=O.div`
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
`;function Mw(){const a=K3,l=()=>{console.log("Toggled theme")};return p.jsx("div",{className:"topbar-wrapper",children:p.jsx(Ew,{className:"shadow-sm d-lg-none",children:p.jsx(Av,{fluid:!0,className:"px-3",children:p.jsxs(Tw,{children:[p.jsx(Cw,{children:p.jsxs(zw,{to:"/instalearn/","aria-label":"Go to home",children:[p.jsx(Aw,{"aria-hidden":"true"}),p.jsx(jw,{children:"InstaLearn"})]})}),p.jsx(Rw,{}),p.jsx(_w,{children:p.jsx(Ow,{type:"button",onClick:l,"aria-label":"Toggle theme",children:p.jsx(a,{size:20})})})]})})})})}function Nw(a){return Ve({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(a)}function eg(a){return Ve({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(a)}function Dw(a){return Ve({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(a)}function tg(a){return Ve({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(a)}function Lw(a){return Ve({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(a)}function Uw(a){return Ve({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(a)}function ng(a){return Ve({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(a)}function h1(a){return Ve({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}const kw=fn`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Hw=O.aside`
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
`,Bw=O(Hi)`
  padding: 25px 12px 16px 12px;
  margin-bottom: 19px;
  margin-left: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: padding 200ms ease, margin 200ms ease;
`,$w=O.div`
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
`,qw=O.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
`,Yw=Ua`
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
    animation: ${kw} 4s linear infinite;
    box-shadow: 0 0 8px rgba(0, 245, 255, 0.8);
  }
`,Wc=O(Hi)`
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

  ${a=>a.$active&&Yw}
`,Gw=O.div`
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px solid #dbdbdb;
`,Fc=O.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,Ic=O.span`
  white-space: nowrap;
  transition: opacity 120ms ease, width 200ms ease;
`;function Xw(){const{pathname:a}=kn(),l=[{to:"/instalearn/",icon:p.jsx(tg,{}),label:"Home"},{to:"/instalearn/teacher",icon:p.jsx(yv,{}),label:"Teacher"},{to:"/instalearn/library",icon:p.jsx(eg,{}),label:"Library",hasNotification:!0},{to:"/instalearn/notifications",icon:p.jsx(Dw,{}),label:"Notifications"},{to:"/instalearn/profile",icon:p.jsx(ng,{}),label:"Profile"}];return p.jsxs(Hw,{children:[p.jsx(Bw,{to:"/instalearn/",children:p.jsx($w,{children:"InstaLearn"})}),p.jsxs(qw,{children:[l.slice(0,-1).map(o=>p.jsxs(Wc,{to:o.to,$active:a===o.to,children:[p.jsx(Fc,{children:o.icon}),p.jsx(Ic,{children:o.label}),o.hasNotification]},o.to)),p.jsxs(Wc,{to:l[l.length-1].to,$active:a===l[l.length-1].to,children:[p.jsx(Fc,{children:l[l.length-1].icon}),p.jsx(Ic,{children:l[l.length-1].label})]})]}),p.jsx(Gw,{children:p.jsxs(Wc,{to:"/instalearn/more",$active:a==="/instalearn/more",children:[p.jsx(Fc,{children:p.jsx(Lw,{})}),p.jsx(Ic,{children:"More"})]})})]})}const Vw=O.div`
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
`,Qw=O.div`
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
`,ag=O.div`
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
`,Kw=O.div`
  position: relative;
  flex-shrink: 0;
`,Zw=O.div`
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
  
  ${ag}:hover & {
    transform: scale(1.05);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }
`,Jw=O.div`
  position: absolute;
  bottom: ${a=>a.$width<250?"2px":"4px"};
  right: ${a=>a.$width<250?"0":"2px"};
  width: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  height: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
`,Pw=O.div`
  flex: 1;
  min-width: 0;
  display: ${a=>a.$width<180?"none":"block"};
`,Ww=O.div`
  font-size: ${a=>a.$width<250?"13px":"14px"};
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Fw=O.div`
  font-size: ${a=>a.$width<250?"11px":"13px"};
  color: #6b7280;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Iw=O.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,e8=O.div`
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
`,t8=O.button`
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
`,n8=O.div`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.$width<250?"8px":"12px"};
  margin-bottom: 32px;
`,ig=O.div`
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
`,a8=O.div`
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
  
  ${ig}:hover & {
    transform: scale(1.05) rotate(5deg);
  }
`,i8=O.div`
  display: flex;
  flex-direction: ${a=>a.$width<200?"column":a.$width<250?"row":"column"};
  align-items: ${a=>a.$width>=200&&a.$width<250?"center":"stretch"};
  flex: 1;
`,l8=O.div`
  flex: 1;
`,r8=O.h4`
  font-size: ${a=>a.$width<250?"12px":"13px"};
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 ${a=>a.$width<250?"2px":"4px"} 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,u8=O.p`
  font-size: ${a=>a.$width<250?"10px":"12px"};
  color: #6b7280;
  margin: 0;
  display: ${a=>a.$width<180?"none":"-webkit-box"};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
`,o8=O.span`
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
`;O.a`
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
`;const s8=({sidebarWidth:a=360})=>{const l={username:"demo_user",name:"Demo User",initials:"DU"},o=[{icon:h1,gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",title:"New Feature: Dark Mode",description:"Enable dark mode for a better night-time experience.",badge:"New",badgeBg:"linear-gradient(135deg, #667eea, #764ba2)"},{icon:Uw,gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",title:"Product Tip: Quick Search",description:"Use the search bar to find items faster.",badge:"Tip",badgeBg:"linear-gradient(135deg, #f093fb, #f5576c)"},{icon:Nw,gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",title:"Update: Version 2.0",description:"Check out the latest improvements and bug fixes.",badge:"Update",badgeBg:"linear-gradient(135deg, #4facfe, #00f2fe)"}];return p.jsxs(Vw,{children:[p.jsx(Qw,{children:p.jsxs(ag,{$width:a,children:[p.jsxs(Kw,{children:[p.jsx(Zw,{$width:a,children:l.initials}),p.jsx(Jw,{$width:a})]}),p.jsxs(Pw,{$width:a,children:[p.jsx(Ww,{$width:a,children:l.username}),p.jsx(Fw,{$width:a,children:l.name})]})]})}),p.jsxs(Iw,{children:[p.jsxs(e8,{$width:a,$iconColor:"#667eea",children:[p.jsx(h1,{}),p.jsx("span",{children:"Highlights"})]}),p.jsx(t8,{$width:a,children:"See All"})]}),p.jsx(n8,{$width:a,children:o.map((u,c)=>{const f=u.icon;return p.jsxs(ig,{$width:a,$glowColor:u.gradient,children:[p.jsx(o8,{$width:a,$bg:u.badgeBg,children:u.badge}),p.jsxs(i8,{$width:a,children:[p.jsx(a8,{$width:a,$gradient:u.gradient,children:p.jsx(f,{})}),p.jsxs(l8,{children:[p.jsx(r8,{$width:a,children:u.title}),p.jsx(u8,{$width:a,children:u.description})]})]})]},c)})})]})};function c8(){const{pathname:a}=kn(),l=[["/instalearn/",p.jsx(tg,{})],["/instalearn/teacher",p.jsx(yv,{})],["/instalearn/library",p.jsx(eg,{})],["/instalearn/profile",p.jsx(ng,{})]];return p.jsxs(p.Fragment,{children:[p.jsx("style",{children:`
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
      `}),p.jsx(dw,{className:"bottom-nav fixed-bottom d-flex justify-content-around py-2 d-lg-none",children:l.map(([o,u])=>p.jsx(Hi,{to:o,className:`nav-link fs-4 text-white ${a===o?"active":""}`,children:u},o))})]})}const f8={username:"ms.priya.teaches",name:"Priya Sharma",subject:"Mathematics Teacher",bio:"Making math fun & easy ✨ | Class 6-12 | CBSE Expert",avatar:"https://i.pravatar.cc/150?img=12",posts:247,students:"1.2K",books:15,experience:8,bookList:[{title:"Algebra"},{title:"Geometry"},{title:"Calculus"},{title:"Stats"},{title:"Trigno"},{title:"Number Theory"}]},xt=f8,d8=O.div`
  max-width: 1120px;
  margin: 0 auto;
  background: #fff;
  min-height: 100vh;
`,h8=O.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
`,p8=O.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,m8=O.span`
  font-weight: 600;
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`,v8=O.div`
  display: flex;
  gap: 1rem;
  font-size: 1.25rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`,g8=O.div`
  padding: 1rem 1.5rem;
  @media (min-width: 768px) {
    padding: 1.5rem 2rem;
  }
  @media (min-width: 1024px) {
    padding: 2rem 3rem;
  }
`,y8=O.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,b8=O.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,x8=O.div`
  position: relative;
`,S8=O.img`
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
`,w8=O.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  text-align: center;

  @media (min-width: 768px) {
    display: none;
  }
`,E8=O.div`
  display: none;
  gap: 2rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    display: flex;
  }
`,_i=O.div`
  font-weight: 600;
  font-size: 1.125rem;
  span {
    font-weight: 400;
    margin-left: 0.25rem;
    color: #6b7280;
  }
`,T8=O.div`
  flex: 1;
`,C8=O.div`
  font-weight: 600;
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`,R8=O.div`
  font-size: 0.875rem;
  color: #6b7280;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,_8=O.div`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,O8=O.div`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  color: #6b7280;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,z8=O.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,A8=O.button`
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
`,j8=O.button`
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
`,M8=O.button`
  border: 1px solid #d1d5db;
  padding: 0.25rem 1rem;
  border-radius: 0.5rem;
`,N8=O.div`
  margin-bottom: 1.5rem;
`,D8=O.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
`,L8=O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: fit-content;
  cursor: pointer;
`,U8=O.div`
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
`,k8=O.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 0.25rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`,H8=O.div`
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
`,B8=O.div`
  display: flex;
  border-top: 1px solid #e5e7eb;
`,p1=O.button`
  flex: 1;
  padding: 0.75rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-top: 2px solid ${({active:a})=>a?"#111827":"transparent"};
  color: ${({active:a})=>a?"#111827":"#9ca3af"};
`,$8=O.div`
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
`,q8=O.div`
  aspect-ratio: 1 / 1;
  background: #f3f4f6;
  display: flex;
  justify-content: center;
  align-items: center;
`;function Y8(){const a=yf(),l=o=>{o===0&&a("/instalearn/library")};return p.jsxs(d8,{children:[p.jsxs(h8,{children:[p.jsxs(p8,{children:[p.jsx(Ai,{size:20}),p.jsx(m8,{children:xt.username})]}),p.jsx(v8,{children:p.jsx("button",{children:"☰"})})]}),p.jsxs(g8,{children:[p.jsxs(y8,{children:[p.jsxs(b8,{children:[p.jsx(x8,{children:p.jsx(S8,{src:xt.avatar,alt:xt.name})}),p.jsxs(w8,{children:[p.jsxs(_i,{children:[xt.posts," ",p.jsx("span",{children:"posts"})]}),p.jsxs(_i,{children:[xt.students," ",p.jsx("span",{children:"students"})]}),p.jsxs(_i,{children:[xt.books," ",p.jsx("span",{children:"books"})]})]})]}),p.jsxs(T8,{children:[p.jsxs(E8,{children:[p.jsxs(_i,{children:[xt.posts," ",p.jsx("span",{children:"posts"})]}),p.jsxs(_i,{children:[xt.students," ",p.jsx("span",{children:"students"})]}),p.jsxs(_i,{children:[xt.books," ",p.jsx("span",{children:"books"})]})]}),p.jsx(C8,{children:xt.name}),p.jsx(R8,{children:xt.subject}),p.jsx(_8,{children:xt.bio}),p.jsxs(O8,{children:["🎓 ",xt.experience," years experience"]}),p.jsxs(z8,{children:[p.jsx(A8,{children:"Follow"}),p.jsx(j8,{children:"Message"}),p.jsx(M8,{children:"▼"})]})]})]}),p.jsx(N8,{children:p.jsx(D8,{children:xt.bookList.map((o,u)=>p.jsxs(L8,{onClick:()=>l(u),children:[p.jsx(U8,{children:p.jsx(k8,{children:p.jsx(Ai,{size:24})})}),p.jsx(H8,{children:o.title})]},u))})})]}),p.jsxs(B8,{children:[p.jsx(p1,{active:!0,children:p.jsx(C3,{size:20})}),p.jsx(p1,{children:p.jsx(S3,{size:20})})]}),p.jsx($8,{children:Array(9).fill(null).map((o,u)=>p.jsx(q8,{children:p.jsx(Ai,{size:24})},u))})]})}const G8=O.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--color-light, #f5f5f5);
`,X8=O.aside`
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
`,V8=O.div`
  flex: 1;
  display: flex;
  width: 100%;

  @media (min-width: 1024px) {
    /* match LeftSidebar width exactly to avoid layout jump */
    margin-left: 246px;
  }
`,Q8=O.main`
  flex: 1;
  width: 100%;
  padding-bottom: 60px;
  transition: ${a=>a.$isResizing?"none":"margin-right 0.2s ease"};
  will-change: margin-right;

  @media (min-width: 1024px) {
    padding-bottom: 0;
    margin-right: ${a=>`${a.$sidebarWidth}px`};
  }
`,K8=O.aside`
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
`,Z8=O.div`
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
`,J8=O.div`
  display: block;
  margin-bottom: 60px;

  @media (min-width: 1024px) {
    display: none;
  }
`,P8=O.div`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (min-width: 1024px) {
    display: none;
  }
`;function W8(){const[a,l]=b.useState(360),[o,u]=b.useState(!1),c=b.useRef(null),f=350,h=600,y=g=>{g.preventDefault(),u(!0),c.current={startX:g.clientX,startWidth:a}};return b.useEffect(()=>{const g=(x,w,j)=>Math.min(Math.max(x,w),j),m=x=>{if(!o||!c.current)return;const{startX:w,startWidth:j}=c.current,R=w-x.clientX,q=g(j+R,f,h);l(q)},S=()=>{o&&(u(!1),c.current=null)};return o&&(document.addEventListener("mousemove",m),document.addEventListener("mouseup",S),document.body.style.cursor="ew-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",S),document.body.style.cursor="",document.body.style.userSelect=""}},[o]),p.jsxs(G8,{children:[p.jsx(X8,{children:p.jsx(Xw,{})}),p.jsxs(V8,{children:[p.jsxs(Q8,{$sidebarWidth:a,$isResizing:o,children:[p.jsx(J8,{children:p.jsx(Mw,{})}),p.jsxs(Rb,{children:[p.jsx(ja,{path:"/instalearn",element:p.jsx(Q3,{})}),p.jsx(ja,{path:"/instalearn/teacher",element:p.jsx(Y8,{})}),p.jsx(ja,{path:"/instalearn/library",element:p.jsx(f3,{})}),p.jsx(ja,{path:"/instalearn/notifications",element:p.jsx(Im,{})}),p.jsx(ja,{path:"/instalearn/more",element:p.jsx(Im,{})}),p.jsx(ja,{path:"/instalearn/profile",element:p.jsx(E4,{})})]})]}),p.jsxs(K8,{$width:a,$isResizing:o,children:[p.jsx(Z8,{className:o?"active":"",onMouseDown:y,"aria-label":"Resize sidebar"}),p.jsx(s8,{})]})]}),p.jsx(P8,{children:p.jsx(c8,{})})]})}U2.createRoot(document.getElementById("root")).render(p.jsx(Jb,{children:p.jsx(W8,{})}));export{ze as R,un as _,b as r};
