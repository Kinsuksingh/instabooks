const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/react-BgSEXM9e.js","assets/mixin-D3UDm--6.js","assets/hls-Bm3F2dIq.js","assets/react-DO1VtiuO.js","assets/index-ScVq4Eua.js"])))=>i.map(i=>d[i]);
(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function o(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(c){if(c.ep)return;c.ep=!0;const f=o(c);fetch(c.href,f)}})();function tr(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Tc={exports:{}},Ll={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0;function O2(){if(X0)return Ll;X0=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function o(u,c,f){var h=null;if(f!==void 0&&(h=""+f),c.key!==void 0&&(h=""+c.key),"key"in c){f={};for(var y in c)y!=="key"&&(f[y]=c[y])}else f=c;return c=f.ref,{$$typeof:a,type:u,key:h,ref:c!==void 0?c:null,props:f}}return Ll.Fragment=l,Ll.jsx=o,Ll.jsxs=o,Ll}var V0;function z2(){return V0||(V0=1,Tc.exports=O2()),Tc.exports}var p=z2(),Cc={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function A2(){if(Q0)return pe;Q0=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),w=Symbol.iterator;function j(T){return T===null||typeof T!="object"?null:(T=w&&T[w]||T["@@iterator"],typeof T=="function"?T:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,X={};function Z(T,V,ie){this.props=T,this.context=V,this.refs=X,this.updater=ie||R}Z.prototype.isReactComponent={},Z.prototype.setState=function(T,V){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,V,"setState")},Z.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function A(){}A.prototype=Z.prototype;function H(T,V,ie){this.props=T,this.context=V,this.refs=X,this.updater=ie||R}var P=H.prototype=new A;P.constructor=H,q(P,Z.prototype),P.isPureReactComponent=!0;var k=Array.isArray;function M(){}var J={H:null,A:null,T:null,S:null},L=Object.prototype.hasOwnProperty;function G(T,V,ie){var ae=ie.ref;return{$$typeof:a,type:T,key:V,ref:ae!==void 0?ae:null,props:ie}}function le(T,V){return G(T.type,V,T.props)}function K(T){return typeof T=="object"&&T!==null&&T.$$typeof===a}function D(T){var V={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(ie){return V[ie]})}var ee=/\/+/g;function ne(T,V){return typeof T=="object"&&T!==null&&T.key!=null?D(""+T.key):V.toString(36)}function C(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(M,M):(T.status="pending",T.then(function(V){T.status==="pending"&&(T.status="fulfilled",T.value=V)},function(V){T.status==="pending"&&(T.status="rejected",T.reason=V)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function z(T,V,ie,ae,se){var he=typeof T;(he==="undefined"||he==="boolean")&&(T=null);var ye=!1;if(T===null)ye=!0;else switch(he){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(T.$$typeof){case a:case l:ye=!0;break;case S:return ye=T._init,z(ye(T._payload),V,ie,ae,se)}}if(ye)return se=se(T),ye=ae===""?"."+ne(T,0):ae,k(se)?(ie="",ye!=null&&(ie=ye.replace(ee,"$&/")+"/"),z(se,V,ie,"",function(wt){return wt})):se!=null&&(K(se)&&(se=le(se,ie+(se.key==null||T&&T.key===se.key?"":(""+se.key).replace(ee,"$&/")+"/")+ye)),V.push(se)),1;ye=0;var Ue=ae===""?".":ae+":";if(k(T))for(var Ce=0;Ce<T.length;Ce++)ae=T[Ce],he=Ue+ne(ae,Ce),ye+=z(ae,V,ie,he,se);else if(Ce=j(T),typeof Ce=="function")for(T=Ce.call(T),Ce=0;!(ae=T.next()).done;)ae=ae.value,he=Ue+ne(ae,Ce++),ye+=z(ae,V,ie,he,se);else if(he==="object"){if(typeof T.then=="function")return z(C(T),V,ie,ae,se);throw V=String(T),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return ye}function $(T,V,ie){if(T==null)return T;var ae=[],se=0;return z(T,ae,"","",function(he){return V.call(ie,he,se++)}),ae}function W(T){if(T._status===-1){var V=T._result;V=V(),V.then(function(ie){(T._status===0||T._status===-1)&&(T._status=1,T._result=ie)},function(ie){(T._status===0||T._status===-1)&&(T._status=2,T._result=ie)}),T._status===-1&&(T._status=0,T._result=V)}if(T._status===1)return T._result.default;throw T._result}var re=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},ce={map:$,forEach:function(T,V,ie){$(T,function(){V.apply(this,arguments)},ie)},count:function(T){var V=0;return $(T,function(){V++}),V},toArray:function(T){return $(T,function(V){return V})||[]},only:function(T){if(!K(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return pe.Activity=x,pe.Children=ce,pe.Component=Z,pe.Fragment=o,pe.Profiler=c,pe.PureComponent=H,pe.StrictMode=u,pe.Suspense=v,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,pe.__COMPILER_RUNTIME={__proto__:null,c:function(T){return J.H.useMemoCache(T)}},pe.cache=function(T){return function(){return T.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(T,V,ie){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var ae=q({},T.props),se=T.key;if(V!=null)for(he in V.key!==void 0&&(se=""+V.key),V)!L.call(V,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&V.ref===void 0||(ae[he]=V[he]);var he=arguments.length-2;if(he===1)ae.children=ie;else if(1<he){for(var ye=Array(he),Ue=0;Ue<he;Ue++)ye[Ue]=arguments[Ue+2];ae.children=ye}return G(T.type,se,ae)},pe.createContext=function(T){return T={$$typeof:h,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:f,_context:T},T},pe.createElement=function(T,V,ie){var ae,se={},he=null;if(V!=null)for(ae in V.key!==void 0&&(he=""+V.key),V)L.call(V,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(se[ae]=V[ae]);var ye=arguments.length-2;if(ye===1)se.children=ie;else if(1<ye){for(var Ue=Array(ye),Ce=0;Ce<ye;Ce++)Ue[Ce]=arguments[Ce+2];se.children=Ue}if(T&&T.defaultProps)for(ae in ye=T.defaultProps,ye)se[ae]===void 0&&(se[ae]=ye[ae]);return G(T,he,se)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(T){return{$$typeof:y,render:T}},pe.isValidElement=K,pe.lazy=function(T){return{$$typeof:S,_payload:{_status:-1,_result:T},_init:W}},pe.memo=function(T,V){return{$$typeof:m,type:T,compare:V===void 0?null:V}},pe.startTransition=function(T){var V=J.T,ie={};J.T=ie;try{var ae=T(),se=J.S;se!==null&&se(ie,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(M,re)}catch(he){re(he)}finally{V!==null&&ie.types!==null&&(V.types=ie.types),J.T=V}},pe.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},pe.use=function(T){return J.H.use(T)},pe.useActionState=function(T,V,ie){return J.H.useActionState(T,V,ie)},pe.useCallback=function(T,V){return J.H.useCallback(T,V)},pe.useContext=function(T){return J.H.useContext(T)},pe.useDebugValue=function(){},pe.useDeferredValue=function(T,V){return J.H.useDeferredValue(T,V)},pe.useEffect=function(T,V){return J.H.useEffect(T,V)},pe.useEffectEvent=function(T){return J.H.useEffectEvent(T)},pe.useId=function(){return J.H.useId()},pe.useImperativeHandle=function(T,V,ie){return J.H.useImperativeHandle(T,V,ie)},pe.useInsertionEffect=function(T,V){return J.H.useInsertionEffect(T,V)},pe.useLayoutEffect=function(T,V){return J.H.useLayoutEffect(T,V)},pe.useMemo=function(T,V){return J.H.useMemo(T,V)},pe.useOptimistic=function(T,V){return J.H.useOptimistic(T,V)},pe.useReducer=function(T,V,ie){return J.H.useReducer(T,V,ie)},pe.useRef=function(T){return J.H.useRef(T)},pe.useState=function(T){return J.H.useState(T)},pe.useSyncExternalStore=function(T,V,ie){return J.H.useSyncExternalStore(T,V,ie)},pe.useTransition=function(){return J.H.useTransition()},pe.version="19.2.0",pe}var Z0;function pa(){return Z0||(Z0=1,Cc.exports=A2()),Cc.exports}var b=pa();const Te=tr(b);var Rc={exports:{}},kl={},_c={exports:{}},Oc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function j2(){return K0||(K0=1,(function(a){function l(z,$){var W=z.length;z.push($);e:for(;0<W;){var re=W-1>>>1,ce=z[re];if(0<c(ce,$))z[re]=$,z[W]=ce,W=re;else break e}}function o(z){return z.length===0?null:z[0]}function u(z){if(z.length===0)return null;var $=z[0],W=z.pop();if(W!==$){z[0]=W;e:for(var re=0,ce=z.length,T=ce>>>1;re<T;){var V=2*(re+1)-1,ie=z[V],ae=V+1,se=z[ae];if(0>c(ie,W))ae<ce&&0>c(se,ie)?(z[re]=se,z[ae]=W,re=ae):(z[re]=ie,z[V]=W,re=V);else if(ae<ce&&0>c(se,W))z[re]=se,z[ae]=W,re=ae;else break e}}return $}function c(z,$){var W=z.sortIndex-$.sortIndex;return W!==0?W:z.id-$.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var h=Date,y=h.now();a.unstable_now=function(){return h.now()-y}}var v=[],m=[],S=1,x=null,w=3,j=!1,R=!1,q=!1,X=!1,Z=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function P(z){for(var $=o(m);$!==null;){if($.callback===null)u(m);else if($.startTime<=z)u(m),$.sortIndex=$.expirationTime,l(v,$);else break;$=o(m)}}function k(z){if(q=!1,P(z),!R)if(o(v)!==null)R=!0,M||(M=!0,D());else{var $=o(m);$!==null&&C(k,$.startTime-z)}}var M=!1,J=-1,L=5,G=-1;function le(){return X?!0:!(a.unstable_now()-G<L)}function K(){if(X=!1,M){var z=a.unstable_now();G=z;var $=!0;try{e:{R=!1,q&&(q=!1,A(J),J=-1),j=!0;var W=w;try{t:{for(P(z),x=o(v);x!==null&&!(x.expirationTime>z&&le());){var re=x.callback;if(typeof re=="function"){x.callback=null,w=x.priorityLevel;var ce=re(x.expirationTime<=z);if(z=a.unstable_now(),typeof ce=="function"){x.callback=ce,P(z),$=!0;break t}x===o(v)&&u(v),P(z)}else u(v);x=o(v)}if(x!==null)$=!0;else{var T=o(m);T!==null&&C(k,T.startTime-z),$=!1}}break e}finally{x=null,w=W,j=!1}$=void 0}}finally{$?D():M=!1}}}var D;if(typeof H=="function")D=function(){H(K)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,ne=ee.port2;ee.port1.onmessage=K,D=function(){ne.postMessage(null)}}else D=function(){Z(K,0)};function C(z,$){J=Z(function(){z(a.unstable_now())},$)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return w},a.unstable_next=function(z){switch(w){case 1:case 2:case 3:var $=3;break;default:$=w}var W=w;w=$;try{return z()}finally{w=W}},a.unstable_requestPaint=function(){X=!0},a.unstable_runWithPriority=function(z,$){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var W=w;w=z;try{return $()}finally{w=W}},a.unstable_scheduleCallback=function(z,$,W){var re=a.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?re+W:re):W=re,z){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=W+ce,z={id:S++,callback:$,priorityLevel:z,startTime:W,expirationTime:ce,sortIndex:-1},W>re?(z.sortIndex=W,l(m,z),o(v)===null&&z===o(m)&&(q?(A(J),J=-1):q=!0,C(k,W-re))):(z.sortIndex=ce,l(v,z),R||j||(R=!0,M||(M=!0,D()))),z},a.unstable_shouldYield=le,a.unstable_wrapCallback=function(z){var $=w;return function(){var W=w;w=$;try{return z.apply(this,arguments)}finally{w=W}}}})(Oc)),Oc}var J0;function M2(){return J0||(J0=1,_c.exports=j2()),_c.exports}var zc={exports:{}},st={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0;function N2(){if(P0)return st;P0=1;var a=pa();function l(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)m+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var u={d:{f:o,r:function(){throw Error(l(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(v,m,S){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:v,containerInfo:m,implementation:S}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return st.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,st.createPortal=function(v,m){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(l(299));return f(v,m,null,S)},st.flushSync=function(v){var m=h.T,S=u.p;try{if(h.T=null,u.p=2,v)return v()}finally{h.T=m,u.p=S,u.d.f()}},st.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,u.d.C(v,m))},st.prefetchDNS=function(v){typeof v=="string"&&u.d.D(v)},st.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var S=m.as,x=y(S,m.crossOrigin),w=typeof m.integrity=="string"?m.integrity:void 0,j=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;S==="style"?u.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:w,fetchPriority:j}):S==="script"&&u.d.X(v,{crossOrigin:x,integrity:w,fetchPriority:j,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},st.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var S=y(m.as,m.crossOrigin);u.d.M(v,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&u.d.M(v)},st.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var S=m.as,x=y(S,m.crossOrigin);u.d.L(v,S,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},st.preloadModule=function(v,m){if(typeof v=="string")if(m){var S=y(m.as,m.crossOrigin);u.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else u.d.m(v)},st.requestFormReset=function(v){u.d.r(v)},st.unstable_batchedUpdates=function(v,m){return v(m)},st.useFormState=function(v,m,S){return h.H.useFormState(v,m,S)},st.useFormStatus=function(){return h.H.useHostTransitionStatus()},st.version="19.2.0",st}var W0;function m1(){if(W0)return zc.exports;W0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),zc.exports=N2(),zc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0;function D2(){if(F0)return kl;F0=1;var a=M2(),l=pa(),o=m1();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(f(e)!==e)throw Error(u(188))}function m(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return v(r),e;if(s===i)return v(r),t;s=s.sibling}throw Error(u(188))}if(n.return!==i.return)n=r,i=s;else{for(var d=!1,g=r.child;g;){if(g===n){d=!0,n=r,i=s;break}if(g===i){d=!0,i=r,n=s;break}g=g.sibling}if(!d){for(g=s.child;g;){if(g===n){d=!0,n=s,i=r;break}if(g===i){d=!0,i=s,n=r;break}g=g.sibling}if(!d)throw Error(u(189))}}if(n.alternate!==i)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function S(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,w=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),H=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),G=Symbol.for("react.activity"),le=Symbol.for("react.memo_cache_sentinel"),K=Symbol.iterator;function D(e){return e===null||typeof e!="object"?null:(e=K&&e[K]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Symbol.for("react.client.reference");function ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ee?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case Z:return"Profiler";case X:return"StrictMode";case k:return"Suspense";case M:return"SuspenseList";case G:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case H:return e.displayName||"Context";case A:return(e._context.displayName||"Context")+".Consumer";case P:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:ne(e.type)||"Memo";case L:t=e._payload,e=e._init;try{return ne(e(t))}catch{}}return null}var C=Array.isArray,z=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},re=[],ce=-1;function T(e){return{current:e}}function V(e){0>ce||(e.current=re[ce],re[ce]=null,ce--)}function ie(e,t){ce++,re[ce]=e.current,e.current=t}var ae=T(null),se=T(null),he=T(null),ye=T(null);function Ue(e,t){switch(ie(he,t),ie(se,e),ie(ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?h0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=h0(t),e=p0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(ae),ie(ae,e)}function Ce(){V(ae),V(se),V(he)}function wt(e){e.memoizedState!==null&&ie(ye,e);var t=ae.current,n=p0(t,e.type);t!==n&&(ie(se,e),ie(ae,n))}function Kt(e){se.current===e&&(V(ae),V(se)),ye.current===e&&(V(ye),jl._currentValue=W)}var dt,Ha;function kt(e){if(dt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);dt=t&&t[1]||"",Ha=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+dt+e+Ha}var He=!1;function Ba(e,t){if(!e||He)return"";He=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var te=function(){throw Error()};if(Object.defineProperty(te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(te,[])}catch(Q){var Y=Q}Reflect.construct(e,[],te)}else{try{te.call()}catch(Q){Y=Q}e.call(te.prototype)}}else{try{throw Error()}catch(Q){Y=Q}(te=e())&&typeof te.catch=="function"&&te.catch(function(){})}}catch(Q){if(Q&&Y&&typeof Q.stack=="string")return[Q.stack,Y.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),d=s[0],g=s[1];if(d&&g){var E=d.split(`
`),B=g.split(`
`);for(r=i=0;i<E.length&&!E[i].includes("DetermineComponentFrameRoot");)i++;for(;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;if(i===E.length||r===B.length)for(i=E.length-1,r=B.length-1;1<=i&&0<=r&&E[i]!==B[r];)r--;for(;1<=i&&0<=r;i--,r--)if(E[i]!==B[r]){if(i!==1||r!==1)do if(i--,r--,0>r||E[i]!==B[r]){var F=`
`+E[i].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=i&&0<=r);break}}}finally{He=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?kt(n):""}function Yi(e,t){switch(e.tag){case 26:case 27:case 5:return kt(e.type);case 16:return kt("Lazy");case 13:return e.child!==t&&t!==null?kt("Suspense Fallback"):kt("Suspense");case 19:return kt("SuspenseList");case 0:case 15:return Ba(e.type,!1);case 11:return Ba(e.type.render,!1);case 1:return Ba(e.type,!0);case 31:return kt("Activity");default:return""}}function Xf(e){try{var t="",n=null;do t+=Yi(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var oo=Object.prototype.hasOwnProperty,so=a.unstable_scheduleCallback,co=a.unstable_cancelCallback,rg=a.unstable_shouldYield,ug=a.unstable_requestPaint,Et=a.unstable_now,og=a.unstable_getCurrentPriorityLevel,Vf=a.unstable_ImmediatePriority,Qf=a.unstable_UserBlockingPriority,rr=a.unstable_NormalPriority,sg=a.unstable_LowPriority,Zf=a.unstable_IdlePriority,cg=a.log,fg=a.unstable_setDisableYieldValue,Gi=null,Tt=null;function Bn(e){if(typeof cg=="function"&&fg(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(Gi,e)}catch{}}var Ct=Math.clz32?Math.clz32:pg,dg=Math.log,hg=Math.LN2;function pg(e){return e>>>=0,e===0?32:31-(dg(e)/hg|0)|0}var ur=256,or=262144,sr=4194304;function ma(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function cr(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var r=0,s=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var g=i&134217727;return g!==0?(i=g&~s,i!==0?r=ma(i):(d&=g,d!==0?r=ma(d):n||(n=g&~e,n!==0&&(r=ma(n))))):(g=i&~s,g!==0?r=ma(g):d!==0?r=ma(d):n||(n=i&~e,n!==0&&(r=ma(n)))),r===0?0:t!==0&&t!==r&&(t&s)===0&&(s=r&-r,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:r}function Xi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function mg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kf(){var e=sr;return sr<<=1,(sr&62914560)===0&&(sr=4194304),e}function fo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vg(e,t,n,i,r,s){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,E=e.expirationTimes,B=e.hiddenUpdates;for(n=d&~n;0<n;){var F=31-Ct(n),te=1<<F;g[F]=0,E[F]=-1;var Y=B[F];if(Y!==null)for(B[F]=null,F=0;F<Y.length;F++){var Q=Y[F];Q!==null&&(Q.lane&=-536870913)}n&=~te}i!==0&&Jf(e,i,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(d&~t))}function Jf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Ct(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Pf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Ct(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}function Wf(e,t){var n=t&-t;return n=(n&42)!==0?1:ho(n),(n&(e.suspendedLanes|t))!==0?0:n}function ho(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function po(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ff(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:U0(e.type))}function If(e,t){var n=$.p;try{return $.p=e,t()}finally{$.p=n}}var $n=Math.random().toString(36).slice(2),it="__reactFiber$"+$n,pt="__reactProps$"+$n,$a="__reactContainer$"+$n,mo="__reactEvents$"+$n,gg="__reactListeners$"+$n,yg="__reactHandles$"+$n,ed="__reactResources$"+$n,Qi="__reactMarker$"+$n;function vo(e){delete e[it],delete e[pt],delete e[mo],delete e[gg],delete e[yg]}function qa(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$a]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=S0(e);e!==null;){if(n=e[it])return n;e=S0(e)}return t}e=n,n=e.parentNode}return null}function Ya(e){if(e=e[it]||e[$a]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Zi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Ga(e){var t=e[ed];return t||(t=e[ed]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[Qi]=!0}var td=new Set,nd={};function va(e,t){Xa(e,t),Xa(e+"Capture",t)}function Xa(e,t){for(nd[e]=t,e=0;e<t.length;e++)td.add(t[e])}var bg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ad={},id={};function xg(e){return oo.call(id,e)?!0:oo.call(ad,e)?!1:bg.test(e)?id[e]=!0:(ad[e]=!0,!1)}function fr(e,t,n){if(xg(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function dr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function dn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ld(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Sg(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(d){n=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function go(e){if(!e._valueTracker){var t=ld(e)?"checked":"value";e._valueTracker=Sg(e,t,""+e[t])}}function rd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=ld(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function hr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var wg=/[\n"\\]/g;function Ht(e){return e.replace(wg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function yo(e,t,n,i,r,s,d,g){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ut(t)):e.value!==""+Ut(t)&&(e.value=""+Ut(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?bo(e,d,Ut(t)):n!=null?bo(e,d,Ut(n)):i!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Ut(g):e.removeAttribute("name")}function ud(e,t,n,i,r,s,d,g){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){go(e);return}n=n!=null?""+Ut(n):"",t=t!=null?""+Ut(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=g?e.checked:!!i,e.defaultChecked=!!i,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),go(e)}function bo(e,t,n){t==="number"&&hr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Va(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function od(e,t,n){if(t!=null&&(t=""+Ut(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ut(n):""}function sd(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(u(92));if(C(i)){if(1<i.length)throw Error(u(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Ut(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),go(e)}function Qa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Eg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cd(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Eg.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function fd(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in t)i=t[r],t.hasOwnProperty(r)&&n[r]!==i&&cd(e,r,i)}else for(var s in t)t.hasOwnProperty(s)&&cd(e,s,t[s])}function xo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pr(e){return Cg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function hn(){}var So=null;function wo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Za=null,Ka=null;function dd(e){var t=Ya(e);if(t&&(e=t.stateNode)){var n=e[pt]||null;e:switch(e=t.stateNode,t.type){case"input":if(yo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ht(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=i[pt]||null;if(!r)throw Error(u(90));yo(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&rd(i)}break e;case"textarea":od(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Va(e,!!n.multiple,t,!1)}}}var Eo=!1;function hd(e,t,n){if(Eo)return e(t,n);Eo=!0;try{var i=e(t);return i}finally{if(Eo=!1,(Za!==null||Ka!==null)&&(tu(),Za&&(t=Za,e=Ka,Ka=Za=null,dd(t),e)))for(t=0;t<e.length;t++)dd(e[t])}}function Ki(e,t){var n=e.stateNode;if(n===null)return null;var i=n[pt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),To=!1;if(pn)try{var Ji={};Object.defineProperty(Ji,"passive",{get:function(){To=!0}}),window.addEventListener("test",Ji,Ji),window.removeEventListener("test",Ji,Ji)}catch{To=!1}var qn=null,Co=null,mr=null;function pd(){if(mr)return mr;var e,t=Co,n=t.length,i,r="value"in qn?qn.value:qn.textContent,s=r.length;for(e=0;e<n&&t[e]===r[e];e++);var d=n-e;for(i=1;i<=d&&t[n-i]===r[s-i];i++);return mr=r.slice(e,1<i?1-i:void 0)}function vr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gr(){return!0}function md(){return!1}function mt(e){function t(n,i,r,s,d){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(s):s[g]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?gr:md,this.isPropagationStopped=md,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gr)},persist:function(){},isPersistent:gr}),t}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yr=mt(ga),Pi=x({},ga,{view:0,detail:0}),Rg=mt(Pi),Ro,_o,Wi,br=x({},Pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wi&&(Wi&&e.type==="mousemove"?(Ro=e.screenX-Wi.screenX,_o=e.screenY-Wi.screenY):_o=Ro=0,Wi=e),Ro)},movementY:function(e){return"movementY"in e?e.movementY:_o}}),vd=mt(br),_g=x({},br,{dataTransfer:0}),Og=mt(_g),zg=x({},Pi,{relatedTarget:0}),Oo=mt(zg),Ag=x({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),jg=mt(Ag),Mg=x({},ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ng=mt(Mg),Dg=x({},ga,{data:0}),gd=mt(Dg),Lg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ug[e])?!!t[e]:!1}function zo(){return Hg}var Bg=x({},Pi,{key:function(e){if(e.key){var t=Lg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zo,charCode:function(e){return e.type==="keypress"?vr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$g=mt(Bg),qg=x({},br,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yd=mt(qg),Yg=x({},Pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zo}),Gg=mt(Yg),Xg=x({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vg=mt(Xg),Qg=x({},br,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zg=mt(Qg),Kg=x({},ga,{newState:0,oldState:0}),Jg=mt(Kg),Pg=[9,13,27,32],Ao=pn&&"CompositionEvent"in window,Fi=null;pn&&"documentMode"in document&&(Fi=document.documentMode);var Wg=pn&&"TextEvent"in window&&!Fi,bd=pn&&(!Ao||Fi&&8<Fi&&11>=Fi),xd=" ",Sd=!1;function wd(e,t){switch(e){case"keyup":return Pg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ed(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ja=!1;function Fg(e,t){switch(e){case"compositionend":return Ed(t);case"keypress":return t.which!==32?null:(Sd=!0,xd);case"textInput":return e=t.data,e===xd&&Sd?null:e;default:return null}}function Ig(e,t){if(Ja)return e==="compositionend"||!Ao&&wd(e,t)?(e=pd(),mr=Co=qn=null,Ja=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bd&&t.locale!=="ko"?null:t.data;default:return null}}var ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Td(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ey[e.type]:t==="textarea"}function Cd(e,t,n,i){Za?Ka?Ka.push(i):Ka=[i]:Za=i,t=ou(t,"onChange"),0<t.length&&(n=new yr("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Ii=null,el=null;function ty(e){u0(e,0)}function xr(e){var t=Zi(e);if(rd(t))return e}function Rd(e,t){if(e==="change")return t}var _d=!1;if(pn){var jo;if(pn){var Mo="oninput"in document;if(!Mo){var Od=document.createElement("div");Od.setAttribute("oninput","return;"),Mo=typeof Od.oninput=="function"}jo=Mo}else jo=!1;_d=jo&&(!document.documentMode||9<document.documentMode)}function zd(){Ii&&(Ii.detachEvent("onpropertychange",Ad),el=Ii=null)}function Ad(e){if(e.propertyName==="value"&&xr(el)){var t=[];Cd(t,el,e,wo(e)),hd(ty,t)}}function ny(e,t,n){e==="focusin"?(zd(),Ii=t,el=n,Ii.attachEvent("onpropertychange",Ad)):e==="focusout"&&zd()}function ay(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xr(el)}function iy(e,t){if(e==="click")return xr(t)}function ly(e,t){if(e==="input"||e==="change")return xr(t)}function ry(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:ry;function tl(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!oo.call(t,r)||!Rt(e[r],t[r]))return!1}return!0}function jd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Md(e,t){var n=jd(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jd(n)}}function Nd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=hr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=hr(e.document)}return t}function No(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var uy=pn&&"documentMode"in document&&11>=document.documentMode,Pa=null,Do=null,nl=null,Lo=!1;function Ld(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lo||Pa==null||Pa!==hr(i)||(i=Pa,"selectionStart"in i&&No(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),nl&&tl(nl,i)||(nl=i,i=ou(Do,"onSelect"),0<i.length&&(t=new yr("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Pa)))}function ya(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wa={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionrun:ya("Transition","TransitionRun"),transitionstart:ya("Transition","TransitionStart"),transitioncancel:ya("Transition","TransitionCancel"),transitionend:ya("Transition","TransitionEnd")},ko={},kd={};pn&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete Wa.animationend.animation,delete Wa.animationiteration.animation,delete Wa.animationstart.animation),"TransitionEvent"in window||delete Wa.transitionend.transition);function ba(e){if(ko[e])return ko[e];if(!Wa[e])return e;var t=Wa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in kd)return ko[e]=t[n];return e}var Ud=ba("animationend"),Hd=ba("animationiteration"),Bd=ba("animationstart"),oy=ba("transitionrun"),sy=ba("transitionstart"),cy=ba("transitioncancel"),$d=ba("transitionend"),qd=new Map,Uo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uo.push("scrollEnd");function Jt(e,t){qd.set(e,t),va(t,[e])}var Sr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Bt=[],Fa=0,Ho=0;function wr(){for(var e=Fa,t=Ho=Fa=0;t<e;){var n=Bt[t];Bt[t++]=null;var i=Bt[t];Bt[t++]=null;var r=Bt[t];Bt[t++]=null;var s=Bt[t];if(Bt[t++]=null,i!==null&&r!==null){var d=i.pending;d===null?r.next=r:(r.next=d.next,d.next=r),i.pending=r}s!==0&&Yd(n,r,s)}}function Er(e,t,n,i){Bt[Fa++]=e,Bt[Fa++]=t,Bt[Fa++]=n,Bt[Fa++]=i,Ho|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Bo(e,t,n,i){return Er(e,t,n,i),Tr(e)}function xa(e,t){return Er(e,null,null,t),Tr(e)}function Yd(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var r=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&t!==null&&(r=31-Ct(n),e=s.hiddenUpdates,i=e[r],i===null?e[r]=[t]:i.push(t),t.lane=n|536870912),s):null}function Tr(e){if(50<Tl)throw Tl=0,Ks=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ia={};function fy(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(e,t,n,i){return new fy(e,t,n,i)}function $o(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mn(e,t){var n=e.alternate;return n===null?(n=_t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Gd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Cr(e,t,n,i,r,s){var d=0;if(i=e,typeof e=="function")$o(e)&&(d=1);else if(typeof e=="string")d=v2(e,n,ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case G:return e=_t(31,n,t,r),e.elementType=G,e.lanes=s,e;case q:return Sa(n.children,r,s,t);case X:d=8,r|=24;break;case Z:return e=_t(12,n,t,r|2),e.elementType=Z,e.lanes=s,e;case k:return e=_t(13,n,t,r),e.elementType=k,e.lanes=s,e;case M:return e=_t(19,n,t,r),e.elementType=M,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:d=10;break e;case A:d=9;break e;case P:d=11;break e;case J:d=14;break e;case L:d=16,i=null;break e}d=29,n=Error(u(130,e===null?"null":typeof e,"")),i=null}return t=_t(d,n,t,r),t.elementType=e,t.type=i,t.lanes=s,t}function Sa(e,t,n,i){return e=_t(7,e,i,t),e.lanes=n,e}function qo(e,t,n){return e=_t(6,e,null,t),e.lanes=n,e}function Xd(e){var t=_t(18,null,null,0);return t.stateNode=e,t}function Yo(e,t,n){return t=_t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Vd=new WeakMap;function $t(e,t){if(typeof e=="object"&&e!==null){var n=Vd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Xf(t)},Vd.set(e,t),t)}return{value:e,source:t,stack:Xf(t)}}var ei=[],ti=0,Rr=null,al=0,qt=[],Yt=0,Yn=null,tn=1,nn="";function vn(e,t){ei[ti++]=al,ei[ti++]=Rr,Rr=e,al=t}function Qd(e,t,n){qt[Yt++]=tn,qt[Yt++]=nn,qt[Yt++]=Yn,Yn=e;var i=tn;e=nn;var r=32-Ct(i)-1;i&=~(1<<r),n+=1;var s=32-Ct(t)+r;if(30<s){var d=r-r%5;s=(i&(1<<d)-1).toString(32),i>>=d,r-=d,tn=1<<32-Ct(t)+r|n<<r|i,nn=s+e}else tn=1<<s|n<<r|i,nn=e}function Go(e){e.return!==null&&(vn(e,1),Qd(e,1,0))}function Xo(e){for(;e===Rr;)Rr=ei[--ti],ei[ti]=null,al=ei[--ti],ei[ti]=null;for(;e===Yn;)Yn=qt[--Yt],qt[Yt]=null,nn=qt[--Yt],qt[Yt]=null,tn=qt[--Yt],qt[Yt]=null}function Zd(e,t){qt[Yt++]=tn,qt[Yt++]=nn,qt[Yt++]=Yn,tn=t.id,nn=t.overflow,Yn=e}var lt=null,Be=null,Ee=!1,Gn=null,Gt=!1,Vo=Error(u(519));function Xn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw il($t(t,e)),Vo}function Kd(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[it]=e,t[pt]=i,n){case"dialog":xe("cancel",t),xe("close",t);break;case"iframe":case"object":case"embed":xe("load",t);break;case"video":case"audio":for(n=0;n<Rl.length;n++)xe(Rl[n],t);break;case"source":xe("error",t);break;case"img":case"image":case"link":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"input":xe("invalid",t),ud(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":xe("invalid",t);break;case"textarea":xe("invalid",t),sd(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||f0(t.textContent,n)?(i.popover!=null&&(xe("beforetoggle",t),xe("toggle",t)),i.onScroll!=null&&xe("scroll",t),i.onScrollEnd!=null&&xe("scrollend",t),i.onClick!=null&&(t.onclick=hn),t=!0):t=!1,t||Xn(e,!0)}function Jd(e){for(lt=e.return;lt;)switch(lt.tag){case 5:case 31:case 13:Gt=!1;return;case 27:case 3:Gt=!0;return;default:lt=lt.return}}function ni(e){if(e!==lt)return!1;if(!Ee)return Jd(e),Ee=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||sc(e.type,e.memoizedProps)),n=!n),n&&Be&&Xn(e),Jd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Be=x0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Be=x0(e)}else t===27?(t=Be,ia(e.type)?(e=pc,pc=null,Be=e):Be=t):Be=lt?Vt(e.stateNode.nextSibling):null;return!0}function wa(){Be=lt=null,Ee=!1}function Qo(){var e=Gn;return e!==null&&(bt===null?bt=e:bt.push.apply(bt,e),Gn=null),e}function il(e){Gn===null?Gn=[e]:Gn.push(e)}var Zo=T(null),Ea=null,gn=null;function Vn(e,t,n){ie(Zo,t._currentValue),t._currentValue=n}function yn(e){e._currentValue=Zo.current,V(Zo)}function Ko(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Jo(e,t,n,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var d=r.child;s=s.firstContext;e:for(;s!==null;){var g=s;s=r;for(var E=0;E<t.length;E++)if(g.context===t[E]){s.lanes|=n,g=s.alternate,g!==null&&(g.lanes|=n),Ko(s.return,n,e),i||(d=null);break e}s=g.next}}else if(r.tag===18){if(d=r.return,d===null)throw Error(u(341));d.lanes|=n,s=d.alternate,s!==null&&(s.lanes|=n),Ko(d,n,e),d=null}else d=r.child;if(d!==null)d.return=r;else for(d=r;d!==null;){if(d===e){d=null;break}if(r=d.sibling,r!==null){r.return=d.return,d=r;break}d=d.return}r=d}}function ai(e,t,n,i){e=null;for(var r=t,s=!1;r!==null;){if(!s){if((r.flags&524288)!==0)s=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var d=r.alternate;if(d===null)throw Error(u(387));if(d=d.memoizedProps,d!==null){var g=r.type;Rt(r.pendingProps.value,d.value)||(e!==null?e.push(g):e=[g])}}else if(r===ye.current){if(d=r.alternate,d===null)throw Error(u(387));d.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(jl):e=[jl])}r=r.return}e!==null&&Jo(t,e,n,i),t.flags|=262144}function _r(e){for(e=e.firstContext;e!==null;){if(!Rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ta(e){Ea=e,gn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rt(e){return Pd(Ea,e)}function Or(e,t){return Ea===null&&Ta(e),Pd(e,t)}function Pd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},gn===null){if(e===null)throw Error(u(308));gn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else gn=gn.next=t;return n}var dy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},hy=a.unstable_scheduleCallback,py=a.unstable_NormalPriority,Ke={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Po(){return{controller:new dy,data:new Map,refCount:0}}function ll(e){e.refCount--,e.refCount===0&&hy(py,function(){e.controller.abort()})}var rl=null,Wo=0,ii=0,li=null;function my(e,t){if(rl===null){var n=rl=[];Wo=0,ii=ec(),li={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Wo++,t.then(Wd,Wd),t}function Wd(){if(--Wo===0&&rl!==null){li!==null&&(li.status="fulfilled");var e=rl;rl=null,ii=0,li=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function vy(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(i.status="rejected",i.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),i}var Fd=z.S;z.S=function(e,t){Lp=Et(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&my(e,t),Fd!==null&&Fd(e,t)};var Ca=T(null);function Fo(){var e=Ca.current;return e!==null?e:Le.pooledCache}function zr(e,t){t===null?ie(Ca,Ca.current):ie(Ca,t.pool)}function Id(){var e=Fo();return e===null?null:{parent:Ke._currentValue,pool:e}}var ri=Error(u(460)),Io=Error(u(474)),Ar=Error(u(542)),jr={then:function(){}};function eh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function th(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(hn,hn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ah(e),e;default:if(typeof t.status=="string")t.then(hn,hn);else{if(e=Le,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=i}},function(i){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ah(e),e}throw _a=t,ri}}function Ra(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(_a=n,ri):n}}var _a=null;function nh(){if(_a===null)throw Error(u(459));var e=_a;return _a=null,e}function ah(e){if(e===ri||e===Ar)throw Error(u(483))}var ui=null,ul=0;function Mr(e){var t=ul;return ul+=1,ui===null&&(ui=[]),th(ui,e,t)}function ol(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Nr(e,t){throw t.$$typeof===w?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ih(e){function t(N,_){if(e){var U=N.deletions;U===null?(N.deletions=[_],N.flags|=16):U.push(_)}}function n(N,_){if(!e)return null;for(;_!==null;)t(N,_),_=_.sibling;return null}function i(N){for(var _=new Map;N!==null;)N.key!==null?_.set(N.key,N):_.set(N.index,N),N=N.sibling;return _}function r(N,_){return N=mn(N,_),N.index=0,N.sibling=null,N}function s(N,_,U){return N.index=U,e?(U=N.alternate,U!==null?(U=U.index,U<_?(N.flags|=67108866,_):U):(N.flags|=67108866,_)):(N.flags|=1048576,_)}function d(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function g(N,_,U,I){return _===null||_.tag!==6?(_=qo(U,N.mode,I),_.return=N,_):(_=r(_,U),_.return=N,_)}function E(N,_,U,I){var fe=U.type;return fe===q?F(N,_,U.props.children,I,U.key):_!==null&&(_.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===L&&Ra(fe)===_.type)?(_=r(_,U.props),ol(_,U),_.return=N,_):(_=Cr(U.type,U.key,U.props,null,N.mode,I),ol(_,U),_.return=N,_)}function B(N,_,U,I){return _===null||_.tag!==4||_.stateNode.containerInfo!==U.containerInfo||_.stateNode.implementation!==U.implementation?(_=Yo(U,N.mode,I),_.return=N,_):(_=r(_,U.children||[]),_.return=N,_)}function F(N,_,U,I,fe){return _===null||_.tag!==7?(_=Sa(U,N.mode,I,fe),_.return=N,_):(_=r(_,U),_.return=N,_)}function te(N,_,U){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=qo(""+_,N.mode,U),_.return=N,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case j:return U=Cr(_.type,_.key,_.props,null,N.mode,U),ol(U,_),U.return=N,U;case R:return _=Yo(_,N.mode,U),_.return=N,_;case L:return _=Ra(_),te(N,_,U)}if(C(_)||D(_))return _=Sa(_,N.mode,U,null),_.return=N,_;if(typeof _.then=="function")return te(N,Mr(_),U);if(_.$$typeof===H)return te(N,Or(N,_),U);Nr(N,_)}return null}function Y(N,_,U,I){var fe=_!==null?_.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return fe!==null?null:g(N,_,""+U,I);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case j:return U.key===fe?E(N,_,U,I):null;case R:return U.key===fe?B(N,_,U,I):null;case L:return U=Ra(U),Y(N,_,U,I)}if(C(U)||D(U))return fe!==null?null:F(N,_,U,I,null);if(typeof U.then=="function")return Y(N,_,Mr(U),I);if(U.$$typeof===H)return Y(N,_,Or(N,U),I);Nr(N,U)}return null}function Q(N,_,U,I,fe){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return N=N.get(U)||null,g(_,N,""+I,fe);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case j:return N=N.get(I.key===null?U:I.key)||null,E(_,N,I,fe);case R:return N=N.get(I.key===null?U:I.key)||null,B(_,N,I,fe);case L:return I=Ra(I),Q(N,_,U,I,fe)}if(C(I)||D(I))return N=N.get(U)||null,F(_,N,I,fe,null);if(typeof I.then=="function")return Q(N,_,U,Mr(I),fe);if(I.$$typeof===H)return Q(N,_,U,Or(_,I),fe);Nr(_,I)}return null}function ue(N,_,U,I){for(var fe=null,Re=null,oe=_,ve=_=0,we=null;oe!==null&&ve<U.length;ve++){oe.index>ve?(we=oe,oe=null):we=oe.sibling;var _e=Y(N,oe,U[ve],I);if(_e===null){oe===null&&(oe=we);break}e&&oe&&_e.alternate===null&&t(N,oe),_=s(_e,_,ve),Re===null?fe=_e:Re.sibling=_e,Re=_e,oe=we}if(ve===U.length)return n(N,oe),Ee&&vn(N,ve),fe;if(oe===null){for(;ve<U.length;ve++)oe=te(N,U[ve],I),oe!==null&&(_=s(oe,_,ve),Re===null?fe=oe:Re.sibling=oe,Re=oe);return Ee&&vn(N,ve),fe}for(oe=i(oe);ve<U.length;ve++)we=Q(oe,N,ve,U[ve],I),we!==null&&(e&&we.alternate!==null&&oe.delete(we.key===null?ve:we.key),_=s(we,_,ve),Re===null?fe=we:Re.sibling=we,Re=we);return e&&oe.forEach(function(sa){return t(N,sa)}),Ee&&vn(N,ve),fe}function de(N,_,U,I){if(U==null)throw Error(u(151));for(var fe=null,Re=null,oe=_,ve=_=0,we=null,_e=U.next();oe!==null&&!_e.done;ve++,_e=U.next()){oe.index>ve?(we=oe,oe=null):we=oe.sibling;var sa=Y(N,oe,_e.value,I);if(sa===null){oe===null&&(oe=we);break}e&&oe&&sa.alternate===null&&t(N,oe),_=s(sa,_,ve),Re===null?fe=sa:Re.sibling=sa,Re=sa,oe=we}if(_e.done)return n(N,oe),Ee&&vn(N,ve),fe;if(oe===null){for(;!_e.done;ve++,_e=U.next())_e=te(N,_e.value,I),_e!==null&&(_=s(_e,_,ve),Re===null?fe=_e:Re.sibling=_e,Re=_e);return Ee&&vn(N,ve),fe}for(oe=i(oe);!_e.done;ve++,_e=U.next())_e=Q(oe,N,ve,_e.value,I),_e!==null&&(e&&_e.alternate!==null&&oe.delete(_e.key===null?ve:_e.key),_=s(_e,_,ve),Re===null?fe=_e:Re.sibling=_e,Re=_e);return e&&oe.forEach(function(_2){return t(N,_2)}),Ee&&vn(N,ve),fe}function De(N,_,U,I){if(typeof U=="object"&&U!==null&&U.type===q&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case j:e:{for(var fe=U.key;_!==null;){if(_.key===fe){if(fe=U.type,fe===q){if(_.tag===7){n(N,_.sibling),I=r(_,U.props.children),I.return=N,N=I;break e}}else if(_.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===L&&Ra(fe)===_.type){n(N,_.sibling),I=r(_,U.props),ol(I,U),I.return=N,N=I;break e}n(N,_);break}else t(N,_);_=_.sibling}U.type===q?(I=Sa(U.props.children,N.mode,I,U.key),I.return=N,N=I):(I=Cr(U.type,U.key,U.props,null,N.mode,I),ol(I,U),I.return=N,N=I)}return d(N);case R:e:{for(fe=U.key;_!==null;){if(_.key===fe)if(_.tag===4&&_.stateNode.containerInfo===U.containerInfo&&_.stateNode.implementation===U.implementation){n(N,_.sibling),I=r(_,U.children||[]),I.return=N,N=I;break e}else{n(N,_);break}else t(N,_);_=_.sibling}I=Yo(U,N.mode,I),I.return=N,N=I}return d(N);case L:return U=Ra(U),De(N,_,U,I)}if(C(U))return ue(N,_,U,I);if(D(U)){if(fe=D(U),typeof fe!="function")throw Error(u(150));return U=fe.call(U),de(N,_,U,I)}if(typeof U.then=="function")return De(N,_,Mr(U),I);if(U.$$typeof===H)return De(N,_,Or(N,U),I);Nr(N,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,_!==null&&_.tag===6?(n(N,_.sibling),I=r(_,U),I.return=N,N=I):(n(N,_),I=qo(U,N.mode,I),I.return=N,N=I),d(N)):n(N,_)}return function(N,_,U,I){try{ul=0;var fe=De(N,_,U,I);return ui=null,fe}catch(oe){if(oe===ri||oe===Ar)throw oe;var Re=_t(29,oe,null,N.mode);return Re.lanes=I,Re.return=N,Re}finally{}}}var Oa=ih(!0),lh=ih(!1),Qn=!1;function es(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ts(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Zn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Kn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Oe&2)!==0){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,t=Tr(e),Yd(e,null,n),t}return Er(e,i,t,n),Tr(e)}function sl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Pf(e,n)}}function ns(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?r=s=d:s=s.next=d,n=n.next}while(n!==null);s===null?r=s=t:s=s.next=t}else r=s=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var as=!1;function cl(){if(as){var e=li;if(e!==null)throw e}}function fl(e,t,n,i){as=!1;var r=e.updateQueue;Qn=!1;var s=r.firstBaseUpdate,d=r.lastBaseUpdate,g=r.shared.pending;if(g!==null){r.shared.pending=null;var E=g,B=E.next;E.next=null,d===null?s=B:d.next=B,d=E;var F=e.alternate;F!==null&&(F=F.updateQueue,g=F.lastBaseUpdate,g!==d&&(g===null?F.firstBaseUpdate=B:g.next=B,F.lastBaseUpdate=E))}if(s!==null){var te=r.baseState;d=0,F=B=E=null,g=s;do{var Y=g.lane&-536870913,Q=Y!==g.lane;if(Q?(Se&Y)===Y:(i&Y)===Y){Y!==0&&Y===ii&&(as=!0),F!==null&&(F=F.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var ue=e,de=g;Y=t;var De=n;switch(de.tag){case 1:if(ue=de.payload,typeof ue=="function"){te=ue.call(De,te,Y);break e}te=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=de.payload,Y=typeof ue=="function"?ue.call(De,te,Y):ue,Y==null)break e;te=x({},te,Y);break e;case 2:Qn=!0}}Y=g.callback,Y!==null&&(e.flags|=64,Q&&(e.flags|=8192),Q=r.callbacks,Q===null?r.callbacks=[Y]:Q.push(Y))}else Q={lane:Y,tag:g.tag,payload:g.payload,callback:g.callback,next:null},F===null?(B=F=Q,E=te):F=F.next=Q,d|=Y;if(g=g.next,g===null){if(g=r.shared.pending,g===null)break;Q=g,g=Q.next,Q.next=null,r.lastBaseUpdate=Q,r.shared.pending=null}}while(!0);F===null&&(E=te),r.baseState=E,r.firstBaseUpdate=B,r.lastBaseUpdate=F,s===null&&(r.shared.lanes=0),In|=d,e.lanes=d,e.memoizedState=te}}function rh(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function uh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)rh(n[e],t)}var oi=T(null),Dr=T(0);function oh(e,t){e=_n,ie(Dr,e),ie(oi,t),_n=e|t.baseLanes}function is(){ie(Dr,_n),ie(oi,oi.current)}function ls(){_n=Dr.current,V(oi),V(Dr)}var Ot=T(null),Xt=null;function Jn(e){var t=e.alternate;ie(Qe,Qe.current&1),ie(Ot,e),Xt===null&&(t===null||oi.current!==null||t.memoizedState!==null)&&(Xt=e)}function rs(e){ie(Qe,Qe.current),ie(Ot,e),Xt===null&&(Xt=e)}function sh(e){e.tag===22?(ie(Qe,Qe.current),ie(Ot,e),Xt===null&&(Xt=e)):Pn()}function Pn(){ie(Qe,Qe.current),ie(Ot,Ot.current)}function zt(e){V(Ot),Xt===e&&(Xt=null),V(Qe)}var Qe=T(0);function Lr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||dc(n)||hc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bn=0,me=null,Me=null,Je=null,kr=!1,si=!1,za=!1,Ur=0,dl=0,ci=null,gy=0;function Xe(){throw Error(u(321))}function us(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function os(e,t,n,i,r,s){return bn=s,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=e===null||e.memoizedState===null?Qh:Es,za=!1,s=n(i,r),za=!1,si&&(s=fh(t,n,i,r)),ch(e),s}function ch(e){z.H=ml;var t=Me!==null&&Me.next!==null;if(bn=0,Je=Me=me=null,kr=!1,dl=0,ci=null,t)throw Error(u(300));e===null||Pe||(e=e.dependencies,e!==null&&_r(e)&&(Pe=!0))}function fh(e,t,n,i){me=e;var r=0;do{if(si&&(ci=null),dl=0,si=!1,25<=r)throw Error(u(301));if(r+=1,Je=Me=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}z.H=Zh,s=t(n,i)}while(si);return s}function yy(){var e=z.H,t=e.useState()[0];return t=typeof t.then=="function"?hl(t):t,e=e.useState()[0],(Me!==null?Me.memoizedState:null)!==e&&(me.flags|=1024),t}function ss(){var e=Ur!==0;return Ur=0,e}function cs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function fs(e){if(kr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}kr=!1}bn=0,Je=Me=me=null,si=!1,dl=Ur=0,ci=null}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?me.memoizedState=Je=e:Je=Je.next=e,Je}function Ze(){if(Me===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Je===null?me.memoizedState:Je.next;if(t!==null)Je=t,Me=e;else{if(e===null)throw me.alternate===null?Error(u(467)):Error(u(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Je===null?me.memoizedState=Je=e:Je=Je.next=e}return Je}function Hr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hl(e){var t=dl;return dl+=1,ci===null&&(ci=[]),e=th(ci,e,t),t=me,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?Qh:Es),e}function Br(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return hl(e);if(e.$$typeof===H)return rt(e)}throw Error(u(438,String(e)))}function ds(e){var t=null,n=me.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=me.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Hr(),me.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=le;return t.index++,n}function xn(e,t){return typeof t=="function"?t(e):t}function $r(e){var t=Ze();return hs(t,Me,e)}function hs(e,t,n){var i=e.queue;if(i===null)throw Error(u(311));i.lastRenderedReducer=n;var r=e.baseQueue,s=i.pending;if(s!==null){if(r!==null){var d=r.next;r.next=s.next,s.next=d}t.baseQueue=r=s,i.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{t=r.next;var g=d=null,E=null,B=t,F=!1;do{var te=B.lane&-536870913;if(te!==B.lane?(Se&te)===te:(bn&te)===te){var Y=B.revertLane;if(Y===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),te===ii&&(F=!0);else if((bn&Y)===Y){B=B.next,Y===ii&&(F=!0);continue}else te={lane:0,revertLane:B.revertLane,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},E===null?(g=E=te,d=s):E=E.next=te,me.lanes|=Y,In|=Y;te=B.action,za&&n(s,te),s=B.hasEagerState?B.eagerState:n(s,te)}else Y={lane:te,revertLane:B.revertLane,gesture:B.gesture,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},E===null?(g=E=Y,d=s):E=E.next=Y,me.lanes|=te,In|=te;B=B.next}while(B!==null&&B!==t);if(E===null?d=s:E.next=g,!Rt(s,e.memoizedState)&&(Pe=!0,F&&(n=li,n!==null)))throw n;e.memoizedState=s,e.baseState=d,e.baseQueue=E,i.lastRenderedState=s}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function ps(e){var t=Ze(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,s=t.memoizedState;if(r!==null){n.pending=null;var d=r=r.next;do s=e(s,d.action),d=d.next;while(d!==r);Rt(s,t.memoizedState)||(Pe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function dh(e,t,n){var i=me,r=Ze(),s=Ee;if(s){if(n===void 0)throw Error(u(407));n=n()}else n=t();var d=!Rt((Me||r).memoizedState,n);if(d&&(r.memoizedState=n,Pe=!0),r=r.queue,gs(mh.bind(null,i,r,e),[e]),r.getSnapshot!==t||d||Je!==null&&Je.memoizedState.tag&1){if(i.flags|=2048,fi(9,{destroy:void 0},ph.bind(null,i,r,n,t),null),Le===null)throw Error(u(349));s||(bn&127)!==0||hh(i,t,n)}return n}function hh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t=Hr(),me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ph(e,t,n,i){t.value=n,t.getSnapshot=i,vh(t)&&gh(e)}function mh(e,t,n){return n(function(){vh(t)&&gh(e)})}function vh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function gh(e){var t=xa(e,2);t!==null&&xt(t,e,2)}function ms(e){var t=ht();if(typeof e=="function"){var n=e;if(e=n(),za){Bn(!0);try{n()}finally{Bn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:e},t}function yh(e,t,n,i){return e.baseState=n,hs(e,Me,typeof i=="function"?i:xn)}function by(e,t,n,i,r){if(Gr(e))throw Error(u(485));if(e=t.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){s.listeners.push(d)}};z.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,bh(t,s)):(s.next=n.next,t.pending=n.next=s)}}function bh(e,t){var n=t.action,i=t.payload,r=e.state;if(t.isTransition){var s=z.T,d={};z.T=d;try{var g=n(r,i),E=z.S;E!==null&&E(d,g),xh(e,t,g)}catch(B){vs(e,t,B)}finally{s!==null&&d.types!==null&&(s.types=d.types),z.T=s}}else try{s=n(r,i),xh(e,t,s)}catch(B){vs(e,t,B)}}function xh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Sh(e,t,i)},function(i){return vs(e,t,i)}):Sh(e,t,n)}function Sh(e,t,n){t.status="fulfilled",t.value=n,wh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,bh(e,n)))}function vs(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,wh(t),t=t.next;while(t!==i)}e.action=null}function wh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Eh(e,t){return t}function Th(e,t){if(Ee){var n=Le.formState;if(n!==null){e:{var i=me;if(Ee){if(Be){t:{for(var r=Be,s=Gt;r.nodeType!==8;){if(!s){r=null;break t}if(r=Vt(r.nextSibling),r===null){r=null;break t}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){Be=Vt(r.nextSibling),i=r.data==="F!";break e}}Xn(i)}i=!1}i&&(t=n[0])}}return n=ht(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Eh,lastRenderedState:t},n.queue=i,n=Gh.bind(null,me,i),i.dispatch=n,i=ms(!1),s=ws.bind(null,me,!1,i.queue),i=ht(),r={state:t,dispatch:null,action:e,pending:null},i.queue=r,n=by.bind(null,me,r,s,n),r.dispatch=n,i.memoizedState=e,[t,n,!1]}function Ch(e){var t=Ze();return Rh(t,Me,e)}function Rh(e,t,n){if(t=hs(e,t,Eh)[0],e=$r(xn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=hl(t)}catch(d){throw d===ri?Ar:d}else i=t;t=Ze();var r=t.queue,s=r.dispatch;return n!==t.memoizedState&&(me.flags|=2048,fi(9,{destroy:void 0},xy.bind(null,r,n),null)),[i,s,e]}function xy(e,t){e.action=t}function _h(e){var t=Ze(),n=Me;if(n!==null)return Rh(t,n,e);Ze(),t=t.memoizedState,n=Ze();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function fi(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=me.updateQueue,t===null&&(t=Hr(),me.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Oh(){return Ze().memoizedState}function qr(e,t,n,i){var r=ht();me.flags|=e,r.memoizedState=fi(1|t,{destroy:void 0},n,i===void 0?null:i)}function Yr(e,t,n,i){var r=Ze();i=i===void 0?null:i;var s=r.memoizedState.inst;Me!==null&&i!==null&&us(i,Me.memoizedState.deps)?r.memoizedState=fi(t,s,n,i):(me.flags|=e,r.memoizedState=fi(1|t,s,n,i))}function zh(e,t){qr(8390656,8,e,t)}function gs(e,t){Yr(2048,8,e,t)}function Sy(e){me.flags|=4;var t=me.updateQueue;if(t===null)t=Hr(),me.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ah(e){var t=Ze().memoizedState;return Sy({ref:t,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function jh(e,t){return Yr(4,2,e,t)}function Mh(e,t){return Yr(4,4,e,t)}function Nh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Dh(e,t,n){n=n!=null?n.concat([e]):null,Yr(4,4,Nh.bind(null,t,e),n)}function ys(){}function Lh(e,t){var n=Ze();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&us(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function kh(e,t){var n=Ze();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&us(t,i[1]))return i[0];if(i=e(),za){Bn(!0);try{e()}finally{Bn(!1)}}return n.memoizedState=[i,t],i}function bs(e,t,n){return n===void 0||(bn&1073741824)!==0&&(Se&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Up(),me.lanes|=e,In|=e,n)}function Uh(e,t,n,i){return Rt(n,t)?n:oi.current!==null?(e=bs(e,n,i),Rt(e,t)||(Pe=!0),e):(bn&42)===0||(bn&1073741824)!==0&&(Se&261930)===0?(Pe=!0,e.memoizedState=n):(e=Up(),me.lanes|=e,In|=e,t)}function Hh(e,t,n,i,r){var s=$.p;$.p=s!==0&&8>s?s:8;var d=z.T,g={};z.T=g,ws(e,!1,t,n);try{var E=r(),B=z.S;if(B!==null&&B(g,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var F=vy(E,i);pl(e,t,F,Mt(e))}else pl(e,t,i,Mt(e))}catch(te){pl(e,t,{then:function(){},status:"rejected",reason:te},Mt())}finally{$.p=s,d!==null&&g.types!==null&&(d.types=g.types),z.T=d}}function wy(){}function xs(e,t,n,i){if(e.tag!==5)throw Error(u(476));var r=Bh(e).queue;Hh(e,r,t,W,n===null?wy:function(){return $h(e),n(i)})}function Bh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:W},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function $h(e){var t=Bh(e);t.next===null&&(t=e.alternate.memoizedState),pl(e,t.next.queue,{},Mt())}function Ss(){return rt(jl)}function qh(){return Ze().memoizedState}function Yh(){return Ze().memoizedState}function Ey(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Mt();e=Zn(n);var i=Kn(t,e,n);i!==null&&(xt(i,t,n),sl(i,t,n)),t={cache:Po()},e.payload=t;return}t=t.return}}function Ty(e,t,n){var i=Mt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Gr(e)?Xh(t,n):(n=Bo(e,t,n,i),n!==null&&(xt(n,e,i),Vh(n,t,i)))}function Gh(e,t,n){var i=Mt();pl(e,t,n,i)}function pl(e,t,n,i){var r={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gr(e))Xh(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,g=s(d,n);if(r.hasEagerState=!0,r.eagerState=g,Rt(g,d))return Er(e,t,r,0),Le===null&&wr(),!1}catch{}finally{}if(n=Bo(e,t,r,i),n!==null)return xt(n,e,i),Vh(n,t,i),!0}return!1}function ws(e,t,n,i){if(i={lane:2,revertLane:ec(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Gr(e)){if(t)throw Error(u(479))}else t=Bo(e,n,i,2),t!==null&&xt(t,e,2)}function Gr(e){var t=e.alternate;return e===me||t!==null&&t===me}function Xh(e,t){si=kr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vh(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Pf(e,n)}}var ml={readContext:rt,use:Br,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe};ml.useEffectEvent=Xe;var Qh={readContext:rt,use:Br,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:zh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,qr(4194308,4,Nh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qr(4194308,4,e,t)},useInsertionEffect:function(e,t){qr(4,2,e,t)},useMemo:function(e,t){var n=ht();t=t===void 0?null:t;var i=e();if(za){Bn(!0);try{e()}finally{Bn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=ht();if(n!==void 0){var r=n(t);if(za){Bn(!0);try{n(t)}finally{Bn(!1)}}}else r=t;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=Ty.bind(null,me,e),[i.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:function(e){e=ms(e);var t=e.queue,n=Gh.bind(null,me,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ys,useDeferredValue:function(e,t){var n=ht();return bs(n,e,t)},useTransition:function(){var e=ms(!1);return e=Hh.bind(null,me,e.queue,!0,!1),ht().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=me,r=ht();if(Ee){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Le===null)throw Error(u(349));(Se&127)!==0||hh(i,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,zh(mh.bind(null,i,s,e),[e]),i.flags|=2048,fi(9,{destroy:void 0},ph.bind(null,i,s,n,t),null),n},useId:function(){var e=ht(),t=Le.identifierPrefix;if(Ee){var n=nn,i=tn;n=(i&~(1<<32-Ct(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ur++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=gy++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ss,useFormState:Th,useActionState:Th,useOptimistic:function(e){var t=ht();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ws.bind(null,me,!0,n),n.dispatch=t,[e,t]},useMemoCache:ds,useCacheRefresh:function(){return ht().memoizedState=Ey.bind(null,me)},useEffectEvent:function(e){var t=ht(),n={impl:e};return t.memoizedState=n,function(){if((Oe&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},Es={readContext:rt,use:Br,useCallback:Lh,useContext:rt,useEffect:gs,useImperativeHandle:Dh,useInsertionEffect:jh,useLayoutEffect:Mh,useMemo:kh,useReducer:$r,useRef:Oh,useState:function(){return $r(xn)},useDebugValue:ys,useDeferredValue:function(e,t){var n=Ze();return Uh(n,Me.memoizedState,e,t)},useTransition:function(){var e=$r(xn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:hl(e),t]},useSyncExternalStore:dh,useId:qh,useHostTransitionStatus:Ss,useFormState:Ch,useActionState:Ch,useOptimistic:function(e,t){var n=Ze();return yh(n,Me,e,t)},useMemoCache:ds,useCacheRefresh:Yh};Es.useEffectEvent=Ah;var Zh={readContext:rt,use:Br,useCallback:Lh,useContext:rt,useEffect:gs,useImperativeHandle:Dh,useInsertionEffect:jh,useLayoutEffect:Mh,useMemo:kh,useReducer:ps,useRef:Oh,useState:function(){return ps(xn)},useDebugValue:ys,useDeferredValue:function(e,t){var n=Ze();return Me===null?bs(n,e,t):Uh(n,Me.memoizedState,e,t)},useTransition:function(){var e=ps(xn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:hl(e),t]},useSyncExternalStore:dh,useId:qh,useHostTransitionStatus:Ss,useFormState:_h,useActionState:_h,useOptimistic:function(e,t){var n=Ze();return Me!==null?yh(n,Me,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ds,useCacheRefresh:Yh};Zh.useEffectEvent=Ah;function Ts(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:x({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cs={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Mt(),r=Zn(i);r.payload=t,n!=null&&(r.callback=n),t=Kn(e,r,i),t!==null&&(xt(t,e,i),sl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Mt(),r=Zn(i);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Kn(e,r,i),t!==null&&(xt(t,e,i),sl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Mt(),i=Zn(n);i.tag=2,t!=null&&(i.callback=t),t=Kn(e,i,n),t!==null&&(xt(t,e,n),sl(t,e,n))}};function Kh(e,t,n,i,r,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,d):t.prototype&&t.prototype.isPureReactComponent?!tl(n,i)||!tl(r,s):!0}function Jh(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Cs.enqueueReplaceState(t,t.state,null)}function Aa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=x({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function Ph(e){Sr(e)}function Wh(e){console.error(e)}function Fh(e){Sr(e)}function Xr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Ih(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Rs(e,t,n){return n=Zn(n),n.tag=3,n.payload={element:null},n.callback=function(){Xr(e,t)},n}function ep(e){return e=Zn(e),e.tag=3,e}function tp(e,t,n,i){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var s=i.value;e.payload=function(){return r(s)},e.callback=function(){Ih(t,n,i)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Ih(t,n,i),typeof r!="function"&&(ea===null?ea=new Set([this]):ea.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})})}function Cy(e,t,n,i,r){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ai(t,n,r,!0),n=Ot.current,n!==null){switch(n.tag){case 31:case 13:return Xt===null?nu():n.alternate===null&&Ve===0&&(Ve=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===jr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Ws(e,i,r)),!1;case 22:return n.flags|=65536,i===jr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Ws(e,i,r)),!1}throw Error(u(435,n.tag))}return Ws(e,i,r),nu(),!1}if(Ee)return t=Ot.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,i!==Vo&&(e=Error(u(422),{cause:i}),il($t(e,n)))):(i!==Vo&&(t=Error(u(423),{cause:i}),il($t(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=$t(i,n),r=Rs(e.stateNode,i,r),ns(e,r),Ve!==4&&(Ve=2)),!1;var s=Error(u(520),{cause:i});if(s=$t(s,n),El===null?El=[s]:El.push(s),Ve!==4&&(Ve=2),t===null)return!0;i=$t(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=Rs(n.stateNode,i,e),ns(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ea===null||!ea.has(s))))return n.flags|=65536,r&=-r,n.lanes|=r,r=ep(r),tp(r,e,n,i),ns(n,r),!1}n=n.return}while(n!==null);return!1}var _s=Error(u(461)),Pe=!1;function ut(e,t,n,i){t.child=e===null?lh(t,null,n,i):Oa(t,e.child,n,i)}function np(e,t,n,i,r){n=n.render;var s=t.ref;if("ref"in i){var d={};for(var g in i)g!=="ref"&&(d[g]=i[g])}else d=i;return Ta(t),i=os(e,t,n,d,s,r),g=ss(),e!==null&&!Pe?(cs(e,t,r),Sn(e,t,r)):(Ee&&g&&Go(t),t.flags|=1,ut(e,t,i,r),t.child)}function ap(e,t,n,i,r){if(e===null){var s=n.type;return typeof s=="function"&&!$o(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,ip(e,t,s,i,r)):(e=Cr(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Ls(e,r)){var d=s.memoizedProps;if(n=n.compare,n=n!==null?n:tl,n(d,i)&&e.ref===t.ref)return Sn(e,t,r)}return t.flags|=1,e=mn(s,i),e.ref=t.ref,e.return=t,t.child=e}function ip(e,t,n,i,r){if(e!==null){var s=e.memoizedProps;if(tl(s,i)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=i=s,Ls(e,r))(e.flags&131072)!==0&&(Pe=!0);else return t.lanes=e.lanes,Sn(e,t,r)}return Os(e,t,n,i,r)}function lp(e,t,n,i){var r=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~s}else i=0,t.child=null;return rp(e,t,s,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&zr(t,s!==null?s.cachePool:null),s!==null?oh(t,s):is(),sh(t);else return i=t.lanes=536870912,rp(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(zr(t,s.cachePool),oh(t,s),Pn(),t.memoizedState=null):(e!==null&&zr(t,null),is(),Pn());return ut(e,t,r,n),t.child}function vl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function rp(e,t,n,i,r){var s=Fo();return s=s===null?null:{parent:Ke._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&zr(t,null),is(),sh(t),e!==null&&ai(e,t,i,!0),t.childLanes=r,null}function Vr(e,t){return t=Zr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function up(e,t,n){return Oa(t,e.child,null,n),e=Vr(t,t.pendingProps),e.flags|=2,zt(t),t.memoizedState=null,e}function Ry(e,t,n){var i=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ee){if(i.mode==="hidden")return e=Vr(t,i),t.lanes=536870912,vl(null,e);if(rs(t),(e=Be)?(e=b0(e,Gt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yn!==null?{id:tn,overflow:nn}:null,retryLane:536870912,hydrationErrors:null},n=Xd(e),n.return=t,t.child=n,lt=t,Be=null)):e=null,e===null)throw Xn(t);return t.lanes=536870912,null}return Vr(t,i)}var s=e.memoizedState;if(s!==null){var d=s.dehydrated;if(rs(t),r)if(t.flags&256)t.flags&=-257,t=up(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Pe||ai(e,t,n,!1),r=(n&e.childLanes)!==0,Pe||r){if(i=Le,i!==null&&(d=Wf(i,n),d!==0&&d!==s.retryLane))throw s.retryLane=d,xa(e,d),xt(i,e,d),_s;nu(),t=up(e,t,n)}else e=s.treeContext,Be=Vt(d.nextSibling),lt=t,Ee=!0,Gn=null,Gt=!1,e!==null&&Zd(t,e),t=Vr(t,i),t.flags|=4096;return t}return e=mn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Qr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Os(e,t,n,i,r){return Ta(t),n=os(e,t,n,i,void 0,r),i=ss(),e!==null&&!Pe?(cs(e,t,r),Sn(e,t,r)):(Ee&&i&&Go(t),t.flags|=1,ut(e,t,n,r),t.child)}function op(e,t,n,i,r,s){return Ta(t),t.updateQueue=null,n=fh(t,i,n,r),ch(e),i=ss(),e!==null&&!Pe?(cs(e,t,s),Sn(e,t,s)):(Ee&&i&&Go(t),t.flags|=1,ut(e,t,n,s),t.child)}function sp(e,t,n,i,r){if(Ta(t),t.stateNode===null){var s=Ia,d=n.contextType;typeof d=="object"&&d!==null&&(s=rt(d)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Cs,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},es(t),d=n.contextType,s.context=typeof d=="object"&&d!==null?rt(d):Ia,s.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Ts(t,n,d,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(d=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),d!==s.state&&Cs.enqueueReplaceState(s,s.state,null),fl(t,i,s,r),cl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var g=t.memoizedProps,E=Aa(n,g);s.props=E;var B=s.context,F=n.contextType;d=Ia,typeof F=="object"&&F!==null&&(d=rt(F));var te=n.getDerivedStateFromProps;F=typeof te=="function"||typeof s.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,F||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(g||B!==d)&&Jh(t,s,i,d),Qn=!1;var Y=t.memoizedState;s.state=Y,fl(t,i,s,r),cl(),B=t.memoizedState,g||Y!==B||Qn?(typeof te=="function"&&(Ts(t,n,te,i),B=t.memoizedState),(E=Qn||Kh(t,n,E,i,Y,B,d))?(F||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=B),s.props=i,s.state=B,s.context=d,i=E):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,ts(e,t),d=t.memoizedProps,F=Aa(n,d),s.props=F,te=t.pendingProps,Y=s.context,B=n.contextType,E=Ia,typeof B=="object"&&B!==null&&(E=rt(B)),g=n.getDerivedStateFromProps,(B=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==te||Y!==E)&&Jh(t,s,i,E),Qn=!1,Y=t.memoizedState,s.state=Y,fl(t,i,s,r),cl();var Q=t.memoizedState;d!==te||Y!==Q||Qn||e!==null&&e.dependencies!==null&&_r(e.dependencies)?(typeof g=="function"&&(Ts(t,n,g,i),Q=t.memoizedState),(F=Qn||Kh(t,n,F,i,Y,Q,E)||e!==null&&e.dependencies!==null&&_r(e.dependencies))?(B||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,Q,E),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,Q,E)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&Y===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&Y===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=Q),s.props=i,s.state=Q,s.context=E,i=F):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&Y===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&Y===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Qr(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=Oa(t,e.child,null,r),t.child=Oa(t,null,n,r)):ut(e,t,n,r),t.memoizedState=s.state,e=t.child):e=Sn(e,t,r),e}function cp(e,t,n,i){return wa(),t.flags|=256,ut(e,t,n,i),t.child}var zs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function As(e){return{baseLanes:e,cachePool:Id()}}function js(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=jt),e}function fp(e,t,n){var i=t.pendingProps,r=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),d&&(r=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ee){if(r?Jn(t):Pn(),(e=Be)?(e=b0(e,Gt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yn!==null?{id:tn,overflow:nn}:null,retryLane:536870912,hydrationErrors:null},n=Xd(e),n.return=t,t.child=n,lt=t,Be=null)):e=null,e===null)throw Xn(t);return hc(e)?t.lanes=32:t.lanes=536870912,null}var g=i.children;return i=i.fallback,r?(Pn(),r=t.mode,g=Zr({mode:"hidden",children:g},r),i=Sa(i,r,n,null),g.return=t,i.return=t,g.sibling=i,t.child=g,i=t.child,i.memoizedState=As(n),i.childLanes=js(e,d,n),t.memoizedState=zs,vl(null,i)):(Jn(t),Ms(t,g))}var E=e.memoizedState;if(E!==null&&(g=E.dehydrated,g!==null)){if(s)t.flags&256?(Jn(t),t.flags&=-257,t=Ns(e,t,n)):t.memoizedState!==null?(Pn(),t.child=e.child,t.flags|=128,t=null):(Pn(),g=i.fallback,r=t.mode,i=Zr({mode:"visible",children:i.children},r),g=Sa(g,r,n,null),g.flags|=2,i.return=t,g.return=t,i.sibling=g,t.child=i,Oa(t,e.child,null,n),i=t.child,i.memoizedState=As(n),i.childLanes=js(e,d,n),t.memoizedState=zs,t=vl(null,i));else if(Jn(t),hc(g)){if(d=g.nextSibling&&g.nextSibling.dataset,d)var B=d.dgst;d=B,i=Error(u(419)),i.stack="",i.digest=d,il({value:i,source:null,stack:null}),t=Ns(e,t,n)}else if(Pe||ai(e,t,n,!1),d=(n&e.childLanes)!==0,Pe||d){if(d=Le,d!==null&&(i=Wf(d,n),i!==0&&i!==E.retryLane))throw E.retryLane=i,xa(e,i),xt(d,e,i),_s;dc(g)||nu(),t=Ns(e,t,n)}else dc(g)?(t.flags|=192,t.child=e.child,t=null):(e=E.treeContext,Be=Vt(g.nextSibling),lt=t,Ee=!0,Gn=null,Gt=!1,e!==null&&Zd(t,e),t=Ms(t,i.children),t.flags|=4096);return t}return r?(Pn(),g=i.fallback,r=t.mode,E=e.child,B=E.sibling,i=mn(E,{mode:"hidden",children:i.children}),i.subtreeFlags=E.subtreeFlags&65011712,B!==null?g=mn(B,g):(g=Sa(g,r,n,null),g.flags|=2),g.return=t,i.return=t,i.sibling=g,t.child=i,vl(null,i),i=t.child,g=e.child.memoizedState,g===null?g=As(n):(r=g.cachePool,r!==null?(E=Ke._currentValue,r=r.parent!==E?{parent:E,pool:E}:r):r=Id(),g={baseLanes:g.baseLanes|n,cachePool:r}),i.memoizedState=g,i.childLanes=js(e,d,n),t.memoizedState=zs,vl(e.child,i)):(Jn(t),n=e.child,e=n.sibling,n=mn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function Ms(e,t){return t=Zr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Zr(e,t){return e=_t(22,e,null,t),e.lanes=0,e}function Ns(e,t,n){return Oa(t,e.child,null,n),e=Ms(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dp(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ko(e.return,t,n)}function Ds(e,t,n,i,r,s){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,treeForkCount:s}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=i,d.tail=n,d.tailMode=r,d.treeForkCount=s)}function hp(e,t,n){var i=t.pendingProps,r=i.revealOrder,s=i.tail;i=i.children;var d=Qe.current,g=(d&2)!==0;if(g?(d=d&1|2,t.flags|=128):d&=1,ie(Qe,d),ut(e,t,i,n),i=Ee?al:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dp(e,n,t);else if(e.tag===19)dp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Lr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Ds(t,!1,r,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Lr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Ds(t,!0,n,null,s,i);break;case"together":Ds(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Sn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ai(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ls(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&_r(e)))}function _y(e,t,n){switch(t.tag){case 3:Ue(t,t.stateNode.containerInfo),Vn(t,Ke,e.memoizedState.cache),wa();break;case 27:case 5:wt(t);break;case 4:Ue(t,t.stateNode.containerInfo);break;case 10:Vn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,rs(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Jn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?fp(e,t,n):(Jn(t),e=Sn(e,t,n),e!==null?e.sibling:null);Jn(t);break;case 19:var r=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(ai(e,t,n,!1),i=(n&t.childLanes)!==0),r){if(i)return hp(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ie(Qe,Qe.current),i)break;return null;case 22:return t.lanes=0,lp(e,t,n,t.pendingProps);case 24:Vn(t,Ke,e.memoizedState.cache)}return Sn(e,t,n)}function pp(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Pe=!0;else{if(!Ls(e,n)&&(t.flags&128)===0)return Pe=!1,_y(e,t,n);Pe=(e.flags&131072)!==0}else Pe=!1,Ee&&(t.flags&1048576)!==0&&Qd(t,al,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Ra(t.elementType),t.type=e,typeof e=="function")$o(e)?(i=Aa(e,i),t.tag=1,t=sp(null,t,e,i,n)):(t.tag=0,t=Os(null,t,e,i,n));else{if(e!=null){var r=e.$$typeof;if(r===P){t.tag=11,t=np(null,t,e,i,n);break e}else if(r===J){t.tag=14,t=ap(null,t,e,i,n);break e}}throw t=ne(e)||e,Error(u(306,t,""))}}return t;case 0:return Os(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,r=Aa(i,t.pendingProps),sp(e,t,i,r,n);case 3:e:{if(Ue(t,t.stateNode.containerInfo),e===null)throw Error(u(387));i=t.pendingProps;var s=t.memoizedState;r=s.element,ts(e,t),fl(t,i,null,n);var d=t.memoizedState;if(i=d.cache,Vn(t,Ke,i),i!==s.cache&&Jo(t,[Ke],n,!0),cl(),i=d.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=cp(e,t,i,n);break e}else if(i!==r){r=$t(Error(u(424)),t),il(r),t=cp(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Be=Vt(e.firstChild),lt=t,Ee=!0,Gn=null,Gt=!0,n=lh(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(wa(),i===r){t=Sn(e,t,n);break e}ut(e,t,i,n)}t=t.child}return t;case 26:return Qr(e,t),e===null?(n=C0(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ee||(n=t.type,e=t.pendingProps,i=su(he.current).createElement(n),i[it]=t,i[pt]=e,ot(i,n,e),et(i),t.stateNode=i):t.memoizedState=C0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return wt(t),e===null&&Ee&&(i=t.stateNode=w0(t.type,t.pendingProps,he.current),lt=t,Gt=!0,r=Be,ia(t.type)?(pc=r,Be=Vt(i.firstChild)):Be=r),ut(e,t,t.pendingProps.children,n),Qr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ee&&((r=i=Be)&&(i=a2(i,t.type,t.pendingProps,Gt),i!==null?(t.stateNode=i,lt=t,Be=Vt(i.firstChild),Gt=!1,r=!0):r=!1),r||Xn(t)),wt(t),r=t.type,s=t.pendingProps,d=e!==null?e.memoizedProps:null,i=s.children,sc(r,s)?i=null:d!==null&&sc(r,d)&&(t.flags|=32),t.memoizedState!==null&&(r=os(e,t,yy,null,null,n),jl._currentValue=r),Qr(e,t),ut(e,t,i,n),t.child;case 6:return e===null&&Ee&&((e=n=Be)&&(n=i2(n,t.pendingProps,Gt),n!==null?(t.stateNode=n,lt=t,Be=null,e=!0):e=!1),e||Xn(t)),null;case 13:return fp(e,t,n);case 4:return Ue(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Oa(t,null,i,n):ut(e,t,i,n),t.child;case 11:return np(e,t,t.type,t.pendingProps,n);case 7:return ut(e,t,t.pendingProps,n),t.child;case 8:return ut(e,t,t.pendingProps.children,n),t.child;case 12:return ut(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Vn(t,t.type,i.value),ut(e,t,i.children,n),t.child;case 9:return r=t.type._context,i=t.pendingProps.children,Ta(t),r=rt(r),i=i(r),t.flags|=1,ut(e,t,i,n),t.child;case 14:return ap(e,t,t.type,t.pendingProps,n);case 15:return ip(e,t,t.type,t.pendingProps,n);case 19:return hp(e,t,n);case 31:return Ry(e,t,n);case 22:return lp(e,t,n,t.pendingProps);case 24:return Ta(t),i=rt(Ke),e===null?(r=Fo(),r===null&&(r=Le,s=Po(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=n),r=s),t.memoizedState={parent:i,cache:r},es(t),Vn(t,Ke,r)):((e.lanes&n)!==0&&(ts(e,t),fl(t,null,null,n),cl()),r=e.memoizedState,s=t.memoizedState,r.parent!==i?(r={parent:i,cache:i},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Vn(t,Ke,i)):(i=s.cache,Vn(t,Ke,i),i!==r.cache&&Jo(t,[Ke],n,!0))),ut(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function wn(e){e.flags|=4}function ks(e,t,n,i,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(qp())e.flags|=8192;else throw _a=jr,Io}else e.flags&=-16777217}function mp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!A0(t))if(qp())e.flags|=8192;else throw _a=jr,Io}function Kr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Kf():536870912,e.lanes|=t,mi|=t)}function gl(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Oy(e,t,n){var i=t.pendingProps;switch(Xo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return $e(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),yn(Ke),Ce(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ni(t)?wn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Qo())),$e(t),null;case 26:var r=t.type,s=t.memoizedState;return e===null?(wn(t),s!==null?($e(t),mp(t,s)):($e(t),ks(t,r,null,i,n))):s?s!==e.memoizedState?(wn(t),$e(t),mp(t,s)):($e(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&wn(t),$e(t),ks(t,r,e,i,n)),null;case 27:if(Kt(t),n=he.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&wn(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return $e(t),null}e=ae.current,ni(t)?Kd(t):(e=w0(r,i,n),t.stateNode=e,wn(t))}return $e(t),null;case 5:if(Kt(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&wn(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return $e(t),null}if(s=ae.current,ni(t))Kd(t);else{var d=su(he.current);switch(s){case 1:s=d.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=d.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=d.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?d.createElement("select",{is:i.is}):d.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?d.createElement(r,{is:i.is}):d.createElement(r)}}s[it]=t,s[pt]=i;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)s.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=s;e:switch(ot(s,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&wn(t)}}return $e(t),ks(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&wn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(u(166));if(e=he.current,ni(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,r=lt,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[it]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||f0(e.nodeValue,n)),e||Xn(t,!0)}else e=su(e).createTextNode(i),e[it]=t,t.stateNode=e}return $e(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=ni(t),n!==null){if(e===null){if(!i)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[it]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$e(t),e=!1}else n=Qo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(zt(t),t):(zt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return $e(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=ni(t),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(u(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(u(317));r[it]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$e(t),r=!1}else r=Qo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(zt(t),t):(zt(t),null)}return zt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==r&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Kr(t,t.updateQueue),$e(t),null);case 4:return Ce(),e===null&&ic(t.stateNode.containerInfo),$e(t),null;case 10:return yn(t.type),$e(t),null;case 19:if(V(Qe),i=t.memoizedState,i===null)return $e(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)gl(i,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Lr(e),s!==null){for(t.flags|=128,gl(i,!1),e=s.updateQueue,t.updateQueue=e,Kr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Gd(n,e),n=n.sibling;return ie(Qe,Qe.current&1|2),Ee&&vn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Et()>Ir&&(t.flags|=128,r=!0,gl(i,!1),t.lanes=4194304)}else{if(!r)if(e=Lr(s),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Kr(t,e),gl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Ee)return $e(t),null}else 2*Et()-i.renderingStartTime>Ir&&n!==536870912&&(t.flags|=128,r=!0,gl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Et(),e.sibling=null,n=Qe.current,ie(Qe,r?n&1|2:n&1),Ee&&vn(t,i.treeForkCount),e):($e(t),null);case 22:case 23:return zt(t),ls(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),n=t.updateQueue,n!==null&&Kr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&V(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),yn(Ke),$e(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function zy(e,t){switch(Xo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yn(Ke),Ce(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Kt(t),null;case 31:if(t.memoizedState!==null){if(zt(t),t.alternate===null)throw Error(u(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(zt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Qe),null;case 4:return Ce(),null;case 10:return yn(t.type),null;case 22:case 23:return zt(t),ls(),e!==null&&V(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return yn(Ke),null;case 25:return null;default:return null}}function vp(e,t){switch(Xo(t),t.tag){case 3:yn(Ke),Ce();break;case 26:case 27:case 5:Kt(t);break;case 4:Ce();break;case 31:t.memoizedState!==null&&zt(t);break;case 13:zt(t);break;case 19:V(Qe);break;case 10:yn(t.type);break;case 22:case 23:zt(t),ls(),e!==null&&V(Ca);break;case 24:yn(Ke)}}function yl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){i=void 0;var s=n.create,d=n.inst;i=s(),d.destroy=i}n=n.next}while(n!==r)}}catch(g){je(t,t.return,g)}}function Wn(e,t,n){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var s=r.next;i=s;do{if((i.tag&e)===e){var d=i.inst,g=d.destroy;if(g!==void 0){d.destroy=void 0,r=t;var E=n,B=g;try{B()}catch(F){je(r,E,F)}}}i=i.next}while(i!==s)}}catch(F){je(t,t.return,F)}}function gp(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{uh(t,n)}catch(i){je(e,e.return,i)}}}function yp(e,t,n){n.props=Aa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){je(e,t,i)}}function bl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(r){je(e,t,r)}}function an(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(r){je(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){je(e,t,r)}else n.current=null}function bp(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){je(e,e.return,r)}}function Us(e,t,n){try{var i=e.stateNode;Wy(i,e.type,n,t),i[pt]=t}catch(r){je(e,e.return,r)}}function xp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ia(e.type)||e.tag===4}function Hs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bs(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hn));else if(i!==4&&(i===27&&ia(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Bs(e,t,n),e=e.sibling;e!==null;)Bs(e,t,n),e=e.sibling}function Jr(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ia(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Jr(e,t,n),e=e.sibling;e!==null;)Jr(e,t,n),e=e.sibling}function Sp(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);ot(t,i,n),t[it]=e,t[pt]=n}catch(s){je(e,e.return,s)}}var En=!1,We=!1,$s=!1,wp=typeof WeakSet=="function"?WeakSet:Set,tt=null;function Ay(e,t){if(e=e.containerInfo,uc=vu,e=Dd(e),No(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var d=0,g=-1,E=-1,B=0,F=0,te=e,Y=null;t:for(;;){for(var Q;te!==n||r!==0&&te.nodeType!==3||(g=d+r),te!==s||i!==0&&te.nodeType!==3||(E=d+i),te.nodeType===3&&(d+=te.nodeValue.length),(Q=te.firstChild)!==null;)Y=te,te=Q;for(;;){if(te===e)break t;if(Y===n&&++B===r&&(g=d),Y===s&&++F===i&&(E=d),(Q=te.nextSibling)!==null)break;te=Y,Y=te.parentNode}te=Q}n=g===-1||E===-1?null:{start:g,end:E}}else n=null}n=n||{start:0,end:0}}else n=null;for(oc={focusedElem:e,selectionRange:n},vu=!1,tt=t;tt!==null;)if(t=tt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,tt=e;else for(;tt!==null;){switch(t=tt,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,r=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var ue=Aa(n.type,r);e=i.getSnapshotBeforeUpdate(ue,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(de){je(n,n.return,de)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)fc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":fc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,tt=e;break}tt=t.return}}function Ep(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Cn(e,n),i&4&&yl(5,n);break;case 1:if(Cn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){je(n,n.return,d)}else{var r=Aa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){je(n,n.return,d)}}i&64&&gp(n),i&512&&bl(n,n.return);break;case 3:if(Cn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{uh(e,t)}catch(d){je(n,n.return,d)}}break;case 27:t===null&&i&4&&Sp(n);case 26:case 5:Cn(e,n),t===null&&i&4&&bp(n),i&512&&bl(n,n.return);break;case 12:Cn(e,n);break;case 31:Cn(e,n),i&4&&Rp(e,n);break;case 13:Cn(e,n),i&4&&_p(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=By.bind(null,n),l2(e,n))));break;case 22:if(i=n.memoizedState!==null||En,!i){t=t!==null&&t.memoizedState!==null||We,r=En;var s=We;En=i,(We=t)&&!s?Rn(e,n,(n.subtreeFlags&8772)!==0):Cn(e,n),En=r,We=s}break;case 30:break;default:Cn(e,n)}}function Tp(e){var t=e.alternate;t!==null&&(e.alternate=null,Tp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&vo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,vt=!1;function Tn(e,t,n){for(n=n.child;n!==null;)Cp(e,t,n),n=n.sibling}function Cp(e,t,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Gi,n)}catch{}switch(n.tag){case 26:We||an(n,t),Tn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:We||an(n,t);var i=Ye,r=vt;ia(n.type)&&(Ye=n.stateNode,vt=!1),Tn(e,t,n),Ol(n.stateNode),Ye=i,vt=r;break;case 5:We||an(n,t);case 6:if(i=Ye,r=vt,Ye=null,Tn(e,t,n),Ye=i,vt=r,Ye!==null)if(vt)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(n.stateNode)}catch(s){je(n,t,s)}else try{Ye.removeChild(n.stateNode)}catch(s){je(n,t,s)}break;case 18:Ye!==null&&(vt?(e=Ye,g0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ei(e)):g0(Ye,n.stateNode));break;case 4:i=Ye,r=vt,Ye=n.stateNode.containerInfo,vt=!0,Tn(e,t,n),Ye=i,vt=r;break;case 0:case 11:case 14:case 15:Wn(2,n,t),We||Wn(4,n,t),Tn(e,t,n);break;case 1:We||(an(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&yp(n,t,i)),Tn(e,t,n);break;case 21:Tn(e,t,n);break;case 22:We=(i=We)||n.memoizedState!==null,Tn(e,t,n),We=i;break;default:Tn(e,t,n)}}function Rp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ei(e)}catch(n){je(t,t.return,n)}}}function _p(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ei(e)}catch(n){je(t,t.return,n)}}function jy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new wp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new wp),t;default:throw Error(u(435,e.tag))}}function Pr(e,t){var n=jy(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var r=$y.bind(null,e,i);i.then(r,r)}})}function gt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i],s=e,d=t,g=d;e:for(;g!==null;){switch(g.tag){case 27:if(ia(g.type)){Ye=g.stateNode,vt=!1;break e}break;case 5:Ye=g.stateNode,vt=!1;break e;case 3:case 4:Ye=g.stateNode.containerInfo,vt=!0;break e}g=g.return}if(Ye===null)throw Error(u(160));Cp(s,d,r),Ye=null,vt=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Op(t,e),t=t.sibling}var Pt=null;function Op(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gt(t,e),yt(e),i&4&&(Wn(3,e,e.return),yl(3,e),Wn(5,e,e.return));break;case 1:gt(t,e),yt(e),i&512&&(We||n===null||an(n,n.return)),i&64&&En&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var r=Pt;if(gt(t,e),yt(e),i&512&&(We||n===null||an(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":s=r.getElementsByTagName("title")[0],(!s||s[Qi]||s[it]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(i),r.head.insertBefore(s,r.querySelector("head > title"))),ot(s,i,n),s[it]=e,et(s),i=s;break e;case"link":var d=O0("link","href",r).get(i+(n.href||""));if(d){for(var g=0;g<d.length;g++)if(s=d[g],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(g,1);break t}}s=r.createElement(i),ot(s,i,n),r.head.appendChild(s);break;case"meta":if(d=O0("meta","content",r).get(i+(n.content||""))){for(g=0;g<d.length;g++)if(s=d[g],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(g,1);break t}}s=r.createElement(i),ot(s,i,n),r.head.appendChild(s);break;default:throw Error(u(468,i))}s[it]=e,et(s),i=s}e.stateNode=i}else z0(r,e.type,e.stateNode);else e.stateNode=_0(r,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?z0(r,e.type,e.stateNode):_0(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Us(e,e.memoizedProps,n.memoizedProps)}break;case 27:gt(t,e),yt(e),i&512&&(We||n===null||an(n,n.return)),n!==null&&i&4&&Us(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gt(t,e),yt(e),i&512&&(We||n===null||an(n,n.return)),e.flags&32){r=e.stateNode;try{Qa(r,"")}catch(ue){je(e,e.return,ue)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,Us(e,r,n!==null?n.memoizedProps:r)),i&1024&&($s=!0);break;case 6:if(gt(t,e),yt(e),i&4){if(e.stateNode===null)throw Error(u(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(ue){je(e,e.return,ue)}}break;case 3:if(du=null,r=Pt,Pt=cu(t.containerInfo),gt(t,e),Pt=r,yt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ei(t.containerInfo)}catch(ue){je(e,e.return,ue)}$s&&($s=!1,zp(e));break;case 4:i=Pt,Pt=cu(e.stateNode.containerInfo),gt(t,e),yt(e),Pt=i;break;case 12:gt(t,e),yt(e);break;case 31:gt(t,e),yt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Pr(e,i)));break;case 13:gt(t,e),yt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Fr=Et()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Pr(e,i)));break;case 22:r=e.memoizedState!==null;var E=n!==null&&n.memoizedState!==null,B=En,F=We;if(En=B||r,We=F||E,gt(t,e),We=F,En=B,yt(e),i&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||E||En||We||ja(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){E=n=t;try{if(s=E.stateNode,r)d=s.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{g=E.stateNode;var te=E.memoizedProps.style,Y=te!=null&&te.hasOwnProperty("display")?te.display:null;g.style.display=Y==null||typeof Y=="boolean"?"":(""+Y).trim()}}catch(ue){je(E,E.return,ue)}}}else if(t.tag===6){if(n===null){E=t;try{E.stateNode.nodeValue=r?"":E.memoizedProps}catch(ue){je(E,E.return,ue)}}}else if(t.tag===18){if(n===null){E=t;try{var Q=E.stateNode;r?y0(Q,!0):y0(E.stateNode,!1)}catch(ue){je(E,E.return,ue)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Pr(e,n))));break;case 19:gt(t,e),yt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Pr(e,i)));break;case 30:break;case 21:break;default:gt(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(xp(i)){n=i;break}i=i.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var r=n.stateNode,s=Hs(e);Jr(e,s,r);break;case 5:var d=n.stateNode;n.flags&32&&(Qa(d,""),n.flags&=-33);var g=Hs(e);Jr(e,g,d);break;case 3:case 4:var E=n.stateNode.containerInfo,B=Hs(e);Bs(e,B,E);break;default:throw Error(u(161))}}catch(F){je(e,e.return,F)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;zp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Cn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ep(e,t.alternate,t),t=t.sibling}function ja(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wn(4,t,t.return),ja(t);break;case 1:an(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&yp(t,t.return,n),ja(t);break;case 27:Ol(t.stateNode);case 26:case 5:an(t,t.return),ja(t);break;case 22:t.memoizedState===null&&ja(t);break;case 30:ja(t);break;default:ja(t)}e=e.sibling}}function Rn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,r=e,s=t,d=s.flags;switch(s.tag){case 0:case 11:case 15:Rn(r,s,n),yl(4,s);break;case 1:if(Rn(r,s,n),i=s,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(B){je(i,i.return,B)}if(i=s,r=i.updateQueue,r!==null){var g=i.stateNode;try{var E=r.shared.hiddenCallbacks;if(E!==null)for(r.shared.hiddenCallbacks=null,r=0;r<E.length;r++)rh(E[r],g)}catch(B){je(i,i.return,B)}}n&&d&64&&gp(s),bl(s,s.return);break;case 27:Sp(s);case 26:case 5:Rn(r,s,n),n&&i===null&&d&4&&bp(s),bl(s,s.return);break;case 12:Rn(r,s,n);break;case 31:Rn(r,s,n),n&&d&4&&Rp(r,s);break;case 13:Rn(r,s,n),n&&d&4&&_p(r,s);break;case 22:s.memoizedState===null&&Rn(r,s,n),bl(s,s.return);break;case 30:break;default:Rn(r,s,n)}t=t.sibling}}function qs(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ll(n))}function Ys(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ll(e))}function Wt(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ap(e,t,n,i),t=t.sibling}function Ap(e,t,n,i){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Wt(e,t,n,i),r&2048&&yl(9,t);break;case 1:Wt(e,t,n,i);break;case 3:Wt(e,t,n,i),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ll(e)));break;case 12:if(r&2048){Wt(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,d=s.id,g=s.onPostCommit;typeof g=="function"&&g(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){je(t,t.return,E)}}else Wt(e,t,n,i);break;case 31:Wt(e,t,n,i);break;case 13:Wt(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,d=t.alternate,t.memoizedState!==null?s._visibility&2?Wt(e,t,n,i):xl(e,t):s._visibility&2?Wt(e,t,n,i):(s._visibility|=2,di(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),r&2048&&qs(d,t);break;case 24:Wt(e,t,n,i),r&2048&&Ys(t.alternate,t);break;default:Wt(e,t,n,i)}}function di(e,t,n,i,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,d=t,g=n,E=i,B=d.flags;switch(d.tag){case 0:case 11:case 15:di(s,d,g,E,r),yl(8,d);break;case 23:break;case 22:var F=d.stateNode;d.memoizedState!==null?F._visibility&2?di(s,d,g,E,r):xl(s,d):(F._visibility|=2,di(s,d,g,E,r)),r&&B&2048&&qs(d.alternate,d);break;case 24:di(s,d,g,E,r),r&&B&2048&&Ys(d.alternate,d);break;default:di(s,d,g,E,r)}t=t.sibling}}function xl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,r=i.flags;switch(i.tag){case 22:xl(n,i),r&2048&&qs(i.alternate,i);break;case 24:xl(n,i),r&2048&&Ys(i.alternate,i);break;default:xl(n,i)}t=t.sibling}}var Sl=8192;function hi(e,t,n){if(e.subtreeFlags&Sl)for(e=e.child;e!==null;)jp(e,t,n),e=e.sibling}function jp(e,t,n){switch(e.tag){case 26:hi(e,t,n),e.flags&Sl&&e.memoizedState!==null&&g2(n,Pt,e.memoizedState,e.memoizedProps);break;case 5:hi(e,t,n);break;case 3:case 4:var i=Pt;Pt=cu(e.stateNode.containerInfo),hi(e,t,n),Pt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Sl,Sl=16777216,hi(e,t,n),Sl=i):hi(e,t,n));break;default:hi(e,t,n)}}function Mp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function wl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];tt=i,Dp(i,e)}Mp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Np(e),e=e.sibling}function Np(e){switch(e.tag){case 0:case 11:case 15:wl(e),e.flags&2048&&Wn(9,e,e.return);break;case 3:wl(e);break;case 12:wl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Wr(e)):wl(e);break;default:wl(e)}}function Wr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];tt=i,Dp(i,e)}Mp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wn(8,t,t.return),Wr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Wr(t));break;default:Wr(t)}e=e.sibling}}function Dp(e,t){for(;tt!==null;){var n=tt;switch(n.tag){case 0:case 11:case 15:Wn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ll(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,tt=i;else e:for(n=e;tt!==null;){i=tt;var r=i.sibling,s=i.return;if(Tp(i),i===n){tt=null;break e}if(r!==null){r.return=s,tt=r;break e}tt=s}}}var My={getCacheForType:function(e){var t=rt(Ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return rt(Ke).controller.signal}},Ny=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Le=null,be=null,Se=0,Ae=0,At=null,Fn=!1,pi=!1,Gs=!1,_n=0,Ve=0,In=0,Ma=0,Xs=0,jt=0,mi=0,El=null,bt=null,Vs=!1,Fr=0,Lp=0,Ir=1/0,eu=null,ea=null,Ie=0,ta=null,vi=null,On=0,Qs=0,Zs=null,kp=null,Tl=0,Ks=null;function Mt(){return(Oe&2)!==0&&Se!==0?Se&-Se:z.T!==null?ec():Ff()}function Up(){if(jt===0)if((Se&536870912)===0||Ee){var e=or;or<<=1,(or&3932160)===0&&(or=262144),jt=e}else jt=536870912;return e=Ot.current,e!==null&&(e.flags|=32),jt}function xt(e,t,n){(e===Le&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(gi(e,0),na(e,Se,jt,!1)),Vi(e,n),((Oe&2)===0||e!==Le)&&(e===Le&&((Oe&2)===0&&(Ma|=n),Ve===4&&na(e,Se,jt,!1)),ln(e))}function Hp(e,t,n){if((Oe&6)!==0)throw Error(u(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Xi(e,t),r=i?ky(e,t):Ps(e,t,!0),s=i;do{if(r===0){pi&&!i&&na(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!Dy(n)){r=Ps(e,t,!1),s=!1;continue}if(r===2){if(s=t,e.errorRecoveryDisabledLanes&s)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var g=e;r=El;var E=g.current.memoizedState.isDehydrated;if(E&&(gi(g,d).flags|=256),d=Ps(g,d,!1),d!==2){if(Gs&&!E){g.errorRecoveryDisabledLanes|=s,Ma|=s,r=4;break e}s=bt,bt=r,s!==null&&(bt===null?bt=s:bt.push.apply(bt,s))}r=d}if(s=!1,r!==2)continue}}if(r===1){gi(e,0),na(e,t,0,!0);break}e:{switch(i=e,s=r,s){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:na(i,t,jt,!Fn);break e;case 2:bt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(r=Fr+300-Et(),10<r)){if(na(i,t,jt,!Fn),cr(i,0,!0)!==0)break e;On=t,i.timeoutHandle=m0(Bp.bind(null,i,n,bt,eu,Vs,t,jt,Ma,mi,Fn,s,"Throttled",-0,0),r);break e}Bp(i,n,bt,eu,Vs,t,jt,Ma,mi,Fn,s,null,-0,0)}}break}while(!0);ln(e)}function Bp(e,t,n,i,r,s,d,g,E,B,F,te,Y,Q){if(e.timeoutHandle=-1,te=t.subtreeFlags,te&8192||(te&16785408)===16785408){te={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:hn},jp(t,s,te);var ue=(s&62914560)===s?Fr-Et():(s&4194048)===s?Lp-Et():0;if(ue=y2(te,ue),ue!==null){On=s,e.cancelPendingCommit=ue(Zp.bind(null,e,t,s,n,i,r,d,g,E,F,te,null,Y,Q)),na(e,s,d,!B);return}}Zp(e,t,s,n,i,r,d,g,E)}function Dy(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Rt(s(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function na(e,t,n,i){t&=~Xs,t&=~Ma,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var r=t;0<r;){var s=31-Ct(r),d=1<<s;i[s]=-1,r&=~d}n!==0&&Jf(e,n,t)}function tu(){return(Oe&6)===0?(Cl(0),!1):!0}function Js(){if(be!==null){if(Ae===0)var e=be.return;else e=be,gn=Ea=null,fs(e),ui=null,ul=0,e=be;for(;e!==null;)vp(e.alternate,e),e=e.return;be=null}}function gi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,e2(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),On=0,Js(),Le=e,be=n=mn(e.current,null),Se=t,Ae=0,At=null,Fn=!1,pi=Xi(e,t),Gs=!1,mi=jt=Xs=Ma=In=Ve=0,bt=El=null,Vs=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-Ct(i),s=1<<r;t|=e[r],i&=~s}return _n=t,wr(),n}function $p(e,t){me=null,z.H=ml,t===ri||t===Ar?(t=nh(),Ae=3):t===Io?(t=nh(),Ae=4):Ae=t===_s?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,At=t,be===null&&(Ve=1,Xr(e,$t(t,e.current)))}function qp(){var e=Ot.current;return e===null?!0:(Se&4194048)===Se?Xt===null:(Se&62914560)===Se||(Se&536870912)!==0?e===Xt:!1}function Yp(){var e=z.H;return z.H=ml,e===null?ml:e}function Gp(){var e=z.A;return z.A=My,e}function nu(){Ve=4,Fn||(Se&4194048)!==Se&&Ot.current!==null||(pi=!0),(In&134217727)===0&&(Ma&134217727)===0||Le===null||na(Le,Se,jt,!1)}function Ps(e,t,n){var i=Oe;Oe|=2;var r=Yp(),s=Gp();(Le!==e||Se!==t)&&(eu=null,gi(e,t)),t=!1;var d=Ve;e:do try{if(Ae!==0&&be!==null){var g=be,E=At;switch(Ae){case 8:Js(),d=6;break e;case 3:case 2:case 9:case 6:Ot.current===null&&(t=!0);var B=Ae;if(Ae=0,At=null,yi(e,g,E,B),n&&pi){d=0;break e}break;default:B=Ae,Ae=0,At=null,yi(e,g,E,B)}}Ly(),d=Ve;break}catch(F){$p(e,F)}while(!0);return t&&e.shellSuspendCounter++,gn=Ea=null,Oe=i,z.H=r,z.A=s,be===null&&(Le=null,Se=0,wr()),d}function Ly(){for(;be!==null;)Xp(be)}function ky(e,t){var n=Oe;Oe|=2;var i=Yp(),r=Gp();Le!==e||Se!==t?(eu=null,Ir=Et()+500,gi(e,t)):pi=Xi(e,t);e:do try{if(Ae!==0&&be!==null){t=be;var s=At;t:switch(Ae){case 1:Ae=0,At=null,yi(e,t,s,1);break;case 2:case 9:if(eh(s)){Ae=0,At=null,Vp(t);break}t=function(){Ae!==2&&Ae!==9||Le!==e||(Ae=7),ln(e)},s.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:eh(s)?(Ae=0,At=null,Vp(t)):(Ae=0,At=null,yi(e,t,s,7));break;case 5:var d=null;switch(be.tag){case 26:d=be.memoizedState;case 5:case 27:var g=be;if(d?A0(d):g.stateNode.complete){Ae=0,At=null;var E=g.sibling;if(E!==null)be=E;else{var B=g.return;B!==null?(be=B,au(B)):be=null}break t}}Ae=0,At=null,yi(e,t,s,5);break;case 6:Ae=0,At=null,yi(e,t,s,6);break;case 8:Js(),Ve=6;break e;default:throw Error(u(462))}}Uy();break}catch(F){$p(e,F)}while(!0);return gn=Ea=null,z.H=i,z.A=r,Oe=n,be!==null?0:(Le=null,Se=0,wr(),Ve)}function Uy(){for(;be!==null&&!rg();)Xp(be)}function Xp(e){var t=pp(e.alternate,e,_n);e.memoizedProps=e.pendingProps,t===null?au(e):be=t}function Vp(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=op(n,t,t.pendingProps,t.type,void 0,Se);break;case 11:t=op(n,t,t.pendingProps,t.type.render,t.ref,Se);break;case 5:fs(t);default:vp(n,t),t=be=Gd(t,_n),t=pp(n,t,_n)}e.memoizedProps=e.pendingProps,t===null?au(e):be=t}function yi(e,t,n,i){gn=Ea=null,fs(t),ui=null,ul=0;var r=t.return;try{if(Cy(e,r,t,n,Se)){Ve=1,Xr(e,$t(n,e.current)),be=null;return}}catch(s){if(r!==null)throw be=r,s;Ve=1,Xr(e,$t(n,e.current)),be=null;return}t.flags&32768?(Ee||i===1?e=!0:pi||(Se&536870912)!==0?e=!1:(Fn=e=!0,(i===2||i===9||i===3||i===6)&&(i=Ot.current,i!==null&&i.tag===13&&(i.flags|=16384))),Qp(t,e)):au(t)}function au(e){var t=e;do{if((t.flags&32768)!==0){Qp(t,Fn);return}e=t.return;var n=Oy(t.alternate,t,_n);if(n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Ve===0&&(Ve=5)}function Qp(e,t){do{var n=zy(e.alternate,e);if(n!==null){n.flags&=32767,be=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){be=e;return}be=e=n}while(e!==null);Ve=6,be=null}function Zp(e,t,n,i,r,s,d,g,E){e.cancelPendingCommit=null;do iu();while(Ie!==0);if((Oe&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(s=t.lanes|t.childLanes,s|=Ho,vg(e,n,s,d,g,E),e===Le&&(be=Le=null,Se=0),vi=t,ta=e,On=n,Qs=s,Zs=r,kp=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,qy(rr,function(){return Fp(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=z.T,z.T=null,r=$.p,$.p=2,d=Oe,Oe|=4;try{Ay(e,t,n)}finally{Oe=d,$.p=r,z.T=i}}Ie=1,Kp(),Jp(),Pp()}}function Kp(){if(Ie===1){Ie=0;var e=ta,t=vi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=z.T,z.T=null;var i=$.p;$.p=2;var r=Oe;Oe|=4;try{Op(t,e);var s=oc,d=Dd(e.containerInfo),g=s.focusedElem,E=s.selectionRange;if(d!==g&&g&&g.ownerDocument&&Nd(g.ownerDocument.documentElement,g)){if(E!==null&&No(g)){var B=E.start,F=E.end;if(F===void 0&&(F=B),"selectionStart"in g)g.selectionStart=B,g.selectionEnd=Math.min(F,g.value.length);else{var te=g.ownerDocument||document,Y=te&&te.defaultView||window;if(Y.getSelection){var Q=Y.getSelection(),ue=g.textContent.length,de=Math.min(E.start,ue),De=E.end===void 0?de:Math.min(E.end,ue);!Q.extend&&de>De&&(d=De,De=de,de=d);var N=Md(g,de),_=Md(g,De);if(N&&_&&(Q.rangeCount!==1||Q.anchorNode!==N.node||Q.anchorOffset!==N.offset||Q.focusNode!==_.node||Q.focusOffset!==_.offset)){var U=te.createRange();U.setStart(N.node,N.offset),Q.removeAllRanges(),de>De?(Q.addRange(U),Q.extend(_.node,_.offset)):(U.setEnd(_.node,_.offset),Q.addRange(U))}}}}for(te=[],Q=g;Q=Q.parentNode;)Q.nodeType===1&&te.push({element:Q,left:Q.scrollLeft,top:Q.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<te.length;g++){var I=te[g];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}vu=!!uc,oc=uc=null}finally{Oe=r,$.p=i,z.T=n}}e.current=t,Ie=2}}function Jp(){if(Ie===2){Ie=0;var e=ta,t=vi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=z.T,z.T=null;var i=$.p;$.p=2;var r=Oe;Oe|=4;try{Ep(e,t.alternate,t)}finally{Oe=r,$.p=i,z.T=n}}Ie=3}}function Pp(){if(Ie===4||Ie===3){Ie=0,ug();var e=ta,t=vi,n=On,i=kp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ie=5:(Ie=0,vi=ta=null,Wp(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(ea=null),po(n),t=t.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Gi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=z.T,r=$.p,$.p=2,z.T=null;try{for(var s=e.onRecoverableError,d=0;d<i.length;d++){var g=i[d];s(g.value,{componentStack:g.stack})}}finally{z.T=t,$.p=r}}(On&3)!==0&&iu(),ln(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===Ks?Tl++:(Tl=0,Ks=e):Tl=0,Cl(0)}}function Wp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ll(t)))}function iu(){return Kp(),Jp(),Pp(),Fp()}function Fp(){if(Ie!==5)return!1;var e=ta,t=Qs;Qs=0;var n=po(On),i=z.T,r=$.p;try{$.p=32>n?32:n,z.T=null,n=Zs,Zs=null;var s=ta,d=On;if(Ie=0,vi=ta=null,On=0,(Oe&6)!==0)throw Error(u(331));var g=Oe;if(Oe|=4,Np(s.current),Ap(s,s.current,d,n),Oe=g,Cl(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Gi,s)}catch{}return!0}finally{$.p=r,z.T=i,Wp(e,t)}}function Ip(e,t,n){t=$t(n,t),t=Rs(e.stateNode,t,2),e=Kn(e,t,2),e!==null&&(Vi(e,2),ln(e))}function je(e,t,n){if(e.tag===3)Ip(e,e,n);else for(;t!==null;){if(t.tag===3){Ip(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ea===null||!ea.has(i))){e=$t(n,e),n=ep(2),i=Kn(t,n,2),i!==null&&(tp(n,i,t,e),Vi(i,2),ln(i));break}}t=t.return}}function Ws(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Ny;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(Gs=!0,r.add(n),e=Hy.bind(null,e,t,n),t.then(e,e))}function Hy(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Le===e&&(Se&n)===n&&(Ve===4||Ve===3&&(Se&62914560)===Se&&300>Et()-Fr?(Oe&2)===0&&gi(e,0):Xs|=n,mi===Se&&(mi=0)),ln(e)}function e0(e,t){t===0&&(t=Kf()),e=xa(e,t),e!==null&&(Vi(e,t),ln(e))}function By(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),e0(e,n)}function $y(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(u(314))}i!==null&&i.delete(t),e0(e,n)}function qy(e,t){return so(e,t)}var lu=null,bi=null,Fs=!1,ru=!1,Is=!1,aa=0;function ln(e){e!==bi&&e.next===null&&(bi===null?lu=bi=e:bi=bi.next=e),ru=!0,Fs||(Fs=!0,Gy())}function Cl(e,t){if(!Is&&ru){Is=!0;do for(var n=!1,i=lu;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var s=0;else{var d=i.suspendedLanes,g=i.pingedLanes;s=(1<<31-Ct(42|e)+1)-1,s&=r&~(d&~g),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,i0(i,s))}else s=Se,s=cr(i,i===Le?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||Xi(i,s)||(n=!0,i0(i,s));i=i.next}while(n);Is=!1}}function Yy(){t0()}function t0(){ru=Fs=!1;var e=0;aa!==0&&Iy()&&(e=aa);for(var t=Et(),n=null,i=lu;i!==null;){var r=i.next,s=n0(i,t);s===0?(i.next=null,n===null?lu=r:n.next=r,r===null&&(bi=n)):(n=i,(e!==0||(s&3)!==0)&&(ru=!0)),i=r}Ie!==0&&Ie!==5||Cl(e),aa!==0&&(aa=0)}function n0(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var d=31-Ct(s),g=1<<d,E=r[d];E===-1?((g&n)===0||(g&i)!==0)&&(r[d]=mg(g,t)):E<=t&&(e.expiredLanes|=g),s&=~g}if(t=Le,n=Se,n=cr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&co(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Xi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&co(i),po(n)){case 2:case 8:n=Qf;break;case 32:n=rr;break;case 268435456:n=Zf;break;default:n=rr}return i=a0.bind(null,e),n=so(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&co(i),e.callbackPriority=2,e.callbackNode=null,2}function a0(e,t){if(Ie!==0&&Ie!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(iu()&&e.callbackNode!==n)return null;var i=Se;return i=cr(e,e===Le?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Hp(e,i,t),n0(e,Et()),e.callbackNode!=null&&e.callbackNode===n?a0.bind(null,e):null)}function i0(e,t){if(iu())return null;Hp(e,t,!0)}function Gy(){t2(function(){(Oe&6)!==0?so(Vf,Yy):t0()})}function ec(){if(aa===0){var e=ii;e===0&&(e=ur,ur<<=1,(ur&261888)===0&&(ur=256)),aa=e}return aa}function l0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pr(""+e)}function r0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Xy(e,t,n,i,r){if(t==="submit"&&n&&n.stateNode===r){var s=l0((r[pt]||null).action),d=i.submitter;d&&(t=(t=d[pt]||null)?l0(t.formAction):d.getAttribute("formAction"),t!==null&&(s=t,d=null));var g=new yr("action","action",null,i,r);e.push({event:g,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(aa!==0){var E=d?r0(r,d):new FormData(r);xs(n,{pending:!0,data:E,method:r.method,action:s},null,E)}}else typeof s=="function"&&(g.preventDefault(),E=d?r0(r,d):new FormData(r),xs(n,{pending:!0,data:E,method:r.method,action:s},s,E))},currentTarget:r}]})}}for(var tc=0;tc<Uo.length;tc++){var nc=Uo[tc],Vy=nc.toLowerCase(),Qy=nc[0].toUpperCase()+nc.slice(1);Jt(Vy,"on"+Qy)}Jt(Ud,"onAnimationEnd"),Jt(Hd,"onAnimationIteration"),Jt(Bd,"onAnimationStart"),Jt("dblclick","onDoubleClick"),Jt("focusin","onFocus"),Jt("focusout","onBlur"),Jt(oy,"onTransitionRun"),Jt(sy,"onTransitionStart"),Jt(cy,"onTransitionCancel"),Jt($d,"onTransitionEnd"),Xa("onMouseEnter",["mouseout","mouseover"]),Xa("onMouseLeave",["mouseout","mouseover"]),Xa("onPointerEnter",["pointerout","pointerover"]),Xa("onPointerLeave",["pointerout","pointerover"]),va("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),va("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),va("onBeforeInput",["compositionend","keypress","textInput","paste"]),va("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),va("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),va("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rl));function u0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var d=i.length-1;0<=d;d--){var g=i[d],E=g.instance,B=g.currentTarget;if(g=g.listener,E!==s&&r.isPropagationStopped())break e;s=g,r.currentTarget=B;try{s(r)}catch(F){Sr(F)}r.currentTarget=null,s=E}else for(d=0;d<i.length;d++){if(g=i[d],E=g.instance,B=g.currentTarget,g=g.listener,E!==s&&r.isPropagationStopped())break e;s=g,r.currentTarget=B;try{s(r)}catch(F){Sr(F)}r.currentTarget=null,s=E}}}}function xe(e,t){var n=t[mo];n===void 0&&(n=t[mo]=new Set);var i=e+"__bubble";n.has(i)||(o0(t,e,2,!1),n.add(i))}function ac(e,t,n){var i=0;t&&(i|=4),o0(n,e,i,t)}var uu="_reactListening"+Math.random().toString(36).slice(2);function ic(e){if(!e[uu]){e[uu]=!0,td.forEach(function(n){n!=="selectionchange"&&(Zy.has(n)||ac(n,!1,e),ac(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[uu]||(t[uu]=!0,ac("selectionchange",!1,t))}}function o0(e,t,n,i){switch(U0(t)){case 2:var r=S2;break;case 8:r=w2;break;default:r=bc}n=r.bind(null,t,n,e),r=void 0,!To||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function lc(e,t,n,i,r){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var g=i.stateNode.containerInfo;if(g===r)break;if(d===4)for(d=i.return;d!==null;){var E=d.tag;if((E===3||E===4)&&d.stateNode.containerInfo===r)return;d=d.return}for(;g!==null;){if(d=qa(g),d===null)return;if(E=d.tag,E===5||E===6||E===26||E===27){i=s=d;continue e}g=g.parentNode}}i=i.return}hd(function(){var B=s,F=wo(n),te=[];e:{var Y=qd.get(e);if(Y!==void 0){var Q=yr,ue=e;switch(e){case"keypress":if(vr(n)===0)break e;case"keydown":case"keyup":Q=$g;break;case"focusin":ue="focus",Q=Oo;break;case"focusout":ue="blur",Q=Oo;break;case"beforeblur":case"afterblur":Q=Oo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=Og;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=Gg;break;case Ud:case Hd:case Bd:Q=jg;break;case $d:Q=Vg;break;case"scroll":case"scrollend":Q=Rg;break;case"wheel":Q=Zg;break;case"copy":case"cut":case"paste":Q=Ng;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=yd;break;case"toggle":case"beforetoggle":Q=Jg}var de=(t&4)!==0,De=!de&&(e==="scroll"||e==="scrollend"),N=de?Y!==null?Y+"Capture":null:Y;de=[];for(var _=B,U;_!==null;){var I=_;if(U=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||U===null||N===null||(I=Ki(_,N),I!=null&&de.push(_l(_,I,U))),De)break;_=_.return}0<de.length&&(Y=new Q(Y,ue,null,n,F),te.push({event:Y,listeners:de}))}}if((t&7)===0){e:{if(Y=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",Y&&n!==So&&(ue=n.relatedTarget||n.fromElement)&&(qa(ue)||ue[$a]))break e;if((Q||Y)&&(Y=F.window===F?F:(Y=F.ownerDocument)?Y.defaultView||Y.parentWindow:window,Q?(ue=n.relatedTarget||n.toElement,Q=B,ue=ue?qa(ue):null,ue!==null&&(De=f(ue),de=ue.tag,ue!==De||de!==5&&de!==27&&de!==6)&&(ue=null)):(Q=null,ue=B),Q!==ue)){if(de=vd,I="onMouseLeave",N="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(de=yd,I="onPointerLeave",N="onPointerEnter",_="pointer"),De=Q==null?Y:Zi(Q),U=ue==null?Y:Zi(ue),Y=new de(I,_+"leave",Q,n,F),Y.target=De,Y.relatedTarget=U,I=null,qa(F)===B&&(de=new de(N,_+"enter",ue,n,F),de.target=U,de.relatedTarget=De,I=de),De=I,Q&&ue)t:{for(de=Ky,N=Q,_=ue,U=0,I=N;I;I=de(I))U++;I=0;for(var fe=_;fe;fe=de(fe))I++;for(;0<U-I;)N=de(N),U--;for(;0<I-U;)_=de(_),I--;for(;U--;){if(N===_||_!==null&&N===_.alternate){de=N;break t}N=de(N),_=de(_)}de=null}else de=null;Q!==null&&s0(te,Y,Q,de,!1),ue!==null&&De!==null&&s0(te,De,ue,de,!0)}}e:{if(Y=B?Zi(B):window,Q=Y.nodeName&&Y.nodeName.toLowerCase(),Q==="select"||Q==="input"&&Y.type==="file")var Re=Rd;else if(Td(Y))if(_d)Re=ly;else{Re=ay;var oe=ny}else Q=Y.nodeName,!Q||Q.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?B&&xo(B.elementType)&&(Re=Rd):Re=iy;if(Re&&(Re=Re(e,B))){Cd(te,Re,n,F);break e}oe&&oe(e,Y,B),e==="focusout"&&B&&Y.type==="number"&&B.memoizedProps.value!=null&&bo(Y,"number",Y.value)}switch(oe=B?Zi(B):window,e){case"focusin":(Td(oe)||oe.contentEditable==="true")&&(Pa=oe,Do=B,nl=null);break;case"focusout":nl=Do=Pa=null;break;case"mousedown":Lo=!0;break;case"contextmenu":case"mouseup":case"dragend":Lo=!1,Ld(te,n,F);break;case"selectionchange":if(uy)break;case"keydown":case"keyup":Ld(te,n,F)}var ve;if(Ao)e:{switch(e){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Ja?wd(e,n)&&(we="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(we="onCompositionStart");we&&(bd&&n.locale!=="ko"&&(Ja||we!=="onCompositionStart"?we==="onCompositionEnd"&&Ja&&(ve=pd()):(qn=F,Co="value"in qn?qn.value:qn.textContent,Ja=!0)),oe=ou(B,we),0<oe.length&&(we=new gd(we,e,null,n,F),te.push({event:we,listeners:oe}),ve?we.data=ve:(ve=Ed(n),ve!==null&&(we.data=ve)))),(ve=Wg?Fg(e,n):Ig(e,n))&&(we=ou(B,"onBeforeInput"),0<we.length&&(oe=new gd("onBeforeInput","beforeinput",null,n,F),te.push({event:oe,listeners:we}),oe.data=ve)),Xy(te,e,B,n,F)}u0(te,t)})}function _l(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ou(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=Ki(e,n),r!=null&&i.unshift(_l(e,r,s)),r=Ki(e,t),r!=null&&i.push(_l(e,r,s))),e.tag===3)return i;e=e.return}return[]}function Ky(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function s0(e,t,n,i,r){for(var s=t._reactName,d=[];n!==null&&n!==i;){var g=n,E=g.alternate,B=g.stateNode;if(g=g.tag,E!==null&&E===i)break;g!==5&&g!==26&&g!==27||B===null||(E=B,r?(B=Ki(n,s),B!=null&&d.unshift(_l(n,B,E))):r||(B=Ki(n,s),B!=null&&d.push(_l(n,B,E)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var Jy=/\r\n?/g,Py=/\u0000|\uFFFD/g;function c0(e){return(typeof e=="string"?e:""+e).replace(Jy,`
`).replace(Py,"")}function f0(e,t){return t=c0(t),c0(e)===t}function Ne(e,t,n,i,r,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Qa(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Qa(e,""+i);break;case"className":dr(e,"class",i);break;case"tabIndex":dr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":dr(e,n,i);break;case"style":fd(e,i,s);break;case"data":if(t!=="object"){dr(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=pr(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&Ne(e,t,"name",r.name,r,null),Ne(e,t,"formEncType",r.formEncType,r,null),Ne(e,t,"formMethod",r.formMethod,r,null),Ne(e,t,"formTarget",r.formTarget,r,null)):(Ne(e,t,"encType",r.encType,r,null),Ne(e,t,"method",r.method,r,null),Ne(e,t,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=pr(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=hn);break;case"onScroll":i!=null&&xe("scroll",e);break;case"onScrollEnd":i!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=pr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":xe("beforetoggle",e),xe("toggle",e),fr(e,"popover",i);break;case"xlinkActuate":dn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":dn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":dn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":dn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":dn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":dn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":dn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":dn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":dn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":fr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Tg.get(n)||n,fr(e,n,i))}}function rc(e,t,n,i,r,s){switch(n){case"style":fd(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Qa(e,i):(typeof i=="number"||typeof i=="bigint")&&Qa(e,""+i);break;case"onScroll":i!=null&&xe("scroll",e);break;case"onScrollEnd":i!=null&&xe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=hn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),s=e[pt]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,r),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,r);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):fr(e,n,i)}}}function ot(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var i=!1,r=!1,s;for(s in n)if(n.hasOwnProperty(s)){var d=n[s];if(d!=null)switch(s){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ne(e,t,s,d,n,null)}}r&&Ne(e,t,"srcSet",n.srcSet,n,null),i&&Ne(e,t,"src",n.src,n,null);return;case"input":xe("invalid",e);var g=s=d=r=null,E=null,B=null;for(i in n)if(n.hasOwnProperty(i)){var F=n[i];if(F!=null)switch(i){case"name":r=F;break;case"type":d=F;break;case"checked":E=F;break;case"defaultChecked":B=F;break;case"value":s=F;break;case"defaultValue":g=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(u(137,t));break;default:Ne(e,t,i,F,n,null)}}ud(e,s,g,E,B,d,r,!1);return;case"select":xe("invalid",e),i=d=s=null;for(r in n)if(n.hasOwnProperty(r)&&(g=n[r],g!=null))switch(r){case"value":s=g;break;case"defaultValue":d=g;break;case"multiple":i=g;default:Ne(e,t,r,g,n,null)}t=s,n=d,e.multiple=!!i,t!=null?Va(e,!!i,t,!1):n!=null&&Va(e,!!i,n,!0);return;case"textarea":xe("invalid",e),s=r=i=null;for(d in n)if(n.hasOwnProperty(d)&&(g=n[d],g!=null))switch(d){case"value":i=g;break;case"defaultValue":r=g;break;case"children":s=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(u(91));break;default:Ne(e,t,d,g,n,null)}sd(e,i,r,s);return;case"option":for(E in n)if(n.hasOwnProperty(E)&&(i=n[E],i!=null))switch(E){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ne(e,t,E,i,n,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(i=0;i<Rl.length;i++)xe(Rl[i],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in n)if(n.hasOwnProperty(B)&&(i=n[B],i!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ne(e,t,B,i,n,null)}return;default:if(xo(t)){for(F in n)n.hasOwnProperty(F)&&(i=n[F],i!==void 0&&rc(e,t,F,i,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(i=n[g],i!=null&&Ne(e,t,g,i,n,null))}function Wy(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,d=null,g=null,E=null,B=null,F=null;for(Q in n){var te=n[Q];if(n.hasOwnProperty(Q)&&te!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":E=te;default:i.hasOwnProperty(Q)||Ne(e,t,Q,null,i,te)}}for(var Y in i){var Q=i[Y];if(te=n[Y],i.hasOwnProperty(Y)&&(Q!=null||te!=null))switch(Y){case"type":s=Q;break;case"name":r=Q;break;case"checked":B=Q;break;case"defaultChecked":F=Q;break;case"value":d=Q;break;case"defaultValue":g=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(u(137,t));break;default:Q!==te&&Ne(e,t,Y,Q,i,te)}}yo(e,d,g,E,B,F,s,r);return;case"select":Q=d=g=Y=null;for(s in n)if(E=n[s],n.hasOwnProperty(s)&&E!=null)switch(s){case"value":break;case"multiple":Q=E;default:i.hasOwnProperty(s)||Ne(e,t,s,null,i,E)}for(r in i)if(s=i[r],E=n[r],i.hasOwnProperty(r)&&(s!=null||E!=null))switch(r){case"value":Y=s;break;case"defaultValue":g=s;break;case"multiple":d=s;default:s!==E&&Ne(e,t,r,s,i,E)}t=g,n=d,i=Q,Y!=null?Va(e,!!n,Y,!1):!!i!=!!n&&(t!=null?Va(e,!!n,t,!0):Va(e,!!n,n?[]:"",!1));return;case"textarea":Q=Y=null;for(g in n)if(r=n[g],n.hasOwnProperty(g)&&r!=null&&!i.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Ne(e,t,g,null,i,r)}for(d in i)if(r=i[d],s=n[d],i.hasOwnProperty(d)&&(r!=null||s!=null))switch(d){case"value":Y=r;break;case"defaultValue":Q=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(u(91));break;default:r!==s&&Ne(e,t,d,r,i,s)}od(e,Y,Q);return;case"option":for(var ue in n)if(Y=n[ue],n.hasOwnProperty(ue)&&Y!=null&&!i.hasOwnProperty(ue))switch(ue){case"selected":e.selected=!1;break;default:Ne(e,t,ue,null,i,Y)}for(E in i)if(Y=i[E],Q=n[E],i.hasOwnProperty(E)&&Y!==Q&&(Y!=null||Q!=null))switch(E){case"selected":e.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:Ne(e,t,E,Y,i,Q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in n)Y=n[de],n.hasOwnProperty(de)&&Y!=null&&!i.hasOwnProperty(de)&&Ne(e,t,de,null,i,Y);for(B in i)if(Y=i[B],Q=n[B],i.hasOwnProperty(B)&&Y!==Q&&(Y!=null||Q!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(u(137,t));break;default:Ne(e,t,B,Y,i,Q)}return;default:if(xo(t)){for(var De in n)Y=n[De],n.hasOwnProperty(De)&&Y!==void 0&&!i.hasOwnProperty(De)&&rc(e,t,De,void 0,i,Y);for(F in i)Y=i[F],Q=n[F],!i.hasOwnProperty(F)||Y===Q||Y===void 0&&Q===void 0||rc(e,t,F,Y,i,Q);return}}for(var N in n)Y=n[N],n.hasOwnProperty(N)&&Y!=null&&!i.hasOwnProperty(N)&&Ne(e,t,N,null,i,Y);for(te in i)Y=i[te],Q=n[te],!i.hasOwnProperty(te)||Y===Q||Y==null&&Q==null||Ne(e,t,te,Y,i,Q)}function d0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Fy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var r=n[i],s=r.transferSize,d=r.initiatorType,g=r.duration;if(s&&g&&d0(d)){for(d=0,g=r.responseEnd,i+=1;i<n.length;i++){var E=n[i],B=E.startTime;if(B>g)break;var F=E.transferSize,te=E.initiatorType;F&&d0(te)&&(E=E.responseEnd,d+=F*(E<g?1:(g-B)/(E-B)))}if(--i,t+=8*(s+d)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var uc=null,oc=null;function su(e){return e.nodeType===9?e:e.ownerDocument}function h0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function p0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function sc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cc=null;function Iy(){var e=window.event;return e&&e.type==="popstate"?e===cc?!1:(cc=e,!0):(cc=null,!1)}var m0=typeof setTimeout=="function"?setTimeout:void 0,e2=typeof clearTimeout=="function"?clearTimeout:void 0,v0=typeof Promise=="function"?Promise:void 0,t2=typeof queueMicrotask=="function"?queueMicrotask:typeof v0<"u"?function(e){return v0.resolve(null).then(e).catch(n2)}:m0;function n2(e){setTimeout(function(){throw e})}function ia(e){return e==="head"}function g0(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(r),Ei(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Ol(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ol(n);for(var s=n.firstChild;s;){var d=s.nextSibling,g=s.nodeName;s[Qi]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=d}}else n==="body"&&Ol(e.ownerDocument.body);n=r}while(n);Ei(t)}function y0(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function fc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":fc(n),vo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function a2(e,t,n,i){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Qi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Vt(e.nextSibling),e===null)break}return null}function i2(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Vt(e.nextSibling),e===null))return null;return e}function b0(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Vt(e.nextSibling),e===null))return null;return e}function dc(e){return e.data==="$?"||e.data==="$~"}function hc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function l2(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var pc=null;function x0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Vt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function S0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function w0(e,t,n){switch(t=su(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Ol(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);vo(e)}var Qt=new Map,E0=new Set;function cu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var zn=$.d;$.d={f:r2,r:u2,D:o2,C:s2,L:c2,m:f2,X:h2,S:d2,M:p2};function r2(){var e=zn.f(),t=tu();return e||t}function u2(e){var t=Ya(e);t!==null&&t.tag===5&&t.type==="form"?$h(t):zn.r(e)}var xi=typeof document>"u"?null:document;function T0(e,t,n){var i=xi;if(i&&typeof t=="string"&&t){var r=Ht(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),E0.has(r)||(E0.add(r),e={rel:e,crossOrigin:n,href:t},i.querySelector(r)===null&&(t=i.createElement("link"),ot(t,"link",e),et(t),i.head.appendChild(t)))}}function o2(e){zn.D(e),T0("dns-prefetch",e,null)}function s2(e,t){zn.C(e,t),T0("preconnect",e,t)}function c2(e,t,n){zn.L(e,t,n);var i=xi;if(i&&e&&t){var r='link[rel="preload"][as="'+Ht(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Ht(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Ht(n.imageSizes)+'"]')):r+='[href="'+Ht(e)+'"]';var s=r;switch(t){case"style":s=Si(e);break;case"script":s=wi(e)}Qt.has(s)||(e=x({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Qt.set(s,e),i.querySelector(r)!==null||t==="style"&&i.querySelector(zl(s))||t==="script"&&i.querySelector(Al(s))||(t=i.createElement("link"),ot(t,"link",e),et(t),i.head.appendChild(t)))}}function f2(e,t){zn.m(e,t);var n=xi;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Ht(i)+'"][href="'+Ht(e)+'"]',s=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=wi(e)}if(!Qt.has(s)&&(e=x({rel:"modulepreload",href:e},t),Qt.set(s,e),n.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Al(s)))return}i=n.createElement("link"),ot(i,"link",e),et(i),n.head.appendChild(i)}}}function d2(e,t,n){zn.S(e,t,n);var i=xi;if(i&&e){var r=Ga(i).hoistableStyles,s=Si(e);t=t||"default";var d=r.get(s);if(!d){var g={loading:0,preload:null};if(d=i.querySelector(zl(s)))g.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Qt.get(s))&&mc(e,n);var E=d=i.createElement("link");et(E),ot(E,"link",e),E._p=new Promise(function(B,F){E.onload=B,E.onerror=F}),E.addEventListener("load",function(){g.loading|=1}),E.addEventListener("error",function(){g.loading|=2}),g.loading|=4,fu(d,t,i)}d={type:"stylesheet",instance:d,count:1,state:g},r.set(s,d)}}}function h2(e,t){zn.X(e,t);var n=xi;if(n&&e){var i=Ga(n).hoistableScripts,r=wi(e),s=i.get(r);s||(s=n.querySelector(Al(r)),s||(e=x({src:e,async:!0},t),(t=Qt.get(r))&&vc(e,t),s=n.createElement("script"),et(s),ot(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function p2(e,t){zn.M(e,t);var n=xi;if(n&&e){var i=Ga(n).hoistableScripts,r=wi(e),s=i.get(r);s||(s=n.querySelector(Al(r)),s||(e=x({src:e,async:!0,type:"module"},t),(t=Qt.get(r))&&vc(e,t),s=n.createElement("script"),et(s),ot(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function C0(e,t,n,i){var r=(r=he.current)?cu(r):null;if(!r)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Si(n.href),n=Ga(r).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Si(n.href);var s=Ga(r).hoistableStyles,d=s.get(e);if(d||(r=r.ownerDocument||r,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,d),(s=r.querySelector(zl(e)))&&!s._p&&(d.instance=s,d.state.loading=5),Qt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Qt.set(e,n),s||m2(r,e,n,d.state))),t&&i===null)throw Error(u(528,""));return d}if(t&&i!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=wi(n),n=Ga(r).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Si(e){return'href="'+Ht(e)+'"'}function zl(e){return'link[rel="stylesheet"]['+e+"]"}function R0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function m2(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ot(t,"link",n),et(t),e.head.appendChild(t))}function wi(e){return'[src="'+Ht(e)+'"]'}function Al(e){return"script[async]"+e}function _0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ht(n.href)+'"]');if(i)return t.instance=i,et(i),i;var r=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),et(i),ot(i,"style",r),fu(i,n.precedence,e),t.instance=i;case"stylesheet":r=Si(n.href);var s=e.querySelector(zl(r));if(s)return t.state.loading|=4,t.instance=s,et(s),s;i=R0(n),(r=Qt.get(r))&&mc(i,r),s=(e.ownerDocument||e).createElement("link"),et(s);var d=s;return d._p=new Promise(function(g,E){d.onload=g,d.onerror=E}),ot(s,"link",i),t.state.loading|=4,fu(s,n.precedence,e),t.instance=s;case"script":return s=wi(n.src),(r=e.querySelector(Al(s)))?(t.instance=r,et(r),r):(i=n,(r=Qt.get(s))&&(i=x({},n),vc(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),et(r),ot(r,"link",i),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,fu(i,n.precedence,e));return t.instance}function fu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,s=r,d=0;d<i.length;d++){var g=i[d];if(g.dataset.precedence===t)s=g;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function mc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function vc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var du=null;function O0(e,t,n){if(du===null){var i=new Map,r=du=new Map;r.set(n,i)}else r=du,i=r.get(n),i||(i=new Map,r.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var s=n[r];if(!(s[Qi]||s[it]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var d=s.getAttribute(t)||"";d=e+d;var g=i.get(d);g?g.push(s):i.set(d,[s])}}return i}function z0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function v2(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function A0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function g2(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=Si(i.href),s=t.querySelector(zl(r));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=hu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,et(s);return}s=t.ownerDocument||t,i=R0(i),(r=Qt.get(r))&&mc(i,r),s=s.createElement("link"),et(s);var d=s;d._p=new Promise(function(g,E){d.onload=g,d.onerror=E}),ot(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=hu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var gc=0;function y2(e,t){return e.stylesheets&&e.count===0&&mu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&mu(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&gc===0&&(gc=62500*Fy());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&mu(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>gc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function hu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)mu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var pu=null;function mu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,pu=new Map,t.forEach(b2,e),pu=null,hu.call(e))}function b2(e,t){if(!(t.state.loading&4)){var n=pu.get(e);if(n)var i=n.get(null);else{n=new Map,pu.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var d=r[s];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),i=d)}i&&n.set(null,i)}r=t.instance,d=r.getAttribute("data-precedence"),s=n.get(d)||i,s===i&&n.set(null,r),n.set(d,r),this.count++,i=hu.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var jl={$$typeof:H,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function x2(e,t,n,i,r,s,d,g,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fo(0),this.hiddenUpdates=fo(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function j0(e,t,n,i,r,s,d,g,E,B,F,te){return e=new x2(e,t,n,d,E,B,F,te,g),t=1,s===!0&&(t|=24),s=_t(3,null,null,t),e.current=s,s.stateNode=e,t=Po(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},es(s),e}function M0(e){return e?(e=Ia,e):Ia}function N0(e,t,n,i,r,s){r=M0(r),i.context===null?i.context=r:i.pendingContext=r,i=Zn(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Kn(e,i,t),n!==null&&(xt(n,e,t),sl(n,e,t))}function D0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yc(e,t){D0(e,t),(e=e.alternate)&&D0(e,t)}function L0(e){if(e.tag===13||e.tag===31){var t=xa(e,67108864);t!==null&&xt(t,e,67108864),yc(e,67108864)}}function k0(e){if(e.tag===13||e.tag===31){var t=Mt();t=ho(t);var n=xa(e,t);n!==null&&xt(n,e,t),yc(e,t)}}var vu=!0;function S2(e,t,n,i){var r=z.T;z.T=null;var s=$.p;try{$.p=2,bc(e,t,n,i)}finally{$.p=s,z.T=r}}function w2(e,t,n,i){var r=z.T;z.T=null;var s=$.p;try{$.p=8,bc(e,t,n,i)}finally{$.p=s,z.T=r}}function bc(e,t,n,i){if(vu){var r=xc(i);if(r===null)lc(e,t,i,gu,n),H0(e,i);else if(T2(r,e,t,n,i))i.stopPropagation();else if(H0(e,i),t&4&&-1<E2.indexOf(e)){for(;r!==null;){var s=Ya(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var d=ma(s.pendingLanes);if(d!==0){var g=s;for(g.pendingLanes|=2,g.entangledLanes|=2;d;){var E=1<<31-Ct(d);g.entanglements[1]|=E,d&=~E}ln(s),(Oe&6)===0&&(Ir=Et()+500,Cl(0))}}break;case 31:case 13:g=xa(s,2),g!==null&&xt(g,s,2),tu(),yc(s,2)}if(s=xc(i),s===null&&lc(e,t,i,gu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else lc(e,t,i,null,n)}}function xc(e){return e=wo(e),Sc(e)}var gu=null;function Sc(e){if(gu=null,e=qa(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return gu=e,null}function U0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(og()){case Vf:return 2;case Qf:return 8;case rr:case sg:return 32;case Zf:return 268435456;default:return 32}default:return 32}}var wc=!1,la=null,ra=null,ua=null,Ml=new Map,Nl=new Map,oa=[],E2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function H0(e,t){switch(e){case"focusin":case"focusout":la=null;break;case"dragenter":case"dragleave":ra=null;break;case"mouseover":case"mouseout":ua=null;break;case"pointerover":case"pointerout":Ml.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nl.delete(t.pointerId)}}function Dl(e,t,n,i,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},t!==null&&(t=Ya(t),t!==null&&L0(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function T2(e,t,n,i,r){switch(t){case"focusin":return la=Dl(la,e,t,n,i,r),!0;case"dragenter":return ra=Dl(ra,e,t,n,i,r),!0;case"mouseover":return ua=Dl(ua,e,t,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ml.set(s,Dl(Ml.get(s)||null,e,t,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Nl.set(s,Dl(Nl.get(s)||null,e,t,n,i,r)),!0}return!1}function B0(e){var t=qa(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,If(e.priority,function(){k0(n)});return}}else if(t===31){if(t=y(n),t!==null){e.blockedOn=t,If(e.priority,function(){k0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xc(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);So=i,n.target.dispatchEvent(i),So=null}else return t=Ya(n),t!==null&&L0(t),e.blockedOn=n,!1;t.shift()}return!0}function $0(e,t,n){yu(e)&&n.delete(t)}function C2(){wc=!1,la!==null&&yu(la)&&(la=null),ra!==null&&yu(ra)&&(ra=null),ua!==null&&yu(ua)&&(ua=null),Ml.forEach($0),Nl.forEach($0)}function bu(e,t){e.blockedOn===t&&(e.blockedOn=null,wc||(wc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,C2)))}var xu=null;function q0(e){xu!==e&&(xu=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){xu===e&&(xu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],r=e[t+2];if(typeof i!="function"){if(Sc(i||n)===null)continue;break}var s=Ya(n);s!==null&&(e.splice(t,3),t-=3,xs(s,{pending:!0,data:r,method:n.method,action:i},i,r))}}))}function Ei(e){function t(E){return bu(E,e)}la!==null&&bu(la,e),ra!==null&&bu(ra,e),ua!==null&&bu(ua,e),Ml.forEach(t),Nl.forEach(t);for(var n=0;n<oa.length;n++){var i=oa[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<oa.length&&(n=oa[0],n.blockedOn===null);)B0(n),n.blockedOn===null&&oa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var r=n[i],s=n[i+1],d=r[pt]||null;if(typeof s=="function")d||q0(n);else if(d){var g=null;if(s&&s.hasAttribute("formAction")){if(r=s,d=s[pt]||null)g=d.formAction;else if(Sc(r)!==null)continue}else g=d.action;typeof g=="function"?n[i+1]=g:(n.splice(i,3),i-=3),q0(n)}}}function Y0(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(d){return r=d})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Ec(e){this._internalRoot=e}Su.prototype.render=Ec.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,i=Mt();N0(n,i,e,t,null,null)},Su.prototype.unmount=Ec.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;N0(e.current,2,null,e,null,null),tu(),t[$a]=null}};function Su(e){this._internalRoot=e}Su.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ff();e={blockedOn:null,target:e,priority:t};for(var n=0;n<oa.length&&t!==0&&t<oa[n].priority;n++);oa.splice(n,0,e),n===0&&B0(e)}};var G0=l.version;if(G0!=="19.2.0")throw Error(u(527,G0,"19.2.0"));$.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=m(t),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var R2={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wu.isDisabled&&wu.supportsFiber)try{Gi=wu.inject(R2),Tt=wu}catch{}}return kl.createRoot=function(e,t){if(!c(e))throw Error(u(299));var n=!1,i="",r=Ph,s=Wh,d=Fh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=j0(e,1,!1,null,null,n,i,null,r,s,d,Y0),e[$a]=t.current,ic(e),new Ec(t)},kl.hydrateRoot=function(e,t,n){if(!c(e))throw Error(u(299));var i=!1,r="",s=Ph,d=Wh,g=Fh,E=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.formState!==void 0&&(E=n.formState)),t=j0(e,1,!0,t,n??null,i,r,E,s,d,g,Y0),t.context=M0(null),n=t.current,i=Mt(),i=ho(i),r=Zn(i),r.callback=null,Kn(n,r,i),n=i,t.current.lanes=n,Vi(t,n),ln(t),e[$a]=t.current,ic(e),new Su(t)},kl.version="19.2.0",kl}var I0;function L2(){if(I0)return Rc.exports;I0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Rc.exports=D2(),Rc.exports}var k2=L2();const U2=tr(k2);/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var em="popstate";function H2(a={}){function l(u,c){let{pathname:f,search:h,hash:y}=u.location;return lf("",{pathname:f,search:h,hash:y},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function o(u,c){return typeof c=="string"?c:Fl(c)}return $2(l,o,null,a)}function Ge(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function sn(a,l){if(!a){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function B2(){return Math.random().toString(36).substring(2,10)}function tm(a,l){return{usr:a.state,key:a.key,idx:l}}function lf(a,l,o=null,u){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof l=="string"?ki(l):l,state:o,key:l&&l.key||u||B2()}}function Fl({pathname:a="/",search:l="",hash:o=""}){return l&&l!=="?"&&(a+=l.charAt(0)==="?"?l:"?"+l),o&&o!=="#"&&(a+=o.charAt(0)==="#"?o:"#"+o),a}function ki(a){let l={};if(a){let o=a.indexOf("#");o>=0&&(l.hash=a.substring(o),a=a.substring(0,o));let u=a.indexOf("?");u>=0&&(l.search=a.substring(u),a=a.substring(0,u)),a&&(l.pathname=a)}return l}function $2(a,l,o,u={}){let{window:c=document.defaultView,v5Compat:f=!1}=u,h=c.history,y="POP",v=null,m=S();m==null&&(m=0,h.replaceState({...h.state,idx:m},""));function S(){return(h.state||{idx:null}).idx}function x(){y="POP";let X=S(),Z=X==null?null:X-m;m=X,v&&v({action:y,location:q.location,delta:Z})}function w(X,Z){y="PUSH";let A=lf(q.location,X,Z);m=S()+1;let H=tm(A,m),P=q.createHref(A);try{h.pushState(H,"",P)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;c.location.assign(P)}f&&v&&v({action:y,location:q.location,delta:1})}function j(X,Z){y="REPLACE";let A=lf(q.location,X,Z);m=S();let H=tm(A,m),P=q.createHref(A);h.replaceState(H,"",P),f&&v&&v({action:y,location:q.location,delta:0})}function R(X){return q2(X)}let q={get action(){return y},get location(){return a(c,h)},listen(X){if(v)throw new Error("A history only accepts one active listener");return c.addEventListener(em,x),v=X,()=>{c.removeEventListener(em,x),v=null}},createHref(X){return l(c,X)},createURL:R,encodeLocation(X){let Z=R(X);return{pathname:Z.pathname,search:Z.search,hash:Z.hash}},push:w,replace:j,go(X){return h.go(X)}};return q}function q2(a,l=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Ge(o,"No window.location.(origin|href) available to create URL");let u=typeof a=="string"?a:Fl(a);return u=u.replace(/ $/,"%20"),!l&&u.startsWith("//")&&(u=o+u),new URL(u,o)}function v1(a,l,o="/"){return Y2(a,l,o,!1)}function Y2(a,l,o,u){let c=typeof l=="string"?ki(l):l,f=Ln(c.pathname||"/",o);if(f==null)return null;let h=g1(a);G2(h);let y=null;for(let v=0;y==null&&v<h.length;++v){let m=eb(f);y=F2(h[v],m,u)}return y}function g1(a,l=[],o=[],u="",c=!1){let f=(h,y,v=c,m)=>{let S={relativePath:m===void 0?h.path||"":m,caseSensitive:h.caseSensitive===!0,childrenIndex:y,route:h};if(S.relativePath.startsWith("/")){if(!S.relativePath.startsWith(u)&&v)return;Ge(S.relativePath.startsWith(u),`Absolute route path "${S.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),S.relativePath=S.relativePath.slice(u.length)}let x=Nn([u,S.relativePath]),w=o.concat(S);h.children&&h.children.length>0&&(Ge(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),g1(h.children,l,w,x,v)),!(h.path==null&&!h.index)&&l.push({path:x,score:P2(x,h.index),routesMeta:w})};return a.forEach((h,y)=>{if(h.path===""||!h.path?.includes("?"))f(h,y);else for(let v of y1(h.path))f(h,y,!0,v)}),l}function y1(a){let l=a.split("/");if(l.length===0)return[];let[o,...u]=l,c=o.endsWith("?"),f=o.replace(/\?$/,"");if(u.length===0)return c?[f,""]:[f];let h=y1(u.join("/")),y=[];return y.push(...h.map(v=>v===""?f:[f,v].join("/"))),c&&y.push(...h),y.map(v=>a.startsWith("/")&&v===""?"/":v)}function G2(a){a.sort((l,o)=>l.score!==o.score?o.score-l.score:W2(l.routesMeta.map(u=>u.childrenIndex),o.routesMeta.map(u=>u.childrenIndex)))}var X2=/^:[\w-]+$/,V2=3,Q2=2,Z2=1,K2=10,J2=-2,nm=a=>a==="*";function P2(a,l){let o=a.split("/"),u=o.length;return o.some(nm)&&(u+=J2),l&&(u+=Q2),o.filter(c=>!nm(c)).reduce((c,f)=>c+(X2.test(f)?V2:f===""?Z2:K2),u)}function W2(a,l){return a.length===l.length&&a.slice(0,-1).every((u,c)=>u===l[c])?a[a.length-1]-l[l.length-1]:0}function F2(a,l,o=!1){let{routesMeta:u}=a,c={},f="/",h=[];for(let y=0;y<u.length;++y){let v=u[y],m=y===u.length-1,S=f==="/"?l:l.slice(f.length)||"/",x=Bu({path:v.relativePath,caseSensitive:v.caseSensitive,end:m},S),w=v.route;if(!x&&m&&o&&!u[u.length-1].route.index&&(x=Bu({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},S)),!x)return null;Object.assign(c,x.params),h.push({params:c,pathname:Nn([f,x.pathname]),pathnameBase:ib(Nn([f,x.pathnameBase])),route:w}),x.pathnameBase!=="/"&&(f=Nn([f,x.pathnameBase]))}return h}function Bu(a,l){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[o,u]=I2(a.path,a.caseSensitive,a.end),c=l.match(o);if(!c)return null;let f=c[0],h=f.replace(/(.)\/+$/,"$1"),y=c.slice(1);return{params:u.reduce((m,{paramName:S,isOptional:x},w)=>{if(S==="*"){let R=y[w]||"";h=f.slice(0,f.length-R.length).replace(/(.)\/+$/,"$1")}const j=y[w];return x&&!j?m[S]=void 0:m[S]=(j||"").replace(/%2F/g,"/"),m},{}),pathname:f,pathnameBase:h,pattern:a}}function I2(a,l=!1,o=!0){sn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let u=[],c="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,y,v)=>(u.push({paramName:y,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(u.push({paramName:"*"}),c+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?c+="\\/*$":a!==""&&a!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,l?void 0:"i"),u]}function eb(a){try{return a.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return sn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),a}}function Ln(a,l){if(l==="/")return a;if(!a.toLowerCase().startsWith(l.toLowerCase()))return null;let o=l.endsWith("/")?l.length-1:l.length,u=a.charAt(o);return u&&u!=="/"?null:a.slice(o)||"/"}function tb(a,l="/"){let{pathname:o,search:u="",hash:c=""}=typeof a=="string"?ki(a):a;return{pathname:o?o.startsWith("/")?o:nb(o,l):l,search:lb(u),hash:rb(c)}}function nb(a,l){let o=l.replace(/\/+$/,"").split("/");return a.split("/").forEach(c=>{c===".."?o.length>1&&o.pop():c!=="."&&o.push(c)}),o.length>1?o.join("/"):"/"}function Ac(a,l,o,u){return`Cannot include a '${a}' character in a manually specified \`to.${l}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ab(a){return a.filter((l,o)=>o===0||l.route.path&&l.route.path.length>0)}function b1(a){let l=ab(a);return l.map((o,u)=>u===l.length-1?o.pathname:o.pathnameBase)}function x1(a,l,o,u=!1){let c;typeof a=="string"?c=ki(a):(c={...a},Ge(!c.pathname||!c.pathname.includes("?"),Ac("?","pathname","search",c)),Ge(!c.pathname||!c.pathname.includes("#"),Ac("#","pathname","hash",c)),Ge(!c.search||!c.search.includes("#"),Ac("#","search","hash",c)));let f=a===""||c.pathname==="",h=f?"/":c.pathname,y;if(h==null)y=o;else{let x=l.length-1;if(!u&&h.startsWith("..")){let w=h.split("/");for(;w[0]==="..";)w.shift(),x-=1;c.pathname=w.join("/")}y=x>=0?l[x]:"/"}let v=tb(c,y),m=h&&h!=="/"&&h.endsWith("/"),S=(f||h===".")&&o.endsWith("/");return!v.pathname.endsWith("/")&&(m||S)&&(v.pathname+="/"),v}var Nn=a=>a.join("/").replace(/\/\/+/g,"/"),ib=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),lb=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,rb=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function ub(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var S1=["POST","PUT","PATCH","DELETE"];new Set(S1);var ob=["GET",...S1];new Set(ob);var Ui=b.createContext(null);Ui.displayName="DataRouter";var Ju=b.createContext(null);Ju.displayName="DataRouterState";b.createContext(!1);var w1=b.createContext({isTransitioning:!1});w1.displayName="ViewTransition";var sb=b.createContext(new Map);sb.displayName="Fetchers";var cb=b.createContext(null);cb.displayName="Await";var cn=b.createContext(null);cn.displayName="Navigation";var nr=b.createContext(null);nr.displayName="Location";var kn=b.createContext({outlet:null,matches:[],isDataRoute:!1});kn.displayName="Route";var Sf=b.createContext(null);Sf.displayName="RouteError";function fb(a,{relative:l}={}){Ge(ar(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:u}=b.useContext(cn),{hash:c,pathname:f,search:h}=ir(a,{relative:l}),y=f;return o!=="/"&&(y=f==="/"?o:Nn([o,f])),u.createHref({pathname:y,search:h,hash:c})}function ar(){return b.useContext(nr)!=null}function Un(){return Ge(ar(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(nr).location}var E1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function T1(a){b.useContext(cn).static||b.useLayoutEffect(a)}function wf(){let{isDataRoute:a}=b.useContext(kn);return a?Tb():db()}function db(){Ge(ar(),"useNavigate() may be used only in the context of a <Router> component.");let a=b.useContext(Ui),{basename:l,navigator:o}=b.useContext(cn),{matches:u}=b.useContext(kn),{pathname:c}=Un(),f=JSON.stringify(b1(u)),h=b.useRef(!1);return T1(()=>{h.current=!0}),b.useCallback((v,m={})=>{if(sn(h.current,E1),!h.current)return;if(typeof v=="number"){o.go(v);return}let S=x1(v,JSON.parse(f),c,m.relative==="path");a==null&&l!=="/"&&(S.pathname=S.pathname==="/"?l:Nn([l,S.pathname])),(m.replace?o.replace:o.push)(S,m.state,m)},[l,o,f,c,a])}b.createContext(null);function ir(a,{relative:l}={}){let{matches:o}=b.useContext(kn),{pathname:u}=Un(),c=JSON.stringify(b1(o));return b.useMemo(()=>x1(a,JSON.parse(c),u,l==="path"),[a,c,u,l])}function hb(a,l){return C1(a,l)}function C1(a,l,o,u,c){Ge(ar(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=b.useContext(cn),{matches:h}=b.useContext(kn),y=h[h.length-1],v=y?y.params:{},m=y?y.pathname:"/",S=y?y.pathnameBase:"/",x=y&&y.route;{let A=x&&x.path||"";R1(m,!x||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let w=Un(),j;if(l){let A=typeof l=="string"?ki(l):l;Ge(S==="/"||A.pathname?.startsWith(S),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${A.pathname}" was given in the \`location\` prop.`),j=A}else j=w;let R=j.pathname||"/",q=R;if(S!=="/"){let A=S.replace(/^\//,"").split("/");q="/"+R.replace(/^\//,"").split("/").slice(A.length).join("/")}let X=v1(a,{pathname:q});sn(x||X!=null,`No routes matched location "${j.pathname}${j.search}${j.hash}" `),sn(X==null||X[X.length-1].route.element!==void 0||X[X.length-1].route.Component!==void 0||X[X.length-1].route.lazy!==void 0,`Matched leaf route at location "${j.pathname}${j.search}${j.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Z=yb(X&&X.map(A=>Object.assign({},A,{params:Object.assign({},v,A.params),pathname:Nn([S,f.encodeLocation?f.encodeLocation(A.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?S:Nn([S,f.encodeLocation?f.encodeLocation(A.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathnameBase])})),h,o,u,c);return l&&Z?b.createElement(nr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...j},navigationType:"POP"}},Z):Z}function pb(){let a=Eb(),l=ub(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),o=a instanceof Error?a.stack:null,u="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:u},f={padding:"2px 4px",backgroundColor:u},h=null;return console.error("Error handled by React Router default ErrorBoundary:",a),h=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:f},"ErrorBoundary")," or"," ",b.createElement("code",{style:f},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},l),o?b.createElement("pre",{style:c},o):null,h)}var mb=b.createElement(pb,null),vb=class extends b.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,l){return l.location!==a.location||l.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:l.error,location:l.location,revalidation:a.revalidation||l.revalidation}}componentDidCatch(a,l){this.props.unstable_onError?this.props.unstable_onError(a,l):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?b.createElement(kn.Provider,{value:this.props.routeContext},b.createElement(Sf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function gb({routeContext:a,match:l,children:o}){let u=b.useContext(Ui);return u&&u.static&&u.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=l.route.id),b.createElement(kn.Provider,{value:a},o)}function yb(a,l=[],o=null,u=null,c=null){if(a==null){if(!o)return null;if(o.errors)a=o.matches;else if(l.length===0&&!o.initialized&&o.matches.length>0)a=o.matches;else return null}let f=a,h=o?.errors;if(h!=null){let m=f.findIndex(S=>S.route.id&&h?.[S.route.id]!==void 0);Ge(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),f=f.slice(0,Math.min(f.length,m+1))}let y=!1,v=-1;if(o)for(let m=0;m<f.length;m++){let S=f[m];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(v=m),S.route.id){let{loaderData:x,errors:w}=o,j=S.route.loader&&!x.hasOwnProperty(S.route.id)&&(!w||w[S.route.id]===void 0);if(S.route.lazy||j){y=!0,v>=0?f=f.slice(0,v+1):f=[f[0]];break}}}return f.reduceRight((m,S,x)=>{let w,j=!1,R=null,q=null;o&&(w=h&&S.route.id?h[S.route.id]:void 0,R=S.route.errorElement||mb,y&&(v<0&&x===0?(R1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),j=!0,q=null):v===x&&(j=!0,q=S.route.hydrateFallbackElement||null)));let X=l.concat(f.slice(0,x+1)),Z=()=>{let A;return w?A=R:j?A=q:S.route.Component?A=b.createElement(S.route.Component,null):S.route.element?A=S.route.element:A=m,b.createElement(gb,{match:S,routeContext:{outlet:m,matches:X,isDataRoute:o!=null},children:A})};return o&&(S.route.ErrorBoundary||S.route.errorElement||x===0)?b.createElement(vb,{location:o.location,revalidation:o.revalidation,component:R,error:w,children:Z(),routeContext:{outlet:null,matches:X,isDataRoute:!0},unstable_onError:u}):Z()},null)}function Ef(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bb(a){let l=b.useContext(Ui);return Ge(l,Ef(a)),l}function xb(a){let l=b.useContext(Ju);return Ge(l,Ef(a)),l}function Sb(a){let l=b.useContext(kn);return Ge(l,Ef(a)),l}function Tf(a){let l=Sb(a),o=l.matches[l.matches.length-1];return Ge(o.route.id,`${a} can only be used on routes that contain a unique "id"`),o.route.id}function wb(){return Tf("useRouteId")}function Eb(){let a=b.useContext(Sf),l=xb("useRouteError"),o=Tf("useRouteError");return a!==void 0?a:l.errors?.[o]}function Tb(){let{router:a}=bb("useNavigate"),l=Tf("useNavigate"),o=b.useRef(!1);return T1(()=>{o.current=!0}),b.useCallback(async(c,f={})=>{sn(o.current,E1),o.current&&(typeof c=="number"?a.navigate(c):await a.navigate(c,{fromRouteId:l,...f}))},[a,l])}var am={};function R1(a,l,o){!l&&!am[a]&&(am[a]=!0,sn(!1,o))}b.memo(Cb);function Cb({routes:a,future:l,state:o,unstable_onError:u}){return C1(a,void 0,o,u,l)}function Na(a){Ge(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Rb({basename:a="/",children:l=null,location:o,navigationType:u="POP",navigator:c,static:f=!1}){Ge(!ar(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=a.replace(/^\/*/,"/"),y=b.useMemo(()=>({basename:h,navigator:c,static:f,future:{}}),[h,c,f]);typeof o=="string"&&(o=ki(o));let{pathname:v="/",search:m="",hash:S="",state:x=null,key:w="default"}=o,j=b.useMemo(()=>{let R=Ln(v,h);return R==null?null:{location:{pathname:R,search:m,hash:S,state:x,key:w},navigationType:u}},[h,v,m,S,x,w,u]);return sn(j!=null,`<Router basename="${h}"> is not able to match the URL "${v}${m}${S}" because it does not start with the basename, so the <Router> won't render anything.`),j==null?null:b.createElement(cn.Provider,{value:y},b.createElement(nr.Provider,{children:l,value:j}))}function _b({children:a,location:l}){return hb(rf(a),l)}function rf(a,l=[]){let o=[];return b.Children.forEach(a,(u,c)=>{if(!b.isValidElement(u))return;let f=[...l,c];if(u.type===b.Fragment){o.push.apply(o,rf(u.props.children,f));return}Ge(u.type===Na,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ge(!u.props.index||!u.props.children,"An index route cannot have child routes.");let h={id:u.props.id||f.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(h.children=rf(u.props.children,f)),o.push(h)}),o}var Mu="get",Nu="application/x-www-form-urlencoded";function Pu(a){return a!=null&&typeof a.tagName=="string"}function Ob(a){return Pu(a)&&a.tagName.toLowerCase()==="button"}function zb(a){return Pu(a)&&a.tagName.toLowerCase()==="form"}function Ab(a){return Pu(a)&&a.tagName.toLowerCase()==="input"}function jb(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function Mb(a,l){return a.button===0&&(!l||l==="_self")&&!jb(a)}var Eu=null;function Nb(){if(Eu===null)try{new FormData(document.createElement("form"),0),Eu=!1}catch{Eu=!0}return Eu}var Db=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function jc(a){return a!=null&&!Db.has(a)?(sn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Nu}"`),null):a}function Lb(a,l){let o,u,c,f,h;if(zb(a)){let y=a.getAttribute("action");u=y?Ln(y,l):null,o=a.getAttribute("method")||Mu,c=jc(a.getAttribute("enctype"))||Nu,f=new FormData(a)}else if(Ob(a)||Ab(a)&&(a.type==="submit"||a.type==="image")){let y=a.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=a.getAttribute("formaction")||y.getAttribute("action");if(u=v?Ln(v,l):null,o=a.getAttribute("formmethod")||y.getAttribute("method")||Mu,c=jc(a.getAttribute("formenctype"))||jc(y.getAttribute("enctype"))||Nu,f=new FormData(y,a),!Nb()){let{name:m,type:S,value:x}=a;if(S==="image"){let w=m?`${m}.`:"";f.append(`${w}x`,"0"),f.append(`${w}y`,"0")}else m&&f.append(m,x)}}else{if(Pu(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Mu,u=null,c=Nu,h=a}return f&&c==="text/plain"&&(h=f,f=void 0),{action:u,method:o.toLowerCase(),encType:c,formData:f,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Cf(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function kb(a,l,o){let u=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return u.pathname==="/"?u.pathname=`_root.${o}`:l&&Ln(u.pathname,l)==="/"?u.pathname=`${l.replace(/\/$/,"")}/_root.${o}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${o}`,u}async function Ub(a,l){if(a.id in l)return l[a.id];try{let o=await import(a.module);return l[a.id]=o,o}catch(o){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Hb(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Bb(a,l,o){let u=await Promise.all(a.map(async c=>{let f=l.routes[c.route.id];if(f){let h=await Ub(f,o);return h.links?h.links():[]}return[]}));return Gb(u.flat(1).filter(Hb).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function im(a,l,o,u,c,f){let h=(v,m)=>o[m]?v.route.id!==o[m].route.id:!0,y=(v,m)=>o[m].pathname!==v.pathname||o[m].route.path?.endsWith("*")&&o[m].params["*"]!==v.params["*"];return f==="assets"?l.filter((v,m)=>h(v,m)||y(v,m)):f==="data"?l.filter((v,m)=>{let S=u.routes[v.route.id];if(!S||!S.hasLoader)return!1;if(h(v,m)||y(v,m))return!0;if(v.route.shouldRevalidate){let x=v.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function $b(a,l,{includeHydrateFallback:o}={}){return qb(a.map(u=>{let c=l.routes[u.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),o&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function qb(a){return[...new Set(a)]}function Yb(a){let l={},o=Object.keys(a).sort();for(let u of o)l[u]=a[u];return l}function Gb(a,l){let o=new Set;return new Set(l),a.reduce((u,c)=>{let f=JSON.stringify(Yb(c));return o.has(f)||(o.add(f),u.push({key:f,link:c})),u},[])}function _1(){let a=b.useContext(Ui);return Cf(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function Xb(){let a=b.useContext(Ju);return Cf(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Rf=b.createContext(void 0);Rf.displayName="FrameworkContext";function O1(){let a=b.useContext(Rf);return Cf(a,"You must render this element inside a <HydratedRouter> element"),a}function Vb(a,l){let o=b.useContext(Rf),[u,c]=b.useState(!1),[f,h]=b.useState(!1),{onFocus:y,onBlur:v,onMouseEnter:m,onMouseLeave:S,onTouchStart:x}=l,w=b.useRef(null);b.useEffect(()=>{if(a==="render"&&h(!0),a==="viewport"){let q=Z=>{Z.forEach(A=>{h(A.isIntersecting)})},X=new IntersectionObserver(q,{threshold:.5});return w.current&&X.observe(w.current),()=>{X.disconnect()}}},[a]),b.useEffect(()=>{if(u){let q=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(q)}}},[u]);let j=()=>{c(!0)},R=()=>{c(!1),h(!1)};return o?a!=="intent"?[f,w,{}]:[f,w,{onFocus:Ul(y,j),onBlur:Ul(v,R),onMouseEnter:Ul(m,j),onMouseLeave:Ul(S,R),onTouchStart:Ul(x,j)}]:[!1,w,{}]}function Ul(a,l){return o=>{a&&a(o),o.defaultPrevented||l(o)}}function Qb({page:a,...l}){let{router:o}=_1(),u=b.useMemo(()=>v1(o.routes,a,o.basename),[o.routes,a,o.basename]);return u?b.createElement(Kb,{page:a,matches:u,...l}):null}function Zb(a){let{manifest:l,routeModules:o}=O1(),[u,c]=b.useState([]);return b.useEffect(()=>{let f=!1;return Bb(a,l,o).then(h=>{f||c(h)}),()=>{f=!0}},[a,l,o]),u}function Kb({page:a,matches:l,...o}){let u=Un(),{manifest:c,routeModules:f}=O1(),{basename:h}=_1(),{loaderData:y,matches:v}=Xb(),m=b.useMemo(()=>im(a,l,v,c,u,"data"),[a,l,v,c,u]),S=b.useMemo(()=>im(a,l,v,c,u,"assets"),[a,l,v,c,u]),x=b.useMemo(()=>{if(a===u.pathname+u.search+u.hash)return[];let R=new Set,q=!1;if(l.forEach(Z=>{let A=c.routes[Z.route.id];!A||!A.hasLoader||(!m.some(H=>H.route.id===Z.route.id)&&Z.route.id in y&&f[Z.route.id]?.shouldRevalidate||A.hasClientLoader?q=!0:R.add(Z.route.id))}),R.size===0)return[];let X=kb(a,h,"data");return q&&R.size>0&&X.searchParams.set("_routes",l.filter(Z=>R.has(Z.route.id)).map(Z=>Z.route.id).join(",")),[X.pathname+X.search]},[h,y,u,c,m,l,a,f]),w=b.useMemo(()=>$b(S,c),[S,c]),j=Zb(S);return b.createElement(b.Fragment,null,x.map(R=>b.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...o})),w.map(R=>b.createElement("link",{key:R,rel:"modulepreload",href:R,...o})),j.map(({key:R,link:q})=>b.createElement("link",{key:R,nonce:o.nonce,...q})))}function Jb(...a){return l=>{a.forEach(o=>{typeof o=="function"?o(l):o!=null&&(o.current=l)})}}var z1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{z1&&(window.__reactRouterVersion="7.9.4")}catch{}function Pb({basename:a,children:l,window:o}){let u=b.useRef();u.current==null&&(u.current=H2({window:o,v5Compat:!0}));let c=u.current,[f,h]=b.useState({action:c.action,location:c.location}),y=b.useCallback(v=>{b.startTransition(()=>h(v))},[h]);return b.useLayoutEffect(()=>c.listen(y),[c,y]),b.createElement(Rb,{basename:a,children:l,location:f.location,navigationType:f.action,navigator:c})}var A1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hi=b.forwardRef(function({onClick:l,discover:o="render",prefetch:u="none",relative:c,reloadDocument:f,replace:h,state:y,target:v,to:m,preventScrollReset:S,viewTransition:x,...w},j){let{basename:R}=b.useContext(cn),q=typeof m=="string"&&A1.test(m),X,Z=!1;if(typeof m=="string"&&q&&(X=m,z1))try{let G=new URL(window.location.href),le=m.startsWith("//")?new URL(G.protocol+m):new URL(m),K=Ln(le.pathname,R);le.origin===G.origin&&K!=null?m=K+le.search+le.hash:Z=!0}catch{sn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let A=fb(m,{relative:c}),[H,P,k]=Vb(u,w),M=ex(m,{replace:h,state:y,target:v,preventScrollReset:S,relative:c,viewTransition:x});function J(G){l&&l(G),G.defaultPrevented||M(G)}let L=b.createElement("a",{...w,...k,href:X||A,onClick:Z||f?l:J,ref:Jb(j,P),target:v,"data-discover":!q&&o==="render"?"true":void 0});return H&&!q?b.createElement(b.Fragment,null,L,b.createElement(Qb,{page:A})):L});Hi.displayName="Link";var Wb=b.forwardRef(function({"aria-current":l="page",caseSensitive:o=!1,className:u="",end:c=!1,style:f,to:h,viewTransition:y,children:v,...m},S){let x=ir(h,{relative:m.relative}),w=Un(),j=b.useContext(Ju),{navigator:R,basename:q}=b.useContext(cn),X=j!=null&&lx(x)&&y===!0,Z=R.encodeLocation?R.encodeLocation(x).pathname:x.pathname,A=w.pathname,H=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;o||(A=A.toLowerCase(),H=H?H.toLowerCase():null,Z=Z.toLowerCase()),H&&q&&(H=Ln(H,q)||H);const P=Z!=="/"&&Z.endsWith("/")?Z.length-1:Z.length;let k=A===Z||!c&&A.startsWith(Z)&&A.charAt(P)==="/",M=H!=null&&(H===Z||!c&&H.startsWith(Z)&&H.charAt(Z.length)==="/"),J={isActive:k,isPending:M,isTransitioning:X},L=k?l:void 0,G;typeof u=="function"?G=u(J):G=[u,k?"active":null,M?"pending":null,X?"transitioning":null].filter(Boolean).join(" ");let le=typeof f=="function"?f(J):f;return b.createElement(Hi,{...m,"aria-current":L,className:G,ref:S,style:le,to:h,viewTransition:y},typeof v=="function"?v(J):v)});Wb.displayName="NavLink";var Fb=b.forwardRef(({discover:a="render",fetcherKey:l,navigate:o,reloadDocument:u,replace:c,state:f,method:h=Mu,action:y,onSubmit:v,relative:m,preventScrollReset:S,viewTransition:x,...w},j)=>{let R=ax(),q=ix(y,{relative:m}),X=h.toLowerCase()==="get"?"get":"post",Z=typeof y=="string"&&A1.test(y),A=H=>{if(v&&v(H),H.defaultPrevented)return;H.preventDefault();let P=H.nativeEvent.submitter,k=P?.getAttribute("formmethod")||h;R(P||H.currentTarget,{fetcherKey:l,method:k,navigate:o,replace:c,state:f,relative:m,preventScrollReset:S,viewTransition:x})};return b.createElement("form",{ref:j,method:X,action:q,onSubmit:u?v:A,...w,"data-discover":!Z&&a==="render"?"true":void 0})});Fb.displayName="Form";function Ib(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function j1(a){let l=b.useContext(Ui);return Ge(l,Ib(a)),l}function ex(a,{target:l,replace:o,state:u,preventScrollReset:c,relative:f,viewTransition:h}={}){let y=wf(),v=Un(),m=ir(a,{relative:f});return b.useCallback(S=>{if(Mb(S,l)){S.preventDefault();let x=o!==void 0?o:Fl(v)===Fl(m);y(a,{replace:x,state:u,preventScrollReset:c,relative:f,viewTransition:h})}},[v,y,m,o,u,l,a,c,f,h])}var tx=0,nx=()=>`__${String(++tx)}__`;function ax(){let{router:a}=j1("useSubmit"),{basename:l}=b.useContext(cn),o=wb();return b.useCallback(async(u,c={})=>{let{action:f,method:h,encType:y,formData:v,body:m}=Lb(u,l);if(c.navigate===!1){let S=c.fetcherKey||nx();await a.fetch(S,o,c.action||f,{preventScrollReset:c.preventScrollReset,formData:v,body:m,formMethod:c.method||h,formEncType:c.encType||y,flushSync:c.flushSync})}else await a.navigate(c.action||f,{preventScrollReset:c.preventScrollReset,formData:v,body:m,formMethod:c.method||h,formEncType:c.encType||y,replace:c.replace,state:c.state,fromRouteId:o,flushSync:c.flushSync,viewTransition:c.viewTransition})},[a,l,o])}function ix(a,{relative:l}={}){let{basename:o}=b.useContext(cn),u=b.useContext(kn);Ge(u,"useFormAction must be used inside a RouteContext");let[c]=u.matches.slice(-1),f={...ir(a||".",{relative:l})},h=Un();if(a==null){f.search=h.search;let y=new URLSearchParams(f.search),v=y.getAll("index");if(v.some(S=>S==="")){y.delete("index"),v.filter(x=>x).forEach(x=>y.append("index",x));let S=y.toString();f.search=S?`?${S}`:""}}return(!a||a===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(f.pathname=f.pathname==="/"?o:Nn([o,f.pathname])),Fl(f)}function lx(a,{relative:l}={}){let o=b.useContext(w1);Ge(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=j1("useViewTransitionState"),c=ir(a,{relative:l});if(!o.isTransitioning)return!1;let f=Ln(o.currentLocation.pathname,u)||o.currentLocation.pathname,h=Ln(o.nextLocation.pathname,u)||o.nextLocation.pathname;return Bu(c.pathname,h)!=null||Bu(c.pathname,f)!=null}var rx=m1();const Oi=tr(rx);var ft=function(){return ft=Object.assign||function(l){for(var o,u=1,c=arguments.length;u<c;u++){o=arguments[u];for(var f in o)Object.prototype.hasOwnProperty.call(o,f)&&(l[f]=o[f])}return l},ft.apply(this,arguments)};function Ai(a,l,o){if(o||arguments.length===2)for(var u=0,c=l.length,f;u<c;u++)(f||!(u in l))&&(f||(f=Array.prototype.slice.call(l,0,u)),f[u]=l[u]);return a.concat(f||Array.prototype.slice.call(l))}var qe="-ms-",Jl="-moz-",ze="-webkit-",M1="comm",Wu="rule",_f="decl",ux="@import",N1="@keyframes",ox="@layer",D1=Math.abs,Of=String.fromCharCode,uf=Object.assign;function sx(a,l){return nt(a,0)^45?(((l<<2^nt(a,0))<<2^nt(a,1))<<2^nt(a,2))<<2^nt(a,3):0}function L1(a){return a.trim()}function An(a,l){return(a=l.exec(a))?a[0]:a}function ge(a,l,o){return a.replace(l,o)}function Du(a,l,o){return a.indexOf(l,o)}function nt(a,l){return a.charCodeAt(l)|0}function ji(a,l,o){return a.slice(l,o)}function on(a){return a.length}function k1(a){return a.length}function Zl(a,l){return l.push(a),a}function cx(a,l){return a.map(l).join("")}function lm(a,l){return a.filter(function(o){return!An(o,l)})}var Fu=1,Mi=1,U1=0,Zt=0,Fe=0,Bi="";function Iu(a,l,o,u,c,f,h,y){return{value:a,root:l,parent:o,type:u,props:c,children:f,line:Fu,column:Mi,length:h,return:"",siblings:y}}function ca(a,l){return uf(Iu("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},l)}function Ti(a){for(;a.root;)a=ca(a.root,{children:[a]});Zl(a,a.siblings)}function fx(){return Fe}function dx(){return Fe=Zt>0?nt(Bi,--Zt):0,Mi--,Fe===10&&(Mi=1,Fu--),Fe}function en(){return Fe=Zt<U1?nt(Bi,Zt++):0,Mi++,Fe===10&&(Mi=1,Fu++),Fe}function ka(){return nt(Bi,Zt)}function Lu(){return Zt}function eo(a,l){return ji(Bi,a,l)}function of(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function hx(a){return Fu=Mi=1,U1=on(Bi=a),Zt=0,[]}function px(a){return Bi="",a}function Mc(a){return L1(eo(Zt-1,sf(a===91?a+2:a===40?a+1:a)))}function mx(a){for(;(Fe=ka())&&Fe<33;)en();return of(a)>2||of(Fe)>3?"":" "}function vx(a,l){for(;--l&&en()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return eo(a,Lu()+(l<6&&ka()==32&&en()==32))}function sf(a){for(;en();)switch(Fe){case a:return Zt;case 34:case 39:a!==34&&a!==39&&sf(Fe);break;case 40:a===41&&sf(a);break;case 92:en();break}return Zt}function gx(a,l){for(;en()&&a+Fe!==57;)if(a+Fe===84&&ka()===47)break;return"/*"+eo(l,Zt-1)+"*"+Of(a===47?a:en())}function yx(a){for(;!of(ka());)en();return eo(a,Zt)}function bx(a){return px(ku("",null,null,null,[""],a=hx(a),0,[0],a))}function ku(a,l,o,u,c,f,h,y,v){for(var m=0,S=0,x=h,w=0,j=0,R=0,q=1,X=1,Z=1,A=0,H="",P=c,k=f,M=u,J=H;X;)switch(R=A,A=en()){case 40:if(R!=108&&nt(J,x-1)==58){Du(J+=ge(Mc(A),"&","&\f"),"&\f",D1(m?y[m-1]:0))!=-1&&(Z=-1);break}case 34:case 39:case 91:J+=Mc(A);break;case 9:case 10:case 13:case 32:J+=mx(R);break;case 92:J+=vx(Lu()-1,7);continue;case 47:switch(ka()){case 42:case 47:Zl(xx(gx(en(),Lu()),l,o,v),v);break;default:J+="/"}break;case 123*q:y[m++]=on(J)*Z;case 125*q:case 59:case 0:switch(A){case 0:case 125:X=0;case 59+S:Z==-1&&(J=ge(J,/\f/g,"")),j>0&&on(J)-x&&Zl(j>32?um(J+";",u,o,x-1,v):um(ge(J," ","")+";",u,o,x-2,v),v);break;case 59:J+=";";default:if(Zl(M=rm(J,l,o,m,S,c,y,H,P=[],k=[],x,f),f),A===123)if(S===0)ku(J,l,M,M,P,f,x,y,k);else switch(w===99&&nt(J,3)===110?100:w){case 100:case 108:case 109:case 115:ku(a,M,M,u&&Zl(rm(a,M,M,0,0,c,y,H,c,P=[],x,k),k),c,k,x,y,u?P:k);break;default:ku(J,M,M,M,[""],k,0,y,k)}}m=S=j=0,q=Z=1,H=J="",x=h;break;case 58:x=1+on(J),j=R;default:if(q<1){if(A==123)--q;else if(A==125&&q++==0&&dx()==125)continue}switch(J+=Of(A),A*q){case 38:Z=S>0?1:(J+="\f",-1);break;case 44:y[m++]=(on(J)-1)*Z,Z=1;break;case 64:ka()===45&&(J+=Mc(en())),w=ka(),S=x=on(H=J+=yx(Lu())),A++;break;case 45:R===45&&on(J)==2&&(q=0)}}return f}function rm(a,l,o,u,c,f,h,y,v,m,S,x){for(var w=c-1,j=c===0?f:[""],R=k1(j),q=0,X=0,Z=0;q<u;++q)for(var A=0,H=ji(a,w+1,w=D1(X=h[q])),P=a;A<R;++A)(P=L1(X>0?j[A]+" "+H:ge(H,/&\f/g,j[A])))&&(v[Z++]=P);return Iu(a,l,o,c===0?Wu:y,v,m,S,x)}function xx(a,l,o,u){return Iu(a,l,o,M1,Of(fx()),ji(a,2,-2),0,u)}function um(a,l,o,u,c){return Iu(a,l,o,_f,ji(a,0,u),ji(a,u+1,-1),u,c)}function H1(a,l,o){switch(sx(a,l)){case 5103:return ze+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ze+a+a;case 4789:return Jl+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return ze+a+Jl+a+qe+a+a;case 5936:switch(nt(a,l+11)){case 114:return ze+a+qe+ge(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return ze+a+qe+ge(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return ze+a+qe+ge(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return ze+a+qe+a+a;case 6165:return ze+a+qe+"flex-"+a+a;case 5187:return ze+a+ge(a,/(\w+).+(:[^]+)/,ze+"box-$1$2"+qe+"flex-$1$2")+a;case 5443:return ze+a+qe+"flex-item-"+ge(a,/flex-|-self/g,"")+(An(a,/flex-|baseline/)?"":qe+"grid-row-"+ge(a,/flex-|-self/g,""))+a;case 4675:return ze+a+qe+"flex-line-pack"+ge(a,/align-content|flex-|-self/g,"")+a;case 5548:return ze+a+qe+ge(a,"shrink","negative")+a;case 5292:return ze+a+qe+ge(a,"basis","preferred-size")+a;case 6060:return ze+"box-"+ge(a,"-grow","")+ze+a+qe+ge(a,"grow","positive")+a;case 4554:return ze+ge(a,/([^-])(transform)/g,"$1"+ze+"$2")+a;case 6187:return ge(ge(ge(a,/(zoom-|grab)/,ze+"$1"),/(image-set)/,ze+"$1"),a,"")+a;case 5495:case 3959:return ge(a,/(image-set\([^]*)/,ze+"$1$`$1");case 4968:return ge(ge(a,/(.+:)(flex-)?(.*)/,ze+"box-pack:$3"+qe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ze+a+a;case 4200:if(!An(a,/flex-|baseline/))return qe+"grid-column-align"+ji(a,l)+a;break;case 2592:case 3360:return qe+ge(a,"template-","")+a;case 4384:case 3616:return o&&o.some(function(u,c){return l=c,An(u.props,/grid-\w+-end/)})?~Du(a+(o=o[l].value),"span",0)?a:qe+ge(a,"-start","")+a+qe+"grid-row-span:"+(~Du(o,"span",0)?An(o,/\d+/):+An(o,/\d+/)-+An(a,/\d+/))+";":qe+ge(a,"-start","")+a;case 4896:case 4128:return o&&o.some(function(u){return An(u.props,/grid-\w+-start/)})?a:qe+ge(ge(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return ge(a,/(.+)-inline(.+)/,ze+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(on(a)-1-l>6)switch(nt(a,l+1)){case 109:if(nt(a,l+4)!==45)break;case 102:return ge(a,/(.+:)(.+)-([^]+)/,"$1"+ze+"$2-$3$1"+Jl+(nt(a,l+3)==108?"$3":"$2-$3"))+a;case 115:return~Du(a,"stretch",0)?H1(ge(a,"stretch","fill-available"),l,o)+a:a}break;case 5152:case 5920:return ge(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,c,f,h,y,v,m){return qe+c+":"+f+m+(h?qe+c+"-span:"+(y?v:+v-+f)+m:"")+a});case 4949:if(nt(a,l+6)===121)return ge(a,":",":"+ze)+a;break;case 6444:switch(nt(a,nt(a,14)===45?18:11)){case 120:return ge(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ze+(nt(a,14)===45?"inline-":"")+"box$3$1"+ze+"$2$3$1"+qe+"$2box$3")+a;case 100:return ge(a,":",":"+qe)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ge(a,"scroll-","scroll-snap-")+a}return a}function $u(a,l){for(var o="",u=0;u<a.length;u++)o+=l(a[u],u,a,l)||"";return o}function Sx(a,l,o,u){switch(a.type){case ox:if(a.children.length)break;case ux:case _f:return a.return=a.return||a.value;case M1:return"";case N1:return a.return=a.value+"{"+$u(a.children,u)+"}";case Wu:if(!on(a.value=a.props.join(",")))return""}return on(o=$u(a.children,u))?a.return=a.value+"{"+o+"}":""}function wx(a){var l=k1(a);return function(o,u,c,f){for(var h="",y=0;y<l;y++)h+=a[y](o,u,c,f)||"";return h}}function Ex(a){return function(l){l.root||(l=l.return)&&a(l)}}function Tx(a,l,o,u){if(a.length>-1&&!a.return)switch(a.type){case _f:a.return=H1(a.value,a.length,o);return;case N1:return $u([ca(a,{value:ge(a.value,"@","@"+ze)})],u);case Wu:if(a.length)return cx(o=a.props,function(c){switch(An(c,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ti(ca(a,{props:[ge(c,/:(read-\w+)/,":"+Jl+"$1")]})),Ti(ca(a,{props:[c]})),uf(a,{props:lm(o,u)});break;case"::placeholder":Ti(ca(a,{props:[ge(c,/:(plac\w+)/,":"+ze+"input-$1")]})),Ti(ca(a,{props:[ge(c,/:(plac\w+)/,":"+Jl+"$1")]})),Ti(ca(a,{props:[ge(c,/:(plac\w+)/,qe+"input-$1")]})),Ti(ca(a,{props:[c]})),uf(a,{props:lm(o,u)});break}return""})}}var Cx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Lt={},Ni=typeof process<"u"&&Lt!==void 0&&(Lt.REACT_APP_SC_ATTR||Lt.SC_ATTR)||"data-styled",B1="active",$1="data-styled-version",to="6.1.19",zf=`/*!sc*/
`,qu=typeof window<"u"&&typeof document<"u",Rx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==""?Lt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Lt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.SC_DISABLE_SPEEDY!==void 0&&Lt.SC_DISABLE_SPEEDY!==""&&Lt.SC_DISABLE_SPEEDY!=="false"&&Lt.SC_DISABLE_SPEEDY),_x={},no=Object.freeze([]),Di=Object.freeze({});function q1(a,l,o){return o===void 0&&(o=Di),a.theme!==o.theme&&a.theme||l||o.theme}var Y1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ox=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zx=/(^-|-$)/g;function om(a){return a.replace(Ox,"-").replace(zx,"")}var Ax=/(a)(d)/gi,Tu=52,sm=function(a){return String.fromCharCode(a+(a>25?39:97))};function cf(a){var l,o="";for(l=Math.abs(a);l>Tu;l=l/Tu|0)o=sm(l%Tu)+o;return(sm(l%Tu)+o).replace(Ax,"$1-$2")}var Nc,G1=5381,zi=function(a,l){for(var o=l.length;o;)a=33*a^l.charCodeAt(--o);return a},X1=function(a){return zi(G1,a)};function Af(a){return cf(X1(a)>>>0)}function jx(a){return a.displayName||a.name||"Component"}function Dc(a){return typeof a=="string"&&!0}var V1=typeof Symbol=="function"&&Symbol.for,Q1=V1?Symbol.for("react.memo"):60115,Mx=V1?Symbol.for("react.forward_ref"):60112,Nx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Dx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Z1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Lx=((Nc={})[Mx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nc[Q1]=Z1,Nc);function cm(a){return("type"in(l=a)&&l.type.$$typeof)===Q1?Z1:"$$typeof"in a?Lx[a.$$typeof]:Nx;var l}var kx=Object.defineProperty,Ux=Object.getOwnPropertyNames,fm=Object.getOwnPropertySymbols,Hx=Object.getOwnPropertyDescriptor,Bx=Object.getPrototypeOf,dm=Object.prototype;function K1(a,l,o){if(typeof l!="string"){if(dm){var u=Bx(l);u&&u!==dm&&K1(a,u,o)}var c=Ux(l);fm&&(c=c.concat(fm(l)));for(var f=cm(a),h=cm(l),y=0;y<c.length;++y){var v=c[y];if(!(v in Dx||o&&o[v]||h&&v in h||f&&v in f)){var m=Hx(l,v);try{kx(a,v,m)}catch{}}}}return a}function Li(a){return typeof a=="function"}function jf(a){return typeof a=="object"&&"styledComponentId"in a}function La(a,l){return a&&l?"".concat(a," ").concat(l):a||l||""}function Yu(a,l){if(a.length===0)return"";for(var o=a[0],u=1;u<a.length;u++)o+=a[u];return o}function Il(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function ff(a,l,o){if(o===void 0&&(o=!1),!o&&!Il(a)&&!Array.isArray(a))return l;if(Array.isArray(l))for(var u=0;u<l.length;u++)a[u]=ff(a[u],l[u]);else if(Il(l))for(var u in l)a[u]=ff(a[u],l[u]);return a}function Mf(a,l){Object.defineProperty(a,"toString",{value:l})}function lr(a){for(var l=[],o=1;o<arguments.length;o++)l[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(l.length>0?" Args: ".concat(l.join(", ")):""))}var $x=(function(){function a(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l}return a.prototype.indexOfGroup=function(l){for(var o=0,u=0;u<l;u++)o+=this.groupSizes[u];return o},a.prototype.insertRules=function(l,o){if(l>=this.groupSizes.length){for(var u=this.groupSizes,c=u.length,f=c;l>=f;)if((f<<=1)<0)throw lr(16,"".concat(l));this.groupSizes=new Uint32Array(f),this.groupSizes.set(u),this.length=f;for(var h=c;h<f;h++)this.groupSizes[h]=0}for(var y=this.indexOfGroup(l+1),v=(h=0,o.length);h<v;h++)this.tag.insertRule(y,o[h])&&(this.groupSizes[l]++,y++)},a.prototype.clearGroup=function(l){if(l<this.length){var o=this.groupSizes[l],u=this.indexOfGroup(l),c=u+o;this.groupSizes[l]=0;for(var f=u;f<c;f++)this.tag.deleteRule(u)}},a.prototype.getGroup=function(l){var o="";if(l>=this.length||this.groupSizes[l]===0)return o;for(var u=this.groupSizes[l],c=this.indexOfGroup(l),f=c+u,h=c;h<f;h++)o+="".concat(this.tag.getRule(h)).concat(zf);return o},a})(),Uu=new Map,Gu=new Map,Hu=1,Cu=function(a){if(Uu.has(a))return Uu.get(a);for(;Gu.has(Hu);)Hu++;var l=Hu++;return Uu.set(a,l),Gu.set(l,a),l},qx=function(a,l){Hu=l+1,Uu.set(a,l),Gu.set(l,a)},Yx="style[".concat(Ni,"][").concat($1,'="').concat(to,'"]'),Gx=new RegExp("^".concat(Ni,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Xx=function(a,l,o){for(var u,c=o.split(","),f=0,h=c.length;f<h;f++)(u=c[f])&&a.registerName(l,u)},Vx=function(a,l){for(var o,u=((o=l.textContent)!==null&&o!==void 0?o:"").split(zf),c=[],f=0,h=u.length;f<h;f++){var y=u[f].trim();if(y){var v=y.match(Gx);if(v){var m=0|parseInt(v[1],10),S=v[2];m!==0&&(qx(S,m),Xx(a,S,v[3]),a.getTag().insertRules(m,c)),c.length=0}else c.push(y)}}},hm=function(a){for(var l=document.querySelectorAll(Yx),o=0,u=l.length;o<u;o++){var c=l[o];c&&c.getAttribute(Ni)!==B1&&(Vx(a,c),c.parentNode&&c.parentNode.removeChild(c))}};function Qx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var J1=function(a){var l=document.head,o=a||l,u=document.createElement("style"),c=(function(y){var v=Array.from(y.querySelectorAll("style[".concat(Ni,"]")));return v[v.length-1]})(o),f=c!==void 0?c.nextSibling:null;u.setAttribute(Ni,B1),u.setAttribute($1,to);var h=Qx();return h&&u.setAttribute("nonce",h),o.insertBefore(u,f),u},Zx=(function(){function a(l){this.element=J1(l),this.element.appendChild(document.createTextNode("")),this.sheet=(function(o){if(o.sheet)return o.sheet;for(var u=document.styleSheets,c=0,f=u.length;c<f;c++){var h=u[c];if(h.ownerNode===o)return h}throw lr(17)})(this.element),this.length=0}return a.prototype.insertRule=function(l,o){try{return this.sheet.insertRule(o,l),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},a.prototype.getRule=function(l){var o=this.sheet.cssRules[l];return o&&o.cssText?o.cssText:""},a})(),Kx=(function(){function a(l){this.element=J1(l),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(l,o){if(l<=this.length&&l>=0){var u=document.createTextNode(o);return this.element.insertBefore(u,this.nodes[l]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},a.prototype.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},a})(),Jx=(function(){function a(l){this.rules=[],this.length=0}return a.prototype.insertRule=function(l,o){return l<=this.length&&(this.rules.splice(l,0,o),this.length++,!0)},a.prototype.deleteRule=function(l){this.rules.splice(l,1),this.length--},a.prototype.getRule=function(l){return l<this.length?this.rules[l]:""},a})(),pm=qu,Px={isServer:!qu,useCSSOMInjection:!Rx},Xu=(function(){function a(l,o,u){l===void 0&&(l=Di),o===void 0&&(o={});var c=this;this.options=ft(ft({},Px),l),this.gs=o,this.names=new Map(u),this.server=!!l.isServer,!this.server&&qu&&pm&&(pm=!1,hm(this)),Mf(this,function(){return(function(f){for(var h=f.getTag(),y=h.length,v="",m=function(x){var w=(function(Z){return Gu.get(Z)})(x);if(w===void 0)return"continue";var j=f.names.get(w),R=h.getGroup(x);if(j===void 0||!j.size||R.length===0)return"continue";var q="".concat(Ni,".g").concat(x,'[id="').concat(w,'"]'),X="";j!==void 0&&j.forEach(function(Z){Z.length>0&&(X+="".concat(Z,","))}),v+="".concat(R).concat(q,'{content:"').concat(X,'"}').concat(zf)},S=0;S<y;S++)m(S);return v})(c)})}return a.registerId=function(l){return Cu(l)},a.prototype.rehydrate=function(){!this.server&&qu&&hm(this)},a.prototype.reconstructWithOptions=function(l,o){return o===void 0&&(o=!0),new a(ft(ft({},this.options),l),this.gs,o&&this.names||void 0)},a.prototype.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(l=(function(o){var u=o.useCSSOMInjection,c=o.target;return o.isServer?new Jx(c):u?new Zx(c):new Kx(c)})(this.options),new $x(l)));var l},a.prototype.hasNameForId=function(l,o){return this.names.has(l)&&this.names.get(l).has(o)},a.prototype.registerName=function(l,o){if(Cu(l),this.names.has(l))this.names.get(l).add(o);else{var u=new Set;u.add(o),this.names.set(l,u)}},a.prototype.insertRules=function(l,o,u){this.registerName(l,o),this.getTag().insertRules(Cu(l),u)},a.prototype.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},a.prototype.clearRules=function(l){this.getTag().clearGroup(Cu(l)),this.clearNames(l)},a.prototype.clearTag=function(){this.tag=void 0},a})(),Wx=/&/g,Fx=/^\s*\/\/.*$/gm;function P1(a,l){return a.map(function(o){return o.type==="rule"&&(o.value="".concat(l," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(l," ")),o.props=o.props.map(function(u){return"".concat(l," ").concat(u)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=P1(o.children,l)),o})}function Ix(a){var l,o,u,c=Di,f=c.options,h=f===void 0?Di:f,y=c.plugins,v=y===void 0?no:y,m=function(w,j,R){return R.startsWith(o)&&R.endsWith(o)&&R.replaceAll(o,"").length>0?".".concat(l):w},S=v.slice();S.push(function(w){w.type===Wu&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(Wx,o).replace(u,m))}),h.prefix&&S.push(Tx),S.push(Sx);var x=function(w,j,R,q){j===void 0&&(j=""),R===void 0&&(R=""),q===void 0&&(q="&"),l=q,o=j,u=new RegExp("\\".concat(o,"\\b"),"g");var X=w.replace(Fx,""),Z=bx(R||j?"".concat(R," ").concat(j," { ").concat(X," }"):X);h.namespace&&(Z=P1(Z,h.namespace));var A=[];return $u(Z,wx(S.concat(Ex(function(H){return A.push(H)})))),A};return x.hash=v.length?v.reduce(function(w,j){return j.name||lr(15),zi(w,j.name)},G1).toString():"",x}var e5=new Xu,df=Ix(),W1=Te.createContext({shouldForwardProp:void 0,styleSheet:e5,stylis:df});W1.Consumer;Te.createContext(void 0);function hf(){return b.useContext(W1)}var F1=(function(){function a(l,o){var u=this;this.inject=function(c,f){f===void 0&&(f=df);var h=u.name+f.hash;c.hasNameForId(u.id,h)||c.insertRules(u.id,h,f(u.rules,h,"@keyframes"))},this.name=l,this.id="sc-keyframes-".concat(l),this.rules=o,Mf(this,function(){throw lr(12,String(u.name))})}return a.prototype.getName=function(l){return l===void 0&&(l=df),this.name+l.hash},a})(),t5=function(a){return a>="A"&&a<="Z"};function mm(a){for(var l="",o=0;o<a.length;o++){var u=a[o];if(o===1&&u==="-"&&a[0]==="-")return a;t5(u)?l+="-"+u.toLowerCase():l+=u}return l.startsWith("ms-")?"-"+l:l}var I1=function(a){return a==null||a===!1||a===""},ev=function(a){var l,o,u=[];for(var c in a){var f=a[c];a.hasOwnProperty(c)&&!I1(f)&&(Array.isArray(f)&&f.isCss||Li(f)?u.push("".concat(mm(c),":"),f,";"):Il(f)?u.push.apply(u,Ai(Ai(["".concat(c," {")],ev(f),!1),["}"],!1)):u.push("".concat(mm(c),": ").concat((l=c,(o=f)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||l in Cx||l.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return u};function da(a,l,o,u){if(I1(a))return[];if(jf(a))return[".".concat(a.styledComponentId)];if(Li(a)){if(!Li(f=a)||f.prototype&&f.prototype.isReactComponent||!l)return[a];var c=a(l);return da(c,l,o,u)}var f;return a instanceof F1?o?(a.inject(o,u),[a.getName(u)]):[a]:Il(a)?ev(a):Array.isArray(a)?Array.prototype.concat.apply(no,a.map(function(h){return da(h,l,o,u)})):[a.toString()]}function tv(a){for(var l=0;l<a.length;l+=1){var o=a[l];if(Li(o)&&!jf(o))return!1}return!0}var n5=X1(to),a5=(function(){function a(l,o,u){this.rules=l,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&tv(l),this.componentId=o,this.baseHash=zi(n5,o),this.baseStyle=u,Xu.registerId(o)}return a.prototype.generateAndInjectStyles=function(l,o,u){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(l,o,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))c=La(c,this.staticRulesId);else{var f=Yu(da(this.rules,l,o,u)),h=cf(zi(this.baseHash,f)>>>0);if(!o.hasNameForId(this.componentId,h)){var y=u(f,".".concat(h),void 0,this.componentId);o.insertRules(this.componentId,h,y)}c=La(c,h),this.staticRulesId=h}else{for(var v=zi(this.baseHash,u.hash),m="",S=0;S<this.rules.length;S++){var x=this.rules[S];if(typeof x=="string")m+=x;else if(x){var w=Yu(da(x,l,o,u));v=zi(v,w+S),m+=w}}if(m){var j=cf(v>>>0);o.hasNameForId(this.componentId,j)||o.insertRules(this.componentId,j,u(m,".".concat(j),void 0,this.componentId)),c=La(c,j)}}return c},a})(),Nf=Te.createContext(void 0);Nf.Consumer;var Lc={};function i5(a,l,o){var u=jf(a),c=a,f=!Dc(a),h=l.attrs,y=h===void 0?no:h,v=l.componentId,m=v===void 0?(function(P,k){var M=typeof P!="string"?"sc":om(P);Lc[M]=(Lc[M]||0)+1;var J="".concat(M,"-").concat(Af(to+M+Lc[M]));return k?"".concat(k,"-").concat(J):J})(l.displayName,l.parentComponentId):v,S=l.displayName,x=S===void 0?(function(P){return Dc(P)?"styled.".concat(P):"Styled(".concat(jx(P),")")})(a):S,w=l.displayName&&l.componentId?"".concat(om(l.displayName),"-").concat(l.componentId):l.componentId||m,j=u&&c.attrs?c.attrs.concat(y).filter(Boolean):y,R=l.shouldForwardProp;if(u&&c.shouldForwardProp){var q=c.shouldForwardProp;if(l.shouldForwardProp){var X=l.shouldForwardProp;R=function(P,k){return q(P,k)&&X(P,k)}}else R=q}var Z=new a5(o,w,u?c.componentStyle:void 0);function A(P,k){return(function(M,J,L){var G=M.attrs,le=M.componentStyle,K=M.defaultProps,D=M.foldedComponentIds,ee=M.styledComponentId,ne=M.target,C=Te.useContext(Nf),z=hf(),$=M.shouldForwardProp||z.shouldForwardProp,W=q1(J,C,K)||Di,re=(function(se,he,ye){for(var Ue,Ce=ft(ft({},he),{className:void 0,theme:ye}),wt=0;wt<se.length;wt+=1){var Kt=Li(Ue=se[wt])?Ue(Ce):Ue;for(var dt in Kt)Ce[dt]=dt==="className"?La(Ce[dt],Kt[dt]):dt==="style"?ft(ft({},Ce[dt]),Kt[dt]):Kt[dt]}return he.className&&(Ce.className=La(Ce.className,he.className)),Ce})(G,J,W),ce=re.as||ne,T={};for(var V in re)re[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&re.theme===W||(V==="forwardedAs"?T.as=re.forwardedAs:$&&!$(V,ce)||(T[V]=re[V]));var ie=(function(se,he){var ye=hf(),Ue=se.generateAndInjectStyles(he,ye.styleSheet,ye.stylis);return Ue})(le,re),ae=La(D,ee);return ie&&(ae+=" "+ie),re.className&&(ae+=" "+re.className),T[Dc(ce)&&!Y1.has(ce)?"class":"className"]=ae,L&&(T.ref=L),b.createElement(ce,T)})(H,P,k)}A.displayName=x;var H=Te.forwardRef(A);return H.attrs=j,H.componentStyle=Z,H.displayName=x,H.shouldForwardProp=R,H.foldedComponentIds=u?La(c.foldedComponentIds,c.styledComponentId):"",H.styledComponentId=w,H.target=u?c.target:a,Object.defineProperty(H,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=u?(function(k){for(var M=[],J=1;J<arguments.length;J++)M[J-1]=arguments[J];for(var L=0,G=M;L<G.length;L++)ff(k,G[L],!0);return k})({},c.defaultProps,P):P}}),Mf(H,function(){return".".concat(H.styledComponentId)}),f&&K1(H,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),H}function vm(a,l){for(var o=[a[0]],u=0,c=l.length;u<c;u+=1)o.push(l[u],a[u+1]);return o}var gm=function(a){return Object.assign(a,{isCss:!0})};function ha(a){for(var l=[],o=1;o<arguments.length;o++)l[o-1]=arguments[o];if(Li(a)||Il(a))return gm(da(vm(no,Ai([a],l,!0))));var u=a;return l.length===0&&u.length===1&&typeof u[0]=="string"?da(u):gm(da(vm(u,l)))}function pf(a,l,o){if(o===void 0&&(o=Di),!l)throw lr(1,l);var u=function(c){for(var f=[],h=1;h<arguments.length;h++)f[h-1]=arguments[h];return a(l,o,ha.apply(void 0,Ai([c],f,!1)))};return u.attrs=function(c){return pf(a,l,ft(ft({},o),{attrs:Array.prototype.concat(o.attrs,c).filter(Boolean)}))},u.withConfig=function(c){return pf(a,l,ft(ft({},o),c))},u}var nv=function(a){return pf(i5,a)},O=nv;Y1.forEach(function(a){O[a]=nv(a)});var l5=(function(){function a(l,o){this.rules=l,this.componentId=o,this.isStatic=tv(l),Xu.registerId(this.componentId+1)}return a.prototype.createStyles=function(l,o,u,c){var f=c(Yu(da(this.rules,o,u,c)),""),h=this.componentId+l;u.insertRules(h,h,f)},a.prototype.removeStyles=function(l,o){o.clearRules(this.componentId+l)},a.prototype.renderStyles=function(l,o,u,c){l>2&&Xu.registerId(this.componentId+l),this.removeStyles(l,u),this.createStyles(l,o,u,c)},a})();function r5(a){for(var l=[],o=1;o<arguments.length;o++)l[o-1]=arguments[o];var u=ha.apply(void 0,Ai([a],l,!1)),c="sc-global-".concat(Af(JSON.stringify(u))),f=new l5(u,c),h=function(v){var m=hf(),S=Te.useContext(Nf),x=Te.useRef(m.styleSheet.allocateGSInstance(c)).current;return m.styleSheet.server&&y(x,v,m.styleSheet,S,m.stylis),Te.useLayoutEffect(function(){if(!m.styleSheet.server)return y(x,v,m.styleSheet,S,m.stylis),function(){return f.removeStyles(x,m.styleSheet)}},[x,v,m.styleSheet,S,m.stylis]),null};function y(v,m,S,x,w){if(f.isStatic)f.renderStyles(v,_x,S,w);else{var j=ft(ft({},m),{theme:q1(m,x,h.defaultProps)});f.renderStyles(v,j,S,w)}}return Te.memo(h)}function fn(a){for(var l=[],o=1;o<arguments.length;o++)l[o-1]=arguments[o];var u=Yu(ha.apply(void 0,Ai([a],l,!1))),c=Af(u);return new F1(c,u)}var av={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ym=Te.createContext&&Te.createContext(av),u5=["attr","size","title"];function o5(a,l){if(a==null)return{};var o=s5(a,l),u,c;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)u=f[c],!(l.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(a,u)&&(o[u]=a[u])}return o}function s5(a,l){if(a==null)return{};var o={};for(var u in a)if(Object.prototype.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}function Vu(){return Vu=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(a[u]=o[u])}return a},Vu.apply(this,arguments)}function bm(a,l){var o=Object.keys(a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(a);l&&(u=u.filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable})),o.push.apply(o,u)}return o}function Qu(a){for(var l=1;l<arguments.length;l++){var o=arguments[l]!=null?arguments[l]:{};l%2?bm(Object(o),!0).forEach(function(u){c5(a,u,o[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(o)):bm(Object(o)).forEach(function(u){Object.defineProperty(a,u,Object.getOwnPropertyDescriptor(o,u))})}return a}function c5(a,l,o){return l=f5(l),l in a?Object.defineProperty(a,l,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[l]=o,a}function f5(a){var l=d5(a,"string");return typeof l=="symbol"?l:l+""}function d5(a,l){if(typeof a!="object"||!a)return a;var o=a[Symbol.toPrimitive];if(o!==void 0){var u=o.call(a,l);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(a)}function iv(a){return a&&a.map((l,o)=>Te.createElement(l.tag,Qu({key:o},l.attr),iv(l.child)))}function ke(a){return l=>Te.createElement(h5,Vu({attr:Qu({},a.attr)},l),iv(a.child))}function h5(a){var l=o=>{var{attr:u,size:c,title:f}=a,h=o5(a,u5),y=c||o.size||"1em",v;return o.className&&(v=o.className),a.className&&(v=(v?v+" ":"")+a.className),Te.createElement("svg",Vu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,u,h,{className:v,style:Qu(Qu({color:a.color||o.color},o.style),a.style),height:y,width:y,xmlns:"http://www.w3.org/2000/svg"}),f&&Te.createElement("title",null,f),a.children)};return ym!==void 0?Te.createElement(ym.Consumer,null,o=>l(o)):l(av)}function lv(a){return ke({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"},child:[]}]})(a)}function p5(a){return ke({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311h-.3v428h472.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32z"},child:[]}]})(a)}function rv(a){return ke({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"},child:[]}]})(a)}function m5(a){return ke({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"},child:[]}]})(a)}function Df(a){return ke({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"},child:[]}]})(a)}function Lf(a){return ke({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"},child:[]}]})(a)}function uv(a){return ke({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"},child:[]}]})(a)}function v5(a){return ke({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"},child:[]}]})(a)}function g5(a){return ke({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(a)}function ov(a){return ke({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(a)}function y5(a){return ke({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(a)}function sv(a){return ke({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(a)}function b5(a){return ke({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(a)}function cv(a){return ke({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(a)}function x5(a){return ke({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(a)}function fv(a){return ke({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(a)}function xm(a){return ke({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}const S5=O.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
`,w5=O.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,E5=O.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,T5=O.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,C5=O.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,R5=O.span`
  font-weight: 600;
  color: #0f172a;
`,_5=O.span`
  font-size: 12px;
  color: #64748b;
`,O5=O.button`
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
`,z5=O.div`
  position: relative;
  aspect-ratio: 1 / 1; /* Instagram-like square */
  background: linear-gradient(135deg, #eef2ff, #e0f7fa);
`,A5=O.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,j5=O.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px 6px 12px;
`,M5=O.div`
  display: flex;
  gap: 12px;
`,Ru=O.button`
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
`,N5=O.div`
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
`,D5=O.div`
  display: flex;
`,L5=O.img`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
  margin-left: -6px;
  &:first-child { margin-left: 0; }
`,k5=O.div`
  padding: 2px 12px 14px 12px;
`,U5=O.p`
  margin: 6px 0 6px;
  font-size: 14px;
  line-height: 1.5;
  color: #0f172a;
`,H5=O.time`
  font-size: 12px;
  color: #64748b;
`;function B5({username:a="ui.maker",userSubline:l="Designer · 2h",avatarSrc:o="https://i.pravatar.cc/300?img=5",title:u="Infographic Title",description:c="A short, crisp line describing what this infographic is about.",imgSrc:f="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",likedDefault:h=!1,savedDefault:y=!1,likeCountDefault:v=12,commenterAvatars:m=["https://i.pravatar.cc/100?img=12","https://i.pravatar.cc/100?img=32","https://i.pravatar.cc/100?img=8"],postUrl:S=typeof window<"u"?window.location.href:"",onLikeChange:x,onBookmarkChange:w,onShare:j}){const[R,q]=b.useState(h),[X,Z]=b.useState(y),[A,H]=b.useState(v),P=R?"Unlike":"Like",k=X?"Remove bookmark":"Bookmark",M=()=>{const le=!R;q(le),H(K=>le?K+1:Math.max(0,K-1)),x&&x(le)},J=()=>{const le=!X;Z(le),w&&w(le)},L=b.useMemo(()=>({title:u,text:`${a} on Infographics — ${u}`,url:S}),[u,a,S]),G=async()=>{try{navigator.share?await navigator.share(L):navigator.clipboard&&(await navigator.clipboard.writeText(L.url),alert("Link copied to clipboard")),j&&j(L)}catch(le){console.error("Share failed:",le)}};return p.jsxs(S5,{role:"article","aria-label":`${u} instagram-style post`,children:[p.jsxs(w5,{children:[p.jsxs(E5,{children:[p.jsx(T5,{src:o,alt:`${a} avatar`}),p.jsxs(C5,{children:[p.jsx(R5,{children:a}),p.jsx(_5,{children:l})]})]}),p.jsx(O5,{"aria-label":"Post menu",title:"More",children:p.jsx(v5,{size:18})})]}),p.jsx(z5,{children:p.jsx(A5,{src:f,alt:u})}),p.jsxs(j5,{children:[p.jsxs(M5,{children:[p.jsx(Ru,{onClick:M,"aria-label":P,title:P,children:R?p.jsx(lv,{size:22}):p.jsx(rv,{size:22})}),p.jsx(Ru,{"aria-label":"Comment",title:"Comment",children:p.jsx(uv,{size:20})}),p.jsx(Ru,{onClick:G,"aria-label":"Share",title:"Share",children:p.jsx(cv,{size:20})})]}),p.jsx(Ru,{onClick:J,"aria-label":k,title:k,children:X?p.jsx(Df,{size:20}):p.jsx(Lf,{size:20})})]}),p.jsxs(N5,{"aria-label":`${A} likes`,children:[p.jsx(D5,{children:m.slice(0,3).map((le,K)=>p.jsx(L5,{src:le,alt:"reaction avatar"},K))}),p.jsxs("span",{children:[A," likes"]})]}),p.jsxs(k5,{children:[p.jsxs(U5,{children:[p.jsx("strong",{children:a})," ",c]}),p.jsx(H5,{dateTime:new Date().toISOString(),children:"Just now"})]})]})}var kc={},Hl={},_u={},Ou={},Uc={exports:{}},Hc,Sm;function $5(){if(Sm)return Hc;Sm=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Hc=a,Hc}var Bc,wm;function q5(){if(wm)return Bc;wm=1;var a=$5();function l(){}function o(){}return o.resetWarningCache=l,Bc=function(){function u(h,y,v,m,S,x){if(x!==a){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}u.isRequired=u;function c(){return u}var f={array:u,bigint:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:c,element:u,elementType:u,instanceOf:c,node:u,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:o,resetWarningCache:l};return f.PropTypes=f,f},Bc}var Em;function dv(){return Em||(Em=1,Uc.exports=q5()()),Uc.exports}var Tm;function Y5(){return Tm||(Tm=1,(function(a){(function(l,o){o(a,pa(),dv())})(Ou,function(l,o,u){Object.defineProperty(l,"__esModule",{value:!0}),l.setHasSupportToCaptureOption=R;var c=h(o),f=h(u);function h(A){return A&&A.__esModule?A:{default:A}}var y=Object.assign||function(A){for(var H=1;H<arguments.length;H++){var P=arguments[H];for(var k in P)Object.prototype.hasOwnProperty.call(P,k)&&(A[k]=P[k])}return A};function v(A,H){var P={};for(var k in A)H.indexOf(k)>=0||Object.prototype.hasOwnProperty.call(A,k)&&(P[k]=A[k]);return P}function m(A,H){if(!(A instanceof H))throw new TypeError("Cannot call a class as a function")}var S=(function(){function A(H,P){for(var k=0;k<P.length;k++){var M=P[k];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(H,M.key,M)}}return function(H,P,k){return P&&A(H.prototype,P),k&&A(H,k),H}})();function x(A,H){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return H&&(typeof H=="object"||typeof H=="function")?H:A}function w(A,H){if(typeof H!="function"&&H!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof H);A.prototype=Object.create(H&&H.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}),H&&(Object.setPrototypeOf?Object.setPrototypeOf(A,H):A.__proto__=H)}var j=!1;function R(A){j=A}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){R(!0)}}))}catch{}function q(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return j?A:A.capture}function X(A){if("touches"in A){var H=A.touches[0],P=H.pageX,k=H.pageY;return{x:P,y:k}}var M=A.screenX,J=A.screenY;return{x:M,y:J}}var Z=(function(A){w(H,A);function H(){var P;m(this,H);for(var k=arguments.length,M=Array(k),J=0;J<k;J++)M[J]=arguments[J];var L=x(this,(P=H.__proto__||Object.getPrototypeOf(H)).call.apply(P,[this].concat(M)));return L._handleSwipeStart=L._handleSwipeStart.bind(L),L._handleSwipeMove=L._handleSwipeMove.bind(L),L._handleSwipeEnd=L._handleSwipeEnd.bind(L),L._onMouseDown=L._onMouseDown.bind(L),L._onMouseMove=L._onMouseMove.bind(L),L._onMouseUp=L._onMouseUp.bind(L),L._setSwiperRef=L._setSwiperRef.bind(L),L}return S(H,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,q({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,q({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(k){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(k))}},{key:"_onMouseMove",value:function(k){this.mouseDown&&this._handleSwipeMove(k)}},{key:"_onMouseUp",value:function(k){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(k)}},{key:"_handleSwipeStart",value:function(k){var M=X(k),J=M.x,L=M.y;this.moveStart={x:J,y:L},this.props.onSwipeStart(k)}},{key:"_handleSwipeMove",value:function(k){if(this.moveStart){var M=X(k),J=M.x,L=M.y,G=J-this.moveStart.x,le=L-this.moveStart.y;this.moving=!0;var K=this.props.onSwipeMove({x:G,y:le},k);K&&k.cancelable&&k.preventDefault(),this.movePosition={deltaX:G,deltaY:le}}}},{key:"_handleSwipeEnd",value:function(k){this.props.onSwipeEnd(k);var M=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-M?this.props.onSwipeLeft(1,k):this.movePosition.deltaX>M&&this.props.onSwipeRight(1,k),this.movePosition.deltaY<-M?this.props.onSwipeUp(1,k):this.movePosition.deltaY>M&&this.props.onSwipeDown(1,k)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(k){this.swiper=k,this.props.innerRef(k)}},{key:"render",value:function(){var k=this.props;k.tagName;var M=k.className,J=k.style,L=k.children;k.allowMouseEvents,k.onSwipeUp,k.onSwipeDown,k.onSwipeLeft,k.onSwipeRight,k.onSwipeStart,k.onSwipeMove,k.onSwipeEnd,k.innerRef,k.tolerance;var G=v(k,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return c.default.createElement(this.props.tagName,y({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:M,style:J},G),L)}}]),H})(o.Component);Z.displayName="ReactSwipe",Z.propTypes={tagName:f.default.string,className:f.default.string,style:f.default.object,children:f.default.node,allowMouseEvents:f.default.bool,onSwipeUp:f.default.func,onSwipeDown:f.default.func,onSwipeLeft:f.default.func,onSwipeRight:f.default.func,onSwipeStart:f.default.func,onSwipeMove:f.default.func,onSwipeEnd:f.default.func,innerRef:f.default.func,tolerance:f.default.number.isRequired},Z.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},l.default=Z})})(Ou)),Ou}var Cm;function hv(){return Cm||(Cm=1,(function(a){(function(l,o){o(a,Y5())})(_u,function(l,o){Object.defineProperty(l,"__esModule",{value:!0});var u=c(o);function c(f){return f&&f.__esModule?f:{default:f}}l.default=u.default})})(_u)),_u}var Bl={},$c={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Rm;function pv(){return Rm||(Rm=1,(function(a){(function(){var l={}.hasOwnProperty;function o(){for(var f="",h=0;h<arguments.length;h++){var y=arguments[h];y&&(f=c(f,u(y)))}return f}function u(f){if(typeof f=="string"||typeof f=="number")return f;if(typeof f!="object")return"";if(Array.isArray(f))return o.apply(null,f);if(f.toString!==Object.prototype.toString&&!f.toString.toString().includes("[native code]"))return f.toString();var h="";for(var y in f)l.call(f,y)&&f[y]&&(h=c(h,y));return h}function c(f,h){return h?f?f+" "+h:f+h:f}a.exports?(o.default=o,a.exports=o):window.classNames=o})()})($c)),$c.exports}var _m;function mv(){if(_m)return Bl;_m=1,Object.defineProperty(Bl,"__esModule",{value:!0}),Bl.default=void 0;var a=l(pv());function l(c){return c&&c.__esModule?c:{default:c}}function o(c,f,h){return f in c?Object.defineProperty(c,f,{value:h,enumerable:!0,configurable:!0,writable:!0}):c[f]=h,c}var u={ROOT:function(f){return(0,a.default)(o({"carousel-root":!0},f||"",!!f))},CAROUSEL:function(f){return(0,a.default)({carousel:!0,"carousel-slider":f})},WRAPPER:function(f,h){return(0,a.default)({"thumbs-wrapper":!f,"slider-wrapper":f,"axis-horizontal":h==="horizontal","axis-vertical":h!=="horizontal"})},SLIDER:function(f,h){return(0,a.default)({thumbs:!f,slider:f,animated:!h})},ITEM:function(f,h,y){return(0,a.default)({thumb:!f,slide:f,selected:h,previous:y})},ARROW_PREV:function(f){return(0,a.default)({"control-arrow control-prev":!0,"control-disabled":f})},ARROW_NEXT:function(f){return(0,a.default)({"control-arrow control-next":!0,"control-disabled":f})},DOT:function(f){return(0,a.default)({dot:!0,selected:f})}};return Bl.default=u,Bl}var $l={},ql={},Om;function G5(){if(Om)return ql;Om=1,Object.defineProperty(ql,"__esModule",{value:!0}),ql.outerWidth=void 0;var a=function(o){var u=o.offsetWidth,c=getComputedStyle(o);return u+=parseInt(c.marginLeft)+parseInt(c.marginRight),u};return ql.outerWidth=a,ql}var Yl={},zm;function kf(){if(zm)return Yl;zm=1,Object.defineProperty(Yl,"__esModule",{value:!0}),Yl.default=void 0;var a=function(o,u,c){var f=o===0?o:o+u,h=c==="horizontal"?[f,0,0]:[0,f,0],y="translate3d",v="("+h.join(",")+")";return y+v};return Yl.default=a,Yl}var Gl={},Am;function vv(){if(Am)return Gl;Am=1,Object.defineProperty(Gl,"__esModule",{value:!0}),Gl.default=void 0;var a=function(){return window};return Gl.default=a,Gl}var jm;function gv(){if(jm)return $l;jm=1,Object.defineProperty($l,"__esModule",{value:!0}),$l.default=void 0;var a=v(pa()),l=h(mv()),o=G5(),u=h(kf()),c=h(hv()),f=h(vv());function h(L){return L&&L.__esModule?L:{default:L}}function y(){if(typeof WeakMap!="function")return null;var L=new WeakMap;return y=function(){return L},L}function v(L){if(L&&L.__esModule)return L;if(L===null||m(L)!=="object"&&typeof L!="function")return{default:L};var G=y();if(G&&G.has(L))return G.get(L);var le={},K=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in L)if(Object.prototype.hasOwnProperty.call(L,D)){var ee=K?Object.getOwnPropertyDescriptor(L,D):null;ee&&(ee.get||ee.set)?Object.defineProperty(le,D,ee):le[D]=L[D]}return le.default=L,G&&G.set(L,le),le}function m(L){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?m=function(le){return typeof le}:m=function(le){return le&&typeof Symbol=="function"&&le.constructor===Symbol&&le!==Symbol.prototype?"symbol":typeof le},m(L)}function S(){return S=Object.assign||function(L){for(var G=1;G<arguments.length;G++){var le=arguments[G];for(var K in le)Object.prototype.hasOwnProperty.call(le,K)&&(L[K]=le[K])}return L},S.apply(this,arguments)}function x(L,G){if(!(L instanceof G))throw new TypeError("Cannot call a class as a function")}function w(L,G){for(var le=0;le<G.length;le++){var K=G[le];K.enumerable=K.enumerable||!1,K.configurable=!0,"value"in K&&(K.writable=!0),Object.defineProperty(L,K.key,K)}}function j(L,G,le){return G&&w(L.prototype,G),L}function R(L,G){if(typeof G!="function"&&G!==null)throw new TypeError("Super expression must either be null or a function");L.prototype=Object.create(G&&G.prototype,{constructor:{value:L,writable:!0,configurable:!0}}),G&&q(L,G)}function q(L,G){return q=Object.setPrototypeOf||function(K,D){return K.__proto__=D,K},q(L,G)}function X(L){var G=H();return function(){var K=P(L),D;if(G){var ee=P(this).constructor;D=Reflect.construct(K,arguments,ee)}else D=K.apply(this,arguments);return Z(this,D)}}function Z(L,G){return G&&(m(G)==="object"||typeof G=="function")?G:A(L)}function A(L){if(L===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return L}function H(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function P(L){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(le){return le.__proto__||Object.getPrototypeOf(le)},P(L)}function k(L,G,le){return G in L?Object.defineProperty(L,G,{value:le,enumerable:!0,configurable:!0,writable:!0}):L[G]=le,L}var M=function(G){return G.hasOwnProperty("key")},J=(function(L){R(le,L);var G=X(le);function le(K){var D;return x(this,le),D=G.call(this,K),k(A(D),"itemsWrapperRef",void 0),k(A(D),"itemsListRef",void 0),k(A(D),"thumbsRef",void 0),k(A(D),"setItemsWrapperRef",function(ee){D.itemsWrapperRef=ee}),k(A(D),"setItemsListRef",function(ee){D.itemsListRef=ee}),k(A(D),"setThumbsRef",function(ee,ne){D.thumbsRef||(D.thumbsRef=[]),D.thumbsRef[ne]=ee}),k(A(D),"updateSizes",function(){if(!(!D.props.children||!D.itemsWrapperRef||!D.thumbsRef)){var ee=a.Children.count(D.props.children),ne=D.itemsWrapperRef.clientWidth,C=D.props.thumbWidth?D.props.thumbWidth:(0,o.outerWidth)(D.thumbsRef[0]),z=Math.floor(ne/C),$=z<ee,W=$?ee-z:0;D.setState(function(re,ce){return{itemSize:C,visibleItems:z,firstItem:$?D.getFirstItem(ce.selectedItem):0,lastPosition:W,showArrows:$}})}}),k(A(D),"handleClickItem",function(ee,ne,C){if(!M(C)||C.key==="Enter"){var z=D.props.onSelectItem;typeof z=="function"&&z(ee,ne)}}),k(A(D),"onSwipeStart",function(){D.setState({swiping:!0})}),k(A(D),"onSwipeEnd",function(){D.setState({swiping:!1})}),k(A(D),"onSwipeMove",function(ee){var ne=ee.x;if(!D.state.itemSize||!D.itemsWrapperRef||!D.state.visibleItems)return!1;var C=0,z=a.Children.count(D.props.children),$=-(D.state.firstItem*100)/D.state.visibleItems,W=Math.max(z-D.state.visibleItems,0),re=-W*100/D.state.visibleItems;$===C&&ne>0&&(ne=0),$===re&&ne<0&&(ne=0);var ce=D.itemsWrapperRef.clientWidth,T=$+100/(ce/ne);return D.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(V){D.itemsListRef.style[V]=(0,u.default)(T,"%",D.props.axis)}),!0}),k(A(D),"slideRight",function(ee){D.moveTo(D.state.firstItem-(typeof ee=="number"?ee:1))}),k(A(D),"slideLeft",function(ee){D.moveTo(D.state.firstItem+(typeof ee=="number"?ee:1))}),k(A(D),"moveTo",function(ee){ee=ee<0?0:ee,ee=ee>=D.state.lastPosition?D.state.lastPosition:ee,D.setState({firstItem:ee})}),D.state={selectedItem:K.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},D}return j(le,[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(D){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==D.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,f.default)().addEventListener("resize",this.updateSizes),(0,f.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,f.default)().removeEventListener("resize",this.updateSizes),(0,f.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(D){var ee=D;return D>=this.state.lastPosition&&(ee=this.state.lastPosition),D<this.state.firstItem+this.state.visibleItems&&(ee=this.state.firstItem),D<this.state.firstItem&&(ee=D),ee}},{key:"renderItems",value:function(){var D=this;return this.props.children.map(function(ee,ne){var C=l.default.ITEM(!1,ne===D.state.selectedItem),z={key:ne,ref:function(W){return D.setThumbsRef(W,ne)},className:C,onClick:D.handleClickItem.bind(D,ne,D.props.children[ne]),onKeyDown:D.handleClickItem.bind(D,ne,D.props.children[ne]),"aria-label":"".concat(D.props.labels.item," ").concat(ne+1),style:{width:D.props.thumbWidth}};return a.default.createElement("li",S({},z,{role:"button",tabIndex:0}),ee)})}},{key:"render",value:function(){var D=this;if(!this.props.children)return null;var ee=a.Children.count(this.props.children)>1,ne=this.state.showArrows&&this.state.firstItem>0,C=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,z={},$=-this.state.firstItem*(this.state.itemSize||0),W=(0,u.default)($,"px",this.props.axis),re=this.props.transitionTime+"ms";return z={WebkitTransform:W,MozTransform:W,MsTransform:W,OTransform:W,transform:W,msTransform:W,WebkitTransitionDuration:re,MozTransitionDuration:re,MsTransitionDuration:re,OTransitionDuration:re,transitionDuration:re,msTransitionDuration:re},a.default.createElement("div",{className:l.default.CAROUSEL(!1)},a.default.createElement("div",{className:l.default.WRAPPER(!1),ref:this.setItemsWrapperRef},a.default.createElement("button",{type:"button",className:l.default.ARROW_PREV(!ne),onClick:function(){return D.slideRight()},"aria-label":this.props.labels.leftArrow}),ee?a.default.createElement(c.default,{tagName:"ul",className:l.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:z,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):a.default.createElement("ul",{className:l.default.SLIDER(!1,this.state.swiping),ref:function(T){return D.setItemsListRef(T)},style:z},this.renderItems()),a.default.createElement("button",{type:"button",className:l.default.ARROW_NEXT(!C),onClick:function(){return D.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}]),le})(a.Component);return $l.default=J,k(J,"displayName","Thumbs"),k(J,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350}),$l}var Xl={},Mm;function X5(){if(Mm)return Xl;Mm=1,Object.defineProperty(Xl,"__esModule",{value:!0}),Xl.default=void 0;var a=function(){return document};return Xl.default=a,Xl}var Nt={},Nm;function yv(){if(Nm)return Nt;Nm=1,Object.defineProperty(Nt,"__esModule",{value:!0}),Nt.setPosition=Nt.getPosition=Nt.isKeyboardEvent=Nt.defaultStatusFormatter=Nt.noop=void 0;var a=pa(),l=o(kf());function o(v){return v&&v.__esModule?v:{default:v}}var u=function(){};Nt.noop=u;var c=function(m,S){return"".concat(m," of ").concat(S)};Nt.defaultStatusFormatter=c;var f=function(m){return m?m.hasOwnProperty("key"):!1};Nt.isKeyboardEvent=f;var h=function(m,S){if(S.infiniteLoop&&++m,m===0)return 0;var x=a.Children.count(S.children);if(S.centerMode&&S.axis==="horizontal"){var w=-m*S.centerSlidePercentage,j=x-1;return m&&(m!==j||S.infiniteLoop)?w+=(100-S.centerSlidePercentage)/2:m===j&&(w+=100-S.centerSlidePercentage),w}return-m*100};Nt.getPosition=h;var y=function(m,S){var x={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(w){x[w]=(0,l.default)(m,"%",S)}),x};return Nt.setPosition=y,Nt}var Ft={},Dm;function V5(){if(Dm)return Ft;Dm=1,Object.defineProperty(Ft,"__esModule",{value:!0}),Ft.fadeAnimationHandler=Ft.slideStopSwipingHandler=Ft.slideSwipeAnimationHandler=Ft.slideAnimationHandler=void 0;var a=pa(),l=u(kf()),o=yv();function u(x){return x&&x.__esModule?x:{default:x}}function c(x,w){var j=Object.keys(x);if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(x);w&&(R=R.filter(function(q){return Object.getOwnPropertyDescriptor(x,q).enumerable})),j.push.apply(j,R)}return j}function f(x){for(var w=1;w<arguments.length;w++){var j=arguments[w]!=null?arguments[w]:{};w%2?c(Object(j),!0).forEach(function(R){h(x,R,j[R])}):Object.getOwnPropertyDescriptors?Object.defineProperties(x,Object.getOwnPropertyDescriptors(j)):c(Object(j)).forEach(function(R){Object.defineProperty(x,R,Object.getOwnPropertyDescriptor(j,R))})}return x}function h(x,w,j){return w in x?Object.defineProperty(x,w,{value:j,enumerable:!0,configurable:!0,writable:!0}):x[w]=j,x}var y=function(w,j){var R={},q=j.selectedItem,X=q,Z=a.Children.count(w.children)-1,A=w.infiniteLoop&&(q<0||q>Z);if(A)return X<0?w.centerMode&&w.centerSlidePercentage&&w.axis==="horizontal"?R.itemListStyle=(0,o.setPosition)(-(Z+2)*w.centerSlidePercentage-(100-w.centerSlidePercentage)/2,w.axis):R.itemListStyle=(0,o.setPosition)(-(Z+2)*100,w.axis):X>Z&&(R.itemListStyle=(0,o.setPosition)(0,w.axis)),R;var H=(0,o.getPosition)(q,w),P=(0,l.default)(H,"%",w.axis),k=w.transitionTime+"ms";return R.itemListStyle={WebkitTransform:P,msTransform:P,OTransform:P,transform:P},j.swiping||(R.itemListStyle=f(f({},R.itemListStyle),{},{WebkitTransitionDuration:k,MozTransitionDuration:k,OTransitionDuration:k,transitionDuration:k,msTransitionDuration:k})),R};Ft.slideAnimationHandler=y;var v=function(w,j,R,q){var X={},Z=j.axis==="horizontal",A=a.Children.count(j.children),H=0,P=(0,o.getPosition)(R.selectedItem,j),k=j.infiniteLoop?(0,o.getPosition)(A-1,j)-100:(0,o.getPosition)(A-1,j),M=Z?w.x:w.y,J=M;P===H&&M>0&&(J=0),P===k&&M<0&&(J=0);var L=P+100/(R.itemSize/J),G=Math.abs(M)>j.swipeScrollTolerance;return j.infiniteLoop&&G&&(R.selectedItem===0&&L>-100?L-=A*100:R.selectedItem===A-1&&L<-A*100&&(L+=A*100)),(!j.preventMovementUntilSwipeScrollTolerance||G||R.swipeMovementStarted)&&(R.swipeMovementStarted||q({swipeMovementStarted:!0}),X.itemListStyle=(0,o.setPosition)(L,j.axis)),G&&!R.cancelClick&&q({cancelClick:!0}),X};Ft.slideSwipeAnimationHandler=v;var m=function(w,j){var R=(0,o.getPosition)(j.selectedItem,w),q=(0,o.setPosition)(R,w.axis);return{itemListStyle:q}};Ft.slideStopSwipingHandler=m;var S=function(w,j){var R=w.transitionTime+"ms",q="ease-in-out",X={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:q,msTransitionTimingFunction:q,MozTransitionTimingFunction:q,WebkitTransitionTimingFunction:q,OTransitionTimingFunction:q};return j.swiping||(X=f(f({},X),{},{WebkitTransitionDuration:R,MozTransitionDuration:R,OTransitionDuration:R,transitionDuration:R,msTransitionDuration:R})),{slideStyle:X,selectedStyle:f(f({},X),{},{opacity:1,position:"relative"}),prevStyle:f({},X)}};return Ft.fadeAnimationHandler=S,Ft}var Lm;function Q5(){if(Lm)return Hl;Lm=1,Object.defineProperty(Hl,"__esModule",{value:!0}),Hl.default=void 0;var a=S(pa()),l=v(hv()),o=v(mv()),u=v(gv()),c=v(X5()),f=v(vv()),h=yv(),y=V5();function v(K){return K&&K.__esModule?K:{default:K}}function m(){if(typeof WeakMap!="function")return null;var K=new WeakMap;return m=function(){return K},K}function S(K){if(K&&K.__esModule)return K;if(K===null||x(K)!=="object"&&typeof K!="function")return{default:K};var D=m();if(D&&D.has(K))return D.get(K);var ee={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in K)if(Object.prototype.hasOwnProperty.call(K,C)){var z=ne?Object.getOwnPropertyDescriptor(K,C):null;z&&(z.get||z.set)?Object.defineProperty(ee,C,z):ee[C]=K[C]}return ee.default=K,D&&D.set(K,ee),ee}function x(K){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?x=function(ee){return typeof ee}:x=function(ee){return ee&&typeof Symbol=="function"&&ee.constructor===Symbol&&ee!==Symbol.prototype?"symbol":typeof ee},x(K)}function w(){return w=Object.assign||function(K){for(var D=1;D<arguments.length;D++){var ee=arguments[D];for(var ne in ee)Object.prototype.hasOwnProperty.call(ee,ne)&&(K[ne]=ee[ne])}return K},w.apply(this,arguments)}function j(K,D){var ee=Object.keys(K);if(Object.getOwnPropertySymbols){var ne=Object.getOwnPropertySymbols(K);D&&(ne=ne.filter(function(C){return Object.getOwnPropertyDescriptor(K,C).enumerable})),ee.push.apply(ee,ne)}return ee}function R(K){for(var D=1;D<arguments.length;D++){var ee=arguments[D]!=null?arguments[D]:{};D%2?j(Object(ee),!0).forEach(function(ne){G(K,ne,ee[ne])}):Object.getOwnPropertyDescriptors?Object.defineProperties(K,Object.getOwnPropertyDescriptors(ee)):j(Object(ee)).forEach(function(ne){Object.defineProperty(K,ne,Object.getOwnPropertyDescriptor(ee,ne))})}return K}function q(K,D){if(!(K instanceof D))throw new TypeError("Cannot call a class as a function")}function X(K,D){for(var ee=0;ee<D.length;ee++){var ne=D[ee];ne.enumerable=ne.enumerable||!1,ne.configurable=!0,"value"in ne&&(ne.writable=!0),Object.defineProperty(K,ne.key,ne)}}function Z(K,D,ee){return D&&X(K.prototype,D),K}function A(K,D){if(typeof D!="function"&&D!==null)throw new TypeError("Super expression must either be null or a function");K.prototype=Object.create(D&&D.prototype,{constructor:{value:K,writable:!0,configurable:!0}}),D&&H(K,D)}function H(K,D){return H=Object.setPrototypeOf||function(ne,C){return ne.__proto__=C,ne},H(K,D)}function P(K){var D=J();return function(){var ne=L(K),C;if(D){var z=L(this).constructor;C=Reflect.construct(ne,arguments,z)}else C=ne.apply(this,arguments);return k(this,C)}}function k(K,D){return D&&(x(D)==="object"||typeof D=="function")?D:M(K)}function M(K){if(K===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return K}function J(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function L(K){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(ee){return ee.__proto__||Object.getPrototypeOf(ee)},L(K)}function G(K,D,ee){return D in K?Object.defineProperty(K,D,{value:ee,enumerable:!0,configurable:!0,writable:!0}):K[D]=ee,K}var le=(function(K){A(ee,K);var D=P(ee);function ee(ne){var C;q(this,ee),C=D.call(this,ne),G(M(C),"thumbsRef",void 0),G(M(C),"carouselWrapperRef",void 0),G(M(C),"listRef",void 0),G(M(C),"itemsRef",void 0),G(M(C),"timer",void 0),G(M(C),"animationHandler",void 0),G(M(C),"setThumbsRef",function($){C.thumbsRef=$}),G(M(C),"setCarouselWrapperRef",function($){C.carouselWrapperRef=$}),G(M(C),"setListRef",function($){C.listRef=$}),G(M(C),"setItemsRef",function($,W){C.itemsRef||(C.itemsRef=[]),C.itemsRef[W]=$}),G(M(C),"autoPlay",function(){a.Children.count(C.props.children)<=1||(C.clearAutoPlay(),C.props.autoPlay&&(C.timer=setTimeout(function(){C.increment()},C.props.interval)))}),G(M(C),"clearAutoPlay",function(){C.timer&&clearTimeout(C.timer)}),G(M(C),"resetAutoPlay",function(){C.clearAutoPlay(),C.autoPlay()}),G(M(C),"stopOnHover",function(){C.setState({isMouseEntered:!0},C.clearAutoPlay)}),G(M(C),"startOnLeave",function(){C.setState({isMouseEntered:!1},C.autoPlay)}),G(M(C),"isFocusWithinTheCarousel",function(){return C.carouselWrapperRef?!!((0,c.default)().activeElement===C.carouselWrapperRef||C.carouselWrapperRef.contains((0,c.default)().activeElement)):!1}),G(M(C),"navigateWithKeyboard",function($){if(C.isFocusWithinTheCarousel()){var W=C.props.axis,re=W==="horizontal",ce={ArrowUp:38,ArrowRight:39,ArrowDown:40,ArrowLeft:37},T=re?ce.ArrowRight:ce.ArrowDown,V=re?ce.ArrowLeft:ce.ArrowUp;T===$.keyCode?C.increment():V===$.keyCode&&C.decrement()}}),G(M(C),"updateSizes",function(){if(!(!C.state.initialized||!C.itemsRef||C.itemsRef.length===0)){var $=C.props.axis==="horizontal",W=C.itemsRef[0];if(W){var re=$?W.clientWidth:W.clientHeight;C.setState({itemSize:re}),C.thumbsRef&&C.thumbsRef.updateSizes()}}}),G(M(C),"setMountState",function(){C.setState({hasMount:!0}),C.updateSizes()}),G(M(C),"handleClickItem",function($,W){if(a.Children.count(C.props.children)!==0){if(C.state.cancelClick){C.setState({cancelClick:!1});return}C.props.onClickItem($,W),$!==C.state.selectedItem&&C.setState({selectedItem:$})}}),G(M(C),"handleOnChange",function($,W){a.Children.count(C.props.children)<=1||C.props.onChange($,W)}),G(M(C),"handleClickThumb",function($,W){C.props.onClickThumb($,W),C.moveTo($)}),G(M(C),"onSwipeStart",function($){C.setState({swiping:!0}),C.props.onSwipeStart($)}),G(M(C),"onSwipeEnd",function($){C.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),C.props.onSwipeEnd($),C.clearAutoPlay(),C.state.autoPlay&&C.autoPlay()}),G(M(C),"onSwipeMove",function($,W){C.props.onSwipeMove(W);var re=C.props.swipeAnimationHandler($,C.props,C.state,C.setState.bind(M(C)));return C.setState(R({},re)),!!Object.keys(re).length}),G(M(C),"decrement",function(){var $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;C.moveTo(C.state.selectedItem-(typeof $=="number"?$:1))}),G(M(C),"increment",function(){var $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;C.moveTo(C.state.selectedItem+(typeof $=="number"?$:1))}),G(M(C),"moveTo",function($){if(typeof $=="number"){var W=a.Children.count(C.props.children)-1;$<0&&($=C.props.infiniteLoop?W:0),$>W&&($=C.props.infiniteLoop?0:W),C.selectItem({selectedItem:$}),C.state.autoPlay&&C.state.isMouseEntered===!1&&C.resetAutoPlay()}}),G(M(C),"onClickNext",function(){C.increment(1)}),G(M(C),"onClickPrev",function(){C.decrement(1)}),G(M(C),"onSwipeForward",function(){C.increment(1),C.props.emulateTouch&&C.setState({cancelClick:!0})}),G(M(C),"onSwipeBackwards",function(){C.decrement(1),C.props.emulateTouch&&C.setState({cancelClick:!0})}),G(M(C),"changeItem",function($){return function(W){(!(0,h.isKeyboardEvent)(W)||W.key==="Enter")&&C.moveTo($)}}),G(M(C),"selectItem",function($){C.setState(R({previousItem:C.state.selectedItem},$),function(){C.setState(C.animationHandler(C.props,C.state))}),C.handleOnChange($.selectedItem,a.Children.toArray(C.props.children)[$.selectedItem])}),G(M(C),"getInitialImage",function(){var $=C.props.selectedItem,W=C.itemsRef&&C.itemsRef[$],re=W&&W.getElementsByTagName("img")||[];return re[0]}),G(M(C),"getVariableItemHeight",function($){var W=C.itemsRef&&C.itemsRef[$];if(C.state.hasMount&&W&&W.children.length){var re=W.children[0].getElementsByTagName("img")||[];if(re.length>0){var ce=re[0];if(!ce.complete){var T=function ae(){C.forceUpdate(),ce.removeEventListener("load",ae)};ce.addEventListener("load",T)}}var V=re[0]||W.children[0],ie=V.clientHeight;return ie>0?ie:null}return null});var z={initialized:!1,previousItem:ne.selectedItem,selectedItem:ne.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:ne.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return C.animationHandler=typeof ne.animationHandler=="function"&&ne.animationHandler||ne.animationHandler==="fade"&&y.fadeAnimationHandler||y.slideAnimationHandler,C.state=R(R({},z),C.animationHandler(ne,z)),C}return Z(ee,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(C,z){!C.children&&this.props.children&&!this.state.initialized&&this.setupCarousel(),!C.autoFocus&&this.props.autoFocus&&this.forceFocus(),z.swiping&&!this.state.swiping&&this.setState(R({},this.props.stopSwipingHandler(this.props,this.state))),(C.selectedItem!==this.props.selectedItem||C.centerMode!==this.props.centerMode)&&(this.updateSizes(),this.moveTo(this.props.selectedItem)),C.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var C=this;this.bindEvents(),this.state.autoPlay&&a.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},function(){var z=C.getInitialImage();z&&!z.complete?z.addEventListener("load",C.setMountState):C.setMountState()})}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var C=this.carouselWrapperRef;this.props.stopOnHover&&C&&(C.addEventListener("mouseenter",this.stopOnHover),C.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var C=this.carouselWrapperRef;this.props.stopOnHover&&C&&(C.removeEventListener("mouseenter",this.stopOnHover),C.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,f.default)().addEventListener("resize",this.updateSizes),(0,f.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,c.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,f.default)().removeEventListener("resize",this.updateSizes),(0,f.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var C=this.getInitialImage();C&&C.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,c.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var C;(C=this.carouselWrapperRef)===null||C===void 0||C.focus()}},{key:"renderItems",value:function(C){var z=this;return this.props.children?a.Children.map(this.props.children,function($,W){var re=W===z.state.selectedItem,ce=W===z.state.previousItem,T=re&&z.state.selectedStyle||ce&&z.state.prevStyle||z.state.slideStyle||{};z.props.centerMode&&z.props.axis==="horizontal"&&(T=R(R({},T),{},{minWidth:z.props.centerSlidePercentage+"%"})),z.state.swiping&&z.state.swipeMovementStarted&&(T=R(R({},T),{},{pointerEvents:"none"}));var V={ref:function(ae){return z.setItemsRef(ae,W)},key:"itemKey"+W+(C?"clone":""),className:o.default.ITEM(!0,W===z.state.selectedItem,W===z.state.previousItem),onClick:z.handleClickItem.bind(z,W,$),style:T};return a.default.createElement("li",V,z.props.renderItem($,{isSelected:W===z.state.selectedItem,isPrevious:W===z.state.previousItem}))}):[]}},{key:"renderControls",value:function(){var C=this,z=this.props,$=z.showIndicators,W=z.labels,re=z.renderIndicator,ce=z.children;return $?a.default.createElement("ul",{className:"control-dots"},a.Children.map(ce,function(T,V){return re&&re(C.changeItem(V),V===C.state.selectedItem,V,W.item)})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?a.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,a.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return!this.props.showThumbs||!this.props.children||a.Children.count(this.props.children)===0?null:a.default.createElement(u.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children))}},{key:"render",value:function(){var C=this;if(!this.props.children||a.Children.count(this.props.children)===0)return null;var z=this.props.swipeable&&a.Children.count(this.props.children)>1,$=this.props.axis==="horizontal",W=this.props.showArrows&&a.Children.count(this.props.children)>1,re=W&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,ce=W&&(this.state.selectedItem<a.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,T=this.renderItems(!0),V=T.shift(),ie=T.pop(),ae={className:o.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},se={};if($){if(ae.onSwipeLeft=this.onSwipeForward,ae.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var he=this.getVariableItemHeight(this.state.selectedItem);se.height=he||"auto"}}else ae.onSwipeUp=this.props.verticalSwipe==="natural"?this.onSwipeBackwards:this.onSwipeForward,ae.onSwipeDown=this.props.verticalSwipe==="natural"?this.onSwipeForward:this.onSwipeBackwards,ae.style=R(R({},ae.style),{},{height:this.state.itemSize}),se.height=this.state.itemSize;return a.default.createElement("div",{"aria-label":this.props.ariaLabel,className:o.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},a.default.createElement("div",{className:o.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,re,this.props.labels.leftArrow),a.default.createElement("div",{className:o.default.WRAPPER(!0,this.props.axis),style:se},z?a.default.createElement(l.default,w({tagName:"ul",innerRef:this.setListRef},ae,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&ie,this.renderItems(),this.props.infiniteLoop&&V):a.default.createElement("ul",{className:o.default.SLIDER(!0,this.state.swiping),ref:function(Ue){return C.setListRef(Ue)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&ie,this.renderItems(),this.props.infiniteLoop&&V)),this.props.renderArrowNext(this.onClickNext,ce,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}]),ee})(a.default.Component);return Hl.default=le,G(le,"displayName","Carousel"),G(le,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:h.noop,onClickThumb:h.noop,onChange:h.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(D,ee,ne){return a.default.createElement("button",{type:"button","aria-label":ne,className:o.default.ARROW_PREV(!ee),onClick:D})},renderArrowNext:function(D,ee,ne){return a.default.createElement("button",{type:"button","aria-label":ne,className:o.default.ARROW_NEXT(!ee),onClick:D})},renderIndicator:function(D,ee,ne,C){return a.default.createElement("li",{className:o.default.DOT(ee),onClick:D,onKeyDown:D,value:ne,key:ne,role:"button",tabIndex:0,"aria-label":"".concat(C," ").concat(ne+1)})},renderItem:function(D){return D},renderThumbs:function(D){var ee=a.Children.map(D,function(ne){var C=ne;if(ne.type!=="img"&&(C=a.Children.toArray(ne.props.children).find(function(z){return z.type==="img"})),!!C)return C});return ee.filter(function(ne){return ne}).length===0?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):ee},statusFormatter:h.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:y.slideSwipeAnimationHandler,stopSwipingHandler:y.slideStopSwipingHandler}),Hl}var km={},Um;function Z5(){return Um||(Um=1),km}var Hm;function K5(){return Hm||(Hm=1,(function(a){Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"Carousel",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(a,"CarouselProps",{enumerable:!0,get:function(){return o.CarouselProps}}),Object.defineProperty(a,"Thumbs",{enumerable:!0,get:function(){return u.default}});var l=c(Q5()),o=Z5(),u=c(gv());function c(f){return f&&f.__esModule?f:{default:f}}})(kc)),kc}var J5=K5();const P5=r5`
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
`,W5=O.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(2, 6, 23, 0.08);
`,F5=O.div`
  position: relative;
  aspect-ratio: 1 / 1; /* Instagram square */
  background: #f1f5f9;
`,I5=O.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,e3=O.div`
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
`,t3=O.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`,n3=O.div`
  display: flex;
  gap: 12px;
`,zu=O.button`
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
`,a3=O.div`
  padding: 0 12px 12px 12px;
`,i3=O.div`
  font-weight: 600;
  font-size: 14px;
  color: #0f172a;
`,l3=O.p`
  margin: 6px 0 4px;
  font-size: 14px;
  line-height: 1.5;
  color: #0f172a;
`,r3=O.time`
  display: block;
  font-size: 12px;
  color: #64748b;
`;function u3({data:a,likedDefault:l=!1,savedDefault:o=!1,likeCountDefault:u=0,onLikeChange:c,onBookmarkChange:f,onShare:h}){const{title:y="Infographic Title",description:v="",carouselImgSrc:m=[]}=a||{},[S,x]=b.useState(0),[w,j]=b.useState(l),[R,q]=b.useState(o),[X,Z]=b.useState(u),A=w?"Unlike post":"Like post",H=R?"Remove bookmark":"Bookmark",P=()=>{const L=!w;j(L),Z(G=>L?G+1:Math.max(0,G-1)),c&&c(L)},k=()=>{const L=!R;q(L),f&&f(L)},M=b.useMemo(()=>({title:y,text:`${y}`,url:typeof window<"u"?window.location.href:""}),[y]),J=async()=>{try{navigator.share?await navigator.share(M):navigator.clipboard&&(await navigator.clipboard.writeText(M.url),alert("Link copied to clipboard")),h&&h(M)}catch(L){console.error("Share failed:",L)}};return!m||m.length===0?null:p.jsxs(W5,{role:"article","aria-label":`${y} – Instagram multi-image post`,children:[p.jsx(P5,{}),p.jsxs(F5,{children:[p.jsx(J5.Carousel,{showThumbs:!1,showIndicators:!0,showStatus:!1,showArrows:!1,infiniteLoop:!1,autoPlay:!1,swipeable:!0,emulateTouch:!0,transitionTime:350,selectedItem:S,onChange:x,dynamicHeight:!1,children:m.map((L,G)=>p.jsx("div",{children:p.jsx(I5,{src:L,alt:`${y} — ${G+1}`})},G))}),p.jsxs(e3,{children:[S+1,"/",m.length]})]}),p.jsxs(t3,{children:[p.jsxs(n3,{children:[p.jsx(zu,{onClick:P,"aria-label":A,title:A,children:w?p.jsx(lv,{size:22}):p.jsx(rv,{size:22})}),p.jsx(zu,{"aria-label":"Comment",title:"Comment",children:p.jsx(uv,{size:20})}),p.jsx(zu,{onClick:J,"aria-label":"Share",title:"Share",children:p.jsx(cv,{size:20})})]}),p.jsx(zu,{onClick:k,"aria-label":H,title:H,children:R?p.jsx(Df,{size:20}):p.jsx(Lf,{size:20})})]}),p.jsxs(a3,{children:[p.jsxs(i3,{children:[X," likes"]}),v&&p.jsxs(l3,{children:[p.jsx("strong",{children:y})," ",v]}),p.jsx(r3,{dateTime:new Date().toISOString(),children:"Just now"})]})]})}const o3="modulepreload",s3=function(a){return"/instalearn/"+a},Bm={},un=function(l,o,u){let c=Promise.resolve();if(o&&o.length>0){let v=function(m){return Promise.all(m.map(S=>Promise.resolve(S).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),y=h?.nonce||h?.getAttribute("nonce");c=v(o.map(m=>{if(m=s3(m),m in Bm)return;Bm[m]=!0;const S=m.endsWith(".css"),x=S?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${x}`))return;const w=document.createElement("link");if(w.rel=S?"stylesheet":o3,S||(w.as="script"),w.crossOrigin="",w.href=m,y&&w.setAttribute("nonce",y),document.head.appendChild(w),S)return new Promise((j,R)=>{w.addEventListener("load",j),w.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${m}`)))})}))}function f(h){const y=new Event("vite:preloadError",{cancelable:!0});if(y.payload=h,window.dispatchEvent(y),!y.defaultPrevented)throw h}return c.then(h=>{for(const y of h||[])y.status==="rejected"&&f(y.reason);return l().catch(f)})},bv=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,$m=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,qm=/\.(m3u8)($|\?)/i,c3=/\.(mpd)($|\?)/i,f3=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,d3=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,h3=/vimeo\.com\/(?!progressive_redirect).+/,p3=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,m3=/open\.spotify\.com\/(\w+)\/(\w+)/i,v3=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+|(videos?\/|\?video=)\d+)($|\?)/,g3=/tiktok\.com\/(?:player\/v1\/|share\/video\/|@[^/]+\/video\/)([0-9]+)/,Pl=(a,l)=>{if(Array.isArray(a)){for(const o of a)if(typeof o=="string"&&Pl(o,l)||Pl(o.src,l))return!0;return!1}return l(a)},rn={html:a=>Pl(a,l=>bv.test(l)||$m.test(l)),hls:a=>Pl(a,l=>qm.test(l)),dash:a=>Pl(a,l=>c3.test(l)),mux:a=>f3.test(a),youtube:a=>d3.test(a),vimeo:a=>h3.test(a)&&!$m.test(a)&&!qm.test(a),wistia:a=>p3.test(a),spotify:a=>m3.test(a),twitch:a=>v3.test(a),tiktok:a=>g3.test(a)},y3=Te.forwardRef((a,l)=>{const o=bv.test(`${a.src}`)?"audio":"video";return Te.createElement(o,{...a,ref:l},a.children)});var b3=y3;const x3=[{key:"hls",name:"hls.js",canPlay:rn.hls,canEnablePIP:()=>!0,player:b.lazy(()=>un(()=>import("./react-BgSEXM9e.js"),__vite__mapDeps([0,1,2])))},{key:"dash",name:"dash.js",canPlay:rn.dash,canEnablePIP:()=>!0,player:b.lazy(()=>un(()=>import("./react-DO1VtiuO.js"),__vite__mapDeps([3,1])))},{key:"mux",name:"Mux",canPlay:rn.mux,canEnablePIP:()=>!0,player:b.lazy(()=>un(()=>import("./index-ScVq4Eua.js"),__vite__mapDeps([4,2,1])))},{key:"youtube",name:"YouTube",canPlay:rn.youtube,player:b.lazy(()=>un(()=>import("./react-4ZNlEDlz.js"),[]))},{key:"vimeo",name:"Vimeo",canPlay:rn.vimeo,player:b.lazy(()=>un(()=>import("./react-DYhX4k1u.js"),[]))},{key:"wistia",name:"Wistia",canPlay:rn.wistia,canEnablePIP:()=>!0,player:b.lazy(()=>un(()=>import("./react-Bz2DJt2A.js"),[]))},{key:"spotify",name:"Spotify",canPlay:rn.spotify,canEnablePIP:()=>!1,player:b.lazy(()=>un(()=>import("./react-Cxr7ZM--.js"),[]))},{key:"twitch",name:"Twitch",canPlay:rn.twitch,canEnablePIP:()=>!1,player:b.lazy(()=>un(()=>import("./react-_FOYlyHe.js"),[]))},{key:"tiktok",name:"TikTok",canPlay:rn.tiktok,canEnablePIP:()=>!1,player:b.lazy(()=>un(()=>import("./react-BU_8ZbT4.js"),[]))},{key:"html",name:"html",canPlay:rn.html,canEnablePIP:()=>!0,player:b3}];var mf=x3;const S3={width:"320px",height:"180px",volume:1,playbackRate:1,previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}"},xv=Te.forwardRef((a,l)=>{const{playing:o,pip:u}=a,c=a.activePlayer,f=b.useRef(null),h=b.useRef(!0);b.useEffect(()=>{var x,w;f.current&&(f.current.paused&&o===!0&&f.current.play(),!f.current.paused&&o===!1&&f.current.pause(),f.current.playbackRate=(x=a.playbackRate)!=null?x:1,f.current.volume=(w=a.volume)!=null?w:1)}),b.useEffect(()=>{var x,w,j,R,q;if(!(!f.current||!globalThis.document)){if(u&&!document.pictureInPictureElement)try{(w=(x=f.current).requestPictureInPicture)==null||w.call(x)}catch{}if(!u&&document.pictureInPictureElement)try{(R=(j=f.current).exitPictureInPicture)==null||R.call(j),(q=document.exitPictureInPicture)==null||q.call(document)}catch{}}},[u]);const y=x=>{var w,j;h.current=!0,(w=a.onReady)==null||w.call(a),(j=a.onLoadStart)==null||j.call(a,x)},v=x=>{var w,j;h.current&&(h.current=!1,(w=a.onStart)==null||w.call(a,x)),(j=a.onPlay)==null||j.call(a,x)};if(!c)return null;const m={},S=["onReady","onStart"];for(const x in a)x.startsWith("on")&&!S.includes(x)&&(m[x]=a[x]);return Te.createElement(c,{...m,style:a.style,className:a.className,slot:a.slot,ref:b.useCallback(x=>{f.current=x,typeof l=="function"?l(x):l!==null&&(l.current=x)},[l]),src:a.src,crossOrigin:a.crossOrigin,preload:a.preload,controls:a.controls,muted:a.muted,autoPlay:a.autoPlay,loop:a.loop,playsInline:a.playsInline,config:a.config,onLoadStart:y,onPlay:v},a.children)});xv.displayName="Player";var w3=xv;const E3=b.lazy(()=>un(()=>import("./Preview-B7vXKwbk.js"),[])),Vl=[],T3=(a,l)=>{const o=c=>{for(const f of[...Vl,...a])if(c&&f.canPlay(c))return f;return l||null},u=Te.forwardRef((c,f)=>{const h={...S3,...c},{src:y,slot:v,className:m,style:S,width:x,height:w,fallback:j,wrapper:R}=h,[q,X]=b.useState(!!h.light);b.useEffect(()=>{h.light?X(!0):X(!1)},[h.light]);const Z=M=>{var J;X(!1),(J=h.onClickPreview)==null||J.call(h,M)},A=M=>{if(!M)return null;const{light:J,playIcon:L,previewTabIndex:G,oEmbedUrl:le,previewAriaLabel:K}=h;return Te.createElement(E3,{src:M,light:J,playIcon:L,previewTabIndex:G,previewAriaLabel:K,oEmbedUrl:le,onClickPreview:Z})},H=M=>{var J,L;const G=o(M);if(!G)return null;const{style:le,width:K,height:D,wrapper:ee}=h,ne=(J=h.config)==null?void 0:J[G.key];return Te.createElement(w3,{...h,ref:f,activePlayer:(L=G.player)!=null?L:G,slot:ee?void 0:v,className:ee?void 0:m,style:ee?{display:"block",width:"100%",height:"100%"}:{display:"block",width:K,height:D,...le},config:ne})},P=R??Ym,k=j===!1?Ym:b.Suspense;return Te.createElement(P,{slot:v,className:m,style:{width:x,height:w,...S}},Te.createElement(k,{fallback:j},q?A(y):H(y)))});return u.displayName="ReactPlayer",u.addCustomPlayer=c=>{Vl.push(c)},u.removeCustomPlayers=()=>{Vl.length=0},u.canPlay=c=>{if(c){for(const f of[...Vl,...a])if(f.canPlay(c))return!0}return!1},u.canEnablePIP=c=>{var f;if(c){for(const h of[...Vl,...a])if(h.canPlay(c)&&((f=h.canEnablePIP)!=null&&f.call(h)))return!0}return!1},u},Ym=({children:a})=>a,C3=mf[mf.length-1];var R3=T3(mf,C3);const _3=O.article`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(180deg, #dff6ff 0%, #bce0ff 100%);
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.12);
`,O3=O.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background: #000;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`,z3=O.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 18px 20px;
  color: #0f172a;
`,A3=O.div`
  flex: 1 1 auto;
`,j3=O.h3`
  margin: 0 0 6px;
  font-size: clamp(18px, 2.2vw, 22px);
  line-height: 1.2;
`,M3=O.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #334155;
`,N3=O.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,Gm=O.button`
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
`;function D3({data:a,likedDefault:l=!1,savedDefault:o=!1,onLikeChange:u,onBookmarkChange:c}){const{title:f,description:h,vedioClipSrc:y}=a||{},[v,m]=b.useState(l),[S,x]=b.useState(o),w=()=>{const R=!v;m(R),u&&u(R)},j=()=>{const R=!S;x(R),c&&c(R)};return y?p.jsxs(_3,{children:[p.jsx(O3,{children:p.jsx(R3,{className:"react-player",url:y,width:"100%",height:"100%",controls:!0,playing:!0,muted:!0,loop:!0})}),p.jsxs(z3,{children:[p.jsxs(A3,{children:[p.jsx(j3,{children:f}),h&&p.jsx(M3,{children:h})]}),p.jsxs(N3,{children:[p.jsx(Gm,{onClick:w,"aria-label":v?"Unlike video":"Like video",title:v?"Unlike":"Like",children:v?p.jsx(p5,{size:20}):p.jsx(m5,{size:20})}),p.jsx(Gm,{onClick:j,"aria-label":S?"Remove bookmark":"Bookmark video",title:S?"Remove bookmark":"Bookmark",children:S?p.jsx(Df,{size:18}):p.jsx(Lf,{size:18})})]})]})]}):null}const L3="/instalearn/assets/Nutrition-BfBrn9tn.png",k3="/instalearn/assets/Respiration-B5Csk1VR.png",U3="/instalearn/assets/Transportation-BxGtnbrT.png",H3="/instalearn/assets/Excreation-C95doeHw.png",B3="/instalearn/assets/Slide1-D2afjhkb.png",$3="/instalearn/assets/Slide2-DIwEjNVQ.png",q3="/instalearn/assets/Slide3-C5ID8kCw.png",Y3="/instalearn/assets/Slide4-ulaEiMHb.png",G3="/instalearn/assets/Slide5-CzICeeJV.png",X3="/instalearn/assets/Slide6-BsK1hLVc.png",V3="/instalearn/assets/Slide7-DNPKyHLa.png",Q3="/instalearn/assets/Slide8-Bzon4H9P.png",Z3="/instalearn/assets/Slide9-CbcZeZ2g.png",K3="/instalearn/assets/Slide10-Ss8450kM.png",J3="/instalearn/assets/vedioClip1-BQ1quwNm.mp4",P3="/instalearn/assets/test-BrOnAr5c.png",Au={Nutrition:L3,Respiration:k3,Transportation:U3,Excreation:H3},ct={Slide1:B3,Slide2:$3,Slide3:q3,Slide4:Y3,Slide5:G3,Slide6:X3,Slide7:V3,Slide8:Q3,Slide9:Z3,Slide10:K3},W3={videoClip1:J3},F3={test:P3},I3=[{id:1,name:"Nutrition",img:Au.Nutrition,hasNew:!0,slides:[F3.test,"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=1400&fit=crop"]},{id:2,name:"Respiration",img:Au.Respiration,hasNew:!0,slides:["https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=1400&fit=crop"]},{id:3,name:"Transportation",img:Au.Transportation,hasNew:!0,slides:["https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=1400&fit=crop"]},{id:4,name:"Excretion",img:Au.Excreation,hasNew:!0,slides:["https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1525268771113-32d9e9021a97?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=1400&fit=crop"]},{id:5,name:"Growth",img:"https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=800&h=1400&fit=crop"]}];function eS({isOpen:a,activeIndex:l,setActiveIndex:o,total:u,onClose:c,duration:f=3e3}){const h=b.useRef(Date.now()),y=b.useRef(),v=b.useRef(0),m=b.useCallback(()=>{const x=Date.now()-h.current,w=Math.min(1,x/f);v.current=w,w>=1?l<u-1?o(j=>j+1):c():y.current=requestAnimationFrame(m)},[l,u,f,c,o]);return b.useEffect(()=>{if(a)return h.current=Date.now(),y.current=requestAnimationFrame(m),()=>cancelAnimationFrame(y.current)},[a,l,m]),{resetTimer:b.useCallback(()=>{h.current=Date.now()},[]),getProgressValue:()=>v.current}}const tS=O.div``,nS=O.div`
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
`,aS=O.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 16px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,iS=O.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border: 0;
  background: transparent;
  cursor: pointer;
`,lS=O.div`
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
`,rS=O.div`
  background: #fff;
  padding: 3px;
  border-radius: 999px;
`,uS=O.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 999px;
  user-drag: none;
  -webkit-user-drag: none;
`,oS=O.span`
  font-size: 12px;
  color: #1f2937;
  max-width: 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,sS=O.div`
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
`,cS=O.div`
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
`,fS=O.div`
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
`,dS=O.div`
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
`,hS=O.div`
  height: 3px;
  flex: 1;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    height: 2.5px;
  }
`,pS=O.div`
  height: 100%;
  background: linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.95) 100%);
  transition: width 100ms linear;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
`,mS=O.div`
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
`,vS=O.img`
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
`,gS=O.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
`,yS=O.div`
  font-weight: 700;
  font-size: clamp(13px, 2.2vw, 15px);
  line-height: 1.2;
  letter-spacing: -0.01em;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,bS=O.div`
  font-size: clamp(11px, 1.8vw, 13px);
  opacity: 0.85;
  line-height: 1.2;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,xS=O.button`
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
`,SS=O.img`
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
`,Xm=O.div`
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
`;function wS(a){return ke({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1.47978 1.4797C1.30227 1.65721 1.28614 1.93498 1.43137 2.13072L1.47978 2.1868L4.1695 4.87652C2.88817 5.77616 1.93052 7.11985 1.53259 8.70952C1.46554 8.97738 1.62834 9.24892 1.89621 9.31598C2.16409 9.38298 2.4356 9.22025 2.50266 8.95232C2.85564 7.54225 3.72742 6.35956 4.88944 5.59626L6.09586 6.80278C5.62419 7.28378 5.33334 7.94278 5.33334 8.66965C5.33334 10.1424 6.52724 11.3363 8 11.3363C8.72694 11.3363 9.38587 11.0454 9.86694 10.5738L13.8131 14.5201C14.0084 14.7154 14.3249 14.7154 14.5202 14.5201C14.6977 14.3426 14.7139 14.0649 14.5686 13.8691L14.5202 13.813L10.4445 9.73692L10.4453 9.73592L9.64527 8.93732L7.732 7.02445L7.73334 7.02392L5.81252 5.10513L5.81334 5.10392L5.05782 4.35024L2.18689 1.4797C1.99163 1.28444 1.67504 1.28444 1.47978 1.4797ZM6.80274 7.51025L9.15947 9.86698C8.85947 10.1575 8.4506 10.3363 8 10.3363C7.07954 10.3363 6.33334 9.59012 6.33334 8.66965C6.33334 8.21905 6.51216 7.81018 6.80274 7.51025ZM8 3.66658C7.33314 3.66658 6.68607 3.7653 6.07406 3.94992L6.89874 4.77404C7.25594 4.70346 7.62427 4.66658 8 4.66658C10.6154 4.66658 12.8733 6.45342 13.4981 8.95538C13.565 9.22325 13.8364 9.38618 14.1043 9.31932C14.3723 9.25238 14.5352 8.98098 14.4683 8.71305C13.7329 5.7684 11.077 3.66658 8 3.66658ZM8.1298 6.0061L10.664 8.53992C10.5961 7.16865 9.49814 6.07168 8.1298 6.0061Z"},child:[]}]})(a)}function ES({currentItem:a,isOpen:l,slideIndex:o,setSlideIndex:u,onClose:c,duration:f=3e3}){const h=a?.slides?.length||0,{resetTimer:y,getProgressValue:v}=eS({isOpen:l,activeIndex:o,setActiveIndex:u,total:h,onClose:c,duration:f}),m=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[,S]=b.useState(0);b.useEffect(()=>{if(!l||m)return;let R;const q=()=>{S(X=>X+1),R=requestAnimationFrame(q)};return R=requestAnimationFrame(q),()=>cancelAnimationFrame(R)},[l,m]);const x=b.useCallback(()=>{a&&(o<h-1?(u(R=>R+1),y()):c())},[a,o,h,y,c,u]),w=b.useCallback(()=>{a&&(o>0?(u(R=>R-1),y()):c())},[a,o,y,c,u]);b.useEffect(()=>{const R=q=>{l&&(q.key==="Escape"&&c(),q.key==="ArrowRight"&&x(),q.key==="ArrowLeft"&&w())};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[l,x,w,c]),b.useEffect(()=>(l?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[l]);const j=R=>R<o?1:R>o?0:v();return!l||!a?null:p.jsx(sS,{onClick:c,"aria-label":"Story overlay",children:p.jsx(cS,{onClick:R=>R.stopPropagation(),children:p.jsxs(fS,{children:[p.jsx(dS,{"aria-label":"Story progress",children:a.slides.map((R,q)=>p.jsx(hS,{"aria-label":`Progress track ${q+1}`,children:p.jsx(pS,{style:{width:`${j(q)*100}%`}})},q))}),p.jsxs(mS,{children:[p.jsx(vS,{src:a.img,alt:a.name}),p.jsxs(gS,{children:[p.jsx(yS,{children:a.name}),p.jsx(bS,{children:"Chapter highlight"})]}),p.jsx(xS,{"aria-label":"Close story",onClick:c,title:"Close",children:p.jsx(wS,{})})]}),a.slides.map((R,q)=>p.jsx(SS,{src:R,alt:`Slide ${q+1}`,$active:q===o,draggable:!1},q)),p.jsx(Xm,{$side:"left",onClick:w,"aria-label":"Previous slide"}),p.jsx(Xm,{$side:"right",onClick:x,"aria-label":"Next slide"})]})})})}function TS({items:a,duration:l=3e3,onOpen:o,onClose:u,className:c}){const f=b.useRef(null),h=b.useRef(!1),y=b.useRef(0),v=b.useRef(0),[m,S]=b.useState(a||[]),[x,w]=b.useState(null),[j,R]=b.useState(0),q=m.find(M=>M.id===x)||null,X=!!x,Z=M=>{R(0),w(M),S(J=>J.map(L=>L.id===M?{...L,hasNew:!1}:L)),o&&o(M)},A=()=>{w(null),u&&u()},H=M=>{h.current=!0,y.current=M.clientX,v.current=f.current?.scrollLeft||0,M.target.setPointerCapture?.(M.pointerId)},P=M=>{if(!h.current||!f.current)return;const J=M.clientX-y.current;f.current.scrollLeft=v.current-J},k=()=>{h.current=!1};return p.jsxs(tS,{className:c,children:[p.jsx(nS,{children:p.jsx(aS,{ref:f,onPointerDown:H,onPointerMove:P,onPointerUp:k,onPointerLeave:k,"aria-label":"Stories scroller",children:m.map(M=>p.jsxs(iS,{onClick:()=>Z(M.id),"aria-label":`Open story ${M.name}`,title:M.name,children:[p.jsx(lS,{$hasNew:M.hasNew,children:p.jsx(rS,{children:p.jsx(uS,{src:M.img,alt:M.name,draggable:!1})})}),p.jsx(oS,{children:M.name})]},M.id))})}),p.jsx(ES,{currentItem:q,isOpen:X,slideIndex:j,setSlideIndex:R,onClose:A,duration:l})]})}const CS=[{id:1,type:"carousel",title:"Nutrition - Summary",description:"Summary of the Nutrition chapter",carouselImgSrc:[ct.Slide10,ct.Slide9,ct.Slide8]},{id:2,type:"infografic",title:"Introduction to Nutrition",description:"Basics of nutrition and its importance",imgSrc:ct.Slide1},{id:3,type:"infografic",title:"Autotrophic Nutrition process",description:"Steps involved in autotrophic nutrition",imgSrc:ct.Slide2},{id:4,type:"infografic",title:"Photosynthesis Overview",description:"Photosynthesis and its steps",imgSrc:ct.Slide3},{id:5,type:"infografic",title:"Heterotrophic Nutrition",description:"Heterotrophic mode of nutrition",imgSrc:ct.Slide4},{id:6,type:"infografic",title:"Human Digestive System",description:"Human digestive system overview",imgSrc:ct.Slide5},{id:7,type:"infografic",title:"Digestive Organs Functions",description:"Functions of digestive organs",imgSrc:ct.Slide6},{id:8,type:"infografic",title:"Enzymes in Digestion",description:"Role of enzymes in digestion",imgSrc:ct.Slide7},{id:9,type:"infografic",title:"Absorption and Assimilation",description:"Absorption and assimilation",imgSrc:ct.Slide8},{id:10,type:"infografic",title:"Egestion process",description:"Egestion process",imgSrc:ct.Slide9},{id:11,type:"infografic",title:"Nutrition - Summary",description:"Summary of the Nutrition chapter",imgSrc:ct.Slide10},{id:12,type:"carousel",title:"Nutrition - Summary",description:"Summary of the Nutrition chapter",carouselImgSrc:[ct.Slide10,ct.Slide9,ct.Slide8]},{id:13,type:"vedioClip",title:"Nutrition - Summary",description:"Summary of the Nutrition chapter",vedioClipSrc:W3.videoClip1}],RS=O.div`
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
`;function _S(){return b.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]),p.jsxs(p.Fragment,{children:[p.jsx(TS,{items:I3,duration:3e3,onOpen:a=>console.log("opened:",a),onClose:()=>console.log("closed")}),p.jsx(RS,{children:p.jsx("div",{className:"d-flex gap-3 flex-column align-items-center mt-3",children:CS.map(a=>p.jsx("div",{style:{width:"100%"},children:a.type==="infografic"?p.jsx(B5,{title:a.title,description:a.description,imgSrc:a.imgSrc,badge:a.badge}):a.type==="carousel"?p.jsx(u3,{data:a}):a.type==="vedioClip"?p.jsx(D3,{data:a}):null},a.id))})})]})}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zS=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,o,u)=>u?u.toUpperCase():o.toLowerCase()),Vm=a=>{const l=zS(a);return l.charAt(0).toUpperCase()+l.slice(1)},Sv=(...a)=>a.filter((l,o,u)=>!!l&&l.trim()!==""&&u.indexOf(l)===o).join(" ").trim(),AS=a=>{for(const l in a)if(l.startsWith("aria-")||l==="role"||l==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=b.forwardRef(({color:a="currentColor",size:l=24,strokeWidth:o=2,absoluteStrokeWidth:u,className:c="",children:f,iconNode:h,...y},v)=>b.createElement("svg",{ref:v,...jS,width:l,height:l,stroke:a,strokeWidth:u?Number(o)*24/Number(l):o,className:Sv("lucide",c),...!f&&!AS(y)&&{"aria-hidden":"true"},...y},[...h.map(([m,S])=>b.createElement(m,S)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=(a,l)=>{const o=b.forwardRef(({className:u,...c},f)=>b.createElement(MS,{ref:f,iconNode:l,className:Sv(`lucide-${OS(Vm(a))}`,`lucide-${a}`,u),...c}));return o.displayName=Vm(a),o};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],DS=Ua("arrow-right",NS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Wl=Ua("book-open",LS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],US=Ua("bookmark",kS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Qm=Ua("circle-check-big",HS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Zm=Ua("graduation-cap",BS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],qS=Ua("grid-3x3",$S);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],GS=Ua("sparkles",YS),XS=fn`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(30px, -30px) rotate(5deg); }
  50% { transform: translate(-20px, -50px) rotate(-5deg); }
  75% { transform: translate(40px, -20px) rotate(3deg); }
`,VS=fn`
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.4; }
`,QS=fn`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`,ZS=O.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
 background: linear-gradient(
  135deg,
  #8BE3F5 0%,
  #9FEFD0 50%,
  #B5F8B5 100%
);

  font-family: 'Inter', sans-serif;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 1rem;
  }
`,KS=O.span`
  &::after {
    content: '|';
    animation: ${QS} 1s infinite;
    margin-left: 4px;
  }
`,JS=O.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border-radius: 1.5rem;

  @media (min-width: 768px) {
    border-radius: 1rem;
  }
`,PS=O(JS)`
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.2);
  }
`,WS=O.div`
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
`,FS=O.h1`
  font-size: clamp(1.5rem, 6vw, 3rem);
  font-weight: 900;
  line-height: 1.2;
  padding: 0 1rem;
`,IS=O.span`
  background: green;
  -webkit-background-clip: text;
  color: transparent;
  font-style: italic;
  font-size: 30px;
`,qc=O.div`
  position: absolute;
  border-radius: 50%;
  background: ${({color:a})=>a};
  width: ${({size:a})=>a}px;
  height: ${({size:a})=>a}px;
  top: ${({top:a})=>a};
  left: ${({left:a})=>a};
  bottom: ${({bottom:a})=>a};
  right: ${({right:a})=>a};
  animation: ${VS} ${({duration:a})=>a}s infinite ease-in-out;
  animation-delay: ${({delay:a})=>a}s;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`,e4=O.div`
  position: absolute;
  opacity: 0.15;
  animation: ${XS} ${({duration:a})=>a}s infinite ease-in-out;
  animation-delay: ${({delay:a})=>a}s;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`,t4=O.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 100%;
`,n4=O.div`
  width: 100%;
  max-width: 600px;

  @media (min-width: 768px) {
    max-width: 800px;
  }
`,Km=O.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
  align-items: center;
`,Jm=O.div`
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
`,Pm=O.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e293b;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;O.p`
  font-size: 0.8rem;
  color: #64748b;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;const a4=O.select`
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
`,Wm=O.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,i4=O.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,l4=O.button`
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
  background: ${({disabled:a})=>a?"#e2e8f0":"linear-gradient(135deg, #667eea 0%, #667eea 100%)"};
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
`,r4=O.button`
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
    background: linear-gradient(180deg, #B7F0CF 0%, #28A745 50%, #0E7C3F 100%);


    color: white;
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
    transform: scale(1.02);
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
`,u4=O.div`
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
`,o4=O.div`
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
`;function s4(){const a=wf(),[l,o]=b.useState(""),[u,c]=b.useState(""),[f,h]=b.useState(""),[y,v]=b.useState(0),[m,S]=b.useState(!1),[x,w]=b.useState(0),j=["Achieve Excellence","Master Every Subject","Unlock Your Potential"];b.useEffect(()=>{const Z=m?40:80,A=2e3,H=setTimeout(()=>{const P=j[y];if(!m&&x===P.length){setTimeout(()=>S(!0),A);return}if(m&&x===0){S(!1),v(k=>(k+1)%j.length);return}w(k=>k+(m?-1:1)),h(P.substring(0,x+(m?-1:1)))},Z);return()=>clearTimeout(H)});const R={"Grade 9":{subjects:{English:"Ms. Priya Sharma",Mathematics:"Mr. Rajesh Kumar",Science:"Ms. Anjali Mehta","Social Studies":"Mr. Suresh Iyer",Hindi:"Ms. Kavita Reddy","Computer Science":"Mr. Arvind Nair"}},"Grade 10":{subjects:{English:"Ms. Sunita Verma",Mathematics:"Mr. Rohan Patel",Science:"Ms. Anjali Mehta","Social Studies":"Mr. Suresh Iyer",Hindi:"Ms. Kavita Reddy","Computer Science":"Mr. Arvind Nair"}},"Grade 11":{subjects:{English:"Ms. Priya Sharma",Physics:"Mr. Nitin Agarwal",Chemistry:"Ms. Sneha Kapoor",Biology:"Ms. Meena Joshi",Mathematics:"Mr. Deepak Rao","Computer Science":"Mr. Arvind Nair"}},"Grade 12":{subjects:{English:"Ms. Sunita Verma",Physics:"Mr. Nitin Agarwal",Chemistry:"Ms. Sneha Kapoor",Biology:"Ms. Meena Joshi",Mathematics:"Mr. Deepak Rao","Computer Science":"Mr. Arvind Nair"}}},q=()=>{l&&u&&(a("/instalearn/teacher"),console.log(`Selected: ${l} - ${u}`))},X=l?Object.keys(R[l].subjects):[];return p.jsxs(ZS,{children:[p.jsx(qc,{color:"rgba(255, 255, 255, 0.15)",size:500,top:"-10%",right:"-5%",duration:8,delay:0}),p.jsx(qc,{color:"rgba(255, 255, 255, 0.1)",size:600,bottom:"-15%",left:"-5%",duration:10,delay:3}),p.jsx(qc,{color:"rgba(255, 255, 255, 0.12)",size:400,top:"40%",left:"50%",duration:12,delay:6}),[...Array(8)].map((Z,A)=>p.jsx(e4,{duration:8+A*2,delay:A*.8,style:{left:`${10+A*12}%`,top:`${15+A*11}%`},children:A%3===0?p.jsx(Wl,{size:32,color:"rgba(255,255,255,0.4)"}):A%3===1?p.jsx(Zm,{size:32,color:"rgba(255,255,255,0.4)"}):p.jsx(GS,{size:32,color:"rgba(255,255,255,0.4)"})},A)),p.jsx(t4,{children:p.jsxs(n4,{children:[p.jsx(WS,{children:p.jsx(FS,{children:p.jsx(IS,{children:p.jsx(KS,{children:f})})})}),p.jsxs(PS,{style:{padding:"1.5rem",display:"flex",flexDirection:"column",gap:"2rem"},children:[p.jsxs(Wm,{children:[p.jsxs(Km,{children:[p.jsx(Jm,{gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",shadow:"0 8px 24px rgba(102,126,234,0.3)",children:p.jsx(Zm,{size:20,color:"white"})}),p.jsx("div",{children:p.jsx(Pm,{children:"Select Your Grade"})})]}),p.jsxs("div",{style:{position:"relative"},children:[p.jsxs(a4,{value:l,onChange:Z=>{o(Z.target.value),c("")},children:[p.jsx("option",{value:"",disabled:!0,children:"Select Grade"}),Object.keys(R).map(Z=>p.jsx("option",{value:Z,children:Z},Z))]}),l&&p.jsx(Qm,{size:20,style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",color:"#10b981"}})]})]}),p.jsxs(Wm,{children:[p.jsxs(Km,{children:[p.jsx(Jm,{gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",shadow:"0 8px 24px rgba(240,147,251,0.3)",children:p.jsx(Wl,{size:20,color:"white"})}),p.jsx("div",{children:p.jsx(Pm,{children:"Choose Your Subject"})})]}),X.length===0?p.jsxs(u4,{children:[p.jsx(Wl,{size:40,color:"#94a3b8"}),p.jsx("p",{children:"Please select a grade to view available subjects"})]}):p.jsx(i4,{children:X.map(Z=>{const A=R[l].subjects[Z],H=u===Z;return p.jsxs(r4,{selected:H,onClick:()=>c(Z),children:[p.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsx("span",{children:Z}),H&&p.jsx(Qm,{size:18})]}),H&&p.jsx(o4,{children:A})]},Z)})})]}),p.jsxs(l4,{disabled:!l||!u,onClick:q,children:["Continue to Profile ",p.jsx(DS,{size:20})]})]})]})})]})}function c4(a){return ke({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(a)}function wv(a){return ke({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(a)}function f4(a){return ke({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(a)}function d4(a){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(a)}function h4(a){return ke({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(a)}function p4(a){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(a)}function Fm(a){return ke({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(a)}const m4=fn`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`,v4=fn`
  from { opacity: 0; }
  to { opacity: 1; }
`,g4=O.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(
  135deg,
  #8BE3F5 0%,
  #9FEFD0 50%,
  #B5F8B5 100%
);
  min-height: 100%;
  padding: 20px;
`,y4=O.div`
  width: 100%;
  margin: 0 auto;
  animation: ${m4} 0.8s ease-out;
`,b4=O.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`,x4=O.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;

  @media(max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`,S4=O.div`
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
`,w4=O.div`
  flex: 1;
`,E4=O.h1`
  font-size: 2em;
  color: #2d3748;
  margin: 0 0 5px 0;
  font-weight: 700;
`,T4=O.p`
  color: #718096;
  margin: 0 0 10px 0;
`,C4=O.div`
  display: flex;
  gap: 30px;
  margin-top: 15px;

  @media(max-width: 600px) {
    justify-content: center;
  }
`,Yc=O.div`
  text-align: center;
`,Gc=O.div`
  font-size: 24px;
  font-weight: bold;
  color: #667eea;
`,Xc=O.div`
  font-size: 14px;
  color: #718096;
`,R4=O.button`
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
`,_4=O.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Im=O.button`
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
`,O4=O.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: ${v4} 0.5s ease-out;
`,z4=O.div`
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
`,A4=O.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
`,j4=O.div`
  flex: 1;
`,M4=O.h3`
  margin: 0 0 5px 0;
  color: #2d3748;
  font-size: 16px;
`,N4=O.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 12px;
  color: #718096;
`,D4=O.span`
  display: flex;
  align-items: center;
  gap: 5px;
`,L4=O.span`
  display: flex;
  align-items: center;
  gap: 5px;
`,k4=O(f4)`
  color: #cbd5e0;
  font-size: 18px;
`,U4=O.div`
  text-align: center;
  padding: 40px;
  color: #718096;
`,H4=O.div`
  font-size: 60px;
  margin-bottom: 15px;
  opacity: 0.5;
`;function B4(){const[a,l]=b.useState("history");b.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]);const o={name:"Priya Sharma",email:"priya.sharma@example.com",avatar:"PS",booksRead:24,hoursSpent:156,favoriteTeacher:"Ms. Sarah"},u=[{id:1,title:"Advanced Mathematics",teacher:"Prof. Michael Chen",time:"2 hours ago",progress:75,icon:"📐"},{id:2,title:"Introduction to Physics",teacher:"Dr. Sarah Johnson",time:"Yesterday",progress:45,icon:"⚡"},{id:3,title:"Chemistry Fundamentals",teacher:"Mr. David Kumar",time:"2 days ago",progress:90,icon:"🧪"},{id:4,title:"Biology Basics",teacher:"Dr. Emily Brown",time:"1 week ago",progress:100,icon:"🧬"}];return p.jsx(g4,{children:p.jsxs(y4,{children:[p.jsx(b4,{children:p.jsxs(x4,{children:[p.jsx(S4,{children:o.avatar}),p.jsxs(w4,{children:[p.jsx(E4,{children:o.name}),p.jsx(T4,{children:o.email}),p.jsxs(C4,{children:[p.jsxs(Yc,{children:[p.jsx(Gc,{children:o.booksRead}),p.jsx(Xc,{children:"Books Read"})]}),p.jsxs(Yc,{children:[p.jsx(Gc,{children:o.hoursSpent}),p.jsx(Xc,{children:"Hours"})]}),p.jsxs(Yc,{children:[p.jsx(Gc,{children:p.jsx(Fm,{style:{color:"#fbbf24"}})}),p.jsx(Xc,{children:o.favoriteTeacher})]})]})]}),p.jsxs(R4,{children:[p.jsx(h4,{})," Edit Profile"]})]})}),p.jsxs(_4,{children:[p.jsxs(Im,{active:a==="history",onClick:()=>l("history"),children:[p.jsx(p4,{})," Reading History"]}),p.jsxs(Im,{active:a==="favorites",onClick:()=>l("favorites"),children:[p.jsx(Fm,{})," Favorites"]})]}),p.jsx(O4,{children:a==="history"&&u.length>0?u.map(c=>p.jsxs(z4,{children:[p.jsx(A4,{children:c.icon}),p.jsxs(j4,{children:[p.jsx(M4,{children:c.title}),p.jsxs(N4,{children:[p.jsxs(D4,{children:[p.jsx(d4,{})," ",c.time]}),p.jsxs(L4,{children:[p.jsx(c4,{})," ",c.progress,"% complete"]})]})]}),p.jsx(k4,{})]},c.id)):p.jsxs(U4,{children:[p.jsx(H4,{children:"📚"}),p.jsx("h3",{children:"No Reading History Yet"}),p.jsx("p",{children:"Start reading books to see them here!"})]})})]})})}const $4=fn`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
`,q4=fn`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Y4=fn`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,G4=fn`
  0% {
    width: 0%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 0%;
  }
`,X4=O.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`,V4=O.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,Vc=O.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: ${$4} 20s infinite ease-in-out;

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
`,Q4=O.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  animation: ${q4} 0.8s ease-out;

  @media (max-width: 600px) {
    margin: 20px;
    padding: 20px 20px;
  }
`,Z4=O.div`
  margin-bottom: 0px;
  position: relative;
`,K4=O.div`
  font-size: 70px;
  animation: ${Y4} 2s infinite;
`,J4=O.h1`
  font-size: 2.5em;
  color: #2d3748;
  margin-bottom: 10px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 2em;
  }
`,P4=O.p`
  font-size: 1.2em;
  color: #718096;
  margin-bottom: 25px;
  line-height: 1.6;
`,W4=O.div`
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`,F4=O.div`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  animation: ${G4} 3s ease-in-out infinite;
`,I4=O.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Qc=O.div`
  padding: 20px;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
  }
`,Zc=O.div`
  font-size:30px;
  margin-bottom: 10px;
`,Kc=O.div`
  font-size: 14px;
  color: #4a5568;
  font-weight: 600;
`,e6=O.button`
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
`;function e1(){const[a,l]=b.useState(!1),o=()=>{l(!0),setTimeout(()=>{l(!1)},2e3)};return p.jsxs(X4,{children:[p.jsxs(V4,{children:[p.jsx(Vc,{}),p.jsx(Vc,{}),p.jsx(Vc,{})]}),p.jsxs(Q4,{children:[p.jsx(Z4,{children:p.jsx(K4,{children:"🚧"})}),p.jsx(J4,{children:"Building Something Amazing"}),p.jsx(P4,{children:"We're working hard to bring you an incredible new feature. Stay tuned!"}),p.jsx(W4,{children:p.jsx(F4,{})}),p.jsxs(I4,{children:[p.jsxs(Qc,{children:[p.jsx(Zc,{children:"⚡"}),p.jsx(Kc,{children:"Lightning Fast"})]}),p.jsxs(Qc,{children:[p.jsx(Zc,{children:"🎨"}),p.jsx(Kc,{children:"Beautiful Design"})]}),p.jsxs(Qc,{children:[p.jsx(Zc,{children:"🔒"}),p.jsx(Kc,{children:"Secure & Private"})]})]}),p.jsx(e6,{onClick:o,$notified:a,children:a?"✓ You'll be notified!":"Notify Me When Ready"})]})]})}var t6=pv();const at=tr(t6);function vf(){return vf=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var u in o)({}).hasOwnProperty.call(o,u)&&(a[u]=o[u])}return a},vf.apply(null,arguments)}function Ev(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)!==-1)continue;o[u]=a[u]}return o}function t1(a){return"default"+a.charAt(0).toUpperCase()+a.substr(1)}function n6(a){var l=a6(a,"string");return typeof l=="symbol"?l:String(l)}function a6(a,l){if(typeof a!="object"||a===null)return a;var o=a[Symbol.toPrimitive];if(o!==void 0){var u=o.call(a,l);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}function i6(a,l,o){var u=b.useRef(a!==void 0),c=b.useState(l),f=c[0],h=c[1],y=a!==void 0,v=u.current;return u.current=y,!y&&v&&f!==l&&h(l),[y?a:f,b.useCallback(function(m){for(var S=arguments.length,x=new Array(S>1?S-1:0),w=1;w<S;w++)x[w-1]=arguments[w];o&&o.apply(void 0,[m].concat(x)),h(m)},[o])]}function Tv(a,l){return Object.keys(l).reduce(function(o,u){var c,f=o,h=f[t1(u)],y=f[u],v=Ev(f,[t1(u),u].map(n6)),m=l[u],S=i6(y,h,a[m]),x=S[0],w=S[1];return vf({},v,(c={},c[u]=x,c[m]=w,c))},a)}function gf(a,l){return gf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,u){return o.__proto__=u,o},gf(a,l)}function l6(a,l){a.prototype=Object.create(l.prototype),a.prototype.constructor=a,gf(a,l)}const r6=["xxl","xl","lg","md","sm","xs"],u6="xs",Cv=b.createContext({prefixes:{},breakpoints:r6,minBreakpoint:u6}),{Consumer:uE,Provider:oE}=Cv;function St(a,l){const{prefixes:o}=b.useContext(Cv);return a||o[l]||l}function Uf(a){return a&&a.ownerDocument||document}function o6(a){var l=Uf(a);return l&&l.defaultView||window}function s6(a,l){return o6(a).getComputedStyle(a,l)}var c6=/([A-Z])/g;function f6(a){return a.replace(c6,"-$1").toLowerCase()}var d6=/^ms-/;function ju(a){return f6(a).replace(d6,"-ms-")}var h6=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function p6(a){return!!(a&&h6.test(a))}function Dn(a,l){var o="",u="";if(typeof l=="string")return a.style.getPropertyValue(ju(l))||s6(a).getPropertyValue(ju(l));Object.keys(l).forEach(function(c){var f=l[c];!f&&f!==0?a.style.removeProperty(ju(c)):p6(c)?u+=c+"("+f+") ":o+=ju(c)+": "+f+";"}),u&&(o+="transform: "+u+";"),a.style.cssText+=";"+o}var m6=dv();const Jc=tr(m6),n1={disabled:!1},Rv=Te.createContext(null);var v6=function(l){return l.scrollTop},Kl="unmounted",fa="exited",It="entering",jn="entered",er="exiting",Hn=(function(a){l6(l,a);function l(u,c){var f;f=a.call(this,u,c)||this;var h=c,y=h&&!h.isMounting?u.enter:u.appear,v;return f.appearStatus=null,u.in?y?(v=fa,f.appearStatus=It):v=jn:u.unmountOnExit||u.mountOnEnter?v=Kl:v=fa,f.state={status:v},f.nextCallback=null,f}l.getDerivedStateFromProps=function(c,f){var h=c.in;return h&&f.status===Kl?{status:fa}:null};var o=l.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(c){var f=null;if(c!==this.props){var h=this.state.status;this.props.in?h!==It&&h!==jn&&(f=It):(h===It||h===jn)&&(f=er)}this.updateStatus(!1,f)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var c=this.props.timeout,f,h,y;return f=h=y=c,c!=null&&typeof c!="number"&&(f=c.exit,h=c.enter,y=c.appear!==void 0?c.appear:h),{exit:f,enter:h,appear:y}},o.updateStatus=function(c,f){if(c===void 0&&(c=!1),f!==null)if(this.cancelNextCallback(),f===It){if(this.props.unmountOnExit||this.props.mountOnEnter){var h=this.props.nodeRef?this.props.nodeRef.current:Oi.findDOMNode(this);h&&v6(h)}this.performEnter(c)}else this.performExit();else this.props.unmountOnExit&&this.state.status===fa&&this.setState({status:Kl})},o.performEnter=function(c){var f=this,h=this.props.enter,y=this.context?this.context.isMounting:c,v=this.props.nodeRef?[y]:[Oi.findDOMNode(this),y],m=v[0],S=v[1],x=this.getTimeouts(),w=y?x.appear:x.enter;if(!c&&!h||n1.disabled){this.safeSetState({status:jn},function(){f.props.onEntered(m)});return}this.props.onEnter(m,S),this.safeSetState({status:It},function(){f.props.onEntering(m,S),f.onTransitionEnd(w,function(){f.safeSetState({status:jn},function(){f.props.onEntered(m,S)})})})},o.performExit=function(){var c=this,f=this.props.exit,h=this.getTimeouts(),y=this.props.nodeRef?void 0:Oi.findDOMNode(this);if(!f||n1.disabled){this.safeSetState({status:fa},function(){c.props.onExited(y)});return}this.props.onExit(y),this.safeSetState({status:er},function(){c.props.onExiting(y),c.onTransitionEnd(h.exit,function(){c.safeSetState({status:fa},function(){c.props.onExited(y)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(c,f){f=this.setNextCallback(f),this.setState(c,f)},o.setNextCallback=function(c){var f=this,h=!0;return this.nextCallback=function(y){h&&(h=!1,f.nextCallback=null,c(y))},this.nextCallback.cancel=function(){h=!1},this.nextCallback},o.onTransitionEnd=function(c,f){this.setNextCallback(f);var h=this.props.nodeRef?this.props.nodeRef.current:Oi.findDOMNode(this),y=c==null&&!this.props.addEndListener;if(!h||y){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var v=this.props.nodeRef?[this.nextCallback]:[h,this.nextCallback],m=v[0],S=v[1];this.props.addEndListener(m,S)}c!=null&&setTimeout(this.nextCallback,c)},o.render=function(){var c=this.state.status;if(c===Kl)return null;var f=this.props,h=f.children;f.in,f.mountOnEnter,f.unmountOnExit,f.appear,f.enter,f.exit,f.timeout,f.addEndListener,f.onEnter,f.onEntering,f.onEntered,f.onExit,f.onExiting,f.onExited,f.nodeRef;var y=Ev(f,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Te.createElement(Rv.Provider,{value:null},typeof h=="function"?h(c,y):Te.cloneElement(Te.Children.only(h),y))},l})(Te.Component);Hn.contextType=Rv;Hn.propTypes={};function Ci(){}Hn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ci,onEntering:Ci,onEntered:Ci,onExit:Ci,onExiting:Ci,onExited:Ci};Hn.UNMOUNTED=Kl;Hn.EXITED=fa;Hn.ENTERING=It;Hn.ENTERED=jn;Hn.EXITING=er;function g6(a){return a.code==="Escape"||a.keyCode===27}function y6(){const a=b.version.split(".");return{major:+a[0],minor:+a[1],patch:+a[2]}}function $i(a){if(!a||typeof a=="function")return null;const{major:l}=y6();return l>=19?a.props.ref:a.ref}const ao=!!(typeof window<"u"&&window.document&&window.document.createElement);var yf=!1,bf=!1;try{var Pc={get passive(){return yf=!0},get once(){return bf=yf=!0}};ao&&(window.addEventListener("test",Pc,Pc),window.removeEventListener("test",Pc,!0))}catch{}function b6(a,l,o,u){if(u&&typeof u!="boolean"&&!bf){var c=u.once,f=u.capture,h=o;!bf&&c&&(h=o.__once||function y(v){this.removeEventListener(l,y,f),o.call(this,v)},o.__once=h),a.addEventListener(l,h,yf?u:f)}a.addEventListener(l,o,u)}function x6(a,l,o,u){var c=u&&typeof u!="boolean"?u.capture:u;a.removeEventListener(l,o,c),o.__once&&a.removeEventListener(l,o.__once,c)}function Zu(a,l,o,u){return b6(a,l,o,u),function(){x6(a,l,o,u)}}function S6(a,l,o,u){if(u===void 0&&(u=!0),a){var c=document.createEvent("HTMLEvents");c.initEvent(l,o,u),a.dispatchEvent(c)}}function w6(a){var l=Dn(a,"transitionDuration")||"",o=l.indexOf("ms")===-1?1e3:1;return parseFloat(l)*o}function E6(a,l,o){o===void 0&&(o=5);var u=!1,c=setTimeout(function(){u||S6(a,"transitionend",!0)},l+o),f=Zu(a,"transitionend",function(){u=!0},{once:!0});return function(){clearTimeout(c),f()}}function T6(a,l,o,u){o==null&&(o=w6(a)||0);var c=E6(a,o,u),f=Zu(a,"transitionend",l);return function(){c(),f()}}function a1(a,l){const o=Dn(a,l)||"",u=o.indexOf("ms")===-1?1e3:1;return parseFloat(o)*u}function Hf(a,l){const o=a1(a,"transitionDuration"),u=a1(a,"transitionDelay"),c=T6(a,f=>{f.target===a&&(c(),l(f))},o+u)}function Ql(...a){return a.filter(l=>l!=null).reduce((l,o)=>{if(typeof o!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return l===null?o:function(...c){l.apply(this,c),o.apply(this,c)}},null)}function _v(a){a.offsetHeight}const i1=a=>!a||typeof a=="function"?a:l=>{a.current=l};function C6(a,l){const o=i1(a),u=i1(l);return c=>{o&&o(c),u&&u(c)}}function R6(a,l){return b.useMemo(()=>C6(a,l),[a,l])}function _6(a){return a&&"setState"in a?Oi.findDOMNode(a):a??null}const io=Te.forwardRef(({onEnter:a,onEntering:l,onEntered:o,onExit:u,onExiting:c,onExited:f,addEndListener:h,children:y,childRef:v,...m},S)=>{const x=b.useRef(null),w=R6(x,v),j=M=>{w(_6(M))},R=M=>J=>{M&&x.current&&M(x.current,J)},q=b.useCallback(R(a),[a]),X=b.useCallback(R(l),[l]),Z=b.useCallback(R(o),[o]),A=b.useCallback(R(u),[u]),H=b.useCallback(R(c),[c]),P=b.useCallback(R(f),[f]),k=b.useCallback(R(h),[h]);return p.jsx(Hn,{ref:S,...m,onEnter:q,onEntered:Z,onEntering:X,onExit:A,onExited:P,onExiting:H,addEndListener:k,nodeRef:x,children:typeof y=="function"?(M,J)=>y(M,{...J,ref:j}):Te.cloneElement(y,{ref:j})})});io.displayName="TransitionWrapper";const O6={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function z6(a,l){const o=`offset${a[0].toUpperCase()}${a.slice(1)}`,u=l[o],c=O6[a];return u+parseInt(Dn(l,c[0]),10)+parseInt(Dn(l,c[1]),10)}const A6={[fa]:"collapse",[er]:"collapsing",[It]:"collapsing",[jn]:"collapse show"},Ov=Te.forwardRef(({onEnter:a,onEntering:l,onEntered:o,onExit:u,onExiting:c,className:f,children:h,dimension:y="height",in:v=!1,timeout:m=300,mountOnEnter:S=!1,unmountOnExit:x=!1,appear:w=!1,getDimensionValue:j=z6,...R},q)=>{const X=typeof y=="function"?y():y,Z=b.useMemo(()=>Ql(M=>{M.style[X]="0"},a),[X,a]),A=b.useMemo(()=>Ql(M=>{const J=`scroll${X[0].toUpperCase()}${X.slice(1)}`;M.style[X]=`${M[J]}px`},l),[X,l]),H=b.useMemo(()=>Ql(M=>{M.style[X]=null},o),[X,o]),P=b.useMemo(()=>Ql(M=>{M.style[X]=`${j(X,M)}px`,_v(M)},u),[u,j,X]),k=b.useMemo(()=>Ql(M=>{M.style[X]=null},c),[X,c]);return p.jsx(io,{ref:q,addEndListener:Hf,...R,"aria-expanded":R.role?v:null,onEnter:Z,onEntering:A,onEntered:H,onExit:P,onExiting:k,childRef:$i(h),in:v,timeout:m,mountOnEnter:S,unmountOnExit:x,appear:w,children:(M,J)=>Te.cloneElement(h,{...J,className:at(f,h.props.className,A6[M],X==="width"&&"collapse-horizontal")})})});Ov.displayName="Collapse";function j6(a){const l=b.useRef(a);return b.useEffect(()=>{l.current=a},[a]),l}function lo(a){const l=j6(a);return b.useCallback(function(...o){return l.current&&l.current(...o)},[l])}const M6=(a=>b.forwardRef((l,o)=>p.jsx("div",{...l,ref:o,className:at(l.className,a)})));function N6(a){const l=b.useRef(a);return b.useEffect(()=>{l.current=a},[a]),l}function Mn(a){const l=N6(a);return b.useCallback(function(...o){return l.current&&l.current(...o)},[l])}function D6(){const a=b.useRef(!0),l=b.useRef(()=>a.current);return b.useEffect(()=>(a.current=!0,()=>{a.current=!1}),[]),l.current}function L6(a){const l=b.useRef(null);return b.useEffect(()=>{l.current=a}),l.current}const k6=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",U6=typeof document<"u",l1=U6||k6?b.useLayoutEffect:b.useEffect,H6=["as","disabled"];function B6(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}function $6(a){return!a||a.trim()==="#"}function zv({tagName:a,disabled:l,href:o,target:u,rel:c,role:f,onClick:h,tabIndex:y=0,type:v}){a||(o!=null||u!=null||c!=null?a="a":a="button");const m={tagName:a};if(a==="button")return[{type:v||"button",disabled:l},m];const S=w=>{if((l||a==="a"&&$6(o))&&w.preventDefault(),l){w.stopPropagation();return}h?.(w)},x=w=>{w.key===" "&&(w.preventDefault(),S(w))};return a==="a"&&(o||(o="#"),l&&(o=void 0)),[{role:f??"button",disabled:void 0,tabIndex:l?void 0:y,href:o,target:a==="a"?u:void 0,"aria-disabled":l||void 0,rel:a==="a"?c:void 0,onClick:S,onKeyDown:x},m]}const Av=b.forwardRef((a,l)=>{let{as:o,disabled:u}=a,c=B6(a,H6);const[f,{tagName:h}]=zv(Object.assign({tagName:o,disabled:u},c));return p.jsx(h,Object.assign({},c,f,{ref:l}))});Av.displayName="Button";const q6=["onKeyDown"];function Y6(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}function G6(a){return!a||a.trim()==="#"}const jv=b.forwardRef((a,l)=>{let{onKeyDown:o}=a,u=Y6(a,q6);const[c]=zv(Object.assign({tagName:"a"},u)),f=Mn(h=>{c.onKeyDown(h),o?.(h)});return G6(u.href)||u.role==="button"?p.jsx("a",Object.assign({ref:l},u,c,{onKeyDown:f})):p.jsx("a",Object.assign({ref:l},u,{onKeyDown:o}))});jv.displayName="Anchor";const X6={[It]:"show",[jn]:"show"},Mv=b.forwardRef(({className:a,children:l,transitionClasses:o={},onEnter:u,...c},f)=>{const h={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...c},y=b.useCallback((v,m)=>{_v(v),u?.(v,m)},[u]);return p.jsx(io,{ref:f,addEndListener:Hf,...h,onEnter:y,childRef:$i(l),children:(v,m)=>b.cloneElement(l,{...m,className:at("fade",a,l.props.className,X6[v],o[v])})})});Mv.displayName="Fade";const V6={"aria-label":Jc.string,onClick:Jc.func,variant:Jc.oneOf(["white"])},Bf=b.forwardRef(({className:a,variant:l,"aria-label":o="Close",...u},c)=>p.jsx("button",{ref:c,type:"button",className:at("btn-close",l&&`btn-close-${l}`,a),"aria-label":o,...u}));Bf.displayName="CloseButton";Bf.propTypes=V6;const Nv=b.createContext(null);Nv.displayName="CardHeaderContext";const Dv=b.forwardRef(({bsPrefix:a,fluid:l=!1,as:o="div",className:u,...c},f)=>{const h=St(a,"container"),y=typeof l=="string"?`-${l}`:"-fluid";return p.jsx(o,{ref:f,...c,className:at(u,l?`${h}${y}`:h)})});Dv.displayName="Container";var Q6=Function.prototype.bind.call(Function.prototype.call,[].slice);function Da(a,l){return Q6(a.querySelectorAll(l))}function Z6(){const[,a]=b.useReducer(l=>l+1,0);return a}function r1(a,l){if(a.contains)return a.contains(l);if(a.compareDocumentPosition)return a===l||!!(a.compareDocumentPosition(l)&16)}const Ku=b.createContext(null),$f=(a,l=null)=>a!=null?String(a):l||null,qf=b.createContext(null);qf.displayName="NavContext";const K6="data-rr-ui-",J6="rrUi";function ro(a){return`${K6}${a}`}function P6(a){return`${J6}${a}`}const Lv=b.createContext(ao?window:void 0);Lv.Provider;function Yf(){return b.useContext(Lv)}const W6=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",F6=typeof document<"u",I6=F6||W6?b.useLayoutEffect:b.useEffect,qi=b.createContext(null);qi.displayName="NavbarContext";const u1=a=>!a||typeof a=="function"?a:l=>{a.current=l};function e8(a,l){const o=u1(a),u=u1(l);return c=>{o&&o(c),u&&u(c)}}function uo(a,l){return b.useMemo(()=>e8(a,l),[a,l])}const kv=b.createContext(null),t8=["as","active","eventKey"];function n8(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}function Uv({key:a,onClick:l,active:o,id:u,role:c,disabled:f}){const h=b.useContext(Ku),y=b.useContext(qf),v=b.useContext(kv);let m=o;const S={role:c};if(y){!c&&y.role==="tablist"&&(S.role="tab");const x=y.getControllerId(a??null),w=y.getControlledId(a??null);S[ro("event-key")]=a,S.id=x||u,m=o==null&&a!=null?y.activeKey===a:o,(m||!(v!=null&&v.unmountOnExit)&&!(v!=null&&v.mountOnEnter))&&(S["aria-controls"]=w)}return S.role==="tab"&&(S["aria-selected"]=m,m||(S.tabIndex=-1),f&&(S.tabIndex=-1,S["aria-disabled"]=!0)),S.onClick=Mn(x=>{f||(l?.(x),a!=null&&h&&!x.isPropagationStopped()&&h(a,x))}),[S,{isActive:m}]}const Hv=b.forwardRef((a,l)=>{let{as:o=Av,active:u,eventKey:c}=a,f=n8(a,t8);const[h,y]=Uv(Object.assign({key:$f(c,f.href),active:u},f));return h[ro("active")]=y.isActive,p.jsx(o,Object.assign({},f,h,{ref:l}))});Hv.displayName="NavItem";const a8=["as","onSelect","activeKey","role","onKeyDown"];function i8(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}const o1=()=>{},s1=ro("event-key"),Bv=b.forwardRef((a,l)=>{let{as:o="div",onSelect:u,activeKey:c,role:f,onKeyDown:h}=a,y=i8(a,a8);const v=Z6(),m=b.useRef(!1),S=b.useContext(Ku),x=b.useContext(kv);let w,j;x&&(f=f||"tablist",c=x.activeKey,w=x.getControlledId,j=x.getControllerId);const R=b.useRef(null),q=H=>{const P=R.current;if(!P)return null;const k=Da(P,`[${s1}]:not([aria-disabled=true])`),M=P.querySelector("[aria-selected=true]");if(!M||M!==document.activeElement)return null;const J=k.indexOf(M);if(J===-1)return null;let L=J+H;return L>=k.length&&(L=0),L<0&&(L=k.length-1),k[L]},X=(H,P)=>{H!=null&&(u?.(H,P),S?.(H,P))},Z=H=>{if(h?.(H),!x)return;let P;switch(H.key){case"ArrowLeft":case"ArrowUp":P=q(-1);break;case"ArrowRight":case"ArrowDown":P=q(1);break;default:return}P&&(H.preventDefault(),X(P.dataset[P6("EventKey")]||null,H),m.current=!0,v())};b.useEffect(()=>{if(R.current&&m.current){const H=R.current.querySelector(`[${s1}][aria-selected=true]`);H?.focus()}m.current=!1});const A=uo(l,R);return p.jsx(Ku.Provider,{value:X,children:p.jsx(qf.Provider,{value:{role:f,activeKey:$f(c),getControlledId:w||o1,getControllerId:j||o1},children:p.jsx(o,Object.assign({},y,{onKeyDown:Z,ref:A,role:f}))})})});Bv.displayName="Nav";const l8=Object.assign(Bv,{Item:Hv});function Wc(a){a===void 0&&(a=Uf());try{var l=a.activeElement;return!l||!l.nodeName?null:l}catch{return a.body}}function r8(a){const l=b.useRef(a);return l.current=a,l}function u8(a){const l=r8(a);b.useEffect(()=>()=>l.current(),[])}function o8(a=document){const l=a.defaultView;return Math.abs(l.innerWidth-a.documentElement.clientWidth)}const c1=ro("modal-open");class Gf{constructor({ownerDocument:l,handleContainerOverflow:o=!0,isRTL:u=!1}={}){this.handleContainerOverflow=o,this.isRTL=u,this.modals=[],this.ownerDocument=l}getScrollbarWidth(){return o8(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(l){}removeModalAttributes(l){}setContainerStyle(l){const o={overflow:"hidden"},u=this.isRTL?"paddingLeft":"paddingRight",c=this.getElement();l.style={overflow:c.style.overflow,[u]:c.style[u]},l.scrollBarWidth&&(o[u]=`${parseInt(Dn(c,u)||"0",10)+l.scrollBarWidth}px`),c.setAttribute(c1,""),Dn(c,o)}reset(){[...this.modals].forEach(l=>this.remove(l))}removeContainerStyle(l){const o=this.getElement();o.removeAttribute(c1),Object.assign(o.style,l.style)}add(l){let o=this.modals.indexOf(l);return o!==-1||(o=this.modals.length,this.modals.push(l),this.setModalAttributes(l),o!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),o}remove(l){const o=this.modals.indexOf(l);o!==-1&&(this.modals.splice(o,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(l))}isTopModal(l){return!!this.modals.length&&this.modals[this.modals.length-1]===l}}const Fc=(a,l)=>ao?a==null?(l||Uf()).body:(typeof a=="function"&&(a=a()),a&&"current"in a&&(a=a.current),a&&("nodeType"in a||a.getBoundingClientRect)?a:null):null;function s8(a,l){const o=Yf(),[u,c]=b.useState(()=>Fc(a,o?.document));if(!u){const f=Fc(a);f&&c(f)}return b.useEffect(()=>{},[l,u]),b.useEffect(()=>{const f=Fc(a);f!==u&&c(f)},[a,u]),u}function c8({children:a,in:l,onExited:o,mountOnEnter:u,unmountOnExit:c}){const f=b.useRef(null),h=b.useRef(l),y=Mn(o);b.useEffect(()=>{l?h.current=!0:y(f.current)},[l,y]);const v=uo(f,$i(a)),m=b.cloneElement(a,{ref:v});return l?m:c||!h.current&&u?null:m}const f8=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function d8(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}function h8(a){let{onEnter:l,onEntering:o,onEntered:u,onExit:c,onExiting:f,onExited:h,addEndListener:y,children:v}=a,m=d8(a,f8);const S=b.useRef(null),x=uo(S,$i(v)),w=P=>k=>{P&&S.current&&P(S.current,k)},j=b.useCallback(w(l),[l]),R=b.useCallback(w(o),[o]),q=b.useCallback(w(u),[u]),X=b.useCallback(w(c),[c]),Z=b.useCallback(w(f),[f]),A=b.useCallback(w(h),[h]),H=b.useCallback(w(y),[y]);return Object.assign({},m,{nodeRef:S},l&&{onEnter:j},o&&{onEntering:R},u&&{onEntered:q},c&&{onExit:X},f&&{onExiting:Z},h&&{onExited:A},y&&{addEndListener:H},{children:typeof v=="function"?(P,k)=>v(P,Object.assign({},k,{ref:x})):b.cloneElement(v,{ref:x})})}const p8=["component"];function m8(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}const v8=b.forwardRef((a,l)=>{let{component:o}=a,u=m8(a,p8);const c=h8(u);return p.jsx(o,Object.assign({ref:l},c))});function g8({in:a,onTransition:l}){const o=b.useRef(null),u=b.useRef(!0),c=Mn(l);return l1(()=>{if(!o.current)return;let f=!1;return c({in:a,element:o.current,initial:u.current,isStale:()=>f}),()=>{f=!0}},[a,c]),l1(()=>(u.current=!1,()=>{u.current=!0}),[]),o}function y8({children:a,in:l,onExited:o,onEntered:u,transition:c}){const[f,h]=b.useState(!l);l&&f&&h(!1);const y=g8({in:!!l,onTransition:m=>{const S=()=>{m.isStale()||(m.in?u?.(m.element,m.initial):(h(!0),o?.(m.element)))};Promise.resolve(c(m)).then(S,x=>{throw m.in||h(!0),x})}}),v=uo(y,$i(a));return f&&!l?null:b.cloneElement(a,{ref:v})}function f1(a,l,o){return a?p.jsx(v8,Object.assign({},o,{component:a})):l?p.jsx(y8,Object.assign({},o,{transition:l})):p.jsx(c8,Object.assign({},o))}const b8=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function x8(a,l){if(a==null)return{};var o={};for(var u in a)if({}.hasOwnProperty.call(a,u)){if(l.indexOf(u)>=0)continue;o[u]=a[u]}return o}let Ic;function S8(a){return Ic||(Ic=new Gf({ownerDocument:a?.document})),Ic}function w8(a){const l=Yf(),o=a||S8(l),u=b.useRef({dialog:null,backdrop:null});return Object.assign(u.current,{add:()=>o.add(u.current),remove:()=>o.remove(u.current),isTopModal:()=>o.isTopModal(u.current),setDialogRef:b.useCallback(c=>{u.current.dialog=c},[]),setBackdropRef:b.useCallback(c=>{u.current.backdrop=c},[])})}const $v=b.forwardRef((a,l)=>{let{show:o=!1,role:u="dialog",className:c,style:f,children:h,backdrop:y=!0,keyboard:v=!0,onBackdropClick:m,onEscapeKeyDown:S,transition:x,runTransition:w,backdropTransition:j,runBackdropTransition:R,autoFocus:q=!0,enforceFocus:X=!0,restoreFocus:Z=!0,restoreFocusOptions:A,renderDialog:H,renderBackdrop:P=He=>p.jsx("div",Object.assign({},He)),manager:k,container:M,onShow:J,onHide:L=()=>{},onExit:G,onExited:le,onExiting:K,onEnter:D,onEntering:ee,onEntered:ne}=a,C=x8(a,b8);const z=Yf(),$=s8(M),W=w8(k),re=D6(),ce=L6(o),[T,V]=b.useState(!o),ie=b.useRef(null);b.useImperativeHandle(l,()=>W,[W]),ao&&!ce&&o&&(ie.current=Wc(z?.document)),o&&T&&V(!1);const ae=Mn(()=>{if(W.add(),wt.current=Zu(document,"keydown",Ue),Ce.current=Zu(document,"focus",()=>setTimeout(he),!0),J&&J(),q){var He,Ba;const Yi=Wc((He=(Ba=W.dialog)==null?void 0:Ba.ownerDocument)!=null?He:z?.document);W.dialog&&Yi&&!r1(W.dialog,Yi)&&(ie.current=Yi,W.dialog.focus())}}),se=Mn(()=>{if(W.remove(),wt.current==null||wt.current(),Ce.current==null||Ce.current(),Z){var He;(He=ie.current)==null||He.focus==null||He.focus(A),ie.current=null}});b.useEffect(()=>{!o||!$||ae()},[o,$,ae]),b.useEffect(()=>{T&&se()},[T,se]),u8(()=>{se()});const he=Mn(()=>{if(!X||!re()||!W.isTopModal())return;const He=Wc(z?.document);W.dialog&&He&&!r1(W.dialog,He)&&W.dialog.focus()}),ye=Mn(He=>{He.target===He.currentTarget&&(m?.(He),y===!0&&L())}),Ue=Mn(He=>{v&&g6(He)&&W.isTopModal()&&(S?.(He),He.defaultPrevented||L())}),Ce=b.useRef(),wt=b.useRef(),Kt=(...He)=>{V(!0),le?.(...He)};if(!$)return null;const dt=Object.assign({role:u,ref:W.setDialogRef,"aria-modal":u==="dialog"?!0:void 0},C,{style:f,className:c,tabIndex:-1});let Ha=H?H(dt):p.jsx("div",Object.assign({},dt,{children:b.cloneElement(h,{role:"document"})}));Ha=f1(x,w,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!o,onExit:G,onExiting:K,onExited:Kt,onEnter:D,onEntering:ee,onEntered:ne,children:Ha});let kt=null;return y&&(kt=P({ref:W.setBackdropRef,onClick:ye}),kt=f1(j,R,{in:!!o,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:kt})),p.jsx(p.Fragment,{children:Oi.createPortal(p.jsxs(p.Fragment,{children:[kt,Ha]}),$)})});$v.displayName="Modal";const E8=Object.assign($v,{Manager:Gf});function T8(a,l){return a.classList?a.classList.contains(l):(" "+(a.className.baseVal||a.className)+" ").indexOf(" "+l+" ")!==-1}function C8(a,l){a.classList?a.classList.add(l):T8(a,l)||(typeof a.className=="string"?a.className=a.className+" "+l:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+l))}function d1(a,l){return a.replace(new RegExp("(^|\\s)"+l+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function R8(a,l){a.classList?a.classList.remove(l):typeof a.className=="string"?a.className=d1(a.className,l):a.setAttribute("class",d1(a.className&&a.className.baseVal||"",l))}const Ri={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class qv extends Gf{adjustAndStore(l,o,u){const c=o.style[l];o.dataset[l]=c,Dn(o,{[l]:`${parseFloat(Dn(o,l))+u}px`})}restore(l,o){const u=o.dataset[l];u!==void 0&&(delete o.dataset[l],Dn(o,{[l]:u}))}setContainerStyle(l){super.setContainerStyle(l);const o=this.getElement();if(C8(o,"modal-open"),!l.scrollBarWidth)return;const u=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";Da(o,Ri.FIXED_CONTENT).forEach(f=>this.adjustAndStore(u,f,l.scrollBarWidth)),Da(o,Ri.STICKY_CONTENT).forEach(f=>this.adjustAndStore(c,f,-l.scrollBarWidth)),Da(o,Ri.NAVBAR_TOGGLER).forEach(f=>this.adjustAndStore(c,f,l.scrollBarWidth))}removeContainerStyle(l){super.removeContainerStyle(l);const o=this.getElement();R8(o,"modal-open");const u=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";Da(o,Ri.FIXED_CONTENT).forEach(f=>this.restore(u,f)),Da(o,Ri.STICKY_CONTENT).forEach(f=>this.restore(c,f)),Da(o,Ri.NAVBAR_TOGGLER).forEach(f=>this.restore(c,f))}}let ef;function _8(a){return ef||(ef=new qv(a)),ef}const Yv=b.createContext({onHide(){}}),Gv=b.forwardRef(({closeLabel:a="Close",closeVariant:l,closeButton:o=!1,onHide:u,children:c,...f},h)=>{const y=b.useContext(Yv),v=lo(()=>{y?.onHide(),u?.()});return p.jsxs("div",{ref:h,...f,children:[c,o&&p.jsx(Bf,{"aria-label":a,variant:l,onClick:v})]})});Gv.displayName="AbstractModalHeader";const Xv=b.forwardRef(({className:a,bsPrefix:l,as:o="div",...u},c)=>(l=St(l,"nav-item"),p.jsx(o,{ref:c,className:at(a,l),...u})));Xv.displayName="NavItem";const Vv=b.forwardRef(({bsPrefix:a,className:l,as:o=jv,active:u,eventKey:c,disabled:f=!1,...h},y)=>{a=St(a,"nav-link");const[v,m]=Uv({key:$f(c,h.href),active:u,disabled:f,...h});return p.jsx(o,{...h,...v,ref:y,disabled:f,className:at(l,a,f&&"disabled",m.isActive&&"active")})});Vv.displayName="NavLink";const Qv=b.forwardRef((a,l)=>{const{as:o="div",bsPrefix:u,variant:c,fill:f=!1,justify:h=!1,navbar:y,navbarScroll:v,className:m,activeKey:S,...x}=Tv(a,{activeKey:"onSelect"}),w=St(u,"nav");let j,R,q=!1;const X=b.useContext(qi),Z=b.useContext(Nv);return X?(j=X.bsPrefix,q=y??!0):Z&&({cardHeaderBsPrefix:R}=Z),p.jsx(l8,{as:o,ref:l,activeKey:S,className:at(m,{[w]:!q,[`${j}-nav`]:q,[`${j}-nav-scroll`]:q&&v,[`${R}-${c}`]:!!R,[`${w}-${c}`]:!!c,[`${w}-fill`]:f,[`${w}-justified`]:h}),...x})});Qv.displayName="Nav";const O8=Object.assign(Qv,{Item:Xv,Link:Vv}),Zv=b.forwardRef(({bsPrefix:a,className:l,as:o,...u},c)=>{a=St(a,"navbar-brand");const f=o||(u.href?"a":"span");return p.jsx(f,{...u,ref:c,className:at(l,a)})});Zv.displayName="NavbarBrand";const Kv=b.forwardRef(({children:a,bsPrefix:l,...o},u)=>{l=St(l,"navbar-collapse");const c=b.useContext(qi);return p.jsx(Ov,{in:!!(c&&c.expanded),...o,children:p.jsx("div",{ref:u,className:l,children:a})})});Kv.displayName="NavbarCollapse";const Jv=b.forwardRef(({bsPrefix:a,className:l,children:o,label:u="Toggle navigation",as:c="button",onClick:f,...h},y)=>{a=St(a,"navbar-toggler");const{onToggle:v,expanded:m}=b.useContext(qi)||{},S=lo(x=>{f&&f(x),v&&v()});return c==="button"&&(h.type="button"),p.jsx(c,{...h,ref:y,onClick:S,"aria-label":u,className:at(l,a,!m&&"collapsed"),children:o||p.jsx("span",{className:`${a}-icon`})})});Jv.displayName="NavbarToggle";const xf=new WeakMap,h1=(a,l)=>{if(!a||!l)return;const o=xf.get(l)||new Map;xf.set(l,o);let u=o.get(a);return u||(u=l.matchMedia(a),u.refCount=0,o.set(u.media,u)),u};function z8(a,l=typeof window>"u"?void 0:window){const o=h1(a,l),[u,c]=b.useState(()=>o?o.matches:!1);return I6(()=>{let f=h1(a,l);if(!f)return c(!1);let h=xf.get(l);const y=()=>{c(f.matches)};return f.refCount++,f.addListener(y),y(),()=>{f.removeListener(y),f.refCount--,f.refCount<=0&&h?.delete(f.media),f=void 0}},[a]),u}function A8(a){const l=Object.keys(a);function o(y,v){return y===v?v:y?`${y} and ${v}`:v}function u(y){return l[Math.min(l.indexOf(y)+1,l.length-1)]}function c(y){const v=u(y);let m=a[v];return typeof m=="number"?m=`${m-.2}px`:m=`calc(${m} - 0.2px)`,`(max-width: ${m})`}function f(y){let v=a[y];return typeof v=="number"&&(v=`${v}px`),`(min-width: ${v})`}function h(y,v,m){let S;typeof y=="object"?(S=y,m=v,v=!0):(v=v||!0,S={[y]:v});let x=b.useMemo(()=>Object.entries(S).reduce((w,[j,R])=>((R==="up"||R===!0)&&(w=o(w,f(j))),(R==="down"||R===!0)&&(w=o(w,c(j))),w),""),[JSON.stringify(S)]);return z8(x,m)}return h}const j8=A8({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),Pv=b.forwardRef(({className:a,bsPrefix:l,as:o="div",...u},c)=>(l=St(l,"offcanvas-body"),p.jsx(o,{ref:c,className:at(a,l),...u})));Pv.displayName="OffcanvasBody";const M8={[It]:"show",[jn]:"show"},Wv=b.forwardRef(({bsPrefix:a,className:l,children:o,in:u=!1,mountOnEnter:c=!1,unmountOnExit:f=!1,appear:h=!1,...y},v)=>(a=St(a,"offcanvas"),p.jsx(io,{ref:v,addEndListener:Hf,in:u,mountOnEnter:c,unmountOnExit:f,appear:h,...y,childRef:$i(o),children:(m,S)=>b.cloneElement(o,{...S,className:at(l,o.props.className,(m===It||m===er)&&`${a}-toggling`,M8[m])})})));Wv.displayName="OffcanvasToggling";const Fv=b.forwardRef(({bsPrefix:a,className:l,closeLabel:o="Close",closeButton:u=!1,...c},f)=>(a=St(a,"offcanvas-header"),p.jsx(Gv,{ref:f,...c,className:at(l,a),closeLabel:o,closeButton:u})));Fv.displayName="OffcanvasHeader";const N8=M6("h5"),Iv=b.forwardRef(({className:a,bsPrefix:l,as:o=N8,...u},c)=>(l=St(l,"offcanvas-title"),p.jsx(o,{ref:c,className:at(a,l),...u})));Iv.displayName="OffcanvasTitle";function D8(a){return p.jsx(Wv,{...a})}function L8(a){return p.jsx(Mv,{...a})}const eg=b.forwardRef(({bsPrefix:a,className:l,children:o,"aria-labelledby":u,placement:c="start",responsive:f,show:h=!1,backdrop:y=!0,keyboard:v=!0,scroll:m=!1,onEscapeKeyDown:S,onShow:x,onHide:w,container:j,autoFocus:R=!0,enforceFocus:q=!0,restoreFocus:X=!0,restoreFocusOptions:Z,onEntered:A,onExit:H,onExiting:P,onEnter:k,onEntering:M,onExited:J,backdropClassName:L,manager:G,renderStaticNode:le=!1,...K},D)=>{const ee=b.useRef();a=St(a,"offcanvas");const[ne,C]=b.useState(!1),z=lo(w),$=j8(f||"xs","up");b.useEffect(()=>{C(f?h&&!$:h)},[h,f,$]);const W=b.useMemo(()=>({onHide:z}),[z]);function re(){return G||(m?(ee.current||(ee.current=new qv({handleContainerOverflow:!1})),ee.current):_8())}const ce=(ae,...se)=>{ae&&(ae.style.visibility="visible"),k?.(ae,...se)},T=(ae,...se)=>{ae&&(ae.style.visibility=""),J?.(...se)},V=b.useCallback(ae=>p.jsx("div",{...ae,className:at(`${a}-backdrop`,L)}),[L,a]),ie=ae=>p.jsx("div",{...ae,...K,className:at(l,f?`${a}-${f}`:a,`${a}-${c}`),"aria-labelledby":u,children:o});return p.jsxs(p.Fragment,{children:[!ne&&(f||le)&&ie({}),p.jsx(Yv.Provider,{value:W,children:p.jsx(E8,{show:ne,ref:D,backdrop:y,container:j,keyboard:v,autoFocus:R,enforceFocus:q&&!m,restoreFocus:X,restoreFocusOptions:Z,onEscapeKeyDown:S,onShow:x,onHide:z,onEnter:ce,onEntering:M,onEntered:A,onExit:H,onExiting:P,onExited:T,manager:re(),transition:D8,backdropTransition:L8,renderBackdrop:V,renderDialog:ie})})]})});eg.displayName="Offcanvas";const k8=Object.assign(eg,{Body:Pv,Header:Fv,Title:Iv}),tg=b.forwardRef(({onHide:a,...l},o)=>{const u=b.useContext(qi),c=lo(()=>{u==null||u.onToggle==null||u.onToggle(),a?.()});return p.jsx(k8,{ref:o,show:!!(u!=null&&u.expanded),...l,renderStaticNode:!0,onHide:c})});tg.displayName="NavbarOffcanvas";const ng=b.forwardRef(({className:a,bsPrefix:l,as:o="span",...u},c)=>(l=St(l,"navbar-text"),p.jsx(o,{ref:c,className:at(a,l),...u})));ng.displayName="NavbarText";const ag=b.forwardRef((a,l)=>{const{bsPrefix:o,expand:u=!0,variant:c="light",bg:f,fixed:h,sticky:y,className:v,as:m="nav",expanded:S,onToggle:x,onSelect:w,collapseOnSelect:j=!1,...R}=Tv(a,{expanded:"onToggle"}),q=St(o,"navbar"),X=b.useCallback((...H)=>{w?.(...H),j&&S&&x?.(!1)},[w,j,S,x]);R.role===void 0&&m!=="nav"&&(R.role="navigation");let Z=`${q}-expand`;typeof u=="string"&&(Z=`${Z}-${u}`);const A=b.useMemo(()=>({onToggle:()=>x?.(!S),bsPrefix:q,expanded:!!S,expand:u}),[q,S,u,x]);return p.jsx(qi.Provider,{value:A,children:p.jsx(Ku.Provider,{value:X,children:p.jsx(m,{ref:l,...R,className:at(v,q,u&&Z,c&&`${q}-${c}`,f&&`bg-${f}`,y&&`sticky-${y}`,h&&`fixed-${h}`)})})})});ag.displayName="Navbar";const U8=Object.assign(ag,{Brand:Zv,Collapse:Kv,Offcanvas:tg,Text:ng,Toggle:Jv});function H8(a){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M149.688 85.625c-1.234.005-2.465.033-3.72.063-33.913.806-75.48 10.704-127.25 33.718V362.78c60.77-28.82 106.718-37.067 144.22-33.092 33.502 3.55 59.685 16.66 83.562 31.187v-242.97c-23.217-17.744-50.195-30.04-85.97-32-3.52-.192-7.142-.296-10.843-.28zm211.968 0c-3.7-.016-7.322.088-10.844.28-35.773 1.96-62.75 14.256-85.968 32v242.97c23.876-14.527 50.06-27.637 83.562-31.188 37.502-3.974 83.45 4.272 144.22 33.094V119.407c-51.77-23.014-93.337-32.912-127.25-33.72-1.255-.028-2.486-.056-3.72-.06zm5.72 261.78c-1.038-.002-2.074.017-3.095.033-4.808.075-9.43.37-13.905.843-33.932 3.597-59.603 17.976-85.53 34.44v.28c-6.554-1.99-13.02-2.37-19.408-.97-25.566-16.177-51.003-30.202-84.468-33.75-5.595-.592-11.44-.883-17.564-.842-32.04.213-71.833 9.778-124.687 35.937v42.53c60.77-28.823 106.714-37.067 144.218-33.092 18.545 1.965 34.837 6.845 49.75 13.28-4.682 6.064-9.308 13.268-13.875 21.688h117.156c-5.93-8.22-11.798-15.414-17.626-21.56 14.996-6.503 31.39-11.43 50.062-13.408 37.503-3.974 83.448 4.27 144.22 33.094v-42.53c-53.16-26.31-93.115-35.863-125.25-35.97z"},child:[]}]})(a)}function B8(a){return ke({attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",fill:"currentColor"},child:[]}]})(a)}const $8=O(U8)`
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
`,q8=O.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 8px;
`,Y8=O.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,G8=O.div`
  justify-self: center;
`,X8=O.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`,V8=O.button`
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
`,Q8=O(Hi)`
  padding: 10px 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px; /* space between icon and text */
`,Z8=O(H8)`
  width: 28px;
  height: 28px;
  flex: 0 0 28px;
  color: #f0703c /* keep high contrast; adjust to your brand */
`,K8=O.div`
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
`;function J8(){const a=()=>{console.log("Toggled theme")};return p.jsx("div",{className:"topbar-wrapper",children:p.jsx($8,{className:"shadow-sm d-lg-none",children:p.jsx(Dv,{fluid:!0,className:"px-3",children:p.jsxs(q8,{children:[p.jsx(Y8,{children:p.jsxs(Q8,{to:"/instalearn/","aria-label":"Go to home",children:[p.jsx(Z8,{"aria-hidden":"true"}),p.jsx(K8,{children:"InstaLearn"})]})}),p.jsx(G8,{}),p.jsx(X8,{children:p.jsx(V8,{type:"button",onClick:a,"aria-label":"Toggle",children:p.jsx(B8,{size:20})})})]})})})})}const P8=fn`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,W8=O.aside`
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
`,F8=O(Hi)`
  padding: 25px 12px 16px 12px;
  margin-bottom: 19px;
  margin-left: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: padding 200ms ease, margin 200ms ease;
`,I8=O.div`
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
`,ew=O.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
`,tw=ha`
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
    animation: ${P8} 4s linear infinite;
    box-shadow: 0 0 8px rgba(0, 245, 255, 0.8);
  }
`,tf=O(Hi)`
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

  ${a=>a.$active&&tw}
`,nw=O.div`
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px solid #dbdbdb;
`,nf=O.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,af=O.span`
  white-space: nowrap;
  transition: opacity 120ms ease, width 200ms ease;
`;function aw(){const{pathname:a}=Un(),l=[{to:"/instalearn/",icon:p.jsx(sv,{}),label:"Home"},{to:"/instalearn/teacher",icon:p.jsx(wv,{}),label:"Teacher"},{to:"/instalearn/library",icon:p.jsx(ov,{}),label:"Library",hasNotification:!0},{to:"/instalearn/notifications",icon:p.jsx(y5,{}),label:"Notifications"},{to:"/instalearn/profile",icon:p.jsx(fv,{}),label:"Profile"}];return p.jsxs(W8,{children:[p.jsx(F8,{to:"/instalearn/",children:p.jsx(I8,{children:"InstaLearn"})}),p.jsxs(ew,{children:[l.slice(0,-1).map(o=>p.jsxs(tf,{to:o.to,$active:a===o.to,children:[p.jsx(nf,{children:o.icon}),p.jsx(af,{children:o.label}),o.hasNotification]},o.to)),p.jsxs(tf,{to:l[l.length-1].to,$active:a===l[l.length-1].to,children:[p.jsx(nf,{children:l[l.length-1].icon}),p.jsx(af,{children:l[l.length-1].label})]})]}),p.jsx(nw,{children:p.jsxs(tf,{to:"/instalearn/more",$active:a==="/instalearn/more",children:[p.jsx(nf,{children:p.jsx(b5,{})}),p.jsx(af,{children:"More"})]})})]})}const iw=O.div`
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
`,lw=O.div`
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
`,ig=O.div`
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
`,rw=O.div`
  position: relative;
  flex-shrink: 0;
`,uw=O.div`
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
  
  ${ig}:hover & {
    transform: scale(1.05);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }
`,ow=O.div`
  position: absolute;
  bottom: ${a=>a.$width<250?"2px":"4px"};
  right: ${a=>a.$width<250?"0":"2px"};
  width: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  height: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
`,sw=O.div`
  flex: 1;
  min-width: 0;
  display: ${a=>a.$width<180?"none":"block"};
`,cw=O.div`
  font-size: ${a=>a.$width<250?"13px":"14px"};
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,fw=O.div`
  font-size: ${a=>a.$width<250?"11px":"13px"};
  color: #6b7280;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,dw=O.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,hw=O.div`
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
`,pw=O.button`
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
`,mw=O.div`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.$width<250?"8px":"12px"};
  margin-bottom: 32px;
`,lg=O.div`
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
`,vw=O.div`
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
  
  ${lg}:hover & {
    transform: scale(1.05) rotate(5deg);
  }
`,gw=O.div`
  display: flex;
  flex-direction: ${a=>a.$width<200?"column":a.$width<250?"row":"column"};
  align-items: ${a=>a.$width>=200&&a.$width<250?"center":"stretch"};
  flex: 1;
`,yw=O.div`
  flex: 1;
`,bw=O.h4`
  font-size: ${a=>a.$width<250?"12px":"13px"};
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 ${a=>a.$width<250?"2px":"4px"} 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,xw=O.p`
  font-size: ${a=>a.$width<250?"10px":"12px"};
  color: #6b7280;
  margin: 0;
  display: ${a=>a.$width<180?"none":"-webkit-box"};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
`,Sw=O.span`
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
`;const ww=({sidebarWidth:a=360})=>{const l={username:"demo_user",name:"Demo User",initials:"DU"},o=[{icon:xm,gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",title:"New Feature: Dark Mode",description:"Enable dark mode for a better night-time experience.",badge:"New",badgeBg:"linear-gradient(135deg, #667eea, #764ba2)"},{icon:x5,gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",title:"Product Tip: Quick Search",description:"Use the search bar to find items faster.",badge:"Tip",badgeBg:"linear-gradient(135deg, #f093fb, #f5576c)"},{icon:g5,gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",title:"Update: Version 2.0",description:"Check out the latest improvements and bug fixes.",badge:"Update",badgeBg:"linear-gradient(135deg, #4facfe, #00f2fe)"}];return p.jsxs(iw,{children:[p.jsx(lw,{children:p.jsxs(ig,{$width:a,children:[p.jsxs(rw,{children:[p.jsx(uw,{$width:a,children:l.initials}),p.jsx(ow,{$width:a})]}),p.jsxs(sw,{$width:a,children:[p.jsx(cw,{$width:a,children:l.username}),p.jsx(fw,{$width:a,children:l.name})]})]})}),p.jsxs(dw,{children:[p.jsxs(hw,{$width:a,$iconColor:"#667eea",children:[p.jsx(xm,{}),p.jsx("span",{children:"Highlights"})]}),p.jsx(pw,{$width:a,children:"See All"})]}),p.jsx(mw,{$width:a,children:o.map((u,c)=>{const f=u.icon;return p.jsxs(lg,{$width:a,$glowColor:u.gradient,children:[p.jsx(Sw,{$width:a,$bg:u.badgeBg,children:u.badge}),p.jsxs(gw,{$width:a,children:[p.jsx(vw,{$width:a,$gradient:u.gradient,children:p.jsx(f,{})}),p.jsxs(yw,{children:[p.jsx(bw,{$width:a,children:u.title}),p.jsx(xw,{$width:a,children:u.description})]})]})]},c)})})]})};function Ew(){const{pathname:a}=Un(),l=[["/instalearn/",p.jsx(sv,{})],["/instalearn/teacher",p.jsx(wv,{})],["/instalearn/library",p.jsx(ov,{})],["/instalearn/profile",p.jsx(fv,{})]];return p.jsxs(p.Fragment,{children:[p.jsx("style",{children:`
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
      `}),p.jsx(O8,{className:"bottom-nav fixed-bottom d-flex justify-content-around py-2 d-lg-none",children:l.map(([o,u])=>p.jsx(Hi,{to:o,className:`nav-link fs-4 text-white ${a===o?"active":""}`,children:u},o))})]})}const Tw={name:"Priya Sharma",subject:"Mathematics Teacher",bio:"Making math fun & easy ✨ | Class 6-12 | CBSE Expert",avatar:"https://i.pravatar.cc/150?img=12",posts:247,students:"1.2K",books:15,experience:8,bookList:[{title:"Algebra"},{title:"Geometry"},{title:"Calculus"},{title:"Stats"},{title:"Trigno"},{title:"Number Theory"}]},Dt=Tw,Cw=O.div`
  max-width: 1120px;
  margin: 0 auto;
  background: #fff;
  min-height: 100vh;
`,Rw=O.div`
  padding: 1rem 1.5rem;
  @media (min-width: 768px) {
    padding: 1.5rem 2rem;
  }
  @media (min-width: 1024px) {
    padding: 2rem 3rem;
  }
`,_w=O.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,Ow=O.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,zw=O.div`
  position: relative;
`,Aw=O.img`
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
`,jw=O.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  text-align: center;

  @media (min-width: 768px) {
    display: none;
  }
`,Mw=O.div`
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
`,Nw=O.div`
  flex: 1;
`,Dw=O.div`
  font-weight: 600;
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`,Lw=O.div`
  font-size: 0.875rem;
  color: #6b7280;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,kw=O.div`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,Uw=O.div`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  color: #6b7280;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,Hw=O.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,Bw=O.button`
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
`,$w=O.button`
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
`,qw=O.button`
  border: 1px solid #d1d5db;
  padding: 0.25rem 1rem;
  border-radius: 0.5rem;
`,Yw=O.div`
  margin-bottom: 1.5rem;
`,Gw=O.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
`,Xw=O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: fit-content;
  cursor: pointer;
`,Vw=O.div`
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
`,Qw=O.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 0.25rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`,Zw=O.div`
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
`,Kw=O.div`
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
`,Jw=O.div`
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
`,Pw=O.div`
  aspect-ratio: 1 / 1;
  background: #f3f4f6;
  display: flex;
  justify-content: center;
  align-items: center;
`;function Ww(){b.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]);const a=wf(),l=o=>{o===0&&a("/instalearn/library")};return p.jsxs(Cw,{children:[p.jsxs(Rw,{children:[p.jsxs(_w,{children:[p.jsxs(Ow,{children:[p.jsx(zw,{children:p.jsx(Aw,{src:Dt.avatar,alt:Dt.name})}),p.jsxs(jw,{children:[p.jsxs(_i,{children:[Dt.posts," ",p.jsx("span",{children:"posts"})]}),p.jsxs(_i,{children:[Dt.students," ",p.jsx("span",{children:"students"})]}),p.jsxs(_i,{children:[Dt.books," ",p.jsx("span",{children:"books"})]})]})]}),p.jsxs(Nw,{children:[p.jsxs(Mw,{children:[p.jsxs(_i,{children:[Dt.posts," ",p.jsx("span",{children:"posts"})]}),p.jsxs(_i,{children:[Dt.students," ",p.jsx("span",{children:"students"})]}),p.jsxs(_i,{children:[Dt.books," ",p.jsx("span",{children:"books"})]})]}),p.jsx(Dw,{children:Dt.name}),p.jsx(Lw,{children:Dt.subject}),p.jsx(kw,{children:Dt.bio}),p.jsxs(Uw,{children:["🎓 ",Dt.experience," years experience"]}),p.jsxs(Hw,{children:[p.jsx(Bw,{children:"Follow"}),p.jsx($w,{children:"Message"}),p.jsx(qw,{children:"▼"})]})]})]}),p.jsx(Yw,{children:p.jsx(Gw,{children:Dt.bookList.map((o,u)=>p.jsxs(Xw,{onClick:()=>l(u),children:[p.jsx(Vw,{children:p.jsx(Qw,{children:p.jsx(Wl,{size:24})})}),p.jsx(Zw,{children:o.title})]},u))})})]}),p.jsxs(Kw,{children:[p.jsx(p1,{active:!0,children:p.jsx(qS,{size:20})}),p.jsx(p1,{children:p.jsx(US,{size:20})})]}),p.jsx(Jw,{children:Array(9).fill(null).map((o,u)=>p.jsx(Pw,{children:p.jsx(Wl,{size:24})},u))})]})}const Fw=O.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--color-light, #f5f5f5);
`,Iw=O.aside`
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
`,eE=O.div`
  flex: 1;
  display: flex;
  width: 100%;

  @media (min-width: 1024px) {
    /* match LeftSidebar width exactly to avoid layout jump */
    margin-left: 246px;
  }
`,tE=O.main`
  flex: 1;
  width: 100%;
  padding-bottom: 60px;
  transition: ${a=>a.$isResizing?"none":"margin-right 0.2s ease"};
  will-change: margin-right;

  @media (min-width: 1024px) {
    padding-bottom: 0;
    margin-right: ${a=>`${a.$sidebarWidth}px`};
  }
`,nE=O.aside`
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
`,aE=O.div`
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
`,iE=O.div`
  display: block;
  margin-bottom: 60px;

  @media (min-width: 1024px) {
    display: none;
  }
`,lE=O.div`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (min-width: 1024px) {
    display: none;
  }
`;function rE(){const[a,l]=b.useState(360),[o,u]=b.useState(!1),c=b.useRef(null),f=350,h=600,y=v=>{v.preventDefault(),u(!0),c.current={startX:v.clientX,startWidth:a}};return b.useEffect(()=>{const v=(x,w,j)=>Math.min(Math.max(x,w),j),m=x=>{if(!o||!c.current)return;const{startX:w,startWidth:j}=c.current,R=w-x.clientX,q=v(j+R,f,h);l(q)},S=()=>{o&&(u(!1),c.current=null)};return o&&(document.addEventListener("mousemove",m),document.addEventListener("mouseup",S),document.body.style.cursor="ew-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",S),document.body.style.cursor="",document.body.style.userSelect=""}},[o]),p.jsxs(Fw,{children:[p.jsx(Iw,{children:p.jsx(aw,{})}),p.jsxs(eE,{children:[p.jsxs(tE,{$sidebarWidth:a,$isResizing:o,children:[p.jsx(iE,{children:p.jsx(J8,{})}),p.jsxs(_b,{children:[p.jsx(Na,{path:"/instalearn",element:p.jsx(s4,{})}),p.jsx(Na,{path:"/instalearn/teacher",element:p.jsx(Ww,{})}),p.jsx(Na,{path:"/instalearn/library",element:p.jsx(_S,{})}),p.jsx(Na,{path:"/instalearn/notifications",element:p.jsx(e1,{})}),p.jsx(Na,{path:"/instalearn/more",element:p.jsx(e1,{})}),p.jsx(Na,{path:"/instalearn/profile",element:p.jsx(B4,{})})]})]}),p.jsxs(nE,{$width:a,$isResizing:o,children:[p.jsx(aE,{className:o?"active":"",onMouseDown:y,"aria-label":"Resize sidebar"}),p.jsx(ww,{})]})]}),p.jsx(lE,{children:p.jsx(Ew,{})})]})}U2.createRoot(document.getElementById("root")).render(p.jsx(Pb,{children:p.jsx(rE,{})}));export{Te as R,un as _,b as r};
