(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function o(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(c){if(c.ep)return;c.ep=!0;const f=o(c);fetch(c.href,f)}})();function ir(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Nc={exports:{}},Hl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u1;function fb(){if(u1)return Hl;u1=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function o(u,c,f){var h=null;if(f!==void 0&&(h=""+f),c.key!==void 0&&(h=""+c.key),"key"in c){f={};for(var y in c)y!=="key"&&(f[y]=c[y])}else f=c;return c=f.ref,{$$typeof:a,type:u,key:h,ref:c!==void 0?c:null,props:f}}return Hl.Fragment=l,Hl.jsx=o,Hl.jsxs=o,Hl}var s1;function db(){return s1||(s1=1,Nc.exports=fb()),Nc.exports}var d=db(),kc={exports:{}},me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c1;function pb(){if(c1)return me;c1=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),C=Symbol.iterator;function D(E){return E===null||typeof E!="object"?null:(E=C&&E[C]||E["@@iterator"],typeof E=="function"?E:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,B={};function V(E,K,le){this.props=E,this.context=K,this.refs=B,this.updater=le||R}V.prototype.isReactComponent={},V.prototype.setState=function(E,K){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,K,"setState")},V.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function A(){}A.prototype=V.prototype;function O(E,K,le){this.props=E,this.context=K,this.refs=B,this.updater=le||R}var U=O.prototype=new A;U.constructor=O,$(U,V.prototype),U.isPureReactComponent=!0;var N=Array.isArray;function M(){}var Z={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function J(E,K,le){var ie=le.ref;return{$$typeof:a,type:E,key:K,ref:ie!==void 0?ie:null,props:le}}function ue(E,K){return J(E.type,K,E.props)}function W(E){return typeof E=="object"&&E!==null&&E.$$typeof===a}function L(E){var K={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(le){return K[le]})}var ee=/\/+/g;function ne(E,K){return typeof E=="object"&&E!==null&&E.key!=null?L(""+E.key):K.toString(36)}function T(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(M,M):(E.status="pending",E.then(function(K){E.status==="pending"&&(E.status="fulfilled",E.value=K)},function(K){E.status==="pending"&&(E.status="rejected",E.reason=K)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function _(E,K,le,ie,fe){var he=typeof E;(he==="undefined"||he==="boolean")&&(E=null);var be=!1;if(E===null)be=!0;else switch(he){case"bigint":case"string":case"number":be=!0;break;case"object":switch(E.$$typeof){case a:case l:be=!0;break;case x:return be=E._init,_(be(E._payload),K,le,ie,fe)}}if(be)return fe=fe(E),be=ie===""?"."+ne(E,0):ie,N(fe)?(le="",be!=null&&(le=be.replace(ee,"$&/")+"/"),_(fe,K,le,"",function(jt){return jt})):fe!=null&&(W(fe)&&(fe=ue(fe,le+(fe.key==null||E&&E.key===fe.key?"":(""+fe.key).replace(ee,"$&/")+"/")+be)),K.push(fe)),1;be=0;var $e=ie===""?".":ie+":";if(N(E))for(var je=0;je<E.length;je++)ie=E[je],he=$e+ne(ie,je),be+=_(ie,K,le,he,fe);else if(je=D(E),typeof je=="function")for(E=je.call(E),je=0;!(ie=E.next()).done;)ie=ie.value,he=$e+ne(ie,je++),be+=_(ie,K,le,he,fe);else if(he==="object"){if(typeof E.then=="function")return _(T(E),K,le,ie,fe);throw K=String(E),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return be}function Y(E,K,le){if(E==null)return E;var ie=[],fe=0;return _(E,ie,"","",function(he){return K.call(le,he,fe++)}),ie}function F(E){if(E._status===-1){var K=E._result;K=K(),K.then(function(le){(E._status===0||E._status===-1)&&(E._status=1,E._result=le)},function(le){(E._status===0||E._status===-1)&&(E._status=2,E._result=le)}),E._status===-1&&(E._status=0,E._result=K)}if(E._status===1)return E._result.default;throw E._result}var oe=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},ae={map:Y,forEach:function(E,K,le){Y(E,function(){K.apply(this,arguments)},le)},count:function(E){var K=0;return Y(E,function(){K++}),K},toArray:function(E){return Y(E,function(K){return K})||[]},only:function(E){if(!W(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return me.Activity=S,me.Children=ae,me.Component=V,me.Fragment=o,me.Profiler=c,me.PureComponent=O,me.StrictMode=u,me.Suspense=g,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,me.__COMPILER_RUNTIME={__proto__:null,c:function(E){return Z.H.useMemoCache(E)}},me.cache=function(E){return function(){return E.apply(null,arguments)}},me.cacheSignal=function(){return null},me.cloneElement=function(E,K,le){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var ie=$({},E.props),fe=E.key;if(K!=null)for(he in K.key!==void 0&&(fe=""+K.key),K)!G.call(K,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&K.ref===void 0||(ie[he]=K[he]);var he=arguments.length-2;if(he===1)ie.children=le;else if(1<he){for(var be=Array(he),$e=0;$e<he;$e++)be[$e]=arguments[$e+2];ie.children=be}return J(E.type,fe,ie)},me.createContext=function(E){return E={$$typeof:h,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:f,_context:E},E},me.createElement=function(E,K,le){var ie,fe={},he=null;if(K!=null)for(ie in K.key!==void 0&&(he=""+K.key),K)G.call(K,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(fe[ie]=K[ie]);var be=arguments.length-2;if(be===1)fe.children=le;else if(1<be){for(var $e=Array(be),je=0;je<be;je++)$e[je]=arguments[je+2];fe.children=$e}if(E&&E.defaultProps)for(ie in be=E.defaultProps,be)fe[ie]===void 0&&(fe[ie]=be[ie]);return J(E,he,fe)},me.createRef=function(){return{current:null}},me.forwardRef=function(E){return{$$typeof:y,render:E}},me.isValidElement=W,me.lazy=function(E){return{$$typeof:x,_payload:{_status:-1,_result:E},_init:F}},me.memo=function(E,K){return{$$typeof:m,type:E,compare:K===void 0?null:K}},me.startTransition=function(E){var K=Z.T,le={};Z.T=le;try{var ie=E(),fe=Z.S;fe!==null&&fe(le,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(M,oe)}catch(he){oe(he)}finally{K!==null&&le.types!==null&&(K.types=le.types),Z.T=K}},me.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},me.use=function(E){return Z.H.use(E)},me.useActionState=function(E,K,le){return Z.H.useActionState(E,K,le)},me.useCallback=function(E,K){return Z.H.useCallback(E,K)},me.useContext=function(E){return Z.H.useContext(E)},me.useDebugValue=function(){},me.useDeferredValue=function(E,K){return Z.H.useDeferredValue(E,K)},me.useEffect=function(E,K){return Z.H.useEffect(E,K)},me.useEffectEvent=function(E){return Z.H.useEffectEvent(E)},me.useId=function(){return Z.H.useId()},me.useImperativeHandle=function(E,K,le){return Z.H.useImperativeHandle(E,K,le)},me.useInsertionEffect=function(E,K){return Z.H.useInsertionEffect(E,K)},me.useLayoutEffect=function(E,K){return Z.H.useLayoutEffect(E,K)},me.useMemo=function(E,K){return Z.H.useMemo(E,K)},me.useOptimistic=function(E,K){return Z.H.useOptimistic(E,K)},me.useReducer=function(E,K,le){return Z.H.useReducer(E,K,le)},me.useRef=function(E){return Z.H.useRef(E)},me.useState=function(E){return Z.H.useState(E)},me.useSyncExternalStore=function(E,K,le){return Z.H.useSyncExternalStore(E,K,le)},me.useTransition=function(){return Z.H.useTransition()},me.version="19.2.0",me}var f1;function ya(){return f1||(f1=1,kc.exports=pb()),kc.exports}var b=ya();const Ye=ir(b);var Lc={exports:{}},ql={},$c={exports:{}},Bc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d1;function hb(){return d1||(d1=1,(function(a){function l(_,Y){var F=_.length;_.push(Y);e:for(;0<F;){var oe=F-1>>>1,ae=_[oe];if(0<c(ae,Y))_[oe]=Y,_[F]=ae,F=oe;else break e}}function o(_){return _.length===0?null:_[0]}function u(_){if(_.length===0)return null;var Y=_[0],F=_.pop();if(F!==Y){_[0]=F;e:for(var oe=0,ae=_.length,E=ae>>>1;oe<E;){var K=2*(oe+1)-1,le=_[K],ie=K+1,fe=_[ie];if(0>c(le,F))ie<ae&&0>c(fe,le)?(_[oe]=fe,_[ie]=F,oe=ie):(_[oe]=le,_[K]=F,oe=K);else if(ie<ae&&0>c(fe,F))_[oe]=fe,_[ie]=F,oe=ie;else break e}}return Y}function c(_,Y){var F=_.sortIndex-Y.sortIndex;return F!==0?F:_.id-Y.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var h=Date,y=h.now();a.unstable_now=function(){return h.now()-y}}var g=[],m=[],x=1,S=null,C=3,D=!1,R=!1,$=!1,B=!1,V=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function U(_){for(var Y=o(m);Y!==null;){if(Y.callback===null)u(m);else if(Y.startTime<=_)u(m),Y.sortIndex=Y.expirationTime,l(g,Y);else break;Y=o(m)}}function N(_){if($=!1,U(_),!R)if(o(g)!==null)R=!0,M||(M=!0,L());else{var Y=o(m);Y!==null&&T(N,Y.startTime-_)}}var M=!1,Z=-1,G=5,J=-1;function ue(){return B?!0:!(a.unstable_now()-J<G)}function W(){if(B=!1,M){var _=a.unstable_now();J=_;var Y=!0;try{e:{R=!1,$&&($=!1,A(Z),Z=-1),D=!0;var F=C;try{t:{for(U(_),S=o(g);S!==null&&!(S.expirationTime>_&&ue());){var oe=S.callback;if(typeof oe=="function"){S.callback=null,C=S.priorityLevel;var ae=oe(S.expirationTime<=_);if(_=a.unstable_now(),typeof ae=="function"){S.callback=ae,U(_),Y=!0;break t}S===o(g)&&u(g),U(_)}else u(g);S=o(g)}if(S!==null)Y=!0;else{var E=o(m);E!==null&&T(N,E.startTime-_),Y=!1}}break e}finally{S=null,C=F,D=!1}Y=void 0}}finally{Y?L():M=!1}}}var L;if(typeof O=="function")L=function(){O(W)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,ne=ee.port2;ee.port1.onmessage=W,L=function(){ne.postMessage(null)}}else L=function(){V(W,0)};function T(_,Y){Z=V(function(){_(a.unstable_now())},Y)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(_){_.callback=null},a.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<_?Math.floor(1e3/_):5},a.unstable_getCurrentPriorityLevel=function(){return C},a.unstable_next=function(_){switch(C){case 1:case 2:case 3:var Y=3;break;default:Y=C}var F=C;C=Y;try{return _()}finally{C=F}},a.unstable_requestPaint=function(){B=!0},a.unstable_runWithPriority=function(_,Y){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var F=C;C=_;try{return Y()}finally{C=F}},a.unstable_scheduleCallback=function(_,Y,F){var oe=a.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?oe+F:oe):F=oe,_){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=F+ae,_={id:x++,callback:Y,priorityLevel:_,startTime:F,expirationTime:ae,sortIndex:-1},F>oe?(_.sortIndex=F,l(m,_),o(g)===null&&_===o(m)&&($?(A(Z),Z=-1):$=!0,T(N,F-oe))):(_.sortIndex=ae,l(g,_),R||D||(R=!0,M||(M=!0,L()))),_},a.unstable_shouldYield=ue,a.unstable_wrapCallback=function(_){var Y=C;return function(){var F=C;C=Y;try{return _.apply(this,arguments)}finally{C=F}}}})(Bc)),Bc}var p1;function mb(){return p1||(p1=1,$c.exports=hb()),$c.exports}var Uc={exports:{}},dt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h1;function gb(){if(h1)return dt;h1=1;var a=ya();function l(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)m+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var u={d:{f:o,r:function(){throw Error(l(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(g,m,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:S==null?null:""+S,children:g,containerInfo:m,implementation:x}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,dt.createPortal=function(g,m){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(l(299));return f(g,m,null,x)},dt.flushSync=function(g){var m=h.T,x=u.p;try{if(h.T=null,u.p=2,g)return g()}finally{h.T=m,u.p=x,u.d.f()}},dt.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,u.d.C(g,m))},dt.prefetchDNS=function(g){typeof g=="string"&&u.d.D(g)},dt.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var x=m.as,S=y(x,m.crossOrigin),C=typeof m.integrity=="string"?m.integrity:void 0,D=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;x==="style"?u.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:C,fetchPriority:D}):x==="script"&&u.d.X(g,{crossOrigin:S,integrity:C,fetchPriority:D,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},dt.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var x=y(m.as,m.crossOrigin);u.d.M(g,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&u.d.M(g)},dt.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var x=m.as,S=y(x,m.crossOrigin);u.d.L(g,x,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},dt.preloadModule=function(g,m){if(typeof g=="string")if(m){var x=y(m.as,m.crossOrigin);u.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else u.d.m(g)},dt.requestFormReset=function(g){u.d.r(g)},dt.unstable_batchedUpdates=function(g,m){return g(m)},dt.useFormState=function(g,m,x){return h.H.useFormState(g,m,x)},dt.useFormStatus=function(){return h.H.useHostTransitionStatus()},dt.version="19.2.0",dt}var m1;function Im(){if(m1)return Uc.exports;m1=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Uc.exports=gb(),Uc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g1;function vb(){if(g1)return ql;g1=1;var a=mb(),l=ya(),o=Im();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(u(188))}function m(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return g(r),e;if(s===i)return g(r),t;s=s.sibling}throw Error(u(188))}if(n.return!==i.return)n=r,i=s;else{for(var p=!1,v=r.child;v;){if(v===n){p=!0,n=r,i=s;break}if(v===i){p=!0,i=r,n=s;break}v=v.sibling}if(!p){for(v=s.child;v;){if(v===n){p=!0,n=s,i=r;break}if(v===i){p=!0,i=s,n=r;break}v=v.sibling}if(!p)throw Error(u(189))}}if(n.alternate!==i)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,C=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),O=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),ue=Symbol.for("react.memo_cache_sentinel"),W=Symbol.iterator;function L(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Symbol.for("react.client.reference");function ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ee?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case V:return"Profiler";case B:return"StrictMode";case N:return"Suspense";case M:return"SuspenseList";case J:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case O:return e.displayName||"Context";case A:return(e._context.displayName||"Context")+".Consumer";case U:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:ne(e.type)||"Memo";case G:t=e._payload,e=e._init;try{return ne(e(t))}catch{}}return null}var T=Array.isArray,_=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},oe=[],ae=-1;function E(e){return{current:e}}function K(e){0>ae||(e.current=oe[ae],oe[ae]=null,ae--)}function le(e,t){ae++,oe[ae]=e.current,e.current=t}var ie=E(null),fe=E(null),he=E(null),be=E(null);function $e(e,t){switch(le(he,t),le(fe,e),le(ie,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?A0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=A0(t),e=_0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(ie),le(ie,e)}function je(){K(ie),K(fe),K(he)}function jt(e){e.memoizedState!==null&&le(be,e);var t=ie.current,n=_0(t,e.type);t!==n&&(le(fe,e),le(ie,n))}function Wt(e){fe.current===e&&(K(ie),K(fe)),be.current===e&&(K(be),Ll._currentValue=F)}var mt,qa;function Bt(e){if(mt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);mt=t&&t[1]||"",qa=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mt+e+qa}var Be=!1;function Ya(e,t){if(!e||Be)return"";Be=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var te=function(){throw Error()};if(Object.defineProperty(te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(te,[])}catch(Q){var X=Q}Reflect.construct(e,[],te)}else{try{te.call()}catch(Q){X=Q}e.call(te.prototype)}}else{try{throw Error()}catch(Q){X=Q}(te=e())&&typeof te.catch=="function"&&te.catch(function(){})}}catch(Q){if(Q&&X&&typeof Q.stack=="string")return[Q.stack,X.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),p=s[0],v=s[1];if(p&&v){var j=p.split(`
`),q=v.split(`
`);for(r=i=0;i<j.length&&!j[i].includes("DetermineComponentFrameRoot");)i++;for(;r<q.length&&!q[r].includes("DetermineComponentFrameRoot");)r++;if(i===j.length||r===q.length)for(i=j.length-1,r=q.length-1;1<=i&&0<=r&&j[i]!==q[r];)r--;for(;1<=i&&0<=r;i--,r--)if(j[i]!==q[r]){if(i!==1||r!==1)do if(i--,r--,0>r||j[i]!==q[r]){var P=`
`+j[i].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),P}while(1<=i&&0<=r);break}}}finally{Be=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Bt(n):""}function Qi(e,t){switch(e.tag){case 26:case 27:case 5:return Bt(e.type);case 16:return Bt("Lazy");case 13:return e.child!==t&&t!==null?Bt("Suspense Fallback"):Bt("Suspense");case 19:return Bt("SuspenseList");case 0:case 15:return Ya(e.type,!1);case 11:return Ya(e.type.render,!1);case 1:return Ya(e.type,!0);case 31:return Bt("Activity");default:return""}}function ud(e){try{var t="",n=null;do t+=Qi(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var bu=Object.prototype.hasOwnProperty,xu=a.unstable_scheduleCallback,Su=a.unstable_cancelCallback,Gv=a.unstable_shouldYield,Xv=a.unstable_requestPaint,Tt=a.unstable_now,Vv=a.unstable_getCurrentPriorityLevel,sd=a.unstable_ImmediatePriority,cd=a.unstable_UserBlockingPriority,sr=a.unstable_NormalPriority,Kv=a.unstable_LowPriority,fd=a.unstable_IdlePriority,Qv=a.log,Zv=a.unstable_setDisableYieldValue,Zi=null,Rt=null;function qn(e){if(typeof Qv=="function"&&Zv(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Zi,e)}catch{}}var Mt=Math.clz32?Math.clz32:Wv,Jv=Math.log,Fv=Math.LN2;function Wv(e){return e>>>=0,e===0?32:31-(Jv(e)/Fv|0)|0}var cr=256,fr=262144,dr=4194304;function ba(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pr(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var r=0,s=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var v=i&134217727;return v!==0?(i=v&~s,i!==0?r=ba(i):(p&=v,p!==0?r=ba(p):n||(n=v&~e,n!==0&&(r=ba(n))))):(v=i&~s,v!==0?r=ba(v):p!==0?r=ba(p):n||(n=i&~e,n!==0&&(r=ba(n)))),r===0?0:t!==0&&t!==r&&(t&s)===0&&(s=r&-r,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:r}function Ji(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Pv(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dd(){var e=dr;return dr<<=1,(dr&62914560)===0&&(dr=4194304),e}function wu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Iv(e,t,n,i,r,s){var p=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var v=e.entanglements,j=e.expirationTimes,q=e.hiddenUpdates;for(n=p&~n;0<n;){var P=31-Mt(n),te=1<<P;v[P]=0,j[P]=-1;var X=q[P];if(X!==null)for(q[P]=null,P=0;P<X.length;P++){var Q=X[P];Q!==null&&(Q.lane&=-536870913)}n&=~te}i!==0&&pd(e,i,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(p&~t))}function pd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Mt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function hd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Mt(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}function md(e,t){var n=t&-t;return n=(n&42)!==0?1:Eu(n),(n&(e.suspendedLanes|t))!==0?0:n}function Eu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Cu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function gd(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:t1(e.type))}function vd(e,t){var n=Y.p;try{return Y.p=e,t()}finally{Y.p=n}}var Yn=Math.random().toString(36).slice(2),rt="__reactFiber$"+Yn,vt="__reactProps$"+Yn,Ga="__reactContainer$"+Yn,ju="__reactEvents$"+Yn,ey="__reactListeners$"+Yn,ty="__reactHandles$"+Yn,yd="__reactResources$"+Yn,Wi="__reactMarker$"+Yn;function Tu(e){delete e[rt],delete e[vt],delete e[ju],delete e[ey],delete e[ty]}function Xa(e){var t=e[rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ga]||n[rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=U0(e);e!==null;){if(n=e[rt])return n;e=U0(e)}return t}e=n,n=e.parentNode}return null}function Va(e){if(e=e[rt]||e[Ga]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Pi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Ka(e){var t=e[yd];return t||(t=e[yd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tt(e){e[Wi]=!0}var bd=new Set,xd={};function xa(e,t){Qa(e,t),Qa(e+"Capture",t)}function Qa(e,t){for(xd[e]=t,e=0;e<t.length;e++)bd.add(t[e])}var ny=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Sd={},wd={};function ay(e){return bu.call(wd,e)?!0:bu.call(Sd,e)?!1:ny.test(e)?wd[e]=!0:(Sd[e]=!0,!1)}function hr(e,t,n){if(ay(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function mr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function hn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ed(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function iy(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(p){n=""+p,s.call(this,p)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(p){n=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ru(e){if(!e._valueTracker){var t=Ed(e)?"checked":"value";e._valueTracker=iy(e,t,""+e[t])}}function Cd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Ed(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function gr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ly=/[\n"\\]/g;function Ht(e){return e.replace(ly,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Mu(e,t,n,i,r,s,p,v){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ut(t)):e.value!==""+Ut(t)&&(e.value=""+Ut(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?zu(e,p,Ut(t)):n!=null?zu(e,p,Ut(n)):i!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+Ut(v):e.removeAttribute("name")}function jd(e,t,n,i,r,s,p,v){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Ru(e);return}n=n!=null?""+Ut(n):"",t=t!=null?""+Ut(t):n,v||t===e.value||(e.value=t),e.defaultValue=t}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=v?e.checked:!!i,e.defaultChecked=!!i,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),Ru(e)}function zu(e,t,n){t==="number"&&gr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Za(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Td(e,t,n){if(t!=null&&(t=""+Ut(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ut(n):""}function Rd(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(u(92));if(T(i)){if(1<i.length)throw Error(u(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Ut(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Ru(e)}function Ja(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ry=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Md(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||ry.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function zd(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in t)i=t[r],t.hasOwnProperty(r)&&n[r]!==i&&Md(e,r,i)}else for(var s in t)t.hasOwnProperty(s)&&Md(e,s,t[s])}function Ou(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),uy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vr(e){return uy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function mn(){}var Au=null;function _u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fa=null,Wa=null;function Od(e){var t=Va(e);if(t&&(e=t.stateNode)){var n=e[vt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Mu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ht(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=i[vt]||null;if(!r)throw Error(u(90));Mu(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Cd(i)}break e;case"textarea":Td(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Za(e,!!n.multiple,t,!1)}}}var Du=!1;function Ad(e,t,n){if(Du)return e(t,n);Du=!0;try{var i=e(t);return i}finally{if(Du=!1,(Fa!==null||Wa!==null)&&(io(),Fa&&(t=Fa,e=Wa,Wa=Fa=null,Od(t),e)))for(t=0;t<e.length;t++)Od(e[t])}}function Ii(e,t){var n=e.stateNode;if(n===null)return null;var i=n[vt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nu=!1;if(gn)try{var el={};Object.defineProperty(el,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",el,el),window.removeEventListener("test",el,el)}catch{Nu=!1}var Gn=null,ku=null,yr=null;function _d(){if(yr)return yr;var e,t=ku,n=t.length,i,r="value"in Gn?Gn.value:Gn.textContent,s=r.length;for(e=0;e<n&&t[e]===r[e];e++);var p=n-e;for(i=1;i<=p&&t[n-i]===r[s-i];i++);return yr=r.slice(e,1<i?1-i:void 0)}function br(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xr(){return!0}function Dd(){return!1}function yt(e){function t(n,i,r,s,p){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=p,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(n=e[v],this[v]=n?n(s):s[v]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xr:Dd,this.isPropagationStopped=Dd,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xr)},persist:function(){},isPersistent:xr}),t}var Sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sr=yt(Sa),tl=S({},Sa,{view:0,detail:0}),sy=yt(tl),Lu,$u,nl,wr=S({},tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nl&&(nl&&e.type==="mousemove"?(Lu=e.screenX-nl.screenX,$u=e.screenY-nl.screenY):$u=Lu=0,nl=e),Lu)},movementY:function(e){return"movementY"in e?e.movementY:$u}}),Nd=yt(wr),cy=S({},wr,{dataTransfer:0}),fy=yt(cy),dy=S({},tl,{relatedTarget:0}),Bu=yt(dy),py=S({},Sa,{animationName:0,elapsedTime:0,pseudoElement:0}),hy=yt(py),my=S({},Sa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gy=yt(my),vy=S({},Sa,{data:0}),kd=yt(vy),yy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},by={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xy[e])?!!t[e]:!1}function Uu(){return Sy}var wy=S({},tl,{key:function(e){if(e.key){var t=yy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=br(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?by[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(e){return e.type==="keypress"?br(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?br(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ey=yt(wy),Cy=S({},wr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ld=yt(Cy),jy=S({},tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),Ty=yt(jy),Ry=S({},Sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),My=yt(Ry),zy=S({},wr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Oy=yt(zy),Ay=S({},Sa,{newState:0,oldState:0}),_y=yt(Ay),Dy=[9,13,27,32],Hu=gn&&"CompositionEvent"in window,al=null;gn&&"documentMode"in document&&(al=document.documentMode);var Ny=gn&&"TextEvent"in window&&!al,$d=gn&&(!Hu||al&&8<al&&11>=al),Bd=" ",Ud=!1;function Hd(e,t){switch(e){case"keyup":return Dy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pa=!1;function ky(e,t){switch(e){case"compositionend":return qd(t);case"keypress":return t.which!==32?null:(Ud=!0,Bd);case"textInput":return e=t.data,e===Bd&&Ud?null:e;default:return null}}function Ly(e,t){if(Pa)return e==="compositionend"||!Hu&&Hd(e,t)?(e=_d(),yr=ku=Gn=null,Pa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $d&&t.locale!=="ko"?null:t.data;default:return null}}var $y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$y[e.type]:t==="textarea"}function Gd(e,t,n,i){Fa?Wa?Wa.push(i):Wa=[i]:Fa=i,t=fo(t,"onChange"),0<t.length&&(n=new Sr("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var il=null,ll=null;function By(e){j0(e,0)}function Er(e){var t=Pi(e);if(Cd(t))return e}function Xd(e,t){if(e==="change")return t}var Vd=!1;if(gn){var qu;if(gn){var Yu="oninput"in document;if(!Yu){var Kd=document.createElement("div");Kd.setAttribute("oninput","return;"),Yu=typeof Kd.oninput=="function"}qu=Yu}else qu=!1;Vd=qu&&(!document.documentMode||9<document.documentMode)}function Qd(){il&&(il.detachEvent("onpropertychange",Zd),ll=il=null)}function Zd(e){if(e.propertyName==="value"&&Er(ll)){var t=[];Gd(t,ll,e,_u(e)),Ad(By,t)}}function Uy(e,t,n){e==="focusin"?(Qd(),il=t,ll=n,il.attachEvent("onpropertychange",Zd)):e==="focusout"&&Qd()}function Hy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Er(ll)}function qy(e,t){if(e==="click")return Er(t)}function Yy(e,t){if(e==="input"||e==="change")return Er(t)}function Gy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:Gy;function rl(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!bu.call(t,r)||!zt(e[r],t[r]))return!1}return!0}function Jd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fd(e,t){var n=Jd(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jd(n)}}function Wd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=gr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gr(e.document)}return t}function Gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Xy=gn&&"documentMode"in document&&11>=document.documentMode,Ia=null,Xu=null,ol=null,Vu=!1;function Id(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vu||Ia==null||Ia!==gr(i)||(i=Ia,"selectionStart"in i&&Gu(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ol&&rl(ol,i)||(ol=i,i=fo(Xu,"onSelect"),0<i.length&&(t=new Sr("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Ia)))}function wa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ei={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionrun:wa("Transition","TransitionRun"),transitionstart:wa("Transition","TransitionStart"),transitioncancel:wa("Transition","TransitionCancel"),transitionend:wa("Transition","TransitionEnd")},Ku={},ep={};gn&&(ep=document.createElement("div").style,"AnimationEvent"in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),"TransitionEvent"in window||delete ei.transitionend.transition);function Ea(e){if(Ku[e])return Ku[e];if(!ei[e])return e;var t=ei[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ep)return Ku[e]=t[n];return e}var tp=Ea("animationend"),np=Ea("animationiteration"),ap=Ea("animationstart"),Vy=Ea("transitionrun"),Ky=Ea("transitionstart"),Qy=Ea("transitioncancel"),ip=Ea("transitionend"),lp=new Map,Qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qu.push("scrollEnd");function Pt(e,t){lp.set(e,t),xa(t,[e])}var Cr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},qt=[],ti=0,Zu=0;function jr(){for(var e=ti,t=Zu=ti=0;t<e;){var n=qt[t];qt[t++]=null;var i=qt[t];qt[t++]=null;var r=qt[t];qt[t++]=null;var s=qt[t];if(qt[t++]=null,i!==null&&r!==null){var p=i.pending;p===null?r.next=r:(r.next=p.next,p.next=r),i.pending=r}s!==0&&rp(n,r,s)}}function Tr(e,t,n,i){qt[ti++]=e,qt[ti++]=t,qt[ti++]=n,qt[ti++]=i,Zu|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Ju(e,t,n,i){return Tr(e,t,n,i),Rr(e)}function Ca(e,t){return Tr(e,null,null,t),Rr(e)}function rp(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var r=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&t!==null&&(r=31-Mt(n),e=s.hiddenUpdates,i=e[r],i===null?e[r]=[t]:i.push(t),t.lane=n|536870912),s):null}function Rr(e){if(50<zl)throw zl=0,ic=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ni={};function Zy(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,i){return new Zy(e,t,n,i)}function Fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vn(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function op(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Mr(e,t,n,i,r,s){var p=0;if(i=e,typeof e=="function")Fu(e)&&(p=1);else if(typeof e=="string")p=I2(e,n,ie.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case J:return e=Ot(31,n,t,r),e.elementType=J,e.lanes=s,e;case $:return ja(n.children,r,s,t);case B:p=8,r|=24;break;case V:return e=Ot(12,n,t,r|2),e.elementType=V,e.lanes=s,e;case N:return e=Ot(13,n,t,r),e.elementType=N,e.lanes=s,e;case M:return e=Ot(19,n,t,r),e.elementType=M,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:p=10;break e;case A:p=9;break e;case U:p=11;break e;case Z:p=14;break e;case G:p=16,i=null;break e}p=29,n=Error(u(130,e===null?"null":typeof e,"")),i=null}return t=Ot(p,n,t,r),t.elementType=e,t.type=i,t.lanes=s,t}function ja(e,t,n,i){return e=Ot(7,e,i,t),e.lanes=n,e}function Wu(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function up(e){var t=Ot(18,null,null,0);return t.stateNode=e,t}function Pu(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var sp=new WeakMap;function Yt(e,t){if(typeof e=="object"&&e!==null){var n=sp.get(e);return n!==void 0?n:(t={value:e,source:t,stack:ud(t)},sp.set(e,t),t)}return{value:e,source:t,stack:ud(t)}}var ai=[],ii=0,zr=null,ul=0,Gt=[],Xt=0,Xn=null,ln=1,rn="";function yn(e,t){ai[ii++]=ul,ai[ii++]=zr,zr=e,ul=t}function cp(e,t,n){Gt[Xt++]=ln,Gt[Xt++]=rn,Gt[Xt++]=Xn,Xn=e;var i=ln;e=rn;var r=32-Mt(i)-1;i&=~(1<<r),n+=1;var s=32-Mt(t)+r;if(30<s){var p=r-r%5;s=(i&(1<<p)-1).toString(32),i>>=p,r-=p,ln=1<<32-Mt(t)+r|n<<r|i,rn=s+e}else ln=1<<s|n<<r|i,rn=e}function Iu(e){e.return!==null&&(yn(e,1),cp(e,1,0))}function es(e){for(;e===zr;)zr=ai[--ii],ai[ii]=null,ul=ai[--ii],ai[ii]=null;for(;e===Xn;)Xn=Gt[--Xt],Gt[Xt]=null,rn=Gt[--Xt],Gt[Xt]=null,ln=Gt[--Xt],Gt[Xt]=null}function fp(e,t){Gt[Xt++]=ln,Gt[Xt++]=rn,Gt[Xt++]=Xn,ln=t.id,rn=t.overflow,Xn=e}var ot=null,Ue=null,Ce=!1,Vn=null,Vt=!1,ts=Error(u(519));function Kn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw sl(Yt(t,e)),ts}function dp(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[rt]=e,t[vt]=i,n){case"dialog":Se("cancel",t),Se("close",t);break;case"iframe":case"object":case"embed":Se("load",t);break;case"video":case"audio":for(n=0;n<Al.length;n++)Se(Al[n],t);break;case"source":Se("error",t);break;case"img":case"image":case"link":Se("error",t),Se("load",t);break;case"details":Se("toggle",t);break;case"input":Se("invalid",t),jd(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Se("invalid",t);break;case"textarea":Se("invalid",t),Rd(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||z0(t.textContent,n)?(i.popover!=null&&(Se("beforetoggle",t),Se("toggle",t)),i.onScroll!=null&&Se("scroll",t),i.onScrollEnd!=null&&Se("scrollend",t),i.onClick!=null&&(t.onclick=mn),t=!0):t=!1,t||Kn(e,!0)}function pp(e){for(ot=e.return;ot;)switch(ot.tag){case 5:case 31:case 13:Vt=!1;return;case 27:case 3:Vt=!0;return;default:ot=ot.return}}function li(e){if(e!==ot)return!1;if(!Ce)return pp(e),Ce=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||bc(e.type,e.memoizedProps)),n=!n),n&&Ue&&Kn(e),pp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ue=B0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ue=B0(e)}else t===27?(t=Ue,ra(e.type)?(e=Cc,Cc=null,Ue=e):Ue=t):Ue=ot?Qt(e.stateNode.nextSibling):null;return!0}function Ta(){Ue=ot=null,Ce=!1}function ns(){var e=Vn;return e!==null&&(wt===null?wt=e:wt.push.apply(wt,e),Vn=null),e}function sl(e){Vn===null?Vn=[e]:Vn.push(e)}var as=E(null),Ra=null,bn=null;function Qn(e,t,n){le(as,t._currentValue),t._currentValue=n}function xn(e){e._currentValue=as.current,K(as)}function is(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ls(e,t,n,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var p=r.child;s=s.firstContext;e:for(;s!==null;){var v=s;s=r;for(var j=0;j<t.length;j++)if(v.context===t[j]){s.lanes|=n,v=s.alternate,v!==null&&(v.lanes|=n),is(s.return,n,e),i||(p=null);break e}s=v.next}}else if(r.tag===18){if(p=r.return,p===null)throw Error(u(341));p.lanes|=n,s=p.alternate,s!==null&&(s.lanes|=n),is(p,n,e),p=null}else p=r.child;if(p!==null)p.return=r;else for(p=r;p!==null;){if(p===e){p=null;break}if(r=p.sibling,r!==null){r.return=p.return,p=r;break}p=p.return}r=p}}function ri(e,t,n,i){e=null;for(var r=t,s=!1;r!==null;){if(!s){if((r.flags&524288)!==0)s=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var p=r.alternate;if(p===null)throw Error(u(387));if(p=p.memoizedProps,p!==null){var v=r.type;zt(r.pendingProps.value,p.value)||(e!==null?e.push(v):e=[v])}}else if(r===be.current){if(p=r.alternate,p===null)throw Error(u(387));p.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Ll):e=[Ll])}r=r.return}e!==null&&ls(t,e,n,i),t.flags|=262144}function Or(e){for(e=e.firstContext;e!==null;){if(!zt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ma(e){Ra=e,bn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ut(e){return hp(Ra,e)}function Ar(e,t){return Ra===null&&Ma(e),hp(e,t)}function hp(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},bn===null){if(e===null)throw Error(u(308));bn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else bn=bn.next=t;return n}var Jy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Fy=a.unstable_scheduleCallback,Wy=a.unstable_NormalPriority,Je={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rs(){return{controller:new Jy,data:new Map,refCount:0}}function cl(e){e.refCount--,e.refCount===0&&Fy(Wy,function(){e.controller.abort()})}var fl=null,os=0,oi=0,ui=null;function Py(e,t){if(fl===null){var n=fl=[];os=0,oi=cc(),ui={status:"pending",value:void 0,then:function(i){n.push(i)}}}return os++,t.then(mp,mp),t}function mp(){if(--os===0&&fl!==null){ui!==null&&(ui.status="fulfilled");var e=fl;fl=null,oi=0,ui=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Iy(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(i.status="rejected",i.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),i}var gp=_.S;_.S=function(e,t){Ih=Tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Py(e,t),gp!==null&&gp(e,t)};var za=E(null);function us(){var e=za.current;return e!==null?e:Le.pooledCache}function _r(e,t){t===null?le(za,za.current):le(za,t.pool)}function vp(){var e=us();return e===null?null:{parent:Je._currentValue,pool:e}}var si=Error(u(460)),ss=Error(u(474)),Dr=Error(u(542)),Nr={then:function(){}};function yp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function bp(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(mn,mn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Sp(e),e;default:if(typeof t.status=="string")t.then(mn,mn);else{if(e=Le,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=i}},function(i){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Sp(e),e}throw Aa=t,si}}function Oa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Aa=n,si):n}}var Aa=null;function xp(){if(Aa===null)throw Error(u(459));var e=Aa;return Aa=null,e}function Sp(e){if(e===si||e===Dr)throw Error(u(483))}var ci=null,dl=0;function kr(e){var t=dl;return dl+=1,ci===null&&(ci=[]),bp(ci,e,t)}function pl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Lr(e,t){throw t.$$typeof===C?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function wp(e){function t(k,z){if(e){var H=k.deletions;H===null?(k.deletions=[z],k.flags|=16):H.push(z)}}function n(k,z){if(!e)return null;for(;z!==null;)t(k,z),z=z.sibling;return null}function i(k){for(var z=new Map;k!==null;)k.key!==null?z.set(k.key,k):z.set(k.index,k),k=k.sibling;return z}function r(k,z){return k=vn(k,z),k.index=0,k.sibling=null,k}function s(k,z,H){return k.index=H,e?(H=k.alternate,H!==null?(H=H.index,H<z?(k.flags|=67108866,z):H):(k.flags|=67108866,z)):(k.flags|=1048576,z)}function p(k){return e&&k.alternate===null&&(k.flags|=67108866),k}function v(k,z,H,I){return z===null||z.tag!==6?(z=Wu(H,k.mode,I),z.return=k,z):(z=r(z,H),z.return=k,z)}function j(k,z,H,I){var de=H.type;return de===$?P(k,z,H.props.children,I,H.key):z!==null&&(z.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===G&&Oa(de)===z.type)?(z=r(z,H.props),pl(z,H),z.return=k,z):(z=Mr(H.type,H.key,H.props,null,k.mode,I),pl(z,H),z.return=k,z)}function q(k,z,H,I){return z===null||z.tag!==4||z.stateNode.containerInfo!==H.containerInfo||z.stateNode.implementation!==H.implementation?(z=Pu(H,k.mode,I),z.return=k,z):(z=r(z,H.children||[]),z.return=k,z)}function P(k,z,H,I,de){return z===null||z.tag!==7?(z=ja(H,k.mode,I,de),z.return=k,z):(z=r(z,H),z.return=k,z)}function te(k,z,H){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=Wu(""+z,k.mode,H),z.return=k,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case D:return H=Mr(z.type,z.key,z.props,null,k.mode,H),pl(H,z),H.return=k,H;case R:return z=Pu(z,k.mode,H),z.return=k,z;case G:return z=Oa(z),te(k,z,H)}if(T(z)||L(z))return z=ja(z,k.mode,H,null),z.return=k,z;if(typeof z.then=="function")return te(k,kr(z),H);if(z.$$typeof===O)return te(k,Ar(k,z),H);Lr(k,z)}return null}function X(k,z,H,I){var de=z!==null?z.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return de!==null?null:v(k,z,""+H,I);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case D:return H.key===de?j(k,z,H,I):null;case R:return H.key===de?q(k,z,H,I):null;case G:return H=Oa(H),X(k,z,H,I)}if(T(H)||L(H))return de!==null?null:P(k,z,H,I,null);if(typeof H.then=="function")return X(k,z,kr(H),I);if(H.$$typeof===O)return X(k,z,Ar(k,H),I);Lr(k,H)}return null}function Q(k,z,H,I,de){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return k=k.get(H)||null,v(z,k,""+I,de);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case D:return k=k.get(I.key===null?H:I.key)||null,j(z,k,I,de);case R:return k=k.get(I.key===null?H:I.key)||null,q(z,k,I,de);case G:return I=Oa(I),Q(k,z,H,I,de)}if(T(I)||L(I))return k=k.get(H)||null,P(z,k,I,de,null);if(typeof I.then=="function")return Q(k,z,H,kr(I),de);if(I.$$typeof===O)return Q(k,z,H,Ar(z,I),de);Lr(z,I)}return null}function se(k,z,H,I){for(var de=null,Re=null,ce=z,ve=z=0,Ee=null;ce!==null&&ve<H.length;ve++){ce.index>ve?(Ee=ce,ce=null):Ee=ce.sibling;var Me=X(k,ce,H[ve],I);if(Me===null){ce===null&&(ce=Ee);break}e&&ce&&Me.alternate===null&&t(k,ce),z=s(Me,z,ve),Re===null?de=Me:Re.sibling=Me,Re=Me,ce=Ee}if(ve===H.length)return n(k,ce),Ce&&yn(k,ve),de;if(ce===null){for(;ve<H.length;ve++)ce=te(k,H[ve],I),ce!==null&&(z=s(ce,z,ve),Re===null?de=ce:Re.sibling=ce,Re=ce);return Ce&&yn(k,ve),de}for(ce=i(ce);ve<H.length;ve++)Ee=Q(ce,k,ve,H[ve],I),Ee!==null&&(e&&Ee.alternate!==null&&ce.delete(Ee.key===null?ve:Ee.key),z=s(Ee,z,ve),Re===null?de=Ee:Re.sibling=Ee,Re=Ee);return e&&ce.forEach(function(fa){return t(k,fa)}),Ce&&yn(k,ve),de}function pe(k,z,H,I){if(H==null)throw Error(u(151));for(var de=null,Re=null,ce=z,ve=z=0,Ee=null,Me=H.next();ce!==null&&!Me.done;ve++,Me=H.next()){ce.index>ve?(Ee=ce,ce=null):Ee=ce.sibling;var fa=X(k,ce,Me.value,I);if(fa===null){ce===null&&(ce=Ee);break}e&&ce&&fa.alternate===null&&t(k,ce),z=s(fa,z,ve),Re===null?de=fa:Re.sibling=fa,Re=fa,ce=Ee}if(Me.done)return n(k,ce),Ce&&yn(k,ve),de;if(ce===null){for(;!Me.done;ve++,Me=H.next())Me=te(k,Me.value,I),Me!==null&&(z=s(Me,z,ve),Re===null?de=Me:Re.sibling=Me,Re=Me);return Ce&&yn(k,ve),de}for(ce=i(ce);!Me.done;ve++,Me=H.next())Me=Q(ce,k,ve,Me.value,I),Me!==null&&(e&&Me.alternate!==null&&ce.delete(Me.key===null?ve:Me.key),z=s(Me,z,ve),Re===null?de=Me:Re.sibling=Me,Re=Me);return e&&ce.forEach(function(cb){return t(k,cb)}),Ce&&yn(k,ve),de}function ke(k,z,H,I){if(typeof H=="object"&&H!==null&&H.type===$&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case D:e:{for(var de=H.key;z!==null;){if(z.key===de){if(de=H.type,de===$){if(z.tag===7){n(k,z.sibling),I=r(z,H.props.children),I.return=k,k=I;break e}}else if(z.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===G&&Oa(de)===z.type){n(k,z.sibling),I=r(z,H.props),pl(I,H),I.return=k,k=I;break e}n(k,z);break}else t(k,z);z=z.sibling}H.type===$?(I=ja(H.props.children,k.mode,I,H.key),I.return=k,k=I):(I=Mr(H.type,H.key,H.props,null,k.mode,I),pl(I,H),I.return=k,k=I)}return p(k);case R:e:{for(de=H.key;z!==null;){if(z.key===de)if(z.tag===4&&z.stateNode.containerInfo===H.containerInfo&&z.stateNode.implementation===H.implementation){n(k,z.sibling),I=r(z,H.children||[]),I.return=k,k=I;break e}else{n(k,z);break}else t(k,z);z=z.sibling}I=Pu(H,k.mode,I),I.return=k,k=I}return p(k);case G:return H=Oa(H),ke(k,z,H,I)}if(T(H))return se(k,z,H,I);if(L(H)){if(de=L(H),typeof de!="function")throw Error(u(150));return H=de.call(H),pe(k,z,H,I)}if(typeof H.then=="function")return ke(k,z,kr(H),I);if(H.$$typeof===O)return ke(k,z,Ar(k,H),I);Lr(k,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,z!==null&&z.tag===6?(n(k,z.sibling),I=r(z,H),I.return=k,k=I):(n(k,z),I=Wu(H,k.mode,I),I.return=k,k=I),p(k)):n(k,z)}return function(k,z,H,I){try{dl=0;var de=ke(k,z,H,I);return ci=null,de}catch(ce){if(ce===si||ce===Dr)throw ce;var Re=Ot(29,ce,null,k.mode);return Re.lanes=I,Re.return=k,Re}finally{}}}var _a=wp(!0),Ep=wp(!1),Zn=!1;function cs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Jn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ze&2)!==0){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,t=Rr(e),rp(e,null,n),t}return Tr(e,i,t,n),Rr(e)}function hl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,hd(e,n)}}function ds(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?r=s=p:s=s.next=p,n=n.next}while(n!==null);s===null?r=s=t:s=s.next=t}else r=s=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ps=!1;function ml(){if(ps){var e=ui;if(e!==null)throw e}}function gl(e,t,n,i){ps=!1;var r=e.updateQueue;Zn=!1;var s=r.firstBaseUpdate,p=r.lastBaseUpdate,v=r.shared.pending;if(v!==null){r.shared.pending=null;var j=v,q=j.next;j.next=null,p===null?s=q:p.next=q,p=j;var P=e.alternate;P!==null&&(P=P.updateQueue,v=P.lastBaseUpdate,v!==p&&(v===null?P.firstBaseUpdate=q:v.next=q,P.lastBaseUpdate=j))}if(s!==null){var te=r.baseState;p=0,P=q=j=null,v=s;do{var X=v.lane&-536870913,Q=X!==v.lane;if(Q?(we&X)===X:(i&X)===X){X!==0&&X===oi&&(ps=!0),P!==null&&(P=P.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var se=e,pe=v;X=t;var ke=n;switch(pe.tag){case 1:if(se=pe.payload,typeof se=="function"){te=se.call(ke,te,X);break e}te=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=pe.payload,X=typeof se=="function"?se.call(ke,te,X):se,X==null)break e;te=S({},te,X);break e;case 2:Zn=!0}}X=v.callback,X!==null&&(e.flags|=64,Q&&(e.flags|=8192),Q=r.callbacks,Q===null?r.callbacks=[X]:Q.push(X))}else Q={lane:X,tag:v.tag,payload:v.payload,callback:v.callback,next:null},P===null?(q=P=Q,j=te):P=P.next=Q,p|=X;if(v=v.next,v===null){if(v=r.shared.pending,v===null)break;Q=v,v=Q.next,Q.next=null,r.lastBaseUpdate=Q,r.shared.pending=null}}while(!0);P===null&&(j=te),r.baseState=j,r.firstBaseUpdate=q,r.lastBaseUpdate=P,s===null&&(r.shared.lanes=0),ta|=p,e.lanes=p,e.memoizedState=te}}function Cp(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function jp(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Cp(n[e],t)}var fi=E(null),$r=E(0);function Tp(e,t){e=zn,le($r,e),le(fi,t),zn=e|t.baseLanes}function hs(){le($r,zn),le(fi,fi.current)}function ms(){zn=$r.current,K(fi),K($r)}var At=E(null),Kt=null;function Wn(e){var t=e.alternate;le(Qe,Qe.current&1),le(At,e),Kt===null&&(t===null||fi.current!==null||t.memoizedState!==null)&&(Kt=e)}function gs(e){le(Qe,Qe.current),le(At,e),Kt===null&&(Kt=e)}function Rp(e){e.tag===22?(le(Qe,Qe.current),le(At,e),Kt===null&&(Kt=e)):Pn()}function Pn(){le(Qe,Qe.current),le(At,At.current)}function _t(e){K(At),Kt===e&&(Kt=null),K(Qe)}var Qe=E(0);function Br(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||wc(n)||Ec(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Sn=0,ge=null,De=null,Fe=null,Ur=!1,di=!1,Da=!1,Hr=0,vl=0,pi=null,e2=0;function Ve(){throw Error(u(321))}function vs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function ys(e,t,n,i,r,s){return Sn=s,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?ch:Ds,Da=!1,s=n(i,r),Da=!1,di&&(s=zp(t,n,i,r)),Mp(e),s}function Mp(e){_.H=xl;var t=De!==null&&De.next!==null;if(Sn=0,Fe=De=ge=null,Ur=!1,vl=0,pi=null,t)throw Error(u(300));e===null||We||(e=e.dependencies,e!==null&&Or(e)&&(We=!0))}function zp(e,t,n,i){ge=e;var r=0;do{if(di&&(pi=null),vl=0,di=!1,25<=r)throw Error(u(301));if(r+=1,Fe=De=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}_.H=fh,s=t(n,i)}while(di);return s}function t2(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?yl(t):t,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(ge.flags|=1024),t}function bs(){var e=Hr!==0;return Hr=0,e}function xs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ss(e){if(Ur){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ur=!1}Sn=0,Fe=De=ge=null,di=!1,vl=Hr=0,pi=null}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?ge.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Ze(){if(De===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Fe===null?ge.memoizedState:Fe.next;if(t!==null)Fe=t,De=e;else{if(e===null)throw ge.alternate===null?Error(u(467)):Error(u(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Fe===null?ge.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function qr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yl(e){var t=vl;return vl+=1,pi===null&&(pi=[]),e=bp(pi,e,t),t=ge,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?ch:Ds),e}function Yr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yl(e);if(e.$$typeof===O)return ut(e)}throw Error(u(438,String(e)))}function ws(e){var t=null,n=ge.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=ge.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=qr(),ge.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=ue;return t.index++,n}function wn(e,t){return typeof t=="function"?t(e):t}function Gr(e){var t=Ze();return Es(t,De,e)}function Es(e,t,n){var i=e.queue;if(i===null)throw Error(u(311));i.lastRenderedReducer=n;var r=e.baseQueue,s=i.pending;if(s!==null){if(r!==null){var p=r.next;r.next=s.next,s.next=p}t.baseQueue=r=s,i.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{t=r.next;var v=p=null,j=null,q=t,P=!1;do{var te=q.lane&-536870913;if(te!==q.lane?(we&te)===te:(Sn&te)===te){var X=q.revertLane;if(X===0)j!==null&&(j=j.next={lane:0,revertLane:0,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),te===oi&&(P=!0);else if((Sn&X)===X){q=q.next,X===oi&&(P=!0);continue}else te={lane:0,revertLane:q.revertLane,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},j===null?(v=j=te,p=s):j=j.next=te,ge.lanes|=X,ta|=X;te=q.action,Da&&n(s,te),s=q.hasEagerState?q.eagerState:n(s,te)}else X={lane:te,revertLane:q.revertLane,gesture:q.gesture,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},j===null?(v=j=X,p=s):j=j.next=X,ge.lanes|=te,ta|=te;q=q.next}while(q!==null&&q!==t);if(j===null?p=s:j.next=v,!zt(s,e.memoizedState)&&(We=!0,P&&(n=ui,n!==null)))throw n;e.memoizedState=s,e.baseState=p,e.baseQueue=j,i.lastRenderedState=s}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Cs(e){var t=Ze(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,s=t.memoizedState;if(r!==null){n.pending=null;var p=r=r.next;do s=e(s,p.action),p=p.next;while(p!==r);zt(s,t.memoizedState)||(We=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function Op(e,t,n){var i=ge,r=Ze(),s=Ce;if(s){if(n===void 0)throw Error(u(407));n=n()}else n=t();var p=!zt((De||r).memoizedState,n);if(p&&(r.memoizedState=n,We=!0),r=r.queue,Rs(Dp.bind(null,i,r,e),[e]),r.getSnapshot!==t||p||Fe!==null&&Fe.memoizedState.tag&1){if(i.flags|=2048,hi(9,{destroy:void 0},_p.bind(null,i,r,n,t),null),Le===null)throw Error(u(349));s||(Sn&127)!==0||Ap(i,t,n)}return n}function Ap(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t=qr(),ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _p(e,t,n,i){t.value=n,t.getSnapshot=i,Np(t)&&kp(e)}function Dp(e,t,n){return n(function(){Np(t)&&kp(e)})}function Np(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function kp(e){var t=Ca(e,2);t!==null&&Et(t,e,2)}function js(e){var t=gt();if(typeof e=="function"){var n=e;if(e=n(),Da){qn(!0);try{n()}finally{qn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:e},t}function Lp(e,t,n,i){return e.baseState=n,Es(e,De,typeof i=="function"?i:wn)}function n2(e,t,n,i,r){if(Kr(e))throw Error(u(485));if(e=t.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){s.listeners.push(p)}};_.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,$p(t,s)):(s.next=n.next,t.pending=n.next=s)}}function $p(e,t){var n=t.action,i=t.payload,r=e.state;if(t.isTransition){var s=_.T,p={};_.T=p;try{var v=n(r,i),j=_.S;j!==null&&j(p,v),Bp(e,t,v)}catch(q){Ts(e,t,q)}finally{s!==null&&p.types!==null&&(s.types=p.types),_.T=s}}else try{s=n(r,i),Bp(e,t,s)}catch(q){Ts(e,t,q)}}function Bp(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Up(e,t,i)},function(i){return Ts(e,t,i)}):Up(e,t,n)}function Up(e,t,n){t.status="fulfilled",t.value=n,Hp(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$p(e,n)))}function Ts(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Hp(t),t=t.next;while(t!==i)}e.action=null}function Hp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function qp(e,t){return t}function Yp(e,t){if(Ce){var n=Le.formState;if(n!==null){e:{var i=ge;if(Ce){if(Ue){t:{for(var r=Ue,s=Vt;r.nodeType!==8;){if(!s){r=null;break t}if(r=Qt(r.nextSibling),r===null){r=null;break t}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){Ue=Qt(r.nextSibling),i=r.data==="F!";break e}}Kn(i)}i=!1}i&&(t=n[0])}}return n=gt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qp,lastRenderedState:t},n.queue=i,n=oh.bind(null,ge,i),i.dispatch=n,i=js(!1),s=_s.bind(null,ge,!1,i.queue),i=gt(),r={state:t,dispatch:null,action:e,pending:null},i.queue=r,n=n2.bind(null,ge,r,s,n),r.dispatch=n,i.memoizedState=e,[t,n,!1]}function Gp(e){var t=Ze();return Xp(t,De,e)}function Xp(e,t,n){if(t=Es(e,t,qp)[0],e=Gr(wn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=yl(t)}catch(p){throw p===si?Dr:p}else i=t;t=Ze();var r=t.queue,s=r.dispatch;return n!==t.memoizedState&&(ge.flags|=2048,hi(9,{destroy:void 0},a2.bind(null,r,n),null)),[i,s,e]}function a2(e,t){e.action=t}function Vp(e){var t=Ze(),n=De;if(n!==null)return Xp(t,n,e);Ze(),t=t.memoizedState,n=Ze();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function hi(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=ge.updateQueue,t===null&&(t=qr(),ge.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Kp(){return Ze().memoizedState}function Xr(e,t,n,i){var r=gt();ge.flags|=e,r.memoizedState=hi(1|t,{destroy:void 0},n,i===void 0?null:i)}function Vr(e,t,n,i){var r=Ze();i=i===void 0?null:i;var s=r.memoizedState.inst;De!==null&&i!==null&&vs(i,De.memoizedState.deps)?r.memoizedState=hi(t,s,n,i):(ge.flags|=e,r.memoizedState=hi(1|t,s,n,i))}function Qp(e,t){Xr(8390656,8,e,t)}function Rs(e,t){Vr(2048,8,e,t)}function i2(e){ge.flags|=4;var t=ge.updateQueue;if(t===null)t=qr(),ge.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Zp(e){var t=Ze().memoizedState;return i2({ref:t,nextImpl:e}),function(){if((ze&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Jp(e,t){return Vr(4,2,e,t)}function Fp(e,t){return Vr(4,4,e,t)}function Wp(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pp(e,t,n){n=n!=null?n.concat([e]):null,Vr(4,4,Wp.bind(null,t,e),n)}function Ms(){}function Ip(e,t){var n=Ze();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&vs(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function eh(e,t){var n=Ze();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&vs(t,i[1]))return i[0];if(i=e(),Da){qn(!0);try{e()}finally{qn(!1)}}return n.memoizedState=[i,t],i}function zs(e,t,n){return n===void 0||(Sn&1073741824)!==0&&(we&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=t0(),ge.lanes|=e,ta|=e,n)}function th(e,t,n,i){return zt(n,t)?n:fi.current!==null?(e=zs(e,n,i),zt(e,t)||(We=!0),e):(Sn&42)===0||(Sn&1073741824)!==0&&(we&261930)===0?(We=!0,e.memoizedState=n):(e=t0(),ge.lanes|=e,ta|=e,t)}function nh(e,t,n,i,r){var s=Y.p;Y.p=s!==0&&8>s?s:8;var p=_.T,v={};_.T=v,_s(e,!1,t,n);try{var j=r(),q=_.S;if(q!==null&&q(v,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var P=Iy(j,i);bl(e,t,P,kt(e))}else bl(e,t,i,kt(e))}catch(te){bl(e,t,{then:function(){},status:"rejected",reason:te},kt())}finally{Y.p=s,p!==null&&v.types!==null&&(p.types=v.types),_.T=p}}function l2(){}function Os(e,t,n,i){if(e.tag!==5)throw Error(u(476));var r=ah(e).queue;nh(e,r,t,F,n===null?l2:function(){return ih(e),n(i)})}function ah(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:F},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ih(e){var t=ah(e);t.next===null&&(t=e.alternate.memoizedState),bl(e,t.next.queue,{},kt())}function As(){return ut(Ll)}function lh(){return Ze().memoizedState}function rh(){return Ze().memoizedState}function r2(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=kt();e=Jn(n);var i=Fn(t,e,n);i!==null&&(Et(i,t,n),hl(i,t,n)),t={cache:rs()},e.payload=t;return}t=t.return}}function o2(e,t,n){var i=kt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Kr(e)?uh(t,n):(n=Ju(e,t,n,i),n!==null&&(Et(n,e,i),sh(n,t,i)))}function oh(e,t,n){var i=kt();bl(e,t,n,i)}function bl(e,t,n,i){var r={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kr(e))uh(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var p=t.lastRenderedState,v=s(p,n);if(r.hasEagerState=!0,r.eagerState=v,zt(v,p))return Tr(e,t,r,0),Le===null&&jr(),!1}catch{}finally{}if(n=Ju(e,t,r,i),n!==null)return Et(n,e,i),sh(n,t,i),!0}return!1}function _s(e,t,n,i){if(i={lane:2,revertLane:cc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Kr(e)){if(t)throw Error(u(479))}else t=Ju(e,n,i,2),t!==null&&Et(t,e,2)}function Kr(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function uh(e,t){di=Ur=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sh(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,hd(e,n)}}var xl={readContext:ut,use:Yr,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve};xl.useEffectEvent=Ve;var ch={readContext:ut,use:Yr,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:Qp,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Xr(4194308,4,Wp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xr(4194308,4,e,t)},useInsertionEffect:function(e,t){Xr(4,2,e,t)},useMemo:function(e,t){var n=gt();t=t===void 0?null:t;var i=e();if(Da){qn(!0);try{e()}finally{qn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=gt();if(n!==void 0){var r=n(t);if(Da){qn(!0);try{n(t)}finally{qn(!1)}}}else r=t;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=o2.bind(null,ge,e),[i.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:function(e){e=js(e);var t=e.queue,n=oh.bind(null,ge,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ms,useDeferredValue:function(e,t){var n=gt();return zs(n,e,t)},useTransition:function(){var e=js(!1);return e=nh.bind(null,ge,e.queue,!0,!1),gt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=ge,r=gt();if(Ce){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Le===null)throw Error(u(349));(we&127)!==0||Ap(i,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,Qp(Dp.bind(null,i,s,e),[e]),i.flags|=2048,hi(9,{destroy:void 0},_p.bind(null,i,s,n,t),null),n},useId:function(){var e=gt(),t=Le.identifierPrefix;if(Ce){var n=rn,i=ln;n=(i&~(1<<32-Mt(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Hr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=e2++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:As,useFormState:Yp,useActionState:Yp,useOptimistic:function(e){var t=gt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=_s.bind(null,ge,!0,n),n.dispatch=t,[e,t]},useMemoCache:ws,useCacheRefresh:function(){return gt().memoizedState=r2.bind(null,ge)},useEffectEvent:function(e){var t=gt(),n={impl:e};return t.memoizedState=n,function(){if((ze&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},Ds={readContext:ut,use:Yr,useCallback:Ip,useContext:ut,useEffect:Rs,useImperativeHandle:Pp,useInsertionEffect:Jp,useLayoutEffect:Fp,useMemo:eh,useReducer:Gr,useRef:Kp,useState:function(){return Gr(wn)},useDebugValue:Ms,useDeferredValue:function(e,t){var n=Ze();return th(n,De.memoizedState,e,t)},useTransition:function(){var e=Gr(wn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:yl(e),t]},useSyncExternalStore:Op,useId:lh,useHostTransitionStatus:As,useFormState:Gp,useActionState:Gp,useOptimistic:function(e,t){var n=Ze();return Lp(n,De,e,t)},useMemoCache:ws,useCacheRefresh:rh};Ds.useEffectEvent=Zp;var fh={readContext:ut,use:Yr,useCallback:Ip,useContext:ut,useEffect:Rs,useImperativeHandle:Pp,useInsertionEffect:Jp,useLayoutEffect:Fp,useMemo:eh,useReducer:Cs,useRef:Kp,useState:function(){return Cs(wn)},useDebugValue:Ms,useDeferredValue:function(e,t){var n=Ze();return De===null?zs(n,e,t):th(n,De.memoizedState,e,t)},useTransition:function(){var e=Cs(wn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:yl(e),t]},useSyncExternalStore:Op,useId:lh,useHostTransitionStatus:As,useFormState:Vp,useActionState:Vp,useOptimistic:function(e,t){var n=Ze();return De!==null?Lp(n,De,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ws,useCacheRefresh:rh};fh.useEffectEvent=Zp;function Ns(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:S({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=kt(),r=Jn(i);r.payload=t,n!=null&&(r.callback=n),t=Fn(e,r,i),t!==null&&(Et(t,e,i),hl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=kt(),r=Jn(i);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Fn(e,r,i),t!==null&&(Et(t,e,i),hl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kt(),i=Jn(n);i.tag=2,t!=null&&(i.callback=t),t=Fn(e,i,n),t!==null&&(Et(t,e,n),hl(t,e,n))}};function dh(e,t,n,i,r,s,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,p):t.prototype&&t.prototype.isPureReactComponent?!rl(n,i)||!rl(r,s):!0}function ph(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&ks.enqueueReplaceState(t,t.state,null)}function Na(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=S({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function hh(e){Cr(e)}function mh(e){console.error(e)}function gh(e){Cr(e)}function Qr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function vh(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Ls(e,t,n){return n=Jn(n),n.tag=3,n.payload={element:null},n.callback=function(){Qr(e,t)},n}function yh(e){return e=Jn(e),e.tag=3,e}function bh(e,t,n,i){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var s=i.value;e.payload=function(){return r(s)},e.callback=function(){vh(t,n,i)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){vh(t,n,i),typeof r!="function"&&(na===null?na=new Set([this]):na.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})})}function u2(e,t,n,i,r){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ri(t,n,r,!0),n=At.current,n!==null){switch(n.tag){case 31:case 13:return Kt===null?lo():n.alternate===null&&Ke===0&&(Ke=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===Nr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),oc(e,i,r)),!1;case 22:return n.flags|=65536,i===Nr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),oc(e,i,r)),!1}throw Error(u(435,n.tag))}return oc(e,i,r),lo(),!1}if(Ce)return t=At.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,i!==ts&&(e=Error(u(422),{cause:i}),sl(Yt(e,n)))):(i!==ts&&(t=Error(u(423),{cause:i}),sl(Yt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=Yt(i,n),r=Ls(e.stateNode,i,r),ds(e,r),Ke!==4&&(Ke=2)),!1;var s=Error(u(520),{cause:i});if(s=Yt(s,n),Ml===null?Ml=[s]:Ml.push(s),Ke!==4&&(Ke=2),t===null)return!0;i=Yt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=Ls(n.stateNode,i,e),ds(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(na===null||!na.has(s))))return n.flags|=65536,r&=-r,n.lanes|=r,r=yh(r),bh(r,e,n,i),ds(n,r),!1}n=n.return}while(n!==null);return!1}var $s=Error(u(461)),We=!1;function st(e,t,n,i){t.child=e===null?Ep(t,null,n,i):_a(t,e.child,n,i)}function xh(e,t,n,i,r){n=n.render;var s=t.ref;if("ref"in i){var p={};for(var v in i)v!=="ref"&&(p[v]=i[v])}else p=i;return Ma(t),i=ys(e,t,n,p,s,r),v=bs(),e!==null&&!We?(xs(e,t,r),En(e,t,r)):(Ce&&v&&Iu(t),t.flags|=1,st(e,t,i,r),t.child)}function Sh(e,t,n,i,r){if(e===null){var s=n.type;return typeof s=="function"&&!Fu(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,wh(e,t,s,i,r)):(e=Mr(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Vs(e,r)){var p=s.memoizedProps;if(n=n.compare,n=n!==null?n:rl,n(p,i)&&e.ref===t.ref)return En(e,t,r)}return t.flags|=1,e=vn(s,i),e.ref=t.ref,e.return=t,t.child=e}function wh(e,t,n,i,r){if(e!==null){var s=e.memoizedProps;if(rl(s,i)&&e.ref===t.ref)if(We=!1,t.pendingProps=i=s,Vs(e,r))(e.flags&131072)!==0&&(We=!0);else return t.lanes=e.lanes,En(e,t,r)}return Bs(e,t,n,i,r)}function Eh(e,t,n,i){var r=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~s}else i=0,t.child=null;return Ch(e,t,s,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&_r(t,s!==null?s.cachePool:null),s!==null?Tp(t,s):hs(),Rp(t);else return i=t.lanes=536870912,Ch(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(_r(t,s.cachePool),Tp(t,s),Pn(),t.memoizedState=null):(e!==null&&_r(t,null),hs(),Pn());return st(e,t,r,n),t.child}function Sl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ch(e,t,n,i,r){var s=us();return s=s===null?null:{parent:Je._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&_r(t,null),hs(),Rp(t),e!==null&&ri(e,t,i,!0),t.childLanes=r,null}function Zr(e,t){return t=Fr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function jh(e,t,n){return _a(t,e.child,null,n),e=Zr(t,t.pendingProps),e.flags|=2,_t(t),t.memoizedState=null,e}function s2(e,t,n){var i=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ce){if(i.mode==="hidden")return e=Zr(t,i),t.lanes=536870912,Sl(null,e);if(gs(t),(e=Ue)?(e=$0(e,Vt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xn!==null?{id:ln,overflow:rn}:null,retryLane:536870912,hydrationErrors:null},n=up(e),n.return=t,t.child=n,ot=t,Ue=null)):e=null,e===null)throw Kn(t);return t.lanes=536870912,null}return Zr(t,i)}var s=e.memoizedState;if(s!==null){var p=s.dehydrated;if(gs(t),r)if(t.flags&256)t.flags&=-257,t=jh(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(We||ri(e,t,n,!1),r=(n&e.childLanes)!==0,We||r){if(i=Le,i!==null&&(p=md(i,n),p!==0&&p!==s.retryLane))throw s.retryLane=p,Ca(e,p),Et(i,e,p),$s;lo(),t=jh(e,t,n)}else e=s.treeContext,Ue=Qt(p.nextSibling),ot=t,Ce=!0,Vn=null,Vt=!1,e!==null&&fp(t,e),t=Zr(t,i),t.flags|=4096;return t}return e=vn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Jr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Bs(e,t,n,i,r){return Ma(t),n=ys(e,t,n,i,void 0,r),i=bs(),e!==null&&!We?(xs(e,t,r),En(e,t,r)):(Ce&&i&&Iu(t),t.flags|=1,st(e,t,n,r),t.child)}function Th(e,t,n,i,r,s){return Ma(t),t.updateQueue=null,n=zp(t,i,n,r),Mp(e),i=bs(),e!==null&&!We?(xs(e,t,s),En(e,t,s)):(Ce&&i&&Iu(t),t.flags|=1,st(e,t,n,s),t.child)}function Rh(e,t,n,i,r){if(Ma(t),t.stateNode===null){var s=ni,p=n.contextType;typeof p=="object"&&p!==null&&(s=ut(p)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=ks,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},cs(t),p=n.contextType,s.context=typeof p=="object"&&p!==null?ut(p):ni,s.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Ns(t,n,p,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(p=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),p!==s.state&&ks.enqueueReplaceState(s,s.state,null),gl(t,i,s,r),ml(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var v=t.memoizedProps,j=Na(n,v);s.props=j;var q=s.context,P=n.contextType;p=ni,typeof P=="object"&&P!==null&&(p=ut(P));var te=n.getDerivedStateFromProps;P=typeof te=="function"||typeof s.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,P||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(v||q!==p)&&ph(t,s,i,p),Zn=!1;var X=t.memoizedState;s.state=X,gl(t,i,s,r),ml(),q=t.memoizedState,v||X!==q||Zn?(typeof te=="function"&&(Ns(t,n,te,i),q=t.memoizedState),(j=Zn||dh(t,n,j,i,X,q,p))?(P||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=q),s.props=i,s.state=q,s.context=p,i=j):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,fs(e,t),p=t.memoizedProps,P=Na(n,p),s.props=P,te=t.pendingProps,X=s.context,q=n.contextType,j=ni,typeof q=="object"&&q!==null&&(j=ut(q)),v=n.getDerivedStateFromProps,(q=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(p!==te||X!==j)&&ph(t,s,i,j),Zn=!1,X=t.memoizedState,s.state=X,gl(t,i,s,r),ml();var Q=t.memoizedState;p!==te||X!==Q||Zn||e!==null&&e.dependencies!==null&&Or(e.dependencies)?(typeof v=="function"&&(Ns(t,n,v,i),Q=t.memoizedState),(P=Zn||dh(t,n,P,i,X,Q,j)||e!==null&&e.dependencies!==null&&Or(e.dependencies))?(q||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,Q,j),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,Q,j)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||p===e.memoizedProps&&X===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&X===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=Q),s.props=i,s.state=Q,s.context=j,i=P):(typeof s.componentDidUpdate!="function"||p===e.memoizedProps&&X===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&X===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Jr(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=_a(t,e.child,null,r),t.child=_a(t,null,n,r)):st(e,t,n,r),t.memoizedState=s.state,e=t.child):e=En(e,t,r),e}function Mh(e,t,n,i){return Ta(),t.flags|=256,st(e,t,n,i),t.child}var Us={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hs(e){return{baseLanes:e,cachePool:vp()}}function qs(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Nt),e}function zh(e,t,n){var i=t.pendingProps,r=!1,s=(t.flags&128)!==0,p;if((p=s)||(p=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),p&&(r=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ce){if(r?Wn(t):Pn(),(e=Ue)?(e=$0(e,Vt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xn!==null?{id:ln,overflow:rn}:null,retryLane:536870912,hydrationErrors:null},n=up(e),n.return=t,t.child=n,ot=t,Ue=null)):e=null,e===null)throw Kn(t);return Ec(e)?t.lanes=32:t.lanes=536870912,null}var v=i.children;return i=i.fallback,r?(Pn(),r=t.mode,v=Fr({mode:"hidden",children:v},r),i=ja(i,r,n,null),v.return=t,i.return=t,v.sibling=i,t.child=v,i=t.child,i.memoizedState=Hs(n),i.childLanes=qs(e,p,n),t.memoizedState=Us,Sl(null,i)):(Wn(t),Ys(t,v))}var j=e.memoizedState;if(j!==null&&(v=j.dehydrated,v!==null)){if(s)t.flags&256?(Wn(t),t.flags&=-257,t=Gs(e,t,n)):t.memoizedState!==null?(Pn(),t.child=e.child,t.flags|=128,t=null):(Pn(),v=i.fallback,r=t.mode,i=Fr({mode:"visible",children:i.children},r),v=ja(v,r,n,null),v.flags|=2,i.return=t,v.return=t,i.sibling=v,t.child=i,_a(t,e.child,null,n),i=t.child,i.memoizedState=Hs(n),i.childLanes=qs(e,p,n),t.memoizedState=Us,t=Sl(null,i));else if(Wn(t),Ec(v)){if(p=v.nextSibling&&v.nextSibling.dataset,p)var q=p.dgst;p=q,i=Error(u(419)),i.stack="",i.digest=p,sl({value:i,source:null,stack:null}),t=Gs(e,t,n)}else if(We||ri(e,t,n,!1),p=(n&e.childLanes)!==0,We||p){if(p=Le,p!==null&&(i=md(p,n),i!==0&&i!==j.retryLane))throw j.retryLane=i,Ca(e,i),Et(p,e,i),$s;wc(v)||lo(),t=Gs(e,t,n)}else wc(v)?(t.flags|=192,t.child=e.child,t=null):(e=j.treeContext,Ue=Qt(v.nextSibling),ot=t,Ce=!0,Vn=null,Vt=!1,e!==null&&fp(t,e),t=Ys(t,i.children),t.flags|=4096);return t}return r?(Pn(),v=i.fallback,r=t.mode,j=e.child,q=j.sibling,i=vn(j,{mode:"hidden",children:i.children}),i.subtreeFlags=j.subtreeFlags&65011712,q!==null?v=vn(q,v):(v=ja(v,r,n,null),v.flags|=2),v.return=t,i.return=t,i.sibling=v,t.child=i,Sl(null,i),i=t.child,v=e.child.memoizedState,v===null?v=Hs(n):(r=v.cachePool,r!==null?(j=Je._currentValue,r=r.parent!==j?{parent:j,pool:j}:r):r=vp(),v={baseLanes:v.baseLanes|n,cachePool:r}),i.memoizedState=v,i.childLanes=qs(e,p,n),t.memoizedState=Us,Sl(e.child,i)):(Wn(t),n=e.child,e=n.sibling,n=vn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=n,t.memoizedState=null,n)}function Ys(e,t){return t=Fr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Fr(e,t){return e=Ot(22,e,null,t),e.lanes=0,e}function Gs(e,t,n){return _a(t,e.child,null,n),e=Ys(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oh(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),is(e.return,t,n)}function Xs(e,t,n,i,r,s){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,treeForkCount:s}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=i,p.tail=n,p.tailMode=r,p.treeForkCount=s)}function Ah(e,t,n){var i=t.pendingProps,r=i.revealOrder,s=i.tail;i=i.children;var p=Qe.current,v=(p&2)!==0;if(v?(p=p&1|2,t.flags|=128):p&=1,le(Qe,p),st(e,t,i,n),i=Ce?ul:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oh(e,n,t);else if(e.tag===19)Oh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Br(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Xs(t,!1,r,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Br(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Xs(t,!0,n,null,s,i);break;case"together":Xs(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function En(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ta|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ri(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Vs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Or(e)))}function c2(e,t,n){switch(t.tag){case 3:$e(t,t.stateNode.containerInfo),Qn(t,Je,e.memoizedState.cache),Ta();break;case 27:case 5:jt(t);break;case 4:$e(t,t.stateNode.containerInfo);break;case 10:Qn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,gs(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Wn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?zh(e,t,n):(Wn(t),e=En(e,t,n),e!==null?e.sibling:null);Wn(t);break;case 19:var r=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(ri(e,t,n,!1),i=(n&t.childLanes)!==0),r){if(i)return Ah(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),le(Qe,Qe.current),i)break;return null;case 22:return t.lanes=0,Eh(e,t,n,t.pendingProps);case 24:Qn(t,Je,e.memoizedState.cache)}return En(e,t,n)}function _h(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)We=!0;else{if(!Vs(e,n)&&(t.flags&128)===0)return We=!1,c2(e,t,n);We=(e.flags&131072)!==0}else We=!1,Ce&&(t.flags&1048576)!==0&&cp(t,ul,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Oa(t.elementType),t.type=e,typeof e=="function")Fu(e)?(i=Na(e,i),t.tag=1,t=Rh(null,t,e,i,n)):(t.tag=0,t=Bs(null,t,e,i,n));else{if(e!=null){var r=e.$$typeof;if(r===U){t.tag=11,t=xh(null,t,e,i,n);break e}else if(r===Z){t.tag=14,t=Sh(null,t,e,i,n);break e}}throw t=ne(e)||e,Error(u(306,t,""))}}return t;case 0:return Bs(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,r=Na(i,t.pendingProps),Rh(e,t,i,r,n);case 3:e:{if($e(t,t.stateNode.containerInfo),e===null)throw Error(u(387));i=t.pendingProps;var s=t.memoizedState;r=s.element,fs(e,t),gl(t,i,null,n);var p=t.memoizedState;if(i=p.cache,Qn(t,Je,i),i!==s.cache&&ls(t,[Je],n,!0),ml(),i=p.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Mh(e,t,i,n);break e}else if(i!==r){r=Yt(Error(u(424)),t),sl(r),t=Mh(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ue=Qt(e.firstChild),ot=t,Ce=!0,Vn=null,Vt=!0,n=Ep(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ta(),i===r){t=En(e,t,n);break e}st(e,t,i,n)}t=t.child}return t;case 26:return Jr(e,t),e===null?(n=G0(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ce||(n=t.type,e=t.pendingProps,i=po(he.current).createElement(n),i[rt]=t,i[vt]=e,ct(i,n,e),tt(i),t.stateNode=i):t.memoizedState=G0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return jt(t),e===null&&Ce&&(i=t.stateNode=H0(t.type,t.pendingProps,he.current),ot=t,Vt=!0,r=Ue,ra(t.type)?(Cc=r,Ue=Qt(i.firstChild)):Ue=r),st(e,t,t.pendingProps.children,n),Jr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ce&&((r=i=Ue)&&(i=H2(i,t.type,t.pendingProps,Vt),i!==null?(t.stateNode=i,ot=t,Ue=Qt(i.firstChild),Vt=!1,r=!0):r=!1),r||Kn(t)),jt(t),r=t.type,s=t.pendingProps,p=e!==null?e.memoizedProps:null,i=s.children,bc(r,s)?i=null:p!==null&&bc(r,p)&&(t.flags|=32),t.memoizedState!==null&&(r=ys(e,t,t2,null,null,n),Ll._currentValue=r),Jr(e,t),st(e,t,i,n),t.child;case 6:return e===null&&Ce&&((e=n=Ue)&&(n=q2(n,t.pendingProps,Vt),n!==null?(t.stateNode=n,ot=t,Ue=null,e=!0):e=!1),e||Kn(t)),null;case 13:return zh(e,t,n);case 4:return $e(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=_a(t,null,i,n):st(e,t,i,n),t.child;case 11:return xh(e,t,t.type,t.pendingProps,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Qn(t,t.type,i.value),st(e,t,i.children,n),t.child;case 9:return r=t.type._context,i=t.pendingProps.children,Ma(t),r=ut(r),i=i(r),t.flags|=1,st(e,t,i,n),t.child;case 14:return Sh(e,t,t.type,t.pendingProps,n);case 15:return wh(e,t,t.type,t.pendingProps,n);case 19:return Ah(e,t,n);case 31:return s2(e,t,n);case 22:return Eh(e,t,n,t.pendingProps);case 24:return Ma(t),i=ut(Je),e===null?(r=us(),r===null&&(r=Le,s=rs(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=n),r=s),t.memoizedState={parent:i,cache:r},cs(t),Qn(t,Je,r)):((e.lanes&n)!==0&&(fs(e,t),gl(t,null,null,n),ml()),r=e.memoizedState,s=t.memoizedState,r.parent!==i?(r={parent:i,cache:i},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Qn(t,Je,i)):(i=s.cache,Qn(t,Je,i),i!==r.cache&&ls(t,[Je],n,!0))),st(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Cn(e){e.flags|=4}function Ks(e,t,n,i,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(l0())e.flags|=8192;else throw Aa=Nr,ss}else e.flags&=-16777217}function Dh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Z0(t))if(l0())e.flags|=8192;else throw Aa=Nr,ss}function Wr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?dd():536870912,e.lanes|=t,yi|=t)}function wl(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function f2(e,t,n){var i=t.pendingProps;switch(es(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return He(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),xn(Je),je(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(li(t)?Cn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ns())),He(t),null;case 26:var r=t.type,s=t.memoizedState;return e===null?(Cn(t),s!==null?(He(t),Dh(t,s)):(He(t),Ks(t,r,null,i,n))):s?s!==e.memoizedState?(Cn(t),He(t),Dh(t,s)):(He(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Cn(t),He(t),Ks(t,r,e,i,n)),null;case 27:if(Wt(t),n=he.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Cn(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return He(t),null}e=ie.current,li(t)?dp(t):(e=H0(r,i,n),t.stateNode=e,Cn(t))}return He(t),null;case 5:if(Wt(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Cn(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return He(t),null}if(s=ie.current,li(t))dp(t);else{var p=po(he.current);switch(s){case 1:s=p.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=p.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=p.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?p.createElement("select",{is:i.is}):p.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?p.createElement(r,{is:i.is}):p.createElement(r)}}s[rt]=t,s[vt]=i;e:for(p=t.child;p!==null;){if(p.tag===5||p.tag===6)s.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}t.stateNode=s;e:switch(ct(s,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Cn(t)}}return He(t),Ks(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Cn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(u(166));if(e=he.current,li(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,r=ot,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[rt]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||z0(e.nodeValue,n)),e||Kn(t,!0)}else e=po(e).createTextNode(i),e[rt]=t,t.stateNode=e}return He(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=li(t),n!==null){if(e===null){if(!i)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[rt]=t}else Ta(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),e=!1}else n=ns(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_t(t),t):(_t(t),null);if((t.flags&128)!==0)throw Error(u(558))}return He(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=li(t),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(u(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(u(317));r[rt]=t}else Ta(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),r=!1}else r=ns(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(_t(t),t):(_t(t),null)}return _t(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==r&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Wr(t,t.updateQueue),He(t),null);case 4:return je(),e===null&&hc(t.stateNode.containerInfo),He(t),null;case 10:return xn(t.type),He(t),null;case 19:if(K(Qe),i=t.memoizedState,i===null)return He(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)wl(i,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Br(e),s!==null){for(t.flags|=128,wl(i,!1),e=s.updateQueue,t.updateQueue=e,Wr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)op(n,e),n=n.sibling;return le(Qe,Qe.current&1|2),Ce&&yn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Tt()>no&&(t.flags|=128,r=!0,wl(i,!1),t.lanes=4194304)}else{if(!r)if(e=Br(s),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Wr(t,e),wl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Ce)return He(t),null}else 2*Tt()-i.renderingStartTime>no&&n!==536870912&&(t.flags|=128,r=!0,wl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Tt(),e.sibling=null,n=Qe.current,le(Qe,r?n&1|2:n&1),Ce&&yn(t,i.treeForkCount),e):(He(t),null);case 22:case 23:return _t(t),ms(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),n=t.updateQueue,n!==null&&Wr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&K(za),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xn(Je),He(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function d2(e,t){switch(es(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(Je),je(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Wt(t),null;case 31:if(t.memoizedState!==null){if(_t(t),t.alternate===null)throw Error(u(340));Ta()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_t(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Ta()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Qe),null;case 4:return je(),null;case 10:return xn(t.type),null;case 22:case 23:return _t(t),ms(),e!==null&&K(za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xn(Je),null;case 25:return null;default:return null}}function Nh(e,t){switch(es(t),t.tag){case 3:xn(Je),je();break;case 26:case 27:case 5:Wt(t);break;case 4:je();break;case 31:t.memoizedState!==null&&_t(t);break;case 13:_t(t);break;case 19:K(Qe);break;case 10:xn(t.type);break;case 22:case 23:_t(t),ms(),e!==null&&K(za);break;case 24:xn(Je)}}function El(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){i=void 0;var s=n.create,p=n.inst;i=s(),p.destroy=i}n=n.next}while(n!==r)}}catch(v){_e(t,t.return,v)}}function In(e,t,n){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var s=r.next;i=s;do{if((i.tag&e)===e){var p=i.inst,v=p.destroy;if(v!==void 0){p.destroy=void 0,r=t;var j=n,q=v;try{q()}catch(P){_e(r,j,P)}}}i=i.next}while(i!==s)}}catch(P){_e(t,t.return,P)}}function kh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{jp(t,n)}catch(i){_e(e,e.return,i)}}}function Lh(e,t,n){n.props=Na(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){_e(e,t,i)}}function Cl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(r){_e(e,t,r)}}function on(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(r){_e(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){_e(e,t,r)}else n.current=null}function $h(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){_e(e,e.return,r)}}function Qs(e,t,n){try{var i=e.stateNode;N2(i,e.type,n,t),i[vt]=t}catch(r){_e(e,e.return,r)}}function Bh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ra(e.type)||e.tag===4}function Zs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Js(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mn));else if(i!==4&&(i===27&&ra(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Js(e,t,n),e=e.sibling;e!==null;)Js(e,t,n),e=e.sibling}function Pr(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ra(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Pr(e,t,n),e=e.sibling;e!==null;)Pr(e,t,n),e=e.sibling}function Uh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);ct(t,i,n),t[rt]=e,t[vt]=n}catch(s){_e(e,e.return,s)}}var jn=!1,Pe=!1,Fs=!1,Hh=typeof WeakSet=="function"?WeakSet:Set,nt=null;function p2(e,t){if(e=e.containerInfo,vc=xo,e=Pd(e),Gu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var p=0,v=-1,j=-1,q=0,P=0,te=e,X=null;t:for(;;){for(var Q;te!==n||r!==0&&te.nodeType!==3||(v=p+r),te!==s||i!==0&&te.nodeType!==3||(j=p+i),te.nodeType===3&&(p+=te.nodeValue.length),(Q=te.firstChild)!==null;)X=te,te=Q;for(;;){if(te===e)break t;if(X===n&&++q===r&&(v=p),X===s&&++P===i&&(j=p),(Q=te.nextSibling)!==null)break;te=X,X=te.parentNode}te=Q}n=v===-1||j===-1?null:{start:v,end:j}}else n=null}n=n||{start:0,end:0}}else n=null;for(yc={focusedElem:e,selectionRange:n},xo=!1,nt=t;nt!==null;)if(t=nt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,nt=e;else for(;nt!==null;){switch(t=nt,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,r=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var se=Na(n.type,r);e=i.getSnapshotBeforeUpdate(se,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(pe){_e(n,n.return,pe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Sc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,nt=e;break}nt=t.return}}function qh(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Rn(e,n),i&4&&El(5,n);break;case 1:if(Rn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(p){_e(n,n.return,p)}else{var r=Na(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){_e(n,n.return,p)}}i&64&&kh(n),i&512&&Cl(n,n.return);break;case 3:if(Rn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{jp(e,t)}catch(p){_e(n,n.return,p)}}break;case 27:t===null&&i&4&&Uh(n);case 26:case 5:Rn(e,n),t===null&&i&4&&$h(n),i&512&&Cl(n,n.return);break;case 12:Rn(e,n);break;case 31:Rn(e,n),i&4&&Xh(e,n);break;case 13:Rn(e,n),i&4&&Vh(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=w2.bind(null,n),Y2(e,n))));break;case 22:if(i=n.memoizedState!==null||jn,!i){t=t!==null&&t.memoizedState!==null||Pe,r=jn;var s=Pe;jn=i,(Pe=t)&&!s?Mn(e,n,(n.subtreeFlags&8772)!==0):Rn(e,n),jn=r,Pe=s}break;case 30:break;default:Rn(e,n)}}function Yh(e){var t=e.alternate;t!==null&&(e.alternate=null,Yh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Tu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ge=null,bt=!1;function Tn(e,t,n){for(n=n.child;n!==null;)Gh(e,t,n),n=n.sibling}function Gh(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Zi,n)}catch{}switch(n.tag){case 26:Pe||on(n,t),Tn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Pe||on(n,t);var i=Ge,r=bt;ra(n.type)&&(Ge=n.stateNode,bt=!1),Tn(e,t,n),Dl(n.stateNode),Ge=i,bt=r;break;case 5:Pe||on(n,t);case 6:if(i=Ge,r=bt,Ge=null,Tn(e,t,n),Ge=i,bt=r,Ge!==null)if(bt)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(n.stateNode)}catch(s){_e(n,t,s)}else try{Ge.removeChild(n.stateNode)}catch(s){_e(n,t,s)}break;case 18:Ge!==null&&(bt?(e=Ge,k0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ti(e)):k0(Ge,n.stateNode));break;case 4:i=Ge,r=bt,Ge=n.stateNode.containerInfo,bt=!0,Tn(e,t,n),Ge=i,bt=r;break;case 0:case 11:case 14:case 15:In(2,n,t),Pe||In(4,n,t),Tn(e,t,n);break;case 1:Pe||(on(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Lh(n,t,i)),Tn(e,t,n);break;case 21:Tn(e,t,n);break;case 22:Pe=(i=Pe)||n.memoizedState!==null,Tn(e,t,n),Pe=i;break;default:Tn(e,t,n)}}function Xh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ti(e)}catch(n){_e(t,t.return,n)}}}function Vh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ti(e)}catch(n){_e(t,t.return,n)}}function h2(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Hh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Hh),t;default:throw Error(u(435,e.tag))}}function Ir(e,t){var n=h2(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var r=E2.bind(null,e,i);i.then(r,r)}})}function xt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i],s=e,p=t,v=p;e:for(;v!==null;){switch(v.tag){case 27:if(ra(v.type)){Ge=v.stateNode,bt=!1;break e}break;case 5:Ge=v.stateNode,bt=!1;break e;case 3:case 4:Ge=v.stateNode.containerInfo,bt=!0;break e}v=v.return}if(Ge===null)throw Error(u(160));Gh(s,p,r),Ge=null,bt=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Kh(t,e),t=t.sibling}var It=null;function Kh(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xt(t,e),St(e),i&4&&(In(3,e,e.return),El(3,e),In(5,e,e.return));break;case 1:xt(t,e),St(e),i&512&&(Pe||n===null||on(n,n.return)),i&64&&jn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var r=It;if(xt(t,e),St(e),i&512&&(Pe||n===null||on(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":s=r.getElementsByTagName("title")[0],(!s||s[Wi]||s[rt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(i),r.head.insertBefore(s,r.querySelector("head > title"))),ct(s,i,n),s[rt]=e,tt(s),i=s;break e;case"link":var p=K0("link","href",r).get(i+(n.href||""));if(p){for(var v=0;v<p.length;v++)if(s=p[v],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(v,1);break t}}s=r.createElement(i),ct(s,i,n),r.head.appendChild(s);break;case"meta":if(p=K0("meta","content",r).get(i+(n.content||""))){for(v=0;v<p.length;v++)if(s=p[v],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(v,1);break t}}s=r.createElement(i),ct(s,i,n),r.head.appendChild(s);break;default:throw Error(u(468,i))}s[rt]=e,tt(s),i=s}e.stateNode=i}else Q0(r,e.type,e.stateNode);else e.stateNode=V0(r,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?Q0(r,e.type,e.stateNode):V0(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Qs(e,e.memoizedProps,n.memoizedProps)}break;case 27:xt(t,e),St(e),i&512&&(Pe||n===null||on(n,n.return)),n!==null&&i&4&&Qs(e,e.memoizedProps,n.memoizedProps);break;case 5:if(xt(t,e),St(e),i&512&&(Pe||n===null||on(n,n.return)),e.flags&32){r=e.stateNode;try{Ja(r,"")}catch(se){_e(e,e.return,se)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,Qs(e,r,n!==null?n.memoizedProps:r)),i&1024&&(Fs=!0);break;case 6:if(xt(t,e),St(e),i&4){if(e.stateNode===null)throw Error(u(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(se){_e(e,e.return,se)}}break;case 3:if(go=null,r=It,It=ho(t.containerInfo),xt(t,e),It=r,St(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ti(t.containerInfo)}catch(se){_e(e,e.return,se)}Fs&&(Fs=!1,Qh(e));break;case 4:i=It,It=ho(e.stateNode.containerInfo),xt(t,e),St(e),It=i;break;case 12:xt(t,e),St(e);break;case 31:xt(t,e),St(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ir(e,i)));break;case 13:xt(t,e),St(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(to=Tt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ir(e,i)));break;case 22:r=e.memoizedState!==null;var j=n!==null&&n.memoizedState!==null,q=jn,P=Pe;if(jn=q||r,Pe=P||j,xt(t,e),Pe=P,jn=q,St(e),i&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||j||jn||Pe||ka(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){j=n=t;try{if(s=j.stateNode,r)p=s.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{v=j.stateNode;var te=j.memoizedProps.style,X=te!=null&&te.hasOwnProperty("display")?te.display:null;v.style.display=X==null||typeof X=="boolean"?"":(""+X).trim()}}catch(se){_e(j,j.return,se)}}}else if(t.tag===6){if(n===null){j=t;try{j.stateNode.nodeValue=r?"":j.memoizedProps}catch(se){_e(j,j.return,se)}}}else if(t.tag===18){if(n===null){j=t;try{var Q=j.stateNode;r?L0(Q,!0):L0(j.stateNode,!1)}catch(se){_e(j,j.return,se)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Ir(e,n))));break;case 19:xt(t,e),St(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ir(e,i)));break;case 30:break;case 21:break;default:xt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Bh(i)){n=i;break}i=i.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var r=n.stateNode,s=Zs(e);Pr(e,s,r);break;case 5:var p=n.stateNode;n.flags&32&&(Ja(p,""),n.flags&=-33);var v=Zs(e);Pr(e,v,p);break;case 3:case 4:var j=n.stateNode.containerInfo,q=Zs(e);Js(e,q,j);break;default:throw Error(u(161))}}catch(P){_e(e,e.return,P)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Qh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Rn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)qh(e,t.alternate,t),t=t.sibling}function ka(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:In(4,t,t.return),ka(t);break;case 1:on(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Lh(t,t.return,n),ka(t);break;case 27:Dl(t.stateNode);case 26:case 5:on(t,t.return),ka(t);break;case 22:t.memoizedState===null&&ka(t);break;case 30:ka(t);break;default:ka(t)}e=e.sibling}}function Mn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,r=e,s=t,p=s.flags;switch(s.tag){case 0:case 11:case 15:Mn(r,s,n),El(4,s);break;case 1:if(Mn(r,s,n),i=s,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(q){_e(i,i.return,q)}if(i=s,r=i.updateQueue,r!==null){var v=i.stateNode;try{var j=r.shared.hiddenCallbacks;if(j!==null)for(r.shared.hiddenCallbacks=null,r=0;r<j.length;r++)Cp(j[r],v)}catch(q){_e(i,i.return,q)}}n&&p&64&&kh(s),Cl(s,s.return);break;case 27:Uh(s);case 26:case 5:Mn(r,s,n),n&&i===null&&p&4&&$h(s),Cl(s,s.return);break;case 12:Mn(r,s,n);break;case 31:Mn(r,s,n),n&&p&4&&Xh(r,s);break;case 13:Mn(r,s,n),n&&p&4&&Vh(r,s);break;case 22:s.memoizedState===null&&Mn(r,s,n),Cl(s,s.return);break;case 30:break;default:Mn(r,s,n)}t=t.sibling}}function Ws(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&cl(n))}function Ps(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&cl(e))}function en(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zh(e,t,n,i),t=t.sibling}function Zh(e,t,n,i){var r=t.flags;switch(t.tag){case 0:case 11:case 15:en(e,t,n,i),r&2048&&El(9,t);break;case 1:en(e,t,n,i);break;case 3:en(e,t,n,i),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&cl(e)));break;case 12:if(r&2048){en(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,p=s.id,v=s.onPostCommit;typeof v=="function"&&v(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(j){_e(t,t.return,j)}}else en(e,t,n,i);break;case 31:en(e,t,n,i);break;case 13:en(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,p=t.alternate,t.memoizedState!==null?s._visibility&2?en(e,t,n,i):jl(e,t):s._visibility&2?en(e,t,n,i):(s._visibility|=2,mi(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Ws(p,t);break;case 24:en(e,t,n,i),r&2048&&Ps(t.alternate,t);break;default:en(e,t,n,i)}}function mi(e,t,n,i,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,p=t,v=n,j=i,q=p.flags;switch(p.tag){case 0:case 11:case 15:mi(s,p,v,j,r),El(8,p);break;case 23:break;case 22:var P=p.stateNode;p.memoizedState!==null?P._visibility&2?mi(s,p,v,j,r):jl(s,p):(P._visibility|=2,mi(s,p,v,j,r)),r&&q&2048&&Ws(p.alternate,p);break;case 24:mi(s,p,v,j,r),r&&q&2048&&Ps(p.alternate,p);break;default:mi(s,p,v,j,r)}t=t.sibling}}function jl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,r=i.flags;switch(i.tag){case 22:jl(n,i),r&2048&&Ws(i.alternate,i);break;case 24:jl(n,i),r&2048&&Ps(i.alternate,i);break;default:jl(n,i)}t=t.sibling}}var Tl=8192;function gi(e,t,n){if(e.subtreeFlags&Tl)for(e=e.child;e!==null;)Jh(e,t,n),e=e.sibling}function Jh(e,t,n){switch(e.tag){case 26:gi(e,t,n),e.flags&Tl&&e.memoizedState!==null&&eb(n,It,e.memoizedState,e.memoizedProps);break;case 5:gi(e,t,n);break;case 3:case 4:var i=It;It=ho(e.stateNode.containerInfo),gi(e,t,n),It=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Tl,Tl=16777216,gi(e,t,n),Tl=i):gi(e,t,n));break;default:gi(e,t,n)}}function Fh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Rl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];nt=i,Ph(i,e)}Fh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wh(e),e=e.sibling}function Wh(e){switch(e.tag){case 0:case 11:case 15:Rl(e),e.flags&2048&&In(9,e,e.return);break;case 3:Rl(e);break;case 12:Rl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,eo(e)):Rl(e);break;default:Rl(e)}}function eo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];nt=i,Ph(i,e)}Fh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:In(8,t,t.return),eo(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,eo(t));break;default:eo(t)}e=e.sibling}}function Ph(e,t){for(;nt!==null;){var n=nt;switch(n.tag){case 0:case 11:case 15:In(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:cl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,nt=i;else e:for(n=e;nt!==null;){i=nt;var r=i.sibling,s=i.return;if(Yh(i),i===n){nt=null;break e}if(r!==null){r.return=s,nt=r;break e}nt=s}}}var m2={getCacheForType:function(e){var t=ut(Je),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ut(Je).controller.signal}},g2=typeof WeakMap=="function"?WeakMap:Map,ze=0,Le=null,xe=null,we=0,Ae=0,Dt=null,ea=!1,vi=!1,Is=!1,zn=0,Ke=0,ta=0,La=0,ec=0,Nt=0,yi=0,Ml=null,wt=null,tc=!1,to=0,Ih=0,no=1/0,ao=null,na=null,et=0,aa=null,bi=null,On=0,nc=0,ac=null,e0=null,zl=0,ic=null;function kt(){return(ze&2)!==0&&we!==0?we&-we:_.T!==null?cc():gd()}function t0(){if(Nt===0)if((we&536870912)===0||Ce){var e=fr;fr<<=1,(fr&3932160)===0&&(fr=262144),Nt=e}else Nt=536870912;return e=At.current,e!==null&&(e.flags|=32),Nt}function Et(e,t,n){(e===Le&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(xi(e,0),ia(e,we,Nt,!1)),Fi(e,n),((ze&2)===0||e!==Le)&&(e===Le&&((ze&2)===0&&(La|=n),Ke===4&&ia(e,we,Nt,!1)),un(e))}function n0(e,t,n){if((ze&6)!==0)throw Error(u(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ji(e,t),r=i?b2(e,t):rc(e,t,!0),s=i;do{if(r===0){vi&&!i&&ia(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!v2(n)){r=rc(e,t,!1),s=!1;continue}if(r===2){if(s=t,e.errorRecoveryDisabledLanes&s)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var v=e;r=Ml;var j=v.current.memoizedState.isDehydrated;if(j&&(xi(v,p).flags|=256),p=rc(v,p,!1),p!==2){if(Is&&!j){v.errorRecoveryDisabledLanes|=s,La|=s,r=4;break e}s=wt,wt=r,s!==null&&(wt===null?wt=s:wt.push.apply(wt,s))}r=p}if(s=!1,r!==2)continue}}if(r===1){xi(e,0),ia(e,t,0,!0);break}e:{switch(i=e,s=r,s){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:ia(i,t,Nt,!ea);break e;case 2:wt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(r=to+300-Tt(),10<r)){if(ia(i,t,Nt,!ea),pr(i,0,!0)!==0)break e;On=t,i.timeoutHandle=D0(a0.bind(null,i,n,wt,ao,tc,t,Nt,La,yi,ea,s,"Throttled",-0,0),r);break e}a0(i,n,wt,ao,tc,t,Nt,La,yi,ea,s,null,-0,0)}}break}while(!0);un(e)}function a0(e,t,n,i,r,s,p,v,j,q,P,te,X,Q){if(e.timeoutHandle=-1,te=t.subtreeFlags,te&8192||(te&16785408)===16785408){te={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:mn},Jh(t,s,te);var se=(s&62914560)===s?to-Tt():(s&4194048)===s?Ih-Tt():0;if(se=tb(te,se),se!==null){On=s,e.cancelPendingCommit=se(f0.bind(null,e,t,s,n,i,r,p,v,j,P,te,null,X,Q)),ia(e,s,p,!q);return}}f0(e,t,s,n,i,r,p,v,j)}function v2(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!zt(s(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ia(e,t,n,i){t&=~ec,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var r=t;0<r;){var s=31-Mt(r),p=1<<s;i[s]=-1,r&=~p}n!==0&&pd(e,n,t)}function io(){return(ze&6)===0?(Ol(0),!1):!0}function lc(){if(xe!==null){if(Ae===0)var e=xe.return;else e=xe,bn=Ra=null,Ss(e),ci=null,dl=0,e=xe;for(;e!==null;)Nh(e.alternate,e),e=e.return;xe=null}}function xi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,$2(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),On=0,lc(),Le=e,xe=n=vn(e.current,null),we=t,Ae=0,Dt=null,ea=!1,vi=Ji(e,t),Is=!1,yi=Nt=ec=La=ta=Ke=0,wt=Ml=null,tc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-Mt(i),s=1<<r;t|=e[r],i&=~s}return zn=t,jr(),n}function i0(e,t){ge=null,_.H=xl,t===si||t===Dr?(t=xp(),Ae=3):t===ss?(t=xp(),Ae=4):Ae=t===$s?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Dt=t,xe===null&&(Ke=1,Qr(e,Yt(t,e.current)))}function l0(){var e=At.current;return e===null?!0:(we&4194048)===we?Kt===null:(we&62914560)===we||(we&536870912)!==0?e===Kt:!1}function r0(){var e=_.H;return _.H=xl,e===null?xl:e}function o0(){var e=_.A;return _.A=m2,e}function lo(){Ke=4,ea||(we&4194048)!==we&&At.current!==null||(vi=!0),(ta&134217727)===0&&(La&134217727)===0||Le===null||ia(Le,we,Nt,!1)}function rc(e,t,n){var i=ze;ze|=2;var r=r0(),s=o0();(Le!==e||we!==t)&&(ao=null,xi(e,t)),t=!1;var p=Ke;e:do try{if(Ae!==0&&xe!==null){var v=xe,j=Dt;switch(Ae){case 8:lc(),p=6;break e;case 3:case 2:case 9:case 6:At.current===null&&(t=!0);var q=Ae;if(Ae=0,Dt=null,Si(e,v,j,q),n&&vi){p=0;break e}break;default:q=Ae,Ae=0,Dt=null,Si(e,v,j,q)}}y2(),p=Ke;break}catch(P){i0(e,P)}while(!0);return t&&e.shellSuspendCounter++,bn=Ra=null,ze=i,_.H=r,_.A=s,xe===null&&(Le=null,we=0,jr()),p}function y2(){for(;xe!==null;)u0(xe)}function b2(e,t){var n=ze;ze|=2;var i=r0(),r=o0();Le!==e||we!==t?(ao=null,no=Tt()+500,xi(e,t)):vi=Ji(e,t);e:do try{if(Ae!==0&&xe!==null){t=xe;var s=Dt;t:switch(Ae){case 1:Ae=0,Dt=null,Si(e,t,s,1);break;case 2:case 9:if(yp(s)){Ae=0,Dt=null,s0(t);break}t=function(){Ae!==2&&Ae!==9||Le!==e||(Ae=7),un(e)},s.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:yp(s)?(Ae=0,Dt=null,s0(t)):(Ae=0,Dt=null,Si(e,t,s,7));break;case 5:var p=null;switch(xe.tag){case 26:p=xe.memoizedState;case 5:case 27:var v=xe;if(p?Z0(p):v.stateNode.complete){Ae=0,Dt=null;var j=v.sibling;if(j!==null)xe=j;else{var q=v.return;q!==null?(xe=q,ro(q)):xe=null}break t}}Ae=0,Dt=null,Si(e,t,s,5);break;case 6:Ae=0,Dt=null,Si(e,t,s,6);break;case 8:lc(),Ke=6;break e;default:throw Error(u(462))}}x2();break}catch(P){i0(e,P)}while(!0);return bn=Ra=null,_.H=i,_.A=r,ze=n,xe!==null?0:(Le=null,we=0,jr(),Ke)}function x2(){for(;xe!==null&&!Gv();)u0(xe)}function u0(e){var t=_h(e.alternate,e,zn);e.memoizedProps=e.pendingProps,t===null?ro(e):xe=t}function s0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Th(n,t,t.pendingProps,t.type,void 0,we);break;case 11:t=Th(n,t,t.pendingProps,t.type.render,t.ref,we);break;case 5:Ss(t);default:Nh(n,t),t=xe=op(t,zn),t=_h(n,t,zn)}e.memoizedProps=e.pendingProps,t===null?ro(e):xe=t}function Si(e,t,n,i){bn=Ra=null,Ss(t),ci=null,dl=0;var r=t.return;try{if(u2(e,r,t,n,we)){Ke=1,Qr(e,Yt(n,e.current)),xe=null;return}}catch(s){if(r!==null)throw xe=r,s;Ke=1,Qr(e,Yt(n,e.current)),xe=null;return}t.flags&32768?(Ce||i===1?e=!0:vi||(we&536870912)!==0?e=!1:(ea=e=!0,(i===2||i===9||i===3||i===6)&&(i=At.current,i!==null&&i.tag===13&&(i.flags|=16384))),c0(t,e)):ro(t)}function ro(e){var t=e;do{if((t.flags&32768)!==0){c0(t,ea);return}e=t.return;var n=f2(t.alternate,t,zn);if(n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);Ke===0&&(Ke=5)}function c0(e,t){do{var n=d2(e.alternate,e);if(n!==null){n.flags&=32767,xe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){xe=e;return}xe=e=n}while(e!==null);Ke=6,xe=null}function f0(e,t,n,i,r,s,p,v,j){e.cancelPendingCommit=null;do oo();while(et!==0);if((ze&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(s=t.lanes|t.childLanes,s|=Zu,Iv(e,n,s,p,v,j),e===Le&&(xe=Le=null,we=0),bi=t,aa=e,On=n,nc=s,ac=r,e0=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,C2(sr,function(){return g0(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=_.T,_.T=null,r=Y.p,Y.p=2,p=ze,ze|=4;try{p2(e,t,n)}finally{ze=p,Y.p=r,_.T=i}}et=1,d0(),p0(),h0()}}function d0(){if(et===1){et=0;var e=aa,t=bi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null;var i=Y.p;Y.p=2;var r=ze;ze|=4;try{Kh(t,e);var s=yc,p=Pd(e.containerInfo),v=s.focusedElem,j=s.selectionRange;if(p!==v&&v&&v.ownerDocument&&Wd(v.ownerDocument.documentElement,v)){if(j!==null&&Gu(v)){var q=j.start,P=j.end;if(P===void 0&&(P=q),"selectionStart"in v)v.selectionStart=q,v.selectionEnd=Math.min(P,v.value.length);else{var te=v.ownerDocument||document,X=te&&te.defaultView||window;if(X.getSelection){var Q=X.getSelection(),se=v.textContent.length,pe=Math.min(j.start,se),ke=j.end===void 0?pe:Math.min(j.end,se);!Q.extend&&pe>ke&&(p=ke,ke=pe,pe=p);var k=Fd(v,pe),z=Fd(v,ke);if(k&&z&&(Q.rangeCount!==1||Q.anchorNode!==k.node||Q.anchorOffset!==k.offset||Q.focusNode!==z.node||Q.focusOffset!==z.offset)){var H=te.createRange();H.setStart(k.node,k.offset),Q.removeAllRanges(),pe>ke?(Q.addRange(H),Q.extend(z.node,z.offset)):(H.setEnd(z.node,z.offset),Q.addRange(H))}}}}for(te=[],Q=v;Q=Q.parentNode;)Q.nodeType===1&&te.push({element:Q,left:Q.scrollLeft,top:Q.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<te.length;v++){var I=te[v];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}xo=!!vc,yc=vc=null}finally{ze=r,Y.p=i,_.T=n}}e.current=t,et=2}}function p0(){if(et===2){et=0;var e=aa,t=bi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=_.T,_.T=null;var i=Y.p;Y.p=2;var r=ze;ze|=4;try{qh(e,t.alternate,t)}finally{ze=r,Y.p=i,_.T=n}}et=3}}function h0(){if(et===4||et===3){et=0,Xv();var e=aa,t=bi,n=On,i=e0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?et=5:(et=0,bi=aa=null,m0(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(na=null),Cu(n),t=t.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Zi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=_.T,r=Y.p,Y.p=2,_.T=null;try{for(var s=e.onRecoverableError,p=0;p<i.length;p++){var v=i[p];s(v.value,{componentStack:v.stack})}}finally{_.T=t,Y.p=r}}(On&3)!==0&&oo(),un(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===ic?zl++:(zl=0,ic=e):zl=0,Ol(0)}}function m0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,cl(t)))}function oo(){return d0(),p0(),h0(),g0()}function g0(){if(et!==5)return!1;var e=aa,t=nc;nc=0;var n=Cu(On),i=_.T,r=Y.p;try{Y.p=32>n?32:n,_.T=null,n=ac,ac=null;var s=aa,p=On;if(et=0,bi=aa=null,On=0,(ze&6)!==0)throw Error(u(331));var v=ze;if(ze|=4,Wh(s.current),Zh(s,s.current,p,n),ze=v,Ol(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Zi,s)}catch{}return!0}finally{Y.p=r,_.T=i,m0(e,t)}}function v0(e,t,n){t=Yt(n,t),t=Ls(e.stateNode,t,2),e=Fn(e,t,2),e!==null&&(Fi(e,2),un(e))}function _e(e,t,n){if(e.tag===3)v0(e,e,n);else for(;t!==null;){if(t.tag===3){v0(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(na===null||!na.has(i))){e=Yt(n,e),n=yh(2),i=Fn(t,n,2),i!==null&&(bh(n,i,t,e),Fi(i,2),un(i));break}}t=t.return}}function oc(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new g2;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(Is=!0,r.add(n),e=S2.bind(null,e,t,n),t.then(e,e))}function S2(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Le===e&&(we&n)===n&&(Ke===4||Ke===3&&(we&62914560)===we&&300>Tt()-to?(ze&2)===0&&xi(e,0):ec|=n,yi===we&&(yi=0)),un(e)}function y0(e,t){t===0&&(t=dd()),e=Ca(e,t),e!==null&&(Fi(e,t),un(e))}function w2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),y0(e,n)}function E2(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(u(314))}i!==null&&i.delete(t),y0(e,n)}function C2(e,t){return xu(e,t)}var uo=null,wi=null,uc=!1,so=!1,sc=!1,la=0;function un(e){e!==wi&&e.next===null&&(wi===null?uo=wi=e:wi=wi.next=e),so=!0,uc||(uc=!0,T2())}function Ol(e,t){if(!sc&&so){sc=!0;do for(var n=!1,i=uo;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var s=0;else{var p=i.suspendedLanes,v=i.pingedLanes;s=(1<<31-Mt(42|e)+1)-1,s&=r&~(p&~v),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,w0(i,s))}else s=we,s=pr(i,i===Le?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||Ji(i,s)||(n=!0,w0(i,s));i=i.next}while(n);sc=!1}}function j2(){b0()}function b0(){so=uc=!1;var e=0;la!==0&&L2()&&(e=la);for(var t=Tt(),n=null,i=uo;i!==null;){var r=i.next,s=x0(i,t);s===0?(i.next=null,n===null?uo=r:n.next=r,r===null&&(wi=n)):(n=i,(e!==0||(s&3)!==0)&&(so=!0)),i=r}et!==0&&et!==5||Ol(e),la!==0&&(la=0)}function x0(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var p=31-Mt(s),v=1<<p,j=r[p];j===-1?((v&n)===0||(v&i)!==0)&&(r[p]=Pv(v,t)):j<=t&&(e.expiredLanes|=v),s&=~v}if(t=Le,n=we,n=pr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Su(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ji(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Su(i),Cu(n)){case 2:case 8:n=cd;break;case 32:n=sr;break;case 268435456:n=fd;break;default:n=sr}return i=S0.bind(null,e),n=xu(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Su(i),e.callbackPriority=2,e.callbackNode=null,2}function S0(e,t){if(et!==0&&et!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(oo()&&e.callbackNode!==n)return null;var i=we;return i=pr(e,e===Le?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(n0(e,i,t),x0(e,Tt()),e.callbackNode!=null&&e.callbackNode===n?S0.bind(null,e):null)}function w0(e,t){if(oo())return null;n0(e,t,!0)}function T2(){B2(function(){(ze&6)!==0?xu(sd,j2):b0()})}function cc(){if(la===0){var e=oi;e===0&&(e=cr,cr<<=1,(cr&261888)===0&&(cr=256)),la=e}return la}function E0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vr(""+e)}function C0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function R2(e,t,n,i,r){if(t==="submit"&&n&&n.stateNode===r){var s=E0((r[vt]||null).action),p=i.submitter;p&&(t=(t=p[vt]||null)?E0(t.formAction):p.getAttribute("formAction"),t!==null&&(s=t,p=null));var v=new Sr("action","action",null,i,r);e.push({event:v,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(la!==0){var j=p?C0(r,p):new FormData(r);Os(n,{pending:!0,data:j,method:r.method,action:s},null,j)}}else typeof s=="function"&&(v.preventDefault(),j=p?C0(r,p):new FormData(r),Os(n,{pending:!0,data:j,method:r.method,action:s},s,j))},currentTarget:r}]})}}for(var fc=0;fc<Qu.length;fc++){var dc=Qu[fc],M2=dc.toLowerCase(),z2=dc[0].toUpperCase()+dc.slice(1);Pt(M2,"on"+z2)}Pt(tp,"onAnimationEnd"),Pt(np,"onAnimationIteration"),Pt(ap,"onAnimationStart"),Pt("dblclick","onDoubleClick"),Pt("focusin","onFocus"),Pt("focusout","onBlur"),Pt(Vy,"onTransitionRun"),Pt(Ky,"onTransitionStart"),Pt(Qy,"onTransitionCancel"),Pt(ip,"onTransitionEnd"),Qa("onMouseEnter",["mouseout","mouseover"]),Qa("onMouseLeave",["mouseout","mouseover"]),Qa("onPointerEnter",["pointerout","pointerover"]),Qa("onPointerLeave",["pointerout","pointerover"]),xa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xa("onBeforeInput",["compositionend","keypress","textInput","paste"]),xa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Al));function j0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var p=i.length-1;0<=p;p--){var v=i[p],j=v.instance,q=v.currentTarget;if(v=v.listener,j!==s&&r.isPropagationStopped())break e;s=v,r.currentTarget=q;try{s(r)}catch(P){Cr(P)}r.currentTarget=null,s=j}else for(p=0;p<i.length;p++){if(v=i[p],j=v.instance,q=v.currentTarget,v=v.listener,j!==s&&r.isPropagationStopped())break e;s=v,r.currentTarget=q;try{s(r)}catch(P){Cr(P)}r.currentTarget=null,s=j}}}}function Se(e,t){var n=t[ju];n===void 0&&(n=t[ju]=new Set);var i=e+"__bubble";n.has(i)||(T0(t,e,2,!1),n.add(i))}function pc(e,t,n){var i=0;t&&(i|=4),T0(n,e,i,t)}var co="_reactListening"+Math.random().toString(36).slice(2);function hc(e){if(!e[co]){e[co]=!0,bd.forEach(function(n){n!=="selectionchange"&&(O2.has(n)||pc(n,!1,e),pc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[co]||(t[co]=!0,pc("selectionchange",!1,t))}}function T0(e,t,n,i){switch(t1(t)){case 2:var r=ib;break;case 8:r=lb;break;default:r=zc}n=r.bind(null,t,n,e),r=void 0,!Nu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function mc(e,t,n,i,r){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var p=i.tag;if(p===3||p===4){var v=i.stateNode.containerInfo;if(v===r)break;if(p===4)for(p=i.return;p!==null;){var j=p.tag;if((j===3||j===4)&&p.stateNode.containerInfo===r)return;p=p.return}for(;v!==null;){if(p=Xa(v),p===null)return;if(j=p.tag,j===5||j===6||j===26||j===27){i=s=p;continue e}v=v.parentNode}}i=i.return}Ad(function(){var q=s,P=_u(n),te=[];e:{var X=lp.get(e);if(X!==void 0){var Q=Sr,se=e;switch(e){case"keypress":if(br(n)===0)break e;case"keydown":case"keyup":Q=Ey;break;case"focusin":se="focus",Q=Bu;break;case"focusout":se="blur",Q=Bu;break;case"beforeblur":case"afterblur":Q=Bu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=Nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=fy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=Ty;break;case tp:case np:case ap:Q=hy;break;case ip:Q=My;break;case"scroll":case"scrollend":Q=sy;break;case"wheel":Q=Oy;break;case"copy":case"cut":case"paste":Q=gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=Ld;break;case"toggle":case"beforetoggle":Q=_y}var pe=(t&4)!==0,ke=!pe&&(e==="scroll"||e==="scrollend"),k=pe?X!==null?X+"Capture":null:X;pe=[];for(var z=q,H;z!==null;){var I=z;if(H=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||H===null||k===null||(I=Ii(z,k),I!=null&&pe.push(_l(z,I,H))),ke)break;z=z.return}0<pe.length&&(X=new Q(X,se,null,n,P),te.push({event:X,listeners:pe}))}}if((t&7)===0){e:{if(X=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",X&&n!==Au&&(se=n.relatedTarget||n.fromElement)&&(Xa(se)||se[Ga]))break e;if((Q||X)&&(X=P.window===P?P:(X=P.ownerDocument)?X.defaultView||X.parentWindow:window,Q?(se=n.relatedTarget||n.toElement,Q=q,se=se?Xa(se):null,se!==null&&(ke=f(se),pe=se.tag,se!==ke||pe!==5&&pe!==27&&pe!==6)&&(se=null)):(Q=null,se=q),Q!==se)){if(pe=Nd,I="onMouseLeave",k="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(pe=Ld,I="onPointerLeave",k="onPointerEnter",z="pointer"),ke=Q==null?X:Pi(Q),H=se==null?X:Pi(se),X=new pe(I,z+"leave",Q,n,P),X.target=ke,X.relatedTarget=H,I=null,Xa(P)===q&&(pe=new pe(k,z+"enter",se,n,P),pe.target=H,pe.relatedTarget=ke,I=pe),ke=I,Q&&se)t:{for(pe=A2,k=Q,z=se,H=0,I=k;I;I=pe(I))H++;I=0;for(var de=z;de;de=pe(de))I++;for(;0<H-I;)k=pe(k),H--;for(;0<I-H;)z=pe(z),I--;for(;H--;){if(k===z||z!==null&&k===z.alternate){pe=k;break t}k=pe(k),z=pe(z)}pe=null}else pe=null;Q!==null&&R0(te,X,Q,pe,!1),se!==null&&ke!==null&&R0(te,ke,se,pe,!0)}}e:{if(X=q?Pi(q):window,Q=X.nodeName&&X.nodeName.toLowerCase(),Q==="select"||Q==="input"&&X.type==="file")var Re=Xd;else if(Yd(X))if(Vd)Re=Yy;else{Re=Hy;var ce=Uy}else Q=X.nodeName,!Q||Q.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?q&&Ou(q.elementType)&&(Re=Xd):Re=qy;if(Re&&(Re=Re(e,q))){Gd(te,Re,n,P);break e}ce&&ce(e,X,q),e==="focusout"&&q&&X.type==="number"&&q.memoizedProps.value!=null&&zu(X,"number",X.value)}switch(ce=q?Pi(q):window,e){case"focusin":(Yd(ce)||ce.contentEditable==="true")&&(Ia=ce,Xu=q,ol=null);break;case"focusout":ol=Xu=Ia=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,Id(te,n,P);break;case"selectionchange":if(Xy)break;case"keydown":case"keyup":Id(te,n,P)}var ve;if(Hu)e:{switch(e){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Pa?Hd(e,n)&&(Ee="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ee="onCompositionStart");Ee&&($d&&n.locale!=="ko"&&(Pa||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Pa&&(ve=_d()):(Gn=P,ku="value"in Gn?Gn.value:Gn.textContent,Pa=!0)),ce=fo(q,Ee),0<ce.length&&(Ee=new kd(Ee,e,null,n,P),te.push({event:Ee,listeners:ce}),ve?Ee.data=ve:(ve=qd(n),ve!==null&&(Ee.data=ve)))),(ve=Ny?ky(e,n):Ly(e,n))&&(Ee=fo(q,"onBeforeInput"),0<Ee.length&&(ce=new kd("onBeforeInput","beforeinput",null,n,P),te.push({event:ce,listeners:Ee}),ce.data=ve)),R2(te,e,q,n,P)}j0(te,t)})}function _l(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fo(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=Ii(e,n),r!=null&&i.unshift(_l(e,r,s)),r=Ii(e,t),r!=null&&i.push(_l(e,r,s))),e.tag===3)return i;e=e.return}return[]}function A2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function R0(e,t,n,i,r){for(var s=t._reactName,p=[];n!==null&&n!==i;){var v=n,j=v.alternate,q=v.stateNode;if(v=v.tag,j!==null&&j===i)break;v!==5&&v!==26&&v!==27||q===null||(j=q,r?(q=Ii(n,s),q!=null&&p.unshift(_l(n,q,j))):r||(q=Ii(n,s),q!=null&&p.push(_l(n,q,j)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var _2=/\r\n?/g,D2=/\u0000|\uFFFD/g;function M0(e){return(typeof e=="string"?e:""+e).replace(_2,`
`).replace(D2,"")}function z0(e,t){return t=M0(t),M0(e)===t}function Ne(e,t,n,i,r,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ja(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ja(e,""+i);break;case"className":mr(e,"class",i);break;case"tabIndex":mr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":mr(e,n,i);break;case"style":zd(e,i,s);break;case"data":if(t!=="object"){mr(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=vr(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&Ne(e,t,"name",r.name,r,null),Ne(e,t,"formEncType",r.formEncType,r,null),Ne(e,t,"formMethod",r.formMethod,r,null),Ne(e,t,"formTarget",r.formTarget,r,null)):(Ne(e,t,"encType",r.encType,r,null),Ne(e,t,"method",r.method,r,null),Ne(e,t,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=vr(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=mn);break;case"onScroll":i!=null&&Se("scroll",e);break;case"onScrollEnd":i!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=vr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Se("beforetoggle",e),Se("toggle",e),hr(e,"popover",i);break;case"xlinkActuate":hn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":hn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":hn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":hn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":hn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":hn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":hn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":hn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":hn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":hr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=oy.get(n)||n,hr(e,n,i))}}function gc(e,t,n,i,r,s){switch(n){case"style":zd(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Ja(e,i):(typeof i=="number"||typeof i=="bigint")&&Ja(e,""+i);break;case"onScroll":i!=null&&Se("scroll",e);break;case"onScrollEnd":i!=null&&Se("scrollend",e);break;case"onClick":i!=null&&(e.onclick=mn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),s=e[vt]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,r),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,r);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):hr(e,n,i)}}}function ct(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var i=!1,r=!1,s;for(s in n)if(n.hasOwnProperty(s)){var p=n[s];if(p!=null)switch(s){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ne(e,t,s,p,n,null)}}r&&Ne(e,t,"srcSet",n.srcSet,n,null),i&&Ne(e,t,"src",n.src,n,null);return;case"input":Se("invalid",e);var v=s=p=r=null,j=null,q=null;for(i in n)if(n.hasOwnProperty(i)){var P=n[i];if(P!=null)switch(i){case"name":r=P;break;case"type":p=P;break;case"checked":j=P;break;case"defaultChecked":q=P;break;case"value":s=P;break;case"defaultValue":v=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(u(137,t));break;default:Ne(e,t,i,P,n,null)}}jd(e,s,v,j,q,p,r,!1);return;case"select":Se("invalid",e),i=p=s=null;for(r in n)if(n.hasOwnProperty(r)&&(v=n[r],v!=null))switch(r){case"value":s=v;break;case"defaultValue":p=v;break;case"multiple":i=v;default:Ne(e,t,r,v,n,null)}t=s,n=p,e.multiple=!!i,t!=null?Za(e,!!i,t,!1):n!=null&&Za(e,!!i,n,!0);return;case"textarea":Se("invalid",e),s=r=i=null;for(p in n)if(n.hasOwnProperty(p)&&(v=n[p],v!=null))switch(p){case"value":i=v;break;case"defaultValue":r=v;break;case"children":s=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(u(91));break;default:Ne(e,t,p,v,n,null)}Rd(e,i,r,s);return;case"option":for(j in n)if(n.hasOwnProperty(j)&&(i=n[j],i!=null))switch(j){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ne(e,t,j,i,n,null)}return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(i=0;i<Al.length;i++)Se(Al[i],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in n)if(n.hasOwnProperty(q)&&(i=n[q],i!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ne(e,t,q,i,n,null)}return;default:if(Ou(t)){for(P in n)n.hasOwnProperty(P)&&(i=n[P],i!==void 0&&gc(e,t,P,i,n,void 0));return}}for(v in n)n.hasOwnProperty(v)&&(i=n[v],i!=null&&Ne(e,t,v,i,n,null))}function N2(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,p=null,v=null,j=null,q=null,P=null;for(Q in n){var te=n[Q];if(n.hasOwnProperty(Q)&&te!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":j=te;default:i.hasOwnProperty(Q)||Ne(e,t,Q,null,i,te)}}for(var X in i){var Q=i[X];if(te=n[X],i.hasOwnProperty(X)&&(Q!=null||te!=null))switch(X){case"type":s=Q;break;case"name":r=Q;break;case"checked":q=Q;break;case"defaultChecked":P=Q;break;case"value":p=Q;break;case"defaultValue":v=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(u(137,t));break;default:Q!==te&&Ne(e,t,X,Q,i,te)}}Mu(e,p,v,j,q,P,s,r);return;case"select":Q=p=v=X=null;for(s in n)if(j=n[s],n.hasOwnProperty(s)&&j!=null)switch(s){case"value":break;case"multiple":Q=j;default:i.hasOwnProperty(s)||Ne(e,t,s,null,i,j)}for(r in i)if(s=i[r],j=n[r],i.hasOwnProperty(r)&&(s!=null||j!=null))switch(r){case"value":X=s;break;case"defaultValue":v=s;break;case"multiple":p=s;default:s!==j&&Ne(e,t,r,s,i,j)}t=v,n=p,i=Q,X!=null?Za(e,!!n,X,!1):!!i!=!!n&&(t!=null?Za(e,!!n,t,!0):Za(e,!!n,n?[]:"",!1));return;case"textarea":Q=X=null;for(v in n)if(r=n[v],n.hasOwnProperty(v)&&r!=null&&!i.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Ne(e,t,v,null,i,r)}for(p in i)if(r=i[p],s=n[p],i.hasOwnProperty(p)&&(r!=null||s!=null))switch(p){case"value":X=r;break;case"defaultValue":Q=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(u(91));break;default:r!==s&&Ne(e,t,p,r,i,s)}Td(e,X,Q);return;case"option":for(var se in n)if(X=n[se],n.hasOwnProperty(se)&&X!=null&&!i.hasOwnProperty(se))switch(se){case"selected":e.selected=!1;break;default:Ne(e,t,se,null,i,X)}for(j in i)if(X=i[j],Q=n[j],i.hasOwnProperty(j)&&X!==Q&&(X!=null||Q!=null))switch(j){case"selected":e.selected=X&&typeof X!="function"&&typeof X!="symbol";break;default:Ne(e,t,j,X,i,Q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in n)X=n[pe],n.hasOwnProperty(pe)&&X!=null&&!i.hasOwnProperty(pe)&&Ne(e,t,pe,null,i,X);for(q in i)if(X=i[q],Q=n[q],i.hasOwnProperty(q)&&X!==Q&&(X!=null||Q!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(u(137,t));break;default:Ne(e,t,q,X,i,Q)}return;default:if(Ou(t)){for(var ke in n)X=n[ke],n.hasOwnProperty(ke)&&X!==void 0&&!i.hasOwnProperty(ke)&&gc(e,t,ke,void 0,i,X);for(P in i)X=i[P],Q=n[P],!i.hasOwnProperty(P)||X===Q||X===void 0&&Q===void 0||gc(e,t,P,X,i,Q);return}}for(var k in n)X=n[k],n.hasOwnProperty(k)&&X!=null&&!i.hasOwnProperty(k)&&Ne(e,t,k,null,i,X);for(te in i)X=i[te],Q=n[te],!i.hasOwnProperty(te)||X===Q||X==null&&Q==null||Ne(e,t,te,X,i,Q)}function O0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function k2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var r=n[i],s=r.transferSize,p=r.initiatorType,v=r.duration;if(s&&v&&O0(p)){for(p=0,v=r.responseEnd,i+=1;i<n.length;i++){var j=n[i],q=j.startTime;if(q>v)break;var P=j.transferSize,te=j.initiatorType;P&&O0(te)&&(j=j.responseEnd,p+=P*(j<v?1:(v-q)/(j-q)))}if(--i,t+=8*(s+p)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var vc=null,yc=null;function po(e){return e.nodeType===9?e:e.ownerDocument}function A0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function bc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xc=null;function L2(){var e=window.event;return e&&e.type==="popstate"?e===xc?!1:(xc=e,!0):(xc=null,!1)}var D0=typeof setTimeout=="function"?setTimeout:void 0,$2=typeof clearTimeout=="function"?clearTimeout:void 0,N0=typeof Promise=="function"?Promise:void 0,B2=typeof queueMicrotask=="function"?queueMicrotask:typeof N0<"u"?function(e){return N0.resolve(null).then(e).catch(U2)}:D0;function U2(e){setTimeout(function(){throw e})}function ra(e){return e==="head"}function k0(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(r),Ti(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Dl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Dl(n);for(var s=n.firstChild;s;){var p=s.nextSibling,v=s.nodeName;s[Wi]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=p}}else n==="body"&&Dl(e.ownerDocument.body);n=r}while(n);Ti(t)}function L0(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Sc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Sc(n),Tu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function H2(e,t,n,i){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Wi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Qt(e.nextSibling),e===null)break}return null}function q2(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Qt(e.nextSibling),e===null))return null;return e}function $0(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Qt(e.nextSibling),e===null))return null;return e}function wc(e){return e.data==="$?"||e.data==="$~"}function Ec(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Y2(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Cc=null;function B0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Qt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function U0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function H0(e,t,n){switch(t=po(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Dl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Tu(e)}var Zt=new Map,q0=new Set;function ho(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var An=Y.d;Y.d={f:G2,r:X2,D:V2,C:K2,L:Q2,m:Z2,X:F2,S:J2,M:W2};function G2(){var e=An.f(),t=io();return e||t}function X2(e){var t=Va(e);t!==null&&t.tag===5&&t.type==="form"?ih(t):An.r(e)}var Ei=typeof document>"u"?null:document;function Y0(e,t,n){var i=Ei;if(i&&typeof t=="string"&&t){var r=Ht(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),q0.has(r)||(q0.add(r),e={rel:e,crossOrigin:n,href:t},i.querySelector(r)===null&&(t=i.createElement("link"),ct(t,"link",e),tt(t),i.head.appendChild(t)))}}function V2(e){An.D(e),Y0("dns-prefetch",e,null)}function K2(e,t){An.C(e,t),Y0("preconnect",e,t)}function Q2(e,t,n){An.L(e,t,n);var i=Ei;if(i&&e&&t){var r='link[rel="preload"][as="'+Ht(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Ht(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Ht(n.imageSizes)+'"]')):r+='[href="'+Ht(e)+'"]';var s=r;switch(t){case"style":s=Ci(e);break;case"script":s=ji(e)}Zt.has(s)||(e=S({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Zt.set(s,e),i.querySelector(r)!==null||t==="style"&&i.querySelector(Nl(s))||t==="script"&&i.querySelector(kl(s))||(t=i.createElement("link"),ct(t,"link",e),tt(t),i.head.appendChild(t)))}}function Z2(e,t){An.m(e,t);var n=Ei;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Ht(i)+'"][href="'+Ht(e)+'"]',s=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=ji(e)}if(!Zt.has(s)&&(e=S({rel:"modulepreload",href:e},t),Zt.set(s,e),n.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(kl(s)))return}i=n.createElement("link"),ct(i,"link",e),tt(i),n.head.appendChild(i)}}}function J2(e,t,n){An.S(e,t,n);var i=Ei;if(i&&e){var r=Ka(i).hoistableStyles,s=Ci(e);t=t||"default";var p=r.get(s);if(!p){var v={loading:0,preload:null};if(p=i.querySelector(Nl(s)))v.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Zt.get(s))&&jc(e,n);var j=p=i.createElement("link");tt(j),ct(j,"link",e),j._p=new Promise(function(q,P){j.onload=q,j.onerror=P}),j.addEventListener("load",function(){v.loading|=1}),j.addEventListener("error",function(){v.loading|=2}),v.loading|=4,mo(p,t,i)}p={type:"stylesheet",instance:p,count:1,state:v},r.set(s,p)}}}function F2(e,t){An.X(e,t);var n=Ei;if(n&&e){var i=Ka(n).hoistableScripts,r=ji(e),s=i.get(r);s||(s=n.querySelector(kl(r)),s||(e=S({src:e,async:!0},t),(t=Zt.get(r))&&Tc(e,t),s=n.createElement("script"),tt(s),ct(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function W2(e,t){An.M(e,t);var n=Ei;if(n&&e){var i=Ka(n).hoistableScripts,r=ji(e),s=i.get(r);s||(s=n.querySelector(kl(r)),s||(e=S({src:e,async:!0,type:"module"},t),(t=Zt.get(r))&&Tc(e,t),s=n.createElement("script"),tt(s),ct(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function G0(e,t,n,i){var r=(r=he.current)?ho(r):null;if(!r)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ci(n.href),n=Ka(r).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ci(n.href);var s=Ka(r).hoistableStyles,p=s.get(e);if(p||(r=r.ownerDocument||r,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,p),(s=r.querySelector(Nl(e)))&&!s._p&&(p.instance=s,p.state.loading=5),Zt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Zt.set(e,n),s||P2(r,e,n,p.state))),t&&i===null)throw Error(u(528,""));return p}if(t&&i!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ji(n),n=Ka(r).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Ci(e){return'href="'+Ht(e)+'"'}function Nl(e){return'link[rel="stylesheet"]['+e+"]"}function X0(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function P2(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ct(t,"link",n),tt(t),e.head.appendChild(t))}function ji(e){return'[src="'+Ht(e)+'"]'}function kl(e){return"script[async]"+e}function V0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ht(n.href)+'"]');if(i)return t.instance=i,tt(i),i;var r=S({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),tt(i),ct(i,"style",r),mo(i,n.precedence,e),t.instance=i;case"stylesheet":r=Ci(n.href);var s=e.querySelector(Nl(r));if(s)return t.state.loading|=4,t.instance=s,tt(s),s;i=X0(n),(r=Zt.get(r))&&jc(i,r),s=(e.ownerDocument||e).createElement("link"),tt(s);var p=s;return p._p=new Promise(function(v,j){p.onload=v,p.onerror=j}),ct(s,"link",i),t.state.loading|=4,mo(s,n.precedence,e),t.instance=s;case"script":return s=ji(n.src),(r=e.querySelector(kl(s)))?(t.instance=r,tt(r),r):(i=n,(r=Zt.get(s))&&(i=S({},n),Tc(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),tt(r),ct(r,"link",i),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,mo(i,n.precedence,e));return t.instance}function mo(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,s=r,p=0;p<i.length;p++){var v=i[p];if(v.dataset.precedence===t)s=v;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function jc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Tc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var go=null;function K0(e,t,n){if(go===null){var i=new Map,r=go=new Map;r.set(n,i)}else r=go,i=r.get(n),i||(i=new Map,r.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var s=n[r];if(!(s[Wi]||s[rt]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var p=s.getAttribute(t)||"";p=e+p;var v=i.get(p);v?v.push(s):i.set(p,[s])}}return i}function Q0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function I2(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Z0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function eb(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=Ci(i.href),s=t.querySelector(Nl(r));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=vo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,tt(s);return}s=t.ownerDocument||t,i=X0(i),(r=Zt.get(r))&&jc(i,r),s=s.createElement("link"),tt(s);var p=s;p._p=new Promise(function(v,j){p.onload=v,p.onerror=j}),ct(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=vo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Rc=0;function tb(e,t){return e.stylesheets&&e.count===0&&bo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&bo(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Rc===0&&(Rc=62500*k2());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&bo(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Rc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function vo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)bo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yo=null;function bo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yo=new Map,t.forEach(nb,e),yo=null,vo.call(e))}function nb(e,t){if(!(t.state.loading&4)){var n=yo.get(e);if(n)var i=n.get(null);else{n=new Map,yo.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var p=r[s];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),i=p)}i&&n.set(null,i)}r=t.instance,p=r.getAttribute("data-precedence"),s=n.get(p)||i,s===i&&n.set(null,r),n.set(p,r),this.count++,i=vo.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Ll={$$typeof:O,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function ab(e,t,n,i,r,s,p,v,j){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wu(0),this.hiddenUpdates=wu(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function J0(e,t,n,i,r,s,p,v,j,q,P,te){return e=new ab(e,t,n,p,j,q,P,te,v),t=1,s===!0&&(t|=24),s=Ot(3,null,null,t),e.current=s,s.stateNode=e,t=rs(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},cs(s),e}function F0(e){return e?(e=ni,e):ni}function W0(e,t,n,i,r,s){r=F0(r),i.context===null?i.context=r:i.pendingContext=r,i=Jn(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Fn(e,i,t),n!==null&&(Et(n,e,t),hl(n,e,t))}function P0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Mc(e,t){P0(e,t),(e=e.alternate)&&P0(e,t)}function I0(e){if(e.tag===13||e.tag===31){var t=Ca(e,67108864);t!==null&&Et(t,e,67108864),Mc(e,67108864)}}function e1(e){if(e.tag===13||e.tag===31){var t=kt();t=Eu(t);var n=Ca(e,t);n!==null&&Et(n,e,t),Mc(e,t)}}var xo=!0;function ib(e,t,n,i){var r=_.T;_.T=null;var s=Y.p;try{Y.p=2,zc(e,t,n,i)}finally{Y.p=s,_.T=r}}function lb(e,t,n,i){var r=_.T;_.T=null;var s=Y.p;try{Y.p=8,zc(e,t,n,i)}finally{Y.p=s,_.T=r}}function zc(e,t,n,i){if(xo){var r=Oc(i);if(r===null)mc(e,t,i,So,n),n1(e,i);else if(ob(r,e,t,n,i))i.stopPropagation();else if(n1(e,i),t&4&&-1<rb.indexOf(e)){for(;r!==null;){var s=Va(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var p=ba(s.pendingLanes);if(p!==0){var v=s;for(v.pendingLanes|=2,v.entangledLanes|=2;p;){var j=1<<31-Mt(p);v.entanglements[1]|=j,p&=~j}un(s),(ze&6)===0&&(no=Tt()+500,Ol(0))}}break;case 31:case 13:v=Ca(s,2),v!==null&&Et(v,s,2),io(),Mc(s,2)}if(s=Oc(i),s===null&&mc(e,t,i,So,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else mc(e,t,i,null,n)}}function Oc(e){return e=_u(e),Ac(e)}var So=null;function Ac(e){if(So=null,e=Xa(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return So=e,null}function t1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vv()){case sd:return 2;case cd:return 8;case sr:case Kv:return 32;case fd:return 268435456;default:return 32}default:return 32}}var _c=!1,oa=null,ua=null,sa=null,$l=new Map,Bl=new Map,ca=[],rb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function n1(e,t){switch(e){case"focusin":case"focusout":oa=null;break;case"dragenter":case"dragleave":ua=null;break;case"mouseover":case"mouseout":sa=null;break;case"pointerover":case"pointerout":$l.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bl.delete(t.pointerId)}}function Ul(e,t,n,i,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},t!==null&&(t=Va(t),t!==null&&I0(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function ob(e,t,n,i,r){switch(t){case"focusin":return oa=Ul(oa,e,t,n,i,r),!0;case"dragenter":return ua=Ul(ua,e,t,n,i,r),!0;case"mouseover":return sa=Ul(sa,e,t,n,i,r),!0;case"pointerover":var s=r.pointerId;return $l.set(s,Ul($l.get(s)||null,e,t,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Bl.set(s,Ul(Bl.get(s)||null,e,t,n,i,r)),!0}return!1}function a1(e){var t=Xa(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,vd(e.priority,function(){e1(n)});return}}else if(t===31){if(t=y(n),t!==null){e.blockedOn=t,vd(e.priority,function(){e1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Oc(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Au=i,n.target.dispatchEvent(i),Au=null}else return t=Va(n),t!==null&&I0(t),e.blockedOn=n,!1;t.shift()}return!0}function i1(e,t,n){wo(e)&&n.delete(t)}function ub(){_c=!1,oa!==null&&wo(oa)&&(oa=null),ua!==null&&wo(ua)&&(ua=null),sa!==null&&wo(sa)&&(sa=null),$l.forEach(i1),Bl.forEach(i1)}function Eo(e,t){e.blockedOn===t&&(e.blockedOn=null,_c||(_c=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,ub)))}var Co=null;function l1(e){Co!==e&&(Co=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Co===e&&(Co=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],r=e[t+2];if(typeof i!="function"){if(Ac(i||n)===null)continue;break}var s=Va(n);s!==null&&(e.splice(t,3),t-=3,Os(s,{pending:!0,data:r,method:n.method,action:i},i,r))}}))}function Ti(e){function t(j){return Eo(j,e)}oa!==null&&Eo(oa,e),ua!==null&&Eo(ua,e),sa!==null&&Eo(sa,e),$l.forEach(t),Bl.forEach(t);for(var n=0;n<ca.length;n++){var i=ca[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ca.length&&(n=ca[0],n.blockedOn===null);)a1(n),n.blockedOn===null&&ca.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var r=n[i],s=n[i+1],p=r[vt]||null;if(typeof s=="function")p||l1(n);else if(p){var v=null;if(s&&s.hasAttribute("formAction")){if(r=s,p=s[vt]||null)v=p.formAction;else if(Ac(r)!==null)continue}else v=p.action;typeof v=="function"?n[i+1]=v:(n.splice(i,3),i-=3),l1(n)}}}function r1(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(p){return r=p})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Dc(e){this._internalRoot=e}jo.prototype.render=Dc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,i=kt();W0(n,i,e,t,null,null)},jo.prototype.unmount=Dc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;W0(e.current,2,null,e,null,null),io(),t[Ga]=null}};function jo(e){this._internalRoot=e}jo.prototype.unstable_scheduleHydration=function(e){if(e){var t=gd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ca.length&&t!==0&&t<ca[n].priority;n++);ca.splice(n,0,e),n===0&&a1(e)}};var o1=l.version;if(o1!=="19.2.0")throw Error(u(527,o1,"19.2.0"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=m(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var sb={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var To=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!To.isDisabled&&To.supportsFiber)try{Zi=To.inject(sb),Rt=To}catch{}}return ql.createRoot=function(e,t){if(!c(e))throw Error(u(299));var n=!1,i="",r=hh,s=mh,p=gh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError)),t=J0(e,1,!1,null,null,n,i,null,r,s,p,r1),e[Ga]=t.current,hc(e),new Dc(t)},ql.hydrateRoot=function(e,t,n){if(!c(e))throw Error(u(299));var i=!1,r="",s=hh,p=mh,v=gh,j=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.formState!==void 0&&(j=n.formState)),t=J0(e,1,!0,t,n??null,i,r,j,s,p,v,r1),t.context=F0(null),n=t.current,i=kt(),i=Eu(i),r=Jn(i),r.callback=null,Fn(n,r,i),n=i,t.current.lanes=n,Fi(t,n),un(t),e[Ga]=t.current,hc(e),new jo(t)},ql.version="19.2.0",ql}var v1;function yb(){if(v1)return Lc.exports;v1=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Lc.exports=vb(),Lc.exports}var bb=yb();const xb=ir(bb);/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var y1="popstate";function Sb(a={}){function l(u,c){let{pathname:f,search:h,hash:y}=u.location;return bf("",{pathname:f,search:h,hash:y},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function o(u,c){return typeof c=="string"?c:tr(c)}return Eb(l,o,null,a)}function Xe(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function dn(a,l){if(!a){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function wb(){return Math.random().toString(36).substring(2,10)}function b1(a,l){return{usr:a.state,key:a.key,idx:l}}function bf(a,l,o=null,u){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof l=="string"?qi(l):l,state:o,key:l&&l.key||u||wb()}}function tr({pathname:a="/",search:l="",hash:o=""}){return l&&l!=="?"&&(a+=l.charAt(0)==="?"?l:"?"+l),o&&o!=="#"&&(a+=o.charAt(0)==="#"?o:"#"+o),a}function qi(a){let l={};if(a){let o=a.indexOf("#");o>=0&&(l.hash=a.substring(o),a=a.substring(0,o));let u=a.indexOf("?");u>=0&&(l.search=a.substring(u),a=a.substring(0,u)),a&&(l.pathname=a)}return l}function Eb(a,l,o,u={}){let{window:c=document.defaultView,v5Compat:f=!1}=u,h=c.history,y="POP",g=null,m=x();m==null&&(m=0,h.replaceState({...h.state,idx:m},""));function x(){return(h.state||{idx:null}).idx}function S(){y="POP";let B=x(),V=B==null?null:B-m;m=B,g&&g({action:y,location:$.location,delta:V})}function C(B,V){y="PUSH";let A=bf($.location,B,V);m=x()+1;let O=b1(A,m),U=$.createHref(A);try{h.pushState(O,"",U)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;c.location.assign(U)}f&&g&&g({action:y,location:$.location,delta:1})}function D(B,V){y="REPLACE";let A=bf($.location,B,V);m=x();let O=b1(A,m),U=$.createHref(A);h.replaceState(O,"",U),f&&g&&g({action:y,location:$.location,delta:0})}function R(B){return Cb(B)}let $={get action(){return y},get location(){return a(c,h)},listen(B){if(g)throw new Error("A history only accepts one active listener");return c.addEventListener(y1,S),g=B,()=>{c.removeEventListener(y1,S),g=null}},createHref(B){return l(c,B)},createURL:R,encodeLocation(B){let V=R(B);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:C,replace:D,go(B){return h.go(B)}};return $}function Cb(a,l=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Xe(o,"No window.location.(origin|href) available to create URL");let u=typeof a=="string"?a:tr(a);return u=u.replace(/ $/,"%20"),!l&&u.startsWith("//")&&(u=o+u),new URL(u,o)}function eg(a,l,o="/"){return jb(a,l,o,!1)}function jb(a,l,o,u){let c=typeof l=="string"?qi(l):l,f=$n(c.pathname||"/",o);if(f==null)return null;let h=tg(a);Tb(h);let y=null;for(let g=0;y==null&&g<h.length;++g){let m=$b(f);y=kb(h[g],m,u)}return y}function tg(a,l=[],o=[],u="",c=!1){let f=(h,y,g=c,m)=>{let x={relativePath:m===void 0?h.path||"":m,caseSensitive:h.caseSensitive===!0,childrenIndex:y,route:h};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(u)&&g)return;Xe(x.relativePath.startsWith(u),`Absolute route path "${x.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(u.length)}let S=kn([u,x.relativePath]),C=o.concat(x);h.children&&h.children.length>0&&(Xe(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),tg(h.children,l,C,S,g)),!(h.path==null&&!h.index)&&l.push({path:S,score:Db(S,h.index),routesMeta:C})};return a.forEach((h,y)=>{if(h.path===""||!h.path?.includes("?"))f(h,y);else for(let g of ng(h.path))f(h,y,!0,g)}),l}function ng(a){let l=a.split("/");if(l.length===0)return[];let[o,...u]=l,c=o.endsWith("?"),f=o.replace(/\?$/,"");if(u.length===0)return c?[f,""]:[f];let h=ng(u.join("/")),y=[];return y.push(...h.map(g=>g===""?f:[f,g].join("/"))),c&&y.push(...h),y.map(g=>a.startsWith("/")&&g===""?"/":g)}function Tb(a){a.sort((l,o)=>l.score!==o.score?o.score-l.score:Nb(l.routesMeta.map(u=>u.childrenIndex),o.routesMeta.map(u=>u.childrenIndex)))}var Rb=/^:[\w-]+$/,Mb=3,zb=2,Ob=1,Ab=10,_b=-2,x1=a=>a==="*";function Db(a,l){let o=a.split("/"),u=o.length;return o.some(x1)&&(u+=_b),l&&(u+=zb),o.filter(c=>!x1(c)).reduce((c,f)=>c+(Rb.test(f)?Mb:f===""?Ob:Ab),u)}function Nb(a,l){return a.length===l.length&&a.slice(0,-1).every((u,c)=>u===l[c])?a[a.length-1]-l[l.length-1]:0}function kb(a,l,o=!1){let{routesMeta:u}=a,c={},f="/",h=[];for(let y=0;y<u.length;++y){let g=u[y],m=y===u.length-1,x=f==="/"?l:l.slice(f.length)||"/",S=Jo({path:g.relativePath,caseSensitive:g.caseSensitive,end:m},x),C=g.route;if(!S&&m&&o&&!u[u.length-1].route.index&&(S=Jo({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},x)),!S)return null;Object.assign(c,S.params),h.push({params:c,pathname:kn([f,S.pathname]),pathnameBase:qb(kn([f,S.pathnameBase])),route:C}),S.pathnameBase!=="/"&&(f=kn([f,S.pathnameBase]))}return h}function Jo(a,l){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[o,u]=Lb(a.path,a.caseSensitive,a.end),c=l.match(o);if(!c)return null;let f=c[0],h=f.replace(/(.)\/+$/,"$1"),y=c.slice(1);return{params:u.reduce((m,{paramName:x,isOptional:S},C)=>{if(x==="*"){let R=y[C]||"";h=f.slice(0,f.length-R.length).replace(/(.)\/+$/,"$1")}const D=y[C];return S&&!D?m[x]=void 0:m[x]=(D||"").replace(/%2F/g,"/"),m},{}),pathname:f,pathnameBase:h,pattern:a}}function Lb(a,l=!1,o=!0){dn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let u=[],c="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,y,g)=>(u.push({paramName:y,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(u.push({paramName:"*"}),c+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?c+="\\/*$":a!==""&&a!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,l?void 0:"i"),u]}function $b(a){try{return a.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return dn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),a}}function $n(a,l){if(l==="/")return a;if(!a.toLowerCase().startsWith(l.toLowerCase()))return null;let o=l.endsWith("/")?l.length-1:l.length,u=a.charAt(o);return u&&u!=="/"?null:a.slice(o)||"/"}function Bb(a,l="/"){let{pathname:o,search:u="",hash:c=""}=typeof a=="string"?qi(a):a;return{pathname:o?o.startsWith("/")?o:Ub(o,l):l,search:Yb(u),hash:Gb(c)}}function Ub(a,l){let o=l.replace(/\/+$/,"").split("/");return a.split("/").forEach(c=>{c===".."?o.length>1&&o.pop():c!=="."&&o.push(c)}),o.length>1?o.join("/"):"/"}function Hc(a,l,o,u){return`Cannot include a '${a}' character in a manually specified \`to.${l}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Hb(a){return a.filter((l,o)=>o===0||l.route.path&&l.route.path.length>0)}function ag(a){let l=Hb(a);return l.map((o,u)=>u===l.length-1?o.pathname:o.pathnameBase)}function ig(a,l,o,u=!1){let c;typeof a=="string"?c=qi(a):(c={...a},Xe(!c.pathname||!c.pathname.includes("?"),Hc("?","pathname","search",c)),Xe(!c.pathname||!c.pathname.includes("#"),Hc("#","pathname","hash",c)),Xe(!c.search||!c.search.includes("#"),Hc("#","search","hash",c)));let f=a===""||c.pathname==="",h=f?"/":c.pathname,y;if(h==null)y=o;else{let S=l.length-1;if(!u&&h.startsWith("..")){let C=h.split("/");for(;C[0]==="..";)C.shift(),S-=1;c.pathname=C.join("/")}y=S>=0?l[S]:"/"}let g=Bb(c,y),m=h&&h!=="/"&&h.endsWith("/"),x=(f||h===".")&&o.endsWith("/");return!g.pathname.endsWith("/")&&(m||x)&&(g.pathname+="/"),g}var kn=a=>a.join("/").replace(/\/\/+/g,"/"),qb=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Yb=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Gb=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function Xb(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var lg=["POST","PUT","PATCH","DELETE"];new Set(lg);var Vb=["GET",...lg];new Set(Vb);var Yi=b.createContext(null);Yi.displayName="DataRouter";var lu=b.createContext(null);lu.displayName="DataRouterState";b.createContext(!1);var rg=b.createContext({isTransitioning:!1});rg.displayName="ViewTransition";var Kb=b.createContext(new Map);Kb.displayName="Fetchers";var Qb=b.createContext(null);Qb.displayName="Await";var pn=b.createContext(null);pn.displayName="Navigation";var lr=b.createContext(null);lr.displayName="Location";var Bn=b.createContext({outlet:null,matches:[],isDataRoute:!1});Bn.displayName="Route";var Nf=b.createContext(null);Nf.displayName="RouteError";function Zb(a,{relative:l}={}){Xe(rr(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:u}=b.useContext(pn),{hash:c,pathname:f,search:h}=or(a,{relative:l}),y=f;return o!=="/"&&(y=f==="/"?o:kn([o,f])),u.createHref({pathname:y,search:h,hash:c})}function rr(){return b.useContext(lr)!=null}function Un(){return Xe(rr(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(lr).location}var og="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ug(a){b.useContext(pn).static||b.useLayoutEffect(a)}function kf(){let{isDataRoute:a}=b.useContext(Bn);return a?ox():Jb()}function Jb(){Xe(rr(),"useNavigate() may be used only in the context of a <Router> component.");let a=b.useContext(Yi),{basename:l,navigator:o}=b.useContext(pn),{matches:u}=b.useContext(Bn),{pathname:c}=Un(),f=JSON.stringify(ag(u)),h=b.useRef(!1);return ug(()=>{h.current=!0}),b.useCallback((g,m={})=>{if(dn(h.current,og),!h.current)return;if(typeof g=="number"){o.go(g);return}let x=ig(g,JSON.parse(f),c,m.relative==="path");a==null&&l!=="/"&&(x.pathname=x.pathname==="/"?l:kn([l,x.pathname])),(m.replace?o.replace:o.push)(x,m.state,m)},[l,o,f,c,a])}b.createContext(null);function or(a,{relative:l}={}){let{matches:o}=b.useContext(Bn),{pathname:u}=Un(),c=JSON.stringify(ag(o));return b.useMemo(()=>ig(a,JSON.parse(c),u,l==="path"),[a,c,u,l])}function Fb(a,l){return sg(a,l)}function sg(a,l,o,u,c){Xe(rr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=b.useContext(pn),{matches:h}=b.useContext(Bn),y=h[h.length-1],g=y?y.params:{},m=y?y.pathname:"/",x=y?y.pathnameBase:"/",S=y&&y.route;{let A=S&&S.path||"";cg(m,!S||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let C=Un(),D;if(l){let A=typeof l=="string"?qi(l):l;Xe(x==="/"||A.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${A.pathname}" was given in the \`location\` prop.`),D=A}else D=C;let R=D.pathname||"/",$=R;if(x!=="/"){let A=x.replace(/^\//,"").split("/");$="/"+R.replace(/^\//,"").split("/").slice(A.length).join("/")}let B=eg(a,{pathname:$});dn(S||B!=null,`No routes matched location "${D.pathname}${D.search}${D.hash}" `),dn(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=tx(B&&B.map(A=>Object.assign({},A,{params:Object.assign({},g,A.params),pathname:kn([x,f.encodeLocation?f.encodeLocation(A.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?x:kn([x,f.encodeLocation?f.encodeLocation(A.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathnameBase])})),h,o,u,c);return l&&V?b.createElement(lr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...D},navigationType:"POP"}},V):V}function Wb(){let a=rx(),l=Xb(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),o=a instanceof Error?a.stack:null,u="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:u},f={padding:"2px 4px",backgroundColor:u},h=null;return console.error("Error handled by React Router default ErrorBoundary:",a),h=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:f},"ErrorBoundary")," or"," ",b.createElement("code",{style:f},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},l),o?b.createElement("pre",{style:c},o):null,h)}var Pb=b.createElement(Wb,null),Ib=class extends b.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,l){return l.location!==a.location||l.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:l.error,location:l.location,revalidation:a.revalidation||l.revalidation}}componentDidCatch(a,l){this.props.unstable_onError?this.props.unstable_onError(a,l):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?b.createElement(Bn.Provider,{value:this.props.routeContext},b.createElement(Nf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ex({routeContext:a,match:l,children:o}){let u=b.useContext(Yi);return u&&u.static&&u.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=l.route.id),b.createElement(Bn.Provider,{value:a},o)}function tx(a,l=[],o=null,u=null,c=null){if(a==null){if(!o)return null;if(o.errors)a=o.matches;else if(l.length===0&&!o.initialized&&o.matches.length>0)a=o.matches;else return null}let f=a,h=o?.errors;if(h!=null){let m=f.findIndex(x=>x.route.id&&h?.[x.route.id]!==void 0);Xe(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),f=f.slice(0,Math.min(f.length,m+1))}let y=!1,g=-1;if(o)for(let m=0;m<f.length;m++){let x=f[m];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(g=m),x.route.id){let{loaderData:S,errors:C}=o,D=x.route.loader&&!S.hasOwnProperty(x.route.id)&&(!C||C[x.route.id]===void 0);if(x.route.lazy||D){y=!0,g>=0?f=f.slice(0,g+1):f=[f[0]];break}}}return f.reduceRight((m,x,S)=>{let C,D=!1,R=null,$=null;o&&(C=h&&x.route.id?h[x.route.id]:void 0,R=x.route.errorElement||Pb,y&&(g<0&&S===0?(cg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),D=!0,$=null):g===S&&(D=!0,$=x.route.hydrateFallbackElement||null)));let B=l.concat(f.slice(0,S+1)),V=()=>{let A;return C?A=R:D?A=$:x.route.Component?A=b.createElement(x.route.Component,null):x.route.element?A=x.route.element:A=m,b.createElement(ex,{match:x,routeContext:{outlet:m,matches:B,isDataRoute:o!=null},children:A})};return o&&(x.route.ErrorBoundary||x.route.errorElement||S===0)?b.createElement(Ib,{location:o.location,revalidation:o.revalidation,component:R,error:C,children:V(),routeContext:{outlet:null,matches:B,isDataRoute:!0},unstable_onError:u}):V()},null)}function Lf(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nx(a){let l=b.useContext(Yi);return Xe(l,Lf(a)),l}function ax(a){let l=b.useContext(lu);return Xe(l,Lf(a)),l}function ix(a){let l=b.useContext(Bn);return Xe(l,Lf(a)),l}function $f(a){let l=ix(a),o=l.matches[l.matches.length-1];return Xe(o.route.id,`${a} can only be used on routes that contain a unique "id"`),o.route.id}function lx(){return $f("useRouteId")}function rx(){let a=b.useContext(Nf),l=ax("useRouteError"),o=$f("useRouteError");return a!==void 0?a:l.errors?.[o]}function ox(){let{router:a}=nx("useNavigate"),l=$f("useNavigate"),o=b.useRef(!1);return ug(()=>{o.current=!0}),b.useCallback(async(c,f={})=>{dn(o.current,og),o.current&&(typeof c=="number"?a.navigate(c):await a.navigate(c,{fromRouteId:l,...f}))},[a,l])}var S1={};function cg(a,l,o){!l&&!S1[a]&&(S1[a]=!0,dn(!1,o))}b.memo(ux);function ux({routes:a,future:l,state:o,unstable_onError:u}){return sg(a,void 0,o,u,l)}function $a(a){Xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function sx({basename:a="/",children:l=null,location:o,navigationType:u="POP",navigator:c,static:f=!1}){Xe(!rr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=a.replace(/^\/*/,"/"),y=b.useMemo(()=>({basename:h,navigator:c,static:f,future:{}}),[h,c,f]);typeof o=="string"&&(o=qi(o));let{pathname:g="/",search:m="",hash:x="",state:S=null,key:C="default"}=o,D=b.useMemo(()=>{let R=$n(g,h);return R==null?null:{location:{pathname:R,search:m,hash:x,state:S,key:C},navigationType:u}},[h,g,m,x,S,C,u]);return dn(D!=null,`<Router basename="${h}"> is not able to match the URL "${g}${m}${x}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:b.createElement(pn.Provider,{value:y},b.createElement(lr.Provider,{children:l,value:D}))}function cx({children:a,location:l}){return Fb(xf(a),l)}function xf(a,l=[]){let o=[];return b.Children.forEach(a,(u,c)=>{if(!b.isValidElement(u))return;let f=[...l,c];if(u.type===b.Fragment){o.push.apply(o,xf(u.props.children,f));return}Xe(u.type===$a,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xe(!u.props.index||!u.props.children,"An index route cannot have child routes.");let h={id:u.props.id||f.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(h.children=xf(u.props.children,f)),o.push(h)}),o}var Yo="get",Go="application/x-www-form-urlencoded";function ru(a){return a!=null&&typeof a.tagName=="string"}function fx(a){return ru(a)&&a.tagName.toLowerCase()==="button"}function dx(a){return ru(a)&&a.tagName.toLowerCase()==="form"}function px(a){return ru(a)&&a.tagName.toLowerCase()==="input"}function hx(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function mx(a,l){return a.button===0&&(!l||l==="_self")&&!hx(a)}var Ro=null;function gx(){if(Ro===null)try{new FormData(document.createElement("form"),0),Ro=!1}catch{Ro=!0}return Ro}var vx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function qc(a){return a!=null&&!vx.has(a)?(dn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Go}"`),null):a}function yx(a,l){let o,u,c,f,h;if(dx(a)){let y=a.getAttribute("action");u=y?$n(y,l):null,o=a.getAttribute("method")||Yo,c=qc(a.getAttribute("enctype"))||Go,f=new FormData(a)}else if(fx(a)||px(a)&&(a.type==="submit"||a.type==="image")){let y=a.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=a.getAttribute("formaction")||y.getAttribute("action");if(u=g?$n(g,l):null,o=a.getAttribute("formmethod")||y.getAttribute("method")||Yo,c=qc(a.getAttribute("formenctype"))||qc(y.getAttribute("enctype"))||Go,f=new FormData(y,a),!gx()){let{name:m,type:x,value:S}=a;if(x==="image"){let C=m?`${m}.`:"";f.append(`${C}x`,"0"),f.append(`${C}y`,"0")}else m&&f.append(m,S)}}else{if(ru(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Yo,u=null,c=Go,h=a}return f&&c==="text/plain"&&(h=f,f=void 0),{action:u,method:o.toLowerCase(),encType:c,formData:f,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Bf(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function bx(a,l,o){let u=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return u.pathname==="/"?u.pathname=`_root.${o}`:l&&$n(u.pathname,l)==="/"?u.pathname=`${l.replace(/\/$/,"")}/_root.${o}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${o}`,u}async function xx(a,l){if(a.id in l)return l[a.id];try{let o=await import(a.module);return l[a.id]=o,o}catch(o){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Sx(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function wx(a,l,o){let u=await Promise.all(a.map(async c=>{let f=l.routes[c.route.id];if(f){let h=await xx(f,o);return h.links?h.links():[]}return[]}));return Tx(u.flat(1).filter(Sx).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function w1(a,l,o,u,c,f){let h=(g,m)=>o[m]?g.route.id!==o[m].route.id:!0,y=(g,m)=>o[m].pathname!==g.pathname||o[m].route.path?.endsWith("*")&&o[m].params["*"]!==g.params["*"];return f==="assets"?l.filter((g,m)=>h(g,m)||y(g,m)):f==="data"?l.filter((g,m)=>{let x=u.routes[g.route.id];if(!x||!x.hasLoader)return!1;if(h(g,m)||y(g,m))return!0;if(g.route.shouldRevalidate){let S=g.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function Ex(a,l,{includeHydrateFallback:o}={}){return Cx(a.map(u=>{let c=l.routes[u.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),o&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function Cx(a){return[...new Set(a)]}function jx(a){let l={},o=Object.keys(a).sort();for(let u of o)l[u]=a[u];return l}function Tx(a,l){let o=new Set;return new Set(l),a.reduce((u,c)=>{let f=JSON.stringify(jx(c));return o.has(f)||(o.add(f),u.push({key:f,link:c})),u},[])}function fg(){let a=b.useContext(Yi);return Bf(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function Rx(){let a=b.useContext(lu);return Bf(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Uf=b.createContext(void 0);Uf.displayName="FrameworkContext";function dg(){let a=b.useContext(Uf);return Bf(a,"You must render this element inside a <HydratedRouter> element"),a}function Mx(a,l){let o=b.useContext(Uf),[u,c]=b.useState(!1),[f,h]=b.useState(!1),{onFocus:y,onBlur:g,onMouseEnter:m,onMouseLeave:x,onTouchStart:S}=l,C=b.useRef(null);b.useEffect(()=>{if(a==="render"&&h(!0),a==="viewport"){let $=V=>{V.forEach(A=>{h(A.isIntersecting)})},B=new IntersectionObserver($,{threshold:.5});return C.current&&B.observe(C.current),()=>{B.disconnect()}}},[a]),b.useEffect(()=>{if(u){let $=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout($)}}},[u]);let D=()=>{c(!0)},R=()=>{c(!1),h(!1)};return o?a!=="intent"?[f,C,{}]:[f,C,{onFocus:Yl(y,D),onBlur:Yl(g,R),onMouseEnter:Yl(m,D),onMouseLeave:Yl(x,R),onTouchStart:Yl(S,D)}]:[!1,C,{}]}function Yl(a,l){return o=>{a&&a(o),o.defaultPrevented||l(o)}}function zx({page:a,...l}){let{router:o}=fg(),u=b.useMemo(()=>eg(o.routes,a,o.basename),[o.routes,a,o.basename]);return u?b.createElement(Ax,{page:a,matches:u,...l}):null}function Ox(a){let{manifest:l,routeModules:o}=dg(),[u,c]=b.useState([]);return b.useEffect(()=>{let f=!1;return wx(a,l,o).then(h=>{f||c(h)}),()=>{f=!0}},[a,l,o]),u}function Ax({page:a,matches:l,...o}){let u=Un(),{manifest:c,routeModules:f}=dg(),{basename:h}=fg(),{loaderData:y,matches:g}=Rx(),m=b.useMemo(()=>w1(a,l,g,c,u,"data"),[a,l,g,c,u]),x=b.useMemo(()=>w1(a,l,g,c,u,"assets"),[a,l,g,c,u]),S=b.useMemo(()=>{if(a===u.pathname+u.search+u.hash)return[];let R=new Set,$=!1;if(l.forEach(V=>{let A=c.routes[V.route.id];!A||!A.hasLoader||(!m.some(O=>O.route.id===V.route.id)&&V.route.id in y&&f[V.route.id]?.shouldRevalidate||A.hasClientLoader?$=!0:R.add(V.route.id))}),R.size===0)return[];let B=bx(a,h,"data");return $&&R.size>0&&B.searchParams.set("_routes",l.filter(V=>R.has(V.route.id)).map(V=>V.route.id).join(",")),[B.pathname+B.search]},[h,y,u,c,m,l,a,f]),C=b.useMemo(()=>Ex(x,c),[x,c]),D=Ox(x);return b.createElement(b.Fragment,null,S.map(R=>b.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...o})),C.map(R=>b.createElement("link",{key:R,rel:"modulepreload",href:R,...o})),D.map(({key:R,link:$})=>b.createElement("link",{key:R,nonce:o.nonce,...$})))}function _x(...a){return l=>{a.forEach(o=>{typeof o=="function"?o(l):o!=null&&(o.current=l)})}}var pg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{pg&&(window.__reactRouterVersion="7.9.4")}catch{}function Dx({basename:a,children:l,window:o}){let u=b.useRef();u.current==null&&(u.current=Sb({window:o,v5Compat:!0}));let c=u.current,[f,h]=b.useState({action:c.action,location:c.location}),y=b.useCallback(g=>{b.startTransition(()=>h(g))},[h]);return b.useLayoutEffect(()=>c.listen(y),[c,y]),b.createElement(sx,{basename:a,children:l,location:f.location,navigationType:f.action,navigator:c})}var hg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gi=b.forwardRef(function({onClick:l,discover:o="render",prefetch:u="none",relative:c,reloadDocument:f,replace:h,state:y,target:g,to:m,preventScrollReset:x,viewTransition:S,...C},D){let{basename:R}=b.useContext(pn),$=typeof m=="string"&&hg.test(m),B,V=!1;if(typeof m=="string"&&$&&(B=m,pg))try{let J=new URL(window.location.href),ue=m.startsWith("//")?new URL(J.protocol+m):new URL(m),W=$n(ue.pathname,R);ue.origin===J.origin&&W!=null?m=W+ue.search+ue.hash:V=!0}catch{dn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let A=Zb(m,{relative:c}),[O,U,N]=Mx(u,C),M=$x(m,{replace:h,state:y,target:g,preventScrollReset:x,relative:c,viewTransition:S});function Z(J){l&&l(J),J.defaultPrevented||M(J)}let G=b.createElement("a",{...C,...N,href:B||A,onClick:V||f?l:Z,ref:_x(D,U),target:g,"data-discover":!$&&o==="render"?"true":void 0});return O&&!$?b.createElement(b.Fragment,null,G,b.createElement(zx,{page:A})):G});Gi.displayName="Link";var Nx=b.forwardRef(function({"aria-current":l="page",caseSensitive:o=!1,className:u="",end:c=!1,style:f,to:h,viewTransition:y,children:g,...m},x){let S=or(h,{relative:m.relative}),C=Un(),D=b.useContext(lu),{navigator:R,basename:$}=b.useContext(pn),B=D!=null&&Yx(S)&&y===!0,V=R.encodeLocation?R.encodeLocation(S).pathname:S.pathname,A=C.pathname,O=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;o||(A=A.toLowerCase(),O=O?O.toLowerCase():null,V=V.toLowerCase()),O&&$&&(O=$n(O,$)||O);const U=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let N=A===V||!c&&A.startsWith(V)&&A.charAt(U)==="/",M=O!=null&&(O===V||!c&&O.startsWith(V)&&O.charAt(V.length)==="/"),Z={isActive:N,isPending:M,isTransitioning:B},G=N?l:void 0,J;typeof u=="function"?J=u(Z):J=[u,N?"active":null,M?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let ue=typeof f=="function"?f(Z):f;return b.createElement(Gi,{...m,"aria-current":G,className:J,ref:x,style:ue,to:h,viewTransition:y},typeof g=="function"?g(Z):g)});Nx.displayName="NavLink";var kx=b.forwardRef(({discover:a="render",fetcherKey:l,navigate:o,reloadDocument:u,replace:c,state:f,method:h=Yo,action:y,onSubmit:g,relative:m,preventScrollReset:x,viewTransition:S,...C},D)=>{let R=Hx(),$=qx(y,{relative:m}),B=h.toLowerCase()==="get"?"get":"post",V=typeof y=="string"&&hg.test(y),A=O=>{if(g&&g(O),O.defaultPrevented)return;O.preventDefault();let U=O.nativeEvent.submitter,N=U?.getAttribute("formmethod")||h;R(U||O.currentTarget,{fetcherKey:l,method:N,navigate:o,replace:c,state:f,relative:m,preventScrollReset:x,viewTransition:S})};return b.createElement("form",{ref:D,method:B,action:$,onSubmit:u?g:A,...C,"data-discover":!V&&a==="render"?"true":void 0})});kx.displayName="Form";function Lx(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function mg(a){let l=b.useContext(Yi);return Xe(l,Lx(a)),l}function $x(a,{target:l,replace:o,state:u,preventScrollReset:c,relative:f,viewTransition:h}={}){let y=kf(),g=Un(),m=or(a,{relative:f});return b.useCallback(x=>{if(mx(x,l)){x.preventDefault();let S=o!==void 0?o:tr(g)===tr(m);y(a,{replace:S,state:u,preventScrollReset:c,relative:f,viewTransition:h})}},[g,y,m,o,u,l,a,c,f,h])}var Bx=0,Ux=()=>`__${String(++Bx)}__`;function Hx(){let{router:a}=mg("useSubmit"),{basename:l}=b.useContext(pn),o=lx();return b.useCallback(async(u,c={})=>{let{action:f,method:h,encType:y,formData:g,body:m}=yx(u,l);if(c.navigate===!1){let x=c.fetcherKey||Ux();await a.fetch(x,o,c.action||f,{preventScrollReset:c.preventScrollReset,formData:g,body:m,formMethod:c.method||h,formEncType:c.encType||y,flushSync:c.flushSync})}else await a.navigate(c.action||f,{preventScrollReset:c.preventScrollReset,formData:g,body:m,formMethod:c.method||h,formEncType:c.encType||y,replace:c.replace,state:c.state,fromRouteId:o,flushSync:c.flushSync,viewTransition:c.viewTransition})},[a,l,o])}function qx(a,{relative:l}={}){let{basename:o}=b.useContext(pn),u=b.useContext(Bn);Xe(u,"useFormAction must be used inside a RouteContext");let[c]=u.matches.slice(-1),f={...or(a||".",{relative:l})},h=Un();if(a==null){f.search=h.search;let y=new URLSearchParams(f.search),g=y.getAll("index");if(g.some(x=>x==="")){y.delete("index"),g.filter(S=>S).forEach(S=>y.append("index",S));let x=y.toString();f.search=x?`?${x}`:""}}return(!a||a===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(f.pathname=f.pathname==="/"?o:kn([o,f.pathname])),tr(f)}function Yx(a,{relative:l}={}){let o=b.useContext(rg);Xe(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=mg("useViewTransitionState"),c=or(a,{relative:l});if(!o.isTransitioning)return!1;let f=$n(o.currentLocation.pathname,u)||o.currentLocation.pathname,h=$n(o.nextLocation.pathname,u)||o.nextLocation.pathname;return Jo(c.pathname,h)!=null||Jo(c.pathname,f)!=null}var Gx=Im();const _i=ir(Gx);var pt=function(){return pt=Object.assign||function(l){for(var o,u=1,c=arguments.length;u<c;u++){o=arguments[u];for(var f in o)Object.prototype.hasOwnProperty.call(o,f)&&(l[f]=o[f])}return l},pt.apply(this,arguments)};function ki(a,l,o){if(o||arguments.length===2)for(var u=0,c=l.length,f;u<c;u++)(f||!(u in l))&&(f||(f=Array.prototype.slice.call(l,0,u)),f[u]=l[u]);return a.concat(f||Array.prototype.slice.call(l))}var qe="-ms-",Il="-moz-",Oe="-webkit-",gg="comm",ou="rule",Hf="decl",Xx="@import",vg="@keyframes",Vx="@layer",yg=Math.abs,qf=String.fromCharCode,Sf=Object.assign;function Kx(a,l){return at(a,0)^45?(((l<<2^at(a,0))<<2^at(a,1))<<2^at(a,2))<<2^at(a,3):0}function bg(a){return a.trim()}function _n(a,l){return(a=l.exec(a))?a[0]:a}function ye(a,l,o){return a.replace(l,o)}function Xo(a,l,o){return a.indexOf(l,o)}function at(a,l){return a.charCodeAt(l)|0}function Li(a,l,o){return a.slice(l,o)}function fn(a){return a.length}function xg(a){return a.length}function Wl(a,l){return l.push(a),a}function Qx(a,l){return a.map(l).join("")}function E1(a,l){return a.filter(function(o){return!_n(o,l)})}var uu=1,$i=1,Sg=0,Jt=0,Ie=0,Xi="";function su(a,l,o,u,c,f,h,y){return{value:a,root:l,parent:o,type:u,props:c,children:f,line:uu,column:$i,length:h,return:"",siblings:y}}function ha(a,l){return Sf(su("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},l)}function Ri(a){for(;a.root;)a=ha(a.root,{children:[a]});Wl(a,a.siblings)}function Zx(){return Ie}function Jx(){return Ie=Jt>0?at(Xi,--Jt):0,$i--,Ie===10&&($i=1,uu--),Ie}function an(){return Ie=Jt<Sg?at(Xi,Jt++):0,$i++,Ie===10&&($i=1,uu++),Ie}function Ha(){return at(Xi,Jt)}function Vo(){return Jt}function cu(a,l){return Li(Xi,a,l)}function wf(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Fx(a){return uu=$i=1,Sg=fn(Xi=a),Jt=0,[]}function Wx(a){return Xi="",a}function Yc(a){return bg(cu(Jt-1,Ef(a===91?a+2:a===40?a+1:a)))}function Px(a){for(;(Ie=Ha())&&Ie<33;)an();return wf(a)>2||wf(Ie)>3?"":" "}function Ix(a,l){for(;--l&&an()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return cu(a,Vo()+(l<6&&Ha()==32&&an()==32))}function Ef(a){for(;an();)switch(Ie){case a:return Jt;case 34:case 39:a!==34&&a!==39&&Ef(Ie);break;case 40:a===41&&Ef(a);break;case 92:an();break}return Jt}function e5(a,l){for(;an()&&a+Ie!==57;)if(a+Ie===84&&Ha()===47)break;return"/*"+cu(l,Jt-1)+"*"+qf(a===47?a:an())}function t5(a){for(;!wf(Ha());)an();return cu(a,Jt)}function n5(a){return Wx(Ko("",null,null,null,[""],a=Fx(a),0,[0],a))}function Ko(a,l,o,u,c,f,h,y,g){for(var m=0,x=0,S=h,C=0,D=0,R=0,$=1,B=1,V=1,A=0,O="",U=c,N=f,M=u,Z=O;B;)switch(R=A,A=an()){case 40:if(R!=108&&at(Z,S-1)==58){Xo(Z+=ye(Yc(A),"&","&\f"),"&\f",yg(m?y[m-1]:0))!=-1&&(V=-1);break}case 34:case 39:case 91:Z+=Yc(A);break;case 9:case 10:case 13:case 32:Z+=Px(R);break;case 92:Z+=Ix(Vo()-1,7);continue;case 47:switch(Ha()){case 42:case 47:Wl(a5(e5(an(),Vo()),l,o,g),g);break;default:Z+="/"}break;case 123*$:y[m++]=fn(Z)*V;case 125*$:case 59:case 0:switch(A){case 0:case 125:B=0;case 59+x:V==-1&&(Z=ye(Z,/\f/g,"")),D>0&&fn(Z)-S&&Wl(D>32?j1(Z+";",u,o,S-1,g):j1(ye(Z," ","")+";",u,o,S-2,g),g);break;case 59:Z+=";";default:if(Wl(M=C1(Z,l,o,m,x,c,y,O,U=[],N=[],S,f),f),A===123)if(x===0)Ko(Z,l,M,M,U,f,S,y,N);else switch(C===99&&at(Z,3)===110?100:C){case 100:case 108:case 109:case 115:Ko(a,M,M,u&&Wl(C1(a,M,M,0,0,c,y,O,c,U=[],S,N),N),c,N,S,y,u?U:N);break;default:Ko(Z,M,M,M,[""],N,0,y,N)}}m=x=D=0,$=V=1,O=Z="",S=h;break;case 58:S=1+fn(Z),D=R;default:if($<1){if(A==123)--$;else if(A==125&&$++==0&&Jx()==125)continue}switch(Z+=qf(A),A*$){case 38:V=x>0?1:(Z+="\f",-1);break;case 44:y[m++]=(fn(Z)-1)*V,V=1;break;case 64:Ha()===45&&(Z+=Yc(an())),C=Ha(),x=S=fn(O=Z+=t5(Vo())),A++;break;case 45:R===45&&fn(Z)==2&&($=0)}}return f}function C1(a,l,o,u,c,f,h,y,g,m,x,S){for(var C=c-1,D=c===0?f:[""],R=xg(D),$=0,B=0,V=0;$<u;++$)for(var A=0,O=Li(a,C+1,C=yg(B=h[$])),U=a;A<R;++A)(U=bg(B>0?D[A]+" "+O:ye(O,/&\f/g,D[A])))&&(g[V++]=U);return su(a,l,o,c===0?ou:y,g,m,x,S)}function a5(a,l,o,u){return su(a,l,o,gg,qf(Zx()),Li(a,2,-2),0,u)}function j1(a,l,o,u,c){return su(a,l,o,Hf,Li(a,0,u),Li(a,u+1,-1),u,c)}function wg(a,l,o){switch(Kx(a,l)){case 5103:return Oe+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Oe+a+a;case 4789:return Il+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Oe+a+Il+a+qe+a+a;case 5936:switch(at(a,l+11)){case 114:return Oe+a+qe+ye(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Oe+a+qe+ye(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Oe+a+qe+ye(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Oe+a+qe+a+a;case 6165:return Oe+a+qe+"flex-"+a+a;case 5187:return Oe+a+ye(a,/(\w+).+(:[^]+)/,Oe+"box-$1$2"+qe+"flex-$1$2")+a;case 5443:return Oe+a+qe+"flex-item-"+ye(a,/flex-|-self/g,"")+(_n(a,/flex-|baseline/)?"":qe+"grid-row-"+ye(a,/flex-|-self/g,""))+a;case 4675:return Oe+a+qe+"flex-line-pack"+ye(a,/align-content|flex-|-self/g,"")+a;case 5548:return Oe+a+qe+ye(a,"shrink","negative")+a;case 5292:return Oe+a+qe+ye(a,"basis","preferred-size")+a;case 6060:return Oe+"box-"+ye(a,"-grow","")+Oe+a+qe+ye(a,"grow","positive")+a;case 4554:return Oe+ye(a,/([^-])(transform)/g,"$1"+Oe+"$2")+a;case 6187:return ye(ye(ye(a,/(zoom-|grab)/,Oe+"$1"),/(image-set)/,Oe+"$1"),a,"")+a;case 5495:case 3959:return ye(a,/(image-set\([^]*)/,Oe+"$1$`$1");case 4968:return ye(ye(a,/(.+:)(flex-)?(.*)/,Oe+"box-pack:$3"+qe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Oe+a+a;case 4200:if(!_n(a,/flex-|baseline/))return qe+"grid-column-align"+Li(a,l)+a;break;case 2592:case 3360:return qe+ye(a,"template-","")+a;case 4384:case 3616:return o&&o.some(function(u,c){return l=c,_n(u.props,/grid-\w+-end/)})?~Xo(a+(o=o[l].value),"span",0)?a:qe+ye(a,"-start","")+a+qe+"grid-row-span:"+(~Xo(o,"span",0)?_n(o,/\d+/):+_n(o,/\d+/)-+_n(a,/\d+/))+";":qe+ye(a,"-start","")+a;case 4896:case 4128:return o&&o.some(function(u){return _n(u.props,/grid-\w+-start/)})?a:qe+ye(ye(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return ye(a,/(.+)-inline(.+)/,Oe+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(fn(a)-1-l>6)switch(at(a,l+1)){case 109:if(at(a,l+4)!==45)break;case 102:return ye(a,/(.+:)(.+)-([^]+)/,"$1"+Oe+"$2-$3$1"+Il+(at(a,l+3)==108?"$3":"$2-$3"))+a;case 115:return~Xo(a,"stretch",0)?wg(ye(a,"stretch","fill-available"),l,o)+a:a}break;case 5152:case 5920:return ye(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,c,f,h,y,g,m){return qe+c+":"+f+m+(h?qe+c+"-span:"+(y?g:+g-+f)+m:"")+a});case 4949:if(at(a,l+6)===121)return ye(a,":",":"+Oe)+a;break;case 6444:switch(at(a,at(a,14)===45?18:11)){case 120:return ye(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Oe+(at(a,14)===45?"inline-":"")+"box$3$1"+Oe+"$2$3$1"+qe+"$2box$3")+a;case 100:return ye(a,":",":"+qe)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ye(a,"scroll-","scroll-snap-")+a}return a}function Fo(a,l){for(var o="",u=0;u<a.length;u++)o+=l(a[u],u,a,l)||"";return o}function i5(a,l,o,u){switch(a.type){case Vx:if(a.children.length)break;case Xx:case Hf:return a.return=a.return||a.value;case gg:return"";case vg:return a.return=a.value+"{"+Fo(a.children,u)+"}";case ou:if(!fn(a.value=a.props.join(",")))return""}return fn(o=Fo(a.children,u))?a.return=a.value+"{"+o+"}":""}function l5(a){var l=xg(a);return function(o,u,c,f){for(var h="",y=0;y<l;y++)h+=a[y](o,u,c,f)||"";return h}}function r5(a){return function(l){l.root||(l=l.return)&&a(l)}}function o5(a,l,o,u){if(a.length>-1&&!a.return)switch(a.type){case Hf:a.return=wg(a.value,a.length,o);return;case vg:return Fo([ha(a,{value:ye(a.value,"@","@"+Oe)})],u);case ou:if(a.length)return Qx(o=a.props,function(c){switch(_n(c,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ri(ha(a,{props:[ye(c,/:(read-\w+)/,":"+Il+"$1")]})),Ri(ha(a,{props:[c]})),Sf(a,{props:E1(o,u)});break;case"::placeholder":Ri(ha(a,{props:[ye(c,/:(plac\w+)/,":"+Oe+"input-$1")]})),Ri(ha(a,{props:[ye(c,/:(plac\w+)/,":"+Il+"$1")]})),Ri(ha(a,{props:[ye(c,/:(plac\w+)/,qe+"input-$1")]})),Ri(ha(a,{props:[c]})),Sf(a,{props:E1(o,u)});break}return""})}}var u5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$t={},Bi=typeof process<"u"&&$t!==void 0&&($t.REACT_APP_SC_ATTR||$t.SC_ATTR)||"data-styled",Eg="active",Cg="data-styled-version",fu="6.1.19",Yf=`/*!sc*/
`,Wo=typeof window<"u"&&typeof document<"u",s5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&$t!==void 0&&$t.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&$t.REACT_APP_SC_DISABLE_SPEEDY!==""?$t.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&$t.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&$t!==void 0&&$t.SC_DISABLE_SPEEDY!==void 0&&$t.SC_DISABLE_SPEEDY!==""&&$t.SC_DISABLE_SPEEDY!=="false"&&$t.SC_DISABLE_SPEEDY),c5={},du=Object.freeze([]),Ui=Object.freeze({});function jg(a,l,o){return o===void 0&&(o=Ui),a.theme!==o.theme&&a.theme||l||o.theme}var Tg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),f5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,d5=/(^-|-$)/g;function T1(a){return a.replace(f5,"-").replace(d5,"")}var p5=/(a)(d)/gi,Mo=52,R1=function(a){return String.fromCharCode(a+(a>25?39:97))};function Cf(a){var l,o="";for(l=Math.abs(a);l>Mo;l=l/Mo|0)o=R1(l%Mo)+o;return(R1(l%Mo)+o).replace(p5,"$1-$2")}var Gc,Rg=5381,Di=function(a,l){for(var o=l.length;o;)a=33*a^l.charCodeAt(--o);return a},Mg=function(a){return Di(Rg,a)};function Gf(a){return Cf(Mg(a)>>>0)}function h5(a){return a.displayName||a.name||"Component"}function Xc(a){return typeof a=="string"&&!0}var zg=typeof Symbol=="function"&&Symbol.for,Og=zg?Symbol.for("react.memo"):60115,m5=zg?Symbol.for("react.forward_ref"):60112,g5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},v5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ag={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},y5=((Gc={})[m5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gc[Og]=Ag,Gc);function M1(a){return("type"in(l=a)&&l.type.$$typeof)===Og?Ag:"$$typeof"in a?y5[a.$$typeof]:g5;var l}var b5=Object.defineProperty,x5=Object.getOwnPropertyNames,z1=Object.getOwnPropertySymbols,S5=Object.getOwnPropertyDescriptor,w5=Object.getPrototypeOf,O1=Object.prototype;function _g(a,l,o){if(typeof l!="string"){if(O1){var u=w5(l);u&&u!==O1&&_g(a,u,o)}var c=x5(l);z1&&(c=c.concat(z1(l)));for(var f=M1(a),h=M1(l),y=0;y<c.length;++y){var g=c[y];if(!(g in v5||o&&o[g]||h&&g in h||f&&g in f)){var m=S5(l,g);try{b5(a,g,m)}catch{}}}}return a}function Hi(a){return typeof a=="function"}function Xf(a){return typeof a=="object"&&"styledComponentId"in a}function Ua(a,l){return a&&l?"".concat(a," ").concat(l):a||l||""}function Po(a,l){if(a.length===0)return"";for(var o=a[0],u=1;u<a.length;u++)o+=a[u];return o}function nr(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function jf(a,l,o){if(o===void 0&&(o=!1),!o&&!nr(a)&&!Array.isArray(a))return l;if(Array.isArray(l))for(var u=0;u<l.length;u++)a[u]=jf(a[u],l[u]);else if(nr(l))for(var u in l)a[u]=jf(a[u],l[u]);return a}function Vf(a,l){Object.defineProperty(a,"toString",{value:l})}function ur(a){for(var l=[],o=1;o<arguments.length;o++)l[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(l.length>0?" Args: ".concat(l.join(", ")):""))}var E5=(function(){function a(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l}return a.prototype.indexOfGroup=function(l){for(var o=0,u=0;u<l;u++)o+=this.groupSizes[u];return o},a.prototype.insertRules=function(l,o){if(l>=this.groupSizes.length){for(var u=this.groupSizes,c=u.length,f=c;l>=f;)if((f<<=1)<0)throw ur(16,"".concat(l));this.groupSizes=new Uint32Array(f),this.groupSizes.set(u),this.length=f;for(var h=c;h<f;h++)this.groupSizes[h]=0}for(var y=this.indexOfGroup(l+1),g=(h=0,o.length);h<g;h++)this.tag.insertRule(y,o[h])&&(this.groupSizes[l]++,y++)},a.prototype.clearGroup=function(l){if(l<this.length){var o=this.groupSizes[l],u=this.indexOfGroup(l),c=u+o;this.groupSizes[l]=0;for(var f=u;f<c;f++)this.tag.deleteRule(u)}},a.prototype.getGroup=function(l){var o="";if(l>=this.length||this.groupSizes[l]===0)return o;for(var u=this.groupSizes[l],c=this.indexOfGroup(l),f=c+u,h=c;h<f;h++)o+="".concat(this.tag.getRule(h)).concat(Yf);return o},a})(),Qo=new Map,Io=new Map,Zo=1,zo=function(a){if(Qo.has(a))return Qo.get(a);for(;Io.has(Zo);)Zo++;var l=Zo++;return Qo.set(a,l),Io.set(l,a),l},C5=function(a,l){Zo=l+1,Qo.set(a,l),Io.set(l,a)},j5="style[".concat(Bi,"][").concat(Cg,'="').concat(fu,'"]'),T5=new RegExp("^".concat(Bi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),R5=function(a,l,o){for(var u,c=o.split(","),f=0,h=c.length;f<h;f++)(u=c[f])&&a.registerName(l,u)},M5=function(a,l){for(var o,u=((o=l.textContent)!==null&&o!==void 0?o:"").split(Yf),c=[],f=0,h=u.length;f<h;f++){var y=u[f].trim();if(y){var g=y.match(T5);if(g){var m=0|parseInt(g[1],10),x=g[2];m!==0&&(C5(x,m),R5(a,x,g[3]),a.getTag().insertRules(m,c)),c.length=0}else c.push(y)}}},A1=function(a){for(var l=document.querySelectorAll(j5),o=0,u=l.length;o<u;o++){var c=l[o];c&&c.getAttribute(Bi)!==Eg&&(M5(a,c),c.parentNode&&c.parentNode.removeChild(c))}};function z5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Dg=function(a){var l=document.head,o=a||l,u=document.createElement("style"),c=(function(y){var g=Array.from(y.querySelectorAll("style[".concat(Bi,"]")));return g[g.length-1]})(o),f=c!==void 0?c.nextSibling:null;u.setAttribute(Bi,Eg),u.setAttribute(Cg,fu);var h=z5();return h&&u.setAttribute("nonce",h),o.insertBefore(u,f),u},O5=(function(){function a(l){this.element=Dg(l),this.element.appendChild(document.createTextNode("")),this.sheet=(function(o){if(o.sheet)return o.sheet;for(var u=document.styleSheets,c=0,f=u.length;c<f;c++){var h=u[c];if(h.ownerNode===o)return h}throw ur(17)})(this.element),this.length=0}return a.prototype.insertRule=function(l,o){try{return this.sheet.insertRule(o,l),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},a.prototype.getRule=function(l){var o=this.sheet.cssRules[l];return o&&o.cssText?o.cssText:""},a})(),A5=(function(){function a(l){this.element=Dg(l),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(l,o){if(l<=this.length&&l>=0){var u=document.createTextNode(o);return this.element.insertBefore(u,this.nodes[l]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},a.prototype.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},a})(),_5=(function(){function a(l){this.rules=[],this.length=0}return a.prototype.insertRule=function(l,o){return l<=this.length&&(this.rules.splice(l,0,o),this.length++,!0)},a.prototype.deleteRule=function(l){this.rules.splice(l,1),this.length--},a.prototype.getRule=function(l){return l<this.length?this.rules[l]:""},a})(),_1=Wo,D5={isServer:!Wo,useCSSOMInjection:!s5},eu=(function(){function a(l,o,u){l===void 0&&(l=Ui),o===void 0&&(o={});var c=this;this.options=pt(pt({},D5),l),this.gs=o,this.names=new Map(u),this.server=!!l.isServer,!this.server&&Wo&&_1&&(_1=!1,A1(this)),Vf(this,function(){return(function(f){for(var h=f.getTag(),y=h.length,g="",m=function(S){var C=(function(V){return Io.get(V)})(S);if(C===void 0)return"continue";var D=f.names.get(C),R=h.getGroup(S);if(D===void 0||!D.size||R.length===0)return"continue";var $="".concat(Bi,".g").concat(S,'[id="').concat(C,'"]'),B="";D!==void 0&&D.forEach(function(V){V.length>0&&(B+="".concat(V,","))}),g+="".concat(R).concat($,'{content:"').concat(B,'"}').concat(Yf)},x=0;x<y;x++)m(x);return g})(c)})}return a.registerId=function(l){return zo(l)},a.prototype.rehydrate=function(){!this.server&&Wo&&A1(this)},a.prototype.reconstructWithOptions=function(l,o){return o===void 0&&(o=!0),new a(pt(pt({},this.options),l),this.gs,o&&this.names||void 0)},a.prototype.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(l=(function(o){var u=o.useCSSOMInjection,c=o.target;return o.isServer?new _5(c):u?new O5(c):new A5(c)})(this.options),new E5(l)));var l},a.prototype.hasNameForId=function(l,o){return this.names.has(l)&&this.names.get(l).has(o)},a.prototype.registerName=function(l,o){if(zo(l),this.names.has(l))this.names.get(l).add(o);else{var u=new Set;u.add(o),this.names.set(l,u)}},a.prototype.insertRules=function(l,o,u){this.registerName(l,o),this.getTag().insertRules(zo(l),u)},a.prototype.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},a.prototype.clearRules=function(l){this.getTag().clearGroup(zo(l)),this.clearNames(l)},a.prototype.clearTag=function(){this.tag=void 0},a})(),N5=/&/g,k5=/^\s*\/\/.*$/gm;function Ng(a,l){return a.map(function(o){return o.type==="rule"&&(o.value="".concat(l," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(l," ")),o.props=o.props.map(function(u){return"".concat(l," ").concat(u)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=Ng(o.children,l)),o})}function L5(a){var l,o,u,c=Ui,f=c.options,h=f===void 0?Ui:f,y=c.plugins,g=y===void 0?du:y,m=function(C,D,R){return R.startsWith(o)&&R.endsWith(o)&&R.replaceAll(o,"").length>0?".".concat(l):C},x=g.slice();x.push(function(C){C.type===ou&&C.value.includes("&")&&(C.props[0]=C.props[0].replace(N5,o).replace(u,m))}),h.prefix&&x.push(o5),x.push(i5);var S=function(C,D,R,$){D===void 0&&(D=""),R===void 0&&(R=""),$===void 0&&($="&"),l=$,o=D,u=new RegExp("\\".concat(o,"\\b"),"g");var B=C.replace(k5,""),V=n5(R||D?"".concat(R," ").concat(D," { ").concat(B," }"):B);h.namespace&&(V=Ng(V,h.namespace));var A=[];return Fo(V,l5(x.concat(r5(function(O){return A.push(O)})))),A};return S.hash=g.length?g.reduce(function(C,D){return D.name||ur(15),Di(C,D.name)},Rg).toString():"",S}var $5=new eu,Tf=L5(),kg=Ye.createContext({shouldForwardProp:void 0,styleSheet:$5,stylis:Tf});kg.Consumer;Ye.createContext(void 0);function Rf(){return b.useContext(kg)}var Lg=(function(){function a(l,o){var u=this;this.inject=function(c,f){f===void 0&&(f=Tf);var h=u.name+f.hash;c.hasNameForId(u.id,h)||c.insertRules(u.id,h,f(u.rules,h,"@keyframes"))},this.name=l,this.id="sc-keyframes-".concat(l),this.rules=o,Vf(this,function(){throw ur(12,String(u.name))})}return a.prototype.getName=function(l){return l===void 0&&(l=Tf),this.name+l.hash},a})(),B5=function(a){return a>="A"&&a<="Z"};function D1(a){for(var l="",o=0;o<a.length;o++){var u=a[o];if(o===1&&u==="-"&&a[0]==="-")return a;B5(u)?l+="-"+u.toLowerCase():l+=u}return l.startsWith("ms-")?"-"+l:l}var $g=function(a){return a==null||a===!1||a===""},Bg=function(a){var l,o,u=[];for(var c in a){var f=a[c];a.hasOwnProperty(c)&&!$g(f)&&(Array.isArray(f)&&f.isCss||Hi(f)?u.push("".concat(D1(c),":"),f,";"):nr(f)?u.push.apply(u,ki(ki(["".concat(c," {")],Bg(f),!1),["}"],!1)):u.push("".concat(D1(c),": ").concat((l=c,(o=f)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||l in u5||l.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return u};function ga(a,l,o,u){if($g(a))return[];if(Xf(a))return[".".concat(a.styledComponentId)];if(Hi(a)){if(!Hi(f=a)||f.prototype&&f.prototype.isReactComponent||!l)return[a];var c=a(l);return ga(c,l,o,u)}var f;return a instanceof Lg?o?(a.inject(o,u),[a.getName(u)]):[a]:nr(a)?Bg(a):Array.isArray(a)?Array.prototype.concat.apply(du,a.map(function(h){return ga(h,l,o,u)})):[a.toString()]}function Ug(a){for(var l=0;l<a.length;l+=1){var o=a[l];if(Hi(o)&&!Xf(o))return!1}return!0}var U5=Mg(fu),H5=(function(){function a(l,o,u){this.rules=l,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&Ug(l),this.componentId=o,this.baseHash=Di(U5,o),this.baseStyle=u,eu.registerId(o)}return a.prototype.generateAndInjectStyles=function(l,o,u){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(l,o,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))c=Ua(c,this.staticRulesId);else{var f=Po(ga(this.rules,l,o,u)),h=Cf(Di(this.baseHash,f)>>>0);if(!o.hasNameForId(this.componentId,h)){var y=u(f,".".concat(h),void 0,this.componentId);o.insertRules(this.componentId,h,y)}c=Ua(c,h),this.staticRulesId=h}else{for(var g=Di(this.baseHash,u.hash),m="",x=0;x<this.rules.length;x++){var S=this.rules[x];if(typeof S=="string")m+=S;else if(S){var C=Po(ga(S,l,o,u));g=Di(g,C+x),m+=C}}if(m){var D=Cf(g>>>0);o.hasNameForId(this.componentId,D)||o.insertRules(this.componentId,D,u(m,".".concat(D),void 0,this.componentId)),c=Ua(c,D)}}return c},a})(),Kf=Ye.createContext(void 0);Kf.Consumer;var Vc={};function q5(a,l,o){var u=Xf(a),c=a,f=!Xc(a),h=l.attrs,y=h===void 0?du:h,g=l.componentId,m=g===void 0?(function(U,N){var M=typeof U!="string"?"sc":T1(U);Vc[M]=(Vc[M]||0)+1;var Z="".concat(M,"-").concat(Gf(fu+M+Vc[M]));return N?"".concat(N,"-").concat(Z):Z})(l.displayName,l.parentComponentId):g,x=l.displayName,S=x===void 0?(function(U){return Xc(U)?"styled.".concat(U):"Styled(".concat(h5(U),")")})(a):x,C=l.displayName&&l.componentId?"".concat(T1(l.displayName),"-").concat(l.componentId):l.componentId||m,D=u&&c.attrs?c.attrs.concat(y).filter(Boolean):y,R=l.shouldForwardProp;if(u&&c.shouldForwardProp){var $=c.shouldForwardProp;if(l.shouldForwardProp){var B=l.shouldForwardProp;R=function(U,N){return $(U,N)&&B(U,N)}}else R=$}var V=new H5(o,C,u?c.componentStyle:void 0);function A(U,N){return(function(M,Z,G){var J=M.attrs,ue=M.componentStyle,W=M.defaultProps,L=M.foldedComponentIds,ee=M.styledComponentId,ne=M.target,T=Ye.useContext(Kf),_=Rf(),Y=M.shouldForwardProp||_.shouldForwardProp,F=jg(Z,T,W)||Ui,oe=(function(fe,he,be){for(var $e,je=pt(pt({},he),{className:void 0,theme:be}),jt=0;jt<fe.length;jt+=1){var Wt=Hi($e=fe[jt])?$e(je):$e;for(var mt in Wt)je[mt]=mt==="className"?Ua(je[mt],Wt[mt]):mt==="style"?pt(pt({},je[mt]),Wt[mt]):Wt[mt]}return he.className&&(je.className=Ua(je.className,he.className)),je})(J,Z,F),ae=oe.as||ne,E={};for(var K in oe)oe[K]===void 0||K[0]==="$"||K==="as"||K==="theme"&&oe.theme===F||(K==="forwardedAs"?E.as=oe.forwardedAs:Y&&!Y(K,ae)||(E[K]=oe[K]));var le=(function(fe,he){var be=Rf(),$e=fe.generateAndInjectStyles(he,be.styleSheet,be.stylis);return $e})(ue,oe),ie=Ua(L,ee);return le&&(ie+=" "+le),oe.className&&(ie+=" "+oe.className),E[Xc(ae)&&!Tg.has(ae)?"class":"className"]=ie,G&&(E.ref=G),b.createElement(ae,E)})(O,U,N)}A.displayName=S;var O=Ye.forwardRef(A);return O.attrs=D,O.componentStyle=V,O.displayName=S,O.shouldForwardProp=R,O.foldedComponentIds=u?Ua(c.foldedComponentIds,c.styledComponentId):"",O.styledComponentId=C,O.target=u?c.target:a,Object.defineProperty(O,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(U){this._foldedDefaultProps=u?(function(N){for(var M=[],Z=1;Z<arguments.length;Z++)M[Z-1]=arguments[Z];for(var G=0,J=M;G<J.length;G++)jf(N,J[G],!0);return N})({},c.defaultProps,U):U}}),Vf(O,function(){return".".concat(O.styledComponentId)}),f&&_g(O,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),O}function N1(a,l){for(var o=[a[0]],u=0,c=l.length;u<c;u+=1)o.push(l[u],a[u+1]);return o}var k1=function(a){return Object.assign(a,{isCss:!0})};function va(a){for(var l=[],o=1;o<arguments.length;o++)l[o-1]=arguments[o];if(Hi(a)||nr(a))return k1(ga(N1(du,ki([a],l,!0))));var u=a;return l.length===0&&u.length===1&&typeof u[0]=="string"?ga(u):k1(ga(N1(u,l)))}function Mf(a,l,o){if(o===void 0&&(o=Ui),!l)throw ur(1,l);var u=function(c){for(var f=[],h=1;h<arguments.length;h++)f[h-1]=arguments[h];return a(l,o,va.apply(void 0,ki([c],f,!1)))};return u.attrs=function(c){return Mf(a,l,pt(pt({},o),{attrs:Array.prototype.concat(o.attrs,c).filter(Boolean)}))},u.withConfig=function(c){return Mf(a,l,pt(pt({},o),c))},u}var Hg=function(a){return Mf(q5,a)},w=Hg;Tg.forEach(function(a){w[a]=Hg(a)});var Y5=(function(){function a(l,o){this.rules=l,this.componentId=o,this.isStatic=Ug(l),eu.registerId(this.componentId+1)}return a.prototype.createStyles=function(l,o,u,c){var f=c(Po(ga(this.rules,o,u,c)),""),h=this.componentId+l;u.insertRules(h,h,f)},a.prototype.removeStyles=function(l,o){o.clearRules(this.componentId+l)},a.prototype.renderStyles=function(l,o,u,c){l>2&&eu.registerId(this.componentId+l),this.removeStyles(l,u),this.createStyles(l,o,u,c)},a})();function G5(a){for(var l=[],o=1;o<arguments.length;o++)l[o-1]=arguments[o];var u=va.apply(void 0,ki([a],l,!1)),c="sc-global-".concat(Gf(JSON.stringify(u))),f=new Y5(u,c),h=function(g){var m=Rf(),x=Ye.useContext(Kf),S=Ye.useRef(m.styleSheet.allocateGSInstance(c)).current;return m.styleSheet.server&&y(S,g,m.styleSheet,x,m.stylis),Ye.useLayoutEffect(function(){if(!m.styleSheet.server)return y(S,g,m.styleSheet,x,m.stylis),function(){return f.removeStyles(S,m.styleSheet)}},[S,g,m.styleSheet,x,m.stylis]),null};function y(g,m,x,S,C){if(f.isStatic)f.renderStyles(g,c5,x,C);else{var D=pt(pt({},m),{theme:jg(m,S,h.defaultProps)});f.renderStyles(g,D,x,C)}}return Ye.memo(h)}function Ft(a){for(var l=[],o=1;o<arguments.length;o++)l[o-1]=arguments[o];var u=Po(va.apply(void 0,ki([a],l,!1))),c=Gf(u);return new Lg(c,u)}var qg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},L1=Ye.createContext&&Ye.createContext(qg),X5=["attr","size","title"];function V5(a,l){if(a==null)return{};var o=K5(a,l),u,c;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)u=f[c],!(l.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(a,u)&&(o[u]=a[u])}return o}function K5(a,l){if(a==null)return{};var o={};for(var u in a)if(Object.prototype.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}function tu(){return tu=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(a[u]=o[u])}return a},tu.apply(this,arguments)}function $1(a,l){var o=Object.keys(a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(a);l&&(u=u.filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable})),o.push.apply(o,u)}return o}function nu(a){for(var l=1;l<arguments.length;l++){var o=arguments[l]!=null?arguments[l]:{};l%2?$1(Object(o),!0).forEach(function(u){Q5(a,u,o[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(o)):$1(Object(o)).forEach(function(u){Object.defineProperty(a,u,Object.getOwnPropertyDescriptor(o,u))})}return a}function Q5(a,l,o){return l=Z5(l),l in a?Object.defineProperty(a,l,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[l]=o,a}function Z5(a){var l=J5(a,"string");return typeof l=="symbol"?l:l+""}function J5(a,l){if(typeof a!="object"||!a)return a;var o=a[Symbol.toPrimitive];if(o!==void 0){var u=o.call(a,l);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(a)}function Yg(a){return a&&a.map((l,o)=>Ye.createElement(l.tag,nu({key:o},l.attr),Yg(l.child)))}function Te(a){return l=>Ye.createElement(F5,tu({attr:nu({},a.attr)},l),Yg(a.child))}function F5(a){var l=o=>{var{attr:u,size:c,title:f}=a,h=V5(a,X5),y=c||o.size||"1em",g;return o.className&&(g=o.className),a.className&&(g=(g?g+" ":"")+a.className),Ye.createElement("svg",tu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,u,h,{className:g,style:nu(nu({color:a.color||o.color},o.style),a.style),height:y,width:y,xmlns:"http://www.w3.org/2000/svg"}),f&&Ye.createElement("title",null,f),a.children)};return L1!==void 0?Ye.createElement(L1.Consumer,null,o=>l(o)):l(qg)}function Qf(a){return Te({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"},child:[]}]})(a)}function Zf(a){return Te({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"},child:[]}]})(a)}function Jf(a){return Te({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"},child:[]}]})(a)}function Ff(a){return Te({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"},child:[]}]})(a)}function Wf(a){return Te({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"},child:[]}]})(a)}function Gg(a){return Te({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"},child:[]}]})(a)}function W5(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(a)}function Xg(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(a)}function P5(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(a)}function Vg(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(a)}function I5(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(a)}function Pf(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(a)}function e3(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(a)}function Kg(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(a)}function B1(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}const t3="/instalearn/assets/vedioClip1-BQ1quwNm.mp4",n3="/instalearn/assets/test-BrOnAr5c.png",a3="/instalearn/assets/teacherProfilePic-DPrjIuTX.png",i3="/instalearn/assets/Slide1-D-tpOApl.png",l3="/instalearn/assets/Slide2-DwqY78Z4.png",r3="/instalearn/assets/Slide3-B6C07YuO.png",o3="/instalearn/assets/Slide4-BbthJNiF.png",u3="/instalearn/assets/Slide5-BsOulZPi.png",s3="/instalearn/assets/Slide6-8dQDHdn3.png",c3="/instalearn/assets/Slide7-CH0r16yo.png",f3="/instalearn/assets/Slide8-2dBFzKRc.png",d3="/instalearn/assets/Slide9-D8lJXVrP.png",Oo={},p3={videoClip1:t3},h3={test:n3},pu={teacherProfilePic:a3},sn={Slide1:i3,Slide2:l3,Slide3:r3,Slide4:o3,Slide5:u3,Slide6:s3,Slide7:c3,Slide8:f3,Slide9:d3};function m3(a){return Te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M304 384v-24c0-29 31.54-56.43 52-76 28.84-27.57 44-64.61 44-108 0-80-63.73-144-144-144a143.6 143.6 0 0 0-144 144c0 41.84 15.81 81.39 44 108 20.35 19.21 52 46.7 52 76v24m16 96h64m-80-48h96m-48-48V256"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M294 240s-21.51 16-38 16-38-16-38-16"},child:[]}]})(a)}const g3=w.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
`,v3=w.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,y3=w.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,b3=w.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,x3=w.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,S3=w.span`
  font-weight: 600;
  color: #0f172a;
`,w3=w.span`
  font-size: 12px;
  color: #64748b;
`,E3=w.button`
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
`,C3=w.div`
  position: relative;
  aspect-ratio: 1 / 1;
  background: linear-gradient(135deg, #eef2ff, #e0f7fa);
`,j3=w.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,T3=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px 6px 12px;
`,R3=w.div`
  display: flex;
  gap: 12px;
`,Ao=w.button`
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
`,M3=w.div`
  padding: 14px;
  display: grid;
  gap: 16px;
  background: #f8fafc;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
`,U1=w.section`
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 12px;
  padding: 14px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.02);
`,H1=w.h3`
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 8px 0;
`,z3=w.ul`
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 6px;
  li {
    font-size: 13px;
    color: #0f172a;
    line-height: 1.25;
  }
`,cn=w.div`
  height: ${a=>a.h||12}px;
  background: linear-gradient(90deg,#f2f5f9 0%,#eef2f7 50%,#f2f5f9 100%);
  border-radius: 8px;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% { opacity: .8 }
    50% { opacity: .4 }
    100% { opacity: .8 }
  }
`,q1=w.div`
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
`,Y1=w.button`
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 12px;
  cursor: pointer;
`,O3=w.div`
  gap: 10px;
`,A3=w.p`
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: 600;
  color: #0f172a;
`,_3=w.div`
  display: grid;
  gap: 8px;
`,D3=w.button.withConfig({shouldForwardProp:a=>a!=="$state"})`
  text-align: left;
  font-size: 13px;
  background: ${({$state:a})=>a==="correct"?"rgba(34,197,94,.12)":a==="wrong"?"rgba(239,68,68,.12)":"white"};
  color: #0f172a;
  border: 1px solid rgba(15,23,42,0.12);
  border-color: ${({$state:a})=>a==="correct"?"rgba(34,197,94,.5)":a==="wrong"?"rgba(239,68,68,.5)":"rgba(15,23,42,0.12)"};
  padding: 10px 12px;
  border-radius: 10px;
  cursor: pointer;
  &:hover { background: ${({$state:a})=>a==="idle"?"rgba(15,23,42,.04)":void 0}; }
`,Qg=w.small`
  color: #64748b;
  font-size: 12px;
`,N3=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,k3=w.div`
  position: relative;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 12px;
  background: #fff;
`,L3=w.div`
  overflow: hidden;
  height: auto;
`,$3=w.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 240ms ease;
`,B3=w.div`
  flex: 0 0 100%;
  padding: 20px;
  height: auto;
  overflow: visible;
`,U3=w.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  padding: 8px 0 10px;
`,H3=w.button.withConfig({shouldForwardProp:a=>a!=="$active"})`
  width: 7px;
  height: 7px;
  border-radius: 999px;
  border: none;
  background: ${({$active:a})=>a?"#0f172a":"rgba(15,23,42,.25)"};
  cursor: pointer;
`;async function q3(a){const o=await(await fetch(a,{mode:"cors"})).blob(),u=o.type||"image/jpeg",c=await o.arrayBuffer(),f=new Uint8Array(c);let h="";for(let g=0;g<f.byteLength;g++)h+=String.fromCharCode(f[g]);return{base64:btoa(h),mime:u}}function Y3({title:a,description:l,username:o}){return`
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
- Caption: "${l}"
- Author: "${o}"
`.trim()}async function G3(a){const{title:l,description:o,username:u,imageUrl:c}=a,f="AIzaSyDYGHcNYuuk43rrYSBVBIQGegzOGVtjGrw",{base64:h,mime:y}=await q3(c),m={contents:[{parts:[{text:Y3({title:l,description:o,username:u})},{inline_data:{mime_type:y,data:h}}]}],generationConfig:{temperature:.6,topK:32,topP:.9,maxOutputTokens:1200,response_mime_type:"application/json"}},x="https://generativelanguage.googleapis.com/v1beta",S=["gemini-2.5-flash","gemini-2.0-flash"];let C;for(const D of S)try{const R=`${x}/models/${D}:generateContent?key=${encodeURIComponent(f)}`,$=await fetch(R,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)});if(!$.ok)throw new Error(`Gemini error (${$.status}): ${await $.text()}`);const V=(await $.json())?.candidates?.[0]?.content?.parts?.[0]?.text;if(!V)throw new Error("Empty response from Gemini");let A;try{A=JSON.parse(V)}catch{const M=String(V).replace(/^```json\s*/i,"").replace(/^```\s*/i,"").replace(/```$/i,"").trim();A=JSON.parse(M)}const O=Array.isArray(A.bullets)?A.bullets.slice(0,5):[],U=Array.isArray(A.mcqs)?A.mcqs.slice(0,5):[];if(!O.length||!U.length)throw new Error("Malformed AI content");const N=U.map(M=>({question:String(M.question||"").slice(0,140),options:Array.isArray(M.options)&&M.options.length?M.options.slice(0,5):["Not present"],correctIndex:Number.isInteger(M.correctIndex)?M.correctIndex:0,explanation:M.explanation?String(M.explanation).slice(0,140):void 0}));return{bullets:O,mcqs:N}}catch(R){C=R}throw C||new Error("Gemini request failed")}function X3({avatarSrc:a=pu.teacherProfilePic,title:l,description:o,imgSrc:u,username:c,postUrl:f,onLikeChange:h,onBookmarkChange:y,onShare:g}){const[m,x]=b.useState(!1),[S,C]=b.useState(!1),[D,R]=b.useState(!1),[$,B]=b.useState(!1),[V,A]=b.useState(null),[O,U]=b.useState(null),[N,M]=b.useState(0),Z=O?.mcqs?.length||0,G=(ae,E,K)=>Math.max(E,Math.min(ae,K)),J=()=>M(ae=>G(ae-1,0,Z-1)),ue=()=>M(ae=>G(ae+1,0,Z-1));b.useEffect(()=>{Z!==0&&M(ae=>G(ae,0,Z-1))},[Z]);const W=ae=>{!D||!Z||(ae.key==="ArrowLeft"&&(ae.preventDefault(),J()),ae.key==="ArrowRight"&&(ae.preventDefault(),ue()))},L=m?"Unlike":"Like",ee=S?"Remove bookmark":"Bookmark",ne=()=>{const ae=!m;x(ae),h&&h(ae)},T=()=>{const ae=!S;C(ae),y&&y(ae)},_=b.useMemo(()=>({title:l,text:`${c} on Infographics — ${l}`,url:f}),[l,c,f]),Y=async()=>{try{navigator.share?await navigator.share(_):navigator.clipboard&&_.url&&(await navigator.clipboard.writeText(_.url),alert("Link copied to clipboard")),g&&g(_)}catch(ae){console.error("Share failed:",ae)}},F=async()=>{B(!0),A(null);try{const ae=await G3({title:l,description:o,username:c,imageUrl:u});U(ae),M(0)}catch(ae){console.error(ae),A(ae?.message||"Failed to generate content")}finally{B(!1)}},oe=()=>{const ae=!D;R(ae),ae&&!O&&!$&&F()};return d.jsxs(g3,{role:"article","aria-label":`${l} instagram-style post`,children:[d.jsxs(v3,{children:[d.jsxs(y3,{children:[d.jsx(b3,{src:a,alt:"avatar"}),d.jsxs(x3,{children:[d.jsx(S3,{children:l}),d.jsx(w3,{children:o})]})]}),d.jsx(E3,{"aria-label":D?"Close learn mode":"Open learn mode",title:D?"Close learn mode":"Learn more & quiz",onClick:oe,children:d.jsx(m3,{size:18})})]}),D?d.jsxs(M3,{"aria-live":"polite",onKeyDown:W,tabIndex:0,children:[d.jsxs(U1,{children:[d.jsx(H1,{children:"Know more (5 quick points)"}),$?d.jsxs("div",{style:{display:"grid",gap:8},children:[d.jsx(cn,{}),d.jsx(cn,{}),d.jsx(cn,{}),d.jsx(cn,{}),d.jsx(cn,{})]}):V?d.jsxs(q1,{children:[d.jsx("span",{style:{flex:1,minWidth:0},children:V}),d.jsx(Y1,{onClick:F,"aria-label":"Retry generating content",children:"Retry"})]}):d.jsx(z3,{children:O?.bullets?.map((ae,E)=>d.jsx("li",{children:ae},E))})]}),d.jsxs(U1,{children:[d.jsx(H1,{children:"Test your knowledge (5 MCQs)"}),$?d.jsxs("div",{style:{display:"grid",gap:10},children:[d.jsx(cn,{h:16}),d.jsx(cn,{h:36}),d.jsx(cn,{h:36}),d.jsx(cn,{h:36}),d.jsx(cn,{h:36})]}):V?d.jsxs(q1,{children:[d.jsx("span",{style:{flex:1,minWidth:0},children:"Can’t load questions."}),d.jsx(Y1,{onClick:F,children:"Retry"})]}):O?.mcqs?.length?d.jsx(k3,{"aria-roledescription":"carousel","aria-label":"MCQ carousel",children:d.jsx(L3,{children:d.jsx($3,{style:{transform:`translateX(-${N*100}%)`},children:O.mcqs.map((ae,E)=>d.jsx(B3,{role:"group","aria-roledescription":"slide","aria-label":`Question ${E+1} of ${O.mcqs.length}`,children:d.jsx(V3,{mcq:ae,index:E+1})},E))})})}):null,O?.mcqs?.length?d.jsx(U3,{role:"tablist","aria-label":"MCQ navigation dots",children:O.mcqs.map((ae,E)=>d.jsx(H3,{$active:E===N,"aria-label":`Go to question ${E+1}`,"aria-selected":E===N,role:"tab",onClick:()=>M(E),title:`Question ${E+1}`},E))}):null]}),d.jsxs(N3,{children:[d.jsx(Qg,{children:"AI stays within the infographic; short, clear answers only."}),d.jsx("button",{onClick:()=>R(!1),style:{background:"transparent",border:"1px solid rgba(15,23,42,.14)",borderRadius:10,padding:"6px 10px",cursor:"pointer",fontSize:12},"aria-label":"Back to image",title:"Back to image",children:"Back to image"})]})]}):d.jsx(C3,{children:d.jsx(j3,{src:u,alt:l})}),d.jsxs(T3,{children:[d.jsxs(R3,{children:[d.jsx(Ao,{onClick:ne,"aria-label":L,title:L,children:m?d.jsx(Qf,{size:22}):d.jsx(Zf,{size:22})}),d.jsx(Ao,{"aria-label":"Comment",title:"Comment",children:d.jsx(Wf,{size:20})}),d.jsx(Ao,{onClick:Y,"aria-label":"Share",title:"Share",children:d.jsx(Pf,{size:20})})]}),d.jsx(Ao,{onClick:T,"aria-label":ee,title:ee,children:S?d.jsx(Jf,{size:20}):d.jsx(Ff,{size:20})})]})]})}function V3({mcq:a,index:l}){const[o,u]=b.useState(null),c=f=>o===null?"idle":f===a.correctIndex?"correct":f===o&&o!==a.correctIndex?"wrong":"idle";return d.jsxs(O3,{"aria-label":`Question ${l}`,children:[d.jsxs(A3,{children:[l,". ",a.question]}),d.jsx(_3,{children:a.options.map((f,h)=>d.jsx(D3,{onClick:()=>u(h),$state:c(h),"aria-pressed":o===h,"aria-label":`Option ${h+1}`,children:f},h))}),o!==null&&d.jsxs(Qg,{children:[o===a.correctIndex?"✅ Correct.":"❌ Not quite.",a.explanation?` — ${a.explanation}`:""]})]})}var Kc={},Gl={},_o={},Do={},Qc={exports:{}},Zc,G1;function K3(){if(G1)return Zc;G1=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Zc=a,Zc}var Jc,X1;function Q3(){if(X1)return Jc;X1=1;var a=K3();function l(){}function o(){}return o.resetWarningCache=l,Jc=function(){function u(h,y,g,m,x,S){if(S!==a){var C=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw C.name="Invariant Violation",C}}u.isRequired=u;function c(){return u}var f={array:u,bigint:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:c,element:u,elementType:u,instanceOf:c,node:u,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:o,resetWarningCache:l};return f.PropTypes=f,f},Jc}var V1;function Zg(){return V1||(V1=1,Qc.exports=Q3()()),Qc.exports}var K1;function Z3(){return K1||(K1=1,(function(a){(function(l,o){o(a,ya(),Zg())})(Do,function(l,o,u){Object.defineProperty(l,"__esModule",{value:!0}),l.setHasSupportToCaptureOption=R;var c=h(o),f=h(u);function h(A){return A&&A.__esModule?A:{default:A}}var y=Object.assign||function(A){for(var O=1;O<arguments.length;O++){var U=arguments[O];for(var N in U)Object.prototype.hasOwnProperty.call(U,N)&&(A[N]=U[N])}return A};function g(A,O){var U={};for(var N in A)O.indexOf(N)>=0||Object.prototype.hasOwnProperty.call(A,N)&&(U[N]=A[N]);return U}function m(A,O){if(!(A instanceof O))throw new TypeError("Cannot call a class as a function")}var x=(function(){function A(O,U){for(var N=0;N<U.length;N++){var M=U[N];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(O,M.key,M)}}return function(O,U,N){return U&&A(O.prototype,U),N&&A(O,N),O}})();function S(A,O){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return O&&(typeof O=="object"||typeof O=="function")?O:A}function C(A,O){if(typeof O!="function"&&O!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof O);A.prototype=Object.create(O&&O.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}),O&&(Object.setPrototypeOf?Object.setPrototypeOf(A,O):A.__proto__=O)}var D=!1;function R(A){D=A}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){R(!0)}}))}catch{}function $(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return D?A:A.capture}function B(A){if("touches"in A){var O=A.touches[0],U=O.pageX,N=O.pageY;return{x:U,y:N}}var M=A.screenX,Z=A.screenY;return{x:M,y:Z}}var V=(function(A){C(O,A);function O(){var U;m(this,O);for(var N=arguments.length,M=Array(N),Z=0;Z<N;Z++)M[Z]=arguments[Z];var G=S(this,(U=O.__proto__||Object.getPrototypeOf(O)).call.apply(U,[this].concat(M)));return G._handleSwipeStart=G._handleSwipeStart.bind(G),G._handleSwipeMove=G._handleSwipeMove.bind(G),G._handleSwipeEnd=G._handleSwipeEnd.bind(G),G._onMouseDown=G._onMouseDown.bind(G),G._onMouseMove=G._onMouseMove.bind(G),G._onMouseUp=G._onMouseUp.bind(G),G._setSwiperRef=G._setSwiperRef.bind(G),G}return x(O,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,$({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,$({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(N){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(N))}},{key:"_onMouseMove",value:function(N){this.mouseDown&&this._handleSwipeMove(N)}},{key:"_onMouseUp",value:function(N){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(N)}},{key:"_handleSwipeStart",value:function(N){var M=B(N),Z=M.x,G=M.y;this.moveStart={x:Z,y:G},this.props.onSwipeStart(N)}},{key:"_handleSwipeMove",value:function(N){if(this.moveStart){var M=B(N),Z=M.x,G=M.y,J=Z-this.moveStart.x,ue=G-this.moveStart.y;this.moving=!0;var W=this.props.onSwipeMove({x:J,y:ue},N);W&&N.cancelable&&N.preventDefault(),this.movePosition={deltaX:J,deltaY:ue}}}},{key:"_handleSwipeEnd",value:function(N){this.props.onSwipeEnd(N);var M=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-M?this.props.onSwipeLeft(1,N):this.movePosition.deltaX>M&&this.props.onSwipeRight(1,N),this.movePosition.deltaY<-M?this.props.onSwipeUp(1,N):this.movePosition.deltaY>M&&this.props.onSwipeDown(1,N)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(N){this.swiper=N,this.props.innerRef(N)}},{key:"render",value:function(){var N=this.props;N.tagName;var M=N.className,Z=N.style,G=N.children;N.allowMouseEvents,N.onSwipeUp,N.onSwipeDown,N.onSwipeLeft,N.onSwipeRight,N.onSwipeStart,N.onSwipeMove,N.onSwipeEnd,N.innerRef,N.tolerance;var J=g(N,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return c.default.createElement(this.props.tagName,y({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:M,style:Z},J),G)}}]),O})(o.Component);V.displayName="ReactSwipe",V.propTypes={tagName:f.default.string,className:f.default.string,style:f.default.object,children:f.default.node,allowMouseEvents:f.default.bool,onSwipeUp:f.default.func,onSwipeDown:f.default.func,onSwipeLeft:f.default.func,onSwipeRight:f.default.func,onSwipeStart:f.default.func,onSwipeMove:f.default.func,onSwipeEnd:f.default.func,innerRef:f.default.func,tolerance:f.default.number.isRequired},V.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},l.default=V})})(Do)),Do}var Q1;function Jg(){return Q1||(Q1=1,(function(a){(function(l,o){o(a,Z3())})(_o,function(l,o){Object.defineProperty(l,"__esModule",{value:!0});var u=c(o);function c(f){return f&&f.__esModule?f:{default:f}}l.default=u.default})})(_o)),_o}var Xl={},Fc={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Z1;function Fg(){return Z1||(Z1=1,(function(a){(function(){var l={}.hasOwnProperty;function o(){for(var f="",h=0;h<arguments.length;h++){var y=arguments[h];y&&(f=c(f,u(y)))}return f}function u(f){if(typeof f=="string"||typeof f=="number")return f;if(typeof f!="object")return"";if(Array.isArray(f))return o.apply(null,f);if(f.toString!==Object.prototype.toString&&!f.toString.toString().includes("[native code]"))return f.toString();var h="";for(var y in f)l.call(f,y)&&f[y]&&(h=c(h,y));return h}function c(f,h){return h?f?f+" "+h:f+h:f}a.exports?(o.default=o,a.exports=o):window.classNames=o})()})(Fc)),Fc.exports}var J1;function Wg(){if(J1)return Xl;J1=1,Object.defineProperty(Xl,"__esModule",{value:!0}),Xl.default=void 0;var a=l(Fg());function l(c){return c&&c.__esModule?c:{default:c}}function o(c,f,h){return f in c?Object.defineProperty(c,f,{value:h,enumerable:!0,configurable:!0,writable:!0}):c[f]=h,c}var u={ROOT:function(f){return(0,a.default)(o({"carousel-root":!0},f||"",!!f))},CAROUSEL:function(f){return(0,a.default)({carousel:!0,"carousel-slider":f})},WRAPPER:function(f,h){return(0,a.default)({"thumbs-wrapper":!f,"slider-wrapper":f,"axis-horizontal":h==="horizontal","axis-vertical":h!=="horizontal"})},SLIDER:function(f,h){return(0,a.default)({thumbs:!f,slider:f,animated:!h})},ITEM:function(f,h,y){return(0,a.default)({thumb:!f,slide:f,selected:h,previous:y})},ARROW_PREV:function(f){return(0,a.default)({"control-arrow control-prev":!0,"control-disabled":f})},ARROW_NEXT:function(f){return(0,a.default)({"control-arrow control-next":!0,"control-disabled":f})},DOT:function(f){return(0,a.default)({dot:!0,selected:f})}};return Xl.default=u,Xl}var Vl={},Kl={},F1;function J3(){if(F1)return Kl;F1=1,Object.defineProperty(Kl,"__esModule",{value:!0}),Kl.outerWidth=void 0;var a=function(o){var u=o.offsetWidth,c=getComputedStyle(o);return u+=parseInt(c.marginLeft)+parseInt(c.marginRight),u};return Kl.outerWidth=a,Kl}var Ql={},W1;function If(){if(W1)return Ql;W1=1,Object.defineProperty(Ql,"__esModule",{value:!0}),Ql.default=void 0;var a=function(o,u,c){var f=o===0?o:o+u,h=c==="horizontal"?[f,0,0]:[0,f,0],y="translate3d",g="("+h.join(",")+")";return y+g};return Ql.default=a,Ql}var Zl={},P1;function Pg(){if(P1)return Zl;P1=1,Object.defineProperty(Zl,"__esModule",{value:!0}),Zl.default=void 0;var a=function(){return window};return Zl.default=a,Zl}var I1;function Ig(){if(I1)return Vl;I1=1,Object.defineProperty(Vl,"__esModule",{value:!0}),Vl.default=void 0;var a=g(ya()),l=h(Wg()),o=J3(),u=h(If()),c=h(Jg()),f=h(Pg());function h(G){return G&&G.__esModule?G:{default:G}}function y(){if(typeof WeakMap!="function")return null;var G=new WeakMap;return y=function(){return G},G}function g(G){if(G&&G.__esModule)return G;if(G===null||m(G)!=="object"&&typeof G!="function")return{default:G};var J=y();if(J&&J.has(G))return J.get(G);var ue={},W=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var L in G)if(Object.prototype.hasOwnProperty.call(G,L)){var ee=W?Object.getOwnPropertyDescriptor(G,L):null;ee&&(ee.get||ee.set)?Object.defineProperty(ue,L,ee):ue[L]=G[L]}return ue.default=G,J&&J.set(G,ue),ue}function m(G){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?m=function(ue){return typeof ue}:m=function(ue){return ue&&typeof Symbol=="function"&&ue.constructor===Symbol&&ue!==Symbol.prototype?"symbol":typeof ue},m(G)}function x(){return x=Object.assign||function(G){for(var J=1;J<arguments.length;J++){var ue=arguments[J];for(var W in ue)Object.prototype.hasOwnProperty.call(ue,W)&&(G[W]=ue[W])}return G},x.apply(this,arguments)}function S(G,J){if(!(G instanceof J))throw new TypeError("Cannot call a class as a function")}function C(G,J){for(var ue=0;ue<J.length;ue++){var W=J[ue];W.enumerable=W.enumerable||!1,W.configurable=!0,"value"in W&&(W.writable=!0),Object.defineProperty(G,W.key,W)}}function D(G,J,ue){return J&&C(G.prototype,J),G}function R(G,J){if(typeof J!="function"&&J!==null)throw new TypeError("Super expression must either be null or a function");G.prototype=Object.create(J&&J.prototype,{constructor:{value:G,writable:!0,configurable:!0}}),J&&$(G,J)}function $(G,J){return $=Object.setPrototypeOf||function(W,L){return W.__proto__=L,W},$(G,J)}function B(G){var J=O();return function(){var W=U(G),L;if(J){var ee=U(this).constructor;L=Reflect.construct(W,arguments,ee)}else L=W.apply(this,arguments);return V(this,L)}}function V(G,J){return J&&(m(J)==="object"||typeof J=="function")?J:A(G)}function A(G){if(G===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return G}function O(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function U(G){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(ue){return ue.__proto__||Object.getPrototypeOf(ue)},U(G)}function N(G,J,ue){return J in G?Object.defineProperty(G,J,{value:ue,enumerable:!0,configurable:!0,writable:!0}):G[J]=ue,G}var M=function(J){return J.hasOwnProperty("key")},Z=(function(G){R(ue,G);var J=B(ue);function ue(W){var L;return S(this,ue),L=J.call(this,W),N(A(L),"itemsWrapperRef",void 0),N(A(L),"itemsListRef",void 0),N(A(L),"thumbsRef",void 0),N(A(L),"setItemsWrapperRef",function(ee){L.itemsWrapperRef=ee}),N(A(L),"setItemsListRef",function(ee){L.itemsListRef=ee}),N(A(L),"setThumbsRef",function(ee,ne){L.thumbsRef||(L.thumbsRef=[]),L.thumbsRef[ne]=ee}),N(A(L),"updateSizes",function(){if(!(!L.props.children||!L.itemsWrapperRef||!L.thumbsRef)){var ee=a.Children.count(L.props.children),ne=L.itemsWrapperRef.clientWidth,T=L.props.thumbWidth?L.props.thumbWidth:(0,o.outerWidth)(L.thumbsRef[0]),_=Math.floor(ne/T),Y=_<ee,F=Y?ee-_:0;L.setState(function(oe,ae){return{itemSize:T,visibleItems:_,firstItem:Y?L.getFirstItem(ae.selectedItem):0,lastPosition:F,showArrows:Y}})}}),N(A(L),"handleClickItem",function(ee,ne,T){if(!M(T)||T.key==="Enter"){var _=L.props.onSelectItem;typeof _=="function"&&_(ee,ne)}}),N(A(L),"onSwipeStart",function(){L.setState({swiping:!0})}),N(A(L),"onSwipeEnd",function(){L.setState({swiping:!1})}),N(A(L),"onSwipeMove",function(ee){var ne=ee.x;if(!L.state.itemSize||!L.itemsWrapperRef||!L.state.visibleItems)return!1;var T=0,_=a.Children.count(L.props.children),Y=-(L.state.firstItem*100)/L.state.visibleItems,F=Math.max(_-L.state.visibleItems,0),oe=-F*100/L.state.visibleItems;Y===T&&ne>0&&(ne=0),Y===oe&&ne<0&&(ne=0);var ae=L.itemsWrapperRef.clientWidth,E=Y+100/(ae/ne);return L.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(K){L.itemsListRef.style[K]=(0,u.default)(E,"%",L.props.axis)}),!0}),N(A(L),"slideRight",function(ee){L.moveTo(L.state.firstItem-(typeof ee=="number"?ee:1))}),N(A(L),"slideLeft",function(ee){L.moveTo(L.state.firstItem+(typeof ee=="number"?ee:1))}),N(A(L),"moveTo",function(ee){ee=ee<0?0:ee,ee=ee>=L.state.lastPosition?L.state.lastPosition:ee,L.setState({firstItem:ee})}),L.state={selectedItem:W.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},L}return D(ue,[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(L){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==L.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,f.default)().addEventListener("resize",this.updateSizes),(0,f.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,f.default)().removeEventListener("resize",this.updateSizes),(0,f.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(L){var ee=L;return L>=this.state.lastPosition&&(ee=this.state.lastPosition),L<this.state.firstItem+this.state.visibleItems&&(ee=this.state.firstItem),L<this.state.firstItem&&(ee=L),ee}},{key:"renderItems",value:function(){var L=this;return this.props.children.map(function(ee,ne){var T=l.default.ITEM(!1,ne===L.state.selectedItem),_={key:ne,ref:function(F){return L.setThumbsRef(F,ne)},className:T,onClick:L.handleClickItem.bind(L,ne,L.props.children[ne]),onKeyDown:L.handleClickItem.bind(L,ne,L.props.children[ne]),"aria-label":"".concat(L.props.labels.item," ").concat(ne+1),style:{width:L.props.thumbWidth}};return a.default.createElement("li",x({},_,{role:"button",tabIndex:0}),ee)})}},{key:"render",value:function(){var L=this;if(!this.props.children)return null;var ee=a.Children.count(this.props.children)>1,ne=this.state.showArrows&&this.state.firstItem>0,T=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,_={},Y=-this.state.firstItem*(this.state.itemSize||0),F=(0,u.default)(Y,"px",this.props.axis),oe=this.props.transitionTime+"ms";return _={WebkitTransform:F,MozTransform:F,MsTransform:F,OTransform:F,transform:F,msTransform:F,WebkitTransitionDuration:oe,MozTransitionDuration:oe,MsTransitionDuration:oe,OTransitionDuration:oe,transitionDuration:oe,msTransitionDuration:oe},a.default.createElement("div",{className:l.default.CAROUSEL(!1)},a.default.createElement("div",{className:l.default.WRAPPER(!1),ref:this.setItemsWrapperRef},a.default.createElement("button",{type:"button",className:l.default.ARROW_PREV(!ne),onClick:function(){return L.slideRight()},"aria-label":this.props.labels.leftArrow}),ee?a.default.createElement(c.default,{tagName:"ul",className:l.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:_,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):a.default.createElement("ul",{className:l.default.SLIDER(!1,this.state.swiping),ref:function(E){return L.setItemsListRef(E)},style:_},this.renderItems()),a.default.createElement("button",{type:"button",className:l.default.ARROW_NEXT(!T),onClick:function(){return L.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}]),ue})(a.Component);return Vl.default=Z,N(Z,"displayName","Thumbs"),N(Z,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350}),Vl}var Jl={},em;function F3(){if(em)return Jl;em=1,Object.defineProperty(Jl,"__esModule",{value:!0}),Jl.default=void 0;var a=function(){return document};return Jl.default=a,Jl}var Lt={},tm;function ev(){if(tm)return Lt;tm=1,Object.defineProperty(Lt,"__esModule",{value:!0}),Lt.setPosition=Lt.getPosition=Lt.isKeyboardEvent=Lt.defaultStatusFormatter=Lt.noop=void 0;var a=ya(),l=o(If());function o(g){return g&&g.__esModule?g:{default:g}}var u=function(){};Lt.noop=u;var c=function(m,x){return"".concat(m," of ").concat(x)};Lt.defaultStatusFormatter=c;var f=function(m){return m?m.hasOwnProperty("key"):!1};Lt.isKeyboardEvent=f;var h=function(m,x){if(x.infiniteLoop&&++m,m===0)return 0;var S=a.Children.count(x.children);if(x.centerMode&&x.axis==="horizontal"){var C=-m*x.centerSlidePercentage,D=S-1;return m&&(m!==D||x.infiniteLoop)?C+=(100-x.centerSlidePercentage)/2:m===D&&(C+=100-x.centerSlidePercentage),C}return-m*100};Lt.getPosition=h;var y=function(m,x){var S={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(C){S[C]=(0,l.default)(m,"%",x)}),S};return Lt.setPosition=y,Lt}var tn={},nm;function W3(){if(nm)return tn;nm=1,Object.defineProperty(tn,"__esModule",{value:!0}),tn.fadeAnimationHandler=tn.slideStopSwipingHandler=tn.slideSwipeAnimationHandler=tn.slideAnimationHandler=void 0;var a=ya(),l=u(If()),o=ev();function u(S){return S&&S.__esModule?S:{default:S}}function c(S,C){var D=Object.keys(S);if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(S);C&&(R=R.filter(function($){return Object.getOwnPropertyDescriptor(S,$).enumerable})),D.push.apply(D,R)}return D}function f(S){for(var C=1;C<arguments.length;C++){var D=arguments[C]!=null?arguments[C]:{};C%2?c(Object(D),!0).forEach(function(R){h(S,R,D[R])}):Object.getOwnPropertyDescriptors?Object.defineProperties(S,Object.getOwnPropertyDescriptors(D)):c(Object(D)).forEach(function(R){Object.defineProperty(S,R,Object.getOwnPropertyDescriptor(D,R))})}return S}function h(S,C,D){return C in S?Object.defineProperty(S,C,{value:D,enumerable:!0,configurable:!0,writable:!0}):S[C]=D,S}var y=function(C,D){var R={},$=D.selectedItem,B=$,V=a.Children.count(C.children)-1,A=C.infiniteLoop&&($<0||$>V);if(A)return B<0?C.centerMode&&C.centerSlidePercentage&&C.axis==="horizontal"?R.itemListStyle=(0,o.setPosition)(-(V+2)*C.centerSlidePercentage-(100-C.centerSlidePercentage)/2,C.axis):R.itemListStyle=(0,o.setPosition)(-(V+2)*100,C.axis):B>V&&(R.itemListStyle=(0,o.setPosition)(0,C.axis)),R;var O=(0,o.getPosition)($,C),U=(0,l.default)(O,"%",C.axis),N=C.transitionTime+"ms";return R.itemListStyle={WebkitTransform:U,msTransform:U,OTransform:U,transform:U},D.swiping||(R.itemListStyle=f(f({},R.itemListStyle),{},{WebkitTransitionDuration:N,MozTransitionDuration:N,OTransitionDuration:N,transitionDuration:N,msTransitionDuration:N})),R};tn.slideAnimationHandler=y;var g=function(C,D,R,$){var B={},V=D.axis==="horizontal",A=a.Children.count(D.children),O=0,U=(0,o.getPosition)(R.selectedItem,D),N=D.infiniteLoop?(0,o.getPosition)(A-1,D)-100:(0,o.getPosition)(A-1,D),M=V?C.x:C.y,Z=M;U===O&&M>0&&(Z=0),U===N&&M<0&&(Z=0);var G=U+100/(R.itemSize/Z),J=Math.abs(M)>D.swipeScrollTolerance;return D.infiniteLoop&&J&&(R.selectedItem===0&&G>-100?G-=A*100:R.selectedItem===A-1&&G<-A*100&&(G+=A*100)),(!D.preventMovementUntilSwipeScrollTolerance||J||R.swipeMovementStarted)&&(R.swipeMovementStarted||$({swipeMovementStarted:!0}),B.itemListStyle=(0,o.setPosition)(G,D.axis)),J&&!R.cancelClick&&$({cancelClick:!0}),B};tn.slideSwipeAnimationHandler=g;var m=function(C,D){var R=(0,o.getPosition)(D.selectedItem,C),$=(0,o.setPosition)(R,C.axis);return{itemListStyle:$}};tn.slideStopSwipingHandler=m;var x=function(C,D){var R=C.transitionTime+"ms",$="ease-in-out",B={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:$,msTransitionTimingFunction:$,MozTransitionTimingFunction:$,WebkitTransitionTimingFunction:$,OTransitionTimingFunction:$};return D.swiping||(B=f(f({},B),{},{WebkitTransitionDuration:R,MozTransitionDuration:R,OTransitionDuration:R,transitionDuration:R,msTransitionDuration:R})),{slideStyle:B,selectedStyle:f(f({},B),{},{opacity:1,position:"relative"}),prevStyle:f({},B)}};return tn.fadeAnimationHandler=x,tn}var am;function P3(){if(am)return Gl;am=1,Object.defineProperty(Gl,"__esModule",{value:!0}),Gl.default=void 0;var a=x(ya()),l=g(Jg()),o=g(Wg()),u=g(Ig()),c=g(F3()),f=g(Pg()),h=ev(),y=W3();function g(W){return W&&W.__esModule?W:{default:W}}function m(){if(typeof WeakMap!="function")return null;var W=new WeakMap;return m=function(){return W},W}function x(W){if(W&&W.__esModule)return W;if(W===null||S(W)!=="object"&&typeof W!="function")return{default:W};var L=m();if(L&&L.has(W))return L.get(W);var ee={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var T in W)if(Object.prototype.hasOwnProperty.call(W,T)){var _=ne?Object.getOwnPropertyDescriptor(W,T):null;_&&(_.get||_.set)?Object.defineProperty(ee,T,_):ee[T]=W[T]}return ee.default=W,L&&L.set(W,ee),ee}function S(W){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?S=function(ee){return typeof ee}:S=function(ee){return ee&&typeof Symbol=="function"&&ee.constructor===Symbol&&ee!==Symbol.prototype?"symbol":typeof ee},S(W)}function C(){return C=Object.assign||function(W){for(var L=1;L<arguments.length;L++){var ee=arguments[L];for(var ne in ee)Object.prototype.hasOwnProperty.call(ee,ne)&&(W[ne]=ee[ne])}return W},C.apply(this,arguments)}function D(W,L){var ee=Object.keys(W);if(Object.getOwnPropertySymbols){var ne=Object.getOwnPropertySymbols(W);L&&(ne=ne.filter(function(T){return Object.getOwnPropertyDescriptor(W,T).enumerable})),ee.push.apply(ee,ne)}return ee}function R(W){for(var L=1;L<arguments.length;L++){var ee=arguments[L]!=null?arguments[L]:{};L%2?D(Object(ee),!0).forEach(function(ne){J(W,ne,ee[ne])}):Object.getOwnPropertyDescriptors?Object.defineProperties(W,Object.getOwnPropertyDescriptors(ee)):D(Object(ee)).forEach(function(ne){Object.defineProperty(W,ne,Object.getOwnPropertyDescriptor(ee,ne))})}return W}function $(W,L){if(!(W instanceof L))throw new TypeError("Cannot call a class as a function")}function B(W,L){for(var ee=0;ee<L.length;ee++){var ne=L[ee];ne.enumerable=ne.enumerable||!1,ne.configurable=!0,"value"in ne&&(ne.writable=!0),Object.defineProperty(W,ne.key,ne)}}function V(W,L,ee){return L&&B(W.prototype,L),W}function A(W,L){if(typeof L!="function"&&L!==null)throw new TypeError("Super expression must either be null or a function");W.prototype=Object.create(L&&L.prototype,{constructor:{value:W,writable:!0,configurable:!0}}),L&&O(W,L)}function O(W,L){return O=Object.setPrototypeOf||function(ne,T){return ne.__proto__=T,ne},O(W,L)}function U(W){var L=Z();return function(){var ne=G(W),T;if(L){var _=G(this).constructor;T=Reflect.construct(ne,arguments,_)}else T=ne.apply(this,arguments);return N(this,T)}}function N(W,L){return L&&(S(L)==="object"||typeof L=="function")?L:M(W)}function M(W){if(W===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return W}function Z(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function G(W){return G=Object.setPrototypeOf?Object.getPrototypeOf:function(ee){return ee.__proto__||Object.getPrototypeOf(ee)},G(W)}function J(W,L,ee){return L in W?Object.defineProperty(W,L,{value:ee,enumerable:!0,configurable:!0,writable:!0}):W[L]=ee,W}var ue=(function(W){A(ee,W);var L=U(ee);function ee(ne){var T;$(this,ee),T=L.call(this,ne),J(M(T),"thumbsRef",void 0),J(M(T),"carouselWrapperRef",void 0),J(M(T),"listRef",void 0),J(M(T),"itemsRef",void 0),J(M(T),"timer",void 0),J(M(T),"animationHandler",void 0),J(M(T),"setThumbsRef",function(Y){T.thumbsRef=Y}),J(M(T),"setCarouselWrapperRef",function(Y){T.carouselWrapperRef=Y}),J(M(T),"setListRef",function(Y){T.listRef=Y}),J(M(T),"setItemsRef",function(Y,F){T.itemsRef||(T.itemsRef=[]),T.itemsRef[F]=Y}),J(M(T),"autoPlay",function(){a.Children.count(T.props.children)<=1||(T.clearAutoPlay(),T.props.autoPlay&&(T.timer=setTimeout(function(){T.increment()},T.props.interval)))}),J(M(T),"clearAutoPlay",function(){T.timer&&clearTimeout(T.timer)}),J(M(T),"resetAutoPlay",function(){T.clearAutoPlay(),T.autoPlay()}),J(M(T),"stopOnHover",function(){T.setState({isMouseEntered:!0},T.clearAutoPlay)}),J(M(T),"startOnLeave",function(){T.setState({isMouseEntered:!1},T.autoPlay)}),J(M(T),"isFocusWithinTheCarousel",function(){return T.carouselWrapperRef?!!((0,c.default)().activeElement===T.carouselWrapperRef||T.carouselWrapperRef.contains((0,c.default)().activeElement)):!1}),J(M(T),"navigateWithKeyboard",function(Y){if(T.isFocusWithinTheCarousel()){var F=T.props.axis,oe=F==="horizontal",ae={ArrowUp:38,ArrowRight:39,ArrowDown:40,ArrowLeft:37},E=oe?ae.ArrowRight:ae.ArrowDown,K=oe?ae.ArrowLeft:ae.ArrowUp;E===Y.keyCode?T.increment():K===Y.keyCode&&T.decrement()}}),J(M(T),"updateSizes",function(){if(!(!T.state.initialized||!T.itemsRef||T.itemsRef.length===0)){var Y=T.props.axis==="horizontal",F=T.itemsRef[0];if(F){var oe=Y?F.clientWidth:F.clientHeight;T.setState({itemSize:oe}),T.thumbsRef&&T.thumbsRef.updateSizes()}}}),J(M(T),"setMountState",function(){T.setState({hasMount:!0}),T.updateSizes()}),J(M(T),"handleClickItem",function(Y,F){if(a.Children.count(T.props.children)!==0){if(T.state.cancelClick){T.setState({cancelClick:!1});return}T.props.onClickItem(Y,F),Y!==T.state.selectedItem&&T.setState({selectedItem:Y})}}),J(M(T),"handleOnChange",function(Y,F){a.Children.count(T.props.children)<=1||T.props.onChange(Y,F)}),J(M(T),"handleClickThumb",function(Y,F){T.props.onClickThumb(Y,F),T.moveTo(Y)}),J(M(T),"onSwipeStart",function(Y){T.setState({swiping:!0}),T.props.onSwipeStart(Y)}),J(M(T),"onSwipeEnd",function(Y){T.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),T.props.onSwipeEnd(Y),T.clearAutoPlay(),T.state.autoPlay&&T.autoPlay()}),J(M(T),"onSwipeMove",function(Y,F){T.props.onSwipeMove(F);var oe=T.props.swipeAnimationHandler(Y,T.props,T.state,T.setState.bind(M(T)));return T.setState(R({},oe)),!!Object.keys(oe).length}),J(M(T),"decrement",function(){var Y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;T.moveTo(T.state.selectedItem-(typeof Y=="number"?Y:1))}),J(M(T),"increment",function(){var Y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;T.moveTo(T.state.selectedItem+(typeof Y=="number"?Y:1))}),J(M(T),"moveTo",function(Y){if(typeof Y=="number"){var F=a.Children.count(T.props.children)-1;Y<0&&(Y=T.props.infiniteLoop?F:0),Y>F&&(Y=T.props.infiniteLoop?0:F),T.selectItem({selectedItem:Y}),T.state.autoPlay&&T.state.isMouseEntered===!1&&T.resetAutoPlay()}}),J(M(T),"onClickNext",function(){T.increment(1)}),J(M(T),"onClickPrev",function(){T.decrement(1)}),J(M(T),"onSwipeForward",function(){T.increment(1),T.props.emulateTouch&&T.setState({cancelClick:!0})}),J(M(T),"onSwipeBackwards",function(){T.decrement(1),T.props.emulateTouch&&T.setState({cancelClick:!0})}),J(M(T),"changeItem",function(Y){return function(F){(!(0,h.isKeyboardEvent)(F)||F.key==="Enter")&&T.moveTo(Y)}}),J(M(T),"selectItem",function(Y){T.setState(R({previousItem:T.state.selectedItem},Y),function(){T.setState(T.animationHandler(T.props,T.state))}),T.handleOnChange(Y.selectedItem,a.Children.toArray(T.props.children)[Y.selectedItem])}),J(M(T),"getInitialImage",function(){var Y=T.props.selectedItem,F=T.itemsRef&&T.itemsRef[Y],oe=F&&F.getElementsByTagName("img")||[];return oe[0]}),J(M(T),"getVariableItemHeight",function(Y){var F=T.itemsRef&&T.itemsRef[Y];if(T.state.hasMount&&F&&F.children.length){var oe=F.children[0].getElementsByTagName("img")||[];if(oe.length>0){var ae=oe[0];if(!ae.complete){var E=function ie(){T.forceUpdate(),ae.removeEventListener("load",ie)};ae.addEventListener("load",E)}}var K=oe[0]||F.children[0],le=K.clientHeight;return le>0?le:null}return null});var _={initialized:!1,previousItem:ne.selectedItem,selectedItem:ne.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:ne.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return T.animationHandler=typeof ne.animationHandler=="function"&&ne.animationHandler||ne.animationHandler==="fade"&&y.fadeAnimationHandler||y.slideAnimationHandler,T.state=R(R({},_),T.animationHandler(ne,_)),T}return V(ee,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(T,_){!T.children&&this.props.children&&!this.state.initialized&&this.setupCarousel(),!T.autoFocus&&this.props.autoFocus&&this.forceFocus(),_.swiping&&!this.state.swiping&&this.setState(R({},this.props.stopSwipingHandler(this.props,this.state))),(T.selectedItem!==this.props.selectedItem||T.centerMode!==this.props.centerMode)&&(this.updateSizes(),this.moveTo(this.props.selectedItem)),T.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var T=this;this.bindEvents(),this.state.autoPlay&&a.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},function(){var _=T.getInitialImage();_&&!_.complete?_.addEventListener("load",T.setMountState):T.setMountState()})}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var T=this.carouselWrapperRef;this.props.stopOnHover&&T&&(T.addEventListener("mouseenter",this.stopOnHover),T.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var T=this.carouselWrapperRef;this.props.stopOnHover&&T&&(T.removeEventListener("mouseenter",this.stopOnHover),T.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,f.default)().addEventListener("resize",this.updateSizes),(0,f.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,c.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,f.default)().removeEventListener("resize",this.updateSizes),(0,f.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var T=this.getInitialImage();T&&T.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,c.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var T;(T=this.carouselWrapperRef)===null||T===void 0||T.focus()}},{key:"renderItems",value:function(T){var _=this;return this.props.children?a.Children.map(this.props.children,function(Y,F){var oe=F===_.state.selectedItem,ae=F===_.state.previousItem,E=oe&&_.state.selectedStyle||ae&&_.state.prevStyle||_.state.slideStyle||{};_.props.centerMode&&_.props.axis==="horizontal"&&(E=R(R({},E),{},{minWidth:_.props.centerSlidePercentage+"%"})),_.state.swiping&&_.state.swipeMovementStarted&&(E=R(R({},E),{},{pointerEvents:"none"}));var K={ref:function(ie){return _.setItemsRef(ie,F)},key:"itemKey"+F+(T?"clone":""),className:o.default.ITEM(!0,F===_.state.selectedItem,F===_.state.previousItem),onClick:_.handleClickItem.bind(_,F,Y),style:E};return a.default.createElement("li",K,_.props.renderItem(Y,{isSelected:F===_.state.selectedItem,isPrevious:F===_.state.previousItem}))}):[]}},{key:"renderControls",value:function(){var T=this,_=this.props,Y=_.showIndicators,F=_.labels,oe=_.renderIndicator,ae=_.children;return Y?a.default.createElement("ul",{className:"control-dots"},a.Children.map(ae,function(E,K){return oe&&oe(T.changeItem(K),K===T.state.selectedItem,K,F.item)})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?a.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,a.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return!this.props.showThumbs||!this.props.children||a.Children.count(this.props.children)===0?null:a.default.createElement(u.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children))}},{key:"render",value:function(){var T=this;if(!this.props.children||a.Children.count(this.props.children)===0)return null;var _=this.props.swipeable&&a.Children.count(this.props.children)>1,Y=this.props.axis==="horizontal",F=this.props.showArrows&&a.Children.count(this.props.children)>1,oe=F&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,ae=F&&(this.state.selectedItem<a.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,E=this.renderItems(!0),K=E.shift(),le=E.pop(),ie={className:o.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},fe={};if(Y){if(ie.onSwipeLeft=this.onSwipeForward,ie.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var he=this.getVariableItemHeight(this.state.selectedItem);fe.height=he||"auto"}}else ie.onSwipeUp=this.props.verticalSwipe==="natural"?this.onSwipeBackwards:this.onSwipeForward,ie.onSwipeDown=this.props.verticalSwipe==="natural"?this.onSwipeForward:this.onSwipeBackwards,ie.style=R(R({},ie.style),{},{height:this.state.itemSize}),fe.height=this.state.itemSize;return a.default.createElement("div",{"aria-label":this.props.ariaLabel,className:o.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},a.default.createElement("div",{className:o.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,oe,this.props.labels.leftArrow),a.default.createElement("div",{className:o.default.WRAPPER(!0,this.props.axis),style:fe},_?a.default.createElement(l.default,C({tagName:"ul",innerRef:this.setListRef},ie,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&le,this.renderItems(),this.props.infiniteLoop&&K):a.default.createElement("ul",{className:o.default.SLIDER(!0,this.state.swiping),ref:function($e){return T.setListRef($e)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&le,this.renderItems(),this.props.infiniteLoop&&K)),this.props.renderArrowNext(this.onClickNext,ae,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}]),ee})(a.default.Component);return Gl.default=ue,J(ue,"displayName","Carousel"),J(ue,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:h.noop,onClickThumb:h.noop,onChange:h.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(L,ee,ne){return a.default.createElement("button",{type:"button","aria-label":ne,className:o.default.ARROW_PREV(!ee),onClick:L})},renderArrowNext:function(L,ee,ne){return a.default.createElement("button",{type:"button","aria-label":ne,className:o.default.ARROW_NEXT(!ee),onClick:L})},renderIndicator:function(L,ee,ne,T){return a.default.createElement("li",{className:o.default.DOT(ee),onClick:L,onKeyDown:L,value:ne,key:ne,role:"button",tabIndex:0,"aria-label":"".concat(T," ").concat(ne+1)})},renderItem:function(L){return L},renderThumbs:function(L){var ee=a.Children.map(L,function(ne){var T=ne;if(ne.type!=="img"&&(T=a.Children.toArray(ne.props.children).find(function(_){return _.type==="img"})),!!T)return T});return ee.filter(function(ne){return ne}).length===0?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):ee},statusFormatter:h.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:y.slideSwipeAnimationHandler,stopSwipingHandler:y.slideStopSwipingHandler}),Gl}var im={},lm;function I3(){return lm||(lm=1),im}var rm;function e4(){return rm||(rm=1,(function(a){Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"Carousel",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(a,"CarouselProps",{enumerable:!0,get:function(){return o.CarouselProps}}),Object.defineProperty(a,"Thumbs",{enumerable:!0,get:function(){return u.default}});var l=c(P3()),o=I3(),u=c(Ig());function c(f){return f&&f.__esModule?f:{default:f}}})(Kc)),Kc}var t4=e4();const n4=G5`
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
`,a4=w.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(2, 6, 23, 0.08);
`,i4=w.div`
  position: relative;
  aspect-ratio: 1 / 1; /* Instagram square */
  background: #f1f5f9;
`,l4=w.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,r4=w.div`
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
`,o4=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`,u4=w.div`
  display: flex;
  gap: 12px;
`,s4=w.button`
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
`,No=w.button`
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
`,c4=w.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,f4=w.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,d4=w.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,p4=w.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,h4=w.span`
  font-weight: 600;
  color: #0f172a;
`,m4=w.span`
  font-size: 12px;
  color: #64748b;
`;function g4({avatarSrc:a=pu.teacherProfilePic,data:l,likedDefault:o=!1,savedDefault:u=!1,onLikeChange:c,onBookmarkChange:f,onShare:h}){const{title:y="Infographic Title",description:g="",carouselImgSrc:m=[]}=l||{},[x,S]=b.useState(0),[C,D]=b.useState(o),[R,$]=b.useState(u),B=C?"Unlike post":"Like post",V=R?"Remove bookmark":"Bookmark",A=()=>{const M=!C;D(M),c&&c(M)},O=()=>{const M=!R;$(M),f&&f(M)},U=b.useMemo(()=>({title:y,text:`${y}`,url:typeof window<"u"?window.location.href:""}),[y]),N=async()=>{try{navigator.share?await navigator.share(U):navigator.clipboard&&(await navigator.clipboard.writeText(U.url),alert("Link copied to clipboard")),h&&h(U)}catch(M){console.error("Share failed:",M)}};return!m||m.length===0?null:d.jsxs(a4,{role:"article","aria-label":`${y} – Instagram multi-image post`,children:[d.jsxs(c4,{children:[d.jsxs(f4,{children:[d.jsx(d4,{src:a,alt:"avatar"}),d.jsxs(p4,{children:[d.jsx(h4,{children:y}),d.jsx(m4,{children:g})]})]}),d.jsx(s4,{"aria-label":"Post menu",title:"More",children:d.jsx(Gg,{size:18})})]}),d.jsx(n4,{}),d.jsxs(i4,{children:[d.jsx(t4.Carousel,{showThumbs:!1,showIndicators:!0,showStatus:!1,showArrows:!1,infiniteLoop:!1,autoPlay:!1,swipeable:!0,emulateTouch:!0,transitionTime:350,selectedItem:x,onChange:S,dynamicHeight:!1,children:m.map((M,Z)=>d.jsx("div",{children:d.jsx(l4,{src:M,alt:`${y} — ${Z+1}`})},Z))}),d.jsxs(r4,{children:[x+1,"/",m.length]})]}),d.jsxs(o4,{children:[d.jsxs(u4,{children:[d.jsx(No,{onClick:A,"aria-label":B,title:B,children:C?d.jsx(Qf,{size:22}):d.jsx(Zf,{size:22})}),d.jsx(No,{"aria-label":"Comment",title:"Comment",children:d.jsx(Wf,{size:20})}),d.jsx(No,{onClick:N,"aria-label":"Share",title:"Share",children:d.jsx(Pf,{size:20})})]}),d.jsx(No,{onClick:O,"aria-label":V,title:V,children:R?d.jsx(Jf,{size:20}):d.jsx(Ff,{size:20})})]})]})}const v4=w.article`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.12);
`,y4=w.div`
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
`,b4=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`,x4=w.div`
  display: flex;
  gap: 12px;
`,ko=w.button`
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
`,S4=w.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,w4=w.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,E4=w.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,C4=w.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,j4=w.span`
  font-weight: 600;
  color: #0f172a;
`,T4=w.span`
  font-size: 12px;
  color: #64748b;
`,R4=w.button`
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
`;function M4({avatarSrc:a=pu.teacherProfilePic,data:l,likedDefault:o=!1,savedDefault:u=!1,onLikeChange:c,onBookmarkChange:f,onShare:h}){const y=l?.videoClipSrc||l?.vedioClipSrc,{title:g,description:m,poster:x}=l||{},[S,C]=b.useState(o),[D,R]=b.useState(u),$=S?"Unlike post":"Like post",B=D?"Remove bookmark":"Bookmark",V=b.useRef(null),A=()=>{const N=!S;C(N),c&&c(N)},O=()=>{const N=!D;R(N),f&&f(N)},U=async()=>{const N={title:g||"Check this video",text:m||"",url:typeof window<"u"&&window.location?.href||(l?.url??"")};try{typeof navigator<"u"&&navigator.share?await navigator.share(N):typeof navigator<"u"&&navigator.clipboard&&N.url&&(await navigator.clipboard.writeText(N.url),alert("Link copied to clipboard")),h&&h(N)}catch(M){console.log(M)}};return b.useEffect(()=>{const N=V.current;if(!N)return;(async()=>{try{await N.play()}catch{}})()},[y]),y?d.jsxs(v4,{"aria-label":"Video post",children:[d.jsxs(S4,{children:[d.jsxs(w4,{children:[d.jsx(E4,{src:a,alt:"Author avatar"}),d.jsxs(C4,{children:[d.jsx(j4,{children:g}),d.jsx(T4,{children:m})]})]}),d.jsx(R4,{"aria-label":"Post menu",title:"More options",children:d.jsx(Gg,{size:18})})]}),d.jsx(y4,{children:d.jsx("video",{ref:V,src:y,controls:!0,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",poster:x,"aria-label":g||"Video clip"})}),d.jsxs(b4,{children:[d.jsxs(x4,{children:[d.jsx(ko,{onClick:A,"aria-label":$,title:$,children:S?d.jsx(Qf,{size:22}):d.jsx(Zf,{size:22})}),d.jsx(ko,{"aria-label":"Comment",title:"Comment",children:d.jsx(Wf,{size:20})}),d.jsx(ko,{onClick:U,"aria-label":"Share",title:"Share",children:d.jsx(Pf,{size:20})})]}),d.jsx(ko,{onClick:O,"aria-label":B,title:B,children:D?d.jsx(Jf,{size:20}):d.jsx(Ff,{size:20})})]})]}):null}const z4=[{id:1,name:"Sense of Collective Identity",img:Oo.CollectiveIdentity||"https://images.unsplash.com/photo-1506765515384-028b60a970df?w=400&h=400&fit=crop",hasNew:!0,slides:[h3.test,"https://images.unsplash.com/photo-1554189097-ffe88e998a2b?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602524811998-8b90d1d03663?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1505066836043-7d9b15a1595d?w=800&h=1400&fit=crop"]},{id:2,name:"Understanding Diversity",img:Oo.Diversity||"https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1581091226825-c6a76aa2f4c1?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&h=1400&fit=crop"]},{id:3,name:"Nationalism in India",img:Oo.Nationalism||"https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1524310393100-34cb9cd27f1e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1533199829561-72f88a8f0c56?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602451126518-9b36f1b23543?w=800&h=1400&fit=crop"]},{id:4,name:"Globalisation and the Indian Economy",img:Oo.Globalisation||"https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1565372918675-bacb79cdd3a5?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&h=1400&fit=crop"]}];function O4({isOpen:a,activeIndex:l,setActiveIndex:o,total:u,onClose:c,duration:f=3e3}){const h=b.useRef(Date.now()),y=b.useRef(),g=b.useRef(0),m=b.useCallback(()=>{const S=Date.now()-h.current,C=Math.min(1,S/f);g.current=C,C>=1?l<u-1?o(D=>D+1):c():y.current=requestAnimationFrame(m)},[l,u,f,c,o]);return b.useEffect(()=>{if(a)return h.current=Date.now(),y.current=requestAnimationFrame(m),()=>cancelAnimationFrame(y.current)},[a,l,m]),{resetTimer:b.useCallback(()=>{h.current=Date.now()},[]),getProgressValue:()=>g.current}}const A4=w.div``,_4=w.div`
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
`,D4=w.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 16px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,N4=w.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border: 0;
  background: transparent;
  cursor: pointer;
`,k4=w.div`
  padding: 2px;
  border-radius: 999px;
  ${a=>a.$hasNew?va`
          background: linear-gradient(
            45deg,
            #f09433 0%,
            #e6683c 25%,
            #dc2743 50%,
            #cc2366 75%,
            #bc1888 100%
          );
        `:va`
          background: transparent;
        `};
`,L4=w.div`
  background: #fff;
  padding: 3px;
  border-radius: 999px;
`,$4=w.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 999px;
  user-drag: none;
  -webkit-user-drag: none;
`,B4=w.span`
  font-size: 12px;
  color: #1f2937;
  max-width: 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,U4=w.div`
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
`,H4=w.div`
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
`,q4=w.div`
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
`,Y4=w.div`
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
`,G4=w.div`
  height: 3px;
  flex: 1;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    height: 2.5px;
  }
`,X4=w.div`
  height: 100%;
  background: linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.95) 100%);
  transition: width 100ms linear;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
`,V4=w.div`
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
`,K4=w.img`
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
`,Q4=w.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
`,Z4=w.div`
  font-weight: 700;
  font-size: clamp(13px, 2.2vw, 15px);
  line-height: 1.2;
  letter-spacing: -0.01em;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,J4=w.div`
  font-size: clamp(11px, 1.8vw, 13px);
  opacity: 0.85;
  line-height: 1.2;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,F4=w.button`
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
`,W4=w.img`
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
`,om=w.div`
  position: absolute;
  top: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 10;
  touch-action: manipulation;
  
  ${a=>a.$side==="left"?va`
          left: 0; 
          width: 33.3333%;
        `:va`
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
`;function P4(a){return Te({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1.47978 1.4797C1.30227 1.65721 1.28614 1.93498 1.43137 2.13072L1.47978 2.1868L4.1695 4.87652C2.88817 5.77616 1.93052 7.11985 1.53259 8.70952C1.46554 8.97738 1.62834 9.24892 1.89621 9.31598C2.16409 9.38298 2.4356 9.22025 2.50266 8.95232C2.85564 7.54225 3.72742 6.35956 4.88944 5.59626L6.09586 6.80278C5.62419 7.28378 5.33334 7.94278 5.33334 8.66965C5.33334 10.1424 6.52724 11.3363 8 11.3363C8.72694 11.3363 9.38587 11.0454 9.86694 10.5738L13.8131 14.5201C14.0084 14.7154 14.3249 14.7154 14.5202 14.5201C14.6977 14.3426 14.7139 14.0649 14.5686 13.8691L14.5202 13.813L10.4445 9.73692L10.4453 9.73592L9.64527 8.93732L7.732 7.02445L7.73334 7.02392L5.81252 5.10513L5.81334 5.10392L5.05782 4.35024L2.18689 1.4797C1.99163 1.28444 1.67504 1.28444 1.47978 1.4797ZM6.80274 7.51025L9.15947 9.86698C8.85947 10.1575 8.4506 10.3363 8 10.3363C7.07954 10.3363 6.33334 9.59012 6.33334 8.66965C6.33334 8.21905 6.51216 7.81018 6.80274 7.51025ZM8 3.66658C7.33314 3.66658 6.68607 3.7653 6.07406 3.94992L6.89874 4.77404C7.25594 4.70346 7.62427 4.66658 8 4.66658C10.6154 4.66658 12.8733 6.45342 13.4981 8.95538C13.565 9.22325 13.8364 9.38618 14.1043 9.31932C14.3723 9.25238 14.5352 8.98098 14.4683 8.71305C13.7329 5.7684 11.077 3.66658 8 3.66658ZM8.1298 6.0061L10.664 8.53992C10.5961 7.16865 9.49814 6.07168 8.1298 6.0061Z"},child:[]}]})(a)}function I4({currentItem:a,isOpen:l,slideIndex:o,setSlideIndex:u,onClose:c,duration:f=3e3}){const h=a?.slides?.length||0,{resetTimer:y,getProgressValue:g}=O4({isOpen:l,activeIndex:o,setActiveIndex:u,total:h,onClose:c,duration:f}),m=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[,x]=b.useState(0);b.useEffect(()=>{if(!l||m)return;let R;const $=()=>{x(B=>B+1),R=requestAnimationFrame($)};return R=requestAnimationFrame($),()=>cancelAnimationFrame(R)},[l,m]);const S=b.useCallback(()=>{a&&(o<h-1?(u(R=>R+1),y()):c())},[a,o,h,y,c,u]),C=b.useCallback(()=>{a&&(o>0?(u(R=>R-1),y()):c())},[a,o,y,c,u]);b.useEffect(()=>{const R=$=>{l&&($.key==="Escape"&&c(),$.key==="ArrowRight"&&S(),$.key==="ArrowLeft"&&C())};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[l,S,C,c]),b.useEffect(()=>(l?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[l]);const D=R=>R<o?1:R>o?0:g();return!l||!a?null:d.jsx(U4,{onClick:c,"aria-label":"Story overlay",children:d.jsx(H4,{onClick:R=>R.stopPropagation(),children:d.jsxs(q4,{children:[d.jsx(Y4,{"aria-label":"Story progress",children:a.slides.map((R,$)=>d.jsx(G4,{"aria-label":`Progress track ${$+1}`,children:d.jsx(X4,{style:{width:`${D($)*100}%`}})},$))}),d.jsxs(V4,{children:[d.jsx(K4,{src:a.img,alt:a.name}),d.jsxs(Q4,{children:[d.jsx(Z4,{children:a.name}),d.jsx(J4,{children:"Chapter highlight"})]}),d.jsx(F4,{"aria-label":"Close story",onClick:c,title:"Close",children:d.jsx(P4,{})})]}),a.slides.map((R,$)=>d.jsx(W4,{src:R,alt:`Slide ${$+1}`,$active:$===o,draggable:!1},$)),d.jsx(om,{$side:"left",onClick:C,"aria-label":"Previous slide"}),d.jsx(om,{$side:"right",onClick:S,"aria-label":"Next slide"})]})})})}function e6({items:a,duration:l=3e3,onOpen:o,onClose:u,className:c}){const f=b.useRef(null),h=b.useRef(!1),y=b.useRef(0),g=b.useRef(0),[m,x]=b.useState(a||[]),[S,C]=b.useState(null),[D,R]=b.useState(0),$=m.find(M=>M.id===S)||null,B=!!S,V=M=>{R(0),C(M),x(Z=>Z.map(G=>G.id===M?{...G,hasNew:!1}:G)),o&&o(M)},A=()=>{C(null),u&&u()},O=M=>{h.current=!0,y.current=M.clientX,g.current=f.current?.scrollLeft||0,M.target.setPointerCapture?.(M.pointerId)},U=M=>{if(!h.current||!f.current)return;const Z=M.clientX-y.current;f.current.scrollLeft=g.current-Z},N=()=>{h.current=!1};return d.jsxs(A4,{className:c,children:[d.jsx(_4,{children:d.jsx(D4,{ref:f,onPointerDown:O,onPointerMove:U,onPointerUp:N,onPointerLeave:N,"aria-label":"Stories scroller",children:m.map(M=>d.jsxs(N4,{onClick:()=>V(M.id),"aria-label":`Open story ${M.name}`,title:M.name,children:[d.jsx(k4,{$hasNew:M.hasNew,children:d.jsx(L4,{children:d.jsx($4,{src:M.img,alt:M.name,draggable:!1})})}),d.jsx(B4,{children:M.name})]},M.id))})}),d.jsx(I4,{currentItem:$,isOpen:B,slideIndex:D,setSlideIndex:R,onClose:A,duration:l})]})}const t6=[{id:1,type:"infografic",title:"Sense of Collective Identity - Overview",description:"An overview of how shared history, culture, and values shape collective identity in society.",imgSrc:sn.Slide1},{id:2,type:"carousel",title:"Understanding Collective Identity",description:"Exploring the roots and importance of collective identity in social cohesion.",carouselImgSrc:[sn.Slide2,sn.Slide3,sn.Slide4,sn.Slide5,sn.Slide6]},{id:3,type:"carousel",title:"Symbols and Shared Culture",description:"How flags, festivals, and traditions represent unity and belonging.",carouselImgSrc:[sn.Slide7,sn.Slide8,sn.Slide9]},{id:5,type:"vedioClip",title:"Collective Identity in Action",description:"A short video summarizing real-world examples of collective identity shaping societies.",vedioClipSrc:p3.videoClip1},{id:6,type:"infografic",title:"Sense of Collective Identity - Overview",description:"An overview of how shared history, culture, and values shape collective identity in society.",imgSrc:sn.Slide5}],n6=w.div`
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
`;function a6(){return b.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]),d.jsxs(d.Fragment,{children:[d.jsx(e6,{items:z4,duration:3e3,onOpen:a=>console.log("opened:",a),onClose:()=>console.log("closed")}),d.jsx(n6,{children:d.jsx("div",{className:"d-flex gap-3 flex-column align-items-center mt-3",children:t6.map(a=>d.jsx("div",{style:{width:"100%"},children:a.type==="infografic"?d.jsx(X3,{title:a.title,description:a.description,imgSrc:a.imgSrc,badge:a.badge}):a.type==="carousel"?d.jsx(g4,{data:a}):a.type==="vedioClip"?d.jsx(M4,{data:a}):null},a.id))})})]})}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l6=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,o,u)=>u?u.toUpperCase():o.toLowerCase()),um=a=>{const l=l6(a);return l.charAt(0).toUpperCase()+l.slice(1)},tv=(...a)=>a.filter((l,o,u)=>!!l&&l.trim()!==""&&u.indexOf(l)===o).join(" ").trim(),r6=a=>{for(const l in a)if(l.startsWith("aria-")||l==="role"||l==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o6={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=b.forwardRef(({color:a="currentColor",size:l=24,strokeWidth:o=2,absoluteStrokeWidth:u,className:c="",children:f,iconNode:h,...y},g)=>b.createElement("svg",{ref:g,...o6,width:l,height:l,stroke:a,strokeWidth:u?Number(o)*24/Number(l):o,className:tv("lucide",c),...!f&&!r6(y)&&{"aria-hidden":"true"},...y},[...h.map(([m,x])=>b.createElement(m,x)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=(a,l)=>{const o=b.forwardRef(({className:u,...c},f)=>b.createElement(u6,{ref:f,iconNode:l,className:tv(`lucide-${i6(um(a))}`,`lucide-${a}`,u),...c}));return o.displayName=um(a),o};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],c6=ht("atom",s6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Ni=ht("book-open",f6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],p6=ht("bookmark",d6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],m6=ht("calculator",h6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],v6=ht("check",g6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],b6=ht("chevron-right",y6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],S6=ht("circle-check-big",x6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],E6=ht("code",w6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],sm=ht("flask-conical",C6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],cm=ht("graduation-cap",j6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],fm=ht("globe",T6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],M6=ht("grid-3x3",R6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z6=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],O6=ht("languages",z6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Lo=ht("lock",A6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],D6=ht("sparkles",_6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],k6=ht("x",N6),it={bgGrad:"linear-gradient(135deg, #8be3f5 0%, #9fefd0 50%, #b5f8b5 100%)",glass:"rgba(255,255,255,0.94)",border:"rgba(255,255,255,0.9)",text:"#0f172a",subtext:"#64748b",primary:"#0EA5E9",success:"#22c55e",shadow:"0 20px 60px rgba(0,0,0,0.15)",ring:"rgba(14,165,233,0.12)"},L6=Ft`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(30px, -30px) rotate(5deg); }
  50% { transform: translate(-20px, -50px) rotate(-5deg); }
  75% { transform: translate(40px, -20px) rotate(3deg); }
`,$6=Ft`0%,100%{opacity:.2}50%{opacity:.4}`,B6=Ft`0%,49%{opacity:1}50%,100%{opacity:0}`,U6=w.div`
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${it.bgGrad};
  font-family: "Inter", system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  padding: 1rem;
`,Wc=w.div`
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
  animation: ${$6} ${({$duration:a})=>a}s infinite ease-in-out;
  animation-delay: ${({$delay:a})=>a}s;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`,H6=w.div`
  position: absolute;
  opacity: 0.18;
  animation: ${L6} ${({$duration:a})=>a}s infinite ease-in-out;
  animation-delay: ${({$delay:a})=>a}s;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`,q6=w.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 100%;
`,Y6=w.div`
  width: 100%;
  max-width: 980px;
`,nv=w.div`
  background: ${it.glass};
  backdrop-filter: blur(18px);
  border: 1px solid ${it.border};
  box-shadow: ${it.shadow};
  border-radius: 1.25rem;
  padding: 1.5rem;
  @media (min-width: 768px) {
    border-radius: 1rem;
    padding: 2rem;
  }
`,G6=w(nv)`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`,X6=w.div`
  text-align: center;
  margin-bottom: 1.25rem;
  display: grid;
  gap: 0.75rem;
  justify-items: center;
  @media (min-width: 768px) {
    margin-bottom: 2rem;
    gap: 1rem;
  }
`,V6=w.h1`
  font-size: clamp(1.4rem, 5.2vw, 2.4rem);
  font-weight: 900;
  line-height: 1.15;
  color: ${it.text};
  margin: 0;
`,K6=w.span`
  background: linear-gradient(135deg, ${it.primary}, ${it.success});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 0.2px;
`,Q6=w.span`
  &::after {
    content: "|";
    animation: ${B6} 1s infinite;
    margin-left: 4px;
  }
`,dm=w.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`,pm=w.div`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 999px;
  background: linear-gradient(135deg, ${it.primary} 0%, ${it.success} 100%);
  display: grid;
  place-items: center;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 8px 24px rgba(14, 165, 233, 0.25);
`,hm=w.div`
  display: grid;
  gap: 0.1rem;
  h2 {
    margin: 0;
    font-size: 1.1rem;
    color: #0f172a;
    font-weight: 800;
  }
  p {
    margin: 0;
    font-size: 0.85rem;
    color: ${it.subtext};
  }
`,Z6=w.div`
  position: relative;
`,J6=w.select`
  width: 100%;
  padding: 1rem 2.75rem 1rem 1rem;
  border-radius: 0.9rem;
  border: 2px solid #e2e8f0;
  font-size: 1rem;
  font-weight: 600;
  color: ${it.text};
  background: white;
  appearance: none;
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s;
  &:focus {
    outline: none;
    border-color: ${it.primary};
    box-shadow: 0 0 0 6px ${it.ring};
  }
`,mm=w.div`
  display: grid;
  gap: 1.25rem;
`,F6=w.div`
  display: grid;
  gap: 0.9rem;
  grid-template-columns: 1fr;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,W6=w.div`
  border-radius: 1rem;
  padding: 1.1rem 1.1rem 0.9rem;
  background: #fff;
  border: 2px solid #e2e8f0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: grid;
  gap: 0.55rem;
  align-content: start;
  transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s,
    background 0.18s, color 0.18s;

  &:hover {
    transform: translateY(-2px);
    border-color: ${it.primary};
    box-shadow: 0 12px 28px rgba(14, 165, 233, 0.15);
  }

  ${({$selected:a})=>a&&`
    background: linear-gradient(135deg, #8be3f5 0%, #9fefd0 50%, #b5f8b5 100%);
    color: #000;
    border-color: rgba(0,0,0,0.15);
    box-shadow: 0 12px 36px rgba(250, 227, 140, 0.35);
    transform: translateY(-1px);
  `}
`,P6=w.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 0.75rem;
  span {
    font-weight: 800;
    letter-spacing: 0.2px;
  }
  .icon {
    opacity: 0.9;
  }
`,I6=w.div`
  margin-top: 0.35rem;
  padding-top: 0.5rem;
  border-top: 1px dashed rgba(0, 0, 0, 0.12);
  ${({$selected:a})=>a&&"border-top-color: rgba(0,0,0,.35);"}
`,eS=w.div`
  display: flex;
  flex-direction:column;
  flex-wrap: wrap;
  gap: 0.4rem;
`,tS=w.button`
  border: 0;
  cursor: pointer;
  font-size: 0.78rem;
  font-weight: 800;
  padding: 0.38rem 0.6rem;
  border-radius: 0.7rem;
  background: ${({$inSelected:a})=>a?"rgba(255,255,255,.9)":"#f1f5f9"};
  color: ${({$inSelected:a})=>a?"#0f172a":it.text};
  box-shadow: ${({$inSelected:a})=>a?"0 2px 6px rgba(0,0,0,.12)":"none"};
  border: 1px solid
    ${({$inSelected:a})=>a?"rgba(0,0,0,.12)":"#e2e8f0"};
  transition: transform 0.12s ease, box-shadow 0.18s ease;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
  }
  &:focus-visible {
    outline: 3px solid ${it.ring};
    outline-offset: 2px;
  }
`;function nS(){const a=kf(),[l,o]=b.useState(""),[u,c]=b.useState(""),[f,h]=b.useState(""),[y,g]=b.useState(0),[m,x]=b.useState(!1),[S,C]=b.useState(0),D=["Achieve Excellence","Master Every Subject","Unlock Your Potential"];b.useEffect(()=>{const U=m?40:80,N=2e3,M=setTimeout(()=>{const Z=D[y];if(!m&&S===Z.length){setTimeout(()=>x(!0),N);return}if(m&&S===0){x(!1),g(G=>(G+1)%D.length);return}C(G=>G+(m?-1:1)),h(Z.substring(0,S+(m?-1:1)))},U);return()=>clearTimeout(M)});const R={"Grade 9":{subjects:{English:["Ms. Priya Sharma","Mr. Vivek Sinha","Ms. Ritu Malhotra"],Mathematics:["Mr. Rajesh Kumar","Ms. Neha Gupta","Mr. Ankit Jain"],Science:["Ms. Anjali Mehta","Mr. Suresh Iyer","Ms. Pooja Khanna"],"Social Studies":["Siddharth Sir","Ms. Ananya Bose","Mr. Harish Nanda"],Hindi:["Ms. Kavita Reddy","Mr. Manoj Tiwari","Ms. Poonam Joshi"],"Computer Science":["Mr. Arvind Nair","Ms. Shruti Desai","Mr. Kunal Shah"]}},"Grade 10":{subjects:{English:["Ms. Sunita Verma","Mr. Ashish Bhatia","Ms. Riya Kapoor"],Mathematics:["Mr. Rohan Patel","Ms. Priyanka Das","Mr. Sanjay Kulkarni"],Science:["Ms. Anjali Mehta","Mr. Amit Chakraborty","Ms. Meera Nambiar"],"Social Studies":["Siddharth Sir","Ms. Nidhi Arora","Mr. Parth Ghosh"],Hindi:["Ms. Kavita Reddy","Mr. Ajay Sharma","Ms. Shalini Tripathi"],"Computer Science":["Mr. Arvind Nair","Ms. Tanvi Kulkarni","Mr. Rohit Menon"]}},"Grade 11":{subjects:{English:["Ms. Priya Sharma","Mr. Karan Malhotra","Ms. Deepa Rao"],Physics:["Mr. Nitin Agarwal","Ms. Rachna Bansal","Mr. Vivek Mishra"],Chemistry:["Ms. Sneha Kapoor","Mr. Aditya Mehta","Ms. Nupur Jain"],Biology:["Siddharth Sir","Ms. Radhika Sen","Mr. Mohan Pillai"],Mathematics:["Mr. Deepak Rao","Ms. Shreya Iyer","Mr. Varun Sethi"],"Computer Science":["Mr. Arvind Nair","Ms. Naina Khatri","Mr. Prateek Verma"]}},"Grade 12":{subjects:{English:["Ms. Sunita Verma","Mr. Aalok Trivedi","Ms. Garima Singh"],Physics:["Mr. Nitin Agarwal","Ms. Priti Saxena","Mr. Keshav Reddy"],Chemistry:["Ms. Sneha Kapoor","Mr. Rohan Mukherjee","Ms. Farah Qureshi"],Biology:["Siddharth Sir","Ms. Neelam Vaidya","Mr. Sameer Kulkarni"],Mathematics:["Mr. Deepak Rao","Ms. Ishita Shah","Mr. Yashwant Kumar"],"Computer Science":["Mr. Arvind Nair","Ms. Pallavi Menon","Mr. Siddharth Jain"]}}},$={English:Ni,Mathematics:m6,Science:sm,Physics:c6,Chemistry:sm,Biology:fm,"Social Studies":fm,Hindi:O6,"Computer Science":E6},B=l?Object.keys(R[l].subjects):[],V=U=>c(U),A=(U,N)=>{(U.key==="Enter"||U.key===" ")&&(U.preventDefault(),V(N))},O=U=>{!l||!u||a("/instalearn/teacher",{state:{grade:l,subject:u,teacher:U}})};return d.jsxs(U6,{children:[d.jsx(Wc,{$color:"rgba(255,255,255,0.16)",$size:520,$top:"-12%",$right:"-6%",$duration:8,$delay:0}),d.jsx(Wc,{$color:"rgba(255,255,255,0.1)",$size:640,$bottom:"-16%",$left:"-8%",$duration:10,$delay:3}),d.jsx(Wc,{$color:"rgba(255,255,255,0.12)",$size:420,$top:"42%",$left:"48%",$duration:12,$delay:6}),[...Array(7)].map((U,N)=>d.jsx(H6,{$duration:9+N*2,$delay:N*.7,style:{left:`${10+N*12}%`,top:`${18+N*9}%`},children:N%2?d.jsx(cm,{size:30,color:"rgba(255,255,255,0.5)"}):d.jsx(D6,{size:30,color:"rgba(255,255,255,0.5)"})},N)),d.jsx(q6,{children:d.jsxs(Y6,{children:[d.jsx(X6,{children:d.jsx(V6,{children:d.jsx(K6,{children:d.jsx(Q6,{children:f})})})}),d.jsxs(G6,{children:[d.jsxs(mm,{children:[d.jsxs(dm,{children:[d.jsx(pm,{children:d.jsx(cm,{size:18})}),d.jsxs(hm,{children:[d.jsx("h2",{children:"Select Your Grade"}),d.jsx("p",{children:"Pick a class to view the available subjects"})]})]}),d.jsxs(Z6,{children:[d.jsxs(J6,{value:l,onChange:U=>{o(U.target.value),c("")},children:[d.jsx("option",{value:"",disabled:!0,children:"Select Grade"}),Object.keys(R).map(U=>d.jsx("option",{value:U,children:U},U))]}),l&&d.jsx(S6,{size:20,style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",color:it.success}})]})]}),d.jsxs(mm,{children:[d.jsxs(dm,{children:[d.jsx(pm,{children:d.jsx(Ni,{size:18})}),d.jsxs(hm,{children:[d.jsx("h2",{children:"Choose a Subject"}),d.jsx("p",{children:"Click a teacher to open their profile"})]})]}),B.length?d.jsx(F6,{children:B.map(U=>{const N=$[U]||Ni,M=u===U,Z=R[l].subjects[U],G=Array.isArray(Z)?Z:[Z];return d.jsxs(W6,{role:"button",tabIndex:0,"aria-pressed":M,$selected:M,onClick:()=>V(U),onKeyDown:J=>A(J,U),"aria-label":`Open ${U}`,children:[d.jsxs(P6,{children:[d.jsx("span",{children:U}),d.jsx("div",{className:"icon",children:d.jsx(N,{size:18})})]}),d.jsx(I6,{$selected:M,children:M?d.jsx(eS,{children:G.map(J=>d.jsx(tS,{$inSelected:!0,onClick:ue=>{ue.stopPropagation(),O(J)},onKeyDown:ue=>{(ue.key==="Enter"||ue.key===" ")&&(ue.preventDefault(),ue.stopPropagation(),O(J))},children:J},J))}):d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,color:"#475569",fontWeight:700,fontSize:".86rem"},children:[d.jsx("span",{children:"View teachers"})," ",d.jsx(b6,{size:16})]})})]},U)})}):d.jsxs(nv,{style:{display:"flex",flexDirection:"column",textAlign:"center",borderStyle:"dashed",alignItems:"center",justifyContent:"center"},children:[d.jsx(Ni,{size:36,color:"#94a3b8"}),d.jsx("p",{style:{color:it.subtext,fontWeight:600,marginTop:8},children:"Please select a grade to view subjects."})]})]})]})]})})]})}function gm(a){return Te({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"},child:[]}]})(a)}function $o(a){return Te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(a)}function er(a){return Te({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(a)}function aS(a){return Te({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(a)}function vm(a){return Te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(a)}function ym(a){return Te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(a)}function bm(a){return Te({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(a)}function iS(a){return Te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(a)}function xm(a){return Te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(a)}function Sm(a){return Te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"},child:[]}]})(a)}function wm(a){return Te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(a)}function Bo(a){return Te({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(a)}function Uo(a){return Te({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(a)}function lS(a){return Te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(a)}const rS=Ft`
  from { opacity: 0; transform: translateY(32px); }
  to { opacity: 1; transform: translateY(0); }
`,av=Ft`
  from { opacity: 0; }
  to { opacity: 1; }
`,oS=Ft`
  from { opacity: 0; transform: translate(-50%, -48%) scale(0.95); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
`,iv=Ft`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`,re={bgSecondary:"#FFFFFF",card:"#FFFFFF",cardHover:"#F8FAFC",text:"#0F172A",subtext:"#64748B",primary:"#0EA5E9",accent:"#06B6D4",accentGreen:"#10B981",border:"#E2E8F0",borderLight:"#CBD5E1",shadow:"0 20px 50px rgba(0, 0, 0, 0.08)",overlay:"rgba(15, 23, 42, 0.5)"},uS=w.div`
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
    animation: ${iv} 20s ease-in-out infinite;
    pointer-events: none;
  }
`,sS=w.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${rS} 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  z-index: 1;
`,ed=w.div`
  background: ${re.card};
  border: 1px solid ${re.border};
  border-radius: 24px;
  box-shadow: ${re.shadow};
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,Em=w.div`
  position: fixed;
  inset: 0;
  background: ${re.overlay};
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${av} 0.2s ease-out;
`,Cm=w.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${re.bgSecondary};
  border-radius: 24px;
  padding: 32px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.2);
  animation: ${oS} 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1001;

  @media (max-width: 640px) {
    padding: 24px;
  }
`,jm=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,Tm=w.h2`
  font-size: 24px;
  font-weight: 800;
  color: ${re.text};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
`,Rm=w.button`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid ${re.border};
  background: ${re.card};
  color: ${re.subtext};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${re.primary};
    color: ${re.primary};
    transform: rotate(90deg);
  }
`,da=w.div`
  margin-bottom: 20px;
`,pa=w.label`
  display: block;
  font-weight: 600;
  color: ${re.text};
  margin-bottom: 8px;
  font-size: 14px;
`,Mi=w.input`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid ${re.border};
  border-radius: 12px;
  font-size: 16px;
  color: ${re.text};
  background: ${re.bgSecondary};
  transition: all 0.2s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${re.primary};
    box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1);
  }
`,Mm=w.select`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid ${re.border};
  border-radius: 12px;
  font-size: 16px;
  color: ${re.text};
  background: ${re.bgSecondary};
  transition: all 0.2s ease;
  cursor: pointer;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${re.primary};
    box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1);
  }
`,zm=w.div`
  display: flex;
  gap: 12px;
  margin-top: 28px;
`,Ho=w.button`
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
    background: linear-gradient(135deg, ${re.primary}, ${re.accent});
    color: white;
    box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(14, 165, 233, 0.4);
    }
  `:`
    background: ${re.card};
    color: ${re.text};
    border: 2px solid ${re.border};

    &:hover {
      border-color: ${re.borderLight};
    }
  `}
`,cS=w(ed)`
  padding: 40px;
  margin-bottom: 24px;
  background: linear-gradient(135deg, ${re.bgSecondary} 0%, #F8FAFC 100%);
  border: 1px solid ${re.borderLight};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${re.primary}, ${re.accentGreen});
  }

  @media (max-width: 768px) {
    padding: 28px 20px;
  }
`,fS=w.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: 28px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 20px;
  }
`,dS=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`,pS=w.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${re.primary}, ${re.accentGreen});
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
    background: linear-gradient(135deg, ${re.primary}, ${re.accentGreen});
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
`,hS=w.div`
  display: grid;
  gap: 24px;
`,mS=w.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,gS=w.div`
  display: grid;
  gap: 8px;
`,vS=w.h1`
  font-size: 32px;
  font-weight: 800;
  color: ${re.text};
  margin: 0;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`,yS=w.p`
  color: ${re.subtext};
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`,bS=w.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`,Om=w.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  border: 2px solid ${re.border};
  background: ${re.bgSecondary};
  color: ${re.text};
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
    background: linear-gradient(135deg, ${re.primary}, ${re.accent});
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: ${re.primary};
    color: ${re.primary};
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
`,xS=w.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Pc=w.div`
  background: linear-gradient(135deg, #FFFFFF, #F8FAFC);
  border: 2px solid ${re.border};
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    border-color: ${re.borderLight};
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
  }
`,Ic=w.div`
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, ${re.primary}, ${re.accentGreen});
  color: #fff;
  font-size: 24px;
  box-shadow: 0 8px 16px rgba(14, 165, 233, 0.25);
`,ef=w.div`
  display: grid;
  gap: 4px;
  flex: 1;
`,tf=w.span`
  font-weight: 800;
  font-size: 28px;
  color: ${re.text};
  line-height: 1;
`,nf=w.span`
  font-size: 13px;
  color: ${re.subtext};
  font-weight: 500;
`,af=w.div`
  color: #F59E0B;
  font-size: 20px;
`,SS=w.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 24px 0;
`,Am=w.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 18px;
  border-radius: 16px;
  border: 2px solid ${a=>a.active?re.primary:re.border};
  background: ${a=>a.active?`linear-gradient(135deg, ${re.primary}, ${re.accent})`:re.card};
  color: ${a=>a.active?"#fff":re.subtext};
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
    border-color: ${re.primary};
    color: ${a=>a.active?"#fff":re.text};
  }
`,_m=w(ed)`
  padding: 24px;
  animation: ${av} 0.5s ease-out;
`,lv=w.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  align-items: center;
  padding: 20px;
  border-radius: 16px;
  border: 2px solid ${re.border};
  background: ${re.bgSecondary};
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
    background: linear-gradient(180deg, ${re.primary}, ${re.accentGreen});
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover { 
    background: ${re.cardHover};
    border-color: ${re.primary};
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
`,wS=w.div`
  width: 64px;
  height: 64px;
  border-radius: 14px;
  background: linear-gradient(135deg, ${re.primary}, ${re.accentGreen});
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
`,ES=w.div`
  display: grid;
  gap: 10px;
`,CS=w.h3`
  margin: 0;
  color: ${re.text};
  font-size: 18px;
  font-weight: 700;
`,jS=w.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  font-size: 13px;
  color: ${re.subtext};
`,lf=w.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
`,TS=w.div`
  width: 100%;
  max-width: 200px;
  height: 8px;
  background: #E2E8F0;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid ${re.border};
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
`,RS=w.div`
  height: 100%;
  width: ${a=>Math.min(Math.max(a.value,0),100)}%;
  background: linear-gradient(90deg, ${re.primary}, ${re.accentGreen});
  border-radius: 999px;
  transition: width 0.5s ease;
  box-shadow: 0 0 10px rgba(14, 165, 233, 0.4);
`,MS=w(aS)`
  color: ${re.subtext};
  font-size: 20px;
  transition: all 0.3s ease;

  ${lv}:hover & {
    color: ${re.primary};
    transform: translateX(4px);
  }

  @media (max-width: 640px) {
    display: none;
  }
`,Dm=w.div`
  text-align: center;
  padding: 64px 20px;
  color: ${re.subtext};
`,Nm=w.div`
  font-size: 72px;
  margin-bottom: 16px;
  opacity: 0.3;
  animation: ${iv} 3s ease-in-out infinite;
`,km=w.h3`
  color: ${re.text};
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 8px 0;
`,Lm=w.p`
  margin: 0;
  font-size: 15px;
`,zS=w.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
`,OS=w(ed)`
  padding: 24px;
  display: grid;
  gap: 16px;
  background: ${re.bgSecondary};
  border: 2px solid ${re.border};
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
    background: linear-gradient(90deg, ${re.primary}, ${re.accentGreen});
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: ${re.primary};
    box-shadow: 0 20px 40px rgba(14, 165, 233, 0.2);

    &::before {
      opacity: 1;
    }
  }
`,AS=w.div`
  font-weight: 700;
  font-size: 16px;
  color: ${re.text};
  display: inline-flex;
  align-items: center;
  gap: 10px;

  svg {
    color: ${re.primary};
  }
`,_S=w.div`
  font-size: 13px;
  color: ${re.subtext};
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
`,DS=w.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`,$m=w.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 16px;
  border-radius: 12px;
  border: 2px solid ${re.border};
  background: ${re.card};
  color: ${re.text};
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex: 1;

  &:hover { 
    border-color: ${re.primary}; 
    color: ${re.primary}; 
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(14, 165, 233, 0.15);
  }
`;function NS(){const[a,l]=b.useState("history"),[o,u]=b.useState(!1),[c,f]=b.useState(!1),[h,y]=b.useState({name:"Priya Sharma",email:"priya.sharma@example.com",avatar:"PS",booksRead:24,hoursSpent:156,favoriteTeacher:"Ms. Sarah"}),[g,m]=b.useState({...h}),[x,S]=b.useState("light"),[C,D]=b.useState("all");b.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]);const R=[{id:1,title:"Sense of Collective Identity",teacher:"Mr. Arjun Mehta",time:"2 hours ago",progress:75,icon:d.jsx(er,{})},{id:2,title:"Understanding Diversity",teacher:"Ms. Nisha Rao",time:"Yesterday",progress:45,icon:d.jsx($o,{})},{id:3,title:"Nationalism in India",teacher:"Dr. Kavita Iyer",time:"2 days ago",progress:90,icon:d.jsx(xm,{})},{id:4,title:"Democracy & Rights",teacher:"Prof. R. Menon",time:"1 week ago",progress:100,icon:d.jsx(Sm,{})}],$=[{id:"f1",title:"Globalisation & Indian Economy",by:"Siddharth Sir",reads:12},{id:"f2",title:"Federalism Basics",by:"Anita Ma'am",reads:9},{id:"f3",title:"Judiciary: Structure",by:"R. Sharma",reads:14},{id:"f4",title:"Gender, Religion & Caste",by:"S. Verma",reads:7}],B=()=>{y({...g}),u(!1)},V=(O,U)=>{m({...g,[O]:U})},A=(O,U)=>{(O.key==="Enter"||O.key===" ")&&O.preventDefault()};return d.jsxs(uS,{$theme:x,children:[d.jsxs(sS,{children:[d.jsx(cS,{children:d.jsxs(fS,{children:[d.jsx(dS,{children:d.jsx(pS,{"aria-label":"User avatar",children:d.jsx(lS,{size:32})})}),d.jsxs(hS,{children:[d.jsxs(mS,{children:[d.jsxs(gS,{children:[d.jsx(vS,{children:h.name}),d.jsx(yS,{children:h.email})]}),d.jsxs(bS,{children:[d.jsxs(Om,{type:"button","aria-label":"Edit profile",onClick:()=>{m(h),u(!0)},children:[d.jsx(bm,{})," ",d.jsx("span",{children:"Edit"})]}),d.jsxs(Om,{type:"button","aria-label":"Settings",onClick:()=>f(!0),children:[d.jsx(ym,{})," ",d.jsx("span",{children:"Settings"})]})]})]}),d.jsxs(xS,{children:[d.jsxs(Pc,{children:[d.jsx(Ic,{"aria-hidden":"true",children:d.jsx($o,{})}),d.jsxs(ef,{children:[d.jsx(tf,{children:h.booksRead}),d.jsx(nf,{children:"Books Read"})]}),d.jsx(af,{title:"Lifetime reads",children:d.jsx(Sm,{})})]}),d.jsxs(Pc,{children:[d.jsx(Ic,{"aria-hidden":"true",children:d.jsx(vm,{})}),d.jsxs(ef,{children:[d.jsx(tf,{children:h.hoursSpent}),d.jsx(nf,{children:"Study Hours"})]}),d.jsx(af,{title:"Consistent!",children:d.jsx(Bo,{})})]}),d.jsxs(Pc,{children:[d.jsx(Ic,{"aria-hidden":"true",children:d.jsx(er,{})}),d.jsxs(ef,{children:[d.jsx(tf,{children:h.favoriteTeacher}),d.jsx(nf,{children:"Favourite Teacher"})]}),d.jsx(af,{children:d.jsx(iS,{})})]})]})]})]})}),d.jsxs(SS,{children:[d.jsxs(Am,{active:a==="history",onClick:()=>l("history"),"aria-pressed":a==="history",children:[d.jsx(xm,{})," Reading History"]}),d.jsxs(Am,{active:a==="favorites",onClick:()=>l("favorites"),"aria-pressed":a==="favorites",children:[d.jsx(Bo,{})," Favorites"]})]}),a==="history"?d.jsx(_m,{children:R.length>0?R.map(O=>d.jsxs(lv,{role:"button",tabIndex:0,onKeyDown:U=>A(U),onClick:()=>{},"aria-label":`Open ${O.title}`,children:[d.jsx(wS,{"aria-hidden":"true",children:O.icon}),d.jsxs(ES,{children:[d.jsx(CS,{children:O.title}),d.jsxs(jS,{children:[d.jsxs(lf,{children:[d.jsx(er,{})," ",O.teacher]}),d.jsxs(lf,{children:[d.jsx(vm,{})," ",O.time]}),d.jsxs(lf,{children:[d.jsx($o,{})," ",O.progress,"% complete"]})]}),d.jsx(TS,{"aria-hidden":"true",children:d.jsx(RS,{value:O.progress})})]}),d.jsx(MS,{})]},O.id)):d.jsxs(Dm,{children:[d.jsx(Nm,{children:d.jsx(gm,{})}),d.jsx(km,{children:"No history yet"}),d.jsx(Lm,{children:"Start reading to see your progress here."})]})}):d.jsx(_m,{children:$.length>0?d.jsx(zS,{children:$.map(O=>d.jsxs(OS,{children:[d.jsxs(AS,{children:[d.jsx(gm,{})," ",O.title]}),d.jsxs(_S,{children:[d.jsxs("span",{children:["By ",O.by]}),d.jsx("span",{children:"•"}),d.jsxs("span",{children:[O.reads," reads"]})]}),d.jsxs(DS,{children:[d.jsxs($m,{type:"button",children:[d.jsx($o,{})," Open"]}),d.jsxs($m,{type:"button",children:[d.jsx(Bo,{})," Unfavourite"]})]})]},O.id))}):d.jsxs(Dm,{children:[d.jsx(Nm,{children:d.jsx(Bo,{})}),d.jsx(km,{children:"No favorites yet"}),d.jsx(Lm,{children:"Tap the star on a lesson to save it here."})]})})]}),o&&d.jsxs(d.Fragment,{children:[d.jsx(Em,{onClick:()=>u(!1)}),d.jsxs(Cm,{role:"dialog","aria-modal":"true","aria-labelledby":"editProfileTitle",children:[d.jsxs(jm,{children:[d.jsxs(Tm,{id:"editProfileTitle",children:[d.jsx(bm,{})," Edit Profile"]}),d.jsx(Rm,{type:"button",onClick:()=>u(!1),"aria-label":"Close edit profile",children:d.jsx(Uo,{})})]}),d.jsxs(da,{children:[d.jsx(pa,{htmlFor:"name",children:"Name"}),d.jsx(Mi,{id:"name",value:g.name,onChange:O=>V("name",O.target.value)})]}),d.jsxs(da,{children:[d.jsx(pa,{htmlFor:"email",children:"Email"}),d.jsx(Mi,{id:"email",type:"email",value:g.email,onChange:O=>V("email",O.target.value)})]}),d.jsxs(da,{children:[d.jsx(pa,{htmlFor:"avatar",children:"Avatar Initials"}),d.jsx(Mi,{id:"avatar",value:g.avatar,onChange:O=>V("avatar",O.target.value)})]}),d.jsxs(da,{children:[d.jsx(pa,{htmlFor:"booksRead",children:"Books Read"}),d.jsx(Mi,{id:"booksRead",type:"number",min:0,value:g.booksRead,onChange:O=>V("booksRead",Number(O.target.value))})]}),d.jsxs(da,{children:[d.jsx(pa,{htmlFor:"hoursSpent",children:"Study Hours"}),d.jsx(Mi,{id:"hoursSpent",type:"number",min:0,value:g.hoursSpent,onChange:O=>V("hoursSpent",Number(O.target.value))})]}),d.jsxs(da,{children:[d.jsx(pa,{htmlFor:"favTeacher",children:"Favourite Teacher"}),d.jsx(Mi,{id:"favTeacher",value:g.favoriteTeacher,onChange:O=>V("favoriteTeacher",O.target.value)})]}),d.jsxs(zm,{children:[d.jsxs(Ho,{type:"button",onClick:()=>u(!1),children:[d.jsx(Uo,{})," Cancel"]}),d.jsxs(Ho,{type:"button",primary:!0,onClick:B,children:[d.jsx(wm,{})," Save"]})]})]})]}),c&&d.jsxs(d.Fragment,{children:[d.jsx(Em,{onClick:()=>f(!1)}),d.jsxs(Cm,{role:"dialog","aria-modal":"true","aria-labelledby":"settingsTitle",children:[d.jsxs(jm,{children:[d.jsxs(Tm,{id:"settingsTitle",children:[d.jsx(ym,{})," Settings"]}),d.jsx(Rm,{type:"button",onClick:()=>f(!1),"aria-label":"Close settings",children:d.jsx(Uo,{})})]}),d.jsxs(da,{children:[d.jsx(pa,{htmlFor:"theme",children:"Theme"}),d.jsxs(Mm,{id:"theme",value:x,onChange:O=>S(O.target.value),children:[d.jsx("option",{value:"light",children:"Light"}),d.jsx("option",{value:"dark",children:"Dark"})]})]}),d.jsxs(da,{children:[d.jsx(pa,{htmlFor:"notifications",children:"Notifications"}),d.jsxs(Mm,{id:"notifications",value:C,onChange:O=>D(O.target.value),children:[d.jsx("option",{value:"all",children:"All activity"}),d.jsx("option",{value:"mentions",children:"Mentions only"}),d.jsx("option",{value:"none",children:"None"})]})]}),d.jsxs(zm,{children:[d.jsxs(Ho,{type:"button",onClick:()=>f(!1),children:[d.jsx(Uo,{})," Close"]}),d.jsxs(Ho,{type:"button",primary:!0,onClick:()=>f(!1),children:[d.jsx(wm,{})," Apply"]})]})]})]})]})}const kS=Ft`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
`,LS=Ft`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,$S=Ft`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,BS=Ft`
  0% {
    width: 0%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 0%;
  }
`,US=w.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`,HS=w.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,rf=w.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: ${kS} 20s infinite ease-in-out;

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
`,qS=w.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  animation: ${LS} 0.8s ease-out;

  @media (max-width: 600px) {
    margin: 20px;
    padding: 20px 20px;
  }
`,YS=w.div`
  margin-bottom: 0px;
  position: relative;
`,GS=w.div`
  font-size: 70px;
  animation: ${$S} 2s infinite;
`,XS=w.h1`
  font-size: 2.5em;
  color: #2d3748;
  margin-bottom: 10px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 2em;
  }
`,VS=w.p`
  font-size: 1.2em;
  color: #718096;
  margin-bottom: 25px;
  line-height: 1.6;
`,KS=w.div`
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`,QS=w.div`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  animation: ${BS} 3s ease-in-out infinite;
`,ZS=w.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,of=w.div`
  padding: 20px;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
  }
`,uf=w.div`
  font-size:30px;
  margin-bottom: 10px;
`,sf=w.div`
  font-size: 14px;
  color: #4a5568;
  font-weight: 600;
`,JS=w.button`
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
`;function Bm(){const[a,l]=b.useState(!1),o=()=>{l(!0),setTimeout(()=>{l(!1)},2e3)};return d.jsxs(US,{children:[d.jsxs(HS,{children:[d.jsx(rf,{}),d.jsx(rf,{}),d.jsx(rf,{})]}),d.jsxs(qS,{children:[d.jsx(YS,{children:d.jsx(GS,{children:"🚧"})}),d.jsx(XS,{children:"Building Something Amazing"}),d.jsx(VS,{children:"We're working hard to bring you an incredible new feature. Stay tuned!"}),d.jsx(KS,{children:d.jsx(QS,{})}),d.jsxs(ZS,{children:[d.jsxs(of,{children:[d.jsx(uf,{children:"⚡"}),d.jsx(sf,{children:"Lightning Fast"})]}),d.jsxs(of,{children:[d.jsx(uf,{children:"🎨"}),d.jsx(sf,{children:"Beautiful Design"})]}),d.jsxs(of,{children:[d.jsx(uf,{children:"🔒"}),d.jsx(sf,{children:"Secure & Private"})]})]}),d.jsx(JS,{onClick:o,$notified:a,children:a?"✓ You'll be notified!":"Notify Me When Ready"})]})]})}var FS=Fg();const lt=ir(FS);function zf(){return zf=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var u in o)({}).hasOwnProperty.call(o,u)&&(a[u]=o[u])}return a},zf.apply(null,arguments)}function rv(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)!==-1)continue;o[u]=a[u]}return o}function Um(a){return"default"+a.charAt(0).toUpperCase()+a.substr(1)}function WS(a){var l=PS(a,"string");return typeof l=="symbol"?l:String(l)}function PS(a,l){if(typeof a!="object"||a===null)return a;var o=a[Symbol.toPrimitive];if(o!==void 0){var u=o.call(a,l);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}function IS(a,l,o){var u=b.useRef(a!==void 0),c=b.useState(l),f=c[0],h=c[1],y=a!==void 0,g=u.current;return u.current=y,!y&&g&&f!==l&&h(l),[y?a:f,b.useCallback(function(m){for(var x=arguments.length,S=new Array(x>1?x-1:0),C=1;C<x;C++)S[C-1]=arguments[C];o&&o.apply(void 0,[m].concat(S)),h(m)},[o])]}function ov(a,l){return Object.keys(l).reduce(function(o,u){var c,f=o,h=f[Um(u)],y=f[u],g=rv(f,[Um(u),u].map(WS)),m=l[u],x=IS(y,h,a[m]),S=x[0],C=x[1];return zf({},g,(c={},c[u]=S,c[m]=C,c))},a)}function Of(a,l){return Of=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,u){return o.__proto__=u,o},Of(a,l)}function e8(a,l){a.prototype=Object.create(l.prototype),a.prototype.constructor=a,Of(a,l)}const t8=["xxl","xl","lg","md","sm","xs"],n8="xs",uv=b.createContext({prefixes:{},breakpoints:t8,minBreakpoint:n8}),{Consumer:b9,Provider:x9}=uv;function Ct(a,l){const{prefixes:o}=b.useContext(uv);return a||o[l]||l}function td(a){return a&&a.ownerDocument||document}function a8(a){var l=td(a);return l&&l.defaultView||window}function i8(a,l){return a8(a).getComputedStyle(a,l)}var l8=/([A-Z])/g;function r8(a){return a.replace(l8,"-$1").toLowerCase()}var o8=/^ms-/;function qo(a){return r8(a).replace(o8,"-ms-")}var u8=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function s8(a){return!!(a&&u8.test(a))}function Ln(a,l){var o="",u="";if(typeof l=="string")return a.style.getPropertyValue(qo(l))||i8(a).getPropertyValue(qo(l));Object.keys(l).forEach(function(c){var f=l[c];!f&&f!==0?a.style.removeProperty(qo(c)):s8(c)?u+=c+"("+f+") ":o+=qo(c)+": "+f+";"}),u&&(o+="transform: "+u+";"),a.style.cssText+=";"+o}var c8=Zg();const cf=ir(c8),Hm={disabled:!1},sv=Ye.createContext(null);var f8=function(l){return l.scrollTop},Pl="unmounted",ma="exited",nn="entering",Dn="entered",ar="exiting",Hn=(function(a){e8(l,a);function l(u,c){var f;f=a.call(this,u,c)||this;var h=c,y=h&&!h.isMounting?u.enter:u.appear,g;return f.appearStatus=null,u.in?y?(g=ma,f.appearStatus=nn):g=Dn:u.unmountOnExit||u.mountOnEnter?g=Pl:g=ma,f.state={status:g},f.nextCallback=null,f}l.getDerivedStateFromProps=function(c,f){var h=c.in;return h&&f.status===Pl?{status:ma}:null};var o=l.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(c){var f=null;if(c!==this.props){var h=this.state.status;this.props.in?h!==nn&&h!==Dn&&(f=nn):(h===nn||h===Dn)&&(f=ar)}this.updateStatus(!1,f)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var c=this.props.timeout,f,h,y;return f=h=y=c,c!=null&&typeof c!="number"&&(f=c.exit,h=c.enter,y=c.appear!==void 0?c.appear:h),{exit:f,enter:h,appear:y}},o.updateStatus=function(c,f){if(c===void 0&&(c=!1),f!==null)if(this.cancelNextCallback(),f===nn){if(this.props.unmountOnExit||this.props.mountOnEnter){var h=this.props.nodeRef?this.props.nodeRef.current:_i.findDOMNode(this);h&&f8(h)}this.performEnter(c)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ma&&this.setState({status:Pl})},o.performEnter=function(c){var f=this,h=this.props.enter,y=this.context?this.context.isMounting:c,g=this.props.nodeRef?[y]:[_i.findDOMNode(this),y],m=g[0],x=g[1],S=this.getTimeouts(),C=y?S.appear:S.enter;if(!c&&!h||Hm.disabled){this.safeSetState({status:Dn},function(){f.props.onEntered(m)});return}this.props.onEnter(m,x),this.safeSetState({status:nn},function(){f.props.onEntering(m,x),f.onTransitionEnd(C,function(){f.safeSetState({status:Dn},function(){f.props.onEntered(m,x)})})})},o.performExit=function(){var c=this,f=this.props.exit,h=this.getTimeouts(),y=this.props.nodeRef?void 0:_i.findDOMNode(this);if(!f||Hm.disabled){this.safeSetState({status:ma},function(){c.props.onExited(y)});return}this.props.onExit(y),this.safeSetState({status:ar},function(){c.props.onExiting(y),c.onTransitionEnd(h.exit,function(){c.safeSetState({status:ma},function(){c.props.onExited(y)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(c,f){f=this.setNextCallback(f),this.setState(c,f)},o.setNextCallback=function(c){var f=this,h=!0;return this.nextCallback=function(y){h&&(h=!1,f.nextCallback=null,c(y))},this.nextCallback.cancel=function(){h=!1},this.nextCallback},o.onTransitionEnd=function(c,f){this.setNextCallback(f);var h=this.props.nodeRef?this.props.nodeRef.current:_i.findDOMNode(this),y=c==null&&!this.props.addEndListener;if(!h||y){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var g=this.props.nodeRef?[this.nextCallback]:[h,this.nextCallback],m=g[0],x=g[1];this.props.addEndListener(m,x)}c!=null&&setTimeout(this.nextCallback,c)},o.render=function(){var c=this.state.status;if(c===Pl)return null;var f=this.props,h=f.children;f.in,f.mountOnEnter,f.unmountOnExit,f.appear,f.enter,f.exit,f.timeout,f.addEndListener,f.onEnter,f.onEntering,f.onEntered,f.onExit,f.onExiting,f.onExited,f.nodeRef;var y=rv(f,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Ye.createElement(sv.Provider,{value:null},typeof h=="function"?h(c,y):Ye.cloneElement(Ye.Children.only(h),y))},l})(Ye.Component);Hn.contextType=sv;Hn.propTypes={};function zi(){}Hn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:zi,onEntering:zi,onEntered:zi,onExit:zi,onExiting:zi,onExited:zi};Hn.UNMOUNTED=Pl;Hn.EXITED=ma;Hn.ENTERING=nn;Hn.ENTERED=Dn;Hn.EXITING=ar;function d8(a){return a.code==="Escape"||a.keyCode===27}function p8(){const a=b.version.split(".");return{major:+a[0],minor:+a[1],patch:+a[2]}}function Vi(a){if(!a||typeof a=="function")return null;const{major:l}=p8();return l>=19?a.props.ref:a.ref}const hu=!!(typeof window<"u"&&window.document&&window.document.createElement);var Af=!1,_f=!1;try{var ff={get passive(){return Af=!0},get once(){return _f=Af=!0}};hu&&(window.addEventListener("test",ff,ff),window.removeEventListener("test",ff,!0))}catch{}function h8(a,l,o,u){if(u&&typeof u!="boolean"&&!_f){var c=u.once,f=u.capture,h=o;!_f&&c&&(h=o.__once||function y(g){this.removeEventListener(l,y,f),o.call(this,g)},o.__once=h),a.addEventListener(l,h,Af?u:f)}a.addEventListener(l,o,u)}function m8(a,l,o,u){var c=u&&typeof u!="boolean"?u.capture:u;a.removeEventListener(l,o,c),o.__once&&a.removeEventListener(l,o.__once,c)}function au(a,l,o,u){return h8(a,l,o,u),function(){m8(a,l,o,u)}}function g8(a,l,o,u){if(u===void 0&&(u=!0),a){var c=document.createEvent("HTMLEvents");c.initEvent(l,o,u),a.dispatchEvent(c)}}function v8(a){var l=Ln(a,"transitionDuration")||"",o=l.indexOf("ms")===-1?1e3:1;return parseFloat(l)*o}function y8(a,l,o){o===void 0&&(o=5);var u=!1,c=setTimeout(function(){u||g8(a,"transitionend",!0)},l+o),f=au(a,"transitionend",function(){u=!0},{once:!0});return function(){clearTimeout(c),f()}}function b8(a,l,o,u){o==null&&(o=v8(a)||0);var c=y8(a,o,u),f=au(a,"transitionend",l);return function(){c(),f()}}function qm(a,l){const o=Ln(a,l)||"",u=o.indexOf("ms")===-1?1e3:1;return parseFloat(o)*u}function nd(a,l){const o=qm(a,"transitionDuration"),u=qm(a,"transitionDelay"),c=b8(a,f=>{f.target===a&&(c(),l(f))},o+u)}function Fl(...a){return a.filter(l=>l!=null).reduce((l,o)=>{if(typeof o!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return l===null?o:function(...c){l.apply(this,c),o.apply(this,c)}},null)}function cv(a){a.offsetHeight}const Ym=a=>!a||typeof a=="function"?a:l=>{a.current=l};function x8(a,l){const o=Ym(a),u=Ym(l);return c=>{o&&o(c),u&&u(c)}}function S8(a,l){return b.useMemo(()=>x8(a,l),[a,l])}function w8(a){return a&&"setState"in a?_i.findDOMNode(a):a??null}const mu=Ye.forwardRef(({onEnter:a,onEntering:l,onEntered:o,onExit:u,onExiting:c,onExited:f,addEndListener:h,children:y,childRef:g,...m},x)=>{const S=b.useRef(null),C=S8(S,g),D=M=>{C(w8(M))},R=M=>Z=>{M&&S.current&&M(S.current,Z)},$=b.useCallback(R(a),[a]),B=b.useCallback(R(l),[l]),V=b.useCallback(R(o),[o]),A=b.useCallback(R(u),[u]),O=b.useCallback(R(c),[c]),U=b.useCallback(R(f),[f]),N=b.useCallback(R(h),[h]);return d.jsx(Hn,{ref:x,...m,onEnter:$,onEntered:V,onEntering:B,onExit:A,onExited:U,onExiting:O,addEndListener:N,nodeRef:S,children:typeof y=="function"?(M,Z)=>y(M,{...Z,ref:D}):Ye.cloneElement(y,{ref:D})})});mu.displayName="TransitionWrapper";const E8={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function C8(a,l){const o=`offset${a[0].toUpperCase()}${a.slice(1)}`,u=l[o],c=E8[a];return u+parseInt(Ln(l,c[0]),10)+parseInt(Ln(l,c[1]),10)}const j8={[ma]:"collapse",[ar]:"collapsing",[nn]:"collapsing",[Dn]:"collapse show"},fv=Ye.forwardRef(({onEnter:a,onEntering:l,onEntered:o,onExit:u,onExiting:c,className:f,children:h,dimension:y="height",in:g=!1,timeout:m=300,mountOnEnter:x=!1,unmountOnExit:S=!1,appear:C=!1,getDimensionValue:D=C8,...R},$)=>{const B=typeof y=="function"?y():y,V=b.useMemo(()=>Fl(M=>{M.style[B]="0"},a),[B,a]),A=b.useMemo(()=>Fl(M=>{const Z=`scroll${B[0].toUpperCase()}${B.slice(1)}`;M.style[B]=`${M[Z]}px`},l),[B,l]),O=b.useMemo(()=>Fl(M=>{M.style[B]=null},o),[B,o]),U=b.useMemo(()=>Fl(M=>{M.style[B]=`${D(B,M)}px`,cv(M)},u),[u,D,B]),N=b.useMemo(()=>Fl(M=>{M.style[B]=null},c),[B,c]);return d.jsx(mu,{ref:$,addEndListener:nd,...R,"aria-expanded":R.role?g:null,onEnter:V,onEntering:A,onEntered:O,onExit:U,onExiting:N,childRef:Vi(h),in:g,timeout:m,mountOnEnter:x,unmountOnExit:S,appear:C,children:(M,Z)=>Ye.cloneElement(h,{...Z,className:lt(f,h.props.className,j8[M],B==="width"&&"collapse-horizontal")})})});fv.displayName="Collapse";function T8(a){const l=b.useRef(a);return b.useEffect(()=>{l.current=a},[a]),l}function gu(a){const l=T8(a);return b.useCallback(function(...o){return l.current&&l.current(...o)},[l])}const R8=(a=>b.forwardRef((l,o)=>d.jsx("div",{...l,ref:o,className:lt(l.className,a)})));function M8(a){const l=b.useRef(a);return b.useEffect(()=>{l.current=a},[a]),l}function Nn(a){const l=M8(a);return b.useCallback(function(...o){return l.current&&l.current(...o)},[l])}function z8(){const a=b.useRef(!0),l=b.useRef(()=>a.current);return b.useEffect(()=>(a.current=!0,()=>{a.current=!1}),[]),l.current}function O8(a){const l=b.useRef(null);return b.useEffect(()=>{l.current=a}),l.current}const A8=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",_8=typeof document<"u",Gm=_8||A8?b.useLayoutEffect:b.useEffect,D8=["as","disabled"];function N8(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}function k8(a){return!a||a.trim()==="#"}function dv({tagName:a,disabled:l,href:o,target:u,rel:c,role:f,onClick:h,tabIndex:y=0,type:g}){a||(o!=null||u!=null||c!=null?a="a":a="button");const m={tagName:a};if(a==="button")return[{type:g||"button",disabled:l},m];const x=C=>{if((l||a==="a"&&k8(o))&&C.preventDefault(),l){C.stopPropagation();return}h?.(C)},S=C=>{C.key===" "&&(C.preventDefault(),x(C))};return a==="a"&&(o||(o="#"),l&&(o=void 0)),[{role:f??"button",disabled:void 0,tabIndex:l?void 0:y,href:o,target:a==="a"?u:void 0,"aria-disabled":l||void 0,rel:a==="a"?c:void 0,onClick:x,onKeyDown:S},m]}const pv=b.forwardRef((a,l)=>{let{as:o,disabled:u}=a,c=N8(a,D8);const[f,{tagName:h}]=dv(Object.assign({tagName:o,disabled:u},c));return d.jsx(h,Object.assign({},c,f,{ref:l}))});pv.displayName="Button";const L8=["onKeyDown"];function $8(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}function B8(a){return!a||a.trim()==="#"}const hv=b.forwardRef((a,l)=>{let{onKeyDown:o}=a,u=$8(a,L8);const[c]=dv(Object.assign({tagName:"a"},u)),f=Nn(h=>{c.onKeyDown(h),o?.(h)});return B8(u.href)||u.role==="button"?d.jsx("a",Object.assign({ref:l},u,c,{onKeyDown:f})):d.jsx("a",Object.assign({ref:l},u,{onKeyDown:o}))});hv.displayName="Anchor";const U8={[nn]:"show",[Dn]:"show"},mv=b.forwardRef(({className:a,children:l,transitionClasses:o={},onEnter:u,...c},f)=>{const h={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...c},y=b.useCallback((g,m)=>{cv(g),u?.(g,m)},[u]);return d.jsx(mu,{ref:f,addEndListener:nd,...h,onEnter:y,childRef:Vi(l),children:(g,m)=>b.cloneElement(l,{...m,className:lt("fade",a,l.props.className,U8[g],o[g])})})});mv.displayName="Fade";const H8={"aria-label":cf.string,onClick:cf.func,variant:cf.oneOf(["white"])},ad=b.forwardRef(({className:a,variant:l,"aria-label":o="Close",...u},c)=>d.jsx("button",{ref:c,type:"button",className:lt("btn-close",l&&`btn-close-${l}`,a),"aria-label":o,...u}));ad.displayName="CloseButton";ad.propTypes=H8;const gv=b.createContext(null);gv.displayName="CardHeaderContext";const vv=b.forwardRef(({bsPrefix:a,fluid:l=!1,as:o="div",className:u,...c},f)=>{const h=Ct(a,"container"),y=typeof l=="string"?`-${l}`:"-fluid";return d.jsx(o,{ref:f,...c,className:lt(u,l?`${h}${y}`:h)})});vv.displayName="Container";var q8=Function.prototype.bind.call(Function.prototype.call,[].slice);function Ba(a,l){return q8(a.querySelectorAll(l))}function Y8(){const[,a]=b.useReducer(l=>l+1,0);return a}function Xm(a,l){if(a.contains)return a.contains(l);if(a.compareDocumentPosition)return a===l||!!(a.compareDocumentPosition(l)&16)}const iu=b.createContext(null),id=(a,l=null)=>a!=null?String(a):l||null,ld=b.createContext(null);ld.displayName="NavContext";const G8="data-rr-ui-",X8="rrUi";function vu(a){return`${G8}${a}`}function V8(a){return`${X8}${a}`}const yv=b.createContext(hu?window:void 0);yv.Provider;function rd(){return b.useContext(yv)}const K8=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",Q8=typeof document<"u",Z8=Q8||K8?b.useLayoutEffect:b.useEffect,Ki=b.createContext(null);Ki.displayName="NavbarContext";const Vm=a=>!a||typeof a=="function"?a:l=>{a.current=l};function J8(a,l){const o=Vm(a),u=Vm(l);return c=>{o&&o(c),u&&u(c)}}function yu(a,l){return b.useMemo(()=>J8(a,l),[a,l])}const bv=b.createContext(null),F8=["as","active","eventKey"];function W8(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}function xv({key:a,onClick:l,active:o,id:u,role:c,disabled:f}){const h=b.useContext(iu),y=b.useContext(ld),g=b.useContext(bv);let m=o;const x={role:c};if(y){!c&&y.role==="tablist"&&(x.role="tab");const S=y.getControllerId(a??null),C=y.getControlledId(a??null);x[vu("event-key")]=a,x.id=S||u,m=o==null&&a!=null?y.activeKey===a:o,(m||!(g!=null&&g.unmountOnExit)&&!(g!=null&&g.mountOnEnter))&&(x["aria-controls"]=C)}return x.role==="tab"&&(x["aria-selected"]=m,m||(x.tabIndex=-1),f&&(x.tabIndex=-1,x["aria-disabled"]=!0)),x.onClick=Nn(S=>{f||(l?.(S),a!=null&&h&&!S.isPropagationStopped()&&h(a,S))}),[x,{isActive:m}]}const Sv=b.forwardRef((a,l)=>{let{as:o=pv,active:u,eventKey:c}=a,f=W8(a,F8);const[h,y]=xv(Object.assign({key:id(c,f.href),active:u},f));return h[vu("active")]=y.isActive,d.jsx(o,Object.assign({},f,h,{ref:l}))});Sv.displayName="NavItem";const P8=["as","onSelect","activeKey","role","onKeyDown"];function I8(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}const Km=()=>{},Qm=vu("event-key"),wv=b.forwardRef((a,l)=>{let{as:o="div",onSelect:u,activeKey:c,role:f,onKeyDown:h}=a,y=I8(a,P8);const g=Y8(),m=b.useRef(!1),x=b.useContext(iu),S=b.useContext(bv);let C,D;S&&(f=f||"tablist",c=S.activeKey,C=S.getControlledId,D=S.getControllerId);const R=b.useRef(null),$=O=>{const U=R.current;if(!U)return null;const N=Ba(U,`[${Qm}]:not([aria-disabled=true])`),M=U.querySelector("[aria-selected=true]");if(!M||M!==document.activeElement)return null;const Z=N.indexOf(M);if(Z===-1)return null;let G=Z+O;return G>=N.length&&(G=0),G<0&&(G=N.length-1),N[G]},B=(O,U)=>{O!=null&&(u?.(O,U),x?.(O,U))},V=O=>{if(h?.(O),!S)return;let U;switch(O.key){case"ArrowLeft":case"ArrowUp":U=$(-1);break;case"ArrowRight":case"ArrowDown":U=$(1);break;default:return}U&&(O.preventDefault(),B(U.dataset[V8("EventKey")]||null,O),m.current=!0,g())};b.useEffect(()=>{if(R.current&&m.current){const O=R.current.querySelector(`[${Qm}][aria-selected=true]`);O?.focus()}m.current=!1});const A=yu(l,R);return d.jsx(iu.Provider,{value:B,children:d.jsx(ld.Provider,{value:{role:f,activeKey:id(c),getControlledId:C||Km,getControllerId:D||Km},children:d.jsx(o,Object.assign({},y,{onKeyDown:V,ref:A,role:f}))})})});wv.displayName="Nav";const ew=Object.assign(wv,{Item:Sv});function df(a){a===void 0&&(a=td());try{var l=a.activeElement;return!l||!l.nodeName?null:l}catch{return a.body}}function tw(a){const l=b.useRef(a);return l.current=a,l}function nw(a){const l=tw(a);b.useEffect(()=>()=>l.current(),[])}function aw(a=document){const l=a.defaultView;return Math.abs(l.innerWidth-a.documentElement.clientWidth)}const Zm=vu("modal-open");class od{constructor({ownerDocument:l,handleContainerOverflow:o=!0,isRTL:u=!1}={}){this.handleContainerOverflow=o,this.isRTL=u,this.modals=[],this.ownerDocument=l}getScrollbarWidth(){return aw(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(l){}removeModalAttributes(l){}setContainerStyle(l){const o={overflow:"hidden"},u=this.isRTL?"paddingLeft":"paddingRight",c=this.getElement();l.style={overflow:c.style.overflow,[u]:c.style[u]},l.scrollBarWidth&&(o[u]=`${parseInt(Ln(c,u)||"0",10)+l.scrollBarWidth}px`),c.setAttribute(Zm,""),Ln(c,o)}reset(){[...this.modals].forEach(l=>this.remove(l))}removeContainerStyle(l){const o=this.getElement();o.removeAttribute(Zm),Object.assign(o.style,l.style)}add(l){let o=this.modals.indexOf(l);return o!==-1||(o=this.modals.length,this.modals.push(l),this.setModalAttributes(l),o!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),o}remove(l){const o=this.modals.indexOf(l);o!==-1&&(this.modals.splice(o,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(l))}isTopModal(l){return!!this.modals.length&&this.modals[this.modals.length-1]===l}}const pf=(a,l)=>hu?a==null?(l||td()).body:(typeof a=="function"&&(a=a()),a&&"current"in a&&(a=a.current),a&&("nodeType"in a||a.getBoundingClientRect)?a:null):null;function iw(a,l){const o=rd(),[u,c]=b.useState(()=>pf(a,o?.document));if(!u){const f=pf(a);f&&c(f)}return b.useEffect(()=>{},[l,u]),b.useEffect(()=>{const f=pf(a);f!==u&&c(f)},[a,u]),u}function lw({children:a,in:l,onExited:o,mountOnEnter:u,unmountOnExit:c}){const f=b.useRef(null),h=b.useRef(l),y=Nn(o);b.useEffect(()=>{l?h.current=!0:y(f.current)},[l,y]);const g=yu(f,Vi(a)),m=b.cloneElement(a,{ref:g});return l?m:c||!h.current&&u?null:m}const rw=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function ow(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}function uw(a){let{onEnter:l,onEntering:o,onEntered:u,onExit:c,onExiting:f,onExited:h,addEndListener:y,children:g}=a,m=ow(a,rw);const x=b.useRef(null),S=yu(x,Vi(g)),C=U=>N=>{U&&x.current&&U(x.current,N)},D=b.useCallback(C(l),[l]),R=b.useCallback(C(o),[o]),$=b.useCallback(C(u),[u]),B=b.useCallback(C(c),[c]),V=b.useCallback(C(f),[f]),A=b.useCallback(C(h),[h]),O=b.useCallback(C(y),[y]);return Object.assign({},m,{nodeRef:x},l&&{onEnter:D},o&&{onEntering:R},u&&{onEntered:$},c&&{onExit:B},f&&{onExiting:V},h&&{onExited:A},y&&{addEndListener:O},{children:typeof g=="function"?(U,N)=>g(U,Object.assign({},N,{ref:S})):b.cloneElement(g,{ref:S})})}const sw=["component"];function cw(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}const fw=b.forwardRef((a,l)=>{let{component:o}=a,u=cw(a,sw);const c=uw(u);return d.jsx(o,Object.assign({ref:l},c))});function dw({in:a,onTransition:l}){const o=b.useRef(null),u=b.useRef(!0),c=Nn(l);return Gm(()=>{if(!o.current)return;let f=!1;return c({in:a,element:o.current,initial:u.current,isStale:()=>f}),()=>{f=!0}},[a,c]),Gm(()=>(u.current=!1,()=>{u.current=!0}),[]),o}function pw({children:a,in:l,onExited:o,onEntered:u,transition:c}){const[f,h]=b.useState(!l);l&&f&&h(!1);const y=dw({in:!!l,onTransition:m=>{const x=()=>{m.isStale()||(m.in?u?.(m.element,m.initial):(h(!0),o?.(m.element)))};Promise.resolve(c(m)).then(x,S=>{throw m.in||h(!0),S})}}),g=yu(y,Vi(a));return f&&!l?null:b.cloneElement(a,{ref:g})}function Jm(a,l,o){return a?d.jsx(fw,Object.assign({},o,{component:a})):l?d.jsx(pw,Object.assign({},o,{transition:l})):d.jsx(lw,Object.assign({},o))}const hw=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function mw(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}let hf;function gw(a){return hf||(hf=new od({ownerDocument:a?.document})),hf}function vw(a){const l=rd(),o=a||gw(l),u=b.useRef({dialog:null,backdrop:null});return Object.assign(u.current,{add:()=>o.add(u.current),remove:()=>o.remove(u.current),isTopModal:()=>o.isTopModal(u.current),setDialogRef:b.useCallback(c=>{u.current.dialog=c},[]),setBackdropRef:b.useCallback(c=>{u.current.backdrop=c},[])})}const Ev=b.forwardRef((a,l)=>{let{show:o=!1,role:u="dialog",className:c,style:f,children:h,backdrop:y=!0,keyboard:g=!0,onBackdropClick:m,onEscapeKeyDown:x,transition:S,runTransition:C,backdropTransition:D,runBackdropTransition:R,autoFocus:$=!0,enforceFocus:B=!0,restoreFocus:V=!0,restoreFocusOptions:A,renderDialog:O,renderBackdrop:U=Be=>d.jsx("div",Object.assign({},Be)),manager:N,container:M,onShow:Z,onHide:G=()=>{},onExit:J,onExited:ue,onExiting:W,onEnter:L,onEntering:ee,onEntered:ne}=a,T=mw(a,hw);const _=rd(),Y=iw(M),F=vw(N),oe=z8(),ae=O8(o),[E,K]=b.useState(!o),le=b.useRef(null);b.useImperativeHandle(l,()=>F,[F]),hu&&!ae&&o&&(le.current=df(_?.document)),o&&E&&K(!1);const ie=Nn(()=>{if(F.add(),jt.current=au(document,"keydown",$e),je.current=au(document,"focus",()=>setTimeout(he),!0),Z&&Z(),$){var Be,Ya;const Qi=df((Be=(Ya=F.dialog)==null?void 0:Ya.ownerDocument)!=null?Be:_?.document);F.dialog&&Qi&&!Xm(F.dialog,Qi)&&(le.current=Qi,F.dialog.focus())}}),fe=Nn(()=>{if(F.remove(),jt.current==null||jt.current(),je.current==null||je.current(),V){var Be;(Be=le.current)==null||Be.focus==null||Be.focus(A),le.current=null}});b.useEffect(()=>{!o||!Y||ie()},[o,Y,ie]),b.useEffect(()=>{E&&fe()},[E,fe]),nw(()=>{fe()});const he=Nn(()=>{if(!B||!oe()||!F.isTopModal())return;const Be=df(_?.document);F.dialog&&Be&&!Xm(F.dialog,Be)&&F.dialog.focus()}),be=Nn(Be=>{Be.target===Be.currentTarget&&(m?.(Be),y===!0&&G())}),$e=Nn(Be=>{g&&d8(Be)&&F.isTopModal()&&(x?.(Be),Be.defaultPrevented||G())}),je=b.useRef(),jt=b.useRef(),Wt=(...Be)=>{K(!0),ue?.(...Be)};if(!Y)return null;const mt=Object.assign({role:u,ref:F.setDialogRef,"aria-modal":u==="dialog"?!0:void 0},T,{style:f,className:c,tabIndex:-1});let qa=O?O(mt):d.jsx("div",Object.assign({},mt,{children:b.cloneElement(h,{role:"document"})}));qa=Jm(S,C,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!o,onExit:J,onExiting:W,onExited:Wt,onEnter:L,onEntering:ee,onEntered:ne,children:qa});let Bt=null;return y&&(Bt=U({ref:F.setBackdropRef,onClick:be}),Bt=Jm(D,R,{in:!!o,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Bt})),d.jsx(d.Fragment,{children:_i.createPortal(d.jsxs(d.Fragment,{children:[Bt,qa]}),Y)})});Ev.displayName="Modal";const yw=Object.assign(Ev,{Manager:od});function bw(a,l){return a.classList?a.classList.contains(l):(" "+(a.className.baseVal||a.className)+" ").indexOf(" "+l+" ")!==-1}function xw(a,l){a.classList?a.classList.add(l):bw(a,l)||(typeof a.className=="string"?a.className=a.className+" "+l:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+l))}function Fm(a,l){return a.replace(new RegExp("(^|\\s)"+l+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Sw(a,l){a.classList?a.classList.remove(l):typeof a.className=="string"?a.className=Fm(a.className,l):a.setAttribute("class",Fm(a.className&&a.className.baseVal||"",l))}const Oi={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Cv extends od{adjustAndStore(l,o,u){const c=o.style[l];o.dataset[l]=c,Ln(o,{[l]:`${parseFloat(Ln(o,l))+u}px`})}restore(l,o){const u=o.dataset[l];u!==void 0&&(delete o.dataset[l],Ln(o,{[l]:u}))}setContainerStyle(l){super.setContainerStyle(l);const o=this.getElement();if(xw(o,"modal-open"),!l.scrollBarWidth)return;const u=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";Ba(o,Oi.FIXED_CONTENT).forEach(f=>this.adjustAndStore(u,f,l.scrollBarWidth)),Ba(o,Oi.STICKY_CONTENT).forEach(f=>this.adjustAndStore(c,f,-l.scrollBarWidth)),Ba(o,Oi.NAVBAR_TOGGLER).forEach(f=>this.adjustAndStore(c,f,l.scrollBarWidth))}removeContainerStyle(l){super.removeContainerStyle(l);const o=this.getElement();Sw(o,"modal-open");const u=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";Ba(o,Oi.FIXED_CONTENT).forEach(f=>this.restore(u,f)),Ba(o,Oi.STICKY_CONTENT).forEach(f=>this.restore(c,f)),Ba(o,Oi.NAVBAR_TOGGLER).forEach(f=>this.restore(c,f))}}let mf;function ww(a){return mf||(mf=new Cv(a)),mf}const jv=b.createContext({onHide(){}}),Tv=b.forwardRef(({closeLabel:a="Close",closeVariant:l,closeButton:o=!1,onHide:u,children:c,...f},h)=>{const y=b.useContext(jv),g=gu(()=>{y?.onHide(),u?.()});return d.jsxs("div",{ref:h,...f,children:[c,o&&d.jsx(ad,{"aria-label":a,variant:l,onClick:g})]})});Tv.displayName="AbstractModalHeader";const Rv=b.forwardRef(({className:a,bsPrefix:l,as:o="div",...u},c)=>(l=Ct(l,"nav-item"),d.jsx(o,{ref:c,className:lt(a,l),...u})));Rv.displayName="NavItem";const Mv=b.forwardRef(({bsPrefix:a,className:l,as:o=hv,active:u,eventKey:c,disabled:f=!1,...h},y)=>{a=Ct(a,"nav-link");const[g,m]=xv({key:id(c,h.href),active:u,disabled:f,...h});return d.jsx(o,{...h,...g,ref:y,disabled:f,className:lt(l,a,f&&"disabled",m.isActive&&"active")})});Mv.displayName="NavLink";const zv=b.forwardRef((a,l)=>{const{as:o="div",bsPrefix:u,variant:c,fill:f=!1,justify:h=!1,navbar:y,navbarScroll:g,className:m,activeKey:x,...S}=ov(a,{activeKey:"onSelect"}),C=Ct(u,"nav");let D,R,$=!1;const B=b.useContext(Ki),V=b.useContext(gv);return B?(D=B.bsPrefix,$=y??!0):V&&({cardHeaderBsPrefix:R}=V),d.jsx(ew,{as:o,ref:l,activeKey:x,className:lt(m,{[C]:!$,[`${D}-nav`]:$,[`${D}-nav-scroll`]:$&&g,[`${R}-${c}`]:!!R,[`${C}-${c}`]:!!c,[`${C}-fill`]:f,[`${C}-justified`]:h}),...S})});zv.displayName="Nav";const Ew=Object.assign(zv,{Item:Rv,Link:Mv}),Ov=b.forwardRef(({bsPrefix:a,className:l,as:o,...u},c)=>{a=Ct(a,"navbar-brand");const f=o||(u.href?"a":"span");return d.jsx(f,{...u,ref:c,className:lt(l,a)})});Ov.displayName="NavbarBrand";const Av=b.forwardRef(({children:a,bsPrefix:l,...o},u)=>{l=Ct(l,"navbar-collapse");const c=b.useContext(Ki);return d.jsx(fv,{in:!!(c&&c.expanded),...o,children:d.jsx("div",{ref:u,className:l,children:a})})});Av.displayName="NavbarCollapse";const _v=b.forwardRef(({bsPrefix:a,className:l,children:o,label:u="Toggle navigation",as:c="button",onClick:f,...h},y)=>{a=Ct(a,"navbar-toggler");const{onToggle:g,expanded:m}=b.useContext(Ki)||{},x=gu(S=>{f&&f(S),g&&g()});return c==="button"&&(h.type="button"),d.jsx(c,{...h,ref:y,onClick:x,"aria-label":u,className:lt(l,a,!m&&"collapsed"),children:o||d.jsx("span",{className:`${a}-icon`})})});_v.displayName="NavbarToggle";const Df=new WeakMap,Wm=(a,l)=>{if(!a||!l)return;const o=Df.get(l)||new Map;Df.set(l,o);let u=o.get(a);return u||(u=l.matchMedia(a),u.refCount=0,o.set(u.media,u)),u};function Cw(a,l=typeof window>"u"?void 0:window){const o=Wm(a,l),[u,c]=b.useState(()=>o?o.matches:!1);return Z8(()=>{let f=Wm(a,l);if(!f)return c(!1);let h=Df.get(l);const y=()=>{c(f.matches)};return f.refCount++,f.addListener(y),y(),()=>{f.removeListener(y),f.refCount--,f.refCount<=0&&h?.delete(f.media),f=void 0}},[a]),u}function jw(a){const l=Object.keys(a);function o(y,g){return y===g?g:y?`${y} and ${g}`:g}function u(y){return l[Math.min(l.indexOf(y)+1,l.length-1)]}function c(y){const g=u(y);let m=a[g];return typeof m=="number"?m=`${m-.2}px`:m=`calc(${m} - 0.2px)`,`(max-width: ${m})`}function f(y){let g=a[y];return typeof g=="number"&&(g=`${g}px`),`(min-width: ${g})`}function h(y,g,m){let x;typeof y=="object"?(x=y,m=g,g=!0):(g=g||!0,x={[y]:g});let S=b.useMemo(()=>Object.entries(x).reduce((C,[D,R])=>((R==="up"||R===!0)&&(C=o(C,f(D))),(R==="down"||R===!0)&&(C=o(C,c(D))),C),""),[JSON.stringify(x)]);return Cw(S,m)}return h}const Tw=jw({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),Dv=b.forwardRef(({className:a,bsPrefix:l,as:o="div",...u},c)=>(l=Ct(l,"offcanvas-body"),d.jsx(o,{ref:c,className:lt(a,l),...u})));Dv.displayName="OffcanvasBody";const Rw={[nn]:"show",[Dn]:"show"},Nv=b.forwardRef(({bsPrefix:a,className:l,children:o,in:u=!1,mountOnEnter:c=!1,unmountOnExit:f=!1,appear:h=!1,...y},g)=>(a=Ct(a,"offcanvas"),d.jsx(mu,{ref:g,addEndListener:nd,in:u,mountOnEnter:c,unmountOnExit:f,appear:h,...y,childRef:Vi(o),children:(m,x)=>b.cloneElement(o,{...x,className:lt(l,o.props.className,(m===nn||m===ar)&&`${a}-toggling`,Rw[m])})})));Nv.displayName="OffcanvasToggling";const kv=b.forwardRef(({bsPrefix:a,className:l,closeLabel:o="Close",closeButton:u=!1,...c},f)=>(a=Ct(a,"offcanvas-header"),d.jsx(Tv,{ref:f,...c,className:lt(l,a),closeLabel:o,closeButton:u})));kv.displayName="OffcanvasHeader";const Mw=R8("h5"),Lv=b.forwardRef(({className:a,bsPrefix:l,as:o=Mw,...u},c)=>(l=Ct(l,"offcanvas-title"),d.jsx(o,{ref:c,className:lt(a,l),...u})));Lv.displayName="OffcanvasTitle";function zw(a){return d.jsx(Nv,{...a})}function Ow(a){return d.jsx(mv,{...a})}const $v=b.forwardRef(({bsPrefix:a,className:l,children:o,"aria-labelledby":u,placement:c="start",responsive:f,show:h=!1,backdrop:y=!0,keyboard:g=!0,scroll:m=!1,onEscapeKeyDown:x,onShow:S,onHide:C,container:D,autoFocus:R=!0,enforceFocus:$=!0,restoreFocus:B=!0,restoreFocusOptions:V,onEntered:A,onExit:O,onExiting:U,onEnter:N,onEntering:M,onExited:Z,backdropClassName:G,manager:J,renderStaticNode:ue=!1,...W},L)=>{const ee=b.useRef();a=Ct(a,"offcanvas");const[ne,T]=b.useState(!1),_=gu(C),Y=Tw(f||"xs","up");b.useEffect(()=>{T(f?h&&!Y:h)},[h,f,Y]);const F=b.useMemo(()=>({onHide:_}),[_]);function oe(){return J||(m?(ee.current||(ee.current=new Cv({handleContainerOverflow:!1})),ee.current):ww())}const ae=(ie,...fe)=>{ie&&(ie.style.visibility="visible"),N?.(ie,...fe)},E=(ie,...fe)=>{ie&&(ie.style.visibility=""),Z?.(...fe)},K=b.useCallback(ie=>d.jsx("div",{...ie,className:lt(`${a}-backdrop`,G)}),[G,a]),le=ie=>d.jsx("div",{...ie,...W,className:lt(l,f?`${a}-${f}`:a,`${a}-${c}`),"aria-labelledby":u,children:o});return d.jsxs(d.Fragment,{children:[!ne&&(f||ue)&&le({}),d.jsx(jv.Provider,{value:F,children:d.jsx(yw,{show:ne,ref:L,backdrop:y,container:D,keyboard:g,autoFocus:R,enforceFocus:$&&!m,restoreFocus:B,restoreFocusOptions:V,onEscapeKeyDown:x,onShow:S,onHide:_,onEnter:ae,onEntering:M,onEntered:A,onExit:O,onExiting:U,onExited:E,manager:oe(),transition:zw,backdropTransition:Ow,renderBackdrop:K,renderDialog:le})})]})});$v.displayName="Offcanvas";const Aw=Object.assign($v,{Body:Dv,Header:kv,Title:Lv}),Bv=b.forwardRef(({onHide:a,...l},o)=>{const u=b.useContext(Ki),c=gu(()=>{u==null||u.onToggle==null||u.onToggle(),a?.()});return d.jsx(Aw,{ref:o,show:!!(u!=null&&u.expanded),...l,renderStaticNode:!0,onHide:c})});Bv.displayName="NavbarOffcanvas";const Uv=b.forwardRef(({className:a,bsPrefix:l,as:o="span",...u},c)=>(l=Ct(l,"navbar-text"),d.jsx(o,{ref:c,className:lt(a,l),...u})));Uv.displayName="NavbarText";const Hv=b.forwardRef((a,l)=>{const{bsPrefix:o,expand:u=!0,variant:c="light",bg:f,fixed:h,sticky:y,className:g,as:m="nav",expanded:x,onToggle:S,onSelect:C,collapseOnSelect:D=!1,...R}=ov(a,{expanded:"onToggle"}),$=Ct(o,"navbar"),B=b.useCallback((...O)=>{C?.(...O),D&&x&&S?.(!1)},[C,D,x,S]);R.role===void 0&&m!=="nav"&&(R.role="navigation");let V=`${$}-expand`;typeof u=="string"&&(V=`${V}-${u}`);const A=b.useMemo(()=>({onToggle:()=>S?.(!x),bsPrefix:$,expanded:!!x,expand:u}),[$,x,u,S]);return d.jsx(Ki.Provider,{value:A,children:d.jsx(iu.Provider,{value:B,children:d.jsx(m,{ref:l,...R,className:lt(g,$,u&&V,c&&`${$}-${c}`,f&&`bg-${f}`,y&&`sticky-${y}`,h&&`fixed-${h}`)})})})});Hv.displayName="Navbar";const _w=Object.assign(Hv,{Brand:Ov,Collapse:Av,Offcanvas:Bv,Text:Uv,Toggle:_v});function Dw(a){return Te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M149.688 85.625c-1.234.005-2.465.033-3.72.063-33.913.806-75.48 10.704-127.25 33.718V362.78c60.77-28.82 106.718-37.067 144.22-33.092 33.502 3.55 59.685 16.66 83.562 31.187v-242.97c-23.217-17.744-50.195-30.04-85.97-32-3.52-.192-7.142-.296-10.843-.28zm211.968 0c-3.7-.016-7.322.088-10.844.28-35.773 1.96-62.75 14.256-85.968 32v242.97c23.876-14.527 50.06-27.637 83.562-31.188 37.502-3.974 83.45 4.272 144.22 33.094V119.407c-51.77-23.014-93.337-32.912-127.25-33.72-1.255-.028-2.486-.056-3.72-.06zm5.72 261.78c-1.038-.002-2.074.017-3.095.033-4.808.075-9.43.37-13.905.843-33.932 3.597-59.603 17.976-85.53 34.44v.28c-6.554-1.99-13.02-2.37-19.408-.97-25.566-16.177-51.003-30.202-84.468-33.75-5.595-.592-11.44-.883-17.564-.842-32.04.213-71.833 9.778-124.687 35.937v42.53c60.77-28.823 106.714-37.067 144.218-33.092 18.545 1.965 34.837 6.845 49.75 13.28-4.682 6.064-9.308 13.268-13.875 21.688h117.156c-5.93-8.22-11.798-15.414-17.626-21.56 14.996-6.503 31.39-11.43 50.062-13.408 37.503-3.974 83.448 4.27 144.22 33.094v-42.53c-53.16-26.31-93.115-35.863-125.25-35.97z"},child:[]}]})(a)}function Nw(a){return Te({attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",fill:"currentColor"},child:[]}]})(a)}const kw=w(_w)`
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
`,Lw=w.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 8px;
`,$w=w.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Bw=w.div`
  justify-self: center;
`,Uw=w.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`,Hw=w.button`
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
`,qw=w(Gi)`
  padding: 10px 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px; /* space between icon and text */
`,Yw=w(Dw)`
  width: 28px;
  height: 28px;
  flex: 0 0 28px;
  color: #f0703c /* keep high contrast; adjust to your brand */
`,Gw=w.div`
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
`;function Xw(){const a=()=>{console.log("Toggled theme")};return d.jsx("div",{className:"topbar-wrapper",children:d.jsx(kw,{className:"shadow-sm d-lg-none",children:d.jsx(vv,{fluid:!0,className:"px-3",children:d.jsxs(Lw,{children:[d.jsx($w,{children:d.jsxs(qw,{to:"/instalearn/","aria-label":"Go to home",children:[d.jsx(Yw,{"aria-hidden":"true"}),d.jsx(Gw,{children:"InstaLearn"})]})}),d.jsx(Bw,{}),d.jsx(Uw,{children:d.jsx(Hw,{type:"button",onClick:a,"aria-label":"Toggle",children:d.jsx(Nw,{size:20})})})]})})})})}const Vw=Ft`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Kw=w.aside`
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
`,Qw=w(Gi)`
  padding: 25px 12px 16px 12px;
  margin-bottom: 19px;
  margin-left: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: padding 200ms ease, margin 200ms ease;
`,Zw=w.div`
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
`,Jw=w.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
`,Fw=va`
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
    animation: ${Vw} 4s linear infinite;
    box-shadow: 0 0 8px rgba(0, 245, 255, 0.8);
  }
`,gf=w(Gi)`
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

  ${a=>a.$active&&Fw}
`,Ww=w.div`
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px solid #dbdbdb;
`,vf=w.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,yf=w.span`
  white-space: nowrap;
  transition: opacity 120ms ease, width 200ms ease;
`;function Pw(){const{pathname:a}=Un(),l=[{to:"/instalearn/",icon:d.jsx(Vg,{}),label:"Home"},{to:"/instalearn/teacher",icon:d.jsx(er,{}),label:"Teacher"},{to:"/instalearn/library",icon:d.jsx(Xg,{}),label:"Library",hasNotification:!0},{to:"/instalearn/notifications",icon:d.jsx(P5,{}),label:"Notifications"},{to:"/instalearn/profile",icon:d.jsx(Kg,{}),label:"Profile"}];return d.jsxs(Kw,{children:[d.jsx(Qw,{to:"/instalearn/",children:d.jsx(Zw,{children:"InstaLearn"})}),d.jsxs(Jw,{children:[l.slice(0,-1).map(o=>d.jsxs(gf,{to:o.to,$active:a===o.to,children:[d.jsx(vf,{children:o.icon}),d.jsx(yf,{children:o.label}),o.hasNotification]},o.to)),d.jsxs(gf,{to:l[l.length-1].to,$active:a===l[l.length-1].to,children:[d.jsx(vf,{children:l[l.length-1].icon}),d.jsx(yf,{children:l[l.length-1].label})]})]}),d.jsx(Ww,{children:d.jsxs(gf,{to:"/instalearn/more",$active:a==="/instalearn/more",children:[d.jsx(vf,{children:d.jsx(I5,{})}),d.jsx(yf,{children:"More"})]})})]})}const Iw=w.div`
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
`,e7=w.div`
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
`,qv=w.div`
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
`,t7=w.div`
  position: relative;
  flex-shrink: 0;
`,n7=w.div`
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
  
  ${qv}:hover & {
    transform: scale(1.05);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }
`,a7=w.div`
  position: absolute;
  bottom: ${a=>a.$width<250?"2px":"4px"};
  right: ${a=>a.$width<250?"0":"2px"};
  width: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  height: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
`,i7=w.div`
  flex: 1;
  min-width: 0;
  display: ${a=>a.$width<180?"none":"block"};
`,l7=w.div`
  font-size: ${a=>a.$width<250?"13px":"14px"};
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,r7=w.div`
  font-size: ${a=>a.$width<250?"11px":"13px"};
  color: #6b7280;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,o7=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,u7=w.div`
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
`,s7=w.button`
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
`,c7=w.div`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.$width<250?"8px":"12px"};
  margin-bottom: 32px;
`,Yv=w.div`
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
`,f7=w.div`
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
  
  ${Yv}:hover & {
    transform: scale(1.05) rotate(5deg);
  }
`,d7=w.div`
  display: flex;
  flex-direction: ${a=>a.$width<200?"column":a.$width<250?"row":"column"};
  align-items: ${a=>a.$width>=200&&a.$width<250?"center":"stretch"};
  flex: 1;
`,p7=w.div`
  flex: 1;
`,h7=w.h4`
  font-size: ${a=>a.$width<250?"12px":"13px"};
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 ${a=>a.$width<250?"2px":"4px"} 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,m7=w.p`
  font-size: ${a=>a.$width<250?"10px":"12px"};
  color: #6b7280;
  margin: 0;
  display: ${a=>a.$width<180?"none":"-webkit-box"};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
`,g7=w.span`
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
`;w.a`
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
`;const v7=({sidebarWidth:a=360})=>{const l={username:"demo_user",name:"Demo User",initials:"DU"},o=[{icon:B1,gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",title:"New Feature: Dark Mode",description:"Enable dark mode for a better night-time experience.",badge:"New",badgeBg:"linear-gradient(135deg, #667eea, #764ba2)"},{icon:e3,gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",title:"Product Tip: Quick Search",description:"Use the search bar to find items faster.",badge:"Tip",badgeBg:"linear-gradient(135deg, #f093fb, #f5576c)"},{icon:W5,gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",title:"Update: Version 2.0",description:"Check out the latest improvements and bug fixes.",badge:"Update",badgeBg:"linear-gradient(135deg, #4facfe, #00f2fe)"}];return d.jsxs(Iw,{children:[d.jsx(e7,{children:d.jsxs(qv,{$width:a,children:[d.jsxs(t7,{children:[d.jsx(n7,{$width:a,children:l.initials}),d.jsx(a7,{$width:a})]}),d.jsxs(i7,{$width:a,children:[d.jsx(l7,{$width:a,children:l.username}),d.jsx(r7,{$width:a,children:l.name})]})]})}),d.jsxs(o7,{children:[d.jsxs(u7,{$width:a,$iconColor:"#667eea",children:[d.jsx(B1,{}),d.jsx("span",{children:"Highlights"})]}),d.jsx(s7,{$width:a,children:"See All"})]}),d.jsx(c7,{$width:a,children:o.map((u,c)=>{const f=u.icon;return d.jsxs(Yv,{$width:a,$glowColor:u.gradient,children:[d.jsx(g7,{$width:a,$bg:u.badgeBg,children:u.badge}),d.jsxs(d7,{$width:a,children:[d.jsx(f7,{$width:a,$gradient:u.gradient,children:d.jsx(f,{})}),d.jsxs(p7,{children:[d.jsx(h7,{$width:a,children:u.title}),d.jsx(m7,{$width:a,children:u.description})]})]})]},c)})})]})};function y7(){const{pathname:a}=Un(),l=[["/instalearn/",d.jsx(Vg,{})],["/instalearn/teacher",d.jsx(er,{})],["/instalearn/library",d.jsx(Xg,{})],["/instalearn/profile",d.jsx(Kg,{})]];return d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
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
      `}),d.jsx(Ew,{className:"bottom-nav fixed-bottom d-flex justify-content-around py-2 d-lg-none",children:l.map(([o,u])=>d.jsx(Gi,{to:o,className:`nav-link fs-4 text-white ${a===o?"active":""}`,children:u},o))})]})}const b7={name:"Siddharth Sir",subject:"SST Teacher",bio:"Exploring history, geography & civics 🌍 | Making SST engaging for Classes 6–12 | CBSE Expert",avatar:pu.teacherProfilePic,concepts:247,students:"1.2K",learns:15,experience:8,bookList:[{title:"SST MARATHON"},{title:"World Geography Simplified"},{title:"Understanding Civics"},{title:"Economics Made Easy"},{title:"Political Science Basics"},{title:"Environment & Society"}]},ft=b7,x7=w.div`
  max-width: 1120px;
  margin: 0 auto;
  background: #fff;
  min-height: 100vh;
`,S7=w.div`
  padding: 1rem 1.5rem;
  @media (min-width: 768px) { padding: 1.5rem 2rem; }
  @media (min-width: 1024px) { padding: 2rem 3rem; }
`,w7=w.div`
  display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 1.5rem;
  @media (min-width: 768px) { flex-direction: row; align-items: flex-start; }
`,E7=w.div`
  display: flex; align-items: center; gap: 1.5rem;
  @media (min-width: 768px) { flex-direction: column; align-items: center; }
`,C7=w.div` position: relative; `,j7=w.img`
  width: 5rem; height: 5rem; border-radius: 50%; object-fit: cover; border: 2px solid #e5e7eb;
  @media (min-width: 768px) { width: 8rem; height: 8rem; }
  @media (min-width: 1024px) { width: 10rem; height: 10rem; }
`,T7=w.div`
  position: absolute;
  top: -6px; left: -6px;
  background: #111827; color: #fff; font-size: 0.65rem; font-weight: 700;
  padding: 0.25rem 0.4rem; border-radius: 8px;
  display: inline-flex; align-items: center; gap: 4px;
`,R7=w.div`
  display: flex; flex: 1; justify-content: space-around; text-align: center;
  @media (min-width: 768px) { display: none; }
`,M7=w.div`
  display: none; gap: 2rem; margin-bottom: 1.5rem;
  @media (min-width: 768px) { display: flex; }
`,Ai=w.div`
  font-weight: 600; font-size: 1.125rem;
  span { font-weight: 400; margin-left: 0.25rem; color: #6b7280; }
`,z7=w.div` flex: 1; `,O7=w.div`
  font-weight: 600; font-size: 1rem;
  @media (min-width: 768px) { font-size: 1.125rem; }
`,A7=w.div`
  font-size: 0.875rem; color: #6b7280;
  @media (min-width: 768px) { font-size: 1rem; }
`,_7=w.div`
  font-size: 0.875rem; margin-top: 0.5rem;
  @media (min-width: 768px) { font-size: 1rem; }
`,D7=w.div`
  font-size: 0.875rem; margin-top: 0.5rem; color: #6b7280;
  @media (min-width: 768px) { font-size: 1rem; }
`,N7=w.div` display: flex; gap: 0.5rem; margin-bottom: 1.5rem; `,k7=w.button`
  flex: 1; background: #3b82f6; color: #fff; font-weight: 600;
  padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;
  @media (min-width: 768px) { flex: initial; padding: 0.5rem 2rem; font-size: 1rem; }
`,L7=w.button`
  flex: 1; border: 1px solid #d1d5db; font-weight: 600;
  padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; position: relative;
  @media (min-width: 768px) { flex: initial; padding: 0.5rem 2rem; font-size: 1rem; }
  &[data-joined="true"] {
    background: #10b9810f; border-color: #10b981; color: #065f46;
  }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,$7=w.button`
  border: 1px solid #d1d5db; padding: 0.25rem 1rem; border-radius: 0.5rem;
`,B7=w.div`
  display: ${({hidden:a})=>a?"none":"flex"};
  align-items: center; justify-content: space-between;
  gap: 0.75rem; padding: 0.75rem 1rem; border: 1px dashed #d1d5db;
  border-radius: 12px; background: #f9fafb; color: #111827; margin-bottom: 1rem;
`,U7=w.div`
  font-size: 0.9rem; display: flex; align-items: center; gap: 8px;
  svg { flex-shrink: 0; }
`,H7=w.button`
  border: 1px solid #111827; background: #111827; color: #fff;
  border-radius: 10px; padding: 0.5rem 0.85rem; font-weight: 700; font-size: 0.875rem;
`,q7=w.div` margin-bottom: 1.5rem; `,Y7=w.div`
  display: flex; gap: 1rem; overflow-x: auto; padding-bottom: 0.5rem;
`,G7=w.div`
  display: flex; flex-direction: column; align-items: center; min-width: fit-content; cursor: pointer; position: relative;
`,X7=w.div`
  position: absolute; inset: 0; border-radius: 9999px; display: flex; align-items: center; justify-content: center;
  background: rgba(17,24,39,0.55); color: #fff; font-weight: 700; font-size: 0.75rem;
  backdrop-filter: blur(2px);
`,V7=w.div`
  width: 4rem; height: 4rem; border-radius: 50%; padding: 0.125rem;
  background: linear-gradient(to top right, #a78bfa, #f472b6, #fb923c);
  @media (min-width: 768px) { width: 5rem; height: 5rem; }
  @media (min-width: 1024px) { width: 6rem; height: 6rem; }
  filter: ${({$locked:a})=>a?"grayscale(0.8)":"none"};
  opacity: ${({$locked:a})=>a?.6:1};
`,K7=w.div`
  width: 100%; height: 100%; border-radius: 50%; padding: 0.25rem; background: #fff;
  display: flex; align-items: center; justify-content: center;
`,Q7=w.div`
  font-size: 0.75rem; color: #374151; text-align: center; margin-top: 0.25rem;
  max-width: 4.375rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  @media (min-width: 768px) { font-size: 0.875rem; max-width: 5.625rem; }
  opacity: ${({$locked:a})=>a?.6:1};
`,Z7=w.div` display: flex; border-top: 1px solid #e5e7eb; `,Pm=w.button`
  flex: 1; padding: 0.75rem 0; display: flex; justify-content: center; align-items: center; gap: 0.5rem;
  border-top: 2px solid ${({active:a})=>a?"#111827":"transparent"};
  color: ${({active:a})=>a?"#111827":"#9ca3af"};
`,J7=w.div`
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.25rem;
  @media (min-width: 768px) { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.5rem; }
  @media (min-width: 1024px) { grid-template-columns: repeat(5, minmax(0, 1fr)); }
  @media (min-width: 1280px) { grid-template-columns: repeat(6, minmax(0, 1fr)); }
`,F7=w.div`
  aspect-ratio: 1 / 1; background: #f3f4f6; display: flex; justify-content: center; align-items: center; position: relative;
  filter: ${({$locked:a})=>a?"blur(2px)":"none"};
  overflow: hidden;
`,W7=w.div`
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  background: rgba(17,24,39,0.45); color: #fff; font-weight: 800; font-size: 0.8rem;
`,P7=w.button`
  margin: 0.75rem auto 1.25rem; display: ${({hidden:a})=>a?"none":"block"};
  background: #111827; color: #fff; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 700;
`,I7=w.div`
  position: fixed; inset: 0; background: rgba(17, 24, 39, 0.6);
  display: flex; align-items: center; justify-content: center; z-index: 50;
`,e9=w.div`
  width: min(96vw, 720px); background: #ffffff; border-radius: 16px;
  box-shadow: 0 20px 48px rgba(0,0,0,0.18); overflow: hidden;
`,t9=w.div`
  display: flex; justify-content: space-between; align-items: center;
  padding: 1rem 1.25rem; border-bottom: 1px solid #f3f4f6;
`,n9=w.h3`
  margin: 0; font-size: 1rem; font-weight: 700; color: #111827;
`,a9=w.button`
  border: 1px solid #e5e7eb; background: #fff; border-radius: 8px; padding: 0.25rem;
`,i9=w.div`
  padding: 1rem; display: grid; gap: 1rem;
  @media (min-width: 768px) { grid-template-columns: repeat(3, 1fr); }
`,l9=w.button`
  border: 1px solid ${({$active:a})=>a?"#2563eb":"#e5e7eb"};
  border-radius: 14px; padding: 1rem; text-align: left; background: ${({$active:a})=>a?"#eff6ff":"#fff"};
  display: grid; gap: 0.25rem; cursor: pointer;
  &:hover { border-color: #2563eb; }
  h4 { margin: 0; font-size: 1rem; font-weight: 700; color: #111827; }
  p { margin: 0; color: #6b7280; font-size: 0.875rem; }
  strong { font-size: 1.25rem; }
`,r9=w.div`
  border-top: 1px solid #f3f4f6; padding: 0.75rem 1.25rem; display: flex; gap: 0.5rem; justify-content: flex-end;
`,o9=w.button`
  background: #111827; color: #fff; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 700;
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,u9=w.button`
  border: 1px solid #d1d5db; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 600; background: #fff;
`;function s9(){b.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]);const a=kf(),[l,o]=b.useState(!1),[u,c]=b.useState("basic"),[f,h]=b.useState(!1),[y,g]=b.useState(!1),m=3,x=3;b.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]),b.useEffect(()=>{const B=`joined:${ft?.id||ft?.name}`;localStorage.getItem(B)==="true"&&g(!0)},[]),b.useEffect(()=>{const B=`joined:${ft?.id||ft?.name}`;localStorage.setItem(B,y?"true":"false")},[y]);const S=B=>{if(!y&&B>=m){o(!0);return}B===0&&a("/instalearn/library")},C=()=>{y||o(!0)},D=async()=>{h(!0),await new Promise(B=>setTimeout(B,1500)),h(!1),g(!0),o(!1)},R=[{key:"basic",name:"Basic",price:"₹0",desc:"Demo access: 3 lessons"},{key:"pro",name:"Pro",price:"₹99",desc:"Monthly: full library"},{key:"team",name:"Team",price:"₹1,99",desc:"Up to 10 students"}],$=y;return d.jsxs(x7,{children:[d.jsxs(S7,{children:[d.jsxs(w7,{children:[d.jsxs(E7,{children:[d.jsxs(C7,{children:[d.jsx(j7,{src:ft.avatar,alt:ft.name}),!y&&d.jsxs(T7,{"aria-hidden":"true",title:"Pro library locked",children:[d.jsx(Lo,{size:12})," LOCKED"]})]}),d.jsxs(R7,{children:[d.jsxs(Ai,{children:[ft.concepts," ",d.jsx("span",{children:"concepts"})]}),d.jsxs(Ai,{children:[ft.students," ",d.jsx("span",{children:"students"})]}),d.jsxs(Ai,{children:[ft.learns," ",d.jsx("span",{children:"learns"})]})]})]}),d.jsxs(z7,{children:[d.jsxs(M7,{children:[d.jsxs(Ai,{children:[ft.concepts," ",d.jsx("span",{children:"concepts"})]}),d.jsxs(Ai,{children:[ft.students," ",d.jsx("span",{children:"students"})]}),d.jsxs(Ai,{children:[ft.learns," ",d.jsx("span",{children:"learns"})]})]}),d.jsx(O7,{children:ft.name}),d.jsx(A7,{children:ft.subject}),d.jsx(_7,{children:ft.bio}),d.jsxs(D7,{children:["🎓 ",ft.experience," years experience"]}),d.jsxs(N7,{children:[d.jsx(k7,{children:"Follow"}),d.jsx(L7,{onClick:C,disabled:f,"data-joined":y,"aria-pressed":y,"aria-label":y?"Joined":"Join",title:y?"You're in!":"Join this teacher",children:y?d.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[d.jsx(v6,{size:18})," Joined"]}):f?"Processing…":"Join"}),d.jsx($7,{"aria-label":"More options",children:"▼"})]}),d.jsxs(B7,{hidden:$,role:"note","aria-live":"polite",children:[d.jsxs(U7,{children:[d.jsx(Lo,{size:18})," Pro library locked — get full access to all concepts & posts."]}),d.jsx(H7,{onClick:()=>o(!0),"aria-label":"Unlock full library",children:"Unlock"})]})]})]}),d.jsx(q7,{children:d.jsx(Y7,{children:ft.bookList.map((B,V)=>{const A=!y&&V>=m;return d.jsxs(G7,{onClick:()=>S(V),"aria-disabled":A,title:A?"Join to unlock":`Open ${B.title}`,children:[d.jsx(V7,{$locked:A,children:d.jsx(K7,{children:d.jsx(Ni,{size:24})})}),d.jsx(Q7,{$locked:A,children:B.title}),!y&&A&&d.jsxs(X7,{children:[d.jsx(Lo,{size:14,style:{marginRight:6}})," Locked"]})]},V)})})})]}),d.jsxs(Z7,{children:[d.jsx(Pm,{active:!0,children:d.jsx(M6,{size:20})}),d.jsx(Pm,{children:d.jsx(p6,{size:20})})]}),d.jsx(J7,{"aria-label":"Teacher posts",children:Array(9).fill(null).map((B,V)=>{const A=!y&&V>=x;return d.jsxs(F7,{$locked:A,"aria-hidden":!1,children:[d.jsx(Ni,{size:24}),A&&d.jsxs(W7,{children:[d.jsx(Lo,{size:16,style:{marginRight:6}})," Join to view"]})]},V)})}),d.jsx(P7,{hidden:y,onClick:()=>o(!0),"aria-label":"Unlock all posts",children:"Unlock entire library"}),l&&d.jsx(I7,{role:"dialog","aria-modal":"true","aria-labelledby":"pricing-title",children:d.jsxs(e9,{children:[d.jsxs(t9,{children:[d.jsx(n9,{id:"pricing-title",children:"Choose your plan"}),d.jsx(a9,{onClick:()=>o(!1),"aria-label":"Close pricing",children:d.jsx(k6,{size:18})})]}),d.jsx(i9,{children:R.map(B=>d.jsxs(l9,{onClick:()=>c(B.key),$active:u===B.key,"aria-pressed":u===B.key,children:[d.jsx("h4",{children:B.name}),d.jsx("strong",{children:B.price}),d.jsx("p",{children:B.desc})]},B.key))}),d.jsxs(r9,{children:[d.jsx(u9,{onClick:()=>o(!1),children:"Not now"}),d.jsx(o9,{onClick:D,disabled:f,children:f?"Processing payment…":"Demo Pay & Join"})]})]})})]})}const c9=w.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--color-light, #f5f5f5);
`,f9=w.aside`
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
`,d9=w.div`
  flex: 1;
  display: flex;
  width: 100%;

  @media (min-width: 1024px) {
    /* match LeftSidebar width exactly to avoid layout jump */
    margin-left: 246px;
  }
`,p9=w.main`
  flex: 1;
  width: 100%;
  padding-bottom: 60px;
  transition: ${a=>a.$isResizing?"none":"margin-right 0.2s ease"};
  will-change: margin-right;

  @media (min-width: 1024px) {
    padding-bottom: 0;
    margin-right: ${a=>`${a.$sidebarWidth}px`};
  }
`,h9=w.aside`
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
`,m9=w.div`
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
`,g9=w.div`
  display: block;
  margin-bottom: 60px;

  @media (min-width: 1024px) {
    display: none;
  }
`,v9=w.div`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (min-width: 1024px) {
    display: none;
  }
`;function y9(){const[a,l]=b.useState(360),[o,u]=b.useState(!1),c=b.useRef(null),f=350,h=600,y=g=>{g.preventDefault(),u(!0),c.current={startX:g.clientX,startWidth:a}};return b.useEffect(()=>{const g=(S,C,D)=>Math.min(Math.max(S,C),D),m=S=>{if(!o||!c.current)return;const{startX:C,startWidth:D}=c.current,R=C-S.clientX,$=g(D+R,f,h);l($)},x=()=>{o&&(u(!1),c.current=null)};return o&&(document.addEventListener("mousemove",m),document.addEventListener("mouseup",x),document.body.style.cursor="ew-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",x),document.body.style.cursor="",document.body.style.userSelect=""}},[o]),d.jsxs(c9,{children:[d.jsx(f9,{children:d.jsx(Pw,{})}),d.jsxs(d9,{children:[d.jsxs(p9,{$sidebarWidth:a,$isResizing:o,children:[d.jsx(g9,{children:d.jsx(Xw,{})}),d.jsxs(cx,{children:[d.jsx($a,{path:"/instalearn",element:d.jsx(nS,{})}),d.jsx($a,{path:"/instalearn/teacher",element:d.jsx(s9,{})}),d.jsx($a,{path:"/instalearn/library",element:d.jsx(a6,{})}),d.jsx($a,{path:"/instalearn/notifications",element:d.jsx(Bm,{})}),d.jsx($a,{path:"/instalearn/more",element:d.jsx(Bm,{})}),d.jsx($a,{path:"/instalearn/profile",element:d.jsx(NS,{})})]})]}),d.jsxs(h9,{$width:a,$isResizing:o,children:[d.jsx(m9,{className:o?"active":"",onMouseDown:y,"aria-label":"Resize sidebar"}),d.jsx(v7,{})]})]}),d.jsx(v9,{children:d.jsx(y7,{})})]})}xb.createRoot(document.getElementById("root")).render(d.jsx(Dx,{children:d.jsx(y9,{})}));
