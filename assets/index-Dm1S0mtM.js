(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))o(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function u(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(f){if(f.ep)return;f.ep=!0;const d=u(f);fetch(f.href,d)}})();function Fi(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Cs={exports:{}},Ui={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function By(){if(Wp)return Ui;Wp=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function u(o,f,d){var p=null;if(d!==void 0&&(p=""+d),f.key!==void 0&&(p=""+f.key),"key"in f){d={};for(var y in f)y!=="key"&&(d[y]=f[y])}else d=f;return f=d.ref,{$$typeof:a,type:o,key:p,ref:f!==void 0?f:null,props:d}}return Ui.Fragment=r,Ui.jsx=u,Ui.jsxs=u,Ui}var Ip;function Ly(){return Ip||(Ip=1,Cs.exports=By()),Cs.exports}var s=Ly(),zs={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function Uy(){if(Pp)return ue;Pp=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),p=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),z=Symbol.iterator;function N(E){return E===null||typeof E!="object"?null:(E=z&&E[z]||E["@@iterator"],typeof E=="function"?E:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,_={};function L(E,G,F){this.props=E,this.context=G,this.refs=_,this.updater=F||M}L.prototype.isReactComponent={},L.prototype.setState=function(E,G){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,G,"setState")},L.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function H(){}H.prototype=L.prototype;function O(E,G,F){this.props=E,this.context=G,this.refs=_,this.updater=F||M}var X=O.prototype=new H;X.constructor=O,D(X,L.prototype),X.isPureReactComponent=!0;var Z=Array.isArray;function U(){}var Q={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function I(E,G,F){var W=F.ref;return{$$typeof:a,type:E,key:G,ref:W!==void 0?W:null,props:F}}function oe(E,G){return I(E.type,G,E.props)}function ze(E){return typeof E=="object"&&E!==null&&E.$$typeof===a}function Ge(E){var G={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(F){return G[F]})}var et=/\/+/g;function nt(E,G){return typeof E=="object"&&E!==null&&E.key!=null?Ge(""+E.key):G.toString(36)}function Le(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(U,U):(E.status="pending",E.then(function(G){E.status==="pending"&&(E.status="fulfilled",E.value=G)},function(G){E.status==="pending"&&(E.status="rejected",E.reason=G)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function B(E,G,F,W,le){var ce=typeof E;(ce==="undefined"||ce==="boolean")&&(E=null);var pe=!1;if(E===null)pe=!0;else switch(ce){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(E.$$typeof){case a:case r:pe=!0;break;case S:return pe=E._init,B(pe(E._payload),G,F,W,le)}}if(pe)return le=le(E),pe=W===""?"."+nt(E,0):W,Z(le)?(F="",pe!=null&&(F=pe.replace(et,"$&/")+"/"),B(le,G,F,"",function(zt){return zt})):le!=null&&(ze(le)&&(le=oe(le,F+(le.key==null||E&&E.key===le.key?"":(""+le.key).replace(et,"$&/")+"/")+pe)),G.push(le)),1;pe=0;var He=W===""?".":W+":";if(Z(E))for(var Se=0;Se<E.length;Se++)W=E[Se],ce=He+nt(W,Se),pe+=B(W,G,F,ce,le);else if(Se=N(E),typeof Se=="function")for(E=Se.call(E),Se=0;!(W=E.next()).done;)W=W.value,ce=He+nt(W,Se++),pe+=B(W,G,F,ce,le);else if(ce==="object"){if(typeof E.then=="function")return B(Le(E),G,F,W,le);throw G=String(E),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return pe}function K(E,G,F){if(E==null)return E;var W=[],le=0;return B(E,W,"","",function(ce){return G.call(F,ce,le++)}),W}function P(E){if(E._status===-1){var G=E._result;G=G(),G.then(function(F){(E._status===0||E._status===-1)&&(E._status=1,E._result=F)},function(F){(E._status===0||E._status===-1)&&(E._status=2,E._result=F)}),E._status===-1&&(E._status=0,E._result=G)}if(E._status===1)return E._result.default;throw E._result}var te=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},de={map:K,forEach:function(E,G,F){K(E,function(){G.apply(this,arguments)},F)},count:function(E){var G=0;return K(E,function(){G++}),G},toArray:function(E){return K(E,function(G){return G})||[]},only:function(E){if(!ze(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return ue.Activity=w,ue.Children=de,ue.Component=L,ue.Fragment=u,ue.Profiler=f,ue.PureComponent=O,ue.StrictMode=o,ue.Suspense=x,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,ue.__COMPILER_RUNTIME={__proto__:null,c:function(E){return Q.H.useMemoCache(E)}},ue.cache=function(E){return function(){return E.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(E,G,F){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var W=D({},E.props),le=E.key;if(G!=null)for(ce in G.key!==void 0&&(le=""+G.key),G)!ee.call(G,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&G.ref===void 0||(W[ce]=G[ce]);var ce=arguments.length-2;if(ce===1)W.children=F;else if(1<ce){for(var pe=Array(ce),He=0;He<ce;He++)pe[He]=arguments[He+2];W.children=pe}return I(E.type,le,W)},ue.createContext=function(E){return E={$$typeof:p,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:d,_context:E},E},ue.createElement=function(E,G,F){var W,le={},ce=null;if(G!=null)for(W in G.key!==void 0&&(ce=""+G.key),G)ee.call(G,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(le[W]=G[W]);var pe=arguments.length-2;if(pe===1)le.children=F;else if(1<pe){for(var He=Array(pe),Se=0;Se<pe;Se++)He[Se]=arguments[Se+2];le.children=He}if(E&&E.defaultProps)for(W in pe=E.defaultProps,pe)le[W]===void 0&&(le[W]=pe[W]);return I(E,ce,le)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(E){return{$$typeof:y,render:E}},ue.isValidElement=ze,ue.lazy=function(E){return{$$typeof:S,_payload:{_status:-1,_result:E},_init:P}},ue.memo=function(E,G){return{$$typeof:m,type:E,compare:G===void 0?null:G}},ue.startTransition=function(E){var G=Q.T,F={};Q.T=F;try{var W=E(),le=Q.S;le!==null&&le(F,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(U,te)}catch(ce){te(ce)}finally{G!==null&&F.types!==null&&(G.types=F.types),Q.T=G}},ue.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},ue.use=function(E){return Q.H.use(E)},ue.useActionState=function(E,G,F){return Q.H.useActionState(E,G,F)},ue.useCallback=function(E,G){return Q.H.useCallback(E,G)},ue.useContext=function(E){return Q.H.useContext(E)},ue.useDebugValue=function(){},ue.useDeferredValue=function(E,G){return Q.H.useDeferredValue(E,G)},ue.useEffect=function(E,G){return Q.H.useEffect(E,G)},ue.useEffectEvent=function(E){return Q.H.useEffectEvent(E)},ue.useId=function(){return Q.H.useId()},ue.useImperativeHandle=function(E,G,F){return Q.H.useImperativeHandle(E,G,F)},ue.useInsertionEffect=function(E,G){return Q.H.useInsertionEffect(E,G)},ue.useLayoutEffect=function(E,G){return Q.H.useLayoutEffect(E,G)},ue.useMemo=function(E,G){return Q.H.useMemo(E,G)},ue.useOptimistic=function(E,G){return Q.H.useOptimistic(E,G)},ue.useReducer=function(E,G,F){return Q.H.useReducer(E,G,F)},ue.useRef=function(E){return Q.H.useRef(E)},ue.useState=function(E){return Q.H.useState(E)},ue.useSyncExternalStore=function(E,G,F){return Q.H.useSyncExternalStore(E,G,F)},ue.useTransition=function(){return Q.H.useTransition()},ue.version="19.2.0",ue}var e1;function jf(){return e1||(e1=1,zs.exports=Uy()),zs.exports}var v=jf();const ke=Fi(v);var Ts={exports:{}},Hi={},Ms={exports:{}},As={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t1;function Hy(){return t1||(t1=1,(function(a){function r(B,K){var P=B.length;B.push(K);e:for(;0<P;){var te=P-1>>>1,de=B[te];if(0<f(de,K))B[te]=K,B[P]=de,P=te;else break e}}function u(B){return B.length===0?null:B[0]}function o(B){if(B.length===0)return null;var K=B[0],P=B.pop();if(P!==K){B[0]=P;e:for(var te=0,de=B.length,E=de>>>1;te<E;){var G=2*(te+1)-1,F=B[G],W=G+1,le=B[W];if(0>f(F,P))W<de&&0>f(le,F)?(B[te]=le,B[W]=P,te=W):(B[te]=F,B[G]=P,te=G);else if(W<de&&0>f(le,P))B[te]=le,B[W]=P,te=W;else break e}}return K}function f(B,K){var P=B.sortIndex-K.sortIndex;return P!==0?P:B.id-K.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var p=Date,y=p.now();a.unstable_now=function(){return p.now()-y}}var x=[],m=[],S=1,w=null,z=3,N=!1,M=!1,D=!1,_=!1,L=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function X(B){for(var K=u(m);K!==null;){if(K.callback===null)o(m);else if(K.startTime<=B)o(m),K.sortIndex=K.expirationTime,r(x,K);else break;K=u(m)}}function Z(B){if(D=!1,X(B),!M)if(u(x)!==null)M=!0,U||(U=!0,Ge());else{var K=u(m);K!==null&&Le(Z,K.startTime-B)}}var U=!1,Q=-1,ee=5,I=-1;function oe(){return _?!0:!(a.unstable_now()-I<ee)}function ze(){if(_=!1,U){var B=a.unstable_now();I=B;var K=!0;try{e:{M=!1,D&&(D=!1,H(Q),Q=-1),N=!0;var P=z;try{t:{for(X(B),w=u(x);w!==null&&!(w.expirationTime>B&&oe());){var te=w.callback;if(typeof te=="function"){w.callback=null,z=w.priorityLevel;var de=te(w.expirationTime<=B);if(B=a.unstable_now(),typeof de=="function"){w.callback=de,X(B),K=!0;break t}w===u(x)&&o(x),X(B)}else o(x);w=u(x)}if(w!==null)K=!0;else{var E=u(m);E!==null&&Le(Z,E.startTime-B),K=!1}}break e}finally{w=null,z=P,N=!1}K=void 0}}finally{K?Ge():U=!1}}}var Ge;if(typeof O=="function")Ge=function(){O(ze)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,nt=et.port2;et.port1.onmessage=ze,Ge=function(){nt.postMessage(null)}}else Ge=function(){L(ze,0)};function Le(B,K){Q=L(function(){B(a.unstable_now())},K)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(B){B.callback=null},a.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<B?Math.floor(1e3/B):5},a.unstable_getCurrentPriorityLevel=function(){return z},a.unstable_next=function(B){switch(z){case 1:case 2:case 3:var K=3;break;default:K=z}var P=z;z=K;try{return B()}finally{z=P}},a.unstable_requestPaint=function(){_=!0},a.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var P=z;z=B;try{return K()}finally{z=P}},a.unstable_scheduleCallback=function(B,K,P){var te=a.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?te+P:te):P=te,B){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=P+de,B={id:S++,callback:K,priorityLevel:B,startTime:P,expirationTime:de,sortIndex:-1},P>te?(B.sortIndex=P,r(m,B),u(x)===null&&B===u(m)&&(D?(H(Q),Q=-1):D=!0,Le(Z,P-te))):(B.sortIndex=de,r(x,B),M||N||(M=!0,U||(U=!0,Ge()))),B},a.unstable_shouldYield=oe,a.unstable_wrapCallback=function(B){var K=z;return function(){var P=z;z=K;try{return B.apply(this,arguments)}finally{z=P}}}})(As)),As}var n1;function Yy(){return n1||(n1=1,Ms.exports=Hy()),Ms.exports}var Rs={exports:{}},ht={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a1;function Gy(){if(a1)return ht;a1=1;var a=jf();function r(x){var m="https://react.dev/errors/"+x;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)m+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+x+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var o={d:{f:u,r:function(){throw Error(r(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},f=Symbol.for("react.portal");function d(x,m,S){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:w==null?null:""+w,children:x,containerInfo:m,implementation:S}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(x,m){if(x==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ht.createPortal=function(x,m){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(r(299));return d(x,m,null,S)},ht.flushSync=function(x){var m=p.T,S=o.p;try{if(p.T=null,o.p=2,x)return x()}finally{p.T=m,o.p=S,o.d.f()}},ht.preconnect=function(x,m){typeof x=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(x,m))},ht.prefetchDNS=function(x){typeof x=="string"&&o.d.D(x)},ht.preinit=function(x,m){if(typeof x=="string"&&m&&typeof m.as=="string"){var S=m.as,w=y(S,m.crossOrigin),z=typeof m.integrity=="string"?m.integrity:void 0,N=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;S==="style"?o.d.S(x,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:w,integrity:z,fetchPriority:N}):S==="script"&&o.d.X(x,{crossOrigin:w,integrity:z,fetchPriority:N,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ht.preinitModule=function(x,m){if(typeof x=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var S=y(m.as,m.crossOrigin);o.d.M(x,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(x)},ht.preload=function(x,m){if(typeof x=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var S=m.as,w=y(S,m.crossOrigin);o.d.L(x,S,{crossOrigin:w,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ht.preloadModule=function(x,m){if(typeof x=="string")if(m){var S=y(m.as,m.crossOrigin);o.d.m(x,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(x)},ht.requestFormReset=function(x){o.d.r(x)},ht.unstable_batchedUpdates=function(x,m){return x(m)},ht.useFormState=function(x,m,S){return p.H.useFormState(x,m,S)},ht.useFormStatus=function(){return p.H.useHostTransitionStatus()},ht.version="19.2.0",ht}var l1;function Rm(){if(l1)return Rs.exports;l1=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Rs.exports=Gy(),Rs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i1;function qy(){if(i1)return Hi;i1=1;var a=Yy(),r=jf(),u=Rm();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(d(e)!==e)throw Error(o(188))}function m(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,l=t;;){var i=n.return;if(i===null)break;var c=i.alternate;if(c===null){if(l=i.return,l!==null){n=l;continue}break}if(i.child===c.child){for(c=i.child;c;){if(c===n)return x(i),e;if(c===l)return x(i),t;c=c.sibling}throw Error(o(188))}if(n.return!==l.return)n=i,l=c;else{for(var h=!1,g=i.child;g;){if(g===n){h=!0,n=i,l=c;break}if(g===l){h=!0,l=i,n=c;break}g=g.sibling}if(!h){for(g=c.child;g;){if(g===n){h=!0,n=c,l=i;break}if(g===l){h=!0,l=c,n=i;break}g=g.sibling}if(!h)throw Error(o(189))}}if(n.alternate!==l)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function S(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,z=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),O=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),oe=Symbol.for("react.memo_cache_sentinel"),ze=Symbol.iterator;function Ge(e){return e===null||typeof e!="object"?null:(e=ze&&e[ze]||e["@@iterator"],typeof e=="function"?e:null)}var et=Symbol.for("react.client.reference");function nt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case L:return"Profiler";case _:return"StrictMode";case Z:return"Suspense";case U:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case O:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return t=e.displayName||null,t!==null?t:nt(e.type)||"Memo";case ee:t=e._payload,e=e._init;try{return nt(e(t))}catch{}}return null}var Le=Array.isArray,B=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},te=[],de=-1;function E(e){return{current:e}}function G(e){0>de||(e.current=te[de],te[de]=null,de--)}function F(e,t){de++,te[de]=e.current,e.current=t}var W=E(null),le=E(null),ce=E(null),pe=E(null);function He(e,t){switch(F(ce,t),F(le,e),F(W,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?bp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=bp(t),e=Sp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(W),F(W,e)}function Se(){G(W),G(le),G(ce)}function zt(e){e.memoizedState!==null&&F(pe,e);var t=W.current,n=Sp(t,e.type);t!==n&&(F(le,e),F(W,n))}function Ft(e){le.current===e&&(G(W),G(le)),pe.current===e&&(G(pe),$i._currentValue=P)}var mt,Ha;function Lt(e){if(mt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);mt=t&&t[1]||"",Ha=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mt+e+Ha}var _e=!1;function Ya(e,t){if(!e||_e)return"";_e=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch($){var k=$}Reflect.construct(e,[],V)}else{try{V.call()}catch($){k=$}e.call(V.prototype)}}else{try{throw Error()}catch($){k=$}(V=e())&&typeof V.catch=="function"&&V.catch(function(){})}}catch($){if($&&k&&typeof $.stack=="string")return[$.stack,k.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),h=c[0],g=c[1];if(h&&g){var j=h.split(`
`),R=g.split(`
`);for(i=l=0;l<j.length&&!j[l].includes("DetermineComponentFrameRoot");)l++;for(;i<R.length&&!R[i].includes("DetermineComponentFrameRoot");)i++;if(l===j.length||i===R.length)for(l=j.length-1,i=R.length-1;1<=l&&0<=i&&j[l]!==R[i];)i--;for(;1<=l&&0<=i;l--,i--)if(j[l]!==R[i]){if(l!==1||i!==1)do if(l--,i--,0>i||j[l]!==R[i]){var Y=`
`+j[l].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=l&&0<=i);break}}}finally{_e=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Lt(n):""}function Ql(e,t){switch(e.tag){case 26:case 27:case 5:return Lt(e.type);case 16:return Lt("Lazy");case 13:return e.child!==t&&t!==null?Lt("Suspense Fallback"):Lt("Suspense");case 19:return Lt("SuspenseList");case 0:case 15:return Ya(e.type,!1);case 11:return Ya(e.type.render,!1);case 1:return Ya(e.type,!0);case 31:return Lt("Activity");default:return""}}function Wf(e){try{var t="",n=null;do t+=Ql(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var sc=Object.prototype.hasOwnProperty,fc=a.unstable_scheduleCallback,dc=a.unstable_cancelCallback,m2=a.unstable_shouldYield,g2=a.unstable_requestPaint,Tt=a.unstable_now,x2=a.unstable_getCurrentPriorityLevel,If=a.unstable_ImmediatePriority,Pf=a.unstable_UserBlockingPriority,tr=a.unstable_NormalPriority,y2=a.unstable_LowPriority,ed=a.unstable_IdlePriority,v2=a.log,b2=a.unstable_setDisableYieldValue,Zl=null,Mt=null;function Un(e){if(typeof v2=="function"&&b2(e),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(Zl,e)}catch{}}var At=Math.clz32?Math.clz32:j2,S2=Math.log,w2=Math.LN2;function j2(e){return e>>>=0,e===0?32:31-(S2(e)/w2|0)|0}var nr=256,ar=262144,lr=4194304;function ya(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ir(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var i=0,c=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var g=l&134217727;return g!==0?(l=g&~c,l!==0?i=ya(l):(h&=g,h!==0?i=ya(h):n||(n=g&~e,n!==0&&(i=ya(n))))):(g=l&~c,g!==0?i=ya(g):h!==0?i=ya(h):n||(n=l&~e,n!==0&&(i=ya(n)))),i===0?0:t!==0&&t!==i&&(t&c)===0&&(c=i&-i,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:i}function Kl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function E2(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function td(){var e=lr;return lr<<=1,(lr&62914560)===0&&(lr=4194304),e}function hc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function C2(e,t,n,l,i,c){var h=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,j=e.expirationTimes,R=e.hiddenUpdates;for(n=h&~n;0<n;){var Y=31-At(n),V=1<<Y;g[Y]=0,j[Y]=-1;var k=R[Y];if(k!==null)for(R[Y]=null,Y=0;Y<k.length;Y++){var $=k[Y];$!==null&&($.lane&=-536870913)}n&=~V}l!==0&&nd(e,l,0),c!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=c&~(h&~t))}function nd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-At(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function ad(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-At(n),i=1<<l;i&t|e[l]&t&&(e[l]|=t),n&=~i}}function ld(e,t){var n=t&-t;return n=(n&42)!==0?1:pc(n),(n&(e.suspendedLanes|t))!==0?0:n}function pc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function mc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function id(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Xp(e.type))}function rd(e,t){var n=K.p;try{return K.p=e,t()}finally{K.p=n}}var Hn=Math.random().toString(36).slice(2),ot="__reactFiber$"+Hn,xt="__reactProps$"+Hn,Ga="__reactContainer$"+Hn,gc="__reactEvents$"+Hn,z2="__reactListeners$"+Hn,T2="__reactHandles$"+Hn,od="__reactResources$"+Hn,Fl="__reactMarker$"+Hn;function xc(e){delete e[ot],delete e[xt],delete e[gc],delete e[z2],delete e[T2]}function qa(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ga]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Mp(e);e!==null;){if(n=e[ot])return n;e=Mp(e)}return t}e=n,n=e.parentNode}return null}function Xa(e){if(e=e[ot]||e[Ga]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Wl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Va(e){var t=e[od];return t||(t=e[od]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function at(e){e[Fl]=!0}var cd=new Set,ud={};function va(e,t){Qa(e,t),Qa(e+"Capture",t)}function Qa(e,t){for(ud[e]=t,e=0;e<t.length;e++)cd.add(t[e])}var M2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sd={},fd={};function A2(e){return sc.call(fd,e)?!0:sc.call(sd,e)?!1:M2.test(e)?fd[e]=!0:(sd[e]=!0,!1)}function rr(e,t,n){if(A2(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function or(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function fn(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function Ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function R2(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,c=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(h){n=""+h,c.call(this,h)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(h){n=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yc(e){if(!e._valueTracker){var t=dd(e)?"checked":"value";e._valueTracker=R2(e,t,""+e[t])}}function hd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=dd(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function cr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var O2=/[\n"\\]/g;function Ht(e){return e.replace(O2,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function vc(e,t,n,l,i,c,h,g){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ut(t)):e.value!==""+Ut(t)&&(e.value=""+Ut(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?bc(e,h,Ut(t)):n!=null?bc(e,h,Ut(n)):l!=null&&e.removeAttribute("value"),i==null&&c!=null&&(e.defaultChecked=!!c),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Ut(g):e.removeAttribute("name")}function pd(e,t,n,l,i,c,h,g){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){yc(e);return}n=n!=null?""+Ut(n):"",t=t!=null?""+Ut(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=g?e.checked:!!l,e.defaultChecked=!!l,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),yc(e)}function bc(e,t,n){t==="number"&&cr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Za(e,t,n,l){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function md(e,t,n){if(t!=null&&(t=""+Ut(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ut(n):""}function gd(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(o(92));if(Le(l)){if(1<l.length)throw Error(o(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Ut(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),yc(e)}function Ka(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var N2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xd(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||N2.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function yd(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var i in t)l=t[i],t.hasOwnProperty(i)&&n[i]!==l&&xd(e,i,l)}else for(var c in t)t.hasOwnProperty(c)&&xd(e,c,t[c])}function Sc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var k2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ur(e){return _2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function dn(){}var wc=null;function jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ja=null,Fa=null;function vd(e){var t=Xa(e);if(t&&(e=t.stateNode)){var n=e[xt]||null;e:switch(e=t.stateNode,t.type){case"input":if(vc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ht(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var i=l[xt]||null;if(!i)throw Error(o(90));vc(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&hd(l)}break e;case"textarea":md(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Za(e,!!n.multiple,t,!1)}}}var Ec=!1;function bd(e,t,n){if(Ec)return e(t,n);Ec=!0;try{var l=e(t);return l}finally{if(Ec=!1,(Ja!==null||Fa!==null)&&(Fr(),Ja&&(t=Ja,e=Fa,Fa=Ja=null,vd(t),e)))for(t=0;t<e.length;t++)vd(e[t])}}function Il(e,t){var n=e.stateNode;if(n===null)return null;var l=n[xt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cc=!1;if(hn)try{var Pl={};Object.defineProperty(Pl,"passive",{get:function(){Cc=!0}}),window.addEventListener("test",Pl,Pl),window.removeEventListener("test",Pl,Pl)}catch{Cc=!1}var Yn=null,zc=null,sr=null;function Sd(){if(sr)return sr;var e,t=zc,n=t.length,l,i="value"in Yn?Yn.value:Yn.textContent,c=i.length;for(e=0;e<n&&t[e]===i[e];e++);var h=n-e;for(l=1;l<=h&&t[n-l]===i[c-l];l++);return sr=i.slice(e,1<l?1-l:void 0)}function fr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function dr(){return!0}function wd(){return!1}function yt(e){function t(n,l,i,c,h){this._reactName=n,this._targetInst=i,this.type=l,this.nativeEvent=c,this.target=h,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(c):c[g]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?dr:wd,this.isPropagationStopped=wd,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dr)},persist:function(){},isPersistent:dr}),t}var ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hr=yt(ba),ei=w({},ba,{view:0,detail:0}),$2=yt(ei),Tc,Mc,ti,pr=w({},ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ti&&(ti&&e.type==="mousemove"?(Tc=e.screenX-ti.screenX,Mc=e.screenY-ti.screenY):Mc=Tc=0,ti=e),Tc)},movementY:function(e){return"movementY"in e?e.movementY:Mc}}),jd=yt(pr),D2=w({},pr,{dataTransfer:0}),B2=yt(D2),L2=w({},ei,{relatedTarget:0}),Ac=yt(L2),U2=w({},ba,{animationName:0,elapsedTime:0,pseudoElement:0}),H2=yt(U2),Y2=w({},ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),G2=yt(Y2),q2=w({},ba,{data:0}),Ed=yt(q2),X2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Q2[e])?!!t[e]:!1}function Rc(){return Z2}var K2=w({},ei,{key:function(e){if(e.key){var t=X2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?V2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rc,charCode:function(e){return e.type==="keypress"?fr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),J2=yt(K2),F2=w({},pr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cd=yt(F2),W2=w({},ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rc}),I2=yt(W2),P2=w({},ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),ex=yt(P2),tx=w({},pr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nx=yt(tx),ax=w({},ba,{newState:0,oldState:0}),lx=yt(ax),ix=[9,13,27,32],Oc=hn&&"CompositionEvent"in window,ni=null;hn&&"documentMode"in document&&(ni=document.documentMode);var rx=hn&&"TextEvent"in window&&!ni,zd=hn&&(!Oc||ni&&8<ni&&11>=ni),Td=" ",Md=!1;function Ad(e,t){switch(e){case"keyup":return ix.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wa=!1;function ox(e,t){switch(e){case"compositionend":return Rd(t);case"keypress":return t.which!==32?null:(Md=!0,Td);case"textInput":return e=t.data,e===Td&&Md?null:e;default:return null}}function cx(e,t){if(Wa)return e==="compositionend"||!Oc&&Ad(e,t)?(e=Sd(),sr=zc=Yn=null,Wa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zd&&t.locale!=="ko"?null:t.data;default:return null}}var ux={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Od(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ux[e.type]:t==="textarea"}function Nd(e,t,n,l){Ja?Fa?Fa.push(l):Fa=[l]:Ja=l,t=ao(t,"onChange"),0<t.length&&(n=new hr("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var ai=null,li=null;function sx(e){pp(e,0)}function mr(e){var t=Wl(e);if(hd(t))return e}function kd(e,t){if(e==="change")return t}var _d=!1;if(hn){var Nc;if(hn){var kc="oninput"in document;if(!kc){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),kc=typeof $d.oninput=="function"}Nc=kc}else Nc=!1;_d=Nc&&(!document.documentMode||9<document.documentMode)}function Dd(){ai&&(ai.detachEvent("onpropertychange",Bd),li=ai=null)}function Bd(e){if(e.propertyName==="value"&&mr(li)){var t=[];Nd(t,li,e,jc(e)),bd(sx,t)}}function fx(e,t,n){e==="focusin"?(Dd(),ai=t,li=n,ai.attachEvent("onpropertychange",Bd)):e==="focusout"&&Dd()}function dx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mr(li)}function hx(e,t){if(e==="click")return mr(t)}function px(e,t){if(e==="input"||e==="change")return mr(t)}function mx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:mx;function ii(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var i=n[l];if(!sc.call(t,i)||!Rt(e[i],t[i]))return!1}return!0}function Ld(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ud(e,t){var n=Ld(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ld(n)}}function Hd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=cr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=cr(e.document)}return t}function _c(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var gx=hn&&"documentMode"in document&&11>=document.documentMode,Ia=null,$c=null,ri=null,Dc=!1;function Gd(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dc||Ia==null||Ia!==cr(l)||(l=Ia,"selectionStart"in l&&_c(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ri&&ii(ri,l)||(ri=l,l=ao($c,"onSelect"),0<l.length&&(t=new hr("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Ia)))}function Sa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pa={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionrun:Sa("Transition","TransitionRun"),transitionstart:Sa("Transition","TransitionStart"),transitioncancel:Sa("Transition","TransitionCancel"),transitionend:Sa("Transition","TransitionEnd")},Bc={},qd={};hn&&(qd=document.createElement("div").style,"AnimationEvent"in window||(delete Pa.animationend.animation,delete Pa.animationiteration.animation,delete Pa.animationstart.animation),"TransitionEvent"in window||delete Pa.transitionend.transition);function wa(e){if(Bc[e])return Bc[e];if(!Pa[e])return e;var t=Pa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qd)return Bc[e]=t[n];return e}var Xd=wa("animationend"),Vd=wa("animationiteration"),Qd=wa("animationstart"),xx=wa("transitionrun"),yx=wa("transitionstart"),vx=wa("transitioncancel"),Zd=wa("transitionend"),Kd=new Map,Lc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lc.push("scrollEnd");function Wt(e,t){Kd.set(e,t),va(t,[e])}var gr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Yt=[],el=0,Uc=0;function xr(){for(var e=el,t=Uc=el=0;t<e;){var n=Yt[t];Yt[t++]=null;var l=Yt[t];Yt[t++]=null;var i=Yt[t];Yt[t++]=null;var c=Yt[t];if(Yt[t++]=null,l!==null&&i!==null){var h=l.pending;h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i}c!==0&&Jd(n,i,c)}}function yr(e,t,n,l){Yt[el++]=e,Yt[el++]=t,Yt[el++]=n,Yt[el++]=l,Uc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Hc(e,t,n,l){return yr(e,t,n,l),vr(e)}function ja(e,t){return yr(e,null,null,t),vr(e)}function Jd(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var i=!1,c=e.return;c!==null;)c.childLanes|=n,l=c.alternate,l!==null&&(l.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(i=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,i&&t!==null&&(i=31-At(n),e=c.hiddenUpdates,l=e[i],l===null?e[i]=[t]:l.push(t),t.lane=n|536870912),c):null}function vr(e){if(50<Mi)throw Mi=0,Ju=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var tl={};function bx(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,l){return new bx(e,t,n,l)}function Yc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pn(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Fd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function br(e,t,n,l,i,c){var h=0;if(l=e,typeof e=="function")Yc(e)&&(h=1);else if(typeof e=="string")h=Cy(e,n,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case I:return e=Ot(31,n,t,i),e.elementType=I,e.lanes=c,e;case D:return Ea(n.children,i,c,t);case _:h=8,i|=24;break;case L:return e=Ot(12,n,t,i|2),e.elementType=L,e.lanes=c,e;case Z:return e=Ot(13,n,t,i),e.elementType=Z,e.lanes=c,e;case U:return e=Ot(19,n,t,i),e.elementType=U,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:h=10;break e;case H:h=9;break e;case X:h=11;break e;case Q:h=14;break e;case ee:h=16,l=null;break e}h=29,n=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=Ot(h,n,t,i),t.elementType=e,t.type=l,t.lanes=c,t}function Ea(e,t,n,l){return e=Ot(7,e,l,t),e.lanes=n,e}function Gc(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function Wd(e){var t=Ot(18,null,null,0);return t.stateNode=e,t}function qc(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Id=new WeakMap;function Gt(e,t){if(typeof e=="object"&&e!==null){var n=Id.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Wf(t)},Id.set(e,t),t)}return{value:e,source:t,stack:Wf(t)}}var nl=[],al=0,Sr=null,oi=0,qt=[],Xt=0,Gn=null,nn=1,an="";function mn(e,t){nl[al++]=oi,nl[al++]=Sr,Sr=e,oi=t}function Pd(e,t,n){qt[Xt++]=nn,qt[Xt++]=an,qt[Xt++]=Gn,Gn=e;var l=nn;e=an;var i=32-At(l)-1;l&=~(1<<i),n+=1;var c=32-At(t)+i;if(30<c){var h=i-i%5;c=(l&(1<<h)-1).toString(32),l>>=h,i-=h,nn=1<<32-At(t)+i|n<<i|l,an=c+e}else nn=1<<c|n<<i|l,an=e}function Xc(e){e.return!==null&&(mn(e,1),Pd(e,1,0))}function Vc(e){for(;e===Sr;)Sr=nl[--al],nl[al]=null,oi=nl[--al],nl[al]=null;for(;e===Gn;)Gn=qt[--Xt],qt[Xt]=null,an=qt[--Xt],qt[Xt]=null,nn=qt[--Xt],qt[Xt]=null}function e0(e,t){qt[Xt++]=nn,qt[Xt++]=an,qt[Xt++]=Gn,nn=t.id,an=t.overflow,Gn=e}var ct=null,$e=null,ve=!1,qn=null,Vt=!1,Qc=Error(o(519));function Xn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ci(Gt(t,e)),Qc}function t0(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[ot]=e,t[xt]=l,n){case"dialog":ge("cancel",t),ge("close",t);break;case"iframe":case"object":case"embed":ge("load",t);break;case"video":case"audio":for(n=0;n<Ri.length;n++)ge(Ri[n],t);break;case"source":ge("error",t);break;case"img":case"image":case"link":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"input":ge("invalid",t),pd(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ge("invalid",t);break;case"textarea":ge("invalid",t),gd(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||yp(t.textContent,n)?(l.popover!=null&&(ge("beforetoggle",t),ge("toggle",t)),l.onScroll!=null&&ge("scroll",t),l.onScrollEnd!=null&&ge("scrollend",t),l.onClick!=null&&(t.onclick=dn),t=!0):t=!1,t||Xn(e,!0)}function n0(e){for(ct=e.return;ct;)switch(ct.tag){case 5:case 31:case 13:Vt=!1;return;case 27:case 3:Vt=!0;return;default:ct=ct.return}}function ll(e){if(e!==ct)return!1;if(!ve)return n0(e),ve=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ss(e.type,e.memoizedProps)),n=!n),n&&$e&&Xn(e),n0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));$e=Tp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));$e=Tp(e)}else t===27?(t=$e,la(e.type)?(e=ms,ms=null,$e=e):$e=t):$e=ct?Zt(e.stateNode.nextSibling):null;return!0}function Ca(){$e=ct=null,ve=!1}function Zc(){var e=qn;return e!==null&&(wt===null?wt=e:wt.push.apply(wt,e),qn=null),e}function ci(e){qn===null?qn=[e]:qn.push(e)}var Kc=E(null),za=null,gn=null;function Vn(e,t,n){F(Kc,t._currentValue),t._currentValue=n}function xn(e){e._currentValue=Kc.current,G(Kc)}function Jc(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Fc(e,t,n,l){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var c=i.dependencies;if(c!==null){var h=i.child;c=c.firstContext;e:for(;c!==null;){var g=c;c=i;for(var j=0;j<t.length;j++)if(g.context===t[j]){c.lanes|=n,g=c.alternate,g!==null&&(g.lanes|=n),Jc(c.return,n,e),l||(h=null);break e}c=g.next}}else if(i.tag===18){if(h=i.return,h===null)throw Error(o(341));h.lanes|=n,c=h.alternate,c!==null&&(c.lanes|=n),Jc(h,n,e),h=null}else h=i.child;if(h!==null)h.return=i;else for(h=i;h!==null;){if(h===e){h=null;break}if(i=h.sibling,i!==null){i.return=h.return,h=i;break}h=h.return}i=h}}function il(e,t,n,l){e=null;for(var i=t,c=!1;i!==null;){if(!c){if((i.flags&524288)!==0)c=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var h=i.alternate;if(h===null)throw Error(o(387));if(h=h.memoizedProps,h!==null){var g=i.type;Rt(i.pendingProps.value,h.value)||(e!==null?e.push(g):e=[g])}}else if(i===pe.current){if(h=i.alternate,h===null)throw Error(o(387));h.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push($i):e=[$i])}i=i.return}e!==null&&Fc(t,e,n,l),t.flags|=262144}function wr(e){for(e=e.firstContext;e!==null;){if(!Rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ta(e){za=e,gn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ut(e){return a0(za,e)}function jr(e,t){return za===null&&Ta(e),a0(e,t)}function a0(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},gn===null){if(e===null)throw Error(o(308));gn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else gn=gn.next=t;return n}var Sx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},wx=a.unstable_scheduleCallback,jx=a.unstable_NormalPriority,Ke={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wc(){return{controller:new Sx,data:new Map,refCount:0}}function ui(e){e.refCount--,e.refCount===0&&wx(jx,function(){e.controller.abort()})}var si=null,Ic=0,rl=0,ol=null;function Ex(e,t){if(si===null){var n=si=[];Ic=0,rl=ts(),ol={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Ic++,t.then(l0,l0),t}function l0(){if(--Ic===0&&si!==null){ol!==null&&(ol.status="fulfilled");var e=si;si=null,rl=0,ol=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Cx(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(l.status="rejected",l.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),l}var i0=B.S;B.S=function(e,t){Gh=Tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ex(e,t),i0!==null&&i0(e,t)};var Ma=E(null);function Pc(){var e=Ma.current;return e!==null?e:Ne.pooledCache}function Er(e,t){t===null?F(Ma,Ma.current):F(Ma,t.pool)}function r0(){var e=Pc();return e===null?null:{parent:Ke._currentValue,pool:e}}var cl=Error(o(460)),eu=Error(o(474)),Cr=Error(o(542)),zr={then:function(){}};function o0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function c0(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(dn,dn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,s0(e),e;default:if(typeof t.status=="string")t.then(dn,dn);else{if(e=Ne,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=l}},function(l){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,s0(e),e}throw Ra=t,cl}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ra=n,cl):n}}var Ra=null;function u0(){if(Ra===null)throw Error(o(459));var e=Ra;return Ra=null,e}function s0(e){if(e===cl||e===Cr)throw Error(o(483))}var ul=null,fi=0;function Tr(e){var t=fi;return fi+=1,ul===null&&(ul=[]),c0(ul,e,t)}function di(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Mr(e,t){throw t.$$typeof===z?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function f0(e){function t(T,C){if(e){var A=T.deletions;A===null?(T.deletions=[C],T.flags|=16):A.push(C)}}function n(T,C){if(!e)return null;for(;C!==null;)t(T,C),C=C.sibling;return null}function l(T){for(var C=new Map;T!==null;)T.key!==null?C.set(T.key,T):C.set(T.index,T),T=T.sibling;return C}function i(T,C){return T=pn(T,C),T.index=0,T.sibling=null,T}function c(T,C,A){return T.index=A,e?(A=T.alternate,A!==null?(A=A.index,A<C?(T.flags|=67108866,C):A):(T.flags|=67108866,C)):(T.flags|=1048576,C)}function h(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function g(T,C,A,q){return C===null||C.tag!==6?(C=Gc(A,T.mode,q),C.return=T,C):(C=i(C,A),C.return=T,C)}function j(T,C,A,q){var ie=A.type;return ie===D?Y(T,C,A.props.children,q,A.key):C!==null&&(C.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===ee&&Aa(ie)===C.type)?(C=i(C,A.props),di(C,A),C.return=T,C):(C=br(A.type,A.key,A.props,null,T.mode,q),di(C,A),C.return=T,C)}function R(T,C,A,q){return C===null||C.tag!==4||C.stateNode.containerInfo!==A.containerInfo||C.stateNode.implementation!==A.implementation?(C=qc(A,T.mode,q),C.return=T,C):(C=i(C,A.children||[]),C.return=T,C)}function Y(T,C,A,q,ie){return C===null||C.tag!==7?(C=Ea(A,T.mode,q,ie),C.return=T,C):(C=i(C,A),C.return=T,C)}function V(T,C,A){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=Gc(""+C,T.mode,A),C.return=T,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case N:return A=br(C.type,C.key,C.props,null,T.mode,A),di(A,C),A.return=T,A;case M:return C=qc(C,T.mode,A),C.return=T,C;case ee:return C=Aa(C),V(T,C,A)}if(Le(C)||Ge(C))return C=Ea(C,T.mode,A,null),C.return=T,C;if(typeof C.then=="function")return V(T,Tr(C),A);if(C.$$typeof===O)return V(T,jr(T,C),A);Mr(T,C)}return null}function k(T,C,A,q){var ie=C!==null?C.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return ie!==null?null:g(T,C,""+A,q);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case N:return A.key===ie?j(T,C,A,q):null;case M:return A.key===ie?R(T,C,A,q):null;case ee:return A=Aa(A),k(T,C,A,q)}if(Le(A)||Ge(A))return ie!==null?null:Y(T,C,A,q,null);if(typeof A.then=="function")return k(T,C,Tr(A),q);if(A.$$typeof===O)return k(T,C,jr(T,A),q);Mr(T,A)}return null}function $(T,C,A,q,ie){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return T=T.get(A)||null,g(C,T,""+q,ie);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case N:return T=T.get(q.key===null?A:q.key)||null,j(C,T,q,ie);case M:return T=T.get(q.key===null?A:q.key)||null,R(C,T,q,ie);case ee:return q=Aa(q),$(T,C,A,q,ie)}if(Le(q)||Ge(q))return T=T.get(A)||null,Y(C,T,q,ie,null);if(typeof q.then=="function")return $(T,C,A,Tr(q),ie);if(q.$$typeof===O)return $(T,C,A,jr(C,q),ie);Mr(C,q)}return null}function ne(T,C,A,q){for(var ie=null,we=null,ae=C,fe=C=0,ye=null;ae!==null&&fe<A.length;fe++){ae.index>fe?(ye=ae,ae=null):ye=ae.sibling;var je=k(T,ae,A[fe],q);if(je===null){ae===null&&(ae=ye);break}e&&ae&&je.alternate===null&&t(T,ae),C=c(je,C,fe),we===null?ie=je:we.sibling=je,we=je,ae=ye}if(fe===A.length)return n(T,ae),ve&&mn(T,fe),ie;if(ae===null){for(;fe<A.length;fe++)ae=V(T,A[fe],q),ae!==null&&(C=c(ae,C,fe),we===null?ie=ae:we.sibling=ae,we=ae);return ve&&mn(T,fe),ie}for(ae=l(ae);fe<A.length;fe++)ye=$(ae,T,fe,A[fe],q),ye!==null&&(e&&ye.alternate!==null&&ae.delete(ye.key===null?fe:ye.key),C=c(ye,C,fe),we===null?ie=ye:we.sibling=ye,we=ye);return e&&ae.forEach(function(ua){return t(T,ua)}),ve&&mn(T,fe),ie}function re(T,C,A,q){if(A==null)throw Error(o(151));for(var ie=null,we=null,ae=C,fe=C=0,ye=null,je=A.next();ae!==null&&!je.done;fe++,je=A.next()){ae.index>fe?(ye=ae,ae=null):ye=ae.sibling;var ua=k(T,ae,je.value,q);if(ua===null){ae===null&&(ae=ye);break}e&&ae&&ua.alternate===null&&t(T,ae),C=c(ua,C,fe),we===null?ie=ua:we.sibling=ua,we=ua,ae=ye}if(je.done)return n(T,ae),ve&&mn(T,fe),ie;if(ae===null){for(;!je.done;fe++,je=A.next())je=V(T,je.value,q),je!==null&&(C=c(je,C,fe),we===null?ie=je:we.sibling=je,we=je);return ve&&mn(T,fe),ie}for(ae=l(ae);!je.done;fe++,je=A.next())je=$(ae,T,fe,je.value,q),je!==null&&(e&&je.alternate!==null&&ae.delete(je.key===null?fe:je.key),C=c(je,C,fe),we===null?ie=je:we.sibling=je,we=je);return e&&ae.forEach(function(Dy){return t(T,Dy)}),ve&&mn(T,fe),ie}function Oe(T,C,A,q){if(typeof A=="object"&&A!==null&&A.type===D&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case N:e:{for(var ie=A.key;C!==null;){if(C.key===ie){if(ie=A.type,ie===D){if(C.tag===7){n(T,C.sibling),q=i(C,A.props.children),q.return=T,T=q;break e}}else if(C.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===ee&&Aa(ie)===C.type){n(T,C.sibling),q=i(C,A.props),di(q,A),q.return=T,T=q;break e}n(T,C);break}else t(T,C);C=C.sibling}A.type===D?(q=Ea(A.props.children,T.mode,q,A.key),q.return=T,T=q):(q=br(A.type,A.key,A.props,null,T.mode,q),di(q,A),q.return=T,T=q)}return h(T);case M:e:{for(ie=A.key;C!==null;){if(C.key===ie)if(C.tag===4&&C.stateNode.containerInfo===A.containerInfo&&C.stateNode.implementation===A.implementation){n(T,C.sibling),q=i(C,A.children||[]),q.return=T,T=q;break e}else{n(T,C);break}else t(T,C);C=C.sibling}q=qc(A,T.mode,q),q.return=T,T=q}return h(T);case ee:return A=Aa(A),Oe(T,C,A,q)}if(Le(A))return ne(T,C,A,q);if(Ge(A)){if(ie=Ge(A),typeof ie!="function")throw Error(o(150));return A=ie.call(A),re(T,C,A,q)}if(typeof A.then=="function")return Oe(T,C,Tr(A),q);if(A.$$typeof===O)return Oe(T,C,jr(T,A),q);Mr(T,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,C!==null&&C.tag===6?(n(T,C.sibling),q=i(C,A),q.return=T,T=q):(n(T,C),q=Gc(A,T.mode,q),q.return=T,T=q),h(T)):n(T,C)}return function(T,C,A,q){try{fi=0;var ie=Oe(T,C,A,q);return ul=null,ie}catch(ae){if(ae===cl||ae===Cr)throw ae;var we=Ot(29,ae,null,T.mode);return we.lanes=q,we.return=T,we}finally{}}}var Oa=f0(!0),d0=f0(!1),Qn=!1;function tu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Zn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Kn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ee&2)!==0){var i=l.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t,t=vr(e),Jd(e,null,n),t}return yr(e,l,t,n),vr(e)}function hi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,ad(e,n)}}function au(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var i=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?i=c=h:c=c.next=h,n=n.next}while(n!==null);c===null?i=c=t:c=c.next=t}else i=c=t;n={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var lu=!1;function pi(){if(lu){var e=ol;if(e!==null)throw e}}function mi(e,t,n,l){lu=!1;var i=e.updateQueue;Qn=!1;var c=i.firstBaseUpdate,h=i.lastBaseUpdate,g=i.shared.pending;if(g!==null){i.shared.pending=null;var j=g,R=j.next;j.next=null,h===null?c=R:h.next=R,h=j;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,g=Y.lastBaseUpdate,g!==h&&(g===null?Y.firstBaseUpdate=R:g.next=R,Y.lastBaseUpdate=j))}if(c!==null){var V=i.baseState;h=0,Y=R=j=null,g=c;do{var k=g.lane&-536870913,$=k!==g.lane;if($?(xe&k)===k:(l&k)===k){k!==0&&k===rl&&(lu=!0),Y!==null&&(Y=Y.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var ne=e,re=g;k=t;var Oe=n;switch(re.tag){case 1:if(ne=re.payload,typeof ne=="function"){V=ne.call(Oe,V,k);break e}V=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=re.payload,k=typeof ne=="function"?ne.call(Oe,V,k):ne,k==null)break e;V=w({},V,k);break e;case 2:Qn=!0}}k=g.callback,k!==null&&(e.flags|=64,$&&(e.flags|=8192),$=i.callbacks,$===null?i.callbacks=[k]:$.push(k))}else $={lane:k,tag:g.tag,payload:g.payload,callback:g.callback,next:null},Y===null?(R=Y=$,j=V):Y=Y.next=$,h|=k;if(g=g.next,g===null){if(g=i.shared.pending,g===null)break;$=g,g=$.next,$.next=null,i.lastBaseUpdate=$,i.shared.pending=null}}while(!0);Y===null&&(j=V),i.baseState=j,i.firstBaseUpdate=R,i.lastBaseUpdate=Y,c===null&&(i.shared.lanes=0),Pn|=h,e.lanes=h,e.memoizedState=V}}function h0(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function p0(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)h0(n[e],t)}var sl=E(null),Ar=E(0);function m0(e,t){e=zn,F(Ar,e),F(sl,t),zn=e|t.baseLanes}function iu(){F(Ar,zn),F(sl,sl.current)}function ru(){zn=Ar.current,G(sl),G(Ar)}var Nt=E(null),Qt=null;function Jn(e){var t=e.alternate;F(Qe,Qe.current&1),F(Nt,e),Qt===null&&(t===null||sl.current!==null||t.memoizedState!==null)&&(Qt=e)}function ou(e){F(Qe,Qe.current),F(Nt,e),Qt===null&&(Qt=e)}function g0(e){e.tag===22?(F(Qe,Qe.current),F(Nt,e),Qt===null&&(Qt=e)):Fn()}function Fn(){F(Qe,Qe.current),F(Nt,Nt.current)}function kt(e){G(Nt),Qt===e&&(Qt=null),G(Qe)}var Qe=E(0);function Rr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||hs(n)||ps(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yn=0,se=null,Ae=null,Je=null,Or=!1,fl=!1,Na=!1,Nr=0,gi=0,dl=null,zx=0;function qe(){throw Error(o(321))}function cu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function uu(e,t,n,l,i,c){return yn=c,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?P0:Eu,Na=!1,c=n(l,i),Na=!1,fl&&(c=y0(t,n,l,i)),x0(e),c}function x0(e){B.H=vi;var t=Ae!==null&&Ae.next!==null;if(yn=0,Je=Ae=se=null,Or=!1,gi=0,dl=null,t)throw Error(o(300));e===null||Fe||(e=e.dependencies,e!==null&&wr(e)&&(Fe=!0))}function y0(e,t,n,l){se=e;var i=0;do{if(fl&&(dl=null),gi=0,fl=!1,25<=i)throw Error(o(301));if(i+=1,Je=Ae=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}B.H=eh,c=t(n,l)}while(fl);return c}function Tx(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?xi(t):t,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(se.flags|=1024),t}function su(){var e=Nr!==0;return Nr=0,e}function fu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function du(e){if(Or){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Or=!1}yn=0,Je=Ae=se=null,fl=!1,gi=Nr=0,dl=null}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?se.memoizedState=Je=e:Je=Je.next=e,Je}function Ze(){if(Ae===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Je===null?se.memoizedState:Je.next;if(t!==null)Je=t,Ae=e;else{if(e===null)throw se.alternate===null?Error(o(467)):Error(o(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Je===null?se.memoizedState=Je=e:Je=Je.next=e}return Je}function kr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xi(e){var t=gi;return gi+=1,dl===null&&(dl=[]),e=c0(dl,e,t),t=se,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?P0:Eu),e}function _r(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xi(e);if(e.$$typeof===O)return ut(e)}throw Error(o(438,String(e)))}function hu(e){var t=null,n=se.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=se.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=kr(),se.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=oe;return t.index++,n}function vn(e,t){return typeof t=="function"?t(e):t}function $r(e){var t=Ze();return pu(t,Ae,e)}function pu(e,t,n){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=n;var i=e.baseQueue,c=l.pending;if(c!==null){if(i!==null){var h=i.next;i.next=c.next,c.next=h}t.baseQueue=i=c,l.pending=null}if(c=e.baseState,i===null)e.memoizedState=c;else{t=i.next;var g=h=null,j=null,R=t,Y=!1;do{var V=R.lane&-536870913;if(V!==R.lane?(xe&V)===V:(yn&V)===V){var k=R.revertLane;if(k===0)j!==null&&(j=j.next={lane:0,revertLane:0,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),V===rl&&(Y=!0);else if((yn&k)===k){R=R.next,k===rl&&(Y=!0);continue}else V={lane:0,revertLane:R.revertLane,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},j===null?(g=j=V,h=c):j=j.next=V,se.lanes|=k,Pn|=k;V=R.action,Na&&n(c,V),c=R.hasEagerState?R.eagerState:n(c,V)}else k={lane:V,revertLane:R.revertLane,gesture:R.gesture,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},j===null?(g=j=k,h=c):j=j.next=k,se.lanes|=V,Pn|=V;R=R.next}while(R!==null&&R!==t);if(j===null?h=c:j.next=g,!Rt(c,e.memoizedState)&&(Fe=!0,Y&&(n=ol,n!==null)))throw n;e.memoizedState=c,e.baseState=h,e.baseQueue=j,l.lastRenderedState=c}return i===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function mu(e){var t=Ze(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var l=n.dispatch,i=n.pending,c=t.memoizedState;if(i!==null){n.pending=null;var h=i=i.next;do c=e(c,h.action),h=h.next;while(h!==i);Rt(c,t.memoizedState)||(Fe=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,l]}function v0(e,t,n){var l=se,i=Ze(),c=ve;if(c){if(n===void 0)throw Error(o(407));n=n()}else n=t();var h=!Rt((Ae||i).memoizedState,n);if(h&&(i.memoizedState=n,Fe=!0),i=i.queue,yu(w0.bind(null,l,i,e),[e]),i.getSnapshot!==t||h||Je!==null&&Je.memoizedState.tag&1){if(l.flags|=2048,hl(9,{destroy:void 0},S0.bind(null,l,i,n,t),null),Ne===null)throw Error(o(349));c||(yn&127)!==0||b0(l,t,n)}return n}function b0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t=kr(),se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function S0(e,t,n,l){t.value=n,t.getSnapshot=l,j0(t)&&E0(e)}function w0(e,t,n){return n(function(){j0(t)&&E0(e)})}function j0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function E0(e){var t=ja(e,2);t!==null&&jt(t,e,2)}function gu(e){var t=gt();if(typeof e=="function"){var n=e;if(e=n(),Na){Un(!0);try{n()}finally{Un(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:e},t}function C0(e,t,n,l){return e.baseState=n,pu(e,Ae,typeof l=="function"?l:vn)}function Mx(e,t,n,l,i){if(Lr(e))throw Error(o(485));if(e=t.action,e!==null){var c={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){c.listeners.push(h)}};B.T!==null?n(!0):c.isTransition=!1,l(c),n=t.pending,n===null?(c.next=t.pending=c,z0(t,c)):(c.next=n.next,t.pending=n.next=c)}}function z0(e,t){var n=t.action,l=t.payload,i=e.state;if(t.isTransition){var c=B.T,h={};B.T=h;try{var g=n(i,l),j=B.S;j!==null&&j(h,g),T0(e,t,g)}catch(R){xu(e,t,R)}finally{c!==null&&h.types!==null&&(c.types=h.types),B.T=c}}else try{c=n(i,l),T0(e,t,c)}catch(R){xu(e,t,R)}}function T0(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){M0(e,t,l)},function(l){return xu(e,t,l)}):M0(e,t,n)}function M0(e,t,n){t.status="fulfilled",t.value=n,A0(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,z0(e,n)))}function xu(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,A0(t),t=t.next;while(t!==l)}e.action=null}function A0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function R0(e,t){return t}function O0(e,t){if(ve){var n=Ne.formState;if(n!==null){e:{var l=se;if(ve){if($e){t:{for(var i=$e,c=Vt;i.nodeType!==8;){if(!c){i=null;break t}if(i=Zt(i.nextSibling),i===null){i=null;break t}}c=i.data,i=c==="F!"||c==="F"?i:null}if(i){$e=Zt(i.nextSibling),l=i.data==="F!";break e}}Xn(l)}l=!1}l&&(t=n[0])}}return n=gt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:R0,lastRenderedState:t},n.queue=l,n=F0.bind(null,se,l),l.dispatch=n,l=gu(!1),c=ju.bind(null,se,!1,l.queue),l=gt(),i={state:t,dispatch:null,action:e,pending:null},l.queue=i,n=Mx.bind(null,se,i,c,n),i.dispatch=n,l.memoizedState=e,[t,n,!1]}function N0(e){var t=Ze();return k0(t,Ae,e)}function k0(e,t,n){if(t=pu(e,t,R0)[0],e=$r(vn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=xi(t)}catch(h){throw h===cl?Cr:h}else l=t;t=Ze();var i=t.queue,c=i.dispatch;return n!==t.memoizedState&&(se.flags|=2048,hl(9,{destroy:void 0},Ax.bind(null,i,n),null)),[l,c,e]}function Ax(e,t){e.action=t}function _0(e){var t=Ze(),n=Ae;if(n!==null)return k0(t,n,e);Ze(),t=t.memoizedState,n=Ze();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function hl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=se.updateQueue,t===null&&(t=kr(),se.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function $0(){return Ze().memoizedState}function Dr(e,t,n,l){var i=gt();se.flags|=e,i.memoizedState=hl(1|t,{destroy:void 0},n,l===void 0?null:l)}function Br(e,t,n,l){var i=Ze();l=l===void 0?null:l;var c=i.memoizedState.inst;Ae!==null&&l!==null&&cu(l,Ae.memoizedState.deps)?i.memoizedState=hl(t,c,n,l):(se.flags|=e,i.memoizedState=hl(1|t,c,n,l))}function D0(e,t){Dr(8390656,8,e,t)}function yu(e,t){Br(2048,8,e,t)}function Rx(e){se.flags|=4;var t=se.updateQueue;if(t===null)t=kr(),se.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function B0(e){var t=Ze().memoizedState;return Rx({ref:t,nextImpl:e}),function(){if((Ee&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function L0(e,t){return Br(4,2,e,t)}function U0(e,t){return Br(4,4,e,t)}function H0(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Y0(e,t,n){n=n!=null?n.concat([e]):null,Br(4,4,H0.bind(null,t,e),n)}function vu(){}function G0(e,t){var n=Ze();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&cu(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function q0(e,t){var n=Ze();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&cu(t,l[1]))return l[0];if(l=e(),Na){Un(!0);try{e()}finally{Un(!1)}}return n.memoizedState=[l,t],l}function bu(e,t,n){return n===void 0||(yn&1073741824)!==0&&(xe&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Xh(),se.lanes|=e,Pn|=e,n)}function X0(e,t,n,l){return Rt(n,t)?n:sl.current!==null?(e=bu(e,n,l),Rt(e,t)||(Fe=!0),e):(yn&42)===0||(yn&1073741824)!==0&&(xe&261930)===0?(Fe=!0,e.memoizedState=n):(e=Xh(),se.lanes|=e,Pn|=e,t)}function V0(e,t,n,l,i){var c=K.p;K.p=c!==0&&8>c?c:8;var h=B.T,g={};B.T=g,ju(e,!1,t,n);try{var j=i(),R=B.S;if(R!==null&&R(g,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var Y=Cx(j,l);yi(e,t,Y,Dt(e))}else yi(e,t,l,Dt(e))}catch(V){yi(e,t,{then:function(){},status:"rejected",reason:V},Dt())}finally{K.p=c,h!==null&&g.types!==null&&(h.types=g.types),B.T=h}}function Ox(){}function Su(e,t,n,l){if(e.tag!==5)throw Error(o(476));var i=Q0(e).queue;V0(e,i,t,P,n===null?Ox:function(){return Z0(e),n(l)})}function Q0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Z0(e){var t=Q0(e);t.next===null&&(t=e.alternate.memoizedState),yi(e,t.next.queue,{},Dt())}function wu(){return ut($i)}function K0(){return Ze().memoizedState}function J0(){return Ze().memoizedState}function Nx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Dt();e=Zn(n);var l=Kn(t,e,n);l!==null&&(jt(l,t,n),hi(l,t,n)),t={cache:Wc()},e.payload=t;return}t=t.return}}function kx(e,t,n){var l=Dt();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Lr(e)?W0(t,n):(n=Hc(e,t,n,l),n!==null&&(jt(n,e,l),I0(n,t,l)))}function F0(e,t,n){var l=Dt();yi(e,t,n,l)}function yi(e,t,n,l){var i={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lr(e))W0(t,i);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var h=t.lastRenderedState,g=c(h,n);if(i.hasEagerState=!0,i.eagerState=g,Rt(g,h))return yr(e,t,i,0),Ne===null&&xr(),!1}catch{}finally{}if(n=Hc(e,t,i,l),n!==null)return jt(n,e,l),I0(n,t,l),!0}return!1}function ju(e,t,n,l){if(l={lane:2,revertLane:ts(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Lr(e)){if(t)throw Error(o(479))}else t=Hc(e,n,l,2),t!==null&&jt(t,e,2)}function Lr(e){var t=e.alternate;return e===se||t!==null&&t===se}function W0(e,t){fl=Or=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function I0(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,ad(e,n)}}var vi={readContext:ut,use:_r,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe,useHostTransitionStatus:qe,useFormState:qe,useActionState:qe,useOptimistic:qe,useMemoCache:qe,useCacheRefresh:qe};vi.useEffectEvent=qe;var P0={readContext:ut,use:_r,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:D0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Dr(4194308,4,H0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Dr(4194308,4,e,t)},useInsertionEffect:function(e,t){Dr(4,2,e,t)},useMemo:function(e,t){var n=gt();t=t===void 0?null:t;var l=e();if(Na){Un(!0);try{e()}finally{Un(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=gt();if(n!==void 0){var i=n(t);if(Na){Un(!0);try{n(t)}finally{Un(!1)}}}else i=t;return l.memoizedState=l.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=kx.bind(null,se,e),[l.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:function(e){e=gu(e);var t=e.queue,n=F0.bind(null,se,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vu,useDeferredValue:function(e,t){var n=gt();return bu(n,e,t)},useTransition:function(){var e=gu(!1);return e=V0.bind(null,se,e.queue,!0,!1),gt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=se,i=gt();if(ve){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Ne===null)throw Error(o(349));(xe&127)!==0||b0(l,t,n)}i.memoizedState=n;var c={value:n,getSnapshot:t};return i.queue=c,D0(w0.bind(null,l,c,e),[e]),l.flags|=2048,hl(9,{destroy:void 0},S0.bind(null,l,c,n,t),null),n},useId:function(){var e=gt(),t=Ne.identifierPrefix;if(ve){var n=an,l=nn;n=(l&~(1<<32-At(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Nr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=zx++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:wu,useFormState:O0,useActionState:O0,useOptimistic:function(e){var t=gt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ju.bind(null,se,!0,n),n.dispatch=t,[e,t]},useMemoCache:hu,useCacheRefresh:function(){return gt().memoizedState=Nx.bind(null,se)},useEffectEvent:function(e){var t=gt(),n={impl:e};return t.memoizedState=n,function(){if((Ee&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Eu={readContext:ut,use:_r,useCallback:G0,useContext:ut,useEffect:yu,useImperativeHandle:Y0,useInsertionEffect:L0,useLayoutEffect:U0,useMemo:q0,useReducer:$r,useRef:$0,useState:function(){return $r(vn)},useDebugValue:vu,useDeferredValue:function(e,t){var n=Ze();return X0(n,Ae.memoizedState,e,t)},useTransition:function(){var e=$r(vn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:xi(e),t]},useSyncExternalStore:v0,useId:K0,useHostTransitionStatus:wu,useFormState:N0,useActionState:N0,useOptimistic:function(e,t){var n=Ze();return C0(n,Ae,e,t)},useMemoCache:hu,useCacheRefresh:J0};Eu.useEffectEvent=B0;var eh={readContext:ut,use:_r,useCallback:G0,useContext:ut,useEffect:yu,useImperativeHandle:Y0,useInsertionEffect:L0,useLayoutEffect:U0,useMemo:q0,useReducer:mu,useRef:$0,useState:function(){return mu(vn)},useDebugValue:vu,useDeferredValue:function(e,t){var n=Ze();return Ae===null?bu(n,e,t):X0(n,Ae.memoizedState,e,t)},useTransition:function(){var e=mu(vn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:xi(e),t]},useSyncExternalStore:v0,useId:K0,useHostTransitionStatus:wu,useFormState:_0,useActionState:_0,useOptimistic:function(e,t){var n=Ze();return Ae!==null?C0(n,Ae,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:hu,useCacheRefresh:J0};eh.useEffectEvent=B0;function Cu(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zu={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Dt(),i=Zn(l);i.payload=t,n!=null&&(i.callback=n),t=Kn(e,i,l),t!==null&&(jt(t,e,l),hi(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Dt(),i=Zn(l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Kn(e,i,l),t!==null&&(jt(t,e,l),hi(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Dt(),l=Zn(n);l.tag=2,t!=null&&(l.callback=t),t=Kn(e,l,n),t!==null&&(jt(t,e,n),hi(t,e,n))}};function th(e,t,n,l,i,c,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,h):t.prototype&&t.prototype.isPureReactComponent?!ii(n,l)||!ii(i,c):!0}function nh(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&zu.enqueueReplaceState(t,t.state,null)}function ka(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}function ah(e){gr(e)}function lh(e){console.error(e)}function ih(e){gr(e)}function Ur(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function rh(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Tu(e,t,n){return n=Zn(n),n.tag=3,n.payload={element:null},n.callback=function(){Ur(e,t)},n}function oh(e){return e=Zn(e),e.tag=3,e}function ch(e,t,n,l){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var c=l.value;e.payload=function(){return i(c)},e.callback=function(){rh(t,n,l)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){rh(t,n,l),typeof i!="function"&&(ea===null?ea=new Set([this]):ea.add(this));var g=l.stack;this.componentDidCatch(l.value,{componentStack:g!==null?g:""})})}function _x(e,t,n,l,i){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&il(t,n,i,!0),n=Nt.current,n!==null){switch(n.tag){case 31:case 13:return Qt===null?Wr():n.alternate===null&&Xe===0&&(Xe=3),n.flags&=-257,n.flags|=65536,n.lanes=i,l===zr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),Iu(e,l,i)),!1;case 22:return n.flags|=65536,l===zr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),Iu(e,l,i)),!1}throw Error(o(435,n.tag))}return Iu(e,l,i),Wr(),!1}if(ve)return t=Nt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,l!==Qc&&(e=Error(o(422),{cause:l}),ci(Gt(e,n)))):(l!==Qc&&(t=Error(o(423),{cause:l}),ci(Gt(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,l=Gt(l,n),i=Tu(e.stateNode,l,i),au(e,i),Xe!==4&&(Xe=2)),!1;var c=Error(o(520),{cause:l});if(c=Gt(c,n),Ti===null?Ti=[c]:Ti.push(c),Xe!==4&&(Xe=2),t===null)return!0;l=Gt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Tu(n.stateNode,l,e),au(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ea===null||!ea.has(c))))return n.flags|=65536,i&=-i,n.lanes|=i,i=oh(i),ch(i,e,n,l),au(n,i),!1}n=n.return}while(n!==null);return!1}var Mu=Error(o(461)),Fe=!1;function st(e,t,n,l){t.child=e===null?d0(t,null,n,l):Oa(t,e.child,n,l)}function uh(e,t,n,l,i){n=n.render;var c=t.ref;if("ref"in l){var h={};for(var g in l)g!=="ref"&&(h[g]=l[g])}else h=l;return Ta(t),l=uu(e,t,n,h,c,i),g=su(),e!==null&&!Fe?(fu(e,t,i),bn(e,t,i)):(ve&&g&&Xc(t),t.flags|=1,st(e,t,l,i),t.child)}function sh(e,t,n,l,i){if(e===null){var c=n.type;return typeof c=="function"&&!Yc(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,fh(e,t,c,l,i)):(e=br(n.type,null,l,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Du(e,i)){var h=c.memoizedProps;if(n=n.compare,n=n!==null?n:ii,n(h,l)&&e.ref===t.ref)return bn(e,t,i)}return t.flags|=1,e=pn(c,l),e.ref=t.ref,e.return=t,t.child=e}function fh(e,t,n,l,i){if(e!==null){var c=e.memoizedProps;if(ii(c,l)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=l=c,Du(e,i))(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,bn(e,t,i)}return Au(e,t,n,l,i)}function dh(e,t,n,l){var i=l.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(l=t.child=e.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~c}else l=0,t.child=null;return hh(e,t,c,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Er(t,c!==null?c.cachePool:null),c!==null?m0(t,c):iu(),g0(t);else return l=t.lanes=536870912,hh(e,t,c!==null?c.baseLanes|n:n,n,l)}else c!==null?(Er(t,c.cachePool),m0(t,c),Fn(),t.memoizedState=null):(e!==null&&Er(t,null),iu(),Fn());return st(e,t,i,n),t.child}function bi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function hh(e,t,n,l,i){var c=Pc();return c=c===null?null:{parent:Ke._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&Er(t,null),iu(),g0(t),e!==null&&il(e,t,l,!0),t.childLanes=i,null}function Hr(e,t){return t=Gr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ph(e,t,n){return Oa(t,e.child,null,n),e=Hr(t,t.pendingProps),e.flags|=2,kt(t),t.memoizedState=null,e}function $x(e,t,n){var l=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ve){if(l.mode==="hidden")return e=Hr(t,l),t.lanes=536870912,bi(null,e);if(ou(t),(e=$e)?(e=zp(e,Vt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gn!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=Wd(e),n.return=t,t.child=n,ct=t,$e=null)):e=null,e===null)throw Xn(t);return t.lanes=536870912,null}return Hr(t,l)}var c=e.memoizedState;if(c!==null){var h=c.dehydrated;if(ou(t),i)if(t.flags&256)t.flags&=-257,t=ph(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Fe||il(e,t,n,!1),i=(n&e.childLanes)!==0,Fe||i){if(l=Ne,l!==null&&(h=ld(l,n),h!==0&&h!==c.retryLane))throw c.retryLane=h,ja(e,h),jt(l,e,h),Mu;Wr(),t=ph(e,t,n)}else e=c.treeContext,$e=Zt(h.nextSibling),ct=t,ve=!0,qn=null,Vt=!1,e!==null&&e0(t,e),t=Hr(t,l),t.flags|=4096;return t}return e=pn(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Yr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Au(e,t,n,l,i){return Ta(t),n=uu(e,t,n,l,void 0,i),l=su(),e!==null&&!Fe?(fu(e,t,i),bn(e,t,i)):(ve&&l&&Xc(t),t.flags|=1,st(e,t,n,i),t.child)}function mh(e,t,n,l,i,c){return Ta(t),t.updateQueue=null,n=y0(t,l,n,i),x0(e),l=su(),e!==null&&!Fe?(fu(e,t,c),bn(e,t,c)):(ve&&l&&Xc(t),t.flags|=1,st(e,t,n,c),t.child)}function gh(e,t,n,l,i){if(Ta(t),t.stateNode===null){var c=tl,h=n.contextType;typeof h=="object"&&h!==null&&(c=ut(h)),c=new n(l,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=zu,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=l,c.state=t.memoizedState,c.refs={},tu(t),h=n.contextType,c.context=typeof h=="object"&&h!==null?ut(h):tl,c.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(Cu(t,n,h,l),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(h=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),h!==c.state&&zu.enqueueReplaceState(c,c.state,null),mi(t,l,c,i),pi(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){c=t.stateNode;var g=t.memoizedProps,j=ka(n,g);c.props=j;var R=c.context,Y=n.contextType;h=tl,typeof Y=="object"&&Y!==null&&(h=ut(Y));var V=n.getDerivedStateFromProps;Y=typeof V=="function"||typeof c.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,Y||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g||R!==h)&&nh(t,c,l,h),Qn=!1;var k=t.memoizedState;c.state=k,mi(t,l,c,i),pi(),R=t.memoizedState,g||k!==R||Qn?(typeof V=="function"&&(Cu(t,n,V,l),R=t.memoizedState),(j=Qn||th(t,n,j,l,k,R,h))?(Y||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=R),c.props=l,c.state=R,c.context=h,l=j):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{c=t.stateNode,nu(e,t),h=t.memoizedProps,Y=ka(n,h),c.props=Y,V=t.pendingProps,k=c.context,R=n.contextType,j=tl,typeof R=="object"&&R!==null&&(j=ut(R)),g=n.getDerivedStateFromProps,(R=typeof g=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h!==V||k!==j)&&nh(t,c,l,j),Qn=!1,k=t.memoizedState,c.state=k,mi(t,l,c,i),pi();var $=t.memoizedState;h!==V||k!==$||Qn||e!==null&&e.dependencies!==null&&wr(e.dependencies)?(typeof g=="function"&&(Cu(t,n,g,l),$=t.memoizedState),(Y=Qn||th(t,n,Y,l,k,$,j)||e!==null&&e.dependencies!==null&&wr(e.dependencies))?(R||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,$,j),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,$,j)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=$),c.props=l,c.state=$,c.context=j,l=Y):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),l=!1)}return c=l,Yr(e,t),l=(t.flags&128)!==0,c||l?(c=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&l?(t.child=Oa(t,e.child,null,i),t.child=Oa(t,null,n,i)):st(e,t,n,i),t.memoizedState=c.state,e=t.child):e=bn(e,t,i),e}function xh(e,t,n,l){return Ca(),t.flags|=256,st(e,t,n,l),t.child}var Ru={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ou(e){return{baseLanes:e,cachePool:r0()}}function Nu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=$t),e}function yh(e,t,n){var l=t.pendingProps,i=!1,c=(t.flags&128)!==0,h;if((h=c)||(h=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),h&&(i=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(ve){if(i?Jn(t):Fn(),(e=$e)?(e=zp(e,Vt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gn!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=Wd(e),n.return=t,t.child=n,ct=t,$e=null)):e=null,e===null)throw Xn(t);return ps(e)?t.lanes=32:t.lanes=536870912,null}var g=l.children;return l=l.fallback,i?(Fn(),i=t.mode,g=Gr({mode:"hidden",children:g},i),l=Ea(l,i,n,null),g.return=t,l.return=t,g.sibling=l,t.child=g,l=t.child,l.memoizedState=Ou(n),l.childLanes=Nu(e,h,n),t.memoizedState=Ru,bi(null,l)):(Jn(t),ku(t,g))}var j=e.memoizedState;if(j!==null&&(g=j.dehydrated,g!==null)){if(c)t.flags&256?(Jn(t),t.flags&=-257,t=_u(e,t,n)):t.memoizedState!==null?(Fn(),t.child=e.child,t.flags|=128,t=null):(Fn(),g=l.fallback,i=t.mode,l=Gr({mode:"visible",children:l.children},i),g=Ea(g,i,n,null),g.flags|=2,l.return=t,g.return=t,l.sibling=g,t.child=l,Oa(t,e.child,null,n),l=t.child,l.memoizedState=Ou(n),l.childLanes=Nu(e,h,n),t.memoizedState=Ru,t=bi(null,l));else if(Jn(t),ps(g)){if(h=g.nextSibling&&g.nextSibling.dataset,h)var R=h.dgst;h=R,l=Error(o(419)),l.stack="",l.digest=h,ci({value:l,source:null,stack:null}),t=_u(e,t,n)}else if(Fe||il(e,t,n,!1),h=(n&e.childLanes)!==0,Fe||h){if(h=Ne,h!==null&&(l=ld(h,n),l!==0&&l!==j.retryLane))throw j.retryLane=l,ja(e,l),jt(h,e,l),Mu;hs(g)||Wr(),t=_u(e,t,n)}else hs(g)?(t.flags|=192,t.child=e.child,t=null):(e=j.treeContext,$e=Zt(g.nextSibling),ct=t,ve=!0,qn=null,Vt=!1,e!==null&&e0(t,e),t=ku(t,l.children),t.flags|=4096);return t}return i?(Fn(),g=l.fallback,i=t.mode,j=e.child,R=j.sibling,l=pn(j,{mode:"hidden",children:l.children}),l.subtreeFlags=j.subtreeFlags&65011712,R!==null?g=pn(R,g):(g=Ea(g,i,n,null),g.flags|=2),g.return=t,l.return=t,l.sibling=g,t.child=l,bi(null,l),l=t.child,g=e.child.memoizedState,g===null?g=Ou(n):(i=g.cachePool,i!==null?(j=Ke._currentValue,i=i.parent!==j?{parent:j,pool:j}:i):i=r0(),g={baseLanes:g.baseLanes|n,cachePool:i}),l.memoizedState=g,l.childLanes=Nu(e,h,n),t.memoizedState=Ru,bi(e.child,l)):(Jn(t),n=e.child,e=n.sibling,n=pn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=n,t.memoizedState=null,n)}function ku(e,t){return t=Gr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Gr(e,t){return e=Ot(22,e,null,t),e.lanes=0,e}function _u(e,t,n){return Oa(t,e.child,null,n),e=ku(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vh(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Jc(e.return,t,n)}function $u(e,t,n,l,i,c){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:i,treeForkCount:c}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=n,h.tailMode=i,h.treeForkCount=c)}function bh(e,t,n){var l=t.pendingProps,i=l.revealOrder,c=l.tail;l=l.children;var h=Qe.current,g=(h&2)!==0;if(g?(h=h&1|2,t.flags|=128):h&=1,F(Qe,h),st(e,t,l,n),l=ve?oi:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vh(e,n,t);else if(e.tag===19)vh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Rr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),$u(t,!1,i,n,c,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Rr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}$u(t,!0,n,null,c,l);break;case"together":$u(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(il(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Du(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&wr(e)))}function Dx(e,t,n){switch(t.tag){case 3:He(t,t.stateNode.containerInfo),Vn(t,Ke,e.memoizedState.cache),Ca();break;case 27:case 5:zt(t);break;case 4:He(t,t.stateNode.containerInfo);break;case 10:Vn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ou(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Jn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?yh(e,t,n):(Jn(t),e=bn(e,t,n),e!==null?e.sibling:null);Jn(t);break;case 19:var i=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(il(e,t,n,!1),l=(n&t.childLanes)!==0),i){if(l)return bh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(Qe,Qe.current),l)break;return null;case 22:return t.lanes=0,dh(e,t,n,t.pendingProps);case 24:Vn(t,Ke,e.memoizedState.cache)}return bn(e,t,n)}function Sh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Fe=!0;else{if(!Du(e,n)&&(t.flags&128)===0)return Fe=!1,Dx(e,t,n);Fe=(e.flags&131072)!==0}else Fe=!1,ve&&(t.flags&1048576)!==0&&Pd(t,oi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e=="function")Yc(e)?(l=ka(e,l),t.tag=1,t=gh(null,t,e,l,n)):(t.tag=0,t=Au(null,t,e,l,n));else{if(e!=null){var i=e.$$typeof;if(i===X){t.tag=11,t=uh(null,t,e,l,n);break e}else if(i===Q){t.tag=14,t=sh(null,t,e,l,n);break e}}throw t=nt(e)||e,Error(o(306,t,""))}}return t;case 0:return Au(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,i=ka(l,t.pendingProps),gh(e,t,l,i,n);case 3:e:{if(He(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var c=t.memoizedState;i=c.element,nu(e,t),mi(t,l,null,n);var h=t.memoizedState;if(l=h.cache,Vn(t,Ke,l),l!==c.cache&&Fc(t,[Ke],n,!0),pi(),l=h.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=xh(e,t,l,n);break e}else if(l!==i){i=Gt(Error(o(424)),t),ci(i),t=xh(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=Zt(e.firstChild),ct=t,ve=!0,qn=null,Vt=!0,n=d0(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ca(),l===i){t=bn(e,t,n);break e}st(e,t,l,n)}t=t.child}return t;case 26:return Yr(e,t),e===null?(n=Np(t.type,null,t.pendingProps,null))?t.memoizedState=n:ve||(n=t.type,e=t.pendingProps,l=lo(ce.current).createElement(n),l[ot]=t,l[xt]=e,ft(l,n,e),at(l),t.stateNode=l):t.memoizedState=Np(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return zt(t),e===null&&ve&&(l=t.stateNode=Ap(t.type,t.pendingProps,ce.current),ct=t,Vt=!0,i=$e,la(t.type)?(ms=i,$e=Zt(l.firstChild)):$e=i),st(e,t,t.pendingProps.children,n),Yr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ve&&((i=l=$e)&&(l=dy(l,t.type,t.pendingProps,Vt),l!==null?(t.stateNode=l,ct=t,$e=Zt(l.firstChild),Vt=!1,i=!0):i=!1),i||Xn(t)),zt(t),i=t.type,c=t.pendingProps,h=e!==null?e.memoizedProps:null,l=c.children,ss(i,c)?l=null:h!==null&&ss(i,h)&&(t.flags|=32),t.memoizedState!==null&&(i=uu(e,t,Tx,null,null,n),$i._currentValue=i),Yr(e,t),st(e,t,l,n),t.child;case 6:return e===null&&ve&&((e=n=$e)&&(n=hy(n,t.pendingProps,Vt),n!==null?(t.stateNode=n,ct=t,$e=null,e=!0):e=!1),e||Xn(t)),null;case 13:return yh(e,t,n);case 4:return He(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Oa(t,null,l,n):st(e,t,l,n),t.child;case 11:return uh(e,t,t.type,t.pendingProps,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,Vn(t,t.type,l.value),st(e,t,l.children,n),t.child;case 9:return i=t.type._context,l=t.pendingProps.children,Ta(t),i=ut(i),l=l(i),t.flags|=1,st(e,t,l,n),t.child;case 14:return sh(e,t,t.type,t.pendingProps,n);case 15:return fh(e,t,t.type,t.pendingProps,n);case 19:return bh(e,t,n);case 31:return $x(e,t,n);case 22:return dh(e,t,n,t.pendingProps);case 24:return Ta(t),l=ut(Ke),e===null?(i=Pc(),i===null&&(i=Ne,c=Wc(),i.pooledCache=c,c.refCount++,c!==null&&(i.pooledCacheLanes|=n),i=c),t.memoizedState={parent:l,cache:i},tu(t),Vn(t,Ke,i)):((e.lanes&n)!==0&&(nu(e,t),mi(t,null,null,n),pi()),i=e.memoizedState,c=t.memoizedState,i.parent!==l?(i={parent:l,cache:l},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Vn(t,Ke,l)):(l=c.cache,Vn(t,Ke,l),l!==i.cache&&Fc(t,[Ke],n,!0))),st(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Sn(e){e.flags|=4}function Bu(e,t,n,l,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Kh())e.flags|=8192;else throw Ra=zr,eu}else e.flags&=-16777217}function wh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Bp(t))if(Kh())e.flags|=8192;else throw Ra=zr,eu}function qr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?td():536870912,e.lanes|=t,xl|=t)}function Si(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function Bx(e,t,n){var l=t.pendingProps;switch(Vc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),xn(Ke),Se(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ll(t)?Sn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Zc())),De(t),null;case 26:var i=t.type,c=t.memoizedState;return e===null?(Sn(t),c!==null?(De(t),wh(t,c)):(De(t),Bu(t,i,null,l,n))):c?c!==e.memoizedState?(Sn(t),De(t),wh(t,c)):(De(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Sn(t),De(t),Bu(t,i,e,l,n)),null;case 27:if(Ft(t),n=ce.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Sn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return De(t),null}e=W.current,ll(t)?t0(t):(e=Ap(i,l,n),t.stateNode=e,Sn(t))}return De(t),null;case 5:if(Ft(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Sn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return De(t),null}if(c=W.current,ll(t))t0(t);else{var h=lo(ce.current);switch(c){case 1:c=h.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:c=h.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":c=h.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":c=h.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":c=h.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?c.multiple=!0:l.size&&(c.size=l.size);break;default:c=typeof l.is=="string"?h.createElement(i,{is:l.is}):h.createElement(i)}}c[ot]=t,c[xt]=l;e:for(h=t.child;h!==null;){if(h.tag===5||h.tag===6)c.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}t.stateNode=c;e:switch(ft(c,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Sn(t)}}return De(t),Bu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Sn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=ce.current,ll(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,i=ct,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}e[ot]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||yp(e.nodeValue,n)),e||Xn(t,!0)}else e=lo(e).createTextNode(l),e[ot]=t,t.stateNode=e}return De(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=ll(t),n!==null){if(e===null){if(!l)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[ot]=t}else Ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),e=!1}else n=Zc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(kt(t),t):(kt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return De(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=ll(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(o(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[ot]=t}else Ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),i=!1}else i=Zc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(kt(t),t):(kt(t),null)}return kt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),c=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==i&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),qr(t,t.updateQueue),De(t),null);case 4:return Se(),e===null&&is(t.stateNode.containerInfo),De(t),null;case 10:return xn(t.type),De(t),null;case 19:if(G(Qe),l=t.memoizedState,l===null)return De(t),null;if(i=(t.flags&128)!==0,c=l.rendering,c===null)if(i)Si(l,!1);else{if(Xe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Rr(e),c!==null){for(t.flags|=128,Si(l,!1),e=c.updateQueue,t.updateQueue=e,qr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Fd(n,e),n=n.sibling;return F(Qe,Qe.current&1|2),ve&&mn(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Tt()>Kr&&(t.flags|=128,i=!0,Si(l,!1),t.lanes=4194304)}else{if(!i)if(e=Rr(c),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,qr(t,e),Si(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!ve)return De(t),null}else 2*Tt()-l.renderingStartTime>Kr&&n!==536870912&&(t.flags|=128,i=!0,Si(l,!1),t.lanes=4194304);l.isBackwards?(c.sibling=t.child,t.child=c):(e=l.last,e!==null?e.sibling=c:t.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Tt(),e.sibling=null,n=Qe.current,F(Qe,i?n&1|2:n&1),ve&&mn(t,l.treeForkCount),e):(De(t),null);case 22:case 23:return kt(t),ru(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),n=t.updateQueue,n!==null&&qr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&G(Ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xn(Ke),De(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Lx(e,t){switch(Vc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(Ke),Se(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ft(t),null;case 31:if(t.memoizedState!==null){if(kt(t),t.alternate===null)throw Error(o(340));Ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(kt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Qe),null;case 4:return Se(),null;case 10:return xn(t.type),null;case 22:case 23:return kt(t),ru(),e!==null&&G(Ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xn(Ke),null;case 25:return null;default:return null}}function jh(e,t){switch(Vc(t),t.tag){case 3:xn(Ke),Se();break;case 26:case 27:case 5:Ft(t);break;case 4:Se();break;case 31:t.memoizedState!==null&&kt(t);break;case 13:kt(t);break;case 19:G(Qe);break;case 10:xn(t.type);break;case 22:case 23:kt(t),ru(),e!==null&&G(Ma);break;case 24:xn(Ke)}}function wi(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&e)===e){l=void 0;var c=n.create,h=n.inst;l=c(),h.destroy=l}n=n.next}while(n!==i)}}catch(g){Me(t,t.return,g)}}function Wn(e,t,n){try{var l=t.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var c=i.next;l=c;do{if((l.tag&e)===e){var h=l.inst,g=h.destroy;if(g!==void 0){h.destroy=void 0,i=t;var j=n,R=g;try{R()}catch(Y){Me(i,j,Y)}}}l=l.next}while(l!==c)}}catch(Y){Me(t,t.return,Y)}}function Eh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{p0(t,n)}catch(l){Me(e,e.return,l)}}}function Ch(e,t,n){n.props=ka(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Me(e,t,l)}}function ji(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(i){Me(e,t,i)}}function ln(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(i){Me(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){Me(e,t,i)}else n.current=null}function zh(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(i){Me(e,e.return,i)}}function Lu(e,t,n){try{var l=e.stateNode;ry(l,e.type,n,t),l[xt]=t}catch(i){Me(e,e.return,i)}}function Th(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&la(e.type)||e.tag===4}function Uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Th(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&la(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hu(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dn));else if(l!==4&&(l===27&&la(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Hu(e,t,n),e=e.sibling;e!==null;)Hu(e,t,n),e=e.sibling}function Xr(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&la(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Xr(e,t,n),e=e.sibling;e!==null;)Xr(e,t,n),e=e.sibling}function Mh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ft(t,l,n),t[ot]=e,t[xt]=n}catch(c){Me(e,e.return,c)}}var wn=!1,We=!1,Yu=!1,Ah=typeof WeakSet=="function"?WeakSet:Set,lt=null;function Ux(e,t){if(e=e.containerInfo,cs=fo,e=Yd(e),_c(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var i=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var h=0,g=-1,j=-1,R=0,Y=0,V=e,k=null;t:for(;;){for(var $;V!==n||i!==0&&V.nodeType!==3||(g=h+i),V!==c||l!==0&&V.nodeType!==3||(j=h+l),V.nodeType===3&&(h+=V.nodeValue.length),($=V.firstChild)!==null;)k=V,V=$;for(;;){if(V===e)break t;if(k===n&&++R===i&&(g=h),k===c&&++Y===l&&(j=h),($=V.nextSibling)!==null)break;V=k,k=V.parentNode}V=$}n=g===-1||j===-1?null:{start:g,end:j}}else n=null}n=n||{start:0,end:0}}else n=null;for(us={focusedElem:e,selectionRange:n},fo=!1,lt=t;lt!==null;)if(t=lt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,lt=e;else for(;lt!==null;){switch(t=lt,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,i=c.memoizedProps,c=c.memoizedState,l=n.stateNode;try{var ne=ka(n.type,i);e=l.getSnapshotBeforeUpdate(ne,c),l.__reactInternalSnapshotBeforeUpdate=e}catch(re){Me(n,n.return,re)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ds(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ds(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,lt=e;break}lt=t.return}}function Rh(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:En(e,n),l&4&&wi(5,n);break;case 1:if(En(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(h){Me(n,n.return,h)}else{var i=ka(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){Me(n,n.return,h)}}l&64&&Eh(n),l&512&&ji(n,n.return);break;case 3:if(En(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{p0(e,t)}catch(h){Me(n,n.return,h)}}break;case 27:t===null&&l&4&&Mh(n);case 26:case 5:En(e,n),t===null&&l&4&&zh(n),l&512&&ji(n,n.return);break;case 12:En(e,n);break;case 31:En(e,n),l&4&&kh(e,n);break;case 13:En(e,n),l&4&&_h(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Kx.bind(null,n),py(e,n))));break;case 22:if(l=n.memoizedState!==null||wn,!l){t=t!==null&&t.memoizedState!==null||We,i=wn;var c=We;wn=l,(We=t)&&!c?Cn(e,n,(n.subtreeFlags&8772)!==0):En(e,n),wn=i,We=c}break;case 30:break;default:En(e,n)}}function Oh(e){var t=e.alternate;t!==null&&(e.alternate=null,Oh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,vt=!1;function jn(e,t,n){for(n=n.child;n!==null;)Nh(e,t,n),n=n.sibling}function Nh(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Zl,n)}catch{}switch(n.tag){case 26:We||ln(n,t),jn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:We||ln(n,t);var l=Ue,i=vt;la(n.type)&&(Ue=n.stateNode,vt=!1),jn(e,t,n),Ni(n.stateNode),Ue=l,vt=i;break;case 5:We||ln(n,t);case 6:if(l=Ue,i=vt,Ue=null,jn(e,t,n),Ue=l,vt=i,Ue!==null)if(vt)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(n.stateNode)}catch(c){Me(n,t,c)}else try{Ue.removeChild(n.stateNode)}catch(c){Me(n,t,c)}break;case 18:Ue!==null&&(vt?(e=Ue,Ep(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Cl(e)):Ep(Ue,n.stateNode));break;case 4:l=Ue,i=vt,Ue=n.stateNode.containerInfo,vt=!0,jn(e,t,n),Ue=l,vt=i;break;case 0:case 11:case 14:case 15:Wn(2,n,t),We||Wn(4,n,t),jn(e,t,n);break;case 1:We||(ln(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Ch(n,t,l)),jn(e,t,n);break;case 21:jn(e,t,n);break;case 22:We=(l=We)||n.memoizedState!==null,jn(e,t,n),We=l;break;default:jn(e,t,n)}}function kh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Cl(e)}catch(n){Me(t,t.return,n)}}}function _h(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cl(e)}catch(n){Me(t,t.return,n)}}function Hx(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ah),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ah),t;default:throw Error(o(435,e.tag))}}function Vr(e,t){var n=Hx(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var i=Jx.bind(null,e,l);l.then(i,i)}})}function bt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var i=n[l],c=e,h=t,g=h;e:for(;g!==null;){switch(g.tag){case 27:if(la(g.type)){Ue=g.stateNode,vt=!1;break e}break;case 5:Ue=g.stateNode,vt=!1;break e;case 3:case 4:Ue=g.stateNode.containerInfo,vt=!0;break e}g=g.return}if(Ue===null)throw Error(o(160));Nh(c,h,i),Ue=null,vt=!1,c=i.alternate,c!==null&&(c.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)$h(t,e),t=t.sibling}var It=null;function $h(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bt(t,e),St(e),l&4&&(Wn(3,e,e.return),wi(3,e),Wn(5,e,e.return));break;case 1:bt(t,e),St(e),l&512&&(We||n===null||ln(n,n.return)),l&64&&wn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var i=It;if(bt(t,e),St(e),l&512&&(We||n===null||ln(n,n.return)),l&4){var c=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(l){case"title":c=i.getElementsByTagName("title")[0],(!c||c[Fl]||c[ot]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=i.createElement(l),i.head.insertBefore(c,i.querySelector("head > title"))),ft(c,l,n),c[ot]=e,at(c),l=c;break e;case"link":var h=$p("link","href",i).get(l+(n.href||""));if(h){for(var g=0;g<h.length;g++)if(c=h[g],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(g,1);break t}}c=i.createElement(l),ft(c,l,n),i.head.appendChild(c);break;case"meta":if(h=$p("meta","content",i).get(l+(n.content||""))){for(g=0;g<h.length;g++)if(c=h[g],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(g,1);break t}}c=i.createElement(l),ft(c,l,n),i.head.appendChild(c);break;default:throw Error(o(468,l))}c[ot]=e,at(c),l=c}e.stateNode=l}else Dp(i,e.type,e.stateNode);else e.stateNode=_p(i,l,e.memoizedProps);else c!==l?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,l===null?Dp(i,e.type,e.stateNode):_p(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Lu(e,e.memoizedProps,n.memoizedProps)}break;case 27:bt(t,e),St(e),l&512&&(We||n===null||ln(n,n.return)),n!==null&&l&4&&Lu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(bt(t,e),St(e),l&512&&(We||n===null||ln(n,n.return)),e.flags&32){i=e.stateNode;try{Ka(i,"")}catch(ne){Me(e,e.return,ne)}}l&4&&e.stateNode!=null&&(i=e.memoizedProps,Lu(e,i,n!==null?n.memoizedProps:i)),l&1024&&(Yu=!0);break;case 6:if(bt(t,e),St(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(ne){Me(e,e.return,ne)}}break;case 3:if(oo=null,i=It,It=io(t.containerInfo),bt(t,e),It=i,St(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Cl(t.containerInfo)}catch(ne){Me(e,e.return,ne)}Yu&&(Yu=!1,Dh(e));break;case 4:l=It,It=io(e.stateNode.containerInfo),bt(t,e),St(e),It=l;break;case 12:bt(t,e),St(e);break;case 31:bt(t,e),St(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Vr(e,l)));break;case 13:bt(t,e),St(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Zr=Tt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Vr(e,l)));break;case 22:i=e.memoizedState!==null;var j=n!==null&&n.memoizedState!==null,R=wn,Y=We;if(wn=R||i,We=Y||j,bt(t,e),We=Y,wn=R,St(e),l&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||j||wn||We||_a(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){j=n=t;try{if(c=j.stateNode,i)h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{g=j.stateNode;var V=j.memoizedProps.style,k=V!=null&&V.hasOwnProperty("display")?V.display:null;g.style.display=k==null||typeof k=="boolean"?"":(""+k).trim()}}catch(ne){Me(j,j.return,ne)}}}else if(t.tag===6){if(n===null){j=t;try{j.stateNode.nodeValue=i?"":j.memoizedProps}catch(ne){Me(j,j.return,ne)}}}else if(t.tag===18){if(n===null){j=t;try{var $=j.stateNode;i?Cp($,!0):Cp(j.stateNode,!1)}catch(ne){Me(j,j.return,ne)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Vr(e,n))));break;case 19:bt(t,e),St(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Vr(e,l)));break;case 30:break;case 21:break;default:bt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Th(l)){n=l;break}l=l.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var i=n.stateNode,c=Uu(e);Xr(e,c,i);break;case 5:var h=n.stateNode;n.flags&32&&(Ka(h,""),n.flags&=-33);var g=Uu(e);Xr(e,g,h);break;case 3:case 4:var j=n.stateNode.containerInfo,R=Uu(e);Hu(e,R,j);break;default:throw Error(o(161))}}catch(Y){Me(e,e.return,Y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Dh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function En(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Rh(e,t.alternate,t),t=t.sibling}function _a(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wn(4,t,t.return),_a(t);break;case 1:ln(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Ch(t,t.return,n),_a(t);break;case 27:Ni(t.stateNode);case 26:case 5:ln(t,t.return),_a(t);break;case 22:t.memoizedState===null&&_a(t);break;case 30:_a(t);break;default:_a(t)}e=e.sibling}}function Cn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,i=e,c=t,h=c.flags;switch(c.tag){case 0:case 11:case 15:Cn(i,c,n),wi(4,c);break;case 1:if(Cn(i,c,n),l=c,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(R){Me(l,l.return,R)}if(l=c,i=l.updateQueue,i!==null){var g=l.stateNode;try{var j=i.shared.hiddenCallbacks;if(j!==null)for(i.shared.hiddenCallbacks=null,i=0;i<j.length;i++)h0(j[i],g)}catch(R){Me(l,l.return,R)}}n&&h&64&&Eh(c),ji(c,c.return);break;case 27:Mh(c);case 26:case 5:Cn(i,c,n),n&&l===null&&h&4&&zh(c),ji(c,c.return);break;case 12:Cn(i,c,n);break;case 31:Cn(i,c,n),n&&h&4&&kh(i,c);break;case 13:Cn(i,c,n),n&&h&4&&_h(i,c);break;case 22:c.memoizedState===null&&Cn(i,c,n),ji(c,c.return);break;case 30:break;default:Cn(i,c,n)}t=t.sibling}}function Gu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ui(n))}function qu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ui(e))}function Pt(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bh(e,t,n,l),t=t.sibling}function Bh(e,t,n,l){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Pt(e,t,n,l),i&2048&&wi(9,t);break;case 1:Pt(e,t,n,l);break;case 3:Pt(e,t,n,l),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ui(e)));break;case 12:if(i&2048){Pt(e,t,n,l),e=t.stateNode;try{var c=t.memoizedProps,h=c.id,g=c.onPostCommit;typeof g=="function"&&g(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(j){Me(t,t.return,j)}}else Pt(e,t,n,l);break;case 31:Pt(e,t,n,l);break;case 13:Pt(e,t,n,l);break;case 23:break;case 22:c=t.stateNode,h=t.alternate,t.memoizedState!==null?c._visibility&2?Pt(e,t,n,l):Ei(e,t):c._visibility&2?Pt(e,t,n,l):(c._visibility|=2,pl(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Gu(h,t);break;case 24:Pt(e,t,n,l),i&2048&&qu(t.alternate,t);break;default:Pt(e,t,n,l)}}function pl(e,t,n,l,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,h=t,g=n,j=l,R=h.flags;switch(h.tag){case 0:case 11:case 15:pl(c,h,g,j,i),wi(8,h);break;case 23:break;case 22:var Y=h.stateNode;h.memoizedState!==null?Y._visibility&2?pl(c,h,g,j,i):Ei(c,h):(Y._visibility|=2,pl(c,h,g,j,i)),i&&R&2048&&Gu(h.alternate,h);break;case 24:pl(c,h,g,j,i),i&&R&2048&&qu(h.alternate,h);break;default:pl(c,h,g,j,i)}t=t.sibling}}function Ei(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,i=l.flags;switch(l.tag){case 22:Ei(n,l),i&2048&&Gu(l.alternate,l);break;case 24:Ei(n,l),i&2048&&qu(l.alternate,l);break;default:Ei(n,l)}t=t.sibling}}var Ci=8192;function ml(e,t,n){if(e.subtreeFlags&Ci)for(e=e.child;e!==null;)Lh(e,t,n),e=e.sibling}function Lh(e,t,n){switch(e.tag){case 26:ml(e,t,n),e.flags&Ci&&e.memoizedState!==null&&zy(n,It,e.memoizedState,e.memoizedProps);break;case 5:ml(e,t,n);break;case 3:case 4:var l=It;It=io(e.stateNode.containerInfo),ml(e,t,n),It=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Ci,Ci=16777216,ml(e,t,n),Ci=l):ml(e,t,n));break;default:ml(e,t,n)}}function Uh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function zi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];lt=l,Yh(l,e)}Uh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hh(e),e=e.sibling}function Hh(e){switch(e.tag){case 0:case 11:case 15:zi(e),e.flags&2048&&Wn(9,e,e.return);break;case 3:zi(e);break;case 12:zi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Qr(e)):zi(e);break;default:zi(e)}}function Qr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];lt=l,Yh(l,e)}Uh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wn(8,t,t.return),Qr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Qr(t));break;default:Qr(t)}e=e.sibling}}function Yh(e,t){for(;lt!==null;){var n=lt;switch(n.tag){case 0:case 11:case 15:Wn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ui(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,lt=l;else e:for(n=e;lt!==null;){l=lt;var i=l.sibling,c=l.return;if(Oh(l),l===n){lt=null;break e}if(i!==null){i.return=c,lt=i;break e}lt=c}}}var Yx={getCacheForType:function(e){var t=ut(Ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ut(Ke).controller.signal}},Gx=typeof WeakMap=="function"?WeakMap:Map,Ee=0,Ne=null,me=null,xe=0,Te=0,_t=null,In=!1,gl=!1,Xu=!1,zn=0,Xe=0,Pn=0,$a=0,Vu=0,$t=0,xl=0,Ti=null,wt=null,Qu=!1,Zr=0,Gh=0,Kr=1/0,Jr=null,ea=null,tt=0,ta=null,yl=null,Tn=0,Zu=0,Ku=null,qh=null,Mi=0,Ju=null;function Dt(){return(Ee&2)!==0&&xe!==0?xe&-xe:B.T!==null?ts():id()}function Xh(){if($t===0)if((xe&536870912)===0||ve){var e=ar;ar<<=1,(ar&3932160)===0&&(ar=262144),$t=e}else $t=536870912;return e=Nt.current,e!==null&&(e.flags|=32),$t}function jt(e,t,n){(e===Ne&&(Te===2||Te===9)||e.cancelPendingCommit!==null)&&(vl(e,0),na(e,xe,$t,!1)),Jl(e,n),((Ee&2)===0||e!==Ne)&&(e===Ne&&((Ee&2)===0&&($a|=n),Xe===4&&na(e,xe,$t,!1)),rn(e))}function Vh(e,t,n){if((Ee&6)!==0)throw Error(o(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Kl(e,t),i=l?Vx(e,t):Wu(e,t,!0),c=l;do{if(i===0){gl&&!l&&na(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!qx(n)){i=Wu(e,t,!1),c=!1;continue}if(i===2){if(c=t,e.errorRecoveryDisabledLanes&c)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var g=e;i=Ti;var j=g.current.memoizedState.isDehydrated;if(j&&(vl(g,h).flags|=256),h=Wu(g,h,!1),h!==2){if(Xu&&!j){g.errorRecoveryDisabledLanes|=c,$a|=c,i=4;break e}c=wt,wt=i,c!==null&&(wt===null?wt=c:wt.push.apply(wt,c))}i=h}if(c=!1,i!==2)continue}}if(i===1){vl(e,0),na(e,t,0,!0);break}e:{switch(l=e,c=i,c){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:na(l,t,$t,!In);break e;case 2:wt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(i=Zr+300-Tt(),10<i)){if(na(l,t,$t,!In),ir(l,0,!0)!==0)break e;Tn=t,l.timeoutHandle=wp(Qh.bind(null,l,n,wt,Jr,Qu,t,$t,$a,xl,In,c,"Throttled",-0,0),i);break e}Qh(l,n,wt,Jr,Qu,t,$t,$a,xl,In,c,null,-0,0)}}break}while(!0);rn(e)}function Qh(e,t,n,l,i,c,h,g,j,R,Y,V,k,$){if(e.timeoutHandle=-1,V=t.subtreeFlags,V&8192||(V&16785408)===16785408){V={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dn},Lh(t,c,V);var ne=(c&62914560)===c?Zr-Tt():(c&4194048)===c?Gh-Tt():0;if(ne=Ty(V,ne),ne!==null){Tn=c,e.cancelPendingCommit=ne(ep.bind(null,e,t,c,n,l,i,h,g,j,Y,V,null,k,$)),na(e,c,h,!R);return}}ep(e,t,c,n,l,i,h,g,j)}function qx(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var i=n[l],c=i.getSnapshot;i=i.value;try{if(!Rt(c(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function na(e,t,n,l){t&=~Vu,t&=~$a,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var i=t;0<i;){var c=31-At(i),h=1<<c;l[c]=-1,i&=~h}n!==0&&nd(e,n,t)}function Fr(){return(Ee&6)===0?(Ai(0),!1):!0}function Fu(){if(me!==null){if(Te===0)var e=me.return;else e=me,gn=za=null,du(e),ul=null,fi=0,e=me;for(;e!==null;)jh(e.alternate,e),e=e.return;me=null}}function vl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,uy(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Tn=0,Fu(),Ne=e,me=n=pn(e.current,null),xe=t,Te=0,_t=null,In=!1,gl=Kl(e,t),Xu=!1,xl=$t=Vu=$a=Pn=Xe=0,wt=Ti=null,Qu=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var i=31-At(l),c=1<<i;t|=e[i],l&=~c}return zn=t,xr(),n}function Zh(e,t){se=null,B.H=vi,t===cl||t===Cr?(t=u0(),Te=3):t===eu?(t=u0(),Te=4):Te=t===Mu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,_t=t,me===null&&(Xe=1,Ur(e,Gt(t,e.current)))}function Kh(){var e=Nt.current;return e===null?!0:(xe&4194048)===xe?Qt===null:(xe&62914560)===xe||(xe&536870912)!==0?e===Qt:!1}function Jh(){var e=B.H;return B.H=vi,e===null?vi:e}function Fh(){var e=B.A;return B.A=Yx,e}function Wr(){Xe=4,In||(xe&4194048)!==xe&&Nt.current!==null||(gl=!0),(Pn&134217727)===0&&($a&134217727)===0||Ne===null||na(Ne,xe,$t,!1)}function Wu(e,t,n){var l=Ee;Ee|=2;var i=Jh(),c=Fh();(Ne!==e||xe!==t)&&(Jr=null,vl(e,t)),t=!1;var h=Xe;e:do try{if(Te!==0&&me!==null){var g=me,j=_t;switch(Te){case 8:Fu(),h=6;break e;case 3:case 2:case 9:case 6:Nt.current===null&&(t=!0);var R=Te;if(Te=0,_t=null,bl(e,g,j,R),n&&gl){h=0;break e}break;default:R=Te,Te=0,_t=null,bl(e,g,j,R)}}Xx(),h=Xe;break}catch(Y){Zh(e,Y)}while(!0);return t&&e.shellSuspendCounter++,gn=za=null,Ee=l,B.H=i,B.A=c,me===null&&(Ne=null,xe=0,xr()),h}function Xx(){for(;me!==null;)Wh(me)}function Vx(e,t){var n=Ee;Ee|=2;var l=Jh(),i=Fh();Ne!==e||xe!==t?(Jr=null,Kr=Tt()+500,vl(e,t)):gl=Kl(e,t);e:do try{if(Te!==0&&me!==null){t=me;var c=_t;t:switch(Te){case 1:Te=0,_t=null,bl(e,t,c,1);break;case 2:case 9:if(o0(c)){Te=0,_t=null,Ih(t);break}t=function(){Te!==2&&Te!==9||Ne!==e||(Te=7),rn(e)},c.then(t,t);break e;case 3:Te=7;break e;case 4:Te=5;break e;case 7:o0(c)?(Te=0,_t=null,Ih(t)):(Te=0,_t=null,bl(e,t,c,7));break;case 5:var h=null;switch(me.tag){case 26:h=me.memoizedState;case 5:case 27:var g=me;if(h?Bp(h):g.stateNode.complete){Te=0,_t=null;var j=g.sibling;if(j!==null)me=j;else{var R=g.return;R!==null?(me=R,Ir(R)):me=null}break t}}Te=0,_t=null,bl(e,t,c,5);break;case 6:Te=0,_t=null,bl(e,t,c,6);break;case 8:Fu(),Xe=6;break e;default:throw Error(o(462))}}Qx();break}catch(Y){Zh(e,Y)}while(!0);return gn=za=null,B.H=l,B.A=i,Ee=n,me!==null?0:(Ne=null,xe=0,xr(),Xe)}function Qx(){for(;me!==null&&!m2();)Wh(me)}function Wh(e){var t=Sh(e.alternate,e,zn);e.memoizedProps=e.pendingProps,t===null?Ir(e):me=t}function Ih(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=mh(n,t,t.pendingProps,t.type,void 0,xe);break;case 11:t=mh(n,t,t.pendingProps,t.type.render,t.ref,xe);break;case 5:du(t);default:jh(n,t),t=me=Fd(t,zn),t=Sh(n,t,zn)}e.memoizedProps=e.pendingProps,t===null?Ir(e):me=t}function bl(e,t,n,l){gn=za=null,du(t),ul=null,fi=0;var i=t.return;try{if(_x(e,i,t,n,xe)){Xe=1,Ur(e,Gt(n,e.current)),me=null;return}}catch(c){if(i!==null)throw me=i,c;Xe=1,Ur(e,Gt(n,e.current)),me=null;return}t.flags&32768?(ve||l===1?e=!0:gl||(xe&536870912)!==0?e=!1:(In=e=!0,(l===2||l===9||l===3||l===6)&&(l=Nt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ph(t,e)):Ir(t)}function Ir(e){var t=e;do{if((t.flags&32768)!==0){Ph(t,In);return}e=t.return;var n=Bx(t.alternate,t,zn);if(n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);Xe===0&&(Xe=5)}function Ph(e,t){do{var n=Lx(e.alternate,e);if(n!==null){n.flags&=32767,me=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){me=e;return}me=e=n}while(e!==null);Xe=6,me=null}function ep(e,t,n,l,i,c,h,g,j){e.cancelPendingCommit=null;do Pr();while(tt!==0);if((Ee&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(c=t.lanes|t.childLanes,c|=Uc,C2(e,n,c,h,g,j),e===Ne&&(me=Ne=null,xe=0),yl=t,ta=e,Tn=n,Zu=c,Ku=i,qh=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Fx(tr,function(){return ip(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,i=K.p,K.p=2,h=Ee,Ee|=4;try{Ux(e,t,n)}finally{Ee=h,K.p=i,B.T=l}}tt=1,tp(),np(),ap()}}function tp(){if(tt===1){tt=0;var e=ta,t=yl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=B.T,B.T=null;var l=K.p;K.p=2;var i=Ee;Ee|=4;try{$h(t,e);var c=us,h=Yd(e.containerInfo),g=c.focusedElem,j=c.selectionRange;if(h!==g&&g&&g.ownerDocument&&Hd(g.ownerDocument.documentElement,g)){if(j!==null&&_c(g)){var R=j.start,Y=j.end;if(Y===void 0&&(Y=R),"selectionStart"in g)g.selectionStart=R,g.selectionEnd=Math.min(Y,g.value.length);else{var V=g.ownerDocument||document,k=V&&V.defaultView||window;if(k.getSelection){var $=k.getSelection(),ne=g.textContent.length,re=Math.min(j.start,ne),Oe=j.end===void 0?re:Math.min(j.end,ne);!$.extend&&re>Oe&&(h=Oe,Oe=re,re=h);var T=Ud(g,re),C=Ud(g,Oe);if(T&&C&&($.rangeCount!==1||$.anchorNode!==T.node||$.anchorOffset!==T.offset||$.focusNode!==C.node||$.focusOffset!==C.offset)){var A=V.createRange();A.setStart(T.node,T.offset),$.removeAllRanges(),re>Oe?($.addRange(A),$.extend(C.node,C.offset)):(A.setEnd(C.node,C.offset),$.addRange(A))}}}}for(V=[],$=g;$=$.parentNode;)$.nodeType===1&&V.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<V.length;g++){var q=V[g];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}fo=!!cs,us=cs=null}finally{Ee=i,K.p=l,B.T=n}}e.current=t,tt=2}}function np(){if(tt===2){tt=0;var e=ta,t=yl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=B.T,B.T=null;var l=K.p;K.p=2;var i=Ee;Ee|=4;try{Rh(e,t.alternate,t)}finally{Ee=i,K.p=l,B.T=n}}tt=3}}function ap(){if(tt===4||tt===3){tt=0,g2();var e=ta,t=yl,n=Tn,l=qh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?tt=5:(tt=0,yl=ta=null,lp(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ea=null),mc(n),t=t.stateNode,Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Zl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=B.T,i=K.p,K.p=2,B.T=null;try{for(var c=e.onRecoverableError,h=0;h<l.length;h++){var g=l[h];c(g.value,{componentStack:g.stack})}}finally{B.T=t,K.p=i}}(Tn&3)!==0&&Pr(),rn(e),i=e.pendingLanes,(n&261930)!==0&&(i&42)!==0?e===Ju?Mi++:(Mi=0,Ju=e):Mi=0,Ai(0)}}function lp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ui(t)))}function Pr(){return tp(),np(),ap(),ip()}function ip(){if(tt!==5)return!1;var e=ta,t=Zu;Zu=0;var n=mc(Tn),l=B.T,i=K.p;try{K.p=32>n?32:n,B.T=null,n=Ku,Ku=null;var c=ta,h=Tn;if(tt=0,yl=ta=null,Tn=0,(Ee&6)!==0)throw Error(o(331));var g=Ee;if(Ee|=4,Hh(c.current),Bh(c,c.current,h,n),Ee=g,Ai(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Zl,c)}catch{}return!0}finally{K.p=i,B.T=l,lp(e,t)}}function rp(e,t,n){t=Gt(n,t),t=Tu(e.stateNode,t,2),e=Kn(e,t,2),e!==null&&(Jl(e,2),rn(e))}function Me(e,t,n){if(e.tag===3)rp(e,e,n);else for(;t!==null;){if(t.tag===3){rp(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ea===null||!ea.has(l))){e=Gt(n,e),n=oh(2),l=Kn(t,n,2),l!==null&&(ch(n,l,t,e),Jl(l,2),rn(l));break}}t=t.return}}function Iu(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new Gx;var i=new Set;l.set(t,i)}else i=l.get(t),i===void 0&&(i=new Set,l.set(t,i));i.has(n)||(Xu=!0,i.add(n),e=Zx.bind(null,e,t,n),t.then(e,e))}function Zx(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ne===e&&(xe&n)===n&&(Xe===4||Xe===3&&(xe&62914560)===xe&&300>Tt()-Zr?(Ee&2)===0&&vl(e,0):Vu|=n,xl===xe&&(xl=0)),rn(e)}function op(e,t){t===0&&(t=td()),e=ja(e,t),e!==null&&(Jl(e,t),rn(e))}function Kx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),op(e,n)}function Jx(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),op(e,n)}function Fx(e,t){return fc(e,t)}var eo=null,Sl=null,Pu=!1,to=!1,es=!1,aa=0;function rn(e){e!==Sl&&e.next===null&&(Sl===null?eo=Sl=e:Sl=Sl.next=e),to=!0,Pu||(Pu=!0,Ix())}function Ai(e,t){if(!es&&to){es=!0;do for(var n=!1,l=eo;l!==null;){if(e!==0){var i=l.pendingLanes;if(i===0)var c=0;else{var h=l.suspendedLanes,g=l.pingedLanes;c=(1<<31-At(42|e)+1)-1,c&=i&~(h&~g),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,fp(l,c))}else c=xe,c=ir(l,l===Ne?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||Kl(l,c)||(n=!0,fp(l,c));l=l.next}while(n);es=!1}}function Wx(){cp()}function cp(){to=Pu=!1;var e=0;aa!==0&&cy()&&(e=aa);for(var t=Tt(),n=null,l=eo;l!==null;){var i=l.next,c=up(l,t);c===0?(l.next=null,n===null?eo=i:n.next=i,i===null&&(Sl=n)):(n=l,(e!==0||(c&3)!==0)&&(to=!0)),l=i}tt!==0&&tt!==5||Ai(e),aa!==0&&(aa=0)}function up(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var h=31-At(c),g=1<<h,j=i[h];j===-1?((g&n)===0||(g&l)!==0)&&(i[h]=E2(g,t)):j<=t&&(e.expiredLanes|=g),c&=~g}if(t=Ne,n=xe,n=ir(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Te===2||Te===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&dc(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Kl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&dc(l),mc(n)){case 2:case 8:n=Pf;break;case 32:n=tr;break;case 268435456:n=ed;break;default:n=tr}return l=sp.bind(null,e),n=fc(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&dc(l),e.callbackPriority=2,e.callbackNode=null,2}function sp(e,t){if(tt!==0&&tt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Pr()&&e.callbackNode!==n)return null;var l=xe;return l=ir(e,e===Ne?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Vh(e,l,t),up(e,Tt()),e.callbackNode!=null&&e.callbackNode===n?sp.bind(null,e):null)}function fp(e,t){if(Pr())return null;Vh(e,t,!0)}function Ix(){sy(function(){(Ee&6)!==0?fc(If,Wx):cp()})}function ts(){if(aa===0){var e=rl;e===0&&(e=nr,nr<<=1,(nr&261888)===0&&(nr=256)),aa=e}return aa}function dp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ur(""+e)}function hp(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Px(e,t,n,l,i){if(t==="submit"&&n&&n.stateNode===i){var c=dp((i[xt]||null).action),h=l.submitter;h&&(t=(t=h[xt]||null)?dp(t.formAction):h.getAttribute("formAction"),t!==null&&(c=t,h=null));var g=new hr("action","action",null,l,i);e.push({event:g,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(aa!==0){var j=h?hp(i,h):new FormData(i);Su(n,{pending:!0,data:j,method:i.method,action:c},null,j)}}else typeof c=="function"&&(g.preventDefault(),j=h?hp(i,h):new FormData(i),Su(n,{pending:!0,data:j,method:i.method,action:c},c,j))},currentTarget:i}]})}}for(var ns=0;ns<Lc.length;ns++){var as=Lc[ns],ey=as.toLowerCase(),ty=as[0].toUpperCase()+as.slice(1);Wt(ey,"on"+ty)}Wt(Xd,"onAnimationEnd"),Wt(Vd,"onAnimationIteration"),Wt(Qd,"onAnimationStart"),Wt("dblclick","onDoubleClick"),Wt("focusin","onFocus"),Wt("focusout","onBlur"),Wt(xx,"onTransitionRun"),Wt(yx,"onTransitionStart"),Wt(vx,"onTransitionCancel"),Wt(Zd,"onTransitionEnd"),Qa("onMouseEnter",["mouseout","mouseover"]),Qa("onMouseLeave",["mouseout","mouseover"]),Qa("onPointerEnter",["pointerout","pointerover"]),Qa("onPointerLeave",["pointerout","pointerover"]),va("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),va("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),va("onBeforeInput",["compositionend","keypress","textInput","paste"]),va("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),va("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),va("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ny=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ri));function pp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],i=l.event;l=l.listeners;e:{var c=void 0;if(t)for(var h=l.length-1;0<=h;h--){var g=l[h],j=g.instance,R=g.currentTarget;if(g=g.listener,j!==c&&i.isPropagationStopped())break e;c=g,i.currentTarget=R;try{c(i)}catch(Y){gr(Y)}i.currentTarget=null,c=j}else for(h=0;h<l.length;h++){if(g=l[h],j=g.instance,R=g.currentTarget,g=g.listener,j!==c&&i.isPropagationStopped())break e;c=g,i.currentTarget=R;try{c(i)}catch(Y){gr(Y)}i.currentTarget=null,c=j}}}}function ge(e,t){var n=t[gc];n===void 0&&(n=t[gc]=new Set);var l=e+"__bubble";n.has(l)||(mp(t,e,2,!1),n.add(l))}function ls(e,t,n){var l=0;t&&(l|=4),mp(n,e,l,t)}var no="_reactListening"+Math.random().toString(36).slice(2);function is(e){if(!e[no]){e[no]=!0,cd.forEach(function(n){n!=="selectionchange"&&(ny.has(n)||ls(n,!1,e),ls(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[no]||(t[no]=!0,ls("selectionchange",!1,t))}}function mp(e,t,n,l){switch(Xp(t)){case 2:var i=Ry;break;case 8:i=Oy;break;default:i=bs}n=i.bind(null,t,n,e),i=void 0,!Cc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function rs(e,t,n,l,i){var c=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var h=l.tag;if(h===3||h===4){var g=l.stateNode.containerInfo;if(g===i)break;if(h===4)for(h=l.return;h!==null;){var j=h.tag;if((j===3||j===4)&&h.stateNode.containerInfo===i)return;h=h.return}for(;g!==null;){if(h=qa(g),h===null)return;if(j=h.tag,j===5||j===6||j===26||j===27){l=c=h;continue e}g=g.parentNode}}l=l.return}bd(function(){var R=c,Y=jc(n),V=[];e:{var k=Kd.get(e);if(k!==void 0){var $=hr,ne=e;switch(e){case"keypress":if(fr(n)===0)break e;case"keydown":case"keyup":$=J2;break;case"focusin":ne="focus",$=Ac;break;case"focusout":ne="blur",$=Ac;break;case"beforeblur":case"afterblur":$=Ac;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=B2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=I2;break;case Xd:case Vd:case Qd:$=H2;break;case Zd:$=ex;break;case"scroll":case"scrollend":$=$2;break;case"wheel":$=nx;break;case"copy":case"cut":case"paste":$=G2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Cd;break;case"toggle":case"beforetoggle":$=lx}var re=(t&4)!==0,Oe=!re&&(e==="scroll"||e==="scrollend"),T=re?k!==null?k+"Capture":null:k;re=[];for(var C=R,A;C!==null;){var q=C;if(A=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||A===null||T===null||(q=Il(C,T),q!=null&&re.push(Oi(C,q,A))),Oe)break;C=C.return}0<re.length&&(k=new $(k,ne,null,n,Y),V.push({event:k,listeners:re}))}}if((t&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",k&&n!==wc&&(ne=n.relatedTarget||n.fromElement)&&(qa(ne)||ne[Ga]))break e;if(($||k)&&(k=Y.window===Y?Y:(k=Y.ownerDocument)?k.defaultView||k.parentWindow:window,$?(ne=n.relatedTarget||n.toElement,$=R,ne=ne?qa(ne):null,ne!==null&&(Oe=d(ne),re=ne.tag,ne!==Oe||re!==5&&re!==27&&re!==6)&&(ne=null)):($=null,ne=R),$!==ne)){if(re=jd,q="onMouseLeave",T="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(re=Cd,q="onPointerLeave",T="onPointerEnter",C="pointer"),Oe=$==null?k:Wl($),A=ne==null?k:Wl(ne),k=new re(q,C+"leave",$,n,Y),k.target=Oe,k.relatedTarget=A,q=null,qa(Y)===R&&(re=new re(T,C+"enter",ne,n,Y),re.target=A,re.relatedTarget=Oe,q=re),Oe=q,$&&ne)t:{for(re=ay,T=$,C=ne,A=0,q=T;q;q=re(q))A++;q=0;for(var ie=C;ie;ie=re(ie))q++;for(;0<A-q;)T=re(T),A--;for(;0<q-A;)C=re(C),q--;for(;A--;){if(T===C||C!==null&&T===C.alternate){re=T;break t}T=re(T),C=re(C)}re=null}else re=null;$!==null&&gp(V,k,$,re,!1),ne!==null&&Oe!==null&&gp(V,Oe,ne,re,!0)}}e:{if(k=R?Wl(R):window,$=k.nodeName&&k.nodeName.toLowerCase(),$==="select"||$==="input"&&k.type==="file")var we=kd;else if(Od(k))if(_d)we=px;else{we=dx;var ae=fx}else $=k.nodeName,!$||$.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?R&&Sc(R.elementType)&&(we=kd):we=hx;if(we&&(we=we(e,R))){Nd(V,we,n,Y);break e}ae&&ae(e,k,R),e==="focusout"&&R&&k.type==="number"&&R.memoizedProps.value!=null&&bc(k,"number",k.value)}switch(ae=R?Wl(R):window,e){case"focusin":(Od(ae)||ae.contentEditable==="true")&&(Ia=ae,$c=R,ri=null);break;case"focusout":ri=$c=Ia=null;break;case"mousedown":Dc=!0;break;case"contextmenu":case"mouseup":case"dragend":Dc=!1,Gd(V,n,Y);break;case"selectionchange":if(gx)break;case"keydown":case"keyup":Gd(V,n,Y)}var fe;if(Oc)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Wa?Ad(e,n)&&(ye="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ye="onCompositionStart");ye&&(zd&&n.locale!=="ko"&&(Wa||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Wa&&(fe=Sd()):(Yn=Y,zc="value"in Yn?Yn.value:Yn.textContent,Wa=!0)),ae=ao(R,ye),0<ae.length&&(ye=new Ed(ye,e,null,n,Y),V.push({event:ye,listeners:ae}),fe?ye.data=fe:(fe=Rd(n),fe!==null&&(ye.data=fe)))),(fe=rx?ox(e,n):cx(e,n))&&(ye=ao(R,"onBeforeInput"),0<ye.length&&(ae=new Ed("onBeforeInput","beforeinput",null,n,Y),V.push({event:ae,listeners:ye}),ae.data=fe)),Px(V,e,R,n,Y)}pp(V,t)})}function Oi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ao(e,t){for(var n=t+"Capture",l=[];e!==null;){var i=e,c=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||c===null||(i=Il(e,n),i!=null&&l.unshift(Oi(e,i,c)),i=Il(e,t),i!=null&&l.push(Oi(e,i,c))),e.tag===3)return l;e=e.return}return[]}function ay(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function gp(e,t,n,l,i){for(var c=t._reactName,h=[];n!==null&&n!==l;){var g=n,j=g.alternate,R=g.stateNode;if(g=g.tag,j!==null&&j===l)break;g!==5&&g!==26&&g!==27||R===null||(j=R,i?(R=Il(n,c),R!=null&&h.unshift(Oi(n,R,j))):i||(R=Il(n,c),R!=null&&h.push(Oi(n,R,j)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var ly=/\r\n?/g,iy=/\u0000|\uFFFD/g;function xp(e){return(typeof e=="string"?e:""+e).replace(ly,`
`).replace(iy,"")}function yp(e,t){return t=xp(t),xp(e)===t}function Re(e,t,n,l,i,c){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ka(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ka(e,""+l);break;case"className":or(e,"class",l);break;case"tabIndex":or(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":or(e,n,l);break;case"style":yd(e,l,c);break;case"data":if(t!=="object"){or(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ur(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&Re(e,t,"name",i.name,i,null),Re(e,t,"formEncType",i.formEncType,i,null),Re(e,t,"formMethod",i.formMethod,i,null),Re(e,t,"formTarget",i.formTarget,i,null)):(Re(e,t,"encType",i.encType,i,null),Re(e,t,"method",i.method,i,null),Re(e,t,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ur(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=dn);break;case"onScroll":l!=null&&ge("scroll",e);break;case"onScrollEnd":l!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=ur(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":ge("beforetoggle",e),ge("toggle",e),rr(e,"popover",l);break;case"xlinkActuate":fn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":fn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":fn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":fn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":fn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":fn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":fn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":fn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":fn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":rr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=k2.get(n)||n,rr(e,n,l))}}function os(e,t,n,l,i,c){switch(n){case"style":yd(e,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Ka(e,l):(typeof l=="number"||typeof l=="bigint")&&Ka(e,""+l);break;case"onScroll":l!=null&&ge("scroll",e);break;case"onScrollEnd":l!=null&&ge("scrollend",e);break;case"onClick":l!=null&&(e.onclick=dn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ud.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),c=e[xt]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,i),typeof l=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,i);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):rr(e,n,l)}}}function ft(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var l=!1,i=!1,c;for(c in n)if(n.hasOwnProperty(c)){var h=n[c];if(h!=null)switch(c){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Re(e,t,c,h,n,null)}}i&&Re(e,t,"srcSet",n.srcSet,n,null),l&&Re(e,t,"src",n.src,n,null);return;case"input":ge("invalid",e);var g=c=h=i=null,j=null,R=null;for(l in n)if(n.hasOwnProperty(l)){var Y=n[l];if(Y!=null)switch(l){case"name":i=Y;break;case"type":h=Y;break;case"checked":j=Y;break;case"defaultChecked":R=Y;break;case"value":c=Y;break;case"defaultValue":g=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(o(137,t));break;default:Re(e,t,l,Y,n,null)}}pd(e,c,g,j,R,h,i,!1);return;case"select":ge("invalid",e),l=h=c=null;for(i in n)if(n.hasOwnProperty(i)&&(g=n[i],g!=null))switch(i){case"value":c=g;break;case"defaultValue":h=g;break;case"multiple":l=g;default:Re(e,t,i,g,n,null)}t=c,n=h,e.multiple=!!l,t!=null?Za(e,!!l,t,!1):n!=null&&Za(e,!!l,n,!0);return;case"textarea":ge("invalid",e),c=i=l=null;for(h in n)if(n.hasOwnProperty(h)&&(g=n[h],g!=null))switch(h){case"value":l=g;break;case"defaultValue":i=g;break;case"children":c=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(o(91));break;default:Re(e,t,h,g,n,null)}gd(e,l,i,c);return;case"option":for(j in n)if(n.hasOwnProperty(j)&&(l=n[j],l!=null))switch(j){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Re(e,t,j,l,n,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(l=0;l<Ri.length;l++)ge(Ri[l],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in n)if(n.hasOwnProperty(R)&&(l=n[R],l!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Re(e,t,R,l,n,null)}return;default:if(Sc(t)){for(Y in n)n.hasOwnProperty(Y)&&(l=n[Y],l!==void 0&&os(e,t,Y,l,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(l=n[g],l!=null&&Re(e,t,g,l,n,null))}function ry(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,c=null,h=null,g=null,j=null,R=null,Y=null;for($ in n){var V=n[$];if(n.hasOwnProperty($)&&V!=null)switch($){case"checked":break;case"value":break;case"defaultValue":j=V;default:l.hasOwnProperty($)||Re(e,t,$,null,l,V)}}for(var k in l){var $=l[k];if(V=n[k],l.hasOwnProperty(k)&&($!=null||V!=null))switch(k){case"type":c=$;break;case"name":i=$;break;case"checked":R=$;break;case"defaultChecked":Y=$;break;case"value":h=$;break;case"defaultValue":g=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(o(137,t));break;default:$!==V&&Re(e,t,k,$,l,V)}}vc(e,h,g,j,R,Y,c,i);return;case"select":$=h=g=k=null;for(c in n)if(j=n[c],n.hasOwnProperty(c)&&j!=null)switch(c){case"value":break;case"multiple":$=j;default:l.hasOwnProperty(c)||Re(e,t,c,null,l,j)}for(i in l)if(c=l[i],j=n[i],l.hasOwnProperty(i)&&(c!=null||j!=null))switch(i){case"value":k=c;break;case"defaultValue":g=c;break;case"multiple":h=c;default:c!==j&&Re(e,t,i,c,l,j)}t=g,n=h,l=$,k!=null?Za(e,!!n,k,!1):!!l!=!!n&&(t!=null?Za(e,!!n,t,!0):Za(e,!!n,n?[]:"",!1));return;case"textarea":$=k=null;for(g in n)if(i=n[g],n.hasOwnProperty(g)&&i!=null&&!l.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Re(e,t,g,null,l,i)}for(h in l)if(i=l[h],c=n[h],l.hasOwnProperty(h)&&(i!=null||c!=null))switch(h){case"value":k=i;break;case"defaultValue":$=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==c&&Re(e,t,h,i,l,c)}md(e,k,$);return;case"option":for(var ne in n)if(k=n[ne],n.hasOwnProperty(ne)&&k!=null&&!l.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Re(e,t,ne,null,l,k)}for(j in l)if(k=l[j],$=n[j],l.hasOwnProperty(j)&&k!==$&&(k!=null||$!=null))switch(j){case"selected":e.selected=k&&typeof k!="function"&&typeof k!="symbol";break;default:Re(e,t,j,k,l,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in n)k=n[re],n.hasOwnProperty(re)&&k!=null&&!l.hasOwnProperty(re)&&Re(e,t,re,null,l,k);for(R in l)if(k=l[R],$=n[R],l.hasOwnProperty(R)&&k!==$&&(k!=null||$!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(o(137,t));break;default:Re(e,t,R,k,l,$)}return;default:if(Sc(t)){for(var Oe in n)k=n[Oe],n.hasOwnProperty(Oe)&&k!==void 0&&!l.hasOwnProperty(Oe)&&os(e,t,Oe,void 0,l,k);for(Y in l)k=l[Y],$=n[Y],!l.hasOwnProperty(Y)||k===$||k===void 0&&$===void 0||os(e,t,Y,k,l,$);return}}for(var T in n)k=n[T],n.hasOwnProperty(T)&&k!=null&&!l.hasOwnProperty(T)&&Re(e,t,T,null,l,k);for(V in l)k=l[V],$=n[V],!l.hasOwnProperty(V)||k===$||k==null&&$==null||Re(e,t,V,k,l,$)}function vp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function oy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var i=n[l],c=i.transferSize,h=i.initiatorType,g=i.duration;if(c&&g&&vp(h)){for(h=0,g=i.responseEnd,l+=1;l<n.length;l++){var j=n[l],R=j.startTime;if(R>g)break;var Y=j.transferSize,V=j.initiatorType;Y&&vp(V)&&(j=j.responseEnd,h+=Y*(j<g?1:(g-R)/(j-R)))}if(--l,t+=8*(c+h)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var cs=null,us=null;function lo(e){return e.nodeType===9?e:e.ownerDocument}function bp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ss(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fs=null;function cy(){var e=window.event;return e&&e.type==="popstate"?e===fs?!1:(fs=e,!0):(fs=null,!1)}var wp=typeof setTimeout=="function"?setTimeout:void 0,uy=typeof clearTimeout=="function"?clearTimeout:void 0,jp=typeof Promise=="function"?Promise:void 0,sy=typeof queueMicrotask=="function"?queueMicrotask:typeof jp<"u"?function(e){return jp.resolve(null).then(e).catch(fy)}:wp;function fy(e){setTimeout(function(){throw e})}function la(e){return e==="head"}function Ep(e,t){var n=t,l=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(i),Cl(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")Ni(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ni(n);for(var c=n.firstChild;c;){var h=c.nextSibling,g=c.nodeName;c[Fl]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=h}}else n==="body"&&Ni(e.ownerDocument.body);n=i}while(n);Cl(t)}function Cp(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function ds(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ds(n),xc(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function dy(e,t,n,l){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Fl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Zt(e.nextSibling),e===null)break}return null}function hy(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Zt(e.nextSibling),e===null))return null;return e}function zp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Zt(e.nextSibling),e===null))return null;return e}function hs(e){return e.data==="$?"||e.data==="$~"}function ps(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function py(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ms=null;function Tp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Zt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Mp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Ap(e,t,n){switch(t=lo(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Ni(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xc(e)}var Kt=new Map,Rp=new Set;function io(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Mn=K.d;K.d={f:my,r:gy,D:xy,C:yy,L:vy,m:by,X:wy,S:Sy,M:jy};function my(){var e=Mn.f(),t=Fr();return e||t}function gy(e){var t=Xa(e);t!==null&&t.tag===5&&t.type==="form"?Z0(t):Mn.r(e)}var wl=typeof document>"u"?null:document;function Op(e,t,n){var l=wl;if(l&&typeof t=="string"&&t){var i=Ht(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Rp.has(i)||(Rp.add(i),e={rel:e,crossOrigin:n,href:t},l.querySelector(i)===null&&(t=l.createElement("link"),ft(t,"link",e),at(t),l.head.appendChild(t)))}}function xy(e){Mn.D(e),Op("dns-prefetch",e,null)}function yy(e,t){Mn.C(e,t),Op("preconnect",e,t)}function vy(e,t,n){Mn.L(e,t,n);var l=wl;if(l&&e&&t){var i='link[rel="preload"][as="'+Ht(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+Ht(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+Ht(n.imageSizes)+'"]')):i+='[href="'+Ht(e)+'"]';var c=i;switch(t){case"style":c=jl(e);break;case"script":c=El(e)}Kt.has(c)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Kt.set(c,e),l.querySelector(i)!==null||t==="style"&&l.querySelector(ki(c))||t==="script"&&l.querySelector(_i(c))||(t=l.createElement("link"),ft(t,"link",e),at(t),l.head.appendChild(t)))}}function by(e,t){Mn.m(e,t);var n=wl;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Ht(l)+'"][href="'+Ht(e)+'"]',c=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=El(e)}if(!Kt.has(c)&&(e=w({rel:"modulepreload",href:e},t),Kt.set(c,e),n.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(_i(c)))return}l=n.createElement("link"),ft(l,"link",e),at(l),n.head.appendChild(l)}}}function Sy(e,t,n){Mn.S(e,t,n);var l=wl;if(l&&e){var i=Va(l).hoistableStyles,c=jl(e);t=t||"default";var h=i.get(c);if(!h){var g={loading:0,preload:null};if(h=l.querySelector(ki(c)))g.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Kt.get(c))&&gs(e,n);var j=h=l.createElement("link");at(j),ft(j,"link",e),j._p=new Promise(function(R,Y){j.onload=R,j.onerror=Y}),j.addEventListener("load",function(){g.loading|=1}),j.addEventListener("error",function(){g.loading|=2}),g.loading|=4,ro(h,t,l)}h={type:"stylesheet",instance:h,count:1,state:g},i.set(c,h)}}}function wy(e,t){Mn.X(e,t);var n=wl;if(n&&e){var l=Va(n).hoistableScripts,i=El(e),c=l.get(i);c||(c=n.querySelector(_i(i)),c||(e=w({src:e,async:!0},t),(t=Kt.get(i))&&xs(e,t),c=n.createElement("script"),at(c),ft(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(i,c))}}function jy(e,t){Mn.M(e,t);var n=wl;if(n&&e){var l=Va(n).hoistableScripts,i=El(e),c=l.get(i);c||(c=n.querySelector(_i(i)),c||(e=w({src:e,async:!0,type:"module"},t),(t=Kt.get(i))&&xs(e,t),c=n.createElement("script"),at(c),ft(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(i,c))}}function Np(e,t,n,l){var i=(i=ce.current)?io(i):null;if(!i)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=jl(n.href),n=Va(i).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=jl(n.href);var c=Va(i).hoistableStyles,h=c.get(e);if(h||(i=i.ownerDocument||i,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,h),(c=i.querySelector(ki(e)))&&!c._p&&(h.instance=c,h.state.loading=5),Kt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Kt.set(e,n),c||Ey(i,e,n,h.state))),t&&l===null)throw Error(o(528,""));return h}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=El(n),n=Va(i).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function jl(e){return'href="'+Ht(e)+'"'}function ki(e){return'link[rel="stylesheet"]['+e+"]"}function kp(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Ey(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),ft(t,"link",n),at(t),e.head.appendChild(t))}function El(e){return'[src="'+Ht(e)+'"]'}function _i(e){return"script[async]"+e}function _p(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Ht(n.href)+'"]');if(l)return t.instance=l,at(l),l;var i=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),at(l),ft(l,"style",i),ro(l,n.precedence,e),t.instance=l;case"stylesheet":i=jl(n.href);var c=e.querySelector(ki(i));if(c)return t.state.loading|=4,t.instance=c,at(c),c;l=kp(n),(i=Kt.get(i))&&gs(l,i),c=(e.ownerDocument||e).createElement("link"),at(c);var h=c;return h._p=new Promise(function(g,j){h.onload=g,h.onerror=j}),ft(c,"link",l),t.state.loading|=4,ro(c,n.precedence,e),t.instance=c;case"script":return c=El(n.src),(i=e.querySelector(_i(c)))?(t.instance=i,at(i),i):(l=n,(i=Kt.get(c))&&(l=w({},n),xs(l,i)),e=e.ownerDocument||e,i=e.createElement("script"),at(i),ft(i,"link",l),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,ro(l,n.precedence,e));return t.instance}function ro(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,c=i,h=0;h<l.length;h++){var g=l[h];if(g.dataset.precedence===t)c=g;else if(c!==i)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function gs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function xs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var oo=null;function $p(e,t,n){if(oo===null){var l=new Map,i=oo=new Map;i.set(n,l)}else i=oo,l=i.get(n),l||(l=new Map,i.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var c=n[i];if(!(c[Fl]||c[ot]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var h=c.getAttribute(t)||"";h=e+h;var g=l.get(h);g?g.push(c):l.set(h,[c])}}return l}function Dp(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Cy(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Bp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function zy(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var i=jl(l.href),c=t.querySelector(ki(i));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=co.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,at(c);return}c=t.ownerDocument||t,l=kp(l),(i=Kt.get(i))&&gs(l,i),c=c.createElement("link"),at(c);var h=c;h._p=new Promise(function(g,j){h.onload=g,h.onerror=j}),ft(c,"link",l),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=co.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var ys=0;function Ty(e,t){return e.stylesheets&&e.count===0&&so(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&so(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&ys===0&&(ys=62500*oy());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&so(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>ys?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function co(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)so(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var uo=null;function so(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,uo=new Map,t.forEach(My,e),uo=null,co.call(e))}function My(e,t){if(!(t.state.loading&4)){var n=uo.get(e);if(n)var l=n.get(null);else{n=new Map,uo.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<i.length;c++){var h=i[c];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),l=h)}l&&n.set(null,l)}i=t.instance,h=i.getAttribute("data-precedence"),c=n.get(h)||l,c===l&&n.set(null,i),n.set(h,i),this.count++,l=co.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),c?c.parentNode.insertBefore(i,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var $i={$$typeof:O,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function Ay(e,t,n,l,i,c,h,g,j){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hc(0),this.hiddenUpdates=hc(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=c,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function Lp(e,t,n,l,i,c,h,g,j,R,Y,V){return e=new Ay(e,t,n,h,j,R,Y,V,g),t=1,c===!0&&(t|=24),c=Ot(3,null,null,t),e.current=c,c.stateNode=e,t=Wc(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:l,isDehydrated:n,cache:t},tu(c),e}function Up(e){return e?(e=tl,e):tl}function Hp(e,t,n,l,i,c){i=Up(i),l.context===null?l.context=i:l.pendingContext=i,l=Zn(t),l.payload={element:n},c=c===void 0?null:c,c!==null&&(l.callback=c),n=Kn(e,l,t),n!==null&&(jt(n,e,t),hi(n,e,t))}function Yp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vs(e,t){Yp(e,t),(e=e.alternate)&&Yp(e,t)}function Gp(e){if(e.tag===13||e.tag===31){var t=ja(e,67108864);t!==null&&jt(t,e,67108864),vs(e,67108864)}}function qp(e){if(e.tag===13||e.tag===31){var t=Dt();t=pc(t);var n=ja(e,t);n!==null&&jt(n,e,t),vs(e,t)}}var fo=!0;function Ry(e,t,n,l){var i=B.T;B.T=null;var c=K.p;try{K.p=2,bs(e,t,n,l)}finally{K.p=c,B.T=i}}function Oy(e,t,n,l){var i=B.T;B.T=null;var c=K.p;try{K.p=8,bs(e,t,n,l)}finally{K.p=c,B.T=i}}function bs(e,t,n,l){if(fo){var i=Ss(l);if(i===null)rs(e,t,l,ho,n),Vp(e,l);else if(ky(i,e,t,n,l))l.stopPropagation();else if(Vp(e,l),t&4&&-1<Ny.indexOf(e)){for(;i!==null;){var c=Xa(i);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var h=ya(c.pendingLanes);if(h!==0){var g=c;for(g.pendingLanes|=2,g.entangledLanes|=2;h;){var j=1<<31-At(h);g.entanglements[1]|=j,h&=~j}rn(c),(Ee&6)===0&&(Kr=Tt()+500,Ai(0))}}break;case 31:case 13:g=ja(c,2),g!==null&&jt(g,c,2),Fr(),vs(c,2)}if(c=Ss(l),c===null&&rs(e,t,l,ho,n),c===i)break;i=c}i!==null&&l.stopPropagation()}else rs(e,t,l,null,n)}}function Ss(e){return e=jc(e),ws(e)}var ho=null;function ws(e){if(ho=null,e=qa(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ho=e,null}function Xp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(x2()){case If:return 2;case Pf:return 8;case tr:case y2:return 32;case ed:return 268435456;default:return 32}default:return 32}}var js=!1,ia=null,ra=null,oa=null,Di=new Map,Bi=new Map,ca=[],Ny="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vp(e,t){switch(e){case"focusin":case"focusout":ia=null;break;case"dragenter":case"dragleave":ra=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":Di.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bi.delete(t.pointerId)}}function Li(e,t,n,l,i,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:c,targetContainers:[i]},t!==null&&(t=Xa(t),t!==null&&Gp(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ky(e,t,n,l,i){switch(t){case"focusin":return ia=Li(ia,e,t,n,l,i),!0;case"dragenter":return ra=Li(ra,e,t,n,l,i),!0;case"mouseover":return oa=Li(oa,e,t,n,l,i),!0;case"pointerover":var c=i.pointerId;return Di.set(c,Li(Di.get(c)||null,e,t,n,l,i)),!0;case"gotpointercapture":return c=i.pointerId,Bi.set(c,Li(Bi.get(c)||null,e,t,n,l,i)),!0}return!1}function Qp(e){var t=qa(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,rd(e.priority,function(){qp(n)});return}}else if(t===31){if(t=y(n),t!==null){e.blockedOn=t,rd(e.priority,function(){qp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function po(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ss(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);wc=l,n.target.dispatchEvent(l),wc=null}else return t=Xa(n),t!==null&&Gp(t),e.blockedOn=n,!1;t.shift()}return!0}function Zp(e,t,n){po(e)&&n.delete(t)}function _y(){js=!1,ia!==null&&po(ia)&&(ia=null),ra!==null&&po(ra)&&(ra=null),oa!==null&&po(oa)&&(oa=null),Di.forEach(Zp),Bi.forEach(Zp)}function mo(e,t){e.blockedOn===t&&(e.blockedOn=null,js||(js=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,_y)))}var go=null;function Kp(e){go!==e&&(go=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){go===e&&(go=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],i=e[t+2];if(typeof l!="function"){if(ws(l||n)===null)continue;break}var c=Xa(n);c!==null&&(e.splice(t,3),t-=3,Su(c,{pending:!0,data:i,method:n.method,action:l},l,i))}}))}function Cl(e){function t(j){return mo(j,e)}ia!==null&&mo(ia,e),ra!==null&&mo(ra,e),oa!==null&&mo(oa,e),Di.forEach(t),Bi.forEach(t);for(var n=0;n<ca.length;n++){var l=ca[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ca.length&&(n=ca[0],n.blockedOn===null);)Qp(n),n.blockedOn===null&&ca.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var i=n[l],c=n[l+1],h=i[xt]||null;if(typeof c=="function")h||Kp(n);else if(h){var g=null;if(c&&c.hasAttribute("formAction")){if(i=c,h=c[xt]||null)g=h.formAction;else if(ws(i)!==null)continue}else g=h.action;typeof g=="function"?n[l+1]=g:(n.splice(l,3),l-=3),Kp(n)}}}function Jp(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(h){return i=h})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Es(e){this._internalRoot=e}xo.prototype.render=Es.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,l=Dt();Hp(n,l,e,t,null,null)},xo.prototype.unmount=Es.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hp(e.current,2,null,e,null,null),Fr(),t[Ga]=null}};function xo(e){this._internalRoot=e}xo.prototype.unstable_scheduleHydration=function(e){if(e){var t=id();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ca.length&&t!==0&&t<ca[n].priority;n++);ca.splice(n,0,e),n===0&&Qp(e)}};var Fp=r.version;if(Fp!=="19.2.0")throw Error(o(527,Fp,"19.2.0"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=m(t),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var $y={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yo.isDisabled&&yo.supportsFiber)try{Zl=yo.inject($y),Mt=yo}catch{}}return Hi.createRoot=function(e,t){if(!f(e))throw Error(o(299));var n=!1,l="",i=ah,c=lh,h=ih;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),t=Lp(e,1,!1,null,null,n,l,null,i,c,h,Jp),e[Ga]=t.current,is(e),new Es(t)},Hi.hydrateRoot=function(e,t,n){if(!f(e))throw Error(o(299));var l=!1,i="",c=ah,h=lh,g=ih,j=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.formState!==void 0&&(j=n.formState)),t=Lp(e,1,!0,t,n??null,l,i,j,c,h,g,Jp),t.context=Up(null),n=t.current,l=Dt(),l=pc(l),i=Zn(l),i.callback=null,Kn(n,i,l),n=l,t.current.lanes=n,Jl(t,n),rn(t),e[Ga]=t.current,is(e),new xo(t)},Hi.version="19.2.0",Hi}var r1;function Xy(){if(r1)return Ts.exports;r1=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Ts.exports=qy(),Ts.exports}var Vy=Xy();const Qy=Fi(Vy);/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var o1="popstate";function Zy(a={}){function r(o,f){let{pathname:d,search:p,hash:y}=o.location;return cf("",{pathname:d,search:p,hash:y},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function u(o,f){return typeof f=="string"?f:Zi(f)}return Jy(r,u,null,a)}function Ye(a,r){if(a===!1||a===null||typeof a>"u")throw new Error(r)}function un(a,r){if(!a){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Ky(){return Math.random().toString(36).substring(2,10)}function c1(a,r){return{usr:a.state,key:a.key,idx:r}}function cf(a,r,u=null,o){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof r=="string"?Hl(r):r,state:u,key:r&&r.key||o||Ky()}}function Zi({pathname:a="/",search:r="",hash:u=""}){return r&&r!=="?"&&(a+=r.charAt(0)==="?"?r:"?"+r),u&&u!=="#"&&(a+=u.charAt(0)==="#"?u:"#"+u),a}function Hl(a){let r={};if(a){let u=a.indexOf("#");u>=0&&(r.hash=a.substring(u),a=a.substring(0,u));let o=a.indexOf("?");o>=0&&(r.search=a.substring(o),a=a.substring(0,o)),a&&(r.pathname=a)}return r}function Jy(a,r,u,o={}){let{window:f=document.defaultView,v5Compat:d=!1}=o,p=f.history,y="POP",x=null,m=S();m==null&&(m=0,p.replaceState({...p.state,idx:m},""));function S(){return(p.state||{idx:null}).idx}function w(){y="POP";let _=S(),L=_==null?null:_-m;m=_,x&&x({action:y,location:D.location,delta:L})}function z(_,L){y="PUSH";let H=cf(D.location,_,L);m=S()+1;let O=c1(H,m),X=D.createHref(H);try{p.pushState(O,"",X)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;f.location.assign(X)}d&&x&&x({action:y,location:D.location,delta:1})}function N(_,L){y="REPLACE";let H=cf(D.location,_,L);m=S();let O=c1(H,m),X=D.createHref(H);p.replaceState(O,"",X),d&&x&&x({action:y,location:D.location,delta:0})}function M(_){return Fy(_)}let D={get action(){return y},get location(){return a(f,p)},listen(_){if(x)throw new Error("A history only accepts one active listener");return f.addEventListener(o1,w),x=_,()=>{f.removeEventListener(o1,w),x=null}},createHref(_){return r(f,_)},createURL:M,encodeLocation(_){let L=M(_);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:z,replace:N,go(_){return p.go(_)}};return D}function Fy(a,r=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Ye(u,"No window.location.(origin|href) available to create URL");let o=typeof a=="string"?a:Zi(a);return o=o.replace(/ $/,"%20"),!r&&o.startsWith("//")&&(o=u+o),new URL(o,u)}function Om(a,r,u="/"){return Wy(a,r,u,!1)}function Wy(a,r,u,o){let f=typeof r=="string"?Hl(r):r,d=$n(f.pathname||"/",u);if(d==null)return null;let p=Nm(a);Iy(p);let y=null;for(let x=0;y==null&&x<p.length;++x){let m=uv(d);y=ov(p[x],m,o)}return y}function Nm(a,r=[],u=[],o="",f=!1){let d=(p,y,x=f,m)=>{let S={relativePath:m===void 0?p.path||"":m,caseSensitive:p.caseSensitive===!0,childrenIndex:y,route:p};if(S.relativePath.startsWith("/")){if(!S.relativePath.startsWith(o)&&x)return;Ye(S.relativePath.startsWith(o),`Absolute route path "${S.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),S.relativePath=S.relativePath.slice(o.length)}let w=kn([o,S.relativePath]),z=u.concat(S);p.children&&p.children.length>0&&(Ye(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),Nm(p.children,r,z,w,x)),!(p.path==null&&!p.index)&&r.push({path:w,score:iv(w,p.index),routesMeta:z})};return a.forEach((p,y)=>{if(p.path===""||!p.path?.includes("?"))d(p,y);else for(let x of km(p.path))d(p,y,!0,x)}),r}function km(a){let r=a.split("/");if(r.length===0)return[];let[u,...o]=r,f=u.endsWith("?"),d=u.replace(/\?$/,"");if(o.length===0)return f?[d,""]:[d];let p=km(o.join("/")),y=[];return y.push(...p.map(x=>x===""?d:[d,x].join("/"))),f&&y.push(...p),y.map(x=>a.startsWith("/")&&x===""?"/":x)}function Iy(a){a.sort((r,u)=>r.score!==u.score?u.score-r.score:rv(r.routesMeta.map(o=>o.childrenIndex),u.routesMeta.map(o=>o.childrenIndex)))}var Py=/^:[\w-]+$/,ev=3,tv=2,nv=1,av=10,lv=-2,u1=a=>a==="*";function iv(a,r){let u=a.split("/"),o=u.length;return u.some(u1)&&(o+=lv),r&&(o+=tv),u.filter(f=>!u1(f)).reduce((f,d)=>f+(Py.test(d)?ev:d===""?nv:av),o)}function rv(a,r){return a.length===r.length&&a.slice(0,-1).every((o,f)=>o===r[f])?a[a.length-1]-r[r.length-1]:0}function ov(a,r,u=!1){let{routesMeta:o}=a,f={},d="/",p=[];for(let y=0;y<o.length;++y){let x=o[y],m=y===o.length-1,S=d==="/"?r:r.slice(d.length)||"/",w=Ho({path:x.relativePath,caseSensitive:x.caseSensitive,end:m},S),z=x.route;if(!w&&m&&u&&!o[o.length-1].route.index&&(w=Ho({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},S)),!w)return null;Object.assign(f,w.params),p.push({params:f,pathname:kn([d,w.pathname]),pathnameBase:hv(kn([d,w.pathnameBase])),route:z}),w.pathnameBase!=="/"&&(d=kn([d,w.pathnameBase]))}return p}function Ho(a,r){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[u,o]=cv(a.path,a.caseSensitive,a.end),f=r.match(u);if(!f)return null;let d=f[0],p=d.replace(/(.)\/+$/,"$1"),y=f.slice(1);return{params:o.reduce((m,{paramName:S,isOptional:w},z)=>{if(S==="*"){let M=y[z]||"";p=d.slice(0,d.length-M.length).replace(/(.)\/+$/,"$1")}const N=y[z];return w&&!N?m[S]=void 0:m[S]=(N||"").replace(/%2F/g,"/"),m},{}),pathname:d,pathnameBase:p,pattern:a}}function cv(a,r=!1,u=!0){un(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let o=[],f="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,y,x)=>(o.push({paramName:y,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(o.push({paramName:"*"}),f+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":a!==""&&a!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,r?void 0:"i"),o]}function uv(a){try{return a.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return un(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),a}}function $n(a,r){if(r==="/")return a;if(!a.toLowerCase().startsWith(r.toLowerCase()))return null;let u=r.endsWith("/")?r.length-1:r.length,o=a.charAt(u);return o&&o!=="/"?null:a.slice(u)||"/"}function sv(a,r="/"){let{pathname:u,search:o="",hash:f=""}=typeof a=="string"?Hl(a):a;return{pathname:u?u.startsWith("/")?u:fv(u,r):r,search:pv(o),hash:mv(f)}}function fv(a,r){let u=r.replace(/\/+$/,"").split("/");return a.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function Os(a,r,u,o){return`Cannot include a '${a}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dv(a){return a.filter((r,u)=>u===0||r.route.path&&r.route.path.length>0)}function _m(a){let r=dv(a);return r.map((u,o)=>o===r.length-1?u.pathname:u.pathnameBase)}function $m(a,r,u,o=!1){let f;typeof a=="string"?f=Hl(a):(f={...a},Ye(!f.pathname||!f.pathname.includes("?"),Os("?","pathname","search",f)),Ye(!f.pathname||!f.pathname.includes("#"),Os("#","pathname","hash",f)),Ye(!f.search||!f.search.includes("#"),Os("#","search","hash",f)));let d=a===""||f.pathname==="",p=d?"/":f.pathname,y;if(p==null)y=u;else{let w=r.length-1;if(!o&&p.startsWith("..")){let z=p.split("/");for(;z[0]==="..";)z.shift(),w-=1;f.pathname=z.join("/")}y=w>=0?r[w]:"/"}let x=sv(f,y),m=p&&p!=="/"&&p.endsWith("/"),S=(d||p===".")&&u.endsWith("/");return!x.pathname.endsWith("/")&&(m||S)&&(x.pathname+="/"),x}var kn=a=>a.join("/").replace(/\/\/+/g,"/"),hv=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),pv=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,mv=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function gv(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var Dm=["POST","PUT","PATCH","DELETE"];new Set(Dm);var xv=["GET",...Dm];new Set(xv);var Yl=v.createContext(null);Yl.displayName="DataRouter";var Fo=v.createContext(null);Fo.displayName="DataRouterState";v.createContext(!1);var Bm=v.createContext({isTransitioning:!1});Bm.displayName="ViewTransition";var yv=v.createContext(new Map);yv.displayName="Fetchers";var vv=v.createContext(null);vv.displayName="Await";var sn=v.createContext(null);sn.displayName="Navigation";var Wi=v.createContext(null);Wi.displayName="Location";var Dn=v.createContext({outlet:null,matches:[],isDataRoute:!1});Dn.displayName="Route";var Ef=v.createContext(null);Ef.displayName="RouteError";function bv(a,{relative:r}={}){Ye(Ii(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:o}=v.useContext(sn),{hash:f,pathname:d,search:p}=Pi(a,{relative:r}),y=d;return u!=="/"&&(y=d==="/"?u:kn([u,d])),o.createHref({pathname:y,search:p,hash:f})}function Ii(){return v.useContext(Wi)!=null}function Bn(){return Ye(Ii(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(Wi).location}var Lm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Um(a){v.useContext(sn).static||v.useLayoutEffect(a)}function Cf(){let{isDataRoute:a}=v.useContext(Dn);return a?kv():Sv()}function Sv(){Ye(Ii(),"useNavigate() may be used only in the context of a <Router> component.");let a=v.useContext(Yl),{basename:r,navigator:u}=v.useContext(sn),{matches:o}=v.useContext(Dn),{pathname:f}=Bn(),d=JSON.stringify(_m(o)),p=v.useRef(!1);return Um(()=>{p.current=!0}),v.useCallback((x,m={})=>{if(un(p.current,Lm),!p.current)return;if(typeof x=="number"){u.go(x);return}let S=$m(x,JSON.parse(d),f,m.relative==="path");a==null&&r!=="/"&&(S.pathname=S.pathname==="/"?r:kn([r,S.pathname])),(m.replace?u.replace:u.push)(S,m.state,m)},[r,u,d,f,a])}v.createContext(null);function Pi(a,{relative:r}={}){let{matches:u}=v.useContext(Dn),{pathname:o}=Bn(),f=JSON.stringify(_m(u));return v.useMemo(()=>$m(a,JSON.parse(f),o,r==="path"),[a,f,o,r])}function wv(a,r){return Hm(a,r)}function Hm(a,r,u,o,f){Ye(Ii(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=v.useContext(sn),{matches:p}=v.useContext(Dn),y=p[p.length-1],x=y?y.params:{},m=y?y.pathname:"/",S=y?y.pathnameBase:"/",w=y&&y.route;{let H=w&&w.path||"";Ym(m,!w||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let z=Bn(),N;if(r){let H=typeof r=="string"?Hl(r):r;Ye(S==="/"||H.pathname?.startsWith(S),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${H.pathname}" was given in the \`location\` prop.`),N=H}else N=z;let M=N.pathname||"/",D=M;if(S!=="/"){let H=S.replace(/^\//,"").split("/");D="/"+M.replace(/^\//,"").split("/").slice(H.length).join("/")}let _=Om(a,{pathname:D});un(w||_!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),un(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=Tv(_&&_.map(H=>Object.assign({},H,{params:Object.assign({},x,H.params),pathname:kn([S,d.encodeLocation?d.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?S:kn([S,d.encodeLocation?d.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),p,u,o,f);return r&&L?v.createElement(Wi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...N},navigationType:"POP"}},L):L}function jv(){let a=Nv(),r=gv(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),u=a instanceof Error?a.stack:null,o="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:o},d={padding:"2px 4px",backgroundColor:o},p=null;return console.error("Error handled by React Router default ErrorBoundary:",a),p=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:d},"ErrorBoundary")," or"," ",v.createElement("code",{style:d},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},r),u?v.createElement("pre",{style:f},u):null,p)}var Ev=v.createElement(jv,null),Cv=class extends v.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,r){return r.location!==a.location||r.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:r.error,location:r.location,revalidation:a.revalidation||r.revalidation}}componentDidCatch(a,r){this.props.unstable_onError?this.props.unstable_onError(a,r):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?v.createElement(Dn.Provider,{value:this.props.routeContext},v.createElement(Ef.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function zv({routeContext:a,match:r,children:u}){let o=v.useContext(Yl);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),v.createElement(Dn.Provider,{value:a},u)}function Tv(a,r=[],u=null,o=null,f=null){if(a==null){if(!u)return null;if(u.errors)a=u.matches;else if(r.length===0&&!u.initialized&&u.matches.length>0)a=u.matches;else return null}let d=a,p=u?.errors;if(p!=null){let m=d.findIndex(S=>S.route.id&&p?.[S.route.id]!==void 0);Ye(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),d=d.slice(0,Math.min(d.length,m+1))}let y=!1,x=-1;if(u)for(let m=0;m<d.length;m++){let S=d[m];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(x=m),S.route.id){let{loaderData:w,errors:z}=u,N=S.route.loader&&!w.hasOwnProperty(S.route.id)&&(!z||z[S.route.id]===void 0);if(S.route.lazy||N){y=!0,x>=0?d=d.slice(0,x+1):d=[d[0]];break}}}return d.reduceRight((m,S,w)=>{let z,N=!1,M=null,D=null;u&&(z=p&&S.route.id?p[S.route.id]:void 0,M=S.route.errorElement||Ev,y&&(x<0&&w===0?(Ym("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),N=!0,D=null):x===w&&(N=!0,D=S.route.hydrateFallbackElement||null)));let _=r.concat(d.slice(0,w+1)),L=()=>{let H;return z?H=M:N?H=D:S.route.Component?H=v.createElement(S.route.Component,null):S.route.element?H=S.route.element:H=m,v.createElement(zv,{match:S,routeContext:{outlet:m,matches:_,isDataRoute:u!=null},children:H})};return u&&(S.route.ErrorBoundary||S.route.errorElement||w===0)?v.createElement(Cv,{location:u.location,revalidation:u.revalidation,component:M,error:z,children:L(),routeContext:{outlet:null,matches:_,isDataRoute:!0},unstable_onError:o}):L()},null)}function zf(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mv(a){let r=v.useContext(Yl);return Ye(r,zf(a)),r}function Av(a){let r=v.useContext(Fo);return Ye(r,zf(a)),r}function Rv(a){let r=v.useContext(Dn);return Ye(r,zf(a)),r}function Tf(a){let r=Rv(a),u=r.matches[r.matches.length-1];return Ye(u.route.id,`${a} can only be used on routes that contain a unique "id"`),u.route.id}function Ov(){return Tf("useRouteId")}function Nv(){let a=v.useContext(Ef),r=Av("useRouteError"),u=Tf("useRouteError");return a!==void 0?a:r.errors?.[u]}function kv(){let{router:a}=Mv("useNavigate"),r=Tf("useNavigate"),u=v.useRef(!1);return Um(()=>{u.current=!0}),v.useCallback(async(f,d={})=>{un(u.current,Lm),u.current&&(typeof f=="number"?a.navigate(f):await a.navigate(f,{fromRouteId:r,...d}))},[a,r])}var s1={};function Ym(a,r,u){!r&&!s1[a]&&(s1[a]=!0,un(!1,u))}v.memo(_v);function _v({routes:a,future:r,state:u,unstable_onError:o}){return Hm(a,void 0,u,o,r)}function Da(a){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function $v({basename:a="/",children:r=null,location:u,navigationType:o="POP",navigator:f,static:d=!1}){Ye(!Ii(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=a.replace(/^\/*/,"/"),y=v.useMemo(()=>({basename:p,navigator:f,static:d,future:{}}),[p,f,d]);typeof u=="string"&&(u=Hl(u));let{pathname:x="/",search:m="",hash:S="",state:w=null,key:z="default"}=u,N=v.useMemo(()=>{let M=$n(x,p);return M==null?null:{location:{pathname:M,search:m,hash:S,state:w,key:z},navigationType:o}},[p,x,m,S,w,z,o]);return un(N!=null,`<Router basename="${p}"> is not able to match the URL "${x}${m}${S}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:v.createElement(sn.Provider,{value:y},v.createElement(Wi.Provider,{children:r,value:N}))}function Dv({children:a,location:r}){return wv(uf(a),r)}function uf(a,r=[]){let u=[];return v.Children.forEach(a,(o,f)=>{if(!v.isValidElement(o))return;let d=[...r,f];if(o.type===v.Fragment){u.push.apply(u,uf(o.props.children,d));return}Ye(o.type===Da,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!o.props.index||!o.props.children,"An index route cannot have child routes.");let p={id:o.props.id||d.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(p.children=uf(o.props.children,d)),u.push(p)}),u}var No="get",ko="application/x-www-form-urlencoded";function Wo(a){return a!=null&&typeof a.tagName=="string"}function Bv(a){return Wo(a)&&a.tagName.toLowerCase()==="button"}function Lv(a){return Wo(a)&&a.tagName.toLowerCase()==="form"}function Uv(a){return Wo(a)&&a.tagName.toLowerCase()==="input"}function Hv(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function Yv(a,r){return a.button===0&&(!r||r==="_self")&&!Hv(a)}var vo=null;function Gv(){if(vo===null)try{new FormData(document.createElement("form"),0),vo=!1}catch{vo=!0}return vo}var qv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ns(a){return a!=null&&!qv.has(a)?(un(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ko}"`),null):a}function Xv(a,r){let u,o,f,d,p;if(Lv(a)){let y=a.getAttribute("action");o=y?$n(y,r):null,u=a.getAttribute("method")||No,f=Ns(a.getAttribute("enctype"))||ko,d=new FormData(a)}else if(Bv(a)||Uv(a)&&(a.type==="submit"||a.type==="image")){let y=a.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=a.getAttribute("formaction")||y.getAttribute("action");if(o=x?$n(x,r):null,u=a.getAttribute("formmethod")||y.getAttribute("method")||No,f=Ns(a.getAttribute("formenctype"))||Ns(y.getAttribute("enctype"))||ko,d=new FormData(y,a),!Gv()){let{name:m,type:S,value:w}=a;if(S==="image"){let z=m?`${m}.`:"";d.append(`${z}x`,"0"),d.append(`${z}y`,"0")}else m&&d.append(m,w)}}else{if(Wo(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=No,o=null,f=ko,p=a}return d&&f==="text/plain"&&(p=d,d=void 0),{action:o,method:u.toLowerCase(),encType:f,formData:d,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Mf(a,r){if(a===!1||a===null||typeof a>"u")throw new Error(r)}function Vv(a,r,u){let o=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return o.pathname==="/"?o.pathname=`_root.${u}`:r&&$n(o.pathname,r)==="/"?o.pathname=`${r.replace(/\/$/,"")}/_root.${u}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${u}`,o}async function Qv(a,r){if(a.id in r)return r[a.id];try{let u=await import(a.module);return r[a.id]=u,u}catch(u){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Zv(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Kv(a,r,u){let o=await Promise.all(a.map(async f=>{let d=r.routes[f.route.id];if(d){let p=await Qv(d,u);return p.links?p.links():[]}return[]}));return Iv(o.flat(1).filter(Zv).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function f1(a,r,u,o,f,d){let p=(x,m)=>u[m]?x.route.id!==u[m].route.id:!0,y=(x,m)=>u[m].pathname!==x.pathname||u[m].route.path?.endsWith("*")&&u[m].params["*"]!==x.params["*"];return d==="assets"?r.filter((x,m)=>p(x,m)||y(x,m)):d==="data"?r.filter((x,m)=>{let S=o.routes[x.route.id];if(!S||!S.hasLoader)return!1;if(p(x,m)||y(x,m))return!0;if(x.route.shouldRevalidate){let w=x.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function Jv(a,r,{includeHydrateFallback:u}={}){return Fv(a.map(o=>{let f=r.routes[o.route.id];if(!f)return[];let d=[f.module];return f.clientActionModule&&(d=d.concat(f.clientActionModule)),f.clientLoaderModule&&(d=d.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(d=d.concat(f.hydrateFallbackModule)),f.imports&&(d=d.concat(f.imports)),d}).flat(1))}function Fv(a){return[...new Set(a)]}function Wv(a){let r={},u=Object.keys(a).sort();for(let o of u)r[o]=a[o];return r}function Iv(a,r){let u=new Set;return new Set(r),a.reduce((o,f)=>{let d=JSON.stringify(Wv(f));return u.has(d)||(u.add(d),o.push({key:d,link:f})),o},[])}function Gm(){let a=v.useContext(Yl);return Mf(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function Pv(){let a=v.useContext(Fo);return Mf(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Af=v.createContext(void 0);Af.displayName="FrameworkContext";function qm(){let a=v.useContext(Af);return Mf(a,"You must render this element inside a <HydratedRouter> element"),a}function eb(a,r){let u=v.useContext(Af),[o,f]=v.useState(!1),[d,p]=v.useState(!1),{onFocus:y,onBlur:x,onMouseEnter:m,onMouseLeave:S,onTouchStart:w}=r,z=v.useRef(null);v.useEffect(()=>{if(a==="render"&&p(!0),a==="viewport"){let D=L=>{L.forEach(H=>{p(H.isIntersecting)})},_=new IntersectionObserver(D,{threshold:.5});return z.current&&_.observe(z.current),()=>{_.disconnect()}}},[a]),v.useEffect(()=>{if(o){let D=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(D)}}},[o]);let N=()=>{f(!0)},M=()=>{f(!1),p(!1)};return u?a!=="intent"?[d,z,{}]:[d,z,{onFocus:Yi(y,N),onBlur:Yi(x,M),onMouseEnter:Yi(m,N),onMouseLeave:Yi(S,M),onTouchStart:Yi(w,N)}]:[!1,z,{}]}function Yi(a,r){return u=>{a&&a(u),u.defaultPrevented||r(u)}}function tb({page:a,...r}){let{router:u}=Gm(),o=v.useMemo(()=>Om(u.routes,a,u.basename),[u.routes,a,u.basename]);return o?v.createElement(ab,{page:a,matches:o,...r}):null}function nb(a){let{manifest:r,routeModules:u}=qm(),[o,f]=v.useState([]);return v.useEffect(()=>{let d=!1;return Kv(a,r,u).then(p=>{d||f(p)}),()=>{d=!0}},[a,r,u]),o}function ab({page:a,matches:r,...u}){let o=Bn(),{manifest:f,routeModules:d}=qm(),{basename:p}=Gm(),{loaderData:y,matches:x}=Pv(),m=v.useMemo(()=>f1(a,r,x,f,o,"data"),[a,r,x,f,o]),S=v.useMemo(()=>f1(a,r,x,f,o,"assets"),[a,r,x,f,o]),w=v.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let M=new Set,D=!1;if(r.forEach(L=>{let H=f.routes[L.route.id];!H||!H.hasLoader||(!m.some(O=>O.route.id===L.route.id)&&L.route.id in y&&d[L.route.id]?.shouldRevalidate||H.hasClientLoader?D=!0:M.add(L.route.id))}),M.size===0)return[];let _=Vv(a,p,"data");return D&&M.size>0&&_.searchParams.set("_routes",r.filter(L=>M.has(L.route.id)).map(L=>L.route.id).join(",")),[_.pathname+_.search]},[p,y,o,f,m,r,a,d]),z=v.useMemo(()=>Jv(S,f),[S,f]),N=nb(S);return v.createElement(v.Fragment,null,w.map(M=>v.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...u})),z.map(M=>v.createElement("link",{key:M,rel:"modulepreload",href:M,...u})),N.map(({key:M,link:D})=>v.createElement("link",{key:M,nonce:u.nonce,...D})))}function lb(...a){return r=>{a.forEach(u=>{typeof u=="function"?u(r):u!=null&&(u.current=r)})}}var Xm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Xm&&(window.__reactRouterVersion="7.9.4")}catch{}function ib({basename:a,children:r,window:u}){let o=v.useRef();o.current==null&&(o.current=Zy({window:u,v5Compat:!0}));let f=o.current,[d,p]=v.useState({action:f.action,location:f.location}),y=v.useCallback(x=>{v.startTransition(()=>p(x))},[p]);return v.useLayoutEffect(()=>f.listen(y),[f,y]),v.createElement($v,{basename:a,children:r,location:d.location,navigationType:d.action,navigator:f})}var Vm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gl=v.forwardRef(function({onClick:r,discover:u="render",prefetch:o="none",relative:f,reloadDocument:d,replace:p,state:y,target:x,to:m,preventScrollReset:S,viewTransition:w,...z},N){let{basename:M}=v.useContext(sn),D=typeof m=="string"&&Vm.test(m),_,L=!1;if(typeof m=="string"&&D&&(_=m,Xm))try{let I=new URL(window.location.href),oe=m.startsWith("//")?new URL(I.protocol+m):new URL(m),ze=$n(oe.pathname,M);oe.origin===I.origin&&ze!=null?m=ze+oe.search+oe.hash:L=!0}catch{un(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let H=bv(m,{relative:f}),[O,X,Z]=eb(o,z),U=ub(m,{replace:p,state:y,target:x,preventScrollReset:S,relative:f,viewTransition:w});function Q(I){r&&r(I),I.defaultPrevented||U(I)}let ee=v.createElement("a",{...z,...Z,href:_||H,onClick:L||d?r:Q,ref:lb(N,X),target:x,"data-discover":!D&&u==="render"?"true":void 0});return O&&!D?v.createElement(v.Fragment,null,ee,v.createElement(tb,{page:H})):ee});Gl.displayName="Link";var rb=v.forwardRef(function({"aria-current":r="page",caseSensitive:u=!1,className:o="",end:f=!1,style:d,to:p,viewTransition:y,children:x,...m},S){let w=Pi(p,{relative:m.relative}),z=Bn(),N=v.useContext(Fo),{navigator:M,basename:D}=v.useContext(sn),_=N!=null&&pb(w)&&y===!0,L=M.encodeLocation?M.encodeLocation(w).pathname:w.pathname,H=z.pathname,O=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;u||(H=H.toLowerCase(),O=O?O.toLowerCase():null,L=L.toLowerCase()),O&&D&&(O=$n(O,D)||O);const X=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let Z=H===L||!f&&H.startsWith(L)&&H.charAt(X)==="/",U=O!=null&&(O===L||!f&&O.startsWith(L)&&O.charAt(L.length)==="/"),Q={isActive:Z,isPending:U,isTransitioning:_},ee=Z?r:void 0,I;typeof o=="function"?I=o(Q):I=[o,Z?"active":null,U?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let oe=typeof d=="function"?d(Q):d;return v.createElement(Gl,{...m,"aria-current":ee,className:I,ref:S,style:oe,to:p,viewTransition:y},typeof x=="function"?x(Q):x)});rb.displayName="NavLink";var ob=v.forwardRef(({discover:a="render",fetcherKey:r,navigate:u,reloadDocument:o,replace:f,state:d,method:p=No,action:y,onSubmit:x,relative:m,preventScrollReset:S,viewTransition:w,...z},N)=>{let M=db(),D=hb(y,{relative:m}),_=p.toLowerCase()==="get"?"get":"post",L=typeof y=="string"&&Vm.test(y),H=O=>{if(x&&x(O),O.defaultPrevented)return;O.preventDefault();let X=O.nativeEvent.submitter,Z=X?.getAttribute("formmethod")||p;M(X||O.currentTarget,{fetcherKey:r,method:Z,navigate:u,replace:f,state:d,relative:m,preventScrollReset:S,viewTransition:w})};return v.createElement("form",{ref:N,method:_,action:D,onSubmit:o?x:H,...z,"data-discover":!L&&a==="render"?"true":void 0})});ob.displayName="Form";function cb(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Qm(a){let r=v.useContext(Yl);return Ye(r,cb(a)),r}function ub(a,{target:r,replace:u,state:o,preventScrollReset:f,relative:d,viewTransition:p}={}){let y=Cf(),x=Bn(),m=Pi(a,{relative:d});return v.useCallback(S=>{if(Yv(S,r)){S.preventDefault();let w=u!==void 0?u:Zi(x)===Zi(m);y(a,{replace:w,state:o,preventScrollReset:f,relative:d,viewTransition:p})}},[x,y,m,u,o,r,a,f,d,p])}var sb=0,fb=()=>`__${String(++sb)}__`;function db(){let{router:a}=Qm("useSubmit"),{basename:r}=v.useContext(sn),u=Ov();return v.useCallback(async(o,f={})=>{let{action:d,method:p,encType:y,formData:x,body:m}=Xv(o,r);if(f.navigate===!1){let S=f.fetcherKey||fb();await a.fetch(S,u,f.action||d,{preventScrollReset:f.preventScrollReset,formData:x,body:m,formMethod:f.method||p,formEncType:f.encType||y,flushSync:f.flushSync})}else await a.navigate(f.action||d,{preventScrollReset:f.preventScrollReset,formData:x,body:m,formMethod:f.method||p,formEncType:f.encType||y,replace:f.replace,state:f.state,fromRouteId:u,flushSync:f.flushSync,viewTransition:f.viewTransition})},[a,r,u])}function hb(a,{relative:r}={}){let{basename:u}=v.useContext(sn),o=v.useContext(Dn);Ye(o,"useFormAction must be used inside a RouteContext");let[f]=o.matches.slice(-1),d={...Pi(a||".",{relative:r})},p=Bn();if(a==null){d.search=p.search;let y=new URLSearchParams(d.search),x=y.getAll("index");if(x.some(S=>S==="")){y.delete("index"),x.filter(w=>w).forEach(w=>y.append("index",w));let S=y.toString();d.search=S?`?${S}`:""}}return(!a||a===".")&&f.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(d.pathname=d.pathname==="/"?u:kn([u,d.pathname])),Zi(d)}function pb(a,{relative:r}={}){let u=v.useContext(Bm);Ye(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Qm("useViewTransitionState"),f=Pi(a,{relative:r});if(!u.isTransitioning)return!1;let d=$n(u.currentLocation.pathname,o)||u.currentLocation.pathname,p=$n(u.nextLocation.pathname,o)||u.nextLocation.pathname;return Ho(f.pathname,p)!=null||Ho(f.pathname,d)!=null}var mb=Rm();const Ol=Fi(mb);var pt=function(){return pt=Object.assign||function(r){for(var u,o=1,f=arguments.length;o<f;o++){u=arguments[o];for(var d in u)Object.prototype.hasOwnProperty.call(u,d)&&(r[d]=u[d])}return r},pt.apply(this,arguments)};function _l(a,r,u){if(u||arguments.length===2)for(var o=0,f=r.length,d;o<f;o++)(d||!(o in r))&&(d||(d=Array.prototype.slice.call(r,0,o)),d[o]=r[o]);return a.concat(d||Array.prototype.slice.call(r))}var Be="-ms-",Vi="-moz-",Ce="-webkit-",Zm="comm",Io="rule",Rf="decl",gb="@import",Km="@keyframes",xb="@layer",Jm=Math.abs,Of=String.fromCharCode,sf=Object.assign;function yb(a,r){return it(a,0)^45?(((r<<2^it(a,0))<<2^it(a,1))<<2^it(a,2))<<2^it(a,3):0}function Fm(a){return a.trim()}function Rn(a,r){return(a=r.exec(a))?a[0]:a}function he(a,r,u){return a.replace(r,u)}function _o(a,r,u){return a.indexOf(r,u)}function it(a,r){return a.charCodeAt(r)|0}function $l(a,r,u){return a.slice(r,u)}function cn(a){return a.length}function Wm(a){return a.length}function qi(a,r){return r.push(a),a}function vb(a,r){return a.map(r).join("")}function d1(a,r){return a.filter(function(u){return!Rn(u,r)})}var Po=1,Dl=1,Im=0,Jt=0,Ie=0,ql="";function ec(a,r,u,o,f,d,p,y){return{value:a,root:r,parent:u,type:o,props:f,children:d,line:Po,column:Dl,length:p,return:"",siblings:y}}function pa(a,r){return sf(ec("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},r)}function zl(a){for(;a.root;)a=pa(a.root,{children:[a]});qi(a,a.siblings)}function bb(){return Ie}function Sb(){return Ie=Jt>0?it(ql,--Jt):0,Dl--,Ie===10&&(Dl=1,Po--),Ie}function tn(){return Ie=Jt<Im?it(ql,Jt++):0,Dl++,Ie===10&&(Dl=1,Po++),Ie}function Ua(){return it(ql,Jt)}function $o(){return Jt}function tc(a,r){return $l(ql,a,r)}function ff(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wb(a){return Po=Dl=1,Im=cn(ql=a),Jt=0,[]}function jb(a){return ql="",a}function ks(a){return Fm(tc(Jt-1,df(a===91?a+2:a===40?a+1:a)))}function Eb(a){for(;(Ie=Ua())&&Ie<33;)tn();return ff(a)>2||ff(Ie)>3?"":" "}function Cb(a,r){for(;--r&&tn()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return tc(a,$o()+(r<6&&Ua()==32&&tn()==32))}function df(a){for(;tn();)switch(Ie){case a:return Jt;case 34:case 39:a!==34&&a!==39&&df(Ie);break;case 40:a===41&&df(a);break;case 92:tn();break}return Jt}function zb(a,r){for(;tn()&&a+Ie!==57;)if(a+Ie===84&&Ua()===47)break;return"/*"+tc(r,Jt-1)+"*"+Of(a===47?a:tn())}function Tb(a){for(;!ff(Ua());)tn();return tc(a,Jt)}function Mb(a){return jb(Do("",null,null,null,[""],a=wb(a),0,[0],a))}function Do(a,r,u,o,f,d,p,y,x){for(var m=0,S=0,w=p,z=0,N=0,M=0,D=1,_=1,L=1,H=0,O="",X=f,Z=d,U=o,Q=O;_;)switch(M=H,H=tn()){case 40:if(M!=108&&it(Q,w-1)==58){_o(Q+=he(ks(H),"&","&\f"),"&\f",Jm(m?y[m-1]:0))!=-1&&(L=-1);break}case 34:case 39:case 91:Q+=ks(H);break;case 9:case 10:case 13:case 32:Q+=Eb(M);break;case 92:Q+=Cb($o()-1,7);continue;case 47:switch(Ua()){case 42:case 47:qi(Ab(zb(tn(),$o()),r,u,x),x);break;default:Q+="/"}break;case 123*D:y[m++]=cn(Q)*L;case 125*D:case 59:case 0:switch(H){case 0:case 125:_=0;case 59+S:L==-1&&(Q=he(Q,/\f/g,"")),N>0&&cn(Q)-w&&qi(N>32?p1(Q+";",o,u,w-1,x):p1(he(Q," ","")+";",o,u,w-2,x),x);break;case 59:Q+=";";default:if(qi(U=h1(Q,r,u,m,S,f,y,O,X=[],Z=[],w,d),d),H===123)if(S===0)Do(Q,r,U,U,X,d,w,y,Z);else switch(z===99&&it(Q,3)===110?100:z){case 100:case 108:case 109:case 115:Do(a,U,U,o&&qi(h1(a,U,U,0,0,f,y,O,f,X=[],w,Z),Z),f,Z,w,y,o?X:Z);break;default:Do(Q,U,U,U,[""],Z,0,y,Z)}}m=S=N=0,D=L=1,O=Q="",w=p;break;case 58:w=1+cn(Q),N=M;default:if(D<1){if(H==123)--D;else if(H==125&&D++==0&&Sb()==125)continue}switch(Q+=Of(H),H*D){case 38:L=S>0?1:(Q+="\f",-1);break;case 44:y[m++]=(cn(Q)-1)*L,L=1;break;case 64:Ua()===45&&(Q+=ks(tn())),z=Ua(),S=w=cn(O=Q+=Tb($o())),H++;break;case 45:M===45&&cn(Q)==2&&(D=0)}}return d}function h1(a,r,u,o,f,d,p,y,x,m,S,w){for(var z=f-1,N=f===0?d:[""],M=Wm(N),D=0,_=0,L=0;D<o;++D)for(var H=0,O=$l(a,z+1,z=Jm(_=p[D])),X=a;H<M;++H)(X=Fm(_>0?N[H]+" "+O:he(O,/&\f/g,N[H])))&&(x[L++]=X);return ec(a,r,u,f===0?Io:y,x,m,S,w)}function Ab(a,r,u,o){return ec(a,r,u,Zm,Of(bb()),$l(a,2,-2),0,o)}function p1(a,r,u,o,f){return ec(a,r,u,Rf,$l(a,0,o),$l(a,o+1,-1),o,f)}function Pm(a,r,u){switch(yb(a,r)){case 5103:return Ce+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ce+a+a;case 4789:return Vi+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Ce+a+Vi+a+Be+a+a;case 5936:switch(it(a,r+11)){case 114:return Ce+a+Be+he(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Ce+a+Be+he(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Ce+a+Be+he(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Ce+a+Be+a+a;case 6165:return Ce+a+Be+"flex-"+a+a;case 5187:return Ce+a+he(a,/(\w+).+(:[^]+)/,Ce+"box-$1$2"+Be+"flex-$1$2")+a;case 5443:return Ce+a+Be+"flex-item-"+he(a,/flex-|-self/g,"")+(Rn(a,/flex-|baseline/)?"":Be+"grid-row-"+he(a,/flex-|-self/g,""))+a;case 4675:return Ce+a+Be+"flex-line-pack"+he(a,/align-content|flex-|-self/g,"")+a;case 5548:return Ce+a+Be+he(a,"shrink","negative")+a;case 5292:return Ce+a+Be+he(a,"basis","preferred-size")+a;case 6060:return Ce+"box-"+he(a,"-grow","")+Ce+a+Be+he(a,"grow","positive")+a;case 4554:return Ce+he(a,/([^-])(transform)/g,"$1"+Ce+"$2")+a;case 6187:return he(he(he(a,/(zoom-|grab)/,Ce+"$1"),/(image-set)/,Ce+"$1"),a,"")+a;case 5495:case 3959:return he(a,/(image-set\([^]*)/,Ce+"$1$`$1");case 4968:return he(he(a,/(.+:)(flex-)?(.*)/,Ce+"box-pack:$3"+Be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ce+a+a;case 4200:if(!Rn(a,/flex-|baseline/))return Be+"grid-column-align"+$l(a,r)+a;break;case 2592:case 3360:return Be+he(a,"template-","")+a;case 4384:case 3616:return u&&u.some(function(o,f){return r=f,Rn(o.props,/grid-\w+-end/)})?~_o(a+(u=u[r].value),"span",0)?a:Be+he(a,"-start","")+a+Be+"grid-row-span:"+(~_o(u,"span",0)?Rn(u,/\d+/):+Rn(u,/\d+/)-+Rn(a,/\d+/))+";":Be+he(a,"-start","")+a;case 4896:case 4128:return u&&u.some(function(o){return Rn(o.props,/grid-\w+-start/)})?a:Be+he(he(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return he(a,/(.+)-inline(.+)/,Ce+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(cn(a)-1-r>6)switch(it(a,r+1)){case 109:if(it(a,r+4)!==45)break;case 102:return he(a,/(.+:)(.+)-([^]+)/,"$1"+Ce+"$2-$3$1"+Vi+(it(a,r+3)==108?"$3":"$2-$3"))+a;case 115:return~_o(a,"stretch",0)?Pm(he(a,"stretch","fill-available"),r,u)+a:a}break;case 5152:case 5920:return he(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,f,d,p,y,x,m){return Be+f+":"+d+m+(p?Be+f+"-span:"+(y?x:+x-+d)+m:"")+a});case 4949:if(it(a,r+6)===121)return he(a,":",":"+Ce)+a;break;case 6444:switch(it(a,it(a,14)===45?18:11)){case 120:return he(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ce+(it(a,14)===45?"inline-":"")+"box$3$1"+Ce+"$2$3$1"+Be+"$2box$3")+a;case 100:return he(a,":",":"+Be)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return he(a,"scroll-","scroll-snap-")+a}return a}function Yo(a,r){for(var u="",o=0;o<a.length;o++)u+=r(a[o],o,a,r)||"";return u}function Rb(a,r,u,o){switch(a.type){case xb:if(a.children.length)break;case gb:case Rf:return a.return=a.return||a.value;case Zm:return"";case Km:return a.return=a.value+"{"+Yo(a.children,o)+"}";case Io:if(!cn(a.value=a.props.join(",")))return""}return cn(u=Yo(a.children,o))?a.return=a.value+"{"+u+"}":""}function Ob(a){var r=Wm(a);return function(u,o,f,d){for(var p="",y=0;y<r;y++)p+=a[y](u,o,f,d)||"";return p}}function Nb(a){return function(r){r.root||(r=r.return)&&a(r)}}function kb(a,r,u,o){if(a.length>-1&&!a.return)switch(a.type){case Rf:a.return=Pm(a.value,a.length,u);return;case Km:return Yo([pa(a,{value:he(a.value,"@","@"+Ce)})],o);case Io:if(a.length)return vb(u=a.props,function(f){switch(Rn(f,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":zl(pa(a,{props:[he(f,/:(read-\w+)/,":"+Vi+"$1")]})),zl(pa(a,{props:[f]})),sf(a,{props:d1(u,o)});break;case"::placeholder":zl(pa(a,{props:[he(f,/:(plac\w+)/,":"+Ce+"input-$1")]})),zl(pa(a,{props:[he(f,/:(plac\w+)/,":"+Vi+"$1")]})),zl(pa(a,{props:[he(f,/:(plac\w+)/,Be+"input-$1")]})),zl(pa(a,{props:[f]})),sf(a,{props:d1(u,o)});break}return""})}}var _b={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Bt={},Bl=typeof process<"u"&&Bt!==void 0&&(Bt.REACT_APP_SC_ATTR||Bt.SC_ATTR)||"data-styled",eg="active",tg="data-styled-version",nc="6.1.19",Nf=`/*!sc*/
`,Go=typeof window<"u"&&typeof document<"u",$b=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Bt!==void 0&&Bt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Bt.REACT_APP_SC_DISABLE_SPEEDY!==""?Bt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Bt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Bt!==void 0&&Bt.SC_DISABLE_SPEEDY!==void 0&&Bt.SC_DISABLE_SPEEDY!==""&&Bt.SC_DISABLE_SPEEDY!=="false"&&Bt.SC_DISABLE_SPEEDY),Db={},ac=Object.freeze([]),Ll=Object.freeze({});function ng(a,r,u){return u===void 0&&(u=Ll),a.theme!==u.theme&&a.theme||r||u.theme}var ag=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Bb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Lb=/(^-|-$)/g;function m1(a){return a.replace(Bb,"-").replace(Lb,"")}var Ub=/(a)(d)/gi,bo=52,g1=function(a){return String.fromCharCode(a+(a>25?39:97))};function hf(a){var r,u="";for(r=Math.abs(a);r>bo;r=r/bo|0)u=g1(r%bo)+u;return(g1(r%bo)+u).replace(Ub,"$1-$2")}var _s,lg=5381,Nl=function(a,r){for(var u=r.length;u;)a=33*a^r.charCodeAt(--u);return a},ig=function(a){return Nl(lg,a)};function kf(a){return hf(ig(a)>>>0)}function Hb(a){return a.displayName||a.name||"Component"}function $s(a){return typeof a=="string"&&!0}var rg=typeof Symbol=="function"&&Symbol.for,og=rg?Symbol.for("react.memo"):60115,Yb=rg?Symbol.for("react.forward_ref"):60112,Gb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},qb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},cg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xb=((_s={})[Yb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_s[og]=cg,_s);function x1(a){return("type"in(r=a)&&r.type.$$typeof)===og?cg:"$$typeof"in a?Xb[a.$$typeof]:Gb;var r}var Vb=Object.defineProperty,Qb=Object.getOwnPropertyNames,y1=Object.getOwnPropertySymbols,Zb=Object.getOwnPropertyDescriptor,Kb=Object.getPrototypeOf,v1=Object.prototype;function ug(a,r,u){if(typeof r!="string"){if(v1){var o=Kb(r);o&&o!==v1&&ug(a,o,u)}var f=Qb(r);y1&&(f=f.concat(y1(r)));for(var d=x1(a),p=x1(r),y=0;y<f.length;++y){var x=f[y];if(!(x in qb||u&&u[x]||p&&x in p||d&&x in d)){var m=Zb(r,x);try{Vb(a,x,m)}catch{}}}}return a}function Ul(a){return typeof a=="function"}function _f(a){return typeof a=="object"&&"styledComponentId"in a}function La(a,r){return a&&r?"".concat(a," ").concat(r):a||r||""}function qo(a,r){if(a.length===0)return"";for(var u=a[0],o=1;o<a.length;o++)u+=a[o];return u}function Ki(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function pf(a,r,u){if(u===void 0&&(u=!1),!u&&!Ki(a)&&!Array.isArray(a))return r;if(Array.isArray(r))for(var o=0;o<r.length;o++)a[o]=pf(a[o],r[o]);else if(Ki(r))for(var o in r)a[o]=pf(a[o],r[o]);return a}function $f(a,r){Object.defineProperty(a,"toString",{value:r})}function er(a){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var Jb=(function(){function a(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return a.prototype.indexOfGroup=function(r){for(var u=0,o=0;o<r;o++)u+=this.groupSizes[o];return u},a.prototype.insertRules=function(r,u){if(r>=this.groupSizes.length){for(var o=this.groupSizes,f=o.length,d=f;r>=d;)if((d<<=1)<0)throw er(16,"".concat(r));this.groupSizes=new Uint32Array(d),this.groupSizes.set(o),this.length=d;for(var p=f;p<d;p++)this.groupSizes[p]=0}for(var y=this.indexOfGroup(r+1),x=(p=0,u.length);p<x;p++)this.tag.insertRule(y,u[p])&&(this.groupSizes[r]++,y++)},a.prototype.clearGroup=function(r){if(r<this.length){var u=this.groupSizes[r],o=this.indexOfGroup(r),f=o+u;this.groupSizes[r]=0;for(var d=o;d<f;d++)this.tag.deleteRule(o)}},a.prototype.getGroup=function(r){var u="";if(r>=this.length||this.groupSizes[r]===0)return u;for(var o=this.groupSizes[r],f=this.indexOfGroup(r),d=f+o,p=f;p<d;p++)u+="".concat(this.tag.getRule(p)).concat(Nf);return u},a})(),Bo=new Map,Xo=new Map,Lo=1,So=function(a){if(Bo.has(a))return Bo.get(a);for(;Xo.has(Lo);)Lo++;var r=Lo++;return Bo.set(a,r),Xo.set(r,a),r},Fb=function(a,r){Lo=r+1,Bo.set(a,r),Xo.set(r,a)},Wb="style[".concat(Bl,"][").concat(tg,'="').concat(nc,'"]'),Ib=new RegExp("^".concat(Bl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Pb=function(a,r,u){for(var o,f=u.split(","),d=0,p=f.length;d<p;d++)(o=f[d])&&a.registerName(r,o)},e5=function(a,r){for(var u,o=((u=r.textContent)!==null&&u!==void 0?u:"").split(Nf),f=[],d=0,p=o.length;d<p;d++){var y=o[d].trim();if(y){var x=y.match(Ib);if(x){var m=0|parseInt(x[1],10),S=x[2];m!==0&&(Fb(S,m),Pb(a,S,x[3]),a.getTag().insertRules(m,f)),f.length=0}else f.push(y)}}},b1=function(a){for(var r=document.querySelectorAll(Wb),u=0,o=r.length;u<o;u++){var f=r[u];f&&f.getAttribute(Bl)!==eg&&(e5(a,f),f.parentNode&&f.parentNode.removeChild(f))}};function t5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var sg=function(a){var r=document.head,u=a||r,o=document.createElement("style"),f=(function(y){var x=Array.from(y.querySelectorAll("style[".concat(Bl,"]")));return x[x.length-1]})(u),d=f!==void 0?f.nextSibling:null;o.setAttribute(Bl,eg),o.setAttribute(tg,nc);var p=t5();return p&&o.setAttribute("nonce",p),u.insertBefore(o,d),o},n5=(function(){function a(r){this.element=sg(r),this.element.appendChild(document.createTextNode("")),this.sheet=(function(u){if(u.sheet)return u.sheet;for(var o=document.styleSheets,f=0,d=o.length;f<d;f++){var p=o[f];if(p.ownerNode===u)return p}throw er(17)})(this.element),this.length=0}return a.prototype.insertRule=function(r,u){try{return this.sheet.insertRule(u,r),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},a.prototype.getRule=function(r){var u=this.sheet.cssRules[r];return u&&u.cssText?u.cssText:""},a})(),a5=(function(){function a(r){this.element=sg(r),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(r,u){if(r<=this.length&&r>=0){var o=document.createTextNode(u);return this.element.insertBefore(o,this.nodes[r]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},a.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},a})(),l5=(function(){function a(r){this.rules=[],this.length=0}return a.prototype.insertRule=function(r,u){return r<=this.length&&(this.rules.splice(r,0,u),this.length++,!0)},a.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},a.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},a})(),S1=Go,i5={isServer:!Go,useCSSOMInjection:!$b},Vo=(function(){function a(r,u,o){r===void 0&&(r=Ll),u===void 0&&(u={});var f=this;this.options=pt(pt({},i5),r),this.gs=u,this.names=new Map(o),this.server=!!r.isServer,!this.server&&Go&&S1&&(S1=!1,b1(this)),$f(this,function(){return(function(d){for(var p=d.getTag(),y=p.length,x="",m=function(w){var z=(function(L){return Xo.get(L)})(w);if(z===void 0)return"continue";var N=d.names.get(z),M=p.getGroup(w);if(N===void 0||!N.size||M.length===0)return"continue";var D="".concat(Bl,".g").concat(w,'[id="').concat(z,'"]'),_="";N!==void 0&&N.forEach(function(L){L.length>0&&(_+="".concat(L,","))}),x+="".concat(M).concat(D,'{content:"').concat(_,'"}').concat(Nf)},S=0;S<y;S++)m(S);return x})(f)})}return a.registerId=function(r){return So(r)},a.prototype.rehydrate=function(){!this.server&&Go&&b1(this)},a.prototype.reconstructWithOptions=function(r,u){return u===void 0&&(u=!0),new a(pt(pt({},this.options),r),this.gs,u&&this.names||void 0)},a.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(r=(function(u){var o=u.useCSSOMInjection,f=u.target;return u.isServer?new l5(f):o?new n5(f):new a5(f)})(this.options),new Jb(r)));var r},a.prototype.hasNameForId=function(r,u){return this.names.has(r)&&this.names.get(r).has(u)},a.prototype.registerName=function(r,u){if(So(r),this.names.has(r))this.names.get(r).add(u);else{var o=new Set;o.add(u),this.names.set(r,o)}},a.prototype.insertRules=function(r,u,o){this.registerName(r,u),this.getTag().insertRules(So(r),o)},a.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},a.prototype.clearRules=function(r){this.getTag().clearGroup(So(r)),this.clearNames(r)},a.prototype.clearTag=function(){this.tag=void 0},a})(),r5=/&/g,o5=/^\s*\/\/.*$/gm;function fg(a,r){return a.map(function(u){return u.type==="rule"&&(u.value="".concat(r," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(r," ")),u.props=u.props.map(function(o){return"".concat(r," ").concat(o)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=fg(u.children,r)),u})}function c5(a){var r,u,o,f=Ll,d=f.options,p=d===void 0?Ll:d,y=f.plugins,x=y===void 0?ac:y,m=function(z,N,M){return M.startsWith(u)&&M.endsWith(u)&&M.replaceAll(u,"").length>0?".".concat(r):z},S=x.slice();S.push(function(z){z.type===Io&&z.value.includes("&")&&(z.props[0]=z.props[0].replace(r5,u).replace(o,m))}),p.prefix&&S.push(kb),S.push(Rb);var w=function(z,N,M,D){N===void 0&&(N=""),M===void 0&&(M=""),D===void 0&&(D="&"),r=D,u=N,o=new RegExp("\\".concat(u,"\\b"),"g");var _=z.replace(o5,""),L=Mb(M||N?"".concat(M," ").concat(N," { ").concat(_," }"):_);p.namespace&&(L=fg(L,p.namespace));var H=[];return Yo(L,Ob(S.concat(Nb(function(O){return H.push(O)})))),H};return w.hash=x.length?x.reduce(function(z,N){return N.name||er(15),Nl(z,N.name)},lg).toString():"",w}var u5=new Vo,mf=c5(),dg=ke.createContext({shouldForwardProp:void 0,styleSheet:u5,stylis:mf});dg.Consumer;ke.createContext(void 0);function gf(){return v.useContext(dg)}var hg=(function(){function a(r,u){var o=this;this.inject=function(f,d){d===void 0&&(d=mf);var p=o.name+d.hash;f.hasNameForId(o.id,p)||f.insertRules(o.id,p,d(o.rules,p,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=u,$f(this,function(){throw er(12,String(o.name))})}return a.prototype.getName=function(r){return r===void 0&&(r=mf),this.name+r.hash},a})(),s5=function(a){return a>="A"&&a<="Z"};function w1(a){for(var r="",u=0;u<a.length;u++){var o=a[u];if(u===1&&o==="-"&&a[0]==="-")return a;s5(o)?r+="-"+o.toLowerCase():r+=o}return r.startsWith("ms-")?"-"+r:r}var pg=function(a){return a==null||a===!1||a===""},mg=function(a){var r,u,o=[];for(var f in a){var d=a[f];a.hasOwnProperty(f)&&!pg(d)&&(Array.isArray(d)&&d.isCss||Ul(d)?o.push("".concat(w1(f),":"),d,";"):Ki(d)?o.push.apply(o,_l(_l(["".concat(f," {")],mg(d),!1),["}"],!1)):o.push("".concat(w1(f),": ").concat((r=f,(u=d)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||r in _b||r.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return o};function ga(a,r,u,o){if(pg(a))return[];if(_f(a))return[".".concat(a.styledComponentId)];if(Ul(a)){if(!Ul(d=a)||d.prototype&&d.prototype.isReactComponent||!r)return[a];var f=a(r);return ga(f,r,u,o)}var d;return a instanceof hg?u?(a.inject(u,o),[a.getName(o)]):[a]:Ki(a)?mg(a):Array.isArray(a)?Array.prototype.concat.apply(ac,a.map(function(p){return ga(p,r,u,o)})):[a.toString()]}function gg(a){for(var r=0;r<a.length;r+=1){var u=a[r];if(Ul(u)&&!_f(u))return!1}return!0}var f5=ig(nc),d5=(function(){function a(r,u,o){this.rules=r,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&gg(r),this.componentId=u,this.baseHash=Nl(f5,u),this.baseStyle=o,Vo.registerId(u)}return a.prototype.generateAndInjectStyles=function(r,u,o){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,u,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))f=La(f,this.staticRulesId);else{var d=qo(ga(this.rules,r,u,o)),p=hf(Nl(this.baseHash,d)>>>0);if(!u.hasNameForId(this.componentId,p)){var y=o(d,".".concat(p),void 0,this.componentId);u.insertRules(this.componentId,p,y)}f=La(f,p),this.staticRulesId=p}else{for(var x=Nl(this.baseHash,o.hash),m="",S=0;S<this.rules.length;S++){var w=this.rules[S];if(typeof w=="string")m+=w;else if(w){var z=qo(ga(w,r,u,o));x=Nl(x,z+S),m+=z}}if(m){var N=hf(x>>>0);u.hasNameForId(this.componentId,N)||u.insertRules(this.componentId,N,o(m,".".concat(N),void 0,this.componentId)),f=La(f,N)}}return f},a})(),Df=ke.createContext(void 0);Df.Consumer;var Ds={};function h5(a,r,u){var o=_f(a),f=a,d=!$s(a),p=r.attrs,y=p===void 0?ac:p,x=r.componentId,m=x===void 0?(function(X,Z){var U=typeof X!="string"?"sc":m1(X);Ds[U]=(Ds[U]||0)+1;var Q="".concat(U,"-").concat(kf(nc+U+Ds[U]));return Z?"".concat(Z,"-").concat(Q):Q})(r.displayName,r.parentComponentId):x,S=r.displayName,w=S===void 0?(function(X){return $s(X)?"styled.".concat(X):"Styled(".concat(Hb(X),")")})(a):S,z=r.displayName&&r.componentId?"".concat(m1(r.displayName),"-").concat(r.componentId):r.componentId||m,N=o&&f.attrs?f.attrs.concat(y).filter(Boolean):y,M=r.shouldForwardProp;if(o&&f.shouldForwardProp){var D=f.shouldForwardProp;if(r.shouldForwardProp){var _=r.shouldForwardProp;M=function(X,Z){return D(X,Z)&&_(X,Z)}}else M=D}var L=new d5(u,z,o?f.componentStyle:void 0);function H(X,Z){return(function(U,Q,ee){var I=U.attrs,oe=U.componentStyle,ze=U.defaultProps,Ge=U.foldedComponentIds,et=U.styledComponentId,nt=U.target,Le=ke.useContext(Df),B=gf(),K=U.shouldForwardProp||B.shouldForwardProp,P=ng(Q,Le,ze)||Ll,te=(function(le,ce,pe){for(var He,Se=pt(pt({},ce),{className:void 0,theme:pe}),zt=0;zt<le.length;zt+=1){var Ft=Ul(He=le[zt])?He(Se):He;for(var mt in Ft)Se[mt]=mt==="className"?La(Se[mt],Ft[mt]):mt==="style"?pt(pt({},Se[mt]),Ft[mt]):Ft[mt]}return ce.className&&(Se.className=La(Se.className,ce.className)),Se})(I,Q,P),de=te.as||nt,E={};for(var G in te)te[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&te.theme===P||(G==="forwardedAs"?E.as=te.forwardedAs:K&&!K(G,de)||(E[G]=te[G]));var F=(function(le,ce){var pe=gf(),He=le.generateAndInjectStyles(ce,pe.styleSheet,pe.stylis);return He})(oe,te),W=La(Ge,et);return F&&(W+=" "+F),te.className&&(W+=" "+te.className),E[$s(de)&&!ag.has(de)?"class":"className"]=W,ee&&(E.ref=ee),v.createElement(de,E)})(O,X,Z)}H.displayName=w;var O=ke.forwardRef(H);return O.attrs=N,O.componentStyle=L,O.displayName=w,O.shouldForwardProp=M,O.foldedComponentIds=o?La(f.foldedComponentIds,f.styledComponentId):"",O.styledComponentId=z,O.target=o?f.target:a,Object.defineProperty(O,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(X){this._foldedDefaultProps=o?(function(Z){for(var U=[],Q=1;Q<arguments.length;Q++)U[Q-1]=arguments[Q];for(var ee=0,I=U;ee<I.length;ee++)pf(Z,I[ee],!0);return Z})({},f.defaultProps,X):X}}),$f(O,function(){return".".concat(O.styledComponentId)}),d&&ug(O,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),O}function j1(a,r){for(var u=[a[0]],o=0,f=r.length;o<f;o+=1)u.push(r[o],a[o+1]);return u}var E1=function(a){return Object.assign(a,{isCss:!0})};function xa(a){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];if(Ul(a)||Ki(a))return E1(ga(j1(ac,_l([a],r,!0))));var o=a;return r.length===0&&o.length===1&&typeof o[0]=="string"?ga(o):E1(ga(j1(o,r)))}function xf(a,r,u){if(u===void 0&&(u=Ll),!r)throw er(1,r);var o=function(f){for(var d=[],p=1;p<arguments.length;p++)d[p-1]=arguments[p];return a(r,u,xa.apply(void 0,_l([f],d,!1)))};return o.attrs=function(f){return xf(a,r,pt(pt({},u),{attrs:Array.prototype.concat(u.attrs,f).filter(Boolean)}))},o.withConfig=function(f){return xf(a,r,pt(pt({},u),f))},o}var xg=function(a){return xf(h5,a)},b=xg;ag.forEach(function(a){b[a]=xg(a)});var p5=(function(){function a(r,u){this.rules=r,this.componentId=u,this.isStatic=gg(r),Vo.registerId(this.componentId+1)}return a.prototype.createStyles=function(r,u,o,f){var d=f(qo(ga(this.rules,u,o,f)),""),p=this.componentId+r;o.insertRules(p,p,d)},a.prototype.removeStyles=function(r,u){u.clearRules(this.componentId+r)},a.prototype.renderStyles=function(r,u,o,f){r>2&&Vo.registerId(this.componentId+r),this.removeStyles(r,o),this.createStyles(r,u,o,f)},a})();function m5(a){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];var o=xa.apply(void 0,_l([a],r,!1)),f="sc-global-".concat(kf(JSON.stringify(o))),d=new p5(o,f),p=function(x){var m=gf(),S=ke.useContext(Df),w=ke.useRef(m.styleSheet.allocateGSInstance(f)).current;return m.styleSheet.server&&y(w,x,m.styleSheet,S,m.stylis),ke.useLayoutEffect(function(){if(!m.styleSheet.server)return y(w,x,m.styleSheet,S,m.stylis),function(){return d.removeStyles(w,m.styleSheet)}},[w,x,m.styleSheet,S,m.stylis]),null};function y(x,m,S,w,z){if(d.isStatic)d.renderStyles(x,Db,S,z);else{var N=pt(pt({},m),{theme:ng(m,w,p.defaultProps)});d.renderStyles(x,N,S,z)}}return ke.memo(p)}function Et(a){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];var o=qo(xa.apply(void 0,_l([a],r,!1))),f=kf(o);return new hg(f,o)}var yg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},C1=ke.createContext&&ke.createContext(yg),g5=["attr","size","title"];function x5(a,r){if(a==null)return{};var u=y5(a,r),o,f;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);for(f=0;f<d.length;f++)o=d[f],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(a,o)&&(u[o]=a[o])}return u}function y5(a,r){if(a==null)return{};var u={};for(var o in a)if(Object.prototype.hasOwnProperty.call(a,o)){if(r.indexOf(o)>=0)continue;u[o]=a[o]}return u}function Qo(){return Qo=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},Qo.apply(this,arguments)}function z1(a,r){var u=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);r&&(o=o.filter(function(f){return Object.getOwnPropertyDescriptor(a,f).enumerable})),u.push.apply(u,o)}return u}function Zo(a){for(var r=1;r<arguments.length;r++){var u=arguments[r]!=null?arguments[r]:{};r%2?z1(Object(u),!0).forEach(function(o){v5(a,o,u[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(u)):z1(Object(u)).forEach(function(o){Object.defineProperty(a,o,Object.getOwnPropertyDescriptor(u,o))})}return a}function v5(a,r,u){return r=b5(r),r in a?Object.defineProperty(a,r,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[r]=u,a}function b5(a){var r=S5(a,"string");return typeof r=="symbol"?r:r+""}function S5(a,r){if(typeof a!="object"||!a)return a;var u=a[Symbol.toPrimitive];if(u!==void 0){var o=u.call(a,r);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(a)}function vg(a){return a&&a.map((r,u)=>ke.createElement(r.tag,Zo({key:u},r.attr),vg(r.child)))}function be(a){return r=>ke.createElement(w5,Qo({attr:Zo({},a.attr)},r),vg(a.child))}function w5(a){var r=u=>{var{attr:o,size:f,title:d}=a,p=x5(a,g5),y=f||u.size||"1em",x;return u.className&&(x=u.className),a.className&&(x=(x?x+" ":"")+a.className),ke.createElement("svg",Qo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,o,p,{className:x,style:Zo(Zo({color:a.color||u.color},u.style),a.style),height:y,width:y,xmlns:"http://www.w3.org/2000/svg"}),d&&ke.createElement("title",null,d),a.children)};return C1!==void 0?ke.createElement(C1.Consumer,null,u=>r(u)):r(yg)}function Bf(a){return be({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"},child:[]}]})(a)}function Lf(a){return be({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"},child:[]}]})(a)}function Uf(a){return be({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"},child:[]}]})(a)}function Hf(a){return be({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"},child:[]}]})(a)}function Yf(a){return be({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"},child:[]}]})(a)}function bg(a){return be({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"},child:[]}]})(a)}function j5(a){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(a)}function Sg(a){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(a)}function E5(a){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(a)}function C5(a){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(a)}function wg(a){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(a)}function z5(a){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(a)}function Gf(a){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(a)}function T5(a){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(a)}function jg(a){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(a)}function M5(a){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(a)}function T1(a){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}const A5="/instalearn/assets/vedioClip1-BQ1quwNm.mp4",R5="/instalearn/assets/test-BrOnAr5c.png",O5="/instalearn/assets/teacherProfilePic-DPrjIuTX.png",N5="/instalearn/assets/Slide1-D-tpOApl.png",k5="/instalearn/assets/Slide3-B6C07YuO.png",_5="/instalearn/assets/Slide4-BbthJNiF.png",$5="/instalearn/assets/Slide5-BsOulZPi.png",D5="/instalearn/assets/Slide6-8dQDHdn3.png",B5="/instalearn/assets/Slide7-CH0r16yo.png",L5="/instalearn/assets/Slide8-2dBFzKRc.png",U5="/instalearn/assets/Slide9-D8lJXVrP.png",wo={},M1={videoClip1:A5},H5={test:R5},lc={teacherProfilePic:O5},An={Slide1:N5,Slide3:k5,Slide4:_5,Slide5:$5,Slide6:D5,Slide7:B5,Slide8:L5,Slide9:U5};function Y5(a){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M304 384v-24c0-29 31.54-56.43 52-76 28.84-27.57 44-64.61 44-108 0-80-63.73-144-144-144a143.6 143.6 0 0 0-144 144c0 41.84 15.81 81.39 44 108 20.35 19.21 52 46.7 52 76v24m16 96h64m-80-48h96m-48-48V256"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M294 240s-21.51 16-38 16-38-16-38-16"},child:[]}]})(a)}const G5=b.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
`,q5=b.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  @media (max-width: 520px) {
    padding: 10px 12px;
  }
`,X5=b.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,V5=b.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,Q5=b.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,Z5=b.span`
  font-weight: 600;
  color: #0f172a;
  font-size: 14px;
  @media (max-width: 520px) { font-size: 13px; }
`,K5=b.span`
  font-size: 12px;
  color: #64748b;
`,J5=b.button`
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
`,F5=b.div`
  position: relative;
  aspect-ratio: 1 / 1;
  background: linear-gradient(135deg, #eef2ff, #e0f7fa);
`,W5=b.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,I5=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px 8px 12px;
`,P5=b.div`
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
`,e3=b.div`
  padding: 12px;
  display: grid;
  gap: 14px;
  background: #f8fafc;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  @media (min-width: 520px) {
    padding: 14px 16px;
    gap: 16px;
  }
`,A1=b.section`
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.02);
  @media (min-width: 520px) { padding: 14px; }
`,R1=b.h3`
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 8px 0;
`,t3=b.ul`
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
`,O1=b.div`
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
`,N1=b.button`
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 12px;
  cursor: pointer;
`,n3=b.div`
  display: grid;
  gap: 10px;
`,a3=b.p`
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #0f172a;
`,l3=b.div`
  display: grid;
  gap: 8px;
`,i3=b.button.withConfig({shouldForwardProp:a=>a!=="$state"})`
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
`,r3=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Eg=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`,k1=b.button`
  background: #0f172a;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 8px 12px;
  font-size: 12px;
  cursor: pointer;
`,Cg=b.button`
  background: transparent;
  border: 1px solid rgba(15,23,42,.14);
  border-radius: 10px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 12px;
`;async function o3(a){const u=await(await fetch(a,{mode:"cors"})).blob(),o=u.type||"image/jpeg",f=await u.arrayBuffer(),d=new Uint8Array(f);let p="";for(let x=0;x<d.byteLength;x++)p+=String.fromCharCode(d[x]);return{base64:btoa(p),mime:o}}function c3({title:a,description:r,username:u}){return`
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
- Author: "${u}"
`.trim()}async function u3(a){const{title:r,description:u,username:o,imageUrl:f}=a,d="AIzaSyDYGHcNYuuk43rrYSBVBIQGegzOGVtjGrw",{base64:p,mime:y}=await o3(f),m={contents:[{parts:[{text:c3({title:r,description:u,username:o})},{inline_data:{mime_type:y,data:p}}]}],generationConfig:{temperature:.6,topK:32,topP:.9,maxOutputTokens:1200,response_mime_type:"application/json"}},S="https://generativelanguage.googleapis.com/v1beta",w=["gemini-2.5-flash","gemini-2.0-flash"];let z;for(const N of w)try{const M=`${S}/models/${N}:generateContent?key=${encodeURIComponent(d)}`,D=await fetch(M,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)});if(!D.ok)throw new Error(`Gemini error (${D.status}): ${await D.text()}`);const L=(await D.json())?.candidates?.[0]?.content?.parts?.[0]?.text;if(!L)throw new Error("Empty response from Gemini");let H;try{H=JSON.parse(L)}catch{const U=String(L).replace(/^```json\s*/i,"").replace(/^```\s*/i,"").replace(/```$/i,"").trim();H=JSON.parse(U)}const O=Array.isArray(H.bullets)?H.bullets.slice(0,5):[],X=Array.isArray(H.mcqs)?H.mcqs.slice(0,5):[];if(!O.length||!X.length)throw new Error("Malformed AI content");const Z=X.map(U=>({question:String(U.question||"").slice(0,140),options:Array.isArray(U.options)&&U.options.length?U.options.slice(0,5):["Not present"],correctIndex:Number.isInteger(U.correctIndex)?U.correctIndex:0,explanation:U.explanation?String(U.explanation).slice(0,140):void 0}));return{bullets:O,mcqs:Z}}catch(M){z=M}throw z||new Error("Gemini request failed")}function s3({avatarSrc:a=lc.teacherProfilePic,title:r,description:u,imgSrc:o,username:f,postUrl:d,onLikeChange:p,onBookmarkChange:y,onShare:x}){const[m,S]=v.useState(!1),[w,z]=v.useState(!1),[N,M]=v.useState(!1),[D,_]=v.useState(!1),[L,H]=v.useState(null),[O,X]=v.useState(null),[Z,U]=v.useState(0);v.useEffect(()=>{const te=O?.mcqs?.length||0;te!==0&&U(de=>Math.max(0,Math.min(de,te-1)))},[O?.mcqs?.length]);const Q=m?"Unlike":"Like",ee=w?"Remove bookmark":"Bookmark",I=()=>{const te=!m;S(te),p&&p(te)},oe=()=>{const te=!w;z(te),y&&y(te)},ze=v.useMemo(()=>({title:r,text:`${f} on Infographics — ${r}`,url:d}),[r,f,d]),Ge=async()=>{try{navigator.share?await navigator.share(ze):navigator.clipboard&&ze.url&&(await navigator.clipboard.writeText(ze.url),alert("Link copied to clipboard")),x&&x(ze)}catch(te){console.error("Share failed:",te)}},et=async()=>{_(!0),H(null);try{const te=await u3({title:r,description:u,username:f,imageUrl:o});X(te),U(0)}catch(te){console.error(te),H(te?.message||"Failed to generate content")}finally{_(!1)}},nt=()=>{const te=!N;M(te),te&&!O&&!D&&et()},Le=O?.mcqs?.length||0,B=Le?O.mcqs[Z]:null,K=Z===Le-1,P=()=>U(te=>Math.min(te+1,Le-1));return s.jsxs(G5,{role:"article","aria-label":`${r} instagram-style post`,children:[s.jsxs(q5,{children:[s.jsxs(X5,{children:[s.jsx(V5,{src:a,alt:"avatar"}),s.jsxs(Q5,{children:[s.jsx(Z5,{children:r}),s.jsx(K5,{children:u})]})]}),s.jsx(J5,{"aria-label":N?"Close learn mode":"Open learn mode",title:N?"Close learn mode":"Learn more & quiz",onClick:nt,children:s.jsx(Y5,{size:18})})]}),N?s.jsxs(e3,{"aria-live":"polite",children:[s.jsxs(A1,{children:[s.jsx(R1,{children:"Know more (5 quick points)"}),D?s.jsxs("div",{style:{display:"grid",gap:8},children:[s.jsx(on,{}),s.jsx(on,{}),s.jsx(on,{}),s.jsx(on,{}),s.jsx(on,{})]}):L?s.jsxs(O1,{children:[s.jsx("span",{style:{flex:1,minWidth:0},children:L}),s.jsx(N1,{onClick:et,"aria-label":"Retry generating content",children:"Retry"})]}):s.jsx(t3,{children:O?.bullets?.map((te,de)=>s.jsx("li",{children:te},de))})]}),s.jsxs(A1,{children:[s.jsxs(Eg,{children:[s.jsx(R1,{style:{margin:0},children:"Test your knowledge"}),Le?s.jsxs(Uo,{children:[Z+1," / ",Le]}):null]}),D?s.jsxs("div",{style:{display:"grid",gap:10},children:[s.jsx(on,{h:16}),s.jsx(on,{h:40}),s.jsx(on,{h:40}),s.jsx(on,{h:40}),s.jsx(on,{h:40})]}):L?s.jsxs(O1,{children:[s.jsx("span",{style:{flex:1,minWidth:0},children:"Can’t load questions."}),s.jsx(N1,{onClick:et,children:"Retry"})]}):B?s.jsx(f3,{mcq:B,index:Z+1,total:Le,isLast:K,onNext:K?void 0:P,onFinish:K?()=>M(!1):void 0},Z):null,!D&&!L&&B&&!K?s.jsx("div",{style:{marginTop:6},children:s.jsx(Uo,{children:"Tip: You can change your choice before tapping Next."})}):null]}),s.jsxs(r3,{children:[s.jsx(Uo,{children:"AI stays within the infographic; short, clear answers only."}),s.jsx(Cg,{onClick:()=>M(!1),"aria-label":"Back to image",title:"Back to image",children:"Back to image"})]})]}):s.jsx(F5,{children:s.jsx(W5,{src:o,alt:r})}),s.jsxs(I5,{children:[s.jsxs(P5,{children:[s.jsx(jo,{onClick:I,"aria-label":Q,title:Q,children:m?s.jsx(Bf,{size:22}):s.jsx(Lf,{size:22})}),s.jsx(jo,{"aria-label":"Comment",title:"Comment",children:s.jsx(Yf,{size:20})}),s.jsx(jo,{onClick:Ge,"aria-label":"Share",title:"Share",children:s.jsx(Gf,{size:20})})]}),s.jsx(jo,{onClick:oe,"aria-label":ee,title:ee,children:w?s.jsx(Uf,{size:20}):s.jsx(Hf,{size:20})})]})]})}function f3({mcq:a,index:r,total:u,isLast:o,onNext:f,onFinish:d}){const[p,y]=v.useState(null),x=m=>p===null?"idle":m===a.correctIndex?"correct":m===p&&p!==a.correctIndex?"wrong":"idle";return s.jsxs(n3,{"aria-label":`Question ${r}`,children:[s.jsxs(a3,{children:[r,". ",a.question]}),s.jsx(l3,{children:a.options.map((m,S)=>s.jsx(i3,{onClick:()=>y(S),$state:x(S),"aria-pressed":p===S,"aria-label":`Option ${S+1}`,children:m},S))}),p!==null&&s.jsxs("div",{style:{display:"grid",gap:8},children:[s.jsxs(Uo,{children:[p===a.correctIndex?"✅ Correct.":"❌ Not quite.",a.explanation?` — ${a.explanation}`:""]}),o?s.jsxs(Eg,{children:[s.jsx(k1,{onClick:d,"aria-label":"Finish quiz",children:"Finish"}),s.jsx(Cg,{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"Back to top"})]}):s.jsxs(k1,{onClick:f,"aria-label":"Next question",disabled:p===null,children:["Next question (",r+1,"/",u,")"]})]})]})}const d3=b.div``,h3=b.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 24px 0;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,p3=b.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.02);
  }

  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 16px;
    padding: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`,m3=b.img`
  width: 300px;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
  user-drag: none;
  -webkit-user-drag: none;
  pointer-events: none;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
`,g3=b.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.96);
  backdrop-filter: blur(20px);
  display: grid;
  place-items: center;
  z-index: 9999;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`,x3=b.div`
  position: relative;
  width: 96vw;
  max-width: 1400px;
  height: 92vh;
  display: grid;
  grid-template-rows: 1fr auto auto;
  gap: 16px;
  overflow: hidden;
`,y3=b.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 32px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  scroll-behavior: smooth;
`,v3=b.div`
  flex: 0 0 100%;
  height: 100%;
  display: grid;
  place-items: center;
  scroll-snap-align: center;
`,b3=b.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 16px;
  user-select: none;
  -webkit-user-drag: none;
  cursor: none;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s ease;

  &:active {
    transform: scale(0.98);
  }
`,S3=b.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  color: white;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${a=>a.show?1:0};
  pointer-events: ${a=>a.show?"auto":"none"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`,w3=b.div`
  width: 100%;
  padding: 0 16px 8px;
  display: grid;
  align-items: center;
  opacity: ${a=>a.show?1:0};
  pointer-events: ${a=>a.show?"auto":"none"};
  transition: opacity 0.3s ease;
`,j3=b.input.attrs({type:"range"})`
  width: 100%;
  appearance: none;
  background: transparent;
  margin: 0;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    height: 4px;
    border-radius: 999px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.9) 0 var(--filled, 0%),
      rgba(255, 255, 255, 0.2) var(--filled, 0%) 100%
    );
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    margin-top: -6px;
    cursor: grab;
    transition: transform 0.2s ease;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.2);
  }

  &::-webkit-slider-thumb:active {
    cursor: grabbing;
    transform: scale(1.1);
  }

  &::-moz-range-track {
    height: 4px;
    border-radius: 999px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.9) 0 var(--filled, 0%),
      rgba(255, 255, 255, 0.2) var(--filled, 0%) 100%
    );
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    border: none;
    cursor: grab;
  }
`,E3=b.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 0 16px 16px;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  opacity: ${a=>a.show?1:0};
  pointer-events: ${a=>a.show?"auto":"none"};
  transition: opacity 0.3s ease;
`,zg=b.button`
  position: relative;
  border: 2px solid ${a=>a.active?"rgba(255, 255, 255, 0.9)":"rgba(255, 255, 255, 0.2)"};
  border-radius: 10px;
  background: transparent;
  padding: 0;
  cursor: pointer;
  flex: 0 0 auto;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: rgba(255, 255, 255, 0.6);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  ${a=>a.active&&`
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  `}
`,C3=b.img`
  width: 80px;
  height: 54px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  transition: opacity 0.2s ease;

  ${zg}:hover & {
    opacity: 0.8;
  }
`,z3=b.div`
  position: absolute;
  top: 24px;
  left: 24px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 8px 16px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  opacity: ${a=>a.show?1:0};
  pointer-events: none;
  transition: opacity 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;function T3({items:a,className:r}){const u=v.useRef(null),o=v.useRef(!1),f=v.useRef(0),d=v.useRef(0),p=v.useRef(0),[y,x]=v.useState(!1),[m,S]=v.useState(0),[w,z]=v.useState(!0),N=v.useRef(null),M=v.useRef([]);M.current.length!==a.length&&(M.current=a.map((I,oe)=>M.current[oe]??ke.createRef())),v.useEffect(()=>{const I=document.body.style.overflow;return document.body.style.overflow=y?"hidden":I||"",()=>{document.body.style.overflow=I||""}},[y]),v.useEffect(()=>{y&&M.current[m]?.current?.scrollIntoView({inline:"center",behavior:"instant"})},[y,m]),v.useEffect(()=>{if(!y)return;const I=oe=>oe.key==="Escape"&&x(!1);return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[y]);const D=()=>{if(!N.current)return;const{scrollLeft:I,clientWidth:oe}=N.current,ze=Math.round(I/oe);ze!==m&&S(ze)},_=I=>{const oe=Math.max(0,Math.min(a.length-1,I));S(oe),M.current[oe]?.current?.scrollIntoView({inline:"center",behavior:"smooth"})},L=I=>{const oe=Number(I.target.value);_(oe)},O={"--filled":`${a.length>1?m/(a.length-1)*100:0}%`},X=I=>{o.current=!0,p.current=0,f.current=I.clientX,d.current=u.current?.scrollLeft||0},Z=I=>{if(!o.current||!u.current)return;const oe=I.clientX-f.current;p.current=Math.max(p.current,Math.abs(oe)),u.current.scrollLeft=d.current-oe},U=()=>{o.current=!1},Q=6,ee=I=>{p.current>Q||(S(I),z(!0),x(!0))};return s.jsxs(d3,{className:r,children:[s.jsx(h3,{ref:u,onPointerDown:X,onPointerMove:Z,onPointerUp:U,onPointerLeave:U,children:a.map((I,oe)=>s.jsx(p3,{onClick:()=>ee(oe),children:s.jsx(m3,{src:I.imgSrc,alt:I.name,draggable:!1})},I.id))}),y&&s.jsx(g3,{onClick:()=>z(I=>!I),children:s.jsxs(x3,{onClick:I=>I.stopPropagation(),children:[s.jsxs(z3,{show:w,children:[m+1," / ",a.length]}),s.jsx(S3,{show:w,onClick:()=>x(!1),"aria-label":"Close",children:s.jsx(M5,{})}),s.jsx(y3,{ref:N,onScroll:D,children:a.map((I,oe)=>s.jsx(v3,{ref:M.current[oe],children:s.jsx(b3,{src:I.imgSrc,alt:I.name,onClick:()=>z(ze=>!ze)})},I.id))}),s.jsx(w3,{show:w,children:s.jsx(j3,{min:0,max:Math.max(0,a.length-1),step:1,value:m,onChange:L,style:O,"aria-label":"Image scrubber"})}),s.jsx(E3,{show:w,"aria-label":"Thumbnails",children:a.map((I,oe)=>s.jsx(zg,{active:oe===m,onClick:()=>_(oe),children:s.jsx(C3,{src:I.imgSrc,alt:I.name})},I.id))})]})})]})}const M3=m5`
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
`,A3=b.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(2, 6, 23, 0.08);
`,R3=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`,O3=b.div`
  display: flex;
  gap: 12px;
`,N3=b.button`
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
`,k3=b.div`
  padding: 12px 14px;
`,_3=b.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,$3=b.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,D3=b.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,B3=b.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,L3=b.span`
  font-weight: 600;
  color: #0f172a;
`,U3=b.div`
  padding: 0 14px 8px 14px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`,H3=b.span`
  font-size: 12px;
  color: #64748b;
`,Y3=b.button`
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
`,G3=(a=1)=>({display:"-webkit-box",WebkitBoxOrient:"vertical",overflow:"hidden",WebkitLineClamp:a});function q3({expanded:a=!1,lines:r=1,children:u,innerRef:o}){const f={fontSize:"13px",color:"#334155",margin:0,whiteSpace:"pre-wrap",...a?{}:G3(r)};return s.jsx("p",{style:f,ref:o,children:u})}function X3({avatarSrc:a=lc.teacherProfilePic,data:r,onLikeChange:u,onBookmarkChange:o,onShare:f}){const{title:d="Carousel Title",description:p="",detailedDescription:y="",carouselMetaData:x=[]}=r||{},[m,S]=v.useState(!1),[w,z]=v.useState(!1),[N,M]=v.useState(!1),[D,_]=v.useState(!1),L=v.useRef(null);v.useEffect(()=>{const ee=L.current;if(ee){if(N){_(!0);return}requestAnimationFrame(()=>{if(!ee)return;const I=ee.scrollHeight-ee.clientHeight>1;_(I)})}},[y,N]);const H=m?"Unlike post":"Like post",O=w?"Remove bookmark":"Bookmark",X=()=>{const ee=!m;S(ee),u&&u(ee)},Z=()=>{const ee=!w;z(ee),o&&o(ee)},U=v.useMemo(()=>({title:d,text:`${d}`,url:typeof window<"u"?window.location.href:""}),[d]),Q=async()=>{try{navigator.share?await navigator.share(U):navigator.clipboard&&(await navigator.clipboard.writeText(U.url),alert("Link copied to clipboard")),f&&f(U)}catch(ee){console.error("Share failed:",ee)}};return!x||x.length===0?null:s.jsxs(A3,{role:"article","aria-label":`${d} – Instagram multi-image post`,children:[s.jsxs(k3,{children:[s.jsxs(_3,{children:[s.jsxs($3,{children:[s.jsx(D3,{src:a,alt:"avatar"}),s.jsxs(B3,{children:[s.jsx(L3,{children:d}),s.jsx(H3,{children:p})]})]}),s.jsx(N3,{"aria-label":"Post menu",title:"More",children:s.jsx(bg,{size:18})})]}),y?s.jsxs(U3,{children:[s.jsx(q3,{expanded:N,lines:1,innerRef:L,children:y}),(D||N)&&s.jsx(Y3,{type:"button","aria-expanded":N,onClick:()=>M(ee=>!ee),children:N?s.jsx(E5,{size:14}):"more"})]}):null]}),s.jsx(M3,{}),s.jsx(T3,{items:x,duration:3e3}),s.jsxs(R3,{children:[s.jsxs(O3,{children:[s.jsx(Eo,{onClick:X,"aria-label":H,title:H,children:m?s.jsx(Bf,{size:22}):s.jsx(Lf,{size:22})}),s.jsx(Eo,{"aria-label":"Comment",title:"Comment",children:s.jsx(Yf,{size:20})}),s.jsx(Eo,{onClick:Q,"aria-label":"Share",title:"Share",children:s.jsx(Gf,{size:20})})]}),s.jsx(Eo,{onClick:Z,"aria-label":O,title:O,children:w?s.jsx(Uf,{size:20}):s.jsx(Hf,{size:20})})]})]})}const V3=b.article`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.12);
`,Q3=b.div`
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
`,Z3=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`,K3=b.div`
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
`,J3=b.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,F3=b.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,W3=b.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,I3=b.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,P3=b.span`
  font-weight: 600;
  color: #0f172a;
`,e4=b.span`
  font-size: 12px;
  color: #64748b;
`,t4=b.button`
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
`;function n4({avatarSrc:a=lc.teacherProfilePic,data:r,likedDefault:u=!1,savedDefault:o=!1,onLikeChange:f,onBookmarkChange:d,onShare:p}){const y=r?.videoClipSrc||r?.vedioClipSrc,{title:x,description:m,poster:S}=r||{},[w,z]=v.useState(u),[N,M]=v.useState(o),D=w?"Unlike post":"Like post",_=N?"Remove bookmark":"Bookmark",L=v.useRef(null),H=()=>{const Z=!w;z(Z),f&&f(Z)},O=()=>{const Z=!N;M(Z),d&&d(Z)},X=async()=>{const Z={title:x||"Check this video",text:m||"",url:typeof window<"u"&&window.location?.href||(r?.url??"")};try{typeof navigator<"u"&&navigator.share?await navigator.share(Z):typeof navigator<"u"&&navigator.clipboard&&Z.url&&(await navigator.clipboard.writeText(Z.url),alert("Link copied to clipboard")),p&&p(Z)}catch(U){console.log(U)}};return v.useEffect(()=>{const Z=L.current;if(!Z)return;(async()=>{try{await Z.play()}catch{}})()},[y]),y?s.jsxs(V3,{"aria-label":"Video post",children:[s.jsxs(J3,{children:[s.jsxs(F3,{children:[s.jsx(W3,{src:a,alt:"Author avatar"}),s.jsxs(I3,{children:[s.jsx(P3,{children:x}),s.jsx(e4,{children:m})]})]}),s.jsx(t4,{"aria-label":"Post menu",title:"More options",children:s.jsx(bg,{size:18})})]}),s.jsx(Q3,{children:s.jsx("video",{ref:L,src:y,controls:!0,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",poster:S,"aria-label":x||"Video clip"})}),s.jsxs(Z3,{children:[s.jsxs(K3,{children:[s.jsx(Co,{onClick:H,"aria-label":D,title:D,children:w?s.jsx(Bf,{size:22}):s.jsx(Lf,{size:22})}),s.jsx(Co,{"aria-label":"Comment",title:"Comment",children:s.jsx(Yf,{size:20})}),s.jsx(Co,{onClick:X,"aria-label":"Share",title:"Share",children:s.jsx(Gf,{size:20})})]}),s.jsx(Co,{onClick:O,"aria-label":_,title:_,children:N?s.jsx(Uf,{size:20}):s.jsx(Hf,{size:20})})]})]}):null}const a4=[{id:1,name:"Sense of Collective Identity",img:wo.CollectiveIdentity||"https://images.unsplash.com/photo-1506765515384-028b60a970df?w=400&h=400&fit=crop",hasNew:!0,slides:[H5.test,"https://images.unsplash.com/photo-1554189097-ffe88e998a2b?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602524811998-8b90d1d03663?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1505066836043-7d9b15a1595d?w=800&h=1400&fit=crop"]},{id:2,name:"Understanding Diversity",img:wo.Diversity||"https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1581091226825-c6a76aa2f4c1?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&h=1400&fit=crop"]},{id:3,name:"Nationalism in India",img:wo.Nationalism||"https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1524310393100-34cb9cd27f1e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1533199829561-72f88a8f0c56?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602451126518-9b36f1b23543?w=800&h=1400&fit=crop"]},{id:4,name:"Globalisation and the Indian Economy",img:wo.Globalisation||"https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1565372918675-bacb79cdd3a5?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&h=1400&fit=crop"]}];function l4(a){return be({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1.47978 1.4797C1.30227 1.65721 1.28614 1.93498 1.43137 2.13072L1.47978 2.1868L4.1695 4.87652C2.88817 5.77616 1.93052 7.11985 1.53259 8.70952C1.46554 8.97738 1.62834 9.24892 1.89621 9.31598C2.16409 9.38298 2.4356 9.22025 2.50266 8.95232C2.85564 7.54225 3.72742 6.35956 4.88944 5.59626L6.09586 6.80278C5.62419 7.28378 5.33334 7.94278 5.33334 8.66965C5.33334 10.1424 6.52724 11.3363 8 11.3363C8.72694 11.3363 9.38587 11.0454 9.86694 10.5738L13.8131 14.5201C14.0084 14.7154 14.3249 14.7154 14.5202 14.5201C14.6977 14.3426 14.7139 14.0649 14.5686 13.8691L14.5202 13.813L10.4445 9.73692L10.4453 9.73592L9.64527 8.93732L7.732 7.02445L7.73334 7.02392L5.81252 5.10513L5.81334 5.10392L5.05782 4.35024L2.18689 1.4797C1.99163 1.28444 1.67504 1.28444 1.47978 1.4797ZM6.80274 7.51025L9.15947 9.86698C8.85947 10.1575 8.4506 10.3363 8 10.3363C7.07954 10.3363 6.33334 9.59012 6.33334 8.66965C6.33334 8.21905 6.51216 7.81018 6.80274 7.51025ZM8 3.66658C7.33314 3.66658 6.68607 3.7653 6.07406 3.94992L6.89874 4.77404C7.25594 4.70346 7.62427 4.66658 8 4.66658C10.6154 4.66658 12.8733 6.45342 13.4981 8.95538C13.565 9.22325 13.8364 9.38618 14.1043 9.31932C14.3723 9.25238 14.5352 8.98098 14.4683 8.71305C13.7329 5.7684 11.077 3.66658 8 3.66658ZM8.1298 6.0061L10.664 8.53992C10.5961 7.16865 9.49814 6.07168 8.1298 6.0061Z"},child:[]}]})(a)}function i4({isOpen:a,activeIndex:r,setActiveIndex:u,total:o,onClose:f,duration:d=3e3}){const p=v.useRef(Date.now()),y=v.useRef(),x=v.useRef(0),m=v.useCallback(()=>{const w=Date.now()-p.current,z=Math.min(1,w/d);x.current=z,z>=1?r<o-1?u(N=>N+1):f():y.current=requestAnimationFrame(m)},[r,o,d,f,u]);return v.useEffect(()=>{if(a)return p.current=Date.now(),y.current=requestAnimationFrame(m),()=>cancelAnimationFrame(y.current)},[a,r,m]),{resetTimer:v.useCallback(()=>{p.current=Date.now()},[]),getProgressValue:()=>x.current}}const r4=b.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(12px) saturate(120%);
  -webkit-backdrop-filter: blur(12px) saturate(120%);

  @media (max-width: 768px) {
    background: rgba(0, 0, 0, 0.98);
  }
`,o4=b.div`
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
`,c4=b.div`
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
`,u4=b.div`
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
`,s4=b.div`
  height: 3px;
  flex: 1;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    height: 2.5px;
  }
`,f4=b.div`
  height: 100%;
  background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0.95) 100%);
  transition: width 100ms linear;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
`,d4=b.div`
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

  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;

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
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5),
        0 0 0 1px rgba(255, 255, 255, 0.08) inset;
    }
  }
`,h4=b.img`
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
`,p4=b.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`,m4=b.div`
  font-weight: 700;
  font-size: clamp(13px, 2.2vw, 15px);
  line-height: 1.2;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`,g4=b.div`
  font-size: clamp(11px, 1.8vw, 13px);
  opacity: 0.85;
  line-height: 1.2;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`,x4=b.button`
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
`,y4=b.img`
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
`,_1=b.div`
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
`;function v4({currentItem:a,isOpen:r,slideIndex:u,setSlideIndex:o,onClose:f,duration:d=3e3}){const p=a?.slides?.length||0,{resetTimer:y,getProgressValue:x}=i4({isOpen:r,activeIndex:u,setActiveIndex:o,total:p,onClose:f,duration:d}),m=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[,S]=v.useState(0);v.useEffect(()=>{if(!r||m)return;let M;const D=()=>{S(_=>_+1),M=requestAnimationFrame(D)};return M=requestAnimationFrame(D),()=>cancelAnimationFrame(M)},[r,m]);const w=v.useCallback(()=>{a&&(u<p-1?(o(M=>M+1),y()):f())},[a,u,p,y,f,o]),z=v.useCallback(()=>{a&&(u>0?(o(M=>M-1),y()):f())},[a,u,y,f,o]);v.useEffect(()=>{const M=D=>{r&&(D.key==="Escape"&&f(),D.key==="ArrowRight"&&w(),D.key==="ArrowLeft"&&z())};return window.addEventListener("keydown",M),()=>window.removeEventListener("keydown",M)},[r,w,z,f]),v.useEffect(()=>(r?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[r]);const N=M=>M<u?1:M>u?0:x();return!r||!a?null:s.jsx(r4,{onClick:f,"aria-label":"Story overlay",children:s.jsx(o4,{onClick:M=>M.stopPropagation(),children:s.jsxs(c4,{children:[s.jsx(u4,{"aria-label":"Story progress",children:a.slides.map((M,D)=>s.jsx(s4,{"aria-label":`Progress track ${D+1}`,children:s.jsx(f4,{style:{width:`${N(D)*100}%`}})},D))}),s.jsxs(d4,{children:[s.jsx(h4,{src:a.img,alt:a.name}),s.jsxs(p4,{children:[s.jsx(m4,{children:a.name}),s.jsx(g4,{children:"Chapter highlight"})]}),s.jsx(x4,{"aria-label":"Close story",onClick:f,title:"Close",children:s.jsx(l4,{})})]}),a.slides.map((M,D)=>s.jsx(y4,{src:M,alt:`Slide ${D+1}`,$active:D===u,draggable:!1},D)),s.jsx(_1,{$side:"left",onClick:z,"aria-label":"Previous slide"}),s.jsx(_1,{$side:"right",onClick:w,"aria-label":"Next slide"})]})})})}const b4=b.div``,S4=b.div`
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
`,w4=b.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 16px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,j4=b.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border: 0;
  background: transparent;
  cursor: pointer;
`,E4=b.div`
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
`,C4=b.div`
  background: #fff;
  padding: 3px;
  border-radius: 999px;
`,z4=b.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 999px;
  user-drag: none;
  -webkit-user-drag: none;
`,T4=b.span`
  font-size: 12px;
  color: #1f2937;
  max-width: 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function M4({items:a,duration:r=3e3,onOpen:u,onClose:o,className:f}){const d=v.useRef(null),p=v.useRef(!1),y=v.useRef(0),x=v.useRef(0),[m,S]=v.useState(a||[]),[w,z]=v.useState(null),[N,M]=v.useState(0),D=m.find(U=>U.id===w)||null,_=!!w,L=U=>{M(0),z(U),S(Q=>Q.map(ee=>ee.id===U?{...ee,hasNew:!1}:ee)),u&&u(U)},H=()=>{z(null),o&&o()},O=U=>{p.current=!0,y.current=U.clientX,x.current=d.current?.scrollLeft||0,U.target.setPointerCapture?.(U.pointerId)},X=U=>{if(!p.current||!d.current)return;const Q=U.clientX-y.current;d.current.scrollLeft=x.current-Q},Z=()=>{p.current=!1};return s.jsxs(b4,{className:f,children:[s.jsx(S4,{children:s.jsx(w4,{ref:d,onPointerDown:O,onPointerMove:X,onPointerUp:Z,onPointerLeave:Z,"aria-label":"Stories scroller",children:m.map(U=>s.jsxs(j4,{onClick:()=>L(U.id),"aria-label":`Open story ${U.name}`,title:U.name,children:[s.jsx(E4,{$hasNew:U.hasNew,children:s.jsx(C4,{children:s.jsx(z4,{src:U.img,alt:U.name,draggable:!1})})}),s.jsx(T4,{children:U.name})]},U.id))})}),s.jsx(v4,{currentItem:D,isOpen:_,slideIndex:N,setSlideIndex:M,onClose:H,duration:r})]})}const A4=[{id:1,type:"infografic",title:"Sense of Collective Identity - Overview",description:"An overview of how shared history, culture, and values shape collective identity in society.",detailedDescription:"Collective identity is the shared sense of belonging among individuals who associate themselves with a larger group or community. It is shaped by shared language, culture, traditions, and values that connect people to a collective purpose. Understanding this helps explain how societies maintain unity and continuity over time.",imgSrc:An.Slide1},{id:2,type:"carousel",title:"Understanding Collective Identity",description:"Exploring the roots and importance of collective identity in social cohesion.",detailedDescription:"This section examines how collective identity emerges from shared experiences, beliefs, and cultural narratives. It plays a crucial role in fostering social solidarity, promoting cooperation, and helping individuals find meaning through group affiliation. The concept is central to understanding social movements, nationalism, and cultural preservation.",carouselMetaData:[{Id:1,type:"img",imgSrc:An.Slide3},{Id:2,type:"img",imgSrc:An.Slide4},{Id:3,type:"img",imgSrc:An.Slide5},{Id:4,type:"img",imgSrc:An.Slide6}]},{id:3,type:"carousel",title:"Symbols and Shared Culture",description:"How flags, festivals, and traditions represent unity and belonging.",detailedDescription:"Symbols such as national flags, anthems, and cultural rituals embody the essence of collective identity. These shared symbols reinforce emotional ties, transmit values, and sustain collective memory. Festivals and traditions not only celebrate heritage but also help younger generations internalize the sense of belonging to a larger community.",carouselMetaData:[{imgId:1,type:"img",imgSrc:An.Slide7},{imgId:2,type:"img",imgSrc:An.Slide8},{imgId:3,type:"img",imgSrc:An.Slide9}]},{id:5,type:"videoClip",title:"Collective Identity in Action",description:"A short video summarizing real-world examples of collective identity shaping societies.",detailedDescription:"This video highlights real-world scenarios where collective identity has influenced social and political movements. From grassroots environmental campaigns to national independence struggles, it shows how shared beliefs and unity can drive change, empower communities, and redefine social narratives.",videoClipSrc:M1.videoClip1},{id:6,type:"infografic",title:"Evolution of Collective Identity",description:"Tracing the historical development of group identity across civilizations.",detailedDescription:"Collective identity has evolved alongside human societies — from tribal affiliations and religious communities to modern national and digital identities. This infographic explores how globalization, migration, and technology continuously reshape how groups define themselves and relate to others in an interconnected world.",imgSrc:An.Slide5},{id:7,type:"videoClip",title:"Evolution of Collective Identity",description:"Tracing the historical development of group identity across civilizations.",detailedDescription:"Collective identity has evolved alongside human societies — from tribal affiliations and religious communities to modern national and digital identities. This infographic explores how globalization, migration, and technology continuously reshape how groups define themselves and relate to others in an interconnected world.",videoClipSrc:M1.videoClip1}],R4=b.div`
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
`;function O4(){return v.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]),s.jsxs(s.Fragment,{children:[s.jsx(M4,{items:a4,duration:3e3,onOpen:a=>console.log("opened:",a),onClose:()=>console.log("closed")}),s.jsx(R4,{children:s.jsx("div",{className:"d-flex gap-3 flex-column align-items-center mt-3",children:A4.map(a=>s.jsx("div",{style:{width:"100%"},children:a.type==="infografic"?s.jsx(s3,{title:a.title,description:a.description,imgSrc:a.imgSrc,badge:a.badge}):a.type==="carousel"?s.jsx(X3,{data:a}):a.type==="videoClip"?s.jsx(n4,{data:a}):null},a.id))})})]})}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),k4=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,u,o)=>o?o.toUpperCase():u.toLowerCase()),$1=a=>{const r=k4(a);return r.charAt(0).toUpperCase()+r.slice(1)},Tg=(...a)=>a.filter((r,u,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===u).join(" ").trim(),_4=a=>{for(const r in a)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=v.forwardRef(({color:a="currentColor",size:r=24,strokeWidth:u=2,absoluteStrokeWidth:o,className:f="",children:d,iconNode:p,...y},x)=>v.createElement("svg",{ref:x,...$4,width:r,height:r,stroke:a,strokeWidth:o?Number(u)*24/Number(r):u,className:Tg("lucide",f),...!d&&!_4(y)&&{"aria-hidden":"true"},...y},[...p.map(([m,S])=>v.createElement(m,S)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=(a,r)=>{const u=v.forwardRef(({className:o,...f},d)=>v.createElement(D4,{ref:d,iconNode:r,className:Tg(`lucide-${N4($1(a))}`,`lucide-${a}`,o),...f}));return u.displayName=$1(a),u};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],L4=Pe("atom",B4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],kl=Pe("book-open",U4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],Y4=Pe("bookmark",H4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],q4=Pe("calculator",G4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],V4=Pe("check",X4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Z4=Pe("chevron-right",Q4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],J4=Pe("circle-check-big",K4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],W4=Pe("code",F4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],D1=Pe("flask-conical",I4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],e6=Pe("graduation-cap",P4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],B1=Pe("globe",t6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],a6=Pe("grid-3x3",n6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],i6=Pe("languages",l6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],o6=Pe("lightbulb",r6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],zo=Pe("lock",c6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],s6=Pe("sparkles",u6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],d6=Pe("star",f6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],p6=Pe("target",h6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],g6=Pe("trophy",m6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],y6=Pe("x",x6),Ve={bgGrad:"linear-gradient(135deg, #8be3f5 0%, #9fefd0 50%, #b5f8b5 100%)",glass:"rgba(255,255,255,0.95)",border:"rgba(255,255,255,0.9)",text:"#0f172a",subtext:"#64748b",primary:"#0EA5E9",success:"#22c55e",shadow:"0 20px 60px rgba(0,0,0,0.08)",ring:"rgba(14,165,233,0.12)"},v6=Et`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(30px, -30px) rotate(5deg); }
  50% { transform: translate(-20px, -50px) rotate(-5deg); }
  75% { transform: translate(40px, -20px) rotate(3deg); }
`,b6=Et`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`,S6=Et`0%,100%{opacity:.15}50%{opacity:.3}`,w6=Et`0%,49%{opacity:1}50%,100%{opacity:0}`;Et`
  to { stroke-dashoffset: 0; }
`;const j6=b.div`
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${Ve.bgGrad};
  font-family: "Inter", system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  padding: 1rem;
`,L1=b.div`
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
  animation: ${S6} ${({$duration:a})=>a}s infinite ease-in-out;
  animation-delay: ${({$delay:a})=>a}s;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`,sa=b.div`
  position: absolute;
  opacity: ${({$opacity:a})=>a||.15};
  animation: ${b6} ${({$duration:a})=>a}s infinite ease-in-out;
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
`,E6=b.div`
  position: absolute;
  opacity: 0.12;
  animation: ${v6} ${({$duration:a})=>a}s infinite ease-in-out;
  animation-delay: ${({$delay:a})=>a}s;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`,C6=b.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 100%;
`,z6=b.div`
  width: 100%;
  max-width: 1080px;
`,Mg=b.div`
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
`,T6=b(Mg)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,M6=b.div`
  text-align: center;
  margin-bottom: 1.5rem;
  display: grid;
  gap: 1rem;
  justify-items: center;
  @media (min-width: 768px) {
    margin-bottom: 2.5rem;
    gap: 1.25rem;
  }
`,A6=b.h1`
  font-size: clamp(1.6rem, 5.5vw, 2.8rem);
  font-weight: 900;
  line-height: 1.1;
  color: ${Ve.text};
  margin: 0;
  letter-spacing: -0.02em;
`,R6=b.span`
  background: linear-gradient(135deg, ${Ve.primary} 0%, ${Ve.success} 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 0.2px;
`,O6=b.span`
  &::after {
    content: "|";
    animation: ${w6} 1s infinite;
    margin-left: 4px;
  }
`,N6=b.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: ${Ve.subtext};
  margin: 0;
  font-weight: 500;
  max-width: 600px;
`,U1=b.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`,H1=b.div`
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, ${Ve.primary} 0%, ${Ve.success} 100%);
  display: grid;
  place-items: center;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 8px 24px rgba(14, 165, 233, 0.3);
`,Y1=b.div`
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
`,k6=b.div`
  position: relative;
`,_6=b.select`
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
`,G1=b.div`
  display: grid;
  gap: 1.25rem;
`,$6=b.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,D6=b.div`
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
`,B6=b.div`
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
`,L6=b.div`
  margin-top: 0.5rem;
  padding-top: 0.75rem;
  border-top: 2px dashed rgba(0, 0, 0, 0.1);
  ${({$selected:a})=>a&&"border-top-color: rgba(0,0,0,.25);"}
`,U6=b.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;
`,H6=b.button`
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
`,Y6=b(Mg)`
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
`;function G6(){const a=Cf(),[r,u]=v.useState(""),[o,f]=v.useState(""),[d,p]=v.useState(""),[y,x]=v.useState(0),[m,S]=v.useState(!1),[w,z]=v.useState(0),N=["Achieve Excellence","Master Every Subject","Unlock Your Potential"];v.useEffect(()=>{const X=m?40:80,Z=2e3,U=setTimeout(()=>{const Q=N[y];if(!m&&w===Q.length){setTimeout(()=>S(!0),Z);return}if(m&&w===0){S(!1),x(ee=>(ee+1)%N.length);return}z(ee=>ee+(m?-1:1)),p(Q.substring(0,w+(m?-1:1)))},X);return()=>clearTimeout(U)});const M={"Grade 9":{subjects:{English:["Ms. Priya Sharma","Mr. Vivek Sinha","Ms. Ritu Malhotra"],Mathematics:["Mr. Rajesh Kumar","Ms. Neha Gupta","Mr. Ankit Jain"],Science:["Ms. Anjali Mehta","Mr. Suresh Iyer","Ms. Pooja Khanna"],"Social Studies":["Siddharth Sir","Ms. Ananya Bose","Mr. Harish Nanda"],Hindi:["Ms. Kavita Reddy","Mr. Manoj Tiwari","Ms. Poonam Joshi"],"Computer Science":["Mr. Arvind Nair","Ms. Shruti Desai","Mr. Kunal Shah"]}},"Grade 10":{subjects:{English:["Ms. Sunita Verma","Mr. Ashish Bhatia","Ms. Riya Kapoor"],Mathematics:["Mr. Rohan Patel","Ms. Priyanka Das","Mr. Sanjay Kulkarni"],Science:["Ms. Anjali Mehta","Mr. Amit Chakraborty","Ms. Meera Nambiar"],"Social Studies":["Siddharth Sir","Ms. Nidhi Arora","Mr. Parth Ghosh"],Hindi:["Ms. Kavita Reddy","Mr. Ajay Sharma","Ms. Shalini Tripathi"],"Computer Science":["Mr. Arvind Nair","Ms. Tanvi Kulkarni","Mr. Rohit Menon"]}},"Grade 11":{subjects:{English:["Ms. Priya Sharma","Mr. Karan Malhotra","Ms. Deepa Rao"],Physics:["Mr. Nitin Agarwal","Ms. Rachna Bansal","Mr. Vivek Mishra"],Chemistry:["Ms. Sneha Kapoor","Mr. Aditya Mehta","Ms. Nupur Jain"],Biology:["Siddharth Sir","Ms. Radhika Sen","Mr. Mohan Pillai"],Mathematics:["Mr. Deepak Rao","Ms. Shreya Iyer","Mr. Varun Sethi"],"Computer Science":["Mr. Arvind Nair","Ms. Naina Khatri","Mr. Prateek Verma"]}},"Grade 12":{subjects:{English:["Ms. Sunita Verma","Mr. Aalok Trivedi","Ms. Garima Singh"],Physics:["Mr. Nitin Agarwal","Ms. Priti Saxena","Mr. Keshav Reddy"],Chemistry:["Ms. Sneha Kapoor","Mr. Rohan Mukherjee","Ms. Farah Qureshi"],Biology:["Siddharth Sir","Ms. Neelam Vaidya","Mr. Sameer Kulkarni"],Mathematics:["Mr. Deepak Rao","Ms. Ishita Shah","Mr. Yashwant Kumar"],"Computer Science":["Mr. Arvind Nair","Ms. Pallavi Menon","Mr. Siddharth Jain"]}}},D={English:kl,Mathematics:q4,Science:D1,Physics:L4,Chemistry:D1,Biology:B1,"Social Studies":B1,Hindi:i6,"Computer Science":W4},_=r?Object.keys(M[r].subjects):[],L=X=>f(X),H=(X,Z)=>{(X.key==="Enter"||X.key===" ")&&(X.preventDefault(),L(Z))},O=X=>{!r||!o||a("/instalearn/teacher",{state:{grade:r,subject:o,teacher:X}})};return s.jsxs(j6,{children:[s.jsx(L1,{$color:"rgba(255,255,255,0.16)",$size:520,$top:"-12%",$right:"-6%",$duration:8,$delay:0}),s.jsx(L1,{$color:"rgba(255,255,255,0.1)",$size:640,$bottom:"-16%",$left:"-8%",$duration:10,$delay:3}),s.jsx(sa,{style:{top:"8%",left:"5%"},$duration:8,$delay:0,$opacity:.3,children:s.jsx(fa,{$size:100,children:s.jsx("path",{d:"M15 50 L50 25 L85 50 L50 75 Z M50 25 L50 8 M43 8 L57 8"})})}),s.jsx(sa,{style:{top:"12%",right:"8%"},$duration:9,$delay:1,$opacity:.28,children:s.jsxs(fa,{$size:90,children:[s.jsx("circle",{cx:"45",cy:"45",r:"30"}),s.jsx("path",{d:"M45 15 L45 45 L65 65"})]})}),s.jsx(sa,{style:{bottom:"15%",left:"8%"},$duration:10,$delay:2,$opacity:.26,children:s.jsxs(fa,{$size:110,children:[s.jsx("rect",{x:"15",y:"20",width:"80",height:"60",rx:"6"}),s.jsx("path",{d:"M25 35 L50 35 M25 48 L75 48 M25 61 L65 61"})]})}),s.jsx(sa,{style:{bottom:"20%",right:"10%"},$duration:7,$delay:1.5,$opacity:.3,children:s.jsxs(fa,{$size:95,children:[s.jsx("path",{d:"M20 75 L20 28 Q20 15 33 15 L77 15 Q90 15 90 28 L90 75"}),s.jsx("path",{d:"M30 38 L45 38 M30 51 L65 51 M30 64 L58 64"})]})}),s.jsx(sa,{style:{top:"45%",left:"2%"},$duration:11,$delay:3,$opacity:.24,children:s.jsxs(fa,{$size:85,children:[s.jsx("circle",{cx:"42",cy:"42",r:"28"}),s.jsx("path",{d:"M42 14 L42 42 M42 42 L60 42"})]})}),s.jsx(sa,{style:{top:"55%",right:"4%"},$duration:9,$delay:2.5,$opacity:.27,children:s.jsx(fa,{$size:105,children:s.jsx("path",{d:"M25 38 L52 12 L80 38 M38 38 L38 75 L67 75 L67 38"})})}),s.jsx(sa,{style:{top:"30%",right:"18%"},$duration:10,$delay:1.8,$opacity:.25,children:s.jsx(fa,{$size:80,children:s.jsx("path",{d:"M15 40 L40 15 L65 40 L40 65 L15 40 M40 15 L40 35 M35 30 L45 30"})})}),s.jsx(sa,{style:{bottom:"35%",left:"15%"},$duration:8,$delay:2.2,$opacity:.22,children:s.jsxs(fa,{$size:75,children:[s.jsx("circle",{cx:"37",cy:"37",r:"25"}),s.jsx("path",{d:"M37 37 L50 24 M37 37 L50 37"}),s.jsx("circle",{cx:"37",cy:"37",r:"4",fill:"rgba(15, 23, 42, 0.25)"})]})}),[d6,o6,g6,p6,s6].map((X,Z)=>s.jsx(E6,{$duration:9+Z*1.5,$delay:Z*.8,style:{left:`${8+Z*18}%`,top:`${20+Z%2*35}%`},children:s.jsx(X,{size:28,color:"rgba(255,255,255,0.5)"})},Z)),s.jsx(C6,{children:s.jsxs(z6,{children:[s.jsxs(M6,{children:[s.jsx(A6,{children:s.jsx(R6,{children:s.jsx(O6,{children:d})})}),s.jsx(N6,{children:"Your personalized learning journey starts here"})]}),s.jsxs(T6,{children:[s.jsxs(G1,{children:[s.jsxs(U1,{children:[s.jsx(H1,{children:s.jsx(e6,{size:20})}),s.jsxs(Y1,{children:[s.jsx("h2",{children:"Select Your Grade"}),s.jsx("p",{children:"Choose your class to explore subjects"})]})]}),s.jsxs(k6,{children:[s.jsxs(_6,{value:r,onChange:X=>{u(X.target.value),f("")},children:[s.jsx("option",{value:"",disabled:!0,children:"Select Grade"}),Object.keys(M).map(X=>s.jsx("option",{value:X,children:X},X))]}),r&&s.jsx(J4,{size:22,style:{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",color:Ve.success}})]})]}),s.jsxs(G1,{children:[s.jsxs(U1,{children:[s.jsx(H1,{children:s.jsx(kl,{size:20})}),s.jsxs(Y1,{children:[s.jsx("h2",{children:"Choose a Subject"}),s.jsx("p",{children:"Click a teacher to view their profile"})]})]}),_.length?s.jsx($6,{children:_.map(X=>{const Z=D[X]||kl,U=o===X,Q=M[r].subjects[X],ee=Array.isArray(Q)?Q:[Q];return s.jsxs(D6,{role:"button",tabIndex:0,"aria-pressed":U,$selected:U,onClick:()=>L(X),onKeyDown:I=>H(I,X),"aria-label":`Open ${X}`,children:[s.jsxs(B6,{$selected:U,children:[s.jsx("span",{children:X}),s.jsx("div",{className:"icon",children:s.jsx(Z,{size:20})})]}),s.jsx(L6,{$selected:U,children:U?s.jsx(U6,{children:ee.map(I=>s.jsx(H6,{$inSelected:!0,onClick:oe=>{oe.stopPropagation(),O(I)},onKeyDown:oe=>{(oe.key==="Enter"||oe.key===" ")&&(oe.preventDefault(),oe.stopPropagation(),O(I))},children:I},I))}):s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,color:"#475569",fontWeight:700,fontSize:".9rem"},children:[s.jsx("span",{children:"View teachers"}),s.jsx(Z4,{size:16})]})})]},X)})}):s.jsxs(Y6,{children:[s.jsx("div",{className:"icon-wrap",children:s.jsx(kl,{size:32,color:"#64748b"})}),s.jsx("p",{children:"Please select a grade to view subjects"})]})]})]})]})})]})}function q1(a){return be({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"},child:[]}]})(a)}function To(a){return be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(a)}function Qi(a){return be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(a)}function q6(a){return be({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(a)}function X1(a){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(a)}function V1(a){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(a)}function Q1(a){return be({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(a)}function X6(a){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(a)}function Z1(a){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(a)}function K1(a){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"},child:[]}]})(a)}function J1(a){return be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(a)}function Mo(a){return be({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(a)}function Ao(a){return be({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(a)}function V6(a){return be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(a)}const Q6=Et`
  from { opacity: 0; transform: translateY(32px); }
  to { opacity: 1; transform: translateY(0); }
`,Ag=Et`
  from { opacity: 0; }
  to { opacity: 1; }
`,Z6=Et`
  from { opacity: 0; transform: translate(-50%, -48%) scale(0.95); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
`,Rg=Et`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`,J={bgSecondary:"#FFFFFF",card:"#FFFFFF",cardHover:"#F8FAFC",text:"#0F172A",subtext:"#64748B",primary:"#0EA5E9",accent:"#06B6D4",accentGreen:"#10B981",border:"#E2E8F0",borderLight:"#CBD5E1",shadow:"0 20px 50px rgba(0, 0, 0, 0.08)",overlay:"rgba(15, 23, 42, 0.5)"},K6=b.div`
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
    animation: ${Rg} 20s ease-in-out infinite;
    pointer-events: none;
  }
`,J6=b.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${Q6} 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  z-index: 1;
`,qf=b.div`
  background: ${J.card};
  border: 1px solid ${J.border};
  border-radius: 24px;
  box-shadow: ${J.shadow};
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,F1=b.div`
  position: fixed;
  inset: 0;
  background: ${J.overlay};
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${Ag} 0.2s ease-out;
`,W1=b.div`
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
  animation: ${Z6} 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1001;

  @media (max-width: 640px) {
    padding: 24px;
  }
`,I1=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,P1=b.h2`
  font-size: 24px;
  font-weight: 800;
  color: ${J.text};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
`,em=b.button`
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
`,tm=b.select`
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
`,nm=b.div`
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
`,F6=b(qf)`
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
`,W6=b.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: 28px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 20px;
  }
`,I6=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`,P6=b.div`
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
`,e8=b.div`
  display: grid;
  gap: 24px;
`,t8=b.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,n8=b.div`
  display: grid;
  gap: 8px;
`,a8=b.h1`
  font-size: 32px;
  font-weight: 800;
  color: ${J.text};
  margin: 0;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`,l8=b.p`
  color: ${J.subtext};
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`,i8=b.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`,am=b.button`
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
`,r8=b.div`
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
`,o8=b.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 24px 0;
`,lm=b.button`
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
`,im=b(qf)`
  padding: 24px;
  animation: ${Ag} 0.5s ease-out;
`,Og=b.div`
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
`,c8=b.div`
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
`,u8=b.div`
  display: grid;
  gap: 10px;
`,s8=b.h3`
  margin: 0;
  color: ${J.text};
  font-size: 18px;
  font-weight: 700;
`,f8=b.div`
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
`,d8=b.div`
  width: 100%;
  max-width: 200px;
  height: 8px;
  background: #E2E8F0;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid ${J.border};
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
`,h8=b.div`
  height: 100%;
  width: ${a=>Math.min(Math.max(a.value,0),100)}%;
  background: linear-gradient(90deg, ${J.primary}, ${J.accentGreen});
  border-radius: 999px;
  transition: width 0.5s ease;
  box-shadow: 0 0 10px rgba(14, 165, 233, 0.4);
`,p8=b(q6)`
  color: ${J.subtext};
  font-size: 20px;
  transition: all 0.3s ease;

  ${Og}:hover & {
    color: ${J.primary};
    transform: translateX(4px);
  }

  @media (max-width: 640px) {
    display: none;
  }
`,rm=b.div`
  text-align: center;
  padding: 64px 20px;
  color: ${J.subtext};
`,om=b.div`
  font-size: 72px;
  margin-bottom: 16px;
  opacity: 0.3;
  animation: ${Rg} 3s ease-in-out infinite;
`,cm=b.h3`
  color: ${J.text};
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 8px 0;
`,um=b.p`
  margin: 0;
  font-size: 15px;
`,m8=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
`,g8=b(qf)`
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
`,x8=b.div`
  font-weight: 700;
  font-size: 16px;
  color: ${J.text};
  display: inline-flex;
  align-items: center;
  gap: 10px;

  svg {
    color: ${J.primary};
  }
`,y8=b.div`
  font-size: 13px;
  color: ${J.subtext};
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
`,v8=b.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`,sm=b.button`
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
`;function b8(){const[a,r]=v.useState("history"),[u,o]=v.useState(!1),[f,d]=v.useState(!1),[p,y]=v.useState({name:"Priya Sharma",email:"priya.sharma@example.com",avatar:"PS",booksRead:24,hoursSpent:156,favoriteTeacher:"Ms. Sarah"}),[x,m]=v.useState({...p}),[S,w]=v.useState("light"),[z,N]=v.useState("all");v.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]);const M=[{id:1,title:"Sense of Collective Identity",teacher:"Mr. Arjun Mehta",time:"2 hours ago",progress:75,icon:s.jsx(Qi,{})},{id:2,title:"Understanding Diversity",teacher:"Ms. Nisha Rao",time:"Yesterday",progress:45,icon:s.jsx(To,{})},{id:3,title:"Nationalism in India",teacher:"Dr. Kavita Iyer",time:"2 days ago",progress:90,icon:s.jsx(Z1,{})},{id:4,title:"Democracy & Rights",teacher:"Prof. R. Menon",time:"1 week ago",progress:100,icon:s.jsx(K1,{})}],D=[{id:"f1",title:"Globalisation & Indian Economy",by:"Siddharth Sir",reads:12},{id:"f2",title:"Federalism Basics",by:"Anita Ma'am",reads:9},{id:"f3",title:"Judiciary: Structure",by:"R. Sharma",reads:14},{id:"f4",title:"Gender, Religion & Caste",by:"S. Verma",reads:7}],_=()=>{y({...x}),o(!1)},L=(O,X)=>{m({...x,[O]:X})},H=(O,X)=>{(O.key==="Enter"||O.key===" ")&&O.preventDefault()};return s.jsxs(K6,{$theme:S,children:[s.jsxs(J6,{children:[s.jsx(F6,{children:s.jsxs(W6,{children:[s.jsx(I6,{children:s.jsx(P6,{"aria-label":"User avatar",children:s.jsx(V6,{size:32})})}),s.jsxs(e8,{children:[s.jsxs(t8,{children:[s.jsxs(n8,{children:[s.jsx(a8,{children:p.name}),s.jsx(l8,{children:p.email})]}),s.jsxs(i8,{children:[s.jsxs(am,{type:"button","aria-label":"Edit profile",onClick:()=>{m(p),o(!0)},children:[s.jsx(Q1,{})," ",s.jsx("span",{children:"Edit"})]}),s.jsxs(am,{type:"button","aria-label":"Settings",onClick:()=>d(!0),children:[s.jsx(V1,{})," ",s.jsx("span",{children:"Settings"})]})]})]}),s.jsxs(r8,{children:[s.jsxs(Bs,{children:[s.jsx(Ls,{"aria-hidden":"true",children:s.jsx(To,{})}),s.jsxs(Us,{children:[s.jsx(Hs,{children:p.booksRead}),s.jsx(Ys,{children:"Books Read"})]}),s.jsx(Gs,{title:"Lifetime reads",children:s.jsx(K1,{})})]}),s.jsxs(Bs,{children:[s.jsx(Ls,{"aria-hidden":"true",children:s.jsx(X1,{})}),s.jsxs(Us,{children:[s.jsx(Hs,{children:p.hoursSpent}),s.jsx(Ys,{children:"Study Hours"})]}),s.jsx(Gs,{title:"Consistent!",children:s.jsx(Mo,{})})]}),s.jsxs(Bs,{children:[s.jsx(Ls,{"aria-hidden":"true",children:s.jsx(Qi,{})}),s.jsxs(Us,{children:[s.jsx(Hs,{children:p.favoriteTeacher}),s.jsx(Ys,{children:"Favourite Teacher"})]}),s.jsx(Gs,{children:s.jsx(X6,{})})]})]})]})]})}),s.jsxs(o8,{children:[s.jsxs(lm,{active:a==="history",onClick:()=>r("history"),"aria-pressed":a==="history",children:[s.jsx(Z1,{})," Reading History"]}),s.jsxs(lm,{active:a==="favorites",onClick:()=>r("favorites"),"aria-pressed":a==="favorites",children:[s.jsx(Mo,{})," Favorites"]})]}),a==="history"?s.jsx(im,{children:M.length>0?M.map(O=>s.jsxs(Og,{role:"button",tabIndex:0,onKeyDown:X=>H(X),onClick:()=>{},"aria-label":`Open ${O.title}`,children:[s.jsx(c8,{"aria-hidden":"true",children:O.icon}),s.jsxs(u8,{children:[s.jsx(s8,{children:O.title}),s.jsxs(f8,{children:[s.jsxs(qs,{children:[s.jsx(Qi,{})," ",O.teacher]}),s.jsxs(qs,{children:[s.jsx(X1,{})," ",O.time]}),s.jsxs(qs,{children:[s.jsx(To,{})," ",O.progress,"% complete"]})]}),s.jsx(d8,{"aria-hidden":"true",children:s.jsx(h8,{value:O.progress})})]}),s.jsx(p8,{})]},O.id)):s.jsxs(rm,{children:[s.jsx(om,{children:s.jsx(q1,{})}),s.jsx(cm,{children:"No history yet"}),s.jsx(um,{children:"Start reading to see your progress here."})]})}):s.jsx(im,{children:D.length>0?s.jsx(m8,{children:D.map(O=>s.jsxs(g8,{children:[s.jsxs(x8,{children:[s.jsx(q1,{})," ",O.title]}),s.jsxs(y8,{children:[s.jsxs("span",{children:["By ",O.by]}),s.jsx("span",{children:"•"}),s.jsxs("span",{children:[O.reads," reads"]})]}),s.jsxs(v8,{children:[s.jsxs(sm,{type:"button",children:[s.jsx(To,{})," Open"]}),s.jsxs(sm,{type:"button",children:[s.jsx(Mo,{})," Unfavourite"]})]})]},O.id))}):s.jsxs(rm,{children:[s.jsx(om,{children:s.jsx(Mo,{})}),s.jsx(cm,{children:"No favorites yet"}),s.jsx(um,{children:"Tap the star on a lesson to save it here."})]})})]}),u&&s.jsxs(s.Fragment,{children:[s.jsx(F1,{onClick:()=>o(!1)}),s.jsxs(W1,{role:"dialog","aria-modal":"true","aria-labelledby":"editProfileTitle",children:[s.jsxs(I1,{children:[s.jsxs(P1,{id:"editProfileTitle",children:[s.jsx(Q1,{})," Edit Profile"]}),s.jsx(em,{type:"button",onClick:()=>o(!1),"aria-label":"Close edit profile",children:s.jsx(Ao,{})})]}),s.jsxs(da,{children:[s.jsx(ha,{htmlFor:"name",children:"Name"}),s.jsx(Tl,{id:"name",value:x.name,onChange:O=>L("name",O.target.value)})]}),s.jsxs(da,{children:[s.jsx(ha,{htmlFor:"email",children:"Email"}),s.jsx(Tl,{id:"email",type:"email",value:x.email,onChange:O=>L("email",O.target.value)})]}),s.jsxs(da,{children:[s.jsx(ha,{htmlFor:"avatar",children:"Avatar Initials"}),s.jsx(Tl,{id:"avatar",value:x.avatar,onChange:O=>L("avatar",O.target.value)})]}),s.jsxs(da,{children:[s.jsx(ha,{htmlFor:"booksRead",children:"Books Read"}),s.jsx(Tl,{id:"booksRead",type:"number",min:0,value:x.booksRead,onChange:O=>L("booksRead",Number(O.target.value))})]}),s.jsxs(da,{children:[s.jsx(ha,{htmlFor:"hoursSpent",children:"Study Hours"}),s.jsx(Tl,{id:"hoursSpent",type:"number",min:0,value:x.hoursSpent,onChange:O=>L("hoursSpent",Number(O.target.value))})]}),s.jsxs(da,{children:[s.jsx(ha,{htmlFor:"favTeacher",children:"Favourite Teacher"}),s.jsx(Tl,{id:"favTeacher",value:x.favoriteTeacher,onChange:O=>L("favoriteTeacher",O.target.value)})]}),s.jsxs(nm,{children:[s.jsxs(Ro,{type:"button",onClick:()=>o(!1),children:[s.jsx(Ao,{})," Cancel"]}),s.jsxs(Ro,{type:"button",primary:!0,onClick:_,children:[s.jsx(J1,{})," Save"]})]})]})]}),f&&s.jsxs(s.Fragment,{children:[s.jsx(F1,{onClick:()=>d(!1)}),s.jsxs(W1,{role:"dialog","aria-modal":"true","aria-labelledby":"settingsTitle",children:[s.jsxs(I1,{children:[s.jsxs(P1,{id:"settingsTitle",children:[s.jsx(V1,{})," Settings"]}),s.jsx(em,{type:"button",onClick:()=>d(!1),"aria-label":"Close settings",children:s.jsx(Ao,{})})]}),s.jsxs(da,{children:[s.jsx(ha,{htmlFor:"theme",children:"Theme"}),s.jsxs(tm,{id:"theme",value:S,onChange:O=>w(O.target.value),children:[s.jsx("option",{value:"light",children:"Light"}),s.jsx("option",{value:"dark",children:"Dark"})]})]}),s.jsxs(da,{children:[s.jsx(ha,{htmlFor:"notifications",children:"Notifications"}),s.jsxs(tm,{id:"notifications",value:z,onChange:O=>N(O.target.value),children:[s.jsx("option",{value:"all",children:"All activity"}),s.jsx("option",{value:"mentions",children:"Mentions only"}),s.jsx("option",{value:"none",children:"None"})]})]}),s.jsxs(nm,{children:[s.jsxs(Ro,{type:"button",onClick:()=>d(!1),children:[s.jsx(Ao,{})," Close"]}),s.jsxs(Ro,{type:"button",primary:!0,onClick:()=>d(!1),children:[s.jsx(J1,{})," Apply"]})]})]})]})]})}const S8=Et`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
`,w8=Et`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,j8=Et`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,E8=Et`
  0% {
    width: 0%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 0%;
  }
`,C8=b.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`,z8=b.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,Xs=b.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: ${S8} 20s infinite ease-in-out;

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
`,T8=b.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  animation: ${w8} 0.8s ease-out;

  @media (max-width: 600px) {
    margin: 20px;
    padding: 20px 20px;
  }
`,M8=b.div`
  margin-bottom: 0px;
  position: relative;
`,A8=b.div`
  font-size: 70px;
  animation: ${j8} 2s infinite;
`,R8=b.h1`
  font-size: 2.5em;
  color: #2d3748;
  margin-bottom: 10px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 2em;
  }
`,O8=b.p`
  font-size: 1.2em;
  color: #718096;
  margin-bottom: 25px;
  line-height: 1.6;
`,N8=b.div`
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`,k8=b.div`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  animation: ${E8} 3s ease-in-out infinite;
`,_8=b.div`
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
`,$8=b.button`
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
`;function fm(){const[a,r]=v.useState(!1),u=()=>{r(!0),setTimeout(()=>{r(!1)},2e3)};return s.jsxs(C8,{children:[s.jsxs(z8,{children:[s.jsx(Xs,{}),s.jsx(Xs,{}),s.jsx(Xs,{})]}),s.jsxs(T8,{children:[s.jsx(M8,{children:s.jsx(A8,{children:"🚧"})}),s.jsx(R8,{children:"Building Something Amazing"}),s.jsx(O8,{children:"We're working hard to bring you an incredible new feature. Stay tuned!"}),s.jsx(N8,{children:s.jsx(k8,{})}),s.jsxs(_8,{children:[s.jsxs(Vs,{children:[s.jsx(Qs,{children:"⚡"}),s.jsx(Zs,{children:"Lightning Fast"})]}),s.jsxs(Vs,{children:[s.jsx(Qs,{children:"🎨"}),s.jsx(Zs,{children:"Beautiful Design"})]}),s.jsxs(Vs,{children:[s.jsx(Qs,{children:"🔒"}),s.jsx(Zs,{children:"Secure & Private"})]})]}),s.jsx($8,{onClick:u,$notified:a,children:a?"✓ You'll be notified!":"Notify Me When Ready"})]})]})}var Ks={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var dm;function D8(){return dm||(dm=1,(function(a){(function(){var r={}.hasOwnProperty;function u(){for(var d="",p=0;p<arguments.length;p++){var y=arguments[p];y&&(d=f(d,o(y)))}return d}function o(d){if(typeof d=="string"||typeof d=="number")return d;if(typeof d!="object")return"";if(Array.isArray(d))return u.apply(null,d);if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]"))return d.toString();var p="";for(var y in d)r.call(d,y)&&d[y]&&(p=f(p,y));return p}function f(d,p){return p?d?d+" "+p:d+p:d}a.exports?(u.default=u,a.exports=u):window.classNames=u})()})(Ks)),Ks.exports}var B8=D8();const rt=Fi(B8);function yf(){return yf=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var o in u)({}).hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},yf.apply(null,arguments)}function Ng(a,r){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(r.indexOf(o)!==-1)continue;u[o]=a[o]}return u}function hm(a){return"default"+a.charAt(0).toUpperCase()+a.substr(1)}function L8(a){var r=U8(a,"string");return typeof r=="symbol"?r:String(r)}function U8(a,r){if(typeof a!="object"||a===null)return a;var u=a[Symbol.toPrimitive];if(u!==void 0){var o=u.call(a,r);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}function H8(a,r,u){var o=v.useRef(a!==void 0),f=v.useState(r),d=f[0],p=f[1],y=a!==void 0,x=o.current;return o.current=y,!y&&x&&d!==r&&p(r),[y?a:d,v.useCallback(function(m){for(var S=arguments.length,w=new Array(S>1?S-1:0),z=1;z<S;z++)w[z-1]=arguments[z];u&&u.apply(void 0,[m].concat(w)),p(m)},[u])]}function kg(a,r){return Object.keys(r).reduce(function(u,o){var f,d=u,p=d[hm(o)],y=d[o],x=Ng(d,[hm(o),o].map(L8)),m=r[o],S=H8(y,p,a[m]),w=S[0],z=S[1];return yf({},x,(f={},f[o]=w,f[m]=z,f))},a)}function vf(a,r){return vf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,o){return u.__proto__=o,u},vf(a,r)}function Y8(a,r){a.prototype=Object.create(r.prototype),a.prototype.constructor=a,vf(a,r)}const G8=["xxl","xl","lg","md","sm","xs"],q8="xs",_g=v.createContext({prefixes:{},breakpoints:G8,minBreakpoint:q8}),{Consumer:uw,Provider:sw}=_g;function Ct(a,r){const{prefixes:u}=v.useContext(_g);return a||u[r]||r}function Xf(a){return a&&a.ownerDocument||document}function X8(a){var r=Xf(a);return r&&r.defaultView||window}function V8(a,r){return X8(a).getComputedStyle(a,r)}var Q8=/([A-Z])/g;function Z8(a){return a.replace(Q8,"-$1").toLowerCase()}var K8=/^ms-/;function Oo(a){return Z8(a).replace(K8,"-ms-")}var J8=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function F8(a){return!!(a&&J8.test(a))}function _n(a,r){var u="",o="";if(typeof r=="string")return a.style.getPropertyValue(Oo(r))||V8(a).getPropertyValue(Oo(r));Object.keys(r).forEach(function(f){var d=r[f];!d&&d!==0?a.style.removeProperty(Oo(f)):F8(f)?o+=f+"("+d+") ":u+=Oo(f)+": "+d+";"}),o&&(u+="transform: "+o+";"),a.style.cssText+=";"+u}var Js={exports:{}},Fs,pm;function W8(){if(pm)return Fs;pm=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Fs=a,Fs}var Ws,mm;function I8(){if(mm)return Ws;mm=1;var a=W8();function r(){}function u(){}return u.resetWarningCache=r,Ws=function(){function o(p,y,x,m,S,w){if(w!==a){var z=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw z.name="Invariant Violation",z}}o.isRequired=o;function f(){return o}var d={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:f,element:o,elementType:o,instanceOf:f,node:o,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:u,resetWarningCache:r};return d.PropTypes=d,d},Ws}var gm;function P8(){return gm||(gm=1,Js.exports=I8()()),Js.exports}var eS=P8();const Is=Fi(eS),xm={disabled:!1},$g=ke.createContext(null);var tS=function(r){return r.scrollTop},Xi="unmounted",ma="exited",en="entering",On="entered",Ji="exiting",Ln=(function(a){Y8(r,a);function r(o,f){var d;d=a.call(this,o,f)||this;var p=f,y=p&&!p.isMounting?o.enter:o.appear,x;return d.appearStatus=null,o.in?y?(x=ma,d.appearStatus=en):x=On:o.unmountOnExit||o.mountOnEnter?x=Xi:x=ma,d.state={status:x},d.nextCallback=null,d}r.getDerivedStateFromProps=function(f,d){var p=f.in;return p&&d.status===Xi?{status:ma}:null};var u=r.prototype;return u.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},u.componentDidUpdate=function(f){var d=null;if(f!==this.props){var p=this.state.status;this.props.in?p!==en&&p!==On&&(d=en):(p===en||p===On)&&(d=Ji)}this.updateStatus(!1,d)},u.componentWillUnmount=function(){this.cancelNextCallback()},u.getTimeouts=function(){var f=this.props.timeout,d,p,y;return d=p=y=f,f!=null&&typeof f!="number"&&(d=f.exit,p=f.enter,y=f.appear!==void 0?f.appear:p),{exit:d,enter:p,appear:y}},u.updateStatus=function(f,d){if(f===void 0&&(f=!1),d!==null)if(this.cancelNextCallback(),d===en){if(this.props.unmountOnExit||this.props.mountOnEnter){var p=this.props.nodeRef?this.props.nodeRef.current:Ol.findDOMNode(this);p&&tS(p)}this.performEnter(f)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ma&&this.setState({status:Xi})},u.performEnter=function(f){var d=this,p=this.props.enter,y=this.context?this.context.isMounting:f,x=this.props.nodeRef?[y]:[Ol.findDOMNode(this),y],m=x[0],S=x[1],w=this.getTimeouts(),z=y?w.appear:w.enter;if(!f&&!p||xm.disabled){this.safeSetState({status:On},function(){d.props.onEntered(m)});return}this.props.onEnter(m,S),this.safeSetState({status:en},function(){d.props.onEntering(m,S),d.onTransitionEnd(z,function(){d.safeSetState({status:On},function(){d.props.onEntered(m,S)})})})},u.performExit=function(){var f=this,d=this.props.exit,p=this.getTimeouts(),y=this.props.nodeRef?void 0:Ol.findDOMNode(this);if(!d||xm.disabled){this.safeSetState({status:ma},function(){f.props.onExited(y)});return}this.props.onExit(y),this.safeSetState({status:Ji},function(){f.props.onExiting(y),f.onTransitionEnd(p.exit,function(){f.safeSetState({status:ma},function(){f.props.onExited(y)})})})},u.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},u.safeSetState=function(f,d){d=this.setNextCallback(d),this.setState(f,d)},u.setNextCallback=function(f){var d=this,p=!0;return this.nextCallback=function(y){p&&(p=!1,d.nextCallback=null,f(y))},this.nextCallback.cancel=function(){p=!1},this.nextCallback},u.onTransitionEnd=function(f,d){this.setNextCallback(d);var p=this.props.nodeRef?this.props.nodeRef.current:Ol.findDOMNode(this),y=f==null&&!this.props.addEndListener;if(!p||y){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var x=this.props.nodeRef?[this.nextCallback]:[p,this.nextCallback],m=x[0],S=x[1];this.props.addEndListener(m,S)}f!=null&&setTimeout(this.nextCallback,f)},u.render=function(){var f=this.state.status;if(f===Xi)return null;var d=this.props,p=d.children;d.in,d.mountOnEnter,d.unmountOnExit,d.appear,d.enter,d.exit,d.timeout,d.addEndListener,d.onEnter,d.onEntering,d.onEntered,d.onExit,d.onExiting,d.onExited,d.nodeRef;var y=Ng(d,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ke.createElement($g.Provider,{value:null},typeof p=="function"?p(f,y):ke.cloneElement(ke.Children.only(p),y))},r})(ke.Component);Ln.contextType=$g;Ln.propTypes={};function Ml(){}Ln.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ml,onEntering:Ml,onEntered:Ml,onExit:Ml,onExiting:Ml,onExited:Ml};Ln.UNMOUNTED=Xi;Ln.EXITED=ma;Ln.ENTERING=en;Ln.ENTERED=On;Ln.EXITING=Ji;function nS(a){return a.code==="Escape"||a.keyCode===27}function aS(){const a=v.version.split(".");return{major:+a[0],minor:+a[1],patch:+a[2]}}function Xl(a){if(!a||typeof a=="function")return null;const{major:r}=aS();return r>=19?a.props.ref:a.ref}const ic=!!(typeof window<"u"&&window.document&&window.document.createElement);var bf=!1,Sf=!1;try{var Ps={get passive(){return bf=!0},get once(){return Sf=bf=!0}};ic&&(window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,!0))}catch{}function lS(a,r,u,o){if(o&&typeof o!="boolean"&&!Sf){var f=o.once,d=o.capture,p=u;!Sf&&f&&(p=u.__once||function y(x){this.removeEventListener(r,y,d),u.call(this,x)},u.__once=p),a.addEventListener(r,p,bf?o:d)}a.addEventListener(r,u,o)}function iS(a,r,u,o){var f=o&&typeof o!="boolean"?o.capture:o;a.removeEventListener(r,u,f),u.__once&&a.removeEventListener(r,u.__once,f)}function Ko(a,r,u,o){return lS(a,r,u,o),function(){iS(a,r,u,o)}}function rS(a,r,u,o){if(o===void 0&&(o=!0),a){var f=document.createEvent("HTMLEvents");f.initEvent(r,u,o),a.dispatchEvent(f)}}function oS(a){var r=_n(a,"transitionDuration")||"",u=r.indexOf("ms")===-1?1e3:1;return parseFloat(r)*u}function cS(a,r,u){u===void 0&&(u=5);var o=!1,f=setTimeout(function(){o||rS(a,"transitionend",!0)},r+u),d=Ko(a,"transitionend",function(){o=!0},{once:!0});return function(){clearTimeout(f),d()}}function uS(a,r,u,o){u==null&&(u=oS(a)||0);var f=cS(a,u,o),d=Ko(a,"transitionend",r);return function(){f(),d()}}function ym(a,r){const u=_n(a,r)||"",o=u.indexOf("ms")===-1?1e3:1;return parseFloat(u)*o}function Vf(a,r){const u=ym(a,"transitionDuration"),o=ym(a,"transitionDelay"),f=uS(a,d=>{d.target===a&&(f(),r(d))},u+o)}function Gi(...a){return a.filter(r=>r!=null).reduce((r,u)=>{if(typeof u!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return r===null?u:function(...f){r.apply(this,f),u.apply(this,f)}},null)}function Dg(a){a.offsetHeight}const vm=a=>!a||typeof a=="function"?a:r=>{a.current=r};function sS(a,r){const u=vm(a),o=vm(r);return f=>{u&&u(f),o&&o(f)}}function fS(a,r){return v.useMemo(()=>sS(a,r),[a,r])}function dS(a){return a&&"setState"in a?Ol.findDOMNode(a):a??null}const rc=ke.forwardRef(({onEnter:a,onEntering:r,onEntered:u,onExit:o,onExiting:f,onExited:d,addEndListener:p,children:y,childRef:x,...m},S)=>{const w=v.useRef(null),z=fS(w,x),N=U=>{z(dS(U))},M=U=>Q=>{U&&w.current&&U(w.current,Q)},D=v.useCallback(M(a),[a]),_=v.useCallback(M(r),[r]),L=v.useCallback(M(u),[u]),H=v.useCallback(M(o),[o]),O=v.useCallback(M(f),[f]),X=v.useCallback(M(d),[d]),Z=v.useCallback(M(p),[p]);return s.jsx(Ln,{ref:S,...m,onEnter:D,onEntered:L,onEntering:_,onExit:H,onExited:X,onExiting:O,addEndListener:Z,nodeRef:w,children:typeof y=="function"?(U,Q)=>y(U,{...Q,ref:N}):ke.cloneElement(y,{ref:N})})});rc.displayName="TransitionWrapper";const hS={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function pS(a,r){const u=`offset${a[0].toUpperCase()}${a.slice(1)}`,o=r[u],f=hS[a];return o+parseInt(_n(r,f[0]),10)+parseInt(_n(r,f[1]),10)}const mS={[ma]:"collapse",[Ji]:"collapsing",[en]:"collapsing",[On]:"collapse show"},Bg=ke.forwardRef(({onEnter:a,onEntering:r,onEntered:u,onExit:o,onExiting:f,className:d,children:p,dimension:y="height",in:x=!1,timeout:m=300,mountOnEnter:S=!1,unmountOnExit:w=!1,appear:z=!1,getDimensionValue:N=pS,...M},D)=>{const _=typeof y=="function"?y():y,L=v.useMemo(()=>Gi(U=>{U.style[_]="0"},a),[_,a]),H=v.useMemo(()=>Gi(U=>{const Q=`scroll${_[0].toUpperCase()}${_.slice(1)}`;U.style[_]=`${U[Q]}px`},r),[_,r]),O=v.useMemo(()=>Gi(U=>{U.style[_]=null},u),[_,u]),X=v.useMemo(()=>Gi(U=>{U.style[_]=`${N(_,U)}px`,Dg(U)},o),[o,N,_]),Z=v.useMemo(()=>Gi(U=>{U.style[_]=null},f),[_,f]);return s.jsx(rc,{ref:D,addEndListener:Vf,...M,"aria-expanded":M.role?x:null,onEnter:L,onEntering:H,onEntered:O,onExit:X,onExiting:Z,childRef:Xl(p),in:x,timeout:m,mountOnEnter:S,unmountOnExit:w,appear:z,children:(U,Q)=>ke.cloneElement(p,{...Q,className:rt(d,p.props.className,mS[U],_==="width"&&"collapse-horizontal")})})});Bg.displayName="Collapse";function gS(a){const r=v.useRef(a);return v.useEffect(()=>{r.current=a},[a]),r}function oc(a){const r=gS(a);return v.useCallback(function(...u){return r.current&&r.current(...u)},[r])}const xS=(a=>v.forwardRef((r,u)=>s.jsx("div",{...r,ref:u,className:rt(r.className,a)})));function yS(a){const r=v.useRef(a);return v.useEffect(()=>{r.current=a},[a]),r}function Nn(a){const r=yS(a);return v.useCallback(function(...u){return r.current&&r.current(...u)},[r])}function vS(){const a=v.useRef(!0),r=v.useRef(()=>a.current);return v.useEffect(()=>(a.current=!0,()=>{a.current=!1}),[]),r.current}function bS(a){const r=v.useRef(null);return v.useEffect(()=>{r.current=a}),r.current}const SS=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",wS=typeof document<"u",bm=wS||SS?v.useLayoutEffect:v.useEffect,jS=["as","disabled"];function ES(a,r){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(r.indexOf(o)>=0)continue;u[o]=a[o]}return u}function CS(a){return!a||a.trim()==="#"}function Lg({tagName:a,disabled:r,href:u,target:o,rel:f,role:d,onClick:p,tabIndex:y=0,type:x}){a||(u!=null||o!=null||f!=null?a="a":a="button");const m={tagName:a};if(a==="button")return[{type:x||"button",disabled:r},m];const S=z=>{if((r||a==="a"&&CS(u))&&z.preventDefault(),r){z.stopPropagation();return}p?.(z)},w=z=>{z.key===" "&&(z.preventDefault(),S(z))};return a==="a"&&(u||(u="#"),r&&(u=void 0)),[{role:d??"button",disabled:void 0,tabIndex:r?void 0:y,href:u,target:a==="a"?o:void 0,"aria-disabled":r||void 0,rel:a==="a"?f:void 0,onClick:S,onKeyDown:w},m]}const Ug=v.forwardRef((a,r)=>{let{as:u,disabled:o}=a,f=ES(a,jS);const[d,{tagName:p}]=Lg(Object.assign({tagName:u,disabled:o},f));return s.jsx(p,Object.assign({},f,d,{ref:r}))});Ug.displayName="Button";const zS=["onKeyDown"];function TS(a,r){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(r.indexOf(o)>=0)continue;u[o]=a[o]}return u}function MS(a){return!a||a.trim()==="#"}const Hg=v.forwardRef((a,r)=>{let{onKeyDown:u}=a,o=TS(a,zS);const[f]=Lg(Object.assign({tagName:"a"},o)),d=Nn(p=>{f.onKeyDown(p),u?.(p)});return MS(o.href)||o.role==="button"?s.jsx("a",Object.assign({ref:r},o,f,{onKeyDown:d})):s.jsx("a",Object.assign({ref:r},o,{onKeyDown:u}))});Hg.displayName="Anchor";const AS={[en]:"show",[On]:"show"},Yg=v.forwardRef(({className:a,children:r,transitionClasses:u={},onEnter:o,...f},d)=>{const p={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...f},y=v.useCallback((x,m)=>{Dg(x),o?.(x,m)},[o]);return s.jsx(rc,{ref:d,addEndListener:Vf,...p,onEnter:y,childRef:Xl(r),children:(x,m)=>v.cloneElement(r,{...m,className:rt("fade",a,r.props.className,AS[x],u[x])})})});Yg.displayName="Fade";const RS={"aria-label":Is.string,onClick:Is.func,variant:Is.oneOf(["white"])},Qf=v.forwardRef(({className:a,variant:r,"aria-label":u="Close",...o},f)=>s.jsx("button",{ref:f,type:"button",className:rt("btn-close",r&&`btn-close-${r}`,a),"aria-label":u,...o}));Qf.displayName="CloseButton";Qf.propTypes=RS;const Gg=v.createContext(null);Gg.displayName="CardHeaderContext";const qg=v.forwardRef(({bsPrefix:a,fluid:r=!1,as:u="div",className:o,...f},d)=>{const p=Ct(a,"container"),y=typeof r=="string"?`-${r}`:"-fluid";return s.jsx(u,{ref:d,...f,className:rt(o,r?`${p}${y}`:p)})});qg.displayName="Container";var OS=Function.prototype.bind.call(Function.prototype.call,[].slice);function Ba(a,r){return OS(a.querySelectorAll(r))}function NS(){const[,a]=v.useReducer(r=>r+1,0);return a}function Sm(a,r){if(a.contains)return a.contains(r);if(a.compareDocumentPosition)return a===r||!!(a.compareDocumentPosition(r)&16)}const Jo=v.createContext(null),Zf=(a,r=null)=>a!=null?String(a):r||null,Kf=v.createContext(null);Kf.displayName="NavContext";const kS="data-rr-ui-",_S="rrUi";function cc(a){return`${kS}${a}`}function $S(a){return`${_S}${a}`}const Xg=v.createContext(ic?window:void 0);Xg.Provider;function Jf(){return v.useContext(Xg)}const DS=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",BS=typeof document<"u",LS=BS||DS?v.useLayoutEffect:v.useEffect,Vl=v.createContext(null);Vl.displayName="NavbarContext";const wm=a=>!a||typeof a=="function"?a:r=>{a.current=r};function US(a,r){const u=wm(a),o=wm(r);return f=>{u&&u(f),o&&o(f)}}function uc(a,r){return v.useMemo(()=>US(a,r),[a,r])}const Vg=v.createContext(null),HS=["as","active","eventKey"];function YS(a,r){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(r.indexOf(o)>=0)continue;u[o]=a[o]}return u}function Qg({key:a,onClick:r,active:u,id:o,role:f,disabled:d}){const p=v.useContext(Jo),y=v.useContext(Kf),x=v.useContext(Vg);let m=u;const S={role:f};if(y){!f&&y.role==="tablist"&&(S.role="tab");const w=y.getControllerId(a??null),z=y.getControlledId(a??null);S[cc("event-key")]=a,S.id=w||o,m=u==null&&a!=null?y.activeKey===a:u,(m||!(x!=null&&x.unmountOnExit)&&!(x!=null&&x.mountOnEnter))&&(S["aria-controls"]=z)}return S.role==="tab"&&(S["aria-selected"]=m,m||(S.tabIndex=-1),d&&(S.tabIndex=-1,S["aria-disabled"]=!0)),S.onClick=Nn(w=>{d||(r?.(w),a!=null&&p&&!w.isPropagationStopped()&&p(a,w))}),[S,{isActive:m}]}const Zg=v.forwardRef((a,r)=>{let{as:u=Ug,active:o,eventKey:f}=a,d=YS(a,HS);const[p,y]=Qg(Object.assign({key:Zf(f,d.href),active:o},d));return p[cc("active")]=y.isActive,s.jsx(u,Object.assign({},d,p,{ref:r}))});Zg.displayName="NavItem";const GS=["as","onSelect","activeKey","role","onKeyDown"];function qS(a,r){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(r.indexOf(o)>=0)continue;u[o]=a[o]}return u}const jm=()=>{},Em=cc("event-key"),Kg=v.forwardRef((a,r)=>{let{as:u="div",onSelect:o,activeKey:f,role:d,onKeyDown:p}=a,y=qS(a,GS);const x=NS(),m=v.useRef(!1),S=v.useContext(Jo),w=v.useContext(Vg);let z,N;w&&(d=d||"tablist",f=w.activeKey,z=w.getControlledId,N=w.getControllerId);const M=v.useRef(null),D=O=>{const X=M.current;if(!X)return null;const Z=Ba(X,`[${Em}]:not([aria-disabled=true])`),U=X.querySelector("[aria-selected=true]");if(!U||U!==document.activeElement)return null;const Q=Z.indexOf(U);if(Q===-1)return null;let ee=Q+O;return ee>=Z.length&&(ee=0),ee<0&&(ee=Z.length-1),Z[ee]},_=(O,X)=>{O!=null&&(o?.(O,X),S?.(O,X))},L=O=>{if(p?.(O),!w)return;let X;switch(O.key){case"ArrowLeft":case"ArrowUp":X=D(-1);break;case"ArrowRight":case"ArrowDown":X=D(1);break;default:return}X&&(O.preventDefault(),_(X.dataset[$S("EventKey")]||null,O),m.current=!0,x())};v.useEffect(()=>{if(M.current&&m.current){const O=M.current.querySelector(`[${Em}][aria-selected=true]`);O?.focus()}m.current=!1});const H=uc(r,M);return s.jsx(Jo.Provider,{value:_,children:s.jsx(Kf.Provider,{value:{role:d,activeKey:Zf(f),getControlledId:z||jm,getControllerId:N||jm},children:s.jsx(u,Object.assign({},y,{onKeyDown:L,ref:H,role:d}))})})});Kg.displayName="Nav";const XS=Object.assign(Kg,{Item:Zg});function ef(a){a===void 0&&(a=Xf());try{var r=a.activeElement;return!r||!r.nodeName?null:r}catch{return a.body}}function VS(a){const r=v.useRef(a);return r.current=a,r}function QS(a){const r=VS(a);v.useEffect(()=>()=>r.current(),[])}function ZS(a=document){const r=a.defaultView;return Math.abs(r.innerWidth-a.documentElement.clientWidth)}const Cm=cc("modal-open");class Ff{constructor({ownerDocument:r,handleContainerOverflow:u=!0,isRTL:o=!1}={}){this.handleContainerOverflow=u,this.isRTL=o,this.modals=[],this.ownerDocument=r}getScrollbarWidth(){return ZS(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(r){}removeModalAttributes(r){}setContainerStyle(r){const u={overflow:"hidden"},o=this.isRTL?"paddingLeft":"paddingRight",f=this.getElement();r.style={overflow:f.style.overflow,[o]:f.style[o]},r.scrollBarWidth&&(u[o]=`${parseInt(_n(f,o)||"0",10)+r.scrollBarWidth}px`),f.setAttribute(Cm,""),_n(f,u)}reset(){[...this.modals].forEach(r=>this.remove(r))}removeContainerStyle(r){const u=this.getElement();u.removeAttribute(Cm),Object.assign(u.style,r.style)}add(r){let u=this.modals.indexOf(r);return u!==-1||(u=this.modals.length,this.modals.push(r),this.setModalAttributes(r),u!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),u}remove(r){const u=this.modals.indexOf(r);u!==-1&&(this.modals.splice(u,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(r))}isTopModal(r){return!!this.modals.length&&this.modals[this.modals.length-1]===r}}const tf=(a,r)=>ic?a==null?(r||Xf()).body:(typeof a=="function"&&(a=a()),a&&"current"in a&&(a=a.current),a&&("nodeType"in a||a.getBoundingClientRect)?a:null):null;function KS(a,r){const u=Jf(),[o,f]=v.useState(()=>tf(a,u?.document));if(!o){const d=tf(a);d&&f(d)}return v.useEffect(()=>{},[r,o]),v.useEffect(()=>{const d=tf(a);d!==o&&f(d)},[a,o]),o}function JS({children:a,in:r,onExited:u,mountOnEnter:o,unmountOnExit:f}){const d=v.useRef(null),p=v.useRef(r),y=Nn(u);v.useEffect(()=>{r?p.current=!0:y(d.current)},[r,y]);const x=uc(d,Xl(a)),m=v.cloneElement(a,{ref:x});return r?m:f||!p.current&&o?null:m}const FS=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function WS(a,r){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(r.indexOf(o)>=0)continue;u[o]=a[o]}return u}function IS(a){let{onEnter:r,onEntering:u,onEntered:o,onExit:f,onExiting:d,onExited:p,addEndListener:y,children:x}=a,m=WS(a,FS);const S=v.useRef(null),w=uc(S,Xl(x)),z=X=>Z=>{X&&S.current&&X(S.current,Z)},N=v.useCallback(z(r),[r]),M=v.useCallback(z(u),[u]),D=v.useCallback(z(o),[o]),_=v.useCallback(z(f),[f]),L=v.useCallback(z(d),[d]),H=v.useCallback(z(p),[p]),O=v.useCallback(z(y),[y]);return Object.assign({},m,{nodeRef:S},r&&{onEnter:N},u&&{onEntering:M},o&&{onEntered:D},f&&{onExit:_},d&&{onExiting:L},p&&{onExited:H},y&&{addEndListener:O},{children:typeof x=="function"?(X,Z)=>x(X,Object.assign({},Z,{ref:w})):v.cloneElement(x,{ref:w})})}const PS=["component"];function e7(a,r){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(r.indexOf(o)>=0)continue;u[o]=a[o]}return u}const t7=v.forwardRef((a,r)=>{let{component:u}=a,o=e7(a,PS);const f=IS(o);return s.jsx(u,Object.assign({ref:r},f))});function n7({in:a,onTransition:r}){const u=v.useRef(null),o=v.useRef(!0),f=Nn(r);return bm(()=>{if(!u.current)return;let d=!1;return f({in:a,element:u.current,initial:o.current,isStale:()=>d}),()=>{d=!0}},[a,f]),bm(()=>(o.current=!1,()=>{o.current=!0}),[]),u}function a7({children:a,in:r,onExited:u,onEntered:o,transition:f}){const[d,p]=v.useState(!r);r&&d&&p(!1);const y=n7({in:!!r,onTransition:m=>{const S=()=>{m.isStale()||(m.in?o?.(m.element,m.initial):(p(!0),u?.(m.element)))};Promise.resolve(f(m)).then(S,w=>{throw m.in||p(!0),w})}}),x=uc(y,Xl(a));return d&&!r?null:v.cloneElement(a,{ref:x})}function zm(a,r,u){return a?s.jsx(t7,Object.assign({},u,{component:a})):r?s.jsx(a7,Object.assign({},u,{transition:r})):s.jsx(JS,Object.assign({},u))}const l7=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function i7(a,r){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(r.indexOf(o)>=0)continue;u[o]=a[o]}return u}let nf;function r7(a){return nf||(nf=new Ff({ownerDocument:a?.document})),nf}function o7(a){const r=Jf(),u=a||r7(r),o=v.useRef({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>u.add(o.current),remove:()=>u.remove(o.current),isTopModal:()=>u.isTopModal(o.current),setDialogRef:v.useCallback(f=>{o.current.dialog=f},[]),setBackdropRef:v.useCallback(f=>{o.current.backdrop=f},[])})}const Jg=v.forwardRef((a,r)=>{let{show:u=!1,role:o="dialog",className:f,style:d,children:p,backdrop:y=!0,keyboard:x=!0,onBackdropClick:m,onEscapeKeyDown:S,transition:w,runTransition:z,backdropTransition:N,runBackdropTransition:M,autoFocus:D=!0,enforceFocus:_=!0,restoreFocus:L=!0,restoreFocusOptions:H,renderDialog:O,renderBackdrop:X=_e=>s.jsx("div",Object.assign({},_e)),manager:Z,container:U,onShow:Q,onHide:ee=()=>{},onExit:I,onExited:oe,onExiting:ze,onEnter:Ge,onEntering:et,onEntered:nt}=a,Le=i7(a,l7);const B=Jf(),K=KS(U),P=o7(Z),te=vS(),de=bS(u),[E,G]=v.useState(!u),F=v.useRef(null);v.useImperativeHandle(r,()=>P,[P]),ic&&!de&&u&&(F.current=ef(B?.document)),u&&E&&G(!1);const W=Nn(()=>{if(P.add(),zt.current=Ko(document,"keydown",He),Se.current=Ko(document,"focus",()=>setTimeout(ce),!0),Q&&Q(),D){var _e,Ya;const Ql=ef((_e=(Ya=P.dialog)==null?void 0:Ya.ownerDocument)!=null?_e:B?.document);P.dialog&&Ql&&!Sm(P.dialog,Ql)&&(F.current=Ql,P.dialog.focus())}}),le=Nn(()=>{if(P.remove(),zt.current==null||zt.current(),Se.current==null||Se.current(),L){var _e;(_e=F.current)==null||_e.focus==null||_e.focus(H),F.current=null}});v.useEffect(()=>{!u||!K||W()},[u,K,W]),v.useEffect(()=>{E&&le()},[E,le]),QS(()=>{le()});const ce=Nn(()=>{if(!_||!te()||!P.isTopModal())return;const _e=ef(B?.document);P.dialog&&_e&&!Sm(P.dialog,_e)&&P.dialog.focus()}),pe=Nn(_e=>{_e.target===_e.currentTarget&&(m?.(_e),y===!0&&ee())}),He=Nn(_e=>{x&&nS(_e)&&P.isTopModal()&&(S?.(_e),_e.defaultPrevented||ee())}),Se=v.useRef(),zt=v.useRef(),Ft=(..._e)=>{G(!0),oe?.(..._e)};if(!K)return null;const mt=Object.assign({role:o,ref:P.setDialogRef,"aria-modal":o==="dialog"?!0:void 0},Le,{style:d,className:f,tabIndex:-1});let Ha=O?O(mt):s.jsx("div",Object.assign({},mt,{children:v.cloneElement(p,{role:"document"})}));Ha=zm(w,z,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!u,onExit:I,onExiting:ze,onExited:Ft,onEnter:Ge,onEntering:et,onEntered:nt,children:Ha});let Lt=null;return y&&(Lt=X({ref:P.setBackdropRef,onClick:pe}),Lt=zm(N,M,{in:!!u,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Lt})),s.jsx(s.Fragment,{children:Ol.createPortal(s.jsxs(s.Fragment,{children:[Lt,Ha]}),K)})});Jg.displayName="Modal";const c7=Object.assign(Jg,{Manager:Ff});function u7(a,r){return a.classList?a.classList.contains(r):(" "+(a.className.baseVal||a.className)+" ").indexOf(" "+r+" ")!==-1}function s7(a,r){a.classList?a.classList.add(r):u7(a,r)||(typeof a.className=="string"?a.className=a.className+" "+r:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+r))}function Tm(a,r){return a.replace(new RegExp("(^|\\s)"+r+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function f7(a,r){a.classList?a.classList.remove(r):typeof a.className=="string"?a.className=Tm(a.className,r):a.setAttribute("class",Tm(a.className&&a.className.baseVal||"",r))}const Al={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Fg extends Ff{adjustAndStore(r,u,o){const f=u.style[r];u.dataset[r]=f,_n(u,{[r]:`${parseFloat(_n(u,r))+o}px`})}restore(r,u){const o=u.dataset[r];o!==void 0&&(delete u.dataset[r],_n(u,{[r]:o}))}setContainerStyle(r){super.setContainerStyle(r);const u=this.getElement();if(s7(u,"modal-open"),!r.scrollBarWidth)return;const o=this.isRTL?"paddingLeft":"paddingRight",f=this.isRTL?"marginLeft":"marginRight";Ba(u,Al.FIXED_CONTENT).forEach(d=>this.adjustAndStore(o,d,r.scrollBarWidth)),Ba(u,Al.STICKY_CONTENT).forEach(d=>this.adjustAndStore(f,d,-r.scrollBarWidth)),Ba(u,Al.NAVBAR_TOGGLER).forEach(d=>this.adjustAndStore(f,d,r.scrollBarWidth))}removeContainerStyle(r){super.removeContainerStyle(r);const u=this.getElement();f7(u,"modal-open");const o=this.isRTL?"paddingLeft":"paddingRight",f=this.isRTL?"marginLeft":"marginRight";Ba(u,Al.FIXED_CONTENT).forEach(d=>this.restore(o,d)),Ba(u,Al.STICKY_CONTENT).forEach(d=>this.restore(f,d)),Ba(u,Al.NAVBAR_TOGGLER).forEach(d=>this.restore(f,d))}}let af;function d7(a){return af||(af=new Fg(a)),af}const Wg=v.createContext({onHide(){}}),Ig=v.forwardRef(({closeLabel:a="Close",closeVariant:r,closeButton:u=!1,onHide:o,children:f,...d},p)=>{const y=v.useContext(Wg),x=oc(()=>{y?.onHide(),o?.()});return s.jsxs("div",{ref:p,...d,children:[f,u&&s.jsx(Qf,{"aria-label":a,variant:r,onClick:x})]})});Ig.displayName="AbstractModalHeader";const Pg=v.forwardRef(({className:a,bsPrefix:r,as:u="div",...o},f)=>(r=Ct(r,"nav-item"),s.jsx(u,{ref:f,className:rt(a,r),...o})));Pg.displayName="NavItem";const e2=v.forwardRef(({bsPrefix:a,className:r,as:u=Hg,active:o,eventKey:f,disabled:d=!1,...p},y)=>{a=Ct(a,"nav-link");const[x,m]=Qg({key:Zf(f,p.href),active:o,disabled:d,...p});return s.jsx(u,{...p,...x,ref:y,disabled:d,className:rt(r,a,d&&"disabled",m.isActive&&"active")})});e2.displayName="NavLink";const t2=v.forwardRef((a,r)=>{const{as:u="div",bsPrefix:o,variant:f,fill:d=!1,justify:p=!1,navbar:y,navbarScroll:x,className:m,activeKey:S,...w}=kg(a,{activeKey:"onSelect"}),z=Ct(o,"nav");let N,M,D=!1;const _=v.useContext(Vl),L=v.useContext(Gg);return _?(N=_.bsPrefix,D=y??!0):L&&({cardHeaderBsPrefix:M}=L),s.jsx(XS,{as:u,ref:r,activeKey:S,className:rt(m,{[z]:!D,[`${N}-nav`]:D,[`${N}-nav-scroll`]:D&&x,[`${M}-${f}`]:!!M,[`${z}-${f}`]:!!f,[`${z}-fill`]:d,[`${z}-justified`]:p}),...w})});t2.displayName="Nav";const h7=Object.assign(t2,{Item:Pg,Link:e2}),n2=v.forwardRef(({bsPrefix:a,className:r,as:u,...o},f)=>{a=Ct(a,"navbar-brand");const d=u||(o.href?"a":"span");return s.jsx(d,{...o,ref:f,className:rt(r,a)})});n2.displayName="NavbarBrand";const a2=v.forwardRef(({children:a,bsPrefix:r,...u},o)=>{r=Ct(r,"navbar-collapse");const f=v.useContext(Vl);return s.jsx(Bg,{in:!!(f&&f.expanded),...u,children:s.jsx("div",{ref:o,className:r,children:a})})});a2.displayName="NavbarCollapse";const l2=v.forwardRef(({bsPrefix:a,className:r,children:u,label:o="Toggle navigation",as:f="button",onClick:d,...p},y)=>{a=Ct(a,"navbar-toggler");const{onToggle:x,expanded:m}=v.useContext(Vl)||{},S=oc(w=>{d&&d(w),x&&x()});return f==="button"&&(p.type="button"),s.jsx(f,{...p,ref:y,onClick:S,"aria-label":o,className:rt(r,a,!m&&"collapsed"),children:u||s.jsx("span",{className:`${a}-icon`})})});l2.displayName="NavbarToggle";const wf=new WeakMap,Mm=(a,r)=>{if(!a||!r)return;const u=wf.get(r)||new Map;wf.set(r,u);let o=u.get(a);return o||(o=r.matchMedia(a),o.refCount=0,u.set(o.media,o)),o};function p7(a,r=typeof window>"u"?void 0:window){const u=Mm(a,r),[o,f]=v.useState(()=>u?u.matches:!1);return LS(()=>{let d=Mm(a,r);if(!d)return f(!1);let p=wf.get(r);const y=()=>{f(d.matches)};return d.refCount++,d.addListener(y),y(),()=>{d.removeListener(y),d.refCount--,d.refCount<=0&&p?.delete(d.media),d=void 0}},[a]),o}function m7(a){const r=Object.keys(a);function u(y,x){return y===x?x:y?`${y} and ${x}`:x}function o(y){return r[Math.min(r.indexOf(y)+1,r.length-1)]}function f(y){const x=o(y);let m=a[x];return typeof m=="number"?m=`${m-.2}px`:m=`calc(${m} - 0.2px)`,`(max-width: ${m})`}function d(y){let x=a[y];return typeof x=="number"&&(x=`${x}px`),`(min-width: ${x})`}function p(y,x,m){let S;typeof y=="object"?(S=y,m=x,x=!0):(x=x||!0,S={[y]:x});let w=v.useMemo(()=>Object.entries(S).reduce((z,[N,M])=>((M==="up"||M===!0)&&(z=u(z,d(N))),(M==="down"||M===!0)&&(z=u(z,f(N))),z),""),[JSON.stringify(S)]);return p7(w,m)}return p}const g7=m7({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),i2=v.forwardRef(({className:a,bsPrefix:r,as:u="div",...o},f)=>(r=Ct(r,"offcanvas-body"),s.jsx(u,{ref:f,className:rt(a,r),...o})));i2.displayName="OffcanvasBody";const x7={[en]:"show",[On]:"show"},r2=v.forwardRef(({bsPrefix:a,className:r,children:u,in:o=!1,mountOnEnter:f=!1,unmountOnExit:d=!1,appear:p=!1,...y},x)=>(a=Ct(a,"offcanvas"),s.jsx(rc,{ref:x,addEndListener:Vf,in:o,mountOnEnter:f,unmountOnExit:d,appear:p,...y,childRef:Xl(u),children:(m,S)=>v.cloneElement(u,{...S,className:rt(r,u.props.className,(m===en||m===Ji)&&`${a}-toggling`,x7[m])})})));r2.displayName="OffcanvasToggling";const o2=v.forwardRef(({bsPrefix:a,className:r,closeLabel:u="Close",closeButton:o=!1,...f},d)=>(a=Ct(a,"offcanvas-header"),s.jsx(Ig,{ref:d,...f,className:rt(r,a),closeLabel:u,closeButton:o})));o2.displayName="OffcanvasHeader";const y7=xS("h5"),c2=v.forwardRef(({className:a,bsPrefix:r,as:u=y7,...o},f)=>(r=Ct(r,"offcanvas-title"),s.jsx(u,{ref:f,className:rt(a,r),...o})));c2.displayName="OffcanvasTitle";function v7(a){return s.jsx(r2,{...a})}function b7(a){return s.jsx(Yg,{...a})}const u2=v.forwardRef(({bsPrefix:a,className:r,children:u,"aria-labelledby":o,placement:f="start",responsive:d,show:p=!1,backdrop:y=!0,keyboard:x=!0,scroll:m=!1,onEscapeKeyDown:S,onShow:w,onHide:z,container:N,autoFocus:M=!0,enforceFocus:D=!0,restoreFocus:_=!0,restoreFocusOptions:L,onEntered:H,onExit:O,onExiting:X,onEnter:Z,onEntering:U,onExited:Q,backdropClassName:ee,manager:I,renderStaticNode:oe=!1,...ze},Ge)=>{const et=v.useRef();a=Ct(a,"offcanvas");const[nt,Le]=v.useState(!1),B=oc(z),K=g7(d||"xs","up");v.useEffect(()=>{Le(d?p&&!K:p)},[p,d,K]);const P=v.useMemo(()=>({onHide:B}),[B]);function te(){return I||(m?(et.current||(et.current=new Fg({handleContainerOverflow:!1})),et.current):d7())}const de=(W,...le)=>{W&&(W.style.visibility="visible"),Z?.(W,...le)},E=(W,...le)=>{W&&(W.style.visibility=""),Q?.(...le)},G=v.useCallback(W=>s.jsx("div",{...W,className:rt(`${a}-backdrop`,ee)}),[ee,a]),F=W=>s.jsx("div",{...W,...ze,className:rt(r,d?`${a}-${d}`:a,`${a}-${f}`),"aria-labelledby":o,children:u});return s.jsxs(s.Fragment,{children:[!nt&&(d||oe)&&F({}),s.jsx(Wg.Provider,{value:P,children:s.jsx(c7,{show:nt,ref:Ge,backdrop:y,container:N,keyboard:x,autoFocus:M,enforceFocus:D&&!m,restoreFocus:_,restoreFocusOptions:L,onEscapeKeyDown:S,onShow:w,onHide:B,onEnter:de,onEntering:U,onEntered:H,onExit:O,onExiting:X,onExited:E,manager:te(),transition:v7,backdropTransition:b7,renderBackdrop:G,renderDialog:F})})]})});u2.displayName="Offcanvas";const S7=Object.assign(u2,{Body:i2,Header:o2,Title:c2}),s2=v.forwardRef(({onHide:a,...r},u)=>{const o=v.useContext(Vl),f=oc(()=>{o==null||o.onToggle==null||o.onToggle(),a?.()});return s.jsx(S7,{ref:u,show:!!(o!=null&&o.expanded),...r,renderStaticNode:!0,onHide:f})});s2.displayName="NavbarOffcanvas";const f2=v.forwardRef(({className:a,bsPrefix:r,as:u="span",...o},f)=>(r=Ct(r,"navbar-text"),s.jsx(u,{ref:f,className:rt(a,r),...o})));f2.displayName="NavbarText";const d2=v.forwardRef((a,r)=>{const{bsPrefix:u,expand:o=!0,variant:f="light",bg:d,fixed:p,sticky:y,className:x,as:m="nav",expanded:S,onToggle:w,onSelect:z,collapseOnSelect:N=!1,...M}=kg(a,{expanded:"onToggle"}),D=Ct(u,"navbar"),_=v.useCallback((...O)=>{z?.(...O),N&&S&&w?.(!1)},[z,N,S,w]);M.role===void 0&&m!=="nav"&&(M.role="navigation");let L=`${D}-expand`;typeof o=="string"&&(L=`${L}-${o}`);const H=v.useMemo(()=>({onToggle:()=>w?.(!S),bsPrefix:D,expanded:!!S,expand:o}),[D,S,o,w]);return s.jsx(Vl.Provider,{value:H,children:s.jsx(Jo.Provider,{value:_,children:s.jsx(m,{ref:r,...M,className:rt(x,D,o&&L,f&&`${D}-${f}`,d&&`bg-${d}`,y&&`sticky-${y}`,p&&`fixed-${p}`)})})})});d2.displayName="Navbar";const w7=Object.assign(d2,{Brand:n2,Collapse:a2,Offcanvas:s2,Text:f2,Toggle:l2});function j7(a){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M149.688 85.625c-1.234.005-2.465.033-3.72.063-33.913.806-75.48 10.704-127.25 33.718V362.78c60.77-28.82 106.718-37.067 144.22-33.092 33.502 3.55 59.685 16.66 83.562 31.187v-242.97c-23.217-17.744-50.195-30.04-85.97-32-3.52-.192-7.142-.296-10.843-.28zm211.968 0c-3.7-.016-7.322.088-10.844.28-35.773 1.96-62.75 14.256-85.968 32v242.97c23.876-14.527 50.06-27.637 83.562-31.188 37.502-3.974 83.45 4.272 144.22 33.094V119.407c-51.77-23.014-93.337-32.912-127.25-33.72-1.255-.028-2.486-.056-3.72-.06zm5.72 261.78c-1.038-.002-2.074.017-3.095.033-4.808.075-9.43.37-13.905.843-33.932 3.597-59.603 17.976-85.53 34.44v.28c-6.554-1.99-13.02-2.37-19.408-.97-25.566-16.177-51.003-30.202-84.468-33.75-5.595-.592-11.44-.883-17.564-.842-32.04.213-71.833 9.778-124.687 35.937v42.53c60.77-28.823 106.714-37.067 144.218-33.092 18.545 1.965 34.837 6.845 49.75 13.28-4.682 6.064-9.308 13.268-13.875 21.688h117.156c-5.93-8.22-11.798-15.414-17.626-21.56 14.996-6.503 31.39-11.43 50.062-13.408 37.503-3.974 83.448 4.27 144.22 33.094v-42.53c-53.16-26.31-93.115-35.863-125.25-35.97z"},child:[]}]})(a)}function E7(a){return be({attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",fill:"currentColor"},child:[]}]})(a)}const C7=b(w7)`
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
`,z7=b.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 8px;
`,T7=b.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,M7=b.div`
  justify-self: center;
`,A7=b.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`,R7=b.button`
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
`,O7=b(Gl)`
  padding: 10px 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px; /* space between icon and text */
`,N7=b(j7)`
  width: 28px;
  height: 28px;
  flex: 0 0 28px;
  color: #f0703c /* keep high contrast; adjust to your brand */
`,k7=b.div`
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
`;function _7(){const a=()=>{console.log("Toggled theme")};return s.jsx("div",{className:"topbar-wrapper",children:s.jsx(C7,{className:"shadow-sm d-lg-none",children:s.jsx(qg,{fluid:!0,className:"px-3",children:s.jsxs(z7,{children:[s.jsx(T7,{children:s.jsxs(O7,{to:"/instalearn/","aria-label":"Go to home",children:[s.jsx(N7,{"aria-hidden":"true"}),s.jsx(k7,{children:"InstaLearn"})]})}),s.jsx(M7,{}),s.jsx(A7,{children:s.jsx(R7,{type:"button",onClick:a,"aria-label":"Toggle",children:s.jsx(E7,{size:20})})})]})})})})}const $7=Et`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,D7=b.aside`
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
`,B7=b(Gl)`
  padding: 25px 12px 16px 12px;
  margin-bottom: 19px;
  margin-left: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: padding 200ms ease, margin 200ms ease;
`,L7=b.div`
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
`,U7=b.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
`,H7=xa`
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
    animation: ${$7} 4s linear infinite;
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

  ${a=>a.$active&&H7}
`,Y7=b.div`
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
`;function G7(){const{pathname:a}=Bn(),r=[{to:"/instalearn/",icon:s.jsx(wg,{}),label:"Home"},{to:"/instalearn/teacher",icon:s.jsx(Qi,{}),label:"Teacher"},{to:"/instalearn/library",icon:s.jsx(Sg,{}),label:"Library",hasNotification:!0},{to:"/instalearn/notifications",icon:s.jsx(C5,{}),label:"Notifications"},{to:"/instalearn/profile",icon:s.jsx(jg,{}),label:"Profile"}];return s.jsxs(D7,{children:[s.jsx(B7,{to:"/instalearn/",children:s.jsx(L7,{children:"InstaLearn"})}),s.jsxs(U7,{children:[r.slice(0,-1).map(u=>s.jsxs(lf,{to:u.to,$active:a===u.to,children:[s.jsx(rf,{children:u.icon}),s.jsx(of,{children:u.label}),u.hasNotification]},u.to)),s.jsxs(lf,{to:r[r.length-1].to,$active:a===r[r.length-1].to,children:[s.jsx(rf,{children:r[r.length-1].icon}),s.jsx(of,{children:r[r.length-1].label})]})]}),s.jsx(Y7,{children:s.jsxs(lf,{to:"/instalearn/more",$active:a==="/instalearn/more",children:[s.jsx(rf,{children:s.jsx(z5,{})}),s.jsx(of,{children:"More"})]})})]})}const q7=b.div`
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
`,X7=b.div`
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
`,h2=b.div`
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
`,V7=b.div`
  position: relative;
  flex-shrink: 0;
`,Q7=b.div`
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
  
  ${h2}:hover & {
    transform: scale(1.05);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }
`,Z7=b.div`
  position: absolute;
  bottom: ${a=>a.$width<250?"2px":"4px"};
  right: ${a=>a.$width<250?"0":"2px"};
  width: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  height: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
`,K7=b.div`
  flex: 1;
  min-width: 0;
  display: ${a=>a.$width<180?"none":"block"};
`,J7=b.div`
  font-size: ${a=>a.$width<250?"13px":"14px"};
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,F7=b.div`
  font-size: ${a=>a.$width<250?"11px":"13px"};
  color: #6b7280;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,W7=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,I7=b.div`
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
`,P7=b.button`
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
`,e9=b.div`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.$width<250?"8px":"12px"};
  margin-bottom: 32px;
`,p2=b.div`
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
`,t9=b.div`
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
  
  ${p2}:hover & {
    transform: scale(1.05) rotate(5deg);
  }
`,n9=b.div`
  display: flex;
  flex-direction: ${a=>a.$width<200?"column":a.$width<250?"row":"column"};
  align-items: ${a=>a.$width>=200&&a.$width<250?"center":"stretch"};
  flex: 1;
`,a9=b.div`
  flex: 1;
`,l9=b.h4`
  font-size: ${a=>a.$width<250?"12px":"13px"};
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 ${a=>a.$width<250?"2px":"4px"} 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,i9=b.p`
  font-size: ${a=>a.$width<250?"10px":"12px"};
  color: #6b7280;
  margin: 0;
  display: ${a=>a.$width<180?"none":"-webkit-box"};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
`,r9=b.span`
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
`;const o9=({sidebarWidth:a=360})=>{const r={username:"demo_user",name:"Demo User",initials:"DU"},u=[{icon:T1,gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",title:"New Feature: Dark Mode",description:"Enable dark mode for a better night-time experience.",badge:"New",badgeBg:"linear-gradient(135deg, #667eea, #764ba2)"},{icon:T5,gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",title:"Product Tip: Quick Search",description:"Use the search bar to find items faster.",badge:"Tip",badgeBg:"linear-gradient(135deg, #f093fb, #f5576c)"},{icon:j5,gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",title:"Update: Version 2.0",description:"Check out the latest improvements and bug fixes.",badge:"Update",badgeBg:"linear-gradient(135deg, #4facfe, #00f2fe)"}];return s.jsxs(q7,{children:[s.jsx(X7,{children:s.jsxs(h2,{$width:a,children:[s.jsxs(V7,{children:[s.jsx(Q7,{$width:a,children:r.initials}),s.jsx(Z7,{$width:a})]}),s.jsxs(K7,{$width:a,children:[s.jsx(J7,{$width:a,children:r.username}),s.jsx(F7,{$width:a,children:r.name})]})]})}),s.jsxs(W7,{children:[s.jsxs(I7,{$width:a,$iconColor:"#667eea",children:[s.jsx(T1,{}),s.jsx("span",{children:"Highlights"})]}),s.jsx(P7,{$width:a,children:"See All"})]}),s.jsx(e9,{$width:a,children:u.map((o,f)=>{const d=o.icon;return s.jsxs(p2,{$width:a,$glowColor:o.gradient,children:[s.jsx(r9,{$width:a,$bg:o.badgeBg,children:o.badge}),s.jsxs(n9,{$width:a,children:[s.jsx(t9,{$width:a,$gradient:o.gradient,children:s.jsx(d,{})}),s.jsxs(a9,{children:[s.jsx(l9,{$width:a,children:o.title}),s.jsx(i9,{$width:a,children:o.description})]})]})]},f)})})]})};function c9(){const{pathname:a}=Bn(),r=[["/instalearn/",s.jsx(wg,{})],["/instalearn/teacher",s.jsx(Qi,{})],["/instalearn/library",s.jsx(Sg,{})],["/instalearn/profile",s.jsx(jg,{})]];return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
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
      `}),s.jsx(h7,{className:"bottom-nav fixed-bottom d-flex justify-content-around py-2 d-lg-none",children:r.map(([u,o])=>s.jsx(Gl,{to:u,className:`nav-link fs-4 text-white ${a===u?"active":""}`,children:o},u))})]})}const u9={name:"Siddharth Sir",subject:"SST Teacher",bio:"Exploring history, geography & civics 🌍 | Making SST engaging for Classes 6–12 | CBSE Expert",avatar:lc.teacherProfilePic,concepts:247,students:"1.2K",learns:15,experience:8,bookList:[{title:"SST MARATHON"},{title:"World Geography Simplified"},{title:"Understanding Civics"},{title:"Economics Made Easy"},{title:"Political Science Basics"},{title:"Environment & Society"}]},dt=u9,s9=b.div`
  max-width: 1120px;
  margin: 0 auto;
  background: #fff;
  min-height: 100vh;
`,f9=b.div`
  padding: 1rem 1.5rem;
  @media (min-width: 768px) { padding: 1.5rem 2rem; }
  @media (min-width: 1024px) { padding: 2rem 3rem; }
`,d9=b.div`
  display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 1.5rem;
  @media (min-width: 768px) { flex-direction: row; align-items: flex-start; }
`,h9=b.div`
  display: flex; align-items: center; gap: 1.5rem;
  @media (min-width: 768px) { flex-direction: column; align-items: center; }
`,p9=b.div` position: relative; `,m9=b.img`
  width: 5rem; height: 5rem; border-radius: 50%; object-fit: cover; border: 2px solid #e5e7eb;
  @media (min-width: 768px) { width: 8rem; height: 8rem; }
  @media (min-width: 1024px) { width: 10rem; height: 10rem; }
`,g9=b.div`
  position: absolute;
  top: -6px; left: -6px;
  background: #111827; color: #fff; font-size: 0.65rem; font-weight: 700;
  padding: 0.25rem 0.4rem; border-radius: 8px;
  display: inline-flex; align-items: center; gap: 4px;
`,x9=b.div`
  display: flex; flex: 1; justify-content: space-around; text-align: center;
  @media (min-width: 768px) { display: none; }
`,y9=b.div`
  display: none; gap: 2rem; margin-bottom: 1.5rem;
  @media (min-width: 768px) { display: flex; }
`,Rl=b.div`
  font-weight: 600; font-size: 1.125rem;
  span { font-weight: 400; margin-left: 0.25rem; color: #6b7280; }
`,v9=b.div` flex: 1; `,b9=b.div`
  font-weight: 600; font-size: 1rem;
  @media (min-width: 768px) { font-size: 1.125rem; }
`,S9=b.div`
  font-size: 0.875rem; color: #6b7280;
  @media (min-width: 768px) { font-size: 1rem; }
`,w9=b.div`
  font-size: 0.875rem; margin-top: 0.5rem;
  @media (min-width: 768px) { font-size: 1rem; }
`,j9=b.div`
  font-size: 0.875rem; margin-top: 0.5rem; color: #6b7280;
  @media (min-width: 768px) { font-size: 1rem; }
`,E9=b.div` display: flex; gap: 0.5rem; margin-bottom: 1.5rem; `,C9=b.button`
  flex: 1; background: #3b82f6; color: #fff; font-weight: 600;
  padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;
  @media (min-width: 768px) { flex: initial; padding: 0.5rem 2rem; font-size: 1rem; }
`,z9=b.button`
  flex: 1; border: 1px solid #d1d5db; font-weight: 600;
  padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; position: relative;
  @media (min-width: 768px) { flex: initial; padding: 0.5rem 2rem; font-size: 1rem; }
  &[data-joined="true"] {
    background: #10b9810f; border-color: #10b981; color: #065f46;
  }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,T9=b.button`
  border: 1px solid #d1d5db; padding: 0.25rem 1rem; border-radius: 0.5rem;
`,M9=b.div`
  display: ${({hidden:a})=>a?"none":"flex"};
  align-items: center; justify-content: space-between;
  gap: 0.75rem; padding: 0.75rem 1rem; border: 1px dashed #d1d5db;
  border-radius: 12px; background: #f9fafb; color: #111827; margin-bottom: 1rem;
`,A9=b.div`
  font-size: 0.9rem; display: flex; align-items: center; gap: 8px;
  svg { flex-shrink: 0; }
`,R9=b.button`
  border: 1px solid #111827; background: #111827; color: #fff;
  border-radius: 10px; padding: 0.5rem 0.85rem; font-weight: 700; font-size: 0.875rem;
`,O9=b.div` margin-bottom: 1.5rem; `,N9=b.div`
  display: flex; gap: 1rem; overflow-x: auto; padding-bottom: 0.5rem;
`,k9=b.div`
  display: flex; flex-direction: column; align-items: center; min-width: fit-content; cursor: pointer; position: relative;
`,_9=b.div`
  position: absolute; inset: 0; border-radius: 9999px; display: flex; align-items: center; justify-content: center;
  background: rgba(17,24,39,0.55); color: #fff; font-weight: 700; font-size: 0.75rem;
  backdrop-filter: blur(2px);
`,$9=b.div`
  width: 4rem; height: 4rem; border-radius: 50%; padding: 0.125rem;
  background: linear-gradient(to top right, #a78bfa, #f472b6, #fb923c);
  @media (min-width: 768px) { width: 5rem; height: 5rem; }
  @media (min-width: 1024px) { width: 6rem; height: 6rem; }
  filter: ${({$locked:a})=>a?"grayscale(0.8)":"none"};
  opacity: ${({$locked:a})=>a?.6:1};
`,D9=b.div`
  width: 100%; height: 100%; border-radius: 50%; padding: 0.25rem; background: #fff;
  display: flex; align-items: center; justify-content: center;
`,B9=b.div`
  font-size: 0.75rem; color: #374151; text-align: center; margin-top: 0.25rem;
  max-width: 4.375rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  @media (min-width: 768px) { font-size: 0.875rem; max-width: 5.625rem; }
  opacity: ${({$locked:a})=>a?.6:1};
`,L9=b.div` display: flex; border-top: 1px solid #e5e7eb; `,Am=b.button`
  flex: 1; padding: 0.75rem 0; display: flex; justify-content: center; align-items: center; gap: 0.5rem;
  border-top: 2px solid ${({active:a})=>a?"#111827":"transparent"};
  color: ${({active:a})=>a?"#111827":"#9ca3af"};
`,U9=b.div`
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.25rem;
  @media (min-width: 768px) { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.5rem; }
  @media (min-width: 1024px) { grid-template-columns: repeat(5, minmax(0, 1fr)); }
  @media (min-width: 1280px) { grid-template-columns: repeat(6, minmax(0, 1fr)); }
`,H9=b.div`
  aspect-ratio: 1 / 1; background: #f3f4f6; display: flex; justify-content: center; align-items: center; position: relative;
  filter: ${({$locked:a})=>a?"blur(2px)":"none"};
  overflow: hidden;
`,Y9=b.div`
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  background: rgba(17,24,39,0.45); color: #fff; font-weight: 800; font-size: 0.8rem;
`,G9=b.button`
  margin: 0.75rem auto 1.25rem; display: ${({hidden:a})=>a?"none":"block"};
  background: #111827; color: #fff; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 700;
`,q9=b.div`
  position: fixed; inset: 0; background: rgba(17, 24, 39, 0.6);
  display: flex; align-items: center; justify-content: center; z-index: 50;
`,X9=b.div`
  width: min(96vw, 720px); background: #ffffff; border-radius: 16px;
  box-shadow: 0 20px 48px rgba(0,0,0,0.18); overflow: hidden;
`,V9=b.div`
  display: flex; justify-content: space-between; align-items: center;
  padding: 1rem 1.25rem; border-bottom: 1px solid #f3f4f6;
`,Q9=b.h3`
  margin: 0; font-size: 1rem; font-weight: 700; color: #111827;
`,Z9=b.button`
  border: 1px solid #e5e7eb; background: #fff; border-radius: 8px; padding: 0.25rem;
`,K9=b.div`
  padding: 1rem; display: grid; gap: 1rem;
  @media (min-width: 768px) { grid-template-columns: repeat(3, 1fr); }
`,J9=b.button`
  border: 1px solid ${({$active:a})=>a?"#2563eb":"#e5e7eb"};
  border-radius: 14px; padding: 1rem; text-align: left; background: ${({$active:a})=>a?"#eff6ff":"#fff"};
  display: grid; gap: 0.25rem; cursor: pointer;
  &:hover { border-color: #2563eb; }
  h4 { margin: 0; font-size: 1rem; font-weight: 700; color: #111827; }
  p { margin: 0; color: #6b7280; font-size: 0.875rem; }
  strong { font-size: 1.25rem; }
`,F9=b.div`
  border-top: 1px solid #f3f4f6; padding: 0.75rem 1.25rem; display: flex; gap: 0.5rem; justify-content: flex-end;
`,W9=b.button`
  background: #111827; color: #fff; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 700;
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,I9=b.button`
  border: 1px solid #d1d5db; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 600; background: #fff;
`;function P9(){v.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]);const a=Cf(),[r,u]=v.useState(!1),[o,f]=v.useState("basic"),[d,p]=v.useState(!1),[y,x]=v.useState(!1),m=3,S=3;v.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]),v.useEffect(()=>{const _=`joined:${dt?.id||dt?.name}`;localStorage.getItem(_)==="true"&&x(!0)},[]),v.useEffect(()=>{const _=`joined:${dt?.id||dt?.name}`;localStorage.setItem(_,y?"true":"false")},[y]);const w=_=>{if(!y&&_>=m){u(!0);return}_===0&&a("/instalearn/library")},z=()=>{y||u(!0)},N=async()=>{p(!0),await new Promise(_=>setTimeout(_,1500)),p(!1),x(!0),u(!1)},M=[{key:"basic",name:"Basic",price:"₹0",desc:"Demo access: 3 lessons"},{key:"pro",name:"Pro",price:"₹99",desc:"Monthly: full library"},{key:"team",name:"Team",price:"₹1,99",desc:"Up to 10 students"}],D=y;return s.jsxs(s9,{children:[s.jsxs(f9,{children:[s.jsxs(d9,{children:[s.jsxs(h9,{children:[s.jsxs(p9,{children:[s.jsx(m9,{src:dt.avatar,alt:dt.name}),!y&&s.jsxs(g9,{"aria-hidden":"true",title:"Pro library locked",children:[s.jsx(zo,{size:12})," LOCKED"]})]}),s.jsxs(x9,{children:[s.jsxs(Rl,{children:[dt.concepts," ",s.jsx("span",{children:"concepts"})]}),s.jsxs(Rl,{children:[dt.students," ",s.jsx("span",{children:"students"})]}),s.jsxs(Rl,{children:[dt.learns," ",s.jsx("span",{children:"learns"})]})]})]}),s.jsxs(v9,{children:[s.jsxs(y9,{children:[s.jsxs(Rl,{children:[dt.concepts," ",s.jsx("span",{children:"concepts"})]}),s.jsxs(Rl,{children:[dt.students," ",s.jsx("span",{children:"students"})]}),s.jsxs(Rl,{children:[dt.learns," ",s.jsx("span",{children:"learns"})]})]}),s.jsx(b9,{children:dt.name}),s.jsx(S9,{children:dt.subject}),s.jsx(w9,{children:dt.bio}),s.jsxs(j9,{children:["🎓 ",dt.experience," years experience"]}),s.jsxs(E9,{children:[s.jsx(C9,{children:"Follow"}),s.jsx(z9,{onClick:z,disabled:d,"data-joined":y,"aria-pressed":y,"aria-label":y?"Joined":"Join",title:y?"You're in!":"Join this teacher",children:y?s.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[s.jsx(V4,{size:18})," Joined"]}):d?"Processing…":"Join"}),s.jsx(T9,{"aria-label":"More options",children:"▼"})]}),s.jsxs(M9,{hidden:D,role:"note","aria-live":"polite",children:[s.jsxs(A9,{children:[s.jsx(zo,{size:18})," Pro library locked — get full access to all concepts & posts."]}),s.jsx(R9,{onClick:()=>u(!0),"aria-label":"Unlock full library",children:"Unlock"})]})]})]}),s.jsx(O9,{children:s.jsx(N9,{children:dt.bookList.map((_,L)=>{const H=!y&&L>=m;return s.jsxs(k9,{onClick:()=>w(L),"aria-disabled":H,title:H?"Join to unlock":`Open ${_.title}`,children:[s.jsx($9,{$locked:H,children:s.jsx(D9,{children:s.jsx(kl,{size:24})})}),s.jsx(B9,{$locked:H,children:_.title}),!y&&H&&s.jsxs(_9,{children:[s.jsx(zo,{size:14,style:{marginRight:6}})," Locked"]})]},L)})})})]}),s.jsxs(L9,{children:[s.jsx(Am,{active:!0,children:s.jsx(a6,{size:20})}),s.jsx(Am,{children:s.jsx(Y4,{size:20})})]}),s.jsx(U9,{"aria-label":"Teacher posts",children:Array(9).fill(null).map((_,L)=>{const H=!y&&L>=S;return s.jsxs(H9,{$locked:H,"aria-hidden":!1,children:[s.jsx(kl,{size:24}),H&&s.jsxs(Y9,{children:[s.jsx(zo,{size:16,style:{marginRight:6}})," Join to view"]})]},L)})}),s.jsx(G9,{hidden:y,onClick:()=>u(!0),"aria-label":"Unlock all posts",children:"Unlock entire library"}),r&&s.jsx(q9,{role:"dialog","aria-modal":"true","aria-labelledby":"pricing-title",children:s.jsxs(X9,{children:[s.jsxs(V9,{children:[s.jsx(Q9,{id:"pricing-title",children:"Choose your plan"}),s.jsx(Z9,{onClick:()=>u(!1),"aria-label":"Close pricing",children:s.jsx(y6,{size:18})})]}),s.jsx(K9,{children:M.map(_=>s.jsxs(J9,{onClick:()=>f(_.key),$active:o===_.key,"aria-pressed":o===_.key,children:[s.jsx("h4",{children:_.name}),s.jsx("strong",{children:_.price}),s.jsx("p",{children:_.desc})]},_.key))}),s.jsxs(F9,{children:[s.jsx(I9,{onClick:()=>u(!1),children:"Not now"}),s.jsx(W9,{onClick:N,disabled:d,children:d?"Processing payment…":"Demo Pay & Join"})]})]})})]})}const ew=b.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--color-light, #f5f5f5);
`,tw=b.aside`
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
`,nw=b.div`
  flex: 1;
  display: flex;
  width: 100%;

  @media (min-width: 1024px) {
    /* match LeftSidebar width exactly to avoid layout jump */
    margin-left: 246px;
  }
`,aw=b.main`
  flex: 1;
  width: 100%;
  padding-bottom: 60px;
  transition: ${a=>a.$isResizing?"none":"margin-right 0.2s ease"};
  will-change: margin-right;

  @media (min-width: 1024px) {
    padding-bottom: 0;
    margin-right: ${a=>`${a.$sidebarWidth}px`};
  }
`,lw=b.aside`
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
`,iw=b.div`
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
`,rw=b.div`
  display: block;
  margin-bottom: 60px;

  @media (min-width: 1024px) {
    display: none;
  }
`,ow=b.div`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (min-width: 1024px) {
    display: none;
  }
`;function cw(){const[a,r]=v.useState(360),[u,o]=v.useState(!1),f=v.useRef(null),d=350,p=600,y=x=>{x.preventDefault(),o(!0),f.current={startX:x.clientX,startWidth:a}};return v.useEffect(()=>{const x=(w,z,N)=>Math.min(Math.max(w,z),N),m=w=>{if(!u||!f.current)return;const{startX:z,startWidth:N}=f.current,M=z-w.clientX,D=x(N+M,d,p);r(D)},S=()=>{u&&(o(!1),f.current=null)};return u&&(document.addEventListener("mousemove",m),document.addEventListener("mouseup",S),document.body.style.cursor="ew-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",S),document.body.style.cursor="",document.body.style.userSelect=""}},[u]),s.jsxs(ew,{children:[s.jsx(tw,{children:s.jsx(G7,{})}),s.jsxs(nw,{children:[s.jsxs(aw,{$sidebarWidth:a,$isResizing:u,children:[s.jsx(rw,{children:s.jsx(_7,{})}),s.jsxs(Dv,{children:[s.jsx(Da,{path:"/instalearn",element:s.jsx(G6,{})}),s.jsx(Da,{path:"/instalearn/teacher",element:s.jsx(P9,{})}),s.jsx(Da,{path:"/instalearn/library",element:s.jsx(O4,{})}),s.jsx(Da,{path:"/instalearn/notifications",element:s.jsx(fm,{})}),s.jsx(Da,{path:"/instalearn/more",element:s.jsx(fm,{})}),s.jsx(Da,{path:"/instalearn/profile",element:s.jsx(b8,{})})]})]}),s.jsxs(lw,{$width:a,$isResizing:u,children:[s.jsx(iw,{className:u?"active":"",onMouseDown:y,"aria-label":"Resize sidebar"}),s.jsx(o9,{})]})]}),s.jsx(ow,{children:s.jsx(c9,{})})]})}Qy.createRoot(document.getElementById("root")).render(s.jsx(ib,{children:s.jsx(cw,{})}));
