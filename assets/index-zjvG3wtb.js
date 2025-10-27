(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function u(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(c){if(c.ep)return;c.ep=!0;const f=u(c);fetch(c.href,f)}})();function nr(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Mc={exports:{}},Bl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e1;function lb(){if(e1)return Bl;e1=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function u(o,c,f){var h=null;if(f!==void 0&&(h=""+f),c.key!==void 0&&(h=""+c.key),"key"in c){f={};for(var y in c)y!=="key"&&(f[y]=c[y])}else f=c;return c=f.ref,{$$typeof:a,type:o,key:h,ref:c!==void 0?c:null,props:f}}return Bl.Fragment=l,Bl.jsx=u,Bl.jsxs=u,Bl}var t1;function rb(){return t1||(t1=1,Mc.exports=lb()),Mc.exports}var d=rb(),_c={exports:{}},me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n1;function ob(){if(n1)return me;n1=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),E=Symbol.iterator;function D(T){return T===null||typeof T!="object"?null:(T=E&&T[E]||T["@@iterator"],typeof T=="function"?T:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,$={};function V(T,Q,ie){this.props=T,this.context=Q,this.refs=$,this.updater=ie||R}V.prototype.isReactComponent={},V.prototype.setState=function(T,Q){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,Q,"setState")},V.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function M(){}M.prototype=V.prototype;function _(T,Q,ie){this.props=T,this.context=Q,this.refs=$,this.updater=ie||R}var X=_.prototype=new M;X.constructor=_,q(X,V.prototype),X.isPureReactComponent=!0;var L=Array.isArray;function A(){}var F={H:null,A:null,T:null,S:null},B=Object.prototype.hasOwnProperty;function Z(T,Q,ie){var ae=ie.ref;return{$$typeof:a,type:T,key:Q,ref:ae!==void 0?ae:null,props:ie}}function re(T,Q){return Z(T.type,Q,T.props)}function J(T){return typeof T=="object"&&T!==null&&T.$$typeof===a}function k(T){var Q={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(ie){return Q[ie]})}var te=/\/+/g;function ne(T,Q){return typeof T=="object"&&T!==null&&T.key!=null?k(""+T.key):Q.toString(36)}function j(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(A,A):(T.status="pending",T.then(function(Q){T.status==="pending"&&(T.status="fulfilled",T.value=Q)},function(Q){T.status==="pending"&&(T.status="rejected",T.reason=Q)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function O(T,Q,ie,ae,ce){var he=typeof T;(he==="undefined"||he==="boolean")&&(T=null);var be=!1;if(T===null)be=!0;else switch(he){case"bigint":case"string":case"number":be=!0;break;case"object":switch(T.$$typeof){case a:case l:be=!0;break;case x:return be=T._init,O(be(T._payload),Q,ie,ae,ce)}}if(be)return ce=ce(T),be=ae===""?"."+ne(T,0):ae,L(ce)?(ie="",be!=null&&(ie=be.replace(te,"$&/")+"/"),O(ce,Q,ie,"",function(Ct){return Ct})):ce!=null&&(J(ce)&&(ce=re(ce,ie+(ce.key==null||T&&T.key===ce.key?"":(""+ce.key).replace(te,"$&/")+"/")+be)),Q.push(ce)),1;be=0;var $e=ae===""?".":ae+":";if(L(T))for(var je=0;je<T.length;je++)ae=T[je],he=$e+ne(ae,je),be+=O(ae,Q,ie,he,ce);else if(je=D(T),typeof je=="function")for(T=je.call(T),je=0;!(ae=T.next()).done;)ae=ae.value,he=$e+ne(ae,je++),be+=O(ae,Q,ie,he,ce);else if(he==="object"){if(typeof T.then=="function")return O(j(T),Q,ie,ae,ce);throw Q=String(T),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return be}function Y(T,Q,ie){if(T==null)return T;var ae=[],ce=0;return O(T,ae,"","",function(he){return Q.call(ie,he,ce++)}),ae}function W(T){if(T._status===-1){var Q=T._result;Q=Q(),Q.then(function(ie){(T._status===0||T._status===-1)&&(T._status=1,T._result=ie)},function(ie){(T._status===0||T._status===-1)&&(T._status=2,T._result=ie)}),T._status===-1&&(T._status=0,T._result=Q)}if(T._status===1)return T._result.default;throw T._result}var oe=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},fe={map:Y,forEach:function(T,Q,ie){Y(T,function(){Q.apply(this,arguments)},ie)},count:function(T){var Q=0;return Y(T,function(){Q++}),Q},toArray:function(T){return Y(T,function(Q){return Q})||[]},only:function(T){if(!J(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return me.Activity=S,me.Children=fe,me.Component=V,me.Fragment=u,me.Profiler=c,me.PureComponent=_,me.StrictMode=o,me.Suspense=g,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,me.__COMPILER_RUNTIME={__proto__:null,c:function(T){return F.H.useMemoCache(T)}},me.cache=function(T){return function(){return T.apply(null,arguments)}},me.cacheSignal=function(){return null},me.cloneElement=function(T,Q,ie){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var ae=q({},T.props),ce=T.key;if(Q!=null)for(he in Q.key!==void 0&&(ce=""+Q.key),Q)!B.call(Q,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&Q.ref===void 0||(ae[he]=Q[he]);var he=arguments.length-2;if(he===1)ae.children=ie;else if(1<he){for(var be=Array(he),$e=0;$e<he;$e++)be[$e]=arguments[$e+2];ae.children=be}return Z(T.type,ce,ae)},me.createContext=function(T){return T={$$typeof:h,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:f,_context:T},T},me.createElement=function(T,Q,ie){var ae,ce={},he=null;if(Q!=null)for(ae in Q.key!==void 0&&(he=""+Q.key),Q)B.call(Q,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(ce[ae]=Q[ae]);var be=arguments.length-2;if(be===1)ce.children=ie;else if(1<be){for(var $e=Array(be),je=0;je<be;je++)$e[je]=arguments[je+2];ce.children=$e}if(T&&T.defaultProps)for(ae in be=T.defaultProps,be)ce[ae]===void 0&&(ce[ae]=be[ae]);return Z(T,he,ce)},me.createRef=function(){return{current:null}},me.forwardRef=function(T){return{$$typeof:y,render:T}},me.isValidElement=J,me.lazy=function(T){return{$$typeof:x,_payload:{_status:-1,_result:T},_init:W}},me.memo=function(T,Q){return{$$typeof:m,type:T,compare:Q===void 0?null:Q}},me.startTransition=function(T){var Q=F.T,ie={};F.T=ie;try{var ae=T(),ce=F.S;ce!==null&&ce(ie,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(A,oe)}catch(he){oe(he)}finally{Q!==null&&ie.types!==null&&(Q.types=ie.types),F.T=Q}},me.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},me.use=function(T){return F.H.use(T)},me.useActionState=function(T,Q,ie){return F.H.useActionState(T,Q,ie)},me.useCallback=function(T,Q){return F.H.useCallback(T,Q)},me.useContext=function(T){return F.H.useContext(T)},me.useDebugValue=function(){},me.useDeferredValue=function(T,Q){return F.H.useDeferredValue(T,Q)},me.useEffect=function(T,Q){return F.H.useEffect(T,Q)},me.useEffectEvent=function(T){return F.H.useEffectEvent(T)},me.useId=function(){return F.H.useId()},me.useImperativeHandle=function(T,Q,ie){return F.H.useImperativeHandle(T,Q,ie)},me.useInsertionEffect=function(T,Q){return F.H.useInsertionEffect(T,Q)},me.useLayoutEffect=function(T,Q){return F.H.useLayoutEffect(T,Q)},me.useMemo=function(T,Q){return F.H.useMemo(T,Q)},me.useOptimistic=function(T,Q){return F.H.useOptimistic(T,Q)},me.useReducer=function(T,Q,ie){return F.H.useReducer(T,Q,ie)},me.useRef=function(T){return F.H.useRef(T)},me.useState=function(T){return F.H.useState(T)},me.useSyncExternalStore=function(T,Q,ie){return F.H.useSyncExternalStore(T,Q,ie)},me.useTransition=function(){return F.H.useTransition()},me.version="19.2.0",me}var a1;function ga(){return a1||(a1=1,_c.exports=ob()),_c.exports}var b=ga();const Ye=nr(b);var Ac={exports:{}},Ul={},Dc={exports:{}},Nc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i1;function ub(){return i1||(i1=1,(function(a){function l(O,Y){var W=O.length;O.push(Y);e:for(;0<W;){var oe=W-1>>>1,fe=O[oe];if(0<c(fe,Y))O[oe]=Y,O[W]=fe,W=oe;else break e}}function u(O){return O.length===0?null:O[0]}function o(O){if(O.length===0)return null;var Y=O[0],W=O.pop();if(W!==Y){O[0]=W;e:for(var oe=0,fe=O.length,T=fe>>>1;oe<T;){var Q=2*(oe+1)-1,ie=O[Q],ae=Q+1,ce=O[ae];if(0>c(ie,W))ae<fe&&0>c(ce,ie)?(O[oe]=ce,O[ae]=W,oe=ae):(O[oe]=ie,O[Q]=W,oe=Q);else if(ae<fe&&0>c(ce,W))O[oe]=ce,O[ae]=W,oe=ae;else break e}}return Y}function c(O,Y){var W=O.sortIndex-Y.sortIndex;return W!==0?W:O.id-Y.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var h=Date,y=h.now();a.unstable_now=function(){return h.now()-y}}var g=[],m=[],x=1,S=null,E=3,D=!1,R=!1,q=!1,$=!1,V=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function X(O){for(var Y=u(m);Y!==null;){if(Y.callback===null)o(m);else if(Y.startTime<=O)o(m),Y.sortIndex=Y.expirationTime,l(g,Y);else break;Y=u(m)}}function L(O){if(q=!1,X(O),!R)if(u(g)!==null)R=!0,A||(A=!0,k());else{var Y=u(m);Y!==null&&j(L,Y.startTime-O)}}var A=!1,F=-1,B=5,Z=-1;function re(){return $?!0:!(a.unstable_now()-Z<B)}function J(){if($=!1,A){var O=a.unstable_now();Z=O;var Y=!0;try{e:{R=!1,q&&(q=!1,M(F),F=-1),D=!0;var W=E;try{t:{for(X(O),S=u(g);S!==null&&!(S.expirationTime>O&&re());){var oe=S.callback;if(typeof oe=="function"){S.callback=null,E=S.priorityLevel;var fe=oe(S.expirationTime<=O);if(O=a.unstable_now(),typeof fe=="function"){S.callback=fe,X(O),Y=!0;break t}S===u(g)&&o(g),X(O)}else o(g);S=u(g)}if(S!==null)Y=!0;else{var T=u(m);T!==null&&j(L,T.startTime-O),Y=!1}}break e}finally{S=null,E=W,D=!1}Y=void 0}}finally{Y?k():A=!1}}}var k;if(typeof _=="function")k=function(){_(J)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=J,k=function(){ne.postMessage(null)}}else k=function(){V(J,0)};function j(O,Y){F=V(function(){O(a.unstable_now())},Y)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(O){O.callback=null},a.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<O?Math.floor(1e3/O):5},a.unstable_getCurrentPriorityLevel=function(){return E},a.unstable_next=function(O){switch(E){case 1:case 2:case 3:var Y=3;break;default:Y=E}var W=E;E=Y;try{return O()}finally{E=W}},a.unstable_requestPaint=function(){$=!0},a.unstable_runWithPriority=function(O,Y){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var W=E;E=O;try{return Y()}finally{E=W}},a.unstable_scheduleCallback=function(O,Y,W){var oe=a.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?oe+W:oe):W=oe,O){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=W+fe,O={id:x++,callback:Y,priorityLevel:O,startTime:W,expirationTime:fe,sortIndex:-1},W>oe?(O.sortIndex=W,l(m,O),u(g)===null&&O===u(m)&&(q?(M(F),F=-1):q=!0,j(L,W-oe))):(O.sortIndex=fe,l(g,O),R||D||(R=!0,A||(A=!0,k()))),O},a.unstable_shouldYield=re,a.unstable_wrapCallback=function(O){var Y=E;return function(){var W=E;E=Y;try{return O.apply(this,arguments)}finally{E=W}}}})(Nc)),Nc}var l1;function sb(){return l1||(l1=1,Dc.exports=ub()),Dc.exports}var kc={exports:{}},ft={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r1;function cb(){if(r1)return ft;r1=1;var a=ga();function l(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)m+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var o={d:{f:u,r:function(){throw Error(l(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(g,m,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:S==null?null:""+S,children:g,containerInfo:m,implementation:x}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ft.createPortal=function(g,m){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(l(299));return f(g,m,null,x)},ft.flushSync=function(g){var m=h.T,x=o.p;try{if(h.T=null,o.p=2,g)return g()}finally{h.T=m,o.p=x,o.d.f()}},ft.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(g,m))},ft.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},ft.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var x=m.as,S=y(x,m.crossOrigin),E=typeof m.integrity=="string"?m.integrity:void 0,D=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;x==="style"?o.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:E,fetchPriority:D}):x==="script"&&o.d.X(g,{crossOrigin:S,integrity:E,fetchPriority:D,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ft.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var x=y(m.as,m.crossOrigin);o.d.M(g,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(g)},ft.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var x=m.as,S=y(x,m.crossOrigin);o.d.L(g,x,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ft.preloadModule=function(g,m){if(typeof g=="string")if(m){var x=y(m.as,m.crossOrigin);o.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(g)},ft.requestFormReset=function(g){o.d.r(g)},ft.unstable_batchedUpdates=function(g,m){return g(m)},ft.useFormState=function(g,m,x){return h.H.useFormState(g,m,x)},ft.useFormStatus=function(){return h.H.useHostTransitionStatus()},ft.version="19.2.0",ft}var o1;function Vm(){if(o1)return kc.exports;o1=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),kc.exports=cb(),kc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u1;function fb(){if(u1)return Ul;u1=1;var a=sb(),l=ga(),u=Vm();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(o(188))}function m(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return g(r),e;if(s===i)return g(r),t;s=s.sibling}throw Error(o(188))}if(n.return!==i.return)n=r,i=s;else{for(var p=!1,v=r.child;v;){if(v===n){p=!0,n=r,i=s;break}if(v===i){p=!0,i=r,n=s;break}v=v.sibling}if(!p){for(v=s.child;v;){if(v===n){p=!0,n=s,i=r;break}if(v===i){p=!0,i=s,n=r;break}v=v.sibling}if(!p)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,E=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),_=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),A=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),re=Symbol.for("react.memo_cache_sentinel"),J=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=J&&e[J]||e["@@iterator"],typeof e=="function"?e:null)}var te=Symbol.for("react.client.reference");function ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case V:return"Profiler";case $:return"StrictMode";case L:return"Suspense";case A:return"SuspenseList";case Z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case _:return e.displayName||"Context";case M:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:ne(e.type)||"Memo";case B:t=e._payload,e=e._init;try{return ne(e(t))}catch{}}return null}var j=Array.isArray,O=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},oe=[],fe=-1;function T(e){return{current:e}}function Q(e){0>fe||(e.current=oe[fe],oe[fe]=null,fe--)}function ie(e,t){fe++,oe[fe]=e.current,e.current=t}var ae=T(null),ce=T(null),he=T(null),be=T(null);function $e(e,t){switch(ie(he,t),ie(ce,e),ie(ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?E0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=E0(t),e=C0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(ae),ie(ae,e)}function je(){Q(ae),Q(ce),Q(he)}function Ct(e){e.memoizedState!==null&&ie(be,e);var t=ae.current,n=C0(t,e.type);t!==n&&(ie(ce,e),ie(ae,n))}function Ft(e){ce.current===e&&(Q(ae),Q(ce)),be.current===e&&(Q(be),Nl._currentValue=W)}var ht,Ha;function $t(e){if(ht===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ht=t&&t[1]||"",Ha=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ht+e+Ha}var Be=!1;function qa(e,t){if(!e||Be)return"";Be=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(K){var G=K}Reflect.construct(e,[],ee)}else{try{ee.call()}catch(K){G=K}e.call(ee.prototype)}}else{try{throw Error()}catch(K){G=K}(ee=e())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(K){if(K&&G&&typeof K.stack=="string")return[K.stack,G.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),p=s[0],v=s[1];if(p&&v){var C=p.split(`
`),H=v.split(`
`);for(r=i=0;i<C.length&&!C[i].includes("DetermineComponentFrameRoot");)i++;for(;r<H.length&&!H[r].includes("DetermineComponentFrameRoot");)r++;if(i===C.length||r===H.length)for(i=C.length-1,r=H.length-1;1<=i&&0<=r&&C[i]!==H[r];)r--;for(;1<=i&&0<=r;i--,r--)if(C[i]!==H[r]){if(i!==1||r!==1)do if(i--,r--,0>r||C[i]!==H[r]){var P=`
`+C[i].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),P}while(1<=i&&0<=r);break}}}finally{Be=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?$t(n):""}function Vi(e,t){switch(e.tag){case 26:case 27:case 5:return $t(e.type);case 16:return $t("Lazy");case 13:return e.child!==t&&t!==null?$t("Suspense Fallback"):$t("Suspense");case 19:return $t("SuspenseList");case 0:case 15:return qa(e.type,!1);case 11:return qa(e.type.render,!1);case 1:return qa(e.type,!0);case 31:return $t("Activity");default:return""}}function ed(e){try{var t="",n=null;do t+=Vi(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var mu=Object.prototype.hasOwnProperty,gu=a.unstable_scheduleCallback,vu=a.unstable_cancelCallback,$v=a.unstable_shouldYield,Bv=a.unstable_requestPaint,Tt=a.unstable_now,Uv=a.unstable_getCurrentPriorityLevel,td=a.unstable_ImmediatePriority,nd=a.unstable_UserBlockingPriority,or=a.unstable_NormalPriority,Hv=a.unstable_LowPriority,ad=a.unstable_IdlePriority,qv=a.log,Yv=a.unstable_setDisableYieldValue,Qi=null,jt=null;function Un(e){if(typeof qv=="function"&&Yv(e),jt&&typeof jt.setStrictMode=="function")try{jt.setStrictMode(Qi,e)}catch{}}var Rt=Math.clz32?Math.clz32:Vv,Gv=Math.log,Xv=Math.LN2;function Vv(e){return e>>>=0,e===0?32:31-(Gv(e)/Xv|0)|0}var ur=256,sr=262144,cr=4194304;function va(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function fr(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var r=0,s=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var v=i&134217727;return v!==0?(i=v&~s,i!==0?r=va(i):(p&=v,p!==0?r=va(p):n||(n=v&~e,n!==0&&(r=va(n))))):(v=i&~s,v!==0?r=va(v):p!==0?r=va(p):n||(n=i&~e,n!==0&&(r=va(n)))),r===0?0:t!==0&&t!==r&&(t&s)===0&&(s=r&-r,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:r}function Ki(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Qv(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function id(){var e=cr;return cr<<=1,(cr&62914560)===0&&(cr=4194304),e}function yu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Kv(e,t,n,i,r,s){var p=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var v=e.entanglements,C=e.expirationTimes,H=e.hiddenUpdates;for(n=p&~n;0<n;){var P=31-Rt(n),ee=1<<P;v[P]=0,C[P]=-1;var G=H[P];if(G!==null)for(H[P]=null,P=0;P<G.length;P++){var K=G[P];K!==null&&(K.lane&=-536870913)}n&=~ee}i!==0&&ld(e,i,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(p&~t))}function ld(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Rt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function rd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Rt(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}function od(e,t){var n=t&-t;return n=(n&42)!==0?1:bu(n),(n&(e.suspendedLanes|t))!==0?0:n}function bu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ud(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:K0(e.type))}function sd(e,t){var n=Y.p;try{return Y.p=e,t()}finally{Y.p=n}}var Hn=Math.random().toString(36).slice(2),lt="__reactFiber$"+Hn,gt="__reactProps$"+Hn,Ya="__reactContainer$"+Hn,Su="__reactEvents$"+Hn,Zv="__reactListeners$"+Hn,Jv="__reactHandles$"+Hn,cd="__reactResources$"+Hn,Ji="__reactMarker$"+Hn;function wu(e){delete e[lt],delete e[gt],delete e[Su],delete e[Zv],delete e[Jv]}function Ga(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ya]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_0(e);e!==null;){if(n=e[lt])return n;e=_0(e)}return t}e=n,n=e.parentNode}return null}function Xa(e){if(e=e[lt]||e[Ya]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Fi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Va(e){var t=e[cd];return t||(t=e[cd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tt(e){e[Ji]=!0}var fd=new Set,dd={};function ya(e,t){Qa(e,t),Qa(e+"Capture",t)}function Qa(e,t){for(dd[e]=t,e=0;e<t.length;e++)fd.add(t[e])}var Fv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pd={},hd={};function Wv(e){return mu.call(hd,e)?!0:mu.call(pd,e)?!1:Fv.test(e)?hd[e]=!0:(pd[e]=!0,!1)}function dr(e,t,n){if(Wv(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function pr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function fn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function md(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pv(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(p){n=""+p,s.call(this,p)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(p){n=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Eu(e){if(!e._valueTracker){var t=md(e)?"checked":"value";e._valueTracker=Pv(e,t,""+e[t])}}function gd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=md(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function hr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Iv=/[\n"\\]/g;function Ut(e){return e.replace(Iv,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Cu(e,t,n,i,r,s,p,v){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Bt(t)):e.value!==""+Bt(t)&&(e.value=""+Bt(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?Tu(e,p,Bt(t)):n!=null?Tu(e,p,Bt(n)):i!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+Bt(v):e.removeAttribute("name")}function vd(e,t,n,i,r,s,p,v){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Eu(e);return}n=n!=null?""+Bt(n):"",t=t!=null?""+Bt(t):n,v||t===e.value||(e.value=t),e.defaultValue=t}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=v?e.checked:!!i,e.defaultChecked=!!i,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),Eu(e)}function Tu(e,t,n){t==="number"&&hr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ka(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function yd(e,t,n){if(t!=null&&(t=""+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Bt(n):""}function bd(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(o(92));if(j(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Bt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Eu(e)}function Za(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var e2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xd(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||e2.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Sd(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in t)i=t[r],t.hasOwnProperty(r)&&n[r]!==i&&xd(e,r,i)}else for(var s in t)t.hasOwnProperty(s)&&xd(e,s,t[s])}function ju(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var t2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),n2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mr(e){return n2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function dn(){}var Ru=null;function zu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ja=null,Fa=null;function wd(e){var t=Xa(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Cu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ut(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=i[gt]||null;if(!r)throw Error(o(90));Cu(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&gd(i)}break e;case"textarea":yd(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ka(e,!!n.multiple,t,!1)}}}var Ou=!1;function Ed(e,t,n){if(Ou)return e(t,n);Ou=!0;try{var i=e(t);return i}finally{if(Ou=!1,(Ja!==null||Fa!==null)&&(no(),Ja&&(t=Ja,e=Fa,Fa=Ja=null,wd(t),e)))for(t=0;t<e.length;t++)wd(e[t])}}function Wi(e,t){var n=e.stateNode;if(n===null)return null;var i=n[gt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=!1;if(pn)try{var Pi={};Object.defineProperty(Pi,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",Pi,Pi),window.removeEventListener("test",Pi,Pi)}catch{Mu=!1}var qn=null,_u=null,gr=null;function Cd(){if(gr)return gr;var e,t=_u,n=t.length,i,r="value"in qn?qn.value:qn.textContent,s=r.length;for(e=0;e<n&&t[e]===r[e];e++);var p=n-e;for(i=1;i<=p&&t[n-i]===r[s-i];i++);return gr=r.slice(e,1<i?1-i:void 0)}function vr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yr(){return!0}function Td(){return!1}function vt(e){function t(n,i,r,s,p){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=p,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(n=e[v],this[v]=n?n(s):s[v]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yr:Td,this.isPropagationStopped=Td,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yr)},persist:function(){},isPersistent:yr}),t}var ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},br=vt(ba),Ii=S({},ba,{view:0,detail:0}),a2=vt(Ii),Au,Du,el,xr=S({},Ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==el&&(el&&e.type==="mousemove"?(Au=e.screenX-el.screenX,Du=e.screenY-el.screenY):Du=Au=0,el=e),Au)},movementY:function(e){return"movementY"in e?e.movementY:Du}}),jd=vt(xr),i2=S({},xr,{dataTransfer:0}),l2=vt(i2),r2=S({},Ii,{relatedTarget:0}),Nu=vt(r2),o2=S({},ba,{animationName:0,elapsedTime:0,pseudoElement:0}),u2=vt(o2),s2=S({},ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),c2=vt(s2),f2=S({},ba,{data:0}),Rd=vt(f2),d2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=h2[e])?!!t[e]:!1}function ku(){return m2}var g2=S({},Ii,{key:function(e){if(e.key){var t=d2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?p2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(e){return e.type==="keypress"?vr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),v2=vt(g2),y2=S({},xr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zd=vt(y2),b2=S({},Ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),x2=vt(b2),S2=S({},ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),w2=vt(S2),E2=S({},xr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),C2=vt(E2),T2=S({},ba,{newState:0,oldState:0}),j2=vt(T2),R2=[9,13,27,32],Lu=pn&&"CompositionEvent"in window,tl=null;pn&&"documentMode"in document&&(tl=document.documentMode);var z2=pn&&"TextEvent"in window&&!tl,Od=pn&&(!Lu||tl&&8<tl&&11>=tl),Md=" ",_d=!1;function Ad(e,t){switch(e){case"keyup":return R2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wa=!1;function O2(e,t){switch(e){case"compositionend":return Dd(t);case"keypress":return t.which!==32?null:(_d=!0,Md);case"textInput":return e=t.data,e===Md&&_d?null:e;default:return null}}function M2(e,t){if(Wa)return e==="compositionend"||!Lu&&Ad(e,t)?(e=Cd(),gr=_u=qn=null,Wa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Od&&t.locale!=="ko"?null:t.data;default:return null}}var _2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_2[e.type]:t==="textarea"}function kd(e,t,n,i){Ja?Fa?Fa.push(i):Fa=[i]:Ja=i,t=so(t,"onChange"),0<t.length&&(n=new br("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var nl=null,al=null;function A2(e){v0(e,0)}function Sr(e){var t=Fi(e);if(gd(t))return e}function Ld(e,t){if(e==="change")return t}var $d=!1;if(pn){var $u;if(pn){var Bu="oninput"in document;if(!Bu){var Bd=document.createElement("div");Bd.setAttribute("oninput","return;"),Bu=typeof Bd.oninput=="function"}$u=Bu}else $u=!1;$d=$u&&(!document.documentMode||9<document.documentMode)}function Ud(){nl&&(nl.detachEvent("onpropertychange",Hd),al=nl=null)}function Hd(e){if(e.propertyName==="value"&&Sr(al)){var t=[];kd(t,al,e,zu(e)),Ed(A2,t)}}function D2(e,t,n){e==="focusin"?(Ud(),nl=t,al=n,nl.attachEvent("onpropertychange",Hd)):e==="focusout"&&Ud()}function N2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sr(al)}function k2(e,t){if(e==="click")return Sr(t)}function L2(e,t){if(e==="input"||e==="change")return Sr(t)}function $2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:$2;function il(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!mu.call(t,r)||!zt(e[r],t[r]))return!1}return!0}function qd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yd(e,t){var n=qd(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qd(n)}}function Gd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=hr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=hr(e.document)}return t}function Uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var B2=pn&&"documentMode"in document&&11>=document.documentMode,Pa=null,Hu=null,ll=null,qu=!1;function Vd(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qu||Pa==null||Pa!==hr(i)||(i=Pa,"selectionStart"in i&&Uu(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ll&&il(ll,i)||(ll=i,i=so(Hu,"onSelect"),0<i.length&&(t=new br("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Pa)))}function xa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ia={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionrun:xa("Transition","TransitionRun"),transitionstart:xa("Transition","TransitionStart"),transitioncancel:xa("Transition","TransitionCancel"),transitionend:xa("Transition","TransitionEnd")},Yu={},Qd={};pn&&(Qd=document.createElement("div").style,"AnimationEvent"in window||(delete Ia.animationend.animation,delete Ia.animationiteration.animation,delete Ia.animationstart.animation),"TransitionEvent"in window||delete Ia.transitionend.transition);function Sa(e){if(Yu[e])return Yu[e];if(!Ia[e])return e;var t=Ia[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qd)return Yu[e]=t[n];return e}var Kd=Sa("animationend"),Zd=Sa("animationiteration"),Jd=Sa("animationstart"),U2=Sa("transitionrun"),H2=Sa("transitionstart"),q2=Sa("transitioncancel"),Fd=Sa("transitionend"),Wd=new Map,Gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gu.push("scrollEnd");function Wt(e,t){Wd.set(e,t),ya(t,[e])}var wr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ht=[],ei=0,Xu=0;function Er(){for(var e=ei,t=Xu=ei=0;t<e;){var n=Ht[t];Ht[t++]=null;var i=Ht[t];Ht[t++]=null;var r=Ht[t];Ht[t++]=null;var s=Ht[t];if(Ht[t++]=null,i!==null&&r!==null){var p=i.pending;p===null?r.next=r:(r.next=p.next,p.next=r),i.pending=r}s!==0&&Pd(n,r,s)}}function Cr(e,t,n,i){Ht[ei++]=e,Ht[ei++]=t,Ht[ei++]=n,Ht[ei++]=i,Xu|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Vu(e,t,n,i){return Cr(e,t,n,i),Tr(e)}function wa(e,t){return Cr(e,null,null,t),Tr(e)}function Pd(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var r=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&t!==null&&(r=31-Rt(n),e=s.hiddenUpdates,i=e[r],i===null?e[r]=[t]:i.push(t),t.lane=n|536870912),s):null}function Tr(e){if(50<Rl)throw Rl=0,ec=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ti={};function Y2(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,i){return new Y2(e,t,n,i)}function Qu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hn(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Id(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function jr(e,t,n,i,r,s){var p=0;if(i=e,typeof e=="function")Qu(e)&&(p=1);else if(typeof e=="string")p=Ky(e,n,ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Z:return e=Ot(31,n,t,r),e.elementType=Z,e.lanes=s,e;case q:return Ea(n.children,r,s,t);case $:p=8,r|=24;break;case V:return e=Ot(12,n,t,r|2),e.elementType=V,e.lanes=s,e;case L:return e=Ot(13,n,t,r),e.elementType=L,e.lanes=s,e;case A:return e=Ot(19,n,t,r),e.elementType=A,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:p=10;break e;case M:p=9;break e;case X:p=11;break e;case F:p=14;break e;case B:p=16,i=null;break e}p=29,n=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=Ot(p,n,t,r),t.elementType=e,t.type=i,t.lanes=s,t}function Ea(e,t,n,i){return e=Ot(7,e,i,t),e.lanes=n,e}function Ku(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function ep(e){var t=Ot(18,null,null,0);return t.stateNode=e,t}function Zu(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var tp=new WeakMap;function qt(e,t){if(typeof e=="object"&&e!==null){var n=tp.get(e);return n!==void 0?n:(t={value:e,source:t,stack:ed(t)},tp.set(e,t),t)}return{value:e,source:t,stack:ed(t)}}var ni=[],ai=0,Rr=null,rl=0,Yt=[],Gt=0,Yn=null,an=1,ln="";function mn(e,t){ni[ai++]=rl,ni[ai++]=Rr,Rr=e,rl=t}function np(e,t,n){Yt[Gt++]=an,Yt[Gt++]=ln,Yt[Gt++]=Yn,Yn=e;var i=an;e=ln;var r=32-Rt(i)-1;i&=~(1<<r),n+=1;var s=32-Rt(t)+r;if(30<s){var p=r-r%5;s=(i&(1<<p)-1).toString(32),i>>=p,r-=p,an=1<<32-Rt(t)+r|n<<r|i,ln=s+e}else an=1<<s|n<<r|i,ln=e}function Ju(e){e.return!==null&&(mn(e,1),np(e,1,0))}function Fu(e){for(;e===Rr;)Rr=ni[--ai],ni[ai]=null,rl=ni[--ai],ni[ai]=null;for(;e===Yn;)Yn=Yt[--Gt],Yt[Gt]=null,ln=Yt[--Gt],Yt[Gt]=null,an=Yt[--Gt],Yt[Gt]=null}function ap(e,t){Yt[Gt++]=an,Yt[Gt++]=ln,Yt[Gt++]=Yn,an=t.id,ln=t.overflow,Yn=e}var rt=null,Ue=null,Ce=!1,Gn=null,Xt=!1,Wu=Error(o(519));function Xn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ol(qt(t,e)),Wu}function ip(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[lt]=e,t[gt]=i,n){case"dialog":Se("cancel",t),Se("close",t);break;case"iframe":case"object":case"embed":Se("load",t);break;case"video":case"audio":for(n=0;n<Ol.length;n++)Se(Ol[n],t);break;case"source":Se("error",t);break;case"img":case"image":case"link":Se("error",t),Se("load",t);break;case"details":Se("toggle",t);break;case"input":Se("invalid",t),vd(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Se("invalid",t);break;case"textarea":Se("invalid",t),bd(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||S0(t.textContent,n)?(i.popover!=null&&(Se("beforetoggle",t),Se("toggle",t)),i.onScroll!=null&&Se("scroll",t),i.onScrollEnd!=null&&Se("scrollend",t),i.onClick!=null&&(t.onclick=dn),t=!0):t=!1,t||Xn(e,!0)}function lp(e){for(rt=e.return;rt;)switch(rt.tag){case 5:case 31:case 13:Xt=!1;return;case 27:case 3:Xt=!0;return;default:rt=rt.return}}function ii(e){if(e!==rt)return!1;if(!Ce)return lp(e),Ce=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||mc(e.type,e.memoizedProps)),n=!n),n&&Ue&&Xn(e),lp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ue=M0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ue=M0(e)}else t===27?(t=Ue,ia(e.type)?(e=xc,xc=null,Ue=e):Ue=t):Ue=rt?Qt(e.stateNode.nextSibling):null;return!0}function Ca(){Ue=rt=null,Ce=!1}function Pu(){var e=Gn;return e!==null&&(St===null?St=e:St.push.apply(St,e),Gn=null),e}function ol(e){Gn===null?Gn=[e]:Gn.push(e)}var Iu=T(null),Ta=null,gn=null;function Vn(e,t,n){ie(Iu,t._currentValue),t._currentValue=n}function vn(e){e._currentValue=Iu.current,Q(Iu)}function es(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ts(e,t,n,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var p=r.child;s=s.firstContext;e:for(;s!==null;){var v=s;s=r;for(var C=0;C<t.length;C++)if(v.context===t[C]){s.lanes|=n,v=s.alternate,v!==null&&(v.lanes|=n),es(s.return,n,e),i||(p=null);break e}s=v.next}}else if(r.tag===18){if(p=r.return,p===null)throw Error(o(341));p.lanes|=n,s=p.alternate,s!==null&&(s.lanes|=n),es(p,n,e),p=null}else p=r.child;if(p!==null)p.return=r;else for(p=r;p!==null;){if(p===e){p=null;break}if(r=p.sibling,r!==null){r.return=p.return,p=r;break}p=p.return}r=p}}function li(e,t,n,i){e=null;for(var r=t,s=!1;r!==null;){if(!s){if((r.flags&524288)!==0)s=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var p=r.alternate;if(p===null)throw Error(o(387));if(p=p.memoizedProps,p!==null){var v=r.type;zt(r.pendingProps.value,p.value)||(e!==null?e.push(v):e=[v])}}else if(r===be.current){if(p=r.alternate,p===null)throw Error(o(387));p.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Nl):e=[Nl])}r=r.return}e!==null&&ts(t,e,n,i),t.flags|=262144}function zr(e){for(e=e.firstContext;e!==null;){if(!zt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ja(e){Ta=e,gn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ot(e){return rp(Ta,e)}function Or(e,t){return Ta===null&&ja(e),rp(e,t)}function rp(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},gn===null){if(e===null)throw Error(o(308));gn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else gn=gn.next=t;return n}var G2=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},X2=a.unstable_scheduleCallback,V2=a.unstable_NormalPriority,Je={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ns(){return{controller:new G2,data:new Map,refCount:0}}function ul(e){e.refCount--,e.refCount===0&&X2(V2,function(){e.controller.abort()})}var sl=null,as=0,ri=0,oi=null;function Q2(e,t){if(sl===null){var n=sl=[];as=0,ri=rc(),oi={status:"pending",value:void 0,then:function(i){n.push(i)}}}return as++,t.then(op,op),t}function op(){if(--as===0&&sl!==null){oi!==null&&(oi.status="fulfilled");var e=sl;sl=null,ri=0,oi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function K2(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(i.status="rejected",i.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),i}var up=O.S;O.S=function(e,t){Vh=Tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Q2(e,t),up!==null&&up(e,t)};var Ra=T(null);function is(){var e=Ra.current;return e!==null?e:Le.pooledCache}function Mr(e,t){t===null?ie(Ra,Ra.current):ie(Ra,t.pool)}function sp(){var e=is();return e===null?null:{parent:Je._currentValue,pool:e}}var ui=Error(o(460)),ls=Error(o(474)),_r=Error(o(542)),Ar={then:function(){}};function cp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fp(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(dn,dn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,pp(e),e;default:if(typeof t.status=="string")t.then(dn,dn);else{if(e=Le,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=i}},function(i){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,pp(e),e}throw Oa=t,ui}}function za(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Oa=n,ui):n}}var Oa=null;function dp(){if(Oa===null)throw Error(o(459));var e=Oa;return Oa=null,e}function pp(e){if(e===ui||e===_r)throw Error(o(483))}var si=null,cl=0;function Dr(e){var t=cl;return cl+=1,si===null&&(si=[]),fp(si,e,t)}function fl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Nr(e,t){throw t.$$typeof===E?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function hp(e){function t(N,z){if(e){var U=N.deletions;U===null?(N.deletions=[z],N.flags|=16):U.push(z)}}function n(N,z){if(!e)return null;for(;z!==null;)t(N,z),z=z.sibling;return null}function i(N){for(var z=new Map;N!==null;)N.key!==null?z.set(N.key,N):z.set(N.index,N),N=N.sibling;return z}function r(N,z){return N=hn(N,z),N.index=0,N.sibling=null,N}function s(N,z,U){return N.index=U,e?(U=N.alternate,U!==null?(U=U.index,U<z?(N.flags|=67108866,z):U):(N.flags|=67108866,z)):(N.flags|=1048576,z)}function p(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function v(N,z,U,I){return z===null||z.tag!==6?(z=Ku(U,N.mode,I),z.return=N,z):(z=r(z,U),z.return=N,z)}function C(N,z,U,I){var de=U.type;return de===q?P(N,z,U.props.children,I,U.key):z!==null&&(z.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===B&&za(de)===z.type)?(z=r(z,U.props),fl(z,U),z.return=N,z):(z=jr(U.type,U.key,U.props,null,N.mode,I),fl(z,U),z.return=N,z)}function H(N,z,U,I){return z===null||z.tag!==4||z.stateNode.containerInfo!==U.containerInfo||z.stateNode.implementation!==U.implementation?(z=Zu(U,N.mode,I),z.return=N,z):(z=r(z,U.children||[]),z.return=N,z)}function P(N,z,U,I,de){return z===null||z.tag!==7?(z=Ea(U,N.mode,I,de),z.return=N,z):(z=r(z,U),z.return=N,z)}function ee(N,z,U){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=Ku(""+z,N.mode,U),z.return=N,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case D:return U=jr(z.type,z.key,z.props,null,N.mode,U),fl(U,z),U.return=N,U;case R:return z=Zu(z,N.mode,U),z.return=N,z;case B:return z=za(z),ee(N,z,U)}if(j(z)||k(z))return z=Ea(z,N.mode,U,null),z.return=N,z;if(typeof z.then=="function")return ee(N,Dr(z),U);if(z.$$typeof===_)return ee(N,Or(N,z),U);Nr(N,z)}return null}function G(N,z,U,I){var de=z!==null?z.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return de!==null?null:v(N,z,""+U,I);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case D:return U.key===de?C(N,z,U,I):null;case R:return U.key===de?H(N,z,U,I):null;case B:return U=za(U),G(N,z,U,I)}if(j(U)||k(U))return de!==null?null:P(N,z,U,I,null);if(typeof U.then=="function")return G(N,z,Dr(U),I);if(U.$$typeof===_)return G(N,z,Or(N,U),I);Nr(N,U)}return null}function K(N,z,U,I,de){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return N=N.get(U)||null,v(z,N,""+I,de);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case D:return N=N.get(I.key===null?U:I.key)||null,C(z,N,I,de);case R:return N=N.get(I.key===null?U:I.key)||null,H(z,N,I,de);case B:return I=za(I),K(N,z,U,I,de)}if(j(I)||k(I))return N=N.get(U)||null,P(z,N,I,de,null);if(typeof I.then=="function")return K(N,z,U,Dr(I),de);if(I.$$typeof===_)return K(N,z,U,Or(z,I),de);Nr(z,I)}return null}function ue(N,z,U,I){for(var de=null,Re=null,se=z,ve=z=0,Ee=null;se!==null&&ve<U.length;ve++){se.index>ve?(Ee=se,se=null):Ee=se.sibling;var ze=G(N,se,U[ve],I);if(ze===null){se===null&&(se=Ee);break}e&&se&&ze.alternate===null&&t(N,se),z=s(ze,z,ve),Re===null?de=ze:Re.sibling=ze,Re=ze,se=Ee}if(ve===U.length)return n(N,se),Ce&&mn(N,ve),de;if(se===null){for(;ve<U.length;ve++)se=ee(N,U[ve],I),se!==null&&(z=s(se,z,ve),Re===null?de=se:Re.sibling=se,Re=se);return Ce&&mn(N,ve),de}for(se=i(se);ve<U.length;ve++)Ee=K(se,N,ve,U[ve],I),Ee!==null&&(e&&Ee.alternate!==null&&se.delete(Ee.key===null?ve:Ee.key),z=s(Ee,z,ve),Re===null?de=Ee:Re.sibling=Ee,Re=Ee);return e&&se.forEach(function(sa){return t(N,sa)}),Ce&&mn(N,ve),de}function pe(N,z,U,I){if(U==null)throw Error(o(151));for(var de=null,Re=null,se=z,ve=z=0,Ee=null,ze=U.next();se!==null&&!ze.done;ve++,ze=U.next()){se.index>ve?(Ee=se,se=null):Ee=se.sibling;var sa=G(N,se,ze.value,I);if(sa===null){se===null&&(se=Ee);break}e&&se&&sa.alternate===null&&t(N,se),z=s(sa,z,ve),Re===null?de=sa:Re.sibling=sa,Re=sa,se=Ee}if(ze.done)return n(N,se),Ce&&mn(N,ve),de;if(se===null){for(;!ze.done;ve++,ze=U.next())ze=ee(N,ze.value,I),ze!==null&&(z=s(ze,z,ve),Re===null?de=ze:Re.sibling=ze,Re=ze);return Ce&&mn(N,ve),de}for(se=i(se);!ze.done;ve++,ze=U.next())ze=K(se,N,ve,ze.value,I),ze!==null&&(e&&ze.alternate!==null&&se.delete(ze.key===null?ve:ze.key),z=s(ze,z,ve),Re===null?de=ze:Re.sibling=ze,Re=ze);return e&&se.forEach(function(ib){return t(N,ib)}),Ce&&mn(N,ve),de}function ke(N,z,U,I){if(typeof U=="object"&&U!==null&&U.type===q&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case D:e:{for(var de=U.key;z!==null;){if(z.key===de){if(de=U.type,de===q){if(z.tag===7){n(N,z.sibling),I=r(z,U.props.children),I.return=N,N=I;break e}}else if(z.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===B&&za(de)===z.type){n(N,z.sibling),I=r(z,U.props),fl(I,U),I.return=N,N=I;break e}n(N,z);break}else t(N,z);z=z.sibling}U.type===q?(I=Ea(U.props.children,N.mode,I,U.key),I.return=N,N=I):(I=jr(U.type,U.key,U.props,null,N.mode,I),fl(I,U),I.return=N,N=I)}return p(N);case R:e:{for(de=U.key;z!==null;){if(z.key===de)if(z.tag===4&&z.stateNode.containerInfo===U.containerInfo&&z.stateNode.implementation===U.implementation){n(N,z.sibling),I=r(z,U.children||[]),I.return=N,N=I;break e}else{n(N,z);break}else t(N,z);z=z.sibling}I=Zu(U,N.mode,I),I.return=N,N=I}return p(N);case B:return U=za(U),ke(N,z,U,I)}if(j(U))return ue(N,z,U,I);if(k(U)){if(de=k(U),typeof de!="function")throw Error(o(150));return U=de.call(U),pe(N,z,U,I)}if(typeof U.then=="function")return ke(N,z,Dr(U),I);if(U.$$typeof===_)return ke(N,z,Or(N,U),I);Nr(N,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,z!==null&&z.tag===6?(n(N,z.sibling),I=r(z,U),I.return=N,N=I):(n(N,z),I=Ku(U,N.mode,I),I.return=N,N=I),p(N)):n(N,z)}return function(N,z,U,I){try{cl=0;var de=ke(N,z,U,I);return si=null,de}catch(se){if(se===ui||se===_r)throw se;var Re=Ot(29,se,null,N.mode);return Re.lanes=I,Re.return=N,Re}finally{}}}var Ma=hp(!0),mp=hp(!1),Qn=!1;function rs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function os(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Kn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Zn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Oe&2)!==0){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,t=Tr(e),Pd(e,null,n),t}return Cr(e,i,t,n),Tr(e)}function dl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,rd(e,n)}}function us(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?r=s=p:s=s.next=p,n=n.next}while(n!==null);s===null?r=s=t:s=s.next=t}else r=s=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ss=!1;function pl(){if(ss){var e=oi;if(e!==null)throw e}}function hl(e,t,n,i){ss=!1;var r=e.updateQueue;Qn=!1;var s=r.firstBaseUpdate,p=r.lastBaseUpdate,v=r.shared.pending;if(v!==null){r.shared.pending=null;var C=v,H=C.next;C.next=null,p===null?s=H:p.next=H,p=C;var P=e.alternate;P!==null&&(P=P.updateQueue,v=P.lastBaseUpdate,v!==p&&(v===null?P.firstBaseUpdate=H:v.next=H,P.lastBaseUpdate=C))}if(s!==null){var ee=r.baseState;p=0,P=H=C=null,v=s;do{var G=v.lane&-536870913,K=G!==v.lane;if(K?(we&G)===G:(i&G)===G){G!==0&&G===ri&&(ss=!0),P!==null&&(P=P.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var ue=e,pe=v;G=t;var ke=n;switch(pe.tag){case 1:if(ue=pe.payload,typeof ue=="function"){ee=ue.call(ke,ee,G);break e}ee=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=pe.payload,G=typeof ue=="function"?ue.call(ke,ee,G):ue,G==null)break e;ee=S({},ee,G);break e;case 2:Qn=!0}}G=v.callback,G!==null&&(e.flags|=64,K&&(e.flags|=8192),K=r.callbacks,K===null?r.callbacks=[G]:K.push(G))}else K={lane:G,tag:v.tag,payload:v.payload,callback:v.callback,next:null},P===null?(H=P=K,C=ee):P=P.next=K,p|=G;if(v=v.next,v===null){if(v=r.shared.pending,v===null)break;K=v,v=K.next,K.next=null,r.lastBaseUpdate=K,r.shared.pending=null}}while(!0);P===null&&(C=ee),r.baseState=C,r.firstBaseUpdate=H,r.lastBaseUpdate=P,s===null&&(r.shared.lanes=0),In|=p,e.lanes=p,e.memoizedState=ee}}function gp(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function vp(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)gp(n[e],t)}var ci=T(null),kr=T(0);function yp(e,t){e=jn,ie(kr,e),ie(ci,t),jn=e|t.baseLanes}function cs(){ie(kr,jn),ie(ci,ci.current)}function fs(){jn=kr.current,Q(ci),Q(kr)}var Mt=T(null),Vt=null;function Jn(e){var t=e.alternate;ie(Ke,Ke.current&1),ie(Mt,e),Vt===null&&(t===null||ci.current!==null||t.memoizedState!==null)&&(Vt=e)}function ds(e){ie(Ke,Ke.current),ie(Mt,e),Vt===null&&(Vt=e)}function bp(e){e.tag===22?(ie(Ke,Ke.current),ie(Mt,e),Vt===null&&(Vt=e)):Fn()}function Fn(){ie(Ke,Ke.current),ie(Mt,Mt.current)}function _t(e){Q(Mt),Vt===e&&(Vt=null),Q(Ke)}var Ke=T(0);function Lr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||yc(n)||bc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yn=0,ge=null,De=null,Fe=null,$r=!1,fi=!1,_a=!1,Br=0,ml=0,di=null,Z2=0;function Ve(){throw Error(o(321))}function ps(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function hs(e,t,n,i,r,s){return yn=s,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?nh:Os,_a=!1,s=n(i,r),_a=!1,fi&&(s=Sp(t,n,i,r)),xp(e),s}function xp(e){O.H=yl;var t=De!==null&&De.next!==null;if(yn=0,Fe=De=ge=null,$r=!1,ml=0,di=null,t)throw Error(o(300));e===null||We||(e=e.dependencies,e!==null&&zr(e)&&(We=!0))}function Sp(e,t,n,i){ge=e;var r=0;do{if(fi&&(di=null),ml=0,fi=!1,25<=r)throw Error(o(301));if(r+=1,Fe=De=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}O.H=ah,s=t(n,i)}while(fi);return s}function J2(){var e=O.H,t=e.useState()[0];return t=typeof t.then=="function"?gl(t):t,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(ge.flags|=1024),t}function ms(){var e=Br!==0;return Br=0,e}function gs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function vs(e){if($r){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}$r=!1}yn=0,Fe=De=ge=null,fi=!1,ml=Br=0,di=null}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?ge.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Ze(){if(De===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Fe===null?ge.memoizedState:Fe.next;if(t!==null)Fe=t,De=e;else{if(e===null)throw ge.alternate===null?Error(o(467)):Error(o(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Fe===null?ge.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Ur(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gl(e){var t=ml;return ml+=1,di===null&&(di=[]),e=fp(di,e,t),t=ge,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?nh:Os),e}function Hr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return gl(e);if(e.$$typeof===_)return ot(e)}throw Error(o(438,String(e)))}function ys(e){var t=null,n=ge.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=ge.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ur(),ge.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=re;return t.index++,n}function bn(e,t){return typeof t=="function"?t(e):t}function qr(e){var t=Ze();return bs(t,De,e)}function bs(e,t,n){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var r=e.baseQueue,s=i.pending;if(s!==null){if(r!==null){var p=r.next;r.next=s.next,s.next=p}t.baseQueue=r=s,i.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{t=r.next;var v=p=null,C=null,H=t,P=!1;do{var ee=H.lane&-536870913;if(ee!==H.lane?(we&ee)===ee:(yn&ee)===ee){var G=H.revertLane;if(G===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),ee===ri&&(P=!0);else if((yn&G)===G){H=H.next,G===ri&&(P=!0);continue}else ee={lane:0,revertLane:H.revertLane,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},C===null?(v=C=ee,p=s):C=C.next=ee,ge.lanes|=G,In|=G;ee=H.action,_a&&n(s,ee),s=H.hasEagerState?H.eagerState:n(s,ee)}else G={lane:ee,revertLane:H.revertLane,gesture:H.gesture,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},C===null?(v=C=G,p=s):C=C.next=G,ge.lanes|=ee,In|=ee;H=H.next}while(H!==null&&H!==t);if(C===null?p=s:C.next=v,!zt(s,e.memoizedState)&&(We=!0,P&&(n=oi,n!==null)))throw n;e.memoizedState=s,e.baseState=p,e.baseQueue=C,i.lastRenderedState=s}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function xs(e){var t=Ze(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,s=t.memoizedState;if(r!==null){n.pending=null;var p=r=r.next;do s=e(s,p.action),p=p.next;while(p!==r);zt(s,t.memoizedState)||(We=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function wp(e,t,n){var i=ge,r=Ze(),s=Ce;if(s){if(n===void 0)throw Error(o(407));n=n()}else n=t();var p=!zt((De||r).memoizedState,n);if(p&&(r.memoizedState=n,We=!0),r=r.queue,Es(Tp.bind(null,i,r,e),[e]),r.getSnapshot!==t||p||Fe!==null&&Fe.memoizedState.tag&1){if(i.flags|=2048,pi(9,{destroy:void 0},Cp.bind(null,i,r,n,t),null),Le===null)throw Error(o(349));s||(yn&127)!==0||Ep(i,t,n)}return n}function Ep(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t=Ur(),ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cp(e,t,n,i){t.value=n,t.getSnapshot=i,jp(t)&&Rp(e)}function Tp(e,t,n){return n(function(){jp(t)&&Rp(e)})}function jp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function Rp(e){var t=wa(e,2);t!==null&&wt(t,e,2)}function Ss(e){var t=mt();if(typeof e=="function"){var n=e;if(e=n(),_a){Un(!0);try{n()}finally{Un(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:e},t}function zp(e,t,n,i){return e.baseState=n,bs(e,De,typeof i=="function"?i:bn)}function F2(e,t,n,i,r){if(Xr(e))throw Error(o(485));if(e=t.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){s.listeners.push(p)}};O.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,Op(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Op(e,t){var n=t.action,i=t.payload,r=e.state;if(t.isTransition){var s=O.T,p={};O.T=p;try{var v=n(r,i),C=O.S;C!==null&&C(p,v),Mp(e,t,v)}catch(H){ws(e,t,H)}finally{s!==null&&p.types!==null&&(s.types=p.types),O.T=s}}else try{s=n(r,i),Mp(e,t,s)}catch(H){ws(e,t,H)}}function Mp(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){_p(e,t,i)},function(i){return ws(e,t,i)}):_p(e,t,n)}function _p(e,t,n){t.status="fulfilled",t.value=n,Ap(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Op(e,n)))}function ws(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Ap(t),t=t.next;while(t!==i)}e.action=null}function Ap(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Dp(e,t){return t}function Np(e,t){if(Ce){var n=Le.formState;if(n!==null){e:{var i=ge;if(Ce){if(Ue){t:{for(var r=Ue,s=Xt;r.nodeType!==8;){if(!s){r=null;break t}if(r=Qt(r.nextSibling),r===null){r=null;break t}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){Ue=Qt(r.nextSibling),i=r.data==="F!";break e}}Xn(i)}i=!1}i&&(t=n[0])}}return n=mt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dp,lastRenderedState:t},n.queue=i,n=Ip.bind(null,ge,i),i.dispatch=n,i=Ss(!1),s=zs.bind(null,ge,!1,i.queue),i=mt(),r={state:t,dispatch:null,action:e,pending:null},i.queue=r,n=F2.bind(null,ge,r,s,n),r.dispatch=n,i.memoizedState=e,[t,n,!1]}function kp(e){var t=Ze();return Lp(t,De,e)}function Lp(e,t,n){if(t=bs(e,t,Dp)[0],e=qr(bn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=gl(t)}catch(p){throw p===ui?_r:p}else i=t;t=Ze();var r=t.queue,s=r.dispatch;return n!==t.memoizedState&&(ge.flags|=2048,pi(9,{destroy:void 0},W2.bind(null,r,n),null)),[i,s,e]}function W2(e,t){e.action=t}function $p(e){var t=Ze(),n=De;if(n!==null)return Lp(t,n,e);Ze(),t=t.memoizedState,n=Ze();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function pi(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=ge.updateQueue,t===null&&(t=Ur(),ge.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Bp(){return Ze().memoizedState}function Yr(e,t,n,i){var r=mt();ge.flags|=e,r.memoizedState=pi(1|t,{destroy:void 0},n,i===void 0?null:i)}function Gr(e,t,n,i){var r=Ze();i=i===void 0?null:i;var s=r.memoizedState.inst;De!==null&&i!==null&&ps(i,De.memoizedState.deps)?r.memoizedState=pi(t,s,n,i):(ge.flags|=e,r.memoizedState=pi(1|t,s,n,i))}function Up(e,t){Yr(8390656,8,e,t)}function Es(e,t){Gr(2048,8,e,t)}function P2(e){ge.flags|=4;var t=ge.updateQueue;if(t===null)t=Ur(),ge.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Hp(e){var t=Ze().memoizedState;return P2({ref:t,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function qp(e,t){return Gr(4,2,e,t)}function Yp(e,t){return Gr(4,4,e,t)}function Gp(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xp(e,t,n){n=n!=null?n.concat([e]):null,Gr(4,4,Gp.bind(null,t,e),n)}function Cs(){}function Vp(e,t){var n=Ze();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&ps(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Qp(e,t){var n=Ze();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&ps(t,i[1]))return i[0];if(i=e(),_a){Un(!0);try{e()}finally{Un(!1)}}return n.memoizedState=[i,t],i}function Ts(e,t,n){return n===void 0||(yn&1073741824)!==0&&(we&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Kh(),ge.lanes|=e,In|=e,n)}function Kp(e,t,n,i){return zt(n,t)?n:ci.current!==null?(e=Ts(e,n,i),zt(e,t)||(We=!0),e):(yn&42)===0||(yn&1073741824)!==0&&(we&261930)===0?(We=!0,e.memoizedState=n):(e=Kh(),ge.lanes|=e,In|=e,t)}function Zp(e,t,n,i,r){var s=Y.p;Y.p=s!==0&&8>s?s:8;var p=O.T,v={};O.T=v,zs(e,!1,t,n);try{var C=r(),H=O.S;if(H!==null&&H(v,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var P=K2(C,i);vl(e,t,P,Nt(e))}else vl(e,t,i,Nt(e))}catch(ee){vl(e,t,{then:function(){},status:"rejected",reason:ee},Nt())}finally{Y.p=s,p!==null&&v.types!==null&&(p.types=v.types),O.T=p}}function I2(){}function js(e,t,n,i){if(e.tag!==5)throw Error(o(476));var r=Jp(e).queue;Zp(e,r,t,W,n===null?I2:function(){return Fp(e),n(i)})}function Jp(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:W},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Fp(e){var t=Jp(e);t.next===null&&(t=e.alternate.memoizedState),vl(e,t.next.queue,{},Nt())}function Rs(){return ot(Nl)}function Wp(){return Ze().memoizedState}function Pp(){return Ze().memoizedState}function ey(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Nt();e=Kn(n);var i=Zn(t,e,n);i!==null&&(wt(i,t,n),dl(i,t,n)),t={cache:ns()},e.payload=t;return}t=t.return}}function ty(e,t,n){var i=Nt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Xr(e)?eh(t,n):(n=Vu(e,t,n,i),n!==null&&(wt(n,e,i),th(n,t,i)))}function Ip(e,t,n){var i=Nt();vl(e,t,n,i)}function vl(e,t,n,i){var r={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xr(e))eh(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var p=t.lastRenderedState,v=s(p,n);if(r.hasEagerState=!0,r.eagerState=v,zt(v,p))return Cr(e,t,r,0),Le===null&&Er(),!1}catch{}finally{}if(n=Vu(e,t,r,i),n!==null)return wt(n,e,i),th(n,t,i),!0}return!1}function zs(e,t,n,i){if(i={lane:2,revertLane:rc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Xr(e)){if(t)throw Error(o(479))}else t=Vu(e,n,i,2),t!==null&&wt(t,e,2)}function Xr(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function eh(e,t){fi=$r=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function th(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,rd(e,n)}}var yl={readContext:ot,use:Hr,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve};yl.useEffectEvent=Ve;var nh={readContext:ot,use:Hr,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:Up,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Yr(4194308,4,Gp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yr(4194308,4,e,t)},useInsertionEffect:function(e,t){Yr(4,2,e,t)},useMemo:function(e,t){var n=mt();t=t===void 0?null:t;var i=e();if(_a){Un(!0);try{e()}finally{Un(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=mt();if(n!==void 0){var r=n(t);if(_a){Un(!0);try{n(t)}finally{Un(!1)}}}else r=t;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=ty.bind(null,ge,e),[i.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ss(e);var t=e.queue,n=Ip.bind(null,ge,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Cs,useDeferredValue:function(e,t){var n=mt();return Ts(n,e,t)},useTransition:function(){var e=Ss(!1);return e=Zp.bind(null,ge,e.queue,!0,!1),mt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=ge,r=mt();if(Ce){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Le===null)throw Error(o(349));(we&127)!==0||Ep(i,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,Up(Tp.bind(null,i,s,e),[e]),i.flags|=2048,pi(9,{destroy:void 0},Cp.bind(null,i,s,n,t),null),n},useId:function(){var e=mt(),t=Le.identifierPrefix;if(Ce){var n=ln,i=an;n=(i&~(1<<32-Rt(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Br++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Z2++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Rs,useFormState:Np,useActionState:Np,useOptimistic:function(e){var t=mt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zs.bind(null,ge,!0,n),n.dispatch=t,[e,t]},useMemoCache:ys,useCacheRefresh:function(){return mt().memoizedState=ey.bind(null,ge)},useEffectEvent:function(e){var t=mt(),n={impl:e};return t.memoizedState=n,function(){if((Oe&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Os={readContext:ot,use:Hr,useCallback:Vp,useContext:ot,useEffect:Es,useImperativeHandle:Xp,useInsertionEffect:qp,useLayoutEffect:Yp,useMemo:Qp,useReducer:qr,useRef:Bp,useState:function(){return qr(bn)},useDebugValue:Cs,useDeferredValue:function(e,t){var n=Ze();return Kp(n,De.memoizedState,e,t)},useTransition:function(){var e=qr(bn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:gl(e),t]},useSyncExternalStore:wp,useId:Wp,useHostTransitionStatus:Rs,useFormState:kp,useActionState:kp,useOptimistic:function(e,t){var n=Ze();return zp(n,De,e,t)},useMemoCache:ys,useCacheRefresh:Pp};Os.useEffectEvent=Hp;var ah={readContext:ot,use:Hr,useCallback:Vp,useContext:ot,useEffect:Es,useImperativeHandle:Xp,useInsertionEffect:qp,useLayoutEffect:Yp,useMemo:Qp,useReducer:xs,useRef:Bp,useState:function(){return xs(bn)},useDebugValue:Cs,useDeferredValue:function(e,t){var n=Ze();return De===null?Ts(n,e,t):Kp(n,De.memoizedState,e,t)},useTransition:function(){var e=xs(bn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:gl(e),t]},useSyncExternalStore:wp,useId:Wp,useHostTransitionStatus:Rs,useFormState:$p,useActionState:$p,useOptimistic:function(e,t){var n=Ze();return De!==null?zp(n,De,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ys,useCacheRefresh:Pp};ah.useEffectEvent=Hp;function Ms(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:S({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _s={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Nt(),r=Kn(i);r.payload=t,n!=null&&(r.callback=n),t=Zn(e,r,i),t!==null&&(wt(t,e,i),dl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Nt(),r=Kn(i);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Zn(e,r,i),t!==null&&(wt(t,e,i),dl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Nt(),i=Kn(n);i.tag=2,t!=null&&(i.callback=t),t=Zn(e,i,n),t!==null&&(wt(t,e,n),dl(t,e,n))}};function ih(e,t,n,i,r,s,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,p):t.prototype&&t.prototype.isPureReactComponent?!il(n,i)||!il(r,s):!0}function lh(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&_s.enqueueReplaceState(t,t.state,null)}function Aa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=S({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function rh(e){wr(e)}function oh(e){console.error(e)}function uh(e){wr(e)}function Vr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function sh(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function As(e,t,n){return n=Kn(n),n.tag=3,n.payload={element:null},n.callback=function(){Vr(e,t)},n}function ch(e){return e=Kn(e),e.tag=3,e}function fh(e,t,n,i){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var s=i.value;e.payload=function(){return r(s)},e.callback=function(){sh(t,n,i)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){sh(t,n,i),typeof r!="function"&&(ea===null?ea=new Set([this]):ea.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})})}function ny(e,t,n,i,r){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&li(t,n,r,!0),n=Mt.current,n!==null){switch(n.tag){case 31:case 13:return Vt===null?ao():n.alternate===null&&Qe===0&&(Qe=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===Ar?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),ac(e,i,r)),!1;case 22:return n.flags|=65536,i===Ar?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),ac(e,i,r)),!1}throw Error(o(435,n.tag))}return ac(e,i,r),ao(),!1}if(Ce)return t=Mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,i!==Wu&&(e=Error(o(422),{cause:i}),ol(qt(e,n)))):(i!==Wu&&(t=Error(o(423),{cause:i}),ol(qt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=qt(i,n),r=As(e.stateNode,i,r),us(e,r),Qe!==4&&(Qe=2)),!1;var s=Error(o(520),{cause:i});if(s=qt(s,n),jl===null?jl=[s]:jl.push(s),Qe!==4&&(Qe=2),t===null)return!0;i=qt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=As(n.stateNode,i,e),us(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ea===null||!ea.has(s))))return n.flags|=65536,r&=-r,n.lanes|=r,r=ch(r),fh(r,e,n,i),us(n,r),!1}n=n.return}while(n!==null);return!1}var Ds=Error(o(461)),We=!1;function ut(e,t,n,i){t.child=e===null?mp(t,null,n,i):Ma(t,e.child,n,i)}function dh(e,t,n,i,r){n=n.render;var s=t.ref;if("ref"in i){var p={};for(var v in i)v!=="ref"&&(p[v]=i[v])}else p=i;return ja(t),i=hs(e,t,n,p,s,r),v=ms(),e!==null&&!We?(gs(e,t,r),xn(e,t,r)):(Ce&&v&&Ju(t),t.flags|=1,ut(e,t,i,r),t.child)}function ph(e,t,n,i,r){if(e===null){var s=n.type;return typeof s=="function"&&!Qu(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,hh(e,t,s,i,r)):(e=jr(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!qs(e,r)){var p=s.memoizedProps;if(n=n.compare,n=n!==null?n:il,n(p,i)&&e.ref===t.ref)return xn(e,t,r)}return t.flags|=1,e=hn(s,i),e.ref=t.ref,e.return=t,t.child=e}function hh(e,t,n,i,r){if(e!==null){var s=e.memoizedProps;if(il(s,i)&&e.ref===t.ref)if(We=!1,t.pendingProps=i=s,qs(e,r))(e.flags&131072)!==0&&(We=!0);else return t.lanes=e.lanes,xn(e,t,r)}return Ns(e,t,n,i,r)}function mh(e,t,n,i){var r=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~s}else i=0,t.child=null;return gh(e,t,s,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Mr(t,s!==null?s.cachePool:null),s!==null?yp(t,s):cs(),bp(t);else return i=t.lanes=536870912,gh(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(Mr(t,s.cachePool),yp(t,s),Fn(),t.memoizedState=null):(e!==null&&Mr(t,null),cs(),Fn());return ut(e,t,r,n),t.child}function bl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function gh(e,t,n,i,r){var s=is();return s=s===null?null:{parent:Je._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&Mr(t,null),cs(),bp(t),e!==null&&li(e,t,i,!0),t.childLanes=r,null}function Qr(e,t){return t=Zr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function vh(e,t,n){return Ma(t,e.child,null,n),e=Qr(t,t.pendingProps),e.flags|=2,_t(t),t.memoizedState=null,e}function ay(e,t,n){var i=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ce){if(i.mode==="hidden")return e=Qr(t,i),t.lanes=536870912,bl(null,e);if(ds(t),(e=Ue)?(e=O0(e,Xt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yn!==null?{id:an,overflow:ln}:null,retryLane:536870912,hydrationErrors:null},n=ep(e),n.return=t,t.child=n,rt=t,Ue=null)):e=null,e===null)throw Xn(t);return t.lanes=536870912,null}return Qr(t,i)}var s=e.memoizedState;if(s!==null){var p=s.dehydrated;if(ds(t),r)if(t.flags&256)t.flags&=-257,t=vh(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(We||li(e,t,n,!1),r=(n&e.childLanes)!==0,We||r){if(i=Le,i!==null&&(p=od(i,n),p!==0&&p!==s.retryLane))throw s.retryLane=p,wa(e,p),wt(i,e,p),Ds;ao(),t=vh(e,t,n)}else e=s.treeContext,Ue=Qt(p.nextSibling),rt=t,Ce=!0,Gn=null,Xt=!1,e!==null&&ap(t,e),t=Qr(t,i),t.flags|=4096;return t}return e=hn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Kr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ns(e,t,n,i,r){return ja(t),n=hs(e,t,n,i,void 0,r),i=ms(),e!==null&&!We?(gs(e,t,r),xn(e,t,r)):(Ce&&i&&Ju(t),t.flags|=1,ut(e,t,n,r),t.child)}function yh(e,t,n,i,r,s){return ja(t),t.updateQueue=null,n=Sp(t,i,n,r),xp(e),i=ms(),e!==null&&!We?(gs(e,t,s),xn(e,t,s)):(Ce&&i&&Ju(t),t.flags|=1,ut(e,t,n,s),t.child)}function bh(e,t,n,i,r){if(ja(t),t.stateNode===null){var s=ti,p=n.contextType;typeof p=="object"&&p!==null&&(s=ot(p)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=_s,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},rs(t),p=n.contextType,s.context=typeof p=="object"&&p!==null?ot(p):ti,s.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Ms(t,n,p,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(p=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),p!==s.state&&_s.enqueueReplaceState(s,s.state,null),hl(t,i,s,r),pl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var v=t.memoizedProps,C=Aa(n,v);s.props=C;var H=s.context,P=n.contextType;p=ti,typeof P=="object"&&P!==null&&(p=ot(P));var ee=n.getDerivedStateFromProps;P=typeof ee=="function"||typeof s.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,P||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(v||H!==p)&&lh(t,s,i,p),Qn=!1;var G=t.memoizedState;s.state=G,hl(t,i,s,r),pl(),H=t.memoizedState,v||G!==H||Qn?(typeof ee=="function"&&(Ms(t,n,ee,i),H=t.memoizedState),(C=Qn||ih(t,n,C,i,G,H,p))?(P||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=H),s.props=i,s.state=H,s.context=p,i=C):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,os(e,t),p=t.memoizedProps,P=Aa(n,p),s.props=P,ee=t.pendingProps,G=s.context,H=n.contextType,C=ti,typeof H=="object"&&H!==null&&(C=ot(H)),v=n.getDerivedStateFromProps,(H=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(p!==ee||G!==C)&&lh(t,s,i,C),Qn=!1,G=t.memoizedState,s.state=G,hl(t,i,s,r),pl();var K=t.memoizedState;p!==ee||G!==K||Qn||e!==null&&e.dependencies!==null&&zr(e.dependencies)?(typeof v=="function"&&(Ms(t,n,v,i),K=t.memoizedState),(P=Qn||ih(t,n,P,i,G,K,C)||e!==null&&e.dependencies!==null&&zr(e.dependencies))?(H||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,K,C),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,K,C)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||p===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=K),s.props=i,s.state=K,s.context=C,i=P):(typeof s.componentDidUpdate!="function"||p===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Kr(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=Ma(t,e.child,null,r),t.child=Ma(t,null,n,r)):ut(e,t,n,r),t.memoizedState=s.state,e=t.child):e=xn(e,t,r),e}function xh(e,t,n,i){return Ca(),t.flags|=256,ut(e,t,n,i),t.child}var ks={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ls(e){return{baseLanes:e,cachePool:sp()}}function $s(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Dt),e}function Sh(e,t,n){var i=t.pendingProps,r=!1,s=(t.flags&128)!==0,p;if((p=s)||(p=e!==null&&e.memoizedState===null?!1:(Ke.current&2)!==0),p&&(r=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ce){if(r?Jn(t):Fn(),(e=Ue)?(e=O0(e,Xt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yn!==null?{id:an,overflow:ln}:null,retryLane:536870912,hydrationErrors:null},n=ep(e),n.return=t,t.child=n,rt=t,Ue=null)):e=null,e===null)throw Xn(t);return bc(e)?t.lanes=32:t.lanes=536870912,null}var v=i.children;return i=i.fallback,r?(Fn(),r=t.mode,v=Zr({mode:"hidden",children:v},r),i=Ea(i,r,n,null),v.return=t,i.return=t,v.sibling=i,t.child=v,i=t.child,i.memoizedState=Ls(n),i.childLanes=$s(e,p,n),t.memoizedState=ks,bl(null,i)):(Jn(t),Bs(t,v))}var C=e.memoizedState;if(C!==null&&(v=C.dehydrated,v!==null)){if(s)t.flags&256?(Jn(t),t.flags&=-257,t=Us(e,t,n)):t.memoizedState!==null?(Fn(),t.child=e.child,t.flags|=128,t=null):(Fn(),v=i.fallback,r=t.mode,i=Zr({mode:"visible",children:i.children},r),v=Ea(v,r,n,null),v.flags|=2,i.return=t,v.return=t,i.sibling=v,t.child=i,Ma(t,e.child,null,n),i=t.child,i.memoizedState=Ls(n),i.childLanes=$s(e,p,n),t.memoizedState=ks,t=bl(null,i));else if(Jn(t),bc(v)){if(p=v.nextSibling&&v.nextSibling.dataset,p)var H=p.dgst;p=H,i=Error(o(419)),i.stack="",i.digest=p,ol({value:i,source:null,stack:null}),t=Us(e,t,n)}else if(We||li(e,t,n,!1),p=(n&e.childLanes)!==0,We||p){if(p=Le,p!==null&&(i=od(p,n),i!==0&&i!==C.retryLane))throw C.retryLane=i,wa(e,i),wt(p,e,i),Ds;yc(v)||ao(),t=Us(e,t,n)}else yc(v)?(t.flags|=192,t.child=e.child,t=null):(e=C.treeContext,Ue=Qt(v.nextSibling),rt=t,Ce=!0,Gn=null,Xt=!1,e!==null&&ap(t,e),t=Bs(t,i.children),t.flags|=4096);return t}return r?(Fn(),v=i.fallback,r=t.mode,C=e.child,H=C.sibling,i=hn(C,{mode:"hidden",children:i.children}),i.subtreeFlags=C.subtreeFlags&65011712,H!==null?v=hn(H,v):(v=Ea(v,r,n,null),v.flags|=2),v.return=t,i.return=t,i.sibling=v,t.child=i,bl(null,i),i=t.child,v=e.child.memoizedState,v===null?v=Ls(n):(r=v.cachePool,r!==null?(C=Je._currentValue,r=r.parent!==C?{parent:C,pool:C}:r):r=sp(),v={baseLanes:v.baseLanes|n,cachePool:r}),i.memoizedState=v,i.childLanes=$s(e,p,n),t.memoizedState=ks,bl(e.child,i)):(Jn(t),n=e.child,e=n.sibling,n=hn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=n,t.memoizedState=null,n)}function Bs(e,t){return t=Zr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Zr(e,t){return e=Ot(22,e,null,t),e.lanes=0,e}function Us(e,t,n){return Ma(t,e.child,null,n),e=Bs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wh(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),es(e.return,t,n)}function Hs(e,t,n,i,r,s){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,treeForkCount:s}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=i,p.tail=n,p.tailMode=r,p.treeForkCount=s)}function Eh(e,t,n){var i=t.pendingProps,r=i.revealOrder,s=i.tail;i=i.children;var p=Ke.current,v=(p&2)!==0;if(v?(p=p&1|2,t.flags|=128):p&=1,ie(Ke,p),ut(e,t,i,n),i=Ce?rl:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wh(e,n,t);else if(e.tag===19)wh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Lr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Hs(t,!1,r,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Lr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Hs(t,!0,n,null,s,i);break;case"together":Hs(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(li(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&zr(e)))}function iy(e,t,n){switch(t.tag){case 3:$e(t,t.stateNode.containerInfo),Vn(t,Je,e.memoizedState.cache),Ca();break;case 27:case 5:Ct(t);break;case 4:$e(t,t.stateNode.containerInfo);break;case 10:Vn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ds(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Jn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Sh(e,t,n):(Jn(t),e=xn(e,t,n),e!==null?e.sibling:null);Jn(t);break;case 19:var r=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(li(e,t,n,!1),i=(n&t.childLanes)!==0),r){if(i)return Eh(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ie(Ke,Ke.current),i)break;return null;case 22:return t.lanes=0,mh(e,t,n,t.pendingProps);case 24:Vn(t,Je,e.memoizedState.cache)}return xn(e,t,n)}function Ch(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)We=!0;else{if(!qs(e,n)&&(t.flags&128)===0)return We=!1,iy(e,t,n);We=(e.flags&131072)!==0}else We=!1,Ce&&(t.flags&1048576)!==0&&np(t,rl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=za(t.elementType),t.type=e,typeof e=="function")Qu(e)?(i=Aa(e,i),t.tag=1,t=bh(null,t,e,i,n)):(t.tag=0,t=Ns(null,t,e,i,n));else{if(e!=null){var r=e.$$typeof;if(r===X){t.tag=11,t=dh(null,t,e,i,n);break e}else if(r===F){t.tag=14,t=ph(null,t,e,i,n);break e}}throw t=ne(e)||e,Error(o(306,t,""))}}return t;case 0:return Ns(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,r=Aa(i,t.pendingProps),bh(e,t,i,r,n);case 3:e:{if($e(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var s=t.memoizedState;r=s.element,os(e,t),hl(t,i,null,n);var p=t.memoizedState;if(i=p.cache,Vn(t,Je,i),i!==s.cache&&ts(t,[Je],n,!0),pl(),i=p.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=xh(e,t,i,n);break e}else if(i!==r){r=qt(Error(o(424)),t),ol(r),t=xh(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ue=Qt(e.firstChild),rt=t,Ce=!0,Gn=null,Xt=!0,n=mp(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ca(),i===r){t=xn(e,t,n);break e}ut(e,t,i,n)}t=t.child}return t;case 26:return Kr(e,t),e===null?(n=k0(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ce||(n=t.type,e=t.pendingProps,i=co(he.current).createElement(n),i[lt]=t,i[gt]=e,st(i,n,e),tt(i),t.stateNode=i):t.memoizedState=k0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ct(t),e===null&&Ce&&(i=t.stateNode=A0(t.type,t.pendingProps,he.current),rt=t,Xt=!0,r=Ue,ia(t.type)?(xc=r,Ue=Qt(i.firstChild)):Ue=r),ut(e,t,t.pendingProps.children,n),Kr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ce&&((r=i=Ue)&&(i=Ny(i,t.type,t.pendingProps,Xt),i!==null?(t.stateNode=i,rt=t,Ue=Qt(i.firstChild),Xt=!1,r=!0):r=!1),r||Xn(t)),Ct(t),r=t.type,s=t.pendingProps,p=e!==null?e.memoizedProps:null,i=s.children,mc(r,s)?i=null:p!==null&&mc(r,p)&&(t.flags|=32),t.memoizedState!==null&&(r=hs(e,t,J2,null,null,n),Nl._currentValue=r),Kr(e,t),ut(e,t,i,n),t.child;case 6:return e===null&&Ce&&((e=n=Ue)&&(n=ky(n,t.pendingProps,Xt),n!==null?(t.stateNode=n,rt=t,Ue=null,e=!0):e=!1),e||Xn(t)),null;case 13:return Sh(e,t,n);case 4:return $e(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ma(t,null,i,n):ut(e,t,i,n),t.child;case 11:return dh(e,t,t.type,t.pendingProps,n);case 7:return ut(e,t,t.pendingProps,n),t.child;case 8:return ut(e,t,t.pendingProps.children,n),t.child;case 12:return ut(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Vn(t,t.type,i.value),ut(e,t,i.children,n),t.child;case 9:return r=t.type._context,i=t.pendingProps.children,ja(t),r=ot(r),i=i(r),t.flags|=1,ut(e,t,i,n),t.child;case 14:return ph(e,t,t.type,t.pendingProps,n);case 15:return hh(e,t,t.type,t.pendingProps,n);case 19:return Eh(e,t,n);case 31:return ay(e,t,n);case 22:return mh(e,t,n,t.pendingProps);case 24:return ja(t),i=ot(Je),e===null?(r=is(),r===null&&(r=Le,s=ns(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=n),r=s),t.memoizedState={parent:i,cache:r},rs(t),Vn(t,Je,r)):((e.lanes&n)!==0&&(os(e,t),hl(t,null,null,n),pl()),r=e.memoizedState,s=t.memoizedState,r.parent!==i?(r={parent:i,cache:i},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Vn(t,Je,i)):(i=s.cache,Vn(t,Je,i),i!==r.cache&&ts(t,[Je],n,!0))),ut(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Sn(e){e.flags|=4}function Ys(e,t,n,i,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Wh())e.flags|=8192;else throw Oa=Ar,ls}else e.flags&=-16777217}function Th(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!H0(t))if(Wh())e.flags|=8192;else throw Oa=Ar,ls}function Jr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?id():536870912,e.lanes|=t,vi|=t)}function xl(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function ly(e,t,n){var i=t.pendingProps;switch(Fu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return He(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),vn(Je),je(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ii(t)?Sn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pu())),He(t),null;case 26:var r=t.type,s=t.memoizedState;return e===null?(Sn(t),s!==null?(He(t),Th(t,s)):(He(t),Ys(t,r,null,i,n))):s?s!==e.memoizedState?(Sn(t),He(t),Th(t,s)):(He(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Sn(t),He(t),Ys(t,r,e,i,n)),null;case 27:if(Ft(t),n=he.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Sn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return He(t),null}e=ae.current,ii(t)?ip(t):(e=A0(r,i,n),t.stateNode=e,Sn(t))}return He(t),null;case 5:if(Ft(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Sn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return He(t),null}if(s=ae.current,ii(t))ip(t);else{var p=co(he.current);switch(s){case 1:s=p.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=p.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=p.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?p.createElement("select",{is:i.is}):p.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?p.createElement(r,{is:i.is}):p.createElement(r)}}s[lt]=t,s[gt]=i;e:for(p=t.child;p!==null;){if(p.tag===5||p.tag===6)s.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}t.stateNode=s;e:switch(st(s,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Sn(t)}}return He(t),Ys(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Sn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=he.current,ii(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,r=rt,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[lt]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||S0(e.nodeValue,n)),e||Xn(t,!0)}else e=co(e).createTextNode(i),e[lt]=t,t.stateNode=e}return He(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=ii(t),n!==null){if(e===null){if(!i)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[lt]=t}else Ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),e=!1}else n=Pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_t(t),t):(_t(t),null);if((t.flags&128)!==0)throw Error(o(558))}return He(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=ii(t),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(o(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));r[lt]=t}else Ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),r=!1}else r=Pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(_t(t),t):(_t(t),null)}return _t(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==r&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Jr(t,t.updateQueue),He(t),null);case 4:return je(),e===null&&cc(t.stateNode.containerInfo),He(t),null;case 10:return vn(t.type),He(t),null;case 19:if(Q(Ke),i=t.memoizedState,i===null)return He(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)xl(i,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Lr(e),s!==null){for(t.flags|=128,xl(i,!1),e=s.updateQueue,t.updateQueue=e,Jr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Id(n,e),n=n.sibling;return ie(Ke,Ke.current&1|2),Ce&&mn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Tt()>eo&&(t.flags|=128,r=!0,xl(i,!1),t.lanes=4194304)}else{if(!r)if(e=Lr(s),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Jr(t,e),xl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Ce)return He(t),null}else 2*Tt()-i.renderingStartTime>eo&&n!==536870912&&(t.flags|=128,r=!0,xl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Tt(),e.sibling=null,n=Ke.current,ie(Ke,r?n&1|2:n&1),Ce&&mn(t,i.treeForkCount),e):(He(t),null);case 22:case 23:return _t(t),fs(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),n=t.updateQueue,n!==null&&Jr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Q(Ra),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),vn(Je),He(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function ry(e,t){switch(Fu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vn(Je),je(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ft(t),null;case 31:if(t.memoizedState!==null){if(_t(t),t.alternate===null)throw Error(o(340));Ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_t(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(Ke),null;case 4:return je(),null;case 10:return vn(t.type),null;case 22:case 23:return _t(t),fs(),e!==null&&Q(Ra),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return vn(Je),null;case 25:return null;default:return null}}function jh(e,t){switch(Fu(t),t.tag){case 3:vn(Je),je();break;case 26:case 27:case 5:Ft(t);break;case 4:je();break;case 31:t.memoizedState!==null&&_t(t);break;case 13:_t(t);break;case 19:Q(Ke);break;case 10:vn(t.type);break;case 22:case 23:_t(t),fs(),e!==null&&Q(Ra);break;case 24:vn(Je)}}function Sl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){i=void 0;var s=n.create,p=n.inst;i=s(),p.destroy=i}n=n.next}while(n!==r)}}catch(v){Ae(t,t.return,v)}}function Wn(e,t,n){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var s=r.next;i=s;do{if((i.tag&e)===e){var p=i.inst,v=p.destroy;if(v!==void 0){p.destroy=void 0,r=t;var C=n,H=v;try{H()}catch(P){Ae(r,C,P)}}}i=i.next}while(i!==s)}}catch(P){Ae(t,t.return,P)}}function Rh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{vp(t,n)}catch(i){Ae(e,e.return,i)}}}function zh(e,t,n){n.props=Aa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Ae(e,t,i)}}function wl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(r){Ae(e,t,r)}}function rn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(r){Ae(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Ae(e,t,r)}else n.current=null}function Oh(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){Ae(e,e.return,r)}}function Gs(e,t,n){try{var i=e.stateNode;zy(i,e.type,n,t),i[gt]=t}catch(r){Ae(e,e.return,r)}}function Mh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ia(e.type)||e.tag===4}function Xs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vs(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dn));else if(i!==4&&(i===27&&ia(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Vs(e,t,n),e=e.sibling;e!==null;)Vs(e,t,n),e=e.sibling}function Fr(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ia(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Fr(e,t,n),e=e.sibling;e!==null;)Fr(e,t,n),e=e.sibling}function _h(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);st(t,i,n),t[lt]=e,t[gt]=n}catch(s){Ae(e,e.return,s)}}var wn=!1,Pe=!1,Qs=!1,Ah=typeof WeakSet=="function"?WeakSet:Set,nt=null;function oy(e,t){if(e=e.containerInfo,pc=yo,e=Xd(e),Uu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var p=0,v=-1,C=-1,H=0,P=0,ee=e,G=null;t:for(;;){for(var K;ee!==n||r!==0&&ee.nodeType!==3||(v=p+r),ee!==s||i!==0&&ee.nodeType!==3||(C=p+i),ee.nodeType===3&&(p+=ee.nodeValue.length),(K=ee.firstChild)!==null;)G=ee,ee=K;for(;;){if(ee===e)break t;if(G===n&&++H===r&&(v=p),G===s&&++P===i&&(C=p),(K=ee.nextSibling)!==null)break;ee=G,G=ee.parentNode}ee=K}n=v===-1||C===-1?null:{start:v,end:C}}else n=null}n=n||{start:0,end:0}}else n=null;for(hc={focusedElem:e,selectionRange:n},yo=!1,nt=t;nt!==null;)if(t=nt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,nt=e;else for(;nt!==null;){switch(t=nt,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,r=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var ue=Aa(n.type,r);e=i.getSnapshotBeforeUpdate(ue,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(pe){Ae(n,n.return,pe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)vc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,nt=e;break}nt=t.return}}function Dh(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Cn(e,n),i&4&&Sl(5,n);break;case 1:if(Cn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(p){Ae(n,n.return,p)}else{var r=Aa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){Ae(n,n.return,p)}}i&64&&Rh(n),i&512&&wl(n,n.return);break;case 3:if(Cn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{vp(e,t)}catch(p){Ae(n,n.return,p)}}break;case 27:t===null&&i&4&&_h(n);case 26:case 5:Cn(e,n),t===null&&i&4&&Oh(n),i&512&&wl(n,n.return);break;case 12:Cn(e,n);break;case 31:Cn(e,n),i&4&&Lh(e,n);break;case 13:Cn(e,n),i&4&&$h(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=gy.bind(null,n),Ly(e,n))));break;case 22:if(i=n.memoizedState!==null||wn,!i){t=t!==null&&t.memoizedState!==null||Pe,r=wn;var s=Pe;wn=i,(Pe=t)&&!s?Tn(e,n,(n.subtreeFlags&8772)!==0):Cn(e,n),wn=r,Pe=s}break;case 30:break;default:Cn(e,n)}}function Nh(e){var t=e.alternate;t!==null&&(e.alternate=null,Nh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ge=null,yt=!1;function En(e,t,n){for(n=n.child;n!==null;)kh(e,t,n),n=n.sibling}function kh(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Qi,n)}catch{}switch(n.tag){case 26:Pe||rn(n,t),En(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Pe||rn(n,t);var i=Ge,r=yt;ia(n.type)&&(Ge=n.stateNode,yt=!1),En(e,t,n),_l(n.stateNode),Ge=i,yt=r;break;case 5:Pe||rn(n,t);case 6:if(i=Ge,r=yt,Ge=null,En(e,t,n),Ge=i,yt=r,Ge!==null)if(yt)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(n.stateNode)}catch(s){Ae(n,t,s)}else try{Ge.removeChild(n.stateNode)}catch(s){Ae(n,t,s)}break;case 18:Ge!==null&&(yt?(e=Ge,R0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ti(e)):R0(Ge,n.stateNode));break;case 4:i=Ge,r=yt,Ge=n.stateNode.containerInfo,yt=!0,En(e,t,n),Ge=i,yt=r;break;case 0:case 11:case 14:case 15:Wn(2,n,t),Pe||Wn(4,n,t),En(e,t,n);break;case 1:Pe||(rn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&zh(n,t,i)),En(e,t,n);break;case 21:En(e,t,n);break;case 22:Pe=(i=Pe)||n.memoizedState!==null,En(e,t,n),Pe=i;break;default:En(e,t,n)}}function Lh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ti(e)}catch(n){Ae(t,t.return,n)}}}function $h(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ti(e)}catch(n){Ae(t,t.return,n)}}function uy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ah),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ah),t;default:throw Error(o(435,e.tag))}}function Wr(e,t){var n=uy(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var r=vy.bind(null,e,i);i.then(r,r)}})}function bt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i],s=e,p=t,v=p;e:for(;v!==null;){switch(v.tag){case 27:if(ia(v.type)){Ge=v.stateNode,yt=!1;break e}break;case 5:Ge=v.stateNode,yt=!1;break e;case 3:case 4:Ge=v.stateNode.containerInfo,yt=!0;break e}v=v.return}if(Ge===null)throw Error(o(160));kh(s,p,r),Ge=null,yt=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Bh(t,e),t=t.sibling}var Pt=null;function Bh(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bt(t,e),xt(e),i&4&&(Wn(3,e,e.return),Sl(3,e),Wn(5,e,e.return));break;case 1:bt(t,e),xt(e),i&512&&(Pe||n===null||rn(n,n.return)),i&64&&wn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var r=Pt;if(bt(t,e),xt(e),i&512&&(Pe||n===null||rn(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":s=r.getElementsByTagName("title")[0],(!s||s[Ji]||s[lt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(i),r.head.insertBefore(s,r.querySelector("head > title"))),st(s,i,n),s[lt]=e,tt(s),i=s;break e;case"link":var p=B0("link","href",r).get(i+(n.href||""));if(p){for(var v=0;v<p.length;v++)if(s=p[v],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(v,1);break t}}s=r.createElement(i),st(s,i,n),r.head.appendChild(s);break;case"meta":if(p=B0("meta","content",r).get(i+(n.content||""))){for(v=0;v<p.length;v++)if(s=p[v],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(v,1);break t}}s=r.createElement(i),st(s,i,n),r.head.appendChild(s);break;default:throw Error(o(468,i))}s[lt]=e,tt(s),i=s}e.stateNode=i}else U0(r,e.type,e.stateNode);else e.stateNode=$0(r,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?U0(r,e.type,e.stateNode):$0(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Gs(e,e.memoizedProps,n.memoizedProps)}break;case 27:bt(t,e),xt(e),i&512&&(Pe||n===null||rn(n,n.return)),n!==null&&i&4&&Gs(e,e.memoizedProps,n.memoizedProps);break;case 5:if(bt(t,e),xt(e),i&512&&(Pe||n===null||rn(n,n.return)),e.flags&32){r=e.stateNode;try{Za(r,"")}catch(ue){Ae(e,e.return,ue)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,Gs(e,r,n!==null?n.memoizedProps:r)),i&1024&&(Qs=!0);break;case 6:if(bt(t,e),xt(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(ue){Ae(e,e.return,ue)}}break;case 3:if(ho=null,r=Pt,Pt=fo(t.containerInfo),bt(t,e),Pt=r,xt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ti(t.containerInfo)}catch(ue){Ae(e,e.return,ue)}Qs&&(Qs=!1,Uh(e));break;case 4:i=Pt,Pt=fo(e.stateNode.containerInfo),bt(t,e),xt(e),Pt=i;break;case 12:bt(t,e),xt(e);break;case 31:bt(t,e),xt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Wr(e,i)));break;case 13:bt(t,e),xt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ir=Tt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Wr(e,i)));break;case 22:r=e.memoizedState!==null;var C=n!==null&&n.memoizedState!==null,H=wn,P=Pe;if(wn=H||r,Pe=P||C,bt(t,e),Pe=P,wn=H,xt(e),i&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||C||wn||Pe||Da(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){C=n=t;try{if(s=C.stateNode,r)p=s.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{v=C.stateNode;var ee=C.memoizedProps.style,G=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;v.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(ue){Ae(C,C.return,ue)}}}else if(t.tag===6){if(n===null){C=t;try{C.stateNode.nodeValue=r?"":C.memoizedProps}catch(ue){Ae(C,C.return,ue)}}}else if(t.tag===18){if(n===null){C=t;try{var K=C.stateNode;r?z0(K,!0):z0(C.stateNode,!1)}catch(ue){Ae(C,C.return,ue)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Wr(e,n))));break;case 19:bt(t,e),xt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Wr(e,i)));break;case 30:break;case 21:break;default:bt(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Mh(i)){n=i;break}i=i.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var r=n.stateNode,s=Xs(e);Fr(e,s,r);break;case 5:var p=n.stateNode;n.flags&32&&(Za(p,""),n.flags&=-33);var v=Xs(e);Fr(e,v,p);break;case 3:case 4:var C=n.stateNode.containerInfo,H=Xs(e);Vs(e,H,C);break;default:throw Error(o(161))}}catch(P){Ae(e,e.return,P)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Uh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Uh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Cn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Dh(e,t.alternate,t),t=t.sibling}function Da(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wn(4,t,t.return),Da(t);break;case 1:rn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&zh(t,t.return,n),Da(t);break;case 27:_l(t.stateNode);case 26:case 5:rn(t,t.return),Da(t);break;case 22:t.memoizedState===null&&Da(t);break;case 30:Da(t);break;default:Da(t)}e=e.sibling}}function Tn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,r=e,s=t,p=s.flags;switch(s.tag){case 0:case 11:case 15:Tn(r,s,n),Sl(4,s);break;case 1:if(Tn(r,s,n),i=s,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(H){Ae(i,i.return,H)}if(i=s,r=i.updateQueue,r!==null){var v=i.stateNode;try{var C=r.shared.hiddenCallbacks;if(C!==null)for(r.shared.hiddenCallbacks=null,r=0;r<C.length;r++)gp(C[r],v)}catch(H){Ae(i,i.return,H)}}n&&p&64&&Rh(s),wl(s,s.return);break;case 27:_h(s);case 26:case 5:Tn(r,s,n),n&&i===null&&p&4&&Oh(s),wl(s,s.return);break;case 12:Tn(r,s,n);break;case 31:Tn(r,s,n),n&&p&4&&Lh(r,s);break;case 13:Tn(r,s,n),n&&p&4&&$h(r,s);break;case 22:s.memoizedState===null&&Tn(r,s,n),wl(s,s.return);break;case 30:break;default:Tn(r,s,n)}t=t.sibling}}function Ks(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ul(n))}function Zs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ul(e))}function It(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Hh(e,t,n,i),t=t.sibling}function Hh(e,t,n,i){var r=t.flags;switch(t.tag){case 0:case 11:case 15:It(e,t,n,i),r&2048&&Sl(9,t);break;case 1:It(e,t,n,i);break;case 3:It(e,t,n,i),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ul(e)));break;case 12:if(r&2048){It(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,p=s.id,v=s.onPostCommit;typeof v=="function"&&v(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(C){Ae(t,t.return,C)}}else It(e,t,n,i);break;case 31:It(e,t,n,i);break;case 13:It(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,p=t.alternate,t.memoizedState!==null?s._visibility&2?It(e,t,n,i):El(e,t):s._visibility&2?It(e,t,n,i):(s._visibility|=2,hi(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Ks(p,t);break;case 24:It(e,t,n,i),r&2048&&Zs(t.alternate,t);break;default:It(e,t,n,i)}}function hi(e,t,n,i,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,p=t,v=n,C=i,H=p.flags;switch(p.tag){case 0:case 11:case 15:hi(s,p,v,C,r),Sl(8,p);break;case 23:break;case 22:var P=p.stateNode;p.memoizedState!==null?P._visibility&2?hi(s,p,v,C,r):El(s,p):(P._visibility|=2,hi(s,p,v,C,r)),r&&H&2048&&Ks(p.alternate,p);break;case 24:hi(s,p,v,C,r),r&&H&2048&&Zs(p.alternate,p);break;default:hi(s,p,v,C,r)}t=t.sibling}}function El(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,r=i.flags;switch(i.tag){case 22:El(n,i),r&2048&&Ks(i.alternate,i);break;case 24:El(n,i),r&2048&&Zs(i.alternate,i);break;default:El(n,i)}t=t.sibling}}var Cl=8192;function mi(e,t,n){if(e.subtreeFlags&Cl)for(e=e.child;e!==null;)qh(e,t,n),e=e.sibling}function qh(e,t,n){switch(e.tag){case 26:mi(e,t,n),e.flags&Cl&&e.memoizedState!==null&&Zy(n,Pt,e.memoizedState,e.memoizedProps);break;case 5:mi(e,t,n);break;case 3:case 4:var i=Pt;Pt=fo(e.stateNode.containerInfo),mi(e,t,n),Pt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Cl,Cl=16777216,mi(e,t,n),Cl=i):mi(e,t,n));break;default:mi(e,t,n)}}function Yh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Tl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];nt=i,Xh(i,e)}Yh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gh(e),e=e.sibling}function Gh(e){switch(e.tag){case 0:case 11:case 15:Tl(e),e.flags&2048&&Wn(9,e,e.return);break;case 3:Tl(e);break;case 12:Tl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Pr(e)):Tl(e);break;default:Tl(e)}}function Pr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];nt=i,Xh(i,e)}Yh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wn(8,t,t.return),Pr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Pr(t));break;default:Pr(t)}e=e.sibling}}function Xh(e,t){for(;nt!==null;){var n=nt;switch(n.tag){case 0:case 11:case 15:Wn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ul(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,nt=i;else e:for(n=e;nt!==null;){i=nt;var r=i.sibling,s=i.return;if(Nh(i),i===n){nt=null;break e}if(r!==null){r.return=s,nt=r;break e}nt=s}}}var sy={getCacheForType:function(e){var t=ot(Je),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ot(Je).controller.signal}},cy=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Le=null,xe=null,we=0,_e=0,At=null,Pn=!1,gi=!1,Js=!1,jn=0,Qe=0,In=0,Na=0,Fs=0,Dt=0,vi=0,jl=null,St=null,Ws=!1,Ir=0,Vh=0,eo=1/0,to=null,ea=null,et=0,ta=null,yi=null,Rn=0,Ps=0,Is=null,Qh=null,Rl=0,ec=null;function Nt(){return(Oe&2)!==0&&we!==0?we&-we:O.T!==null?rc():ud()}function Kh(){if(Dt===0)if((we&536870912)===0||Ce){var e=sr;sr<<=1,(sr&3932160)===0&&(sr=262144),Dt=e}else Dt=536870912;return e=Mt.current,e!==null&&(e.flags|=32),Dt}function wt(e,t,n){(e===Le&&(_e===2||_e===9)||e.cancelPendingCommit!==null)&&(bi(e,0),na(e,we,Dt,!1)),Zi(e,n),((Oe&2)===0||e!==Le)&&(e===Le&&((Oe&2)===0&&(Na|=n),Qe===4&&na(e,we,Dt,!1)),on(e))}function Zh(e,t,n){if((Oe&6)!==0)throw Error(o(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ki(e,t),r=i?py(e,t):nc(e,t,!0),s=i;do{if(r===0){gi&&!i&&na(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!fy(n)){r=nc(e,t,!1),s=!1;continue}if(r===2){if(s=t,e.errorRecoveryDisabledLanes&s)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var v=e;r=jl;var C=v.current.memoizedState.isDehydrated;if(C&&(bi(v,p).flags|=256),p=nc(v,p,!1),p!==2){if(Js&&!C){v.errorRecoveryDisabledLanes|=s,Na|=s,r=4;break e}s=St,St=r,s!==null&&(St===null?St=s:St.push.apply(St,s))}r=p}if(s=!1,r!==2)continue}}if(r===1){bi(e,0),na(e,t,0,!0);break}e:{switch(i=e,s=r,s){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:na(i,t,Dt,!Pn);break e;case 2:St=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(r=Ir+300-Tt(),10<r)){if(na(i,t,Dt,!Pn),fr(i,0,!0)!==0)break e;Rn=t,i.timeoutHandle=T0(Jh.bind(null,i,n,St,to,Ws,t,Dt,Na,vi,Pn,s,"Throttled",-0,0),r);break e}Jh(i,n,St,to,Ws,t,Dt,Na,vi,Pn,s,null,-0,0)}}break}while(!0);on(e)}function Jh(e,t,n,i,r,s,p,v,C,H,P,ee,G,K){if(e.timeoutHandle=-1,ee=t.subtreeFlags,ee&8192||(ee&16785408)===16785408){ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dn},qh(t,s,ee);var ue=(s&62914560)===s?Ir-Tt():(s&4194048)===s?Vh-Tt():0;if(ue=Jy(ee,ue),ue!==null){Rn=s,e.cancelPendingCommit=ue(a0.bind(null,e,t,s,n,i,r,p,v,C,P,ee,null,G,K)),na(e,s,p,!H);return}}a0(e,t,s,n,i,r,p,v,C)}function fy(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!zt(s(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function na(e,t,n,i){t&=~Fs,t&=~Na,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var r=t;0<r;){var s=31-Rt(r),p=1<<s;i[s]=-1,r&=~p}n!==0&&ld(e,n,t)}function no(){return(Oe&6)===0?(zl(0),!1):!0}function tc(){if(xe!==null){if(_e===0)var e=xe.return;else e=xe,gn=Ta=null,vs(e),si=null,cl=0,e=xe;for(;e!==null;)jh(e.alternate,e),e=e.return;xe=null}}function bi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,_y(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Rn=0,tc(),Le=e,xe=n=hn(e.current,null),we=t,_e=0,At=null,Pn=!1,gi=Ki(e,t),Js=!1,vi=Dt=Fs=Na=In=Qe=0,St=jl=null,Ws=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-Rt(i),s=1<<r;t|=e[r],i&=~s}return jn=t,Er(),n}function Fh(e,t){ge=null,O.H=yl,t===ui||t===_r?(t=dp(),_e=3):t===ls?(t=dp(),_e=4):_e=t===Ds?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,At=t,xe===null&&(Qe=1,Vr(e,qt(t,e.current)))}function Wh(){var e=Mt.current;return e===null?!0:(we&4194048)===we?Vt===null:(we&62914560)===we||(we&536870912)!==0?e===Vt:!1}function Ph(){var e=O.H;return O.H=yl,e===null?yl:e}function Ih(){var e=O.A;return O.A=sy,e}function ao(){Qe=4,Pn||(we&4194048)!==we&&Mt.current!==null||(gi=!0),(In&134217727)===0&&(Na&134217727)===0||Le===null||na(Le,we,Dt,!1)}function nc(e,t,n){var i=Oe;Oe|=2;var r=Ph(),s=Ih();(Le!==e||we!==t)&&(to=null,bi(e,t)),t=!1;var p=Qe;e:do try{if(_e!==0&&xe!==null){var v=xe,C=At;switch(_e){case 8:tc(),p=6;break e;case 3:case 2:case 9:case 6:Mt.current===null&&(t=!0);var H=_e;if(_e=0,At=null,xi(e,v,C,H),n&&gi){p=0;break e}break;default:H=_e,_e=0,At=null,xi(e,v,C,H)}}dy(),p=Qe;break}catch(P){Fh(e,P)}while(!0);return t&&e.shellSuspendCounter++,gn=Ta=null,Oe=i,O.H=r,O.A=s,xe===null&&(Le=null,we=0,Er()),p}function dy(){for(;xe!==null;)e0(xe)}function py(e,t){var n=Oe;Oe|=2;var i=Ph(),r=Ih();Le!==e||we!==t?(to=null,eo=Tt()+500,bi(e,t)):gi=Ki(e,t);e:do try{if(_e!==0&&xe!==null){t=xe;var s=At;t:switch(_e){case 1:_e=0,At=null,xi(e,t,s,1);break;case 2:case 9:if(cp(s)){_e=0,At=null,t0(t);break}t=function(){_e!==2&&_e!==9||Le!==e||(_e=7),on(e)},s.then(t,t);break e;case 3:_e=7;break e;case 4:_e=5;break e;case 7:cp(s)?(_e=0,At=null,t0(t)):(_e=0,At=null,xi(e,t,s,7));break;case 5:var p=null;switch(xe.tag){case 26:p=xe.memoizedState;case 5:case 27:var v=xe;if(p?H0(p):v.stateNode.complete){_e=0,At=null;var C=v.sibling;if(C!==null)xe=C;else{var H=v.return;H!==null?(xe=H,io(H)):xe=null}break t}}_e=0,At=null,xi(e,t,s,5);break;case 6:_e=0,At=null,xi(e,t,s,6);break;case 8:tc(),Qe=6;break e;default:throw Error(o(462))}}hy();break}catch(P){Fh(e,P)}while(!0);return gn=Ta=null,O.H=i,O.A=r,Oe=n,xe!==null?0:(Le=null,we=0,Er(),Qe)}function hy(){for(;xe!==null&&!$v();)e0(xe)}function e0(e){var t=Ch(e.alternate,e,jn);e.memoizedProps=e.pendingProps,t===null?io(e):xe=t}function t0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yh(n,t,t.pendingProps,t.type,void 0,we);break;case 11:t=yh(n,t,t.pendingProps,t.type.render,t.ref,we);break;case 5:vs(t);default:jh(n,t),t=xe=Id(t,jn),t=Ch(n,t,jn)}e.memoizedProps=e.pendingProps,t===null?io(e):xe=t}function xi(e,t,n,i){gn=Ta=null,vs(t),si=null,cl=0;var r=t.return;try{if(ny(e,r,t,n,we)){Qe=1,Vr(e,qt(n,e.current)),xe=null;return}}catch(s){if(r!==null)throw xe=r,s;Qe=1,Vr(e,qt(n,e.current)),xe=null;return}t.flags&32768?(Ce||i===1?e=!0:gi||(we&536870912)!==0?e=!1:(Pn=e=!0,(i===2||i===9||i===3||i===6)&&(i=Mt.current,i!==null&&i.tag===13&&(i.flags|=16384))),n0(t,e)):io(t)}function io(e){var t=e;do{if((t.flags&32768)!==0){n0(t,Pn);return}e=t.return;var n=ly(t.alternate,t,jn);if(n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);Qe===0&&(Qe=5)}function n0(e,t){do{var n=ry(e.alternate,e);if(n!==null){n.flags&=32767,xe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){xe=e;return}xe=e=n}while(e!==null);Qe=6,xe=null}function a0(e,t,n,i,r,s,p,v,C){e.cancelPendingCommit=null;do lo();while(et!==0);if((Oe&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(s=t.lanes|t.childLanes,s|=Xu,Kv(e,n,s,p,v,C),e===Le&&(xe=Le=null,we=0),yi=t,ta=e,Rn=n,Ps=s,Is=r,Qh=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yy(or,function(){return u0(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=O.T,O.T=null,r=Y.p,Y.p=2,p=Oe,Oe|=4;try{oy(e,t,n)}finally{Oe=p,Y.p=r,O.T=i}}et=1,i0(),l0(),r0()}}function i0(){if(et===1){et=0;var e=ta,t=yi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=O.T,O.T=null;var i=Y.p;Y.p=2;var r=Oe;Oe|=4;try{Bh(t,e);var s=hc,p=Xd(e.containerInfo),v=s.focusedElem,C=s.selectionRange;if(p!==v&&v&&v.ownerDocument&&Gd(v.ownerDocument.documentElement,v)){if(C!==null&&Uu(v)){var H=C.start,P=C.end;if(P===void 0&&(P=H),"selectionStart"in v)v.selectionStart=H,v.selectionEnd=Math.min(P,v.value.length);else{var ee=v.ownerDocument||document,G=ee&&ee.defaultView||window;if(G.getSelection){var K=G.getSelection(),ue=v.textContent.length,pe=Math.min(C.start,ue),ke=C.end===void 0?pe:Math.min(C.end,ue);!K.extend&&pe>ke&&(p=ke,ke=pe,pe=p);var N=Yd(v,pe),z=Yd(v,ke);if(N&&z&&(K.rangeCount!==1||K.anchorNode!==N.node||K.anchorOffset!==N.offset||K.focusNode!==z.node||K.focusOffset!==z.offset)){var U=ee.createRange();U.setStart(N.node,N.offset),K.removeAllRanges(),pe>ke?(K.addRange(U),K.extend(z.node,z.offset)):(U.setEnd(z.node,z.offset),K.addRange(U))}}}}for(ee=[],K=v;K=K.parentNode;)K.nodeType===1&&ee.push({element:K,left:K.scrollLeft,top:K.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<ee.length;v++){var I=ee[v];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}yo=!!pc,hc=pc=null}finally{Oe=r,Y.p=i,O.T=n}}e.current=t,et=2}}function l0(){if(et===2){et=0;var e=ta,t=yi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=O.T,O.T=null;var i=Y.p;Y.p=2;var r=Oe;Oe|=4;try{Dh(e,t.alternate,t)}finally{Oe=r,Y.p=i,O.T=n}}et=3}}function r0(){if(et===4||et===3){et=0,Bv();var e=ta,t=yi,n=Rn,i=Qh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?et=5:(et=0,yi=ta=null,o0(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(ea=null),xu(n),t=t.stateNode,jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Qi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=O.T,r=Y.p,Y.p=2,O.T=null;try{for(var s=e.onRecoverableError,p=0;p<i.length;p++){var v=i[p];s(v.value,{componentStack:v.stack})}}finally{O.T=t,Y.p=r}}(Rn&3)!==0&&lo(),on(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===ec?Rl++:(Rl=0,ec=e):Rl=0,zl(0)}}function o0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ul(t)))}function lo(){return i0(),l0(),r0(),u0()}function u0(){if(et!==5)return!1;var e=ta,t=Ps;Ps=0;var n=xu(Rn),i=O.T,r=Y.p;try{Y.p=32>n?32:n,O.T=null,n=Is,Is=null;var s=ta,p=Rn;if(et=0,yi=ta=null,Rn=0,(Oe&6)!==0)throw Error(o(331));var v=Oe;if(Oe|=4,Gh(s.current),Hh(s,s.current,p,n),Oe=v,zl(0,!1),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Qi,s)}catch{}return!0}finally{Y.p=r,O.T=i,o0(e,t)}}function s0(e,t,n){t=qt(n,t),t=As(e.stateNode,t,2),e=Zn(e,t,2),e!==null&&(Zi(e,2),on(e))}function Ae(e,t,n){if(e.tag===3)s0(e,e,n);else for(;t!==null;){if(t.tag===3){s0(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ea===null||!ea.has(i))){e=qt(n,e),n=ch(2),i=Zn(t,n,2),i!==null&&(fh(n,i,t,e),Zi(i,2),on(i));break}}t=t.return}}function ac(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new cy;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(Js=!0,r.add(n),e=my.bind(null,e,t,n),t.then(e,e))}function my(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Le===e&&(we&n)===n&&(Qe===4||Qe===3&&(we&62914560)===we&&300>Tt()-Ir?(Oe&2)===0&&bi(e,0):Fs|=n,vi===we&&(vi=0)),on(e)}function c0(e,t){t===0&&(t=id()),e=wa(e,t),e!==null&&(Zi(e,t),on(e))}function gy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),c0(e,n)}function vy(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),c0(e,n)}function yy(e,t){return gu(e,t)}var ro=null,Si=null,ic=!1,oo=!1,lc=!1,aa=0;function on(e){e!==Si&&e.next===null&&(Si===null?ro=Si=e:Si=Si.next=e),oo=!0,ic||(ic=!0,xy())}function zl(e,t){if(!lc&&oo){lc=!0;do for(var n=!1,i=ro;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var s=0;else{var p=i.suspendedLanes,v=i.pingedLanes;s=(1<<31-Rt(42|e)+1)-1,s&=r&~(p&~v),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,h0(i,s))}else s=we,s=fr(i,i===Le?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||Ki(i,s)||(n=!0,h0(i,s));i=i.next}while(n);lc=!1}}function by(){f0()}function f0(){oo=ic=!1;var e=0;aa!==0&&My()&&(e=aa);for(var t=Tt(),n=null,i=ro;i!==null;){var r=i.next,s=d0(i,t);s===0?(i.next=null,n===null?ro=r:n.next=r,r===null&&(Si=n)):(n=i,(e!==0||(s&3)!==0)&&(oo=!0)),i=r}et!==0&&et!==5||zl(e),aa!==0&&(aa=0)}function d0(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var p=31-Rt(s),v=1<<p,C=r[p];C===-1?((v&n)===0||(v&i)!==0)&&(r[p]=Qv(v,t)):C<=t&&(e.expiredLanes|=v),s&=~v}if(t=Le,n=we,n=fr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(_e===2||_e===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&vu(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ki(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&vu(i),xu(n)){case 2:case 8:n=nd;break;case 32:n=or;break;case 268435456:n=ad;break;default:n=or}return i=p0.bind(null,e),n=gu(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&vu(i),e.callbackPriority=2,e.callbackNode=null,2}function p0(e,t){if(et!==0&&et!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(lo()&&e.callbackNode!==n)return null;var i=we;return i=fr(e,e===Le?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Zh(e,i,t),d0(e,Tt()),e.callbackNode!=null&&e.callbackNode===n?p0.bind(null,e):null)}function h0(e,t){if(lo())return null;Zh(e,t,!0)}function xy(){Ay(function(){(Oe&6)!==0?gu(td,by):f0()})}function rc(){if(aa===0){var e=ri;e===0&&(e=ur,ur<<=1,(ur&261888)===0&&(ur=256)),aa=e}return aa}function m0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:mr(""+e)}function g0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Sy(e,t,n,i,r){if(t==="submit"&&n&&n.stateNode===r){var s=m0((r[gt]||null).action),p=i.submitter;p&&(t=(t=p[gt]||null)?m0(t.formAction):p.getAttribute("formAction"),t!==null&&(s=t,p=null));var v=new br("action","action",null,i,r);e.push({event:v,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(aa!==0){var C=p?g0(r,p):new FormData(r);js(n,{pending:!0,data:C,method:r.method,action:s},null,C)}}else typeof s=="function"&&(v.preventDefault(),C=p?g0(r,p):new FormData(r),js(n,{pending:!0,data:C,method:r.method,action:s},s,C))},currentTarget:r}]})}}for(var oc=0;oc<Gu.length;oc++){var uc=Gu[oc],wy=uc.toLowerCase(),Ey=uc[0].toUpperCase()+uc.slice(1);Wt(wy,"on"+Ey)}Wt(Kd,"onAnimationEnd"),Wt(Zd,"onAnimationIteration"),Wt(Jd,"onAnimationStart"),Wt("dblclick","onDoubleClick"),Wt("focusin","onFocus"),Wt("focusout","onBlur"),Wt(U2,"onTransitionRun"),Wt(H2,"onTransitionStart"),Wt(q2,"onTransitionCancel"),Wt(Fd,"onTransitionEnd"),Qa("onMouseEnter",["mouseout","mouseover"]),Qa("onMouseLeave",["mouseout","mouseover"]),Qa("onPointerEnter",["pointerout","pointerover"]),Qa("onPointerLeave",["pointerout","pointerover"]),ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ya("onBeforeInput",["compositionend","keypress","textInput","paste"]),ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ol));function v0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var p=i.length-1;0<=p;p--){var v=i[p],C=v.instance,H=v.currentTarget;if(v=v.listener,C!==s&&r.isPropagationStopped())break e;s=v,r.currentTarget=H;try{s(r)}catch(P){wr(P)}r.currentTarget=null,s=C}else for(p=0;p<i.length;p++){if(v=i[p],C=v.instance,H=v.currentTarget,v=v.listener,C!==s&&r.isPropagationStopped())break e;s=v,r.currentTarget=H;try{s(r)}catch(P){wr(P)}r.currentTarget=null,s=C}}}}function Se(e,t){var n=t[Su];n===void 0&&(n=t[Su]=new Set);var i=e+"__bubble";n.has(i)||(y0(t,e,2,!1),n.add(i))}function sc(e,t,n){var i=0;t&&(i|=4),y0(n,e,i,t)}var uo="_reactListening"+Math.random().toString(36).slice(2);function cc(e){if(!e[uo]){e[uo]=!0,fd.forEach(function(n){n!=="selectionchange"&&(Cy.has(n)||sc(n,!1,e),sc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[uo]||(t[uo]=!0,sc("selectionchange",!1,t))}}function y0(e,t,n,i){switch(K0(t)){case 2:var r=Py;break;case 8:r=Iy;break;default:r=Tc}n=r.bind(null,t,n,e),r=void 0,!Mu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function fc(e,t,n,i,r){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var p=i.tag;if(p===3||p===4){var v=i.stateNode.containerInfo;if(v===r)break;if(p===4)for(p=i.return;p!==null;){var C=p.tag;if((C===3||C===4)&&p.stateNode.containerInfo===r)return;p=p.return}for(;v!==null;){if(p=Ga(v),p===null)return;if(C=p.tag,C===5||C===6||C===26||C===27){i=s=p;continue e}v=v.parentNode}}i=i.return}Ed(function(){var H=s,P=zu(n),ee=[];e:{var G=Wd.get(e);if(G!==void 0){var K=br,ue=e;switch(e){case"keypress":if(vr(n)===0)break e;case"keydown":case"keyup":K=v2;break;case"focusin":ue="focus",K=Nu;break;case"focusout":ue="blur",K=Nu;break;case"beforeblur":case"afterblur":K=Nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=l2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=x2;break;case Kd:case Zd:case Jd:K=u2;break;case Fd:K=w2;break;case"scroll":case"scrollend":K=a2;break;case"wheel":K=C2;break;case"copy":case"cut":case"paste":K=c2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=zd;break;case"toggle":case"beforetoggle":K=j2}var pe=(t&4)!==0,ke=!pe&&(e==="scroll"||e==="scrollend"),N=pe?G!==null?G+"Capture":null:G;pe=[];for(var z=H,U;z!==null;){var I=z;if(U=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||U===null||N===null||(I=Wi(z,N),I!=null&&pe.push(Ml(z,I,U))),ke)break;z=z.return}0<pe.length&&(G=new K(G,ue,null,n,P),ee.push({event:G,listeners:pe}))}}if((t&7)===0){e:{if(G=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",G&&n!==Ru&&(ue=n.relatedTarget||n.fromElement)&&(Ga(ue)||ue[Ya]))break e;if((K||G)&&(G=P.window===P?P:(G=P.ownerDocument)?G.defaultView||G.parentWindow:window,K?(ue=n.relatedTarget||n.toElement,K=H,ue=ue?Ga(ue):null,ue!==null&&(ke=f(ue),pe=ue.tag,ue!==ke||pe!==5&&pe!==27&&pe!==6)&&(ue=null)):(K=null,ue=H),K!==ue)){if(pe=jd,I="onMouseLeave",N="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(pe=zd,I="onPointerLeave",N="onPointerEnter",z="pointer"),ke=K==null?G:Fi(K),U=ue==null?G:Fi(ue),G=new pe(I,z+"leave",K,n,P),G.target=ke,G.relatedTarget=U,I=null,Ga(P)===H&&(pe=new pe(N,z+"enter",ue,n,P),pe.target=U,pe.relatedTarget=ke,I=pe),ke=I,K&&ue)t:{for(pe=Ty,N=K,z=ue,U=0,I=N;I;I=pe(I))U++;I=0;for(var de=z;de;de=pe(de))I++;for(;0<U-I;)N=pe(N),U--;for(;0<I-U;)z=pe(z),I--;for(;U--;){if(N===z||z!==null&&N===z.alternate){pe=N;break t}N=pe(N),z=pe(z)}pe=null}else pe=null;K!==null&&b0(ee,G,K,pe,!1),ue!==null&&ke!==null&&b0(ee,ke,ue,pe,!0)}}e:{if(G=H?Fi(H):window,K=G.nodeName&&G.nodeName.toLowerCase(),K==="select"||K==="input"&&G.type==="file")var Re=Ld;else if(Nd(G))if($d)Re=L2;else{Re=N2;var se=D2}else K=G.nodeName,!K||K.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?H&&ju(H.elementType)&&(Re=Ld):Re=k2;if(Re&&(Re=Re(e,H))){kd(ee,Re,n,P);break e}se&&se(e,G,H),e==="focusout"&&H&&G.type==="number"&&H.memoizedProps.value!=null&&Tu(G,"number",G.value)}switch(se=H?Fi(H):window,e){case"focusin":(Nd(se)||se.contentEditable==="true")&&(Pa=se,Hu=H,ll=null);break;case"focusout":ll=Hu=Pa=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,Vd(ee,n,P);break;case"selectionchange":if(B2)break;case"keydown":case"keyup":Vd(ee,n,P)}var ve;if(Lu)e:{switch(e){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Wa?Ad(e,n)&&(Ee="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ee="onCompositionStart");Ee&&(Od&&n.locale!=="ko"&&(Wa||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Wa&&(ve=Cd()):(qn=P,_u="value"in qn?qn.value:qn.textContent,Wa=!0)),se=so(H,Ee),0<se.length&&(Ee=new Rd(Ee,e,null,n,P),ee.push({event:Ee,listeners:se}),ve?Ee.data=ve:(ve=Dd(n),ve!==null&&(Ee.data=ve)))),(ve=z2?O2(e,n):M2(e,n))&&(Ee=so(H,"onBeforeInput"),0<Ee.length&&(se=new Rd("onBeforeInput","beforeinput",null,n,P),ee.push({event:se,listeners:Ee}),se.data=ve)),Sy(ee,e,H,n,P)}v0(ee,t)})}function Ml(e,t,n){return{instance:e,listener:t,currentTarget:n}}function so(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=Wi(e,n),r!=null&&i.unshift(Ml(e,r,s)),r=Wi(e,t),r!=null&&i.push(Ml(e,r,s))),e.tag===3)return i;e=e.return}return[]}function Ty(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function b0(e,t,n,i,r){for(var s=t._reactName,p=[];n!==null&&n!==i;){var v=n,C=v.alternate,H=v.stateNode;if(v=v.tag,C!==null&&C===i)break;v!==5&&v!==26&&v!==27||H===null||(C=H,r?(H=Wi(n,s),H!=null&&p.unshift(Ml(n,H,C))):r||(H=Wi(n,s),H!=null&&p.push(Ml(n,H,C)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var jy=/\r\n?/g,Ry=/\u0000|\uFFFD/g;function x0(e){return(typeof e=="string"?e:""+e).replace(jy,`
`).replace(Ry,"")}function S0(e,t){return t=x0(t),x0(e)===t}function Ne(e,t,n,i,r,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Za(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Za(e,""+i);break;case"className":pr(e,"class",i);break;case"tabIndex":pr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":pr(e,n,i);break;case"style":Sd(e,i,s);break;case"data":if(t!=="object"){pr(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=mr(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&Ne(e,t,"name",r.name,r,null),Ne(e,t,"formEncType",r.formEncType,r,null),Ne(e,t,"formMethod",r.formMethod,r,null),Ne(e,t,"formTarget",r.formTarget,r,null)):(Ne(e,t,"encType",r.encType,r,null),Ne(e,t,"method",r.method,r,null),Ne(e,t,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=mr(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=dn);break;case"onScroll":i!=null&&Se("scroll",e);break;case"onScrollEnd":i!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=mr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Se("beforetoggle",e),Se("toggle",e),dr(e,"popover",i);break;case"xlinkActuate":fn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":fn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":fn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":fn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":fn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":fn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":fn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":fn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":fn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":dr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=t2.get(n)||n,dr(e,n,i))}}function dc(e,t,n,i,r,s){switch(n){case"style":Sd(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Za(e,i):(typeof i=="number"||typeof i=="bigint")&&Za(e,""+i);break;case"onScroll":i!=null&&Se("scroll",e);break;case"onScrollEnd":i!=null&&Se("scrollend",e);break;case"onClick":i!=null&&(e.onclick=dn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!dd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),s=e[gt]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,r),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,r);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):dr(e,n,i)}}}function st(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var i=!1,r=!1,s;for(s in n)if(n.hasOwnProperty(s)){var p=n[s];if(p!=null)switch(s){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ne(e,t,s,p,n,null)}}r&&Ne(e,t,"srcSet",n.srcSet,n,null),i&&Ne(e,t,"src",n.src,n,null);return;case"input":Se("invalid",e);var v=s=p=r=null,C=null,H=null;for(i in n)if(n.hasOwnProperty(i)){var P=n[i];if(P!=null)switch(i){case"name":r=P;break;case"type":p=P;break;case"checked":C=P;break;case"defaultChecked":H=P;break;case"value":s=P;break;case"defaultValue":v=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(o(137,t));break;default:Ne(e,t,i,P,n,null)}}vd(e,s,v,C,H,p,r,!1);return;case"select":Se("invalid",e),i=p=s=null;for(r in n)if(n.hasOwnProperty(r)&&(v=n[r],v!=null))switch(r){case"value":s=v;break;case"defaultValue":p=v;break;case"multiple":i=v;default:Ne(e,t,r,v,n,null)}t=s,n=p,e.multiple=!!i,t!=null?Ka(e,!!i,t,!1):n!=null&&Ka(e,!!i,n,!0);return;case"textarea":Se("invalid",e),s=r=i=null;for(p in n)if(n.hasOwnProperty(p)&&(v=n[p],v!=null))switch(p){case"value":i=v;break;case"defaultValue":r=v;break;case"children":s=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(o(91));break;default:Ne(e,t,p,v,n,null)}bd(e,i,r,s);return;case"option":for(C in n)if(n.hasOwnProperty(C)&&(i=n[C],i!=null))switch(C){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ne(e,t,C,i,n,null)}return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(i=0;i<Ol.length;i++)Se(Ol[i],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in n)if(n.hasOwnProperty(H)&&(i=n[H],i!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ne(e,t,H,i,n,null)}return;default:if(ju(t)){for(P in n)n.hasOwnProperty(P)&&(i=n[P],i!==void 0&&dc(e,t,P,i,n,void 0));return}}for(v in n)n.hasOwnProperty(v)&&(i=n[v],i!=null&&Ne(e,t,v,i,n,null))}function zy(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,p=null,v=null,C=null,H=null,P=null;for(K in n){var ee=n[K];if(n.hasOwnProperty(K)&&ee!=null)switch(K){case"checked":break;case"value":break;case"defaultValue":C=ee;default:i.hasOwnProperty(K)||Ne(e,t,K,null,i,ee)}}for(var G in i){var K=i[G];if(ee=n[G],i.hasOwnProperty(G)&&(K!=null||ee!=null))switch(G){case"type":s=K;break;case"name":r=K;break;case"checked":H=K;break;case"defaultChecked":P=K;break;case"value":p=K;break;case"defaultValue":v=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(o(137,t));break;default:K!==ee&&Ne(e,t,G,K,i,ee)}}Cu(e,p,v,C,H,P,s,r);return;case"select":K=p=v=G=null;for(s in n)if(C=n[s],n.hasOwnProperty(s)&&C!=null)switch(s){case"value":break;case"multiple":K=C;default:i.hasOwnProperty(s)||Ne(e,t,s,null,i,C)}for(r in i)if(s=i[r],C=n[r],i.hasOwnProperty(r)&&(s!=null||C!=null))switch(r){case"value":G=s;break;case"defaultValue":v=s;break;case"multiple":p=s;default:s!==C&&Ne(e,t,r,s,i,C)}t=v,n=p,i=K,G!=null?Ka(e,!!n,G,!1):!!i!=!!n&&(t!=null?Ka(e,!!n,t,!0):Ka(e,!!n,n?[]:"",!1));return;case"textarea":K=G=null;for(v in n)if(r=n[v],n.hasOwnProperty(v)&&r!=null&&!i.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Ne(e,t,v,null,i,r)}for(p in i)if(r=i[p],s=n[p],i.hasOwnProperty(p)&&(r!=null||s!=null))switch(p){case"value":G=r;break;case"defaultValue":K=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));break;default:r!==s&&Ne(e,t,p,r,i,s)}yd(e,G,K);return;case"option":for(var ue in n)if(G=n[ue],n.hasOwnProperty(ue)&&G!=null&&!i.hasOwnProperty(ue))switch(ue){case"selected":e.selected=!1;break;default:Ne(e,t,ue,null,i,G)}for(C in i)if(G=i[C],K=n[C],i.hasOwnProperty(C)&&G!==K&&(G!=null||K!=null))switch(C){case"selected":e.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:Ne(e,t,C,G,i,K)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in n)G=n[pe],n.hasOwnProperty(pe)&&G!=null&&!i.hasOwnProperty(pe)&&Ne(e,t,pe,null,i,G);for(H in i)if(G=i[H],K=n[H],i.hasOwnProperty(H)&&G!==K&&(G!=null||K!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(o(137,t));break;default:Ne(e,t,H,G,i,K)}return;default:if(ju(t)){for(var ke in n)G=n[ke],n.hasOwnProperty(ke)&&G!==void 0&&!i.hasOwnProperty(ke)&&dc(e,t,ke,void 0,i,G);for(P in i)G=i[P],K=n[P],!i.hasOwnProperty(P)||G===K||G===void 0&&K===void 0||dc(e,t,P,G,i,K);return}}for(var N in n)G=n[N],n.hasOwnProperty(N)&&G!=null&&!i.hasOwnProperty(N)&&Ne(e,t,N,null,i,G);for(ee in i)G=i[ee],K=n[ee],!i.hasOwnProperty(ee)||G===K||G==null&&K==null||Ne(e,t,ee,G,i,K)}function w0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Oy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var r=n[i],s=r.transferSize,p=r.initiatorType,v=r.duration;if(s&&v&&w0(p)){for(p=0,v=r.responseEnd,i+=1;i<n.length;i++){var C=n[i],H=C.startTime;if(H>v)break;var P=C.transferSize,ee=C.initiatorType;P&&w0(ee)&&(C=C.responseEnd,p+=P*(C<v?1:(v-H)/(C-H)))}if(--i,t+=8*(s+p)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var pc=null,hc=null;function co(e){return e.nodeType===9?e:e.ownerDocument}function E0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function C0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function mc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gc=null;function My(){var e=window.event;return e&&e.type==="popstate"?e===gc?!1:(gc=e,!0):(gc=null,!1)}var T0=typeof setTimeout=="function"?setTimeout:void 0,_y=typeof clearTimeout=="function"?clearTimeout:void 0,j0=typeof Promise=="function"?Promise:void 0,Ay=typeof queueMicrotask=="function"?queueMicrotask:typeof j0<"u"?function(e){return j0.resolve(null).then(e).catch(Dy)}:T0;function Dy(e){setTimeout(function(){throw e})}function ia(e){return e==="head"}function R0(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(r),Ti(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")_l(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,_l(n);for(var s=n.firstChild;s;){var p=s.nextSibling,v=s.nodeName;s[Ji]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=p}}else n==="body"&&_l(e.ownerDocument.body);n=r}while(n);Ti(t)}function z0(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function vc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":vc(n),wu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Ny(e,t,n,i){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Ji])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Qt(e.nextSibling),e===null)break}return null}function ky(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Qt(e.nextSibling),e===null))return null;return e}function O0(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Qt(e.nextSibling),e===null))return null;return e}function yc(e){return e.data==="$?"||e.data==="$~"}function bc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ly(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var xc=null;function M0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Qt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function _0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function A0(e,t,n){switch(t=co(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function _l(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wu(e)}var Kt=new Map,D0=new Set;function fo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var zn=Y.d;Y.d={f:$y,r:By,D:Uy,C:Hy,L:qy,m:Yy,X:Xy,S:Gy,M:Vy};function $y(){var e=zn.f(),t=no();return e||t}function By(e){var t=Xa(e);t!==null&&t.tag===5&&t.type==="form"?Fp(t):zn.r(e)}var wi=typeof document>"u"?null:document;function N0(e,t,n){var i=wi;if(i&&typeof t=="string"&&t){var r=Ut(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),D0.has(r)||(D0.add(r),e={rel:e,crossOrigin:n,href:t},i.querySelector(r)===null&&(t=i.createElement("link"),st(t,"link",e),tt(t),i.head.appendChild(t)))}}function Uy(e){zn.D(e),N0("dns-prefetch",e,null)}function Hy(e,t){zn.C(e,t),N0("preconnect",e,t)}function qy(e,t,n){zn.L(e,t,n);var i=wi;if(i&&e&&t){var r='link[rel="preload"][as="'+Ut(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Ut(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Ut(n.imageSizes)+'"]')):r+='[href="'+Ut(e)+'"]';var s=r;switch(t){case"style":s=Ei(e);break;case"script":s=Ci(e)}Kt.has(s)||(e=S({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Kt.set(s,e),i.querySelector(r)!==null||t==="style"&&i.querySelector(Al(s))||t==="script"&&i.querySelector(Dl(s))||(t=i.createElement("link"),st(t,"link",e),tt(t),i.head.appendChild(t)))}}function Yy(e,t){zn.m(e,t);var n=wi;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Ut(i)+'"][href="'+Ut(e)+'"]',s=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Ci(e)}if(!Kt.has(s)&&(e=S({rel:"modulepreload",href:e},t),Kt.set(s,e),n.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Dl(s)))return}i=n.createElement("link"),st(i,"link",e),tt(i),n.head.appendChild(i)}}}function Gy(e,t,n){zn.S(e,t,n);var i=wi;if(i&&e){var r=Va(i).hoistableStyles,s=Ei(e);t=t||"default";var p=r.get(s);if(!p){var v={loading:0,preload:null};if(p=i.querySelector(Al(s)))v.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Kt.get(s))&&Sc(e,n);var C=p=i.createElement("link");tt(C),st(C,"link",e),C._p=new Promise(function(H,P){C.onload=H,C.onerror=P}),C.addEventListener("load",function(){v.loading|=1}),C.addEventListener("error",function(){v.loading|=2}),v.loading|=4,po(p,t,i)}p={type:"stylesheet",instance:p,count:1,state:v},r.set(s,p)}}}function Xy(e,t){zn.X(e,t);var n=wi;if(n&&e){var i=Va(n).hoistableScripts,r=Ci(e),s=i.get(r);s||(s=n.querySelector(Dl(r)),s||(e=S({src:e,async:!0},t),(t=Kt.get(r))&&wc(e,t),s=n.createElement("script"),tt(s),st(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function Vy(e,t){zn.M(e,t);var n=wi;if(n&&e){var i=Va(n).hoistableScripts,r=Ci(e),s=i.get(r);s||(s=n.querySelector(Dl(r)),s||(e=S({src:e,async:!0,type:"module"},t),(t=Kt.get(r))&&wc(e,t),s=n.createElement("script"),tt(s),st(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function k0(e,t,n,i){var r=(r=he.current)?fo(r):null;if(!r)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ei(n.href),n=Va(r).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ei(n.href);var s=Va(r).hoistableStyles,p=s.get(e);if(p||(r=r.ownerDocument||r,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,p),(s=r.querySelector(Al(e)))&&!s._p&&(p.instance=s,p.state.loading=5),Kt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Kt.set(e,n),s||Qy(r,e,n,p.state))),t&&i===null)throw Error(o(528,""));return p}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ci(n),n=Va(r).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Ei(e){return'href="'+Ut(e)+'"'}function Al(e){return'link[rel="stylesheet"]['+e+"]"}function L0(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function Qy(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),st(t,"link",n),tt(t),e.head.appendChild(t))}function Ci(e){return'[src="'+Ut(e)+'"]'}function Dl(e){return"script[async]"+e}function $0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ut(n.href)+'"]');if(i)return t.instance=i,tt(i),i;var r=S({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),tt(i),st(i,"style",r),po(i,n.precedence,e),t.instance=i;case"stylesheet":r=Ei(n.href);var s=e.querySelector(Al(r));if(s)return t.state.loading|=4,t.instance=s,tt(s),s;i=L0(n),(r=Kt.get(r))&&Sc(i,r),s=(e.ownerDocument||e).createElement("link"),tt(s);var p=s;return p._p=new Promise(function(v,C){p.onload=v,p.onerror=C}),st(s,"link",i),t.state.loading|=4,po(s,n.precedence,e),t.instance=s;case"script":return s=Ci(n.src),(r=e.querySelector(Dl(s)))?(t.instance=r,tt(r),r):(i=n,(r=Kt.get(s))&&(i=S({},n),wc(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),tt(r),st(r,"link",i),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,po(i,n.precedence,e));return t.instance}function po(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,s=r,p=0;p<i.length;p++){var v=i[p];if(v.dataset.precedence===t)s=v;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Sc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function wc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ho=null;function B0(e,t,n){if(ho===null){var i=new Map,r=ho=new Map;r.set(n,i)}else r=ho,i=r.get(n),i||(i=new Map,r.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var s=n[r];if(!(s[Ji]||s[lt]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var p=s.getAttribute(t)||"";p=e+p;var v=i.get(p);v?v.push(s):i.set(p,[s])}}return i}function U0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Ky(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function H0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Zy(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=Ei(i.href),s=t.querySelector(Al(r));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=mo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,tt(s);return}s=t.ownerDocument||t,i=L0(i),(r=Kt.get(r))&&Sc(i,r),s=s.createElement("link"),tt(s);var p=s;p._p=new Promise(function(v,C){p.onload=v,p.onerror=C}),st(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=mo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Ec=0;function Jy(e,t){return e.stylesheets&&e.count===0&&vo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&vo(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Ec===0&&(Ec=62500*Oy());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&vo(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Ec?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function mo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var go=null;function vo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,go=new Map,t.forEach(Fy,e),go=null,mo.call(e))}function Fy(e,t){if(!(t.state.loading&4)){var n=go.get(e);if(n)var i=n.get(null);else{n=new Map,go.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var p=r[s];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),i=p)}i&&n.set(null,i)}r=t.instance,p=r.getAttribute("data-precedence"),s=n.get(p)||i,s===i&&n.set(null,r),n.set(p,r),this.count++,i=mo.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Nl={$$typeof:_,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Wy(e,t,n,i,r,s,p,v,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yu(0),this.hiddenUpdates=yu(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function q0(e,t,n,i,r,s,p,v,C,H,P,ee){return e=new Wy(e,t,n,p,C,H,P,ee,v),t=1,s===!0&&(t|=24),s=Ot(3,null,null,t),e.current=s,s.stateNode=e,t=ns(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},rs(s),e}function Y0(e){return e?(e=ti,e):ti}function G0(e,t,n,i,r,s){r=Y0(r),i.context===null?i.context=r:i.pendingContext=r,i=Kn(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Zn(e,i,t),n!==null&&(wt(n,e,t),dl(n,e,t))}function X0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cc(e,t){X0(e,t),(e=e.alternate)&&X0(e,t)}function V0(e){if(e.tag===13||e.tag===31){var t=wa(e,67108864);t!==null&&wt(t,e,67108864),Cc(e,67108864)}}function Q0(e){if(e.tag===13||e.tag===31){var t=Nt();t=bu(t);var n=wa(e,t);n!==null&&wt(n,e,t),Cc(e,t)}}var yo=!0;function Py(e,t,n,i){var r=O.T;O.T=null;var s=Y.p;try{Y.p=2,Tc(e,t,n,i)}finally{Y.p=s,O.T=r}}function Iy(e,t,n,i){var r=O.T;O.T=null;var s=Y.p;try{Y.p=8,Tc(e,t,n,i)}finally{Y.p=s,O.T=r}}function Tc(e,t,n,i){if(yo){var r=jc(i);if(r===null)fc(e,t,i,bo,n),Z0(e,i);else if(tb(r,e,t,n,i))i.stopPropagation();else if(Z0(e,i),t&4&&-1<eb.indexOf(e)){for(;r!==null;){var s=Xa(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var p=va(s.pendingLanes);if(p!==0){var v=s;for(v.pendingLanes|=2,v.entangledLanes|=2;p;){var C=1<<31-Rt(p);v.entanglements[1]|=C,p&=~C}on(s),(Oe&6)===0&&(eo=Tt()+500,zl(0))}}break;case 31:case 13:v=wa(s,2),v!==null&&wt(v,s,2),no(),Cc(s,2)}if(s=jc(i),s===null&&fc(e,t,i,bo,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else fc(e,t,i,null,n)}}function jc(e){return e=zu(e),Rc(e)}var bo=null;function Rc(e){if(bo=null,e=Ga(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return bo=e,null}function K0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Uv()){case td:return 2;case nd:return 8;case or:case Hv:return 32;case ad:return 268435456;default:return 32}default:return 32}}var zc=!1,la=null,ra=null,oa=null,kl=new Map,Ll=new Map,ua=[],eb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Z0(e,t){switch(e){case"focusin":case"focusout":la=null;break;case"dragenter":case"dragleave":ra=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":kl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ll.delete(t.pointerId)}}function $l(e,t,n,i,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},t!==null&&(t=Xa(t),t!==null&&V0(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function tb(e,t,n,i,r){switch(t){case"focusin":return la=$l(la,e,t,n,i,r),!0;case"dragenter":return ra=$l(ra,e,t,n,i,r),!0;case"mouseover":return oa=$l(oa,e,t,n,i,r),!0;case"pointerover":var s=r.pointerId;return kl.set(s,$l(kl.get(s)||null,e,t,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ll.set(s,$l(Ll.get(s)||null,e,t,n,i,r)),!0}return!1}function J0(e){var t=Ga(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,sd(e.priority,function(){Q0(n)});return}}else if(t===31){if(t=y(n),t!==null){e.blockedOn=t,sd(e.priority,function(){Q0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=jc(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Ru=i,n.target.dispatchEvent(i),Ru=null}else return t=Xa(n),t!==null&&V0(t),e.blockedOn=n,!1;t.shift()}return!0}function F0(e,t,n){xo(e)&&n.delete(t)}function nb(){zc=!1,la!==null&&xo(la)&&(la=null),ra!==null&&xo(ra)&&(ra=null),oa!==null&&xo(oa)&&(oa=null),kl.forEach(F0),Ll.forEach(F0)}function So(e,t){e.blockedOn===t&&(e.blockedOn=null,zc||(zc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,nb)))}var wo=null;function W0(e){wo!==e&&(wo=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){wo===e&&(wo=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],r=e[t+2];if(typeof i!="function"){if(Rc(i||n)===null)continue;break}var s=Xa(n);s!==null&&(e.splice(t,3),t-=3,js(s,{pending:!0,data:r,method:n.method,action:i},i,r))}}))}function Ti(e){function t(C){return So(C,e)}la!==null&&So(la,e),ra!==null&&So(ra,e),oa!==null&&So(oa,e),kl.forEach(t),Ll.forEach(t);for(var n=0;n<ua.length;n++){var i=ua[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ua.length&&(n=ua[0],n.blockedOn===null);)J0(n),n.blockedOn===null&&ua.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var r=n[i],s=n[i+1],p=r[gt]||null;if(typeof s=="function")p||W0(n);else if(p){var v=null;if(s&&s.hasAttribute("formAction")){if(r=s,p=s[gt]||null)v=p.formAction;else if(Rc(r)!==null)continue}else v=p.action;typeof v=="function"?n[i+1]=v:(n.splice(i,3),i-=3),W0(n)}}}function P0(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(p){return r=p})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Oc(e){this._internalRoot=e}Eo.prototype.render=Oc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,i=Nt();G0(n,i,e,t,null,null)},Eo.prototype.unmount=Oc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;G0(e.current,2,null,e,null,null),no(),t[Ya]=null}};function Eo(e){this._internalRoot=e}Eo.prototype.unstable_scheduleHydration=function(e){if(e){var t=ud();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ua.length&&t!==0&&t<ua[n].priority;n++);ua.splice(n,0,e),n===0&&J0(e)}};var I0=l.version;if(I0!=="19.2.0")throw Error(o(527,I0,"19.2.0"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=m(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var ab={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Co.isDisabled&&Co.supportsFiber)try{Qi=Co.inject(ab),jt=Co}catch{}}return Ul.createRoot=function(e,t){if(!c(e))throw Error(o(299));var n=!1,i="",r=rh,s=oh,p=uh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError)),t=q0(e,1,!1,null,null,n,i,null,r,s,p,P0),e[Ya]=t.current,cc(e),new Oc(t)},Ul.hydrateRoot=function(e,t,n){if(!c(e))throw Error(o(299));var i=!1,r="",s=rh,p=oh,v=uh,C=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.formState!==void 0&&(C=n.formState)),t=q0(e,1,!0,t,n??null,i,r,C,s,p,v,P0),t.context=Y0(null),n=t.current,i=Nt(),i=bu(i),r=Kn(i),r.callback=null,Zn(n,r,i),n=i,t.current.lanes=n,Zi(t,n),on(t),e[Ya]=t.current,cc(e),new Eo(t)},Ul.version="19.2.0",Ul}var s1;function db(){if(s1)return Ac.exports;s1=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Ac.exports=fb(),Ac.exports}var pb=db();const hb=nr(pb);/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var c1="popstate";function mb(a={}){function l(o,c){let{pathname:f,search:h,hash:y}=o.location;return mf("",{pathname:f,search:h,hash:y},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function u(o,c){return typeof c=="string"?c:Il(c)}return vb(l,u,null,a)}function Xe(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function sn(a,l){if(!a){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function gb(){return Math.random().toString(36).substring(2,10)}function f1(a,l){return{usr:a.state,key:a.key,idx:l}}function mf(a,l,u=null,o){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof l=="string"?Ui(l):l,state:u,key:l&&l.key||o||gb()}}function Il({pathname:a="/",search:l="",hash:u=""}){return l&&l!=="?"&&(a+=l.charAt(0)==="?"?l:"?"+l),u&&u!=="#"&&(a+=u.charAt(0)==="#"?u:"#"+u),a}function Ui(a){let l={};if(a){let u=a.indexOf("#");u>=0&&(l.hash=a.substring(u),a=a.substring(0,u));let o=a.indexOf("?");o>=0&&(l.search=a.substring(o),a=a.substring(0,o)),a&&(l.pathname=a)}return l}function vb(a,l,u,o={}){let{window:c=document.defaultView,v5Compat:f=!1}=o,h=c.history,y="POP",g=null,m=x();m==null&&(m=0,h.replaceState({...h.state,idx:m},""));function x(){return(h.state||{idx:null}).idx}function S(){y="POP";let $=x(),V=$==null?null:$-m;m=$,g&&g({action:y,location:q.location,delta:V})}function E($,V){y="PUSH";let M=mf(q.location,$,V);m=x()+1;let _=f1(M,m),X=q.createHref(M);try{h.pushState(_,"",X)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;c.location.assign(X)}f&&g&&g({action:y,location:q.location,delta:1})}function D($,V){y="REPLACE";let M=mf(q.location,$,V);m=x();let _=f1(M,m),X=q.createHref(M);h.replaceState(_,"",X),f&&g&&g({action:y,location:q.location,delta:0})}function R($){return yb($)}let q={get action(){return y},get location(){return a(c,h)},listen($){if(g)throw new Error("A history only accepts one active listener");return c.addEventListener(c1,S),g=$,()=>{c.removeEventListener(c1,S),g=null}},createHref($){return l(c,$)},createURL:R,encodeLocation($){let V=R($);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:E,replace:D,go($){return h.go($)}};return q}function yb(a,l=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Xe(u,"No window.location.(origin|href) available to create URL");let o=typeof a=="string"?a:Il(a);return o=o.replace(/ $/,"%20"),!l&&o.startsWith("//")&&(o=u+o),new URL(o,u)}function Qm(a,l,u="/"){return bb(a,l,u,!1)}function bb(a,l,u,o){let c=typeof l=="string"?Ui(l):l,f=kn(c.pathname||"/",u);if(f==null)return null;let h=Km(a);xb(h);let y=null;for(let g=0;y==null&&g<h.length;++g){let m=_b(f);y=Ob(h[g],m,o)}return y}function Km(a,l=[],u=[],o="",c=!1){let f=(h,y,g=c,m)=>{let x={relativePath:m===void 0?h.path||"":m,caseSensitive:h.caseSensitive===!0,childrenIndex:y,route:h};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(o)&&g)return;Xe(x.relativePath.startsWith(o),`Absolute route path "${x.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(o.length)}let S=Dn([o,x.relativePath]),E=u.concat(x);h.children&&h.children.length>0&&(Xe(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),Km(h.children,l,E,S,g)),!(h.path==null&&!h.index)&&l.push({path:S,score:Rb(S,h.index),routesMeta:E})};return a.forEach((h,y)=>{if(h.path===""||!h.path?.includes("?"))f(h,y);else for(let g of Zm(h.path))f(h,y,!0,g)}),l}function Zm(a){let l=a.split("/");if(l.length===0)return[];let[u,...o]=l,c=u.endsWith("?"),f=u.replace(/\?$/,"");if(o.length===0)return c?[f,""]:[f];let h=Zm(o.join("/")),y=[];return y.push(...h.map(g=>g===""?f:[f,g].join("/"))),c&&y.push(...h),y.map(g=>a.startsWith("/")&&g===""?"/":g)}function xb(a){a.sort((l,u)=>l.score!==u.score?u.score-l.score:zb(l.routesMeta.map(o=>o.childrenIndex),u.routesMeta.map(o=>o.childrenIndex)))}var Sb=/^:[\w-]+$/,wb=3,Eb=2,Cb=1,Tb=10,jb=-2,d1=a=>a==="*";function Rb(a,l){let u=a.split("/"),o=u.length;return u.some(d1)&&(o+=jb),l&&(o+=Eb),u.filter(c=>!d1(c)).reduce((c,f)=>c+(Sb.test(f)?wb:f===""?Cb:Tb),o)}function zb(a,l){return a.length===l.length&&a.slice(0,-1).every((o,c)=>o===l[c])?a[a.length-1]-l[l.length-1]:0}function Ob(a,l,u=!1){let{routesMeta:o}=a,c={},f="/",h=[];for(let y=0;y<o.length;++y){let g=o[y],m=y===o.length-1,x=f==="/"?l:l.slice(f.length)||"/",S=Qo({path:g.relativePath,caseSensitive:g.caseSensitive,end:m},x),E=g.route;if(!S&&m&&u&&!o[o.length-1].route.index&&(S=Qo({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},x)),!S)return null;Object.assign(c,S.params),h.push({params:c,pathname:Dn([f,S.pathname]),pathnameBase:kb(Dn([f,S.pathnameBase])),route:E}),S.pathnameBase!=="/"&&(f=Dn([f,S.pathnameBase]))}return h}function Qo(a,l){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[u,o]=Mb(a.path,a.caseSensitive,a.end),c=l.match(u);if(!c)return null;let f=c[0],h=f.replace(/(.)\/+$/,"$1"),y=c.slice(1);return{params:o.reduce((m,{paramName:x,isOptional:S},E)=>{if(x==="*"){let R=y[E]||"";h=f.slice(0,f.length-R.length).replace(/(.)\/+$/,"$1")}const D=y[E];return S&&!D?m[x]=void 0:m[x]=(D||"").replace(/%2F/g,"/"),m},{}),pathname:f,pathnameBase:h,pattern:a}}function Mb(a,l=!1,u=!0){sn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let o=[],c="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,y,g)=>(o.push({paramName:y,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(o.push({paramName:"*"}),c+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?c+="\\/*$":a!==""&&a!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,l?void 0:"i"),o]}function _b(a){try{return a.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return sn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),a}}function kn(a,l){if(l==="/")return a;if(!a.toLowerCase().startsWith(l.toLowerCase()))return null;let u=l.endsWith("/")?l.length-1:l.length,o=a.charAt(u);return o&&o!=="/"?null:a.slice(u)||"/"}function Ab(a,l="/"){let{pathname:u,search:o="",hash:c=""}=typeof a=="string"?Ui(a):a;return{pathname:u?u.startsWith("/")?u:Db(u,l):l,search:Lb(o),hash:$b(c)}}function Db(a,l){let u=l.replace(/\/+$/,"").split("/");return a.split("/").forEach(c=>{c===".."?u.length>1&&u.pop():c!=="."&&u.push(c)}),u.length>1?u.join("/"):"/"}function Lc(a,l,u,o){return`Cannot include a '${a}' character in a manually specified \`to.${l}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Nb(a){return a.filter((l,u)=>u===0||l.route.path&&l.route.path.length>0)}function Jm(a){let l=Nb(a);return l.map((u,o)=>o===l.length-1?u.pathname:u.pathnameBase)}function Fm(a,l,u,o=!1){let c;typeof a=="string"?c=Ui(a):(c={...a},Xe(!c.pathname||!c.pathname.includes("?"),Lc("?","pathname","search",c)),Xe(!c.pathname||!c.pathname.includes("#"),Lc("#","pathname","hash",c)),Xe(!c.search||!c.search.includes("#"),Lc("#","search","hash",c)));let f=a===""||c.pathname==="",h=f?"/":c.pathname,y;if(h==null)y=u;else{let S=l.length-1;if(!o&&h.startsWith("..")){let E=h.split("/");for(;E[0]==="..";)E.shift(),S-=1;c.pathname=E.join("/")}y=S>=0?l[S]:"/"}let g=Ab(c,y),m=h&&h!=="/"&&h.endsWith("/"),x=(f||h===".")&&u.endsWith("/");return!g.pathname.endsWith("/")&&(m||x)&&(g.pathname+="/"),g}var Dn=a=>a.join("/").replace(/\/\/+/g,"/"),kb=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Lb=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,$b=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function Bb(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var Wm=["POST","PUT","PATCH","DELETE"];new Set(Wm);var Ub=["GET",...Wm];new Set(Ub);var Hi=b.createContext(null);Hi.displayName="DataRouter";var nu=b.createContext(null);nu.displayName="DataRouterState";b.createContext(!1);var Pm=b.createContext({isTransitioning:!1});Pm.displayName="ViewTransition";var Hb=b.createContext(new Map);Hb.displayName="Fetchers";var qb=b.createContext(null);qb.displayName="Await";var cn=b.createContext(null);cn.displayName="Navigation";var ar=b.createContext(null);ar.displayName="Location";var Ln=b.createContext({outlet:null,matches:[],isDataRoute:!1});Ln.displayName="Route";var Mf=b.createContext(null);Mf.displayName="RouteError";function Yb(a,{relative:l}={}){Xe(ir(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:o}=b.useContext(cn),{hash:c,pathname:f,search:h}=lr(a,{relative:l}),y=f;return u!=="/"&&(y=f==="/"?u:Dn([u,f])),o.createHref({pathname:y,search:h,hash:c})}function ir(){return b.useContext(ar)!=null}function $n(){return Xe(ir(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(ar).location}var Im="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function eg(a){b.useContext(cn).static||b.useLayoutEffect(a)}function _f(){let{isDataRoute:a}=b.useContext(Ln);return a?tx():Gb()}function Gb(){Xe(ir(),"useNavigate() may be used only in the context of a <Router> component.");let a=b.useContext(Hi),{basename:l,navigator:u}=b.useContext(cn),{matches:o}=b.useContext(Ln),{pathname:c}=$n(),f=JSON.stringify(Jm(o)),h=b.useRef(!1);return eg(()=>{h.current=!0}),b.useCallback((g,m={})=>{if(sn(h.current,Im),!h.current)return;if(typeof g=="number"){u.go(g);return}let x=Fm(g,JSON.parse(f),c,m.relative==="path");a==null&&l!=="/"&&(x.pathname=x.pathname==="/"?l:Dn([l,x.pathname])),(m.replace?u.replace:u.push)(x,m.state,m)},[l,u,f,c,a])}b.createContext(null);function lr(a,{relative:l}={}){let{matches:u}=b.useContext(Ln),{pathname:o}=$n(),c=JSON.stringify(Jm(u));return b.useMemo(()=>Fm(a,JSON.parse(c),o,l==="path"),[a,c,o,l])}function Xb(a,l){return tg(a,l)}function tg(a,l,u,o,c){Xe(ir(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=b.useContext(cn),{matches:h}=b.useContext(Ln),y=h[h.length-1],g=y?y.params:{},m=y?y.pathname:"/",x=y?y.pathnameBase:"/",S=y&&y.route;{let M=S&&S.path||"";ng(m,!S||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let E=$n(),D;if(l){let M=typeof l=="string"?Ui(l):l;Xe(x==="/"||M.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${M.pathname}" was given in the \`location\` prop.`),D=M}else D=E;let R=D.pathname||"/",q=R;if(x!=="/"){let M=x.replace(/^\//,"").split("/");q="/"+R.replace(/^\//,"").split("/").slice(M.length).join("/")}let $=Qm(a,{pathname:q});sn(S||$!=null,`No routes matched location "${D.pathname}${D.search}${D.hash}" `),sn($==null||$[$.length-1].route.element!==void 0||$[$.length-1].route.Component!==void 0||$[$.length-1].route.lazy!==void 0,`Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=Jb($&&$.map(M=>Object.assign({},M,{params:Object.assign({},g,M.params),pathname:Dn([x,f.encodeLocation?f.encodeLocation(M.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?x:Dn([x,f.encodeLocation?f.encodeLocation(M.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathnameBase])})),h,u,o,c);return l&&V?b.createElement(ar.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...D},navigationType:"POP"}},V):V}function Vb(){let a=ex(),l=Bb(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),u=a instanceof Error?a.stack:null,o="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:o},f={padding:"2px 4px",backgroundColor:o},h=null;return console.error("Error handled by React Router default ErrorBoundary:",a),h=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:f},"ErrorBoundary")," or"," ",b.createElement("code",{style:f},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},l),u?b.createElement("pre",{style:c},u):null,h)}var Qb=b.createElement(Vb,null),Kb=class extends b.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,l){return l.location!==a.location||l.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:l.error,location:l.location,revalidation:a.revalidation||l.revalidation}}componentDidCatch(a,l){this.props.unstable_onError?this.props.unstable_onError(a,l):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?b.createElement(Ln.Provider,{value:this.props.routeContext},b.createElement(Mf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Zb({routeContext:a,match:l,children:u}){let o=b.useContext(Hi);return o&&o.static&&o.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=l.route.id),b.createElement(Ln.Provider,{value:a},u)}function Jb(a,l=[],u=null,o=null,c=null){if(a==null){if(!u)return null;if(u.errors)a=u.matches;else if(l.length===0&&!u.initialized&&u.matches.length>0)a=u.matches;else return null}let f=a,h=u?.errors;if(h!=null){let m=f.findIndex(x=>x.route.id&&h?.[x.route.id]!==void 0);Xe(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),f=f.slice(0,Math.min(f.length,m+1))}let y=!1,g=-1;if(u)for(let m=0;m<f.length;m++){let x=f[m];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(g=m),x.route.id){let{loaderData:S,errors:E}=u,D=x.route.loader&&!S.hasOwnProperty(x.route.id)&&(!E||E[x.route.id]===void 0);if(x.route.lazy||D){y=!0,g>=0?f=f.slice(0,g+1):f=[f[0]];break}}}return f.reduceRight((m,x,S)=>{let E,D=!1,R=null,q=null;u&&(E=h&&x.route.id?h[x.route.id]:void 0,R=x.route.errorElement||Qb,y&&(g<0&&S===0?(ng("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),D=!0,q=null):g===S&&(D=!0,q=x.route.hydrateFallbackElement||null)));let $=l.concat(f.slice(0,S+1)),V=()=>{let M;return E?M=R:D?M=q:x.route.Component?M=b.createElement(x.route.Component,null):x.route.element?M=x.route.element:M=m,b.createElement(Zb,{match:x,routeContext:{outlet:m,matches:$,isDataRoute:u!=null},children:M})};return u&&(x.route.ErrorBoundary||x.route.errorElement||S===0)?b.createElement(Kb,{location:u.location,revalidation:u.revalidation,component:R,error:E,children:V(),routeContext:{outlet:null,matches:$,isDataRoute:!0},unstable_onError:o}):V()},null)}function Af(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fb(a){let l=b.useContext(Hi);return Xe(l,Af(a)),l}function Wb(a){let l=b.useContext(nu);return Xe(l,Af(a)),l}function Pb(a){let l=b.useContext(Ln);return Xe(l,Af(a)),l}function Df(a){let l=Pb(a),u=l.matches[l.matches.length-1];return Xe(u.route.id,`${a} can only be used on routes that contain a unique "id"`),u.route.id}function Ib(){return Df("useRouteId")}function ex(){let a=b.useContext(Mf),l=Wb("useRouteError"),u=Df("useRouteError");return a!==void 0?a:l.errors?.[u]}function tx(){let{router:a}=Fb("useNavigate"),l=Df("useNavigate"),u=b.useRef(!1);return eg(()=>{u.current=!0}),b.useCallback(async(c,f={})=>{sn(u.current,Im),u.current&&(typeof c=="number"?a.navigate(c):await a.navigate(c,{fromRouteId:l,...f}))},[a,l])}var p1={};function ng(a,l,u){!l&&!p1[a]&&(p1[a]=!0,sn(!1,u))}b.memo(nx);function nx({routes:a,future:l,state:u,unstable_onError:o}){return tg(a,void 0,u,o,l)}function ka(a){Xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ax({basename:a="/",children:l=null,location:u,navigationType:o="POP",navigator:c,static:f=!1}){Xe(!ir(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=a.replace(/^\/*/,"/"),y=b.useMemo(()=>({basename:h,navigator:c,static:f,future:{}}),[h,c,f]);typeof u=="string"&&(u=Ui(u));let{pathname:g="/",search:m="",hash:x="",state:S=null,key:E="default"}=u,D=b.useMemo(()=>{let R=kn(g,h);return R==null?null:{location:{pathname:R,search:m,hash:x,state:S,key:E},navigationType:o}},[h,g,m,x,S,E,o]);return sn(D!=null,`<Router basename="${h}"> is not able to match the URL "${g}${m}${x}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:b.createElement(cn.Provider,{value:y},b.createElement(ar.Provider,{children:l,value:D}))}function ix({children:a,location:l}){return Xb(gf(a),l)}function gf(a,l=[]){let u=[];return b.Children.forEach(a,(o,c)=>{if(!b.isValidElement(o))return;let f=[...l,c];if(o.type===b.Fragment){u.push.apply(u,gf(o.props.children,f));return}Xe(o.type===ka,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xe(!o.props.index||!o.props.children,"An index route cannot have child routes.");let h={id:o.props.id||f.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(h.children=gf(o.props.children,f)),u.push(h)}),u}var Uo="get",Ho="application/x-www-form-urlencoded";function au(a){return a!=null&&typeof a.tagName=="string"}function lx(a){return au(a)&&a.tagName.toLowerCase()==="button"}function rx(a){return au(a)&&a.tagName.toLowerCase()==="form"}function ox(a){return au(a)&&a.tagName.toLowerCase()==="input"}function ux(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function sx(a,l){return a.button===0&&(!l||l==="_self")&&!ux(a)}var To=null;function cx(){if(To===null)try{new FormData(document.createElement("form"),0),To=!1}catch{To=!0}return To}var fx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function $c(a){return a!=null&&!fx.has(a)?(sn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ho}"`),null):a}function dx(a,l){let u,o,c,f,h;if(rx(a)){let y=a.getAttribute("action");o=y?kn(y,l):null,u=a.getAttribute("method")||Uo,c=$c(a.getAttribute("enctype"))||Ho,f=new FormData(a)}else if(lx(a)||ox(a)&&(a.type==="submit"||a.type==="image")){let y=a.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=a.getAttribute("formaction")||y.getAttribute("action");if(o=g?kn(g,l):null,u=a.getAttribute("formmethod")||y.getAttribute("method")||Uo,c=$c(a.getAttribute("formenctype"))||$c(y.getAttribute("enctype"))||Ho,f=new FormData(y,a),!cx()){let{name:m,type:x,value:S}=a;if(x==="image"){let E=m?`${m}.`:"";f.append(`${E}x`,"0"),f.append(`${E}y`,"0")}else m&&f.append(m,S)}}else{if(au(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Uo,o=null,c=Ho,h=a}return f&&c==="text/plain"&&(h=f,f=void 0),{action:o,method:u.toLowerCase(),encType:c,formData:f,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Nf(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function px(a,l,u){let o=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return o.pathname==="/"?o.pathname=`_root.${u}`:l&&kn(o.pathname,l)==="/"?o.pathname=`${l.replace(/\/$/,"")}/_root.${u}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${u}`,o}async function hx(a,l){if(a.id in l)return l[a.id];try{let u=await import(a.module);return l[a.id]=u,u}catch(u){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function mx(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function gx(a,l,u){let o=await Promise.all(a.map(async c=>{let f=l.routes[c.route.id];if(f){let h=await hx(f,u);return h.links?h.links():[]}return[]}));return xx(o.flat(1).filter(mx).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function h1(a,l,u,o,c,f){let h=(g,m)=>u[m]?g.route.id!==u[m].route.id:!0,y=(g,m)=>u[m].pathname!==g.pathname||u[m].route.path?.endsWith("*")&&u[m].params["*"]!==g.params["*"];return f==="assets"?l.filter((g,m)=>h(g,m)||y(g,m)):f==="data"?l.filter((g,m)=>{let x=o.routes[g.route.id];if(!x||!x.hasLoader)return!1;if(h(g,m)||y(g,m))return!0;if(g.route.shouldRevalidate){let S=g.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function vx(a,l,{includeHydrateFallback:u}={}){return yx(a.map(o=>{let c=l.routes[o.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),u&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function yx(a){return[...new Set(a)]}function bx(a){let l={},u=Object.keys(a).sort();for(let o of u)l[o]=a[o];return l}function xx(a,l){let u=new Set;return new Set(l),a.reduce((o,c)=>{let f=JSON.stringify(bx(c));return u.has(f)||(u.add(f),o.push({key:f,link:c})),o},[])}function ag(){let a=b.useContext(Hi);return Nf(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function Sx(){let a=b.useContext(nu);return Nf(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var kf=b.createContext(void 0);kf.displayName="FrameworkContext";function ig(){let a=b.useContext(kf);return Nf(a,"You must render this element inside a <HydratedRouter> element"),a}function wx(a,l){let u=b.useContext(kf),[o,c]=b.useState(!1),[f,h]=b.useState(!1),{onFocus:y,onBlur:g,onMouseEnter:m,onMouseLeave:x,onTouchStart:S}=l,E=b.useRef(null);b.useEffect(()=>{if(a==="render"&&h(!0),a==="viewport"){let q=V=>{V.forEach(M=>{h(M.isIntersecting)})},$=new IntersectionObserver(q,{threshold:.5});return E.current&&$.observe(E.current),()=>{$.disconnect()}}},[a]),b.useEffect(()=>{if(o){let q=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(q)}}},[o]);let D=()=>{c(!0)},R=()=>{c(!1),h(!1)};return u?a!=="intent"?[f,E,{}]:[f,E,{onFocus:Hl(y,D),onBlur:Hl(g,R),onMouseEnter:Hl(m,D),onMouseLeave:Hl(x,R),onTouchStart:Hl(S,D)}]:[!1,E,{}]}function Hl(a,l){return u=>{a&&a(u),u.defaultPrevented||l(u)}}function Ex({page:a,...l}){let{router:u}=ag(),o=b.useMemo(()=>Qm(u.routes,a,u.basename),[u.routes,a,u.basename]);return o?b.createElement(Tx,{page:a,matches:o,...l}):null}function Cx(a){let{manifest:l,routeModules:u}=ig(),[o,c]=b.useState([]);return b.useEffect(()=>{let f=!1;return gx(a,l,u).then(h=>{f||c(h)}),()=>{f=!0}},[a,l,u]),o}function Tx({page:a,matches:l,...u}){let o=$n(),{manifest:c,routeModules:f}=ig(),{basename:h}=ag(),{loaderData:y,matches:g}=Sx(),m=b.useMemo(()=>h1(a,l,g,c,o,"data"),[a,l,g,c,o]),x=b.useMemo(()=>h1(a,l,g,c,o,"assets"),[a,l,g,c,o]),S=b.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let R=new Set,q=!1;if(l.forEach(V=>{let M=c.routes[V.route.id];!M||!M.hasLoader||(!m.some(_=>_.route.id===V.route.id)&&V.route.id in y&&f[V.route.id]?.shouldRevalidate||M.hasClientLoader?q=!0:R.add(V.route.id))}),R.size===0)return[];let $=px(a,h,"data");return q&&R.size>0&&$.searchParams.set("_routes",l.filter(V=>R.has(V.route.id)).map(V=>V.route.id).join(",")),[$.pathname+$.search]},[h,y,o,c,m,l,a,f]),E=b.useMemo(()=>vx(x,c),[x,c]),D=Cx(x);return b.createElement(b.Fragment,null,S.map(R=>b.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...u})),E.map(R=>b.createElement("link",{key:R,rel:"modulepreload",href:R,...u})),D.map(({key:R,link:q})=>b.createElement("link",{key:R,nonce:u.nonce,...q})))}function jx(...a){return l=>{a.forEach(u=>{typeof u=="function"?u(l):u!=null&&(u.current=l)})}}var lg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{lg&&(window.__reactRouterVersion="7.9.4")}catch{}function Rx({basename:a,children:l,window:u}){let o=b.useRef();o.current==null&&(o.current=mb({window:u,v5Compat:!0}));let c=o.current,[f,h]=b.useState({action:c.action,location:c.location}),y=b.useCallback(g=>{b.startTransition(()=>h(g))},[h]);return b.useLayoutEffect(()=>c.listen(y),[c,y]),b.createElement(ax,{basename:a,children:l,location:f.location,navigationType:f.action,navigator:c})}var rg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qi=b.forwardRef(function({onClick:l,discover:u="render",prefetch:o="none",relative:c,reloadDocument:f,replace:h,state:y,target:g,to:m,preventScrollReset:x,viewTransition:S,...E},D){let{basename:R}=b.useContext(cn),q=typeof m=="string"&&rg.test(m),$,V=!1;if(typeof m=="string"&&q&&($=m,lg))try{let Z=new URL(window.location.href),re=m.startsWith("//")?new URL(Z.protocol+m):new URL(m),J=kn(re.pathname,R);re.origin===Z.origin&&J!=null?m=J+re.search+re.hash:V=!0}catch{sn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=Yb(m,{relative:c}),[_,X,L]=wx(o,E),A=_x(m,{replace:h,state:y,target:g,preventScrollReset:x,relative:c,viewTransition:S});function F(Z){l&&l(Z),Z.defaultPrevented||A(Z)}let B=b.createElement("a",{...E,...L,href:$||M,onClick:V||f?l:F,ref:jx(D,X),target:g,"data-discover":!q&&u==="render"?"true":void 0});return _&&!q?b.createElement(b.Fragment,null,B,b.createElement(Ex,{page:M})):B});qi.displayName="Link";var zx=b.forwardRef(function({"aria-current":l="page",caseSensitive:u=!1,className:o="",end:c=!1,style:f,to:h,viewTransition:y,children:g,...m},x){let S=lr(h,{relative:m.relative}),E=$n(),D=b.useContext(nu),{navigator:R,basename:q}=b.useContext(cn),$=D!=null&&Lx(S)&&y===!0,V=R.encodeLocation?R.encodeLocation(S).pathname:S.pathname,M=E.pathname,_=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;u||(M=M.toLowerCase(),_=_?_.toLowerCase():null,V=V.toLowerCase()),_&&q&&(_=kn(_,q)||_);const X=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let L=M===V||!c&&M.startsWith(V)&&M.charAt(X)==="/",A=_!=null&&(_===V||!c&&_.startsWith(V)&&_.charAt(V.length)==="/"),F={isActive:L,isPending:A,isTransitioning:$},B=L?l:void 0,Z;typeof o=="function"?Z=o(F):Z=[o,L?"active":null,A?"pending":null,$?"transitioning":null].filter(Boolean).join(" ");let re=typeof f=="function"?f(F):f;return b.createElement(qi,{...m,"aria-current":B,className:Z,ref:x,style:re,to:h,viewTransition:y},typeof g=="function"?g(F):g)});zx.displayName="NavLink";var Ox=b.forwardRef(({discover:a="render",fetcherKey:l,navigate:u,reloadDocument:o,replace:c,state:f,method:h=Uo,action:y,onSubmit:g,relative:m,preventScrollReset:x,viewTransition:S,...E},D)=>{let R=Nx(),q=kx(y,{relative:m}),$=h.toLowerCase()==="get"?"get":"post",V=typeof y=="string"&&rg.test(y),M=_=>{if(g&&g(_),_.defaultPrevented)return;_.preventDefault();let X=_.nativeEvent.submitter,L=X?.getAttribute("formmethod")||h;R(X||_.currentTarget,{fetcherKey:l,method:L,navigate:u,replace:c,state:f,relative:m,preventScrollReset:x,viewTransition:S})};return b.createElement("form",{ref:D,method:$,action:q,onSubmit:o?g:M,...E,"data-discover":!V&&a==="render"?"true":void 0})});Ox.displayName="Form";function Mx(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function og(a){let l=b.useContext(Hi);return Xe(l,Mx(a)),l}function _x(a,{target:l,replace:u,state:o,preventScrollReset:c,relative:f,viewTransition:h}={}){let y=_f(),g=$n(),m=lr(a,{relative:f});return b.useCallback(x=>{if(sx(x,l)){x.preventDefault();let S=u!==void 0?u:Il(g)===Il(m);y(a,{replace:S,state:o,preventScrollReset:c,relative:f,viewTransition:h})}},[g,y,m,u,o,l,a,c,f,h])}var Ax=0,Dx=()=>`__${String(++Ax)}__`;function Nx(){let{router:a}=og("useSubmit"),{basename:l}=b.useContext(cn),u=Ib();return b.useCallback(async(o,c={})=>{let{action:f,method:h,encType:y,formData:g,body:m}=dx(o,l);if(c.navigate===!1){let x=c.fetcherKey||Dx();await a.fetch(x,u,c.action||f,{preventScrollReset:c.preventScrollReset,formData:g,body:m,formMethod:c.method||h,formEncType:c.encType||y,flushSync:c.flushSync})}else await a.navigate(c.action||f,{preventScrollReset:c.preventScrollReset,formData:g,body:m,formMethod:c.method||h,formEncType:c.encType||y,replace:c.replace,state:c.state,fromRouteId:u,flushSync:c.flushSync,viewTransition:c.viewTransition})},[a,l,u])}function kx(a,{relative:l}={}){let{basename:u}=b.useContext(cn),o=b.useContext(Ln);Xe(o,"useFormAction must be used inside a RouteContext");let[c]=o.matches.slice(-1),f={...lr(a||".",{relative:l})},h=$n();if(a==null){f.search=h.search;let y=new URLSearchParams(f.search),g=y.getAll("index");if(g.some(x=>x==="")){y.delete("index"),g.filter(S=>S).forEach(S=>y.append("index",S));let x=y.toString();f.search=x?`?${x}`:""}}return(!a||a===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(f.pathname=f.pathname==="/"?u:Dn([u,f.pathname])),Il(f)}function Lx(a,{relative:l}={}){let u=b.useContext(Pm);Xe(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=og("useViewTransitionState"),c=lr(a,{relative:l});if(!u.isTransitioning)return!1;let f=kn(u.currentLocation.pathname,o)||u.currentLocation.pathname,h=kn(u.nextLocation.pathname,o)||u.nextLocation.pathname;return Qo(c.pathname,h)!=null||Qo(c.pathname,f)!=null}var $x=Vm();const _i=nr($x);var dt=function(){return dt=Object.assign||function(l){for(var u,o=1,c=arguments.length;o<c;o++){u=arguments[o];for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&(l[f]=u[f])}return l},dt.apply(this,arguments)};function Di(a,l,u){if(u||arguments.length===2)for(var o=0,c=l.length,f;o<c;o++)(f||!(o in l))&&(f||(f=Array.prototype.slice.call(l,0,o)),f[o]=l[o]);return a.concat(f||Array.prototype.slice.call(l))}var qe="-ms-",Wl="-moz-",Me="-webkit-",ug="comm",iu="rule",Lf="decl",Bx="@import",sg="@keyframes",Ux="@layer",cg=Math.abs,$f=String.fromCharCode,vf=Object.assign;function Hx(a,l){return at(a,0)^45?(((l<<2^at(a,0))<<2^at(a,1))<<2^at(a,2))<<2^at(a,3):0}function fg(a){return a.trim()}function Mn(a,l){return(a=l.exec(a))?a[0]:a}function ye(a,l,u){return a.replace(l,u)}function qo(a,l,u){return a.indexOf(l,u)}function at(a,l){return a.charCodeAt(l)|0}function Ni(a,l,u){return a.slice(l,u)}function un(a){return a.length}function dg(a){return a.length}function Jl(a,l){return l.push(a),a}function qx(a,l){return a.map(l).join("")}function m1(a,l){return a.filter(function(u){return!Mn(u,l)})}var lu=1,ki=1,pg=0,Zt=0,Ie=0,Yi="";function ru(a,l,u,o,c,f,h,y){return{value:a,root:l,parent:u,type:o,props:c,children:f,line:lu,column:ki,length:h,return:"",siblings:y}}function da(a,l){return vf(ru("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},l)}function ji(a){for(;a.root;)a=da(a.root,{children:[a]});Jl(a,a.siblings)}function Yx(){return Ie}function Gx(){return Ie=Zt>0?at(Yi,--Zt):0,ki--,Ie===10&&(ki=1,lu--),Ie}function nn(){return Ie=Zt<pg?at(Yi,Zt++):0,ki++,Ie===10&&(ki=1,lu++),Ie}function Ua(){return at(Yi,Zt)}function Yo(){return Zt}function ou(a,l){return Ni(Yi,a,l)}function yf(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Xx(a){return lu=ki=1,pg=un(Yi=a),Zt=0,[]}function Vx(a){return Yi="",a}function Bc(a){return fg(ou(Zt-1,bf(a===91?a+2:a===40?a+1:a)))}function Qx(a){for(;(Ie=Ua())&&Ie<33;)nn();return yf(a)>2||yf(Ie)>3?"":" "}function Kx(a,l){for(;--l&&nn()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return ou(a,Yo()+(l<6&&Ua()==32&&nn()==32))}function bf(a){for(;nn();)switch(Ie){case a:return Zt;case 34:case 39:a!==34&&a!==39&&bf(Ie);break;case 40:a===41&&bf(a);break;case 92:nn();break}return Zt}function Zx(a,l){for(;nn()&&a+Ie!==57;)if(a+Ie===84&&Ua()===47)break;return"/*"+ou(l,Zt-1)+"*"+$f(a===47?a:nn())}function Jx(a){for(;!yf(Ua());)nn();return ou(a,Zt)}function Fx(a){return Vx(Go("",null,null,null,[""],a=Xx(a),0,[0],a))}function Go(a,l,u,o,c,f,h,y,g){for(var m=0,x=0,S=h,E=0,D=0,R=0,q=1,$=1,V=1,M=0,_="",X=c,L=f,A=o,F=_;$;)switch(R=M,M=nn()){case 40:if(R!=108&&at(F,S-1)==58){qo(F+=ye(Bc(M),"&","&\f"),"&\f",cg(m?y[m-1]:0))!=-1&&(V=-1);break}case 34:case 39:case 91:F+=Bc(M);break;case 9:case 10:case 13:case 32:F+=Qx(R);break;case 92:F+=Kx(Yo()-1,7);continue;case 47:switch(Ua()){case 42:case 47:Jl(Wx(Zx(nn(),Yo()),l,u,g),g);break;default:F+="/"}break;case 123*q:y[m++]=un(F)*V;case 125*q:case 59:case 0:switch(M){case 0:case 125:$=0;case 59+x:V==-1&&(F=ye(F,/\f/g,"")),D>0&&un(F)-S&&Jl(D>32?v1(F+";",o,u,S-1,g):v1(ye(F," ","")+";",o,u,S-2,g),g);break;case 59:F+=";";default:if(Jl(A=g1(F,l,u,m,x,c,y,_,X=[],L=[],S,f),f),M===123)if(x===0)Go(F,l,A,A,X,f,S,y,L);else switch(E===99&&at(F,3)===110?100:E){case 100:case 108:case 109:case 115:Go(a,A,A,o&&Jl(g1(a,A,A,0,0,c,y,_,c,X=[],S,L),L),c,L,S,y,o?X:L);break;default:Go(F,A,A,A,[""],L,0,y,L)}}m=x=D=0,q=V=1,_=F="",S=h;break;case 58:S=1+un(F),D=R;default:if(q<1){if(M==123)--q;else if(M==125&&q++==0&&Gx()==125)continue}switch(F+=$f(M),M*q){case 38:V=x>0?1:(F+="\f",-1);break;case 44:y[m++]=(un(F)-1)*V,V=1;break;case 64:Ua()===45&&(F+=Bc(nn())),E=Ua(),x=S=un(_=F+=Jx(Yo())),M++;break;case 45:R===45&&un(F)==2&&(q=0)}}return f}function g1(a,l,u,o,c,f,h,y,g,m,x,S){for(var E=c-1,D=c===0?f:[""],R=dg(D),q=0,$=0,V=0;q<o;++q)for(var M=0,_=Ni(a,E+1,E=cg($=h[q])),X=a;M<R;++M)(X=fg($>0?D[M]+" "+_:ye(_,/&\f/g,D[M])))&&(g[V++]=X);return ru(a,l,u,c===0?iu:y,g,m,x,S)}function Wx(a,l,u,o){return ru(a,l,u,ug,$f(Yx()),Ni(a,2,-2),0,o)}function v1(a,l,u,o,c){return ru(a,l,u,Lf,Ni(a,0,o),Ni(a,o+1,-1),o,c)}function hg(a,l,u){switch(Hx(a,l)){case 5103:return Me+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Me+a+a;case 4789:return Wl+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Me+a+Wl+a+qe+a+a;case 5936:switch(at(a,l+11)){case 114:return Me+a+qe+ye(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Me+a+qe+ye(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Me+a+qe+ye(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Me+a+qe+a+a;case 6165:return Me+a+qe+"flex-"+a+a;case 5187:return Me+a+ye(a,/(\w+).+(:[^]+)/,Me+"box-$1$2"+qe+"flex-$1$2")+a;case 5443:return Me+a+qe+"flex-item-"+ye(a,/flex-|-self/g,"")+(Mn(a,/flex-|baseline/)?"":qe+"grid-row-"+ye(a,/flex-|-self/g,""))+a;case 4675:return Me+a+qe+"flex-line-pack"+ye(a,/align-content|flex-|-self/g,"")+a;case 5548:return Me+a+qe+ye(a,"shrink","negative")+a;case 5292:return Me+a+qe+ye(a,"basis","preferred-size")+a;case 6060:return Me+"box-"+ye(a,"-grow","")+Me+a+qe+ye(a,"grow","positive")+a;case 4554:return Me+ye(a,/([^-])(transform)/g,"$1"+Me+"$2")+a;case 6187:return ye(ye(ye(a,/(zoom-|grab)/,Me+"$1"),/(image-set)/,Me+"$1"),a,"")+a;case 5495:case 3959:return ye(a,/(image-set\([^]*)/,Me+"$1$`$1");case 4968:return ye(ye(a,/(.+:)(flex-)?(.*)/,Me+"box-pack:$3"+qe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Me+a+a;case 4200:if(!Mn(a,/flex-|baseline/))return qe+"grid-column-align"+Ni(a,l)+a;break;case 2592:case 3360:return qe+ye(a,"template-","")+a;case 4384:case 3616:return u&&u.some(function(o,c){return l=c,Mn(o.props,/grid-\w+-end/)})?~qo(a+(u=u[l].value),"span",0)?a:qe+ye(a,"-start","")+a+qe+"grid-row-span:"+(~qo(u,"span",0)?Mn(u,/\d+/):+Mn(u,/\d+/)-+Mn(a,/\d+/))+";":qe+ye(a,"-start","")+a;case 4896:case 4128:return u&&u.some(function(o){return Mn(o.props,/grid-\w+-start/)})?a:qe+ye(ye(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return ye(a,/(.+)-inline(.+)/,Me+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(un(a)-1-l>6)switch(at(a,l+1)){case 109:if(at(a,l+4)!==45)break;case 102:return ye(a,/(.+:)(.+)-([^]+)/,"$1"+Me+"$2-$3$1"+Wl+(at(a,l+3)==108?"$3":"$2-$3"))+a;case 115:return~qo(a,"stretch",0)?hg(ye(a,"stretch","fill-available"),l,u)+a:a}break;case 5152:case 5920:return ye(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,c,f,h,y,g,m){return qe+c+":"+f+m+(h?qe+c+"-span:"+(y?g:+g-+f)+m:"")+a});case 4949:if(at(a,l+6)===121)return ye(a,":",":"+Me)+a;break;case 6444:switch(at(a,at(a,14)===45?18:11)){case 120:return ye(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Me+(at(a,14)===45?"inline-":"")+"box$3$1"+Me+"$2$3$1"+qe+"$2box$3")+a;case 100:return ye(a,":",":"+qe)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ye(a,"scroll-","scroll-snap-")+a}return a}function Ko(a,l){for(var u="",o=0;o<a.length;o++)u+=l(a[o],o,a,l)||"";return u}function Px(a,l,u,o){switch(a.type){case Ux:if(a.children.length)break;case Bx:case Lf:return a.return=a.return||a.value;case ug:return"";case sg:return a.return=a.value+"{"+Ko(a.children,o)+"}";case iu:if(!un(a.value=a.props.join(",")))return""}return un(u=Ko(a.children,o))?a.return=a.value+"{"+u+"}":""}function Ix(a){var l=dg(a);return function(u,o,c,f){for(var h="",y=0;y<l;y++)h+=a[y](u,o,c,f)||"";return h}}function e5(a){return function(l){l.root||(l=l.return)&&a(l)}}function t5(a,l,u,o){if(a.length>-1&&!a.return)switch(a.type){case Lf:a.return=hg(a.value,a.length,u);return;case sg:return Ko([da(a,{value:ye(a.value,"@","@"+Me)})],o);case iu:if(a.length)return qx(u=a.props,function(c){switch(Mn(c,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ji(da(a,{props:[ye(c,/:(read-\w+)/,":"+Wl+"$1")]})),ji(da(a,{props:[c]})),vf(a,{props:m1(u,o)});break;case"::placeholder":ji(da(a,{props:[ye(c,/:(plac\w+)/,":"+Me+"input-$1")]})),ji(da(a,{props:[ye(c,/:(plac\w+)/,":"+Wl+"$1")]})),ji(da(a,{props:[ye(c,/:(plac\w+)/,qe+"input-$1")]})),ji(da(a,{props:[c]})),vf(a,{props:m1(u,o)});break}return""})}}var n5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Lt={},Li=typeof process<"u"&&Lt!==void 0&&(Lt.REACT_APP_SC_ATTR||Lt.SC_ATTR)||"data-styled",mg="active",gg="data-styled-version",uu="6.1.19",Bf=`/*!sc*/
`,Zo=typeof window<"u"&&typeof document<"u",a5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==""?Lt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Lt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.SC_DISABLE_SPEEDY!==void 0&&Lt.SC_DISABLE_SPEEDY!==""&&Lt.SC_DISABLE_SPEEDY!=="false"&&Lt.SC_DISABLE_SPEEDY),i5={},su=Object.freeze([]),$i=Object.freeze({});function vg(a,l,u){return u===void 0&&(u=$i),a.theme!==u.theme&&a.theme||l||u.theme}var yg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),l5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,r5=/(^-|-$)/g;function y1(a){return a.replace(l5,"-").replace(r5,"")}var o5=/(a)(d)/gi,jo=52,b1=function(a){return String.fromCharCode(a+(a>25?39:97))};function xf(a){var l,u="";for(l=Math.abs(a);l>jo;l=l/jo|0)u=b1(l%jo)+u;return(b1(l%jo)+u).replace(o5,"$1-$2")}var Uc,bg=5381,Ai=function(a,l){for(var u=l.length;u;)a=33*a^l.charCodeAt(--u);return a},xg=function(a){return Ai(bg,a)};function Uf(a){return xf(xg(a)>>>0)}function u5(a){return a.displayName||a.name||"Component"}function Hc(a){return typeof a=="string"&&!0}var Sg=typeof Symbol=="function"&&Symbol.for,wg=Sg?Symbol.for("react.memo"):60115,s5=Sg?Symbol.for("react.forward_ref"):60112,c5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},f5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Eg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},d5=((Uc={})[s5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Uc[wg]=Eg,Uc);function x1(a){return("type"in(l=a)&&l.type.$$typeof)===wg?Eg:"$$typeof"in a?d5[a.$$typeof]:c5;var l}var p5=Object.defineProperty,h5=Object.getOwnPropertyNames,S1=Object.getOwnPropertySymbols,m5=Object.getOwnPropertyDescriptor,g5=Object.getPrototypeOf,w1=Object.prototype;function Cg(a,l,u){if(typeof l!="string"){if(w1){var o=g5(l);o&&o!==w1&&Cg(a,o,u)}var c=h5(l);S1&&(c=c.concat(S1(l)));for(var f=x1(a),h=x1(l),y=0;y<c.length;++y){var g=c[y];if(!(g in f5||u&&u[g]||h&&g in h||f&&g in f)){var m=m5(l,g);try{p5(a,g,m)}catch{}}}}return a}function Bi(a){return typeof a=="function"}function Hf(a){return typeof a=="object"&&"styledComponentId"in a}function Ba(a,l){return a&&l?"".concat(a," ").concat(l):a||l||""}function Jo(a,l){if(a.length===0)return"";for(var u=a[0],o=1;o<a.length;o++)u+=a[o];return u}function er(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function Sf(a,l,u){if(u===void 0&&(u=!1),!u&&!er(a)&&!Array.isArray(a))return l;if(Array.isArray(l))for(var o=0;o<l.length;o++)a[o]=Sf(a[o],l[o]);else if(er(l))for(var o in l)a[o]=Sf(a[o],l[o]);return a}function qf(a,l){Object.defineProperty(a,"toString",{value:l})}function rr(a){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(l.length>0?" Args: ".concat(l.join(", ")):""))}var v5=(function(){function a(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l}return a.prototype.indexOfGroup=function(l){for(var u=0,o=0;o<l;o++)u+=this.groupSizes[o];return u},a.prototype.insertRules=function(l,u){if(l>=this.groupSizes.length){for(var o=this.groupSizes,c=o.length,f=c;l>=f;)if((f<<=1)<0)throw rr(16,"".concat(l));this.groupSizes=new Uint32Array(f),this.groupSizes.set(o),this.length=f;for(var h=c;h<f;h++)this.groupSizes[h]=0}for(var y=this.indexOfGroup(l+1),g=(h=0,u.length);h<g;h++)this.tag.insertRule(y,u[h])&&(this.groupSizes[l]++,y++)},a.prototype.clearGroup=function(l){if(l<this.length){var u=this.groupSizes[l],o=this.indexOfGroup(l),c=o+u;this.groupSizes[l]=0;for(var f=o;f<c;f++)this.tag.deleteRule(o)}},a.prototype.getGroup=function(l){var u="";if(l>=this.length||this.groupSizes[l]===0)return u;for(var o=this.groupSizes[l],c=this.indexOfGroup(l),f=c+o,h=c;h<f;h++)u+="".concat(this.tag.getRule(h)).concat(Bf);return u},a})(),Xo=new Map,Fo=new Map,Vo=1,Ro=function(a){if(Xo.has(a))return Xo.get(a);for(;Fo.has(Vo);)Vo++;var l=Vo++;return Xo.set(a,l),Fo.set(l,a),l},y5=function(a,l){Vo=l+1,Xo.set(a,l),Fo.set(l,a)},b5="style[".concat(Li,"][").concat(gg,'="').concat(uu,'"]'),x5=new RegExp("^".concat(Li,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),S5=function(a,l,u){for(var o,c=u.split(","),f=0,h=c.length;f<h;f++)(o=c[f])&&a.registerName(l,o)},w5=function(a,l){for(var u,o=((u=l.textContent)!==null&&u!==void 0?u:"").split(Bf),c=[],f=0,h=o.length;f<h;f++){var y=o[f].trim();if(y){var g=y.match(x5);if(g){var m=0|parseInt(g[1],10),x=g[2];m!==0&&(y5(x,m),S5(a,x,g[3]),a.getTag().insertRules(m,c)),c.length=0}else c.push(y)}}},E1=function(a){for(var l=document.querySelectorAll(b5),u=0,o=l.length;u<o;u++){var c=l[u];c&&c.getAttribute(Li)!==mg&&(w5(a,c),c.parentNode&&c.parentNode.removeChild(c))}};function E5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Tg=function(a){var l=document.head,u=a||l,o=document.createElement("style"),c=(function(y){var g=Array.from(y.querySelectorAll("style[".concat(Li,"]")));return g[g.length-1]})(u),f=c!==void 0?c.nextSibling:null;o.setAttribute(Li,mg),o.setAttribute(gg,uu);var h=E5();return h&&o.setAttribute("nonce",h),u.insertBefore(o,f),o},C5=(function(){function a(l){this.element=Tg(l),this.element.appendChild(document.createTextNode("")),this.sheet=(function(u){if(u.sheet)return u.sheet;for(var o=document.styleSheets,c=0,f=o.length;c<f;c++){var h=o[c];if(h.ownerNode===u)return h}throw rr(17)})(this.element),this.length=0}return a.prototype.insertRule=function(l,u){try{return this.sheet.insertRule(u,l),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},a.prototype.getRule=function(l){var u=this.sheet.cssRules[l];return u&&u.cssText?u.cssText:""},a})(),T5=(function(){function a(l){this.element=Tg(l),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(l,u){if(l<=this.length&&l>=0){var o=document.createTextNode(u);return this.element.insertBefore(o,this.nodes[l]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},a.prototype.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},a})(),j5=(function(){function a(l){this.rules=[],this.length=0}return a.prototype.insertRule=function(l,u){return l<=this.length&&(this.rules.splice(l,0,u),this.length++,!0)},a.prototype.deleteRule=function(l){this.rules.splice(l,1),this.length--},a.prototype.getRule=function(l){return l<this.length?this.rules[l]:""},a})(),C1=Zo,R5={isServer:!Zo,useCSSOMInjection:!a5},Wo=(function(){function a(l,u,o){l===void 0&&(l=$i),u===void 0&&(u={});var c=this;this.options=dt(dt({},R5),l),this.gs=u,this.names=new Map(o),this.server=!!l.isServer,!this.server&&Zo&&C1&&(C1=!1,E1(this)),qf(this,function(){return(function(f){for(var h=f.getTag(),y=h.length,g="",m=function(S){var E=(function(V){return Fo.get(V)})(S);if(E===void 0)return"continue";var D=f.names.get(E),R=h.getGroup(S);if(D===void 0||!D.size||R.length===0)return"continue";var q="".concat(Li,".g").concat(S,'[id="').concat(E,'"]'),$="";D!==void 0&&D.forEach(function(V){V.length>0&&($+="".concat(V,","))}),g+="".concat(R).concat(q,'{content:"').concat($,'"}').concat(Bf)},x=0;x<y;x++)m(x);return g})(c)})}return a.registerId=function(l){return Ro(l)},a.prototype.rehydrate=function(){!this.server&&Zo&&E1(this)},a.prototype.reconstructWithOptions=function(l,u){return u===void 0&&(u=!0),new a(dt(dt({},this.options),l),this.gs,u&&this.names||void 0)},a.prototype.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(l=(function(u){var o=u.useCSSOMInjection,c=u.target;return u.isServer?new j5(c):o?new C5(c):new T5(c)})(this.options),new v5(l)));var l},a.prototype.hasNameForId=function(l,u){return this.names.has(l)&&this.names.get(l).has(u)},a.prototype.registerName=function(l,u){if(Ro(l),this.names.has(l))this.names.get(l).add(u);else{var o=new Set;o.add(u),this.names.set(l,o)}},a.prototype.insertRules=function(l,u,o){this.registerName(l,u),this.getTag().insertRules(Ro(l),o)},a.prototype.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},a.prototype.clearRules=function(l){this.getTag().clearGroup(Ro(l)),this.clearNames(l)},a.prototype.clearTag=function(){this.tag=void 0},a})(),z5=/&/g,O5=/^\s*\/\/.*$/gm;function jg(a,l){return a.map(function(u){return u.type==="rule"&&(u.value="".concat(l," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(l," ")),u.props=u.props.map(function(o){return"".concat(l," ").concat(o)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=jg(u.children,l)),u})}function M5(a){var l,u,o,c=$i,f=c.options,h=f===void 0?$i:f,y=c.plugins,g=y===void 0?su:y,m=function(E,D,R){return R.startsWith(u)&&R.endsWith(u)&&R.replaceAll(u,"").length>0?".".concat(l):E},x=g.slice();x.push(function(E){E.type===iu&&E.value.includes("&")&&(E.props[0]=E.props[0].replace(z5,u).replace(o,m))}),h.prefix&&x.push(t5),x.push(Px);var S=function(E,D,R,q){D===void 0&&(D=""),R===void 0&&(R=""),q===void 0&&(q="&"),l=q,u=D,o=new RegExp("\\".concat(u,"\\b"),"g");var $=E.replace(O5,""),V=Fx(R||D?"".concat(R," ").concat(D," { ").concat($," }"):$);h.namespace&&(V=jg(V,h.namespace));var M=[];return Ko(V,Ix(x.concat(e5(function(_){return M.push(_)})))),M};return S.hash=g.length?g.reduce(function(E,D){return D.name||rr(15),Ai(E,D.name)},bg).toString():"",S}var _5=new Wo,wf=M5(),Rg=Ye.createContext({shouldForwardProp:void 0,styleSheet:_5,stylis:wf});Rg.Consumer;Ye.createContext(void 0);function Ef(){return b.useContext(Rg)}var zg=(function(){function a(l,u){var o=this;this.inject=function(c,f){f===void 0&&(f=wf);var h=o.name+f.hash;c.hasNameForId(o.id,h)||c.insertRules(o.id,h,f(o.rules,h,"@keyframes"))},this.name=l,this.id="sc-keyframes-".concat(l),this.rules=u,qf(this,function(){throw rr(12,String(o.name))})}return a.prototype.getName=function(l){return l===void 0&&(l=wf),this.name+l.hash},a})(),A5=function(a){return a>="A"&&a<="Z"};function T1(a){for(var l="",u=0;u<a.length;u++){var o=a[u];if(u===1&&o==="-"&&a[0]==="-")return a;A5(o)?l+="-"+o.toLowerCase():l+=o}return l.startsWith("ms-")?"-"+l:l}var Og=function(a){return a==null||a===!1||a===""},Mg=function(a){var l,u,o=[];for(var c in a){var f=a[c];a.hasOwnProperty(c)&&!Og(f)&&(Array.isArray(f)&&f.isCss||Bi(f)?o.push("".concat(T1(c),":"),f,";"):er(f)?o.push.apply(o,Di(Di(["".concat(c," {")],Mg(f),!1),["}"],!1)):o.push("".concat(T1(c),": ").concat((l=c,(u=f)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||l in n5||l.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return o};function ha(a,l,u,o){if(Og(a))return[];if(Hf(a))return[".".concat(a.styledComponentId)];if(Bi(a)){if(!Bi(f=a)||f.prototype&&f.prototype.isReactComponent||!l)return[a];var c=a(l);return ha(c,l,u,o)}var f;return a instanceof zg?u?(a.inject(u,o),[a.getName(o)]):[a]:er(a)?Mg(a):Array.isArray(a)?Array.prototype.concat.apply(su,a.map(function(h){return ha(h,l,u,o)})):[a.toString()]}function _g(a){for(var l=0;l<a.length;l+=1){var u=a[l];if(Bi(u)&&!Hf(u))return!1}return!0}var D5=xg(uu),N5=(function(){function a(l,u,o){this.rules=l,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&_g(l),this.componentId=u,this.baseHash=Ai(D5,u),this.baseStyle=o,Wo.registerId(u)}return a.prototype.generateAndInjectStyles=function(l,u,o){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(l,u,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))c=Ba(c,this.staticRulesId);else{var f=Jo(ha(this.rules,l,u,o)),h=xf(Ai(this.baseHash,f)>>>0);if(!u.hasNameForId(this.componentId,h)){var y=o(f,".".concat(h),void 0,this.componentId);u.insertRules(this.componentId,h,y)}c=Ba(c,h),this.staticRulesId=h}else{for(var g=Ai(this.baseHash,o.hash),m="",x=0;x<this.rules.length;x++){var S=this.rules[x];if(typeof S=="string")m+=S;else if(S){var E=Jo(ha(S,l,u,o));g=Ai(g,E+x),m+=E}}if(m){var D=xf(g>>>0);u.hasNameForId(this.componentId,D)||u.insertRules(this.componentId,D,o(m,".".concat(D),void 0,this.componentId)),c=Ba(c,D)}}return c},a})(),Yf=Ye.createContext(void 0);Yf.Consumer;var qc={};function k5(a,l,u){var o=Hf(a),c=a,f=!Hc(a),h=l.attrs,y=h===void 0?su:h,g=l.componentId,m=g===void 0?(function(X,L){var A=typeof X!="string"?"sc":y1(X);qc[A]=(qc[A]||0)+1;var F="".concat(A,"-").concat(Uf(uu+A+qc[A]));return L?"".concat(L,"-").concat(F):F})(l.displayName,l.parentComponentId):g,x=l.displayName,S=x===void 0?(function(X){return Hc(X)?"styled.".concat(X):"Styled(".concat(u5(X),")")})(a):x,E=l.displayName&&l.componentId?"".concat(y1(l.displayName),"-").concat(l.componentId):l.componentId||m,D=o&&c.attrs?c.attrs.concat(y).filter(Boolean):y,R=l.shouldForwardProp;if(o&&c.shouldForwardProp){var q=c.shouldForwardProp;if(l.shouldForwardProp){var $=l.shouldForwardProp;R=function(X,L){return q(X,L)&&$(X,L)}}else R=q}var V=new N5(u,E,o?c.componentStyle:void 0);function M(X,L){return(function(A,F,B){var Z=A.attrs,re=A.componentStyle,J=A.defaultProps,k=A.foldedComponentIds,te=A.styledComponentId,ne=A.target,j=Ye.useContext(Yf),O=Ef(),Y=A.shouldForwardProp||O.shouldForwardProp,W=vg(F,j,J)||$i,oe=(function(ce,he,be){for(var $e,je=dt(dt({},he),{className:void 0,theme:be}),Ct=0;Ct<ce.length;Ct+=1){var Ft=Bi($e=ce[Ct])?$e(je):$e;for(var ht in Ft)je[ht]=ht==="className"?Ba(je[ht],Ft[ht]):ht==="style"?dt(dt({},je[ht]),Ft[ht]):Ft[ht]}return he.className&&(je.className=Ba(je.className,he.className)),je})(Z,F,W),fe=oe.as||ne,T={};for(var Q in oe)oe[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&oe.theme===W||(Q==="forwardedAs"?T.as=oe.forwardedAs:Y&&!Y(Q,fe)||(T[Q]=oe[Q]));var ie=(function(ce,he){var be=Ef(),$e=ce.generateAndInjectStyles(he,be.styleSheet,be.stylis);return $e})(re,oe),ae=Ba(k,te);return ie&&(ae+=" "+ie),oe.className&&(ae+=" "+oe.className),T[Hc(fe)&&!yg.has(fe)?"class":"className"]=ae,B&&(T.ref=B),b.createElement(fe,T)})(_,X,L)}M.displayName=S;var _=Ye.forwardRef(M);return _.attrs=D,_.componentStyle=V,_.displayName=S,_.shouldForwardProp=R,_.foldedComponentIds=o?Ba(c.foldedComponentIds,c.styledComponentId):"",_.styledComponentId=E,_.target=o?c.target:a,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(X){this._foldedDefaultProps=o?(function(L){for(var A=[],F=1;F<arguments.length;F++)A[F-1]=arguments[F];for(var B=0,Z=A;B<Z.length;B++)Sf(L,Z[B],!0);return L})({},c.defaultProps,X):X}}),qf(_,function(){return".".concat(_.styledComponentId)}),f&&Cg(_,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function j1(a,l){for(var u=[a[0]],o=0,c=l.length;o<c;o+=1)u.push(l[o],a[o+1]);return u}var R1=function(a){return Object.assign(a,{isCss:!0})};function ma(a){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];if(Bi(a)||er(a))return R1(ha(j1(su,Di([a],l,!0))));var o=a;return l.length===0&&o.length===1&&typeof o[0]=="string"?ha(o):R1(ha(j1(o,l)))}function Cf(a,l,u){if(u===void 0&&(u=$i),!l)throw rr(1,l);var o=function(c){for(var f=[],h=1;h<arguments.length;h++)f[h-1]=arguments[h];return a(l,u,ma.apply(void 0,Di([c],f,!1)))};return o.attrs=function(c){return Cf(a,l,dt(dt({},u),{attrs:Array.prototype.concat(u.attrs,c).filter(Boolean)}))},o.withConfig=function(c){return Cf(a,l,dt(dt({},u),c))},o}var Ag=function(a){return Cf(k5,a)},w=Ag;yg.forEach(function(a){w[a]=Ag(a)});var L5=(function(){function a(l,u){this.rules=l,this.componentId=u,this.isStatic=_g(l),Wo.registerId(this.componentId+1)}return a.prototype.createStyles=function(l,u,o,c){var f=c(Jo(ha(this.rules,u,o,c)),""),h=this.componentId+l;o.insertRules(h,h,f)},a.prototype.removeStyles=function(l,u){u.clearRules(this.componentId+l)},a.prototype.renderStyles=function(l,u,o,c){l>2&&Wo.registerId(this.componentId+l),this.removeStyles(l,o),this.createStyles(l,u,o,c)},a})();function $5(a){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];var o=ma.apply(void 0,Di([a],l,!1)),c="sc-global-".concat(Uf(JSON.stringify(o))),f=new L5(o,c),h=function(g){var m=Ef(),x=Ye.useContext(Yf),S=Ye.useRef(m.styleSheet.allocateGSInstance(c)).current;return m.styleSheet.server&&y(S,g,m.styleSheet,x,m.stylis),Ye.useLayoutEffect(function(){if(!m.styleSheet.server)return y(S,g,m.styleSheet,x,m.stylis),function(){return f.removeStyles(S,m.styleSheet)}},[S,g,m.styleSheet,x,m.stylis]),null};function y(g,m,x,S,E){if(f.isStatic)f.renderStyles(g,i5,x,E);else{var D=dt(dt({},m),{theme:vg(m,S,h.defaultProps)});f.renderStyles(g,D,x,E)}}return Ye.memo(h)}function Jt(a){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];var o=Jo(ma.apply(void 0,Di([a],l,!1))),c=Uf(o);return new zg(c,o)}var Dg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},z1=Ye.createContext&&Ye.createContext(Dg),B5=["attr","size","title"];function U5(a,l){if(a==null)return{};var u=H5(a,l),o,c;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)o=f[c],!(l.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(a,o)&&(u[o]=a[o])}return u}function H5(a,l){if(a==null)return{};var u={};for(var o in a)if(Object.prototype.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}function Po(){return Po=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},Po.apply(this,arguments)}function O1(a,l){var u=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);l&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable})),u.push.apply(u,o)}return u}function Io(a){for(var l=1;l<arguments.length;l++){var u=arguments[l]!=null?arguments[l]:{};l%2?O1(Object(u),!0).forEach(function(o){q5(a,o,u[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(u)):O1(Object(u)).forEach(function(o){Object.defineProperty(a,o,Object.getOwnPropertyDescriptor(u,o))})}return a}function q5(a,l,u){return l=Y5(l),l in a?Object.defineProperty(a,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[l]=u,a}function Y5(a){var l=G5(a,"string");return typeof l=="symbol"?l:l+""}function G5(a,l){if(typeof a!="object"||!a)return a;var u=a[Symbol.toPrimitive];if(u!==void 0){var o=u.call(a,l);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(a)}function Ng(a){return a&&a.map((l,u)=>Ye.createElement(l.tag,Io({key:u},l.attr),Ng(l.child)))}function Te(a){return l=>Ye.createElement(X5,Po({attr:Io({},a.attr)},l),Ng(a.child))}function X5(a){var l=u=>{var{attr:o,size:c,title:f}=a,h=U5(a,B5),y=c||u.size||"1em",g;return u.className&&(g=u.className),a.className&&(g=(g?g+" ":"")+a.className),Ye.createElement("svg",Po({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,o,h,{className:g,style:Io(Io({color:a.color||u.color},u.style),a.style),height:y,width:y,xmlns:"http://www.w3.org/2000/svg"}),f&&Ye.createElement("title",null,f),a.children)};return z1!==void 0?Ye.createElement(z1.Consumer,null,u=>l(u)):l(Dg)}function kg(a){return Te({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"},child:[]}]})(a)}function V5(a){return Te({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311h-.3v428h472.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32z"},child:[]}]})(a)}function Lg(a){return Te({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"},child:[]}]})(a)}function Q5(a){return Te({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"},child:[]}]})(a)}function Gf(a){return Te({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"},child:[]}]})(a)}function Xf(a){return Te({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"},child:[]}]})(a)}function $g(a){return Te({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"},child:[]}]})(a)}function K5(a){return Te({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"},child:[]}]})(a)}function Z5(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(a)}function Bg(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(a)}function J5(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(a)}function Ug(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(a)}function F5(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(a)}function Hg(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(a)}function W5(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(a)}function qg(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(a)}function M1(a){return Te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}const P5="/instalearn/assets/vedioClip1-BQ1quwNm.mp4",I5="/instalearn/assets/test-BrOnAr5c.png",e3="/instalearn/assets/teacherProfilePic-DPrjIuTX.png",t3="/instalearn/assets/Slide1-CugONfFy.png",n3="/instalearn/assets/Slide2-D-tpOApl.png",a3="/instalearn/assets/Slide3-B6C07YuO.png",i3="/instalearn/assets/Slide4-BbthJNiF.png",l3="/instalearn/assets/Slide5-BsOulZPi.png",r3="/instalearn/assets/Slide6-8dQDHdn3.png",o3="/instalearn/assets/Slide7-C6b8m5yZ.png",u3="/instalearn/assets/Slide8-DZBpeM0l.png",s3="/instalearn/assets/Slide9-CRnJTJ7g.png",zo={},c3={videoClip1:P5},f3={test:I5},Yg={teacherProfilePic:e3},On={Slide1:t3,Slide2:n3,Slide3:a3,Slide4:i3,Slide5:l3,Slide6:r3,Slide7:o3,Slide8:u3,Slide9:s3},d3=w.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
`,p3=w.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,h3=w.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,m3=w.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,g3=w.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,v3=w.span`
  font-weight: 600;
  color: #0f172a;
`,y3=w.span`
  font-size: 12px;
  color: #64748b;
`,b3=w.button`
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
`,x3=w.div`
  position: relative;
  aspect-ratio: 1 / 1; /* Instagram-like square */
  background: linear-gradient(135deg, #eef2ff, #e0f7fa);
`,S3=w.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,w3=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px 6px 12px;
`,E3=w.div`
  display: flex;
  gap: 12px;
`,Oo=w.button`
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
`,C3=w.div`
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
`,T3=w.div`
  display: flex;
`,j3=w.img`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
  margin-left: -6px;
  &:first-child { margin-left: 0; }
`,R3=w.div`
  padding: 2px 12px 14px 12px;
`,z3=w.p`
  margin: 6px 0 6px;
  font-size: 14px;
  line-height: 1.5;
  color: #0f172a;
`,O3=w.time`
  font-size: 12px;
  color: #64748b;
`;function M3({username:a="Siddharth Sir",userSubline:l="SST Teacher",avatarSrc:u=Yg.teacherProfilePic,title:o="Sense of Collective Identity - Overview",description:c="Understanding how shared culture, values, and history build national unity and belonging.",imgSrc:f="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",likedDefault:h=!1,savedDefault:y=!1,likeCountDefault:g=12,commenterAvatars:m=["https://i.pravatar.cc/100?img=12","https://i.pravatar.cc/100?img=32","https://i.pravatar.cc/100?img=8"],postUrl:x=typeof window<"u"?window.location.href:"",onLikeChange:S,onBookmarkChange:E,onShare:D}){const[R,q]=b.useState(h),[$,V]=b.useState(y),[M,_]=b.useState(g),X=R?"Unlike":"Like",L=$?"Remove bookmark":"Bookmark",A=()=>{const re=!R;q(re),_(J=>re?J+1:Math.max(0,J-1)),S&&S(re)},F=()=>{const re=!$;V(re),E&&E(re)},B=b.useMemo(()=>({title:o,text:`${a} on Infographics — ${o}`,url:x}),[o,a,x]),Z=async()=>{try{navigator.share?await navigator.share(B):navigator.clipboard&&(await navigator.clipboard.writeText(B.url),alert("Link copied to clipboard")),D&&D(B)}catch(re){console.error("Share failed:",re)}};return d.jsxs(d3,{role:"article","aria-label":`${o} instagram-style post`,children:[d.jsxs(p3,{children:[d.jsxs(h3,{children:[d.jsx(m3,{src:u,alt:`${a} avatar`}),d.jsxs(g3,{children:[d.jsx(v3,{children:a}),d.jsx(y3,{children:l})]})]}),d.jsx(b3,{"aria-label":"Post menu",title:"More",children:d.jsx(K5,{size:18})})]}),d.jsx(x3,{children:d.jsx(S3,{src:f,alt:o})}),d.jsxs(w3,{children:[d.jsxs(E3,{children:[d.jsx(Oo,{onClick:A,"aria-label":X,title:X,children:R?d.jsx(kg,{size:22}):d.jsx(Lg,{size:22})}),d.jsx(Oo,{"aria-label":"Comment",title:"Comment",children:d.jsx($g,{size:20})}),d.jsx(Oo,{onClick:Z,"aria-label":"Share",title:"Share",children:d.jsx(Hg,{size:20})})]}),d.jsx(Oo,{onClick:F,"aria-label":L,title:L,children:$?d.jsx(Gf,{size:20}):d.jsx(Xf,{size:20})})]}),d.jsxs(C3,{"aria-label":`${M} likes`,children:[d.jsx(T3,{children:m.slice(0,3).map((re,J)=>d.jsx(j3,{src:re,alt:"reaction avatar"},J))}),d.jsxs("span",{children:[M," likes"]})]}),d.jsxs(R3,{children:[d.jsxs(z3,{children:[d.jsx("strong",{children:a})," ",c]}),d.jsx(O3,{dateTime:new Date().toISOString(),children:"Just now"})]})]})}var Yc={},ql={},Mo={},_o={},Gc={exports:{}},Xc,_1;function _3(){if(_1)return Xc;_1=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Xc=a,Xc}var Vc,A1;function A3(){if(A1)return Vc;A1=1;var a=_3();function l(){}function u(){}return u.resetWarningCache=l,Vc=function(){function o(h,y,g,m,x,S){if(S!==a){var E=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw E.name="Invariant Violation",E}}o.isRequired=o;function c(){return o}var f={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:c,element:o,elementType:o,instanceOf:c,node:o,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:u,resetWarningCache:l};return f.PropTypes=f,f},Vc}var D1;function Gg(){return D1||(D1=1,Gc.exports=A3()()),Gc.exports}var N1;function D3(){return N1||(N1=1,(function(a){(function(l,u){u(a,ga(),Gg())})(_o,function(l,u,o){Object.defineProperty(l,"__esModule",{value:!0}),l.setHasSupportToCaptureOption=R;var c=h(u),f=h(o);function h(M){return M&&M.__esModule?M:{default:M}}var y=Object.assign||function(M){for(var _=1;_<arguments.length;_++){var X=arguments[_];for(var L in X)Object.prototype.hasOwnProperty.call(X,L)&&(M[L]=X[L])}return M};function g(M,_){var X={};for(var L in M)_.indexOf(L)>=0||Object.prototype.hasOwnProperty.call(M,L)&&(X[L]=M[L]);return X}function m(M,_){if(!(M instanceof _))throw new TypeError("Cannot call a class as a function")}var x=(function(){function M(_,X){for(var L=0;L<X.length;L++){var A=X[L];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(_,A.key,A)}}return function(_,X,L){return X&&M(_.prototype,X),L&&M(_,L),_}})();function S(M,_){if(!M)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _&&(typeof _=="object"||typeof _=="function")?_:M}function E(M,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof _);M.prototype=Object.create(_&&_.prototype,{constructor:{value:M,enumerable:!1,writable:!0,configurable:!0}}),_&&(Object.setPrototypeOf?Object.setPrototypeOf(M,_):M.__proto__=_)}var D=!1;function R(M){D=M}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){R(!0)}}))}catch{}function q(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return D?M:M.capture}function $(M){if("touches"in M){var _=M.touches[0],X=_.pageX,L=_.pageY;return{x:X,y:L}}var A=M.screenX,F=M.screenY;return{x:A,y:F}}var V=(function(M){E(_,M);function _(){var X;m(this,_);for(var L=arguments.length,A=Array(L),F=0;F<L;F++)A[F]=arguments[F];var B=S(this,(X=_.__proto__||Object.getPrototypeOf(_)).call.apply(X,[this].concat(A)));return B._handleSwipeStart=B._handleSwipeStart.bind(B),B._handleSwipeMove=B._handleSwipeMove.bind(B),B._handleSwipeEnd=B._handleSwipeEnd.bind(B),B._onMouseDown=B._onMouseDown.bind(B),B._onMouseMove=B._onMouseMove.bind(B),B._onMouseUp=B._onMouseUp.bind(B),B._setSwiperRef=B._setSwiperRef.bind(B),B}return x(_,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,q({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,q({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(L){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(L))}},{key:"_onMouseMove",value:function(L){this.mouseDown&&this._handleSwipeMove(L)}},{key:"_onMouseUp",value:function(L){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(L)}},{key:"_handleSwipeStart",value:function(L){var A=$(L),F=A.x,B=A.y;this.moveStart={x:F,y:B},this.props.onSwipeStart(L)}},{key:"_handleSwipeMove",value:function(L){if(this.moveStart){var A=$(L),F=A.x,B=A.y,Z=F-this.moveStart.x,re=B-this.moveStart.y;this.moving=!0;var J=this.props.onSwipeMove({x:Z,y:re},L);J&&L.cancelable&&L.preventDefault(),this.movePosition={deltaX:Z,deltaY:re}}}},{key:"_handleSwipeEnd",value:function(L){this.props.onSwipeEnd(L);var A=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-A?this.props.onSwipeLeft(1,L):this.movePosition.deltaX>A&&this.props.onSwipeRight(1,L),this.movePosition.deltaY<-A?this.props.onSwipeUp(1,L):this.movePosition.deltaY>A&&this.props.onSwipeDown(1,L)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(L){this.swiper=L,this.props.innerRef(L)}},{key:"render",value:function(){var L=this.props;L.tagName;var A=L.className,F=L.style,B=L.children;L.allowMouseEvents,L.onSwipeUp,L.onSwipeDown,L.onSwipeLeft,L.onSwipeRight,L.onSwipeStart,L.onSwipeMove,L.onSwipeEnd,L.innerRef,L.tolerance;var Z=g(L,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return c.default.createElement(this.props.tagName,y({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:A,style:F},Z),B)}}]),_})(u.Component);V.displayName="ReactSwipe",V.propTypes={tagName:f.default.string,className:f.default.string,style:f.default.object,children:f.default.node,allowMouseEvents:f.default.bool,onSwipeUp:f.default.func,onSwipeDown:f.default.func,onSwipeLeft:f.default.func,onSwipeRight:f.default.func,onSwipeStart:f.default.func,onSwipeMove:f.default.func,onSwipeEnd:f.default.func,innerRef:f.default.func,tolerance:f.default.number.isRequired},V.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},l.default=V})})(_o)),_o}var k1;function Xg(){return k1||(k1=1,(function(a){(function(l,u){u(a,D3())})(Mo,function(l,u){Object.defineProperty(l,"__esModule",{value:!0});var o=c(u);function c(f){return f&&f.__esModule?f:{default:f}}l.default=o.default})})(Mo)),Mo}var Yl={},Qc={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var L1;function Vg(){return L1||(L1=1,(function(a){(function(){var l={}.hasOwnProperty;function u(){for(var f="",h=0;h<arguments.length;h++){var y=arguments[h];y&&(f=c(f,o(y)))}return f}function o(f){if(typeof f=="string"||typeof f=="number")return f;if(typeof f!="object")return"";if(Array.isArray(f))return u.apply(null,f);if(f.toString!==Object.prototype.toString&&!f.toString.toString().includes("[native code]"))return f.toString();var h="";for(var y in f)l.call(f,y)&&f[y]&&(h=c(h,y));return h}function c(f,h){return h?f?f+" "+h:f+h:f}a.exports?(u.default=u,a.exports=u):window.classNames=u})()})(Qc)),Qc.exports}var $1;function Qg(){if($1)return Yl;$1=1,Object.defineProperty(Yl,"__esModule",{value:!0}),Yl.default=void 0;var a=l(Vg());function l(c){return c&&c.__esModule?c:{default:c}}function u(c,f,h){return f in c?Object.defineProperty(c,f,{value:h,enumerable:!0,configurable:!0,writable:!0}):c[f]=h,c}var o={ROOT:function(f){return(0,a.default)(u({"carousel-root":!0},f||"",!!f))},CAROUSEL:function(f){return(0,a.default)({carousel:!0,"carousel-slider":f})},WRAPPER:function(f,h){return(0,a.default)({"thumbs-wrapper":!f,"slider-wrapper":f,"axis-horizontal":h==="horizontal","axis-vertical":h!=="horizontal"})},SLIDER:function(f,h){return(0,a.default)({thumbs:!f,slider:f,animated:!h})},ITEM:function(f,h,y){return(0,a.default)({thumb:!f,slide:f,selected:h,previous:y})},ARROW_PREV:function(f){return(0,a.default)({"control-arrow control-prev":!0,"control-disabled":f})},ARROW_NEXT:function(f){return(0,a.default)({"control-arrow control-next":!0,"control-disabled":f})},DOT:function(f){return(0,a.default)({dot:!0,selected:f})}};return Yl.default=o,Yl}var Gl={},Xl={},B1;function N3(){if(B1)return Xl;B1=1,Object.defineProperty(Xl,"__esModule",{value:!0}),Xl.outerWidth=void 0;var a=function(u){var o=u.offsetWidth,c=getComputedStyle(u);return o+=parseInt(c.marginLeft)+parseInt(c.marginRight),o};return Xl.outerWidth=a,Xl}var Vl={},U1;function Vf(){if(U1)return Vl;U1=1,Object.defineProperty(Vl,"__esModule",{value:!0}),Vl.default=void 0;var a=function(u,o,c){var f=u===0?u:u+o,h=c==="horizontal"?[f,0,0]:[0,f,0],y="translate3d",g="("+h.join(",")+")";return y+g};return Vl.default=a,Vl}var Ql={},H1;function Kg(){if(H1)return Ql;H1=1,Object.defineProperty(Ql,"__esModule",{value:!0}),Ql.default=void 0;var a=function(){return window};return Ql.default=a,Ql}var q1;function Zg(){if(q1)return Gl;q1=1,Object.defineProperty(Gl,"__esModule",{value:!0}),Gl.default=void 0;var a=g(ga()),l=h(Qg()),u=N3(),o=h(Vf()),c=h(Xg()),f=h(Kg());function h(B){return B&&B.__esModule?B:{default:B}}function y(){if(typeof WeakMap!="function")return null;var B=new WeakMap;return y=function(){return B},B}function g(B){if(B&&B.__esModule)return B;if(B===null||m(B)!=="object"&&typeof B!="function")return{default:B};var Z=y();if(Z&&Z.has(B))return Z.get(B);var re={},J=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var k in B)if(Object.prototype.hasOwnProperty.call(B,k)){var te=J?Object.getOwnPropertyDescriptor(B,k):null;te&&(te.get||te.set)?Object.defineProperty(re,k,te):re[k]=B[k]}return re.default=B,Z&&Z.set(B,re),re}function m(B){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?m=function(re){return typeof re}:m=function(re){return re&&typeof Symbol=="function"&&re.constructor===Symbol&&re!==Symbol.prototype?"symbol":typeof re},m(B)}function x(){return x=Object.assign||function(B){for(var Z=1;Z<arguments.length;Z++){var re=arguments[Z];for(var J in re)Object.prototype.hasOwnProperty.call(re,J)&&(B[J]=re[J])}return B},x.apply(this,arguments)}function S(B,Z){if(!(B instanceof Z))throw new TypeError("Cannot call a class as a function")}function E(B,Z){for(var re=0;re<Z.length;re++){var J=Z[re];J.enumerable=J.enumerable||!1,J.configurable=!0,"value"in J&&(J.writable=!0),Object.defineProperty(B,J.key,J)}}function D(B,Z,re){return Z&&E(B.prototype,Z),B}function R(B,Z){if(typeof Z!="function"&&Z!==null)throw new TypeError("Super expression must either be null or a function");B.prototype=Object.create(Z&&Z.prototype,{constructor:{value:B,writable:!0,configurable:!0}}),Z&&q(B,Z)}function q(B,Z){return q=Object.setPrototypeOf||function(J,k){return J.__proto__=k,J},q(B,Z)}function $(B){var Z=_();return function(){var J=X(B),k;if(Z){var te=X(this).constructor;k=Reflect.construct(J,arguments,te)}else k=J.apply(this,arguments);return V(this,k)}}function V(B,Z){return Z&&(m(Z)==="object"||typeof Z=="function")?Z:M(B)}function M(B){if(B===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return B}function _(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function X(B){return X=Object.setPrototypeOf?Object.getPrototypeOf:function(re){return re.__proto__||Object.getPrototypeOf(re)},X(B)}function L(B,Z,re){return Z in B?Object.defineProperty(B,Z,{value:re,enumerable:!0,configurable:!0,writable:!0}):B[Z]=re,B}var A=function(Z){return Z.hasOwnProperty("key")},F=(function(B){R(re,B);var Z=$(re);function re(J){var k;return S(this,re),k=Z.call(this,J),L(M(k),"itemsWrapperRef",void 0),L(M(k),"itemsListRef",void 0),L(M(k),"thumbsRef",void 0),L(M(k),"setItemsWrapperRef",function(te){k.itemsWrapperRef=te}),L(M(k),"setItemsListRef",function(te){k.itemsListRef=te}),L(M(k),"setThumbsRef",function(te,ne){k.thumbsRef||(k.thumbsRef=[]),k.thumbsRef[ne]=te}),L(M(k),"updateSizes",function(){if(!(!k.props.children||!k.itemsWrapperRef||!k.thumbsRef)){var te=a.Children.count(k.props.children),ne=k.itemsWrapperRef.clientWidth,j=k.props.thumbWidth?k.props.thumbWidth:(0,u.outerWidth)(k.thumbsRef[0]),O=Math.floor(ne/j),Y=O<te,W=Y?te-O:0;k.setState(function(oe,fe){return{itemSize:j,visibleItems:O,firstItem:Y?k.getFirstItem(fe.selectedItem):0,lastPosition:W,showArrows:Y}})}}),L(M(k),"handleClickItem",function(te,ne,j){if(!A(j)||j.key==="Enter"){var O=k.props.onSelectItem;typeof O=="function"&&O(te,ne)}}),L(M(k),"onSwipeStart",function(){k.setState({swiping:!0})}),L(M(k),"onSwipeEnd",function(){k.setState({swiping:!1})}),L(M(k),"onSwipeMove",function(te){var ne=te.x;if(!k.state.itemSize||!k.itemsWrapperRef||!k.state.visibleItems)return!1;var j=0,O=a.Children.count(k.props.children),Y=-(k.state.firstItem*100)/k.state.visibleItems,W=Math.max(O-k.state.visibleItems,0),oe=-W*100/k.state.visibleItems;Y===j&&ne>0&&(ne=0),Y===oe&&ne<0&&(ne=0);var fe=k.itemsWrapperRef.clientWidth,T=Y+100/(fe/ne);return k.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(Q){k.itemsListRef.style[Q]=(0,o.default)(T,"%",k.props.axis)}),!0}),L(M(k),"slideRight",function(te){k.moveTo(k.state.firstItem-(typeof te=="number"?te:1))}),L(M(k),"slideLeft",function(te){k.moveTo(k.state.firstItem+(typeof te=="number"?te:1))}),L(M(k),"moveTo",function(te){te=te<0?0:te,te=te>=k.state.lastPosition?k.state.lastPosition:te,k.setState({firstItem:te})}),k.state={selectedItem:J.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},k}return D(re,[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(k){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==k.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,f.default)().addEventListener("resize",this.updateSizes),(0,f.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,f.default)().removeEventListener("resize",this.updateSizes),(0,f.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(k){var te=k;return k>=this.state.lastPosition&&(te=this.state.lastPosition),k<this.state.firstItem+this.state.visibleItems&&(te=this.state.firstItem),k<this.state.firstItem&&(te=k),te}},{key:"renderItems",value:function(){var k=this;return this.props.children.map(function(te,ne){var j=l.default.ITEM(!1,ne===k.state.selectedItem),O={key:ne,ref:function(W){return k.setThumbsRef(W,ne)},className:j,onClick:k.handleClickItem.bind(k,ne,k.props.children[ne]),onKeyDown:k.handleClickItem.bind(k,ne,k.props.children[ne]),"aria-label":"".concat(k.props.labels.item," ").concat(ne+1),style:{width:k.props.thumbWidth}};return a.default.createElement("li",x({},O,{role:"button",tabIndex:0}),te)})}},{key:"render",value:function(){var k=this;if(!this.props.children)return null;var te=a.Children.count(this.props.children)>1,ne=this.state.showArrows&&this.state.firstItem>0,j=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,O={},Y=-this.state.firstItem*(this.state.itemSize||0),W=(0,o.default)(Y,"px",this.props.axis),oe=this.props.transitionTime+"ms";return O={WebkitTransform:W,MozTransform:W,MsTransform:W,OTransform:W,transform:W,msTransform:W,WebkitTransitionDuration:oe,MozTransitionDuration:oe,MsTransitionDuration:oe,OTransitionDuration:oe,transitionDuration:oe,msTransitionDuration:oe},a.default.createElement("div",{className:l.default.CAROUSEL(!1)},a.default.createElement("div",{className:l.default.WRAPPER(!1),ref:this.setItemsWrapperRef},a.default.createElement("button",{type:"button",className:l.default.ARROW_PREV(!ne),onClick:function(){return k.slideRight()},"aria-label":this.props.labels.leftArrow}),te?a.default.createElement(c.default,{tagName:"ul",className:l.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:O,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):a.default.createElement("ul",{className:l.default.SLIDER(!1,this.state.swiping),ref:function(T){return k.setItemsListRef(T)},style:O},this.renderItems()),a.default.createElement("button",{type:"button",className:l.default.ARROW_NEXT(!j),onClick:function(){return k.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}]),re})(a.Component);return Gl.default=F,L(F,"displayName","Thumbs"),L(F,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350}),Gl}var Kl={},Y1;function k3(){if(Y1)return Kl;Y1=1,Object.defineProperty(Kl,"__esModule",{value:!0}),Kl.default=void 0;var a=function(){return document};return Kl.default=a,Kl}var kt={},G1;function Jg(){if(G1)return kt;G1=1,Object.defineProperty(kt,"__esModule",{value:!0}),kt.setPosition=kt.getPosition=kt.isKeyboardEvent=kt.defaultStatusFormatter=kt.noop=void 0;var a=ga(),l=u(Vf());function u(g){return g&&g.__esModule?g:{default:g}}var o=function(){};kt.noop=o;var c=function(m,x){return"".concat(m," of ").concat(x)};kt.defaultStatusFormatter=c;var f=function(m){return m?m.hasOwnProperty("key"):!1};kt.isKeyboardEvent=f;var h=function(m,x){if(x.infiniteLoop&&++m,m===0)return 0;var S=a.Children.count(x.children);if(x.centerMode&&x.axis==="horizontal"){var E=-m*x.centerSlidePercentage,D=S-1;return m&&(m!==D||x.infiniteLoop)?E+=(100-x.centerSlidePercentage)/2:m===D&&(E+=100-x.centerSlidePercentage),E}return-m*100};kt.getPosition=h;var y=function(m,x){var S={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(E){S[E]=(0,l.default)(m,"%",x)}),S};return kt.setPosition=y,kt}var en={},X1;function L3(){if(X1)return en;X1=1,Object.defineProperty(en,"__esModule",{value:!0}),en.fadeAnimationHandler=en.slideStopSwipingHandler=en.slideSwipeAnimationHandler=en.slideAnimationHandler=void 0;var a=ga(),l=o(Vf()),u=Jg();function o(S){return S&&S.__esModule?S:{default:S}}function c(S,E){var D=Object.keys(S);if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(S);E&&(R=R.filter(function(q){return Object.getOwnPropertyDescriptor(S,q).enumerable})),D.push.apply(D,R)}return D}function f(S){for(var E=1;E<arguments.length;E++){var D=arguments[E]!=null?arguments[E]:{};E%2?c(Object(D),!0).forEach(function(R){h(S,R,D[R])}):Object.getOwnPropertyDescriptors?Object.defineProperties(S,Object.getOwnPropertyDescriptors(D)):c(Object(D)).forEach(function(R){Object.defineProperty(S,R,Object.getOwnPropertyDescriptor(D,R))})}return S}function h(S,E,D){return E in S?Object.defineProperty(S,E,{value:D,enumerable:!0,configurable:!0,writable:!0}):S[E]=D,S}var y=function(E,D){var R={},q=D.selectedItem,$=q,V=a.Children.count(E.children)-1,M=E.infiniteLoop&&(q<0||q>V);if(M)return $<0?E.centerMode&&E.centerSlidePercentage&&E.axis==="horizontal"?R.itemListStyle=(0,u.setPosition)(-(V+2)*E.centerSlidePercentage-(100-E.centerSlidePercentage)/2,E.axis):R.itemListStyle=(0,u.setPosition)(-(V+2)*100,E.axis):$>V&&(R.itemListStyle=(0,u.setPosition)(0,E.axis)),R;var _=(0,u.getPosition)(q,E),X=(0,l.default)(_,"%",E.axis),L=E.transitionTime+"ms";return R.itemListStyle={WebkitTransform:X,msTransform:X,OTransform:X,transform:X},D.swiping||(R.itemListStyle=f(f({},R.itemListStyle),{},{WebkitTransitionDuration:L,MozTransitionDuration:L,OTransitionDuration:L,transitionDuration:L,msTransitionDuration:L})),R};en.slideAnimationHandler=y;var g=function(E,D,R,q){var $={},V=D.axis==="horizontal",M=a.Children.count(D.children),_=0,X=(0,u.getPosition)(R.selectedItem,D),L=D.infiniteLoop?(0,u.getPosition)(M-1,D)-100:(0,u.getPosition)(M-1,D),A=V?E.x:E.y,F=A;X===_&&A>0&&(F=0),X===L&&A<0&&(F=0);var B=X+100/(R.itemSize/F),Z=Math.abs(A)>D.swipeScrollTolerance;return D.infiniteLoop&&Z&&(R.selectedItem===0&&B>-100?B-=M*100:R.selectedItem===M-1&&B<-M*100&&(B+=M*100)),(!D.preventMovementUntilSwipeScrollTolerance||Z||R.swipeMovementStarted)&&(R.swipeMovementStarted||q({swipeMovementStarted:!0}),$.itemListStyle=(0,u.setPosition)(B,D.axis)),Z&&!R.cancelClick&&q({cancelClick:!0}),$};en.slideSwipeAnimationHandler=g;var m=function(E,D){var R=(0,u.getPosition)(D.selectedItem,E),q=(0,u.setPosition)(R,E.axis);return{itemListStyle:q}};en.slideStopSwipingHandler=m;var x=function(E,D){var R=E.transitionTime+"ms",q="ease-in-out",$={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:q,msTransitionTimingFunction:q,MozTransitionTimingFunction:q,WebkitTransitionTimingFunction:q,OTransitionTimingFunction:q};return D.swiping||($=f(f({},$),{},{WebkitTransitionDuration:R,MozTransitionDuration:R,OTransitionDuration:R,transitionDuration:R,msTransitionDuration:R})),{slideStyle:$,selectedStyle:f(f({},$),{},{opacity:1,position:"relative"}),prevStyle:f({},$)}};return en.fadeAnimationHandler=x,en}var V1;function $3(){if(V1)return ql;V1=1,Object.defineProperty(ql,"__esModule",{value:!0}),ql.default=void 0;var a=x(ga()),l=g(Xg()),u=g(Qg()),o=g(Zg()),c=g(k3()),f=g(Kg()),h=Jg(),y=L3();function g(J){return J&&J.__esModule?J:{default:J}}function m(){if(typeof WeakMap!="function")return null;var J=new WeakMap;return m=function(){return J},J}function x(J){if(J&&J.__esModule)return J;if(J===null||S(J)!=="object"&&typeof J!="function")return{default:J};var k=m();if(k&&k.has(J))return k.get(J);var te={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var j in J)if(Object.prototype.hasOwnProperty.call(J,j)){var O=ne?Object.getOwnPropertyDescriptor(J,j):null;O&&(O.get||O.set)?Object.defineProperty(te,j,O):te[j]=J[j]}return te.default=J,k&&k.set(J,te),te}function S(J){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?S=function(te){return typeof te}:S=function(te){return te&&typeof Symbol=="function"&&te.constructor===Symbol&&te!==Symbol.prototype?"symbol":typeof te},S(J)}function E(){return E=Object.assign||function(J){for(var k=1;k<arguments.length;k++){var te=arguments[k];for(var ne in te)Object.prototype.hasOwnProperty.call(te,ne)&&(J[ne]=te[ne])}return J},E.apply(this,arguments)}function D(J,k){var te=Object.keys(J);if(Object.getOwnPropertySymbols){var ne=Object.getOwnPropertySymbols(J);k&&(ne=ne.filter(function(j){return Object.getOwnPropertyDescriptor(J,j).enumerable})),te.push.apply(te,ne)}return te}function R(J){for(var k=1;k<arguments.length;k++){var te=arguments[k]!=null?arguments[k]:{};k%2?D(Object(te),!0).forEach(function(ne){Z(J,ne,te[ne])}):Object.getOwnPropertyDescriptors?Object.defineProperties(J,Object.getOwnPropertyDescriptors(te)):D(Object(te)).forEach(function(ne){Object.defineProperty(J,ne,Object.getOwnPropertyDescriptor(te,ne))})}return J}function q(J,k){if(!(J instanceof k))throw new TypeError("Cannot call a class as a function")}function $(J,k){for(var te=0;te<k.length;te++){var ne=k[te];ne.enumerable=ne.enumerable||!1,ne.configurable=!0,"value"in ne&&(ne.writable=!0),Object.defineProperty(J,ne.key,ne)}}function V(J,k,te){return k&&$(J.prototype,k),J}function M(J,k){if(typeof k!="function"&&k!==null)throw new TypeError("Super expression must either be null or a function");J.prototype=Object.create(k&&k.prototype,{constructor:{value:J,writable:!0,configurable:!0}}),k&&_(J,k)}function _(J,k){return _=Object.setPrototypeOf||function(ne,j){return ne.__proto__=j,ne},_(J,k)}function X(J){var k=F();return function(){var ne=B(J),j;if(k){var O=B(this).constructor;j=Reflect.construct(ne,arguments,O)}else j=ne.apply(this,arguments);return L(this,j)}}function L(J,k){return k&&(S(k)==="object"||typeof k=="function")?k:A(J)}function A(J){if(J===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return J}function F(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function B(J){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(te){return te.__proto__||Object.getPrototypeOf(te)},B(J)}function Z(J,k,te){return k in J?Object.defineProperty(J,k,{value:te,enumerable:!0,configurable:!0,writable:!0}):J[k]=te,J}var re=(function(J){M(te,J);var k=X(te);function te(ne){var j;q(this,te),j=k.call(this,ne),Z(A(j),"thumbsRef",void 0),Z(A(j),"carouselWrapperRef",void 0),Z(A(j),"listRef",void 0),Z(A(j),"itemsRef",void 0),Z(A(j),"timer",void 0),Z(A(j),"animationHandler",void 0),Z(A(j),"setThumbsRef",function(Y){j.thumbsRef=Y}),Z(A(j),"setCarouselWrapperRef",function(Y){j.carouselWrapperRef=Y}),Z(A(j),"setListRef",function(Y){j.listRef=Y}),Z(A(j),"setItemsRef",function(Y,W){j.itemsRef||(j.itemsRef=[]),j.itemsRef[W]=Y}),Z(A(j),"autoPlay",function(){a.Children.count(j.props.children)<=1||(j.clearAutoPlay(),j.props.autoPlay&&(j.timer=setTimeout(function(){j.increment()},j.props.interval)))}),Z(A(j),"clearAutoPlay",function(){j.timer&&clearTimeout(j.timer)}),Z(A(j),"resetAutoPlay",function(){j.clearAutoPlay(),j.autoPlay()}),Z(A(j),"stopOnHover",function(){j.setState({isMouseEntered:!0},j.clearAutoPlay)}),Z(A(j),"startOnLeave",function(){j.setState({isMouseEntered:!1},j.autoPlay)}),Z(A(j),"isFocusWithinTheCarousel",function(){return j.carouselWrapperRef?!!((0,c.default)().activeElement===j.carouselWrapperRef||j.carouselWrapperRef.contains((0,c.default)().activeElement)):!1}),Z(A(j),"navigateWithKeyboard",function(Y){if(j.isFocusWithinTheCarousel()){var W=j.props.axis,oe=W==="horizontal",fe={ArrowUp:38,ArrowRight:39,ArrowDown:40,ArrowLeft:37},T=oe?fe.ArrowRight:fe.ArrowDown,Q=oe?fe.ArrowLeft:fe.ArrowUp;T===Y.keyCode?j.increment():Q===Y.keyCode&&j.decrement()}}),Z(A(j),"updateSizes",function(){if(!(!j.state.initialized||!j.itemsRef||j.itemsRef.length===0)){var Y=j.props.axis==="horizontal",W=j.itemsRef[0];if(W){var oe=Y?W.clientWidth:W.clientHeight;j.setState({itemSize:oe}),j.thumbsRef&&j.thumbsRef.updateSizes()}}}),Z(A(j),"setMountState",function(){j.setState({hasMount:!0}),j.updateSizes()}),Z(A(j),"handleClickItem",function(Y,W){if(a.Children.count(j.props.children)!==0){if(j.state.cancelClick){j.setState({cancelClick:!1});return}j.props.onClickItem(Y,W),Y!==j.state.selectedItem&&j.setState({selectedItem:Y})}}),Z(A(j),"handleOnChange",function(Y,W){a.Children.count(j.props.children)<=1||j.props.onChange(Y,W)}),Z(A(j),"handleClickThumb",function(Y,W){j.props.onClickThumb(Y,W),j.moveTo(Y)}),Z(A(j),"onSwipeStart",function(Y){j.setState({swiping:!0}),j.props.onSwipeStart(Y)}),Z(A(j),"onSwipeEnd",function(Y){j.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),j.props.onSwipeEnd(Y),j.clearAutoPlay(),j.state.autoPlay&&j.autoPlay()}),Z(A(j),"onSwipeMove",function(Y,W){j.props.onSwipeMove(W);var oe=j.props.swipeAnimationHandler(Y,j.props,j.state,j.setState.bind(A(j)));return j.setState(R({},oe)),!!Object.keys(oe).length}),Z(A(j),"decrement",function(){var Y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;j.moveTo(j.state.selectedItem-(typeof Y=="number"?Y:1))}),Z(A(j),"increment",function(){var Y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;j.moveTo(j.state.selectedItem+(typeof Y=="number"?Y:1))}),Z(A(j),"moveTo",function(Y){if(typeof Y=="number"){var W=a.Children.count(j.props.children)-1;Y<0&&(Y=j.props.infiniteLoop?W:0),Y>W&&(Y=j.props.infiniteLoop?0:W),j.selectItem({selectedItem:Y}),j.state.autoPlay&&j.state.isMouseEntered===!1&&j.resetAutoPlay()}}),Z(A(j),"onClickNext",function(){j.increment(1)}),Z(A(j),"onClickPrev",function(){j.decrement(1)}),Z(A(j),"onSwipeForward",function(){j.increment(1),j.props.emulateTouch&&j.setState({cancelClick:!0})}),Z(A(j),"onSwipeBackwards",function(){j.decrement(1),j.props.emulateTouch&&j.setState({cancelClick:!0})}),Z(A(j),"changeItem",function(Y){return function(W){(!(0,h.isKeyboardEvent)(W)||W.key==="Enter")&&j.moveTo(Y)}}),Z(A(j),"selectItem",function(Y){j.setState(R({previousItem:j.state.selectedItem},Y),function(){j.setState(j.animationHandler(j.props,j.state))}),j.handleOnChange(Y.selectedItem,a.Children.toArray(j.props.children)[Y.selectedItem])}),Z(A(j),"getInitialImage",function(){var Y=j.props.selectedItem,W=j.itemsRef&&j.itemsRef[Y],oe=W&&W.getElementsByTagName("img")||[];return oe[0]}),Z(A(j),"getVariableItemHeight",function(Y){var W=j.itemsRef&&j.itemsRef[Y];if(j.state.hasMount&&W&&W.children.length){var oe=W.children[0].getElementsByTagName("img")||[];if(oe.length>0){var fe=oe[0];if(!fe.complete){var T=function ae(){j.forceUpdate(),fe.removeEventListener("load",ae)};fe.addEventListener("load",T)}}var Q=oe[0]||W.children[0],ie=Q.clientHeight;return ie>0?ie:null}return null});var O={initialized:!1,previousItem:ne.selectedItem,selectedItem:ne.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:ne.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return j.animationHandler=typeof ne.animationHandler=="function"&&ne.animationHandler||ne.animationHandler==="fade"&&y.fadeAnimationHandler||y.slideAnimationHandler,j.state=R(R({},O),j.animationHandler(ne,O)),j}return V(te,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(j,O){!j.children&&this.props.children&&!this.state.initialized&&this.setupCarousel(),!j.autoFocus&&this.props.autoFocus&&this.forceFocus(),O.swiping&&!this.state.swiping&&this.setState(R({},this.props.stopSwipingHandler(this.props,this.state))),(j.selectedItem!==this.props.selectedItem||j.centerMode!==this.props.centerMode)&&(this.updateSizes(),this.moveTo(this.props.selectedItem)),j.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var j=this;this.bindEvents(),this.state.autoPlay&&a.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},function(){var O=j.getInitialImage();O&&!O.complete?O.addEventListener("load",j.setMountState):j.setMountState()})}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var j=this.carouselWrapperRef;this.props.stopOnHover&&j&&(j.addEventListener("mouseenter",this.stopOnHover),j.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var j=this.carouselWrapperRef;this.props.stopOnHover&&j&&(j.removeEventListener("mouseenter",this.stopOnHover),j.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,f.default)().addEventListener("resize",this.updateSizes),(0,f.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,c.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,f.default)().removeEventListener("resize",this.updateSizes),(0,f.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var j=this.getInitialImage();j&&j.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,c.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var j;(j=this.carouselWrapperRef)===null||j===void 0||j.focus()}},{key:"renderItems",value:function(j){var O=this;return this.props.children?a.Children.map(this.props.children,function(Y,W){var oe=W===O.state.selectedItem,fe=W===O.state.previousItem,T=oe&&O.state.selectedStyle||fe&&O.state.prevStyle||O.state.slideStyle||{};O.props.centerMode&&O.props.axis==="horizontal"&&(T=R(R({},T),{},{minWidth:O.props.centerSlidePercentage+"%"})),O.state.swiping&&O.state.swipeMovementStarted&&(T=R(R({},T),{},{pointerEvents:"none"}));var Q={ref:function(ae){return O.setItemsRef(ae,W)},key:"itemKey"+W+(j?"clone":""),className:u.default.ITEM(!0,W===O.state.selectedItem,W===O.state.previousItem),onClick:O.handleClickItem.bind(O,W,Y),style:T};return a.default.createElement("li",Q,O.props.renderItem(Y,{isSelected:W===O.state.selectedItem,isPrevious:W===O.state.previousItem}))}):[]}},{key:"renderControls",value:function(){var j=this,O=this.props,Y=O.showIndicators,W=O.labels,oe=O.renderIndicator,fe=O.children;return Y?a.default.createElement("ul",{className:"control-dots"},a.Children.map(fe,function(T,Q){return oe&&oe(j.changeItem(Q),Q===j.state.selectedItem,Q,W.item)})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?a.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,a.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return!this.props.showThumbs||!this.props.children||a.Children.count(this.props.children)===0?null:a.default.createElement(o.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children))}},{key:"render",value:function(){var j=this;if(!this.props.children||a.Children.count(this.props.children)===0)return null;var O=this.props.swipeable&&a.Children.count(this.props.children)>1,Y=this.props.axis==="horizontal",W=this.props.showArrows&&a.Children.count(this.props.children)>1,oe=W&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,fe=W&&(this.state.selectedItem<a.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,T=this.renderItems(!0),Q=T.shift(),ie=T.pop(),ae={className:u.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},ce={};if(Y){if(ae.onSwipeLeft=this.onSwipeForward,ae.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var he=this.getVariableItemHeight(this.state.selectedItem);ce.height=he||"auto"}}else ae.onSwipeUp=this.props.verticalSwipe==="natural"?this.onSwipeBackwards:this.onSwipeForward,ae.onSwipeDown=this.props.verticalSwipe==="natural"?this.onSwipeForward:this.onSwipeBackwards,ae.style=R(R({},ae.style),{},{height:this.state.itemSize}),ce.height=this.state.itemSize;return a.default.createElement("div",{"aria-label":this.props.ariaLabel,className:u.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},a.default.createElement("div",{className:u.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,oe,this.props.labels.leftArrow),a.default.createElement("div",{className:u.default.WRAPPER(!0,this.props.axis),style:ce},O?a.default.createElement(l.default,E({tagName:"ul",innerRef:this.setListRef},ae,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&ie,this.renderItems(),this.props.infiniteLoop&&Q):a.default.createElement("ul",{className:u.default.SLIDER(!0,this.state.swiping),ref:function($e){return j.setListRef($e)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&ie,this.renderItems(),this.props.infiniteLoop&&Q)),this.props.renderArrowNext(this.onClickNext,fe,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}]),te})(a.default.Component);return ql.default=re,Z(re,"displayName","Carousel"),Z(re,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:h.noop,onClickThumb:h.noop,onChange:h.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(k,te,ne){return a.default.createElement("button",{type:"button","aria-label":ne,className:u.default.ARROW_PREV(!te),onClick:k})},renderArrowNext:function(k,te,ne){return a.default.createElement("button",{type:"button","aria-label":ne,className:u.default.ARROW_NEXT(!te),onClick:k})},renderIndicator:function(k,te,ne,j){return a.default.createElement("li",{className:u.default.DOT(te),onClick:k,onKeyDown:k,value:ne,key:ne,role:"button",tabIndex:0,"aria-label":"".concat(j," ").concat(ne+1)})},renderItem:function(k){return k},renderThumbs:function(k){var te=a.Children.map(k,function(ne){var j=ne;if(ne.type!=="img"&&(j=a.Children.toArray(ne.props.children).find(function(O){return O.type==="img"})),!!j)return j});return te.filter(function(ne){return ne}).length===0?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):te},statusFormatter:h.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:y.slideSwipeAnimationHandler,stopSwipingHandler:y.slideStopSwipingHandler}),ql}var Q1={},K1;function B3(){return K1||(K1=1),Q1}var Z1;function U3(){return Z1||(Z1=1,(function(a){Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"Carousel",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(a,"CarouselProps",{enumerable:!0,get:function(){return u.CarouselProps}}),Object.defineProperty(a,"Thumbs",{enumerable:!0,get:function(){return o.default}});var l=c($3()),u=B3(),o=c(Zg());function c(f){return f&&f.__esModule?f:{default:f}}})(Yc)),Yc}var H3=U3();const q3=$5`
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
`,Y3=w.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(2, 6, 23, 0.08);
`,G3=w.div`
  position: relative;
  aspect-ratio: 1 / 1; /* Instagram square */
  background: #f1f5f9;
`,X3=w.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,V3=w.div`
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
`,Q3=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`,K3=w.div`
  display: flex;
  gap: 12px;
`,Ao=w.button`
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
`,Z3=w.div`
  padding: 0 12px 12px 12px;
`,J3=w.div`
  font-weight: 600;
  font-size: 14px;
  color: #0f172a;
`,F3=w.p`
  margin: 6px 0 4px;
  font-size: 14px;
  line-height: 1.5;
  color: #0f172a;
`,W3=w.time`
  display: block;
  font-size: 12px;
  color: #64748b;
`;function P3({data:a,likedDefault:l=!1,savedDefault:u=!1,likeCountDefault:o=0,onLikeChange:c,onBookmarkChange:f,onShare:h}){const{title:y="Infographic Title",description:g="",carouselImgSrc:m=[]}=a||{},[x,S]=b.useState(0),[E,D]=b.useState(l),[R,q]=b.useState(u),[$,V]=b.useState(o),M=E?"Unlike post":"Like post",_=R?"Remove bookmark":"Bookmark",X=()=>{const B=!E;D(B),V(Z=>B?Z+1:Math.max(0,Z-1)),c&&c(B)},L=()=>{const B=!R;q(B),f&&f(B)},A=b.useMemo(()=>({title:y,text:`${y}`,url:typeof window<"u"?window.location.href:""}),[y]),F=async()=>{try{navigator.share?await navigator.share(A):navigator.clipboard&&(await navigator.clipboard.writeText(A.url),alert("Link copied to clipboard")),h&&h(A)}catch(B){console.error("Share failed:",B)}};return!m||m.length===0?null:d.jsxs(Y3,{role:"article","aria-label":`${y} – Instagram multi-image post`,children:[d.jsx(q3,{}),d.jsxs(G3,{children:[d.jsx(H3.Carousel,{showThumbs:!1,showIndicators:!0,showStatus:!1,showArrows:!1,infiniteLoop:!1,autoPlay:!1,swipeable:!0,emulateTouch:!0,transitionTime:350,selectedItem:x,onChange:S,dynamicHeight:!1,children:m.map((B,Z)=>d.jsx("div",{children:d.jsx(X3,{src:B,alt:`${y} — ${Z+1}`})},Z))}),d.jsxs(V3,{children:[x+1,"/",m.length]})]}),d.jsxs(Q3,{children:[d.jsxs(K3,{children:[d.jsx(Ao,{onClick:X,"aria-label":M,title:M,children:E?d.jsx(kg,{size:22}):d.jsx(Lg,{size:22})}),d.jsx(Ao,{"aria-label":"Comment",title:"Comment",children:d.jsx($g,{size:20})}),d.jsx(Ao,{onClick:F,"aria-label":"Share",title:"Share",children:d.jsx(Hg,{size:20})})]}),d.jsx(Ao,{onClick:L,"aria-label":_,title:_,children:R?d.jsx(Gf,{size:20}):d.jsx(Xf,{size:20})})]}),d.jsxs(Z3,{children:[d.jsxs(J3,{children:[$," likes"]}),g&&d.jsxs(F3,{children:[d.jsx("strong",{children:y})," ",g]}),d.jsx(W3,{dateTime:new Date().toISOString(),children:"Just now"})]})]})}const I3=w.article`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(180deg, #dff6ff 0%, #bce0ff 100%);
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.12);
`,e4=w.div`
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
`,t4=w.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 18px 20px;
  color: #0f172a;
`,n4=w.div`
  flex: 1 1 auto;
`,a4=w.h3`
  margin: 0 0 6px;
  font-size: clamp(18px, 2.2vw, 22px);
  line-height: 1.2;
`,i4=w.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #334155;
`,l4=w.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,J1=w.button`
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
`;function r4({data:a,likedDefault:l=!1,savedDefault:u=!1,onLikeChange:o,onBookmarkChange:c}){const f=a?.videoClipSrc||a?.vedioClipSrc,{title:h,description:y,poster:g}=a||{},[m,x]=b.useState(l),[S,E]=b.useState(u),D=b.useRef(null),R=()=>{const $=!m;x($),o&&o($)},q=()=>{const $=!S;E($),c&&c($)};return b.useEffect(()=>{const $=D.current;if(!$)return;(async()=>{try{await $.play()}catch{}})()},[f]),f?d.jsxs(I3,{children:[d.jsx(e4,{children:d.jsx("video",{ref:D,src:f,controls:!0,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",poster:g,"aria-label":h||"Video clip"})}),d.jsxs(t4,{children:[d.jsxs(n4,{children:[d.jsx(a4,{children:h}),y&&d.jsx(i4,{children:y})]}),d.jsxs(l4,{children:[d.jsx(J1,{onClick:R,"aria-label":m?"Unlike video":"Like video",title:m?"Unlike":"Like",children:m?d.jsx(V5,{size:20}):d.jsx(Q5,{size:20})}),d.jsx(J1,{onClick:q,"aria-label":S?"Remove bookmark":"Bookmark video",title:S?"Remove bookmark":"Bookmark",children:S?d.jsx(Gf,{size:18}):d.jsx(Xf,{size:18})})]})]})]}):null}const o4=[{id:1,name:"Sense of Collective Identity",img:zo.CollectiveIdentity||"https://images.unsplash.com/photo-1506765515384-028b60a970df?w=400&h=400&fit=crop",hasNew:!0,slides:[f3.test,"https://images.unsplash.com/photo-1554189097-ffe88e998a2b?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602524811998-8b90d1d03663?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1505066836043-7d9b15a1595d?w=800&h=1400&fit=crop"]},{id:2,name:"Understanding Diversity",img:zo.Diversity||"https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1581091226825-c6a76aa2f4c1?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&h=1400&fit=crop"]},{id:3,name:"Nationalism in India",img:zo.Nationalism||"https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1524310393100-34cb9cd27f1e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1533199829561-72f88a8f0c56?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602451126518-9b36f1b23543?w=800&h=1400&fit=crop"]},{id:4,name:"Globalisation and the Indian Economy",img:zo.Globalisation||"https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1565372918675-bacb79cdd3a5?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&h=1400&fit=crop"]}];function u4({isOpen:a,activeIndex:l,setActiveIndex:u,total:o,onClose:c,duration:f=3e3}){const h=b.useRef(Date.now()),y=b.useRef(),g=b.useRef(0),m=b.useCallback(()=>{const S=Date.now()-h.current,E=Math.min(1,S/f);g.current=E,E>=1?l<o-1?u(D=>D+1):c():y.current=requestAnimationFrame(m)},[l,o,f,c,u]);return b.useEffect(()=>{if(a)return h.current=Date.now(),y.current=requestAnimationFrame(m),()=>cancelAnimationFrame(y.current)},[a,l,m]),{resetTimer:b.useCallback(()=>{h.current=Date.now()},[]),getProgressValue:()=>g.current}}const s4=w.div``,c4=w.div`
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
`,f4=w.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 16px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,d4=w.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border: 0;
  background: transparent;
  cursor: pointer;
`,p4=w.div`
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
`,h4=w.div`
  background: #fff;
  padding: 3px;
  border-radius: 999px;
`,m4=w.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 999px;
  user-drag: none;
  -webkit-user-drag: none;
`,g4=w.span`
  font-size: 12px;
  color: #1f2937;
  max-width: 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,v4=w.div`
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
`,y4=w.div`
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
`,b4=w.div`
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
`,x4=w.div`
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
`,S4=w.div`
  height: 3px;
  flex: 1;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    height: 2.5px;
  }
`,w4=w.div`
  height: 100%;
  background: linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.95) 100%);
  transition: width 100ms linear;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
`,E4=w.div`
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
`,C4=w.img`
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
`,T4=w.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
`,j4=w.div`
  font-weight: 700;
  font-size: clamp(13px, 2.2vw, 15px);
  line-height: 1.2;
  letter-spacing: -0.01em;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,R4=w.div`
  font-size: clamp(11px, 1.8vw, 13px);
  opacity: 0.85;
  line-height: 1.2;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,z4=w.button`
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
`,O4=w.img`
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
`,F1=w.div`
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
`;function M4(a){return Te({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1.47978 1.4797C1.30227 1.65721 1.28614 1.93498 1.43137 2.13072L1.47978 2.1868L4.1695 4.87652C2.88817 5.77616 1.93052 7.11985 1.53259 8.70952C1.46554 8.97738 1.62834 9.24892 1.89621 9.31598C2.16409 9.38298 2.4356 9.22025 2.50266 8.95232C2.85564 7.54225 3.72742 6.35956 4.88944 5.59626L6.09586 6.80278C5.62419 7.28378 5.33334 7.94278 5.33334 8.66965C5.33334 10.1424 6.52724 11.3363 8 11.3363C8.72694 11.3363 9.38587 11.0454 9.86694 10.5738L13.8131 14.5201C14.0084 14.7154 14.3249 14.7154 14.5202 14.5201C14.6977 14.3426 14.7139 14.0649 14.5686 13.8691L14.5202 13.813L10.4445 9.73692L10.4453 9.73592L9.64527 8.93732L7.732 7.02445L7.73334 7.02392L5.81252 5.10513L5.81334 5.10392L5.05782 4.35024L2.18689 1.4797C1.99163 1.28444 1.67504 1.28444 1.47978 1.4797ZM6.80274 7.51025L9.15947 9.86698C8.85947 10.1575 8.4506 10.3363 8 10.3363C7.07954 10.3363 6.33334 9.59012 6.33334 8.66965C6.33334 8.21905 6.51216 7.81018 6.80274 7.51025ZM8 3.66658C7.33314 3.66658 6.68607 3.7653 6.07406 3.94992L6.89874 4.77404C7.25594 4.70346 7.62427 4.66658 8 4.66658C10.6154 4.66658 12.8733 6.45342 13.4981 8.95538C13.565 9.22325 13.8364 9.38618 14.1043 9.31932C14.3723 9.25238 14.5352 8.98098 14.4683 8.71305C13.7329 5.7684 11.077 3.66658 8 3.66658ZM8.1298 6.0061L10.664 8.53992C10.5961 7.16865 9.49814 6.07168 8.1298 6.0061Z"},child:[]}]})(a)}function _4({currentItem:a,isOpen:l,slideIndex:u,setSlideIndex:o,onClose:c,duration:f=3e3}){const h=a?.slides?.length||0,{resetTimer:y,getProgressValue:g}=u4({isOpen:l,activeIndex:u,setActiveIndex:o,total:h,onClose:c,duration:f}),m=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[,x]=b.useState(0);b.useEffect(()=>{if(!l||m)return;let R;const q=()=>{x($=>$+1),R=requestAnimationFrame(q)};return R=requestAnimationFrame(q),()=>cancelAnimationFrame(R)},[l,m]);const S=b.useCallback(()=>{a&&(u<h-1?(o(R=>R+1),y()):c())},[a,u,h,y,c,o]),E=b.useCallback(()=>{a&&(u>0?(o(R=>R-1),y()):c())},[a,u,y,c,o]);b.useEffect(()=>{const R=q=>{l&&(q.key==="Escape"&&c(),q.key==="ArrowRight"&&S(),q.key==="ArrowLeft"&&E())};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[l,S,E,c]),b.useEffect(()=>(l?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[l]);const D=R=>R<u?1:R>u?0:g();return!l||!a?null:d.jsx(v4,{onClick:c,"aria-label":"Story overlay",children:d.jsx(y4,{onClick:R=>R.stopPropagation(),children:d.jsxs(b4,{children:[d.jsx(x4,{"aria-label":"Story progress",children:a.slides.map((R,q)=>d.jsx(S4,{"aria-label":`Progress track ${q+1}`,children:d.jsx(w4,{style:{width:`${D(q)*100}%`}})},q))}),d.jsxs(E4,{children:[d.jsx(C4,{src:a.img,alt:a.name}),d.jsxs(T4,{children:[d.jsx(j4,{children:a.name}),d.jsx(R4,{children:"Chapter highlight"})]}),d.jsx(z4,{"aria-label":"Close story",onClick:c,title:"Close",children:d.jsx(M4,{})})]}),a.slides.map((R,q)=>d.jsx(O4,{src:R,alt:`Slide ${q+1}`,$active:q===u,draggable:!1},q)),d.jsx(F1,{$side:"left",onClick:E,"aria-label":"Previous slide"}),d.jsx(F1,{$side:"right",onClick:S,"aria-label":"Next slide"})]})})})}function A4({items:a,duration:l=3e3,onOpen:u,onClose:o,className:c}){const f=b.useRef(null),h=b.useRef(!1),y=b.useRef(0),g=b.useRef(0),[m,x]=b.useState(a||[]),[S,E]=b.useState(null),[D,R]=b.useState(0),q=m.find(A=>A.id===S)||null,$=!!S,V=A=>{R(0),E(A),x(F=>F.map(B=>B.id===A?{...B,hasNew:!1}:B)),u&&u(A)},M=()=>{E(null),o&&o()},_=A=>{h.current=!0,y.current=A.clientX,g.current=f.current?.scrollLeft||0,A.target.setPointerCapture?.(A.pointerId)},X=A=>{if(!h.current||!f.current)return;const F=A.clientX-y.current;f.current.scrollLeft=g.current-F},L=()=>{h.current=!1};return d.jsxs(s4,{className:c,children:[d.jsx(c4,{children:d.jsx(f4,{ref:f,onPointerDown:_,onPointerMove:X,onPointerUp:L,onPointerLeave:L,"aria-label":"Stories scroller",children:m.map(A=>d.jsxs(d4,{onClick:()=>V(A.id),"aria-label":`Open story ${A.name}`,title:A.name,children:[d.jsx(p4,{$hasNew:A.hasNew,children:d.jsx(h4,{children:d.jsx(m4,{src:A.img,alt:A.name,draggable:!1})})}),d.jsx(g4,{children:A.name})]},A.id))})}),d.jsx(_4,{currentItem:q,isOpen:$,slideIndex:D,setSlideIndex:R,onClose:M,duration:l})]})}const D4=[{id:1,type:"infografic",title:"Sense of Collective Identity - Overview",description:"An overview of how shared history, culture, and values shape collective identity in society.",imgSrc:On.Slide1},{id:2,type:"carousel",title:"Understanding Collective Identity",description:"Exploring the roots and importance of collective identity in social cohesion.",carouselImgSrc:[On.Slide2,On.Slide3,On.Slide4,On.Slide5,On.Slide6]},{id:3,type:"carousel",title:"Symbols and Shared Culture",description:"How flags, festivals, and traditions represent unity and belonging.",carouselImgSrc:[On.Slide7,On.Slide8,On.Slide9]},{id:5,type:"vedioClip",title:"Collective Identity in Action",description:"A short video summarizing real-world examples of collective identity shaping societies.",vedioClipSrc:c3.videoClip1}],N4=w.div`
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
`;function k4(){return b.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]),d.jsxs(d.Fragment,{children:[d.jsx(A4,{items:o4,duration:3e3,onOpen:a=>console.log("opened:",a),onClose:()=>console.log("closed")}),d.jsx(N4,{children:d.jsx("div",{className:"d-flex gap-3 flex-column align-items-center mt-3",children:D4.map(a=>d.jsx("div",{style:{width:"100%"},children:a.type==="infografic"?d.jsx(M3,{title:a.title,description:a.description,imgSrc:a.imgSrc,badge:a.badge}):a.type==="carousel"?d.jsx(P3,{data:a}):a.type==="vedioClip"?d.jsx(r4,{data:a}):null},a.id))})})]})}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$4=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,u,o)=>o?o.toUpperCase():u.toLowerCase()),W1=a=>{const l=$4(a);return l.charAt(0).toUpperCase()+l.slice(1)},Fg=(...a)=>a.filter((l,u,o)=>!!l&&l.trim()!==""&&o.indexOf(l)===u).join(" ").trim(),B4=a=>{for(const l in a)if(l.startsWith("aria-")||l==="role"||l==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var U4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=b.forwardRef(({color:a="currentColor",size:l=24,strokeWidth:u=2,absoluteStrokeWidth:o,className:c="",children:f,iconNode:h,...y},g)=>b.createElement("svg",{ref:g,...U4,width:l,height:l,stroke:a,strokeWidth:o?Number(u)*24/Number(l):u,className:Fg("lucide",c),...!f&&!B4(y)&&{"aria-hidden":"true"},...y},[...h.map(([m,x])=>b.createElement(m,x)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=(a,l)=>{const u=b.forwardRef(({className:o,...c},f)=>b.createElement(H4,{ref:f,iconNode:l,className:Fg(`lucide-${L4(W1(a))}`,`lucide-${a}`,o),...c}));return u.displayName=W1(a),u};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Y4=pt("arrow-right",q4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],X4=pt("atom",G4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],$a=pt("book-open",V4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],K4=pt("bookmark",Q4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],J4=pt("calculator",Z4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],W4=pt("check",F4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],P1=pt("circle-check-big",P4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],e6=pt("code",I4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],I1=pt("flask-conical",t6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],em=pt("graduation-cap",n6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],tm=pt("globe",a6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],l6=pt("grid-3x3",i6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],o6=pt("languages",r6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Do=pt("lock",u6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],c6=pt("sparkles",s6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],d6=pt("x",f6),p6=Jt`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(30px, -30px) rotate(5deg); }
  50% { transform: translate(-20px, -50px) rotate(-5deg); }
  75% { transform: translate(40px, -20px) rotate(3deg); }
`,h6=Jt`
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.4; }
`,m6=Jt`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`,g6=w.div`
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
`,v6=w.span`
  &::after {
    content: "|";
    animation: ${m6} 1s infinite;
    margin-left: 4px;
  }
`,y6=w.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border-radius: 1.5rem;

  @media (min-width: 768px) {
    border-radius: 1rem;
  }
`,b6=w(y6)`
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.2);
  }
`,x6=w.div`
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
`,S6=w.h1`
  font-size: clamp(1.5rem, 6vw, 3rem);
  font-weight: 900;
  line-height: 1.2;
  padding: 0 1rem;
`,w6=w.span`
  background: green;
  -webkit-background-clip: text;
  color: transparent;
  font-style: italic;
  font-size: 30px;
`,Kc=w.div`
  position: absolute;
  border-radius: 50%;
  background: ${({$color:a})=>a};
  width: ${({$size:a})=>a}px;
  height: ${({$size:a})=>a}px;
  top: ${({$top:a})=>a};
  left: ${({$left:a})=>a};
  bottom: ${({$bottom:a})=>a};
  right: ${({$right:a})=>a};
  animation: ${h6} ${({$duration:a})=>a}s infinite ease-in-out;
  animation-delay: ${({$delay:a})=>a}s;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`,E6=w.div`
  position: absolute;
  opacity: 0.15;
  animation: ${p6} ${({$duration:a})=>a}s infinite ease-in-out;
  animation-delay: ${({$delay:a})=>a}s;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`,C6=w.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 100%;
`,T6=w.div`
  width: 100%;
  max-width: 600px;

  @media (min-width: 768px) {
    max-width: 800px;
  }
`,nm=w.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
  align-items: center;
`,am=w.div`
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
`,im=w.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e293b;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`,j6=w.p`
  font-size: 0.8rem;
  color: #64748b;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`,R6=w.select`
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
`,lm=w.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,z6=w.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,O6=w.button`
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
`,M6=w.div`
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
`,_6=w.div`
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
`,A6=w.div`
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  width: 100%;
  font-size: 0.875rem;
  opacity: 0.95;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,rm=w.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`,om=w.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;function D6(){const a=_f(),[l,u]=b.useState(""),[o,c]=b.useState(""),[f,h]=b.useState(""),[y,g]=b.useState(0),[m,x]=b.useState(!1),[S,E]=b.useState(0),D=["Achieve Excellence","Master Every Subject","Unlock Your Potential"];b.useEffect(()=>{const X=m?40:80,L=2e3,A=setTimeout(()=>{const F=D[y];if(!m&&S===F.length){setTimeout(()=>x(!0),L);return}if(m&&S===0){x(!1),g(B=>(B+1)%D.length);return}E(B=>B+(m?-1:1)),h(F.substring(0,S+(m?-1:1)))},X);return()=>clearTimeout(A)});const R={"Grade 9":{subjects:{English:"Ms. Priya Sharma",Mathematics:"Mr. Rajesh Kumar",Science:"Ms. Anjali Mehta","Social Studies":"Siddharth Sir",Hindi:"Ms. Kavita Reddy","Computer Science":"Mr. Arvind Nair"}},"Grade 10":{subjects:{English:"Ms. Sunita Verma",Mathematics:"Mr. Rohan Patel",Science:"Ms. Anjali Mehta","Social Studies":"Siddharth Sir",Hindi:"Ms. Kavita Reddy","Computer Science":"Mr. Arvind Nair"}},"Grade 11":{subjects:{English:"Ms. Priya Sharma",Physics:"Mr. Nitin Agarwal",Chemistry:"Ms. Sneha Kapoor",Biology:"Siddharth Sir",Mathematics:"Mr. Deepak Rao","Computer Science":"Mr. Arvind Nair"}},"Grade 12":{subjects:{English:"Ms. Sunita Verma",Physics:"Mr. Nitin Agarwal",Chemistry:"Ms. Sneha Kapoor",Biology:"Siddharth Sir",Mathematics:"Mr. Deepak Rao","Computer Science":"Mr. Arvind Nair"}}},q={English:$a,Mathematics:J4,Science:I1,Physics:X4,Chemistry:I1,Biology:tm,"Social Studies":tm,Hindi:o6,"Computer Science":e6},$=()=>{l&&o&&(a("/instalearn/teacher"),console.log(`Selected: ${l} - ${o}`))},V=X=>{c(X)},M=(X,L)=>{(X.key==="Enter"||X.key===" ")&&(X.preventDefault(),V(L))},_=l?Object.keys(R[l].subjects):[];return d.jsxs(g6,{children:[d.jsx(Kc,{$color:"rgba(255, 255, 255, 0.15)",$size:500,$top:"-10%",$right:"-5%",$duration:8,$delay:0}),d.jsx(Kc,{$color:"rgba(255, 255, 255, 0.1)",$size:600,$bottom:"-15%",$left:"-5%",$duration:10,$delay:3}),d.jsx(Kc,{$color:"rgba(255, 255, 255, 0.12)",$size:400,$top:"40%",$left:"50%",$duration:12,$delay:6}),[...Array(8)].map((X,L)=>d.jsx(E6,{$duration:8+L*2,$delay:L*.8,style:{left:`${10+L*12}%`,top:`${15+L*11}%`},children:L%3===0?d.jsx($a,{size:32,color:"rgba(255,255,255,0.4)"}):L%3===1?d.jsx(em,{size:32,color:"rgba(255,255,255,0.4)"}):d.jsx(c6,{size:32,color:"rgba(255,255,255,0.4)"})},L)),d.jsx(C6,{children:d.jsxs(T6,{children:[d.jsx(x6,{children:d.jsx(S6,{children:d.jsx(w6,{children:d.jsx(v6,{children:f})})})}),d.jsxs(b6,{style:{padding:"1.5rem",display:"flex",flexDirection:"column",gap:"2rem"},children:[d.jsxs(lm,{children:[d.jsxs(nm,{children:[d.jsx(am,{$gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",$shadow:"0 8px 24px rgba(102,126,234,0.3)",children:d.jsx(em,{size:20,color:"white"})}),d.jsx("div",{children:d.jsx(im,{children:"Select Your Grade"})})]}),d.jsxs("div",{style:{position:"relative"},children:[d.jsxs(R6,{value:l,onChange:X=>{u(X.target.value),c("")},children:[d.jsx("option",{value:"",disabled:!0,children:"Select Grade"}),Object.keys(R).map(X=>d.jsx("option",{value:X,children:X},X))]}),l&&d.jsx(P1,{size:20,style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",color:"#10b981"}})]})]}),d.jsxs(lm,{children:[d.jsxs(nm,{children:[d.jsx(am,{$gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",$shadow:"0 8px 24px rgba(240,147,251,0.3)",children:d.jsx($a,{size:20,color:"white"})}),d.jsxs("div",{children:[d.jsx(im,{children:"Choose Your Subject"}),d.jsx(j6,{children:"Click a subject to reveal the teacher name."})]})]}),_.length===0?d.jsxs(_6,{children:[d.jsx($a,{size:40,color:"#94a3b8"}),d.jsx("p",{children:"Please select a grade to view available subjects"})]}):d.jsx(z6,{children:_.map(X=>{const L=R[l].subjects[X],A=o===X,F=q[X]||$a;return d.jsxs(M6,{role:"button",tabIndex:0,"aria-pressed":A,$selected:A,onClick:()=>V(X),onKeyDown:B=>M(B,X),children:[d.jsxs(rm,{children:[d.jsx("span",{children:X}),d.jsx(om,{children:d.jsx(F,{size:18})})]}),A&&d.jsxs(rm,{children:[d.jsx(A6,{children:L}),d.jsx(om,{children:d.jsx(P1,{className:"mt-3",size:18})})]}),d.jsxs(O6,{$visible:A,onClick:$,children:["Continue to Profile ",d.jsx(Y4,{size:18})]})]},X)})})]})]})]})})]})}function um(a){return Te({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"},child:[]}]})(a)}function No(a){return Te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(a)}function Pl(a){return Te({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(a)}function N6(a){return Te({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(a)}function sm(a){return Te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(a)}function cm(a){return Te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(a)}function fm(a){return Te({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(a)}function k6(a){return Te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(a)}function dm(a){return Te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(a)}function pm(a){return Te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"},child:[]}]})(a)}function hm(a){return Te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(a)}function ko(a){return Te({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(a)}function Lo(a){return Te({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(a)}function L6(a){return Te({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(a)}const $6=Jt`
  from { opacity: 0; transform: translateY(32px); }
  to { opacity: 1; transform: translateY(0); }
`,Wg=Jt`
  from { opacity: 0; }
  to { opacity: 1; }
`,B6=Jt`
  from { opacity: 0; transform: translate(-50%, -48%) scale(0.95); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
`,Pg=Jt`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`,le={bgSecondary:"#FFFFFF",card:"#FFFFFF",cardHover:"#F8FAFC",text:"#0F172A",subtext:"#64748B",primary:"#0EA5E9",accent:"#06B6D4",accentGreen:"#10B981",border:"#E2E8F0",borderLight:"#CBD5E1",shadow:"0 20px 50px rgba(0, 0, 0, 0.08)",overlay:"rgba(15, 23, 42, 0.5)"},U6=w.div`
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
    animation: ${Pg} 20s ease-in-out infinite;
    pointer-events: none;
  }
`,H6=w.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${$6} 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  z-index: 1;
`,Qf=w.div`
  background: ${le.card};
  border: 1px solid ${le.border};
  border-radius: 24px;
  box-shadow: ${le.shadow};
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,mm=w.div`
  position: fixed;
  inset: 0;
  background: ${le.overlay};
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${Wg} 0.2s ease-out;
`,gm=w.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${le.bgSecondary};
  border-radius: 24px;
  padding: 32px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.2);
  animation: ${B6} 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1001;

  @media (max-width: 640px) {
    padding: 24px;
  }
`,vm=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,ym=w.h2`
  font-size: 24px;
  font-weight: 800;
  color: ${le.text};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
`,bm=w.button`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid ${le.border};
  background: ${le.card};
  color: ${le.subtext};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${le.primary};
    color: ${le.primary};
    transform: rotate(90deg);
  }
`,ca=w.div`
  margin-bottom: 20px;
`,fa=w.label`
  display: block;
  font-weight: 600;
  color: ${le.text};
  margin-bottom: 8px;
  font-size: 14px;
`,Ri=w.input`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid ${le.border};
  border-radius: 12px;
  font-size: 16px;
  color: ${le.text};
  background: ${le.bgSecondary};
  transition: all 0.2s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${le.primary};
    box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1);
  }
`,xm=w.select`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid ${le.border};
  border-radius: 12px;
  font-size: 16px;
  color: ${le.text};
  background: ${le.bgSecondary};
  transition: all 0.2s ease;
  cursor: pointer;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${le.primary};
    box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1);
  }
`,Sm=w.div`
  display: flex;
  gap: 12px;
  margin-top: 28px;
`,$o=w.button`
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
    background: linear-gradient(135deg, ${le.primary}, ${le.accent});
    color: white;
    box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(14, 165, 233, 0.4);
    }
  `:`
    background: ${le.card};
    color: ${le.text};
    border: 2px solid ${le.border};

    &:hover {
      border-color: ${le.borderLight};
    }
  `}
`,q6=w(Qf)`
  padding: 40px;
  margin-bottom: 24px;
  background: linear-gradient(135deg, ${le.bgSecondary} 0%, #F8FAFC 100%);
  border: 1px solid ${le.borderLight};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${le.primary}, ${le.accentGreen});
  }

  @media (max-width: 768px) {
    padding: 28px 20px;
  }
`,Y6=w.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: 28px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 20px;
  }
`,G6=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`,X6=w.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${le.primary}, ${le.accentGreen});
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
    background: linear-gradient(135deg, ${le.primary}, ${le.accentGreen});
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
`,V6=w.div`
  display: grid;
  gap: 24px;
`,Q6=w.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,K6=w.div`
  display: grid;
  gap: 8px;
`,Z6=w.h1`
  font-size: 32px;
  font-weight: 800;
  color: ${le.text};
  margin: 0;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`,J6=w.p`
  color: ${le.subtext};
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`,F6=w.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`,wm=w.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  border: 2px solid ${le.border};
  background: ${le.bgSecondary};
  color: ${le.text};
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
    background: linear-gradient(135deg, ${le.primary}, ${le.accent});
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: ${le.primary};
    color: ${le.primary};
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
`,W6=w.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Zc=w.div`
  background: linear-gradient(135deg, #FFFFFF, #F8FAFC);
  border: 2px solid ${le.border};
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    border-color: ${le.borderLight};
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
  }
`,Jc=w.div`
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, ${le.primary}, ${le.accentGreen});
  color: #fff;
  font-size: 24px;
  box-shadow: 0 8px 16px rgba(14, 165, 233, 0.25);
`,Fc=w.div`
  display: grid;
  gap: 4px;
  flex: 1;
`,Wc=w.span`
  font-weight: 800;
  font-size: 28px;
  color: ${le.text};
  line-height: 1;
`,Pc=w.span`
  font-size: 13px;
  color: ${le.subtext};
  font-weight: 500;
`,Ic=w.div`
  color: #F59E0B;
  font-size: 20px;
`,P6=w.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 24px 0;
`,Em=w.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 18px;
  border-radius: 16px;
  border: 2px solid ${a=>a.active?le.primary:le.border};
  background: ${a=>a.active?`linear-gradient(135deg, ${le.primary}, ${le.accent})`:le.card};
  color: ${a=>a.active?"#fff":le.subtext};
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
    border-color: ${le.primary};
    color: ${a=>a.active?"#fff":le.text};
  }
`,Cm=w(Qf)`
  padding: 24px;
  animation: ${Wg} 0.5s ease-out;
`,Ig=w.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  align-items: center;
  padding: 20px;
  border-radius: 16px;
  border: 2px solid ${le.border};
  background: ${le.bgSecondary};
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
    background: linear-gradient(180deg, ${le.primary}, ${le.accentGreen});
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover { 
    background: ${le.cardHover};
    border-color: ${le.primary};
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
`,I6=w.div`
  width: 64px;
  height: 64px;
  border-radius: 14px;
  background: linear-gradient(135deg, ${le.primary}, ${le.accentGreen});
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
`,eS=w.div`
  display: grid;
  gap: 10px;
`,tS=w.h3`
  margin: 0;
  color: ${le.text};
  font-size: 18px;
  font-weight: 700;
`,nS=w.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  font-size: 13px;
  color: ${le.subtext};
`,ef=w.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
`,aS=w.div`
  width: 100%;
  max-width: 200px;
  height: 8px;
  background: #E2E8F0;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid ${le.border};
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
`,iS=w.div`
  height: 100%;
  width: ${a=>Math.min(Math.max(a.value,0),100)}%;
  background: linear-gradient(90deg, ${le.primary}, ${le.accentGreen});
  border-radius: 999px;
  transition: width 0.5s ease;
  box-shadow: 0 0 10px rgba(14, 165, 233, 0.4);
`,lS=w(N6)`
  color: ${le.subtext};
  font-size: 20px;
  transition: all 0.3s ease;

  ${Ig}:hover & {
    color: ${le.primary};
    transform: translateX(4px);
  }

  @media (max-width: 640px) {
    display: none;
  }
`,Tm=w.div`
  text-align: center;
  padding: 64px 20px;
  color: ${le.subtext};
`,jm=w.div`
  font-size: 72px;
  margin-bottom: 16px;
  opacity: 0.3;
  animation: ${Pg} 3s ease-in-out infinite;
`,Rm=w.h3`
  color: ${le.text};
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 8px 0;
`,zm=w.p`
  margin: 0;
  font-size: 15px;
`,rS=w.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
`,oS=w(Qf)`
  padding: 24px;
  display: grid;
  gap: 16px;
  background: ${le.bgSecondary};
  border: 2px solid ${le.border};
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
    background: linear-gradient(90deg, ${le.primary}, ${le.accentGreen});
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: ${le.primary};
    box-shadow: 0 20px 40px rgba(14, 165, 233, 0.2);

    &::before {
      opacity: 1;
    }
  }
`,uS=w.div`
  font-weight: 700;
  font-size: 16px;
  color: ${le.text};
  display: inline-flex;
  align-items: center;
  gap: 10px;

  svg {
    color: ${le.primary};
  }
`,sS=w.div`
  font-size: 13px;
  color: ${le.subtext};
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
`,cS=w.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`,Om=w.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 16px;
  border-radius: 12px;
  border: 2px solid ${le.border};
  background: ${le.card};
  color: ${le.text};
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex: 1;

  &:hover { 
    border-color: ${le.primary}; 
    color: ${le.primary}; 
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(14, 165, 233, 0.15);
  }
`;function fS(){const[a,l]=b.useState("history"),[u,o]=b.useState(!1),[c,f]=b.useState(!1),[h,y]=b.useState({name:"Priya Sharma",email:"priya.sharma@example.com",avatar:"PS",booksRead:24,hoursSpent:156,favoriteTeacher:"Ms. Sarah"}),[g,m]=b.useState({...h}),[x,S]=b.useState("light"),[E,D]=b.useState("all");b.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]);const R=[{id:1,title:"Sense of Collective Identity",teacher:"Mr. Arjun Mehta",time:"2 hours ago",progress:75,icon:d.jsx(Pl,{})},{id:2,title:"Understanding Diversity",teacher:"Ms. Nisha Rao",time:"Yesterday",progress:45,icon:d.jsx(No,{})},{id:3,title:"Nationalism in India",teacher:"Dr. Kavita Iyer",time:"2 days ago",progress:90,icon:d.jsx(dm,{})},{id:4,title:"Democracy & Rights",teacher:"Prof. R. Menon",time:"1 week ago",progress:100,icon:d.jsx(pm,{})}],q=[{id:"f1",title:"Globalisation & Indian Economy",by:"Siddharth Sir",reads:12},{id:"f2",title:"Federalism Basics",by:"Anita Ma'am",reads:9},{id:"f3",title:"Judiciary: Structure",by:"R. Sharma",reads:14},{id:"f4",title:"Gender, Religion & Caste",by:"S. Verma",reads:7}],$=()=>{y({...g}),o(!1)},V=(_,X)=>{m({...g,[_]:X})},M=(_,X)=>{(_.key==="Enter"||_.key===" ")&&_.preventDefault()};return d.jsxs(U6,{$theme:x,children:[d.jsxs(H6,{children:[d.jsx(q6,{children:d.jsxs(Y6,{children:[d.jsx(G6,{children:d.jsx(X6,{"aria-label":"User avatar",children:d.jsx(L6,{size:32})})}),d.jsxs(V6,{children:[d.jsxs(Q6,{children:[d.jsxs(K6,{children:[d.jsx(Z6,{children:h.name}),d.jsx(J6,{children:h.email})]}),d.jsxs(F6,{children:[d.jsxs(wm,{type:"button","aria-label":"Edit profile",onClick:()=>{m(h),o(!0)},children:[d.jsx(fm,{})," ",d.jsx("span",{children:"Edit"})]}),d.jsxs(wm,{type:"button","aria-label":"Settings",onClick:()=>f(!0),children:[d.jsx(cm,{})," ",d.jsx("span",{children:"Settings"})]})]})]}),d.jsxs(W6,{children:[d.jsxs(Zc,{children:[d.jsx(Jc,{"aria-hidden":"true",children:d.jsx(No,{})}),d.jsxs(Fc,{children:[d.jsx(Wc,{children:h.booksRead}),d.jsx(Pc,{children:"Books Read"})]}),d.jsx(Ic,{title:"Lifetime reads",children:d.jsx(pm,{})})]}),d.jsxs(Zc,{children:[d.jsx(Jc,{"aria-hidden":"true",children:d.jsx(sm,{})}),d.jsxs(Fc,{children:[d.jsx(Wc,{children:h.hoursSpent}),d.jsx(Pc,{children:"Study Hours"})]}),d.jsx(Ic,{title:"Consistent!",children:d.jsx(ko,{})})]}),d.jsxs(Zc,{children:[d.jsx(Jc,{"aria-hidden":"true",children:d.jsx(Pl,{})}),d.jsxs(Fc,{children:[d.jsx(Wc,{children:h.favoriteTeacher}),d.jsx(Pc,{children:"Favourite Teacher"})]}),d.jsx(Ic,{children:d.jsx(k6,{})})]})]})]})]})}),d.jsxs(P6,{children:[d.jsxs(Em,{active:a==="history",onClick:()=>l("history"),"aria-pressed":a==="history",children:[d.jsx(dm,{})," Reading History"]}),d.jsxs(Em,{active:a==="favorites",onClick:()=>l("favorites"),"aria-pressed":a==="favorites",children:[d.jsx(ko,{})," Favorites"]})]}),a==="history"?d.jsx(Cm,{children:R.length>0?R.map(_=>d.jsxs(Ig,{role:"button",tabIndex:0,onKeyDown:X=>M(X),onClick:()=>{},"aria-label":`Open ${_.title}`,children:[d.jsx(I6,{"aria-hidden":"true",children:_.icon}),d.jsxs(eS,{children:[d.jsx(tS,{children:_.title}),d.jsxs(nS,{children:[d.jsxs(ef,{children:[d.jsx(Pl,{})," ",_.teacher]}),d.jsxs(ef,{children:[d.jsx(sm,{})," ",_.time]}),d.jsxs(ef,{children:[d.jsx(No,{})," ",_.progress,"% complete"]})]}),d.jsx(aS,{"aria-hidden":"true",children:d.jsx(iS,{value:_.progress})})]}),d.jsx(lS,{})]},_.id)):d.jsxs(Tm,{children:[d.jsx(jm,{children:d.jsx(um,{})}),d.jsx(Rm,{children:"No history yet"}),d.jsx(zm,{children:"Start reading to see your progress here."})]})}):d.jsx(Cm,{children:q.length>0?d.jsx(rS,{children:q.map(_=>d.jsxs(oS,{children:[d.jsxs(uS,{children:[d.jsx(um,{})," ",_.title]}),d.jsxs(sS,{children:[d.jsxs("span",{children:["By ",_.by]}),d.jsx("span",{children:"•"}),d.jsxs("span",{children:[_.reads," reads"]})]}),d.jsxs(cS,{children:[d.jsxs(Om,{type:"button",children:[d.jsx(No,{})," Open"]}),d.jsxs(Om,{type:"button",children:[d.jsx(ko,{})," Unfavourite"]})]})]},_.id))}):d.jsxs(Tm,{children:[d.jsx(jm,{children:d.jsx(ko,{})}),d.jsx(Rm,{children:"No favorites yet"}),d.jsx(zm,{children:"Tap the star on a lesson to save it here."})]})})]}),u&&d.jsxs(d.Fragment,{children:[d.jsx(mm,{onClick:()=>o(!1)}),d.jsxs(gm,{role:"dialog","aria-modal":"true","aria-labelledby":"editProfileTitle",children:[d.jsxs(vm,{children:[d.jsxs(ym,{id:"editProfileTitle",children:[d.jsx(fm,{})," Edit Profile"]}),d.jsx(bm,{type:"button",onClick:()=>o(!1),"aria-label":"Close edit profile",children:d.jsx(Lo,{})})]}),d.jsxs(ca,{children:[d.jsx(fa,{htmlFor:"name",children:"Name"}),d.jsx(Ri,{id:"name",value:g.name,onChange:_=>V("name",_.target.value)})]}),d.jsxs(ca,{children:[d.jsx(fa,{htmlFor:"email",children:"Email"}),d.jsx(Ri,{id:"email",type:"email",value:g.email,onChange:_=>V("email",_.target.value)})]}),d.jsxs(ca,{children:[d.jsx(fa,{htmlFor:"avatar",children:"Avatar Initials"}),d.jsx(Ri,{id:"avatar",value:g.avatar,onChange:_=>V("avatar",_.target.value)})]}),d.jsxs(ca,{children:[d.jsx(fa,{htmlFor:"booksRead",children:"Books Read"}),d.jsx(Ri,{id:"booksRead",type:"number",min:0,value:g.booksRead,onChange:_=>V("booksRead",Number(_.target.value))})]}),d.jsxs(ca,{children:[d.jsx(fa,{htmlFor:"hoursSpent",children:"Study Hours"}),d.jsx(Ri,{id:"hoursSpent",type:"number",min:0,value:g.hoursSpent,onChange:_=>V("hoursSpent",Number(_.target.value))})]}),d.jsxs(ca,{children:[d.jsx(fa,{htmlFor:"favTeacher",children:"Favourite Teacher"}),d.jsx(Ri,{id:"favTeacher",value:g.favoriteTeacher,onChange:_=>V("favoriteTeacher",_.target.value)})]}),d.jsxs(Sm,{children:[d.jsxs($o,{type:"button",onClick:()=>o(!1),children:[d.jsx(Lo,{})," Cancel"]}),d.jsxs($o,{type:"button",primary:!0,onClick:$,children:[d.jsx(hm,{})," Save"]})]})]})]}),c&&d.jsxs(d.Fragment,{children:[d.jsx(mm,{onClick:()=>f(!1)}),d.jsxs(gm,{role:"dialog","aria-modal":"true","aria-labelledby":"settingsTitle",children:[d.jsxs(vm,{children:[d.jsxs(ym,{id:"settingsTitle",children:[d.jsx(cm,{})," Settings"]}),d.jsx(bm,{type:"button",onClick:()=>f(!1),"aria-label":"Close settings",children:d.jsx(Lo,{})})]}),d.jsxs(ca,{children:[d.jsx(fa,{htmlFor:"theme",children:"Theme"}),d.jsxs(xm,{id:"theme",value:x,onChange:_=>S(_.target.value),children:[d.jsx("option",{value:"light",children:"Light"}),d.jsx("option",{value:"dark",children:"Dark"})]})]}),d.jsxs(ca,{children:[d.jsx(fa,{htmlFor:"notifications",children:"Notifications"}),d.jsxs(xm,{id:"notifications",value:E,onChange:_=>D(_.target.value),children:[d.jsx("option",{value:"all",children:"All activity"}),d.jsx("option",{value:"mentions",children:"Mentions only"}),d.jsx("option",{value:"none",children:"None"})]})]}),d.jsxs(Sm,{children:[d.jsxs($o,{type:"button",onClick:()=>f(!1),children:[d.jsx(Lo,{})," Close"]}),d.jsxs($o,{type:"button",primary:!0,onClick:()=>f(!1),children:[d.jsx(hm,{})," Apply"]})]})]})]})]})}const dS=Jt`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
`,pS=Jt`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,hS=Jt`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,mS=Jt`
  0% {
    width: 0%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 0%;
  }
`,gS=w.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`,vS=w.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,tf=w.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: ${dS} 20s infinite ease-in-out;

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
`,yS=w.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  animation: ${pS} 0.8s ease-out;

  @media (max-width: 600px) {
    margin: 20px;
    padding: 20px 20px;
  }
`,bS=w.div`
  margin-bottom: 0px;
  position: relative;
`,xS=w.div`
  font-size: 70px;
  animation: ${hS} 2s infinite;
`,SS=w.h1`
  font-size: 2.5em;
  color: #2d3748;
  margin-bottom: 10px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 2em;
  }
`,wS=w.p`
  font-size: 1.2em;
  color: #718096;
  margin-bottom: 25px;
  line-height: 1.6;
`,ES=w.div`
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`,CS=w.div`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  animation: ${mS} 3s ease-in-out infinite;
`,TS=w.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,nf=w.div`
  padding: 20px;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
  }
`,af=w.div`
  font-size:30px;
  margin-bottom: 10px;
`,lf=w.div`
  font-size: 14px;
  color: #4a5568;
  font-weight: 600;
`,jS=w.button`
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
`;function Mm(){const[a,l]=b.useState(!1),u=()=>{l(!0),setTimeout(()=>{l(!1)},2e3)};return d.jsxs(gS,{children:[d.jsxs(vS,{children:[d.jsx(tf,{}),d.jsx(tf,{}),d.jsx(tf,{})]}),d.jsxs(yS,{children:[d.jsx(bS,{children:d.jsx(xS,{children:"🚧"})}),d.jsx(SS,{children:"Building Something Amazing"}),d.jsx(wS,{children:"We're working hard to bring you an incredible new feature. Stay tuned!"}),d.jsx(ES,{children:d.jsx(CS,{})}),d.jsxs(TS,{children:[d.jsxs(nf,{children:[d.jsx(af,{children:"⚡"}),d.jsx(lf,{children:"Lightning Fast"})]}),d.jsxs(nf,{children:[d.jsx(af,{children:"🎨"}),d.jsx(lf,{children:"Beautiful Design"})]}),d.jsxs(nf,{children:[d.jsx(af,{children:"🔒"}),d.jsx(lf,{children:"Secure & Private"})]})]}),d.jsx(jS,{onClick:u,$notified:a,children:a?"✓ You'll be notified!":"Notify Me When Ready"})]})]})}var RS=Vg();const it=nr(RS);function Tf(){return Tf=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var o in u)({}).hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},Tf.apply(null,arguments)}function ev(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)!==-1)continue;u[o]=a[o]}return u}function _m(a){return"default"+a.charAt(0).toUpperCase()+a.substr(1)}function zS(a){var l=OS(a,"string");return typeof l=="symbol"?l:String(l)}function OS(a,l){if(typeof a!="object"||a===null)return a;var u=a[Symbol.toPrimitive];if(u!==void 0){var o=u.call(a,l);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}function MS(a,l,u){var o=b.useRef(a!==void 0),c=b.useState(l),f=c[0],h=c[1],y=a!==void 0,g=o.current;return o.current=y,!y&&g&&f!==l&&h(l),[y?a:f,b.useCallback(function(m){for(var x=arguments.length,S=new Array(x>1?x-1:0),E=1;E<x;E++)S[E-1]=arguments[E];u&&u.apply(void 0,[m].concat(S)),h(m)},[u])]}function tv(a,l){return Object.keys(l).reduce(function(u,o){var c,f=u,h=f[_m(o)],y=f[o],g=ev(f,[_m(o),o].map(zS)),m=l[o],x=MS(y,h,a[m]),S=x[0],E=x[1];return Tf({},g,(c={},c[o]=S,c[m]=E,c))},a)}function jf(a,l){return jf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,o){return u.__proto__=o,u},jf(a,l)}function _S(a,l){a.prototype=Object.create(l.prototype),a.prototype.constructor=a,jf(a,l)}const AS=["xxl","xl","lg","md","sm","xs"],DS="xs",nv=b.createContext({prefixes:{},breakpoints:AS,minBreakpoint:DS}),{Consumer:F7,Provider:W7}=nv;function Et(a,l){const{prefixes:u}=b.useContext(nv);return a||u[l]||l}function Kf(a){return a&&a.ownerDocument||document}function NS(a){var l=Kf(a);return l&&l.defaultView||window}function kS(a,l){return NS(a).getComputedStyle(a,l)}var LS=/([A-Z])/g;function $S(a){return a.replace(LS,"-$1").toLowerCase()}var BS=/^ms-/;function Bo(a){return $S(a).replace(BS,"-ms-")}var US=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function HS(a){return!!(a&&US.test(a))}function Nn(a,l){var u="",o="";if(typeof l=="string")return a.style.getPropertyValue(Bo(l))||kS(a).getPropertyValue(Bo(l));Object.keys(l).forEach(function(c){var f=l[c];!f&&f!==0?a.style.removeProperty(Bo(c)):HS(c)?o+=c+"("+f+") ":u+=Bo(c)+": "+f+";"}),o&&(u+="transform: "+o+";"),a.style.cssText+=";"+u}var qS=Gg();const rf=nr(qS),Am={disabled:!1},av=Ye.createContext(null);var YS=function(l){return l.scrollTop},Fl="unmounted",pa="exited",tn="entering",_n="entered",tr="exiting",Bn=(function(a){_S(l,a);function l(o,c){var f;f=a.call(this,o,c)||this;var h=c,y=h&&!h.isMounting?o.enter:o.appear,g;return f.appearStatus=null,o.in?y?(g=pa,f.appearStatus=tn):g=_n:o.unmountOnExit||o.mountOnEnter?g=Fl:g=pa,f.state={status:g},f.nextCallback=null,f}l.getDerivedStateFromProps=function(c,f){var h=c.in;return h&&f.status===Fl?{status:pa}:null};var u=l.prototype;return u.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},u.componentDidUpdate=function(c){var f=null;if(c!==this.props){var h=this.state.status;this.props.in?h!==tn&&h!==_n&&(f=tn):(h===tn||h===_n)&&(f=tr)}this.updateStatus(!1,f)},u.componentWillUnmount=function(){this.cancelNextCallback()},u.getTimeouts=function(){var c=this.props.timeout,f,h,y;return f=h=y=c,c!=null&&typeof c!="number"&&(f=c.exit,h=c.enter,y=c.appear!==void 0?c.appear:h),{exit:f,enter:h,appear:y}},u.updateStatus=function(c,f){if(c===void 0&&(c=!1),f!==null)if(this.cancelNextCallback(),f===tn){if(this.props.unmountOnExit||this.props.mountOnEnter){var h=this.props.nodeRef?this.props.nodeRef.current:_i.findDOMNode(this);h&&YS(h)}this.performEnter(c)}else this.performExit();else this.props.unmountOnExit&&this.state.status===pa&&this.setState({status:Fl})},u.performEnter=function(c){var f=this,h=this.props.enter,y=this.context?this.context.isMounting:c,g=this.props.nodeRef?[y]:[_i.findDOMNode(this),y],m=g[0],x=g[1],S=this.getTimeouts(),E=y?S.appear:S.enter;if(!c&&!h||Am.disabled){this.safeSetState({status:_n},function(){f.props.onEntered(m)});return}this.props.onEnter(m,x),this.safeSetState({status:tn},function(){f.props.onEntering(m,x),f.onTransitionEnd(E,function(){f.safeSetState({status:_n},function(){f.props.onEntered(m,x)})})})},u.performExit=function(){var c=this,f=this.props.exit,h=this.getTimeouts(),y=this.props.nodeRef?void 0:_i.findDOMNode(this);if(!f||Am.disabled){this.safeSetState({status:pa},function(){c.props.onExited(y)});return}this.props.onExit(y),this.safeSetState({status:tr},function(){c.props.onExiting(y),c.onTransitionEnd(h.exit,function(){c.safeSetState({status:pa},function(){c.props.onExited(y)})})})},u.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},u.safeSetState=function(c,f){f=this.setNextCallback(f),this.setState(c,f)},u.setNextCallback=function(c){var f=this,h=!0;return this.nextCallback=function(y){h&&(h=!1,f.nextCallback=null,c(y))},this.nextCallback.cancel=function(){h=!1},this.nextCallback},u.onTransitionEnd=function(c,f){this.setNextCallback(f);var h=this.props.nodeRef?this.props.nodeRef.current:_i.findDOMNode(this),y=c==null&&!this.props.addEndListener;if(!h||y){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var g=this.props.nodeRef?[this.nextCallback]:[h,this.nextCallback],m=g[0],x=g[1];this.props.addEndListener(m,x)}c!=null&&setTimeout(this.nextCallback,c)},u.render=function(){var c=this.state.status;if(c===Fl)return null;var f=this.props,h=f.children;f.in,f.mountOnEnter,f.unmountOnExit,f.appear,f.enter,f.exit,f.timeout,f.addEndListener,f.onEnter,f.onEntering,f.onEntered,f.onExit,f.onExiting,f.onExited,f.nodeRef;var y=ev(f,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Ye.createElement(av.Provider,{value:null},typeof h=="function"?h(c,y):Ye.cloneElement(Ye.Children.only(h),y))},l})(Ye.Component);Bn.contextType=av;Bn.propTypes={};function zi(){}Bn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:zi,onEntering:zi,onEntered:zi,onExit:zi,onExiting:zi,onExited:zi};Bn.UNMOUNTED=Fl;Bn.EXITED=pa;Bn.ENTERING=tn;Bn.ENTERED=_n;Bn.EXITING=tr;function GS(a){return a.code==="Escape"||a.keyCode===27}function XS(){const a=b.version.split(".");return{major:+a[0],minor:+a[1],patch:+a[2]}}function Gi(a){if(!a||typeof a=="function")return null;const{major:l}=XS();return l>=19?a.props.ref:a.ref}const cu=!!(typeof window<"u"&&window.document&&window.document.createElement);var Rf=!1,zf=!1;try{var of={get passive(){return Rf=!0},get once(){return zf=Rf=!0}};cu&&(window.addEventListener("test",of,of),window.removeEventListener("test",of,!0))}catch{}function VS(a,l,u,o){if(o&&typeof o!="boolean"&&!zf){var c=o.once,f=o.capture,h=u;!zf&&c&&(h=u.__once||function y(g){this.removeEventListener(l,y,f),u.call(this,g)},u.__once=h),a.addEventListener(l,h,Rf?o:f)}a.addEventListener(l,u,o)}function QS(a,l,u,o){var c=o&&typeof o!="boolean"?o.capture:o;a.removeEventListener(l,u,c),u.__once&&a.removeEventListener(l,u.__once,c)}function eu(a,l,u,o){return VS(a,l,u,o),function(){QS(a,l,u,o)}}function KS(a,l,u,o){if(o===void 0&&(o=!0),a){var c=document.createEvent("HTMLEvents");c.initEvent(l,u,o),a.dispatchEvent(c)}}function ZS(a){var l=Nn(a,"transitionDuration")||"",u=l.indexOf("ms")===-1?1e3:1;return parseFloat(l)*u}function JS(a,l,u){u===void 0&&(u=5);var o=!1,c=setTimeout(function(){o||KS(a,"transitionend",!0)},l+u),f=eu(a,"transitionend",function(){o=!0},{once:!0});return function(){clearTimeout(c),f()}}function FS(a,l,u,o){u==null&&(u=ZS(a)||0);var c=JS(a,u,o),f=eu(a,"transitionend",l);return function(){c(),f()}}function Dm(a,l){const u=Nn(a,l)||"",o=u.indexOf("ms")===-1?1e3:1;return parseFloat(u)*o}function Zf(a,l){const u=Dm(a,"transitionDuration"),o=Dm(a,"transitionDelay"),c=FS(a,f=>{f.target===a&&(c(),l(f))},u+o)}function Zl(...a){return a.filter(l=>l!=null).reduce((l,u)=>{if(typeof u!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return l===null?u:function(...c){l.apply(this,c),u.apply(this,c)}},null)}function iv(a){a.offsetHeight}const Nm=a=>!a||typeof a=="function"?a:l=>{a.current=l};function WS(a,l){const u=Nm(a),o=Nm(l);return c=>{u&&u(c),o&&o(c)}}function PS(a,l){return b.useMemo(()=>WS(a,l),[a,l])}function IS(a){return a&&"setState"in a?_i.findDOMNode(a):a??null}const fu=Ye.forwardRef(({onEnter:a,onEntering:l,onEntered:u,onExit:o,onExiting:c,onExited:f,addEndListener:h,children:y,childRef:g,...m},x)=>{const S=b.useRef(null),E=PS(S,g),D=A=>{E(IS(A))},R=A=>F=>{A&&S.current&&A(S.current,F)},q=b.useCallback(R(a),[a]),$=b.useCallback(R(l),[l]),V=b.useCallback(R(u),[u]),M=b.useCallback(R(o),[o]),_=b.useCallback(R(c),[c]),X=b.useCallback(R(f),[f]),L=b.useCallback(R(h),[h]);return d.jsx(Bn,{ref:x,...m,onEnter:q,onEntered:V,onEntering:$,onExit:M,onExited:X,onExiting:_,addEndListener:L,nodeRef:S,children:typeof y=="function"?(A,F)=>y(A,{...F,ref:D}):Ye.cloneElement(y,{ref:D})})});fu.displayName="TransitionWrapper";const e8={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function t8(a,l){const u=`offset${a[0].toUpperCase()}${a.slice(1)}`,o=l[u],c=e8[a];return o+parseInt(Nn(l,c[0]),10)+parseInt(Nn(l,c[1]),10)}const n8={[pa]:"collapse",[tr]:"collapsing",[tn]:"collapsing",[_n]:"collapse show"},lv=Ye.forwardRef(({onEnter:a,onEntering:l,onEntered:u,onExit:o,onExiting:c,className:f,children:h,dimension:y="height",in:g=!1,timeout:m=300,mountOnEnter:x=!1,unmountOnExit:S=!1,appear:E=!1,getDimensionValue:D=t8,...R},q)=>{const $=typeof y=="function"?y():y,V=b.useMemo(()=>Zl(A=>{A.style[$]="0"},a),[$,a]),M=b.useMemo(()=>Zl(A=>{const F=`scroll${$[0].toUpperCase()}${$.slice(1)}`;A.style[$]=`${A[F]}px`},l),[$,l]),_=b.useMemo(()=>Zl(A=>{A.style[$]=null},u),[$,u]),X=b.useMemo(()=>Zl(A=>{A.style[$]=`${D($,A)}px`,iv(A)},o),[o,D,$]),L=b.useMemo(()=>Zl(A=>{A.style[$]=null},c),[$,c]);return d.jsx(fu,{ref:q,addEndListener:Zf,...R,"aria-expanded":R.role?g:null,onEnter:V,onEntering:M,onEntered:_,onExit:X,onExiting:L,childRef:Gi(h),in:g,timeout:m,mountOnEnter:x,unmountOnExit:S,appear:E,children:(A,F)=>Ye.cloneElement(h,{...F,className:it(f,h.props.className,n8[A],$==="width"&&"collapse-horizontal")})})});lv.displayName="Collapse";function a8(a){const l=b.useRef(a);return b.useEffect(()=>{l.current=a},[a]),l}function du(a){const l=a8(a);return b.useCallback(function(...u){return l.current&&l.current(...u)},[l])}const i8=(a=>b.forwardRef((l,u)=>d.jsx("div",{...l,ref:u,className:it(l.className,a)})));function l8(a){const l=b.useRef(a);return b.useEffect(()=>{l.current=a},[a]),l}function An(a){const l=l8(a);return b.useCallback(function(...u){return l.current&&l.current(...u)},[l])}function r8(){const a=b.useRef(!0),l=b.useRef(()=>a.current);return b.useEffect(()=>(a.current=!0,()=>{a.current=!1}),[]),l.current}function o8(a){const l=b.useRef(null);return b.useEffect(()=>{l.current=a}),l.current}const u8=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",s8=typeof document<"u",km=s8||u8?b.useLayoutEffect:b.useEffect,c8=["as","disabled"];function f8(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}function d8(a){return!a||a.trim()==="#"}function rv({tagName:a,disabled:l,href:u,target:o,rel:c,role:f,onClick:h,tabIndex:y=0,type:g}){a||(u!=null||o!=null||c!=null?a="a":a="button");const m={tagName:a};if(a==="button")return[{type:g||"button",disabled:l},m];const x=E=>{if((l||a==="a"&&d8(u))&&E.preventDefault(),l){E.stopPropagation();return}h?.(E)},S=E=>{E.key===" "&&(E.preventDefault(),x(E))};return a==="a"&&(u||(u="#"),l&&(u=void 0)),[{role:f??"button",disabled:void 0,tabIndex:l?void 0:y,href:u,target:a==="a"?o:void 0,"aria-disabled":l||void 0,rel:a==="a"?c:void 0,onClick:x,onKeyDown:S},m]}const ov=b.forwardRef((a,l)=>{let{as:u,disabled:o}=a,c=f8(a,c8);const[f,{tagName:h}]=rv(Object.assign({tagName:u,disabled:o},c));return d.jsx(h,Object.assign({},c,f,{ref:l}))});ov.displayName="Button";const p8=["onKeyDown"];function h8(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}function m8(a){return!a||a.trim()==="#"}const uv=b.forwardRef((a,l)=>{let{onKeyDown:u}=a,o=h8(a,p8);const[c]=rv(Object.assign({tagName:"a"},o)),f=An(h=>{c.onKeyDown(h),u?.(h)});return m8(o.href)||o.role==="button"?d.jsx("a",Object.assign({ref:l},o,c,{onKeyDown:f})):d.jsx("a",Object.assign({ref:l},o,{onKeyDown:u}))});uv.displayName="Anchor";const g8={[tn]:"show",[_n]:"show"},sv=b.forwardRef(({className:a,children:l,transitionClasses:u={},onEnter:o,...c},f)=>{const h={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...c},y=b.useCallback((g,m)=>{iv(g),o?.(g,m)},[o]);return d.jsx(fu,{ref:f,addEndListener:Zf,...h,onEnter:y,childRef:Gi(l),children:(g,m)=>b.cloneElement(l,{...m,className:it("fade",a,l.props.className,g8[g],u[g])})})});sv.displayName="Fade";const v8={"aria-label":rf.string,onClick:rf.func,variant:rf.oneOf(["white"])},Jf=b.forwardRef(({className:a,variant:l,"aria-label":u="Close",...o},c)=>d.jsx("button",{ref:c,type:"button",className:it("btn-close",l&&`btn-close-${l}`,a),"aria-label":u,...o}));Jf.displayName="CloseButton";Jf.propTypes=v8;const cv=b.createContext(null);cv.displayName="CardHeaderContext";const fv=b.forwardRef(({bsPrefix:a,fluid:l=!1,as:u="div",className:o,...c},f)=>{const h=Et(a,"container"),y=typeof l=="string"?`-${l}`:"-fluid";return d.jsx(u,{ref:f,...c,className:it(o,l?`${h}${y}`:h)})});fv.displayName="Container";var y8=Function.prototype.bind.call(Function.prototype.call,[].slice);function La(a,l){return y8(a.querySelectorAll(l))}function b8(){const[,a]=b.useReducer(l=>l+1,0);return a}function Lm(a,l){if(a.contains)return a.contains(l);if(a.compareDocumentPosition)return a===l||!!(a.compareDocumentPosition(l)&16)}const tu=b.createContext(null),Ff=(a,l=null)=>a!=null?String(a):l||null,Wf=b.createContext(null);Wf.displayName="NavContext";const x8="data-rr-ui-",S8="rrUi";function pu(a){return`${x8}${a}`}function w8(a){return`${S8}${a}`}const dv=b.createContext(cu?window:void 0);dv.Provider;function Pf(){return b.useContext(dv)}const E8=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",C8=typeof document<"u",T8=C8||E8?b.useLayoutEffect:b.useEffect,Xi=b.createContext(null);Xi.displayName="NavbarContext";const $m=a=>!a||typeof a=="function"?a:l=>{a.current=l};function j8(a,l){const u=$m(a),o=$m(l);return c=>{u&&u(c),o&&o(c)}}function hu(a,l){return b.useMemo(()=>j8(a,l),[a,l])}const pv=b.createContext(null),R8=["as","active","eventKey"];function z8(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}function hv({key:a,onClick:l,active:u,id:o,role:c,disabled:f}){const h=b.useContext(tu),y=b.useContext(Wf),g=b.useContext(pv);let m=u;const x={role:c};if(y){!c&&y.role==="tablist"&&(x.role="tab");const S=y.getControllerId(a??null),E=y.getControlledId(a??null);x[pu("event-key")]=a,x.id=S||o,m=u==null&&a!=null?y.activeKey===a:u,(m||!(g!=null&&g.unmountOnExit)&&!(g!=null&&g.mountOnEnter))&&(x["aria-controls"]=E)}return x.role==="tab"&&(x["aria-selected"]=m,m||(x.tabIndex=-1),f&&(x.tabIndex=-1,x["aria-disabled"]=!0)),x.onClick=An(S=>{f||(l?.(S),a!=null&&h&&!S.isPropagationStopped()&&h(a,S))}),[x,{isActive:m}]}const mv=b.forwardRef((a,l)=>{let{as:u=ov,active:o,eventKey:c}=a,f=z8(a,R8);const[h,y]=hv(Object.assign({key:Ff(c,f.href),active:o},f));return h[pu("active")]=y.isActive,d.jsx(u,Object.assign({},f,h,{ref:l}))});mv.displayName="NavItem";const O8=["as","onSelect","activeKey","role","onKeyDown"];function M8(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}const Bm=()=>{},Um=pu("event-key"),gv=b.forwardRef((a,l)=>{let{as:u="div",onSelect:o,activeKey:c,role:f,onKeyDown:h}=a,y=M8(a,O8);const g=b8(),m=b.useRef(!1),x=b.useContext(tu),S=b.useContext(pv);let E,D;S&&(f=f||"tablist",c=S.activeKey,E=S.getControlledId,D=S.getControllerId);const R=b.useRef(null),q=_=>{const X=R.current;if(!X)return null;const L=La(X,`[${Um}]:not([aria-disabled=true])`),A=X.querySelector("[aria-selected=true]");if(!A||A!==document.activeElement)return null;const F=L.indexOf(A);if(F===-1)return null;let B=F+_;return B>=L.length&&(B=0),B<0&&(B=L.length-1),L[B]},$=(_,X)=>{_!=null&&(o?.(_,X),x?.(_,X))},V=_=>{if(h?.(_),!S)return;let X;switch(_.key){case"ArrowLeft":case"ArrowUp":X=q(-1);break;case"ArrowRight":case"ArrowDown":X=q(1);break;default:return}X&&(_.preventDefault(),$(X.dataset[w8("EventKey")]||null,_),m.current=!0,g())};b.useEffect(()=>{if(R.current&&m.current){const _=R.current.querySelector(`[${Um}][aria-selected=true]`);_?.focus()}m.current=!1});const M=hu(l,R);return d.jsx(tu.Provider,{value:$,children:d.jsx(Wf.Provider,{value:{role:f,activeKey:Ff(c),getControlledId:E||Bm,getControllerId:D||Bm},children:d.jsx(u,Object.assign({},y,{onKeyDown:V,ref:M,role:f}))})})});gv.displayName="Nav";const _8=Object.assign(gv,{Item:mv});function uf(a){a===void 0&&(a=Kf());try{var l=a.activeElement;return!l||!l.nodeName?null:l}catch{return a.body}}function A8(a){const l=b.useRef(a);return l.current=a,l}function D8(a){const l=A8(a);b.useEffect(()=>()=>l.current(),[])}function N8(a=document){const l=a.defaultView;return Math.abs(l.innerWidth-a.documentElement.clientWidth)}const Hm=pu("modal-open");class If{constructor({ownerDocument:l,handleContainerOverflow:u=!0,isRTL:o=!1}={}){this.handleContainerOverflow=u,this.isRTL=o,this.modals=[],this.ownerDocument=l}getScrollbarWidth(){return N8(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(l){}removeModalAttributes(l){}setContainerStyle(l){const u={overflow:"hidden"},o=this.isRTL?"paddingLeft":"paddingRight",c=this.getElement();l.style={overflow:c.style.overflow,[o]:c.style[o]},l.scrollBarWidth&&(u[o]=`${parseInt(Nn(c,o)||"0",10)+l.scrollBarWidth}px`),c.setAttribute(Hm,""),Nn(c,u)}reset(){[...this.modals].forEach(l=>this.remove(l))}removeContainerStyle(l){const u=this.getElement();u.removeAttribute(Hm),Object.assign(u.style,l.style)}add(l){let u=this.modals.indexOf(l);return u!==-1||(u=this.modals.length,this.modals.push(l),this.setModalAttributes(l),u!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),u}remove(l){const u=this.modals.indexOf(l);u!==-1&&(this.modals.splice(u,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(l))}isTopModal(l){return!!this.modals.length&&this.modals[this.modals.length-1]===l}}const sf=(a,l)=>cu?a==null?(l||Kf()).body:(typeof a=="function"&&(a=a()),a&&"current"in a&&(a=a.current),a&&("nodeType"in a||a.getBoundingClientRect)?a:null):null;function k8(a,l){const u=Pf(),[o,c]=b.useState(()=>sf(a,u?.document));if(!o){const f=sf(a);f&&c(f)}return b.useEffect(()=>{},[l,o]),b.useEffect(()=>{const f=sf(a);f!==o&&c(f)},[a,o]),o}function L8({children:a,in:l,onExited:u,mountOnEnter:o,unmountOnExit:c}){const f=b.useRef(null),h=b.useRef(l),y=An(u);b.useEffect(()=>{l?h.current=!0:y(f.current)},[l,y]);const g=hu(f,Gi(a)),m=b.cloneElement(a,{ref:g});return l?m:c||!h.current&&o?null:m}const $8=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function B8(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}function U8(a){let{onEnter:l,onEntering:u,onEntered:o,onExit:c,onExiting:f,onExited:h,addEndListener:y,children:g}=a,m=B8(a,$8);const x=b.useRef(null),S=hu(x,Gi(g)),E=X=>L=>{X&&x.current&&X(x.current,L)},D=b.useCallback(E(l),[l]),R=b.useCallback(E(u),[u]),q=b.useCallback(E(o),[o]),$=b.useCallback(E(c),[c]),V=b.useCallback(E(f),[f]),M=b.useCallback(E(h),[h]),_=b.useCallback(E(y),[y]);return Object.assign({},m,{nodeRef:x},l&&{onEnter:D},u&&{onEntering:R},o&&{onEntered:q},c&&{onExit:$},f&&{onExiting:V},h&&{onExited:M},y&&{addEndListener:_},{children:typeof g=="function"?(X,L)=>g(X,Object.assign({},L,{ref:S})):b.cloneElement(g,{ref:S})})}const H8=["component"];function q8(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}const Y8=b.forwardRef((a,l)=>{let{component:u}=a,o=q8(a,H8);const c=U8(o);return d.jsx(u,Object.assign({ref:l},c))});function G8({in:a,onTransition:l}){const u=b.useRef(null),o=b.useRef(!0),c=An(l);return km(()=>{if(!u.current)return;let f=!1;return c({in:a,element:u.current,initial:o.current,isStale:()=>f}),()=>{f=!0}},[a,c]),km(()=>(o.current=!1,()=>{o.current=!0}),[]),u}function X8({children:a,in:l,onExited:u,onEntered:o,transition:c}){const[f,h]=b.useState(!l);l&&f&&h(!1);const y=G8({in:!!l,onTransition:m=>{const x=()=>{m.isStale()||(m.in?o?.(m.element,m.initial):(h(!0),u?.(m.element)))};Promise.resolve(c(m)).then(x,S=>{throw m.in||h(!0),S})}}),g=hu(y,Gi(a));return f&&!l?null:b.cloneElement(a,{ref:g})}function qm(a,l,u){return a?d.jsx(Y8,Object.assign({},u,{component:a})):l?d.jsx(X8,Object.assign({},u,{transition:l})):d.jsx(L8,Object.assign({},u))}const V8=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Q8(a,l){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;u[o]=a[o]}return u}let cf;function K8(a){return cf||(cf=new If({ownerDocument:a?.document})),cf}function Z8(a){const l=Pf(),u=a||K8(l),o=b.useRef({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>u.add(o.current),remove:()=>u.remove(o.current),isTopModal:()=>u.isTopModal(o.current),setDialogRef:b.useCallback(c=>{o.current.dialog=c},[]),setBackdropRef:b.useCallback(c=>{o.current.backdrop=c},[])})}const vv=b.forwardRef((a,l)=>{let{show:u=!1,role:o="dialog",className:c,style:f,children:h,backdrop:y=!0,keyboard:g=!0,onBackdropClick:m,onEscapeKeyDown:x,transition:S,runTransition:E,backdropTransition:D,runBackdropTransition:R,autoFocus:q=!0,enforceFocus:$=!0,restoreFocus:V=!0,restoreFocusOptions:M,renderDialog:_,renderBackdrop:X=Be=>d.jsx("div",Object.assign({},Be)),manager:L,container:A,onShow:F,onHide:B=()=>{},onExit:Z,onExited:re,onExiting:J,onEnter:k,onEntering:te,onEntered:ne}=a,j=Q8(a,V8);const O=Pf(),Y=k8(A),W=Z8(L),oe=r8(),fe=o8(u),[T,Q]=b.useState(!u),ie=b.useRef(null);b.useImperativeHandle(l,()=>W,[W]),cu&&!fe&&u&&(ie.current=uf(O?.document)),u&&T&&Q(!1);const ae=An(()=>{if(W.add(),Ct.current=eu(document,"keydown",$e),je.current=eu(document,"focus",()=>setTimeout(he),!0),F&&F(),q){var Be,qa;const Vi=uf((Be=(qa=W.dialog)==null?void 0:qa.ownerDocument)!=null?Be:O?.document);W.dialog&&Vi&&!Lm(W.dialog,Vi)&&(ie.current=Vi,W.dialog.focus())}}),ce=An(()=>{if(W.remove(),Ct.current==null||Ct.current(),je.current==null||je.current(),V){var Be;(Be=ie.current)==null||Be.focus==null||Be.focus(M),ie.current=null}});b.useEffect(()=>{!u||!Y||ae()},[u,Y,ae]),b.useEffect(()=>{T&&ce()},[T,ce]),D8(()=>{ce()});const he=An(()=>{if(!$||!oe()||!W.isTopModal())return;const Be=uf(O?.document);W.dialog&&Be&&!Lm(W.dialog,Be)&&W.dialog.focus()}),be=An(Be=>{Be.target===Be.currentTarget&&(m?.(Be),y===!0&&B())}),$e=An(Be=>{g&&GS(Be)&&W.isTopModal()&&(x?.(Be),Be.defaultPrevented||B())}),je=b.useRef(),Ct=b.useRef(),Ft=(...Be)=>{Q(!0),re?.(...Be)};if(!Y)return null;const ht=Object.assign({role:o,ref:W.setDialogRef,"aria-modal":o==="dialog"?!0:void 0},j,{style:f,className:c,tabIndex:-1});let Ha=_?_(ht):d.jsx("div",Object.assign({},ht,{children:b.cloneElement(h,{role:"document"})}));Ha=qm(S,E,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!u,onExit:Z,onExiting:J,onExited:Ft,onEnter:k,onEntering:te,onEntered:ne,children:Ha});let $t=null;return y&&($t=X({ref:W.setBackdropRef,onClick:be}),$t=qm(D,R,{in:!!u,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:$t})),d.jsx(d.Fragment,{children:_i.createPortal(d.jsxs(d.Fragment,{children:[$t,Ha]}),Y)})});vv.displayName="Modal";const J8=Object.assign(vv,{Manager:If});function F8(a,l){return a.classList?a.classList.contains(l):(" "+(a.className.baseVal||a.className)+" ").indexOf(" "+l+" ")!==-1}function W8(a,l){a.classList?a.classList.add(l):F8(a,l)||(typeof a.className=="string"?a.className=a.className+" "+l:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+l))}function Ym(a,l){return a.replace(new RegExp("(^|\\s)"+l+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function P8(a,l){a.classList?a.classList.remove(l):typeof a.className=="string"?a.className=Ym(a.className,l):a.setAttribute("class",Ym(a.className&&a.className.baseVal||"",l))}const Oi={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class yv extends If{adjustAndStore(l,u,o){const c=u.style[l];u.dataset[l]=c,Nn(u,{[l]:`${parseFloat(Nn(u,l))+o}px`})}restore(l,u){const o=u.dataset[l];o!==void 0&&(delete u.dataset[l],Nn(u,{[l]:o}))}setContainerStyle(l){super.setContainerStyle(l);const u=this.getElement();if(W8(u,"modal-open"),!l.scrollBarWidth)return;const o=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";La(u,Oi.FIXED_CONTENT).forEach(f=>this.adjustAndStore(o,f,l.scrollBarWidth)),La(u,Oi.STICKY_CONTENT).forEach(f=>this.adjustAndStore(c,f,-l.scrollBarWidth)),La(u,Oi.NAVBAR_TOGGLER).forEach(f=>this.adjustAndStore(c,f,l.scrollBarWidth))}removeContainerStyle(l){super.removeContainerStyle(l);const u=this.getElement();P8(u,"modal-open");const o=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";La(u,Oi.FIXED_CONTENT).forEach(f=>this.restore(o,f)),La(u,Oi.STICKY_CONTENT).forEach(f=>this.restore(c,f)),La(u,Oi.NAVBAR_TOGGLER).forEach(f=>this.restore(c,f))}}let ff;function I8(a){return ff||(ff=new yv(a)),ff}const bv=b.createContext({onHide(){}}),xv=b.forwardRef(({closeLabel:a="Close",closeVariant:l,closeButton:u=!1,onHide:o,children:c,...f},h)=>{const y=b.useContext(bv),g=du(()=>{y?.onHide(),o?.()});return d.jsxs("div",{ref:h,...f,children:[c,u&&d.jsx(Jf,{"aria-label":a,variant:l,onClick:g})]})});xv.displayName="AbstractModalHeader";const Sv=b.forwardRef(({className:a,bsPrefix:l,as:u="div",...o},c)=>(l=Et(l,"nav-item"),d.jsx(u,{ref:c,className:it(a,l),...o})));Sv.displayName="NavItem";const wv=b.forwardRef(({bsPrefix:a,className:l,as:u=uv,active:o,eventKey:c,disabled:f=!1,...h},y)=>{a=Et(a,"nav-link");const[g,m]=hv({key:Ff(c,h.href),active:o,disabled:f,...h});return d.jsx(u,{...h,...g,ref:y,disabled:f,className:it(l,a,f&&"disabled",m.isActive&&"active")})});wv.displayName="NavLink";const Ev=b.forwardRef((a,l)=>{const{as:u="div",bsPrefix:o,variant:c,fill:f=!1,justify:h=!1,navbar:y,navbarScroll:g,className:m,activeKey:x,...S}=tv(a,{activeKey:"onSelect"}),E=Et(o,"nav");let D,R,q=!1;const $=b.useContext(Xi),V=b.useContext(cv);return $?(D=$.bsPrefix,q=y??!0):V&&({cardHeaderBsPrefix:R}=V),d.jsx(_8,{as:u,ref:l,activeKey:x,className:it(m,{[E]:!q,[`${D}-nav`]:q,[`${D}-nav-scroll`]:q&&g,[`${R}-${c}`]:!!R,[`${E}-${c}`]:!!c,[`${E}-fill`]:f,[`${E}-justified`]:h}),...S})});Ev.displayName="Nav";const ew=Object.assign(Ev,{Item:Sv,Link:wv}),Cv=b.forwardRef(({bsPrefix:a,className:l,as:u,...o},c)=>{a=Et(a,"navbar-brand");const f=u||(o.href?"a":"span");return d.jsx(f,{...o,ref:c,className:it(l,a)})});Cv.displayName="NavbarBrand";const Tv=b.forwardRef(({children:a,bsPrefix:l,...u},o)=>{l=Et(l,"navbar-collapse");const c=b.useContext(Xi);return d.jsx(lv,{in:!!(c&&c.expanded),...u,children:d.jsx("div",{ref:o,className:l,children:a})})});Tv.displayName="NavbarCollapse";const jv=b.forwardRef(({bsPrefix:a,className:l,children:u,label:o="Toggle navigation",as:c="button",onClick:f,...h},y)=>{a=Et(a,"navbar-toggler");const{onToggle:g,expanded:m}=b.useContext(Xi)||{},x=du(S=>{f&&f(S),g&&g()});return c==="button"&&(h.type="button"),d.jsx(c,{...h,ref:y,onClick:x,"aria-label":o,className:it(l,a,!m&&"collapsed"),children:u||d.jsx("span",{className:`${a}-icon`})})});jv.displayName="NavbarToggle";const Of=new WeakMap,Gm=(a,l)=>{if(!a||!l)return;const u=Of.get(l)||new Map;Of.set(l,u);let o=u.get(a);return o||(o=l.matchMedia(a),o.refCount=0,u.set(o.media,o)),o};function tw(a,l=typeof window>"u"?void 0:window){const u=Gm(a,l),[o,c]=b.useState(()=>u?u.matches:!1);return T8(()=>{let f=Gm(a,l);if(!f)return c(!1);let h=Of.get(l);const y=()=>{c(f.matches)};return f.refCount++,f.addListener(y),y(),()=>{f.removeListener(y),f.refCount--,f.refCount<=0&&h?.delete(f.media),f=void 0}},[a]),o}function nw(a){const l=Object.keys(a);function u(y,g){return y===g?g:y?`${y} and ${g}`:g}function o(y){return l[Math.min(l.indexOf(y)+1,l.length-1)]}function c(y){const g=o(y);let m=a[g];return typeof m=="number"?m=`${m-.2}px`:m=`calc(${m} - 0.2px)`,`(max-width: ${m})`}function f(y){let g=a[y];return typeof g=="number"&&(g=`${g}px`),`(min-width: ${g})`}function h(y,g,m){let x;typeof y=="object"?(x=y,m=g,g=!0):(g=g||!0,x={[y]:g});let S=b.useMemo(()=>Object.entries(x).reduce((E,[D,R])=>((R==="up"||R===!0)&&(E=u(E,f(D))),(R==="down"||R===!0)&&(E=u(E,c(D))),E),""),[JSON.stringify(x)]);return tw(S,m)}return h}const aw=nw({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),Rv=b.forwardRef(({className:a,bsPrefix:l,as:u="div",...o},c)=>(l=Et(l,"offcanvas-body"),d.jsx(u,{ref:c,className:it(a,l),...o})));Rv.displayName="OffcanvasBody";const iw={[tn]:"show",[_n]:"show"},zv=b.forwardRef(({bsPrefix:a,className:l,children:u,in:o=!1,mountOnEnter:c=!1,unmountOnExit:f=!1,appear:h=!1,...y},g)=>(a=Et(a,"offcanvas"),d.jsx(fu,{ref:g,addEndListener:Zf,in:o,mountOnEnter:c,unmountOnExit:f,appear:h,...y,childRef:Gi(u),children:(m,x)=>b.cloneElement(u,{...x,className:it(l,u.props.className,(m===tn||m===tr)&&`${a}-toggling`,iw[m])})})));zv.displayName="OffcanvasToggling";const Ov=b.forwardRef(({bsPrefix:a,className:l,closeLabel:u="Close",closeButton:o=!1,...c},f)=>(a=Et(a,"offcanvas-header"),d.jsx(xv,{ref:f,...c,className:it(l,a),closeLabel:u,closeButton:o})));Ov.displayName="OffcanvasHeader";const lw=i8("h5"),Mv=b.forwardRef(({className:a,bsPrefix:l,as:u=lw,...o},c)=>(l=Et(l,"offcanvas-title"),d.jsx(u,{ref:c,className:it(a,l),...o})));Mv.displayName="OffcanvasTitle";function rw(a){return d.jsx(zv,{...a})}function ow(a){return d.jsx(sv,{...a})}const _v=b.forwardRef(({bsPrefix:a,className:l,children:u,"aria-labelledby":o,placement:c="start",responsive:f,show:h=!1,backdrop:y=!0,keyboard:g=!0,scroll:m=!1,onEscapeKeyDown:x,onShow:S,onHide:E,container:D,autoFocus:R=!0,enforceFocus:q=!0,restoreFocus:$=!0,restoreFocusOptions:V,onEntered:M,onExit:_,onExiting:X,onEnter:L,onEntering:A,onExited:F,backdropClassName:B,manager:Z,renderStaticNode:re=!1,...J},k)=>{const te=b.useRef();a=Et(a,"offcanvas");const[ne,j]=b.useState(!1),O=du(E),Y=aw(f||"xs","up");b.useEffect(()=>{j(f?h&&!Y:h)},[h,f,Y]);const W=b.useMemo(()=>({onHide:O}),[O]);function oe(){return Z||(m?(te.current||(te.current=new yv({handleContainerOverflow:!1})),te.current):I8())}const fe=(ae,...ce)=>{ae&&(ae.style.visibility="visible"),L?.(ae,...ce)},T=(ae,...ce)=>{ae&&(ae.style.visibility=""),F?.(...ce)},Q=b.useCallback(ae=>d.jsx("div",{...ae,className:it(`${a}-backdrop`,B)}),[B,a]),ie=ae=>d.jsx("div",{...ae,...J,className:it(l,f?`${a}-${f}`:a,`${a}-${c}`),"aria-labelledby":o,children:u});return d.jsxs(d.Fragment,{children:[!ne&&(f||re)&&ie({}),d.jsx(bv.Provider,{value:W,children:d.jsx(J8,{show:ne,ref:k,backdrop:y,container:D,keyboard:g,autoFocus:R,enforceFocus:q&&!m,restoreFocus:$,restoreFocusOptions:V,onEscapeKeyDown:x,onShow:S,onHide:O,onEnter:fe,onEntering:A,onEntered:M,onExit:_,onExiting:X,onExited:T,manager:oe(),transition:rw,backdropTransition:ow,renderBackdrop:Q,renderDialog:ie})})]})});_v.displayName="Offcanvas";const uw=Object.assign(_v,{Body:Rv,Header:Ov,Title:Mv}),Av=b.forwardRef(({onHide:a,...l},u)=>{const o=b.useContext(Xi),c=du(()=>{o==null||o.onToggle==null||o.onToggle(),a?.()});return d.jsx(uw,{ref:u,show:!!(o!=null&&o.expanded),...l,renderStaticNode:!0,onHide:c})});Av.displayName="NavbarOffcanvas";const Dv=b.forwardRef(({className:a,bsPrefix:l,as:u="span",...o},c)=>(l=Et(l,"navbar-text"),d.jsx(u,{ref:c,className:it(a,l),...o})));Dv.displayName="NavbarText";const Nv=b.forwardRef((a,l)=>{const{bsPrefix:u,expand:o=!0,variant:c="light",bg:f,fixed:h,sticky:y,className:g,as:m="nav",expanded:x,onToggle:S,onSelect:E,collapseOnSelect:D=!1,...R}=tv(a,{expanded:"onToggle"}),q=Et(u,"navbar"),$=b.useCallback((..._)=>{E?.(..._),D&&x&&S?.(!1)},[E,D,x,S]);R.role===void 0&&m!=="nav"&&(R.role="navigation");let V=`${q}-expand`;typeof o=="string"&&(V=`${V}-${o}`);const M=b.useMemo(()=>({onToggle:()=>S?.(!x),bsPrefix:q,expanded:!!x,expand:o}),[q,x,o,S]);return d.jsx(Xi.Provider,{value:M,children:d.jsx(tu.Provider,{value:$,children:d.jsx(m,{ref:l,...R,className:it(g,q,o&&V,c&&`${q}-${c}`,f&&`bg-${f}`,y&&`sticky-${y}`,h&&`fixed-${h}`)})})})});Nv.displayName="Navbar";const sw=Object.assign(Nv,{Brand:Cv,Collapse:Tv,Offcanvas:Av,Text:Dv,Toggle:jv});function cw(a){return Te({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M149.688 85.625c-1.234.005-2.465.033-3.72.063-33.913.806-75.48 10.704-127.25 33.718V362.78c60.77-28.82 106.718-37.067 144.22-33.092 33.502 3.55 59.685 16.66 83.562 31.187v-242.97c-23.217-17.744-50.195-30.04-85.97-32-3.52-.192-7.142-.296-10.843-.28zm211.968 0c-3.7-.016-7.322.088-10.844.28-35.773 1.96-62.75 14.256-85.968 32v242.97c23.876-14.527 50.06-27.637 83.562-31.188 37.502-3.974 83.45 4.272 144.22 33.094V119.407c-51.77-23.014-93.337-32.912-127.25-33.72-1.255-.028-2.486-.056-3.72-.06zm5.72 261.78c-1.038-.002-2.074.017-3.095.033-4.808.075-9.43.37-13.905.843-33.932 3.597-59.603 17.976-85.53 34.44v.28c-6.554-1.99-13.02-2.37-19.408-.97-25.566-16.177-51.003-30.202-84.468-33.75-5.595-.592-11.44-.883-17.564-.842-32.04.213-71.833 9.778-124.687 35.937v42.53c60.77-28.823 106.714-37.067 144.218-33.092 18.545 1.965 34.837 6.845 49.75 13.28-4.682 6.064-9.308 13.268-13.875 21.688h117.156c-5.93-8.22-11.798-15.414-17.626-21.56 14.996-6.503 31.39-11.43 50.062-13.408 37.503-3.974 83.448 4.27 144.22 33.094v-42.53c-53.16-26.31-93.115-35.863-125.25-35.97z"},child:[]}]})(a)}function fw(a){return Te({attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",fill:"currentColor"},child:[]}]})(a)}const dw=w(sw)`
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
`,pw=w.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 8px;
`,hw=w.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,mw=w.div`
  justify-self: center;
`,gw=w.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`,vw=w.button`
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
`,yw=w(qi)`
  padding: 10px 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px; /* space between icon and text */
`,bw=w(cw)`
  width: 28px;
  height: 28px;
  flex: 0 0 28px;
  color: #f0703c /* keep high contrast; adjust to your brand */
`,xw=w.div`
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
`;function Sw(){const a=()=>{console.log("Toggled theme")};return d.jsx("div",{className:"topbar-wrapper",children:d.jsx(dw,{className:"shadow-sm d-lg-none",children:d.jsx(fv,{fluid:!0,className:"px-3",children:d.jsxs(pw,{children:[d.jsx(hw,{children:d.jsxs(yw,{to:"/instalearn/","aria-label":"Go to home",children:[d.jsx(bw,{"aria-hidden":"true"}),d.jsx(xw,{children:"InstaLearn"})]})}),d.jsx(mw,{}),d.jsx(gw,{children:d.jsx(vw,{type:"button",onClick:a,"aria-label":"Toggle",children:d.jsx(fw,{size:20})})})]})})})})}const ww=Jt`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Ew=w.aside`
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
`,Cw=w(qi)`
  padding: 25px 12px 16px 12px;
  margin-bottom: 19px;
  margin-left: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: padding 200ms ease, margin 200ms ease;
`,Tw=w.div`
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
`,jw=w.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
`,Rw=ma`
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
    animation: ${ww} 4s linear infinite;
    box-shadow: 0 0 8px rgba(0, 245, 255, 0.8);
  }
`,df=w(qi)`
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

  ${a=>a.$active&&Rw}
`,zw=w.div`
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px solid #dbdbdb;
`,pf=w.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,hf=w.span`
  white-space: nowrap;
  transition: opacity 120ms ease, width 200ms ease;
`;function Ow(){const{pathname:a}=$n(),l=[{to:"/instalearn/",icon:d.jsx(Ug,{}),label:"Home"},{to:"/instalearn/teacher",icon:d.jsx(Pl,{}),label:"Teacher"},{to:"/instalearn/library",icon:d.jsx(Bg,{}),label:"Library",hasNotification:!0},{to:"/instalearn/notifications",icon:d.jsx(J5,{}),label:"Notifications"},{to:"/instalearn/profile",icon:d.jsx(qg,{}),label:"Profile"}];return d.jsxs(Ew,{children:[d.jsx(Cw,{to:"/instalearn/",children:d.jsx(Tw,{children:"InstaLearn"})}),d.jsxs(jw,{children:[l.slice(0,-1).map(u=>d.jsxs(df,{to:u.to,$active:a===u.to,children:[d.jsx(pf,{children:u.icon}),d.jsx(hf,{children:u.label}),u.hasNotification]},u.to)),d.jsxs(df,{to:l[l.length-1].to,$active:a===l[l.length-1].to,children:[d.jsx(pf,{children:l[l.length-1].icon}),d.jsx(hf,{children:l[l.length-1].label})]})]}),d.jsx(zw,{children:d.jsxs(df,{to:"/instalearn/more",$active:a==="/instalearn/more",children:[d.jsx(pf,{children:d.jsx(F5,{})}),d.jsx(hf,{children:"More"})]})})]})}const Mw=w.div`
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
`,_w=w.div`
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
`,kv=w.div`
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
`,Aw=w.div`
  position: relative;
  flex-shrink: 0;
`,Dw=w.div`
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
  
  ${kv}:hover & {
    transform: scale(1.05);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }
`,Nw=w.div`
  position: absolute;
  bottom: ${a=>a.$width<250?"2px":"4px"};
  right: ${a=>a.$width<250?"0":"2px"};
  width: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  height: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
`,kw=w.div`
  flex: 1;
  min-width: 0;
  display: ${a=>a.$width<180?"none":"block"};
`,Lw=w.div`
  font-size: ${a=>a.$width<250?"13px":"14px"};
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,$w=w.div`
  font-size: ${a=>a.$width<250?"11px":"13px"};
  color: #6b7280;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Bw=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,Uw=w.div`
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
`,Hw=w.button`
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
`,qw=w.div`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.$width<250?"8px":"12px"};
  margin-bottom: 32px;
`,Lv=w.div`
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
`,Yw=w.div`
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
  
  ${Lv}:hover & {
    transform: scale(1.05) rotate(5deg);
  }
`,Gw=w.div`
  display: flex;
  flex-direction: ${a=>a.$width<200?"column":a.$width<250?"row":"column"};
  align-items: ${a=>a.$width>=200&&a.$width<250?"center":"stretch"};
  flex: 1;
`,Xw=w.div`
  flex: 1;
`,Vw=w.h4`
  font-size: ${a=>a.$width<250?"12px":"13px"};
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 ${a=>a.$width<250?"2px":"4px"} 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Qw=w.p`
  font-size: ${a=>a.$width<250?"10px":"12px"};
  color: #6b7280;
  margin: 0;
  display: ${a=>a.$width<180?"none":"-webkit-box"};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
`,Kw=w.span`
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
`;const Zw=({sidebarWidth:a=360})=>{const l={username:"demo_user",name:"Demo User",initials:"DU"},u=[{icon:M1,gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",title:"New Feature: Dark Mode",description:"Enable dark mode for a better night-time experience.",badge:"New",badgeBg:"linear-gradient(135deg, #667eea, #764ba2)"},{icon:W5,gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",title:"Product Tip: Quick Search",description:"Use the search bar to find items faster.",badge:"Tip",badgeBg:"linear-gradient(135deg, #f093fb, #f5576c)"},{icon:Z5,gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",title:"Update: Version 2.0",description:"Check out the latest improvements and bug fixes.",badge:"Update",badgeBg:"linear-gradient(135deg, #4facfe, #00f2fe)"}];return d.jsxs(Mw,{children:[d.jsx(_w,{children:d.jsxs(kv,{$width:a,children:[d.jsxs(Aw,{children:[d.jsx(Dw,{$width:a,children:l.initials}),d.jsx(Nw,{$width:a})]}),d.jsxs(kw,{$width:a,children:[d.jsx(Lw,{$width:a,children:l.username}),d.jsx($w,{$width:a,children:l.name})]})]})}),d.jsxs(Bw,{children:[d.jsxs(Uw,{$width:a,$iconColor:"#667eea",children:[d.jsx(M1,{}),d.jsx("span",{children:"Highlights"})]}),d.jsx(Hw,{$width:a,children:"See All"})]}),d.jsx(qw,{$width:a,children:u.map((o,c)=>{const f=o.icon;return d.jsxs(Lv,{$width:a,$glowColor:o.gradient,children:[d.jsx(Kw,{$width:a,$bg:o.badgeBg,children:o.badge}),d.jsxs(Gw,{$width:a,children:[d.jsx(Yw,{$width:a,$gradient:o.gradient,children:d.jsx(f,{})}),d.jsxs(Xw,{children:[d.jsx(Vw,{$width:a,children:o.title}),d.jsx(Qw,{$width:a,children:o.description})]})]})]},c)})})]})};function Jw(){const{pathname:a}=$n(),l=[["/instalearn/",d.jsx(Ug,{})],["/instalearn/teacher",d.jsx(Pl,{})],["/instalearn/library",d.jsx(Bg,{})],["/instalearn/profile",d.jsx(qg,{})]];return d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
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
      `}),d.jsx(ew,{className:"bottom-nav fixed-bottom d-flex justify-content-around py-2 d-lg-none",children:l.map(([u,o])=>d.jsx(qi,{to:u,className:`nav-link fs-4 text-white ${a===u?"active":""}`,children:o},u))})]})}const Fw={name:"Siddharth Sir",subject:"SST Teacher",bio:"Exploring history, geography & civics 🌍 | Making SST engaging for Classes 6–12 | CBSE Expert",avatar:Yg.teacherProfilePic,concepts:247,students:"1.2K",learns:15,experience:8,bookList:[{title:"SST MARATHON"},{title:"World Geography Simplified"},{title:"Understanding Civics"},{title:"Economics Made Easy"},{title:"Political Science Basics"},{title:"Environment & Society"}]},ct=Fw,Ww=w.div`
  max-width: 1120px;
  margin: 0 auto;
  background: #fff;
  min-height: 100vh;
`,Pw=w.div`
  padding: 1rem 1.5rem;
  @media (min-width: 768px) { padding: 1.5rem 2rem; }
  @media (min-width: 1024px) { padding: 2rem 3rem; }
`,Iw=w.div`
  display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 1.5rem;
  @media (min-width: 768px) { flex-direction: row; align-items: flex-start; }
`,e7=w.div`
  display: flex; align-items: center; gap: 1.5rem;
  @media (min-width: 768px) { flex-direction: column; align-items: center; }
`,t7=w.div` position: relative; `,n7=w.img`
  width: 5rem; height: 5rem; border-radius: 50%; object-fit: cover; border: 2px solid #e5e7eb;
  @media (min-width: 768px) { width: 8rem; height: 8rem; }
  @media (min-width: 1024px) { width: 10rem; height: 10rem; }
`,a7=w.div`
  position: absolute;
  top: -6px; left: -6px;
  background: #111827; color: #fff; font-size: 0.65rem; font-weight: 700;
  padding: 0.25rem 0.4rem; border-radius: 8px;
  display: inline-flex; align-items: center; gap: 4px;
`,i7=w.div`
  display: flex; flex: 1; justify-content: space-around; text-align: center;
  @media (min-width: 768px) { display: none; }
`,l7=w.div`
  display: none; gap: 2rem; margin-bottom: 1.5rem;
  @media (min-width: 768px) { display: flex; }
`,Mi=w.div`
  font-weight: 600; font-size: 1.125rem;
  span { font-weight: 400; margin-left: 0.25rem; color: #6b7280; }
`,r7=w.div` flex: 1; `,o7=w.div`
  font-weight: 600; font-size: 1rem;
  @media (min-width: 768px) { font-size: 1.125rem; }
`,u7=w.div`
  font-size: 0.875rem; color: #6b7280;
  @media (min-width: 768px) { font-size: 1rem; }
`,s7=w.div`
  font-size: 0.875rem; margin-top: 0.5rem;
  @media (min-width: 768px) { font-size: 1rem; }
`,c7=w.div`
  font-size: 0.875rem; margin-top: 0.5rem; color: #6b7280;
  @media (min-width: 768px) { font-size: 1rem; }
`,f7=w.div` display: flex; gap: 0.5rem; margin-bottom: 1.5rem; `,d7=w.button`
  flex: 1; background: #3b82f6; color: #fff; font-weight: 600;
  padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;
  @media (min-width: 768px) { flex: initial; padding: 0.5rem 2rem; font-size: 1rem; }
`,p7=w.button`
  flex: 1; border: 1px solid #d1d5db; font-weight: 600;
  padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; position: relative;
  @media (min-width: 768px) { flex: initial; padding: 0.5rem 2rem; font-size: 1rem; }
  &[data-joined="true"] {
    background: #10b9810f; border-color: #10b981; color: #065f46;
  }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,h7=w.button`
  border: 1px solid #d1d5db; padding: 0.25rem 1rem; border-radius: 0.5rem;
`,m7=w.div`
  display: ${({hidden:a})=>a?"none":"flex"};
  align-items: center; justify-content: space-between;
  gap: 0.75rem; padding: 0.75rem 1rem; border: 1px dashed #d1d5db;
  border-radius: 12px; background: #f9fafb; color: #111827; margin-bottom: 1rem;
`,g7=w.div`
  font-size: 0.9rem; display: flex; align-items: center; gap: 8px;
  svg { flex-shrink: 0; }
`,v7=w.button`
  border: 1px solid #111827; background: #111827; color: #fff;
  border-radius: 10px; padding: 0.5rem 0.85rem; font-weight: 700; font-size: 0.875rem;
`,y7=w.div` margin-bottom: 1.5rem; `,b7=w.div`
  display: flex; gap: 1rem; overflow-x: auto; padding-bottom: 0.5rem;
`,x7=w.div`
  display: flex; flex-direction: column; align-items: center; min-width: fit-content; cursor: pointer; position: relative;
`,S7=w.div`
  position: absolute; inset: 0; border-radius: 9999px; display: flex; align-items: center; justify-content: center;
  background: rgba(17,24,39,0.55); color: #fff; font-weight: 700; font-size: 0.75rem;
  backdrop-filter: blur(2px);
`,w7=w.div`
  width: 4rem; height: 4rem; border-radius: 50%; padding: 0.125rem;
  background: linear-gradient(to top right, #a78bfa, #f472b6, #fb923c);
  @media (min-width: 768px) { width: 5rem; height: 5rem; }
  @media (min-width: 1024px) { width: 6rem; height: 6rem; }
  filter: ${({$locked:a})=>a?"grayscale(0.8)":"none"};
  opacity: ${({$locked:a})=>a?.6:1};
`,E7=w.div`
  width: 100%; height: 100%; border-radius: 50%; padding: 0.25rem; background: #fff;
  display: flex; align-items: center; justify-content: center;
`,C7=w.div`
  font-size: 0.75rem; color: #374151; text-align: center; margin-top: 0.25rem;
  max-width: 4.375rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  @media (min-width: 768px) { font-size: 0.875rem; max-width: 5.625rem; }
  opacity: ${({$locked:a})=>a?.6:1};
`,T7=w.div` display: flex; border-top: 1px solid #e5e7eb; `,Xm=w.button`
  flex: 1; padding: 0.75rem 0; display: flex; justify-content: center; align-items: center; gap: 0.5rem;
  border-top: 2px solid ${({active:a})=>a?"#111827":"transparent"};
  color: ${({active:a})=>a?"#111827":"#9ca3af"};
`,j7=w.div`
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.25rem;
  @media (min-width: 768px) { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.5rem; }
  @media (min-width: 1024px) { grid-template-columns: repeat(5, minmax(0, 1fr)); }
  @media (min-width: 1280px) { grid-template-columns: repeat(6, minmax(0, 1fr)); }
`,R7=w.div`
  aspect-ratio: 1 / 1; background: #f3f4f6; display: flex; justify-content: center; align-items: center; position: relative;
  filter: ${({$locked:a})=>a?"blur(2px)":"none"};
  overflow: hidden;
`,z7=w.div`
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  background: rgba(17,24,39,0.45); color: #fff; font-weight: 800; font-size: 0.8rem;
`,O7=w.button`
  margin: 0.75rem auto 1.25rem; display: ${({hidden:a})=>a?"none":"block"};
  background: #111827; color: #fff; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 700;
`,M7=w.div`
  position: fixed; inset: 0; background: rgba(17, 24, 39, 0.6);
  display: flex; align-items: center; justify-content: center; z-index: 50;
`,_7=w.div`
  width: min(96vw, 720px); background: #ffffff; border-radius: 16px;
  box-shadow: 0 20px 48px rgba(0,0,0,0.18); overflow: hidden;
`,A7=w.div`
  display: flex; justify-content: space-between; align-items: center;
  padding: 1rem 1.25rem; border-bottom: 1px solid #f3f4f6;
`,D7=w.h3`
  margin: 0; font-size: 1rem; font-weight: 700; color: #111827;
`,N7=w.button`
  border: 1px solid #e5e7eb; background: #fff; border-radius: 8px; padding: 0.25rem;
`,k7=w.div`
  padding: 1rem; display: grid; gap: 1rem;
  @media (min-width: 768px) { grid-template-columns: repeat(3, 1fr); }
`,L7=w.button`
  border: 1px solid ${({$active:a})=>a?"#2563eb":"#e5e7eb"};
  border-radius: 14px; padding: 1rem; text-align: left; background: ${({$active:a})=>a?"#eff6ff":"#fff"};
  display: grid; gap: 0.25rem; cursor: pointer;
  &:hover { border-color: #2563eb; }
  h4 { margin: 0; font-size: 1rem; font-weight: 700; color: #111827; }
  p { margin: 0; color: #6b7280; font-size: 0.875rem; }
  strong { font-size: 1.25rem; }
`,$7=w.div`
  border-top: 1px solid #f3f4f6; padding: 0.75rem 1.25rem; display: flex; gap: 0.5rem; justify-content: flex-end;
`,B7=w.button`
  background: #111827; color: #fff; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 700;
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,U7=w.button`
  border: 1px solid #d1d5db; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 600; background: #fff;
`;function H7(){const a=_f(),[l,u]=b.useState(!1),[o,c]=b.useState("basic"),[f,h]=b.useState(!1),[y,g]=b.useState(!1),m=3,x=3;b.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]),b.useEffect(()=>{const $=`joined:${ct?.id||ct?.name}`;localStorage.getItem($)==="true"&&g(!0)},[]),b.useEffect(()=>{const $=`joined:${ct?.id||ct?.name}`;localStorage.setItem($,y?"true":"false")},[y]);const S=$=>{if(!y&&$>=m){u(!0);return}$===0&&a("/instalearn/library")},E=()=>{y||u(!0)},D=async()=>{h(!0),await new Promise($=>setTimeout($,1500)),h(!1),g(!0),u(!1)},R=[{key:"basic",name:"Basic",price:"₹0",desc:"Demo access: 3 lessons"},{key:"pro",name:"Pro",price:"₹99",desc:"Monthly: full library"},{key:"team",name:"Team",price:"₹1,99",desc:"Up to 10 students"}],q=y;return d.jsxs(Ww,{children:[d.jsxs(Pw,{children:[d.jsxs(Iw,{children:[d.jsxs(e7,{children:[d.jsxs(t7,{children:[d.jsx(n7,{src:ct.avatar,alt:ct.name}),!y&&d.jsxs(a7,{"aria-hidden":"true",title:"Pro library locked",children:[d.jsx(Do,{size:12})," LOCKED"]})]}),d.jsxs(i7,{children:[d.jsxs(Mi,{children:[ct.concepts," ",d.jsx("span",{children:"concepts"})]}),d.jsxs(Mi,{children:[ct.students," ",d.jsx("span",{children:"students"})]}),d.jsxs(Mi,{children:[ct.learns," ",d.jsx("span",{children:"learns"})]})]})]}),d.jsxs(r7,{children:[d.jsxs(l7,{children:[d.jsxs(Mi,{children:[ct.concepts," ",d.jsx("span",{children:"concepts"})]}),d.jsxs(Mi,{children:[ct.students," ",d.jsx("span",{children:"students"})]}),d.jsxs(Mi,{children:[ct.learns," ",d.jsx("span",{children:"learns"})]})]}),d.jsx(o7,{children:ct.name}),d.jsx(u7,{children:ct.subject}),d.jsx(s7,{children:ct.bio}),d.jsxs(c7,{children:["🎓 ",ct.experience," years experience"]}),d.jsxs(f7,{children:[d.jsx(d7,{children:"Follow"}),d.jsx(p7,{onClick:E,disabled:f,"data-joined":y,"aria-pressed":y,"aria-label":y?"Joined":"Join",title:y?"You're in!":"Join this teacher",children:y?d.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[d.jsx(W4,{size:18})," Joined"]}):f?"Processing…":"Join"}),d.jsx(h7,{"aria-label":"More options",children:"▼"})]}),d.jsxs(m7,{hidden:q,role:"note","aria-live":"polite",children:[d.jsxs(g7,{children:[d.jsx(Do,{size:18})," Pro library locked — get full access to all concepts & posts."]}),d.jsx(v7,{onClick:()=>u(!0),"aria-label":"Unlock full library",children:"Unlock"})]})]})]}),d.jsx(y7,{children:d.jsx(b7,{children:ct.bookList.map(($,V)=>{const M=!y&&V>=m;return d.jsxs(x7,{onClick:()=>S(V),"aria-disabled":M,title:M?"Join to unlock":`Open ${$.title}`,children:[d.jsx(w7,{$locked:M,children:d.jsx(E7,{children:d.jsx($a,{size:24})})}),d.jsx(C7,{$locked:M,children:$.title}),!y&&M&&d.jsxs(S7,{children:[d.jsx(Do,{size:14,style:{marginRight:6}})," Locked"]})]},V)})})})]}),d.jsxs(T7,{children:[d.jsx(Xm,{active:!0,children:d.jsx(l6,{size:20})}),d.jsx(Xm,{children:d.jsx(K4,{size:20})})]}),d.jsx(j7,{"aria-label":"Teacher posts",children:Array(9).fill(null).map(($,V)=>{const M=!y&&V>=x;return d.jsxs(R7,{$locked:M,"aria-hidden":!1,children:[d.jsx($a,{size:24}),M&&d.jsxs(z7,{children:[d.jsx(Do,{size:16,style:{marginRight:6}})," Join to view"]})]},V)})}),d.jsx(O7,{hidden:y,onClick:()=>u(!0),"aria-label":"Unlock all posts",children:"Unlock entire library"}),l&&d.jsx(M7,{role:"dialog","aria-modal":"true","aria-labelledby":"pricing-title",children:d.jsxs(_7,{children:[d.jsxs(A7,{children:[d.jsx(D7,{id:"pricing-title",children:"Choose your plan"}),d.jsx(N7,{onClick:()=>u(!1),"aria-label":"Close pricing",children:d.jsx(d6,{size:18})})]}),d.jsx(k7,{children:R.map($=>d.jsxs(L7,{onClick:()=>c($.key),$active:o===$.key,"aria-pressed":o===$.key,children:[d.jsx("h4",{children:$.name}),d.jsx("strong",{children:$.price}),d.jsx("p",{children:$.desc})]},$.key))}),d.jsxs($7,{children:[d.jsx(U7,{onClick:()=>u(!1),children:"Not now"}),d.jsx(B7,{onClick:D,disabled:f,children:f?"Processing payment…":"Demo Pay & Join"})]})]})})]})}const q7=w.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--color-light, #f5f5f5);
`,Y7=w.aside`
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
`,G7=w.div`
  flex: 1;
  display: flex;
  width: 100%;

  @media (min-width: 1024px) {
    /* match LeftSidebar width exactly to avoid layout jump */
    margin-left: 246px;
  }
`,X7=w.main`
  flex: 1;
  width: 100%;
  padding-bottom: 60px;
  transition: ${a=>a.$isResizing?"none":"margin-right 0.2s ease"};
  will-change: margin-right;

  @media (min-width: 1024px) {
    padding-bottom: 0;
    margin-right: ${a=>`${a.$sidebarWidth}px`};
  }
`,V7=w.aside`
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
`,Q7=w.div`
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
`,K7=w.div`
  display: block;
  margin-bottom: 60px;

  @media (min-width: 1024px) {
    display: none;
  }
`,Z7=w.div`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (min-width: 1024px) {
    display: none;
  }
`;function J7(){const[a,l]=b.useState(360),[u,o]=b.useState(!1),c=b.useRef(null),f=350,h=600,y=g=>{g.preventDefault(),o(!0),c.current={startX:g.clientX,startWidth:a}};return b.useEffect(()=>{const g=(S,E,D)=>Math.min(Math.max(S,E),D),m=S=>{if(!u||!c.current)return;const{startX:E,startWidth:D}=c.current,R=E-S.clientX,q=g(D+R,f,h);l(q)},x=()=>{u&&(o(!1),c.current=null)};return u&&(document.addEventListener("mousemove",m),document.addEventListener("mouseup",x),document.body.style.cursor="ew-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",x),document.body.style.cursor="",document.body.style.userSelect=""}},[u]),d.jsxs(q7,{children:[d.jsx(Y7,{children:d.jsx(Ow,{})}),d.jsxs(G7,{children:[d.jsxs(X7,{$sidebarWidth:a,$isResizing:u,children:[d.jsx(K7,{children:d.jsx(Sw,{})}),d.jsxs(ix,{children:[d.jsx(ka,{path:"/instalearn",element:d.jsx(D6,{})}),d.jsx(ka,{path:"/instalearn/teacher",element:d.jsx(H7,{})}),d.jsx(ka,{path:"/instalearn/library",element:d.jsx(k4,{})}),d.jsx(ka,{path:"/instalearn/notifications",element:d.jsx(Mm,{})}),d.jsx(ka,{path:"/instalearn/more",element:d.jsx(Mm,{})}),d.jsx(ka,{path:"/instalearn/profile",element:d.jsx(fS,{})})]})]}),d.jsxs(V7,{$width:a,$isResizing:u,children:[d.jsx(Q7,{className:u?"active":"",onMouseDown:y,"aria-label":"Resize sidebar"}),d.jsx(Zw,{})]})]}),d.jsx(Z7,{children:d.jsx(Jw,{})})]})}hb.createRoot(document.getElementById("root")).render(d.jsx(Rx,{children:d.jsx(J7,{})}));
