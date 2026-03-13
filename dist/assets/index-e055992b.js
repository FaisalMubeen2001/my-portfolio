(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function oc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ku={exports:{}},tl={},Gu={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn=Symbol.for("react.element"),uc=Symbol.for("react.portal"),sc=Symbol.for("react.fragment"),ac=Symbol.for("react.strict_mode"),cc=Symbol.for("react.profiler"),dc=Symbol.for("react.provider"),fc=Symbol.for("react.context"),pc=Symbol.for("react.forward_ref"),mc=Symbol.for("react.suspense"),hc=Symbol.for("react.memo"),gc=Symbol.for("react.lazy"),Fo=Symbol.iterator;function vc(e){return e===null||typeof e!="object"?null:(e=Fo&&e[Fo]||e["@@iterator"],typeof e=="function"?e:null)}var Xu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zu=Object.assign,Ju={};function on(e,t,n){this.props=e,this.context=t,this.refs=Ju,this.updater=n||Xu}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qu(){}qu.prototype=on.prototype;function $i(e,t,n){this.props=e,this.context=t,this.refs=Ju,this.updater=n||Xu}var Vi=$i.prototype=new qu;Vi.constructor=$i;Zu(Vi,on.prototype);Vi.isPureReactComponent=!0;var Oo=Array.isArray,bu=Object.prototype.hasOwnProperty,Bi={current:null},es={key:!0,ref:!0,__self:!0,__source:!0};function ts(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)bu.call(t,r)&&!es.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:Xn,type:e,key:i,ref:o,props:l,_owner:Bi.current}}function yc(e,t){return{$$typeof:Xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xn}function wc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ao=/\/+/g;function kl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wc(""+e.key):t.toString(36)}function wr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Xn:case uc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+kl(o,0):r,Oo(l)?(n="",e!=null&&(n=e.replace(Ao,"$&/")+"/"),wr(l,t,n,"",function(c){return c})):l!=null&&(Wi(l)&&(l=yc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Ao,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Oo(e))for(var u=0;u<e.length;u++){i=e[u];var s=r+kl(i,u);o+=wr(i,t,n,s,l)}else if(s=vc(e),typeof s=="function")for(e=s.call(e),u=0;!(i=e.next()).done;)i=i.value,s=r+kl(i,u++),o+=wr(i,t,n,s,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function nr(e,t,n){if(e==null)return e;var r=[],l=0;return wr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function kc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},kr={transition:null},xc={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:kr,ReactCurrentOwner:Bi};function ns(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:nr,forEach:function(e,t,n){nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nr(e,function(){t++}),t},toArray:function(e){return nr(e,function(t){return t})||[]},only:function(e){if(!Wi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=on;L.Fragment=sc;L.Profiler=cc;L.PureComponent=$i;L.StrictMode=ac;L.Suspense=mc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xc;L.act=ns;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zu({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Bi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)bu.call(t,s)&&!es.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&u!==void 0?u[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){u=Array(s);for(var c=0;c<s;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:Xn,type:e.type,key:l,ref:i,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:fc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dc,_context:e},e.Consumer=e};L.createElement=ts;L.createFactory=function(e){var t=ts.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:pc,render:e}};L.isValidElement=Wi;L.lazy=function(e){return{$$typeof:gc,_payload:{_status:-1,_result:e},_init:kc}};L.memo=function(e,t){return{$$typeof:hc,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=kr.transition;kr.transition={};try{e()}finally{kr.transition=t}};L.unstable_act=ns;L.useCallback=function(e,t){return ue.current.useCallback(e,t)};L.useContext=function(e){return ue.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};L.useEffect=function(e,t){return ue.current.useEffect(e,t)};L.useId=function(){return ue.current.useId()};L.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ue.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};L.useRef=function(e){return ue.current.useRef(e)};L.useState=function(e){return ue.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ue.current.useTransition()};L.version="18.3.1";Gu.exports=L;var Oe=Gu.exports;const Sc=oc(Oe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ec=Oe,Nc=Symbol.for("react.element"),Cc=Symbol.for("react.fragment"),_c=Object.prototype.hasOwnProperty,jc=Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zc={key:!0,ref:!0,__self:!0,__source:!0};function rs(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)_c.call(t,r)&&!zc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Nc,type:e,key:i,ref:o,props:l,_owner:jc.current}}tl.Fragment=Cc;tl.jsx=rs;tl.jsxs=rs;Ku.exports=tl;var h=Ku.exports,Kl={},ls={exports:{}},ye={},is={exports:{}},os={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,z){var P=N.length;N.push(z);e:for(;0<P;){var H=P-1>>>1,X=N[H];if(0<l(X,z))N[H]=z,N[P]=X,P=H;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var z=N[0],P=N.pop();if(P!==z){N[0]=P;e:for(var H=0,X=N.length,er=X>>>1;H<er;){var vt=2*(H+1)-1,wl=N[vt],yt=vt+1,tr=N[yt];if(0>l(wl,P))yt<X&&0>l(tr,wl)?(N[H]=tr,N[yt]=P,H=yt):(N[H]=wl,N[vt]=P,H=vt);else if(yt<X&&0>l(tr,P))N[H]=tr,N[yt]=P,H=yt;else break e}}return z}function l(N,z){var P=N.sortIndex-z.sortIndex;return P!==0?P:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var s=[],c=[],p=1,g=null,m=3,w=!1,k=!1,x=!1,I=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(N){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=N)r(c),z.sortIndex=z.expirationTime,t(s,z);else break;z=n(c)}}function v(N){if(x=!1,f(N),!k)if(n(s)!==null)k=!0,vl(E);else{var z=n(c);z!==null&&yl(v,z.startTime-N)}}function E(N,z){k=!1,x&&(x=!1,d(j),j=-1),w=!0;var P=m;try{for(f(z),g=n(s);g!==null&&(!(g.expirationTime>z)||N&&!_e());){var H=g.callback;if(typeof H=="function"){g.callback=null,m=g.priorityLevel;var X=H(g.expirationTime<=z);z=e.unstable_now(),typeof X=="function"?g.callback=X:g===n(s)&&r(s),f(z)}else r(s);g=n(s)}if(g!==null)var er=!0;else{var vt=n(c);vt!==null&&yl(v,vt.startTime-z),er=!1}return er}finally{g=null,m=P,w=!1}}var C=!1,_=null,j=-1,W=5,T=-1;function _e(){return!(e.unstable_now()-T<W)}function an(){if(_!==null){var N=e.unstable_now();T=N;var z=!0;try{z=_(!0,N)}finally{z?cn():(C=!1,_=null)}}else C=!1}var cn;if(typeof a=="function")cn=function(){a(an)};else if(typeof MessageChannel<"u"){var Do=new MessageChannel,ic=Do.port2;Do.port1.onmessage=an,cn=function(){ic.postMessage(null)}}else cn=function(){I(an,0)};function vl(N){_=N,C||(C=!0,cn())}function yl(N,z){j=I(function(){N(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,vl(E))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var P=m;m=z;try{return N()}finally{m=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var P=m;m=N;try{return z()}finally{m=P}},e.unstable_scheduleCallback=function(N,z,P){var H=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?H+P:H):P=H,N){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=P+X,N={id:p++,callback:z,priorityLevel:N,startTime:P,expirationTime:X,sortIndex:-1},P>H?(N.sortIndex=P,t(c,N),n(s)===null&&N===n(c)&&(x?(d(j),j=-1):x=!0,yl(v,P-H))):(N.sortIndex=X,t(s,N),k||w||(k=!0,vl(E))),N},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(N){var z=m;return function(){var P=m;m=z;try{return N.apply(this,arguments)}finally{m=P}}}})(os);is.exports=os;var Pc=is.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lc=Oe,ve=Pc;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var us=new Set,Mn={};function Tt(e,t){qt(e,t),qt(e+"Capture",t)}function qt(e,t){for(Mn[e]=t,e=0;e<t.length;e++)us.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gl=Object.prototype.hasOwnProperty,Tc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uo={},$o={};function Mc(e){return Gl.call($o,e)?!0:Gl.call(Uo,e)?!1:Tc.test(e)?$o[e]=!0:(Uo[e]=!0,!1)}function Rc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ic(e,t,n,r){if(t===null||typeof t>"u"||Rc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function se(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hi=/[\-:]([a-z])/g;function Qi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Hi,Qi);ee[t]=new se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Hi,Qi);ee[t]=new se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Hi,Qi);ee[t]=new se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yi(e,t,n,r){var l=ee.hasOwnProperty(t)?ee[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ic(t,n,l,r)&&(n=null),r||l===null?Mc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xe=Lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),It=Symbol.for("react.portal"),Dt=Symbol.for("react.fragment"),Ki=Symbol.for("react.strict_mode"),Xl=Symbol.for("react.profiler"),ss=Symbol.for("react.provider"),as=Symbol.for("react.context"),Gi=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),Jl=Symbol.for("react.suspense_list"),Xi=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),cs=Symbol.for("react.offscreen"),Vo=Symbol.iterator;function dn(e){return e===null||typeof e!="object"?null:(e=Vo&&e[Vo]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,xl;function wn(e){if(xl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xl=t&&t[1]||""}return`
`+xl+e}var Sl=!1;function El(e,t){if(!e||Sl)return"";Sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,u=i.length-1;1<=o&&0<=u&&l[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==i[u]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=u);break}}}finally{Sl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wn(e):""}function Dc(e){switch(e.tag){case 5:return wn(e.type);case 16:return wn("Lazy");case 13:return wn("Suspense");case 19:return wn("SuspenseList");case 0:case 2:case 15:return e=El(e.type,!1),e;case 11:return e=El(e.type.render,!1),e;case 1:return e=El(e.type,!0),e;default:return""}}function ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dt:return"Fragment";case It:return"Portal";case Xl:return"Profiler";case Ki:return"StrictMode";case Zl:return"Suspense";case Jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case as:return(e.displayName||"Context")+".Consumer";case ss:return(e._context.displayName||"Context")+".Provider";case Gi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xi:return t=e.displayName||null,t!==null?t:ql(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return ql(e(t))}catch{}}return null}function Fc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ql(t);case 8:return t===Ki?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ds(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Oc(e){var t=ds(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lr(e){e._valueTracker||(e._valueTracker=Oc(e))}function fs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ds(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bl(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ps(e,t){t=t.checked,t!=null&&Yi(e,"checked",t,!1)}function ei(e,t){ps(e,t);var n=dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ti(e,t.type,n):t.hasOwnProperty("defaultValue")&&ti(e,t.type,dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ti(e,t,n){(t!=="number"||Tr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kn=Array.isArray;function Yt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ni(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ho(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(kn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dt(n)}}function ms(e,t){var n=dt(t.value),r=dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Qo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ri(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ir,gs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var En={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ac=["Webkit","ms","Moz","O"];Object.keys(En).forEach(function(e){Ac.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),En[t]=En[e]})});function vs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||En.hasOwnProperty(e)&&En[e]?(""+t).trim():t+"px"}function ys(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=vs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Uc=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function li(e,t){if(t){if(Uc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function ii(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oi=null;function Zi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ui=null,Kt=null,Gt=null;function Yo(e){if(e=qn(e)){if(typeof ui!="function")throw Error(y(280));var t=e.stateNode;t&&(t=ol(t),ui(e.stateNode,e.type,t))}}function ws(e){Kt?Gt?Gt.push(e):Gt=[e]:Kt=e}function ks(){if(Kt){var e=Kt,t=Gt;if(Gt=Kt=null,Yo(e),t)for(e=0;e<t.length;e++)Yo(t[e])}}function xs(e,t){return e(t)}function Ss(){}var Nl=!1;function Es(e,t,n){if(Nl)return e(t,n);Nl=!0;try{return xs(e,t,n)}finally{Nl=!1,(Kt!==null||Gt!==null)&&(Ss(),ks())}}function In(e,t){var n=e.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var si=!1;if(Qe)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){si=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{si=!1}function $c(e,t,n,r,l,i,o,u,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var Nn=!1,Mr=null,Rr=!1,ai=null,Vc={onError:function(e){Nn=!0,Mr=e}};function Bc(e,t,n,r,l,i,o,u,s){Nn=!1,Mr=null,$c.apply(Vc,arguments)}function Wc(e,t,n,r,l,i,o,u,s){if(Bc.apply(this,arguments),Nn){if(Nn){var c=Mr;Nn=!1,Mr=null}else throw Error(y(198));Rr||(Rr=!0,ai=c)}}function Mt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ns(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ko(e){if(Mt(e)!==e)throw Error(y(188))}function Hc(e){var t=e.alternate;if(!t){if(t=Mt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Ko(l),e;if(i===r)return Ko(l),t;i=i.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,r=i;break}if(u===r){o=!0,r=l,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,r=l;break}if(u===r){o=!0,r=i,n=l;break}u=u.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Cs(e){return e=Hc(e),e!==null?_s(e):null}function _s(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_s(e);if(t!==null)return t;e=e.sibling}return null}var js=ve.unstable_scheduleCallback,Go=ve.unstable_cancelCallback,Qc=ve.unstable_shouldYield,Yc=ve.unstable_requestPaint,Q=ve.unstable_now,Kc=ve.unstable_getCurrentPriorityLevel,Ji=ve.unstable_ImmediatePriority,zs=ve.unstable_UserBlockingPriority,Ir=ve.unstable_NormalPriority,Gc=ve.unstable_LowPriority,Ps=ve.unstable_IdlePriority,nl=null,Ae=null;function Xc(e){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:qc,Zc=Math.log,Jc=Math.LN2;function qc(e){return e>>>=0,e===0?32:31-(Zc(e)/Jc|0)|0}var or=64,ur=4194304;function xn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Dr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~l;u!==0?r=xn(u):(i&=o,i!==0&&(r=xn(i)))}else o=n&~l,o!==0?r=xn(o):i!==0&&(r=xn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Te(t),l=1<<n,r|=e[n],t&=~l;return r}function bc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ed(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Te(i),u=1<<o,s=l[o];s===-1?(!(u&n)||u&r)&&(l[o]=bc(u,t)):s<=t&&(e.expiredLanes|=u),i&=~u}}function ci(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ls(){var e=or;return or<<=1,!(or&4194240)&&(or=64),e}function Cl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Te(t),e[t]=n}function td(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Te(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function qi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Te(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var R=0;function Ts(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ms,bi,Rs,Is,Ds,di=!1,sr=[],rt=null,lt=null,it=null,Dn=new Map,Fn=new Map,be=[],nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xo(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":Dn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fn.delete(t.pointerId)}}function pn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=qn(t),t!==null&&bi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function rd(e,t,n,r,l){switch(t){case"focusin":return rt=pn(rt,e,t,n,r,l),!0;case"dragenter":return lt=pn(lt,e,t,n,r,l),!0;case"mouseover":return it=pn(it,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Dn.set(i,pn(Dn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Fn.set(i,pn(Fn.get(i)||null,e,t,n,r,l)),!0}return!1}function Fs(e){var t=xt(e.target);if(t!==null){var n=Mt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ns(n),t!==null){e.blockedOn=t,Ds(e.priority,function(){Rs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);oi=r,n.target.dispatchEvent(r),oi=null}else return t=qn(n),t!==null&&bi(t),e.blockedOn=n,!1;t.shift()}return!0}function Zo(e,t,n){xr(e)&&n.delete(t)}function ld(){di=!1,rt!==null&&xr(rt)&&(rt=null),lt!==null&&xr(lt)&&(lt=null),it!==null&&xr(it)&&(it=null),Dn.forEach(Zo),Fn.forEach(Zo)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,di||(di=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,ld)))}function On(e){function t(l){return mn(l,e)}if(0<sr.length){mn(sr[0],e);for(var n=1;n<sr.length;n++){var r=sr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&mn(rt,e),lt!==null&&mn(lt,e),it!==null&&mn(it,e),Dn.forEach(t),Fn.forEach(t),n=0;n<be.length;n++)r=be[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<be.length&&(n=be[0],n.blockedOn===null);)Fs(n),n.blockedOn===null&&be.shift()}var Xt=Xe.ReactCurrentBatchConfig,Fr=!0;function id(e,t,n,r){var l=R,i=Xt.transition;Xt.transition=null;try{R=1,eo(e,t,n,r)}finally{R=l,Xt.transition=i}}function od(e,t,n,r){var l=R,i=Xt.transition;Xt.transition=null;try{R=4,eo(e,t,n,r)}finally{R=l,Xt.transition=i}}function eo(e,t,n,r){if(Fr){var l=fi(e,t,n,r);if(l===null)Dl(e,t,r,Or,n),Xo(e,r);else if(rd(l,e,t,n,r))r.stopPropagation();else if(Xo(e,r),t&4&&-1<nd.indexOf(e)){for(;l!==null;){var i=qn(l);if(i!==null&&Ms(i),i=fi(e,t,n,r),i===null&&Dl(e,t,r,Or,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Dl(e,t,r,null,n)}}var Or=null;function fi(e,t,n,r){if(Or=null,e=Zi(r),e=xt(e),e!==null)if(t=Mt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ns(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Or=e,null}function Os(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kc()){case Ji:return 1;case zs:return 4;case Ir:case Gc:return 16;case Ps:return 536870912;default:return 16}default:return 16}}var tt=null,to=null,Sr=null;function As(){if(Sr)return Sr;var e,t=to,n=t.length,r,l="value"in tt?tt.value:tt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Sr=l.slice(e,1<r?1-r:void 0)}function Er(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ar(){return!0}function Jo(){return!1}function we(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ar:Jo,this.isPropagationStopped=Jo,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),t}var un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},no=we(un),Jn=V({},un,{view:0,detail:0}),ud=we(Jn),_l,jl,hn,rl=V({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ro,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(_l=e.screenX-hn.screenX,jl=e.screenY-hn.screenY):jl=_l=0,hn=e),_l)},movementY:function(e){return"movementY"in e?e.movementY:jl}}),qo=we(rl),sd=V({},rl,{dataTransfer:0}),ad=we(sd),cd=V({},Jn,{relatedTarget:0}),zl=we(cd),dd=V({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),fd=we(dd),pd=V({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),md=we(pd),hd=V({},un,{data:0}),bo=we(hd),gd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yd[e])?!!t[e]:!1}function ro(){return wd}var kd=V({},Jn,{key:function(e){if(e.key){var t=gd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ro,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xd=we(kd),Sd=V({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eu=we(Sd),Ed=V({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ro}),Nd=we(Ed),Cd=V({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),_d=we(Cd),jd=V({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zd=we(jd),Pd=[9,13,27,32],lo=Qe&&"CompositionEvent"in window,Cn=null;Qe&&"documentMode"in document&&(Cn=document.documentMode);var Ld=Qe&&"TextEvent"in window&&!Cn,Us=Qe&&(!lo||Cn&&8<Cn&&11>=Cn),tu=String.fromCharCode(32),nu=!1;function $s(e,t){switch(e){case"keyup":return Pd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ft=!1;function Td(e,t){switch(e){case"compositionend":return Vs(t);case"keypress":return t.which!==32?null:(nu=!0,tu);case"textInput":return e=t.data,e===tu&&nu?null:e;default:return null}}function Md(e,t){if(Ft)return e==="compositionend"||!lo&&$s(e,t)?(e=As(),Sr=to=tt=null,Ft=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Us&&t.locale!=="ko"?null:t.data;default:return null}}var Rd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ru(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rd[e.type]:t==="textarea"}function Bs(e,t,n,r){ws(r),t=Ar(t,"onChange"),0<t.length&&(n=new no("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _n=null,An=null;function Id(e){bs(e,0)}function ll(e){var t=Ut(e);if(fs(t))return e}function Dd(e,t){if(e==="change")return t}var Ws=!1;if(Qe){var Pl;if(Qe){var Ll="oninput"in document;if(!Ll){var lu=document.createElement("div");lu.setAttribute("oninput","return;"),Ll=typeof lu.oninput=="function"}Pl=Ll}else Pl=!1;Ws=Pl&&(!document.documentMode||9<document.documentMode)}function iu(){_n&&(_n.detachEvent("onpropertychange",Hs),An=_n=null)}function Hs(e){if(e.propertyName==="value"&&ll(An)){var t=[];Bs(t,An,e,Zi(e)),Es(Id,t)}}function Fd(e,t,n){e==="focusin"?(iu(),_n=t,An=n,_n.attachEvent("onpropertychange",Hs)):e==="focusout"&&iu()}function Od(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(An)}function Ad(e,t){if(e==="click")return ll(t)}function Ud(e,t){if(e==="input"||e==="change")return ll(t)}function $d(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Re=typeof Object.is=="function"?Object.is:$d;function Un(e,t){if(Re(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Gl.call(t,l)||!Re(e[l],t[l]))return!1}return!0}function ou(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uu(e,t){var n=ou(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ou(n)}}function Qs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ys(){for(var e=window,t=Tr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Tr(e.document)}return t}function io(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vd(e){var t=Ys(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qs(n.ownerDocument.documentElement,n)){if(r!==null&&io(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=uu(n,i);var o=uu(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bd=Qe&&"documentMode"in document&&11>=document.documentMode,Ot=null,pi=null,jn=null,mi=!1;function su(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mi||Ot==null||Ot!==Tr(r)||(r=Ot,"selectionStart"in r&&io(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jn&&Un(jn,r)||(jn=r,r=Ar(pi,"onSelect"),0<r.length&&(t=new no("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ot)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var At={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Tl={},Ks={};Qe&&(Ks=document.createElement("div").style,"AnimationEvent"in window||(delete At.animationend.animation,delete At.animationiteration.animation,delete At.animationstart.animation),"TransitionEvent"in window||delete At.transitionend.transition);function il(e){if(Tl[e])return Tl[e];if(!At[e])return e;var t=At[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ks)return Tl[e]=t[n];return e}var Gs=il("animationend"),Xs=il("animationiteration"),Zs=il("animationstart"),Js=il("transitionend"),qs=new Map,au="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){qs.set(e,t),Tt(t,[e])}for(var Ml=0;Ml<au.length;Ml++){var Rl=au[Ml],Wd=Rl.toLowerCase(),Hd=Rl[0].toUpperCase()+Rl.slice(1);pt(Wd,"on"+Hd)}pt(Gs,"onAnimationEnd");pt(Xs,"onAnimationIteration");pt(Zs,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Js,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function cu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Wc(r,t,void 0,e),e.currentTarget=null}function bs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],s=u.instance,c=u.currentTarget;if(u=u.listener,s!==i&&l.isPropagationStopped())break e;cu(l,u,c),i=s}else for(o=0;o<r.length;o++){if(u=r[o],s=u.instance,c=u.currentTarget,u=u.listener,s!==i&&l.isPropagationStopped())break e;cu(l,u,c),i=s}}}if(Rr)throw e=ai,Rr=!1,ai=null,e}function F(e,t){var n=t[wi];n===void 0&&(n=t[wi]=new Set);var r=e+"__bubble";n.has(r)||(ea(t,e,2,!1),n.add(r))}function Il(e,t,n){var r=0;t&&(r|=4),ea(n,e,r,t)}var dr="_reactListening"+Math.random().toString(36).slice(2);function $n(e){if(!e[dr]){e[dr]=!0,us.forEach(function(n){n!=="selectionchange"&&(Qd.has(n)||Il(n,!1,e),Il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dr]||(t[dr]=!0,Il("selectionchange",!1,t))}}function ea(e,t,n,r){switch(Os(t)){case 1:var l=id;break;case 4:l=od;break;default:l=eo}n=l.bind(null,t,n,e),l=void 0,!si||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Dl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;u!==null;){if(o=xt(u),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}u=u.parentNode}}r=r.return}Es(function(){var c=i,p=Zi(n),g=[];e:{var m=qs.get(e);if(m!==void 0){var w=no,k=e;switch(e){case"keypress":if(Er(n)===0)break e;case"keydown":case"keyup":w=xd;break;case"focusin":k="focus",w=zl;break;case"focusout":k="blur",w=zl;break;case"beforeblur":case"afterblur":w=zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=ad;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Nd;break;case Gs:case Xs:case Zs:w=fd;break;case Js:w=_d;break;case"scroll":w=ud;break;case"wheel":w=zd;break;case"copy":case"cut":case"paste":w=md;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=eu}var x=(t&4)!==0,I=!x&&e==="scroll",d=x?m!==null?m+"Capture":null:m;x=[];for(var a=c,f;a!==null;){f=a;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=In(a,d),v!=null&&x.push(Vn(a,v,f)))),I)break;a=a.return}0<x.length&&(m=new w(m,k,null,n,p),g.push({event:m,listeners:x}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==oi&&(k=n.relatedTarget||n.fromElement)&&(xt(k)||k[Ye]))break e;if((w||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=c,k=k?xt(k):null,k!==null&&(I=Mt(k),k!==I||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=c),w!==k)){if(x=qo,v="onMouseLeave",d="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(x=eu,v="onPointerLeave",d="onPointerEnter",a="pointer"),I=w==null?m:Ut(w),f=k==null?m:Ut(k),m=new x(v,a+"leave",w,n,p),m.target=I,m.relatedTarget=f,v=null,xt(p)===c&&(x=new x(d,a+"enter",k,n,p),x.target=f,x.relatedTarget=I,v=x),I=v,w&&k)t:{for(x=w,d=k,a=0,f=x;f;f=Rt(f))a++;for(f=0,v=d;v;v=Rt(v))f++;for(;0<a-f;)x=Rt(x),a--;for(;0<f-a;)d=Rt(d),f--;for(;a--;){if(x===d||d!==null&&x===d.alternate)break t;x=Rt(x),d=Rt(d)}x=null}else x=null;w!==null&&du(g,m,w,x,!1),k!==null&&I!==null&&du(g,I,k,x,!0)}}e:{if(m=c?Ut(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var E=Dd;else if(ru(m))if(Ws)E=Ud;else{E=Od;var C=Fd}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Ad);if(E&&(E=E(e,c))){Bs(g,E,n,p);break e}C&&C(e,m,c),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&ti(m,"number",m.value)}switch(C=c?Ut(c):window,e){case"focusin":(ru(C)||C.contentEditable==="true")&&(Ot=C,pi=c,jn=null);break;case"focusout":jn=pi=Ot=null;break;case"mousedown":mi=!0;break;case"contextmenu":case"mouseup":case"dragend":mi=!1,su(g,n,p);break;case"selectionchange":if(Bd)break;case"keydown":case"keyup":su(g,n,p)}var _;if(lo)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Ft?$s(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Us&&n.locale!=="ko"&&(Ft||j!=="onCompositionStart"?j==="onCompositionEnd"&&Ft&&(_=As()):(tt=p,to="value"in tt?tt.value:tt.textContent,Ft=!0)),C=Ar(c,j),0<C.length&&(j=new bo(j,e,null,n,p),g.push({event:j,listeners:C}),_?j.data=_:(_=Vs(n),_!==null&&(j.data=_)))),(_=Ld?Td(e,n):Md(e,n))&&(c=Ar(c,"onBeforeInput"),0<c.length&&(p=new bo("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:c}),p.data=_))}bs(g,t)})}function Vn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ar(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=In(e,n),i!=null&&r.unshift(Vn(e,i,l)),i=In(e,t),i!=null&&r.push(Vn(e,i,l))),e=e.return}return r}function Rt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function du(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var u=n,s=u.alternate,c=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&c!==null&&(u=c,l?(s=In(n,i),s!=null&&o.unshift(Vn(n,s,u))):l||(s=In(n,i),s!=null&&o.push(Vn(n,s,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Yd=/\r\n?/g,Kd=/\u0000|\uFFFD/g;function fu(e){return(typeof e=="string"?e:""+e).replace(Yd,`
`).replace(Kd,"")}function fr(e,t,n){if(t=fu(t),fu(e)!==t&&n)throw Error(y(425))}function Ur(){}var hi=null,gi=null;function vi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yi=typeof setTimeout=="function"?setTimeout:void 0,Gd=typeof clearTimeout=="function"?clearTimeout:void 0,pu=typeof Promise=="function"?Promise:void 0,Xd=typeof queueMicrotask=="function"?queueMicrotask:typeof pu<"u"?function(e){return pu.resolve(null).then(e).catch(Zd)}:yi;function Zd(e){setTimeout(function(){throw e})}function Fl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),On(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);On(t)}function ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function mu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sn=Math.random().toString(36).slice(2),Fe="__reactFiber$"+sn,Bn="__reactProps$"+sn,Ye="__reactContainer$"+sn,wi="__reactEvents$"+sn,Jd="__reactListeners$"+sn,qd="__reactHandles$"+sn;function xt(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mu(e);e!==null;){if(n=e[Fe])return n;e=mu(e)}return t}e=n,n=e.parentNode}return null}function qn(e){return e=e[Fe]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function ol(e){return e[Bn]||null}var ki=[],$t=-1;function mt(e){return{current:e}}function O(e){0>$t||(e.current=ki[$t],ki[$t]=null,$t--)}function D(e,t){$t++,ki[$t]=e.current,e.current=t}var ft={},le=mt(ft),de=mt(!1),_t=ft;function bt(e,t){var n=e.type.contextTypes;if(!n)return ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function fe(e){return e=e.childContextTypes,e!=null}function $r(){O(de),O(le)}function hu(e,t,n){if(le.current!==ft)throw Error(y(168));D(le,t),D(de,n)}function ta(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,Fc(e)||"Unknown",l));return V({},n,r)}function Vr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,_t=le.current,D(le,e),D(de,de.current),!0}function gu(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=ta(e,t,_t),r.__reactInternalMemoizedMergedChildContext=e,O(de),O(le),D(le,e)):O(de),D(de,n)}var Ve=null,ul=!1,Ol=!1;function na(e){Ve===null?Ve=[e]:Ve.push(e)}function bd(e){ul=!0,na(e)}function ht(){if(!Ol&&Ve!==null){Ol=!0;var e=0,t=R;try{var n=Ve;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,ul=!1}catch(l){throw Ve!==null&&(Ve=Ve.slice(e+1)),js(Ji,ht),l}finally{R=t,Ol=!1}}return null}var Vt=[],Bt=0,Br=null,Wr=0,ke=[],xe=0,jt=null,Be=1,We="";function wt(e,t){Vt[Bt++]=Wr,Vt[Bt++]=Br,Br=e,Wr=t}function ra(e,t,n){ke[xe++]=Be,ke[xe++]=We,ke[xe++]=jt,jt=e;var r=Be;e=We;var l=32-Te(r)-1;r&=~(1<<l),n+=1;var i=32-Te(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Be=1<<32-Te(t)+l|n<<l|r,We=i+e}else Be=1<<i|n<<l|r,We=e}function oo(e){e.return!==null&&(wt(e,1),ra(e,1,0))}function uo(e){for(;e===Br;)Br=Vt[--Bt],Vt[Bt]=null,Wr=Vt[--Bt],Vt[Bt]=null;for(;e===jt;)jt=ke[--xe],ke[xe]=null,We=ke[--xe],ke[xe]=null,Be=ke[--xe],ke[xe]=null}var ge=null,he=null,A=!1,Le=null;function la(e,t){var n=Se(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function vu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ge=e,he=ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ge=e,he=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jt!==null?{id:Be,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Se(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ge=e,he=null,!0):!1;default:return!1}}function xi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Si(e){if(A){var t=he;if(t){var n=t;if(!vu(e,t)){if(xi(e))throw Error(y(418));t=ot(n.nextSibling);var r=ge;t&&vu(e,t)?la(r,n):(e.flags=e.flags&-4097|2,A=!1,ge=e)}}else{if(xi(e))throw Error(y(418));e.flags=e.flags&-4097|2,A=!1,ge=e}}}function yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function pr(e){if(e!==ge)return!1;if(!A)return yu(e),A=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vi(e.type,e.memoizedProps)),t&&(t=he)){if(xi(e))throw ia(),Error(y(418));for(;t;)la(e,t),t=ot(t.nextSibling)}if(yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){he=ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}he=null}}else he=ge?ot(e.stateNode.nextSibling):null;return!0}function ia(){for(var e=he;e;)e=ot(e.nextSibling)}function en(){he=ge=null,A=!1}function so(e){Le===null?Le=[e]:Le.push(e)}var ef=Xe.ReactCurrentBatchConfig;function gn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var u=l.refs;o===null?delete u[i]:u[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function mr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wu(e){var t=e._init;return t(e._payload)}function oa(e){function t(d,a){if(e){var f=d.deletions;f===null?(d.deletions=[a],d.flags|=16):f.push(a)}}function n(d,a){if(!e)return null;for(;a!==null;)t(d,a),a=a.sibling;return null}function r(d,a){for(d=new Map;a!==null;)a.key!==null?d.set(a.key,a):d.set(a.index,a),a=a.sibling;return d}function l(d,a){return d=ct(d,a),d.index=0,d.sibling=null,d}function i(d,a,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<a?(d.flags|=2,a):f):(d.flags|=2,a)):(d.flags|=1048576,a)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,a,f,v){return a===null||a.tag!==6?(a=Hl(f,d.mode,v),a.return=d,a):(a=l(a,f),a.return=d,a)}function s(d,a,f,v){var E=f.type;return E===Dt?p(d,a,f.props.children,v,f.key):a!==null&&(a.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Je&&wu(E)===a.type)?(v=l(a,f.props),v.ref=gn(d,a,f),v.return=d,v):(v=Lr(f.type,f.key,f.props,null,d.mode,v),v.ref=gn(d,a,f),v.return=d,v)}function c(d,a,f,v){return a===null||a.tag!==4||a.stateNode.containerInfo!==f.containerInfo||a.stateNode.implementation!==f.implementation?(a=Ql(f,d.mode,v),a.return=d,a):(a=l(a,f.children||[]),a.return=d,a)}function p(d,a,f,v,E){return a===null||a.tag!==7?(a=Ct(f,d.mode,v,E),a.return=d,a):(a=l(a,f),a.return=d,a)}function g(d,a,f){if(typeof a=="string"&&a!==""||typeof a=="number")return a=Hl(""+a,d.mode,f),a.return=d,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case rr:return f=Lr(a.type,a.key,a.props,null,d.mode,f),f.ref=gn(d,null,a),f.return=d,f;case It:return a=Ql(a,d.mode,f),a.return=d,a;case Je:var v=a._init;return g(d,v(a._payload),f)}if(kn(a)||dn(a))return a=Ct(a,d.mode,f,null),a.return=d,a;mr(d,a)}return null}function m(d,a,f,v){var E=a!==null?a.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return E!==null?null:u(d,a,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:return f.key===E?s(d,a,f,v):null;case It:return f.key===E?c(d,a,f,v):null;case Je:return E=f._init,m(d,a,E(f._payload),v)}if(kn(f)||dn(f))return E!==null?null:p(d,a,f,v,null);mr(d,f)}return null}function w(d,a,f,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,u(a,d,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case rr:return d=d.get(v.key===null?f:v.key)||null,s(a,d,v,E);case It:return d=d.get(v.key===null?f:v.key)||null,c(a,d,v,E);case Je:var C=v._init;return w(d,a,f,C(v._payload),E)}if(kn(v)||dn(v))return d=d.get(f)||null,p(a,d,v,E,null);mr(a,v)}return null}function k(d,a,f,v){for(var E=null,C=null,_=a,j=a=0,W=null;_!==null&&j<f.length;j++){_.index>j?(W=_,_=null):W=_.sibling;var T=m(d,_,f[j],v);if(T===null){_===null&&(_=W);break}e&&_&&T.alternate===null&&t(d,_),a=i(T,a,j),C===null?E=T:C.sibling=T,C=T,_=W}if(j===f.length)return n(d,_),A&&wt(d,j),E;if(_===null){for(;j<f.length;j++)_=g(d,f[j],v),_!==null&&(a=i(_,a,j),C===null?E=_:C.sibling=_,C=_);return A&&wt(d,j),E}for(_=r(d,_);j<f.length;j++)W=w(_,d,j,f[j],v),W!==null&&(e&&W.alternate!==null&&_.delete(W.key===null?j:W.key),a=i(W,a,j),C===null?E=W:C.sibling=W,C=W);return e&&_.forEach(function(_e){return t(d,_e)}),A&&wt(d,j),E}function x(d,a,f,v){var E=dn(f);if(typeof E!="function")throw Error(y(150));if(f=E.call(f),f==null)throw Error(y(151));for(var C=E=null,_=a,j=a=0,W=null,T=f.next();_!==null&&!T.done;j++,T=f.next()){_.index>j?(W=_,_=null):W=_.sibling;var _e=m(d,_,T.value,v);if(_e===null){_===null&&(_=W);break}e&&_&&_e.alternate===null&&t(d,_),a=i(_e,a,j),C===null?E=_e:C.sibling=_e,C=_e,_=W}if(T.done)return n(d,_),A&&wt(d,j),E;if(_===null){for(;!T.done;j++,T=f.next())T=g(d,T.value,v),T!==null&&(a=i(T,a,j),C===null?E=T:C.sibling=T,C=T);return A&&wt(d,j),E}for(_=r(d,_);!T.done;j++,T=f.next())T=w(_,d,j,T.value,v),T!==null&&(e&&T.alternate!==null&&_.delete(T.key===null?j:T.key),a=i(T,a,j),C===null?E=T:C.sibling=T,C=T);return e&&_.forEach(function(an){return t(d,an)}),A&&wt(d,j),E}function I(d,a,f,v){if(typeof f=="object"&&f!==null&&f.type===Dt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:e:{for(var E=f.key,C=a;C!==null;){if(C.key===E){if(E=f.type,E===Dt){if(C.tag===7){n(d,C.sibling),a=l(C,f.props.children),a.return=d,d=a;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Je&&wu(E)===C.type){n(d,C.sibling),a=l(C,f.props),a.ref=gn(d,C,f),a.return=d,d=a;break e}n(d,C);break}else t(d,C);C=C.sibling}f.type===Dt?(a=Ct(f.props.children,d.mode,v,f.key),a.return=d,d=a):(v=Lr(f.type,f.key,f.props,null,d.mode,v),v.ref=gn(d,a,f),v.return=d,d=v)}return o(d);case It:e:{for(C=f.key;a!==null;){if(a.key===C)if(a.tag===4&&a.stateNode.containerInfo===f.containerInfo&&a.stateNode.implementation===f.implementation){n(d,a.sibling),a=l(a,f.children||[]),a.return=d,d=a;break e}else{n(d,a);break}else t(d,a);a=a.sibling}a=Ql(f,d.mode,v),a.return=d,d=a}return o(d);case Je:return C=f._init,I(d,a,C(f._payload),v)}if(kn(f))return k(d,a,f,v);if(dn(f))return x(d,a,f,v);mr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,a!==null&&a.tag===6?(n(d,a.sibling),a=l(a,f),a.return=d,d=a):(n(d,a),a=Hl(f,d.mode,v),a.return=d,d=a),o(d)):n(d,a)}return I}var tn=oa(!0),ua=oa(!1),Hr=mt(null),Qr=null,Wt=null,ao=null;function co(){ao=Wt=Qr=null}function fo(e){var t=Hr.current;O(Hr),e._currentValue=t}function Ei(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zt(e,t){Qr=e,ao=Wt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function Ne(e){var t=e._currentValue;if(ao!==e)if(e={context:e,memoizedValue:t,next:null},Wt===null){if(Qr===null)throw Error(y(308));Wt=e,Qr.dependencies={lanes:0,firstContext:e}}else Wt=Wt.next=e;return t}var St=null;function po(e){St===null?St=[e]:St.push(e)}function sa(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,po(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ke(e,r)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qe=!1;function mo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function aa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function He(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ke(e,n)}return l=r.interleaved,l===null?(t.next=t,po(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ke(e,n)}function Nr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qi(e,n)}}function ku(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yr(e,t,n,r){var l=e.updateQueue;qe=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var s=u,c=s.next;s.next=null,o===null?i=c:o.next=c,o=s;var p=e.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==o&&(u===null?p.firstBaseUpdate=c:u.next=c,p.lastBaseUpdate=s))}if(i!==null){var g=l.baseState;o=0,p=c=s=null,u=i;do{var m=u.lane,w=u.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:w,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var k=e,x=u;switch(m=t,w=n,x.tag){case 1:if(k=x.payload,typeof k=="function"){g=k.call(w,g,m);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,m=typeof k=="function"?k.call(w,g,m):k,m==null)break e;g=V({},g,m);break e;case 2:qe=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[u]:m.push(u))}else w={eventTime:w,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(c=p=w,s=g):p=p.next=w,o|=m;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;m=u,u=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(1);if(p===null&&(s=g),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=p,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Pt|=o,e.lanes=o,e.memoizedState=g}}function xu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var bn={},Ue=mt(bn),Wn=mt(bn),Hn=mt(bn);function Et(e){if(e===bn)throw Error(y(174));return e}function ho(e,t){switch(D(Hn,t),D(Wn,e),D(Ue,bn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ri(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ri(t,e)}O(Ue),D(Ue,t)}function nn(){O(Ue),O(Wn),O(Hn)}function ca(e){Et(Hn.current);var t=Et(Ue.current),n=ri(t,e.type);t!==n&&(D(Wn,e),D(Ue,n))}function go(e){Wn.current===e&&(O(Ue),O(Wn))}var U=mt(0);function Kr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Al=[];function vo(){for(var e=0;e<Al.length;e++)Al[e]._workInProgressVersionPrimary=null;Al.length=0}var Cr=Xe.ReactCurrentDispatcher,Ul=Xe.ReactCurrentBatchConfig,zt=0,$=null,K=null,Z=null,Gr=!1,zn=!1,Qn=0,tf=0;function te(){throw Error(y(321))}function yo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Re(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,l,i){if(zt=i,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Cr.current=e===null||e.memoizedState===null?of:uf,e=n(r,l),zn){i=0;do{if(zn=!1,Qn=0,25<=i)throw Error(y(301));i+=1,Z=K=null,t.updateQueue=null,Cr.current=sf,e=n(r,l)}while(zn)}if(Cr.current=Xr,t=K!==null&&K.next!==null,zt=0,Z=K=$=null,Gr=!1,t)throw Error(y(300));return e}function ko(){var e=Qn!==0;return Qn=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?$.memoizedState=Z=e:Z=Z.next=e,Z}function Ce(){if(K===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=Z===null?$.memoizedState:Z.next;if(t!==null)Z=t,K=e;else{if(e===null)throw Error(y(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Z===null?$.memoizedState=Z=e:Z=Z.next=e}return Z}function Yn(e,t){return typeof t=="function"?t(e):t}function $l(e){var t=Ce(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=K,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=o=null,s=null,c=i;do{var p=c.lane;if((zt&p)===p)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(u=s=g,o=r):s=s.next=g,$.lanes|=p,Pt|=p}c=c.next}while(c!==null&&c!==i);s===null?o=r:s.next=u,Re(r,t.memoizedState)||(ce=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,$.lanes|=i,Pt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vl(e){var t=Ce(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Re(i,t.memoizedState)||(ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function da(){}function fa(e,t){var n=$,r=Ce(),l=t(),i=!Re(r.memoizedState,l);if(i&&(r.memoizedState=l,ce=!0),r=r.queue,xo(ha.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Kn(9,ma.bind(null,n,r,l,t),void 0,null),J===null)throw Error(y(349));zt&30||pa(n,t,l)}return l}function pa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ma(e,t,n,r){t.value=n,t.getSnapshot=r,ga(t)&&va(e)}function ha(e,t,n){return n(function(){ga(t)&&va(e)})}function ga(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Re(e,n)}catch{return!0}}function va(e){var t=Ke(e,1);t!==null&&Me(t,e,1,-1)}function Su(e){var t=De();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:e},t.queue=e,e=e.dispatch=lf.bind(null,$,e),[t.memoizedState,e]}function Kn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ya(){return Ce().memoizedState}function _r(e,t,n,r){var l=De();$.flags|=e,l.memoizedState=Kn(1|t,n,void 0,r===void 0?null:r)}function sl(e,t,n,r){var l=Ce();r=r===void 0?null:r;var i=void 0;if(K!==null){var o=K.memoizedState;if(i=o.destroy,r!==null&&yo(r,o.deps)){l.memoizedState=Kn(t,n,i,r);return}}$.flags|=e,l.memoizedState=Kn(1|t,n,i,r)}function Eu(e,t){return _r(8390656,8,e,t)}function xo(e,t){return sl(2048,8,e,t)}function wa(e,t){return sl(4,2,e,t)}function ka(e,t){return sl(4,4,e,t)}function xa(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sa(e,t,n){return n=n!=null?n.concat([e]):null,sl(4,4,xa.bind(null,t,e),n)}function So(){}function Ea(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Na(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ca(e,t,n){return zt&21?(Re(n,t)||(n=Ls(),$.lanes|=n,Pt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=n)}function nf(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),t()}finally{R=n,Ul.transition=r}}function _a(){return Ce().memoizedState}function rf(e,t,n){var r=at(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ja(e))za(t,n);else if(n=sa(e,t,n,r),n!==null){var l=oe();Me(n,e,r,l),Pa(n,t,r)}}function lf(e,t,n){var r=at(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ja(e))za(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,n);if(l.hasEagerState=!0,l.eagerState=u,Re(u,o)){var s=t.interleaved;s===null?(l.next=l,po(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=sa(e,t,l,r),n!==null&&(l=oe(),Me(n,e,r,l),Pa(n,t,r))}}function ja(e){var t=e.alternate;return e===$||t!==null&&t===$}function za(e,t){zn=Gr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pa(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qi(e,n)}}var Xr={readContext:Ne,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},of={readContext:Ne,useCallback:function(e,t){return De().memoizedState=[e,t===void 0?null:t],e},useContext:Ne,useEffect:Eu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_r(4194308,4,xa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _r(4194308,4,e,t)},useInsertionEffect:function(e,t){return _r(4,2,e,t)},useMemo:function(e,t){var n=De();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=De();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rf.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=De();return e={current:e},t.memoizedState=e},useState:Su,useDebugValue:So,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=Su(!1),t=e[0];return e=nf.bind(null,e[1]),De().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,l=De();if(A){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),J===null)throw Error(y(349));zt&30||pa(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Eu(ha.bind(null,r,i,e),[e]),r.flags|=2048,Kn(9,ma.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=De(),t=J.identifierPrefix;if(A){var n=We,r=Be;n=(r&~(1<<32-Te(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=tf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},uf={readContext:Ne,useCallback:Ea,useContext:Ne,useEffect:xo,useImperativeHandle:Sa,useInsertionEffect:wa,useLayoutEffect:ka,useMemo:Na,useReducer:$l,useRef:ya,useState:function(){return $l(Yn)},useDebugValue:So,useDeferredValue:function(e){var t=Ce();return Ca(t,K.memoizedState,e)},useTransition:function(){var e=$l(Yn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:da,useSyncExternalStore:fa,useId:_a,unstable_isNewReconciler:!1},sf={readContext:Ne,useCallback:Ea,useContext:Ne,useEffect:xo,useImperativeHandle:Sa,useInsertionEffect:wa,useLayoutEffect:ka,useMemo:Na,useReducer:Vl,useRef:ya,useState:function(){return Vl(Yn)},useDebugValue:So,useDeferredValue:function(e){var t=Ce();return K===null?t.memoizedState=e:Ca(t,K.memoizedState,e)},useTransition:function(){var e=Vl(Yn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:da,useSyncExternalStore:fa,useId:_a,unstable_isNewReconciler:!1};function ze(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ni(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return(e=e._reactInternals)?Mt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=oe(),l=at(e),i=He(r,l);i.payload=t,n!=null&&(i.callback=n),t=ut(e,i,l),t!==null&&(Me(t,e,l,r),Nr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=oe(),l=at(e),i=He(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ut(e,i,l),t!==null&&(Me(t,e,l,r),Nr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=oe(),r=at(e),l=He(n,r);l.tag=2,t!=null&&(l.callback=t),t=ut(e,l,r),t!==null&&(Me(t,e,r,n),Nr(t,e,r))}};function Nu(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Un(n,r)||!Un(l,i):!0}function La(e,t,n){var r=!1,l=ft,i=t.contextType;return typeof i=="object"&&i!==null?i=Ne(i):(l=fe(t)?_t:le.current,r=t.contextTypes,i=(r=r!=null)?bt(e,l):ft),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Cu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function Ci(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},mo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ne(i):(i=fe(t)?_t:le.current,l.context=bt(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ni(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&al.enqueueReplaceState(l,l.state,null),Yr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function rn(e,t){try{var n="",r=t;do n+=Dc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Bl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function _i(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var af=typeof WeakMap=="function"?WeakMap:Map;function Ta(e,t,n){n=He(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Jr||(Jr=!0,Fi=r),_i(e,t)},n}function Ma(e,t,n){n=He(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){_i(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){_i(e,t),typeof r!="function"&&(st===null?st=new Set([this]):st.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function _u(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new af;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Ef.bind(null,e,t,n),t.then(e,e))}function ju(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zu(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=He(-1,1),t.tag=2,ut(n,t,1))),n.lanes|=1),e)}var cf=Xe.ReactCurrentOwner,ce=!1;function ie(e,t,n,r){t.child=e===null?ua(t,null,n,r):tn(t,e.child,n,r)}function Pu(e,t,n,r,l){n=n.render;var i=t.ref;return Zt(t,l),r=wo(e,t,n,r,i,l),n=ko(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(A&&n&&oo(t),t.flags|=1,ie(e,t,r,l),t.child)}function Lu(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Lo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ra(e,t,i,r,l)):(e=Lr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Un,n(o,r)&&e.ref===t.ref)return Ge(e,t,l)}return t.flags|=1,e=ct(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ra(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Un(i,r)&&e.ref===t.ref)if(ce=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,Ge(e,t,l)}return ji(e,t,n,r,l)}function Ia(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Qt,me),me|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(Qt,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,D(Qt,me),me|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,D(Qt,me),me|=r;return ie(e,t,l,n),t.child}function Da(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ji(e,t,n,r,l){var i=fe(n)?_t:le.current;return i=bt(t,i),Zt(t,l),n=wo(e,t,n,r,i,l),r=ko(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(A&&r&&oo(t),t.flags|=1,ie(e,t,n,l),t.child)}function Tu(e,t,n,r,l){if(fe(n)){var i=!0;Vr(t)}else i=!1;if(Zt(t,l),t.stateNode===null)jr(e,t),La(t,n,r),Ci(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var s=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ne(c):(c=fe(n)?_t:le.current,c=bt(t,c));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||s!==c)&&Cu(t,o,r,c),qe=!1;var m=t.memoizedState;o.state=m,Yr(t,r,o,l),s=t.memoizedState,u!==r||m!==s||de.current||qe?(typeof p=="function"&&(Ni(t,n,p,r),s=t.memoizedState),(u=qe||Nu(t,n,u,r,m,s,c))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=c,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,aa(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:ze(t.type,u),o.props=c,g=t.pendingProps,m=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ne(s):(s=fe(n)?_t:le.current,s=bt(t,s));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==g||m!==s)&&Cu(t,o,r,s),qe=!1,m=t.memoizedState,o.state=m,Yr(t,r,o,l);var k=t.memoizedState;u!==g||m!==k||de.current||qe?(typeof w=="function"&&(Ni(t,n,w,r),k=t.memoizedState),(c=qe||Nu(t,n,c,r,m,k,s)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),o.props=r,o.state=k,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return zi(e,t,n,r,i,l)}function zi(e,t,n,r,l,i){Da(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&gu(t,n,!1),Ge(e,t,i);r=t.stateNode,cf.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=tn(t,e.child,null,i),t.child=tn(t,null,u,i)):ie(e,t,u,i),t.memoizedState=r.state,l&&gu(t,n,!0),t.child}function Fa(e){var t=e.stateNode;t.pendingContext?hu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hu(e,t.context,!1),ho(e,t.containerInfo)}function Mu(e,t,n,r,l){return en(),so(l),t.flags|=256,ie(e,t,n,r),t.child}var Pi={dehydrated:null,treeContext:null,retryLane:0};function Li(e){return{baseLanes:e,cachePool:null,transitions:null}}function Oa(e,t,n){var r=t.pendingProps,l=U.current,i=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),D(U,l&1),e===null)return Si(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=fl(o,r,0,null),e=Ct(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Li(n),t.memoizedState=Pi,e):Eo(t,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return df(e,t,o,r,u,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,u=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=ct(l,s),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=ct(u,i):(i=Ct(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Li(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Pi,r}return i=e.child,e=i.sibling,r=ct(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Eo(e,t){return t=fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hr(e,t,n,r){return r!==null&&so(r),tn(t,e.child,null,n),e=Eo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function df(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Bl(Error(y(422))),hr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=fl({mode:"visible",children:r.children},l,0,null),i=Ct(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&tn(t,e.child,null,o),t.child.memoizedState=Li(o),t.memoizedState=Pi,i);if(!(t.mode&1))return hr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(y(419)),r=Bl(i,r,void 0),hr(e,t,o,r)}if(u=(o&e.childLanes)!==0,ce||u){if(r=J,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ke(e,l),Me(r,e,l,-1))}return Po(),r=Bl(Error(y(421))),hr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Nf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,he=ot(l.nextSibling),ge=t,A=!0,Le=null,e!==null&&(ke[xe++]=Be,ke[xe++]=We,ke[xe++]=jt,Be=e.id,We=e.overflow,jt=t),t=Eo(t,r.children),t.flags|=4096,t)}function Ru(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ei(e.return,t,n)}function Wl(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Aa(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ie(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ru(e,n,t);else if(e.tag===19)Ru(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(U,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Kr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Wl(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Kr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Wl(t,!0,n,null,i);break;case"together":Wl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function jr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ff(e,t,n){switch(t.tag){case 3:Fa(t),en();break;case 5:ca(t);break;case 1:fe(t.type)&&Vr(t);break;case 4:ho(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;D(Hr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Oa(e,t,n):(D(U,U.current&1),e=Ge(e,t,n),e!==null?e.sibling:null);D(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Aa(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Ia(e,t,n)}return Ge(e,t,n)}var Ua,Ti,$a,Va;Ua=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ti=function(){};$a=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Et(Ue.current);var i=null;switch(n){case"input":l=bl(e,l),r=bl(e,r),i=[];break;case"select":l=V({},l,{value:void 0}),r=V({},r,{value:void 0}),i=[];break;case"textarea":l=ni(e,l),r=ni(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ur)}li(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var u=l[c];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(u=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==u&&(s!=null||u!=null))if(c==="style")if(u){for(o in u)!u.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&u[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mn.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&F("scroll",e),i||u===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Va=function(e,t,n,r){n!==r&&(t.flags|=4)};function vn(e,t){if(!A)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pf(e,t,n){var r=t.pendingProps;switch(uo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return fe(t.type)&&$r(),ne(t),null;case 3:return r=t.stateNode,nn(),O(de),O(le),vo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Ui(Le),Le=null))),Ti(e,t),ne(t),null;case 5:go(t);var l=Et(Hn.current);if(n=t.type,e!==null&&t.stateNode!=null)$a(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return ne(t),null}if(e=Et(Ue.current),pr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Fe]=t,r[Bn]=i,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(l=0;l<Sn.length;l++)F(Sn[l],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Bo(r,i),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},F("invalid",r);break;case"textarea":Ho(r,i),F("invalid",r)}li(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,u,e),l=["children",""+u]):Mn.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&F("scroll",r)}switch(n){case"input":lr(r),Wo(r,i,!0);break;case"textarea":lr(r),Qo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ur)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Fe]=t,e[Bn]=r,Ua(e,t,!1,!1),t.stateNode=e;e:{switch(o=ii(n,r),n){case"dialog":F("cancel",e),F("close",e),l=r;break;case"iframe":case"object":case"embed":F("load",e),l=r;break;case"video":case"audio":for(l=0;l<Sn.length;l++)F(Sn[l],e);l=r;break;case"source":F("error",e),l=r;break;case"img":case"image":case"link":F("error",e),F("load",e),l=r;break;case"details":F("toggle",e),l=r;break;case"input":Bo(e,r),l=bl(e,r),F("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=V({},r,{value:void 0}),F("invalid",e);break;case"textarea":Ho(e,r),l=ni(e,r),F("invalid",e);break;default:l=r}li(n,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var s=u[i];i==="style"?ys(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&gs(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Rn(e,s):typeof s=="number"&&Rn(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mn.hasOwnProperty(i)?s!=null&&i==="onScroll"&&F("scroll",e):s!=null&&Yi(e,i,s,o))}switch(n){case"input":lr(e),Wo(e,r,!1);break;case"textarea":lr(e),Qo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Yt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Yt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ur)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)Va(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Et(Hn.current),Et(Ue.current),pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Fe]=t,(i=r.nodeValue!==n)&&(e=ge,e!==null))switch(e.tag){case 3:fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fe]=t,t.stateNode=r}return ne(t),null;case 13:if(O(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&he!==null&&t.mode&1&&!(t.flags&128))ia(),en(),t.flags|=98560,i=!1;else if(i=pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[Fe]=t}else en(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),i=!1}else Le!==null&&(Ui(Le),Le=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?G===0&&(G=3):Po())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return nn(),Ti(e,t),e===null&&$n(t.stateNode.containerInfo),ne(t),null;case 10:return fo(t.type._context),ne(t),null;case 17:return fe(t.type)&&$r(),ne(t),null;case 19:if(O(U),i=t.memoizedState,i===null)return ne(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)vn(i,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Kr(e),o!==null){for(t.flags|=128,vn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(U,U.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>ln&&(t.flags|=128,r=!0,vn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Kr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!A)return ne(t),null}else 2*Q()-i.renderingStartTime>ln&&n!==1073741824&&(t.flags|=128,r=!0,vn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,n=U.current,D(U,r?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return zo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?me&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function mf(e,t){switch(uo(t),t.tag){case 1:return fe(t.type)&&$r(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),O(de),O(le),vo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return go(t),null;case 13:if(O(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(U),null;case 4:return nn(),null;case 10:return fo(t.type._context),null;case 22:case 23:return zo(),null;case 24:return null;default:return null}}var gr=!1,re=!1,hf=typeof WeakSet=="function"?WeakSet:Set,S=null;function Ht(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){B(e,t,r)}else n.current=null}function Mi(e,t,n){try{n()}catch(r){B(e,t,r)}}var Iu=!1;function gf(e,t){if(hi=Fr,e=Ys(),io(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,s=-1,c=0,p=0,g=e,m=null;t:for(;;){for(var w;g!==n||l!==0&&g.nodeType!==3||(u=o+l),g!==i||r!==0&&g.nodeType!==3||(s=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(w=g.firstChild)!==null;)m=g,g=w;for(;;){if(g===e)break t;if(m===n&&++c===l&&(u=o),m===i&&++p===r&&(s=o),(w=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=w}n=u===-1||s===-1?null:{start:u,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(gi={focusedElem:e,selectionRange:n},Fr=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,I=k.memoizedState,d=t.stateNode,a=d.getSnapshotBeforeUpdate(t.elementType===t.type?x:ze(t.type,x),I);d.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){B(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return k=Iu,Iu=!1,k}function Pn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Mi(t,n,i)}l=l.next}while(l!==r)}}function cl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ri(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ba(e){var t=e.alternate;t!==null&&(e.alternate=null,Ba(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Fe],delete t[Bn],delete t[wi],delete t[Jd],delete t[qd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wa(e){return e.tag===5||e.tag===3||e.tag===4}function Du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wa(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ii(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(r!==4&&(e=e.child,e!==null))for(Ii(e,t,n),e=e.sibling;e!==null;)Ii(e,t,n),e=e.sibling}function Di(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Di(e,t,n),e=e.sibling;e!==null;)Di(e,t,n),e=e.sibling}var q=null,Pe=!1;function Ze(e,t,n){for(n=n.child;n!==null;)Ha(e,t,n),n=n.sibling}function Ha(e,t,n){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 5:re||Ht(n,t);case 6:var r=q,l=Pe;q=null,Ze(e,t,n),q=r,Pe=l,q!==null&&(Pe?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Pe?(e=q,n=n.stateNode,e.nodeType===8?Fl(e.parentNode,n):e.nodeType===1&&Fl(e,n),On(e)):Fl(q,n.stateNode));break;case 4:r=q,l=Pe,q=n.stateNode.containerInfo,Pe=!0,Ze(e,t,n),q=r,Pe=l;break;case 0:case 11:case 14:case 15:if(!re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Mi(n,t,o),l=l.next}while(l!==r)}Ze(e,t,n);break;case 1:if(!re&&(Ht(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){B(n,t,u)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(re=(r=re)||n.memoizedState!==null,Ze(e,t,n),re=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function Fu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hf),t.forEach(function(r){var l=Cf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function je(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:q=u.stateNode,Pe=!1;break e;case 3:q=u.stateNode.containerInfo,Pe=!0;break e;case 4:q=u.stateNode.containerInfo,Pe=!0;break e}u=u.return}if(q===null)throw Error(y(160));Ha(i,o,l),q=null,Pe=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){B(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qa(t,e),t=t.sibling}function Qa(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(je(t,e),Ie(e),r&4){try{Pn(3,e,e.return),cl(3,e)}catch(x){B(e,e.return,x)}try{Pn(5,e,e.return)}catch(x){B(e,e.return,x)}}break;case 1:je(t,e),Ie(e),r&512&&n!==null&&Ht(n,n.return);break;case 5:if(je(t,e),Ie(e),r&512&&n!==null&&Ht(n,n.return),e.flags&32){var l=e.stateNode;try{Rn(l,"")}catch(x){B(e,e.return,x)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&ps(l,i),ii(u,o);var c=ii(u,i);for(o=0;o<s.length;o+=2){var p=s[o],g=s[o+1];p==="style"?ys(l,g):p==="dangerouslySetInnerHTML"?gs(l,g):p==="children"?Rn(l,g):Yi(l,p,g,c)}switch(u){case"input":ei(l,i);break;case"textarea":ms(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Yt(l,!!i.multiple,w,!1):m!==!!i.multiple&&(i.defaultValue!=null?Yt(l,!!i.multiple,i.defaultValue,!0):Yt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Bn]=i}catch(x){B(e,e.return,x)}}break;case 6:if(je(t,e),Ie(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(x){B(e,e.return,x)}}break;case 3:if(je(t,e),Ie(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{On(t.containerInfo)}catch(x){B(e,e.return,x)}break;case 4:je(t,e),Ie(e);break;case 13:je(t,e),Ie(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(_o=Q())),r&4&&Fu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(re=(c=re)||p,je(t,e),re=c):je(t,e),Ie(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(S=e,p=e.child;p!==null;){for(g=S=p;S!==null;){switch(m=S,w=m.child,m.tag){case 0:case 11:case 14:case 15:Pn(4,m,m.return);break;case 1:Ht(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(x){B(r,n,x)}}break;case 5:Ht(m,m.return);break;case 22:if(m.memoizedState!==null){Au(g);continue}}w!==null?(w.return=m,S=w):Au(g)}p=p.sibling}e:for(p=null,g=e;;){if(g.tag===5){if(p===null){p=g;try{l=g.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=g.stateNode,s=g.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=vs("display",o))}catch(x){B(e,e.return,x)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(x){B(e,e.return,x)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:je(t,e),Ie(e),r&4&&Fu(e);break;case 21:break;default:je(t,e),Ie(e)}}function Ie(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wa(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Rn(l,""),r.flags&=-33);var i=Du(e);Di(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Du(e);Ii(e,u,o);break;default:throw Error(y(161))}}catch(s){B(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vf(e,t,n){S=e,Ya(e)}function Ya(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||gr;if(!o){var u=l.alternate,s=u!==null&&u.memoizedState!==null||re;u=gr;var c=re;if(gr=o,(re=s)&&!c)for(S=l;S!==null;)o=S,s=o.child,o.tag===22&&o.memoizedState!==null?Uu(l):s!==null?(s.return=o,S=s):Uu(l);for(;i!==null;)S=i,Ya(i),i=i.sibling;S=l,gr=u,re=c}Ou(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,S=i):Ou(e)}}function Ou(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||cl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!re)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ze(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&xu(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xu(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&On(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}re||t.flags&512&&Ri(t)}catch(m){B(t,t.return,m)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Au(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Uu(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cl(4,t)}catch(s){B(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){B(t,l,s)}}var i=t.return;try{Ri(t)}catch(s){B(t,i,s)}break;case 5:var o=t.return;try{Ri(t)}catch(s){B(t,o,s)}}}catch(s){B(t,t.return,s)}if(t===e){S=null;break}var u=t.sibling;if(u!==null){u.return=t.return,S=u;break}S=t.return}}var yf=Math.ceil,Zr=Xe.ReactCurrentDispatcher,No=Xe.ReactCurrentOwner,Ee=Xe.ReactCurrentBatchConfig,M=0,J=null,Y=null,b=0,me=0,Qt=mt(0),G=0,Gn=null,Pt=0,dl=0,Co=0,Ln=null,ae=null,_o=0,ln=1/0,$e=null,Jr=!1,Fi=null,st=null,vr=!1,nt=null,qr=0,Tn=0,Oi=null,zr=-1,Pr=0;function oe(){return M&6?Q():zr!==-1?zr:zr=Q()}function at(e){return e.mode&1?M&2&&b!==0?b&-b:ef.transition!==null?(Pr===0&&(Pr=Ls()),Pr):(e=R,e!==0||(e=window.event,e=e===void 0?16:Os(e.type)),e):1}function Me(e,t,n,r){if(50<Tn)throw Tn=0,Oi=null,Error(y(185));Zn(e,n,r),(!(M&2)||e!==J)&&(e===J&&(!(M&2)&&(dl|=n),G===4&&et(e,b)),pe(e,r),n===1&&M===0&&!(t.mode&1)&&(ln=Q()+500,ul&&ht()))}function pe(e,t){var n=e.callbackNode;ed(e,t);var r=Dr(e,e===J?b:0);if(r===0)n!==null&&Go(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Go(n),t===1)e.tag===0?bd($u.bind(null,e)):na($u.bind(null,e)),Xd(function(){!(M&6)&&ht()}),n=null;else{switch(Ts(r)){case 1:n=Ji;break;case 4:n=zs;break;case 16:n=Ir;break;case 536870912:n=Ps;break;default:n=Ir}n=ec(n,Ka.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ka(e,t){if(zr=-1,Pr=0,M&6)throw Error(y(327));var n=e.callbackNode;if(Jt()&&e.callbackNode!==n)return null;var r=Dr(e,e===J?b:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=br(e,r);else{t=r;var l=M;M|=2;var i=Xa();(J!==e||b!==t)&&($e=null,ln=Q()+500,Nt(e,t));do try{xf();break}catch(u){Ga(e,u)}while(1);co(),Zr.current=i,M=l,Y!==null?t=0:(J=null,b=0,t=G)}if(t!==0){if(t===2&&(l=ci(e),l!==0&&(r=l,t=Ai(e,l))),t===1)throw n=Gn,Nt(e,0),et(e,r),pe(e,Q()),n;if(t===6)et(e,r);else{if(l=e.current.alternate,!(r&30)&&!wf(l)&&(t=br(e,r),t===2&&(i=ci(e),i!==0&&(r=i,t=Ai(e,i))),t===1))throw n=Gn,Nt(e,0),et(e,r),pe(e,Q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:kt(e,ae,$e);break;case 3:if(et(e,r),(r&130023424)===r&&(t=_o+500-Q(),10<t)){if(Dr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){oe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=yi(kt.bind(null,e,ae,$e),t);break}kt(e,ae,$e);break;case 4:if(et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Te(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yf(r/1960))-r,10<r){e.timeoutHandle=yi(kt.bind(null,e,ae,$e),r);break}kt(e,ae,$e);break;case 5:kt(e,ae,$e);break;default:throw Error(y(329))}}}return pe(e,Q()),e.callbackNode===n?Ka.bind(null,e):null}function Ai(e,t){var n=Ln;return e.current.memoizedState.isDehydrated&&(Nt(e,t).flags|=256),e=br(e,t),e!==2&&(t=ae,ae=n,t!==null&&Ui(t)),e}function Ui(e){ae===null?ae=e:ae.push.apply(ae,e)}function wf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Re(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~Co,t&=~dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Te(t),r=1<<n;e[n]=-1,t&=~r}}function $u(e){if(M&6)throw Error(y(327));Jt();var t=Dr(e,0);if(!(t&1))return pe(e,Q()),null;var n=br(e,t);if(e.tag!==0&&n===2){var r=ci(e);r!==0&&(t=r,n=Ai(e,r))}if(n===1)throw n=Gn,Nt(e,0),et(e,t),pe(e,Q()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kt(e,ae,$e),pe(e,Q()),null}function jo(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(ln=Q()+500,ul&&ht())}}function Lt(e){nt!==null&&nt.tag===0&&!(M&6)&&Jt();var t=M;M|=1;var n=Ee.transition,r=R;try{if(Ee.transition=null,R=1,e)return e()}finally{R=r,Ee.transition=n,M=t,!(M&6)&&ht()}}function zo(){me=Qt.current,O(Qt)}function Nt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Gd(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(uo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$r();break;case 3:nn(),O(de),O(le),vo();break;case 5:go(r);break;case 4:nn();break;case 13:O(U);break;case 19:O(U);break;case 10:fo(r.type._context);break;case 22:case 23:zo()}n=n.return}if(J=e,Y=e=ct(e.current,null),b=me=t,G=0,Gn=null,Co=dl=Pt=0,ae=Ln=null,St!==null){for(t=0;t<St.length;t++)if(n=St[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}St=null}return e}function Ga(e,t){do{var n=Y;try{if(co(),Cr.current=Xr,Gr){for(var r=$.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Gr=!1}if(zt=0,Z=K=$=null,zn=!1,Qn=0,No.current=null,n===null||n.return===null){G=1,Gn=t,Y=null;break}e:{var i=e,o=n.return,u=n,s=t;if(t=b,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,p=u,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=ju(o);if(w!==null){w.flags&=-257,zu(w,o,u,i,t),w.mode&1&&_u(i,c,t),t=w,s=c;var k=t.updateQueue;if(k===null){var x=new Set;x.add(s),t.updateQueue=x}else k.add(s);break e}else{if(!(t&1)){_u(i,c,t),Po();break e}s=Error(y(426))}}else if(A&&u.mode&1){var I=ju(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),zu(I,o,u,i,t),so(rn(s,u));break e}}i=s=rn(s,u),G!==4&&(G=2),Ln===null?Ln=[i]:Ln.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=Ta(i,s,t);ku(i,d);break e;case 1:u=s;var a=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof a.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(st===null||!st.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Ma(i,u,t);ku(i,v);break e}}i=i.return}while(i!==null)}Ja(n)}catch(E){t=E,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(1)}function Xa(){var e=Zr.current;return Zr.current=Xr,e===null?Xr:e}function Po(){(G===0||G===3||G===2)&&(G=4),J===null||!(Pt&268435455)&&!(dl&268435455)||et(J,b)}function br(e,t){var n=M;M|=2;var r=Xa();(J!==e||b!==t)&&($e=null,Nt(e,t));do try{kf();break}catch(l){Ga(e,l)}while(1);if(co(),M=n,Zr.current=r,Y!==null)throw Error(y(261));return J=null,b=0,G}function kf(){for(;Y!==null;)Za(Y)}function xf(){for(;Y!==null&&!Qc();)Za(Y)}function Za(e){var t=ba(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?Ja(e):Y=t,No.current=null}function Ja(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mf(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,Y=null;return}}else if(n=pf(n,t,me),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);G===0&&(G=5)}function kt(e,t,n){var r=R,l=Ee.transition;try{Ee.transition=null,R=1,Sf(e,t,n,r)}finally{Ee.transition=l,R=r}return null}function Sf(e,t,n,r){do Jt();while(nt!==null);if(M&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(td(e,i),e===J&&(Y=J=null,b=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vr||(vr=!0,ec(Ir,function(){return Jt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ee.transition,Ee.transition=null;var o=R;R=1;var u=M;M|=4,No.current=null,gf(e,n),Qa(n,e),Vd(gi),Fr=!!hi,gi=hi=null,e.current=n,vf(n),Yc(),M=u,R=o,Ee.transition=i}else e.current=n;if(vr&&(vr=!1,nt=e,qr=l),i=e.pendingLanes,i===0&&(st=null),Xc(n.stateNode),pe(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Jr)throw Jr=!1,e=Fi,Fi=null,e;return qr&1&&e.tag!==0&&Jt(),i=e.pendingLanes,i&1?e===Oi?Tn++:(Tn=0,Oi=e):Tn=0,ht(),null}function Jt(){if(nt!==null){var e=Ts(qr),t=Ee.transition,n=R;try{if(Ee.transition=null,R=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,qr=0,M&6)throw Error(y(331));var l=M;for(M|=4,S=e.current;S!==null;){var i=S,o=i.child;if(S.flags&16){var u=i.deletions;if(u!==null){for(var s=0;s<u.length;s++){var c=u[s];for(S=c;S!==null;){var p=S;switch(p.tag){case 0:case 11:case 15:Pn(8,p,i)}var g=p.child;if(g!==null)g.return=p,S=g;else for(;S!==null;){p=S;var m=p.sibling,w=p.return;if(Ba(p),p===c){S=null;break}if(m!==null){m.return=w,S=m;break}S=w}}}var k=i.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var I=x.sibling;x.sibling=null,x=I}while(x!==null)}}S=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,S=o;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Pn(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,S=d;break e}S=i.return}}var a=e.current;for(S=a;S!==null;){o=S;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,S=f;else e:for(o=a;S!==null;){if(u=S,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:cl(9,u)}}catch(E){B(u,u.return,E)}if(u===o){S=null;break e}var v=u.sibling;if(v!==null){v.return=u.return,S=v;break e}S=u.return}}if(M=l,ht(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(nl,e)}catch{}r=!0}return r}finally{R=n,Ee.transition=t}}return!1}function Vu(e,t,n){t=rn(n,t),t=Ta(e,t,1),e=ut(e,t,1),t=oe(),e!==null&&(Zn(e,1,t),pe(e,t))}function B(e,t,n){if(e.tag===3)Vu(e,e,n);else for(;t!==null;){if(t.tag===3){Vu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(st===null||!st.has(r))){e=rn(n,e),e=Ma(t,e,1),t=ut(t,e,1),e=oe(),t!==null&&(Zn(t,1,e),pe(t,e));break}}t=t.return}}function Ef(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=oe(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(b&n)===n&&(G===4||G===3&&(b&130023424)===b&&500>Q()-_o?Nt(e,0):Co|=n),pe(e,t)}function qa(e,t){t===0&&(e.mode&1?(t=ur,ur<<=1,!(ur&130023424)&&(ur=4194304)):t=1);var n=oe();e=Ke(e,t),e!==null&&(Zn(e,t,n),pe(e,n))}function Nf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qa(e,n)}function Cf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),qa(e,n)}var ba;ba=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ce=!1,ff(e,t,n);ce=!!(e.flags&131072)}else ce=!1,A&&t.flags&1048576&&ra(t,Wr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;jr(e,t),e=t.pendingProps;var l=bt(t,le.current);Zt(t,n),l=wo(null,t,r,e,l,n);var i=ko();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(r)?(i=!0,Vr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,mo(t),l.updater=al,t.stateNode=l,l._reactInternals=t,Ci(t,r,e,n),t=zi(null,t,r,!0,i,n)):(t.tag=0,A&&i&&oo(t),ie(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(jr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=jf(r),e=ze(r,e),l){case 0:t=ji(null,t,r,e,n);break e;case 1:t=Tu(null,t,r,e,n);break e;case 11:t=Pu(null,t,r,e,n);break e;case 14:t=Lu(null,t,r,ze(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),ji(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),Tu(e,t,r,l,n);case 3:e:{if(Fa(t),e===null)throw Error(y(387));r=t.pendingProps,i=t.memoizedState,l=i.element,aa(e,t),Yr(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=rn(Error(y(423)),t),t=Mu(e,t,r,n,l);break e}else if(r!==l){l=rn(Error(y(424)),t),t=Mu(e,t,r,n,l);break e}else for(he=ot(t.stateNode.containerInfo.firstChild),ge=t,A=!0,Le=null,n=ua(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),r===l){t=Ge(e,t,n);break e}ie(e,t,r,n)}t=t.child}return t;case 5:return ca(t),e===null&&Si(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,vi(r,l)?o=null:i!==null&&vi(r,i)&&(t.flags|=32),Da(e,t),ie(e,t,o,n),t.child;case 6:return e===null&&Si(t),null;case 13:return Oa(e,t,n);case 4:return ho(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tn(t,null,r,n):ie(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),Pu(e,t,r,l,n);case 7:return ie(e,t,t.pendingProps,n),t.child;case 8:return ie(e,t,t.pendingProps.children,n),t.child;case 12:return ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,D(Hr,r._currentValue),r._currentValue=o,i!==null)if(Re(i.value,o)){if(i.children===l.children&&!de.current){t=Ge(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=He(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?s.next=s:(s.next=p.next,p.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ei(i.return,n,t),u.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(y(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Ei(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ie(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Zt(t,n),l=Ne(l),r=r(l),t.flags|=1,ie(e,t,r,n),t.child;case 14:return r=t.type,l=ze(r,t.pendingProps),l=ze(r.type,l),Lu(e,t,r,l,n);case 15:return Ra(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),jr(e,t),t.tag=1,fe(r)?(e=!0,Vr(t)):e=!1,Zt(t,n),La(t,r,l),Ci(t,r,l,n),zi(null,t,r,!0,e,n);case 19:return Aa(e,t,n);case 22:return Ia(e,t,n)}throw Error(y(156,t.tag))};function ec(e,t){return js(e,t)}function _f(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Se(e,t,n,r){return new _f(e,t,n,r)}function Lo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jf(e){if(typeof e=="function")return Lo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gi)return 11;if(e===Xi)return 14}return 2}function ct(e,t){var n=e.alternate;return n===null?(n=Se(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Lo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Dt:return Ct(n.children,l,i,t);case Ki:o=8,l|=8;break;case Xl:return e=Se(12,n,t,l|2),e.elementType=Xl,e.lanes=i,e;case Zl:return e=Se(13,n,t,l),e.elementType=Zl,e.lanes=i,e;case Jl:return e=Se(19,n,t,l),e.elementType=Jl,e.lanes=i,e;case cs:return fl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ss:o=10;break e;case as:o=9;break e;case Gi:o=11;break e;case Xi:o=14;break e;case Je:o=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Se(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Ct(e,t,n,r){return e=Se(7,e,r,t),e.lanes=n,e}function fl(e,t,n,r){return e=Se(22,e,r,t),e.elementType=cs,e.lanes=n,e.stateNode={isHidden:!1},e}function Hl(e,t,n){return e=Se(6,e,null,t),e.lanes=n,e}function Ql(e,t,n){return t=Se(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cl(0),this.expirationTimes=Cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function To(e,t,n,r,l,i,o,u,s){return e=new zf(e,t,n,u,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Se(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mo(i),e}function Pf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:It,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function tc(e){if(!e)return ft;e=e._reactInternals;e:{if(Mt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(fe(n))return ta(e,n,t)}return t}function nc(e,t,n,r,l,i,o,u,s){return e=To(n,r,!0,e,l,i,o,u,s),e.context=tc(null),n=e.current,r=oe(),l=at(n),i=He(r,l),i.callback=t??null,ut(n,i,l),e.current.lanes=l,Zn(e,l,r),pe(e,r),e}function pl(e,t,n,r){var l=t.current,i=oe(),o=at(l);return n=tc(n),t.context===null?t.context=n:t.pendingContext=n,t=He(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ut(l,t,o),e!==null&&(Me(e,l,o,i),Nr(e,l,o)),o}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Mo(e,t){Bu(e,t),(e=e.alternate)&&Bu(e,t)}function Lf(){return null}var rc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ro(e){this._internalRoot=e}ml.prototype.render=Ro.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));pl(e,t,null,null)};ml.prototype.unmount=Ro.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lt(function(){pl(null,e,null,null)}),t[Ye]=null}};function ml(e){this._internalRoot=e}ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=Is();e={blockedOn:null,target:e,priority:t};for(var n=0;n<be.length&&t!==0&&t<be[n].priority;n++);be.splice(n,0,e),n===0&&Fs(e)}};function Io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wu(){}function Tf(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=el(o);i.call(c)}}var o=nc(t,r,e,0,null,!1,!1,"",Wu);return e._reactRootContainer=o,e[Ye]=o.current,$n(e.nodeType===8?e.parentNode:e),Lt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var c=el(s);u.call(c)}}var s=To(e,0,!1,null,null,!1,!1,"",Wu);return e._reactRootContainer=s,e[Ye]=s.current,$n(e.nodeType===8?e.parentNode:e),Lt(function(){pl(t,s,n,r)}),s}function gl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var u=l;l=function(){var s=el(o);u.call(s)}}pl(t,o,e,l)}else o=Tf(n,t,e,l,r);return el(o)}Ms=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xn(t.pendingLanes);n!==0&&(qi(t,n|1),pe(t,Q()),!(M&6)&&(ln=Q()+500,ht()))}break;case 13:Lt(function(){var r=Ke(e,1);if(r!==null){var l=oe();Me(r,e,1,l)}}),Mo(e,1)}};bi=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=oe();Me(t,e,134217728,n)}Mo(e,134217728)}};Rs=function(e){if(e.tag===13){var t=at(e),n=Ke(e,t);if(n!==null){var r=oe();Me(n,e,t,r)}Mo(e,t)}};Is=function(){return R};Ds=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};ui=function(e,t,n){switch(t){case"input":if(ei(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ol(r);if(!l)throw Error(y(90));fs(r),ei(r,l)}}}break;case"textarea":ms(e,n);break;case"select":t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}};xs=jo;Ss=Lt;var Mf={usingClientEntryPoint:!1,Events:[qn,Ut,ol,ws,ks,jo]},yn={findFiberByHostInstance:xt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rf={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cs(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||Lf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{nl=yr.inject(Rf),Ae=yr}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mf;ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Io(t))throw Error(y(200));return Pf(e,t,null,n)};ye.createRoot=function(e,t){if(!Io(e))throw Error(y(299));var n=!1,r="",l=rc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=To(e,1,!1,null,null,n,!1,r,l),e[Ye]=t.current,$n(e.nodeType===8?e.parentNode:e),new Ro(t)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Cs(t),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return Lt(e)};ye.hydrate=function(e,t,n){if(!hl(t))throw Error(y(200));return gl(null,e,t,!0,n)};ye.hydrateRoot=function(e,t,n){if(!Io(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=rc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=nc(t,null,e,1,n??null,l,!1,i,o),e[Ye]=t.current,$n(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ml(t)};ye.render=function(e,t,n){if(!hl(t))throw Error(y(200));return gl(null,e,t,!1,n)};ye.unmountComponentAtNode=function(e){if(!hl(e))throw Error(y(40));return e._reactRootContainer?(Lt(function(){gl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};ye.unstable_batchedUpdates=jo;ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hl(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return gl(e,t,n,!1,r)};ye.version="18.3.1-next-f1338f8080-20240426";function lc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lc)}catch(e){console.error(e)}}lc(),ls.exports=ye;var If=ls.exports,Hu=If;Kl.createRoot=Hu.createRoot,Kl.hydrateRoot=Hu.hydrateRoot;var Df={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Ff=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Of=(e,t)=>{const n=Oe.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:o,children:u,...s},c)=>Oe.createElement("svg",{ref:c,...Df,width:l,height:l,stroke:r,strokeWidth:o?Number(i)*24/Number(l):i,className:`lucide lucide-${Ff(e)}`,...s},[...t.map(([p,g])=>Oe.createElement(p,g)),...(Array.isArray(u)?u:[u])||[]]));return n.displayName=`${e}`,n};var gt=Of;const Af=gt("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]),Uf=gt("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]),$f=gt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),Vf=gt("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]),Yl=gt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),Qu=gt("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),Yu=gt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),Bf=gt("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),Wf=()=>{const[e,t]=Oe.useState("home"),[n,r]=Oe.useState(!1),[l,i]=Oe.useState({x:0,y:0});Oe.useEffect(()=>{const p=()=>{r(window.scrollY>50);const w=["home","about","skills","projects","experience","contact"].find(k=>{const x=document.getElementById(k);if(x){const I=x.getBoundingClientRect();return I.top<=100&&I.bottom>=100}return!1});w&&t(w)},g=m=>{i({x:m.clientX,y:m.clientY})};return window.addEventListener("scroll",p),window.addEventListener("mousemove",g),()=>{window.removeEventListener("scroll",p),window.removeEventListener("mousemove",g)}},[]);const o=p=>{const g=document.getElementById(p);g&&g.scrollIntoView({behavior:"smooth"})},u=[{title:"NowWeather App",description:"A modern, real-time weather application with stunning glassmorphism UI and dynamic weather effects. Features city search with autocomplete, 7-day forecast, hourly predictions, temperature unit toggle (°C/°F), and live local time display. Includes 31 comprehensive tests covering weather conditions, formatting, and hook behavior.",tech:["React","Vite","OpenWeatherMap API","Axios","Vitest","CSS Glassmorphism"],github:"https://github.com/FaisalMubeen2001/NowWeather",live:"https://weatherapp-nowweather.netlify.app/",image:"https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop"},{title:"News Aggregator",description:"An AI-powered news aggregator that fetches, summarizes, and analyzes sentiment of articles across multiple categories. Features real-time news from NewsAPI, AI summarization using Groq (LLaMA 3.3), sentiment analysis, daily email digest, and automated fetching every 30 minutes. Includes CI/CD pipeline and Docker deployment.",tech:["Python","FastAPI","React","Tailwind CSS","Groq AI","NewsAPI","Docker"],github:"https://github.com/FaisalMubeen2001/News-Aggregator",live:"https://newsaggregatorproj.netlify.app",image:"https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=500&fit=crop"},{title:"Smart Expense Tracker",description:"A full-stack personal finance tracker with budget alerts and interactive analytics. Features real-time expense tracking, category-based budgeting, and visual spending patterns. Improved mobile responsiveness to 100% and reduced page rendering time by ~25%.",tech:["React","JavaScript","CSS","Vite"],github:"https://github.com/FaisalMubeen2001/smart-expense-tracker",live:"https://smart-expense-tracker-personal.netlify.app/",image:"https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop"},{title:"Movie List App",description:"A React-based movie discovery application allowing users to search through 500+ movies and mark favorites. Optimized performance with Vite build tool, reducing load time by ~40% compared to traditional CRA setup. Features 5+ reusable React components for scalability and clean code structure.",tech:["React","JavaScript","HTML","CSS","API"],github:"https://github.com/FaisalMubeen2001/movie-list-app",live:"https://movielistjsx.netlify.app/",image:"https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=800&h=500&fit=crop"},{title:"Football Player Match Rating Predictor",description:"A machine learning system comparing 5 regression algorithms to predict player rating performance. Models evaluated based on R², RMSE, and MAE scores to determine the best-fit model. Technologies used include Python, scikit-learn, pandas, numpy, matplotlib, and seaborn.",tech:["Python","Machine Learning","scikit-learn","pandas","numpy","matplotlib"],github:"https://github.com/FaisalMubeen2001/football-rating-predictor",live:null,image:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=500&fit=crop"}],s={"ServiceNow & ITSM":["ServiceNow CSA","ITSM","Flow Designer","User Administration","Incident Management","Knowledge Base"],"Frontend Development":["React","JavaScript","HTML","CSS","Vite","Responsive Design"],"Backend & Database":["Python","Flask","Node.js","MySQL","REST APIs","SQL"],"Cloud, AWS & ML/AI":["AWS EC2","AWS S3","CloudFormation","AWS Lex","AWS Comprehend","numpy","matplotlib","seaborn","Data Analysis"],"Programming Languages":["Python","JavaScript","Java","C++","C"],"Tools & Platforms":["Git","VS Code","Jupyter Notebook","Agile/Scrum","ServiceNow Platform"]},c=[{role:"Trainee Associate",company:"TechnoGen India, Hyderabad",period:"May 2025 - Present",description:`Currently a TL of a 5-member ServiceNow Team. 
ServiceNow Administration: Configured platform modules and managed user administration, groups and roles.
Full-stack Development: Developed web applications using React & JS, reducing load times by 40%.
Cloud Architecture: Built hands-on projects demonstrating scalable frontend and AWS-based architecture.
Agile Collaboration: Delivered full-stack modules within sprint timelines in a 3-member team.`}];return h.jsxs("div",{className:"portfolio-container",children:[h.jsx("div",{className:"custom-cursor",style:{left:`${l.x}px`,top:`${l.y}px`}}),h.jsx("nav",{className:`nav ${n?"scrolled":""}`,children:h.jsxs("div",{className:"nav-content",children:[h.jsxs("div",{className:"nav-logo",children:[h.jsx(Uf,{size:24}),h.jsx("span",{children:"Faisal Mubeen"})]}),h.jsx("div",{className:"nav-links",children:["home","about","skills","projects","experience","contact"].map(p=>h.jsx("button",{onClick:()=>o(p),className:`nav-link ${e===p?"active":""}`,children:p.charAt(0).toUpperCase()+p.slice(1)},p))})]})}),h.jsxs("section",{id:"home",className:"hero-section",children:[h.jsxs("div",{className:"hero-background",children:[h.jsx("div",{className:"gradient-orb orb-1"}),h.jsx("div",{className:"gradient-orb orb-2"}),h.jsx("div",{className:"gradient-orb orb-3"})]}),h.jsxs("div",{className:"hero-content",children:[h.jsxs("div",{className:"hero-badge",children:[h.jsx(Bf,{size:16}),h.jsx("span",{children:"TechnoGen India Pvt. Ltd."})]}),h.jsxs("h1",{className:"hero-title",children:["Hi, I'm ",h.jsx("span",{className:"highlight",children:"Faisal"})]}),h.jsx("h2",{className:"hero-subtitle",children:"Trainee Associate - ServiceNow"}),h.jsx("p",{className:"hero-description",children:"Certified ServiceNow System Administrator (CSA) and Trainee Associate with a strong background in full-stack development, cloud technologies, and machine learning. Experienced in building scalable web applications with React and AWS, and skilled in Python and JavaScript. Proven track record of optimizing performance and collaborating in Agile environments to deliver high-quality technical solutions."}),h.jsxs("div",{className:"hero-buttons",children:[h.jsx("button",{onClick:()=>o("projects"),className:"btn-primary",children:"View My Work"}),h.jsx("button",{onClick:()=>o("contact"),className:"btn-secondary",children:"Get In Touch"})]}),h.jsxs("div",{className:"social-links",children:[h.jsx("a",{href:"https://github.com/FaisalMubeen2001",target:"_blank",rel:"noopener noreferrer",className:"social-link",children:h.jsx(Yl,{size:20})}),h.jsx("a",{href:"https://www.linkedin.com/in/faisal-mubeen-984b681bb/",target:"_blank",rel:"noopener noreferrer",className:"social-link",children:h.jsx(Qu,{size:20})}),h.jsx("a",{href:"mailto:faisalmubeen2001@gmail.com",className:"social-link",children:h.jsx(Yu,{size:20})})]})]})]}),h.jsx("section",{id:"about",className:"about-section",children:h.jsxs("div",{className:"section-container",children:[h.jsxs("div",{className:"section-header",children:[h.jsx("h2",{className:"section-title",children:"About Me"}),h.jsx("div",{className:"section-line"})]}),h.jsxs("div",{className:"about-content",children:[h.jsxs("div",{className:"about-text",children:[h.jsx("p",{children:"I'm a Trainee Associate who values clarity, discipline, and continuous improvement. I'm naturally analytical and prefer depth over noise, whether that's in my work, the way I learn, or how I spend my time. I'm comfortable working independently, taking ownership of tasks, and figuring things out without needing constant direction."}),h.jsx("p",{children:"Outside of work, I closely follow football and cricket, with a growing interest in tennis and Formula 1. These aren't just casual interests, they reflect how I think: strategy, performance under pressure, and marginal gains matter to me. I also spend time watching English-language films and TV shows and listening to music, as these help me in relaxing."}),h.jsx("p",{children:"I'm intentionally building my skill set and professional identity step by step. I don't chase shortcuts or surface-level success because I want to focus on learning properly, executing well, and becoming better than I was yesterday."}),h.jsxs("div",{className:"about-stats",children:[h.jsxs("div",{className:"stat",children:[h.jsx("div",{className:"stat-number",children:"3+"}),h.jsx("div",{className:"stat-label",children:"Projects Completed"})]}),h.jsxs("div",{className:"stat",children:[h.jsx("div",{className:"stat-number",children:"9"}),h.jsx("div",{className:"stat-label",children:"Months Experience"})]}),h.jsxs("div",{className:"stat",children:[h.jsx("div",{className:"stat-number",children:"15+"}),h.jsx("div",{className:"stat-label",children:"Technologies Used"})]})]}),h.jsxs("a",{href:"/Faisal_Mubeen_Resume.pdf",download:"Faisal_Mubeen_Resume.pdf",className:"btn-download",style:{textDecoration:"none",color:"inherit"},children:[h.jsx($f,{size:18}),"Download Resume"]})]}),h.jsx("div",{className:"about-image",children:h.jsx("div",{className:"image-frame",children:h.jsx("img",{src:"/images/1900540100069-new.jpg",alt:"Profile"})})})]})]})}),h.jsx("section",{id:"skills",className:"skills-section",children:h.jsxs("div",{className:"section-container",children:[h.jsxs("div",{className:"section-header",children:[h.jsx("h2",{className:"section-title",children:"Skills & Technologies"}),h.jsx("div",{className:"section-line"})]}),h.jsx("div",{className:"skills-grid",children:Object.entries(s).map(([p,g],m)=>h.jsxs("div",{className:"skill-category",style:{animationDelay:`${m*.1}s`},children:[h.jsx("h3",{className:"skill-category-title",children:p}),h.jsx("div",{className:"skill-tags",children:g.map(w=>h.jsx("span",{className:"skill-tag",children:w},w))})]},p))})]})}),h.jsx("section",{id:"projects",className:"projects-section",children:h.jsxs("div",{className:"section-container",children:[h.jsxs("div",{className:"section-header",children:[h.jsx("h2",{className:"section-title",children:"Featured Projects"}),h.jsx("div",{className:"section-line"})]}),h.jsx("div",{className:"projects-grid",children:u.map((p,g)=>h.jsxs("div",{className:"project-card",style:{animationDelay:`${g*.1}s`},children:[h.jsxs("div",{className:"project-image",children:[h.jsx("img",{src:p.image,alt:p.title}),h.jsx("div",{className:"project-overlay",children:h.jsxs("div",{className:"project-links",children:[p.github&&h.jsx("a",{href:p.github,target:"_blank",rel:"noopener noreferrer",className:"project-link",children:h.jsx(Yl,{size:20})}),p.live&&h.jsx("a",{href:p.live,target:"_blank",rel:"noopener noreferrer",className:"project-link",children:h.jsx(Vf,{size:20})})]})})]}),h.jsxs("div",{className:"project-content",children:[h.jsx("h3",{className:"project-title",children:p.title}),h.jsx("p",{className:"project-description",children:p.description}),h.jsx("div",{className:"project-tech",children:p.tech.map(m=>h.jsx("span",{className:"tech-badge",children:m},m))})]})]},g))})]})}),h.jsx("section",{id:"experience",className:"experience-section",children:h.jsxs("div",{className:"section-container",children:[h.jsxs("div",{className:"section-header",children:[h.jsx("h2",{className:"section-title",children:"Experience"}),h.jsx("div",{className:"section-line"})]}),h.jsx("div",{className:"timeline",children:c.map((p,g)=>h.jsxs("div",{className:"timeline-item",style:{animationDelay:`${g*.15}s`},children:[h.jsx("div",{className:"timeline-dot"}),h.jsxs("div",{className:"timeline-content",children:[h.jsx("div",{className:"timeline-icon",children:h.jsx(Af,{size:20})}),h.jsx("h3",{className:"timeline-role",children:p.role}),h.jsx("div",{className:"timeline-company",children:p.company}),h.jsx("div",{className:"timeline-period",children:p.period}),h.jsx("p",{className:"timeline-description",children:p.description})]})]},g))})]})}),h.jsx("section",{id:"contact",className:"contact-section",children:h.jsxs("div",{className:"section-container",children:[h.jsxs("div",{className:"section-header",children:[h.jsx("h2",{className:"section-title",children:"Let's Work Together"}),h.jsx("div",{className:"section-line"})]}),h.jsxs("div",{className:"contact-content",children:[h.jsx("p",{className:"contact-description",children:"I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!"}),h.jsxs("div",{className:"contact-methods",children:[h.jsxs("a",{href:"mailto:faisalmubeen2001@gmail.com",className:"contact-card",children:[h.jsx(Yu,{size:32}),h.jsx("h3",{children:"Email Me"}),h.jsx("p",{children:"faisalmubeen2001@gmail.com"})]}),h.jsxs("a",{href:"https://www.linkedin.com/in/faisal-mubeen-984b681bb/",target:"_blank",rel:"noopener noreferrer",className:"contact-card",children:[h.jsx(Qu,{size:32}),h.jsx("h3",{children:"LinkedIn"}),h.jsx("p",{children:"Connect with me"})]}),h.jsxs("a",{href:"https://github.com/FaisalMubeen2001",target:"_blank",rel:"noopener noreferrer",className:"contact-card",children:[h.jsx(Yl,{size:32}),h.jsx("h3",{children:"GitHub"}),h.jsx("p",{children:"Check out my project codes"})]})]})]})]})}),h.jsx("footer",{className:"footer",children:h.jsxs("div",{className:"footer-content",children:[h.jsx("p",{children:"Designed & Built by Faisal"}),h.jsxs("p",{className:"footer-year",children:["© ",new Date().getFullYear()," All rights reserved"]})]})}),h.jsx("style",{jsx:!0,children:`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .portfolio-container {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #0a0a0f;
          color: #e4e4e7;
          overflow-x: hidden;
          cursor: none;
        }

        /* Custom Cursor */
        .custom-cursor {
          width: 20px;
          height: 20px;
          border: 2px solid #7c3aed;
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: none;
          mix-blend-mode: difference;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all 0.3s ease;
        }

        .nav.scrolled {
          background: rgba(10, 10, 15, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(124, 58, 237, 0.1);
          padding: 1rem 0;
        }

        .nav-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 1.25rem;
          color: #7c3aed;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          background: none;
          border: none;
          color: #a1a1aa;
          cursor: pointer;
          font-size: 0.95rem;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #7c3aed, #a855f7);
          transition: width 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #e4e4e7;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          animation: float 20s infinite ease-in-out;
        }

        .orb-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #7c3aed, transparent);
          top: -200px;
          left: -200px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #a855f7, transparent);
          bottom: -150px;
          right: -150px;
          animation-delay: 7s;
        }

        .orb-3 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #6366f1, transparent);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: 14s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(100px, -100px) scale(1.1); }
          66% { transform: translate(-100px, 100px) scale(0.9); }
        }

        .hero-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem;
          position: relative;
          z-index: 1;
          text-align: center;
          animation: fadeInUp 1s ease;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 2rem;
          color: #a855f7;
          font-size: 0.875rem;
          margin-bottom: 2rem;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #e4e4e7, #a1a1aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .highlight {
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 600;
          color: #a1a1aa;
          margin-bottom: 1.5rem;
        }

        .hero-description {
          font-size: 1.125rem;
          color: #71717a;
          max-width: 700px;
          margin: 0 auto 2.5rem;
          line-height: 1.8;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s ease;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.4);
        }

        .btn-secondary {
          padding: 1rem 2rem;
          background: transparent;
          color: #e4e4e7;
          border: 2px solid #7c3aed;
          border-radius: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .btn-secondary:hover {
          background: rgba(124, 58, 237, 0.1);
          transform: translateY(-2px);
        }

        .social-links {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .social-link {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(124, 58, 237, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a855f7;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .social-link:hover {
          background: #7c3aed;
          color: white;
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(124, 58, 237, 0.3);
        }

        /* Section Styles */
        .section-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 6rem 2rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #e4e4e7, #a1a1aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-line {
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #7c3aed, #a855f7);
          margin: 0 auto;
          border-radius: 2px;
        }

        /* About Section */
        .about-section {
          background: linear-gradient(180deg, #0a0a0f 0%, #14141f 100%);
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-text p {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #a1a1aa;
          margin-bottom: 1.5rem;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin: 3rem 0;
        }

        .stat {
          text-align: center;
          padding: 1.5rem;
          background: rgba(124, 58, 237, 0.05);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 1rem;
          transition: all 0.3s ease;
        }

        .stat:hover {
          background: rgba(124, 58, 237, 0.1);
          transform: translateY(-5px);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #a1a1aa;
          font-size: 0.875rem;
        }

        .btn-download {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          margin-top: 1rem;
        }

        .btn-download:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.4);
        }

        .about-image {
          display: flex;
          justify-content: center;
          margin-top: 3rem;
        }

        .image-frame {
  width: 400px;
  height: 400px;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  border: 3px solid rgba(124, 58, 237, 0.3);
  box-shadow: 0 20px 60px rgba(124, 58, 237, 0.3);
}

.image-frame::before {
  content: '';
  position: absolute;
  inset: -3px;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.3), transparent);
  z-index: -1;
  border-radius: 2rem;
}

        .image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .image-frame:hover img {
          transform: scale(1.05);
        }

        /* Skills Section */
        .skills-section {
          background: #0a0a0f;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          padding: 2rem;
          background: rgba(124, 58, 237, 0.05);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 1.5rem;
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        .skill-category:hover {
          background: rgba(124, 58, 237, 0.1);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.2);
        }

        .skill-category-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #e4e4e7;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          padding: 0.5rem 1rem;
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 0.5rem;
          color: #a855f7;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: #7c3aed;
          color: white;
          transform: translateY(-2px);
        }

        /* Projects Section */
        .projects-section {
          background: linear-gradient(180deg, #0a0a0f 0%, #14141f 100%);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: rgba(124, 58, 237, 0.05);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 1.5rem;
          overflow: hidden;
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(124, 58, 237, 0.3);
        }

        .project-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 10, 15, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #7c3aed;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          background: #a855f7;
          transform: scale(1.1);
        }

        .project-content {
          padding: 2rem;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #e4e4e7;
          margin-bottom: 1rem;
        }

        .project-description {
          color: #a1a1aa;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-badge {
          padding: 0.375rem 0.75rem;
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 0.375rem;
          color: #a855f7;
          font-size: 0.75rem;
          font-weight: 500;
        }

        /* Experience Section */
        .experience-section {
          background: #0a0a0f;
        }

        .timeline {
          position: relative;
          padding-left: 3rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, #7c3aed, #a855f7);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        .timeline-dot {
          position: absolute;
          left: -3.5rem;
          top: 0;
          width: 16px;
          height: 16px;
          background: #7c3aed;
          border: 4px solid #0a0a0f;
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.2);
        }

        .timeline-content {
          padding: 2rem;
          background: rgba(124, 58, 237, 0.05);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 1rem;
          transition: all 0.3s ease;
        }

        .timeline-content:hover {
          background: rgba(124, 58, 237, 0.1);
          transform: translateX(10px);
        }

        .timeline-icon {
          display: inline-flex;
          padding: 0.75rem;
          background: rgba(124, 58, 237, 0.2);
          border-radius: 0.5rem;
          color: #a855f7;
          margin-bottom: 1rem;
        }

        .timeline-role {
          font-size: 1.5rem;
          font-weight: 700;
          color: #e4e4e7;
          margin-bottom: 0.5rem;
        }

        .timeline-company {
          font-size: 1.125rem;
          color: #a855f7;
          margin-bottom: 0.5rem;
        }

        .timeline-period {
          color: #71717a;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .timeline-description {
  color: #a1a1aa;
  line-height: 1.6;
  white-space: pre-line;
}

        /* Contact Section */
        .contact-section {
          background: linear-gradient(180deg, #14141f 0%, #0a0a0f 100%);
        }

        .contact-content {
          text-align: center;
        }

        .contact-description {
          font-size: 1.25rem;
          color: #a1a1aa;
          max-width: 700px;
          margin: 0 auto 3rem;
          line-height: 1.8;
        }

        .contact-methods {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-card {
          padding: 3rem 2rem;
          background: rgba(124, 58, 237, 0.05);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 1.5rem;
          transition: all 0.3s ease;
          cursor: pointer;
          text-align: center;
          color: inherit;
          text-decoration: none;
        }

        .contact-card:hover {
          background: rgba(124, 58, 237, 0.1);
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(124, 58, 237, 0.3);
        }

        .contact-card svg {
          color: #a855f7;
          margin-bottom: 1.5rem;
        }

        .contact-card h3 {
          font-size: 1.5rem;
          color: #e4e4e7;
          margin-bottom: 0.5rem;
        }

        .contact-card p {
          color: #a1a1aa;
          font-size: 1rem;
        }

        /* Footer */
        .footer {
          background: #0a0a0f;
          border-top: 1px solid rgba(124, 58, 237, 0.1);
          padding: 2rem;
        }

        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          text-align: center;
          color: #71717a;
        }

        .footer-content p {
          margin-bottom: 0.5rem;
        }

        .footer-year {
          font-size: 0.875rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .about-content {
            grid-template-columns: 1fr;
          }

          .image-frame {
            width: 100%;
            max-width: 400px;
          }

          .nav-links {
            gap: 1rem;
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 300px;
          }

          .about-stats {
            grid-template-columns: 1fr;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .timeline {
            padding-left: 2rem;
          }

          .timeline-dot {
            left: -2.5rem;
          }

          .custom-cursor {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .section-container {
            padding: 4rem 1rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.25rem;
          }
        }
      `})]})};Kl.createRoot(document.getElementById("root")).render(h.jsx(Sc.StrictMode,{children:h.jsx(Wf,{})}));
