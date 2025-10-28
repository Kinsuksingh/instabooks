(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function u(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(c){if(c.ep)return;c.ep=!0;const f=u(c);fetch(c.href,f)}})();function ir(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var kc={exports:{}},Hl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s1;function hx(){if(s1)return Hl;s1=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function u(o,c,f){var h=null;if(f!==void 0&&(h=""+f),c.key!==void 0&&(h=""+c.key),"key"in c){f={};for(var y in c)y!=="key"&&(f[y]=c[y])}else f=c;return c=f.ref,{$$typeof:a,type:o,key:h,ref:c!==void 0?c:null,props:f}}return Hl.Fragment=l,Hl.jsx=u,Hl.jsxs=u,Hl}var c1;function mx(){return c1||(c1=1,kc.exports=hx()),kc.exports}var d=mx(),Lc={exports:{}},me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f1;function gx(){if(f1)return me;f1=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),E=Symbol.iterator;function D(T){return T===null||typeof T!="object"?null:(T=E&&T[E]||T["@@iterator"],typeof T=="function"?T:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,B={};function V(T,K,le){this.props=T,this.context=K,this.refs=B,this.updater=le||R}V.prototype.isReactComponent={},V.prototype.setState=function(T,K){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,K,"setState")},V.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function O(){}O.prototype=V.prototype;function A(T,K,le){this.props=T,this.context=K,this.refs=B,this.updater=le||R}var U=A.prototype=new O;U.constructor=A,$(U,V.prototype),U.isPureReactComponent=!0;var N=Array.isArray;function M(){}var J={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function Z(T,K,le){var ie=le.ref;return{$$typeof:a,type:T,key:K,ref:ie!==void 0?ie:null,props:le}}function oe(T,K){return Z(T.type,K,T.props)}function F(T){return typeof T=="object"&&T!==null&&T.$$typeof===a}function L(T){var K={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(le){return K[le]})}var ee=/\/+/g;function ne(T,K){return typeof T=="object"&&T!==null&&T.key!=null?L(""+T.key):K.toString(36)}function j(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(M,M):(T.status="pending",T.then(function(K){T.status==="pending"&&(T.status="fulfilled",T.value=K)},function(K){T.status==="pending"&&(T.status="rejected",T.reason=K)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function _(T,K,le,ie,fe){var he=typeof T;(he==="undefined"||he==="boolean")&&(T=null);var xe=!1;if(T===null)xe=!0;else switch(he){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(T.$$typeof){case a:case l:xe=!0;break;case b:return xe=T._init,_(xe(T._payload),K,le,ie,fe)}}if(xe)return fe=fe(T),xe=ie===""?"."+ne(T,0):ie,N(fe)?(le="",xe!=null&&(le=xe.replace(ee,"$&/")+"/"),_(fe,K,le,"",function(jt){return jt})):fe!=null&&(F(fe)&&(fe=oe(fe,le+(fe.key==null||T&&T.key===fe.key?"":(""+fe.key).replace(ee,"$&/")+"/")+xe)),K.push(fe)),1;xe=0;var $e=ie===""?".":ie+":";if(N(T))for(var je=0;je<T.length;je++)ie=T[je],he=$e+ne(ie,je),xe+=_(ie,K,le,he,fe);else if(je=D(T),typeof je=="function")for(T=je.call(T),je=0;!(ie=T.next()).done;)ie=ie.value,he=$e+ne(ie,je++),xe+=_(ie,K,le,he,fe);else if(he==="object"){if(typeof T.then=="function")return _(j(T),K,le,ie,fe);throw K=String(T),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return xe}function H(T,K,le){if(T==null)return T;var ie=[],fe=0;return _(T,ie,"","",function(he){return K.call(le,he,fe++)}),ie}function W(T){if(T._status===-1){var K=T._result;K=K(),K.then(function(le){(T._status===0||T._status===-1)&&(T._status=1,T._result=le)},function(le){(T._status===0||T._status===-1)&&(T._status=2,T._result=le)}),T._status===-1&&(T._status=0,T._result=K)}if(T._status===1)return T._result.default;throw T._result}var ae=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},se={map:H,forEach:function(T,K,le){H(T,function(){K.apply(this,arguments)},le)},count:function(T){var K=0;return H(T,function(){K++}),K},toArray:function(T){return H(T,function(K){return K})||[]},only:function(T){if(!F(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return me.Activity=S,me.Children=se,me.Component=V,me.Fragment=u,me.Profiler=c,me.PureComponent=A,me.StrictMode=o,me.Suspense=g,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,me.__COMPILER_RUNTIME={__proto__:null,c:function(T){return J.H.useMemoCache(T)}},me.cache=function(T){return function(){return T.apply(null,arguments)}},me.cacheSignal=function(){return null},me.cloneElement=function(T,K,le){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var ie=$({},T.props),fe=T.key;if(K!=null)for(he in K.key!==void 0&&(fe=""+K.key),K)!X.call(K,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&K.ref===void 0||(ie[he]=K[he]);var he=arguments.length-2;if(he===1)ie.children=le;else if(1<he){for(var xe=Array(he),$e=0;$e<he;$e++)xe[$e]=arguments[$e+2];ie.children=xe}return Z(T.type,fe,ie)},me.createContext=function(T){return T={$$typeof:h,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:f,_context:T},T},me.createElement=function(T,K,le){var ie,fe={},he=null;if(K!=null)for(ie in K.key!==void 0&&(he=""+K.key),K)X.call(K,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(fe[ie]=K[ie]);var xe=arguments.length-2;if(xe===1)fe.children=le;else if(1<xe){for(var $e=Array(xe),je=0;je<xe;je++)$e[je]=arguments[je+2];fe.children=$e}if(T&&T.defaultProps)for(ie in xe=T.defaultProps,xe)fe[ie]===void 0&&(fe[ie]=xe[ie]);return Z(T,he,fe)},me.createRef=function(){return{current:null}},me.forwardRef=function(T){return{$$typeof:y,render:T}},me.isValidElement=F,me.lazy=function(T){return{$$typeof:b,_payload:{_status:-1,_result:T},_init:W}},me.memo=function(T,K){return{$$typeof:m,type:T,compare:K===void 0?null:K}},me.startTransition=function(T){var K=J.T,le={};J.T=le;try{var ie=T(),fe=J.S;fe!==null&&fe(le,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(M,ae)}catch(he){ae(he)}finally{K!==null&&le.types!==null&&(K.types=le.types),J.T=K}},me.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},me.use=function(T){return J.H.use(T)},me.useActionState=function(T,K,le){return J.H.useActionState(T,K,le)},me.useCallback=function(T,K){return J.H.useCallback(T,K)},me.useContext=function(T){return J.H.useContext(T)},me.useDebugValue=function(){},me.useDeferredValue=function(T,K){return J.H.useDeferredValue(T,K)},me.useEffect=function(T,K){return J.H.useEffect(T,K)},me.useEffectEvent=function(T){return J.H.useEffectEvent(T)},me.useId=function(){return J.H.useId()},me.useImperativeHandle=function(T,K,le){return J.H.useImperativeHandle(T,K,le)},me.useInsertionEffect=function(T,K){return J.H.useInsertionEffect(T,K)},me.useLayoutEffect=function(T,K){return J.H.useLayoutEffect(T,K)},me.useMemo=function(T,K){return J.H.useMemo(T,K)},me.useOptimistic=function(T,K){return J.H.useOptimistic(T,K)},me.useReducer=function(T,K,le){return J.H.useReducer(T,K,le)},me.useRef=function(T){return J.H.useRef(T)},me.useState=function(T){return J.H.useState(T)},me.useSyncExternalStore=function(T,K,le){return J.H.useSyncExternalStore(T,K,le)},me.useTransition=function(){return J.H.useTransition()},me.version="19.2.0",me}var d1;function ya(){return d1||(d1=1,Lc.exports=gx()),Lc.exports}var x=ya();const Ye=ir(x);var $c={exports:{}},ql={},Bc={exports:{}},Uc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p1;function vx(){return p1||(p1=1,(function(a){function l(_,H){var W=_.length;_.push(H);e:for(;0<W;){var ae=W-1>>>1,se=_[ae];if(0<c(se,H))_[ae]=H,_[W]=se,W=ae;else break e}}function u(_){return _.length===0?null:_[0]}function o(_){if(_.length===0)return null;var H=_[0],W=_.pop();if(W!==H){_[0]=W;e:for(var ae=0,se=_.length,T=se>>>1;ae<T;){var K=2*(ae+1)-1,le=_[K],ie=K+1,fe=_[ie];if(0>c(le,W))ie<se&&0>c(fe,le)?(_[ae]=fe,_[ie]=W,ae=ie):(_[ae]=le,_[K]=W,ae=K);else if(ie<se&&0>c(fe,W))_[ae]=fe,_[ie]=W,ae=ie;else break e}}return H}function c(_,H){var W=_.sortIndex-H.sortIndex;return W!==0?W:_.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var h=Date,y=h.now();a.unstable_now=function(){return h.now()-y}}var g=[],m=[],b=1,S=null,E=3,D=!1,R=!1,$=!1,B=!1,V=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function U(_){for(var H=u(m);H!==null;){if(H.callback===null)o(m);else if(H.startTime<=_)o(m),H.sortIndex=H.expirationTime,l(g,H);else break;H=u(m)}}function N(_){if($=!1,U(_),!R)if(u(g)!==null)R=!0,M||(M=!0,L());else{var H=u(m);H!==null&&j(N,H.startTime-_)}}var M=!1,J=-1,X=5,Z=-1;function oe(){return B?!0:!(a.unstable_now()-Z<X)}function F(){if(B=!1,M){var _=a.unstable_now();Z=_;var H=!0;try{e:{R=!1,$&&($=!1,O(J),J=-1),D=!0;var W=E;try{t:{for(U(_),S=u(g);S!==null&&!(S.expirationTime>_&&oe());){var ae=S.callback;if(typeof ae=="function"){S.callback=null,E=S.priorityLevel;var se=ae(S.expirationTime<=_);if(_=a.unstable_now(),typeof se=="function"){S.callback=se,U(_),H=!0;break t}S===u(g)&&o(g),U(_)}else o(g);S=u(g)}if(S!==null)H=!0;else{var T=u(m);T!==null&&j(N,T.startTime-_),H=!1}}break e}finally{S=null,E=W,D=!1}H=void 0}}finally{H?L():M=!1}}}var L;if(typeof A=="function")L=function(){A(F)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,ne=ee.port2;ee.port1.onmessage=F,L=function(){ne.postMessage(null)}}else L=function(){V(F,0)};function j(_,H){J=V(function(){_(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(_){_.callback=null},a.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<_?Math.floor(1e3/_):5},a.unstable_getCurrentPriorityLevel=function(){return E},a.unstable_next=function(_){switch(E){case 1:case 2:case 3:var H=3;break;default:H=E}var W=E;E=H;try{return _()}finally{E=W}},a.unstable_requestPaint=function(){B=!0},a.unstable_runWithPriority=function(_,H){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var W=E;E=_;try{return H()}finally{E=W}},a.unstable_scheduleCallback=function(_,H,W){var ae=a.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ae+W:ae):W=ae,_){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=W+se,_={id:b++,callback:H,priorityLevel:_,startTime:W,expirationTime:se,sortIndex:-1},W>ae?(_.sortIndex=W,l(m,_),u(g)===null&&_===u(m)&&($?(O(J),J=-1):$=!0,j(N,W-ae))):(_.sortIndex=se,l(g,_),R||D||(R=!0,M||(M=!0,L()))),_},a.unstable_shouldYield=oe,a.unstable_wrapCallback=function(_){var H=E;return function(){var W=E;E=H;try{return _.apply(this,arguments)}finally{E=W}}}})(Uc)),Uc}var h1;function yx(){return h1||(h1=1,Bc.exports=vx()),Bc.exports}var Hc={exports:{}},dt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m1;function xx(){if(m1)return dt;m1=1;var a=ya();function l(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)m+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var o={d:{f:u,r:function(){throw Error(l(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(g,m,b){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:S==null?null:""+S,children:g,containerInfo:m,implementation:b}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,dt.createPortal=function(g,m){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(l(299));return f(g,m,null,b)},dt.flushSync=function(g){var m=h.T,b=o.p;try{if(h.T=null,o.p=2,g)return g()}finally{h.T=m,o.p=b,o.d.f()}},dt.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(g,m))},dt.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},dt.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var b=m.as,S=y(b,m.crossOrigin),E=typeof m.integrity=="string"?m.integrity:void 0,D=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;b==="style"?o.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:E,fetchPriority:D}):b==="script"&&o.d.X(g,{crossOrigin:S,integrity:E,fetchPriority:D,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},dt.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var b=y(m.as,m.crossOrigin);o.d.M(g,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(g)},dt.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var b=m.as,S=y(b,m.crossOrigin);o.d.L(g,b,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},dt.preloadModule=function(g,m){if(typeof g=="string")if(m){var b=y(m.as,m.crossOrigin);o.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(g)},dt.requestFormReset=function(g){o.d.r(g)},dt.unstable_batchedUpdates=function(g,m){return g(m)},dt.useFormState=function(g,m,b){return h.H.useFormState(g,m,b)},dt.useFormStatus=function(){return h.H.useHostTransitionStatus()},dt.version="19.2.0",dt}var g1;function tg(){if(g1)return Hc.exports;g1=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Hc.exports=xx(),Hc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v1;function bx(){if(v1)return ql;v1=1;var a=yx(),l=ya(),u=tg();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(o(188))}function m(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return g(r),e;if(s===i)return g(r),t;s=s.sibling}throw Error(o(188))}if(n.return!==i.return)n=r,i=s;else{for(var p=!1,v=r.child;v;){if(v===n){p=!0,n=r,i=s;break}if(v===i){p=!0,i=r,n=s;break}v=v.sibling}if(!p){for(v=s.child;v;){if(v===n){p=!0,n=s,i=r;break}if(v===i){p=!0,i=s,n=r;break}v=v.sibling}if(!p)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,E=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),A=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),oe=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function L(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Symbol.for("react.client.reference");function ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ee?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case V:return"Profiler";case B:return"StrictMode";case N:return"Suspense";case M:return"SuspenseList";case Z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case A:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case U:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:ne(e.type)||"Memo";case X:t=e._payload,e=e._init;try{return ne(e(t))}catch{}}return null}var j=Array.isArray,_=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ae=[],se=-1;function T(e){return{current:e}}function K(e){0>se||(e.current=ae[se],ae[se]=null,se--)}function le(e,t){se++,ae[se]=e.current,e.current=t}var ie=T(null),fe=T(null),he=T(null),xe=T(null);function $e(e,t){switch(le(he,t),le(fe,e),le(ie,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?_0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=_0(t),e=N0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(ie),le(ie,e)}function je(){K(ie),K(fe),K(he)}function jt(e){e.memoizedState!==null&&le(xe,e);var t=ie.current,n=N0(t,e.type);t!==n&&(le(fe,e),le(ie,n))}function Wt(e){fe.current===e&&(K(ie),K(fe)),xe.current===e&&(K(xe),Ll._currentValue=W)}var mt,qa;function Bt(e){if(mt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);mt=t&&t[1]||"",qa=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mt+e+qa}var Be=!1;function Ya(e,t){if(!e||Be)return"";Be=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var te=function(){throw Error()};if(Object.defineProperty(te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(te,[])}catch(Q){var G=Q}Reflect.construct(e,[],te)}else{try{te.call()}catch(Q){G=Q}e.call(te.prototype)}}else{try{throw Error()}catch(Q){G=Q}(te=e())&&typeof te.catch=="function"&&te.catch(function(){})}}catch(Q){if(Q&&G&&typeof Q.stack=="string")return[Q.stack,G.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),p=s[0],v=s[1];if(p&&v){var C=p.split(`
`),Y=v.split(`
`);for(r=i=0;i<C.length&&!C[i].includes("DetermineComponentFrameRoot");)i++;for(;r<Y.length&&!Y[r].includes("DetermineComponentFrameRoot");)r++;if(i===C.length||r===Y.length)for(i=C.length-1,r=Y.length-1;1<=i&&0<=r&&C[i]!==Y[r];)r--;for(;1<=i&&0<=r;i--,r--)if(C[i]!==Y[r]){if(i!==1||r!==1)do if(i--,r--,0>r||C[i]!==Y[r]){var P=`
`+C[i].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),P}while(1<=i&&0<=r);break}}}finally{Be=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Bt(n):""}function Qi(e,t){switch(e.tag){case 26:case 27:case 5:return Bt(e.type);case 16:return Bt("Lazy");case 13:return e.child!==t&&t!==null?Bt("Suspense Fallback"):Bt("Suspense");case 19:return Bt("SuspenseList");case 0:case 15:return Ya(e.type,!1);case 11:return Ya(e.type.render,!1);case 1:return Ya(e.type,!0);case 31:return Bt("Activity");default:return""}}function sd(e){try{var t="",n=null;do t+=Qi(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var bu=Object.prototype.hasOwnProperty,Su=a.unstable_scheduleCallback,wu=a.unstable_cancelCallback,Kv=a.unstable_shouldYield,Qv=a.unstable_requestPaint,Tt=a.unstable_now,Zv=a.unstable_getCurrentPriorityLevel,cd=a.unstable_ImmediatePriority,fd=a.unstable_UserBlockingPriority,sr=a.unstable_NormalPriority,Jv=a.unstable_LowPriority,dd=a.unstable_IdlePriority,Fv=a.log,Wv=a.unstable_setDisableYieldValue,Zi=null,Rt=null;function qn(e){if(typeof Fv=="function"&&Wv(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Zi,e)}catch{}}var Mt=Math.clz32?Math.clz32:ey,Pv=Math.log,Iv=Math.LN2;function ey(e){return e>>>=0,e===0?32:31-(Pv(e)/Iv|0)|0}var cr=256,fr=262144,dr=4194304;function xa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pr(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var r=0,s=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var v=i&134217727;return v!==0?(i=v&~s,i!==0?r=xa(i):(p&=v,p!==0?r=xa(p):n||(n=v&~e,n!==0&&(r=xa(n))))):(v=i&~s,v!==0?r=xa(v):p!==0?r=xa(p):n||(n=i&~e,n!==0&&(r=xa(n)))),r===0?0:t!==0&&t!==r&&(t&s)===0&&(s=r&-r,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:r}function Ji(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ty(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pd(){var e=dr;return dr<<=1,(dr&62914560)===0&&(dr=4194304),e}function Eu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ny(e,t,n,i,r,s){var p=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var v=e.entanglements,C=e.expirationTimes,Y=e.hiddenUpdates;for(n=p&~n;0<n;){var P=31-Mt(n),te=1<<P;v[P]=0,C[P]=-1;var G=Y[P];if(G!==null)for(Y[P]=null,P=0;P<G.length;P++){var Q=G[P];Q!==null&&(Q.lane&=-536870913)}n&=~te}i!==0&&hd(e,i,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(p&~t))}function hd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Mt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function md(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Mt(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}function gd(e,t){var n=t&-t;return n=(n&42)!==0?1:Cu(n),(n&(e.suspendedLanes|t))!==0?0:n}function Cu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ju(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function vd(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:n1(e.type))}function yd(e,t){var n=H.p;try{return H.p=e,t()}finally{H.p=n}}var Yn=Math.random().toString(36).slice(2),rt="__reactFiber$"+Yn,vt="__reactProps$"+Yn,Ga="__reactContainer$"+Yn,Tu="__reactEvents$"+Yn,ay="__reactListeners$"+Yn,iy="__reactHandles$"+Yn,xd="__reactResources$"+Yn,Wi="__reactMarker$"+Yn;function Ru(e){delete e[rt],delete e[vt],delete e[Tu],delete e[ay],delete e[iy]}function Xa(e){var t=e[rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ga]||n[rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=H0(e);e!==null;){if(n=e[rt])return n;e=H0(e)}return t}e=n,n=e.parentNode}return null}function Va(e){if(e=e[rt]||e[Ga]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Pi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Ka(e){var t=e[xd];return t||(t=e[xd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tt(e){e[Wi]=!0}var bd=new Set,Sd={};function ba(e,t){Qa(e,t),Qa(e+"Capture",t)}function Qa(e,t){for(Sd[e]=t,e=0;e<t.length;e++)bd.add(t[e])}var ly=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wd={},Ed={};function ry(e){return bu.call(Ed,e)?!0:bu.call(wd,e)?!1:ly.test(e)?Ed[e]=!0:(wd[e]=!0,!1)}function hr(e,t,n){if(ry(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function mr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function hn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function oy(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(p){n=""+p,s.call(this,p)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(p){n=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mu(e){if(!e._valueTracker){var t=Cd(e)?"checked":"value";e._valueTracker=oy(e,t,""+e[t])}}function jd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Cd(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function gr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var uy=/[\n"\\]/g;function Ht(e){return e.replace(uy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function zu(e,t,n,i,r,s,p,v){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ut(t)):e.value!==""+Ut(t)&&(e.value=""+Ut(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?Ou(e,p,Ut(t)):n!=null?Ou(e,p,Ut(n)):i!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+Ut(v):e.removeAttribute("name")}function Td(e,t,n,i,r,s,p,v){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Mu(e);return}n=n!=null?""+Ut(n):"",t=t!=null?""+Ut(t):n,v||t===e.value||(e.value=t),e.defaultValue=t}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=v?e.checked:!!i,e.defaultChecked=!!i,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),Mu(e)}function Ou(e,t,n){t==="number"&&gr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Za(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Rd(e,t,n){if(t!=null&&(t=""+Ut(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ut(n):""}function Md(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(o(92));if(j(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Ut(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Mu(e)}function Ja(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var sy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zd(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||sy.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Od(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in t)i=t[r],t.hasOwnProperty(r)&&n[r]!==i&&zd(e,r,i)}else for(var s in t)t.hasOwnProperty(s)&&zd(e,s,t[s])}function Au(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vr(e){return fy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function mn(){}var _u=null;function Nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fa=null,Wa=null;function Ad(e){var t=Va(e);if(t&&(e=t.stateNode)){var n=e[vt]||null;e:switch(e=t.stateNode,t.type){case"input":if(zu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ht(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=i[vt]||null;if(!r)throw Error(o(90));zu(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&jd(i)}break e;case"textarea":Rd(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Za(e,!!n.multiple,t,!1)}}}var Du=!1;function _d(e,t,n){if(Du)return e(t,n);Du=!0;try{var i=e(t);return i}finally{if(Du=!1,(Fa!==null||Wa!==null)&&(io(),Fa&&(t=Fa,e=Wa,Wa=Fa=null,Ad(t),e)))for(t=0;t<e.length;t++)Ad(e[t])}}function Ii(e,t){var n=e.stateNode;if(n===null)return null;var i=n[vt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ku=!1;if(gn)try{var el={};Object.defineProperty(el,"passive",{get:function(){ku=!0}}),window.addEventListener("test",el,el),window.removeEventListener("test",el,el)}catch{ku=!1}var Gn=null,Lu=null,yr=null;function Nd(){if(yr)return yr;var e,t=Lu,n=t.length,i,r="value"in Gn?Gn.value:Gn.textContent,s=r.length;for(e=0;e<n&&t[e]===r[e];e++);var p=n-e;for(i=1;i<=p&&t[n-i]===r[s-i];i++);return yr=r.slice(e,1<i?1-i:void 0)}function xr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function br(){return!0}function Dd(){return!1}function yt(e){function t(n,i,r,s,p){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=p,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(n=e[v],this[v]=n?n(s):s[v]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?br:Dd,this.isPropagationStopped=Dd,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),t}var Sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sr=yt(Sa),tl=S({},Sa,{view:0,detail:0}),dy=yt(tl),$u,Bu,nl,wr=S({},tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nl&&(nl&&e.type==="mousemove"?($u=e.screenX-nl.screenX,Bu=e.screenY-nl.screenY):Bu=$u=0,nl=e),$u)},movementY:function(e){return"movementY"in e?e.movementY:Bu}}),kd=yt(wr),py=S({},wr,{dataTransfer:0}),hy=yt(py),my=S({},tl,{relatedTarget:0}),Uu=yt(my),gy=S({},Sa,{animationName:0,elapsedTime:0,pseudoElement:0}),vy=yt(gy),yy=S({},Sa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xy=yt(yy),by=S({},Sa,{data:0}),Ld=yt(by),Sy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ey={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ey[e])?!!t[e]:!1}function Hu(){return Cy}var jy=S({},tl,{key:function(e){if(e.key){var t=Sy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hu,charCode:function(e){return e.type==="keypress"?xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ty=yt(jy),Ry=S({},wr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$d=yt(Ry),My=S({},tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hu}),zy=yt(My),Oy=S({},Sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ay=yt(Oy),_y=S({},wr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ny=yt(_y),Dy=S({},Sa,{newState:0,oldState:0}),ky=yt(Dy),Ly=[9,13,27,32],qu=gn&&"CompositionEvent"in window,al=null;gn&&"documentMode"in document&&(al=document.documentMode);var $y=gn&&"TextEvent"in window&&!al,Bd=gn&&(!qu||al&&8<al&&11>=al),Ud=" ",Hd=!1;function qd(e,t){switch(e){case"keyup":return Ly.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pa=!1;function By(e,t){switch(e){case"compositionend":return Yd(t);case"keypress":return t.which!==32?null:(Hd=!0,Ud);case"textInput":return e=t.data,e===Ud&&Hd?null:e;default:return null}}function Uy(e,t){if(Pa)return e==="compositionend"||!qu&&qd(e,t)?(e=Nd(),yr=Lu=Gn=null,Pa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bd&&t.locale!=="ko"?null:t.data;default:return null}}var Hy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hy[e.type]:t==="textarea"}function Xd(e,t,n,i){Fa?Wa?Wa.push(i):Wa=[i]:Fa=i,t=fo(t,"onChange"),0<t.length&&(n=new Sr("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var il=null,ll=null;function qy(e){T0(e,0)}function Er(e){var t=Pi(e);if(jd(t))return e}function Vd(e,t){if(e==="change")return t}var Kd=!1;if(gn){var Yu;if(gn){var Gu="oninput"in document;if(!Gu){var Qd=document.createElement("div");Qd.setAttribute("oninput","return;"),Gu=typeof Qd.oninput=="function"}Yu=Gu}else Yu=!1;Kd=Yu&&(!document.documentMode||9<document.documentMode)}function Zd(){il&&(il.detachEvent("onpropertychange",Jd),ll=il=null)}function Jd(e){if(e.propertyName==="value"&&Er(ll)){var t=[];Xd(t,ll,e,Nu(e)),_d(qy,t)}}function Yy(e,t,n){e==="focusin"?(Zd(),il=t,ll=n,il.attachEvent("onpropertychange",Jd)):e==="focusout"&&Zd()}function Gy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Er(ll)}function Xy(e,t){if(e==="click")return Er(t)}function Vy(e,t){if(e==="input"||e==="change")return Er(t)}function Ky(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:Ky;function rl(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!bu.call(t,r)||!zt(e[r],t[r]))return!1}return!0}function Fd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wd(e,t){var n=Fd(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fd(n)}}function Pd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Id(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=gr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gr(e.document)}return t}function Xu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Qy=gn&&"documentMode"in document&&11>=document.documentMode,Ia=null,Vu=null,ol=null,Ku=!1;function ep(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ku||Ia==null||Ia!==gr(i)||(i=Ia,"selectionStart"in i&&Xu(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ol&&rl(ol,i)||(ol=i,i=fo(Vu,"onSelect"),0<i.length&&(t=new Sr("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Ia)))}function wa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ei={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionrun:wa("Transition","TransitionRun"),transitionstart:wa("Transition","TransitionStart"),transitioncancel:wa("Transition","TransitionCancel"),transitionend:wa("Transition","TransitionEnd")},Qu={},tp={};gn&&(tp=document.createElement("div").style,"AnimationEvent"in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),"TransitionEvent"in window||delete ei.transitionend.transition);function Ea(e){if(Qu[e])return Qu[e];if(!ei[e])return e;var t=ei[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tp)return Qu[e]=t[n];return e}var np=Ea("animationend"),ap=Ea("animationiteration"),ip=Ea("animationstart"),Zy=Ea("transitionrun"),Jy=Ea("transitionstart"),Fy=Ea("transitioncancel"),lp=Ea("transitionend"),rp=new Map,Zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zu.push("scrollEnd");function Pt(e,t){rp.set(e,t),ba(t,[e])}var Cr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},qt=[],ti=0,Ju=0;function jr(){for(var e=ti,t=Ju=ti=0;t<e;){var n=qt[t];qt[t++]=null;var i=qt[t];qt[t++]=null;var r=qt[t];qt[t++]=null;var s=qt[t];if(qt[t++]=null,i!==null&&r!==null){var p=i.pending;p===null?r.next=r:(r.next=p.next,p.next=r),i.pending=r}s!==0&&op(n,r,s)}}function Tr(e,t,n,i){qt[ti++]=e,qt[ti++]=t,qt[ti++]=n,qt[ti++]=i,Ju|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Fu(e,t,n,i){return Tr(e,t,n,i),Rr(e)}function Ca(e,t){return Tr(e,null,null,t),Rr(e)}function op(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var r=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&t!==null&&(r=31-Mt(n),e=s.hiddenUpdates,i=e[r],i===null?e[r]=[t]:i.push(t),t.lane=n|536870912),s):null}function Rr(e){if(50<zl)throw zl=0,lc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ni={};function Wy(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,i){return new Wy(e,t,n,i)}function Wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vn(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function up(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Mr(e,t,n,i,r,s){var p=0;if(i=e,typeof e=="function")Wu(e)&&(p=1);else if(typeof e=="string")p=nx(e,n,ie.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Z:return e=Ot(31,n,t,r),e.elementType=Z,e.lanes=s,e;case $:return ja(n.children,r,s,t);case B:p=8,r|=24;break;case V:return e=Ot(12,n,t,r|2),e.elementType=V,e.lanes=s,e;case N:return e=Ot(13,n,t,r),e.elementType=N,e.lanes=s,e;case M:return e=Ot(19,n,t,r),e.elementType=M,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A:p=10;break e;case O:p=9;break e;case U:p=11;break e;case J:p=14;break e;case X:p=16,i=null;break e}p=29,n=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=Ot(p,n,t,r),t.elementType=e,t.type=i,t.lanes=s,t}function ja(e,t,n,i){return e=Ot(7,e,i,t),e.lanes=n,e}function Pu(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function sp(e){var t=Ot(18,null,null,0);return t.stateNode=e,t}function Iu(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var cp=new WeakMap;function Yt(e,t){if(typeof e=="object"&&e!==null){var n=cp.get(e);return n!==void 0?n:(t={value:e,source:t,stack:sd(t)},cp.set(e,t),t)}return{value:e,source:t,stack:sd(t)}}var ai=[],ii=0,zr=null,ul=0,Gt=[],Xt=0,Xn=null,ln=1,rn="";function yn(e,t){ai[ii++]=ul,ai[ii++]=zr,zr=e,ul=t}function fp(e,t,n){Gt[Xt++]=ln,Gt[Xt++]=rn,Gt[Xt++]=Xn,Xn=e;var i=ln;e=rn;var r=32-Mt(i)-1;i&=~(1<<r),n+=1;var s=32-Mt(t)+r;if(30<s){var p=r-r%5;s=(i&(1<<p)-1).toString(32),i>>=p,r-=p,ln=1<<32-Mt(t)+r|n<<r|i,rn=s+e}else ln=1<<s|n<<r|i,rn=e}function es(e){e.return!==null&&(yn(e,1),fp(e,1,0))}function ts(e){for(;e===zr;)zr=ai[--ii],ai[ii]=null,ul=ai[--ii],ai[ii]=null;for(;e===Xn;)Xn=Gt[--Xt],Gt[Xt]=null,rn=Gt[--Xt],Gt[Xt]=null,ln=Gt[--Xt],Gt[Xt]=null}function dp(e,t){Gt[Xt++]=ln,Gt[Xt++]=rn,Gt[Xt++]=Xn,ln=t.id,rn=t.overflow,Xn=e}var ot=null,Ue=null,Ce=!1,Vn=null,Vt=!1,ns=Error(o(519));function Kn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw sl(Yt(t,e)),ns}function pp(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[rt]=e,t[vt]=i,n){case"dialog":Se("cancel",t),Se("close",t);break;case"iframe":case"object":case"embed":Se("load",t);break;case"video":case"audio":for(n=0;n<Al.length;n++)Se(Al[n],t);break;case"source":Se("error",t);break;case"img":case"image":case"link":Se("error",t),Se("load",t);break;case"details":Se("toggle",t);break;case"input":Se("invalid",t),Td(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Se("invalid",t);break;case"textarea":Se("invalid",t),Md(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||O0(t.textContent,n)?(i.popover!=null&&(Se("beforetoggle",t),Se("toggle",t)),i.onScroll!=null&&Se("scroll",t),i.onScrollEnd!=null&&Se("scrollend",t),i.onClick!=null&&(t.onclick=mn),t=!0):t=!1,t||Kn(e,!0)}function hp(e){for(ot=e.return;ot;)switch(ot.tag){case 5:case 31:case 13:Vt=!1;return;case 27:case 3:Vt=!0;return;default:ot=ot.return}}function li(e){if(e!==ot)return!1;if(!Ce)return hp(e),Ce=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||bc(e.type,e.memoizedProps)),n=!n),n&&Ue&&Kn(e),hp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ue=U0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ue=U0(e)}else t===27?(t=Ue,ra(e.type)?(e=jc,jc=null,Ue=e):Ue=t):Ue=ot?Qt(e.stateNode.nextSibling):null;return!0}function Ta(){Ue=ot=null,Ce=!1}function as(){var e=Vn;return e!==null&&(wt===null?wt=e:wt.push.apply(wt,e),Vn=null),e}function sl(e){Vn===null?Vn=[e]:Vn.push(e)}var is=T(null),Ra=null,xn=null;function Qn(e,t,n){le(is,t._currentValue),t._currentValue=n}function bn(e){e._currentValue=is.current,K(is)}function ls(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function rs(e,t,n,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var p=r.child;s=s.firstContext;e:for(;s!==null;){var v=s;s=r;for(var C=0;C<t.length;C++)if(v.context===t[C]){s.lanes|=n,v=s.alternate,v!==null&&(v.lanes|=n),ls(s.return,n,e),i||(p=null);break e}s=v.next}}else if(r.tag===18){if(p=r.return,p===null)throw Error(o(341));p.lanes|=n,s=p.alternate,s!==null&&(s.lanes|=n),ls(p,n,e),p=null}else p=r.child;if(p!==null)p.return=r;else for(p=r;p!==null;){if(p===e){p=null;break}if(r=p.sibling,r!==null){r.return=p.return,p=r;break}p=p.return}r=p}}function ri(e,t,n,i){e=null;for(var r=t,s=!1;r!==null;){if(!s){if((r.flags&524288)!==0)s=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var p=r.alternate;if(p===null)throw Error(o(387));if(p=p.memoizedProps,p!==null){var v=r.type;zt(r.pendingProps.value,p.value)||(e!==null?e.push(v):e=[v])}}else if(r===xe.current){if(p=r.alternate,p===null)throw Error(o(387));p.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Ll):e=[Ll])}r=r.return}e!==null&&rs(t,e,n,i),t.flags|=262144}function Or(e){for(e=e.firstContext;e!==null;){if(!zt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ma(e){Ra=e,xn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ut(e){return mp(Ra,e)}function Ar(e,t){return Ra===null&&Ma(e),mp(e,t)}function mp(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},xn===null){if(e===null)throw Error(o(308));xn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else xn=xn.next=t;return n}var Py=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Iy=a.unstable_scheduleCallback,e2=a.unstable_NormalPriority,Je={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function os(){return{controller:new Py,data:new Map,refCount:0}}function cl(e){e.refCount--,e.refCount===0&&Iy(e2,function(){e.controller.abort()})}var fl=null,us=0,oi=0,ui=null;function t2(e,t){if(fl===null){var n=fl=[];us=0,oi=fc(),ui={status:"pending",value:void 0,then:function(i){n.push(i)}}}return us++,t.then(gp,gp),t}function gp(){if(--us===0&&fl!==null){ui!==null&&(ui.status="fulfilled");var e=fl;fl=null,oi=0,ui=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function n2(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(i.status="rejected",i.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),i}var vp=_.S;_.S=function(e,t){e0=Tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&t2(e,t),vp!==null&&vp(e,t)};var za=T(null);function ss(){var e=za.current;return e!==null?e:Le.pooledCache}function _r(e,t){t===null?le(za,za.current):le(za,t.pool)}function yp(){var e=ss();return e===null?null:{parent:Je._currentValue,pool:e}}var si=Error(o(460)),cs=Error(o(474)),Nr=Error(o(542)),Dr={then:function(){}};function xp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function bp(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(mn,mn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,wp(e),e;default:if(typeof t.status=="string")t.then(mn,mn);else{if(e=Le,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=i}},function(i){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,wp(e),e}throw Aa=t,si}}function Oa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Aa=n,si):n}}var Aa=null;function Sp(){if(Aa===null)throw Error(o(459));var e=Aa;return Aa=null,e}function wp(e){if(e===si||e===Nr)throw Error(o(483))}var ci=null,dl=0;function kr(e){var t=dl;return dl+=1,ci===null&&(ci=[]),bp(ci,e,t)}function pl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Lr(e,t){throw t.$$typeof===E?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ep(e){function t(k,z){if(e){var q=k.deletions;q===null?(k.deletions=[z],k.flags|=16):q.push(z)}}function n(k,z){if(!e)return null;for(;z!==null;)t(k,z),z=z.sibling;return null}function i(k){for(var z=new Map;k!==null;)k.key!==null?z.set(k.key,k):z.set(k.index,k),k=k.sibling;return z}function r(k,z){return k=vn(k,z),k.index=0,k.sibling=null,k}function s(k,z,q){return k.index=q,e?(q=k.alternate,q!==null?(q=q.index,q<z?(k.flags|=67108866,z):q):(k.flags|=67108866,z)):(k.flags|=1048576,z)}function p(k){return e&&k.alternate===null&&(k.flags|=67108866),k}function v(k,z,q,I){return z===null||z.tag!==6?(z=Pu(q,k.mode,I),z.return=k,z):(z=r(z,q),z.return=k,z)}function C(k,z,q,I){var de=q.type;return de===$?P(k,z,q.props.children,I,q.key):z!==null&&(z.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===X&&Oa(de)===z.type)?(z=r(z,q.props),pl(z,q),z.return=k,z):(z=Mr(q.type,q.key,q.props,null,k.mode,I),pl(z,q),z.return=k,z)}function Y(k,z,q,I){return z===null||z.tag!==4||z.stateNode.containerInfo!==q.containerInfo||z.stateNode.implementation!==q.implementation?(z=Iu(q,k.mode,I),z.return=k,z):(z=r(z,q.children||[]),z.return=k,z)}function P(k,z,q,I,de){return z===null||z.tag!==7?(z=ja(q,k.mode,I,de),z.return=k,z):(z=r(z,q),z.return=k,z)}function te(k,z,q){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=Pu(""+z,k.mode,q),z.return=k,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case D:return q=Mr(z.type,z.key,z.props,null,k.mode,q),pl(q,z),q.return=k,q;case R:return z=Iu(z,k.mode,q),z.return=k,z;case X:return z=Oa(z),te(k,z,q)}if(j(z)||L(z))return z=ja(z,k.mode,q,null),z.return=k,z;if(typeof z.then=="function")return te(k,kr(z),q);if(z.$$typeof===A)return te(k,Ar(k,z),q);Lr(k,z)}return null}function G(k,z,q,I){var de=z!==null?z.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return de!==null?null:v(k,z,""+q,I);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case D:return q.key===de?C(k,z,q,I):null;case R:return q.key===de?Y(k,z,q,I):null;case X:return q=Oa(q),G(k,z,q,I)}if(j(q)||L(q))return de!==null?null:P(k,z,q,I,null);if(typeof q.then=="function")return G(k,z,kr(q),I);if(q.$$typeof===A)return G(k,z,Ar(k,q),I);Lr(k,q)}return null}function Q(k,z,q,I,de){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return k=k.get(q)||null,v(z,k,""+I,de);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case D:return k=k.get(I.key===null?q:I.key)||null,C(z,k,I,de);case R:return k=k.get(I.key===null?q:I.key)||null,Y(z,k,I,de);case X:return I=Oa(I),Q(k,z,q,I,de)}if(j(I)||L(I))return k=k.get(q)||null,P(z,k,I,de,null);if(typeof I.then=="function")return Q(k,z,q,kr(I),de);if(I.$$typeof===A)return Q(k,z,q,Ar(z,I),de);Lr(z,I)}return null}function ue(k,z,q,I){for(var de=null,Re=null,ce=z,ve=z=0,Ee=null;ce!==null&&ve<q.length;ve++){ce.index>ve?(Ee=ce,ce=null):Ee=ce.sibling;var Me=G(k,ce,q[ve],I);if(Me===null){ce===null&&(ce=Ee);break}e&&ce&&Me.alternate===null&&t(k,ce),z=s(Me,z,ve),Re===null?de=Me:Re.sibling=Me,Re=Me,ce=Ee}if(ve===q.length)return n(k,ce),Ce&&yn(k,ve),de;if(ce===null){for(;ve<q.length;ve++)ce=te(k,q[ve],I),ce!==null&&(z=s(ce,z,ve),Re===null?de=ce:Re.sibling=ce,Re=ce);return Ce&&yn(k,ve),de}for(ce=i(ce);ve<q.length;ve++)Ee=Q(ce,k,ve,q[ve],I),Ee!==null&&(e&&Ee.alternate!==null&&ce.delete(Ee.key===null?ve:Ee.key),z=s(Ee,z,ve),Re===null?de=Ee:Re.sibling=Ee,Re=Ee);return e&&ce.forEach(function(fa){return t(k,fa)}),Ce&&yn(k,ve),de}function pe(k,z,q,I){if(q==null)throw Error(o(151));for(var de=null,Re=null,ce=z,ve=z=0,Ee=null,Me=q.next();ce!==null&&!Me.done;ve++,Me=q.next()){ce.index>ve?(Ee=ce,ce=null):Ee=ce.sibling;var fa=G(k,ce,Me.value,I);if(fa===null){ce===null&&(ce=Ee);break}e&&ce&&fa.alternate===null&&t(k,ce),z=s(fa,z,ve),Re===null?de=fa:Re.sibling=fa,Re=fa,ce=Ee}if(Me.done)return n(k,ce),Ce&&yn(k,ve),de;if(ce===null){for(;!Me.done;ve++,Me=q.next())Me=te(k,Me.value,I),Me!==null&&(z=s(Me,z,ve),Re===null?de=Me:Re.sibling=Me,Re=Me);return Ce&&yn(k,ve),de}for(ce=i(ce);!Me.done;ve++,Me=q.next())Me=Q(ce,k,ve,Me.value,I),Me!==null&&(e&&Me.alternate!==null&&ce.delete(Me.key===null?ve:Me.key),z=s(Me,z,ve),Re===null?de=Me:Re.sibling=Me,Re=Me);return e&&ce.forEach(function(px){return t(k,px)}),Ce&&yn(k,ve),de}function ke(k,z,q,I){if(typeof q=="object"&&q!==null&&q.type===$&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case D:e:{for(var de=q.key;z!==null;){if(z.key===de){if(de=q.type,de===$){if(z.tag===7){n(k,z.sibling),I=r(z,q.props.children),I.return=k,k=I;break e}}else if(z.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===X&&Oa(de)===z.type){n(k,z.sibling),I=r(z,q.props),pl(I,q),I.return=k,k=I;break e}n(k,z);break}else t(k,z);z=z.sibling}q.type===$?(I=ja(q.props.children,k.mode,I,q.key),I.return=k,k=I):(I=Mr(q.type,q.key,q.props,null,k.mode,I),pl(I,q),I.return=k,k=I)}return p(k);case R:e:{for(de=q.key;z!==null;){if(z.key===de)if(z.tag===4&&z.stateNode.containerInfo===q.containerInfo&&z.stateNode.implementation===q.implementation){n(k,z.sibling),I=r(z,q.children||[]),I.return=k,k=I;break e}else{n(k,z);break}else t(k,z);z=z.sibling}I=Iu(q,k.mode,I),I.return=k,k=I}return p(k);case X:return q=Oa(q),ke(k,z,q,I)}if(j(q))return ue(k,z,q,I);if(L(q)){if(de=L(q),typeof de!="function")throw Error(o(150));return q=de.call(q),pe(k,z,q,I)}if(typeof q.then=="function")return ke(k,z,kr(q),I);if(q.$$typeof===A)return ke(k,z,Ar(k,q),I);Lr(k,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,z!==null&&z.tag===6?(n(k,z.sibling),I=r(z,q),I.return=k,k=I):(n(k,z),I=Pu(q,k.mode,I),I.return=k,k=I),p(k)):n(k,z)}return function(k,z,q,I){try{dl=0;var de=ke(k,z,q,I);return ci=null,de}catch(ce){if(ce===si||ce===Nr)throw ce;var Re=Ot(29,ce,null,k.mode);return Re.lanes=I,Re.return=k,Re}finally{}}}var _a=Ep(!0),Cp=Ep(!1),Zn=!1;function fs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ds(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Jn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ze&2)!==0){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,t=Rr(e),op(e,null,n),t}return Tr(e,i,t,n),Rr(e)}function hl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,md(e,n)}}function ps(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?r=s=p:s=s.next=p,n=n.next}while(n!==null);s===null?r=s=t:s=s.next=t}else r=s=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var hs=!1;function ml(){if(hs){var e=ui;if(e!==null)throw e}}function gl(e,t,n,i){hs=!1;var r=e.updateQueue;Zn=!1;var s=r.firstBaseUpdate,p=r.lastBaseUpdate,v=r.shared.pending;if(v!==null){r.shared.pending=null;var C=v,Y=C.next;C.next=null,p===null?s=Y:p.next=Y,p=C;var P=e.alternate;P!==null&&(P=P.updateQueue,v=P.lastBaseUpdate,v!==p&&(v===null?P.firstBaseUpdate=Y:v.next=Y,P.lastBaseUpdate=C))}if(s!==null){var te=r.baseState;p=0,P=Y=C=null,v=s;do{var G=v.lane&-536870913,Q=G!==v.lane;if(Q?(we&G)===G:(i&G)===G){G!==0&&G===oi&&(hs=!0),P!==null&&(P=P.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var ue=e,pe=v;G=t;var ke=n;switch(pe.tag){case 1:if(ue=pe.payload,typeof ue=="function"){te=ue.call(ke,te,G);break e}te=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=pe.payload,G=typeof ue=="function"?ue.call(ke,te,G):ue,G==null)break e;te=S({},te,G);break e;case 2:Zn=!0}}G=v.callback,G!==null&&(e.flags|=64,Q&&(e.flags|=8192),Q=r.callbacks,Q===null?r.callbacks=[G]:Q.push(G))}else Q={lane:G,tag:v.tag,payload:v.payload,callback:v.callback,next:null},P===null?(Y=P=Q,C=te):P=P.next=Q,p|=G;if(v=v.next,v===null){if(v=r.shared.pending,v===null)break;Q=v,v=Q.next,Q.next=null,r.lastBaseUpdate=Q,r.shared.pending=null}}while(!0);P===null&&(C=te),r.baseState=C,r.firstBaseUpdate=Y,r.lastBaseUpdate=P,s===null&&(r.shared.lanes=0),ta|=p,e.lanes=p,e.memoizedState=te}}function jp(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Tp(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)jp(n[e],t)}var fi=T(null),$r=T(0);function Rp(e,t){e=zn,le($r,e),le(fi,t),zn=e|t.baseLanes}function ms(){le($r,zn),le(fi,fi.current)}function gs(){zn=$r.current,K(fi),K($r)}var At=T(null),Kt=null;function Wn(e){var t=e.alternate;le(Qe,Qe.current&1),le(At,e),Kt===null&&(t===null||fi.current!==null||t.memoizedState!==null)&&(Kt=e)}function vs(e){le(Qe,Qe.current),le(At,e),Kt===null&&(Kt=e)}function Mp(e){e.tag===22?(le(Qe,Qe.current),le(At,e),Kt===null&&(Kt=e)):Pn()}function Pn(){le(Qe,Qe.current),le(At,At.current)}function _t(e){K(At),Kt===e&&(Kt=null),K(Qe)}var Qe=T(0);function Br(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Ec(n)||Cc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Sn=0,ge=null,Ne=null,Fe=null,Ur=!1,di=!1,Na=!1,Hr=0,vl=0,pi=null,a2=0;function Ve(){throw Error(o(321))}function ys(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function xs(e,t,n,i,r,s){return Sn=s,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?fh:Ds,Na=!1,s=n(i,r),Na=!1,di&&(s=Op(t,n,i,r)),zp(e),s}function zp(e){_.H=bl;var t=Ne!==null&&Ne.next!==null;if(Sn=0,Fe=Ne=ge=null,Ur=!1,vl=0,pi=null,t)throw Error(o(300));e===null||We||(e=e.dependencies,e!==null&&Or(e)&&(We=!0))}function Op(e,t,n,i){ge=e;var r=0;do{if(di&&(pi=null),vl=0,di=!1,25<=r)throw Error(o(301));if(r+=1,Fe=Ne=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}_.H=dh,s=t(n,i)}while(di);return s}function i2(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?yl(t):t,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(ge.flags|=1024),t}function bs(){var e=Hr!==0;return Hr=0,e}function Ss(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ws(e){if(Ur){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ur=!1}Sn=0,Fe=Ne=ge=null,di=!1,vl=Hr=0,pi=null}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?ge.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Ze(){if(Ne===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Fe===null?ge.memoizedState:Fe.next;if(t!==null)Fe=t,Ne=e;else{if(e===null)throw ge.alternate===null?Error(o(467)):Error(o(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Fe===null?ge.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function qr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yl(e){var t=vl;return vl+=1,pi===null&&(pi=[]),e=bp(pi,e,t),t=ge,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?fh:Ds),e}function Yr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yl(e);if(e.$$typeof===A)return ut(e)}throw Error(o(438,String(e)))}function Es(e){var t=null,n=ge.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=ge.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=qr(),ge.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=oe;return t.index++,n}function wn(e,t){return typeof t=="function"?t(e):t}function Gr(e){var t=Ze();return Cs(t,Ne,e)}function Cs(e,t,n){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var r=e.baseQueue,s=i.pending;if(s!==null){if(r!==null){var p=r.next;r.next=s.next,s.next=p}t.baseQueue=r=s,i.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{t=r.next;var v=p=null,C=null,Y=t,P=!1;do{var te=Y.lane&-536870913;if(te!==Y.lane?(we&te)===te:(Sn&te)===te){var G=Y.revertLane;if(G===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),te===oi&&(P=!0);else if((Sn&G)===G){Y=Y.next,G===oi&&(P=!0);continue}else te={lane:0,revertLane:Y.revertLane,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},C===null?(v=C=te,p=s):C=C.next=te,ge.lanes|=G,ta|=G;te=Y.action,Na&&n(s,te),s=Y.hasEagerState?Y.eagerState:n(s,te)}else G={lane:te,revertLane:Y.revertLane,gesture:Y.gesture,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},C===null?(v=C=G,p=s):C=C.next=G,ge.lanes|=te,ta|=te;Y=Y.next}while(Y!==null&&Y!==t);if(C===null?p=s:C.next=v,!zt(s,e.memoizedState)&&(We=!0,P&&(n=ui,n!==null)))throw n;e.memoizedState=s,e.baseState=p,e.baseQueue=C,i.lastRenderedState=s}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function js(e){var t=Ze(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,s=t.memoizedState;if(r!==null){n.pending=null;var p=r=r.next;do s=e(s,p.action),p=p.next;while(p!==r);zt(s,t.memoizedState)||(We=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function Ap(e,t,n){var i=ge,r=Ze(),s=Ce;if(s){if(n===void 0)throw Error(o(407));n=n()}else n=t();var p=!zt((Ne||r).memoizedState,n);if(p&&(r.memoizedState=n,We=!0),r=r.queue,Ms(Dp.bind(null,i,r,e),[e]),r.getSnapshot!==t||p||Fe!==null&&Fe.memoizedState.tag&1){if(i.flags|=2048,hi(9,{destroy:void 0},Np.bind(null,i,r,n,t),null),Le===null)throw Error(o(349));s||(Sn&127)!==0||_p(i,t,n)}return n}function _p(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t=qr(),ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Np(e,t,n,i){t.value=n,t.getSnapshot=i,kp(t)&&Lp(e)}function Dp(e,t,n){return n(function(){kp(t)&&Lp(e)})}function kp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function Lp(e){var t=Ca(e,2);t!==null&&Et(t,e,2)}function Ts(e){var t=gt();if(typeof e=="function"){var n=e;if(e=n(),Na){qn(!0);try{n()}finally{qn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:e},t}function $p(e,t,n,i){return e.baseState=n,Cs(e,Ne,typeof i=="function"?i:wn)}function l2(e,t,n,i,r){if(Kr(e))throw Error(o(485));if(e=t.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){s.listeners.push(p)}};_.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,Bp(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Bp(e,t){var n=t.action,i=t.payload,r=e.state;if(t.isTransition){var s=_.T,p={};_.T=p;try{var v=n(r,i),C=_.S;C!==null&&C(p,v),Up(e,t,v)}catch(Y){Rs(e,t,Y)}finally{s!==null&&p.types!==null&&(s.types=p.types),_.T=s}}else try{s=n(r,i),Up(e,t,s)}catch(Y){Rs(e,t,Y)}}function Up(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Hp(e,t,i)},function(i){return Rs(e,t,i)}):Hp(e,t,n)}function Hp(e,t,n){t.status="fulfilled",t.value=n,qp(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Bp(e,n)))}function Rs(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,qp(t),t=t.next;while(t!==i)}e.action=null}function qp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Yp(e,t){return t}function Gp(e,t){if(Ce){var n=Le.formState;if(n!==null){e:{var i=ge;if(Ce){if(Ue){t:{for(var r=Ue,s=Vt;r.nodeType!==8;){if(!s){r=null;break t}if(r=Qt(r.nextSibling),r===null){r=null;break t}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){Ue=Qt(r.nextSibling),i=r.data==="F!";break e}}Kn(i)}i=!1}i&&(t=n[0])}}return n=gt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yp,lastRenderedState:t},n.queue=i,n=uh.bind(null,ge,i),i.dispatch=n,i=Ts(!1),s=Ns.bind(null,ge,!1,i.queue),i=gt(),r={state:t,dispatch:null,action:e,pending:null},i.queue=r,n=l2.bind(null,ge,r,s,n),r.dispatch=n,i.memoizedState=e,[t,n,!1]}function Xp(e){var t=Ze();return Vp(t,Ne,e)}function Vp(e,t,n){if(t=Cs(e,t,Yp)[0],e=Gr(wn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=yl(t)}catch(p){throw p===si?Nr:p}else i=t;t=Ze();var r=t.queue,s=r.dispatch;return n!==t.memoizedState&&(ge.flags|=2048,hi(9,{destroy:void 0},r2.bind(null,r,n),null)),[i,s,e]}function r2(e,t){e.action=t}function Kp(e){var t=Ze(),n=Ne;if(n!==null)return Vp(t,n,e);Ze(),t=t.memoizedState,n=Ze();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function hi(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=ge.updateQueue,t===null&&(t=qr(),ge.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Qp(){return Ze().memoizedState}function Xr(e,t,n,i){var r=gt();ge.flags|=e,r.memoizedState=hi(1|t,{destroy:void 0},n,i===void 0?null:i)}function Vr(e,t,n,i){var r=Ze();i=i===void 0?null:i;var s=r.memoizedState.inst;Ne!==null&&i!==null&&ys(i,Ne.memoizedState.deps)?r.memoizedState=hi(t,s,n,i):(ge.flags|=e,r.memoizedState=hi(1|t,s,n,i))}function Zp(e,t){Xr(8390656,8,e,t)}function Ms(e,t){Vr(2048,8,e,t)}function o2(e){ge.flags|=4;var t=ge.updateQueue;if(t===null)t=qr(),ge.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Jp(e){var t=Ze().memoizedState;return o2({ref:t,nextImpl:e}),function(){if((ze&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Fp(e,t){return Vr(4,2,e,t)}function Wp(e,t){return Vr(4,4,e,t)}function Pp(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ip(e,t,n){n=n!=null?n.concat([e]):null,Vr(4,4,Pp.bind(null,t,e),n)}function zs(){}function eh(e,t){var n=Ze();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&ys(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function th(e,t){var n=Ze();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&ys(t,i[1]))return i[0];if(i=e(),Na){qn(!0);try{e()}finally{qn(!1)}}return n.memoizedState=[i,t],i}function Os(e,t,n){return n===void 0||(Sn&1073741824)!==0&&(we&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=n0(),ge.lanes|=e,ta|=e,n)}function nh(e,t,n,i){return zt(n,t)?n:fi.current!==null?(e=Os(e,n,i),zt(e,t)||(We=!0),e):(Sn&42)===0||(Sn&1073741824)!==0&&(we&261930)===0?(We=!0,e.memoizedState=n):(e=n0(),ge.lanes|=e,ta|=e,t)}function ah(e,t,n,i,r){var s=H.p;H.p=s!==0&&8>s?s:8;var p=_.T,v={};_.T=v,Ns(e,!1,t,n);try{var C=r(),Y=_.S;if(Y!==null&&Y(v,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var P=n2(C,i);xl(e,t,P,kt(e))}else xl(e,t,i,kt(e))}catch(te){xl(e,t,{then:function(){},status:"rejected",reason:te},kt())}finally{H.p=s,p!==null&&v.types!==null&&(p.types=v.types),_.T=p}}function u2(){}function As(e,t,n,i){if(e.tag!==5)throw Error(o(476));var r=ih(e).queue;ah(e,r,t,W,n===null?u2:function(){return lh(e),n(i)})}function ih(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:W},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function lh(e){var t=ih(e);t.next===null&&(t=e.alternate.memoizedState),xl(e,t.next.queue,{},kt())}function _s(){return ut(Ll)}function rh(){return Ze().memoizedState}function oh(){return Ze().memoizedState}function s2(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=kt();e=Jn(n);var i=Fn(t,e,n);i!==null&&(Et(i,t,n),hl(i,t,n)),t={cache:os()},e.payload=t;return}t=t.return}}function c2(e,t,n){var i=kt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Kr(e)?sh(t,n):(n=Fu(e,t,n,i),n!==null&&(Et(n,e,i),ch(n,t,i)))}function uh(e,t,n){var i=kt();xl(e,t,n,i)}function xl(e,t,n,i){var r={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kr(e))sh(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var p=t.lastRenderedState,v=s(p,n);if(r.hasEagerState=!0,r.eagerState=v,zt(v,p))return Tr(e,t,r,0),Le===null&&jr(),!1}catch{}finally{}if(n=Fu(e,t,r,i),n!==null)return Et(n,e,i),ch(n,t,i),!0}return!1}function Ns(e,t,n,i){if(i={lane:2,revertLane:fc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Kr(e)){if(t)throw Error(o(479))}else t=Fu(e,n,i,2),t!==null&&Et(t,e,2)}function Kr(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function sh(e,t){di=Ur=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ch(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,md(e,n)}}var bl={readContext:ut,use:Yr,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve};bl.useEffectEvent=Ve;var fh={readContext:ut,use:Yr,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:Zp,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Xr(4194308,4,Pp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xr(4194308,4,e,t)},useInsertionEffect:function(e,t){Xr(4,2,e,t)},useMemo:function(e,t){var n=gt();t=t===void 0?null:t;var i=e();if(Na){qn(!0);try{e()}finally{qn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=gt();if(n!==void 0){var r=n(t);if(Na){qn(!0);try{n(t)}finally{qn(!1)}}}else r=t;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=c2.bind(null,ge,e),[i.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ts(e);var t=e.queue,n=uh.bind(null,ge,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:zs,useDeferredValue:function(e,t){var n=gt();return Os(n,e,t)},useTransition:function(){var e=Ts(!1);return e=ah.bind(null,ge,e.queue,!0,!1),gt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=ge,r=gt();if(Ce){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Le===null)throw Error(o(349));(we&127)!==0||_p(i,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,Zp(Dp.bind(null,i,s,e),[e]),i.flags|=2048,hi(9,{destroy:void 0},Np.bind(null,i,s,n,t),null),n},useId:function(){var e=gt(),t=Le.identifierPrefix;if(Ce){var n=rn,i=ln;n=(i&~(1<<32-Mt(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Hr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=a2++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:_s,useFormState:Gp,useActionState:Gp,useOptimistic:function(e){var t=gt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ns.bind(null,ge,!0,n),n.dispatch=t,[e,t]},useMemoCache:Es,useCacheRefresh:function(){return gt().memoizedState=s2.bind(null,ge)},useEffectEvent:function(e){var t=gt(),n={impl:e};return t.memoizedState=n,function(){if((ze&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Ds={readContext:ut,use:Yr,useCallback:eh,useContext:ut,useEffect:Ms,useImperativeHandle:Ip,useInsertionEffect:Fp,useLayoutEffect:Wp,useMemo:th,useReducer:Gr,useRef:Qp,useState:function(){return Gr(wn)},useDebugValue:zs,useDeferredValue:function(e,t){var n=Ze();return nh(n,Ne.memoizedState,e,t)},useTransition:function(){var e=Gr(wn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:yl(e),t]},useSyncExternalStore:Ap,useId:rh,useHostTransitionStatus:_s,useFormState:Xp,useActionState:Xp,useOptimistic:function(e,t){var n=Ze();return $p(n,Ne,e,t)},useMemoCache:Es,useCacheRefresh:oh};Ds.useEffectEvent=Jp;var dh={readContext:ut,use:Yr,useCallback:eh,useContext:ut,useEffect:Ms,useImperativeHandle:Ip,useInsertionEffect:Fp,useLayoutEffect:Wp,useMemo:th,useReducer:js,useRef:Qp,useState:function(){return js(wn)},useDebugValue:zs,useDeferredValue:function(e,t){var n=Ze();return Ne===null?Os(n,e,t):nh(n,Ne.memoizedState,e,t)},useTransition:function(){var e=js(wn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:yl(e),t]},useSyncExternalStore:Ap,useId:rh,useHostTransitionStatus:_s,useFormState:Kp,useActionState:Kp,useOptimistic:function(e,t){var n=Ze();return Ne!==null?$p(n,Ne,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Es,useCacheRefresh:oh};dh.useEffectEvent=Jp;function ks(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:S({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ls={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=kt(),r=Jn(i);r.payload=t,n!=null&&(r.callback=n),t=Fn(e,r,i),t!==null&&(Et(t,e,i),hl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=kt(),r=Jn(i);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Fn(e,r,i),t!==null&&(Et(t,e,i),hl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kt(),i=Jn(n);i.tag=2,t!=null&&(i.callback=t),t=Fn(e,i,n),t!==null&&(Et(t,e,n),hl(t,e,n))}};function ph(e,t,n,i,r,s,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,p):t.prototype&&t.prototype.isPureReactComponent?!rl(n,i)||!rl(r,s):!0}function hh(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Ls.enqueueReplaceState(t,t.state,null)}function Da(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=S({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function mh(e){Cr(e)}function gh(e){console.error(e)}function vh(e){Cr(e)}function Qr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function yh(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function $s(e,t,n){return n=Jn(n),n.tag=3,n.payload={element:null},n.callback=function(){Qr(e,t)},n}function xh(e){return e=Jn(e),e.tag=3,e}function bh(e,t,n,i){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var s=i.value;e.payload=function(){return r(s)},e.callback=function(){yh(t,n,i)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){yh(t,n,i),typeof r!="function"&&(na===null?na=new Set([this]):na.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})})}function f2(e,t,n,i,r){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ri(t,n,r,!0),n=At.current,n!==null){switch(n.tag){case 31:case 13:return Kt===null?lo():n.alternate===null&&Ke===0&&(Ke=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===Dr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),uc(e,i,r)),!1;case 22:return n.flags|=65536,i===Dr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),uc(e,i,r)),!1}throw Error(o(435,n.tag))}return uc(e,i,r),lo(),!1}if(Ce)return t=At.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,i!==ns&&(e=Error(o(422),{cause:i}),sl(Yt(e,n)))):(i!==ns&&(t=Error(o(423),{cause:i}),sl(Yt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=Yt(i,n),r=$s(e.stateNode,i,r),ps(e,r),Ke!==4&&(Ke=2)),!1;var s=Error(o(520),{cause:i});if(s=Yt(s,n),Ml===null?Ml=[s]:Ml.push(s),Ke!==4&&(Ke=2),t===null)return!0;i=Yt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=$s(n.stateNode,i,e),ps(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(na===null||!na.has(s))))return n.flags|=65536,r&=-r,n.lanes|=r,r=xh(r),bh(r,e,n,i),ps(n,r),!1}n=n.return}while(n!==null);return!1}var Bs=Error(o(461)),We=!1;function st(e,t,n,i){t.child=e===null?Cp(t,null,n,i):_a(t,e.child,n,i)}function Sh(e,t,n,i,r){n=n.render;var s=t.ref;if("ref"in i){var p={};for(var v in i)v!=="ref"&&(p[v]=i[v])}else p=i;return Ma(t),i=xs(e,t,n,p,s,r),v=bs(),e!==null&&!We?(Ss(e,t,r),En(e,t,r)):(Ce&&v&&es(t),t.flags|=1,st(e,t,i,r),t.child)}function wh(e,t,n,i,r){if(e===null){var s=n.type;return typeof s=="function"&&!Wu(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,Eh(e,t,s,i,r)):(e=Mr(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Ks(e,r)){var p=s.memoizedProps;if(n=n.compare,n=n!==null?n:rl,n(p,i)&&e.ref===t.ref)return En(e,t,r)}return t.flags|=1,e=vn(s,i),e.ref=t.ref,e.return=t,t.child=e}function Eh(e,t,n,i,r){if(e!==null){var s=e.memoizedProps;if(rl(s,i)&&e.ref===t.ref)if(We=!1,t.pendingProps=i=s,Ks(e,r))(e.flags&131072)!==0&&(We=!0);else return t.lanes=e.lanes,En(e,t,r)}return Us(e,t,n,i,r)}function Ch(e,t,n,i){var r=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~s}else i=0,t.child=null;return jh(e,t,s,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&_r(t,s!==null?s.cachePool:null),s!==null?Rp(t,s):ms(),Mp(t);else return i=t.lanes=536870912,jh(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(_r(t,s.cachePool),Rp(t,s),Pn(),t.memoizedState=null):(e!==null&&_r(t,null),ms(),Pn());return st(e,t,r,n),t.child}function Sl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function jh(e,t,n,i,r){var s=ss();return s=s===null?null:{parent:Je._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&_r(t,null),ms(),Mp(t),e!==null&&ri(e,t,i,!0),t.childLanes=r,null}function Zr(e,t){return t=Fr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Th(e,t,n){return _a(t,e.child,null,n),e=Zr(t,t.pendingProps),e.flags|=2,_t(t),t.memoizedState=null,e}function d2(e,t,n){var i=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ce){if(i.mode==="hidden")return e=Zr(t,i),t.lanes=536870912,Sl(null,e);if(vs(t),(e=Ue)?(e=B0(e,Vt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xn!==null?{id:ln,overflow:rn}:null,retryLane:536870912,hydrationErrors:null},n=sp(e),n.return=t,t.child=n,ot=t,Ue=null)):e=null,e===null)throw Kn(t);return t.lanes=536870912,null}return Zr(t,i)}var s=e.memoizedState;if(s!==null){var p=s.dehydrated;if(vs(t),r)if(t.flags&256)t.flags&=-257,t=Th(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(We||ri(e,t,n,!1),r=(n&e.childLanes)!==0,We||r){if(i=Le,i!==null&&(p=gd(i,n),p!==0&&p!==s.retryLane))throw s.retryLane=p,Ca(e,p),Et(i,e,p),Bs;lo(),t=Th(e,t,n)}else e=s.treeContext,Ue=Qt(p.nextSibling),ot=t,Ce=!0,Vn=null,Vt=!1,e!==null&&dp(t,e),t=Zr(t,i),t.flags|=4096;return t}return e=vn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Jr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Us(e,t,n,i,r){return Ma(t),n=xs(e,t,n,i,void 0,r),i=bs(),e!==null&&!We?(Ss(e,t,r),En(e,t,r)):(Ce&&i&&es(t),t.flags|=1,st(e,t,n,r),t.child)}function Rh(e,t,n,i,r,s){return Ma(t),t.updateQueue=null,n=Op(t,i,n,r),zp(e),i=bs(),e!==null&&!We?(Ss(e,t,s),En(e,t,s)):(Ce&&i&&es(t),t.flags|=1,st(e,t,n,s),t.child)}function Mh(e,t,n,i,r){if(Ma(t),t.stateNode===null){var s=ni,p=n.contextType;typeof p=="object"&&p!==null&&(s=ut(p)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ls,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},fs(t),p=n.contextType,s.context=typeof p=="object"&&p!==null?ut(p):ni,s.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(ks(t,n,p,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(p=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),p!==s.state&&Ls.enqueueReplaceState(s,s.state,null),gl(t,i,s,r),ml(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var v=t.memoizedProps,C=Da(n,v);s.props=C;var Y=s.context,P=n.contextType;p=ni,typeof P=="object"&&P!==null&&(p=ut(P));var te=n.getDerivedStateFromProps;P=typeof te=="function"||typeof s.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,P||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(v||Y!==p)&&hh(t,s,i,p),Zn=!1;var G=t.memoizedState;s.state=G,gl(t,i,s,r),ml(),Y=t.memoizedState,v||G!==Y||Zn?(typeof te=="function"&&(ks(t,n,te,i),Y=t.memoizedState),(C=Zn||ph(t,n,C,i,G,Y,p))?(P||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=Y),s.props=i,s.state=Y,s.context=p,i=C):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,ds(e,t),p=t.memoizedProps,P=Da(n,p),s.props=P,te=t.pendingProps,G=s.context,Y=n.contextType,C=ni,typeof Y=="object"&&Y!==null&&(C=ut(Y)),v=n.getDerivedStateFromProps,(Y=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(p!==te||G!==C)&&hh(t,s,i,C),Zn=!1,G=t.memoizedState,s.state=G,gl(t,i,s,r),ml();var Q=t.memoizedState;p!==te||G!==Q||Zn||e!==null&&e.dependencies!==null&&Or(e.dependencies)?(typeof v=="function"&&(ks(t,n,v,i),Q=t.memoizedState),(P=Zn||ph(t,n,P,i,G,Q,C)||e!==null&&e.dependencies!==null&&Or(e.dependencies))?(Y||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,Q,C),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,Q,C)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||p===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=Q),s.props=i,s.state=Q,s.context=C,i=P):(typeof s.componentDidUpdate!="function"||p===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Jr(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=_a(t,e.child,null,r),t.child=_a(t,null,n,r)):st(e,t,n,r),t.memoizedState=s.state,e=t.child):e=En(e,t,r),e}function zh(e,t,n,i){return Ta(),t.flags|=256,st(e,t,n,i),t.child}var Hs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qs(e){return{baseLanes:e,cachePool:yp()}}function Ys(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Dt),e}function Oh(e,t,n){var i=t.pendingProps,r=!1,s=(t.flags&128)!==0,p;if((p=s)||(p=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),p&&(r=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ce){if(r?Wn(t):Pn(),(e=Ue)?(e=B0(e,Vt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xn!==null?{id:ln,overflow:rn}:null,retryLane:536870912,hydrationErrors:null},n=sp(e),n.return=t,t.child=n,ot=t,Ue=null)):e=null,e===null)throw Kn(t);return Cc(e)?t.lanes=32:t.lanes=536870912,null}var v=i.children;return i=i.fallback,r?(Pn(),r=t.mode,v=Fr({mode:"hidden",children:v},r),i=ja(i,r,n,null),v.return=t,i.return=t,v.sibling=i,t.child=v,i=t.child,i.memoizedState=qs(n),i.childLanes=Ys(e,p,n),t.memoizedState=Hs,Sl(null,i)):(Wn(t),Gs(t,v))}var C=e.memoizedState;if(C!==null&&(v=C.dehydrated,v!==null)){if(s)t.flags&256?(Wn(t),t.flags&=-257,t=Xs(e,t,n)):t.memoizedState!==null?(Pn(),t.child=e.child,t.flags|=128,t=null):(Pn(),v=i.fallback,r=t.mode,i=Fr({mode:"visible",children:i.children},r),v=ja(v,r,n,null),v.flags|=2,i.return=t,v.return=t,i.sibling=v,t.child=i,_a(t,e.child,null,n),i=t.child,i.memoizedState=qs(n),i.childLanes=Ys(e,p,n),t.memoizedState=Hs,t=Sl(null,i));else if(Wn(t),Cc(v)){if(p=v.nextSibling&&v.nextSibling.dataset,p)var Y=p.dgst;p=Y,i=Error(o(419)),i.stack="",i.digest=p,sl({value:i,source:null,stack:null}),t=Xs(e,t,n)}else if(We||ri(e,t,n,!1),p=(n&e.childLanes)!==0,We||p){if(p=Le,p!==null&&(i=gd(p,n),i!==0&&i!==C.retryLane))throw C.retryLane=i,Ca(e,i),Et(p,e,i),Bs;Ec(v)||lo(),t=Xs(e,t,n)}else Ec(v)?(t.flags|=192,t.child=e.child,t=null):(e=C.treeContext,Ue=Qt(v.nextSibling),ot=t,Ce=!0,Vn=null,Vt=!1,e!==null&&dp(t,e),t=Gs(t,i.children),t.flags|=4096);return t}return r?(Pn(),v=i.fallback,r=t.mode,C=e.child,Y=C.sibling,i=vn(C,{mode:"hidden",children:i.children}),i.subtreeFlags=C.subtreeFlags&65011712,Y!==null?v=vn(Y,v):(v=ja(v,r,n,null),v.flags|=2),v.return=t,i.return=t,i.sibling=v,t.child=i,Sl(null,i),i=t.child,v=e.child.memoizedState,v===null?v=qs(n):(r=v.cachePool,r!==null?(C=Je._currentValue,r=r.parent!==C?{parent:C,pool:C}:r):r=yp(),v={baseLanes:v.baseLanes|n,cachePool:r}),i.memoizedState=v,i.childLanes=Ys(e,p,n),t.memoizedState=Hs,Sl(e.child,i)):(Wn(t),n=e.child,e=n.sibling,n=vn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=n,t.memoizedState=null,n)}function Gs(e,t){return t=Fr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Fr(e,t){return e=Ot(22,e,null,t),e.lanes=0,e}function Xs(e,t,n){return _a(t,e.child,null,n),e=Gs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ah(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),ls(e.return,t,n)}function Vs(e,t,n,i,r,s){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,treeForkCount:s}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=i,p.tail=n,p.tailMode=r,p.treeForkCount=s)}function _h(e,t,n){var i=t.pendingProps,r=i.revealOrder,s=i.tail;i=i.children;var p=Qe.current,v=(p&2)!==0;if(v?(p=p&1|2,t.flags|=128):p&=1,le(Qe,p),st(e,t,i,n),i=Ce?ul:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ah(e,n,t);else if(e.tag===19)Ah(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Br(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Vs(t,!1,r,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Br(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Vs(t,!0,n,null,s,i);break;case"together":Vs(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function En(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ta|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ri(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ks(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Or(e)))}function p2(e,t,n){switch(t.tag){case 3:$e(t,t.stateNode.containerInfo),Qn(t,Je,e.memoizedState.cache),Ta();break;case 27:case 5:jt(t);break;case 4:$e(t,t.stateNode.containerInfo);break;case 10:Qn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,vs(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Wn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Oh(e,t,n):(Wn(t),e=En(e,t,n),e!==null?e.sibling:null);Wn(t);break;case 19:var r=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(ri(e,t,n,!1),i=(n&t.childLanes)!==0),r){if(i)return _h(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),le(Qe,Qe.current),i)break;return null;case 22:return t.lanes=0,Ch(e,t,n,t.pendingProps);case 24:Qn(t,Je,e.memoizedState.cache)}return En(e,t,n)}function Nh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)We=!0;else{if(!Ks(e,n)&&(t.flags&128)===0)return We=!1,p2(e,t,n);We=(e.flags&131072)!==0}else We=!1,Ce&&(t.flags&1048576)!==0&&fp(t,ul,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Oa(t.elementType),t.type=e,typeof e=="function")Wu(e)?(i=Da(e,i),t.tag=1,t=Mh(null,t,e,i,n)):(t.tag=0,t=Us(null,t,e,i,n));else{if(e!=null){var r=e.$$typeof;if(r===U){t.tag=11,t=Sh(null,t,e,i,n);break e}else if(r===J){t.tag=14,t=wh(null,t,e,i,n);break e}}throw t=ne(e)||e,Error(o(306,t,""))}}return t;case 0:return Us(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,r=Da(i,t.pendingProps),Mh(e,t,i,r,n);case 3:e:{if($e(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var s=t.memoizedState;r=s.element,ds(e,t),gl(t,i,null,n);var p=t.memoizedState;if(i=p.cache,Qn(t,Je,i),i!==s.cache&&rs(t,[Je],n,!0),ml(),i=p.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=zh(e,t,i,n);break e}else if(i!==r){r=Yt(Error(o(424)),t),sl(r),t=zh(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ue=Qt(e.firstChild),ot=t,Ce=!0,Vn=null,Vt=!0,n=Cp(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ta(),i===r){t=En(e,t,n);break e}st(e,t,i,n)}t=t.child}return t;case 26:return Jr(e,t),e===null?(n=X0(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ce||(n=t.type,e=t.pendingProps,i=po(he.current).createElement(n),i[rt]=t,i[vt]=e,ct(i,n,e),tt(i),t.stateNode=i):t.memoizedState=X0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return jt(t),e===null&&Ce&&(i=t.stateNode=q0(t.type,t.pendingProps,he.current),ot=t,Vt=!0,r=Ue,ra(t.type)?(jc=r,Ue=Qt(i.firstChild)):Ue=r),st(e,t,t.pendingProps.children,n),Jr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ce&&((r=i=Ue)&&(i=G2(i,t.type,t.pendingProps,Vt),i!==null?(t.stateNode=i,ot=t,Ue=Qt(i.firstChild),Vt=!1,r=!0):r=!1),r||Kn(t)),jt(t),r=t.type,s=t.pendingProps,p=e!==null?e.memoizedProps:null,i=s.children,bc(r,s)?i=null:p!==null&&bc(r,p)&&(t.flags|=32),t.memoizedState!==null&&(r=xs(e,t,i2,null,null,n),Ll._currentValue=r),Jr(e,t),st(e,t,i,n),t.child;case 6:return e===null&&Ce&&((e=n=Ue)&&(n=X2(n,t.pendingProps,Vt),n!==null?(t.stateNode=n,ot=t,Ue=null,e=!0):e=!1),e||Kn(t)),null;case 13:return Oh(e,t,n);case 4:return $e(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=_a(t,null,i,n):st(e,t,i,n),t.child;case 11:return Sh(e,t,t.type,t.pendingProps,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Qn(t,t.type,i.value),st(e,t,i.children,n),t.child;case 9:return r=t.type._context,i=t.pendingProps.children,Ma(t),r=ut(r),i=i(r),t.flags|=1,st(e,t,i,n),t.child;case 14:return wh(e,t,t.type,t.pendingProps,n);case 15:return Eh(e,t,t.type,t.pendingProps,n);case 19:return _h(e,t,n);case 31:return d2(e,t,n);case 22:return Ch(e,t,n,t.pendingProps);case 24:return Ma(t),i=ut(Je),e===null?(r=ss(),r===null&&(r=Le,s=os(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=n),r=s),t.memoizedState={parent:i,cache:r},fs(t),Qn(t,Je,r)):((e.lanes&n)!==0&&(ds(e,t),gl(t,null,null,n),ml()),r=e.memoizedState,s=t.memoizedState,r.parent!==i?(r={parent:i,cache:i},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Qn(t,Je,i)):(i=s.cache,Qn(t,Je,i),i!==r.cache&&rs(t,[Je],n,!0))),st(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Cn(e){e.flags|=4}function Qs(e,t,n,i,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(r0())e.flags|=8192;else throw Aa=Dr,cs}else e.flags&=-16777217}function Dh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!J0(t))if(r0())e.flags|=8192;else throw Aa=Dr,cs}function Wr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?pd():536870912,e.lanes|=t,yi|=t)}function wl(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function h2(e,t,n){var i=t.pendingProps;switch(ts(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return He(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),bn(Je),je(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(li(t)?Cn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,as())),He(t),null;case 26:var r=t.type,s=t.memoizedState;return e===null?(Cn(t),s!==null?(He(t),Dh(t,s)):(He(t),Qs(t,r,null,i,n))):s?s!==e.memoizedState?(Cn(t),He(t),Dh(t,s)):(He(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Cn(t),He(t),Qs(t,r,e,i,n)),null;case 27:if(Wt(t),n=he.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Cn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return He(t),null}e=ie.current,li(t)?pp(t):(e=q0(r,i,n),t.stateNode=e,Cn(t))}return He(t),null;case 5:if(Wt(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Cn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return He(t),null}if(s=ie.current,li(t))pp(t);else{var p=po(he.current);switch(s){case 1:s=p.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=p.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=p.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?p.createElement("select",{is:i.is}):p.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?p.createElement(r,{is:i.is}):p.createElement(r)}}s[rt]=t,s[vt]=i;e:for(p=t.child;p!==null;){if(p.tag===5||p.tag===6)s.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}t.stateNode=s;e:switch(ct(s,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Cn(t)}}return He(t),Qs(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Cn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=he.current,li(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,r=ot,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[rt]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||O0(e.nodeValue,n)),e||Kn(t,!0)}else e=po(e).createTextNode(i),e[rt]=t,t.stateNode=e}return He(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=li(t),n!==null){if(e===null){if(!i)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[rt]=t}else Ta(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),e=!1}else n=as(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_t(t),t):(_t(t),null);if((t.flags&128)!==0)throw Error(o(558))}return He(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=li(t),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(o(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));r[rt]=t}else Ta(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),r=!1}else r=as(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(_t(t),t):(_t(t),null)}return _t(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==r&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Wr(t,t.updateQueue),He(t),null);case 4:return je(),e===null&&mc(t.stateNode.containerInfo),He(t),null;case 10:return bn(t.type),He(t),null;case 19:if(K(Qe),i=t.memoizedState,i===null)return He(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)wl(i,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Br(e),s!==null){for(t.flags|=128,wl(i,!1),e=s.updateQueue,t.updateQueue=e,Wr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)up(n,e),n=n.sibling;return le(Qe,Qe.current&1|2),Ce&&yn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Tt()>no&&(t.flags|=128,r=!0,wl(i,!1),t.lanes=4194304)}else{if(!r)if(e=Br(s),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Wr(t,e),wl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Ce)return He(t),null}else 2*Tt()-i.renderingStartTime>no&&n!==536870912&&(t.flags|=128,r=!0,wl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Tt(),e.sibling=null,n=Qe.current,le(Qe,r?n&1|2:n&1),Ce&&yn(t,i.treeForkCount),e):(He(t),null);case 22:case 23:return _t(t),gs(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),n=t.updateQueue,n!==null&&Wr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&K(za),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),bn(Je),He(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function m2(e,t){switch(ts(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bn(Je),je(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Wt(t),null;case 31:if(t.memoizedState!==null){if(_t(t),t.alternate===null)throw Error(o(340));Ta()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_t(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Ta()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Qe),null;case 4:return je(),null;case 10:return bn(t.type),null;case 22:case 23:return _t(t),gs(),e!==null&&K(za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return bn(Je),null;case 25:return null;default:return null}}function kh(e,t){switch(ts(t),t.tag){case 3:bn(Je),je();break;case 26:case 27:case 5:Wt(t);break;case 4:je();break;case 31:t.memoizedState!==null&&_t(t);break;case 13:_t(t);break;case 19:K(Qe);break;case 10:bn(t.type);break;case 22:case 23:_t(t),gs(),e!==null&&K(za);break;case 24:bn(Je)}}function El(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){i=void 0;var s=n.create,p=n.inst;i=s(),p.destroy=i}n=n.next}while(n!==r)}}catch(v){_e(t,t.return,v)}}function In(e,t,n){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var s=r.next;i=s;do{if((i.tag&e)===e){var p=i.inst,v=p.destroy;if(v!==void 0){p.destroy=void 0,r=t;var C=n,Y=v;try{Y()}catch(P){_e(r,C,P)}}}i=i.next}while(i!==s)}}catch(P){_e(t,t.return,P)}}function Lh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Tp(t,n)}catch(i){_e(e,e.return,i)}}}function $h(e,t,n){n.props=Da(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){_e(e,t,i)}}function Cl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(r){_e(e,t,r)}}function on(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(r){_e(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){_e(e,t,r)}else n.current=null}function Bh(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){_e(e,e.return,r)}}function Zs(e,t,n){try{var i=e.stateNode;$2(i,e.type,n,t),i[vt]=t}catch(r){_e(e,e.return,r)}}function Uh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ra(e.type)||e.tag===4}function Js(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fs(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mn));else if(i!==4&&(i===27&&ra(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Fs(e,t,n),e=e.sibling;e!==null;)Fs(e,t,n),e=e.sibling}function Pr(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ra(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Pr(e,t,n),e=e.sibling;e!==null;)Pr(e,t,n),e=e.sibling}function Hh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);ct(t,i,n),t[rt]=e,t[vt]=n}catch(s){_e(e,e.return,s)}}var jn=!1,Pe=!1,Ws=!1,qh=typeof WeakSet=="function"?WeakSet:Set,nt=null;function g2(e,t){if(e=e.containerInfo,yc=bo,e=Id(e),Xu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var p=0,v=-1,C=-1,Y=0,P=0,te=e,G=null;t:for(;;){for(var Q;te!==n||r!==0&&te.nodeType!==3||(v=p+r),te!==s||i!==0&&te.nodeType!==3||(C=p+i),te.nodeType===3&&(p+=te.nodeValue.length),(Q=te.firstChild)!==null;)G=te,te=Q;for(;;){if(te===e)break t;if(G===n&&++Y===r&&(v=p),G===s&&++P===i&&(C=p),(Q=te.nextSibling)!==null)break;te=G,G=te.parentNode}te=Q}n=v===-1||C===-1?null:{start:v,end:C}}else n=null}n=n||{start:0,end:0}}else n=null;for(xc={focusedElem:e,selectionRange:n},bo=!1,nt=t;nt!==null;)if(t=nt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,nt=e;else for(;nt!==null;){switch(t=nt,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,r=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var ue=Da(n.type,r);e=i.getSnapshotBeforeUpdate(ue,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(pe){_e(n,n.return,pe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)wc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,nt=e;break}nt=t.return}}function Yh(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Rn(e,n),i&4&&El(5,n);break;case 1:if(Rn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(p){_e(n,n.return,p)}else{var r=Da(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){_e(n,n.return,p)}}i&64&&Lh(n),i&512&&Cl(n,n.return);break;case 3:if(Rn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Tp(e,t)}catch(p){_e(n,n.return,p)}}break;case 27:t===null&&i&4&&Hh(n);case 26:case 5:Rn(e,n),t===null&&i&4&&Bh(n),i&512&&Cl(n,n.return);break;case 12:Rn(e,n);break;case 31:Rn(e,n),i&4&&Vh(e,n);break;case 13:Rn(e,n),i&4&&Kh(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=j2.bind(null,n),V2(e,n))));break;case 22:if(i=n.memoizedState!==null||jn,!i){t=t!==null&&t.memoizedState!==null||Pe,r=jn;var s=Pe;jn=i,(Pe=t)&&!s?Mn(e,n,(n.subtreeFlags&8772)!==0):Rn(e,n),jn=r,Pe=s}break;case 30:break;default:Rn(e,n)}}function Gh(e){var t=e.alternate;t!==null&&(e.alternate=null,Gh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ru(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ge=null,xt=!1;function Tn(e,t,n){for(n=n.child;n!==null;)Xh(e,t,n),n=n.sibling}function Xh(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Zi,n)}catch{}switch(n.tag){case 26:Pe||on(n,t),Tn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Pe||on(n,t);var i=Ge,r=xt;ra(n.type)&&(Ge=n.stateNode,xt=!1),Tn(e,t,n),Nl(n.stateNode),Ge=i,xt=r;break;case 5:Pe||on(n,t);case 6:if(i=Ge,r=xt,Ge=null,Tn(e,t,n),Ge=i,xt=r,Ge!==null)if(xt)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(n.stateNode)}catch(s){_e(n,t,s)}else try{Ge.removeChild(n.stateNode)}catch(s){_e(n,t,s)}break;case 18:Ge!==null&&(xt?(e=Ge,L0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ti(e)):L0(Ge,n.stateNode));break;case 4:i=Ge,r=xt,Ge=n.stateNode.containerInfo,xt=!0,Tn(e,t,n),Ge=i,xt=r;break;case 0:case 11:case 14:case 15:In(2,n,t),Pe||In(4,n,t),Tn(e,t,n);break;case 1:Pe||(on(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&$h(n,t,i)),Tn(e,t,n);break;case 21:Tn(e,t,n);break;case 22:Pe=(i=Pe)||n.memoizedState!==null,Tn(e,t,n),Pe=i;break;default:Tn(e,t,n)}}function Vh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ti(e)}catch(n){_e(t,t.return,n)}}}function Kh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ti(e)}catch(n){_e(t,t.return,n)}}function v2(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new qh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new qh),t;default:throw Error(o(435,e.tag))}}function Ir(e,t){var n=v2(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var r=T2.bind(null,e,i);i.then(r,r)}})}function bt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i],s=e,p=t,v=p;e:for(;v!==null;){switch(v.tag){case 27:if(ra(v.type)){Ge=v.stateNode,xt=!1;break e}break;case 5:Ge=v.stateNode,xt=!1;break e;case 3:case 4:Ge=v.stateNode.containerInfo,xt=!0;break e}v=v.return}if(Ge===null)throw Error(o(160));Xh(s,p,r),Ge=null,xt=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Qh(t,e),t=t.sibling}var It=null;function Qh(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bt(t,e),St(e),i&4&&(In(3,e,e.return),El(3,e),In(5,e,e.return));break;case 1:bt(t,e),St(e),i&512&&(Pe||n===null||on(n,n.return)),i&64&&jn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var r=It;if(bt(t,e),St(e),i&512&&(Pe||n===null||on(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":s=r.getElementsByTagName("title")[0],(!s||s[Wi]||s[rt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(i),r.head.insertBefore(s,r.querySelector("head > title"))),ct(s,i,n),s[rt]=e,tt(s),i=s;break e;case"link":var p=Q0("link","href",r).get(i+(n.href||""));if(p){for(var v=0;v<p.length;v++)if(s=p[v],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(v,1);break t}}s=r.createElement(i),ct(s,i,n),r.head.appendChild(s);break;case"meta":if(p=Q0("meta","content",r).get(i+(n.content||""))){for(v=0;v<p.length;v++)if(s=p[v],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(v,1);break t}}s=r.createElement(i),ct(s,i,n),r.head.appendChild(s);break;default:throw Error(o(468,i))}s[rt]=e,tt(s),i=s}e.stateNode=i}else Z0(r,e.type,e.stateNode);else e.stateNode=K0(r,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?Z0(r,e.type,e.stateNode):K0(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Zs(e,e.memoizedProps,n.memoizedProps)}break;case 27:bt(t,e),St(e),i&512&&(Pe||n===null||on(n,n.return)),n!==null&&i&4&&Zs(e,e.memoizedProps,n.memoizedProps);break;case 5:if(bt(t,e),St(e),i&512&&(Pe||n===null||on(n,n.return)),e.flags&32){r=e.stateNode;try{Ja(r,"")}catch(ue){_e(e,e.return,ue)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,Zs(e,r,n!==null?n.memoizedProps:r)),i&1024&&(Ws=!0);break;case 6:if(bt(t,e),St(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(ue){_e(e,e.return,ue)}}break;case 3:if(go=null,r=It,It=ho(t.containerInfo),bt(t,e),It=r,St(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ti(t.containerInfo)}catch(ue){_e(e,e.return,ue)}Ws&&(Ws=!1,Zh(e));break;case 4:i=It,It=ho(e.stateNode.containerInfo),bt(t,e),St(e),It=i;break;case 12:bt(t,e),St(e);break;case 31:bt(t,e),St(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ir(e,i)));break;case 13:bt(t,e),St(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(to=Tt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ir(e,i)));break;case 22:r=e.memoizedState!==null;var C=n!==null&&n.memoizedState!==null,Y=jn,P=Pe;if(jn=Y||r,Pe=P||C,bt(t,e),Pe=P,jn=Y,St(e),i&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||C||jn||Pe||ka(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){C=n=t;try{if(s=C.stateNode,r)p=s.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{v=C.stateNode;var te=C.memoizedProps.style,G=te!=null&&te.hasOwnProperty("display")?te.display:null;v.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(ue){_e(C,C.return,ue)}}}else if(t.tag===6){if(n===null){C=t;try{C.stateNode.nodeValue=r?"":C.memoizedProps}catch(ue){_e(C,C.return,ue)}}}else if(t.tag===18){if(n===null){C=t;try{var Q=C.stateNode;r?$0(Q,!0):$0(C.stateNode,!1)}catch(ue){_e(C,C.return,ue)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Ir(e,n))));break;case 19:bt(t,e),St(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ir(e,i)));break;case 30:break;case 21:break;default:bt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Uh(i)){n=i;break}i=i.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var r=n.stateNode,s=Js(e);Pr(e,s,r);break;case 5:var p=n.stateNode;n.flags&32&&(Ja(p,""),n.flags&=-33);var v=Js(e);Pr(e,v,p);break;case 3:case 4:var C=n.stateNode.containerInfo,Y=Js(e);Fs(e,Y,C);break;default:throw Error(o(161))}}catch(P){_e(e,e.return,P)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Zh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Rn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Yh(e,t.alternate,t),t=t.sibling}function ka(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:In(4,t,t.return),ka(t);break;case 1:on(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&$h(t,t.return,n),ka(t);break;case 27:Nl(t.stateNode);case 26:case 5:on(t,t.return),ka(t);break;case 22:t.memoizedState===null&&ka(t);break;case 30:ka(t);break;default:ka(t)}e=e.sibling}}function Mn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,r=e,s=t,p=s.flags;switch(s.tag){case 0:case 11:case 15:Mn(r,s,n),El(4,s);break;case 1:if(Mn(r,s,n),i=s,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(Y){_e(i,i.return,Y)}if(i=s,r=i.updateQueue,r!==null){var v=i.stateNode;try{var C=r.shared.hiddenCallbacks;if(C!==null)for(r.shared.hiddenCallbacks=null,r=0;r<C.length;r++)jp(C[r],v)}catch(Y){_e(i,i.return,Y)}}n&&p&64&&Lh(s),Cl(s,s.return);break;case 27:Hh(s);case 26:case 5:Mn(r,s,n),n&&i===null&&p&4&&Bh(s),Cl(s,s.return);break;case 12:Mn(r,s,n);break;case 31:Mn(r,s,n),n&&p&4&&Vh(r,s);break;case 13:Mn(r,s,n),n&&p&4&&Kh(r,s);break;case 22:s.memoizedState===null&&Mn(r,s,n),Cl(s,s.return);break;case 30:break;default:Mn(r,s,n)}t=t.sibling}}function Ps(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&cl(n))}function Is(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&cl(e))}function en(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jh(e,t,n,i),t=t.sibling}function Jh(e,t,n,i){var r=t.flags;switch(t.tag){case 0:case 11:case 15:en(e,t,n,i),r&2048&&El(9,t);break;case 1:en(e,t,n,i);break;case 3:en(e,t,n,i),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&cl(e)));break;case 12:if(r&2048){en(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,p=s.id,v=s.onPostCommit;typeof v=="function"&&v(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(C){_e(t,t.return,C)}}else en(e,t,n,i);break;case 31:en(e,t,n,i);break;case 13:en(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,p=t.alternate,t.memoizedState!==null?s._visibility&2?en(e,t,n,i):jl(e,t):s._visibility&2?en(e,t,n,i):(s._visibility|=2,mi(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Ps(p,t);break;case 24:en(e,t,n,i),r&2048&&Is(t.alternate,t);break;default:en(e,t,n,i)}}function mi(e,t,n,i,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,p=t,v=n,C=i,Y=p.flags;switch(p.tag){case 0:case 11:case 15:mi(s,p,v,C,r),El(8,p);break;case 23:break;case 22:var P=p.stateNode;p.memoizedState!==null?P._visibility&2?mi(s,p,v,C,r):jl(s,p):(P._visibility|=2,mi(s,p,v,C,r)),r&&Y&2048&&Ps(p.alternate,p);break;case 24:mi(s,p,v,C,r),r&&Y&2048&&Is(p.alternate,p);break;default:mi(s,p,v,C,r)}t=t.sibling}}function jl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,r=i.flags;switch(i.tag){case 22:jl(n,i),r&2048&&Ps(i.alternate,i);break;case 24:jl(n,i),r&2048&&Is(i.alternate,i);break;default:jl(n,i)}t=t.sibling}}var Tl=8192;function gi(e,t,n){if(e.subtreeFlags&Tl)for(e=e.child;e!==null;)Fh(e,t,n),e=e.sibling}function Fh(e,t,n){switch(e.tag){case 26:gi(e,t,n),e.flags&Tl&&e.memoizedState!==null&&ax(n,It,e.memoizedState,e.memoizedProps);break;case 5:gi(e,t,n);break;case 3:case 4:var i=It;It=ho(e.stateNode.containerInfo),gi(e,t,n),It=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Tl,Tl=16777216,gi(e,t,n),Tl=i):gi(e,t,n));break;default:gi(e,t,n)}}function Wh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Rl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];nt=i,Ih(i,e)}Wh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ph(e),e=e.sibling}function Ph(e){switch(e.tag){case 0:case 11:case 15:Rl(e),e.flags&2048&&In(9,e,e.return);break;case 3:Rl(e);break;case 12:Rl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,eo(e)):Rl(e);break;default:Rl(e)}}function eo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];nt=i,Ih(i,e)}Wh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:In(8,t,t.return),eo(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,eo(t));break;default:eo(t)}e=e.sibling}}function Ih(e,t){for(;nt!==null;){var n=nt;switch(n.tag){case 0:case 11:case 15:In(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:cl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,nt=i;else e:for(n=e;nt!==null;){i=nt;var r=i.sibling,s=i.return;if(Gh(i),i===n){nt=null;break e}if(r!==null){r.return=s,nt=r;break e}nt=s}}}var y2={getCacheForType:function(e){var t=ut(Je),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ut(Je).controller.signal}},x2=typeof WeakMap=="function"?WeakMap:Map,ze=0,Le=null,be=null,we=0,Ae=0,Nt=null,ea=!1,vi=!1,ec=!1,zn=0,Ke=0,ta=0,La=0,tc=0,Dt=0,yi=0,Ml=null,wt=null,nc=!1,to=0,e0=0,no=1/0,ao=null,na=null,et=0,aa=null,xi=null,On=0,ac=0,ic=null,t0=null,zl=0,lc=null;function kt(){return(ze&2)!==0&&we!==0?we&-we:_.T!==null?fc():vd()}function n0(){if(Dt===0)if((we&536870912)===0||Ce){var e=fr;fr<<=1,(fr&3932160)===0&&(fr=262144),Dt=e}else Dt=536870912;return e=At.current,e!==null&&(e.flags|=32),Dt}function Et(e,t,n){(e===Le&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(bi(e,0),ia(e,we,Dt,!1)),Fi(e,n),((ze&2)===0||e!==Le)&&(e===Le&&((ze&2)===0&&(La|=n),Ke===4&&ia(e,we,Dt,!1)),un(e))}function a0(e,t,n){if((ze&6)!==0)throw Error(o(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ji(e,t),r=i?w2(e,t):oc(e,t,!0),s=i;do{if(r===0){vi&&!i&&ia(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!b2(n)){r=oc(e,t,!1),s=!1;continue}if(r===2){if(s=t,e.errorRecoveryDisabledLanes&s)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var v=e;r=Ml;var C=v.current.memoizedState.isDehydrated;if(C&&(bi(v,p).flags|=256),p=oc(v,p,!1),p!==2){if(ec&&!C){v.errorRecoveryDisabledLanes|=s,La|=s,r=4;break e}s=wt,wt=r,s!==null&&(wt===null?wt=s:wt.push.apply(wt,s))}r=p}if(s=!1,r!==2)continue}}if(r===1){bi(e,0),ia(e,t,0,!0);break}e:{switch(i=e,s=r,s){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:ia(i,t,Dt,!ea);break e;case 2:wt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(r=to+300-Tt(),10<r)){if(ia(i,t,Dt,!ea),pr(i,0,!0)!==0)break e;On=t,i.timeoutHandle=D0(i0.bind(null,i,n,wt,ao,nc,t,Dt,La,yi,ea,s,"Throttled",-0,0),r);break e}i0(i,n,wt,ao,nc,t,Dt,La,yi,ea,s,null,-0,0)}}break}while(!0);un(e)}function i0(e,t,n,i,r,s,p,v,C,Y,P,te,G,Q){if(e.timeoutHandle=-1,te=t.subtreeFlags,te&8192||(te&16785408)===16785408){te={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:mn},Fh(t,s,te);var ue=(s&62914560)===s?to-Tt():(s&4194048)===s?e0-Tt():0;if(ue=ix(te,ue),ue!==null){On=s,e.cancelPendingCommit=ue(d0.bind(null,e,t,s,n,i,r,p,v,C,P,te,null,G,Q)),ia(e,s,p,!Y);return}}d0(e,t,s,n,i,r,p,v,C)}function b2(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!zt(s(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ia(e,t,n,i){t&=~tc,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var r=t;0<r;){var s=31-Mt(r),p=1<<s;i[s]=-1,r&=~p}n!==0&&hd(e,n,t)}function io(){return(ze&6)===0?(Ol(0),!1):!0}function rc(){if(be!==null){if(Ae===0)var e=be.return;else e=be,xn=Ra=null,ws(e),ci=null,dl=0,e=be;for(;e!==null;)kh(e.alternate,e),e=e.return;be=null}}function bi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,H2(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),On=0,rc(),Le=e,be=n=vn(e.current,null),we=t,Ae=0,Nt=null,ea=!1,vi=Ji(e,t),ec=!1,yi=Dt=tc=La=ta=Ke=0,wt=Ml=null,nc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-Mt(i),s=1<<r;t|=e[r],i&=~s}return zn=t,jr(),n}function l0(e,t){ge=null,_.H=bl,t===si||t===Nr?(t=Sp(),Ae=3):t===cs?(t=Sp(),Ae=4):Ae=t===Bs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Nt=t,be===null&&(Ke=1,Qr(e,Yt(t,e.current)))}function r0(){var e=At.current;return e===null?!0:(we&4194048)===we?Kt===null:(we&62914560)===we||(we&536870912)!==0?e===Kt:!1}function o0(){var e=_.H;return _.H=bl,e===null?bl:e}function u0(){var e=_.A;return _.A=y2,e}function lo(){Ke=4,ea||(we&4194048)!==we&&At.current!==null||(vi=!0),(ta&134217727)===0&&(La&134217727)===0||Le===null||ia(Le,we,Dt,!1)}function oc(e,t,n){var i=ze;ze|=2;var r=o0(),s=u0();(Le!==e||we!==t)&&(ao=null,bi(e,t)),t=!1;var p=Ke;e:do try{if(Ae!==0&&be!==null){var v=be,C=Nt;switch(Ae){case 8:rc(),p=6;break e;case 3:case 2:case 9:case 6:At.current===null&&(t=!0);var Y=Ae;if(Ae=0,Nt=null,Si(e,v,C,Y),n&&vi){p=0;break e}break;default:Y=Ae,Ae=0,Nt=null,Si(e,v,C,Y)}}S2(),p=Ke;break}catch(P){l0(e,P)}while(!0);return t&&e.shellSuspendCounter++,xn=Ra=null,ze=i,_.H=r,_.A=s,be===null&&(Le=null,we=0,jr()),p}function S2(){for(;be!==null;)s0(be)}function w2(e,t){var n=ze;ze|=2;var i=o0(),r=u0();Le!==e||we!==t?(ao=null,no=Tt()+500,bi(e,t)):vi=Ji(e,t);e:do try{if(Ae!==0&&be!==null){t=be;var s=Nt;t:switch(Ae){case 1:Ae=0,Nt=null,Si(e,t,s,1);break;case 2:case 9:if(xp(s)){Ae=0,Nt=null,c0(t);break}t=function(){Ae!==2&&Ae!==9||Le!==e||(Ae=7),un(e)},s.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:xp(s)?(Ae=0,Nt=null,c0(t)):(Ae=0,Nt=null,Si(e,t,s,7));break;case 5:var p=null;switch(be.tag){case 26:p=be.memoizedState;case 5:case 27:var v=be;if(p?J0(p):v.stateNode.complete){Ae=0,Nt=null;var C=v.sibling;if(C!==null)be=C;else{var Y=v.return;Y!==null?(be=Y,ro(Y)):be=null}break t}}Ae=0,Nt=null,Si(e,t,s,5);break;case 6:Ae=0,Nt=null,Si(e,t,s,6);break;case 8:rc(),Ke=6;break e;default:throw Error(o(462))}}E2();break}catch(P){l0(e,P)}while(!0);return xn=Ra=null,_.H=i,_.A=r,ze=n,be!==null?0:(Le=null,we=0,jr(),Ke)}function E2(){for(;be!==null&&!Kv();)s0(be)}function s0(e){var t=Nh(e.alternate,e,zn);e.memoizedProps=e.pendingProps,t===null?ro(e):be=t}function c0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Rh(n,t,t.pendingProps,t.type,void 0,we);break;case 11:t=Rh(n,t,t.pendingProps,t.type.render,t.ref,we);break;case 5:ws(t);default:kh(n,t),t=be=up(t,zn),t=Nh(n,t,zn)}e.memoizedProps=e.pendingProps,t===null?ro(e):be=t}function Si(e,t,n,i){xn=Ra=null,ws(t),ci=null,dl=0;var r=t.return;try{if(f2(e,r,t,n,we)){Ke=1,Qr(e,Yt(n,e.current)),be=null;return}}catch(s){if(r!==null)throw be=r,s;Ke=1,Qr(e,Yt(n,e.current)),be=null;return}t.flags&32768?(Ce||i===1?e=!0:vi||(we&536870912)!==0?e=!1:(ea=e=!0,(i===2||i===9||i===3||i===6)&&(i=At.current,i!==null&&i.tag===13&&(i.flags|=16384))),f0(t,e)):ro(t)}function ro(e){var t=e;do{if((t.flags&32768)!==0){f0(t,ea);return}e=t.return;var n=h2(t.alternate,t,zn);if(n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Ke===0&&(Ke=5)}function f0(e,t){do{var n=m2(e.alternate,e);if(n!==null){n.flags&=32767,be=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){be=e;return}be=e=n}while(e!==null);Ke=6,be=null}function d0(e,t,n,i,r,s,p,v,C){e.cancelPendingCommit=null;do oo();while(et!==0);if((ze&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(s=t.lanes|t.childLanes,s|=Ju,ny(e,n,s,p,v,C),e===Le&&(be=Le=null,we=0),xi=t,aa=e,On=n,ac=s,ic=r,t0=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,R2(sr,function(){return v0(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=_.T,_.T=null,r=H.p,H.p=2,p=ze,ze|=4;try{g2(e,t,n)}finally{ze=p,H.p=r,_.T=i}}et=1,p0(),h0(),m0()}}function p0(){if(et===1){et=0;var e=aa,t=xi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null;var i=H.p;H.p=2;var r=ze;ze|=4;try{Qh(t,e);var s=xc,p=Id(e.containerInfo),v=s.focusedElem,C=s.selectionRange;if(p!==v&&v&&v.ownerDocument&&Pd(v.ownerDocument.documentElement,v)){if(C!==null&&Xu(v)){var Y=C.start,P=C.end;if(P===void 0&&(P=Y),"selectionStart"in v)v.selectionStart=Y,v.selectionEnd=Math.min(P,v.value.length);else{var te=v.ownerDocument||document,G=te&&te.defaultView||window;if(G.getSelection){var Q=G.getSelection(),ue=v.textContent.length,pe=Math.min(C.start,ue),ke=C.end===void 0?pe:Math.min(C.end,ue);!Q.extend&&pe>ke&&(p=ke,ke=pe,pe=p);var k=Wd(v,pe),z=Wd(v,ke);if(k&&z&&(Q.rangeCount!==1||Q.anchorNode!==k.node||Q.anchorOffset!==k.offset||Q.focusNode!==z.node||Q.focusOffset!==z.offset)){var q=te.createRange();q.setStart(k.node,k.offset),Q.removeAllRanges(),pe>ke?(Q.addRange(q),Q.extend(z.node,z.offset)):(q.setEnd(z.node,z.offset),Q.addRange(q))}}}}for(te=[],Q=v;Q=Q.parentNode;)Q.nodeType===1&&te.push({element:Q,left:Q.scrollLeft,top:Q.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<te.length;v++){var I=te[v];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}bo=!!yc,xc=yc=null}finally{ze=r,H.p=i,_.T=n}}e.current=t,et=2}}function h0(){if(et===2){et=0;var e=aa,t=xi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=_.T,_.T=null;var i=H.p;H.p=2;var r=ze;ze|=4;try{Yh(e,t.alternate,t)}finally{ze=r,H.p=i,_.T=n}}et=3}}function m0(){if(et===4||et===3){et=0,Qv();var e=aa,t=xi,n=On,i=t0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?et=5:(et=0,xi=aa=null,g0(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(na=null),ju(n),t=t.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Zi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=_.T,r=H.p,H.p=2,_.T=null;try{for(var s=e.onRecoverableError,p=0;p<i.length;p++){var v=i[p];s(v.value,{componentStack:v.stack})}}finally{_.T=t,H.p=r}}(On&3)!==0&&oo(),un(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===lc?zl++:(zl=0,lc=e):zl=0,Ol(0)}}function g0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,cl(t)))}function oo(){return p0(),h0(),m0(),v0()}function v0(){if(et!==5)return!1;var e=aa,t=ac;ac=0;var n=ju(On),i=_.T,r=H.p;try{H.p=32>n?32:n,_.T=null,n=ic,ic=null;var s=aa,p=On;if(et=0,xi=aa=null,On=0,(ze&6)!==0)throw Error(o(331));var v=ze;if(ze|=4,Ph(s.current),Jh(s,s.current,p,n),ze=v,Ol(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Zi,s)}catch{}return!0}finally{H.p=r,_.T=i,g0(e,t)}}function y0(e,t,n){t=Yt(n,t),t=$s(e.stateNode,t,2),e=Fn(e,t,2),e!==null&&(Fi(e,2),un(e))}function _e(e,t,n){if(e.tag===3)y0(e,e,n);else for(;t!==null;){if(t.tag===3){y0(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(na===null||!na.has(i))){e=Yt(n,e),n=xh(2),i=Fn(t,n,2),i!==null&&(bh(n,i,t,e),Fi(i,2),un(i));break}}t=t.return}}function uc(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new x2;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(ec=!0,r.add(n),e=C2.bind(null,e,t,n),t.then(e,e))}function C2(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Le===e&&(we&n)===n&&(Ke===4||Ke===3&&(we&62914560)===we&&300>Tt()-to?(ze&2)===0&&bi(e,0):tc|=n,yi===we&&(yi=0)),un(e)}function x0(e,t){t===0&&(t=pd()),e=Ca(e,t),e!==null&&(Fi(e,t),un(e))}function j2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),x0(e,n)}function T2(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),x0(e,n)}function R2(e,t){return Su(e,t)}var uo=null,wi=null,sc=!1,so=!1,cc=!1,la=0;function un(e){e!==wi&&e.next===null&&(wi===null?uo=wi=e:wi=wi.next=e),so=!0,sc||(sc=!0,z2())}function Ol(e,t){if(!cc&&so){cc=!0;do for(var n=!1,i=uo;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var s=0;else{var p=i.suspendedLanes,v=i.pingedLanes;s=(1<<31-Mt(42|e)+1)-1,s&=r&~(p&~v),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,E0(i,s))}else s=we,s=pr(i,i===Le?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||Ji(i,s)||(n=!0,E0(i,s));i=i.next}while(n);cc=!1}}function M2(){b0()}function b0(){so=sc=!1;var e=0;la!==0&&U2()&&(e=la);for(var t=Tt(),n=null,i=uo;i!==null;){var r=i.next,s=S0(i,t);s===0?(i.next=null,n===null?uo=r:n.next=r,r===null&&(wi=n)):(n=i,(e!==0||(s&3)!==0)&&(so=!0)),i=r}et!==0&&et!==5||Ol(e),la!==0&&(la=0)}function S0(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var p=31-Mt(s),v=1<<p,C=r[p];C===-1?((v&n)===0||(v&i)!==0)&&(r[p]=ty(v,t)):C<=t&&(e.expiredLanes|=v),s&=~v}if(t=Le,n=we,n=pr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&wu(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ji(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&wu(i),ju(n)){case 2:case 8:n=fd;break;case 32:n=sr;break;case 268435456:n=dd;break;default:n=sr}return i=w0.bind(null,e),n=Su(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&wu(i),e.callbackPriority=2,e.callbackNode=null,2}function w0(e,t){if(et!==0&&et!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(oo()&&e.callbackNode!==n)return null;var i=we;return i=pr(e,e===Le?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(a0(e,i,t),S0(e,Tt()),e.callbackNode!=null&&e.callbackNode===n?w0.bind(null,e):null)}function E0(e,t){if(oo())return null;a0(e,t,!0)}function z2(){q2(function(){(ze&6)!==0?Su(cd,M2):b0()})}function fc(){if(la===0){var e=oi;e===0&&(e=cr,cr<<=1,(cr&261888)===0&&(cr=256)),la=e}return la}function C0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vr(""+e)}function j0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function O2(e,t,n,i,r){if(t==="submit"&&n&&n.stateNode===r){var s=C0((r[vt]||null).action),p=i.submitter;p&&(t=(t=p[vt]||null)?C0(t.formAction):p.getAttribute("formAction"),t!==null&&(s=t,p=null));var v=new Sr("action","action",null,i,r);e.push({event:v,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(la!==0){var C=p?j0(r,p):new FormData(r);As(n,{pending:!0,data:C,method:r.method,action:s},null,C)}}else typeof s=="function"&&(v.preventDefault(),C=p?j0(r,p):new FormData(r),As(n,{pending:!0,data:C,method:r.method,action:s},s,C))},currentTarget:r}]})}}for(var dc=0;dc<Zu.length;dc++){var pc=Zu[dc],A2=pc.toLowerCase(),_2=pc[0].toUpperCase()+pc.slice(1);Pt(A2,"on"+_2)}Pt(np,"onAnimationEnd"),Pt(ap,"onAnimationIteration"),Pt(ip,"onAnimationStart"),Pt("dblclick","onDoubleClick"),Pt("focusin","onFocus"),Pt("focusout","onBlur"),Pt(Zy,"onTransitionRun"),Pt(Jy,"onTransitionStart"),Pt(Fy,"onTransitionCancel"),Pt(lp,"onTransitionEnd"),Qa("onMouseEnter",["mouseout","mouseover"]),Qa("onMouseLeave",["mouseout","mouseover"]),Qa("onPointerEnter",["pointerout","pointerover"]),Qa("onPointerLeave",["pointerout","pointerover"]),ba("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ba("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ba("onBeforeInput",["compositionend","keypress","textInput","paste"]),ba("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ba("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ba("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Al));function T0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var p=i.length-1;0<=p;p--){var v=i[p],C=v.instance,Y=v.currentTarget;if(v=v.listener,C!==s&&r.isPropagationStopped())break e;s=v,r.currentTarget=Y;try{s(r)}catch(P){Cr(P)}r.currentTarget=null,s=C}else for(p=0;p<i.length;p++){if(v=i[p],C=v.instance,Y=v.currentTarget,v=v.listener,C!==s&&r.isPropagationStopped())break e;s=v,r.currentTarget=Y;try{s(r)}catch(P){Cr(P)}r.currentTarget=null,s=C}}}}function Se(e,t){var n=t[Tu];n===void 0&&(n=t[Tu]=new Set);var i=e+"__bubble";n.has(i)||(R0(t,e,2,!1),n.add(i))}function hc(e,t,n){var i=0;t&&(i|=4),R0(n,e,i,t)}var co="_reactListening"+Math.random().toString(36).slice(2);function mc(e){if(!e[co]){e[co]=!0,bd.forEach(function(n){n!=="selectionchange"&&(N2.has(n)||hc(n,!1,e),hc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[co]||(t[co]=!0,hc("selectionchange",!1,t))}}function R0(e,t,n,i){switch(n1(t)){case 2:var r=ox;break;case 8:r=ux;break;default:r=Oc}n=r.bind(null,t,n,e),r=void 0,!ku||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function gc(e,t,n,i,r){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var p=i.tag;if(p===3||p===4){var v=i.stateNode.containerInfo;if(v===r)break;if(p===4)for(p=i.return;p!==null;){var C=p.tag;if((C===3||C===4)&&p.stateNode.containerInfo===r)return;p=p.return}for(;v!==null;){if(p=Xa(v),p===null)return;if(C=p.tag,C===5||C===6||C===26||C===27){i=s=p;continue e}v=v.parentNode}}i=i.return}_d(function(){var Y=s,P=Nu(n),te=[];e:{var G=rp.get(e);if(G!==void 0){var Q=Sr,ue=e;switch(e){case"keypress":if(xr(n)===0)break e;case"keydown":case"keyup":Q=Ty;break;case"focusin":ue="focus",Q=Uu;break;case"focusout":ue="blur",Q=Uu;break;case"beforeblur":case"afterblur":Q=Uu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=hy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=zy;break;case np:case ap:case ip:Q=vy;break;case lp:Q=Ay;break;case"scroll":case"scrollend":Q=dy;break;case"wheel":Q=Ny;break;case"copy":case"cut":case"paste":Q=xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=$d;break;case"toggle":case"beforetoggle":Q=ky}var pe=(t&4)!==0,ke=!pe&&(e==="scroll"||e==="scrollend"),k=pe?G!==null?G+"Capture":null:G;pe=[];for(var z=Y,q;z!==null;){var I=z;if(q=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||q===null||k===null||(I=Ii(z,k),I!=null&&pe.push(_l(z,I,q))),ke)break;z=z.return}0<pe.length&&(G=new Q(G,ue,null,n,P),te.push({event:G,listeners:pe}))}}if((t&7)===0){e:{if(G=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",G&&n!==_u&&(ue=n.relatedTarget||n.fromElement)&&(Xa(ue)||ue[Ga]))break e;if((Q||G)&&(G=P.window===P?P:(G=P.ownerDocument)?G.defaultView||G.parentWindow:window,Q?(ue=n.relatedTarget||n.toElement,Q=Y,ue=ue?Xa(ue):null,ue!==null&&(ke=f(ue),pe=ue.tag,ue!==ke||pe!==5&&pe!==27&&pe!==6)&&(ue=null)):(Q=null,ue=Y),Q!==ue)){if(pe=kd,I="onMouseLeave",k="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(pe=$d,I="onPointerLeave",k="onPointerEnter",z="pointer"),ke=Q==null?G:Pi(Q),q=ue==null?G:Pi(ue),G=new pe(I,z+"leave",Q,n,P),G.target=ke,G.relatedTarget=q,I=null,Xa(P)===Y&&(pe=new pe(k,z+"enter",ue,n,P),pe.target=q,pe.relatedTarget=ke,I=pe),ke=I,Q&&ue)t:{for(pe=D2,k=Q,z=ue,q=0,I=k;I;I=pe(I))q++;I=0;for(var de=z;de;de=pe(de))I++;for(;0<q-I;)k=pe(k),q--;for(;0<I-q;)z=pe(z),I--;for(;q--;){if(k===z||z!==null&&k===z.alternate){pe=k;break t}k=pe(k),z=pe(z)}pe=null}else pe=null;Q!==null&&M0(te,G,Q,pe,!1),ue!==null&&ke!==null&&M0(te,ke,ue,pe,!0)}}e:{if(G=Y?Pi(Y):window,Q=G.nodeName&&G.nodeName.toLowerCase(),Q==="select"||Q==="input"&&G.type==="file")var Re=Vd;else if(Gd(G))if(Kd)Re=Vy;else{Re=Gy;var ce=Yy}else Q=G.nodeName,!Q||Q.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?Y&&Au(Y.elementType)&&(Re=Vd):Re=Xy;if(Re&&(Re=Re(e,Y))){Xd(te,Re,n,P);break e}ce&&ce(e,G,Y),e==="focusout"&&Y&&G.type==="number"&&Y.memoizedProps.value!=null&&Ou(G,"number",G.value)}switch(ce=Y?Pi(Y):window,e){case"focusin":(Gd(ce)||ce.contentEditable==="true")&&(Ia=ce,Vu=Y,ol=null);break;case"focusout":ol=Vu=Ia=null;break;case"mousedown":Ku=!0;break;case"contextmenu":case"mouseup":case"dragend":Ku=!1,ep(te,n,P);break;case"selectionchange":if(Qy)break;case"keydown":case"keyup":ep(te,n,P)}var ve;if(qu)e:{switch(e){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Pa?qd(e,n)&&(Ee="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ee="onCompositionStart");Ee&&(Bd&&n.locale!=="ko"&&(Pa||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Pa&&(ve=Nd()):(Gn=P,Lu="value"in Gn?Gn.value:Gn.textContent,Pa=!0)),ce=fo(Y,Ee),0<ce.length&&(Ee=new Ld(Ee,e,null,n,P),te.push({event:Ee,listeners:ce}),ve?Ee.data=ve:(ve=Yd(n),ve!==null&&(Ee.data=ve)))),(ve=$y?By(e,n):Uy(e,n))&&(Ee=fo(Y,"onBeforeInput"),0<Ee.length&&(ce=new Ld("onBeforeInput","beforeinput",null,n,P),te.push({event:ce,listeners:Ee}),ce.data=ve)),O2(te,e,Y,n,P)}T0(te,t)})}function _l(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fo(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=Ii(e,n),r!=null&&i.unshift(_l(e,r,s)),r=Ii(e,t),r!=null&&i.push(_l(e,r,s))),e.tag===3)return i;e=e.return}return[]}function D2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function M0(e,t,n,i,r){for(var s=t._reactName,p=[];n!==null&&n!==i;){var v=n,C=v.alternate,Y=v.stateNode;if(v=v.tag,C!==null&&C===i)break;v!==5&&v!==26&&v!==27||Y===null||(C=Y,r?(Y=Ii(n,s),Y!=null&&p.unshift(_l(n,Y,C))):r||(Y=Ii(n,s),Y!=null&&p.push(_l(n,Y,C)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var k2=/\r\n?/g,L2=/\u0000|\uFFFD/g;function z0(e){return(typeof e=="string"?e:""+e).replace(k2,`
`).replace(L2,"")}function O0(e,t){return t=z0(t),z0(e)===t}function De(e,t,n,i,r,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ja(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ja(e,""+i);break;case"className":mr(e,"class",i);break;case"tabIndex":mr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":mr(e,n,i);break;case"style":Od(e,i,s);break;case"data":if(t!=="object"){mr(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=vr(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&De(e,t,"name",r.name,r,null),De(e,t,"formEncType",r.formEncType,r,null),De(e,t,"formMethod",r.formMethod,r,null),De(e,t,"formTarget",r.formTarget,r,null)):(De(e,t,"encType",r.encType,r,null),De(e,t,"method",r.method,r,null),De(e,t,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=vr(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=mn);break;case"onScroll":i!=null&&Se("scroll",e);break;case"onScrollEnd":i!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=vr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Se("beforetoggle",e),Se("toggle",e),hr(e,"popover",i);break;case"xlinkActuate":hn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":hn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":hn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":hn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":hn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":hn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":hn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":hn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":hn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":hr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=cy.get(n)||n,hr(e,n,i))}}function vc(e,t,n,i,r,s){switch(n){case"style":Od(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Ja(e,i):(typeof i=="number"||typeof i=="bigint")&&Ja(e,""+i);break;case"onScroll":i!=null&&Se("scroll",e);break;case"onScrollEnd":i!=null&&Se("scrollend",e);break;case"onClick":i!=null&&(e.onclick=mn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),s=e[vt]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,r),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,r);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):hr(e,n,i)}}}function ct(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var i=!1,r=!1,s;for(s in n)if(n.hasOwnProperty(s)){var p=n[s];if(p!=null)switch(s){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:De(e,t,s,p,n,null)}}r&&De(e,t,"srcSet",n.srcSet,n,null),i&&De(e,t,"src",n.src,n,null);return;case"input":Se("invalid",e);var v=s=p=r=null,C=null,Y=null;for(i in n)if(n.hasOwnProperty(i)){var P=n[i];if(P!=null)switch(i){case"name":r=P;break;case"type":p=P;break;case"checked":C=P;break;case"defaultChecked":Y=P;break;case"value":s=P;break;case"defaultValue":v=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(o(137,t));break;default:De(e,t,i,P,n,null)}}Td(e,s,v,C,Y,p,r,!1);return;case"select":Se("invalid",e),i=p=s=null;for(r in n)if(n.hasOwnProperty(r)&&(v=n[r],v!=null))switch(r){case"value":s=v;break;case"defaultValue":p=v;break;case"multiple":i=v;default:De(e,t,r,v,n,null)}t=s,n=p,e.multiple=!!i,t!=null?Za(e,!!i,t,!1):n!=null&&Za(e,!!i,n,!0);return;case"textarea":Se("invalid",e),s=r=i=null;for(p in n)if(n.hasOwnProperty(p)&&(v=n[p],v!=null))switch(p){case"value":i=v;break;case"defaultValue":r=v;break;case"children":s=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(o(91));break;default:De(e,t,p,v,n,null)}Md(e,i,r,s);return;case"option":for(C in n)if(n.hasOwnProperty(C)&&(i=n[C],i!=null))switch(C){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:De(e,t,C,i,n,null)}return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(i=0;i<Al.length;i++)Se(Al[i],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Y in n)if(n.hasOwnProperty(Y)&&(i=n[Y],i!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:De(e,t,Y,i,n,null)}return;default:if(Au(t)){for(P in n)n.hasOwnProperty(P)&&(i=n[P],i!==void 0&&vc(e,t,P,i,n,void 0));return}}for(v in n)n.hasOwnProperty(v)&&(i=n[v],i!=null&&De(e,t,v,i,n,null))}function $2(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,p=null,v=null,C=null,Y=null,P=null;for(Q in n){var te=n[Q];if(n.hasOwnProperty(Q)&&te!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":C=te;default:i.hasOwnProperty(Q)||De(e,t,Q,null,i,te)}}for(var G in i){var Q=i[G];if(te=n[G],i.hasOwnProperty(G)&&(Q!=null||te!=null))switch(G){case"type":s=Q;break;case"name":r=Q;break;case"checked":Y=Q;break;case"defaultChecked":P=Q;break;case"value":p=Q;break;case"defaultValue":v=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(o(137,t));break;default:Q!==te&&De(e,t,G,Q,i,te)}}zu(e,p,v,C,Y,P,s,r);return;case"select":Q=p=v=G=null;for(s in n)if(C=n[s],n.hasOwnProperty(s)&&C!=null)switch(s){case"value":break;case"multiple":Q=C;default:i.hasOwnProperty(s)||De(e,t,s,null,i,C)}for(r in i)if(s=i[r],C=n[r],i.hasOwnProperty(r)&&(s!=null||C!=null))switch(r){case"value":G=s;break;case"defaultValue":v=s;break;case"multiple":p=s;default:s!==C&&De(e,t,r,s,i,C)}t=v,n=p,i=Q,G!=null?Za(e,!!n,G,!1):!!i!=!!n&&(t!=null?Za(e,!!n,t,!0):Za(e,!!n,n?[]:"",!1));return;case"textarea":Q=G=null;for(v in n)if(r=n[v],n.hasOwnProperty(v)&&r!=null&&!i.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:De(e,t,v,null,i,r)}for(p in i)if(r=i[p],s=n[p],i.hasOwnProperty(p)&&(r!=null||s!=null))switch(p){case"value":G=r;break;case"defaultValue":Q=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));break;default:r!==s&&De(e,t,p,r,i,s)}Rd(e,G,Q);return;case"option":for(var ue in n)if(G=n[ue],n.hasOwnProperty(ue)&&G!=null&&!i.hasOwnProperty(ue))switch(ue){case"selected":e.selected=!1;break;default:De(e,t,ue,null,i,G)}for(C in i)if(G=i[C],Q=n[C],i.hasOwnProperty(C)&&G!==Q&&(G!=null||Q!=null))switch(C){case"selected":e.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:De(e,t,C,G,i,Q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in n)G=n[pe],n.hasOwnProperty(pe)&&G!=null&&!i.hasOwnProperty(pe)&&De(e,t,pe,null,i,G);for(Y in i)if(G=i[Y],Q=n[Y],i.hasOwnProperty(Y)&&G!==Q&&(G!=null||Q!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(o(137,t));break;default:De(e,t,Y,G,i,Q)}return;default:if(Au(t)){for(var ke in n)G=n[ke],n.hasOwnProperty(ke)&&G!==void 0&&!i.hasOwnProperty(ke)&&vc(e,t,ke,void 0,i,G);for(P in i)G=i[P],Q=n[P],!i.hasOwnProperty(P)||G===Q||G===void 0&&Q===void 0||vc(e,t,P,G,i,Q);return}}for(var k in n)G=n[k],n.hasOwnProperty(k)&&G!=null&&!i.hasOwnProperty(k)&&De(e,t,k,null,i,G);for(te in i)G=i[te],Q=n[te],!i.hasOwnProperty(te)||G===Q||G==null&&Q==null||De(e,t,te,G,i,Q)}function A0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function B2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var r=n[i],s=r.transferSize,p=r.initiatorType,v=r.duration;if(s&&v&&A0(p)){for(p=0,v=r.responseEnd,i+=1;i<n.length;i++){var C=n[i],Y=C.startTime;if(Y>v)break;var P=C.transferSize,te=C.initiatorType;P&&A0(te)&&(C=C.responseEnd,p+=P*(C<v?1:(v-Y)/(C-Y)))}if(--i,t+=8*(s+p)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var yc=null,xc=null;function po(e){return e.nodeType===9?e:e.ownerDocument}function _0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function N0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function bc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sc=null;function U2(){var e=window.event;return e&&e.type==="popstate"?e===Sc?!1:(Sc=e,!0):(Sc=null,!1)}var D0=typeof setTimeout=="function"?setTimeout:void 0,H2=typeof clearTimeout=="function"?clearTimeout:void 0,k0=typeof Promise=="function"?Promise:void 0,q2=typeof queueMicrotask=="function"?queueMicrotask:typeof k0<"u"?function(e){return k0.resolve(null).then(e).catch(Y2)}:D0;function Y2(e){setTimeout(function(){throw e})}function ra(e){return e==="head"}function L0(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(r),Ti(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Nl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Nl(n);for(var s=n.firstChild;s;){var p=s.nextSibling,v=s.nodeName;s[Wi]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=p}}else n==="body"&&Nl(e.ownerDocument.body);n=r}while(n);Ti(t)}function $0(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function wc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":wc(n),Ru(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function G2(e,t,n,i){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Wi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Qt(e.nextSibling),e===null)break}return null}function X2(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Qt(e.nextSibling),e===null))return null;return e}function B0(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Qt(e.nextSibling),e===null))return null;return e}function Ec(e){return e.data==="$?"||e.data==="$~"}function Cc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function V2(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var jc=null;function U0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Qt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function H0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function q0(e,t,n){switch(t=po(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Nl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ru(e)}var Zt=new Map,Y0=new Set;function ho(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var An=H.d;H.d={f:K2,r:Q2,D:Z2,C:J2,L:F2,m:W2,X:I2,S:P2,M:ex};function K2(){var e=An.f(),t=io();return e||t}function Q2(e){var t=Va(e);t!==null&&t.tag===5&&t.type==="form"?lh(t):An.r(e)}var Ei=typeof document>"u"?null:document;function G0(e,t,n){var i=Ei;if(i&&typeof t=="string"&&t){var r=Ht(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Y0.has(r)||(Y0.add(r),e={rel:e,crossOrigin:n,href:t},i.querySelector(r)===null&&(t=i.createElement("link"),ct(t,"link",e),tt(t),i.head.appendChild(t)))}}function Z2(e){An.D(e),G0("dns-prefetch",e,null)}function J2(e,t){An.C(e,t),G0("preconnect",e,t)}function F2(e,t,n){An.L(e,t,n);var i=Ei;if(i&&e&&t){var r='link[rel="preload"][as="'+Ht(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Ht(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Ht(n.imageSizes)+'"]')):r+='[href="'+Ht(e)+'"]';var s=r;switch(t){case"style":s=Ci(e);break;case"script":s=ji(e)}Zt.has(s)||(e=S({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Zt.set(s,e),i.querySelector(r)!==null||t==="style"&&i.querySelector(Dl(s))||t==="script"&&i.querySelector(kl(s))||(t=i.createElement("link"),ct(t,"link",e),tt(t),i.head.appendChild(t)))}}function W2(e,t){An.m(e,t);var n=Ei;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Ht(i)+'"][href="'+Ht(e)+'"]',s=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=ji(e)}if(!Zt.has(s)&&(e=S({rel:"modulepreload",href:e},t),Zt.set(s,e),n.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(kl(s)))return}i=n.createElement("link"),ct(i,"link",e),tt(i),n.head.appendChild(i)}}}function P2(e,t,n){An.S(e,t,n);var i=Ei;if(i&&e){var r=Ka(i).hoistableStyles,s=Ci(e);t=t||"default";var p=r.get(s);if(!p){var v={loading:0,preload:null};if(p=i.querySelector(Dl(s)))v.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Zt.get(s))&&Tc(e,n);var C=p=i.createElement("link");tt(C),ct(C,"link",e),C._p=new Promise(function(Y,P){C.onload=Y,C.onerror=P}),C.addEventListener("load",function(){v.loading|=1}),C.addEventListener("error",function(){v.loading|=2}),v.loading|=4,mo(p,t,i)}p={type:"stylesheet",instance:p,count:1,state:v},r.set(s,p)}}}function I2(e,t){An.X(e,t);var n=Ei;if(n&&e){var i=Ka(n).hoistableScripts,r=ji(e),s=i.get(r);s||(s=n.querySelector(kl(r)),s||(e=S({src:e,async:!0},t),(t=Zt.get(r))&&Rc(e,t),s=n.createElement("script"),tt(s),ct(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function ex(e,t){An.M(e,t);var n=Ei;if(n&&e){var i=Ka(n).hoistableScripts,r=ji(e),s=i.get(r);s||(s=n.querySelector(kl(r)),s||(e=S({src:e,async:!0,type:"module"},t),(t=Zt.get(r))&&Rc(e,t),s=n.createElement("script"),tt(s),ct(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function X0(e,t,n,i){var r=(r=he.current)?ho(r):null;if(!r)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ci(n.href),n=Ka(r).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ci(n.href);var s=Ka(r).hoistableStyles,p=s.get(e);if(p||(r=r.ownerDocument||r,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,p),(s=r.querySelector(Dl(e)))&&!s._p&&(p.instance=s,p.state.loading=5),Zt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Zt.set(e,n),s||tx(r,e,n,p.state))),t&&i===null)throw Error(o(528,""));return p}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ji(n),n=Ka(r).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Ci(e){return'href="'+Ht(e)+'"'}function Dl(e){return'link[rel="stylesheet"]['+e+"]"}function V0(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function tx(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ct(t,"link",n),tt(t),e.head.appendChild(t))}function ji(e){return'[src="'+Ht(e)+'"]'}function kl(e){return"script[async]"+e}function K0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ht(n.href)+'"]');if(i)return t.instance=i,tt(i),i;var r=S({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),tt(i),ct(i,"style",r),mo(i,n.precedence,e),t.instance=i;case"stylesheet":r=Ci(n.href);var s=e.querySelector(Dl(r));if(s)return t.state.loading|=4,t.instance=s,tt(s),s;i=V0(n),(r=Zt.get(r))&&Tc(i,r),s=(e.ownerDocument||e).createElement("link"),tt(s);var p=s;return p._p=new Promise(function(v,C){p.onload=v,p.onerror=C}),ct(s,"link",i),t.state.loading|=4,mo(s,n.precedence,e),t.instance=s;case"script":return s=ji(n.src),(r=e.querySelector(kl(s)))?(t.instance=r,tt(r),r):(i=n,(r=Zt.get(s))&&(i=S({},n),Rc(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),tt(r),ct(r,"link",i),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,mo(i,n.precedence,e));return t.instance}function mo(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,s=r,p=0;p<i.length;p++){var v=i[p];if(v.dataset.precedence===t)s=v;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Tc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Rc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var go=null;function Q0(e,t,n){if(go===null){var i=new Map,r=go=new Map;r.set(n,i)}else r=go,i=r.get(n),i||(i=new Map,r.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var s=n[r];if(!(s[Wi]||s[rt]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var p=s.getAttribute(t)||"";p=e+p;var v=i.get(p);v?v.push(s):i.set(p,[s])}}return i}function Z0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function nx(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function J0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ax(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=Ci(i.href),s=t.querySelector(Dl(r));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=vo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,tt(s);return}s=t.ownerDocument||t,i=V0(i),(r=Zt.get(r))&&Tc(i,r),s=s.createElement("link"),tt(s);var p=s;p._p=new Promise(function(v,C){p.onload=v,p.onerror=C}),ct(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=vo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Mc=0;function ix(e,t){return e.stylesheets&&e.count===0&&xo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&xo(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Mc===0&&(Mc=62500*B2());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&xo(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Mc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function vo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yo=null;function xo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yo=new Map,t.forEach(lx,e),yo=null,vo.call(e))}function lx(e,t){if(!(t.state.loading&4)){var n=yo.get(e);if(n)var i=n.get(null);else{n=new Map,yo.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var p=r[s];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),i=p)}i&&n.set(null,i)}r=t.instance,p=r.getAttribute("data-precedence"),s=n.get(p)||i,s===i&&n.set(null,r),n.set(p,r),this.count++,i=vo.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Ll={$$typeof:A,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function rx(e,t,n,i,r,s,p,v,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Eu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Eu(0),this.hiddenUpdates=Eu(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function F0(e,t,n,i,r,s,p,v,C,Y,P,te){return e=new rx(e,t,n,p,C,Y,P,te,v),t=1,s===!0&&(t|=24),s=Ot(3,null,null,t),e.current=s,s.stateNode=e,t=os(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},fs(s),e}function W0(e){return e?(e=ni,e):ni}function P0(e,t,n,i,r,s){r=W0(r),i.context===null?i.context=r:i.pendingContext=r,i=Jn(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Fn(e,i,t),n!==null&&(Et(n,e,t),hl(n,e,t))}function I0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zc(e,t){I0(e,t),(e=e.alternate)&&I0(e,t)}function e1(e){if(e.tag===13||e.tag===31){var t=Ca(e,67108864);t!==null&&Et(t,e,67108864),zc(e,67108864)}}function t1(e){if(e.tag===13||e.tag===31){var t=kt();t=Cu(t);var n=Ca(e,t);n!==null&&Et(n,e,t),zc(e,t)}}var bo=!0;function ox(e,t,n,i){var r=_.T;_.T=null;var s=H.p;try{H.p=2,Oc(e,t,n,i)}finally{H.p=s,_.T=r}}function ux(e,t,n,i){var r=_.T;_.T=null;var s=H.p;try{H.p=8,Oc(e,t,n,i)}finally{H.p=s,_.T=r}}function Oc(e,t,n,i){if(bo){var r=Ac(i);if(r===null)gc(e,t,i,So,n),a1(e,i);else if(cx(r,e,t,n,i))i.stopPropagation();else if(a1(e,i),t&4&&-1<sx.indexOf(e)){for(;r!==null;){var s=Va(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var p=xa(s.pendingLanes);if(p!==0){var v=s;for(v.pendingLanes|=2,v.entangledLanes|=2;p;){var C=1<<31-Mt(p);v.entanglements[1]|=C,p&=~C}un(s),(ze&6)===0&&(no=Tt()+500,Ol(0))}}break;case 31:case 13:v=Ca(s,2),v!==null&&Et(v,s,2),io(),zc(s,2)}if(s=Ac(i),s===null&&gc(e,t,i,So,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else gc(e,t,i,null,n)}}function Ac(e){return e=Nu(e),_c(e)}var So=null;function _c(e){if(So=null,e=Xa(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return So=e,null}function n1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zv()){case cd:return 2;case fd:return 8;case sr:case Jv:return 32;case dd:return 268435456;default:return 32}default:return 32}}var Nc=!1,oa=null,ua=null,sa=null,$l=new Map,Bl=new Map,ca=[],sx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function a1(e,t){switch(e){case"focusin":case"focusout":oa=null;break;case"dragenter":case"dragleave":ua=null;break;case"mouseover":case"mouseout":sa=null;break;case"pointerover":case"pointerout":$l.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bl.delete(t.pointerId)}}function Ul(e,t,n,i,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},t!==null&&(t=Va(t),t!==null&&e1(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function cx(e,t,n,i,r){switch(t){case"focusin":return oa=Ul(oa,e,t,n,i,r),!0;case"dragenter":return ua=Ul(ua,e,t,n,i,r),!0;case"mouseover":return sa=Ul(sa,e,t,n,i,r),!0;case"pointerover":var s=r.pointerId;return $l.set(s,Ul($l.get(s)||null,e,t,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Bl.set(s,Ul(Bl.get(s)||null,e,t,n,i,r)),!0}return!1}function i1(e){var t=Xa(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,yd(e.priority,function(){t1(n)});return}}else if(t===31){if(t=y(n),t!==null){e.blockedOn=t,yd(e.priority,function(){t1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ac(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);_u=i,n.target.dispatchEvent(i),_u=null}else return t=Va(n),t!==null&&e1(t),e.blockedOn=n,!1;t.shift()}return!0}function l1(e,t,n){wo(e)&&n.delete(t)}function fx(){Nc=!1,oa!==null&&wo(oa)&&(oa=null),ua!==null&&wo(ua)&&(ua=null),sa!==null&&wo(sa)&&(sa=null),$l.forEach(l1),Bl.forEach(l1)}function Eo(e,t){e.blockedOn===t&&(e.blockedOn=null,Nc||(Nc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,fx)))}var Co=null;function r1(e){Co!==e&&(Co=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Co===e&&(Co=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],r=e[t+2];if(typeof i!="function"){if(_c(i||n)===null)continue;break}var s=Va(n);s!==null&&(e.splice(t,3),t-=3,As(s,{pending:!0,data:r,method:n.method,action:i},i,r))}}))}function Ti(e){function t(C){return Eo(C,e)}oa!==null&&Eo(oa,e),ua!==null&&Eo(ua,e),sa!==null&&Eo(sa,e),$l.forEach(t),Bl.forEach(t);for(var n=0;n<ca.length;n++){var i=ca[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ca.length&&(n=ca[0],n.blockedOn===null);)i1(n),n.blockedOn===null&&ca.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var r=n[i],s=n[i+1],p=r[vt]||null;if(typeof s=="function")p||r1(n);else if(p){var v=null;if(s&&s.hasAttribute("formAction")){if(r=s,p=s[vt]||null)v=p.formAction;else if(_c(r)!==null)continue}else v=p.action;typeof v=="function"?n[i+1]=v:(n.splice(i,3),i-=3),r1(n)}}}function o1(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(p){return r=p})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Dc(e){this._internalRoot=e}jo.prototype.render=Dc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,i=kt();P0(n,i,e,t,null,null)},jo.prototype.unmount=Dc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;P0(e.current,2,null,e,null,null),io(),t[Ga]=null}};function jo(e){this._internalRoot=e}jo.prototype.unstable_scheduleHydration=function(e){if(e){var t=vd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ca.length&&t!==0&&t<ca[n].priority;n++);ca.splice(n,0,e),n===0&&i1(e)}};var u1=l.version;if(u1!=="19.2.0")throw Error(o(527,u1,"19.2.0"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=m(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var dx={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var To=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!To.isDisabled&&To.supportsFiber)try{Zi=To.inject(dx),Rt=To}catch{}}return ql.createRoot=function(e,t){if(!c(e))throw Error(o(299));var n=!1,i="",r=mh,s=gh,p=vh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError)),t=F0(e,1,!1,null,null,n,i,null,r,s,p,o1),e[Ga]=t.current,mc(e),new Dc(t)},ql.hydrateRoot=function(e,t,n){if(!c(e))throw Error(o(299));var i=!1,r="",s=mh,p=gh,v=vh,C=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.formState!==void 0&&(C=n.formState)),t=F0(e,1,!0,t,n??null,i,r,C,s,p,v,o1),t.context=W0(null),n=t.current,i=kt(),i=Cu(i),r=Jn(i),r.callback=null,Fn(n,r,i),n=i,t.current.lanes=n,Fi(t,n),un(t),e[Ga]=t.current,mc(e),new jo(t)},ql.version="19.2.0",ql}var y1;function Sx(){if(y1)return $c.exports;y1=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),$c.exports=bx(),$c.exports}var wx=Sx();const Ex=ir(wx);/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var x1="popstate";function Cx(a={}){function l(o,c){let{pathname:f,search:h,hash:y}=o.location;return bf("",{pathname:f,search:h,hash:y},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function u(o,c){return typeof c=="string"?c:tr(c)}return Tx(l,u,null,a)}function Xe(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function dn(a,l){if(!a){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function jx(){return Math.random().toString(36).substring(2,10)}function b1(a,l){return{usr:a.state,key:a.key,idx:l}}function bf(a,l,u=null,o){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof l=="string"?qi(l):l,state:u,key:l&&l.key||o||jx()}}function tr({pathname:a="/",search:l="",hash:u=""}){return l&&l!=="?"&&(a+=l.charAt(0)==="?"?l:"?"+l),u&&u!=="#"&&(a+=u.charAt(0)==="#"?u:"#"+u),a}function qi(a){let l={};if(a){let u=a.indexOf("#");u>=0&&(l.hash=a.substring(u),a=a.substring(0,u));let o=a.indexOf("?");o>=0&&(l.search=a.substring(o),a=a.substring(0,o)),a&&(l.pathname=a)}return l}function Tx(a,l,u,o={}){let{window:c=document.defaultView,v5Compat:f=!1}=o,h=c.history,y="POP",g=null,m=b();m==null&&(m=0,h.replaceState({...h.state,idx:m},""));function b(){return(h.state||{idx:null}).idx}function S(){y="POP";let B=b(),V=B==null?null:B-m;m=B,g&&g({action:y,location:$.location,delta:V})}function E(B,V){y="PUSH";let O=bf($.location,B,V);m=b()+1;let A=b1(O,m),U=$.createHref(O);try{h.pushState(A,"",U)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;c.location.assign(U)}f&&g&&g({action:y,location:$.location,delta:1})}function D(B,V){y="REPLACE";let O=bf($.location,B,V);m=b();let A=b1(O,m),U=$.createHref(O);h.replaceState(A,"",U),f&&g&&g({action:y,location:$.location,delta:0})}function R(B){return Rx(B)}let $={get action(){return y},get location(){return a(c,h)},listen(B){if(g)throw new Error("A history only accepts one active listener");return c.addEventListener(x1,S),g=B,()=>{c.removeEventListener(x1,S),g=null}},createHref(B){return l(c,B)},createURL:R,encodeLocation(B){let V=R(B);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:E,replace:D,go(B){return h.go(B)}};return $}function Rx(a,l=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Xe(u,"No window.location.(origin|href) available to create URL");let o=typeof a=="string"?a:tr(a);return o=o.replace(/ $/,"%20"),!l&&o.startsWith("//")&&(o=u+o),new URL(o,u)}function ng(a,l,u="/"){return Mx(a,l,u,!1)}function Mx(a,l,u,o){let c=typeof l=="string"?qi(l):l,f=$n(c.pathname||"/",u);if(f==null)return null;let h=ag(a);zx(h);let y=null;for(let g=0;y==null&&g<h.length;++g){let m=Hx(f);y=Bx(h[g],m,o)}return y}function ag(a,l=[],u=[],o="",c=!1){let f=(h,y,g=c,m)=>{let b={relativePath:m===void 0?h.path||"":m,caseSensitive:h.caseSensitive===!0,childrenIndex:y,route:h};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(o)&&g)return;Xe(b.relativePath.startsWith(o),`Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(o.length)}let S=kn([o,b.relativePath]),E=u.concat(b);h.children&&h.children.length>0&&(Xe(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),ag(h.children,l,E,S,g)),!(h.path==null&&!h.index)&&l.push({path:S,score:Lx(S,h.index),routesMeta:E})};return a.forEach((h,y)=>{if(h.path===""||!h.path?.includes("?"))f(h,y);else for(let g of ig(h.path))f(h,y,!0,g)}),l}function ig(a){let l=a.split("/");if(l.length===0)return[];let[u,...o]=l,c=u.endsWith("?"),f=u.replace(/\?$/,"");if(o.length===0)return c?[f,""]:[f];let h=ig(o.join("/")),y=[];return y.push(...h.map(g=>g===""?f:[f,g].join("/"))),c&&y.push(...h),y.map(g=>a.startsWith("/")&&g===""?"/":g)}function zx(a){a.sort((l,u)=>l.score!==u.score?u.score-l.score:$x(l.routesMeta.map(o=>o.childrenIndex),u.routesMeta.map(o=>o.childrenIndex)))}var Ox=/^:[\w-]+$/,Ax=3,_x=2,Nx=1,Dx=10,kx=-2,S1=a=>a==="*";function Lx(a,l){let u=a.split("/"),o=u.length;return u.some(S1)&&(o+=kx),l&&(o+=_x),u.filter(c=>!S1(c)).reduce((c,f)=>c+(Ox.test(f)?Ax:f===""?Nx:Dx),o)}function $x(a,l){return a.length===l.length&&a.slice(0,-1).every((o,c)=>o===l[c])?a[a.length-1]-l[l.length-1]:0}function Bx(a,l,u=!1){let{routesMeta:o}=a,c={},f="/",h=[];for(let y=0;y<o.length;++y){let g=o[y],m=y===o.length-1,b=f==="/"?l:l.slice(f.length)||"/",S=Fo({path:g.relativePath,caseSensitive:g.caseSensitive,end:m},b),E=g.route;if(!S&&m&&u&&!o[o.length-1].route.index&&(S=Fo({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},b)),!S)return null;Object.assign(c,S.params),h.push({params:c,pathname:kn([f,S.pathname]),pathnameBase:Xx(kn([f,S.pathnameBase])),route:E}),S.pathnameBase!=="/"&&(f=kn([f,S.pathnameBase]))}return h}function Fo(a,l){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[u,o]=Ux(a.path,a.caseSensitive,a.end),c=l.match(u);if(!c)return null;let f=c[0],h=f.replace(/(.)\/+$/,"$1"),y=c.slice(1);return{params:o.reduce((m,{paramName:b,isOptional:S},E)=>{if(b==="*"){let R=y[E]||"";h=f.slice(0,f.length-R.length).replace(/(.)\/+$/,"$1")}const D=y[E];return S&&!D?m[b]=void 0:m[b]=(D||"").replace(/%2F/g,"/"),m},{}),pathname:f,pathnameBase:h,pattern:a}}function Ux(a,l=!1,u=!0){dn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let o=[],c="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,y,g)=>(o.push({paramName:y,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(o.push({paramName:"*"}),c+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?c+="\\/*$":a!==""&&a!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,l?void 0:"i"),o]}function Hx(a){try{return a.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return dn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),a}}function $n(a,l){if(l==="/")return a;if(!a.toLowerCase().startsWith(l.toLowerCase()))return null;let u=l.endsWith("/")?l.length-1:l.length,o=a.charAt(u);return o&&o!=="/"?null:a.slice(u)||"/"}function qx(a,l="/"){let{pathname:u,search:o="",hash:c=""}=typeof a=="string"?qi(a):a;return{pathname:u?u.startsWith("/")?u:Yx(u,l):l,search:Vx(o),hash:Kx(c)}}function Yx(a,l){let u=l.replace(/\/+$/,"").split("/");return a.split("/").forEach(c=>{c===".."?u.length>1&&u.pop():c!=="."&&u.push(c)}),u.length>1?u.join("/"):"/"}function qc(a,l,u,o){return`Cannot include a '${a}' character in a manually specified \`to.${l}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Gx(a){return a.filter((l,u)=>u===0||l.route.path&&l.route.path.length>0)}function lg(a){let l=Gx(a);return l.map((u,o)=>o===l.length-1?u.pathname:u.pathnameBase)}function rg(a,l,u,o=!1){let c;typeof a=="string"?c=qi(a):(c={...a},Xe(!c.pathname||!c.pathname.includes("?"),qc("?","pathname","search",c)),Xe(!c.pathname||!c.pathname.includes("#"),qc("#","pathname","hash",c)),Xe(!c.search||!c.search.includes("#"),qc("#","search","hash",c)));let f=a===""||c.pathname==="",h=f?"/":c.pathname,y;if(h==null)y=u;else{let S=l.length-1;if(!o&&h.startsWith("..")){let E=h.split("/");for(;E[0]==="..";)E.shift(),S-=1;c.pathname=E.join("/")}y=S>=0?l[S]:"/"}let g=qx(c,y),m=h&&h!=="/"&&h.endsWith("/"),b=(f||h===".")&&u.endsWith("/");return!g.pathname.endsWith("/")&&(m||b)&&(g.pathname+="/"),g}var kn=a=>a.join("/").replace(/\/\/+/g,"/"),Xx=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Vx=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Kx=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function Qx(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var og=["POST","PUT","PATCH","DELETE"];new Set(og);var Zx=["GET",...og];new Set(Zx);var Yi=x.createContext(null);Yi.displayName="DataRouter";var ru=x.createContext(null);ru.displayName="DataRouterState";x.createContext(!1);var ug=x.createContext({isTransitioning:!1});ug.displayName="ViewTransition";var Jx=x.createContext(new Map);Jx.displayName="Fetchers";var Fx=x.createContext(null);Fx.displayName="Await";var pn=x.createContext(null);pn.displayName="Navigation";var lr=x.createContext(null);lr.displayName="Location";var Bn=x.createContext({outlet:null,matches:[],isDataRoute:!1});Bn.displayName="Route";var kf=x.createContext(null);kf.displayName="RouteError";function Wx(a,{relative:l}={}){Xe(rr(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:o}=x.useContext(pn),{hash:c,pathname:f,search:h}=or(a,{relative:l}),y=f;return u!=="/"&&(y=f==="/"?u:kn([u,f])),o.createHref({pathname:y,search:h,hash:c})}function rr(){return x.useContext(lr)!=null}function Un(){return Xe(rr(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(lr).location}var sg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function cg(a){x.useContext(pn).static||x.useLayoutEffect(a)}function Lf(){let{isDataRoute:a}=x.useContext(Bn);return a?cb():Px()}function Px(){Xe(rr(),"useNavigate() may be used only in the context of a <Router> component.");let a=x.useContext(Yi),{basename:l,navigator:u}=x.useContext(pn),{matches:o}=x.useContext(Bn),{pathname:c}=Un(),f=JSON.stringify(lg(o)),h=x.useRef(!1);return cg(()=>{h.current=!0}),x.useCallback((g,m={})=>{if(dn(h.current,sg),!h.current)return;if(typeof g=="number"){u.go(g);return}let b=rg(g,JSON.parse(f),c,m.relative==="path");a==null&&l!=="/"&&(b.pathname=b.pathname==="/"?l:kn([l,b.pathname])),(m.replace?u.replace:u.push)(b,m.state,m)},[l,u,f,c,a])}x.createContext(null);function or(a,{relative:l}={}){let{matches:u}=x.useContext(Bn),{pathname:o}=Un(),c=JSON.stringify(lg(u));return x.useMemo(()=>rg(a,JSON.parse(c),o,l==="path"),[a,c,o,l])}function Ix(a,l){return fg(a,l)}function fg(a,l,u,o,c){Xe(rr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=x.useContext(pn),{matches:h}=x.useContext(Bn),y=h[h.length-1],g=y?y.params:{},m=y?y.pathname:"/",b=y?y.pathnameBase:"/",S=y&&y.route;{let O=S&&S.path||"";dg(m,!S||O.endsWith("*")||O.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O==="/"?"*":`${O}/*`}">.`)}let E=Un(),D;if(l){let O=typeof l=="string"?qi(l):l;Xe(b==="/"||O.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${O.pathname}" was given in the \`location\` prop.`),D=O}else D=E;let R=D.pathname||"/",$=R;if(b!=="/"){let O=b.replace(/^\//,"").split("/");$="/"+R.replace(/^\//,"").split("/").slice(O.length).join("/")}let B=ng(a,{pathname:$});dn(S||B!=null,`No routes matched location "${D.pathname}${D.search}${D.hash}" `),dn(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=ib(B&&B.map(O=>Object.assign({},O,{params:Object.assign({},g,O.params),pathname:kn([b,f.encodeLocation?f.encodeLocation(O.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?b:kn([b,f.encodeLocation?f.encodeLocation(O.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:O.pathnameBase])})),h,u,o,c);return l&&V?x.createElement(lr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...D},navigationType:"POP"}},V):V}function eb(){let a=sb(),l=Qx(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),u=a instanceof Error?a.stack:null,o="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:o},f={padding:"2px 4px",backgroundColor:o},h=null;return console.error("Error handled by React Router default ErrorBoundary:",a),h=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:f},"ErrorBoundary")," or"," ",x.createElement("code",{style:f},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},l),u?x.createElement("pre",{style:c},u):null,h)}var tb=x.createElement(eb,null),nb=class extends x.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,l){return l.location!==a.location||l.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:l.error,location:l.location,revalidation:a.revalidation||l.revalidation}}componentDidCatch(a,l){this.props.unstable_onError?this.props.unstable_onError(a,l):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?x.createElement(Bn.Provider,{value:this.props.routeContext},x.createElement(kf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ab({routeContext:a,match:l,children:u}){let o=x.useContext(Yi);return o&&o.static&&o.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=l.route.id),x.createElement(Bn.Provider,{value:a},u)}function ib(a,l=[],u=null,o=null,c=null){if(a==null){if(!u)return null;if(u.errors)a=u.matches;else if(l.length===0&&!u.initialized&&u.matches.length>0)a=u.matches;else return null}let f=a,h=u?.errors;if(h!=null){let m=f.findIndex(b=>b.route.id&&h?.[b.route.id]!==void 0);Xe(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),f=f.slice(0,Math.min(f.length,m+1))}let y=!1,g=-1;if(u)for(let m=0;m<f.length;m++){let b=f[m];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(g=m),b.route.id){let{loaderData:S,errors:E}=u,D=b.route.loader&&!S.hasOwnProperty(b.route.id)&&(!E||E[b.route.id]===void 0);if(b.route.lazy||D){y=!0,g>=0?f=f.slice(0,g+1):f=[f[0]];break}}}return f.reduceRight((m,b,S)=>{let E,D=!1,R=null,$=null;u&&(E=h&&b.route.id?h[b.route.id]:void 0,R=b.route.errorElement||tb,y&&(g<0&&S===0?(dg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),D=!0,$=null):g===S&&(D=!0,$=b.route.hydrateFallbackElement||null)));let B=l.concat(f.slice(0,S+1)),V=()=>{let O;return E?O=R:D?O=$:b.route.Component?O=x.createElement(b.route.Component,null):b.route.element?O=b.route.element:O=m,x.createElement(ab,{match:b,routeContext:{outlet:m,matches:B,isDataRoute:u!=null},children:O})};return u&&(b.route.ErrorBoundary||b.route.errorElement||S===0)?x.createElement(nb,{location:u.location,revalidation:u.revalidation,component:R,error:E,children:V(),routeContext:{outlet:null,matches:B,isDataRoute:!0},unstable_onError:o}):V()},null)}function $f(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lb(a){let l=x.useContext(Yi);return Xe(l,$f(a)),l}function rb(a){let l=x.useContext(ru);return Xe(l,$f(a)),l}function ob(a){let l=x.useContext(Bn);return Xe(l,$f(a)),l}function Bf(a){let l=ob(a),u=l.matches[l.matches.length-1];return Xe(u.route.id,`${a} can only be used on routes that contain a unique "id"`),u.route.id}function ub(){return Bf("useRouteId")}function sb(){let a=x.useContext(kf),l=rb("useRouteError"),u=Bf("useRouteError");return a!==void 0?a:l.errors?.[u]}function cb(){let{router:a}=lb("useNavigate"),l=Bf("useNavigate"),u=x.useRef(!1);return cg(()=>{u.current=!0}),x.useCallback(async(c,f={})=>{dn(u.current,sg),u.current&&(typeof c=="number"?a.navigate(c):await a.navigate(c,{fromRouteId:l,...f}))},[a,l])}var w1={};function dg(a,l,u){!l&&!w1[a]&&(w1[a]=!0,dn(!1,u))}x.memo(fb);function fb({routes:a,future:l,state:u,unstable_onError:o}){return fg(a,void 0,u,o,l)}function $a(a){Xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function db({basename:a="/",children:l=null,location:u,navigationType:o="POP",navigator:c,static:f=!1}){Xe(!rr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=a.replace(/^\/*/,"/"),y=x.useMemo(()=>({basename:h,navigator:c,static:f,future:{}}),[h,c,f]);typeof u=="string"&&(u=qi(u));let{pathname:g="/",search:m="",hash:b="",state:S=null,key:E="default"}=u,D=x.useMemo(()=>{let R=$n(g,h);return R==null?null:{location:{pathname:R,search:m,hash:b,state:S,key:E},navigationType:o}},[h,g,m,b,S,E,o]);return dn(D!=null,`<Router basename="${h}"> is not able to match the URL "${g}${m}${b}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:x.createElement(pn.Provider,{value:y},x.createElement(lr.Provider,{children:l,value:D}))}function pb({children:a,location:l}){return Ix(Sf(a),l)}function Sf(a,l=[]){let u=[];return x.Children.forEach(a,(o,c)=>{if(!x.isValidElement(o))return;let f=[...l,c];if(o.type===x.Fragment){u.push.apply(u,Sf(o.props.children,f));return}Xe(o.type===$a,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xe(!o.props.index||!o.props.children,"An index route cannot have child routes.");let h={id:o.props.id||f.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(h.children=Sf(o.props.children,f)),u.push(h)}),u}var Yo="get",Go="application/x-www-form-urlencoded";function ou(a){return a!=null&&typeof a.tagName=="string"}function hb(a){return ou(a)&&a.tagName.toLowerCase()==="button"}function mb(a){return ou(a)&&a.tagName.toLowerCase()==="form"}function gb(a){return ou(a)&&a.tagName.toLowerCase()==="input"}function vb(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function yb(a,l){return a.button===0&&(!l||l==="_self")&&!vb(a)}var Ro=null;function xb(){if(Ro===null)try{new FormData(document.createElement("form"),0),Ro=!1}catch{Ro=!0}return Ro}var bb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Yc(a){return a!=null&&!bb.has(a)?(dn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Go}"`),null):a}function Sb(a,l){let u,o,c,f,h;if(mb(a)){let y=a.getAttribute("action");o=y?$n(y,l):null,u=a.getAttribute("method")||Yo,c=Yc(a.getAttribute("enctype"))||Go,f=new FormData(a)}else if(hb(a)||gb(a)&&(a.type==="submit"||a.type==="image")){let y=a.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=a.getAttribute("formaction")||y.getAttribute("action");if(o=g?$n(g,l):null,u=a.getAttribute("formmethod")||y.getAttribute("method")||Yo,c=Yc(a.getAttribute("formenctype"))||Yc(y.getAttribute("enctype"))||Go,f=new FormData(y,a),!xb()){let{name:m,type:b,value:S}=a;if(b==="image"){let E=m?`${m}.`:"";f.append(`${E}x`,"0"),f.append(`${E}y`,"0")}else m&&f.append(m,S)}}else{if(ou(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Yo,o=null,c=Go,h=a}return f&&c==="text/plain"&&(h=f,f=void 0),{action:o,method:u.toLowerCase(),encType:c,formData:f,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Uf(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function wb(a,l,u){let o=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return o.pathname==="/"?o.pathname=`_root.${u}`:l&&$n(o.pathname,l)==="/"?o.pathname=`${l.replace(/\/$/,"")}/_root.${u}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${u}`,o}async function Eb(a,l){if(a.id in l)return l[a.id];try{let u=await import(a.module);return l[a.id]=u,u}catch(u){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Cb(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function jb(a,l,u){let o=await Promise.all(a.map(async c=>{let f=l.routes[c.route.id];if(f){let h=await Eb(f,u);return h.links?h.links():[]}return[]}));return zb(o.flat(1).filter(Cb).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function E1(a,l,u,o,c,f){let h=(g,m)=>u[m]?g.route.id!==u[m].route.id:!0,y=(g,m)=>u[m].pathname!==g.pathname||u[m].route.path?.endsWith("*")&&u[m].params["*"]!==g.params["*"];return f==="assets"?l.filter((g,m)=>h(g,m)||y(g,m)):f==="data"?l.filter((g,m)=>{let b=o.routes[g.route.id];if(!b||!b.hasLoader)return!1;if(h(g,m)||y(g,m))return!0;if(g.route.shouldRevalidate){let S=g.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function Tb(a,l,{includeHydrateFallback:u}={}){return Rb(a.map(o=>{let c=l.routes[o.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),u&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function Rb(a){return[...new Set(a)]}function Mb(a){let l={},u=Object.keys(a).sort();for(let o of u)l[o]=a[o];return l}function zb(a,l){let u=new Set;return new Set(l),a.reduce((o,c)=>{let f=JSON.stringify(Mb(c));return u.has(f)||(u.add(f),o.push({key:f,link:c})),o},[])}function pg(){let a=x.useContext(Yi);return Uf(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function Ob(){let a=x.useContext(ru);return Uf(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Hf=x.createContext(void 0);Hf.displayName="FrameworkContext";function hg(){let a=x.useContext(Hf);return Uf(a,"You must render this element inside a <HydratedRouter> element"),a}function Ab(a,l){let u=x.useContext(Hf),[o,c]=x.useState(!1),[f,h]=x.useState(!1),{onFocus:y,onBlur:g,onMouseEnter:m,onMouseLeave:b,onTouchStart:S}=l,E=x.useRef(null);x.useEffect(()=>{if(a==="render"&&h(!0),a==="viewport"){let $=V=>{V.forEach(O=>{h(O.isIntersecting)})},B=new IntersectionObserver($,{threshold:.5});return E.current&&B.observe(E.current),()=>{B.disconnect()}}},[a]),x.useEffect(()=>{if(o){let $=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout($)}}},[o]);let D=()=>{c(!0)},R=()=>{c(!1),h(!1)};return u?a!=="intent"?[f,E,{}]:[f,E,{onFocus:Yl(y,D),onBlur:Yl(g,R),onMouseEnter:Yl(m,D),onMouseLeave:Yl(b,R),onTouchStart:Yl(S,D)}]:[!1,E,{}]}function Yl(a,l){return u=>{a&&a(u),u.defaultPrevented||l(u)}}function _b({page:a,...l}){let{router:u}=pg(),o=x.useMemo(()=>ng(u.routes,a,u.basename),[u.routes,a,u.basename]);return o?x.createElement(Db,{page:a,matches:o,...l}):null}function Nb(a){let{manifest:l,routeModules:u}=hg(),[o,c]=x.useState([]);return x.useEffect(()=>{let f=!1;return jb(a,l,u).then(h=>{f||c(h)}),()=>{f=!0}},[a,l,u]),o}function Db({page:a,matches:l,...u}){let o=Un(),{manifest:c,routeModules:f}=hg(),{basename:h}=pg(),{loaderData:y,matches:g}=Ob(),m=x.useMemo(()=>E1(a,l,g,c,o,"data"),[a,l,g,c,o]),b=x.useMemo(()=>E1(a,l,g,c,o,"assets"),[a,l,g,c,o]),S=x.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let R=new Set,$=!1;if(l.forEach(V=>{let O=c.routes[V.route.id];!O||!O.hasLoader||(!m.some(A=>A.route.id===V.route.id)&&V.route.id in y&&f[V.route.id]?.shouldRevalidate||O.hasClientLoader?$=!0:R.add(V.route.id))}),R.size===0)return[];let B=wb(a,h,"data");return $&&R.size>0&&B.searchParams.set("_routes",l.filter(V=>R.has(V.route.id)).map(V=>V.route.id).join(",")),[B.pathname+B.search]},[h,y,o,c,m,l,a,f]),E=x.useMemo(()=>Tb(b,c),[b,c]),D=Nb(b);return x.createElement(x.Fragment,null,S.map(R=>x.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...u})),E.map(R=>x.createElement("link",{key:R,rel:"modulepreload",href:R,...u})),D.map(({key:R,link:$})=>x.createElement("link",{key:R,nonce:u.nonce,...$})))}function kb(...a){return l=>{a.forEach(u=>{typeof u=="function"?u(l):u!=null&&(u.current=l)})}}var mg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{mg&&(window.__reactRouterVersion="7.9.4")}catch{}function Lb({basename:a,children:l,window:u}){let o=x.useRef();o.current==null&&(o.current=Cx({window:u,v5Compat:!0}));let c=o.current,[f,h]=x.useState({action:c.action,location:c.location}),y=x.useCallback(g=>{x.startTransition(()=>h(g))},[h]);return x.useLayoutEffect(()=>c.listen(y),[c,y]),x.createElement(db,{basename:a,children:l,location:f.location,navigationType:f.action,navigator:c})}var gg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gi=x.forwardRef(function({onClick:l,discover:u="render",prefetch:o="none",relative:c,reloadDocument:f,replace:h,state:y,target:g,to:m,preventScrollReset:b,viewTransition:S,...E},D){let{basename:R}=x.useContext(pn),$=typeof m=="string"&&gg.test(m),B,V=!1;if(typeof m=="string"&&$&&(B=m,mg))try{let Z=new URL(window.location.href),oe=m.startsWith("//")?new URL(Z.protocol+m):new URL(m),F=$n(oe.pathname,R);oe.origin===Z.origin&&F!=null?m=F+oe.search+oe.hash:V=!0}catch{dn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let O=Wx(m,{relative:c}),[A,U,N]=Ab(o,E),M=Hb(m,{replace:h,state:y,target:g,preventScrollReset:b,relative:c,viewTransition:S});function J(Z){l&&l(Z),Z.defaultPrevented||M(Z)}let X=x.createElement("a",{...E,...N,href:B||O,onClick:V||f?l:J,ref:kb(D,U),target:g,"data-discover":!$&&u==="render"?"true":void 0});return A&&!$?x.createElement(x.Fragment,null,X,x.createElement(_b,{page:O})):X});Gi.displayName="Link";var $b=x.forwardRef(function({"aria-current":l="page",caseSensitive:u=!1,className:o="",end:c=!1,style:f,to:h,viewTransition:y,children:g,...m},b){let S=or(h,{relative:m.relative}),E=Un(),D=x.useContext(ru),{navigator:R,basename:$}=x.useContext(pn),B=D!=null&&Vb(S)&&y===!0,V=R.encodeLocation?R.encodeLocation(S).pathname:S.pathname,O=E.pathname,A=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;u||(O=O.toLowerCase(),A=A?A.toLowerCase():null,V=V.toLowerCase()),A&&$&&(A=$n(A,$)||A);const U=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let N=O===V||!c&&O.startsWith(V)&&O.charAt(U)==="/",M=A!=null&&(A===V||!c&&A.startsWith(V)&&A.charAt(V.length)==="/"),J={isActive:N,isPending:M,isTransitioning:B},X=N?l:void 0,Z;typeof o=="function"?Z=o(J):Z=[o,N?"active":null,M?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let oe=typeof f=="function"?f(J):f;return x.createElement(Gi,{...m,"aria-current":X,className:Z,ref:b,style:oe,to:h,viewTransition:y},typeof g=="function"?g(J):g)});$b.displayName="NavLink";var Bb=x.forwardRef(({discover:a="render",fetcherKey:l,navigate:u,reloadDocument:o,replace:c,state:f,method:h=Yo,action:y,onSubmit:g,relative:m,preventScrollReset:b,viewTransition:S,...E},D)=>{let R=Gb(),$=Xb(y,{relative:m}),B=h.toLowerCase()==="get"?"get":"post",V=typeof y=="string"&&gg.test(y),O=A=>{if(g&&g(A),A.defaultPrevented)return;A.preventDefault();let U=A.nativeEvent.submitter,N=U?.getAttribute("formmethod")||h;R(U||A.currentTarget,{fetcherKey:l,method:N,navigate:u,replace:c,state:f,relative:m,preventScrollReset:b,viewTransition:S})};return x.createElement("form",{ref:D,method:B,action:$,onSubmit:o?g:O,...E,"data-discover":!V&&a==="render"?"true":void 0})});Bb.displayName="Form";function Ub(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vg(a){let l=x.useContext(Yi);return Xe(l,Ub(a)),l}function Hb(a,{target:l,replace:u,state:o,preventScrollReset:c,relative:f,viewTransition:h}={}){let y=Lf(),g=Un(),m=or(a,{relative:f});return x.useCallback(b=>{if(yb(b,l)){b.preventDefault();let S=u!==void 0?u:tr(g)===tr(m);y(a,{replace:S,state:o,preventScrollReset:c,relative:f,viewTransition:h})}},[g,y,m,u,o,l,a,c,f,h])}var qb=0,Yb=()=>`__${String(++qb)}__`;function Gb(){let{router:a}=vg("useSubmit"),{basename:l}=x.useContext(pn),u=ub();return x.useCallback(async(o,c={})=>{let{action:f,method:h,encType:y,formData:g,body:m}=Sb(o,l);if(c.navigate===!1){let b=c.fetcherKey||Yb();await a.fetch(b,u,c.action||f,{preventScrollReset:c.preventScrollReset,formData:g,body:m,formMethod:c.method||h,formEncType:c.encType||y,flushSync:c.flushSync})}else await a.navigate(c.action||f,{preventScrollReset:c.preventScrollReset,formData:g,body:m,formMethod:c.method||h,formEncType:c.encType||y,replace:c.replace,state:c.state,fromRouteId:u,flushSync:c.flushSync,viewTransition:c.viewTransition})},[a,l,u])}function Xb(a,{relative:l}={}){let{basename:u}=x.useContext(pn),o=x.useContext(Bn);Xe(o,"useFormAction must be used inside a RouteContext");let[c]=o.matches.slice(-1),f={...or(a||".",{relative:l})},h=Un();if(a==null){f.search=h.search;let y=new URLSearchParams(f.search),g=y.getAll("index");if(g.some(b=>b==="")){y.delete("index"),g.filter(S=>S).forEach(S=>y.append("index",S));let b=y.toString();f.search=b?`?${b}`:""}}return(!a||a===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(f.pathname=f.pathname==="/"?u:kn([u,f.pathname])),tr(f)}function Vb(a,{relative:l}={}){let u=x.useContext(ug);Xe(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=vg("useViewTransitionState"),c=or(a,{relative:l});if(!u.isTransitioning)return!1;let f=$n(u.currentLocation.pathname,o)||u.currentLocation.pathname,h=$n(u.nextLocation.pathname,o)||u.nextLocation.pathname;return Fo(c.pathname,h)!=null||Fo(c.pathname,f)!=null}var Kb=tg();const _i=ir(Kb);var pt=function(){return pt=Object.assign||function(l){for(var u,o=1,c=arguments.length;o<c;o++){u=arguments[o];for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&(l[f]=u[f])}return l},pt.apply(this,arguments)};function ki(a,l,u){if(u||arguments.length===2)for(var o=0,c=l.length,f;o<c;o++)(f||!(o in l))&&(f||(f=Array.prototype.slice.call(l,0,o)),f[o]=l[o]);return a.concat(f||Array.prototype.slice.call(l))}var qe="-ms-",Il="-moz-",Oe="-webkit-",yg="comm",uu="rule",qf="decl",Qb="@import",xg="@keyframes",Zb="@layer",bg=Math.abs,Yf=String.fromCharCode,wf=Object.assign;function Jb(a,l){return at(a,0)^45?(((l<<2^at(a,0))<<2^at(a,1))<<2^at(a,2))<<2^at(a,3):0}function Sg(a){return a.trim()}function _n(a,l){return(a=l.exec(a))?a[0]:a}function ye(a,l,u){return a.replace(l,u)}function Xo(a,l,u){return a.indexOf(l,u)}function at(a,l){return a.charCodeAt(l)|0}function Li(a,l,u){return a.slice(l,u)}function fn(a){return a.length}function wg(a){return a.length}function Wl(a,l){return l.push(a),a}function Fb(a,l){return a.map(l).join("")}function C1(a,l){return a.filter(function(u){return!_n(u,l)})}var su=1,$i=1,Eg=0,Jt=0,Ie=0,Xi="";function cu(a,l,u,o,c,f,h,y){return{value:a,root:l,parent:u,type:o,props:c,children:f,line:su,column:$i,length:h,return:"",siblings:y}}function ha(a,l){return wf(cu("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},l)}function Ri(a){for(;a.root;)a=ha(a.root,{children:[a]});Wl(a,a.siblings)}function Wb(){return Ie}function Pb(){return Ie=Jt>0?at(Xi,--Jt):0,$i--,Ie===10&&($i=1,su--),Ie}function an(){return Ie=Jt<Eg?at(Xi,Jt++):0,$i++,Ie===10&&($i=1,su++),Ie}function Ha(){return at(Xi,Jt)}function Vo(){return Jt}function fu(a,l){return Li(Xi,a,l)}function Ef(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ib(a){return su=$i=1,Eg=fn(Xi=a),Jt=0,[]}function e5(a){return Xi="",a}function Gc(a){return Sg(fu(Jt-1,Cf(a===91?a+2:a===40?a+1:a)))}function t5(a){for(;(Ie=Ha())&&Ie<33;)an();return Ef(a)>2||Ef(Ie)>3?"":" "}function n5(a,l){for(;--l&&an()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return fu(a,Vo()+(l<6&&Ha()==32&&an()==32))}function Cf(a){for(;an();)switch(Ie){case a:return Jt;case 34:case 39:a!==34&&a!==39&&Cf(Ie);break;case 40:a===41&&Cf(a);break;case 92:an();break}return Jt}function a5(a,l){for(;an()&&a+Ie!==57;)if(a+Ie===84&&Ha()===47)break;return"/*"+fu(l,Jt-1)+"*"+Yf(a===47?a:an())}function i5(a){for(;!Ef(Ha());)an();return fu(a,Jt)}function l5(a){return e5(Ko("",null,null,null,[""],a=Ib(a),0,[0],a))}function Ko(a,l,u,o,c,f,h,y,g){for(var m=0,b=0,S=h,E=0,D=0,R=0,$=1,B=1,V=1,O=0,A="",U=c,N=f,M=o,J=A;B;)switch(R=O,O=an()){case 40:if(R!=108&&at(J,S-1)==58){Xo(J+=ye(Gc(O),"&","&\f"),"&\f",bg(m?y[m-1]:0))!=-1&&(V=-1);break}case 34:case 39:case 91:J+=Gc(O);break;case 9:case 10:case 13:case 32:J+=t5(R);break;case 92:J+=n5(Vo()-1,7);continue;case 47:switch(Ha()){case 42:case 47:Wl(r5(a5(an(),Vo()),l,u,g),g);break;default:J+="/"}break;case 123*$:y[m++]=fn(J)*V;case 125*$:case 59:case 0:switch(O){case 0:case 125:B=0;case 59+b:V==-1&&(J=ye(J,/\f/g,"")),D>0&&fn(J)-S&&Wl(D>32?T1(J+";",o,u,S-1,g):T1(ye(J," ","")+";",o,u,S-2,g),g);break;case 59:J+=";";default:if(Wl(M=j1(J,l,u,m,b,c,y,A,U=[],N=[],S,f),f),O===123)if(b===0)Ko(J,l,M,M,U,f,S,y,N);else switch(E===99&&at(J,3)===110?100:E){case 100:case 108:case 109:case 115:Ko(a,M,M,o&&Wl(j1(a,M,M,0,0,c,y,A,c,U=[],S,N),N),c,N,S,y,o?U:N);break;default:Ko(J,M,M,M,[""],N,0,y,N)}}m=b=D=0,$=V=1,A=J="",S=h;break;case 58:S=1+fn(J),D=R;default:if($<1){if(O==123)--$;else if(O==125&&$++==0&&Pb()==125)continue}switch(J+=Yf(O),O*$){case 38:V=b>0?1:(J+="\f",-1);break;case 44:y[m++]=(fn(J)-1)*V,V=1;break;case 64:Ha()===45&&(J+=Gc(an())),E=Ha(),b=S=fn(A=J+=i5(Vo())),O++;break;case 45:R===45&&fn(J)==2&&($=0)}}return f}function j1(a,l,u,o,c,f,h,y,g,m,b,S){for(var E=c-1,D=c===0?f:[""],R=wg(D),$=0,B=0,V=0;$<o;++$)for(var O=0,A=Li(a,E+1,E=bg(B=h[$])),U=a;O<R;++O)(U=Sg(B>0?D[O]+" "+A:ye(A,/&\f/g,D[O])))&&(g[V++]=U);return cu(a,l,u,c===0?uu:y,g,m,b,S)}function r5(a,l,u,o){return cu(a,l,u,yg,Yf(Wb()),Li(a,2,-2),0,o)}function T1(a,l,u,o,c){return cu(a,l,u,qf,Li(a,0,o),Li(a,o+1,-1),o,c)}function Cg(a,l,u){switch(Jb(a,l)){case 5103:return Oe+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Oe+a+a;case 4789:return Il+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Oe+a+Il+a+qe+a+a;case 5936:switch(at(a,l+11)){case 114:return Oe+a+qe+ye(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Oe+a+qe+ye(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Oe+a+qe+ye(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Oe+a+qe+a+a;case 6165:return Oe+a+qe+"flex-"+a+a;case 5187:return Oe+a+ye(a,/(\w+).+(:[^]+)/,Oe+"box-$1$2"+qe+"flex-$1$2")+a;case 5443:return Oe+a+qe+"flex-item-"+ye(a,/flex-|-self/g,"")+(_n(a,/flex-|baseline/)?"":qe+"grid-row-"+ye(a,/flex-|-self/g,""))+a;case 4675:return Oe+a+qe+"flex-line-pack"+ye(a,/align-content|flex-|-self/g,"")+a;case 5548:return Oe+a+qe+ye(a,"shrink","negative")+a;case 5292:return Oe+a+qe+ye(a,"basis","preferred-size")+a;case 6060:return Oe+"box-"+ye(a,"-grow","")+Oe+a+qe+ye(a,"grow","positive")+a;case 4554:return Oe+ye(a,/([^-])(transform)/g,"$1"+Oe+"$2")+a;case 6187:return ye(ye(ye(a,/(zoom-|grab)/,Oe+"$1"),/(image-set)/,Oe+"$1"),a,"")+a;case 5495:case 3959:return ye(a,/(image-set\([^]*)/,Oe+"$1$`$1");case 4968:return ye(ye(a,/(.+:)(flex-)?(.*)/,Oe+"box-pack:$3"+qe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Oe+a+a;case 4200:if(!_n(a,/flex-|baseline/))return qe+"grid-column-align"+Li(a,l)+a;break;case 2592:case 3360:return qe+ye(a,"template-","")+a;case 4384:case 3616:return u&&u.some(function(o,c){return l=c,_n(o.props,/grid-\w+-end/)})?~Xo(a+(u=u[l].value),"span",0)?a:qe+ye(a,"-start","")+a+qe+"grid-row-span:"+(~Xo(u,"span",0)?_n(u,/\d+/):+_n(u,/\d+/)-+_n(a,/\d+/))+";":qe+ye(a,"-start","")+a;case 4896:case 4128:return u&&u.some(function(o){return _n(o.props,/grid-\w+-start/)})?a:qe+ye(ye(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return ye(a,/(.+)-inline(.+)/,Oe+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(fn(a)-1-l>6)switch(at(a,l+1)){case 109:if(at(a,l+4)!==45)break;case 102:return ye(a,/(.+:)(.+)-([^]+)/,"$1"+Oe+"$2-$3$1"+Il+(at(a,l+3)==108?"$3":"$2-$3"))+a;case 115:return~Xo(a,"stretch",0)?Cg(ye(a,"stretch","fill-available"),l,u)+a:a}break;case 5152:case 5920:return ye(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,c,f,h,y,g,m){return qe+c+":"+f+m+(h?qe+c+"-span:"+(y?g:+g-+f)+m:"")+a});case 4949:if(at(a,l+6)===121)return ye(a,":",":"+Oe)+a;break;case 6444:switch(at(a,at(a,14)===45?18:11)){case 120:return ye(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Oe+(at(a,14)===45?"inline-":"")+"box$3$1"+Oe+"$2$3$1"+qe+"$2box$3")+a;case 100:return ye(a,":",":"+qe)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ye(a,"scroll-","scroll-snap-")+a}return a}function Wo(a,l){for(var u="",o=0;o<a.length;o++)u+=l(a[o],o,a,l)||"";return u}function o5(a,l,u,o){switch(a.type){case Zb:if(a.children.length)break;case Qb:case qf:return a.return=a.return||a.value;case yg:return"";case xg:return a.return=a.value+"{"+Wo(a.children,o)+"}";case uu:if(!fn(a.value=a.props.join(",")))return""}return fn(u=Wo(a.children,o))?a.return=a.value+"{"+u+"}":""}function u5(a){var l=wg(a);return function(u,o,c,f){for(var h="",y=0;y<l;y++)h+=a[y](u,o,c,f)||"";return h}}function s5(a){return function(l){l.root||(l=l.return)&&a(l)}}function c5(a,l,u,o){if(a.length>-1&&!a.return)switch(a.type){case qf:a.return=Cg(a.value,a.length,u);return;case xg:return Wo([ha(a,{value:ye(a.value,"@","@"+Oe)})],o);case uu:if(a.length)return Fb(u=a.props,function(c){switch(_n(c,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ri(ha(a,{props:[ye(c,/:(read-\w+)/,":"+Il+"$1")]})),Ri(ha(a,{props:[c]})),wf(a,{props:C1(u,o)});break;case"::placeholder":Ri(ha(a,{props:[ye(c,/:(plac\w+)/,":"+Oe+"input-$1")]})),Ri(ha(a,{props:[ye(c,/:(plac\w+)/,":"+Il+"$1")]})),Ri(ha(a,{props:[ye(c,/:(plac\w+)/,qe+"input-$1")]})),Ri(ha(a,{props:[c]})),wf(a,{props:C1(u,o)});break}return""})}}var f5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$t={},Bi=typeof process<"u"&&$t!==void 0&&($t.REACT_APP_SC_ATTR||$t.SC_ATTR)||"data-styled",jg="active",Tg="data-styled-version",du="6.1.19",Gf=`/*!sc*/
`,Po=typeof window<"u"&&typeof document<"u",d5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&$t!==void 0&&$t.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&$t.REACT_APP_SC_DISABLE_SPEEDY!==""?$t.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&$t.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&$t!==void 0&&$t.SC_DISABLE_SPEEDY!==void 0&&$t.SC_DISABLE_SPEEDY!==""&&$t.SC_DISABLE_SPEEDY!=="false"&&$t.SC_DISABLE_SPEEDY),p5={},pu=Object.freeze([]),Ui=Object.freeze({});function Rg(a,l,u){return u===void 0&&(u=Ui),a.theme!==u.theme&&a.theme||l||u.theme}var Mg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),h5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,m5=/(^-|-$)/g;function R1(a){return a.replace(h5,"-").replace(m5,"")}var g5=/(a)(d)/gi,Mo=52,M1=function(a){return String.fromCharCode(a+(a>25?39:97))};function jf(a){var l,u="";for(l=Math.abs(a);l>Mo;l=l/Mo|0)u=M1(l%Mo)+u;return(M1(l%Mo)+u).replace(g5,"$1-$2")}var Xc,zg=5381,Ni=function(a,l){for(var u=l.length;u;)a=33*a^l.charCodeAt(--u);return a},Og=function(a){return Ni(zg,a)};function Xf(a){return jf(Og(a)>>>0)}function v5(a){return a.displayName||a.name||"Component"}function Vc(a){return typeof a=="string"&&!0}var Ag=typeof Symbol=="function"&&Symbol.for,_g=Ag?Symbol.for("react.memo"):60115,y5=Ag?Symbol.for("react.forward_ref"):60112,x5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},b5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ng={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},S5=((Xc={})[y5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xc[_g]=Ng,Xc);function z1(a){return("type"in(l=a)&&l.type.$$typeof)===_g?Ng:"$$typeof"in a?S5[a.$$typeof]:x5;var l}var w5=Object.defineProperty,E5=Object.getOwnPropertyNames,O1=Object.getOwnPropertySymbols,C5=Object.getOwnPropertyDescriptor,j5=Object.getPrototypeOf,A1=Object.prototype;function Dg(a,l,u){if(typeof l!="string"){if(A1){var o=j5(l);o&&o!==A1&&Dg(a,o,u)}var c=E5(l);O1&&(c=c.concat(O1(l)));for(var f=z1(a),h=z1(l),y=0;y<c.length;++y){var g=c[y];if(!(g in b5||u&&u[g]||h&&g in h||f&&g in f)){var m=C5(l,g);try{w5(a,g,m)}catch{}}}}return a}function Hi(a){return typeof a=="function"}function Vf(a){return typeof a=="object"&&"styledComponentId"in a}function Ua(a,l){return a&&l?"".concat(a," ").concat(l):a||l||""}function Io(a,l){if(a.length===0)return"";for(var u=a[0],o=1;o<a.length;o++)u+=a[o];return u}function nr(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function Tf(a,l,u){if(u===void 0&&(u=!1),!u&&!nr(a)&&!Array.isArray(a))return l;if(Array.isArray(l))for(var o=0;o<l.length;o++)a[o]=Tf(a[o],l[o]);else if(nr(l))for(var o in l)a[o]=Tf(a[o],l[o]);return a}function Kf(a,l){Object.defineProperty(a,"toString",{value:l})}function ur(a){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(l.length>0?" Args: ".concat(l.join(", ")):""))}var T5=(function(){function a(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l}return a.prototype.indexOfGroup=function(l){for(var u=0,o=0;o<l;o++)u+=this.groupSizes[o];return u},a.prototype.insertRules=function(l,u){if(l>=this.groupSizes.length){for(var o=this.groupSizes,c=o.length,f=c;l>=f;)if((f<<=1)<0)throw ur(16,"".concat(l));this.groupSizes=new Uint32Array(f),this.groupSizes.set(o),this.length=f;for(var h=c;h<f;h++)this.groupSizes[h]=0}for(var y=this.indexOfGroup(l+1),g=(h=0,u.length);h<g;h++)this.tag.insertRule(y,u[h])&&(this.groupSizes[l]++,y++)},a.prototype.clearGroup=function(l){if(l<this.length){var u=this.groupSizes[l],o=this.indexOfGroup(l),c=o+u;this.groupSizes[l]=0;for(var f=o;f<c;f++)this.tag.deleteRule(o)}},a.prototype.getGroup=function(l){var u="";if(l>=this.length||this.groupSizes[l]===0)return u;for(var o=this.groupSizes[l],c=this.indexOfGroup(l),f=c+o,h=c;h<f;h++)u+="".concat(this.tag.getRule(h)).concat(Gf);return u},a})(),Qo=new Map,eu=new Map,Zo=1,zo=function(a){if(Qo.has(a))return Qo.get(a);for(;eu.has(Zo);)Zo++;var l=Zo++;return Qo.set(a,l),eu.set(l,a),l},R5=function(a,l){Zo=l+1,Qo.set(a,l),eu.set(l,a)},M5="style[".concat(Bi,"][").concat(Tg,'="').concat(du,'"]'),z5=new RegExp("^".concat(Bi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),O5=function(a,l,u){for(var o,c=u.split(","),f=0,h=c.length;f<h;f++)(o=c[f])&&a.registerName(l,o)},A5=function(a,l){for(var u,o=((u=l.textContent)!==null&&u!==void 0?u:"").split(Gf),c=[],f=0,h=o.length;f<h;f++){var y=o[f].trim();if(y){var g=y.match(z5);if(g){var m=0|parseInt(g[1],10),b=g[2];m!==0&&(R5(b,m),O5(a,b,g[3]),a.getTag().insertRules(m,c)),c.length=0}else c.push(y)}}},_1=function(a){for(var l=document.querySelectorAll(M5),u=0,o=l.length;u<o;u++){var c=l[u];c&&c.getAttribute(Bi)!==jg&&(A5(a,c),c.parentNode&&c.parentNode.removeChild(c))}};function _5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var kg=function(a){var l=document.head,u=a||l,o=document.createElement("style"),c=(function(y){var g=Array.from(y.querySelectorAll("style[".concat(Bi,"]")));return g[g.length-1]})(u),f=c!==void 0?c.nextSibling:null;o.setAttribute(Bi,jg),o.setAttribute(Tg,du);var h=_5();return h&&o.setAttribute("nonce",h),u.insertBefore(o,f),o},N5=(function(){function a(l){this.element=kg(l),this.element.appendChild(document.createTextNode("")),this.sheet=(function(u){if(u.sheet)return u.sheet;for(var o=document.styleSheets,c=0,f=o.length;c<f;c++){var h=o[c];if(h.ownerNode===u)return h}throw ur(17)})(this.element),this.length=0}return a.prototype.insertRule=function(l,u){try{return this.sheet.insertRule(u,l),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},a.prototype.getRule=function(l){var u=this.sheet.cssRules[l];return u&&u.cssText?u.cssText:""},a})(),D5=(function(){function a(l){this.element=kg(l),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(l,u){if(l<=this.length&&l>=0){var o=document.createTextNode(u);return this.element.insertBefore(o,this.nodes[l]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},a.prototype.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},a})(),k5=(function(){function a(l){this.rules=[],this.length=0}return a.prototype.insertRule=function(l,u){return l<=this.length&&(this.rules.splice(l,0,u),this.length++,!0)},a.prototype.deleteRule=function(l){this.rules.splice(l,1),this.length--},a.prototype.getRule=function(l){return l<this.length?this.rules[l]:""},a})(),N1=Po,L5={isServer:!Po,useCSSOMInjection:!d5},tu=(function(){function a(l,u,o){l===void 0&&(l=Ui),u===void 0&&(u={});var c=this;this.options=pt(pt({},L5),l),this.gs=u,this.names=new Map(o),this.server=!!l.isServer,!this.server&&Po&&N1&&(N1=!1,_1(this)),Kf(this,function(){return(function(f){for(var h=f.getTag(),y=h.length,g="",m=function(S){var E=(function(V){return eu.get(V)})(S);if(E===void 0)return"continue";var D=f.names.get(E),R=h.getGroup(S);if(D===void 0||!D.size||R.length===0)return"continue";var $="".concat(Bi,".g").concat(S,'[id="').concat(E,'"]'),B="";D!==void 0&&D.forEach(function(V){V.length>0&&(B+="".concat(V,","))}),g+="".concat(R).concat($,'{content:"').concat(B,'"}').concat(Gf)},b=0;b<y;b++)m(b);return g})(c)})}return a.registerId=function(l){return zo(l)},a.prototype.rehydrate=function(){!this.server&&Po&&_1(this)},a.prototype.reconstructWithOptions=function(l,u){return u===void 0&&(u=!0),new a(pt(pt({},this.options),l),this.gs,u&&this.names||void 0)},a.prototype.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(l=(function(u){var o=u.useCSSOMInjection,c=u.target;return u.isServer?new k5(c):o?new N5(c):new D5(c)})(this.options),new T5(l)));var l},a.prototype.hasNameForId=function(l,u){return this.names.has(l)&&this.names.get(l).has(u)},a.prototype.registerName=function(l,u){if(zo(l),this.names.has(l))this.names.get(l).add(u);else{var o=new Set;o.add(u),this.names.set(l,o)}},a.prototype.insertRules=function(l,u,o){this.registerName(l,u),this.getTag().insertRules(zo(l),o)},a.prototype.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},a.prototype.clearRules=function(l){this.getTag().clearGroup(zo(l)),this.clearNames(l)},a.prototype.clearTag=function(){this.tag=void 0},a})(),$5=/&/g,B5=/^\s*\/\/.*$/gm;function Lg(a,l){return a.map(function(u){return u.type==="rule"&&(u.value="".concat(l," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(l," ")),u.props=u.props.map(function(o){return"".concat(l," ").concat(o)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=Lg(u.children,l)),u})}function U5(a){var l,u,o,c=Ui,f=c.options,h=f===void 0?Ui:f,y=c.plugins,g=y===void 0?pu:y,m=function(E,D,R){return R.startsWith(u)&&R.endsWith(u)&&R.replaceAll(u,"").length>0?".".concat(l):E},b=g.slice();b.push(function(E){E.type===uu&&E.value.includes("&")&&(E.props[0]=E.props[0].replace($5,u).replace(o,m))}),h.prefix&&b.push(c5),b.push(o5);var S=function(E,D,R,$){D===void 0&&(D=""),R===void 0&&(R=""),$===void 0&&($="&"),l=$,u=D,o=new RegExp("\\".concat(u,"\\b"),"g");var B=E.replace(B5,""),V=l5(R||D?"".concat(R," ").concat(D," { ").concat(B," }"):B);h.namespace&&(V=Lg(V,h.namespace));var O=[];return Wo(V,u5(b.concat(s5(function(A){return O.push(A)})))),O};return S.hash=g.length?g.reduce(function(E,D){return D.name||ur(15),Ni(E,D.name)},zg).toString():"",S}var H5=new tu,Rf=U5(),$g=Ye.createContext({shouldForwardProp:void 0,styleSheet:H5,stylis:Rf});$g.Consumer;Ye.createContext(void 0);function Mf(){return x.useContext($g)}var Bg=(function(){function a(l,u){var o=this;this.inject=function(c,f){f===void 0&&(f=Rf);var h=o.name+f.hash;c.hasNameForId(o.id,h)||c.insertRules(o.id,h,f(o.rules,h,"@keyframes"))},this.name=l,this.id="sc-keyframes-".concat(l),this.rules=u,Kf(this,function(){throw ur(12,String(o.name))})}return a.prototype.getName=function(l){return l===void 0&&(l=Rf),this.name+l.hash},a})(),q5=function(a){return a>="A"&&a<="Z"};function D1(a){for(var l="",u=0;u<a.length;u++){var o=a[u];if(u===1&&o==="-"&&a[0]==="-")return a;q5(o)?l+="-"+o.toLowerCase():l+=o}return l.startsWith("ms-")?"-"+l:l}var Ug=function(a){return a==null||a===!1||a===""},Hg=function(a){var l,u,o=[];for(var c in a){var f=a[c];a.hasOwnProperty(c)&&!Ug(f)&&(Array.isArray(f)&&f.isCss||Hi(f)?o.push("".concat(D1(c),":"),f,";"):nr(f)?o.push.apply(o,ki(ki(["".concat(c," {")],Hg(f),!1),["}"],!1)):o.push("".concat(D1(c),": ").concat((l=c,(u=f)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||l in f5||l.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return o};function ga(a,l,u,o){if(Ug(a))return[];if(Vf(a))return[".".concat(a.styledComponentId)];if(Hi(a)){if(!Hi(f=a)||f.prototype&&f.prototype.isReactComponent||!l)return[a];var c=a(l);return ga(c,l,u,o)}var f;return a instanceof Bg?u?(a.inject(u,o),[a.getName(o)]):[a]:nr(a)?Hg(a):Array.isArray(a)?Array.prototype.concat.apply(pu,a.map(function(h){return ga(h,l,u,o)})):[a.toString()]}function qg(a){for(var l=0;l<a.length;l+=1){var u=a[l];if(Hi(u)&&!Vf(u))return!1}return!0}var Y5=Og(du),G5=(function(){function a(l,u,o){this.rules=l,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&qg(l),this.componentId=u,this.baseHash=Ni(Y5,u),this.baseStyle=o,tu.registerId(u)}return a.prototype.generateAndInjectStyles=function(l,u,o){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(l,u,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))c=Ua(c,this.staticRulesId);else{var f=Io(ga(this.rules,l,u,o)),h=jf(Ni(this.baseHash,f)>>>0);if(!u.hasNameForId(this.componentId,h)){var y=o(f,".".concat(h),void 0,this.componentId);u.insertRules(this.componentId,h,y)}c=Ua(c,h),this.staticRulesId=h}else{for(var g=Ni(this.baseHash,o.hash),m="",b=0;b<this.rules.length;b++){var S=this.rules[b];if(typeof S=="string")m+=S;else if(S){var E=Io(ga(S,l,u,o));g=Ni(g,E+b),m+=E}}if(m){var D=jf(g>>>0);u.hasNameForId(this.componentId,D)||u.insertRules(this.componentId,D,o(m,".".concat(D),void 0,this.componentId)),c=Ua(c,D)}}return c},a})(),Qf=Ye.createContext(void 0);Qf.Consumer;var Kc={};function X5(a,l,u){var o=Vf(a),c=a,f=!Vc(a),h=l.attrs,y=h===void 0?pu:h,g=l.componentId,m=g===void 0?(function(U,N){var M=typeof U!="string"?"sc":R1(U);Kc[M]=(Kc[M]||0)+1;var J="".concat(M,"-").concat(Xf(du+M+Kc[M]));return N?"".concat(N,"-").concat(J):J})(l.displayName,l.parentComponentId):g,b=l.displayName,S=b===void 0?(function(U){return Vc(U)?"styled.".concat(U):"Styled(".concat(v5(U),")")})(a):b,E=l.displayName&&l.componentId?"".concat(R1(l.displayName),"-").concat(l.componentId):l.componentId||m,D=o&&c.attrs?c.attrs.concat(y).filter(Boolean):y,R=l.shouldForwardProp;if(o&&c.shouldForwardProp){var $=c.shouldForwardProp;if(l.shouldForwardProp){var B=l.shouldForwardProp;R=function(U,N){return $(U,N)&&B(U,N)}}else R=$}var V=new G5(u,E,o?c.componentStyle:void 0);function O(U,N){return(function(M,J,X){var Z=M.attrs,oe=M.componentStyle,F=M.defaultProps,L=M.foldedComponentIds,ee=M.styledComponentId,ne=M.target,j=Ye.useContext(Qf),_=Mf(),H=M.shouldForwardProp||_.shouldForwardProp,W=Rg(J,j,F)||Ui,ae=(function(fe,he,xe){for(var $e,je=pt(pt({},he),{className:void 0,theme:xe}),jt=0;jt<fe.length;jt+=1){var Wt=Hi($e=fe[jt])?$e(je):$e;for(var mt in Wt)je[mt]=mt==="className"?Ua(je[mt],Wt[mt]):mt==="style"?pt(pt({},je[mt]),Wt[mt]):Wt[mt]}return he.className&&(je.className=Ua(je.className,he.className)),je})(Z,J,W),se=ae.as||ne,T={};for(var K in ae)ae[K]===void 0||K[0]==="$"||K==="as"||K==="theme"&&ae.theme===W||(K==="forwardedAs"?T.as=ae.forwardedAs:H&&!H(K,se)||(T[K]=ae[K]));var le=(function(fe,he){var xe=Mf(),$e=fe.generateAndInjectStyles(he,xe.styleSheet,xe.stylis);return $e})(oe,ae),ie=Ua(L,ee);return le&&(ie+=" "+le),ae.className&&(ie+=" "+ae.className),T[Vc(se)&&!Mg.has(se)?"class":"className"]=ie,X&&(T.ref=X),x.createElement(se,T)})(A,U,N)}O.displayName=S;var A=Ye.forwardRef(O);return A.attrs=D,A.componentStyle=V,A.displayName=S,A.shouldForwardProp=R,A.foldedComponentIds=o?Ua(c.foldedComponentIds,c.styledComponentId):"",A.styledComponentId=E,A.target=o?c.target:a,Object.defineProperty(A,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(U){this._foldedDefaultProps=o?(function(N){for(var M=[],J=1;J<arguments.length;J++)M[J-1]=arguments[J];for(var X=0,Z=M;X<Z.length;X++)Tf(N,Z[X],!0);return N})({},c.defaultProps,U):U}}),Kf(A,function(){return".".concat(A.styledComponentId)}),f&&Dg(A,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),A}function k1(a,l){for(var u=[a[0]],o=0,c=l.length;o<c;o+=1)u.push(l[o],a[o+1]);return u}var L1=function(a){return Object.assign(a,{isCss:!0})};function va(a){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];if(Hi(a)||nr(a))return L1(ga(k1(pu,ki([a],l,!0))));var o=a;return l.length===0&&o.length===1&&typeof o[0]=="string"?ga(o):L1(ga(k1(o,l)))}function zf(a,l,u){if(u===void 0&&(u=Ui),!l)throw ur(1,l);var o=function(c){for(var f=[],h=1;h<arguments.length;h++)f[h-1]=arguments[h];return a(l,u,va.apply(void 0,ki([c],f,!1)))};return o.attrs=function(c){return zf(a,l,pt(pt({},u),{attrs:Array.prototype.concat(u.attrs,c).filter(Boolean)}))},o.withConfig=function(c){return zf(a,l,pt(pt({},u),c))},o}var Yg=function(a){return zf(X5,a)},w=Yg;Mg.forEach(function(a){w[a]=Yg(a)});var V5=(function(){function a(l,u){this.rules=l,this.componentId=u,this.isStatic=qg(l),tu.registerId(this.componentId+1)}return a.prototype.createStyles=function(l,u,o,c){var f=c(Io(ga(this.rules,u,o,c)),""),h=this.componentId+l;o.insertRules(h,h,f)},a.prototype.removeStyles=function(l,u){u.clearRules(this.componentId+l)},a.prototype.renderStyles=function(l,u,o,c){l>2&&tu.registerId(this.componentId+l),this.removeStyles(l,o),this.createStyles(l,u,o,c)},a})();function K5(a){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];var o=va.apply(void 0,ki([a],l,!1)),c="sc-global-".concat(Xf(JSON.stringify(o))),f=new V5(o,c),h=function(g){var m=Mf(),b=Ye.useContext(Qf),S=Ye.useRef(m.styleSheet.allocateGSInstance(c)).current;return m.styleSheet.server&&y(S,g,m.styleSheet,b,m.stylis),Ye.useLayoutEffect(function(){if(!m.styleSheet.server)return y(S,g,m.styleSheet,b,m.stylis),function(){return f.removeStyles(S,m.styleSheet)}},[S,g,m.styleSheet,b,m.stylis]),null};function y(g,m,b,S,E){if(f.isStatic)f.renderStyles(g,p5,b,E);else{var D=pt(pt({},m),{theme:Rg(m,S,h.defaultProps)});f.renderStyles(g,D,b,E)}}return Ye.memo(h)}function Ft(a){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];var o=Io(va.apply(void 0,ki([a],l,!1))),c=Xf(o);return new Bg(c,o)}var Gg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},$1=Ye.createContext&&Ye.createContext(Gg),Q5=["attr","size","title"];function Z5(a,l){if(a==null)return{};var u=J5(a,l),o,c;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)o=f[c],!(l.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(a,o)&&(u[o]=a[o])}return u}function J5(a,l){if(a==null)return{};var u={};for(var o in a)if(Object.prototype.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}function nu(){return nu=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},nu.apply(this,arguments)}function B1(a,l){var u=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);l&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable})),u.push.apply(u,o)}return u}function au(a){for(var l=1;l<arguments.length;l++){var u=arguments[l]!=null?arguments[l]:{};l%2?B1(Object(u),!0).forEach(function(o){F5(a,o,u[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(u)):B1(Object(u)).forEach(function(o){Object.defineProperty(a,o,Object.getOwnPropertyDescriptor(u,o))})}return a}function F5(a,l,u){return l=W5(l),l in a?Object.defineProperty(a,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[l]=u,a}function W5(a){var l=P5(a,"string");return typeof l=="symbol"?l:l+""}function P5(a,l){if(typeof a!="object"||!a)return a;var u=a[Symbol.toPrimitive];if(u!==void 0){var o=u.call(a,l);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(a)}function Xg(a){return a&&a.map((l,u)=>Ye.createElement(l.tag,au({key:u},l.attr),Xg(l.child)))}function Te(a){return l=>Ye.createElement(I5,nu({attr:au({},a.attr)},l),Xg(a.child))}function I5(a){var l=u=>{var{attr:o,size:c,title:f}=a,h=Z5(a,Q5),y=c||u.size||"1em",g;return u.className&&(g=u.className),a.className&&(g=(g?g+" ":"")+a.className),Ye.createElement("svg",nu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,o,h,{className:g,style:au(au({color:a.color||u.color},u.style),a.style),height:y,width:y,xmlns:"http://www.w3.org/2000/svg"}),f&&Ye.createElement("title",null,f),a.children)};return $1!==void 0?Ye.createElement($1.Consumer,null,u=>l(u)):l(Gg)}function Zf(a){return Te({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"},child:[]}]})(a)}function Jf(a){return Te({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"},child:[]}]})(a)}function Ff(a){return Te({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"},child:[]}]})(a)}function Wf(a){return Te({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"},child:[]}]})(a)}function Pf(a){return Te({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"},child:[]}]})(a)}function Vg(a){return Te({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"},child:[]}]})(a)}function e3(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(a)}function Kg(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(a)}function t3(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(a)}function Qg(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(a)}function n3(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(a)}function If(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(a)}function a3(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(a)}function Zg(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(a)}function U1(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}const i3="/instalearn/assets/vedioClip1-BQ1quwNm.mp4",l3="/instalearn/assets/test-BrOnAr5c.png",r3="/instalearn/assets/teacherProfilePic-DPrjIuTX.png",o3="/instalearn/assets/Slide1-D-tpOApl.png",u3="/instalearn/assets/Slide2-DwqY78Z4.png",s3="/instalearn/assets/Slide3-B6C07YuO.png",c3="/instalearn/assets/Slide4-BbthJNiF.png",f3="/instalearn/assets/Slide5-BsOulZPi.png",d3="/instalearn/assets/Slide6-8dQDHdn3.png",p3="/instalearn/assets/Slide7-CH0r16yo.png",h3="/instalearn/assets/Slide8-2dBFzKRc.png",m3="/instalearn/assets/Slide9-D8lJXVrP.png",Oo={},g3={videoClip1:i3},v3={test:l3},hu={teacherProfilePic:r3},sn={Slide1:o3,Slide2:u3,Slide3:s3,Slide4:c3,Slide5:f3,Slide6:d3,Slide7:p3,Slide8:h3,Slide9:m3};function y3(a){return Te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M304 384v-24c0-29 31.54-56.43 52-76 28.84-27.57 44-64.61 44-108 0-80-63.73-144-144-144a143.6 143.6 0 0 0-144 144c0 41.84 15.81 81.39 44 108 20.35 19.21 52 46.7 52 76v24m16 96h64m-80-48h96m-48-48V256"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M294 240s-21.51 16-38 16-38-16-38-16"},child:[]}]})(a)}const x3=w.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
`,b3=w.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  @media (max-width: 520px) {
    padding: 10px 12px;
  }
`,S3=w.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,w3=w.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,E3=w.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,C3=w.span`
  font-weight: 600;
  color: #0f172a;
  font-size: 14px;
  @media (max-width: 520px) { font-size: 13px; }
`,j3=w.span`
  font-size: 12px;
  color: #64748b;
`,T3=w.button`
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
`,R3=w.div`
  position: relative;
  aspect-ratio: 1 / 1;
  background: linear-gradient(135deg, #eef2ff, #e0f7fa);
`,M3=w.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,z3=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px 8px 12px;
`,O3=w.div`
  display: flex;
  gap: 10px;
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
  @media (max-width: 520px) {
    width: 36px; height: 36px; border-radius: 8px;
  }
`,A3=w.div`
  padding: 12px;
  display: grid;
  gap: 14px;
  background: #f8fafc;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  @media (min-width: 520px) {
    padding: 14px 16px;
    gap: 16px;
  }
`,H1=w.section`
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.02);
  @media (min-width: 520px) { padding: 14px; }
`,q1=w.h3`
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 8px 0;
`,_3=w.ul`
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
`,Y1=w.div`
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
`,G1=w.button`
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 12px;
  cursor: pointer;
`,N3=w.div`
  display: grid;
  gap: 10px;
`,D3=w.p`
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #0f172a;
`,k3=w.div`
  display: grid;
  gap: 8px;
`,L3=w.button.withConfig({shouldForwardProp:a=>a!=="$state"})`
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
`,Jo=w.small`
  color: #64748b;
  font-size: 12px;
`,$3=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Jg=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`,X1=w.button`
  background: #0f172a;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 8px 12px;
  font-size: 12px;
  cursor: pointer;
`,Fg=w.button`
  background: transparent;
  border: 1px solid rgba(15,23,42,.14);
  border-radius: 10px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 12px;
`;async function B3(a){const u=await(await fetch(a,{mode:"cors"})).blob(),o=u.type||"image/jpeg",c=await u.arrayBuffer(),f=new Uint8Array(c);let h="";for(let g=0;g<f.byteLength;g++)h+=String.fromCharCode(f[g]);return{base64:btoa(h),mime:o}}function U3({title:a,description:l,username:u}){return`
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
- Author: "${u}"
`.trim()}async function H3(a){const{title:l,description:u,username:o,imageUrl:c}=a,f="AIzaSyDYGHcNYuuk43rrYSBVBIQGegzOGVtjGrw",{base64:h,mime:y}=await B3(c),m={contents:[{parts:[{text:U3({title:l,description:u,username:o})},{inline_data:{mime_type:y,data:h}}]}],generationConfig:{temperature:.6,topK:32,topP:.9,maxOutputTokens:1200,response_mime_type:"application/json"}},b="https://generativelanguage.googleapis.com/v1beta",S=["gemini-2.5-flash","gemini-2.0-flash"];let E;for(const D of S)try{const R=`${b}/models/${D}:generateContent?key=${encodeURIComponent(f)}`,$=await fetch(R,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)});if(!$.ok)throw new Error(`Gemini error (${$.status}): ${await $.text()}`);const V=(await $.json())?.candidates?.[0]?.content?.parts?.[0]?.text;if(!V)throw new Error("Empty response from Gemini");let O;try{O=JSON.parse(V)}catch{const M=String(V).replace(/^```json\s*/i,"").replace(/^```\s*/i,"").replace(/```$/i,"").trim();O=JSON.parse(M)}const A=Array.isArray(O.bullets)?O.bullets.slice(0,5):[],U=Array.isArray(O.mcqs)?O.mcqs.slice(0,5):[];if(!A.length||!U.length)throw new Error("Malformed AI content");const N=U.map(M=>({question:String(M.question||"").slice(0,140),options:Array.isArray(M.options)&&M.options.length?M.options.slice(0,5):["Not present"],correctIndex:Number.isInteger(M.correctIndex)?M.correctIndex:0,explanation:M.explanation?String(M.explanation).slice(0,140):void 0}));return{bullets:A,mcqs:N}}catch(R){E=R}throw E||new Error("Gemini request failed")}function q3({avatarSrc:a=hu.teacherProfilePic,title:l,description:u,imgSrc:o,username:c,postUrl:f,onLikeChange:h,onBookmarkChange:y,onShare:g}){const[m,b]=x.useState(!1),[S,E]=x.useState(!1),[D,R]=x.useState(!1),[$,B]=x.useState(!1),[V,O]=x.useState(null),[A,U]=x.useState(null),[N,M]=x.useState(0);x.useEffect(()=>{const ae=A?.mcqs?.length||0;ae!==0&&M(se=>Math.max(0,Math.min(se,ae-1)))},[A?.mcqs?.length]);const J=m?"Unlike":"Like",X=S?"Remove bookmark":"Bookmark",Z=()=>{const ae=!m;b(ae),h&&h(ae)},oe=()=>{const ae=!S;E(ae),y&&y(ae)},F=x.useMemo(()=>({title:l,text:`${c} on Infographics — ${l}`,url:f}),[l,c,f]),L=async()=>{try{navigator.share?await navigator.share(F):navigator.clipboard&&F.url&&(await navigator.clipboard.writeText(F.url),alert("Link copied to clipboard")),g&&g(F)}catch(ae){console.error("Share failed:",ae)}},ee=async()=>{B(!0),O(null);try{const ae=await H3({title:l,description:u,username:c,imageUrl:o});U(ae),M(0)}catch(ae){console.error(ae),O(ae?.message||"Failed to generate content")}finally{B(!1)}},ne=()=>{const ae=!D;R(ae),ae&&!A&&!$&&ee()},j=A?.mcqs?.length||0,_=j?A.mcqs[N]:null,H=N===j-1,W=()=>M(ae=>Math.min(ae+1,j-1));return d.jsxs(x3,{role:"article","aria-label":`${l} instagram-style post`,children:[d.jsxs(b3,{children:[d.jsxs(S3,{children:[d.jsx(w3,{src:a,alt:"avatar"}),d.jsxs(E3,{children:[d.jsx(C3,{children:l}),d.jsx(j3,{children:u})]})]}),d.jsx(T3,{"aria-label":D?"Close learn mode":"Open learn mode",title:D?"Close learn mode":"Learn more & quiz",onClick:ne,children:d.jsx(y3,{size:18})})]}),D?d.jsxs(A3,{"aria-live":"polite",children:[d.jsxs(H1,{children:[d.jsx(q1,{children:"Know more (5 quick points)"}),$?d.jsxs("div",{style:{display:"grid",gap:8},children:[d.jsx(cn,{}),d.jsx(cn,{}),d.jsx(cn,{}),d.jsx(cn,{}),d.jsx(cn,{})]}):V?d.jsxs(Y1,{children:[d.jsx("span",{style:{flex:1,minWidth:0},children:V}),d.jsx(G1,{onClick:ee,"aria-label":"Retry generating content",children:"Retry"})]}):d.jsx(_3,{children:A?.bullets?.map((ae,se)=>d.jsx("li",{children:ae},se))})]}),d.jsxs(H1,{children:[d.jsxs(Jg,{children:[d.jsx(q1,{style:{margin:0},children:"Test your knowledge"}),j?d.jsxs(Jo,{children:[N+1," / ",j]}):null]}),$?d.jsxs("div",{style:{display:"grid",gap:10},children:[d.jsx(cn,{h:16}),d.jsx(cn,{h:40}),d.jsx(cn,{h:40}),d.jsx(cn,{h:40}),d.jsx(cn,{h:40})]}):V?d.jsxs(Y1,{children:[d.jsx("span",{style:{flex:1,minWidth:0},children:"Can’t load questions."}),d.jsx(G1,{onClick:ee,children:"Retry"})]}):_?d.jsx(Y3,{mcq:_,index:N+1,total:j,isLast:H,onNext:H?void 0:W,onFinish:H?()=>R(!1):void 0},N):null,!$&&!V&&_&&!H?d.jsx("div",{style:{marginTop:6},children:d.jsx(Jo,{children:"Tip: You can change your choice before tapping Next."})}):null]}),d.jsxs($3,{children:[d.jsx(Jo,{children:"AI stays within the infographic; short, clear answers only."}),d.jsx(Fg,{onClick:()=>R(!1),"aria-label":"Back to image",title:"Back to image",children:"Back to image"})]})]}):d.jsx(R3,{children:d.jsx(M3,{src:o,alt:l})}),d.jsxs(z3,{children:[d.jsxs(O3,{children:[d.jsx(Ao,{onClick:Z,"aria-label":J,title:J,children:m?d.jsx(Zf,{size:22}):d.jsx(Jf,{size:22})}),d.jsx(Ao,{"aria-label":"Comment",title:"Comment",children:d.jsx(Pf,{size:20})}),d.jsx(Ao,{onClick:L,"aria-label":"Share",title:"Share",children:d.jsx(If,{size:20})})]}),d.jsx(Ao,{onClick:oe,"aria-label":X,title:X,children:S?d.jsx(Ff,{size:20}):d.jsx(Wf,{size:20})})]})]})}function Y3({mcq:a,index:l,total:u,isLast:o,onNext:c,onFinish:f}){const[h,y]=x.useState(null),g=m=>h===null?"idle":m===a.correctIndex?"correct":m===h&&h!==a.correctIndex?"wrong":"idle";return d.jsxs(N3,{"aria-label":`Question ${l}`,children:[d.jsxs(D3,{children:[l,". ",a.question]}),d.jsx(k3,{children:a.options.map((m,b)=>d.jsx(L3,{onClick:()=>y(b),$state:g(b),"aria-pressed":h===b,"aria-label":`Option ${b+1}`,children:m},b))}),h!==null&&d.jsxs("div",{style:{display:"grid",gap:8},children:[d.jsxs(Jo,{children:[h===a.correctIndex?"✅ Correct.":"❌ Not quite.",a.explanation?` — ${a.explanation}`:""]}),o?d.jsxs(Jg,{children:[d.jsx(X1,{onClick:f,"aria-label":"Finish quiz",children:"Finish"}),d.jsx(Fg,{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"Back to top"})]}):d.jsxs(X1,{onClick:c,"aria-label":"Next question",disabled:h===null,children:["Next question (",l+1,"/",u,")"]})]})]})}var Qc={},Gl={},_o={},No={},Zc={exports:{}},Jc,V1;function G3(){if(V1)return Jc;V1=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Jc=a,Jc}var Fc,K1;function X3(){if(K1)return Fc;K1=1;var a=G3();function l(){}function u(){}return u.resetWarningCache=l,Fc=function(){function o(h,y,g,m,b,S){if(S!==a){var E=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw E.name="Invariant Violation",E}}o.isRequired=o;function c(){return o}var f={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:c,element:o,elementType:o,instanceOf:c,node:o,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:u,resetWarningCache:l};return f.PropTypes=f,f},Fc}var Q1;function Wg(){return Q1||(Q1=1,Zc.exports=X3()()),Zc.exports}var Z1;function V3(){return Z1||(Z1=1,(function(a){(function(l,u){u(a,ya(),Wg())})(No,function(l,u,o){Object.defineProperty(l,"__esModule",{value:!0}),l.setHasSupportToCaptureOption=R;var c=h(u),f=h(o);function h(O){return O&&O.__esModule?O:{default:O}}var y=Object.assign||function(O){for(var A=1;A<arguments.length;A++){var U=arguments[A];for(var N in U)Object.prototype.hasOwnProperty.call(U,N)&&(O[N]=U[N])}return O};function g(O,A){var U={};for(var N in O)A.indexOf(N)>=0||Object.prototype.hasOwnProperty.call(O,N)&&(U[N]=O[N]);return U}function m(O,A){if(!(O instanceof A))throw new TypeError("Cannot call a class as a function")}var b=(function(){function O(A,U){for(var N=0;N<U.length;N++){var M=U[N];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(A,M.key,M)}}return function(A,U,N){return U&&O(A.prototype,U),N&&O(A,N),A}})();function S(O,A){if(!O)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A&&(typeof A=="object"||typeof A=="function")?A:O}function E(O,A){if(typeof A!="function"&&A!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof A);O.prototype=Object.create(A&&A.prototype,{constructor:{value:O,enumerable:!1,writable:!0,configurable:!0}}),A&&(Object.setPrototypeOf?Object.setPrototypeOf(O,A):O.__proto__=A)}var D=!1;function R(O){D=O}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){R(!0)}}))}catch{}function $(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return D?O:O.capture}function B(O){if("touches"in O){var A=O.touches[0],U=A.pageX,N=A.pageY;return{x:U,y:N}}var M=O.screenX,J=O.screenY;return{x:M,y:J}}var V=(function(O){E(A,O);function A(){var U;m(this,A);for(var N=arguments.length,M=Array(N),J=0;J<N;J++)M[J]=arguments[J];var X=S(this,(U=A.__proto__||Object.getPrototypeOf(A)).call.apply(U,[this].concat(M)));return X._handleSwipeStart=X._handleSwipeStart.bind(X),X._handleSwipeMove=X._handleSwipeMove.bind(X),X._handleSwipeEnd=X._handleSwipeEnd.bind(X),X._onMouseDown=X._onMouseDown.bind(X),X._onMouseMove=X._onMouseMove.bind(X),X._onMouseUp=X._onMouseUp.bind(X),X._setSwiperRef=X._setSwiperRef.bind(X),X}return b(A,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,$({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,$({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(N){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(N))}},{key:"_onMouseMove",value:function(N){this.mouseDown&&this._handleSwipeMove(N)}},{key:"_onMouseUp",value:function(N){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(N)}},{key:"_handleSwipeStart",value:function(N){var M=B(N),J=M.x,X=M.y;this.moveStart={x:J,y:X},this.props.onSwipeStart(N)}},{key:"_handleSwipeMove",value:function(N){if(this.moveStart){var M=B(N),J=M.x,X=M.y,Z=J-this.moveStart.x,oe=X-this.moveStart.y;this.moving=!0;var F=this.props.onSwipeMove({x:Z,y:oe},N);F&&N.cancelable&&N.preventDefault(),this.movePosition={deltaX:Z,deltaY:oe}}}},{key:"_handleSwipeEnd",value:function(N){this.props.onSwipeEnd(N);var M=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-M?this.props.onSwipeLeft(1,N):this.movePosition.deltaX>M&&this.props.onSwipeRight(1,N),this.movePosition.deltaY<-M?this.props.onSwipeUp(1,N):this.movePosition.deltaY>M&&this.props.onSwipeDown(1,N)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(N){this.swiper=N,this.props.innerRef(N)}},{key:"render",value:function(){var N=this.props;N.tagName;var M=N.className,J=N.style,X=N.children;N.allowMouseEvents,N.onSwipeUp,N.onSwipeDown,N.onSwipeLeft,N.onSwipeRight,N.onSwipeStart,N.onSwipeMove,N.onSwipeEnd,N.innerRef,N.tolerance;var Z=g(N,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return c.default.createElement(this.props.tagName,y({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:M,style:J},Z),X)}}]),A})(u.Component);V.displayName="ReactSwipe",V.propTypes={tagName:f.default.string,className:f.default.string,style:f.default.object,children:f.default.node,allowMouseEvents:f.default.bool,onSwipeUp:f.default.func,onSwipeDown:f.default.func,onSwipeLeft:f.default.func,onSwipeRight:f.default.func,onSwipeStart:f.default.func,onSwipeMove:f.default.func,onSwipeEnd:f.default.func,innerRef:f.default.func,tolerance:f.default.number.isRequired},V.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},l.default=V})})(No)),No}var J1;function Pg(){return J1||(J1=1,(function(a){(function(l,u){u(a,V3())})(_o,function(l,u){Object.defineProperty(l,"__esModule",{value:!0});var o=c(u);function c(f){return f&&f.__esModule?f:{default:f}}l.default=o.default})})(_o)),_o}var Xl={},Wc={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var F1;function Ig(){return F1||(F1=1,(function(a){(function(){var l={}.hasOwnProperty;function u(){for(var f="",h=0;h<arguments.length;h++){var y=arguments[h];y&&(f=c(f,o(y)))}return f}function o(f){if(typeof f=="string"||typeof f=="number")return f;if(typeof f!="object")return"";if(Array.isArray(f))return u.apply(null,f);if(f.toString!==Object.prototype.toString&&!f.toString.toString().includes("[native code]"))return f.toString();var h="";for(var y in f)l.call(f,y)&&f[y]&&(h=c(h,y));return h}function c(f,h){return h?f?f+" "+h:f+h:f}a.exports?(u.default=u,a.exports=u):window.classNames=u})()})(Wc)),Wc.exports}var W1;function ev(){if(W1)return Xl;W1=1,Object.defineProperty(Xl,"__esModule",{value:!0}),Xl.default=void 0;var a=l(Ig());function l(c){return c&&c.__esModule?c:{default:c}}function u(c,f,h){return f in c?Object.defineProperty(c,f,{value:h,enumerable:!0,configurable:!0,writable:!0}):c[f]=h,c}var o={ROOT:function(f){return(0,a.default)(u({"carousel-root":!0},f||"",!!f))},CAROUSEL:function(f){return(0,a.default)({carousel:!0,"carousel-slider":f})},WRAPPER:function(f,h){return(0,a.default)({"thumbs-wrapper":!f,"slider-wrapper":f,"axis-horizontal":h==="horizontal","axis-vertical":h!=="horizontal"})},SLIDER:function(f,h){return(0,a.default)({thumbs:!f,slider:f,animated:!h})},ITEM:function(f,h,y){return(0,a.default)({thumb:!f,slide:f,selected:h,previous:y})},ARROW_PREV:function(f){return(0,a.default)({"control-arrow control-prev":!0,"control-disabled":f})},ARROW_NEXT:function(f){return(0,a.default)({"control-arrow control-next":!0,"control-disabled":f})},DOT:function(f){return(0,a.default)({dot:!0,selected:f})}};return Xl.default=o,Xl}var Vl={},Kl={},P1;function K3(){if(P1)return Kl;P1=1,Object.defineProperty(Kl,"__esModule",{value:!0}),Kl.outerWidth=void 0;var a=function(u){var o=u.offsetWidth,c=getComputedStyle(u);return o+=parseInt(c.marginLeft)+parseInt(c.marginRight),o};return Kl.outerWidth=a,Kl}var Ql={},I1;function ed(){if(I1)return Ql;I1=1,Object.defineProperty(Ql,"__esModule",{value:!0}),Ql.default=void 0;var a=function(u,o,c){var f=u===0?u:u+o,h=c==="horizontal"?[f,0,0]:[0,f,0],y="translate3d",g="("+h.join(",")+")";return y+g};return Ql.default=a,Ql}var Zl={},em;function tv(){if(em)return Zl;em=1,Object.defineProperty(Zl,"__esModule",{value:!0}),Zl.default=void 0;var a=function(){return window};return Zl.default=a,Zl}var tm;function nv(){if(tm)return Vl;tm=1,Object.defineProperty(Vl,"__esModule",{value:!0}),Vl.default=void 0;var a=g(ya()),l=h(ev()),u=K3(),o=h(ed()),c=h(Pg()),f=h(tv());function h(X){return X&&X.__esModule?X:{default:X}}function y(){if(typeof WeakMap!="function")return null;var X=new WeakMap;return y=function(){return X},X}function g(X){if(X&&X.__esModule)return X;if(X===null||m(X)!=="object"&&typeof X!="function")return{default:X};var Z=y();if(Z&&Z.has(X))return Z.get(X);var oe={},F=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var L in X)if(Object.prototype.hasOwnProperty.call(X,L)){var ee=F?Object.getOwnPropertyDescriptor(X,L):null;ee&&(ee.get||ee.set)?Object.defineProperty(oe,L,ee):oe[L]=X[L]}return oe.default=X,Z&&Z.set(X,oe),oe}function m(X){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?m=function(oe){return typeof oe}:m=function(oe){return oe&&typeof Symbol=="function"&&oe.constructor===Symbol&&oe!==Symbol.prototype?"symbol":typeof oe},m(X)}function b(){return b=Object.assign||function(X){for(var Z=1;Z<arguments.length;Z++){var oe=arguments[Z];for(var F in oe)Object.prototype.hasOwnProperty.call(oe,F)&&(X[F]=oe[F])}return X},b.apply(this,arguments)}function S(X,Z){if(!(X instanceof Z))throw new TypeError("Cannot call a class as a function")}function E(X,Z){for(var oe=0;oe<Z.length;oe++){var F=Z[oe];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(X,F.key,F)}}function D(X,Z,oe){return Z&&E(X.prototype,Z),X}function R(X,Z){if(typeof Z!="function"&&Z!==null)throw new TypeError("Super expression must either be null or a function");X.prototype=Object.create(Z&&Z.prototype,{constructor:{value:X,writable:!0,configurable:!0}}),Z&&$(X,Z)}function $(X,Z){return $=Object.setPrototypeOf||function(F,L){return F.__proto__=L,F},$(X,Z)}function B(X){var Z=A();return function(){var F=U(X),L;if(Z){var ee=U(this).constructor;L=Reflect.construct(F,arguments,ee)}else L=F.apply(this,arguments);return V(this,L)}}function V(X,Z){return Z&&(m(Z)==="object"||typeof Z=="function")?Z:O(X)}function O(X){if(X===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return X}function A(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function U(X){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(oe){return oe.__proto__||Object.getPrototypeOf(oe)},U(X)}function N(X,Z,oe){return Z in X?Object.defineProperty(X,Z,{value:oe,enumerable:!0,configurable:!0,writable:!0}):X[Z]=oe,X}var M=function(Z){return Z.hasOwnProperty("key")},J=(function(X){R(oe,X);var Z=B(oe);function oe(F){var L;return S(this,oe),L=Z.call(this,F),N(O(L),"itemsWrapperRef",void 0),N(O(L),"itemsListRef",void 0),N(O(L),"thumbsRef",void 0),N(O(L),"setItemsWrapperRef",function(ee){L.itemsWrapperRef=ee}),N(O(L),"setItemsListRef",function(ee){L.itemsListRef=ee}),N(O(L),"setThumbsRef",function(ee,ne){L.thumbsRef||(L.thumbsRef=[]),L.thumbsRef[ne]=ee}),N(O(L),"updateSizes",function(){if(!(!L.props.children||!L.itemsWrapperRef||!L.thumbsRef)){var ee=a.Children.count(L.props.children),ne=L.itemsWrapperRef.clientWidth,j=L.props.thumbWidth?L.props.thumbWidth:(0,u.outerWidth)(L.thumbsRef[0]),_=Math.floor(ne/j),H=_<ee,W=H?ee-_:0;L.setState(function(ae,se){return{itemSize:j,visibleItems:_,firstItem:H?L.getFirstItem(se.selectedItem):0,lastPosition:W,showArrows:H}})}}),N(O(L),"handleClickItem",function(ee,ne,j){if(!M(j)||j.key==="Enter"){var _=L.props.onSelectItem;typeof _=="function"&&_(ee,ne)}}),N(O(L),"onSwipeStart",function(){L.setState({swiping:!0})}),N(O(L),"onSwipeEnd",function(){L.setState({swiping:!1})}),N(O(L),"onSwipeMove",function(ee){var ne=ee.x;if(!L.state.itemSize||!L.itemsWrapperRef||!L.state.visibleItems)return!1;var j=0,_=a.Children.count(L.props.children),H=-(L.state.firstItem*100)/L.state.visibleItems,W=Math.max(_-L.state.visibleItems,0),ae=-W*100/L.state.visibleItems;H===j&&ne>0&&(ne=0),H===ae&&ne<0&&(ne=0);var se=L.itemsWrapperRef.clientWidth,T=H+100/(se/ne);return L.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(K){L.itemsListRef.style[K]=(0,o.default)(T,"%",L.props.axis)}),!0}),N(O(L),"slideRight",function(ee){L.moveTo(L.state.firstItem-(typeof ee=="number"?ee:1))}),N(O(L),"slideLeft",function(ee){L.moveTo(L.state.firstItem+(typeof ee=="number"?ee:1))}),N(O(L),"moveTo",function(ee){ee=ee<0?0:ee,ee=ee>=L.state.lastPosition?L.state.lastPosition:ee,L.setState({firstItem:ee})}),L.state={selectedItem:F.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},L}return D(oe,[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(L){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==L.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,f.default)().addEventListener("resize",this.updateSizes),(0,f.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,f.default)().removeEventListener("resize",this.updateSizes),(0,f.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(L){var ee=L;return L>=this.state.lastPosition&&(ee=this.state.lastPosition),L<this.state.firstItem+this.state.visibleItems&&(ee=this.state.firstItem),L<this.state.firstItem&&(ee=L),ee}},{key:"renderItems",value:function(){var L=this;return this.props.children.map(function(ee,ne){var j=l.default.ITEM(!1,ne===L.state.selectedItem),_={key:ne,ref:function(W){return L.setThumbsRef(W,ne)},className:j,onClick:L.handleClickItem.bind(L,ne,L.props.children[ne]),onKeyDown:L.handleClickItem.bind(L,ne,L.props.children[ne]),"aria-label":"".concat(L.props.labels.item," ").concat(ne+1),style:{width:L.props.thumbWidth}};return a.default.createElement("li",b({},_,{role:"button",tabIndex:0}),ee)})}},{key:"render",value:function(){var L=this;if(!this.props.children)return null;var ee=a.Children.count(this.props.children)>1,ne=this.state.showArrows&&this.state.firstItem>0,j=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,_={},H=-this.state.firstItem*(this.state.itemSize||0),W=(0,o.default)(H,"px",this.props.axis),ae=this.props.transitionTime+"ms";return _={WebkitTransform:W,MozTransform:W,MsTransform:W,OTransform:W,transform:W,msTransform:W,WebkitTransitionDuration:ae,MozTransitionDuration:ae,MsTransitionDuration:ae,OTransitionDuration:ae,transitionDuration:ae,msTransitionDuration:ae},a.default.createElement("div",{className:l.default.CAROUSEL(!1)},a.default.createElement("div",{className:l.default.WRAPPER(!1),ref:this.setItemsWrapperRef},a.default.createElement("button",{type:"button",className:l.default.ARROW_PREV(!ne),onClick:function(){return L.slideRight()},"aria-label":this.props.labels.leftArrow}),ee?a.default.createElement(c.default,{tagName:"ul",className:l.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:_,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):a.default.createElement("ul",{className:l.default.SLIDER(!1,this.state.swiping),ref:function(T){return L.setItemsListRef(T)},style:_},this.renderItems()),a.default.createElement("button",{type:"button",className:l.default.ARROW_NEXT(!j),onClick:function(){return L.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}]),oe})(a.Component);return Vl.default=J,N(J,"displayName","Thumbs"),N(J,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350}),Vl}var Jl={},nm;function Q3(){if(nm)return Jl;nm=1,Object.defineProperty(Jl,"__esModule",{value:!0}),Jl.default=void 0;var a=function(){return document};return Jl.default=a,Jl}var Lt={},am;function av(){if(am)return Lt;am=1,Object.defineProperty(Lt,"__esModule",{value:!0}),Lt.setPosition=Lt.getPosition=Lt.isKeyboardEvent=Lt.defaultStatusFormatter=Lt.noop=void 0;var a=ya(),l=u(ed());function u(g){return g&&g.__esModule?g:{default:g}}var o=function(){};Lt.noop=o;var c=function(m,b){return"".concat(m," of ").concat(b)};Lt.defaultStatusFormatter=c;var f=function(m){return m?m.hasOwnProperty("key"):!1};Lt.isKeyboardEvent=f;var h=function(m,b){if(b.infiniteLoop&&++m,m===0)return 0;var S=a.Children.count(b.children);if(b.centerMode&&b.axis==="horizontal"){var E=-m*b.centerSlidePercentage,D=S-1;return m&&(m!==D||b.infiniteLoop)?E+=(100-b.centerSlidePercentage)/2:m===D&&(E+=100-b.centerSlidePercentage),E}return-m*100};Lt.getPosition=h;var y=function(m,b){var S={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(E){S[E]=(0,l.default)(m,"%",b)}),S};return Lt.setPosition=y,Lt}var tn={},im;function Z3(){if(im)return tn;im=1,Object.defineProperty(tn,"__esModule",{value:!0}),tn.fadeAnimationHandler=tn.slideStopSwipingHandler=tn.slideSwipeAnimationHandler=tn.slideAnimationHandler=void 0;var a=ya(),l=o(ed()),u=av();function o(S){return S&&S.__esModule?S:{default:S}}function c(S,E){var D=Object.keys(S);if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(S);E&&(R=R.filter(function($){return Object.getOwnPropertyDescriptor(S,$).enumerable})),D.push.apply(D,R)}return D}function f(S){for(var E=1;E<arguments.length;E++){var D=arguments[E]!=null?arguments[E]:{};E%2?c(Object(D),!0).forEach(function(R){h(S,R,D[R])}):Object.getOwnPropertyDescriptors?Object.defineProperties(S,Object.getOwnPropertyDescriptors(D)):c(Object(D)).forEach(function(R){Object.defineProperty(S,R,Object.getOwnPropertyDescriptor(D,R))})}return S}function h(S,E,D){return E in S?Object.defineProperty(S,E,{value:D,enumerable:!0,configurable:!0,writable:!0}):S[E]=D,S}var y=function(E,D){var R={},$=D.selectedItem,B=$,V=a.Children.count(E.children)-1,O=E.infiniteLoop&&($<0||$>V);if(O)return B<0?E.centerMode&&E.centerSlidePercentage&&E.axis==="horizontal"?R.itemListStyle=(0,u.setPosition)(-(V+2)*E.centerSlidePercentage-(100-E.centerSlidePercentage)/2,E.axis):R.itemListStyle=(0,u.setPosition)(-(V+2)*100,E.axis):B>V&&(R.itemListStyle=(0,u.setPosition)(0,E.axis)),R;var A=(0,u.getPosition)($,E),U=(0,l.default)(A,"%",E.axis),N=E.transitionTime+"ms";return R.itemListStyle={WebkitTransform:U,msTransform:U,OTransform:U,transform:U},D.swiping||(R.itemListStyle=f(f({},R.itemListStyle),{},{WebkitTransitionDuration:N,MozTransitionDuration:N,OTransitionDuration:N,transitionDuration:N,msTransitionDuration:N})),R};tn.slideAnimationHandler=y;var g=function(E,D,R,$){var B={},V=D.axis==="horizontal",O=a.Children.count(D.children),A=0,U=(0,u.getPosition)(R.selectedItem,D),N=D.infiniteLoop?(0,u.getPosition)(O-1,D)-100:(0,u.getPosition)(O-1,D),M=V?E.x:E.y,J=M;U===A&&M>0&&(J=0),U===N&&M<0&&(J=0);var X=U+100/(R.itemSize/J),Z=Math.abs(M)>D.swipeScrollTolerance;return D.infiniteLoop&&Z&&(R.selectedItem===0&&X>-100?X-=O*100:R.selectedItem===O-1&&X<-O*100&&(X+=O*100)),(!D.preventMovementUntilSwipeScrollTolerance||Z||R.swipeMovementStarted)&&(R.swipeMovementStarted||$({swipeMovementStarted:!0}),B.itemListStyle=(0,u.setPosition)(X,D.axis)),Z&&!R.cancelClick&&$({cancelClick:!0}),B};tn.slideSwipeAnimationHandler=g;var m=function(E,D){var R=(0,u.getPosition)(D.selectedItem,E),$=(0,u.setPosition)(R,E.axis);return{itemListStyle:$}};tn.slideStopSwipingHandler=m;var b=function(E,D){var R=E.transitionTime+"ms",$="ease-in-out",B={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:$,msTransitionTimingFunction:$,MozTransitionTimingFunction:$,WebkitTransitionTimingFunction:$,OTransitionTimingFunction:$};return D.swiping||(B=f(f({},B),{},{WebkitTransitionDuration:R,MozTransitionDuration:R,OTransitionDuration:R,transitionDuration:R,msTransitionDuration:R})),{slideStyle:B,selectedStyle:f(f({},B),{},{opacity:1,position:"relative"}),prevStyle:f({},B)}};return tn.fadeAnimationHandler=b,tn}var lm;function J3(){if(lm)return Gl;lm=1,Object.defineProperty(Gl,"__esModule",{value:!0}),Gl.default=void 0;var a=b(ya()),l=g(Pg()),u=g(ev()),o=g(nv()),c=g(Q3()),f=g(tv()),h=av(),y=Z3();function g(F){return F&&F.__esModule?F:{default:F}}function m(){if(typeof WeakMap!="function")return null;var F=new WeakMap;return m=function(){return F},F}function b(F){if(F&&F.__esModule)return F;if(F===null||S(F)!=="object"&&typeof F!="function")return{default:F};var L=m();if(L&&L.has(F))return L.get(F);var ee={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var j in F)if(Object.prototype.hasOwnProperty.call(F,j)){var _=ne?Object.getOwnPropertyDescriptor(F,j):null;_&&(_.get||_.set)?Object.defineProperty(ee,j,_):ee[j]=F[j]}return ee.default=F,L&&L.set(F,ee),ee}function S(F){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?S=function(ee){return typeof ee}:S=function(ee){return ee&&typeof Symbol=="function"&&ee.constructor===Symbol&&ee!==Symbol.prototype?"symbol":typeof ee},S(F)}function E(){return E=Object.assign||function(F){for(var L=1;L<arguments.length;L++){var ee=arguments[L];for(var ne in ee)Object.prototype.hasOwnProperty.call(ee,ne)&&(F[ne]=ee[ne])}return F},E.apply(this,arguments)}function D(F,L){var ee=Object.keys(F);if(Object.getOwnPropertySymbols){var ne=Object.getOwnPropertySymbols(F);L&&(ne=ne.filter(function(j){return Object.getOwnPropertyDescriptor(F,j).enumerable})),ee.push.apply(ee,ne)}return ee}function R(F){for(var L=1;L<arguments.length;L++){var ee=arguments[L]!=null?arguments[L]:{};L%2?D(Object(ee),!0).forEach(function(ne){Z(F,ne,ee[ne])}):Object.getOwnPropertyDescriptors?Object.defineProperties(F,Object.getOwnPropertyDescriptors(ee)):D(Object(ee)).forEach(function(ne){Object.defineProperty(F,ne,Object.getOwnPropertyDescriptor(ee,ne))})}return F}function $(F,L){if(!(F instanceof L))throw new TypeError("Cannot call a class as a function")}function B(F,L){for(var ee=0;ee<L.length;ee++){var ne=L[ee];ne.enumerable=ne.enumerable||!1,ne.configurable=!0,"value"in ne&&(ne.writable=!0),Object.defineProperty(F,ne.key,ne)}}function V(F,L,ee){return L&&B(F.prototype,L),F}function O(F,L){if(typeof L!="function"&&L!==null)throw new TypeError("Super expression must either be null or a function");F.prototype=Object.create(L&&L.prototype,{constructor:{value:F,writable:!0,configurable:!0}}),L&&A(F,L)}function A(F,L){return A=Object.setPrototypeOf||function(ne,j){return ne.__proto__=j,ne},A(F,L)}function U(F){var L=J();return function(){var ne=X(F),j;if(L){var _=X(this).constructor;j=Reflect.construct(ne,arguments,_)}else j=ne.apply(this,arguments);return N(this,j)}}function N(F,L){return L&&(S(L)==="object"||typeof L=="function")?L:M(F)}function M(F){if(F===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return F}function J(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function X(F){return X=Object.setPrototypeOf?Object.getPrototypeOf:function(ee){return ee.__proto__||Object.getPrototypeOf(ee)},X(F)}function Z(F,L,ee){return L in F?Object.defineProperty(F,L,{value:ee,enumerable:!0,configurable:!0,writable:!0}):F[L]=ee,F}var oe=(function(F){O(ee,F);var L=U(ee);function ee(ne){var j;$(this,ee),j=L.call(this,ne),Z(M(j),"thumbsRef",void 0),Z(M(j),"carouselWrapperRef",void 0),Z(M(j),"listRef",void 0),Z(M(j),"itemsRef",void 0),Z(M(j),"timer",void 0),Z(M(j),"animationHandler",void 0),Z(M(j),"setThumbsRef",function(H){j.thumbsRef=H}),Z(M(j),"setCarouselWrapperRef",function(H){j.carouselWrapperRef=H}),Z(M(j),"setListRef",function(H){j.listRef=H}),Z(M(j),"setItemsRef",function(H,W){j.itemsRef||(j.itemsRef=[]),j.itemsRef[W]=H}),Z(M(j),"autoPlay",function(){a.Children.count(j.props.children)<=1||(j.clearAutoPlay(),j.props.autoPlay&&(j.timer=setTimeout(function(){j.increment()},j.props.interval)))}),Z(M(j),"clearAutoPlay",function(){j.timer&&clearTimeout(j.timer)}),Z(M(j),"resetAutoPlay",function(){j.clearAutoPlay(),j.autoPlay()}),Z(M(j),"stopOnHover",function(){j.setState({isMouseEntered:!0},j.clearAutoPlay)}),Z(M(j),"startOnLeave",function(){j.setState({isMouseEntered:!1},j.autoPlay)}),Z(M(j),"isFocusWithinTheCarousel",function(){return j.carouselWrapperRef?!!((0,c.default)().activeElement===j.carouselWrapperRef||j.carouselWrapperRef.contains((0,c.default)().activeElement)):!1}),Z(M(j),"navigateWithKeyboard",function(H){if(j.isFocusWithinTheCarousel()){var W=j.props.axis,ae=W==="horizontal",se={ArrowUp:38,ArrowRight:39,ArrowDown:40,ArrowLeft:37},T=ae?se.ArrowRight:se.ArrowDown,K=ae?se.ArrowLeft:se.ArrowUp;T===H.keyCode?j.increment():K===H.keyCode&&j.decrement()}}),Z(M(j),"updateSizes",function(){if(!(!j.state.initialized||!j.itemsRef||j.itemsRef.length===0)){var H=j.props.axis==="horizontal",W=j.itemsRef[0];if(W){var ae=H?W.clientWidth:W.clientHeight;j.setState({itemSize:ae}),j.thumbsRef&&j.thumbsRef.updateSizes()}}}),Z(M(j),"setMountState",function(){j.setState({hasMount:!0}),j.updateSizes()}),Z(M(j),"handleClickItem",function(H,W){if(a.Children.count(j.props.children)!==0){if(j.state.cancelClick){j.setState({cancelClick:!1});return}j.props.onClickItem(H,W),H!==j.state.selectedItem&&j.setState({selectedItem:H})}}),Z(M(j),"handleOnChange",function(H,W){a.Children.count(j.props.children)<=1||j.props.onChange(H,W)}),Z(M(j),"handleClickThumb",function(H,W){j.props.onClickThumb(H,W),j.moveTo(H)}),Z(M(j),"onSwipeStart",function(H){j.setState({swiping:!0}),j.props.onSwipeStart(H)}),Z(M(j),"onSwipeEnd",function(H){j.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),j.props.onSwipeEnd(H),j.clearAutoPlay(),j.state.autoPlay&&j.autoPlay()}),Z(M(j),"onSwipeMove",function(H,W){j.props.onSwipeMove(W);var ae=j.props.swipeAnimationHandler(H,j.props,j.state,j.setState.bind(M(j)));return j.setState(R({},ae)),!!Object.keys(ae).length}),Z(M(j),"decrement",function(){var H=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;j.moveTo(j.state.selectedItem-(typeof H=="number"?H:1))}),Z(M(j),"increment",function(){var H=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;j.moveTo(j.state.selectedItem+(typeof H=="number"?H:1))}),Z(M(j),"moveTo",function(H){if(typeof H=="number"){var W=a.Children.count(j.props.children)-1;H<0&&(H=j.props.infiniteLoop?W:0),H>W&&(H=j.props.infiniteLoop?0:W),j.selectItem({selectedItem:H}),j.state.autoPlay&&j.state.isMouseEntered===!1&&j.resetAutoPlay()}}),Z(M(j),"onClickNext",function(){j.increment(1)}),Z(M(j),"onClickPrev",function(){j.decrement(1)}),Z(M(j),"onSwipeForward",function(){j.increment(1),j.props.emulateTouch&&j.setState({cancelClick:!0})}),Z(M(j),"onSwipeBackwards",function(){j.decrement(1),j.props.emulateTouch&&j.setState({cancelClick:!0})}),Z(M(j),"changeItem",function(H){return function(W){(!(0,h.isKeyboardEvent)(W)||W.key==="Enter")&&j.moveTo(H)}}),Z(M(j),"selectItem",function(H){j.setState(R({previousItem:j.state.selectedItem},H),function(){j.setState(j.animationHandler(j.props,j.state))}),j.handleOnChange(H.selectedItem,a.Children.toArray(j.props.children)[H.selectedItem])}),Z(M(j),"getInitialImage",function(){var H=j.props.selectedItem,W=j.itemsRef&&j.itemsRef[H],ae=W&&W.getElementsByTagName("img")||[];return ae[0]}),Z(M(j),"getVariableItemHeight",function(H){var W=j.itemsRef&&j.itemsRef[H];if(j.state.hasMount&&W&&W.children.length){var ae=W.children[0].getElementsByTagName("img")||[];if(ae.length>0){var se=ae[0];if(!se.complete){var T=function ie(){j.forceUpdate(),se.removeEventListener("load",ie)};se.addEventListener("load",T)}}var K=ae[0]||W.children[0],le=K.clientHeight;return le>0?le:null}return null});var _={initialized:!1,previousItem:ne.selectedItem,selectedItem:ne.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:ne.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return j.animationHandler=typeof ne.animationHandler=="function"&&ne.animationHandler||ne.animationHandler==="fade"&&y.fadeAnimationHandler||y.slideAnimationHandler,j.state=R(R({},_),j.animationHandler(ne,_)),j}return V(ee,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(j,_){!j.children&&this.props.children&&!this.state.initialized&&this.setupCarousel(),!j.autoFocus&&this.props.autoFocus&&this.forceFocus(),_.swiping&&!this.state.swiping&&this.setState(R({},this.props.stopSwipingHandler(this.props,this.state))),(j.selectedItem!==this.props.selectedItem||j.centerMode!==this.props.centerMode)&&(this.updateSizes(),this.moveTo(this.props.selectedItem)),j.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var j=this;this.bindEvents(),this.state.autoPlay&&a.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},function(){var _=j.getInitialImage();_&&!_.complete?_.addEventListener("load",j.setMountState):j.setMountState()})}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var j=this.carouselWrapperRef;this.props.stopOnHover&&j&&(j.addEventListener("mouseenter",this.stopOnHover),j.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var j=this.carouselWrapperRef;this.props.stopOnHover&&j&&(j.removeEventListener("mouseenter",this.stopOnHover),j.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,f.default)().addEventListener("resize",this.updateSizes),(0,f.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,c.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,f.default)().removeEventListener("resize",this.updateSizes),(0,f.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var j=this.getInitialImage();j&&j.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,c.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var j;(j=this.carouselWrapperRef)===null||j===void 0||j.focus()}},{key:"renderItems",value:function(j){var _=this;return this.props.children?a.Children.map(this.props.children,function(H,W){var ae=W===_.state.selectedItem,se=W===_.state.previousItem,T=ae&&_.state.selectedStyle||se&&_.state.prevStyle||_.state.slideStyle||{};_.props.centerMode&&_.props.axis==="horizontal"&&(T=R(R({},T),{},{minWidth:_.props.centerSlidePercentage+"%"})),_.state.swiping&&_.state.swipeMovementStarted&&(T=R(R({},T),{},{pointerEvents:"none"}));var K={ref:function(ie){return _.setItemsRef(ie,W)},key:"itemKey"+W+(j?"clone":""),className:u.default.ITEM(!0,W===_.state.selectedItem,W===_.state.previousItem),onClick:_.handleClickItem.bind(_,W,H),style:T};return a.default.createElement("li",K,_.props.renderItem(H,{isSelected:W===_.state.selectedItem,isPrevious:W===_.state.previousItem}))}):[]}},{key:"renderControls",value:function(){var j=this,_=this.props,H=_.showIndicators,W=_.labels,ae=_.renderIndicator,se=_.children;return H?a.default.createElement("ul",{className:"control-dots"},a.Children.map(se,function(T,K){return ae&&ae(j.changeItem(K),K===j.state.selectedItem,K,W.item)})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?a.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,a.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return!this.props.showThumbs||!this.props.children||a.Children.count(this.props.children)===0?null:a.default.createElement(o.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children))}},{key:"render",value:function(){var j=this;if(!this.props.children||a.Children.count(this.props.children)===0)return null;var _=this.props.swipeable&&a.Children.count(this.props.children)>1,H=this.props.axis==="horizontal",W=this.props.showArrows&&a.Children.count(this.props.children)>1,ae=W&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,se=W&&(this.state.selectedItem<a.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,T=this.renderItems(!0),K=T.shift(),le=T.pop(),ie={className:u.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},fe={};if(H){if(ie.onSwipeLeft=this.onSwipeForward,ie.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var he=this.getVariableItemHeight(this.state.selectedItem);fe.height=he||"auto"}}else ie.onSwipeUp=this.props.verticalSwipe==="natural"?this.onSwipeBackwards:this.onSwipeForward,ie.onSwipeDown=this.props.verticalSwipe==="natural"?this.onSwipeForward:this.onSwipeBackwards,ie.style=R(R({},ie.style),{},{height:this.state.itemSize}),fe.height=this.state.itemSize;return a.default.createElement("div",{"aria-label":this.props.ariaLabel,className:u.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},a.default.createElement("div",{className:u.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,ae,this.props.labels.leftArrow),a.default.createElement("div",{className:u.default.WRAPPER(!0,this.props.axis),style:fe},_?a.default.createElement(l.default,E({tagName:"ul",innerRef:this.setListRef},ie,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&le,this.renderItems(),this.props.infiniteLoop&&K):a.default.createElement("ul",{className:u.default.SLIDER(!0,this.state.swiping),ref:function($e){return j.setListRef($e)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&le,this.renderItems(),this.props.infiniteLoop&&K)),this.props.renderArrowNext(this.onClickNext,se,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}]),ee})(a.default.Component);return Gl.default=oe,Z(oe,"displayName","Carousel"),Z(oe,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:h.noop,onClickThumb:h.noop,onChange:h.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(L,ee,ne){return a.default.createElement("button",{type:"button","aria-label":ne,className:u.default.ARROW_PREV(!ee),onClick:L})},renderArrowNext:function(L,ee,ne){return a.default.createElement("button",{type:"button","aria-label":ne,className:u.default.ARROW_NEXT(!ee),onClick:L})},renderIndicator:function(L,ee,ne,j){return a.default.createElement("li",{className:u.default.DOT(ee),onClick:L,onKeyDown:L,value:ne,key:ne,role:"button",tabIndex:0,"aria-label":"".concat(j," ").concat(ne+1)})},renderItem:function(L){return L},renderThumbs:function(L){var ee=a.Children.map(L,function(ne){var j=ne;if(ne.type!=="img"&&(j=a.Children.toArray(ne.props.children).find(function(_){return _.type==="img"})),!!j)return j});return ee.filter(function(ne){return ne}).length===0?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):ee},statusFormatter:h.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:y.slideSwipeAnimationHandler,stopSwipingHandler:y.slideStopSwipingHandler}),Gl}var rm={},om;function F3(){return om||(om=1),rm}var um;function W3(){return um||(um=1,(function(a){Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"Carousel",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(a,"CarouselProps",{enumerable:!0,get:function(){return u.CarouselProps}}),Object.defineProperty(a,"Thumbs",{enumerable:!0,get:function(){return o.default}});var l=c(J3()),u=F3(),o=c(nv());function c(f){return f&&f.__esModule?f:{default:f}}})(Qc)),Qc}var P3=W3();const I3=K5`
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
`,e4=w.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(2, 6, 23, 0.08);
`,t4=w.div`
  position: relative;
  aspect-ratio: 1 / 1; /* Instagram square */
  background: #f1f5f9;
`,n4=w.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,a4=w.div`
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
`,i4=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`,l4=w.div`
  display: flex;
  gap: 12px;
`,r4=w.button`
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
`,Do=w.button`
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
`,o4=w.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,u4=w.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,s4=w.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,c4=w.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,f4=w.span`
  font-weight: 600;
  color: #0f172a;
`,d4=w.span`
  font-size: 12px;
  color: #64748b;
`;function p4({avatarSrc:a=hu.teacherProfilePic,data:l,likedDefault:u=!1,savedDefault:o=!1,onLikeChange:c,onBookmarkChange:f,onShare:h}){const{title:y="Infographic Title",description:g="",carouselImgSrc:m=[]}=l||{},[b,S]=x.useState(0),[E,D]=x.useState(u),[R,$]=x.useState(o),B=E?"Unlike post":"Like post",V=R?"Remove bookmark":"Bookmark",O=()=>{const M=!E;D(M),c&&c(M)},A=()=>{const M=!R;$(M),f&&f(M)},U=x.useMemo(()=>({title:y,text:`${y}`,url:typeof window<"u"?window.location.href:""}),[y]),N=async()=>{try{navigator.share?await navigator.share(U):navigator.clipboard&&(await navigator.clipboard.writeText(U.url),alert("Link copied to clipboard")),h&&h(U)}catch(M){console.error("Share failed:",M)}};return!m||m.length===0?null:d.jsxs(e4,{role:"article","aria-label":`${y} – Instagram multi-image post`,children:[d.jsxs(o4,{children:[d.jsxs(u4,{children:[d.jsx(s4,{src:a,alt:"avatar"}),d.jsxs(c4,{children:[d.jsx(f4,{children:y}),d.jsx(d4,{children:g})]})]}),d.jsx(r4,{"aria-label":"Post menu",title:"More",children:d.jsx(Vg,{size:18})})]}),d.jsx(I3,{}),d.jsxs(t4,{children:[d.jsx(P3.Carousel,{showThumbs:!1,showIndicators:!0,showStatus:!1,showArrows:!1,infiniteLoop:!1,autoPlay:!1,swipeable:!0,emulateTouch:!0,transitionTime:350,selectedItem:b,onChange:S,dynamicHeight:!1,children:m.map((M,J)=>d.jsx("div",{children:d.jsx(n4,{src:M,alt:`${y} — ${J+1}`})},J))}),d.jsxs(a4,{children:[b+1,"/",m.length]})]}),d.jsxs(i4,{children:[d.jsxs(l4,{children:[d.jsx(Do,{onClick:O,"aria-label":B,title:B,children:E?d.jsx(Zf,{size:22}):d.jsx(Jf,{size:22})}),d.jsx(Do,{"aria-label":"Comment",title:"Comment",children:d.jsx(Pf,{size:20})}),d.jsx(Do,{onClick:N,"aria-label":"Share",title:"Share",children:d.jsx(If,{size:20})})]}),d.jsx(Do,{onClick:A,"aria-label":V,title:V,children:R?d.jsx(Ff,{size:20}):d.jsx(Wf,{size:20})})]})]})}const h4=w.article`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.12);
`,m4=w.div`
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
`,g4=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`,v4=w.div`
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
`,y4=w.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,x4=w.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,b4=w.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,S4=w.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,w4=w.span`
  font-weight: 600;
  color: #0f172a;
`,E4=w.span`
  font-size: 12px;
  color: #64748b;
`,C4=w.button`
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
`;function j4({avatarSrc:a=hu.teacherProfilePic,data:l,likedDefault:u=!1,savedDefault:o=!1,onLikeChange:c,onBookmarkChange:f,onShare:h}){const y=l?.videoClipSrc||l?.vedioClipSrc,{title:g,description:m,poster:b}=l||{},[S,E]=x.useState(u),[D,R]=x.useState(o),$=S?"Unlike post":"Like post",B=D?"Remove bookmark":"Bookmark",V=x.useRef(null),O=()=>{const N=!S;E(N),c&&c(N)},A=()=>{const N=!D;R(N),f&&f(N)},U=async()=>{const N={title:g||"Check this video",text:m||"",url:typeof window<"u"&&window.location?.href||(l?.url??"")};try{typeof navigator<"u"&&navigator.share?await navigator.share(N):typeof navigator<"u"&&navigator.clipboard&&N.url&&(await navigator.clipboard.writeText(N.url),alert("Link copied to clipboard")),h&&h(N)}catch(M){console.log(M)}};return x.useEffect(()=>{const N=V.current;if(!N)return;(async()=>{try{await N.play()}catch{}})()},[y]),y?d.jsxs(h4,{"aria-label":"Video post",children:[d.jsxs(y4,{children:[d.jsxs(x4,{children:[d.jsx(b4,{src:a,alt:"Author avatar"}),d.jsxs(S4,{children:[d.jsx(w4,{children:g}),d.jsx(E4,{children:m})]})]}),d.jsx(C4,{"aria-label":"Post menu",title:"More options",children:d.jsx(Vg,{size:18})})]}),d.jsx(m4,{children:d.jsx("video",{ref:V,src:y,controls:!0,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",poster:b,"aria-label":g||"Video clip"})}),d.jsxs(g4,{children:[d.jsxs(v4,{children:[d.jsx(ko,{onClick:O,"aria-label":$,title:$,children:S?d.jsx(Zf,{size:22}):d.jsx(Jf,{size:22})}),d.jsx(ko,{"aria-label":"Comment",title:"Comment",children:d.jsx(Pf,{size:20})}),d.jsx(ko,{onClick:U,"aria-label":"Share",title:"Share",children:d.jsx(If,{size:20})})]}),d.jsx(ko,{onClick:A,"aria-label":B,title:B,children:D?d.jsx(Ff,{size:20}):d.jsx(Wf,{size:20})})]})]}):null}const T4=[{id:1,name:"Sense of Collective Identity",img:Oo.CollectiveIdentity||"https://images.unsplash.com/photo-1506765515384-028b60a970df?w=400&h=400&fit=crop",hasNew:!0,slides:[v3.test,"https://images.unsplash.com/photo-1554189097-ffe88e998a2b?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602524811998-8b90d1d03663?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1505066836043-7d9b15a1595d?w=800&h=1400&fit=crop"]},{id:2,name:"Understanding Diversity",img:Oo.Diversity||"https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1581091226825-c6a76aa2f4c1?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&h=1400&fit=crop"]},{id:3,name:"Nationalism in India",img:Oo.Nationalism||"https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1524310393100-34cb9cd27f1e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1533199829561-72f88a8f0c56?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602451126518-9b36f1b23543?w=800&h=1400&fit=crop"]},{id:4,name:"Globalisation and the Indian Economy",img:Oo.Globalisation||"https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1565372918675-bacb79cdd3a5?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&h=1400&fit=crop"]}];function R4({isOpen:a,activeIndex:l,setActiveIndex:u,total:o,onClose:c,duration:f=3e3}){const h=x.useRef(Date.now()),y=x.useRef(),g=x.useRef(0),m=x.useCallback(()=>{const S=Date.now()-h.current,E=Math.min(1,S/f);g.current=E,E>=1?l<o-1?u(D=>D+1):c():y.current=requestAnimationFrame(m)},[l,o,f,c,u]);return x.useEffect(()=>{if(a)return h.current=Date.now(),y.current=requestAnimationFrame(m),()=>cancelAnimationFrame(y.current)},[a,l,m]),{resetTimer:x.useCallback(()=>{h.current=Date.now()},[]),getProgressValue:()=>g.current}}const M4=w.div``,z4=w.div`
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
`,O4=w.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 16px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,A4=w.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border: 0;
  background: transparent;
  cursor: pointer;
`,_4=w.div`
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
`,N4=w.div`
  background: #fff;
  padding: 3px;
  border-radius: 999px;
`,D4=w.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 999px;
  user-drag: none;
  -webkit-user-drag: none;
`,k4=w.span`
  font-size: 12px;
  color: #1f2937;
  max-width: 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,L4=w.div`
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
`,$4=w.div`
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
`,B4=w.div`
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
`,U4=w.div`
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
`,H4=w.div`
  height: 3px;
  flex: 1;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    height: 2.5px;
  }
`,q4=w.div`
  height: 100%;
  background: linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.95) 100%);
  transition: width 100ms linear;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
`,Y4=w.div`
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
`,G4=w.img`
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
`,X4=w.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
`,V4=w.div`
  font-weight: 700;
  font-size: clamp(13px, 2.2vw, 15px);
  line-height: 1.2;
  letter-spacing: -0.01em;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,K4=w.div`
  font-size: clamp(11px, 1.8vw, 13px);
  opacity: 0.85;
  line-height: 1.2;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,Q4=w.button`
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
`,Z4=w.img`
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
`,sm=w.div`
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
`;function J4(a){return Te({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1.47978 1.4797C1.30227 1.65721 1.28614 1.93498 1.43137 2.13072L1.47978 2.1868L4.1695 4.87652C2.88817 5.77616 1.93052 7.11985 1.53259 8.70952C1.46554 8.97738 1.62834 9.24892 1.89621 9.31598C2.16409 9.38298 2.4356 9.22025 2.50266 8.95232C2.85564 7.54225 3.72742 6.35956 4.88944 5.59626L6.09586 6.80278C5.62419 7.28378 5.33334 7.94278 5.33334 8.66965C5.33334 10.1424 6.52724 11.3363 8 11.3363C8.72694 11.3363 9.38587 11.0454 9.86694 10.5738L13.8131 14.5201C14.0084 14.7154 14.3249 14.7154 14.5202 14.5201C14.6977 14.3426 14.7139 14.0649 14.5686 13.8691L14.5202 13.813L10.4445 9.73692L10.4453 9.73592L9.64527 8.93732L7.732 7.02445L7.73334 7.02392L5.81252 5.10513L5.81334 5.10392L5.05782 4.35024L2.18689 1.4797C1.99163 1.28444 1.67504 1.28444 1.47978 1.4797ZM6.80274 7.51025L9.15947 9.86698C8.85947 10.1575 8.4506 10.3363 8 10.3363C7.07954 10.3363 6.33334 9.59012 6.33334 8.66965C6.33334 8.21905 6.51216 7.81018 6.80274 7.51025ZM8 3.66658C7.33314 3.66658 6.68607 3.7653 6.07406 3.94992L6.89874 4.77404C7.25594 4.70346 7.62427 4.66658 8 4.66658C10.6154 4.66658 12.8733 6.45342 13.4981 8.95538C13.565 9.22325 13.8364 9.38618 14.1043 9.31932C14.3723 9.25238 14.5352 8.98098 14.4683 8.71305C13.7329 5.7684 11.077 3.66658 8 3.66658ZM8.1298 6.0061L10.664 8.53992C10.5961 7.16865 9.49814 6.07168 8.1298 6.0061Z"},child:[]}]})(a)}function F4({currentItem:a,isOpen:l,slideIndex:u,setSlideIndex:o,onClose:c,duration:f=3e3}){const h=a?.slides?.length||0,{resetTimer:y,getProgressValue:g}=R4({isOpen:l,activeIndex:u,setActiveIndex:o,total:h,onClose:c,duration:f}),m=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[,b]=x.useState(0);x.useEffect(()=>{if(!l||m)return;let R;const $=()=>{b(B=>B+1),R=requestAnimationFrame($)};return R=requestAnimationFrame($),()=>cancelAnimationFrame(R)},[l,m]);const S=x.useCallback(()=>{a&&(u<h-1?(o(R=>R+1),y()):c())},[a,u,h,y,c,o]),E=x.useCallback(()=>{a&&(u>0?(o(R=>R-1),y()):c())},[a,u,y,c,o]);x.useEffect(()=>{const R=$=>{l&&($.key==="Escape"&&c(),$.key==="ArrowRight"&&S(),$.key==="ArrowLeft"&&E())};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[l,S,E,c]),x.useEffect(()=>(l?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[l]);const D=R=>R<u?1:R>u?0:g();return!l||!a?null:d.jsx(L4,{onClick:c,"aria-label":"Story overlay",children:d.jsx($4,{onClick:R=>R.stopPropagation(),children:d.jsxs(B4,{children:[d.jsx(U4,{"aria-label":"Story progress",children:a.slides.map((R,$)=>d.jsx(H4,{"aria-label":`Progress track ${$+1}`,children:d.jsx(q4,{style:{width:`${D($)*100}%`}})},$))}),d.jsxs(Y4,{children:[d.jsx(G4,{src:a.img,alt:a.name}),d.jsxs(X4,{children:[d.jsx(V4,{children:a.name}),d.jsx(K4,{children:"Chapter highlight"})]}),d.jsx(Q4,{"aria-label":"Close story",onClick:c,title:"Close",children:d.jsx(J4,{})})]}),a.slides.map((R,$)=>d.jsx(Z4,{src:R,alt:`Slide ${$+1}`,$active:$===u,draggable:!1},$)),d.jsx(sm,{$side:"left",onClick:E,"aria-label":"Previous slide"}),d.jsx(sm,{$side:"right",onClick:S,"aria-label":"Next slide"})]})})})}function W4({items:a,duration:l=3e3,onOpen:u,onClose:o,className:c}){const f=x.useRef(null),h=x.useRef(!1),y=x.useRef(0),g=x.useRef(0),[m,b]=x.useState(a||[]),[S,E]=x.useState(null),[D,R]=x.useState(0),$=m.find(M=>M.id===S)||null,B=!!S,V=M=>{R(0),E(M),b(J=>J.map(X=>X.id===M?{...X,hasNew:!1}:X)),u&&u(M)},O=()=>{E(null),o&&o()},A=M=>{h.current=!0,y.current=M.clientX,g.current=f.current?.scrollLeft||0,M.target.setPointerCapture?.(M.pointerId)},U=M=>{if(!h.current||!f.current)return;const J=M.clientX-y.current;f.current.scrollLeft=g.current-J},N=()=>{h.current=!1};return d.jsxs(M4,{className:c,children:[d.jsx(z4,{children:d.jsx(O4,{ref:f,onPointerDown:A,onPointerMove:U,onPointerUp:N,onPointerLeave:N,"aria-label":"Stories scroller",children:m.map(M=>d.jsxs(A4,{onClick:()=>V(M.id),"aria-label":`Open story ${M.name}`,title:M.name,children:[d.jsx(_4,{$hasNew:M.hasNew,children:d.jsx(N4,{children:d.jsx(D4,{src:M.img,alt:M.name,draggable:!1})})}),d.jsx(k4,{children:M.name})]},M.id))})}),d.jsx(F4,{currentItem:$,isOpen:B,slideIndex:D,setSlideIndex:R,onClose:O,duration:l})]})}const P4=[{id:1,type:"infografic",title:"Sense of Collective Identity - Overview",description:"An overview of how shared history, culture, and values shape collective identity in society.",imgSrc:sn.Slide1},{id:2,type:"carousel",title:"Understanding Collective Identity",description:"Exploring the roots and importance of collective identity in social cohesion.",carouselImgSrc:[sn.Slide2,sn.Slide3,sn.Slide4,sn.Slide5,sn.Slide6]},{id:3,type:"carousel",title:"Symbols and Shared Culture",description:"How flags, festivals, and traditions represent unity and belonging.",carouselImgSrc:[sn.Slide7,sn.Slide8,sn.Slide9]},{id:5,type:"vedioClip",title:"Collective Identity in Action",description:"A short video summarizing real-world examples of collective identity shaping societies.",vedioClipSrc:g3.videoClip1},{id:6,type:"infografic",title:"Sense of Collective Identity - Overview",description:"An overview of how shared history, culture, and values shape collective identity in society.",imgSrc:sn.Slide5}],I4=w.div`
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
`;function e6(){return x.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]),d.jsxs(d.Fragment,{children:[d.jsx(W4,{items:T4,duration:3e3,onOpen:a=>console.log("opened:",a),onClose:()=>console.log("closed")}),d.jsx(I4,{children:d.jsx("div",{className:"d-flex gap-3 flex-column align-items-center mt-3",children:P4.map(a=>d.jsx("div",{style:{width:"100%"},children:a.type==="infografic"?d.jsx(q3,{title:a.title,description:a.description,imgSrc:a.imgSrc,badge:a.badge}):a.type==="carousel"?d.jsx(p4,{data:a}):a.type==="vedioClip"?d.jsx(j4,{data:a}):null},a.id))})})]})}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n6=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,u,o)=>o?o.toUpperCase():u.toLowerCase()),cm=a=>{const l=n6(a);return l.charAt(0).toUpperCase()+l.slice(1)},iv=(...a)=>a.filter((l,u,o)=>!!l&&l.trim()!==""&&o.indexOf(l)===u).join(" ").trim(),a6=a=>{for(const l in a)if(l.startsWith("aria-")||l==="role"||l==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i6={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=x.forwardRef(({color:a="currentColor",size:l=24,strokeWidth:u=2,absoluteStrokeWidth:o,className:c="",children:f,iconNode:h,...y},g)=>x.createElement("svg",{ref:g,...i6,width:l,height:l,stroke:a,strokeWidth:o?Number(u)*24/Number(l):u,className:iv("lucide",c),...!f&&!a6(y)&&{"aria-hidden":"true"},...y},[...h.map(([m,b])=>x.createElement(m,b)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=(a,l)=>{const u=x.forwardRef(({className:o,...c},f)=>x.createElement(l6,{ref:f,iconNode:l,className:iv(`lucide-${t6(cm(a))}`,`lucide-${a}`,o),...c}));return u.displayName=cm(a),u};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],o6=ht("atom",r6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Di=ht("book-open",u6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],c6=ht("bookmark",s6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],d6=ht("calculator",f6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],h6=ht("check",p6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],g6=ht("chevron-right",m6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],y6=ht("circle-check-big",v6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],b6=ht("code",x6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],fm=ht("flask-conical",S6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],dm=ht("graduation-cap",w6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],pm=ht("globe",E6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],j6=ht("grid-3x3",C6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],R6=ht("languages",T6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Lo=ht("lock",M6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z6=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],O6=ht("sparkles",z6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],_6=ht("x",A6),it={bgGrad:"linear-gradient(135deg, #8be3f5 0%, #9fefd0 50%, #b5f8b5 100%)",glass:"rgba(255,255,255,0.94)",border:"rgba(255,255,255,0.9)",text:"#0f172a",subtext:"#64748b",primary:"#0EA5E9",success:"#22c55e",shadow:"0 20px 60px rgba(0,0,0,0.15)",ring:"rgba(14,165,233,0.12)"},N6=Ft`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(30px, -30px) rotate(5deg); }
  50% { transform: translate(-20px, -50px) rotate(-5deg); }
  75% { transform: translate(40px, -20px) rotate(3deg); }
`,D6=Ft`0%,100%{opacity:.2}50%{opacity:.4}`,k6=Ft`0%,49%{opacity:1}50%,100%{opacity:0}`,L6=w.div`
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${it.bgGrad};
  font-family: "Inter", system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  padding: 1rem;
`,Pc=w.div`
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
  animation: ${D6} ${({$duration:a})=>a}s infinite ease-in-out;
  animation-delay: ${({$delay:a})=>a}s;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`,$6=w.div`
  position: absolute;
  opacity: 0.18;
  animation: ${N6} ${({$duration:a})=>a}s infinite ease-in-out;
  animation-delay: ${({$delay:a})=>a}s;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`,B6=w.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 100%;
`,U6=w.div`
  width: 100%;
  max-width: 980px;
`,lv=w.div`
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
`,H6=w(lv)`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`,q6=w.div`
  text-align: center;
  margin-bottom: 1.25rem;
  display: grid;
  gap: 0.75rem;
  justify-items: center;
  @media (min-width: 768px) {
    margin-bottom: 2rem;
    gap: 1rem;
  }
`,Y6=w.h1`
  font-size: clamp(1.4rem, 5.2vw, 2.4rem);
  font-weight: 900;
  line-height: 1.15;
  color: ${it.text};
  margin: 0;
`,G6=w.span`
  background: linear-gradient(135deg, ${it.primary}, ${it.success});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 0.2px;
`,X6=w.span`
  &::after {
    content: "|";
    animation: ${k6} 1s infinite;
    margin-left: 4px;
  }
`,hm=w.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`,mm=w.div`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 999px;
  background: linear-gradient(135deg, ${it.primary} 0%, ${it.success} 100%);
  display: grid;
  place-items: center;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 8px 24px rgba(14, 165, 233, 0.25);
`,gm=w.div`
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
`,V6=w.div`
  position: relative;
`,K6=w.select`
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
`,vm=w.div`
  display: grid;
  gap: 1.25rem;
`,Q6=w.div`
  display: grid;
  gap: 0.9rem;
  grid-template-columns: 1fr;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Z6=w.div`
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
`,J6=w.div`
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
`,F6=w.div`
  margin-top: 0.35rem;
  padding-top: 0.5rem;
  border-top: 1px dashed rgba(0, 0, 0, 0.12);
  ${({$selected:a})=>a&&"border-top-color: rgba(0,0,0,.35);"}
`,W6=w.div`
  display: flex;
  flex-direction:column;
  flex-wrap: wrap;
  gap: 0.4rem;
`,P6=w.button`
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
`;function I6(){const a=Lf(),[l,u]=x.useState(""),[o,c]=x.useState(""),[f,h]=x.useState(""),[y,g]=x.useState(0),[m,b]=x.useState(!1),[S,E]=x.useState(0),D=["Achieve Excellence","Master Every Subject","Unlock Your Potential"];x.useEffect(()=>{const U=m?40:80,N=2e3,M=setTimeout(()=>{const J=D[y];if(!m&&S===J.length){setTimeout(()=>b(!0),N);return}if(m&&S===0){b(!1),g(X=>(X+1)%D.length);return}E(X=>X+(m?-1:1)),h(J.substring(0,S+(m?-1:1)))},U);return()=>clearTimeout(M)});const R={"Grade 9":{subjects:{English:["Ms. Priya Sharma","Mr. Vivek Sinha","Ms. Ritu Malhotra"],Mathematics:["Mr. Rajesh Kumar","Ms. Neha Gupta","Mr. Ankit Jain"],Science:["Ms. Anjali Mehta","Mr. Suresh Iyer","Ms. Pooja Khanna"],"Social Studies":["Siddharth Sir","Ms. Ananya Bose","Mr. Harish Nanda"],Hindi:["Ms. Kavita Reddy","Mr. Manoj Tiwari","Ms. Poonam Joshi"],"Computer Science":["Mr. Arvind Nair","Ms. Shruti Desai","Mr. Kunal Shah"]}},"Grade 10":{subjects:{English:["Ms. Sunita Verma","Mr. Ashish Bhatia","Ms. Riya Kapoor"],Mathematics:["Mr. Rohan Patel","Ms. Priyanka Das","Mr. Sanjay Kulkarni"],Science:["Ms. Anjali Mehta","Mr. Amit Chakraborty","Ms. Meera Nambiar"],"Social Studies":["Siddharth Sir","Ms. Nidhi Arora","Mr. Parth Ghosh"],Hindi:["Ms. Kavita Reddy","Mr. Ajay Sharma","Ms. Shalini Tripathi"],"Computer Science":["Mr. Arvind Nair","Ms. Tanvi Kulkarni","Mr. Rohit Menon"]}},"Grade 11":{subjects:{English:["Ms. Priya Sharma","Mr. Karan Malhotra","Ms. Deepa Rao"],Physics:["Mr. Nitin Agarwal","Ms. Rachna Bansal","Mr. Vivek Mishra"],Chemistry:["Ms. Sneha Kapoor","Mr. Aditya Mehta","Ms. Nupur Jain"],Biology:["Siddharth Sir","Ms. Radhika Sen","Mr. Mohan Pillai"],Mathematics:["Mr. Deepak Rao","Ms. Shreya Iyer","Mr. Varun Sethi"],"Computer Science":["Mr. Arvind Nair","Ms. Naina Khatri","Mr. Prateek Verma"]}},"Grade 12":{subjects:{English:["Ms. Sunita Verma","Mr. Aalok Trivedi","Ms. Garima Singh"],Physics:["Mr. Nitin Agarwal","Ms. Priti Saxena","Mr. Keshav Reddy"],Chemistry:["Ms. Sneha Kapoor","Mr. Rohan Mukherjee","Ms. Farah Qureshi"],Biology:["Siddharth Sir","Ms. Neelam Vaidya","Mr. Sameer Kulkarni"],Mathematics:["Mr. Deepak Rao","Ms. Ishita Shah","Mr. Yashwant Kumar"],"Computer Science":["Mr. Arvind Nair","Ms. Pallavi Menon","Mr. Siddharth Jain"]}}},$={English:Di,Mathematics:d6,Science:fm,Physics:o6,Chemistry:fm,Biology:pm,"Social Studies":pm,Hindi:R6,"Computer Science":b6},B=l?Object.keys(R[l].subjects):[],V=U=>c(U),O=(U,N)=>{(U.key==="Enter"||U.key===" ")&&(U.preventDefault(),V(N))},A=U=>{!l||!o||a("/instalearn/teacher",{state:{grade:l,subject:o,teacher:U}})};return d.jsxs(L6,{children:[d.jsx(Pc,{$color:"rgba(255,255,255,0.16)",$size:520,$top:"-12%",$right:"-6%",$duration:8,$delay:0}),d.jsx(Pc,{$color:"rgba(255,255,255,0.1)",$size:640,$bottom:"-16%",$left:"-8%",$duration:10,$delay:3}),d.jsx(Pc,{$color:"rgba(255,255,255,0.12)",$size:420,$top:"42%",$left:"48%",$duration:12,$delay:6}),[...Array(7)].map((U,N)=>d.jsx($6,{$duration:9+N*2,$delay:N*.7,style:{left:`${10+N*12}%`,top:`${18+N*9}%`},children:N%2?d.jsx(dm,{size:30,color:"rgba(255,255,255,0.5)"}):d.jsx(O6,{size:30,color:"rgba(255,255,255,0.5)"})},N)),d.jsx(B6,{children:d.jsxs(U6,{children:[d.jsx(q6,{children:d.jsx(Y6,{children:d.jsx(G6,{children:d.jsx(X6,{children:f})})})}),d.jsxs(H6,{children:[d.jsxs(vm,{children:[d.jsxs(hm,{children:[d.jsx(mm,{children:d.jsx(dm,{size:18})}),d.jsxs(gm,{children:[d.jsx("h2",{children:"Select Your Grade"}),d.jsx("p",{children:"Pick a class to view the available subjects"})]})]}),d.jsxs(V6,{children:[d.jsxs(K6,{value:l,onChange:U=>{u(U.target.value),c("")},children:[d.jsx("option",{value:"",disabled:!0,children:"Select Grade"}),Object.keys(R).map(U=>d.jsx("option",{value:U,children:U},U))]}),l&&d.jsx(y6,{size:20,style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",color:it.success}})]})]}),d.jsxs(vm,{children:[d.jsxs(hm,{children:[d.jsx(mm,{children:d.jsx(Di,{size:18})}),d.jsxs(gm,{children:[d.jsx("h2",{children:"Choose a Subject"}),d.jsx("p",{children:"Click a teacher to open their profile"})]})]}),B.length?d.jsx(Q6,{children:B.map(U=>{const N=$[U]||Di,M=o===U,J=R[l].subjects[U],X=Array.isArray(J)?J:[J];return d.jsxs(Z6,{role:"button",tabIndex:0,"aria-pressed":M,$selected:M,onClick:()=>V(U),onKeyDown:Z=>O(Z,U),"aria-label":`Open ${U}`,children:[d.jsxs(J6,{children:[d.jsx("span",{children:U}),d.jsx("div",{className:"icon",children:d.jsx(N,{size:18})})]}),d.jsx(F6,{$selected:M,children:M?d.jsx(W6,{children:X.map(Z=>d.jsx(P6,{$inSelected:!0,onClick:oe=>{oe.stopPropagation(),A(Z)},onKeyDown:oe=>{(oe.key==="Enter"||oe.key===" ")&&(oe.preventDefault(),oe.stopPropagation(),A(Z))},children:Z},Z))}):d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,color:"#475569",fontWeight:700,fontSize:".86rem"},children:[d.jsx("span",{children:"View teachers"})," ",d.jsx(g6,{size:16})]})})]},U)})}):d.jsxs(lv,{style:{display:"flex",flexDirection:"column",textAlign:"center",borderStyle:"dashed",alignItems:"center",justifyContent:"center"},children:[d.jsx(Di,{size:36,color:"#94a3b8"}),d.jsx("p",{style:{color:it.subtext,fontWeight:600,marginTop:8},children:"Please select a grade to view subjects."})]})]})]})]})})]})}function ym(a){return Te({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"},child:[]}]})(a)}function $o(a){return Te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(a)}function er(a){return Te({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(a)}function eS(a){return Te({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(a)}function xm(a){return Te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(a)}function bm(a){return Te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(a)}function Sm(a){return Te({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(a)}function tS(a){return Te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(a)}function wm(a){return Te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(a)}function Em(a){return Te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"},child:[]}]})(a)}function Cm(a){return Te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(a)}function Bo(a){return Te({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(a)}function Uo(a){return Te({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(a)}function nS(a){return Te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(a)}const aS=Ft`
  from { opacity: 0; transform: translateY(32px); }
  to { opacity: 1; transform: translateY(0); }
`,rv=Ft`
  from { opacity: 0; }
  to { opacity: 1; }
`,iS=Ft`
  from { opacity: 0; transform: translate(-50%, -48%) scale(0.95); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
`,ov=Ft`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`,re={bgSecondary:"#FFFFFF",card:"#FFFFFF",cardHover:"#F8FAFC",text:"#0F172A",subtext:"#64748B",primary:"#0EA5E9",accent:"#06B6D4",accentGreen:"#10B981",border:"#E2E8F0",borderLight:"#CBD5E1",shadow:"0 20px 50px rgba(0, 0, 0, 0.08)",overlay:"rgba(15, 23, 42, 0.5)"},lS=w.div`
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
    animation: ${ov} 20s ease-in-out infinite;
    pointer-events: none;
  }
`,rS=w.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${aS} 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  z-index: 1;
`,td=w.div`
  background: ${re.card};
  border: 1px solid ${re.border};
  border-radius: 24px;
  box-shadow: ${re.shadow};
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,jm=w.div`
  position: fixed;
  inset: 0;
  background: ${re.overlay};
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rv} 0.2s ease-out;
`,Tm=w.div`
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
  animation: ${iS} 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1001;

  @media (max-width: 640px) {
    padding: 24px;
  }
`,Rm=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,Mm=w.h2`
  font-size: 24px;
  font-weight: 800;
  color: ${re.text};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
`,zm=w.button`
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
`,Om=w.select`
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
`,Am=w.div`
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
`,oS=w(td)`
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
`,uS=w.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: 28px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 20px;
  }
`,sS=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`,cS=w.div`
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
`,fS=w.div`
  display: grid;
  gap: 24px;
`,dS=w.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,pS=w.div`
  display: grid;
  gap: 8px;
`,hS=w.h1`
  font-size: 32px;
  font-weight: 800;
  color: ${re.text};
  margin: 0;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`,mS=w.p`
  color: ${re.subtext};
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`,gS=w.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`,_m=w.button`
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
`,vS=w.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ic=w.div`
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
`,ef=w.div`
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, ${re.primary}, ${re.accentGreen});
  color: #fff;
  font-size: 24px;
  box-shadow: 0 8px 16px rgba(14, 165, 233, 0.25);
`,tf=w.div`
  display: grid;
  gap: 4px;
  flex: 1;
`,nf=w.span`
  font-weight: 800;
  font-size: 28px;
  color: ${re.text};
  line-height: 1;
`,af=w.span`
  font-size: 13px;
  color: ${re.subtext};
  font-weight: 500;
`,lf=w.div`
  color: #F59E0B;
  font-size: 20px;
`,yS=w.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 24px 0;
`,Nm=w.button`
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
`,Dm=w(td)`
  padding: 24px;
  animation: ${rv} 0.5s ease-out;
`,uv=w.div`
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
`,xS=w.div`
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
`,bS=w.div`
  display: grid;
  gap: 10px;
`,SS=w.h3`
  margin: 0;
  color: ${re.text};
  font-size: 18px;
  font-weight: 700;
`,wS=w.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  font-size: 13px;
  color: ${re.subtext};
`,rf=w.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
`,ES=w.div`
  width: 100%;
  max-width: 200px;
  height: 8px;
  background: #E2E8F0;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid ${re.border};
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
`,CS=w.div`
  height: 100%;
  width: ${a=>Math.min(Math.max(a.value,0),100)}%;
  background: linear-gradient(90deg, ${re.primary}, ${re.accentGreen});
  border-radius: 999px;
  transition: width 0.5s ease;
  box-shadow: 0 0 10px rgba(14, 165, 233, 0.4);
`,jS=w(eS)`
  color: ${re.subtext};
  font-size: 20px;
  transition: all 0.3s ease;

  ${uv}:hover & {
    color: ${re.primary};
    transform: translateX(4px);
  }

  @media (max-width: 640px) {
    display: none;
  }
`,km=w.div`
  text-align: center;
  padding: 64px 20px;
  color: ${re.subtext};
`,Lm=w.div`
  font-size: 72px;
  margin-bottom: 16px;
  opacity: 0.3;
  animation: ${ov} 3s ease-in-out infinite;
`,$m=w.h3`
  color: ${re.text};
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 8px 0;
`,Bm=w.p`
  margin: 0;
  font-size: 15px;
`,TS=w.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
`,RS=w(td)`
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
`,MS=w.div`
  font-weight: 700;
  font-size: 16px;
  color: ${re.text};
  display: inline-flex;
  align-items: center;
  gap: 10px;

  svg {
    color: ${re.primary};
  }
`,zS=w.div`
  font-size: 13px;
  color: ${re.subtext};
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
`,OS=w.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`,Um=w.button`
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
`;function AS(){const[a,l]=x.useState("history"),[u,o]=x.useState(!1),[c,f]=x.useState(!1),[h,y]=x.useState({name:"Priya Sharma",email:"priya.sharma@example.com",avatar:"PS",booksRead:24,hoursSpent:156,favoriteTeacher:"Ms. Sarah"}),[g,m]=x.useState({...h}),[b,S]=x.useState("light"),[E,D]=x.useState("all");x.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]);const R=[{id:1,title:"Sense of Collective Identity",teacher:"Mr. Arjun Mehta",time:"2 hours ago",progress:75,icon:d.jsx(er,{})},{id:2,title:"Understanding Diversity",teacher:"Ms. Nisha Rao",time:"Yesterday",progress:45,icon:d.jsx($o,{})},{id:3,title:"Nationalism in India",teacher:"Dr. Kavita Iyer",time:"2 days ago",progress:90,icon:d.jsx(wm,{})},{id:4,title:"Democracy & Rights",teacher:"Prof. R. Menon",time:"1 week ago",progress:100,icon:d.jsx(Em,{})}],$=[{id:"f1",title:"Globalisation & Indian Economy",by:"Siddharth Sir",reads:12},{id:"f2",title:"Federalism Basics",by:"Anita Ma'am",reads:9},{id:"f3",title:"Judiciary: Structure",by:"R. Sharma",reads:14},{id:"f4",title:"Gender, Religion & Caste",by:"S. Verma",reads:7}],B=()=>{y({...g}),o(!1)},V=(A,U)=>{m({...g,[A]:U})},O=(A,U)=>{(A.key==="Enter"||A.key===" ")&&A.preventDefault()};return d.jsxs(lS,{$theme:b,children:[d.jsxs(rS,{children:[d.jsx(oS,{children:d.jsxs(uS,{children:[d.jsx(sS,{children:d.jsx(cS,{"aria-label":"User avatar",children:d.jsx(nS,{size:32})})}),d.jsxs(fS,{children:[d.jsxs(dS,{children:[d.jsxs(pS,{children:[d.jsx(hS,{children:h.name}),d.jsx(mS,{children:h.email})]}),d.jsxs(gS,{children:[d.jsxs(_m,{type:"button","aria-label":"Edit profile",onClick:()=>{m(h),o(!0)},children:[d.jsx(Sm,{})," ",d.jsx("span",{children:"Edit"})]}),d.jsxs(_m,{type:"button","aria-label":"Settings",onClick:()=>f(!0),children:[d.jsx(bm,{})," ",d.jsx("span",{children:"Settings"})]})]})]}),d.jsxs(vS,{children:[d.jsxs(Ic,{children:[d.jsx(ef,{"aria-hidden":"true",children:d.jsx($o,{})}),d.jsxs(tf,{children:[d.jsx(nf,{children:h.booksRead}),d.jsx(af,{children:"Books Read"})]}),d.jsx(lf,{title:"Lifetime reads",children:d.jsx(Em,{})})]}),d.jsxs(Ic,{children:[d.jsx(ef,{"aria-hidden":"true",children:d.jsx(xm,{})}),d.jsxs(tf,{children:[d.jsx(nf,{children:h.hoursSpent}),d.jsx(af,{children:"Study Hours"})]}),d.jsx(lf,{title:"Consistent!",children:d.jsx(Bo,{})})]}),d.jsxs(Ic,{children:[d.jsx(ef,{"aria-hidden":"true",children:d.jsx(er,{})}),d.jsxs(tf,{children:[d.jsx(nf,{children:h.favoriteTeacher}),d.jsx(af,{children:"Favourite Teacher"})]}),d.jsx(lf,{children:d.jsx(tS,{})})]})]})]})]})}),d.jsxs(yS,{children:[d.jsxs(Nm,{active:a==="history",onClick:()=>l("history"),"aria-pressed":a==="history",children:[d.jsx(wm,{})," Reading History"]}),d.jsxs(Nm,{active:a==="favorites",onClick:()=>l("favorites"),"aria-pressed":a==="favorites",children:[d.jsx(Bo,{})," Favorites"]})]}),a==="history"?d.jsx(Dm,{children:R.length>0?R.map(A=>d.jsxs(uv,{role:"button",tabIndex:0,onKeyDown:U=>O(U),onClick:()=>{},"aria-label":`Open ${A.title}`,children:[d.jsx(xS,{"aria-hidden":"true",children:A.icon}),d.jsxs(bS,{children:[d.jsx(SS,{children:A.title}),d.jsxs(wS,{children:[d.jsxs(rf,{children:[d.jsx(er,{})," ",A.teacher]}),d.jsxs(rf,{children:[d.jsx(xm,{})," ",A.time]}),d.jsxs(rf,{children:[d.jsx($o,{})," ",A.progress,"% complete"]})]}),d.jsx(ES,{"aria-hidden":"true",children:d.jsx(CS,{value:A.progress})})]}),d.jsx(jS,{})]},A.id)):d.jsxs(km,{children:[d.jsx(Lm,{children:d.jsx(ym,{})}),d.jsx($m,{children:"No history yet"}),d.jsx(Bm,{children:"Start reading to see your progress here."})]})}):d.jsx(Dm,{children:$.length>0?d.jsx(TS,{children:$.map(A=>d.jsxs(RS,{children:[d.jsxs(MS,{children:[d.jsx(ym,{})," ",A.title]}),d.jsxs(zS,{children:[d.jsxs("span",{children:["By ",A.by]}),d.jsx("span",{children:"•"}),d.jsxs("span",{children:[A.reads," reads"]})]}),d.jsxs(OS,{children:[d.jsxs(Um,{type:"button",children:[d.jsx($o,{})," Open"]}),d.jsxs(Um,{type:"button",children:[d.jsx(Bo,{})," Unfavourite"]})]})]},A.id))}):d.jsxs(km,{children:[d.jsx(Lm,{children:d.jsx(Bo,{})}),d.jsx($m,{children:"No favorites yet"}),d.jsx(Bm,{children:"Tap the star on a lesson to save it here."})]})})]}),u&&d.jsxs(d.Fragment,{children:[d.jsx(jm,{onClick:()=>o(!1)}),d.jsxs(Tm,{role:"dialog","aria-modal":"true","aria-labelledby":"editProfileTitle",children:[d.jsxs(Rm,{children:[d.jsxs(Mm,{id:"editProfileTitle",children:[d.jsx(Sm,{})," Edit Profile"]}),d.jsx(zm,{type:"button",onClick:()=>o(!1),"aria-label":"Close edit profile",children:d.jsx(Uo,{})})]}),d.jsxs(da,{children:[d.jsx(pa,{htmlFor:"name",children:"Name"}),d.jsx(Mi,{id:"name",value:g.name,onChange:A=>V("name",A.target.value)})]}),d.jsxs(da,{children:[d.jsx(pa,{htmlFor:"email",children:"Email"}),d.jsx(Mi,{id:"email",type:"email",value:g.email,onChange:A=>V("email",A.target.value)})]}),d.jsxs(da,{children:[d.jsx(pa,{htmlFor:"avatar",children:"Avatar Initials"}),d.jsx(Mi,{id:"avatar",value:g.avatar,onChange:A=>V("avatar",A.target.value)})]}),d.jsxs(da,{children:[d.jsx(pa,{htmlFor:"booksRead",children:"Books Read"}),d.jsx(Mi,{id:"booksRead",type:"number",min:0,value:g.booksRead,onChange:A=>V("booksRead",Number(A.target.value))})]}),d.jsxs(da,{children:[d.jsx(pa,{htmlFor:"hoursSpent",children:"Study Hours"}),d.jsx(Mi,{id:"hoursSpent",type:"number",min:0,value:g.hoursSpent,onChange:A=>V("hoursSpent",Number(A.target.value))})]}),d.jsxs(da,{children:[d.jsx(pa,{htmlFor:"favTeacher",children:"Favourite Teacher"}),d.jsx(Mi,{id:"favTeacher",value:g.favoriteTeacher,onChange:A=>V("favoriteTeacher",A.target.value)})]}),d.jsxs(Am,{children:[d.jsxs(Ho,{type:"button",onClick:()=>o(!1),children:[d.jsx(Uo,{})," Cancel"]}),d.jsxs(Ho,{type:"button",primary:!0,onClick:B,children:[d.jsx(Cm,{})," Save"]})]})]})]}),c&&d.jsxs(d.Fragment,{children:[d.jsx(jm,{onClick:()=>f(!1)}),d.jsxs(Tm,{role:"dialog","aria-modal":"true","aria-labelledby":"settingsTitle",children:[d.jsxs(Rm,{children:[d.jsxs(Mm,{id:"settingsTitle",children:[d.jsx(bm,{})," Settings"]}),d.jsx(zm,{type:"button",onClick:()=>f(!1),"aria-label":"Close settings",children:d.jsx(Uo,{})})]}),d.jsxs(da,{children:[d.jsx(pa,{htmlFor:"theme",children:"Theme"}),d.jsxs(Om,{id:"theme",value:b,onChange:A=>S(A.target.value),children:[d.jsx("option",{value:"light",children:"Light"}),d.jsx("option",{value:"dark",children:"Dark"})]})]}),d.jsxs(da,{children:[d.jsx(pa,{htmlFor:"notifications",children:"Notifications"}),d.jsxs(Om,{id:"notifications",value:E,onChange:A=>D(A.target.value),children:[d.jsx("option",{value:"all",children:"All activity"}),d.jsx("option",{value:"mentions",children:"Mentions only"}),d.jsx("option",{value:"none",children:"None"})]})]}),d.jsxs(Am,{children:[d.jsxs(Ho,{type:"button",onClick:()=>f(!1),children:[d.jsx(Uo,{})," Close"]}),d.jsxs(Ho,{type:"button",primary:!0,onClick:()=>f(!1),children:[d.jsx(Cm,{})," Apply"]})]})]})]})]})}const _S=Ft`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
`,NS=Ft`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,DS=Ft`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,kS=Ft`
  0% {
    width: 0%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 0%;
  }
`,LS=w.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`,$S=w.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,of=w.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: ${_S} 20s infinite ease-in-out;

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
`,BS=w.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  animation: ${NS} 0.8s ease-out;

  @media (max-width: 600px) {
    margin: 20px;
    padding: 20px 20px;
  }
`,US=w.div`
  margin-bottom: 0px;
  position: relative;
`,HS=w.div`
  font-size: 70px;
  animation: ${DS} 2s infinite;
`,qS=w.h1`
  font-size: 2.5em;
  color: #2d3748;
  margin-bottom: 10px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 2em;
  }
`,YS=w.p`
  font-size: 1.2em;
  color: #718096;
  margin-bottom: 25px;
  line-height: 1.6;
`,GS=w.div`
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`,XS=w.div`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  animation: ${kS} 3s ease-in-out infinite;
`,VS=w.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,uf=w.div`
  padding: 20px;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
  }
`,sf=w.div`
  font-size:30px;
  margin-bottom: 10px;
`,cf=w.div`
  font-size: 14px;
  color: #4a5568;
  font-weight: 600;
`,KS=w.button`
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
`;function Hm(){const[a,l]=x.useState(!1),u=()=>{l(!0),setTimeout(()=>{l(!1)},2e3)};return d.jsxs(LS,{children:[d.jsxs($S,{children:[d.jsx(of,{}),d.jsx(of,{}),d.jsx(of,{})]}),d.jsxs(BS,{children:[d.jsx(US,{children:d.jsx(HS,{children:"🚧"})}),d.jsx(qS,{children:"Building Something Amazing"}),d.jsx(YS,{children:"We're working hard to bring you an incredible new feature. Stay tuned!"}),d.jsx(GS,{children:d.jsx(XS,{})}),d.jsxs(VS,{children:[d.jsxs(uf,{children:[d.jsx(sf,{children:"⚡"}),d.jsx(cf,{children:"Lightning Fast"})]}),d.jsxs(uf,{children:[d.jsx(sf,{children:"🎨"}),d.jsx(cf,{children:"Beautiful Design"})]}),d.jsxs(uf,{children:[d.jsx(sf,{children:"🔒"}),d.jsx(cf,{children:"Secure & Private"})]})]}),d.jsx(KS,{onClick:u,$notified:a,children:a?"✓ You'll be notified!":"Notify Me When Ready"})]})]})}var QS=Ig();const lt=ir(QS);function Of(){return Of=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var o in u)({}).hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},Of.apply(null,arguments)}function sv(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)!==-1)continue;u[o]=a[o]}return u}function qm(a){return"default"+a.charAt(0).toUpperCase()+a.substr(1)}function ZS(a){var l=JS(a,"string");return typeof l=="symbol"?l:String(l)}function JS(a,l){if(typeof a!="object"||a===null)return a;var u=a[Symbol.toPrimitive];if(u!==void 0){var o=u.call(a,l);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}function FS(a,l,u){var o=x.useRef(a!==void 0),c=x.useState(l),f=c[0],h=c[1],y=a!==void 0,g=o.current;return o.current=y,!y&&g&&f!==l&&h(l),[y?a:f,x.useCallback(function(m){for(var b=arguments.length,S=new Array(b>1?b-1:0),E=1;E<b;E++)S[E-1]=arguments[E];u&&u.apply(void 0,[m].concat(S)),h(m)},[u])]}function cv(a,l){return Object.keys(l).reduce(function(u,o){var c,f=u,h=f[qm(o)],y=f[o],g=sv(f,[qm(o),o].map(ZS)),m=l[o],b=FS(y,h,a[m]),S=b[0],E=b[1];return Of({},g,(c={},c[o]=S,c[m]=E,c))},a)}function Af(a,l){return Af=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,o){return u.__proto__=o,u},Af(a,l)}function WS(a,l){a.prototype=Object.create(l.prototype),a.prototype.constructor=a,Af(a,l)}const PS=["xxl","xl","lg","md","sm","xs"],IS="xs",fv=x.createContext({prefixes:{},breakpoints:PS,minBreakpoint:IS}),{Consumer:g9,Provider:v9}=fv;function Ct(a,l){const{prefixes:u}=x.useContext(fv);return a||u[l]||l}function nd(a){return a&&a.ownerDocument||document}function e8(a){var l=nd(a);return l&&l.defaultView||window}function t8(a,l){return e8(a).getComputedStyle(a,l)}var n8=/([A-Z])/g;function a8(a){return a.replace(n8,"-$1").toLowerCase()}var i8=/^ms-/;function qo(a){return a8(a).replace(i8,"-ms-")}var l8=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function r8(a){return!!(a&&l8.test(a))}function Ln(a,l){var u="",o="";if(typeof l=="string")return a.style.getPropertyValue(qo(l))||t8(a).getPropertyValue(qo(l));Object.keys(l).forEach(function(c){var f=l[c];!f&&f!==0?a.style.removeProperty(qo(c)):r8(c)?o+=c+"("+f+") ":u+=qo(c)+": "+f+";"}),o&&(u+="transform: "+o+";"),a.style.cssText+=";"+u}var o8=Wg();const ff=ir(o8),Ym={disabled:!1},dv=Ye.createContext(null);var u8=function(l){return l.scrollTop},Pl="unmounted",ma="exited",nn="entering",Nn="entered",ar="exiting",Hn=(function(a){WS(l,a);function l(o,c){var f;f=a.call(this,o,c)||this;var h=c,y=h&&!h.isMounting?o.enter:o.appear,g;return f.appearStatus=null,o.in?y?(g=ma,f.appearStatus=nn):g=Nn:o.unmountOnExit||o.mountOnEnter?g=Pl:g=ma,f.state={status:g},f.nextCallback=null,f}l.getDerivedStateFromProps=function(c,f){var h=c.in;return h&&f.status===Pl?{status:ma}:null};var u=l.prototype;return u.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},u.componentDidUpdate=function(c){var f=null;if(c!==this.props){var h=this.state.status;this.props.in?h!==nn&&h!==Nn&&(f=nn):(h===nn||h===Nn)&&(f=ar)}this.updateStatus(!1,f)},u.componentWillUnmount=function(){this.cancelNextCallback()},u.getTimeouts=function(){var c=this.props.timeout,f,h,y;return f=h=y=c,c!=null&&typeof c!="number"&&(f=c.exit,h=c.enter,y=c.appear!==void 0?c.appear:h),{exit:f,enter:h,appear:y}},u.updateStatus=function(c,f){if(c===void 0&&(c=!1),f!==null)if(this.cancelNextCallback(),f===nn){if(this.props.unmountOnExit||this.props.mountOnEnter){var h=this.props.nodeRef?this.props.nodeRef.current:_i.findDOMNode(this);h&&u8(h)}this.performEnter(c)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ma&&this.setState({status:Pl})},u.performEnter=function(c){var f=this,h=this.props.enter,y=this.context?this.context.isMounting:c,g=this.props.nodeRef?[y]:[_i.findDOMNode(this),y],m=g[0],b=g[1],S=this.getTimeouts(),E=y?S.appear:S.enter;if(!c&&!h||Ym.disabled){this.safeSetState({status:Nn},function(){f.props.onEntered(m)});return}this.props.onEnter(m,b),this.safeSetState({status:nn},function(){f.props.onEntering(m,b),f.onTransitionEnd(E,function(){f.safeSetState({status:Nn},function(){f.props.onEntered(m,b)})})})},u.performExit=function(){var c=this,f=this.props.exit,h=this.getTimeouts(),y=this.props.nodeRef?void 0:_i.findDOMNode(this);if(!f||Ym.disabled){this.safeSetState({status:ma},function(){c.props.onExited(y)});return}this.props.onExit(y),this.safeSetState({status:ar},function(){c.props.onExiting(y),c.onTransitionEnd(h.exit,function(){c.safeSetState({status:ma},function(){c.props.onExited(y)})})})},u.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},u.safeSetState=function(c,f){f=this.setNextCallback(f),this.setState(c,f)},u.setNextCallback=function(c){var f=this,h=!0;return this.nextCallback=function(y){h&&(h=!1,f.nextCallback=null,c(y))},this.nextCallback.cancel=function(){h=!1},this.nextCallback},u.onTransitionEnd=function(c,f){this.setNextCallback(f);var h=this.props.nodeRef?this.props.nodeRef.current:_i.findDOMNode(this),y=c==null&&!this.props.addEndListener;if(!h||y){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var g=this.props.nodeRef?[this.nextCallback]:[h,this.nextCallback],m=g[0],b=g[1];this.props.addEndListener(m,b)}c!=null&&setTimeout(this.nextCallback,c)},u.render=function(){var c=this.state.status;if(c===Pl)return null;var f=this.props,h=f.children;f.in,f.mountOnEnter,f.unmountOnExit,f.appear,f.enter,f.exit,f.timeout,f.addEndListener,f.onEnter,f.onEntering,f.onEntered,f.onExit,f.onExiting,f.onExited,f.nodeRef;var y=sv(f,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Ye.createElement(dv.Provider,{value:null},typeof h=="function"?h(c,y):Ye.cloneElement(Ye.Children.only(h),y))},l})(Ye.Component);Hn.contextType=dv;Hn.propTypes={};function zi(){}Hn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:zi,onEntering:zi,onEntered:zi,onExit:zi,onExiting:zi,onExited:zi};Hn.UNMOUNTED=Pl;Hn.EXITED=ma;Hn.ENTERING=nn;Hn.ENTERED=Nn;Hn.EXITING=ar;function s8(a){return a.code==="Escape"||a.keyCode===27}function c8(){const a=x.version.split(".");return{major:+a[0],minor:+a[1],patch:+a[2]}}function Vi(a){if(!a||typeof a=="function")return null;const{major:l}=c8();return l>=19?a.props.ref:a.ref}const mu=!!(typeof window<"u"&&window.document&&window.document.createElement);var _f=!1,Nf=!1;try{var df={get passive(){return _f=!0},get once(){return Nf=_f=!0}};mu&&(window.addEventListener("test",df,df),window.removeEventListener("test",df,!0))}catch{}function f8(a,l,u,o){if(o&&typeof o!="boolean"&&!Nf){var c=o.once,f=o.capture,h=u;!Nf&&c&&(h=u.__once||function y(g){this.removeEventListener(l,y,f),u.call(this,g)},u.__once=h),a.addEventListener(l,h,_f?o:f)}a.addEventListener(l,u,o)}function d8(a,l,u,o){var c=o&&typeof o!="boolean"?o.capture:o;a.removeEventListener(l,u,c),u.__once&&a.removeEventListener(l,u.__once,c)}function iu(a,l,u,o){return f8(a,l,u,o),function(){d8(a,l,u,o)}}function p8(a,l,u,o){if(o===void 0&&(o=!0),a){var c=document.createEvent("HTMLEvents");c.initEvent(l,u,o),a.dispatchEvent(c)}}function h8(a){var l=Ln(a,"transitionDuration")||"",u=l.indexOf("ms")===-1?1e3:1;return parseFloat(l)*u}function m8(a,l,u){u===void 0&&(u=5);var o=!1,c=setTimeout(function(){o||p8(a,"transitionend",!0)},l+u),f=iu(a,"transitionend",function(){o=!0},{once:!0});return function(){clearTimeout(c),f()}}function g8(a,l,u,o){u==null&&(u=h8(a)||0);var c=m8(a,u,o),f=iu(a,"transitionend",l);return function(){c(),f()}}function Gm(a,l){const u=Ln(a,l)||"",o=u.indexOf("ms")===-1?1e3:1;return parseFloat(u)*o}function ad(a,l){const u=Gm(a,"transitionDuration"),o=Gm(a,"transitionDelay"),c=g8(a,f=>{f.target===a&&(c(),l(f))},u+o)}function Fl(...a){return a.filter(l=>l!=null).reduce((l,u)=>{if(typeof u!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return l===null?u:function(...c){l.apply(this,c),u.apply(this,c)}},null)}function pv(a){a.offsetHeight}const Xm=a=>!a||typeof a=="function"?a:l=>{a.current=l};function v8(a,l){const u=Xm(a),o=Xm(l);return c=>{u&&u(c),o&&o(c)}}function y8(a,l){return x.useMemo(()=>v8(a,l),[a,l])}function x8(a){return a&&"setState"in a?_i.findDOMNode(a):a??null}const gu=Ye.forwardRef(({onEnter:a,onEntering:l,onEntered:u,onExit:o,onExiting:c,onExited:f,addEndListener:h,children:y,childRef:g,...m},b)=>{const S=x.useRef(null),E=y8(S,g),D=M=>{E(x8(M))},R=M=>J=>{M&&S.current&&M(S.current,J)},$=x.useCallback(R(a),[a]),B=x.useCallback(R(l),[l]),V=x.useCallback(R(u),[u]),O=x.useCallback(R(o),[o]),A=x.useCallback(R(c),[c]),U=x.useCallback(R(f),[f]),N=x.useCallback(R(h),[h]);return d.jsx(Hn,{ref:b,...m,onEnter:$,onEntered:V,onEntering:B,onExit:O,onExited:U,onExiting:A,addEndListener:N,nodeRef:S,children:typeof y=="function"?(M,J)=>y(M,{...J,ref:D}):Ye.cloneElement(y,{ref:D})})});gu.displayName="TransitionWrapper";const b8={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function S8(a,l){const u=`offset${a[0].toUpperCase()}${a.slice(1)}`,o=l[u],c=b8[a];return o+parseInt(Ln(l,c[0]),10)+parseInt(Ln(l,c[1]),10)}const w8={[ma]:"collapse",[ar]:"collapsing",[nn]:"collapsing",[Nn]:"collapse show"},hv=Ye.forwardRef(({onEnter:a,onEntering:l,onEntered:u,onExit:o,onExiting:c,className:f,children:h,dimension:y="height",in:g=!1,timeout:m=300,mountOnEnter:b=!1,unmountOnExit:S=!1,appear:E=!1,getDimensionValue:D=S8,...R},$)=>{const B=typeof y=="function"?y():y,V=x.useMemo(()=>Fl(M=>{M.style[B]="0"},a),[B,a]),O=x.useMemo(()=>Fl(M=>{const J=`scroll${B[0].toUpperCase()}${B.slice(1)}`;M.style[B]=`${M[J]}px`},l),[B,l]),A=x.useMemo(()=>Fl(M=>{M.style[B]=null},u),[B,u]),U=x.useMemo(()=>Fl(M=>{M.style[B]=`${D(B,M)}px`,pv(M)},o),[o,D,B]),N=x.useMemo(()=>Fl(M=>{M.style[B]=null},c),[B,c]);return d.jsx(gu,{ref:$,addEndListener:ad,...R,"aria-expanded":R.role?g:null,onEnter:V,onEntering:O,onEntered:A,onExit:U,onExiting:N,childRef:Vi(h),in:g,timeout:m,mountOnEnter:b,unmountOnExit:S,appear:E,children:(M,J)=>Ye.cloneElement(h,{...J,className:lt(f,h.props.className,w8[M],B==="width"&&"collapse-horizontal")})})});hv.displayName="Collapse";function E8(a){const l=x.useRef(a);return x.useEffect(()=>{l.current=a},[a]),l}function vu(a){const l=E8(a);return x.useCallback(function(...u){return l.current&&l.current(...u)},[l])}const C8=(a=>x.forwardRef((l,u)=>d.jsx("div",{...l,ref:u,className:lt(l.className,a)})));function j8(a){const l=x.useRef(a);return x.useEffect(()=>{l.current=a},[a]),l}function Dn(a){const l=j8(a);return x.useCallback(function(...u){return l.current&&l.current(...u)},[l])}function T8(){const a=x.useRef(!0),l=x.useRef(()=>a.current);return x.useEffect(()=>(a.current=!0,()=>{a.current=!1}),[]),l.current}function R8(a){const l=x.useRef(null);return x.useEffect(()=>{l.current=a}),l.current}const M8=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",z8=typeof document<"u",Vm=z8||M8?x.useLayoutEffect:x.useEffect,O8=["as","disabled"];function A8(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}function _8(a){return!a||a.trim()==="#"}function mv({tagName:a,disabled:l,href:u,target:o,rel:c,role:f,onClick:h,tabIndex:y=0,type:g}){a||(u!=null||o!=null||c!=null?a="a":a="button");const m={tagName:a};if(a==="button")return[{type:g||"button",disabled:l},m];const b=E=>{if((l||a==="a"&&_8(u))&&E.preventDefault(),l){E.stopPropagation();return}h?.(E)},S=E=>{E.key===" "&&(E.preventDefault(),b(E))};return a==="a"&&(u||(u="#"),l&&(u=void 0)),[{role:f??"button",disabled:void 0,tabIndex:l?void 0:y,href:u,target:a==="a"?o:void 0,"aria-disabled":l||void 0,rel:a==="a"?c:void 0,onClick:b,onKeyDown:S},m]}const gv=x.forwardRef((a,l)=>{let{as:u,disabled:o}=a,c=A8(a,O8);const[f,{tagName:h}]=mv(Object.assign({tagName:u,disabled:o},c));return d.jsx(h,Object.assign({},c,f,{ref:l}))});gv.displayName="Button";const N8=["onKeyDown"];function D8(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}function k8(a){return!a||a.trim()==="#"}const vv=x.forwardRef((a,l)=>{let{onKeyDown:u}=a,o=D8(a,N8);const[c]=mv(Object.assign({tagName:"a"},o)),f=Dn(h=>{c.onKeyDown(h),u?.(h)});return k8(o.href)||o.role==="button"?d.jsx("a",Object.assign({ref:l},o,c,{onKeyDown:f})):d.jsx("a",Object.assign({ref:l},o,{onKeyDown:u}))});vv.displayName="Anchor";const L8={[nn]:"show",[Nn]:"show"},yv=x.forwardRef(({className:a,children:l,transitionClasses:u={},onEnter:o,...c},f)=>{const h={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...c},y=x.useCallback((g,m)=>{pv(g),o?.(g,m)},[o]);return d.jsx(gu,{ref:f,addEndListener:ad,...h,onEnter:y,childRef:Vi(l),children:(g,m)=>x.cloneElement(l,{...m,className:lt("fade",a,l.props.className,L8[g],u[g])})})});yv.displayName="Fade";const $8={"aria-label":ff.string,onClick:ff.func,variant:ff.oneOf(["white"])},id=x.forwardRef(({className:a,variant:l,"aria-label":u="Close",...o},c)=>d.jsx("button",{ref:c,type:"button",className:lt("btn-close",l&&`btn-close-${l}`,a),"aria-label":u,...o}));id.displayName="CloseButton";id.propTypes=$8;const xv=x.createContext(null);xv.displayName="CardHeaderContext";const bv=x.forwardRef(({bsPrefix:a,fluid:l=!1,as:u="div",className:o,...c},f)=>{const h=Ct(a,"container"),y=typeof l=="string"?`-${l}`:"-fluid";return d.jsx(u,{ref:f,...c,className:lt(o,l?`${h}${y}`:h)})});bv.displayName="Container";var B8=Function.prototype.bind.call(Function.prototype.call,[].slice);function Ba(a,l){return B8(a.querySelectorAll(l))}function U8(){const[,a]=x.useReducer(l=>l+1,0);return a}function Km(a,l){if(a.contains)return a.contains(l);if(a.compareDocumentPosition)return a===l||!!(a.compareDocumentPosition(l)&16)}const lu=x.createContext(null),ld=(a,l=null)=>a!=null?String(a):l||null,rd=x.createContext(null);rd.displayName="NavContext";const H8="data-rr-ui-",q8="rrUi";function yu(a){return`${H8}${a}`}function Y8(a){return`${q8}${a}`}const Sv=x.createContext(mu?window:void 0);Sv.Provider;function od(){return x.useContext(Sv)}const G8=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",X8=typeof document<"u",V8=X8||G8?x.useLayoutEffect:x.useEffect,Ki=x.createContext(null);Ki.displayName="NavbarContext";const Qm=a=>!a||typeof a=="function"?a:l=>{a.current=l};function K8(a,l){const u=Qm(a),o=Qm(l);return c=>{u&&u(c),o&&o(c)}}function xu(a,l){return x.useMemo(()=>K8(a,l),[a,l])}const wv=x.createContext(null),Q8=["as","active","eventKey"];function Z8(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}function Ev({key:a,onClick:l,active:u,id:o,role:c,disabled:f}){const h=x.useContext(lu),y=x.useContext(rd),g=x.useContext(wv);let m=u;const b={role:c};if(y){!c&&y.role==="tablist"&&(b.role="tab");const S=y.getControllerId(a??null),E=y.getControlledId(a??null);b[yu("event-key")]=a,b.id=S||o,m=u==null&&a!=null?y.activeKey===a:u,(m||!(g!=null&&g.unmountOnExit)&&!(g!=null&&g.mountOnEnter))&&(b["aria-controls"]=E)}return b.role==="tab"&&(b["aria-selected"]=m,m||(b.tabIndex=-1),f&&(b.tabIndex=-1,b["aria-disabled"]=!0)),b.onClick=Dn(S=>{f||(l?.(S),a!=null&&h&&!S.isPropagationStopped()&&h(a,S))}),[b,{isActive:m}]}const Cv=x.forwardRef((a,l)=>{let{as:u=gv,active:o,eventKey:c}=a,f=Z8(a,Q8);const[h,y]=Ev(Object.assign({key:ld(c,f.href),active:o},f));return h[yu("active")]=y.isActive,d.jsx(u,Object.assign({},f,h,{ref:l}))});Cv.displayName="NavItem";const J8=["as","onSelect","activeKey","role","onKeyDown"];function F8(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}const Zm=()=>{},Jm=yu("event-key"),jv=x.forwardRef((a,l)=>{let{as:u="div",onSelect:o,activeKey:c,role:f,onKeyDown:h}=a,y=F8(a,J8);const g=U8(),m=x.useRef(!1),b=x.useContext(lu),S=x.useContext(wv);let E,D;S&&(f=f||"tablist",c=S.activeKey,E=S.getControlledId,D=S.getControllerId);const R=x.useRef(null),$=A=>{const U=R.current;if(!U)return null;const N=Ba(U,`[${Jm}]:not([aria-disabled=true])`),M=U.querySelector("[aria-selected=true]");if(!M||M!==document.activeElement)return null;const J=N.indexOf(M);if(J===-1)return null;let X=J+A;return X>=N.length&&(X=0),X<0&&(X=N.length-1),N[X]},B=(A,U)=>{A!=null&&(o?.(A,U),b?.(A,U))},V=A=>{if(h?.(A),!S)return;let U;switch(A.key){case"ArrowLeft":case"ArrowUp":U=$(-1);break;case"ArrowRight":case"ArrowDown":U=$(1);break;default:return}U&&(A.preventDefault(),B(U.dataset[Y8("EventKey")]||null,A),m.current=!0,g())};x.useEffect(()=>{if(R.current&&m.current){const A=R.current.querySelector(`[${Jm}][aria-selected=true]`);A?.focus()}m.current=!1});const O=xu(l,R);return d.jsx(lu.Provider,{value:B,children:d.jsx(rd.Provider,{value:{role:f,activeKey:ld(c),getControlledId:E||Zm,getControllerId:D||Zm},children:d.jsx(u,Object.assign({},y,{onKeyDown:V,ref:O,role:f}))})})});jv.displayName="Nav";const W8=Object.assign(jv,{Item:Cv});function pf(a){a===void 0&&(a=nd());try{var l=a.activeElement;return!l||!l.nodeName?null:l}catch{return a.body}}function P8(a){const l=x.useRef(a);return l.current=a,l}function I8(a){const l=P8(a);x.useEffect(()=>()=>l.current(),[])}function ew(a=document){const l=a.defaultView;return Math.abs(l.innerWidth-a.documentElement.clientWidth)}const Fm=yu("modal-open");class ud{constructor({ownerDocument:l,handleContainerOverflow:u=!0,isRTL:o=!1}={}){this.handleContainerOverflow=u,this.isRTL=o,this.modals=[],this.ownerDocument=l}getScrollbarWidth(){return ew(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(l){}removeModalAttributes(l){}setContainerStyle(l){const u={overflow:"hidden"},o=this.isRTL?"paddingLeft":"paddingRight",c=this.getElement();l.style={overflow:c.style.overflow,[o]:c.style[o]},l.scrollBarWidth&&(u[o]=`${parseInt(Ln(c,o)||"0",10)+l.scrollBarWidth}px`),c.setAttribute(Fm,""),Ln(c,u)}reset(){[...this.modals].forEach(l=>this.remove(l))}removeContainerStyle(l){const u=this.getElement();u.removeAttribute(Fm),Object.assign(u.style,l.style)}add(l){let u=this.modals.indexOf(l);return u!==-1||(u=this.modals.length,this.modals.push(l),this.setModalAttributes(l),u!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),u}remove(l){const u=this.modals.indexOf(l);u!==-1&&(this.modals.splice(u,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(l))}isTopModal(l){return!!this.modals.length&&this.modals[this.modals.length-1]===l}}const hf=(a,l)=>mu?a==null?(l||nd()).body:(typeof a=="function"&&(a=a()),a&&"current"in a&&(a=a.current),a&&("nodeType"in a||a.getBoundingClientRect)?a:null):null;function tw(a,l){const u=od(),[o,c]=x.useState(()=>hf(a,u?.document));if(!o){const f=hf(a);f&&c(f)}return x.useEffect(()=>{},[l,o]),x.useEffect(()=>{const f=hf(a);f!==o&&c(f)},[a,o]),o}function nw({children:a,in:l,onExited:u,mountOnEnter:o,unmountOnExit:c}){const f=x.useRef(null),h=x.useRef(l),y=Dn(u);x.useEffect(()=>{l?h.current=!0:y(f.current)},[l,y]);const g=xu(f,Vi(a)),m=x.cloneElement(a,{ref:g});return l?m:c||!h.current&&o?null:m}const aw=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function iw(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}function lw(a){let{onEnter:l,onEntering:u,onEntered:o,onExit:c,onExiting:f,onExited:h,addEndListener:y,children:g}=a,m=iw(a,aw);const b=x.useRef(null),S=xu(b,Vi(g)),E=U=>N=>{U&&b.current&&U(b.current,N)},D=x.useCallback(E(l),[l]),R=x.useCallback(E(u),[u]),$=x.useCallback(E(o),[o]),B=x.useCallback(E(c),[c]),V=x.useCallback(E(f),[f]),O=x.useCallback(E(h),[h]),A=x.useCallback(E(y),[y]);return Object.assign({},m,{nodeRef:b},l&&{onEnter:D},u&&{onEntering:R},o&&{onEntered:$},c&&{onExit:B},f&&{onExiting:V},h&&{onExited:O},y&&{addEndListener:A},{children:typeof g=="function"?(U,N)=>g(U,Object.assign({},N,{ref:S})):x.cloneElement(g,{ref:S})})}const rw=["component"];function ow(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}const uw=x.forwardRef((a,l)=>{let{component:u}=a,o=ow(a,rw);const c=lw(o);return d.jsx(u,Object.assign({ref:l},c))});function sw({in:a,onTransition:l}){const u=x.useRef(null),o=x.useRef(!0),c=Dn(l);return Vm(()=>{if(!u.current)return;let f=!1;return c({in:a,element:u.current,initial:o.current,isStale:()=>f}),()=>{f=!0}},[a,c]),Vm(()=>(o.current=!1,()=>{o.current=!0}),[]),u}function cw({children:a,in:l,onExited:u,onEntered:o,transition:c}){const[f,h]=x.useState(!l);l&&f&&h(!1);const y=sw({in:!!l,onTransition:m=>{const b=()=>{m.isStale()||(m.in?o?.(m.element,m.initial):(h(!0),u?.(m.element)))};Promise.resolve(c(m)).then(b,S=>{throw m.in||h(!0),S})}}),g=xu(y,Vi(a));return f&&!l?null:x.cloneElement(a,{ref:g})}function Wm(a,l,u){return a?d.jsx(uw,Object.assign({},u,{component:a})):l?d.jsx(cw,Object.assign({},u,{transition:l})):d.jsx(nw,Object.assign({},u))}const fw=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function dw(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}let mf;function pw(a){return mf||(mf=new ud({ownerDocument:a?.document})),mf}function hw(a){const l=od(),u=a||pw(l),o=x.useRef({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>u.add(o.current),remove:()=>u.remove(o.current),isTopModal:()=>u.isTopModal(o.current),setDialogRef:x.useCallback(c=>{o.current.dialog=c},[]),setBackdropRef:x.useCallback(c=>{o.current.backdrop=c},[])})}const Tv=x.forwardRef((a,l)=>{let{show:u=!1,role:o="dialog",className:c,style:f,children:h,backdrop:y=!0,keyboard:g=!0,onBackdropClick:m,onEscapeKeyDown:b,transition:S,runTransition:E,backdropTransition:D,runBackdropTransition:R,autoFocus:$=!0,enforceFocus:B=!0,restoreFocus:V=!0,restoreFocusOptions:O,renderDialog:A,renderBackdrop:U=Be=>d.jsx("div",Object.assign({},Be)),manager:N,container:M,onShow:J,onHide:X=()=>{},onExit:Z,onExited:oe,onExiting:F,onEnter:L,onEntering:ee,onEntered:ne}=a,j=dw(a,fw);const _=od(),H=tw(M),W=hw(N),ae=T8(),se=R8(u),[T,K]=x.useState(!u),le=x.useRef(null);x.useImperativeHandle(l,()=>W,[W]),mu&&!se&&u&&(le.current=pf(_?.document)),u&&T&&K(!1);const ie=Dn(()=>{if(W.add(),jt.current=iu(document,"keydown",$e),je.current=iu(document,"focus",()=>setTimeout(he),!0),J&&J(),$){var Be,Ya;const Qi=pf((Be=(Ya=W.dialog)==null?void 0:Ya.ownerDocument)!=null?Be:_?.document);W.dialog&&Qi&&!Km(W.dialog,Qi)&&(le.current=Qi,W.dialog.focus())}}),fe=Dn(()=>{if(W.remove(),jt.current==null||jt.current(),je.current==null||je.current(),V){var Be;(Be=le.current)==null||Be.focus==null||Be.focus(O),le.current=null}});x.useEffect(()=>{!u||!H||ie()},[u,H,ie]),x.useEffect(()=>{T&&fe()},[T,fe]),I8(()=>{fe()});const he=Dn(()=>{if(!B||!ae()||!W.isTopModal())return;const Be=pf(_?.document);W.dialog&&Be&&!Km(W.dialog,Be)&&W.dialog.focus()}),xe=Dn(Be=>{Be.target===Be.currentTarget&&(m?.(Be),y===!0&&X())}),$e=Dn(Be=>{g&&s8(Be)&&W.isTopModal()&&(b?.(Be),Be.defaultPrevented||X())}),je=x.useRef(),jt=x.useRef(),Wt=(...Be)=>{K(!0),oe?.(...Be)};if(!H)return null;const mt=Object.assign({role:o,ref:W.setDialogRef,"aria-modal":o==="dialog"?!0:void 0},j,{style:f,className:c,tabIndex:-1});let qa=A?A(mt):d.jsx("div",Object.assign({},mt,{children:x.cloneElement(h,{role:"document"})}));qa=Wm(S,E,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!u,onExit:Z,onExiting:F,onExited:Wt,onEnter:L,onEntering:ee,onEntered:ne,children:qa});let Bt=null;return y&&(Bt=U({ref:W.setBackdropRef,onClick:xe}),Bt=Wm(D,R,{in:!!u,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Bt})),d.jsx(d.Fragment,{children:_i.createPortal(d.jsxs(d.Fragment,{children:[Bt,qa]}),H)})});Tv.displayName="Modal";const mw=Object.assign(Tv,{Manager:ud});function gw(a,l){return a.classList?a.classList.contains(l):(" "+(a.className.baseVal||a.className)+" ").indexOf(" "+l+" ")!==-1}function vw(a,l){a.classList?a.classList.add(l):gw(a,l)||(typeof a.className=="string"?a.className=a.className+" "+l:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+l))}function Pm(a,l){return a.replace(new RegExp("(^|\\s)"+l+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function yw(a,l){a.classList?a.classList.remove(l):typeof a.className=="string"?a.className=Pm(a.className,l):a.setAttribute("class",Pm(a.className&&a.className.baseVal||"",l))}const Oi={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Rv extends ud{adjustAndStore(l,u,o){const c=u.style[l];u.dataset[l]=c,Ln(u,{[l]:`${parseFloat(Ln(u,l))+o}px`})}restore(l,u){const o=u.dataset[l];o!==void 0&&(delete u.dataset[l],Ln(u,{[l]:o}))}setContainerStyle(l){super.setContainerStyle(l);const u=this.getElement();if(vw(u,"modal-open"),!l.scrollBarWidth)return;const o=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";Ba(u,Oi.FIXED_CONTENT).forEach(f=>this.adjustAndStore(o,f,l.scrollBarWidth)),Ba(u,Oi.STICKY_CONTENT).forEach(f=>this.adjustAndStore(c,f,-l.scrollBarWidth)),Ba(u,Oi.NAVBAR_TOGGLER).forEach(f=>this.adjustAndStore(c,f,l.scrollBarWidth))}removeContainerStyle(l){super.removeContainerStyle(l);const u=this.getElement();yw(u,"modal-open");const o=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";Ba(u,Oi.FIXED_CONTENT).forEach(f=>this.restore(o,f)),Ba(u,Oi.STICKY_CONTENT).forEach(f=>this.restore(c,f)),Ba(u,Oi.NAVBAR_TOGGLER).forEach(f=>this.restore(c,f))}}let gf;function xw(a){return gf||(gf=new Rv(a)),gf}const Mv=x.createContext({onHide(){}}),zv=x.forwardRef(({closeLabel:a="Close",closeVariant:l,closeButton:u=!1,onHide:o,children:c,...f},h)=>{const y=x.useContext(Mv),g=vu(()=>{y?.onHide(),o?.()});return d.jsxs("div",{ref:h,...f,children:[c,u&&d.jsx(id,{"aria-label":a,variant:l,onClick:g})]})});zv.displayName="AbstractModalHeader";const Ov=x.forwardRef(({className:a,bsPrefix:l,as:u="div",...o},c)=>(l=Ct(l,"nav-item"),d.jsx(u,{ref:c,className:lt(a,l),...o})));Ov.displayName="NavItem";const Av=x.forwardRef(({bsPrefix:a,className:l,as:u=vv,active:o,eventKey:c,disabled:f=!1,...h},y)=>{a=Ct(a,"nav-link");const[g,m]=Ev({key:ld(c,h.href),active:o,disabled:f,...h});return d.jsx(u,{...h,...g,ref:y,disabled:f,className:lt(l,a,f&&"disabled",m.isActive&&"active")})});Av.displayName="NavLink";const _v=x.forwardRef((a,l)=>{const{as:u="div",bsPrefix:o,variant:c,fill:f=!1,justify:h=!1,navbar:y,navbarScroll:g,className:m,activeKey:b,...S}=cv(a,{activeKey:"onSelect"}),E=Ct(o,"nav");let D,R,$=!1;const B=x.useContext(Ki),V=x.useContext(xv);return B?(D=B.bsPrefix,$=y??!0):V&&({cardHeaderBsPrefix:R}=V),d.jsx(W8,{as:u,ref:l,activeKey:b,className:lt(m,{[E]:!$,[`${D}-nav`]:$,[`${D}-nav-scroll`]:$&&g,[`${R}-${c}`]:!!R,[`${E}-${c}`]:!!c,[`${E}-fill`]:f,[`${E}-justified`]:h}),...S})});_v.displayName="Nav";const bw=Object.assign(_v,{Item:Ov,Link:Av}),Nv=x.forwardRef(({bsPrefix:a,className:l,as:u,...o},c)=>{a=Ct(a,"navbar-brand");const f=u||(o.href?"a":"span");return d.jsx(f,{...o,ref:c,className:lt(l,a)})});Nv.displayName="NavbarBrand";const Dv=x.forwardRef(({children:a,bsPrefix:l,...u},o)=>{l=Ct(l,"navbar-collapse");const c=x.useContext(Ki);return d.jsx(hv,{in:!!(c&&c.expanded),...u,children:d.jsx("div",{ref:o,className:l,children:a})})});Dv.displayName="NavbarCollapse";const kv=x.forwardRef(({bsPrefix:a,className:l,children:u,label:o="Toggle navigation",as:c="button",onClick:f,...h},y)=>{a=Ct(a,"navbar-toggler");const{onToggle:g,expanded:m}=x.useContext(Ki)||{},b=vu(S=>{f&&f(S),g&&g()});return c==="button"&&(h.type="button"),d.jsx(c,{...h,ref:y,onClick:b,"aria-label":o,className:lt(l,a,!m&&"collapsed"),children:u||d.jsx("span",{className:`${a}-icon`})})});kv.displayName="NavbarToggle";const Df=new WeakMap,Im=(a,l)=>{if(!a||!l)return;const u=Df.get(l)||new Map;Df.set(l,u);let o=u.get(a);return o||(o=l.matchMedia(a),o.refCount=0,u.set(o.media,o)),o};function Sw(a,l=typeof window>"u"?void 0:window){const u=Im(a,l),[o,c]=x.useState(()=>u?u.matches:!1);return V8(()=>{let f=Im(a,l);if(!f)return c(!1);let h=Df.get(l);const y=()=>{c(f.matches)};return f.refCount++,f.addListener(y),y(),()=>{f.removeListener(y),f.refCount--,f.refCount<=0&&h?.delete(f.media),f=void 0}},[a]),o}function ww(a){const l=Object.keys(a);function u(y,g){return y===g?g:y?`${y} and ${g}`:g}function o(y){return l[Math.min(l.indexOf(y)+1,l.length-1)]}function c(y){const g=o(y);let m=a[g];return typeof m=="number"?m=`${m-.2}px`:m=`calc(${m} - 0.2px)`,`(max-width: ${m})`}function f(y){let g=a[y];return typeof g=="number"&&(g=`${g}px`),`(min-width: ${g})`}function h(y,g,m){let b;typeof y=="object"?(b=y,m=g,g=!0):(g=g||!0,b={[y]:g});let S=x.useMemo(()=>Object.entries(b).reduce((E,[D,R])=>((R==="up"||R===!0)&&(E=u(E,f(D))),(R==="down"||R===!0)&&(E=u(E,c(D))),E),""),[JSON.stringify(b)]);return Sw(S,m)}return h}const Ew=ww({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),Lv=x.forwardRef(({className:a,bsPrefix:l,as:u="div",...o},c)=>(l=Ct(l,"offcanvas-body"),d.jsx(u,{ref:c,className:lt(a,l),...o})));Lv.displayName="OffcanvasBody";const Cw={[nn]:"show",[Nn]:"show"},$v=x.forwardRef(({bsPrefix:a,className:l,children:u,in:o=!1,mountOnEnter:c=!1,unmountOnExit:f=!1,appear:h=!1,...y},g)=>(a=Ct(a,"offcanvas"),d.jsx(gu,{ref:g,addEndListener:ad,in:o,mountOnEnter:c,unmountOnExit:f,appear:h,...y,childRef:Vi(u),children:(m,b)=>x.cloneElement(u,{...b,className:lt(l,u.props.className,(m===nn||m===ar)&&`${a}-toggling`,Cw[m])})})));$v.displayName="OffcanvasToggling";const Bv=x.forwardRef(({bsPrefix:a,className:l,closeLabel:u="Close",closeButton:o=!1,...c},f)=>(a=Ct(a,"offcanvas-header"),d.jsx(zv,{ref:f,...c,className:lt(l,a),closeLabel:u,closeButton:o})));Bv.displayName="OffcanvasHeader";const jw=C8("h5"),Uv=x.forwardRef(({className:a,bsPrefix:l,as:u=jw,...o},c)=>(l=Ct(l,"offcanvas-title"),d.jsx(u,{ref:c,className:lt(a,l),...o})));Uv.displayName="OffcanvasTitle";function Tw(a){return d.jsx($v,{...a})}function Rw(a){return d.jsx(yv,{...a})}const Hv=x.forwardRef(({bsPrefix:a,className:l,children:u,"aria-labelledby":o,placement:c="start",responsive:f,show:h=!1,backdrop:y=!0,keyboard:g=!0,scroll:m=!1,onEscapeKeyDown:b,onShow:S,onHide:E,container:D,autoFocus:R=!0,enforceFocus:$=!0,restoreFocus:B=!0,restoreFocusOptions:V,onEntered:O,onExit:A,onExiting:U,onEnter:N,onEntering:M,onExited:J,backdropClassName:X,manager:Z,renderStaticNode:oe=!1,...F},L)=>{const ee=x.useRef();a=Ct(a,"offcanvas");const[ne,j]=x.useState(!1),_=vu(E),H=Ew(f||"xs","up");x.useEffect(()=>{j(f?h&&!H:h)},[h,f,H]);const W=x.useMemo(()=>({onHide:_}),[_]);function ae(){return Z||(m?(ee.current||(ee.current=new Rv({handleContainerOverflow:!1})),ee.current):xw())}const se=(ie,...fe)=>{ie&&(ie.style.visibility="visible"),N?.(ie,...fe)},T=(ie,...fe)=>{ie&&(ie.style.visibility=""),J?.(...fe)},K=x.useCallback(ie=>d.jsx("div",{...ie,className:lt(`${a}-backdrop`,X)}),[X,a]),le=ie=>d.jsx("div",{...ie,...F,className:lt(l,f?`${a}-${f}`:a,`${a}-${c}`),"aria-labelledby":o,children:u});return d.jsxs(d.Fragment,{children:[!ne&&(f||oe)&&le({}),d.jsx(Mv.Provider,{value:W,children:d.jsx(mw,{show:ne,ref:L,backdrop:y,container:D,keyboard:g,autoFocus:R,enforceFocus:$&&!m,restoreFocus:B,restoreFocusOptions:V,onEscapeKeyDown:b,onShow:S,onHide:_,onEnter:se,onEntering:M,onEntered:O,onExit:A,onExiting:U,onExited:T,manager:ae(),transition:Tw,backdropTransition:Rw,renderBackdrop:K,renderDialog:le})})]})});Hv.displayName="Offcanvas";const Mw=Object.assign(Hv,{Body:Lv,Header:Bv,Title:Uv}),qv=x.forwardRef(({onHide:a,...l},u)=>{const o=x.useContext(Ki),c=vu(()=>{o==null||o.onToggle==null||o.onToggle(),a?.()});return d.jsx(Mw,{ref:u,show:!!(o!=null&&o.expanded),...l,renderStaticNode:!0,onHide:c})});qv.displayName="NavbarOffcanvas";const Yv=x.forwardRef(({className:a,bsPrefix:l,as:u="span",...o},c)=>(l=Ct(l,"navbar-text"),d.jsx(u,{ref:c,className:lt(a,l),...o})));Yv.displayName="NavbarText";const Gv=x.forwardRef((a,l)=>{const{bsPrefix:u,expand:o=!0,variant:c="light",bg:f,fixed:h,sticky:y,className:g,as:m="nav",expanded:b,onToggle:S,onSelect:E,collapseOnSelect:D=!1,...R}=cv(a,{expanded:"onToggle"}),$=Ct(u,"navbar"),B=x.useCallback((...A)=>{E?.(...A),D&&b&&S?.(!1)},[E,D,b,S]);R.role===void 0&&m!=="nav"&&(R.role="navigation");let V=`${$}-expand`;typeof o=="string"&&(V=`${V}-${o}`);const O=x.useMemo(()=>({onToggle:()=>S?.(!b),bsPrefix:$,expanded:!!b,expand:o}),[$,b,o,S]);return d.jsx(Ki.Provider,{value:O,children:d.jsx(lu.Provider,{value:B,children:d.jsx(m,{ref:l,...R,className:lt(g,$,o&&V,c&&`${$}-${c}`,f&&`bg-${f}`,y&&`sticky-${y}`,h&&`fixed-${h}`)})})})});Gv.displayName="Navbar";const zw=Object.assign(Gv,{Brand:Nv,Collapse:Dv,Offcanvas:qv,Text:Yv,Toggle:kv});function Ow(a){return Te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M149.688 85.625c-1.234.005-2.465.033-3.72.063-33.913.806-75.48 10.704-127.25 33.718V362.78c60.77-28.82 106.718-37.067 144.22-33.092 33.502 3.55 59.685 16.66 83.562 31.187v-242.97c-23.217-17.744-50.195-30.04-85.97-32-3.52-.192-7.142-.296-10.843-.28zm211.968 0c-3.7-.016-7.322.088-10.844.28-35.773 1.96-62.75 14.256-85.968 32v242.97c23.876-14.527 50.06-27.637 83.562-31.188 37.502-3.974 83.45 4.272 144.22 33.094V119.407c-51.77-23.014-93.337-32.912-127.25-33.72-1.255-.028-2.486-.056-3.72-.06zm5.72 261.78c-1.038-.002-2.074.017-3.095.033-4.808.075-9.43.37-13.905.843-33.932 3.597-59.603 17.976-85.53 34.44v.28c-6.554-1.99-13.02-2.37-19.408-.97-25.566-16.177-51.003-30.202-84.468-33.75-5.595-.592-11.44-.883-17.564-.842-32.04.213-71.833 9.778-124.687 35.937v42.53c60.77-28.823 106.714-37.067 144.218-33.092 18.545 1.965 34.837 6.845 49.75 13.28-4.682 6.064-9.308 13.268-13.875 21.688h117.156c-5.93-8.22-11.798-15.414-17.626-21.56 14.996-6.503 31.39-11.43 50.062-13.408 37.503-3.974 83.448 4.27 144.22 33.094v-42.53c-53.16-26.31-93.115-35.863-125.25-35.97z"},child:[]}]})(a)}function Aw(a){return Te({attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",fill:"currentColor"},child:[]}]})(a)}const _w=w(zw)`
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
`,Nw=w.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 8px;
`,Dw=w.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,kw=w.div`
  justify-self: center;
`,Lw=w.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`,$w=w.button`
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
`,Bw=w(Gi)`
  padding: 10px 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px; /* space between icon and text */
`,Uw=w(Ow)`
  width: 28px;
  height: 28px;
  flex: 0 0 28px;
  color: #f0703c /* keep high contrast; adjust to your brand */
`,Hw=w.div`
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
`;function qw(){const a=()=>{console.log("Toggled theme")};return d.jsx("div",{className:"topbar-wrapper",children:d.jsx(_w,{className:"shadow-sm d-lg-none",children:d.jsx(bv,{fluid:!0,className:"px-3",children:d.jsxs(Nw,{children:[d.jsx(Dw,{children:d.jsxs(Bw,{to:"/instalearn/","aria-label":"Go to home",children:[d.jsx(Uw,{"aria-hidden":"true"}),d.jsx(Hw,{children:"InstaLearn"})]})}),d.jsx(kw,{}),d.jsx(Lw,{children:d.jsx($w,{type:"button",onClick:a,"aria-label":"Toggle",children:d.jsx(Aw,{size:20})})})]})})})})}const Yw=Ft`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Gw=w.aside`
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
`,Xw=w(Gi)`
  padding: 25px 12px 16px 12px;
  margin-bottom: 19px;
  margin-left: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: padding 200ms ease, margin 200ms ease;
`,Vw=w.div`
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
`,Kw=w.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
`,Qw=va`
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
    animation: ${Yw} 4s linear infinite;
    box-shadow: 0 0 8px rgba(0, 245, 255, 0.8);
  }
`,vf=w(Gi)`
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

  ${a=>a.$active&&Qw}
`,Zw=w.div`
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px solid #dbdbdb;
`,yf=w.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,xf=w.span`
  white-space: nowrap;
  transition: opacity 120ms ease, width 200ms ease;
`;function Jw(){const{pathname:a}=Un(),l=[{to:"/instalearn/",icon:d.jsx(Qg,{}),label:"Home"},{to:"/instalearn/teacher",icon:d.jsx(er,{}),label:"Teacher"},{to:"/instalearn/library",icon:d.jsx(Kg,{}),label:"Library",hasNotification:!0},{to:"/instalearn/notifications",icon:d.jsx(t3,{}),label:"Notifications"},{to:"/instalearn/profile",icon:d.jsx(Zg,{}),label:"Profile"}];return d.jsxs(Gw,{children:[d.jsx(Xw,{to:"/instalearn/",children:d.jsx(Vw,{children:"InstaLearn"})}),d.jsxs(Kw,{children:[l.slice(0,-1).map(u=>d.jsxs(vf,{to:u.to,$active:a===u.to,children:[d.jsx(yf,{children:u.icon}),d.jsx(xf,{children:u.label}),u.hasNotification]},u.to)),d.jsxs(vf,{to:l[l.length-1].to,$active:a===l[l.length-1].to,children:[d.jsx(yf,{children:l[l.length-1].icon}),d.jsx(xf,{children:l[l.length-1].label})]})]}),d.jsx(Zw,{children:d.jsxs(vf,{to:"/instalearn/more",$active:a==="/instalearn/more",children:[d.jsx(yf,{children:d.jsx(n3,{})}),d.jsx(xf,{children:"More"})]})})]})}const Fw=w.div`
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
`,Ww=w.div`
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
`,Xv=w.div`
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
`,Pw=w.div`
  position: relative;
  flex-shrink: 0;
`,Iw=w.div`
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
  
  ${Xv}:hover & {
    transform: scale(1.05);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }
`,e7=w.div`
  position: absolute;
  bottom: ${a=>a.$width<250?"2px":"4px"};
  right: ${a=>a.$width<250?"0":"2px"};
  width: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  height: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
`,t7=w.div`
  flex: 1;
  min-width: 0;
  display: ${a=>a.$width<180?"none":"block"};
`,n7=w.div`
  font-size: ${a=>a.$width<250?"13px":"14px"};
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,a7=w.div`
  font-size: ${a=>a.$width<250?"11px":"13px"};
  color: #6b7280;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,i7=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,l7=w.div`
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
`,r7=w.button`
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
`,o7=w.div`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.$width<250?"8px":"12px"};
  margin-bottom: 32px;
`,Vv=w.div`
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
`,u7=w.div`
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
  
  ${Vv}:hover & {
    transform: scale(1.05) rotate(5deg);
  }
`,s7=w.div`
  display: flex;
  flex-direction: ${a=>a.$width<200?"column":a.$width<250?"row":"column"};
  align-items: ${a=>a.$width>=200&&a.$width<250?"center":"stretch"};
  flex: 1;
`,c7=w.div`
  flex: 1;
`,f7=w.h4`
  font-size: ${a=>a.$width<250?"12px":"13px"};
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 ${a=>a.$width<250?"2px":"4px"} 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,d7=w.p`
  font-size: ${a=>a.$width<250?"10px":"12px"};
  color: #6b7280;
  margin: 0;
  display: ${a=>a.$width<180?"none":"-webkit-box"};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
`,p7=w.span`
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
`;const h7=({sidebarWidth:a=360})=>{const l={username:"demo_user",name:"Demo User",initials:"DU"},u=[{icon:U1,gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",title:"New Feature: Dark Mode",description:"Enable dark mode for a better night-time experience.",badge:"New",badgeBg:"linear-gradient(135deg, #667eea, #764ba2)"},{icon:a3,gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",title:"Product Tip: Quick Search",description:"Use the search bar to find items faster.",badge:"Tip",badgeBg:"linear-gradient(135deg, #f093fb, #f5576c)"},{icon:e3,gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",title:"Update: Version 2.0",description:"Check out the latest improvements and bug fixes.",badge:"Update",badgeBg:"linear-gradient(135deg, #4facfe, #00f2fe)"}];return d.jsxs(Fw,{children:[d.jsx(Ww,{children:d.jsxs(Xv,{$width:a,children:[d.jsxs(Pw,{children:[d.jsx(Iw,{$width:a,children:l.initials}),d.jsx(e7,{$width:a})]}),d.jsxs(t7,{$width:a,children:[d.jsx(n7,{$width:a,children:l.username}),d.jsx(a7,{$width:a,children:l.name})]})]})}),d.jsxs(i7,{children:[d.jsxs(l7,{$width:a,$iconColor:"#667eea",children:[d.jsx(U1,{}),d.jsx("span",{children:"Highlights"})]}),d.jsx(r7,{$width:a,children:"See All"})]}),d.jsx(o7,{$width:a,children:u.map((o,c)=>{const f=o.icon;return d.jsxs(Vv,{$width:a,$glowColor:o.gradient,children:[d.jsx(p7,{$width:a,$bg:o.badgeBg,children:o.badge}),d.jsxs(s7,{$width:a,children:[d.jsx(u7,{$width:a,$gradient:o.gradient,children:d.jsx(f,{})}),d.jsxs(c7,{children:[d.jsx(f7,{$width:a,children:o.title}),d.jsx(d7,{$width:a,children:o.description})]})]})]},c)})})]})};function m7(){const{pathname:a}=Un(),l=[["/instalearn/",d.jsx(Qg,{})],["/instalearn/teacher",d.jsx(er,{})],["/instalearn/library",d.jsx(Kg,{})],["/instalearn/profile",d.jsx(Zg,{})]];return d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
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
      `}),d.jsx(bw,{className:"bottom-nav fixed-bottom d-flex justify-content-around py-2 d-lg-none",children:l.map(([u,o])=>d.jsx(Gi,{to:u,className:`nav-link fs-4 text-white ${a===u?"active":""}`,children:o},u))})]})}const g7={name:"Siddharth Sir",subject:"SST Teacher",bio:"Exploring history, geography & civics 🌍 | Making SST engaging for Classes 6–12 | CBSE Expert",avatar:hu.teacherProfilePic,concepts:247,students:"1.2K",learns:15,experience:8,bookList:[{title:"SST MARATHON"},{title:"World Geography Simplified"},{title:"Understanding Civics"},{title:"Economics Made Easy"},{title:"Political Science Basics"},{title:"Environment & Society"}]},ft=g7,v7=w.div`
  max-width: 1120px;
  margin: 0 auto;
  background: #fff;
  min-height: 100vh;
`,y7=w.div`
  padding: 1rem 1.5rem;
  @media (min-width: 768px) { padding: 1.5rem 2rem; }
  @media (min-width: 1024px) { padding: 2rem 3rem; }
`,x7=w.div`
  display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 1.5rem;
  @media (min-width: 768px) { flex-direction: row; align-items: flex-start; }
`,b7=w.div`
  display: flex; align-items: center; gap: 1.5rem;
  @media (min-width: 768px) { flex-direction: column; align-items: center; }
`,S7=w.div` position: relative; `,w7=w.img`
  width: 5rem; height: 5rem; border-radius: 50%; object-fit: cover; border: 2px solid #e5e7eb;
  @media (min-width: 768px) { width: 8rem; height: 8rem; }
  @media (min-width: 1024px) { width: 10rem; height: 10rem; }
`,E7=w.div`
  position: absolute;
  top: -6px; left: -6px;
  background: #111827; color: #fff; font-size: 0.65rem; font-weight: 700;
  padding: 0.25rem 0.4rem; border-radius: 8px;
  display: inline-flex; align-items: center; gap: 4px;
`,C7=w.div`
  display: flex; flex: 1; justify-content: space-around; text-align: center;
  @media (min-width: 768px) { display: none; }
`,j7=w.div`
  display: none; gap: 2rem; margin-bottom: 1.5rem;
  @media (min-width: 768px) { display: flex; }
`,Ai=w.div`
  font-weight: 600; font-size: 1.125rem;
  span { font-weight: 400; margin-left: 0.25rem; color: #6b7280; }
`,T7=w.div` flex: 1; `,R7=w.div`
  font-weight: 600; font-size: 1rem;
  @media (min-width: 768px) { font-size: 1.125rem; }
`,M7=w.div`
  font-size: 0.875rem; color: #6b7280;
  @media (min-width: 768px) { font-size: 1rem; }
`,z7=w.div`
  font-size: 0.875rem; margin-top: 0.5rem;
  @media (min-width: 768px) { font-size: 1rem; }
`,O7=w.div`
  font-size: 0.875rem; margin-top: 0.5rem; color: #6b7280;
  @media (min-width: 768px) { font-size: 1rem; }
`,A7=w.div` display: flex; gap: 0.5rem; margin-bottom: 1.5rem; `,_7=w.button`
  flex: 1; background: #3b82f6; color: #fff; font-weight: 600;
  padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;
  @media (min-width: 768px) { flex: initial; padding: 0.5rem 2rem; font-size: 1rem; }
`,N7=w.button`
  flex: 1; border: 1px solid #d1d5db; font-weight: 600;
  padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; position: relative;
  @media (min-width: 768px) { flex: initial; padding: 0.5rem 2rem; font-size: 1rem; }
  &[data-joined="true"] {
    background: #10b9810f; border-color: #10b981; color: #065f46;
  }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,D7=w.button`
  border: 1px solid #d1d5db; padding: 0.25rem 1rem; border-radius: 0.5rem;
`,k7=w.div`
  display: ${({hidden:a})=>a?"none":"flex"};
  align-items: center; justify-content: space-between;
  gap: 0.75rem; padding: 0.75rem 1rem; border: 1px dashed #d1d5db;
  border-radius: 12px; background: #f9fafb; color: #111827; margin-bottom: 1rem;
`,L7=w.div`
  font-size: 0.9rem; display: flex; align-items: center; gap: 8px;
  svg { flex-shrink: 0; }
`,$7=w.button`
  border: 1px solid #111827; background: #111827; color: #fff;
  border-radius: 10px; padding: 0.5rem 0.85rem; font-weight: 700; font-size: 0.875rem;
`,B7=w.div` margin-bottom: 1.5rem; `,U7=w.div`
  display: flex; gap: 1rem; overflow-x: auto; padding-bottom: 0.5rem;
`,H7=w.div`
  display: flex; flex-direction: column; align-items: center; min-width: fit-content; cursor: pointer; position: relative;
`,q7=w.div`
  position: absolute; inset: 0; border-radius: 9999px; display: flex; align-items: center; justify-content: center;
  background: rgba(17,24,39,0.55); color: #fff; font-weight: 700; font-size: 0.75rem;
  backdrop-filter: blur(2px);
`,Y7=w.div`
  width: 4rem; height: 4rem; border-radius: 50%; padding: 0.125rem;
  background: linear-gradient(to top right, #a78bfa, #f472b6, #fb923c);
  @media (min-width: 768px) { width: 5rem; height: 5rem; }
  @media (min-width: 1024px) { width: 6rem; height: 6rem; }
  filter: ${({$locked:a})=>a?"grayscale(0.8)":"none"};
  opacity: ${({$locked:a})=>a?.6:1};
`,G7=w.div`
  width: 100%; height: 100%; border-radius: 50%; padding: 0.25rem; background: #fff;
  display: flex; align-items: center; justify-content: center;
`,X7=w.div`
  font-size: 0.75rem; color: #374151; text-align: center; margin-top: 0.25rem;
  max-width: 4.375rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  @media (min-width: 768px) { font-size: 0.875rem; max-width: 5.625rem; }
  opacity: ${({$locked:a})=>a?.6:1};
`,V7=w.div` display: flex; border-top: 1px solid #e5e7eb; `,eg=w.button`
  flex: 1; padding: 0.75rem 0; display: flex; justify-content: center; align-items: center; gap: 0.5rem;
  border-top: 2px solid ${({active:a})=>a?"#111827":"transparent"};
  color: ${({active:a})=>a?"#111827":"#9ca3af"};
`,K7=w.div`
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.25rem;
  @media (min-width: 768px) { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.5rem; }
  @media (min-width: 1024px) { grid-template-columns: repeat(5, minmax(0, 1fr)); }
  @media (min-width: 1280px) { grid-template-columns: repeat(6, minmax(0, 1fr)); }
`,Q7=w.div`
  aspect-ratio: 1 / 1; background: #f3f4f6; display: flex; justify-content: center; align-items: center; position: relative;
  filter: ${({$locked:a})=>a?"blur(2px)":"none"};
  overflow: hidden;
`,Z7=w.div`
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  background: rgba(17,24,39,0.45); color: #fff; font-weight: 800; font-size: 0.8rem;
`,J7=w.button`
  margin: 0.75rem auto 1.25rem; display: ${({hidden:a})=>a?"none":"block"};
  background: #111827; color: #fff; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 700;
`,F7=w.div`
  position: fixed; inset: 0; background: rgba(17, 24, 39, 0.6);
  display: flex; align-items: center; justify-content: center; z-index: 50;
`,W7=w.div`
  width: min(96vw, 720px); background: #ffffff; border-radius: 16px;
  box-shadow: 0 20px 48px rgba(0,0,0,0.18); overflow: hidden;
`,P7=w.div`
  display: flex; justify-content: space-between; align-items: center;
  padding: 1rem 1.25rem; border-bottom: 1px solid #f3f4f6;
`,I7=w.h3`
  margin: 0; font-size: 1rem; font-weight: 700; color: #111827;
`,e9=w.button`
  border: 1px solid #e5e7eb; background: #fff; border-radius: 8px; padding: 0.25rem;
`,t9=w.div`
  padding: 1rem; display: grid; gap: 1rem;
  @media (min-width: 768px) { grid-template-columns: repeat(3, 1fr); }
`,n9=w.button`
  border: 1px solid ${({$active:a})=>a?"#2563eb":"#e5e7eb"};
  border-radius: 14px; padding: 1rem; text-align: left; background: ${({$active:a})=>a?"#eff6ff":"#fff"};
  display: grid; gap: 0.25rem; cursor: pointer;
  &:hover { border-color: #2563eb; }
  h4 { margin: 0; font-size: 1rem; font-weight: 700; color: #111827; }
  p { margin: 0; color: #6b7280; font-size: 0.875rem; }
  strong { font-size: 1.25rem; }
`,a9=w.div`
  border-top: 1px solid #f3f4f6; padding: 0.75rem 1.25rem; display: flex; gap: 0.5rem; justify-content: flex-end;
`,i9=w.button`
  background: #111827; color: #fff; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 700;
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,l9=w.button`
  border: 1px solid #d1d5db; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 600; background: #fff;
`;function r9(){x.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]);const a=Lf(),[l,u]=x.useState(!1),[o,c]=x.useState("basic"),[f,h]=x.useState(!1),[y,g]=x.useState(!1),m=3,b=3;x.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]),x.useEffect(()=>{const B=`joined:${ft?.id||ft?.name}`;localStorage.getItem(B)==="true"&&g(!0)},[]),x.useEffect(()=>{const B=`joined:${ft?.id||ft?.name}`;localStorage.setItem(B,y?"true":"false")},[y]);const S=B=>{if(!y&&B>=m){u(!0);return}B===0&&a("/instalearn/library")},E=()=>{y||u(!0)},D=async()=>{h(!0),await new Promise(B=>setTimeout(B,1500)),h(!1),g(!0),u(!1)},R=[{key:"basic",name:"Basic",price:"₹0",desc:"Demo access: 3 lessons"},{key:"pro",name:"Pro",price:"₹99",desc:"Monthly: full library"},{key:"team",name:"Team",price:"₹1,99",desc:"Up to 10 students"}],$=y;return d.jsxs(v7,{children:[d.jsxs(y7,{children:[d.jsxs(x7,{children:[d.jsxs(b7,{children:[d.jsxs(S7,{children:[d.jsx(w7,{src:ft.avatar,alt:ft.name}),!y&&d.jsxs(E7,{"aria-hidden":"true",title:"Pro library locked",children:[d.jsx(Lo,{size:12})," LOCKED"]})]}),d.jsxs(C7,{children:[d.jsxs(Ai,{children:[ft.concepts," ",d.jsx("span",{children:"concepts"})]}),d.jsxs(Ai,{children:[ft.students," ",d.jsx("span",{children:"students"})]}),d.jsxs(Ai,{children:[ft.learns," ",d.jsx("span",{children:"learns"})]})]})]}),d.jsxs(T7,{children:[d.jsxs(j7,{children:[d.jsxs(Ai,{children:[ft.concepts," ",d.jsx("span",{children:"concepts"})]}),d.jsxs(Ai,{children:[ft.students," ",d.jsx("span",{children:"students"})]}),d.jsxs(Ai,{children:[ft.learns," ",d.jsx("span",{children:"learns"})]})]}),d.jsx(R7,{children:ft.name}),d.jsx(M7,{children:ft.subject}),d.jsx(z7,{children:ft.bio}),d.jsxs(O7,{children:["🎓 ",ft.experience," years experience"]}),d.jsxs(A7,{children:[d.jsx(_7,{children:"Follow"}),d.jsx(N7,{onClick:E,disabled:f,"data-joined":y,"aria-pressed":y,"aria-label":y?"Joined":"Join",title:y?"You're in!":"Join this teacher",children:y?d.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[d.jsx(h6,{size:18})," Joined"]}):f?"Processing…":"Join"}),d.jsx(D7,{"aria-label":"More options",children:"▼"})]}),d.jsxs(k7,{hidden:$,role:"note","aria-live":"polite",children:[d.jsxs(L7,{children:[d.jsx(Lo,{size:18})," Pro library locked — get full access to all concepts & posts."]}),d.jsx($7,{onClick:()=>u(!0),"aria-label":"Unlock full library",children:"Unlock"})]})]})]}),d.jsx(B7,{children:d.jsx(U7,{children:ft.bookList.map((B,V)=>{const O=!y&&V>=m;return d.jsxs(H7,{onClick:()=>S(V),"aria-disabled":O,title:O?"Join to unlock":`Open ${B.title}`,children:[d.jsx(Y7,{$locked:O,children:d.jsx(G7,{children:d.jsx(Di,{size:24})})}),d.jsx(X7,{$locked:O,children:B.title}),!y&&O&&d.jsxs(q7,{children:[d.jsx(Lo,{size:14,style:{marginRight:6}})," Locked"]})]},V)})})})]}),d.jsxs(V7,{children:[d.jsx(eg,{active:!0,children:d.jsx(j6,{size:20})}),d.jsx(eg,{children:d.jsx(c6,{size:20})})]}),d.jsx(K7,{"aria-label":"Teacher posts",children:Array(9).fill(null).map((B,V)=>{const O=!y&&V>=b;return d.jsxs(Q7,{$locked:O,"aria-hidden":!1,children:[d.jsx(Di,{size:24}),O&&d.jsxs(Z7,{children:[d.jsx(Lo,{size:16,style:{marginRight:6}})," Join to view"]})]},V)})}),d.jsx(J7,{hidden:y,onClick:()=>u(!0),"aria-label":"Unlock all posts",children:"Unlock entire library"}),l&&d.jsx(F7,{role:"dialog","aria-modal":"true","aria-labelledby":"pricing-title",children:d.jsxs(W7,{children:[d.jsxs(P7,{children:[d.jsx(I7,{id:"pricing-title",children:"Choose your plan"}),d.jsx(e9,{onClick:()=>u(!1),"aria-label":"Close pricing",children:d.jsx(_6,{size:18})})]}),d.jsx(t9,{children:R.map(B=>d.jsxs(n9,{onClick:()=>c(B.key),$active:o===B.key,"aria-pressed":o===B.key,children:[d.jsx("h4",{children:B.name}),d.jsx("strong",{children:B.price}),d.jsx("p",{children:B.desc})]},B.key))}),d.jsxs(a9,{children:[d.jsx(l9,{onClick:()=>u(!1),children:"Not now"}),d.jsx(i9,{onClick:D,disabled:f,children:f?"Processing payment…":"Demo Pay & Join"})]})]})})]})}const o9=w.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--color-light, #f5f5f5);
`,u9=w.aside`
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
`,s9=w.div`
  flex: 1;
  display: flex;
  width: 100%;

  @media (min-width: 1024px) {
    /* match LeftSidebar width exactly to avoid layout jump */
    margin-left: 246px;
  }
`,c9=w.main`
  flex: 1;
  width: 100%;
  padding-bottom: 60px;
  transition: ${a=>a.$isResizing?"none":"margin-right 0.2s ease"};
  will-change: margin-right;

  @media (min-width: 1024px) {
    padding-bottom: 0;
    margin-right: ${a=>`${a.$sidebarWidth}px`};
  }
`,f9=w.aside`
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
`,d9=w.div`
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
`,p9=w.div`
  display: block;
  margin-bottom: 60px;

  @media (min-width: 1024px) {
    display: none;
  }
`,h9=w.div`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (min-width: 1024px) {
    display: none;
  }
`;function m9(){const[a,l]=x.useState(360),[u,o]=x.useState(!1),c=x.useRef(null),f=350,h=600,y=g=>{g.preventDefault(),o(!0),c.current={startX:g.clientX,startWidth:a}};return x.useEffect(()=>{const g=(S,E,D)=>Math.min(Math.max(S,E),D),m=S=>{if(!u||!c.current)return;const{startX:E,startWidth:D}=c.current,R=E-S.clientX,$=g(D+R,f,h);l($)},b=()=>{u&&(o(!1),c.current=null)};return u&&(document.addEventListener("mousemove",m),document.addEventListener("mouseup",b),document.body.style.cursor="ew-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",b),document.body.style.cursor="",document.body.style.userSelect=""}},[u]),d.jsxs(o9,{children:[d.jsx(u9,{children:d.jsx(Jw,{})}),d.jsxs(s9,{children:[d.jsxs(c9,{$sidebarWidth:a,$isResizing:u,children:[d.jsx(p9,{children:d.jsx(qw,{})}),d.jsxs(pb,{children:[d.jsx($a,{path:"/instalearn",element:d.jsx(I6,{})}),d.jsx($a,{path:"/instalearn/teacher",element:d.jsx(r9,{})}),d.jsx($a,{path:"/instalearn/library",element:d.jsx(e6,{})}),d.jsx($a,{path:"/instalearn/notifications",element:d.jsx(Hm,{})}),d.jsx($a,{path:"/instalearn/more",element:d.jsx(Hm,{})}),d.jsx($a,{path:"/instalearn/profile",element:d.jsx(AS,{})})]})]}),d.jsxs(f9,{$width:a,$isResizing:u,children:[d.jsx(d9,{className:u?"active":"",onMouseDown:y,"aria-label":"Resize sidebar"}),d.jsx(h7,{})]})]}),d.jsx(h9,{children:d.jsx(m7,{})})]})}Ex.createRoot(document.getElementById("root")).render(d.jsx(Lb,{children:d.jsx(m9,{})}));
