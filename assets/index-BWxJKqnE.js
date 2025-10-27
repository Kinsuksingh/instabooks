(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function u(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(c){if(c.ep)return;c.ep=!0;const f=u(c);fetch(c.href,f)}})();function Il(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Tc={exports:{}},Ll={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0;function $2(){if(F0)return Ll;F0=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function u(o,c,f){var p=null;if(f!==void 0&&(p=""+f),c.key!==void 0&&(p=""+c.key),"key"in c){f={};for(var y in c)y!=="key"&&(f[y]=c[y])}else f=c;return c=f.ref,{$$typeof:a,type:o,key:p,ref:c!==void 0?c:null,props:f}}return Ll.Fragment=l,Ll.jsx=u,Ll.jsxs=u,Ll}var W0;function q2(){return W0||(W0=1,Tc.exports=$2()),Tc.exports}var h=q2(),jc={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0;function Y2(){if(P0)return pe;P0=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),p=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),w=Symbol.iterator;function A(T){return T===null||typeof T!="object"?null:(T=w&&T[w]||T["@@iterator"],typeof T=="function"?T:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,L={};function K(T,V,ie){this.props=T,this.context=V,this.refs=L,this.updater=ie||R}K.prototype.isReactComponent={},K.prototype.setState=function(T,V){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,V,"setState")},K.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function _(){}_.prototype=K.prototype;function q(T,V,ie){this.props=T,this.context=V,this.refs=L,this.updater=ie||R}var X=q.prototype=new _;X.constructor=q,Y(X,K.prototype),X.isPureReactComponent=!0;var k=Array.isArray;function M(){}var F={H:null,A:null,T:null,S:null},B=Object.prototype.hasOwnProperty;function Z(T,V,ie){var ae=ie.ref;return{$$typeof:a,type:T,key:V,ref:ae!==void 0?ae:null,props:ie}}function le(T,V){return Z(T.type,V,T.props)}function J(T){return typeof T=="object"&&T!==null&&T.$$typeof===a}function N(T){var V={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(ie){return V[ie]})}var te=/\/+/g;function ne(T,V){return typeof T=="object"&&T!==null&&T.key!=null?N(""+T.key):V.toString(36)}function j(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(M,M):(T.status="pending",T.then(function(V){T.status==="pending"&&(T.status="fulfilled",T.value=V)},function(V){T.status==="pending"&&(T.status="rejected",T.reason=V)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function z(T,V,ie,ae,se){var he=typeof T;(he==="undefined"||he==="boolean")&&(T=null);var ye=!1;if(T===null)ye=!0;else switch(he){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(T.$$typeof){case a:case l:ye=!0;break;case x:return ye=T._init,z(ye(T._payload),V,ie,ae,se)}}if(ye)return se=se(T),ye=ae===""?"."+ne(T,0):ae,k(se)?(ie="",ye!=null&&(ie=ye.replace(te,"$&/")+"/"),z(se,V,ie,"",function(Et){return Et})):se!=null&&(J(se)&&(se=le(se,ie+(se.key==null||T&&T.key===se.key?"":(""+se.key).replace(te,"$&/")+"/")+ye)),V.push(se)),1;ye=0;var Le=ae===""?".":ae+":";if(k(T))for(var Ce=0;Ce<T.length;Ce++)ae=T[Ce],he=Le+ne(ae,Ce),ye+=z(ae,V,ie,he,se);else if(Ce=A(T),typeof Ce=="function")for(T=Ce.call(T),Ce=0;!(ae=T.next()).done;)ae=ae.value,he=Le+ne(ae,Ce++),ye+=z(ae,V,ie,he,se);else if(he==="object"){if(typeof T.then=="function")return z(j(T),V,ie,ae,se);throw V=String(T),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return ye}function $(T,V,ie){if(T==null)return T;var ae=[],se=0;return z(T,ae,"","",function(he){return V.call(ie,he,se++)}),ae}function W(T){if(T._status===-1){var V=T._result;V=V(),V.then(function(ie){(T._status===0||T._status===-1)&&(T._status=1,T._result=ie)},function(ie){(T._status===0||T._status===-1)&&(T._status=2,T._result=ie)}),T._status===-1&&(T._status=0,T._result=V)}if(T._status===1)return T._result.default;throw T._result}var re=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},ce={map:$,forEach:function(T,V,ie){$(T,function(){V.apply(this,arguments)},ie)},count:function(T){var V=0;return $(T,function(){V++}),V},toArray:function(T){return $(T,function(V){return V})||[]},only:function(T){if(!J(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return pe.Activity=S,pe.Children=ce,pe.Component=K,pe.Fragment=u,pe.Profiler=c,pe.PureComponent=q,pe.StrictMode=o,pe.Suspense=v,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,pe.__COMPILER_RUNTIME={__proto__:null,c:function(T){return F.H.useMemoCache(T)}},pe.cache=function(T){return function(){return T.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(T,V,ie){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var ae=Y({},T.props),se=T.key;if(V!=null)for(he in V.key!==void 0&&(se=""+V.key),V)!B.call(V,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&V.ref===void 0||(ae[he]=V[he]);var he=arguments.length-2;if(he===1)ae.children=ie;else if(1<he){for(var ye=Array(he),Le=0;Le<he;Le++)ye[Le]=arguments[Le+2];ae.children=ye}return Z(T.type,se,ae)},pe.createContext=function(T){return T={$$typeof:p,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:f,_context:T},T},pe.createElement=function(T,V,ie){var ae,se={},he=null;if(V!=null)for(ae in V.key!==void 0&&(he=""+V.key),V)B.call(V,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(se[ae]=V[ae]);var ye=arguments.length-2;if(ye===1)se.children=ie;else if(1<ye){for(var Le=Array(ye),Ce=0;Ce<ye;Ce++)Le[Ce]=arguments[Ce+2];se.children=Le}if(T&&T.defaultProps)for(ae in ye=T.defaultProps,ye)se[ae]===void 0&&(se[ae]=ye[ae]);return Z(T,he,se)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(T){return{$$typeof:y,render:T}},pe.isValidElement=J,pe.lazy=function(T){return{$$typeof:x,_payload:{_status:-1,_result:T},_init:W}},pe.memo=function(T,V){return{$$typeof:m,type:T,compare:V===void 0?null:V}},pe.startTransition=function(T){var V=F.T,ie={};F.T=ie;try{var ae=T(),se=F.S;se!==null&&se(ie,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(M,re)}catch(he){re(he)}finally{V!==null&&ie.types!==null&&(V.types=ie.types),F.T=V}},pe.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},pe.use=function(T){return F.H.use(T)},pe.useActionState=function(T,V,ie){return F.H.useActionState(T,V,ie)},pe.useCallback=function(T,V){return F.H.useCallback(T,V)},pe.useContext=function(T){return F.H.useContext(T)},pe.useDebugValue=function(){},pe.useDeferredValue=function(T,V){return F.H.useDeferredValue(T,V)},pe.useEffect=function(T,V){return F.H.useEffect(T,V)},pe.useEffectEvent=function(T){return F.H.useEffectEvent(T)},pe.useId=function(){return F.H.useId()},pe.useImperativeHandle=function(T,V,ie){return F.H.useImperativeHandle(T,V,ie)},pe.useInsertionEffect=function(T,V){return F.H.useInsertionEffect(T,V)},pe.useLayoutEffect=function(T,V){return F.H.useLayoutEffect(T,V)},pe.useMemo=function(T,V){return F.H.useMemo(T,V)},pe.useOptimistic=function(T,V){return F.H.useOptimistic(T,V)},pe.useReducer=function(T,V,ie){return F.H.useReducer(T,V,ie)},pe.useRef=function(T){return F.H.useRef(T)},pe.useState=function(T){return F.H.useState(T)},pe.useSyncExternalStore=function(T,V,ie){return F.H.useSyncExternalStore(T,V,ie)},pe.useTransition=function(){return F.H.useTransition()},pe.version="19.2.0",pe}var I0;function pa(){return I0||(I0=1,jc.exports=Y2()),jc.exports}var b=pa();const qe=Il(b);var Rc={exports:{}},Bl={},Oc={exports:{}},zc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e1;function G2(){return e1||(e1=1,(function(a){function l(z,$){var W=z.length;z.push($);e:for(;0<W;){var re=W-1>>>1,ce=z[re];if(0<c(ce,$))z[re]=$,z[W]=ce,W=re;else break e}}function u(z){return z.length===0?null:z[0]}function o(z){if(z.length===0)return null;var $=z[0],W=z.pop();if(W!==$){z[0]=W;e:for(var re=0,ce=z.length,T=ce>>>1;re<T;){var V=2*(re+1)-1,ie=z[V],ae=V+1,se=z[ae];if(0>c(ie,W))ae<ce&&0>c(se,ie)?(z[re]=se,z[ae]=W,re=ae):(z[re]=ie,z[V]=W,re=V);else if(ae<ce&&0>c(se,W))z[re]=se,z[ae]=W,re=ae;else break e}}return $}function c(z,$){var W=z.sortIndex-$.sortIndex;return W!==0?W:z.id-$.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var p=Date,y=p.now();a.unstable_now=function(){return p.now()-y}}var v=[],m=[],x=1,S=null,w=3,A=!1,R=!1,Y=!1,L=!1,K=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function X(z){for(var $=u(m);$!==null;){if($.callback===null)o(m);else if($.startTime<=z)o(m),$.sortIndex=$.expirationTime,l(v,$);else break;$=u(m)}}function k(z){if(Y=!1,X(z),!R)if(u(v)!==null)R=!0,M||(M=!0,N());else{var $=u(m);$!==null&&j(k,$.startTime-z)}}var M=!1,F=-1,B=5,Z=-1;function le(){return L?!0:!(a.unstable_now()-Z<B)}function J(){if(L=!1,M){var z=a.unstable_now();Z=z;var $=!0;try{e:{R=!1,Y&&(Y=!1,_(F),F=-1),A=!0;var W=w;try{t:{for(X(z),S=u(v);S!==null&&!(S.expirationTime>z&&le());){var re=S.callback;if(typeof re=="function"){S.callback=null,w=S.priorityLevel;var ce=re(S.expirationTime<=z);if(z=a.unstable_now(),typeof ce=="function"){S.callback=ce,X(z),$=!0;break t}S===u(v)&&o(v),X(z)}else o(v);S=u(v)}if(S!==null)$=!0;else{var T=u(m);T!==null&&j(k,T.startTime-z),$=!1}}break e}finally{S=null,w=W,A=!1}$=void 0}}finally{$?N():M=!1}}}var N;if(typeof q=="function")N=function(){q(J)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=J,N=function(){ne.postMessage(null)}}else N=function(){K(J,0)};function j(z,$){F=K(function(){z(a.unstable_now())},$)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return w},a.unstable_next=function(z){switch(w){case 1:case 2:case 3:var $=3;break;default:$=w}var W=w;w=$;try{return z()}finally{w=W}},a.unstable_requestPaint=function(){L=!0},a.unstable_runWithPriority=function(z,$){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var W=w;w=z;try{return $()}finally{w=W}},a.unstable_scheduleCallback=function(z,$,W){var re=a.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?re+W:re):W=re,z){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=W+ce,z={id:x++,callback:$,priorityLevel:z,startTime:W,expirationTime:ce,sortIndex:-1},W>re?(z.sortIndex=W,l(m,z),u(v)===null&&z===u(m)&&(Y?(_(F),F=-1):Y=!0,j(k,W-re))):(z.sortIndex=ce,l(v,z),R||A||(R=!0,M||(M=!0,N()))),z},a.unstable_shouldYield=le,a.unstable_wrapCallback=function(z){var $=w;return function(){var W=w;w=$;try{return z.apply(this,arguments)}finally{w=W}}}})(zc)),zc}var t1;function X2(){return t1||(t1=1,Oc.exports=G2()),Oc.exports}var _c={exports:{}},ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n1;function V2(){if(n1)return ct;n1=1;var a=pa();function l(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)m+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var o={d:{f:u,r:function(){throw Error(l(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(v,m,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:S==null?null:""+S,children:v,containerInfo:m,implementation:x}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ct.createPortal=function(v,m){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(l(299));return f(v,m,null,x)},ct.flushSync=function(v){var m=p.T,x=o.p;try{if(p.T=null,o.p=2,v)return v()}finally{p.T=m,o.p=x,o.d.f()}},ct.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(v,m))},ct.prefetchDNS=function(v){typeof v=="string"&&o.d.D(v)},ct.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var x=m.as,S=y(x,m.crossOrigin),w=typeof m.integrity=="string"?m.integrity:void 0,A=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;x==="style"?o.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:w,fetchPriority:A}):x==="script"&&o.d.X(v,{crossOrigin:S,integrity:w,fetchPriority:A,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ct.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var x=y(m.as,m.crossOrigin);o.d.M(v,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(v)},ct.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var x=m.as,S=y(x,m.crossOrigin);o.d.L(v,x,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ct.preloadModule=function(v,m){if(typeof v=="string")if(m){var x=y(m.as,m.crossOrigin);o.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(v)},ct.requestFormReset=function(v){o.d.r(v)},ct.unstable_batchedUpdates=function(v,m){return v(m)},ct.useFormState=function(v,m,x){return p.H.useFormState(v,m,x)},ct.useFormStatus=function(){return p.H.useHostTransitionStatus()},ct.version="19.2.0",ct}var a1;function Om(){if(a1)return _c.exports;a1=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),_c.exports=V2(),_c.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i1;function Q2(){if(i1)return Bl;i1=1;var a=X2(),l=pa(),u=Om();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(f(e)!==e)throw Error(o(188))}function m(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return v(r),e;if(s===i)return v(r),t;s=s.sibling}throw Error(o(188))}if(n.return!==i.return)n=r,i=s;else{for(var d=!1,g=r.child;g;){if(g===n){d=!0,n=r,i=s;break}if(g===i){d=!0,i=r,n=s;break}g=g.sibling}if(!d){for(g=s.child;g;){if(g===n){d=!0,n=s,i=r;break}if(g===i){d=!0,i=s,n=r;break}g=g.sibling}if(!d)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,w=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),_=Symbol.for("react.consumer"),q=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),le=Symbol.for("react.memo_cache_sentinel"),J=Symbol.iterator;function N(e){return e===null||typeof e!="object"?null:(e=J&&e[J]||e["@@iterator"],typeof e=="function"?e:null)}var te=Symbol.for("react.client.reference");function ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case K:return"Profiler";case L:return"StrictMode";case k:return"Suspense";case M:return"SuspenseList";case Z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case q:return e.displayName||"Context";case _:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:ne(e.type)||"Memo";case B:t=e._payload,e=e._init;try{return ne(e(t))}catch{}}return null}var j=Array.isArray,z=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},re=[],ce=-1;function T(e){return{current:e}}function V(e){0>ce||(e.current=re[ce],re[ce]=null,ce--)}function ie(e,t){ce++,re[ce]=e.current,e.current=t}var ae=T(null),se=T(null),he=T(null),ye=T(null);function Le(e,t){switch(ie(he,t),ie(se,e),ie(ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?b0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=b0(t),e=x0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(ae),ie(ae,e)}function Ce(){V(ae),V(se),V(he)}function Et(e){e.memoizedState!==null&&ie(ye,e);var t=ae.current,n=x0(t,e.type);t!==n&&(ie(se,e),ie(ae,n))}function Kt(e){se.current===e&&(V(ae),V(se)),ye.current===e&&(V(ye),Al._currentValue=W)}var ht,Ua;function Lt(e){if(ht===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ht=t&&t[1]||"",Ua=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ht+e+Ua}var Be=!1;function Ha(e,t){if(!e||Be)return"";Be=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(Q){var G=Q}Reflect.construct(e,[],ee)}else{try{ee.call()}catch(Q){G=Q}e.call(ee.prototype)}}else{try{throw Error()}catch(Q){G=Q}(ee=e())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(Q){if(Q&&G&&typeof Q.stack=="string")return[Q.stack,G.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),d=s[0],g=s[1];if(d&&g){var C=d.split(`
`),H=g.split(`
`);for(r=i=0;i<C.length&&!C[i].includes("DetermineComponentFrameRoot");)i++;for(;r<H.length&&!H[r].includes("DetermineComponentFrameRoot");)r++;if(i===C.length||r===H.length)for(i=C.length-1,r=H.length-1;1<=i&&0<=r&&C[i]!==H[r];)r--;for(;1<=i&&0<=r;i--,r--)if(C[i]!==H[r]){if(i!==1||r!==1)do if(i--,r--,0>r||C[i]!==H[r]){var P=`
`+C[i].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),P}while(1<=i&&0<=r);break}}}finally{Be=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Lt(n):""}function Gi(e,t){switch(e.tag){case 26:case 27:case 5:return Lt(e.type);case 16:return Lt("Lazy");case 13:return e.child!==t&&t!==null?Lt("Suspense Fallback"):Lt("Suspense");case 19:return Lt("SuspenseList");case 0:case 15:return Ha(e.type,!1);case 11:return Ha(e.type.render,!1);case 1:return Ha(e.type,!0);case 31:return Lt("Activity");default:return""}}function Ff(e){try{var t="",n=null;do t+=Gi(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var cu=Object.prototype.hasOwnProperty,fu=a.unstable_scheduleCallback,du=a.unstable_cancelCallback,yv=a.unstable_shouldYield,bv=a.unstable_requestPaint,Ct=a.unstable_now,xv=a.unstable_getCurrentPriorityLevel,Wf=a.unstable_ImmediatePriority,Pf=a.unstable_UserBlockingPriority,ir=a.unstable_NormalPriority,Sv=a.unstable_LowPriority,If=a.unstable_IdlePriority,wv=a.log,Ev=a.unstable_setDisableYieldValue,Xi=null,Tt=null;function Hn(e){if(typeof wv=="function"&&Ev(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(Xi,e)}catch{}}var jt=Math.clz32?Math.clz32:jv,Cv=Math.log,Tv=Math.LN2;function jv(e){return e>>>=0,e===0?32:31-(Cv(e)/Tv|0)|0}var lr=256,rr=262144,or=4194304;function ma(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ur(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var r=0,s=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var g=i&134217727;return g!==0?(i=g&~s,i!==0?r=ma(i):(d&=g,d!==0?r=ma(d):n||(n=g&~e,n!==0&&(r=ma(n))))):(g=i&~s,g!==0?r=ma(g):d!==0?r=ma(d):n||(n=i&~e,n!==0&&(r=ma(n)))),r===0?0:t!==0&&t!==r&&(t&s)===0&&(s=r&-r,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:r}function Vi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Rv(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ed(){var e=or;return or<<=1,(or&62914560)===0&&(or=4194304),e}function hu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ov(e,t,n,i,r,s){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,C=e.expirationTimes,H=e.hiddenUpdates;for(n=d&~n;0<n;){var P=31-jt(n),ee=1<<P;g[P]=0,C[P]=-1;var G=H[P];if(G!==null)for(H[P]=null,P=0;P<G.length;P++){var Q=G[P];Q!==null&&(Q.lane&=-536870913)}n&=~ee}i!==0&&td(e,i,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(d&~t))}function td(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-jt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function nd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-jt(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}function ad(e,t){var n=t&-t;return n=(n&42)!==0?1:pu(n),(n&(e.suspendedLanes|t))!==0?0:n}function pu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function mu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function id(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:G0(e.type))}function ld(e,t){var n=$.p;try{return $.p=e,t()}finally{$.p=n}}var $n=Math.random().toString(36).slice(2),it="__reactFiber$"+$n,mt="__reactProps$"+$n,$a="__reactContainer$"+$n,gu="__reactEvents$"+$n,zv="__reactListeners$"+$n,_v="__reactHandles$"+$n,rd="__reactResources$"+$n,Zi="__reactMarker$"+$n;function vu(e){delete e[it],delete e[mt],delete e[gu],delete e[zv],delete e[_v]}function qa(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$a]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=R0(e);e!==null;){if(n=e[it])return n;e=R0(e)}return t}e=n,n=e.parentNode}return null}function Ya(e){if(e=e[it]||e[$a]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ki(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Ga(e){var t=e[rd];return t||(t=e[rd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[Zi]=!0}var od=new Set,ud={};function ga(e,t){Xa(e,t),Xa(e+"Capture",t)}function Xa(e,t){for(ud[e]=t,e=0;e<t.length;e++)od.add(t[e])}var Mv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sd={},cd={};function Av(e){return cu.call(cd,e)?!0:cu.call(sd,e)?!1:Mv.test(e)?cd[e]=!0:(sd[e]=!0,!1)}function sr(e,t,n){if(Av(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function cr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function fn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dv(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(d){n=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yu(e){if(!e._valueTracker){var t=fd(e)?"checked":"value";e._valueTracker=Dv(e,t,""+e[t])}}function dd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=fd(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function fr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Nv=/[\n"\\]/g;function Ut(e){return e.replace(Nv,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function bu(e,t,n,i,r,s,d,g){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Bt(t)):e.value!==""+Bt(t)&&(e.value=""+Bt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?xu(e,d,Bt(t)):n!=null?xu(e,d,Bt(n)):i!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Bt(g):e.removeAttribute("name")}function hd(e,t,n,i,r,s,d,g){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){yu(e);return}n=n!=null?""+Bt(n):"",t=t!=null?""+Bt(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=g?e.checked:!!i,e.defaultChecked=!!i,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),yu(e)}function xu(e,t,n){t==="number"&&fr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Va(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function pd(e,t,n){if(t!=null&&(t=""+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Bt(n):""}function md(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(o(92));if(j(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Bt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),yu(e)}function Qa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var kv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gd(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||kv.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function vd(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in t)i=t[r],t.hasOwnProperty(r)&&n[r]!==i&&gd(e,r,i)}else for(var s in t)t.hasOwnProperty(s)&&gd(e,s,t[s])}function Su(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dr(e){return Bv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function dn(){}var wu=null;function Eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Za=null,Ka=null;function yd(e){var t=Ya(e);if(t&&(e=t.stateNode)){var n=e[mt]||null;e:switch(e=t.stateNode,t.type){case"input":if(bu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ut(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=i[mt]||null;if(!r)throw Error(o(90));bu(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&dd(i)}break e;case"textarea":pd(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Va(e,!!n.multiple,t,!1)}}}var Cu=!1;function bd(e,t,n){if(Cu)return e(t,n);Cu=!0;try{var i=e(t);return i}finally{if(Cu=!1,(Za!==null||Ka!==null)&&(Ir(),Za&&(t=Za,e=Ka,Ka=Za=null,yd(t),e)))for(t=0;t<e.length;t++)yd(e[t])}}function Ji(e,t){var n=e.stateNode;if(n===null)return null;var i=n[mt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tu=!1;if(hn)try{var Fi={};Object.defineProperty(Fi,"passive",{get:function(){Tu=!0}}),window.addEventListener("test",Fi,Fi),window.removeEventListener("test",Fi,Fi)}catch{Tu=!1}var qn=null,ju=null,hr=null;function xd(){if(hr)return hr;var e,t=ju,n=t.length,i,r="value"in qn?qn.value:qn.textContent,s=r.length;for(e=0;e<n&&t[e]===r[e];e++);var d=n-e;for(i=1;i<=d&&t[n-i]===r[s-i];i++);return hr=r.slice(e,1<i?1-i:void 0)}function pr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mr(){return!0}function Sd(){return!1}function gt(e){function t(n,i,r,s,d){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(s):s[g]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?mr:Sd,this.isPropagationStopped=Sd,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mr)},persist:function(){},isPersistent:mr}),t}var va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gr=gt(va),Wi=S({},va,{view:0,detail:0}),Uv=gt(Wi),Ru,Ou,Pi,vr=S({},Wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pi&&(Pi&&e.type==="mousemove"?(Ru=e.screenX-Pi.screenX,Ou=e.screenY-Pi.screenY):Ou=Ru=0,Pi=e),Ru)},movementY:function(e){return"movementY"in e?e.movementY:Ou}}),wd=gt(vr),Hv=S({},vr,{dataTransfer:0}),$v=gt(Hv),qv=S({},Wi,{relatedTarget:0}),zu=gt(qv),Yv=S({},va,{animationName:0,elapsedTime:0,pseudoElement:0}),Gv=gt(Yv),Xv=S({},va,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vv=gt(Xv),Qv=S({},va,{data:0}),Ed=gt(Qv),Zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jv[e])?!!t[e]:!1}function _u(){return Fv}var Wv=S({},Wi,{key:function(e){if(e.key){var t=Zv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=pr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(e){return e.type==="keypress"?pr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pv=gt(Wv),Iv=S({},vr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cd=gt(Iv),ey=S({},Wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),ty=gt(ey),ny=S({},va,{propertyName:0,elapsedTime:0,pseudoElement:0}),ay=gt(ny),iy=S({},vr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ly=gt(iy),ry=S({},va,{newState:0,oldState:0}),oy=gt(ry),uy=[9,13,27,32],Mu=hn&&"CompositionEvent"in window,Ii=null;hn&&"documentMode"in document&&(Ii=document.documentMode);var sy=hn&&"TextEvent"in window&&!Ii,Td=hn&&(!Mu||Ii&&8<Ii&&11>=Ii),jd=" ",Rd=!1;function Od(e,t){switch(e){case"keyup":return uy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ja=!1;function cy(e,t){switch(e){case"compositionend":return zd(t);case"keypress":return t.which!==32?null:(Rd=!0,jd);case"textInput":return e=t.data,e===jd&&Rd?null:e;default:return null}}function fy(e,t){if(Ja)return e==="compositionend"||!Mu&&Od(e,t)?(e=xd(),hr=ju=qn=null,Ja=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Td&&t.locale!=="ko"?null:t.data;default:return null}}var dy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _d(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dy[e.type]:t==="textarea"}function Md(e,t,n,i){Za?Ka?Ka.push(i):Ka=[i]:Za=i,t=ro(t,"onChange"),0<t.length&&(n=new gr("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var el=null,tl=null;function hy(e){h0(e,0)}function yr(e){var t=Ki(e);if(dd(t))return e}function Ad(e,t){if(e==="change")return t}var Dd=!1;if(hn){var Au;if(hn){var Du="oninput"in document;if(!Du){var Nd=document.createElement("div");Nd.setAttribute("oninput","return;"),Du=typeof Nd.oninput=="function"}Au=Du}else Au=!1;Dd=Au&&(!document.documentMode||9<document.documentMode)}function kd(){el&&(el.detachEvent("onpropertychange",Ld),tl=el=null)}function Ld(e){if(e.propertyName==="value"&&yr(tl)){var t=[];Md(t,tl,e,Eu(e)),bd(hy,t)}}function py(e,t,n){e==="focusin"?(kd(),el=t,tl=n,el.attachEvent("onpropertychange",Ld)):e==="focusout"&&kd()}function my(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yr(tl)}function gy(e,t){if(e==="click")return yr(t)}function vy(e,t){if(e==="input"||e==="change")return yr(t)}function yy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:yy;function nl(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!cu.call(t,r)||!Rt(e[r],t[r]))return!1}return!0}function Bd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ud(e,t){var n=Bd(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bd(n)}}function Hd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $d(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=fr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fr(e.document)}return t}function Nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var by=hn&&"documentMode"in document&&11>=document.documentMode,Fa=null,ku=null,al=null,Lu=!1;function qd(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lu||Fa==null||Fa!==fr(i)||(i=Fa,"selectionStart"in i&&Nu(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),al&&nl(al,i)||(al=i,i=ro(ku,"onSelect"),0<i.length&&(t=new gr("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Fa)))}function ya(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wa={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionrun:ya("Transition","TransitionRun"),transitionstart:ya("Transition","TransitionStart"),transitioncancel:ya("Transition","TransitionCancel"),transitionend:ya("Transition","TransitionEnd")},Bu={},Yd={};hn&&(Yd=document.createElement("div").style,"AnimationEvent"in window||(delete Wa.animationend.animation,delete Wa.animationiteration.animation,delete Wa.animationstart.animation),"TransitionEvent"in window||delete Wa.transitionend.transition);function ba(e){if(Bu[e])return Bu[e];if(!Wa[e])return e;var t=Wa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yd)return Bu[e]=t[n];return e}var Gd=ba("animationend"),Xd=ba("animationiteration"),Vd=ba("animationstart"),xy=ba("transitionrun"),Sy=ba("transitionstart"),wy=ba("transitioncancel"),Qd=ba("transitionend"),Zd=new Map,Uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uu.push("scrollEnd");function Jt(e,t){Zd.set(e,t),ga(t,[e])}var br=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ht=[],Pa=0,Hu=0;function xr(){for(var e=Pa,t=Hu=Pa=0;t<e;){var n=Ht[t];Ht[t++]=null;var i=Ht[t];Ht[t++]=null;var r=Ht[t];Ht[t++]=null;var s=Ht[t];if(Ht[t++]=null,i!==null&&r!==null){var d=i.pending;d===null?r.next=r:(r.next=d.next,d.next=r),i.pending=r}s!==0&&Kd(n,r,s)}}function Sr(e,t,n,i){Ht[Pa++]=e,Ht[Pa++]=t,Ht[Pa++]=n,Ht[Pa++]=i,Hu|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function $u(e,t,n,i){return Sr(e,t,n,i),wr(e)}function xa(e,t){return Sr(e,null,null,t),wr(e)}function Kd(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var r=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&t!==null&&(r=31-jt(n),e=s.hiddenUpdates,i=e[r],i===null?e[r]=[t]:i.push(t),t.lane=n|536870912),s):null}function wr(e){if(50<Tl)throw Tl=0,Js=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ia={};function Ey(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,i){return new Ey(e,t,n,i)}function qu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pn(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Jd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Er(e,t,n,i,r,s){var d=0;if(i=e,typeof e=="function")qu(e)&&(d=1);else if(typeof e=="string")d=O2(e,n,ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Z:return e=Ot(31,n,t,r),e.elementType=Z,e.lanes=s,e;case Y:return Sa(n.children,r,s,t);case L:d=8,r|=24;break;case K:return e=Ot(12,n,t,r|2),e.elementType=K,e.lanes=s,e;case k:return e=Ot(13,n,t,r),e.elementType=k,e.lanes=s,e;case M:return e=Ot(19,n,t,r),e.elementType=M,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q:d=10;break e;case _:d=9;break e;case X:d=11;break e;case F:d=14;break e;case B:d=16,i=null;break e}d=29,n=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=Ot(d,n,t,r),t.elementType=e,t.type=i,t.lanes=s,t}function Sa(e,t,n,i){return e=Ot(7,e,i,t),e.lanes=n,e}function Yu(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function Fd(e){var t=Ot(18,null,null,0);return t.stateNode=e,t}function Gu(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Wd=new WeakMap;function $t(e,t){if(typeof e=="object"&&e!==null){var n=Wd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ff(t)},Wd.set(e,t),t)}return{value:e,source:t,stack:Ff(t)}}var ei=[],ti=0,Cr=null,il=0,qt=[],Yt=0,Yn=null,nn=1,an="";function mn(e,t){ei[ti++]=il,ei[ti++]=Cr,Cr=e,il=t}function Pd(e,t,n){qt[Yt++]=nn,qt[Yt++]=an,qt[Yt++]=Yn,Yn=e;var i=nn;e=an;var r=32-jt(i)-1;i&=~(1<<r),n+=1;var s=32-jt(t)+r;if(30<s){var d=r-r%5;s=(i&(1<<d)-1).toString(32),i>>=d,r-=d,nn=1<<32-jt(t)+r|n<<r|i,an=s+e}else nn=1<<s|n<<r|i,an=e}function Xu(e){e.return!==null&&(mn(e,1),Pd(e,1,0))}function Vu(e){for(;e===Cr;)Cr=ei[--ti],ei[ti]=null,il=ei[--ti],ei[ti]=null;for(;e===Yn;)Yn=qt[--Yt],qt[Yt]=null,an=qt[--Yt],qt[Yt]=null,nn=qt[--Yt],qt[Yt]=null}function Id(e,t){qt[Yt++]=nn,qt[Yt++]=an,qt[Yt++]=Yn,nn=t.id,an=t.overflow,Yn=e}var lt=null,Ue=null,Ee=!1,Gn=null,Gt=!1,Qu=Error(o(519));function Xn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ll($t(t,e)),Qu}function eh(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[it]=e,t[mt]=i,n){case"dialog":xe("cancel",t),xe("close",t);break;case"iframe":case"object":case"embed":xe("load",t);break;case"video":case"audio":for(n=0;n<Rl.length;n++)xe(Rl[n],t);break;case"source":xe("error",t);break;case"img":case"image":case"link":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"input":xe("invalid",t),hd(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":xe("invalid",t);break;case"textarea":xe("invalid",t),md(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||v0(t.textContent,n)?(i.popover!=null&&(xe("beforetoggle",t),xe("toggle",t)),i.onScroll!=null&&xe("scroll",t),i.onScrollEnd!=null&&xe("scrollend",t),i.onClick!=null&&(t.onclick=dn),t=!0):t=!1,t||Xn(e,!0)}function th(e){for(lt=e.return;lt;)switch(lt.tag){case 5:case 31:case 13:Gt=!1;return;case 27:case 3:Gt=!0;return;default:lt=lt.return}}function ni(e){if(e!==lt)return!1;if(!Ee)return th(e),Ee=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||cc(e.type,e.memoizedProps)),n=!n),n&&Ue&&Xn(e),th(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ue=j0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ue=j0(e)}else t===27?(t=Ue,ia(e.type)?(e=mc,mc=null,Ue=e):Ue=t):Ue=lt?Vt(e.stateNode.nextSibling):null;return!0}function wa(){Ue=lt=null,Ee=!1}function Zu(){var e=Gn;return e!==null&&(xt===null?xt=e:xt.push.apply(xt,e),Gn=null),e}function ll(e){Gn===null?Gn=[e]:Gn.push(e)}var Ku=T(null),Ea=null,gn=null;function Vn(e,t,n){ie(Ku,t._currentValue),t._currentValue=n}function vn(e){e._currentValue=Ku.current,V(Ku)}function Ju(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Fu(e,t,n,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var d=r.child;s=s.firstContext;e:for(;s!==null;){var g=s;s=r;for(var C=0;C<t.length;C++)if(g.context===t[C]){s.lanes|=n,g=s.alternate,g!==null&&(g.lanes|=n),Ju(s.return,n,e),i||(d=null);break e}s=g.next}}else if(r.tag===18){if(d=r.return,d===null)throw Error(o(341));d.lanes|=n,s=d.alternate,s!==null&&(s.lanes|=n),Ju(d,n,e),d=null}else d=r.child;if(d!==null)d.return=r;else for(d=r;d!==null;){if(d===e){d=null;break}if(r=d.sibling,r!==null){r.return=d.return,d=r;break}d=d.return}r=d}}function ai(e,t,n,i){e=null;for(var r=t,s=!1;r!==null;){if(!s){if((r.flags&524288)!==0)s=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var d=r.alternate;if(d===null)throw Error(o(387));if(d=d.memoizedProps,d!==null){var g=r.type;Rt(r.pendingProps.value,d.value)||(e!==null?e.push(g):e=[g])}}else if(r===ye.current){if(d=r.alternate,d===null)throw Error(o(387));d.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Al):e=[Al])}r=r.return}e!==null&&Fu(t,e,n,i),t.flags|=262144}function Tr(e){for(e=e.firstContext;e!==null;){if(!Rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ca(e){Ea=e,gn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rt(e){return nh(Ea,e)}function jr(e,t){return Ea===null&&Ca(e),nh(e,t)}function nh(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},gn===null){if(e===null)throw Error(o(308));gn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else gn=gn.next=t;return n}var Cy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Ty=a.unstable_scheduleCallback,jy=a.unstable_NormalPriority,Ke={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wu(){return{controller:new Cy,data:new Map,refCount:0}}function rl(e){e.refCount--,e.refCount===0&&Ty(jy,function(){e.controller.abort()})}var ol=null,Pu=0,ii=0,li=null;function Ry(e,t){if(ol===null){var n=ol=[];Pu=0,ii=tc(),li={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Pu++,t.then(ah,ah),t}function ah(){if(--Pu===0&&ol!==null){li!==null&&(li.status="fulfilled");var e=ol;ol=null,ii=0,li=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Oy(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(i.status="rejected",i.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),i}var ih=z.S;z.S=function(e,t){qp=Ct(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ry(e,t),ih!==null&&ih(e,t)};var Ta=T(null);function Iu(){var e=Ta.current;return e!==null?e:ke.pooledCache}function Rr(e,t){t===null?ie(Ta,Ta.current):ie(Ta,t.pool)}function lh(){var e=Iu();return e===null?null:{parent:Ke._currentValue,pool:e}}var ri=Error(o(460)),es=Error(o(474)),Or=Error(o(542)),zr={then:function(){}};function rh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function oh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(dn,dn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,sh(e),e;default:if(typeof t.status=="string")t.then(dn,dn);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=i}},function(i){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,sh(e),e}throw Ra=t,ri}}function ja(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ra=n,ri):n}}var Ra=null;function uh(){if(Ra===null)throw Error(o(459));var e=Ra;return Ra=null,e}function sh(e){if(e===ri||e===Or)throw Error(o(483))}var oi=null,ul=0;function _r(e){var t=ul;return ul+=1,oi===null&&(oi=[]),oh(oi,e,t)}function sl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Mr(e,t){throw t.$$typeof===w?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ch(e){function t(D,O){if(e){var U=D.deletions;U===null?(D.deletions=[O],D.flags|=16):U.push(O)}}function n(D,O){if(!e)return null;for(;O!==null;)t(D,O),O=O.sibling;return null}function i(D){for(var O=new Map;D!==null;)D.key!==null?O.set(D.key,D):O.set(D.index,D),D=D.sibling;return O}function r(D,O){return D=pn(D,O),D.index=0,D.sibling=null,D}function s(D,O,U){return D.index=U,e?(U=D.alternate,U!==null?(U=U.index,U<O?(D.flags|=67108866,O):U):(D.flags|=67108866,O)):(D.flags|=1048576,O)}function d(D){return e&&D.alternate===null&&(D.flags|=67108866),D}function g(D,O,U,I){return O===null||O.tag!==6?(O=Yu(U,D.mode,I),O.return=D,O):(O=r(O,U),O.return=D,O)}function C(D,O,U,I){var fe=U.type;return fe===Y?P(D,O,U.props.children,I,U.key):O!==null&&(O.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===B&&ja(fe)===O.type)?(O=r(O,U.props),sl(O,U),O.return=D,O):(O=Er(U.type,U.key,U.props,null,D.mode,I),sl(O,U),O.return=D,O)}function H(D,O,U,I){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=Gu(U,D.mode,I),O.return=D,O):(O=r(O,U.children||[]),O.return=D,O)}function P(D,O,U,I,fe){return O===null||O.tag!==7?(O=Sa(U,D.mode,I,fe),O.return=D,O):(O=r(O,U),O.return=D,O)}function ee(D,O,U){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Yu(""+O,D.mode,U),O.return=D,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case A:return U=Er(O.type,O.key,O.props,null,D.mode,U),sl(U,O),U.return=D,U;case R:return O=Gu(O,D.mode,U),O.return=D,O;case B:return O=ja(O),ee(D,O,U)}if(j(O)||N(O))return O=Sa(O,D.mode,U,null),O.return=D,O;if(typeof O.then=="function")return ee(D,_r(O),U);if(O.$$typeof===q)return ee(D,jr(D,O),U);Mr(D,O)}return null}function G(D,O,U,I){var fe=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return fe!==null?null:g(D,O,""+U,I);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case A:return U.key===fe?C(D,O,U,I):null;case R:return U.key===fe?H(D,O,U,I):null;case B:return U=ja(U),G(D,O,U,I)}if(j(U)||N(U))return fe!==null?null:P(D,O,U,I,null);if(typeof U.then=="function")return G(D,O,_r(U),I);if(U.$$typeof===q)return G(D,O,jr(D,U),I);Mr(D,U)}return null}function Q(D,O,U,I,fe){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return D=D.get(U)||null,g(O,D,""+I,fe);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case A:return D=D.get(I.key===null?U:I.key)||null,C(O,D,I,fe);case R:return D=D.get(I.key===null?U:I.key)||null,H(O,D,I,fe);case B:return I=ja(I),Q(D,O,U,I,fe)}if(j(I)||N(I))return D=D.get(U)||null,P(O,D,I,fe,null);if(typeof I.then=="function")return Q(D,O,U,_r(I),fe);if(I.$$typeof===q)return Q(D,O,U,jr(O,I),fe);Mr(O,I)}return null}function oe(D,O,U,I){for(var fe=null,Te=null,ue=O,ge=O=0,we=null;ue!==null&&ge<U.length;ge++){ue.index>ge?(we=ue,ue=null):we=ue.sibling;var je=G(D,ue,U[ge],I);if(je===null){ue===null&&(ue=we);break}e&&ue&&je.alternate===null&&t(D,ue),O=s(je,O,ge),Te===null?fe=je:Te.sibling=je,Te=je,ue=we}if(ge===U.length)return n(D,ue),Ee&&mn(D,ge),fe;if(ue===null){for(;ge<U.length;ge++)ue=ee(D,U[ge],I),ue!==null&&(O=s(ue,O,ge),Te===null?fe=ue:Te.sibling=ue,Te=ue);return Ee&&mn(D,ge),fe}for(ue=i(ue);ge<U.length;ge++)we=Q(ue,D,ge,U[ge],I),we!==null&&(e&&we.alternate!==null&&ue.delete(we.key===null?ge:we.key),O=s(we,O,ge),Te===null?fe=we:Te.sibling=we,Te=we);return e&&ue.forEach(function(sa){return t(D,sa)}),Ee&&mn(D,ge),fe}function de(D,O,U,I){if(U==null)throw Error(o(151));for(var fe=null,Te=null,ue=O,ge=O=0,we=null,je=U.next();ue!==null&&!je.done;ge++,je=U.next()){ue.index>ge?(we=ue,ue=null):we=ue.sibling;var sa=G(D,ue,je.value,I);if(sa===null){ue===null&&(ue=we);break}e&&ue&&sa.alternate===null&&t(D,ue),O=s(sa,O,ge),Te===null?fe=sa:Te.sibling=sa,Te=sa,ue=we}if(je.done)return n(D,ue),Ee&&mn(D,ge),fe;if(ue===null){for(;!je.done;ge++,je=U.next())je=ee(D,je.value,I),je!==null&&(O=s(je,O,ge),Te===null?fe=je:Te.sibling=je,Te=je);return Ee&&mn(D,ge),fe}for(ue=i(ue);!je.done;ge++,je=U.next())je=Q(ue,D,ge,je.value,I),je!==null&&(e&&je.alternate!==null&&ue.delete(je.key===null?ge:je.key),O=s(je,O,ge),Te===null?fe=je:Te.sibling=je,Te=je);return e&&ue.forEach(function(H2){return t(D,H2)}),Ee&&mn(D,ge),fe}function Ne(D,O,U,I){if(typeof U=="object"&&U!==null&&U.type===Y&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case A:e:{for(var fe=U.key;O!==null;){if(O.key===fe){if(fe=U.type,fe===Y){if(O.tag===7){n(D,O.sibling),I=r(O,U.props.children),I.return=D,D=I;break e}}else if(O.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===B&&ja(fe)===O.type){n(D,O.sibling),I=r(O,U.props),sl(I,U),I.return=D,D=I;break e}n(D,O);break}else t(D,O);O=O.sibling}U.type===Y?(I=Sa(U.props.children,D.mode,I,U.key),I.return=D,D=I):(I=Er(U.type,U.key,U.props,null,D.mode,I),sl(I,U),I.return=D,D=I)}return d(D);case R:e:{for(fe=U.key;O!==null;){if(O.key===fe)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){n(D,O.sibling),I=r(O,U.children||[]),I.return=D,D=I;break e}else{n(D,O);break}else t(D,O);O=O.sibling}I=Gu(U,D.mode,I),I.return=D,D=I}return d(D);case B:return U=ja(U),Ne(D,O,U,I)}if(j(U))return oe(D,O,U,I);if(N(U)){if(fe=N(U),typeof fe!="function")throw Error(o(150));return U=fe.call(U),de(D,O,U,I)}if(typeof U.then=="function")return Ne(D,O,_r(U),I);if(U.$$typeof===q)return Ne(D,O,jr(D,U),I);Mr(D,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,O!==null&&O.tag===6?(n(D,O.sibling),I=r(O,U),I.return=D,D=I):(n(D,O),I=Yu(U,D.mode,I),I.return=D,D=I),d(D)):n(D,O)}return function(D,O,U,I){try{ul=0;var fe=Ne(D,O,U,I);return oi=null,fe}catch(ue){if(ue===ri||ue===Or)throw ue;var Te=Ot(29,ue,null,D.mode);return Te.lanes=I,Te.return=D,Te}finally{}}}var Oa=ch(!0),fh=ch(!1),Qn=!1;function ts(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ns(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Zn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Kn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Oe&2)!==0){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,t=wr(e),Kd(e,null,n),t}return Sr(e,i,t,n),wr(e)}function cl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,nd(e,n)}}function as(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?r=s=d:s=s.next=d,n=n.next}while(n!==null);s===null?r=s=t:s=s.next=t}else r=s=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var is=!1;function fl(){if(is){var e=li;if(e!==null)throw e}}function dl(e,t,n,i){is=!1;var r=e.updateQueue;Qn=!1;var s=r.firstBaseUpdate,d=r.lastBaseUpdate,g=r.shared.pending;if(g!==null){r.shared.pending=null;var C=g,H=C.next;C.next=null,d===null?s=H:d.next=H,d=C;var P=e.alternate;P!==null&&(P=P.updateQueue,g=P.lastBaseUpdate,g!==d&&(g===null?P.firstBaseUpdate=H:g.next=H,P.lastBaseUpdate=C))}if(s!==null){var ee=r.baseState;d=0,P=H=C=null,g=s;do{var G=g.lane&-536870913,Q=G!==g.lane;if(Q?(Se&G)===G:(i&G)===G){G!==0&&G===ii&&(is=!0),P!==null&&(P=P.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var oe=e,de=g;G=t;var Ne=n;switch(de.tag){case 1:if(oe=de.payload,typeof oe=="function"){ee=oe.call(Ne,ee,G);break e}ee=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=de.payload,G=typeof oe=="function"?oe.call(Ne,ee,G):oe,G==null)break e;ee=S({},ee,G);break e;case 2:Qn=!0}}G=g.callback,G!==null&&(e.flags|=64,Q&&(e.flags|=8192),Q=r.callbacks,Q===null?r.callbacks=[G]:Q.push(G))}else Q={lane:G,tag:g.tag,payload:g.payload,callback:g.callback,next:null},P===null?(H=P=Q,C=ee):P=P.next=Q,d|=G;if(g=g.next,g===null){if(g=r.shared.pending,g===null)break;Q=g,g=Q.next,Q.next=null,r.lastBaseUpdate=Q,r.shared.pending=null}}while(!0);P===null&&(C=ee),r.baseState=C,r.firstBaseUpdate=H,r.lastBaseUpdate=P,s===null&&(r.shared.lanes=0),In|=d,e.lanes=d,e.memoizedState=ee}}function dh(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function hh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)dh(n[e],t)}var ui=T(null),Ar=T(0);function ph(e,t){e=jn,ie(Ar,e),ie(ui,t),jn=e|t.baseLanes}function ls(){ie(Ar,jn),ie(ui,ui.current)}function rs(){jn=Ar.current,V(ui),V(Ar)}var zt=T(null),Xt=null;function Jn(e){var t=e.alternate;ie(Qe,Qe.current&1),ie(zt,e),Xt===null&&(t===null||ui.current!==null||t.memoizedState!==null)&&(Xt=e)}function os(e){ie(Qe,Qe.current),ie(zt,e),Xt===null&&(Xt=e)}function mh(e){e.tag===22?(ie(Qe,Qe.current),ie(zt,e),Xt===null&&(Xt=e)):Fn()}function Fn(){ie(Qe,Qe.current),ie(zt,zt.current)}function _t(e){V(zt),Xt===e&&(Xt=null),V(Qe)}var Qe=T(0);function Dr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||hc(n)||pc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yn=0,me=null,Ae=null,Je=null,Nr=!1,si=!1,za=!1,kr=0,hl=0,ci=null,zy=0;function Xe(){throw Error(o(321))}function us(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function ss(e,t,n,i,r,s){return yn=s,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=e===null||e.memoizedState===null?Ph:Cs,za=!1,s=n(i,r),za=!1,si&&(s=vh(t,n,i,r)),gh(e),s}function gh(e){z.H=gl;var t=Ae!==null&&Ae.next!==null;if(yn=0,Je=Ae=me=null,Nr=!1,hl=0,ci=null,t)throw Error(o(300));e===null||Fe||(e=e.dependencies,e!==null&&Tr(e)&&(Fe=!0))}function vh(e,t,n,i){me=e;var r=0;do{if(si&&(ci=null),hl=0,si=!1,25<=r)throw Error(o(301));if(r+=1,Je=Ae=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}z.H=Ih,s=t(n,i)}while(si);return s}function _y(){var e=z.H,t=e.useState()[0];return t=typeof t.then=="function"?pl(t):t,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(me.flags|=1024),t}function cs(){var e=kr!==0;return kr=0,e}function fs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ds(e){if(Nr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Nr=!1}yn=0,Je=Ae=me=null,si=!1,hl=kr=0,ci=null}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?me.memoizedState=Je=e:Je=Je.next=e,Je}function Ze(){if(Ae===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Je===null?me.memoizedState:Je.next;if(t!==null)Je=t,Ae=e;else{if(e===null)throw me.alternate===null?Error(o(467)):Error(o(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Je===null?me.memoizedState=Je=e:Je=Je.next=e}return Je}function Lr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pl(e){var t=hl;return hl+=1,ci===null&&(ci=[]),e=oh(ci,e,t),t=me,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?Ph:Cs),e}function Br(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return pl(e);if(e.$$typeof===q)return rt(e)}throw Error(o(438,String(e)))}function hs(e){var t=null,n=me.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=me.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Lr(),me.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=le;return t.index++,n}function bn(e,t){return typeof t=="function"?t(e):t}function Ur(e){var t=Ze();return ps(t,Ae,e)}function ps(e,t,n){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var r=e.baseQueue,s=i.pending;if(s!==null){if(r!==null){var d=r.next;r.next=s.next,s.next=d}t.baseQueue=r=s,i.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{t=r.next;var g=d=null,C=null,H=t,P=!1;do{var ee=H.lane&-536870913;if(ee!==H.lane?(Se&ee)===ee:(yn&ee)===ee){var G=H.revertLane;if(G===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),ee===ii&&(P=!0);else if((yn&G)===G){H=H.next,G===ii&&(P=!0);continue}else ee={lane:0,revertLane:H.revertLane,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},C===null?(g=C=ee,d=s):C=C.next=ee,me.lanes|=G,In|=G;ee=H.action,za&&n(s,ee),s=H.hasEagerState?H.eagerState:n(s,ee)}else G={lane:ee,revertLane:H.revertLane,gesture:H.gesture,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},C===null?(g=C=G,d=s):C=C.next=G,me.lanes|=ee,In|=ee;H=H.next}while(H!==null&&H!==t);if(C===null?d=s:C.next=g,!Rt(s,e.memoizedState)&&(Fe=!0,P&&(n=li,n!==null)))throw n;e.memoizedState=s,e.baseState=d,e.baseQueue=C,i.lastRenderedState=s}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function ms(e){var t=Ze(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,s=t.memoizedState;if(r!==null){n.pending=null;var d=r=r.next;do s=e(s,d.action),d=d.next;while(d!==r);Rt(s,t.memoizedState)||(Fe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function yh(e,t,n){var i=me,r=Ze(),s=Ee;if(s){if(n===void 0)throw Error(o(407));n=n()}else n=t();var d=!Rt((Ae||r).memoizedState,n);if(d&&(r.memoizedState=n,Fe=!0),r=r.queue,ys(Sh.bind(null,i,r,e),[e]),r.getSnapshot!==t||d||Je!==null&&Je.memoizedState.tag&1){if(i.flags|=2048,fi(9,{destroy:void 0},xh.bind(null,i,r,n,t),null),ke===null)throw Error(o(349));s||(yn&127)!==0||bh(i,t,n)}return n}function bh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t=Lr(),me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xh(e,t,n,i){t.value=n,t.getSnapshot=i,wh(t)&&Eh(e)}function Sh(e,t,n){return n(function(){wh(t)&&Eh(e)})}function wh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function Eh(e){var t=xa(e,2);t!==null&&St(t,e,2)}function gs(e){var t=pt();if(typeof e=="function"){var n=e;if(e=n(),za){Hn(!0);try{n()}finally{Hn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:e},t}function Ch(e,t,n,i){return e.baseState=n,ps(e,Ae,typeof i=="function"?i:bn)}function My(e,t,n,i,r){if(qr(e))throw Error(o(485));if(e=t.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){s.listeners.push(d)}};z.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,Th(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Th(e,t){var n=t.action,i=t.payload,r=e.state;if(t.isTransition){var s=z.T,d={};z.T=d;try{var g=n(r,i),C=z.S;C!==null&&C(d,g),jh(e,t,g)}catch(H){vs(e,t,H)}finally{s!==null&&d.types!==null&&(s.types=d.types),z.T=s}}else try{s=n(r,i),jh(e,t,s)}catch(H){vs(e,t,H)}}function jh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Rh(e,t,i)},function(i){return vs(e,t,i)}):Rh(e,t,n)}function Rh(e,t,n){t.status="fulfilled",t.value=n,Oh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Th(e,n)))}function vs(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Oh(t),t=t.next;while(t!==i)}e.action=null}function Oh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function zh(e,t){return t}function _h(e,t){if(Ee){var n=ke.formState;if(n!==null){e:{var i=me;if(Ee){if(Ue){t:{for(var r=Ue,s=Gt;r.nodeType!==8;){if(!s){r=null;break t}if(r=Vt(r.nextSibling),r===null){r=null;break t}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){Ue=Vt(r.nextSibling),i=r.data==="F!";break e}}Xn(i)}i=!1}i&&(t=n[0])}}return n=pt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zh,lastRenderedState:t},n.queue=i,n=Jh.bind(null,me,i),i.dispatch=n,i=gs(!1),s=Es.bind(null,me,!1,i.queue),i=pt(),r={state:t,dispatch:null,action:e,pending:null},i.queue=r,n=My.bind(null,me,r,s,n),r.dispatch=n,i.memoizedState=e,[t,n,!1]}function Mh(e){var t=Ze();return Ah(t,Ae,e)}function Ah(e,t,n){if(t=ps(e,t,zh)[0],e=Ur(bn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=pl(t)}catch(d){throw d===ri?Or:d}else i=t;t=Ze();var r=t.queue,s=r.dispatch;return n!==t.memoizedState&&(me.flags|=2048,fi(9,{destroy:void 0},Ay.bind(null,r,n),null)),[i,s,e]}function Ay(e,t){e.action=t}function Dh(e){var t=Ze(),n=Ae;if(n!==null)return Ah(t,n,e);Ze(),t=t.memoizedState,n=Ze();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function fi(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=me.updateQueue,t===null&&(t=Lr(),me.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Nh(){return Ze().memoizedState}function Hr(e,t,n,i){var r=pt();me.flags|=e,r.memoizedState=fi(1|t,{destroy:void 0},n,i===void 0?null:i)}function $r(e,t,n,i){var r=Ze();i=i===void 0?null:i;var s=r.memoizedState.inst;Ae!==null&&i!==null&&us(i,Ae.memoizedState.deps)?r.memoizedState=fi(t,s,n,i):(me.flags|=e,r.memoizedState=fi(1|t,s,n,i))}function kh(e,t){Hr(8390656,8,e,t)}function ys(e,t){$r(2048,8,e,t)}function Dy(e){me.flags|=4;var t=me.updateQueue;if(t===null)t=Lr(),me.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Lh(e){var t=Ze().memoizedState;return Dy({ref:t,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Bh(e,t){return $r(4,2,e,t)}function Uh(e,t){return $r(4,4,e,t)}function Hh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $h(e,t,n){n=n!=null?n.concat([e]):null,$r(4,4,Hh.bind(null,t,e),n)}function bs(){}function qh(e,t){var n=Ze();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&us(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Yh(e,t){var n=Ze();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&us(t,i[1]))return i[0];if(i=e(),za){Hn(!0);try{e()}finally{Hn(!1)}}return n.memoizedState=[i,t],i}function xs(e,t,n){return n===void 0||(yn&1073741824)!==0&&(Se&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Gp(),me.lanes|=e,In|=e,n)}function Gh(e,t,n,i){return Rt(n,t)?n:ui.current!==null?(e=xs(e,n,i),Rt(e,t)||(Fe=!0),e):(yn&42)===0||(yn&1073741824)!==0&&(Se&261930)===0?(Fe=!0,e.memoizedState=n):(e=Gp(),me.lanes|=e,In|=e,t)}function Xh(e,t,n,i,r){var s=$.p;$.p=s!==0&&8>s?s:8;var d=z.T,g={};z.T=g,Es(e,!1,t,n);try{var C=r(),H=z.S;if(H!==null&&H(g,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var P=Oy(C,i);ml(e,t,P,Dt(e))}else ml(e,t,i,Dt(e))}catch(ee){ml(e,t,{then:function(){},status:"rejected",reason:ee},Dt())}finally{$.p=s,d!==null&&g.types!==null&&(d.types=g.types),z.T=d}}function Ny(){}function Ss(e,t,n,i){if(e.tag!==5)throw Error(o(476));var r=Vh(e).queue;Xh(e,r,t,W,n===null?Ny:function(){return Qh(e),n(i)})}function Vh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:W},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Qh(e){var t=Vh(e);t.next===null&&(t=e.alternate.memoizedState),ml(e,t.next.queue,{},Dt())}function ws(){return rt(Al)}function Zh(){return Ze().memoizedState}function Kh(){return Ze().memoizedState}function ky(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Dt();e=Zn(n);var i=Kn(t,e,n);i!==null&&(St(i,t,n),cl(i,t,n)),t={cache:Wu()},e.payload=t;return}t=t.return}}function Ly(e,t,n){var i=Dt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},qr(e)?Fh(t,n):(n=$u(e,t,n,i),n!==null&&(St(n,e,i),Wh(n,t,i)))}function Jh(e,t,n){var i=Dt();ml(e,t,n,i)}function ml(e,t,n,i){var r={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(qr(e))Fh(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,g=s(d,n);if(r.hasEagerState=!0,r.eagerState=g,Rt(g,d))return Sr(e,t,r,0),ke===null&&xr(),!1}catch{}finally{}if(n=$u(e,t,r,i),n!==null)return St(n,e,i),Wh(n,t,i),!0}return!1}function Es(e,t,n,i){if(i={lane:2,revertLane:tc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},qr(e)){if(t)throw Error(o(479))}else t=$u(e,n,i,2),t!==null&&St(t,e,2)}function qr(e){var t=e.alternate;return e===me||t!==null&&t===me}function Fh(e,t){si=Nr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wh(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,nd(e,n)}}var gl={readContext:rt,use:Br,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe};gl.useEffectEvent=Xe;var Ph={readContext:rt,use:Br,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:kh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Hr(4194308,4,Hh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hr(4194308,4,e,t)},useInsertionEffect:function(e,t){Hr(4,2,e,t)},useMemo:function(e,t){var n=pt();t=t===void 0?null:t;var i=e();if(za){Hn(!0);try{e()}finally{Hn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=pt();if(n!==void 0){var r=n(t);if(za){Hn(!0);try{n(t)}finally{Hn(!1)}}}else r=t;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=Ly.bind(null,me,e),[i.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:function(e){e=gs(e);var t=e.queue,n=Jh.bind(null,me,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){var n=pt();return xs(n,e,t)},useTransition:function(){var e=gs(!1);return e=Xh.bind(null,me,e.queue,!0,!1),pt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=me,r=pt();if(Ee){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),ke===null)throw Error(o(349));(Se&127)!==0||bh(i,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,kh(Sh.bind(null,i,s,e),[e]),i.flags|=2048,fi(9,{destroy:void 0},xh.bind(null,i,s,n,t),null),n},useId:function(){var e=pt(),t=ke.identifierPrefix;if(Ee){var n=an,i=nn;n=(i&~(1<<32-jt(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=kr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=zy++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ws,useFormState:_h,useActionState:_h,useOptimistic:function(e){var t=pt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Es.bind(null,me,!0,n),n.dispatch=t,[e,t]},useMemoCache:hs,useCacheRefresh:function(){return pt().memoizedState=ky.bind(null,me)},useEffectEvent:function(e){var t=pt(),n={impl:e};return t.memoizedState=n,function(){if((Oe&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Cs={readContext:rt,use:Br,useCallback:qh,useContext:rt,useEffect:ys,useImperativeHandle:$h,useInsertionEffect:Bh,useLayoutEffect:Uh,useMemo:Yh,useReducer:Ur,useRef:Nh,useState:function(){return Ur(bn)},useDebugValue:bs,useDeferredValue:function(e,t){var n=Ze();return Gh(n,Ae.memoizedState,e,t)},useTransition:function(){var e=Ur(bn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:pl(e),t]},useSyncExternalStore:yh,useId:Zh,useHostTransitionStatus:ws,useFormState:Mh,useActionState:Mh,useOptimistic:function(e,t){var n=Ze();return Ch(n,Ae,e,t)},useMemoCache:hs,useCacheRefresh:Kh};Cs.useEffectEvent=Lh;var Ih={readContext:rt,use:Br,useCallback:qh,useContext:rt,useEffect:ys,useImperativeHandle:$h,useInsertionEffect:Bh,useLayoutEffect:Uh,useMemo:Yh,useReducer:ms,useRef:Nh,useState:function(){return ms(bn)},useDebugValue:bs,useDeferredValue:function(e,t){var n=Ze();return Ae===null?xs(n,e,t):Gh(n,Ae.memoizedState,e,t)},useTransition:function(){var e=ms(bn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:pl(e),t]},useSyncExternalStore:yh,useId:Zh,useHostTransitionStatus:ws,useFormState:Dh,useActionState:Dh,useOptimistic:function(e,t){var n=Ze();return Ae!==null?Ch(n,Ae,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:hs,useCacheRefresh:Kh};Ih.useEffectEvent=Lh;function Ts(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:S({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var js={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Dt(),r=Zn(i);r.payload=t,n!=null&&(r.callback=n),t=Kn(e,r,i),t!==null&&(St(t,e,i),cl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Dt(),r=Zn(i);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Kn(e,r,i),t!==null&&(St(t,e,i),cl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Dt(),i=Zn(n);i.tag=2,t!=null&&(i.callback=t),t=Kn(e,i,n),t!==null&&(St(t,e,n),cl(t,e,n))}};function ep(e,t,n,i,r,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,d):t.prototype&&t.prototype.isPureReactComponent?!nl(n,i)||!nl(r,s):!0}function tp(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&js.enqueueReplaceState(t,t.state,null)}function _a(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=S({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function np(e){br(e)}function ap(e){console.error(e)}function ip(e){br(e)}function Yr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function lp(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Rs(e,t,n){return n=Zn(n),n.tag=3,n.payload={element:null},n.callback=function(){Yr(e,t)},n}function rp(e){return e=Zn(e),e.tag=3,e}function op(e,t,n,i){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var s=i.value;e.payload=function(){return r(s)},e.callback=function(){lp(t,n,i)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){lp(t,n,i),typeof r!="function"&&(ea===null?ea=new Set([this]):ea.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})})}function By(e,t,n,i,r){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ai(t,n,r,!0),n=zt.current,n!==null){switch(n.tag){case 31:case 13:return Xt===null?eo():n.alternate===null&&Ve===0&&(Ve=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===zr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Ps(e,i,r)),!1;case 22:return n.flags|=65536,i===zr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Ps(e,i,r)),!1}throw Error(o(435,n.tag))}return Ps(e,i,r),eo(),!1}if(Ee)return t=zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,i!==Qu&&(e=Error(o(422),{cause:i}),ll($t(e,n)))):(i!==Qu&&(t=Error(o(423),{cause:i}),ll($t(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=$t(i,n),r=Rs(e.stateNode,i,r),as(e,r),Ve!==4&&(Ve=2)),!1;var s=Error(o(520),{cause:i});if(s=$t(s,n),Cl===null?Cl=[s]:Cl.push(s),Ve!==4&&(Ve=2),t===null)return!0;i=$t(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=Rs(n.stateNode,i,e),as(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ea===null||!ea.has(s))))return n.flags|=65536,r&=-r,n.lanes|=r,r=rp(r),op(r,e,n,i),as(n,r),!1}n=n.return}while(n!==null);return!1}var Os=Error(o(461)),Fe=!1;function ot(e,t,n,i){t.child=e===null?fh(t,null,n,i):Oa(t,e.child,n,i)}function up(e,t,n,i,r){n=n.render;var s=t.ref;if("ref"in i){var d={};for(var g in i)g!=="ref"&&(d[g]=i[g])}else d=i;return Ca(t),i=ss(e,t,n,d,s,r),g=cs(),e!==null&&!Fe?(fs(e,t,r),xn(e,t,r)):(Ee&&g&&Xu(t),t.flags|=1,ot(e,t,i,r),t.child)}function sp(e,t,n,i,r){if(e===null){var s=n.type;return typeof s=="function"&&!qu(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,cp(e,t,s,i,r)):(e=Er(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Ls(e,r)){var d=s.memoizedProps;if(n=n.compare,n=n!==null?n:nl,n(d,i)&&e.ref===t.ref)return xn(e,t,r)}return t.flags|=1,e=pn(s,i),e.ref=t.ref,e.return=t,t.child=e}function cp(e,t,n,i,r){if(e!==null){var s=e.memoizedProps;if(nl(s,i)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=i=s,Ls(e,r))(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,xn(e,t,r)}return zs(e,t,n,i,r)}function fp(e,t,n,i){var r=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~s}else i=0,t.child=null;return dp(e,t,s,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rr(t,s!==null?s.cachePool:null),s!==null?ph(t,s):ls(),mh(t);else return i=t.lanes=536870912,dp(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(Rr(t,s.cachePool),ph(t,s),Fn(),t.memoizedState=null):(e!==null&&Rr(t,null),ls(),Fn());return ot(e,t,r,n),t.child}function vl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dp(e,t,n,i,r){var s=Iu();return s=s===null?null:{parent:Ke._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&Rr(t,null),ls(),mh(t),e!==null&&ai(e,t,i,!0),t.childLanes=r,null}function Gr(e,t){return t=Vr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hp(e,t,n){return Oa(t,e.child,null,n),e=Gr(t,t.pendingProps),e.flags|=2,_t(t),t.memoizedState=null,e}function Uy(e,t,n){var i=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ee){if(i.mode==="hidden")return e=Gr(t,i),t.lanes=536870912,vl(null,e);if(os(t),(e=Ue)?(e=T0(e,Gt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yn!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=Fd(e),n.return=t,t.child=n,lt=t,Ue=null)):e=null,e===null)throw Xn(t);return t.lanes=536870912,null}return Gr(t,i)}var s=e.memoizedState;if(s!==null){var d=s.dehydrated;if(os(t),r)if(t.flags&256)t.flags&=-257,t=hp(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Fe||ai(e,t,n,!1),r=(n&e.childLanes)!==0,Fe||r){if(i=ke,i!==null&&(d=ad(i,n),d!==0&&d!==s.retryLane))throw s.retryLane=d,xa(e,d),St(i,e,d),Os;eo(),t=hp(e,t,n)}else e=s.treeContext,Ue=Vt(d.nextSibling),lt=t,Ee=!0,Gn=null,Gt=!1,e!==null&&Id(t,e),t=Gr(t,i),t.flags|=4096;return t}return e=pn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Xr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function zs(e,t,n,i,r){return Ca(t),n=ss(e,t,n,i,void 0,r),i=cs(),e!==null&&!Fe?(fs(e,t,r),xn(e,t,r)):(Ee&&i&&Xu(t),t.flags|=1,ot(e,t,n,r),t.child)}function pp(e,t,n,i,r,s){return Ca(t),t.updateQueue=null,n=vh(t,i,n,r),gh(e),i=cs(),e!==null&&!Fe?(fs(e,t,s),xn(e,t,s)):(Ee&&i&&Xu(t),t.flags|=1,ot(e,t,n,s),t.child)}function mp(e,t,n,i,r){if(Ca(t),t.stateNode===null){var s=Ia,d=n.contextType;typeof d=="object"&&d!==null&&(s=rt(d)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=js,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},ts(t),d=n.contextType,s.context=typeof d=="object"&&d!==null?rt(d):Ia,s.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Ts(t,n,d,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(d=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),d!==s.state&&js.enqueueReplaceState(s,s.state,null),dl(t,i,s,r),fl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var g=t.memoizedProps,C=_a(n,g);s.props=C;var H=s.context,P=n.contextType;d=Ia,typeof P=="object"&&P!==null&&(d=rt(P));var ee=n.getDerivedStateFromProps;P=typeof ee=="function"||typeof s.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,P||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(g||H!==d)&&tp(t,s,i,d),Qn=!1;var G=t.memoizedState;s.state=G,dl(t,i,s,r),fl(),H=t.memoizedState,g||G!==H||Qn?(typeof ee=="function"&&(Ts(t,n,ee,i),H=t.memoizedState),(C=Qn||ep(t,n,C,i,G,H,d))?(P||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=H),s.props=i,s.state=H,s.context=d,i=C):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,ns(e,t),d=t.memoizedProps,P=_a(n,d),s.props=P,ee=t.pendingProps,G=s.context,H=n.contextType,C=Ia,typeof H=="object"&&H!==null&&(C=rt(H)),g=n.getDerivedStateFromProps,(H=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==ee||G!==C)&&tp(t,s,i,C),Qn=!1,G=t.memoizedState,s.state=G,dl(t,i,s,r),fl();var Q=t.memoizedState;d!==ee||G!==Q||Qn||e!==null&&e.dependencies!==null&&Tr(e.dependencies)?(typeof g=="function"&&(Ts(t,n,g,i),Q=t.memoizedState),(P=Qn||ep(t,n,P,i,G,Q,C)||e!==null&&e.dependencies!==null&&Tr(e.dependencies))?(H||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,Q,C),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,Q,C)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=Q),s.props=i,s.state=Q,s.context=C,i=P):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Xr(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=Oa(t,e.child,null,r),t.child=Oa(t,null,n,r)):ot(e,t,n,r),t.memoizedState=s.state,e=t.child):e=xn(e,t,r),e}function gp(e,t,n,i){return wa(),t.flags|=256,ot(e,t,n,i),t.child}var _s={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ms(e){return{baseLanes:e,cachePool:lh()}}function As(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=At),e}function vp(e,t,n){var i=t.pendingProps,r=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),d&&(r=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ee){if(r?Jn(t):Fn(),(e=Ue)?(e=T0(e,Gt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yn!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=Fd(e),n.return=t,t.child=n,lt=t,Ue=null)):e=null,e===null)throw Xn(t);return pc(e)?t.lanes=32:t.lanes=536870912,null}var g=i.children;return i=i.fallback,r?(Fn(),r=t.mode,g=Vr({mode:"hidden",children:g},r),i=Sa(i,r,n,null),g.return=t,i.return=t,g.sibling=i,t.child=g,i=t.child,i.memoizedState=Ms(n),i.childLanes=As(e,d,n),t.memoizedState=_s,vl(null,i)):(Jn(t),Ds(t,g))}var C=e.memoizedState;if(C!==null&&(g=C.dehydrated,g!==null)){if(s)t.flags&256?(Jn(t),t.flags&=-257,t=Ns(e,t,n)):t.memoizedState!==null?(Fn(),t.child=e.child,t.flags|=128,t=null):(Fn(),g=i.fallback,r=t.mode,i=Vr({mode:"visible",children:i.children},r),g=Sa(g,r,n,null),g.flags|=2,i.return=t,g.return=t,i.sibling=g,t.child=i,Oa(t,e.child,null,n),i=t.child,i.memoizedState=Ms(n),i.childLanes=As(e,d,n),t.memoizedState=_s,t=vl(null,i));else if(Jn(t),pc(g)){if(d=g.nextSibling&&g.nextSibling.dataset,d)var H=d.dgst;d=H,i=Error(o(419)),i.stack="",i.digest=d,ll({value:i,source:null,stack:null}),t=Ns(e,t,n)}else if(Fe||ai(e,t,n,!1),d=(n&e.childLanes)!==0,Fe||d){if(d=ke,d!==null&&(i=ad(d,n),i!==0&&i!==C.retryLane))throw C.retryLane=i,xa(e,i),St(d,e,i),Os;hc(g)||eo(),t=Ns(e,t,n)}else hc(g)?(t.flags|=192,t.child=e.child,t=null):(e=C.treeContext,Ue=Vt(g.nextSibling),lt=t,Ee=!0,Gn=null,Gt=!1,e!==null&&Id(t,e),t=Ds(t,i.children),t.flags|=4096);return t}return r?(Fn(),g=i.fallback,r=t.mode,C=e.child,H=C.sibling,i=pn(C,{mode:"hidden",children:i.children}),i.subtreeFlags=C.subtreeFlags&65011712,H!==null?g=pn(H,g):(g=Sa(g,r,n,null),g.flags|=2),g.return=t,i.return=t,i.sibling=g,t.child=i,vl(null,i),i=t.child,g=e.child.memoizedState,g===null?g=Ms(n):(r=g.cachePool,r!==null?(C=Ke._currentValue,r=r.parent!==C?{parent:C,pool:C}:r):r=lh(),g={baseLanes:g.baseLanes|n,cachePool:r}),i.memoizedState=g,i.childLanes=As(e,d,n),t.memoizedState=_s,vl(e.child,i)):(Jn(t),n=e.child,e=n.sibling,n=pn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function Ds(e,t){return t=Vr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Vr(e,t){return e=Ot(22,e,null,t),e.lanes=0,e}function Ns(e,t,n){return Oa(t,e.child,null,n),e=Ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yp(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ju(e.return,t,n)}function ks(e,t,n,i,r,s){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,treeForkCount:s}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=i,d.tail=n,d.tailMode=r,d.treeForkCount=s)}function bp(e,t,n){var i=t.pendingProps,r=i.revealOrder,s=i.tail;i=i.children;var d=Qe.current,g=(d&2)!==0;if(g?(d=d&1|2,t.flags|=128):d&=1,ie(Qe,d),ot(e,t,i,n),i=Ee?il:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yp(e,n,t);else if(e.tag===19)yp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Dr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),ks(t,!1,r,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Dr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}ks(t,!0,n,null,s,i);break;case"together":ks(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ai(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ls(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Tr(e)))}function Hy(e,t,n){switch(t.tag){case 3:Le(t,t.stateNode.containerInfo),Vn(t,Ke,e.memoizedState.cache),wa();break;case 27:case 5:Et(t);break;case 4:Le(t,t.stateNode.containerInfo);break;case 10:Vn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,os(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Jn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?vp(e,t,n):(Jn(t),e=xn(e,t,n),e!==null?e.sibling:null);Jn(t);break;case 19:var r=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(ai(e,t,n,!1),i=(n&t.childLanes)!==0),r){if(i)return bp(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ie(Qe,Qe.current),i)break;return null;case 22:return t.lanes=0,fp(e,t,n,t.pendingProps);case 24:Vn(t,Ke,e.memoizedState.cache)}return xn(e,t,n)}function xp(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Fe=!0;else{if(!Ls(e,n)&&(t.flags&128)===0)return Fe=!1,Hy(e,t,n);Fe=(e.flags&131072)!==0}else Fe=!1,Ee&&(t.flags&1048576)!==0&&Pd(t,il,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=ja(t.elementType),t.type=e,typeof e=="function")qu(e)?(i=_a(e,i),t.tag=1,t=mp(null,t,e,i,n)):(t.tag=0,t=zs(null,t,e,i,n));else{if(e!=null){var r=e.$$typeof;if(r===X){t.tag=11,t=up(null,t,e,i,n);break e}else if(r===F){t.tag=14,t=sp(null,t,e,i,n);break e}}throw t=ne(e)||e,Error(o(306,t,""))}}return t;case 0:return zs(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,r=_a(i,t.pendingProps),mp(e,t,i,r,n);case 3:e:{if(Le(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var s=t.memoizedState;r=s.element,ns(e,t),dl(t,i,null,n);var d=t.memoizedState;if(i=d.cache,Vn(t,Ke,i),i!==s.cache&&Fu(t,[Ke],n,!0),fl(),i=d.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=gp(e,t,i,n);break e}else if(i!==r){r=$t(Error(o(424)),t),ll(r),t=gp(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ue=Vt(e.firstChild),lt=t,Ee=!0,Gn=null,Gt=!0,n=fh(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(wa(),i===r){t=xn(e,t,n);break e}ot(e,t,i,n)}t=t.child}return t;case 26:return Xr(e,t),e===null?(n=M0(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ee||(n=t.type,e=t.pendingProps,i=oo(he.current).createElement(n),i[it]=t,i[mt]=e,ut(i,n,e),et(i),t.stateNode=i):t.memoizedState=M0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Et(t),e===null&&Ee&&(i=t.stateNode=O0(t.type,t.pendingProps,he.current),lt=t,Gt=!0,r=Ue,ia(t.type)?(mc=r,Ue=Vt(i.firstChild)):Ue=r),ot(e,t,t.pendingProps.children,n),Xr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ee&&((r=i=Ue)&&(i=m2(i,t.type,t.pendingProps,Gt),i!==null?(t.stateNode=i,lt=t,Ue=Vt(i.firstChild),Gt=!1,r=!0):r=!1),r||Xn(t)),Et(t),r=t.type,s=t.pendingProps,d=e!==null?e.memoizedProps:null,i=s.children,cc(r,s)?i=null:d!==null&&cc(r,d)&&(t.flags|=32),t.memoizedState!==null&&(r=ss(e,t,_y,null,null,n),Al._currentValue=r),Xr(e,t),ot(e,t,i,n),t.child;case 6:return e===null&&Ee&&((e=n=Ue)&&(n=g2(n,t.pendingProps,Gt),n!==null?(t.stateNode=n,lt=t,Ue=null,e=!0):e=!1),e||Xn(t)),null;case 13:return vp(e,t,n);case 4:return Le(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Oa(t,null,i,n):ot(e,t,i,n),t.child;case 11:return up(e,t,t.type,t.pendingProps,n);case 7:return ot(e,t,t.pendingProps,n),t.child;case 8:return ot(e,t,t.pendingProps.children,n),t.child;case 12:return ot(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Vn(t,t.type,i.value),ot(e,t,i.children,n),t.child;case 9:return r=t.type._context,i=t.pendingProps.children,Ca(t),r=rt(r),i=i(r),t.flags|=1,ot(e,t,i,n),t.child;case 14:return sp(e,t,t.type,t.pendingProps,n);case 15:return cp(e,t,t.type,t.pendingProps,n);case 19:return bp(e,t,n);case 31:return Uy(e,t,n);case 22:return fp(e,t,n,t.pendingProps);case 24:return Ca(t),i=rt(Ke),e===null?(r=Iu(),r===null&&(r=ke,s=Wu(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=n),r=s),t.memoizedState={parent:i,cache:r},ts(t),Vn(t,Ke,r)):((e.lanes&n)!==0&&(ns(e,t),dl(t,null,null,n),fl()),r=e.memoizedState,s=t.memoizedState,r.parent!==i?(r={parent:i,cache:i},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Vn(t,Ke,i)):(i=s.cache,Vn(t,Ke,i),i!==r.cache&&Fu(t,[Ke],n,!0))),ot(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Sn(e){e.flags|=4}function Bs(e,t,n,i,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Zp())e.flags|=8192;else throw Ra=zr,es}else e.flags&=-16777217}function Sp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!L0(t))if(Zp())e.flags|=8192;else throw Ra=zr,es}function Qr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ed():536870912,e.lanes|=t,mi|=t)}function yl(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function $y(e,t,n){var i=t.pendingProps;switch(Vu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return He(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),vn(Ke),Ce(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ni(t)?Sn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Zu())),He(t),null;case 26:var r=t.type,s=t.memoizedState;return e===null?(Sn(t),s!==null?(He(t),Sp(t,s)):(He(t),Bs(t,r,null,i,n))):s?s!==e.memoizedState?(Sn(t),He(t),Sp(t,s)):(He(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Sn(t),He(t),Bs(t,r,e,i,n)),null;case 27:if(Kt(t),n=he.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Sn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return He(t),null}e=ae.current,ni(t)?eh(t):(e=O0(r,i,n),t.stateNode=e,Sn(t))}return He(t),null;case 5:if(Kt(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Sn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return He(t),null}if(s=ae.current,ni(t))eh(t);else{var d=oo(he.current);switch(s){case 1:s=d.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=d.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=d.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?d.createElement("select",{is:i.is}):d.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?d.createElement(r,{is:i.is}):d.createElement(r)}}s[it]=t,s[mt]=i;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)s.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=s;e:switch(ut(s,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Sn(t)}}return He(t),Bs(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Sn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=he.current,ni(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,r=lt,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[it]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||v0(e.nodeValue,n)),e||Xn(t,!0)}else e=oo(e).createTextNode(i),e[it]=t,t.stateNode=e}return He(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=ni(t),n!==null){if(e===null){if(!i)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[it]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),e=!1}else n=Zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_t(t),t):(_t(t),null);if((t.flags&128)!==0)throw Error(o(558))}return He(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=ni(t),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(o(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));r[it]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),r=!1}else r=Zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(_t(t),t):(_t(t),null)}return _t(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==r&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Qr(t,t.updateQueue),He(t),null);case 4:return Ce(),e===null&&lc(t.stateNode.containerInfo),He(t),null;case 10:return vn(t.type),He(t),null;case 19:if(V(Qe),i=t.memoizedState,i===null)return He(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)yl(i,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Dr(e),s!==null){for(t.flags|=128,yl(i,!1),e=s.updateQueue,t.updateQueue=e,Qr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Jd(n,e),n=n.sibling;return ie(Qe,Qe.current&1|2),Ee&&mn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Ct()>Wr&&(t.flags|=128,r=!0,yl(i,!1),t.lanes=4194304)}else{if(!r)if(e=Dr(s),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Qr(t,e),yl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Ee)return He(t),null}else 2*Ct()-i.renderingStartTime>Wr&&n!==536870912&&(t.flags|=128,r=!0,yl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ct(),e.sibling=null,n=Qe.current,ie(Qe,r?n&1|2:n&1),Ee&&mn(t,i.treeForkCount),e):(He(t),null);case 22:case 23:return _t(t),rs(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),n=t.updateQueue,n!==null&&Qr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&V(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),vn(Ke),He(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function qy(e,t){switch(Vu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vn(Ke),Ce(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Kt(t),null;case 31:if(t.memoizedState!==null){if(_t(t),t.alternate===null)throw Error(o(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_t(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Qe),null;case 4:return Ce(),null;case 10:return vn(t.type),null;case 22:case 23:return _t(t),rs(),e!==null&&V(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return vn(Ke),null;case 25:return null;default:return null}}function wp(e,t){switch(Vu(t),t.tag){case 3:vn(Ke),Ce();break;case 26:case 27:case 5:Kt(t);break;case 4:Ce();break;case 31:t.memoizedState!==null&&_t(t);break;case 13:_t(t);break;case 19:V(Qe);break;case 10:vn(t.type);break;case 22:case 23:_t(t),rs(),e!==null&&V(Ta);break;case 24:vn(Ke)}}function bl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){i=void 0;var s=n.create,d=n.inst;i=s(),d.destroy=i}n=n.next}while(n!==r)}}catch(g){Me(t,t.return,g)}}function Wn(e,t,n){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var s=r.next;i=s;do{if((i.tag&e)===e){var d=i.inst,g=d.destroy;if(g!==void 0){d.destroy=void 0,r=t;var C=n,H=g;try{H()}catch(P){Me(r,C,P)}}}i=i.next}while(i!==s)}}catch(P){Me(t,t.return,P)}}function Ep(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{hh(t,n)}catch(i){Me(e,e.return,i)}}}function Cp(e,t,n){n.props=_a(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Me(e,t,i)}}function xl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(r){Me(e,t,r)}}function ln(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(r){Me(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Me(e,t,r)}else n.current=null}function Tp(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){Me(e,e.return,r)}}function Us(e,t,n){try{var i=e.stateNode;s2(i,e.type,n,t),i[mt]=t}catch(r){Me(e,e.return,r)}}function jp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ia(e.type)||e.tag===4}function Hs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $s(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dn));else if(i!==4&&(i===27&&ia(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($s(e,t,n),e=e.sibling;e!==null;)$s(e,t,n),e=e.sibling}function Zr(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ia(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zr(e,t,n),e=e.sibling;e!==null;)Zr(e,t,n),e=e.sibling}function Rp(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);ut(t,i,n),t[it]=e,t[mt]=n}catch(s){Me(e,e.return,s)}}var wn=!1,We=!1,qs=!1,Op=typeof WeakSet=="function"?WeakSet:Set,tt=null;function Yy(e,t){if(e=e.containerInfo,uc=mo,e=$d(e),Nu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var d=0,g=-1,C=-1,H=0,P=0,ee=e,G=null;t:for(;;){for(var Q;ee!==n||r!==0&&ee.nodeType!==3||(g=d+r),ee!==s||i!==0&&ee.nodeType!==3||(C=d+i),ee.nodeType===3&&(d+=ee.nodeValue.length),(Q=ee.firstChild)!==null;)G=ee,ee=Q;for(;;){if(ee===e)break t;if(G===n&&++H===r&&(g=d),G===s&&++P===i&&(C=d),(Q=ee.nextSibling)!==null)break;ee=G,G=ee.parentNode}ee=Q}n=g===-1||C===-1?null:{start:g,end:C}}else n=null}n=n||{start:0,end:0}}else n=null;for(sc={focusedElem:e,selectionRange:n},mo=!1,tt=t;tt!==null;)if(t=tt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,tt=e;else for(;tt!==null;){switch(t=tt,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,r=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var oe=_a(n.type,r);e=i.getSnapshotBeforeUpdate(oe,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(de){Me(n,n.return,de)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)dc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":dc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,tt=e;break}tt=t.return}}function zp(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Cn(e,n),i&4&&bl(5,n);break;case 1:if(Cn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){Me(n,n.return,d)}else{var r=_a(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Me(n,n.return,d)}}i&64&&Ep(n),i&512&&xl(n,n.return);break;case 3:if(Cn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{hh(e,t)}catch(d){Me(n,n.return,d)}}break;case 27:t===null&&i&4&&Rp(n);case 26:case 5:Cn(e,n),t===null&&i&4&&Tp(n),i&512&&xl(n,n.return);break;case 12:Cn(e,n);break;case 31:Cn(e,n),i&4&&Ap(e,n);break;case 13:Cn(e,n),i&4&&Dp(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Wy.bind(null,n),v2(e,n))));break;case 22:if(i=n.memoizedState!==null||wn,!i){t=t!==null&&t.memoizedState!==null||We,r=wn;var s=We;wn=i,(We=t)&&!s?Tn(e,n,(n.subtreeFlags&8772)!==0):Cn(e,n),wn=r,We=s}break;case 30:break;default:Cn(e,n)}}function _p(e){var t=e.alternate;t!==null&&(e.alternate=null,_p(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&vu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,vt=!1;function En(e,t,n){for(n=n.child;n!==null;)Mp(e,t,n),n=n.sibling}function Mp(e,t,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Xi,n)}catch{}switch(n.tag){case 26:We||ln(n,t),En(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:We||ln(n,t);var i=Ye,r=vt;ia(n.type)&&(Ye=n.stateNode,vt=!1),En(e,t,n),zl(n.stateNode),Ye=i,vt=r;break;case 5:We||ln(n,t);case 6:if(i=Ye,r=vt,Ye=null,En(e,t,n),Ye=i,vt=r,Ye!==null)if(vt)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(n.stateNode)}catch(s){Me(n,t,s)}else try{Ye.removeChild(n.stateNode)}catch(s){Me(n,t,s)}break;case 18:Ye!==null&&(vt?(e=Ye,E0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ei(e)):E0(Ye,n.stateNode));break;case 4:i=Ye,r=vt,Ye=n.stateNode.containerInfo,vt=!0,En(e,t,n),Ye=i,vt=r;break;case 0:case 11:case 14:case 15:Wn(2,n,t),We||Wn(4,n,t),En(e,t,n);break;case 1:We||(ln(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Cp(n,t,i)),En(e,t,n);break;case 21:En(e,t,n);break;case 22:We=(i=We)||n.memoizedState!==null,En(e,t,n),We=i;break;default:En(e,t,n)}}function Ap(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ei(e)}catch(n){Me(t,t.return,n)}}}function Dp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ei(e)}catch(n){Me(t,t.return,n)}}function Gy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Op),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Op),t;default:throw Error(o(435,e.tag))}}function Kr(e,t){var n=Gy(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var r=Py.bind(null,e,i);i.then(r,r)}})}function yt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i],s=e,d=t,g=d;e:for(;g!==null;){switch(g.tag){case 27:if(ia(g.type)){Ye=g.stateNode,vt=!1;break e}break;case 5:Ye=g.stateNode,vt=!1;break e;case 3:case 4:Ye=g.stateNode.containerInfo,vt=!0;break e}g=g.return}if(Ye===null)throw Error(o(160));Mp(s,d,r),Ye=null,vt=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Np(t,e),t=t.sibling}var Ft=null;function Np(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:yt(t,e),bt(e),i&4&&(Wn(3,e,e.return),bl(3,e),Wn(5,e,e.return));break;case 1:yt(t,e),bt(e),i&512&&(We||n===null||ln(n,n.return)),i&64&&wn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var r=Ft;if(yt(t,e),bt(e),i&512&&(We||n===null||ln(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":s=r.getElementsByTagName("title")[0],(!s||s[Zi]||s[it]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(i),r.head.insertBefore(s,r.querySelector("head > title"))),ut(s,i,n),s[it]=e,et(s),i=s;break e;case"link":var d=N0("link","href",r).get(i+(n.href||""));if(d){for(var g=0;g<d.length;g++)if(s=d[g],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(g,1);break t}}s=r.createElement(i),ut(s,i,n),r.head.appendChild(s);break;case"meta":if(d=N0("meta","content",r).get(i+(n.content||""))){for(g=0;g<d.length;g++)if(s=d[g],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(g,1);break t}}s=r.createElement(i),ut(s,i,n),r.head.appendChild(s);break;default:throw Error(o(468,i))}s[it]=e,et(s),i=s}e.stateNode=i}else k0(r,e.type,e.stateNode);else e.stateNode=D0(r,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?k0(r,e.type,e.stateNode):D0(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Us(e,e.memoizedProps,n.memoizedProps)}break;case 27:yt(t,e),bt(e),i&512&&(We||n===null||ln(n,n.return)),n!==null&&i&4&&Us(e,e.memoizedProps,n.memoizedProps);break;case 5:if(yt(t,e),bt(e),i&512&&(We||n===null||ln(n,n.return)),e.flags&32){r=e.stateNode;try{Qa(r,"")}catch(oe){Me(e,e.return,oe)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,Us(e,r,n!==null?n.memoizedProps:r)),i&1024&&(qs=!0);break;case 6:if(yt(t,e),bt(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(oe){Me(e,e.return,oe)}}break;case 3:if(co=null,r=Ft,Ft=uo(t.containerInfo),yt(t,e),Ft=r,bt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ei(t.containerInfo)}catch(oe){Me(e,e.return,oe)}qs&&(qs=!1,kp(e));break;case 4:i=Ft,Ft=uo(e.stateNode.containerInfo),yt(t,e),bt(e),Ft=i;break;case 12:yt(t,e),bt(e);break;case 31:yt(t,e),bt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Kr(e,i)));break;case 13:yt(t,e),bt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Fr=Ct()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Kr(e,i)));break;case 22:r=e.memoizedState!==null;var C=n!==null&&n.memoizedState!==null,H=wn,P=We;if(wn=H||r,We=P||C,yt(t,e),We=P,wn=H,bt(e),i&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||C||wn||We||Ma(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){C=n=t;try{if(s=C.stateNode,r)d=s.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{g=C.stateNode;var ee=C.memoizedProps.style,G=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;g.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(oe){Me(C,C.return,oe)}}}else if(t.tag===6){if(n===null){C=t;try{C.stateNode.nodeValue=r?"":C.memoizedProps}catch(oe){Me(C,C.return,oe)}}}else if(t.tag===18){if(n===null){C=t;try{var Q=C.stateNode;r?C0(Q,!0):C0(C.stateNode,!1)}catch(oe){Me(C,C.return,oe)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Kr(e,n))));break;case 19:yt(t,e),bt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Kr(e,i)));break;case 30:break;case 21:break;default:yt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(jp(i)){n=i;break}i=i.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var r=n.stateNode,s=Hs(e);Zr(e,s,r);break;case 5:var d=n.stateNode;n.flags&32&&(Qa(d,""),n.flags&=-33);var g=Hs(e);Zr(e,g,d);break;case 3:case 4:var C=n.stateNode.containerInfo,H=Hs(e);$s(e,H,C);break;default:throw Error(o(161))}}catch(P){Me(e,e.return,P)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;kp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Cn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)zp(e,t.alternate,t),t=t.sibling}function Ma(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wn(4,t,t.return),Ma(t);break;case 1:ln(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Cp(t,t.return,n),Ma(t);break;case 27:zl(t.stateNode);case 26:case 5:ln(t,t.return),Ma(t);break;case 22:t.memoizedState===null&&Ma(t);break;case 30:Ma(t);break;default:Ma(t)}e=e.sibling}}function Tn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,r=e,s=t,d=s.flags;switch(s.tag){case 0:case 11:case 15:Tn(r,s,n),bl(4,s);break;case 1:if(Tn(r,s,n),i=s,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(H){Me(i,i.return,H)}if(i=s,r=i.updateQueue,r!==null){var g=i.stateNode;try{var C=r.shared.hiddenCallbacks;if(C!==null)for(r.shared.hiddenCallbacks=null,r=0;r<C.length;r++)dh(C[r],g)}catch(H){Me(i,i.return,H)}}n&&d&64&&Ep(s),xl(s,s.return);break;case 27:Rp(s);case 26:case 5:Tn(r,s,n),n&&i===null&&d&4&&Tp(s),xl(s,s.return);break;case 12:Tn(r,s,n);break;case 31:Tn(r,s,n),n&&d&4&&Ap(r,s);break;case 13:Tn(r,s,n),n&&d&4&&Dp(r,s);break;case 22:s.memoizedState===null&&Tn(r,s,n),xl(s,s.return);break;case 30:break;default:Tn(r,s,n)}t=t.sibling}}function Ys(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&rl(n))}function Gs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&rl(e))}function Wt(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Lp(e,t,n,i),t=t.sibling}function Lp(e,t,n,i){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Wt(e,t,n,i),r&2048&&bl(9,t);break;case 1:Wt(e,t,n,i);break;case 3:Wt(e,t,n,i),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&rl(e)));break;case 12:if(r&2048){Wt(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,d=s.id,g=s.onPostCommit;typeof g=="function"&&g(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(C){Me(t,t.return,C)}}else Wt(e,t,n,i);break;case 31:Wt(e,t,n,i);break;case 13:Wt(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,d=t.alternate,t.memoizedState!==null?s._visibility&2?Wt(e,t,n,i):Sl(e,t):s._visibility&2?Wt(e,t,n,i):(s._visibility|=2,di(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Ys(d,t);break;case 24:Wt(e,t,n,i),r&2048&&Gs(t.alternate,t);break;default:Wt(e,t,n,i)}}function di(e,t,n,i,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,d=t,g=n,C=i,H=d.flags;switch(d.tag){case 0:case 11:case 15:di(s,d,g,C,r),bl(8,d);break;case 23:break;case 22:var P=d.stateNode;d.memoizedState!==null?P._visibility&2?di(s,d,g,C,r):Sl(s,d):(P._visibility|=2,di(s,d,g,C,r)),r&&H&2048&&Ys(d.alternate,d);break;case 24:di(s,d,g,C,r),r&&H&2048&&Gs(d.alternate,d);break;default:di(s,d,g,C,r)}t=t.sibling}}function Sl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,r=i.flags;switch(i.tag){case 22:Sl(n,i),r&2048&&Ys(i.alternate,i);break;case 24:Sl(n,i),r&2048&&Gs(i.alternate,i);break;default:Sl(n,i)}t=t.sibling}}var wl=8192;function hi(e,t,n){if(e.subtreeFlags&wl)for(e=e.child;e!==null;)Bp(e,t,n),e=e.sibling}function Bp(e,t,n){switch(e.tag){case 26:hi(e,t,n),e.flags&wl&&e.memoizedState!==null&&z2(n,Ft,e.memoizedState,e.memoizedProps);break;case 5:hi(e,t,n);break;case 3:case 4:var i=Ft;Ft=uo(e.stateNode.containerInfo),hi(e,t,n),Ft=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=wl,wl=16777216,hi(e,t,n),wl=i):hi(e,t,n));break;default:hi(e,t,n)}}function Up(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function El(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];tt=i,$p(i,e)}Up(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hp(e),e=e.sibling}function Hp(e){switch(e.tag){case 0:case 11:case 15:El(e),e.flags&2048&&Wn(9,e,e.return);break;case 3:El(e);break;case 12:El(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Jr(e)):El(e);break;default:El(e)}}function Jr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];tt=i,$p(i,e)}Up(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wn(8,t,t.return),Jr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Jr(t));break;default:Jr(t)}e=e.sibling}}function $p(e,t){for(;tt!==null;){var n=tt;switch(n.tag){case 0:case 11:case 15:Wn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:rl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,tt=i;else e:for(n=e;tt!==null;){i=tt;var r=i.sibling,s=i.return;if(_p(i),i===n){tt=null;break e}if(r!==null){r.return=s,tt=r;break e}tt=s}}}var Xy={getCacheForType:function(e){var t=rt(Ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return rt(Ke).controller.signal}},Vy=typeof WeakMap=="function"?WeakMap:Map,Oe=0,ke=null,be=null,Se=0,_e=0,Mt=null,Pn=!1,pi=!1,Xs=!1,jn=0,Ve=0,In=0,Aa=0,Vs=0,At=0,mi=0,Cl=null,xt=null,Qs=!1,Fr=0,qp=0,Wr=1/0,Pr=null,ea=null,Ie=0,ta=null,gi=null,Rn=0,Zs=0,Ks=null,Yp=null,Tl=0,Js=null;function Dt(){return(Oe&2)!==0&&Se!==0?Se&-Se:z.T!==null?tc():id()}function Gp(){if(At===0)if((Se&536870912)===0||Ee){var e=rr;rr<<=1,(rr&3932160)===0&&(rr=262144),At=e}else At=536870912;return e=zt.current,e!==null&&(e.flags|=32),At}function St(e,t,n){(e===ke&&(_e===2||_e===9)||e.cancelPendingCommit!==null)&&(vi(e,0),na(e,Se,At,!1)),Qi(e,n),((Oe&2)===0||e!==ke)&&(e===ke&&((Oe&2)===0&&(Aa|=n),Ve===4&&na(e,Se,At,!1)),rn(e))}function Xp(e,t,n){if((Oe&6)!==0)throw Error(o(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Vi(e,t),r=i?Ky(e,t):Ws(e,t,!0),s=i;do{if(r===0){pi&&!i&&na(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!Qy(n)){r=Ws(e,t,!1),s=!1;continue}if(r===2){if(s=t,e.errorRecoveryDisabledLanes&s)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var g=e;r=Cl;var C=g.current.memoizedState.isDehydrated;if(C&&(vi(g,d).flags|=256),d=Ws(g,d,!1),d!==2){if(Xs&&!C){g.errorRecoveryDisabledLanes|=s,Aa|=s,r=4;break e}s=xt,xt=r,s!==null&&(xt===null?xt=s:xt.push.apply(xt,s))}r=d}if(s=!1,r!==2)continue}}if(r===1){vi(e,0),na(e,t,0,!0);break}e:{switch(i=e,s=r,s){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:na(i,t,At,!Pn);break e;case 2:xt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(r=Fr+300-Ct(),10<r)){if(na(i,t,At,!Pn),ur(i,0,!0)!==0)break e;Rn=t,i.timeoutHandle=S0(Vp.bind(null,i,n,xt,Pr,Qs,t,At,Aa,mi,Pn,s,"Throttled",-0,0),r);break e}Vp(i,n,xt,Pr,Qs,t,At,Aa,mi,Pn,s,null,-0,0)}}break}while(!0);rn(e)}function Vp(e,t,n,i,r,s,d,g,C,H,P,ee,G,Q){if(e.timeoutHandle=-1,ee=t.subtreeFlags,ee&8192||(ee&16785408)===16785408){ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dn},Bp(t,s,ee);var oe=(s&62914560)===s?Fr-Ct():(s&4194048)===s?qp-Ct():0;if(oe=_2(ee,oe),oe!==null){Rn=s,e.cancelPendingCommit=oe(Ip.bind(null,e,t,s,n,i,r,d,g,C,P,ee,null,G,Q)),na(e,s,d,!H);return}}Ip(e,t,s,n,i,r,d,g,C)}function Qy(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Rt(s(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function na(e,t,n,i){t&=~Vs,t&=~Aa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var r=t;0<r;){var s=31-jt(r),d=1<<s;i[s]=-1,r&=~d}n!==0&&td(e,n,t)}function Ir(){return(Oe&6)===0?(jl(0),!1):!0}function Fs(){if(be!==null){if(_e===0)var e=be.return;else e=be,gn=Ea=null,ds(e),oi=null,ul=0,e=be;for(;e!==null;)wp(e.alternate,e),e=e.return;be=null}}function vi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,d2(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Rn=0,Fs(),ke=e,be=n=pn(e.current,null),Se=t,_e=0,Mt=null,Pn=!1,pi=Vi(e,t),Xs=!1,mi=At=Vs=Aa=In=Ve=0,xt=Cl=null,Qs=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-jt(i),s=1<<r;t|=e[r],i&=~s}return jn=t,xr(),n}function Qp(e,t){me=null,z.H=gl,t===ri||t===Or?(t=uh(),_e=3):t===es?(t=uh(),_e=4):_e=t===Os?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Mt=t,be===null&&(Ve=1,Yr(e,$t(t,e.current)))}function Zp(){var e=zt.current;return e===null?!0:(Se&4194048)===Se?Xt===null:(Se&62914560)===Se||(Se&536870912)!==0?e===Xt:!1}function Kp(){var e=z.H;return z.H=gl,e===null?gl:e}function Jp(){var e=z.A;return z.A=Xy,e}function eo(){Ve=4,Pn||(Se&4194048)!==Se&&zt.current!==null||(pi=!0),(In&134217727)===0&&(Aa&134217727)===0||ke===null||na(ke,Se,At,!1)}function Ws(e,t,n){var i=Oe;Oe|=2;var r=Kp(),s=Jp();(ke!==e||Se!==t)&&(Pr=null,vi(e,t)),t=!1;var d=Ve;e:do try{if(_e!==0&&be!==null){var g=be,C=Mt;switch(_e){case 8:Fs(),d=6;break e;case 3:case 2:case 9:case 6:zt.current===null&&(t=!0);var H=_e;if(_e=0,Mt=null,yi(e,g,C,H),n&&pi){d=0;break e}break;default:H=_e,_e=0,Mt=null,yi(e,g,C,H)}}Zy(),d=Ve;break}catch(P){Qp(e,P)}while(!0);return t&&e.shellSuspendCounter++,gn=Ea=null,Oe=i,z.H=r,z.A=s,be===null&&(ke=null,Se=0,xr()),d}function Zy(){for(;be!==null;)Fp(be)}function Ky(e,t){var n=Oe;Oe|=2;var i=Kp(),r=Jp();ke!==e||Se!==t?(Pr=null,Wr=Ct()+500,vi(e,t)):pi=Vi(e,t);e:do try{if(_e!==0&&be!==null){t=be;var s=Mt;t:switch(_e){case 1:_e=0,Mt=null,yi(e,t,s,1);break;case 2:case 9:if(rh(s)){_e=0,Mt=null,Wp(t);break}t=function(){_e!==2&&_e!==9||ke!==e||(_e=7),rn(e)},s.then(t,t);break e;case 3:_e=7;break e;case 4:_e=5;break e;case 7:rh(s)?(_e=0,Mt=null,Wp(t)):(_e=0,Mt=null,yi(e,t,s,7));break;case 5:var d=null;switch(be.tag){case 26:d=be.memoizedState;case 5:case 27:var g=be;if(d?L0(d):g.stateNode.complete){_e=0,Mt=null;var C=g.sibling;if(C!==null)be=C;else{var H=g.return;H!==null?(be=H,to(H)):be=null}break t}}_e=0,Mt=null,yi(e,t,s,5);break;case 6:_e=0,Mt=null,yi(e,t,s,6);break;case 8:Fs(),Ve=6;break e;default:throw Error(o(462))}}Jy();break}catch(P){Qp(e,P)}while(!0);return gn=Ea=null,z.H=i,z.A=r,Oe=n,be!==null?0:(ke=null,Se=0,xr(),Ve)}function Jy(){for(;be!==null&&!yv();)Fp(be)}function Fp(e){var t=xp(e.alternate,e,jn);e.memoizedProps=e.pendingProps,t===null?to(e):be=t}function Wp(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=pp(n,t,t.pendingProps,t.type,void 0,Se);break;case 11:t=pp(n,t,t.pendingProps,t.type.render,t.ref,Se);break;case 5:ds(t);default:wp(n,t),t=be=Jd(t,jn),t=xp(n,t,jn)}e.memoizedProps=e.pendingProps,t===null?to(e):be=t}function yi(e,t,n,i){gn=Ea=null,ds(t),oi=null,ul=0;var r=t.return;try{if(By(e,r,t,n,Se)){Ve=1,Yr(e,$t(n,e.current)),be=null;return}}catch(s){if(r!==null)throw be=r,s;Ve=1,Yr(e,$t(n,e.current)),be=null;return}t.flags&32768?(Ee||i===1?e=!0:pi||(Se&536870912)!==0?e=!1:(Pn=e=!0,(i===2||i===9||i===3||i===6)&&(i=zt.current,i!==null&&i.tag===13&&(i.flags|=16384))),Pp(t,e)):to(t)}function to(e){var t=e;do{if((t.flags&32768)!==0){Pp(t,Pn);return}e=t.return;var n=$y(t.alternate,t,jn);if(n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Ve===0&&(Ve=5)}function Pp(e,t){do{var n=qy(e.alternate,e);if(n!==null){n.flags&=32767,be=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){be=e;return}be=e=n}while(e!==null);Ve=6,be=null}function Ip(e,t,n,i,r,s,d,g,C){e.cancelPendingCommit=null;do no();while(Ie!==0);if((Oe&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(s=t.lanes|t.childLanes,s|=Hu,Ov(e,n,s,d,g,C),e===ke&&(be=ke=null,Se=0),gi=t,ta=e,Rn=n,Zs=s,Ks=r,Yp=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Iy(ir,function(){return i0(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=z.T,z.T=null,r=$.p,$.p=2,d=Oe,Oe|=4;try{Yy(e,t,n)}finally{Oe=d,$.p=r,z.T=i}}Ie=1,e0(),t0(),n0()}}function e0(){if(Ie===1){Ie=0;var e=ta,t=gi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=z.T,z.T=null;var i=$.p;$.p=2;var r=Oe;Oe|=4;try{Np(t,e);var s=sc,d=$d(e.containerInfo),g=s.focusedElem,C=s.selectionRange;if(d!==g&&g&&g.ownerDocument&&Hd(g.ownerDocument.documentElement,g)){if(C!==null&&Nu(g)){var H=C.start,P=C.end;if(P===void 0&&(P=H),"selectionStart"in g)g.selectionStart=H,g.selectionEnd=Math.min(P,g.value.length);else{var ee=g.ownerDocument||document,G=ee&&ee.defaultView||window;if(G.getSelection){var Q=G.getSelection(),oe=g.textContent.length,de=Math.min(C.start,oe),Ne=C.end===void 0?de:Math.min(C.end,oe);!Q.extend&&de>Ne&&(d=Ne,Ne=de,de=d);var D=Ud(g,de),O=Ud(g,Ne);if(D&&O&&(Q.rangeCount!==1||Q.anchorNode!==D.node||Q.anchorOffset!==D.offset||Q.focusNode!==O.node||Q.focusOffset!==O.offset)){var U=ee.createRange();U.setStart(D.node,D.offset),Q.removeAllRanges(),de>Ne?(Q.addRange(U),Q.extend(O.node,O.offset)):(U.setEnd(O.node,O.offset),Q.addRange(U))}}}}for(ee=[],Q=g;Q=Q.parentNode;)Q.nodeType===1&&ee.push({element:Q,left:Q.scrollLeft,top:Q.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<ee.length;g++){var I=ee[g];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}mo=!!uc,sc=uc=null}finally{Oe=r,$.p=i,z.T=n}}e.current=t,Ie=2}}function t0(){if(Ie===2){Ie=0;var e=ta,t=gi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=z.T,z.T=null;var i=$.p;$.p=2;var r=Oe;Oe|=4;try{zp(e,t.alternate,t)}finally{Oe=r,$.p=i,z.T=n}}Ie=3}}function n0(){if(Ie===4||Ie===3){Ie=0,bv();var e=ta,t=gi,n=Rn,i=Yp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ie=5:(Ie=0,gi=ta=null,a0(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(ea=null),mu(n),t=t.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Xi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=z.T,r=$.p,$.p=2,z.T=null;try{for(var s=e.onRecoverableError,d=0;d<i.length;d++){var g=i[d];s(g.value,{componentStack:g.stack})}}finally{z.T=t,$.p=r}}(Rn&3)!==0&&no(),rn(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===Js?Tl++:(Tl=0,Js=e):Tl=0,jl(0)}}function a0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,rl(t)))}function no(){return e0(),t0(),n0(),i0()}function i0(){if(Ie!==5)return!1;var e=ta,t=Zs;Zs=0;var n=mu(Rn),i=z.T,r=$.p;try{$.p=32>n?32:n,z.T=null,n=Ks,Ks=null;var s=ta,d=Rn;if(Ie=0,gi=ta=null,Rn=0,(Oe&6)!==0)throw Error(o(331));var g=Oe;if(Oe|=4,Hp(s.current),Lp(s,s.current,d,n),Oe=g,jl(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Xi,s)}catch{}return!0}finally{$.p=r,z.T=i,a0(e,t)}}function l0(e,t,n){t=$t(n,t),t=Rs(e.stateNode,t,2),e=Kn(e,t,2),e!==null&&(Qi(e,2),rn(e))}function Me(e,t,n){if(e.tag===3)l0(e,e,n);else for(;t!==null;){if(t.tag===3){l0(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ea===null||!ea.has(i))){e=$t(n,e),n=rp(2),i=Kn(t,n,2),i!==null&&(op(n,i,t,e),Qi(i,2),rn(i));break}}t=t.return}}function Ps(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Vy;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(Xs=!0,r.add(n),e=Fy.bind(null,e,t,n),t.then(e,e))}function Fy(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ke===e&&(Se&n)===n&&(Ve===4||Ve===3&&(Se&62914560)===Se&&300>Ct()-Fr?(Oe&2)===0&&vi(e,0):Vs|=n,mi===Se&&(mi=0)),rn(e)}function r0(e,t){t===0&&(t=ed()),e=xa(e,t),e!==null&&(Qi(e,t),rn(e))}function Wy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),r0(e,n)}function Py(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),r0(e,n)}function Iy(e,t){return fu(e,t)}var ao=null,bi=null,Is=!1,io=!1,ec=!1,aa=0;function rn(e){e!==bi&&e.next===null&&(bi===null?ao=bi=e:bi=bi.next=e),io=!0,Is||(Is=!0,t2())}function jl(e,t){if(!ec&&io){ec=!0;do for(var n=!1,i=ao;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var s=0;else{var d=i.suspendedLanes,g=i.pingedLanes;s=(1<<31-jt(42|e)+1)-1,s&=r&~(d&~g),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,c0(i,s))}else s=Se,s=ur(i,i===ke?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||Vi(i,s)||(n=!0,c0(i,s));i=i.next}while(n);ec=!1}}function e2(){o0()}function o0(){io=Is=!1;var e=0;aa!==0&&f2()&&(e=aa);for(var t=Ct(),n=null,i=ao;i!==null;){var r=i.next,s=u0(i,t);s===0?(i.next=null,n===null?ao=r:n.next=r,r===null&&(bi=n)):(n=i,(e!==0||(s&3)!==0)&&(io=!0)),i=r}Ie!==0&&Ie!==5||jl(e),aa!==0&&(aa=0)}function u0(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var d=31-jt(s),g=1<<d,C=r[d];C===-1?((g&n)===0||(g&i)!==0)&&(r[d]=Rv(g,t)):C<=t&&(e.expiredLanes|=g),s&=~g}if(t=ke,n=Se,n=ur(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(_e===2||_e===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&du(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Vi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&du(i),mu(n)){case 2:case 8:n=Pf;break;case 32:n=ir;break;case 268435456:n=If;break;default:n=ir}return i=s0.bind(null,e),n=fu(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&du(i),e.callbackPriority=2,e.callbackNode=null,2}function s0(e,t){if(Ie!==0&&Ie!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(no()&&e.callbackNode!==n)return null;var i=Se;return i=ur(e,e===ke?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Xp(e,i,t),u0(e,Ct()),e.callbackNode!=null&&e.callbackNode===n?s0.bind(null,e):null)}function c0(e,t){if(no())return null;Xp(e,t,!0)}function t2(){h2(function(){(Oe&6)!==0?fu(Wf,e2):o0()})}function tc(){if(aa===0){var e=ii;e===0&&(e=lr,lr<<=1,(lr&261888)===0&&(lr=256)),aa=e}return aa}function f0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:dr(""+e)}function d0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function n2(e,t,n,i,r){if(t==="submit"&&n&&n.stateNode===r){var s=f0((r[mt]||null).action),d=i.submitter;d&&(t=(t=d[mt]||null)?f0(t.formAction):d.getAttribute("formAction"),t!==null&&(s=t,d=null));var g=new gr("action","action",null,i,r);e.push({event:g,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(aa!==0){var C=d?d0(r,d):new FormData(r);Ss(n,{pending:!0,data:C,method:r.method,action:s},null,C)}}else typeof s=="function"&&(g.preventDefault(),C=d?d0(r,d):new FormData(r),Ss(n,{pending:!0,data:C,method:r.method,action:s},s,C))},currentTarget:r}]})}}for(var nc=0;nc<Uu.length;nc++){var ac=Uu[nc],a2=ac.toLowerCase(),i2=ac[0].toUpperCase()+ac.slice(1);Jt(a2,"on"+i2)}Jt(Gd,"onAnimationEnd"),Jt(Xd,"onAnimationIteration"),Jt(Vd,"onAnimationStart"),Jt("dblclick","onDoubleClick"),Jt("focusin","onFocus"),Jt("focusout","onBlur"),Jt(xy,"onTransitionRun"),Jt(Sy,"onTransitionStart"),Jt(wy,"onTransitionCancel"),Jt(Qd,"onTransitionEnd"),Xa("onMouseEnter",["mouseout","mouseover"]),Xa("onMouseLeave",["mouseout","mouseover"]),Xa("onPointerEnter",["pointerout","pointerover"]),Xa("onPointerLeave",["pointerout","pointerover"]),ga("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ga("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ga("onBeforeInput",["compositionend","keypress","textInput","paste"]),ga("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ga("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ga("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),l2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rl));function h0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var d=i.length-1;0<=d;d--){var g=i[d],C=g.instance,H=g.currentTarget;if(g=g.listener,C!==s&&r.isPropagationStopped())break e;s=g,r.currentTarget=H;try{s(r)}catch(P){br(P)}r.currentTarget=null,s=C}else for(d=0;d<i.length;d++){if(g=i[d],C=g.instance,H=g.currentTarget,g=g.listener,C!==s&&r.isPropagationStopped())break e;s=g,r.currentTarget=H;try{s(r)}catch(P){br(P)}r.currentTarget=null,s=C}}}}function xe(e,t){var n=t[gu];n===void 0&&(n=t[gu]=new Set);var i=e+"__bubble";n.has(i)||(p0(t,e,2,!1),n.add(i))}function ic(e,t,n){var i=0;t&&(i|=4),p0(n,e,i,t)}var lo="_reactListening"+Math.random().toString(36).slice(2);function lc(e){if(!e[lo]){e[lo]=!0,od.forEach(function(n){n!=="selectionchange"&&(l2.has(n)||ic(n,!1,e),ic(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[lo]||(t[lo]=!0,ic("selectionchange",!1,t))}}function p0(e,t,n,i){switch(G0(t)){case 2:var r=D2;break;case 8:r=N2;break;default:r=xc}n=r.bind(null,t,n,e),r=void 0,!Tu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function rc(e,t,n,i,r){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var g=i.stateNode.containerInfo;if(g===r)break;if(d===4)for(d=i.return;d!==null;){var C=d.tag;if((C===3||C===4)&&d.stateNode.containerInfo===r)return;d=d.return}for(;g!==null;){if(d=qa(g),d===null)return;if(C=d.tag,C===5||C===6||C===26||C===27){i=s=d;continue e}g=g.parentNode}}i=i.return}bd(function(){var H=s,P=Eu(n),ee=[];e:{var G=Zd.get(e);if(G!==void 0){var Q=gr,oe=e;switch(e){case"keypress":if(pr(n)===0)break e;case"keydown":case"keyup":Q=Pv;break;case"focusin":oe="focus",Q=zu;break;case"focusout":oe="blur",Q=zu;break;case"beforeblur":case"afterblur":Q=zu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=$v;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=ty;break;case Gd:case Xd:case Vd:Q=Gv;break;case Qd:Q=ay;break;case"scroll":case"scrollend":Q=Uv;break;case"wheel":Q=ly;break;case"copy":case"cut":case"paste":Q=Vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=Cd;break;case"toggle":case"beforetoggle":Q=oy}var de=(t&4)!==0,Ne=!de&&(e==="scroll"||e==="scrollend"),D=de?G!==null?G+"Capture":null:G;de=[];for(var O=H,U;O!==null;){var I=O;if(U=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||U===null||D===null||(I=Ji(O,D),I!=null&&de.push(Ol(O,I,U))),Ne)break;O=O.return}0<de.length&&(G=new Q(G,oe,null,n,P),ee.push({event:G,listeners:de}))}}if((t&7)===0){e:{if(G=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",G&&n!==wu&&(oe=n.relatedTarget||n.fromElement)&&(qa(oe)||oe[$a]))break e;if((Q||G)&&(G=P.window===P?P:(G=P.ownerDocument)?G.defaultView||G.parentWindow:window,Q?(oe=n.relatedTarget||n.toElement,Q=H,oe=oe?qa(oe):null,oe!==null&&(Ne=f(oe),de=oe.tag,oe!==Ne||de!==5&&de!==27&&de!==6)&&(oe=null)):(Q=null,oe=H),Q!==oe)){if(de=wd,I="onMouseLeave",D="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(de=Cd,I="onPointerLeave",D="onPointerEnter",O="pointer"),Ne=Q==null?G:Ki(Q),U=oe==null?G:Ki(oe),G=new de(I,O+"leave",Q,n,P),G.target=Ne,G.relatedTarget=U,I=null,qa(P)===H&&(de=new de(D,O+"enter",oe,n,P),de.target=U,de.relatedTarget=Ne,I=de),Ne=I,Q&&oe)t:{for(de=r2,D=Q,O=oe,U=0,I=D;I;I=de(I))U++;I=0;for(var fe=O;fe;fe=de(fe))I++;for(;0<U-I;)D=de(D),U--;for(;0<I-U;)O=de(O),I--;for(;U--;){if(D===O||O!==null&&D===O.alternate){de=D;break t}D=de(D),O=de(O)}de=null}else de=null;Q!==null&&m0(ee,G,Q,de,!1),oe!==null&&Ne!==null&&m0(ee,Ne,oe,de,!0)}}e:{if(G=H?Ki(H):window,Q=G.nodeName&&G.nodeName.toLowerCase(),Q==="select"||Q==="input"&&G.type==="file")var Te=Ad;else if(_d(G))if(Dd)Te=vy;else{Te=my;var ue=py}else Q=G.nodeName,!Q||Q.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?H&&Su(H.elementType)&&(Te=Ad):Te=gy;if(Te&&(Te=Te(e,H))){Md(ee,Te,n,P);break e}ue&&ue(e,G,H),e==="focusout"&&H&&G.type==="number"&&H.memoizedProps.value!=null&&xu(G,"number",G.value)}switch(ue=H?Ki(H):window,e){case"focusin":(_d(ue)||ue.contentEditable==="true")&&(Fa=ue,ku=H,al=null);break;case"focusout":al=ku=Fa=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,qd(ee,n,P);break;case"selectionchange":if(by)break;case"keydown":case"keyup":qd(ee,n,P)}var ge;if(Mu)e:{switch(e){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Ja?Od(e,n)&&(we="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(we="onCompositionStart");we&&(Td&&n.locale!=="ko"&&(Ja||we!=="onCompositionStart"?we==="onCompositionEnd"&&Ja&&(ge=xd()):(qn=P,ju="value"in qn?qn.value:qn.textContent,Ja=!0)),ue=ro(H,we),0<ue.length&&(we=new Ed(we,e,null,n,P),ee.push({event:we,listeners:ue}),ge?we.data=ge:(ge=zd(n),ge!==null&&(we.data=ge)))),(ge=sy?cy(e,n):fy(e,n))&&(we=ro(H,"onBeforeInput"),0<we.length&&(ue=new Ed("onBeforeInput","beforeinput",null,n,P),ee.push({event:ue,listeners:we}),ue.data=ge)),n2(ee,e,H,n,P)}h0(ee,t)})}function Ol(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ro(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=Ji(e,n),r!=null&&i.unshift(Ol(e,r,s)),r=Ji(e,t),r!=null&&i.push(Ol(e,r,s))),e.tag===3)return i;e=e.return}return[]}function r2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function m0(e,t,n,i,r){for(var s=t._reactName,d=[];n!==null&&n!==i;){var g=n,C=g.alternate,H=g.stateNode;if(g=g.tag,C!==null&&C===i)break;g!==5&&g!==26&&g!==27||H===null||(C=H,r?(H=Ji(n,s),H!=null&&d.unshift(Ol(n,H,C))):r||(H=Ji(n,s),H!=null&&d.push(Ol(n,H,C)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var o2=/\r\n?/g,u2=/\u0000|\uFFFD/g;function g0(e){return(typeof e=="string"?e:""+e).replace(o2,`
`).replace(u2,"")}function v0(e,t){return t=g0(t),g0(e)===t}function De(e,t,n,i,r,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Qa(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Qa(e,""+i);break;case"className":cr(e,"class",i);break;case"tabIndex":cr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":cr(e,n,i);break;case"style":vd(e,i,s);break;case"data":if(t!=="object"){cr(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=dr(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&De(e,t,"name",r.name,r,null),De(e,t,"formEncType",r.formEncType,r,null),De(e,t,"formMethod",r.formMethod,r,null),De(e,t,"formTarget",r.formTarget,r,null)):(De(e,t,"encType",r.encType,r,null),De(e,t,"method",r.method,r,null),De(e,t,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=dr(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=dn);break;case"onScroll":i!=null&&xe("scroll",e);break;case"onScrollEnd":i!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=dr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":xe("beforetoggle",e),xe("toggle",e),sr(e,"popover",i);break;case"xlinkActuate":fn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":fn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":fn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":fn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":fn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":fn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":fn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":fn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":fn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":sr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Lv.get(n)||n,sr(e,n,i))}}function oc(e,t,n,i,r,s){switch(n){case"style":vd(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Qa(e,i):(typeof i=="number"||typeof i=="bigint")&&Qa(e,""+i);break;case"onScroll":i!=null&&xe("scroll",e);break;case"onScrollEnd":i!=null&&xe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=dn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ud.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),s=e[mt]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,r),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,r);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):sr(e,n,i)}}}function ut(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var i=!1,r=!1,s;for(s in n)if(n.hasOwnProperty(s)){var d=n[s];if(d!=null)switch(s){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:De(e,t,s,d,n,null)}}r&&De(e,t,"srcSet",n.srcSet,n,null),i&&De(e,t,"src",n.src,n,null);return;case"input":xe("invalid",e);var g=s=d=r=null,C=null,H=null;for(i in n)if(n.hasOwnProperty(i)){var P=n[i];if(P!=null)switch(i){case"name":r=P;break;case"type":d=P;break;case"checked":C=P;break;case"defaultChecked":H=P;break;case"value":s=P;break;case"defaultValue":g=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(o(137,t));break;default:De(e,t,i,P,n,null)}}hd(e,s,g,C,H,d,r,!1);return;case"select":xe("invalid",e),i=d=s=null;for(r in n)if(n.hasOwnProperty(r)&&(g=n[r],g!=null))switch(r){case"value":s=g;break;case"defaultValue":d=g;break;case"multiple":i=g;default:De(e,t,r,g,n,null)}t=s,n=d,e.multiple=!!i,t!=null?Va(e,!!i,t,!1):n!=null&&Va(e,!!i,n,!0);return;case"textarea":xe("invalid",e),s=r=i=null;for(d in n)if(n.hasOwnProperty(d)&&(g=n[d],g!=null))switch(d){case"value":i=g;break;case"defaultValue":r=g;break;case"children":s=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(o(91));break;default:De(e,t,d,g,n,null)}md(e,i,r,s);return;case"option":for(C in n)if(n.hasOwnProperty(C)&&(i=n[C],i!=null))switch(C){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:De(e,t,C,i,n,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(i=0;i<Rl.length;i++)xe(Rl[i],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in n)if(n.hasOwnProperty(H)&&(i=n[H],i!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:De(e,t,H,i,n,null)}return;default:if(Su(t)){for(P in n)n.hasOwnProperty(P)&&(i=n[P],i!==void 0&&oc(e,t,P,i,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(i=n[g],i!=null&&De(e,t,g,i,n,null))}function s2(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,d=null,g=null,C=null,H=null,P=null;for(Q in n){var ee=n[Q];if(n.hasOwnProperty(Q)&&ee!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":C=ee;default:i.hasOwnProperty(Q)||De(e,t,Q,null,i,ee)}}for(var G in i){var Q=i[G];if(ee=n[G],i.hasOwnProperty(G)&&(Q!=null||ee!=null))switch(G){case"type":s=Q;break;case"name":r=Q;break;case"checked":H=Q;break;case"defaultChecked":P=Q;break;case"value":d=Q;break;case"defaultValue":g=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(o(137,t));break;default:Q!==ee&&De(e,t,G,Q,i,ee)}}bu(e,d,g,C,H,P,s,r);return;case"select":Q=d=g=G=null;for(s in n)if(C=n[s],n.hasOwnProperty(s)&&C!=null)switch(s){case"value":break;case"multiple":Q=C;default:i.hasOwnProperty(s)||De(e,t,s,null,i,C)}for(r in i)if(s=i[r],C=n[r],i.hasOwnProperty(r)&&(s!=null||C!=null))switch(r){case"value":G=s;break;case"defaultValue":g=s;break;case"multiple":d=s;default:s!==C&&De(e,t,r,s,i,C)}t=g,n=d,i=Q,G!=null?Va(e,!!n,G,!1):!!i!=!!n&&(t!=null?Va(e,!!n,t,!0):Va(e,!!n,n?[]:"",!1));return;case"textarea":Q=G=null;for(g in n)if(r=n[g],n.hasOwnProperty(g)&&r!=null&&!i.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:De(e,t,g,null,i,r)}for(d in i)if(r=i[d],s=n[d],i.hasOwnProperty(d)&&(r!=null||s!=null))switch(d){case"value":G=r;break;case"defaultValue":Q=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));break;default:r!==s&&De(e,t,d,r,i,s)}pd(e,G,Q);return;case"option":for(var oe in n)if(G=n[oe],n.hasOwnProperty(oe)&&G!=null&&!i.hasOwnProperty(oe))switch(oe){case"selected":e.selected=!1;break;default:De(e,t,oe,null,i,G)}for(C in i)if(G=i[C],Q=n[C],i.hasOwnProperty(C)&&G!==Q&&(G!=null||Q!=null))switch(C){case"selected":e.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:De(e,t,C,G,i,Q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in n)G=n[de],n.hasOwnProperty(de)&&G!=null&&!i.hasOwnProperty(de)&&De(e,t,de,null,i,G);for(H in i)if(G=i[H],Q=n[H],i.hasOwnProperty(H)&&G!==Q&&(G!=null||Q!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(o(137,t));break;default:De(e,t,H,G,i,Q)}return;default:if(Su(t)){for(var Ne in n)G=n[Ne],n.hasOwnProperty(Ne)&&G!==void 0&&!i.hasOwnProperty(Ne)&&oc(e,t,Ne,void 0,i,G);for(P in i)G=i[P],Q=n[P],!i.hasOwnProperty(P)||G===Q||G===void 0&&Q===void 0||oc(e,t,P,G,i,Q);return}}for(var D in n)G=n[D],n.hasOwnProperty(D)&&G!=null&&!i.hasOwnProperty(D)&&De(e,t,D,null,i,G);for(ee in i)G=i[ee],Q=n[ee],!i.hasOwnProperty(ee)||G===Q||G==null&&Q==null||De(e,t,ee,G,i,Q)}function y0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function c2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var r=n[i],s=r.transferSize,d=r.initiatorType,g=r.duration;if(s&&g&&y0(d)){for(d=0,g=r.responseEnd,i+=1;i<n.length;i++){var C=n[i],H=C.startTime;if(H>g)break;var P=C.transferSize,ee=C.initiatorType;P&&y0(ee)&&(C=C.responseEnd,d+=P*(C<g?1:(g-H)/(C-H)))}if(--i,t+=8*(s+d)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var uc=null,sc=null;function oo(e){return e.nodeType===9?e:e.ownerDocument}function b0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function x0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function cc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fc=null;function f2(){var e=window.event;return e&&e.type==="popstate"?e===fc?!1:(fc=e,!0):(fc=null,!1)}var S0=typeof setTimeout=="function"?setTimeout:void 0,d2=typeof clearTimeout=="function"?clearTimeout:void 0,w0=typeof Promise=="function"?Promise:void 0,h2=typeof queueMicrotask=="function"?queueMicrotask:typeof w0<"u"?function(e){return w0.resolve(null).then(e).catch(p2)}:S0;function p2(e){setTimeout(function(){throw e})}function ia(e){return e==="head"}function E0(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(r),Ei(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")zl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,zl(n);for(var s=n.firstChild;s;){var d=s.nextSibling,g=s.nodeName;s[Zi]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=d}}else n==="body"&&zl(e.ownerDocument.body);n=r}while(n);Ei(t)}function C0(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function dc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":dc(n),vu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function m2(e,t,n,i){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Zi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Vt(e.nextSibling),e===null)break}return null}function g2(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Vt(e.nextSibling),e===null))return null;return e}function T0(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Vt(e.nextSibling),e===null))return null;return e}function hc(e){return e.data==="$?"||e.data==="$~"}function pc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function v2(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var mc=null;function j0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Vt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function R0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function O0(e,t,n){switch(t=oo(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function zl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);vu(e)}var Qt=new Map,z0=new Set;function uo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var On=$.d;$.d={f:y2,r:b2,D:x2,C:S2,L:w2,m:E2,X:T2,S:C2,M:j2};function y2(){var e=On.f(),t=Ir();return e||t}function b2(e){var t=Ya(e);t!==null&&t.tag===5&&t.type==="form"?Qh(t):On.r(e)}var xi=typeof document>"u"?null:document;function _0(e,t,n){var i=xi;if(i&&typeof t=="string"&&t){var r=Ut(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),z0.has(r)||(z0.add(r),e={rel:e,crossOrigin:n,href:t},i.querySelector(r)===null&&(t=i.createElement("link"),ut(t,"link",e),et(t),i.head.appendChild(t)))}}function x2(e){On.D(e),_0("dns-prefetch",e,null)}function S2(e,t){On.C(e,t),_0("preconnect",e,t)}function w2(e,t,n){On.L(e,t,n);var i=xi;if(i&&e&&t){var r='link[rel="preload"][as="'+Ut(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Ut(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Ut(n.imageSizes)+'"]')):r+='[href="'+Ut(e)+'"]';var s=r;switch(t){case"style":s=Si(e);break;case"script":s=wi(e)}Qt.has(s)||(e=S({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Qt.set(s,e),i.querySelector(r)!==null||t==="style"&&i.querySelector(_l(s))||t==="script"&&i.querySelector(Ml(s))||(t=i.createElement("link"),ut(t,"link",e),et(t),i.head.appendChild(t)))}}function E2(e,t){On.m(e,t);var n=xi;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Ut(i)+'"][href="'+Ut(e)+'"]',s=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=wi(e)}if(!Qt.has(s)&&(e=S({rel:"modulepreload",href:e},t),Qt.set(s,e),n.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ml(s)))return}i=n.createElement("link"),ut(i,"link",e),et(i),n.head.appendChild(i)}}}function C2(e,t,n){On.S(e,t,n);var i=xi;if(i&&e){var r=Ga(i).hoistableStyles,s=Si(e);t=t||"default";var d=r.get(s);if(!d){var g={loading:0,preload:null};if(d=i.querySelector(_l(s)))g.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Qt.get(s))&&gc(e,n);var C=d=i.createElement("link");et(C),ut(C,"link",e),C._p=new Promise(function(H,P){C.onload=H,C.onerror=P}),C.addEventListener("load",function(){g.loading|=1}),C.addEventListener("error",function(){g.loading|=2}),g.loading|=4,so(d,t,i)}d={type:"stylesheet",instance:d,count:1,state:g},r.set(s,d)}}}function T2(e,t){On.X(e,t);var n=xi;if(n&&e){var i=Ga(n).hoistableScripts,r=wi(e),s=i.get(r);s||(s=n.querySelector(Ml(r)),s||(e=S({src:e,async:!0},t),(t=Qt.get(r))&&vc(e,t),s=n.createElement("script"),et(s),ut(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function j2(e,t){On.M(e,t);var n=xi;if(n&&e){var i=Ga(n).hoistableScripts,r=wi(e),s=i.get(r);s||(s=n.querySelector(Ml(r)),s||(e=S({src:e,async:!0,type:"module"},t),(t=Qt.get(r))&&vc(e,t),s=n.createElement("script"),et(s),ut(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function M0(e,t,n,i){var r=(r=he.current)?uo(r):null;if(!r)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Si(n.href),n=Ga(r).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Si(n.href);var s=Ga(r).hoistableStyles,d=s.get(e);if(d||(r=r.ownerDocument||r,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,d),(s=r.querySelector(_l(e)))&&!s._p&&(d.instance=s,d.state.loading=5),Qt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Qt.set(e,n),s||R2(r,e,n,d.state))),t&&i===null)throw Error(o(528,""));return d}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=wi(n),n=Ga(r).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Si(e){return'href="'+Ut(e)+'"'}function _l(e){return'link[rel="stylesheet"]['+e+"]"}function A0(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function R2(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ut(t,"link",n),et(t),e.head.appendChild(t))}function wi(e){return'[src="'+Ut(e)+'"]'}function Ml(e){return"script[async]"+e}function D0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ut(n.href)+'"]');if(i)return t.instance=i,et(i),i;var r=S({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),et(i),ut(i,"style",r),so(i,n.precedence,e),t.instance=i;case"stylesheet":r=Si(n.href);var s=e.querySelector(_l(r));if(s)return t.state.loading|=4,t.instance=s,et(s),s;i=A0(n),(r=Qt.get(r))&&gc(i,r),s=(e.ownerDocument||e).createElement("link"),et(s);var d=s;return d._p=new Promise(function(g,C){d.onload=g,d.onerror=C}),ut(s,"link",i),t.state.loading|=4,so(s,n.precedence,e),t.instance=s;case"script":return s=wi(n.src),(r=e.querySelector(Ml(s)))?(t.instance=r,et(r),r):(i=n,(r=Qt.get(s))&&(i=S({},n),vc(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),et(r),ut(r,"link",i),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,so(i,n.precedence,e));return t.instance}function so(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,s=r,d=0;d<i.length;d++){var g=i[d];if(g.dataset.precedence===t)s=g;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function gc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function vc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var co=null;function N0(e,t,n){if(co===null){var i=new Map,r=co=new Map;r.set(n,i)}else r=co,i=r.get(n),i||(i=new Map,r.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var s=n[r];if(!(s[Zi]||s[it]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var d=s.getAttribute(t)||"";d=e+d;var g=i.get(d);g?g.push(s):i.set(d,[s])}}return i}function k0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function O2(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function L0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function z2(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=Si(i.href),s=t.querySelector(_l(r));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=fo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,et(s);return}s=t.ownerDocument||t,i=A0(i),(r=Qt.get(r))&&gc(i,r),s=s.createElement("link"),et(s);var d=s;d._p=new Promise(function(g,C){d.onload=g,d.onerror=C}),ut(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=fo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var yc=0;function _2(e,t){return e.stylesheets&&e.count===0&&po(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&po(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&yc===0&&(yc=62500*c2());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&po(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>yc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function fo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)po(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ho=null;function po(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ho=new Map,t.forEach(M2,e),ho=null,fo.call(e))}function M2(e,t){if(!(t.state.loading&4)){var n=ho.get(e);if(n)var i=n.get(null);else{n=new Map,ho.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var d=r[s];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),i=d)}i&&n.set(null,i)}r=t.instance,d=r.getAttribute("data-precedence"),s=n.get(d)||i,s===i&&n.set(null,r),n.set(d,r),this.count++,i=fo.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Al={$$typeof:q,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function A2(e,t,n,i,r,s,d,g,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hu(0),this.hiddenUpdates=hu(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function B0(e,t,n,i,r,s,d,g,C,H,P,ee){return e=new A2(e,t,n,d,C,H,P,ee,g),t=1,s===!0&&(t|=24),s=Ot(3,null,null,t),e.current=s,s.stateNode=e,t=Wu(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},ts(s),e}function U0(e){return e?(e=Ia,e):Ia}function H0(e,t,n,i,r,s){r=U0(r),i.context===null?i.context=r:i.pendingContext=r,i=Zn(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Kn(e,i,t),n!==null&&(St(n,e,t),cl(n,e,t))}function $0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bc(e,t){$0(e,t),(e=e.alternate)&&$0(e,t)}function q0(e){if(e.tag===13||e.tag===31){var t=xa(e,67108864);t!==null&&St(t,e,67108864),bc(e,67108864)}}function Y0(e){if(e.tag===13||e.tag===31){var t=Dt();t=pu(t);var n=xa(e,t);n!==null&&St(n,e,t),bc(e,t)}}var mo=!0;function D2(e,t,n,i){var r=z.T;z.T=null;var s=$.p;try{$.p=2,xc(e,t,n,i)}finally{$.p=s,z.T=r}}function N2(e,t,n,i){var r=z.T;z.T=null;var s=$.p;try{$.p=8,xc(e,t,n,i)}finally{$.p=s,z.T=r}}function xc(e,t,n,i){if(mo){var r=Sc(i);if(r===null)rc(e,t,i,go,n),X0(e,i);else if(L2(r,e,t,n,i))i.stopPropagation();else if(X0(e,i),t&4&&-1<k2.indexOf(e)){for(;r!==null;){var s=Ya(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var d=ma(s.pendingLanes);if(d!==0){var g=s;for(g.pendingLanes|=2,g.entangledLanes|=2;d;){var C=1<<31-jt(d);g.entanglements[1]|=C,d&=~C}rn(s),(Oe&6)===0&&(Wr=Ct()+500,jl(0))}}break;case 31:case 13:g=xa(s,2),g!==null&&St(g,s,2),Ir(),bc(s,2)}if(s=Sc(i),s===null&&rc(e,t,i,go,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else rc(e,t,i,null,n)}}function Sc(e){return e=Eu(e),wc(e)}var go=null;function wc(e){if(go=null,e=qa(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return go=e,null}function G0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xv()){case Wf:return 2;case Pf:return 8;case ir:case Sv:return 32;case If:return 268435456;default:return 32}default:return 32}}var Ec=!1,la=null,ra=null,oa=null,Dl=new Map,Nl=new Map,ua=[],k2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function X0(e,t){switch(e){case"focusin":case"focusout":la=null;break;case"dragenter":case"dragleave":ra=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":Dl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nl.delete(t.pointerId)}}function kl(e,t,n,i,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},t!==null&&(t=Ya(t),t!==null&&q0(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function L2(e,t,n,i,r){switch(t){case"focusin":return la=kl(la,e,t,n,i,r),!0;case"dragenter":return ra=kl(ra,e,t,n,i,r),!0;case"mouseover":return oa=kl(oa,e,t,n,i,r),!0;case"pointerover":var s=r.pointerId;return Dl.set(s,kl(Dl.get(s)||null,e,t,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Nl.set(s,kl(Nl.get(s)||null,e,t,n,i,r)),!0}return!1}function V0(e){var t=qa(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,ld(e.priority,function(){Y0(n)});return}}else if(t===31){if(t=y(n),t!==null){e.blockedOn=t,ld(e.priority,function(){Y0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Sc(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);wu=i,n.target.dispatchEvent(i),wu=null}else return t=Ya(n),t!==null&&q0(t),e.blockedOn=n,!1;t.shift()}return!0}function Q0(e,t,n){vo(e)&&n.delete(t)}function B2(){Ec=!1,la!==null&&vo(la)&&(la=null),ra!==null&&vo(ra)&&(ra=null),oa!==null&&vo(oa)&&(oa=null),Dl.forEach(Q0),Nl.forEach(Q0)}function yo(e,t){e.blockedOn===t&&(e.blockedOn=null,Ec||(Ec=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,B2)))}var bo=null;function Z0(e){bo!==e&&(bo=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){bo===e&&(bo=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],r=e[t+2];if(typeof i!="function"){if(wc(i||n)===null)continue;break}var s=Ya(n);s!==null&&(e.splice(t,3),t-=3,Ss(s,{pending:!0,data:r,method:n.method,action:i},i,r))}}))}function Ei(e){function t(C){return yo(C,e)}la!==null&&yo(la,e),ra!==null&&yo(ra,e),oa!==null&&yo(oa,e),Dl.forEach(t),Nl.forEach(t);for(var n=0;n<ua.length;n++){var i=ua[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ua.length&&(n=ua[0],n.blockedOn===null);)V0(n),n.blockedOn===null&&ua.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var r=n[i],s=n[i+1],d=r[mt]||null;if(typeof s=="function")d||Z0(n);else if(d){var g=null;if(s&&s.hasAttribute("formAction")){if(r=s,d=s[mt]||null)g=d.formAction;else if(wc(r)!==null)continue}else g=d.action;typeof g=="function"?n[i+1]=g:(n.splice(i,3),i-=3),Z0(n)}}}function K0(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(d){return r=d})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Cc(e){this._internalRoot=e}xo.prototype.render=Cc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,i=Dt();H0(n,i,e,t,null,null)},xo.prototype.unmount=Cc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;H0(e.current,2,null,e,null,null),Ir(),t[$a]=null}};function xo(e){this._internalRoot=e}xo.prototype.unstable_scheduleHydration=function(e){if(e){var t=id();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ua.length&&t!==0&&t<ua[n].priority;n++);ua.splice(n,0,e),n===0&&V0(e)}};var J0=l.version;if(J0!=="19.2.0")throw Error(o(527,J0,"19.2.0"));$.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=m(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var U2={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var So=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!So.isDisabled&&So.supportsFiber)try{Xi=So.inject(U2),Tt=So}catch{}}return Bl.createRoot=function(e,t){if(!c(e))throw Error(o(299));var n=!1,i="",r=np,s=ap,d=ip;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=B0(e,1,!1,null,null,n,i,null,r,s,d,K0),e[$a]=t.current,lc(e),new Cc(t)},Bl.hydrateRoot=function(e,t,n){if(!c(e))throw Error(o(299));var i=!1,r="",s=np,d=ap,g=ip,C=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.formState!==void 0&&(C=n.formState)),t=B0(e,1,!0,t,n??null,i,r,C,s,d,g,K0),t.context=U0(null),n=t.current,i=Dt(),i=pu(i),r=Zn(i),r.callback=null,Kn(n,r,i),n=i,t.current.lanes=n,Qi(t,n),rn(t),e[$a]=t.current,lc(e),new xo(t)},Bl.version="19.2.0",Bl}var l1;function Z2(){if(l1)return Rc.exports;l1=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Rc.exports=Q2(),Rc.exports}var K2=Z2();const J2=Il(K2);/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var r1="popstate";function F2(a={}){function l(o,c){let{pathname:f,search:p,hash:y}=o.location;return ff("",{pathname:f,search:p,hash:y},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function u(o,c){return typeof c=="string"?c:Fl(c)}return P2(l,u,null,a)}function Ge(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function un(a,l){if(!a){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function W2(){return Math.random().toString(36).substring(2,10)}function o1(a,l){return{usr:a.state,key:a.key,idx:l}}function ff(a,l,u=null,o){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof l=="string"?Bi(l):l,state:u,key:l&&l.key||o||W2()}}function Fl({pathname:a="/",search:l="",hash:u=""}){return l&&l!=="?"&&(a+=l.charAt(0)==="?"?l:"?"+l),u&&u!=="#"&&(a+=u.charAt(0)==="#"?u:"#"+u),a}function Bi(a){let l={};if(a){let u=a.indexOf("#");u>=0&&(l.hash=a.substring(u),a=a.substring(0,u));let o=a.indexOf("?");o>=0&&(l.search=a.substring(o),a=a.substring(0,o)),a&&(l.pathname=a)}return l}function P2(a,l,u,o={}){let{window:c=document.defaultView,v5Compat:f=!1}=o,p=c.history,y="POP",v=null,m=x();m==null&&(m=0,p.replaceState({...p.state,idx:m},""));function x(){return(p.state||{idx:null}).idx}function S(){y="POP";let L=x(),K=L==null?null:L-m;m=L,v&&v({action:y,location:Y.location,delta:K})}function w(L,K){y="PUSH";let _=ff(Y.location,L,K);m=x()+1;let q=o1(_,m),X=Y.createHref(_);try{p.pushState(q,"",X)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;c.location.assign(X)}f&&v&&v({action:y,location:Y.location,delta:1})}function A(L,K){y="REPLACE";let _=ff(Y.location,L,K);m=x();let q=o1(_,m),X=Y.createHref(_);p.replaceState(q,"",X),f&&v&&v({action:y,location:Y.location,delta:0})}function R(L){return I2(L)}let Y={get action(){return y},get location(){return a(c,p)},listen(L){if(v)throw new Error("A history only accepts one active listener");return c.addEventListener(r1,S),v=L,()=>{c.removeEventListener(r1,S),v=null}},createHref(L){return l(c,L)},createURL:R,encodeLocation(L){let K=R(L);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:w,replace:A,go(L){return p.go(L)}};return Y}function I2(a,l=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Ge(u,"No window.location.(origin|href) available to create URL");let o=typeof a=="string"?a:Fl(a);return o=o.replace(/ $/,"%20"),!l&&o.startsWith("//")&&(o=u+o),new URL(o,u)}function zm(a,l,u="/"){return eb(a,l,u,!1)}function eb(a,l,u,o){let c=typeof l=="string"?Bi(l):l,f=kn(c.pathname||"/",u);if(f==null)return null;let p=_m(a);tb(p);let y=null;for(let v=0;y==null&&v<p.length;++v){let m=db(f);y=cb(p[v],m,o)}return y}function _m(a,l=[],u=[],o="",c=!1){let f=(p,y,v=c,m)=>{let x={relativePath:m===void 0?p.path||"":m,caseSensitive:p.caseSensitive===!0,childrenIndex:y,route:p};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(o)&&v)return;Ge(x.relativePath.startsWith(o),`Absolute route path "${x.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(o.length)}let S=Dn([o,x.relativePath]),w=u.concat(x);p.children&&p.children.length>0&&(Ge(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),_m(p.children,l,w,S,v)),!(p.path==null&&!p.index)&&l.push({path:S,score:ub(S,p.index),routesMeta:w})};return a.forEach((p,y)=>{if(p.path===""||!p.path?.includes("?"))f(p,y);else for(let v of Mm(p.path))f(p,y,!0,v)}),l}function Mm(a){let l=a.split("/");if(l.length===0)return[];let[u,...o]=l,c=u.endsWith("?"),f=u.replace(/\?$/,"");if(o.length===0)return c?[f,""]:[f];let p=Mm(o.join("/")),y=[];return y.push(...p.map(v=>v===""?f:[f,v].join("/"))),c&&y.push(...p),y.map(v=>a.startsWith("/")&&v===""?"/":v)}function tb(a){a.sort((l,u)=>l.score!==u.score?u.score-l.score:sb(l.routesMeta.map(o=>o.childrenIndex),u.routesMeta.map(o=>o.childrenIndex)))}var nb=/^:[\w-]+$/,ab=3,ib=2,lb=1,rb=10,ob=-2,u1=a=>a==="*";function ub(a,l){let u=a.split("/"),o=u.length;return u.some(u1)&&(o+=ob),l&&(o+=ib),u.filter(c=>!u1(c)).reduce((c,f)=>c+(nb.test(f)?ab:f===""?lb:rb),o)}function sb(a,l){return a.length===l.length&&a.slice(0,-1).every((o,c)=>o===l[c])?a[a.length-1]-l[l.length-1]:0}function cb(a,l,u=!1){let{routesMeta:o}=a,c={},f="/",p=[];for(let y=0;y<o.length;++y){let v=o[y],m=y===o.length-1,x=f==="/"?l:l.slice(f.length)||"/",S=qo({path:v.relativePath,caseSensitive:v.caseSensitive,end:m},x),w=v.route;if(!S&&m&&u&&!o[o.length-1].route.index&&(S=qo({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},x)),!S)return null;Object.assign(c,S.params),p.push({params:c,pathname:Dn([f,S.pathname]),pathnameBase:gb(Dn([f,S.pathnameBase])),route:w}),S.pathnameBase!=="/"&&(f=Dn([f,S.pathnameBase]))}return p}function qo(a,l){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[u,o]=fb(a.path,a.caseSensitive,a.end),c=l.match(u);if(!c)return null;let f=c[0],p=f.replace(/(.)\/+$/,"$1"),y=c.slice(1);return{params:o.reduce((m,{paramName:x,isOptional:S},w)=>{if(x==="*"){let R=y[w]||"";p=f.slice(0,f.length-R.length).replace(/(.)\/+$/,"$1")}const A=y[w];return S&&!A?m[x]=void 0:m[x]=(A||"").replace(/%2F/g,"/"),m},{}),pathname:f,pathnameBase:p,pattern:a}}function fb(a,l=!1,u=!0){un(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let o=[],c="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,y,v)=>(o.push({paramName:y,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(o.push({paramName:"*"}),c+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?c+="\\/*$":a!==""&&a!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,l?void 0:"i"),o]}function db(a){try{return a.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return un(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),a}}function kn(a,l){if(l==="/")return a;if(!a.toLowerCase().startsWith(l.toLowerCase()))return null;let u=l.endsWith("/")?l.length-1:l.length,o=a.charAt(u);return o&&o!=="/"?null:a.slice(u)||"/"}function hb(a,l="/"){let{pathname:u,search:o="",hash:c=""}=typeof a=="string"?Bi(a):a;return{pathname:u?u.startsWith("/")?u:pb(u,l):l,search:vb(o),hash:yb(c)}}function pb(a,l){let u=l.replace(/\/+$/,"").split("/");return a.split("/").forEach(c=>{c===".."?u.length>1&&u.pop():c!=="."&&u.push(c)}),u.length>1?u.join("/"):"/"}function Mc(a,l,u,o){return`Cannot include a '${a}' character in a manually specified \`to.${l}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function mb(a){return a.filter((l,u)=>u===0||l.route.path&&l.route.path.length>0)}function Am(a){let l=mb(a);return l.map((u,o)=>o===l.length-1?u.pathname:u.pathnameBase)}function Dm(a,l,u,o=!1){let c;typeof a=="string"?c=Bi(a):(c={...a},Ge(!c.pathname||!c.pathname.includes("?"),Mc("?","pathname","search",c)),Ge(!c.pathname||!c.pathname.includes("#"),Mc("#","pathname","hash",c)),Ge(!c.search||!c.search.includes("#"),Mc("#","search","hash",c)));let f=a===""||c.pathname==="",p=f?"/":c.pathname,y;if(p==null)y=u;else{let S=l.length-1;if(!o&&p.startsWith("..")){let w=p.split("/");for(;w[0]==="..";)w.shift(),S-=1;c.pathname=w.join("/")}y=S>=0?l[S]:"/"}let v=hb(c,y),m=p&&p!=="/"&&p.endsWith("/"),x=(f||p===".")&&u.endsWith("/");return!v.pathname.endsWith("/")&&(m||x)&&(v.pathname+="/"),v}var Dn=a=>a.join("/").replace(/\/\/+/g,"/"),gb=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),vb=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,yb=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function bb(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var Nm=["POST","PUT","PATCH","DELETE"];new Set(Nm);var xb=["GET",...Nm];new Set(xb);var Ui=b.createContext(null);Ui.displayName="DataRouter";var Wo=b.createContext(null);Wo.displayName="DataRouterState";b.createContext(!1);var km=b.createContext({isTransitioning:!1});km.displayName="ViewTransition";var Sb=b.createContext(new Map);Sb.displayName="Fetchers";var wb=b.createContext(null);wb.displayName="Await";var sn=b.createContext(null);sn.displayName="Navigation";var er=b.createContext(null);er.displayName="Location";var Ln=b.createContext({outlet:null,matches:[],isDataRoute:!1});Ln.displayName="Route";var jf=b.createContext(null);jf.displayName="RouteError";function Eb(a,{relative:l}={}){Ge(tr(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:o}=b.useContext(sn),{hash:c,pathname:f,search:p}=nr(a,{relative:l}),y=f;return u!=="/"&&(y=f==="/"?u:Dn([u,f])),o.createHref({pathname:y,search:p,hash:c})}function tr(){return b.useContext(er)!=null}function Bn(){return Ge(tr(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(er).location}var Lm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Bm(a){b.useContext(sn).static||b.useLayoutEffect(a)}function Rf(){let{isDataRoute:a}=b.useContext(Ln);return a?Lb():Cb()}function Cb(){Ge(tr(),"useNavigate() may be used only in the context of a <Router> component.");let a=b.useContext(Ui),{basename:l,navigator:u}=b.useContext(sn),{matches:o}=b.useContext(Ln),{pathname:c}=Bn(),f=JSON.stringify(Am(o)),p=b.useRef(!1);return Bm(()=>{p.current=!0}),b.useCallback((v,m={})=>{if(un(p.current,Lm),!p.current)return;if(typeof v=="number"){u.go(v);return}let x=Dm(v,JSON.parse(f),c,m.relative==="path");a==null&&l!=="/"&&(x.pathname=x.pathname==="/"?l:Dn([l,x.pathname])),(m.replace?u.replace:u.push)(x,m.state,m)},[l,u,f,c,a])}b.createContext(null);function nr(a,{relative:l}={}){let{matches:u}=b.useContext(Ln),{pathname:o}=Bn(),c=JSON.stringify(Am(u));return b.useMemo(()=>Dm(a,JSON.parse(c),o,l==="path"),[a,c,o,l])}function Tb(a,l){return Um(a,l)}function Um(a,l,u,o,c){Ge(tr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=b.useContext(sn),{matches:p}=b.useContext(Ln),y=p[p.length-1],v=y?y.params:{},m=y?y.pathname:"/",x=y?y.pathnameBase:"/",S=y&&y.route;{let _=S&&S.path||"";Hm(m,!S||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let w=Bn(),A;if(l){let _=typeof l=="string"?Bi(l):l;Ge(x==="/"||_.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${_.pathname}" was given in the \`location\` prop.`),A=_}else A=w;let R=A.pathname||"/",Y=R;if(x!=="/"){let _=x.replace(/^\//,"").split("/");Y="/"+R.replace(/^\//,"").split("/").slice(_.length).join("/")}let L=zm(a,{pathname:Y});un(S||L!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),un(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let K=_b(L&&L.map(_=>Object.assign({},_,{params:Object.assign({},v,_.params),pathname:Dn([x,f.encodeLocation?f.encodeLocation(_.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?x:Dn([x,f.encodeLocation?f.encodeLocation(_.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),p,u,o,c);return l&&K?b.createElement(er.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},K):K}function jb(){let a=kb(),l=bb(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),u=a instanceof Error?a.stack:null,o="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:o},f={padding:"2px 4px",backgroundColor:o},p=null;return console.error("Error handled by React Router default ErrorBoundary:",a),p=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:f},"ErrorBoundary")," or"," ",b.createElement("code",{style:f},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},l),u?b.createElement("pre",{style:c},u):null,p)}var Rb=b.createElement(jb,null),Ob=class extends b.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,l){return l.location!==a.location||l.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:l.error,location:l.location,revalidation:a.revalidation||l.revalidation}}componentDidCatch(a,l){this.props.unstable_onError?this.props.unstable_onError(a,l):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?b.createElement(Ln.Provider,{value:this.props.routeContext},b.createElement(jf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function zb({routeContext:a,match:l,children:u}){let o=b.useContext(Ui);return o&&o.static&&o.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=l.route.id),b.createElement(Ln.Provider,{value:a},u)}function _b(a,l=[],u=null,o=null,c=null){if(a==null){if(!u)return null;if(u.errors)a=u.matches;else if(l.length===0&&!u.initialized&&u.matches.length>0)a=u.matches;else return null}let f=a,p=u?.errors;if(p!=null){let m=f.findIndex(x=>x.route.id&&p?.[x.route.id]!==void 0);Ge(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),f=f.slice(0,Math.min(f.length,m+1))}let y=!1,v=-1;if(u)for(let m=0;m<f.length;m++){let x=f[m];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(v=m),x.route.id){let{loaderData:S,errors:w}=u,A=x.route.loader&&!S.hasOwnProperty(x.route.id)&&(!w||w[x.route.id]===void 0);if(x.route.lazy||A){y=!0,v>=0?f=f.slice(0,v+1):f=[f[0]];break}}}return f.reduceRight((m,x,S)=>{let w,A=!1,R=null,Y=null;u&&(w=p&&x.route.id?p[x.route.id]:void 0,R=x.route.errorElement||Rb,y&&(v<0&&S===0?(Hm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,Y=null):v===S&&(A=!0,Y=x.route.hydrateFallbackElement||null)));let L=l.concat(f.slice(0,S+1)),K=()=>{let _;return w?_=R:A?_=Y:x.route.Component?_=b.createElement(x.route.Component,null):x.route.element?_=x.route.element:_=m,b.createElement(zb,{match:x,routeContext:{outlet:m,matches:L,isDataRoute:u!=null},children:_})};return u&&(x.route.ErrorBoundary||x.route.errorElement||S===0)?b.createElement(Ob,{location:u.location,revalidation:u.revalidation,component:R,error:w,children:K(),routeContext:{outlet:null,matches:L,isDataRoute:!0},unstable_onError:o}):K()},null)}function Of(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mb(a){let l=b.useContext(Ui);return Ge(l,Of(a)),l}function Ab(a){let l=b.useContext(Wo);return Ge(l,Of(a)),l}function Db(a){let l=b.useContext(Ln);return Ge(l,Of(a)),l}function zf(a){let l=Db(a),u=l.matches[l.matches.length-1];return Ge(u.route.id,`${a} can only be used on routes that contain a unique "id"`),u.route.id}function Nb(){return zf("useRouteId")}function kb(){let a=b.useContext(jf),l=Ab("useRouteError"),u=zf("useRouteError");return a!==void 0?a:l.errors?.[u]}function Lb(){let{router:a}=Mb("useNavigate"),l=zf("useNavigate"),u=b.useRef(!1);return Bm(()=>{u.current=!0}),b.useCallback(async(c,f={})=>{un(u.current,Lm),u.current&&(typeof c=="number"?a.navigate(c):await a.navigate(c,{fromRouteId:l,...f}))},[a,l])}var s1={};function Hm(a,l,u){!l&&!s1[a]&&(s1[a]=!0,un(!1,u))}b.memo(Bb);function Bb({routes:a,future:l,state:u,unstable_onError:o}){return Um(a,void 0,u,o,l)}function Da(a){Ge(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ub({basename:a="/",children:l=null,location:u,navigationType:o="POP",navigator:c,static:f=!1}){Ge(!tr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=a.replace(/^\/*/,"/"),y=b.useMemo(()=>({basename:p,navigator:c,static:f,future:{}}),[p,c,f]);typeof u=="string"&&(u=Bi(u));let{pathname:v="/",search:m="",hash:x="",state:S=null,key:w="default"}=u,A=b.useMemo(()=>{let R=kn(v,p);return R==null?null:{location:{pathname:R,search:m,hash:x,state:S,key:w},navigationType:o}},[p,v,m,x,S,w,o]);return un(A!=null,`<Router basename="${p}"> is not able to match the URL "${v}${m}${x}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:b.createElement(sn.Provider,{value:y},b.createElement(er.Provider,{children:l,value:A}))}function Hb({children:a,location:l}){return Tb(df(a),l)}function df(a,l=[]){let u=[];return b.Children.forEach(a,(o,c)=>{if(!b.isValidElement(o))return;let f=[...l,c];if(o.type===b.Fragment){u.push.apply(u,df(o.props.children,f));return}Ge(o.type===Da,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ge(!o.props.index||!o.props.children,"An index route cannot have child routes.");let p={id:o.props.id||f.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(p.children=df(o.props.children,f)),u.push(p)}),u}var No="get",ko="application/x-www-form-urlencoded";function Po(a){return a!=null&&typeof a.tagName=="string"}function $b(a){return Po(a)&&a.tagName.toLowerCase()==="button"}function qb(a){return Po(a)&&a.tagName.toLowerCase()==="form"}function Yb(a){return Po(a)&&a.tagName.toLowerCase()==="input"}function Gb(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function Xb(a,l){return a.button===0&&(!l||l==="_self")&&!Gb(a)}var wo=null;function Vb(){if(wo===null)try{new FormData(document.createElement("form"),0),wo=!1}catch{wo=!0}return wo}var Qb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ac(a){return a!=null&&!Qb.has(a)?(un(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ko}"`),null):a}function Zb(a,l){let u,o,c,f,p;if(qb(a)){let y=a.getAttribute("action");o=y?kn(y,l):null,u=a.getAttribute("method")||No,c=Ac(a.getAttribute("enctype"))||ko,f=new FormData(a)}else if($b(a)||Yb(a)&&(a.type==="submit"||a.type==="image")){let y=a.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=a.getAttribute("formaction")||y.getAttribute("action");if(o=v?kn(v,l):null,u=a.getAttribute("formmethod")||y.getAttribute("method")||No,c=Ac(a.getAttribute("formenctype"))||Ac(y.getAttribute("enctype"))||ko,f=new FormData(y,a),!Vb()){let{name:m,type:x,value:S}=a;if(x==="image"){let w=m?`${m}.`:"";f.append(`${w}x`,"0"),f.append(`${w}y`,"0")}else m&&f.append(m,S)}}else{if(Po(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=No,o=null,c=ko,p=a}return f&&c==="text/plain"&&(p=f,f=void 0),{action:o,method:u.toLowerCase(),encType:c,formData:f,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function _f(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function Kb(a,l,u){let o=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return o.pathname==="/"?o.pathname=`_root.${u}`:l&&kn(o.pathname,l)==="/"?o.pathname=`${l.replace(/\/$/,"")}/_root.${u}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${u}`,o}async function Jb(a,l){if(a.id in l)return l[a.id];try{let u=await import(a.module);return l[a.id]=u,u}catch(u){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Fb(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Wb(a,l,u){let o=await Promise.all(a.map(async c=>{let f=l.routes[c.route.id];if(f){let p=await Jb(f,u);return p.links?p.links():[]}return[]}));return tx(o.flat(1).filter(Fb).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function c1(a,l,u,o,c,f){let p=(v,m)=>u[m]?v.route.id!==u[m].route.id:!0,y=(v,m)=>u[m].pathname!==v.pathname||u[m].route.path?.endsWith("*")&&u[m].params["*"]!==v.params["*"];return f==="assets"?l.filter((v,m)=>p(v,m)||y(v,m)):f==="data"?l.filter((v,m)=>{let x=o.routes[v.route.id];if(!x||!x.hasLoader)return!1;if(p(v,m)||y(v,m))return!0;if(v.route.shouldRevalidate){let S=v.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function Pb(a,l,{includeHydrateFallback:u}={}){return Ib(a.map(o=>{let c=l.routes[o.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),u&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function Ib(a){return[...new Set(a)]}function ex(a){let l={},u=Object.keys(a).sort();for(let o of u)l[o]=a[o];return l}function tx(a,l){let u=new Set;return new Set(l),a.reduce((o,c)=>{let f=JSON.stringify(ex(c));return u.has(f)||(u.add(f),o.push({key:f,link:c})),o},[])}function $m(){let a=b.useContext(Ui);return _f(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function nx(){let a=b.useContext(Wo);return _f(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Mf=b.createContext(void 0);Mf.displayName="FrameworkContext";function qm(){let a=b.useContext(Mf);return _f(a,"You must render this element inside a <HydratedRouter> element"),a}function ax(a,l){let u=b.useContext(Mf),[o,c]=b.useState(!1),[f,p]=b.useState(!1),{onFocus:y,onBlur:v,onMouseEnter:m,onMouseLeave:x,onTouchStart:S}=l,w=b.useRef(null);b.useEffect(()=>{if(a==="render"&&p(!0),a==="viewport"){let Y=K=>{K.forEach(_=>{p(_.isIntersecting)})},L=new IntersectionObserver(Y,{threshold:.5});return w.current&&L.observe(w.current),()=>{L.disconnect()}}},[a]),b.useEffect(()=>{if(o){let Y=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(Y)}}},[o]);let A=()=>{c(!0)},R=()=>{c(!1),p(!1)};return u?a!=="intent"?[f,w,{}]:[f,w,{onFocus:Ul(y,A),onBlur:Ul(v,R),onMouseEnter:Ul(m,A),onMouseLeave:Ul(x,R),onTouchStart:Ul(S,A)}]:[!1,w,{}]}function Ul(a,l){return u=>{a&&a(u),u.defaultPrevented||l(u)}}function ix({page:a,...l}){let{router:u}=$m(),o=b.useMemo(()=>zm(u.routes,a,u.basename),[u.routes,a,u.basename]);return o?b.createElement(rx,{page:a,matches:o,...l}):null}function lx(a){let{manifest:l,routeModules:u}=qm(),[o,c]=b.useState([]);return b.useEffect(()=>{let f=!1;return Wb(a,l,u).then(p=>{f||c(p)}),()=>{f=!0}},[a,l,u]),o}function rx({page:a,matches:l,...u}){let o=Bn(),{manifest:c,routeModules:f}=qm(),{basename:p}=$m(),{loaderData:y,matches:v}=nx(),m=b.useMemo(()=>c1(a,l,v,c,o,"data"),[a,l,v,c,o]),x=b.useMemo(()=>c1(a,l,v,c,o,"assets"),[a,l,v,c,o]),S=b.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let R=new Set,Y=!1;if(l.forEach(K=>{let _=c.routes[K.route.id];!_||!_.hasLoader||(!m.some(q=>q.route.id===K.route.id)&&K.route.id in y&&f[K.route.id]?.shouldRevalidate||_.hasClientLoader?Y=!0:R.add(K.route.id))}),R.size===0)return[];let L=Kb(a,p,"data");return Y&&R.size>0&&L.searchParams.set("_routes",l.filter(K=>R.has(K.route.id)).map(K=>K.route.id).join(",")),[L.pathname+L.search]},[p,y,o,c,m,l,a,f]),w=b.useMemo(()=>Pb(x,c),[x,c]),A=lx(x);return b.createElement(b.Fragment,null,S.map(R=>b.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...u})),w.map(R=>b.createElement("link",{key:R,rel:"modulepreload",href:R,...u})),A.map(({key:R,link:Y})=>b.createElement("link",{key:R,nonce:u.nonce,...Y})))}function ox(...a){return l=>{a.forEach(u=>{typeof u=="function"?u(l):u!=null&&(u.current=l)})}}var Ym=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ym&&(window.__reactRouterVersion="7.9.4")}catch{}function ux({basename:a,children:l,window:u}){let o=b.useRef();o.current==null&&(o.current=F2({window:u,v5Compat:!0}));let c=o.current,[f,p]=b.useState({action:c.action,location:c.location}),y=b.useCallback(v=>{b.startTransition(()=>p(v))},[p]);return b.useLayoutEffect(()=>c.listen(y),[c,y]),b.createElement(Ub,{basename:a,children:l,location:f.location,navigationType:f.action,navigator:c})}var Gm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hi=b.forwardRef(function({onClick:l,discover:u="render",prefetch:o="none",relative:c,reloadDocument:f,replace:p,state:y,target:v,to:m,preventScrollReset:x,viewTransition:S,...w},A){let{basename:R}=b.useContext(sn),Y=typeof m=="string"&&Gm.test(m),L,K=!1;if(typeof m=="string"&&Y&&(L=m,Ym))try{let Z=new URL(window.location.href),le=m.startsWith("//")?new URL(Z.protocol+m):new URL(m),J=kn(le.pathname,R);le.origin===Z.origin&&J!=null?m=J+le.search+le.hash:K=!0}catch{un(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let _=Eb(m,{relative:c}),[q,X,k]=ax(o,w),M=dx(m,{replace:p,state:y,target:v,preventScrollReset:x,relative:c,viewTransition:S});function F(Z){l&&l(Z),Z.defaultPrevented||M(Z)}let B=b.createElement("a",{...w,...k,href:L||_,onClick:K||f?l:F,ref:ox(A,X),target:v,"data-discover":!Y&&u==="render"?"true":void 0});return q&&!Y?b.createElement(b.Fragment,null,B,b.createElement(ix,{page:_})):B});Hi.displayName="Link";var sx=b.forwardRef(function({"aria-current":l="page",caseSensitive:u=!1,className:o="",end:c=!1,style:f,to:p,viewTransition:y,children:v,...m},x){let S=nr(p,{relative:m.relative}),w=Bn(),A=b.useContext(Wo),{navigator:R,basename:Y}=b.useContext(sn),L=A!=null&&vx(S)&&y===!0,K=R.encodeLocation?R.encodeLocation(S).pathname:S.pathname,_=w.pathname,q=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;u||(_=_.toLowerCase(),q=q?q.toLowerCase():null,K=K.toLowerCase()),q&&Y&&(q=kn(q,Y)||q);const X=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let k=_===K||!c&&_.startsWith(K)&&_.charAt(X)==="/",M=q!=null&&(q===K||!c&&q.startsWith(K)&&q.charAt(K.length)==="/"),F={isActive:k,isPending:M,isTransitioning:L},B=k?l:void 0,Z;typeof o=="function"?Z=o(F):Z=[o,k?"active":null,M?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let le=typeof f=="function"?f(F):f;return b.createElement(Hi,{...m,"aria-current":B,className:Z,ref:x,style:le,to:p,viewTransition:y},typeof v=="function"?v(F):v)});sx.displayName="NavLink";var cx=b.forwardRef(({discover:a="render",fetcherKey:l,navigate:u,reloadDocument:o,replace:c,state:f,method:p=No,action:y,onSubmit:v,relative:m,preventScrollReset:x,viewTransition:S,...w},A)=>{let R=mx(),Y=gx(y,{relative:m}),L=p.toLowerCase()==="get"?"get":"post",K=typeof y=="string"&&Gm.test(y),_=q=>{if(v&&v(q),q.defaultPrevented)return;q.preventDefault();let X=q.nativeEvent.submitter,k=X?.getAttribute("formmethod")||p;R(X||q.currentTarget,{fetcherKey:l,method:k,navigate:u,replace:c,state:f,relative:m,preventScrollReset:x,viewTransition:S})};return b.createElement("form",{ref:A,method:L,action:Y,onSubmit:o?v:_,...w,"data-discover":!K&&a==="render"?"true":void 0})});cx.displayName="Form";function fx(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xm(a){let l=b.useContext(Ui);return Ge(l,fx(a)),l}function dx(a,{target:l,replace:u,state:o,preventScrollReset:c,relative:f,viewTransition:p}={}){let y=Rf(),v=Bn(),m=nr(a,{relative:f});return b.useCallback(x=>{if(Xb(x,l)){x.preventDefault();let S=u!==void 0?u:Fl(v)===Fl(m);y(a,{replace:S,state:o,preventScrollReset:c,relative:f,viewTransition:p})}},[v,y,m,u,o,l,a,c,f,p])}var hx=0,px=()=>`__${String(++hx)}__`;function mx(){let{router:a}=Xm("useSubmit"),{basename:l}=b.useContext(sn),u=Nb();return b.useCallback(async(o,c={})=>{let{action:f,method:p,encType:y,formData:v,body:m}=Zb(o,l);if(c.navigate===!1){let x=c.fetcherKey||px();await a.fetch(x,u,c.action||f,{preventScrollReset:c.preventScrollReset,formData:v,body:m,formMethod:c.method||p,formEncType:c.encType||y,flushSync:c.flushSync})}else await a.navigate(c.action||f,{preventScrollReset:c.preventScrollReset,formData:v,body:m,formMethod:c.method||p,formEncType:c.encType||y,replace:c.replace,state:c.state,fromRouteId:u,flushSync:c.flushSync,viewTransition:c.viewTransition})},[a,l,u])}function gx(a,{relative:l}={}){let{basename:u}=b.useContext(sn),o=b.useContext(Ln);Ge(o,"useFormAction must be used inside a RouteContext");let[c]=o.matches.slice(-1),f={...nr(a||".",{relative:l})},p=Bn();if(a==null){f.search=p.search;let y=new URLSearchParams(f.search),v=y.getAll("index");if(v.some(x=>x==="")){y.delete("index"),v.filter(S=>S).forEach(S=>y.append("index",S));let x=y.toString();f.search=x?`?${x}`:""}}return(!a||a===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(f.pathname=f.pathname==="/"?u:Dn([u,f.pathname])),Fl(f)}function vx(a,{relative:l}={}){let u=b.useContext(km);Ge(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Xm("useViewTransitionState"),c=nr(a,{relative:l});if(!u.isTransitioning)return!1;let f=kn(u.currentLocation.pathname,o)||u.currentLocation.pathname,p=kn(u.nextLocation.pathname,o)||u.nextLocation.pathname;return qo(c.pathname,p)!=null||qo(c.pathname,f)!=null}var yx=Om();const Oi=Il(yx);var ft=function(){return ft=Object.assign||function(l){for(var u,o=1,c=arguments.length;o<c;o++){u=arguments[o];for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&(l[f]=u[f])}return l},ft.apply(this,arguments)};function Mi(a,l,u){if(u||arguments.length===2)for(var o=0,c=l.length,f;o<c;o++)(f||!(o in l))&&(f||(f=Array.prototype.slice.call(l,0,o)),f[o]=l[o]);return a.concat(f||Array.prototype.slice.call(l))}var $e="-ms-",Jl="-moz-",ze="-webkit-",Vm="comm",Io="rule",Af="decl",bx="@import",Qm="@keyframes",xx="@layer",Zm=Math.abs,Df=String.fromCharCode,hf=Object.assign;function Sx(a,l){return nt(a,0)^45?(((l<<2^nt(a,0))<<2^nt(a,1))<<2^nt(a,2))<<2^nt(a,3):0}function Km(a){return a.trim()}function _n(a,l){return(a=l.exec(a))?a[0]:a}function ve(a,l,u){return a.replace(l,u)}function Lo(a,l,u){return a.indexOf(l,u)}function nt(a,l){return a.charCodeAt(l)|0}function Ai(a,l,u){return a.slice(l,u)}function on(a){return a.length}function Jm(a){return a.length}function Zl(a,l){return l.push(a),a}function wx(a,l){return a.map(l).join("")}function f1(a,l){return a.filter(function(u){return!_n(u,l)})}var eu=1,Di=1,Fm=0,Zt=0,Pe=0,$i="";function tu(a,l,u,o,c,f,p,y){return{value:a,root:l,parent:u,type:o,props:c,children:f,line:eu,column:Di,length:p,return:"",siblings:y}}function ca(a,l){return hf(tu("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},l)}function Ci(a){for(;a.root;)a=ca(a.root,{children:[a]});Zl(a,a.siblings)}function Ex(){return Pe}function Cx(){return Pe=Zt>0?nt($i,--Zt):0,Di--,Pe===10&&(Di=1,eu--),Pe}function tn(){return Pe=Zt<Fm?nt($i,Zt++):0,Di++,Pe===10&&(Di=1,eu++),Pe}function Ba(){return nt($i,Zt)}function Bo(){return Zt}function nu(a,l){return Ai($i,a,l)}function pf(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Tx(a){return eu=Di=1,Fm=on($i=a),Zt=0,[]}function jx(a){return $i="",a}function Dc(a){return Km(nu(Zt-1,mf(a===91?a+2:a===40?a+1:a)))}function Rx(a){for(;(Pe=Ba())&&Pe<33;)tn();return pf(a)>2||pf(Pe)>3?"":" "}function Ox(a,l){for(;--l&&tn()&&!(Pe<48||Pe>102||Pe>57&&Pe<65||Pe>70&&Pe<97););return nu(a,Bo()+(l<6&&Ba()==32&&tn()==32))}function mf(a){for(;tn();)switch(Pe){case a:return Zt;case 34:case 39:a!==34&&a!==39&&mf(Pe);break;case 40:a===41&&mf(a);break;case 92:tn();break}return Zt}function zx(a,l){for(;tn()&&a+Pe!==57;)if(a+Pe===84&&Ba()===47)break;return"/*"+nu(l,Zt-1)+"*"+Df(a===47?a:tn())}function _x(a){for(;!pf(Ba());)tn();return nu(a,Zt)}function Mx(a){return jx(Uo("",null,null,null,[""],a=Tx(a),0,[0],a))}function Uo(a,l,u,o,c,f,p,y,v){for(var m=0,x=0,S=p,w=0,A=0,R=0,Y=1,L=1,K=1,_=0,q="",X=c,k=f,M=o,F=q;L;)switch(R=_,_=tn()){case 40:if(R!=108&&nt(F,S-1)==58){Lo(F+=ve(Dc(_),"&","&\f"),"&\f",Zm(m?y[m-1]:0))!=-1&&(K=-1);break}case 34:case 39:case 91:F+=Dc(_);break;case 9:case 10:case 13:case 32:F+=Rx(R);break;case 92:F+=Ox(Bo()-1,7);continue;case 47:switch(Ba()){case 42:case 47:Zl(Ax(zx(tn(),Bo()),l,u,v),v);break;default:F+="/"}break;case 123*Y:y[m++]=on(F)*K;case 125*Y:case 59:case 0:switch(_){case 0:case 125:L=0;case 59+x:K==-1&&(F=ve(F,/\f/g,"")),A>0&&on(F)-S&&Zl(A>32?h1(F+";",o,u,S-1,v):h1(ve(F," ","")+";",o,u,S-2,v),v);break;case 59:F+=";";default:if(Zl(M=d1(F,l,u,m,x,c,y,q,X=[],k=[],S,f),f),_===123)if(x===0)Uo(F,l,M,M,X,f,S,y,k);else switch(w===99&&nt(F,3)===110?100:w){case 100:case 108:case 109:case 115:Uo(a,M,M,o&&Zl(d1(a,M,M,0,0,c,y,q,c,X=[],S,k),k),c,k,S,y,o?X:k);break;default:Uo(F,M,M,M,[""],k,0,y,k)}}m=x=A=0,Y=K=1,q=F="",S=p;break;case 58:S=1+on(F),A=R;default:if(Y<1){if(_==123)--Y;else if(_==125&&Y++==0&&Cx()==125)continue}switch(F+=Df(_),_*Y){case 38:K=x>0?1:(F+="\f",-1);break;case 44:y[m++]=(on(F)-1)*K,K=1;break;case 64:Ba()===45&&(F+=Dc(tn())),w=Ba(),x=S=on(q=F+=_x(Bo())),_++;break;case 45:R===45&&on(F)==2&&(Y=0)}}return f}function d1(a,l,u,o,c,f,p,y,v,m,x,S){for(var w=c-1,A=c===0?f:[""],R=Jm(A),Y=0,L=0,K=0;Y<o;++Y)for(var _=0,q=Ai(a,w+1,w=Zm(L=p[Y])),X=a;_<R;++_)(X=Km(L>0?A[_]+" "+q:ve(q,/&\f/g,A[_])))&&(v[K++]=X);return tu(a,l,u,c===0?Io:y,v,m,x,S)}function Ax(a,l,u,o){return tu(a,l,u,Vm,Df(Ex()),Ai(a,2,-2),0,o)}function h1(a,l,u,o,c){return tu(a,l,u,Af,Ai(a,0,o),Ai(a,o+1,-1),o,c)}function Wm(a,l,u){switch(Sx(a,l)){case 5103:return ze+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ze+a+a;case 4789:return Jl+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return ze+a+Jl+a+$e+a+a;case 5936:switch(nt(a,l+11)){case 114:return ze+a+$e+ve(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return ze+a+$e+ve(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return ze+a+$e+ve(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return ze+a+$e+a+a;case 6165:return ze+a+$e+"flex-"+a+a;case 5187:return ze+a+ve(a,/(\w+).+(:[^]+)/,ze+"box-$1$2"+$e+"flex-$1$2")+a;case 5443:return ze+a+$e+"flex-item-"+ve(a,/flex-|-self/g,"")+(_n(a,/flex-|baseline/)?"":$e+"grid-row-"+ve(a,/flex-|-self/g,""))+a;case 4675:return ze+a+$e+"flex-line-pack"+ve(a,/align-content|flex-|-self/g,"")+a;case 5548:return ze+a+$e+ve(a,"shrink","negative")+a;case 5292:return ze+a+$e+ve(a,"basis","preferred-size")+a;case 6060:return ze+"box-"+ve(a,"-grow","")+ze+a+$e+ve(a,"grow","positive")+a;case 4554:return ze+ve(a,/([^-])(transform)/g,"$1"+ze+"$2")+a;case 6187:return ve(ve(ve(a,/(zoom-|grab)/,ze+"$1"),/(image-set)/,ze+"$1"),a,"")+a;case 5495:case 3959:return ve(a,/(image-set\([^]*)/,ze+"$1$`$1");case 4968:return ve(ve(a,/(.+:)(flex-)?(.*)/,ze+"box-pack:$3"+$e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ze+a+a;case 4200:if(!_n(a,/flex-|baseline/))return $e+"grid-column-align"+Ai(a,l)+a;break;case 2592:case 3360:return $e+ve(a,"template-","")+a;case 4384:case 3616:return u&&u.some(function(o,c){return l=c,_n(o.props,/grid-\w+-end/)})?~Lo(a+(u=u[l].value),"span",0)?a:$e+ve(a,"-start","")+a+$e+"grid-row-span:"+(~Lo(u,"span",0)?_n(u,/\d+/):+_n(u,/\d+/)-+_n(a,/\d+/))+";":$e+ve(a,"-start","")+a;case 4896:case 4128:return u&&u.some(function(o){return _n(o.props,/grid-\w+-start/)})?a:$e+ve(ve(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return ve(a,/(.+)-inline(.+)/,ze+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(on(a)-1-l>6)switch(nt(a,l+1)){case 109:if(nt(a,l+4)!==45)break;case 102:return ve(a,/(.+:)(.+)-([^]+)/,"$1"+ze+"$2-$3$1"+Jl+(nt(a,l+3)==108?"$3":"$2-$3"))+a;case 115:return~Lo(a,"stretch",0)?Wm(ve(a,"stretch","fill-available"),l,u)+a:a}break;case 5152:case 5920:return ve(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,c,f,p,y,v,m){return $e+c+":"+f+m+(p?$e+c+"-span:"+(y?v:+v-+f)+m:"")+a});case 4949:if(nt(a,l+6)===121)return ve(a,":",":"+ze)+a;break;case 6444:switch(nt(a,nt(a,14)===45?18:11)){case 120:return ve(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ze+(nt(a,14)===45?"inline-":"")+"box$3$1"+ze+"$2$3$1"+$e+"$2box$3")+a;case 100:return ve(a,":",":"+$e)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ve(a,"scroll-","scroll-snap-")+a}return a}function Yo(a,l){for(var u="",o=0;o<a.length;o++)u+=l(a[o],o,a,l)||"";return u}function Dx(a,l,u,o){switch(a.type){case xx:if(a.children.length)break;case bx:case Af:return a.return=a.return||a.value;case Vm:return"";case Qm:return a.return=a.value+"{"+Yo(a.children,o)+"}";case Io:if(!on(a.value=a.props.join(",")))return""}return on(u=Yo(a.children,o))?a.return=a.value+"{"+u+"}":""}function Nx(a){var l=Jm(a);return function(u,o,c,f){for(var p="",y=0;y<l;y++)p+=a[y](u,o,c,f)||"";return p}}function kx(a){return function(l){l.root||(l=l.return)&&a(l)}}function Lx(a,l,u,o){if(a.length>-1&&!a.return)switch(a.type){case Af:a.return=Wm(a.value,a.length,u);return;case Qm:return Yo([ca(a,{value:ve(a.value,"@","@"+ze)})],o);case Io:if(a.length)return wx(u=a.props,function(c){switch(_n(c,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ci(ca(a,{props:[ve(c,/:(read-\w+)/,":"+Jl+"$1")]})),Ci(ca(a,{props:[c]})),hf(a,{props:f1(u,o)});break;case"::placeholder":Ci(ca(a,{props:[ve(c,/:(plac\w+)/,":"+ze+"input-$1")]})),Ci(ca(a,{props:[ve(c,/:(plac\w+)/,":"+Jl+"$1")]})),Ci(ca(a,{props:[ve(c,/:(plac\w+)/,$e+"input-$1")]})),Ci(ca(a,{props:[c]})),hf(a,{props:f1(u,o)});break}return""})}}var Bx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},kt={},Ni=typeof process<"u"&&kt!==void 0&&(kt.REACT_APP_SC_ATTR||kt.SC_ATTR)||"data-styled",Pm="active",Im="data-styled-version",au="6.1.19",Nf=`/*!sc*/
`,Go=typeof window<"u"&&typeof document<"u",Ux=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&kt!==void 0&&kt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&kt.REACT_APP_SC_DISABLE_SPEEDY!==""?kt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&kt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&kt!==void 0&&kt.SC_DISABLE_SPEEDY!==void 0&&kt.SC_DISABLE_SPEEDY!==""&&kt.SC_DISABLE_SPEEDY!=="false"&&kt.SC_DISABLE_SPEEDY),Hx={},iu=Object.freeze([]),ki=Object.freeze({});function eg(a,l,u){return u===void 0&&(u=ki),a.theme!==u.theme&&a.theme||l||u.theme}var tg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$x=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qx=/(^-|-$)/g;function p1(a){return a.replace($x,"-").replace(qx,"")}var Yx=/(a)(d)/gi,Eo=52,m1=function(a){return String.fromCharCode(a+(a>25?39:97))};function gf(a){var l,u="";for(l=Math.abs(a);l>Eo;l=l/Eo|0)u=m1(l%Eo)+u;return(m1(l%Eo)+u).replace(Yx,"$1-$2")}var Nc,ng=5381,zi=function(a,l){for(var u=l.length;u;)a=33*a^l.charCodeAt(--u);return a},ag=function(a){return zi(ng,a)};function kf(a){return gf(ag(a)>>>0)}function Gx(a){return a.displayName||a.name||"Component"}function kc(a){return typeof a=="string"&&!0}var ig=typeof Symbol=="function"&&Symbol.for,lg=ig?Symbol.for("react.memo"):60115,Xx=ig?Symbol.for("react.forward_ref"):60112,Vx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Qx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},rg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zx=((Nc={})[Xx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nc[lg]=rg,Nc);function g1(a){return("type"in(l=a)&&l.type.$$typeof)===lg?rg:"$$typeof"in a?Zx[a.$$typeof]:Vx;var l}var Kx=Object.defineProperty,Jx=Object.getOwnPropertyNames,v1=Object.getOwnPropertySymbols,Fx=Object.getOwnPropertyDescriptor,Wx=Object.getPrototypeOf,y1=Object.prototype;function og(a,l,u){if(typeof l!="string"){if(y1){var o=Wx(l);o&&o!==y1&&og(a,o,u)}var c=Jx(l);v1&&(c=c.concat(v1(l)));for(var f=g1(a),p=g1(l),y=0;y<c.length;++y){var v=c[y];if(!(v in Qx||u&&u[v]||p&&v in p||f&&v in f)){var m=Fx(l,v);try{Kx(a,v,m)}catch{}}}}return a}function Li(a){return typeof a=="function"}function Lf(a){return typeof a=="object"&&"styledComponentId"in a}function La(a,l){return a&&l?"".concat(a," ").concat(l):a||l||""}function Xo(a,l){if(a.length===0)return"";for(var u=a[0],o=1;o<a.length;o++)u+=a[o];return u}function Wl(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function vf(a,l,u){if(u===void 0&&(u=!1),!u&&!Wl(a)&&!Array.isArray(a))return l;if(Array.isArray(l))for(var o=0;o<l.length;o++)a[o]=vf(a[o],l[o]);else if(Wl(l))for(var o in l)a[o]=vf(a[o],l[o]);return a}function Bf(a,l){Object.defineProperty(a,"toString",{value:l})}function ar(a){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(l.length>0?" Args: ".concat(l.join(", ")):""))}var Px=(function(){function a(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l}return a.prototype.indexOfGroup=function(l){for(var u=0,o=0;o<l;o++)u+=this.groupSizes[o];return u},a.prototype.insertRules=function(l,u){if(l>=this.groupSizes.length){for(var o=this.groupSizes,c=o.length,f=c;l>=f;)if((f<<=1)<0)throw ar(16,"".concat(l));this.groupSizes=new Uint32Array(f),this.groupSizes.set(o),this.length=f;for(var p=c;p<f;p++)this.groupSizes[p]=0}for(var y=this.indexOfGroup(l+1),v=(p=0,u.length);p<v;p++)this.tag.insertRule(y,u[p])&&(this.groupSizes[l]++,y++)},a.prototype.clearGroup=function(l){if(l<this.length){var u=this.groupSizes[l],o=this.indexOfGroup(l),c=o+u;this.groupSizes[l]=0;for(var f=o;f<c;f++)this.tag.deleteRule(o)}},a.prototype.getGroup=function(l){var u="";if(l>=this.length||this.groupSizes[l]===0)return u;for(var o=this.groupSizes[l],c=this.indexOfGroup(l),f=c+o,p=c;p<f;p++)u+="".concat(this.tag.getRule(p)).concat(Nf);return u},a})(),Ho=new Map,Vo=new Map,$o=1,Co=function(a){if(Ho.has(a))return Ho.get(a);for(;Vo.has($o);)$o++;var l=$o++;return Ho.set(a,l),Vo.set(l,a),l},Ix=function(a,l){$o=l+1,Ho.set(a,l),Vo.set(l,a)},e5="style[".concat(Ni,"][").concat(Im,'="').concat(au,'"]'),t5=new RegExp("^".concat(Ni,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),n5=function(a,l,u){for(var o,c=u.split(","),f=0,p=c.length;f<p;f++)(o=c[f])&&a.registerName(l,o)},a5=function(a,l){for(var u,o=((u=l.textContent)!==null&&u!==void 0?u:"").split(Nf),c=[],f=0,p=o.length;f<p;f++){var y=o[f].trim();if(y){var v=y.match(t5);if(v){var m=0|parseInt(v[1],10),x=v[2];m!==0&&(Ix(x,m),n5(a,x,v[3]),a.getTag().insertRules(m,c)),c.length=0}else c.push(y)}}},b1=function(a){for(var l=document.querySelectorAll(e5),u=0,o=l.length;u<o;u++){var c=l[u];c&&c.getAttribute(Ni)!==Pm&&(a5(a,c),c.parentNode&&c.parentNode.removeChild(c))}};function i5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ug=function(a){var l=document.head,u=a||l,o=document.createElement("style"),c=(function(y){var v=Array.from(y.querySelectorAll("style[".concat(Ni,"]")));return v[v.length-1]})(u),f=c!==void 0?c.nextSibling:null;o.setAttribute(Ni,Pm),o.setAttribute(Im,au);var p=i5();return p&&o.setAttribute("nonce",p),u.insertBefore(o,f),o},l5=(function(){function a(l){this.element=ug(l),this.element.appendChild(document.createTextNode("")),this.sheet=(function(u){if(u.sheet)return u.sheet;for(var o=document.styleSheets,c=0,f=o.length;c<f;c++){var p=o[c];if(p.ownerNode===u)return p}throw ar(17)})(this.element),this.length=0}return a.prototype.insertRule=function(l,u){try{return this.sheet.insertRule(u,l),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},a.prototype.getRule=function(l){var u=this.sheet.cssRules[l];return u&&u.cssText?u.cssText:""},a})(),r5=(function(){function a(l){this.element=ug(l),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(l,u){if(l<=this.length&&l>=0){var o=document.createTextNode(u);return this.element.insertBefore(o,this.nodes[l]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},a.prototype.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},a})(),o5=(function(){function a(l){this.rules=[],this.length=0}return a.prototype.insertRule=function(l,u){return l<=this.length&&(this.rules.splice(l,0,u),this.length++,!0)},a.prototype.deleteRule=function(l){this.rules.splice(l,1),this.length--},a.prototype.getRule=function(l){return l<this.length?this.rules[l]:""},a})(),x1=Go,u5={isServer:!Go,useCSSOMInjection:!Ux},Qo=(function(){function a(l,u,o){l===void 0&&(l=ki),u===void 0&&(u={});var c=this;this.options=ft(ft({},u5),l),this.gs=u,this.names=new Map(o),this.server=!!l.isServer,!this.server&&Go&&x1&&(x1=!1,b1(this)),Bf(this,function(){return(function(f){for(var p=f.getTag(),y=p.length,v="",m=function(S){var w=(function(K){return Vo.get(K)})(S);if(w===void 0)return"continue";var A=f.names.get(w),R=p.getGroup(S);if(A===void 0||!A.size||R.length===0)return"continue";var Y="".concat(Ni,".g").concat(S,'[id="').concat(w,'"]'),L="";A!==void 0&&A.forEach(function(K){K.length>0&&(L+="".concat(K,","))}),v+="".concat(R).concat(Y,'{content:"').concat(L,'"}').concat(Nf)},x=0;x<y;x++)m(x);return v})(c)})}return a.registerId=function(l){return Co(l)},a.prototype.rehydrate=function(){!this.server&&Go&&b1(this)},a.prototype.reconstructWithOptions=function(l,u){return u===void 0&&(u=!0),new a(ft(ft({},this.options),l),this.gs,u&&this.names||void 0)},a.prototype.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(l=(function(u){var o=u.useCSSOMInjection,c=u.target;return u.isServer?new o5(c):o?new l5(c):new r5(c)})(this.options),new Px(l)));var l},a.prototype.hasNameForId=function(l,u){return this.names.has(l)&&this.names.get(l).has(u)},a.prototype.registerName=function(l,u){if(Co(l),this.names.has(l))this.names.get(l).add(u);else{var o=new Set;o.add(u),this.names.set(l,o)}},a.prototype.insertRules=function(l,u,o){this.registerName(l,u),this.getTag().insertRules(Co(l),o)},a.prototype.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},a.prototype.clearRules=function(l){this.getTag().clearGroup(Co(l)),this.clearNames(l)},a.prototype.clearTag=function(){this.tag=void 0},a})(),s5=/&/g,c5=/^\s*\/\/.*$/gm;function sg(a,l){return a.map(function(u){return u.type==="rule"&&(u.value="".concat(l," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(l," ")),u.props=u.props.map(function(o){return"".concat(l," ").concat(o)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=sg(u.children,l)),u})}function f5(a){var l,u,o,c=ki,f=c.options,p=f===void 0?ki:f,y=c.plugins,v=y===void 0?iu:y,m=function(w,A,R){return R.startsWith(u)&&R.endsWith(u)&&R.replaceAll(u,"").length>0?".".concat(l):w},x=v.slice();x.push(function(w){w.type===Io&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(s5,u).replace(o,m))}),p.prefix&&x.push(Lx),x.push(Dx);var S=function(w,A,R,Y){A===void 0&&(A=""),R===void 0&&(R=""),Y===void 0&&(Y="&"),l=Y,u=A,o=new RegExp("\\".concat(u,"\\b"),"g");var L=w.replace(c5,""),K=Mx(R||A?"".concat(R," ").concat(A," { ").concat(L," }"):L);p.namespace&&(K=sg(K,p.namespace));var _=[];return Yo(K,Nx(x.concat(kx(function(q){return _.push(q)})))),_};return S.hash=v.length?v.reduce(function(w,A){return A.name||ar(15),zi(w,A.name)},ng).toString():"",S}var d5=new Qo,yf=f5(),cg=qe.createContext({shouldForwardProp:void 0,styleSheet:d5,stylis:yf});cg.Consumer;qe.createContext(void 0);function bf(){return b.useContext(cg)}var fg=(function(){function a(l,u){var o=this;this.inject=function(c,f){f===void 0&&(f=yf);var p=o.name+f.hash;c.hasNameForId(o.id,p)||c.insertRules(o.id,p,f(o.rules,p,"@keyframes"))},this.name=l,this.id="sc-keyframes-".concat(l),this.rules=u,Bf(this,function(){throw ar(12,String(o.name))})}return a.prototype.getName=function(l){return l===void 0&&(l=yf),this.name+l.hash},a})(),h5=function(a){return a>="A"&&a<="Z"};function S1(a){for(var l="",u=0;u<a.length;u++){var o=a[u];if(u===1&&o==="-"&&a[0]==="-")return a;h5(o)?l+="-"+o.toLowerCase():l+=o}return l.startsWith("ms-")?"-"+l:l}var dg=function(a){return a==null||a===!1||a===""},hg=function(a){var l,u,o=[];for(var c in a){var f=a[c];a.hasOwnProperty(c)&&!dg(f)&&(Array.isArray(f)&&f.isCss||Li(f)?o.push("".concat(S1(c),":"),f,";"):Wl(f)?o.push.apply(o,Mi(Mi(["".concat(c," {")],hg(f),!1),["}"],!1)):o.push("".concat(S1(c),": ").concat((l=c,(u=f)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||l in Bx||l.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return o};function da(a,l,u,o){if(dg(a))return[];if(Lf(a))return[".".concat(a.styledComponentId)];if(Li(a)){if(!Li(f=a)||f.prototype&&f.prototype.isReactComponent||!l)return[a];var c=a(l);return da(c,l,u,o)}var f;return a instanceof fg?u?(a.inject(u,o),[a.getName(o)]):[a]:Wl(a)?hg(a):Array.isArray(a)?Array.prototype.concat.apply(iu,a.map(function(p){return da(p,l,u,o)})):[a.toString()]}function pg(a){for(var l=0;l<a.length;l+=1){var u=a[l];if(Li(u)&&!Lf(u))return!1}return!0}var p5=ag(au),m5=(function(){function a(l,u,o){this.rules=l,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&pg(l),this.componentId=u,this.baseHash=zi(p5,u),this.baseStyle=o,Qo.registerId(u)}return a.prototype.generateAndInjectStyles=function(l,u,o){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(l,u,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))c=La(c,this.staticRulesId);else{var f=Xo(da(this.rules,l,u,o)),p=gf(zi(this.baseHash,f)>>>0);if(!u.hasNameForId(this.componentId,p)){var y=o(f,".".concat(p),void 0,this.componentId);u.insertRules(this.componentId,p,y)}c=La(c,p),this.staticRulesId=p}else{for(var v=zi(this.baseHash,o.hash),m="",x=0;x<this.rules.length;x++){var S=this.rules[x];if(typeof S=="string")m+=S;else if(S){var w=Xo(da(S,l,u,o));v=zi(v,w+x),m+=w}}if(m){var A=gf(v>>>0);u.hasNameForId(this.componentId,A)||u.insertRules(this.componentId,A,o(m,".".concat(A),void 0,this.componentId)),c=La(c,A)}}return c},a})(),Uf=qe.createContext(void 0);Uf.Consumer;var Lc={};function g5(a,l,u){var o=Lf(a),c=a,f=!kc(a),p=l.attrs,y=p===void 0?iu:p,v=l.componentId,m=v===void 0?(function(X,k){var M=typeof X!="string"?"sc":p1(X);Lc[M]=(Lc[M]||0)+1;var F="".concat(M,"-").concat(kf(au+M+Lc[M]));return k?"".concat(k,"-").concat(F):F})(l.displayName,l.parentComponentId):v,x=l.displayName,S=x===void 0?(function(X){return kc(X)?"styled.".concat(X):"Styled(".concat(Gx(X),")")})(a):x,w=l.displayName&&l.componentId?"".concat(p1(l.displayName),"-").concat(l.componentId):l.componentId||m,A=o&&c.attrs?c.attrs.concat(y).filter(Boolean):y,R=l.shouldForwardProp;if(o&&c.shouldForwardProp){var Y=c.shouldForwardProp;if(l.shouldForwardProp){var L=l.shouldForwardProp;R=function(X,k){return Y(X,k)&&L(X,k)}}else R=Y}var K=new m5(u,w,o?c.componentStyle:void 0);function _(X,k){return(function(M,F,B){var Z=M.attrs,le=M.componentStyle,J=M.defaultProps,N=M.foldedComponentIds,te=M.styledComponentId,ne=M.target,j=qe.useContext(Uf),z=bf(),$=M.shouldForwardProp||z.shouldForwardProp,W=eg(F,j,J)||ki,re=(function(se,he,ye){for(var Le,Ce=ft(ft({},he),{className:void 0,theme:ye}),Et=0;Et<se.length;Et+=1){var Kt=Li(Le=se[Et])?Le(Ce):Le;for(var ht in Kt)Ce[ht]=ht==="className"?La(Ce[ht],Kt[ht]):ht==="style"?ft(ft({},Ce[ht]),Kt[ht]):Kt[ht]}return he.className&&(Ce.className=La(Ce.className,he.className)),Ce})(Z,F,W),ce=re.as||ne,T={};for(var V in re)re[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&re.theme===W||(V==="forwardedAs"?T.as=re.forwardedAs:$&&!$(V,ce)||(T[V]=re[V]));var ie=(function(se,he){var ye=bf(),Le=se.generateAndInjectStyles(he,ye.styleSheet,ye.stylis);return Le})(le,re),ae=La(N,te);return ie&&(ae+=" "+ie),re.className&&(ae+=" "+re.className),T[kc(ce)&&!tg.has(ce)?"class":"className"]=ae,B&&(T.ref=B),b.createElement(ce,T)})(q,X,k)}_.displayName=S;var q=qe.forwardRef(_);return q.attrs=A,q.componentStyle=K,q.displayName=S,q.shouldForwardProp=R,q.foldedComponentIds=o?La(c.foldedComponentIds,c.styledComponentId):"",q.styledComponentId=w,q.target=o?c.target:a,Object.defineProperty(q,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(X){this._foldedDefaultProps=o?(function(k){for(var M=[],F=1;F<arguments.length;F++)M[F-1]=arguments[F];for(var B=0,Z=M;B<Z.length;B++)vf(k,Z[B],!0);return k})({},c.defaultProps,X):X}}),Bf(q,function(){return".".concat(q.styledComponentId)}),f&&og(q,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),q}function w1(a,l){for(var u=[a[0]],o=0,c=l.length;o<c;o+=1)u.push(l[o],a[o+1]);return u}var E1=function(a){return Object.assign(a,{isCss:!0})};function ha(a){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];if(Li(a)||Wl(a))return E1(da(w1(iu,Mi([a],l,!0))));var o=a;return l.length===0&&o.length===1&&typeof o[0]=="string"?da(o):E1(da(w1(o,l)))}function xf(a,l,u){if(u===void 0&&(u=ki),!l)throw ar(1,l);var o=function(c){for(var f=[],p=1;p<arguments.length;p++)f[p-1]=arguments[p];return a(l,u,ha.apply(void 0,Mi([c],f,!1)))};return o.attrs=function(c){return xf(a,l,ft(ft({},u),{attrs:Array.prototype.concat(u.attrs,c).filter(Boolean)}))},o.withConfig=function(c){return xf(a,l,ft(ft({},u),c))},o}var mg=function(a){return xf(g5,a)},E=mg;tg.forEach(function(a){E[a]=mg(a)});var v5=(function(){function a(l,u){this.rules=l,this.componentId=u,this.isStatic=pg(l),Qo.registerId(this.componentId+1)}return a.prototype.createStyles=function(l,u,o,c){var f=c(Xo(da(this.rules,u,o,c)),""),p=this.componentId+l;o.insertRules(p,p,f)},a.prototype.removeStyles=function(l,u){u.clearRules(this.componentId+l)},a.prototype.renderStyles=function(l,u,o,c){l>2&&Qo.registerId(this.componentId+l),this.removeStyles(l,o),this.createStyles(l,u,o,c)},a})();function y5(a){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];var o=ha.apply(void 0,Mi([a],l,!1)),c="sc-global-".concat(kf(JSON.stringify(o))),f=new v5(o,c),p=function(v){var m=bf(),x=qe.useContext(Uf),S=qe.useRef(m.styleSheet.allocateGSInstance(c)).current;return m.styleSheet.server&&y(S,v,m.styleSheet,x,m.stylis),qe.useLayoutEffect(function(){if(!m.styleSheet.server)return y(S,v,m.styleSheet,x,m.stylis),function(){return f.removeStyles(S,m.styleSheet)}},[S,v,m.styleSheet,x,m.stylis]),null};function y(v,m,x,S,w){if(f.isStatic)f.renderStyles(v,Hx,x,w);else{var A=ft(ft({},m),{theme:eg(m,S,p.defaultProps)});f.renderStyles(v,A,x,w)}}return qe.memo(p)}function cn(a){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];var o=Xo(ha.apply(void 0,Mi([a],l,!1))),c=kf(o);return new fg(c,o)}var gg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},C1=qe.createContext&&qe.createContext(gg),b5=["attr","size","title"];function x5(a,l){if(a==null)return{};var u=S5(a,l),o,c;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)o=f[c],!(l.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(a,o)&&(u[o]=a[o])}return u}function S5(a,l){if(a==null)return{};var u={};for(var o in a)if(Object.prototype.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}function Zo(){return Zo=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},Zo.apply(this,arguments)}function T1(a,l){var u=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);l&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable})),u.push.apply(u,o)}return u}function Ko(a){for(var l=1;l<arguments.length;l++){var u=arguments[l]!=null?arguments[l]:{};l%2?T1(Object(u),!0).forEach(function(o){w5(a,o,u[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(u)):T1(Object(u)).forEach(function(o){Object.defineProperty(a,o,Object.getOwnPropertyDescriptor(u,o))})}return a}function w5(a,l,u){return l=E5(l),l in a?Object.defineProperty(a,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[l]=u,a}function E5(a){var l=C5(a,"string");return typeof l=="symbol"?l:l+""}function C5(a,l){if(typeof a!="object"||!a)return a;var u=a[Symbol.toPrimitive];if(u!==void 0){var o=u.call(a,l);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(a)}function vg(a){return a&&a.map((l,u)=>qe.createElement(l.tag,Ko({key:u},l.attr),vg(l.child)))}function Re(a){return l=>qe.createElement(T5,Zo({attr:Ko({},a.attr)},l),vg(a.child))}function T5(a){var l=u=>{var{attr:o,size:c,title:f}=a,p=x5(a,b5),y=c||u.size||"1em",v;return u.className&&(v=u.className),a.className&&(v=(v?v+" ":"")+a.className),qe.createElement("svg",Zo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,o,p,{className:v,style:Ko(Ko({color:a.color||u.color},u.style),a.style),height:y,width:y,xmlns:"http://www.w3.org/2000/svg"}),f&&qe.createElement("title",null,f),a.children)};return C1!==void 0?qe.createElement(C1.Consumer,null,u=>l(u)):l(gg)}function yg(a){return Re({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"},child:[]}]})(a)}function j5(a){return Re({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311h-.3v428h472.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32z"},child:[]}]})(a)}function bg(a){return Re({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"},child:[]}]})(a)}function R5(a){return Re({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"},child:[]}]})(a)}function Hf(a){return Re({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"},child:[]}]})(a)}function $f(a){return Re({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"},child:[]}]})(a)}function xg(a){return Re({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"},child:[]}]})(a)}function O5(a){return Re({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"},child:[]}]})(a)}function z5(a){return Re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(a)}function Sg(a){return Re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(a)}function _5(a){return Re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(a)}function wg(a){return Re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(a)}function M5(a){return Re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(a)}function Eg(a){return Re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(a)}function A5(a){return Re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(a)}function Cg(a){return Re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(a)}function j1(a){return Re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}const D5="/instalearn/assets/vedioClip1-BQ1quwNm.mp4",N5="/instalearn/assets/test-BrOnAr5c.png",k5="/instalearn/assets/teacherProfilePic-DPrjIuTX.png",L5="/instalearn/assets/Slide1-CugONfFy.png",B5="/instalearn/assets/Slide2-D-tpOApl.png",U5="/instalearn/assets/Slide3-B6C07YuO.png",H5="/instalearn/assets/Slide4-BbthJNiF.png",$5="/instalearn/assets/Slide5-BsOulZPi.png",q5="/instalearn/assets/Slide6-8dQDHdn3.png",Y5="/instalearn/assets/Slide7-C6b8m5yZ.png",G5="/instalearn/assets/Slide8-DZBpeM0l.png",X5="/instalearn/assets/Slide9-CRnJTJ7g.png",To={},V5={videoClip1:D5},Q5={test:N5},Tg={teacherProfilePic:k5},zn={Slide1:L5,Slide2:B5,Slide3:U5,Slide4:H5,Slide5:$5,Slide6:q5,Slide7:Y5,Slide8:G5,Slide9:X5},Z5=E.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
`,K5=E.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,J5=E.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,F5=E.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,W5=E.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,P5=E.span`
  font-weight: 600;
  color: #0f172a;
`,I5=E.span`
  font-size: 12px;
  color: #64748b;
`,e3=E.button`
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
`,t3=E.div`
  position: relative;
  aspect-ratio: 1 / 1; /* Instagram-like square */
  background: linear-gradient(135deg, #eef2ff, #e0f7fa);
`,n3=E.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,a3=E.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px 6px 12px;
`,i3=E.div`
  display: flex;
  gap: 12px;
`,jo=E.button`
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
`,l3=E.div`
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
`,r3=E.div`
  display: flex;
`,o3=E.img`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
  margin-left: -6px;
  &:first-child { margin-left: 0; }
`,u3=E.div`
  padding: 2px 12px 14px 12px;
`,s3=E.p`
  margin: 6px 0 6px;
  font-size: 14px;
  line-height: 1.5;
  color: #0f172a;
`,c3=E.time`
  font-size: 12px;
  color: #64748b;
`;function f3({username:a="Siddharth Sir",userSubline:l="SST Teacher",avatarSrc:u=Tg.teacherProfilePic,title:o="Sense of Collective Identity - Overview",description:c="Understanding how shared culture, values, and history build national unity and belonging.",imgSrc:f="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",likedDefault:p=!1,savedDefault:y=!1,likeCountDefault:v=12,commenterAvatars:m=["https://i.pravatar.cc/100?img=12","https://i.pravatar.cc/100?img=32","https://i.pravatar.cc/100?img=8"],postUrl:x=typeof window<"u"?window.location.href:"",onLikeChange:S,onBookmarkChange:w,onShare:A}){const[R,Y]=b.useState(p),[L,K]=b.useState(y),[_,q]=b.useState(v),X=R?"Unlike":"Like",k=L?"Remove bookmark":"Bookmark",M=()=>{const le=!R;Y(le),q(J=>le?J+1:Math.max(0,J-1)),S&&S(le)},F=()=>{const le=!L;K(le),w&&w(le)},B=b.useMemo(()=>({title:o,text:`${a} on Infographics — ${o}`,url:x}),[o,a,x]),Z=async()=>{try{navigator.share?await navigator.share(B):navigator.clipboard&&(await navigator.clipboard.writeText(B.url),alert("Link copied to clipboard")),A&&A(B)}catch(le){console.error("Share failed:",le)}};return h.jsxs(Z5,{role:"article","aria-label":`${o} instagram-style post`,children:[h.jsxs(K5,{children:[h.jsxs(J5,{children:[h.jsx(F5,{src:u,alt:`${a} avatar`}),h.jsxs(W5,{children:[h.jsx(P5,{children:a}),h.jsx(I5,{children:l})]})]}),h.jsx(e3,{"aria-label":"Post menu",title:"More",children:h.jsx(O5,{size:18})})]}),h.jsx(t3,{children:h.jsx(n3,{src:f,alt:o})}),h.jsxs(a3,{children:[h.jsxs(i3,{children:[h.jsx(jo,{onClick:M,"aria-label":X,title:X,children:R?h.jsx(yg,{size:22}):h.jsx(bg,{size:22})}),h.jsx(jo,{"aria-label":"Comment",title:"Comment",children:h.jsx(xg,{size:20})}),h.jsx(jo,{onClick:Z,"aria-label":"Share",title:"Share",children:h.jsx(Eg,{size:20})})]}),h.jsx(jo,{onClick:F,"aria-label":k,title:k,children:L?h.jsx(Hf,{size:20}):h.jsx($f,{size:20})})]}),h.jsxs(l3,{"aria-label":`${_} likes`,children:[h.jsx(r3,{children:m.slice(0,3).map((le,J)=>h.jsx(o3,{src:le,alt:"reaction avatar"},J))}),h.jsxs("span",{children:[_," likes"]})]}),h.jsxs(u3,{children:[h.jsxs(s3,{children:[h.jsx("strong",{children:a})," ",c]}),h.jsx(c3,{dateTime:new Date().toISOString(),children:"Just now"})]})]})}var Bc={},Hl={},Ro={},Oo={},Uc={exports:{}},Hc,R1;function d3(){if(R1)return Hc;R1=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Hc=a,Hc}var $c,O1;function h3(){if(O1)return $c;O1=1;var a=d3();function l(){}function u(){}return u.resetWarningCache=l,$c=function(){function o(p,y,v,m,x,S){if(S!==a){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}o.isRequired=o;function c(){return o}var f={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:c,element:o,elementType:o,instanceOf:c,node:o,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:u,resetWarningCache:l};return f.PropTypes=f,f},$c}var z1;function jg(){return z1||(z1=1,Uc.exports=h3()()),Uc.exports}var _1;function p3(){return _1||(_1=1,(function(a){(function(l,u){u(a,pa(),jg())})(Oo,function(l,u,o){Object.defineProperty(l,"__esModule",{value:!0}),l.setHasSupportToCaptureOption=R;var c=p(u),f=p(o);function p(_){return _&&_.__esModule?_:{default:_}}var y=Object.assign||function(_){for(var q=1;q<arguments.length;q++){var X=arguments[q];for(var k in X)Object.prototype.hasOwnProperty.call(X,k)&&(_[k]=X[k])}return _};function v(_,q){var X={};for(var k in _)q.indexOf(k)>=0||Object.prototype.hasOwnProperty.call(_,k)&&(X[k]=_[k]);return X}function m(_,q){if(!(_ instanceof q))throw new TypeError("Cannot call a class as a function")}var x=(function(){function _(q,X){for(var k=0;k<X.length;k++){var M=X[k];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(q,M.key,M)}}return function(q,X,k){return X&&_(q.prototype,X),k&&_(q,k),q}})();function S(_,q){if(!_)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return q&&(typeof q=="object"||typeof q=="function")?q:_}function w(_,q){if(typeof q!="function"&&q!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof q);_.prototype=Object.create(q&&q.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),q&&(Object.setPrototypeOf?Object.setPrototypeOf(_,q):_.__proto__=q)}var A=!1;function R(_){A=_}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){R(!0)}}))}catch{}function Y(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return A?_:_.capture}function L(_){if("touches"in _){var q=_.touches[0],X=q.pageX,k=q.pageY;return{x:X,y:k}}var M=_.screenX,F=_.screenY;return{x:M,y:F}}var K=(function(_){w(q,_);function q(){var X;m(this,q);for(var k=arguments.length,M=Array(k),F=0;F<k;F++)M[F]=arguments[F];var B=S(this,(X=q.__proto__||Object.getPrototypeOf(q)).call.apply(X,[this].concat(M)));return B._handleSwipeStart=B._handleSwipeStart.bind(B),B._handleSwipeMove=B._handleSwipeMove.bind(B),B._handleSwipeEnd=B._handleSwipeEnd.bind(B),B._onMouseDown=B._onMouseDown.bind(B),B._onMouseMove=B._onMouseMove.bind(B),B._onMouseUp=B._onMouseUp.bind(B),B._setSwiperRef=B._setSwiperRef.bind(B),B}return x(q,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,Y({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,Y({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(k){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(k))}},{key:"_onMouseMove",value:function(k){this.mouseDown&&this._handleSwipeMove(k)}},{key:"_onMouseUp",value:function(k){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(k)}},{key:"_handleSwipeStart",value:function(k){var M=L(k),F=M.x,B=M.y;this.moveStart={x:F,y:B},this.props.onSwipeStart(k)}},{key:"_handleSwipeMove",value:function(k){if(this.moveStart){var M=L(k),F=M.x,B=M.y,Z=F-this.moveStart.x,le=B-this.moveStart.y;this.moving=!0;var J=this.props.onSwipeMove({x:Z,y:le},k);J&&k.cancelable&&k.preventDefault(),this.movePosition={deltaX:Z,deltaY:le}}}},{key:"_handleSwipeEnd",value:function(k){this.props.onSwipeEnd(k);var M=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-M?this.props.onSwipeLeft(1,k):this.movePosition.deltaX>M&&this.props.onSwipeRight(1,k),this.movePosition.deltaY<-M?this.props.onSwipeUp(1,k):this.movePosition.deltaY>M&&this.props.onSwipeDown(1,k)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(k){this.swiper=k,this.props.innerRef(k)}},{key:"render",value:function(){var k=this.props;k.tagName;var M=k.className,F=k.style,B=k.children;k.allowMouseEvents,k.onSwipeUp,k.onSwipeDown,k.onSwipeLeft,k.onSwipeRight,k.onSwipeStart,k.onSwipeMove,k.onSwipeEnd,k.innerRef,k.tolerance;var Z=v(k,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return c.default.createElement(this.props.tagName,y({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:M,style:F},Z),B)}}]),q})(u.Component);K.displayName="ReactSwipe",K.propTypes={tagName:f.default.string,className:f.default.string,style:f.default.object,children:f.default.node,allowMouseEvents:f.default.bool,onSwipeUp:f.default.func,onSwipeDown:f.default.func,onSwipeLeft:f.default.func,onSwipeRight:f.default.func,onSwipeStart:f.default.func,onSwipeMove:f.default.func,onSwipeEnd:f.default.func,innerRef:f.default.func,tolerance:f.default.number.isRequired},K.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},l.default=K})})(Oo)),Oo}var M1;function Rg(){return M1||(M1=1,(function(a){(function(l,u){u(a,p3())})(Ro,function(l,u){Object.defineProperty(l,"__esModule",{value:!0});var o=c(u);function c(f){return f&&f.__esModule?f:{default:f}}l.default=o.default})})(Ro)),Ro}var $l={},qc={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var A1;function Og(){return A1||(A1=1,(function(a){(function(){var l={}.hasOwnProperty;function u(){for(var f="",p=0;p<arguments.length;p++){var y=arguments[p];y&&(f=c(f,o(y)))}return f}function o(f){if(typeof f=="string"||typeof f=="number")return f;if(typeof f!="object")return"";if(Array.isArray(f))return u.apply(null,f);if(f.toString!==Object.prototype.toString&&!f.toString.toString().includes("[native code]"))return f.toString();var p="";for(var y in f)l.call(f,y)&&f[y]&&(p=c(p,y));return p}function c(f,p){return p?f?f+" "+p:f+p:f}a.exports?(u.default=u,a.exports=u):window.classNames=u})()})(qc)),qc.exports}var D1;function zg(){if(D1)return $l;D1=1,Object.defineProperty($l,"__esModule",{value:!0}),$l.default=void 0;var a=l(Og());function l(c){return c&&c.__esModule?c:{default:c}}function u(c,f,p){return f in c?Object.defineProperty(c,f,{value:p,enumerable:!0,configurable:!0,writable:!0}):c[f]=p,c}var o={ROOT:function(f){return(0,a.default)(u({"carousel-root":!0},f||"",!!f))},CAROUSEL:function(f){return(0,a.default)({carousel:!0,"carousel-slider":f})},WRAPPER:function(f,p){return(0,a.default)({"thumbs-wrapper":!f,"slider-wrapper":f,"axis-horizontal":p==="horizontal","axis-vertical":p!=="horizontal"})},SLIDER:function(f,p){return(0,a.default)({thumbs:!f,slider:f,animated:!p})},ITEM:function(f,p,y){return(0,a.default)({thumb:!f,slide:f,selected:p,previous:y})},ARROW_PREV:function(f){return(0,a.default)({"control-arrow control-prev":!0,"control-disabled":f})},ARROW_NEXT:function(f){return(0,a.default)({"control-arrow control-next":!0,"control-disabled":f})},DOT:function(f){return(0,a.default)({dot:!0,selected:f})}};return $l.default=o,$l}var ql={},Yl={},N1;function m3(){if(N1)return Yl;N1=1,Object.defineProperty(Yl,"__esModule",{value:!0}),Yl.outerWidth=void 0;var a=function(u){var o=u.offsetWidth,c=getComputedStyle(u);return o+=parseInt(c.marginLeft)+parseInt(c.marginRight),o};return Yl.outerWidth=a,Yl}var Gl={},k1;function qf(){if(k1)return Gl;k1=1,Object.defineProperty(Gl,"__esModule",{value:!0}),Gl.default=void 0;var a=function(u,o,c){var f=u===0?u:u+o,p=c==="horizontal"?[f,0,0]:[0,f,0],y="translate3d",v="("+p.join(",")+")";return y+v};return Gl.default=a,Gl}var Xl={},L1;function _g(){if(L1)return Xl;L1=1,Object.defineProperty(Xl,"__esModule",{value:!0}),Xl.default=void 0;var a=function(){return window};return Xl.default=a,Xl}var B1;function Mg(){if(B1)return ql;B1=1,Object.defineProperty(ql,"__esModule",{value:!0}),ql.default=void 0;var a=v(pa()),l=p(zg()),u=m3(),o=p(qf()),c=p(Rg()),f=p(_g());function p(B){return B&&B.__esModule?B:{default:B}}function y(){if(typeof WeakMap!="function")return null;var B=new WeakMap;return y=function(){return B},B}function v(B){if(B&&B.__esModule)return B;if(B===null||m(B)!=="object"&&typeof B!="function")return{default:B};var Z=y();if(Z&&Z.has(B))return Z.get(B);var le={},J=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in B)if(Object.prototype.hasOwnProperty.call(B,N)){var te=J?Object.getOwnPropertyDescriptor(B,N):null;te&&(te.get||te.set)?Object.defineProperty(le,N,te):le[N]=B[N]}return le.default=B,Z&&Z.set(B,le),le}function m(B){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?m=function(le){return typeof le}:m=function(le){return le&&typeof Symbol=="function"&&le.constructor===Symbol&&le!==Symbol.prototype?"symbol":typeof le},m(B)}function x(){return x=Object.assign||function(B){for(var Z=1;Z<arguments.length;Z++){var le=arguments[Z];for(var J in le)Object.prototype.hasOwnProperty.call(le,J)&&(B[J]=le[J])}return B},x.apply(this,arguments)}function S(B,Z){if(!(B instanceof Z))throw new TypeError("Cannot call a class as a function")}function w(B,Z){for(var le=0;le<Z.length;le++){var J=Z[le];J.enumerable=J.enumerable||!1,J.configurable=!0,"value"in J&&(J.writable=!0),Object.defineProperty(B,J.key,J)}}function A(B,Z,le){return Z&&w(B.prototype,Z),B}function R(B,Z){if(typeof Z!="function"&&Z!==null)throw new TypeError("Super expression must either be null or a function");B.prototype=Object.create(Z&&Z.prototype,{constructor:{value:B,writable:!0,configurable:!0}}),Z&&Y(B,Z)}function Y(B,Z){return Y=Object.setPrototypeOf||function(J,N){return J.__proto__=N,J},Y(B,Z)}function L(B){var Z=q();return function(){var J=X(B),N;if(Z){var te=X(this).constructor;N=Reflect.construct(J,arguments,te)}else N=J.apply(this,arguments);return K(this,N)}}function K(B,Z){return Z&&(m(Z)==="object"||typeof Z=="function")?Z:_(B)}function _(B){if(B===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return B}function q(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function X(B){return X=Object.setPrototypeOf?Object.getPrototypeOf:function(le){return le.__proto__||Object.getPrototypeOf(le)},X(B)}function k(B,Z,le){return Z in B?Object.defineProperty(B,Z,{value:le,enumerable:!0,configurable:!0,writable:!0}):B[Z]=le,B}var M=function(Z){return Z.hasOwnProperty("key")},F=(function(B){R(le,B);var Z=L(le);function le(J){var N;return S(this,le),N=Z.call(this,J),k(_(N),"itemsWrapperRef",void 0),k(_(N),"itemsListRef",void 0),k(_(N),"thumbsRef",void 0),k(_(N),"setItemsWrapperRef",function(te){N.itemsWrapperRef=te}),k(_(N),"setItemsListRef",function(te){N.itemsListRef=te}),k(_(N),"setThumbsRef",function(te,ne){N.thumbsRef||(N.thumbsRef=[]),N.thumbsRef[ne]=te}),k(_(N),"updateSizes",function(){if(!(!N.props.children||!N.itemsWrapperRef||!N.thumbsRef)){var te=a.Children.count(N.props.children),ne=N.itemsWrapperRef.clientWidth,j=N.props.thumbWidth?N.props.thumbWidth:(0,u.outerWidth)(N.thumbsRef[0]),z=Math.floor(ne/j),$=z<te,W=$?te-z:0;N.setState(function(re,ce){return{itemSize:j,visibleItems:z,firstItem:$?N.getFirstItem(ce.selectedItem):0,lastPosition:W,showArrows:$}})}}),k(_(N),"handleClickItem",function(te,ne,j){if(!M(j)||j.key==="Enter"){var z=N.props.onSelectItem;typeof z=="function"&&z(te,ne)}}),k(_(N),"onSwipeStart",function(){N.setState({swiping:!0})}),k(_(N),"onSwipeEnd",function(){N.setState({swiping:!1})}),k(_(N),"onSwipeMove",function(te){var ne=te.x;if(!N.state.itemSize||!N.itemsWrapperRef||!N.state.visibleItems)return!1;var j=0,z=a.Children.count(N.props.children),$=-(N.state.firstItem*100)/N.state.visibleItems,W=Math.max(z-N.state.visibleItems,0),re=-W*100/N.state.visibleItems;$===j&&ne>0&&(ne=0),$===re&&ne<0&&(ne=0);var ce=N.itemsWrapperRef.clientWidth,T=$+100/(ce/ne);return N.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(V){N.itemsListRef.style[V]=(0,o.default)(T,"%",N.props.axis)}),!0}),k(_(N),"slideRight",function(te){N.moveTo(N.state.firstItem-(typeof te=="number"?te:1))}),k(_(N),"slideLeft",function(te){N.moveTo(N.state.firstItem+(typeof te=="number"?te:1))}),k(_(N),"moveTo",function(te){te=te<0?0:te,te=te>=N.state.lastPosition?N.state.lastPosition:te,N.setState({firstItem:te})}),N.state={selectedItem:J.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},N}return A(le,[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(N){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==N.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,f.default)().addEventListener("resize",this.updateSizes),(0,f.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,f.default)().removeEventListener("resize",this.updateSizes),(0,f.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(N){var te=N;return N>=this.state.lastPosition&&(te=this.state.lastPosition),N<this.state.firstItem+this.state.visibleItems&&(te=this.state.firstItem),N<this.state.firstItem&&(te=N),te}},{key:"renderItems",value:function(){var N=this;return this.props.children.map(function(te,ne){var j=l.default.ITEM(!1,ne===N.state.selectedItem),z={key:ne,ref:function(W){return N.setThumbsRef(W,ne)},className:j,onClick:N.handleClickItem.bind(N,ne,N.props.children[ne]),onKeyDown:N.handleClickItem.bind(N,ne,N.props.children[ne]),"aria-label":"".concat(N.props.labels.item," ").concat(ne+1),style:{width:N.props.thumbWidth}};return a.default.createElement("li",x({},z,{role:"button",tabIndex:0}),te)})}},{key:"render",value:function(){var N=this;if(!this.props.children)return null;var te=a.Children.count(this.props.children)>1,ne=this.state.showArrows&&this.state.firstItem>0,j=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,z={},$=-this.state.firstItem*(this.state.itemSize||0),W=(0,o.default)($,"px",this.props.axis),re=this.props.transitionTime+"ms";return z={WebkitTransform:W,MozTransform:W,MsTransform:W,OTransform:W,transform:W,msTransform:W,WebkitTransitionDuration:re,MozTransitionDuration:re,MsTransitionDuration:re,OTransitionDuration:re,transitionDuration:re,msTransitionDuration:re},a.default.createElement("div",{className:l.default.CAROUSEL(!1)},a.default.createElement("div",{className:l.default.WRAPPER(!1),ref:this.setItemsWrapperRef},a.default.createElement("button",{type:"button",className:l.default.ARROW_PREV(!ne),onClick:function(){return N.slideRight()},"aria-label":this.props.labels.leftArrow}),te?a.default.createElement(c.default,{tagName:"ul",className:l.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:z,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):a.default.createElement("ul",{className:l.default.SLIDER(!1,this.state.swiping),ref:function(T){return N.setItemsListRef(T)},style:z},this.renderItems()),a.default.createElement("button",{type:"button",className:l.default.ARROW_NEXT(!j),onClick:function(){return N.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}]),le})(a.Component);return ql.default=F,k(F,"displayName","Thumbs"),k(F,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350}),ql}var Vl={},U1;function g3(){if(U1)return Vl;U1=1,Object.defineProperty(Vl,"__esModule",{value:!0}),Vl.default=void 0;var a=function(){return document};return Vl.default=a,Vl}var Nt={},H1;function Ag(){if(H1)return Nt;H1=1,Object.defineProperty(Nt,"__esModule",{value:!0}),Nt.setPosition=Nt.getPosition=Nt.isKeyboardEvent=Nt.defaultStatusFormatter=Nt.noop=void 0;var a=pa(),l=u(qf());function u(v){return v&&v.__esModule?v:{default:v}}var o=function(){};Nt.noop=o;var c=function(m,x){return"".concat(m," of ").concat(x)};Nt.defaultStatusFormatter=c;var f=function(m){return m?m.hasOwnProperty("key"):!1};Nt.isKeyboardEvent=f;var p=function(m,x){if(x.infiniteLoop&&++m,m===0)return 0;var S=a.Children.count(x.children);if(x.centerMode&&x.axis==="horizontal"){var w=-m*x.centerSlidePercentage,A=S-1;return m&&(m!==A||x.infiniteLoop)?w+=(100-x.centerSlidePercentage)/2:m===A&&(w+=100-x.centerSlidePercentage),w}return-m*100};Nt.getPosition=p;var y=function(m,x){var S={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(w){S[w]=(0,l.default)(m,"%",x)}),S};return Nt.setPosition=y,Nt}var Pt={},$1;function v3(){if($1)return Pt;$1=1,Object.defineProperty(Pt,"__esModule",{value:!0}),Pt.fadeAnimationHandler=Pt.slideStopSwipingHandler=Pt.slideSwipeAnimationHandler=Pt.slideAnimationHandler=void 0;var a=pa(),l=o(qf()),u=Ag();function o(S){return S&&S.__esModule?S:{default:S}}function c(S,w){var A=Object.keys(S);if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(S);w&&(R=R.filter(function(Y){return Object.getOwnPropertyDescriptor(S,Y).enumerable})),A.push.apply(A,R)}return A}function f(S){for(var w=1;w<arguments.length;w++){var A=arguments[w]!=null?arguments[w]:{};w%2?c(Object(A),!0).forEach(function(R){p(S,R,A[R])}):Object.getOwnPropertyDescriptors?Object.defineProperties(S,Object.getOwnPropertyDescriptors(A)):c(Object(A)).forEach(function(R){Object.defineProperty(S,R,Object.getOwnPropertyDescriptor(A,R))})}return S}function p(S,w,A){return w in S?Object.defineProperty(S,w,{value:A,enumerable:!0,configurable:!0,writable:!0}):S[w]=A,S}var y=function(w,A){var R={},Y=A.selectedItem,L=Y,K=a.Children.count(w.children)-1,_=w.infiniteLoop&&(Y<0||Y>K);if(_)return L<0?w.centerMode&&w.centerSlidePercentage&&w.axis==="horizontal"?R.itemListStyle=(0,u.setPosition)(-(K+2)*w.centerSlidePercentage-(100-w.centerSlidePercentage)/2,w.axis):R.itemListStyle=(0,u.setPosition)(-(K+2)*100,w.axis):L>K&&(R.itemListStyle=(0,u.setPosition)(0,w.axis)),R;var q=(0,u.getPosition)(Y,w),X=(0,l.default)(q,"%",w.axis),k=w.transitionTime+"ms";return R.itemListStyle={WebkitTransform:X,msTransform:X,OTransform:X,transform:X},A.swiping||(R.itemListStyle=f(f({},R.itemListStyle),{},{WebkitTransitionDuration:k,MozTransitionDuration:k,OTransitionDuration:k,transitionDuration:k,msTransitionDuration:k})),R};Pt.slideAnimationHandler=y;var v=function(w,A,R,Y){var L={},K=A.axis==="horizontal",_=a.Children.count(A.children),q=0,X=(0,u.getPosition)(R.selectedItem,A),k=A.infiniteLoop?(0,u.getPosition)(_-1,A)-100:(0,u.getPosition)(_-1,A),M=K?w.x:w.y,F=M;X===q&&M>0&&(F=0),X===k&&M<0&&(F=0);var B=X+100/(R.itemSize/F),Z=Math.abs(M)>A.swipeScrollTolerance;return A.infiniteLoop&&Z&&(R.selectedItem===0&&B>-100?B-=_*100:R.selectedItem===_-1&&B<-_*100&&(B+=_*100)),(!A.preventMovementUntilSwipeScrollTolerance||Z||R.swipeMovementStarted)&&(R.swipeMovementStarted||Y({swipeMovementStarted:!0}),L.itemListStyle=(0,u.setPosition)(B,A.axis)),Z&&!R.cancelClick&&Y({cancelClick:!0}),L};Pt.slideSwipeAnimationHandler=v;var m=function(w,A){var R=(0,u.getPosition)(A.selectedItem,w),Y=(0,u.setPosition)(R,w.axis);return{itemListStyle:Y}};Pt.slideStopSwipingHandler=m;var x=function(w,A){var R=w.transitionTime+"ms",Y="ease-in-out",L={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:Y,msTransitionTimingFunction:Y,MozTransitionTimingFunction:Y,WebkitTransitionTimingFunction:Y,OTransitionTimingFunction:Y};return A.swiping||(L=f(f({},L),{},{WebkitTransitionDuration:R,MozTransitionDuration:R,OTransitionDuration:R,transitionDuration:R,msTransitionDuration:R})),{slideStyle:L,selectedStyle:f(f({},L),{},{opacity:1,position:"relative"}),prevStyle:f({},L)}};return Pt.fadeAnimationHandler=x,Pt}var q1;function y3(){if(q1)return Hl;q1=1,Object.defineProperty(Hl,"__esModule",{value:!0}),Hl.default=void 0;var a=x(pa()),l=v(Rg()),u=v(zg()),o=v(Mg()),c=v(g3()),f=v(_g()),p=Ag(),y=v3();function v(J){return J&&J.__esModule?J:{default:J}}function m(){if(typeof WeakMap!="function")return null;var J=new WeakMap;return m=function(){return J},J}function x(J){if(J&&J.__esModule)return J;if(J===null||S(J)!=="object"&&typeof J!="function")return{default:J};var N=m();if(N&&N.has(J))return N.get(J);var te={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var j in J)if(Object.prototype.hasOwnProperty.call(J,j)){var z=ne?Object.getOwnPropertyDescriptor(J,j):null;z&&(z.get||z.set)?Object.defineProperty(te,j,z):te[j]=J[j]}return te.default=J,N&&N.set(J,te),te}function S(J){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?S=function(te){return typeof te}:S=function(te){return te&&typeof Symbol=="function"&&te.constructor===Symbol&&te!==Symbol.prototype?"symbol":typeof te},S(J)}function w(){return w=Object.assign||function(J){for(var N=1;N<arguments.length;N++){var te=arguments[N];for(var ne in te)Object.prototype.hasOwnProperty.call(te,ne)&&(J[ne]=te[ne])}return J},w.apply(this,arguments)}function A(J,N){var te=Object.keys(J);if(Object.getOwnPropertySymbols){var ne=Object.getOwnPropertySymbols(J);N&&(ne=ne.filter(function(j){return Object.getOwnPropertyDescriptor(J,j).enumerable})),te.push.apply(te,ne)}return te}function R(J){for(var N=1;N<arguments.length;N++){var te=arguments[N]!=null?arguments[N]:{};N%2?A(Object(te),!0).forEach(function(ne){Z(J,ne,te[ne])}):Object.getOwnPropertyDescriptors?Object.defineProperties(J,Object.getOwnPropertyDescriptors(te)):A(Object(te)).forEach(function(ne){Object.defineProperty(J,ne,Object.getOwnPropertyDescriptor(te,ne))})}return J}function Y(J,N){if(!(J instanceof N))throw new TypeError("Cannot call a class as a function")}function L(J,N){for(var te=0;te<N.length;te++){var ne=N[te];ne.enumerable=ne.enumerable||!1,ne.configurable=!0,"value"in ne&&(ne.writable=!0),Object.defineProperty(J,ne.key,ne)}}function K(J,N,te){return N&&L(J.prototype,N),J}function _(J,N){if(typeof N!="function"&&N!==null)throw new TypeError("Super expression must either be null or a function");J.prototype=Object.create(N&&N.prototype,{constructor:{value:J,writable:!0,configurable:!0}}),N&&q(J,N)}function q(J,N){return q=Object.setPrototypeOf||function(ne,j){return ne.__proto__=j,ne},q(J,N)}function X(J){var N=F();return function(){var ne=B(J),j;if(N){var z=B(this).constructor;j=Reflect.construct(ne,arguments,z)}else j=ne.apply(this,arguments);return k(this,j)}}function k(J,N){return N&&(S(N)==="object"||typeof N=="function")?N:M(J)}function M(J){if(J===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return J}function F(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function B(J){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(te){return te.__proto__||Object.getPrototypeOf(te)},B(J)}function Z(J,N,te){return N in J?Object.defineProperty(J,N,{value:te,enumerable:!0,configurable:!0,writable:!0}):J[N]=te,J}var le=(function(J){_(te,J);var N=X(te);function te(ne){var j;Y(this,te),j=N.call(this,ne),Z(M(j),"thumbsRef",void 0),Z(M(j),"carouselWrapperRef",void 0),Z(M(j),"listRef",void 0),Z(M(j),"itemsRef",void 0),Z(M(j),"timer",void 0),Z(M(j),"animationHandler",void 0),Z(M(j),"setThumbsRef",function($){j.thumbsRef=$}),Z(M(j),"setCarouselWrapperRef",function($){j.carouselWrapperRef=$}),Z(M(j),"setListRef",function($){j.listRef=$}),Z(M(j),"setItemsRef",function($,W){j.itemsRef||(j.itemsRef=[]),j.itemsRef[W]=$}),Z(M(j),"autoPlay",function(){a.Children.count(j.props.children)<=1||(j.clearAutoPlay(),j.props.autoPlay&&(j.timer=setTimeout(function(){j.increment()},j.props.interval)))}),Z(M(j),"clearAutoPlay",function(){j.timer&&clearTimeout(j.timer)}),Z(M(j),"resetAutoPlay",function(){j.clearAutoPlay(),j.autoPlay()}),Z(M(j),"stopOnHover",function(){j.setState({isMouseEntered:!0},j.clearAutoPlay)}),Z(M(j),"startOnLeave",function(){j.setState({isMouseEntered:!1},j.autoPlay)}),Z(M(j),"isFocusWithinTheCarousel",function(){return j.carouselWrapperRef?!!((0,c.default)().activeElement===j.carouselWrapperRef||j.carouselWrapperRef.contains((0,c.default)().activeElement)):!1}),Z(M(j),"navigateWithKeyboard",function($){if(j.isFocusWithinTheCarousel()){var W=j.props.axis,re=W==="horizontal",ce={ArrowUp:38,ArrowRight:39,ArrowDown:40,ArrowLeft:37},T=re?ce.ArrowRight:ce.ArrowDown,V=re?ce.ArrowLeft:ce.ArrowUp;T===$.keyCode?j.increment():V===$.keyCode&&j.decrement()}}),Z(M(j),"updateSizes",function(){if(!(!j.state.initialized||!j.itemsRef||j.itemsRef.length===0)){var $=j.props.axis==="horizontal",W=j.itemsRef[0];if(W){var re=$?W.clientWidth:W.clientHeight;j.setState({itemSize:re}),j.thumbsRef&&j.thumbsRef.updateSizes()}}}),Z(M(j),"setMountState",function(){j.setState({hasMount:!0}),j.updateSizes()}),Z(M(j),"handleClickItem",function($,W){if(a.Children.count(j.props.children)!==0){if(j.state.cancelClick){j.setState({cancelClick:!1});return}j.props.onClickItem($,W),$!==j.state.selectedItem&&j.setState({selectedItem:$})}}),Z(M(j),"handleOnChange",function($,W){a.Children.count(j.props.children)<=1||j.props.onChange($,W)}),Z(M(j),"handleClickThumb",function($,W){j.props.onClickThumb($,W),j.moveTo($)}),Z(M(j),"onSwipeStart",function($){j.setState({swiping:!0}),j.props.onSwipeStart($)}),Z(M(j),"onSwipeEnd",function($){j.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),j.props.onSwipeEnd($),j.clearAutoPlay(),j.state.autoPlay&&j.autoPlay()}),Z(M(j),"onSwipeMove",function($,W){j.props.onSwipeMove(W);var re=j.props.swipeAnimationHandler($,j.props,j.state,j.setState.bind(M(j)));return j.setState(R({},re)),!!Object.keys(re).length}),Z(M(j),"decrement",function(){var $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;j.moveTo(j.state.selectedItem-(typeof $=="number"?$:1))}),Z(M(j),"increment",function(){var $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;j.moveTo(j.state.selectedItem+(typeof $=="number"?$:1))}),Z(M(j),"moveTo",function($){if(typeof $=="number"){var W=a.Children.count(j.props.children)-1;$<0&&($=j.props.infiniteLoop?W:0),$>W&&($=j.props.infiniteLoop?0:W),j.selectItem({selectedItem:$}),j.state.autoPlay&&j.state.isMouseEntered===!1&&j.resetAutoPlay()}}),Z(M(j),"onClickNext",function(){j.increment(1)}),Z(M(j),"onClickPrev",function(){j.decrement(1)}),Z(M(j),"onSwipeForward",function(){j.increment(1),j.props.emulateTouch&&j.setState({cancelClick:!0})}),Z(M(j),"onSwipeBackwards",function(){j.decrement(1),j.props.emulateTouch&&j.setState({cancelClick:!0})}),Z(M(j),"changeItem",function($){return function(W){(!(0,p.isKeyboardEvent)(W)||W.key==="Enter")&&j.moveTo($)}}),Z(M(j),"selectItem",function($){j.setState(R({previousItem:j.state.selectedItem},$),function(){j.setState(j.animationHandler(j.props,j.state))}),j.handleOnChange($.selectedItem,a.Children.toArray(j.props.children)[$.selectedItem])}),Z(M(j),"getInitialImage",function(){var $=j.props.selectedItem,W=j.itemsRef&&j.itemsRef[$],re=W&&W.getElementsByTagName("img")||[];return re[0]}),Z(M(j),"getVariableItemHeight",function($){var W=j.itemsRef&&j.itemsRef[$];if(j.state.hasMount&&W&&W.children.length){var re=W.children[0].getElementsByTagName("img")||[];if(re.length>0){var ce=re[0];if(!ce.complete){var T=function ae(){j.forceUpdate(),ce.removeEventListener("load",ae)};ce.addEventListener("load",T)}}var V=re[0]||W.children[0],ie=V.clientHeight;return ie>0?ie:null}return null});var z={initialized:!1,previousItem:ne.selectedItem,selectedItem:ne.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:ne.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return j.animationHandler=typeof ne.animationHandler=="function"&&ne.animationHandler||ne.animationHandler==="fade"&&y.fadeAnimationHandler||y.slideAnimationHandler,j.state=R(R({},z),j.animationHandler(ne,z)),j}return K(te,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(j,z){!j.children&&this.props.children&&!this.state.initialized&&this.setupCarousel(),!j.autoFocus&&this.props.autoFocus&&this.forceFocus(),z.swiping&&!this.state.swiping&&this.setState(R({},this.props.stopSwipingHandler(this.props,this.state))),(j.selectedItem!==this.props.selectedItem||j.centerMode!==this.props.centerMode)&&(this.updateSizes(),this.moveTo(this.props.selectedItem)),j.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var j=this;this.bindEvents(),this.state.autoPlay&&a.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},function(){var z=j.getInitialImage();z&&!z.complete?z.addEventListener("load",j.setMountState):j.setMountState()})}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var j=this.carouselWrapperRef;this.props.stopOnHover&&j&&(j.addEventListener("mouseenter",this.stopOnHover),j.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var j=this.carouselWrapperRef;this.props.stopOnHover&&j&&(j.removeEventListener("mouseenter",this.stopOnHover),j.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,f.default)().addEventListener("resize",this.updateSizes),(0,f.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,c.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,f.default)().removeEventListener("resize",this.updateSizes),(0,f.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var j=this.getInitialImage();j&&j.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,c.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var j;(j=this.carouselWrapperRef)===null||j===void 0||j.focus()}},{key:"renderItems",value:function(j){var z=this;return this.props.children?a.Children.map(this.props.children,function($,W){var re=W===z.state.selectedItem,ce=W===z.state.previousItem,T=re&&z.state.selectedStyle||ce&&z.state.prevStyle||z.state.slideStyle||{};z.props.centerMode&&z.props.axis==="horizontal"&&(T=R(R({},T),{},{minWidth:z.props.centerSlidePercentage+"%"})),z.state.swiping&&z.state.swipeMovementStarted&&(T=R(R({},T),{},{pointerEvents:"none"}));var V={ref:function(ae){return z.setItemsRef(ae,W)},key:"itemKey"+W+(j?"clone":""),className:u.default.ITEM(!0,W===z.state.selectedItem,W===z.state.previousItem),onClick:z.handleClickItem.bind(z,W,$),style:T};return a.default.createElement("li",V,z.props.renderItem($,{isSelected:W===z.state.selectedItem,isPrevious:W===z.state.previousItem}))}):[]}},{key:"renderControls",value:function(){var j=this,z=this.props,$=z.showIndicators,W=z.labels,re=z.renderIndicator,ce=z.children;return $?a.default.createElement("ul",{className:"control-dots"},a.Children.map(ce,function(T,V){return re&&re(j.changeItem(V),V===j.state.selectedItem,V,W.item)})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?a.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,a.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return!this.props.showThumbs||!this.props.children||a.Children.count(this.props.children)===0?null:a.default.createElement(o.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children))}},{key:"render",value:function(){var j=this;if(!this.props.children||a.Children.count(this.props.children)===0)return null;var z=this.props.swipeable&&a.Children.count(this.props.children)>1,$=this.props.axis==="horizontal",W=this.props.showArrows&&a.Children.count(this.props.children)>1,re=W&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,ce=W&&(this.state.selectedItem<a.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,T=this.renderItems(!0),V=T.shift(),ie=T.pop(),ae={className:u.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},se={};if($){if(ae.onSwipeLeft=this.onSwipeForward,ae.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var he=this.getVariableItemHeight(this.state.selectedItem);se.height=he||"auto"}}else ae.onSwipeUp=this.props.verticalSwipe==="natural"?this.onSwipeBackwards:this.onSwipeForward,ae.onSwipeDown=this.props.verticalSwipe==="natural"?this.onSwipeForward:this.onSwipeBackwards,ae.style=R(R({},ae.style),{},{height:this.state.itemSize}),se.height=this.state.itemSize;return a.default.createElement("div",{"aria-label":this.props.ariaLabel,className:u.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},a.default.createElement("div",{className:u.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,re,this.props.labels.leftArrow),a.default.createElement("div",{className:u.default.WRAPPER(!0,this.props.axis),style:se},z?a.default.createElement(l.default,w({tagName:"ul",innerRef:this.setListRef},ae,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&ie,this.renderItems(),this.props.infiniteLoop&&V):a.default.createElement("ul",{className:u.default.SLIDER(!0,this.state.swiping),ref:function(Le){return j.setListRef(Le)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&ie,this.renderItems(),this.props.infiniteLoop&&V)),this.props.renderArrowNext(this.onClickNext,ce,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}]),te})(a.default.Component);return Hl.default=le,Z(le,"displayName","Carousel"),Z(le,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:p.noop,onClickThumb:p.noop,onChange:p.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(N,te,ne){return a.default.createElement("button",{type:"button","aria-label":ne,className:u.default.ARROW_PREV(!te),onClick:N})},renderArrowNext:function(N,te,ne){return a.default.createElement("button",{type:"button","aria-label":ne,className:u.default.ARROW_NEXT(!te),onClick:N})},renderIndicator:function(N,te,ne,j){return a.default.createElement("li",{className:u.default.DOT(te),onClick:N,onKeyDown:N,value:ne,key:ne,role:"button",tabIndex:0,"aria-label":"".concat(j," ").concat(ne+1)})},renderItem:function(N){return N},renderThumbs:function(N){var te=a.Children.map(N,function(ne){var j=ne;if(ne.type!=="img"&&(j=a.Children.toArray(ne.props.children).find(function(z){return z.type==="img"})),!!j)return j});return te.filter(function(ne){return ne}).length===0?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):te},statusFormatter:p.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:y.slideSwipeAnimationHandler,stopSwipingHandler:y.slideStopSwipingHandler}),Hl}var Y1={},G1;function b3(){return G1||(G1=1),Y1}var X1;function x3(){return X1||(X1=1,(function(a){Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"Carousel",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(a,"CarouselProps",{enumerable:!0,get:function(){return u.CarouselProps}}),Object.defineProperty(a,"Thumbs",{enumerable:!0,get:function(){return o.default}});var l=c(y3()),u=b3(),o=c(Mg());function c(f){return f&&f.__esModule?f:{default:f}}})(Bc)),Bc}var S3=x3();const w3=y5`
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
`,E3=E.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(2, 6, 23, 0.08);
`,C3=E.div`
  position: relative;
  aspect-ratio: 1 / 1; /* Instagram square */
  background: #f1f5f9;
`,T3=E.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,j3=E.div`
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
`,R3=E.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`,O3=E.div`
  display: flex;
  gap: 12px;
`,zo=E.button`
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
`,z3=E.div`
  padding: 0 12px 12px 12px;
`,_3=E.div`
  font-weight: 600;
  font-size: 14px;
  color: #0f172a;
`,M3=E.p`
  margin: 6px 0 4px;
  font-size: 14px;
  line-height: 1.5;
  color: #0f172a;
`,A3=E.time`
  display: block;
  font-size: 12px;
  color: #64748b;
`;function D3({data:a,likedDefault:l=!1,savedDefault:u=!1,likeCountDefault:o=0,onLikeChange:c,onBookmarkChange:f,onShare:p}){const{title:y="Infographic Title",description:v="",carouselImgSrc:m=[]}=a||{},[x,S]=b.useState(0),[w,A]=b.useState(l),[R,Y]=b.useState(u),[L,K]=b.useState(o),_=w?"Unlike post":"Like post",q=R?"Remove bookmark":"Bookmark",X=()=>{const B=!w;A(B),K(Z=>B?Z+1:Math.max(0,Z-1)),c&&c(B)},k=()=>{const B=!R;Y(B),f&&f(B)},M=b.useMemo(()=>({title:y,text:`${y}`,url:typeof window<"u"?window.location.href:""}),[y]),F=async()=>{try{navigator.share?await navigator.share(M):navigator.clipboard&&(await navigator.clipboard.writeText(M.url),alert("Link copied to clipboard")),p&&p(M)}catch(B){console.error("Share failed:",B)}};return!m||m.length===0?null:h.jsxs(E3,{role:"article","aria-label":`${y} – Instagram multi-image post`,children:[h.jsx(w3,{}),h.jsxs(C3,{children:[h.jsx(S3.Carousel,{showThumbs:!1,showIndicators:!0,showStatus:!1,showArrows:!1,infiniteLoop:!1,autoPlay:!1,swipeable:!0,emulateTouch:!0,transitionTime:350,selectedItem:x,onChange:S,dynamicHeight:!1,children:m.map((B,Z)=>h.jsx("div",{children:h.jsx(T3,{src:B,alt:`${y} — ${Z+1}`})},Z))}),h.jsxs(j3,{children:[x+1,"/",m.length]})]}),h.jsxs(R3,{children:[h.jsxs(O3,{children:[h.jsx(zo,{onClick:X,"aria-label":_,title:_,children:w?h.jsx(yg,{size:22}):h.jsx(bg,{size:22})}),h.jsx(zo,{"aria-label":"Comment",title:"Comment",children:h.jsx(xg,{size:20})}),h.jsx(zo,{onClick:F,"aria-label":"Share",title:"Share",children:h.jsx(Eg,{size:20})})]}),h.jsx(zo,{onClick:k,"aria-label":q,title:q,children:R?h.jsx(Hf,{size:20}):h.jsx($f,{size:20})})]}),h.jsxs(z3,{children:[h.jsxs(_3,{children:[L," likes"]}),v&&h.jsxs(M3,{children:[h.jsx("strong",{children:y})," ",v]}),h.jsx(A3,{dateTime:new Date().toISOString(),children:"Just now"})]})]})}const N3=E.article`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(180deg, #dff6ff 0%, #bce0ff 100%);
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.12);
`,k3=E.div`
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
`,L3=E.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 18px 20px;
  color: #0f172a;
`,B3=E.div`
  flex: 1 1 auto;
`,U3=E.h3`
  margin: 0 0 6px;
  font-size: clamp(18px, 2.2vw, 22px);
  line-height: 1.2;
`,H3=E.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #334155;
`,$3=E.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,V1=E.button`
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
`;function q3({data:a,likedDefault:l=!1,savedDefault:u=!1,onLikeChange:o,onBookmarkChange:c}){const f=a?.videoClipSrc||a?.vedioClipSrc,{title:p,description:y,poster:v}=a||{},[m,x]=b.useState(l),[S,w]=b.useState(u),A=b.useRef(null),R=()=>{const L=!m;x(L),o&&o(L)},Y=()=>{const L=!S;w(L),c&&c(L)};return b.useEffect(()=>{const L=A.current;if(!L)return;(async()=>{try{await L.play()}catch{}})()},[f]),f?h.jsxs(N3,{children:[h.jsx(k3,{children:h.jsx("video",{ref:A,src:f,controls:!0,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",poster:v,"aria-label":p||"Video clip"})}),h.jsxs(L3,{children:[h.jsxs(B3,{children:[h.jsx(U3,{children:p}),y&&h.jsx(H3,{children:y})]}),h.jsxs($3,{children:[h.jsx(V1,{onClick:R,"aria-label":m?"Unlike video":"Like video",title:m?"Unlike":"Like",children:m?h.jsx(j5,{size:20}):h.jsx(R5,{size:20})}),h.jsx(V1,{onClick:Y,"aria-label":S?"Remove bookmark":"Bookmark video",title:S?"Remove bookmark":"Bookmark",children:S?h.jsx(Hf,{size:18}):h.jsx($f,{size:18})})]})]})]}):null}const Y3=[{id:1,name:"Sense of Collective Identity",img:To.CollectiveIdentity||"https://images.unsplash.com/photo-1506765515384-028b60a970df?w=400&h=400&fit=crop",hasNew:!0,slides:[Q5.test,"https://images.unsplash.com/photo-1554189097-ffe88e998a2b?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602524811998-8b90d1d03663?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1505066836043-7d9b15a1595d?w=800&h=1400&fit=crop"]},{id:2,name:"Understanding Diversity",img:To.Diversity||"https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1581091226825-c6a76aa2f4c1?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&h=1400&fit=crop"]},{id:3,name:"Nationalism in India",img:To.Nationalism||"https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1524310393100-34cb9cd27f1e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1533199829561-72f88a8f0c56?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602451126518-9b36f1b23543?w=800&h=1400&fit=crop"]},{id:4,name:"Globalisation and the Indian Economy",img:To.Globalisation||"https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1565372918675-bacb79cdd3a5?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&h=1400&fit=crop"]}];function G3({isOpen:a,activeIndex:l,setActiveIndex:u,total:o,onClose:c,duration:f=3e3}){const p=b.useRef(Date.now()),y=b.useRef(),v=b.useRef(0),m=b.useCallback(()=>{const S=Date.now()-p.current,w=Math.min(1,S/f);v.current=w,w>=1?l<o-1?u(A=>A+1):c():y.current=requestAnimationFrame(m)},[l,o,f,c,u]);return b.useEffect(()=>{if(a)return p.current=Date.now(),y.current=requestAnimationFrame(m),()=>cancelAnimationFrame(y.current)},[a,l,m]),{resetTimer:b.useCallback(()=>{p.current=Date.now()},[]),getProgressValue:()=>v.current}}const X3=E.div``,V3=E.div`
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
`,Q3=E.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 16px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,Z3=E.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border: 0;
  background: transparent;
  cursor: pointer;
`,K3=E.div`
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
`,J3=E.div`
  background: #fff;
  padding: 3px;
  border-radius: 999px;
`,F3=E.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 999px;
  user-drag: none;
  -webkit-user-drag: none;
`,W3=E.span`
  font-size: 12px;
  color: #1f2937;
  max-width: 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,P3=E.div`
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
`,I3=E.div`
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
`,e4=E.div`
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
`,t4=E.div`
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
`,n4=E.div`
  height: 3px;
  flex: 1;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    height: 2.5px;
  }
`,a4=E.div`
  height: 100%;
  background: linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.95) 100%);
  transition: width 100ms linear;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
`,i4=E.div`
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
`,l4=E.img`
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
`,r4=E.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
`,o4=E.div`
  font-weight: 700;
  font-size: clamp(13px, 2.2vw, 15px);
  line-height: 1.2;
  letter-spacing: -0.01em;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,u4=E.div`
  font-size: clamp(11px, 1.8vw, 13px);
  opacity: 0.85;
  line-height: 1.2;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,s4=E.button`
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
`,c4=E.img`
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
`,Q1=E.div`
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
`;function f4(a){return Re({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1.47978 1.4797C1.30227 1.65721 1.28614 1.93498 1.43137 2.13072L1.47978 2.1868L4.1695 4.87652C2.88817 5.77616 1.93052 7.11985 1.53259 8.70952C1.46554 8.97738 1.62834 9.24892 1.89621 9.31598C2.16409 9.38298 2.4356 9.22025 2.50266 8.95232C2.85564 7.54225 3.72742 6.35956 4.88944 5.59626L6.09586 6.80278C5.62419 7.28378 5.33334 7.94278 5.33334 8.66965C5.33334 10.1424 6.52724 11.3363 8 11.3363C8.72694 11.3363 9.38587 11.0454 9.86694 10.5738L13.8131 14.5201C14.0084 14.7154 14.3249 14.7154 14.5202 14.5201C14.6977 14.3426 14.7139 14.0649 14.5686 13.8691L14.5202 13.813L10.4445 9.73692L10.4453 9.73592L9.64527 8.93732L7.732 7.02445L7.73334 7.02392L5.81252 5.10513L5.81334 5.10392L5.05782 4.35024L2.18689 1.4797C1.99163 1.28444 1.67504 1.28444 1.47978 1.4797ZM6.80274 7.51025L9.15947 9.86698C8.85947 10.1575 8.4506 10.3363 8 10.3363C7.07954 10.3363 6.33334 9.59012 6.33334 8.66965C6.33334 8.21905 6.51216 7.81018 6.80274 7.51025ZM8 3.66658C7.33314 3.66658 6.68607 3.7653 6.07406 3.94992L6.89874 4.77404C7.25594 4.70346 7.62427 4.66658 8 4.66658C10.6154 4.66658 12.8733 6.45342 13.4981 8.95538C13.565 9.22325 13.8364 9.38618 14.1043 9.31932C14.3723 9.25238 14.5352 8.98098 14.4683 8.71305C13.7329 5.7684 11.077 3.66658 8 3.66658ZM8.1298 6.0061L10.664 8.53992C10.5961 7.16865 9.49814 6.07168 8.1298 6.0061Z"},child:[]}]})(a)}function d4({currentItem:a,isOpen:l,slideIndex:u,setSlideIndex:o,onClose:c,duration:f=3e3}){const p=a?.slides?.length||0,{resetTimer:y,getProgressValue:v}=G3({isOpen:l,activeIndex:u,setActiveIndex:o,total:p,onClose:c,duration:f}),m=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[,x]=b.useState(0);b.useEffect(()=>{if(!l||m)return;let R;const Y=()=>{x(L=>L+1),R=requestAnimationFrame(Y)};return R=requestAnimationFrame(Y),()=>cancelAnimationFrame(R)},[l,m]);const S=b.useCallback(()=>{a&&(u<p-1?(o(R=>R+1),y()):c())},[a,u,p,y,c,o]),w=b.useCallback(()=>{a&&(u>0?(o(R=>R-1),y()):c())},[a,u,y,c,o]);b.useEffect(()=>{const R=Y=>{l&&(Y.key==="Escape"&&c(),Y.key==="ArrowRight"&&S(),Y.key==="ArrowLeft"&&w())};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[l,S,w,c]),b.useEffect(()=>(l?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[l]);const A=R=>R<u?1:R>u?0:v();return!l||!a?null:h.jsx(P3,{onClick:c,"aria-label":"Story overlay",children:h.jsx(I3,{onClick:R=>R.stopPropagation(),children:h.jsxs(e4,{children:[h.jsx(t4,{"aria-label":"Story progress",children:a.slides.map((R,Y)=>h.jsx(n4,{"aria-label":`Progress track ${Y+1}`,children:h.jsx(a4,{style:{width:`${A(Y)*100}%`}})},Y))}),h.jsxs(i4,{children:[h.jsx(l4,{src:a.img,alt:a.name}),h.jsxs(r4,{children:[h.jsx(o4,{children:a.name}),h.jsx(u4,{children:"Chapter highlight"})]}),h.jsx(s4,{"aria-label":"Close story",onClick:c,title:"Close",children:h.jsx(f4,{})})]}),a.slides.map((R,Y)=>h.jsx(c4,{src:R,alt:`Slide ${Y+1}`,$active:Y===u,draggable:!1},Y)),h.jsx(Q1,{$side:"left",onClick:w,"aria-label":"Previous slide"}),h.jsx(Q1,{$side:"right",onClick:S,"aria-label":"Next slide"})]})})})}function h4({items:a,duration:l=3e3,onOpen:u,onClose:o,className:c}){const f=b.useRef(null),p=b.useRef(!1),y=b.useRef(0),v=b.useRef(0),[m,x]=b.useState(a||[]),[S,w]=b.useState(null),[A,R]=b.useState(0),Y=m.find(M=>M.id===S)||null,L=!!S,K=M=>{R(0),w(M),x(F=>F.map(B=>B.id===M?{...B,hasNew:!1}:B)),u&&u(M)},_=()=>{w(null),o&&o()},q=M=>{p.current=!0,y.current=M.clientX,v.current=f.current?.scrollLeft||0,M.target.setPointerCapture?.(M.pointerId)},X=M=>{if(!p.current||!f.current)return;const F=M.clientX-y.current;f.current.scrollLeft=v.current-F},k=()=>{p.current=!1};return h.jsxs(X3,{className:c,children:[h.jsx(V3,{children:h.jsx(Q3,{ref:f,onPointerDown:q,onPointerMove:X,onPointerUp:k,onPointerLeave:k,"aria-label":"Stories scroller",children:m.map(M=>h.jsxs(Z3,{onClick:()=>K(M.id),"aria-label":`Open story ${M.name}`,title:M.name,children:[h.jsx(K3,{$hasNew:M.hasNew,children:h.jsx(J3,{children:h.jsx(F3,{src:M.img,alt:M.name,draggable:!1})})}),h.jsx(W3,{children:M.name})]},M.id))})}),h.jsx(d4,{currentItem:Y,isOpen:L,slideIndex:A,setSlideIndex:R,onClose:_,duration:l})]})}const p4=[{id:1,type:"infografic",title:"Sense of Collective Identity - Overview",description:"An overview of how shared history, culture, and values shape collective identity in society.",imgSrc:zn.Slide1},{id:2,type:"carousel",title:"Understanding Collective Identity",description:"Exploring the roots and importance of collective identity in social cohesion.",carouselImgSrc:[zn.Slide2,zn.Slide3,zn.Slide4,zn.Slide5,zn.Slide6]},{id:3,type:"carousel",title:"Symbols and Shared Culture",description:"How flags, festivals, and traditions represent unity and belonging.",carouselImgSrc:[zn.Slide7,zn.Slide8,zn.Slide9]},{id:5,type:"vedioClip",title:"Collective Identity in Action",description:"A short video summarizing real-world examples of collective identity shaping societies.",vedioClipSrc:V5.videoClip1}],m4=E.div`
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
`;function g4(){return b.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]),h.jsxs(h.Fragment,{children:[h.jsx(h4,{items:Y3,duration:3e3,onOpen:a=>console.log("opened:",a),onClose:()=>console.log("closed")}),h.jsx(m4,{children:h.jsx("div",{className:"d-flex gap-3 flex-column align-items-center mt-3",children:p4.map(a=>h.jsx("div",{style:{width:"100%"},children:a.type==="infografic"?h.jsx(f3,{title:a.title,description:a.description,imgSrc:a.imgSrc,badge:a.badge}):a.type==="carousel"?h.jsx(D3,{data:a}):a.type==="vedioClip"?h.jsx(q3,{data:a}):null},a.id))})})]})}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),y4=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,u,o)=>o?o.toUpperCase():u.toLowerCase()),Z1=a=>{const l=y4(a);return l.charAt(0).toUpperCase()+l.slice(1)},Dg=(...a)=>a.filter((l,u,o)=>!!l&&l.trim()!==""&&o.indexOf(l)===u).join(" ").trim(),b4=a=>{for(const l in a)if(l.startsWith("aria-")||l==="role"||l==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var x4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=b.forwardRef(({color:a="currentColor",size:l=24,strokeWidth:u=2,absoluteStrokeWidth:o,className:c="",children:f,iconNode:p,...y},v)=>b.createElement("svg",{ref:v,...x4,width:l,height:l,stroke:a,strokeWidth:o?Number(u)*24/Number(l):u,className:Dg("lucide",c),...!f&&!b4(y)&&{"aria-hidden":"true"},...y},[...p.map(([m,x])=>b.createElement(m,x)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=(a,l)=>{const u=b.forwardRef(({className:o,...c},f)=>b.createElement(S4,{ref:f,iconNode:l,className:Dg(`lucide-${v4(Z1(a))}`,`lucide-${a}`,o),...c}));return u.displayName=Z1(a),u};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],E4=dt("arrow-right",w4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],T4=dt("atom",C4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],ka=dt("book-open",j4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],O4=dt("bookmark",R4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],_4=dt("calculator",z4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],A4=dt("check",M4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],K1=dt("circle-check-big",D4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],k4=dt("code",N4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],J1=dt("flask-conical",L4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],F1=dt("graduation-cap",B4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],W1=dt("globe",U4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],$4=dt("grid-3x3",H4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],Y4=dt("languages",q4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],_o=dt("lock",G4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],V4=dt("sparkles",X4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Z4=dt("x",Q4),K4=cn`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(30px, -30px) rotate(5deg); }
  50% { transform: translate(-20px, -50px) rotate(-5deg); }
  75% { transform: translate(40px, -20px) rotate(3deg); }
`,J4=cn`
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.4; }
`,F4=cn`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`,W4=E.div`
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
`,P4=E.span`
  &::after {
    content: "|";
    animation: ${F4} 1s infinite;
    margin-left: 4px;
  }
`,I4=E.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border-radius: 1.5rem;

  @media (min-width: 768px) {
    border-radius: 1rem;
  }
`,e6=E(I4)`
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.2);
  }
`,t6=E.div`
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
`,n6=E.h1`
  font-size: clamp(1.5rem, 6vw, 3rem);
  font-weight: 900;
  line-height: 1.2;
  padding: 0 1rem;
`,a6=E.span`
  background: green;
  -webkit-background-clip: text;
  color: transparent;
  font-style: italic;
  font-size: 30px;
`,Yc=E.div`
  position: absolute;
  border-radius: 50%;
  background: ${({$color:a})=>a};
  width: ${({$size:a})=>a}px;
  height: ${({$size:a})=>a}px;
  top: ${({$top:a})=>a};
  left: ${({$left:a})=>a};
  bottom: ${({$bottom:a})=>a};
  right: ${({$right:a})=>a};
  animation: ${J4} ${({$duration:a})=>a}s infinite ease-in-out;
  animation-delay: ${({$delay:a})=>a}s;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`,i6=E.div`
  position: absolute;
  opacity: 0.15;
  animation: ${K4} ${({$duration:a})=>a}s infinite ease-in-out;
  animation-delay: ${({$delay:a})=>a}s;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`,l6=E.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 100%;
`,r6=E.div`
  width: 100%;
  max-width: 600px;

  @media (min-width: 768px) {
    max-width: 800px;
  }
`,P1=E.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
  align-items: center;
`,I1=E.div`
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
`,em=E.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e293b;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`,o6=E.p`
  font-size: 0.8rem;
  color: #64748b;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`,u6=E.select`
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
`,tm=E.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,s6=E.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,c6=E.button`
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
`,f6=E.div`
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
`,d6=E.div`
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
`,h6=E.div`
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  width: 100%;
  font-size: 0.875rem;
  opacity: 0.95;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,nm=E.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`,am=E.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;function p6(){const a=Rf(),[l,u]=b.useState(""),[o,c]=b.useState(""),[f,p]=b.useState(""),[y,v]=b.useState(0),[m,x]=b.useState(!1),[S,w]=b.useState(0),A=["Achieve Excellence","Master Every Subject","Unlock Your Potential"];b.useEffect(()=>{const X=m?40:80,k=2e3,M=setTimeout(()=>{const F=A[y];if(!m&&S===F.length){setTimeout(()=>x(!0),k);return}if(m&&S===0){x(!1),v(B=>(B+1)%A.length);return}w(B=>B+(m?-1:1)),p(F.substring(0,S+(m?-1:1)))},X);return()=>clearTimeout(M)});const R={"Grade 9":{subjects:{English:"Ms. Priya Sharma",Mathematics:"Mr. Rajesh Kumar",Science:"Ms. Anjali Mehta","Social Studies":"Siddharth Sir",Hindi:"Ms. Kavita Reddy","Computer Science":"Mr. Arvind Nair"}},"Grade 10":{subjects:{English:"Ms. Sunita Verma",Mathematics:"Mr. Rohan Patel",Science:"Ms. Anjali Mehta","Social Studies":"Siddharth Sir",Hindi:"Ms. Kavita Reddy","Computer Science":"Mr. Arvind Nair"}},"Grade 11":{subjects:{English:"Ms. Priya Sharma",Physics:"Mr. Nitin Agarwal",Chemistry:"Ms. Sneha Kapoor",Biology:"Siddharth Sir",Mathematics:"Mr. Deepak Rao","Computer Science":"Mr. Arvind Nair"}},"Grade 12":{subjects:{English:"Ms. Sunita Verma",Physics:"Mr. Nitin Agarwal",Chemistry:"Ms. Sneha Kapoor",Biology:"Siddharth Sir",Mathematics:"Mr. Deepak Rao","Computer Science":"Mr. Arvind Nair"}}},Y={English:ka,Mathematics:_4,Science:J1,Physics:T4,Chemistry:J1,Biology:W1,"Social Studies":W1,Hindi:Y4,"Computer Science":k4},L=()=>{l&&o&&(a("/instalearn/teacher"),console.log(`Selected: ${l} - ${o}`))},K=X=>{c(X)},_=(X,k)=>{(X.key==="Enter"||X.key===" ")&&(X.preventDefault(),K(k))},q=l?Object.keys(R[l].subjects):[];return h.jsxs(W4,{children:[h.jsx(Yc,{$color:"rgba(255, 255, 255, 0.15)",$size:500,$top:"-10%",$right:"-5%",$duration:8,$delay:0}),h.jsx(Yc,{$color:"rgba(255, 255, 255, 0.1)",$size:600,$bottom:"-15%",$left:"-5%",$duration:10,$delay:3}),h.jsx(Yc,{$color:"rgba(255, 255, 255, 0.12)",$size:400,$top:"40%",$left:"50%",$duration:12,$delay:6}),[...Array(8)].map((X,k)=>h.jsx(i6,{$duration:8+k*2,$delay:k*.8,style:{left:`${10+k*12}%`,top:`${15+k*11}%`},children:k%3===0?h.jsx(ka,{size:32,color:"rgba(255,255,255,0.4)"}):k%3===1?h.jsx(F1,{size:32,color:"rgba(255,255,255,0.4)"}):h.jsx(V4,{size:32,color:"rgba(255,255,255,0.4)"})},k)),h.jsx(l6,{children:h.jsxs(r6,{children:[h.jsx(t6,{children:h.jsx(n6,{children:h.jsx(a6,{children:h.jsx(P4,{children:f})})})}),h.jsxs(e6,{style:{padding:"1.5rem",display:"flex",flexDirection:"column",gap:"2rem"},children:[h.jsxs(tm,{children:[h.jsxs(P1,{children:[h.jsx(I1,{$gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",$shadow:"0 8px 24px rgba(102,126,234,0.3)",children:h.jsx(F1,{size:20,color:"white"})}),h.jsx("div",{children:h.jsx(em,{children:"Select Your Grade"})})]}),h.jsxs("div",{style:{position:"relative"},children:[h.jsxs(u6,{value:l,onChange:X=>{u(X.target.value),c("")},children:[h.jsx("option",{value:"",disabled:!0,children:"Select Grade"}),Object.keys(R).map(X=>h.jsx("option",{value:X,children:X},X))]}),l&&h.jsx(K1,{size:20,style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",color:"#10b981"}})]})]}),h.jsxs(tm,{children:[h.jsxs(P1,{children:[h.jsx(I1,{$gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",$shadow:"0 8px 24px rgba(240,147,251,0.3)",children:h.jsx(ka,{size:20,color:"white"})}),h.jsxs("div",{children:[h.jsx(em,{children:"Choose Your Subject"}),h.jsx(o6,{children:"Click a subject to reveal the teacher name."})]})]}),q.length===0?h.jsxs(d6,{children:[h.jsx(ka,{size:40,color:"#94a3b8"}),h.jsx("p",{children:"Please select a grade to view available subjects"})]}):h.jsx(s6,{children:q.map(X=>{const k=R[l].subjects[X],M=o===X,F=Y[X]||ka;return h.jsxs(f6,{role:"button",tabIndex:0,"aria-pressed":M,$selected:M,onClick:()=>K(X),onKeyDown:B=>_(B,X),children:[h.jsxs(nm,{children:[h.jsx("span",{children:X}),h.jsx(am,{children:h.jsx(F,{size:18})})]}),M&&h.jsxs(nm,{children:[h.jsx(h6,{children:k}),h.jsx(am,{children:h.jsx(K1,{className:"mt-3",size:18})})]}),h.jsxs(c6,{$visible:M,onClick:L,children:["Continue to Profile ",h.jsx(E4,{size:18})]})]},X)})})]})]})]})})]})}function m6(a){return Re({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"},child:[]}]})(a)}function Mo(a){return Re({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(a)}function _i(a){return Re({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(a)}function Ng(a){return Re({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(a)}function im(a){return Re({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(a)}function g6(a){return Re({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(a)}function v6(a){return Re({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(a)}function lm(a){return Re({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(a)}function Gc(a){return Re({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(a)}function rm(a){return Re({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"},child:[]}]})(a)}function Ao(a){return Re({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(a)}function y6(a){return Re({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(a)}const b6=cn`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`,x6=cn`
  from { opacity: 0; }
  to { opacity: 1; }
`,It={bg:"#F6F8FB",card:"#FFFFFF",text:"#1F2937",subtext:"#6B7280",primary:"#4F46E5",primarySoft:"#EEF2FF",accent:"#10B981",border:"#E5E7EB",shadow:"0 10px 30px rgba(31, 41, 55, 0.08)"},S6=E.div`
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
`,w6=E.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  animation: ${b6} 0.6s ease-out;
`,Yf=E.div`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: var(--shadow);
`,E6=E(Yf)`
  padding: 24px;
  margin-bottom: 16px;
`,C6=E.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,T6=E.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(180deg, var(--primary), #7C3AED);
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 28px;
  font-weight: 800;
`,j6=E.div`
  display: grid;
  gap: 6px;
`,R6=E.h1`
  font-size: 22px;
  color: var(--text);
  margin: 0;
`,O6=E.p`
  color: var(--subtext);
  margin: 0;
  font-size: 14px;
`,z6=E.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-end;

  @media (max-width: 640px) {
    justify-content: center;
  }
`,om=E.button`
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
`,_6=E.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 14px;
`,Xc=E.div`
  background: var(--primarySoft);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 10px;
`,Vc=E.div`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: #fff;
  border: 1px solid var(--border);
`,Qc=E.div`
  display: grid;
  line-height: 1.1;
`,Zc=E.span`
  font-weight: 800;
  color: var(--text);
`,Kc=E.span`
  font-size: 12px;
  color: var(--subtext);
`,Jc=E.div`
  color: #F59E0B;
`,M6=E.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin: 16px 0;
`,um=E.button`
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
`,sm=E(Yf)`
  padding: 16px;
  animation: ${x6} 0.35s ease-out;
`,A6=E.div`
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
`,D6=E.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: linear-gradient(180deg, var(--primary), #7C3AED);
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 20px;
`,N6=E.div`
  display: grid;
  gap: 6px;
`,k6=E.h3`
  margin: 0;
  color: var(--text);
  font-size: 16px;
`,L6=E.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: var(--subtext);
`,Fc=E.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,B6=E.div`
  width: 140px;
  height: 8px;
  background: #F3F4F6;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid var(--border);
`,U6=E.div`
  height: 100%;
  width: ${a=>Math.min(Math.max(a.value,0),100)}%;
  background: linear-gradient(90deg, var(--primary), #22C55E);
`,H6=E(Ng)`
  color: #D1D5DB;
  font-size: 18px;
`,cm=E.div`
  text-align: center;
  padding: 48px 12px;
  color: var(--subtext);
`,fm=E.div`
  font-size: 56px;
  margin-bottom: 10px;
  opacity: 0.5;
`,$6=E.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(220px, 1fr) );
  gap: 12px;
`,q6=E(Yf)`
  padding: 14px;
  display: grid;
  gap: 10px;
`,Y6=E.div`
  font-weight: 700;
  color: var(--text);
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,G6=E.div`
  font-size: 12px;
  color: var(--subtext);
  display: flex;
  align-items: center;
  gap: 10px;
`,X6=E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,dm=E.button`
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
`;function V6(){const[a,l]=b.useState("history");b.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]);const u={name:"Priya Sharma",email:"priya.sharma@example.com",booksRead:24,hoursSpent:156,favoriteTeacher:"Ms. Sarah"},o=[{id:1,title:"Sense of Collective Identity",teacher:"Mr. Arjun Mehta",time:"2 hours ago",progress:75,icon:h.jsx(_i,{})},{id:2,title:"Understanding Diversity",teacher:"Ms. Nisha Rao",time:"Yesterday",progress:45,icon:h.jsx(Mo,{})},{id:3,title:"Nationalism in India",teacher:"Dr. Kavita Iyer",time:"2 days ago",progress:90,icon:h.jsx(Gc,{})},{id:4,title:"Democracy & Rights",teacher:"Prof. R. Menon",time:"1 week ago",progress:100,icon:h.jsx(rm,{})}],c=[{id:"f1",title:"Globalisation & Indian Economy",by:"Siddharth Sir",reads:12},{id:"f2",title:"Federalism Basics",by:"Anita Ma'am",reads:9},{id:"f3",title:"Judiciary: Structure",by:"R. Sharma",reads:14},{id:"f4",title:"Gender, Religion & Caste",by:"S. Verma",reads:7}];return h.jsx(S6,{children:h.jsxs(w6,{children:[h.jsx(E6,{children:h.jsxs(C6,{children:[h.jsx(T6,{"aria-label":"User avatar",children:h.jsx(y6,{size:24})}),h.jsxs("div",{children:[h.jsxs(j6,{children:[h.jsx(R6,{children:u.name}),h.jsx(O6,{children:u.email})]}),h.jsxs(_6,{children:[h.jsxs(Xc,{children:[h.jsx(Vc,{"aria-hidden":"true",children:h.jsx(Mo,{})}),h.jsxs(Qc,{children:[h.jsx(Zc,{children:u.booksRead}),h.jsx(Kc,{children:"Books Read"})]}),h.jsx(Jc,{title:"Lifetime reads",children:h.jsx(rm,{})})]}),h.jsxs(Xc,{children:[h.jsx(Vc,{"aria-hidden":"true",children:h.jsx(im,{})}),h.jsxs(Qc,{children:[h.jsx(Zc,{children:u.hoursSpent}),h.jsx(Kc,{children:"Study Hours"})]}),h.jsx(Jc,{title:"Consistent!",children:h.jsx(Ao,{})})]}),h.jsxs(Xc,{children:[h.jsx(Vc,{"aria-hidden":"true",children:h.jsx(_i,{})}),h.jsxs(Qc,{children:[h.jsx(Zc,{children:u.favoriteTeacher}),h.jsx(Kc,{children:"Favourite Teacher"})]}),h.jsx(Jc,{children:h.jsx(lm,{})})]})]})]}),h.jsxs(z6,{children:[h.jsxs(om,{"aria-label":"Edit profile",children:[h.jsx(v6,{})," Edit"]}),h.jsxs(om,{"aria-label":"Settings",children:[h.jsx(g6,{})," Settings"]})]})]})}),h.jsxs(M6,{children:[h.jsxs(um,{active:a==="history",onClick:()=>l("history"),"aria-pressed":a==="history",children:[h.jsx(Gc,{})," Reading History"]}),h.jsxs(um,{active:a==="favorites",onClick:()=>l("favorites"),"aria-pressed":a==="favorites",children:[h.jsx(Ao,{})," Favorites"]})]}),a==="history"?h.jsx(sm,{children:o.length>0?o.map(f=>h.jsxs(A6,{role:"button",tabIndex:0,children:[h.jsx(D6,{"aria-hidden":"true",children:f.icon}),h.jsxs(N6,{children:[h.jsx(k6,{children:f.title}),h.jsxs(L6,{children:[h.jsxs(Fc,{children:[h.jsx(_i,{})," ",f.teacher]}),h.jsxs(Fc,{children:[h.jsx(im,{})," ",f.time]}),h.jsxs(Fc,{children:[h.jsx(Mo,{})," ",f.progress,"% complete"]})]}),h.jsx(B6,{"aria-label":`Progress ${f.progress}%`,children:h.jsx(U6,{value:f.progress})})]}),h.jsx(H6,{})]},f.id)):h.jsxs(cm,{children:[h.jsx(fm,{children:h.jsx(m6,{})}),h.jsx("h3",{children:"No Reading History Yet"}),h.jsx("p",{children:"Start exploring SST chapters to see them here."})]})}):h.jsx(sm,{children:c.length>0?h.jsx($6,{children:c.map(f=>h.jsxs(q6,{children:[h.jsxs(Y6,{children:[h.jsx(Mo,{})," ",f.title]}),h.jsxs(G6,{children:[h.jsx(_i,{})," ",f.by," • ",h.jsx(Gc,{})," ",f.reads," reads"]}),h.jsxs(X6,{children:[h.jsxs(dm,{"aria-label":"Open",children:[h.jsx(Ng,{})," Open"]}),h.jsxs(dm,{"aria-label":"Unfavorite",children:[h.jsx(lm,{})," Unfavorite"]})]})]},f.id))}):h.jsxs(cm,{children:[h.jsx(fm,{children:h.jsx(Ao,{})}),h.jsx("h3",{children:"No Favorites Yet"}),h.jsxs("p",{children:["Tap the ",h.jsx(Ao,{style:{verticalAlign:"middle"}})," on any chapter to save it here."]})]})})]})})}const Q6=cn`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
`,Z6=cn`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,K6=cn`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,J6=cn`
  0% {
    width: 0%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 0%;
  }
`,F6=E.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`,W6=E.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,Wc=E.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: ${Q6} 20s infinite ease-in-out;

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
`,P6=E.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  animation: ${Z6} 0.8s ease-out;

  @media (max-width: 600px) {
    margin: 20px;
    padding: 20px 20px;
  }
`,I6=E.div`
  margin-bottom: 0px;
  position: relative;
`,eS=E.div`
  font-size: 70px;
  animation: ${K6} 2s infinite;
`,tS=E.h1`
  font-size: 2.5em;
  color: #2d3748;
  margin-bottom: 10px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 2em;
  }
`,nS=E.p`
  font-size: 1.2em;
  color: #718096;
  margin-bottom: 25px;
  line-height: 1.6;
`,aS=E.div`
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`,iS=E.div`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  animation: ${J6} 3s ease-in-out infinite;
`,lS=E.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Pc=E.div`
  padding: 20px;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
  }
`,Ic=E.div`
  font-size:30px;
  margin-bottom: 10px;
`,ef=E.div`
  font-size: 14px;
  color: #4a5568;
  font-weight: 600;
`,rS=E.button`
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
`;function hm(){const[a,l]=b.useState(!1),u=()=>{l(!0),setTimeout(()=>{l(!1)},2e3)};return h.jsxs(F6,{children:[h.jsxs(W6,{children:[h.jsx(Wc,{}),h.jsx(Wc,{}),h.jsx(Wc,{})]}),h.jsxs(P6,{children:[h.jsx(I6,{children:h.jsx(eS,{children:"🚧"})}),h.jsx(tS,{children:"Building Something Amazing"}),h.jsx(nS,{children:"We're working hard to bring you an incredible new feature. Stay tuned!"}),h.jsx(aS,{children:h.jsx(iS,{})}),h.jsxs(lS,{children:[h.jsxs(Pc,{children:[h.jsx(Ic,{children:"⚡"}),h.jsx(ef,{children:"Lightning Fast"})]}),h.jsxs(Pc,{children:[h.jsx(Ic,{children:"🎨"}),h.jsx(ef,{children:"Beautiful Design"})]}),h.jsxs(Pc,{children:[h.jsx(Ic,{children:"🔒"}),h.jsx(ef,{children:"Secure & Private"})]})]}),h.jsx(rS,{onClick:u,$notified:a,children:a?"✓ You'll be notified!":"Notify Me When Ready"})]})]})}var oS=Og();const at=Il(oS);function Sf(){return Sf=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var o in u)({}).hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},Sf.apply(null,arguments)}function kg(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)!==-1)continue;u[o]=a[o]}return u}function pm(a){return"default"+a.charAt(0).toUpperCase()+a.substr(1)}function uS(a){var l=sS(a,"string");return typeof l=="symbol"?l:String(l)}function sS(a,l){if(typeof a!="object"||a===null)return a;var u=a[Symbol.toPrimitive];if(u!==void 0){var o=u.call(a,l);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}function cS(a,l,u){var o=b.useRef(a!==void 0),c=b.useState(l),f=c[0],p=c[1],y=a!==void 0,v=o.current;return o.current=y,!y&&v&&f!==l&&p(l),[y?a:f,b.useCallback(function(m){for(var x=arguments.length,S=new Array(x>1?x-1:0),w=1;w<x;w++)S[w-1]=arguments[w];u&&u.apply(void 0,[m].concat(S)),p(m)},[u])]}function Lg(a,l){return Object.keys(l).reduce(function(u,o){var c,f=u,p=f[pm(o)],y=f[o],v=kg(f,[pm(o),o].map(uS)),m=l[o],x=cS(y,p,a[m]),S=x[0],w=x[1];return Sf({},v,(c={},c[o]=S,c[m]=w,c))},a)}function wf(a,l){return wf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,o){return u.__proto__=o,u},wf(a,l)}function fS(a,l){a.prototype=Object.create(l.prototype),a.prototype.constructor=a,wf(a,l)}const dS=["xxl","xl","lg","md","sm","xs"],hS="xs",Bg=b.createContext({prefixes:{},breakpoints:dS,minBreakpoint:hS}),{Consumer:_w,Provider:Mw}=Bg;function wt(a,l){const{prefixes:u}=b.useContext(Bg);return a||u[l]||l}function Gf(a){return a&&a.ownerDocument||document}function pS(a){var l=Gf(a);return l&&l.defaultView||window}function mS(a,l){return pS(a).getComputedStyle(a,l)}var gS=/([A-Z])/g;function vS(a){return a.replace(gS,"-$1").toLowerCase()}var yS=/^ms-/;function Do(a){return vS(a).replace(yS,"-ms-")}var bS=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function xS(a){return!!(a&&bS.test(a))}function Nn(a,l){var u="",o="";if(typeof l=="string")return a.style.getPropertyValue(Do(l))||mS(a).getPropertyValue(Do(l));Object.keys(l).forEach(function(c){var f=l[c];!f&&f!==0?a.style.removeProperty(Do(c)):xS(c)?o+=c+"("+f+") ":u+=Do(c)+": "+f+";"}),o&&(u+="transform: "+o+";"),a.style.cssText+=";"+u}var SS=jg();const tf=Il(SS),mm={disabled:!1},Ug=qe.createContext(null);var wS=function(l){return l.scrollTop},Kl="unmounted",fa="exited",en="entering",Mn="entered",Pl="exiting",Un=(function(a){fS(l,a);function l(o,c){var f;f=a.call(this,o,c)||this;var p=c,y=p&&!p.isMounting?o.enter:o.appear,v;return f.appearStatus=null,o.in?y?(v=fa,f.appearStatus=en):v=Mn:o.unmountOnExit||o.mountOnEnter?v=Kl:v=fa,f.state={status:v},f.nextCallback=null,f}l.getDerivedStateFromProps=function(c,f){var p=c.in;return p&&f.status===Kl?{status:fa}:null};var u=l.prototype;return u.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},u.componentDidUpdate=function(c){var f=null;if(c!==this.props){var p=this.state.status;this.props.in?p!==en&&p!==Mn&&(f=en):(p===en||p===Mn)&&(f=Pl)}this.updateStatus(!1,f)},u.componentWillUnmount=function(){this.cancelNextCallback()},u.getTimeouts=function(){var c=this.props.timeout,f,p,y;return f=p=y=c,c!=null&&typeof c!="number"&&(f=c.exit,p=c.enter,y=c.appear!==void 0?c.appear:p),{exit:f,enter:p,appear:y}},u.updateStatus=function(c,f){if(c===void 0&&(c=!1),f!==null)if(this.cancelNextCallback(),f===en){if(this.props.unmountOnExit||this.props.mountOnEnter){var p=this.props.nodeRef?this.props.nodeRef.current:Oi.findDOMNode(this);p&&wS(p)}this.performEnter(c)}else this.performExit();else this.props.unmountOnExit&&this.state.status===fa&&this.setState({status:Kl})},u.performEnter=function(c){var f=this,p=this.props.enter,y=this.context?this.context.isMounting:c,v=this.props.nodeRef?[y]:[Oi.findDOMNode(this),y],m=v[0],x=v[1],S=this.getTimeouts(),w=y?S.appear:S.enter;if(!c&&!p||mm.disabled){this.safeSetState({status:Mn},function(){f.props.onEntered(m)});return}this.props.onEnter(m,x),this.safeSetState({status:en},function(){f.props.onEntering(m,x),f.onTransitionEnd(w,function(){f.safeSetState({status:Mn},function(){f.props.onEntered(m,x)})})})},u.performExit=function(){var c=this,f=this.props.exit,p=this.getTimeouts(),y=this.props.nodeRef?void 0:Oi.findDOMNode(this);if(!f||mm.disabled){this.safeSetState({status:fa},function(){c.props.onExited(y)});return}this.props.onExit(y),this.safeSetState({status:Pl},function(){c.props.onExiting(y),c.onTransitionEnd(p.exit,function(){c.safeSetState({status:fa},function(){c.props.onExited(y)})})})},u.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},u.safeSetState=function(c,f){f=this.setNextCallback(f),this.setState(c,f)},u.setNextCallback=function(c){var f=this,p=!0;return this.nextCallback=function(y){p&&(p=!1,f.nextCallback=null,c(y))},this.nextCallback.cancel=function(){p=!1},this.nextCallback},u.onTransitionEnd=function(c,f){this.setNextCallback(f);var p=this.props.nodeRef?this.props.nodeRef.current:Oi.findDOMNode(this),y=c==null&&!this.props.addEndListener;if(!p||y){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var v=this.props.nodeRef?[this.nextCallback]:[p,this.nextCallback],m=v[0],x=v[1];this.props.addEndListener(m,x)}c!=null&&setTimeout(this.nextCallback,c)},u.render=function(){var c=this.state.status;if(c===Kl)return null;var f=this.props,p=f.children;f.in,f.mountOnEnter,f.unmountOnExit,f.appear,f.enter,f.exit,f.timeout,f.addEndListener,f.onEnter,f.onEntering,f.onEntered,f.onExit,f.onExiting,f.onExited,f.nodeRef;var y=kg(f,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return qe.createElement(Ug.Provider,{value:null},typeof p=="function"?p(c,y):qe.cloneElement(qe.Children.only(p),y))},l})(qe.Component);Un.contextType=Ug;Un.propTypes={};function Ti(){}Un.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ti,onEntering:Ti,onEntered:Ti,onExit:Ti,onExiting:Ti,onExited:Ti};Un.UNMOUNTED=Kl;Un.EXITED=fa;Un.ENTERING=en;Un.ENTERED=Mn;Un.EXITING=Pl;function ES(a){return a.code==="Escape"||a.keyCode===27}function CS(){const a=b.version.split(".");return{major:+a[0],minor:+a[1],patch:+a[2]}}function qi(a){if(!a||typeof a=="function")return null;const{major:l}=CS();return l>=19?a.props.ref:a.ref}const lu=!!(typeof window<"u"&&window.document&&window.document.createElement);var Ef=!1,Cf=!1;try{var nf={get passive(){return Ef=!0},get once(){return Cf=Ef=!0}};lu&&(window.addEventListener("test",nf,nf),window.removeEventListener("test",nf,!0))}catch{}function TS(a,l,u,o){if(o&&typeof o!="boolean"&&!Cf){var c=o.once,f=o.capture,p=u;!Cf&&c&&(p=u.__once||function y(v){this.removeEventListener(l,y,f),u.call(this,v)},u.__once=p),a.addEventListener(l,p,Ef?o:f)}a.addEventListener(l,u,o)}function jS(a,l,u,o){var c=o&&typeof o!="boolean"?o.capture:o;a.removeEventListener(l,u,c),u.__once&&a.removeEventListener(l,u.__once,c)}function Jo(a,l,u,o){return TS(a,l,u,o),function(){jS(a,l,u,o)}}function RS(a,l,u,o){if(o===void 0&&(o=!0),a){var c=document.createEvent("HTMLEvents");c.initEvent(l,u,o),a.dispatchEvent(c)}}function OS(a){var l=Nn(a,"transitionDuration")||"",u=l.indexOf("ms")===-1?1e3:1;return parseFloat(l)*u}function zS(a,l,u){u===void 0&&(u=5);var o=!1,c=setTimeout(function(){o||RS(a,"transitionend",!0)},l+u),f=Jo(a,"transitionend",function(){o=!0},{once:!0});return function(){clearTimeout(c),f()}}function _S(a,l,u,o){u==null&&(u=OS(a)||0);var c=zS(a,u,o),f=Jo(a,"transitionend",l);return function(){c(),f()}}function gm(a,l){const u=Nn(a,l)||"",o=u.indexOf("ms")===-1?1e3:1;return parseFloat(u)*o}function Xf(a,l){const u=gm(a,"transitionDuration"),o=gm(a,"transitionDelay"),c=_S(a,f=>{f.target===a&&(c(),l(f))},u+o)}function Ql(...a){return a.filter(l=>l!=null).reduce((l,u)=>{if(typeof u!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return l===null?u:function(...c){l.apply(this,c),u.apply(this,c)}},null)}function Hg(a){a.offsetHeight}const vm=a=>!a||typeof a=="function"?a:l=>{a.current=l};function MS(a,l){const u=vm(a),o=vm(l);return c=>{u&&u(c),o&&o(c)}}function AS(a,l){return b.useMemo(()=>MS(a,l),[a,l])}function DS(a){return a&&"setState"in a?Oi.findDOMNode(a):a??null}const ru=qe.forwardRef(({onEnter:a,onEntering:l,onEntered:u,onExit:o,onExiting:c,onExited:f,addEndListener:p,children:y,childRef:v,...m},x)=>{const S=b.useRef(null),w=AS(S,v),A=M=>{w(DS(M))},R=M=>F=>{M&&S.current&&M(S.current,F)},Y=b.useCallback(R(a),[a]),L=b.useCallback(R(l),[l]),K=b.useCallback(R(u),[u]),_=b.useCallback(R(o),[o]),q=b.useCallback(R(c),[c]),X=b.useCallback(R(f),[f]),k=b.useCallback(R(p),[p]);return h.jsx(Un,{ref:x,...m,onEnter:Y,onEntered:K,onEntering:L,onExit:_,onExited:X,onExiting:q,addEndListener:k,nodeRef:S,children:typeof y=="function"?(M,F)=>y(M,{...F,ref:A}):qe.cloneElement(y,{ref:A})})});ru.displayName="TransitionWrapper";const NS={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function kS(a,l){const u=`offset${a[0].toUpperCase()}${a.slice(1)}`,o=l[u],c=NS[a];return o+parseInt(Nn(l,c[0]),10)+parseInt(Nn(l,c[1]),10)}const LS={[fa]:"collapse",[Pl]:"collapsing",[en]:"collapsing",[Mn]:"collapse show"},$g=qe.forwardRef(({onEnter:a,onEntering:l,onEntered:u,onExit:o,onExiting:c,className:f,children:p,dimension:y="height",in:v=!1,timeout:m=300,mountOnEnter:x=!1,unmountOnExit:S=!1,appear:w=!1,getDimensionValue:A=kS,...R},Y)=>{const L=typeof y=="function"?y():y,K=b.useMemo(()=>Ql(M=>{M.style[L]="0"},a),[L,a]),_=b.useMemo(()=>Ql(M=>{const F=`scroll${L[0].toUpperCase()}${L.slice(1)}`;M.style[L]=`${M[F]}px`},l),[L,l]),q=b.useMemo(()=>Ql(M=>{M.style[L]=null},u),[L,u]),X=b.useMemo(()=>Ql(M=>{M.style[L]=`${A(L,M)}px`,Hg(M)},o),[o,A,L]),k=b.useMemo(()=>Ql(M=>{M.style[L]=null},c),[L,c]);return h.jsx(ru,{ref:Y,addEndListener:Xf,...R,"aria-expanded":R.role?v:null,onEnter:K,onEntering:_,onEntered:q,onExit:X,onExiting:k,childRef:qi(p),in:v,timeout:m,mountOnEnter:x,unmountOnExit:S,appear:w,children:(M,F)=>qe.cloneElement(p,{...F,className:at(f,p.props.className,LS[M],L==="width"&&"collapse-horizontal")})})});$g.displayName="Collapse";function BS(a){const l=b.useRef(a);return b.useEffect(()=>{l.current=a},[a]),l}function ou(a){const l=BS(a);return b.useCallback(function(...u){return l.current&&l.current(...u)},[l])}const US=(a=>b.forwardRef((l,u)=>h.jsx("div",{...l,ref:u,className:at(l.className,a)})));function HS(a){const l=b.useRef(a);return b.useEffect(()=>{l.current=a},[a]),l}function An(a){const l=HS(a);return b.useCallback(function(...u){return l.current&&l.current(...u)},[l])}function $S(){const a=b.useRef(!0),l=b.useRef(()=>a.current);return b.useEffect(()=>(a.current=!0,()=>{a.current=!1}),[]),l.current}function qS(a){const l=b.useRef(null);return b.useEffect(()=>{l.current=a}),l.current}const YS=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",GS=typeof document<"u",ym=GS||YS?b.useLayoutEffect:b.useEffect,XS=["as","disabled"];function VS(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}function QS(a){return!a||a.trim()==="#"}function qg({tagName:a,disabled:l,href:u,target:o,rel:c,role:f,onClick:p,tabIndex:y=0,type:v}){a||(u!=null||o!=null||c!=null?a="a":a="button");const m={tagName:a};if(a==="button")return[{type:v||"button",disabled:l},m];const x=w=>{if((l||a==="a"&&QS(u))&&w.preventDefault(),l){w.stopPropagation();return}p?.(w)},S=w=>{w.key===" "&&(w.preventDefault(),x(w))};return a==="a"&&(u||(u="#"),l&&(u=void 0)),[{role:f??"button",disabled:void 0,tabIndex:l?void 0:y,href:u,target:a==="a"?o:void 0,"aria-disabled":l||void 0,rel:a==="a"?c:void 0,onClick:x,onKeyDown:S},m]}const Yg=b.forwardRef((a,l)=>{let{as:u,disabled:o}=a,c=VS(a,XS);const[f,{tagName:p}]=qg(Object.assign({tagName:u,disabled:o},c));return h.jsx(p,Object.assign({},c,f,{ref:l}))});Yg.displayName="Button";const ZS=["onKeyDown"];function KS(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}function JS(a){return!a||a.trim()==="#"}const Gg=b.forwardRef((a,l)=>{let{onKeyDown:u}=a,o=KS(a,ZS);const[c]=qg(Object.assign({tagName:"a"},o)),f=An(p=>{c.onKeyDown(p),u?.(p)});return JS(o.href)||o.role==="button"?h.jsx("a",Object.assign({ref:l},o,c,{onKeyDown:f})):h.jsx("a",Object.assign({ref:l},o,{onKeyDown:u}))});Gg.displayName="Anchor";const FS={[en]:"show",[Mn]:"show"},Xg=b.forwardRef(({className:a,children:l,transitionClasses:u={},onEnter:o,...c},f)=>{const p={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...c},y=b.useCallback((v,m)=>{Hg(v),o?.(v,m)},[o]);return h.jsx(ru,{ref:f,addEndListener:Xf,...p,onEnter:y,childRef:qi(l),children:(v,m)=>b.cloneElement(l,{...m,className:at("fade",a,l.props.className,FS[v],u[v])})})});Xg.displayName="Fade";const WS={"aria-label":tf.string,onClick:tf.func,variant:tf.oneOf(["white"])},Vf=b.forwardRef(({className:a,variant:l,"aria-label":u="Close",...o},c)=>h.jsx("button",{ref:c,type:"button",className:at("btn-close",l&&`btn-close-${l}`,a),"aria-label":u,...o}));Vf.displayName="CloseButton";Vf.propTypes=WS;const Vg=b.createContext(null);Vg.displayName="CardHeaderContext";const Qg=b.forwardRef(({bsPrefix:a,fluid:l=!1,as:u="div",className:o,...c},f)=>{const p=wt(a,"container"),y=typeof l=="string"?`-${l}`:"-fluid";return h.jsx(u,{ref:f,...c,className:at(o,l?`${p}${y}`:p)})});Qg.displayName="Container";var PS=Function.prototype.bind.call(Function.prototype.call,[].slice);function Na(a,l){return PS(a.querySelectorAll(l))}function IS(){const[,a]=b.useReducer(l=>l+1,0);return a}function bm(a,l){if(a.contains)return a.contains(l);if(a.compareDocumentPosition)return a===l||!!(a.compareDocumentPosition(l)&16)}const Fo=b.createContext(null),Qf=(a,l=null)=>a!=null?String(a):l||null,Zf=b.createContext(null);Zf.displayName="NavContext";const e8="data-rr-ui-",t8="rrUi";function uu(a){return`${e8}${a}`}function n8(a){return`${t8}${a}`}const Zg=b.createContext(lu?window:void 0);Zg.Provider;function Kf(){return b.useContext(Zg)}const a8=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",i8=typeof document<"u",l8=i8||a8?b.useLayoutEffect:b.useEffect,Yi=b.createContext(null);Yi.displayName="NavbarContext";const xm=a=>!a||typeof a=="function"?a:l=>{a.current=l};function r8(a,l){const u=xm(a),o=xm(l);return c=>{u&&u(c),o&&o(c)}}function su(a,l){return b.useMemo(()=>r8(a,l),[a,l])}const Kg=b.createContext(null),o8=["as","active","eventKey"];function u8(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}function Jg({key:a,onClick:l,active:u,id:o,role:c,disabled:f}){const p=b.useContext(Fo),y=b.useContext(Zf),v=b.useContext(Kg);let m=u;const x={role:c};if(y){!c&&y.role==="tablist"&&(x.role="tab");const S=y.getControllerId(a??null),w=y.getControlledId(a??null);x[uu("event-key")]=a,x.id=S||o,m=u==null&&a!=null?y.activeKey===a:u,(m||!(v!=null&&v.unmountOnExit)&&!(v!=null&&v.mountOnEnter))&&(x["aria-controls"]=w)}return x.role==="tab"&&(x["aria-selected"]=m,m||(x.tabIndex=-1),f&&(x.tabIndex=-1,x["aria-disabled"]=!0)),x.onClick=An(S=>{f||(l?.(S),a!=null&&p&&!S.isPropagationStopped()&&p(a,S))}),[x,{isActive:m}]}const Fg=b.forwardRef((a,l)=>{let{as:u=Yg,active:o,eventKey:c}=a,f=u8(a,o8);const[p,y]=Jg(Object.assign({key:Qf(c,f.href),active:o},f));return p[uu("active")]=y.isActive,h.jsx(u,Object.assign({},f,p,{ref:l}))});Fg.displayName="NavItem";const s8=["as","onSelect","activeKey","role","onKeyDown"];function c8(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}const Sm=()=>{},wm=uu("event-key"),Wg=b.forwardRef((a,l)=>{let{as:u="div",onSelect:o,activeKey:c,role:f,onKeyDown:p}=a,y=c8(a,s8);const v=IS(),m=b.useRef(!1),x=b.useContext(Fo),S=b.useContext(Kg);let w,A;S&&(f=f||"tablist",c=S.activeKey,w=S.getControlledId,A=S.getControllerId);const R=b.useRef(null),Y=q=>{const X=R.current;if(!X)return null;const k=Na(X,`[${wm}]:not([aria-disabled=true])`),M=X.querySelector("[aria-selected=true]");if(!M||M!==document.activeElement)return null;const F=k.indexOf(M);if(F===-1)return null;let B=F+q;return B>=k.length&&(B=0),B<0&&(B=k.length-1),k[B]},L=(q,X)=>{q!=null&&(o?.(q,X),x?.(q,X))},K=q=>{if(p?.(q),!S)return;let X;switch(q.key){case"ArrowLeft":case"ArrowUp":X=Y(-1);break;case"ArrowRight":case"ArrowDown":X=Y(1);break;default:return}X&&(q.preventDefault(),L(X.dataset[n8("EventKey")]||null,q),m.current=!0,v())};b.useEffect(()=>{if(R.current&&m.current){const q=R.current.querySelector(`[${wm}][aria-selected=true]`);q?.focus()}m.current=!1});const _=su(l,R);return h.jsx(Fo.Provider,{value:L,children:h.jsx(Zf.Provider,{value:{role:f,activeKey:Qf(c),getControlledId:w||Sm,getControllerId:A||Sm},children:h.jsx(u,Object.assign({},y,{onKeyDown:K,ref:_,role:f}))})})});Wg.displayName="Nav";const f8=Object.assign(Wg,{Item:Fg});function af(a){a===void 0&&(a=Gf());try{var l=a.activeElement;return!l||!l.nodeName?null:l}catch{return a.body}}function d8(a){const l=b.useRef(a);return l.current=a,l}function h8(a){const l=d8(a);b.useEffect(()=>()=>l.current(),[])}function p8(a=document){const l=a.defaultView;return Math.abs(l.innerWidth-a.documentElement.clientWidth)}const Em=uu("modal-open");class Jf{constructor({ownerDocument:l,handleContainerOverflow:u=!0,isRTL:o=!1}={}){this.handleContainerOverflow=u,this.isRTL=o,this.modals=[],this.ownerDocument=l}getScrollbarWidth(){return p8(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(l){}removeModalAttributes(l){}setContainerStyle(l){const u={overflow:"hidden"},o=this.isRTL?"paddingLeft":"paddingRight",c=this.getElement();l.style={overflow:c.style.overflow,[o]:c.style[o]},l.scrollBarWidth&&(u[o]=`${parseInt(Nn(c,o)||"0",10)+l.scrollBarWidth}px`),c.setAttribute(Em,""),Nn(c,u)}reset(){[...this.modals].forEach(l=>this.remove(l))}removeContainerStyle(l){const u=this.getElement();u.removeAttribute(Em),Object.assign(u.style,l.style)}add(l){let u=this.modals.indexOf(l);return u!==-1||(u=this.modals.length,this.modals.push(l),this.setModalAttributes(l),u!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),u}remove(l){const u=this.modals.indexOf(l);u!==-1&&(this.modals.splice(u,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(l))}isTopModal(l){return!!this.modals.length&&this.modals[this.modals.length-1]===l}}const lf=(a,l)=>lu?a==null?(l||Gf()).body:(typeof a=="function"&&(a=a()),a&&"current"in a&&(a=a.current),a&&("nodeType"in a||a.getBoundingClientRect)?a:null):null;function m8(a,l){const u=Kf(),[o,c]=b.useState(()=>lf(a,u?.document));if(!o){const f=lf(a);f&&c(f)}return b.useEffect(()=>{},[l,o]),b.useEffect(()=>{const f=lf(a);f!==o&&c(f)},[a,o]),o}function g8({children:a,in:l,onExited:u,mountOnEnter:o,unmountOnExit:c}){const f=b.useRef(null),p=b.useRef(l),y=An(u);b.useEffect(()=>{l?p.current=!0:y(f.current)},[l,y]);const v=su(f,qi(a)),m=b.cloneElement(a,{ref:v});return l?m:c||!p.current&&o?null:m}const v8=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function y8(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}function b8(a){let{onEnter:l,onEntering:u,onEntered:o,onExit:c,onExiting:f,onExited:p,addEndListener:y,children:v}=a,m=y8(a,v8);const x=b.useRef(null),S=su(x,qi(v)),w=X=>k=>{X&&x.current&&X(x.current,k)},A=b.useCallback(w(l),[l]),R=b.useCallback(w(u),[u]),Y=b.useCallback(w(o),[o]),L=b.useCallback(w(c),[c]),K=b.useCallback(w(f),[f]),_=b.useCallback(w(p),[p]),q=b.useCallback(w(y),[y]);return Object.assign({},m,{nodeRef:x},l&&{onEnter:A},u&&{onEntering:R},o&&{onEntered:Y},c&&{onExit:L},f&&{onExiting:K},p&&{onExited:_},y&&{addEndListener:q},{children:typeof v=="function"?(X,k)=>v(X,Object.assign({},k,{ref:S})):b.cloneElement(v,{ref:S})})}const x8=["component"];function S8(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}const w8=b.forwardRef((a,l)=>{let{component:u}=a,o=S8(a,x8);const c=b8(o);return h.jsx(u,Object.assign({ref:l},c))});function E8({in:a,onTransition:l}){const u=b.useRef(null),o=b.useRef(!0),c=An(l);return ym(()=>{if(!u.current)return;let f=!1;return c({in:a,element:u.current,initial:o.current,isStale:()=>f}),()=>{f=!0}},[a,c]),ym(()=>(o.current=!1,()=>{o.current=!0}),[]),u}function C8({children:a,in:l,onExited:u,onEntered:o,transition:c}){const[f,p]=b.useState(!l);l&&f&&p(!1);const y=E8({in:!!l,onTransition:m=>{const x=()=>{m.isStale()||(m.in?o?.(m.element,m.initial):(p(!0),u?.(m.element)))};Promise.resolve(c(m)).then(x,S=>{throw m.in||p(!0),S})}}),v=su(y,qi(a));return f&&!l?null:b.cloneElement(a,{ref:v})}function Cm(a,l,u){return a?h.jsx(w8,Object.assign({},u,{component:a})):l?h.jsx(C8,Object.assign({},u,{transition:l})):h.jsx(g8,Object.assign({},u))}const T8=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function j8(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}let rf;function R8(a){return rf||(rf=new Jf({ownerDocument:a?.document})),rf}function O8(a){const l=Kf(),u=a||R8(l),o=b.useRef({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>u.add(o.current),remove:()=>u.remove(o.current),isTopModal:()=>u.isTopModal(o.current),setDialogRef:b.useCallback(c=>{o.current.dialog=c},[]),setBackdropRef:b.useCallback(c=>{o.current.backdrop=c},[])})}const Pg=b.forwardRef((a,l)=>{let{show:u=!1,role:o="dialog",className:c,style:f,children:p,backdrop:y=!0,keyboard:v=!0,onBackdropClick:m,onEscapeKeyDown:x,transition:S,runTransition:w,backdropTransition:A,runBackdropTransition:R,autoFocus:Y=!0,enforceFocus:L=!0,restoreFocus:K=!0,restoreFocusOptions:_,renderDialog:q,renderBackdrop:X=Be=>h.jsx("div",Object.assign({},Be)),manager:k,container:M,onShow:F,onHide:B=()=>{},onExit:Z,onExited:le,onExiting:J,onEnter:N,onEntering:te,onEntered:ne}=a,j=j8(a,T8);const z=Kf(),$=m8(M),W=O8(k),re=$S(),ce=qS(u),[T,V]=b.useState(!u),ie=b.useRef(null);b.useImperativeHandle(l,()=>W,[W]),lu&&!ce&&u&&(ie.current=af(z?.document)),u&&T&&V(!1);const ae=An(()=>{if(W.add(),Et.current=Jo(document,"keydown",Le),Ce.current=Jo(document,"focus",()=>setTimeout(he),!0),F&&F(),Y){var Be,Ha;const Gi=af((Be=(Ha=W.dialog)==null?void 0:Ha.ownerDocument)!=null?Be:z?.document);W.dialog&&Gi&&!bm(W.dialog,Gi)&&(ie.current=Gi,W.dialog.focus())}}),se=An(()=>{if(W.remove(),Et.current==null||Et.current(),Ce.current==null||Ce.current(),K){var Be;(Be=ie.current)==null||Be.focus==null||Be.focus(_),ie.current=null}});b.useEffect(()=>{!u||!$||ae()},[u,$,ae]),b.useEffect(()=>{T&&se()},[T,se]),h8(()=>{se()});const he=An(()=>{if(!L||!re()||!W.isTopModal())return;const Be=af(z?.document);W.dialog&&Be&&!bm(W.dialog,Be)&&W.dialog.focus()}),ye=An(Be=>{Be.target===Be.currentTarget&&(m?.(Be),y===!0&&B())}),Le=An(Be=>{v&&ES(Be)&&W.isTopModal()&&(x?.(Be),Be.defaultPrevented||B())}),Ce=b.useRef(),Et=b.useRef(),Kt=(...Be)=>{V(!0),le?.(...Be)};if(!$)return null;const ht=Object.assign({role:o,ref:W.setDialogRef,"aria-modal":o==="dialog"?!0:void 0},j,{style:f,className:c,tabIndex:-1});let Ua=q?q(ht):h.jsx("div",Object.assign({},ht,{children:b.cloneElement(p,{role:"document"})}));Ua=Cm(S,w,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!u,onExit:Z,onExiting:J,onExited:Kt,onEnter:N,onEntering:te,onEntered:ne,children:Ua});let Lt=null;return y&&(Lt=X({ref:W.setBackdropRef,onClick:ye}),Lt=Cm(A,R,{in:!!u,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Lt})),h.jsx(h.Fragment,{children:Oi.createPortal(h.jsxs(h.Fragment,{children:[Lt,Ua]}),$)})});Pg.displayName="Modal";const z8=Object.assign(Pg,{Manager:Jf});function _8(a,l){return a.classList?a.classList.contains(l):(" "+(a.className.baseVal||a.className)+" ").indexOf(" "+l+" ")!==-1}function M8(a,l){a.classList?a.classList.add(l):_8(a,l)||(typeof a.className=="string"?a.className=a.className+" "+l:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+l))}function Tm(a,l){return a.replace(new RegExp("(^|\\s)"+l+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function A8(a,l){a.classList?a.classList.remove(l):typeof a.className=="string"?a.className=Tm(a.className,l):a.setAttribute("class",Tm(a.className&&a.className.baseVal||"",l))}const ji={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Ig extends Jf{adjustAndStore(l,u,o){const c=u.style[l];u.dataset[l]=c,Nn(u,{[l]:`${parseFloat(Nn(u,l))+o}px`})}restore(l,u){const o=u.dataset[l];o!==void 0&&(delete u.dataset[l],Nn(u,{[l]:o}))}setContainerStyle(l){super.setContainerStyle(l);const u=this.getElement();if(M8(u,"modal-open"),!l.scrollBarWidth)return;const o=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";Na(u,ji.FIXED_CONTENT).forEach(f=>this.adjustAndStore(o,f,l.scrollBarWidth)),Na(u,ji.STICKY_CONTENT).forEach(f=>this.adjustAndStore(c,f,-l.scrollBarWidth)),Na(u,ji.NAVBAR_TOGGLER).forEach(f=>this.adjustAndStore(c,f,l.scrollBarWidth))}removeContainerStyle(l){super.removeContainerStyle(l);const u=this.getElement();A8(u,"modal-open");const o=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";Na(u,ji.FIXED_CONTENT).forEach(f=>this.restore(o,f)),Na(u,ji.STICKY_CONTENT).forEach(f=>this.restore(c,f)),Na(u,ji.NAVBAR_TOGGLER).forEach(f=>this.restore(c,f))}}let of;function D8(a){return of||(of=new Ig(a)),of}const ev=b.createContext({onHide(){}}),tv=b.forwardRef(({closeLabel:a="Close",closeVariant:l,closeButton:u=!1,onHide:o,children:c,...f},p)=>{const y=b.useContext(ev),v=ou(()=>{y?.onHide(),o?.()});return h.jsxs("div",{ref:p,...f,children:[c,u&&h.jsx(Vf,{"aria-label":a,variant:l,onClick:v})]})});tv.displayName="AbstractModalHeader";const nv=b.forwardRef(({className:a,bsPrefix:l,as:u="div",...o},c)=>(l=wt(l,"nav-item"),h.jsx(u,{ref:c,className:at(a,l),...o})));nv.displayName="NavItem";const av=b.forwardRef(({bsPrefix:a,className:l,as:u=Gg,active:o,eventKey:c,disabled:f=!1,...p},y)=>{a=wt(a,"nav-link");const[v,m]=Jg({key:Qf(c,p.href),active:o,disabled:f,...p});return h.jsx(u,{...p,...v,ref:y,disabled:f,className:at(l,a,f&&"disabled",m.isActive&&"active")})});av.displayName="NavLink";const iv=b.forwardRef((a,l)=>{const{as:u="div",bsPrefix:o,variant:c,fill:f=!1,justify:p=!1,navbar:y,navbarScroll:v,className:m,activeKey:x,...S}=Lg(a,{activeKey:"onSelect"}),w=wt(o,"nav");let A,R,Y=!1;const L=b.useContext(Yi),K=b.useContext(Vg);return L?(A=L.bsPrefix,Y=y??!0):K&&({cardHeaderBsPrefix:R}=K),h.jsx(f8,{as:u,ref:l,activeKey:x,className:at(m,{[w]:!Y,[`${A}-nav`]:Y,[`${A}-nav-scroll`]:Y&&v,[`${R}-${c}`]:!!R,[`${w}-${c}`]:!!c,[`${w}-fill`]:f,[`${w}-justified`]:p}),...S})});iv.displayName="Nav";const N8=Object.assign(iv,{Item:nv,Link:av}),lv=b.forwardRef(({bsPrefix:a,className:l,as:u,...o},c)=>{a=wt(a,"navbar-brand");const f=u||(o.href?"a":"span");return h.jsx(f,{...o,ref:c,className:at(l,a)})});lv.displayName="NavbarBrand";const rv=b.forwardRef(({children:a,bsPrefix:l,...u},o)=>{l=wt(l,"navbar-collapse");const c=b.useContext(Yi);return h.jsx($g,{in:!!(c&&c.expanded),...u,children:h.jsx("div",{ref:o,className:l,children:a})})});rv.displayName="NavbarCollapse";const ov=b.forwardRef(({bsPrefix:a,className:l,children:u,label:o="Toggle navigation",as:c="button",onClick:f,...p},y)=>{a=wt(a,"navbar-toggler");const{onToggle:v,expanded:m}=b.useContext(Yi)||{},x=ou(S=>{f&&f(S),v&&v()});return c==="button"&&(p.type="button"),h.jsx(c,{...p,ref:y,onClick:x,"aria-label":o,className:at(l,a,!m&&"collapsed"),children:u||h.jsx("span",{className:`${a}-icon`})})});ov.displayName="NavbarToggle";const Tf=new WeakMap,jm=(a,l)=>{if(!a||!l)return;const u=Tf.get(l)||new Map;Tf.set(l,u);let o=u.get(a);return o||(o=l.matchMedia(a),o.refCount=0,u.set(o.media,o)),o};function k8(a,l=typeof window>"u"?void 0:window){const u=jm(a,l),[o,c]=b.useState(()=>u?u.matches:!1);return l8(()=>{let f=jm(a,l);if(!f)return c(!1);let p=Tf.get(l);const y=()=>{c(f.matches)};return f.refCount++,f.addListener(y),y(),()=>{f.removeListener(y),f.refCount--,f.refCount<=0&&p?.delete(f.media),f=void 0}},[a]),o}function L8(a){const l=Object.keys(a);function u(y,v){return y===v?v:y?`${y} and ${v}`:v}function o(y){return l[Math.min(l.indexOf(y)+1,l.length-1)]}function c(y){const v=o(y);let m=a[v];return typeof m=="number"?m=`${m-.2}px`:m=`calc(${m} - 0.2px)`,`(max-width: ${m})`}function f(y){let v=a[y];return typeof v=="number"&&(v=`${v}px`),`(min-width: ${v})`}function p(y,v,m){let x;typeof y=="object"?(x=y,m=v,v=!0):(v=v||!0,x={[y]:v});let S=b.useMemo(()=>Object.entries(x).reduce((w,[A,R])=>((R==="up"||R===!0)&&(w=u(w,f(A))),(R==="down"||R===!0)&&(w=u(w,c(A))),w),""),[JSON.stringify(x)]);return k8(S,m)}return p}const B8=L8({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),uv=b.forwardRef(({className:a,bsPrefix:l,as:u="div",...o},c)=>(l=wt(l,"offcanvas-body"),h.jsx(u,{ref:c,className:at(a,l),...o})));uv.displayName="OffcanvasBody";const U8={[en]:"show",[Mn]:"show"},sv=b.forwardRef(({bsPrefix:a,className:l,children:u,in:o=!1,mountOnEnter:c=!1,unmountOnExit:f=!1,appear:p=!1,...y},v)=>(a=wt(a,"offcanvas"),h.jsx(ru,{ref:v,addEndListener:Xf,in:o,mountOnEnter:c,unmountOnExit:f,appear:p,...y,childRef:qi(u),children:(m,x)=>b.cloneElement(u,{...x,className:at(l,u.props.className,(m===en||m===Pl)&&`${a}-toggling`,U8[m])})})));sv.displayName="OffcanvasToggling";const cv=b.forwardRef(({bsPrefix:a,className:l,closeLabel:u="Close",closeButton:o=!1,...c},f)=>(a=wt(a,"offcanvas-header"),h.jsx(tv,{ref:f,...c,className:at(l,a),closeLabel:u,closeButton:o})));cv.displayName="OffcanvasHeader";const H8=US("h5"),fv=b.forwardRef(({className:a,bsPrefix:l,as:u=H8,...o},c)=>(l=wt(l,"offcanvas-title"),h.jsx(u,{ref:c,className:at(a,l),...o})));fv.displayName="OffcanvasTitle";function $8(a){return h.jsx(sv,{...a})}function q8(a){return h.jsx(Xg,{...a})}const dv=b.forwardRef(({bsPrefix:a,className:l,children:u,"aria-labelledby":o,placement:c="start",responsive:f,show:p=!1,backdrop:y=!0,keyboard:v=!0,scroll:m=!1,onEscapeKeyDown:x,onShow:S,onHide:w,container:A,autoFocus:R=!0,enforceFocus:Y=!0,restoreFocus:L=!0,restoreFocusOptions:K,onEntered:_,onExit:q,onExiting:X,onEnter:k,onEntering:M,onExited:F,backdropClassName:B,manager:Z,renderStaticNode:le=!1,...J},N)=>{const te=b.useRef();a=wt(a,"offcanvas");const[ne,j]=b.useState(!1),z=ou(w),$=B8(f||"xs","up");b.useEffect(()=>{j(f?p&&!$:p)},[p,f,$]);const W=b.useMemo(()=>({onHide:z}),[z]);function re(){return Z||(m?(te.current||(te.current=new Ig({handleContainerOverflow:!1})),te.current):D8())}const ce=(ae,...se)=>{ae&&(ae.style.visibility="visible"),k?.(ae,...se)},T=(ae,...se)=>{ae&&(ae.style.visibility=""),F?.(...se)},V=b.useCallback(ae=>h.jsx("div",{...ae,className:at(`${a}-backdrop`,B)}),[B,a]),ie=ae=>h.jsx("div",{...ae,...J,className:at(l,f?`${a}-${f}`:a,`${a}-${c}`),"aria-labelledby":o,children:u});return h.jsxs(h.Fragment,{children:[!ne&&(f||le)&&ie({}),h.jsx(ev.Provider,{value:W,children:h.jsx(z8,{show:ne,ref:N,backdrop:y,container:A,keyboard:v,autoFocus:R,enforceFocus:Y&&!m,restoreFocus:L,restoreFocusOptions:K,onEscapeKeyDown:x,onShow:S,onHide:z,onEnter:ce,onEntering:M,onEntered:_,onExit:q,onExiting:X,onExited:T,manager:re(),transition:$8,backdropTransition:q8,renderBackdrop:V,renderDialog:ie})})]})});dv.displayName="Offcanvas";const Y8=Object.assign(dv,{Body:uv,Header:cv,Title:fv}),hv=b.forwardRef(({onHide:a,...l},u)=>{const o=b.useContext(Yi),c=ou(()=>{o==null||o.onToggle==null||o.onToggle(),a?.()});return h.jsx(Y8,{ref:u,show:!!(o!=null&&o.expanded),...l,renderStaticNode:!0,onHide:c})});hv.displayName="NavbarOffcanvas";const pv=b.forwardRef(({className:a,bsPrefix:l,as:u="span",...o},c)=>(l=wt(l,"navbar-text"),h.jsx(u,{ref:c,className:at(a,l),...o})));pv.displayName="NavbarText";const mv=b.forwardRef((a,l)=>{const{bsPrefix:u,expand:o=!0,variant:c="light",bg:f,fixed:p,sticky:y,className:v,as:m="nav",expanded:x,onToggle:S,onSelect:w,collapseOnSelect:A=!1,...R}=Lg(a,{expanded:"onToggle"}),Y=wt(u,"navbar"),L=b.useCallback((...q)=>{w?.(...q),A&&x&&S?.(!1)},[w,A,x,S]);R.role===void 0&&m!=="nav"&&(R.role="navigation");let K=`${Y}-expand`;typeof o=="string"&&(K=`${K}-${o}`);const _=b.useMemo(()=>({onToggle:()=>S?.(!x),bsPrefix:Y,expanded:!!x,expand:o}),[Y,x,o,S]);return h.jsx(Yi.Provider,{value:_,children:h.jsx(Fo.Provider,{value:L,children:h.jsx(m,{ref:l,...R,className:at(v,Y,o&&K,c&&`${Y}-${c}`,f&&`bg-${f}`,y&&`sticky-${y}`,p&&`fixed-${p}`)})})})});mv.displayName="Navbar";const G8=Object.assign(mv,{Brand:lv,Collapse:rv,Offcanvas:hv,Text:pv,Toggle:ov});function X8(a){return Re({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M149.688 85.625c-1.234.005-2.465.033-3.72.063-33.913.806-75.48 10.704-127.25 33.718V362.78c60.77-28.82 106.718-37.067 144.22-33.092 33.502 3.55 59.685 16.66 83.562 31.187v-242.97c-23.217-17.744-50.195-30.04-85.97-32-3.52-.192-7.142-.296-10.843-.28zm211.968 0c-3.7-.016-7.322.088-10.844.28-35.773 1.96-62.75 14.256-85.968 32v242.97c23.876-14.527 50.06-27.637 83.562-31.188 37.502-3.974 83.45 4.272 144.22 33.094V119.407c-51.77-23.014-93.337-32.912-127.25-33.72-1.255-.028-2.486-.056-3.72-.06zm5.72 261.78c-1.038-.002-2.074.017-3.095.033-4.808.075-9.43.37-13.905.843-33.932 3.597-59.603 17.976-85.53 34.44v.28c-6.554-1.99-13.02-2.37-19.408-.97-25.566-16.177-51.003-30.202-84.468-33.75-5.595-.592-11.44-.883-17.564-.842-32.04.213-71.833 9.778-124.687 35.937v42.53c60.77-28.823 106.714-37.067 144.218-33.092 18.545 1.965 34.837 6.845 49.75 13.28-4.682 6.064-9.308 13.268-13.875 21.688h117.156c-5.93-8.22-11.798-15.414-17.626-21.56 14.996-6.503 31.39-11.43 50.062-13.408 37.503-3.974 83.448 4.27 144.22 33.094v-42.53c-53.16-26.31-93.115-35.863-125.25-35.97z"},child:[]}]})(a)}function V8(a){return Re({attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",fill:"currentColor"},child:[]}]})(a)}const Q8=E(G8)`
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
`,Z8=E.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 8px;
`,K8=E.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,J8=E.div`
  justify-self: center;
`,F8=E.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`,W8=E.button`
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
`,P8=E(Hi)`
  padding: 10px 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px; /* space between icon and text */
`,I8=E(X8)`
  width: 28px;
  height: 28px;
  flex: 0 0 28px;
  color: #f0703c /* keep high contrast; adjust to your brand */
`,e7=E.div`
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
`;function t7(){const a=()=>{console.log("Toggled theme")};return h.jsx("div",{className:"topbar-wrapper",children:h.jsx(Q8,{className:"shadow-sm d-lg-none",children:h.jsx(Qg,{fluid:!0,className:"px-3",children:h.jsxs(Z8,{children:[h.jsx(K8,{children:h.jsxs(P8,{to:"/instalearn/","aria-label":"Go to home",children:[h.jsx(I8,{"aria-hidden":"true"}),h.jsx(e7,{children:"InstaLearn"})]})}),h.jsx(J8,{}),h.jsx(F8,{children:h.jsx(W8,{type:"button",onClick:a,"aria-label":"Toggle",children:h.jsx(V8,{size:20})})})]})})})})}const n7=cn`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,a7=E.aside`
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
`,i7=E(Hi)`
  padding: 25px 12px 16px 12px;
  margin-bottom: 19px;
  margin-left: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: padding 200ms ease, margin 200ms ease;
`,l7=E.div`
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
`,r7=E.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
`,o7=ha`
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
    animation: ${n7} 4s linear infinite;
    box-shadow: 0 0 8px rgba(0, 245, 255, 0.8);
  }
`,uf=E(Hi)`
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

  ${a=>a.$active&&o7}
`,u7=E.div`
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px solid #dbdbdb;
`,sf=E.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,cf=E.span`
  white-space: nowrap;
  transition: opacity 120ms ease, width 200ms ease;
`;function s7(){const{pathname:a}=Bn(),l=[{to:"/instalearn/",icon:h.jsx(wg,{}),label:"Home"},{to:"/instalearn/teacher",icon:h.jsx(_i,{}),label:"Teacher"},{to:"/instalearn/library",icon:h.jsx(Sg,{}),label:"Library",hasNotification:!0},{to:"/instalearn/notifications",icon:h.jsx(_5,{}),label:"Notifications"},{to:"/instalearn/profile",icon:h.jsx(Cg,{}),label:"Profile"}];return h.jsxs(a7,{children:[h.jsx(i7,{to:"/instalearn/",children:h.jsx(l7,{children:"InstaLearn"})}),h.jsxs(r7,{children:[l.slice(0,-1).map(u=>h.jsxs(uf,{to:u.to,$active:a===u.to,children:[h.jsx(sf,{children:u.icon}),h.jsx(cf,{children:u.label}),u.hasNotification]},u.to)),h.jsxs(uf,{to:l[l.length-1].to,$active:a===l[l.length-1].to,children:[h.jsx(sf,{children:l[l.length-1].icon}),h.jsx(cf,{children:l[l.length-1].label})]})]}),h.jsx(u7,{children:h.jsxs(uf,{to:"/instalearn/more",$active:a==="/instalearn/more",children:[h.jsx(sf,{children:h.jsx(M5,{})}),h.jsx(cf,{children:"More"})]})})]})}const c7=E.div`
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
`,f7=E.div`
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
`,gv=E.div`
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
`,d7=E.div`
  position: relative;
  flex-shrink: 0;
`,h7=E.div`
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
  
  ${gv}:hover & {
    transform: scale(1.05);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }
`,p7=E.div`
  position: absolute;
  bottom: ${a=>a.$width<250?"2px":"4px"};
  right: ${a=>a.$width<250?"0":"2px"};
  width: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  height: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
`,m7=E.div`
  flex: 1;
  min-width: 0;
  display: ${a=>a.$width<180?"none":"block"};
`,g7=E.div`
  font-size: ${a=>a.$width<250?"13px":"14px"};
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,v7=E.div`
  font-size: ${a=>a.$width<250?"11px":"13px"};
  color: #6b7280;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,y7=E.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,b7=E.div`
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
`,x7=E.button`
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
`,S7=E.div`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.$width<250?"8px":"12px"};
  margin-bottom: 32px;
`,vv=E.div`
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
`,w7=E.div`
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
  
  ${vv}:hover & {
    transform: scale(1.05) rotate(5deg);
  }
`,E7=E.div`
  display: flex;
  flex-direction: ${a=>a.$width<200?"column":a.$width<250?"row":"column"};
  align-items: ${a=>a.$width>=200&&a.$width<250?"center":"stretch"};
  flex: 1;
`,C7=E.div`
  flex: 1;
`,T7=E.h4`
  font-size: ${a=>a.$width<250?"12px":"13px"};
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 ${a=>a.$width<250?"2px":"4px"} 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,j7=E.p`
  font-size: ${a=>a.$width<250?"10px":"12px"};
  color: #6b7280;
  margin: 0;
  display: ${a=>a.$width<180?"none":"-webkit-box"};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
`,R7=E.span`
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
`;E.a`
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
`;const O7=({sidebarWidth:a=360})=>{const l={username:"demo_user",name:"Demo User",initials:"DU"},u=[{icon:j1,gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",title:"New Feature: Dark Mode",description:"Enable dark mode for a better night-time experience.",badge:"New",badgeBg:"linear-gradient(135deg, #667eea, #764ba2)"},{icon:A5,gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",title:"Product Tip: Quick Search",description:"Use the search bar to find items faster.",badge:"Tip",badgeBg:"linear-gradient(135deg, #f093fb, #f5576c)"},{icon:z5,gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",title:"Update: Version 2.0",description:"Check out the latest improvements and bug fixes.",badge:"Update",badgeBg:"linear-gradient(135deg, #4facfe, #00f2fe)"}];return h.jsxs(c7,{children:[h.jsx(f7,{children:h.jsxs(gv,{$width:a,children:[h.jsxs(d7,{children:[h.jsx(h7,{$width:a,children:l.initials}),h.jsx(p7,{$width:a})]}),h.jsxs(m7,{$width:a,children:[h.jsx(g7,{$width:a,children:l.username}),h.jsx(v7,{$width:a,children:l.name})]})]})}),h.jsxs(y7,{children:[h.jsxs(b7,{$width:a,$iconColor:"#667eea",children:[h.jsx(j1,{}),h.jsx("span",{children:"Highlights"})]}),h.jsx(x7,{$width:a,children:"See All"})]}),h.jsx(S7,{$width:a,children:u.map((o,c)=>{const f=o.icon;return h.jsxs(vv,{$width:a,$glowColor:o.gradient,children:[h.jsx(R7,{$width:a,$bg:o.badgeBg,children:o.badge}),h.jsxs(E7,{$width:a,children:[h.jsx(w7,{$width:a,$gradient:o.gradient,children:h.jsx(f,{})}),h.jsxs(C7,{children:[h.jsx(T7,{$width:a,children:o.title}),h.jsx(j7,{$width:a,children:o.description})]})]})]},c)})})]})};function z7(){const{pathname:a}=Bn(),l=[["/instalearn/",h.jsx(wg,{})],["/instalearn/teacher",h.jsx(_i,{})],["/instalearn/library",h.jsx(Sg,{})],["/instalearn/profile",h.jsx(Cg,{})]];return h.jsxs(h.Fragment,{children:[h.jsx("style",{children:`
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
      `}),h.jsx(N8,{className:"bottom-nav fixed-bottom d-flex justify-content-around py-2 d-lg-none",children:l.map(([u,o])=>h.jsx(Hi,{to:u,className:`nav-link fs-4 text-white ${a===u?"active":""}`,children:o},u))})]})}const _7={name:"Siddharth Sir",subject:"SST Teacher",bio:"Exploring history, geography & civics 🌍 | Making SST engaging for Classes 6–12 | CBSE Expert",avatar:Tg.teacherProfilePic,concepts:247,students:"1.2K",learns:15,experience:8,bookList:[{title:"SST MARATHON"},{title:"World Geography Simplified"},{title:"Understanding Civics"},{title:"Economics Made Easy"},{title:"Political Science Basics"},{title:"Environment & Society"}]},st=_7,M7=E.div`
  max-width: 1120px;
  margin: 0 auto;
  background: #fff;
  min-height: 100vh;
`,A7=E.div`
  padding: 1rem 1.5rem;
  @media (min-width: 768px) { padding: 1.5rem 2rem; }
  @media (min-width: 1024px) { padding: 2rem 3rem; }
`,D7=E.div`
  display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 1.5rem;
  @media (min-width: 768px) { flex-direction: row; align-items: flex-start; }
`,N7=E.div`
  display: flex; align-items: center; gap: 1.5rem;
  @media (min-width: 768px) { flex-direction: column; align-items: center; }
`,k7=E.div` position: relative; `,L7=E.img`
  width: 5rem; height: 5rem; border-radius: 50%; object-fit: cover; border: 2px solid #e5e7eb;
  @media (min-width: 768px) { width: 8rem; height: 8rem; }
  @media (min-width: 1024px) { width: 10rem; height: 10rem; }
`,B7=E.div`
  position: absolute;
  top: -6px; left: -6px;
  background: #111827; color: #fff; font-size: 0.65rem; font-weight: 700;
  padding: 0.25rem 0.4rem; border-radius: 8px;
  display: inline-flex; align-items: center; gap: 4px;
`,U7=E.div`
  display: flex; flex: 1; justify-content: space-around; text-align: center;
  @media (min-width: 768px) { display: none; }
`,H7=E.div`
  display: none; gap: 2rem; margin-bottom: 1.5rem;
  @media (min-width: 768px) { display: flex; }
`,Ri=E.div`
  font-weight: 600; font-size: 1.125rem;
  span { font-weight: 400; margin-left: 0.25rem; color: #6b7280; }
`,$7=E.div` flex: 1; `,q7=E.div`
  font-weight: 600; font-size: 1rem;
  @media (min-width: 768px) { font-size: 1.125rem; }
`,Y7=E.div`
  font-size: 0.875rem; color: #6b7280;
  @media (min-width: 768px) { font-size: 1rem; }
`,G7=E.div`
  font-size: 0.875rem; margin-top: 0.5rem;
  @media (min-width: 768px) { font-size: 1rem; }
`,X7=E.div`
  font-size: 0.875rem; margin-top: 0.5rem; color: #6b7280;
  @media (min-width: 768px) { font-size: 1rem; }
`,V7=E.div` display: flex; gap: 0.5rem; margin-bottom: 1.5rem; `,Q7=E.button`
  flex: 1; background: #3b82f6; color: #fff; font-weight: 600;
  padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;
  @media (min-width: 768px) { flex: initial; padding: 0.5rem 2rem; font-size: 1rem; }
`,Z7=E.button`
  flex: 1; border: 1px solid #d1d5db; font-weight: 600;
  padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; position: relative;
  @media (min-width: 768px) { flex: initial; padding: 0.5rem 2rem; font-size: 1rem; }
  &[data-joined="true"] {
    background: #10b9810f; border-color: #10b981; color: #065f46;
  }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,K7=E.button`
  border: 1px solid #d1d5db; padding: 0.25rem 1rem; border-radius: 0.5rem;
`,J7=E.div`
  display: ${({hidden:a})=>a?"none":"flex"};
  align-items: center; justify-content: space-between;
  gap: 0.75rem; padding: 0.75rem 1rem; border: 1px dashed #d1d5db;
  border-radius: 12px; background: #f9fafb; color: #111827; margin-bottom: 1rem;
`,F7=E.div`
  font-size: 0.9rem; display: flex; align-items: center; gap: 8px;
  svg { flex-shrink: 0; }
`,W7=E.button`
  border: 1px solid #111827; background: #111827; color: #fff;
  border-radius: 10px; padding: 0.5rem 0.85rem; font-weight: 700; font-size: 0.875rem;
`,P7=E.div` margin-bottom: 1.5rem; `,I7=E.div`
  display: flex; gap: 1rem; overflow-x: auto; padding-bottom: 0.5rem;
`,ew=E.div`
  display: flex; flex-direction: column; align-items: center; min-width: fit-content; cursor: pointer; position: relative;
`,tw=E.div`
  position: absolute; inset: 0; border-radius: 9999px; display: flex; align-items: center; justify-content: center;
  background: rgba(17,24,39,0.55); color: #fff; font-weight: 700; font-size: 0.75rem;
  backdrop-filter: blur(2px);
`,nw=E.div`
  width: 4rem; height: 4rem; border-radius: 50%; padding: 0.125rem;
  background: linear-gradient(to top right, #a78bfa, #f472b6, #fb923c);
  @media (min-width: 768px) { width: 5rem; height: 5rem; }
  @media (min-width: 1024px) { width: 6rem; height: 6rem; }
  filter: ${({$locked:a})=>a?"grayscale(0.8)":"none"};
  opacity: ${({$locked:a})=>a?.6:1};
`,aw=E.div`
  width: 100%; height: 100%; border-radius: 50%; padding: 0.25rem; background: #fff;
  display: flex; align-items: center; justify-content: center;
`,iw=E.div`
  font-size: 0.75rem; color: #374151; text-align: center; margin-top: 0.25rem;
  max-width: 4.375rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  @media (min-width: 768px) { font-size: 0.875rem; max-width: 5.625rem; }
  opacity: ${({$locked:a})=>a?.6:1};
`,lw=E.div` display: flex; border-top: 1px solid #e5e7eb; `,Rm=E.button`
  flex: 1; padding: 0.75rem 0; display: flex; justify-content: center; align-items: center; gap: 0.5rem;
  border-top: 2px solid ${({active:a})=>a?"#111827":"transparent"};
  color: ${({active:a})=>a?"#111827":"#9ca3af"};
`,rw=E.div`
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.25rem;
  @media (min-width: 768px) { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.5rem; }
  @media (min-width: 1024px) { grid-template-columns: repeat(5, minmax(0, 1fr)); }
  @media (min-width: 1280px) { grid-template-columns: repeat(6, minmax(0, 1fr)); }
`,ow=E.div`
  aspect-ratio: 1 / 1; background: #f3f4f6; display: flex; justify-content: center; align-items: center; position: relative;
  filter: ${({$locked:a})=>a?"blur(2px)":"none"};
  overflow: hidden;
`,uw=E.div`
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  background: rgba(17,24,39,0.45); color: #fff; font-weight: 800; font-size: 0.8rem;
`,sw=E.button`
  margin: 0.75rem auto 1.25rem; display: ${({hidden:a})=>a?"none":"block"};
  background: #111827; color: #fff; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 700;
`,cw=E.div`
  position: fixed; inset: 0; background: rgba(17, 24, 39, 0.6);
  display: flex; align-items: center; justify-content: center; z-index: 50;
`,fw=E.div`
  width: min(96vw, 720px); background: #ffffff; border-radius: 16px;
  box-shadow: 0 20px 48px rgba(0,0,0,0.18); overflow: hidden;
`,dw=E.div`
  display: flex; justify-content: space-between; align-items: center;
  padding: 1rem 1.25rem; border-bottom: 1px solid #f3f4f6;
`,hw=E.h3`
  margin: 0; font-size: 1rem; font-weight: 700; color: #111827;
`,pw=E.button`
  border: 1px solid #e5e7eb; background: #fff; border-radius: 8px; padding: 0.25rem;
`,mw=E.div`
  padding: 1rem; display: grid; gap: 1rem;
  @media (min-width: 768px) { grid-template-columns: repeat(3, 1fr); }
`,gw=E.button`
  border: 1px solid ${({$active:a})=>a?"#2563eb":"#e5e7eb"};
  border-radius: 14px; padding: 1rem; text-align: left; background: ${({$active:a})=>a?"#eff6ff":"#fff"};
  display: grid; gap: 0.25rem; cursor: pointer;
  &:hover { border-color: #2563eb; }
  h4 { margin: 0; font-size: 1rem; font-weight: 700; color: #111827; }
  p { margin: 0; color: #6b7280; font-size: 0.875rem; }
  strong { font-size: 1.25rem; }
`,vw=E.div`
  border-top: 1px solid #f3f4f6; padding: 0.75rem 1.25rem; display: flex; gap: 0.5rem; justify-content: flex-end;
`,yw=E.button`
  background: #111827; color: #fff; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 700;
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,bw=E.button`
  border: 1px solid #d1d5db; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 600; background: #fff;
`;function xw(){const a=Rf(),[l,u]=b.useState(!1),[o,c]=b.useState("basic"),[f,p]=b.useState(!1),[y,v]=b.useState(!1),m=3,x=3;b.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]),b.useEffect(()=>{const L=`joined:${st?.id||st?.name}`;localStorage.getItem(L)==="true"&&v(!0)},[]),b.useEffect(()=>{const L=`joined:${st?.id||st?.name}`;localStorage.setItem(L,y?"true":"false")},[y]);const S=L=>{if(!y&&L>=m){u(!0);return}L===0&&a("/instalearn/library")},w=()=>{y||u(!0)},A=async()=>{p(!0),await new Promise(L=>setTimeout(L,1500)),p(!1),v(!0),u(!1)},R=[{key:"basic",name:"Basic",price:"₹0",desc:"Demo access: 3 lessons"},{key:"pro",name:"Pro",price:"₹99",desc:"Monthly: full library"},{key:"team",name:"Team",price:"₹1,99",desc:"Up to 10 students"}],Y=y;return h.jsxs(M7,{children:[h.jsxs(A7,{children:[h.jsxs(D7,{children:[h.jsxs(N7,{children:[h.jsxs(k7,{children:[h.jsx(L7,{src:st.avatar,alt:st.name}),!y&&h.jsxs(B7,{"aria-hidden":"true",title:"Pro library locked",children:[h.jsx(_o,{size:12})," LOCKED"]})]}),h.jsxs(U7,{children:[h.jsxs(Ri,{children:[st.concepts," ",h.jsx("span",{children:"concepts"})]}),h.jsxs(Ri,{children:[st.students," ",h.jsx("span",{children:"students"})]}),h.jsxs(Ri,{children:[st.learns," ",h.jsx("span",{children:"learns"})]})]})]}),h.jsxs($7,{children:[h.jsxs(H7,{children:[h.jsxs(Ri,{children:[st.concepts," ",h.jsx("span",{children:"concepts"})]}),h.jsxs(Ri,{children:[st.students," ",h.jsx("span",{children:"students"})]}),h.jsxs(Ri,{children:[st.learns," ",h.jsx("span",{children:"learns"})]})]}),h.jsx(q7,{children:st.name}),h.jsx(Y7,{children:st.subject}),h.jsx(G7,{children:st.bio}),h.jsxs(X7,{children:["🎓 ",st.experience," years experience"]}),h.jsxs(V7,{children:[h.jsx(Q7,{children:"Follow"}),h.jsx(Z7,{onClick:w,disabled:f,"data-joined":y,"aria-pressed":y,"aria-label":y?"Joined":"Join",title:y?"You're in!":"Join this teacher",children:y?h.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[h.jsx(A4,{size:18})," Joined"]}):f?"Processing…":"Join"}),h.jsx(K7,{"aria-label":"More options",children:"▼"})]}),h.jsxs(J7,{hidden:Y,role:"note","aria-live":"polite",children:[h.jsxs(F7,{children:[h.jsx(_o,{size:18})," Pro library locked — get full access to all concepts & posts."]}),h.jsx(W7,{onClick:()=>u(!0),"aria-label":"Unlock full library",children:"Unlock"})]})]})]}),h.jsx(P7,{children:h.jsx(I7,{children:st.bookList.map((L,K)=>{const _=!y&&K>=m;return h.jsxs(ew,{onClick:()=>S(K),"aria-disabled":_,title:_?"Join to unlock":`Open ${L.title}`,children:[h.jsx(nw,{$locked:_,children:h.jsx(aw,{children:h.jsx(ka,{size:24})})}),h.jsx(iw,{$locked:_,children:L.title}),!y&&_&&h.jsxs(tw,{children:[h.jsx(_o,{size:14,style:{marginRight:6}})," Locked"]})]},K)})})})]}),h.jsxs(lw,{children:[h.jsx(Rm,{active:!0,children:h.jsx($4,{size:20})}),h.jsx(Rm,{children:h.jsx(O4,{size:20})})]}),h.jsx(rw,{"aria-label":"Teacher posts",children:Array(9).fill(null).map((L,K)=>{const _=!y&&K>=x;return h.jsxs(ow,{$locked:_,"aria-hidden":!1,children:[h.jsx(ka,{size:24}),_&&h.jsxs(uw,{children:[h.jsx(_o,{size:16,style:{marginRight:6}})," Join to view"]})]},K)})}),h.jsx(sw,{hidden:y,onClick:()=>u(!0),"aria-label":"Unlock all posts",children:"Unlock entire library"}),l&&h.jsx(cw,{role:"dialog","aria-modal":"true","aria-labelledby":"pricing-title",children:h.jsxs(fw,{children:[h.jsxs(dw,{children:[h.jsx(hw,{id:"pricing-title",children:"Choose your plan"}),h.jsx(pw,{onClick:()=>u(!1),"aria-label":"Close pricing",children:h.jsx(Z4,{size:18})})]}),h.jsx(mw,{children:R.map(L=>h.jsxs(gw,{onClick:()=>c(L.key),$active:o===L.key,"aria-pressed":o===L.key,children:[h.jsx("h4",{children:L.name}),h.jsx("strong",{children:L.price}),h.jsx("p",{children:L.desc})]},L.key))}),h.jsxs(vw,{children:[h.jsx(bw,{onClick:()=>u(!1),children:"Not now"}),h.jsx(yw,{onClick:A,disabled:f,children:f?"Processing payment…":"Demo Pay & Join"})]})]})})]})}const Sw=E.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--color-light, #f5f5f5);
`,ww=E.aside`
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
`,Ew=E.div`
  flex: 1;
  display: flex;
  width: 100%;

  @media (min-width: 1024px) {
    /* match LeftSidebar width exactly to avoid layout jump */
    margin-left: 246px;
  }
`,Cw=E.main`
  flex: 1;
  width: 100%;
  padding-bottom: 60px;
  transition: ${a=>a.$isResizing?"none":"margin-right 0.2s ease"};
  will-change: margin-right;

  @media (min-width: 1024px) {
    padding-bottom: 0;
    margin-right: ${a=>`${a.$sidebarWidth}px`};
  }
`,Tw=E.aside`
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
`,jw=E.div`
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
`,Rw=E.div`
  display: block;
  margin-bottom: 60px;

  @media (min-width: 1024px) {
    display: none;
  }
`,Ow=E.div`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (min-width: 1024px) {
    display: none;
  }
`;function zw(){const[a,l]=b.useState(360),[u,o]=b.useState(!1),c=b.useRef(null),f=350,p=600,y=v=>{v.preventDefault(),o(!0),c.current={startX:v.clientX,startWidth:a}};return b.useEffect(()=>{const v=(S,w,A)=>Math.min(Math.max(S,w),A),m=S=>{if(!u||!c.current)return;const{startX:w,startWidth:A}=c.current,R=w-S.clientX,Y=v(A+R,f,p);l(Y)},x=()=>{u&&(o(!1),c.current=null)};return u&&(document.addEventListener("mousemove",m),document.addEventListener("mouseup",x),document.body.style.cursor="ew-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",x),document.body.style.cursor="",document.body.style.userSelect=""}},[u]),h.jsxs(Sw,{children:[h.jsx(ww,{children:h.jsx(s7,{})}),h.jsxs(Ew,{children:[h.jsxs(Cw,{$sidebarWidth:a,$isResizing:u,children:[h.jsx(Rw,{children:h.jsx(t7,{})}),h.jsxs(Hb,{children:[h.jsx(Da,{path:"/instalearn",element:h.jsx(p6,{})}),h.jsx(Da,{path:"/instalearn/teacher",element:h.jsx(xw,{})}),h.jsx(Da,{path:"/instalearn/library",element:h.jsx(g4,{})}),h.jsx(Da,{path:"/instalearn/notifications",element:h.jsx(hm,{})}),h.jsx(Da,{path:"/instalearn/more",element:h.jsx(hm,{})}),h.jsx(Da,{path:"/instalearn/profile",element:h.jsx(V6,{})})]})]}),h.jsxs(Tw,{$width:a,$isResizing:u,children:[h.jsx(jw,{className:u?"active":"",onMouseDown:y,"aria-label":"Resize sidebar"}),h.jsx(O7,{})]})]}),h.jsx(Ow,{children:h.jsx(z7,{})})]})}J2.createRoot(document.getElementById("root")).render(h.jsx(ux,{children:h.jsx(zw,{})}));
