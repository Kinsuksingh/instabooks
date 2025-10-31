(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))o(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function c(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(f){if(f.ep)return;f.ep=!0;const d=c(f);fetch(f.href,d)}})();function Fi(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Cs={exports:{}},Ui={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W1;function $y(){if(W1)return Ui;W1=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function c(o,f,d){var p=null;if(d!==void 0&&(p=""+d),f.key!==void 0&&(p=""+f.key),"key"in f){d={};for(var y in f)y!=="key"&&(d[y]=f[y])}else d=f;return f=d.ref,{$$typeof:a,type:o,key:p,ref:f!==void 0?f:null,props:d}}return Ui.Fragment=r,Ui.jsx=c,Ui.jsxs=c,Ui}var I1;function ky(){return I1||(I1=1,Cs.exports=$y()),Cs.exports}var s=ky(),zs={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P1;function By(){if(P1)return oe;P1=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),p=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),z=Symbol.iterator;function _(E){return E===null||typeof E!="object"?null:(E=z&&E[z]||E["@@iterator"],typeof E=="function"?E:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,D={};function L(E,G,F){this.props=E,this.context=G,this.refs=D,this.updater=F||R}L.prototype.isReactComponent={},L.prototype.setState=function(E,G){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,G,"setState")},L.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function H(){}H.prototype=L.prototype;function N(E,G,F){this.props=E,this.context=G,this.refs=D,this.updater=F||R}var X=N.prototype=new H;X.constructor=N,B(X,L.prototype),X.isPureReactComponent=!0;var Z=Array.isArray;function U(){}var Q={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function ue(E,G,F){var W=F.ref;return{$$typeof:a,type:E,key:G,ref:W!==void 0?W:null,props:F}}function Ce(E,G){return ue(E.type,G,E.props)}function Be(E){return typeof E=="object"&&E!==null&&E.$$typeof===a}function Ge(E){var G={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(F){return G[F]})}var et=/\/+/g;function nt(E,G){return typeof E=="object"&&E!==null&&E.key!=null?Ge(""+E.key):G.toString(36)}function Le(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(U,U):(E.status="pending",E.then(function(G){E.status==="pending"&&(E.status="fulfilled",E.value=G)},function(G){E.status==="pending"&&(E.status="rejected",E.reason=G)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function k(E,G,F,W,ae){var re=typeof E;(re==="undefined"||re==="boolean")&&(E=null);var he=!1;if(E===null)he=!0;else switch(re){case"bigint":case"string":case"number":he=!0;break;case"object":switch(E.$$typeof){case a:case r:he=!0;break;case S:return he=E._init,k(he(E._payload),G,F,W,ae)}}if(he)return ae=ae(E),he=W===""?"."+nt(E,0):W,Z(ae)?(F="",he!=null&&(F=he.replace(et,"$&/")+"/"),k(ae,G,F,"",function(zt){return zt})):ae!=null&&(Be(ae)&&(ae=Ce(ae,F+(ae.key==null||E&&E.key===ae.key?"":(""+ae.key).replace(et,"$&/")+"/")+he)),G.push(ae)),1;he=0;var He=W===""?".":W+":";if(Z(E))for(var be=0;be<E.length;be++)W=E[be],re=He+nt(W,be),he+=k(W,G,F,re,ae);else if(be=_(E),typeof be=="function")for(E=be.call(E),be=0;!(W=E.next()).done;)W=W.value,re=He+nt(W,be++),he+=k(W,G,F,re,ae);else if(re==="object"){if(typeof E.then=="function")return k(Le(E),G,F,W,ae);throw G=String(E),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return he}function K(E,G,F){if(E==null)return E;var W=[],ae=0;return k(E,W,"","",function(re){return G.call(F,re,ae++)}),W}function I(E){if(E._status===-1){var G=E._result;G=G(),G.then(function(F){(E._status===0||E._status===-1)&&(E._status=1,E._result=F)},function(F){(E._status===0||E._status===-1)&&(E._status=2,E._result=F)}),E._status===-1&&(E._status=0,E._result=G)}if(E._status===1)return E._result.default;throw E._result}var ee=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},fe={map:K,forEach:function(E,G,F){K(E,function(){G.apply(this,arguments)},F)},count:function(E){var G=0;return K(E,function(){G++}),G},toArray:function(E){return K(E,function(G){return G})||[]},only:function(E){if(!Be(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return oe.Activity=w,oe.Children=fe,oe.Component=L,oe.Fragment=c,oe.Profiler=f,oe.PureComponent=N,oe.StrictMode=o,oe.Suspense=x,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,oe.__COMPILER_RUNTIME={__proto__:null,c:function(E){return Q.H.useMemoCache(E)}},oe.cache=function(E){return function(){return E.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(E,G,F){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var W=B({},E.props),ae=E.key;if(G!=null)for(re in G.key!==void 0&&(ae=""+G.key),G)!P.call(G,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&G.ref===void 0||(W[re]=G[re]);var re=arguments.length-2;if(re===1)W.children=F;else if(1<re){for(var he=Array(re),He=0;He<re;He++)he[He]=arguments[He+2];W.children=he}return ue(E.type,ae,W)},oe.createContext=function(E){return E={$$typeof:p,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:d,_context:E},E},oe.createElement=function(E,G,F){var W,ae={},re=null;if(G!=null)for(W in G.key!==void 0&&(re=""+G.key),G)P.call(G,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(ae[W]=G[W]);var he=arguments.length-2;if(he===1)ae.children=F;else if(1<he){for(var He=Array(he),be=0;be<he;be++)He[be]=arguments[be+2];ae.children=He}if(E&&E.defaultProps)for(W in he=E.defaultProps,he)ae[W]===void 0&&(ae[W]=he[W]);return ue(E,re,ae)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(E){return{$$typeof:y,render:E}},oe.isValidElement=Be,oe.lazy=function(E){return{$$typeof:S,_payload:{_status:-1,_result:E},_init:I}},oe.memo=function(E,G){return{$$typeof:m,type:E,compare:G===void 0?null:G}},oe.startTransition=function(E){var G=Q.T,F={};Q.T=F;try{var W=E(),ae=Q.S;ae!==null&&ae(F,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(U,ee)}catch(re){ee(re)}finally{G!==null&&F.types!==null&&(G.types=F.types),Q.T=G}},oe.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},oe.use=function(E){return Q.H.use(E)},oe.useActionState=function(E,G,F){return Q.H.useActionState(E,G,F)},oe.useCallback=function(E,G){return Q.H.useCallback(E,G)},oe.useContext=function(E){return Q.H.useContext(E)},oe.useDebugValue=function(){},oe.useDeferredValue=function(E,G){return Q.H.useDeferredValue(E,G)},oe.useEffect=function(E,G){return Q.H.useEffect(E,G)},oe.useEffectEvent=function(E){return Q.H.useEffectEvent(E)},oe.useId=function(){return Q.H.useId()},oe.useImperativeHandle=function(E,G,F){return Q.H.useImperativeHandle(E,G,F)},oe.useInsertionEffect=function(E,G){return Q.H.useInsertionEffect(E,G)},oe.useLayoutEffect=function(E,G){return Q.H.useLayoutEffect(E,G)},oe.useMemo=function(E,G){return Q.H.useMemo(E,G)},oe.useOptimistic=function(E,G){return Q.H.useOptimistic(E,G)},oe.useReducer=function(E,G,F){return Q.H.useReducer(E,G,F)},oe.useRef=function(E){return Q.H.useRef(E)},oe.useState=function(E){return Q.H.useState(E)},oe.useSyncExternalStore=function(E,G,F){return Q.H.useSyncExternalStore(E,G,F)},oe.useTransition=function(){return Q.H.useTransition()},oe.version="19.2.0",oe}var ep;function jf(){return ep||(ep=1,zs.exports=By()),zs.exports}var v=jf();const ke=Fi(v);var Ts={exports:{}},Hi={},Ms={exports:{}},As={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp;function Ly(){return tp||(tp=1,(function(a){function r(k,K){var I=k.length;k.push(K);e:for(;0<I;){var ee=I-1>>>1,fe=k[ee];if(0<f(fe,K))k[ee]=K,k[I]=fe,I=ee;else break e}}function c(k){return k.length===0?null:k[0]}function o(k){if(k.length===0)return null;var K=k[0],I=k.pop();if(I!==K){k[0]=I;e:for(var ee=0,fe=k.length,E=fe>>>1;ee<E;){var G=2*(ee+1)-1,F=k[G],W=G+1,ae=k[W];if(0>f(F,I))W<fe&&0>f(ae,F)?(k[ee]=ae,k[W]=I,ee=W):(k[ee]=F,k[G]=I,ee=G);else if(W<fe&&0>f(ae,I))k[ee]=ae,k[W]=I,ee=W;else break e}}return K}function f(k,K){var I=k.sortIndex-K.sortIndex;return I!==0?I:k.id-K.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var p=Date,y=p.now();a.unstable_now=function(){return p.now()-y}}var x=[],m=[],S=1,w=null,z=3,_=!1,R=!1,B=!1,D=!1,L=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function X(k){for(var K=c(m);K!==null;){if(K.callback===null)o(m);else if(K.startTime<=k)o(m),K.sortIndex=K.expirationTime,r(x,K);else break;K=c(m)}}function Z(k){if(B=!1,X(k),!R)if(c(x)!==null)R=!0,U||(U=!0,Ge());else{var K=c(m);K!==null&&Le(Z,K.startTime-k)}}var U=!1,Q=-1,P=5,ue=-1;function Ce(){return D?!0:!(a.unstable_now()-ue<P)}function Be(){if(D=!1,U){var k=a.unstable_now();ue=k;var K=!0;try{e:{R=!1,B&&(B=!1,H(Q),Q=-1),_=!0;var I=z;try{t:{for(X(k),w=c(x);w!==null&&!(w.expirationTime>k&&Ce());){var ee=w.callback;if(typeof ee=="function"){w.callback=null,z=w.priorityLevel;var fe=ee(w.expirationTime<=k);if(k=a.unstable_now(),typeof fe=="function"){w.callback=fe,X(k),K=!0;break t}w===c(x)&&o(x),X(k)}else o(x);w=c(x)}if(w!==null)K=!0;else{var E=c(m);E!==null&&Le(Z,E.startTime-k),K=!1}}break e}finally{w=null,z=I,_=!1}K=void 0}}finally{K?Ge():U=!1}}}var Ge;if(typeof N=="function")Ge=function(){N(Be)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,nt=et.port2;et.port1.onmessage=Be,Ge=function(){nt.postMessage(null)}}else Ge=function(){L(Be,0)};function Le(k,K){Q=L(function(){k(a.unstable_now())},K)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(k){k.callback=null},a.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<k?Math.floor(1e3/k):5},a.unstable_getCurrentPriorityLevel=function(){return z},a.unstable_next=function(k){switch(z){case 1:case 2:case 3:var K=3;break;default:K=z}var I=z;z=K;try{return k()}finally{z=I}},a.unstable_requestPaint=function(){D=!0},a.unstable_runWithPriority=function(k,K){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var I=z;z=k;try{return K()}finally{z=I}},a.unstable_scheduleCallback=function(k,K,I){var ee=a.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?ee+I:ee):I=ee,k){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=I+fe,k={id:S++,callback:K,priorityLevel:k,startTime:I,expirationTime:fe,sortIndex:-1},I>ee?(k.sortIndex=I,r(m,k),c(x)===null&&k===c(m)&&(B?(H(Q),Q=-1):B=!0,Le(Z,I-ee))):(k.sortIndex=fe,r(x,k),R||_||(R=!0,U||(U=!0,Ge()))),k},a.unstable_shouldYield=Ce,a.unstable_wrapCallback=function(k){var K=z;return function(){var I=z;z=K;try{return k.apply(this,arguments)}finally{z=I}}}})(As)),As}var np;function Uy(){return np||(np=1,Ms.exports=Ly()),Ms.exports}var Rs={exports:{}},ht={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap;function Hy(){if(ap)return ht;ap=1;var a=jf();function r(x){var m="https://react.dev/errors/"+x;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)m+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+x+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var o={d:{f:c,r:function(){throw Error(r(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function d(x,m,S){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:w==null?null:""+w,children:x,containerInfo:m,implementation:S}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(x,m){if(x==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ht.createPortal=function(x,m){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(r(299));return d(x,m,null,S)},ht.flushSync=function(x){var m=p.T,S=o.p;try{if(p.T=null,o.p=2,x)return x()}finally{p.T=m,o.p=S,o.d.f()}},ht.preconnect=function(x,m){typeof x=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(x,m))},ht.prefetchDNS=function(x){typeof x=="string"&&o.d.D(x)},ht.preinit=function(x,m){if(typeof x=="string"&&m&&typeof m.as=="string"){var S=m.as,w=y(S,m.crossOrigin),z=typeof m.integrity=="string"?m.integrity:void 0,_=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;S==="style"?o.d.S(x,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:w,integrity:z,fetchPriority:_}):S==="script"&&o.d.X(x,{crossOrigin:w,integrity:z,fetchPriority:_,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ht.preinitModule=function(x,m){if(typeof x=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var S=y(m.as,m.crossOrigin);o.d.M(x,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(x)},ht.preload=function(x,m){if(typeof x=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var S=m.as,w=y(S,m.crossOrigin);o.d.L(x,S,{crossOrigin:w,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ht.preloadModule=function(x,m){if(typeof x=="string")if(m){var S=y(m.as,m.crossOrigin);o.d.m(x,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(x)},ht.requestFormReset=function(x){o.d.r(x)},ht.unstable_batchedUpdates=function(x,m){return x(m)},ht.useFormState=function(x,m,S){return p.H.useFormState(x,m,S)},ht.useFormStatus=function(){return p.H.useHostTransitionStatus()},ht.version="19.2.0",ht}var lp;function Am(){if(lp)return Rs.exports;lp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Rs.exports=Hy(),Rs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip;function Yy(){if(ip)return Hi;ip=1;var a=Uy(),r=jf(),c=Am();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(d(e)!==e)throw Error(o(188))}function m(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,l=t;;){var i=n.return;if(i===null)break;var u=i.alternate;if(u===null){if(l=i.return,l!==null){n=l;continue}break}if(i.child===u.child){for(u=i.child;u;){if(u===n)return x(i),e;if(u===l)return x(i),t;u=u.sibling}throw Error(o(188))}if(n.return!==l.return)n=i,l=u;else{for(var h=!1,g=i.child;g;){if(g===n){h=!0,n=i,l=u;break}if(g===l){h=!0,l=i,n=u;break}g=g.sibling}if(!h){for(g=u.child;g;){if(g===n){h=!0,n=u,l=i;break}if(g===l){h=!0,l=u,n=i;break}g=g.sibling}if(!h)throw Error(o(189))}}if(n.alternate!==l)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function S(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,z=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),N=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),ue=Symbol.for("react.activity"),Ce=Symbol.for("react.memo_cache_sentinel"),Be=Symbol.iterator;function Ge(e){return e===null||typeof e!="object"?null:(e=Be&&e[Be]||e["@@iterator"],typeof e=="function"?e:null)}var et=Symbol.for("react.client.reference");function nt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case L:return"Profiler";case D:return"StrictMode";case Z:return"Suspense";case U:return"SuspenseList";case ue:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case N:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return t=e.displayName||null,t!==null?t:nt(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return nt(e(t))}catch{}}return null}var Le=Array.isArray,k=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},ee=[],fe=-1;function E(e){return{current:e}}function G(e){0>fe||(e.current=ee[fe],ee[fe]=null,fe--)}function F(e,t){fe++,ee[fe]=e.current,e.current=t}var W=E(null),ae=E(null),re=E(null),he=E(null);function He(e,t){switch(F(re,t),F(ae,e),F(W,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?b1(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=b1(t),e=S1(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(W),F(W,e)}function be(){G(W),G(ae),G(re)}function zt(e){e.memoizedState!==null&&F(he,e);var t=W.current,n=S1(t,e.type);t!==n&&(F(ae,e),F(W,n))}function Ft(e){ae.current===e&&(G(W),G(ae)),he.current===e&&(G(he),$i._currentValue=I)}var mt,Ha;function Lt(e){if(mt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);mt=t&&t[1]||"",Ha=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mt+e+Ha}var Ne=!1;function Ya(e,t){if(!e||Ne)return"";Ne=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch($){var O=$}Reflect.construct(e,[],V)}else{try{V.call()}catch($){O=$}e.call(V.prototype)}}else{try{throw Error()}catch($){O=$}(V=e())&&typeof V.catch=="function"&&V.catch(function(){})}}catch($){if($&&O&&typeof $.stack=="string")return[$.stack,O.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),h=u[0],g=u[1];if(h&&g){var j=h.split(`
`),A=g.split(`
`);for(i=l=0;l<j.length&&!j[l].includes("DetermineComponentFrameRoot");)l++;for(;i<A.length&&!A[i].includes("DetermineComponentFrameRoot");)i++;if(l===j.length||i===A.length)for(l=j.length-1,i=A.length-1;1<=l&&0<=i&&j[l]!==A[i];)i--;for(;1<=l&&0<=i;l--,i--)if(j[l]!==A[i]){if(l!==1||i!==1)do if(l--,i--,0>i||j[l]!==A[i]){var Y=`
`+j[l].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=l&&0<=i);break}}}finally{Ne=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Lt(n):""}function Ql(e,t){switch(e.tag){case 26:case 27:case 5:return Lt(e.type);case 16:return Lt("Lazy");case 13:return e.child!==t&&t!==null?Lt("Suspense Fallback"):Lt("Suspense");case 19:return Lt("SuspenseList");case 0:case 15:return Ya(e.type,!1);case 11:return Ya(e.type.render,!1);case 1:return Ya(e.type,!0);case 31:return Lt("Activity");default:return""}}function Wf(e){try{var t="",n=null;do t+=Ql(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var su=Object.prototype.hasOwnProperty,fu=a.unstable_scheduleCallback,du=a.unstable_cancelCallback,h2=a.unstable_shouldYield,p2=a.unstable_requestPaint,Tt=a.unstable_now,m2=a.unstable_getCurrentPriorityLevel,If=a.unstable_ImmediatePriority,Pf=a.unstable_UserBlockingPriority,tr=a.unstable_NormalPriority,g2=a.unstable_LowPriority,ed=a.unstable_IdlePriority,x2=a.log,y2=a.unstable_setDisableYieldValue,Zl=null,Mt=null;function Un(e){if(typeof x2=="function"&&y2(e),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(Zl,e)}catch{}}var At=Math.clz32?Math.clz32:S2,v2=Math.log,b2=Math.LN2;function S2(e){return e>>>=0,e===0?32:31-(v2(e)/b2|0)|0}var nr=256,ar=262144,lr=4194304;function ya(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ir(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var i=0,u=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var g=l&134217727;return g!==0?(l=g&~u,l!==0?i=ya(l):(h&=g,h!==0?i=ya(h):n||(n=g&~e,n!==0&&(i=ya(n))))):(g=l&~u,g!==0?i=ya(g):h!==0?i=ya(h):n||(n=l&~e,n!==0&&(i=ya(n)))),i===0?0:t!==0&&t!==i&&(t&u)===0&&(u=i&-i,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:i}function Kl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function w2(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function td(){var e=lr;return lr<<=1,(lr&62914560)===0&&(lr=4194304),e}function hu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function j2(e,t,n,l,i,u){var h=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,j=e.expirationTimes,A=e.hiddenUpdates;for(n=h&~n;0<n;){var Y=31-At(n),V=1<<Y;g[Y]=0,j[Y]=-1;var O=A[Y];if(O!==null)for(A[Y]=null,Y=0;Y<O.length;Y++){var $=O[Y];$!==null&&($.lane&=-536870913)}n&=~V}l!==0&&nd(e,l,0),u!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=u&~(h&~t))}function nd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-At(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function ad(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-At(n),i=1<<l;i&t|e[l]&t&&(e[l]|=t),n&=~i}}function ld(e,t){var n=t&-t;return n=(n&42)!==0?1:pu(n),(n&(e.suspendedLanes|t))!==0?0:n}function pu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function mu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function id(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:X1(e.type))}function rd(e,t){var n=K.p;try{return K.p=e,t()}finally{K.p=n}}var Hn=Math.random().toString(36).slice(2),ot="__reactFiber$"+Hn,xt="__reactProps$"+Hn,Ga="__reactContainer$"+Hn,gu="__reactEvents$"+Hn,E2="__reactListeners$"+Hn,C2="__reactHandles$"+Hn,od="__reactResources$"+Hn,Fl="__reactMarker$"+Hn;function xu(e){delete e[ot],delete e[xt],delete e[gu],delete e[E2],delete e[C2]}function qa(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ga]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=M1(e);e!==null;){if(n=e[ot])return n;e=M1(e)}return t}e=n,n=e.parentNode}return null}function Xa(e){if(e=e[ot]||e[Ga]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Wl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Va(e){var t=e[od];return t||(t=e[od]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function at(e){e[Fl]=!0}var ud=new Set,cd={};function va(e,t){Qa(e,t),Qa(e+"Capture",t)}function Qa(e,t){for(cd[e]=t,e=0;e<t.length;e++)ud.add(t[e])}var z2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sd={},fd={};function T2(e){return su.call(fd,e)?!0:su.call(sd,e)?!1:z2.test(e)?fd[e]=!0:(sd[e]=!0,!1)}function rr(e,t,n){if(T2(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function or(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function fn(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function Ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function M2(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,u=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(h){n=""+h,u.call(this,h)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(h){n=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yu(e){if(!e._valueTracker){var t=dd(e)?"checked":"value";e._valueTracker=M2(e,t,""+e[t])}}function hd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=dd(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function ur(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var A2=/[\n"\\]/g;function Ht(e){return e.replace(A2,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function vu(e,t,n,l,i,u,h,g){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ut(t)):e.value!==""+Ut(t)&&(e.value=""+Ut(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?bu(e,h,Ut(t)):n!=null?bu(e,h,Ut(n)):l!=null&&e.removeAttribute("value"),i==null&&u!=null&&(e.defaultChecked=!!u),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Ut(g):e.removeAttribute("name")}function pd(e,t,n,l,i,u,h,g){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){yu(e);return}n=n!=null?""+Ut(n):"",t=t!=null?""+Ut(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=g?e.checked:!!l,e.defaultChecked=!!l,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),yu(e)}function bu(e,t,n){t==="number"&&ur(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Za(e,t,n,l){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function md(e,t,n){if(t!=null&&(t=""+Ut(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ut(n):""}function gd(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(o(92));if(Le(l)){if(1<l.length)throw Error(o(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Ut(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),yu(e)}function Ka(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var R2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xd(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||R2.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function yd(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var i in t)l=t[i],t.hasOwnProperty(i)&&n[i]!==l&&xd(e,i,l)}else for(var u in t)t.hasOwnProperty(u)&&xd(e,u,t[u])}function Su(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var O2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),N2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cr(e){return N2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function dn(){}var wu=null;function ju(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ja=null,Fa=null;function vd(e){var t=Xa(e);if(t&&(e=t.stateNode)){var n=e[xt]||null;e:switch(e=t.stateNode,t.type){case"input":if(vu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ht(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var i=l[xt]||null;if(!i)throw Error(o(90));vu(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&hd(l)}break e;case"textarea":md(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Za(e,!!n.multiple,t,!1)}}}var Eu=!1;function bd(e,t,n){if(Eu)return e(t,n);Eu=!0;try{var l=e(t);return l}finally{if(Eu=!1,(Ja!==null||Fa!==null)&&(Fr(),Ja&&(t=Ja,e=Fa,Fa=Ja=null,vd(t),e)))for(t=0;t<e.length;t++)vd(e[t])}}function Il(e,t){var n=e.stateNode;if(n===null)return null;var l=n[xt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cu=!1;if(hn)try{var Pl={};Object.defineProperty(Pl,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",Pl,Pl),window.removeEventListener("test",Pl,Pl)}catch{Cu=!1}var Yn=null,zu=null,sr=null;function Sd(){if(sr)return sr;var e,t=zu,n=t.length,l,i="value"in Yn?Yn.value:Yn.textContent,u=i.length;for(e=0;e<n&&t[e]===i[e];e++);var h=n-e;for(l=1;l<=h&&t[n-l]===i[u-l];l++);return sr=i.slice(e,1<l?1-l:void 0)}function fr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function dr(){return!0}function wd(){return!1}function yt(e){function t(n,l,i,u,h){this._reactName=n,this._targetInst=i,this.type=l,this.nativeEvent=u,this.target=h,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(u):u[g]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?dr:wd,this.isPropagationStopped=wd,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dr)},persist:function(){},isPersistent:dr}),t}var ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hr=yt(ba),ei=w({},ba,{view:0,detail:0}),_2=yt(ei),Tu,Mu,ti,pr=w({},ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ti&&(ti&&e.type==="mousemove"?(Tu=e.screenX-ti.screenX,Mu=e.screenY-ti.screenY):Mu=Tu=0,ti=e),Tu)},movementY:function(e){return"movementY"in e?e.movementY:Mu}}),jd=yt(pr),D2=w({},pr,{dataTransfer:0}),$2=yt(D2),k2=w({},ei,{relatedTarget:0}),Au=yt(k2),B2=w({},ba,{animationName:0,elapsedTime:0,pseudoElement:0}),L2=yt(B2),U2=w({},ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),H2=yt(U2),Y2=w({},ba,{data:0}),Ed=yt(Y2),G2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function V2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=X2[e])?!!t[e]:!1}function Ru(){return V2}var Q2=w({},ei,{key:function(e){if(e.key){var t=G2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?q2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(e){return e.type==="keypress"?fr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Z2=yt(Q2),K2=w({},pr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cd=yt(K2),J2=w({},ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),F2=yt(J2),W2=w({},ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),I2=yt(W2),P2=w({},pr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ex=yt(P2),tx=w({},ba,{newState:0,oldState:0}),nx=yt(tx),ax=[9,13,27,32],Ou=hn&&"CompositionEvent"in window,ni=null;hn&&"documentMode"in document&&(ni=document.documentMode);var lx=hn&&"TextEvent"in window&&!ni,zd=hn&&(!Ou||ni&&8<ni&&11>=ni),Td=" ",Md=!1;function Ad(e,t){switch(e){case"keyup":return ax.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wa=!1;function ix(e,t){switch(e){case"compositionend":return Rd(t);case"keypress":return t.which!==32?null:(Md=!0,Td);case"textInput":return e=t.data,e===Td&&Md?null:e;default:return null}}function rx(e,t){if(Wa)return e==="compositionend"||!Ou&&Ad(e,t)?(e=Sd(),sr=zu=Yn=null,Wa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zd&&t.locale!=="ko"?null:t.data;default:return null}}var ox={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Od(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ox[e.type]:t==="textarea"}function Nd(e,t,n,l){Ja?Fa?Fa.push(l):Fa=[l]:Ja=l,t=ao(t,"onChange"),0<t.length&&(n=new hr("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var ai=null,li=null;function ux(e){p1(e,0)}function mr(e){var t=Wl(e);if(hd(t))return e}function _d(e,t){if(e==="change")return t}var Dd=!1;if(hn){var Nu;if(hn){var _u="oninput"in document;if(!_u){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),_u=typeof $d.oninput=="function"}Nu=_u}else Nu=!1;Dd=Nu&&(!document.documentMode||9<document.documentMode)}function kd(){ai&&(ai.detachEvent("onpropertychange",Bd),li=ai=null)}function Bd(e){if(e.propertyName==="value"&&mr(li)){var t=[];Nd(t,li,e,ju(e)),bd(ux,t)}}function cx(e,t,n){e==="focusin"?(kd(),ai=t,li=n,ai.attachEvent("onpropertychange",Bd)):e==="focusout"&&kd()}function sx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mr(li)}function fx(e,t){if(e==="click")return mr(t)}function dx(e,t){if(e==="input"||e==="change")return mr(t)}function hx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:hx;function ii(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var i=n[l];if(!su.call(t,i)||!Rt(e[i],t[i]))return!1}return!0}function Ld(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ud(e,t){var n=Ld(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ld(n)}}function Hd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ur(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ur(e.document)}return t}function Du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var px=hn&&"documentMode"in document&&11>=document.documentMode,Ia=null,$u=null,ri=null,ku=!1;function Gd(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ku||Ia==null||Ia!==ur(l)||(l=Ia,"selectionStart"in l&&Du(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ri&&ii(ri,l)||(ri=l,l=ao($u,"onSelect"),0<l.length&&(t=new hr("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Ia)))}function Sa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pa={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionrun:Sa("Transition","TransitionRun"),transitionstart:Sa("Transition","TransitionStart"),transitioncancel:Sa("Transition","TransitionCancel"),transitionend:Sa("Transition","TransitionEnd")},Bu={},qd={};hn&&(qd=document.createElement("div").style,"AnimationEvent"in window||(delete Pa.animationend.animation,delete Pa.animationiteration.animation,delete Pa.animationstart.animation),"TransitionEvent"in window||delete Pa.transitionend.transition);function wa(e){if(Bu[e])return Bu[e];if(!Pa[e])return e;var t=Pa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qd)return Bu[e]=t[n];return e}var Xd=wa("animationend"),Vd=wa("animationiteration"),Qd=wa("animationstart"),mx=wa("transitionrun"),gx=wa("transitionstart"),xx=wa("transitioncancel"),Zd=wa("transitionend"),Kd=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function Wt(e,t){Kd.set(e,t),va(t,[e])}var gr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Yt=[],el=0,Uu=0;function xr(){for(var e=el,t=Uu=el=0;t<e;){var n=Yt[t];Yt[t++]=null;var l=Yt[t];Yt[t++]=null;var i=Yt[t];Yt[t++]=null;var u=Yt[t];if(Yt[t++]=null,l!==null&&i!==null){var h=l.pending;h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i}u!==0&&Jd(n,i,u)}}function yr(e,t,n,l){Yt[el++]=e,Yt[el++]=t,Yt[el++]=n,Yt[el++]=l,Uu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Hu(e,t,n,l){return yr(e,t,n,l),vr(e)}function ja(e,t){return yr(e,null,null,t),vr(e)}function Jd(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var i=!1,u=e.return;u!==null;)u.childLanes|=n,l=u.alternate,l!==null&&(l.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(i=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,i&&t!==null&&(i=31-At(n),e=u.hiddenUpdates,l=e[i],l===null?e[i]=[t]:l.push(t),t.lane=n|536870912),u):null}function vr(e){if(50<Mi)throw Mi=0,Jc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var tl={};function yx(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,l){return new yx(e,t,n,l)}function Yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pn(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Fd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function br(e,t,n,l,i,u){var h=0;if(l=e,typeof e=="function")Yu(e)&&(h=1);else if(typeof e=="string")h=jy(e,n,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ue:return e=Ot(31,n,t,i),e.elementType=ue,e.lanes=u,e;case B:return Ea(n.children,i,u,t);case D:h=8,i|=24;break;case L:return e=Ot(12,n,t,i|2),e.elementType=L,e.lanes=u,e;case Z:return e=Ot(13,n,t,i),e.elementType=Z,e.lanes=u,e;case U:return e=Ot(19,n,t,i),e.elementType=U,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:h=10;break e;case H:h=9;break e;case X:h=11;break e;case Q:h=14;break e;case P:h=16,l=null;break e}h=29,n=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=Ot(h,n,t,i),t.elementType=e,t.type=l,t.lanes=u,t}function Ea(e,t,n,l){return e=Ot(7,e,l,t),e.lanes=n,e}function Gu(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function Wd(e){var t=Ot(18,null,null,0);return t.stateNode=e,t}function qu(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Id=new WeakMap;function Gt(e,t){if(typeof e=="object"&&e!==null){var n=Id.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Wf(t)},Id.set(e,t),t)}return{value:e,source:t,stack:Wf(t)}}var nl=[],al=0,Sr=null,oi=0,qt=[],Xt=0,Gn=null,nn=1,an="";function mn(e,t){nl[al++]=oi,nl[al++]=Sr,Sr=e,oi=t}function Pd(e,t,n){qt[Xt++]=nn,qt[Xt++]=an,qt[Xt++]=Gn,Gn=e;var l=nn;e=an;var i=32-At(l)-1;l&=~(1<<i),n+=1;var u=32-At(t)+i;if(30<u){var h=i-i%5;u=(l&(1<<h)-1).toString(32),l>>=h,i-=h,nn=1<<32-At(t)+i|n<<i|l,an=u+e}else nn=1<<u|n<<i|l,an=e}function Xu(e){e.return!==null&&(mn(e,1),Pd(e,1,0))}function Vu(e){for(;e===Sr;)Sr=nl[--al],nl[al]=null,oi=nl[--al],nl[al]=null;for(;e===Gn;)Gn=qt[--Xt],qt[Xt]=null,an=qt[--Xt],qt[Xt]=null,nn=qt[--Xt],qt[Xt]=null}function e0(e,t){qt[Xt++]=nn,qt[Xt++]=an,qt[Xt++]=Gn,nn=t.id,an=t.overflow,Gn=e}var ut=null,_e=null,ye=!1,qn=null,Vt=!1,Qu=Error(o(519));function Xn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ui(Gt(t,e)),Qu}function t0(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[ot]=e,t[xt]=l,n){case"dialog":me("cancel",t),me("close",t);break;case"iframe":case"object":case"embed":me("load",t);break;case"video":case"audio":for(n=0;n<Ri.length;n++)me(Ri[n],t);break;case"source":me("error",t);break;case"img":case"image":case"link":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"input":me("invalid",t),pd(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":me("invalid",t);break;case"textarea":me("invalid",t),gd(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||y1(t.textContent,n)?(l.popover!=null&&(me("beforetoggle",t),me("toggle",t)),l.onScroll!=null&&me("scroll",t),l.onScrollEnd!=null&&me("scrollend",t),l.onClick!=null&&(t.onclick=dn),t=!0):t=!1,t||Xn(e,!0)}function n0(e){for(ut=e.return;ut;)switch(ut.tag){case 5:case 31:case 13:Vt=!1;return;case 27:case 3:Vt=!0;return;default:ut=ut.return}}function ll(e){if(e!==ut)return!1;if(!ye)return n0(e),ye=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ss(e.type,e.memoizedProps)),n=!n),n&&_e&&Xn(e),n0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));_e=T1(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));_e=T1(e)}else t===27?(t=_e,la(e.type)?(e=ms,ms=null,_e=e):_e=t):_e=ut?Zt(e.stateNode.nextSibling):null;return!0}function Ca(){_e=ut=null,ye=!1}function Zu(){var e=qn;return e!==null&&(wt===null?wt=e:wt.push.apply(wt,e),qn=null),e}function ui(e){qn===null?qn=[e]:qn.push(e)}var Ku=E(null),za=null,gn=null;function Vn(e,t,n){F(Ku,t._currentValue),t._currentValue=n}function xn(e){e._currentValue=Ku.current,G(Ku)}function Ju(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Fu(e,t,n,l){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var u=i.dependencies;if(u!==null){var h=i.child;u=u.firstContext;e:for(;u!==null;){var g=u;u=i;for(var j=0;j<t.length;j++)if(g.context===t[j]){u.lanes|=n,g=u.alternate,g!==null&&(g.lanes|=n),Ju(u.return,n,e),l||(h=null);break e}u=g.next}}else if(i.tag===18){if(h=i.return,h===null)throw Error(o(341));h.lanes|=n,u=h.alternate,u!==null&&(u.lanes|=n),Ju(h,n,e),h=null}else h=i.child;if(h!==null)h.return=i;else for(h=i;h!==null;){if(h===e){h=null;break}if(i=h.sibling,i!==null){i.return=h.return,h=i;break}h=h.return}i=h}}function il(e,t,n,l){e=null;for(var i=t,u=!1;i!==null;){if(!u){if((i.flags&524288)!==0)u=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var h=i.alternate;if(h===null)throw Error(o(387));if(h=h.memoizedProps,h!==null){var g=i.type;Rt(i.pendingProps.value,h.value)||(e!==null?e.push(g):e=[g])}}else if(i===he.current){if(h=i.alternate,h===null)throw Error(o(387));h.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push($i):e=[$i])}i=i.return}e!==null&&Fu(t,e,n,l),t.flags|=262144}function wr(e){for(e=e.firstContext;e!==null;){if(!Rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ta(e){za=e,gn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ct(e){return a0(za,e)}function jr(e,t){return za===null&&Ta(e),a0(e,t)}function a0(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},gn===null){if(e===null)throw Error(o(308));gn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else gn=gn.next=t;return n}var vx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},bx=a.unstable_scheduleCallback,Sx=a.unstable_NormalPriority,Ke={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wu(){return{controller:new vx,data:new Map,refCount:0}}function ci(e){e.refCount--,e.refCount===0&&bx(Sx,function(){e.controller.abort()})}var si=null,Iu=0,rl=0,ol=null;function wx(e,t){if(si===null){var n=si=[];Iu=0,rl=ts(),ol={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Iu++,t.then(l0,l0),t}function l0(){if(--Iu===0&&si!==null){ol!==null&&(ol.status="fulfilled");var e=si;si=null,rl=0,ol=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function jx(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(l.status="rejected",l.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),l}var i0=k.S;k.S=function(e,t){Gh=Tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&wx(e,t),i0!==null&&i0(e,t)};var Ma=E(null);function Pu(){var e=Ma.current;return e!==null?e:Oe.pooledCache}function Er(e,t){t===null?F(Ma,Ma.current):F(Ma,t.pool)}function r0(){var e=Pu();return e===null?null:{parent:Ke._currentValue,pool:e}}var ul=Error(o(460)),ec=Error(o(474)),Cr=Error(o(542)),zr={then:function(){}};function o0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function u0(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(dn,dn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,s0(e),e;default:if(typeof t.status=="string")t.then(dn,dn);else{if(e=Oe,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=l}},function(l){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,s0(e),e}throw Ra=t,ul}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ra=n,ul):n}}var Ra=null;function c0(){if(Ra===null)throw Error(o(459));var e=Ra;return Ra=null,e}function s0(e){if(e===ul||e===Cr)throw Error(o(483))}var cl=null,fi=0;function Tr(e){var t=fi;return fi+=1,cl===null&&(cl=[]),u0(cl,e,t)}function di(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Mr(e,t){throw t.$$typeof===z?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function f0(e){function t(T,C){if(e){var M=T.deletions;M===null?(T.deletions=[C],T.flags|=16):M.push(C)}}function n(T,C){if(!e)return null;for(;C!==null;)t(T,C),C=C.sibling;return null}function l(T){for(var C=new Map;T!==null;)T.key!==null?C.set(T.key,T):C.set(T.index,T),T=T.sibling;return C}function i(T,C){return T=pn(T,C),T.index=0,T.sibling=null,T}function u(T,C,M){return T.index=M,e?(M=T.alternate,M!==null?(M=M.index,M<C?(T.flags|=67108866,C):M):(T.flags|=67108866,C)):(T.flags|=1048576,C)}function h(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function g(T,C,M,q){return C===null||C.tag!==6?(C=Gu(M,T.mode,q),C.return=T,C):(C=i(C,M),C.return=T,C)}function j(T,C,M,q){var le=M.type;return le===B?Y(T,C,M.props.children,q,M.key):C!==null&&(C.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===P&&Aa(le)===C.type)?(C=i(C,M.props),di(C,M),C.return=T,C):(C=br(M.type,M.key,M.props,null,T.mode,q),di(C,M),C.return=T,C)}function A(T,C,M,q){return C===null||C.tag!==4||C.stateNode.containerInfo!==M.containerInfo||C.stateNode.implementation!==M.implementation?(C=qu(M,T.mode,q),C.return=T,C):(C=i(C,M.children||[]),C.return=T,C)}function Y(T,C,M,q,le){return C===null||C.tag!==7?(C=Ea(M,T.mode,q,le),C.return=T,C):(C=i(C,M),C.return=T,C)}function V(T,C,M){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=Gu(""+C,T.mode,M),C.return=T,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case _:return M=br(C.type,C.key,C.props,null,T.mode,M),di(M,C),M.return=T,M;case R:return C=qu(C,T.mode,M),C.return=T,C;case P:return C=Aa(C),V(T,C,M)}if(Le(C)||Ge(C))return C=Ea(C,T.mode,M,null),C.return=T,C;if(typeof C.then=="function")return V(T,Tr(C),M);if(C.$$typeof===N)return V(T,jr(T,C),M);Mr(T,C)}return null}function O(T,C,M,q){var le=C!==null?C.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return le!==null?null:g(T,C,""+M,q);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case _:return M.key===le?j(T,C,M,q):null;case R:return M.key===le?A(T,C,M,q):null;case P:return M=Aa(M),O(T,C,M,q)}if(Le(M)||Ge(M))return le!==null?null:Y(T,C,M,q,null);if(typeof M.then=="function")return O(T,C,Tr(M),q);if(M.$$typeof===N)return O(T,C,jr(T,M),q);Mr(T,M)}return null}function $(T,C,M,q,le){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return T=T.get(M)||null,g(C,T,""+q,le);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case _:return T=T.get(q.key===null?M:q.key)||null,j(C,T,q,le);case R:return T=T.get(q.key===null?M:q.key)||null,A(C,T,q,le);case P:return q=Aa(q),$(T,C,M,q,le)}if(Le(q)||Ge(q))return T=T.get(M)||null,Y(C,T,q,le,null);if(typeof q.then=="function")return $(T,C,M,Tr(q),le);if(q.$$typeof===N)return $(T,C,M,jr(C,q),le);Mr(C,q)}return null}function te(T,C,M,q){for(var le=null,Se=null,ne=C,se=C=0,xe=null;ne!==null&&se<M.length;se++){ne.index>se?(xe=ne,ne=null):xe=ne.sibling;var we=O(T,ne,M[se],q);if(we===null){ne===null&&(ne=xe);break}e&&ne&&we.alternate===null&&t(T,ne),C=u(we,C,se),Se===null?le=we:Se.sibling=we,Se=we,ne=xe}if(se===M.length)return n(T,ne),ye&&mn(T,se),le;if(ne===null){for(;se<M.length;se++)ne=V(T,M[se],q),ne!==null&&(C=u(ne,C,se),Se===null?le=ne:Se.sibling=ne,Se=ne);return ye&&mn(T,se),le}for(ne=l(ne);se<M.length;se++)xe=$(ne,T,se,M[se],q),xe!==null&&(e&&xe.alternate!==null&&ne.delete(xe.key===null?se:xe.key),C=u(xe,C,se),Se===null?le=xe:Se.sibling=xe,Se=xe);return e&&ne.forEach(function(ca){return t(T,ca)}),ye&&mn(T,se),le}function ie(T,C,M,q){if(M==null)throw Error(o(151));for(var le=null,Se=null,ne=C,se=C=0,xe=null,we=M.next();ne!==null&&!we.done;se++,we=M.next()){ne.index>se?(xe=ne,ne=null):xe=ne.sibling;var ca=O(T,ne,we.value,q);if(ca===null){ne===null&&(ne=xe);break}e&&ne&&ca.alternate===null&&t(T,ne),C=u(ca,C,se),Se===null?le=ca:Se.sibling=ca,Se=ca,ne=xe}if(we.done)return n(T,ne),ye&&mn(T,se),le;if(ne===null){for(;!we.done;se++,we=M.next())we=V(T,we.value,q),we!==null&&(C=u(we,C,se),Se===null?le=we:Se.sibling=we,Se=we);return ye&&mn(T,se),le}for(ne=l(ne);!we.done;se++,we=M.next())we=$(ne,T,se,we.value,q),we!==null&&(e&&we.alternate!==null&&ne.delete(we.key===null?se:we.key),C=u(we,C,se),Se===null?le=we:Se.sibling=we,Se=we);return e&&ne.forEach(function(Dy){return t(T,Dy)}),ye&&mn(T,se),le}function Re(T,C,M,q){if(typeof M=="object"&&M!==null&&M.type===B&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case _:e:{for(var le=M.key;C!==null;){if(C.key===le){if(le=M.type,le===B){if(C.tag===7){n(T,C.sibling),q=i(C,M.props.children),q.return=T,T=q;break e}}else if(C.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===P&&Aa(le)===C.type){n(T,C.sibling),q=i(C,M.props),di(q,M),q.return=T,T=q;break e}n(T,C);break}else t(T,C);C=C.sibling}M.type===B?(q=Ea(M.props.children,T.mode,q,M.key),q.return=T,T=q):(q=br(M.type,M.key,M.props,null,T.mode,q),di(q,M),q.return=T,T=q)}return h(T);case R:e:{for(le=M.key;C!==null;){if(C.key===le)if(C.tag===4&&C.stateNode.containerInfo===M.containerInfo&&C.stateNode.implementation===M.implementation){n(T,C.sibling),q=i(C,M.children||[]),q.return=T,T=q;break e}else{n(T,C);break}else t(T,C);C=C.sibling}q=qu(M,T.mode,q),q.return=T,T=q}return h(T);case P:return M=Aa(M),Re(T,C,M,q)}if(Le(M))return te(T,C,M,q);if(Ge(M)){if(le=Ge(M),typeof le!="function")throw Error(o(150));return M=le.call(M),ie(T,C,M,q)}if(typeof M.then=="function")return Re(T,C,Tr(M),q);if(M.$$typeof===N)return Re(T,C,jr(T,M),q);Mr(T,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,C!==null&&C.tag===6?(n(T,C.sibling),q=i(C,M),q.return=T,T=q):(n(T,C),q=Gu(M,T.mode,q),q.return=T,T=q),h(T)):n(T,C)}return function(T,C,M,q){try{fi=0;var le=Re(T,C,M,q);return cl=null,le}catch(ne){if(ne===ul||ne===Cr)throw ne;var Se=Ot(29,ne,null,T.mode);return Se.lanes=q,Se.return=T,Se}finally{}}}var Oa=f0(!0),d0=f0(!1),Qn=!1;function tc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Zn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Kn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(je&2)!==0){var i=l.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t,t=vr(e),Jd(e,null,n),t}return yr(e,l,t,n),vr(e)}function hi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,ad(e,n)}}function ac(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var i=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?i=u=h:u=u.next=h,n=n.next}while(n!==null);u===null?i=u=t:u=u.next=t}else i=u=t;n={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var lc=!1;function pi(){if(lc){var e=ol;if(e!==null)throw e}}function mi(e,t,n,l){lc=!1;var i=e.updateQueue;Qn=!1;var u=i.firstBaseUpdate,h=i.lastBaseUpdate,g=i.shared.pending;if(g!==null){i.shared.pending=null;var j=g,A=j.next;j.next=null,h===null?u=A:h.next=A,h=j;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,g=Y.lastBaseUpdate,g!==h&&(g===null?Y.firstBaseUpdate=A:g.next=A,Y.lastBaseUpdate=j))}if(u!==null){var V=i.baseState;h=0,Y=A=j=null,g=u;do{var O=g.lane&-536870913,$=O!==g.lane;if($?(ge&O)===O:(l&O)===O){O!==0&&O===rl&&(lc=!0),Y!==null&&(Y=Y.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var te=e,ie=g;O=t;var Re=n;switch(ie.tag){case 1:if(te=ie.payload,typeof te=="function"){V=te.call(Re,V,O);break e}V=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=ie.payload,O=typeof te=="function"?te.call(Re,V,O):te,O==null)break e;V=w({},V,O);break e;case 2:Qn=!0}}O=g.callback,O!==null&&(e.flags|=64,$&&(e.flags|=8192),$=i.callbacks,$===null?i.callbacks=[O]:$.push(O))}else $={lane:O,tag:g.tag,payload:g.payload,callback:g.callback,next:null},Y===null?(A=Y=$,j=V):Y=Y.next=$,h|=O;if(g=g.next,g===null){if(g=i.shared.pending,g===null)break;$=g,g=$.next,$.next=null,i.lastBaseUpdate=$,i.shared.pending=null}}while(!0);Y===null&&(j=V),i.baseState=j,i.firstBaseUpdate=A,i.lastBaseUpdate=Y,u===null&&(i.shared.lanes=0),Pn|=h,e.lanes=h,e.memoizedState=V}}function h0(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function p0(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)h0(n[e],t)}var sl=E(null),Ar=E(0);function m0(e,t){e=zn,F(Ar,e),F(sl,t),zn=e|t.baseLanes}function ic(){F(Ar,zn),F(sl,sl.current)}function rc(){zn=Ar.current,G(sl),G(Ar)}var Nt=E(null),Qt=null;function Jn(e){var t=e.alternate;F(Qe,Qe.current&1),F(Nt,e),Qt===null&&(t===null||sl.current!==null||t.memoizedState!==null)&&(Qt=e)}function oc(e){F(Qe,Qe.current),F(Nt,e),Qt===null&&(Qt=e)}function g0(e){e.tag===22?(F(Qe,Qe.current),F(Nt,e),Qt===null&&(Qt=e)):Fn()}function Fn(){F(Qe,Qe.current),F(Nt,Nt.current)}function _t(e){G(Nt),Qt===e&&(Qt=null),G(Qe)}var Qe=E(0);function Rr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||hs(n)||ps(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yn=0,ce=null,Me=null,Je=null,Or=!1,fl=!1,Na=!1,Nr=0,gi=0,dl=null,Ex=0;function qe(){throw Error(o(321))}function uc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function cc(e,t,n,l,i,u){return yn=u,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?P0:Ec,Na=!1,u=n(l,i),Na=!1,fl&&(u=y0(t,n,l,i)),x0(e),u}function x0(e){k.H=vi;var t=Me!==null&&Me.next!==null;if(yn=0,Je=Me=ce=null,Or=!1,gi=0,dl=null,t)throw Error(o(300));e===null||Fe||(e=e.dependencies,e!==null&&wr(e)&&(Fe=!0))}function y0(e,t,n,l){ce=e;var i=0;do{if(fl&&(dl=null),gi=0,fl=!1,25<=i)throw Error(o(301));if(i+=1,Je=Me=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}k.H=eh,u=t(n,l)}while(fl);return u}function Cx(){var e=k.H,t=e.useState()[0];return t=typeof t.then=="function"?xi(t):t,e=e.useState()[0],(Me!==null?Me.memoizedState:null)!==e&&(ce.flags|=1024),t}function sc(){var e=Nr!==0;return Nr=0,e}function fc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function dc(e){if(Or){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Or=!1}yn=0,Je=Me=ce=null,fl=!1,gi=Nr=0,dl=null}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?ce.memoizedState=Je=e:Je=Je.next=e,Je}function Ze(){if(Me===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Je===null?ce.memoizedState:Je.next;if(t!==null)Je=t,Me=e;else{if(e===null)throw ce.alternate===null?Error(o(467)):Error(o(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Je===null?ce.memoizedState=Je=e:Je=Je.next=e}return Je}function _r(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xi(e){var t=gi;return gi+=1,dl===null&&(dl=[]),e=u0(dl,e,t),t=ce,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?P0:Ec),e}function Dr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xi(e);if(e.$$typeof===N)return ct(e)}throw Error(o(438,String(e)))}function hc(e){var t=null,n=ce.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=ce.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=_r(),ce.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=Ce;return t.index++,n}function vn(e,t){return typeof t=="function"?t(e):t}function $r(e){var t=Ze();return pc(t,Me,e)}function pc(e,t,n){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=n;var i=e.baseQueue,u=l.pending;if(u!==null){if(i!==null){var h=i.next;i.next=u.next,u.next=h}t.baseQueue=i=u,l.pending=null}if(u=e.baseState,i===null)e.memoizedState=u;else{t=i.next;var g=h=null,j=null,A=t,Y=!1;do{var V=A.lane&-536870913;if(V!==A.lane?(ge&V)===V:(yn&V)===V){var O=A.revertLane;if(O===0)j!==null&&(j=j.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),V===rl&&(Y=!0);else if((yn&O)===O){A=A.next,O===rl&&(Y=!0);continue}else V={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},j===null?(g=j=V,h=u):j=j.next=V,ce.lanes|=O,Pn|=O;V=A.action,Na&&n(u,V),u=A.hasEagerState?A.eagerState:n(u,V)}else O={lane:V,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},j===null?(g=j=O,h=u):j=j.next=O,ce.lanes|=V,Pn|=V;A=A.next}while(A!==null&&A!==t);if(j===null?h=u:j.next=g,!Rt(u,e.memoizedState)&&(Fe=!0,Y&&(n=ol,n!==null)))throw n;e.memoizedState=u,e.baseState=h,e.baseQueue=j,l.lastRenderedState=u}return i===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function mc(e){var t=Ze(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var l=n.dispatch,i=n.pending,u=t.memoizedState;if(i!==null){n.pending=null;var h=i=i.next;do u=e(u,h.action),h=h.next;while(h!==i);Rt(u,t.memoizedState)||(Fe=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,l]}function v0(e,t,n){var l=ce,i=Ze(),u=ye;if(u){if(n===void 0)throw Error(o(407));n=n()}else n=t();var h=!Rt((Me||i).memoizedState,n);if(h&&(i.memoizedState=n,Fe=!0),i=i.queue,yc(w0.bind(null,l,i,e),[e]),i.getSnapshot!==t||h||Je!==null&&Je.memoizedState.tag&1){if(l.flags|=2048,hl(9,{destroy:void 0},S0.bind(null,l,i,n,t),null),Oe===null)throw Error(o(349));u||(yn&127)!==0||b0(l,t,n)}return n}function b0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t=_r(),ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function S0(e,t,n,l){t.value=n,t.getSnapshot=l,j0(t)&&E0(e)}function w0(e,t,n){return n(function(){j0(t)&&E0(e)})}function j0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function E0(e){var t=ja(e,2);t!==null&&jt(t,e,2)}function gc(e){var t=gt();if(typeof e=="function"){var n=e;if(e=n(),Na){Un(!0);try{n()}finally{Un(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:e},t}function C0(e,t,n,l){return e.baseState=n,pc(e,Me,typeof l=="function"?l:vn)}function zx(e,t,n,l,i){if(Lr(e))throw Error(o(485));if(e=t.action,e!==null){var u={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){u.listeners.push(h)}};k.T!==null?n(!0):u.isTransition=!1,l(u),n=t.pending,n===null?(u.next=t.pending=u,z0(t,u)):(u.next=n.next,t.pending=n.next=u)}}function z0(e,t){var n=t.action,l=t.payload,i=e.state;if(t.isTransition){var u=k.T,h={};k.T=h;try{var g=n(i,l),j=k.S;j!==null&&j(h,g),T0(e,t,g)}catch(A){xc(e,t,A)}finally{u!==null&&h.types!==null&&(u.types=h.types),k.T=u}}else try{u=n(i,l),T0(e,t,u)}catch(A){xc(e,t,A)}}function T0(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){M0(e,t,l)},function(l){return xc(e,t,l)}):M0(e,t,n)}function M0(e,t,n){t.status="fulfilled",t.value=n,A0(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,z0(e,n)))}function xc(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,A0(t),t=t.next;while(t!==l)}e.action=null}function A0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function R0(e,t){return t}function O0(e,t){if(ye){var n=Oe.formState;if(n!==null){e:{var l=ce;if(ye){if(_e){t:{for(var i=_e,u=Vt;i.nodeType!==8;){if(!u){i=null;break t}if(i=Zt(i.nextSibling),i===null){i=null;break t}}u=i.data,i=u==="F!"||u==="F"?i:null}if(i){_e=Zt(i.nextSibling),l=i.data==="F!";break e}}Xn(l)}l=!1}l&&(t=n[0])}}return n=gt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:R0,lastRenderedState:t},n.queue=l,n=F0.bind(null,ce,l),l.dispatch=n,l=gc(!1),u=jc.bind(null,ce,!1,l.queue),l=gt(),i={state:t,dispatch:null,action:e,pending:null},l.queue=i,n=zx.bind(null,ce,i,u,n),i.dispatch=n,l.memoizedState=e,[t,n,!1]}function N0(e){var t=Ze();return _0(t,Me,e)}function _0(e,t,n){if(t=pc(e,t,R0)[0],e=$r(vn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=xi(t)}catch(h){throw h===ul?Cr:h}else l=t;t=Ze();var i=t.queue,u=i.dispatch;return n!==t.memoizedState&&(ce.flags|=2048,hl(9,{destroy:void 0},Tx.bind(null,i,n),null)),[l,u,e]}function Tx(e,t){e.action=t}function D0(e){var t=Ze(),n=Me;if(n!==null)return _0(t,n,e);Ze(),t=t.memoizedState,n=Ze();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function hl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=ce.updateQueue,t===null&&(t=_r(),ce.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function $0(){return Ze().memoizedState}function kr(e,t,n,l){var i=gt();ce.flags|=e,i.memoizedState=hl(1|t,{destroy:void 0},n,l===void 0?null:l)}function Br(e,t,n,l){var i=Ze();l=l===void 0?null:l;var u=i.memoizedState.inst;Me!==null&&l!==null&&uc(l,Me.memoizedState.deps)?i.memoizedState=hl(t,u,n,l):(ce.flags|=e,i.memoizedState=hl(1|t,u,n,l))}function k0(e,t){kr(8390656,8,e,t)}function yc(e,t){Br(2048,8,e,t)}function Mx(e){ce.flags|=4;var t=ce.updateQueue;if(t===null)t=_r(),ce.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function B0(e){var t=Ze().memoizedState;return Mx({ref:t,nextImpl:e}),function(){if((je&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function L0(e,t){return Br(4,2,e,t)}function U0(e,t){return Br(4,4,e,t)}function H0(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Y0(e,t,n){n=n!=null?n.concat([e]):null,Br(4,4,H0.bind(null,t,e),n)}function vc(){}function G0(e,t){var n=Ze();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&uc(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function q0(e,t){var n=Ze();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&uc(t,l[1]))return l[0];if(l=e(),Na){Un(!0);try{e()}finally{Un(!1)}}return n.memoizedState=[l,t],l}function bc(e,t,n){return n===void 0||(yn&1073741824)!==0&&(ge&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Xh(),ce.lanes|=e,Pn|=e,n)}function X0(e,t,n,l){return Rt(n,t)?n:sl.current!==null?(e=bc(e,n,l),Rt(e,t)||(Fe=!0),e):(yn&42)===0||(yn&1073741824)!==0&&(ge&261930)===0?(Fe=!0,e.memoizedState=n):(e=Xh(),ce.lanes|=e,Pn|=e,t)}function V0(e,t,n,l,i){var u=K.p;K.p=u!==0&&8>u?u:8;var h=k.T,g={};k.T=g,jc(e,!1,t,n);try{var j=i(),A=k.S;if(A!==null&&A(g,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var Y=jx(j,l);yi(e,t,Y,kt(e))}else yi(e,t,l,kt(e))}catch(V){yi(e,t,{then:function(){},status:"rejected",reason:V},kt())}finally{K.p=u,h!==null&&g.types!==null&&(h.types=g.types),k.T=h}}function Ax(){}function Sc(e,t,n,l){if(e.tag!==5)throw Error(o(476));var i=Q0(e).queue;V0(e,i,t,I,n===null?Ax:function(){return Z0(e),n(l)})}function Q0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:I},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Z0(e){var t=Q0(e);t.next===null&&(t=e.alternate.memoizedState),yi(e,t.next.queue,{},kt())}function wc(){return ct($i)}function K0(){return Ze().memoizedState}function J0(){return Ze().memoizedState}function Rx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=kt();e=Zn(n);var l=Kn(t,e,n);l!==null&&(jt(l,t,n),hi(l,t,n)),t={cache:Wu()},e.payload=t;return}t=t.return}}function Ox(e,t,n){var l=kt();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Lr(e)?W0(t,n):(n=Hu(e,t,n,l),n!==null&&(jt(n,e,l),I0(n,t,l)))}function F0(e,t,n){var l=kt();yi(e,t,n,l)}function yi(e,t,n,l){var i={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lr(e))W0(t,i);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var h=t.lastRenderedState,g=u(h,n);if(i.hasEagerState=!0,i.eagerState=g,Rt(g,h))return yr(e,t,i,0),Oe===null&&xr(),!1}catch{}finally{}if(n=Hu(e,t,i,l),n!==null)return jt(n,e,l),I0(n,t,l),!0}return!1}function jc(e,t,n,l){if(l={lane:2,revertLane:ts(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Lr(e)){if(t)throw Error(o(479))}else t=Hu(e,n,l,2),t!==null&&jt(t,e,2)}function Lr(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function W0(e,t){fl=Or=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function I0(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,ad(e,n)}}var vi={readContext:ct,use:Dr,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe,useHostTransitionStatus:qe,useFormState:qe,useActionState:qe,useOptimistic:qe,useMemoCache:qe,useCacheRefresh:qe};vi.useEffectEvent=qe;var P0={readContext:ct,use:Dr,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:k0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,kr(4194308,4,H0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return kr(4194308,4,e,t)},useInsertionEffect:function(e,t){kr(4,2,e,t)},useMemo:function(e,t){var n=gt();t=t===void 0?null:t;var l=e();if(Na){Un(!0);try{e()}finally{Un(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=gt();if(n!==void 0){var i=n(t);if(Na){Un(!0);try{n(t)}finally{Un(!1)}}}else i=t;return l.memoizedState=l.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=Ox.bind(null,ce,e),[l.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:function(e){e=gc(e);var t=e.queue,n=F0.bind(null,ce,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vc,useDeferredValue:function(e,t){var n=gt();return bc(n,e,t)},useTransition:function(){var e=gc(!1);return e=V0.bind(null,ce,e.queue,!0,!1),gt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=ce,i=gt();if(ye){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Oe===null)throw Error(o(349));(ge&127)!==0||b0(l,t,n)}i.memoizedState=n;var u={value:n,getSnapshot:t};return i.queue=u,k0(w0.bind(null,l,u,e),[e]),l.flags|=2048,hl(9,{destroy:void 0},S0.bind(null,l,u,n,t),null),n},useId:function(){var e=gt(),t=Oe.identifierPrefix;if(ye){var n=an,l=nn;n=(l&~(1<<32-At(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Nr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Ex++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:wc,useFormState:O0,useActionState:O0,useOptimistic:function(e){var t=gt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=jc.bind(null,ce,!0,n),n.dispatch=t,[e,t]},useMemoCache:hc,useCacheRefresh:function(){return gt().memoizedState=Rx.bind(null,ce)},useEffectEvent:function(e){var t=gt(),n={impl:e};return t.memoizedState=n,function(){if((je&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Ec={readContext:ct,use:Dr,useCallback:G0,useContext:ct,useEffect:yc,useImperativeHandle:Y0,useInsertionEffect:L0,useLayoutEffect:U0,useMemo:q0,useReducer:$r,useRef:$0,useState:function(){return $r(vn)},useDebugValue:vc,useDeferredValue:function(e,t){var n=Ze();return X0(n,Me.memoizedState,e,t)},useTransition:function(){var e=$r(vn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:xi(e),t]},useSyncExternalStore:v0,useId:K0,useHostTransitionStatus:wc,useFormState:N0,useActionState:N0,useOptimistic:function(e,t){var n=Ze();return C0(n,Me,e,t)},useMemoCache:hc,useCacheRefresh:J0};Ec.useEffectEvent=B0;var eh={readContext:ct,use:Dr,useCallback:G0,useContext:ct,useEffect:yc,useImperativeHandle:Y0,useInsertionEffect:L0,useLayoutEffect:U0,useMemo:q0,useReducer:mc,useRef:$0,useState:function(){return mc(vn)},useDebugValue:vc,useDeferredValue:function(e,t){var n=Ze();return Me===null?bc(n,e,t):X0(n,Me.memoizedState,e,t)},useTransition:function(){var e=mc(vn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:xi(e),t]},useSyncExternalStore:v0,useId:K0,useHostTransitionStatus:wc,useFormState:D0,useActionState:D0,useOptimistic:function(e,t){var n=Ze();return Me!==null?C0(n,Me,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:hc,useCacheRefresh:J0};eh.useEffectEvent=B0;function Cc(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zc={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=kt(),i=Zn(l);i.payload=t,n!=null&&(i.callback=n),t=Kn(e,i,l),t!==null&&(jt(t,e,l),hi(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=kt(),i=Zn(l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Kn(e,i,l),t!==null&&(jt(t,e,l),hi(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kt(),l=Zn(n);l.tag=2,t!=null&&(l.callback=t),t=Kn(e,l,n),t!==null&&(jt(t,e,n),hi(t,e,n))}};function th(e,t,n,l,i,u,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,u,h):t.prototype&&t.prototype.isPureReactComponent?!ii(n,l)||!ii(i,u):!0}function nh(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&zc.enqueueReplaceState(t,t.state,null)}function _a(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}function ah(e){gr(e)}function lh(e){console.error(e)}function ih(e){gr(e)}function Ur(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function rh(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Tc(e,t,n){return n=Zn(n),n.tag=3,n.payload={element:null},n.callback=function(){Ur(e,t)},n}function oh(e){return e=Zn(e),e.tag=3,e}function uh(e,t,n,l){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var u=l.value;e.payload=function(){return i(u)},e.callback=function(){rh(t,n,l)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){rh(t,n,l),typeof i!="function"&&(ea===null?ea=new Set([this]):ea.add(this));var g=l.stack;this.componentDidCatch(l.value,{componentStack:g!==null?g:""})})}function Nx(e,t,n,l,i){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&il(t,n,i,!0),n=Nt.current,n!==null){switch(n.tag){case 31:case 13:return Qt===null?Wr():n.alternate===null&&Xe===0&&(Xe=3),n.flags&=-257,n.flags|=65536,n.lanes=i,l===zr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),Ic(e,l,i)),!1;case 22:return n.flags|=65536,l===zr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),Ic(e,l,i)),!1}throw Error(o(435,n.tag))}return Ic(e,l,i),Wr(),!1}if(ye)return t=Nt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,l!==Qu&&(e=Error(o(422),{cause:l}),ui(Gt(e,n)))):(l!==Qu&&(t=Error(o(423),{cause:l}),ui(Gt(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,l=Gt(l,n),i=Tc(e.stateNode,l,i),ac(e,i),Xe!==4&&(Xe=2)),!1;var u=Error(o(520),{cause:l});if(u=Gt(u,n),Ti===null?Ti=[u]:Ti.push(u),Xe!==4&&(Xe=2),t===null)return!0;l=Gt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Tc(n.stateNode,l,e),ac(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ea===null||!ea.has(u))))return n.flags|=65536,i&=-i,n.lanes|=i,i=oh(i),uh(i,e,n,l),ac(n,i),!1}n=n.return}while(n!==null);return!1}var Mc=Error(o(461)),Fe=!1;function st(e,t,n,l){t.child=e===null?d0(t,null,n,l):Oa(t,e.child,n,l)}function ch(e,t,n,l,i){n=n.render;var u=t.ref;if("ref"in l){var h={};for(var g in l)g!=="ref"&&(h[g]=l[g])}else h=l;return Ta(t),l=cc(e,t,n,h,u,i),g=sc(),e!==null&&!Fe?(fc(e,t,i),bn(e,t,i)):(ye&&g&&Xu(t),t.flags|=1,st(e,t,l,i),t.child)}function sh(e,t,n,l,i){if(e===null){var u=n.type;return typeof u=="function"&&!Yu(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,fh(e,t,u,l,i)):(e=br(n.type,null,l,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!kc(e,i)){var h=u.memoizedProps;if(n=n.compare,n=n!==null?n:ii,n(h,l)&&e.ref===t.ref)return bn(e,t,i)}return t.flags|=1,e=pn(u,l),e.ref=t.ref,e.return=t,t.child=e}function fh(e,t,n,l,i){if(e!==null){var u=e.memoizedProps;if(ii(u,l)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=l=u,kc(e,i))(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,bn(e,t,i)}return Ac(e,t,n,l,i)}function dh(e,t,n,l){var i=l.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,e!==null){for(l=t.child=e.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~u}else l=0,t.child=null;return hh(e,t,u,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Er(t,u!==null?u.cachePool:null),u!==null?m0(t,u):ic(),g0(t);else return l=t.lanes=536870912,hh(e,t,u!==null?u.baseLanes|n:n,n,l)}else u!==null?(Er(t,u.cachePool),m0(t,u),Fn(),t.memoizedState=null):(e!==null&&Er(t,null),ic(),Fn());return st(e,t,i,n),t.child}function bi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function hh(e,t,n,l,i){var u=Pu();return u=u===null?null:{parent:Ke._currentValue,pool:u},t.memoizedState={baseLanes:n,cachePool:u},e!==null&&Er(t,null),ic(),g0(t),e!==null&&il(e,t,l,!0),t.childLanes=i,null}function Hr(e,t){return t=Gr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ph(e,t,n){return Oa(t,e.child,null,n),e=Hr(t,t.pendingProps),e.flags|=2,_t(t),t.memoizedState=null,e}function _x(e,t,n){var l=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ye){if(l.mode==="hidden")return e=Hr(t,l),t.lanes=536870912,bi(null,e);if(oc(t),(e=_e)?(e=z1(e,Vt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gn!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=Wd(e),n.return=t,t.child=n,ut=t,_e=null)):e=null,e===null)throw Xn(t);return t.lanes=536870912,null}return Hr(t,l)}var u=e.memoizedState;if(u!==null){var h=u.dehydrated;if(oc(t),i)if(t.flags&256)t.flags&=-257,t=ph(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Fe||il(e,t,n,!1),i=(n&e.childLanes)!==0,Fe||i){if(l=Oe,l!==null&&(h=ld(l,n),h!==0&&h!==u.retryLane))throw u.retryLane=h,ja(e,h),jt(l,e,h),Mc;Wr(),t=ph(e,t,n)}else e=u.treeContext,_e=Zt(h.nextSibling),ut=t,ye=!0,qn=null,Vt=!1,e!==null&&e0(t,e),t=Hr(t,l),t.flags|=4096;return t}return e=pn(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Yr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ac(e,t,n,l,i){return Ta(t),n=cc(e,t,n,l,void 0,i),l=sc(),e!==null&&!Fe?(fc(e,t,i),bn(e,t,i)):(ye&&l&&Xu(t),t.flags|=1,st(e,t,n,i),t.child)}function mh(e,t,n,l,i,u){return Ta(t),t.updateQueue=null,n=y0(t,l,n,i),x0(e),l=sc(),e!==null&&!Fe?(fc(e,t,u),bn(e,t,u)):(ye&&l&&Xu(t),t.flags|=1,st(e,t,n,u),t.child)}function gh(e,t,n,l,i){if(Ta(t),t.stateNode===null){var u=tl,h=n.contextType;typeof h=="object"&&h!==null&&(u=ct(h)),u=new n(l,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=zc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=l,u.state=t.memoizedState,u.refs={},tc(t),h=n.contextType,u.context=typeof h=="object"&&h!==null?ct(h):tl,u.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(Cc(t,n,h,l),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(h=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),h!==u.state&&zc.enqueueReplaceState(u,u.state,null),mi(t,l,u,i),pi(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){u=t.stateNode;var g=t.memoizedProps,j=_a(n,g);u.props=j;var A=u.context,Y=n.contextType;h=tl,typeof Y=="object"&&Y!==null&&(h=ct(Y));var V=n.getDerivedStateFromProps;Y=typeof V=="function"||typeof u.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,Y||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g||A!==h)&&nh(t,u,l,h),Qn=!1;var O=t.memoizedState;u.state=O,mi(t,l,u,i),pi(),A=t.memoizedState,g||O!==A||Qn?(typeof V=="function"&&(Cc(t,n,V,l),A=t.memoizedState),(j=Qn||th(t,n,j,l,O,A,h))?(Y||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=A),u.props=l,u.state=A,u.context=h,l=j):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{u=t.stateNode,nc(e,t),h=t.memoizedProps,Y=_a(n,h),u.props=Y,V=t.pendingProps,O=u.context,A=n.contextType,j=tl,typeof A=="object"&&A!==null&&(j=ct(A)),g=n.getDerivedStateFromProps,(A=typeof g=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==V||O!==j)&&nh(t,u,l,j),Qn=!1,O=t.memoizedState,u.state=O,mi(t,l,u,i),pi();var $=t.memoizedState;h!==V||O!==$||Qn||e!==null&&e.dependencies!==null&&wr(e.dependencies)?(typeof g=="function"&&(Cc(t,n,g,l),$=t.memoizedState),(Y=Qn||th(t,n,Y,l,O,$,j)||e!==null&&e.dependencies!==null&&wr(e.dependencies))?(A||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,$,j),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,$,j)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=$),u.props=l,u.state=$,u.context=j,l=Y):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),l=!1)}return u=l,Yr(e,t),l=(t.flags&128)!==0,u||l?(u=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&l?(t.child=Oa(t,e.child,null,i),t.child=Oa(t,null,n,i)):st(e,t,n,i),t.memoizedState=u.state,e=t.child):e=bn(e,t,i),e}function xh(e,t,n,l){return Ca(),t.flags|=256,st(e,t,n,l),t.child}var Rc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Oc(e){return{baseLanes:e,cachePool:r0()}}function Nc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=$t),e}function yh(e,t,n){var l=t.pendingProps,i=!1,u=(t.flags&128)!==0,h;if((h=u)||(h=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),h&&(i=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(ye){if(i?Jn(t):Fn(),(e=_e)?(e=z1(e,Vt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gn!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=Wd(e),n.return=t,t.child=n,ut=t,_e=null)):e=null,e===null)throw Xn(t);return ps(e)?t.lanes=32:t.lanes=536870912,null}var g=l.children;return l=l.fallback,i?(Fn(),i=t.mode,g=Gr({mode:"hidden",children:g},i),l=Ea(l,i,n,null),g.return=t,l.return=t,g.sibling=l,t.child=g,l=t.child,l.memoizedState=Oc(n),l.childLanes=Nc(e,h,n),t.memoizedState=Rc,bi(null,l)):(Jn(t),_c(t,g))}var j=e.memoizedState;if(j!==null&&(g=j.dehydrated,g!==null)){if(u)t.flags&256?(Jn(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState!==null?(Fn(),t.child=e.child,t.flags|=128,t=null):(Fn(),g=l.fallback,i=t.mode,l=Gr({mode:"visible",children:l.children},i),g=Ea(g,i,n,null),g.flags|=2,l.return=t,g.return=t,l.sibling=g,t.child=l,Oa(t,e.child,null,n),l=t.child,l.memoizedState=Oc(n),l.childLanes=Nc(e,h,n),t.memoizedState=Rc,t=bi(null,l));else if(Jn(t),ps(g)){if(h=g.nextSibling&&g.nextSibling.dataset,h)var A=h.dgst;h=A,l=Error(o(419)),l.stack="",l.digest=h,ui({value:l,source:null,stack:null}),t=Dc(e,t,n)}else if(Fe||il(e,t,n,!1),h=(n&e.childLanes)!==0,Fe||h){if(h=Oe,h!==null&&(l=ld(h,n),l!==0&&l!==j.retryLane))throw j.retryLane=l,ja(e,l),jt(h,e,l),Mc;hs(g)||Wr(),t=Dc(e,t,n)}else hs(g)?(t.flags|=192,t.child=e.child,t=null):(e=j.treeContext,_e=Zt(g.nextSibling),ut=t,ye=!0,qn=null,Vt=!1,e!==null&&e0(t,e),t=_c(t,l.children),t.flags|=4096);return t}return i?(Fn(),g=l.fallback,i=t.mode,j=e.child,A=j.sibling,l=pn(j,{mode:"hidden",children:l.children}),l.subtreeFlags=j.subtreeFlags&65011712,A!==null?g=pn(A,g):(g=Ea(g,i,n,null),g.flags|=2),g.return=t,l.return=t,l.sibling=g,t.child=l,bi(null,l),l=t.child,g=e.child.memoizedState,g===null?g=Oc(n):(i=g.cachePool,i!==null?(j=Ke._currentValue,i=i.parent!==j?{parent:j,pool:j}:i):i=r0(),g={baseLanes:g.baseLanes|n,cachePool:i}),l.memoizedState=g,l.childLanes=Nc(e,h,n),t.memoizedState=Rc,bi(e.child,l)):(Jn(t),n=e.child,e=n.sibling,n=pn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=n,t.memoizedState=null,n)}function _c(e,t){return t=Gr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Gr(e,t){return e=Ot(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return Oa(t,e.child,null,n),e=_c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vh(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Ju(e.return,t,n)}function $c(e,t,n,l,i,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:i,treeForkCount:u}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=n,h.tailMode=i,h.treeForkCount=u)}function bh(e,t,n){var l=t.pendingProps,i=l.revealOrder,u=l.tail;l=l.children;var h=Qe.current,g=(h&2)!==0;if(g?(h=h&1|2,t.flags|=128):h&=1,F(Qe,h),st(e,t,l,n),l=ye?oi:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vh(e,n,t);else if(e.tag===19)vh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Rr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),$c(t,!1,i,n,u,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Rr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}$c(t,!0,n,null,u,l);break;case"together":$c(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(il(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function kc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&wr(e)))}function Dx(e,t,n){switch(t.tag){case 3:He(t,t.stateNode.containerInfo),Vn(t,Ke,e.memoizedState.cache),Ca();break;case 27:case 5:zt(t);break;case 4:He(t,t.stateNode.containerInfo);break;case 10:Vn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,oc(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Jn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?yh(e,t,n):(Jn(t),e=bn(e,t,n),e!==null?e.sibling:null);Jn(t);break;case 19:var i=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(il(e,t,n,!1),l=(n&t.childLanes)!==0),i){if(l)return bh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(Qe,Qe.current),l)break;return null;case 22:return t.lanes=0,dh(e,t,n,t.pendingProps);case 24:Vn(t,Ke,e.memoizedState.cache)}return bn(e,t,n)}function Sh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Fe=!0;else{if(!kc(e,n)&&(t.flags&128)===0)return Fe=!1,Dx(e,t,n);Fe=(e.flags&131072)!==0}else Fe=!1,ye&&(t.flags&1048576)!==0&&Pd(t,oi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e=="function")Yu(e)?(l=_a(e,l),t.tag=1,t=gh(null,t,e,l,n)):(t.tag=0,t=Ac(null,t,e,l,n));else{if(e!=null){var i=e.$$typeof;if(i===X){t.tag=11,t=ch(null,t,e,l,n);break e}else if(i===Q){t.tag=14,t=sh(null,t,e,l,n);break e}}throw t=nt(e)||e,Error(o(306,t,""))}}return t;case 0:return Ac(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,i=_a(l,t.pendingProps),gh(e,t,l,i,n);case 3:e:{if(He(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var u=t.memoizedState;i=u.element,nc(e,t),mi(t,l,null,n);var h=t.memoizedState;if(l=h.cache,Vn(t,Ke,l),l!==u.cache&&Fu(t,[Ke],n,!0),pi(),l=h.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=xh(e,t,l,n);break e}else if(l!==i){i=Gt(Error(o(424)),t),ui(i),t=xh(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(_e=Zt(e.firstChild),ut=t,ye=!0,qn=null,Vt=!0,n=d0(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ca(),l===i){t=bn(e,t,n);break e}st(e,t,l,n)}t=t.child}return t;case 26:return Yr(e,t),e===null?(n=N1(t.type,null,t.pendingProps,null))?t.memoizedState=n:ye||(n=t.type,e=t.pendingProps,l=lo(re.current).createElement(n),l[ot]=t,l[xt]=e,ft(l,n,e),at(l),t.stateNode=l):t.memoizedState=N1(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return zt(t),e===null&&ye&&(l=t.stateNode=A1(t.type,t.pendingProps,re.current),ut=t,Vt=!0,i=_e,la(t.type)?(ms=i,_e=Zt(l.firstChild)):_e=i),st(e,t,t.pendingProps.children,n),Yr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ye&&((i=l=_e)&&(l=sy(l,t.type,t.pendingProps,Vt),l!==null?(t.stateNode=l,ut=t,_e=Zt(l.firstChild),Vt=!1,i=!0):i=!1),i||Xn(t)),zt(t),i=t.type,u=t.pendingProps,h=e!==null?e.memoizedProps:null,l=u.children,ss(i,u)?l=null:h!==null&&ss(i,h)&&(t.flags|=32),t.memoizedState!==null&&(i=cc(e,t,Cx,null,null,n),$i._currentValue=i),Yr(e,t),st(e,t,l,n),t.child;case 6:return e===null&&ye&&((e=n=_e)&&(n=fy(n,t.pendingProps,Vt),n!==null?(t.stateNode=n,ut=t,_e=null,e=!0):e=!1),e||Xn(t)),null;case 13:return yh(e,t,n);case 4:return He(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Oa(t,null,l,n):st(e,t,l,n),t.child;case 11:return ch(e,t,t.type,t.pendingProps,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,Vn(t,t.type,l.value),st(e,t,l.children,n),t.child;case 9:return i=t.type._context,l=t.pendingProps.children,Ta(t),i=ct(i),l=l(i),t.flags|=1,st(e,t,l,n),t.child;case 14:return sh(e,t,t.type,t.pendingProps,n);case 15:return fh(e,t,t.type,t.pendingProps,n);case 19:return bh(e,t,n);case 31:return _x(e,t,n);case 22:return dh(e,t,n,t.pendingProps);case 24:return Ta(t),l=ct(Ke),e===null?(i=Pu(),i===null&&(i=Oe,u=Wu(),i.pooledCache=u,u.refCount++,u!==null&&(i.pooledCacheLanes|=n),i=u),t.memoizedState={parent:l,cache:i},tc(t),Vn(t,Ke,i)):((e.lanes&n)!==0&&(nc(e,t),mi(t,null,null,n),pi()),i=e.memoizedState,u=t.memoizedState,i.parent!==l?(i={parent:l,cache:l},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Vn(t,Ke,l)):(l=u.cache,Vn(t,Ke,l),l!==i.cache&&Fu(t,[Ke],n,!0))),st(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Sn(e){e.flags|=4}function Bc(e,t,n,l,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Kh())e.flags|=8192;else throw Ra=zr,ec}else e.flags&=-16777217}function wh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!B1(t))if(Kh())e.flags|=8192;else throw Ra=zr,ec}function qr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?td():536870912,e.lanes|=t,xl|=t)}function Si(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function $x(e,t,n){var l=t.pendingProps;switch(Vu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),xn(Ke),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ll(t)?Sn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Zu())),De(t),null;case 26:var i=t.type,u=t.memoizedState;return e===null?(Sn(t),u!==null?(De(t),wh(t,u)):(De(t),Bc(t,i,null,l,n))):u?u!==e.memoizedState?(Sn(t),De(t),wh(t,u)):(De(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Sn(t),De(t),Bc(t,i,e,l,n)),null;case 27:if(Ft(t),n=re.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Sn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return De(t),null}e=W.current,ll(t)?t0(t):(e=A1(i,l,n),t.stateNode=e,Sn(t))}return De(t),null;case 5:if(Ft(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Sn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return De(t),null}if(u=W.current,ll(t))t0(t);else{var h=lo(re.current);switch(u){case 1:u=h.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:u=h.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":u=h.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":u=h.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":u=h.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?u.multiple=!0:l.size&&(u.size=l.size);break;default:u=typeof l.is=="string"?h.createElement(i,{is:l.is}):h.createElement(i)}}u[ot]=t,u[xt]=l;e:for(h=t.child;h!==null;){if(h.tag===5||h.tag===6)u.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}t.stateNode=u;e:switch(ft(u,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Sn(t)}}return De(t),Bc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Sn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=re.current,ll(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,i=ut,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}e[ot]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||y1(e.nodeValue,n)),e||Xn(t,!0)}else e=lo(e).createTextNode(l),e[ot]=t,t.stateNode=e}return De(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=ll(t),n!==null){if(e===null){if(!l)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[ot]=t}else Ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),e=!1}else n=Zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_t(t),t):(_t(t),null);if((t.flags&128)!==0)throw Error(o(558))}return De(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=ll(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(o(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[ot]=t}else Ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),i=!1}else i=Zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(_t(t),t):(_t(t),null)}return _t(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),u=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==i&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),qr(t,t.updateQueue),De(t),null);case 4:return be(),e===null&&is(t.stateNode.containerInfo),De(t),null;case 10:return xn(t.type),De(t),null;case 19:if(G(Qe),l=t.memoizedState,l===null)return De(t),null;if(i=(t.flags&128)!==0,u=l.rendering,u===null)if(i)Si(l,!1);else{if(Xe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Rr(e),u!==null){for(t.flags|=128,Si(l,!1),e=u.updateQueue,t.updateQueue=e,qr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Fd(n,e),n=n.sibling;return F(Qe,Qe.current&1|2),ye&&mn(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Tt()>Kr&&(t.flags|=128,i=!0,Si(l,!1),t.lanes=4194304)}else{if(!i)if(e=Rr(u),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,qr(t,e),Si(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!ye)return De(t),null}else 2*Tt()-l.renderingStartTime>Kr&&n!==536870912&&(t.flags|=128,i=!0,Si(l,!1),t.lanes=4194304);l.isBackwards?(u.sibling=t.child,t.child=u):(e=l.last,e!==null?e.sibling=u:t.child=u,l.last=u)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Tt(),e.sibling=null,n=Qe.current,F(Qe,i?n&1|2:n&1),ye&&mn(t,l.treeForkCount),e):(De(t),null);case 22:case 23:return _t(t),rc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),n=t.updateQueue,n!==null&&qr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&G(Ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xn(Ke),De(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function kx(e,t){switch(Vu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(Ke),be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ft(t),null;case 31:if(t.memoizedState!==null){if(_t(t),t.alternate===null)throw Error(o(340));Ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_t(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Qe),null;case 4:return be(),null;case 10:return xn(t.type),null;case 22:case 23:return _t(t),rc(),e!==null&&G(Ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xn(Ke),null;case 25:return null;default:return null}}function jh(e,t){switch(Vu(t),t.tag){case 3:xn(Ke),be();break;case 26:case 27:case 5:Ft(t);break;case 4:be();break;case 31:t.memoizedState!==null&&_t(t);break;case 13:_t(t);break;case 19:G(Qe);break;case 10:xn(t.type);break;case 22:case 23:_t(t),rc(),e!==null&&G(Ma);break;case 24:xn(Ke)}}function wi(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&e)===e){l=void 0;var u=n.create,h=n.inst;l=u(),h.destroy=l}n=n.next}while(n!==i)}}catch(g){Te(t,t.return,g)}}function Wn(e,t,n){try{var l=t.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var u=i.next;l=u;do{if((l.tag&e)===e){var h=l.inst,g=h.destroy;if(g!==void 0){h.destroy=void 0,i=t;var j=n,A=g;try{A()}catch(Y){Te(i,j,Y)}}}l=l.next}while(l!==u)}}catch(Y){Te(t,t.return,Y)}}function Eh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{p0(t,n)}catch(l){Te(e,e.return,l)}}}function Ch(e,t,n){n.props=_a(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Te(e,t,l)}}function ji(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(i){Te(e,t,i)}}function ln(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(i){Te(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){Te(e,t,i)}else n.current=null}function zh(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(i){Te(e,e.return,i)}}function Lc(e,t,n){try{var l=e.stateNode;ly(l,e.type,n,t),l[xt]=t}catch(i){Te(e,e.return,i)}}function Th(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&la(e.type)||e.tag===4}function Uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Th(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&la(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hc(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dn));else if(l!==4&&(l===27&&la(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Hc(e,t,n),e=e.sibling;e!==null;)Hc(e,t,n),e=e.sibling}function Xr(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&la(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Xr(e,t,n),e=e.sibling;e!==null;)Xr(e,t,n),e=e.sibling}function Mh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ft(t,l,n),t[ot]=e,t[xt]=n}catch(u){Te(e,e.return,u)}}var wn=!1,We=!1,Yc=!1,Ah=typeof WeakSet=="function"?WeakSet:Set,lt=null;function Bx(e,t){if(e=e.containerInfo,us=fo,e=Yd(e),Du(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var i=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var h=0,g=-1,j=-1,A=0,Y=0,V=e,O=null;t:for(;;){for(var $;V!==n||i!==0&&V.nodeType!==3||(g=h+i),V!==u||l!==0&&V.nodeType!==3||(j=h+l),V.nodeType===3&&(h+=V.nodeValue.length),($=V.firstChild)!==null;)O=V,V=$;for(;;){if(V===e)break t;if(O===n&&++A===i&&(g=h),O===u&&++Y===l&&(j=h),($=V.nextSibling)!==null)break;V=O,O=V.parentNode}V=$}n=g===-1||j===-1?null:{start:g,end:j}}else n=null}n=n||{start:0,end:0}}else n=null;for(cs={focusedElem:e,selectionRange:n},fo=!1,lt=t;lt!==null;)if(t=lt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,lt=e;else for(;lt!==null;){switch(t=lt,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,i=u.memoizedProps,u=u.memoizedState,l=n.stateNode;try{var te=_a(n.type,i);e=l.getSnapshotBeforeUpdate(te,u),l.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Te(n,n.return,ie)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ds(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ds(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,lt=e;break}lt=t.return}}function Rh(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:En(e,n),l&4&&wi(5,n);break;case 1:if(En(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(h){Te(n,n.return,h)}else{var i=_a(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){Te(n,n.return,h)}}l&64&&Eh(n),l&512&&ji(n,n.return);break;case 3:if(En(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{p0(e,t)}catch(h){Te(n,n.return,h)}}break;case 27:t===null&&l&4&&Mh(n);case 26:case 5:En(e,n),t===null&&l&4&&zh(n),l&512&&ji(n,n.return);break;case 12:En(e,n);break;case 31:En(e,n),l&4&&_h(e,n);break;case 13:En(e,n),l&4&&Dh(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Qx.bind(null,n),dy(e,n))));break;case 22:if(l=n.memoizedState!==null||wn,!l){t=t!==null&&t.memoizedState!==null||We,i=wn;var u=We;wn=l,(We=t)&&!u?Cn(e,n,(n.subtreeFlags&8772)!==0):En(e,n),wn=i,We=u}break;case 30:break;default:En(e,n)}}function Oh(e){var t=e.alternate;t!==null&&(e.alternate=null,Oh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,vt=!1;function jn(e,t,n){for(n=n.child;n!==null;)Nh(e,t,n),n=n.sibling}function Nh(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Zl,n)}catch{}switch(n.tag){case 26:We||ln(n,t),jn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:We||ln(n,t);var l=Ue,i=vt;la(n.type)&&(Ue=n.stateNode,vt=!1),jn(e,t,n),Ni(n.stateNode),Ue=l,vt=i;break;case 5:We||ln(n,t);case 6:if(l=Ue,i=vt,Ue=null,jn(e,t,n),Ue=l,vt=i,Ue!==null)if(vt)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(n.stateNode)}catch(u){Te(n,t,u)}else try{Ue.removeChild(n.stateNode)}catch(u){Te(n,t,u)}break;case 18:Ue!==null&&(vt?(e=Ue,E1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Cl(e)):E1(Ue,n.stateNode));break;case 4:l=Ue,i=vt,Ue=n.stateNode.containerInfo,vt=!0,jn(e,t,n),Ue=l,vt=i;break;case 0:case 11:case 14:case 15:Wn(2,n,t),We||Wn(4,n,t),jn(e,t,n);break;case 1:We||(ln(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Ch(n,t,l)),jn(e,t,n);break;case 21:jn(e,t,n);break;case 22:We=(l=We)||n.memoizedState!==null,jn(e,t,n),We=l;break;default:jn(e,t,n)}}function _h(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Cl(e)}catch(n){Te(t,t.return,n)}}}function Dh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cl(e)}catch(n){Te(t,t.return,n)}}function Lx(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ah),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ah),t;default:throw Error(o(435,e.tag))}}function Vr(e,t){var n=Lx(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var i=Zx.bind(null,e,l);l.then(i,i)}})}function bt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var i=n[l],u=e,h=t,g=h;e:for(;g!==null;){switch(g.tag){case 27:if(la(g.type)){Ue=g.stateNode,vt=!1;break e}break;case 5:Ue=g.stateNode,vt=!1;break e;case 3:case 4:Ue=g.stateNode.containerInfo,vt=!0;break e}g=g.return}if(Ue===null)throw Error(o(160));Nh(u,h,i),Ue=null,vt=!1,u=i.alternate,u!==null&&(u.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)$h(t,e),t=t.sibling}var It=null;function $h(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bt(t,e),St(e),l&4&&(Wn(3,e,e.return),wi(3,e),Wn(5,e,e.return));break;case 1:bt(t,e),St(e),l&512&&(We||n===null||ln(n,n.return)),l&64&&wn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var i=It;if(bt(t,e),St(e),l&512&&(We||n===null||ln(n,n.return)),l&4){var u=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(l){case"title":u=i.getElementsByTagName("title")[0],(!u||u[Fl]||u[ot]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=i.createElement(l),i.head.insertBefore(u,i.querySelector("head > title"))),ft(u,l,n),u[ot]=e,at(u),l=u;break e;case"link":var h=$1("link","href",i).get(l+(n.href||""));if(h){for(var g=0;g<h.length;g++)if(u=h[g],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(g,1);break t}}u=i.createElement(l),ft(u,l,n),i.head.appendChild(u);break;case"meta":if(h=$1("meta","content",i).get(l+(n.content||""))){for(g=0;g<h.length;g++)if(u=h[g],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(g,1);break t}}u=i.createElement(l),ft(u,l,n),i.head.appendChild(u);break;default:throw Error(o(468,l))}u[ot]=e,at(u),l=u}e.stateNode=l}else k1(i,e.type,e.stateNode);else e.stateNode=D1(i,l,e.memoizedProps);else u!==l?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,l===null?k1(i,e.type,e.stateNode):D1(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Lc(e,e.memoizedProps,n.memoizedProps)}break;case 27:bt(t,e),St(e),l&512&&(We||n===null||ln(n,n.return)),n!==null&&l&4&&Lc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(bt(t,e),St(e),l&512&&(We||n===null||ln(n,n.return)),e.flags&32){i=e.stateNode;try{Ka(i,"")}catch(te){Te(e,e.return,te)}}l&4&&e.stateNode!=null&&(i=e.memoizedProps,Lc(e,i,n!==null?n.memoizedProps:i)),l&1024&&(Yc=!0);break;case 6:if(bt(t,e),St(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(te){Te(e,e.return,te)}}break;case 3:if(oo=null,i=It,It=io(t.containerInfo),bt(t,e),It=i,St(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Cl(t.containerInfo)}catch(te){Te(e,e.return,te)}Yc&&(Yc=!1,kh(e));break;case 4:l=It,It=io(e.stateNode.containerInfo),bt(t,e),St(e),It=l;break;case 12:bt(t,e),St(e);break;case 31:bt(t,e),St(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Vr(e,l)));break;case 13:bt(t,e),St(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Zr=Tt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Vr(e,l)));break;case 22:i=e.memoizedState!==null;var j=n!==null&&n.memoizedState!==null,A=wn,Y=We;if(wn=A||i,We=Y||j,bt(t,e),We=Y,wn=A,St(e),l&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||j||wn||We||Da(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){j=n=t;try{if(u=j.stateNode,i)h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{g=j.stateNode;var V=j.memoizedProps.style,O=V!=null&&V.hasOwnProperty("display")?V.display:null;g.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(te){Te(j,j.return,te)}}}else if(t.tag===6){if(n===null){j=t;try{j.stateNode.nodeValue=i?"":j.memoizedProps}catch(te){Te(j,j.return,te)}}}else if(t.tag===18){if(n===null){j=t;try{var $=j.stateNode;i?C1($,!0):C1(j.stateNode,!1)}catch(te){Te(j,j.return,te)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Vr(e,n))));break;case 19:bt(t,e),St(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Vr(e,l)));break;case 30:break;case 21:break;default:bt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Th(l)){n=l;break}l=l.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var i=n.stateNode,u=Uc(e);Xr(e,u,i);break;case 5:var h=n.stateNode;n.flags&32&&(Ka(h,""),n.flags&=-33);var g=Uc(e);Xr(e,g,h);break;case 3:case 4:var j=n.stateNode.containerInfo,A=Uc(e);Hc(e,A,j);break;default:throw Error(o(161))}}catch(Y){Te(e,e.return,Y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;kh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function En(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Rh(e,t.alternate,t),t=t.sibling}function Da(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wn(4,t,t.return),Da(t);break;case 1:ln(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Ch(t,t.return,n),Da(t);break;case 27:Ni(t.stateNode);case 26:case 5:ln(t,t.return),Da(t);break;case 22:t.memoizedState===null&&Da(t);break;case 30:Da(t);break;default:Da(t)}e=e.sibling}}function Cn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,i=e,u=t,h=u.flags;switch(u.tag){case 0:case 11:case 15:Cn(i,u,n),wi(4,u);break;case 1:if(Cn(i,u,n),l=u,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(A){Te(l,l.return,A)}if(l=u,i=l.updateQueue,i!==null){var g=l.stateNode;try{var j=i.shared.hiddenCallbacks;if(j!==null)for(i.shared.hiddenCallbacks=null,i=0;i<j.length;i++)h0(j[i],g)}catch(A){Te(l,l.return,A)}}n&&h&64&&Eh(u),ji(u,u.return);break;case 27:Mh(u);case 26:case 5:Cn(i,u,n),n&&l===null&&h&4&&zh(u),ji(u,u.return);break;case 12:Cn(i,u,n);break;case 31:Cn(i,u,n),n&&h&4&&_h(i,u);break;case 13:Cn(i,u,n),n&&h&4&&Dh(i,u);break;case 22:u.memoizedState===null&&Cn(i,u,n),ji(u,u.return);break;case 30:break;default:Cn(i,u,n)}t=t.sibling}}function Gc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ci(n))}function qc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ci(e))}function Pt(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bh(e,t,n,l),t=t.sibling}function Bh(e,t,n,l){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Pt(e,t,n,l),i&2048&&wi(9,t);break;case 1:Pt(e,t,n,l);break;case 3:Pt(e,t,n,l),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ci(e)));break;case 12:if(i&2048){Pt(e,t,n,l),e=t.stateNode;try{var u=t.memoizedProps,h=u.id,g=u.onPostCommit;typeof g=="function"&&g(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(j){Te(t,t.return,j)}}else Pt(e,t,n,l);break;case 31:Pt(e,t,n,l);break;case 13:Pt(e,t,n,l);break;case 23:break;case 22:u=t.stateNode,h=t.alternate,t.memoizedState!==null?u._visibility&2?Pt(e,t,n,l):Ei(e,t):u._visibility&2?Pt(e,t,n,l):(u._visibility|=2,pl(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Gc(h,t);break;case 24:Pt(e,t,n,l),i&2048&&qc(t.alternate,t);break;default:Pt(e,t,n,l)}}function pl(e,t,n,l,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,h=t,g=n,j=l,A=h.flags;switch(h.tag){case 0:case 11:case 15:pl(u,h,g,j,i),wi(8,h);break;case 23:break;case 22:var Y=h.stateNode;h.memoizedState!==null?Y._visibility&2?pl(u,h,g,j,i):Ei(u,h):(Y._visibility|=2,pl(u,h,g,j,i)),i&&A&2048&&Gc(h.alternate,h);break;case 24:pl(u,h,g,j,i),i&&A&2048&&qc(h.alternate,h);break;default:pl(u,h,g,j,i)}t=t.sibling}}function Ei(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,i=l.flags;switch(l.tag){case 22:Ei(n,l),i&2048&&Gc(l.alternate,l);break;case 24:Ei(n,l),i&2048&&qc(l.alternate,l);break;default:Ei(n,l)}t=t.sibling}}var Ci=8192;function ml(e,t,n){if(e.subtreeFlags&Ci)for(e=e.child;e!==null;)Lh(e,t,n),e=e.sibling}function Lh(e,t,n){switch(e.tag){case 26:ml(e,t,n),e.flags&Ci&&e.memoizedState!==null&&Ey(n,It,e.memoizedState,e.memoizedProps);break;case 5:ml(e,t,n);break;case 3:case 4:var l=It;It=io(e.stateNode.containerInfo),ml(e,t,n),It=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Ci,Ci=16777216,ml(e,t,n),Ci=l):ml(e,t,n));break;default:ml(e,t,n)}}function Uh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function zi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];lt=l,Yh(l,e)}Uh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hh(e),e=e.sibling}function Hh(e){switch(e.tag){case 0:case 11:case 15:zi(e),e.flags&2048&&Wn(9,e,e.return);break;case 3:zi(e);break;case 12:zi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Qr(e)):zi(e);break;default:zi(e)}}function Qr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];lt=l,Yh(l,e)}Uh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wn(8,t,t.return),Qr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Qr(t));break;default:Qr(t)}e=e.sibling}}function Yh(e,t){for(;lt!==null;){var n=lt;switch(n.tag){case 0:case 11:case 15:Wn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ci(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,lt=l;else e:for(n=e;lt!==null;){l=lt;var i=l.sibling,u=l.return;if(Oh(l),l===n){lt=null;break e}if(i!==null){i.return=u,lt=i;break e}lt=u}}}var Ux={getCacheForType:function(e){var t=ct(Ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ct(Ke).controller.signal}},Hx=typeof WeakMap=="function"?WeakMap:Map,je=0,Oe=null,pe=null,ge=0,ze=0,Dt=null,In=!1,gl=!1,Xc=!1,zn=0,Xe=0,Pn=0,$a=0,Vc=0,$t=0,xl=0,Ti=null,wt=null,Qc=!1,Zr=0,Gh=0,Kr=1/0,Jr=null,ea=null,tt=0,ta=null,yl=null,Tn=0,Zc=0,Kc=null,qh=null,Mi=0,Jc=null;function kt(){return(je&2)!==0&&ge!==0?ge&-ge:k.T!==null?ts():id()}function Xh(){if($t===0)if((ge&536870912)===0||ye){var e=ar;ar<<=1,(ar&3932160)===0&&(ar=262144),$t=e}else $t=536870912;return e=Nt.current,e!==null&&(e.flags|=32),$t}function jt(e,t,n){(e===Oe&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(vl(e,0),na(e,ge,$t,!1)),Jl(e,n),((je&2)===0||e!==Oe)&&(e===Oe&&((je&2)===0&&($a|=n),Xe===4&&na(e,ge,$t,!1)),rn(e))}function Vh(e,t,n){if((je&6)!==0)throw Error(o(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Kl(e,t),i=l?qx(e,t):Wc(e,t,!0),u=l;do{if(i===0){gl&&!l&&na(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!Yx(n)){i=Wc(e,t,!1),u=!1;continue}if(i===2){if(u=t,e.errorRecoveryDisabledLanes&u)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var g=e;i=Ti;var j=g.current.memoizedState.isDehydrated;if(j&&(vl(g,h).flags|=256),h=Wc(g,h,!1),h!==2){if(Xc&&!j){g.errorRecoveryDisabledLanes|=u,$a|=u,i=4;break e}u=wt,wt=i,u!==null&&(wt===null?wt=u:wt.push.apply(wt,u))}i=h}if(u=!1,i!==2)continue}}if(i===1){vl(e,0),na(e,t,0,!0);break}e:{switch(l=e,u=i,u){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:na(l,t,$t,!In);break e;case 2:wt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(i=Zr+300-Tt(),10<i)){if(na(l,t,$t,!In),ir(l,0,!0)!==0)break e;Tn=t,l.timeoutHandle=w1(Qh.bind(null,l,n,wt,Jr,Qc,t,$t,$a,xl,In,u,"Throttled",-0,0),i);break e}Qh(l,n,wt,Jr,Qc,t,$t,$a,xl,In,u,null,-0,0)}}break}while(!0);rn(e)}function Qh(e,t,n,l,i,u,h,g,j,A,Y,V,O,$){if(e.timeoutHandle=-1,V=t.subtreeFlags,V&8192||(V&16785408)===16785408){V={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dn},Lh(t,u,V);var te=(u&62914560)===u?Zr-Tt():(u&4194048)===u?Gh-Tt():0;if(te=Cy(V,te),te!==null){Tn=u,e.cancelPendingCommit=te(e1.bind(null,e,t,u,n,l,i,h,g,j,Y,V,null,O,$)),na(e,u,h,!A);return}}e1(e,t,u,n,l,i,h,g,j)}function Yx(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var i=n[l],u=i.getSnapshot;i=i.value;try{if(!Rt(u(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function na(e,t,n,l){t&=~Vc,t&=~$a,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var i=t;0<i;){var u=31-At(i),h=1<<u;l[u]=-1,i&=~h}n!==0&&nd(e,n,t)}function Fr(){return(je&6)===0?(Ai(0),!1):!0}function Fc(){if(pe!==null){if(ze===0)var e=pe.return;else e=pe,gn=za=null,dc(e),cl=null,fi=0,e=pe;for(;e!==null;)jh(e.alternate,e),e=e.return;pe=null}}function vl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,oy(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Tn=0,Fc(),Oe=e,pe=n=pn(e.current,null),ge=t,ze=0,Dt=null,In=!1,gl=Kl(e,t),Xc=!1,xl=$t=Vc=$a=Pn=Xe=0,wt=Ti=null,Qc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var i=31-At(l),u=1<<i;t|=e[i],l&=~u}return zn=t,xr(),n}function Zh(e,t){ce=null,k.H=vi,t===ul||t===Cr?(t=c0(),ze=3):t===ec?(t=c0(),ze=4):ze=t===Mc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Dt=t,pe===null&&(Xe=1,Ur(e,Gt(t,e.current)))}function Kh(){var e=Nt.current;return e===null?!0:(ge&4194048)===ge?Qt===null:(ge&62914560)===ge||(ge&536870912)!==0?e===Qt:!1}function Jh(){var e=k.H;return k.H=vi,e===null?vi:e}function Fh(){var e=k.A;return k.A=Ux,e}function Wr(){Xe=4,In||(ge&4194048)!==ge&&Nt.current!==null||(gl=!0),(Pn&134217727)===0&&($a&134217727)===0||Oe===null||na(Oe,ge,$t,!1)}function Wc(e,t,n){var l=je;je|=2;var i=Jh(),u=Fh();(Oe!==e||ge!==t)&&(Jr=null,vl(e,t)),t=!1;var h=Xe;e:do try{if(ze!==0&&pe!==null){var g=pe,j=Dt;switch(ze){case 8:Fc(),h=6;break e;case 3:case 2:case 9:case 6:Nt.current===null&&(t=!0);var A=ze;if(ze=0,Dt=null,bl(e,g,j,A),n&&gl){h=0;break e}break;default:A=ze,ze=0,Dt=null,bl(e,g,j,A)}}Gx(),h=Xe;break}catch(Y){Zh(e,Y)}while(!0);return t&&e.shellSuspendCounter++,gn=za=null,je=l,k.H=i,k.A=u,pe===null&&(Oe=null,ge=0,xr()),h}function Gx(){for(;pe!==null;)Wh(pe)}function qx(e,t){var n=je;je|=2;var l=Jh(),i=Fh();Oe!==e||ge!==t?(Jr=null,Kr=Tt()+500,vl(e,t)):gl=Kl(e,t);e:do try{if(ze!==0&&pe!==null){t=pe;var u=Dt;t:switch(ze){case 1:ze=0,Dt=null,bl(e,t,u,1);break;case 2:case 9:if(o0(u)){ze=0,Dt=null,Ih(t);break}t=function(){ze!==2&&ze!==9||Oe!==e||(ze=7),rn(e)},u.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:o0(u)?(ze=0,Dt=null,Ih(t)):(ze=0,Dt=null,bl(e,t,u,7));break;case 5:var h=null;switch(pe.tag){case 26:h=pe.memoizedState;case 5:case 27:var g=pe;if(h?B1(h):g.stateNode.complete){ze=0,Dt=null;var j=g.sibling;if(j!==null)pe=j;else{var A=g.return;A!==null?(pe=A,Ir(A)):pe=null}break t}}ze=0,Dt=null,bl(e,t,u,5);break;case 6:ze=0,Dt=null,bl(e,t,u,6);break;case 8:Fc(),Xe=6;break e;default:throw Error(o(462))}}Xx();break}catch(Y){Zh(e,Y)}while(!0);return gn=za=null,k.H=l,k.A=i,je=n,pe!==null?0:(Oe=null,ge=0,xr(),Xe)}function Xx(){for(;pe!==null&&!h2();)Wh(pe)}function Wh(e){var t=Sh(e.alternate,e,zn);e.memoizedProps=e.pendingProps,t===null?Ir(e):pe=t}function Ih(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=mh(n,t,t.pendingProps,t.type,void 0,ge);break;case 11:t=mh(n,t,t.pendingProps,t.type.render,t.ref,ge);break;case 5:dc(t);default:jh(n,t),t=pe=Fd(t,zn),t=Sh(n,t,zn)}e.memoizedProps=e.pendingProps,t===null?Ir(e):pe=t}function bl(e,t,n,l){gn=za=null,dc(t),cl=null,fi=0;var i=t.return;try{if(Nx(e,i,t,n,ge)){Xe=1,Ur(e,Gt(n,e.current)),pe=null;return}}catch(u){if(i!==null)throw pe=i,u;Xe=1,Ur(e,Gt(n,e.current)),pe=null;return}t.flags&32768?(ye||l===1?e=!0:gl||(ge&536870912)!==0?e=!1:(In=e=!0,(l===2||l===9||l===3||l===6)&&(l=Nt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ph(t,e)):Ir(t)}function Ir(e){var t=e;do{if((t.flags&32768)!==0){Ph(t,In);return}e=t.return;var n=$x(t.alternate,t,zn);if(n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);Xe===0&&(Xe=5)}function Ph(e,t){do{var n=kx(e.alternate,e);if(n!==null){n.flags&=32767,pe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){pe=e;return}pe=e=n}while(e!==null);Xe=6,pe=null}function e1(e,t,n,l,i,u,h,g,j){e.cancelPendingCommit=null;do Pr();while(tt!==0);if((je&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(u=t.lanes|t.childLanes,u|=Uu,j2(e,n,u,h,g,j),e===Oe&&(pe=Oe=null,ge=0),yl=t,ta=e,Tn=n,Zc=u,Kc=i,qh=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Kx(tr,function(){return i1(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=k.T,k.T=null,i=K.p,K.p=2,h=je,je|=4;try{Bx(e,t,n)}finally{je=h,K.p=i,k.T=l}}tt=1,t1(),n1(),a1()}}function t1(){if(tt===1){tt=0;var e=ta,t=yl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=k.T,k.T=null;var l=K.p;K.p=2;var i=je;je|=4;try{$h(t,e);var u=cs,h=Yd(e.containerInfo),g=u.focusedElem,j=u.selectionRange;if(h!==g&&g&&g.ownerDocument&&Hd(g.ownerDocument.documentElement,g)){if(j!==null&&Du(g)){var A=j.start,Y=j.end;if(Y===void 0&&(Y=A),"selectionStart"in g)g.selectionStart=A,g.selectionEnd=Math.min(Y,g.value.length);else{var V=g.ownerDocument||document,O=V&&V.defaultView||window;if(O.getSelection){var $=O.getSelection(),te=g.textContent.length,ie=Math.min(j.start,te),Re=j.end===void 0?ie:Math.min(j.end,te);!$.extend&&ie>Re&&(h=Re,Re=ie,ie=h);var T=Ud(g,ie),C=Ud(g,Re);if(T&&C&&($.rangeCount!==1||$.anchorNode!==T.node||$.anchorOffset!==T.offset||$.focusNode!==C.node||$.focusOffset!==C.offset)){var M=V.createRange();M.setStart(T.node,T.offset),$.removeAllRanges(),ie>Re?($.addRange(M),$.extend(C.node,C.offset)):(M.setEnd(C.node,C.offset),$.addRange(M))}}}}for(V=[],$=g;$=$.parentNode;)$.nodeType===1&&V.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<V.length;g++){var q=V[g];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}fo=!!us,cs=us=null}finally{je=i,K.p=l,k.T=n}}e.current=t,tt=2}}function n1(){if(tt===2){tt=0;var e=ta,t=yl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=k.T,k.T=null;var l=K.p;K.p=2;var i=je;je|=4;try{Rh(e,t.alternate,t)}finally{je=i,K.p=l,k.T=n}}tt=3}}function a1(){if(tt===4||tt===3){tt=0,p2();var e=ta,t=yl,n=Tn,l=qh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?tt=5:(tt=0,yl=ta=null,l1(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ea=null),mu(n),t=t.stateNode,Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Zl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=k.T,i=K.p,K.p=2,k.T=null;try{for(var u=e.onRecoverableError,h=0;h<l.length;h++){var g=l[h];u(g.value,{componentStack:g.stack})}}finally{k.T=t,K.p=i}}(Tn&3)!==0&&Pr(),rn(e),i=e.pendingLanes,(n&261930)!==0&&(i&42)!==0?e===Jc?Mi++:(Mi=0,Jc=e):Mi=0,Ai(0)}}function l1(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ci(t)))}function Pr(){return t1(),n1(),a1(),i1()}function i1(){if(tt!==5)return!1;var e=ta,t=Zc;Zc=0;var n=mu(Tn),l=k.T,i=K.p;try{K.p=32>n?32:n,k.T=null,n=Kc,Kc=null;var u=ta,h=Tn;if(tt=0,yl=ta=null,Tn=0,(je&6)!==0)throw Error(o(331));var g=je;if(je|=4,Hh(u.current),Bh(u,u.current,h,n),je=g,Ai(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Zl,u)}catch{}return!0}finally{K.p=i,k.T=l,l1(e,t)}}function r1(e,t,n){t=Gt(n,t),t=Tc(e.stateNode,t,2),e=Kn(e,t,2),e!==null&&(Jl(e,2),rn(e))}function Te(e,t,n){if(e.tag===3)r1(e,e,n);else for(;t!==null;){if(t.tag===3){r1(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ea===null||!ea.has(l))){e=Gt(n,e),n=oh(2),l=Kn(t,n,2),l!==null&&(uh(n,l,t,e),Jl(l,2),rn(l));break}}t=t.return}}function Ic(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new Hx;var i=new Set;l.set(t,i)}else i=l.get(t),i===void 0&&(i=new Set,l.set(t,i));i.has(n)||(Xc=!0,i.add(n),e=Vx.bind(null,e,t,n),t.then(e,e))}function Vx(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Oe===e&&(ge&n)===n&&(Xe===4||Xe===3&&(ge&62914560)===ge&&300>Tt()-Zr?(je&2)===0&&vl(e,0):Vc|=n,xl===ge&&(xl=0)),rn(e)}function o1(e,t){t===0&&(t=td()),e=ja(e,t),e!==null&&(Jl(e,t),rn(e))}function Qx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),o1(e,n)}function Zx(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),o1(e,n)}function Kx(e,t){return fu(e,t)}var eo=null,Sl=null,Pc=!1,to=!1,es=!1,aa=0;function rn(e){e!==Sl&&e.next===null&&(Sl===null?eo=Sl=e:Sl=Sl.next=e),to=!0,Pc||(Pc=!0,Fx())}function Ai(e,t){if(!es&&to){es=!0;do for(var n=!1,l=eo;l!==null;){if(e!==0){var i=l.pendingLanes;if(i===0)var u=0;else{var h=l.suspendedLanes,g=l.pingedLanes;u=(1<<31-At(42|e)+1)-1,u&=i&~(h&~g),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,f1(l,u))}else u=ge,u=ir(l,l===Oe?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||Kl(l,u)||(n=!0,f1(l,u));l=l.next}while(n);es=!1}}function Jx(){u1()}function u1(){to=Pc=!1;var e=0;aa!==0&&ry()&&(e=aa);for(var t=Tt(),n=null,l=eo;l!==null;){var i=l.next,u=c1(l,t);u===0?(l.next=null,n===null?eo=i:n.next=i,i===null&&(Sl=n)):(n=l,(e!==0||(u&3)!==0)&&(to=!0)),l=i}tt!==0&&tt!==5||Ai(e),aa!==0&&(aa=0)}function c1(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var h=31-At(u),g=1<<h,j=i[h];j===-1?((g&n)===0||(g&l)!==0)&&(i[h]=w2(g,t)):j<=t&&(e.expiredLanes|=g),u&=~g}if(t=Oe,n=ge,n=ir(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&du(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Kl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&du(l),mu(n)){case 2:case 8:n=Pf;break;case 32:n=tr;break;case 268435456:n=ed;break;default:n=tr}return l=s1.bind(null,e),n=fu(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&du(l),e.callbackPriority=2,e.callbackNode=null,2}function s1(e,t){if(tt!==0&&tt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Pr()&&e.callbackNode!==n)return null;var l=ge;return l=ir(e,e===Oe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Vh(e,l,t),c1(e,Tt()),e.callbackNode!=null&&e.callbackNode===n?s1.bind(null,e):null)}function f1(e,t){if(Pr())return null;Vh(e,t,!0)}function Fx(){uy(function(){(je&6)!==0?fu(If,Jx):u1()})}function ts(){if(aa===0){var e=rl;e===0&&(e=nr,nr<<=1,(nr&261888)===0&&(nr=256)),aa=e}return aa}function d1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:cr(""+e)}function h1(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Wx(e,t,n,l,i){if(t==="submit"&&n&&n.stateNode===i){var u=d1((i[xt]||null).action),h=l.submitter;h&&(t=(t=h[xt]||null)?d1(t.formAction):h.getAttribute("formAction"),t!==null&&(u=t,h=null));var g=new hr("action","action",null,l,i);e.push({event:g,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(aa!==0){var j=h?h1(i,h):new FormData(i);Sc(n,{pending:!0,data:j,method:i.method,action:u},null,j)}}else typeof u=="function"&&(g.preventDefault(),j=h?h1(i,h):new FormData(i),Sc(n,{pending:!0,data:j,method:i.method,action:u},u,j))},currentTarget:i}]})}}for(var ns=0;ns<Lu.length;ns++){var as=Lu[ns],Ix=as.toLowerCase(),Px=as[0].toUpperCase()+as.slice(1);Wt(Ix,"on"+Px)}Wt(Xd,"onAnimationEnd"),Wt(Vd,"onAnimationIteration"),Wt(Qd,"onAnimationStart"),Wt("dblclick","onDoubleClick"),Wt("focusin","onFocus"),Wt("focusout","onBlur"),Wt(mx,"onTransitionRun"),Wt(gx,"onTransitionStart"),Wt(xx,"onTransitionCancel"),Wt(Zd,"onTransitionEnd"),Qa("onMouseEnter",["mouseout","mouseover"]),Qa("onMouseLeave",["mouseout","mouseover"]),Qa("onPointerEnter",["pointerout","pointerover"]),Qa("onPointerLeave",["pointerout","pointerover"]),va("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),va("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),va("onBeforeInput",["compositionend","keypress","textInput","paste"]),va("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),va("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),va("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ey=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ri));function p1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],i=l.event;l=l.listeners;e:{var u=void 0;if(t)for(var h=l.length-1;0<=h;h--){var g=l[h],j=g.instance,A=g.currentTarget;if(g=g.listener,j!==u&&i.isPropagationStopped())break e;u=g,i.currentTarget=A;try{u(i)}catch(Y){gr(Y)}i.currentTarget=null,u=j}else for(h=0;h<l.length;h++){if(g=l[h],j=g.instance,A=g.currentTarget,g=g.listener,j!==u&&i.isPropagationStopped())break e;u=g,i.currentTarget=A;try{u(i)}catch(Y){gr(Y)}i.currentTarget=null,u=j}}}}function me(e,t){var n=t[gu];n===void 0&&(n=t[gu]=new Set);var l=e+"__bubble";n.has(l)||(m1(t,e,2,!1),n.add(l))}function ls(e,t,n){var l=0;t&&(l|=4),m1(n,e,l,t)}var no="_reactListening"+Math.random().toString(36).slice(2);function is(e){if(!e[no]){e[no]=!0,ud.forEach(function(n){n!=="selectionchange"&&(ey.has(n)||ls(n,!1,e),ls(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[no]||(t[no]=!0,ls("selectionchange",!1,t))}}function m1(e,t,n,l){switch(X1(t)){case 2:var i=My;break;case 8:i=Ay;break;default:i=bs}n=i.bind(null,t,n,e),i=void 0,!Cu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function rs(e,t,n,l,i){var u=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var h=l.tag;if(h===3||h===4){var g=l.stateNode.containerInfo;if(g===i)break;if(h===4)for(h=l.return;h!==null;){var j=h.tag;if((j===3||j===4)&&h.stateNode.containerInfo===i)return;h=h.return}for(;g!==null;){if(h=qa(g),h===null)return;if(j=h.tag,j===5||j===6||j===26||j===27){l=u=h;continue e}g=g.parentNode}}l=l.return}bd(function(){var A=u,Y=ju(n),V=[];e:{var O=Kd.get(e);if(O!==void 0){var $=hr,te=e;switch(e){case"keypress":if(fr(n)===0)break e;case"keydown":case"keyup":$=Z2;break;case"focusin":te="focus",$=Au;break;case"focusout":te="blur",$=Au;break;case"beforeblur":case"afterblur":$=Au;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=$2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=F2;break;case Xd:case Vd:case Qd:$=L2;break;case Zd:$=I2;break;case"scroll":case"scrollend":$=_2;break;case"wheel":$=ex;break;case"copy":case"cut":case"paste":$=H2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Cd;break;case"toggle":case"beforetoggle":$=nx}var ie=(t&4)!==0,Re=!ie&&(e==="scroll"||e==="scrollend"),T=ie?O!==null?O+"Capture":null:O;ie=[];for(var C=A,M;C!==null;){var q=C;if(M=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||M===null||T===null||(q=Il(C,T),q!=null&&ie.push(Oi(C,q,M))),Re)break;C=C.return}0<ie.length&&(O=new $(O,te,null,n,Y),V.push({event:O,listeners:ie}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",O&&n!==wu&&(te=n.relatedTarget||n.fromElement)&&(qa(te)||te[Ga]))break e;if(($||O)&&(O=Y.window===Y?Y:(O=Y.ownerDocument)?O.defaultView||O.parentWindow:window,$?(te=n.relatedTarget||n.toElement,$=A,te=te?qa(te):null,te!==null&&(Re=d(te),ie=te.tag,te!==Re||ie!==5&&ie!==27&&ie!==6)&&(te=null)):($=null,te=A),$!==te)){if(ie=jd,q="onMouseLeave",T="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Cd,q="onPointerLeave",T="onPointerEnter",C="pointer"),Re=$==null?O:Wl($),M=te==null?O:Wl(te),O=new ie(q,C+"leave",$,n,Y),O.target=Re,O.relatedTarget=M,q=null,qa(Y)===A&&(ie=new ie(T,C+"enter",te,n,Y),ie.target=M,ie.relatedTarget=Re,q=ie),Re=q,$&&te)t:{for(ie=ty,T=$,C=te,M=0,q=T;q;q=ie(q))M++;q=0;for(var le=C;le;le=ie(le))q++;for(;0<M-q;)T=ie(T),M--;for(;0<q-M;)C=ie(C),q--;for(;M--;){if(T===C||C!==null&&T===C.alternate){ie=T;break t}T=ie(T),C=ie(C)}ie=null}else ie=null;$!==null&&g1(V,O,$,ie,!1),te!==null&&Re!==null&&g1(V,Re,te,ie,!0)}}e:{if(O=A?Wl(A):window,$=O.nodeName&&O.nodeName.toLowerCase(),$==="select"||$==="input"&&O.type==="file")var Se=_d;else if(Od(O))if(Dd)Se=dx;else{Se=sx;var ne=cx}else $=O.nodeName,!$||$.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?A&&Su(A.elementType)&&(Se=_d):Se=fx;if(Se&&(Se=Se(e,A))){Nd(V,Se,n,Y);break e}ne&&ne(e,O,A),e==="focusout"&&A&&O.type==="number"&&A.memoizedProps.value!=null&&bu(O,"number",O.value)}switch(ne=A?Wl(A):window,e){case"focusin":(Od(ne)||ne.contentEditable==="true")&&(Ia=ne,$u=A,ri=null);break;case"focusout":ri=$u=Ia=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,Gd(V,n,Y);break;case"selectionchange":if(px)break;case"keydown":case"keyup":Gd(V,n,Y)}var se;if(Ou)e:{switch(e){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else Wa?Ad(e,n)&&(xe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(xe="onCompositionStart");xe&&(zd&&n.locale!=="ko"&&(Wa||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Wa&&(se=Sd()):(Yn=Y,zu="value"in Yn?Yn.value:Yn.textContent,Wa=!0)),ne=ao(A,xe),0<ne.length&&(xe=new Ed(xe,e,null,n,Y),V.push({event:xe,listeners:ne}),se?xe.data=se:(se=Rd(n),se!==null&&(xe.data=se)))),(se=lx?ix(e,n):rx(e,n))&&(xe=ao(A,"onBeforeInput"),0<xe.length&&(ne=new Ed("onBeforeInput","beforeinput",null,n,Y),V.push({event:ne,listeners:xe}),ne.data=se)),Wx(V,e,A,n,Y)}p1(V,t)})}function Oi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ao(e,t){for(var n=t+"Capture",l=[];e!==null;){var i=e,u=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||u===null||(i=Il(e,n),i!=null&&l.unshift(Oi(e,i,u)),i=Il(e,t),i!=null&&l.push(Oi(e,i,u))),e.tag===3)return l;e=e.return}return[]}function ty(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function g1(e,t,n,l,i){for(var u=t._reactName,h=[];n!==null&&n!==l;){var g=n,j=g.alternate,A=g.stateNode;if(g=g.tag,j!==null&&j===l)break;g!==5&&g!==26&&g!==27||A===null||(j=A,i?(A=Il(n,u),A!=null&&h.unshift(Oi(n,A,j))):i||(A=Il(n,u),A!=null&&h.push(Oi(n,A,j)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var ny=/\r\n?/g,ay=/\u0000|\uFFFD/g;function x1(e){return(typeof e=="string"?e:""+e).replace(ny,`
`).replace(ay,"")}function y1(e,t){return t=x1(t),x1(e)===t}function Ae(e,t,n,l,i,u){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ka(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ka(e,""+l);break;case"className":or(e,"class",l);break;case"tabIndex":or(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":or(e,n,l);break;case"style":yd(e,l,u);break;case"data":if(t!=="object"){or(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=cr(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&Ae(e,t,"name",i.name,i,null),Ae(e,t,"formEncType",i.formEncType,i,null),Ae(e,t,"formMethod",i.formMethod,i,null),Ae(e,t,"formTarget",i.formTarget,i,null)):(Ae(e,t,"encType",i.encType,i,null),Ae(e,t,"method",i.method,i,null),Ae(e,t,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=cr(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=dn);break;case"onScroll":l!=null&&me("scroll",e);break;case"onScrollEnd":l!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=cr(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":me("beforetoggle",e),me("toggle",e),rr(e,"popover",l);break;case"xlinkActuate":fn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":fn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":fn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":fn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":fn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":fn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":fn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":fn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":fn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":rr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=O2.get(n)||n,rr(e,n,l))}}function os(e,t,n,l,i,u){switch(n){case"style":yd(e,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Ka(e,l):(typeof l=="number"||typeof l=="bigint")&&Ka(e,""+l);break;case"onScroll":l!=null&&me("scroll",e);break;case"onScrollEnd":l!=null&&me("scrollend",e);break;case"onClick":l!=null&&(e.onclick=dn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!cd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),u=e[xt]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,i),typeof l=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,i);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):rr(e,n,l)}}}function ft(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var l=!1,i=!1,u;for(u in n)if(n.hasOwnProperty(u)){var h=n[u];if(h!=null)switch(u){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ae(e,t,u,h,n,null)}}i&&Ae(e,t,"srcSet",n.srcSet,n,null),l&&Ae(e,t,"src",n.src,n,null);return;case"input":me("invalid",e);var g=u=h=i=null,j=null,A=null;for(l in n)if(n.hasOwnProperty(l)){var Y=n[l];if(Y!=null)switch(l){case"name":i=Y;break;case"type":h=Y;break;case"checked":j=Y;break;case"defaultChecked":A=Y;break;case"value":u=Y;break;case"defaultValue":g=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(o(137,t));break;default:Ae(e,t,l,Y,n,null)}}pd(e,u,g,j,A,h,i,!1);return;case"select":me("invalid",e),l=h=u=null;for(i in n)if(n.hasOwnProperty(i)&&(g=n[i],g!=null))switch(i){case"value":u=g;break;case"defaultValue":h=g;break;case"multiple":l=g;default:Ae(e,t,i,g,n,null)}t=u,n=h,e.multiple=!!l,t!=null?Za(e,!!l,t,!1):n!=null&&Za(e,!!l,n,!0);return;case"textarea":me("invalid",e),u=i=l=null;for(h in n)if(n.hasOwnProperty(h)&&(g=n[h],g!=null))switch(h){case"value":l=g;break;case"defaultValue":i=g;break;case"children":u=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(o(91));break;default:Ae(e,t,h,g,n,null)}gd(e,l,i,u);return;case"option":for(j in n)if(n.hasOwnProperty(j)&&(l=n[j],l!=null))switch(j){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ae(e,t,j,l,n,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(l=0;l<Ri.length;l++)me(Ri[l],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in n)if(n.hasOwnProperty(A)&&(l=n[A],l!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ae(e,t,A,l,n,null)}return;default:if(Su(t)){for(Y in n)n.hasOwnProperty(Y)&&(l=n[Y],l!==void 0&&os(e,t,Y,l,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(l=n[g],l!=null&&Ae(e,t,g,l,n,null))}function ly(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,u=null,h=null,g=null,j=null,A=null,Y=null;for($ in n){var V=n[$];if(n.hasOwnProperty($)&&V!=null)switch($){case"checked":break;case"value":break;case"defaultValue":j=V;default:l.hasOwnProperty($)||Ae(e,t,$,null,l,V)}}for(var O in l){var $=l[O];if(V=n[O],l.hasOwnProperty(O)&&($!=null||V!=null))switch(O){case"type":u=$;break;case"name":i=$;break;case"checked":A=$;break;case"defaultChecked":Y=$;break;case"value":h=$;break;case"defaultValue":g=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(o(137,t));break;default:$!==V&&Ae(e,t,O,$,l,V)}}vu(e,h,g,j,A,Y,u,i);return;case"select":$=h=g=O=null;for(u in n)if(j=n[u],n.hasOwnProperty(u)&&j!=null)switch(u){case"value":break;case"multiple":$=j;default:l.hasOwnProperty(u)||Ae(e,t,u,null,l,j)}for(i in l)if(u=l[i],j=n[i],l.hasOwnProperty(i)&&(u!=null||j!=null))switch(i){case"value":O=u;break;case"defaultValue":g=u;break;case"multiple":h=u;default:u!==j&&Ae(e,t,i,u,l,j)}t=g,n=h,l=$,O!=null?Za(e,!!n,O,!1):!!l!=!!n&&(t!=null?Za(e,!!n,t,!0):Za(e,!!n,n?[]:"",!1));return;case"textarea":$=O=null;for(g in n)if(i=n[g],n.hasOwnProperty(g)&&i!=null&&!l.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Ae(e,t,g,null,l,i)}for(h in l)if(i=l[h],u=n[h],l.hasOwnProperty(h)&&(i!=null||u!=null))switch(h){case"value":O=i;break;case"defaultValue":$=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==u&&Ae(e,t,h,i,l,u)}md(e,O,$);return;case"option":for(var te in n)if(O=n[te],n.hasOwnProperty(te)&&O!=null&&!l.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:Ae(e,t,te,null,l,O)}for(j in l)if(O=l[j],$=n[j],l.hasOwnProperty(j)&&O!==$&&(O!=null||$!=null))switch(j){case"selected":e.selected=O&&typeof O!="function"&&typeof O!="symbol";break;default:Ae(e,t,j,O,l,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in n)O=n[ie],n.hasOwnProperty(ie)&&O!=null&&!l.hasOwnProperty(ie)&&Ae(e,t,ie,null,l,O);for(A in l)if(O=l[A],$=n[A],l.hasOwnProperty(A)&&O!==$&&(O!=null||$!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,t));break;default:Ae(e,t,A,O,l,$)}return;default:if(Su(t)){for(var Re in n)O=n[Re],n.hasOwnProperty(Re)&&O!==void 0&&!l.hasOwnProperty(Re)&&os(e,t,Re,void 0,l,O);for(Y in l)O=l[Y],$=n[Y],!l.hasOwnProperty(Y)||O===$||O===void 0&&$===void 0||os(e,t,Y,O,l,$);return}}for(var T in n)O=n[T],n.hasOwnProperty(T)&&O!=null&&!l.hasOwnProperty(T)&&Ae(e,t,T,null,l,O);for(V in l)O=l[V],$=n[V],!l.hasOwnProperty(V)||O===$||O==null&&$==null||Ae(e,t,V,O,l,$)}function v1(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function iy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var i=n[l],u=i.transferSize,h=i.initiatorType,g=i.duration;if(u&&g&&v1(h)){for(h=0,g=i.responseEnd,l+=1;l<n.length;l++){var j=n[l],A=j.startTime;if(A>g)break;var Y=j.transferSize,V=j.initiatorType;Y&&v1(V)&&(j=j.responseEnd,h+=Y*(j<g?1:(g-A)/(j-A)))}if(--l,t+=8*(u+h)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var us=null,cs=null;function lo(e){return e.nodeType===9?e:e.ownerDocument}function b1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function S1(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ss(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fs=null;function ry(){var e=window.event;return e&&e.type==="popstate"?e===fs?!1:(fs=e,!0):(fs=null,!1)}var w1=typeof setTimeout=="function"?setTimeout:void 0,oy=typeof clearTimeout=="function"?clearTimeout:void 0,j1=typeof Promise=="function"?Promise:void 0,uy=typeof queueMicrotask=="function"?queueMicrotask:typeof j1<"u"?function(e){return j1.resolve(null).then(e).catch(cy)}:w1;function cy(e){setTimeout(function(){throw e})}function la(e){return e==="head"}function E1(e,t){var n=t,l=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(i),Cl(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")Ni(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ni(n);for(var u=n.firstChild;u;){var h=u.nextSibling,g=u.nodeName;u[Fl]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=h}}else n==="body"&&Ni(e.ownerDocument.body);n=i}while(n);Cl(t)}function C1(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function ds(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ds(n),xu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function sy(e,t,n,l){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Fl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Zt(e.nextSibling),e===null)break}return null}function fy(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Zt(e.nextSibling),e===null))return null;return e}function z1(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Zt(e.nextSibling),e===null))return null;return e}function hs(e){return e.data==="$?"||e.data==="$~"}function ps(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function dy(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ms=null;function T1(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Zt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function M1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function A1(e,t,n){switch(t=lo(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Ni(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xu(e)}var Kt=new Map,R1=new Set;function io(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Mn=K.d;K.d={f:hy,r:py,D:my,C:gy,L:xy,m:yy,X:by,S:vy,M:Sy};function hy(){var e=Mn.f(),t=Fr();return e||t}function py(e){var t=Xa(e);t!==null&&t.tag===5&&t.type==="form"?Z0(t):Mn.r(e)}var wl=typeof document>"u"?null:document;function O1(e,t,n){var l=wl;if(l&&typeof t=="string"&&t){var i=Ht(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),R1.has(i)||(R1.add(i),e={rel:e,crossOrigin:n,href:t},l.querySelector(i)===null&&(t=l.createElement("link"),ft(t,"link",e),at(t),l.head.appendChild(t)))}}function my(e){Mn.D(e),O1("dns-prefetch",e,null)}function gy(e,t){Mn.C(e,t),O1("preconnect",e,t)}function xy(e,t,n){Mn.L(e,t,n);var l=wl;if(l&&e&&t){var i='link[rel="preload"][as="'+Ht(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+Ht(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+Ht(n.imageSizes)+'"]')):i+='[href="'+Ht(e)+'"]';var u=i;switch(t){case"style":u=jl(e);break;case"script":u=El(e)}Kt.has(u)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Kt.set(u,e),l.querySelector(i)!==null||t==="style"&&l.querySelector(_i(u))||t==="script"&&l.querySelector(Di(u))||(t=l.createElement("link"),ft(t,"link",e),at(t),l.head.appendChild(t)))}}function yy(e,t){Mn.m(e,t);var n=wl;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Ht(l)+'"][href="'+Ht(e)+'"]',u=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=El(e)}if(!Kt.has(u)&&(e=w({rel:"modulepreload",href:e},t),Kt.set(u,e),n.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Di(u)))return}l=n.createElement("link"),ft(l,"link",e),at(l),n.head.appendChild(l)}}}function vy(e,t,n){Mn.S(e,t,n);var l=wl;if(l&&e){var i=Va(l).hoistableStyles,u=jl(e);t=t||"default";var h=i.get(u);if(!h){var g={loading:0,preload:null};if(h=l.querySelector(_i(u)))g.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Kt.get(u))&&gs(e,n);var j=h=l.createElement("link");at(j),ft(j,"link",e),j._p=new Promise(function(A,Y){j.onload=A,j.onerror=Y}),j.addEventListener("load",function(){g.loading|=1}),j.addEventListener("error",function(){g.loading|=2}),g.loading|=4,ro(h,t,l)}h={type:"stylesheet",instance:h,count:1,state:g},i.set(u,h)}}}function by(e,t){Mn.X(e,t);var n=wl;if(n&&e){var l=Va(n).hoistableScripts,i=El(e),u=l.get(i);u||(u=n.querySelector(Di(i)),u||(e=w({src:e,async:!0},t),(t=Kt.get(i))&&xs(e,t),u=n.createElement("script"),at(u),ft(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(i,u))}}function Sy(e,t){Mn.M(e,t);var n=wl;if(n&&e){var l=Va(n).hoistableScripts,i=El(e),u=l.get(i);u||(u=n.querySelector(Di(i)),u||(e=w({src:e,async:!0,type:"module"},t),(t=Kt.get(i))&&xs(e,t),u=n.createElement("script"),at(u),ft(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(i,u))}}function N1(e,t,n,l){var i=(i=re.current)?io(i):null;if(!i)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=jl(n.href),n=Va(i).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=jl(n.href);var u=Va(i).hoistableStyles,h=u.get(e);if(h||(i=i.ownerDocument||i,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,h),(u=i.querySelector(_i(e)))&&!u._p&&(h.instance=u,h.state.loading=5),Kt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Kt.set(e,n),u||wy(i,e,n,h.state))),t&&l===null)throw Error(o(528,""));return h}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=El(n),n=Va(i).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function jl(e){return'href="'+Ht(e)+'"'}function _i(e){return'link[rel="stylesheet"]['+e+"]"}function _1(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function wy(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),ft(t,"link",n),at(t),e.head.appendChild(t))}function El(e){return'[src="'+Ht(e)+'"]'}function Di(e){return"script[async]"+e}function D1(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Ht(n.href)+'"]');if(l)return t.instance=l,at(l),l;var i=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),at(l),ft(l,"style",i),ro(l,n.precedence,e),t.instance=l;case"stylesheet":i=jl(n.href);var u=e.querySelector(_i(i));if(u)return t.state.loading|=4,t.instance=u,at(u),u;l=_1(n),(i=Kt.get(i))&&gs(l,i),u=(e.ownerDocument||e).createElement("link"),at(u);var h=u;return h._p=new Promise(function(g,j){h.onload=g,h.onerror=j}),ft(u,"link",l),t.state.loading|=4,ro(u,n.precedence,e),t.instance=u;case"script":return u=El(n.src),(i=e.querySelector(Di(u)))?(t.instance=i,at(i),i):(l=n,(i=Kt.get(u))&&(l=w({},n),xs(l,i)),e=e.ownerDocument||e,i=e.createElement("script"),at(i),ft(i,"link",l),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,ro(l,n.precedence,e));return t.instance}function ro(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,u=i,h=0;h<l.length;h++){var g=l[h];if(g.dataset.precedence===t)u=g;else if(u!==i)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function gs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function xs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var oo=null;function $1(e,t,n){if(oo===null){var l=new Map,i=oo=new Map;i.set(n,l)}else i=oo,l=i.get(n),l||(l=new Map,i.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var u=n[i];if(!(u[Fl]||u[ot]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var h=u.getAttribute(t)||"";h=e+h;var g=l.get(h);g?g.push(u):l.set(h,[u])}}return l}function k1(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function jy(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function B1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ey(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var i=jl(l.href),u=t.querySelector(_i(i));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=uo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=u,at(u);return}u=t.ownerDocument||t,l=_1(l),(i=Kt.get(i))&&gs(l,i),u=u.createElement("link"),at(u);var h=u;h._p=new Promise(function(g,j){h.onload=g,h.onerror=j}),ft(u,"link",l),n.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=uo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var ys=0;function Cy(e,t){return e.stylesheets&&e.count===0&&so(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&so(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&ys===0&&(ys=62500*iy());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&so(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>ys?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function uo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)so(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var co=null;function so(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,co=new Map,t.forEach(zy,e),co=null,uo.call(e))}function zy(e,t){if(!(t.state.loading&4)){var n=co.get(e);if(n)var l=n.get(null);else{n=new Map,co.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<i.length;u++){var h=i[u];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),l=h)}l&&n.set(null,l)}i=t.instance,h=i.getAttribute("data-precedence"),u=n.get(h)||l,u===l&&n.set(null,i),n.set(h,i),this.count++,l=uo.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),u?u.parentNode.insertBefore(i,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var $i={$$typeof:N,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function Ty(e,t,n,l,i,u,h,g,j){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hu(0),this.hiddenUpdates=hu(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=u,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function L1(e,t,n,l,i,u,h,g,j,A,Y,V){return e=new Ty(e,t,n,h,j,A,Y,V,g),t=1,u===!0&&(t|=24),u=Ot(3,null,null,t),e.current=u,u.stateNode=e,t=Wu(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:l,isDehydrated:n,cache:t},tc(u),e}function U1(e){return e?(e=tl,e):tl}function H1(e,t,n,l,i,u){i=U1(i),l.context===null?l.context=i:l.pendingContext=i,l=Zn(t),l.payload={element:n},u=u===void 0?null:u,u!==null&&(l.callback=u),n=Kn(e,l,t),n!==null&&(jt(n,e,t),hi(n,e,t))}function Y1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vs(e,t){Y1(e,t),(e=e.alternate)&&Y1(e,t)}function G1(e){if(e.tag===13||e.tag===31){var t=ja(e,67108864);t!==null&&jt(t,e,67108864),vs(e,67108864)}}function q1(e){if(e.tag===13||e.tag===31){var t=kt();t=pu(t);var n=ja(e,t);n!==null&&jt(n,e,t),vs(e,t)}}var fo=!0;function My(e,t,n,l){var i=k.T;k.T=null;var u=K.p;try{K.p=2,bs(e,t,n,l)}finally{K.p=u,k.T=i}}function Ay(e,t,n,l){var i=k.T;k.T=null;var u=K.p;try{K.p=8,bs(e,t,n,l)}finally{K.p=u,k.T=i}}function bs(e,t,n,l){if(fo){var i=Ss(l);if(i===null)rs(e,t,l,ho,n),V1(e,l);else if(Oy(i,e,t,n,l))l.stopPropagation();else if(V1(e,l),t&4&&-1<Ry.indexOf(e)){for(;i!==null;){var u=Xa(i);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var h=ya(u.pendingLanes);if(h!==0){var g=u;for(g.pendingLanes|=2,g.entangledLanes|=2;h;){var j=1<<31-At(h);g.entanglements[1]|=j,h&=~j}rn(u),(je&6)===0&&(Kr=Tt()+500,Ai(0))}}break;case 31:case 13:g=ja(u,2),g!==null&&jt(g,u,2),Fr(),vs(u,2)}if(u=Ss(l),u===null&&rs(e,t,l,ho,n),u===i)break;i=u}i!==null&&l.stopPropagation()}else rs(e,t,l,null,n)}}function Ss(e){return e=ju(e),ws(e)}var ho=null;function ws(e){if(ho=null,e=qa(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ho=e,null}function X1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(m2()){case If:return 2;case Pf:return 8;case tr:case g2:return 32;case ed:return 268435456;default:return 32}default:return 32}}var js=!1,ia=null,ra=null,oa=null,ki=new Map,Bi=new Map,ua=[],Ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function V1(e,t){switch(e){case"focusin":case"focusout":ia=null;break;case"dragenter":case"dragleave":ra=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":ki.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bi.delete(t.pointerId)}}function Li(e,t,n,l,i,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:u,targetContainers:[i]},t!==null&&(t=Xa(t),t!==null&&G1(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Oy(e,t,n,l,i){switch(t){case"focusin":return ia=Li(ia,e,t,n,l,i),!0;case"dragenter":return ra=Li(ra,e,t,n,l,i),!0;case"mouseover":return oa=Li(oa,e,t,n,l,i),!0;case"pointerover":var u=i.pointerId;return ki.set(u,Li(ki.get(u)||null,e,t,n,l,i)),!0;case"gotpointercapture":return u=i.pointerId,Bi.set(u,Li(Bi.get(u)||null,e,t,n,l,i)),!0}return!1}function Q1(e){var t=qa(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,rd(e.priority,function(){q1(n)});return}}else if(t===31){if(t=y(n),t!==null){e.blockedOn=t,rd(e.priority,function(){q1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function po(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ss(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);wu=l,n.target.dispatchEvent(l),wu=null}else return t=Xa(n),t!==null&&G1(t),e.blockedOn=n,!1;t.shift()}return!0}function Z1(e,t,n){po(e)&&n.delete(t)}function Ny(){js=!1,ia!==null&&po(ia)&&(ia=null),ra!==null&&po(ra)&&(ra=null),oa!==null&&po(oa)&&(oa=null),ki.forEach(Z1),Bi.forEach(Z1)}function mo(e,t){e.blockedOn===t&&(e.blockedOn=null,js||(js=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Ny)))}var go=null;function K1(e){go!==e&&(go=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){go===e&&(go=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],i=e[t+2];if(typeof l!="function"){if(ws(l||n)===null)continue;break}var u=Xa(n);u!==null&&(e.splice(t,3),t-=3,Sc(u,{pending:!0,data:i,method:n.method,action:l},l,i))}}))}function Cl(e){function t(j){return mo(j,e)}ia!==null&&mo(ia,e),ra!==null&&mo(ra,e),oa!==null&&mo(oa,e),ki.forEach(t),Bi.forEach(t);for(var n=0;n<ua.length;n++){var l=ua[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ua.length&&(n=ua[0],n.blockedOn===null);)Q1(n),n.blockedOn===null&&ua.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var i=n[l],u=n[l+1],h=i[xt]||null;if(typeof u=="function")h||K1(n);else if(h){var g=null;if(u&&u.hasAttribute("formAction")){if(i=u,h=u[xt]||null)g=h.formAction;else if(ws(i)!==null)continue}else g=h.action;typeof g=="function"?n[l+1]=g:(n.splice(l,3),l-=3),K1(n)}}}function J1(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(h){return i=h})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Es(e){this._internalRoot=e}xo.prototype.render=Es.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,l=kt();H1(n,l,e,t,null,null)},xo.prototype.unmount=Es.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;H1(e.current,2,null,e,null,null),Fr(),t[Ga]=null}};function xo(e){this._internalRoot=e}xo.prototype.unstable_scheduleHydration=function(e){if(e){var t=id();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ua.length&&t!==0&&t<ua[n].priority;n++);ua.splice(n,0,e),n===0&&Q1(e)}};var F1=r.version;if(F1!=="19.2.0")throw Error(o(527,F1,"19.2.0"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=m(t),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var _y={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yo.isDisabled&&yo.supportsFiber)try{Zl=yo.inject(_y),Mt=yo}catch{}}return Hi.createRoot=function(e,t){if(!f(e))throw Error(o(299));var n=!1,l="",i=ah,u=lh,h=ih;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),t=L1(e,1,!1,null,null,n,l,null,i,u,h,J1),e[Ga]=t.current,is(e),new Es(t)},Hi.hydrateRoot=function(e,t,n){if(!f(e))throw Error(o(299));var l=!1,i="",u=ah,h=lh,g=ih,j=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.formState!==void 0&&(j=n.formState)),t=L1(e,1,!0,t,n??null,l,i,j,u,h,g,J1),t.context=U1(null),n=t.current,l=kt(),l=pu(l),i=Zn(l),i.callback=null,Kn(n,i,l),n=l,t.current.lanes=n,Jl(t,n),rn(t),e[Ga]=t.current,is(e),new xo(t)},Hi.version="19.2.0",Hi}var rp;function Gy(){if(rp)return Ts.exports;rp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Ts.exports=Yy(),Ts.exports}var qy=Gy();const Xy=Fi(qy);/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var op="popstate";function Vy(a={}){function r(o,f){let{pathname:d,search:p,hash:y}=o.location;return uf("",{pathname:d,search:p,hash:y},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function c(o,f){return typeof f=="string"?f:Zi(f)}return Zy(r,c,null,a)}function Ye(a,r){if(a===!1||a===null||typeof a>"u")throw new Error(r)}function cn(a,r){if(!a){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Qy(){return Math.random().toString(36).substring(2,10)}function up(a,r){return{usr:a.state,key:a.key,idx:r}}function uf(a,r,c=null,o){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof r=="string"?Hl(r):r,state:c,key:r&&r.key||o||Qy()}}function Zi({pathname:a="/",search:r="",hash:c=""}){return r&&r!=="?"&&(a+=r.charAt(0)==="?"?r:"?"+r),c&&c!=="#"&&(a+=c.charAt(0)==="#"?c:"#"+c),a}function Hl(a){let r={};if(a){let c=a.indexOf("#");c>=0&&(r.hash=a.substring(c),a=a.substring(0,c));let o=a.indexOf("?");o>=0&&(r.search=a.substring(o),a=a.substring(0,o)),a&&(r.pathname=a)}return r}function Zy(a,r,c,o={}){let{window:f=document.defaultView,v5Compat:d=!1}=o,p=f.history,y="POP",x=null,m=S();m==null&&(m=0,p.replaceState({...p.state,idx:m},""));function S(){return(p.state||{idx:null}).idx}function w(){y="POP";let D=S(),L=D==null?null:D-m;m=D,x&&x({action:y,location:B.location,delta:L})}function z(D,L){y="PUSH";let H=uf(B.location,D,L);m=S()+1;let N=up(H,m),X=B.createHref(H);try{p.pushState(N,"",X)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;f.location.assign(X)}d&&x&&x({action:y,location:B.location,delta:1})}function _(D,L){y="REPLACE";let H=uf(B.location,D,L);m=S();let N=up(H,m),X=B.createHref(H);p.replaceState(N,"",X),d&&x&&x({action:y,location:B.location,delta:0})}function R(D){return Ky(D)}let B={get action(){return y},get location(){return a(f,p)},listen(D){if(x)throw new Error("A history only accepts one active listener");return f.addEventListener(op,w),x=D,()=>{f.removeEventListener(op,w),x=null}},createHref(D){return r(f,D)},createURL:R,encodeLocation(D){let L=R(D);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:z,replace:_,go(D){return p.go(D)}};return B}function Ky(a,r=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Ye(c,"No window.location.(origin|href) available to create URL");let o=typeof a=="string"?a:Zi(a);return o=o.replace(/ $/,"%20"),!r&&o.startsWith("//")&&(o=c+o),new URL(o,c)}function Rm(a,r,c="/"){return Jy(a,r,c,!1)}function Jy(a,r,c,o){let f=typeof r=="string"?Hl(r):r,d=$n(f.pathname||"/",c);if(d==null)return null;let p=Om(a);Fy(p);let y=null;for(let x=0;y==null&&x<p.length;++x){let m=ov(d);y=iv(p[x],m,o)}return y}function Om(a,r=[],c=[],o="",f=!1){let d=(p,y,x=f,m)=>{let S={relativePath:m===void 0?p.path||"":m,caseSensitive:p.caseSensitive===!0,childrenIndex:y,route:p};if(S.relativePath.startsWith("/")){if(!S.relativePath.startsWith(o)&&x)return;Ye(S.relativePath.startsWith(o),`Absolute route path "${S.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),S.relativePath=S.relativePath.slice(o.length)}let w=_n([o,S.relativePath]),z=c.concat(S);p.children&&p.children.length>0&&(Ye(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),Om(p.children,r,z,w,x)),!(p.path==null&&!p.index)&&r.push({path:w,score:av(w,p.index),routesMeta:z})};return a.forEach((p,y)=>{if(p.path===""||!p.path?.includes("?"))d(p,y);else for(let x of Nm(p.path))d(p,y,!0,x)}),r}function Nm(a){let r=a.split("/");if(r.length===0)return[];let[c,...o]=r,f=c.endsWith("?"),d=c.replace(/\?$/,"");if(o.length===0)return f?[d,""]:[d];let p=Nm(o.join("/")),y=[];return y.push(...p.map(x=>x===""?d:[d,x].join("/"))),f&&y.push(...p),y.map(x=>a.startsWith("/")&&x===""?"/":x)}function Fy(a){a.sort((r,c)=>r.score!==c.score?c.score-r.score:lv(r.routesMeta.map(o=>o.childrenIndex),c.routesMeta.map(o=>o.childrenIndex)))}var Wy=/^:[\w-]+$/,Iy=3,Py=2,ev=1,tv=10,nv=-2,cp=a=>a==="*";function av(a,r){let c=a.split("/"),o=c.length;return c.some(cp)&&(o+=nv),r&&(o+=Py),c.filter(f=>!cp(f)).reduce((f,d)=>f+(Wy.test(d)?Iy:d===""?ev:tv),o)}function lv(a,r){return a.length===r.length&&a.slice(0,-1).every((o,f)=>o===r[f])?a[a.length-1]-r[r.length-1]:0}function iv(a,r,c=!1){let{routesMeta:o}=a,f={},d="/",p=[];for(let y=0;y<o.length;++y){let x=o[y],m=y===o.length-1,S=d==="/"?r:r.slice(d.length)||"/",w=Ho({path:x.relativePath,caseSensitive:x.caseSensitive,end:m},S),z=x.route;if(!w&&m&&c&&!o[o.length-1].route.index&&(w=Ho({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},S)),!w)return null;Object.assign(f,w.params),p.push({params:f,pathname:_n([d,w.pathname]),pathnameBase:fv(_n([d,w.pathnameBase])),route:z}),w.pathnameBase!=="/"&&(d=_n([d,w.pathnameBase]))}return p}function Ho(a,r){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[c,o]=rv(a.path,a.caseSensitive,a.end),f=r.match(c);if(!f)return null;let d=f[0],p=d.replace(/(.)\/+$/,"$1"),y=f.slice(1);return{params:o.reduce((m,{paramName:S,isOptional:w},z)=>{if(S==="*"){let R=y[z]||"";p=d.slice(0,d.length-R.length).replace(/(.)\/+$/,"$1")}const _=y[z];return w&&!_?m[S]=void 0:m[S]=(_||"").replace(/%2F/g,"/"),m},{}),pathname:d,pathnameBase:p,pattern:a}}function rv(a,r=!1,c=!0){cn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let o=[],f="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,y,x)=>(o.push({paramName:y,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(o.push({paramName:"*"}),f+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?f+="\\/*$":a!==""&&a!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,r?void 0:"i"),o]}function ov(a){try{return a.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return cn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),a}}function $n(a,r){if(r==="/")return a;if(!a.toLowerCase().startsWith(r.toLowerCase()))return null;let c=r.endsWith("/")?r.length-1:r.length,o=a.charAt(c);return o&&o!=="/"?null:a.slice(c)||"/"}function uv(a,r="/"){let{pathname:c,search:o="",hash:f=""}=typeof a=="string"?Hl(a):a;return{pathname:c?c.startsWith("/")?c:cv(c,r):r,search:dv(o),hash:hv(f)}}function cv(a,r){let c=r.replace(/\/+$/,"").split("/");return a.split("/").forEach(f=>{f===".."?c.length>1&&c.pop():f!=="."&&c.push(f)}),c.length>1?c.join("/"):"/"}function Os(a,r,c,o){return`Cannot include a '${a}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function sv(a){return a.filter((r,c)=>c===0||r.route.path&&r.route.path.length>0)}function _m(a){let r=sv(a);return r.map((c,o)=>o===r.length-1?c.pathname:c.pathnameBase)}function Dm(a,r,c,o=!1){let f;typeof a=="string"?f=Hl(a):(f={...a},Ye(!f.pathname||!f.pathname.includes("?"),Os("?","pathname","search",f)),Ye(!f.pathname||!f.pathname.includes("#"),Os("#","pathname","hash",f)),Ye(!f.search||!f.search.includes("#"),Os("#","search","hash",f)));let d=a===""||f.pathname==="",p=d?"/":f.pathname,y;if(p==null)y=c;else{let w=r.length-1;if(!o&&p.startsWith("..")){let z=p.split("/");for(;z[0]==="..";)z.shift(),w-=1;f.pathname=z.join("/")}y=w>=0?r[w]:"/"}let x=uv(f,y),m=p&&p!=="/"&&p.endsWith("/"),S=(d||p===".")&&c.endsWith("/");return!x.pathname.endsWith("/")&&(m||S)&&(x.pathname+="/"),x}var _n=a=>a.join("/").replace(/\/\/+/g,"/"),fv=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),dv=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,hv=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function pv(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var $m=["POST","PUT","PATCH","DELETE"];new Set($m);var mv=["GET",...$m];new Set(mv);var Yl=v.createContext(null);Yl.displayName="DataRouter";var Fo=v.createContext(null);Fo.displayName="DataRouterState";v.createContext(!1);var km=v.createContext({isTransitioning:!1});km.displayName="ViewTransition";var gv=v.createContext(new Map);gv.displayName="Fetchers";var xv=v.createContext(null);xv.displayName="Await";var sn=v.createContext(null);sn.displayName="Navigation";var Wi=v.createContext(null);Wi.displayName="Location";var kn=v.createContext({outlet:null,matches:[],isDataRoute:!1});kn.displayName="Route";var Ef=v.createContext(null);Ef.displayName="RouteError";function yv(a,{relative:r}={}){Ye(Ii(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:o}=v.useContext(sn),{hash:f,pathname:d,search:p}=Pi(a,{relative:r}),y=d;return c!=="/"&&(y=d==="/"?c:_n([c,d])),o.createHref({pathname:y,search:p,hash:f})}function Ii(){return v.useContext(Wi)!=null}function Bn(){return Ye(Ii(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(Wi).location}var Bm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Lm(a){v.useContext(sn).static||v.useLayoutEffect(a)}function Cf(){let{isDataRoute:a}=v.useContext(kn);return a?Ov():vv()}function vv(){Ye(Ii(),"useNavigate() may be used only in the context of a <Router> component.");let a=v.useContext(Yl),{basename:r,navigator:c}=v.useContext(sn),{matches:o}=v.useContext(kn),{pathname:f}=Bn(),d=JSON.stringify(_m(o)),p=v.useRef(!1);return Lm(()=>{p.current=!0}),v.useCallback((x,m={})=>{if(cn(p.current,Bm),!p.current)return;if(typeof x=="number"){c.go(x);return}let S=Dm(x,JSON.parse(d),f,m.relative==="path");a==null&&r!=="/"&&(S.pathname=S.pathname==="/"?r:_n([r,S.pathname])),(m.replace?c.replace:c.push)(S,m.state,m)},[r,c,d,f,a])}v.createContext(null);function Pi(a,{relative:r}={}){let{matches:c}=v.useContext(kn),{pathname:o}=Bn(),f=JSON.stringify(_m(c));return v.useMemo(()=>Dm(a,JSON.parse(f),o,r==="path"),[a,f,o,r])}function bv(a,r){return Um(a,r)}function Um(a,r,c,o,f){Ye(Ii(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=v.useContext(sn),{matches:p}=v.useContext(kn),y=p[p.length-1],x=y?y.params:{},m=y?y.pathname:"/",S=y?y.pathnameBase:"/",w=y&&y.route;{let H=w&&w.path||"";Hm(m,!w||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let z=Bn(),_;if(r){let H=typeof r=="string"?Hl(r):r;Ye(S==="/"||H.pathname?.startsWith(S),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${H.pathname}" was given in the \`location\` prop.`),_=H}else _=z;let R=_.pathname||"/",B=R;if(S!=="/"){let H=S.replace(/^\//,"").split("/");B="/"+R.replace(/^\//,"").split("/").slice(H.length).join("/")}let D=Rm(a,{pathname:B});cn(w||D!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),cn(D==null||D[D.length-1].route.element!==void 0||D[D.length-1].route.Component!==void 0||D[D.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=Cv(D&&D.map(H=>Object.assign({},H,{params:Object.assign({},x,H.params),pathname:_n([S,d.encodeLocation?d.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?S:_n([S,d.encodeLocation?d.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),p,c,o,f);return r&&L?v.createElement(Wi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},L):L}function Sv(){let a=Rv(),r=pv(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),c=a instanceof Error?a.stack:null,o="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:o},d={padding:"2px 4px",backgroundColor:o},p=null;return console.error("Error handled by React Router default ErrorBoundary:",a),p=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:d},"ErrorBoundary")," or"," ",v.createElement("code",{style:d},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},r),c?v.createElement("pre",{style:f},c):null,p)}var wv=v.createElement(Sv,null),jv=class extends v.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,r){return r.location!==a.location||r.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:r.error,location:r.location,revalidation:a.revalidation||r.revalidation}}componentDidCatch(a,r){this.props.unstable_onError?this.props.unstable_onError(a,r):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?v.createElement(kn.Provider,{value:this.props.routeContext},v.createElement(Ef.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Ev({routeContext:a,match:r,children:c}){let o=v.useContext(Yl);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),v.createElement(kn.Provider,{value:a},c)}function Cv(a,r=[],c=null,o=null,f=null){if(a==null){if(!c)return null;if(c.errors)a=c.matches;else if(r.length===0&&!c.initialized&&c.matches.length>0)a=c.matches;else return null}let d=a,p=c?.errors;if(p!=null){let m=d.findIndex(S=>S.route.id&&p?.[S.route.id]!==void 0);Ye(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),d=d.slice(0,Math.min(d.length,m+1))}let y=!1,x=-1;if(c)for(let m=0;m<d.length;m++){let S=d[m];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(x=m),S.route.id){let{loaderData:w,errors:z}=c,_=S.route.loader&&!w.hasOwnProperty(S.route.id)&&(!z||z[S.route.id]===void 0);if(S.route.lazy||_){y=!0,x>=0?d=d.slice(0,x+1):d=[d[0]];break}}}return d.reduceRight((m,S,w)=>{let z,_=!1,R=null,B=null;c&&(z=p&&S.route.id?p[S.route.id]:void 0,R=S.route.errorElement||wv,y&&(x<0&&w===0?(Hm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,B=null):x===w&&(_=!0,B=S.route.hydrateFallbackElement||null)));let D=r.concat(d.slice(0,w+1)),L=()=>{let H;return z?H=R:_?H=B:S.route.Component?H=v.createElement(S.route.Component,null):S.route.element?H=S.route.element:H=m,v.createElement(Ev,{match:S,routeContext:{outlet:m,matches:D,isDataRoute:c!=null},children:H})};return c&&(S.route.ErrorBoundary||S.route.errorElement||w===0)?v.createElement(jv,{location:c.location,revalidation:c.revalidation,component:R,error:z,children:L(),routeContext:{outlet:null,matches:D,isDataRoute:!0},unstable_onError:o}):L()},null)}function zf(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zv(a){let r=v.useContext(Yl);return Ye(r,zf(a)),r}function Tv(a){let r=v.useContext(Fo);return Ye(r,zf(a)),r}function Mv(a){let r=v.useContext(kn);return Ye(r,zf(a)),r}function Tf(a){let r=Mv(a),c=r.matches[r.matches.length-1];return Ye(c.route.id,`${a} can only be used on routes that contain a unique "id"`),c.route.id}function Av(){return Tf("useRouteId")}function Rv(){let a=v.useContext(Ef),r=Tv("useRouteError"),c=Tf("useRouteError");return a!==void 0?a:r.errors?.[c]}function Ov(){let{router:a}=zv("useNavigate"),r=Tf("useNavigate"),c=v.useRef(!1);return Lm(()=>{c.current=!0}),v.useCallback(async(f,d={})=>{cn(c.current,Bm),c.current&&(typeof f=="number"?a.navigate(f):await a.navigate(f,{fromRouteId:r,...d}))},[a,r])}var sp={};function Hm(a,r,c){!r&&!sp[a]&&(sp[a]=!0,cn(!1,c))}v.memo(Nv);function Nv({routes:a,future:r,state:c,unstable_onError:o}){return Um(a,void 0,c,o,r)}function ka(a){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function _v({basename:a="/",children:r=null,location:c,navigationType:o="POP",navigator:f,static:d=!1}){Ye(!Ii(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=a.replace(/^\/*/,"/"),y=v.useMemo(()=>({basename:p,navigator:f,static:d,future:{}}),[p,f,d]);typeof c=="string"&&(c=Hl(c));let{pathname:x="/",search:m="",hash:S="",state:w=null,key:z="default"}=c,_=v.useMemo(()=>{let R=$n(x,p);return R==null?null:{location:{pathname:R,search:m,hash:S,state:w,key:z},navigationType:o}},[p,x,m,S,w,z,o]);return cn(_!=null,`<Router basename="${p}"> is not able to match the URL "${x}${m}${S}" because it does not start with the basename, so the <Router> won't render anything.`),_==null?null:v.createElement(sn.Provider,{value:y},v.createElement(Wi.Provider,{children:r,value:_}))}function Dv({children:a,location:r}){return bv(cf(a),r)}function cf(a,r=[]){let c=[];return v.Children.forEach(a,(o,f)=>{if(!v.isValidElement(o))return;let d=[...r,f];if(o.type===v.Fragment){c.push.apply(c,cf(o.props.children,d));return}Ye(o.type===ka,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!o.props.index||!o.props.children,"An index route cannot have child routes.");let p={id:o.props.id||d.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(p.children=cf(o.props.children,d)),c.push(p)}),c}var No="get",_o="application/x-www-form-urlencoded";function Wo(a){return a!=null&&typeof a.tagName=="string"}function $v(a){return Wo(a)&&a.tagName.toLowerCase()==="button"}function kv(a){return Wo(a)&&a.tagName.toLowerCase()==="form"}function Bv(a){return Wo(a)&&a.tagName.toLowerCase()==="input"}function Lv(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function Uv(a,r){return a.button===0&&(!r||r==="_self")&&!Lv(a)}var vo=null;function Hv(){if(vo===null)try{new FormData(document.createElement("form"),0),vo=!1}catch{vo=!0}return vo}var Yv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ns(a){return a!=null&&!Yv.has(a)?(cn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${_o}"`),null):a}function Gv(a,r){let c,o,f,d,p;if(kv(a)){let y=a.getAttribute("action");o=y?$n(y,r):null,c=a.getAttribute("method")||No,f=Ns(a.getAttribute("enctype"))||_o,d=new FormData(a)}else if($v(a)||Bv(a)&&(a.type==="submit"||a.type==="image")){let y=a.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=a.getAttribute("formaction")||y.getAttribute("action");if(o=x?$n(x,r):null,c=a.getAttribute("formmethod")||y.getAttribute("method")||No,f=Ns(a.getAttribute("formenctype"))||Ns(y.getAttribute("enctype"))||_o,d=new FormData(y,a),!Hv()){let{name:m,type:S,value:w}=a;if(S==="image"){let z=m?`${m}.`:"";d.append(`${z}x`,"0"),d.append(`${z}y`,"0")}else m&&d.append(m,w)}}else{if(Wo(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=No,o=null,f=_o,p=a}return d&&f==="text/plain"&&(p=d,d=void 0),{action:o,method:c.toLowerCase(),encType:f,formData:d,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Mf(a,r){if(a===!1||a===null||typeof a>"u")throw new Error(r)}function qv(a,r,c){let o=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return o.pathname==="/"?o.pathname=`_root.${c}`:r&&$n(o.pathname,r)==="/"?o.pathname=`${r.replace(/\/$/,"")}/_root.${c}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${c}`,o}async function Xv(a,r){if(a.id in r)return r[a.id];try{let c=await import(a.module);return r[a.id]=c,c}catch(c){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Vv(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Qv(a,r,c){let o=await Promise.all(a.map(async f=>{let d=r.routes[f.route.id];if(d){let p=await Xv(d,c);return p.links?p.links():[]}return[]}));return Fv(o.flat(1).filter(Vv).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function fp(a,r,c,o,f,d){let p=(x,m)=>c[m]?x.route.id!==c[m].route.id:!0,y=(x,m)=>c[m].pathname!==x.pathname||c[m].route.path?.endsWith("*")&&c[m].params["*"]!==x.params["*"];return d==="assets"?r.filter((x,m)=>p(x,m)||y(x,m)):d==="data"?r.filter((x,m)=>{let S=o.routes[x.route.id];if(!S||!S.hasLoader)return!1;if(p(x,m)||y(x,m))return!0;if(x.route.shouldRevalidate){let w=x.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function Zv(a,r,{includeHydrateFallback:c}={}){return Kv(a.map(o=>{let f=r.routes[o.route.id];if(!f)return[];let d=[f.module];return f.clientActionModule&&(d=d.concat(f.clientActionModule)),f.clientLoaderModule&&(d=d.concat(f.clientLoaderModule)),c&&f.hydrateFallbackModule&&(d=d.concat(f.hydrateFallbackModule)),f.imports&&(d=d.concat(f.imports)),d}).flat(1))}function Kv(a){return[...new Set(a)]}function Jv(a){let r={},c=Object.keys(a).sort();for(let o of c)r[o]=a[o];return r}function Fv(a,r){let c=new Set;return new Set(r),a.reduce((o,f)=>{let d=JSON.stringify(Jv(f));return c.has(d)||(c.add(d),o.push({key:d,link:f})),o},[])}function Ym(){let a=v.useContext(Yl);return Mf(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function Wv(){let a=v.useContext(Fo);return Mf(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Af=v.createContext(void 0);Af.displayName="FrameworkContext";function Gm(){let a=v.useContext(Af);return Mf(a,"You must render this element inside a <HydratedRouter> element"),a}function Iv(a,r){let c=v.useContext(Af),[o,f]=v.useState(!1),[d,p]=v.useState(!1),{onFocus:y,onBlur:x,onMouseEnter:m,onMouseLeave:S,onTouchStart:w}=r,z=v.useRef(null);v.useEffect(()=>{if(a==="render"&&p(!0),a==="viewport"){let B=L=>{L.forEach(H=>{p(H.isIntersecting)})},D=new IntersectionObserver(B,{threshold:.5});return z.current&&D.observe(z.current),()=>{D.disconnect()}}},[a]),v.useEffect(()=>{if(o){let B=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(B)}}},[o]);let _=()=>{f(!0)},R=()=>{f(!1),p(!1)};return c?a!=="intent"?[d,z,{}]:[d,z,{onFocus:Yi(y,_),onBlur:Yi(x,R),onMouseEnter:Yi(m,_),onMouseLeave:Yi(S,R),onTouchStart:Yi(w,_)}]:[!1,z,{}]}function Yi(a,r){return c=>{a&&a(c),c.defaultPrevented||r(c)}}function Pv({page:a,...r}){let{router:c}=Ym(),o=v.useMemo(()=>Rm(c.routes,a,c.basename),[c.routes,a,c.basename]);return o?v.createElement(tb,{page:a,matches:o,...r}):null}function eb(a){let{manifest:r,routeModules:c}=Gm(),[o,f]=v.useState([]);return v.useEffect(()=>{let d=!1;return Qv(a,r,c).then(p=>{d||f(p)}),()=>{d=!0}},[a,r,c]),o}function tb({page:a,matches:r,...c}){let o=Bn(),{manifest:f,routeModules:d}=Gm(),{basename:p}=Ym(),{loaderData:y,matches:x}=Wv(),m=v.useMemo(()=>fp(a,r,x,f,o,"data"),[a,r,x,f,o]),S=v.useMemo(()=>fp(a,r,x,f,o,"assets"),[a,r,x,f,o]),w=v.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let R=new Set,B=!1;if(r.forEach(L=>{let H=f.routes[L.route.id];!H||!H.hasLoader||(!m.some(N=>N.route.id===L.route.id)&&L.route.id in y&&d[L.route.id]?.shouldRevalidate||H.hasClientLoader?B=!0:R.add(L.route.id))}),R.size===0)return[];let D=qv(a,p,"data");return B&&R.size>0&&D.searchParams.set("_routes",r.filter(L=>R.has(L.route.id)).map(L=>L.route.id).join(",")),[D.pathname+D.search]},[p,y,o,f,m,r,a,d]),z=v.useMemo(()=>Zv(S,f),[S,f]),_=eb(S);return v.createElement(v.Fragment,null,w.map(R=>v.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...c})),z.map(R=>v.createElement("link",{key:R,rel:"modulepreload",href:R,...c})),_.map(({key:R,link:B})=>v.createElement("link",{key:R,nonce:c.nonce,...B})))}function nb(...a){return r=>{a.forEach(c=>{typeof c=="function"?c(r):c!=null&&(c.current=r)})}}var qm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{qm&&(window.__reactRouterVersion="7.9.4")}catch{}function ab({basename:a,children:r,window:c}){let o=v.useRef();o.current==null&&(o.current=Vy({window:c,v5Compat:!0}));let f=o.current,[d,p]=v.useState({action:f.action,location:f.location}),y=v.useCallback(x=>{v.startTransition(()=>p(x))},[p]);return v.useLayoutEffect(()=>f.listen(y),[f,y]),v.createElement(_v,{basename:a,children:r,location:d.location,navigationType:d.action,navigator:f})}var Xm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gl=v.forwardRef(function({onClick:r,discover:c="render",prefetch:o="none",relative:f,reloadDocument:d,replace:p,state:y,target:x,to:m,preventScrollReset:S,viewTransition:w,...z},_){let{basename:R}=v.useContext(sn),B=typeof m=="string"&&Xm.test(m),D,L=!1;if(typeof m=="string"&&B&&(D=m,qm))try{let ue=new URL(window.location.href),Ce=m.startsWith("//")?new URL(ue.protocol+m):new URL(m),Be=$n(Ce.pathname,R);Ce.origin===ue.origin&&Be!=null?m=Be+Ce.search+Ce.hash:L=!0}catch{cn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let H=yv(m,{relative:f}),[N,X,Z]=Iv(o,z),U=ob(m,{replace:p,state:y,target:x,preventScrollReset:S,relative:f,viewTransition:w});function Q(ue){r&&r(ue),ue.defaultPrevented||U(ue)}let P=v.createElement("a",{...z,...Z,href:D||H,onClick:L||d?r:Q,ref:nb(_,X),target:x,"data-discover":!B&&c==="render"?"true":void 0});return N&&!B?v.createElement(v.Fragment,null,P,v.createElement(Pv,{page:H})):P});Gl.displayName="Link";var lb=v.forwardRef(function({"aria-current":r="page",caseSensitive:c=!1,className:o="",end:f=!1,style:d,to:p,viewTransition:y,children:x,...m},S){let w=Pi(p,{relative:m.relative}),z=Bn(),_=v.useContext(Fo),{navigator:R,basename:B}=v.useContext(sn),D=_!=null&&db(w)&&y===!0,L=R.encodeLocation?R.encodeLocation(w).pathname:w.pathname,H=z.pathname,N=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;c||(H=H.toLowerCase(),N=N?N.toLowerCase():null,L=L.toLowerCase()),N&&B&&(N=$n(N,B)||N);const X=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let Z=H===L||!f&&H.startsWith(L)&&H.charAt(X)==="/",U=N!=null&&(N===L||!f&&N.startsWith(L)&&N.charAt(L.length)==="/"),Q={isActive:Z,isPending:U,isTransitioning:D},P=Z?r:void 0,ue;typeof o=="function"?ue=o(Q):ue=[o,Z?"active":null,U?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let Ce=typeof d=="function"?d(Q):d;return v.createElement(Gl,{...m,"aria-current":P,className:ue,ref:S,style:Ce,to:p,viewTransition:y},typeof x=="function"?x(Q):x)});lb.displayName="NavLink";var ib=v.forwardRef(({discover:a="render",fetcherKey:r,navigate:c,reloadDocument:o,replace:f,state:d,method:p=No,action:y,onSubmit:x,relative:m,preventScrollReset:S,viewTransition:w,...z},_)=>{let R=sb(),B=fb(y,{relative:m}),D=p.toLowerCase()==="get"?"get":"post",L=typeof y=="string"&&Xm.test(y),H=N=>{if(x&&x(N),N.defaultPrevented)return;N.preventDefault();let X=N.nativeEvent.submitter,Z=X?.getAttribute("formmethod")||p;R(X||N.currentTarget,{fetcherKey:r,method:Z,navigate:c,replace:f,state:d,relative:m,preventScrollReset:S,viewTransition:w})};return v.createElement("form",{ref:_,method:D,action:B,onSubmit:o?x:H,...z,"data-discover":!L&&a==="render"?"true":void 0})});ib.displayName="Form";function rb(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vm(a){let r=v.useContext(Yl);return Ye(r,rb(a)),r}function ob(a,{target:r,replace:c,state:o,preventScrollReset:f,relative:d,viewTransition:p}={}){let y=Cf(),x=Bn(),m=Pi(a,{relative:d});return v.useCallback(S=>{if(Uv(S,r)){S.preventDefault();let w=c!==void 0?c:Zi(x)===Zi(m);y(a,{replace:w,state:o,preventScrollReset:f,relative:d,viewTransition:p})}},[x,y,m,c,o,r,a,f,d,p])}var ub=0,cb=()=>`__${String(++ub)}__`;function sb(){let{router:a}=Vm("useSubmit"),{basename:r}=v.useContext(sn),c=Av();return v.useCallback(async(o,f={})=>{let{action:d,method:p,encType:y,formData:x,body:m}=Gv(o,r);if(f.navigate===!1){let S=f.fetcherKey||cb();await a.fetch(S,c,f.action||d,{preventScrollReset:f.preventScrollReset,formData:x,body:m,formMethod:f.method||p,formEncType:f.encType||y,flushSync:f.flushSync})}else await a.navigate(f.action||d,{preventScrollReset:f.preventScrollReset,formData:x,body:m,formMethod:f.method||p,formEncType:f.encType||y,replace:f.replace,state:f.state,fromRouteId:c,flushSync:f.flushSync,viewTransition:f.viewTransition})},[a,r,c])}function fb(a,{relative:r}={}){let{basename:c}=v.useContext(sn),o=v.useContext(kn);Ye(o,"useFormAction must be used inside a RouteContext");let[f]=o.matches.slice(-1),d={...Pi(a||".",{relative:r})},p=Bn();if(a==null){d.search=p.search;let y=new URLSearchParams(d.search),x=y.getAll("index");if(x.some(S=>S==="")){y.delete("index"),x.filter(w=>w).forEach(w=>y.append("index",w));let S=y.toString();d.search=S?`?${S}`:""}}return(!a||a===".")&&f.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(d.pathname=d.pathname==="/"?c:_n([c,d.pathname])),Zi(d)}function db(a,{relative:r}={}){let c=v.useContext(km);Ye(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Vm("useViewTransitionState"),f=Pi(a,{relative:r});if(!c.isTransitioning)return!1;let d=$n(c.currentLocation.pathname,o)||c.currentLocation.pathname,p=$n(c.nextLocation.pathname,o)||c.nextLocation.pathname;return Ho(f.pathname,p)!=null||Ho(f.pathname,d)!=null}var hb=Am();const Ol=Fi(hb);var pt=function(){return pt=Object.assign||function(r){for(var c,o=1,f=arguments.length;o<f;o++){c=arguments[o];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(r[d]=c[d])}return r},pt.apply(this,arguments)};function Dl(a,r,c){if(c||arguments.length===2)for(var o=0,f=r.length,d;o<f;o++)(d||!(o in r))&&(d||(d=Array.prototype.slice.call(r,0,o)),d[o]=r[o]);return a.concat(d||Array.prototype.slice.call(r))}var $e="-ms-",Vi="-moz-",Ee="-webkit-",Qm="comm",Io="rule",Rf="decl",pb="@import",Zm="@keyframes",mb="@layer",Km=Math.abs,Of=String.fromCharCode,sf=Object.assign;function gb(a,r){return it(a,0)^45?(((r<<2^it(a,0))<<2^it(a,1))<<2^it(a,2))<<2^it(a,3):0}function Jm(a){return a.trim()}function Rn(a,r){return(a=r.exec(a))?a[0]:a}function de(a,r,c){return a.replace(r,c)}function Do(a,r,c){return a.indexOf(r,c)}function it(a,r){return a.charCodeAt(r)|0}function $l(a,r,c){return a.slice(r,c)}function un(a){return a.length}function Fm(a){return a.length}function qi(a,r){return r.push(a),a}function xb(a,r){return a.map(r).join("")}function dp(a,r){return a.filter(function(c){return!Rn(c,r)})}var Po=1,kl=1,Wm=0,Jt=0,Ie=0,ql="";function eu(a,r,c,o,f,d,p,y){return{value:a,root:r,parent:c,type:o,props:f,children:d,line:Po,column:kl,length:p,return:"",siblings:y}}function pa(a,r){return sf(eu("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},r)}function zl(a){for(;a.root;)a=pa(a.root,{children:[a]});qi(a,a.siblings)}function yb(){return Ie}function vb(){return Ie=Jt>0?it(ql,--Jt):0,kl--,Ie===10&&(kl=1,Po--),Ie}function tn(){return Ie=Jt<Wm?it(ql,Jt++):0,kl++,Ie===10&&(kl=1,Po++),Ie}function Ua(){return it(ql,Jt)}function $o(){return Jt}function tu(a,r){return $l(ql,a,r)}function ff(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bb(a){return Po=kl=1,Wm=un(ql=a),Jt=0,[]}function Sb(a){return ql="",a}function _s(a){return Jm(tu(Jt-1,df(a===91?a+2:a===40?a+1:a)))}function wb(a){for(;(Ie=Ua())&&Ie<33;)tn();return ff(a)>2||ff(Ie)>3?"":" "}function jb(a,r){for(;--r&&tn()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return tu(a,$o()+(r<6&&Ua()==32&&tn()==32))}function df(a){for(;tn();)switch(Ie){case a:return Jt;case 34:case 39:a!==34&&a!==39&&df(Ie);break;case 40:a===41&&df(a);break;case 92:tn();break}return Jt}function Eb(a,r){for(;tn()&&a+Ie!==57;)if(a+Ie===84&&Ua()===47)break;return"/*"+tu(r,Jt-1)+"*"+Of(a===47?a:tn())}function Cb(a){for(;!ff(Ua());)tn();return tu(a,Jt)}function zb(a){return Sb(ko("",null,null,null,[""],a=bb(a),0,[0],a))}function ko(a,r,c,o,f,d,p,y,x){for(var m=0,S=0,w=p,z=0,_=0,R=0,B=1,D=1,L=1,H=0,N="",X=f,Z=d,U=o,Q=N;D;)switch(R=H,H=tn()){case 40:if(R!=108&&it(Q,w-1)==58){Do(Q+=de(_s(H),"&","&\f"),"&\f",Km(m?y[m-1]:0))!=-1&&(L=-1);break}case 34:case 39:case 91:Q+=_s(H);break;case 9:case 10:case 13:case 32:Q+=wb(R);break;case 92:Q+=jb($o()-1,7);continue;case 47:switch(Ua()){case 42:case 47:qi(Tb(Eb(tn(),$o()),r,c,x),x);break;default:Q+="/"}break;case 123*B:y[m++]=un(Q)*L;case 125*B:case 59:case 0:switch(H){case 0:case 125:D=0;case 59+S:L==-1&&(Q=de(Q,/\f/g,"")),_>0&&un(Q)-w&&qi(_>32?pp(Q+";",o,c,w-1,x):pp(de(Q," ","")+";",o,c,w-2,x),x);break;case 59:Q+=";";default:if(qi(U=hp(Q,r,c,m,S,f,y,N,X=[],Z=[],w,d),d),H===123)if(S===0)ko(Q,r,U,U,X,d,w,y,Z);else switch(z===99&&it(Q,3)===110?100:z){case 100:case 108:case 109:case 115:ko(a,U,U,o&&qi(hp(a,U,U,0,0,f,y,N,f,X=[],w,Z),Z),f,Z,w,y,o?X:Z);break;default:ko(Q,U,U,U,[""],Z,0,y,Z)}}m=S=_=0,B=L=1,N=Q="",w=p;break;case 58:w=1+un(Q),_=R;default:if(B<1){if(H==123)--B;else if(H==125&&B++==0&&vb()==125)continue}switch(Q+=Of(H),H*B){case 38:L=S>0?1:(Q+="\f",-1);break;case 44:y[m++]=(un(Q)-1)*L,L=1;break;case 64:Ua()===45&&(Q+=_s(tn())),z=Ua(),S=w=un(N=Q+=Cb($o())),H++;break;case 45:R===45&&un(Q)==2&&(B=0)}}return d}function hp(a,r,c,o,f,d,p,y,x,m,S,w){for(var z=f-1,_=f===0?d:[""],R=Fm(_),B=0,D=0,L=0;B<o;++B)for(var H=0,N=$l(a,z+1,z=Km(D=p[B])),X=a;H<R;++H)(X=Jm(D>0?_[H]+" "+N:de(N,/&\f/g,_[H])))&&(x[L++]=X);return eu(a,r,c,f===0?Io:y,x,m,S,w)}function Tb(a,r,c,o){return eu(a,r,c,Qm,Of(yb()),$l(a,2,-2),0,o)}function pp(a,r,c,o,f){return eu(a,r,c,Rf,$l(a,0,o),$l(a,o+1,-1),o,f)}function Im(a,r,c){switch(gb(a,r)){case 5103:return Ee+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ee+a+a;case 4789:return Vi+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Ee+a+Vi+a+$e+a+a;case 5936:switch(it(a,r+11)){case 114:return Ee+a+$e+de(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Ee+a+$e+de(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Ee+a+$e+de(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Ee+a+$e+a+a;case 6165:return Ee+a+$e+"flex-"+a+a;case 5187:return Ee+a+de(a,/(\w+).+(:[^]+)/,Ee+"box-$1$2"+$e+"flex-$1$2")+a;case 5443:return Ee+a+$e+"flex-item-"+de(a,/flex-|-self/g,"")+(Rn(a,/flex-|baseline/)?"":$e+"grid-row-"+de(a,/flex-|-self/g,""))+a;case 4675:return Ee+a+$e+"flex-line-pack"+de(a,/align-content|flex-|-self/g,"")+a;case 5548:return Ee+a+$e+de(a,"shrink","negative")+a;case 5292:return Ee+a+$e+de(a,"basis","preferred-size")+a;case 6060:return Ee+"box-"+de(a,"-grow","")+Ee+a+$e+de(a,"grow","positive")+a;case 4554:return Ee+de(a,/([^-])(transform)/g,"$1"+Ee+"$2")+a;case 6187:return de(de(de(a,/(zoom-|grab)/,Ee+"$1"),/(image-set)/,Ee+"$1"),a,"")+a;case 5495:case 3959:return de(a,/(image-set\([^]*)/,Ee+"$1$`$1");case 4968:return de(de(a,/(.+:)(flex-)?(.*)/,Ee+"box-pack:$3"+$e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ee+a+a;case 4200:if(!Rn(a,/flex-|baseline/))return $e+"grid-column-align"+$l(a,r)+a;break;case 2592:case 3360:return $e+de(a,"template-","")+a;case 4384:case 3616:return c&&c.some(function(o,f){return r=f,Rn(o.props,/grid-\w+-end/)})?~Do(a+(c=c[r].value),"span",0)?a:$e+de(a,"-start","")+a+$e+"grid-row-span:"+(~Do(c,"span",0)?Rn(c,/\d+/):+Rn(c,/\d+/)-+Rn(a,/\d+/))+";":$e+de(a,"-start","")+a;case 4896:case 4128:return c&&c.some(function(o){return Rn(o.props,/grid-\w+-start/)})?a:$e+de(de(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return de(a,/(.+)-inline(.+)/,Ee+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(un(a)-1-r>6)switch(it(a,r+1)){case 109:if(it(a,r+4)!==45)break;case 102:return de(a,/(.+:)(.+)-([^]+)/,"$1"+Ee+"$2-$3$1"+Vi+(it(a,r+3)==108?"$3":"$2-$3"))+a;case 115:return~Do(a,"stretch",0)?Im(de(a,"stretch","fill-available"),r,c)+a:a}break;case 5152:case 5920:return de(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,f,d,p,y,x,m){return $e+f+":"+d+m+(p?$e+f+"-span:"+(y?x:+x-+d)+m:"")+a});case 4949:if(it(a,r+6)===121)return de(a,":",":"+Ee)+a;break;case 6444:switch(it(a,it(a,14)===45?18:11)){case 120:return de(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ee+(it(a,14)===45?"inline-":"")+"box$3$1"+Ee+"$2$3$1"+$e+"$2box$3")+a;case 100:return de(a,":",":"+$e)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return de(a,"scroll-","scroll-snap-")+a}return a}function Yo(a,r){for(var c="",o=0;o<a.length;o++)c+=r(a[o],o,a,r)||"";return c}function Mb(a,r,c,o){switch(a.type){case mb:if(a.children.length)break;case pb:case Rf:return a.return=a.return||a.value;case Qm:return"";case Zm:return a.return=a.value+"{"+Yo(a.children,o)+"}";case Io:if(!un(a.value=a.props.join(",")))return""}return un(c=Yo(a.children,o))?a.return=a.value+"{"+c+"}":""}function Ab(a){var r=Fm(a);return function(c,o,f,d){for(var p="",y=0;y<r;y++)p+=a[y](c,o,f,d)||"";return p}}function Rb(a){return function(r){r.root||(r=r.return)&&a(r)}}function Ob(a,r,c,o){if(a.length>-1&&!a.return)switch(a.type){case Rf:a.return=Im(a.value,a.length,c);return;case Zm:return Yo([pa(a,{value:de(a.value,"@","@"+Ee)})],o);case Io:if(a.length)return xb(c=a.props,function(f){switch(Rn(f,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":zl(pa(a,{props:[de(f,/:(read-\w+)/,":"+Vi+"$1")]})),zl(pa(a,{props:[f]})),sf(a,{props:dp(c,o)});break;case"::placeholder":zl(pa(a,{props:[de(f,/:(plac\w+)/,":"+Ee+"input-$1")]})),zl(pa(a,{props:[de(f,/:(plac\w+)/,":"+Vi+"$1")]})),zl(pa(a,{props:[de(f,/:(plac\w+)/,$e+"input-$1")]})),zl(pa(a,{props:[f]})),sf(a,{props:dp(c,o)});break}return""})}}var Nb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Bt={},Bl=typeof process<"u"&&Bt!==void 0&&(Bt.REACT_APP_SC_ATTR||Bt.SC_ATTR)||"data-styled",Pm="active",eg="data-styled-version",nu="6.1.19",Nf=`/*!sc*/
`,Go=typeof window<"u"&&typeof document<"u",_b=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Bt!==void 0&&Bt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Bt.REACT_APP_SC_DISABLE_SPEEDY!==""?Bt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Bt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Bt!==void 0&&Bt.SC_DISABLE_SPEEDY!==void 0&&Bt.SC_DISABLE_SPEEDY!==""&&Bt.SC_DISABLE_SPEEDY!=="false"&&Bt.SC_DISABLE_SPEEDY),Db={},au=Object.freeze([]),Ll=Object.freeze({});function tg(a,r,c){return c===void 0&&(c=Ll),a.theme!==c.theme&&a.theme||r||c.theme}var ng=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$b=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,kb=/(^-|-$)/g;function mp(a){return a.replace($b,"-").replace(kb,"")}var Bb=/(a)(d)/gi,bo=52,gp=function(a){return String.fromCharCode(a+(a>25?39:97))};function hf(a){var r,c="";for(r=Math.abs(a);r>bo;r=r/bo|0)c=gp(r%bo)+c;return(gp(r%bo)+c).replace(Bb,"$1-$2")}var Ds,ag=5381,Nl=function(a,r){for(var c=r.length;c;)a=33*a^r.charCodeAt(--c);return a},lg=function(a){return Nl(ag,a)};function _f(a){return hf(lg(a)>>>0)}function Lb(a){return a.displayName||a.name||"Component"}function $s(a){return typeof a=="string"&&!0}var ig=typeof Symbol=="function"&&Symbol.for,rg=ig?Symbol.for("react.memo"):60115,Ub=ig?Symbol.for("react.forward_ref"):60112,Hb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Yb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},og={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Gb=((Ds={})[Ub]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ds[rg]=og,Ds);function xp(a){return("type"in(r=a)&&r.type.$$typeof)===rg?og:"$$typeof"in a?Gb[a.$$typeof]:Hb;var r}var qb=Object.defineProperty,Xb=Object.getOwnPropertyNames,yp=Object.getOwnPropertySymbols,Vb=Object.getOwnPropertyDescriptor,Qb=Object.getPrototypeOf,vp=Object.prototype;function ug(a,r,c){if(typeof r!="string"){if(vp){var o=Qb(r);o&&o!==vp&&ug(a,o,c)}var f=Xb(r);yp&&(f=f.concat(yp(r)));for(var d=xp(a),p=xp(r),y=0;y<f.length;++y){var x=f[y];if(!(x in Yb||c&&c[x]||p&&x in p||d&&x in d)){var m=Vb(r,x);try{qb(a,x,m)}catch{}}}}return a}function Ul(a){return typeof a=="function"}function Df(a){return typeof a=="object"&&"styledComponentId"in a}function La(a,r){return a&&r?"".concat(a," ").concat(r):a||r||""}function qo(a,r){if(a.length===0)return"";for(var c=a[0],o=1;o<a.length;o++)c+=a[o];return c}function Ki(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function pf(a,r,c){if(c===void 0&&(c=!1),!c&&!Ki(a)&&!Array.isArray(a))return r;if(Array.isArray(r))for(var o=0;o<r.length;o++)a[o]=pf(a[o],r[o]);else if(Ki(r))for(var o in r)a[o]=pf(a[o],r[o]);return a}function $f(a,r){Object.defineProperty(a,"toString",{value:r})}function er(a){for(var r=[],c=1;c<arguments.length;c++)r[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var Zb=(function(){function a(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return a.prototype.indexOfGroup=function(r){for(var c=0,o=0;o<r;o++)c+=this.groupSizes[o];return c},a.prototype.insertRules=function(r,c){if(r>=this.groupSizes.length){for(var o=this.groupSizes,f=o.length,d=f;r>=d;)if((d<<=1)<0)throw er(16,"".concat(r));this.groupSizes=new Uint32Array(d),this.groupSizes.set(o),this.length=d;for(var p=f;p<d;p++)this.groupSizes[p]=0}for(var y=this.indexOfGroup(r+1),x=(p=0,c.length);p<x;p++)this.tag.insertRule(y,c[p])&&(this.groupSizes[r]++,y++)},a.prototype.clearGroup=function(r){if(r<this.length){var c=this.groupSizes[r],o=this.indexOfGroup(r),f=o+c;this.groupSizes[r]=0;for(var d=o;d<f;d++)this.tag.deleteRule(o)}},a.prototype.getGroup=function(r){var c="";if(r>=this.length||this.groupSizes[r]===0)return c;for(var o=this.groupSizes[r],f=this.indexOfGroup(r),d=f+o,p=f;p<d;p++)c+="".concat(this.tag.getRule(p)).concat(Nf);return c},a})(),Bo=new Map,Xo=new Map,Lo=1,So=function(a){if(Bo.has(a))return Bo.get(a);for(;Xo.has(Lo);)Lo++;var r=Lo++;return Bo.set(a,r),Xo.set(r,a),r},Kb=function(a,r){Lo=r+1,Bo.set(a,r),Xo.set(r,a)},Jb="style[".concat(Bl,"][").concat(eg,'="').concat(nu,'"]'),Fb=new RegExp("^".concat(Bl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Wb=function(a,r,c){for(var o,f=c.split(","),d=0,p=f.length;d<p;d++)(o=f[d])&&a.registerName(r,o)},Ib=function(a,r){for(var c,o=((c=r.textContent)!==null&&c!==void 0?c:"").split(Nf),f=[],d=0,p=o.length;d<p;d++){var y=o[d].trim();if(y){var x=y.match(Fb);if(x){var m=0|parseInt(x[1],10),S=x[2];m!==0&&(Kb(S,m),Wb(a,S,x[3]),a.getTag().insertRules(m,f)),f.length=0}else f.push(y)}}},bp=function(a){for(var r=document.querySelectorAll(Jb),c=0,o=r.length;c<o;c++){var f=r[c];f&&f.getAttribute(Bl)!==Pm&&(Ib(a,f),f.parentNode&&f.parentNode.removeChild(f))}};function Pb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var cg=function(a){var r=document.head,c=a||r,o=document.createElement("style"),f=(function(y){var x=Array.from(y.querySelectorAll("style[".concat(Bl,"]")));return x[x.length-1]})(c),d=f!==void 0?f.nextSibling:null;o.setAttribute(Bl,Pm),o.setAttribute(eg,nu);var p=Pb();return p&&o.setAttribute("nonce",p),c.insertBefore(o,d),o},e5=(function(){function a(r){this.element=cg(r),this.element.appendChild(document.createTextNode("")),this.sheet=(function(c){if(c.sheet)return c.sheet;for(var o=document.styleSheets,f=0,d=o.length;f<d;f++){var p=o[f];if(p.ownerNode===c)return p}throw er(17)})(this.element),this.length=0}return a.prototype.insertRule=function(r,c){try{return this.sheet.insertRule(c,r),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},a.prototype.getRule=function(r){var c=this.sheet.cssRules[r];return c&&c.cssText?c.cssText:""},a})(),t5=(function(){function a(r){this.element=cg(r),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(r,c){if(r<=this.length&&r>=0){var o=document.createTextNode(c);return this.element.insertBefore(o,this.nodes[r]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},a.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},a})(),n5=(function(){function a(r){this.rules=[],this.length=0}return a.prototype.insertRule=function(r,c){return r<=this.length&&(this.rules.splice(r,0,c),this.length++,!0)},a.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},a.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},a})(),Sp=Go,a5={isServer:!Go,useCSSOMInjection:!_b},Vo=(function(){function a(r,c,o){r===void 0&&(r=Ll),c===void 0&&(c={});var f=this;this.options=pt(pt({},a5),r),this.gs=c,this.names=new Map(o),this.server=!!r.isServer,!this.server&&Go&&Sp&&(Sp=!1,bp(this)),$f(this,function(){return(function(d){for(var p=d.getTag(),y=p.length,x="",m=function(w){var z=(function(L){return Xo.get(L)})(w);if(z===void 0)return"continue";var _=d.names.get(z),R=p.getGroup(w);if(_===void 0||!_.size||R.length===0)return"continue";var B="".concat(Bl,".g").concat(w,'[id="').concat(z,'"]'),D="";_!==void 0&&_.forEach(function(L){L.length>0&&(D+="".concat(L,","))}),x+="".concat(R).concat(B,'{content:"').concat(D,'"}').concat(Nf)},S=0;S<y;S++)m(S);return x})(f)})}return a.registerId=function(r){return So(r)},a.prototype.rehydrate=function(){!this.server&&Go&&bp(this)},a.prototype.reconstructWithOptions=function(r,c){return c===void 0&&(c=!0),new a(pt(pt({},this.options),r),this.gs,c&&this.names||void 0)},a.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(r=(function(c){var o=c.useCSSOMInjection,f=c.target;return c.isServer?new n5(f):o?new e5(f):new t5(f)})(this.options),new Zb(r)));var r},a.prototype.hasNameForId=function(r,c){return this.names.has(r)&&this.names.get(r).has(c)},a.prototype.registerName=function(r,c){if(So(r),this.names.has(r))this.names.get(r).add(c);else{var o=new Set;o.add(c),this.names.set(r,o)}},a.prototype.insertRules=function(r,c,o){this.registerName(r,c),this.getTag().insertRules(So(r),o)},a.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},a.prototype.clearRules=function(r){this.getTag().clearGroup(So(r)),this.clearNames(r)},a.prototype.clearTag=function(){this.tag=void 0},a})(),l5=/&/g,i5=/^\s*\/\/.*$/gm;function sg(a,r){return a.map(function(c){return c.type==="rule"&&(c.value="".concat(r," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(r," ")),c.props=c.props.map(function(o){return"".concat(r," ").concat(o)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=sg(c.children,r)),c})}function r5(a){var r,c,o,f=Ll,d=f.options,p=d===void 0?Ll:d,y=f.plugins,x=y===void 0?au:y,m=function(z,_,R){return R.startsWith(c)&&R.endsWith(c)&&R.replaceAll(c,"").length>0?".".concat(r):z},S=x.slice();S.push(function(z){z.type===Io&&z.value.includes("&")&&(z.props[0]=z.props[0].replace(l5,c).replace(o,m))}),p.prefix&&S.push(Ob),S.push(Mb);var w=function(z,_,R,B){_===void 0&&(_=""),R===void 0&&(R=""),B===void 0&&(B="&"),r=B,c=_,o=new RegExp("\\".concat(c,"\\b"),"g");var D=z.replace(i5,""),L=zb(R||_?"".concat(R," ").concat(_," { ").concat(D," }"):D);p.namespace&&(L=sg(L,p.namespace));var H=[];return Yo(L,Ab(S.concat(Rb(function(N){return H.push(N)})))),H};return w.hash=x.length?x.reduce(function(z,_){return _.name||er(15),Nl(z,_.name)},ag).toString():"",w}var o5=new Vo,mf=r5(),fg=ke.createContext({shouldForwardProp:void 0,styleSheet:o5,stylis:mf});fg.Consumer;ke.createContext(void 0);function gf(){return v.useContext(fg)}var dg=(function(){function a(r,c){var o=this;this.inject=function(f,d){d===void 0&&(d=mf);var p=o.name+d.hash;f.hasNameForId(o.id,p)||f.insertRules(o.id,p,d(o.rules,p,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=c,$f(this,function(){throw er(12,String(o.name))})}return a.prototype.getName=function(r){return r===void 0&&(r=mf),this.name+r.hash},a})(),u5=function(a){return a>="A"&&a<="Z"};function wp(a){for(var r="",c=0;c<a.length;c++){var o=a[c];if(c===1&&o==="-"&&a[0]==="-")return a;u5(o)?r+="-"+o.toLowerCase():r+=o}return r.startsWith("ms-")?"-"+r:r}var hg=function(a){return a==null||a===!1||a===""},pg=function(a){var r,c,o=[];for(var f in a){var d=a[f];a.hasOwnProperty(f)&&!hg(d)&&(Array.isArray(d)&&d.isCss||Ul(d)?o.push("".concat(wp(f),":"),d,";"):Ki(d)?o.push.apply(o,Dl(Dl(["".concat(f," {")],pg(d),!1),["}"],!1)):o.push("".concat(wp(f),": ").concat((r=f,(c=d)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||r in Nb||r.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return o};function ga(a,r,c,o){if(hg(a))return[];if(Df(a))return[".".concat(a.styledComponentId)];if(Ul(a)){if(!Ul(d=a)||d.prototype&&d.prototype.isReactComponent||!r)return[a];var f=a(r);return ga(f,r,c,o)}var d;return a instanceof dg?c?(a.inject(c,o),[a.getName(o)]):[a]:Ki(a)?pg(a):Array.isArray(a)?Array.prototype.concat.apply(au,a.map(function(p){return ga(p,r,c,o)})):[a.toString()]}function mg(a){for(var r=0;r<a.length;r+=1){var c=a[r];if(Ul(c)&&!Df(c))return!1}return!0}var c5=lg(nu),s5=(function(){function a(r,c,o){this.rules=r,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&mg(r),this.componentId=c,this.baseHash=Nl(c5,c),this.baseStyle=o,Vo.registerId(c)}return a.prototype.generateAndInjectStyles=function(r,c,o){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,c,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))f=La(f,this.staticRulesId);else{var d=qo(ga(this.rules,r,c,o)),p=hf(Nl(this.baseHash,d)>>>0);if(!c.hasNameForId(this.componentId,p)){var y=o(d,".".concat(p),void 0,this.componentId);c.insertRules(this.componentId,p,y)}f=La(f,p),this.staticRulesId=p}else{for(var x=Nl(this.baseHash,o.hash),m="",S=0;S<this.rules.length;S++){var w=this.rules[S];if(typeof w=="string")m+=w;else if(w){var z=qo(ga(w,r,c,o));x=Nl(x,z+S),m+=z}}if(m){var _=hf(x>>>0);c.hasNameForId(this.componentId,_)||c.insertRules(this.componentId,_,o(m,".".concat(_),void 0,this.componentId)),f=La(f,_)}}return f},a})(),kf=ke.createContext(void 0);kf.Consumer;var ks={};function f5(a,r,c){var o=Df(a),f=a,d=!$s(a),p=r.attrs,y=p===void 0?au:p,x=r.componentId,m=x===void 0?(function(X,Z){var U=typeof X!="string"?"sc":mp(X);ks[U]=(ks[U]||0)+1;var Q="".concat(U,"-").concat(_f(nu+U+ks[U]));return Z?"".concat(Z,"-").concat(Q):Q})(r.displayName,r.parentComponentId):x,S=r.displayName,w=S===void 0?(function(X){return $s(X)?"styled.".concat(X):"Styled(".concat(Lb(X),")")})(a):S,z=r.displayName&&r.componentId?"".concat(mp(r.displayName),"-").concat(r.componentId):r.componentId||m,_=o&&f.attrs?f.attrs.concat(y).filter(Boolean):y,R=r.shouldForwardProp;if(o&&f.shouldForwardProp){var B=f.shouldForwardProp;if(r.shouldForwardProp){var D=r.shouldForwardProp;R=function(X,Z){return B(X,Z)&&D(X,Z)}}else R=B}var L=new s5(c,z,o?f.componentStyle:void 0);function H(X,Z){return(function(U,Q,P){var ue=U.attrs,Ce=U.componentStyle,Be=U.defaultProps,Ge=U.foldedComponentIds,et=U.styledComponentId,nt=U.target,Le=ke.useContext(kf),k=gf(),K=U.shouldForwardProp||k.shouldForwardProp,I=tg(Q,Le,Be)||Ll,ee=(function(ae,re,he){for(var He,be=pt(pt({},re),{className:void 0,theme:he}),zt=0;zt<ae.length;zt+=1){var Ft=Ul(He=ae[zt])?He(be):He;for(var mt in Ft)be[mt]=mt==="className"?La(be[mt],Ft[mt]):mt==="style"?pt(pt({},be[mt]),Ft[mt]):Ft[mt]}return re.className&&(be.className=La(be.className,re.className)),be})(ue,Q,I),fe=ee.as||nt,E={};for(var G in ee)ee[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&ee.theme===I||(G==="forwardedAs"?E.as=ee.forwardedAs:K&&!K(G,fe)||(E[G]=ee[G]));var F=(function(ae,re){var he=gf(),He=ae.generateAndInjectStyles(re,he.styleSheet,he.stylis);return He})(Ce,ee),W=La(Ge,et);return F&&(W+=" "+F),ee.className&&(W+=" "+ee.className),E[$s(fe)&&!ng.has(fe)?"class":"className"]=W,P&&(E.ref=P),v.createElement(fe,E)})(N,X,Z)}H.displayName=w;var N=ke.forwardRef(H);return N.attrs=_,N.componentStyle=L,N.displayName=w,N.shouldForwardProp=R,N.foldedComponentIds=o?La(f.foldedComponentIds,f.styledComponentId):"",N.styledComponentId=z,N.target=o?f.target:a,Object.defineProperty(N,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(X){this._foldedDefaultProps=o?(function(Z){for(var U=[],Q=1;Q<arguments.length;Q++)U[Q-1]=arguments[Q];for(var P=0,ue=U;P<ue.length;P++)pf(Z,ue[P],!0);return Z})({},f.defaultProps,X):X}}),$f(N,function(){return".".concat(N.styledComponentId)}),d&&ug(N,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),N}function jp(a,r){for(var c=[a[0]],o=0,f=r.length;o<f;o+=1)c.push(r[o],a[o+1]);return c}var Ep=function(a){return Object.assign(a,{isCss:!0})};function xa(a){for(var r=[],c=1;c<arguments.length;c++)r[c-1]=arguments[c];if(Ul(a)||Ki(a))return Ep(ga(jp(au,Dl([a],r,!0))));var o=a;return r.length===0&&o.length===1&&typeof o[0]=="string"?ga(o):Ep(ga(jp(o,r)))}function xf(a,r,c){if(c===void 0&&(c=Ll),!r)throw er(1,r);var o=function(f){for(var d=[],p=1;p<arguments.length;p++)d[p-1]=arguments[p];return a(r,c,xa.apply(void 0,Dl([f],d,!1)))};return o.attrs=function(f){return xf(a,r,pt(pt({},c),{attrs:Array.prototype.concat(c.attrs,f).filter(Boolean)}))},o.withConfig=function(f){return xf(a,r,pt(pt({},c),f))},o}var gg=function(a){return xf(f5,a)},b=gg;ng.forEach(function(a){b[a]=gg(a)});var d5=(function(){function a(r,c){this.rules=r,this.componentId=c,this.isStatic=mg(r),Vo.registerId(this.componentId+1)}return a.prototype.createStyles=function(r,c,o,f){var d=f(qo(ga(this.rules,c,o,f)),""),p=this.componentId+r;o.insertRules(p,p,d)},a.prototype.removeStyles=function(r,c){c.clearRules(this.componentId+r)},a.prototype.renderStyles=function(r,c,o,f){r>2&&Vo.registerId(this.componentId+r),this.removeStyles(r,o),this.createStyles(r,c,o,f)},a})();function h5(a){for(var r=[],c=1;c<arguments.length;c++)r[c-1]=arguments[c];var o=xa.apply(void 0,Dl([a],r,!1)),f="sc-global-".concat(_f(JSON.stringify(o))),d=new d5(o,f),p=function(x){var m=gf(),S=ke.useContext(kf),w=ke.useRef(m.styleSheet.allocateGSInstance(f)).current;return m.styleSheet.server&&y(w,x,m.styleSheet,S,m.stylis),ke.useLayoutEffect(function(){if(!m.styleSheet.server)return y(w,x,m.styleSheet,S,m.stylis),function(){return d.removeStyles(w,m.styleSheet)}},[w,x,m.styleSheet,S,m.stylis]),null};function y(x,m,S,w,z){if(d.isStatic)d.renderStyles(x,Db,S,z);else{var _=pt(pt({},m),{theme:tg(m,w,p.defaultProps)});d.renderStyles(x,_,S,z)}}return ke.memo(p)}function Et(a){for(var r=[],c=1;c<arguments.length;c++)r[c-1]=arguments[c];var o=qo(xa.apply(void 0,Dl([a],r,!1))),f=_f(o);return new dg(f,o)}var xg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Cp=ke.createContext&&ke.createContext(xg),p5=["attr","size","title"];function m5(a,r){if(a==null)return{};var c=g5(a,r),o,f;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);for(f=0;f<d.length;f++)o=d[f],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(a,o)&&(c[o]=a[o])}return c}function g5(a,r){if(a==null)return{};var c={};for(var o in a)if(Object.prototype.hasOwnProperty.call(a,o)){if(r.indexOf(o)>=0)continue;c[o]=a[o]}return c}function Qo(){return Qo=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var c=arguments[r];for(var o in c)Object.prototype.hasOwnProperty.call(c,o)&&(a[o]=c[o])}return a},Qo.apply(this,arguments)}function zp(a,r){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);r&&(o=o.filter(function(f){return Object.getOwnPropertyDescriptor(a,f).enumerable})),c.push.apply(c,o)}return c}function Zo(a){for(var r=1;r<arguments.length;r++){var c=arguments[r]!=null?arguments[r]:{};r%2?zp(Object(c),!0).forEach(function(o){x5(a,o,c[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):zp(Object(c)).forEach(function(o){Object.defineProperty(a,o,Object.getOwnPropertyDescriptor(c,o))})}return a}function x5(a,r,c){return r=y5(r),r in a?Object.defineProperty(a,r,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[r]=c,a}function y5(a){var r=v5(a,"string");return typeof r=="symbol"?r:r+""}function v5(a,r){if(typeof a!="object"||!a)return a;var c=a[Symbol.toPrimitive];if(c!==void 0){var o=c.call(a,r);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(a)}function yg(a){return a&&a.map((r,c)=>ke.createElement(r.tag,Zo({key:c},r.attr),yg(r.child)))}function ve(a){return r=>ke.createElement(b5,Qo({attr:Zo({},a.attr)},r),yg(a.child))}function b5(a){var r=c=>{var{attr:o,size:f,title:d}=a,p=m5(a,p5),y=f||c.size||"1em",x;return c.className&&(x=c.className),a.className&&(x=(x?x+" ":"")+a.className),ke.createElement("svg",Qo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},c.attr,o,p,{className:x,style:Zo(Zo({color:a.color||c.color},c.style),a.style),height:y,width:y,xmlns:"http://www.w3.org/2000/svg"}),d&&ke.createElement("title",null,d),a.children)};return Cp!==void 0?ke.createElement(Cp.Consumer,null,c=>r(c)):r(xg)}function Bf(a){return ve({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"},child:[]}]})(a)}function Lf(a){return ve({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"},child:[]}]})(a)}function Uf(a){return ve({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"},child:[]}]})(a)}function Hf(a){return ve({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"},child:[]}]})(a)}function Yf(a){return ve({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"},child:[]}]})(a)}function vg(a){return ve({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"},child:[]}]})(a)}function S5(a){return ve({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(a)}function bg(a){return ve({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(a)}function w5(a){return ve({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(a)}function j5(a){return ve({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(a)}function Sg(a){return ve({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(a)}function E5(a){return ve({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(a)}function Gf(a){return ve({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(a)}function C5(a){return ve({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(a)}function wg(a){return ve({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(a)}function Tp(a){return ve({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}const z5="/instalearn/assets/vedioClip1-BQ1quwNm.mp4",T5="/instalearn/assets/test-BrOnAr5c.png",M5="/instalearn/assets/teacherProfilePic-DPrjIuTX.png",A5="/instalearn/assets/Slide1-D-tpOApl.png",R5="/instalearn/assets/Slide3-B6C07YuO.png",O5="/instalearn/assets/Slide4-BbthJNiF.png",N5="/instalearn/assets/Slide5-BsOulZPi.png",_5="/instalearn/assets/Slide6-8dQDHdn3.png",D5="/instalearn/assets/Slide7-CH0r16yo.png",$5="/instalearn/assets/Slide8-2dBFzKRc.png",k5="/instalearn/assets/Slide9-D8lJXVrP.png",wo={},B5={videoClip1:z5},L5={test:T5},lu={teacherProfilePic:M5},An={Slide1:A5,Slide3:R5,Slide4:O5,Slide5:N5,Slide6:_5,Slide7:D5,Slide8:$5,Slide9:k5};function U5(a){return ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M304 384v-24c0-29 31.54-56.43 52-76 28.84-27.57 44-64.61 44-108 0-80-63.73-144-144-144a143.6 143.6 0 0 0-144 144c0 41.84 15.81 81.39 44 108 20.35 19.21 52 46.7 52 76v24m16 96h64m-80-48h96m-48-48V256"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M294 240s-21.51 16-38 16-38-16-38-16"},child:[]}]})(a)}const H5=b.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
`,Y5=b.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  @media (max-width: 520px) {
    padding: 10px 12px;
  }
`,G5=b.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,q5=b.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,X5=b.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,V5=b.span`
  font-weight: 600;
  color: #0f172a;
  font-size: 14px;
  @media (max-width: 520px) { font-size: 13px; }
`,Q5=b.span`
  font-size: 12px;
  color: #64748b;
`,Z5=b.button`
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
  @media (max-width: 520px) {
    width: 34px; height: 34px; border-radius: 8px;
  }
`,K5=b.div`
  position: relative;
  aspect-ratio: 1 / 1;
  background: linear-gradient(135deg, #eef2ff, #e0f7fa);
`,J5=b.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,F5=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px 8px 12px;
`,W5=b.div`
  display: flex;
  gap: 10px;
`,jo=b.button`
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
  @media (max-width: 520px) {
    width: 36px; height: 36px; border-radius: 8px;
  }
`,I5=b.div`
  padding: 12px;
  display: grid;
  gap: 14px;
  background: #f8fafc;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  @media (min-width: 520px) {
    padding: 14px 16px;
    gap: 16px;
  }
`,Mp=b.section`
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.02);
  @media (min-width: 520px) { padding: 14px; }
`,Ap=b.h3`
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 8px 0;
`,P5=b.ul`
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 6px;
  li {
    font-size: 13px;
    color: #0f172a;
    line-height: 1.25;
  }
`,on=b.div`
  height: ${a=>a.h||12}px;
  background: linear-gradient(90deg,#f2f5f9 0%,#eef2f7 50%,#f2f5f9 100%);
  border-radius: 8px;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% { opacity: .8 }
    50% { opacity: .4 }
    100% { opacity: .8 }
  }
`,Rp=b.div`
  font-size: 13px;
  color: #b91c1c;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,Op=b.button`
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 12px;
  cursor: pointer;
`,e3=b.div`
  display: grid;
  gap: 10px;
`,t3=b.p`
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #0f172a;
`,n3=b.div`
  display: grid;
  gap: 8px;
`,a3=b.button.withConfig({shouldForwardProp:a=>a!=="$state"})`
  text-align: left;
  font-size: 13px;
  background: ${({$state:a})=>a==="correct"?"rgba(34,197,94,.12)":a==="wrong"?"rgba(239,68,68,.12)":"white"};
  color: #0f172a;
  border: 1px solid rgba(15,23,42,0.12);
  border-color: ${({$state:a})=>a==="correct"?"rgba(34,197,94,.5)":a==="wrong"?"rgba(239,68,68,.5)":"rgba(15,23,42,0.12)"};
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
  &:hover { background: ${({$state:a})=>a==="idle"?"rgba(15,23,42,.04)":void 0}; }
  @media (max-width: 520px) { padding: 12px; }
`,Uo=b.small`
  color: #64748b;
  font-size: 12px;
`,l3=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,jg=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`,Np=b.button`
  background: #0f172a;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 8px 12px;
  font-size: 12px;
  cursor: pointer;
`,Eg=b.button`
  background: transparent;
  border: 1px solid rgba(15,23,42,.14);
  border-radius: 10px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 12px;
`;async function i3(a){const c=await(await fetch(a,{mode:"cors"})).blob(),o=c.type||"image/jpeg",f=await c.arrayBuffer(),d=new Uint8Array(f);let p="";for(let x=0;x<d.byteLength;x++)p+=String.fromCharCode(d[x]);return{base64:btoa(p),mime:o}}function r3({title:a,description:r,username:c}){return`
You are generating STRICTLY SCOPED learning helpers from a single infographic.

Rules (follow EXACTLY):
- Output JSON with shape:
  {
    "bullets": ["...", "...", "...", "...", "..."],
    "mcqs": [
      { "question": "...", "options": ["...","...","...","..."], "correctIndex": 0, "explanation": "..." },
      ...
    ]
  }
- Exactly 5 bullets. Each bullet ≤ 18 words. No fluff. Stay within the infographic.
- Exactly 5 MCQs. Each question ≤ 18 words. Options concise & mutually exclusive (3–5 options).
- Explanations ≤ 18 words.
- If information is not present in the infographic, write "Not present" and avoid inventing facts.

Infographic context:
- Title: "${a}"
- Caption: "${r}"
- Author: "${c}"
`.trim()}async function o3(a){const{title:r,description:c,username:o,imageUrl:f}=a,d="AIzaSyDYGHcNYuuk43rrYSBVBIQGegzOGVtjGrw",{base64:p,mime:y}=await i3(f),m={contents:[{parts:[{text:r3({title:r,description:c,username:o})},{inline_data:{mime_type:y,data:p}}]}],generationConfig:{temperature:.6,topK:32,topP:.9,maxOutputTokens:1200,response_mime_type:"application/json"}},S="https://generativelanguage.googleapis.com/v1beta",w=["gemini-2.5-flash","gemini-2.0-flash"];let z;for(const _ of w)try{const R=`${S}/models/${_}:generateContent?key=${encodeURIComponent(d)}`,B=await fetch(R,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)});if(!B.ok)throw new Error(`Gemini error (${B.status}): ${await B.text()}`);const L=(await B.json())?.candidates?.[0]?.content?.parts?.[0]?.text;if(!L)throw new Error("Empty response from Gemini");let H;try{H=JSON.parse(L)}catch{const U=String(L).replace(/^```json\s*/i,"").replace(/^```\s*/i,"").replace(/```$/i,"").trim();H=JSON.parse(U)}const N=Array.isArray(H.bullets)?H.bullets.slice(0,5):[],X=Array.isArray(H.mcqs)?H.mcqs.slice(0,5):[];if(!N.length||!X.length)throw new Error("Malformed AI content");const Z=X.map(U=>({question:String(U.question||"").slice(0,140),options:Array.isArray(U.options)&&U.options.length?U.options.slice(0,5):["Not present"],correctIndex:Number.isInteger(U.correctIndex)?U.correctIndex:0,explanation:U.explanation?String(U.explanation).slice(0,140):void 0}));return{bullets:N,mcqs:Z}}catch(R){z=R}throw z||new Error("Gemini request failed")}function u3({avatarSrc:a=lu.teacherProfilePic,title:r,description:c,imgSrc:o,username:f,postUrl:d,onLikeChange:p,onBookmarkChange:y,onShare:x}){const[m,S]=v.useState(!1),[w,z]=v.useState(!1),[_,R]=v.useState(!1),[B,D]=v.useState(!1),[L,H]=v.useState(null),[N,X]=v.useState(null),[Z,U]=v.useState(0);v.useEffect(()=>{const ee=N?.mcqs?.length||0;ee!==0&&U(fe=>Math.max(0,Math.min(fe,ee-1)))},[N?.mcqs?.length]);const Q=m?"Unlike":"Like",P=w?"Remove bookmark":"Bookmark",ue=()=>{const ee=!m;S(ee),p&&p(ee)},Ce=()=>{const ee=!w;z(ee),y&&y(ee)},Be=v.useMemo(()=>({title:r,text:`${f} on Infographics — ${r}`,url:d}),[r,f,d]),Ge=async()=>{try{navigator.share?await navigator.share(Be):navigator.clipboard&&Be.url&&(await navigator.clipboard.writeText(Be.url),alert("Link copied to clipboard")),x&&x(Be)}catch(ee){console.error("Share failed:",ee)}},et=async()=>{D(!0),H(null);try{const ee=await o3({title:r,description:c,username:f,imageUrl:o});X(ee),U(0)}catch(ee){console.error(ee),H(ee?.message||"Failed to generate content")}finally{D(!1)}},nt=()=>{const ee=!_;R(ee),ee&&!N&&!B&&et()},Le=N?.mcqs?.length||0,k=Le?N.mcqs[Z]:null,K=Z===Le-1,I=()=>U(ee=>Math.min(ee+1,Le-1));return s.jsxs(H5,{role:"article","aria-label":`${r} instagram-style post`,children:[s.jsxs(Y5,{children:[s.jsxs(G5,{children:[s.jsx(q5,{src:a,alt:"avatar"}),s.jsxs(X5,{children:[s.jsx(V5,{children:r}),s.jsx(Q5,{children:c})]})]}),s.jsx(Z5,{"aria-label":_?"Close learn mode":"Open learn mode",title:_?"Close learn mode":"Learn more & quiz",onClick:nt,children:s.jsx(U5,{size:18})})]}),_?s.jsxs(I5,{"aria-live":"polite",children:[s.jsxs(Mp,{children:[s.jsx(Ap,{children:"Know more (5 quick points)"}),B?s.jsxs("div",{style:{display:"grid",gap:8},children:[s.jsx(on,{}),s.jsx(on,{}),s.jsx(on,{}),s.jsx(on,{}),s.jsx(on,{})]}):L?s.jsxs(Rp,{children:[s.jsx("span",{style:{flex:1,minWidth:0},children:L}),s.jsx(Op,{onClick:et,"aria-label":"Retry generating content",children:"Retry"})]}):s.jsx(P5,{children:N?.bullets?.map((ee,fe)=>s.jsx("li",{children:ee},fe))})]}),s.jsxs(Mp,{children:[s.jsxs(jg,{children:[s.jsx(Ap,{style:{margin:0},children:"Test your knowledge"}),Le?s.jsxs(Uo,{children:[Z+1," / ",Le]}):null]}),B?s.jsxs("div",{style:{display:"grid",gap:10},children:[s.jsx(on,{h:16}),s.jsx(on,{h:40}),s.jsx(on,{h:40}),s.jsx(on,{h:40}),s.jsx(on,{h:40})]}):L?s.jsxs(Rp,{children:[s.jsx("span",{style:{flex:1,minWidth:0},children:"Can’t load questions."}),s.jsx(Op,{onClick:et,children:"Retry"})]}):k?s.jsx(c3,{mcq:k,index:Z+1,total:Le,isLast:K,onNext:K?void 0:I,onFinish:K?()=>R(!1):void 0},Z):null,!B&&!L&&k&&!K?s.jsx("div",{style:{marginTop:6},children:s.jsx(Uo,{children:"Tip: You can change your choice before tapping Next."})}):null]}),s.jsxs(l3,{children:[s.jsx(Uo,{children:"AI stays within the infographic; short, clear answers only."}),s.jsx(Eg,{onClick:()=>R(!1),"aria-label":"Back to image",title:"Back to image",children:"Back to image"})]})]}):s.jsx(K5,{children:s.jsx(J5,{src:o,alt:r})}),s.jsxs(F5,{children:[s.jsxs(W5,{children:[s.jsx(jo,{onClick:ue,"aria-label":Q,title:Q,children:m?s.jsx(Bf,{size:22}):s.jsx(Lf,{size:22})}),s.jsx(jo,{"aria-label":"Comment",title:"Comment",children:s.jsx(Yf,{size:20})}),s.jsx(jo,{onClick:Ge,"aria-label":"Share",title:"Share",children:s.jsx(Gf,{size:20})})]}),s.jsx(jo,{onClick:Ce,"aria-label":P,title:P,children:w?s.jsx(Uf,{size:20}):s.jsx(Hf,{size:20})})]})]})}function c3({mcq:a,index:r,total:c,isLast:o,onNext:f,onFinish:d}){const[p,y]=v.useState(null),x=m=>p===null?"idle":m===a.correctIndex?"correct":m===p&&p!==a.correctIndex?"wrong":"idle";return s.jsxs(e3,{"aria-label":`Question ${r}`,children:[s.jsxs(t3,{children:[r,". ",a.question]}),s.jsx(n3,{children:a.options.map((m,S)=>s.jsx(a3,{onClick:()=>y(S),$state:x(S),"aria-pressed":p===S,"aria-label":`Option ${S+1}`,children:m},S))}),p!==null&&s.jsxs("div",{style:{display:"grid",gap:8},children:[s.jsxs(Uo,{children:[p===a.correctIndex?"✅ Correct.":"❌ Not quite.",a.explanation?` — ${a.explanation}`:""]}),o?s.jsxs(jg,{children:[s.jsx(Np,{onClick:d,"aria-label":"Finish quiz",children:"Finish"}),s.jsx(Eg,{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"Back to top"})]}):s.jsxs(Np,{onClick:f,"aria-label":"Next question",disabled:p===null,children:["Next question (",r+1,"/",c,")"]})]})]})}const s3=b.div``,f3=b.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 16px 0; /* Adjusted padding to look better with centered wrap */
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,d3=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border: 0;
  background: transparent;
  cursor: pointer;
`,h3=b.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  border-radius: 10px;
  user-drag: none;
  -webkit-user-drag: none;
`;function p3({items:a,className:r}){const c=v.useRef(null),o=v.useRef(!1),f=v.useRef(0),d=v.useRef(0),p=m=>{o.current=!0,f.current=m.clientX,d.current=c.current?.scrollLeft||0,m.target.setPointerCapture?.(m.pointerId)},y=m=>{if(!o.current||!c.current)return;const S=m.clientX-f.current;c.current.scrollLeft=d.current-S},x=()=>{o.current=!1};return s.jsx(s3,{className:r,children:s.jsx(f3,{ref:c,onPointerDown:p,onPointerMove:y,onPointerUp:x,onPointerLeave:x,"aria-label":"Stories scroller",children:a.map(m=>s.jsx(d3,{onClick:()=>console.log("click on image"),children:s.jsx(h3,{src:m.imgSrc,alt:m.name,draggable:!1})},m.id))})})}const m3=h5`
  .carousel .control-dots {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 0;
  }
  .carousel .control-dots .dot {
    box-shadow: none;
    background: rgba(255, 255, 255, 0.85);
    opacity: 1;
  }
  .carousel .control-next.control-arrow, .carousel .control-prev.control-arrow {
    display: none;
  }
  .carousel .thumbs-wrapper { display: none; }
`,g3=b.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(2, 6, 23, 0.08);
`,x3=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`,y3=b.div`
  display: flex;
  gap: 12px;
`,v3=b.button`
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
`,Eo=b.button`
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
`,b3=b.div`
  padding: 12px 14px;
`,S3=b.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,w3=b.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,j3=b.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,E3=b.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,C3=b.span`
  font-weight: 600;
  color: #0f172a;
`,z3=b.div`
  padding: 0 14px 8px 14px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`,T3=b.span`
  font-size: 12px;
  color: #64748b;
`,M3=b.button`
  font-size: 12px;
  color: #64748b;
  appearance: none;
  border: none;
  background: transparent;
  color: #334155;
  padding: 0;
  margin-left: 6px;
  cursor: pointer;
  border-radius: 6px;
  font-weight:500;
  &:focus {
    outline: 2px solid rgba(14, 165, 233, 0.35);
    outline-offset: 2px;
  }
`,A3=(a=1)=>({display:"-webkit-box",WebkitBoxOrient:"vertical",overflow:"hidden",WebkitLineClamp:a});function R3({expanded:a=!1,lines:r=1,children:c,innerRef:o}){const f={fontSize:"13px",color:"#334155",margin:0,whiteSpace:"pre-wrap",...a?{}:A3(r)};return s.jsx("p",{style:f,ref:o,children:c})}function O3({avatarSrc:a=lu.teacherProfilePic,data:r,onLikeChange:c,onBookmarkChange:o,onShare:f}){const{title:d="Carousel Title",description:p="",detailedDescription:y="",carouselMetaData:x=[]}=r||{},[m,S]=v.useState(!1),[w,z]=v.useState(!1),[_,R]=v.useState(!1),[B,D]=v.useState(!1),L=v.useRef(null);v.useEffect(()=>{const P=L.current;if(P){if(_){D(!0);return}requestAnimationFrame(()=>{if(!P)return;const ue=P.scrollHeight-P.clientHeight>1;D(ue)})}},[y,_]);const H=m?"Unlike post":"Like post",N=w?"Remove bookmark":"Bookmark",X=()=>{const P=!m;S(P),c&&c(P)},Z=()=>{const P=!w;z(P),o&&o(P)},U=v.useMemo(()=>({title:d,text:`${d}`,url:typeof window<"u"?window.location.href:""}),[d]),Q=async()=>{try{navigator.share?await navigator.share(U):navigator.clipboard&&(await navigator.clipboard.writeText(U.url),alert("Link copied to clipboard")),f&&f(U)}catch(P){console.error("Share failed:",P)}};return!x||x.length===0?null:s.jsxs(g3,{role:"article","aria-label":`${d} – Instagram multi-image post`,children:[s.jsxs(b3,{children:[s.jsxs(S3,{children:[s.jsxs(w3,{children:[s.jsx(j3,{src:a,alt:"avatar"}),s.jsxs(E3,{children:[s.jsx(C3,{children:d}),s.jsx(T3,{children:p})]})]}),s.jsx(v3,{"aria-label":"Post menu",title:"More",children:s.jsx(vg,{size:18})})]}),y?s.jsxs(z3,{children:[s.jsx(R3,{expanded:_,lines:1,innerRef:L,children:y}),(B||_)&&s.jsx(M3,{type:"button","aria-expanded":_,onClick:()=>R(P=>!P),children:_?s.jsx(w5,{size:14}):"more"})]}):null]}),s.jsx(m3,{}),s.jsx(p3,{items:x,duration:3e3,onOpen:P=>console.log("opened:",P),onClose:()=>console.log("closed")}),s.jsxs(x3,{children:[s.jsxs(y3,{children:[s.jsx(Eo,{onClick:X,"aria-label":H,title:H,children:m?s.jsx(Bf,{size:22}):s.jsx(Lf,{size:22})}),s.jsx(Eo,{"aria-label":"Comment",title:"Comment",children:s.jsx(Yf,{size:20})}),s.jsx(Eo,{onClick:Q,"aria-label":"Share",title:"Share",children:s.jsx(Gf,{size:20})})]}),s.jsx(Eo,{onClick:Z,"aria-label":N,title:N,children:w?s.jsx(Uf,{size:20}):s.jsx(Hf,{size:20})})]})]})}const N3=b.article`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.12);
`,_3=b.div`
  position: relative;
  padding-top: 100%; /* Default: square for mobile */
  background: #000;

  @media (min-width: 768px) {
    padding-top: 56.25%; /* Switch to 16:9 on larger screens */
  }

  video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,D3=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`,$3=b.div`
  display: flex;
  gap: 12px;
`,Co=b.button`
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
  &:hover {
    background: rgba(15, 23, 42, 0.06);
  }
  &:active {
    transform: scale(0.98);
  }
`,k3=b.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,B3=b.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,L3=b.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,U3=b.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,H3=b.span`
  font-weight: 600;
  color: #0f172a;
`,Y3=b.span`
  font-size: 12px;
  color: #64748b;
`,G3=b.button`
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: transparent;
  border: none;
  color: #0f172a;
  cursor: pointer;
  &:hover {
    background: rgba(15, 23, 42, 0.04);
  }
`;function q3({avatarSrc:a=lu.teacherProfilePic,data:r,likedDefault:c=!1,savedDefault:o=!1,onLikeChange:f,onBookmarkChange:d,onShare:p}){const y=r?.videoClipSrc||r?.vedioClipSrc,{title:x,description:m,poster:S}=r||{},[w,z]=v.useState(c),[_,R]=v.useState(o),B=w?"Unlike post":"Like post",D=_?"Remove bookmark":"Bookmark",L=v.useRef(null),H=()=>{const Z=!w;z(Z),f&&f(Z)},N=()=>{const Z=!_;R(Z),d&&d(Z)},X=async()=>{const Z={title:x||"Check this video",text:m||"",url:typeof window<"u"&&window.location?.href||(r?.url??"")};try{typeof navigator<"u"&&navigator.share?await navigator.share(Z):typeof navigator<"u"&&navigator.clipboard&&Z.url&&(await navigator.clipboard.writeText(Z.url),alert("Link copied to clipboard")),p&&p(Z)}catch(U){console.log(U)}};return v.useEffect(()=>{const Z=L.current;if(!Z)return;(async()=>{try{await Z.play()}catch{}})()},[y]),y?s.jsxs(N3,{"aria-label":"Video post",children:[s.jsxs(k3,{children:[s.jsxs(B3,{children:[s.jsx(L3,{src:a,alt:"Author avatar"}),s.jsxs(U3,{children:[s.jsx(H3,{children:x}),s.jsx(Y3,{children:m})]})]}),s.jsx(G3,{"aria-label":"Post menu",title:"More options",children:s.jsx(vg,{size:18})})]}),s.jsx(_3,{children:s.jsx("video",{ref:L,src:y,controls:!0,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",poster:S,"aria-label":x||"Video clip"})}),s.jsxs(D3,{children:[s.jsxs($3,{children:[s.jsx(Co,{onClick:H,"aria-label":B,title:B,children:w?s.jsx(Bf,{size:22}):s.jsx(Lf,{size:22})}),s.jsx(Co,{"aria-label":"Comment",title:"Comment",children:s.jsx(Yf,{size:20})}),s.jsx(Co,{onClick:X,"aria-label":"Share",title:"Share",children:s.jsx(Gf,{size:20})})]}),s.jsx(Co,{onClick:N,"aria-label":D,title:D,children:_?s.jsx(Uf,{size:20}):s.jsx(Hf,{size:20})})]})]}):null}const X3=[{id:1,name:"Sense of Collective Identity",img:wo.CollectiveIdentity||"https://images.unsplash.com/photo-1506765515384-028b60a970df?w=400&h=400&fit=crop",hasNew:!0,slides:[L5.test,"https://images.unsplash.com/photo-1554189097-ffe88e998a2b?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602524811998-8b90d1d03663?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1505066836043-7d9b15a1595d?w=800&h=1400&fit=crop"]},{id:2,name:"Understanding Diversity",img:wo.Diversity||"https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1581091226825-c6a76aa2f4c1?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&h=1400&fit=crop"]},{id:3,name:"Nationalism in India",img:wo.Nationalism||"https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1524310393100-34cb9cd27f1e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1533199829561-72f88a8f0c56?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602451126518-9b36f1b23543?w=800&h=1400&fit=crop"]},{id:4,name:"Globalisation and the Indian Economy",img:wo.Globalisation||"https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1565372918675-bacb79cdd3a5?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&h=1400&fit=crop"]}];function V3({isOpen:a,activeIndex:r,setActiveIndex:c,total:o,onClose:f,duration:d=3e3}){const p=v.useRef(Date.now()),y=v.useRef(),x=v.useRef(0),m=v.useCallback(()=>{const w=Date.now()-p.current,z=Math.min(1,w/d);x.current=z,z>=1?r<o-1?c(_=>_+1):f():y.current=requestAnimationFrame(m)},[r,o,d,f,c]);return v.useEffect(()=>{if(a)return p.current=Date.now(),y.current=requestAnimationFrame(m),()=>cancelAnimationFrame(y.current)},[a,r,m]),{resetTimer:v.useCallback(()=>{p.current=Date.now()},[]),getProgressValue:()=>x.current}}const Q3=b.div``,Z3=b.div`
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
`,K3=b.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 16px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,J3=b.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border: 0;
  background: transparent;
  cursor: pointer;
`,F3=b.div`
  padding: 2px;
  border-radius: 999px;
  ${a=>a.$hasNew?xa`
          background: linear-gradient(
            45deg,
            #f09433 0%,
            #e6683c 25%,
            #dc2743 50%,
            #cc2366 75%,
            #bc1888 100%
          );
        `:xa`
          background: transparent;
        `};
`,W3=b.div`
  background: #fff;
  padding: 3px;
  border-radius: 999px;
`,I3=b.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 999px;
  user-drag: none;
  -webkit-user-drag: none;
`,P3=b.span`
  font-size: 12px;
  color: #1f2937;
  max-width: 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,e4=b.div`
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
`,t4=b.div`
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
`,n4=b.div`
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
`,a4=b.div`
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
`,l4=b.div`
  height: 3px;
  flex: 1;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    height: 2.5px;
  }
`,i4=b.div`
  height: 100%;
  background: linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.95) 100%);
  transition: width 100ms linear;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
`,r4=b.div`
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
`,o4=b.img`
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
`,u4=b.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
`,c4=b.div`
  font-weight: 700;
  font-size: clamp(13px, 2.2vw, 15px);
  line-height: 1.2;
  letter-spacing: -0.01em;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,s4=b.div`
  font-size: clamp(11px, 1.8vw, 13px);
  opacity: 0.85;
  line-height: 1.2;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,f4=b.button`
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
`,d4=b.img`
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
`,_p=b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 10;
  touch-action: manipulation;
  
  ${a=>a.$side==="left"?xa`
          left: 0; 
          width: 33.3333%;
        `:xa`
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
`;function h4(a){return ve({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1.47978 1.4797C1.30227 1.65721 1.28614 1.93498 1.43137 2.13072L1.47978 2.1868L4.1695 4.87652C2.88817 5.77616 1.93052 7.11985 1.53259 8.70952C1.46554 8.97738 1.62834 9.24892 1.89621 9.31598C2.16409 9.38298 2.4356 9.22025 2.50266 8.95232C2.85564 7.54225 3.72742 6.35956 4.88944 5.59626L6.09586 6.80278C5.62419 7.28378 5.33334 7.94278 5.33334 8.66965C5.33334 10.1424 6.52724 11.3363 8 11.3363C8.72694 11.3363 9.38587 11.0454 9.86694 10.5738L13.8131 14.5201C14.0084 14.7154 14.3249 14.7154 14.5202 14.5201C14.6977 14.3426 14.7139 14.0649 14.5686 13.8691L14.5202 13.813L10.4445 9.73692L10.4453 9.73592L9.64527 8.93732L7.732 7.02445L7.73334 7.02392L5.81252 5.10513L5.81334 5.10392L5.05782 4.35024L2.18689 1.4797C1.99163 1.28444 1.67504 1.28444 1.47978 1.4797ZM6.80274 7.51025L9.15947 9.86698C8.85947 10.1575 8.4506 10.3363 8 10.3363C7.07954 10.3363 6.33334 9.59012 6.33334 8.66965C6.33334 8.21905 6.51216 7.81018 6.80274 7.51025ZM8 3.66658C7.33314 3.66658 6.68607 3.7653 6.07406 3.94992L6.89874 4.77404C7.25594 4.70346 7.62427 4.66658 8 4.66658C10.6154 4.66658 12.8733 6.45342 13.4981 8.95538C13.565 9.22325 13.8364 9.38618 14.1043 9.31932C14.3723 9.25238 14.5352 8.98098 14.4683 8.71305C13.7329 5.7684 11.077 3.66658 8 3.66658ZM8.1298 6.0061L10.664 8.53992C10.5961 7.16865 9.49814 6.07168 8.1298 6.0061Z"},child:[]}]})(a)}function p4({currentItem:a,isOpen:r,slideIndex:c,setSlideIndex:o,onClose:f,duration:d=3e3}){const p=a?.slides?.length||0,{resetTimer:y,getProgressValue:x}=V3({isOpen:r,activeIndex:c,setActiveIndex:o,total:p,onClose:f,duration:d}),m=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[,S]=v.useState(0);v.useEffect(()=>{if(!r||m)return;let R;const B=()=>{S(D=>D+1),R=requestAnimationFrame(B)};return R=requestAnimationFrame(B),()=>cancelAnimationFrame(R)},[r,m]);const w=v.useCallback(()=>{a&&(c<p-1?(o(R=>R+1),y()):f())},[a,c,p,y,f,o]),z=v.useCallback(()=>{a&&(c>0?(o(R=>R-1),y()):f())},[a,c,y,f,o]);v.useEffect(()=>{const R=B=>{r&&(B.key==="Escape"&&f(),B.key==="ArrowRight"&&w(),B.key==="ArrowLeft"&&z())};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[r,w,z,f]),v.useEffect(()=>(r?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[r]);const _=R=>R<c?1:R>c?0:x();return!r||!a?null:s.jsx(e4,{onClick:f,"aria-label":"Story overlay",children:s.jsx(t4,{onClick:R=>R.stopPropagation(),children:s.jsxs(n4,{children:[s.jsx(a4,{"aria-label":"Story progress",children:a.slides.map((R,B)=>s.jsx(l4,{"aria-label":`Progress track ${B+1}`,children:s.jsx(i4,{style:{width:`${_(B)*100}%`}})},B))}),s.jsxs(r4,{children:[s.jsx(o4,{src:a.img,alt:a.name}),s.jsxs(u4,{children:[s.jsx(c4,{children:a.name}),s.jsx(s4,{children:"Chapter highlight"})]}),s.jsx(f4,{"aria-label":"Close story",onClick:f,title:"Close",children:s.jsx(h4,{})})]}),a.slides.map((R,B)=>s.jsx(d4,{src:R,alt:`Slide ${B+1}`,$active:B===c,draggable:!1},B)),s.jsx(_p,{$side:"left",onClick:z,"aria-label":"Previous slide"}),s.jsx(_p,{$side:"right",onClick:w,"aria-label":"Next slide"})]})})})}function m4({items:a,duration:r=3e3,onOpen:c,onClose:o,className:f}){const d=v.useRef(null),p=v.useRef(!1),y=v.useRef(0),x=v.useRef(0),[m,S]=v.useState(a||[]),[w,z]=v.useState(null),[_,R]=v.useState(0),B=m.find(U=>U.id===w)||null,D=!!w,L=U=>{R(0),z(U),S(Q=>Q.map(P=>P.id===U?{...P,hasNew:!1}:P)),c&&c(U)},H=()=>{z(null),o&&o()},N=U=>{p.current=!0,y.current=U.clientX,x.current=d.current?.scrollLeft||0,U.target.setPointerCapture?.(U.pointerId)},X=U=>{if(!p.current||!d.current)return;const Q=U.clientX-y.current;d.current.scrollLeft=x.current-Q},Z=()=>{p.current=!1};return s.jsxs(Q3,{className:f,children:[s.jsx(Z3,{children:s.jsx(K3,{ref:d,onPointerDown:N,onPointerMove:X,onPointerUp:Z,onPointerLeave:Z,"aria-label":"Stories scroller",children:m.map(U=>s.jsxs(J3,{onClick:()=>L(U.id),"aria-label":`Open story ${U.name}`,title:U.name,children:[s.jsx(F3,{$hasNew:U.hasNew,children:s.jsx(W3,{children:s.jsx(I3,{src:U.img,alt:U.name,draggable:!1})})}),s.jsx(P3,{children:U.name})]},U.id))})}),s.jsx(p4,{currentItem:B,isOpen:D,slideIndex:_,setSlideIndex:R,onClose:H,duration:r})]})}const g4=[{id:1,type:"infografic",title:"Sense of Collective Identity - Overview",description:"An overview of how shared history, culture, and values shape collective identity in society.",detailedDescription:"Collective identity is the shared sense of belonging among individuals who associate themselves with a larger group or community. It is shaped by shared language, culture, traditions, and values that connect people to a collective purpose. Understanding this helps explain how societies maintain unity and continuity over time.",imgSrc:An.Slide1},{id:2,type:"carousel",title:"Understanding Collective Identity",description:"Exploring the roots and importance of collective identity in social cohesion.",detailedDescription:"This section examines how collective identity emerges from shared experiences, beliefs, and cultural narratives. It plays a crucial role in fostering social solidarity, promoting cooperation, and helping individuals find meaning through group affiliation. The concept is central to understanding social movements, nationalism, and cultural preservation.",carouselMetaData:[{Id:1,type:"img",imgSrc:An.Slide3},{Id:2,type:"img",imgSrc:An.Slide4},{Id:3,type:"img",imgSrc:An.Slide5},{Id:4,type:"img",imgSrc:An.Slide6}]},{id:3,type:"carousel",title:"Symbols and Shared Culture",description:"How flags, festivals, and traditions represent unity and belonging.",detailedDescription:"Symbols such as national flags, anthems, and cultural rituals embody the essence of collective identity. These shared symbols reinforce emotional ties, transmit values, and sustain collective memory. Festivals and traditions not only celebrate heritage but also help younger generations internalize the sense of belonging to a larger community.",carouselMetaData:[{imgId:1,type:"img",imgSrc:An.Slide7},{imgId:2,type:"img",imgSrc:An.Slide8},{imgId:3,type:"img",imgSrc:An.Slide9}]},{id:5,type:"videoClip",title:"Collective Identity in Action",description:"A short video summarizing real-world examples of collective identity shaping societies.",detailedDescription:"This video highlights real-world scenarios where collective identity has influenced social and political movements. From grassroots environmental campaigns to national independence struggles, it shows how shared beliefs and unity can drive change, empower communities, and redefine social narratives.",videoClipSrc:B5.videoClip1},{id:6,type:"infografic",title:"Evolution of Collective Identity",description:"Tracing the historical development of group identity across civilizations.",detailedDescription:"Collective identity has evolved alongside human societies — from tribal affiliations and religious communities to modern national and digital identities. This infographic explores how globalization, migration, and technology continuously reshape how groups define themselves and relate to others in an interconnected world.",imgSrc:An.Slide5}],x4=b.div`
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
`;function y4(){return v.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]),s.jsxs(s.Fragment,{children:[s.jsx(m4,{items:X3,duration:3e3,onOpen:a=>console.log("opened:",a),onClose:()=>console.log("closed")}),s.jsx(x4,{children:s.jsx("div",{className:"d-flex gap-3 flex-column align-items-center mt-3",children:g4.map(a=>s.jsx("div",{style:{width:"100%"},children:a.type==="infografic"?s.jsx(u3,{title:a.title,description:a.description,imgSrc:a.imgSrc,badge:a.badge}):a.type==="carousel"?s.jsx(O3,{data:a}):a.type==="vedioClip"?s.jsx(q3,{data:a}):null},a.id))})})]})}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b4=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,c,o)=>o?o.toUpperCase():c.toLowerCase()),Dp=a=>{const r=b4(a);return r.charAt(0).toUpperCase()+r.slice(1)},Cg=(...a)=>a.filter((r,c,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===c).join(" ").trim(),S4=a=>{for(const r in a)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=v.forwardRef(({color:a="currentColor",size:r=24,strokeWidth:c=2,absoluteStrokeWidth:o,className:f="",children:d,iconNode:p,...y},x)=>v.createElement("svg",{ref:x,...w4,width:r,height:r,stroke:a,strokeWidth:o?Number(c)*24/Number(r):c,className:Cg("lucide",f),...!d&&!S4(y)&&{"aria-hidden":"true"},...y},[...p.map(([m,S])=>v.createElement(m,S)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=(a,r)=>{const c=v.forwardRef(({className:o,...f},d)=>v.createElement(j4,{ref:d,iconNode:r,className:Cg(`lucide-${v4(Dp(a))}`,`lucide-${a}`,o),...f}));return c.displayName=Dp(a),c};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],C4=Pe("atom",E4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],_l=Pe("book-open",z4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],M4=Pe("bookmark",T4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],R4=Pe("calculator",A4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],N4=Pe("check",O4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],D4=Pe("chevron-right",_4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],k4=Pe("circle-check-big",$4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],L4=Pe("code",B4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],$p=Pe("flask-conical",U4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Y4=Pe("graduation-cap",H4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],kp=Pe("globe",G4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],X4=Pe("grid-3x3",q4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],Q4=Pe("languages",V4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],K4=Pe("lightbulb",Z4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],zo=Pe("lock",J4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],W4=Pe("sparkles",F4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],P4=Pe("star",I4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],t6=Pe("target",e6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],a6=Pe("trophy",n6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],i6=Pe("x",l6),Ve={bgGrad:"linear-gradient(135deg, #8be3f5 0%, #9fefd0 50%, #b5f8b5 100%)",glass:"rgba(255,255,255,0.95)",border:"rgba(255,255,255,0.9)",text:"#0f172a",subtext:"#64748b",primary:"#0EA5E9",success:"#22c55e",shadow:"0 20px 60px rgba(0,0,0,0.08)",ring:"rgba(14,165,233,0.12)"},r6=Et`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(30px, -30px) rotate(5deg); }
  50% { transform: translate(-20px, -50px) rotate(-5deg); }
  75% { transform: translate(40px, -20px) rotate(3deg); }
`,o6=Et`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`,u6=Et`0%,100%{opacity:.15}50%{opacity:.3}`,c6=Et`0%,49%{opacity:1}50%,100%{opacity:0}`;Et`
  to { stroke-dashoffset: 0; }
`;const s6=b.div`
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${Ve.bgGrad};
  font-family: "Inter", system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  padding: 1rem;
`,Bp=b.div`
  position: absolute;
  border-radius: 50%;
  background: ${({$color:a})=>a};
  width: ${({$size:a})=>a}px;
  height: ${({$size:a})=>a}px;
  top: ${({$top:a})=>a};
  left: ${({$left:a})=>a};
  bottom: ${({$bottom:a})=>a};
  right: ${({$right:a})=>a};
  filter: blur(2px);
  animation: ${u6} ${({$duration:a})=>a}s infinite ease-in-out;
  animation-delay: ${({$delay:a})=>a}s;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`,sa=b.div`
  position: absolute;
  opacity: ${({$opacity:a})=>a||.15};
  animation: ${o6} ${({$duration:a})=>a}s infinite ease-in-out;
  animation-delay: ${({$delay:a})=>a}s;
  z-index: 1;
`,fa=b.svg`
  width: ${({$size:a})=>a}px;
  height: ${({$size:a})=>a}px;
  stroke: rgba(15, 23, 42, 0.25);
  fill: none;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
`,f6=b.div`
  position: absolute;
  opacity: 0.12;
  animation: ${r6} ${({$duration:a})=>a}s infinite ease-in-out;
  animation-delay: ${({$delay:a})=>a}s;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`,d6=b.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 100%;
`,h6=b.div`
  width: 100%;
  max-width: 1080px;
`,zg=b.div`
  background: ${Ve.glass};
  backdrop-filter: blur(20px);
  border: 1.5px solid ${Ve.border};
  box-shadow: ${Ve.shadow};
  border-radius: 1.5rem;
  padding: 1.5rem;
  @media (min-width: 768px) {
    border-radius: 1.75rem;
    padding: 2.5rem;
  }
`,p6=b(zg)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,m6=b.div`
  text-align: center;
  margin-bottom: 1.5rem;
  display: grid;
  gap: 1rem;
  justify-items: center;
  @media (min-width: 768px) {
    margin-bottom: 2.5rem;
    gap: 1.25rem;
  }
`,g6=b.h1`
  font-size: clamp(1.6rem, 5.5vw, 2.8rem);
  font-weight: 900;
  line-height: 1.1;
  color: ${Ve.text};
  margin: 0;
  letter-spacing: -0.02em;
`,x6=b.span`
  background: linear-gradient(135deg, ${Ve.primary} 0%, ${Ve.success} 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 0.2px;
`,y6=b.span`
  &::after {
    content: "|";
    animation: ${c6} 1s infinite;
    margin-left: 4px;
  }
`,v6=b.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: ${Ve.subtext};
  margin: 0;
  font-weight: 500;
  max-width: 600px;
`,Lp=b.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`,Up=b.div`
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, ${Ve.primary} 0%, ${Ve.success} 100%);
  display: grid;
  place-items: center;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 8px 24px rgba(14, 165, 233, 0.3);
`,Hp=b.div`
  display: grid;
  gap: 0.15rem;
  h2 {
    margin: 0;
    font-size: 1.25rem;
    color: #0f172a;
    font-weight: 800;
    letter-spacing: -0.01em;
  }
  p {
    margin: 0;
    font-size: 0.9rem;
    color: ${Ve.subtext};
    font-weight: 500;
  }
`,b6=b.div`
  position: relative;
`,S6=b.select`
  width: 100%;
  padding: 1.1rem 3rem 1.1rem 1.25rem;
  border-radius: 1rem;
  border: 2px solid #e2e8f0;
  font-size: 1.05rem;
  font-weight: 600;
  color: ${Ve.text};
  background: white;
  appearance: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  
  &:focus {
    outline: none;
    border-color: ${Ve.primary};
    box-shadow: 0 0 0 6px ${Ve.ring}, 0 4px 12px rgba(0, 0, 0, 0.08);
  }
  
  &:hover {
    border-color: #cbd5e1;
  }
`,Yp=b.div`
  display: grid;
  gap: 1.25rem;
`,w6=b.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,j6=b.div`
  border-radius: 1.25rem;
  padding: 1.25rem;
  background: #fff;
  border: 2px solid #e2e8f0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: grid;
  gap: 0.75rem;
  align-content: start;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${Ve.primary}, ${Ve.success});
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${Ve.primary};
    box-shadow: 0 12px 32px rgba(14, 165, 233, 0.2);
    
    &::before {
      transform: scaleX(1);
    }
  }

  ${({$selected:a})=>a&&`
    background: linear-gradient(135deg, #8be3f5 0%, #9fefd0 50%, #b5f8b5 100%);
    color: #000;
    border-color: rgba(0,0,0,0.15);
    box-shadow: 0 16px 40px rgba(139, 227, 245, 0.4);
    transform: translateY(-2px);
    
    &::before {
      transform: scaleX(1);
      background: rgba(0, 0, 0, 0.2);
    }
  `}
`,E6=b.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 0.75rem;
  
  span {
    font-weight: 800;
    letter-spacing: -0.01em;
    font-size: 1.05rem;
  }
  
  .icon {
    opacity: 0.85;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 0.75rem;
    background: ${({$selected:a})=>a?"rgba(255,255,255,0.5)":"rgba(14, 165, 233, 0.08)"};
    transition: all 0.2s ease;
  }
`,C6=b.div`
  margin-top: 0.5rem;
  padding-top: 0.75rem;
  border-top: 2px dashed rgba(0, 0, 0, 0.1);
  ${({$selected:a})=>a&&"border-top-color: rgba(0,0,0,.25);"}
`,z6=b.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;
`,T6=b.button`
  border: 0;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.6rem 0.9rem;
  border-radius: 0.75rem;
  background: ${({$inSelected:a})=>a?"rgba(255,255,255,.95)":"#f1f5f9"};
  color: ${({$inSelected:a})=>a?"#0f172a":Ve.text};
  box-shadow: ${({$inSelected:a})=>a?"0 4px 12px rgba(0,0,0,.15)":"0 2px 4px rgba(0,0,0,.04)"};
  border: 1.5px solid
    ${({$inSelected:a})=>a?"rgba(0,0,0,.15)":"#e2e8f0"};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
    border-color: ${Ve.primary};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:focus-visible {
    outline: 3px solid ${Ve.ring};
    outline-offset: 2px;
  }
`,M6=b(zg)`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-style: dashed;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  gap: 1rem;
  border-color: #cbd5e1;
  
  .icon-wrap {
    width: 4rem;
    height: 4rem;
    border-radius: 1.25rem;
    background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  p {
    color: ${Ve.subtext};
    font-weight: 600;
    margin: 0;
    font-size: 1.05rem;
  }
`;function A6(){const a=Cf(),[r,c]=v.useState(""),[o,f]=v.useState(""),[d,p]=v.useState(""),[y,x]=v.useState(0),[m,S]=v.useState(!1),[w,z]=v.useState(0),_=["Achieve Excellence","Master Every Subject","Unlock Your Potential"];v.useEffect(()=>{const X=m?40:80,Z=2e3,U=setTimeout(()=>{const Q=_[y];if(!m&&w===Q.length){setTimeout(()=>S(!0),Z);return}if(m&&w===0){S(!1),x(P=>(P+1)%_.length);return}z(P=>P+(m?-1:1)),p(Q.substring(0,w+(m?-1:1)))},X);return()=>clearTimeout(U)});const R={"Grade 9":{subjects:{English:["Ms. Priya Sharma","Mr. Vivek Sinha","Ms. Ritu Malhotra"],Mathematics:["Mr. Rajesh Kumar","Ms. Neha Gupta","Mr. Ankit Jain"],Science:["Ms. Anjali Mehta","Mr. Suresh Iyer","Ms. Pooja Khanna"],"Social Studies":["Siddharth Sir","Ms. Ananya Bose","Mr. Harish Nanda"],Hindi:["Ms. Kavita Reddy","Mr. Manoj Tiwari","Ms. Poonam Joshi"],"Computer Science":["Mr. Arvind Nair","Ms. Shruti Desai","Mr. Kunal Shah"]}},"Grade 10":{subjects:{English:["Ms. Sunita Verma","Mr. Ashish Bhatia","Ms. Riya Kapoor"],Mathematics:["Mr. Rohan Patel","Ms. Priyanka Das","Mr. Sanjay Kulkarni"],Science:["Ms. Anjali Mehta","Mr. Amit Chakraborty","Ms. Meera Nambiar"],"Social Studies":["Siddharth Sir","Ms. Nidhi Arora","Mr. Parth Ghosh"],Hindi:["Ms. Kavita Reddy","Mr. Ajay Sharma","Ms. Shalini Tripathi"],"Computer Science":["Mr. Arvind Nair","Ms. Tanvi Kulkarni","Mr. Rohit Menon"]}},"Grade 11":{subjects:{English:["Ms. Priya Sharma","Mr. Karan Malhotra","Ms. Deepa Rao"],Physics:["Mr. Nitin Agarwal","Ms. Rachna Bansal","Mr. Vivek Mishra"],Chemistry:["Ms. Sneha Kapoor","Mr. Aditya Mehta","Ms. Nupur Jain"],Biology:["Siddharth Sir","Ms. Radhika Sen","Mr. Mohan Pillai"],Mathematics:["Mr. Deepak Rao","Ms. Shreya Iyer","Mr. Varun Sethi"],"Computer Science":["Mr. Arvind Nair","Ms. Naina Khatri","Mr. Prateek Verma"]}},"Grade 12":{subjects:{English:["Ms. Sunita Verma","Mr. Aalok Trivedi","Ms. Garima Singh"],Physics:["Mr. Nitin Agarwal","Ms. Priti Saxena","Mr. Keshav Reddy"],Chemistry:["Ms. Sneha Kapoor","Mr. Rohan Mukherjee","Ms. Farah Qureshi"],Biology:["Siddharth Sir","Ms. Neelam Vaidya","Mr. Sameer Kulkarni"],Mathematics:["Mr. Deepak Rao","Ms. Ishita Shah","Mr. Yashwant Kumar"],"Computer Science":["Mr. Arvind Nair","Ms. Pallavi Menon","Mr. Siddharth Jain"]}}},B={English:_l,Mathematics:R4,Science:$p,Physics:C4,Chemistry:$p,Biology:kp,"Social Studies":kp,Hindi:Q4,"Computer Science":L4},D=r?Object.keys(R[r].subjects):[],L=X=>f(X),H=(X,Z)=>{(X.key==="Enter"||X.key===" ")&&(X.preventDefault(),L(Z))},N=X=>{!r||!o||a("/instalearn/teacher",{state:{grade:r,subject:o,teacher:X}})};return s.jsxs(s6,{children:[s.jsx(Bp,{$color:"rgba(255,255,255,0.16)",$size:520,$top:"-12%",$right:"-6%",$duration:8,$delay:0}),s.jsx(Bp,{$color:"rgba(255,255,255,0.1)",$size:640,$bottom:"-16%",$left:"-8%",$duration:10,$delay:3}),s.jsx(sa,{style:{top:"8%",left:"5%"},$duration:8,$delay:0,$opacity:.3,children:s.jsx(fa,{$size:100,children:s.jsx("path",{d:"M15 50 L50 25 L85 50 L50 75 Z M50 25 L50 8 M43 8 L57 8"})})}),s.jsx(sa,{style:{top:"12%",right:"8%"},$duration:9,$delay:1,$opacity:.28,children:s.jsxs(fa,{$size:90,children:[s.jsx("circle",{cx:"45",cy:"45",r:"30"}),s.jsx("path",{d:"M45 15 L45 45 L65 65"})]})}),s.jsx(sa,{style:{bottom:"15%",left:"8%"},$duration:10,$delay:2,$opacity:.26,children:s.jsxs(fa,{$size:110,children:[s.jsx("rect",{x:"15",y:"20",width:"80",height:"60",rx:"6"}),s.jsx("path",{d:"M25 35 L50 35 M25 48 L75 48 M25 61 L65 61"})]})}),s.jsx(sa,{style:{bottom:"20%",right:"10%"},$duration:7,$delay:1.5,$opacity:.3,children:s.jsxs(fa,{$size:95,children:[s.jsx("path",{d:"M20 75 L20 28 Q20 15 33 15 L77 15 Q90 15 90 28 L90 75"}),s.jsx("path",{d:"M30 38 L45 38 M30 51 L65 51 M30 64 L58 64"})]})}),s.jsx(sa,{style:{top:"45%",left:"2%"},$duration:11,$delay:3,$opacity:.24,children:s.jsxs(fa,{$size:85,children:[s.jsx("circle",{cx:"42",cy:"42",r:"28"}),s.jsx("path",{d:"M42 14 L42 42 M42 42 L60 42"})]})}),s.jsx(sa,{style:{top:"55%",right:"4%"},$duration:9,$delay:2.5,$opacity:.27,children:s.jsx(fa,{$size:105,children:s.jsx("path",{d:"M25 38 L52 12 L80 38 M38 38 L38 75 L67 75 L67 38"})})}),s.jsx(sa,{style:{top:"30%",right:"18%"},$duration:10,$delay:1.8,$opacity:.25,children:s.jsx(fa,{$size:80,children:s.jsx("path",{d:"M15 40 L40 15 L65 40 L40 65 L15 40 M40 15 L40 35 M35 30 L45 30"})})}),s.jsx(sa,{style:{bottom:"35%",left:"15%"},$duration:8,$delay:2.2,$opacity:.22,children:s.jsxs(fa,{$size:75,children:[s.jsx("circle",{cx:"37",cy:"37",r:"25"}),s.jsx("path",{d:"M37 37 L50 24 M37 37 L50 37"}),s.jsx("circle",{cx:"37",cy:"37",r:"4",fill:"rgba(15, 23, 42, 0.25)"})]})}),[P4,K4,a6,t6,W4].map((X,Z)=>s.jsx(f6,{$duration:9+Z*1.5,$delay:Z*.8,style:{left:`${8+Z*18}%`,top:`${20+Z%2*35}%`},children:s.jsx(X,{size:28,color:"rgba(255,255,255,0.5)"})},Z)),s.jsx(d6,{children:s.jsxs(h6,{children:[s.jsxs(m6,{children:[s.jsx(g6,{children:s.jsx(x6,{children:s.jsx(y6,{children:d})})}),s.jsx(v6,{children:"Your personalized learning journey starts here"})]}),s.jsxs(p6,{children:[s.jsxs(Yp,{children:[s.jsxs(Lp,{children:[s.jsx(Up,{children:s.jsx(Y4,{size:20})}),s.jsxs(Hp,{children:[s.jsx("h2",{children:"Select Your Grade"}),s.jsx("p",{children:"Choose your class to explore subjects"})]})]}),s.jsxs(b6,{children:[s.jsxs(S6,{value:r,onChange:X=>{c(X.target.value),f("")},children:[s.jsx("option",{value:"",disabled:!0,children:"Select Grade"}),Object.keys(R).map(X=>s.jsx("option",{value:X,children:X},X))]}),r&&s.jsx(k4,{size:22,style:{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",color:Ve.success}})]})]}),s.jsxs(Yp,{children:[s.jsxs(Lp,{children:[s.jsx(Up,{children:s.jsx(_l,{size:20})}),s.jsxs(Hp,{children:[s.jsx("h2",{children:"Choose a Subject"}),s.jsx("p",{children:"Click a teacher to view their profile"})]})]}),D.length?s.jsx(w6,{children:D.map(X=>{const Z=B[X]||_l,U=o===X,Q=R[r].subjects[X],P=Array.isArray(Q)?Q:[Q];return s.jsxs(j6,{role:"button",tabIndex:0,"aria-pressed":U,$selected:U,onClick:()=>L(X),onKeyDown:ue=>H(ue,X),"aria-label":`Open ${X}`,children:[s.jsxs(E6,{$selected:U,children:[s.jsx("span",{children:X}),s.jsx("div",{className:"icon",children:s.jsx(Z,{size:20})})]}),s.jsx(C6,{$selected:U,children:U?s.jsx(z6,{children:P.map(ue=>s.jsx(T6,{$inSelected:!0,onClick:Ce=>{Ce.stopPropagation(),N(ue)},onKeyDown:Ce=>{(Ce.key==="Enter"||Ce.key===" ")&&(Ce.preventDefault(),Ce.stopPropagation(),N(ue))},children:ue},ue))}):s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,color:"#475569",fontWeight:700,fontSize:".9rem"},children:[s.jsx("span",{children:"View teachers"}),s.jsx(D4,{size:16})]})})]},X)})}):s.jsxs(M6,{children:[s.jsx("div",{className:"icon-wrap",children:s.jsx(_l,{size:32,color:"#64748b"})}),s.jsx("p",{children:"Please select a grade to view subjects"})]})]})]})]})})]})}function Gp(a){return ve({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"},child:[]}]})(a)}function To(a){return ve({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(a)}function Qi(a){return ve({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(a)}function R6(a){return ve({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(a)}function qp(a){return ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(a)}function Xp(a){return ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(a)}function Vp(a){return ve({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(a)}function O6(a){return ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(a)}function Qp(a){return ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(a)}function Zp(a){return ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"},child:[]}]})(a)}function Kp(a){return ve({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(a)}function Mo(a){return ve({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(a)}function Ao(a){return ve({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(a)}function N6(a){return ve({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(a)}const _6=Et`
  from { opacity: 0; transform: translateY(32px); }
  to { opacity: 1; transform: translateY(0); }
`,Tg=Et`
  from { opacity: 0; }
  to { opacity: 1; }
`,D6=Et`
  from { opacity: 0; transform: translate(-50%, -48%) scale(0.95); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
`,Mg=Et`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`,J={bgSecondary:"#FFFFFF",card:"#FFFFFF",cardHover:"#F8FAFC",text:"#0F172A",subtext:"#64748B",primary:"#0EA5E9",accent:"#06B6D4",accentGreen:"#10B981",border:"#E2E8F0",borderLight:"#CBD5E1",shadow:"0 20px 50px rgba(0, 0, 0, 0.08)",overlay:"rgba(15, 23, 42, 0.5)"},$6=b.div`
  min-height: 100vh;
  padding: 32px 20px;
  background: ${a=>a.$theme==="dark"?"linear-gradient(135deg, #0f172a 0%, #0b3a2a 50%, #0b3a2a 100%)":"linear-gradient(135deg, #8be3f5 0%, #9fefd0 50%, #b5f8b5 100%)"};
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
    animation: ${Mg} 20s ease-in-out infinite;
    pointer-events: none;
  }
`,k6=b.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${_6} 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  z-index: 1;
`,qf=b.div`
  background: ${J.card};
  border: 1px solid ${J.border};
  border-radius: 24px;
  box-shadow: ${J.shadow};
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,Jp=b.div`
  position: fixed;
  inset: 0;
  background: ${J.overlay};
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${Tg} 0.2s ease-out;
`,Fp=b.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${J.bgSecondary};
  border-radius: 24px;
  padding: 32px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.2);
  animation: ${D6} 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1001;

  @media (max-width: 640px) {
    padding: 24px;
  }
`,Wp=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,Ip=b.h2`
  font-size: 24px;
  font-weight: 800;
  color: ${J.text};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
`,Pp=b.button`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid ${J.border};
  background: ${J.card};
  color: ${J.subtext};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${J.primary};
    color: ${J.primary};
    transform: rotate(90deg);
  }
`,da=b.div`
  margin-bottom: 20px;
`,ha=b.label`
  display: block;
  font-weight: 600;
  color: ${J.text};
  margin-bottom: 8px;
  font-size: 14px;
`,Tl=b.input`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid ${J.border};
  border-radius: 12px;
  font-size: 16px;
  color: ${J.text};
  background: ${J.bgSecondary};
  transition: all 0.2s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${J.primary};
    box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1);
  }
`,em=b.select`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid ${J.border};
  border-radius: 12px;
  font-size: 16px;
  color: ${J.text};
  background: ${J.bgSecondary};
  transition: all 0.2s ease;
  cursor: pointer;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${J.primary};
    box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1);
  }
`,tm=b.div`
  display: flex;
  gap: 12px;
  margin-top: 28px;
`,Ro=b.button`
  flex: 1;
  padding: 14px 24px;
  border-radius: 12px;
  border: none;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${a=>a.primary?`
    background: linear-gradient(135deg, ${J.primary}, ${J.accent});
    color: white;
    box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(14, 165, 233, 0.4);
    }
  `:`
    background: ${J.card};
    color: ${J.text};
    border: 2px solid ${J.border};

    &:hover {
      border-color: ${J.borderLight};
    }
  `}
`,B6=b(qf)`
  padding: 40px;
  margin-bottom: 24px;
  background: linear-gradient(135deg, ${J.bgSecondary} 0%, #F8FAFC 100%);
  border: 1px solid ${J.borderLight};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${J.primary}, ${J.accentGreen});
  }

  @media (max-width: 768px) {
    padding: 28px 20px;
  }
`,L6=b.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: 28px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 20px;
  }
`,U6=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`,H6=b.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${J.primary}, ${J.accentGreen});
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 40px;
  font-weight: 900;
  box-shadow: 0 8px 32px rgba(14, 165, 233, 0.3);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    padding: 4px;
    background: linear-gradient(135deg, ${J.primary}, ${J.accentGreen});
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.4;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    font-size: 32px;
  }
`,Y6=b.div`
  display: grid;
  gap: 24px;
`,G6=b.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,q6=b.div`
  display: grid;
  gap: 8px;
`,X6=b.h1`
  font-size: 32px;
  font-weight: 800;
  color: ${J.text};
  margin: 0;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`,V6=b.p`
  color: ${J.subtext};
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`,Q6=b.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`,nm=b.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  border: 2px solid ${J.border};
  background: ${J.bgSecondary};
  color: ${J.text};
  border-radius: 14px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, ${J.primary}, ${J.accent});
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: ${J.primary};
    color: ${J.primary};
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(14, 165, 233, 0.2);

    &::before {
      opacity: 0.1;
    }
  }

  svg, span {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    flex: 1;
  }
`,Z6=b.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Bs=b.div`
  background: linear-gradient(135deg, #FFFFFF, #F8FAFC);
  border: 2px solid ${J.border};
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    border-color: ${J.borderLight};
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
  }
`,Ls=b.div`
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, ${J.primary}, ${J.accentGreen});
  color: #fff;
  font-size: 24px;
  box-shadow: 0 8px 16px rgba(14, 165, 233, 0.25);
`,Us=b.div`
  display: grid;
  gap: 4px;
  flex: 1;
`,Hs=b.span`
  font-weight: 800;
  font-size: 28px;
  color: ${J.text};
  line-height: 1;
`,Ys=b.span`
  font-size: 13px;
  color: ${J.subtext};
  font-weight: 500;
`,Gs=b.div`
  color: #F59E0B;
  font-size: 20px;
`,K6=b.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 24px 0;
`,am=b.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 18px;
  border-radius: 16px;
  border: 2px solid ${a=>a.active?J.primary:J.border};
  background: ${a=>a.active?`linear-gradient(135deg, ${J.primary}, ${J.accent})`:J.card};
  color: ${a=>a.active?"#fff":J.subtext};
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${a=>a.active?"0 8px 24px rgba(14, 165, 233, 0.3)":"none"};

  svg { 
    opacity: ${a=>a.active?1:.6}; 
    font-size: 18px;
  }

  &:hover { 
    transform: translateY(-2px);
    border-color: ${J.primary};
    color: ${a=>a.active?"#fff":J.text};
  }
`,lm=b(qf)`
  padding: 24px;
  animation: ${Tg} 0.5s ease-out;
`,Ag=b.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  align-items: center;
  padding: 20px;
  border-radius: 16px;
  border: 2px solid ${J.border};
  background: ${J.bgSecondary};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, ${J.primary}, ${J.accentGreen});
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover { 
    background: ${J.cardHover};
    border-color: ${J.primary};
    transform: translateX(8px);
    box-shadow: 0 8px 24px rgba(14, 165, 233, 0.15);

    &::before {
      opacity: 1;
    }
  }

  & + & { 
    margin-top: 12px; 
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,J6=b.div`
  width: 64px;
  height: 64px;
  border-radius: 14px;
  background: linear-gradient(135deg, ${J.primary}, ${J.accentGreen});
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 28px;
  box-shadow: 0 8px 16px rgba(14, 165, 233, 0.25);

  @media (max-width: 640px) {
    width: 56px;
    height: 56px;
    font-size: 24px;
  }
`,F6=b.div`
  display: grid;
  gap: 10px;
`,W6=b.h3`
  margin: 0;
  color: ${J.text};
  font-size: 18px;
  font-weight: 700;
`,I6=b.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  font-size: 13px;
  color: ${J.subtext};
`,qs=b.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
`,P6=b.div`
  width: 100%;
  max-width: 200px;
  height: 8px;
  background: #E2E8F0;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid ${J.border};
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
`,e8=b.div`
  height: 100%;
  width: ${a=>Math.min(Math.max(a.value,0),100)}%;
  background: linear-gradient(90deg, ${J.primary}, ${J.accentGreen});
  border-radius: 999px;
  transition: width 0.5s ease;
  box-shadow: 0 0 10px rgba(14, 165, 233, 0.4);
`,t8=b(R6)`
  color: ${J.subtext};
  font-size: 20px;
  transition: all 0.3s ease;

  ${Ag}:hover & {
    color: ${J.primary};
    transform: translateX(4px);
  }

  @media (max-width: 640px) {
    display: none;
  }
`,im=b.div`
  text-align: center;
  padding: 64px 20px;
  color: ${J.subtext};
`,rm=b.div`
  font-size: 72px;
  margin-bottom: 16px;
  opacity: 0.3;
  animation: ${Mg} 3s ease-in-out infinite;
`,om=b.h3`
  color: ${J.text};
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 8px 0;
`,um=b.p`
  margin: 0;
  font-size: 15px;
`,n8=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
`,a8=b(qf)`
  padding: 24px;
  display: grid;
  gap: 16px;
  background: ${J.bgSecondary};
  border: 2px solid ${J.border};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${J.primary}, ${J.accentGreen});
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: ${J.primary};
    box-shadow: 0 20px 40px rgba(14, 165, 233, 0.2);

    &::before {
      opacity: 1;
    }
  }
`,l8=b.div`
  font-weight: 700;
  font-size: 16px;
  color: ${J.text};
  display: inline-flex;
  align-items: center;
  gap: 10px;

  svg {
    color: ${J.primary};
  }
`,i8=b.div`
  font-size: 13px;
  color: ${J.subtext};
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
`,r8=b.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`,cm=b.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 16px;
  border-radius: 12px;
  border: 2px solid ${J.border};
  background: ${J.card};
  color: ${J.text};
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex: 1;

  &:hover { 
    border-color: ${J.primary}; 
    color: ${J.primary}; 
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(14, 165, 233, 0.15);
  }
`;function o8(){const[a,r]=v.useState("history"),[c,o]=v.useState(!1),[f,d]=v.useState(!1),[p,y]=v.useState({name:"Priya Sharma",email:"priya.sharma@example.com",avatar:"PS",booksRead:24,hoursSpent:156,favoriteTeacher:"Ms. Sarah"}),[x,m]=v.useState({...p}),[S,w]=v.useState("light"),[z,_]=v.useState("all");v.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]);const R=[{id:1,title:"Sense of Collective Identity",teacher:"Mr. Arjun Mehta",time:"2 hours ago",progress:75,icon:s.jsx(Qi,{})},{id:2,title:"Understanding Diversity",teacher:"Ms. Nisha Rao",time:"Yesterday",progress:45,icon:s.jsx(To,{})},{id:3,title:"Nationalism in India",teacher:"Dr. Kavita Iyer",time:"2 days ago",progress:90,icon:s.jsx(Qp,{})},{id:4,title:"Democracy & Rights",teacher:"Prof. R. Menon",time:"1 week ago",progress:100,icon:s.jsx(Zp,{})}],B=[{id:"f1",title:"Globalisation & Indian Economy",by:"Siddharth Sir",reads:12},{id:"f2",title:"Federalism Basics",by:"Anita Ma'am",reads:9},{id:"f3",title:"Judiciary: Structure",by:"R. Sharma",reads:14},{id:"f4",title:"Gender, Religion & Caste",by:"S. Verma",reads:7}],D=()=>{y({...x}),o(!1)},L=(N,X)=>{m({...x,[N]:X})},H=(N,X)=>{(N.key==="Enter"||N.key===" ")&&N.preventDefault()};return s.jsxs($6,{$theme:S,children:[s.jsxs(k6,{children:[s.jsx(B6,{children:s.jsxs(L6,{children:[s.jsx(U6,{children:s.jsx(H6,{"aria-label":"User avatar",children:s.jsx(N6,{size:32})})}),s.jsxs(Y6,{children:[s.jsxs(G6,{children:[s.jsxs(q6,{children:[s.jsx(X6,{children:p.name}),s.jsx(V6,{children:p.email})]}),s.jsxs(Q6,{children:[s.jsxs(nm,{type:"button","aria-label":"Edit profile",onClick:()=>{m(p),o(!0)},children:[s.jsx(Vp,{})," ",s.jsx("span",{children:"Edit"})]}),s.jsxs(nm,{type:"button","aria-label":"Settings",onClick:()=>d(!0),children:[s.jsx(Xp,{})," ",s.jsx("span",{children:"Settings"})]})]})]}),s.jsxs(Z6,{children:[s.jsxs(Bs,{children:[s.jsx(Ls,{"aria-hidden":"true",children:s.jsx(To,{})}),s.jsxs(Us,{children:[s.jsx(Hs,{children:p.booksRead}),s.jsx(Ys,{children:"Books Read"})]}),s.jsx(Gs,{title:"Lifetime reads",children:s.jsx(Zp,{})})]}),s.jsxs(Bs,{children:[s.jsx(Ls,{"aria-hidden":"true",children:s.jsx(qp,{})}),s.jsxs(Us,{children:[s.jsx(Hs,{children:p.hoursSpent}),s.jsx(Ys,{children:"Study Hours"})]}),s.jsx(Gs,{title:"Consistent!",children:s.jsx(Mo,{})})]}),s.jsxs(Bs,{children:[s.jsx(Ls,{"aria-hidden":"true",children:s.jsx(Qi,{})}),s.jsxs(Us,{children:[s.jsx(Hs,{children:p.favoriteTeacher}),s.jsx(Ys,{children:"Favourite Teacher"})]}),s.jsx(Gs,{children:s.jsx(O6,{})})]})]})]})]})}),s.jsxs(K6,{children:[s.jsxs(am,{active:a==="history",onClick:()=>r("history"),"aria-pressed":a==="history",children:[s.jsx(Qp,{})," Reading History"]}),s.jsxs(am,{active:a==="favorites",onClick:()=>r("favorites"),"aria-pressed":a==="favorites",children:[s.jsx(Mo,{})," Favorites"]})]}),a==="history"?s.jsx(lm,{children:R.length>0?R.map(N=>s.jsxs(Ag,{role:"button",tabIndex:0,onKeyDown:X=>H(X),onClick:()=>{},"aria-label":`Open ${N.title}`,children:[s.jsx(J6,{"aria-hidden":"true",children:N.icon}),s.jsxs(F6,{children:[s.jsx(W6,{children:N.title}),s.jsxs(I6,{children:[s.jsxs(qs,{children:[s.jsx(Qi,{})," ",N.teacher]}),s.jsxs(qs,{children:[s.jsx(qp,{})," ",N.time]}),s.jsxs(qs,{children:[s.jsx(To,{})," ",N.progress,"% complete"]})]}),s.jsx(P6,{"aria-hidden":"true",children:s.jsx(e8,{value:N.progress})})]}),s.jsx(t8,{})]},N.id)):s.jsxs(im,{children:[s.jsx(rm,{children:s.jsx(Gp,{})}),s.jsx(om,{children:"No history yet"}),s.jsx(um,{children:"Start reading to see your progress here."})]})}):s.jsx(lm,{children:B.length>0?s.jsx(n8,{children:B.map(N=>s.jsxs(a8,{children:[s.jsxs(l8,{children:[s.jsx(Gp,{})," ",N.title]}),s.jsxs(i8,{children:[s.jsxs("span",{children:["By ",N.by]}),s.jsx("span",{children:"•"}),s.jsxs("span",{children:[N.reads," reads"]})]}),s.jsxs(r8,{children:[s.jsxs(cm,{type:"button",children:[s.jsx(To,{})," Open"]}),s.jsxs(cm,{type:"button",children:[s.jsx(Mo,{})," Unfavourite"]})]})]},N.id))}):s.jsxs(im,{children:[s.jsx(rm,{children:s.jsx(Mo,{})}),s.jsx(om,{children:"No favorites yet"}),s.jsx(um,{children:"Tap the star on a lesson to save it here."})]})})]}),c&&s.jsxs(s.Fragment,{children:[s.jsx(Jp,{onClick:()=>o(!1)}),s.jsxs(Fp,{role:"dialog","aria-modal":"true","aria-labelledby":"editProfileTitle",children:[s.jsxs(Wp,{children:[s.jsxs(Ip,{id:"editProfileTitle",children:[s.jsx(Vp,{})," Edit Profile"]}),s.jsx(Pp,{type:"button",onClick:()=>o(!1),"aria-label":"Close edit profile",children:s.jsx(Ao,{})})]}),s.jsxs(da,{children:[s.jsx(ha,{htmlFor:"name",children:"Name"}),s.jsx(Tl,{id:"name",value:x.name,onChange:N=>L("name",N.target.value)})]}),s.jsxs(da,{children:[s.jsx(ha,{htmlFor:"email",children:"Email"}),s.jsx(Tl,{id:"email",type:"email",value:x.email,onChange:N=>L("email",N.target.value)})]}),s.jsxs(da,{children:[s.jsx(ha,{htmlFor:"avatar",children:"Avatar Initials"}),s.jsx(Tl,{id:"avatar",value:x.avatar,onChange:N=>L("avatar",N.target.value)})]}),s.jsxs(da,{children:[s.jsx(ha,{htmlFor:"booksRead",children:"Books Read"}),s.jsx(Tl,{id:"booksRead",type:"number",min:0,value:x.booksRead,onChange:N=>L("booksRead",Number(N.target.value))})]}),s.jsxs(da,{children:[s.jsx(ha,{htmlFor:"hoursSpent",children:"Study Hours"}),s.jsx(Tl,{id:"hoursSpent",type:"number",min:0,value:x.hoursSpent,onChange:N=>L("hoursSpent",Number(N.target.value))})]}),s.jsxs(da,{children:[s.jsx(ha,{htmlFor:"favTeacher",children:"Favourite Teacher"}),s.jsx(Tl,{id:"favTeacher",value:x.favoriteTeacher,onChange:N=>L("favoriteTeacher",N.target.value)})]}),s.jsxs(tm,{children:[s.jsxs(Ro,{type:"button",onClick:()=>o(!1),children:[s.jsx(Ao,{})," Cancel"]}),s.jsxs(Ro,{type:"button",primary:!0,onClick:D,children:[s.jsx(Kp,{})," Save"]})]})]})]}),f&&s.jsxs(s.Fragment,{children:[s.jsx(Jp,{onClick:()=>d(!1)}),s.jsxs(Fp,{role:"dialog","aria-modal":"true","aria-labelledby":"settingsTitle",children:[s.jsxs(Wp,{children:[s.jsxs(Ip,{id:"settingsTitle",children:[s.jsx(Xp,{})," Settings"]}),s.jsx(Pp,{type:"button",onClick:()=>d(!1),"aria-label":"Close settings",children:s.jsx(Ao,{})})]}),s.jsxs(da,{children:[s.jsx(ha,{htmlFor:"theme",children:"Theme"}),s.jsxs(em,{id:"theme",value:S,onChange:N=>w(N.target.value),children:[s.jsx("option",{value:"light",children:"Light"}),s.jsx("option",{value:"dark",children:"Dark"})]})]}),s.jsxs(da,{children:[s.jsx(ha,{htmlFor:"notifications",children:"Notifications"}),s.jsxs(em,{id:"notifications",value:z,onChange:N=>_(N.target.value),children:[s.jsx("option",{value:"all",children:"All activity"}),s.jsx("option",{value:"mentions",children:"Mentions only"}),s.jsx("option",{value:"none",children:"None"})]})]}),s.jsxs(tm,{children:[s.jsxs(Ro,{type:"button",onClick:()=>d(!1),children:[s.jsx(Ao,{})," Close"]}),s.jsxs(Ro,{type:"button",primary:!0,onClick:()=>d(!1),children:[s.jsx(Kp,{})," Apply"]})]})]})]})]})}const u8=Et`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
`,c8=Et`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,s8=Et`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,f8=Et`
  0% {
    width: 0%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 0%;
  }
`,d8=b.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`,h8=b.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,Xs=b.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: ${u8} 20s infinite ease-in-out;

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
`,p8=b.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  animation: ${c8} 0.8s ease-out;

  @media (max-width: 600px) {
    margin: 20px;
    padding: 20px 20px;
  }
`,m8=b.div`
  margin-bottom: 0px;
  position: relative;
`,g8=b.div`
  font-size: 70px;
  animation: ${s8} 2s infinite;
`,x8=b.h1`
  font-size: 2.5em;
  color: #2d3748;
  margin-bottom: 10px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 2em;
  }
`,y8=b.p`
  font-size: 1.2em;
  color: #718096;
  margin-bottom: 25px;
  line-height: 1.6;
`,v8=b.div`
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`,b8=b.div`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  animation: ${f8} 3s ease-in-out infinite;
`,S8=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Vs=b.div`
  padding: 20px;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
  }
`,Qs=b.div`
  font-size:30px;
  margin-bottom: 10px;
`,Zs=b.div`
  font-size: 14px;
  color: #4a5568;
  font-weight: 600;
`,w8=b.button`
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
`;function sm(){const[a,r]=v.useState(!1),c=()=>{r(!0),setTimeout(()=>{r(!1)},2e3)};return s.jsxs(d8,{children:[s.jsxs(h8,{children:[s.jsx(Xs,{}),s.jsx(Xs,{}),s.jsx(Xs,{})]}),s.jsxs(p8,{children:[s.jsx(m8,{children:s.jsx(g8,{children:"🚧"})}),s.jsx(x8,{children:"Building Something Amazing"}),s.jsx(y8,{children:"We're working hard to bring you an incredible new feature. Stay tuned!"}),s.jsx(v8,{children:s.jsx(b8,{})}),s.jsxs(S8,{children:[s.jsxs(Vs,{children:[s.jsx(Qs,{children:"⚡"}),s.jsx(Zs,{children:"Lightning Fast"})]}),s.jsxs(Vs,{children:[s.jsx(Qs,{children:"🎨"}),s.jsx(Zs,{children:"Beautiful Design"})]}),s.jsxs(Vs,{children:[s.jsx(Qs,{children:"🔒"}),s.jsx(Zs,{children:"Secure & Private"})]})]}),s.jsx(w8,{onClick:c,$notified:a,children:a?"✓ You'll be notified!":"Notify Me When Ready"})]})]})}var Ks={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var fm;function j8(){return fm||(fm=1,(function(a){(function(){var r={}.hasOwnProperty;function c(){for(var d="",p=0;p<arguments.length;p++){var y=arguments[p];y&&(d=f(d,o(y)))}return d}function o(d){if(typeof d=="string"||typeof d=="number")return d;if(typeof d!="object")return"";if(Array.isArray(d))return c.apply(null,d);if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]"))return d.toString();var p="";for(var y in d)r.call(d,y)&&d[y]&&(p=f(p,y));return p}function f(d,p){return p?d?d+" "+p:d+p:d}a.exports?(c.default=c,a.exports=c):window.classNames=c})()})(Ks)),Ks.exports}var E8=j8();const rt=Fi(E8);function yf(){return yf=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var c=arguments[r];for(var o in c)({}).hasOwnProperty.call(c,o)&&(a[o]=c[o])}return a},yf.apply(null,arguments)}function Rg(a,r){if(a==null)return{};var c={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(r.indexOf(o)!==-1)continue;c[o]=a[o]}return c}function dm(a){return"default"+a.charAt(0).toUpperCase()+a.substr(1)}function C8(a){var r=z8(a,"string");return typeof r=="symbol"?r:String(r)}function z8(a,r){if(typeof a!="object"||a===null)return a;var c=a[Symbol.toPrimitive];if(c!==void 0){var o=c.call(a,r);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}function T8(a,r,c){var o=v.useRef(a!==void 0),f=v.useState(r),d=f[0],p=f[1],y=a!==void 0,x=o.current;return o.current=y,!y&&x&&d!==r&&p(r),[y?a:d,v.useCallback(function(m){for(var S=arguments.length,w=new Array(S>1?S-1:0),z=1;z<S;z++)w[z-1]=arguments[z];c&&c.apply(void 0,[m].concat(w)),p(m)},[c])]}function Og(a,r){return Object.keys(r).reduce(function(c,o){var f,d=c,p=d[dm(o)],y=d[o],x=Rg(d,[dm(o),o].map(C8)),m=r[o],S=T8(y,p,a[m]),w=S[0],z=S[1];return yf({},x,(f={},f[o]=w,f[m]=z,f))},a)}function vf(a,r){return vf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,o){return c.__proto__=o,c},vf(a,r)}function M8(a,r){a.prototype=Object.create(r.prototype),a.prototype.constructor=a,vf(a,r)}const A8=["xxl","xl","lg","md","sm","xs"],R8="xs",Ng=v.createContext({prefixes:{},breakpoints:A8,minBreakpoint:R8}),{Consumer:F9,Provider:W9}=Ng;function Ct(a,r){const{prefixes:c}=v.useContext(Ng);return a||c[r]||r}function Xf(a){return a&&a.ownerDocument||document}function O8(a){var r=Xf(a);return r&&r.defaultView||window}function N8(a,r){return O8(a).getComputedStyle(a,r)}var _8=/([A-Z])/g;function D8(a){return a.replace(_8,"-$1").toLowerCase()}var $8=/^ms-/;function Oo(a){return D8(a).replace($8,"-ms-")}var k8=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function B8(a){return!!(a&&k8.test(a))}function Dn(a,r){var c="",o="";if(typeof r=="string")return a.style.getPropertyValue(Oo(r))||N8(a).getPropertyValue(Oo(r));Object.keys(r).forEach(function(f){var d=r[f];!d&&d!==0?a.style.removeProperty(Oo(f)):B8(f)?o+=f+"("+d+") ":c+=Oo(f)+": "+d+";"}),o&&(c+="transform: "+o+";"),a.style.cssText+=";"+c}var Js={exports:{}},Fs,hm;function L8(){if(hm)return Fs;hm=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Fs=a,Fs}var Ws,pm;function U8(){if(pm)return Ws;pm=1;var a=L8();function r(){}function c(){}return c.resetWarningCache=r,Ws=function(){function o(p,y,x,m,S,w){if(w!==a){var z=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw z.name="Invariant Violation",z}}o.isRequired=o;function f(){return o}var d={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:f,element:o,elementType:o,instanceOf:f,node:o,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:c,resetWarningCache:r};return d.PropTypes=d,d},Ws}var mm;function H8(){return mm||(mm=1,Js.exports=U8()()),Js.exports}var Y8=H8();const Is=Fi(Y8),gm={disabled:!1},_g=ke.createContext(null);var G8=function(r){return r.scrollTop},Xi="unmounted",ma="exited",en="entering",On="entered",Ji="exiting",Ln=(function(a){M8(r,a);function r(o,f){var d;d=a.call(this,o,f)||this;var p=f,y=p&&!p.isMounting?o.enter:o.appear,x;return d.appearStatus=null,o.in?y?(x=ma,d.appearStatus=en):x=On:o.unmountOnExit||o.mountOnEnter?x=Xi:x=ma,d.state={status:x},d.nextCallback=null,d}r.getDerivedStateFromProps=function(f,d){var p=f.in;return p&&d.status===Xi?{status:ma}:null};var c=r.prototype;return c.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},c.componentDidUpdate=function(f){var d=null;if(f!==this.props){var p=this.state.status;this.props.in?p!==en&&p!==On&&(d=en):(p===en||p===On)&&(d=Ji)}this.updateStatus(!1,d)},c.componentWillUnmount=function(){this.cancelNextCallback()},c.getTimeouts=function(){var f=this.props.timeout,d,p,y;return d=p=y=f,f!=null&&typeof f!="number"&&(d=f.exit,p=f.enter,y=f.appear!==void 0?f.appear:p),{exit:d,enter:p,appear:y}},c.updateStatus=function(f,d){if(f===void 0&&(f=!1),d!==null)if(this.cancelNextCallback(),d===en){if(this.props.unmountOnExit||this.props.mountOnEnter){var p=this.props.nodeRef?this.props.nodeRef.current:Ol.findDOMNode(this);p&&G8(p)}this.performEnter(f)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ma&&this.setState({status:Xi})},c.performEnter=function(f){var d=this,p=this.props.enter,y=this.context?this.context.isMounting:f,x=this.props.nodeRef?[y]:[Ol.findDOMNode(this),y],m=x[0],S=x[1],w=this.getTimeouts(),z=y?w.appear:w.enter;if(!f&&!p||gm.disabled){this.safeSetState({status:On},function(){d.props.onEntered(m)});return}this.props.onEnter(m,S),this.safeSetState({status:en},function(){d.props.onEntering(m,S),d.onTransitionEnd(z,function(){d.safeSetState({status:On},function(){d.props.onEntered(m,S)})})})},c.performExit=function(){var f=this,d=this.props.exit,p=this.getTimeouts(),y=this.props.nodeRef?void 0:Ol.findDOMNode(this);if(!d||gm.disabled){this.safeSetState({status:ma},function(){f.props.onExited(y)});return}this.props.onExit(y),this.safeSetState({status:Ji},function(){f.props.onExiting(y),f.onTransitionEnd(p.exit,function(){f.safeSetState({status:ma},function(){f.props.onExited(y)})})})},c.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},c.safeSetState=function(f,d){d=this.setNextCallback(d),this.setState(f,d)},c.setNextCallback=function(f){var d=this,p=!0;return this.nextCallback=function(y){p&&(p=!1,d.nextCallback=null,f(y))},this.nextCallback.cancel=function(){p=!1},this.nextCallback},c.onTransitionEnd=function(f,d){this.setNextCallback(d);var p=this.props.nodeRef?this.props.nodeRef.current:Ol.findDOMNode(this),y=f==null&&!this.props.addEndListener;if(!p||y){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var x=this.props.nodeRef?[this.nextCallback]:[p,this.nextCallback],m=x[0],S=x[1];this.props.addEndListener(m,S)}f!=null&&setTimeout(this.nextCallback,f)},c.render=function(){var f=this.state.status;if(f===Xi)return null;var d=this.props,p=d.children;d.in,d.mountOnEnter,d.unmountOnExit,d.appear,d.enter,d.exit,d.timeout,d.addEndListener,d.onEnter,d.onEntering,d.onEntered,d.onExit,d.onExiting,d.onExited,d.nodeRef;var y=Rg(d,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ke.createElement(_g.Provider,{value:null},typeof p=="function"?p(f,y):ke.cloneElement(ke.Children.only(p),y))},r})(ke.Component);Ln.contextType=_g;Ln.propTypes={};function Ml(){}Ln.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ml,onEntering:Ml,onEntered:Ml,onExit:Ml,onExiting:Ml,onExited:Ml};Ln.UNMOUNTED=Xi;Ln.EXITED=ma;Ln.ENTERING=en;Ln.ENTERED=On;Ln.EXITING=Ji;function q8(a){return a.code==="Escape"||a.keyCode===27}function X8(){const a=v.version.split(".");return{major:+a[0],minor:+a[1],patch:+a[2]}}function Xl(a){if(!a||typeof a=="function")return null;const{major:r}=X8();return r>=19?a.props.ref:a.ref}const iu=!!(typeof window<"u"&&window.document&&window.document.createElement);var bf=!1,Sf=!1;try{var Ps={get passive(){return bf=!0},get once(){return Sf=bf=!0}};iu&&(window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,!0))}catch{}function V8(a,r,c,o){if(o&&typeof o!="boolean"&&!Sf){var f=o.once,d=o.capture,p=c;!Sf&&f&&(p=c.__once||function y(x){this.removeEventListener(r,y,d),c.call(this,x)},c.__once=p),a.addEventListener(r,p,bf?o:d)}a.addEventListener(r,c,o)}function Q8(a,r,c,o){var f=o&&typeof o!="boolean"?o.capture:o;a.removeEventListener(r,c,f),c.__once&&a.removeEventListener(r,c.__once,f)}function Ko(a,r,c,o){return V8(a,r,c,o),function(){Q8(a,r,c,o)}}function Z8(a,r,c,o){if(o===void 0&&(o=!0),a){var f=document.createEvent("HTMLEvents");f.initEvent(r,c,o),a.dispatchEvent(f)}}function K8(a){var r=Dn(a,"transitionDuration")||"",c=r.indexOf("ms")===-1?1e3:1;return parseFloat(r)*c}function J8(a,r,c){c===void 0&&(c=5);var o=!1,f=setTimeout(function(){o||Z8(a,"transitionend",!0)},r+c),d=Ko(a,"transitionend",function(){o=!0},{once:!0});return function(){clearTimeout(f),d()}}function F8(a,r,c,o){c==null&&(c=K8(a)||0);var f=J8(a,c,o),d=Ko(a,"transitionend",r);return function(){f(),d()}}function xm(a,r){const c=Dn(a,r)||"",o=c.indexOf("ms")===-1?1e3:1;return parseFloat(c)*o}function Vf(a,r){const c=xm(a,"transitionDuration"),o=xm(a,"transitionDelay"),f=F8(a,d=>{d.target===a&&(f(),r(d))},c+o)}function Gi(...a){return a.filter(r=>r!=null).reduce((r,c)=>{if(typeof c!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return r===null?c:function(...f){r.apply(this,f),c.apply(this,f)}},null)}function Dg(a){a.offsetHeight}const ym=a=>!a||typeof a=="function"?a:r=>{a.current=r};function W8(a,r){const c=ym(a),o=ym(r);return f=>{c&&c(f),o&&o(f)}}function I8(a,r){return v.useMemo(()=>W8(a,r),[a,r])}function P8(a){return a&&"setState"in a?Ol.findDOMNode(a):a??null}const ru=ke.forwardRef(({onEnter:a,onEntering:r,onEntered:c,onExit:o,onExiting:f,onExited:d,addEndListener:p,children:y,childRef:x,...m},S)=>{const w=v.useRef(null),z=I8(w,x),_=U=>{z(P8(U))},R=U=>Q=>{U&&w.current&&U(w.current,Q)},B=v.useCallback(R(a),[a]),D=v.useCallback(R(r),[r]),L=v.useCallback(R(c),[c]),H=v.useCallback(R(o),[o]),N=v.useCallback(R(f),[f]),X=v.useCallback(R(d),[d]),Z=v.useCallback(R(p),[p]);return s.jsx(Ln,{ref:S,...m,onEnter:B,onEntered:L,onEntering:D,onExit:H,onExited:X,onExiting:N,addEndListener:Z,nodeRef:w,children:typeof y=="function"?(U,Q)=>y(U,{...Q,ref:_}):ke.cloneElement(y,{ref:_})})});ru.displayName="TransitionWrapper";const eS={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function tS(a,r){const c=`offset${a[0].toUpperCase()}${a.slice(1)}`,o=r[c],f=eS[a];return o+parseInt(Dn(r,f[0]),10)+parseInt(Dn(r,f[1]),10)}const nS={[ma]:"collapse",[Ji]:"collapsing",[en]:"collapsing",[On]:"collapse show"},$g=ke.forwardRef(({onEnter:a,onEntering:r,onEntered:c,onExit:o,onExiting:f,className:d,children:p,dimension:y="height",in:x=!1,timeout:m=300,mountOnEnter:S=!1,unmountOnExit:w=!1,appear:z=!1,getDimensionValue:_=tS,...R},B)=>{const D=typeof y=="function"?y():y,L=v.useMemo(()=>Gi(U=>{U.style[D]="0"},a),[D,a]),H=v.useMemo(()=>Gi(U=>{const Q=`scroll${D[0].toUpperCase()}${D.slice(1)}`;U.style[D]=`${U[Q]}px`},r),[D,r]),N=v.useMemo(()=>Gi(U=>{U.style[D]=null},c),[D,c]),X=v.useMemo(()=>Gi(U=>{U.style[D]=`${_(D,U)}px`,Dg(U)},o),[o,_,D]),Z=v.useMemo(()=>Gi(U=>{U.style[D]=null},f),[D,f]);return s.jsx(ru,{ref:B,addEndListener:Vf,...R,"aria-expanded":R.role?x:null,onEnter:L,onEntering:H,onEntered:N,onExit:X,onExiting:Z,childRef:Xl(p),in:x,timeout:m,mountOnEnter:S,unmountOnExit:w,appear:z,children:(U,Q)=>ke.cloneElement(p,{...Q,className:rt(d,p.props.className,nS[U],D==="width"&&"collapse-horizontal")})})});$g.displayName="Collapse";function aS(a){const r=v.useRef(a);return v.useEffect(()=>{r.current=a},[a]),r}function ou(a){const r=aS(a);return v.useCallback(function(...c){return r.current&&r.current(...c)},[r])}const lS=(a=>v.forwardRef((r,c)=>s.jsx("div",{...r,ref:c,className:rt(r.className,a)})));function iS(a){const r=v.useRef(a);return v.useEffect(()=>{r.current=a},[a]),r}function Nn(a){const r=iS(a);return v.useCallback(function(...c){return r.current&&r.current(...c)},[r])}function rS(){const a=v.useRef(!0),r=v.useRef(()=>a.current);return v.useEffect(()=>(a.current=!0,()=>{a.current=!1}),[]),r.current}function oS(a){const r=v.useRef(null);return v.useEffect(()=>{r.current=a}),r.current}const uS=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",cS=typeof document<"u",vm=cS||uS?v.useLayoutEffect:v.useEffect,sS=["as","disabled"];function fS(a,r){if(a==null)return{};var c={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(r.indexOf(o)>=0)continue;c[o]=a[o]}return c}function dS(a){return!a||a.trim()==="#"}function kg({tagName:a,disabled:r,href:c,target:o,rel:f,role:d,onClick:p,tabIndex:y=0,type:x}){a||(c!=null||o!=null||f!=null?a="a":a="button");const m={tagName:a};if(a==="button")return[{type:x||"button",disabled:r},m];const S=z=>{if((r||a==="a"&&dS(c))&&z.preventDefault(),r){z.stopPropagation();return}p?.(z)},w=z=>{z.key===" "&&(z.preventDefault(),S(z))};return a==="a"&&(c||(c="#"),r&&(c=void 0)),[{role:d??"button",disabled:void 0,tabIndex:r?void 0:y,href:c,target:a==="a"?o:void 0,"aria-disabled":r||void 0,rel:a==="a"?f:void 0,onClick:S,onKeyDown:w},m]}const Bg=v.forwardRef((a,r)=>{let{as:c,disabled:o}=a,f=fS(a,sS);const[d,{tagName:p}]=kg(Object.assign({tagName:c,disabled:o},f));return s.jsx(p,Object.assign({},f,d,{ref:r}))});Bg.displayName="Button";const hS=["onKeyDown"];function pS(a,r){if(a==null)return{};var c={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(r.indexOf(o)>=0)continue;c[o]=a[o]}return c}function mS(a){return!a||a.trim()==="#"}const Lg=v.forwardRef((a,r)=>{let{onKeyDown:c}=a,o=pS(a,hS);const[f]=kg(Object.assign({tagName:"a"},o)),d=Nn(p=>{f.onKeyDown(p),c?.(p)});return mS(o.href)||o.role==="button"?s.jsx("a",Object.assign({ref:r},o,f,{onKeyDown:d})):s.jsx("a",Object.assign({ref:r},o,{onKeyDown:c}))});Lg.displayName="Anchor";const gS={[en]:"show",[On]:"show"},Ug=v.forwardRef(({className:a,children:r,transitionClasses:c={},onEnter:o,...f},d)=>{const p={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...f},y=v.useCallback((x,m)=>{Dg(x),o?.(x,m)},[o]);return s.jsx(ru,{ref:d,addEndListener:Vf,...p,onEnter:y,childRef:Xl(r),children:(x,m)=>v.cloneElement(r,{...m,className:rt("fade",a,r.props.className,gS[x],c[x])})})});Ug.displayName="Fade";const xS={"aria-label":Is.string,onClick:Is.func,variant:Is.oneOf(["white"])},Qf=v.forwardRef(({className:a,variant:r,"aria-label":c="Close",...o},f)=>s.jsx("button",{ref:f,type:"button",className:rt("btn-close",r&&`btn-close-${r}`,a),"aria-label":c,...o}));Qf.displayName="CloseButton";Qf.propTypes=xS;const Hg=v.createContext(null);Hg.displayName="CardHeaderContext";const Yg=v.forwardRef(({bsPrefix:a,fluid:r=!1,as:c="div",className:o,...f},d)=>{const p=Ct(a,"container"),y=typeof r=="string"?`-${r}`:"-fluid";return s.jsx(c,{ref:d,...f,className:rt(o,r?`${p}${y}`:p)})});Yg.displayName="Container";var yS=Function.prototype.bind.call(Function.prototype.call,[].slice);function Ba(a,r){return yS(a.querySelectorAll(r))}function vS(){const[,a]=v.useReducer(r=>r+1,0);return a}function bm(a,r){if(a.contains)return a.contains(r);if(a.compareDocumentPosition)return a===r||!!(a.compareDocumentPosition(r)&16)}const Jo=v.createContext(null),Zf=(a,r=null)=>a!=null?String(a):r||null,Kf=v.createContext(null);Kf.displayName="NavContext";const bS="data-rr-ui-",SS="rrUi";function uu(a){return`${bS}${a}`}function wS(a){return`${SS}${a}`}const Gg=v.createContext(iu?window:void 0);Gg.Provider;function Jf(){return v.useContext(Gg)}const jS=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",ES=typeof document<"u",CS=ES||jS?v.useLayoutEffect:v.useEffect,Vl=v.createContext(null);Vl.displayName="NavbarContext";const Sm=a=>!a||typeof a=="function"?a:r=>{a.current=r};function zS(a,r){const c=Sm(a),o=Sm(r);return f=>{c&&c(f),o&&o(f)}}function cu(a,r){return v.useMemo(()=>zS(a,r),[a,r])}const qg=v.createContext(null),TS=["as","active","eventKey"];function MS(a,r){if(a==null)return{};var c={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(r.indexOf(o)>=0)continue;c[o]=a[o]}return c}function Xg({key:a,onClick:r,active:c,id:o,role:f,disabled:d}){const p=v.useContext(Jo),y=v.useContext(Kf),x=v.useContext(qg);let m=c;const S={role:f};if(y){!f&&y.role==="tablist"&&(S.role="tab");const w=y.getControllerId(a??null),z=y.getControlledId(a??null);S[uu("event-key")]=a,S.id=w||o,m=c==null&&a!=null?y.activeKey===a:c,(m||!(x!=null&&x.unmountOnExit)&&!(x!=null&&x.mountOnEnter))&&(S["aria-controls"]=z)}return S.role==="tab"&&(S["aria-selected"]=m,m||(S.tabIndex=-1),d&&(S.tabIndex=-1,S["aria-disabled"]=!0)),S.onClick=Nn(w=>{d||(r?.(w),a!=null&&p&&!w.isPropagationStopped()&&p(a,w))}),[S,{isActive:m}]}const Vg=v.forwardRef((a,r)=>{let{as:c=Bg,active:o,eventKey:f}=a,d=MS(a,TS);const[p,y]=Xg(Object.assign({key:Zf(f,d.href),active:o},d));return p[uu("active")]=y.isActive,s.jsx(c,Object.assign({},d,p,{ref:r}))});Vg.displayName="NavItem";const AS=["as","onSelect","activeKey","role","onKeyDown"];function RS(a,r){if(a==null)return{};var c={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(r.indexOf(o)>=0)continue;c[o]=a[o]}return c}const wm=()=>{},jm=uu("event-key"),Qg=v.forwardRef((a,r)=>{let{as:c="div",onSelect:o,activeKey:f,role:d,onKeyDown:p}=a,y=RS(a,AS);const x=vS(),m=v.useRef(!1),S=v.useContext(Jo),w=v.useContext(qg);let z,_;w&&(d=d||"tablist",f=w.activeKey,z=w.getControlledId,_=w.getControllerId);const R=v.useRef(null),B=N=>{const X=R.current;if(!X)return null;const Z=Ba(X,`[${jm}]:not([aria-disabled=true])`),U=X.querySelector("[aria-selected=true]");if(!U||U!==document.activeElement)return null;const Q=Z.indexOf(U);if(Q===-1)return null;let P=Q+N;return P>=Z.length&&(P=0),P<0&&(P=Z.length-1),Z[P]},D=(N,X)=>{N!=null&&(o?.(N,X),S?.(N,X))},L=N=>{if(p?.(N),!w)return;let X;switch(N.key){case"ArrowLeft":case"ArrowUp":X=B(-1);break;case"ArrowRight":case"ArrowDown":X=B(1);break;default:return}X&&(N.preventDefault(),D(X.dataset[wS("EventKey")]||null,N),m.current=!0,x())};v.useEffect(()=>{if(R.current&&m.current){const N=R.current.querySelector(`[${jm}][aria-selected=true]`);N?.focus()}m.current=!1});const H=cu(r,R);return s.jsx(Jo.Provider,{value:D,children:s.jsx(Kf.Provider,{value:{role:d,activeKey:Zf(f),getControlledId:z||wm,getControllerId:_||wm},children:s.jsx(c,Object.assign({},y,{onKeyDown:L,ref:H,role:d}))})})});Qg.displayName="Nav";const OS=Object.assign(Qg,{Item:Vg});function ef(a){a===void 0&&(a=Xf());try{var r=a.activeElement;return!r||!r.nodeName?null:r}catch{return a.body}}function NS(a){const r=v.useRef(a);return r.current=a,r}function _S(a){const r=NS(a);v.useEffect(()=>()=>r.current(),[])}function DS(a=document){const r=a.defaultView;return Math.abs(r.innerWidth-a.documentElement.clientWidth)}const Em=uu("modal-open");class Ff{constructor({ownerDocument:r,handleContainerOverflow:c=!0,isRTL:o=!1}={}){this.handleContainerOverflow=c,this.isRTL=o,this.modals=[],this.ownerDocument=r}getScrollbarWidth(){return DS(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(r){}removeModalAttributes(r){}setContainerStyle(r){const c={overflow:"hidden"},o=this.isRTL?"paddingLeft":"paddingRight",f=this.getElement();r.style={overflow:f.style.overflow,[o]:f.style[o]},r.scrollBarWidth&&(c[o]=`${parseInt(Dn(f,o)||"0",10)+r.scrollBarWidth}px`),f.setAttribute(Em,""),Dn(f,c)}reset(){[...this.modals].forEach(r=>this.remove(r))}removeContainerStyle(r){const c=this.getElement();c.removeAttribute(Em),Object.assign(c.style,r.style)}add(r){let c=this.modals.indexOf(r);return c!==-1||(c=this.modals.length,this.modals.push(r),this.setModalAttributes(r),c!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),c}remove(r){const c=this.modals.indexOf(r);c!==-1&&(this.modals.splice(c,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(r))}isTopModal(r){return!!this.modals.length&&this.modals[this.modals.length-1]===r}}const tf=(a,r)=>iu?a==null?(r||Xf()).body:(typeof a=="function"&&(a=a()),a&&"current"in a&&(a=a.current),a&&("nodeType"in a||a.getBoundingClientRect)?a:null):null;function $S(a,r){const c=Jf(),[o,f]=v.useState(()=>tf(a,c?.document));if(!o){const d=tf(a);d&&f(d)}return v.useEffect(()=>{},[r,o]),v.useEffect(()=>{const d=tf(a);d!==o&&f(d)},[a,o]),o}function kS({children:a,in:r,onExited:c,mountOnEnter:o,unmountOnExit:f}){const d=v.useRef(null),p=v.useRef(r),y=Nn(c);v.useEffect(()=>{r?p.current=!0:y(d.current)},[r,y]);const x=cu(d,Xl(a)),m=v.cloneElement(a,{ref:x});return r?m:f||!p.current&&o?null:m}const BS=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function LS(a,r){if(a==null)return{};var c={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(r.indexOf(o)>=0)continue;c[o]=a[o]}return c}function US(a){let{onEnter:r,onEntering:c,onEntered:o,onExit:f,onExiting:d,onExited:p,addEndListener:y,children:x}=a,m=LS(a,BS);const S=v.useRef(null),w=cu(S,Xl(x)),z=X=>Z=>{X&&S.current&&X(S.current,Z)},_=v.useCallback(z(r),[r]),R=v.useCallback(z(c),[c]),B=v.useCallback(z(o),[o]),D=v.useCallback(z(f),[f]),L=v.useCallback(z(d),[d]),H=v.useCallback(z(p),[p]),N=v.useCallback(z(y),[y]);return Object.assign({},m,{nodeRef:S},r&&{onEnter:_},c&&{onEntering:R},o&&{onEntered:B},f&&{onExit:D},d&&{onExiting:L},p&&{onExited:H},y&&{addEndListener:N},{children:typeof x=="function"?(X,Z)=>x(X,Object.assign({},Z,{ref:w})):v.cloneElement(x,{ref:w})})}const HS=["component"];function YS(a,r){if(a==null)return{};var c={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(r.indexOf(o)>=0)continue;c[o]=a[o]}return c}const GS=v.forwardRef((a,r)=>{let{component:c}=a,o=YS(a,HS);const f=US(o);return s.jsx(c,Object.assign({ref:r},f))});function qS({in:a,onTransition:r}){const c=v.useRef(null),o=v.useRef(!0),f=Nn(r);return vm(()=>{if(!c.current)return;let d=!1;return f({in:a,element:c.current,initial:o.current,isStale:()=>d}),()=>{d=!0}},[a,f]),vm(()=>(o.current=!1,()=>{o.current=!0}),[]),c}function XS({children:a,in:r,onExited:c,onEntered:o,transition:f}){const[d,p]=v.useState(!r);r&&d&&p(!1);const y=qS({in:!!r,onTransition:m=>{const S=()=>{m.isStale()||(m.in?o?.(m.element,m.initial):(p(!0),c?.(m.element)))};Promise.resolve(f(m)).then(S,w=>{throw m.in||p(!0),w})}}),x=cu(y,Xl(a));return d&&!r?null:v.cloneElement(a,{ref:x})}function Cm(a,r,c){return a?s.jsx(GS,Object.assign({},c,{component:a})):r?s.jsx(XS,Object.assign({},c,{transition:r})):s.jsx(kS,Object.assign({},c))}const VS=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function QS(a,r){if(a==null)return{};var c={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(r.indexOf(o)>=0)continue;c[o]=a[o]}return c}let nf;function ZS(a){return nf||(nf=new Ff({ownerDocument:a?.document})),nf}function KS(a){const r=Jf(),c=a||ZS(r),o=v.useRef({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>c.add(o.current),remove:()=>c.remove(o.current),isTopModal:()=>c.isTopModal(o.current),setDialogRef:v.useCallback(f=>{o.current.dialog=f},[]),setBackdropRef:v.useCallback(f=>{o.current.backdrop=f},[])})}const Zg=v.forwardRef((a,r)=>{let{show:c=!1,role:o="dialog",className:f,style:d,children:p,backdrop:y=!0,keyboard:x=!0,onBackdropClick:m,onEscapeKeyDown:S,transition:w,runTransition:z,backdropTransition:_,runBackdropTransition:R,autoFocus:B=!0,enforceFocus:D=!0,restoreFocus:L=!0,restoreFocusOptions:H,renderDialog:N,renderBackdrop:X=Ne=>s.jsx("div",Object.assign({},Ne)),manager:Z,container:U,onShow:Q,onHide:P=()=>{},onExit:ue,onExited:Ce,onExiting:Be,onEnter:Ge,onEntering:et,onEntered:nt}=a,Le=QS(a,VS);const k=Jf(),K=$S(U),I=KS(Z),ee=rS(),fe=oS(c),[E,G]=v.useState(!c),F=v.useRef(null);v.useImperativeHandle(r,()=>I,[I]),iu&&!fe&&c&&(F.current=ef(k?.document)),c&&E&&G(!1);const W=Nn(()=>{if(I.add(),zt.current=Ko(document,"keydown",He),be.current=Ko(document,"focus",()=>setTimeout(re),!0),Q&&Q(),B){var Ne,Ya;const Ql=ef((Ne=(Ya=I.dialog)==null?void 0:Ya.ownerDocument)!=null?Ne:k?.document);I.dialog&&Ql&&!bm(I.dialog,Ql)&&(F.current=Ql,I.dialog.focus())}}),ae=Nn(()=>{if(I.remove(),zt.current==null||zt.current(),be.current==null||be.current(),L){var Ne;(Ne=F.current)==null||Ne.focus==null||Ne.focus(H),F.current=null}});v.useEffect(()=>{!c||!K||W()},[c,K,W]),v.useEffect(()=>{E&&ae()},[E,ae]),_S(()=>{ae()});const re=Nn(()=>{if(!D||!ee()||!I.isTopModal())return;const Ne=ef(k?.document);I.dialog&&Ne&&!bm(I.dialog,Ne)&&I.dialog.focus()}),he=Nn(Ne=>{Ne.target===Ne.currentTarget&&(m?.(Ne),y===!0&&P())}),He=Nn(Ne=>{x&&q8(Ne)&&I.isTopModal()&&(S?.(Ne),Ne.defaultPrevented||P())}),be=v.useRef(),zt=v.useRef(),Ft=(...Ne)=>{G(!0),Ce?.(...Ne)};if(!K)return null;const mt=Object.assign({role:o,ref:I.setDialogRef,"aria-modal":o==="dialog"?!0:void 0},Le,{style:d,className:f,tabIndex:-1});let Ha=N?N(mt):s.jsx("div",Object.assign({},mt,{children:v.cloneElement(p,{role:"document"})}));Ha=Cm(w,z,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!c,onExit:ue,onExiting:Be,onExited:Ft,onEnter:Ge,onEntering:et,onEntered:nt,children:Ha});let Lt=null;return y&&(Lt=X({ref:I.setBackdropRef,onClick:he}),Lt=Cm(_,R,{in:!!c,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Lt})),s.jsx(s.Fragment,{children:Ol.createPortal(s.jsxs(s.Fragment,{children:[Lt,Ha]}),K)})});Zg.displayName="Modal";const JS=Object.assign(Zg,{Manager:Ff});function FS(a,r){return a.classList?a.classList.contains(r):(" "+(a.className.baseVal||a.className)+" ").indexOf(" "+r+" ")!==-1}function WS(a,r){a.classList?a.classList.add(r):FS(a,r)||(typeof a.className=="string"?a.className=a.className+" "+r:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+r))}function zm(a,r){return a.replace(new RegExp("(^|\\s)"+r+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function IS(a,r){a.classList?a.classList.remove(r):typeof a.className=="string"?a.className=zm(a.className,r):a.setAttribute("class",zm(a.className&&a.className.baseVal||"",r))}const Al={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Kg extends Ff{adjustAndStore(r,c,o){const f=c.style[r];c.dataset[r]=f,Dn(c,{[r]:`${parseFloat(Dn(c,r))+o}px`})}restore(r,c){const o=c.dataset[r];o!==void 0&&(delete c.dataset[r],Dn(c,{[r]:o}))}setContainerStyle(r){super.setContainerStyle(r);const c=this.getElement();if(WS(c,"modal-open"),!r.scrollBarWidth)return;const o=this.isRTL?"paddingLeft":"paddingRight",f=this.isRTL?"marginLeft":"marginRight";Ba(c,Al.FIXED_CONTENT).forEach(d=>this.adjustAndStore(o,d,r.scrollBarWidth)),Ba(c,Al.STICKY_CONTENT).forEach(d=>this.adjustAndStore(f,d,-r.scrollBarWidth)),Ba(c,Al.NAVBAR_TOGGLER).forEach(d=>this.adjustAndStore(f,d,r.scrollBarWidth))}removeContainerStyle(r){super.removeContainerStyle(r);const c=this.getElement();IS(c,"modal-open");const o=this.isRTL?"paddingLeft":"paddingRight",f=this.isRTL?"marginLeft":"marginRight";Ba(c,Al.FIXED_CONTENT).forEach(d=>this.restore(o,d)),Ba(c,Al.STICKY_CONTENT).forEach(d=>this.restore(f,d)),Ba(c,Al.NAVBAR_TOGGLER).forEach(d=>this.restore(f,d))}}let af;function PS(a){return af||(af=new Kg(a)),af}const Jg=v.createContext({onHide(){}}),Fg=v.forwardRef(({closeLabel:a="Close",closeVariant:r,closeButton:c=!1,onHide:o,children:f,...d},p)=>{const y=v.useContext(Jg),x=ou(()=>{y?.onHide(),o?.()});return s.jsxs("div",{ref:p,...d,children:[f,c&&s.jsx(Qf,{"aria-label":a,variant:r,onClick:x})]})});Fg.displayName="AbstractModalHeader";const Wg=v.forwardRef(({className:a,bsPrefix:r,as:c="div",...o},f)=>(r=Ct(r,"nav-item"),s.jsx(c,{ref:f,className:rt(a,r),...o})));Wg.displayName="NavItem";const Ig=v.forwardRef(({bsPrefix:a,className:r,as:c=Lg,active:o,eventKey:f,disabled:d=!1,...p},y)=>{a=Ct(a,"nav-link");const[x,m]=Xg({key:Zf(f,p.href),active:o,disabled:d,...p});return s.jsx(c,{...p,...x,ref:y,disabled:d,className:rt(r,a,d&&"disabled",m.isActive&&"active")})});Ig.displayName="NavLink";const Pg=v.forwardRef((a,r)=>{const{as:c="div",bsPrefix:o,variant:f,fill:d=!1,justify:p=!1,navbar:y,navbarScroll:x,className:m,activeKey:S,...w}=Og(a,{activeKey:"onSelect"}),z=Ct(o,"nav");let _,R,B=!1;const D=v.useContext(Vl),L=v.useContext(Hg);return D?(_=D.bsPrefix,B=y??!0):L&&({cardHeaderBsPrefix:R}=L),s.jsx(OS,{as:c,ref:r,activeKey:S,className:rt(m,{[z]:!B,[`${_}-nav`]:B,[`${_}-nav-scroll`]:B&&x,[`${R}-${f}`]:!!R,[`${z}-${f}`]:!!f,[`${z}-fill`]:d,[`${z}-justified`]:p}),...w})});Pg.displayName="Nav";const e7=Object.assign(Pg,{Item:Wg,Link:Ig}),e2=v.forwardRef(({bsPrefix:a,className:r,as:c,...o},f)=>{a=Ct(a,"navbar-brand");const d=c||(o.href?"a":"span");return s.jsx(d,{...o,ref:f,className:rt(r,a)})});e2.displayName="NavbarBrand";const t2=v.forwardRef(({children:a,bsPrefix:r,...c},o)=>{r=Ct(r,"navbar-collapse");const f=v.useContext(Vl);return s.jsx($g,{in:!!(f&&f.expanded),...c,children:s.jsx("div",{ref:o,className:r,children:a})})});t2.displayName="NavbarCollapse";const n2=v.forwardRef(({bsPrefix:a,className:r,children:c,label:o="Toggle navigation",as:f="button",onClick:d,...p},y)=>{a=Ct(a,"navbar-toggler");const{onToggle:x,expanded:m}=v.useContext(Vl)||{},S=ou(w=>{d&&d(w),x&&x()});return f==="button"&&(p.type="button"),s.jsx(f,{...p,ref:y,onClick:S,"aria-label":o,className:rt(r,a,!m&&"collapsed"),children:c||s.jsx("span",{className:`${a}-icon`})})});n2.displayName="NavbarToggle";const wf=new WeakMap,Tm=(a,r)=>{if(!a||!r)return;const c=wf.get(r)||new Map;wf.set(r,c);let o=c.get(a);return o||(o=r.matchMedia(a),o.refCount=0,c.set(o.media,o)),o};function t7(a,r=typeof window>"u"?void 0:window){const c=Tm(a,r),[o,f]=v.useState(()=>c?c.matches:!1);return CS(()=>{let d=Tm(a,r);if(!d)return f(!1);let p=wf.get(r);const y=()=>{f(d.matches)};return d.refCount++,d.addListener(y),y(),()=>{d.removeListener(y),d.refCount--,d.refCount<=0&&p?.delete(d.media),d=void 0}},[a]),o}function n7(a){const r=Object.keys(a);function c(y,x){return y===x?x:y?`${y} and ${x}`:x}function o(y){return r[Math.min(r.indexOf(y)+1,r.length-1)]}function f(y){const x=o(y);let m=a[x];return typeof m=="number"?m=`${m-.2}px`:m=`calc(${m} - 0.2px)`,`(max-width: ${m})`}function d(y){let x=a[y];return typeof x=="number"&&(x=`${x}px`),`(min-width: ${x})`}function p(y,x,m){let S;typeof y=="object"?(S=y,m=x,x=!0):(x=x||!0,S={[y]:x});let w=v.useMemo(()=>Object.entries(S).reduce((z,[_,R])=>((R==="up"||R===!0)&&(z=c(z,d(_))),(R==="down"||R===!0)&&(z=c(z,f(_))),z),""),[JSON.stringify(S)]);return t7(w,m)}return p}const a7=n7({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),a2=v.forwardRef(({className:a,bsPrefix:r,as:c="div",...o},f)=>(r=Ct(r,"offcanvas-body"),s.jsx(c,{ref:f,className:rt(a,r),...o})));a2.displayName="OffcanvasBody";const l7={[en]:"show",[On]:"show"},l2=v.forwardRef(({bsPrefix:a,className:r,children:c,in:o=!1,mountOnEnter:f=!1,unmountOnExit:d=!1,appear:p=!1,...y},x)=>(a=Ct(a,"offcanvas"),s.jsx(ru,{ref:x,addEndListener:Vf,in:o,mountOnEnter:f,unmountOnExit:d,appear:p,...y,childRef:Xl(c),children:(m,S)=>v.cloneElement(c,{...S,className:rt(r,c.props.className,(m===en||m===Ji)&&`${a}-toggling`,l7[m])})})));l2.displayName="OffcanvasToggling";const i2=v.forwardRef(({bsPrefix:a,className:r,closeLabel:c="Close",closeButton:o=!1,...f},d)=>(a=Ct(a,"offcanvas-header"),s.jsx(Fg,{ref:d,...f,className:rt(r,a),closeLabel:c,closeButton:o})));i2.displayName="OffcanvasHeader";const i7=lS("h5"),r2=v.forwardRef(({className:a,bsPrefix:r,as:c=i7,...o},f)=>(r=Ct(r,"offcanvas-title"),s.jsx(c,{ref:f,className:rt(a,r),...o})));r2.displayName="OffcanvasTitle";function r7(a){return s.jsx(l2,{...a})}function o7(a){return s.jsx(Ug,{...a})}const o2=v.forwardRef(({bsPrefix:a,className:r,children:c,"aria-labelledby":o,placement:f="start",responsive:d,show:p=!1,backdrop:y=!0,keyboard:x=!0,scroll:m=!1,onEscapeKeyDown:S,onShow:w,onHide:z,container:_,autoFocus:R=!0,enforceFocus:B=!0,restoreFocus:D=!0,restoreFocusOptions:L,onEntered:H,onExit:N,onExiting:X,onEnter:Z,onEntering:U,onExited:Q,backdropClassName:P,manager:ue,renderStaticNode:Ce=!1,...Be},Ge)=>{const et=v.useRef();a=Ct(a,"offcanvas");const[nt,Le]=v.useState(!1),k=ou(z),K=a7(d||"xs","up");v.useEffect(()=>{Le(d?p&&!K:p)},[p,d,K]);const I=v.useMemo(()=>({onHide:k}),[k]);function ee(){return ue||(m?(et.current||(et.current=new Kg({handleContainerOverflow:!1})),et.current):PS())}const fe=(W,...ae)=>{W&&(W.style.visibility="visible"),Z?.(W,...ae)},E=(W,...ae)=>{W&&(W.style.visibility=""),Q?.(...ae)},G=v.useCallback(W=>s.jsx("div",{...W,className:rt(`${a}-backdrop`,P)}),[P,a]),F=W=>s.jsx("div",{...W,...Be,className:rt(r,d?`${a}-${d}`:a,`${a}-${f}`),"aria-labelledby":o,children:c});return s.jsxs(s.Fragment,{children:[!nt&&(d||Ce)&&F({}),s.jsx(Jg.Provider,{value:I,children:s.jsx(JS,{show:nt,ref:Ge,backdrop:y,container:_,keyboard:x,autoFocus:R,enforceFocus:B&&!m,restoreFocus:D,restoreFocusOptions:L,onEscapeKeyDown:S,onShow:w,onHide:k,onEnter:fe,onEntering:U,onEntered:H,onExit:N,onExiting:X,onExited:E,manager:ee(),transition:r7,backdropTransition:o7,renderBackdrop:G,renderDialog:F})})]})});o2.displayName="Offcanvas";const u7=Object.assign(o2,{Body:a2,Header:i2,Title:r2}),u2=v.forwardRef(({onHide:a,...r},c)=>{const o=v.useContext(Vl),f=ou(()=>{o==null||o.onToggle==null||o.onToggle(),a?.()});return s.jsx(u7,{ref:c,show:!!(o!=null&&o.expanded),...r,renderStaticNode:!0,onHide:f})});u2.displayName="NavbarOffcanvas";const c2=v.forwardRef(({className:a,bsPrefix:r,as:c="span",...o},f)=>(r=Ct(r,"navbar-text"),s.jsx(c,{ref:f,className:rt(a,r),...o})));c2.displayName="NavbarText";const s2=v.forwardRef((a,r)=>{const{bsPrefix:c,expand:o=!0,variant:f="light",bg:d,fixed:p,sticky:y,className:x,as:m="nav",expanded:S,onToggle:w,onSelect:z,collapseOnSelect:_=!1,...R}=Og(a,{expanded:"onToggle"}),B=Ct(c,"navbar"),D=v.useCallback((...N)=>{z?.(...N),_&&S&&w?.(!1)},[z,_,S,w]);R.role===void 0&&m!=="nav"&&(R.role="navigation");let L=`${B}-expand`;typeof o=="string"&&(L=`${L}-${o}`);const H=v.useMemo(()=>({onToggle:()=>w?.(!S),bsPrefix:B,expanded:!!S,expand:o}),[B,S,o,w]);return s.jsx(Vl.Provider,{value:H,children:s.jsx(Jo.Provider,{value:D,children:s.jsx(m,{ref:r,...R,className:rt(x,B,o&&L,f&&`${B}-${f}`,d&&`bg-${d}`,y&&`sticky-${y}`,p&&`fixed-${p}`)})})})});s2.displayName="Navbar";const c7=Object.assign(s2,{Brand:e2,Collapse:t2,Offcanvas:u2,Text:c2,Toggle:n2});function s7(a){return ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M149.688 85.625c-1.234.005-2.465.033-3.72.063-33.913.806-75.48 10.704-127.25 33.718V362.78c60.77-28.82 106.718-37.067 144.22-33.092 33.502 3.55 59.685 16.66 83.562 31.187v-242.97c-23.217-17.744-50.195-30.04-85.97-32-3.52-.192-7.142-.296-10.843-.28zm211.968 0c-3.7-.016-7.322.088-10.844.28-35.773 1.96-62.75 14.256-85.968 32v242.97c23.876-14.527 50.06-27.637 83.562-31.188 37.502-3.974 83.45 4.272 144.22 33.094V119.407c-51.77-23.014-93.337-32.912-127.25-33.72-1.255-.028-2.486-.056-3.72-.06zm5.72 261.78c-1.038-.002-2.074.017-3.095.033-4.808.075-9.43.37-13.905.843-33.932 3.597-59.603 17.976-85.53 34.44v.28c-6.554-1.99-13.02-2.37-19.408-.97-25.566-16.177-51.003-30.202-84.468-33.75-5.595-.592-11.44-.883-17.564-.842-32.04.213-71.833 9.778-124.687 35.937v42.53c60.77-28.823 106.714-37.067 144.218-33.092 18.545 1.965 34.837 6.845 49.75 13.28-4.682 6.064-9.308 13.268-13.875 21.688h117.156c-5.93-8.22-11.798-15.414-17.626-21.56 14.996-6.503 31.39-11.43 50.062-13.408 37.503-3.974 83.448 4.27 144.22 33.094v-42.53c-53.16-26.31-93.115-35.863-125.25-35.97z"},child:[]}]})(a)}function f7(a){return ve({attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",fill:"currentColor"},child:[]}]})(a)}const d7=b(c7)`
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
`,h7=b.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 8px;
`,p7=b.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,m7=b.div`
  justify-self: center;
`,g7=b.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`,x7=b.button`
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
`,y7=b(Gl)`
  padding: 10px 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px; /* space between icon and text */
`,v7=b(s7)`
  width: 28px;
  height: 28px;
  flex: 0 0 28px;
  color: #f0703c /* keep high contrast; adjust to your brand */
`,b7=b.div`
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
`;function S7(){const a=()=>{console.log("Toggled theme")};return s.jsx("div",{className:"topbar-wrapper",children:s.jsx(d7,{className:"shadow-sm d-lg-none",children:s.jsx(Yg,{fluid:!0,className:"px-3",children:s.jsxs(h7,{children:[s.jsx(p7,{children:s.jsxs(y7,{to:"/instalearn/","aria-label":"Go to home",children:[s.jsx(v7,{"aria-hidden":"true"}),s.jsx(b7,{children:"InstaLearn"})]})}),s.jsx(m7,{}),s.jsx(g7,{children:s.jsx(x7,{type:"button",onClick:a,"aria-label":"Toggle",children:s.jsx(f7,{size:20})})})]})})})})}const w7=Et`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,j7=b.aside`
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
`,E7=b(Gl)`
  padding: 25px 12px 16px 12px;
  margin-bottom: 19px;
  margin-left: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: padding 200ms ease, margin 200ms ease;
`,C7=b.div`
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
`,z7=b.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
`,T7=xa`
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
    animation: ${w7} 4s linear infinite;
    box-shadow: 0 0 8px rgba(0, 245, 255, 0.8);
  }
`,lf=b(Gl)`
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

  ${a=>a.$active&&T7}
`,M7=b.div`
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px solid #dbdbdb;
`,rf=b.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,of=b.span`
  white-space: nowrap;
  transition: opacity 120ms ease, width 200ms ease;
`;function A7(){const{pathname:a}=Bn(),r=[{to:"/instalearn/",icon:s.jsx(Sg,{}),label:"Home"},{to:"/instalearn/teacher",icon:s.jsx(Qi,{}),label:"Teacher"},{to:"/instalearn/library",icon:s.jsx(bg,{}),label:"Library",hasNotification:!0},{to:"/instalearn/notifications",icon:s.jsx(j5,{}),label:"Notifications"},{to:"/instalearn/profile",icon:s.jsx(wg,{}),label:"Profile"}];return s.jsxs(j7,{children:[s.jsx(E7,{to:"/instalearn/",children:s.jsx(C7,{children:"InstaLearn"})}),s.jsxs(z7,{children:[r.slice(0,-1).map(c=>s.jsxs(lf,{to:c.to,$active:a===c.to,children:[s.jsx(rf,{children:c.icon}),s.jsx(of,{children:c.label}),c.hasNotification]},c.to)),s.jsxs(lf,{to:r[r.length-1].to,$active:a===r[r.length-1].to,children:[s.jsx(rf,{children:r[r.length-1].icon}),s.jsx(of,{children:r[r.length-1].label})]})]}),s.jsx(M7,{children:s.jsxs(lf,{to:"/instalearn/more",$active:a==="/instalearn/more",children:[s.jsx(rf,{children:s.jsx(E5,{})}),s.jsx(of,{children:"More"})]})})]})}const R7=b.div`
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
`,O7=b.div`
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
`,f2=b.div`
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
`,N7=b.div`
  position: relative;
  flex-shrink: 0;
`,_7=b.div`
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
  
  ${f2}:hover & {
    transform: scale(1.05);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }
`,D7=b.div`
  position: absolute;
  bottom: ${a=>a.$width<250?"2px":"4px"};
  right: ${a=>a.$width<250?"0":"2px"};
  width: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  height: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
`,$7=b.div`
  flex: 1;
  min-width: 0;
  display: ${a=>a.$width<180?"none":"block"};
`,k7=b.div`
  font-size: ${a=>a.$width<250?"13px":"14px"};
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,B7=b.div`
  font-size: ${a=>a.$width<250?"11px":"13px"};
  color: #6b7280;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,L7=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,U7=b.div`
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
`,H7=b.button`
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
`,Y7=b.div`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.$width<250?"8px":"12px"};
  margin-bottom: 32px;
`,d2=b.div`
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
`,G7=b.div`
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
  
  ${d2}:hover & {
    transform: scale(1.05) rotate(5deg);
  }
`,q7=b.div`
  display: flex;
  flex-direction: ${a=>a.$width<200?"column":a.$width<250?"row":"column"};
  align-items: ${a=>a.$width>=200&&a.$width<250?"center":"stretch"};
  flex: 1;
`,X7=b.div`
  flex: 1;
`,V7=b.h4`
  font-size: ${a=>a.$width<250?"12px":"13px"};
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 ${a=>a.$width<250?"2px":"4px"} 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Q7=b.p`
  font-size: ${a=>a.$width<250?"10px":"12px"};
  color: #6b7280;
  margin: 0;
  display: ${a=>a.$width<180?"none":"-webkit-box"};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
`,Z7=b.span`
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
`;b.a`
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
`;const K7=({sidebarWidth:a=360})=>{const r={username:"demo_user",name:"Demo User",initials:"DU"},c=[{icon:Tp,gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",title:"New Feature: Dark Mode",description:"Enable dark mode for a better night-time experience.",badge:"New",badgeBg:"linear-gradient(135deg, #667eea, #764ba2)"},{icon:C5,gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",title:"Product Tip: Quick Search",description:"Use the search bar to find items faster.",badge:"Tip",badgeBg:"linear-gradient(135deg, #f093fb, #f5576c)"},{icon:S5,gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",title:"Update: Version 2.0",description:"Check out the latest improvements and bug fixes.",badge:"Update",badgeBg:"linear-gradient(135deg, #4facfe, #00f2fe)"}];return s.jsxs(R7,{children:[s.jsx(O7,{children:s.jsxs(f2,{$width:a,children:[s.jsxs(N7,{children:[s.jsx(_7,{$width:a,children:r.initials}),s.jsx(D7,{$width:a})]}),s.jsxs($7,{$width:a,children:[s.jsx(k7,{$width:a,children:r.username}),s.jsx(B7,{$width:a,children:r.name})]})]})}),s.jsxs(L7,{children:[s.jsxs(U7,{$width:a,$iconColor:"#667eea",children:[s.jsx(Tp,{}),s.jsx("span",{children:"Highlights"})]}),s.jsx(H7,{$width:a,children:"See All"})]}),s.jsx(Y7,{$width:a,children:c.map((o,f)=>{const d=o.icon;return s.jsxs(d2,{$width:a,$glowColor:o.gradient,children:[s.jsx(Z7,{$width:a,$bg:o.badgeBg,children:o.badge}),s.jsxs(q7,{$width:a,children:[s.jsx(G7,{$width:a,$gradient:o.gradient,children:s.jsx(d,{})}),s.jsxs(X7,{children:[s.jsx(V7,{$width:a,children:o.title}),s.jsx(Q7,{$width:a,children:o.description})]})]})]},f)})})]})};function J7(){const{pathname:a}=Bn(),r=[["/instalearn/",s.jsx(Sg,{})],["/instalearn/teacher",s.jsx(Qi,{})],["/instalearn/library",s.jsx(bg,{})],["/instalearn/profile",s.jsx(wg,{})]];return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
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
      `}),s.jsx(e7,{className:"bottom-nav fixed-bottom d-flex justify-content-around py-2 d-lg-none",children:r.map(([c,o])=>s.jsx(Gl,{to:c,className:`nav-link fs-4 text-white ${a===c?"active":""}`,children:o},c))})]})}const F7={name:"Siddharth Sir",subject:"SST Teacher",bio:"Exploring history, geography & civics 🌍 | Making SST engaging for Classes 6–12 | CBSE Expert",avatar:lu.teacherProfilePic,concepts:247,students:"1.2K",learns:15,experience:8,bookList:[{title:"SST MARATHON"},{title:"World Geography Simplified"},{title:"Understanding Civics"},{title:"Economics Made Easy"},{title:"Political Science Basics"},{title:"Environment & Society"}]},dt=F7,W7=b.div`
  max-width: 1120px;
  margin: 0 auto;
  background: #fff;
  min-height: 100vh;
`,I7=b.div`
  padding: 1rem 1.5rem;
  @media (min-width: 768px) { padding: 1.5rem 2rem; }
  @media (min-width: 1024px) { padding: 2rem 3rem; }
`,P7=b.div`
  display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 1.5rem;
  @media (min-width: 768px) { flex-direction: row; align-items: flex-start; }
`,e9=b.div`
  display: flex; align-items: center; gap: 1.5rem;
  @media (min-width: 768px) { flex-direction: column; align-items: center; }
`,t9=b.div` position: relative; `,n9=b.img`
  width: 5rem; height: 5rem; border-radius: 50%; object-fit: cover; border: 2px solid #e5e7eb;
  @media (min-width: 768px) { width: 8rem; height: 8rem; }
  @media (min-width: 1024px) { width: 10rem; height: 10rem; }
`,a9=b.div`
  position: absolute;
  top: -6px; left: -6px;
  background: #111827; color: #fff; font-size: 0.65rem; font-weight: 700;
  padding: 0.25rem 0.4rem; border-radius: 8px;
  display: inline-flex; align-items: center; gap: 4px;
`,l9=b.div`
  display: flex; flex: 1; justify-content: space-around; text-align: center;
  @media (min-width: 768px) { display: none; }
`,i9=b.div`
  display: none; gap: 2rem; margin-bottom: 1.5rem;
  @media (min-width: 768px) { display: flex; }
`,Rl=b.div`
  font-weight: 600; font-size: 1.125rem;
  span { font-weight: 400; margin-left: 0.25rem; color: #6b7280; }
`,r9=b.div` flex: 1; `,o9=b.div`
  font-weight: 600; font-size: 1rem;
  @media (min-width: 768px) { font-size: 1.125rem; }
`,u9=b.div`
  font-size: 0.875rem; color: #6b7280;
  @media (min-width: 768px) { font-size: 1rem; }
`,c9=b.div`
  font-size: 0.875rem; margin-top: 0.5rem;
  @media (min-width: 768px) { font-size: 1rem; }
`,s9=b.div`
  font-size: 0.875rem; margin-top: 0.5rem; color: #6b7280;
  @media (min-width: 768px) { font-size: 1rem; }
`,f9=b.div` display: flex; gap: 0.5rem; margin-bottom: 1.5rem; `,d9=b.button`
  flex: 1; background: #3b82f6; color: #fff; font-weight: 600;
  padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;
  @media (min-width: 768px) { flex: initial; padding: 0.5rem 2rem; font-size: 1rem; }
`,h9=b.button`
  flex: 1; border: 1px solid #d1d5db; font-weight: 600;
  padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; position: relative;
  @media (min-width: 768px) { flex: initial; padding: 0.5rem 2rem; font-size: 1rem; }
  &[data-joined="true"] {
    background: #10b9810f; border-color: #10b981; color: #065f46;
  }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,p9=b.button`
  border: 1px solid #d1d5db; padding: 0.25rem 1rem; border-radius: 0.5rem;
`,m9=b.div`
  display: ${({hidden:a})=>a?"none":"flex"};
  align-items: center; justify-content: space-between;
  gap: 0.75rem; padding: 0.75rem 1rem; border: 1px dashed #d1d5db;
  border-radius: 12px; background: #f9fafb; color: #111827; margin-bottom: 1rem;
`,g9=b.div`
  font-size: 0.9rem; display: flex; align-items: center; gap: 8px;
  svg { flex-shrink: 0; }
`,x9=b.button`
  border: 1px solid #111827; background: #111827; color: #fff;
  border-radius: 10px; padding: 0.5rem 0.85rem; font-weight: 700; font-size: 0.875rem;
`,y9=b.div` margin-bottom: 1.5rem; `,v9=b.div`
  display: flex; gap: 1rem; overflow-x: auto; padding-bottom: 0.5rem;
`,b9=b.div`
  display: flex; flex-direction: column; align-items: center; min-width: fit-content; cursor: pointer; position: relative;
`,S9=b.div`
  position: absolute; inset: 0; border-radius: 9999px; display: flex; align-items: center; justify-content: center;
  background: rgba(17,24,39,0.55); color: #fff; font-weight: 700; font-size: 0.75rem;
  backdrop-filter: blur(2px);
`,w9=b.div`
  width: 4rem; height: 4rem; border-radius: 50%; padding: 0.125rem;
  background: linear-gradient(to top right, #a78bfa, #f472b6, #fb923c);
  @media (min-width: 768px) { width: 5rem; height: 5rem; }
  @media (min-width: 1024px) { width: 6rem; height: 6rem; }
  filter: ${({$locked:a})=>a?"grayscale(0.8)":"none"};
  opacity: ${({$locked:a})=>a?.6:1};
`,j9=b.div`
  width: 100%; height: 100%; border-radius: 50%; padding: 0.25rem; background: #fff;
  display: flex; align-items: center; justify-content: center;
`,E9=b.div`
  font-size: 0.75rem; color: #374151; text-align: center; margin-top: 0.25rem;
  max-width: 4.375rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  @media (min-width: 768px) { font-size: 0.875rem; max-width: 5.625rem; }
  opacity: ${({$locked:a})=>a?.6:1};
`,C9=b.div` display: flex; border-top: 1px solid #e5e7eb; `,Mm=b.button`
  flex: 1; padding: 0.75rem 0; display: flex; justify-content: center; align-items: center; gap: 0.5rem;
  border-top: 2px solid ${({active:a})=>a?"#111827":"transparent"};
  color: ${({active:a})=>a?"#111827":"#9ca3af"};
`,z9=b.div`
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.25rem;
  @media (min-width: 768px) { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.5rem; }
  @media (min-width: 1024px) { grid-template-columns: repeat(5, minmax(0, 1fr)); }
  @media (min-width: 1280px) { grid-template-columns: repeat(6, minmax(0, 1fr)); }
`,T9=b.div`
  aspect-ratio: 1 / 1; background: #f3f4f6; display: flex; justify-content: center; align-items: center; position: relative;
  filter: ${({$locked:a})=>a?"blur(2px)":"none"};
  overflow: hidden;
`,M9=b.div`
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  background: rgba(17,24,39,0.45); color: #fff; font-weight: 800; font-size: 0.8rem;
`,A9=b.button`
  margin: 0.75rem auto 1.25rem; display: ${({hidden:a})=>a?"none":"block"};
  background: #111827; color: #fff; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 700;
`,R9=b.div`
  position: fixed; inset: 0; background: rgba(17, 24, 39, 0.6);
  display: flex; align-items: center; justify-content: center; z-index: 50;
`,O9=b.div`
  width: min(96vw, 720px); background: #ffffff; border-radius: 16px;
  box-shadow: 0 20px 48px rgba(0,0,0,0.18); overflow: hidden;
`,N9=b.div`
  display: flex; justify-content: space-between; align-items: center;
  padding: 1rem 1.25rem; border-bottom: 1px solid #f3f4f6;
`,_9=b.h3`
  margin: 0; font-size: 1rem; font-weight: 700; color: #111827;
`,D9=b.button`
  border: 1px solid #e5e7eb; background: #fff; border-radius: 8px; padding: 0.25rem;
`,$9=b.div`
  padding: 1rem; display: grid; gap: 1rem;
  @media (min-width: 768px) { grid-template-columns: repeat(3, 1fr); }
`,k9=b.button`
  border: 1px solid ${({$active:a})=>a?"#2563eb":"#e5e7eb"};
  border-radius: 14px; padding: 1rem; text-align: left; background: ${({$active:a})=>a?"#eff6ff":"#fff"};
  display: grid; gap: 0.25rem; cursor: pointer;
  &:hover { border-color: #2563eb; }
  h4 { margin: 0; font-size: 1rem; font-weight: 700; color: #111827; }
  p { margin: 0; color: #6b7280; font-size: 0.875rem; }
  strong { font-size: 1.25rem; }
`,B9=b.div`
  border-top: 1px solid #f3f4f6; padding: 0.75rem 1.25rem; display: flex; gap: 0.5rem; justify-content: flex-end;
`,L9=b.button`
  background: #111827; color: #fff; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 700;
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,U9=b.button`
  border: 1px solid #d1d5db; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 600; background: #fff;
`;function H9(){v.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]);const a=Cf(),[r,c]=v.useState(!1),[o,f]=v.useState("basic"),[d,p]=v.useState(!1),[y,x]=v.useState(!1),m=3,S=3;v.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]),v.useEffect(()=>{const D=`joined:${dt?.id||dt?.name}`;localStorage.getItem(D)==="true"&&x(!0)},[]),v.useEffect(()=>{const D=`joined:${dt?.id||dt?.name}`;localStorage.setItem(D,y?"true":"false")},[y]);const w=D=>{if(!y&&D>=m){c(!0);return}D===0&&a("/instalearn/library")},z=()=>{y||c(!0)},_=async()=>{p(!0),await new Promise(D=>setTimeout(D,1500)),p(!1),x(!0),c(!1)},R=[{key:"basic",name:"Basic",price:"₹0",desc:"Demo access: 3 lessons"},{key:"pro",name:"Pro",price:"₹99",desc:"Monthly: full library"},{key:"team",name:"Team",price:"₹1,99",desc:"Up to 10 students"}],B=y;return s.jsxs(W7,{children:[s.jsxs(I7,{children:[s.jsxs(P7,{children:[s.jsxs(e9,{children:[s.jsxs(t9,{children:[s.jsx(n9,{src:dt.avatar,alt:dt.name}),!y&&s.jsxs(a9,{"aria-hidden":"true",title:"Pro library locked",children:[s.jsx(zo,{size:12})," LOCKED"]})]}),s.jsxs(l9,{children:[s.jsxs(Rl,{children:[dt.concepts," ",s.jsx("span",{children:"concepts"})]}),s.jsxs(Rl,{children:[dt.students," ",s.jsx("span",{children:"students"})]}),s.jsxs(Rl,{children:[dt.learns," ",s.jsx("span",{children:"learns"})]})]})]}),s.jsxs(r9,{children:[s.jsxs(i9,{children:[s.jsxs(Rl,{children:[dt.concepts," ",s.jsx("span",{children:"concepts"})]}),s.jsxs(Rl,{children:[dt.students," ",s.jsx("span",{children:"students"})]}),s.jsxs(Rl,{children:[dt.learns," ",s.jsx("span",{children:"learns"})]})]}),s.jsx(o9,{children:dt.name}),s.jsx(u9,{children:dt.subject}),s.jsx(c9,{children:dt.bio}),s.jsxs(s9,{children:["🎓 ",dt.experience," years experience"]}),s.jsxs(f9,{children:[s.jsx(d9,{children:"Follow"}),s.jsx(h9,{onClick:z,disabled:d,"data-joined":y,"aria-pressed":y,"aria-label":y?"Joined":"Join",title:y?"You're in!":"Join this teacher",children:y?s.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[s.jsx(N4,{size:18})," Joined"]}):d?"Processing…":"Join"}),s.jsx(p9,{"aria-label":"More options",children:"▼"})]}),s.jsxs(m9,{hidden:B,role:"note","aria-live":"polite",children:[s.jsxs(g9,{children:[s.jsx(zo,{size:18})," Pro library locked — get full access to all concepts & posts."]}),s.jsx(x9,{onClick:()=>c(!0),"aria-label":"Unlock full library",children:"Unlock"})]})]})]}),s.jsx(y9,{children:s.jsx(v9,{children:dt.bookList.map((D,L)=>{const H=!y&&L>=m;return s.jsxs(b9,{onClick:()=>w(L),"aria-disabled":H,title:H?"Join to unlock":`Open ${D.title}`,children:[s.jsx(w9,{$locked:H,children:s.jsx(j9,{children:s.jsx(_l,{size:24})})}),s.jsx(E9,{$locked:H,children:D.title}),!y&&H&&s.jsxs(S9,{children:[s.jsx(zo,{size:14,style:{marginRight:6}})," Locked"]})]},L)})})})]}),s.jsxs(C9,{children:[s.jsx(Mm,{active:!0,children:s.jsx(X4,{size:20})}),s.jsx(Mm,{children:s.jsx(M4,{size:20})})]}),s.jsx(z9,{"aria-label":"Teacher posts",children:Array(9).fill(null).map((D,L)=>{const H=!y&&L>=S;return s.jsxs(T9,{$locked:H,"aria-hidden":!1,children:[s.jsx(_l,{size:24}),H&&s.jsxs(M9,{children:[s.jsx(zo,{size:16,style:{marginRight:6}})," Join to view"]})]},L)})}),s.jsx(A9,{hidden:y,onClick:()=>c(!0),"aria-label":"Unlock all posts",children:"Unlock entire library"}),r&&s.jsx(R9,{role:"dialog","aria-modal":"true","aria-labelledby":"pricing-title",children:s.jsxs(O9,{children:[s.jsxs(N9,{children:[s.jsx(_9,{id:"pricing-title",children:"Choose your plan"}),s.jsx(D9,{onClick:()=>c(!1),"aria-label":"Close pricing",children:s.jsx(i6,{size:18})})]}),s.jsx($9,{children:R.map(D=>s.jsxs(k9,{onClick:()=>f(D.key),$active:o===D.key,"aria-pressed":o===D.key,children:[s.jsx("h4",{children:D.name}),s.jsx("strong",{children:D.price}),s.jsx("p",{children:D.desc})]},D.key))}),s.jsxs(B9,{children:[s.jsx(U9,{onClick:()=>c(!1),children:"Not now"}),s.jsx(L9,{onClick:_,disabled:d,children:d?"Processing payment…":"Demo Pay & Join"})]})]})})]})}const Y9=b.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--color-light, #f5f5f5);
`,G9=b.aside`
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
`,q9=b.div`
  flex: 1;
  display: flex;
  width: 100%;

  @media (min-width: 1024px) {
    /* match LeftSidebar width exactly to avoid layout jump */
    margin-left: 246px;
  }
`,X9=b.main`
  flex: 1;
  width: 100%;
  padding-bottom: 60px;
  transition: ${a=>a.$isResizing?"none":"margin-right 0.2s ease"};
  will-change: margin-right;

  @media (min-width: 1024px) {
    padding-bottom: 0;
    margin-right: ${a=>`${a.$sidebarWidth}px`};
  }
`,V9=b.aside`
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
`,Q9=b.div`
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
`,Z9=b.div`
  display: block;
  margin-bottom: 60px;

  @media (min-width: 1024px) {
    display: none;
  }
`,K9=b.div`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (min-width: 1024px) {
    display: none;
  }
`;function J9(){const[a,r]=v.useState(360),[c,o]=v.useState(!1),f=v.useRef(null),d=350,p=600,y=x=>{x.preventDefault(),o(!0),f.current={startX:x.clientX,startWidth:a}};return v.useEffect(()=>{const x=(w,z,_)=>Math.min(Math.max(w,z),_),m=w=>{if(!c||!f.current)return;const{startX:z,startWidth:_}=f.current,R=z-w.clientX,B=x(_+R,d,p);r(B)},S=()=>{c&&(o(!1),f.current=null)};return c&&(document.addEventListener("mousemove",m),document.addEventListener("mouseup",S),document.body.style.cursor="ew-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",S),document.body.style.cursor="",document.body.style.userSelect=""}},[c]),s.jsxs(Y9,{children:[s.jsx(G9,{children:s.jsx(A7,{})}),s.jsxs(q9,{children:[s.jsxs(X9,{$sidebarWidth:a,$isResizing:c,children:[s.jsx(Z9,{children:s.jsx(S7,{})}),s.jsxs(Dv,{children:[s.jsx(ka,{path:"/instalearn",element:s.jsx(A6,{})}),s.jsx(ka,{path:"/instalearn/teacher",element:s.jsx(H9,{})}),s.jsx(ka,{path:"/instalearn/library",element:s.jsx(y4,{})}),s.jsx(ka,{path:"/instalearn/notifications",element:s.jsx(sm,{})}),s.jsx(ka,{path:"/instalearn/more",element:s.jsx(sm,{})}),s.jsx(ka,{path:"/instalearn/profile",element:s.jsx(o8,{})})]})]}),s.jsxs(V9,{$width:a,$isResizing:c,children:[s.jsx(Q9,{className:c?"active":"",onMouseDown:y,"aria-label":"Resize sidebar"}),s.jsx(K7,{})]})]}),s.jsx(K9,{children:s.jsx(J7,{})})]})}Xy.createRoot(document.getElementById("root")).render(s.jsx(ab,{children:s.jsx(J9,{})}));
